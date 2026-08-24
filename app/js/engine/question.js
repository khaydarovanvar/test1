/* Reusable question components.
   Every question renders into a node and calls back with {correct, value}.
   The same components are reused by lessons, matches and mini-games. */

import { el, speakerButton, toast } from '../ui.js';
import { speak, sfx } from '../audio.js';
import { showUzbek } from '../state.js';
import { numberToWords } from '../content/mathEnglish.js';

const PRAISE = ['GOOOOOOOAL! ⚽🔥', 'What a strike! 🚀', 'Top corner! 🥅', 'Brilliant! ⭐', 'Back of the net! ⚽'];
const NUDGE_UZ = ['Deyarli! 🤔 Yana urinib ko\'ramiz!', 'Yaqin qolding! 💪 Qaytadan!', 'Hechqisi yo\'q! Yana bir zarba! ⚽'];
const NUDGE_EN = ['Almost! 🤔 Let\'s try again!', 'So close! 💪 One more shot!', 'No problem! Try again! ⚽'];

export function praise() { return PRAISE[Math.floor(Math.random() * PRAISE.length)]; }
export function nudge() {
  const list = showUzbek() ? NUDGE_UZ : NUDGE_EN;
  return list[Math.floor(Math.random() * list.length)];
}

/** Shared prompt block: English line + optional Uzbek helper + speaker. */
export function prompt({ en, uz, big = false, speakText = null }) {
  return el('div', { class: `q-prompt${big ? ' q-prompt--big' : ''}` },
    el('div', { class: 'q-prompt__en' },
      el('span', {}, en),
      speakText !== false ? speakerButton(speakText || en, speak) : null,
    ),
    uz && showUzbek() ? el('div', { class: 'q-prompt__uz' }, uz) : null,
  );
}

/* ---------------------------------------------------------------- choice */
/** options: [{label, value, emoji}] or plain strings */
export function choiceQuestion({ en, uz, options, answer, emoji, hint, onAnswer, columns }) {
  const opts = options.map(o => (typeof o === 'object' ? o : { label: String(o), value: o }));
  let locked = false;

  const grid = el('div', { class: `opt-grid${columns ? ' opt-grid--' + columns : ''}` });
  const node = el('div', { class: 'question' },
    prompt({ en, uz }),
    emoji ? el('div', { class: 'q-visual', role: 'img', 'aria-label': String(en || '') }, emoji) : null,
    hint ? el('p', { class: 'q-hint' }, hint) : null,
    grid,
  );

  opts.forEach(o => {
    const b = el('button', { class: 'opt', type: 'button' },
      o.emoji ? el('span', { class: 'opt__emoji' }, o.emoji) : null,
      el('span', { class: 'opt__label' }, o.label),
    );
    b.addEventListener('click', () => {
      if (locked) return;
      const correct = String(o.value) === String(answer);
      if (correct) {
        locked = true;
        b.classList.add('is-right');
        sfx.goal();
      } else {
        b.classList.add('is-wrong');
        sfx.miss();
        setTimeout(() => b.classList.remove('is-wrong'), 700);
      }
      onAnswer?.({ correct, value: o.value, node: b });
    });
    grid.append(b);
  });

  return node;
}

/* ---------------------------------------------------------------- counting */
export function countQuestion({ n, emoji = '⚽', options, answer, onAnswer }) {
  const balls = el('div', { class: 'count-field' },
    ...Array.from({ length: n }, (_, i) =>
      el('span', { class: 'count-field__item', style: { animationDelay: `${i * 0.06}s` } }, emoji)),
  );
  const q = choiceQuestion({
    en: 'How many?',
    uz: 'Nechta?',
    options: options.map(v => ({ label: String(v), value: v })),
    answer,
    onAnswer,
    columns: 3,
  });
  q.insertBefore(balls, q.querySelector('.opt-grid'));
  return q;
}

/* ---------------------------------------------------------------- compare */
export function compareQuestion({ a, b, answer, onAnswer }) {
  let locked = false;
  const team = (name, count, colour, value) => {
    const btn = el('button', { class: `team-card team-card--${colour}`, type: 'button' },
      el('div', { class: 'team-card__name' }, name),
      el('div', { class: 'team-card__balls' }, '⚽'.repeat(count)),
    );
    btn.addEventListener('click', () => {
      if (locked) return;
      const correct = value === answer;
      if (correct) { locked = true; btn.classList.add('is-right'); sfx.goal(); }
      else { btn.classList.add('is-wrong'); sfx.miss(); setTimeout(() => btn.classList.remove('is-wrong'), 700); }
      onAnswer?.({ correct, value });
    });
    return btn;
  };
  return el('div', { class: 'question' },
    prompt({ en: 'Which team has more balls?', uz: "Qaysi jamoada ko'proq to'p bor?" }),
    el('div', { class: 'compare-row' },
      team('TEAM A', a, 'blue', 'A'),
      el('div', { class: 'compare-vs' }, 'VS'),
      team('TEAM B', b, 'red', 'B'),
    ),
  );
}

/* ---------------------------------------------------------------- op (a ? b = ) */
export function opQuestion({ a, b, op, answer, options, onAnswer, visual = true, mathEnglish = 0 }) {
  const showVisual = visual && a <= 12 && b <= 12 && (op === '+' || op === '-');
  let visualNode = null;
  if (showVisual) {
    if (op === '+') {
      visualNode = el('div', { class: 'op-visual' },
        el('span', { class: 'op-visual__group' }, '⚽'.repeat(a)),
        el('span', { class: 'op-visual__sign' }, '+'),
        el('span', { class: 'op-visual__group' }, '⚽'.repeat(b)),
      );
    } else {
      visualNode = el('div', { class: 'op-visual' },
        el('span', { class: 'op-visual__group' },
          ...Array.from({ length: a }, (_, i) =>
            el('span', { class: i >= a - b ? 'gone' : '' }, '⚽')),
        ),
      );
    }
  }
  if (op === '×' && a <= 6 && b <= 8) {
    visualNode = el('div', { class: 'op-visual op-visual--rows' },
      ...Array.from({ length: a }, () => el('div', { class: 'op-visual__row' }, '⚽'.repeat(b))),
    );
  }
  if (op === '÷' && answer <= 8 && b <= 6) {
    visualNode = el('div', { class: 'op-visual op-visual--rows' },
      ...Array.from({ length: b }, () => el('div', { class: 'op-visual__row' }, '🏃 ' + '⚽'.repeat(answer))),
    );
  }

  const line = el('div', { class: 'op-line' },
    el('span', {}, a), el('span', { class: 'op-line__op' }, op), el('span', {}, b),
    el('span', { class: 'op-line__eq' }, '='), el('span', { class: 'op-line__q' }, '?'),
  );

  const wrap = el('div', { class: 'question' });
  wrap.append(line);
  if (visualNode) wrap.append(visualNode);

  /* The English sentence reads the QUESTION while it is unanswered — showing
     "five plus four equals nine" here would hand Ali the answer. */
  let enLine = null;
  if (mathEnglish) {
    enLine = mathEnglishLine(a, b, op, answer, mathEnglish, { reveal: false });
    wrap.append(enLine);
  }

  const q = choiceQuestion({
    en: '', uz: '',
    options: (options || []).map(v => ({ label: String(v), value: v })),
    answer,
    onAnswer: (res) => {
      if (res.correct && enLine) {
        const full = mathEnglishLine(a, b, op, answer, mathEnglish, { reveal: true });
        enLine.replaceWith(full);
        enLine = full;
      }
      onAnswer?.(res);
    },
    columns: 3,
  });
  q.querySelector('.q-prompt')?.remove();
  wrap.append(q.querySelector('.opt-grid'));
  return wrap;
}

const OP_WORD = { '+': 'plus', '-': 'minus', '×': 'times', '÷': 'divided by' };

/**
 * The spoken-English form of a sum.
 * @param {object} o
 * @param {boolean} o.reveal  false = read the question ("... equals what?"),
 *                            true  = read the finished sentence.
 */
export function mathEnglishLine(a, b, op, answer, mode = 1, { reveal = true } = {}) {
  const words = mode >= 2;
  const A = words ? numberToWords(a) : String(a);
  const B = words ? numberToWords(b) : String(b);
  const R = words ? numberToWords(answer) : String(answer);
  const stem = `${A} ${OP_WORD[op]} ${B} equals`;
  const text = reveal ? `${stem} ${R}` : `${stem} what?`;
  const shown = text.charAt(0).toUpperCase() + text.slice(1) + (reveal ? '.' : '');
  return el('div', { class: `math-en${reveal ? ' math-en--reveal' : ''}` },
    el('span', { class: 'math-en__text' }, shown),
    speakerButton(text, speak, { rate: 0.75 }),
  );
}

/* ---------------------------------------------------------------- typed answer */
export function typeQuestion({ en, uz, answer, onAnswer, keypad = 'number', placeholder = '?' }) {
  let value = '';
  const display = el('div', { class: 'type-display' }, placeholder);
  const feedback = el('div', { class: 'type-feedback' });

  const setValue = v => {
    value = v;
    display.textContent = v || placeholder;
    display.classList.toggle('is-empty', !v);
  };
  setValue('');

  const check = () => {
    if (!value) return;
    const correct = value.toUpperCase().trim() === String(answer).toUpperCase().trim();
    if (correct) { sfx.goal(); display.classList.add('is-right'); }
    else {
      sfx.miss();
      display.classList.add('is-wrong');
      setTimeout(() => { display.classList.remove('is-wrong'); setValue(''); }, 800);
    }
    onAnswer?.({ correct, value });
  };

  const keys = keypad === 'number'
    ? ['1','2','3','4','5','6','7','8','9','⌫','0','✓']
    : [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '⌫', '✓'];

  const pad = el('div', { class: `keypad keypad--${keypad}` },
    ...keys.map(k => el('button', {
      class: `key${k === '✓' ? ' key--go' : ''}${k === '⌫' ? ' key--del' : ''}`, type: 'button',
      onClick: () => {
        if (k === '⌫') setValue(value.slice(0, -1));
        else if (k === '✓') check();
        else { setValue(value + k); sfx.tap(); }
      },
    }, k)),
  );

  return el('div', { class: 'question' },
    prompt({ en, uz }),
    display, feedback, pad,
  );
}

/* ---------------------------------------------------------------- column arithmetic */
export function columnQuestion({ a, b, op, answer, onAnswer }) {
  const digits = String(answer).length;
  const boxes = [];
  const row = el('div', { class: 'col-answer' });
  for (let i = 0; i < digits; i++) {
    const inp = el('input', {
      class: 'col-box', type: 'text', inputmode: 'numeric', maxlength: '1',
      'aria-label': `digit ${i + 1}`,
    });
    inp.addEventListener('input', () => {
      inp.value = inp.value.replace(/\D/g, '').slice(0, 1);
      if (inp.value && boxes[i + 1]) boxes[i + 1].focus();
    });
    boxes.push(inp);
    row.append(inp);
  }

  const feedback = el('div', { class: 'col-feedback' });
  const go = el('button', {
    class: 'btn btn--primary', type: 'button',
    onClick: () => {
      const val = boxes.map(x => x.value || ' ').join('').trim();
      const correct = val === String(answer);
      if (correct) { sfx.goal(); row.classList.add('is-right'); }
      else {
        sfx.miss(); row.classList.add('is-wrong');
        setTimeout(() => { row.classList.remove('is-wrong'); boxes.forEach(x => x.value = ''); boxes[0].focus(); }, 800);
      }
      onAnswer?.({ correct, value: val });
    },
  }, '⚽ SHOOT!');

  return el('div', { class: 'question' },
    prompt({ en: 'Solve it.', uz: 'Yechimni yoz.' }),
    el('div', { class: 'col-sum' },
      el('div', { class: 'col-sum__row' }, String(a)),
      el('div', { class: 'col-sum__row col-sum__row--op' }, el('span', { class: 'col-sum__sign' }, op), String(b)),
      el('div', { class: 'col-sum__rule' }),
      row,
    ),
    feedback, go,
  );
}

/* ---------------------------------------------------------------- order letters */
export function orderQuestion({ word, uz, emoji, onAnswer }) {
  const target = word.toUpperCase();
  const pool = target.split('').sort(() => Math.random() - 0.5);
  /* avoid handing Ali the already-solved word */
  if (pool.join('') === target && target.length > 2) pool.reverse();

  const slots = el('div', { class: 'ob-slots' });
  const tray = el('div', { class: 'ob-tray' });
  let built = '';

  const refresh = () => {
    slots.textContent = '';
    for (let i = 0; i < target.length; i++) {
      slots.append(el('span', { class: `ob-slot${built[i] ? ' is-filled' : ''}` }, built[i] || ''));
    }
  };

  const check = () => {
    if (built.length !== target.length) return;
    const correct = built === target;
    if (correct) { sfx.goal(); slots.classList.add('is-right'); }
    else {
      sfx.miss(); slots.classList.add('is-wrong');
      setTimeout(() => { slots.classList.remove('is-wrong'); built = ''; refresh(); buildTray(); }, 800);
    }
    onAnswer?.({ correct, value: built });
  };

  function buildTray() {
    tray.textContent = '';
    pool.forEach((ch, idx) => {
      const b = el('button', { class: 'ob-tile', type: 'button' }, ch);
      b.addEventListener('click', () => {
        if (b.disabled) return;
        b.disabled = true;
        b.classList.add('is-used');
        built += ch;
        sfx.kick();
        refresh();
        check();
      });
      tray.append(b);
    });
  }

  refresh(); buildTray();

  const peek = el('div', { class: 'ob-peek' });
  const peekBtn = el('button', {
    class: 'btn btn--ghost', type: 'button',
    onClick: () => {
      peek.textContent = target;
      peek.classList.add('is-on');
      speak(target, { rate: 0.6 });
      setTimeout(() => { peek.classList.remove('is-on'); peek.textContent = ''; }, 2000);
    },
  }, '👀 Ko\'rsatish');

  return el('div', { class: 'question' },
    prompt({ en: 'Build the word!', uz: "So'zni to'g'ri tuz!" }),
    emoji ? el('div', { class: 'q-visual', role: 'img', 'aria-label': target.toLowerCase() }, emoji) : null,
    uz ? el('p', { class: 'q-hint' }, uz) : null,
    peek,
    slots,
    tray,
    el('div', { class: 'ob-actions' },
      el('button', {
        class: 'btn btn--ghost', type: 'button',
        onClick: () => { built = ''; refresh(); buildTray(); },
      }, '🔄 Qaytadan'),
      peekBtn,
    ),
  );
}

/* ---------------------------------------------------------------- listen & pick */
export function listenQuestion({ word, options, answer, uz, onAnswer }) {
  const q = choiceQuestion({
    en: 'Listen and choose!',
    uz: "Eshit va to'g'risini tanla!",
    options, answer, onAnswer, columns: 3,
  });
  const play = el('button', {
    class: 'listen-btn', type: 'button',
    onClick: () => speak(word, { rate: 0.7 }),
  }, '🔊', el('span', {}, 'Listen'));
  q.insertBefore(play, q.querySelector('.opt-grid'));
  speak(word, { rate: 0.7 });
  return q;
}
