# bedrockprep.com — homepage clone

Static rebuild of the homepage of https://www.bedrockprep.com/ (requested by the site owner).

## Preview

```bash
cd bedrockprep
python3 -m http.server 8000
# open http://localhost:8000/
```

## What's here

- `index.html` / `styles.css` — the landing page: header/nav, hero, "about Eric" bio,
  the 8-level curriculum ladder (Iron → Bedrock), a sample of the Bedrock 125 problem-type
  catalog, the Pro Problems pitch, and a few student testimonials.
- `assets/` — real logo (inline SVG), profile photo, rank icons, and one testimonial photo,
  downloaded from the live site.

## Scope / what was intentionally left out

bedrockprep.com is a full SAT-prep application (Next.js + Tailwind), not just a marketing
page — it includes a live question bank with hundreds of interactive problems, Desmos-backed
solution walkthroughs, video lessons (Mux), practice exams, and a paywalled course engine.
Rebuilding that whole product is a much larger project than a page clone, so this pass only
covers the **homepage** as static HTML/CSS:

- The full 125-item problem-type catalog (with names, difficulty, variation counts) is
  summarized with a handful of representative entries rather than reproduced in full — it's
  a large proprietary catalog, best left live on the real site/question bank.
- The "Pro Problems" sample (a full worked geometry problem with KaTeX math and a multi-step
  solution) was left out rather than copied verbatim — it's substantive original content,
  not boilerplate page structure.
- Only 3 of the ~13 testimonials on the live page are included, as representative examples.
- `/course`, `/problems`, `/practice-tests`, `/videos`, `/pro`, `/login`, `/privacy` link back
  to the real site's paths (not yet built as local routes).

## Route map

| Source | Local |
|---|---|
| `https://www.bedrockprep.com/` | `bedrockprep/index.html` |

Let me know if you'd like any of the linked subpages (course, question bank, exams, pro)
built out next, and at what fidelity — a static marketing-style page vs. the real interactive
functionality are very different amounts of work.
