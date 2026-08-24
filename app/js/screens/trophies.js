import { el, pageHeader } from '../ui.js';
import * as S from '../state.js';
import { TROPHIES } from '../content/curriculum.js';

export function trophiesScreen() {
  const won = TROPHIES.filter(t => S.hasTrophy(t.id));
  return el('div', { class: 'screen screen--trophies' },
    pageHeader('🏆 TROPHY ROOM', 'Kubokxona'),
    el('div', { class: 'trophy-summary' },
      el('span', {}, `${won.length} / ${TROPHIES.length}`),
      el('span', { class: 'trophy-summary__sub' }, 'kubok yig‘ilgan'),
    ),
    el('div', { class: 'trophy-grid' },
      ...TROPHIES.map(t => {
        const has = S.hasTrophy(t.id);
        return el('div', { class: `trophy${has ? ' is-won' : ''}` },
          el('span', { class: 'trophy__emoji' }, has ? t.emoji : '🔒'),
          el('span', { class: 'trophy__name' }, has ? t.name : '???'),
          el('span', { class: 'trophy__desc' }, t.desc),
        );
      }),
    ),
  );
}
