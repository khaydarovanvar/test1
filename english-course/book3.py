# -*- coding: utf-8 -*-
"""Builds book3.html — topics 9–16, mathematics in English.

Reuses the design system from build.py. The diagrams are generated SVG:
fraction circles and bars, clock faces, angles and the 3-D solids, because
every one of them is a figure a pupil has to read, not an illustration.
"""
import math
import content3 as C
from build import CSS, fmt, esc, vcards, ptable, topic_head, sec, box, exercise

BR, TINT, BRASS = "#0E5C63", "#E4F0F0", "#B0801F"

# ------------------------------------------------------------- fractions ----
def _arc(cx, cy, r, a0, a1):
    x0, y0 = cx + r * math.cos(a0), cy + r * math.sin(a0)
    x1, y1 = cx + r * math.cos(a1), cy + r * math.sin(a1)
    large = 1 if (a1 - a0) > math.pi else 0
    return ("M%.2f,%.2f L%.2f,%.2f A%.2f,%.2f 0 %d 1 %.2f,%.2f Z"
            % (cx, cy, x0, y0, r, r, large, x1, y1))

def frac_circle(n, k, size=58):
    """A circle cut into n equal parts with k of them shaded."""
    cx = cy = 30.0
    r = 25.0
    out = []
    for i in range(n):
        a0 = math.radians(-90 + i * 360 / n)
        a1 = math.radians(-90 + (i + 1) * 360 / n)
        fill = BR if i < k else "#FFFFFF"
        out.append('<path d="%s" fill="%s" stroke="%s" stroke-width="1.6"/>'
                   % (_arc(cx, cy, r, a0, a1), fill, BR))
    return ('<svg width="%d" height="%d" viewBox="0 0 60 60">%s</svg>'
            % (size, size, "".join(out)))

def frac_bar(n, k, w=150, h=30):
    """The same fraction as a bar — the model used from Grade 2 onwards."""
    seg = 140.0 / n
    out = []
    for i in range(n):
        out.append('<rect x="%.2f" y="5" width="%.2f" height="24" fill="%s" '
                   'stroke="%s" stroke-width="1.6"/>'
                   % (5 + i * seg, seg, BR if i < k else "#FFFFFF", BR))
    return ('<svg width="%d" height="%d" viewBox="0 0 150 34">%s</svg>'
            % (w, h, "".join(out)))

# ----------------------------------------------------------------- clock ----
def clock(h, m, size=76):
    cx = cy = 40.0
    out = ['<circle cx="40" cy="40" r="35" fill="#fff" stroke="%s" stroke-width="2.2"/>' % BR]
    for i in range(12):
        a = math.radians(-90 + i * 30)
        r0, r1 = 29.0, 34.0
        out.append('<line x1="%.2f" y1="%.2f" x2="%.2f" y2="%.2f" stroke="%s" '
                   'stroke-width="%.1f"/>'
                   % (cx + r0 * math.cos(a), cy + r0 * math.sin(a),
                      cx + r1 * math.cos(a), cy + r1 * math.sin(a), BR,
                      2.0 if i % 3 == 0 else 1.0))
    ah = math.radians(-90 + (h % 12) * 30 + m * 0.5)
    am = math.radians(-90 + m * 6)
    out.append('<line x1="40" y1="40" x2="%.2f" y2="%.2f" stroke="%s" stroke-width="3.4" '
               'stroke-linecap="round"/>'
               % (cx + 17 * math.cos(ah), cy + 17 * math.sin(ah), "#12262C"))
    out.append('<line x1="40" y1="40" x2="%.2f" y2="%.2f" stroke="%s" stroke-width="2.4" '
               'stroke-linecap="round"/>'
               % (cx + 25 * math.cos(am), cy + 25 * math.sin(am), BRASS))
    out.append('<circle cx="40" cy="40" r="2.6" fill="#12262C"/>')
    return ('<svg width="%d" height="%d" viewBox="0 0 80 80">%s</svg>'
            % (size, size, "".join(out)))

# ---------------------------------------------------------------- angles ----
def angle(deg, size=86):
    """Two rays from one vertex, with the arc that names the angle."""
    vx, vy, L = 12.0, 58.0, 58.0
    a = math.radians(-deg)
    x2, y2 = vx + L * math.cos(a), vy + L * math.sin(a)
    sq = ""
    if deg == 90:                      # the square marker, not an arc
        sq = ('<path d="M%.1f,%.1f L%.1f,%.1f L%.1f,%.1f" fill="none" stroke="%s" '
              'stroke-width="1.6"/>' % (vx + 11, vy, vx + 11, vy - 11, vx, vy - 11, BRASS))
    else:
        r = 19.0
        sq = ('<path d="M%.2f,%.2f A%.2f,%.2f 0 0 0 %.2f,%.2f" fill="none" stroke="%s" '
              'stroke-width="1.6"/>'
              % (vx + r, vy, r, r, vx + r * math.cos(a), vy + r * math.sin(a), BRASS))
    return ('<svg width="%d" height="%d" viewBox="0 0 80 70">'
            '<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" stroke-width="2.4"/>'
            '<line x1="%.1f" y1="%.1f" x2="%.2f" y2="%.2f" stroke="%s" stroke-width="2.4"/>'
            '%s<circle cx="%.1f" cy="%.1f" r="2.6" fill="%s"/></svg>'
            % (size, size, vx, vy, vx + L, vy, BR, vx, vy, x2, y2, BR, sq, vx, vy, BR))

# -------------------------------------------------------------- 3-D solids ---
def solid(kind, size=64):
    s, f, d = BR, TINT, 'stroke-dasharray="3 2.5"'
    body = {
      "cube":
        '<polygon points="8,20 22,8 52,8 38,20" fill="%s" stroke="%s" stroke-width="1.8"/>'
        '<polygon points="38,20 52,8 52,36 38,48" fill="#CFE4E4" stroke="%s" stroke-width="1.8"/>'
        '<rect x="8" y="20" width="30" height="28" fill="%s" stroke="%s" stroke-width="1.8"/>'
        % (f, s, s, f, s),
      "cuboid":
        '<polygon points="6,22 18,10 54,10 42,22" fill="%s" stroke="%s" stroke-width="1.8"/>'
        '<polygon points="42,22 54,10 54,34 42,46" fill="#CFE4E4" stroke="%s" stroke-width="1.8"/>'
        '<rect x="6" y="22" width="36" height="24" fill="%s" stroke="%s" stroke-width="1.8"/>'
        % (f, s, s, f, s),
      "sphere":
        '<circle cx="30" cy="28" r="21" fill="%s" stroke="%s" stroke-width="1.8"/>'
        '<ellipse cx="30" cy="28" rx="21" ry="7" fill="none" stroke="%s" stroke-width="1.3" %s/>'
        % (f, s, s, d),
      "cylinder":
        '<path d="M9,14 L9,42 A21,7 0 0 0 51,42 L51,14 Z" fill="%s" stroke="%s" stroke-width="1.8"/>'
        '<ellipse cx="30" cy="14" rx="21" ry="7" fill="#CFE4E4" stroke="%s" stroke-width="1.8"/>'
        % (f, s, s),
      "cone":
        '<path d="M30,6 L51,44 A21,7 0 0 1 9,44 Z" fill="%s" stroke="%s" stroke-width="1.8"/>'
        '<ellipse cx="30" cy="44" rx="21" ry="7" fill="none" stroke="%s" stroke-width="1.3" %s/>'
        % (f, s, s, d),
      "pyramid":
        '<polygon points="30,6 54,42 6,42" fill="%s" stroke="%s" stroke-width="1.8"/>'
        '<polygon points="30,6 54,42 30,50 6,42" fill="none" stroke="%s" stroke-width="1.3"/>'
        '<line x1="6" y1="42" x2="30" y2="50" stroke="%s" stroke-width="1.3"/>'
        '<line x1="54" y1="42" x2="30" y2="50" stroke="%s" stroke-width="1.3"/>'
        '<line x1="30" y1="6" x2="30" y2="50" stroke="%s" stroke-width="1.1" %s/>'
        % (f, s, s, s, s, s, d),
    }[kind]
    return '<svg width="%d" height="%d" viewBox="0 0 60 56">%s</svg>' % (size, size, body)

def number_line(lo, hi, marks):
    """marks: list of (value, label) shown under the line."""
    w, x0, x1 = 480.0, 24.0, 456.0
    span = float(hi - lo)
    out = ['<line x1="%.0f" y1="26" x2="%.0f" y2="26" stroke="%s" stroke-width="2"/>'
           % (x0, x1, BR)]
    for v in range(lo, hi + 1):
        x = x0 + (v - lo) / span * (x1 - x0)
        out.append('<line x1="%.2f" y1="20" x2="%.2f" y2="32" stroke="%s" stroke-width="1.4"/>'
                   % (x, x, BR))
        out.append('<text x="%.2f" y="46" font-size="11" fill="#5F7076" text-anchor="middle" '
                   'font-family="DejaVu Sans">%d</text>' % (x, v))
    for v, lbl in marks:
        x = x0 + (v - lo) / span * (x1 - x0)
        out.append('<circle cx="%.2f" cy="26" r="5.4" fill="%s"/>' % (x, BRASS))
        out.append('<text x="%.2f" y="13" font-size="11.5" fill="#8A6414" text-anchor="middle" '
                   'font-weight="bold" font-family="DejaVu Sans">%s</text>' % (x, esc(lbl)))
    return ('<div class="figwrap"><svg viewBox="0 0 %d 52" class="fig wide">%s</svg></div>'
            % (int(w), "".join(out)))

def colsum(top, bot, res, op="+", carry=None):
    """A worked column sum — the layout a pupil actually writes."""
    w = max(len(top), len(bot), len(res))
    def cells(s, cls=""):
        s = s.rjust(w)
        return "".join('<td class="%s">%s</td>' % (cls, esc(c) if c != " " else "&nbsp;")
                       for c in s)
    rows = []
    if carry:
        rows.append('<tr class="cy"><td></td>%s</tr>' % cells(carry, "cy"))
    rows.append('<tr><td></td>%s</tr>' % cells(top))
    rows.append('<tr><td class="op">%s</td>%s</tr>' % (esc(op), cells(bot)))
    rows.append('<tr class="tot"><td></td>%s</tr>' % cells(res))
    return '<div class="colsum"><table>%s</table></div>' % "".join(rows)

EXTRA_CSS = """
/* fractions — the same component the teaching site uses */
.frac{display:inline-flex;flex-direction:column;vertical-align:middle;text-align:center;
  margin:0 .2em;font-style:normal;white-space:nowrap}
.frac>span:first-child{padding:0 .34em .06em;border-bottom:1.2px solid currentColor;
  line-height:1.3}
.frac>span:last-child{padding:.06em .34em 0;line-height:1.3}

.figwrap{text-align:center;margin:10px 0}
svg.fig{width:74%;max-width:380px}
svg.fig.wide{width:96%;max-width:520px}

/* a card whose picture is a drawing rather than an emoji */
.dg{display:grid;grid-template-columns:repeat(3,1fr);gap:7px}
.dg.two{grid-template-columns:repeat(2,1fr)}
.dg.four{grid-template-columns:repeat(4,1fr)}
.dc{display:flex;gap:10px;align-items:center;border:1px solid var(--rule);
  border-radius:6px;padding:7px 9px;background:var(--surface);break-inside:avoid}
.dc .t{min-width:0}
.dc .en{font-weight:700;font-size:11.5px}
.dc .pr{font-size:10.5px;color:var(--brand)}
.dc .uz{font-size:10px;color:var(--muted)}
.dc .sd{font-size:9px;color:var(--brass);margin-top:1px}
.dc.col{flex-direction:column;text-align:center;gap:3px}

/* place-value table */
.pvt{width:100%;border-collapse:collapse;margin:8px 0;break-inside:avoid}
.pvt th{background:var(--brand);color:#fff;font-size:10px;padding:5px 6px;text-align:center;
  letter-spacing:.05em;border:1px solid var(--brand)}
.pvt td{border:1px solid var(--rule);text-align:center;font-family:var(--serif);
  font-size:21px;font-weight:700;color:var(--ink);padding:7px 6px}
.pvt td.z{color:var(--faint)}

/* column arithmetic */
.colsum{display:flex;justify-content:center;margin:9px 0;break-inside:avoid}
.colsum table{border-collapse:collapse;font-family:var(--serif);font-size:20px;
  font-weight:700;color:var(--ink)}
.colsum td{padding:1px 7px;text-align:center;min-width:24px}
.colsum td.op{color:var(--brand);padding-right:3px}
.colsum tr.cy td{font-size:11px;color:var(--hard,#A34430);padding-bottom:0;height:13px}
.colsum tr.tot td{border-top:2px solid var(--ink);padding-top:2px}

/* the lesson script */
.scr{border:1px solid var(--rule);border-radius:6px;overflow:hidden;margin:8px 0;
  break-inside:avoid}
.scr .h{background:var(--surface-3);color:var(--brand-deep);font-weight:700;font-size:11px;
  padding:5px 10px;border-bottom:1px solid var(--rule)}
.scr .l{display:flex;gap:10px;padding:5px 10px;border-bottom:1px solid var(--rule-soft);
  font-size:11px}
.scr .l:last-child{border-bottom:0}
.scr .l .e{font-weight:700;flex:1.1;min-width:0}
.scr .l .p{color:var(--brand);flex:1;min-width:0;font-size:10.5px}

/* worked word problem */
.wp{border-left:3px solid var(--brand);background:var(--brand-tint);border-radius:0 6px 6px 0;
  padding:9px 12px;margin:9px 0;break-inside:avoid}
.wp .r{display:flex;gap:10px;padding:3.5px 0;font-size:10.5px;
  border-bottom:1px solid rgba(14,92,99,.13)}
.wp .r:last-child{border-bottom:0}
.wp .r .k{font-weight:700;color:var(--brand-deep);width:104px;flex:none}
.wp .r .v{flex:1}
.wp .r .u{color:var(--muted);flex:1}
"""

def dcards(items, cols=3, col=False):
    """items: (svg, English, pronunciation, Ўзбекча, extra-note or '')"""
    cls = {2: "two", 3: "", 4: "four"}[cols]
    o = ['<div class="dg %s">' % cls]
    for svg, en, pr, uz, note in items:
        o.append('<div class="dc%s">%s<div class="t"><div class="en">%s</div>'
                 '<div class="pr">%s</div><div class="uz">%s</div>%s</div></div>'
                 % (" col" if col else "", svg, esc(en), fmt(pr), esc(uz),
                    '<div class="sd">%s</div>' % esc(note) if note else ""))
    o.append('</div>')
    return "".join(o)

# ----------------------------------------------------------------- pages ----
def cover():
    return """<section class="page cover">
  <div>
    <div class="mark">➗ 📐 💯</div>
    <h1>English for Teaching<br>Mathematics</h1>
    <div class="sub">Grades 1–4 · Book 3: Mathematics in English</div>
    <div class="rulebar"></div>
    <div class="uzt"><b>Инглиз тили — бошланғич синф<br>математика ўқитувчилари учун</b><br>
      Разрядлардан геометриягача. Бутун дарсни инглизча олиб бориш.</div>
    <div class="bk">3-китоб · Мавзу 9–16</div>
    <div class="cvprev">
      <div class="pv">%s<b>one half</b><i>%s</i></div>
      <div class="pv">%s<b>half past three</b><i>%s</i></div>
      <div class="pv">%s<b>right angle</b><i>%s</i></div>
    </div>
  </div>
  <div>
    <div class="strip">🔢 ✖️ 📏</div>
    <div class="foot">Курснинг охирги китоби. 1 ва 2-китобдан кейин ўқилади.<br>
      Барча изоҳлар ўзбек тилида; талаффуз кирилл алифбосида.</div>
  </div>
</section>""" % (frac_circle(2, 1, 40), fmt("`у`ан ҳа:ф"),
        clock(3, 30, 40),      fmt("ҳа:ф па:ст `с`ри:"),
        angle(90, 46),         fmt("райт *`э`*нгл"))

def about():
    o = ['<section class="page">',
         '<div class="ph"><div class="kick">3-китоб</div>',
         '<h2>Энди — математиканинг ўзи</h2>',
         '<div class="uz">Шу китобдан кейин дарсда ўзбекча сўзга ҳожат қолмайди</div>',
         '<div class="bar"></div></div>']
    o.append('<p class="lead">1-китобда ҳарф, сон ва синф сўзлари бор эди. '
             '2-китобда гап тузишни ўргандингиз. Бу китобда эса <b>математиканинг '
             'ўз тили</b> бор: разрядлар, тўрт амал, касрлар, ўлчов, геометрия ва '
             'матнли масалалар. Ҳар бир мавзуда энг муҳими — <b>амални овоз чиқариб '
             'қандай ўқиш</b>.</p>')
    o.append(box("note", "Бу китобнинг асосий жадвали",
                 'Ҳар бир мавзуда «<b>Қандай ўқилади</b>» деган жадвал бор. Унда '
                 'битта мисол бир неча хил ўқилади — ҳаммаси тўғри. Масалан '
                 '7 + 5 = 12 ни «seven plus five <b>equals</b> twelve», '
                 '«seven plus five <b>is</b> twelve» ёки «seven and five <b>make</b> '
                 'twelve» деб ўқиш мумкин. Биттасини танланг ва доим ўшани ишлатинг.'))
    o.append(sec("Саккиз мавзу"))
    o.append('<table class="gtab"><tbody>'
             '<tr><td class="f">9 · Place value</td><td class="n">Разрядлар</td>'
             '<td>Сонни инглизча ўқиш — 2,548 гача.</td></tr>'
             '<tr><td class="f">10 · Addition, subtraction</td><td class="n">Қўшиш, айириш</td>'
             '<td>plus, minus, sum, difference; устунлаб ҳисоблаш сўзлари.</td></tr>'
             '<tr><td class="f">11 · Multiplication, division</td><td class="n">Кўпайтириш, бўлиш</td>'
             '<td>times, divided by, product, remainder; жадваллар.</td></tr>'
             '<tr><td class="f">12 · Comparing</td><td class="n">Таққослаш</td>'
             '<td>&gt;, &lt;, = белгиларини ўқиш; тартибга солиш.</td></tr>'
             '<tr><td class="f">13 · Fractions</td><td class="n">Касрлар</td>'
             '<td>half, third, quarter; сурат ва махраж.</td></tr>'
             '<tr><td class="f">14 · Measurement, time, money</td><td class="n">Ўлчов, вақт, пул</td>'
             '<td>см, кг, литр; соатни айтиш; нарх ва қайтим.</td></tr>'
             '<tr><td class="f">15 · Geometry</td><td class="n">Геометрия</td>'
             '<td>бурчак, периметр, юза; ҳажмли шакллар.</td></tr>'
             '<tr><td class="f">16 · Word problems</td><td class="n">Матнли масалалар</td>'
             '<td>Масала тилини ўқиш ва тўлиқ дарс сценарийси.</td></tr>'
             '</tbody></table>')
    o.append('</section>')
    return "".join(o)

def topic9():
    o = ['<section class="page">']
    o.append(topic_head(9, "Place value", "Разрядлар",
             "Ҳар қандай сонни инглизча хатосиз ўқиш — тўрт хонагача."))
    o.append('<p class="lead">Инглизча сонни ўқиш ўзбекчадан бир нуқтада фарқ қилади: '
             '<b>юзликдан кейин «and» қўйилади</b>. 365 — «three hundred <b>and</b> '
             'sixty-five». Бу Британия ва Кембриж дастурининг қоидаси.</p>')
    o.append(vcards(C.PV_WORDS, cols=4))
    o.append(sec("Разрядлар жадвали", "2,548 сони"))
    o.append('<table class="pvt"><thead><tr><th>Thousands<br>мингликлар</th>'
             '<th>Hundreds<br>юзликлар</th><th>Tens<br>ўнликлар</th>'
             '<th>Ones<br>бирликлар</th></tr></thead><tbody>'
             '<tr><td>2</td><td>5</td><td>4</td><td>8</td></tr></tbody></table>')
    o.append('<p class="lead">2 — <b>two thousand</b>, 5 — <b>five hundred</b>, '
             '4 — <b>forty</b>, 8 — <b>eight</b>. Ҳаммаси бирга: '
             '<b>two thousand, five hundred and forty-eight</b>.</p>')
    o.append(sec("Қандай ўқилади", "сонни овоз чиқариб"))
    o.append('<table><thead><tr><th style="width:15%">Сон</th><th>Қандай айтилади</th>'
             '<th style="width:26%">Талаффуз</th><th style="width:22%">Изоҳ</th>'
             '</tr></thead><tbody>')
    for num, say, pron, note in C.PV_SAY:
        o.append('<tr><td class="num" style="font-size:14px">%s</td>'
                 '<td class="en">%s</td><td class="pr">%s</td><td class="uz">%s</td></tr>'
                 % (esc(num), say, fmt(pron), esc(note)))
    o.append('</tbody></table>')
    o.append(box("warn", "Икки доимий хато",
                 '<b>1.</b> «three hundred<u>s</u>» деб бўлмайди — сон олдидан келганда '
                 '<b>hundred</b> ҳеч қачон кўплик бўлмайди. Худди шундай: two '
                 '<b>thousand</b>, five <b>hundred</b>. '
                 '<b>2.</b> 2,548 да вергул мингликни ажратади — ўзбекчадаги каби '
                 'бўш жой эмас, нуқта ҳам эмас.'))
    o.append(sec("Дарсда ишлатиладиган гаплар"))
    o.append(ptable(C.PV_PHRASES))
    o.append(sec("Машқлар", "Мавзу 9"))
    for x in C.EXERCISES[9]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic10():
    o = ['<section>']
    o.append(topic_head(10, "Addition and subtraction", "Қўшиш ва айириш",
             "Тўрт амалнинг иккитаси — ва уларни овоз чиқариб ўқишнинг уч хил йўли."))
    o.append(vcards(C.ADD_WORDS, cols=4))
    o.append(sec("Қандай ўқилади", "битта мисол — уч хил ўқилиши"))
    o.append('<table><thead><tr><th style="width:17%">Мисол</th><th>Қандай айтилади</th>'
             '<th style="width:31%">Талаффуз</th></tr></thead><tbody>')
    for ex, say, pron in C.ADD_SAY:
        o.append('<tr><td class="num" style="font-size:13px">%s</td><td class="en">%s</td>'
                 '<td class="pr">%s</td></tr>' % (esc(ex), esc(say), fmt(pron)))
    o.append('</tbody></table>')
    o.append(box("tip", "Биттасини танланг",
                 'Учаласи ҳам тўғри, лекин бошланғич синфда <b>«equals»</b> энг аниқ '
                 'эшитилади. Ўқувчилар билан доим бир хил сўзни ишлатинг — '
                 'улар ўрганиб қолади.'))
    o.append(sec("Белгиларнинг номлари", "signs"))
    o.append('<div class="dg four">')
    for sign, en, pron, uz in C.SIGNS:
        o.append('<div class="dc"><span style="font-family:DejaVu Serif,serif;font-size:21px;'
                 'font-weight:700;color:#0E5C63;width:22px;text-align:center;flex:none">%s</span>'
                 '<div class="t"><div class="en">%s</div><div class="pr">%s</div>'
                 '<div class="uz">%s</div></div></div>'
                 % (esc(sign), esc(en), fmt(pron), esc(uz)))
    o.append('</div>')
    o.append(sec("Устунлаб қўшиш", "carrying — кўчириш"))
    o.append('<p class="lead">Бирликлар устунидан бошланади: 7 + 5 = 12. 2 ни ёзамиз, '
             '1 ни ўнликлар устунига <b>кўчирамиз</b> — «<b>carry the one</b>».</p>')
    o.append(colsum("47", "25", "72", "+", carry="1 "))
    o.append(sec("Дарсда ишлатиладиган гаплар"))
    o.append(ptable(C.ADD_PHRASES))
    o.append(sec("Машқлар", "Мавзу 10"))
    for x in C.EXERCISES[10]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic11():
    o = ['<section>']
    o.append(topic_head(11, "Multiplication and division", "Кўпайтириш ва бўлиш",
             "Кўпайтириш жадвалини инглизча айтиш ва қолдиқли бўлишни тушунтириш."))
    o.append(vcards(C.MUL_WORDS, cols=4))
    o.append(sec("Қандай ўқилади"))
    o.append('<table><thead><tr><th style="width:17%">Мисол</th><th>Қандай айтилади</th>'
             '<th style="width:31%">Талаффуз</th></tr></thead><tbody>')
    for ex, say, pron in C.MUL_SAY:
        o.append('<tr><td class="num" style="font-size:13px">%s</td><td class="en">%s</td>'
                 '<td class="pr">%s</td></tr>' % (esc(ex), esc(say), fmt(pron)))
    o.append('</tbody></table>')
    o.append(box("note", "«times table» — жадвалнинг номи",
                 'Кўпайтириш жадвали инглизчада <b>times table</b> дейилади: '
                 '«the <b>five</b> times table» — бешга кўпайтириш жадвали. '
                 'Болалар уни «say the five times table» деган буйруқ билан айтади.'))
    o.append(box("warn", "6 × 4 — қайси бири «марта»?",
                 '«Six times four» — олти марта тўрт. Британия мактабларида буни '
                 '«<b>four groups of six</b>» (олтитадан тўрт гуруҳ) деб ҳам '
                 'тушунтиришади. Жавоб бир хил, лекин расм чизишда фарқ қилади — '
                 'ўқувчиларга бир хил изоҳ беринг.'))
    o.append(sec("Дарсда ишлатиладиган гаплар"))
    o.append(ptable(C.MUL_PHRASES))
    o.append(sec("Машқлар", "Мавзу 11"))
    for x in C.EXERCISES[11]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic12():
    o = ['<section>']
    o.append(topic_head(12, "Comparing numbers", "Сонларни таққослаш",
             ">, < ва = белгиларини инглизча ўқиш ҳамда сонларни тартибга солиш."))
    o.append(vcards(C.CMP_WORDS, cols=4))
    o.append(sec("Қандай ўқилади", "белгини гапга айлантириш"))
    o.append('<table><thead><tr><th style="width:17%">Ёзув</th><th>Қандай айтилади</th>'
             '<th style="width:34%">Талаффуз</th></tr></thead><tbody>')
    for ex, say, pron in C.CMP_SAY:
        o.append('<tr><td class="num" style="font-size:13px">%s</td><td class="en">%s</td>'
                 '<td class="pr">%s</td></tr>' % (esc(ex), esc(say), fmt(pron)))
    o.append('</tbody></table>')
    o.append(number_line(0, 10, [(3, "3"), (8, "8")]))
    o.append('<p class="lead" style="text-align:center">Three is <b>less than</b> eight. · '
             'Eight is <b>greater than</b> three. · Three comes <b>before</b> eight.</p>')
    o.append(box("tip", "Белгини эслаб қолиш",
                 'Белгининг очиқ томони доим <b>катта</b> сонга қарайди. '
                 'Болаларга «тимсоҳнинг оғзи катта балиққа очилади» деб тушунтириш '
                 'мумкин — инглиз мактабларида шундай ўргатилади: '
                 '«the crocodile eats the bigger number».'))
    o.append(sec("Дарсда ишлатиладиган гаплар"))
    o.append(ptable(C.CMP_PHRASES))
    o.append(sec("Машқлар", "Мавзу 12"))
    for x in C.EXERCISES[12]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic13():
    o = ['<section>']
    o.append(topic_head(13, "Fractions", "Касрлар",
             "half, third, quarter — ва нима учун каср номлари тартиб сонлардан "
             "ясалишини тушуниш."))
    o.append(vcards(C.FRAC_WORDS, cols=4))
    o.append(sec("Қандай ўқилади", "сурат — саноқ сон, махраж — тартиб сон"))
    o.append('<p class="lead">Қоида: <b>юқоридаги</b> сон оддий саноқ сон (one, two, '
             'three), <b>пастдаги</b> сон эса тартиб сон (third, fourth, fifth). '
             'Сурат 1 дан катта бўлса, махражга <b>-s</b> қўшилади: '
             'three quarter<b>s</b>.</p>')
    o.append('<table><thead><tr><th style="width:13%">Каср</th><th style="width:16%">Расми</th>'
             '<th>Қандай айтилади</th><th style="width:25%">Талаффуз</th>'
             '<th style="width:17%">Ўзбекча</th></tr></thead><tbody>')
    for n, d, say, pron, uz in C.FRAC_SAY:
        o.append('<tr><td><span class="frac" style="font-family:DejaVu Serif,serif;'
                 'font-size:15px;font-weight:700;color:#0E5C63">'
                 '<span>%s</span><span>%s</span></span></td>'
                 '<td>%s</td><td class="en">%s</td><td class="pr">%s</td>'
                 '<td class="uz">%s</td></tr>'
                 % (esc(n), esc(d), frac_circle(int(d), int(n), 34),
                    esc(say), fmt(pron), esc(uz)))
    o.append('</tbody></table>')
    o.append(box("warn", "Иккита истисно",
                 '<b>1/2</b> — «one <b>second</b>» эмас, <b>one half</b>. '
                 '<b>1/4</b> — Британияда <b>one quarter</b>, Америкада '
                 '«one fourth». Кембриж дастурида <b>quarter</b> ишлатилади.'))
    o.append(sec("Чизиқли модель", "bar model — 2-синфдан бошлаб"))
    o.append('<div class="figwrap">%s<div style="font-size:10.5px;color:#5F7076;'
             'margin-top:4px">three quarters — <b>%s</b></div></div>'
             % (frac_bar(4, 3, 300, 46), fmt("`с`ри: *к`у`о:*таз")))
    o.append(sec("Дарсда ишлатиладиган гаплар"))
    o.append(ptable(C.FRAC_PHRASES))
    o.append(sec("Машқлар", "Мавзу 13"))
    for x in C.EXERCISES[13]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic14():
    o = ['<section>']
    o.append(topic_head(14, "Measurement, time and money", "Ўлчов, вақт ва пул",
             "Ўлчов бирликлари, соатни айтиш ва пул масалаларининг тили."))
    o.append(sec("Ўлчов бирликлари", "measurement"))
    o.append(vcards(C.MEASURE, cols=4))
    o.append(box("note", "Британча ёзилиши",
                 '<b>metre</b>, <b>litre</b> — Британия ва Кембриж ёзуви. '
                 'Америкада «meter», «liter». Қисқартмалар ҳамма жойда бир хил: '
                 'mm, cm, m, km, g, kg, ml, l — <b>нуқтасиз ва кўпликсиз</b> ёзилади.'))
    o.append(sec("Вақт", "time"))
    o.append(vcards(C.TIME_WORDS, cols=4))
    o.append(sec("Соатни айтиш", "telling the time"))
    o.append('<p class="lead">Инглизчада ярим соатгача <b>past</b> (ўтди), ундан кейин '
             '<b>to</b> (қолди) ишлатилади. Яъни 3:45 — «тўрт<b>га</b> чорак қолди».</p>')
    o.append('<div class="dg four">')
    for t, say, pron, uz in C.TELL_TIME:
        h, m = (int(x) for x in t.split(":"))
        o.append('<div class="dc col">%s<div class="t"><div class="en">%s</div>'
                 '<div class="pr">%s</div><div class="uz">%s</div></div></div>'
                 % (clock(h, m, 62), esc(say), fmt(pron), esc(uz)))
    o.append('</div>')
    o.append(sec("Пул", "money"))
    o.append(vcards(C.MONEY_WORDS, cols=4))
    o.append(sec("Дарсда ишлатиладиган гаплар"))
    o.append(ptable(C.MEASURE_PHRASES))
    o.append(sec("Машқлар", "Мавзу 14"))
    for x in C.EXERCISES[14]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic15():
    o = ['<section>']
    o.append(topic_head(15, "Geometry", "Геометрия",
             "Бурчак, периметр, юза ва ҳажмли шакллар — 3–4 синфнинг геометрияси."))
    o.append(vcards(C.GEO_WORDS, cols=4))
    o.append(sec("Бурчак турлари", "angles"))
    o.append('<div class="dg">')
    for deg, en, pron, uz in [(45, "acute angle", "э*кью:т* *`э`*нгл", "ўткир — 90° дан кичик"),
                              (90, "right angle", "райт *`э`*нгл", "тўғри — аниқ 90°"),
                              (130, "obtuse angle", "эб*тью:с* *`э`*нгл", "ўтмас — 90° дан катта")]:
        o.append('<div class="dc col">%s<div class="t"><div class="en">%s</div>'
                 '<div class="pr">%s</div><div class="uz">%s</div></div></div>'
                 % (angle(deg, 84), esc(en), fmt(pron), esc(uz)))
    o.append('</div>')
    o.append(sec("Ҳажмли шакллар", "3-D solids"))
    o.append('<p class="lead">Ҳар бир шаклнинг тагида нечта <b>ёғи</b> (face), '
             '<b>қирраси</b> (edge) ва <b>учи</b> (vertex) борлиги ёзилган. '
             'Диққат: vertex — бирлик, кўплиги <b>vertices</b>.</p>')
    o.append(dcards([(solid(k), en, pr, uz, "%s faces · %s edges · %s vertices" % (f, e, v))
                     for k, en, pr, uz, f, e, v in C.SOLIDS], cols=3, col=True))
    o.append(box("tip", "Периметр ва юза",
                 '<b>Perimeter</b> — шакл атрофининг узунлиги, сантиметрда ўлчанади (cm). '
                 '<b>Area</b> — ичидаги жой, квадрат сантиметрда (cm²) — инглизча '
                 '«<b>square centimetres</b>» деб ўқилади.'))
    o.append(sec("Дарсда ишлатиладиган гаплар"))
    o.append(ptable(C.GEO_PHRASES))
    o.append(sec("Машқлар", "Мавзу 15"))
    for x in C.EXERCISES[15]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic16():
    o = ['<section>']
    o.append(topic_head(16, "Word problems and teacher talk", "Матнли масалалар ва дарс нутқи",
             "Масала шартини ўқиш, қайси амал кераклигини сўзлардан англаш ва "
             "бутун дарсни инглизча олиб бориш."))
    o.append(sec("Белги сўзлар", "қайси амал кераклигини айтиб турадиган сўзлар"))
    o.append('<p class="lead">Матнли масалада амал сўз билан яширинган бўлади. '
             'Қуйидаги сўзларни ўқувчиларга ўргатсангиз, улар масалани ўзи ҳал қила '
             'бошлайди.</p>')
    o.append('<table><thead><tr><th style="width:9%">Амал</th><th>Белги сўзлар</th>'
             '<th style="width:26%">Талаффуз</th><th style="width:16%">Ўзбекча</th>'
             '</tr></thead><tbody>')
    for sign, words, pron, uz in C.SIGNAL_WORDS:
        o.append('<tr><td style="font-size:17px;text-align:center">%s</td>'
                 '<td class="en">%s</td><td class="pr">%s</td><td class="uz">%s</td></tr>'
                 % (sign, esc(words), fmt(pron), esc(uz)))
    o.append('</tbody></table>')
    o.append(vcards(C.PROBLEM_WORDS, cols=4))
    o.append(sec("Масала — бошидан охиригача", "worked example"))
    o.append('<div class="wp">')
    for k, v, u in C.WORKED_PROBLEM:
        o.append('<div class="r"><div class="k">%s</div><div class="v"><b>%s</b></div>'
                 '<div class="u">%s</div></div>' % (esc(k), esc(v), esc(u)))
    o.append('</div>')
    o.append(box("tip", "Жавобни тўлиқ гап билан",
                 'Инглиз мактабларида жавоб ёлғиз сон билан ёзилмайди: '
                 '«7» эмас, «<b>He has got 7 apples left.</b>» Бу ўқувчини '
                 'масалани тушунганига ишонтиради — ва тил ўргатади.'))
    o.append(sec("Тўлиқ дарс сценарийси", "дарс бошидан охиригача"))
    for title, lines in C.LESSON_SCRIPT:
        o.append('<div class="scr"><div class="h">%s</div>' % esc(title))
        for en, pron in lines:
            o.append('<div class="l"><div class="e">%s</div><div class="p">%s</div></div>'
                     % (esc(en), fmt(pron)))
        o.append('</div>')
    o.append(sec("Машқлар", "Мавзу 16"))
    for x in C.EXERCISES[16]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def answers():
    o = ['<section class="page">',
         '<div class="ph"><div class="kick">Жавоблар</div>',
         '<h2>Машқларнинг жавоблари</h2>',
         '<div class="uz">Аввал ўзингиз ишланг, кейин текширинг</div>',
         '<div class="bar"></div></div>', '<div class="ak">']
    for t in sorted(C.EXERCISES):
        for x in C.EXERCISES[t]:
            got = [(q, a) for q, a in x["rows"] if a != "—"]
            if not got:
                body = ("ўз жавобингиз — ҳар кимда ҳар хил" if x["kind"] == "free"
                        else "овоз чиқариб ўқиш машқи — ёзма жавоб йўқ")
            else:
                body = ",  ".join("%s → %s" % (q.strip(), a) for q, a in got)
            o.append('<div class="b"><b>Мавзу %d · %s</b><div>%s</div></div>'
                     % (t, esc(x["title"]), esc(body)))
    o.append('</div></section>')
    return "".join(o)

def closing():
    o = ['<section class="page">',
         '<div class="ph"><div class="kick">Охирги бет</div>',
         '<h2>Режа ва доимий эслатма</h2>',
         '<div class="uz">Бу бетни кесиб олиб, стол устига қўйинг</div>',
         '<div class="bar"></div></div>']
    o.append(sec("Саккиз ҳафталик режа"))
    o.append('<table><thead><tr><th style="width:80px">Ҳафта</th><th>Нима қилинади</th>'
             '<th style="width:88px">Кунига</th></tr></thead><tbody>')
    for w, d, t in C.WEEK_PLAN:
        o.append('<tr><td class="en">%s</td><td class="uz">%s</td><td class="pr">%s</td></tr>'
                 % (esc(w), esc(d), esc(t)))
    o.append('</tbody></table>')
    o.append(sec("10 та гап — математика дарсининг асоси"))
    o.append('<div class="c10">')
    for i, (en, pron) in enumerate(C.CHEAT_10, 1):
        o.append('<div class="c10i"><span class="n">%d</span><div>'
                 '<div class="en">%s</div><div class="pr">%s</div></div></div>'
                 % (i, esc(en), fmt(pron)))
    o.append('</div>')
    o.append('<div class="endnote"><b>Курс тугади — 16 мавзу, 3 китоб.</b><br>'
             'Энди сизда 1–4 синф математикасини инглиз тилида ўқитиш учун '
             'керакли барча сўз ва гаплар бор.<br>'
             'Қолгани — ҳар куни дарсда ишлатиш. Омад!</div>')
    o.append('</section>')
    return "".join(o)

def main():
    doc = ("<!doctype html><html lang='uz'><head><meta charset='utf-8'>"
           "<meta name='running-footer' content='Инглиз тили — бошланғич синф математика ўқитувчилари учун'>"
           "<title>English for Teaching Mathematics — Book 3</title>"
           "<style>%s%s</style></head><body>%s</body></html>"
           % (CSS, EXTRA_CSS,
              cover() + about() + topic9() + topic10() + topic11() + topic12()
              + topic13() + topic14() + topic15() + topic16() + answers() + closing()))
    with open("book3.html", "w", encoding="utf-8") as f:
        f.write(doc)
    print("book3.html written: %.1f KB" % (len(doc.encode()) / 1024))

if __name__ == "__main__":
    main()
