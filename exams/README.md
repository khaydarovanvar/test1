# Grade 8 exam — English-only edition

`8_grade_english_only.pdf` is an English-only rebuild of the original bilingual
(Russian / Uzbek) Grade 8 exam booklet.

What changed relative to the source booklet:

- **Mathematics (Q1–20)** — translated into English; the Russian and Uzbek
  wordings were removed. Numbers, answer options and their A–E order are
  unchanged.
- **English (Q21–40)** — kept verbatim, including the reading passage.
- **Russian language & literature (Q41–50)** — removed.
- **Ona tili va adabiyot (Q41–50)** — removed.
- **Cover page** — rewritten in English; the marking scheme now lists only
  Mathematics (2.5 points) and English (1.5 points), and the question count
  reads 40 instead of 50. The 80-minute limit was carried over unchanged.

Rebuilding:

```sh
python3 build.py            # writes exam_en.html
chromium --headless --no-pdf-header-footer \
         --print-to-pdf=exam_en.pdf exam_en.html
```
