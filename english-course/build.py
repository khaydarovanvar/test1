# -*- coding: utf-8 -*-
"""Builds book.html from content.py.

Print-first: the page box, the margins and the running footer are set by
render.mjs; everything here only has to avoid breaking in ugly places.
Design tokens are borrowed from site/assets/styles.css so the book looks
like it belongs to the rest of the materials.
"""
import html as H
import re
import sys
import content as C

# --------------------------------------------------------------- markup -----
_STRESS = re.compile(r"\*(.+?)\*")
_HARD   = re.compile(r"`(.+?)`")

def fmt(s):
    """*x* -> stressed syllable, `x` -> a sound Uzbek does not have."""
    s = H.escape(s, quote=False)
    s = _STRESS.sub(r'<b class="st">\1</b>', s)
    s = _HARD.sub(r'<i class="hd">\1</i>', s)
    return s

def esc(s):
    return H.escape(s, quote=False)

def plain(s):
    return s.replace("*", "").replace("`", "")

CSS = """
:root{
  --paper:#FAF9F5; --surface:#FFFFFF; --surface-2:#F4F2EC; --surface-3:#EDEAE1;
  --ink:#12262C; --ink-soft:#2E464D; --muted:#5F7076; --faint:#8B9A9F;
  --rule:#E3E0D7; --rule-soft:#EFEDE5;
  --brand:#0E5C63; --brand-deep:#0A3F45; --brand-tint:#E4F0F0;
  --brass:#B0801F; --brass-tint:#F7EEDA;
  --easy:#3C7A50; --easy-tint:#E6F1E8;
  --serif:"DejaVu Serif",Georgia,serif;
  --sans:"DejaVu Sans",Arial,sans-serif;
  --emoji:"Noto Color Emoji";
}
@page{ size:A4; }
*{box-sizing:border-box}
body{margin:0;padding:0 16mm;background:#fff;color:var(--ink);
  font-family:var(--sans);font-size:10.5px;line-height:1.5;
  -webkit-print-color-adjust:exact;print-color-adjust:exact}
.em{font-family:var(--emoji);font-style:normal;line-height:1}
b.st{font-weight:700;color:var(--ink)}
i.hd{font-style:normal;color:var(--brand);border-bottom:1.6px dotted var(--brand);
  padding-bottom:.5px}

/* ---------- page scaffolding ---------- */
.page{break-before:page}
.page:first-of-type{break-before:auto}
h1,h2,h3,h4{font-family:var(--serif);margin:0;line-height:1.2}

/* ---------- cover ---------- */
.cover{height:245mm;display:flex;flex-direction:column;justify-content:space-between;
  text-align:center;padding:4mm 0 0}
.cover .mark{font-family:var(--emoji);font-size:52px;letter-spacing:4px}
.cover h1{font-size:33px;color:var(--brand-deep);letter-spacing:-.015em;margin:8px 0 0}
.cover .sub{font-family:var(--serif);font-size:16px;color:var(--ink-soft);margin-top:10px}
.cover .uzt{font-size:13.5px;color:var(--muted);margin-top:16px;line-height:1.7}
.cover .bk{display:inline-block;margin-top:22px;padding:8px 20px;border:1.5px solid var(--brass);
  border-radius:999px;color:var(--brass);font-size:11.5px;letter-spacing:.14em;text-transform:uppercase}
.cvprev{display:flex;gap:9px;justify-content:center;margin-top:30px}
.cvprev .pv{border:1px solid var(--rule);border-radius:7px;padding:9px 13px;
  background:var(--surface-2);min-width:94px}
.cvprev .pv .em{font-size:27px;display:block}
/* direct children only: fmt() nests <b>/<i> inside these for stress and the
   hard sounds, and those must stay inline or the pronunciation breaks apart */
.cvprev .pv>b{display:block;font-size:12px;margin-top:4px}
.cvprev .pv>i{display:block;font-style:normal;font-size:11px;color:var(--brand);
  white-space:nowrap}
.cvprev .pv>u{display:block;text-decoration:none;font-size:10px;color:var(--muted)}
.cvprev .pv>i b,.cvprev .pv>i i{display:inline}
.cover .rulebar{height:3px;background:linear-gradient(90deg,var(--brand),var(--brass));
  border-radius:2px;margin:26px auto 0;width:120px}
.cover .foot{font-size:10px;color:var(--faint);padding-bottom:4mm;line-height:1.8}
.cover .strip{font-family:var(--emoji);font-size:30px;letter-spacing:7px;margin-top:4px}

/* ---------- headings ---------- */
.ph{margin:0 0 14px}
.ph .kick{font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--brass);
  font-weight:700}
.ph h2{font-size:23px;color:var(--brand-deep);margin-top:5px}
.ph .uz{font-size:12.5px;color:var(--muted);margin-top:3px}
.ph .bar{height:2.5px;width:52px;background:var(--brand);border-radius:2px;margin-top:9px}

.topichead{display:flex;gap:14px;align-items:flex-start;border-bottom:2px solid var(--brand);
  padding-bottom:11px;margin-bottom:14px;margin-top:22px;
  break-after:avoid;break-inside:avoid}
section:first-of-type .topichead,.page>.topichead:first-child{margin-top:0}
.topichead .no{font-family:var(--serif);font-size:40px;font-weight:700;color:var(--brand);
  line-height:.85;min-width:52px}
.topichead h2{font-size:22px;color:var(--brand-deep)}
.topichead .uz{font-size:12.5px;color:var(--muted);margin-top:2px}
.topichead .goal{font-size:10.5px;color:var(--ink-soft);margin-top:7px;
  background:var(--brand-tint);padding:6px 9px;border-radius:5px}
.topichead .goal b{color:var(--brand-deep)}

h3.sec{font-size:14px;color:var(--brand-deep);margin:16px 0 8px;
  padding-left:9px;border-left:3px solid var(--brass);break-after:avoid}
h3.sec span{font-size:11px;color:var(--muted);font-family:var(--sans);font-weight:400}
p.lead{margin:0 0 10px;color:var(--ink-soft);font-size:10.5px;break-after:avoid}

/* ---------- vocabulary ---------- */
.vgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:7px}
.vgrid.two{grid-template-columns:repeat(2,1fr)}
.vgrid.one{grid-template-columns:1fr}
.vgrid.four{grid-template-columns:repeat(4,1fr)}
.vgrid.four .vcard{padding:6px 7px;gap:7px}
.vgrid.four .vcard .em{font-size:20px;width:23px}
.vgrid.four .vcard .en{font-size:11px}
.vgrid.four .vcard .pr{font-size:9.5px}
.vgrid.four .vcard .uz{font-size:9px}
.vcard{display:flex;gap:9px;align-items:center;border:1px solid var(--rule);
  border-radius:6px;padding:7px 9px;background:var(--surface);break-inside:avoid}
.vcard .em{font-size:25px;flex:none;width:30px;text-align:center}
.vcard .tx{min-width:0;flex:1}
.vcard .en{font-weight:700;font-size:12px;color:var(--ink);letter-spacing:-.005em}
.vcard .pr{font-size:10.5px;color:var(--brand);margin-top:1px}
.vcard .uz{font-size:10px;color:var(--muted);margin-top:1px}

/* ---------- alphabet ---------- */
.alpha{display:grid;grid-template-columns:repeat(4,1fr);gap:7px}
.al{border:1px solid var(--rule);border-radius:6px;padding:7px 8px;background:var(--surface);
  break-inside:avoid;display:flex;gap:8px;align-items:center}
.al .ltr{font-family:var(--serif);font-size:19px;font-weight:700;color:var(--brand);
  min-width:40px;line-height:1.05}
.al .ltr small{display:block;font-size:9px;color:var(--brass);font-family:var(--sans);
  font-weight:400;letter-spacing:.02em}
.al .em{font-size:20px;flex:none}
.al .w{min-width:0}
.al .w .en{font-weight:700;font-size:10.5px}
.al .w .pr{font-size:9.5px;color:var(--brand)}
.al .w .uz{font-size:9px;color:var(--muted)}

/* ---------- tables ---------- */
table{width:100%;border-collapse:collapse;font-size:10.5px}
th{background:var(--surface-2);color:var(--ink-soft);font-size:9.5px;text-transform:uppercase;
  letter-spacing:.09em;text-align:left;padding:6px 8px;border-bottom:1.5px solid var(--rule)}
td{padding:5.5px 8px;border-bottom:1px solid var(--rule-soft);vertical-align:top}
tr{break-inside:avoid}
tbody tr:nth-child(even) td{background:#FBFAF7}
td.en{font-weight:700;width:30%}
td.pr{color:var(--brand);width:28%}
td.uz{color:var(--muted)}
td.num{font-family:var(--serif);font-weight:700;color:var(--brass);width:46px;font-size:12px}

/* ---------- callouts ---------- */
.note{border-left:3px solid var(--brass);background:var(--brass-tint);padding:9px 11px;
  border-radius:0 5px 5px 0;margin:11px 0;font-size:10.5px;break-inside:avoid}
.note b{color:#7A5A12}
.note .t{font-weight:700;color:#7A5A12;display:block;margin-bottom:3px}
.warn{border-left:3px solid #A34430;background:#F8E9E4;padding:9px 11px;
  border-radius:0 5px 5px 0;margin:11px 0;font-size:10.5px;break-inside:avoid}
.warn .t{font-weight:700;color:#8E3A28;display:block;margin-bottom:3px}
.tip{border-left:3px solid var(--easy);background:var(--easy-tint);padding:9px 11px;
  border-radius:0 5px 5px 0;margin:11px 0;font-size:10.5px;break-inside:avoid}
.tip .t{font-weight:700;color:#2E6440;display:block;margin-bottom:3px}

/* ---------- teen / ty ---------- */
.tt{display:grid;grid-template-columns:1fr 1fr;gap:0;border:1px solid var(--rule);
  border-radius:7px;overflow:hidden;break-inside:avoid}
.tt .hd2{background:var(--brand);color:#fff;font-weight:700;padding:6px 10px;font-size:11px;
  text-align:center}
.tt .hd2.b{background:var(--brass)}
.tt .c{padding:6px 10px;border-bottom:1px solid var(--rule-soft);font-size:11px}
.tt .c:nth-child(4n+3){background:#FBFAF7}
.tt .c:nth-child(4n+4){background:#FBFAF7}
.tt .c .pr{color:var(--brand);font-size:10px}

/* ---------- roadmap ---------- */
.rm{width:100%;border-collapse:collapse}
.rm td{padding:3px 8px;border-bottom:1px solid var(--rule-soft);vertical-align:top}
.rm .n{font-family:var(--serif);font-weight:700;color:var(--brand);width:30px;font-size:13px}
.rm .t{width:36%}
.rm .t b{font-size:11px}
.rm .t span{display:block;color:var(--muted);font-size:10px}
.rm .d{font-size:10px;color:var(--ink-soft)}
.rm .s{width:76px;text-align:right}
.badge{display:inline-block;padding:2px 7px;border-radius:999px;font-size:8.5px;
  letter-spacing:.06em;text-transform:uppercase;font-weight:700;white-space:nowrap}
.badge.ready{background:var(--easy-tint);color:#2E6440;border:1px solid #BBD9C4}
.badge.next{background:var(--brass-tint);color:#7A5A12;border:1px solid #E2CB92}
.badge.later{background:var(--surface-2);color:var(--muted);border:1px solid var(--rule)}
.parthead{background:var(--brand-deep);color:#fff;padding:6px 11px;border-radius:5px;
  margin:12px 0 6px;break-inside:avoid;break-after:avoid}
/* shared: a labelled rule / pattern box */
.rule{display:grid;grid-template-columns:72px 1fr;gap:9px;border:1px solid var(--rule);
  border-radius:6px;margin:7px 0;overflow:hidden;break-inside:avoid}
.rule .k{background:var(--brand);color:#fff;font-weight:700;font-size:13px;
  display:flex;align-items:center;justify-content:center;padding:8px 4px;text-align:center}
.rule .b{padding:7px 9px}
.rule .b .n{font-size:9.5px;color:var(--muted);text-transform:uppercase;
  letter-spacing:.08em;margin-bottom:3px}
.rule .b .p{font-size:11px}
.rule .b .p b{color:var(--brand-deep)}
.rule .b .p span{color:var(--brand);font-size:10px}
/* shared: the 'what is in this book' table */
.gtab td.f{font-weight:700;width:26%}
.gtab td.n{color:var(--muted);width:30%}
.parthead b{font-size:12.5px;letter-spacing:.02em}
.parthead span{display:block;font-size:10px;opacity:.82;margin-top:1px}

/* ---------- exercises ---------- */
.ex{margin:13px 0;break-inside:avoid}
.ex .xh{font-weight:700;font-size:11.5px;color:var(--brand-deep);margin-bottom:2px}
.ex .xi{font-size:10px;color:var(--muted);margin-bottom:7px}
.xg{display:grid;gap:7px 12px}
.xc{border-bottom:1.3px solid var(--rule);padding:3px 0 4px;font-size:11px;min-height:21px;
  display:flex;align-items:baseline;gap:7px}
.xc .q{font-weight:700;color:var(--ink);white-space:nowrap}
.xc .q.emj{font-family:var(--emoji);font-size:16px}
.xc .blank{flex:1}
.mt{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.mt .col{border:1px solid var(--rule);border-radius:6px;padding:7px 9px;background:var(--surface)}
.mt .r{padding:4px 0;border-bottom:1px solid var(--rule-soft);font-size:11px}
.mt .r:last-child{border:0}
.mt .r .em{font-size:17px}

/* ---------- answer key ---------- */
.ak{columns:2;column-gap:16px;font-size:10px}
.ak .b{break-inside:avoid;margin-bottom:9px}
.ak .b b{color:var(--brand-deep);display:block;font-size:10.5px;margin-bottom:2px}
.ak .b div{color:var(--ink-soft)}

/* ---------- study plan ---------- */
.sp{display:grid;grid-template-columns:1fr 1fr;gap:9px}
.sp .c{border:1px solid var(--rule);border-radius:6px;padding:9px 11px;background:var(--surface-2);
  break-inside:avoid}
.sp .c b{display:block;color:var(--brand-deep);font-size:11px;margin-bottom:2px}
.sp .c span{font-size:10px;color:var(--ink-soft)}
.c10{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:4px}
.c10i{display:flex;gap:9px;align-items:center;border:1px solid var(--rule);
  border-radius:6px;padding:7px 10px;background:var(--surface-2);break-inside:avoid}
.c10i .n{font-family:var(--serif);font-weight:700;color:var(--brass);font-size:15px;
  min-width:17px;text-align:right}
.c10i .en{font-weight:700;font-size:11.5px}
.c10i .pr{font-size:10.5px;color:var(--brand)}
.endnote{margin-top:18px;border-top:2px solid var(--rule);padding-top:11px;font-size:10px;
  color:var(--muted);text-align:center;line-height:1.8}
"""

# ====================================================== building blocks =====
def vcards(rows, cols=3):
    cls = {1: "one", 2: "two", 3: "", 4: "four"}[cols]
    out = ['<div class="vgrid %s">' % cls]
    for em, en, pr, uz in rows:
        out.append(
            '<div class="vcard"><span class="em">%s</span><div class="tx">'
            '<div class="en">%s</div><div class="pr">%s</div><div class="uz">%s</div>'
            '</div></div>' % (em, esc(en), fmt(pr), esc(uz)))
    out.append('</div>')
    return "".join(out)

def ptable(rows, head=("English", "Талаффуз", "Ўзбекча")):
    out = ['<table><thead><tr><th>%s</th><th>%s</th><th>%s</th></tr></thead><tbody>' % head]
    for r in rows:
        out.append('<tr><td class="en">%s</td><td class="pr">%s</td><td class="uz">%s</td></tr>'
                   % (esc(r[0]), fmt(r[1]), esc(r[2])))
    out.append('</tbody></table>')
    return "".join(out)

def ntable(rows, head=("", "English", "Талаффуз", "Ўзбекча")):
    """Numbers: a leading figure column."""
    out = ['<table><thead><tr>%s</tr></thead><tbody>'
           % "".join("<th>%s</th>" % h for h in head)]
    for n, en, pr, uz in rows:
        out.append('<tr><td class="num">%s</td><td class="en">%s</td>'
                   '<td class="pr">%s</td><td class="uz">%s</td></tr>'
                   % (esc(n), esc(en), fmt(pr), esc(uz)))
    out.append('</tbody></table>')
    return "".join(out)

def topic_head(no, en, uz, goal):
    return ('<div class="topichead"><div class="no">%d</div><div>'
            '<h2>%s</h2><div class="uz">%s</div>'
            '<div class="goal"><b>Мақсад.</b> %s</div></div></div>'
            % (no, esc(en), esc(uz), esc(goal)))

def sec(title, uz=""):
    u = ' <span>— %s</span>' % esc(uz) if uz else ""
    return '<h3 class="sec">%s%s</h3>' % (esc(title), u)

def box(kind, title, body):
    return '<div class="%s"><span class="t">%s</span>%s</div>' % (kind, esc(title), body)

# ---------------------------------------------------------- exercises -------
def exercise(x):
    o = ['<div class="ex"><div class="xh">%s</div>' % esc(x["title"])]
    if x.get("hint"):
        o.append('<div class="xi">%s</div>' % esc(x["hint"]))
    k = x["kind"]
    if k == "match":
        o.append('<div class="mt"><div class="col">')
        for a, _ in x["left"]:
            cls = "em" if not a.isascii() else ""
            o.append('<div class="r"><span class="%s">%s</span></div>' % (cls, esc(a)))
        o.append('</div><div class="col">')
        for b in x["shuffled"]:
            o.append('<div class="r">%s</div>' % esc(b))
        o.append('</div></div>')
    elif k == "count":
        o.append('<div class="xg" style="grid-template-columns:repeat(2,1fr)">')
        for q, _ in x["rows"]:
            o.append('<div class="xc"><span class="q emj">%s</span>'
                     '<span class="blank"></span></div>' % q)
        o.append('</div>')
    else:
        n = 1 if x.get("wide") else x.get("cols", 2)
        o.append('<div class="xg" style="grid-template-columns:repeat(%d,1fr)">' % n)
        for q, _ in x["rows"]:
            o.append('<div class="xc"><span class="q">%s</span>'
                     '<span class="blank"></span></div>' % esc(q))
        o.append('</div>')
    o.append('</div>')
    return "".join(o)

def answer_key():
    o = ['<div class="ak">']
    for t in (1, 2, 3):
        for x in C.EXERCISES[t]:
            if x["kind"] == "match":
                pairs = ", ".join("%s → %s" % (a.strip(), b) for a, b in x["left"])
            else:
                got = [(q, a) for q, a in x["rows"] if a != "—"]
                if not got:
                    pairs = ("ўз жавобингиз — ҳар кимда ҳар хил"
                             if x["kind"] == "free"
                             else "овоз чиқариб ўқиш машқи — ёзма жавоб йўқ")
                else:
                    pairs = ",  ".join("%s → %s" % (q.strip(), a) for q, a in got)
            o.append('<div class="b"><b>Мавзу %d · %s</b><div>%s</div></div>'
                     % (t, esc(x["title"]), esc(pairs)))
    o.append('</div>')
    return "".join(o)

# ============================================================== the book =====
def cover():
    return """<section class="page cover">
  <div>
    <div class="mark">📘 ➕ 🍎</div>
    <h1>English for Teaching<br>Mathematics</h1>
    <div class="sub">Grades 1–4 · Book 1: From Zero</div>
    <div class="rulebar"></div>
    <div class="uzt"><b>Инглиз тили — бошланғич синф<br>математика ўқитувчилари учун</b><br>
      Нолдан бошлаб. Расмли луғат, кирилл алифбосида талаффуз.</div>
    <div class="bk">1-китоб · Мавзу 1–3</div>
    <div class="cvprev">
      <div class="pv"><span class="em">📘</span><b>book</b><i>бук</i><u>китоб</u></div>
      <div class="pv"><span class="em">3️⃣</span><b>three</b><i><i class="hd">с</i><i class="hd">р</i>и:</i><u>уч</u></div>
      <div class="pv"><span class="em">✏️</span><b>pencil</b><i><b>пен</b>сл</i><u>қалам</u></div>
    </div>
  </div>
  <div>
    <div class="strip">🔤 🔢 🏫</div>
    <div class="foot">Ҳар бир сўз: <b>расм</b> · <b>инглизча</b> · <b>талаффуз (кирилл)</b> · <b>ўзбекча</b><br>
      Барча изоҳлар ўзбек тилида — инглизчани билмасдан ҳам бошлаш мумкин.</div>
  </div>
</section>"""

def about():
    o = ['<section class="page">',
         '<div class="ph"><div class="kick">Бошлашдан олдин</div>',
         '<h2>Бу китоб қандай тузилган</h2>',
         '<div class="uz">Ўқишни бошлашдан олдин шу икки бетни ўқинг.</div>',
         '<div class="bar"></div></div>']
    o.append('<p class="lead">Китоб бир мақсад учун ёзилган: <b>1–4 синф математикасини '
             'инглиз тилида ўқита олиш</b>. Шунинг учун сўзлар оддий «кундалик инглизча» '
             'эмас, балки синфда, доска олдида керак бўладиган сўзлардан танланган. '
             'Биринчи кундан бошлаб ўрганган нарсангизни дарсда ишлатасиз.</p>')
    o.append(sec("Ҳар бир сўз тўрт хил кўринишда берилади"))
    o.append(vcards([("🍎", "apple", "*`э`*пл", "олма")], cols=1))
    o.append('<table style="margin-top:7px"><tbody>'
             '<tr><td class="en" style="width:22%">🍎 расм</td>'
             '<td>Сўзни таржимасиз, бирданига тушунасиз. Миямиз расмни сўздан тез эслайди.</td></tr>'
             '<tr><td class="en">apple</td><td>Инглизча ёзилиши. Шу кўринишда ўқийсиз ва ёзасиз.</td></tr>'
             '<tr><td class="en" style="color:#0E5C63"><b class="st"><i class="hd">э</i></b>пл</td>'
             '<td>Талаффузи <b>кирилл ҳарфлари билан</b>. Қалин ҳарф — <b>урғу</b> '
             '(кучли айтиладиган бўғин).</td></tr>'
             '<tr><td class="en">олма</td><td>Ўзбекча маъноси.</td></tr>'
             '</tbody></table>')
    o.append(box("note", "Иккита белги — буни эсда тутинг",
                 'Талаффузда <b class="st">қалин ҳарф</b> урғуни билдиради: <b class="st">пен</b>сл. '
                 'Остига <i class="hd">нуқтали чизиқ</i> тортилган ҳарф — ўзбек тилида '
                 '<b>умуман йўқ товуш</b>; уни кейинги бетдаги жадвалдан ўрганасиз. '
                 'Чўзиқ унли «:» билан кўрсатилади: ту: (two).'))
    o.append(sec("Қандай ўқиш керак", "беш қоида"))
    o.append('<div class="sp">')
    for t, d in C.STUDY_PLAN:
        o.append('<div class="c"><b>%s</b><span>%s</span></div>' % (esc(t), esc(d)))
    o.append('</div>')
    o.append(box("tip", "Энг муҳими",
                 'Талаффуз кирилл ҳарфлари билан берилган — бу <b>тахминий</b> ёзув, '
                 'инглиз товушлари ўзбекчага тўлиқ тўғри келмайди. Мақсад — сизни '
                 'биринчи кундан гапиртириш. Кейинроқ (4-китобда) халқаро транскрипция '
                 '[ˈæpl] билан танишасиз.'))
    o.append('</section>')
    return "".join(o)

def sound_key():
    o = ['<section class="page">',
         '<div class="ph"><div class="kick">Талаффуз калити</div>',
         '<h2>Ўзбек тилида йўқ олтита товуш</h2>',
         '<div class="uz">Нуқтали чизиқ остидаги ҳарфлар — шу товушлар</div>',
         '<div class="bar"></div></div>']
    o.append('<p class="lead">Инглиз тилидаги товушларнинг кўпи ўзбекчада ҳам бор. '
             'Фақат мана шу олтитаси янги. Уларни бир марта тўғри ўрганиб олсангиз, '
             'талаффузингиз дарҳол тушунарли бўлади.</p>')
    o.append('<table><thead><tr><th style="width:62px">Белги</th><th style="width:34%">Қайси сўзларда</th>'
             '<th>Қандай айтилади</th></tr></thead><tbody>')
    for mark, where, how in C.SOUND_KEY:
        o.append('<tr><td style="font-size:15px;text-align:center">%s</td>'
                 '<td class="en" style="width:34%%">%s</td><td class="uz">%s</td></tr>'
                 % (fmt(mark), esc(where), esc(how)))
    o.append('</tbody></table>')
    o.append(box("warn", "Энг кўп учрайдиган хато",
                 '<b>th</b> ни «т» ёки «с» деб айтиш. <i class="hd">с</i> товушида '
                 'тилнинг учи албатта тишлар <b>орасида</b> бўлади — оғиздан бироз '
                 'чиқиб туради. Кўзгу олдида синаб кўринг: <b>three</b> '
                 'деганда тилингиз кўриниб турибдими? Агар йўқ — нотўғри.'))
    o.append(box("note", "«в» ва «у» фарқи",
                 '<b>v</b> (van) — пастки лаб юқори тишга тегади, худди ўзбекча «в». '
                 '<b>w</b> (water) — лаблар <b>думалоқ</b>, тишга тегмайди, «у»га ўхшайди. '
                 'Шунинг учун китобда w ҳар доим <i class="hd">у</i> деб ёзилган.'))
    o.append(sec("Чўзиқ ва қисқа унлилар"))
    o.append('<p class="lead">Инглизчада унлининг узунлиги маънони ўзгартиради. '
             'Китобда чўзиқ унли «:» белгиси билан берилади.</p>')
    o.append('<table><thead><tr><th>Қисқа</th><th>Чўзиқ</th><th>Нима фарқи бор</th></tr></thead><tbody>'
             '<tr><td class="en">ship — шип</td><td class="en">sheep — ши:п</td>'
             '<td class="uz">кема / қўй</td></tr>'
             '<tr><td class="en">it — ит</td><td class="en">eat — и:т</td>'
             '<td class="uz">у / емоқ</td></tr>'
             '<tr><td class="en">full — фул</td><td class="en">fool — фу:л</td>'
             '<td class="uz">тўла / аҳмоқ</td></tr>'
             '</tbody></table>')
    o.append('</section>')
    return "".join(o)

def roadmap():
    o = ['<section class="page">',
         '<div class="ph"><div class="kick">Мавзулар режаси</div>',
         '<h2>Бутун курс — 16 мавзу</h2>',
         '<div class="uz">Нолдан то бутун математика дарсини инглизча олиб боргунча</div>',
         '<div class="bar"></div></div>']
    o.append('<p class="lead">Курс икки қисмдан иборат. <b>А қисми</b> — тилнинг пойдевори: '
             'ҳарф, сон, синф сўзлари, энг керакли грамматика. <b>Б қисми</b> — '
             'математика инглиз тилида: разрядлардан геометриягача. '
             'Шу китобда <b>1, 2 ва 3-мавзулар</b> тўлиқ берилган.</p>')
    o.append(box("tip", "Нега шу тартибда?",
                 'Аввал <b>ҳарф</b> — ўқий олиш учун. Кейин <b>сон</b> — чунки сиз '
                 'математика ўқитасиз, сонлар сизга биринчи кундан керак. Кейин '
                 '<b>синф сўзлари</b> — дарсни бошқариш учун. Грамматика кейин келади: '
                 'у сўзларни бир-бирига боғлайди, лекин сўзсиз грамматиканинг фойдаси йўқ.'))
    for letter, title, topics in C.ROADMAP:
        o.append('<div class="parthead"><b>%s қисми — %s</b>'
                 '<span>%d мавзу</span></div>' % (letter, esc(title), len(topics)))
        o.append('<table class="rm"><tbody>')
        for no, en, uz, desc, st in topics:
            lbl = {"ready": "шу китобда", "next": "2-китоб", "later": "3-китоб"}[st]
            o.append('<tr><td class="n">%d</td><td class="t"><b>%s</b><span>%s</span></td>'
                     '<td class="d">%s</td><td class="s"><span class="badge %s">%s</span></td></tr>'
                     % (no, esc(en), esc(uz), esc(desc), st, esc(lbl)))
        o.append('</tbody></table>')
    o.append('</section>')
    return "".join(o)

def topic1():
    o = ['<section class="page">']
    o.append(topic_head(1, "The alphabet and its sounds", "Алифбо ва товушлар",
             "26 ҳарфни таниш, номини айтиш ва ўз исмингизни инглизча ҳарфлаб бериш."))
    o.append('<p class="lead">Инглиз алифбосида <b>26 та ҳарф</b> бор. Ҳар бир ҳарфнинг '
             '<b>номи</b> (ҳарфлаб айтганда) ва <b>товуши</b> (сўз ичида ўқилганда) бор — '
             'булар кўпинча бир хил эмас. Масалан <b>C</b> ҳарфининг номи «си:», '
             'лекин <b>cat</b> сўзида «к» деб ўқилади.</p>')
    o.append(sec("26 ҳарф", "ҳарф · номи · расмли сўз"))
    o.append('<div class="alpha">')
    for cap, low, name, em, word, wpr, uz in C.ALPHABET:
        o.append('<div class="al"><div class="ltr">%s%s<small>%s</small></div>'
                 '<span class="em">%s</span><div class="w">'
                 '<div class="en">%s</div><div class="pr">%s</div><div class="uz">%s</div>'
                 '</div></div>' % (esc(cap), esc(low), fmt(name), em,
                                   esc(word), fmt(wpr), esc(uz)))
    o.append('</div>')
    o.append(sec("Унли ва ундош ҳарфлар"))
    for t, letters, note in C.VOWELS_NOTE:
        o.append('<div class="note" style="border-left-color:#0E5C63;background:#E4F0F0">'
                 '<span class="t" style="color:#0A3F45">%s</span>'
                 '<div style="font-family:DejaVu Serif,serif;font-size:15px;font-weight:700;'
                 'color:#0A3F45;letter-spacing:2px;margin:4px 0 4px">%s</div>%s</div>'
                 % (esc(t), esc(letters), esc(note)))
    o.append(box("warn", "Ўзбек ўқувчи учун қийин тўртта ҳарф",
                 '<b>W</b> — «дабл ю:», ўзбекча «в» эмас. · '
                 '<b>Q</b> — деярли ҳар доим <b>qu</b> бўлиб келади ва «к<i class="hd">у</i>» ўқилади: queen. · '
                 '<b>X</b> — сўз охирида «кс»: box, six. · '
                 '<b>C</b> — «к» ёки «с»: cat (к), city (с).'))
    o.append(sec("Исмингизни ҳарфлаб айтинг", "дарсдаги биринчи суҳбат"))
    o.append(ptable(C.NAME_SPELLING))
    o.append(box("tip", "Машқ қилинг",
                 'Ўз исмингизни, эрингизнинг исмини ва синфингиздаги 5 та ўқувчининг '
                 'исмини инглизча ҳарфлаб айтиб кўринг. Бу — алифбони ёдлашнинг '
                 'энг тез йўли.'))
    o.append(sec("Машқлар", "Мавзу 1"))
    for x in C.EXERCISES[1]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic2():
    o = ['<section class="page">']
    o.append(topic_head(2, "Numbers 0–100", "Сонлар 0–100",
             "Юзгача санаш, ўқиш ва ёзиш. Сизнинг касбингиз учун энг зарур сўзлар."))
    o.append('<p class="lead">Сиз математика ўқитасиз — демак сонлар сизнинг асосий '
             'иш қуролингиз. Бу мавзуни мукаммал биласиз: ҳар бир сонни <b>эшитганда '
             'тушуниш</b> ва <b>хатосиз айтиш</b> керак.</p>')
    o.append(sec("0 дан 10 гача", "аввал шуни мукаммал ёдланг"))
    o.append(vcards(C.NUM_0_10, cols=3))
    o.append(sec("11 дан 20 гача", "the teens"))
    o.append(ntable(C.NUM_TEENS))
    o.append(sec("Ўнликлар", "20, 30, 40 …"))
    o.append(ntable(C.NUM_TENS))
    o.append(sec("Энг муҳим бет: 13 ёки 30?", "урғу маънони ўзгартиради"))
    o.append('<p class="lead">Инглиз тилида <b>thirteen</b> (13) ва <b>thirty</b> (30) '
             'деярли бир хил эшитилади. Фарқи фақат <b>урғуда</b>. Синфда «Write thirty» '
             'деганингизда ўқувчи 13 ёзиб қўйиши — энг кўп учрайдиган англашилмовчилик.</p>')
    o.append('<div class="tt">')
    o.append('<div class="hd2">-TEEN · урғу ОХИРДА</div><div class="hd2 b">-TY · урғу БОШИДА</div>')
    for a, ap, b, bp in C.TEEN_TY:
        o.append('<div class="c">%s<div class="pr">%s</div></div>'
                 '<div class="c">%s<div class="pr">%s</div></div>'
                 % (esc(a), fmt(ap), esc(b), fmt(bp)))
    o.append('</div>')
    o.append(box("tip", "Синфда ишлатинг",
                 'Чалкашлик бўлмаслиги учун ўқитувчилар доим шундай аниқлаштиради: '
                 '«Thirty — three, zero» ёки «Thirteen — one, three». '
                 'Сиз ҳам шу усулни ишлатинг.'))
    o.append(sec("Ёзилишидаги тузоқлар"))
    o.append('<table><tbody>')
    for a, b in C.SPELLING_TRAPS:
        o.append('<tr><td class="en" style="width:32%%">%s</td><td class="uz">%s</td></tr>'
                 % (esc(a), b))
    o.append('</tbody></table>')
    o.append(sec("21 дан 99 гача", "ўнлик + бирлик, чизиқча билан"))
    o.append('<p class="lead">Қоида оддий: аввал ўнлик, кейин чизиқча, кейин бирлик. '
             '<b>47 = forty-seven</b>. Ўзбекчадагидек тартибда.</p>')
    o.append(ntable(C.NUM_21_99))
    o.append(sec("Тартиб сонлар", "биринчи, иккинчи …"))
    o.append('<p class="lead">Дарсда доим керак: «the <b>first</b> question», '
             '«the <b>second</b> row», «the <b>third</b> example».</p>')
    o.append(ntable(C.ORDINALS, head=("", "English", "Талаффуз", "Ўзбекча")))
    o.append(sec("Сонлар билан ишлатиладиган гаплар"))
    o.append(ptable(C.NUM_PHRASES))
    o.append(sec("Машқлар", "Мавзу 2"))
    for x in C.EXERCISES[2]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic3():
    o = ['<section class="page">']
    o.append(topic_head(3, "The classroom", "Синфхона",
             "Синф жиҳозлари, саломлашиш ва бутун дарсни олиб борадиган 20 та гап."))
    o.append('<p class="lead">Бу мавзудан кейин сиз дарсни <b>бошидан охиригача</b> '
             'инглизча олиб бора оласиз — ҳали грамматикани билмасдан туриб ҳам. '
             'Тайёр гапларни ёдлаш — тилни тез ишга солишнинг энг самарали йўли.</p>')
    o.append(sec("Синфдаги нарсалар", "things in the classroom"))
    o.append(vcards(C.CLASS_THINGS, cols=3))
    o.append(sec("Одамлар ва жойлар", "people and places"))
    o.append(vcards(C.CLASS_PEOPLE, cols=3))
    o.append(sec("Саломлашиш ва одоб сўзлари"))
    o.append(vcards(C.GREETINGS, cols=3))
    o.append(sec("20 та ўқитувчи гапи", "дарсни шулар билан олиб борасиз"))
    o.append('<p class="lead">Буларни ёдланг — ҳар бири дарсда кунига бир неча марта '
             'керак бўлади. Ҳар куни 5 тадан ўрганинг, тўрт кунда ҳаммаси тайёр.</p>')
    o.append(ptable(C.TEACHER_PHRASES))
    o.append(box("note", "Please сўзи ҳақида",
                 'Инглиз тилида буйруқ гап қўпол эшитилмаслиги учун охирига ёки '
                 'бошига <b>please</b> қўшилади: «Sit down, <b>please</b>». '
                 'Болалар билан ишлаганда буни доим ишлатинг — улар ҳам сиздан '
                 'ўрганади.'))
    o.append(sec("Машқлар", "Мавзу 3"))
    for x in C.EXERCISES[3]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def answers():
    o = ['<section class="page">',
         '<div class="ph"><div class="kick">Жавоблар</div>',
         '<h2>Машқларнинг жавоблари</h2>',
         '<div class="uz">Аввал ўзингиз ишланг, кейин текширинг</div>',
         '<div class="bar"></div></div>']
    o.append(answer_key())
    o.append('</section><section class="page">')
    o.append('<div class="ph"><div class="kick">Охирги бет</div>'
             '<h2>Режа ва доимий эслатма</h2>'
             '<div class="uz">Бу бетни кесиб олиб, стол устига қўйинг</div>'
             '<div class="bar"></div></div>')
    o.append(sec("Беш ҳафталик режа", "шу китобни қандай тугатиш керак"))
    o.append('<table><thead><tr><th style="width:84px">Ҳафта</th><th>Нима қилинади</th>'
             '<th style="width:92px">Кунига</th></tr></thead><tbody>')
    for w, d, t in C.WEEK_PLAN:
        o.append('<tr><td class="en">%s</td><td class="uz">%s</td>'
                 '<td class="pr">%s</td></tr>' % (esc(w), esc(d), esc(t)))
    o.append('</tbody></table>')
    o.append(sec("10 та гап — бутун дарс шулар билан бошланади"))
    o.append('<div class="c10">')
    for i, (en, pr) in enumerate(C.CHEAT_10, 1):
        o.append('<div class="c10i"><span class="n">%d</span><div>'
                 '<div class="en">%s</div><div class="pr">%s</div></div></div>'
                 % (i, esc(en), fmt(pr)))
    o.append('</div>')
    o.append('<div class="endnote"><b>1-китоб тугади.</b><br>'
             'Кейинги китобда: ранглар ва шакллар, бирлик–кўплик, '
             '«to be» феъли, буйруқ гаплар ва саволлар.<br>'
             'Ундан кейин — математика инглиз тилида: разрядлар, тўрт амал, '
             'касрлар, ўлчов, геометрия.</div>')
    o.append('</section>')
    return "".join(o)

def main():
    doc = ("<!doctype html><html lang='uz'><head><meta charset='utf-8'>"
           "<meta name='running-footer' content='Инглиз тили — бошланғич синф математика ўқитувчилари учун'>"
           "<title>English for Teaching Mathematics — Book 1</title>"
           "<style>%s</style></head><body>%s</body></html>"
           % (CSS, cover() + about() + sound_key() + roadmap()
              + topic1() + topic2() + topic3() + answers()))
    with open("book.html", "w", encoding="utf-8") as f:
        f.write(doc)
    print("book.html written: %.1f KB" % (len(doc.encode()) / 1024))

if __name__ == "__main__":
    main()
