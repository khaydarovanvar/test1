# Mathematics Annual Plans 2026–2027 — Grades 8, 10 and 11

Plans for grades 8, 10 and 11, all running on the Uzbek school calendar
(quarters of 9 / 7 / 10 / 8 weeks, 34 teaching weeks).

| Grade | Stream | Load | Hours/year | Backbone | Depth layer |
|---:|---|---|---:|---|---|
| 8 | **Special class — Algebra** | 3 h/week | 102 | Uzbekistan national KTP | Cambridge Stage 9 inserts |
| 8 | **Special class — Geometry** | 2 h/week | 68 | Uzbekistan national KTP | Cambridge Stage 9 inserts |
| 8 | **Cambridge class — Mathematics** | 6 h/week | 204 | Cambridge Stage 9 (Learner's Book 9) | Uzbekistan Grade 8 programme |
| 10 | **Special class — Algebra** | 3 h/week | 102 | Uzbekistan national KTP | IGCSE Extended + AS Pure Maths 1 |
| 10 | **Special class — Geometry** | 2 h/week | 68 | Uzbekistan national KTP | IGCSE Extended + AS Pure Maths 1 |
| 11 | **Special class — Algebra and Calculus** | 3 h/week | 102 | Uzbekistan national KTP | AS & A Level Pure Maths 1 and 2 |
| 11 | **Special class — Geometry** | 2 h/week | 68 | Uzbekistan national KTP | IGCSE Extended + A Level Pure Maths 2 |

## Files

| File | Contents |
|---|---|
| `01-special-class-algebra-grade8.md` | Grade 8 algebra — 102 lessons, quarters 27 / 21 / 30 / 24 |
| `02-special-class-geometry-grade8.md` | Grade 8 geometry — 68 lessons, quarters 18 / 14 / 20 / 16 |
| `03-cambridge-class-grade8-mathematics.md` | Grade 8 Cambridge class — 204 lessons, quarters 54 / 42 / 60 / 48 |
| `04-special-class-algebra-grade10.md` | Grade 10 algebra — 102 lessons, quarters 27 / 21 / 30 / 24 |
| `05-special-class-geometry-grade10.md` | Grade 10 geometry — 68 lessons, quarters 18 / 14 / 20 / 16 |
| `06-special-class-algebra-grade11.md` | Grade 11 algebra and calculus — 102 lessons |
| `07-special-class-geometry-grade11.md` | Grade 11 geometry — 68 lessons |
| `Grade8_Annual_Plans_2026-2027.xlsx` | The three Grade 8 plans + the red-day sheet, colour-coded |
| `Grades10-11_Annual_Plans_2026-2027.xlsx` | The four Grade 10–11 plans + the red-day sheet, colour-coded |
| `build-plans-10-11.py` | Generates the four Grade 10–11 plans; asserts the hour totals |
| `build-xlsx-10-11.py` | Builds the Grade 10–11 workbook from those plans |

## Grades 10 and 11

The national plans for these years are already close to Cambridge AS and A Level in content —
Grade 10 covers functions, exponentials, logarithms and trigonometric equations; Grade 11 is a
full first course in differential and integral calculus, then combinatorics, statistics and
probability. So there is no need to add hours: the mapping shows a teacher exactly which
Cambridge sub-unit each national lesson answers to.

What Cambridge has and the national plan does **not** is inserted into the flexible lessons:

| Grade 10 Algebra | 13 inserts | quadratics and the discriminant, composite and inverse functions, radians and circular measure, arithmetic and geometric progressions, the binomial expansion |
| Grade 10 Geometry | 16 inserts | symmetry in three dimensions, the sine and cosine rules, 3-D trigonometry, bearings, coordinate geometry of the line and the circle, vectors and transformations |
| Grade 11 Algebra | 17 inserts | the modulus function, the trapezium rule, integration by parts and by partial fractions, complex numbers and the Argand diagram, differential equations |
| Grade 11 Geometry | 16 inserts | the vector equation of a line in space, upper and lower bounds, units of volume and capacity, arc and sector applied to cones, area and volume scale factors, optimisation of a container |

The generator asserts that every national topic keeps its exact hour count and that each quarter
still totals 27 / 21 / 30 / 24 (algebra) and 18 / 14 / 20 / 16 (geometry), so a plan cannot drift
out of compliance by accident.

## Design decision

The national Grade 8 programme is **harder** than Cambridge Lower Secondary Stage 9. Stage 9 contains
no quadratic equations, no trigonometry, no circle theorems, no vectors, no coordinate geometry and no
work with algebraic fractions. Taught on its own, a 6-hour Cambridge course would leave that class
behind the 5-hour special class.

So the two streams are mixed in opposite directions:

* **Special class** — the national plan is kept lesson-for-lesson (Ministry compliance, state control
  works). Its 31 flexible lessons ("Practical and interdisciplinary problems", "Chapter revision
  problems", and the Quarter IV revision blocks) are filled with the Cambridge Stage 9 topics the
  national programme never touches. Stage 9 ends up fully covered without adding one hour.
* **Cambridge class** — Stage 9 is the backbone (all 15 units, all 6 projects), and the national
  Grade 8 topics are built in as full teaching blocks: quadratic equations (18 h), right-triangle
  trigonometry (10 h), circle theorems (7 h), vectors and the coordinate method (9 h), algebraic
  fractions (11 h), roots and rational exponents (8 h), systems of inequalities and modulus (6 h).

Both streams therefore arrive at the same standard by the end of Grade 8, and both are ready for a
Cambridge Checkpoint Stage 9 paper.

## Cambridge Stage 9 coverage check

| Stage 9 unit | Special class (Alg + Geo) | Cambridge class |
|---|---|---|
| 1 Number and calculation | Alg 28–31, 34–35 | 4–15 |
| 2 Expressions and formulae | Alg 4–8, 20–22 | 19–37 |
| 3 Decimals, percentages and rounding | Alg 55–59, 74 | 41–51 |
| 4 Equations and inequalities | Alg 38–52, 72–75 | 55–70 |
| 5 Angles | Geo 3–4, 16–17, 20–23 | 115–138 |
| 6 Statistical investigations | Alg 79–80 | 190–191 |
| 7 Shapes and measurements | Geo 42–51, 59 | 149–154 |
| 8 Fractions | Alg 35 | 4–5, 26–35 |
| 9 Sequences and functions | Alg 91–93 | 73–77 |
| 10 Graphs | Alg 25–27, 76, 94–96 | 78–88 |
| 11 Ratio and proportion | Alg 97–98 | 89–94 |
| 12 Probability | Alg 83–88, 99–100 | 198–202 |
| 13 Position and transformation | Geo 15, 31, 33, 62–64 | 165, 171–176 |
| 14 Volume, surface area and symmetry | Geo 65–67 | 178–181 |
| 15 Interpreting and discussing results | Alg 79–82 | 192–197 |
| Projects 1–6 | Geo 17, 67 (Projects 2, 5) | 53, 95, 136, 155, 177, 203 |

## Public holidays

See the "Red days & reserve" sheet in the workbook, or the last section of each markdown plan.
Every plan carries reserve lessons (flag `R`) so a lost lesson never costs new content.

## Next step

Resources per lesson, keyed to *Cambridge Lower Secondary Mathematics Learner's Book 9* — pending upload of the book.
