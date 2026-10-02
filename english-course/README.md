# English for Teaching Mathematics — Grades 1–4

A workbook that teaches English from zero to a primary-school mathematics
teacher whose first language is Uzbek. Every explanation is in Uzbek
(Cyrillic); every word is given four ways — picture, English spelling,
pronunciation respelt in Cyrillic, and the Uzbek meaning.

**Book 1** covers topics 1–3 (the alphabet, numbers 0–100, the classroom) and
prints the full 16-topic plan of the course at the front. **Book 2** covers
topics 4–8 (colours and shapes, a/an and plurals, *to be*, classroom commands,
questions) — the grammar needed to build sentences rather than recite them.

## Files

```
content.py    Book 1 words, phrases and exercises
content2.py   Book 2 words, phrases and exercises
build.py      design system + page layout + Book 1 pages; writes book.html
book2.py      Book 2 pages and the SVG shape drawings; writes book2.html
render.mjs    drives headless Chromium over CDP to produce a PDF
book*.html    generated — self-contained, open in any browser or phone
English-for-Maths-Teachers-Book{1,2}.pdf   generated — A4, 17 pages each
```

`build.py` holds the shared stylesheet and components (`vcards`, `ptable`,
`exercise`, …); `book2.py` imports them, so a third book only needs its own
content module and page functions.

## Rebuilding

```
python3 build.py && node render.mjs book.html  English-for-Maths-Teachers-Book1.pdf
python3 book2.py && node render.mjs book2.html English-for-Maths-Teachers-Book2.pdf
```

No dependencies: Node 22's built-in WebSocket speaks CDP, and Chromium comes
from `/opt/pw-browsers/chromium`. Colour pictures are Noto Color Emoji, so the
system needs `fonts-noto-color-emoji`; Uzbek Cyrillic (ў қ ғ ҳ) needs DejaVu.

## Notation used in the book

| Mark | Meaning |
|---|---|
| **қалин ҳарф** | the stressed syllable |
| `:` | a long vowel — ту: (two) |
| dotted underline | a sound Uzbek does not have — th, w, æ, final -ng |

Shapes in Book 2 are drawn as inline SVG rather than picked from emoji: in a
mathematics book the picture has to be the actual figure.

The pronunciation column is a deliberate approximation in Cyrillic, chosen so a
beginner can speak from day one. IPA is introduced later in the course.
