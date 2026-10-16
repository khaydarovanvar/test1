#!/usr/bin/env python3
"""Typeset the Grade 8 algebra books as printable, publishable HTML.

The shape follows a Cambridge Lower Secondary workbook, set as a real book:
a title page, an imprint page, a contents with page numbers, a preface, then
the topics — each opening with its key words and a reminder of the method,
the questions climbing through Focus, Practice and Challenge, with a fourth
olympiad section in front of which the methods briefing is printed. Answers,
with solutions for the hard ones, are at the back.

    python3 build-workbook.py --topics alg-01 alg-02 --out book
    node render-workbook.mjs book out/book
    python3 pagemap.py out/book.pdf book.pages.json   # then build again,
                                                      # --pagemap book.pages.json
`build-all.sh` runs both passes for every book in the series.
"""

import json
import os
import sys
import zlib

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bank

HERE = os.path.dirname(os.path.abspath(__file__))

AUTHOR = 'Anvarbek Khaydarov'
ROLE = 'Mathematics teacher and olympiad trainer'
PLACE = 'Uzbekistan'
YEAR = 'Academic year 2026–2027'
EDITION = 'First edition'
SERIES = 'The Grade 8 Algebra Series'

SECTION_COLOUR = {
    'Focus': ('#0F6E8C', '#E8F3F7'),
    'Practice': ('#8A5A00', '#FBF2E2'),
    'Challenge': ('#6B3FA0', '#F2EDF9'),
    'Beyond': ('#9B2C2C', '#FBEDED'),
    'Milliy sertifikat': ('#1B6B3A', '#E9F4EC'),
}
# how much blank space a question of each kind needs
LINES = {'Focus': 1, 'Practice': 2, 'Challenge': 3, 'Beyond': 4}
# the Cambridge section names, against the plain difficulty they stand for
TIER = {'Focus': 'easy', 'Practice': 'medium', 'Challenge': 'hard',
        'Beyond': 'very hard', 'Milliy sertifikat': 'exam format'}
# the three item types of the Milliy sertifikat mathematics paper, with what
# each is worth. Items 1–32 are Y-1, 33–35 are Y-2 and 36–45 are open.
MS_KIND = {
    'Y-1': ('Y-1', 'closed · four options, one correct'),
    'Y-2': ('Y-2', 'closed · matching'),
    'O': ('O', 'open · short answer, parts a and b'),
}
ASKS = {
    'Focus': 'One step, with the method in front of you.',
    'Practice': 'The same skill, with a step of setting-up first.',
    'Challenge': 'Longer chains of reasoning, and the awkward cases.',
    'Beyond': 'Olympiad work. Some need an idea, not just a method.',
}

CSS = """
:root { --ink:#17202A; --soft:#5A6775; --rule:#C9D2DA; --page:#FFFFFF; }
* { box-sizing:border-box; }
html, body { margin:0; padding:0; background:var(--page); color:var(--ink);
  font-family:"Source Sans 3","Segoe UI",system-ui,-apple-system,sans-serif;
  font-size:9.3pt; line-height:1.28; }
.sheet { padding:0; }
p { margin:0 0 2mm; }

h1 { font-size:16pt; margin:0 0 1mm; letter-spacing:-.01em; }
h2 { font-size:13pt; margin:0; }
.m { font-family:"Cambria","Georgia",serif; white-space:nowrap; }
/* radicals: the bar is drawn over the radicand so √2x reads unambiguously */
.rsign { font-family:"Cambria","Georgia",serif; }
.rbar { border-top:1px solid currentColor; padding:0 .12em 0 .06em; margin-left:-.02em; }
.ridx { font-size:.62em; vertical-align:.55em; margin-right:-.22em; }

/* stacked fractions */
.frac { display:inline-block; vertical-align:-0.55em; text-align:center;
  margin:0 .18em; font-family:"Cambria","Georgia",serif; }
.frac .num { display:block; border-bottom:1.2px solid currentColor; padding:0 .34em .05em; }
.frac .den { display:block; padding:.05em .34em 0; }
.frac .frac { font-size:.92em; }

/* page markers: white, one point, read back out of the PDF to number the
   contents. They print as nothing. */
.pm { color:#FFFFFF; font-size:1pt; line-height:0; letter-spacing:normal;
  text-transform:none; font-family:monospace; }

/* ---------- front matter ---------- */
.front { page-break-after:always; }
.titlepage { display:flex; flex-direction:column; min-height:246mm; }
.tp-series { font-size:9pt; letter-spacing:.18em; text-transform:uppercase;
  color:var(--soft); }
.tp-rule { border-top:3px solid var(--ink); margin:2.5mm 0 0; }
.booktitle { font-size:30pt; line-height:1.08; margin:8mm 0 0; letter-spacing:-.018em;
  max-width:150mm; }
.booksub { font-size:12.5pt; color:var(--soft); margin:4mm 0 0; max-width:132mm;
  line-height:1.35; }
.tp-stage { margin:6mm 0 0; font-size:10pt; color:var(--soft);
  border-left:3px solid var(--rule); padding-left:3.5mm; }
.author { margin-top:auto; }
.author .aname { font-size:16pt; font-weight:700; letter-spacing:-.01em; }
.author .arole { color:var(--soft); font-size:10.5pt; margin-top:1.2mm; }
.tp-foot { margin-top:7mm; padding-top:2.5mm; border-top:1px solid var(--rule);
  font-size:9pt; color:var(--soft); display:flex; justify-content:space-between; }

.imprint { display:flex; flex-direction:column; min-height:246mm;
  font-size:9pt; color:var(--soft); }
.imprint .ip-body { margin-top:auto; max-width:122mm; }
.imprint .ip-body p { margin:0 0 2.6mm; }
.imprint .ip-title { color:var(--ink); font-weight:700; font-size:10pt; }
.ip-rule { border-top:1px solid var(--rule); margin:3mm 0; }
.co-label { font-size:8.4pt; letter-spacing:.18em; text-transform:uppercase;
  color:var(--soft); font-weight:700; margin-bottom:2.2mm;
  padding-bottom:1.6mm; border-bottom:1.6px solid var(--ink); }

.pagehead { margin:0 0 5mm; }
.pagehead h2 { font-size:19pt; letter-spacing:-.012em; }
.pagehead .ph-alt { color:var(--soft); font-size:9.6pt; margin-top:1.2mm; }
.lede { font-size:10.4pt; max-width:148mm; margin:0 0 4mm; }

/* ---------- contents ---------- */
.contents { margin:0; }
.cunit { font-weight:700; font-size:10.4pt; margin:4mm 0 1.2mm;
  padding-bottom:.8mm; border-bottom:1.6px solid var(--ink);
  page-break-after:avoid; break-after:avoid; }
.cunit:first-child { margin-top:0; }
.crow { display:flex; align-items:baseline; gap:2mm; font-size:9.6pt;
  padding:.9mm 0; page-break-inside:avoid; }
.crow .cnum { flex:0 0 8mm; color:var(--soft); font-weight:700; }
.crow .cles { color:var(--soft); font-size:8.6pt; white-space:nowrap; }
.crow .cfill { flex:1; border-bottom:1px dotted #B3BEC9; height:0;
  transform:translateY(-1mm); min-width:5mm; }
.crow .cpage { flex:0 0 9mm; text-align:right; font-variant-numeric:tabular-nums; }
.crow.cplain .cnum { flex:0 0 8mm; }
.crow.cplain { font-weight:700; }

/* ---------- how to use ---------- */
.tiers { width:100%; border-collapse:collapse; margin:1mm 0 4mm; font-size:9.4pt; }
.tiers th { text-align:left; font-size:8.4pt; letter-spacing:.1em;
  text-transform:uppercase; color:var(--soft); padding:0 2.5mm 1.2mm 0;
  border-bottom:1px solid var(--rule); }
.tiers td { padding:1.6mm 2.5mm 1.6mm 0; border-bottom:1px solid var(--rule);
  vertical-align:top; }
.tiers .tname { font-weight:700; white-space:nowrap; }
.tiers .tcount { white-space:nowrap; text-align:right; padding-right:0; }
.howto .hblock { margin:0 0 3mm; max-width:152mm; }
.howto .hblock .hh { font-weight:700; }

/* ---------- topic opener ---------- */
.topic { page-break-before:always; }
.topichead { border-top:2.5px solid var(--ink); padding-top:1.8mm; margin-bottom:2.2mm; }
.eyebrow { font-size:8.6pt; letter-spacing:.14em; text-transform:uppercase;
  color:var(--soft); margin-bottom:1.2mm; }
.sub { color:var(--soft); font-size:9.8pt; margin:.8mm 0 0; }
.refs { font-size:8.8pt; color:var(--soft); margin-top:1.2mm; }

.boxes { display:flex; gap:3mm; margin:2mm 0 2mm; }
.box { border:1px solid var(--rule); border-radius:2mm; padding:1.6mm 2.2mm; }
.box .blabel { font-size:8.2pt; letter-spacing:.12em; text-transform:uppercase;
  color:var(--soft); margin-bottom:1.1mm; }
.keywords { flex:0 0 46%; background:#F7F9FB; }
.keywords ul { margin:0; padding-left:4.2mm; }
.keywords li { margin:.4mm 0; }
.remember { flex:1; }
.remember ol { margin:0; padding-left:4.2mm; }
.remember li { margin:.7mm 0; }

/* ---------- exercise sections ---------- */
.section { margin:0 0 2mm; }
.twocol { column-count:2; column-gap:6mm; }
.twocol .q { break-inside:avoid; }
.sechead { display:flex; align-items:baseline; gap:3mm; padding:1.2mm 3mm;
  border-radius:1.5mm; margin:2.4mm 0 1.6mm; page-break-after:avoid; break-after:avoid; }
.sechead .name { font-size:11.5pt; font-weight:700; }
.sechead .tier { font-size:8.2pt; letter-spacing:.1em; text-transform:uppercase;
  border:1px solid currentColor; border-radius:1mm; padding:.3mm 1.5mm; opacity:.75;
  white-space:nowrap; }
.sechead .count { font-size:8.8pt; opacity:.8; white-space:nowrap; }
.sechead .blurb { font-size:8.8pt; margin-left:auto; opacity:.85; text-align:right; }

.q { display:flex; gap:2.2mm; page-break-inside:avoid; margin:0 0 1.2mm; }
.qn { flex:0 0 5.6mm; height:5.6mm; border-radius:50%; border:1.2px solid var(--rule);
  display:flex; align-items:center; justify-content:center;
  font-size:8.8pt; font-weight:700; color:var(--soft); }
.qbody { flex:1; padding-top:.5mm; }
.lines { margin-top:.8mm; }
.lines div { border-bottom:1px dotted #AEB9C4; height:5.2mm; }
.beyond .lines div { height:5.8mm; }

/* ---------- answers ---------- */
.answers { page-break-before:always; }
.anssec { margin:0 0 3mm; }
.anssec .ah { font-weight:700; font-size:9.8pt; margin:2.4mm 0 1.2mm;
  padding-bottom:.8mm; border-bottom:1px solid var(--rule);
  page-break-after:avoid; break-after:avoid; }
.alist { columns:3; column-gap:6mm; }
.alist .a { break-inside:avoid; margin:0 0 1.2mm; font-size:9pt; display:flex; gap:1.8mm; }
.alist .a .n { color:var(--soft); font-weight:700; min-width:4.6mm; }
.sols { columns:2; column-gap:7mm; }
.sols .a { display:block; margin:0 0 2mm; font-size:9pt; }
.sols .a .n { color:var(--soft); font-weight:700; }
.sols .sol { color:var(--soft); margin-top:.6mm; }

.notes { border:1px solid var(--rule); border-left:3px solid #9B2C2C;
  border-radius:1.5mm; padding:1.8mm 2.6mm 1mm; margin:2.4mm 0 1.6mm; background:#FDFBFB;
  page-break-inside:avoid; }
.notes .nhead { font-size:8.6pt; letter-spacing:.1em; text-transform:uppercase;
  color:#9B2C2C; font-weight:700; margin-bottom:1.6mm; }
.note { margin:0 0 1.2mm; page-break-inside:avoid; }
.note .nname { font-weight:700; font-size:9.3pt; }
.note .nbody { font-size:9.3pt; color:#2C3742; }
/* the methods volume is a reference, not a workbook: its topics flow on from
   one another rather than each taking a fresh page */
.topic.notesonly { page-break-before:auto; page-break-inside:avoid;
  margin:0 0 5mm; }
.topic.notesonly:first-child { margin-top:0; }
.notesonly .notes { margin-top:2mm; }
.notesonly .topichead { border-top-width:1.6px; }

/* ---------- Milliy sertifikat items ---------- */
.ms .mstag { float:right; margin:0 0 1mm 3mm; font-size:7.8pt; font-weight:700;
  letter-spacing:.06em; color:#1B6B3A; background:#E9F4EC; border-radius:1mm;
  padding:.3mm 1.6mm; white-space:nowrap; }
.ms .opts { display:grid; grid-template-columns:repeat(auto-fit, minmax(34mm, 1fr));
  gap:.6mm 4mm; margin:1.2mm 0 .6mm; }
.ms .opts span { white-space:nowrap; }
.ms .opts .ol { color:var(--soft); font-weight:700; margin-right:1.2mm; }
.ms .match { display:flex; gap:6mm; margin:1.2mm 0 1mm; }
.ms .match div { flex:1; }
.ms .match p { margin:.5mm 0; }
.ms .match .ml { color:var(--soft); font-weight:700; margin-right:1.4mm; }
.ms .mansw { font-size:9pt; color:var(--soft); margin-top:1mm;
  border-top:1px dotted #AEB9C4; padding-top:1.2mm; letter-spacing:.04em; }
.ms .part { margin:1.2mm 0 0; }
.ms .part .pl { font-weight:700; color:#1B6B3A; margin-right:1.2mm; }
.notes.msnotes { border-left-color:#1B6B3A; background:#FAFDFB; }
.notes.msnotes .nhead { color:#1B6B3A; }
.exambox { border:1px solid var(--rule); border-radius:1.5mm; padding:2mm 2.6mm;
  margin:1mm 0 4mm; background:#FAFDFB; font-size:9.2pt; }
.exambox .ehead { font-size:8.4pt; letter-spacing:.14em; text-transform:uppercase;
  color:#1B6B3A; font-weight:700; margin-bottom:1.6mm; }
.exambox table { width:100%; border-collapse:collapse; font-size:9.2pt; }
.exambox td { padding:.9mm 2mm .9mm 0; border-bottom:1px solid var(--rule);
  vertical-align:top; }
.exambox tr:last-child td { border-bottom:0; }
.exambox .ek { font-weight:700; white-space:nowrap; color:#1B6B3A; }
.exambox .em { white-space:nowrap; text-align:right; color:var(--soft); }

.data { border-collapse:collapse; margin:1mm 0 1.4mm; font-size:8.4pt; }
.data th, .data td { border:1px solid var(--rule); padding:0.5mm 1.3mm;
  text-align:center; }
.data th { background:#F4F6F8; font-weight:700; text-align:left; white-space:nowrap; }

/* ---------- back matter ---------- */
.colophon { page-break-before:always; display:flex; flex-direction:column;
  min-height:246mm; }
.colophon .co-body { margin-top:auto; max-width:126mm; font-size:9.3pt; }
.colophon .co-body p { margin:0 0 2.6mm; }
.colophon .co-name { font-size:13pt; font-weight:700; color:var(--ink); }
.footnote { color:var(--soft); font-size:8.6pt; margin-top:3mm;
  border-top:1px solid var(--rule); padding-top:1.6mm; }
"""


def mark(tag):
    """A white one-point marker, read back out of the PDF to number the contents."""
    return f'<span class="pm">@@{tag}@@</span>'


def lines(n):
    return '<div class="lines">' + '<div></div>' * n + '</div>'


def render_questions(topic, section, items):
    ink, tint = SECTION_COLOUR[section]
    blurb = topic.get('blurb', {}).get(section, bank.SECTION_BLURB[section])
    out = [f'<div class="sechead" style="background:{tint};color:{ink}">'
           f'<span class="name">{section}</span>'
           f'<span class="tier">{TIER[section]}</span>'
           f'<span class="count">{len(items)} questions</span>'
           f'<span class="blurb">{blurb}</span></div>']
    klass = ' beyond' if section == 'Beyond' else ''
    if section == 'Focus':
        out.append('<div class="twocol">')
    for i, item in enumerate(items, start=1):
        out.append(
            f'<div class="q{klass}"><div class="qn">{i}</div>'
            f'<div class="qbody"><div class="qtext">{item["q"]}</div>'
            f'{lines(LINES[section])}</div></div>')
    if section == 'Focus':
        out.append('</div>')
    return '\n'.join(out)


def render_notes(topic, standalone=False):
    """The methods briefing: named ideas with the smallest line that shows each."""
    notes = topic.get('notes') or []
    if not notes:
        return ''
    items = ''.join(f'<div class="note"><div class="nname">{name}</div>'
                    f'<div class="nbody">{body}</div></div>' for name, body in notes)
    label = ('The ideas behind the hard problems' if standalone
             else 'Before you start — the ideas behind the Beyond problems')
    return (f'<div class="notes"><div class="nhead">{label}</div>{items}</div>')


def ms_options(item):
    """The four options in print order, and the letter of the right one.

    The bank is written with the correct option first, which is how a teacher
    writes one; a paper where the answer is always A teaches the wrong reflex,
    so the options are rotated by a number fixed by the question's own text —
    stable from build to build, but spread evenly across A, B, C and D.
    """
    opts = list(item['opts'])
    r = zlib.crc32(item['q'].encode('utf-8')) % len(opts)
    letter = chr(65 + (item.get('key', 0) - r) % len(opts))
    return opts[r:] + opts[:r], letter


def ms_answer(item):
    """What prints in the answers at the back."""
    if item['kind'] != 'Y-1':
        return item['a']
    return f'{ms_options(item)[1]} · {item["a"]}'


def render_ms_item(item, i):
    """One Milliy sertifikat item, set the way the paper sets it."""
    kind = item['kind']
    tag = (f'<span class="mstag">{MS_KIND[kind][0]} · {item["mark"]} ball</span>')
    out = [f'<div class="q ms"><div class="qn">{i}</div><div class="qbody">',
           tag, f'<div class="qtext">{item["q"]}</div>']
    if kind == 'Y-1':
        opts = ''.join(f'<span><span class="ol">{chr(65 + j)})</span>{o}</span>'
                       for j, o in enumerate(ms_options(item)[0]))
        out.append(f'<div class="opts">{opts}</div>')
        out.append(lines(1))
    elif kind == 'Y-2':
        left = ''.join(f'<p><span class="ml">{j + 1})</span>{o}</p>'
                       for j, o in enumerate(item['left']))
        right = ''.join(f'<p><span class="ml">{chr(65 + j)})</span>{o}</p>'
                        for j, o in enumerate(item['right']))
        out.append(f'<div class="match"><div>{left}</div><div>{right}</div></div>')
        strip = ' &nbsp; '.join(f'{j + 1} — ……' for j in range(len(item['left'])))
        out.append(f'<div class="mansw">{strip}</div>')
    else:                                                   # O — open, parts a, b
        for label, text in zip('ab', item['parts']):
            out.append(f'<div class="part"><span class="pl">{label})</span>{text}</div>')
            out.append(lines(2))
    out.append('</div></div>')
    return '\n'.join(out)


def render_milliy(topic):
    """The exam-format set: its briefing, then the items."""
    ms = topic.get('milliy')
    if not ms:
        return ''
    items = ms['items']
    ink, tint = SECTION_COLOUR['Milliy sertifikat']
    brief = ''.join(f'<div class="note"><div class="nname">{name}</div>'
                    f'<div class="nbody">{body}</div></div>' for name, body in ms['brief'])
    out = [f'<div class="notes msnotes"><div class="nhead">'
           f'Before you start — what the Milliy sertifikat asks on this topic</div>'
           f'{brief}</div>',
           f'<div class="sechead" style="background:{tint};color:{ink}">'
           f'<span class="name">Milliy sertifikat</span>'
           f'<span class="tier">exam format</span>'
           f'<span class="count">{len(items)} items</span>'
           f'<span class="blurb">The national certificate paper, on this topic.</span>'
           f'</div>']
    out += [render_ms_item(item, i) for i, item in enumerate(items, start=1)]
    return '\n'.join(out)


def render_exam_box():
    """What the paper is, once, in the front of the book."""
    rows = ''.join(
        f'<tr><td class="ek">{k}</td><td>{d}</td><td class="em">{m}</td></tr>'
        for k, d, m in (
            ('Y-1', 'Closed. Four options, one correct. Items 1–32 of the paper.',
             '1,3 or 2,2 ball'),
            ('Y-2', 'Closed matching: pair each item on the left with one on the '
                    'right. Items 33–35.', '2,2 ball'),
            ('O', 'Open, short answer, in two parts a) and b). Items 36–45. Only '
                  'the final answer is marked, not the working.',
             'a 1,5 · b 1,7 · both 3,2')))
    return (f'<div class="exambox"><div class="ehead">The Milliy sertifikat '
            f'mathematics paper</div>'
            f'<p style="margin:0 0 1.6mm">45 items in 150 minutes, marked out of 75; '
            f'the certificate starts at 46 points. Three item types:</p>'
            f'<table>{rows}</table></div>')


def render_topic(topic, boxes=True, milliy=False):
    kw = ''.join(f'<li>{w}</li>' for w in topic['keywords'])
    rem = ''.join(f'<li>{r}</li>' for r in topic['remember'])
    pieces = []
    for name, items in topic['sections']:
        if name == 'Beyond':
            pieces.append(render_notes(topic))
        pieces.append(render_questions(topic, name, items))
    if milliy:
        pieces.append(render_milliy(topic))
    body = '\n'.join(pieces)
    total = sum(len(items) for _, items in topic['sections'])
    if milliy and topic.get('milliy'):
        total += len(topic['milliy']['items'])
    boxes_html = ('<div class="boxes">'
                  f'<div class="box keywords"><div class="blabel">Key words</div>'
                  f'<ul>{kw}</ul></div>'
                  f'<div class="box remember"><div class="blabel">Remember</div>'
                  f'<ol>{rem}</ol></div></div>') if boxes else ''
    return f"""
<section class="topic">
  <div class="topichead">
    <div class="eyebrow">{mark('t-' + topic['key'])}{topic.get('unit', 'Grade 8 Algebra')}
       · Topic {topic['number']}</div>
    <h1>{topic['title']}</h1>
    <p class="sub">{topic['subtitle']}</p>
    <p class="refs">Lessons {topic['lessons']} · {topic['uz']} · {topic['cam']}
       · {total} questions</p>
  </div>
  {boxes_html}
  {body}
</section>"""


def render_topic_notes(topic):
    """A topic reduced to its heading and its methods briefing."""
    return f"""
<section class="topic notesonly">
  <div class="topichead">
    <div class="eyebrow">{mark('t-' + topic['key'])}{topic.get('unit', 'Grade 8 Algebra')}
       · Topic {topic['number']}</div>
    <h1>{topic['title']}</h1>
    <p class="refs">Lessons {topic['lessons']} · {topic['uz']} · {topic['cam']}</p>
  </div>
  {render_notes(topic, standalone=True)}
</section>"""


def render_answers(topics, milliy=False):
    out = [f'<section class="answers">'
           f'<div class="pagehead">{mark("answers")}<h2>Answers</h2>'
           f'<div class="ph-alt">Javoblar · Ответы</div></div>']
    for topic in topics:
        out.append(f'<div class="anssec"><div class="ah">Topic {topic["number"]} · '
                   f'{topic["title"]}</div>')
        for section, items in topic['sections']:
            has_sol = any(item.get('sol') for item in items)
            out.append(f'<div class="ah" style="border:0;font-size:9.2pt;'
                       f'color:{SECTION_COLOUR[section][0]}">{section} '
                       f'<span style="font-weight:400;opacity:.7">· {TIER[section]}</span></div>')
            out.append('<div class="alist' + (' sols' if has_sol else '') + '">')
            for i, item in enumerate(items, start=1):
                sol = item.get('sol')
                out.append(f'<div class="a"><span class="n">{i}</span> '
                           f'<span>{item["a"]}</span>'
                           + (f'<div class="sol">{sol}</div>' if sol else '')
                           + '</div>')
            out.append('</div>')
        ms = topic.get('milliy') if milliy else None
        if ms:
            out.append(f'<div class="ah" style="border:0;font-size:9.2pt;'
                       f'color:{SECTION_COLOUR["Milliy sertifikat"][0]}">'
                       f'Milliy sertifikat <span style="font-weight:400;opacity:.7">'
                       f'· exam format</span></div>')
            out.append('<div class="alist">')
            for i, item in enumerate(ms['items'], start=1):
                out.append(f'<div class="a"><span class="n">{i}</span> '
                           f'<span>{ms_answer(item)}</span></div>')
            out.append('</div>')
        out.append('</div>')
    out.append('<p class="footnote">Every algebraic, combinatorial and probabilistic '
               'answer in this book was checked symbolically — or by exhaustive '
               'count — with a computer algebra system before printing.</p>')
    out.append('</section>')
    return '\n'.join(out)


# ------------------------------------------------------------------ front matter

def render_title_page(title, subtitle, eyebrow, role=ROLE):
    return f"""
<section class="front titlepage">
  <div>
    <div class="tp-series">{SERIES}</div>
    <div class="tp-rule"></div>
    <h1 class="booktitle">{title}</h1>
    <p class="booksub">{subtitle}</p>
    <div class="tp-stage">{eyebrow}<br>Grade 8 · Cambridge Lower Secondary Stage 9
      · Uzbek national curriculum, lessons 1–102</div>
  </div>
  <div class="author">
    <div class="aname">{AUTHOR}</div>
    <div class="arole">{role} · {PLACE}</div>
    <div class="tp-foot"><span>{EDITION}</span><span>{YEAR}</span></div>
  </div>
</section>"""


def render_imprint(title, topics, counts, role=ROLE):
    made = ' · '.join(counts)
    return f"""
<section class="front imprint">
  <div class="ip-body">
    <div class="ip-title">{title}</div>
    <div>{SERIES} · {EDITION}</div>
    <div class="ip-rule"></div>
    <p>Written, typeset and verified by {AUTHOR}, {role.lower()}, {PLACE}.</p>
    <p>© {AUTHOR}, 2026. Teachers are welcome to print this book for their own
       classes and to copy single pages for their pupils; it may not be sold.</p>
    <p>The course follows the Uzbek national curriculum for Grade 8 algebra,
       lessons 1–102, read alongside Cambridge Lower Secondary Mathematics
       Stage 9. The four-tier structure — Focus, Practice, Challenge, Beyond —
       follows the Cambridge workbooks.</p>
    <p>This volume: {made}.</p>
    <p>Every answer that a machine can check was checked by one: each algebraic
       answer re-derived symbolically with a computer algebra system, each counting
       and probability answer confirmed by exhaustive enumeration. Mistakes that
       survive that are the author's own, and corrections are welcome.</p>
    <div class="ip-rule"></div>
    <div>Set in Source Sans and Cambria. Printed on A4.</div>
  </div>
</section>"""


def render_contents(topics, pm, extras):
    """A contents page, grouped by unit, with the page numbers read from the PDF."""
    out = [f'<section class="front">'
           f'<div class="pagehead">{mark("contents")}<h2>Contents</h2>'
           f'<div class="ph-alt">Mundarija · Содержание</div></div>'
           f'<div class="contents">']
    for label, tag in extras[0]:
        out.append(row_plain(label, pm.get(tag)))
    unit = None
    for t in topics:
        u = t.get('unit', 'Grade 8 Algebra')
        if u != unit:
            unit = u
            out.append(f'<div class="cunit">{u}</div>')
        out.append(
            f'<div class="crow"><span class="cnum">{t["number"]}</span>'
            f'<span class="ctitle">{t["title"]}</span>'
            f'<span class="cles">lessons {t["lessons"]}</span>'
            f'<span class="cfill"></span>'
            f'<span class="cpage">{page_of(pm, "t-" + t["key"])}</span></div>')
    if extras[1]:
        out.append('<div class="cunit">&nbsp;</div>')
        for label, tag in extras[1]:
            out.append(row_plain(label, pm.get(tag)))
    out.append('</div></section>')
    return '\n'.join(out)


def page_of(pm, tag):
    n = pm.get(tag)
    return n if n else '&nbsp;'


def row_plain(label, n):
    return (f'<div class="crow cplain"><span class="cnum"></span>'
            f'<span class="ctitle">{label}</span><span class="cfill"></span>'
            f'<span class="cpage">{n if n else "&nbsp;"}</span></div>')


def render_howto(kind, topics, milliy=False):
    counts = {}
    for t in topics:
        for name, items in t['sections']:
            counts[name] = max(counts.get(name, 0), len(items))
    rows = ''.join(
        f'<tr><td class="tname" style="color:{SECTION_COLOUR[s][0]}">{s}</td>'
        f'<td>{TIER[s]}</td><td>{ASKS[s]}</td>'
        f'<td class="tcount">{counts[s]} per topic</td></tr>'
        for s in ('Focus', 'Practice', 'Challenge', 'Beyond') if s in counts)
    # the methods volume has no questions in it, so the tier table would be a
    # promise it does not keep
    table = (f'<table class="tiers"><tr><th>Section</th><th>Level</th>'
             f'<th>What it asks of you</th><th>How many</th></tr>{rows}</table>'
             if rows and kind != 'methods' else '')

    if kind == 'methods':
        lede = ('This is the methods volume: the ideas behind the olympiad problems '
                'of the course, with no questions — each one named, stated in a line '
                'or two, and shown on the smallest example that makes it clear.')
        blocks = [
            ('Read it twice.',
             'Once before you start a topic, to know what tools exist; once after '
             'you have struggled with the problems, when the names finally attach '
             'to something you have felt the need of.'),
            ('It is a reference, not a course.',
             'The same pages are printed inside the full workbook, each in front of '
             'the Beyond section it serves. Here they stand together so you can '
             'look a method up, or revise the whole toolkit before a competition.'),
            ('Nothing here is proved.',
             'A method is given as the shortest statement that lets you use it. '
             'Finding out why it is true is part of the work, and often the whole '
             'of the pleasure.'),
        ]
    elif kind == 'olympiad':
        lede = ('This is the olympiad volume: the Beyond section of every topic of '
                'the year, taken out of the full workbook and set together. Fifteen '
                'problems a topic, in the order the course meets them.')
        blocks = [
            ('Work in the book.',
             'The dotted lines after each problem are the working space. They are '
                'deliberately not enough for a finished solution — use them for the '
                'idea, and a separate sheet for the write-up.'),
            ('Do not read the answer early.',
             'The answers at the back carry worked solutions. A problem you have '
             'not yet failed at teaches you nothing when you read its solution.'),
            ('Twenty minutes is not a long time.',
             'Several of these problems need an idea rather than a method. If you '
             'are stuck, the methods volume names the ideas the course expects.'),
        ]
    else:
        lede = ('This is a book to be written in. Every topic is one double-sided '
                'lesson of the course, and the questions inside it climb from the '
                'plain skill to problems that would not be out of place in a '
                'competition.')
        blocks = [
            ('The four sections.',
             'Work them in order. Focus is the skill with the method in front of '
             'you; by Beyond you are expected to supply the method yourself.'),
            ('The dotted lines are yours.',
             'They are the working space, sized for the kind of question they '
             'follow — one line for a Focus question, four for a Beyond problem. '
             'Write in pencil and do not be tidy.'),
            ('Key words and Remember.',
             'The two boxes at the top of a topic are the whole of what you must '
             'carry in your head. If a question defeats you, go back to them before '
             'you go to the answers.'),
            ('Before every Beyond section.',
             'There is a page of methods — the named ideas the olympiad problems '
             'of that topic are built on. Read it before you start them.'),
            ('Answers at the back.',
             'Short answers for Focus, Practice and Challenge; worked solutions for '
             'the Beyond problems. They are there to be checked against, not copied '
             'from.'),
        ]
    body = ''.join(f'<div class="hblock"><span class="hh">{h}</span> {t}</div>'
                   for h, t in blocks)
    if milliy:
        body += render_exam_box()
    return f"""
<section class="front howto">
  <div class="pagehead">{mark('howto')}<h2>How to use this book</h2>
    <div class="ph-alt">Kitobdan qanday foydalanish kerak</div></div>
  <p class="lede">{lede}</p>
  {table}
  {body}
</section>"""


def render_colophon(topics, counts, role=ROLE):
    return f"""
<section class="colophon">
  <div class="co-body">
    <div class="co-label">About the author</div>
    <div class="co-name">{AUTHOR}</div>
    <p>{role}, {PLACE}, and the author of this series. The Grade 8 algebra course
       has been taught in Uzbek, in Russian and in English for long enough to show
       which of its questions do the teaching and which only fill a lesson; this
       book keeps the first kind.</p>
    <p>This book began as a set of photocopies and grew into a question bank that
       checks itself: {counts[0]}, every machine-checkable answer re-derived by a
       computer algebra system each time the book is built, so that a sign lost in
       typing cannot reach a pupil's page.</p>
    <p>The series is built from that one bank: the four quarter workbooks, the
       complete year, the methods volume and the olympiad volume are the same
       questions seen through different filters.</p>
    <div class="ip-rule"></div>
    <p style="color:var(--soft)">{EDITION} · {YEAR} · {PLACE}<br>
       Corrections and better problems are welcome.</p>
  </div>
</section>"""


def main():
    import argparse
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--topics', nargs='*', help='topic keys, e.g. alg-04 alg-05')
    ap.add_argument('--title', default='Algebraic fractions and rational expressions')
    ap.add_argument('--subtitle', default=None)
    ap.add_argument('--out', default='workbook-g8-algebra',
                    help='basename for the .html (and so the .pdf)')
    ap.add_argument('--sections', nargs='*',
                    choices=['Focus', 'Practice', 'Challenge', 'Beyond'],
                    help='keep only these sections (default: all four)')
    ap.add_argument('--no-boxes', action='store_true',
                    help='leave out the key-words and remember boxes')
    ap.add_argument('--notes-only', action='store_true',
                    help='print only the methods briefings, with no questions')
    ap.add_argument('--eyebrow', default='Grade 8 · Algebra · Quarter I',
                    help='the small line above the title on the title page')
    ap.add_argument('--pagemap', help='JSON of marker → page, from pagemap.py; '
                                      'fills in the contents page numbers')
    ap.add_argument('--milliy', action='store_true',
                    help='add the Milliy sertifikat exam-format set to each topic')
    ap.add_argument('--role', default=ROLE, help="the author's line on the title page")
    ap.add_argument('--no-front', action='store_true',
                    help='no title page, contents or preface')
    ap.add_argument('--part', choices=['front', 'body', 'all'], default='all',
                    help='front = title, imprint and contents, which carry no page '
                         'number; body = the preface, topics, answers and colophon, '
                         'numbered from 1 as a reader would expect')
    opt = ap.parse_args()

    chosen = bank.select(opt.topics)
    if opt.sections:
        keep = set(opt.sections)
        chosen = [dict(t, sections=[(n, i) for n, i in t['sections'] if n in keep])
                  for t in chosen]
        bare = [t['key'] for t in chosen if not t['sections']]
        if bare:
            sys.exit('no such section in ' + ', '.join(bare))

    pm = {}
    if opt.pagemap and os.path.exists(opt.pagemap):
        with open(opt.pagemap, encoding='utf-8') as fh:
            pm = json.load(fh)

    kind = ('methods' if opt.notes_only
            else 'olympiad' if opt.sections and len(opt.sections) == 1
            else 'workbook')

    if kind == 'olympiad':
        only = opt.sections[0]
        subtitle = (f'The {TIER[only]} questions — the {only} section of every topic '
                    f'of the year, taken out of the full workbook and set together, '
                    f'with worked solutions at the back.')
    elif kind == 'methods':
        subtitle = ('The named ideas behind the olympiad problems of the course: '
                    'each stated in a line and shown on the smallest example that '
                    'makes it clear.')
    else:
        subtitle = ('A workbook to be written in. Each topic climbs through Focus, '
                    'Practice, Challenge and Beyond — easy to olympiad — with the '
                    'working space on the page and the answers at the back.')
    subtitle = opt.subtitle or subtitle

    nq = bank.count(chosen)
    nms = sum(len(t['milliy']['items']) for t in chosen if t.get('milliy'))
    if opt.milliy:
        nq += nms
    counts = [f'{len(chosen)} topics']
    if opt.notes_only:
        counts.append(f'{sum(len(t["notes"]) for t in chosen)} methods')
    else:
        counts.append(f'{nq} questions')
        counts.append(f'{nq // len(chosen)} per topic')

    if opt.notes_only:
        bare = [t for t in chosen if not t.get('notes')]
        if bare:
            sys.exit('no methods briefing for ' + ', '.join(t['key'] for t in bare))
        topics = '\n'.join(render_topic_notes(t) for t in chosen)
    else:
        topics = '\n'.join(render_topic(t, boxes=not opt.no_boxes, milliy=opt.milliy)
                            for t in chosen)

    answers = '' if opt.notes_only else render_answers(chosen, milliy=opt.milliy)
    if opt.no_front or len(chosen) < 3:
        front = body = ''
    else:
        front = '\n'.join([
            render_title_page(opt.title, subtitle, opt.eyebrow, opt.role),
            render_imprint(opt.title, chosen, counts, opt.role),
            render_contents(chosen, pm,
                            ([('How to use this book', 'howto')],
                             [('Answers', 'answers')] if answers else []))])
        body = render_howto(kind, chosen, milliy=opt.milliy)

    if opt.part == 'front':
        doc = front
    elif opt.part == 'body':
        doc = '\n'.join([body, topics, answers,
                          render_colophon(chosen, counts, opt.role) if front else ''])
    else:
        doc = '\n'.join([front, body, topics, answers,
                          render_colophon(chosen, counts, opt.role) if front else ''])

    html = f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>{opt.title} — {AUTHOR}</title>
<meta name="author" content="{AUTHOR}">
<style>{CSS}</style></head>
<body><div class="sheet">
{doc}
</div></body></html>"""
    with open(os.path.join(HERE, opt.out + '.title'), 'w', encoding='utf-8') as fh:
        fh.write(opt.title)
    out = os.path.join(HERE, opt.out + '.html')
    with open(out, 'w', encoding='utf-8') as fh:
        fh.write(html)
    note = {'front': ' · front matter', 'body': ' · body', 'all': ''}[opt.part]
    if opt.part in ('front', 'all') and not opt.no_front:
        note += ' · contents numbered' if pm else ' · contents NOT yet numbered'
    print(f'wrote {out} — {len(chosen)} topics, {nq} questions{note}')


if __name__ == '__main__':
    main()
