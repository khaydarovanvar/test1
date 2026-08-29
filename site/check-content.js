#!/usr/bin/env node
/* Fast structural check of the lesson data — no browser needed.
   Run from the site/ directory:  node check-content.js            */
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const here = __dirname;
const ctx = {};
ctx.window = ctx; ctx.self = ctx; ctx.document = {};
vm.createContext(ctx);
for (const f of ['assets/mathfmt.js', 'assets/figures.js', 'assets/interactive.js',
                 'data/g8-alg.js', 'data/g8-geo.js']) {
  vm.runInContext(fs.readFileSync(path.join(here, f), 'utf8'), ctx, { filename: f });
}

/* The placeholder pattern must match lesson.js exactly, or a figure
   silently renders as literal text (this is how {{fig:symmetry3D}} slipped
   through: the renderer's name class excluded digits). */
const LESSON = fs.readFileSync(path.join(here, 'assets/lesson.js'), 'utf8');
const FIGPAT = /\{\{fig:([a-zA-Z0-9_]+)(?::([^}]*))?\}\}/g;
if (!LESSON.includes(FIGPAT.source)) {
  console.log('WARNING: the figure pattern here no longer matches the one in lesson.js');
}

const HOURS = { alg: { 1: 27, 2: 21, 3: 30, 4: 24 }, geo: { 1: 18, 2: 14, 3: 20, 4: 16 } };
const issues = [];
const all = [].concat(ctx.G8_ALG || [], ctx.G8_GEO || []);

for (const [stream, arr] of [['alg', ctx.G8_ALG], ['geo', ctx.G8_GEO]]) {
  const byQ = {};
  let next = 1;
  for (const t of arr) {
    byQ[t.quarter] = (byQ[t.quarter] || 0) + t.hours;
    const [a, b] = String(t.lessons).replace(/[–—]/g, '-').split('-').map(Number);
    const end = isNaN(b) ? a : b;
    if (a !== next) issues.push(`${t.id}: starts at lesson ${a}, expected ${next}`);
    if (end - a + 1 !== t.hours) issues.push(`${t.id}: lessons ${t.lessons} span ${end - a + 1}, hours say ${t.hours}`);
    next = end + 1;
  }
  for (const q of [1, 2, 3, 4]) {
    if (byQ[q] !== HOURS[stream][q]) {
      issues.push(`${stream} quarter ${q}: ${byQ[q]} hours, the annual plan says ${HOURS[stream][q]}`);
    }
  }
}

const seen = new Set();
for (const t of all) {
  if (seen.has(t.id)) issues.push(`duplicate id ${t.id}`);
  seen.add(t.id);

  for (const k of ['easy', 'med', 'hard']) {
    const set = (t.practice || {})[k];
    if (!set || set.length !== 7) { issues.push(`${t.id}: practice.${k} has ${set ? set.length : 'no'} items, want 7`); continue; }
    set.forEach((row, i) => {
      if (!Array.isArray(row) || row.length !== 2) issues.push(`${t.id}: practice.${k}[${i}] is not a [question, answer] pair`);
      else if (!String(row[1]).trim()) issues.push(`${t.id}: practice.${k}[${i}] has an empty answer`);
    });
  }
  if (!t.terms || t.terms.length < 4) issues.push(`${t.id}: only ${(t.terms || []).length} terminology rows`);
  (t.terms || []).forEach((r, i) => {
    if (r.length !== 3) issues.push(`${t.id}: terms[${i}] needs English, Uzbek and Russian`);
  });
  if (!t.quiz || t.quiz.length < 3) issues.push(`${t.id}: only ${(t.quiz || []).length} quiz questions`);
  (t.quiz || []).forEach((q, i) => {
    if (q.c == null || q.c < 0 || q.c >= q.a.length) issues.push(`${t.id}: quiz[${i}] correct index out of range`);
  });
  if (!t.examples || !t.examples.length) issues.push(`${t.id}: no worked examples`);
  (t.examples || []).forEach((e, i) => { if (!e.ans) issues.push(`${t.id}: example ${i} has no answer`); });
  if (!t.homework || !t.homework.length) issues.push(`${t.id}: no homework`);
  if (!t.subtitle) issues.push(`${t.id}: no subtitle`);
  if (!t.uz || !t.cam) issues.push(`${t.id}: missing a textbook reference`);

  for (const [i, s] of (t.sections || []).entries()) {
    let m;
    FIGPAT.lastIndex = 0;
    const named = new Set();
    while ((m = FIGPAT.exec(s.html)) !== null) {
      named.add(m[1]);
      if (!ctx.FIG[m[1]]) issues.push(`${t.id}: section ${i} wants a figure "${m[1]}" that does not exist`);
    }
    // anything that looks like a placeholder but the pattern refused
    for (const raw of s.html.match(/\{\{fig:[^}]*\}\}/g) || []) {
      const name = raw.slice(6).split(':')[0];
      if (!named.has(name)) issues.push(`${t.id}: section ${i} placeholder "${raw.slice(0, 40)}" will not be replaced`);
    }
    for (const [open, close] of [['<table', '</table>'], ['<td', '</td>'], ['<tr', '</tr>'], ['<ul', '</ul>'], ['<ol', '</ol>']]) {
      const a = (s.html.match(new RegExp(open, 'g')) || []).length;
      const b = (s.html.match(new RegExp(close, 'g')) || []).length;
      if (a !== b) issues.push(`${t.id}: section ${i} has ${a} ${open}> against ${b} ${close}`);
    }
  }

  if (t.interactive && typeof ctx.INT[t.interactive.type] !== 'function') {
    issues.push(`${t.id}: no interactive model named "${t.interactive.type}"`);
  }
}

for (const name of Object.keys(ctx.FIG)) {
  try {
    const out = ctx.FIG[name]();
    if (!out || out.indexOf('<svg') !== 0) issues.push(`figure ${name} did not return an <svg>`);
  } catch (e) { issues.push(`figure ${name} threw: ${e.message}`); }
}

console.log(`${all.length} topics · ${Object.keys(ctx.FIG).length} figures · ${all.length * 21} practice problems`);
console.log(issues.length ? `ISSUES (${issues.length}):\n  ${issues.join('\n  ')}` : 'all checks pass');
process.exit(issues.length ? 1 : 0);
