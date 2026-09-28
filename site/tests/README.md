# Tests

Class tests built from the lesson data, in the same house style as the lesson
pages. Each test produces three files:

| File | What it is |
|---|---|
| `<name>-QP.pdf` | the question paper, with room to work |
| `<name>-MS.pdf` | the mark scheme — answer, working, and the errors to look for |
| `<name>.html` | both, with a switch, for reading on a phone |

The paper and the mark scheme are separate PDFs on purpose, so the paper can be
printed without the answers going with it.

## Grade 8 · Test 1 · Algebra

40 minutes, **100 marks**, 14 questions and a bonus, no calculator. Two pages.
Covers the first three topics of Quarter I:

| Lessons | Topic | Marks |
|---|---|---|
| 1–3 | Revision of the Grade 7 course | 31 |
| 4–5 | Algebraic expressions | 26 |
| 6–8 | Algebraic fraction. Cancelling fractions | 43 |

| Section | Level | Questions | Marks |
|---|---|---|---|
| A | Easy | 6 × 5 | 30 |
| B | Medium | 5 × 8 | 40 |
| C | Hard | 3 × 10 | 30 |
| ★ | Bonus | 1 × 10 | +10, outside the 100 |

Easy, medium and hard match the three practice bands in the lesson pages, and
every question is the same *type* the class practised, with different numbers.
The bonus can make up marks lost elsewhere; the recorded mark is still out of
100.

## Grade 8 · Test 1 · Geometry

40 minutes, **100 marks**, 11 questions, no calculator. Two pages, with drawing
space under every question — geometry is answered with a sketch, so there are
no single answer lines. Covers the first four topics of Quarter I:

| Lessons | Topic | Marks |
|---|---|---|
| 1–2 | Revision of the Grade 7 course | 22 |
| 3–4 | Polygons. Interior and exterior angles | 31 |
| 5 | Parallelogram and its properties | 16 |
| 6 | Tests for a parallelogram | 31 |

| Section | Level | Questions | Marks |
|---|---|---|---|
| A | Easy | 5 × 6 | 30 |
| B | Medium | 4 × 10 | 40 |
| C | Hard | 2 × 15 | 30 |

Fewer, larger questions than the algebra paper, because each one needs room
for a labelled diagram.

## Rebuilding

```
python3 build-test.py test-g8-01-data.py Grade8-Algebra-Test1
```

`fonts-inline.css` carries Spectral, Work Sans and IBM Plex Mono as base64, so
the PDFs render with the site's typefaces and need no network at print time.

## Writing another test

Copy `test-g8-01-data.py` and edit it. Inside question text, `{...}` is a maths
span, `a^b` raises, and `[num]/[den]` stacks into a real fraction. Each question
records the topic it tests, so the mark scheme can print the weighting table
without anyone counting by hand.

**Check every answer with a CAS before writing it down.** The answers in
`test-g8-01-data.py` were all verified this way.

## Grade 11 · Practice · Quarter 1

One sheet per teaching topic of the quarter, 28 problems each across four
bands — easy, medium, hard, very hard. **No problem on any sheet appears in
that lesson's own practice bank**, so a sheet follows its lesson without
repeating it, and nothing on a sheet needs a technique from a later lesson.

| Lessons | Topic | Data file | Stem |
|---|---|---|---|
| 7–9 | The rules of differentiation | `ws-differentiation-data.py` | `Differentiation-practice` |
| 10–12 | The derivative of a composite function | `ws-chainrule-data.py` | `Chain-rule-practice` |
| 15–16 | The modulus function | `ws-modulus-data.py` | `Modulus-practice` |
| 17–18 | The equations of the tangent and the normal | `ws-tangent-normal-data.py` | `Tangent-normal-practice` |
| 19–22 | Investigating a function with the derivative | `ws-investigating-data.py` | `Investigating-practice` |
| 23–25 | Extremum problems | `ws-extremum-data.py` | `Extremum-practice` |

Lessons 13–14 and 26–27 are control works, so they get a test rather than a
practice sheet.

Each sheet produces two PDFs:

| File | Pages | What it is |
|---|---|---|
| `<stem>.pdf` | 2 | questions only, for handing out |
| `<stem>-teacher.pdf` | 3–4 | the same questions with answers and full working |

```
python3 build-worksheet.py ws-chainrule-data.py Chain-rule-practice
```

Questions, answers and working all live in the data file, one entry per
problem. Every answer and every intermediate step was checked with a CAS.

Each band carries a `note` that prints on the teacher copy only, saying what
that band is actually testing — usually the step the class will skip.

### Writing another sheet

Copy any `ws-*-data.py` and edit it. The header fields (`TITLE`, `GRADE`,
`LESSONS`, `REFS`, `NOTE`) print in the masthead; `BANDS` is the question bank.
Inside question text, `{...}` is a maths span, `a^b` raises, and `[num]/[den]`
stacks into a real fraction. Anything outside `{...}` is authored HTML, and
plain HTML such as `<sup>` or `<sub>` also survives inside a maths span — use
it for an exponent the `^` notation cannot reach, such as `x<sup>n − 1</sup>`.
