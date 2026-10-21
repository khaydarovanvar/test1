# Exams

| File | What it is |
|---|---|
| `11AG-MATH-FINAL.pdf` | **the paper to submit** — cover page plus 15 questions, 100 marks, 4 pages |
| `11AG-MATH-FINAL-MARKING-SCHEME.pdf` | teacher copy with every answer — not for distribution |
| `src/11AG-MATH-FINAL.content.mjs` | the questions, answers and marks — the single source |
| `src/build-exam.mjs` | the builder |
| `superseded/` | the earlier Word version, kept only for reference |

The name follows *Sinf + Guruh – Fan – Imtihon turi*: `11AG-MATH-FINAL`.

## Building

```sh
cd src
node build-exam.mjs 11AG-MATH-FINAL.content.mjs             # the paper
node build-exam.mjs 11AG-MATH-FINAL.content.mjs --answers   # the marking scheme
```

Maths is written as LaTeX between `$…$` and typeset by **KaTeX**, which is what
gives properly stacked fractions, roots and limits instead of inline `(a)/(b)`.
KaTeX needs a browser, so the body is rendered through headless Chromium and the
result is merged onto the cover page with `pypdf`.

## Format

Calibri 12 (Carlito, which is metrically identical, where Calibri is absent),
1.15 line spacing, 2.54 cm margins, left aligned, numbered questions, bold
section headings, dotted ruled space under every question, 40 minutes.

| Section | Questions | Marks each | Marks | Share of questions |
|---|---:|---:|---:|---:|
| A — Easy | 6 | 4 | 24 | 40 % |
| B — Medium | 6 | 6 | 36 | 40 % |
| C — Hard | 3 | 13, 13, 14 | 40 | 20 % |
| **Total** | **15** | | **100** | |

## The cover page

`Exam Cover Page (2).docx` from the `mathematics` repository, used as it is.
Only Subject, Grade, Name of the Teacher and Date were filled in; a byte
comparison against the original confirms nothing else in the file differs.

Topics: the limit of a function, limits at infinity, the rules of
differentiation, the derivative of a composite function, and the derivatives of
sin, cos, tan, eˣ and ln x.
