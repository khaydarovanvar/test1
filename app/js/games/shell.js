/* Shared match shell for every mini-game: scoreboard, rounds, rewards. */

import { el, celebrate, toast, stars } from '../ui.js';
import { sfx } from '../audio.js';
import * as S from '../state.js';
import { praise, nudge } from '../engine/question.js';

export function gameShell({ host, exit, title, sub, rounds = 8, subject = 'math', render }) {
  let round = 0, score = 0, misses = 0, locked = false;
  const started = Date.now();

  const scoreEl = el('div', { class: 'match-score' },
    el('span', { class: 'match-score__team' }, 'ALI FC'),
    el('span', { class: 'match-score__num' }, '0'),
    el('span', { class: 'match-score__dash' }, '—'),
    el('span', { class: 'match-score__num match-score__num--away' }, '0'),
    el('span', { class: 'match-score__team' }, 'RIVALS'),
  );
  const nums = scoreEl.querySelectorAll('.match-score__num');
  const stage = el('div', { class: 'game-stage' });
  const pips = el('div', { class: 'game-pips' });

  const node = el('div', { class: 'screen screen--game' },
    el('div', { class: 'game-top' },
      el('button', { class: 'back-btn', type: 'button', onClick: exit }, '⬅️'),
      el('div', { class: 'game-title' }, el('strong', {}, title), el('span', {}, sub)),
    ),
    scoreEl, pips, stage,
  );
  host.append(node);

  function drawPips() {
    pips.textContent = '';
    for (let i = 0; i < rounds; i++) {
      pips.append(el('span', { class: `pip${i < round ? ' is-done' : ''}${i === round ? ' is-now' : ''}` }, '⚽'));
    }
  }

  function answer(ok, tag) {
    if (locked) return;
    S.recordAnswer({ subject, correct: ok, tag });
    if (ok) {
      locked = true;
      score++;
      nums[0].textContent = String(score);
      S.award({ xp: 12, coins: 2, goals: 1, subject });
      celebrate(praise(), '⚽');
      setTimeout(() => { round++; locked = false; next(); }, 1000);
    } else {
      misses++;
      nums[1].textContent = String(misses);
      toast(nudge(), { emoji: '🧤', kind: 'warn' });
    }
  }

  function next() {
    drawPips();
    stage.textContent = '';
    if (round >= rounds) return finish();
    stage.append(render(round, answer));
  }

  function finish() {
    const perfect = misses === 0;
    S.bumpStat('gamesPlayed');
    if (perfect) S.bumpStat('perfectGames');
    const bonus = perfect ? 80 : 40;
    S.award({ xp: bonus, coins: perfect ? 20 : 8, subject });
    S.completeLesson(`game-${title}`, { stars: perfect ? 3 : score >= rounds * 0.7 ? 2 : 1, correct: score, total: score + misses, seconds: Math.round((Date.now() - started) / 1000), subject });
    sfx.trophy();
    stage.append(el('div', { class: 'result' },
      el('div', { class: 'result__emoji' }, perfect ? '🏆' : '⭐'),
      el('h2', {}, perfect ? 'PERFECT MATCH!' : 'FULL TIME!'),
      el('div', { class: 'result__score' }, `ALI FC ${score} — ${misses} RIVALS`),
      el('div', { class: 'result__xp' }, `+${bonus + score * 12} XP`),
      el('button', { class: 'btn btn--primary btn--wide', type: 'button', onClick: exit }, "O'YINLARGA QAYTISH 🎮"),
    ));
    celebrate(perfect ? 'PERFECT! 🏆' : 'FULL TIME! ⚽', '🏆');
  }

  next();
  return node;
}
