# -*- coding: utf-8 -*-
"""Builds "English from Scratch" Books 1–2 as one volume, with a contents page
that carries real page numbers. The three-pass machinery lives in volume.py.
"""
import build, book3, gbook1, gbook2, volume

RENDER = ["node", "render.mjs", "genall.html", "English-from-Scratch-Books1-2.pdf"]
MARKERS = True

VOL_CSS = volume.MARK_CSS + """
.vcover{height:240mm;display:flex;flex-direction:column;justify-content:space-between;
  text-align:center;padding:4mm 0 0}
.vcover .mark{font-family:var(--emoji);font-size:46px;letter-spacing:5px}
.vcover h1{font-size:37px;color:var(--brand-deep);letter-spacing:-.016em;margin:10px 0 0}
.vcover .sub{font-family:var(--serif);font-size:17px;color:var(--ink-soft);margin-top:10px}
.vcover .uzt{font-size:13.5px;color:var(--muted);margin-top:16px;line-height:1.7}
.vcover .rulebar{height:3px;background:linear-gradient(90deg,var(--brand),var(--brass));
  border-radius:2px;margin:24px auto 0;width:140px}
.vcover .two{display:flex;gap:11px;justify-content:center;margin-top:20px}
.vcover .two .b{border:1px solid var(--rule);border-radius:8px;padding:11px 16px;
  background:var(--surface-2);min-width:150px}
.vcover .two .b em{display:block;font-style:normal;font-size:10px;letter-spacing:.14em;
  text-transform:uppercase;color:var(--brass);font-weight:700}
.vcover .two .b b{display:block;font-size:13px;margin-top:3px;color:var(--brand-deep)}
.vcover .two .b span{display:block;font-size:10px;color:var(--muted);margin-top:2px}
.vcover .foot{font-size:10px;color:var(--faint);padding-bottom:4mm;line-height:1.8}
.toc{width:100%;border-collapse:collapse}
.toc td{padding:4px 8px;border-bottom:1px solid var(--rule-soft);vertical-align:baseline}
.toc tr.part td{background:var(--brand-deep);color:#fff;font-weight:700;font-size:11.5px;
  padding:6px 9px;border:0}
.toc tr.part td span{font-weight:400;opacity:.8}
.toc .n{width:30px;font-family:var(--serif);font-weight:700;color:var(--brand);font-size:12px}
.toc .t{font-size:11px}
.toc .t span{color:var(--muted);display:block;font-size:10px}
.toc .pg{width:40px;text-align:right;font-family:var(--serif);font-weight:700;
  color:var(--ink-soft);font-size:12px}
.toc tr.fm .t{color:var(--ink-soft)}
"""

# (marker, kind, number, English, Ўзбекча)
PLAN = [
    ("B1","part", "1-китоб","First Steps",                "Биринчи қадамлар · A0 · мавзу 1–8"),
    ("F1","front","",       "Бу китоб қандай ишлайди",    ""),
    ("F2","front","",       "Талаффуз калити",            "ўзбек тилида йўқ олтита товуш"),
    ("F3","front","",       "Мавзулар режаси",            "бутун курс — 32 мавзу"),
    ("T01","topic","1",     "The alphabet and sounds",    "Алифбо ва товушлар"),
    ("T02","topic","2",     "Greetings and introductions","Саломлашиш ва танишиш"),
    ("T03","topic","3",     "Numbers 0–100",              "Сонлар 0–100"),
    ("T04","topic","4",     "Personal information",       "Шахсий маълумот"),
    ("T05","topic","5",     "Family",                     "Оила"),
    ("T06","topic","6",     "Colours and descriptions",   "Ранглар ва сифатлар"),
    ("T07","topic","7",     "Things around you",          "Атрофдаги нарсалар"),
    ("T08","topic","8",     "Days, months and time",      "Кунлар, ойлар, вақт"),
    ("A1","back", "",       "Жавоблар ва режа",           "1-китоб"),
    ("B2","part", "2-китоб","Everyday Life",              "Кундалик ҳаёт · A1 · мавзу 9–16"),
    ("T09","topic","9",     "Daily routine",              "Кундалик тартиб"),
    ("T10","topic","10",    "Food and drink",             "Овқат ва ичимликлар"),
    ("T11","topic","11",    "The home",                   "Уй"),
    ("T12","topic","12",    "Clothes and shopping",       "Кийим ва харид"),
    ("T13","topic","13",    "The city and directions",    "Шаҳар ва йўл сўраш"),
    ("T14","topic","14",    "Jobs and work",              "Касб ва иш"),
    ("T15","topic","15",    "The body and health",        "Тана ва соғлиқ"),
    ("T16","topic","16",    "Weather and seasons",        "Об-ҳаво ва фасллар"),
    ("A2","back", "",       "Жавоблар ва режа",           "2-китоб"),
]

NEEDLE = {"B1": "Book 1: First Steps", "B2": "Book 2: Everyday Life",
          "F1": "Бу китоб қандай ишлайди", "F2": "олтита товуш",
          "F3": "Бутун курс", "A1": "Машқларнинг жавоблари",
          "A2": "Машқларнинг жавоблари"}

def at(html, tag):
    return volume.at_head(html, tag, MARKERS)

def vol_cover():
    return """<section class="page vcover">
  <div>
    <div class="mark">🔤 🏠 🗣️</div>
    <h1>English<br>from Scratch</h1>
    <div class="sub">Books 1–2 · From zero to everyday English</div>
    <div class="rulebar"></div>
    <div class="uzt"><b>Инглиз тили — нолдан бошлаб</b><br>
      Алифбодан кундалик суҳбатгача. 16 мавзу, иккита китоб.<br>
      Расмли луғат · кирилл алифбосида талаффуз · изоҳлар ўзбек тилида.</div>
    <div class="two">
      <div class="b"><em>1-китоб · A0</em><b>First Steps</b><span>Мавзу 1–8</span></div>
      <div class="b"><em>2-китоб · A1</em><b>Everyday Life</b><span>Мавзу 9–16</span></div>
    </div>
  </div>
  <div>
    <div class="foot">Ҳар бир сўз: <b>расм</b> · <b>инглизча</b> · <b>талаффуз (кирилл)</b> · <b>ўзбекча</b><br>
      Инглизчани умуман билмасангиз ҳам биринчи бетдан бошлашингиз мумкин.</div>
  </div>
</section>"""

def contents(pages=None):
    o = ['<section class="page">',
         '<div class="ph"><div class="kick">Мундарижа</div>',
         '<h2>Иккита китоб, 16 мавзу</h2>',
         '<div class="uz">Курснинг қолган 16 мавзуси 3 ва 4-китобда</div>',
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
                     % (cls, build.esc(no), build.esc(en),
                        '<span>%s</span>' % build.esc(uz) if uz else '', pg))
    o.append('</tbody></table>')
    o.append(build.box("tip", "Қандай ишлатиш керак",
             'Кетма-кет ўқинг — ҳар бир мавзу олдингисига таянади. Ҳар мавзудан '
             'кейин машқларни ишланг, кейин жавобларни текширинг. Кунига '
             '20 дақиқа — ҳафтада бир марта икки соатдан кўра фойдалироқ.'))
    o.append('</section>')
    return "".join(o)

def body(pages=None):
    p = [vol_cover(), contents(pages)]
    p.append(at(gbook1.cover(), "B1"))
    p.append(at(gbook1.about(), "F1"))
    p.append(at(gbook1.sound_key(), "F2"))
    p.append(at(gbook1.roadmap(), "F3"))
    for i, fn in enumerate([gbook1.topic1, gbook1.topic2, gbook1.topic3, gbook1.topic4,
                            gbook1.topic5, gbook1.topic6, gbook1.topic7, gbook1.topic8],
                           start=1):
        p.append(at(fn(), "T%02d" % i))
    p.append(at(gbook1.answers(), "A1"))
    p.append(gbook1.closing())
    p.append(at(gbook2.cover(), "B2"))
    p.append(gbook2.about())
    for i, fn in enumerate([gbook2.topic9, gbook2.topic10, gbook2.topic11, gbook2.topic12,
                            gbook2.topic13, gbook2.topic14, gbook2.topic15, gbook2.topic16],
                           start=9):
        p.append(at(fn(), "T%02d" % i))
    p.append(at(gbook2.answers(), "A2"))
    p.append(gbook2.closing())
    return "".join(p)

def write(pages=None):
    doc = ("<!doctype html><html lang='uz'><head><meta charset='utf-8'>"
           "<meta name='running-footer' content='Инглиз тили — нолдан бошлаб'>"
           "<title>English from Scratch — Books 1–2</title>"
           "<style>%s%s%s%s%s</style></head><body>%s</body></html>"
           % (build.CSS, book3.EXTRA_CSS, gbook1.EXTRA_CSS, gbook2.EXTRA_CSS, VOL_CSS,
              body(pages)))
    with open("genall.html", "w", encoding="utf-8") as f:
        f.write(doc)

def main():
    def emit(pages, markers):
        global MARKERS
        MARKERS = markers
        write(pages)
    needles = {t: NEEDLE.get(t, en) for t, kind, no, en, uz in PLAN}
    volume.build(emit, RENDER, [t for t, *_ in PLAN], needles)

if __name__ == "__main__":
    main()
