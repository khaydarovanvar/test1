/* GAME 2 — PASS THE BALL. Pick the English word for the picture. */

import { el } from '../ui.js';
import { speak } from '../audio.js';
import * as S from '../state.js';
import * as M from '../content/math.js';
import { wordsForLevel } from '../content/vocab.js';
import { gameShell } from './shell.js';

export function passGame(host, exit) {
  return gameShell({
    host, exit,
    title: '🎯 PASS THE BALL',
    sub: "To'g'ri so'zni tanla — uzatma o'tadi!",
    rounds: 8, subject: 'english',
    render: (round, answer) => {
      const pool = wordsForLevel(S.tier());
      const target = M.pick(pool);
      const others = M.shuffle(pool.filter(w => w.en !== target.en)).slice(0, 2);
      const opts = M.shuffle([target, ...others]);

      const pitch = el('div', { class: 'pass-pitch' },
        el('span', { class: 'pass-player' }, '🏃'),
        el('span', { class: 'pass-ball' }, '⚽'),
        el('span', { class: 'pass-player pass-player--mate' }, '🧍'),
      );
      const ball = pitch.querySelector('.pass-ball');

      return el('div', { class: 'game-body' },
        el('div', { class: 'pass-picture' }, target.emoji),
        pitch,
        el('div', { class: 'opt-grid opt-grid--3' },
          ...opts.map(o => el('button', { class: 'opt', type: 'button', onClick: () => {
            const ok = o.en === target.en;
            if (ok) { ball.classList.add('pass-ball--go'); speak(target.en); }
            answer(ok, `vocab-${target.en}`);
          } }, el('span', { class: 'opt__label' }, o.en))),
        ),
      );
    },
  });
}
