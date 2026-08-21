#!/usr/bin/env bash
# =========================================================
#  make-pdfs.sh — chop etishga tayyor PDF to'plamini yasaydi
#  Foydalanish:  bash tools/make-pdfs.sh
#  Talab: Chromium (yoki Google Chrome) o'rnatilgan bo'lishi.
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
  echo "Chromium topilmadi. CHROME_BIN o'zgaruvchisini o'rnating." >&2
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

echo "PDF to'plami yasalmoqda → $OUT"

pdf "01-raqam-yozish.pdf"            "type=trace&level=1&pages=1&key=0"
pdf "02-sanash-1-10.pdf"             "type=count&level=2&pages=2"
pdf "03-sanash-1-20.pdf"             "type=count&level=3&pages=2"
pdf "04-sonlar-chizigi.pdf"          "type=numline&level=2&pages=2"
pdf "05-qoshish-5-gacha.pdf"         "type=add&level=1&pages=2"
pdf "06-qoshish-10-gacha.pdf"        "type=add&level=2&pages=3"
pdf "07-ayirish-5-gacha.pdf"         "type=sub&level=1&pages=2"
pdf "08-ayirish-10-gacha.pdf"        "type=sub&level=2&pages=3"
pdf "09-qoshish-ayirish-20-gacha.pdf" "type=addsub&level=3&pages=3"
pdf "10-taqqoslash.pdf"              "type=compare&level=2&pages=2"
pdf "11-ustunli-hisob.pdf"           "type=vertical&level=2&pages=2"
pdf "12-kopaytirish-2-5.pdf"         "type=mul&level=2&pages=3"
pdf "13-kopaytirish-2-9.pdf"         "type=mul&level=3&pages=3"
pdf "14-bolish-2-5.pdf"              "type=div&level=2&pages=3"
pdf "15-bolish-2-9.pdf"              "type=div&level=3&pages=3"
pdf "16-kopaytirish-jadvali.pdf"     "type=table&level=3&pages=1&key=0"
pdf "17-hisobla-va-rangla.pdf"       "type=color&level=1&pages=5&key=0"
pdf "18-aralash-mashqlar.pdf"        "type=all&level=2&pages=3"

echo "Tayyor!"
ls -la "$OUT"
