# SAT Math teacher copies, rebuilt with a picture for every explanation

All four domains, same treatment. Each original explained its rules in words
and carried only a handful of pictures; each rebuild keeps the same lessons,
the same worked examples, the same Desmos tables and the same 22 questions per
lesson — word for word — and adds a labelled figure to every explanation,
every worked example and every test-style question.

| booklet | lessons | pages | figures |
| --- | --- | --- | --- |
| `SAT_D1_ALGEBRA_teacher.pdf` (1.1–1.6) | 6 | 61 | 220 |
| `SAT_D2_ADVANCED_MATH_teacher.pdf` (2.1–2.8) | 8 | 87 | 303 |
| `SAT_D3_PROBLEM_SOLVING_DATA_teacher.pdf` (3.1–3.8) | 8 | 96 | 288 |
| `SAT_D4_GEOMETRY_TRIGONOMETRY_teacher.pdf` (4.1–4.6) | 6 | 70 | 235 |
| `SAT_Math_ALL_DOMAINS_teacher.pdf` (all four, with a cover and contents) | 28 | 315 | 1046 |

Per domain that is one panel for each concept section, one figure for each of
the 18 worked examples per lesson and one for each of the 12 Part 2 questions.

## Files

| file | what it is |
| --- | --- |
| `svgbase.py` | SVG primitives: lines, arcs, angle marks, tick marks, dimension arrows, a coordinate grid, and the validated `SERIES` palette for data charts |
| `shapes.py` | ~65 parameterised geometry generators (triangles, circles, solids, grids …) |
| `plot.py` | function graphs: a sampler that breaks the curve at asymptotes, plus parabolas, polynomials, exponentials, rationals, systems and transformation panels |
| `algebra.py` | the non-graph algebra pictures: area models, factor-pair tables, rule panels, step chains, check tables, number lines |
| `data.py` | the statistics pictures: dot plots, histograms, bar charts, frequency and two-way tables, scatterplots, residual plots, Venn diagrams, probability trees, confidence intervals, ratio and percentage bars |
| `content11.py` … `content16.py` | the six Algebra lessons |
| `content21.py` … `content28.py` | the eight Advanced Math lessons |
| `content31.py` … `content38.py` | the eight Problem-Solving & Data Analysis lessons |
| `content41.py` … `content46.py` | the six Geometry & Trigonometry lessons |
| `build.py` | assembles one domain's HTML (`d1`…`d4`) or the merged file (`all`) |
| `package.py` | builds every domain present, renders each to PDF, writes the merged file and zips the lot |
| `booklet.css` | print styling for A4 |
| `render.mjs` | renders the HTML to PDF with the pre-installed Chromium |
| `verify.py`, `verify2.py`, `verify13.py` | recompute every numeric answer and compare it with what is printed |
| `gallery.py`, `gallery2.py` | render every generator onto one contact sheet, for checking figures after an edit |

## Rebuilding

```sh
python3 package.py                                   # everything: PDFs, merged file, zip
```

or one booklet at a time:

```sh
python3 verify.py && python3 verify2.py && python3 verify13.py   # check every printed answer

python3 build.py SAT_D3_PROBLEM_SOLVING_DATA_teacher.html d3
node render.mjs SAT_D3_PROBLEM_SOLVING_DATA_teacher.html \
     SAT_D3_PROBLEM_SOLVING_DATA_teacher.pdf \
     "SAT Math 3 — Problem-Solving &amp; Data Analysis · Teacher copy · Ellipse International School"
```

`render.mjs` expects Playwright on `NODE_PATH` or at
`/opt/node22/lib/node_modules/playwright`, and Chromium at
`/opt/pw-browsers/chromium`; override the first with the `PW` environment
variable.

## Conventions used in the figures

* **blue** — the shape or quantity under discussion; **green** — a second
  one, or the value you are given; **red** — the answer, or the thing the
  question asks for; **amber** — what you must notice (equal angles, the gap
  between two bases).
* Genuine data series in the statistics charts use the validated three-colour
  `SERIES` palette from `svgbase.py`, and every series is also direct-labelled,
  so no chart depends on colour alone.
* A dashed red line is always a perpendicular height; tick marks always mean
  equal lengths; a small square is always a right angle.
* Explanatory sentences live in the HTML caption beside each figure, never
  inside the SVG, so they stay selectable and can never clip.
* A drawing sits beside the solution text; a wide text panel (a step chain, a
  rule table, a two-way table) is laid out full width underneath it instead, so
  it never has to shrink below reading size. `build.py` decides from the
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

`verify13.py` (D1 and D3) does the same for Algebra and Problem-Solving: 207
values machine-checked, all agreeing. Its Part 2 truth table recomputes each
answer from the words of the question rather than from the booklet's own
working, so the check is independent. The 101 it leaves alone are prose
answers ("the mean is greater than the median"), symbolic ones (`x < −6`,
`y = −2x + 11`) and Desmos regression rows, which were checked by hand.

One arithmetic slip in the source was corrected rather than copied: 3.4 D8
lists the dot-plot values 2, 3, 3, 4, 4, 4, 4, 5, 5, 6, 6, 7, 9, which sum to
62, so the mean is 62/13 ≈ 4.77 and not the 4.62 (= 60/13) the original
printed. Everything else matches the source word for word.

## Adding or editing a domain

Each domain is a set of `contentNM.py` modules discovered by `BOOKS` in
`build.py`. A module that does not exist is skipped, so the merged booklet and
the zip grow as domains are written — nothing else needs changing. Each
module holds the lesson's text, its worked examples with the figure each one
gets, the Desmos table and the twelve test-style questions, in the shape the
existing ones show. An optional `desmos_sub` key overrides the Part 1 subtitle
where a lesson's source booklet words it differently.
