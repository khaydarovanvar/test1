# English-only exam papers

English-only rebuilds of the bilingual (Russian / Uzbek) Ellipse International
School exam booklets.

| Paper | PDF | Content |
|---|---|---|
| Grade 7 | `7_grade_english_only.pdf` | `build_grade7.py` |
| Grade 8 | `8_grade_english_only.pdf` | `build_grade8.py` |

What changed relative to each source booklet:

- **Mathematics (Q1–20)** — translated into English; the Russian and Uzbek
  wordings were removed. Numbers, answer options and their A–E order are
  unchanged.
- **English (Q21–40)** — kept verbatim, including the reading passage.
- **Russian language & literature (Q41–50)** — removed.
- **Ona tili va adabiyot (Q41–50)** — removed.
- **Cover page** — rewritten in English; the marking scheme now lists only
  Mathematics (2.5 points) and English (1.5 points), and the question count
  reads 40 instead of 50. The 80-minute limit was carried over unchanged.

## Layout

`examlib.py` holds everything shared between papers: the print CSS, the
question-box helpers, the cover page and the page assembly. Each
`build_grade<N>.py` holds only that paper's questions, answer options and
reading passage, then calls `examlib.build()`.

## Rebuilding

```sh
python3 build_grade7.py        # writes exam_grade7_en.html
chromium --headless --no-pdf-header-footer \
         --print-to-pdf=7_grade_english_only.pdf exam_grade7_en.html
```
