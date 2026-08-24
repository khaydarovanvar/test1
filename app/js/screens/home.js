/* Stadium dashboard — the home screen. */

import { el, bigButton, blockBar, stars, progressBar } from '../ui.js';
import * as S from '../state.js';
import { WORLDS, TIERS } from '../content/curriculum.js';
import { sfx } from '../audio.js';

export function homeScreen() {
  const st = S.get();
  const lvl = S.levelInfo();
  const world = S.currentWorld();
  const tierInfo = TIERS.find(t => t.tier === Math.min(5, S.tier())) || TIERS[0];

  const scoreboard = el('section', { class: 'scoreboard' },
    el('div', { class: 'scoreboard__glow' }),
    el('div', { class: 'scoreboard__crest' }, '🏆'),
    el('h1', { class: 'scoreboard__club' }, '⚽ ALI FC'),
    el('p', { class: 'scoreboard__motto' }, 'Train your brain. Score goals!'),

    el('div', { class: 'player' },
      el('div', { class: 'player__avatar' },
        el('span', { class: 'player__kit' }, '🧒'),
        el('span', { class: 'player__number' }, '7'),
      ),
      el('div', { class: 'player__meta' },
        el('div', { class: 'player__name' }, st.name.toUpperCase()),
        el('div', { class: 'player__stars' }, stars(S.starRating())),
        el('div', { class: 'player__club' }, `${world.emoji} ${world.name}`),
      ),
    ),

    el('div', { class: 'level-badge' },
      el('span', { class: 'level-badge__word' }, 'LEVEL'),
      el('span', { class: 'level-badge__num' }, lvl.level),
    ),

    el('div', { class: 'skills' },
      skillRow('English', '⚽', S.subjectProgress('english'), '#35c46a'),
      skillRow('Math', '🔢', S.subjectProgress('math'), '#3a86ff'),
      skillRow('Writing', '✏️', S.subjectProgress('writing'), '#f6c945'),
    ),

    el('div', { class: 'stat-strip' },
      stat('⭐', `${st.xp} XP`),
      stat('🔥', `${st.streak.count} DAY STREAK`),
      stat('💎', `${st.coins}`),
      stat('⚽', `${st.stats.goals} GOALS`),
    ),

    progressBar(lvl.pct, { label: `Level ${lvl.level} → ${lvl.level + 1}`, value: `${lvl.into}/${lvl.need} XP` }),
    el('div', { class: 'tier-chip' }, `${world.dot} ${tierInfo.name} — ${tierInfo.skills.join(' • ')}`),
  );

  const menu = el('nav', { class: 'menu' },
    bigButton({ emoji: '⚽', label: 'ENGLISH TRAINING', sub: 'Ingliz tili mashqi', colour: 'green', href: '#/english' }),
    bigButton({ emoji: '🔢', label: 'MATH TRAINING', sub: 'Matematika mashqi', colour: 'blue', href: '#/math' }),
    bigButton({ emoji: '✏️', label: 'WRITING TRAINING', sub: 'Yozuv mashqi', colour: 'yellow', href: '#/writing' }),
    bigButton({ emoji: '🎮', label: 'FOOTBALL GAMES', sub: "Futbol o'yinlari", colour: 'purple', href: '#/games' }),
    bigButton({ emoji: '🏆', label: 'TROPHIES', sub: 'Kubokxona', colour: 'gold', href: '#/trophies' }),
    bigButton({ emoji: '🖨️', label: 'PRINT PRACTICE', sub: 'Chop etish markazi', colour: 'orange', href: '#/print' }),
    bigButton({ emoji: '📊', label: 'MY PROGRESS', sub: 'Mening natijam', colour: 'teal', href: '#/progress' }),
    bigButton({ emoji: '🗺️', label: 'FOOTBALL WORLD', sub: 'Karta', colour: 'red', href: '#/map' }),
  );

  const daily = el('a', { class: 'daily-card', href: '#/daily' },
    el('div', { class: 'daily-card__left' },
      el('div', { class: 'daily-card__title' }, "⚽ TODAY'S TRAINING"),
      el('div', { class: 'daily-card__sub' }, "Bugungi mashq — 6 ta bosqich, +100 XP"),
    ),
    el('div', { class: 'daily-card__go' }, dailyProgressLabel()),
  );

  const footer = el('footer', { class: 'home-foot' },
    el('a', { class: 'text-link', href: '#/parent' }, '👨‍👩‍👦 Parent Dashboard'),
    el('span', {}, ' • '),
    el('a', { class: 'text-link', href: '#/settings' }, '⚙️ Sozlamalar'),
  );

  const node = el('div', { class: 'screen screen--home' }, scoreboard, daily, menu, footer);
  node.querySelectorAll('a,button').forEach(b => b.addEventListener('click', () => sfx.tap()));
  return node;
}

function dailyProgressLabel() {
  const d = S.dailyState();
  return d.claimed ? '✅ TAYYOR' : `${d.done.length}/6 ▶`;
}

function skillRow(name, emoji, pct, colour) {
  return el('div', { class: 'skill-row' },
    el('span', { class: 'skill-row__name' }, `${emoji} ${name}`),
    blockBar(pct),
    el('span', { class: 'skill-row__pct', style: { color: colour } }, `${Math.round(pct * 100)}%`),
  );
}

function stat(emoji, text) {
  return el('div', { class: 'stat' }, el('span', { class: 'stat__emoji' }, emoji), el('span', { class: 'stat__text' }, text));
}
