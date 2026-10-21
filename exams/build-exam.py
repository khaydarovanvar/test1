#!/usr/bin/env python3
"""Build the Grade 8 first-quarter mathematics exam from the question bank.

The school's cover page is used exactly as it was supplied: the same table,
the same instructions, the same page setup and the same header. Only the
values inside its fields are set — subject, grade, teacher, date, exam name.
The exam itself is a second section with Normal margins (2.54 cm), Calibri 12
and 1.15 line spacing, as the school's exam rules require.

    python3 build-exam.py            # writes one .docx per group into ./out
"""

import os
import re
import shutil
import subprocess
import sys
import zipfile

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, '/home/user/test1/workbooks')
import bank                                                   # noqa: E402
import omml                                                   # noqa: E402

HERE = os.path.dirname(os.path.abspath(__file__))
COVER = '/home/user/mathematics/Exam Cover Page (2).docx'
OUT = os.path.join(HERE, 'out')

TEACHER = ('Anvarbek', ' Khaydarov')
SUBJECT = 'Mathematics'
EXAM = ('Final', ' Exam')
EXAM_CODE = 'FINAL'          # the exam type in the file name
DATE = '26/10/2026'
GROUPS = ('8A', '8G', '8P')
MINUTES = 40

# marks per question, by section — 40 % easy, 40 % medium, 20 % hard
SECTIONS = [
    ('Section A — Easy', 5, 'Answer all eight questions.'),
    ('Section B — Medium', 8, 'Answer all five questions. Show your working.'),
    ('Section C — Hard', 10, 'Answer both questions. Show every step of your working.'),
]

# (topic key, bank section, 1-based number in that section, optional lead-in,
#  optional extra part b as (text, marks, answer))
PAPER = [
    # ---- A, easy: one question from each of the eight topics taught ---------
    [('alg-01', 'Focus', 10, None, None),
     ('alg-02', 'Focus', 4, None, None),
     ('alg-03', 'Focus', 7, None, None),
     ('alg-04', 'Focus', 9, None, None),
     ('alg-05', 'Focus', 5, 'Write as a single fraction: ', None),
     ('alg-06', 'Focus', 5, None, None),
     ('alg-07', 'Focus', 4, None, None),
     ('alg-08', 'Focus', 4, None, None)],
    # ---- B, medium ---------------------------------------------------------
    [('alg-01', 'Challenge', 1, None, None),
     ('alg-03', 'Practice', 5, None, None),
     ('alg-05', 'Practice', 1, 'Write as a single fraction in its simplest form: ',
      None),
     ('alg-07', 'Practice', 4, None, None),
     ('alg-08', 'Practice', 1, None, None)],
    # ---- C, hard -----------------------------------------------------------
    [('alg-05', 'Challenge', 6,
      'Write as a single fraction in its simplest form: ',
      ('State the values of <span class="m">x</span> for which the original '
       'expression is not defined.', 3,
       '<span class="m">x ≠ 1</span> and <span class="m">x ≠ −1</span>')),
     ('alg-08', 'Challenge', 3, None, None)],
]

# how many ruled lines of answer space each section gets
SPACE = [2, 5, 8]


def question(spec):
    key, sec, num, lead, extra = spec
    topic = bank.BY_KEY[key]
    items = dict(topic['sections'])[sec]
    item = items[num - 1]
    return topic, item, lead, extra


def para(runs, spacing=True, align='left', after=0, keep=False):
    ppr = ['<w:pPr>']
    if keep:
        ppr.append('<w:keepNext/>')
    ppr.append(f'<w:spacing w:line="276" w:lineRule="auto" w:after="{after}"/>')
    ppr.append(f'<w:jc w:val="{align}"/>')
    ppr.append('<w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/>'
               '<w:sz w:val="24"/><w:szCs w:val="24"/></w:rPr></w:pPr>')
    return '<w:p>' + ''.join(ppr) + runs + '</w:p>'


def ruled(n):
    """Blank ruled lines for the pupil's working."""
    # pBdr comes before spacing: w:pPr's children are in a schema-fixed order
    line = ('<w:p><w:pPr>'
            # Word merges adjacent paragraphs that carry the same border and
            # draws only the outer edge, so the ruled lines need w:between too
            '<w:pBdr>'
            '<w:bottom w:val="dotted" w:sz="4" w:space="1" w:color="999999"/>'
            '<w:between w:val="dotted" w:sz="4" w:space="1" w:color="999999"/>'
            '</w:pBdr>'
            '<w:spacing w:line="360" w:lineRule="auto" w:after="0"/>'
            '<w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri"/>'
            '<w:sz w:val="24"/></w:rPr></w:pPr></w:p>')
    return line * n + para('', after=60)


def exam_body(group):
    out = [para(omml.run(f'{SUBJECT.upper()} — {EXAM[0].upper()}{EXAM[1].upper()}',
                         bold=True), align='center', after=60, keep=True),
           para(omml.run(f'Grade {group}   ·   {MINUTES} minutes   ·   100 marks',
                         bold=True), align='center', after=60, keep=True),
           para(omml.run('Topics: algebraic fractions and rational expressions '
                         '(lessons 1–22).'), after=40),
           para(omml.run('Answer every question in the space provided. Write in '
                         'blue pen. Calculators are not allowed.'), after=180)]
    n = 0
    for (title, marks, intro), specs, space in zip(SECTIONS, PAPER, SPACE):
        total = marks * len(specs)
        out.append(para(omml.run(f'{title} ({len(specs)} questions × {marks} marks '
                                 f'= {total} marks)', bold=True),
                        after=40, keep=True))
        out.append(para(omml.run(intro, italic=True), after=120, keep=True))
        for spec in specs:
            n += 1
            topic, item, lead, extra = question(spec)
            runs = omml.run(f'{n}.   ', bold=True)
            if extra:                                  # the part label goes first
                runs += omml.run('(a)  ', bold=True)
            if lead:
                runs += omml.to_runs(lead)
            runs += omml.to_runs(item['q'])
            part_marks = marks - (extra[1] if extra else 0)
            runs += omml.run(f'   ({part_marks} marks)')
            out.append(para(runs, after=40, keep=True))
            out.append(ruled(space if not extra else space - 2))
            if extra:
                runs = omml.run('       (b)  ', bold=True) + omml.to_runs(extra[0])
                runs += omml.run(f'   ({extra[1]} marks)')
                out.append(para(runs, after=40, keep=True))
                out.append(ruled(2))
    out.append(para(omml.run('— End of the exam —', bold=True), align='center'))
    return ''.join(out)


def key_body():
    out = [para(omml.run(f'{SUBJECT.upper()} — {EXAM[0].upper()}{EXAM[1].upper()}'
                         ' — MARKING KEY', bold=True), align='center', after=60),
           para(omml.run(f'Grade 8 · {", ".join(GROUPS)} · {DATE} · teacher copy',
                         bold=True), align='center', after=180)]
    n = 0
    for (title, marks, _), specs in zip(SECTIONS, PAPER):
        out.append(para(omml.run(f'{title} — {marks} marks each', bold=True),
                        after=60, keep=True))
        for spec in specs:
            n += 1
            topic, item, lead, extra = question(spec)
            runs = omml.run(f'{n}.   ', bold=True) + omml.to_runs(item['a'])
            runs += omml.run(f'      [{topic["title"]}, lessons {topic["lessons"]}]')
            out.append(para(runs, after=40))
            if extra:
                out.append(para(omml.run('        (b)  ', bold=True)
                                + omml.to_runs(extra[2]), after=40))
    out.append(para(omml.run('Every answer in this key was re-derived '
                             'symbolically by computer algebra before printing.',
                             italic=True), after=0))
    return ''.join(out)


def set_cover_fields(xml, group):
    """Fill the school's cover template in place: values only, layout untouched."""
    def one(pattern, repl, label):
        new, k = re.subn(pattern, repl, xml, count=1, flags=re.S)
        if k != 1:
            sys.exit(f'cover: could not set {label}')
        return new

    xml = one(r'(<w:t[^>]*>)English(</w:t>)', r'\g<1>' + SUBJECT + r'\g<2>',
              'subject')
    xml = one(r'(<w:t[^>]*>)10(</w:t>)(.*?)(<w:t[^>]*>)A(</w:t>)',
              r'\g<1>' + group[0] + r'\g<2>\g<3>\g<4>' + group[1] + r'\g<5>',
              'grade')
    xml = one(r'(<w:t[^>]*>)Muhamadiyor(</w:t>)', r'\g<1>' + TEACHER[0] + r'\g<2>',
              'teacher first name')
    xml = one(r'(<w:t[^>]*>) Botiraliev(</w:t>)', r'\g<1>' + TEACHER[1] + r'\g<2>',
              'teacher surname')
    xml = one(r'(<w:t[^>]*>)dd/mm/2026(</w:t>)', r'\g<1>' + DATE + r'\g<2>', 'date')
    xml = one(r'(<w:t[^>]*>)Final(</w:t>)', r'\g<1>' + EXAM[0] + r'\g<2>',
              'exam name')
    return xml


def build(path, body, group=None, keep_cover=True):
    """Splice a body into a copy of the school's cover document."""
    with zipfile.ZipFile(COVER) as z:
        names = z.namelist()
        files = {n: z.read(n) for n in names}
    xml = files['word/document.xml'].decode('utf-8')
    # fill the fields first: it changes the length of the document, and every
    # offset below is taken from the text as it then stands
    if keep_cover:
        xml = set_cover_fields(xml, group)

    start = xml.index('<w:body>') + len('<w:body>')
    last = xml.rindex('<w:sectPr')
    end = xml.index('</w:sectPr>', last) + len('</w:sectPr>')
    cover_body, cover_sect = xml[start:last], xml[last:end]

    # the exam pages: Normal margins, 2.54 cm every side (1440 twips)
    exam_sect = re.sub(r'<w:pgMar[^/]*/>',
                       '<w:pgMar w:top="1440" w:right="1440" w:bottom="1440" '
                       'w:left="1440" w:header="708" w:footer="708" w:gutter="0"/>',
                       cover_sect)

    if keep_cover:
        # the cover keeps its own page setup: its section ends on its last
        # paragraph, so nothing about it moves
        i = cover_body.rindex('<w:p ')
        j = cover_body.index('>', i) + 1
        head, tail = cover_body[:j], cover_body[j:]
        if head.endswith('/>'):                       # an empty self-closed <w:p/>
            head = head[:-2] + '>'
            tail = '</w:p>' + tail
        cover_body = head + f'<w:pPr>{cover_sect}</w:pPr>' + tail
    else:
        cover_body = ''

    files['word/document.xml'] = (xml[:start] + cover_body + body
                                  + exam_sect + xml[end:]).encode('utf-8')
    with zipfile.ZipFile(path, 'w', zipfile.ZIP_DEFLATED) as z:
        for n in names:
            z.writestr(n, files[n])
    return path


def main():
    os.makedirs(OUT, exist_ok=True)
    made = []
    for g in GROUPS:
        made.append(build(os.path.join(OUT, f'{g}-MATH-{EXAM_CODE}.docx'),
                          exam_body(g), group=g))
    made.append(build(os.path.join(OUT, f'8-MATH-{EXAM_CODE}-ANSWER-KEY.docx'),
                      key_body(), keep_cover=False))
    for p in made:
        print('wrote', p)


if __name__ == '__main__':
    main()
