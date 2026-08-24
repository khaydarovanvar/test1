/* 👨‍👩‍👦 Parent dashboard — the honest, detailed view. */

import { el, pageHeader, progressBar, modal, toast } from '../ui.js';
import * as S from '../state.js';
import { LESSONS, TROPHIES } from '../content/curriculum.js';

const TAG_LABELS = {
  counting: 'Sanash (counting)',
  compare: 'Taqqoslash (more/less)',
  addition: "Qo'shish (addition)",
  subtraction: 'Ayirish (subtraction)',
  multiplication: "Ko'paytirish (multiplication)",
  division: "Bo'lish (division)",
  'number-writing': 'Raqam yozish',
  'number-recognition': 'Raqamni tanish',
  'math-english': 'Inglizcha matematika atamalari',
  'reading-comprehension': "O'qib tushunish",
  sentence: 'Gaplar',
  'sentence-order': "So'z tartibi",
  writing: 'Yozuv',
};

function label(tag) {
  if (TAG_LABELS[tag]) return TAG_LABELS[tag];
  if (tag.startsWith('letter-sound-')) return `Harf tovushi: ${tag.split('-').pop()}`;
  if (tag.startsWith('letter-')) return `Harfni tanish: ${tag.split('-').pop()}`;
  if (tag.startsWith('vocab-')) return `So'z: ${tag.slice(6)}`;
  if (tag.startsWith('spell-')) return `Imlo: ${tag.slice(6)}`;
  if (tag.startsWith('phonics-')) return `Tovushlar: ${tag.slice(8)}`;
  if (tag.startsWith('word-problem-')) return `Masala: ${tag.slice(13)}`;
  return tag;
}

export function parentScreen() {
  const st = S.get();
  const weak = S.weakTags(6);
  const mins = Math.round(st.stats.secondsSpent / 60);
  const done = LESSONS.filter(l => S.lessonState(l.id)?.done);
  const acc = st.stats.answersTotal ? st.stats.answersCorrect / st.stats.answersTotal : 0;

  return el('div', { class: 'screen screen--parent' },
    pageHeader('👨‍👩‍👦 PARENT DASHBOARD', "Ota-ona paneli — Ali'ning natijalari"),

    el('section', { class: 'card' },
      el('h3', {}, 'ALI FC PROGRESS'),
      progressBar(S.subjectProgress('english'), { label: '⚽ English', value: `${Math.round(S.subjectProgress('english') * 100)}%`, colour: '#35c46a' }),
      progressBar(S.subjectProgress('math'), { label: '🔢 Math', value: `${Math.round(S.subjectProgress('math') * 100)}%`, colour: '#3a86ff' }),
      progressBar(S.subjectProgress('writing'), { label: '✏️ Writing', value: `${Math.round(S.subjectProgress('writing') * 100)}%`, colour: '#f6c945' }),
      el('div', { class: 'kv-grid' },
        kv('Daraja (level)', String(S.levelInfo().level)),
        kv('Karyera bosqichi', `${S.currentWorld().emoji} ${S.currentWorld().name}`),
        kv('Jami XP', String(st.xp)),
        kv('🔥 Streak', `${st.streak.count} kun (eng yaxshi: ${st.streak.best})`),
        kv('Bajarilgan mashqlar', `${done.length} / ${LESSONS.length}`),
        kv("O'yinlar", String(st.stats.gamesPlayed)),
        kv('Aniqlik (accuracy)', `${Math.round(acc * 100)}%  (${st.stats.answersCorrect}/${st.stats.answersTotal})`),
        kv('Sarflangan vaqt', `${mins} daqiqa`),
        kv('Kuboklar', `${st.trophies.length} / ${TROPHIES.length}`),
        kv('Chop etilgan varaqalar', String(st.stats.worksheetsPrinted || 0)),
      ),
    ),

    el('section', { class: 'card' },
      el('h3', {}, '🔻 Needs Practice — Zaif tomonlar'),
      weak.length
        ? el('ul', { class: 'weak-list' },
            ...weak.map(w => el('li', {},
              el('span', {}, `• ${label(w.tag)}`),
              el('span', { class: 'weak-list__n' }, `${w.n} xato`),
              el('button', { class: 'btn btn--tiny', type: 'button', onClick: () => { S.clearMistake(w.tag); toast('Tozalandi'); location.reload(); } }, 'Tozalash'),
            )))
        : el('p', { class: 'note' }, 'Hozircha takrorlanuvchi xatolar yo‘q. 👍'),
    ),

    el('section', { class: 'card' },
      el('h3', {}, '🔺 Strong Areas — Kuchli tomonlar'),
      strongList(),
    ),

    el('section', { class: 'card' },
      el('h3', {}, 'Qiyinlik darajasi (adaptiv)'),
      el('p', { class: 'note' }, 'Dastur avtomatik moslashadi, lekin qo‘lda ham o‘zgartirish mumkin.'),
      ...['english', 'math', 'writing'].map(sub => el('div', { class: 'diff-row' },
        el('span', {}, sub),
        el('div', { class: 'diff-pills' },
          ...[1, 2, 3, 4, 5].map(d => el('button', {
            class: `pill pill--tiny${S.difficulty(sub) === d ? ' is-on' : ''}`, type: 'button',
            onClick: (e) => {
              S.setDifficulty(sub, d);
              e.target.parentElement.querySelectorAll('.pill').forEach(p => p.classList.remove('is-on'));
              e.target.classList.add('is-on');
            },
          }, String(d))),
        ),
      )),
    ),

    el('section', { class: 'card' },
      el('h3', {}, 'Oxirgi 10 mashq'),
      st.history.length
        ? el('table', { class: 'hist' },
            el('thead', {}, el('tr', {}, el('th', {}, 'Sana'), el('th', {}, 'Fan'), el('th', {}, 'Natija'), el('th', {}, 'Vaqt'))),
            el('tbody', {}, ...st.history.slice(-10).reverse().map(h => el('tr', {},
              el('td', {}, h.date), el('td', {}, h.subject),
              el('td', {}, `${h.correct}/${h.total || h.correct}`),
              el('td', {}, `${Math.round(h.seconds / 60)}m`)))))
        : el('p', { class: 'note' }, 'Hali maʼlumot yo‘q.'),
    ),

    el('section', { class: 'card' },
      el('h3', {}, 'Boshqaruv'),
      el('div', { class: 'ctl-actions' },
        el('a', { class: 'btn btn--gold', href: '#/print' }, '🖨️ Mashq varaqasi chop etish'),
        el('button', { class: 'btn btn--ghost', type: 'button', onClick: exportData }, '💾 Natijalarni saqlash (JSON)'),
        el('button', { class: 'btn btn--danger', type: 'button', onClick: confirmReset }, '🗑️ Hammasini tozalash'),
      ),
    ),
  );
}

function strongList() {
  const st = S.get();
  const rows = [
    ['⚽ English', S.accuracy('english'), st.skills.english.attempts],
    ['🔢 Math', S.accuracy('math'), st.skills.math.attempts],
    ['✏️ Writing', S.accuracy('writing'), st.skills.writing.attempts],
  ].filter(r => r[2] >= 5 && r[1] >= 0.75);
  if (!rows.length) return el('p', { class: 'note' }, "Ko'proq mashq kerak — natijalar to'planmoqda.");
  return el('ul', { class: 'weak-list' }, ...rows.map(r => el('li', {},
    el('span', {}, `• ${r[0]}`), el('span', { class: 'weak-list__n' }, `${Math.round(r[1] * 100)}% to'g'ri`))));
}

function kv(k, v) {
  return el('div', { class: 'kv' }, el('span', { class: 'kv__k' }, k), el('span', { class: 'kv__v' }, v));
}

function exportData() {
  const blob = new Blob([JSON.stringify(S.get(), null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `ali-fc-progress-${S.today()}.json`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

function confirmReset() {
  modal({
    title: '🗑️ Hammasini tozalash?',
    body: el('p', {}, "Ali'ning barcha XP, kubok va natijalari o'chiriladi. Buni qaytarib bo'lmaydi."),
    actions: [
      { label: 'Bekor qilish' },
      { label: "Ha, o'chirish", primary: true, onClick: () => { S.resetAll(); location.hash = '#/home'; location.reload(); } },
    ],
  });
}
