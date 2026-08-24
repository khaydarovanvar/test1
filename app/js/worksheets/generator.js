/* Worksheet generators — pure data, no DOM. Reused by the print centre and by
   the daily plan ("print today's homework"). */

import * as M from '../content/math.js';
import { ALPHABET, LETTERS } from '../content/alphabet.js';
import { VOCAB, ALL_WORDS, NUMBER_WORDS } from '../content/vocab.js';
import { SENTENCES } from '../content/reading.js';

export const TOPICS = {
  english: [
    { id: 'alphabet',  name: 'Alphabet Training', uz: 'Alifbo mashqi' },
    { id: 'tracing',   name: 'Letter Tracing',    uz: 'Harf chizish' },
    { id: 'words',     name: 'Word Practice',     uz: "So'z mashqi" },
    { id: 'vocab',     name: 'Football Vocabulary', uz: "Futbol lug'ati" },
    { id: 'sentences', name: 'Sentence Practice', uz: 'Gap mashqi' },
    { id: 'matching',  name: 'Match Word & Picture', uz: "Rasm va so'z" },
  ],
  writing: [
    { id: 'strokes',   name: 'Lines & Curves',    uz: 'Chiziq va egri' },
    { id: 'tracing',   name: 'Letter Tracing',    uz: 'Harf chizish' },
    { id: 'numwrite',  name: 'Number Writing',    uz: 'Raqam yozish' },
    { id: 'words',     name: 'Word Writing',      uz: "So'z yozish" },
    { id: 'sentences', name: 'Sentence Writing',  uz: 'Gap yozish' },
  ],
  math: [
    { id: 'numwrite',  name: 'Number Writing',    uz: 'Raqam yozish' },
    { id: 'counting',  name: 'Counting',          uz: 'Sanash' },
    { id: 'addition',  name: 'Addition',          uz: "Qo'shish" },
    { id: 'subtraction', name: 'Subtraction',     uz: 'Ayirish' },
    { id: 'multiplication', name: 'Multiplication', uz: "Ko'paytirish" },
    { id: 'division',  name: 'Division',          uz: "Bo'lish" },
    { id: 'mixed',     name: 'Mixed Practice',    uz: 'Aralash' },
    { id: 'wordproblems', name: 'Word Problems',  uz: 'Masalalar' },
  ],
};

const DIFF_MAP = { easy: 1, medium: 3, hard: 5 };

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, Math.round(v)));

/**
 * @returns {{title,titleUz,subject,topic,difficulty,count,theme,sections:Array}}
 */
export function generateWorksheet({ subject = 'math', topic = 'addition', difficulty = 'easy', count = 20, theme = 'football', name = 'Ali' } = {}) {
  const d = DIFF_MAP[difficulty] ?? 1;
  const ctx = { d, count, theme, football: theme === 'football' };
  const builder = BUILDERS[`${subject}:${topic}`] || BUILDERS[`any:${topic}`];
  const sections = builder ? builder(ctx) : [{ type: 'note', text: 'Bu mavzu hali tayyor emas.' }];
  const t = (TOPICS[subject] || []).find(x => x.id === topic);
  return {
    subject, topic, difficulty, count, theme, name,
    title: t ? t.name : topic,
    titleUz: t ? t.uz : topic,
    /* what was actually produced — the pool can be smaller than the request */
    items: countItems(sections),
    sections,
  };
}

const icon = ctx => (ctx.football ? M.pick(['⚽', '🥅', '👟', '🏆', '⭐']) : M.pick(['🍎', '⭐', '🔺', '🟦', '🍀']));

const BUILDERS = {
  /* ---------------- English ---------------- */
  'english:alphabet': (ctx) => {
    const n = clamp(ctx.count, 5, 26);
    const letters = LETTERS.slice(0, n);
    return [
      { type: 'instruction', en: 'Trace and write each letter.', uz: 'Har bir harfni chizib, keyin o‘zing yoz.' },
      { type: 'alphabet-rows', rows: letters.map(l => {
        const info = ALPHABET.find(a => a.l === l);
        return { letter: l, lower: l.toLowerCase(), word: info.word, emoji: info.emoji, uz: info.uz, repeats: 5 };
      }) },
    ];
  },

  'english:tracing': (ctx) => tracingSection(ctx),
  'writing:tracing': (ctx) => tracingSection(ctx),

  'english:words': (ctx) => wordSection(ctx),
  'writing:words': (ctx) => wordSection(ctx),

  'english:vocab': (ctx) => {
    const pool = ctx.d <= 1 ? VOCAB.t1 : ctx.d <= 3 ? [...VOCAB.t1, ...VOCAB.t2] : ALL_WORDS;
    const items = M.shuffle(pool).slice(0, clamp(Math.round(ctx.count / 2), 6, Math.min(24, pool.length)));
    return [
      { type: 'instruction', en: 'Read the word. Copy it. Draw a line to the picture.', uz: "So'zni o'qi, ko'chir va rasmga chiziq tort." },
      { type: 'vocab-table', items: items.map(w => ({ en: w.en, uz: w.uz, emoji: w.emoji })) },
    ];
  },

  'english:sentences': (ctx) => sentenceSection(ctx),
  'writing:sentences': (ctx) => sentenceSection(ctx),

  'english:matching': (ctx) => {
    const pool = ctx.d <= 1 ? VOCAB.t1 : [...VOCAB.t1, ...VOCAB.t2];
    const items = M.shuffle(pool).slice(0, clamp(Math.round(ctx.count / 2), 4, Math.min(12, pool.length)));
    return [
      { type: 'instruction', en: 'Draw a line from the word to the picture.', uz: "So'zdan rasmga chiziq tort." },
      { type: 'matching', left: items.map(w => w.en), right: M.shuffle(items).map(w => ({ emoji: w.emoji, en: w.en })) },
    ];
  },

  /* ---------------- Writing ---------------- */
  'writing:strokes': (ctx) => {
    const kinds = [
      { label: 'Straight pass', kind: 'straight' },
      { label: 'Long ball',     kind: 'slope' },
      { label: 'Dribble',       kind: 'zigzag' },
      { label: 'Curled shot',   kind: 'wave' },
      { label: 'Round the ball', kind: 'loops' },
      { label: 'Step-over',     kind: 'updown' },
    ];
    const n = clamp(Math.round(ctx.count / 2), 4, 12);
    return [
      { type: 'instruction', en: 'Trace the line and help the ball reach the goal.', uz: "Chiziq ustidan yur va to'pni golgacha olib bor." },
      { type: 'stroke-rows', rows: Array.from({ length: n }, (_, i) => kinds[i % kinds.length]) },
    ];
  },

  'writing:numwrite': (ctx) => numberWritingSection(ctx),
  'math:numwrite': (ctx) => numberWritingSection(ctx),

  /* ---------------- Math ---------------- */
  'math:counting': (ctx) => {
    const n = clamp(ctx.count, 6, 60);
    const max = ctx.d <= 1 ? 5 : ctx.d <= 3 ? 10 : 20;
    return [
      { type: 'instruction', en: 'Count and write the number.', uz: 'Sana va raqamni yoz.' },
      { type: 'counting', items: Array.from({ length: n }, () => {
        const c = M.rand(1, max);
        return { count: c, emoji: icon(ctx), answer: c };
      }) },
    ];
  },

  'math:addition':       (ctx) => columnSection(ctx, '+'),
  'math:subtraction':    (ctx) => columnSection(ctx, '-'),
  'math:multiplication': (ctx) => inlineSection(ctx, '×'),
  'math:division':       (ctx) => inlineSection(ctx, '÷'),

  'math:mixed': (ctx) => {
    const per = Math.max(2, Math.round(ctx.count / 4));
    const mk = (op) => Array.from({ length: per }, () => genFor(op, ctx.d));
    const all = [...mk('+'), ...mk('-'), ...mk('×'), ...mk('÷')];
    return [
      { type: 'instruction', en: 'Solve all the problems.', uz: 'Barcha misollarni yech.' },
      { type: 'inline-problems', items: M.shuffle(all) },
    ];
  },

  'math:wordproblems': (ctx) => {
    /* word problems are long — a page holds far fewer than 50 sums */
    const n = clamp(Math.round(ctx.count / 2), 3, 24);
    const items = M.shuffle(M.makeWordProblems(n, ctx.d));
    return [
      { type: 'instruction', en: 'Read and solve.', uz: "O'qi va yech." },
      { type: 'word-problems', items },
    ];
  },
};

/* ---------------- shared section builders ---------------- */

function tracingSection(ctx) {
  const n = clamp(Math.round(ctx.count / 2), 3, 14);
  const start = M.rand(0, Math.max(0, 26 - n));
  const letters = LETTERS.slice(start, start + n);
  return [
    { type: 'instruction', en: 'Trace the big letters. Then write your own.', uz: 'Katta harflarni chizib chiq, keyin o‘zing yoz.' },
    { type: 'trace-big', items: letters.map(l => {
      const info = ALPHABET.find(a => a.l === l);
      return { glyph: l, lower: l.toLowerCase(), word: info.word, emoji: info.emoji };
    }) },
  ];
}

function wordSection(ctx) {
  const pool = ctx.d <= 1 ? VOCAB.t1 : ctx.d <= 3 ? [...VOCAB.t1, ...VOCAB.t2] : ALL_WORDS;
  const n = clamp(Math.round(ctx.count / 2), 4, Math.min(16, pool.length));
  const items = M.shuffle(pool).slice(0, n);
  return [
    { type: 'instruction', en: 'Trace the word. Then write it two more times.', uz: "So'zni chizib chiq, keyin ikki marta o'zing yoz." },
    { type: 'word-rows', items: items.map(w => ({ word: w.en.toUpperCase(), lower: w.en, uz: w.uz, emoji: w.emoji })) },
  ];
}

function sentenceSection(ctx) {
  const band = ctx.d <= 1 ? 'easy' : ctx.d <= 3 ? 'medium' : 'hard';
  const n = clamp(Math.round(ctx.count / 4), 3, SENTENCES[band].length);
  const items = M.shuffle(SENTENCES[band]).slice(0, n);
  return [
    { type: 'instruction', en: 'Read the sentence. Copy it on the lines.', uz: "Gapni o'qi va chiziqqa ko'chir." },
    { type: 'sentence-rows', items: items.map(s => ({ en: s.en, uz: s.uz, emoji: s.emoji, lines: 2 })) },
  ];
}

function numberWritingSection(ctx) {
  const from = 0, to = clamp(ctx.count - 1, ctx.d <= 1 ? 9 : ctx.d <= 3 ? 12 : 15, 20);
  const nums = [];
  for (let i = from; i <= to; i++) nums.push(i);
  return [
    { type: 'instruction', en: 'Trace each number, then write it.', uz: 'Har bir raqamni chizib, keyin yoz.' },
    { type: 'number-rows', items: nums.map(n => ({ n, word: NUMBER_WORDS[n] || '', repeats: 5 })) },
  ];
}

function genFor(op, d) {
  const q = op === '+' ? M.genAddition(d) : op === '-' ? M.genSubtraction(d)
    : op === '×' ? M.genMultiplication(d) : M.genDivision(d);
  return { a: q.a, b: q.b, op: q.op, answer: q.answer };
}

function columnSection(ctx, op) {
  const n = Math.max(6, Math.min(48, ctx.count));
  const items = Array.from({ length: n }, () => genFor(op, ctx.d));
  return [
    { type: 'instruction',
      en: op === '+' ? 'Add. Write the answer under the line.' : 'Subtract. Write the answer under the line.',
      uz: op === '+' ? "Qo'sh. Javobni chiziq ostiga yoz." : 'Ayir. Javobni chiziq ostiga yoz.' },
    { type: 'column-problems', op, items },
  ];
}

function inlineSection(ctx, op) {
  const n = Math.max(6, Math.min(48, ctx.count));
  const items = Array.from({ length: n }, () => genFor(op, ctx.d));
  return [
    { type: 'instruction',
      en: op === '×' ? 'Multiply. Write the answer on the line.' : 'Divide. Write the answer on the line.',
      uz: op === '×' ? "Ko'paytir. Javobni chiziqqa yoz." : "Bo'l. Javobni chiziqqa yoz." },
    { type: 'inline-problems', items },
  ];
}

/** How many exercises the sheet really contains. */
export function countItems(sections) {
  let n = 0;
  for (const s of sections) {
    if (s.items) n += s.items.length;
    else if (s.rows) n += s.rows.length;
    else if (s.left) n += s.left.length;
  }
  return n;
}

/* Answer key: flatten every section into printable answers. */
export function answerKey(ws) {
  const out = [];
  ws.sections.forEach(sec => {
    if (sec.type === 'column-problems' || sec.type === 'inline-problems') {
      sec.items.forEach((it, i) => out.push({ n: out.length + 1, q: `${it.a} ${it.op} ${it.b}`, a: it.answer }));
    } else if (sec.type === 'counting') {
      sec.items.forEach(it => out.push({ n: out.length + 1, q: `${it.emoji} × ${it.count}`, a: it.answer }));
    } else if (sec.type === 'word-problems') {
      sec.items.forEach(it => out.push({ n: out.length + 1, q: it.en, a: it.answer }));
    } else if (sec.type === 'vocab-table') {
      sec.items.forEach(it => out.push({ n: out.length + 1, q: `${it.emoji} ${it.en}`, a: it.uz }));
    } else if (sec.type === 'matching') {
      sec.left.forEach((w, i) => {
        const m = sec.right.find(r => r.en === w);
        out.push({ n: out.length + 1, q: w, a: m ? m.emoji : '' });
      });
    }
  });
  return out;
}
