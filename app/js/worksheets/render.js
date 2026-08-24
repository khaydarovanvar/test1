/* Renders a worksheet object into printable A4 pages.
   The markup is deliberately plain — clean enough to print, with just a
   subtle football header/footer (section 24). */

import { el } from '../ui.js';
import { answerKey } from './generator.js';

export function renderWorksheet(ws, { answers = false } = {}) {
  const pages = el('div', { class: 'sheets' });
  const page = sheetPage(ws, answers);
  pages.append(page);

  const body = page.querySelector('.sheet__body');
  ws.sections.forEach(sec => body.append(renderSection(sec, { answers })));

  if (answers) {
    pages.append(answerPage(ws));
  }
  return pages;
}

function sheetPage(ws, isAnswerKey) {
  return el('div', { class: 'sheet' },
    el('header', { class: 'sheet__head' },
      el('div', { class: 'sheet__rule' }),
      el('div', { class: 'sheet__crest' }, '⚽'),
      el('div', { class: 'sheet__club' }, 'ALI FC'),
      el('div', { class: 'sheet__kind' }, 'TRAINING WORKSHEET'),
      el('div', { class: 'sheet__meta' },
        el('span', {}, `Name: ${ws.name || 'Ali'} ______________________`),
        el('span', {}, 'Date: ______________________'),
      ),
      el('div', { class: 'sheet__topic' },
        `⭐ Today's Training — ${ws.title} (${ws.titleUz})`,
        ws.items ? el('span', { class: 'sheet__count' }, ` · ${ws.items} ta topshiriq`) : null,
      ),
      el('div', { class: 'sheet__rule' }),
    ),
    el('div', { class: 'sheet__body' }),
    el('footer', { class: 'sheet__foot' },
      el('div', { class: 'sheet__rule' }),
      el('span', {}, "Coach's Score: ☆ ☆ ☆ ☆ ☆"),
      el('span', {}, 'Great work, Ali! ⚽'),
    ),
  );
}

function answerPage(ws) {
  const key = answerKey(ws);
  const page = sheetPage(ws, true);
  page.querySelector('.sheet__kind').textContent = 'ANSWER KEY — FOR THE COACH';
  page.classList.add('sheet--key');
  const body = page.querySelector('.sheet__body');
  body.append(el('div', { class: 'key-grid' },
    ...key.map(k => el('div', { class: 'key-item' },
      el('span', { class: 'key-item__n' }, `${k.n}.`),
      el('span', { class: 'key-item__q' }, k.q),
      el('span', { class: 'key-item__a' }, `= ${k.a}`),
    )),
  ));
  return page;
}

/* ------------------------------------------------------------------ */

function renderSection(sec, opts) {
  switch (sec.type) {
    case 'instruction':
      return el('div', { class: 'ws-instruction' },
        el('strong', {}, sec.en),
        sec.uz ? el('span', {}, sec.uz) : null,
      );

    case 'alphabet-rows':
      return el('div', { class: 'ws-alpha' },
        ...sec.rows.map(r => el('div', { class: 'ws-alpha__row' },
          el('div', { class: 'ws-alpha__key' },
            el('span', { class: 'ws-alpha__big' }, r.letter),
            el('span', { class: 'ws-alpha__small' }, r.lower),
            el('span', { class: 'ws-alpha__word' }, `${r.emoji} ${r.word}`),
          ),
          el('div', { class: 'ws-alpha__line' },
            ...Array.from({ length: r.repeats }, () => el('span', { class: 'ghost' }, r.letter)),
            ...Array.from({ length: 4 }, () => el('span', { class: 'blank' }, '')),
          ),
        )),
      );

    case 'trace-big':
      return el('div', { class: 'ws-trace' },
        ...sec.items.map(it => el('div', { class: 'ws-trace__block' },
          el('div', { class: 'ws-trace__hero' },
            el('span', { class: 'ghost ghost--xl' }, it.glyph),
            el('span', { class: 'ghost ghost--xl' }, it.glyph),
            el('span', { class: 'blank blank--xl' }, ''),
            el('span', { class: 'blank blank--xl' }, ''),
            el('span', { class: 'ws-trace__word' }, `${it.emoji} ${it.word}`),
          ),
          el('div', { class: 'ws-trace__hero ws-trace__hero--lower' },
            el('span', { class: 'ghost ghost--lg' }, it.lower),
            el('span', { class: 'ghost ghost--lg' }, it.lower),
            el('span', { class: 'blank blank--lg' }, ''),
            el('span', { class: 'blank blank--lg' }, ''),
          ),
          ruledLine(),
        )),
      );

    case 'word-rows':
      return el('div', { class: 'ws-words' },
        ...sec.items.map(w => el('div', { class: 'ws-words__row' },
          el('div', { class: 'ws-words__head' },
            el('span', { class: 'ws-words__emoji' }, w.emoji),
            el('span', { class: 'ws-words__word' }, w.word),
            el('span', { class: 'ws-words__uz' }, w.uz),
          ),
          el('div', { class: 'ws-words__letters' },
            ...w.word.split('').map(ch => el('span', { class: 'letterbox ghost' }, ch)),
          ),
          ruledLine(), ruledLine(),
        )),
      );

    case 'vocab-table':
      return el('table', { class: 'ws-vocab' },
        el('thead', {}, el('tr', {},
          el('th', {}, 'Picture'), el('th', {}, 'Word'), el('th', {}, 'Copy it'), el('th', {}, "O'zbekcha"))),
        el('tbody', {},
          ...sec.items.map(it => el('tr', {},
            el('td', { class: 'ws-vocab__pic' }, it.emoji),
            el('td', { class: 'ws-vocab__en' }, it.en),
            el('td', { class: 'ws-vocab__copy' }, ''),
            el('td', { class: 'ws-vocab__uz' }, opts.answers ? it.uz : ''),
          )),
        ),
      );

    case 'sentence-rows':
      return el('div', { class: 'ws-sent' },
        ...sec.items.map(s => el('div', { class: 'ws-sent__block' },
          el('div', { class: 'ws-sent__model' },
            el('span', { class: 'ws-sent__emoji' }, s.emoji),
            el('span', { class: 'ghost ghost--sent' }, s.en),
          ),
          el('div', { class: 'ws-sent__uz' }, s.uz),
          ...Array.from({ length: s.lines }, () => ruledLine()),
        )),
      );

    case 'matching':
      return el('div', { class: 'ws-match' },
        el('div', { class: 'ws-match__col' }, ...sec.left.map(w => el('div', { class: 'ws-match__item' }, w, el('span', { class: 'ws-match__dot' }, '●')))),
        el('div', { class: 'ws-match__gap' }),
        el('div', { class: 'ws-match__col ws-match__col--right' }, ...sec.right.map(r => el('div', { class: 'ws-match__item' }, el('span', { class: 'ws-match__dot' }, '●'), el('span', { class: 'ws-match__pic' }, r.emoji)))),
      );

    case 'stroke-rows':
      return el('div', { class: 'ws-strokes' },
        ...sec.rows.map(r => el('div', { class: 'ws-strokes__row' },
          el('div', { class: 'ws-strokes__label' }, `⚽ ${r.label}`),
          el('div', { class: 'ws-strokes__track' },
            el('span', { class: 'ws-strokes__ball' }, '⚽'),
            strokeSvg(r.kind),
            el('span', { class: 'ws-strokes__goal' }, '🥅'),
          ),
        )),
      );

    case 'number-rows':
      return el('div', { class: 'ws-nums' },
        ...sec.items.map(it => el('div', { class: 'ws-nums__row' },
          el('span', { class: 'ws-nums__key' }, it.n),
          el('span', { class: 'ws-nums__word' }, it.word),
          el('span', { class: 'ws-nums__balls' }, '⚽'.repeat(Math.min(it.n, 10))),
          el('span', { class: 'ws-nums__line' },
            ...Array.from({ length: it.repeats }, () => el('span', { class: 'ghost' }, String(it.n))),
            ...Array.from({ length: 4 }, () => el('span', { class: 'blank' }, '')),
          ),
        )),
      );

    case 'counting':
      return el('div', { class: `ws-count${sec.items.length > 24 ? ' ws-count--dense' : ''}` },
        ...sec.items.map((it, i) => el('div', { class: 'ws-count__cell' },
          el('span', { class: 'ws-count__n' }, `${i + 1}.`),
          el('span', { class: 'ws-count__pics' }, it.emoji.repeat(it.count)),
          el('span', { class: 'ws-count__box' }, opts.answers ? String(it.answer) : ''),
        )),
      );

    case 'column-problems':
      return el('div', { class: `ws-cols${sec.items.length > 24 ? ' ws-cols--dense' : ''}` },
        ...sec.items.map((it, i) => el('div', { class: 'ws-cols__cell' },
          el('span', { class: 'ws-cols__n' }, `${i + 1}.`),
          el('div', { class: 'ws-cols__sum' },
            el('div', { class: 'ws-cols__a' }, String(it.a)),
            el('div', { class: 'ws-cols__b' }, el('span', { class: 'ws-cols__op' }, it.op), String(it.b)),
            el('div', { class: 'ws-cols__rule' }),
            el('div', { class: 'ws-cols__ans' }, opts.answers ? String(it.answer) : ''),
          ),
        )),
      );

    case 'inline-problems':
      return el('div', { class: `ws-inline${sec.items.length > 30 ? ' ws-inline--dense' : ''}` },
        ...sec.items.map((it, i) => el('div', { class: 'ws-inline__cell' },
          el('span', { class: 'ws-inline__n' }, `${i + 1}.`),
          el('span', { class: 'ws-inline__q' }, `${it.a} ${it.op} ${it.b} =`),
          el('span', { class: 'ws-inline__blank' }, opts.answers ? String(it.answer) : ''),
        )),
      );

    case 'word-problems':
      return el('div', { class: 'ws-wp' },
        ...sec.items.map((it, i) => el('div', { class: 'ws-wp__item' },
          el('div', { class: 'ws-wp__q' }, `${i + 1}. ${it.en}`),
          it.uz ? el('div', { class: 'ws-wp__uz' }, it.uz) : null,
          el('div', { class: 'ws-wp__work' },
            el('span', {}, 'Working:'), el('span', { class: 'ws-wp__space' }, ''),
          ),
          el('div', { class: 'ws-wp__ans' }, 'Answer: ', el('span', { class: 'ws-wp__box' }, opts.answers ? String(it.answer) : '')),
        )),
      );

    case 'note':
      return el('p', {}, sec.text);

    default:
      return el('div', {});
  }
}

function ruledLine() {
  return el('div', { class: 'ruled' },
    el('span', { class: 'ruled__top' }),
    el('span', { class: 'ruled__mid' }),
    el('span', { class: 'ruled__base' }),
  );
}

const STROKE_PATHS = {
  straight: 'M2,20 L198,20',
  slope:    'M2,34 L198,6',
  zigzag:   'M2,34 L42,6 L82,34 L122,6 L162,34 L198,8',
  wave:     'M2,20 C22,0 42,40 62,20 C82,0 102,40 122,20 C142,0 162,40 182,20 L198,20',
  loops:    'M6,20 a14,14 0 1,1 28,0 a14,14 0 1,1 -28,0 M46,20 a14,14 0 1,1 28,0 a14,14 0 1,1 -28,0 M86,20 a14,14 0 1,1 28,0 a14,14 0 1,1 -28,0 M126,20 a14,14 0 1,1 28,0 a14,14 0 1,1 -28,0',
  updown:   'M10,38 L10,2 M40,38 L40,2 M70,38 L70,2 M100,38 L100,2 M130,38 L130,2 M160,38 L160,2 M190,38 L190,2',
};

function strokeSvg(kind) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 200 40');
  svg.setAttribute('preserveAspectRatio', 'none');
  svg.setAttribute('class', 'ws-strokes__svg');
  const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  p.setAttribute('d', STROKE_PATHS[kind] || STROKE_PATHS.straight);
  p.setAttribute('class', 'ws-strokes__path');
  svg.append(p);
  return svg;
}
