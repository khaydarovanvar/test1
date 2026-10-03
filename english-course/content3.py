# -*- coding: utf-8 -*-
"""Book 3 — topics 9–16, mathematics in English.

Same marks as Books 1–2 (see content.py):
    *...*  stressed syllable      `x`  a sound Uzbek does not have
Vocabulary rows are (picture, English, pronunciation, Ўзбекча).
"""

BOOK = dict(no=3, title="Mathematics in English", uz="Математика инглиз тилида",
            topics="Мавзу 9–16")

# -------------------------------------------------- Topic 9 — place value ---
PV_WORDS = [
    ("🔢","digit",        "*ди*жит",        "рақам (0–9)"),
    ("#️⃣","number",       "*нам*ба",        "сон"),
    ("1️⃣","ones / units", "`у`анз · *ю:*нитс","бирликлар"),
    ("🔟","tens",         "тэнз",           "ўнликлар"),
    ("💯","hundreds",     "*ҳан*дридз",     "юзликлар"),
    ("🔠","thousands",    "*`с`ау*зэндз",   "минглик"),
    ("📊","place value",  "плейс *в`э`*лью:","разряд қиймати"),
    ("➗","expanded form","икс*п`э`н*дид фо:м","ёйилган шакл"),
]

# (numeral, how it is said, pronunciation of the key part, Ўзбекча note)
PV_SAY = [
    ("7",     "seven",                                   "*сэ*вн",              "бир хонали"),
    ("40",    "forty",                                   "*фо:*ти",             "ўнлик"),
    ("47",    "forty-seven",                             "*фо:*ти *сэ*вн",      "ўнлик + бирлик"),
    ("300",   "three hundred",                           "`с`ри: *ҳан*дрид",    "«hundreds» эмас!"),
    ("365",   "three hundred <b>and</b> sixty-five",     "...`э`нд *сикс*ти файв","Британчада «and» шарт"),
    ("500",   "five hundred",                            "файв *ҳан*дрид",      "юзлик"),
    ("1,000", "one thousand",                            "`у`ан *`с`ау*зэнд",   "минг"),
    ("2,548", "two thousand, five hundred <b>and</b> forty-eight",
                                                         "ту: *`с`ау*зэнд...",  "мингликдан бошланади"),
]

PV_PHRASES = [
    ("What is the value of the digit 6?","`у`от из `з`э *в`э`*лью: ов `з`э *ди*жит сикс",
     "6 рақамининг қиймати нима?"),
    ("The digit 6 is in the tens place.","`з`э *ди*жит сикс из ин `з`э тэнз плейс",
     "6 рақами ўнликлар хонасида."),
    ("How many tens are there?","ҳау *мэ*ни тэнз а: `з`эа","Нечта ўнлик бор?"),
    ("Write 365 in expanded form.","райт... ин икс*п`э`н*дид фо:м","365 ни ёйилган шаклда ёзинг."),
    ("Read the number aloud.","ри:д `з`э *нам*ба э*лауд*","Сонни овоз чиқариб ўқинг."),
    ("Zero holds the place.","*зиэ*роу ҳоулдз `з`э плейс","Ноль хонани эгаллаб туради."),
]

# ------------------------------------------ Topic 10 — addition/subtraction ---
ADD_WORDS = [
    ("➕","add",        "`э`д",            "қўшмоқ"),
    ("➕","plus",       "плас",            "қўшув"),
    ("🟰","sum",        "сам",             "йиғинди"),
    ("📈","total",      "*тоу*тл",         "жами"),
    ("🧺","altogether", "о:лта*гэ*`з`а",   "ҳаммаси бўлиб"),
    ("➖","subtract",   "сэб*тр`э`кт*",    "айирмоқ"),
    ("➖","minus",      "*май*нас",        "айирув"),
    ("🫳","take away",  "тейк э*`у`эй*",   "олиб ташламоқ"),
    ("📉","difference", "*диф*рэнс",       "айирма"),
    ("🔁","regroup",    "ри:*гру:п*",      "гуруҳлашни ўзгартирмоқ"),
    ("🎒","carry",      "*к`э`*ри",        "кўчирмоқ (ўнликка)"),
    ("🤝","borrow",     "*бо*роу",         "қарз олмоқ (катта хонадан)"),
]

# One calculation said three different ways — all three are correct English.
ADD_SAY = [
    ("7 + 5 = 12", "Seven plus five equals twelve.",   "*сэ*вн плас файв *и:к*`у`элз т`у`элв"),
    ("7 + 5 = 12", "Seven plus five is twelve.",       "...из т`у`элв"),
    ("7 + 5 = 12", "Seven and five make twelve.",      "...`э`нд файв мейк т`у`элв"),
    ("12 − 5 = 7", "Twelve minus five equals seven.",  "т`у`элв *май*нас файв..."),
    ("12 − 5 = 7", "Twelve take away five is seven.",  "...тейк э*`у`эй* файв..."),
    ("12 − 5 = 7", "The difference between 12 and 5 is 7.","`з`э *диф*рэнс би*т`у`и:н*..."),
]

SIGNS = [
    ("+", "plus sign",   "плас сайн",        "қўшув белгиси"),
    ("−", "minus sign",  "*май*нас сайн",    "айирув белгиси"),
    ("×", "times sign",  "таймз сайн",       "кўпайтирув белгиси"),
    ("÷", "division sign","ди*ви*жн сайн",   "бўлиш белгиси"),
    ("=", "equals sign", "*и:к*`у`элз сайн", "тенглик белгиси"),
    (">", "greater than","*грей*та `з`эн",   "катта"),
    ("<", "less than",   "лес `з`эн",        "кичик"),
    ("≠", "not equal to","нот *и:к*`у`эл ту","тенг эмас"),
]

ADD_PHRASES = [
    ("Add these numbers.",        "`э`д `з`и:з *нам*баз",          "Бу сонларни қўшинг."),
    ("What is the sum?",          "`у`от из `з`э сам",             "Йиғинди нечи?"),
    ("How much is left?",         "ҳау мач из лефт",               "Қанча қолди?"),
    ("Take away three.",          "тейк э*`у`эй* `с`ри:",          "Учни олиб ташланг."),
    ("Carry the one.",            "*к`э`*ри `з`э `у`ан",           "Бирни кўчиринг."),
    ("Line up the columns.",      "лайн ап `з`э *ко*лэмз",         "Устунларни тўғриланг."),
    ("Start from the ones.",      "ста:т фром `з`э `у`анз",        "Бирликлардан бошланг."),
    ("Check with subtraction.",   "чек `у`и`з` сэб*тр`э`к*шн",     "Айириш билан текширинг."),
]

# ------------------------------------- Topic 11 — multiplication / division ---
MUL_WORDS = [
    ("✖️","multiply",     "*мал*типлай",        "кўпайтирмоқ"),
    ("✖️","times",        "таймз",              "марта"),
    ("🟰","product",      "*про*дакт",          "кўпайтма"),
    ("🧩","factor",       "*ф`э`к*та",          "кўпайтувчи"),
    ("📋","times table",  "таймз *тей*бл",      "кўпайтириш жадвали"),
    ("➗","divide",       "ди*вайд*",           "бўлмоқ"),
    ("🟰","quotient",     "*к`у`оу*шнт",        "бўлинма"),
    ("🔸","remainder",    "ри*мейн*да",         "қолдиқ"),
    ("🤲","share equally","шеа *и:к*`у`эли",    "тенг бўлишмоқ"),
    ("👥","groups of",    "гру:пс ов",          "...тадан гуруҳ"),
    ("2️⃣","even",         "*и:*вн",             "жуфт"),
    ("1️⃣","odd",          "од",                 "тоқ"),
]

MUL_SAY = [
    ("6 × 4 = 24", "Six times four equals twenty-four.",      "сикс таймз фо:..."),
    ("6 × 4 = 24", "Six multiplied by four is twenty-four.",  "сикс *мал*типлайд бай фо:..."),
    ("6 × 4 = 24", "Four groups of six make twenty-four.",    "фо: гру:пс ов сикс мейк..."),
    ("20 ÷ 5 = 4", "Twenty divided by five equals four.",     "*т`у`эн*ти ди*вай*дид бай файв..."),
    ("20 ÷ 5 = 4", "Twenty shared between five is four.",     "*т`у`эн*ти шеад би*т`у`и:н* файв..."),
    ("23 ÷ 5",     "Twenty-three divided by five is four remainder three.",
                                                             "...фо: ри*мейн*да `с`ри:"),
]

MUL_PHRASES = [
    ("Say the five times table.",  "сей `з`э файв таймз *тей*бл",   "Бешга кўпайтириш жадвалини айтинг."),
    ("What is six times seven?",   "`у`от из сикс таймз *сэ*вн",    "Олти карра етти нечи?"),
    ("Divide twenty by four.",     "ди*вайд* *т`у`эн*ти бай фо:",   "Йигирмани тўртга бўлинг."),
    ("Is there a remainder?",      "из `з`эа э ри*мейн*да",         "Қолдиқ борми?"),
    ("Share them equally.",        "шеа `з`эм *и:к*`у`эли",         "Уларни тенг бўлинг."),
    ("Is this number even or odd?","из `з`ис *нам*ба *и:*вн о: од", "Бу сон жуфтми ёки тоқми?"),
]

# -------------------------------------------------- Topic 12 — comparing ----
CMP_WORDS = [
    ("⬆️","greater than",  "*грей*та `з`эн",   "катта"),
    ("⬇️","less than",     "лес `з`эн",        "кичик"),
    ("🟰","equal to",      "*и:к*`у`эл ту",    "тенг"),
    ("➕","more than",     "мо: `з`эн",        "кўпроқ"),
    ("➖","fewer than",    "*фью:*а `з`эн",    "камроқ"),
    ("🔝","the biggest",   "`з`э *би*гист",    "энг катта"),
    ("🔻","the smallest",  "`з`э *смо:*лист",  "энг кичик"),
    ("📈","ascending order","э*сэн*ди`нг` *о:*да","ўсиш тартиби"),
    ("📉","descending order","ди*сэн*ди`нг` *о:*да","камайиш тартиби"),
    ("↔️","between",       "би*т`у`и:н*",      "орасида"),
    ("⏮️","before",        "би*фо:*",          "олдин"),
    ("⏭️","after",         "*а:ф*та",          "кейин"),
]

CMP_SAY = [
    ("7 > 5",      "Seven is greater than five.",        "*сэ*вн из *грей*та `з`эн файв"),
    ("3 < 8",      "Three is less than eight.",          "`с`ри: из лес `з`эн эйт"),
    ("6 = 6",      "Six is equal to six.",               "сикс из *и:к*`у`эл ту сикс"),
    ("9 ≠ 4",      "Nine is not equal to four.",         "найн из нот *и:к*`у`эл ту фо:"),
    ("5 < 7 < 9",  "Seven is between five and nine.",    "*сэ*вн из би*т`у`и:н* файв `э`нд найн"),
]

CMP_PHRASES = [
    ("Which number is greater?",   "`у`ич *нам*ба из *грей*та",       "Қайси сон каттароқ?"),
    ("Put these in order.",        "пут `з`и:з ин *о:*да",            "Буларни тартибга солинг."),
    ("Write the correct sign.",    "райт `з`э ка*рэкт* сайн",         "Тўғри белгини ёзинг."),
    ("Start with the smallest.",   "ста:т `у`и`з` `з`э *смо:*лист",   "Энг кичигидан бошланг."),
    ("Which comes before ten?",    "`у`ич камз би*фо:* тэн",          "Ўндан олдин қайси сон келади?"),
    ("Round to the nearest ten.",  "раунд ту `з`э *ниэ*рист тэн",     "Энг яқин ўнликка яхлитланг."),
]

# -------------------------------------------------- Topic 13 — fractions ----
FRAC_WORDS = [
    ("🍕","fraction",    "*фр`э`к*шн",      "каср"),
    ("⬆️","numerator",   "*нью:*мэрейта",   "сурат"),
    ("⬇️","denominator", "ди*но*минейта",   "махраж"),
    ("🥮","whole",       "ҳоул",            "бутун"),
    ("🧩","part",        "па:т",            "қисм"),
    ("⚖️","equal parts", "*и:к*`у`эл па:тс","тенг қисмлар"),
    ("🎨","shade",       "шейд",            "бўямоқ"),
    ("✂️","divide into", "ди*вайд* *ин*ту", "...га бўлмоқ"),
]

# (numerator, denominator, how it is said, pronunciation, Ўзбекча)
FRAC_SAY = [
    ("1","2","one half",       "`у`ан ҳа:ф",              "ярим"),
    ("1","3","one third",      "`у`ан `с`ёд",             "учдан бир"),
    ("1","4","one quarter",    "`у`ан *к`у`о:*та",        "чоракда бир"),
    ("3","4","three quarters", "`с`ри: *к`у`о:*таз",      "тўртдан уч"),
    ("2","3","two thirds",     "ту: `с`ёдз",              "учдан икки"),
    ("1","5","one fifth",      "`у`ан фиф`с`",            "бешдан бир"),
    ("5","8","five eighths",   "файв эйт`с`",            "саккиздан беш"),
]

FRAC_PHRASES = [
    ("Colour one half of the circle.","*ка*ла `у`ан ҳа:ф ов `з`э *сё*кл","Доиранинг ярмини бўянг."),
    ("How many equal parts?",        "ҳау *мэ*ни *и:к*`у`эл па:тс",     "Нечта тенг қисм бор?"),
    ("Shade three quarters.",        "шейд `с`ри: *к`у`о:*таз",         "Тўртдан учини бўянг."),
    ("Two halves make one whole.",   "ту: ҳа:вз мейк `у`ан ҳоул",       "Икки ярим — бир бутун."),
    ("The top number is the numerator.","`з`э топ *нам*ба из `з`э *нью:*мэрейта",
                                                                        "Юқоридаги сон — сурат."),
]

# ------------------------------- Topic 14 — measurement, time and money -----
MEASURE = [
    ("📏","millimetre (mm)","*ми*лими:та",   "миллиметр"),
    ("📏","centimetre (cm)","*сэн*тими:та",  "сантиметр"),
    ("📐","metre (m)",      "*ми:*та",       "метр"),
    ("🛣️","kilometre (km)", "*ки*лэми:та",   "километр"),
    ("⚖️","gram (g)",       "гр`э`м",        "грамм"),
    ("🏋️","kilogram (kg)",  "*ки*лэгр`э`м",  "килограмм"),
    ("🥤","millilitre (ml)","*ми*лили:та",   "миллилитр"),
    ("🪣","litre (l)",      "*ли:*та",       "литр"),
    ("↔️","length",         "ленг`с`",       "узунлик"),
    ("↕️","height",         "ҳайт",          "баландлик"),
    ("⬌","width",          "`у`ид`с`",      "эни"),
    ("🪶","weight",         "`у`эйт",        "оғирлик"),
]

TIME_WORDS = [
    ("⏱️","second",   "*сэ*кнд",   "сония"),
    ("⏰","minute",   "*ми*нит",   "дақиқа"),
    ("🕐","hour",     "*ау*а",     "соат (давомийлик)"),
    ("📅","day",      "дей",       "кун"),
    ("🗓️","week",     "`у`и:к",    "ҳафта"),
    ("📆","month",    "ман`с`",    "ой"),
    ("🎊","year",     "йиэ",       "йил"),
    ("⌚","o'clock",  "э*клок*",   "соат (аниқ вақт)"),
]

TELL_TIME = [
    ("3:00",  "three o'clock",          "`с`ри: э*клок*",             "соат уч"),
    ("3:15",  "quarter past three",     "*к`у`о:*та па:ст `с`ри:",    "тўртдан ўн беш дақиқа ўтди"),
    ("3:30",  "half past three",        "ҳа:ф па:ст `с`ри:",          "уч ярим"),
    ("3:45",  "quarter to four",        "*к`у`о:*та ту фо:",          "тўртга ўн беш дақиқа қолди"),
    ("3:05",  "five past three",        "файв па:ст `с`ри:",          "учдан беш дақиқа ўтди"),
    ("3:50",  "ten to four",            "тэн ту фо:",                 "тўртга ўн дақиқа қолди"),
]

MONEY_WORDS = [
    ("💰","money",   "*ма*ни",  "пул"),
    ("🪙","coin",    "койн",    "танга"),
    ("💵","note",    "ноут",    "қоғоз пул"),
    ("🧾","price",   "прайс",   "нарх"),
    ("💳","cost",    "кост",    "турмоқ (нарх)"),
    ("🛒","buy",     "бай",     "сотиб олмоқ"),
    ("🏷️","sell",    "сэл",     "сотмоқ"),
    ("🔄","change",  "чейнж",   "қайтим"),
]

MEASURE_PHRASES = [
    ("How long is it?",            "ҳау ло`нг` из ит",             "У қанча узунликда?"),
    ("Measure the line in centimetres.","*мэ*жа `з`э лайн ин *сэн*тими:таз","Чизиқни сантиметрда ўлчанг."),
    ("It is ten centimetres long.","ит из тэн *сэн*тими:таз ло`нг`","У ўн сантиметр узунликда."),
    ("What time is it?",           "`у`от тайм из ит",             "Соат неча?"),
    ("How much does it cost?",     "ҳау мач даз ит кост",          "У қанча туради?"),
    ("How much change?",           "ҳау мач чейнж",                "Қанча қайтим?"),
]

# --------------------------------------------------- Topic 15 — geometry ----
GEO_WORDS = [
    ("•","point",         "пойнт",            "нуқта"),
    ("➖","line",          "лайн",             "чизиқ"),
    ("📏","line segment",  "лайн *сэг*мэнт",   "кесма"),
    ("📐","angle",         "*`э`*нгл",         "бурчак"),
    ("📐","right angle",   "райт *`э`*нгл",    "тўғри бурчак"),
    ("🔺","acute angle",   "э*кью:т* *`э`*нгл","ўткир бурчак"),
    ("🔻","obtuse angle",  "эб*тью:с* *`э`*нгл","ўтмас бурчак"),
    ("🌡️","degree (°)",    "ди*гри:*",         "градус"),
    ("🛤️","parallel",      "*п`э`*рэлел",      "параллел"),
    ("✚","perpendicular", "пёпэн*ди*кьюла",   "перпендикуляр"),
    ("📦","face",          "фейс",             "ёқ"),
    ("📏","edge",          "эж",               "қирра"),
    ("🔘","vertex",        "*вё*текс",         "учи"),
    ("🔲","perimeter",     "пэ*ри*мита",       "периметр"),
    ("🟦","area",          "*эа*риэ",          "юза"),
    ("🪞","symmetry",      "*си*мэтри",        "симметрия"),
]

# (svg key, English, pronunciation, Ўзбекча, faces, edges, vertices)
SOLIDS = [
    ("cube",     "cube",     "кью:б",     "куб",       "6", "12", "8"),
    ("cuboid",   "cuboid",   "*кью:*бойд","параллелепипед","6","12","8"),
    ("sphere",   "sphere",   "сфиэ",      "шар",       "1", "0",  "0"),
    ("cylinder", "cylinder", "*си*линда", "цилиндр",   "3", "2",  "0"),
    ("cone",     "cone",     "коун",      "конус",     "2", "1",  "1"),
    ("pyramid",  "pyramid",  "*пи*рэмид", "пирамида",  "5", "8",  "5"),
]

GEO_PHRASES = [
    ("Find the perimeter.",        "файнд `з`э пэ*ри*мита",          "Периметрни топинг."),
    ("Measure the angle.",         "*мэ*жа `з`и *`э`*нгл",           "Бурчакни ўлчанг."),
    ("It is a right angle.",       "ит из э райт *`э`*нгл",          "Бу тўғри бурчак."),
    ("How many faces has a cube got?","ҳау *мэ*ни *фей*сиз ҳ`э`з э кью:б гот",
                                                                     "Кубнинг нечта ёғи бор?"),
    ("Draw a line of symmetry.",   "дро: э лайн ов *си*мэтри",       "Симметрия ўқини чизинг."),
    ("These lines are parallel.",  "`з`и:з лайнз а: *п`э`*рэлел",    "Бу чизиқлар параллел."),
    ("The area is twelve square centimetres.","`з`и *эа*риэ из т`у`элв ск`у`эа *сэн*тими:таз",
                                                                     "Юзаси ўн икки квадрат сантиметр."),
]

# ------------------------------- Topic 16 — word problems and teacher talk --
# The words that tell a pupil which operation the problem wants.
SIGNAL_WORDS = [
    ("➕","altogether, in total, sum, both",   "о:лта*гэ*`з`а, ин *тоу*тл", "қўшиш"),
    ("➖","left, fewer, how many more, difference","лефт, *фью:*а",        "айириш"),
    ("✖️","each … how many altogether, groups of","и:ч, гру:пс ов",        "кўпайтириш"),
    ("➗","share, split, each gets, per",      "шеа, сплит, пё",           "бўлиш"),
]

PROBLEM_WORDS = [
    ("👥","each",        "и:ч",            "ҳар бири"),
    ("🔁","every",       "*эв*ри",         "ҳар"),
    ("🤲","share",       "шеа",            "бўлишмоқ"),
    ("2️⃣","twice",       "т`у`айс",        "икки марта"),
    ("📦","left over",   "лефт *оу*ва",    "ортиб қолган"),
    ("📝","working",     "*`у`ё*ки`нг`",   "ечиш йўли"),
    ("💡","solution",    "сэ*лу:*шн",      "ечим"),
    ("🎯","altogether",  "о:лта*гэ*`з`а",  "ҳаммаси бўлиб"),
]

WORKED_PROBLEM = [
    ("Problem", "Ali has 12 apples. He gives 5 to his friend. "
                "How many apples has he got left?",
                "Али 12 та олмага эга. 5 тасини дўстига беради. "
                "Унда нечта олма қолди?"),
    ("What do we know?", "Ali has 12 apples. He gives away 5.",
                "Нима маълум? — 12 та бор, 5 тасини берди."),
    ("What do we need?", "How many are left.",
                "Нима топиш керак? — Нечтаси қолгани."),
    ("Which operation?", "«left» → subtraction.",
                "Қайси амал? — «left» сўзи айиришни билдиради."),
    ("Working",  "12 − 5 = 7",
                "Ечиш йўли."),
    ("Answer",   "He has got 7 apples left.",
                "Жавобни тўлиқ гап билан ёзинг."),
]

LESSON_SCRIPT = [
    ("Дарс боши", [
        ("Good morning, everyone. Sit down, please.", "гуд *мо:*ни`нг`, *эв*ри`у`ан"),
        ("Today we are going to learn about fractions.","та*дей* `у`и: а: *гоуи`нг`* ту лён э*баут* *фр`э`к*шнз"),
        ("Open your books at page twelve.",           "*оу*пн ё: букс `э`т пейж т`у`элв"),
    ]),
    ("Тушунтириш", [
        ("Look at the board, please.",                "лук `э`т `з`э бо:д, пли:з"),
        ("Watch carefully.",                          "`у`оч *кеа*фэли"),
        ("Let me show you an example.",               "лет ми: шоу ю: эн иг*за:м*пл"),
        ("Does everyone understand?",                 "даз *эв*ри`у`ан анда*ст`э`нд*"),
    ]),
    ("Иш вақти", [
        ("Now try these on your own.",                "нау трай `з`и:з он ё: оун"),
        ("Work in pairs.",                            "`у`ёк ин пеаз"),
        ("Show your working.",                        "шоу ё: *`у`ё*ки`нг`"),
        ("Put your hand up if you need help.",        "пут ё: ҳ`э`нд ап иф ю: ни:д ҳелп"),
    ]),
    ("Текшириш", [
        ("Let's check the answers together.",         "летс чек `з`и *а:н*саз та*гэ*`з`а"),
        ("Who got a different answer?",               "ҳу: гот э *диф*рэнт *а:н*са"),
        ("Well done, that's correct.",                "`у`эл дан, `з``э`тс ка*рэкт*"),
        ("Good try. Let's look again.",               "гуд трай. летс лук э*гэн*"),
    ]),
    ("Дарс охири", [
        ("Your homework is exercise four.",           "ё: *ҳоум*`у`ёк из *эк*сэсайз фо:"),
        ("Hand it in on Monday.",                     "ҳ`э`нд ит ин он *ман*дей"),
        ("The lesson is over. Goodbye!",              "`з`э *лэ*сн из *оу*ва. гуд*бай*"),
    ]),
]

# ----------------------------------------------------------- the exercises ---
EXERCISES = {
 9: [
   dict(kind="write", title="1. Сонни инглизча сўз билан ёзинг",
        hint="Британчада юзликдан кейин «and» қўйилади.",
        rows=[("58","fifty-eight"),("90","ninety"),("204","two hundred and four"),
              ("365","three hundred and sixty-five"),("1,000","one thousand"),
              ("2,548","two thousand, five hundred and forty-eight")], cols=1, wide=True),
   dict(kind="write", title="2. 6 рақамининг қиймати нечага тенг?",
        hint="Мисол: 465 → sixty (ўнликлар хонаси).",
        rows=[("367","sixty"),("612","six hundred"),("46","six"),
              ("6,000","six thousand")], cols=2),
   dict(kind="write", title="3. Ёйилган шаклда ёзинг",
        hint="Мисол: 365 = 300 + 60 + 5.",
        rows=[("248","200 + 40 + 8"),("703","700 + 3"),
              ("95","90 + 5"),("1,420","1000 + 400 + 20")], cols=2),
   dict(kind="free", title="4. Доскага 3 хонали сон ёзинг ва инглизча ўқинг",
        hint="Ҳар куни 5 та сон билан такрорланг.",
        rows=[("1.","—"),("2.","—"),("3.","—")], cols=1, wide=True),
 ],
 10: [
   dict(kind="write", title="1. Амални инглизча овоз чиқариб ёзинг",
        hint="Мисол: 7 + 5 = 12 → Seven plus five equals twelve.",
        rows=[("4 + 3 = 7","Four plus three equals seven."),
              ("9 − 2 = 7","Nine minus two equals seven."),
              ("15 + 5 = 20","Fifteen plus five equals twenty."),
              ("20 − 8 = 12","Twenty minus eight equals twelve.")], cols=1, wide=True),
   dict(kind="write", title="2. Белгининг номини ёзинг", hint="",
        rows=[("+","plus sign"),("−","minus sign"),("=","equals sign"),
              ("×","times sign"),("÷","division sign"),(">","greater than")], cols=3),
   dict(kind="write", title="3. Етишмаётган сўзни ёзинг", hint="",
        rows=[("What is the ______ of 6 and 4?","sum"),
              ("How much is ______ ?","left"),
              ("______ away five.","Take"),
              ("The ______ between 10 and 3 is 7.","difference")], cols=1, wide=True),
   dict(kind="free", title="4. Ўз масалангизни инглизча ёзинг",
        hint="Қўшишга битта, айиришга битта.",
        rows=[("1.","—"),("2.","—")], cols=1, wide=True),
 ],
 11: [
   dict(kind="write", title="1. Инглизча ўқинг ва ёзинг",
        hint="Мисол: 6 × 4 = 24 → Six times four equals twenty-four.",
        rows=[("3 × 5 = 15","Three times five equals fifteen."),
              ("7 × 8 = 56","Seven times eight equals fifty-six."),
              ("20 ÷ 4 = 5","Twenty divided by four equals five."),
              ("18 ÷ 3 = 6","Eighteen divided by three equals six.")], cols=1, wide=True),
   dict(kind="write", title="2. Инглизчасини ёзинг", hint="",
        rows=[("кўпайтма","product"),("бўлинма","quotient"),("қолдиқ","remainder"),
              ("кўпайтувчи","factor"),("жуфт","even"),("тоқ","odd")], cols=3),
   dict(kind="write", title="3. Қолдиқ борми? Инглизча жавоб ёзинг",
        hint="Мисол: 23 ÷ 5 → four remainder three.",
        rows=[("17 ÷ 5","three remainder two"),("22 ÷ 4","five remainder two"),
              ("30 ÷ 6","six, no remainder")], cols=1, wide=True),
   dict(kind="free", title="4. Кўпайтириш жадвалини инглизча айтинг",
        hint="Ҳар куни битта жадвал: 2, 3, 4 … 10. Белгилаб боринг.",
        rows=[("2 ×  ☐    3 ×  ☐    4 ×  ☐    5 ×  ☐    6 ×  ☐","—"),
              ("7 ×  ☐    8 ×  ☐    9 ×  ☐   10 ×  ☐","—")], cols=1, wide=True),
 ],
 12: [
   dict(kind="write", title="1. >, < ёки = белгисини қўйинг ва инглизча ўқинг",
        hint="Мисол: 7 > 5 → Seven is greater than five.",
        rows=[("8 ☐ 3","8 > 3 — Eight is greater than three."),
              ("4 ☐ 9","4 < 9 — Four is less than nine."),
              ("6 ☐ 6","6 = 6 — Six is equal to six."),
              ("12 ☐ 21","12 < 21 — Twelve is less than twenty-one.")], cols=1, wide=True),
   dict(kind="write", title="2. Ўсиш тартибида ёзинг (ascending order)", hint="",
        rows=[("14, 9, 23, 5","5, 9, 14, 23"),("60, 16, 6, 66","6, 16, 60, 66")],
        cols=1, wide=True),
   dict(kind="write", title="3. Инглизчасини ёзинг", hint="",
        rows=[("энг катта","the biggest"),("энг кичик","the smallest"),
              ("орасида","between"),("ўсиш тартиби","ascending order")], cols=2),
 ],
 13: [
   dict(kind="write", title="1. Касрни инглизча ёзинг", hint="",
        rows=[("1/2","one half"),("1/3","one third"),("1/4","one quarter"),
              ("3/4","three quarters"),("2/3","two thirds"),("1/5","one fifth")], cols=3),
   dict(kind="write", title="2. Сурат ва махраж — инглизчаси", hint="",
        rows=[("юқоридаги сон","numerator"),("пастдаги сон","denominator"),
              ("бутун","whole"),("тенг қисмлар","equal parts")], cols=2),
   dict(kind="write", title="3. Гапни тўлдиринг", hint="",
        rows=[("Two ______ make one whole.","halves"),
              ("Shade three ______ of the circle.","quarters"),
              ("How many ______ parts are there?","equal")], cols=1, wide=True),
 ],
 14: [
   dict(kind="write", title="1. Соатни инглизча ёзинг", hint="",
        rows=[("4:00","four o'clock"),("4:15","quarter past four"),
              ("4:30","half past four"),("4:45","quarter to five"),
              ("4:05","five past four"),("4:50","ten to five")], cols=2),
   dict(kind="write", title="2. Ўлчов бирлигини ёзинг", hint="",
        rows=[("см","centimetre"),("м","metre"),("кг","kilogram"),
              ("л","litre"),("г","gram"),("км","kilometre")], cols=3),
   dict(kind="write", title="3. Саволни инглизча ёзинг", hint="",
        rows=[("У қанча узунликда?","How long is it?"),
              ("Соат неча?","What time is it?"),
              ("У қанча туради?","How much does it cost?")], cols=1, wide=True),
 ],
 15: [
   dict(kind="write", title="1. Шаклнинг инглизчаси", hint="",
        rows=[("куб","cube"),("шар","sphere"),("цилиндр","cylinder"),
              ("конус","cone"),("пирамида","pyramid"),("периметр","perimeter")], cols=3),
   dict(kind="write", title="2. Кубнинг нечтаси бор? Инглизча ёзинг", hint="",
        rows=[("ёқлар (faces)","six faces"),("қирралар (edges)","twelve edges"),
              ("учлар (vertices)","eight vertices")], cols=1, wide=True),
   dict(kind="write", title="3. Бурчак турини ёзинг", hint="90° дан кичик / тенг / катта.",
        rows=[("45°","acute angle"),("90°","right angle"),("120°","obtuse angle")], cols=3),
 ],
 16: [
   dict(kind="write", title="1. Қайси амал? Белги сўзига қаранг",
        hint="altogether / left / each / share — ҳар бири бошқа амални билдиради.",
        rows=[("How many altogether?","addition  (+)"),
              ("How many are left?","subtraction  (−)"),
              ("5 boxes with 4 in each","multiplication  (×)"),
              ("Share 20 between 4","division  (÷)")], cols=1, wide=True),
   dict(kind="write", title="2. Масалани инглизча ечинг",
        hint="Ечиш йўлини ва жавобни тўлиқ гап билан ёзинг.",
        rows=[("Dilnoza has 15 pencils. She gives 6 away. How many are left?",
               "15 − 6 = 9.  She has got 9 pencils left."),
              ("There are 4 rows with 6 chairs in each row. How many chairs altogether?",
               "4 × 6 = 24.  There are 24 chairs altogether.")], cols=1, wide=True),
   dict(kind="free", title="3. Эртанги дарс учун тўлиқ сценарий ёзинг",
        hint="Дарс боши, тушунтириш, иш вақти, текшириш, дарс охири — "
             "ҳар бирига биттадан гап.",
        rows=[("Дарс боши:","—"),("Тушунтириш:","—"),("Иш вақти:","—"),
              ("Текшириш:","—"),("Дарс охири:","—")], cols=1, wide=True),
 ],
}

WEEK_PLAN = [
    ("1-ҳафта", "Мавзу 9. Разрядлар. Ҳар куни 5 та сонни инглизча овоз "
                "чиқариб ўқинг.", "20 дақиқа"),
    ("2-ҳафта", "Мавзу 10. Қўшиш ва айириш. Доскадаги ҳар бир мисолни "
                "инглизча ўқинг.", "дарс вақти"),
    ("3-ҳафта", "Мавзу 11. Кўпайтириш ва бўлиш. Кунига битта кўпайтириш "
                "жадвалини инглизча айтинг.", "20 дақиқа"),
    ("4-ҳафта", "Мавзу 12. Таққослаш. >, <, = белгиларини ҳар доим "
                "инглизча ўқинг.", "дарс вақти"),
    ("5-ҳафта", "Мавзу 13. Касрлар. Доирани бўлиб, қисмларини инглизча "
                "номланг.", "25 дақиқа"),
    ("6-ҳафта", "Мавзу 14. Ўлчов, вақт, пул. Кунига 5 марта «What time "
                "is it?» деб сўранг.", "20 дақиқа"),
    ("7-ҳафта", "Мавзу 15. Геометрия. Ҳар бир шаклнинг ёқ, қирра ва "
                "учларини инглизча сананг.", "25 дақиқа"),
    ("8-ҳафта", "Мавзу 16. Матнли масалалар. Бутун дарсни — бошидан "
                "охиригача — инглизча олиб боринг.", "дарс вақти"),
]

CHEAT_10 = [
    ("Read the number aloud.",          "ри:д `з`э *нам*ба э*лауд*"),
    ("What is seven plus five?",        "`у`от из *сэ*вн плас файв"),
    ("Seven plus five equals twelve.",  "*сэ*вн плас файв *и:к*`у`элз т`у`элв"),
    ("What is six times seven?",        "`у`от из сикс таймз *сэ*вн"),
    ("Twenty divided by four is five.", "*т`у`эн*ти ди*вай*дид бай фо: из файв"),
    ("Which number is greater?",        "`у`ич *нам*ба из *грей*та"),
    ("Shade one half of the circle.",   "шейд `у`ан ҳа:ф ов `з`э *сё*кл"),
    ("Measure it in centimetres.",      "*мэ*жа ит ин *сэн*тими:таз"),
    ("Show your working.",              "шоу ё: *`у`ё*ки`нг`"),
    ("Let's check the answers.",        "летс чек `з`и *а:н*саз"),
]
