#!/usr/bin/env bash
# Build every Grade 8 algebra book from the one question bank.
#
#   ./build-all.sh            builds all nine PDFs into ./out
#
# Each book is the same bank seen through a different filter: a quarter of the
# year, the whole year, the methods pages alone, or the Beyond sections alone.
set -euo pipefail
cd "$(dirname "$0")"
OUT=${OUT:-out}
mkdir -p "$OUT"

Q1="alg-01 alg-02 alg-03 alg-04 alg-05 alg-06 alg-07 alg-08 alg-09 alg-10"
Q2="alg-11 alg-12 alg-13 alg-14 alg-15 alg-16 alg-17 alg-18 alg-19 alg-20 alg-21 alg-22 alg-23 alg-24 alg-25 alg-26"
Q3="alg-27 alg-28 alg-29 alg-30 alg-31 alg-32 alg-33 alg-34"
Q4="alg-35 alg-36 alg-37 alg-38 alg-39 alg-40 alg-41 alg-42 alg-43 alg-44"
ALL="$Q1 $Q2 $Q3 $Q4"

build () {               # build <stem> <title> <eyebrow> <extra flags...>
  local stem=$1 title=$2 eyebrow=$3; shift 3
  python3 build-workbook.py --out "$stem" --title "$title" --eyebrow "$eyebrow" "$@"
  node render-workbook.mjs "$stem" "$OUT/$stem"
  printf '  %-44s %s pages\n' "$stem.pdf" \
    "$(pdfinfo "$OUT/$stem.pdf" | awk '/^Pages/{print $2}')"
}

echo 'Verifying every answer first…'
python3 verify-questions.py | tail -1

echo 'Quarter books'
build Grade8_Algebra_Workbook_Quarter1 'Algebraic fractions and rational expressions' \
      'Grade 8 · Algebra · Quarter I'   --topics $Q1
build Grade8_Algebra_Workbook_Quarter2 'Roots, rational exponents and inequalities' \
      'Grade 8 · Algebra · Quarter II'  --topics $Q2
build Grade8_Algebra_Workbook_Quarter3 'Quadratic equations' \
      'Grade 8 · Algebra · Quarter III' --topics $Q3
build Grade8_Algebra_Workbook_Quarter4 'Data, counting, chance and the annual review' \
      'Grade 8 · Algebra · Quarter IV'  --topics $Q4

echo 'Whole year'
build Grade8_Algebra_Workbook_Full 'Algebra 8 — the complete workbook' \
      'Grade 8 · Algebra · Quarters I–IV' --topics $ALL
build Grade8_Algebra_Methods 'Algebraic methods — the olympiad toolkit' \
      'Grade 8 · Algebra · Methods' --topics $ALL --notes-only
build Grade8_Algebra_Olympiad 'Olympiad problems — the Beyond sections' \
      'Grade 8 · Algebra · Olympiad' --topics $ALL --sections Beyond

echo "Done. Everything is in $(pwd)/$OUT"
