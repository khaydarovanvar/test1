# 🦊 Ali Math / Ali Matematika / Али Математика

**Math learning materials for Ali (grade 1)** — a playful game website plus
ready-to-print worksheets, in **three languages: English (default), Uzbek and Russian**.

Ali can't read yet, so everything is built on **pictures, numbers and voice**:
no typing — tapping the right number is enough. Questions are read aloud in the
selected language (via the browser's speech synthesis), which also makes the
English mode a gentle way to learn English number words.

## 📂 What's inside

| Thing | File | Description |
|---|---|---|
| 🎮 Game website | `index.html` | Counting, addition, subtraction, multiplication, division — up to 4 levels each, 10-question sets, stars, confetti, voice praise. Language switch: EN → UZ → RU |
| 🖨️ Worksheet maker | `print.html` | 13 exercise types × 4 difficulty levels, endless new variants, answer-key pages, ink-saving mode |
| 📄 Ready PDFs | `worksheets/` | 22 print-ready A4 packs (English), incl. 4 expert packs |
| ⚙️ PDF script | `tools/make-pdfs.sh` | Regenerates the whole PDF pack (needs Chromium) |

## 🚀 Getting started

No install needed — just open `index.html` in a browser.
No internet needed either: the font ships with the project.

A local server is nicer:

```bash
npx http-server .        # or: python3 -m http.server
```

Works great on phones — big buttons, no reading required.

## 🎮 The game website

- **Counting** — 1–5, 1–10, 1–20
- **Addition / Subtraction** — up to 5, up to 10 (with pictures), up to 20 (numbers only), **up to 100 (expert)**
- **Multiplication** — via counting groups: 2–3, 2–5, 2–9, **6–12 (expert)**
- **Division** — via sharing into baskets: by 2–3, 2–5, 2–9, **by 3–12 (expert)**
- Every question is **read aloud** in the chosen language (en / uz / ru voices)
- Wrong answers just fade — the child retries, no punishment
- Best scores saved in the browser; keyboard keys 1–4 also work
- **For parents** button holds a 4-month teaching plan (in all 3 languages)

## 🖨️ Printable worksheets (`print.html`)

13 types: number tracing (0–9), counting, number line, comparing (< > =),
addition, subtraction, mixed, column arithmetic (up to 3-digit at expert level),
multiplication, division, all-mixed, times-table wall poster,
solve-and-color pixel art.

- Every "New set" click → brand-new problems
- 4 difficulty levels, 1–5 sheets, answer-key page, black-and-white mode
- Fully URL-driven: `print.html?type=mul&level=4&pages=3&lang=en&name=Ali`

## 📄 Ready PDF pack (`worksheets/`, English)

01 number tracing · 02–03 counting · 04 number line · 05–06 addition ·
07–08 subtraction · 09 add/subtract to 20 · 10 comparing · 11 column arithmetic ·
12–13 multiplication · 14–15 division · 16 times-table poster ·
17 solve-and-color · 18 mixed practice ·
**19 expert add/subtract to 100 · 20 expert multiplication · 21 expert division ·
22 expert 3-digit column arithmetic**

Need new variants or another language? `bash tools/make-pdfs.sh`
(edit the `lang=` parameter inside for uz/ru).

## 🗓️ Suggested plan (for parents)

1. **Week 1:** counting 1–10 (site + sheets 01, 02)
2. **Week 2:** counting 1–20, addition up to 5
3. **Weeks 3–4:** addition/subtraction up to 10
4. **Month 2:** up to 20, column arithmetic
5. **Month 3:** multiplication (hang the poster — sheet 16)
6. **Month 4:** division
7. **Later:** the expert levels (up to 100 and big tables)

15–20 minutes a day is enough. Praise after every set! 💛

---

Font: [Baloo 2](https://github.com/EkType/Baloo2) (SIL OFL 1.1 — `assets/fonts/OFL.txt`).
