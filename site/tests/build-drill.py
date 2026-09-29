# -*- coding: utf-8 -*-
"""A revision drill and its answer key, from a question bank.

    python3 build-drill.py drill-g8-alg-data.py Grade8-Algebra-Revision

Writes <stem>.pdf — the questions, for handing out — and <stem>-answers.pdf,
the same questions with the answer and a one-line reason.

A drill is not a test: many short questions on the topics a class has already
been examined on, so the practice is dense and each sheet stays within two
pages. That page budget is enforced at the end of the build.
"""
import html as H
import importlib.util, json, pathlib, re, subprocess, sys

HERE = pathlib.Path(__file__).resolve().parent
DATA = sys.argv[1] if len(sys.argv) > 1 else 'drill-g8-alg-data.py'
STEM = sys.argv[2] if len(sys.argv) > 2 else 'Grade8-Algebra-Revision'
LIMIT = 2                       # pages a student sheet may not exceed

spec = importlib.util.spec_from_file_location('bank', HERE / DATA)
D = importlib.util.module_from_spec(spec); spec.loader.exec_module(D)

FONTS = (HERE / 'fonts-inline.css').read_text(encoding='utf-8')
TOTAL = sum(len(b['items']) for b in D.BLOCKS)

# ---- the notation used in the bank, as in build-worksheet.py ----------------
FRAC = re.compile(r'\[([^\[\]]+)\]\s*/\s*\[([^\[\]]+)\]')
WJ = '⁠'


def sup(t):
    t = re.sub(r'\^([-−]?\d+/\d+)', r'<sup>\1</sup>', t)
    return re.sub(r'\^([-−]?\d+|[A-Za-z])', r'<sup>\1</sup>', t)


def maths(t):
    t = FRAC.sub(lambda m: '%s<span class="frac"><span>%s</span><span>%s</span></span>%s'
                 % (WJ, sup(m.group(1)), sup(m.group(2)), WJ), t)
    return sup(t)


def rich(t):
    return re.sub(r'\{([^{}]*)\}',
                  lambda m: '<span class="m">%s</span>' % maths(m.group(1)), t)


def head(title):
    return ('<!doctype html><html lang="en"><head><meta charset="utf-8">'
            '<title>%s</title><style>%s</style><style>%s</style></head><body>'
            % (H.escape(title), FONTS, CSS))


def masthead(key):
    return ('<header class="mast"><div class="topline">'
            '<p class="who">Anvarbek Khaydarov · Mathematics · %s</p>'
            '<p class="kind%s">%s</p></div><h1>%s</h1>'
            '<p class="meta">%s &nbsp;·&nbsp; %d questions</p>'
            '<p class="note">%s</p></header>'
            % (H.escape(D.GRADE), ' t' if key else '',
               'Answer key' if key else 'Revision drill',
               H.escape(D.TITLE), H.escape(D.COVERS), TOTAL, rich(D.NOTE)))


def sheet(key):
    out = [head(D.TITLE + (' · answers' if key else '')), masthead(key)]
    if not key:
        out.append('<div class="namebar"><span>Name <i></i></span>'
                   '<span>Class <i></i></span><span>Date <i></i></span></div>')
    n = 0
    for b in D.BLOCKS:
        out.append('<section class="blk lv-%s"><div class="bh"><h2>%s</h2>'
                   '<span class="chip">%d</span><span class="lead">%s</span></div>'
                   '<ol class="qs c%d%s">'
                   % (b['key'], H.escape(b['nom']), len(b['items']),
                      H.escape(b.get('lead', '')), D.COLS_KEY if key else D.COLS,
                      '' if key else ' work'))
        for it in b['items']:
            n += 1
            body = '<span class="n">%d</span><span class="q">%s</span>' % (n, rich(it['q']))
            if key:
                body += '<span class="a">%s</span>' % rich(it['a'])
                if it.get('why'):
                    body += '<span class="why">%s</span>' % rich(it['why'])
            out.append('<li>%s</li>' % body)
        out.append('</ol></section>')
    out.append('</body></html>')
    return ''.join(out)


CSS = r"""
:root{
  --ink:#12262C; --muted:#5F7076; --faint:#8B9A9F; --rule:#E3E0D7; --rule-soft:#EFEDE5;
  --brand:#0E5C63; --hard-ink:#A34430;
  --t1:#3C7A50; --t1-t:#E6F1E8; --t2:#B0801F; --t2-t:#F7EEDA;
  --t3:#A34430; --t3-t:#F8E9E4; --t4:#6B3E8F; --t4-t:#F0E9F6;
  --serif:"Spectral",Georgia,serif; --sans:"Work Sans",Helvetica,Arial,sans-serif;
  --mono:"IBM Plex Mono",Menlo,Consolas,monospace;
}
@page{size:A4;margin:11mm 11mm 10mm}
*{box-sizing:border-box}
body{margin:0;background:#fff;color:var(--ink);font-family:var(--sans);
  font-size:10.3px;line-height:1.45;-webkit-font-smoothing:antialiased}

.m{font-family:var(--serif);font-style:italic;font-size:1.08em;white-space:nowrap}
.frac{display:inline-flex;flex-direction:column;vertical-align:middle;text-align:center;
  margin:0 .16em;font-style:normal;white-space:nowrap}
.frac>span:first-child{padding:0 .3em .04em;border-bottom:1.1px solid currentColor;
  line-height:1.2}
.frac>span:last-child{padding:.04em .3em 0;line-height:1.2}
sup{font-size:.7em;line-height:0}

.mast{border-bottom:2px solid var(--ink);padding-bottom:6px}
.topline{display:flex;justify-content:space-between;align-items:baseline;gap:12px}
.who,.kind{font-family:var(--mono);font-size:8px;letter-spacing:.14em;
  text-transform:uppercase;margin:0;color:var(--muted)}
.who{color:var(--brand)}
.kind.t{color:#fff;background:var(--hard-ink);padding:2px 7px;border-radius:3px}
h1{font-family:var(--serif);font-size:18px;font-weight:600;margin:4px 0 0;line-height:1.1}
.meta{font-family:var(--mono);font-size:8.5px;color:var(--faint);margin:3px 0 0}
.note{font-size:9.4px;color:var(--muted);margin:4px 0 0}
.namebar{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;padding:5px 0;
  border-bottom:1px solid var(--rule);font-family:var(--mono);font-size:8px;
  letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
.namebar i{display:inline-block;border-bottom:1px solid var(--rule);min-width:58px;
  margin-left:6px;height:.8em}

.blk{margin-top:8px;break-inside:auto}
.bh{display:flex;align-items:baseline;gap:8px;padding-bottom:3px;
  border-bottom:1px solid var(--lv);break-after:avoid}
.bh h2{font-family:var(--serif);font-size:11.5px;font-weight:600;margin:0;color:var(--lv)}
.chip{font-family:var(--mono);font-size:8px;padding:1px 5px;border-radius:3px;
  color:var(--lv);background:var(--lvt)}
.lead{margin-left:auto;font-size:8.8px;color:var(--muted);font-style:italic;
  text-align:right}
.lv-t1{--lv:var(--t1);--lvt:var(--t1-t)}
.lv-t2{--lv:var(--t2);--lvt:var(--t2-t)}
.lv-t3{--lv:var(--t3);--lvt:var(--t3-t)}
.lv-t4{--lv:var(--t4);--lvt:var(--t4-t)}

ol.qs{list-style:none;padding:0;margin:4px 0 0;column-gap:13px}
ol.qs.c2{column-count:2}
ol.qs.c3{column-count:3}
/* grid, not flex: a question that runs to two lines must keep its number
   beside it rather than pushing the text onto the next line */
ol.qs>li{break-inside:avoid;padding:3px 0 var(--gap,3px);display:grid;
  grid-template-columns:16px 1fr;column-gap:5px;
  border-bottom:1px dotted var(--rule)}
/* javob yozish uchun joy — faqat oʻquvchi varaqasida */
ol.qs.work>li{--gap:52px}
ol.qs.work>li:has(.frac){--gap:48px}
.n{font-family:var(--mono);font-size:8px;color:var(--lv);padding-top:.15em}
.q{min-width:0}
.a{grid-column:2;color:var(--lv);font-weight:500;margin-top:1px}
.why{grid-column:2;color:var(--muted);font-size:8.8px}
"""

files = []
for key, tag in ((False, ''), (True, '-answers')):
    f = HERE / (STEM + tag + '.html')
    f.write_text(sheet(key), encoding='utf-8')
    files.append({'html': str(f), 'pdf': str(HERE / (STEM + tag + '.pdf'))})

jobs = HERE / '_drill.json'; jobs.write_text(json.dumps(files))
subprocess.run(['node', str(HERE / 'topdf.js'), str(jobs)], check=True)
jobs.unlink()

import pymupdf
over = []
for j in files:
    f = pathlib.Path(j['pdf'])
    pages = len(pymupdf.open(str(f)))
    flag = ''
    if '-answers' not in f.name and pages > LIMIT:
        flag = '  <-- OVER THE %d-PAGE LIMIT' % LIMIT
        over.append(f.name)
    print('%-40s %d pages  %d KB%s' % (f.name, pages, f.stat().st_size // 1024, flag))
if over:
    sys.exit('student sheet too long: ' + ', '.join(over))
