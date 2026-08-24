# ⚽ ALI FC — "Train your brain. Score goals!"

An interactive learning app that turns English, reading, writing and mathematics
into a football career. Built for **Ali**, an Uzbek-speaking absolute beginner in
English, and designed so that every lesson feels like football training rather
than homework.

> Ali is the player. Learning is his training. Lessons are training sessions.
> Tests are matches. Correct answers score goals. Completing levels wins trophies.

---

## Running it

**Easiest — no setup at all**

Open **`ali-fc-offline.html`** by double-clicking it. It is a single
self-contained file: no internet, no server, no install. Progress is saved in the
browser.

**Development version**

`index.html` uses ES modules, so it needs a local server (browsers block modules
loaded from `file://`):

```bash
cd app
python3 -m http.server 8000      # then open http://localhost:8000
# or:  npx serve .
```

**Rebuilding the offline file after changing the source**

```bash
cd app
node build.mjs        # regenerates ali-fc-offline.html
```

---

## The football career (difficulty progression)

Worlds unlock with XP, and the whole app changes tone as Ali climbs:

| World | Unlocks at | Content |
|---|---|---|
| 🟢 Training Ground | 0 XP | Letters, numbers, tracing, counting |
| 🔵 Football Academy | 300 XP | Alphabet complete, numbers 0–20, first sums |
| 🟡 Junior League | 900 XP | Words, short sentences, add/subtract |
| 🟠 Pro League | 1800 XP | Reading passages, multiplication, division |
| 🔴 Champions League | 3200 XP | Advanced English + multi-step maths |
| 🏆 World Cup of Knowledge | 5000 XP | **English only** — final mastery |

**The language fade-out is the core mechanic.** Uzbek explanations are shown
everywhere at the start; from the Champions tier onward they disappear
automatically and the app becomes English-only, so the last thing Ali does is
solve English word problems with no translation. A parent can override this in
Settings (`Doim ko'rsat` / `Faqat inglizcha`).

---

## What is in the app

**Screens** — Stadium dashboard, English / Math / Writing training, Football
Games, Trophy room, Football World map, Today's Training, My Progress, Parent
Dashboard, Print Practice Center, Settings.

**43 training sessions** covering:

- *English* — A–Z with keyword + picture + audio, phonics families (`-at`, `-an`,
  `-all`, `-ick`, `-oal`), vocabulary in three tiers (football words **mixed
  with** everyday words, never replacing them), sentences from `The ball is red.`
  up to full paragraphs, and four progressively harder stories with comprehension
  questions.
- *Math* — counting 1–20, more/less, addition, subtraction, column arithmetic
  with digit boxes, multiplication as teams-of-balls arrays, division as players
  sharing balls, and word problems.
- *Math in English* — `plus, minus, equals, add, subtract, times, multiply,
  divide, answer, more, less, greater, smaller, total, each, share`. A sum first
  reads *"3 plus 8 equals what?"*, and only after Ali answers does it complete to
  *"3 plus 8 equals 11."* At the top tier the digits become words:
  *"Three plus eight equals eleven."*
- *Writing* — a real handwriting canvas (mouse, finger or stylus) with dotted
  guides, coverage tracking and a ⚽→🥅 progress meter: strokes and curves as
  dribbling drills, then uppercase, lowercase, numbers, words and sentences.

**5 football mini-games** — Penalty Shootout, Pass the Ball, Goalkeeper,
Word Builder, Football Scoreboard.

**Rewards** — XP, levels, goals ⚽, coins 💎, daily streaks 🔥 and 16 trophies.
Mistakes are never punished: a wrong answer costs nothing and shows
*"Almost! Let's try again!"*

---

## Adaptive learning

Every answer is recorded with a topic tag.

- 3 correct in a row → difficulty up one step (max 5)
- 3 wrong out of the last 4 → difficulty down one step (min 1)
- 2+ mistakes on the same topic → an **easier practice ladder** is injected into
  the current session before the hard fact comes back
- Repeated mistakes surface in the Parent Dashboard as "Needs Practice", and a
  parent can also set the difficulty per subject by hand

---

## 🖨️ Football Practice Center

Generates **A4 worksheets designed for handwriting**, so Ali can practise away
from the screen. Controls: subject, topic, difficulty (easy/medium/hard),
number of questions (10/20/30/50) and theme (football/general), plus one-click
quick packs.

Worksheet types: alphabet training, letter tracing, word practice, football
vocabulary tables, sentence copying, word↔picture matching, stroke drills,
number writing, counting, column addition/subtraction, multiplication, division,
mixed practice and word problems.

Each sheet carries a subtle football header (club crest, name/date line, "Today's
Training") and a `Coach's Score: ☆☆☆☆☆ — Great work, Ali! ⚽` footer, but stays
clean enough to print. An optional **ANSWER KEY** prints as a separate page for
the parent — the child's sheet never shows answers.

Printing tip: choose A4 and enable "Background graphics" in the browser dialog.

---

## Project structure

Content is kept strictly separate from UI, and lessons/questions/worksheets are
generated from reusable components rather than hand-authored one by one.

```
app/
├── index.html              dev entry (needs a local server)
├── ali-fc-offline.html     generated single-file build — just double-click
├── build.mjs               regenerates the offline build
├── css/
│   ├── style.css           app theme + on-screen worksheet preview
│   └── print.css           A4 @page rules, page-break control
└── js/
    ├── app.js              hash router + level-up/world-unlock celebrations
    ├── state.js            persistence, XP/levels/tiers, streaks, adaptive engine
    ├── ui.js               reusable atoms (buttons, bars, toasts, confetti, modal)
    ├── audio.js            WebAudio effects + English speech synthesis
    ├── content/            ← pure data, no DOM
    │   ├── alphabet.js  vocab.js  reading.js
    │   ├── math.js      (generators + word-problem templates)
    │   ├── mathEnglish.js  (terms, number→words, spoken sums)
    │   └── curriculum.js   (worlds, 43 lessons, 16 trophies)
    ├── engine/
    │   ├── question.js  9 reusable question components
    │   ├── trace.js     handwriting canvas
    │   └── lesson.js    descriptor → steps → playable session
    ├── games/           shell.js + the 5 mini-games
    ├── screens/         one module per screen
    └── worksheets/
        ├── generator.js worksheet data + answer key
        └── render.js    A4 rendering
```

Adding a lesson is one entry in `curriculum.js`; adding a worksheet type is one
builder in `worksheets/generator.js` plus a case in `render.js`.

---

## Data and privacy

All progress lives in `localStorage` in the browser on that device. Nothing is
uploaded anywhere. The Parent Dashboard can export progress as JSON and reset
everything.

## Artwork

The football hero, club crest and all characters are original to this project and
built from standard emoji and CSS. No real player's likeness or photograph, and
no real club's name, badge or branding is used.
