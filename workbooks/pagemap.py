#!/usr/bin/env python3
"""Read the white one-point markers back out of a rendered PDF.

build-workbook.py prints `@@tag@@` in white 1pt type at each place the contents
page needs to point at. This finds the page each one landed on and writes
{tag: page}, which the second build pass reads back in.

    python3 pagemap.py out/book.pdf book.pages.json --offset 1
"""

import json
import re
import subprocess
import sys


def read(pdf, offset=0):
    txt = subprocess.run(['pdftotext', '-layout', pdf, '-'],
                         capture_output=True, text=True, check=True).stdout
    found = {}
    for i, page in enumerate(txt.split('\f'), start=1 + offset):
        # letter-spacing makes pdftotext space the glyphs out, and an uppercased
        # heading uppercases the marker with it, so neither survives a plain match
        flat = re.sub(r'\s+', '', page)
        for tag in re.findall(r'@@([A-Za-z0-9_.-]+?)@@', flat):
            found.setdefault(tag.lower(), i)
    return found


def main():
    import argparse
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('pdf')
    ap.add_argument('out')
    ap.add_argument('--offset', type=int, default=0,
                    help='pages bound in front of this one, e.g. 1 for the cover')
    opt = ap.parse_args()
    found = read(opt.pdf, opt.offset)
    if not found:
        sys.exit(f'no page markers found in {opt.pdf}')
    with open(opt.out, 'w', encoding='utf-8') as fh:
        json.dump(found, fh, indent=1, sort_keys=True)
    print(f'{len(found)} markers mapped from {opt.pdf} (offset {opt.offset})')


if __name__ == '__main__':
    main()
