# -*- coding: utf-8 -*-
"""Builds every booklet, renders each to PDF, and zips the lot.

    python3 package.py            # all domains present, merged file, zip

The zip holds one PDF per domain plus the merged file, so a teacher can hand
out a single domain or the whole set.
"""
import os
import re
import subprocess
import sys
import zipfile

sys.path.insert(0, '.')

import build

SUB = 'Ellipse International School'
ZIP = 'SAT_Math_teacher_copies.zip'
MERGED = 'SAT_Math_ALL_DOMAINS_teacher'

# One-topic teacher copies that live outside the four domains. Each is a
# (module, stem, title) triple; one missing from disk is simply skipped.
EXTRAS = (
    ('worksheet_coefficients', 'Fraction_Algebra_2_Solving_Coefficients_teacher',
     'Fraction Algebra 2 — Solving Coefficients'),
)


def render(html, pdf, footer):
    subprocess.run(['node', 'render.mjs', html, pdf, footer], check=True)


def pages(pdf):
    with open(pdf, 'rb') as fh:
        return len(re.findall(rb'/Type\s*/Page[^s]', fh.read()))


def main():
    made = []
    for key in build.ORDER:
        if not build.load(key):
            continue
        stem = build.FILES[key]
        title = build.BOOKS[key][0].replace('&', '&amp;')
        build.build(stem + '.html', book=key)
        render(stem + '.html', stem + '.pdf',
               '%s · Teacher copy · %s' % (title, SUB))
        made.append((key, stem + '.pdf'))
    build.build_all(MERGED + '.html')
    render(MERGED + '.html', MERGED + '.pdf',
           'SAT Math · Teacher copies · all domains · ' + SUB)

    extras = []
    for (mod, stem, title) in EXTRAS:
        if not os.path.exists(mod + '.py'):
            continue
        __import__(mod).main(stem + '.html')
        render(stem + '.html', stem + '.pdf',
               '%s · Teacher copy · %s' % (title, SUB))
        extras.append((title, stem + '.pdf'))

    lines = ['SAT Math teacher copies — with a figure for every explanation', '']
    lines.append('%-46s %4d pages' % (MERGED + '.pdf  (all domains)', pages(MERGED + '.pdf')))
    for key, pdf in made:
        lines.append('%-46s %4d pages   %s' % (pdf, pages(pdf), build.BOOKS[key][0]))
    for title, pdf in extras:
        lines.append('%-46s %4d pages   %s' % (pdf, pages(pdf), title))
    missing = [build.BOOKS[k][0] for k in build.ORDER if not build.load(k)]
    if missing:
        lines += ['', 'Not included yet: ' + ', '.join(missing) + '.']
    lines += ['', 'Source and rebuild instructions: the sat-d4 folder of the repository.']
    readme = '\n'.join(lines) + '\n'
    open('CONTENTS.txt', 'w').write(readme)

    with zipfile.ZipFile(ZIP, 'w', zipfile.ZIP_DEFLATED) as z:
        z.write(MERGED + '.pdf')
        for _, pdf in made:
            z.write(pdf)
        for _, pdf in extras:
            z.write(pdf)
        z.write('CONTENTS.txt')
    print(readme)
    print('zip: %s (%.1f MB)' % (ZIP, os.path.getsize(ZIP) / 1048576.0))


if __name__ == '__main__':
    main()
