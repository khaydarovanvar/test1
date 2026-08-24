/* Training-session list for one subject, grouped by world. */

import { el, pageHeader, stars, progressBar } from '../ui.js';
import * as S from '../state.js';
import { lessonsFor, WORLDS, worldById } from '../content/curriculum.js';

const META = {
  english: { title: '⚽ ENGLISH TRAINING', sub: 'Ingliz tili mashqi', colour: 'green' },
  math:    { title: '🔢 MATH TRAINING',    sub: 'Matematika mashqi',  colour: 'blue' },
  writing: { title: '✏️ WRITING TRAINING', sub: 'Yozuv mashqi',       colour: 'yellow' },
};

export function subjectScreen(subject) {
  const meta = META[subject];
  const lessons = lessonsFor(subject);
  const node = el('div', { class: `screen screen--subject s-${meta.colour}` },
    pageHeader(meta.title, meta.sub),
    el('div', { class: 'subject-summary' },
      progressBar(S.subjectProgress(subject), {
        label: 'Mahorat', value: `${Math.round(S.subjectProgress(subject) * 100)}%`,
      }),
      el('div', { class: 'subject-summary__chips' },
        chip('🎯', `Aniqlik ${Math.round(S.accuracy(subject) * 100)}%`),
        chip('🏋️', `Daraja ${S.difficulty(subject)}/5`),
        chip('✅', `${lessons.filter(l => S.lessonState(l.id)?.done).length}/${lessons.length}`),
      ),
    ),
  );

  WORLDS.forEach(w => {
    const group = lessons.filter(l => l.world === w.id);
    if (!group.length) return;
    const unlocked = S.worldUnlocked(w.id);
    const section = el('section', { class: `world-group${unlocked ? '' : ' is-locked'}` },
      el('div', { class: 'world-group__head', style: { '--w': w.colour } },
        el('span', { class: 'world-group__dot' }, w.dot),
        el('span', { class: 'world-group__name' }, w.name),
        unlocked ? null : el('span', { class: 'world-group__lock' }, `🔒 ${w.unlockXp} XP`),
      ),
      el('div', { class: 'lesson-grid' },
        ...group.map(l => lessonCard(l, unlocked)),
      ),
    );
    node.append(section);
  });

  return node;
}

function chip(emoji, text) {
  return el('span', { class: 'chip' }, `${emoji} ${text}`);
}

function lessonCard(lesson, unlocked) {
  const st = S.lessonState(lesson.id);
  const tag = unlocked ? 'a' : 'div';
  return el(tag, {
    class: `lesson-card${st?.done ? ' is-done' : ''}${unlocked ? '' : ' is-locked'}`,
    href: unlocked ? `#/lesson/${lesson.id}` : null,
  },
    el('span', { class: 'lesson-card__emoji' }, unlocked ? lesson.emoji : '🔒'),
    el('span', { class: 'lesson-card__body' },
      el('span', { class: 'lesson-card__title' }, S.showUzbek() ? lesson.titleUz : lesson.title),
      el('span', { class: 'lesson-card__sub' }, S.showUzbek() ? lesson.title : lesson.titleUz),
    ),
    st?.done ? el('span', { class: 'lesson-card__stars' }, stars(st.stars, 3)) : el('span', { class: 'lesson-card__go' }, '▶'),
  );
}
