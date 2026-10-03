# -*- coding: utf-8 -*-
"""Builds the complete course as one volume: all three books, continuous page
numbers, a volume cover and a contents page that carries real page numbers.

The page numbers are found by rendering once with an invisible marker inside
each topic heading, reading the markers back out of the PDF, and rendering a
second time with the numbers filled in. If any marker is not found exactly
once the contents is emitted without numbers rather than with wrong ones.
"""
import re
import subprocess
import sys

import build, book2, book3
import content as C1

RENDER = ["node", "render.mjs", "bookall.html", "English-for-Maths-Teachers-Complete.pdf"]

MARK_CSS = """
/* Invisible anchors, read back from the PDF to number the contents. */
.pgmark{font-size:2px;color:#FFFFFF;line-height:0;letter-spacing:0}
.vcover{height:240mm;display:flex;flex-direction:column;justify-content:space-between;
  text-align:center;padding:4mm 0 0}
.vcover .mark{font-family:var(--emoji);font-size:46px;letter-spacing:5px}
.vcover h1{font-size:35px;color:var(--brand-deep);letter-spacing:-.016em;margin:10px 0 0}
.vcover .sub{font-family:var(--serif);font-size:17px;color:var(--ink-soft);margin-top:10px}
.vcover .uzt{font-size:13.5px;color:var(--muted);margin-top:16px;line-height:1.7}
.vcover .rulebar{height:3px;background:linear-gradient(90deg,var(--brand),var(--brass));
  border-radius:2px;margin:24px auto 0;width:140px}
.vcover .three{display:flex;gap:10px;justify-content:center;margin-top:20px}
.vcover .cvprev{margin-top:26px}
.vcover .three .b{border:1px solid var(--rule);border-radius:8px;padding:11px 14px;
  background:var(--surface-2);min-width:118px}
.vcover .three .b em{display:block;font-style:normal;font-size:10px;letter-spacing:.14em;
  text-transform:uppercase;color:var(--brass);font-weight:700}
.vcover .three .b b{display:block;font-size:12.5px;margin-top:3px;color:var(--brand-deep)}
.vcover .three .b span{display:block;font-size:10px;color:var(--muted);margin-top:2px}
.vcover .foot{font-size:10px;color:var(--faint);padding-bottom:4mm;line-height:1.8}
.toc{width:100%;border-collapse:collapse}
.toc td{padding:4px 8px;border-bottom:1px solid var(--rule-soft);vertical-align:baseline}
.toc tr.part td{background:var(--brand-deep);color:#fff;font-weight:700;font-size:11.5px;
  padding:6px 9px;border:0}
.toc tr.part td span{font-weight:400;opacity:.8}
.toc .n{width:30px;font-family:var(--serif);font-weight:700;color:var(--brand);font-size:12px}
.toc .t{font-size:11px}
.toc .t b{font-weight:700}
.toc .t span{color:var(--muted);display:block;font-size:10px}
.toc .pg{width:40px;text-align:right;font-family:var(--serif);font-weight:700;
  color:var(--ink-soft);font-size:12px}
.toc tr.fm .t{color:var(--ink-soft)}
"""

# (marker, kind, number, English, Ўзбекча) — kind: part | front | topic | back
PLAN = [
    ("B1", "part",  "1-китоб",   "From Zero",                  "Нолдан бошлаб · мавзу 1–3"),
    ("F1", "front", "",          "Бу китоб қандай тузилган",    ""),
    ("F2", "front", "",          "Талаффуз калити",             "ўзбек тилида йўқ олтита товуш"),
    ("F3", "front", "",          "Мавзулар режаси",             "бутун курс — 16 мавзу"),
    ("T01","topic", "1",         "The alphabet and its sounds", "Алифбо ва товушлар"),
    ("T02","topic", "2",         "Numbers 0–100",               "Сонлар 0–100"),
    ("T03","topic", "3",         "The classroom",               "Синфхона"),
    ("A1", "back",  "",          "Жавоблар ва режа",            "1-китоб"),
    ("B2", "part",  "2-китоб",   "Grammar for the Lesson",      "Дарс учун грамматика · мавзу 4–8"),
    ("T04","topic", "4",         "Colours and shapes",          "Ранглар ва шакллар"),
    ("T05","topic", "5",         "One and many — a, an, the, plurals","Бирлик ва кўплик"),
    ("T06","topic", "6",         "To be — am, is, are",         "«Бўлмоқ» феъли"),
    ("T07","topic", "7",         "Classroom commands",          "Буйруқ гаплар"),
    ("T08","topic", "8",         "Questions",                   "Саволлар"),
    ("A2", "back",  "",          "Жавоблар ва режа",            "2-китоб"),
    ("B3", "part",  "3-китоб",   "Mathematics in English",      "Математика инглиз тилида · мавзу 9–16"),
    ("T09","topic", "9",         "Place value",                 "Разрядлар"),
    ("T10","topic", "10",        "Addition and subtraction",    "Қўшиш ва айириш"),
    ("T11","topic", "11",        "Multiplication and division", "Кўпайтириш ва бўлиш"),
    ("T12","topic", "12",        "Comparing numbers",           "Сонларни таққослаш"),
    ("T13","topic", "13",        "Fractions",                   "Касрлар"),
    ("T14","topic", "14",        "Measurement, time and money", "Ўлчов, вақт ва пул"),
    ("T15","topic", "15",        "Geometry",                    "Геометрия"),
    ("T16","topic", "16",        "Word problems and teacher talk","Матнли масалалар ва дарс нутқи"),
    ("A3", "back",  "",          "Жавоблар ва режа",            "3-китоб"),
]

def mark(tag):
    return '<span class="pgmark">%s</span>' % tag

MARKERS = True        # pass 3 renders the shipped file without them

def at_head(html, tag):
    """Put the anchor inside the heading block, which never splits across pages."""
    if not MARKERS:
        return html
    for anchor in ('<div class="topichead">', '<div class="ph">', '<div>'):
        if anchor in html:
            return html.replace(anchor, anchor + mark(tag), 1)
    return mark(tag) + html

def volume_cover():
    return """<section class="page vcover">
  <div>
    <div class="mark">🔤 🔢 📐</div>
    <h1>English for Teaching<br>Mathematics</h1>
    <div class="sub">Grades 1–4 · The Complete Course · Books 1–3</div>
    <div class="rulebar"></div>
    <div class="uzt"><b>Инглиз тили — бошланғич синф<br>математика ўқитувчилари учун</b><br>
      Нолдан бошлаб бутун математика дарсини инглизча олиб боргунча.<br>
      16 мавзу · расмли луғат · кирилл алифбосида талаффуз.</div>
    <div class="cvprev">
      <div class="pv"><span class="em">🍎</span><b>apple</b><i>%s</i><u>олма</u></div>
      <div class="pv">%s<b>square</b><i>%s</i><u>квадрат</u></div>
      <div class="pv">%s<b>one half</b><i>%s</i><u>ярим</u></div>
    </div>
    <div class="three">
      <div class="b"><em>1-китоб</em><b>From Zero</b><span>Мавзу 1–3</span></div>
      <div class="b"><em>2-китоб</em><b>Grammar</b><span>Мавзу 4–8</span></div>
      <div class="b"><em>3-китоб</em><b>Mathematics</b><span>Мавзу 9–16</span></div>
    </div>
  </div>
  <div>
    <div class="foot">Ҳар бир сўз: <b>расм</b> · <b>инглизча</b> · <b>талаффуз (кирилл)</b> · <b>ўзбекча</b><br>
      Барча изоҳлар ўзбек тилида — инглизчани билмасдан ҳам бошлаш мумкин.</div>
  </div>
</section>""" % (build.fmt("*`э`*пл"),
          book2.shape("square", 30), build.fmt("ск`у`эа"),
          book3.frac_circle(2, 1, 30), build.fmt("`у`ан ҳа:ф"))

def contents(pages=None):
    o = ['<section class="page">',
         '<div class="ph"><div class="kick">Мундарижа</div>',
         '<h2>Бутун курс</h2>',
         '<div class="uz">Уч китоб, ўн олти мавзу</div>',
         '<div class="bar"></div></div>', '<table class="toc"><tbody>']
    for tag, kind, no, en, uz in PLAN:
        pg = ("%d" % pages[tag]) if (pages and tag in pages) else ""
        if kind == "part":
            o.append('<tr class="part"><td colspan="2">%s — %s <span>· %s</span></td>'
                     '<td class="pg" style="color:#fff">%s</td></tr>'
                     % (build.esc(no), build.esc(en), build.esc(uz), pg))
        else:
            cls = ' class="fm"' if kind in ("front", "back") else ''
            o.append('<tr%s><td class="n">%s</td><td class="t"><b>%s</b>%s</td>'
                     '<td class="pg">%s</td></tr>'
                     % (cls, build.esc(no),
                        build.esc(en),
                        '<span>%s</span>' % build.esc(uz) if uz else '',
                        pg))
    o.append('</tbody></table>')
    o.append(build.box("tip", "Қайси китобдан бошлаш керак",
             'Агар инглизчани умуман билмасангиз — <b>1-китобдан</b>. Ҳарф ва сонни '
             'биладиган бўлсангиз — <b>2-китобдан</b>. Гап туза оладиган, лекин '
             'математика атамаларини билмайдиган бўлсангиз — тўғридан-тўғри '
             '<b>3-китобдан</b>.'))
    o.append('</section>')
    return "".join(o)

def body(pages=None):
    parts = [volume_cover(), contents(pages)]
    parts.append(at_head(build.cover(), "B1"))
    parts.append(at_head(build.about(), "F1"))
    parts.append(at_head(build.sound_key(), "F2"))
    parts.append(at_head(build.roadmap(), "F3"))
    parts.append(at_head(build.topic1(), "T01"))
    parts.append(at_head(build.topic2(), "T02"))
    parts.append(at_head(build.topic3(), "T03"))
    parts.append(at_head(build.answers(), "A1"))
    parts.append(at_head(book2.cover(), "B2"))
    parts.append(book2.about())
    for i, fn in enumerate([book2.topic4, book2.topic5, book2.topic6,
                            book2.topic7, book2.topic8], start=4):
        parts.append(at_head(fn(), "T%02d" % i))
    parts.append(at_head(book2.answers(), "A2"))
    parts.append(book2.closing())
    parts.append(at_head(book3.cover(), "B3"))
    parts.append(book3.about())
    for i, fn in enumerate([book3.topic9, book3.topic10, book3.topic11, book3.topic12,
                            book3.topic13, book3.topic14, book3.topic15, book3.topic16],
                           start=9):
        parts.append(at_head(fn(), "T%02d" % i))
    parts.append(at_head(book3.answers(), "A3"))
    parts.append(book3.closing())
    return "".join(parts)

def write(pages=None):
    doc = ("<!doctype html><html lang='uz'><head><meta charset='utf-8'>"
           "<title>English for Teaching Mathematics — Complete Course</title>"
           "<style>%s%s%s%s</style></head><body>%s</body></html>"
           % (build.CSS, book2.EXTRA_CSS, book3.EXTRA_CSS, MARK_CSS, body(pages)))
    with open("bookall.html", "w", encoding="utf-8") as f:
        f.write(doc)
    return len(doc.encode())

def read_marks(pdf, n_pages):
    """Find which page each anchor landed on."""
    found = {}
    for p in range(1, n_pages + 1):
        txt = subprocess.run(["pdftotext", "-f", str(p), "-l", str(p), pdf, "-"],
                             capture_output=True, text=True).stdout
        for tag, *_ in PLAN:
            if re.search(r"(?<![A-Za-z0-9])%s(?![A-Za-z0-9])" % tag, txt):
                found.setdefault(tag, []).append(p)
    return found

# What to look for on a page once the anchors are gone, to prove the pagination
# did not move. Topic titles also appear in the contents and the roadmap, but
# never on the page a topic itself starts on, so matching by page is safe.
NEEDLE = {"B1": "Book 1: From Zero", "B2": "Book 2: Grammar for the Lesson",
          "B3": "Book 3: Mathematics in English",
          "F1": "Бу китоб қандай тузилган", "F2": "олтита товуш",
          "F3": "Бутун курс", "A1": "Машқларнинг жавоблари",
          "A2": "Машқларнинг жавоблари", "A3": "Машқларнинг жавоблари"}

def page_text(pdf, p):
    t = subprocess.run(["pdftotext", "-f", str(p), "-l", str(p), pdf, "-"],
                       capture_output=True, text=True).stdout
    return re.sub(r"\s+", " ", t)

def verify(pdf, pages):
    """Every section must still be found on the page the contents claims."""
    wrong = []
    for tag, kind, no, en, uz in PLAN:
        needle = re.sub(r"\s+", " ", NEEDLE.get(tag, en))[:26]
        if needle not in page_text(pdf, pages[tag]):
            wrong.append((tag, pages[tag], needle))
    return wrong

def main():
    size = write(None)
    print("pass 1: bookall.html %.1f KB" % (size / 1024))
    subprocess.run(RENDER, check=True)
    n = int(re.search(r"Pages:\s+(\d+)",
            subprocess.run(["pdfinfo", RENDER[-1]], capture_output=True,
                           text=True).stdout).group(1))
    found = read_marks(RENDER[-1], n)
    dupes = {t: v for t, v in found.items() if len(v) != 1}
    missing = [t for t, *_ in PLAN if t not in found]
    if dupes or missing:
        print("anchors not unique -> contents stays without page numbers",
              "missing:", missing, "dupes:", dupes, file=sys.stderr)
        return
    pages = {t: v[0] for t, v in found.items()}
    write(pages)
    print("pass 2: page numbers for all %d entries" % len(pages))
    subprocess.run(RENDER, check=True)

    # Pass 3 drops the anchors so they cannot be selected or extracted from the
    # shipped file; if that moved anything, keep the pass-2 file instead.
    global MARKERS
    MARKERS = False
    write(pages)
    subprocess.run(RENDER, check=True)
    wrong = verify(RENDER[-1], pages)
    if wrong:
        print("pass 3 shifted the pagination -> re-rendering with anchors:", wrong,
              file=sys.stderr)
        MARKERS = True
        write(pages)
        subprocess.run(RENDER, check=True)
    else:
        print("pass 3: anchors removed, all %d entries verified in place" % len(pages))

if __name__ == "__main__":
    main()
