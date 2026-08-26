# Source for `9_grade_english_only.pdf`

English-only version of the Grade 9 entrance exam paper (Mathematics +
English). The Russian-language and Ona tili va adabiyot sections of the
original paper were removed; the Mathematics questions, which were
originally printed in Russian and Uzbek, were translated into English.

## Rebuilding

```bash
# 1. fetch the fonts used by the layout (Poppins, Carlito, Cambo)
mkdir -p fonts
for f in "Poppins:wght@400;500;600;700" "Carlito:ital,wght@0,400;0,700;1,400" "Cambo"; do
  curl -sS -A "Mozilla/5.0" "https://fonts.googleapis.com/css2?family=$f&display=swap"
done | grep -o 'https://fonts.gstatic.com/[^)]*' | sort -u |
  while read -r u; do curl -sS -o "fonts/$(basename "$u")" "$u"; done

# 2. build the HTML and print it to PDF
python3 gen.py
chromium --headless --no-pdf-header-footer \
         --print-to-pdf=../9_grade_english_only.pdf exam.html
```

`gen.py` holds all question text, so edits to questions or answer options
go there.
