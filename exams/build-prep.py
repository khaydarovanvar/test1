#!/usr/bin/env python3
"""Build the revision sheets pupils work through before the final exams.

Thirty short questions a subject, set two to a column so the whole sheet is
a page or two, with the answers at the end to check against. No exam cover:
this is a worksheet, not a paper.

    python3 build-prep.py
"""

import importlib
import importlib.util
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import omml                                                   # noqa: E402

_s = importlib.util.spec_from_file_location('be', os.path.join(HERE, 'build-exam.py'))
be = importlib.util.module_from_spec(_s)
_s.loader.exec_module(be)

TEACHER = 'Anvarbek Khaydarov'


EMPTY = '<w:p><w:pPr><w:spacing w:after="0"/></w:pPr></w:p>'


def grid(cells, cols=2, width=8960):
    """A borderless table used purely as columns.

    A continuous section break with a different column count is rendered as a
    page break by LibreOffice, which left the heading alone on page one. A
    table lays the questions out two to a row and both renderers agree on it.
    """
    w = width // cols
    none = ''.join(f'<w:{e} w:val="none" w:sz="0" w:space="0"/>' for e in
                   ('top', 'left', 'bottom', 'right', 'insideH', 'insideV'))
    rows = []
    for i in range(0, len(cells), cols):
        row = (cells[i:i + cols] + [EMPTY] * cols)[:cols]
        rows.append('<w:tr>' + ''.join(
            f'<w:tc><w:tcPr><w:tcW w:w="{w}" w:type="dxa"/></w:tcPr>{c}</w:tc>'
            for c in row) + '</w:tr>')
    return (f'<w:tbl><w:tblPr><w:tblW w:w="{width}" w:type="dxa"/>'
            f'<w:tblBorders>{none}</w:tblBorders>'
            f'<w:tblCellMar><w:top w:w="0" w:type="dxa"/>'
            f'<w:left w:w="0" w:type="dxa"/><w:bottom w:w="0" w:type="dxa"/>'
            f'<w:right w:w="227" w:type="dxa"/></w:tblCellMar>'
            f'<w:tblLook w:val="0000"/></w:tblPr><w:tblGrid>'
            + f'<w:gridCol w:w="{w}"/>' * cols + '</w:tblGrid>'
            + ''.join(rows) + '</w:tbl>')


def sheet(paper):
    head = [
        be.para(omml.run('PREPARATION FOR THE FINAL EXAM', bold=True),
                align='center', after=60),
        be.para(omml.run(f'Grade 8 · {paper.SUBJECT} · {paper.SUBTITLE} · '
                         f'30 questions', bold=True), align='center', after=60),
        be.para(omml.run(f'{TEACHER} · for the {paper.FOR}'), align='center',
                after=120),
        be.para(omml.run('Work through these before the exam. The answers are at '
                         'the end — check against them, do not read them first.',
                         italic=True), align='center', after=200),
    ]
    cells = [be.para(omml.run(f'{i}.  ', bold=True) + omml.to_runs(item['q']),
                     after=20, keep=True) + be.ruled(1, after=140)
             for i, item in enumerate(paper.QUESTIONS, start=1)]
    answers = [be.para(omml.run('Answers', bold=True), after=80, keep=True),
               grid([be.para(omml.run(f'{i}.  ', bold=True)
                             + omml.to_runs(item['a']), after=40)
                     for i, item in enumerate(paper.QUESTIONS, start=1)], cols=2)]
    tail = [be.para(omml.run('Every answer here that a machine can check was '
                             'checked by one before printing.', italic=True),
                    after=0)]
    return ''.join(head + [grid(cells)] + answers + tail)


def main():
    os.makedirs(be.OUT, exist_ok=True)
    for which in ('algebra', 'geometry'):
        paper = importlib.import_module(f'paper_{which}_prep')
        path = os.path.join(be.OUT, f'8-{paper.CODE}-FINAL-PREPARATION.docx')
        print('wrote', be.build(path, sheet(paper), {}, keep_cover=False))


if __name__ == '__main__':
    main()
