#!/usr/bin/env python3
"""Build the Grade 8 algebra workbook as a printable HTML page.

The shape follows a Cambridge Lower Secondary workbook: each topic opens with
its key words and a short reminder of the method, then the questions climb
through Focus, Practice and Challenge, with a fourth olympiad section. Answers,
with solutions for the hard ones, are at the back.

    python3 build-workbook.py            # writes workbook-g8-algebra.html
    node render-workbook.mjs             # turns it into a PDF
"""

import os
import sys
from datetime import date

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import questions as bank

HERE = os.path.dirname(os.path.abspath(__file__))

SECTION_COLOUR = {
    'Focus': ('#0F6E8C', '#E8F3F7'),
    'Practice': ('#8A5A00', '#FBF2E2'),
    'Challenge': ('#6B3FA0', '#F2EDF9'),
    'Beyond': ('#9B2C2C', '#FBEDED'),
}
# how much blank space a question of each kind needs
LINES = {'Focus': 1, 'Practice': 2, 'Challenge': 3, 'Beyond': 6}
# the Cambridge section names, against the plain difficulty they stand for
TIER = {'Focus': 'easy', 'Practice': 'medium', 'Challenge': 'hard',
        'Beyond': 'very hard'}

CSS = """
:root { --ink:#17202A; --soft:#5A6775; --rule:#C9D2DA; --page:#FFFFFF; }
* { box-sizing:border-box; }
html, body { margin:0; padding:0; background:var(--page); color:var(--ink);
  font-family:"Source Sans 3","Segoe UI",system-ui,-apple-system,sans-serif;
  font-size:10.6pt; line-height:1.45; }
.sheet { padding:0; }

h1 { font-size:20pt; margin:0 0 2mm; letter-spacing:-.01em; }
h2 { font-size:13pt; margin:0; }
.m { font-family:"Cambria","Georgia",serif; white-space:nowrap; }

/* stacked fractions */
.frac { display:inline-block; vertical-align:-0.55em; text-align:center;
  margin:0 .18em; font-family:"Cambria","Georgia",serif; }
.frac .num { display:block; border-bottom:1.2px solid currentColor; padding:0 .34em .05em; }
.frac .den { display:block; padding:.05em .34em 0; }
.frac .frac { font-size:.92em; }

/* ---------- topic opener ---------- */
.topic { page-break-before:always; }
.topic:first-of-type { page-break-before:avoid; }
.topichead { border-top:3px solid var(--ink); padding-top:3mm; margin-bottom:4mm; }
.eyebrow { font-size:8.6pt; letter-spacing:.14em; text-transform:uppercase;
  color:var(--soft); margin-bottom:1.5mm; }
.sub { color:var(--soft); font-size:10pt; margin:1mm 0 0; }
.refs { font-size:8.8pt; color:var(--soft); margin-top:1.5mm; }

.boxes { display:flex; gap:4mm; margin:4mm 0 5mm; }
.box { border:1px solid var(--rule); border-radius:2mm; padding:3mm 3.5mm; }
.box .blabel { font-size:8.4pt; letter-spacing:.12em; text-transform:uppercase;
  color:var(--soft); margin-bottom:1.5mm; }
.keywords { flex:0 0 46%; background:#F7F9FB; }
.keywords ul { margin:0; padding-left:4.5mm; }
.keywords li { margin:.6mm 0; }
.remember { flex:1; }
.remember ol { margin:0; padding-left:4.5mm; }
.remember li { margin:1mm 0; }

/* ---------- exercise sections ---------- */
.section { margin:0 0 3mm; page-break-inside:avoid; }
.sechead { display:flex; align-items:baseline; gap:3mm; padding:2mm 3mm;
  border-radius:1.5mm; margin:5mm 0 3mm; page-break-after:avoid; break-after:avoid; }
.sechead .name { font-size:12pt; font-weight:700; }
.sechead .tier { font-size:8.4pt; letter-spacing:.1em; text-transform:uppercase;
  border:1px solid currentColor; border-radius:1mm; padding:.3mm 1.5mm; opacity:.75;
  white-space:nowrap; }
.sechead .count { font-size:9pt; opacity:.8; white-space:nowrap; }
.sechead .blurb { font-size:9pt; margin-left:auto; opacity:.85; text-align:right; }

.q { display:flex; gap:3mm; page-break-inside:avoid; margin:0 0 2.5mm; }
.qn { flex:0 0 7mm; height:7mm; border-radius:50%; border:1.2px solid var(--rule);
  display:flex; align-items:center; justify-content:center;
  font-size:9pt; font-weight:700; color:var(--soft); }
.qbody { flex:1; padding-top:.7mm; }
.qtext { }
.lines { margin-top:1.5mm; }
.lines div { border-bottom:1px dotted #AEB9C4; height:6.4mm; }
.beyond .lines div { height:7.2mm; }

/* ---------- answers ---------- */
.answers { page-break-before:always; }
.answers h2 { margin:0 0 3mm; }
.anssec { margin:0 0 4mm; page-break-inside:avoid; }
.anssec .ah { font-weight:700; font-size:10pt; margin:3mm 0 1.5mm;
  padding-bottom:1mm; border-bottom:1px solid var(--rule); }
.alist { columns:2; column-gap:7mm; }
.alist .a { break-inside:avoid; margin:0 0 1.6mm; font-size:9.6pt; display:flex; gap:2mm; }
.alist .a .n { color:var(--soft); font-weight:700; min-width:5mm; }
.sols .a { display:block; margin:0 0 2.6mm; font-size:9.6pt; }
.sols .a .n { color:var(--soft); font-weight:700; }
.sols .sol { color:var(--soft); margin-top:.8mm; }
.sols { columns:1; }

.footnote { color:var(--soft); font-size:8.6pt; margin-top:4mm;
  border-top:1px solid var(--rule); padding-top:2mm; }
"""


def lines(n):
    return '<div class="lines">' + '<div></div>' * n + '</div>'


def render_questions(section, items):
    ink, tint = SECTION_COLOUR[section]
    out = [f'<div class="sechead" style="background:{tint};color:{ink}">'
           f'<span class="name">{section}</span>'
           f'<span class="tier">{TIER[section]}</span>'
           f'<span class="count">{len(items)} questions</span>'
           f'<span class="blurb">{bank.SECTION_BLURB[section]}</span></div>']
    klass = ' beyond' if section == 'Beyond' else ''
    for i, item in enumerate(items, start=1):
        out.append(
            f'<div class="q{klass}"><div class="qn">{i}</div>'
            f'<div class="qbody"><div class="qtext">{item["q"]}</div>'
            f'{lines(LINES[section])}</div></div>')
    return '\n'.join(out)


def render_topic(topic):
    kw = ''.join(f'<li>{w}</li>' for w in topic['keywords'])
    rem = ''.join(f'<li>{r}</li>' for r in topic['remember'])
    body = '\n'.join(render_questions(name, items) for name, items in topic['sections'])
    total = sum(len(items) for _, items in topic['sections'])
    return f"""
<section class="topic">
  <div class="topichead">
    <div class="eyebrow">Unit 1 · Algebraic fractions · Topic {topic['number']}</div>
    <h1>{topic['title']}</h1>
    <p class="sub">{topic['subtitle']}</p>
    <p class="refs">Lessons {topic['lessons']} · {topic['uz']} · {topic['cam']}
       · {total} questions</p>
  </div>
  <div class="boxes">
    <div class="box keywords"><div class="blabel">Key words</div><ul>{kw}</ul></div>
    <div class="box remember"><div class="blabel">Remember</div><ol>{rem}</ol></div>
  </div>
  {body}
</section>"""


def render_answers():
    out = ['<section class="answers"><h2>Answers</h2>']
    for topic in bank.TOPICS:
        out.append(f'<div class="anssec"><div class="ah">Topic {topic["number"]} · '
                   f'{topic["title"]}</div>')
        for section, items in topic['sections']:
            has_sol = any(item.get('sol') for item in items)
            out.append(f'<div class="ah" style="border:0;font-size:9.4pt;'
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
        out.append('</div>')
    out.append('<p class="footnote">Every algebraic answer in this book was checked '
               'symbolically with a computer algebra system before printing.</p>')
    out.append('</section>')
    return '\n'.join(out)


def main():
    topics = '\n'.join(render_topic(t) for t in bank.TOPICS)
    html = f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>Grade 8 Algebra Workbook — Algebraic fractions</title>
<style>{CSS}</style></head>
<body><div class="sheet">
{topics}
{render_answers()}
</div></body></html>"""
    out = os.path.join(HERE, 'workbook-g8-algebra.html')
    with open(out, 'w', encoding='utf-8') as fh:
        fh.write(html)
    n = sum(len(i) for t in bank.TOPICS for _, i in t['sections'])
    print(f'wrote {out} — {len(bank.TOPICS)} topics, {n} questions')


if __name__ == '__main__':
    main()
