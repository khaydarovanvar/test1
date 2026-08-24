/* 📊 MY PROGRESS — Ali's own, kid-friendly view. */

import { el, pageHeader, progressBar, stars, blockBar } from '../ui.js';
import * as S from '../state.js';
import { LESSONS, TROPHIES } from '../content/curriculum.js';

export function progressScreen() {
  const st = S.get();
  const lvl = S.levelInfo();
  const done = LESSONS.filter(l => S.lessonState(l.id)?.done);

  return el('div', { class: 'screen screen--progress' },
    pageHeader('📊 MY PROGRESS', 'Mening natijalarim'),

    el('div', { class: 'prog-hero' },
      el('div', { class: 'prog-hero__level' }, el('span', {}, 'LEVEL'), el('strong', {}, lvl.level)),
      el('div', { class: 'prog-hero__stars' }, stars(S.starRating())),
      progressBar(lvl.pct, { label: 'Keyingi daraja', value: `${lvl.into}/${lvl.need} XP` }),
    ),

    el('div', { class: 'stat-cards' },
      statCard('⚽', st.stats.goals, 'GOALS'),
      statCard('⭐', st.xp, 'XP'),
      statCard('💎', st.coins, 'COINS'),
      statCard('🔥', st.streak.count, 'STREAK'),
      statCard('🏆', st.trophies.length, `/ ${TROPHIES.length}`),
      statCard('✅', done.length, `/ ${LESSONS.length}`),
    ),

    el('section', { class: 'card' },
      el('h3', {}, 'Mahoratlar'),
      skill('⚽ English', S.subjectProgress('english'), S.accuracy('english')),
      skill('🔢 Math', S.subjectProgress('math'), S.accuracy('math')),
      skill('✏️ Writing', S.subjectProgress('writing'), S.accuracy('writing')),
    ),

    el('section', { class: 'card' },
      el('h3', {}, 'Oxirgi mashqlar'),
      done.length
        ? el('ul', { class: 'recent-list' },
            ...done.slice(-8).reverse().map(l => {
              const s = S.lessonState(l.id);
              return el('li', {},
                el('span', {}, `${l.emoji} ${l.title}`),
                el('span', {}, stars(s.stars, 3)),
              );
            }))
        : el('p', { class: 'note' }, "Hali mashq yo'q — birinchi mashqni boshla! ⚽"),
    ),
  );
}

function statCard(emoji, value, label) {
  return el('div', { class: 'stat-card' },
    el('span', { class: 'stat-card__emoji' }, emoji),
    el('span', { class: 'stat-card__value' }, String(value)),
    el('span', { class: 'stat-card__label' }, label),
  );
}

function skill(name, pct, acc) {
  return el('div', { class: 'skill-line' },
    el('span', { class: 'skill-line__name' }, name),
    blockBar(pct),
    el('span', { class: 'skill-line__pct' }, `${Math.round(pct * 100)}%`),
    el('span', { class: 'skill-line__acc' }, `🎯 ${Math.round(acc * 100)}%`),
  );
}
