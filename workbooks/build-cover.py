#!/usr/bin/env python3
"""Typeset the front and back covers of a book in the Grade 8 Algebra series.

Covers are their own single-page, full-bleed, zero-margin documents, so they
carry no running footer and no page number. `build-all.sh` renders them and
binds them onto the body with pdfunite.

    python3 build-cover.py --out book --title '…' --volume 'Volume I'
"""

import argparse
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bank

HERE = os.path.dirname(os.path.abspath(__file__))

AUTHOR = 'Anvarbek Khaydarov'
ROLE = 'Mathematics teacher'
SCHOOL = 'Ellipse International School'
COUNTRY = 'Uzbekistan'
YEAR = 'Academic year 2026–2027'
EDITION = 'First edition'
SERIES = 'The Grade 8 Algebra Series'

TIERS = {'Focus': 'easy', 'Practice': 'medium', 'Challenge': 'hard',
         'Beyond': 'olympiad'}

SIBLINGS = [
    ('Quarter I', 'Algebraic fractions and rational expressions'),
    ('Quarter II', 'Roots, rational exponents and inequalities'),
    ('Quarter III', 'Quadratic equations'),
    ('Quarter IV', 'Data, counting, chance and the annual review'),
    ('The complete year', 'All seven units in one volume'),
    ('Methods', 'The olympiad toolkit, without the questions'),
    ('Olympiad', 'Every Beyond problem of the year'),
]


def curves():
    """The motif: a parabola and a rectangular hyperbola on a faint grid —
    the two graphs the course actually draws, in Unit 5 and Unit 1."""
    grid = []
    for x in range(10, 200, 14):
        grid.append(f'<line x1="{x}" y1="4" x2="{x}" y2="136"/>')
    for y in range(8, 140, 14):
        grid.append(f'<line x1="4" y1="{y}" x2="196" y2="{y}"/>')

    def poly(pts):
        return ' '.join(f'{x:.1f},{y:.1f}' for x, y in pts)

    para = [(100 + t, 92 - 0.0135 * t * t) for t in range(-74, 75, 2)]
    para = [(x, y) for x, y in para if 2 <= y <= 138]
    hyp_r = [(100 + t, 92 - 420.0 / t) for t in range(9, 92)]
    hyp_r = [(x, y) for x, y in hyp_r if 2 <= y <= 138]
    hyp_l = [(100 - t, 92 + 420.0 / t) for t in range(9, 92)]
    hyp_l = [(x, y) for x, y in hyp_l if 2 <= y <= 138]
    dots = ''.join(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="1.5"/>'
                   for x, y in para[::14])
    return f"""
<svg class="motif" viewBox="0 0 200 140" preserveAspectRatio="xMidYMid meet">
  <g class="grid">{''.join(grid)}</g>
  <g class="axes"><line x1="6" y1="92" x2="194" y2="92"/>
    <line x1="100" y1="4" x2="100" y2="136"/></g>
  <polyline class="curve" points="{poly(para)}"/>
  <polyline class="curve thin" points="{poly(hyp_r)}"/>
  <polyline class="curve thin" points="{poly(hyp_l)}"/>
  <g class="dots">{dots}</g>
</svg>"""


CSS = """
@page { size:A4; margin:0; }
* { box-sizing:border-box; }
html, body { margin:0; padding:0;
  font-family:"Source Sans 3","Segoe UI",system-ui,-apple-system,sans-serif;
  -webkit-print-color-adjust:exact; print-color-adjust:exact; }
.cover { position:relative; width:210mm; height:297mm; overflow:hidden;
  display:flex; flex-direction:column; padding:17mm 17mm 0;
  color:#FFFFFF; background:#0C2233;
  background-image:linear-gradient(158deg, #16415C 0%, #0E2C41 38%, #0A2030 70%,
    #071722 100%); }
.cover.back { page-break-before:always; }

.topline { display:flex; justify-content:space-between; align-items:baseline;
  font-size:8.6pt; letter-spacing:.2em; text-transform:uppercase; }
.topline .series { color:var(--accent); font-weight:700; }
.topline .grade { color:rgba(255,255,255,.62); letter-spacing:.16em; }
.hair { border-top:1px solid rgba(255,255,255,.28); margin:3mm 0 0; position:relative; }
.hair::after { content:""; position:absolute; top:-1px; left:0; width:34mm;
  border-top:2.4px solid var(--accent); }

.titleblock { margin-top:22mm; position:relative; z-index:2; }
.vol { font-size:9.4pt; letter-spacing:.22em; text-transform:uppercase;
  color:rgba(255,255,255,.60); margin-bottom:5mm; }
h1 { font-family:"Cambria","Georgia",serif; font-weight:700;
  font-size:39pt; line-height:1.06; letter-spacing:-.022em;
  margin:0; max-width:152mm; text-wrap:balance; }
.rule { width:26mm; border-top:3px solid var(--accent); margin:7mm 0 5mm; }
.sub { font-size:12.2pt; line-height:1.4; color:rgba(255,255,255,.78);
  max-width:124mm; margin:0; }

.motifwrap { position:absolute; right:-12mm; top:104mm; width:180mm; height:124mm;
  z-index:1; opacity:.5; }
svg.motif { width:100%; height:100%; }
svg.motif .grid line { stroke:rgba(255,255,255,.085); stroke-width:.4; }
svg.motif .axes line { stroke:rgba(255,255,255,.34); stroke-width:.7; }
svg.motif .curve { fill:none; stroke:var(--accent); stroke-width:1.5;
  stroke-linecap:round; }
svg.motif .curve.thin { stroke:rgba(255,255,255,.52); stroke-width:1.1; }
svg.motif .dots circle { fill:var(--accent); }

.foot { margin-top:auto; position:relative; z-index:2; padding-bottom:9mm; }
.foot .byline { font-size:8.6pt; letter-spacing:.2em; text-transform:uppercase;
  color:rgba(255,255,255,.52); margin-bottom:2.5mm; }
.foot .aname { font-family:"Cambria","Georgia",serif; font-size:20pt;
  letter-spacing:-.01em; }
.foot .arole { font-size:10.4pt; color:rgba(255,255,255,.70); margin-top:1.4mm; }

.band { position:absolute; left:0; right:0; bottom:0; height:14mm;
  background:var(--accent); color:#06151F; display:flex; align-items:center;
  justify-content:space-between; padding:0 17mm; z-index:3; white-space:nowrap;
  font-size:7.8pt; letter-spacing:.13em; text-transform:uppercase; font-weight:700; }
.band .right { font-weight:600; letter-spacing:.09em; opacity:.75; }

/* ---------- back cover ---------- */
.back .blurb { margin-top:16mm; max-width:150mm; position:relative; z-index:2; }
.back .blurb .lead { font-family:"Cambria","Georgia",serif; font-size:15pt;
  line-height:1.34; margin:0 0 6mm; }
.back .blurb p { font-size:10.6pt; line-height:1.48; color:rgba(255,255,255,.80);
  margin:0 0 3.4mm; }
.back .inside { margin-top:8mm; display:flex; gap:9mm; position:relative; z-index:2; }
.back .panel { flex:1; border-top:2px solid var(--accent); padding-top:2.6mm; }
.back .panel .plabel { font-size:8.4pt; letter-spacing:.18em; text-transform:uppercase;
  color:var(--accent); font-weight:700; margin-bottom:2.4mm; }
.back .panel ul { margin:0; padding:0; list-style:none; font-size:9.4pt;
  color:rgba(255,255,255,.82); }
.back .panel li { padding:1.1mm 0; border-bottom:1px solid rgba(255,255,255,.12);
  display:flex; justify-content:space-between; gap:4mm; }
.back .panel li span:first-child { white-space:nowrap; flex:0 0 auto; }
.back .panel li span:last-child { color:rgba(255,255,255,.58); text-align:right; }
.back .legal { margin-top:auto; padding-bottom:20mm; font-size:8.4pt;
  color:rgba(255,255,255,.62); line-height:1.5; position:relative; z-index:2;
  max-width:154mm; }
.back .legal strong { color:#FFFFFF; }
.back .motifwrap { top:auto; bottom:46mm; right:-30mm; width:142mm; height:96mm;
  opacity:.14; }
"""


def head(title, accent):
    return (f'<!doctype html>\n<html lang="en"><head><meta charset="utf-8">'
            f'<title>{title}</title><style>:root{{--accent:{accent};}}{CSS}</style>'
            f'</head><body>')


def front(opt):
    return f"""{head(opt.title + ' — cover', opt.accent)}
<div class="cover">
  <div class="topline"><span class="series">{SERIES}</span>
    <span class="grade">Grade 8 · Stage 9</span></div>
  <div class="hair"></div>
  <div class="titleblock">
    <div class="vol">{opt.volume}</div>
    <h1>{opt.title}</h1>
    <div class="rule"></div>
    <p class="sub">{opt.sub}</p>
  </div>
  <div class="motifwrap">{curves()}</div>
  <div class="foot">
    <div class="byline">Written and verified by</div>
    <div class="aname">{AUTHOR}</div>
    <div class="arole">{ROLE} · {SCHOOL}, {COUNTRY}</div>
  </div>
  <div class="band"><span>{SCHOOL} · Mathematics</span>
    <span class="right">{EDITION} · {YEAR}</span></div>
</div></body></html>"""


def inside_facts(opt):
    """What this volume actually contains, read off the question bank."""
    topics = bank.select(opt.topics)
    keep = set(opt.sections) if opt.sections else None
    lo = topics[0]['lessons'].split('\u2013')[0]
    hi = topics[-1]['lessons'].split('\u2013')[-1]
    facts = [('Topics', str(len(topics))),
             ('Lessons of the course', f'{lo}\u2013{hi}')]
    if opt.notes_only:
        facts.append(('Named methods', str(sum(len(t['notes']) for t in topics))))
    else:
        tiers = {}
        for t in topics:
            for name, items in t['sections']:
                if keep and name not in keep:
                    continue
                tiers.setdefault(name, []).append(len(items))
        total = sum(sum(v) for v in tiers.values())
        facts.append(('Questions', f'{total:,}'.replace(',', '\u202f')))
        for name in ('Focus', 'Practice', 'Challenge', 'Beyond'):
            if name in tiers:
                n = max(tiers[name])
                facts.append((f'{name} \u00b7 {TIERS[name]}', f'{n} per topic'))
        facts.append(('Methods briefings',
                      str(sum(1 for t in topics if t.get('notes')))))
    if opt.pages:
        facts.append(('Pages', str(opt.pages)))
    return facts


def back(opt):
    rows = ''.join(f'<li><span>{a}</span><span>{b}</span></li>'
                   for a, b in inside_facts(opt))
    sibs = ''.join(f'<li><span>{a}</span><span>{b}</span></li>'
                   for a, b in SIBLINGS if a.lower() != opt.volume.lower())
    return f"""{head(opt.title + ' — back cover', opt.accent)}
<div class="cover back">
  <div class="topline"><span class="series">{SERIES}</span>
    <span class="grade">{opt.volume}</span></div>
  <div class="hair"></div>
  <div class="blurb">
    <p class="lead">{opt.lead}</p>
    <p>{opt.blurb}</p>
    <p>Every answer a machine can check was checked by one: each algebraic answer
       re-derived symbolically by a computer algebra system, each counting and
       probability answer confirmed by exhaustive enumeration — every time the
       book is rebuilt.</p>
  </div>
  <div class="inside">
    <div class="panel"><div class="plabel">In this volume</div><ul>{rows}</ul></div>
    <div class="panel"><div class="plabel">Also in the series</div><ul>{sibs}</ul></div>
  </div>
  <div class="motifwrap">{curves()}</div>
  <div class="legal">
    <strong>{AUTHOR}</strong> · {ROLE}, {SCHOOL}, {COUNTRY}<br>
    © {AUTHOR}, 2026. {EDITION} · {YEAR}. Teachers may print this book for their
    own classes and copy single pages for their pupils; it may not be sold.<br>
    Follows the Uzbek national curriculum for Grade 8 algebra, lessons 1–102,
    read alongside Cambridge Lower Secondary Mathematics Stage 9.
  </div>
  <div class="band"><span>{SCHOOL} · Mathematics</span>
    <span class="right">Not for sale</span></div>
</div></body></html>"""


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--out', required=True, help='basename; writes <out>-cover.html'
                                                 ' and <out>-back.html')
    ap.add_argument('--title', required=True)
    ap.add_argument('--sub', required=True)
    ap.add_argument('--volume', required=True)
    ap.add_argument('--accent', default='#E0B457')
    ap.add_argument('--lead', required=True, help='the big line on the back cover')
    ap.add_argument('--blurb', required=True)
    ap.add_argument('--topics', nargs='*', help='topic keys, for the facts panel')
    ap.add_argument('--sections', nargs='*', help='sections this volume keeps')
    ap.add_argument('--notes-only', action='store_true')
    ap.add_argument('--pages', help='final page count, printed on the back cover')
    opt = ap.parse_args()
    for name, html in ((opt.out + '-cover', front(opt)), (opt.out + '-back', back(opt))):
        with open(os.path.join(HERE, name + '.html'), 'w', encoding='utf-8') as fh:
            fh.write(html)
    print(f'wrote {opt.out}-cover.html and {opt.out}-back.html')


if __name__ == '__main__':
    main()
