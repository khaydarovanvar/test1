# SAT Math teacher copies, rebuilt with a picture for every explanation

Two booklets, same treatment. Each original explained its rules in words and
carried only a handful of pictures; each rebuild keeps the same lessons, the
same worked examples and the same 22 questions per lesson, and adds a labelled
figure to every explanation, every worked example and every test-style
question.

| booklet | lessons | pages | figures |
| --- | --- | --- | --- |
| `SAT_D4_GEOMETRY_TRIGONOMETRY_teacher.pdf` (4.1–4.6) | 6 | 70 | 235 |
| `SAT_D2_ADVANCED_MATH_teacher.pdf` (2.1–2.8) | 8 | 87 | 303 |

For D4 that is 55 panels across the 36 concept sections, one for each of the
108 worked examples and one for each of the 72 Part 2 questions; for D2, 63
panels across 48 sections, 144 example figures and 96 question figures.

## Files

| file | what it is |
| --- | --- |
| `svgbase.py` | SVG primitives: lines, arcs, angle marks, tick marks, dimension arrows, a coordinate grid |
| `shapes.py` | ~65 parameterised diagram generators (triangles, circles, solids, grids …) |
| `plot.py` | function graphs: a sampler that breaks the curve at asymptotes, plus parabolas, polynomials, exponentials, rationals, systems and transformation panels |
| `algebra.py` | the non-graph algebra pictures: area models, factor-pair tables, rule panels, step chains, check tables, number lines |
| `content41.py` … `content46.py` | the six Geometry & Trigonometry lessons |
| `content21.py` … `content28.py` | the eight Advanced Math lessons |
| `build.py` | assembles either booklet's HTML (`d4` or `d2`) |
| `booklet.css` | print styling for A4 |
| `render.mjs` | renders the HTML to PDF with the pre-installed Chromium |
| `verify.py`, `verify2.py` | recompute every numeric answer and compare it with what is printed |
| `gallery.py` | renders every generator onto one contact sheet, for checking figures after an edit |

## Rebuilding

```sh
python3 verify.py && python3 verify2.py              # check every printed answer

python3 build.py SAT_D4_GEOMETRY_TRIGONOMETRY_teacher.html d4
node render.mjs SAT_D4_GEOMETRY_TRIGONOMETRY_teacher.html \
     SAT_D4_GEOMETRY_TRIGONOMETRY_teacher.pdf \
     "SAT Math 4 — Geometry &amp; Trigonometry · Teacher copy · Ellipse International School"

python3 build.py SAT_D2_ADVANCED_MATH_teacher.html d2
node render.mjs SAT_D2_ADVANCED_MATH_teacher.html \
     SAT_D2_ADVANCED_MATH_teacher.pdf \
     "SAT Math 2 — Advanced Math · Teacher copy · Ellipse International School"
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
* A drawing sits beside the solution text; a wide text panel (a step chain, a
  rule table, a factor-pair list) is laid out full width underneath it instead,
  so it never has to shrink below reading size. `build.py` decides from the
  figure's aspect ratio.

## Checks

`verify.py` (D4) solves or evaluates all 60 Desmos expressions and recomputes
the Part 2 answers from scratch: 105 values machine-checked, all agreeing; the
two it cannot check mechanically were checked by hand.

`verify2.py` (D2) evaluates each Desmos expression, substitutes every root an
answer claims back into its equation, and recomputes the numeric Part 2
answers: 107 values machine-checked, all agreeing. The 23 it leaves alone are
graph reads ("click the vertex"), symbolic answers (a factorisation, an
equation) and counts of intersections, which were checked by hand against the
source booklet.
