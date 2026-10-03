# -*- coding: utf-8 -*-
"""Builds genbook2.html — English from Scratch, Book 2 (topics 9–16)."""
import gcontent2 as C
from build import CSS, fmt, esc, vcards, ptable, topic_head, sec, box, exercise
from gbook1 import EXTRA_CSS as G1_CSS, dialogue

EXTRA_CSS = """
.freq{display:grid;grid-template-columns:repeat(3,1fr);gap:7px}
.freq .f{display:flex;gap:9px;align-items:center;border:1px solid var(--rule);
  border-radius:6px;padding:7px 9px;background:var(--surface);break-inside:avoid}
.freq .f .pc{font-family:var(--serif);font-weight:700;color:var(--brass);font-size:12px;
  min-width:36px;text-align:right}
.freq .f .en{font-weight:700;font-size:11.5px}
.freq .f .pr{color:var(--brand);font-size:10px}
.freq .f .uz{color:var(--muted);font-size:9.5px}
.cmp{display:grid;grid-template-columns:1fr 1fr;gap:0;border:1px solid var(--rule);
  border-radius:7px;overflow:hidden;break-inside:avoid;margin:8px 0}
.cmp .h{background:var(--brand);color:#fff;font-weight:700;font-size:10.5px;padding:5px 10px}
.cmp .h.b{background:var(--brass)}
.cmp .c{padding:6px 10px;border-bottom:1px solid var(--rule-soft);font-size:11px}
.cmp .c:nth-child(4n+3),.cmp .c:nth-child(4n+4){background:#FBFAF7}
.cmp .c .en{font-weight:700}
.cmp .c .pr{color:var(--brand);font-size:10px}
.cmp .c .uz{color:var(--muted);font-size:9.5px}
"""

def topic9():
    o = ['<section class="page">']
    o.append(topic_head(9, "Daily routine", "Кундалик тартиб",
             "Кунингизни инглизча айтиб бериш — ва инглиз тилининг энг кўп "
             "ишлатиладиган замони, Present Simple."))
    o.append(sec("Кундалик феъллар"))
    o.append(vcards(C.ROUTINE_VERBS, cols=4))
    o.append(sec("Present Simple", "одатдаги, такрорланадиган ишлар"))
    o.append('<p class="lead">Бу замон «ҳар куни нима қиласиз» деган саволга жавоб '
             'беради. Қоида биргина: <b>he, she, it</b> билан феълга <b>-s</b> '
             'қўшилади. Бошқа ҳеч нарса ўзгармайди.</p>')
    o.append('<table><thead><tr><th style="width:12%">Олмош</th><th>Гап</th>'
             '<th style="width:30%">Талаффуз</th><th style="width:12%">Қоида</th>'
             '</tr></thead><tbody>')
    for p, s, pron, rule in C.PS_FORMS:
        o.append('<tr><td class="en">%s</td><td>%s</td><td class="pr">%s</td>'
                 '<td class="uz" style="color:#B0801F;font-weight:700">%s</td></tr>'
                 % (esc(p), s, fmt(pron), esc(rule)))
    o.append('</tbody></table>')
    o.append(sec("-s ни қандай қўшиш керак", "ёзилиш қоидалари"))
    for k, note, ex in C.PS_SPELLING:
        o.append('<div class="rule"><div class="k">%s</div><div class="b">'
                 '<div class="n">%s</div><div class="p">%s</div></div></div>'
                 % (esc(k), esc(note), ex))
    o.append(sec("Инкор ва савол", "don't / doesn't · Do / Does"))
    o.append('<table><thead><tr><th>Гап</th><th>Талаффуз</th><th>Изоҳ</th>'
             '</tr></thead><tbody>')
    for en, pron, note in C.PS_NEG_Q:
        o.append('<tr><td class="en">%s</td><td class="pr">%s</td><td class="uz">%s</td></tr>'
                 % (esc(en), fmt(pron), esc(note)))
    o.append('</tbody></table>')
    o.append(box("warn", "Энг кўп учрайдиган хато",
                 '<b>doesn\'t</b> дан кейин феълга <b>-s</b> қўшилмайди: '
                 '«She doesn\'t <u>work</u>», «She doesn\'t works» эмас. '
                 'Худди шундай: «Does she <u>work</u>?»'))
    o.append(sec("Қанчалик тез-тез?", "adverbs of frequency"))
    o.append('<div class="freq">')
    for pc, en, pron, uz in C.FREQUENCY:
        o.append('<div class="f"><span class="pc">%s</span><div><div class="en">%s</div>'
                 '<div class="pr">%s</div><div class="uz">%s</div></div></div>'
                 % (esc(pc), esc(en), fmt(pron), esc(uz)))
    o.append('</div>')
    o.append(box("note", "Бу сўзлар қаерда туради?",
                 'Оддий феълдан <b>олдин</b>: I <b>always</b> get up at six. '
                 'Лекин <b>to be</b> дан <b>кейин</b>: She is <b>always</b> late.'))
    o.append(sec("Дарҳол ишлатиладиган гаплар"))
    o.append(ptable(C.ROUTINE_PHRASES))
    o.append(sec("Машқлар", "Мавзу 9"))
    for x in C.EXERCISES[9]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic10():
    o = ['<section>']
    o.append(topic_head(10, "Food and drink", "Овқат ва ичимликлар",
             "Овқат номлари, кафеда буюртма бериш — ва саналадиган/саналмайдиган "
             "отлар фарқи."))
    o.append(sec("Овқат"))
    o.append(vcards(C.FOOD, cols=4))
    o.append(sec("Ичимлик ва бошқалар"))
    o.append(vcards(C.DRINK, cols=4))
    o.append(sec("Саналади ва саналмайди", "countable / uncountable"))
    o.append('<p class="lead">Ўзбекчада бу фарқ йўқ — «иккита нон» ҳам, «иккита олма» '
             'ҳам бўлаверади. Инглизчада эса <b>сув, нон, гуруч</b> каби сўзлар '
             'саналмайди: уларга <b>a</b> қўйилмайди ва кўплик шакли йўқ.</p>')
    for title, ex, note in C.COUNT_UNCOUNT:
        o.append('<div class="rule"><div class="k" style="font-size:10px;line-height:1.2">%s</div>'
                 '<div class="b"><div class="n">%s</div><div class="p">%s</div></div></div>'
                 % (esc(title.split(" (")[1].rstrip(")")), esc(note), ex))
    o.append(box("tip", "Саналмайдиган нарсани қандай санаш мумкин",
                 'Идиш ёки ўлчов сўзи қўшилади: <b>a bottle of</b> water, '
                 '<b>a cup of</b> tea, <b>a piece of</b> bread, <b>a kilo of</b> rice. '
                 'Шунда санаш мумкин бўлади: two bottles of water.'))
    o.append(vcards(C.CONTAINERS, cols=4))
    o.append(sec("some, any, how much, how many"))
    o.append('<table><thead><tr><th>Гап</th><th>Талаффуз</th><th>Қоида</th>'
             '</tr></thead><tbody>')
    for en, pron, note in C.SOME_ANY:
        o.append('<tr><td class="en">%s</td><td class="pr">%s</td><td class="uz">%s</td></tr>'
                 % (esc(en), fmt(pron), esc(note)))
    o.append('</tbody></table>')
    o.append(sec("Ёқтириш ва ёқтирмаслик"))
    o.append(ptable(C.LIKE))
    o.append(sec("Кафеда", "at the café"))
    o.append(ptable(C.CAFE))
    o.append(sec("Машқлар", "Мавзу 10"))
    for x in C.EXERCISES[10]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic11():
    o = ['<section>']
    o.append(topic_head(11, "The home", "Уй",
             "Хоналар, мебель ва нарса қаерда турганини айтиш."))
    o.append(sec("Хоналар"))
    o.append(vcards(C.ROOMS, cols=4))
    o.append(sec("Мебель ва уй жиҳозлари"))
    o.append(vcards(C.FURNITURE, cols=4))
    o.append(sec("Қаерда?", "prepositions of place"))
    o.append('<p class="lead">Бу ўнта сўз билан ҳар қандай нарсанинг жойини '
             'айта оласиз.</p>')
    o.append(vcards(C.PREP_PLACE, cols=4))
    o.append(box("note", "in ва on фарқи",
                 '<b>in</b> — ичида (in the box, in the kitchen). '
                 '<b>on</b> — устида, юзасида (on the table, on the wall). '
                 'Ўзбекчада «да» иккаласи учун ҳам ишлатилади, шунинг учун '
                 'буни алоҳида эслаб қолиш керак.'))
    o.append(sec("Дарҳол ишлатиладиган гаплар"))
    o.append(ptable(C.HOME_PHRASES))
    o.append(sec("Машқлар", "Мавзу 11"))
    for x in C.EXERCISES[11]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic12():
    o = ['<section>']
    o.append(topic_head(12, "Clothes and shopping", "Кийим ва харид",
             "Кийим номлари, ўлчам сўраш, нархни тушуниш ва сотиб олиш."))
    o.append(sec("Кийимлар"))
    o.append(vcards(C.CLOTHES, cols=4))
    o.append(box("warn", "Доим кўплик бўладиган сўзлар",
                 '<b>trousers</b>, <b>jeans</b>, <b>glasses</b>, <b>shoes</b>, '
                 '<b>socks</b> — булар инглизчада <u>ҳар доим кўплик</u>, чунки '
                 'икки қисмдан иборат. «How much <b>are</b> these trousers?» — '
                 '«is» эмас.'))
    o.append(sec("Ўлчам"))
    o.append(vcards(C.SIZES, cols=4))
    o.append(sec("this, these, that, those", "дўконда ҳар дақиқада керак"))
    o.append('<table><tbody>')
    for en, pron, uz in C.THIS_SHOP:
        o.append('<tr><td class="en" style="width:26%%">%s</td><td class="pr" style="width:26%%">%s</td>'
                 '<td class="uz">%s</td></tr>' % (esc(en), fmt(pron), esc(uz)))
    o.append('</tbody></table>')
    o.append(sec("Дўконда", "at the shop"))
    o.append(ptable(C.SHOPPING))
    o.append(sec("Машқлар", "Мавзу 12"))
    for x in C.EXERCISES[12]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic13():
    o = ['<section>']
    o.append(topic_head(13, "The city and directions", "Шаҳар ва йўл сўраш",
             "Шаҳардаги жойлар, йўл сўраш ва тушуниш, транспорт."))
    o.append(sec("Шаҳардаги жойлар"))
    o.append(vcards(C.PLACES, cols=4))
    o.append(sec("Транспорт"))
    o.append(vcards(C.TRANSPORT, cols=4))
    o.append(box("note", "by bus, лекин on foot",
                 'Транспортда: <b>by</b> bus, <b>by</b> taxi, <b>by</b> train. '
                 'Пиёда эса — <b>on</b> foot. Ёки оддийроқ: «I <b>take the</b> bus».'))
    o.append(sec("Йўл сўраш ва кўрсатиш", "asking the way"))
    o.append('<p class="lead">Йўл сўрашни <b>Excuse me</b> билан бошланг — бу '
             'инглизчада мажбурий одоб.</p>')
    o.append(ptable(C.DIRECTIONS))
    o.append(sec("Машқлар", "Мавзу 13"))
    for x in C.EXERCISES[13]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic14():
    o = ['<section>']
    o.append(topic_head(14, "Jobs and work", "Касб ва иш",
             "Касбингизни айтиш, ишингиз ҳақида гапириш."))
    o.append(sec("Касблар"))
    o.append(vcards(C.JOBS, cols=4))
    o.append(box("warn", "Касб олдида a ёки an шарт",
                 'Ўзбекчада «Мен ўқитувчиман» деймиз. Инглизчада касб олдидан '
                 '<b>a</b> ёки <b>an</b> ҳар доим қўйилади: «I\'m <b>a</b> teacher», '
                 '«I\'m <b>an</b> engineer». Артиклсиз гап нотўғри.'))
    o.append(sec("Иш билан боғлиқ сўзлар"))
    o.append(vcards(C.WORK_WORDS, cols=4))
    o.append(sec("Дарҳол ишлатиладиган гаплар"))
    o.append(ptable(C.JOB_PHRASES))
    o.append(box("note", "work in ёки work at?",
                 '<b>in</b> — жойнинг ичида ишлаш: work <b>in</b> a school, '
                 '<b>in</b> an office, <b>in</b> a hospital. '
                 '<b>at</b> — ташкилот номи билан: work <b>at</b> a bank, '
                 '<b>at</b> Google. Иккови ҳам кўп ишлатилади.'))
    o.append(sec("Машқлар", "Мавзу 14"))
    for x in C.EXERCISES[14]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic15():
    o = ['<section>']
    o.append(topic_head(15, "The body and health", "Тана ва соғлиқ",
             "Тана аъзолари, оғриқни айтиш, шифокорда гаплашиш."))
    o.append(sec("Тана аъзолари"))
    o.append(vcards(C.BODY, cols=4))
    o.append(box("note", "Қоидага бўйсунмайдиган кўплик",
                 '<b>tooth → teeth</b> (тиш → тишлар), <b>foot → feet</b> '
                 '(товон → товонлар). Буларни ёдлаб қўйиш керак — «tooths» ёки '
                 '«foots» деб бўлмайди.'))
    o.append(sec("Оғриқни айтиш", "I\'ve got a …"))
    o.append('<p class="lead">Инглизчада оғриқ икки хил айтилади: '
             '<b>I\'ve got a headache</b> (бошоғриғим бор) ёки '
             '<b>My head hurts</b> (бошим оғрияпти). Иккаласи ҳам тўғри.</p>')
    o.append(ptable(C.HEALTH))
    o.append(sec("Шифокорда", "at the doctor\'s"))
    o.append(ptable(C.DOCTOR))
    o.append(sec("should — маслаҳат бериш"))
    o.append(ptable(C.SHOULD))
    o.append(box("tip", "should дан кейин «to» йўқ",
                 '«You should <b>rest</b>» — «you should to rest» эмас. '
                 'Модал феълдан кейин феъл ўз ҳолида туради.'))
    o.append(sec("Машқлар", "Мавзу 15"))
    for x in C.EXERCISES[15]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def topic16():
    o = ['<section>']
    o.append(topic_head(16, "Weather and seasons", "Об-ҳаво ва фасллар",
             "Об-ҳаво ҳақида гапириш — ва Present Continuous билан танишиш."))
    o.append(sec("Об-ҳаво"))
    o.append(vcards(C.WEATHER, cols=4))
    o.append(sec("Present Continuous", "айни шу дамда рўй бераётган иш"))
    o.append('<p class="lead">«Ҳозир нима бўляпти?» деган саволга жавоб берадиган '
             'замон. Қурилиши: <b>am / is / are + феъл + -ing</b>.</p>')
    o.append('<div class="rule"><div class="k">-ing</div><div class="b">'
             '<div class="n">am / is / are + феъл + ing</div>'
             '<div class="p">It <b>is</b> rain<b>ing</b>. · I <b>am</b> read<b>ing</b>. · '
             'They <b>are</b> work<b>ing</b>.</div></div></div>')
    o.append(ptable(C.PRES_CONT))
    o.append(sec("Present Simple ёки Present Continuous?", "иккисининг фарқи"))
    o.append('<div class="cmp"><div class="h">Present Simple — одатда</div>'
             '<div class="h b">Present Continuous — ҳозир</div>')
    for i in range(0, len(C.SIMPLE_VS_CONT), 2):
        for en, pron, which, when in C.SIMPLE_VS_CONT[i:i+2]:
            o.append('<div class="c"><div class="en">%s</div><div class="pr">%s</div>'
                     '<div class="uz">%s</div></div>' % (esc(en), fmt(pron), esc(when)))
    o.append('</div>')
    o.append(box("warn", "Вақт сўзига қаранг",
                 '<b>every day, usually, always, never</b> → Present Simple. '
                 '<b>now, at the moment, today</b> → Present Continuous. '
                 'Гапдаги вақт сўзи қайси замон кераклигини айтиб туради.'))
    o.append(sec("Дарҳол ишлатиладиган гаплар"))
    o.append(ptable(C.WEATHER_PHRASES))
    o.append(sec("Машқлар", "Мавзу 16"))
    for x in C.EXERCISES[16]:
        o.append(exercise(x))
    o.append('</section>')
    return "".join(o)

def cover():
    return """<section class="page cover">
  <div>
    <div class="mark">🏠 🍽️ 🌤️</div>
    <h1>English<br>from Scratch</h1>
    <div class="sub">Book 2: Everyday Life · A1</div>
    <div class="rulebar"></div>
    <div class="uzt"><b>Инглиз тили — нолдан бошлаб</b><br>
      Кундалик ҳаёт: кун тартиби, овқат, уй, харид, йўл сўраш,<br>
      касб, соғлиқ ва об-ҳаво.</div>
    <div class="bk">2-китоб · Мавзу 9–16</div>
    <div class="cvprev">
      <div class="pv"><span class="em">🍞</span><b>bread</b><i>%s</i><u>нон</u></div>
      <div class="pv"><span class="em">🛋️</span><b>sofa</b><i>%s</i><u>диван</u></div>
      <div class="pv"><span class="em">🌧️</span><b>rainy</b><i>%s</i><u>ёмғирли</u></div>
    </div>
  </div>
  <div>
    <div class="strip">🗣️ ✍️ 👂</div>
    <div class="foot">1-китобни тугатганингиздан кейин шу китобга ўтинг.<br>
      Барча изоҳлар ўзбек тилида; талаффуз кирилл алифбосида.</div>
  </div>
</section>""" % (fmt("брэд"), fmt("*соу*фэ"), fmt("*рей*ни"))

def about():
    o = ['<section class="page">',
         '<div class="ph"><div class="kick">2-китоб</div>',
         '<h2>Кундалик ҳаёт</h2>',
         '<div class="uz">Энди сўзлар эмас, вазиятлар бўйича ўрганамиз</div>',
         '<div class="bar"></div></div>']
    o.append('<p class="lead">1-китобда ўзингиз ҳақингизда гапиришни ўргандингиз. '
             'Бу китобда эса <b>ҳар куни учрайдиган вазиятлар</b> бор: кафеда '
             'буюртма бериш, дўконда нарх сўраш, йўл сўраш, шифокорга дардингизни '
             'айтиш. Ҳар бир мавзу — бир вазият.</p>')
    o.append(box("note", "Бу китобдаги асосий грамматика",
                 'Икки замон: <b>Present Simple</b> (одатдаги ишлар — 9-мавзу) ва '
                 '<b>Present Continuous</b> (ҳозир бўлаётган иш — 16-мавзу). '
                 'Қолган ҳамма нарса шу иккисига таянади.'))
    o.append(sec("Саккиз мавзу"))
    o.append('<table class="gtab"><tbody>'
             '<tr><td class="f">9 · Daily routine</td><td class="n">Кундалик тартиб</td>'
             '<td>Present Simple, -s, always/never.</td></tr>'
             '<tr><td class="f">10 · Food and drink</td><td class="n">Овқат</td>'
             '<td>Саналадиган/саналмайдиган отлар, some/any, кафеда.</td></tr>'
             '<tr><td class="f">11 · The home</td><td class="n">Уй</td>'
             '<td>Хоналар, мебель, in/on/under/next to.</td></tr>'
             '<tr><td class="f">12 · Clothes and shopping</td><td class="n">Кийим ва харид</td>'
             '<td>Кийим, ўлчам, нарх, this/these.</td></tr>'
             '<tr><td class="f">13 · The city and directions</td><td class="n">Шаҳар</td>'
             '<td>Жойлар, йўл сўраш, транспорт.</td></tr>'
             '<tr><td class="f">14 · Jobs and work</td><td class="n">Касб ва иш</td>'
             '<td>Касблар, What do you do?, work in/at.</td></tr>'
             '<tr><td class="f">15 · The body and health</td><td class="n">Соғлиқ</td>'
             '<td>Тана аъзолари, оғриқ, шифокорда, should.</td></tr>'
             '<tr><td class="f">16 · Weather and seasons</td><td class="n">Об-ҳаво</td>'
             '<td>Об-ҳаво сўзлари, Present Continuous.</td></tr>'
             '</tbody></table>')
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
    o.append(sec("Беш ҳафталик режа"))
    o.append('<table><thead><tr><th style="width:80px">Ҳафта</th><th>Нима қилинади</th>'
             '<th style="width:88px">Кунига</th></tr></thead><tbody>')
    for w, d, t in C.WEEK_PLAN:
        o.append('<tr><td class="en">%s</td><td class="uz">%s</td><td class="pr">%s</td></tr>'
                 % (esc(w), esc(d), esc(t)))
    o.append('</tbody></table>')
    o.append(sec("10 та гап — кундалик ҳаётнинг асоси"))
    o.append('<div class="c10">')
    for i, (en, pron) in enumerate(C.CHEAT_10, 1):
        o.append('<div class="c10i"><span class="n">%d</span><div>'
                 '<div class="en">%s</div><div class="pr">%s</div></div></div>'
                 % (i, esc(en), fmt(pron)))
    o.append('</div>')
    o.append('<div class="endnote"><b>2-китоб тугади.</b><br>'
             'Кейинги китобда — замонлар: ўтган замон (was/were, -ed, нотўғри '
             'феъллар), келаси замон,<br>модал феъллар, қиёслаш даражалари ва миқдор.</div>')
    o.append('</section>')
    return "".join(o)

def main():
    doc = ("<!doctype html><html lang='uz'><head><meta charset='utf-8'>"
           "<meta name='running-footer' content='Инглиз тили — нолдан бошлаб'>"
           "<title>English from Scratch — Book 2</title>"
           "<style>%s%s%s</style></head><body>%s</body></html>"
           % (CSS, G1_CSS, EXTRA_CSS,
              cover() + about() + topic9() + topic10() + topic11() + topic12()
              + topic13() + topic14() + topic15() + topic16()
              + answers() + closing()))
    with open("genbook2.html", "w", encoding="utf-8") as f:
        f.write(doc)
    print("genbook2.html written: %.1f KB" % (len(doc.encode()) / 1024))

if __name__ == "__main__":
    main()
