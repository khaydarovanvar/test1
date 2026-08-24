/* GAME 4 — WORD BUILDER. Put B A L L in the right order. */

import { el } from '../ui.js';
import * as S from '../state.js';
import * as M from '../content/math.js';
import { wordsForLevel } from '../content/vocab.js';
import { orderQuestion } from '../engine/question.js';
import { gameShell } from './shell.js';

export function wordBuilderGame(host, exit) {
  return gameShell({
    host, exit,
    title: '🔤 WORD BUILDER',
    sub: "Harflarni to'g'ri tartibda joyla!",
    rounds: 6, subject: 'english',
    render: (round, answer) => {
      const pool = wordsForLevel(S.tier()).filter(w => w.en.length <= (S.tier() <= 2 ? 4 : 7));
      const target = M.pick(pool.length ? pool : wordsForLevel(1));
      return el('div', { class: 'game-body' },
        orderQuestion({
          word: target.en,
          uz: S.showUzbek() ? `${target.en} — ${target.uz}` : '',
          emoji: target.emoji,
          onAnswer: ({ correct }) => answer(correct, `spell-${target.en}`),
        }),
      );
    },
  });
}
