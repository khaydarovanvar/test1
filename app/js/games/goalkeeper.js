/* GAME 3 — GOALKEEPER. "Catch the number 7!" — numbers fly across the goal. */

import { el } from '../ui.js';
import { speak, sfx } from '../audio.js';
import * as S from '../state.js';
import * as M from '../content/math.js';
import { numberToWords } from '../content/mathEnglish.js';
import { gameShell } from './shell.js';

export function goalkeeperGame(host, exit) {
  return gameShell({
    host, exit,
    title: '🧤 GOALKEEPER',
    sub: "To'g'ri raqamni ushla!",
    rounds: 8, subject: 'math',
    render: (round, answer) => {
      const max = S.tier() <= 2 ? 10 : 20;
      const target = M.rand(1, max);
      const pool = new Set([target]);
      while (pool.size < 6) pool.add(M.rand(1, max));
      const nums = M.shuffle([...pool]);

      const en = S.tier() >= 3 ? numberToWords(target) : String(target);
      setTimeout(() => speak(`Catch the number ${numberToWords(target)}`, { rate: 0.75 }), 200);

      const goal = el('div', { class: 'gk-goal' },
        ...nums.map((n, i) => el('button', {
          class: 'gk-num', type: 'button',
          style: { animationDelay: `${i * 0.25}s` },
          onClick: (e) => {
            const ok = n === target;
            if (ok) { e.currentTarget.classList.add('is-caught'); }
            else { e.currentTarget.classList.add('is-miss'); sfx.miss(); }
            answer(ok, 'number-recognition');
          },
        }, String(n))),
        el('span', { class: 'gk-keeper' }, '🧤'),
      );

      return el('div', { class: 'game-body' },
        el('div', { class: 'gk-call' }, `Catch the number `, el('strong', {}, en), ' !'),
        S.showUzbek() ? el('div', { class: 'gk-call-uz' }, `${target} raqamini ushla!`) : null,
        goal,
      );
    },
  });
}
