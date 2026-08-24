/* ⚽ TODAY'S TRAINING — a short, generated daily session. */

import { el, pageHeader, celebrate, toast } from '../ui.js';
import * as S from '../state.js';
import { LESSONS, lessonsFor } from '../content/curriculum.js';
import { MATH_TERMS, termsForTier } from '../content/mathEnglish.js';
import { ALPHABET } from '../content/alphabet.js';
import { GAMES } from './games.js';
import * as M from '../content/math.js';

/* Deterministic per-day pick so the plan doesn't reshuffle on every visit. */
function daySeed() {
  const d = S.today();
  let h = 0;
  for (const ch of d) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h;
}
const at = (arr, off = 0) => arr[(daySeed() + off) % arr.length];

export function dailyPlan() {
  const tier = S.tier();
  const available = sub => lessonsFor(sub).filter(l => S.worldUnlocked(l.world));
  const en = available('english');
  const ma = available('math');
  const wr = available('writing');
  const letter = at(ALPHABET, 3);
  const term = at(termsForTier(Math.max(1, tier - 1)), 5);
  const game = at(GAMES, 7);

  return [
    { id: 'warmup', emoji: '🏃', title: 'Warm-up', uz: 'Isinish',
      detail: tier <= 1 ? 'Count 1–10 out loud ⚽' : 'Count 1–20 in English 🔢',
      href: '#/lesson/' + (ma[0]?.id || 'ma-count-1') },
    { id: 'english', emoji: '📚', title: 'English', uz: 'Ingliz tili',
      detail: `Learn ${letter.l}  •  ${letter.emoji} ${letter.word}`,
      href: '#/lesson/' + (at(en, 1)?.id || 'en-letters-1') },
    { id: 'writing', emoji: '✏️', title: 'Writing', uz: 'Yozuv',
      detail: `Write ${letter.l} × 10`,
      href: '#/lesson/' + (at(wr, 2)?.id || 'wr-upper-1') },
    { id: 'math', emoji: '🔢', title: 'Math', uz: 'Matematika',
      detail: '5 ta misol yech',
      href: '#/lesson/' + (at(ma, 4)?.id || 'ma-add-1') },
    { id: 'mathen', emoji: '🗣️', title: 'English Math', uz: 'Inglizcha matematika',
      detail: `Learn: ${term.en} (${term.uz})`,
      href: '#/lesson/ma-en-1' },
    { id: 'match', emoji: '🎮', title: 'Match', uz: "O'yin",
      detail: game.name,
      href: '#/game/' + game.id },
  ];
}

export function dailyScreen() {
  const plan = dailyPlan();
  const d = S.dailyState();
  const allDone = plan.every(p => d.done.includes(p.id));

  const node = el('div', { class: 'screen screen--daily' },
    pageHeader("⚽ TODAY'S TRAINING", `Bugungi mashq — ${S.today()}`),
    el('div', { class: 'daily-strip' },
      el('span', {}, `🔥 ${S.get().streak.count} DAY STREAK`),
      el('span', {}, `${d.done.length} / ${plan.length}`),
    ),
    el('div', { class: 'daily-list' },
      ...plan.map(p => {
        const done = d.done.includes(p.id);
        return el('a', { class: `daily-item${done ? ' is-done' : ''}`, href: p.href,
          onClick: () => S.markDaily(p.id) },
          el('span', { class: 'daily-item__emoji' }, done ? '✅' : p.emoji),
          el('span', { class: 'daily-item__body' },
            el('span', { class: 'daily-item__title' }, `${p.title} — ${p.uz}`),
            el('span', { class: 'daily-item__detail' }, p.detail),
          ),
          el('span', { class: 'daily-item__go' }, done ? '' : '▶'),
        );
      }),
    ),
    el('div', { class: 'daily-reward' },
      el('div', { class: 'daily-reward__box' },
        el('span', {}, '🏆 REWARD'),
        el('strong', {}, '+100 XP  •  +20 💎'),
      ),
      el('button', {
        class: `btn btn--gold btn--big${allDone && !d.claimed ? '' : ' is-disabled'}`,
        type: 'button',
        disabled: !allDone || d.claimed,
        onClick: () => {
          if (S.claimDaily()) { celebrate('DAILY BONUS! 🏆', '💎'); setTimeout(() => location.reload(), 1200); }
        },
      }, d.claimed ? '✅ OLINDI' : allDone ? '🏆 MUKOFOTNI OL' : '🔒 Barchasini tugat'),
    ),
    el('p', { class: 'note' }, 'Har kuni kel — streak uzilmasin! 🔥'),
  );
  return node;
}
