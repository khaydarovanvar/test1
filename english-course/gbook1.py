# -*- coding: utf-8 -*-
"""Builds genbook1.html — English from Scratch, Book 1 (topics 1–8).

General English, no mathematics. Reuses the shared design system from build.py
and the clock drawing from book3.py.
"""
import gcontent1 as C
from build import CSS, fmt, esc, vcards, ptable, topic_head, sec, box, exercise, sound_key
from book3 import clock

EXTRA_CSS = """
.dlg{border:1px solid var(--rule);border-radius:7px;overflow:hidden;margin:9px 0;
  break-inside:avoid}
.dlg .r{display:flex;gap:9px;padding:6px 10px;border-bottom:1px solid var(--rule-soft);
  font-size:11px}
.dlg .r:last-child{border-bottom:0}
.dlg .r:nth-child(even){background:#FBFAF7}
.dlg .r .w{font-weight:700;color:var(--brass);width:20px;flex:none}
.dlg .r .e{font-weight:700;flex:1.1;min-width:0}
.dlg .r .p{color:var(--brand);flex:1;min-width:0;font-size:10.5px}

.opp{display:grid;grid-template-columns:1fr 1fr;gap:0;border:1px solid var(--rule);
  border-radius:7px;overflow:hidden;break-inside:avoid}
.opp .h{background:var(--brand);color:#fff;font-weight:700;font-size:10.5px;padding:5px 10px;
  text-align:center}
.opp .h.b{background:var(--brass)}
.opp .c{display:flex;gap:8px;align-items:center;padding:5px 10px;
  border-bottom:1px solid var(--rule-soft);font-size:11px}
.opp .c:nth-child(4n+3),.opp .c:nth-child(4n+4){background:#FBFAF7}
.opp .c .em{font-family:var(--emoji);font-size:17px;flex:none;width:21px;text-align:center}
.opp .c .t .en{font-weight:700;font-size:11px}
.opp .c .t .pr{color:var(--brand);font-size:10px}
.opp .c .t .uz{color:var(--muted);font-size:9.5px}

.ctr{display:grid;grid-template-columns:repeat(2,1fr);gap:7px}
.ctr .c{display:flex;gap:9px;align-items:center;border:1px solid var(--rule);
  border-radius:6px;padding:7px 9px;background:var(--surface);break-inside:avoid}
.ctr .c .em{font-family:var(--emoji);font-size:21px;flex:none;width:26px;text-align:center}
.ctr .c .t{min-width:0}
.ctr .c .t .en{font-weight:700;font-size:11.5px}
.ctr .c .t .pr{color:var(--brand);font-size:10px}
.ctr .c .t .uz{color:var(--muted);font-size:9.5px}
.ctr .c .t .na{font-size:10px;color:var(--brass);margin-top:1px}

.form{border:1.5px solid var(--rule);border-radius:7px;padding:11px 13px;background:var(--surface-2);
  break-inside:avoid;margin:9px 0}
.form .ft{font-weight:700;color:var(--brand-deep);font-size:11.5px;margin-bottom:7px;
  padding-bottom:5px;border-bottom:1px solid var(--rule)}
.form .fr{display:flex;gap:10px;align-items:baseline;padding:5px 0;font-size:11px}
.form .fr .k{width:116px;flex:none;font-weight:700}
.form .fr .p{width:92px;flex:none;color:var(--brand);font-size:10px}
.form .fr .l{flex:1;border-bottom:1.3px solid var(--rule)}
"""

def dialogue(rows):
    o = ['<div class="dlg">']
    for who, en, pron in rows:
        o.append('<div class="r"><span class="w">%s</span><div class="e">%s</div>'
                 '<div class="p">%s</div></div>' % (esc(who), esc(en), fmt(pron)))
    o.append('</div>')
    return "".join(o)

def opposites(rows):
    o = ['<div class="opp"><div class="h">Сифат</div><div class="h b">Қарама-қаршиси</div>']
    for e1, w1, p1, u1, e2, w2, p2, u2 in rows:
        for em, w, p, u in ((e1, w1, p1, u1), (e2, w2, p2, u2)):
            o.append('<div class="c"><span class="em">%s</span><div class="t">'
                     '<div class="en">%s</div><div class="pr">%s</div>'
                     '<div class="uz">%s</div></div></div>'
                     % (em, esc(w), fmt(p), esc(u)))
    o.append('</div>')
    return "".join(o)

def countries(rows):
    o = ['<div class="ctr">']
    for em, cn, cp, cu, na, np in rows:
        o.append('<div class="c"><span class="em">%s</span><div class="t">'
                 '<div class="en">%s</div><div class="pr">%s</div><div class="uz">%s</div>'
                 '<div class="na">%s — %s</div></div></div>'
                 % (em, esc(cn), fmt(cp), esc(cu), esc(na), fmt(np)))
    o.append('</div>')
    return "".join(o)

# ----------------------------------------------------------------- pages ----
def cover():
    return """<section class="page cover">
  <div>
    <div class="mark">🔤 👋 🏠</div>
    <h1>English<br>from Scratch</h1>
    <div class="sub">Book 1: First Steps · A0</div>
    <div class="rulebar"></div>
    <div class="uzt"><b>Инглиз тили — нолдан бошлаб</b><br>
      Кундалик ҳаёт учун. Расмли луғат, кирилл алифбосида талаффуз,<br>
      барча изоҳлар ўзбек тилида.</div>
    <div class="bk">1-китоб · Мавзу 1–8</div>
    <div class="cvprev">
      <div class="pv"><span class="em">👋</span><b>hello</b><i>%s</i><u>салом</u></div>
      <div class="pv"><span class="em">👪</span><b>family</b><i>%s</i><u>оила</u></div>
      <div class="pv"><span class="em">🔑</span><b>key</b><i>%s</i><u>калит</u></div>
    </div>
  </div>
  <div>
    <div class="strip">🗣️ ✍️ 👂</div>
    <div class="foot">Ҳар бир сўз: <b>расм</b> · <b>инглизча</b> · <b>талаффуз (кирилл)</b> · <b>ўзбекча</b><br>
      Инглизчани умуман билмасангиз ҳам шу бетдан бошлашингиз мумкин.</div>
  </div>
</section>""" % (fmt("ҳэ*лоу*"), fmt("*ф`э`*мили"), fmt("ки:"))

def about():
    o = ['<section class="page">',
         '<div class="ph"><div class="kick">Бошлашдан олдин</div>',
         '<h2>Бу китоб қандай ишлайди</h2>',
         '<div class="uz">Ўқишни бошлашдан олдин шу бетни ўқинг</div>',
         '<div class="bar"></div></div>']
    o.append('<p class="lead">Бу китоб <b>нолдан</b> бошланади: инглизчани умуман '
             'билмасангиз ҳам бошлашингиз мумкин, чунки барча изоҳлар ўзбек тилида '
             'ва ҳар бир сўзнинг талаффузи кирилл ҳарфлари билан ёзилган.</p>')
    o.append(sec("Ҳар бир сўз тўрт хил кўринишда"))
    o.append(vcards([("🔑", "key", "ки:", "калит")], cols=1))
    o.append('<table style="margin-top:7px"><tbody>'
             '<tr><td class="en" style="width:22%">🔑 расм</td>'
             '<td>Сўзни таржимасиз, бирданига тушунасиз.</td></tr>'
             '<tr><td class="en">key</td><td>Инглизча ёзилиши — шу кўринишда ўқийсиз ва ёзасиз.</td></tr>'
             '<tr><td class="en" style="color:#0E5C63">ки:</td>'
             '<td>Талаффузи <b>кирилл ҳарфлари билан</b>. «:» — чўзиқ унли; '
             '<b class="st">қалин ҳарф</b> — урғу.</td></tr>'
             '<tr><td class="en">калит</td><td>Ўзбекча маъноси.</td></tr>'
             '</tbody></table>')
    o.append(box("note", "Нуқтали чизиқ нимани билдиради",
                 'Остига <i class="hd">нуқтали чизиқ</i> тортилган ҳарф — ўзбек тилида '
                 '<b>умуман йўқ товуш</b>. Улар олтита, ҳаммаси кейинги бетда '
                 'тушунтирилган. Масалан <b>thank you</b> — <i class="hd">с</i>'
                 '<i class="hd">э</i>нк ю:.'))
    o.append(sec("Қандай ўқиш керак", "беш қоида"))
    o.append('<div class="sp">')
    for t, d in [("Ҳар куни 20 дақиқа",
                  "Ҳафтада бир марта 2 соатдан кўра, ҳар куни 20 дақиқа кучлироқ."),
                 ("Овоз чиқариб ўқинг",
                  "Инглиз тили кўз билан эмас, оғиз ва қулоқ билан ўрганилади."),
                 ("Ўзингизни ёзиб олинг",
                  "Телефонга овозингизни ёзиб, қайта эшитинг — хато ўзи билинади."),
                 ("Дарҳол ишлатинг",
                  "Ҳар мавзудан кейин 2–3 та гапни ўша куниёқ кимгадир айтинг."),
                 ("Эскисини такрорланг",
                  "Янги мавзудан олдин олдингисини 5 дақиқа кўриб чиқинг.")]:
        o.append('<div class="c"><b>%s</b><span>%s</span></div>' % (esc(t), esc(d)))
    o.append('</div>')
    o.append(box("tip", "Хато қилишдан қўрқманг",
                 'Тил хато қилиб ўрганилади. «My name Dilnoza» деб айтсангиз ҳам '
                 'сизни тушунишади — кейин «is» ни қўшишни ўрганасиз. '
                 'Жим турган одам эмас, гапирган одам ўрганади.'))
    o.append('</section>')
    return "".join(o)

def roadmap():
    o = ['<section class="page">',
         '<div class="ph"><div class="kick">Мавзулар режаси</div>',
         '<h2>Бутун курс — 32 мавзу</h2>',
         '<div class="uz">Нолдан то эркин суҳбатгача, тўрт китобда</div>',
         '<div class="bar"></div></div>']
    o.append('<p class="lead">Курс тўрт китобдан иборат. Ҳар бир китоб олдингисига '
             'таянади, шунинг учун тартиб билан ўқиш керак. '
             'Шу китобда <b>1–8-мавзулар</b> тўлиқ берилган.</p>')
    for bk, en, uz, lvl, note, topics in C.ROADMAP:
        o.append('<div class="parthead"><b>%s — %s · %s</b><span>%s</span></div>'
                 % (esc(bk), esc(en), esc(uz), esc(note)))
        o.append('<table class="rm"><tbody>')
        for no, ten, tuz, desc, st in topics:
            lbl = {"ready": "шу китобда", "next": "2-китоб", "later": "3–4-китоб"}[st]
            o.append('<tr><td class="n">%d</td><td class="t"><b>%s</b><span>%s</span></td>'
                     '<td class="d">%s</td><td class="s"><span class="badge %s">%s</span></td></tr>'
                     % (no, esc(ten), esc(tuz), esc(desc), st, esc(lbl)))
        o.append('</tbody></table>')
    o.append('</section>')
    return "".join(o)

def topic1():
    o = ['<section class="page">']
    o.append(topic_head(1, "The alphabet and sounds", "Алифбо ва товушлар",
             "26 ҳарфни таниш, номини айтиш ва ўз исмингизни инглизча ҳарфлаб бериш."))
    o.append('<p class="lead">Инглиз алифбосида <b>26 та ҳарф</b> бор. Ҳар бир ҳарфнинг '
             '<b>номи</b> (ҳарфлаб айтганда) ва <b>товуши</b> (сўз ичида) бор — булар '
             'кўпинча бир хил эмас. <b>C</b> ҳарфининг номи «си:», лекин <b>cat</b> '
             'сўзида «к» деб ўқилади.</p>')
    o.append(sec("26 ҳарф", "ҳарф · номи · расмли сўз"))
    o.append('<div class="alpha">')
    for cap, low, name, em, word, wpr, uz in C.ALPHABET:
        o.append('<div class="al"><div class="ltr">%s%s<small>%s</small></div>'
                 '<span class="em">%s</span><div class="w"><div class="en">%s</div>'
                 '<div class="pr">%s</div><div class="uz">%s</div></div></div>'
                 % (esc(cap), esc(low), fmt(name), em, esc(word), fmt(wpr), esc(uz)))
    o.append('</div>')
    o.append(sec("Унли ва ундош ҳарфлар"))
    for t, letters, note in C.VOWELS_NOTE:
        o.append('<div class="note" style="border-left-color:#0E5C63;background:#E4F0F0">'
                 '<span class="t" style="color:#0A3F45">%s</span>'
                 '<div style="font-family:DejaVu Serif,serif;font-size:15px;font-weight:700;'
                 'color:#0A3F45;letter-spacing:2px;margin:4px 0">%s</div>%s</div>'
                 % (esc(t), esc(letters), esc(note)))
    o.append(box("warn", "Ўзбек ўқувчи учун қийин тўртта ҳарф",
                 '<b>W</b> — «дабл ю:», ўзбекча «в» эмас. · '
                 '<b>Q</b> — деярли ҳар доим <b>qu</b> бўлиб келади ва '
                 '«к<i class="hd">у</i>» ўқилади: queen. · '
                 '<b>X</b> — сўз охирида «кс»: box, six. · '
                 '<b>C</b> — «к» ёки «с»: cat (к), city (с).'))
    o.append(sec("Исмингизни ҳарфлаб айтинг", "биринчи фойдали кўникма"))
    o.append(ptable(C.NAME_SPELLING))
    o.append(box("tip", "Машқ қилинг",
                 'Ўз исмингизни, оила аъзоларингизнинг исмини ва яшайдиган '
                 'шаҳрингиз номини инглизча ҳарфлаб айтиб кўринг. Бу — алифбони '
                 'ёдлашнинг энг тез йўли.'))
    o.append(sec("Машқлар", "Мавзу 1"))
    for x in C.EXERCISES[1]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic2():
    o = ['<section>']
    o.append(topic_head(2, "Greetings and introductions", "Саломлашиш ва танишиш",
             "Биров билан танишиш, аҳвол сўраш ва хайрлашиш — тўлиқ суҳбат."))
    o.append('<p class="lead">Бу мавзу — инглиз тилидаги <b>биринчи ҳақиқий суҳбатингиз</b>. '
             'Бу ердаги гапларни ёдласангиз, биринчи кундаёқ кимдир билан танишишингиз '
             'мумкин.</p>')
    o.append(sec("Саломлашиш", "вақтга қараб"))
    o.append(vcards(C.GREET_HELLO, cols=3))
    o.append(box("note", "Қайси бирини қачон?",
                 '<b>Good morning</b> — тушгача. <b>Good afternoon</b> — тушдан '
                 'кечгача. <b>Good evening</b> — кечқурун учрашганда. '
                 '<b>Good night</b> эса саломлашиш эмас — <b>хайрлашиш</b>, '
                 'ётишдан олдин айтилади.'))
    o.append(sec("Аҳвол сўраш"))
    o.append(ptable(C.GREET_HOW))
    o.append(sec("Танишиш"))
    o.append(ptable(C.GREET_NAME))
    o.append(sec("Хайрлашиш"))
    o.append(vcards(C.GREET_BYE, cols=3))
    o.append(sec("Одоб сўзлари", "кунига ўнлаб марта керак"))
    o.append(vcards(C.POLITE, cols=4))
    o.append(box("warn", "sorry ва excuse me фарқи",
                 '<b>Sorry</b> — <u>хато қилгандан кейин</u> айтилади (оёғига босиб '
                 'олдингиз). <b>Excuse me</b> — <u>бирор нарса сўрашдан олдин</u> '
                 'айтилади (йўл сўрамоқчисиз). Иккаласи ҳам «кечирасиз», лекин '
                 'ўрни бошқа.'))
    o.append(sec("Тўлиқ суҳбат", "шуни ёдланг"))
    o.append(dialogue(C.GREET_DIALOGUE))
    o.append(sec("Машқлар", "Мавзу 2"))
    for x in C.EXERCISES[2]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic3():
    o = ['<section>']
    o.append(topic_head(3, "Numbers 0–100", "Сонлар 0–100",
             "Санаш, ёшни айтиш, телефон рақами ва нархни тушуниш."))
    o.append(sec("0 дан 10 гача"))
    o.append(vcards(C.NUM_0_10, cols=3))
    o.append(sec("11 дан 20 гача"))
    o.append('<table><thead><tr><th></th><th>English</th><th>Талаффуз</th><th>Ўзбекча</th>'
             '</tr></thead><tbody>')
    for n, en, pr, uz in C.NUM_TEENS:
        o.append('<tr><td class="num">%s</td><td class="en">%s</td><td class="pr">%s</td>'
                 '<td class="uz">%s</td></tr>' % (esc(n), esc(en), fmt(pr), esc(uz)))
    o.append('</tbody></table>')
    o.append(sec("Ўнликлар"))
    o.append('<table><thead><tr><th></th><th>English</th><th>Талаффуз</th><th>Ўзбекча</th>'
             '</tr></thead><tbody>')
    for n, en, pr, uz in C.NUM_TENS:
        o.append('<tr><td class="num">%s</td><td class="en">%s</td><td class="pr">%s</td>'
                 '<td class="uz">%s</td></tr>' % (esc(n), esc(en), fmt(pr), esc(uz)))
    o.append('</tbody></table>')
    o.append(sec("13 ёки 30?", "урғу маънони ўзгартиради"))
    o.append('<p class="lead">Бу иккиси деярли бир хил эшитилади. Фарқи фақат '
             '<b>урғуда</b> — нарх ёки ёш айтганда хато тушунилмаслик учун буни '
             'мукаммал билиш керак.</p>')
    o.append('<div class="tt"><div class="hd2">-TEEN · урғу ОХИРДА</div>'
             '<div class="hd2 b">-TY · урғу БОШИДА</div>')
    for a, ap, b, bp in C.TEEN_TY:
        o.append('<div class="c">%s<div class="pr">%s</div></div>'
                 '<div class="c">%s<div class="pr">%s</div></div>'
                 % (esc(a), fmt(ap), esc(b), fmt(bp)))
    o.append('</div>')
    o.append(sec("21 дан 99 гача", "ўнлик + бирлик"))
    o.append('<table><thead><tr><th></th><th>English</th><th>Талаффуз</th><th>Ўзбекча</th>'
             '</tr></thead><tbody>')
    for n, en, pr, uz in C.NUM_21_99:
        o.append('<tr><td class="num">%s</td><td class="en">%s</td><td class="pr">%s</td>'
                 '<td class="uz">%s</td></tr>' % (esc(n), esc(en), fmt(pr), esc(uz)))
    o.append('</tbody></table>')
    o.append(sec("Ёш ҳақида"))
    o.append(ptable(C.NUM_USE_AGE))
    o.append(sec("Телефон рақами"))
    o.append(ptable(C.NUM_USE_PHONE))
    o.append(box("note", "Телефон рақами битталаб айтилади",
                 '90 123 45 67 ни «тўқсон, бир юз йигирма уч…» демайсиз. Ҳар бир '
                 'рақам алоҳида айтилади: «nine zero, one two three…». '
                 '<b>0</b> кўпинча «oh» (оу) дейилади, икки бир хил рақам эса '
                 '«<b>double</b>»: 33 — «double three».'))
    o.append(sec("Нарх"))
    o.append(ptable(C.NUM_USE_PRICE))
    o.append(sec("Тартиб сонлар", "сана учун керак"))
    o.append('<table><thead><tr><th></th><th>English</th><th>Талаффуз</th><th>Ўзбекча</th>'
             '</tr></thead><tbody>')
    for n, en, pr, uz in C.ORDINAL_DATES:
        o.append('<tr><td class="num">%s</td><td class="en">%s</td><td class="pr">%s</td>'
                 '<td class="uz">%s</td></tr>' % (esc(n), esc(en), fmt(pr), esc(uz)))
    o.append('</tbody></table>')
    o.append(sec("Машқлар", "Мавзу 3"))
    for x in C.EXERCISES[3]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic4():
    o = ['<section>']
    o.append(topic_head(4, "Personal information", "Шахсий маълумот",
             "Ўзингиз ҳақингизда гапириш ва анкета тўлдириш."))
    o.append(sec("«Бўлмоқ» феъли — am, is, are", "энг муҳим феъл"))
    o.append('<p class="lead">Ўзбекчада «Мен ўқитувчиман» деймиз — феъл кўринмайди. '
             'Инглизчада эса феъл <b>мажбурий</b>: «I <b>am</b> a teacher». '
             'Феълсиз гап — гап эмас.</p>')
    o.append('<table><thead><tr><th>Олмош</th><th>Шакли</th><th>Қисқа шакли</th>'
             '<th>Талаффуз</th><th>Ўзбекча</th></tr></thead><tbody>')
    for pr_, form, short, pron, uz in C.TO_BE:
        o.append('<tr><td class="en" style="width:12%%">%s</td>'
                 '<td style="width:12%%;font-weight:700;color:#0E5C63">%s</td>'
                 '<td style="width:16%%">%s</td><td class="pr">%s</td>'
                 '<td class="uz">%s</td></tr>'
                 % (esc(pr_), esc(form), esc(short), fmt(pron), esc(uz)))
    o.append('</tbody></table>')
    o.append(box("tip", "Учта қоида, тамом",
                 'Фақат <b>I</b> билан <b>am</b>. <b>He / She / It</b> билан <b>is</b>. '
                 'Қолган ҳаммаси (<b>you, we, they</b>) билан <b>are</b>.'))
    o.append(sec("Шахсий маълумот сўзлари"))
    o.append(vcards(C.PERSONAL_WORDS, cols=4))
    o.append(sec("Мамлакат ва миллат", "country and nationality"))
    o.append('<p class="lead">Инглизчада мамлакат ва миллат ҳар доим '
             '<b>катта ҳарф</b> билан ёзилади: Uzbekistan, Uzbek.</p>')
    o.append(countries(C.COUNTRIES))
    o.append(sec("Энг кўп бериладиган саволлар"))
    o.append(ptable(C.PERSONAL_Q))
    o.append(sec("Анкета", "шу шаклни тўлдиринг"))
    o.append('<div class="form"><div class="ft">Registration form — Рўйхатдан ўтиш варақаси</div>')
    for en, pron, uz in C.FORM_FIELDS:
        o.append('<div class="fr"><span class="k">%s</span><span class="p">%s</span>'
                 '<span class="l"></span></div>' % (esc(en), fmt(pron)))
    o.append('</div>')
    o.append(sec("Машқлар", "Мавзу 4"))
    for x in C.EXERCISES[4]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic5():
    o = ['<section>']
    o.append(topic_head(5, "Family", "Оила",
             "Оилангиз ҳақида гапириш — ҳар бир танишувда сўраладиган мавзу."))
    o.append(sec("Қариндошлар", "family members"))
    o.append(vcards(C.FAMILY, cols=4))
    o.append(box("note", "mum ва dad",
                 '<b>Mother</b> ва <b>father</b> — расмий сўзлар, ҳужжатларда ишлатилади. '
                 'Кундалик нутқда эса <b>mum</b> (Британия) ёки <b>mom</b> (Америка) ва '
                 '<b>dad</b> дейилади — ўзбекчадаги «ойи» ва «дада» каби.'))
    o.append(sec("Кимники? — my, your, his, her", "эгалик олмошлари"))
    o.append('<table><thead><tr><th>Олмош</th><th>Эгалик шакли</th><th>Талаффуз</th>'
             '<th>Ўзбекча</th><th>Мисол</th></tr></thead><tbody>')
    for p, poss, pron, uz, ex in C.POSSESSIVE:
        o.append('<tr><td class="en" style="width:12%%">%s</td>'
                 '<td style="width:15%%;font-weight:700;color:#0E5C63">%s</td>'
                 '<td class="pr" style="width:16%%">%s</td><td class="uz">%s</td>'
                 '<td class="en">%s</td></tr>'
                 % (esc(p), esc(poss), fmt(pron), esc(uz), esc(ex)))
    o.append('</tbody></table>')
    o.append(box("warn", "his ва her — энг кўп учрайдиган хато",
                 'Ўзбекчада «унинг» эркак ва аёл учун бир хил. Инглизчада эса '
                 '<b>эгасига</b> қараб ўзгаради: <b>Bobur</b> ва <b>his</b> wife, '
                 '<b>Aziza</b> ва <b>her</b> husband. Нарсага эмас — <u>эгасига</u> қаранг.'))
    o.append(sec("'s — кимнингдир", "possessive 's"))
    o.append('<div class="rule"><div class="k">\'s</div><div class="b">'
             '<div class="n">одам + \'s + нарса</div>'
             '<div class="p"><b>Aziza\'s</b> brother · <b>my sister\'s</b> name · '
             '<b>Bobur\'s</b> car <span>— «Азизанинг акаси»</span></div></div></div>')
    o.append(sec("have got — «бор»"))
    o.append(ptable(C.HAVE_GOT))
    o.append(sec("Дарҳол ишлатиладиган гаплар"))
    o.append(ptable(C.FAMILY_PHRASES))
    o.append(sec("Машқлар", "Мавзу 5"))
    for x in C.EXERCISES[5]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic6():
    o = ['<section>']
    o.append(topic_head(6, "Colours and descriptions", "Ранглар ва сифатлар",
             "Нарсаларни тасвирлаш — ранг, ўлчам, сифат ва уларнинг гапдаги ўрни."))
    o.append(sec("11 та ранг", "colours"))
    o.append(vcards(C.COLOURS, cols=4))
    o.append(sec("Қарама-қарши сифатлар", "жуфтлаб ёдланг"))
    o.append('<p class="lead">Сифатларни <b>жуфтлаб</b> ёдлаш икки баравар тез: '
             'big–small, hot–cold. Мия қарама-қаршиликни яхши эслаб қолади.</p>')
    o.append(opposites(C.ADJ_PAIRS))
    o.append(sec("Яна керакли сифатлар"))
    o.append(vcards(C.ADJ_EXTRA, cols=4))
    o.append(sec("Сифат гапда қаерда туради?", "энг муҳим қоида"))
    o.append('<p class="lead">Ўзбекчада ҳам, инглизчада ҳам сифат отдан <b>олдин</b> '
             'келади — бу осон. Лекин «The car <b>is</b> red» шаклида феъл қўшилади.</p>')
    o.append('<table><thead><tr><th>Инглизча</th><th>Талаффуз</th><th>Ўзбекча</th>'
             '<th>Қоида</th></tr></thead><tbody>')
    for en, pron, uz, rule in C.ADJ_ORDER:
        o.append('<tr><td class="en">%s</td><td class="pr">%s</td><td class="uz">%s</td>'
                 '<td class="uz">%s</td></tr>' % (esc(en), fmt(pron), esc(uz), esc(rule)))
    o.append('</tbody></table>')
    o.append(box("warn", "«a car red» деб бўлмайди",
                 'Инглизчада сифат <b>ҳар доим</b> отдан олдин: <b>a red car</b>. '
                 'Бир нечта сифат бўлса: аввал ўлчам, кейин ранг — '
                 '<b>a big red car</b>, «a red big car» эмас.'))
    o.append(sec("Машқлар", "Мавзу 6"))
    for x in C.EXERCISES[6]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic7():
    o = ['<section>']
    o.append(topic_head(7, "Things around you", "Атрофдаги нарсалар",
             "Уйдаги буюмлар, a/an/the, кўплик ва «бор/йўқ» дейиш."))
    o.append(sec("Уйдаги нарсалар"))
    o.append(vcards(C.THINGS_HOME, cols=4))
    o.append(vcards(C.THINGS_MORE, cols=4))
    o.append(sec("a, an, the", "от ёлғиз келмайди"))
    o.append('<div class="rule"><div class="k">a</div><div class="b">'
             '<div class="n">ундош ТОВУШ олдидан</div>'
             '<div class="p"><b>a</b> table · <b>a</b> key · <b>a</b> phone · '
             '<b>a</b> book</div></div></div>')
    o.append('<div class="rule"><div class="k">an</div><div class="b">'
             '<div class="n">унли ТОВУШ олдидан</div>'
             '<div class="p"><b>an</b> apple · <b>an</b> egg · <b>an</b> umbrella · '
             '<b>an</b> hour <span>— h ўқилмайди!</span></div></div></div>')
    o.append('<div class="rule"><div class="k">the</div><div class="b">'
             '<div class="n">маълум бўлган нарса</div>'
             '<div class="p">Open <b>the</b> door. <span>— ўша эшик, иккаламизга маълум</span>'
             '</div></div></div>')
    o.append(sec("Кўплик", "plurals"))
    for k, note, rows in C.PLURAL_RULES:
        o.append('<div class="rule"><div class="k">%s</div><div class="b">'
                 '<div class="n">%s</div><div class="p">%s</div></div></div>'
                 % (esc(k), esc(note),
                    " · ".join("<b>%s</b> <span>%s</span>" % (esc(a), fmt(b))
                               for a, b in rows)))
    o.append(sec("Қоидага бўйсунмайдиганлар"))
    o.append(vcards(C.IRREGULAR, cols=2))
    o.append(sec("this / that / these / those"))
    o.append('<table><thead><tr><th>Гап</th><th>Талаффуз</th><th>Ўзбекча</th><th>Қачон</th>'
             '</tr></thead><tbody>')
    for en, pron, uz, when in C.THIS_THESE:
        o.append('<tr><td class="en">%s</td><td class="pr">%s</td><td class="uz">%s</td>'
                 '<td class="uz">%s</td></tr>' % (esc(en), fmt(pron), esc(uz), esc(when)))
    o.append('</tbody></table>')
    o.append(sec("There is / There are", "«бор» ва «йўқ»"))
    o.append(ptable(C.THERE_IS))
    o.append(sec("Машқлар", "Мавзу 7"))
    for x in C.EXERCISES[7]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic8():
    o = ['<section>']
    o.append(topic_head(8, "Days, months and time", "Кунлар, ойлар, вақт",
             "Ҳафта кунлари, ойлар, соат ва саналар — ҳамда at/on/in."))
    o.append(sec("Ҳафта кунлари", "days of the week"))
    o.append('<p class="lead">Диққат: инглизчада кун ва ой номлари ҳар доим '
             '<b>катта ҳарф</b> билан ёзилади — monday эмас, <b>Monday</b>.</p>')
    o.append(ptable(C.DAYS, head=("English", "Талаффуз", "Ўзбекча")))
    o.append(sec("Ойлар", "months"))
    o.append(ptable(C.MONTHS, head=("English", "Талаффуз", "Ўзбекча")))
    o.append(sec("Фасллар", "seasons"))
    o.append(vcards(C.SEASONS, cols=4))
    o.append(sec("Соатни айтиш", "telling the time"))
    o.append('<p class="lead">Ярим соатгача <b>past</b> (ўтди), ундан кейин '
             '<b>to</b> (қолди) ишлатилади.</p>')
    o.append('<div class="dg four">')
    for t, say, pron, uz in C.TELL_TIME:
        h, m = (int(x) for x in t.split(":"))
        o.append('<div class="dc col">%s<div class="t"><div class="en">%s</div>'
                 '<div class="pr">%s</div><div class="uz">%s</div></div></div>'
                 % (clock(h, m, 62), esc(say), fmt(pron), esc(uz)))
    o.append('</div>')
    o.append(sec("Вақт сўзлари"))
    o.append(vcards(C.TIME_WHEN, cols=4))
    o.append(sec("at, on, in", "энг кўп чалкаштириладиган учлик"))
    for prep, when, examples, pron in C.PREP_TIME:
        o.append('<div class="rule"><div class="k">%s</div><div class="b">'
                 '<div class="n">%s · %s</div><div class="p">%s</div></div></div>'
                 % (esc(prep), esc(when), fmt(pron), esc(examples)))
    o.append(box("warn", "Эсда тутинг",
                 '<b>in the morning</b>, лекин <b>at night</b>. Бу истисно — '
                 'мантиғи йўқ, ёдлаб қўйиш керак.'))
    o.append(sec("Саналар", "dates"))
    o.append('<table><thead><tr><th>Ёзилиши</th><th>Қандай айтилади</th><th>Талаффуз</th>'
             '<th>Ўзбекча</th></tr></thead><tbody>')
    for d, say, pron, uz in C.DATES:
        o.append('<tr><td class="num" style="font-size:12px">%s</td><td class="en">%s</td>'
                 '<td class="pr">%s</td><td class="uz">%s</td></tr>'
                 % (esc(d), esc(say), fmt(pron), esc(uz)))
    o.append('</tbody></table>')
    o.append(sec("Дарҳол ишлатиладиган гаплар"))
    o.append(ptable(C.TIME_PHRASES))
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
            if x["kind"] == "match":
                body = ", ".join("%s → %s" % (a.strip(), b) for a, b in x["left"])
            else:
                got = [(q, a) for q, a in x["rows"] if a != "—"]
                body = (",  ".join("%s → %s" % (q.strip(), a) for q, a in got) if got
                        else ("ўз жавобингиз — ҳар кимда ҳар хил" if x["kind"] == "free"
                              else "овоз чиқариб ўқиш машқи — ёзма жавоб йўқ"))
            o.append('<div class="b"><b>Мавзу %d · %s</b><div>%s</div></div>'
                     % (t, esc(x["title"]), esc(body)))
    o.append('</div></section>')
    return "".join(o)

def closing():
    o = ['<section class="page">',
         '<div class="ph"><div class="kick">Охирги бет</div>',
         '<h2>Режа ва доимий эслатма</h2>',
         '<div class="uz">Бу бетни кесиб олиб, кўзингиз тушадиган жойга қўйинг</div>',
         '<div class="bar"></div></div>']
    o.append(sec("Беш ҳафталик режа", "шу китобни қандай тугатиш керак"))
    o.append('<table><thead><tr><th style="width:80px">Ҳафта</th><th>Нима қилинади</th>'
             '<th style="width:88px">Кунига</th></tr></thead><tbody>')
    for w, d, t in C.WEEK_PLAN:
        o.append('<tr><td class="en">%s</td><td class="uz">%s</td><td class="pr">%s</td></tr>'
                 % (esc(w), esc(d), esc(t)))
    o.append('</tbody></table>')
    o.append(sec("10 та гап — булар билан ҳар қандай суҳбатни бошлайсиз"))
    o.append('<div class="c10">')
    for i, (en, pron) in enumerate(C.CHEAT_10, 1):
        o.append('<div class="c10i"><span class="n">%d</span><div>'
                 '<div class="en">%s</div><div class="pr">%s</div></div></div>'
                 % (i, esc(en), fmt(pron)))
    o.append('</div>')
    o.append('<div class="endnote"><b>1-китоб тугади.</b><br>'
             'Кейинги китобда: кундалик тартиб (Present Simple), овқат, уй, '
             'кийим ва харид,<br>шаҳарда йўл сўраш, касб, соғлиқ ва об-ҳаво.</div>')
    o.append('</section>')
    return "".join(o)

def main():
    doc = ("<!doctype html><html lang='uz'><head><meta charset='utf-8'>"
           "<meta name='running-footer' content='Инглиз тили — нолдан бошлаб'>"
           "<title>English from Scratch — Book 1</title>"
           "<style>%s%s%s</style></head><body>%s</body></html>"
           % (CSS, __import__("book3").EXTRA_CSS, EXTRA_CSS,
              cover() + about() + sound_key() + roadmap()
              + topic1() + topic2() + topic3() + topic4()
              + topic5() + topic6() + topic7() + topic8()
              + answers() + closing()))
    with open("genbook1.html", "w", encoding="utf-8") as f:
        f.write(doc)
    print("genbook1.html written: %.1f KB" % (len(doc.encode()) / 1024))

if __name__ == "__main__":
    main()
