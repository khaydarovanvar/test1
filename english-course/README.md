# English course materials

Two English courses for Uzbek speakers, built from one engine. Every
explanation is in Uzbek (Cyrillic); every word is given four ways — a picture,
the English spelling, the pronunciation respelt in Cyrillic, and the Uzbek
meaning. A learner who knows no English at all can start on page one.

## Course A — English for Teaching Mathematics (complete)

For a primary-school mathematics teacher who will teach Grades 1–4 in English.
16 topics, three books.

| Book | Topics | Covers |
|---|---|---|
| 1 | 1–3 | The alphabet, numbers 0–100, the classroom. Prints the course plan. |
| 2 | 4–8 | Colours and shapes, a/an and plurals, *to be*, commands, questions. |
| 3 | 9–16 | Place value, the four operations, comparing, fractions, measurement, geometry, word problems, a full lesson script. |

`English-for-Maths-Teachers-Complete.pdf` is all three in one 55-page volume
with continuous page numbers and a contents page carrying real ones.

## Course B — English from Scratch (in progress)

General everyday English, no mathematics. 32 topics, four books, A0 → A2.
**Books 1–2 (topics 1–16) are written**; Books 3–4 are planned and listed in
the roadmap printed at the front of Book 1.
`English-from-Scratch-Books1-2.pdf` is both in one 53-page volume.

| Book | Topics | Covers |
|---|---|---|
| 1 | 1–8 | Alphabet, greetings, numbers, personal information, family, colours and descriptions, things around you, days/months/time. |
| 2 | 9–16 | Daily routine (Present Simple), food (countable/uncountable), the home, clothes and shopping, directions, jobs, health, weather (Present Continuous). |
| 3 | 17–24 | Present Continuous, past and future tenses, modals, comparatives, quantity. |
| 4 | 25–32 | Travel, phone and internet, opinions, invitations, describing people, linking sentences, problems, 30 conversations. |

## Files

```
build.py       shared design system + components, and Course A Book 1
book2.py       Course A Book 2 + the SVG shapes
book3.py       Course A Book 3 + the SVG diagrams
bookall.py     Course A as one volume + numbered contents
gbook1.py      Course B Book 1
gbook2.py      Course B Book 2
genall.py      Course B as one volume
volume.py      shared: assembling books into a volume with a numbered contents
content.py  content2.py  content3.py     Course A words, phrases, exercises
gcontent1.py  gcontent2.py               Course B words, phrases, exercises
render.mjs     drives headless Chromium over CDP to produce a PDF
*.html         generated — self-contained, open in any browser or phone
*.pdf          generated — A4
```

`build.py` holds the stylesheet and the shared components (`vcards`, `ptable`,
`exercise`, the card grids, `.rule`, `.gtab`); every book imports them and adds
only its own pages. `gcontent1.py` imports the alphabet, number tables, colour
and plural data from the mathematics course rather than retyping them, so the
two courses cannot drift apart.

Each book names its own running footer with
`<meta name="running-footer" content="…">`, which `render.mjs` reads.

## Rebuilding

```
python3 build.py  && node render.mjs book.html      English-for-Maths-Teachers-Book1.pdf
python3 book2.py  && node render.mjs book2.html     English-for-Maths-Teachers-Book2.pdf
python3 book3.py  && node render.mjs book3.html     English-for-Maths-Teachers-Book3.pdf
python3 gbook1.py && node render.mjs genbook1.html  English-from-Scratch-Book1.pdf
python3 gbook2.py && node render.mjs genbook2.html  English-from-Scratch-Book2.pdf
python3 bookall.py                 # Course A volume — renders itself, three passes
python3 genall.py                  # Course B volume — same
```

No dependencies: Node 22's built-in WebSocket speaks CDP, and Chromium comes
from `/opt/pw-browsers/chromium`. Colour pictures need `fonts-noto-color-emoji`;
Uzbek Cyrillic (ў қ ғ ҳ) needs DejaVu.

`volume.py` numbers a contents page without anyone counting: it renders the
volume once with an invisible anchor in every heading, reads the anchors back
with `pdftotext` to learn each page number, renders again with the numbers
filled in, then renders a third time with the anchors removed and checks every
section is still on the page the contents claims. If the anchors are not unique,
or the third pass moves anything, it says so and keeps the anchored file rather
than shipping wrong numbers. `bookall.py` and `genall.py` both drive it.

Anchors are namespaced (`QZ…`) because bare tags like `A1` collide with real
text on the page — the CEFR level printed on a cover, for one.

## Notation used in the books

| Mark | Meaning |
|---|---|
| **қалин ҳарф** | the stressed syllable |
| `:` | a long vowel — ту: (two) |
| dotted underline | a sound Uzbek does not have — th, w, æ, final -ng |

The pronunciation column is a deliberate approximation in Cyrillic, chosen so a
beginner can speak from day one; IPA is introduced later in the course. The `r`
sound is described once rather than marked, since it occurs in nearly every word.

Shapes and diagrams are drawn as inline SVG rather than picked from emoji: in a
mathematics book the picture has to be the actual figure. Conventions are
British throughout (*colour*, *metre*, *quarter*, *has got*, "three hundred
**and** sixty-five"), since Uzbekistan schools follow Cambridge; the American
variants are flagged in boxes rather than hidden.
