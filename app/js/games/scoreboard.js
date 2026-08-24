/* GAME 5 — FOOTBALL SCOREBOARD. Solve it, the scoreboard climbs. */

import { el } from '../ui.js';
import { sfx } from '../audio.js';
import * as S from '../state.js';
import * as M from '../content/math.js';
import { gameShell } from './shell.js';

export function scoreboardGame(host, exit) {
  let total = 0;
  return gameShell({
    host, exit,
    title: '🔢 FOOTBALL SCOREBOARD',
    sub: 'Yech va tabloni yoq!',
    rounds: 8, subject: 'math',
    render: (round, answer) => {
      const d = Math.max(2, S.difficulty('math'));
      const gens = [M.genAddition, M.genSubtraction, M.genMultiplication, M.genDivision];
      const gen = gens[Math.min(gens.length - 1, Math.floor(round / 2))];
      const q = gen(d);

      const board = el('div', { class: 'sb-board' },
        el('div', { class: 'sb-side' }, 'ALI FC'),
        el('div', { class: 'sb-digits' }, String(total).padStart(2, '0')),
        el('div', { class: 'sb-dash' }, '—'),
        el('div', { class: 'sb-digits sb-digits--away' }, '00'),
        el('div', { class: 'sb-side' }, 'RIVALS'),
      );
      const digits = board.querySelector('.sb-digits');

      return el('div', { class: 'game-body' },
        board,
        el('div', { class: 'sb-question' }, `${q.a} ${q.op} ${q.b} = ?`),
        el('div', { class: 'opt-grid opt-grid--3' },
          ...M.shuffle(q.options).map(v => el('button', { class: 'opt opt--num', type: 'button', onClick: () => {
            const ok = v === q.answer;
            if (ok) {
              total += q.answer;
              digits.textContent = String(total).padStart(2, '0');
              digits.classList.add('is-flash');
              sfx.goal();
            }
            answer(ok, M.opTag(q.op));
          } }, String(v))),
        ),
      );
    },
  });
}
