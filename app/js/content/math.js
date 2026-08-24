/* Math generators — football framed. Everything is a pure function so the same
   generators feed lessons, games AND the printable worksheets. */

export function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function pick(arr) { return arr[rand(0, arr.length - 1)]; }
export function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = rand(0, i);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const BALL = '⚽';

/* ---------- counting ---------- */
export function genCounting(diff = 1) {
  const max = diff <= 1 ? 5 : diff === 2 ? 10 : 20;
  const n = rand(1, max);
  return {
    type: 'count',
    n,
    emoji: pick(['⚽', '🥅', '👟', '🏆', '⭐', '🏃']),
    answer: n,
    options: numberOptions(n, max),
    tag: 'counting',
  };
}

export function numberOptions(answer, max = 20) {
  const set = new Set([answer]);
  while (set.size < 3) {
    const cand = Math.max(0, answer + rand(-3, 3));
    if (cand <= max + 3) set.add(cand);
  }
  return shuffle([...set]);
}

/* ---------- comparison ---------- */
export function genCompare(diff = 1) {
  const max = diff <= 1 ? 6 : diff === 2 ? 12 : 30;
  let a = rand(1, max), b = rand(1, max);
  while (a === b) b = rand(1, max);
  return {
    type: 'compare',
    a, b,
    answer: a > b ? 'A' : 'B',
    tag: 'compare',
  };
}

/* ---------- addition ---------- */
export function genAddition(diff = 1) {
  let a, b;
  if (diff <= 1) { a = rand(1, 5); b = rand(1, 5); }
  else if (diff === 2) { a = rand(1, 10); b = rand(1, 10); }
  else if (diff === 3) { a = rand(10, 40); b = rand(1, 9); }
  else if (diff === 4) { a = rand(10, 50); b = rand(10, 49); }
  else { a = rand(50, 400); b = rand(50, 400); }
  return makeOp(a, b, '+', a + b, diff);
}

/* ---------- subtraction ---------- */
export function genSubtraction(diff = 1) {
  let a, b;
  if (diff <= 1) { a = rand(2, 6); b = rand(1, a); }
  else if (diff === 2) { a = rand(3, 10); b = rand(1, a); }
  else if (diff === 3) { a = rand(15, 50); b = rand(1, 9); }
  else if (diff === 4) { a = rand(30, 90); b = rand(10, 29); }
  else { a = rand(100, 900); b = rand(10, 99); }
  return makeOp(a, b, '-', a - b, diff);
}

/* ---------- multiplication ---------- */
export function genMultiplication(diff = 1) {
  let a, b;
  if (diff <= 1) { a = rand(1, 3); b = rand(1, 4); }
  else if (diff === 2) { a = rand(2, 5); b = rand(2, 5); }
  else if (diff === 3) { a = rand(2, 9); b = rand(2, 9); }
  else { a = rand(2, 12); b = rand(2, 12); }
  return makeOp(a, b, '×', a * b, diff);
}

/* ---------- division ---------- */
export function genDivision(diff = 1) {
  let b, q;
  if (diff <= 1) { b = rand(2, 3); q = rand(1, 4); }
  else if (diff === 2) { b = rand(2, 5); q = rand(1, 5); }
  else if (diff === 3) { b = rand(2, 9); q = rand(2, 9); }
  else { b = rand(2, 12); q = rand(2, 12); }
  return makeOp(b * q, b, '÷', q, diff);
}

function makeOp(a, b, op, answer, diff) {
  return {
    type: 'op', a, b, op, answer,
    options: numberOptions(answer, answer + 10),
    tag: opTag(op),
    diff,
  };
}
export function opTag(op) {
  return { '+': 'addition', '-': 'subtraction', '×': 'multiplication', '÷': 'division' }[op];
}

/* Targeted practice for a specific fact Ali keeps missing (adaptive drills).
   Returns easier neighbours, then the original fact last. */
export function drillLadder(a, b, op) {
  const steps = [];
  const shrink = (x, k) => Math.max(1, x - k);
  if (op === '+' || op === '-') {
    steps.push([shrink(a, 2), shrink(b, 1)], [shrink(a, 1), shrink(b, 1)], [a, shrink(b, 1)], [shrink(a, 1), b]);
  } else {
    steps.push([shrink(a, 1), shrink(b, 1)], [a, shrink(b, 1)], [shrink(a, 1), b]);
  }
  steps.push([a, b]);
  return steps.map(([x, y]) => {
    const ans = op === '+' ? x + y : op === '-' ? Math.max(0, x - y) : op === '×' ? x * y : Math.max(1, Math.round(x / y));
    const A = op === '÷' ? ans * y : x;
    return makeOp(A, y, op, op === '÷' ? ans : (op === '+' ? A + y : op === '-' ? A - y : A * y), 1);
  });
}

/* ---------- word problems (Uzbek → bilingual → English only) ---------- */
export const WORD_PROBLEMS = [
  {
    id: 'wp-add-1', op: '+', minLevel: 2,
    uz: 'Ali 2 ta gol urdi. Keyin yana 3 ta gol urdi. Jami nechta gol?',
    en: 'Ali scores 2 goals. Then he scores 3 more goals. How many goals in total?',
    a: 2, b: 3, answer: 5, visual: '⚽',
  },
  {
    id: 'wp-sub-1', op: '-', minLevel: 2,
    uz: "7 ta to'p bor. Ali 3 tasini oldi. Nechta to'p qoldi?",
    en: 'There are 7 footballs. Ali takes 3. How many are left?',
    a: 7, b: 3, answer: 4, visual: '⚽',
  },
  {
    id: 'wp-mul-1', op: '×', minLevel: 3,
    uz: "3 ta jamoa bor. Har bir jamoada 4 tadan to'p bor. Jami nechta to'p?",
    en: 'There are 3 teams. Each team has 4 balls. How many balls in total?',
    a: 3, b: 4, answer: 12, visual: '⚽',
  },
  {
    id: 'wp-div-1', op: '÷', minLevel: 3,
    uz: "12 ta to'p bor. 4 nafar o'yinchi teng bo'lishadi. Har biriga nechtadan to'p tegadi?",
    en: 'A football team has 12 balls. 4 players share them equally. How many balls does each player get?',
    a: 12, b: 4, answer: 3, visual: '⚽',
  },
  {
    id: 'wp-add-2', op: '+', minLevel: 3,
    uz: 'Stadionda 25 nafar odam bor edi. Yana 14 nafar keldi. Hozir nechta odam bor?',
    en: 'There are 25 people in the stadium. 14 more people come. How many people are there now?',
    a: 25, b: 14, answer: 39, visual: '🧑',
  },
  {
    id: 'wp-sub-2', op: '-', minLevel: 4,
    uz: 'Mashq 45 daqiqa davom etdi. 23 daqiqa o‘tdi. Necha daqiqa qoldi?',
    en: 'Practice is 45 minutes long. 23 minutes have passed. How many minutes are left?',
    a: 45, b: 23, answer: 22, visual: '⏱️',
  },
  {
    id: 'wp-mul-2', op: '×', minLevel: 4,
    uz: '5 ta jamoa. Har birida 11 nafar o‘yinchi. Jami nechta o‘yinchi?',
    en: 'There are 5 teams. Each team has 11 players. How many players in total?',
    a: 5, b: 11, answer: 55, visual: '🏃',
  },
  {
    id: 'wp-multi-1', op: '+', minLevel: 5,
    uz: 'Ali birinchi taymda 3 ta, ikkinchi taymda 4 ta gol urdi. Do‘sti 2 ta gol urdi. Jamoa jami nechta gol urdi?',
    en: 'Ali scores 3 goals in the first half and 4 goals in the second half. His friend scores 2 goals. How many goals does the team score in total?',
    a: 7, b: 2, answer: 9, visual: '⚽',
  },
];

export function wordProblemsForLevel(level) {
  return WORD_PROBLEMS.filter(w => w.minLevel <= level);
}

/* Templates so the worksheet generator can produce as many word problems as
   the parent asks for, instead of running out after eight. */
export const WORD_PROBLEM_TEMPLATES = [
  { op: '+', visual: '⚽',
    range: d => [rand(1, d <= 1 ? 5 : d <= 3 ? 20 : 60), rand(1, d <= 1 ? 4 : d <= 3 ? 15 : 40)],
    en: (a, b) => `Ali scores ${a} goals. Then he scores ${b} more. How many goals in total?`,
    uz: (a, b) => `Ali ${a} ta gol urdi. Keyin yana ${b} ta gol urdi. Jami nechta gol?`,
    ans: (a, b) => a + b },
  { op: '+', visual: '🧑',
    range: d => [rand(5, d <= 1 ? 10 : d <= 3 ? 40 : 200), rand(3, d <= 1 ? 8 : d <= 3 ? 30 : 150)],
    en: (a, b) => `There are ${a} people in the stadium. ${b} more people come. How many people are there now?`,
    uz: (a, b) => `Stadionda ${a} nafar odam bor edi. Yana ${b} nafar keldi. Hozir nechta odam bor?`,
    ans: (a, b) => a + b },
  { op: '-', visual: '⚽',
    range: d => { const a = rand(d <= 1 ? 4 : d <= 3 ? 12 : 60, d <= 1 ? 9 : d <= 3 ? 40 : 200); return [a, rand(1, a - 1)]; },
    en: (a, b) => `There are ${a} footballs. Ali takes ${b}. How many are left?`,
    uz: (a, b) => `${a} ta to'p bor. Ali ${b} tasini oldi. Nechta to'p qoldi?`,
    ans: (a, b) => a - b },
  { op: '-', visual: '⏱️',
    range: d => { const a = rand(d <= 1 ? 5 : d <= 3 ? 30 : 90, d <= 1 ? 10 : d <= 3 ? 60 : 120); return [a, rand(1, a - 1)]; },
    en: (a, b) => `Practice is ${a} minutes long. ${b} minutes have passed. How many minutes are left?`,
    uz: (a, b) => `Mashq ${a} daqiqa davom etadi. ${b} daqiqa o'tdi. Necha daqiqa qoldi?`,
    ans: (a, b) => a - b },
  { op: '×', visual: '⚽',
    range: d => [rand(2, d <= 1 ? 4 : d <= 3 ? 8 : 12), rand(2, d <= 1 ? 5 : d <= 3 ? 9 : 12)],
    en: (a, b) => `There are ${a} teams. Each team has ${b} balls. How many balls in total?`,
    uz: (a, b) => `${a} ta jamoa bor. Har bir jamoada ${b} tadan to'p bor. Jami nechta to'p?`,
    ans: (a, b) => a * b },
  { op: '×', visual: '🏃',
    range: d => [rand(2, d <= 1 ? 4 : d <= 3 ? 7 : 10), d <= 1 ? rand(2, 5) : 11],
    en: (a, b) => `There are ${a} teams. Each team has ${b} players. How many players in total?`,
    uz: (a, b) => `${a} ta jamoa. Har birida ${b} nafar o'yinchi. Jami nechta o'yinchi?`,
    ans: (a, b) => a * b },
  { op: '÷', visual: '⚽',
    range: d => { const b = rand(2, d <= 1 ? 4 : d <= 3 ? 8 : 12); const q = rand(2, d <= 1 ? 4 : d <= 3 ? 9 : 12); return [b * q, b]; },
    en: (a, b) => `A football team has ${a} balls. ${b} players share them equally. How many balls does each player get?`,
    uz: (a, b) => `Jamoada ${a} ta to'p bor. ${b} nafar o'yinchi teng bo'lishadi. Har biriga nechtadan to'p tegadi?`,
    ans: (a, b) => a / b },
  { op: '÷', visual: '🏆',
    range: d => { const b = rand(2, d <= 1 ? 3 : d <= 3 ? 6 : 10); const q = rand(2, d <= 1 ? 4 : d <= 3 ? 8 : 12); return [b * q, b]; },
    en: (a, b) => `The coach has ${a} medals for ${b} teams. Each team gets the same number. How many medals for each team?`,
    uz: (a, b) => `Murabbiyda ${b} ta jamoa uchun ${a} ta medal bor. Har bir jamoaga teng bo'linadi. Har biriga nechtadan medal?`,
    ans: (a, b) => a / b },
];

/** Build `n` word problems at difficulty `d`, cycling the templates. */
export function makeWordProblems(n, d = 1) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const t = WORD_PROBLEM_TEMPLATES[i % WORD_PROBLEM_TEMPLATES.length];
    const [a, b] = t.range(d);
    out.push({ en: t.en(a, b), uz: t.uz(a, b), answer: t.ans(a, b), op: t.op, a, b, visual: t.visual });
  }
  return out;
}
