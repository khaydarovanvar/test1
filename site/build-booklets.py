#!/usr/bin/env python3
"""Merge the per-lesson PDFs into one booklet per stream and quarter.

Run after build-pdf.mjs, which writes pdf/g8-<stream>-q<n>-<id>.pdf.
"""
import re
import sys
from pathlib import Path

try:
    from pypdf import PdfWriter
except ImportError:
    sys.exit("pypdf is not installed:  pip install pypdf")

PDF = Path(__file__).resolve().parent / "pdf"
STREAMS = {"alg": "algebra", "geo": "geometry"}


def sort_key(path):
    """Order lessons by their numeric id, so alg-9 precedes alg-10."""
    m = re.search(r"-(\w+)-(\d+)\.pdf$", path.name)
    return int(m.group(2)) if m else 0


def main():
    made = 0
    for stream, name in STREAMS.items():
        for quarter in (1, 2, 3, 4):
            parts = sorted(PDF.glob(f"g8-{stream}-q{quarter}-*.pdf"), key=sort_key)
            if not parts:
                continue
            writer = PdfWriter()
            for part in parts:
                writer.append(str(part))
            out = PDF / f"BOOKLET-grade8-{name}-quarter-{quarter}.pdf"
            with open(out, "wb") as fh:
                writer.write(fh)
            writer.close()
            print(f"{out.name}: {len(parts)} lessons")
            made += 1
    print(f"booklets written: {made}")


if __name__ == "__main__":
    main()
