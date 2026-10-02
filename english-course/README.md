# English for Teaching Mathematics — Grades 1–4

A workbook that teaches English from zero to a primary-school mathematics
teacher whose first language is Uzbek. Every explanation is in Uzbek
(Cyrillic); every word is given four ways — picture, English spelling,
pronunciation respelt in Cyrillic, and the Uzbek meaning.

**Book 1 covers topics 1–3** (the alphabet, numbers 0–100, the classroom)
and prints the full 16-topic plan of the course at the front.

## Files

```
content.py   all the words, phrases and exercises — edit this to change the book
build.py     design system + page layout; writes book.html
render.mjs   drives headless Chromium over CDP to produce the PDF
book.html    generated — self-contained, opens in any browser or phone
English-for-Maths-Teachers-Book1.pdf   generated — A4, 17 pages
```

## Rebuilding

```
python3 build.py && node render.mjs book.html English-for-Maths-Teachers-Book1.pdf
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

The pronunciation column is a deliberate approximation in Cyrillic, chosen so a
beginner can speak from day one. IPA is introduced later in the course.
