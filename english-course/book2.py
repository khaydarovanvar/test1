# -*- coding: utf-8 -*-
"""Builds book2.html — topics 4–8.

Reuses Book 1's design system and components from build.py; only the pages and
the shape drawings are new. The shapes are real SVG rather than emoji, because
in a mathematics book the picture has to be the actual figure.
"""
import math
import content2 as C
from build import CSS, fmt, esc, vcards, ptable, topic_head, sec, box, exercise

# ------------------------------------------------------------ the shapes ----
def _poly(n, r, cx=24, cy=25, rot=-90):
    pts = []
    for i in range(n):
        a = math.radians(rot + i * 360 / n)
        pts.append("%.2f,%.2f" % (cx + r * math.cos(a), cy + r * math.sin(a)))
    return " ".join(pts)

def _star(spikes=5, ro=21, ri=8.6, cx=24, cy=25, rot=-90):
    pts = []
    for i in range(spikes * 2):
        r = ro if i % 2 == 0 else ri
        a = math.radians(rot + i * 180 / spikes)
        pts.append("%.2f,%.2f" % (cx + r * math.cos(a), cy + r * math.sin(a)))
    return " ".join(pts)

_SH = {
  "circle":     '<circle cx="24" cy="25" r="19"/>',
  "square":     '<rect x="6" y="7" width="36" height="36" rx="1"/>',
  "rectangle":  '<rect x="2" y="12" width="44" height="26" rx="1"/>',
  "triangle":   '<polygon points="%s"/>' % _poly(3, 21),
  "oval":       '<ellipse cx="24" cy="25" rx="21" ry="13.5"/>',
  "rhombus":    '<polygon points="24,4 43,25 24,46 5,25"/>',
  "star":       '<polygon points="%s"/>' % _star(),
  "pentagon":   '<polygon points="%s"/>' % _poly(5, 21),
  "hexagon":    '<polygon points="%s"/>' % _poly(6, 21),
  "semicircle": '<path d="M4,35 A20,20 0 0 1 44,35 Z"/>',
}

def shape(key, size=46):
    return ('<svg class="sh" width="%d" height="%d" viewBox="0 0 48 50">%s</svg>'
            % (size, size, _SH[key]))

def shape_grid(rows):
    o = ['<div class="shg">']
    for key, en, pr, uz, sides, corners in rows:
        o.append('<div class="shc">%s<div class="t"><div class="en">%s</div>'
                 '<div class="pr">%s</div><div class="uz">%s</div>'
                 '<div class="sd">%s sides · %s corners</div></div></div>'
                 % (shape(key), esc(en), fmt(pr), esc(uz), esc(sides), esc(corners)))
    o.append('</div>')
    return "".join(o)

def labelled_square():
    """One figure that fixes 'side' and 'corner' in the memory."""
    return """<div class="figwrap"><svg viewBox="0 0 330 132" class="fig">
      <rect x="62" y="22" width="88" height="88" fill="#E4F0F0" stroke="#0E5C63"
            stroke-width="2.2"/>
      <line x1="62" y1="110" x2="150" y2="110" stroke="#B0801F" stroke-width="5"/>
      <line x1="150" y1="118" x2="196" y2="124" stroke="#B0801F" stroke-width="1.2"/>
      <text x="199" y="127" fill="#8A6414" font-size="11" font-family="DejaVu Sans">side — томон</text>
      <circle cx="62" cy="22" r="4.6" fill="#A34430"/>
      <circle cx="150" cy="22" r="4.6" fill="#A34430"/>
      <circle cx="62" cy="110" r="4.6" fill="#A34430"/>
      <circle cx="150" cy="110" r="4.6" fill="#A34430"/>
      <line x1="150" y1="22" x2="196" y2="14" stroke="#A34430" stroke-width="1.2"/>
      <text x="199" y="17" fill="#8E3A28" font-size="11" font-family="DejaVu Sans">corner — бурчак</text>
      <text x="6" y="70" fill="#0A3F45" font-size="12" font-family="DejaVu Sans">square</text>
    </svg></div>"""

EXTRA_CSS = """
.shg{display:grid;grid-template-columns:repeat(3,1fr);gap:7px}
.shc{display:flex;gap:10px;align-items:center;border:1px solid var(--rule);
  border-radius:6px;padding:7px 9px;background:var(--surface);break-inside:avoid}
svg.sh{flex:none;fill:var(--brand-tint);stroke:var(--brand);stroke-width:2.2;
  stroke-linejoin:round}
.shc .t{min-width:0}
.shc .en{font-weight:700;font-size:12px}
.shc .pr{font-size:10.5px;color:var(--brand)}
.shc .uz{font-size:10px;color:var(--muted)}
.shc .sd{font-size:9px;color:var(--brass);margin-top:1px}
.figwrap{text-align:center;margin:10px 0}
svg.fig{width:74%;max-width:380px}
.qw{display:grid;grid-template-columns:repeat(2,1fr);gap:7px}
.qwc{display:flex;gap:9px;align-items:flex-start;border:1px solid var(--rule);
  border-radius:6px;padding:7px 9px;background:var(--surface);break-inside:avoid}
.qwc .em{font-size:20px;flex:none;width:24px;text-align:center}
.qwc .en{font-weight:700;font-size:12px}
.qwc .pr{font-size:10.5px;color:var(--brand)}
.qwc .uz{font-size:10px;color:var(--muted)}
.qwc .ex{font-size:10px;color:var(--ink-soft);margin-top:2px;font-style:italic}
"""

# ----------------------------------------------------------------- pages ----
def cover():
    return """<section class="page cover">
  <div>
    <div class="mark">🔵 🔺 ❓</div>
    <h1>English for Teaching<br>Mathematics</h1>
    <div class="sub">Grades 1–4 · Book 2: Grammar for the Lesson</div>
    <div class="rulebar"></div>
    <div class="uzt"><b>Инглиз тили — бошланғич синф<br>математика ўқитувчилари учун</b><br>
      Сўзлардан гап тузамиз. Ранглар, шакллар ва дарс грамматикаси.</div>
    <div class="bk">2-китоб · Мавзу 4–8</div>
    <div class="cvprev">
      <div class="pv">%s<b>circle</b><i><b>сё</b>кл</i><u>доира</u></div>
      <div class="pv">%s<b>square</b><i>ск<i class="hd">у</i>эа</i><u>квадрат</u></div>
      <div class="pv">%s<b>triangle</b><i><b>трай</b><i class="hd">э</i>нгл</i><u>учбурчак</u></div>
    </div>
  </div>
  <div>
    <div class="strip">🎨 ➕ 🗣️</div>
    <div class="foot">1-китобни тугатганингиздан кейин шу китобга ўтинг.<br>
      Барча изоҳлар ўзбек тилида; талаффуз кирилл алифбосида.</div>
  </div>
</section>""" % (shape("circle", 34), shape("square", 34), shape("triangle", 34))

def about():
    o = ['<section class="page">',
         '<div class="ph"><div class="kick">2-китоб</div>',
         '<h2>Сўзлардан гап тузишга ўтамиз</h2>',
         '<div class="uz">1-китобда сўз ёдладингиз. Энди улардан гап ясайсиз.</div>',
         '<div class="bar"></div></div>']
    o.append('<p class="lead">1-китобда сиз ҳарф, сон ва синф сўзларини ўргандингиз — '
             'ва тайёр гапларни ёдладингиз. Бу китобда <b>нима учун</b> гап шундай '
             'тузилишини тушунасиз. Шундан кейин ёдлаган гапларингизни ўзгартириб, '
             '<b>ўзингиз янги гап тузасиз</b>.</p>')
    o.append(box("note", "Белгилар — эслатма",
                 '<b class="st">Қалин ҳарф</b> — урғу. «:» — чўзиқ унли. '
                 'Остига <i class="hd">нуқтали чизиқ</i> тортилган ҳарф — ўзбек тилида '
                 'йўқ товуш: <i class="hd">с</i>/<i class="hd">з</i> (th), '
                 '<i class="hd">у</i> (w), <i class="hd">э</i> (æ), сўз охирида '
                 '<i class="hd">нг</i>. Тўлиқ жадвал 1-китобнинг 3-бетида.'))
    o.append(sec("Бу китобда нима бор", "беш мавзу"))
    o.append('<table class="gtab"><tbody>'
             '<tr><td class="f">4 · Colours and shapes</td>'
             '<td class="n">Ранглар ва шакллар</td>'
             '<td>1-синф математикасининг биринчи мавзуси. Доира, квадрат, '
             'учбурчак — ҳамда томон ва бурчак сўзлари.</td></tr>'
             '<tr><td class="f">5 · a, an, the, plurals</td>'
             '<td class="n">Бирлик ва кўплик</td>'
             '<td>a book / two books. Кўплик қоидалари ва истиснолар — '
             'half → halves каби математик сўзлар билан.</td></tr>'
             '<tr><td class="f">6 · To be</td>'
             '<td class="n">am, is, are</td>'
             '<td>This is a circle. These are squares. Two plus two is four. '
             'Бутун дарснинг таянч қурилиши.</td></tr>'
             '<tr><td class="f">7 · Classroom commands</td>'
             '<td class="n">Буйруқ гаплар</td>'
             '<td>Draw, count, write, check. Дарсни тўлиқ инглизча бошқариш.</td></tr>'
             '<tr><td class="f">8 · Questions</td>'
             '<td class="n">Саволлар</td>'
             '<td>What? How many? Which? Ўқувчидан сўрашнинг барча йўллари '
             'ва қисқа жавоблар.</td></tr>'
             '</tbody></table>')
    o.append(box("tip", "Бир қоида",
                 'Ҳар бир мавзудан кейин машқларни ишланг, кейин <b>ўша ҳафтаёқ</b> '
                 'дарсда ишлатинг. Ишлатилмаган грамматика бир ҳафтада унутилади.'))
    o.append('</section>')
    return "".join(o)

def topic4():
    o = ['<section class="page">']
    o.append(topic_head(4, "Colours and shapes", "Ранглар ва шакллар",
             "Ранг ва шакл номлари, томон ва бурчак сўзлари — 1-синф "
             "математикасининг биринчи дарслари."))
    o.append(sec("11 та ранг", "colours"))
    o.append('<p class="lead">Инглизчада бу сўз икки хил ёзилади: Британияда '
             '<b>colour</b>, Америкада <b>color</b>. Ўзбекистон мактаблари '
             'Кембриж дастурига таянгани учун китобда <b>colour</b> ишлатилади.</p>')
    o.append(vcards(C.COLOURS, cols=3))
    o.append(sec("10 та шакл", "shapes"))
    o.append('<p class="lead">Ҳар бир шаклнинг тагида нечта <b>томони</b> (side) ва '
             'нечта <b>бурчаги</b> (corner) борлиги ёзилган — ўқувчиларингиз '
             'сўрайдиган биринчи савол шу бўлади.</p>')
    o.append(shape_grid(C.SHAPES))
    o.append(sec("Томон ва бурчак", "side and corner"))
    o.append(labelled_square())
    o.append(vcards(C.SHAPE_WORDS, cols=4))
    o.append(box("note", "«has got» — шакл ҳақида гапирганда",
                 'Британча инглизчада эгаликни <b>has got</b> билан айтиш одатий: '
                 '«A square <b>has got</b> four sides». Америкачада '
                 '«A square <b>has</b> four sides». Иккаласи ҳам тўғри — '
                 'ўқувчиларга биттасини танлаб ўргатинг.'))
    o.append(sec("Дарсда ишлатиладиган гаплар"))
    o.append(ptable(C.COLOUR_PHRASES))
    o.append(sec("Машқлар", "Мавзу 4"))
    for x in C.EXERCISES[4]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic5():
    o = ['<section>']
    o.append(topic_head(5, "One and many — a, an, the, plurals", "Бирлик ва кўплик",
             "a book / two books. Инглизчада от ёлғиз келмайди — олдида "
             "ҳар доим бир сўз туради."))
    o.append('<p class="lead">Ўзбекчада «китоб» деб айтаверамиз. Инглизчада эса '
             'от олдида деярли ҳар доим <b>a</b>, <b>an</b> ёки <b>the</b> туради. '
             'Буни тушириб қолдириш — ўзбек ўқувчиларнинг энг кўп хатоси.</p>')
    o.append(sec("a ёки an?", "аниқсиз артикл"))
    o.append('<div class="rule"><div class="k">a</div><div class="b">'
             '<div class="n">ундош ТОВУШ олдидан</div>'
             '<div class="p"><b>a</b> book · <b>a</b> pencil · <b>a</b> square · '
             '<b>a</b> triangle</div></div></div>')
    o.append('<div class="rule"><div class="k">an</div><div class="b">'
             '<div class="n">унли ТОВУШ олдидан</div>'
             '<div class="p"><b>an</b> apple · <b>an</b> egg · <b>an</b> orange · '
             '<b>an</b> answer</div></div></div>')
    o.append(ptable([(a, b, c) for a, b, c in C.A_AN],
                    head=("Мисол", "Талаффуз", "Нима учун")))
    o.append(box("warn", "Ҳарфга эмас, ТОВУШга қаранг",
                 '<b>an hour</b> — «h» ёзилади, лекин ўқилмайди, шунинг учун '
                 '<b>an</b>. Аксинча <b>a university</b> — «u» унли ҳарф, лекин '
                 '«ю» деб ўқилади, шунинг учун <b>a</b>.'))
    o.append(sec("the — аниқ артикл"))
    o.append('<p class="lead">Қайси нарса ҳақида гапираётганимиз маълум бўлса, '
             '<b>the</b> ишлатилади: «Open <b>the</b> book» (ҳаммага маълум бўлган '
             'ўша китоб), лекин «Take <b>a</b> pencil» (хоҳлаган қаламингизни).</p>')
    o.append(sec("Кўплик — тўртта қоида", "plurals"))
    for k, note, rows in C.PLURAL_RULES:
        o.append('<div class="rule"><div class="k">%s</div><div class="b">'
                 '<div class="n">%s</div><div class="p">%s</div></div></div>'
                 % (esc(k), esc(note),
                    " · ".join("<b>%s</b> <span>%s</span>" % (esc(a), fmt(b))
                               for a, b in rows)))
    o.append(sec("Қоидага бўйсунмайдиганлар", "irregular plurals"))
    o.append('<p class="lead">Буларни ёдлашдан бошқа йўл йўқ. Яхши хабар — улар кўп эмас.</p>')
    o.append(vcards(C.IRREGULAR, cols=2))
    o.append(sec("Дарсда ишлатиладиган гаплар"))
    o.append(ptable(C.PLURAL_PHRASES))
    o.append(sec("Машқлар", "Мавзу 5"))
    for x in C.EXERCISES[5]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic6():
    o = ['<section>']
    o.append(topic_head(6, "To be — am, is, are", "«Бўлмоқ» феъли",
             "This is a circle. The answer is ten. Инглиз гапининг таянч "
             "қурилиши — буни билсангиз, ярим ишни қилдингиз."))
    o.append('<p class="lead">Ўзбекчада «Бу — доира» деймиз, феъл кўринмайди. '
             'Инглизчада эса феъл <b>мажбурий</b>: «This <b>is</b> a circle». '
             'Феълсиз гап — гап эмас.</p>')
    o.append(sec("Етти шакл", "ҳаммаси шу"))
    o.append('<table><thead><tr><th>Олмош</th><th>Шакли</th><th>Қисқа шакли</th>'
             '<th>Талаффуз</th><th>Ўзбекча</th></tr></thead><tbody>')
    for pr_, form, short, pron, uz in C.TO_BE:
        o.append('<tr><td class="en" style="width:12%%">%s</td>'
                 '<td style="width:12%%;font-weight:700;color:#0E5C63">%s</td>'
                 '<td style="width:16%%">%s</td><td class="pr">%s</td>'
                 '<td class="uz">%s</td></tr>'
                 % (esc(pr_), esc(form), esc(short), fmt(pron), esc(uz)))
    o.append('</tbody></table>')
    o.append(box("tip", "Эсда тутиш осон",
                 'Фақат <b>I</b> билан <b>am</b>. <b>He / She / It</b> билан '
                 '<b>is</b>. Қолган ҳаммаси (<b>you, we, they</b>) билан '
                 '<b>are</b>. Учта қоида, тамом.'))
    o.append(sec("This / These / That / Those"))
    o.append('<table><thead><tr><th>Гап</th><th>Талаффуз</th><th>Ўзбекча</th>'
             '<th>Қачон</th></tr></thead><tbody>')
    for en, pron, uz, when in C.THIS_THESE:
        o.append('<tr><td class="en">%s</td><td class="pr">%s</td>'
                 '<td class="uz">%s</td><td class="uz">%s</td></tr>'
                 % (esc(en), fmt(pron), esc(uz), esc(when)))
    o.append('</tbody></table>')
    o.append(box("warn", "Энг кўп учрайдиган хато",
                 '<b>These is</b> деб бўлмайди. Кўплик бўлса — '
                 '<b>These <u>are</u></b>. Бирлик бўлса — <b>This <u>is</u></b>. '
                 'Доскада шакл кўрсатаётганда шуни ҳар сафар текширинг.'))
    o.append(sec("Инкор ва савол", "negative and question"))
    o.append('<table><thead><tr><th>Гап</th><th>Талаффуз</th><th>Изоҳ</th>'
             '</tr></thead><tbody>')
    for en, pron, note in C.BE_NEG_Q:
        o.append('<tr><td class="en">%s</td><td class="pr">%s</td>'
                 '<td class="uz">%s</td></tr>' % (esc(en), fmt(pron), esc(note)))
    o.append('</tbody></table>')
    o.append(sec("Математикада", "ҳар дарсда керак"))
    o.append(ptable(C.BE_MATHS))
    o.append(sec("Машқлар", "Мавзу 6"))
    for x in C.EXERCISES[6]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic7():
    o = ['<section>']
    o.append(topic_head(7, "Classroom commands", "Буйруқ гаплар",
             "Дарсни бошидан охиригача инглизча бошқариш — ва нима учун "
             "буйруқ гапда эга ёзилмаслигини тушуниш."))
    o.append('<p class="lead">Буйруқ гап энг осон қурилиш: <b>феълни ўз ҳолида</b> '
             'айтасиз, эга (you) ёзилмайди. «Open the book» — «Сиз китобни очинг» '
             'эмас, оддийгина «Китобни очинг».</p>')
    o.append('<div class="rule"><div class="k">+</div><div class="b">'
             '<div class="n">Тасдиқ буйруқ</div>'
             '<div class="p"><b>Open</b> the book. · <b>Draw</b> a circle. · '
             '<b>Count</b> the triangles.</div></div></div>')
    o.append('<div class="rule"><div class="k">−</div><div class="b">'
             '<div class="n">Инкор буйруқ — Don\'t + феъл</div>'
             '<div class="p"><b>Don\'t</b> talk. · <b>Don\'t</b> forget. · '
             '<b>Don\'t</b> worry.</div></div></div>')
    o.append('<div class="rule"><div class="k">Let\'s</div><div class="b">'
             '<div class="n">«Келинг, бирга …» — ўзингизни ҳам қўшасиз</div>'
             '<div class="p"><b>Let\'s</b> count. · <b>Let\'s</b> start. · '
             '<b>Let\'s</b> check the answer.</div></div></div>')
    o.append(sec("20 та феъл", "дарсда керак бўладиганлари"))
    o.append(vcards(C.COMMAND_VERBS, cols=4))
    o.append(sec("Математика дарсидаги буйруқлар"))
    o.append(ptable(C.MATHS_COMMANDS))
    o.append(sec("Инкор буйруқ ва таклиф"))
    o.append(ptable(C.NEG_COMMANDS))
    o.append(box("note", "Юмшоқроқ айтиш",
                 'Буйруқ қўпол эшитилмаслиги учун <b>please</b> қўшинг ёки '
                 '<b>Can you …?</b> шаклини ишлатинг: «<b>Can you</b> open the window, '
                 '<b>please</b>?» Болалар сиздан шу одобни ўрганади.'))
    o.append(sec("Машқлар", "Мавзу 7"))
    for x in C.EXERCISES[7]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic8():
    o = ['<section>']
    o.append(topic_head(8, "Questions", "Саволлар",
             "Ўқувчидан сўрашнинг барча йўллари. Ўқитувчи дарсда гапирадиган "
             "гапларнинг ярми — савол."))
    o.append(sec("Ўнта савол сўзи", "question words"))
    o.append('<div class="qw">')
    for em, en, pron, uz, ex in C.QWORDS:
        o.append('<div class="qwc"><span class="em">%s</span><div>'
                 '<div class="en">%s</div><div class="pr">%s</div>'
                 '<div class="uz">%s</div><div class="ex">%s</div></div></div>'
                 % (em, esc(en), fmt(pron), esc(uz), esc(ex)))
    o.append('</div>')
    o.append(sec("Сўз тартиби", "энг муҳим қоида"))
    o.append('<p class="lead">Ўзбекчада савол сўзи гапнинг ўртасида ҳам тура олади. '
             'Инглизчада эса <b>савол сўзи ҳар доим биринчи</b>, кейин <b>is/are</b> '
             'ёки <b>do/can</b>, ундан кейин эга келади.</p>')
    o.append('<table><tbody>')
    for q, note in C.Q_ORDER:
        # not .en here: the cell must stay light so the bold auxiliary stands out
        o.append('<tr><td style="width:46%%;font-size:11.5px">%s</td>'
                 '<td class="uz">%s</td></tr>' % (q, esc(note)))
    o.append('</tbody></table>')
    o.append(sec("Қисқа жавоблар", "short answers"))
    o.append('<p class="lead">Инглизчада «Yes» ёки «No» ёлғиз жавоб қўпол эшитилади. '
             'Ҳар доим қисқа жавоб қўшилади.</p>')
    o.append('<table><thead><tr><th>Савол</th><th>Талаффуз</th><th>Ҳа</th><th>Йўқ</th>'
             '</tr></thead><tbody>')
    for q, yes, no, pron in C.SHORT_ANSWERS:
        o.append('<tr><td class="en" style="width:30%%">%s</td><td class="pr">%s</td>'
                 '<td class="uz" style="color:#2E6440">%s</td>'
                 '<td class="uz" style="color:#8E3A28">%s</td></tr>'
                 % (esc(q), fmt(pron), esc(yes), esc(no)))
    o.append('</tbody></table>')
    o.append(sec("Ҳар дарсда берадиган саволларингиз"))
    o.append(ptable(C.MATHS_QUESTIONS))
    o.append(sec("Машқлар", "Мавзу 8"))
    for x in C.EXERCISES[8]:
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
    o.append(sec("Беш ҳафталик режа", "шу китобни қандай тугатиш керак"))
    o.append('<table><thead><tr><th style="width:84px">Ҳафта</th><th>Нима қилинади</th>'
             '<th style="width:92px">Кунига</th></tr></thead><tbody>')
    for w, d, t in C.WEEK_PLAN:
        o.append('<tr><td class="en">%s</td><td class="uz">%s</td>'
                 '<td class="pr">%s</td></tr>' % (esc(w), esc(d), esc(t)))
    o.append('</tbody></table>')
    o.append(sec("10 та гап — шакллар дарси шулар билан ўтади"))
    o.append('<div class="c10">')
    for i, (en, pron) in enumerate(C.CHEAT_10, 1):
        o.append('<div class="c10i"><span class="n">%d</span><div>'
                 '<div class="en">%s</div><div class="pr">%s</div></div></div>'
                 % (i, esc(en), fmt(pron)))
    o.append('</div>')
    o.append('<div class="endnote"><b>2-китоб тугади.</b><br>'
             'Кейинги китобда — математика инглиз тилида: разрядлар, тўрт амал, '
             'сонларни таққослаш, касрлар,<br>ўлчов ва вақт, геометрия ҳамда '
             'матнли масалалар тили.</div>')
    o.append('</section>')
    return "".join(o)

def main():
    doc = ("<!doctype html><html lang='uz'><head><meta charset='utf-8'>"
           "<meta name='running-footer' content='Инглиз тили — бошланғич синф математика ўқитувчилари учун'>"
           "<title>English for Teaching Mathematics — Book 2</title>"
           "<style>%s%s</style></head><body>%s</body></html>"
           % (CSS, EXTRA_CSS,
              cover() + about() + topic4() + topic5() + topic6() + topic7()
              + topic8() + answers() + closing()))
    with open("book2.html", "w", encoding="utf-8") as f:
        f.write(doc)
    print("book2.html written: %.1f KB" % (len(doc.encode()) / 1024))

if __name__ == "__main__":
    main()
