import { el, pageHeader } from '../ui.js';
import * as S from '../state.js';

export const GAMES = [
  { id: 'penalty',  emoji: '🥅', name: 'PENALTY SHOOTOUT', uz: "Javob ber — gol ur",       colour: 'green',  subject: 'Math' },
  { id: 'pass',     emoji: '🎯', name: 'PASS THE BALL',     uz: "To'g'ri so'zni tanla",    colour: 'blue',   subject: 'English' },
  { id: 'keeper',   emoji: '🧤', name: 'GOALKEEPER',        uz: "Raqamni ushla",           colour: 'yellow', subject: 'Numbers' },
  { id: 'builder',  emoji: '🔤', name: 'WORD BUILDER',      uz: "So'zni tuz",              colour: 'purple', subject: 'Spelling' },
  { id: 'board',    emoji: '🔢', name: 'FOOTBALL SCOREBOARD', uz: 'Yech va hisobni oshir', colour: 'red',    subject: 'Math' },
];

export function gamesScreen() {
  return el('div', { class: 'screen screen--games' },
    pageHeader('🎮 FOOTBALL GAMES', "Mini o'yinlar — o'yna va o'rgan!"),
    el('div', { class: 'game-grid' },
      ...GAMES.map(g => el('a', { class: `game-card c-${g.colour}`, href: `#/game/${g.id}` },
        el('span', { class: 'game-card__emoji' }, g.emoji),
        el('span', { class: 'game-card__name' }, g.name),
        el('span', { class: 'game-card__uz' }, g.uz),
        el('span', { class: 'game-card__tag' }, g.subject),
      )),
    ),
    el('p', { class: 'note' }, `🎮 O'ynalgan o'yinlar: ${S.get().stats.gamesPlayed}`),
  );
}
