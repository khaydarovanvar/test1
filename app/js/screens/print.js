/* 🖨️ FOOTBALL PRACTICE CENTER — parent-facing worksheet builder. */

import { el, pageHeader, toast, clear } from '../ui.js';
import * as S from '../state.js';
import { TOPICS, generateWorksheet } from '../worksheets/generator.js';
import { renderWorksheet } from '../worksheets/render.js';

const SUBJECTS = [
  { id: 'english', label: '⚽ English', uz: 'Ingliz tili' },
  { id: 'writing', label: '✏️ Writing', uz: 'Yozuv' },
  { id: 'math',    label: '🔢 Math',    uz: 'Matematika' },
];
const DIFFS = [
  { id: 'easy',   label: 'Easy',   uz: 'Oson' },
  { id: 'medium', label: 'Medium', uz: "O'rtacha" },
  { id: 'hard',   label: 'Hard',   uz: 'Qiyin' },
];
const COUNTS = [10, 20, 30, 50];
const THEMES = [
  { id: 'football', label: '⚽ Football', uz: 'Futbol' },
  { id: 'general',  label: '📘 General',  uz: 'Oddiy' },
];

let cfg = {
  subject: 'math', topic: 'addition', difficulty: 'easy',
  count: 20, theme: 'football', answers: false, name: 'Ali',
};

export function printScreen() {
  const preview = el('div', { class: 'ws-preview', id: 'ws-preview' });
  const topicWrap = el('div', { class: 'ctl-row', id: 'topic-row' });

  const build = () => {
    const ws = generateWorksheet(cfg);
    clear(preview).append(renderWorksheet(ws, { answers: false }));
    if (cfg.answers) {
      const keyPages = renderWorksheet(ws, { answers: true });
      /* only append the key page, not a duplicate worksheet */
      const key = keyPages.querySelector('.sheet--key');
      if (key) preview.querySelector('.sheets').append(key);
    }
    toast('Mashq varaqasi tayyor! 🖨️', { emoji: '📄' });
  };

  const renderTopics = () => {
    clear(topicWrap);
    (TOPICS[cfg.subject] || []).forEach(t => {
      topicWrap.append(pill(t.name, t.uz, cfg.topic === t.id, () => {
        cfg.topic = t.id; renderTopics(); build();
      }));
    });
  };

  const node = el('div', { class: 'screen screen--print' },
    pageHeader('🖨️ FOOTBALL PRACTICE CENTER', "Chop etiladigan mashq varaqalari (A4)"),

    el('div', { class: 'no-print' },
      el('div', { class: 'ctl-card' },
        ctlLabel('1. Subject', 'Fan'),
        el('div', { class: 'ctl-row' },
          ...SUBJECTS.map(s => pill(s.label, s.uz, cfg.subject === s.id, (e, node) => {
            cfg.subject = s.id;
            cfg.topic = (TOPICS[s.id][0] || {}).id;
            refreshPills(node.parentElement, s.id);
            renderTopics(); build();
          }, s.id)),
        ),

        ctlLabel('2. Topic', 'Mavzu'),
        topicWrap,

        ctlLabel('3. Difficulty', 'Qiyinlik'),
        el('div', { class: 'ctl-row' },
          ...DIFFS.map(d => pill(d.label, d.uz, cfg.difficulty === d.id, (e, node) => {
            cfg.difficulty = d.id; refreshPills(node.parentElement, d.id); build();
          }, d.id)),
        ),

        ctlLabel('4. Number of questions', 'Savollar soni'),
        el('div', { class: 'ctl-row' },
          ...COUNTS.map(c => pill(String(c), '', cfg.count === c, (e, node) => {
            cfg.count = c; refreshPills(node.parentElement, String(c)); build();
          }, String(c))),
        ),

        ctlLabel('5. Theme', 'Mavzu uslubi'),
        el('div', { class: 'ctl-row' },
          ...THEMES.map(t => pill(t.label, t.uz, cfg.theme === t.id, (e, node) => {
            cfg.theme = t.id; refreshPills(node.parentElement, t.id); build();
          }, t.id)),
        ),

        el('label', { class: 'ctl-check' },
          el('input', { type: 'checkbox', onChange: e => { cfg.answers = e.target.checked; build(); } }),
          el('span', {}, '🔑 Javoblar varaqasini ham qo‘shish (ANSWER KEY — ota-ona uchun)'),
        ),

        el('div', { class: 'ctl-actions' },
          el('button', { class: 'btn btn--primary btn--big', type: 'button', onClick: build }, '⚡ GENERATE WORKSHEET'),
          el('button', { class: 'btn btn--gold btn--big', type: 'button', onClick: () => {
            S.bumpStat('worksheetsPrinted');
            window.print();
          } }, '🖨️ PRINT'),
        ),
        el('p', { class: 'note' }, 'Maslahat: brauzerda "Background graphics" ni yoqing va A4 qog‘ozni tanlang.'),
      ),

      el('div', { class: 'quick-packs' },
        el('h3', {}, '⚡ Tez to‘plamlar'),
        el('div', { class: 'ctl-row' },
          quick('🔤 Alphabet A–Z', { subject: 'english', topic: 'alphabet', difficulty: 'easy', count: 30 }, renderTopics, build),
          quick('✏️ Tracing', { subject: 'writing', topic: 'tracing', difficulty: 'easy', count: 20 }, renderTopics, build),
          quick('➕ Addition 20', { subject: 'math', topic: 'addition', difficulty: 'easy', count: 20 }, renderTopics, build),
          quick('➖ Subtraction 20', { subject: 'math', topic: 'subtraction', difficulty: 'medium', count: 20 }, renderTopics, build),
          quick('✖️ Times tables', { subject: 'math', topic: 'multiplication', difficulty: 'medium', count: 20 }, renderTopics, build),
          quick('➗ Division', { subject: 'math', topic: 'division', difficulty: 'medium', count: 20 }, renderTopics, build),
          quick('⚽ Football words', { subject: 'english', topic: 'vocab', difficulty: 'medium', count: 20 }, renderTopics, build),
          quick('🧠 Word problems', { subject: 'math', topic: 'wordproblems', difficulty: 'medium', count: 20 }, renderTopics, build),
        ),
      ),
    ),

    preview,
  );

  renderTopics();
  setTimeout(build, 0);
  return node;
}

function quick(label, patch, renderTopics, build) {
  return el('button', { class: 'pill pill--quick', type: 'button', onClick: () => {
    Object.assign(cfg, patch);
    document.querySelectorAll('.screen--print .pill').forEach(p => p.classList.remove('is-on'));
    renderTopics(); build();
    document.getElementById('ws-preview')?.scrollIntoView({ behavior: 'smooth' });
  } }, label);
}

function ctlLabel(en, uz) {
  return el('div', { class: 'ctl-label' }, el('strong', {}, en), el('span', {}, uz));
}

function pill(label, sub, on, onClick, value) {
  const b = el('button', { class: `pill${on ? ' is-on' : ''}`, type: 'button', dataset: { v: value || label } },
    el('span', {}, label),
    sub ? el('small', {}, sub) : null,
  );
  b.addEventListener('click', (e) => onClick(e, b));
  return b;
}

function refreshPills(row, value) {
  row.querySelectorAll('.pill').forEach(p => p.classList.toggle('is-on', p.dataset.v === value));
}
