#!/usr/bin/env python3
"""Printable mark sheets, one PDF per grade, from the EduPage parent-letter PDFs.

Each class gets its own page: the students numbered and named down the left, then
a block of blank columns for lesson marks and a second block for homework marks.
The column headers are left empty so the dates can be written in by hand, and the
sheet is meant to be filled in on paper and copied into EduPage afterwards.

    python3 make-mark-sheets.py "Ellipse International School edupage3.pdf" --grade 8
    python3 make-mark-sheets.py *.pdf --out-dir mark-sheets        # every grade

The student list comes from extract-edupage-logins.py, so the names and classes
are the same ones EduPage prints. No passwords are read or written.
"""

import argparse
import os
import sys

from reportlab.lib.colors import Color, black
from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from importlib import import_module

logins = import_module('extract-edupage-logins')

REGULAR, BOLD = 'Sheet', 'Sheet-Bold'
FONT_DIR = '/usr/share/fonts/truetype/dejavu'

PAGE = landscape(A4)
MARGIN_X, MARGIN_TOP, MARGIN_BOTTOM = 10 * mm, 8 * mm, 6 * mm
TITLE_H, HEAD_TOP_H, HEAD_DATE_H, FOOTER_H = 14 * mm, 5.5 * mm, 6.5 * mm, 8 * mm
COL_NO, COL_NAME = 9 * mm, 58 * mm
MAX_ROW_H = 9 * mm
ROWS_PER_PAGE = 25

RULE = Color(0.45, 0.45, 0.45)
HAIRLINE = Color(0.72, 0.72, 0.72)
BAND = Color(0.93, 0.93, 0.93)
SHADE = Color(0.957, 0.957, 0.957)
MUTED = Color(0.35, 0.35, 0.35)


def register_fonts():
    """DejaVu, so Uzbek and Russian labels print as written."""
    regular = os.path.join(FONT_DIR, 'DejaVuSans.ttf')
    bold = os.path.join(FONT_DIR, 'DejaVuSans-Bold.ttf')
    if os.path.exists(regular) and os.path.exists(bold):
        pdfmetrics.registerFont(TTFont(REGULAR, regular))
        pdfmetrics.registerFont(TTFont(BOLD, bold))
        return REGULAR, BOLD
    return 'Helvetica', 'Helvetica-Bold'


def fitted_size(text, font, width, start=9.5, floor=5.5):
    """The largest size at which text still fits the name column."""
    size = start
    while size > floor and pdfmetrics.stringWidth(text, font, size) > width:
        size -= 0.25
    return size


def chunk(students, per_page):
    for i in range(0, len(students), per_page):
        yield i, students[i:i + per_page]


def draw_page(c, cls, students, first_number, page_no, pages, opt, fonts):
    regular, bold = fonts
    usable = PAGE[0] - 2 * MARGIN_X
    narrow = (usable - COL_NO - COL_NAME) / (opt.marks + opt.homework)
    left, right = MARGIN_X, MARGIN_X + usable
    top = PAGE[1] - MARGIN_TOP

    # ---- title block ----------------------------------------------------
    c.setFillColor(black)
    c.setFont(bold, 12)
    c.drawString(left, top - 4.2 * mm, opt.school)
    c.setFont(regular, 8.5)
    c.setFillColor(MUTED)
    c.drawString(left, top - 8.4 * mm, 'Mark sheet · Baho varaqasi')

    c.setFillColor(black)
    c.setFont(bold, 15)
    c.drawRightString(right, top - 4.6 * mm, f'Grade {cls}')
    c.setFont(regular, 8.5)
    c.setFillColor(MUTED)
    tail = f'{len(students)} students'
    if pages > 1:
        tail += f'  ·  page {page_no} of {pages}'
    c.drawRightString(right, top - 8.6 * mm, tail)

    # the line the teacher fills in
    c.setFillColor(black)
    c.setFont(regular, 8.5)
    y = top - 12.6 * mm
    fields = [('Subject', 38 * mm), ('Teacher', 44 * mm), ('Quarter', 16 * mm)]
    x = left
    for label, rule_w in fields:
        c.drawString(x, y, f'{label}:')
        x += pdfmetrics.stringWidth(f'{label}:', regular, 8.5) + 2 * mm
        c.setStrokeColor(HAIRLINE)
        c.setLineWidth(0.5)
        c.line(x, y - 0.6 * mm, x + rule_w, y - 0.6 * mm)
        x += rule_w + 6 * mm
    c.setFillColor(MUTED)
    c.drawRightString(right, y, opt.year)

    # ---- geometry of the grid -------------------------------------------
    table_top = top - TITLE_H
    body_top = table_top - HEAD_TOP_H - HEAD_DATE_H
    room = body_top - (MARGIN_BOTTOM + FOOTER_H)
    row_h = min(MAX_ROW_H, room / max(len(students), 1))
    body_bottom = body_top - row_h * len(students)

    x_no = left
    x_name = x_no + COL_NO
    x_marks = x_name + COL_NAME
    x_hw = x_marks + narrow * opt.marks

    # ---- header bands ---------------------------------------------------
    c.setFillColor(BAND)
    c.rect(left, table_top - HEAD_TOP_H, usable, HEAD_TOP_H, stroke=0, fill=1)
    c.setFillColor(black)
    c.setFont(bold, 8)
    c.drawCentredString(x_no + COL_NO / 2, table_top - 3.9 * mm, '№')
    c.drawString(x_name + 2 * mm, table_top - 3.9 * mm, 'Full name  ·  F.I.Sh.')
    c.drawCentredString(x_marks + narrow * opt.marks / 2, table_top - 3.9 * mm,
                        'Marks  ·  Baholar')
    c.drawCentredString(x_hw + narrow * opt.homework / 2, table_top - 3.9 * mm,
                        'Homework  ·  Uy ishi')

    # the blank strip where the dates are written in
    c.setFont(regular, 6.5)
    c.setFillColor(MUTED)
    c.drawRightString(x_marks - 2 * mm, table_top - HEAD_TOP_H - 4.3 * mm, 'Date →')

    # ---- row shading ----------------------------------------------------
    for i in range(len(students)):
        if i % 2:
            c.setFillColor(SHADE)
            c.rect(left, body_top - row_h * (i + 1), usable, row_h, stroke=0, fill=1)

    # ---- rules ----------------------------------------------------------
    c.setStrokeColor(HAIRLINE)
    c.setLineWidth(0.4)
    for i in range(1, opt.marks + opt.homework):          # the narrow columns
        x = x_marks + narrow * i
        if i != opt.marks:
            c.line(x, body_bottom, x, table_top - HEAD_TOP_H)
    for i in range(1, len(students)):                      # between students
        y = body_top - row_h * i
        c.line(left, y, right, y)

    c.setStrokeColor(RULE)
    c.setLineWidth(0.9)
    c.rect(left, body_bottom, usable, table_top - body_bottom, stroke=1, fill=0)
    for x in (x_name, x_marks, x_hw):                      # block separators
        c.line(x, body_bottom, x, table_top)
    c.line(left, table_top - HEAD_TOP_H, right, table_top - HEAD_TOP_H)
    c.line(left, body_top, right, body_top)

    # ---- the students ---------------------------------------------------
    for i, student in enumerate(students):
        baseline = body_top - row_h * (i + 1) + (row_h - 7) / 2 + 0.6 * mm
        c.setFillColor(MUTED)
        c.setFont(regular, 7.5)
        c.drawCentredString(x_no + COL_NO / 2, baseline, str(first_number + i))
        c.setFillColor(black)
        name = student['Name']
        hint = student.get('Hint', '')
        room = COL_NAME - 4 * mm
        if hint:
            room -= pdfmetrics.stringWidth(f' {hint}', regular, 6) + 1.5 * mm
        size = fitted_size(name, regular, room)
        c.setFont(regular, size)
        c.drawString(x_name + 2 * mm, baseline, name)
        if hint:
            # Two students of this class share a name; EduPage tells them apart
            # by username, so the sheet has to as well.
            c.setFillColor(MUTED)
            c.setFont(regular, 6)
            c.drawString(x_name + 2 * mm + pdfmetrics.stringWidth(name, regular, size)
                         + 1.5 * mm, baseline, hint)

    # ---- footer ---------------------------------------------------------
    y = MARGIN_BOTTOM + 2.5 * mm
    c.setFillColor(black)
    c.setFont(regular, 8.5)
    x = left
    for label, rule_w in (("Teacher's signature", 46 * mm), ('Date', 30 * mm)):
        c.drawString(x, y, f'{label}:')
        x += pdfmetrics.stringWidth(f'{label}:', regular, 8.5) + 2 * mm
        c.setStrokeColor(HAIRLINE)
        c.setLineWidth(0.5)
        c.line(x, y - 0.6 * mm, x + rule_w, y - 0.6 * mm)
        x += rule_w + 8 * mm
    c.setFillColor(MUTED)
    c.setFont(regular, 7)
    c.drawRightString(right, y, 'Filled in on paper, then copied into EduPage')


def build(path, grade, students, opt, fonts):
    """One PDF for one grade: a page per class, in class order."""
    by_class = {}
    for s in students:
        by_class.setdefault(s['Class'], []).append(s)

    for cls, roll in by_class.items():
        counts = {}
        for s in roll:
            counts[s['Name']] = counts.get(s['Name'], 0) + 1
        for s in roll:
            s['Hint'] = s['Username'] if counts[s['Name']] > 1 else ''
            if s['Hint']:
                print(f'note: {cls} has two students called {s["Name"]}; '
                      f'the sheet shows the username {s["Username"]} to tell them apart',
                      file=sys.stderr)

    c = canvas.Canvas(path, pagesize=PAGE)
    c.setTitle(f'Grade {grade} mark sheets — {opt.school}')
    c.setAuthor(opt.school)
    c.setSubject('Mark sheet')
    pages = 0
    for cls in sorted(by_class):
        roll = by_class[cls]
        sheets = list(chunk(roll, ROWS_PER_PAGE))
        for page_no, (offset, group) in enumerate(sheets, start=1):
            draw_page(c, cls, group, offset + 1, page_no, len(sheets), opt, fonts)
            c.showPage()
            pages += 1
    c.save()
    return sorted(by_class), pages


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('pdf', nargs='+', help='EduPage parent-letter PDF(s)')
    ap.add_argument('--grade', type=int, action='append', dest='grades',
                    help='only this grade; repeat for several (default: all)')
    ap.add_argument('--out-dir', default='mark-sheets', help='where to write the PDFs')
    ap.add_argument('--marks', type=int, default=16, help='blank mark columns (default 16)')
    ap.add_argument('--homework', type=int, default=6,
                    help='blank homework columns (default 6)')
    ap.add_argument('--school', default='Ellipse International School')
    ap.add_argument('--year', default='2026–2027')
    opt = ap.parse_args()

    if opt.marks < 1 or opt.homework < 1:
        sys.exit('--marks and --homework must each be at least 1')

    students = []
    for path in opt.pdf:
        students.extend(logins.parse(logins.pdf_text(path)))
    if not students:
        sys.exit('no student letters found')

    grades = sorted({s['Grade'] for s in students})
    if opt.grades:
        missing = sorted(set(opt.grades) - set(grades))
        if missing:
            sys.exit(f'no grade {", ".join(map(str, missing))} students in the given PDFs')
        grades = [g for g in grades if g in set(opt.grades)]

    fonts = register_fonts()
    os.makedirs(opt.out_dir, exist_ok=True)
    for grade in grades:
        roll = [s for s in students if s['Grade'] == grade]
        path = os.path.join(opt.out_dir, f'Grade{grade:02d}_Mark_Sheets.pdf')
        classes, pages = build(path, grade, roll, opt, fonts)
        print(f'{path}  —  {len(roll)} students, {pages} page(s): {", ".join(classes)}')


if __name__ == '__main__':
    main()
