/* The football career map — worlds unlock visually as XP grows. */

import { el, pageHeader, progressBar } from '../ui.js';
import * as S from '../state.js';
import { WORLDS, LESSONS } from '../content/curriculum.js';

export function mapScreen() {
  const xp = S.get().xp;
  const node = el('div', { class: 'screen screen--map' },
    pageHeader('🗺️ FOOTBALL WORLD', 'Karyera yo‘li — har bir dunyo ochiladi'),
  );

  const path = el('div', { class: 'career' });
  WORLDS.forEach((w, i) => {
    const unlocked = xp >= w.unlockXp;
    const next = WORLDS[i + 1];
    const done = LESSONS.filter(l => l.world === w.id && S.lessonState(l.id)?.done).length;
    const total = LESSONS.filter(l => l.world === w.id).length;

    path.append(el('div', { class: `career-node${unlocked ? ' is-open' : ''}`, style: { '--w': w.colour } },
      el('div', { class: 'career-node__dot' }, unlocked ? w.emoji : '🔒'),
      el('div', { class: 'career-node__body' },
        el('div', { class: 'career-node__name' }, `${w.dot} ${w.name}`),
        el('div', { class: 'career-node__uz' }, w.nameUz),
        el('div', { class: 'career-node__blurb' }, w.blurb),
        unlocked
          ? el('div', { class: 'career-node__stat' }, `✅ ${done}/${total} mashq bajarildi`)
          : el('div', { class: 'career-node__stat' }, `🔒 ${w.unlockXp} XP kerak — hozir ${xp} XP`),
        unlocked ? null : progressBar(Math.min(1, xp / w.unlockXp)),
      ),
    ));
    if (next) path.append(el('div', { class: `career-link${xp >= next.unlockXp ? ' is-open' : ''}` }, '⬇️'));
  });

  node.append(path);
  return node;
}
