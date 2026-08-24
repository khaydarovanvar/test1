/* Lesson engine: descriptor -> steps -> playable training session.
   Keeps content and UI separate: builders below only produce plain step data. */

import { el, celebrate, toast, stars as starsEl, modal, speakerButton } from '../ui.js';
import { speak, sfx } from '../audio.js';
import * as S from '../state.js';
import { ALPHABET, letterInfo, STROKE_TIPS } from '../content/alphabet.js';
import { VOCAB, wordsForLevel } from '../content/vocab.js';
import { PHONICS, SENTENCES, STORIES } from '../content/reading.js';
import * as M from '../content/math.js';
import { MATH_TERMS, termsForTier, sayDigits, sayWords, sayUzbek } from '../content/mathEnglish.js';
import {
  choiceQuestion, countQuestion, compareQuestion, opQuestion, typeQuestion,
  columnQuestion, orderQuestion, listenQuestion, prompt, praise, nudge, mathEnglishLine,
} from './question.js';
import { tracePad, STROKE_SETS } from './trace.js';

/* ============================ step builders ============================ */

const teach = (o) => ({ kind: 'teach', ...o });
const ask = (o) => ({ kind: 'ask', ...o });
const trace = (o) => ({ kind: 'trace', ...o });

function lettersLesson({ from, to }) {
  const start = ALPHABET.findIndex(a => a.l === from);
  const end = ALPHABET.findIndex(a => a.l === to);
  const set = ALPHABET.slice(start, end + 1);
  const steps = [];
  set.forEach(a => {
    steps.push(teach({
      letter: a.l, emoji: a.emoji,
      title: a.l,
      en: `${a.l} is for ${a.word}`,
      uz: `${a.word} — ${a.uz}`,
      say: `${a.l}. ${a.word}`,
    }));
    /* Find the letter mini-game */
    const distract = M.shuffle(ALPHABET.filter(x => x.l !== a.l)).slice(0, 4).map(x => x.l);
    steps.push(ask({
      build: (on) => choiceQuestion({
        en: `Find ${a.l}!`, uz: `${a.l} harfini top!`,
        options: M.shuffle([a.l, ...distract]),
        answer: a.l, onAnswer: on, columns: 5,
      }),
      tag: `letter-${a.l}`, subject: 'english',
    }));
  });
  /* listening round */
  set.slice(0, 3).forEach(a => {
    const distract = M.shuffle(ALPHABET.filter(x => x.l !== a.l)).slice(0, 2).map(x => x.l);
    steps.push(ask({
      build: (on) => listenQuestion({
        word: a.l, options: M.shuffle([a.l, ...distract]), answer: a.l, onAnswer: on,
      }),
      tag: `letter-sound-${a.l}`, subject: 'english',
    }));
  });
  return steps;
}

function phonicsLesson({ patterns }) {
  const steps = [];
  patterns.forEach(p => {
    const fam = PHONICS.find(x => x.pattern === p);
    if (!fam) return;
    steps.push(teach({
      title: fam.pattern, emoji: '🔊',
      en: fam.words.join('  •  '),
      uz: fam.uz,
      say: fam.words.join(', '),
    }));
    fam.words.forEach(w => {
      const others = M.shuffle(PHONICS.flatMap(x => x.words).filter(x => x !== w)).slice(0, 2);
      steps.push(ask({
        build: (on) => listenQuestion({ word: w, options: M.shuffle([w, ...others]), answer: w, onAnswer: on }),
        tag: `phonics-${fam.pattern}`, subject: 'english',
      }));
    });
    steps.push(ask({
      build: (on) => orderQuestion({ word: fam.words[0], emoji: '🔤', onAnswer: on }),
      tag: `spell-${fam.words[0]}`, subject: 'english',
    }));
  });
  return steps;
}

function vocabLesson({ tier: t }) {
  const words = M.shuffle(VOCAB[t]).slice(0, 8);
  const steps = [];
  words.forEach(w => {
    steps.push(teach({
      title: w.en.toUpperCase(), emoji: w.emoji,
      en: w.en, uz: `${w.en} — ${w.uz}`, say: w.en,
    }));
  });
  words.forEach(w => {
    const distract = M.shuffle(VOCAB[t].filter(x => x.en !== w.en)).slice(0, 2);
    steps.push(ask({
      build: (on) => choiceQuestion({
        en: 'Which word?', uz: 'Qaysi so\'z?', emoji: w.emoji,
        options: M.shuffle([w, ...distract]).map(x => ({ label: x.en, value: x.en })),
        answer: w.en, onAnswer: on, columns: 3,
      }),
      tag: `vocab-${w.en}`, subject: 'english',
    }));
  });
  /* spell two of them */
  words.slice(0, 2).forEach(w => {
    steps.push(ask({
      build: (on) => orderQuestion({ word: w.en, uz: S.showUzbek() ? w.uz : '', emoji: w.emoji, onAnswer: on }),
      tag: `spell-${w.en}`, subject: 'english',
    }));
  });
  return steps;
}

function sentencesLesson({ band }) {
  const list = M.shuffle(SENTENCES[band]).slice(0, 5);
  const steps = [];
  list.forEach(s => {
    steps.push(teach({ title: s.emoji, emoji: s.emoji, en: s.en, uz: s.uz, say: s.en, big: true }));
    /* choose the matching Uzbek meaning, or a comprehension pick in English-only mode */
    const others = M.shuffle(SENTENCES[band].filter(x => x.en !== s.en)).slice(0, 2);
    steps.push(ask({
      build: (on) => S.showUzbek()
        ? choiceQuestion({
            en: s.en, uz: 'Bu nima degani?',
            options: M.shuffle([s, ...others]).map(x => ({ label: x.uz, value: x.en })),
            answer: s.en, onAnswer: on, columns: 1,
          })
        : listenQuestion({
            word: s.en,
            options: M.shuffle([s, ...others]).map(x => ({ label: x.en, value: x.en })),
            answer: s.en, onAnswer: on,
          }),
      tag: 'sentence', subject: 'english',
    }));
  });
  /* rebuild one sentence from scrambled words */
  const target = list[0];
  steps.push(ask({
    build: (on) => wordOrderQuestion(target, on),
    tag: 'sentence-order', subject: 'english',
  }));
  return steps;
}

function wordOrderQuestion(sentence, onAnswer) {
  const words = sentence.en.replace(/\.$/, '').split(' ');
  const pool = M.shuffle(words);
  let built = [];
  const slots = el('div', { class: 'ob-slots ob-slots--words' });
  const tray = el('div', { class: 'ob-tray ob-tray--words' });

  const refresh = () => {
    slots.textContent = built.join(' ') || '…';
  };
  const rebuild = () => {
    tray.textContent = '';
    pool.forEach(w => {
      const b = el('button', { class: 'ob-tile ob-tile--word', type: 'button' }, w);
      b.addEventListener('click', () => {
        if (b.disabled) return;
        b.disabled = true; built.push(w); sfx.kick(); refresh();
        if (built.length === words.length) {
          const correct = built.join(' ') === words.join(' ');
          if (correct) { sfx.goal(); slots.classList.add('is-right'); }
          else {
            sfx.miss(); slots.classList.add('is-wrong');
            setTimeout(() => { slots.classList.remove('is-wrong'); built = []; refresh(); rebuild(); }, 900);
          }
          onAnswer({ correct, value: built.join(' ') });
        }
      });
      tray.append(b);
    });
  };
  refresh(); rebuild();

  const peek = el('div', { class: 'ob-peek' });
  return el('div', { class: 'question' },
    prompt({ en: 'Put the words in order!', uz: "So'zlarni to'g'ri tartibda joylashtir!" }),
    peek, slots, tray,
    el('div', { class: 'ob-actions' },
      el('button', {
        class: 'btn btn--ghost', type: 'button',
        onClick: () => { built = []; refresh(); rebuild(); },
      }, '🔄 Qaytadan'),
      el('button', {
        class: 'btn btn--ghost', type: 'button',
        onClick: () => {
          peek.textContent = words.join(' ');
          peek.classList.add('is-on');
          speak(sentence.en, { rate: 0.6 });
          setTimeout(() => { peek.classList.remove('is-on'); peek.textContent = ''; }, 2500);
        },
      }, "👀 Ko'rsatish"),
    ),
  );
}

function storyLesson({ storyId }) {
  const story = STORIES.find(s => s.id === storyId);
  if (!story) return [];
  const steps = [teach({
    title: story.title, emoji: '📖',
    en: story.title, uz: story.titleUz, say: story.title, story,
  })];
  story.lines.forEach(line => {
    steps.push(teach({ title: '📖', emoji: '', en: line.en, uz: line.uz, say: line.en, big: true }));
  });
  story.questions.forEach(q => {
    steps.push(ask({
      build: (on) => choiceQuestion({
        en: q.q, uz: q.qUz, options: M.shuffle(q.options), answer: q.answer, onAnswer: on, columns: 1,
      }),
      tag: 'reading-comprehension', subject: 'english',
    }));
  });
  steps.push({ kind: 'meta', onEnter: () => S.bumpStat('storiesRead') });
  return steps;
}

function countingLesson({ diff }) {
  const steps = [teach({
    title: 'COUNT', emoji: '🔢',
    en: 'Count the footballs!', uz: "To'plarni sana!", say: 'Count the footballs',
  })];
  for (let i = 0; i < 8; i++) {
    const q = M.genCounting(diff);
    steps.push(ask({
      build: (on) => countQuestion({ ...q, onAnswer: on }),
      tag: 'counting', subject: 'math',
    }));
  }
  /* write two of the numbers */
  for (let i = 0; i < 2; i++) {
    const n = M.rand(1, diff <= 1 ? 5 : 9);
    steps.push(ask({
      build: (on) => typeQuestion({
        en: `Write the number ${n}`, uz: `${n} raqamini yoz`, answer: n, onAnswer: on,
      }),
      tag: 'number-writing', subject: 'math',
    }));
  }
  return steps;
}

function compareLesson({ diff }) {
  const steps = [teach({
    title: 'MORE or LESS', emoji: '⚖️',
    en: 'more  •  less', uz: "ko'proq  •  kamroq", say: 'more, less',
  })];
  for (let i = 0; i < 8; i++) {
    const q = M.genCompare(diff + i > 4 ? 3 : diff);
    steps.push(ask({ build: (on) => compareQuestion({ ...q, onAnswer: on }), tag: 'compare', subject: 'math' }));
  }
  return steps;
}

function arithmeticLesson(kind, { diff }) {
  const gen = { add: M.genAddition, sub: M.genSubtraction, mul: M.genMultiplication, div: M.genDivision }[kind];
  const intro = {
    add: { en: 'Ali scores goals. Add them up!', uz: "Ali gol uradi. Ularni qo'shamiz!", emoji: '➕', title: 'ADDITION' },
    sub: { en: 'Some balls go away. Take them away!', uz: "Ba'zi to'plar ketadi. Ayiramiz!", emoji: '➖', title: 'SUBTRACTION' },
    mul: { en: 'Teams with equal balls. Multiply!', uz: "Teng to'pli jamoalar. Ko'paytiramiz!", emoji: '✖️', title: 'MULTIPLICATION' },
    div: { en: 'Players share the balls. Divide!', uz: "O'yinchilar to'plarni bo'lishadi!", emoji: '➗', title: 'DIVISION' },
  }[kind];
  const steps = [teach({ ...intro, say: intro.en })];
  const base = Math.max(diff, S.difficulty('math') - 1);
  for (let i = 0; i < 10; i++) {
    /* difficulty is re-read each question so adaptation happens mid-lesson */
    steps.push(ask({
      build: (on) => {
        const d = Math.max(1, Math.min(5, Math.round((base + S.difficulty('math')) / 2)));
        const q = gen(d);
        return opQuestion({ ...q, onAnswer: on, mathEnglish: S.tier() >= 3 ? (S.tier() >= 5 ? 2 : 1) : 0 });
      },
      tagFn: () => M.opTag({ add: '+', sub: '-', mul: '×', div: '÷' }[kind]),
      subject: 'math',
    }));
  }
  return steps;
}

function columnLesson(op, { diff }) {
  const gen = op === '+' ? M.genAddition : M.genSubtraction;
  const steps = [teach({
    title: op === '+' ? 'COLUMN ADDITION' : 'COLUMN SUBTRACTION',
    emoji: '🧮',
    en: op === '+' ? 'Add in columns' : 'Subtract in columns',
    uz: op === '+' ? "Ustunda qo'shamiz" : 'Ustunda ayiramiz',
    say: op === '+' ? 'Column addition' : 'Column subtraction',
  })];
  for (let i = 0; i < 6; i++) {
    steps.push(ask({
      build: (on) => {
        const q = gen(Math.max(3, Math.min(5, diff)));
        return columnQuestion({ ...q, onAnswer: on });
      },
      tagFn: () => M.opTag(op),
      subject: 'math',
    }));
  }
  return steps;
}

function mathEnglishLesson({ tier: t }) {
  const terms = termsForTier(t);
  const steps = [];
  M.shuffle(terms).slice(0, 6).forEach(term => {
    steps.push(teach({
      title: term.symbol, emoji: '🗣️',
      en: `${term.en}  —  ${term.example}`,
      uz: `${term.en} — ${term.uz}`,
      say: term.spoken,
    }));
  });
  /* say-the-sum questions */
  for (let i = 0; i < 5; i++) {
    const q = i % 2 ? M.genAddition(2) : M.genSubtraction(2);
    const right = S.tier() >= 5 ? sayWords(q.a, q.b, q.op, q.answer) : sayDigits(q.a, q.b, q.op, q.answer);
    const wrongA = S.tier() >= 5 ? sayWords(q.a, q.b, q.op, q.answer + 1) : sayDigits(q.a, q.b, q.op, q.answer + 1);
    const wrongB = S.tier() >= 5 ? sayWords(q.b, q.a, q.op === '+' ? '-' : '+', Math.abs(q.a - q.b)) : sayDigits(q.b, q.a, q.op === '+' ? '-' : '+', Math.abs(q.a - q.b));
    steps.push(ask({
      build: (on) => {
        const node = choiceQuestion({
          en: `${q.a} ${q.op} ${q.b} = ${q.answer}`,
          uz: sayUzbek(q.a, q.b, q.op, q.answer),
          options: M.shuffle([right, wrongA, wrongB]).map(x => ({ label: x, value: x })),
          answer: right, onAnswer: on, columns: 1,
        });
        return node;
      },
      tag: 'math-english', subject: 'math',
    }));
  }
  /* choose the correct term for a symbol */
  M.shuffle(terms).slice(0, 3).forEach(term => {
    const others = M.shuffle(terms.filter(x => x.en !== term.en)).slice(0, 2);
    steps.push(ask({
      build: (on) => choiceQuestion({
        en: `What is "${term.symbol}" in English?`,
        uz: `"${term.symbol}" inglizcha qanday?`,
        options: M.shuffle([term, ...others]).map(x => ({ label: x.en, value: x.en })),
        answer: term.en, onAnswer: on, columns: 3,
      }),
      tag: 'math-english', subject: 'math',
    }));
  });
  return steps;
}

function wordProblemLesson({ level, englishOnly }) {
  const list = M.shuffle(M.wordProblemsForLevel(level)).slice(0, 5);
  return list.map(p => ask({
    build: (on) => {
      const showUz = !englishOnly && S.showUzbek();
      const opts = M.shuffle([p.answer, p.answer + M.rand(1, 3), Math.max(0, p.answer - M.rand(1, 3))]);
      const node = choiceQuestion({
        en: p.en, uz: showUz ? p.uz : null,
        options: [...new Set(opts)].map(v => ({ label: String(v), value: v })),
        answer: p.answer, onAnswer: on, columns: 3,
      });
      node.insertBefore(el('div', { class: 'wp-visual' }, (p.visual || '⚽').repeat(Math.min(12, p.a))), node.querySelector('.opt-grid'));
      return node;
    },
    tag: `word-problem-${M.opTag(p.op)}`, subject: 'math',
  }));
}

function strokesLesson({ set }) {
  const items = STROKE_SETS[set] || STROKE_SETS.lines;
  return items.map(s => trace({
    title: s.name, titleUz: s.nameUz,
    path: s.path, repeats: 1,
    hint: 'Chiziq ustidan yur va to‘pni golgacha olib bor! ⚽ ➡️ 🥅',
    subject: 'writing',
  }));
}

function traceLettersLesson({ from, to, case: cs }) {
  const start = ALPHABET.findIndex(a => a.l === from);
  const end = ALPHABET.findIndex(a => a.l === to);
  return ALPHABET.slice(start, end + 1).map(a => trace({
    title: cs === 'lower' ? a.l.toLowerCase() : a.l,
    glyph: cs === 'lower' ? a.l.toLowerCase() : a.l,
    repeats: 3,
    hint: STROKE_TIPS[a.l] || STROKE_TIPS.default,
    say: a.l,
    subject: 'writing',
  }));
}

function traceNumbersLesson({ from, to }) {
  const out = [];
  for (let n = from; n <= to; n++) {
    out.push(trace({ title: String(n), glyph: String(n), repeats: 3, hint: `${n} ta ⚽ — ${n} raqamini yoz.`, say: String(n), subject: 'writing' }));
  }
  return out;
}

function traceWordsLesson({ words }) {
  return words.map(w => trace({
    title: w, glyph: w, repeats: 1,
    hint: 'Har bir harfni sekin yoz. ✏️',
    say: w, subject: 'writing',
  }));
}

/* ============================ build ============================ */

export function buildSteps(lesson) {
  const p = lesson.params || {};
  switch (lesson.kind) {
    case 'letters':       return lettersLesson(p);
    case 'phonics':       return phonicsLesson(p);
    case 'vocab':         return vocabLesson(p);
    case 'sentences':     return sentencesLesson(p);
    case 'story':         return storyLesson(p);
    case 'counting':      return countingLesson(p);
    case 'compare':       return compareLesson(p);
    case 'add':           return arithmeticLesson('add', p);
    case 'sub':           return arithmeticLesson('sub', p);
    case 'mul':           return arithmeticLesson('mul', p);
    case 'div':           return arithmeticLesson('div', p);
    case 'column-add':    return columnLesson('+', p);
    case 'column-sub':    return columnLesson('-', p);
    case 'math-english':  return mathEnglishLesson(p);
    case 'word-problems': return wordProblemLesson(p);
    case 'strokes':       return strokesLesson(p);
    case 'trace-letters': return traceLettersLesson(p);
    case 'trace-numbers': return traceNumbersLesson(p);
    case 'trace-words':   return traceWordsLesson(p);
    default:              return [];
  }
}

/* ============================ player ============================ */

export function playLesson(lesson, host, { onExit } = {}) {
  const steps = buildSteps(lesson);
  if (!steps.length) {
    host.append(el('p', {}, 'Bu mashq hali tayyor emas.'));
    return;
  }

  let i = 0, correct = 0, asked = 0, extraQueue = [];
  const startedAt = Date.now();
  let lastWrong = null;

  const bar = el('div', { class: 'lesson-bar' }, el('i', {}));
  const scoreEl = el('div', { class: 'lesson-score' }, '⚽ 0');
  const stage = el('div', { class: 'lesson-stage' });

  const shell = el('div', { class: 'lesson' },
    el('div', { class: 'lesson-top' },
      el('button', { class: 'back-btn', type: 'button', onClick: () => onExit?.() }, '⬅️'),
      el('div', { class: 'lesson-title' }, lesson.emoji + ' ' + (S.showUzbek() ? lesson.titleUz : lesson.title)),
      scoreEl,
    ),
    el('div', { class: 'lesson-track' }, bar),
    stage,
  );
  host.append(shell);

  function progress() {
    const total = steps.length + extraQueue.length;
    bar.querySelector('i').style.width = `${Math.min(100, (i / total) * 100)}%`;
  }

  function next() {
    i++;
    render();
  }

  function render() {
    stage.textContent = '';
    progress();
    const step = extraQueue.length && i >= steps.length ? extraQueue.shift() : steps[i];
    if (!step) return finish();

    if (step.kind === 'meta') { step.onEnter?.(); return next(); }

    if (step.kind === 'teach') return renderTeach(step);
    if (step.kind === 'trace') return renderTrace(step);
    return renderAsk(step);
  }

  function renderTeach(step) {
    const node = el('div', { class: 'teach' },
      el('div', { class: 'teach__badge' }, step.title),
      step.emoji ? el('div', { class: `teach__emoji${step.big ? ' teach__emoji--small' : ''}` }, step.emoji) : null,
      el('div', { class: 'teach__en' },
        el('span', {}, step.en),
        speakerButton(step.say || step.en, speak, { rate: 0.7 }),
      ),
      step.uz && S.showUzbek() ? el('div', { class: 'teach__uz' }, step.uz) : null,
      el('button', { class: 'btn btn--primary btn--wide', type: 'button', onClick: () => { sfx.kick(); next(); } }, "DAVOM ETISH ⚽"),
    );
    stage.append(node);
    if (step.say) setTimeout(() => speak(step.say, { rate: 0.7 }), 250);
  }

  function renderTrace(step) {
    const node = el('div', { class: 'trace-step' },
      el('div', { class: 'trace-step__title' }, step.titleUz && S.showUzbek() ? `${step.title} — ${step.titleUz}` : step.title),
      tracePad({
        glyph: step.glyph, path: step.path, repeats: step.repeats, hint: step.hint,
        onDone: ({ ok }) => {
          asked++;
          if (ok) {
            correct++;
            S.recordAnswer({ subject: 'writing', correct: true, tag: 'writing' });
            S.bumpStat('tracedItems');
            S.award({ xp: 12, coins: 2, goals: 1, subject: 'writing' });
            scoreEl.textContent = `⚽ ${correct}`;
            celebrate('GREAT WRITING! ✏️', '⭐');
            setTimeout(next, 900);
          } else {
            S.recordAnswer({ subject: 'writing', correct: false, tag: 'writing' });
            toast(nudge(), { emoji: '✏️', kind: 'warn' });
          }
        },
      }),
      el('button', { class: 'btn btn--ghost', type: 'button', onClick: next }, 'Keyingisi ➡️'),
    );
    stage.append(node);
    if (step.say) setTimeout(() => speak(step.say, { rate: 0.7 }), 250);
  }

  function renderAsk(step) {
    const subject = step.subject || lesson.subject;
    const tag = step.tagFn ? step.tagFn() : step.tag;
    let answered = false;

    const node = step.build(({ correct: ok, value }) => {
      if (answered) return;
      if (ok) {
        answered = true;
        correct++; asked++;
        scoreEl.textContent = `⚽ ${correct}`;
        S.recordAnswer({ subject, correct: true, tag });
        S.award({ xp: 10, coins: 1, goals: 1, subject });
        celebrate(praise(), '⚽');
        setTimeout(next, 1000);
      } else {
        asked++;
        S.recordAnswer({ subject, correct: false, tag });
        toast(nudge(), { emoji: '🤔', kind: 'warn' });
        /* Repeated mistakes on the same tag => queue extra easy practice */
        if (tag && S.get().mistakes[tag] >= 2 && lastWrong !== tag) {
          lastWrong = tag;
          queueDrill(tag, subject);
        }
      }
    });
    stage.append(node);
  }

  /* Section 16: build an easier ladder before returning to the hard fact. */
  function queueDrill(tag, subject) {
    const opFor = { addition: '+', subtraction: '-', multiplication: '×', division: '÷' }[tag];
    if (!opFor) return;
    const gen = { '+': M.genAddition, '-': M.genSubtraction, '×': M.genMultiplication, '÷': M.genDivision }[opFor];
    const ladder = [1, 1, 2].map(d => gen(d));
    ladder.forEach(q => extraQueue.push(ask({
      build: (on) => opQuestion({ ...q, onAnswer: on, mathEnglish: 0 }),
      tag, subject,
    })));
    toast('Qo‘shimcha mashq! 🔄', { emoji: '🏋️', kind: 'info' });
  }

  function finish() {
    const seconds = Math.round((Date.now() - startedAt) / 1000);
    const pct = asked ? correct / asked : 1;
    const st = pct >= 0.9 ? 3 : pct >= 0.7 ? 2 : 1;
    const bonus = st * 25;
    S.award({ xp: bonus, coins: st * 5, subject: lesson.subject });
    S.completeLesson(lesson.id, { stars: st, correct, total: asked, seconds, subject: lesson.subject });
    const newTrophies = S.checkTrophies();
    sfx.trophy();

    stage.textContent = '';
    stage.append(el('div', { class: 'result' },
      el('div', { class: 'result__emoji' }, st === 3 ? '🏆' : st === 2 ? '⭐' : '👏'),
      el('h2', {}, st === 3 ? 'FULL TIME — PERFECT!' : 'FULL TIME!'),
      el('div', { class: 'result__stars' }, starsEl(st, 3)),
      el('div', { class: 'result__score' }, `⚽ ${correct} / ${asked || correct}`),
      el('div', { class: 'result__xp' }, `+${bonus + correct * 10} XP  •  +${st * 5 + correct} 💎`),
      newTrophies.length
        ? el('div', { class: 'result__trophies' },
            el('p', {}, 'Yangi kubok!'),
            ...newTrophies.map(t => el('div', { class: 'trophy-pop' }, t.emoji + ' ' + t.name)))
        : null,
      el('button', { class: 'btn btn--primary btn--wide', type: 'button', onClick: () => onExit?.() }, 'DAVOM ETISH ⚽'),
    ));
    if (newTrophies.length) setTimeout(() => celebrate('NEW TROPHY! 🏆', newTrophies[0].emoji), 300);
  }

  render();
}
