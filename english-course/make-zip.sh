#!/bin/sh
# Bundles the course into English-Course.zip: the PDFs grouped by course, the
# self-contained HTML for a phone, the source, and a guide in Uzbek.
# The zip is not committed — it only repackages files already in the repo.
set -e
cd "$(dirname "$0")"
STAGE=$(mktemp -d)
D="$STAGE/English-Course"
mkdir -p "$D/PDF-Books/A-Maths-English" "$D/PDF-Books/B-English-from-Scratch" \
         "$D/HTML-for-phone" "$D/Source"
cp English-for-Maths-Teachers-*.pdf "$D/PDF-Books/A-Maths-English/"
cp English-from-Scratch-*.pdf       "$D/PDF-Books/B-English-from-Scratch/"
cp ./*.html "$D/HTML-for-phone/"
cp ./*.py render.mjs README.md "$D/Source/"
cp BOSHLASH.txt "$D/"
rm -f English-Course.zip
(cd "$STAGE" && zip -r -q "$OLDPWD/English-Course.zip" English-Course)
rm -rf "$STAGE"
ls -la English-Course.zip
