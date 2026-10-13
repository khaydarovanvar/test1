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
| `build-workbook.mjs` | the renderer |

## Building

```sh
node build-workbook.mjs g11-alg-q1.mjs
```

The builder refuses to print a workbook whose tiers do not hold 10 / 10 / 10 / 15
questions, whose questions lack answers, or whose Beyond questions lack solutions —
and it counts the questions it parsed against the ones that reached the page.

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
