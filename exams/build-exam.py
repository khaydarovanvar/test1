#!/usr/bin/env python3
"""Build a Grade 8 exam paper on the school's cover page.

The cover is used exactly as supplied: the same table, the same instructions,
the same page setup and the same header. Only the values in its fields are
set — subject, grade, teacher, date, exam name. The questions follow in a
second section with Normal margins (2.54 cm), Calibri 12 and 1.15 line
spacing, as the school's exam rules require.

    python3 build-exam.py                  # both papers, every group
    python3 build-exam.py --paper geometry
"""

import argparse
import math
import os
import re
import sys
import zipfile

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import omml                                                   # noqa: E402

HERE = os.path.dirname(os.path.abspath(__file__))
COVER = '/home/user/mathematics/Exam Cover Page (2).docx'
OUT = os.path.join(HERE, 'out')
FIGDIR = os.path.join(HERE, 'figures')

TEACHER = ('Anvarbek', ' Khaydarov')
EXAM = ('Final', ' Exam')
EXAM_CODE = 'FINAL'
DATE = '26/10/2026'          # a paper may set its own; the two sit on
                             # different days
GROUPS = ('8A', '8G', '8P')
MINUTES = 40
EMU_PER_MM = 36000
# the figures are drawn at the size they read best; 0.7 is what lets the
# geometry paper, cover included, stay on four pages
FIG_SCALE = float(os.environ.get('FIG_SCALE', '0.7'))


# ------------------------------------------------------------- paragraphs ---

def para(runs, align='left', after=0, keep=False, indent=0):
    ppr = ['<w:pPr>']
    if keep:
        ppr.append('<w:keepNext/>')
    ppr.append(f'<w:spacing w:line="276" w:lineRule="auto" w:after="{after}"/>')
    if indent:
        ppr.append(f'<w:ind w:left="{indent}"/>')
    ppr.append(f'<w:jc w:val="{align}"/>')
    ppr.append('<w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/>'
               '<w:sz w:val="24"/><w:szCs w:val="24"/></w:rPr></w:pPr>')
    return '<w:p>' + ''.join(ppr) + runs + '</w:p>'


def ruled(n, after=160):
    """Blank ruled lines for the pupil's working.

    The gap below the block is spacing on the last line, not an empty
    paragraph: fifteen stray empty paragraphs cost most of a page.
    """
    def line(sp):
        # pBdr's children come in a fixed order, and w:between is what makes
        # adjacent ruled paragraphs show a line each instead of merging
        return ('<w:p><w:pPr>'
                '<w:pBdr>'
                '<w:bottom w:val="dotted" w:sz="4" w:space="1" w:color="999999"/>'
                '<w:between w:val="dotted" w:sz="4" w:space="1" w:color="999999"/>'
                '</w:pBdr>'
                f'<w:spacing w:line="360" w:lineRule="auto" w:after="{sp}"/>'
                '<w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri"/>'
                '<w:sz w:val="24"/></w:rPr></w:pPr></w:p>')
    return line(0) * (n - 1) + line(after)


def figure_height_mm(name, mm):
    from PIL import Image
    with Image.open(os.path.join(FIGDIR, name + '.png')) as im:
        return mm * FIG_SCALE * im.height / im.width


def lines_beside(name, mm, least):
    """Enough ruled lines to reach past the floated figure.

    A right-floated figure is laid out with allowOverlap off, so if the block
    below it is shorter than the figure the next figure cannot take its place
    on the right and is shunted into the middle of the page. Giving the
    question as many lines as the figure is tall keeps every figure flush
    right — and the lines beside it are working space the pupil can use.
    """
    return max(least, math.ceil(figure_height_mm(name, mm) / 7.0))


def figure_run(name, rid, cid, mm):
    """The picture, floated to the right with the working space beside it.

    An inline figure takes a full-width band of its own and the answer lines
    start below it, which costs a page over fifteen questions. Anchored to the
    right of the question with square wrapping, the ruled lines run alongside.
    """
    from PIL import Image
    mm *= FIG_SCALE
    with Image.open(os.path.join(FIGDIR, name + '.png')) as im:
        ratio = im.height / im.width
    cx, cy = int(mm * EMU_PER_MM), int(mm * ratio * EMU_PER_MM)
    a = 'http://schemas.openxmlformats.org/drawingml/2006/main'
    pic = 'http://schemas.openxmlformats.org/drawingml/2006/picture'
    return (f'<w:r><w:drawing>'
            f'<wp:anchor distT="0" distB="0" distL="114300" distR="0" '
            f'simplePos="0" relativeHeight="{251658240 + cid}" behindDoc="0" '
            f'locked="0" layoutInCell="1" allowOverlap="0">'
            f'<wp:simplePos x="0" y="0"/>'
            f'<wp:positionH relativeFrom="column"><wp:align>right</wp:align>'
            f'</wp:positionH>'
            f'<wp:positionV relativeFrom="paragraph"><wp:posOffset>0'
            f'</wp:posOffset></wp:positionV>'
            f'<wp:extent cx="{cx}" cy="{cy}"/>'
            f'<wp:effectExtent l="0" t="0" r="0" b="0"/>'
            f'<wp:wrapSquare wrapText="left"/>'
            f'<wp:docPr id="{cid}" name="Figure {cid}"/>'
            f'<wp:cNvGraphicFramePr><a:graphicFrameLocks xmlns:a="{a}" '
            f'noChangeAspect="1"/></wp:cNvGraphicFramePr>'
            f'<a:graphic xmlns:a="{a}"><a:graphicData uri="{pic}">'
            f'<pic:pic xmlns:pic="{pic}"><pic:nvPicPr>'
            f'<pic:cNvPr id="{cid}" name="{name}.png"/><pic:cNvPicPr/>'
            f'</pic:nvPicPr><pic:blipFill><a:blip r:embed="{rid}"/>'
            f'<a:stretch><a:fillRect/></a:stretch></pic:blipFill>'
            f'<pic:spPr><a:xfrm><a:off x="0" y="0"/>'
            f'<a:ext cx="{cx}" cy="{cy}"/></a:xfrm>'
            f'<a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr>'
            f'</pic:pic></a:graphicData></a:graphic></wp:anchor>'
            f'</w:drawing></w:r>')


# ------------------------------------------------------------------ bodies ---

def exam_body(paper, figs):
    """The question pages. No title block: the cover already carries all of it."""
    out, n = [], 0
    for (title, marks, intro), items, space in zip(paper.SECTIONS, paper.PAPER,
                                                   paper.SPACE):
        total = marks * len(items)
        out.append(para(omml.run(f'{title} ({len(items)} questions × {marks} marks '
                                 f'= {total} marks)', bold=True),
                        after=40, keep=True))
        out.append(para(omml.run(intro, italic=True), after=120, keep=True))
        for item in items:
            n += 1
            extra = item.get('extra')
            runs = omml.run(f'{n}.   ', bold=True)
            if extra:
                runs += omml.run('(a)  ', bold=True)
            runs += omml.to_runs(item['q'])
            if item.get('fig'):
                runs += figure_run(item['fig'], *figs[item['fig']])
            # a non-breaking space so "(5 marks)" never splits across lines
            runs += omml.run('   (%d\u00a0marks)'
                             % (marks - (extra['marks'] if extra else 0)))
            out.append(para(runs, after=40, keep=True))
            want = space if not extra else max(space - 2, 2)
            if item.get('fig'):
                want = lines_beside(item['fig'], figs[item['fig']][2], want)
            out.append(ruled(want))
            if extra:
                runs = (omml.run('       (b)  ', bold=True)
                        + omml.to_runs(extra['q'])
                        + omml.run('   (%d\u00a0marks)' % extra['marks']))
                out.append(para(runs, after=40, keep=True))
                out.append(ruled(2))
    out.append(para(omml.run('— End of the exam —', bold=True), align='center'))
    return ''.join(out)


def key_body(paper):
    out = [para(omml.run(f'{paper.SUBJECT.upper()} — {EXAM[0].upper()}'
                         f'{EXAM[1].upper()} — MARKING KEY', bold=True),
                align='center', after=60),
           para(omml.run(f'Grade 8 · {", ".join(GROUPS)} · '
                         f'{getattr(paper, "DATE", DATE)} · '
                         f'{paper.SUBTITLE} · teacher copy', bold=True),
                align='center', after=180)]
    n = 0
    for (title, marks, _), items in zip(paper.SECTIONS, paper.PAPER):
        out.append(para(omml.run(f'{title} — {marks} marks each', bold=True),
                        after=60, keep=True))
        for item in items:
            n += 1
            runs = omml.run(f'{n}.   ', bold=True) + omml.to_runs(item['a'])
            where = item['topic'] + (f', lessons {item["lessons"]}'
                                     if item.get('lessons') else '')
            runs += omml.run(f'      [{where}]')
            out.append(para(runs, after=40))
            if item.get('extra'):
                out.append(para(omml.run('        (b)  ', bold=True)
                                + omml.to_runs(item['extra']['a']), after=40))
    out.append(para(omml.run('Every numerical answer in this key was checked by '
                             'computer algebra before printing.', italic=True)))
    return ''.join(out)


# ------------------------------------------------------------------- cover ---

def set_cover_fields(xml, group, subject, date):
    """Fill the school's cover template in place: values only, layout untouched."""
    def one(pattern, repl, label):
        new, k = re.subn(pattern, repl, xml, count=1, flags=re.S)
        if k != 1:
            sys.exit(f'cover: could not set {label}')
        return new

    xml = one(r'(<w:t[^>]*>)English(</w:t>)', r'\g<1>' + subject + r'\g<2>',
              'subject')
    xml = one(r'(<w:t[^>]*>)10(</w:t>)(.*?)(<w:t[^>]*>)A(</w:t>)',
              r'\g<1>' + group[0] + r'\g<2>\g<3>\g<4>' + group[1] + r'\g<5>',
              'grade')
    xml = one(r'(<w:t[^>]*>)Muhamadiyor(</w:t>)', r'\g<1>' + TEACHER[0] + r'\g<2>',
              'teacher first name')
    xml = one(r'(<w:t[^>]*>) Botiraliev(</w:t>)', r'\g<1>' + TEACHER[1] + r'\g<2>',
              'teacher surname')
    xml = one(r'(<w:t[^>]*>)dd/mm/2026(</w:t>)', r'\g<1>' + date + r'\g<2>', 'date')
    xml = one(r'(<w:t[^>]*>)Final(</w:t>)', r'\g<1>' + EXAM[0] + r'\g<2>',
              'exam name')
    return xml


def build(path, body, figs, group=None, subject=None, date=DATE,
          keep_cover=True, cols=1):
    with zipfile.ZipFile(COVER) as z:
        names = z.namelist()
        files = {n: z.read(n) for n in names}
    xml = files['word/document.xml'].decode('utf-8')
    # fill the fields first: it changes the length of the document, and every
    # offset below is taken from the text as it then stands
    if keep_cover:
        xml = set_cover_fields(xml, group, subject, date)

    start = xml.index('<w:body>') + len('<w:body>')
    last = xml.rindex('<w:sectPr')
    end = xml.index('</w:sectPr>', last) + len('</w:sectPr>')
    cover_body, cover_sect = xml[start:last], xml[last:end]

    # the question pages: Normal margins, 2.54 cm every side (1440 twips)
    exam_sect = re.sub(r'<w:pgMar[^/]*/>',
                       '<w:pgMar w:top="1440" w:right="1440" w:bottom="1440" '
                       'w:left="1440" w:header="708" w:footer="708" w:gutter="0"/>',
                       cover_sect)
    if cols > 1:
        exam_sect = re.sub(r'<w:cols[^/]*/>',
                           f'<w:cols w:num="{cols}" w:space="397"/>', exam_sect)

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

    if figs:
        rels = files['word/_rels/document.xml.rels'].decode('utf-8')
        add = ''.join(
            f'<Relationship Id="{rid}" Type="http://schemas.openxmlformats.org/'
            f'officeDocument/2006/relationships/image" Target="media/{name}.png"/>'
            for name, (rid, _, _) in figs.items())
        files['word/_rels/document.xml.rels'] = \
            rels.replace('</Relationships>', add + '</Relationships>').encode('utf-8')
        ct = files['[Content_Types].xml'].decode('utf-8')
        if 'Extension="png"' not in ct:
            ct = ct.replace('<Types ', '<Types ', 1).replace(
                '</Types>', '<Default Extension="png" ContentType="image/png"/>'
                            '</Types>')
            files['[Content_Types].xml'] = ct.encode('utf-8')
        for name in figs:
            with open(os.path.join(FIGDIR, name + '.png'), 'rb') as fh:
                files[f'word/media/{name}.png'] = fh.read()
            names.append(f'word/media/{name}.png')

    with zipfile.ZipFile(path, 'w', zipfile.ZIP_DEFLATED) as z:
        for n in names:
            z.writestr(n, files[n])
    return path


def figures_for(paper):
    """{figure name: (relationship id, drawing id, width in mm)}"""
    import json
    path = os.path.join(FIGDIR, 'index.json')
    widths = json.load(open(path)) if os.path.exists(path) else {}
    used, out = [], {}
    for items in paper.PAPER:
        for item in items:
            if item.get('fig') and item['fig'] not in used:
                used.append(item['fig'])
    for i, name in enumerate(used, start=1):
        if name not in widths:
            sys.exit(f'no figure called {name} — run figures.py')
        out[name] = (f'rIdFig{i}', 100 + i, widths[name])
    return out


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--paper', nargs='*', default=['algebra', 'geometry'],
                    choices=['algebra', 'geometry'])
    opt = ap.parse_args()
    os.makedirs(OUT, exist_ok=True)
    for which in opt.paper:
        paper = __import__('paper_' + which)
        figs = figures_for(paper)
        body = exam_body(paper, figs)
        for g in GROUPS:
            print('wrote', build(os.path.join(OUT, f'{g}-{paper.CODE}-{EXAM_CODE}.docx'),
                                 body, figs, group=g, subject=paper.SUBJECT,
                                 date=getattr(paper, 'DATE', DATE)))
        print('wrote', build(os.path.join(
            OUT, f'8-{paper.CODE}-{EXAM_CODE}-ANSWER-KEY.docx'),
            key_body(paper), {}, keep_cover=False))


if __name__ == '__main__':
    main()
