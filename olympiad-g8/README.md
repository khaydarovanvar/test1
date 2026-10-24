# Grade 8 olympiad mathematics — AMC 8, Kangaroo, AoPS

A static site (no build step for the reader, no runtime dependencies) carrying
the Grade 8 olympiad course: nineteen topics, of which three are written out
in full.

`TOPIC-PLAN.md` is the breakdown in readable form — read that first.

## Running it

```
python3 -m http.server -d olympiad-g8 8000
```

Then open <http://localhost:8000/>. Two pages:

- `index.html` — the topic hub: all nineteen topics, written ones linked.
- `lesson.html?t=9` — one topic, rendered from its data file.

Russian is the default; `?lang=en` switches, and the choice sticks.

`standalone.html` is the whole track in one self-contained file — every
stylesheet, script, lesson and KaTeX font inlined, with hash routing (`#/` for
the hub, `#/t9` for a topic). It opens straight from the filesystem with no
server, which is what to send someone who just wants to read it. Only the web
fonts stay remote, so the display face falls back to a system serif offline.
Rebuild it after any change:

```
python3 olympiad-g8/build-standalone.py
```

## Structure

```
olympiad-g8/
  index.html              the topic hub
  lesson.html             one topic, rendered from data
  standalone.html         generated: the whole track in one file
  build-standalone.py     builds standalone.html
  TOPIC-PLAN.md           the nineteen-topic breakdown, in prose
  assets/
    css/main.css          design tokens, typography, components
    css/lesson.css        lesson layout, problem cards, print
    js/lesson.js          renders a lesson; owns the language switch
    js/i18n.js            the language layer for the hub
    js/app.js             header, mobile nav, reveal-on-scroll
    vendor/katex/         KaTeX, served locally
    data/topics.js        generated: the breakdown and its resource cards
    data/strings.js       interface strings shared by the two pages
    data/lessons/index.js generated: which topics have a lesson
    data/lessons/lNN.js   generated: one written topic
  content/
    common.py             block helpers and the output check
    topics.py             the breakdown — source of topics.js
    g8_01.py              topic 1 — fractions, decimals, percents, ratios
    g8_02.py              topic 2 — divisibility, factors, multiples
    g8_09.py              topic 9 — angles, triangles, polygons
    build.py              writes every data file
```

## Editing

Never edit `assets/data/*.js` by hand — they are generated. Edit the matching
file under `content/` and rebuild:

```
python3 olympiad-g8/content/build.py
```

The build prints the size, section count and problem count of each lesson, and
refuses to write a lesson with a block type the renderer does not know, with
mismatched goal counts between the two languages, or with an empty question or
solution.

To add a topic, write `content/g8_NN.py` on the pattern of the three that
exist and add `NN` to `WRITTEN` in `content/build.py`. The hub picks it up on
the next build; until then the card shows as "soon".

## Writing a lesson

A lesson is one Python dictionary. `content/common.py` has a helper per block
type:

| Helper | Renders as |
|--------|------------|
| `p` | a paragraph |
| `dfn`, `thm`, `lemma`, `idea` | a titled callout |
| `proof`, `note`, `warn` | a labelled callout |
| `eq` | a displayed formula |
| `ul`, `ol` | a list |
| `table` | a table |
| `fig` | an inline SVG with a caption |
| `ex` | a worked example: question, numbered steps, answer |
| `prob` | a practice problem: level, label, question, hint, solution |

Every piece of text is a `(ru, en)` pair. Markup is `**bold**`, `*italic*`,
and TeX between `$…$` or `$$…$$`; a blank line is a paragraph break. A figure's
SVG is language-free — only its caption is translated — and carries a `viewBox`
with no width or height so the CSS can scale it on a phone.

The problem levels 1–4 drive the Easy / Medium / Hard / Olympiad filter on the
page, so keep them honest: level 1 is a warm-up, level 2 is a typical AMC 8
question, level 3 is AMC 8 problems 15–25 or a Kangaroo 5-pointer, and level 4
is AoPS territory.
