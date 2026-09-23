# -*- coding: utf-8 -*-
"""Render a test into a question paper and a mark scheme.

    python3 build-test.py test-g8-01-data.py Grade8-Algebra-Test1

Writes <name>-QP.pdf, <name>-MS.pdf and <name>.html. The two PDFs are separate
so the paper can be printed without the answers going with it.
"""
import html as H
import importlib.util, json, pathlib, re, subprocess, sys

HERE = pathlib.Path(__file__).resolve().parent
DATA = sys.argv[1] if len(sys.argv) > 1 else 'test-g8-01-data.py'
STEM = sys.argv[2] if len(sys.argv) > 2 else 'Grade8-Algebra-Test1'

spec = importlib.util.spec_from_file_location('paper', HERE / DATA)
D = importlib.util.module_from_spec(spec); spec.loader.exec_module(D)

FONTS = (HERE / 'fonts-inline.css').read_text(encoding='utf-8')

# ---- the little maths notation used in the data file ------------------------
FRAC = re.compile(r'\[([^\[\]]+)\]\s*/\s*\[([^\[\]]+)\]')
WJ = '⁠'          # word joiner: keeps a fraction glued to what follows

def sup(s):
    # an exponent is a run of digits or a single letter; \w+ would be greedy and
    # swallow the letter that follows, turning a^3b^2 into a to the power of 3b
    return re.sub(r'\^(\d+|[A-Za-z])', r'<sup>\1</sup>', s)

def maths(s):
    s = FRAC.sub(lambda m: '%s<span class="frac"><span>%s</span><span>%s</span></span>%s'
                 % (WJ, sup(m.group(1)), sup(m.group(2)), WJ), s)
    return sup(s)

def rich(s):
    """{...} becomes a maths span; everything outside it is left as authored HTML."""
    return re.sub(r'\{([^{}]*)\}', lambda m: '<span class="m">%s</span>' % maths(m.group(1)), s)


# ---- page furniture ---------------------------------------------------------
def head(title):
    return ('<!doctype html><html lang="en"><head><meta charset="utf-8">'
            '<title>%s</title><style>%s</style><style>%s</style></head><body>'
            % (H.escape(title), FONTS, CSS))

NQ = sum(len(s['items']) for s in D.SECTIONS)

def masthead(kind):
    """The paper keeps this to four lines; the textbook references are of use to
    whoever is marking, not to a student with 40 minutes, so they go on the
    mark scheme instead."""
    ms = kind == 'Mark scheme'
    rules = ''.join('<li>%s</li>' % rich(r) for r in D.RULES)
    covers = ('<ul class="covers">%s</ul>' % ''.join(
        '<li><span class="ls">%s</span><span class="tt">%s</span>'
        '<span class="rf">%s</span></li>' % c for c in D.COVERS)) if ms else (
        '<p class="covers-line">%s</p>' % D.COVERS_SHORT)
    return ('<header class="mast">'
            '<div class="topline"><p class="who">Anvarbek Khaydarov · Mathematics</p>'
            '<p class="kind %s">%s</p></div>'
            '<h1>%s <span class="grade">%s</span></h1>'
            '<div class="meta"><span><b>%d</b> minutes</span>'
            '<span><b>%d</b> marks</span>'
            '<span>%d questions + bonus</span><span>No calculator</span></div>'
            '%s<ul class="rules">%s</ul>'
            '</header>'
            % ('ms' if ms else 'qp', kind, D.TITLE, D.GRADE,
               D.DURATION, D.TOTAL, NQ, covers, rules))

NAMEBAR = ('<div class="namebar"><span>Name <i></i></span><span>Class <i></i></span>'
           '<span>Date <i></i></span><span class="score">Mark <i></i> / %d</span></div>'
           % D.TOTAL)


def mark_tag(it):
    """A question split into parts already carries a mark per part; repeating
    the total beside them reads like a contradiction."""
    if 'class="mk"' in it['q']:
        return ''
    return '<span class="mk">[%d]</span>' % it['marks']


def section_head(s):
    return ('<div class="sh"><span class="letter">%s</span>'
            '<div><h2>Section %s · %s</h2><p class="lead">%s</p></div>'
            '<span class="chip c-%s">%s</span>'
            '<span class="tot">%d marks</span></div>'
            % (s['letter'], s['letter'], s['title'], rich(s['lead']),
               s['level'], {'easy': 'Easy', 'med': 'Medium', 'hard': 'Hard'}[s['level']],
               sum(i['marks'] for i in s['items'])))


def question_paper():
    out = [head(D.GRADE + ' · ' + D.TITLE), masthead('Question paper'), NAMEBAR]
    n = 0
    for s in D.SECTIONS:
        out.append('<section class="sec">' + section_head(s))
        out.append('<ol class="qs%s" style="--space:%dpx">'
                   % (' two' if s['cols'] == 2 else '', s['space']))
        for it in s['items']:
            n += 1
            mark = ('' if s['cols'] == 2 else mark_tag(it))
            out.append('<li><span class="qn">%d</span><div class="qb">%s %s%s</div></li>'
                       % (n, rich(it['q']), mark,
                          '<span class="ansline"></span>' if s['cols'] == 2 else ''))
        out.append('</ol></section>')
    b = D.BONUS
    out.append('<section class="sec bonus"><div class="sh">'
               '<span class="letter">\u2605</span><div><h2>Bonus</h2>'
               '<p class="lead">%s</p></div>'
               '<span class="chip c-bonus">Bonus</span>'
               '<span class="tot">+%d marks</span></div>'
               '<ol class="qs" style="--space:%dpx"><li><span class="qn">%d</span>'
               '<div class="qb">%s</div></li></ol></section>'
               % (rich(b['lead']), b['marks'], 76, NQ + 1, rich(b['item']['q'])))
    out.append('<p class="foot">End of paper · %d marks, plus %d bonus</p>'
               '</body></html>' % (D.TOTAL, b['marks']))
    return ''.join(out)


def mark_scheme():
    out = [head(D.GRADE + ' · ' + D.TITLE + ' · mark scheme'), masthead('Mark scheme')]

    # what each topic is worth, so the paper can be judged against the teaching
    per = {}
    for s in D.SECTIONS:
        for it in s['items']:
            per[it['lesson']] = per.get(it['lesson'], 0) + it['marks']
    rows = ''.join('<tr><td>%s</td><td class="num">%d</td><td class="num">%d%%</td></tr>'
                   % (D.LESSON_OF[k], per[k], round(100 * per[k] / D.TOTAL))
                   for k in sorted(per))
    out.append('<div class="cover"><h3>What the paper weighs</h3>'
               '<table><thead><tr><th>Topic</th><th class="num">Marks</th>'
               '<th class="num">Share</th></tr></thead><tbody>%s</tbody></table>'
               '<p class="tip">Cancelling carries the largest share because every '
               'question in Section C also exercises the factorising from lessons 1–3.'
               '</p></div>' % rows)

    n = 0
    for s in D.SECTIONS:
        out.append('<section class="sec">' + section_head(s))
        out.append('<ol class="ms">')
        for it in s['items']:
            n += 1
            note = ('<p class="note">%s</p>' % rich(it['note'])) if it['note'] else ''
            out.append('<li><span class="qn">%d</span><div class="qb">'
                       '<p class="qtext">%s %s</p>'
                       '<p class="ans"><span class="lab">Answer</span>%s</p>'
                       '<div class="work"><span class="lab">Working</span>%s</div>%s'
                       '</div></li>'
                       % (n, rich(it['q']), mark_tag(it), rich(it['ans']),
                          rich(it['work']), note))
        out.append('</ol></section>')
    b, it = D.BONUS, D.BONUS['item']
    note = ('<p class="note">%s</p>' % rich(it['note'])) if it['note'] else ''
    out.append('<section class="sec bonus"><div class="sh">'
               '<span class="letter">\u2605</span><div><h2>Bonus</h2>'
               '<p class="lead">%s</p></div>'
               '<span class="chip c-bonus">Bonus</span>'
               '<span class="tot">+%d marks</span></div>'
               '<ol class="ms"><li><span class="qn">%d</span><div class="qb">'
               '<p class="qtext">%s %s</p>'
               '<p class="ans"><span class="lab">Answer</span>%s</p>'
               '<div class="work"><span class="lab">Working</span>%s</div>%s'
               '</div></li></ol></section>'
               % (rich(b['lead']), b['marks'], NQ + 1, rich(it['q']), mark_tag(it),
                  rich(it['ans']), rich(it['work']), note))
    out.append('<p class="foot">End of mark scheme</p></body></html>')
    return ''.join(out)


CSS = r"""
:root{
  --paper:#FAF9F5; --surface:#FFFFFF; --surface-2:#F4F2EC;
  --ink:#12262C; --ink-soft:#2E464D; --muted:#5F7076; --faint:#8B9A9F;
  --rule:#E3E0D7; --rule-soft:#EFEDE5;
  --brand:#0E5C63; --brand-deep:#0A3F45; --brand-tint:#E4F0F0;
  --easy:#3C7A50; --easy-tint:#E6F1E8;
  --med:#B0801F;  --med-tint:#F7EEDA;
  --hard:#A34430; --hard-tint:#F8E9E4;
  --serif:"Spectral",Georgia,serif;
  --sans:"Work Sans",Helvetica,Arial,sans-serif;
  --mono:"IBM Plex Mono",Menlo,Consolas,monospace;
}
@page{size:A4;margin:14mm 14mm 16mm}
*{box-sizing:border-box}
body{margin:0;background:#fff;color:var(--ink);font-family:var(--sans);
  font-size:13.5px;line-height:1.55;-webkit-font-smoothing:antialiased}

/* maths, lifted from the lesson pages so a fraction looks the same here */
.m{font-family:var(--serif);font-style:italic;font-size:1.06em;letter-spacing:.005em;
  white-space:nowrap}
.frac{display:inline-flex;flex-direction:column;vertical-align:middle;text-align:center;
  margin:0 .2em;font-style:normal;white-space:nowrap}
.frac>span:first-child{padding:0 .34em .06em;border-bottom:1.2px solid currentColor;line-height:1.3}
.frac>span:last-child{padding:.06em .34em 0;line-height:1.3}
sup{font-size:.72em;line-height:0}

/* masthead */
.mast{border-bottom:2px solid var(--ink);padding-bottom:11px}
.topline{display:flex;justify-content:space-between;align-items:baseline;gap:12px}
.who,.kind{font-family:var(--mono);font-size:9.5px;letter-spacing:.14em;
  text-transform:uppercase;margin:0}
.who{color:var(--brand)} .kind{color:var(--muted)}
.kind.ms{color:#fff;background:var(--hard);padding:2px 7px;border-radius:3px}
h1{font-family:var(--serif);font-size:26px;font-weight:600;letter-spacing:-.01em;
  margin:7px 0 0;line-height:1.15}
h1 .grade{font-family:var(--sans);font-size:13px;font-weight:500;color:var(--muted);
  letter-spacing:0;margin-left:7px}
.meta{display:flex;flex-wrap:wrap;gap:16px;margin-top:7px;font-family:var(--mono);
  font-size:10.5px;color:var(--muted)}
.meta b{color:var(--ink);font-weight:500}
.covers-line{margin:9px 0 0;font-size:11.5px;color:var(--muted)}
.covers{list-style:none;padding:0;margin:11px 0 0;display:grid;gap:3px}
.covers li{display:grid;grid-template-columns:34px 1fr auto;gap:9px;align-items:baseline;
  font-size:11.5px}
.covers .ls{font-family:var(--mono);font-size:10px;color:var(--brand);
  background:var(--brand-tint);border-radius:2px;padding:1px 5px;text-align:center}
.covers .tt{color:var(--ink)}
.covers .rf{font-family:var(--mono);font-size:9.5px;color:var(--faint)}
.rules{list-style:none;padding:0;margin:10px 0 0;font-size:11.5px;color:var(--muted)}
.rules li{padding-left:13px;position:relative}
.rules li::before{content:"·";position:absolute;left:4px;color:var(--brand);font-weight:700}

.namebar{display:grid;grid-template-columns:1fr 1fr 1fr auto;gap:16px;margin:12px 0 0;
  padding:9px 0;border-bottom:1px solid var(--rule);font-family:var(--mono);
  font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
.namebar i{display:inline-block;border-bottom:1px solid var(--rule);min-width:52px;
  margin-left:7px;height:.85em}
.namebar .score i{min-width:30px}

/* sections */
.sec{margin-top:19px;break-inside:auto}
.sh{display:grid;grid-template-columns:auto 1fr auto auto;gap:11px;align-items:center;
  padding-bottom:7px;border-bottom:1px solid var(--rule);break-after:avoid}
.letter{font-family:var(--serif);font-size:25px;font-weight:600;color:var(--brand);
  line-height:1}
.sh h2{font-family:var(--serif);font-size:15px;font-weight:600;margin:0}
.sh .lead{margin:1px 0 0;font-size:11px;color:var(--muted)}
.chip{font-family:var(--mono);font-size:9px;letter-spacing:.1em;text-transform:uppercase;
  padding:2px 7px;border-radius:3px;border:1px solid currentColor;white-space:nowrap}
.c-easy{color:var(--easy);background:var(--easy-tint)}
.c-med{color:var(--med);background:var(--med-tint)}
.c-hard{color:var(--hard);background:var(--hard-tint)}
.c-bonus{color:var(--brand);background:var(--brand-tint)}
.bonus .letter{color:var(--brass);font-size:19px}
.bonus .sh{border-bottom-color:var(--brass)}
.tot{font-family:var(--mono);font-size:10px;color:var(--muted);white-space:nowrap}

/* questions */
ol.qs{list-style:none;padding:0;margin:0}
ol.qs>li{display:grid;grid-template-columns:24px 1fr;gap:7px;padding:9px 0;
  border-bottom:1px solid var(--rule-soft);break-inside:avoid;
  padding-bottom:calc(9px + var(--space))}
ol.qs.two{display:grid;grid-template-columns:1fr 1fr;column-gap:22px}
ol.qs.two>li{padding:7px 0}
.qn{font-family:var(--mono);font-size:11px;color:var(--brand);padding-top:2px}
.qb{min-width:0}
.mk{font-family:var(--mono);font-size:10px;color:var(--muted);white-space:nowrap}
.ansline{display:block;border-bottom:1px solid var(--rule);margin-top:9px;height:1px}

/* mark scheme */
.cover{margin-top:15px;padding:12px 14px;background:var(--surface-2);
  border-left:3px solid var(--brand);break-inside:avoid}
.cover h3{font-family:var(--serif);font-size:14px;margin:0 0 7px}
.cover table{border-collapse:collapse;width:100%;font-size:11.5px}
.cover th{font-family:var(--mono);font-size:9px;letter-spacing:.1em;text-transform:uppercase;
  color:var(--muted);font-weight:500;text-align:left;padding:3px 0;
  border-bottom:1px solid var(--rule)}
.cover td{padding:4px 0;border-bottom:1px solid var(--rule-soft)}
.cover .num{text-align:right;font-family:var(--mono);width:66px}
.cover .tip{margin:8px 0 0;font-size:11px;color:var(--muted)}
ol.ms{list-style:none;padding:0;margin:0}
ol.ms>li{display:grid;grid-template-columns:24px 1fr;gap:7px;padding:10px 0;
  border-bottom:1px solid var(--rule-soft);break-inside:avoid}
.qtext{margin:0;color:var(--ink-soft)}
.ans{margin:6px 0 0;padding:6px 9px;background:var(--easy-tint);
  border-left:2px solid var(--easy)}
.work{margin:6px 0 0;padding:0 0 0 11px;border-left:2px solid var(--rule);
  font-size:12.5px;color:var(--muted)}
.lab{display:block;font-family:var(--mono);font-size:8.5px;letter-spacing:.12em;
  text-transform:uppercase;color:var(--muted);margin-bottom:2px}
.ans .lab{color:var(--easy)}
.note{margin:6px 0 0;font-size:11.5px;color:var(--hard)}
.foot{margin-top:20px;padding-top:9px;border-top:1px solid var(--rule);text-align:center;
  font-family:var(--mono);font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;
  color:var(--faint)}
"""

def combined():
    """One page carrying both, with a switch — for reading on a phone.
    Printing it gives whichever view is on screen."""
    body = lambda h: h.split('<body>', 1)[1].rsplit('</body>', 1)[0]
    return (head(D.GRADE + ' · ' + D.TITLE)
      + '<div class="switch" role="group" aria-label="View">'
        '<button id="v-qp" type="button" aria-pressed="true">Question paper</button>'
        '<button id="v-ms" type="button" aria-pressed="false">Mark scheme</button></div>'
      + '<div class="view" id="qp">' + body(question_paper()) + '</div>'
      + '<div class="view" id="ms" hidden>' + body(mark_scheme()) + '</div>'
      + """<style>
      body{padding:22px 20px 40px;max-width:840px;margin:0 auto}
      .switch{display:flex;gap:0;margin:0 0 18px;border:1px solid var(--rule);
        border-radius:4px;overflow:hidden;width:max-content}
      .switch button{appearance:none;font-family:var(--sans);font-size:12.5px;
        font-weight:500;padding:7px 15px;border:0;border-right:1px solid var(--rule);
        background:var(--surface);color:var(--muted);cursor:pointer}
      .switch button:last-child{border-right:0}
      .switch button[aria-pressed="true"]{background:var(--brand);color:#fff}
      @media print{.switch{display:none}body{padding:0;max-width:none}}
      @media (max-width:520px){ol.qs.two{grid-template-columns:1fr}}
      </style>
      <script>(function(){
        var q=document.getElementById('qp'), m=document.getElementById('ms'),
            bq=document.getElementById('v-qp'), bm=document.getElementById('v-ms');
        function show(which){
          q.hidden = which!=='qp'; m.hidden = which!=='ms';
          bq.setAttribute('aria-pressed', String(which==='qp'));
          bm.setAttribute('aria-pressed', String(which==='ms'));
          window.scrollTo(0,0);
        }
        bq.addEventListener('click',function(){show('qp');});
        bm.addEventListener('click',function(){show('ms');});
      })();</script></body></html>""")


# ---- write ------------------------------------------------------------------
qp, ms = HERE / (STEM + '-QP.html'), HERE / (STEM + '-MS.html')
qp.write_text(question_paper(), encoding='utf-8')
ms.write_text(mark_scheme(), encoding='utf-8')

(HERE / (STEM + '.html')).write_text(combined(), encoding='utf-8')

jobs = HERE / '_jobs.json'
jobs.write_text(json.dumps([
    {'html': str(qp), 'pdf': str(HERE / (STEM + '-QP.pdf'))},
    {'html': str(ms), 'pdf': str(HERE / (STEM + '-MS.pdf'))},
]))
subprocess.run(['node', str(HERE / 'topdf.js'), str(jobs)], check=True)
jobs.unlink()

import pymupdf
for tag in ('QP', 'MS'):
    f = HERE / ('%s-%s.pdf' % (STEM, tag))
    print('%-34s %d pages  %d KB' % (f.name, len(pymupdf.open(str(f))), f.stat().st_size // 1024))
