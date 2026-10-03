# -*- coding: utf-8 -*-
"""English from Scratch — Book 1 (topics 1–8), general English, no mathematics.

Same marks as the other course (see content.py):
    *...*  stressed syllable      `x`  a sound Uzbek does not have
Vocabulary rows are (picture, English, pronunciation, Ўзбекча).

Material already written and checked for the mathematics course is imported
rather than retyped, so the two courses cannot drift apart.
"""
from content import (ALPHABET, VOWELS_NOTE, SOUND_KEY, NAME_SPELLING,
                     NUM_0_10, NUM_TEENS, NUM_TENS, TEEN_TY, SPELLING_TRAPS,
                     NUM_21_99, ORDINALS)
from content2 import COLOURS, TO_BE, THIS_THESE, PLURAL_RULES, IRREGULAR
from content3 import TELL_TIME

BOOK = dict(no=1, title="First Steps", uz="Биринчи қадамлар", level="A0",
            topics="Мавзу 1–8")

# ------------------------------------------------- the whole course, 4 books ---
ROADMAP = [
    ("1-китоб", "First Steps", "Биринчи қадамлар", "A0",
     "Ўзини танитиш ва кундалик эҳтиёжни қондириш учун етарли инглизча.", [
      (1, "The alphabet and sounds", "Алифбо ва товушлар",
       "26 ҳарф, товушлар, исмни ҳарфлаб айтиш.", "ready"),
      (2, "Greetings and introductions", "Саломлашиш ва танишиш",
       "Саломлашиш, танишиш, хайрлашиш ва одоб сўзлари.", "ready"),
      (3, "Numbers 0–100", "Сонлар 0–100",
       "Санаш, ёш, телефон рақами, нарх, тартиб сонлар.", "ready"),
      (4, "Personal information", "Шахсий маълумот",
       "am/is/are; исм, ёш, мамлакат, касб; анкета тўлдириш.", "ready"),
      (5, "Family", "Оила",
       "Қариндошлар; my/your/his/her; 's; have got.", "ready"),
      (6, "Colours and descriptions", "Ранглар ва сифатлар",
       "Ранглар, сифатлар ва уларнинг гапдаги ўрни.", "ready"),
      (7, "Things around you", "Атрофдаги нарсалар",
       "Кундалик буюмлар; a/an/the, кўплик; There is/are.", "ready"),
      (8, "Days, months and time", "Кунлар, ойлар, вақт",
       "Ҳафта кунлари, ойлар, соат; at/on/in; саналар.", "ready"),
     ]),
    ("2-китоб", "Everyday Life", "Кундалик ҳаёт", "A1",
     "Ҳар куни учрайдиган вазиятлар: овқат, уй, харид, йўл сўраш.", [
      (9,  "Daily routine", "Кундалик тартиб", "Present Simple; -s; always/never.", "next"),
      (10, "Food and drink", "Овқат ва ичимликлар", "Саноқли/саноқсиз; some/any; кафеда.", "next"),
      (11, "The home", "Уй", "Хоналар, мебель; in/on/under/next to.", "next"),
      (12, "Clothes and shopping", "Кийим ва харид", "Кийим, ўлчам, нарх, тўлов.", "next"),
      (13, "The city and directions", "Шаҳар ва йўл сўраш", "Жойлар; How do I get to…?", "next"),
      (14, "Jobs and work", "Касб ва иш", "Касблар; What do you do?", "next"),
      (15, "The body and health", "Тана ва соғлиқ", "Тана аъзолари; shifokorda; should.", "next"),
      (16, "Weather and seasons", "Об-ҳаво ва фасллар", "Об-ҳаво; Present Continuous билан танишиш.", "next"),
     ]),
    ("3-китоб", "Tenses", "Замонлар", "A2",
     "Эркин гапиришни очадиган грамматика: ҳозирги, ўтган ва келаси замон.", [
      (17, "Present Continuous", "Ҳозирги давом замон", "am/is/are + -ing; now ва every day.", "later"),
      (18, "was / were", "Ўтган замон: эдим", "was/were; yesterday, ago.", "later"),
      (19, "Past Simple — regular", "Ўтган замон: -ed", "-ed ва унинг уч хил талаффузи; did/didn't.", "later"),
      (20, "Past Simple — irregular", "Нотўғри феъллар", "Энг кўп ишлатиладиган 40 та феъл.", "later"),
      (21, "The future", "Келаси замон", "going to; will; режа ва қарор.", "later"),
      (22, "Modal verbs", "Модал феъллар", "can/can't; must; have to.", "later"),
      (23, "Comparatives, superlatives", "Қиёслаш даражалари", "bigger, the biggest, as … as.", "later"),
      (24, "Quantity", "Миқдор", "much/many, a few/a little, How much?", "later"),
     ]),
    ("4-китоб", "Real Communication", "Мулоқот", "A2+",
     "Ўрганганни ишга солиш: саёҳат, телефон, фикр билдириш, суҳбат.", [
      (25, "Travel and transport", "Саёҳат", "Аэропорт, вокзал, меҳмонхона.", "later"),
      (26, "Phone and internet", "Телефон ва интернет", "Телефон гаплари, хабар, оддий хат.", "later"),
      (27, "Feelings and opinions", "Ҳис-туйғу ва фикр", "I think…; розилик ва эътироз.", "later"),
      (28, "Plans and invitations", "Режа ва таклиф", "Would you like…?; Let's…", "later"),
      (29, "Describing people", "Одамларни тасвирлаш", "Ташқи кўриниш ва характер.", "later"),
      (30, "Linking your sentences", "Гапларни боғлаш", "and, but, because, so; ҳикоя қилиш.", "later"),
      (31, "Everyday problems", "Кундалик муаммолар", "Узр сўраш, ёрдам сўраш, шикоят.", "later"),
      (32, "Review — 30 conversations", "Такрор — 30 суҳбат", "Барча мавзу бўйича тўлиқ диалоглар.", "later"),
     ]),
]

# ------------------------------------------- Topic 2 — greetings, introductions ---
GREET_HELLO = [
    ("👋","Hello!",          "ҳэ*лоу*",         "Салом!"),
    ("🙂","Hi!",             "ҳай",             "Салом! (норасмий)"),
    ("🌅","Good morning!",   "гуд *мо:*ни`нг`", "Хайрли тонг!"),
    ("🌞","Good afternoon!", "гуд а:фта*ну:н*", "Хайрли кун!"),
    ("🌆","Good evening!",   "гуд *и:*вни`нг`", "Хайрли оқшом!"),
    ("🌙","Good night!",     "гуд найт",        "Хайрли тун! (хайрлашувда)"),
]

GREET_HOW = [
    ("How are you?",        "ҳау а: ю:",               "Қалайсиз?"),
    ("I'm fine, thank you.","айм файн, `с``э`нк ю:",   "Яхшиман, раҳмат."),
    ("Very well, thanks.",  "*вэ*ри `у`эл, `с``э`нкс", "Жуда яхши, раҳмат."),
    ("Not bad.",            "нот б`э`д",               "Ёмон эмас."),
    ("And you?",            "`э`нд ю:",                "Сиз-чи?"),
]

GREET_NAME = [
    ("What's your name?",   "`у`отс ё: нейм",          "Исмингиз нима?"),
    ("My name is Dilnoza.", "май нейм из Дилноза",     "Менинг исмим Дилноза."),
    ("I'm Dilnoza.",        "айм Дилноза",             "Мен Дилнозаман. (қисқа)"),
    ("Nice to meet you.",   "найс ту ми:т ю:",         "Танишганимдан хурсандман."),
    ("Nice to meet you too.","найс ту ми:т ю: ту:",    "Мен ҳам."),
    ("Where are you from?", "`у`эа а: ю: фром",        "Қаердансиз?"),
    ("I'm from Uzbekistan.","айм фром Узбеки*ста:н*",  "Мен Ўзбекистонданман."),
]

GREET_BYE = [
    ("👋","Goodbye!",        "гуд*бай*",        "Хайр!"),
    ("✌️","Bye!",            "бай",             "Хайр! (норасмий)"),
    ("🔜","See you later!",  "си: ю: *лей*та",  "Кейинроқ кўришамиз!"),
    ("📅","See you tomorrow!","си: ю: ту*мо*роу","Эртага кўришамиз!"),
    ("🤝","Have a nice day!","ҳ`э`в э найс дей","Кунингиз яхши ўтсин!"),
]

POLITE = [
    ("🙏","please",        "пли:з",            "илтимос"),
    ("💐","thank you",     "`с``э`нк ю:",      "раҳмат"),
    ("😊","you're welcome","ёа *`у`эл*кам",    "арзимайди"),
    ("😔","sorry",         "*со*ри",           "кечирасиз (узр)"),
    ("🙋","excuse me",     "икс*кью:з* ми:",   "кечирасиз (мурожаат)"),
    ("✅","yes",           "йес",              "ҳа"),
    ("❌","no",            "ноу",              "йўқ"),
    ("🤷","I don't know.", "ай доунт ноу",     "билмайман"),
]

GREET_DIALOGUE = [
    ("A:", "Good morning! How are you?",      "гуд *мо:*ни`нг`! ҳау а: ю:"),
    ("B:", "I'm fine, thank you. And you?",   "айм файн, `с``э`нк ю:. `э`нд ю:"),
    ("A:", "Very well, thanks. What's your name?", "*вэ*ри `у`эл, `с``э`нкс. `у`отс ё: нейм"),
    ("B:", "My name is Dilnoza. And you?",    "май нейм из Дилноза. `э`нд ю:"),
    ("A:", "I'm Aziza. Nice to meet you.",    "айм Азиза. найс ту ми:т ю:"),
    ("B:", "Nice to meet you too. Goodbye!",  "найс ту ми:т ю: ту:. гуд*бай*"),
]

# --------------------------------------------- Topic 3 — numbers in real life ---
NUM_USE_AGE = [
    ("How old are you?",        "ҳау оулд а: ю:",             "Неча ёшдасиз?"),
    ("I'm twenty-five.",        "айм *т`у`эн*ти файв",        "Мен йигирма бешдаман."),
    ("I'm twenty-five years old.","айм *т`у`эн*ти файв йиэз оулд","Мен йигирма беш ёшдаман."),
    ("How old is your son?",    "ҳау оулд из ё: сан",         "Ўғлингиз неча ёшда?"),
    ("He is six.",              "ҳи: из сикс",                "У олти ёшда."),
]

NUM_USE_PHONE = [
    ("What's your phone number?","`у`отс ё: фоун *нам*ба",    "Телефон рақамингиз нима?"),
    ("My number is 90 123 45 67.","май *нам*ба из...",        "Рақамим 90 123 45 67."),
    ("Nine oh, one two three …","найн оу, `у`ан ту: `с`ри:",  "Рақамлар битталаб айтилади."),
    ("Double three.",           "дабл `с`ри:",                "33 — «икки марта уч»."),
    ("Can you repeat that?",    "к`э`н ю: ри*пи:т* `з``э`т",  "Такрорлай оласизми?"),
]

NUM_USE_PRICE = [
    ("How much is it?",         "ҳау мач из ит",              "Қанча туради?"),
    ("It's ten thousand som.",  "итс тэн *`с`ау*зэнд сом",    "Ўн минг сўм."),
    ("That's too expensive.",   "`з``э`тс ту: икс*пэн*сив",   "Жуда қиммат."),
    ("Here you are.",           "ҳиэ ю: а:",                  "Мана, олинг."),
]

# Dates need ordinals beyond tenth, so the pattern is shown rather than listed.
ORDINAL_DATES = [
    ("1st","the first",     "`з`э фёст",        "биринчи"),
    ("2nd","the second",    "`з`э *сэ*кнд",     "иккинчи"),
    ("3rd","the third",     "`з`э `с`ёд",       "учинчи"),
    ("11th","the eleventh", "`з`и и*лэ*вн`с`",  "ўн биринчи"),
    ("20th","the twentieth","`з`э *т`у`эн*ти*э*`с`","йигирманчи"),
    ("21st","the twenty-first","`з`э *т`у`эн*ти фёст","йигирма биринчи"),
    ("30th","the thirtieth","`з`э *`с`ё*ти*э*`с`","ўттизинчи"),
    ("31st","the thirty-first","`з`э *`с`ё*ти фёст","ўттиз биринчи"),
]

# ------------------------------------------ Topic 4 — personal information ----
PERSONAL_WORDS = [
    ("📛","name",          "нейм",          "исм"),
    ("🪪","surname",       "*сё*нейм",      "фамилия"),
    ("🎂","age",           "эйж",           "ёш"),
    ("🌍","country",       "*кан*три",      "мамлакат"),
    ("🏙️","city",          "*си*ти",        "шаҳар"),
    ("🏠","address",       "э*дрэс*",       "манзил"),
    ("📞","phone number",  "фоун *нам*ба",  "телефон рақами"),
    ("📧","email",         "*и:*мейл",      "электрон почта"),
    ("💼","job",           "жоб",           "касб"),
    ("💍","married",       "*м`э`*рид",     "турмуш қурган"),
    ("🙋","single",        "*си`нг`*гл",    "турмуш қурмаган"),
    ("🗣️","language",      "*л`э`нг*гвиж",  "тил"),
]

COUNTRIES = [
    ("🇺🇿","Uzbekistan","Узбеки*ста:н*","Ўзбекистон","Uzbek","*уз*бек"),
    ("🇬🇧","England",   "*инг*глэнд",   "Англия",    "English","*инг*глиш"),
    ("🇷🇺","Russia",    "*ра*шэ",       "Россия",    "Russian","*ра*шн"),
    ("🇹🇷","Turkey",    "*тё*ки",       "Туркия",    "Turkish","*тё*киш"),
    ("🇺🇸","America",   "э*мэ*рикэ",    "Америка",   "American","э*мэ*рикэн"),
    ("🇰🇿","Kazakhstan","казах*ста:н*", "Қозоғистон","Kazakh","ка*за:х*"),
]

PERSONAL_Q = [
    ("What's your name?",      "`у`отс ё: нейм",             "Исмингиз нима?"),
    ("What's your surname?",   "`у`отс ё: *сё*нейм",         "Фамилиянгиз нима?"),
    ("How old are you?",       "ҳау оулд а: ю:",             "Неча ёшдасиз?"),
    ("Where are you from?",    "`у`эа а: ю: фром",           "Қаердансиз?"),
    ("Where do you live?",     "`у`эа ду ю: лив",            "Қаерда яшайсиз?"),
    ("What do you do?",        "`у`от ду ю: ду:",            "Касбингиз нима?"),
    ("Are you married?",       "а: ю: *м`э`*рид",            "Турмуш қурганмисиз?"),
    ("What's your phone number?","`у`отс ё: фоун *нам*ба",   "Телефон рақамингиз нима?"),
    ("Do you speak English?",  "ду ю: спи:к *инг*глиш",      "Инглизча гапирасизми?"),
    ("A little.",              "э *ли*тл",                   "Озгина."),
]

FORM_FIELDS = [
    ("First name",   "фёст нейм",      "Исм"),
    ("Surname",      "*сё*нейм",       "Фамилия"),
    ("Age",          "эйж",            "Ёш"),
    ("Country",      "*кан*три",       "Мамлакат"),
    ("City",         "*си*ти",         "Шаҳар"),
    ("Address",      "э*дрэс*",        "Манзил"),
    ("Phone number", "фоун *нам*ба",   "Телефон рақами"),
    ("Email",        "*и:*мейл",       "Электрон почта"),
    ("Job",          "жоб",            "Касб"),
]

# ---------------------------------------------------------- Topic 5 — family ---
FAMILY = [
    ("👩","mother / mum",     "*ма*`з`а · мам",      "она"),
    ("👨","father / dad",     "*фа:*`з`а · д`э`д",   "ота"),
    ("👪","parents",          "*пеа*рэнтс",          "ота-она"),
    ("👦","brother",          "*бра*`з`а",           "ака, ука"),
    ("👧","sister",           "*сис*та",             "опа, сингил"),
    ("👶","son",              "сан",                 "ўғил"),
    ("👧","daughter",         "*до:*та",             "қиз (фарзанд)"),
    ("🧒","children",         "*чил*дрэн",           "болалар"),
    ("🤵","husband",          "*ҳаз*бэнд",           "эр"),
    ("👰","wife",             "`у`айф",              "хотин"),
    ("👵","grandmother",      "*гр`э`нд*ма`з`а",     "бувижон"),
    ("👴","grandfather",      "*гр`э`нд*фа:`з`а",    "бобо"),
    ("🧕","aunt",             "а:нт",                "хола, амма"),
    ("🧔","uncle",            "*а`нг`*кл",           "тоға, амаки"),
    ("🧑","cousin",           "*ка*зн",              "жиян, амакивачча"),
    ("👨‍👩‍👧","family",          "*ф`э`*мили",          "оила"),
]

POSSESSIVE = [
    ("I",    "my",    "май",    "менинг",  "my sister"),
    ("you",  "your",  "ё:",     "сизнинг", "your brother"),
    ("he",   "his",   "ҳиз",    "унинг",   "his wife"),
    ("she",  "her",   "ҳё",     "унинг",   "her husband"),
    ("we",   "our",   "*ау*а",  "бизнинг", "our children"),
    ("they", "their", "`з`еа",  "уларнинг","their family"),
]

HAVE_GOT = [
    ("I have got two children.",  "ай ҳ`э`в гот ту: *чил*дрэн",  "Менинг иккита болам бор."),
    ("I've got two children.",    "айв гот ту: *чил*дрэн",       "Қисқа шакли."),
    ("She has got a brother.",    "ши: ҳ`э`з гот э *бра*`з`а",   "Унинг акаси бор."),
    ("She's got a brother.",      "ши:з гот э *бра*`з`а",        "Қисқа шакли."),
    ("I haven't got a sister.",   "ай *ҳ`э`*внт гот э *сис*та",  "Менинг синглим йўқ."),
    ("Have you got children?",    "ҳ`э`в ю: гот *чил*дрэн",      "Болангиз борми?"),
    ("Yes, I have. / No, I haven't.","йес, ай ҳ`э`в · ноу, ай *ҳ`э`*внт","Ҳа / Йўқ."),
]

FAMILY_PHRASES = [
    ("This is my sister.",        "`з`ис из май *сис*та",        "Бу менинг синглим."),
    ("Her name is Nilufar.",      "ҳё нейм из Нилуфар",          "Унинг исми Нилуфар."),
    ("He is my husband.",         "ҳи: из май *ҳаз*бэнд",        "У менинг эрим."),
    ("Dilnoza's brother is a doctor.","Дилнозаз *бра*`з`а из э *док*та","Дилнозанинг акаси шифокор."),
    ("How many children have you got?","ҳау *мэ*ни *чил*дрэн ҳ`э`в ю: гот","Нечта болангиз бор?"),
    ("We are a big family.",      "`у`и: а: э биг *ф`э`*мили",   "Биз катта оиламиз."),
]

# ------------------------------------------- Topic 6 — colours, descriptions ---
ADJ_PAIRS = [
    ("🐘","big",       "биг",          "катта",    "🐭","small",     "смо:л",       "кичик"),
    ("📏","long",      "ло`нг`",       "узун",     "✂️","short",     "шо:т",        "калта"),
    ("🗼","tall",      "то:л",         "баланд",   "🧒","short",     "шо:т",        "паст"),
    ("🆕","new",       "нью:",         "янги",     "🏺","old",       "оулд",        "эски"),
    ("👶","young",     "я`нг`",        "ёш",       "👴","old",       "оулд",        "кекса"),
    ("👍","good",      "гуд",          "яхши",     "👎","bad",       "б`э`д",       "ёмон"),
    ("🔥","hot",       "ҳот",          "иссиқ",    "❄️","cold",      "коулд",       "совуқ"),
    ("🐆","fast",      "фа:ст",        "тез",      "🐢","slow",      "слоу",        "секин"),
    ("💎","expensive", "икс*пэн*сив",  "қиммат",   "🏷️","cheap",     "чи:п",        "арзон"),
    ("🧼","clean",     "кли:н",        "тоза",     "🧹","dirty",     "*дё*ти",      "кир"),
    ("🙂","happy",     "*ҳ`э`*пи",     "хурсанд",  "🙁","sad",       "с`э`д",       "хафа"),
    ("✅","easy",      "*и:*зи",       "осон",     "🧩","difficult", "*ди*фиклт",   "қийин"),
]

ADJ_EXTRA = [
    ("🌸","beautiful", "*бью:*тифл",  "чиройли"),
    ("🧊","warm",      "`у`о:м",      "илиқ"),
    ("🪨","heavy",     "*ҳэ*ви",      "оғир"),
    ("🪶","light",     "лайт",        "енгил"),
    ("🍬","sweet",     "с`у`и:т",     "ширин"),
    ("🌶️","hot (spicy)","ҳот",         "аччиқ"),
    ("🔊","loud",      "лауд",        "баланд (овоз)"),
    ("🤫","quiet",     "*к`у`ай*ат",  "жимжит"),
]

ADJ_ORDER = [
    ("a red car",          "э рэд ка:",             "қизил машина", "сифат отдан ОЛДИН"),
    ("a big red car",      "э биг рэд ка:",         "катта қизил машина", "ўлчам → ранг → от"),
    ("The car is red.",    "`з`э ка: из рэд",       "Машина қизил.", "от + is + сифат"),
    ("It is a new house.", "ит из э нью: ҳаус",     "Бу янги уй.",  "a + сифат + от"),
    ("very good",          "*вэ*ри гуд",            "жуда яхши",    "very кучайтиради"),
    ("quite good",         "к`у`айт гуд",           "анча яхши",    "quite — ўртача"),
]

# ------------------------------------------ Topic 7 — things around you -------
THINGS_HOME = [
    ("🪑","table",     "*тей*бл",     "стол"),
    ("💺","chair",     "чеа",         "стул"),
    ("🛏️","bed",       "бэд",         "каравот"),
    ("🚪","door",      "до:",         "эшик"),
    ("🪟","window",    "*`у`ин*доу",  "дераза"),
    ("🔑","key",       "ки:",         "калит"),
    ("👜","bag",       "б`э`г",       "сумка"),
    ("📱","phone",     "фоун",        "телефон"),
    ("💰","money",     "*ма*ни",      "пул"),
    ("⌚","watch",     "`у`оч",       "қўл соати"),
    ("👓","glasses",   "*гла:*сиз",   "кўзойнак"),
    ("📖","book",      "бук",         "китоб"),
]

THINGS_MORE = [
    ("🖊️","pen",       "пэн",         "ручка"),
    ("🚗","car",       "ка:",         "машина"),
    ("🚲","bicycle",   "*бай*сикл",   "велосипед"),
    ("☕","cup",       "кап",         "чашка"),
    ("🍽️","plate",     "плейт",       "лаган"),
    ("🥄","spoon",     "спу:н",       "қошиқ"),
    ("🍴","fork",      "фо:к",        "вилка"),
    ("🔪","knife",     "найф",        "пичоқ"),
    ("🪞","mirror",    "*ми*ра",      "ойна"),
    ("🧴","soap",      "соуп",        "совун"),
    ("🪥","toothbrush","*ту:`с`*браш","тиш чўткаси"),
    ("🧺","basket",    "*ба:с*кит",   "сават"),
]

THERE_IS = [
    ("There is a book on the table.",  "`з`эа из э бук он `з`э *тей*бл", "Стол устида китоб бор."),
    ("There are two books here.",      "`з`эа а: ту: букс ҳиэ",          "Бу ерда иккита китоб бор."),
    ("There isn't a key here.",        "`з`эа *и*знт э ки: ҳиэ",         "Бу ерда калит йўқ."),
    ("There aren't any chairs.",       "`з`эа а:нт *эни* чеаз",          "Ҳеч қандай стул йўқ."),
    ("Is there a shop near here?",     "из `з`эа э шоп ниэ ҳиэ",         "Яқин атрофда дўкон борми?"),
    ("Yes, there is. / No, there isn't.","йес, `з`эа из · ноу, `з`эа *и*знт","Ҳа / Йўқ."),
    ("Where is my bag?",               "`у`эа из май б`э`г",             "Сумкам қаерда?"),
    ("It's on the chair.",             "итс он `з`э чеа",                "У стулда."),
]

# ------------------------------------------ Topic 8 — days, months, time ------
DAYS = [
    ("Monday",    "*ман*дей",    "душанба"),
    ("Tuesday",   "*тью:з*дей",  "сешанба"),
    ("Wednesday", "*`у`энз*дей", "чоршанба"),
    ("Thursday",  "*`с`ёз*дей",  "пайшанба"),
    ("Friday",    "*фрай*дей",   "жума"),
    ("Saturday",  "*с`э`*тэдей", "шанба"),
    ("Sunday",    "*сан*дей",    "якшанба"),
]

MONTHS = [
    ("January",  "*ж`э`*нюэри", "январь"),   ("July",     "жу*лай*",     "июль"),
    ("February", "*фэб*руэри",  "февраль"),  ("August",   "*о:*гэст",    "август"),
    ("March",    "ма:ч",        "март"),     ("September","сэп*тэм*ба",  "сентябрь"),
    ("April",    "*эй*прил",    "апрель"),   ("October",  "ок*тоу*ба",   "октябрь"),
    ("May",      "мей",         "май"),      ("November", "ноу*вэм*ба",  "ноябрь"),
    ("June",     "жу:н",        "июнь"),     ("December", "ди*сэм*ба",   "декабрь"),
]

SEASONS = [
    ("🌸","spring", "спри`нг`", "баҳор"),
    ("☀️","summer", "*са*ма",   "ёз"),
    ("🍂","autumn", "*о:*тэм",  "куз"),
    ("❄️","winter", "*`у`ин*та","қиш"),
]

TIME_WHEN = [
    ("🕐","today",     "та*дей*",      "бугун"),
    ("➡️","tomorrow",  "ту*мо*роу",    "эртага"),
    ("⬅️","yesterday", "*йес*тэдей",   "кеча"),
    ("⏰","now",       "нау",          "ҳозир"),
    ("🔜","later",     "*лей*та",      "кейинроқ"),
    ("🌅","morning",   "*мо:*ни`нг`",  "эрталаб"),
    ("🌞","afternoon", "а:фта*ну:н*",  "тушдан кейин"),
    ("🌆","evening",   "*и:*вни`нг`",  "кечқурун"),
    ("🌙","night",     "найт",         "тунда"),
    ("📅","week",      "`у`и:к",       "ҳафта"),
    ("🗓️","month",     "ман`с`",       "ой"),
    ("🎊","year",      "йиэ",          "йил"),
]

# at / on / in — the three that Uzbek speakers mix up most.
PREP_TIME = [
    ("at", "аниқ вақт", "at 5 o'clock · at night · at the weekend", "`э`т"),
    ("on", "кун ва сана", "on Monday · on 5th May · on Friday morning", "он"),
    ("in", "ой, йил, фасл, қисм", "in May · in 2026 · in winter · in the morning", "ин"),
]

DATES = [
    ("5 May",        "the fifth of May",          "`з`э фиф`с` ов мей",       "5-май"),
    ("1 January",    "the first of January",      "`з`э фёст ов *ж`э`*нюэри", "1-январь"),
    ("21 March",     "the twenty-first of March", "`з`э *т`у`эн*ти фёст ов ма:ч","21-март"),
    ("2026",         "twenty twenty-six",         "*т`у`эн*ти *т`у`эн*ти сикс","2026-йил"),
]

TIME_PHRASES = [
    ("What day is it today?",   "`у`от дей из ит та*дей*",   "Бугун қайси кун?"),
    ("It's Monday.",            "итс *ман*дей",              "Бугун душанба."),
    ("What's the date today?",  "`у`отс `з`э дейт та*дей*",  "Бугун нечанчи сана?"),
    ("What time is it?",        "`у`от тайм из ит",          "Соат неча?"),
    ("See you on Friday.",      "си: ю: он *фрай*дей",       "Жумада кўришамиз."),
    ("My birthday is in May.",  "май *бё`с`*дей из ин мей",  "Туғилган куним майда."),
]

# ----------------------------------------------------------- the exercises ---
EXERCISES = {
 1: [
   dict(kind="write", title="1. Катта ҳарфнинг кичигини ёзинг", hint="",
        rows=[("A","a"),("D","d"),("G","g"),("K","k"),("M","m"),
              ("P","p"),("R","r"),("T","t"),("W","w"),("Z","z")], cols=5),
   dict(kind="match", title="2. Ҳарфни расмга улаб қўйинг",
        hint="Сўзнинг биринчи ҳарфини топинг.",
        left=[("A","🍎 apple"),("K","🔑 key"),("M","🌙 moon"),
              ("S","☀️ sun"),("T","🌳 tree"),("P","✏️ pencil")],
        shuffled=["🌳 tree","☀️ sun","🍎 apple","✏️ pencil","🔑 key","🌙 moon"]),
   dict(kind="write", title="3. Унли ҳарфларни ажратинг",
        hint="B A F E U M I O R — улардан 5 та унлини кўчириб ёзинг.",
        rows=[("Унлилар (vowels):","A, E, I, O, U")], cols=1, wide=True),
   dict(kind="free", title="4. Исмингизни ҳарфлаб ёзинг",
        hint="Ҳар бир ҳарфнинг НОМИНИ айтасиз: Dilnoza → ди:-ай-эл-эн-оу-зэд-эй.",
        rows=[("My name is ____________ .","—"),
              ("I spell it: ____________________________ .","—")], cols=1, wide=True),
 ],
 2: [
   dict(kind="write", title="1. Вақтга қараб саломлашинг", hint="08:00 → Good morning!",
        rows=[("08:00","Good morning!"),("14:00","Good afternoon!"),
              ("20:00","Good evening!"),("Хайрлашувда","Goodbye! / Good night!")],
        cols=1, wide=True),
   dict(kind="write", title="2. Жавобини ёзинг", hint="",
        rows=[("How are you?","I'm fine, thank you."),
              ("What's your name?","My name is …"),
              ("Where are you from?","I'm from Uzbekistan."),
              ("Nice to meet you.","Nice to meet you too.")], cols=1, wide=True),
   dict(kind="write", title="3. Инглизчасини ёзинг", hint="",
        rows=[("раҳмат","thank you"),("илтимос","please"),("кечирасиз (узр)","sorry"),
              ("арзимайди","you're welcome"),("ҳа","yes"),("йўқ","no")], cols=3),
   dict(kind="free", title="4. Ўзингиз ҳақингизда 4 та гап ёзинг",
        hint="Исм, қаерданлиги, ёш, оила.",
        rows=[("1.","—"),("2.","—"),("3.","—"),("4.","—")], cols=1, wide=True),
 ],
 3: [
   dict(kind="write", title="1. Рақамни сўз билан ёзинг", hint="",
        rows=[("6","six"),("12","twelve"),("15","fifteen"),("20","twenty"),
              ("30","thirty"),("40","forty"),("70","seventy"),("100","one hundred")], cols=2),
   dict(kind="say", title="2. Урғу машқи — 13 ёки 30?",
        hint="-TEEN да урғу ОХИРДА, -TY да урғу БОШИДА. Ҳар куни такрорланг.",
        rows=[("thirteen — thirty","—"),("fourteen — forty","—"),
              ("fifteen — fifty","—"),("sixteen — sixty","—"),
              ("seventeen — seventy","—"),("eighteen — eighty","—"),
              ("nineteen — ninety","—")], cols=2, wide=True),
   dict(kind="write", title="3. Гапни тўлдиринг", hint="",
        rows=[("How ______ are you? — I'm thirty.","old"),
              ("How ______ is it? — Ten thousand som.","much"),
              ("What's your phone ______ ?","number")], cols=1, wide=True),
   dict(kind="free", title="4. Ўзингиз ҳақингизда ёзинг", hint="",
        rows=[("I am ____________ years old.","—"),
              ("My phone number is ____________ .","—")], cols=1, wide=True),
 ],
 4: [
   dict(kind="write", title="1. am, is ёки are?", hint="",
        rows=[("I ____ from Uzbekistan.","am"),("She ____ a teacher.","is"),
              ("They ____ my parents.","are"),("You ____ very kind.","are"),
              ("He ____ twenty.","is"),("We ____ from Tashkent.","are")], cols=2),
   dict(kind="write", title="2. Мамлакат ва миллат", hint="Uzbekistan → Uzbek",
        rows=[("Uzbekistan","Uzbek"),("England","English"),("Russia","Russian"),
              ("Turkey","Turkish"),("America","American")], cols=2),
   dict(kind="write", title="3. Саволни ёзинг", hint="Жавобга мос саволни ёзинг.",
        rows=[("— ____________________ ?  — My name is Aziza.","What's your name?"),
              ("— ____________________ ?  — I'm twenty-eight.","How old are you?"),
              ("— ____________________ ?  — I'm from Samarkand.","Where are you from?"),
              ("— ____________________ ?  — I'm a teacher.","What do you do?")],
        cols=1, wide=True),
   dict(kind="free", title="4. Анкетани тўлдиринг", hint="Ўзингиз ҳақингизда — инглизча.",
        rows=[("First name: ____________","—"),("Surname: ____________","—"),
              ("Age: ____________","—"),("City: ____________","—"),
              ("Job: ____________","—"),("Phone: ____________","—")], cols=2),
 ],
 5: [
   dict(kind="write", title="1. Қариндошни инглизча ёзинг", hint="",
        rows=[("она","mother"),("ота","father"),("опа/сингил","sister"),
              ("ака/ука","brother"),("қиз (фарзанд)","daughter"),("ўғил","son"),
              ("эр","husband"),("хотин","wife"),("бувижон","grandmother"),
              ("бобо","grandfather")], cols=2),
   dict(kind="write", title="2. my, your, his ёки her?", hint="",
        rows=[("This is Aziza. ____ brother is a doctor.","her"),
              ("This is Bobur. ____ wife is a teacher.","his"),
              ("I have a sister. ____ name is Nilufar.","Her"),
              ("Is this ____ bag? — Yes, it's mine.","your")], cols=1, wide=True),
   dict(kind="write", title="3. have got ёки has got?", hint="",
        rows=[("I ____ two children.","have got"),("She ____ a brother.","has got"),
              ("They ____ a big family.","have got"),("He ____ three sisters.","has got")],
        cols=2),
   dict(kind="free", title="4. Оилангиз ҳақида 5 та гап ёзинг",
        hint="Мисол: I have got one brother. His name is Sardor.",
        rows=[("1.","—"),("2.","—"),("3.","—"),("4.","—"),("5.","—")], cols=1, wide=True),
 ],
 6: [
   dict(kind="write", title="1. Рангни инглизча ёзинг", hint="",
        rows=[("қизил","red"),("кўк","blue"),("яшил","green"),("сариқ","yellow"),
              ("қора","black"),("оқ","white"),("пушти","pink"),("жигарранг","brown")], cols=2),
   dict(kind="write", title="2. Қарама-қарши сифатни ёзинг", hint="",
        rows=[("big","small"),("long","short"),("new","old"),("hot","cold"),
              ("good","bad"),("fast","slow"),("expensive","cheap"),("easy","difficult")], cols=2),
   dict(kind="write", title="3. Сўзларни тўғри тартибда ёзинг",
        hint="Инглизчада сифат отдан ОЛДИН келади.",
        rows=[("car / red / a","a red car"),("house / big / a","a big house"),
              ("book / new / an? a?","a new book"),("bag / black / a / small","a small black bag")],
        cols=1, wide=True),
   dict(kind="free", title="4. Атрофингиздаги 5 та нарсани тасвирланг",
        hint="Мисол: My bag is black. It is big.",
        rows=[("1.","—"),("2.","—"),("3.","—"),("4.","—"),("5.","—")], cols=1, wide=True),
 ],
 7: [
   dict(kind="write", title="1. a ёки an?", hint="Унли ТОВУШ олдидан an.",
        rows=[("____ table","a"),("____ apple","an"),("____ key","a"),("____ egg","an"),
              ("____ bag","a"),("____ umbrella","an"),("____ phone","a"),("____ hour","an")],
        cols=2),
   dict(kind="write", title="2. Кўпликни ёзинг", hint="",
        rows=[("book","books"),("box","boxes"),("city","cities"),("knife","knives"),
              ("child","children"),("woman","women"),("key","keys"),("watch","watches")],
        cols=2),
   dict(kind="write", title="3. There is ёки There are?", hint="",
        rows=[("______ a book on the table.","There is"),
              ("______ two chairs in the room.","There are"),
              ("______ a shop near here.","There is"),
              ("______ three windows.","There are")], cols=1, wide=True),
   dict(kind="write", title="4. Қаерда? Жавоб ёзинг", hint="on / in / under билан.",
        rows=[("Where is the book?","It's on the table."),
              ("Where are my keys?","They're in the bag.")], cols=1, wide=True),
 ],
 8: [
   dict(kind="write", title="1. Ҳафта кунларини тартиб билан ёзинг",
        hint="Душанбадан бошланг.",
        rows=[("1.","Monday"),("2.","Tuesday"),("3.","Wednesday"),("4.","Thursday"),
              ("5.","Friday"),("6.","Saturday"),("7.","Sunday")], cols=2),
   dict(kind="write", title="2. Ойни инглизча ёзинг", hint="",
        rows=[("январь","January"),("март","March"),("май","May"),("август","August"),
              ("сентябрь","September"),("декабрь","December")], cols=3),
   dict(kind="write", title="3. at, on ёки in?", hint="",
        rows=[("____ 7 o'clock","at"),("____ Monday","on"),("____ May","in"),
              ("____ winter","in"),("____ 5th March","on"),("____ night","at")], cols=3),
   dict(kind="write", title="4. Соатни инглизча ёзинг", hint="",
        rows=[("4:00","four o'clock"),("4:15","quarter past four"),
              ("4:30","half past four"),("4:45","quarter to five")], cols=2),
   dict(kind="free", title="5. Ўзингиз ҳақингизда ёзинг", hint="",
        rows=[("Today is ____________ .","—"),
              ("My birthday is in ____________ .","—"),
              ("I get up at ____________ .","—")], cols=1, wide=True),
 ],
}

WEEK_PLAN = [
    ("1-ҳафта", "Мавзу 1–2. Алифбо ва саломлашиш. Ҳар куни 5 та ҳарф, "
                "кунига бир марта танишув диалогини овоз чиқариб ўқинг.", "20 дақиқа"),
    ("2-ҳафта", "Мавзу 3. Сонлар. Ҳар куни 1 дан 100 гача сананг; "
                "ёшингизни ва телефон рақамингизни айтиб кўринг.", "20 дақиқа"),
    ("3-ҳафта", "Мавзу 4–5. Шахсий маълумот ва оила. Ҳар куни оилангиз "
                "аъзоларидан бири ҳақида 3 та гап тузинг.", "25 дақиқа"),
    ("4-ҳафта", "Мавзу 6–7. Сифатлар ва нарсалар. Уйингиздаги 10 та "
                "нарсани инглизча номланг ва тасвирланг.", "25 дақиқа"),
    ("5-ҳафта", "Мавзу 8. Кун, ой, соат. Ҳар эрталаб «What day is it today? "
                "What time is it?» деб ўзингизга савол беринг.", "20 дақиқа"),
]

CHEAT_10 = [
    ("Hello! How are you?",       "ҳэ*лоу*! ҳау а: ю:"),
    ("I'm fine, thank you.",      "айм файн, `с``э`нк ю:"),
    ("What's your name?",         "`у`отс ё: нейм"),
    ("My name is …",              "май нейм из"),
    ("Nice to meet you.",         "найс ту ми:т ю:"),
    ("I'm from Uzbekistan.",      "айм фром Узбеки*ста:н*"),
    ("I don't understand.",       "ай доунт анда*ст`э`нд*"),
    ("Can you repeat that, please?","к`э`н ю: ри*пи:т* `з``э`т, пли:з"),
    ("How much is it?",           "ҳау мач из ит"),
    ("Thank you. Goodbye!",       "`с``э`нк ю:. гуд*бай*"),
]
