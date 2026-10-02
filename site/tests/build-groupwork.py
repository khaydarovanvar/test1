# -*- coding: utf-8 -*-
"""A timed group activity and its teacher sheet.

    python3 build-groupwork.py group-g11-deriv-data.py Grade11-Derivatives-Groupwork

Writes <stem>.pdf — one sheet per group, carrying the rounds, their time and
their points — and <stem>-teacher.pdf, which adds the lesson clock, how to run
the activity, full worked solutions and the score table.

The group sheet may not exceed two pages: a group that has to turn over three
pages in a timed round loses the round to paperwork.
"""
import html as H
import importlib.util, json, pathlib, re, subprocess, sys

HERE = pathlib.Path(__file__).resolve().parent
DATA = sys.argv[1] if len(sys.argv) > 1 else 'group-g11-deriv-data.py'
STEM = sys.argv[2] if len(sys.argv) > 2 else 'Grade11-Derivatives-Groupwork'
LIMIT = 2

spec = importlib.util.spec_from_file_location('bank', HERE / DATA)
D = importlib.util.module_from_spec(spec); spec.loader.exec_module(D)

FONTS = (HERE / 'fonts-inline.css').read_text(encoding='utf-8')
NQ = sum(len(r['items']) for r in D.ROUNDS)
PTS = sum(len(r['items']) * r['points'] for r in D.ROUNDS)
MINS = sum(r['minutes'] for r in D.ROUNDS)

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


def masthead(teacher):
    return ('<header class="mast"><div class="topline">'
            '<p class="who">Anvarbek Khaydarov · Mathematics · %s</p>'
            '<p class="kind%s">%s</p></div><h1>%s</h1>'
            '<p class="meta">%s &nbsp;·&nbsp; %d min &nbsp;·&nbsp; %d questions '
            '&nbsp;·&nbsp; %d points &nbsp;·&nbsp; groups of %s</p>'
            '<p class="note">%s</p></header>'
            % (H.escape(D.GRADE), ' t' if teacher else '',
               'Teacher sheet' if teacher else 'Group sheet',
               H.escape(D.TITLE), H.escape(D.COVERS), D.DURATION, NQ, PTS,
               H.escape(D.GROUP_SIZE), rich(D.NOTE)))


def clock():
    cells = ''.join('<span class="seg" style="flex:%d"><b>%d′</b>%s</span>'
                    % (m, m, H.escape(w)) for m, w in D.CLOCK)
    return ('<section class="plan"><h2>Lesson clock · %d minutes</h2>'
            '<div class="bar">%s</div><ol class="rules">%s</ol></section>'
            % (D.DURATION, cells,
               ''.join('<li>%s</li>' % rich(r) for r in D.RULES)))


def scoretable():
    rows = ''.join(
      '<tr><td class="nm">%s</td><td>%d</td><td>%d</td><td>%d</td></tr>'
      % (H.escape(r['nom']), len(r['items']), r['points'],
         len(r['items']) * r['points']) for r in D.ROUNDS)
    return ('<section class="plan"><h2>Score</h2><table class="sc">'
            '<thead><tr><th>Round</th><th>Questions</th><th>Each</th>'
            '<th>Round total</th></tr></thead><tbody>%s</tbody>'
            '<tfoot><tr><td class="nm">Total</td><td>%d</td><td></td>'
            '<td>%d</td></tr></tfoot></table></section>'
            % (rows, NQ, PTS))


def sheet(teacher):
    out = [head(D.TITLE + (' · teacher' if teacher else ' · groups')),
           masthead(teacher)]
    if teacher:
        out.append(clock())
    else:
        out.append('<div class="namebar"><span>Group <i></i></span>'
                   '<span>Members <i></i></span><span>Score <i></i></span></div>')
    n = 0
    for r in D.ROUNDS:
        out.append('<section class="rnd lv-%s"><div class="bh">'
                   '<h2>%s</h2><span class="chip">%d′</span>'
                   '<span class="chip">%d pts each</span>'
                   '<span class="lead">%s</span></div><ol class="qs c%d">'
                   % (r['key'], H.escape(r['nom']), r['minutes'], r['points'],
                      H.escape(r.get('lead', '')), 2 if teacher else r['cols']))
        for it in r['items']:
            n += 1
            body = '<span class="n">%d</span><span class="q">%s</span>' % (n, rich(it['q']))
            if teacher:
                body += '<span class="a">%s</span>' % rich(it['a'])
                body += '<span class="why">%s</span>' % rich(it['work'])
            out.append('<li>%s</li>' % body)
        out.append('</ol></section>')
    if teacher:
        out.append(scoretable())
    out.append('</body></html>')
    return ''.join(out)


CSS = r"""
:root{
  --ink:#12262C; --muted:#5F7076; --faint:#8B9A9F; --rule:#E3E0D7; --rule-soft:#EFEDE5;
  --brand:#0E5C63; --hard-ink:#A34430;
  --r1:#3C7A50; --r1-t:#E6F1E8; --r2:#B0801F; --r2-t:#F7EEDA;
  --r3:#A34430; --r3-t:#F8E9E4; --r4:#6B3E8F; --r4-t:#F0E9F6;
  --serif:"Spectral",Georgia,serif; --sans:"Work Sans",Helvetica,Arial,sans-serif;
  --mono:"IBM Plex Mono",Menlo,Consolas,monospace;
}
@page{size:A4;margin:12mm 12mm 11mm}
*{box-sizing:border-box}
body{margin:0;background:#fff;color:var(--ink);font-family:var(--sans);
  font-size:10.4px;line-height:1.45;-webkit-font-smoothing:antialiased}

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
h1{font-family:var(--serif);font-size:19px;font-weight:600;margin:4px 0 0;line-height:1.1}
.meta{font-family:var(--mono);font-size:8.5px;color:var(--faint);margin:3px 0 0}
.note{font-size:9.8px;color:var(--muted);margin:4px 0 0}
.namebar{display:grid;grid-template-columns:.8fr 1.6fr .6fr;gap:14px;padding:6px 0;
  border-bottom:1px solid var(--rule);font-family:var(--mono);font-size:8px;
  letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
.namebar i{display:inline-block;border-bottom:1px solid var(--rule);min-width:50px;
  margin-left:6px;height:.9em;width:70%}

/* teacher: lesson clock and score */
.plan{margin-top:9px;break-inside:avoid}
.plan h2{font-family:var(--mono);font-size:8.5px;letter-spacing:.14em;
  text-transform:uppercase;color:var(--muted);font-weight:500;margin:0 0 5px}
.bar{display:flex;gap:2px}
.seg{flex:1;background:var(--rule-soft);border-left:2px solid var(--brand);
  padding:4px 6px;font-size:8.6px;color:var(--muted);line-height:1.3}
.seg b{display:block;font-family:var(--mono);font-size:10px;color:var(--ink)}
ol.rules{margin:7px 0 0;padding-left:16px;font-size:9.6px;color:var(--muted)}
ol.rules li{margin-bottom:2px}
table.sc{border-collapse:collapse;width:100%;font-size:9.6px;margin-top:2px}
table.sc th{font-family:var(--mono);font-size:8px;letter-spacing:.1em;
  text-transform:uppercase;color:var(--muted);font-weight:500;text-align:right;
  padding:3px 6px;border-bottom:1px solid var(--rule)}
table.sc th:first-child{text-align:left}
table.sc td{padding:3px 6px;text-align:right;border-bottom:1px solid var(--rule-soft)}
table.sc td.nm{text-align:left}
table.sc tfoot td{font-weight:600;border-top:1px solid var(--ink);border-bottom:0}

.rnd{margin-top:10px}
.bh{display:flex;align-items:baseline;gap:7px;padding-bottom:3px;
  border-bottom:1px solid var(--lv);break-after:avoid}
.bh h2{font-family:var(--serif);font-size:12.5px;font-weight:600;margin:0;color:var(--lv)}
.chip{font-family:var(--mono);font-size:8px;padding:1px 5px;border-radius:3px;
  color:var(--lv);background:var(--lvt);white-space:nowrap}
/* the description must share the header row, not run off the page edge */
.bh h2,.chip{flex:0 0 auto}
.lead{margin-left:auto;flex:0 1 auto;min-width:0;font-size:9px;color:var(--muted);
  font-style:italic;text-align:right}
.lv-r1{--lv:var(--r1);--lvt:var(--r1-t)}
.lv-r2{--lv:var(--r2);--lvt:var(--r2-t)}
.lv-r3{--lv:var(--r3);--lvt:var(--r3-t)}
.lv-r4{--lv:var(--r4);--lvt:var(--r4-t)}

ol.qs{list-style:none;padding:0;margin:4px 0 0;column-gap:15px}
ol.qs.c2{column-count:2}
ol.qs.c3{column-count:3}
ol.qs>li{break-inside:avoid;padding:3px 0 var(--gap,3px);display:grid;
  grid-template-columns:17px 1fr;column-gap:5px;border-bottom:1px dotted var(--rule)}
ol.qs.work>li{--gap:26px}
.n{font-family:var(--mono);font-size:8px;color:var(--lv);padding-top:.15em}
.q{min-width:0}
.a{grid-column:2;color:var(--lv);font-weight:500;margin-top:1px}
.why{grid-column:2;color:var(--muted);font-size:9.2px;margin-top:1px}
"""

files = []
for teacher, tag in ((False, ''), (True, '-teacher')):
    f = HERE / (STEM + tag + '.html')
    html = sheet(teacher)
    if not teacher:
        html = html.replace('class="qs c', 'class="qs work c')
    f.write_text(html, encoding='utf-8')
    files.append({'html': str(f), 'pdf': str(HERE / (STEM + tag + '.pdf'))})

jobs = HERE / '_grp.json'; jobs.write_text(json.dumps(files))
subprocess.run(['node', str(HERE / 'topdf.js'), str(jobs)], check=True)
jobs.unlink()

import pymupdf
over = []
for j in files:
    f = pathlib.Path(j['pdf'])
    pages = len(pymupdf.open(str(f)))
    flag = ''
    if '-teacher' not in f.name and pages > LIMIT:
        flag = '  <-- OVER THE %d-PAGE LIMIT' % LIMIT
        over.append(f.name)
    print('%-44s %d pages  %d KB%s' % (f.name, pages, f.stat().st_size // 1024, flag))
print('rounds total %d min of a %d min lesson' % (MINS, D.DURATION))
if over:
    sys.exit('group sheet too long: ' + ', '.join(over))
