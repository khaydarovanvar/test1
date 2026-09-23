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

40 minutes, 40 marks, 21 questions, no calculator. Covers the first three
topics of Quarter I:

| Lessons | Topic | Marks |
|---|---|---|
| 1–3 | Revision of the Grade 7 course | 14 |
| 4–5 | Algebraic expressions | 9 |
| 6–8 | Algebraic fraction. Cancelling fractions | 17 |

Section A is ten one-mark questions, Section B seven at two marks, Section C
four at four marks — easy, medium and hard, matching the three practice bands
in the lesson pages. Every question is the same *type* the class practised,
with different numbers.

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
