/* GAME 1 — PENALTY SHOOTOUT. Answer right, the ball hits the net. */

import { el } from '../ui.js';
import { sfx, speak } from '../audio.js';
import * as S from '../state.js';
import * as M from '../content/math.js';
import { gameShell } from './shell.js';

export function penaltyGame(host, exit) {
  const g = gameShell({
    host, exit,
    title: '🥅 PENALTY SHOOTOUT',
    sub: "To'g'ri javob — gol!",
    rounds: 8,
    subject: 'math',
    render: (round, answer) => {
      const d = S.difficulty('math');
      const q = round % 3 === 2 ? M.genSubtraction(d) : M.genAddition(d);

      const goal = el('div', { class: 'pk-goal' },
        el('div', { class: 'pk-net' }, '🥅'),
        el('div', { class: 'pk-keeper' }, '🧤'),
        el('div', { class: 'pk-ball' }, '⚽'),
      );
      const ball = goal.querySelector('.pk-ball');

      const opts = el('div', { class: 'pk-options' },
        ...M.shuffle(q.options).map(v => el('button', { class: 'pk-opt', type: 'button', onClick: () => {
          const ok = v === q.answer;
          if (ok) {
            ball.classList.add('pk-ball--score');
            sfx.goal();
          } else {
            ball.classList.add('pk-ball--save');
            sfx.miss();
            setTimeout(() => ball.classList.remove('pk-ball--save'), 700);
          }
          answer(ok, 'addition');
        } }, String(v))),
      );

      return el('div', { class: 'game-body' },
        el('div', { class: 'pk-question' }, `${q.a} ${q.op} ${q.b} = ?`),
        goal,
        opts,
      );
    },
  });
  return g;
}
