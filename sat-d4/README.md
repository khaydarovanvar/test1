# SAT Math 4 — Geometry & Trigonometry (teacher copy, with diagrams)

The original teacher booklet explained each rule in words and carried only a
handful of pictures. This rebuild keeps the same six lessons, the same worked
examples and the same 22 questions per lesson, and adds a labelled diagram to

* every explanation — all 36 concept sections, 55 panels in all,
* all 108 worked examples, each drawn with that example's own numbers, and
* 72 of the 72 test-style questions in Part 2.

That is 235 diagrams across the 63 pages.

## Files

| file | what it is |
| --- | --- |
| `svgbase.py` | SVG primitives: lines, arcs, angle marks, tick marks, dimension arrows, a coordinate grid |
| `shapes.py` | ~65 parameterised diagram generators (triangles, circles, solids, grids …) |
| `content41.py` … `content46.py` | the six lessons: text, worked examples, both question tables, and which figure goes where |
| `build.py` | assembles the booklet HTML |
| `booklet.css` | print styling for A4 |
| `render.mjs` | renders the HTML to PDF with the pre-installed Chromium |
| `verify.py` | recomputes every answer in the booklet and compares it with what is printed |
| `gallery.py` | renders every generator onto one contact sheet, for checking figures after an edit |

## Rebuilding

```sh
python3 verify.py                                    # checks every printed answer
python3 build.py SAT_D4_GEOMETRY_TRIGONOMETRY_teacher.html
node render.mjs SAT_D4_GEOMETRY_TRIGONOMETRY_teacher.html \
     SAT_D4_GEOMETRY_TRIGONOMETRY_teacher.pdf \
     "SAT Math 4 — Geometry &amp; Trigonometry · Teacher copy · Ellipse International School"
```

`render.mjs` expects Playwright on `NODE_PATH` or at
`/opt/node22/lib/node_modules/playwright`, and Chromium at
`/opt/pw-browsers/chromium`; override the first with the `PW` environment
variable.

## Conventions used in the figures

* **blue** — the shape under discussion; **green** — a second shape, or the
  quantity you are given; **red** — the answer, or the thing the question asks
  for; **amber** — angles you must notice (equal angles, the sun's angle).
* A dashed red line is always a perpendicular height; tick marks always mean
  equal lengths; a small square is always a right angle.
* Explanatory sentences live in the HTML caption beside each figure, never
  inside the SVG, so they stay selectable and can never clip.

## Checks

`verify.py` solves or evaluates all 60 Desmos expressions and recomputes the
Part 2 answers from scratch; 105 values are machine-checked and agree. The two
it cannot check mechanically (a midpoint written as a coordinate pair, and one
"no, 9 is not 25") were checked by hand.
