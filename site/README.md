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
  index.html         home — brand, grade tiles, lesson anatomy
  grades.html        grades 5–11 hub and roadmap
  grade.html?g=8     grade page — streams, quarters, topic list
  lesson.html?t=ID   one topic page, rendered from data
  about.html         how a lesson is built
  standalone.html    generated: the whole site in one file
  assets/
    styles.css       design tokens, typography, components (light + dark)
    pages.css        page and lesson layouts
    app.js           logo, header, footer, theme toggle
    mathfmt.js       inline maths helpers — fractions, roots, powers
    figures.js       24 SVG geometry figures, themed
    interactive.js   11 interactive models (draggable geometry, sliders, quizzes)
    lesson.js        renders a topic page from its data object
  data/
    grades.js        the grade 5–11 index
    g8-alg-q1.js     Grade 8 Algebra, Quarter I — 10 topics, 27 lessons
    g8-geo-q1.js     Grade 8 Geometry, Quarter I — 13 topics, 18 lessons
```

## What is written

| Stream | Topics | Lessons | Problems |
|---|---:|---:|---:|
| Grade 8 Algebra, Quarter I | 10 | 27 | 210 |
| Grade 8 Geometry, Quarter I | 13 | 18 | 273 |
| **Total** | **23** | **45** | **483** |

Every topic page contains: a 40-minute lesson clock, learning objectives, an explanation with drawn
figures, worked examples with reasoned steps, one interactive model, a quick check, 21 practice
problems (7 easy / 7 medium / 7 hard) with revealable answers, and homework.

## Adding a topic

Push a new object onto the array in the matching data file. Required fields:

```js
{
  id, stream, grade, quarter, lessons, hours, title, subtitle,
  uz, uzPage, cam, camPage, wb,     // textbook references
  objectives: [],                    // 3–4 statements
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
