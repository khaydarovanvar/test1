# -*- coding: utf-8 -*-
import base64, html, os

import os
_HERE = os.path.dirname(os.path.abspath(__file__))
LOGO = open(os.path.join(_HERE, 'logo_b64.txt')).read().strip()

CSS = """
@page { size: A4; margin: 14mm 13mm 12mm 13mm; }
* { box-sizing: border-box; }
body { margin:0; font-family:"Liberation Sans","DejaVu Sans",Arial,sans-serif;
       font-size:10.4pt; color:#111; line-height:1.35; }
.page { page-break-after: always; }
.page:last-child { page-break-after: auto; }

/* ---------- header ---------- */
.hdr { display:flex; align-items:center; gap:14px; }
.hdr img { width:150px; }
.hdr .t { flex:1; text-align:right; }
.hdr .t h1 { margin:0; font-size:16.5pt; font-weight:bold; letter-spacing:.2px; }
.hdr .t .sub { margin-top:3px; font-size:12.5pt; color:#222; }
.hdr .t .sub .bar { color:#8a8a8a; margin:0 8px; }
.rule { border-bottom:2.2px solid #0d6b3f; margin:9px 0 16px; }

/* ---------- question grid ---------- */
.grid { display:grid; grid-template-columns:1fr 1fr; gap:11px 14px; }
.q { border:1px solid #111; padding:8px 10px 9px; break-inside:avoid; }
.q .stem { font-weight:bold; margin:0 0 5px; }
.q ol { list-style:none; margin:0; padding:0; }
.q ol li { margin:1.5px 0; display:flex; align-items:flex-start; gap:4px; }
.q ol li.mid { align-items:center; }
.q ol li b { flex:0 0 auto; min-width:16px; }
.q ol li .ot { flex:1 1 auto; }
sup { font-size:.72em; vertical-align:super; }
sub { font-size:.72em; vertical-align:sub; }
.frac { display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;
         line-height:1.15; }
.frac .n { display:block; border-bottom:1px solid #111; padding:0 4px; }
.frac .d { display:block; padding:0 4px; }

/* ---------- English section ---------- */
.parthead { font-weight:bold; text-decoration:underline; margin:0 0 8px; font-size:11pt; }
.passage { border:1px solid #111; padding:9px 11px; margin-bottom:14px; }
.passage h3 { margin:0 0 6px; font-size:10.8pt; }
.passage p { margin:0 0 7px; text-align:left; }
.passage p:last-child { margin-bottom:0; }
.gap { height:12px; }

/* ---------- cover ---------- */
.cover-hdr { display:flex; align-items:center; gap:18px; }
.cover-hdr img { width:150px; }
.cover-hdr h1 { margin:0; font-size:19pt; font-weight:bold; }
.cover-hdr .s { margin-top:4px; font-size:11.5pt; letter-spacing:2.5px; font-weight:bold; color:#333; }
.thick { border-bottom:3px solid #111; margin:14px 0 0; }
table.idbox { width:100%; border-collapse:collapse; margin-bottom:20px; }
table.idbox td { border:1px solid #111; padding:9px 10px; font-size:10.5pt; }
table.idbox td.lbl { font-weight:bold; letter-spacing:1px; width:150px; }
table.idbox td.grade { font-size:15pt; font-weight:bold; text-align:center; width:62px; }
.panel { background:#f0f0f0; padding:12px 14px 14px; }
.panel .cap { background:#111; color:#fff; text-align:center; font-weight:bold;
              letter-spacing:3px; padding:5px 0; font-size:10.5pt; margin-bottom:10px; }
.panel ol { margin:0; padding:0; list-style:none; }
.panel ol li { margin:0 0 8px; padding-left:20px; text-indent:-20px; }
.note { background:#111; color:#fff; padding:9px 11px; font-weight:bold; margin-top:12px; }
.sectitle { text-align:center; font-weight:bold; letter-spacing:3px; font-size:11.5pt;
            margin:20px 0 10px; }
.score { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
.score div { background:#111; color:#fff; text-align:center; padding:11px 6px 13px; }
.score .n { letter-spacing:3px; font-weight:bold; font-size:12.5pt; }
.score .v { font-size:17pt; font-weight:bold; margin-top:6px; }
.sample { text-align:center; }
.sample table.mark { display:inline-table; }
table.mark { border-collapse:collapse; font-size:8.5pt; text-align:center; }
table.mark th { background:#111; color:#fff; padding:3px 6px; font-size:8.5pt; letter-spacing:1px; }
table.mark td { border:1px solid #111; padding:3px 12px; text-align:center; }
table.mark td.res { padding:3px 8px; font-size:8pt; }
.cap2 { text-align:center; font-weight:bold; font-size:10pt; margin-bottom:5px; }
.footer { background:#111; color:#fff; text-align:center; font-weight:bold;
          letter-spacing:4px; padding:9px 0; font-size:12pt; margin-top:24px; }
"""

def header(sub):
    return f"""<div class="hdr"><img src="data:image/png;base64,{LOGO}">
<div class="t"><h1>ELLIPSE INTERNATIONAL SCHOOL</h1>
<div class="sub">{sub}</div></div></div><div class="rule"></div>"""

def q(num, stem, opts):
    lis = ""
    for L, t in zip("ABCDE", opts):
        # a stacked fraction is taller than one line, so centre its label;
        # every other option keeps the label on the first line when the text wraps
        cls = ' class="mid"' if "frac" in t else ""
        lis += f'<li{cls}><b>{L})</b><span class="ot">{t}</span></li>'
    return f'<div class="q"><p class="stem">{num}. {stem}</p><ol>{lis}</ol></div>'

S2, S3, S4 = "<sup>2</sup>", "<sup>3</sup>", "<sup>4</sup>"


def frac(n, d):
    """Vertical fraction, e.g. frac('x - 2', 'x + 2')."""
    return f'<span class="frac"><span class="n">{n}</span><span class="d">{d}</span></span>'

def mixed(whole, n, d):
    """Mixed number, e.g. mixed(2, 1, 4) -> 2 1/4."""
    return f'{whole}&thinsp;{frac(n, d)}'

S2, S3, S4 = "<sup>2</sup>", "<sup>3</sup>", "<sup>4</sup>"

# ---------------- cover ----------------
def circle(fill):
    if fill == "o":
        return '<svg width="11" height="11"><circle cx="5.5" cy="5.5" r="4.6" fill="none" stroke="#111" stroke-width="1"/></svg>'
    if fill == "f":
        return '<svg width="11" height="11"><circle cx="5.5" cy="5.5" r="4.6" fill="#111"/></svg>'
    return '<svg width="11" height="11"><path d="M1.4 1.4 L9.6 9.6 M9.6 1.4 L1.4 9.6" stroke="#111" stroke-width="1.6"/></svg>'

def letter_circle(l):
    return (f'<svg width="13" height="13"><circle cx="6.5" cy="6.5" r="5.6" fill="none" '
            f'stroke="#111" stroke-width="1"/><text x="6.5" y="9.4" font-size="7" '
            f'text-anchor="middle" font-family="Liberation Sans">{l}</text></svg>')

def sample_table():
    rows = [
        (["o","o","o","o","o","f"], "correct"),
        (["o","o","o","o","o","x"], "wrong"),
        (["o","o","o","o","o","x"], "wrong"),
        (["o","o","o","o","o","x"], "wrong"),
        (["f","o","o","o","o","f"], "wrong"),
    ]
    head = "".join(f"<td>{letter_circle(l)}</td>" for l in "ABCDE")
    body = ""
    for cells, res in rows:
        body += "<tr>" + "".join(f"<td>{circle(c)}</td>" for c in cells) + f'<td class="res">{res}</td></tr>'
    return f"""<table class="mark"><tr><th colspan="7">ANSWER OPTIONS (A, B, C, D, E)</th></tr>
<tr>{head}<td></td><td class="res">correct / wrong</td></tr>{body}</table>"""


def cover_page(grade, n_total, n_math, first_eng, last_eng):
    return f"""<div class="page">
<div class="cover-hdr"><img src="data:image/png;base64,{LOGO}">
<div><h1>ATTENTION, EXAM PARTICIPANTS!</h1>
<div class="s">ELLIPSE INTERNATIONAL SCHOOL</div></div></div>
<div class="thick"></div>
<table class="idbox">
<tr><td class="lbl">SURNAME</td><td colspan="2"></td></tr>
<tr><td class="lbl">NAME</td><td colspan="2"></td></tr>
<tr><td class="lbl">GRADE</td><td class="grade">{grade}</td><td></td></tr>
</table>
<div class="panel">
<div class="cap">INSTRUCTIONS</div>
<ol>
<li><b>1.</b>&nbsp; Write your <b>surname and name</b> on the answer sheet.</li>
<li><b>2.</b>&nbsp; <b>80 minutes</b> are given for <b>{n_total} questions</b>.</li>
<li><b>3.</b>&nbsp; For each question choose <b>only one correct answer</b> and <b>fill in the circle
completely with an ordinary pencil</b>. An incomplete mark or a mark outside the circle is not counted.</li>
<li><b>4.</b>&nbsp; Erase mistakes with a <b>soft eraser</b> without damaging the paper.</li>
<li><b>5.</b>&nbsp; <b>Answer the easy questions first</b> and come back to the difficult ones later.</li>
</ol>
<div class="note">NOTE! The paper consists of two sections: Mathematics (questions 1&ndash;{n_math})
and English (questions {first_eng}&ndash;{last_eng}).</div>
</div>
<div class="sectitle">MARKING SCHEME</div>
<div class="score">
<div><div class="n">MATHEMATICS</div><div class="v">2.5 points</div></div>
<div><div class="n">ENGLISH</div><div class="v">1.5 points</div></div>
</div>
<div class="sectitle">SAMPLE OF FILLING IN</div>
<div class="sample">{sample_table()}</div>
<div class="footer">GOOD LUCK!</div>
</div>"""


def build(grade, math, eng, passage_title, passage_paras, math_split,
          part_ranges, out_html):
    """Render one grade's English-only paper to `out_html`.

    math / eng    : lists of (stem, [A..E]) tuples, 20 questions each
    math_split    : tuple of (start, count) pairs, one per math page
    part_ranges   : list of (heading, first_q, last_q, include_passage)
    """
    n_math, n_eng = len(math), len(eng)
    first_eng = n_math + 1
    last_eng = n_math + n_eng

    def q_math(i):
        s, o = math[i]
        return q(i + 1, s, o)

    def q_eng(n):
        s, o = eng[n - first_eng]
        return q(n, s, o)

    paras = "".join(f"<p>{p}</p>" for p in passage_paras)
    passage = (f'<div class="passage"><h3>{passage_title}</h3>{paras}</div>')

    cover = cover_page(grade, n_math + n_eng, n_math, first_eng, last_eng)

    mh = f'Mathematics <span class="bar">|</span> Grade {grade}'
    math_pages = ""
    for start, n in math_split:
        boxes = "".join(q_math(i) for i in range(start, start + n))
        math_pages += (f'<div class="page">{header(mh)}'
                       f'<div class="grid">{boxes}</div></div>')

    eh = f'English <span class="bar">|</span> Grade {grade}'
    eng_pages = ""
    for heading, lo, hi, with_passage in part_ranges:
        boxes = "".join(q_eng(n) for n in range(lo, hi + 1))
        eng_pages += (f'<div class="page">{header(eh)}'
                      f'<div class="parthead">{heading}</div>'
                      f'{passage if with_passage else ""}'
                      f'<div class="grid">{boxes}</div></div>')

    doc = (f'<!DOCTYPE html><html><head><meta charset="utf-8">'
           f'<title>Ellipse International School &mdash; Grade {grade} Exam (English)</title>'
           f'<style>{CSS}</style></head><body>{cover}{math_pages}{eng_pages}</body></html>')
    open(out_html, 'w').write(doc)
    return out_html
