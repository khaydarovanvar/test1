#!/usr/bin/env bash
# Build every book in the Grade 8 Algebra series from the one question bank.
#
#   ./build-all.sh            builds all seven books into ./out
#
# Each book is the same bank seen through a different filter: a quarter of the
# year, the whole year, the methods pages alone, or the Beyond sections alone.
# Every book is bound the way a real one is: a full-bleed front cover, the body
# (title page, imprint, contents, preface, topics, answers, colophon), and a
# back cover. The contents page numbers are read back out of the first render,
# so the second pass prints them.
set -euo pipefail
cd "$(dirname "$0")"
OUT=${OUT:-out}
TMP=${TMP:-tmp}
mkdir -p "$OUT" "$TMP"

Q1="alg-01 alg-02 alg-03 alg-04 alg-05 alg-06 alg-07 alg-08 alg-09 alg-10"
Q2="alg-11 alg-12 alg-13 alg-14 alg-15 alg-16 alg-17 alg-18 alg-19 alg-20 alg-21 alg-22 alg-23 alg-24 alg-25 alg-26"
Q3="alg-27 alg-28 alg-29 alg-30 alg-31 alg-32 alg-33 alg-34"
Q4="alg-35 alg-36 alg-37 alg-38 alg-39 alg-40 alg-41 alg-42 alg-43 alg-44"
ALL="$Q1 $Q2 $Q3 $Q4"

pages () { pdfinfo "$1" | awk '/^Pages/{print $2}'; }

# book <stem> <title> <eyebrow> <volume> <accent> <sub> <lead> <blurb> -- <flags…>
book () {
  local stem=$1 title=$2 eyebrow=$3 volume=$4 accent=$5 sub=$6 lead=$7 blurb=$8
  shift 9                                   # the 9th is the literal --
  local body="$TMP/$stem-body" front="$TMP/$stem-front"

  # The body is what the printed page numbers count, so it is laid out first and
  # numbered from 1 — the number a reader looking something up will see stamped
  # on the page.
  python3 build-workbook.py --out "$stem" --title "$title" --eyebrow "$eyebrow" \
          --subtitle "$sub" --part body "$@" >/dev/null
  node render-workbook.mjs "$stem" "$body" >/dev/null
  python3 pagemap.py "$body.pdf" "$stem.pages.json" >/dev/null

  # The front matter is numbered the way a book's is — not at all — and carries
  # the contents, which is why it is set second, once the body page numbers exist.
  python3 build-workbook.py --out "$stem-front" --title "$title" \
          --eyebrow "$eyebrow" --subtitle "$sub" --part front \
          --pagemap "$stem.pages.json" "$@" >/dev/null
  node render-workbook.mjs "$stem-front" "$front" --no-footer >/dev/null

  # covers, then bind
  local total=$(( $(pages "$body.pdf") + $(pages "$front.pdf") + 2 ))
  python3 build-cover.py --out "$stem" --title "$title" --sub "$sub" \
          --volume "$volume" --accent "$accent" --lead "$lead" --blurb "$blurb" \
          --pages "$total" "$@" >/dev/null
  node render-cover.mjs "$stem-cover" "$TMP/$stem-cover" >/dev/null
  node render-cover.mjs "$stem-back"  "$TMP/$stem-back"  >/dev/null
  pdfunite "$TMP/$stem-cover.pdf" "$front.pdf" "$body.pdf" "$TMP/$stem-back.pdf" \
           "$OUT/$stem.pdf"

  printf '  %-40s %3s pages  %s\n' "$stem.pdf" "$(pages "$OUT/$stem.pdf")" "$volume"
}

echo 'Verifying every answer first…'
python3 verify-questions.py | tail -1

echo 'Quarter books'
book Grade8_Algebra_Workbook_Quarter1 \
  'Algebraic Fractions and Rational Expressions' \
  'Grade 8 · Algebra · Quarter I' 'Quarter I' '#27A3C1' \
  'A workbook to be written in. Ten topics on algebraic fractions, from cancelling a single fraction to the graph of y = k/x — each climbing from the plain skill to olympiad problems.' \
  'The quarter where algebra stops being arithmetic with letters.' \
  'A fraction with an unknown in the denominator asks two questions at once: what does it equal, and when is it allowed to exist. These ten topics work through both, in the order the course meets them — cancelling, common denominators, the four operations, the compound fractions that look impossible until they collapse, and the reciprocal graph.' \
  -- --topics $Q1

book Grade8_Algebra_Workbook_Quarter2 \
  'Roots, Rational Exponents and Inequalities' \
  'Grade 8 · Algebra · Quarter II' 'Quarter II' '#E0A33C' \
  'A workbook to be written in. Sixteen topics: the arithmetic root of degree n, powers with a rational exponent, and the whole theory of inequalities through to modulus and bounds.' \
  'Where the equals sign is replaced by a question of size.' \
  'Half of this quarter teaches a new kind of number — a root, then a power with a fraction on top. The other half teaches a new kind of statement. An inequality can be added, multiplied and raised to a power, but each of those moves has a condition attached, and this is the quarter where a pupil learns to check it before moving.' \
  -- --topics $Q2

book Grade8_Algebra_Workbook_Quarter3 \
  'Quadratic Equations' \
  'Grade 8 · Algebra · Quarter III' 'Quarter III' '#A98BE0' \
  'A workbook to be written in. Eight topics on the quadratic: incomplete forms, the discriminant, Vieta, biquadratics, word problems and the parabola.' \
  'One formula, and a term of learning when not to use it.' \
  'The quadratic formula is three lines long and solves everything in this quarter. That is exactly the difficulty: a pupil who reaches for it every time never notices the equation that factorises by sight, the one Vieta answers without solving, or the word problem whose second root has to be thrown away. These eight topics are arranged to make that noticing happen.' \
  -- --topics $Q3

book Grade8_Algebra_Workbook_Quarter4 \
  'Data, Counting, Chance and the Annual Review' \
  'Grade 8 · Algebra · Quarter IV' 'Quarter IV' '#E07A6B' \
  'A workbook to be written in. Ten topics: averages and the representation of data, counting by listing and by principle, probability, and the revision of the whole year.' \
  'Counting is the part of mathematics that punishes carelessness fastest.' \
  'A mean can be recovered from a frequency table; a count can be got by listing, until the list is too long and a principle has to take its place. The quarter ends with the annual review — sequences, graphs, ratio and probability — and a last control work over the whole year, so that nothing taught in September has quietly been forgotten by May.' \
  -- --topics $Q4

echo 'Whole year'
book Grade8_Algebra_Workbook_Full \
  'Algebra 8' \
  'Grade 8 · Algebra · Quarters I–IV' 'The complete year' '#E0B457' \
  'The complete workbook: all seven units and forty-four topics of the Grade 8 algebra course, from algebraic fractions to the annual review, with the working space on the page and the answers at the back.' \
  'The whole year of Grade 8 algebra, in one book to be written in.' \
  'Forty-four topics, one for each double lesson of the course, each climbing through four sections: Focus for the skill itself, Practice for the skill with a setting-up step in front of it, Challenge for the long chains of reasoning and the awkward cases, and Beyond for fifteen olympiad problems — in front of which the named methods they rest on are printed.' \
  -- --topics $ALL

book Grade8_Algebra_Methods \
  'Algebraic Methods' \
  'Grade 8 · Algebra · Methods' 'Methods' '#4FB392' \
  'The olympiad toolkit of the course: the named ideas behind the hard problems, each stated in a line or two and shown on the smallest example that makes it clear.' \
  'The ideas, without the questions.' \
  'Two hundred and twenty named methods, in the order the course meets them — symmetry, substitution, the discriminant as a test rather than a formula, counting the opposite case, bounding before solving. The same pages are printed inside the full workbook, each in front of the section it serves; here they stand together, to be looked up or revised before a competition.' \
  -- --topics $ALL --notes-only

book Grade8_Algebra_Olympiad \
  'Olympiad Problems' \
  'Grade 8 · Algebra · Olympiad' 'Olympiad' '#E05A4F' \
  'Every Beyond problem of the year, taken out of the full workbook and set together: fifteen hard problems for each of the forty-four topics, with the methods briefing in front of each set and worked solutions at the back.' \
  'Six hundred and sixty problems that do not come out in one line.' \
  'These are the Beyond sections of the course, collected. They follow the syllabus topic by topic, so a pupil preparing for a competition can work the problems that belong to what the class is doing this week — and a teacher can set them without hunting. Several need an idea rather than a method; the ideas are named in front of each set.' \
  -- --topics $ALL --sections Beyond

echo "Done. Everything is in $(pwd)/$OUT"
