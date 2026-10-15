# Workbooks

Printable workbooks to be written in, one per grade, stream and quarter, in the same
format as `Grade8_Algebra_Workbook_Quarter1`: every topic runs **Focus** (easy),
**Practice** (medium), **Challenge** (hard) and **Beyond** (very hard, olympiad),
45 questions in all, with ruled space to work in. Answers are at the back, with a
worked solution for every Beyond question.

| File | Contents |
|---|---|
| `g11-alg-q1.mjs` | Grade 11 Algebra and Calculus, Quarter I — 11 topics, lessons 1–27, 495 questions |
| `g11-alg-q1.pdf` | the same, rendered to A4 |
| `g11-alg-q1.html` | the same again, one self-contained file to open in a browser |
| `g11-alg-q2.mjs` | Grade 11 Algebra and Calculus, Quarter II — 6 topics, lessons 28–48, 270 questions |
| `g11-alg-q2.pdf` / `.html` | the same, rendered |
| `trig-exp-log-derivatives.mjs` | Differentiating sin, cos, tan, eˣ and ln x — explanations and 30 questions |
| `trig-exp-log-derivatives.pdf` / `.html` | the same, rendered |
| `build-workbook.mjs` | the renderer |

## Building

```sh
node build-workbook.mjs g11-alg-q1.mjs
```

One run writes both the `.html` and the `.pdf` from the same markup.

## The HTML

One file, no assets and no internet connection — open it, or copy it to a school
machine. It carries a sticky bar with a topic jump menu and a **Hide answers**
button, and the contents page links to each topic.

Printing it from the browser gives exactly the pages of the PDF: the screen
styling all sits inside `@media screen`, so print media sees only the A4 rules.

The builder refuses to print a workbook whose tiers do not hold 10 / 10 / 10 / 15
questions, whose questions lack answers, or whose Beyond questions lack solutions —
and it counts the questions it parsed against the ones that reached the page.

## Tiers

A document sets its own tiers in `meta.tiers`; leaving it out gives the workbook's
four — Focus 10, Practice 10, Challenge 10, Beyond 15. Each tier names how many
questions it holds, how many ruled lines a question gets, which band colour it
uses, and whether its answers must carry a worked solution:

```js
tiers: [
  { key: 'easy',   name: 'Easy',   word: 'easy',   pill: 'EASY',   lines: 1, colour: 'focus',     count: 10 },
  { key: 'medium', name: 'Medium', word: 'medium', pill: 'MEDIUM', lines: 3, colour: 'practice',  count: 10, solutions: true },
  { key: 'hard',   name: 'Hard',   word: 'hard',   pill: 'HARD',   lines: 5, colour: 'challenge', count: 10, solutions: true }
]
```

Setting `meta.contents: false` drops the contents sheet, which a single-topic
document does not need.

## Explanations

A topic may carry a `lesson` array, rendered between the boxes and the first band.
Each block is `{ h, p, table, head, steps }` — a heading, paragraphs, a table with
an optional header row, and a numbered list of `[step, why]` pairs for a worked
example. A table splits across a page with its header row repeated.

## Writing the content

A data module exports `meta` and `topics`. Each topic carries its unit, lesson range,
title, subtitle, textbook references, key words, a *Remember* list, and the four tiers
as `[question, answer]` pairs — `[question, answer, solution]` for Beyond.

Maths goes between `$…$`. Inside it:

| Markup | Gives |
|---|---|
| `^{...}` | superscript |
| `_{...}` | subscript |
| `@f{a}{b}` | a stacked fraction |
| `@r{...}` | a square root with its overline |

Everything else is literal Unicode, so `Δ`, `π`, `→`, `≤`, `−` and `′` are typed directly.
The markers lead with `@` rather than a backslash because a backslash inside a JavaScript
string is an escape sequence — `\f` would arrive as a form feed.
