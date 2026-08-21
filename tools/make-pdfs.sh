#!/usr/bin/env bash
# =========================================================
#  make-pdfs.sh — builds the ready-to-print PDF pack
#  Usage:  bash tools/make-pdfs.sh
#  Requires: Chromium (or Google Chrome).
# =========================================================
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT="$ROOT/worksheets"
mkdir -p "$OUT"

# Chromium'ni topamiz
CHROME="${CHROME_BIN:-}"
if [ -z "$CHROME" ]; then
  for c in /opt/pw-browsers/chromium chromium chromium-browser google-chrome google-chrome-stable; do
    if command -v "$c" >/dev/null 2>&1 || [ -x "$c" ]; then CHROME="$c"; break; fi
  done
fi
if [ -z "$CHROME" ]; then
  echo "Chromium not found. Set the CHROME_BIN variable." >&2
  exit 1
fi

PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT

pdf () {           # pdf <fayl-nomi> <query>
  local name="$1"; shift
  local query="$1"; shift
  echo "  → $name"
  "$CHROME" \
    --headless=new --disable-gpu --no-sandbox --hide-scrollbars \
    --user-data-dir="$PROFILE" \
    --run-all-compositor-stages-before-draw \
    --virtual-time-budget=9000 \
    --no-pdf-header-footer \
    --print-to-pdf="$OUT/$name" \
    "file://$ROOT/print.html?$query" >/dev/null 2>&1
}

echo "Generating the PDF pack -> $OUT"

pdf "01-number-tracing.pdf"        "lang=en&type=trace&level=1&pages=1&key=0"
pdf "02-counting-1-10.pdf"         "lang=en&type=count&level=2&pages=2"
pdf "03-counting-1-20.pdf"         "lang=en&type=count&level=3&pages=2"
pdf "04-number-line.pdf"           "lang=en&type=numline&level=2&pages=2"
pdf "05-addition-up-to-5.pdf"      "lang=en&type=add&level=1&pages=2"
pdf "06-addition-up-to-10.pdf"     "lang=en&type=add&level=2&pages=3"
pdf "07-subtraction-up-to-5.pdf"   "lang=en&type=sub&level=1&pages=2"
pdf "08-subtraction-up-to-10.pdf"  "lang=en&type=sub&level=2&pages=3"
pdf "09-add-subtract-up-to-20.pdf" "lang=en&type=addsub&level=3&pages=3"
pdf "10-comparing.pdf"             "lang=en&type=compare&level=2&pages=2"
pdf "11-column-arithmetic.pdf"     "lang=en&type=vertical&level=2&pages=2"
pdf "12-multiplication-2-5.pdf"    "lang=en&type=mul&level=2&pages=3"
pdf "13-multiplication-2-9.pdf"    "lang=en&type=mul&level=3&pages=3"
pdf "14-division-2-5.pdf"          "lang=en&type=div&level=2&pages=3"
pdf "15-division-2-9.pdf"          "lang=en&type=div&level=3&pages=3"
pdf "16-times-table-poster.pdf"    "lang=en&type=table&level=3&pages=1&key=0"
pdf "17-solve-and-color.pdf"       "lang=en&type=color&level=1&pages=5&key=0"
pdf "18-mixed-practice.pdf"        "lang=en&type=all&level=2&pages=3"
pdf "19-expert-add-subtract-100.pdf" "lang=en&type=addsub&level=4&pages=3"
pdf "20-expert-multiplication.pdf"   "lang=en&type=mul&level=4&pages=3"
pdf "21-expert-division.pdf"         "lang=en&type=div&level=4&pages=3"
pdf "22-expert-column-3-digit.pdf"   "lang=en&type=vertical&level=4&pages=2"
pdf "23-english-alphabet-tracing.pdf" "lang=en&type=letters&pages=1&key=0"
pdf "24-english-picture-dictionary.pdf" "lang=en&type=dict&pages=5&key=0"

echo "Done!"
ls -la "$OUT"
