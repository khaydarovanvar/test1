# -*- coding: utf-8 -*-
"""A practice worksheet and its teacher copy from a question bank.

    python3 build-worksheet.py ws-differentiation-data.py Differentiation-practice

Writes <stem>.pdf — questions only, for handing out — and
<stem>-teacher.pdf, the same questions with answers and full working.
"""
import html as H
import importlib.util, json, pathlib, re, subprocess, sys

HERE = pathlib.Path(__file__).resolve().parent
DATA = sys.argv[1] if len(sys.argv) > 1 else 'ws-differentiation-data.py'
STEM = sys.argv[2] if len(sys.argv) > 2 else 'Differentiation-practice'

spec = importlib.util.spec_from_file_location('bank', HERE / DATA)
D = importlib.util.module_from_spec(spec); spec.loader.exec_module(D)

FONTS = (HERE / 'fonts-inline.css').read_text(encoding='utf-8')
TOTAL = sum(len(b['items']) for b in D.BANDS)

# ---- the notation used in the bank ------------------------------------------
FRAC = re.compile(r'\[([^\[\]]+)\]\s*/\s*\[([^\[\]]+)\]')
WJ = '⁠'          # word joiner: keeps a fraction glued to what follows

def sup(t):
    """An exponent is digits, a single letter, or a signed/fractional index.
    The minus may be typed either way, so accept both hyphen and U+2212."""
    t = re.sub(r'\^([-\u2212]?\d+/\d+)', r'<sup>\1</sup>', t)
    return re.sub(r'\^([-\u2212]?\d+|[A-Za-z])', r'<sup>\1</sup>', t)

def maths(t):
    t = FRAC.sub(lambda m: '%s<span class="frac"><span>%s</span><span>%s</span></span>%s'
                 % (WJ, sup(m.group(1)), sup(m.group(2)), WJ), t)
    return sup(t)

def rich(t):
    """{...} becomes a maths span; everything outside it is authored HTML."""
    return re.sub(r'\{([^{}]*)\}',
                  lambda m: '<span class="m">%s</span>' % maths(m.group(1)), t)


def head(title):
    return ('<!doctype html><html lang="en"><head><meta charset="utf-8">'
            '<title>%s</title><style>%s</style><style>%s</style></head><body>'
            % (H.escape(title), FONTS, CSS))


def masthead(kind, teacher):
    return ('<header class="mast"><div class="topline">'
            '<p class="who">Anvarbek Khaydarov · Mathematics · Grade %d</p>'
            '<p class="kind%s">%s</p></div><h1>%s</h1>'
            '<p class="meta">Lessons %s · %s &nbsp;·&nbsp; %d problems</p>'
            '<p class="note">%s</p></header>'
            % (D.GRADE, ' t' if teacher else '', kind, H.escape(D.TITLE),
               D.LESSONS, H.escape(D.REFS), TOTAL, rich(D.NOTE)))


def sheet(teacher):
    out = [head(D.TITLE + (' · teacher copy' if teacher else ' · practice')),
           masthead('Teacher copy · worked solutions' if teacher else 'Practice', teacher)]
    if not teacher:
        out.append('<div class="namebar"><span>Name <i></i></span>'
                   '<span>Class <i></i></span><span>Date <i></i></span></div>')
    n = 0
    for b in D.BANDS:
        note = ('<p class="bnote">%s</p>' % rich(b['note'])) if teacher and b.get('note') else ''
        out.append('<section class="band lv-%s"><div class="bh"><h2>%s</h2>'
                   '<span class="chip">%d</span></div>%s<ol class="qs%s">'
                   % (b['key'], b['label'], len(b['items']), note,
                      ' two' if b['cols'] == 2 and not teacher else ''))
        for it in b['items']:
            n += 1
            body = rich(it['q'])
            if teacher:
                body += ('<div class="ans">%s</div><div class="work">%s</div>'
                         % (rich(it['a']), rich(it['work'])))
            out.append('<li><span class="n">%d</span><div class="q">%s</div></li>' % (n, body))
        out.append('</ol></section>')
    out.append('</body></html>')
    return ''.join(out)


CSS = r"""
:root{
  --ink:#12262C; --muted:#5F7076; --faint:#8B9A9F; --rule:#E3E0D7; --rule-soft:#EFEDE5;
  --brand:#0E5C63; --hard-ink:#A34430;
  --easy:#3C7A50; --easy-tint:#E6F1E8; --med:#B0801F; --med-tint:#F7EEDA;
  --hard:#A34430; --hard-tint:#F8E9E4; --vhard:#6B3E8F; --vhard-tint:#F0E9F6;
  --serif:"Spectral",Georgia,serif; --sans:"Work Sans",Helvetica,Arial,sans-serif;
  --mono:"IBM Plex Mono",Menlo,Consolas,monospace;
}
@page{size:A4;margin:13mm 13mm 12mm}
*{box-sizing:border-box}
body{margin:0;background:#fff;color:var(--ink);font-family:var(--sans);
  font-size:13px;line-height:1.5;-webkit-font-smoothing:antialiased}

/* maths, set as the lesson pages set it */
.m{font-family:var(--serif);font-style:italic;font-size:1.06em;white-space:nowrap}
.frac{display:inline-flex;flex-direction:column;vertical-align:middle;text-align:center;
  margin:0 .18em;font-style:normal;white-space:nowrap}
.frac>span:first-child{padding:0 .32em .05em;border-bottom:1.2px solid currentColor;line-height:1.28}
.frac>span:last-child{padding:.05em .32em 0;line-height:1.28}
sup{font-size:.7em;line-height:0}

.mast{border-bottom:2px solid var(--ink);padding-bottom:8px}
.topline{display:flex;justify-content:space-between;align-items:baseline;gap:12px}
.who,.kind{font-family:var(--mono);font-size:9px;letter-spacing:.14em;
  text-transform:uppercase;margin:0;color:var(--muted)}
.who{color:var(--brand)}
.kind.t{color:#fff;background:var(--hard-ink);padding:2px 7px;border-radius:3px}
h1{font-family:var(--serif);font-size:22px;font-weight:600;margin:5px 0 0;line-height:1.12}
.meta{font-family:var(--mono);font-size:9.5px;color:var(--faint);margin:4px 0 0}
.note{font-size:11.5px;color:var(--muted);margin:5px 0 0}
.namebar{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:7px 0;
  border-bottom:1px solid var(--rule);font-family:var(--mono);font-size:9px;
  letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
.namebar i{display:inline-block;border-bottom:1px solid var(--rule);min-width:58px;
  margin-left:7px;height:.8em}

.band{margin-top:13px}
.bh{display:flex;align-items:baseline;gap:9px;padding-bottom:4px;
  border-bottom:1px solid var(--lv);break-after:avoid}
.bh h2{font-family:var(--serif);font-size:14px;font-weight:600;margin:0;color:var(--lv)}
.chip{font-family:var(--mono);font-size:9px;padding:1px 6px;border-radius:3px;
  color:var(--lv);background:var(--lvt)}
.lv-easy{--lv:var(--easy);--lvt:var(--easy-tint)}
.lv-med{--lv:var(--med);--lvt:var(--med-tint)}
.lv-hard{--lv:var(--hard);--lvt:var(--hard-tint)}
.lv-vhard{--lv:var(--vhard);--lvt:var(--vhard-tint)}
.bnote{margin:5px 0 3px;font-size:11px;color:var(--muted);font-style:italic}

ol.qs{list-style:none;padding:0;margin:0}
ol.qs>li{display:grid;grid-template-columns:20px 1fr;gap:6px;padding:7px 0;
  border-bottom:1px solid var(--rule-soft);break-inside:avoid}
ol.qs.two{display:grid;grid-template-columns:1fr 1fr;column-gap:20px}
.n{font-family:var(--mono);font-size:10px;color:var(--lv);padding-top:2px}
.q{min-width:0}
.ans{margin:4px 0 0 10px;padding:3px 8px;background:var(--lvt);color:var(--lv);
  border-left:2px solid var(--lv);display:inline-block;max-width:100%}
.work{margin-top:4px;font-size:12px;color:var(--muted)}
"""

files = []
for teacher, tag in ((False, ''), (True, '-teacher')):
    f = HERE / (STEM + tag + '.html')
    f.write_text(sheet(teacher), encoding='utf-8')
    files.append({'html': str(f), 'pdf': str(HERE / (STEM + tag + '.pdf'))})

jobs = HERE / '_ws.json'; jobs.write_text(json.dumps(files))
subprocess.run(['node', str(HERE / 'topdf.js'), str(jobs)], check=True)
jobs.unlink()

import pymupdf
for j in files:
    f = pathlib.Path(j['pdf'])
    print('%-36s %d pages  %d KB' % (f.name, len(pymupdf.open(str(f))), f.stat().st_size // 1024))
