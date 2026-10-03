# English for Teaching Mathematics — Grades 1–4

A workbook that teaches English from zero to a primary-school mathematics
teacher whose first language is Uzbek. Every explanation is in Uzbek
(Cyrillic); every word is given four ways — picture, English spelling,
pronunciation respelt in Cyrillic, and the Uzbek meaning.

The course is complete in three books, 16 topics:

| Book | Topics | What it covers |
|---|---|---|
| 1 | 1–3 | The alphabet, numbers 0–100, the classroom. Prints the full course plan. |
| 2 | 4–8 | Colours and shapes, a/an and plurals, *to be*, commands, questions. |
| 3 | 9–16 | Mathematics itself: place value, the four operations, comparing, fractions, measurement, geometry, word problems and a full lesson script. |

## Files

```
content.py    Book 1 words, phrases and exercises
content2.py   Book 2 words, phrases and exercises
content3.py   Book 3 words, phrases and exercises
build.py      design system + page layout + Book 1 pages; writes book.html
book2.py      Book 2 pages + the SVG shapes;   writes book2.html
book3.py      Book 3 pages + the SVG diagrams; writes book3.html
render.mjs    drives headless Chromium over CDP to produce a PDF
book*.html    generated — self-contained, open in any browser or phone
English-for-Maths-Teachers-Book{1,2,3}.pdf   generated — A4, 17–18 pages each
```

`build.py` holds the shared stylesheet and components (`vcards`, `ptable`,
`exercise`, …); `book2.py` and `book3.py` import them and add only their own
pages and drawings.

Book 3 generates its figures from `book3.py`: `frac_circle`/`frac_bar`,
`clock`, `angle`, `solid`, `number_line` and `colsum` (a worked column sum).
Changing a fraction or a clock time means changing its arguments, not
redrawing anything.

## Rebuilding

```
python3 build.py && node render.mjs book.html  English-for-Maths-Teachers-Book1.pdf
python3 book2.py && node render.mjs book2.html English-for-Maths-Teachers-Book2.pdf
python3 book3.py && node render.mjs book3.html English-for-Maths-Teachers-Book3.pdf
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

Shapes and diagrams in Books 2 and 3 are drawn as inline SVG rather than picked
from emoji: in a mathematics book the picture has to be the actual figure.

Conventions are British throughout (*colour*, *metre*, *quarter*, *has got*,
"three hundred **and** sixty-five"), since Uzbekistan schools follow Cambridge;
the American variants are flagged in boxes rather than hidden.

The pronunciation column is a deliberate approximation in Cyrillic, chosen so a
beginner can speak from day one. IPA is introduced later in the course.
