import { el, pageHeader, toast } from '../ui.js';
import * as S from '../state.js';
import { speak, canSpeak } from '../audio.js';

export function settingsScreen() {
  const st = S.get();
  const toggle = (label, sub, value, onChange) => {
    const input = el('input', { type: 'checkbox', onChange: e => onChange(e.target.checked) });
    input.checked = value;
    return el('label', { class: 'ctl-check' }, input, el('span', {}, el('strong', {}, label), el('small', {}, sub)));
  };

  const nameInput = el('input', { class: 'text-input', type: 'text', value: st.name, maxlength: '14' });

  return el('div', { class: 'screen screen--settings' },
    pageHeader('⚙️ SOZLAMALAR', 'Settings'),
    el('section', { class: 'card' },
      el('h3', {}, "O'yinchi ismi"),
      el('div', { class: 'ctl-row' }, nameInput,
        el('button', { class: 'btn btn--primary', type: 'button', onClick: () => {
          const v = nameInput.value.trim() || 'Ali';
          S.get().name = v; S.save(); toast(`Salom, ${v}! ⚽`);
        } }, 'Saqlash'),
      ),
    ),
    el('section', { class: 'card' },
      el('h3', {}, 'Ovoz'),
      toggle('🔊 Futbol tovushlari', 'Gol, hushtak, zarba', st.settings.sound !== false, v => { S.get().settings.sound = v; S.save(); }),
      canSpeak()
        ? toggle('🗣️ Inglizcha talaffuz', "So'zlarni ovoz chiqarib o'qish", st.settings.speech !== false, v => { S.get().settings.speech = v; S.save(); if (v) speak('Hello Ali'); })
        : el('p', { class: 'note' }, 'Bu brauzerda talaffuz mavjud emas.'),
    ),
    el('section', { class: 'card' },
      el('h3', {}, "O'zbekcha tarjima"),
      el('p', { class: 'note' }, "Avtomatik: Ali yuqori darajaga chiqqach, o'zbekcha izohlar o'chadi va faqat ingliz tili qoladi."),
      el('div', { class: 'ctl-row' },
        ...[['auto', 'Avtomatik'], ['always', 'Doim ko‘rsat'], ['never', 'Faqat inglizcha']].map(([v, label]) =>
          el('button', {
            class: `pill${st.settings.uzbek === v ? ' is-on' : ''}`, type: 'button',
            onClick: (e) => {
              S.get().settings.uzbek = v; S.save();
              e.target.closest('.ctl-row').querySelectorAll('.pill').forEach(p => p.classList.remove('is-on'));
              e.target.closest('.pill').classList.add('is-on');
              toast('Saqlandi ✅');
            },
          }, label)),
      ),
    ),
    el('section', { class: 'card' },
      el('h3', {}, 'Ma\'lumot'),
      el('p', { class: 'note' }, 'ALI FC — original futbol qahramoni bilan o‘quv o‘yini. Hech qanday haqiqiy klub yoki futbolchining rasmi, logotipi yoki nomi ishlatilmagan.'),
      el('p', { class: 'note' }, 'Natijalar faqat shu brauzerda saqlanadi (localStorage).'),
    ),
  );
}
