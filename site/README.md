# Anvarbek Khaydarov · Mathematics — teaching site

A static site (no build step, no dependencies) of mathematics lesson resources for grades 5–11,
following the Uzbekistan national programme and Cambridge Lower Secondary side by side.

## Running it

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server -d site 8000
```

`standalone.html` is the whole site assembled into one self-contained file with hash routing —
useful for sharing, offline use, or a classroom machine with no server. Rebuild it with:

```
python3 site/build-standalone.py
```

## Structure

```
site/
  index.html         home — 3D hero, grade tiles, lesson anatomy
  grades.html        grades 5–11 hub and roadmap
  grade.html?g=8     grade page — streams, quarter tabs, topic list
  lesson.html?t=ID   one topic page, rendered from data
  about.html         how a lesson is built
  standalone.html    generated: the whole site in one file (hash routing)
  build-standalone.py   builds standalone.html
  build-pdf.mjs         renders every lesson to a printable PDF
  assets/
    styles.css       design tokens, typography, components, print, light + dark
    pages.css        3D hero, page and lesson layouts, mobile rules
    app.js           logo, header, footer, mobile nav, theme, 3D hero engine
    mathfmt.js       inline maths helpers — fractions, roots, powers
    figures.js       34 SVG figures, themed for light and dark
    interactive.js   15 interactive models
    lesson.js        renders a topic page from its data object
  data/
    grades.js        the grade 5–11 index
    g8-alg.js        Grade 8 Algebra — all written quarters
    g8-geo.js        Grade 8 Geometry — all written quarters
  pdf/               generated: one PDF per lesson + one booklet per quarter
```

## What is written

All four quarters of Grade 8 are complete — the full 102 hours of algebra and 68 hours of geometry.

| Stream | Quarter | Topics | Lessons | Problems |
|---|---|---:|---:|---:|
| Grade 8 Algebra | I | 10 | 27 | 210 |
| Grade 8 Geometry | I | 13 | 18 | 273 |
| Grade 8 Algebra | II | 10 | 21 | 210 |
| Grade 8 Geometry | II | 10 | 14 | 210 |
| Grade 8 Algebra | III | 14 | 30 | 294 |
| Grade 8 Geometry | III | 14 | 20 | 294 |
| Grade 8 Algebra | IV | 10 | 24 | 210 |
| Grade 8 Geometry | IV | 14 | 16 | 294 |
| **Total** | | **95** | **170** | **1995** |

Every topic page contains: a 40-minute lesson clock, learning objectives, an explanation with drawn
figures, worked examples with reasoned steps, one interactive model, an English / Uzbek / Russian
terminology table, a quick check, 21 practice problems (7 easy / 7 medium / 7 hard) with revealable
answers, and homework.

## Navigation

Every lesson page carries a back button to the grade page, a dropdown listing every topic in the same
stream and quarter, and previous / next arrows. On phones a sticky bar at the foot of the page gives
previous, all topics and next.

## PDFs

`python3 -m http.server` is not needed — the builder reads the files directly:

```
node site/build-pdf.mjs      # one A4 PDF per lesson, answers shown, into site/pdf/
```

Booklets (one per stream and quarter) are merged from those with `pypdf`.

## Adding a topic

Push a new object onto the array in the matching data file. Required fields:

```js
{
  id, stream, grade, quarter, lessons, hours, title, subtitle,
  uz, uzPage, cam, camPage, wb,     // textbook references
  objectives: [],                    // 3–4 statements
  terms: [[english, uzbek, russian], ...],   // 7–12 rows
  timing: [[min, 'label'], ...],     // optional; defaults to 5/12/8/13/2
  sections: [{ h, html }],           // html may contain {{fig:name:caption}}
  examples: [{ q, steps: [[step, why]], ans }],
  interactive: { type, ... },        // see assets/interactive.js
  quiz: [{ q, a: [], c, why }],
  practice: { easy: [[q, a]×7], med: [...], hard: [...] },
  homework: [ ... ], hwTitle, hwNote
}
```

Figures are referenced as `{{fig:parallelogram:caption text}}` and resolved from `assets/figures.js`.

## Textbooks referenced

- *Algebra 8* — Sh. A. Alimov, A. R. Xalmuxamedov, M. A. Mirzaxmedov. O‘qituvchi, Tashkent 2019, 4th edition.
- *Geometry 8* — A. A. Rahimkariev, M. A. Toxtaxodjaeva. Yangiyo‘l Poligraf Servis, 2019, 4th edition.
- *Cambridge Lower Secondary Mathematics 9* — Learner's Book and Workbook.

Page references point to these editions. All problems on the site are written for the course and are
not reproduced from the textbooks.
