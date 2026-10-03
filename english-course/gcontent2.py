# -*- coding: utf-8 -*-
"""English from Scratch — Book 2 (topics 9–16), everyday life.

Same marks as the other books:  *...* stressed syllable  ·  `x` a sound Uzbek
does not have. Vocabulary rows are (picture, English, pronunciation, Ўзбекча).
"""
from content2 import COLOURS

BOOK = dict(no=2, title="Everyday Life", uz="Кундалик ҳаёт", level="A1",
            topics="Мавзу 9–16")

# ------------------------------------------------- Topic 9 — daily routine ---
ROUTINE_VERBS = [
    ("⏰","get up",          "гэт ап",            "турмоқ"),
    ("🚿","have a shower",   "ҳ`э`в э *шау*а",    "душ қабул қилмоқ"),
    ("🪥","brush my teeth",  "браш май ти:`с`",   "тиш ювмоқ"),
    ("👗","get dressed",     "гэт дрэст",         "кийинмоқ"),
    ("🍳","have breakfast",  "ҳ`э`в *брэк*фэст",  "нонушта қилмоқ"),
    ("🏢","go to work",      "гоу ту `у`ёк",      "ишга бормоқ"),
    ("🍽️","have lunch",      "ҳ`э`в ланч",        "тушлик қилмоқ"),
    ("🏠","come home",       "кам ҳоум",          "уйга келмоқ"),
    ("🍲","cook dinner",     "кук *ди*на",        "кечки овқат пиширмоқ"),
    ("📺","watch TV",        "`у`оч ти:*ви:*",    "телевизор кўрмоқ"),
    ("📖","read a book",     "ри:д э бук",        "китоб ўқимоқ"),
    ("🧹","clean the house", "кли:н `з`э ҳаус",   "уй тозаламоқ"),
    ("🧺","wash the clothes","`у`ош `з`э клоу`з`з","кир ювмоқ"),
    ("🛏️","go to bed",       "гоу ту бэд",        "ётмоқ"),
    ("😴","sleep",           "сли:п",             "ухламоқ"),
    ("☕","drink tea",       "дри`нг`к ти:",      "чой ичмоқ"),
]

# he / she / it takes an -s. Everything in Present Simple hangs off this.
PS_FORMS = [
    ("I",    "get up at six.",   "ай гэт ап `э`т сикс",       "—"),
    ("You",  "get up at six.",   "ю: гэт ап...",              "—"),
    ("He",   "get<b>s</b> up at six.", "ҳи: гэтс ап...",      "+ s"),
    ("She",  "get<b>s</b> up at six.", "ши: гэтс ап...",      "+ s"),
    ("It",   "work<b>s</b> well.",     "ит `у`ёкс `у`эл",     "+ s"),
    ("We",   "get up at six.",   "`у`и: гэт ап...",           "—"),
    ("They", "get up at six.",   "`з`ей гэт ап...",           "—"),
]

PS_SPELLING = [
    ("+ s",   "кўпчилик феъллар",
     "work → works · read → reads · live → lives · sleep → sleeps"),
    ("+ es",  "o, s, x, ch, sh билан тугаса",
     "go → goes · watch → watches · wash → washes · finish → finishes"),
    ("y → ies","ундош + y билан тугаса",
     "study → studies · fly → flies · try → tries"),
    ("истисно","have феъли",
     "have → has  (He has breakfast at seven.)"),
]

PS_NEG_Q = [
    ("I don't get up early.",      "ай доунт гэт ап *ё:*ли",       "I/you/we/they — don't"),
    ("She doesn't get up early.",  "ши: *да*знт гэт ап *ё:*ли",    "he/she/it — doesn't"),
    ("Do you work on Monday?",     "ду ю: `у`ёк он *ман*дей",      "савол — Do"),
    ("Does she work on Monday?",   "даз ши: `у`ёк он *ман*дей",    "савол — Does"),
    ("Yes, I do. / No, I don't.",  "йес, ай ду: · ноу, ай доунт",  "қисқа жавоб"),
    ("Yes, she does. / No, she doesn't.","йес, ши: даз · ноу, ши: *да*знт","қисқа жавоб"),
]

FREQUENCY = [
    ("100%","always",    "*о:л*`у`эйз",  "доим"),
    ("80%", "usually",   "*ю:*жуэли",    "одатда"),
    ("60%", "often",     "*оф*н",        "тез-тез"),
    ("40%", "sometimes", "*сам*таймз",   "баъзан"),
    ("10%", "rarely",    "*реа*ли",      "камдан-кам"),
    ("0%",  "never",     "*нэ*ва",       "ҳеч қачон"),
]

ROUTINE_PHRASES = [
    ("What time do you get up?",  "`у`от тайм ду ю: гэт ап",       "Соат нечада турасиз?"),
    ("I get up at seven.",        "ай гэт ап `э`т *сэ*вн",         "Соат еттида тураман."),
    ("I always have breakfast.",  "ай *о:л*`у`эйз ҳ`э`в *брэк*фэст","Доим нонушта қиламан."),
    ("She never drinks coffee.",  "ши: *нэ*ва дри`нг`кс *ко*фи",   "У ҳеч қачон кофе ичмайди."),
    ("I work every day.",         "ай `у`ёк *эв*ри дей",           "Мен ҳар куни ишлайман."),
    ("What do you do at the weekend?","`у`от ду ю: ду: `э`т `з`э `у`и:*кэнд*","Дам олишда нима қиласиз?"),
]

# ------------------------------------------------- Topic 10 — food & drink ---
FOOD = [
    ("🍞","bread",   "брэд",       "нон"),
    ("🍚","rice",    "райс",       "гуруч"),
    ("🥩","meat",    "ми:т",       "гўшт"),
    ("🍗","chicken", "*чи*кин",    "товуқ"),
    ("🐟","fish",    "фиш",        "балиқ"),
    ("🥚","egg",     "эг",         "тухум"),
    ("🧀","cheese",  "чи:з",       "пишлоқ"),
    ("🧈","butter",  "*ба*та",     "сариёғ"),
    ("🍲","soup",    "су:п",       "шўрва"),
    ("🥗","salad",   "*с`э`*лэд",  "салат"),
    ("🍎","apple",   "*`э`*пл",    "олма"),
    ("🍌","banana",  "бэ*на:*нэ",  "банан"),
    ("🍅","tomato",  "тэ*ма:*тоу", "помидор"),
    ("🥔","potato",  "пэ*тей*тоу", "картошка"),
    ("🧅","onion",   "*а*нйэн",    "пиёз"),
    ("🥕","carrot",  "*к`э`*рэт",  "сабзи"),
]

DRINK = [
    ("💧","water",  "`у`*о:*та",  "сув"),
    ("🍵","tea",    "ти:",        "чой"),
    ("☕","coffee", "*ко*фи",     "кофе"),
    ("🥛","milk",   "милк",       "сут"),
    ("🧃","juice",  "жу:с",       "шарбат"),
    ("🍬","sugar",  "*шу*га",     "шакар"),
    ("🧂","salt",   "со:лт",      "туз"),
    ("🍽️","meal",   "ми:л",       "овқат"),
]

# The division Uzbek does not make, and the first real grammar trap of Book 2.
COUNT_UNCOUNT = [
    ("Саналади (countable)", "an apple → two apple<b>s</b> · an egg → three egg<b>s</b> · "
     "a tomato → five tomato<b>es</b>", "a/an қўйилади, кўплиги бор"),
    ("Саналмайди (uncountable)", "bread · water · rice · milk · sugar · meat · cheese",
     "a/an қўйилмайди, кўплиги йўқ"),
]

SOME_ANY = [
    ("There is some bread.",     "`з`эа из сам брэд",         "Тасдиқ гапда — some"),
    ("Is there any bread?",      "из `з`эа *эни* брэд",       "Саволда — any"),
    ("There isn't any bread.",   "`з`эа *и*знт *эни* брэд",   "Инкорда — any"),
    ("I'd like some tea.",       "айд лайк сам ти:",          "Илтимосда — some"),
    ("How much sugar?",          "ҳау мач *шу*га",            "саналмайди — How much"),
    ("How many apples?",         "ҳау *мэ*ни *`э`*плз",       "саналади — How many"),
]

CONTAINERS = [
    ("🍶","a bottle of water", "э *бо*тл ов `у`*о:*та", "бир шиша сув"),
    ("☕","a cup of tea",      "э кап ов ти:",          "бир пиёла чой"),
    ("🍞","a piece of bread",  "э пи:с ов брэд",        "бир бўлак нон"),
    ("⚖️","a kilo of rice",    "э *ки:*лоу ов райс",    "бир кило гуруч"),
]

LIKE = [
    ("I like tea.",             "ай лайк ти:",                "Мен чойни яхши кўраман."),
    ("I don't like coffee.",    "ай доунт лайк *ко*фи",       "Мен кофени ёқтирмайман."),
    ("Do you like fish?",       "ду ю: лайк фиш",             "Балиқни яхши кўрасизми?"),
    ("Yes, I do. / No, I don't.","йес, ай ду: · ноу, ай доунт","Ҳа / Йўқ."),
    ("She likes fruit.",        "ши: лайкс фру:т",            "У мевани яхши кўради."),
    ("I love plov!",            "ай лав плов",                "Мен паловни жуда яхши кўраман!"),
]

CAFE = [
    ("Can I have a cup of tea, please?","к`э`н ай ҳ`э`в э кап ов ти:, пли:з","Бир пиёла чой олсам бўладими?"),
    ("I'd like a salad, please.",       "айд лайк э *с`э`*лэд, пли:з",      "Салат олмоқчи эдим."),
    ("Anything else?",                  "*эни`с`и`нг`* элс",                "Яна бирор нарса?"),
    ("No, thank you. That's all.",      "ноу, `с``э`нк ю:. `з``э`тс о:л",   "Йўқ, раҳмат. Шу холос."),
    ("How much is it?",                 "ҳау мач из ит",                    "Қанча туради?"),
    ("The bill, please.",               "`з`э бил, пли:з",                  "Ҳисоб, илтимос."),
    ("It's delicious!",                 "итс ди*ли*шэс",                    "Жуда мазали!"),
]

# ----------------------------------------------------- Topic 11 — the home ---
ROOMS = [
    ("🏠","house",       "ҳаус",            "уй"),
    ("🏢","flat",        "фл`э`т",          "квартира"),
    ("🚪","room",        "ру:м",            "хона"),
    ("🍳","kitchen",     "*ки*чин",         "ошхона"),
    ("🛏️","bedroom",     "*бэд*ру:м",       "ётоқхона"),
    ("🛁","bathroom",    "*ба:`с`*ру:м",    "ҳаммом"),
    ("🛋️","living room", "*ли*ви`нг` ру:м", "меҳмонхона"),
    ("🚪","hall",        "ҳо:л",            "даҳлиз"),
    ("🌳","garden",      "*га:*дн",         "боғ"),
    ("🪟","balcony",     "*б`э`л*кэни",     "балкон"),
]

FURNITURE = [
    ("🛋️","sofa",     "*соу*фэ",      "диван"),
    ("🪑","chair",    "чеа",          "стул"),
    ("🪵","table",    "*тей*бл",      "стол"),
    ("🛏️","bed",      "бэд",          "каравот"),
    ("🚪","wardrobe", "*`у`о:*дроуб", "шкаф"),
    ("🧊","fridge",   "фриж",         "музлатгич"),
    ("🔥","cooker",   "*ку*ка",       "газ плита"),
    ("💡","lamp",     "л`э`мп",       "чироқ"),
    ("🧶","carpet",   "*ка:*пит",     "гилам"),
    ("🪟","curtains", "*кё*тнз",      "парда"),
    ("📚","shelf",    "шелф",         "жавон"),
    ("🪞","mirror",   "*ми*ра",       "ойна"),
]

PREP_PLACE = [
    ("📦","in",          "ин",            "ичида"),
    ("⬆️","on",          "он",            "устида"),
    ("⬇️","under",       "*ан*да",        "остида"),
    ("↔️","next to",     "нэкст ту",      "ёнида"),
    ("🔀","between",     "би*т`у`и:н*",   "орасида"),
    ("🔙","behind",      "би*ҳайнд*",     "орқасида"),
    ("🔜","in front of", "ин франт ов",   "олдида"),
    ("🔝","above",       "э*бав*",        "тепасида"),
    ("📍","near",        "ниэ",           "яқинида"),
    ("🔄","opposite",    "*о*пэзит",      "рўпарасида"),
]

HOME_PHRASES = [
    ("Where do you live?",          "`у`эа ду ю: лив",              "Қаерда яшайсиз?"),
    ("I live in a flat.",           "ай лив ин э фл`э`т",           "Мен квартирада яшайман."),
    ("How many rooms are there?",   "ҳау *мэ*ни ру:мз а: `з`эа",    "Нечта хона бор?"),
    ("There are three rooms.",      "`з`эа а: `с`ри: ру:мз",        "Учта хона бор."),
    ("The lamp is on the table.",   "`з`э л`э`мп из он `з`э *тей*бл","Чироқ стол устида."),
    ("The cat is under the chair.", "`з`э к`э`т из *ан*да `з`э чеа","Мушук стул остида."),
    ("My bag is next to the door.", "май б`э`г из нэкст ту `з`э до:","Сумкам эшик ёнида."),
]

# --------------------------------------------- Topic 12 — clothes, shopping ---
CLOTHES = [
    ("👕","T-shirt",  "*ти:*шёт",    "футболка"),
    ("👔","shirt",    "шёт",         "кўйлак (эркак)"),
    ("👗","dress",    "дрэс",        "кўйлак (аёл)"),
    ("👖","trousers", "*трау*заз",   "шим"),
    ("👖","jeans",    "жи:нз",       "жинси шим"),
    ("🧥","jacket",   "*ж`э`*кит",   "куртка"),
    ("🧥","coat",     "коут",        "пальто"),
    ("👞","shoes",    "шу:з",        "туфли"),
    ("🧦","socks",    "сокс",        "пайпоқ"),
    ("🧢","hat",      "ҳ`э`т",       "шляпа"),
    ("🧣","scarf",    "ска:ф",       "шарф"),
    ("🧤","gloves",   "главз",       "қўлқоп"),
]

SIZES = [
    ("🔹","small (S)",  "смо:л",      "кичик"),
    ("🔸","medium (M)", "*ми:*диэм",  "ўрта"),
    ("🔶","large (L)",  "ла:ж",       "катта"),
    ("📏","size",       "сайз",       "ўлчам"),
]

SHOPPING = [
    ("How much is this shirt?",     "ҳау мач из `з`ис шёт",          "Бу кўйлак қанча туради?"),
    ("How much are these shoes?",   "ҳау мач а: `з`и:з шу:з",        "Бу туфлилар қанча?"),
    ("What size do you take?",      "`у`от сайз ду ю: тейк",         "Қайси ўлчамни оласиз?"),
    ("Can I try it on?",            "к`э`н ай трай ит он",           "Кийиб кўрсам бўладими?"),
    ("It's too big.",               "итс ту: биг",                   "Жуда катта."),
    ("Have you got a smaller one?", "ҳ`э`в ю: гот э *смо:*ла `у`ан", "Кичикроғи борми?"),
    ("I'll take it.",               "айл тейк ит",                   "Шуни оламан."),
    ("Here you are.",               "ҳиэ ю: а:",                     "Мана, олинг."),
    ("Here's your change.",         "ҳиэз ё: чейнж",                 "Мана қайтимингиз."),
]

# The this/that split again, but where she will really use it — in a shop.
THIS_SHOP = [
    ("this shirt",   "`з`ис шёт",    "бу кўйлак (яқинда, бирлик)"),
    ("these shoes",  "`з`и:з шу:з",  "бу туфлилар (яқинда, кўплик)"),
    ("that coat",    "`з``э`т коут", "ана у пальто (узоқда, бирлик)"),
    ("those socks",  "`з`оуз сокс",  "ана у пайпоқлар (узоқда, кўплик)"),
]

# ------------------------------------------ Topic 13 — city and directions ---
PLACES = [
    ("🏪","shop",            "шоп",                    "дўкон"),
    ("🛒","supermarket",     "*су:*пэма:кит",          "супермаркет"),
    ("🏬","market",          "*ма:*кит",               "бозор"),
    ("🏦","bank",            "б`э`нк",                 "банк"),
    ("📮","post office",     "*поуст* офис",           "почта"),
    ("🏥","hospital",        "*ҳос*питл",              "шифохона"),
    ("💊","pharmacy",        "*фа:*мэси",              "дорихона"),
    ("🏫","school",          "ску:л",                  "мактаб"),
    ("🎓","university",      "ю:ни*вё*сити",           "университет"),
    ("🍽️","restaurant",      "*рэс*трон",              "ресторан"),
    ("☕","café",            "*к`э`*фей",              "кафе"),
    ("🏨","hotel",           "ҳоу*тэл*",               "меҳмонхона"),
    ("🌳","park",            "па:к",                   "боғ (парк)"),
    ("🕌","mosque",          "моск",                   "масжид"),
    ("🚏","bus stop",        "бас стоп",               "бекат"),
    ("🚉","railway station", "*рейл*`у`эй *стей*шн",   "вокзал"),
]

TRANSPORT = [
    ("🚌","bus",    "бас",       "автобус"),
    ("🚕","taxi",   "*т`э`к*си", "такси"),
    ("🚗","car",    "ка:",       "машина"),
    ("🚆","train",  "трейн",     "поезд"),
    ("✈️","plane",  "плейн",     "самолёт"),
    ("🚇","metro",  "*мэ*троу",  "метро"),
    ("🚶","on foot","он фут",    "пиёда"),
    ("🚲","bicycle","*бай*сикл", "велосипед"),
]

DIRECTIONS = [
    ("Excuse me, where is the bank?","икс*кью:з* ми:, `у`эа из `з`э б`э`нк","Кечирасиз, банк қаерда?"),
    ("How do I get to the market?",  "ҳау ду ай гэт ту `з`э *ма:*кит",     "Бозорга қандай бораман?"),
    ("Go straight on.",              "гоу стрейт он",                      "Тўғрига юринг."),
    ("Turn left.",                   "тён лефт",                           "Чапга бурилинг."),
    ("Turn right.",                  "тён райт",                           "Ўнгга бурилинг."),
    ("Take the first turning.",      "тейк `з`э фёст *тё*ни`нг`",          "Биринчи бурилишдан юринг."),
    ("It's on the left.",            "итс он `з`э лефт",                   "У чап томонда."),
    ("It's next to the school.",     "итс нэкст ту `з`э ску:л",            "У мактаб ёнида."),
    ("It's about five minutes from here.","итс э*баут* файв *ми*нитс фром ҳиэ","Бу ердан тахминан 5 дақиқа."),
    ("Is it far?",                   "из ит фа:",                          "Узоқми?"),
    ("No, it's very near.",          "ноу, итс *вэ*ри ниэ",                "Йўқ, жуда яқин."),
    ("I take the bus to work.",      "ай тейк `з`э бас ту `у`ёк",          "Мен ишга автобусда бораман."),
]

# ------------------------------------------------- Topic 14 — jobs and work ---
JOBS = [
    ("👩‍🏫","teacher",       "*ти:*ча",          "ўқитувчи"),
    ("👨‍⚕️","doctor",        "*док*та",          "шифокор"),
    ("👩‍⚕️","nurse",         "нёс",              "ҳамшира"),
    ("👷","engineer",      "энжи*ниэ*",        "муҳандис"),
    ("🚕","driver",        "*драй*ва",         "ҳайдовчи"),
    ("👨‍🍳","cook",          "кук",              "ошпаз"),
    ("🧑‍💼","shop assistant","шоп э*сис*тэнт",   "сотувчи"),
    ("👮","police officer","пэ*ли:с* *о*фисэ", "милиционер"),
    ("👨‍🌾","farmer",        "*фа:*ма",          "фермер"),
    ("👷","builder",       "*бил*да",          "қурувчи"),
    ("🧑‍🎓","student",       "*стью:*днт",       "талаба"),
    ("🏠","housewife",     "*ҳаус*`у`айф",     "уй бекаси"),
    ("💻","programmer",    "*проу*гр`э`ма",    "дастурчи"),
    ("🧾","accountant",    "э*каун*тэнт",      "бухгалтер"),
    ("✂️","hairdresser",   "*ҳеа*дрэса",       "сартарош"),
    ("🧑‍🔧","mechanic",      "ми*к`э`*ник",      "механик"),
]

WORK_WORDS = [
    ("🏢","office",    "*о*фис",     "офис"),
    ("💵","salary",    "*с`э`*лэри", "маош"),
    ("🧑‍💼","boss",      "бос",        "раҳбар"),
    ("🤝","colleague", "*ко*ли:г",   "ҳамкасб"),
    ("🗓️","day off",   "дей оф",     "дам олиш куни"),
    ("🏖️","holiday",   "*ҳо*лидей",  "таътил"),
    ("⏰","work hours","`у`ёк *ау*аз","иш вақти"),
    ("📝","job",       "жоб",        "иш, касб"),
]

JOB_PHRASES = [
    ("What do you do?",            "`у`от ду ю: ду:",              "Касбингиз нима?"),
    ("I'm a teacher.",             "айм э *ти:*ча",                "Мен ўқитувчиман."),
    ("I'm an engineer.",           "айм эн энжи*ниэ*",             "Мен муҳандисман. (an!)"),
    ("Where do you work?",         "`у`эа ду ю: `у`ёк",            "Қаерда ишлайсиз?"),
    ("I work in a school.",        "ай `у`ёк ин э ску:л",          "Мен мактабда ишлайман."),
    ("I work at a bank.",          "ай `у`ёк `э`т э б`э`нк",       "Мен банкда ишлайман."),
    ("Do you like your job?",      "ду ю: лайк ё: жоб",            "Ишингиз ёқадими?"),
    ("Yes, I love it.",            "йес, ай лав ит",               "Ҳа, жуда ёқади."),
    ("I start work at nine.",      "ай ста:т `у`ёк `э`т найн",     "Мен тўққизда ишни бошлайман."),
]

# ----------------------------------------------- Topic 15 — body and health ---
BODY = [
    ("🧑","head",     "ҳэд",        "бош"),
    ("💇","hair",     "ҳеа",        "соч"),
    ("👁️","eye",      "ай",         "кўз"),
    ("👂","ear",      "иэ",         "қулоқ"),
    ("👃","nose",     "ноуз",       "бурун"),
    ("👄","mouth",    "мау`с`",     "оғиз"),
    ("🦷","tooth",    "ту:`с`",     "тиш"),
    ("🧣","neck",     "нэк",        "бўйин"),
    ("💪","arm",      "а:м",        "қўл (елка–билак)"),
    ("✋","hand",     "ҳ`э`нд",     "кафт"),
    ("👆","finger",   "*фи`нг`*га", "бармоқ"),
    ("🫀","heart",    "ҳа:т",       "юрак"),
    ("🔙","back",     "б`э`к",      "орқа, бел"),
    ("🦵","leg",      "лэг",        "оёқ"),
    ("🦶","foot",     "фут",        "товон"),
    ("🫃","stomach",  "*ста*мэк",   "қорин"),
]

HEALTH = [
    ("I've got a headache.",      "айв гот э *ҳэд*эйк",         "Бошим оғрияпти."),
    ("I've got a toothache.",     "айв гот э *ту:`с`*эйк",      "Тишим оғрияпти."),
    ("I've got a stomach ache.",  "айв гот э *ста*мэк эйк",     "Қорним оғрияпти."),
    ("I've got a cold.",          "айв гот э коулд",            "Шамоллаб қолдим."),
    ("I've got a temperature.",   "айв гот э *тэм*прэчэ",       "Ҳароратим бор."),
    ("I've got a cough.",         "айв гот э коф",              "Йўталим бор."),
    ("My back hurts.",            "май б`э`к ҳётс",             "Белим оғрияпти."),
    ("I feel ill.",               "ай фи:л ил",                 "Ўзимни ёмон ҳис қиляпман."),
    ("I feel better today.",      "ай фи:л *бэ*та та*дей*",     "Бугун яхшироқман."),
]

DOCTOR = [
    ("What's the matter?",        "`у`отс `з`э *м`э`*та",       "Нима бўлди?"),
    ("How long have you had it?", "ҳау ло`нг` ҳ`э`в ю: ҳ`э`д ит","Қачондан бери шундай?"),
    ("Since yesterday.",          "синс *йес*тэдей",            "Кечадан бери."),
    ("Take this medicine.",       "тейк `з`ис *мэд*сн",         "Бу дорини ичинг."),
    ("Twice a day, after meals.", "т`у`айс э дей, *а:ф*та ми:лз","Кунига икки марта, овқатдан кейин."),
    ("Get well soon!",            "гэт `у`эл су:н",             "Тезроқ тузалинг!"),
]

SHOULD = [
    ("You should rest.",          "ю: шуд рэст",                "Дам олишингиз керак."),
    ("You should drink water.",   "ю: шуд дри`нг`к `у`*о:*та",  "Сув ичишингиз керак."),
    ("You shouldn't work today.", "ю: *шу*днт `у`ёк та*дей*",   "Бугун ишламаслигингиз керак."),
    ("You shouldn't eat that.",   "ю: *шу*днт и:т `з``э`т",     "Уни емаслигингиз керак."),
]

# ------------------------------------------ Topic 16 — weather and seasons ---
WEATHER = [
    ("☀️","sunny",  "*са*ни",       "қуёшли"),
    ("☁️","cloudy", "*клау*ди",     "булутли"),
    ("🌧️","rainy",  "*рей*ни",      "ёмғирли"),
    ("💨","windy",  "*`у`ин*ди",    "шамолли"),
    ("❄️","snowy",  "*сноу*и",      "қорли"),
    ("🌫️","foggy",  "*фо*ги",       "туманли"),
    ("🔥","hot",    "ҳот",          "иссиқ"),
    ("🌤️","warm",   "`у`о:м",       "илиқ"),
    ("🍃","cool",   "ку:л",         "салқин"),
    ("🧊","cold",   "коулд",        "совуқ"),
    ("🌡️","degrees","ди*гри:з*",    "градус"),
    ("⛈️","storm",  "сто:м",        "бўрон"),
]

# The first proper look at Present Continuous: what is happening right now.
PRES_CONT = [
    ("It is raining now.",        "ит из *рей*ни`нг` нау",      "Ҳозир ёмғир ёғяпти."),
    ("It's snowing.",             "итс *сноу*и`нг`",            "Қор ёғяпти."),
    ("The sun is shining.",       "`з`э сан из *шай*ни`нг`",    "Қуёш чарақлаяпти."),
    ("I am reading now.",         "ай `э`м *ри:*ди`нг` нау",    "Мен ҳозир ўқияпман."),
    ("She is cooking dinner.",    "ши: из *ку*ки`нг` *ди*на",   "У кечки овқат пиширяпти."),
]

SIMPLE_VS_CONT = [
    ("I read every day.",      "ай ри:д *эв*ри дей",       "Present Simple", "одатда, ҳар доим"),
    ("I am reading now.",      "ай `э`м *ри:*ди`нг` нау",  "Present Continuous", "айни дамда"),
    ("It rains in spring.",    "ит рейнз ин спри`нг`",     "Present Simple", "умуман, одатда"),
    ("It is raining now.",     "ит из *рей*ни`нг` нау",    "Present Continuous", "ҳозир, шу тобда"),
]

WEATHER_PHRASES = [
    ("What's the weather like?",  "`у`отс `з`э *`у`э*`з`а лайк", "Об-ҳаво қандай?"),
    ("It's sunny today.",         "итс *са*ни та*дей*",          "Бугун қуёшли."),
    ("It's very hot.",            "итс *вэ*ри ҳот",              "Жуда иссиқ."),
    ("It's twenty degrees.",      "итс *т`у`эн*ти ди*гри:з*",    "Йигирма градус."),
    ("Is it cold outside?",       "из ит коулд аут*сайд*",       "Ташқарида совуқми?"),
    ("Take an umbrella.",         "тейк эн ам*брэ*лэ",           "Соябон олинг."),
]

# ----------------------------------------------------------- the exercises ---
EXERCISES = {
 9: [
   dict(kind="write", title="1. Феълга -s қўшинг", hint="he / she / it билан.",
        rows=[("I work → He ______","works"),("I go → She ______","goes"),
              ("I watch → He ______","watches"),("I study → She ______","studies"),
              ("I have → He ______","has"),("I live → She ______","lives")], cols=2),
   dict(kind="write", title="2. don't ёки doesn't?", hint="",
        rows=[("I ______ like coffee.","don't"),("She ______ work on Sunday.","doesn't"),
              ("They ______ live here.","don't"),("He ______ eat meat.","doesn't")], cols=2),
   dict(kind="write", title="3. Do ёки Does? Саволни тўлдиринг", hint="",
        rows=[("______ you get up early?","Do"),("______ she work here?","Does"),
              ("______ they speak English?","Do"),("______ he like tea?","Does")], cols=2),
   dict(kind="free", title="4. Ўз кунингизни ёзинг",
        hint="Мисол: I get up at six. I have breakfast at seven.",
        rows=[("1.","—"),("2.","—"),("3.","—"),("4.","—"),("5.","—")], cols=1, wide=True),
 ],
 10: [
   dict(kind="write", title="1. Саналадими ёки йўқми?",
        hint="C — countable (саналади), U — uncountable (саналмайди).",
        rows=[("apple","C"),("bread","U"),("egg","C"),("water","U"),
              ("tomato","C"),("rice","U"),("potato","C"),("milk","U")], cols=4),
   dict(kind="write", title="2. some ёки any?", hint="",
        rows=[("There is ______ bread.","some"),("Is there ______ milk?","any"),
              ("There isn't ______ sugar.","any"),("I'd like ______ tea.","some")],
        cols=2),
   dict(kind="write", title="3. How much ёки How many?", hint="",
        rows=[("______ sugar?","How much"),("______ apples?","How many"),
              ("______ water?","How much"),("______ eggs?","How many")], cols=2),
   dict(kind="write", title="4. Инглизчасини ёзинг", hint="",
        rows=[("нон","bread"),("сув","water"),("гўшт","meat"),("пишлоқ","cheese"),
              ("чой","tea"),("тухум","egg")], cols=3),
   dict(kind="free", title="5. Кафеда буюртма беринг",
        hint="Уч-тўрт гапдан иборат суҳбат ёзинг.",
        rows=[("— ","—"),("— ","—"),("— ","—")], cols=1, wide=True),
 ],
 11: [
   dict(kind="write", title="1. Хонани инглизча ёзинг", hint="",
        rows=[("ошхона","kitchen"),("ётоқхона","bedroom"),("ҳаммом","bathroom"),
              ("меҳмонхона","living room"),("боғ","garden"),("балкон","balcony")], cols=3),
   dict(kind="write", title="2. Предлогни қўйинг", hint="in / on / under / next to",
        rows=[("The book is ______ the table.","on"),
              ("The cat is ______ the chair.","under"),
              ("The milk is ______ the fridge.","in"),
              ("The lamp is ______ the bed.","next to")], cols=1, wide=True),
   dict(kind="write", title="3. There is ёки There are?", hint="",
        rows=[("______ a sofa in the room.","There is"),
              ("______ two chairs here.","There are"),
              ("______ a garden.","There is"),
              ("______ four rooms in my flat.","There are")], cols=1, wide=True),
   dict(kind="free", title="4. Уйингизни тасвирланг",
        hint="Нечта хона бор, нима қаерда турибди.",
        rows=[("1.","—"),("2.","—"),("3.","—"),("4.","—")], cols=1, wide=True),
 ],
 12: [
   dict(kind="write", title="1. Кийимни инглизча ёзинг", hint="",
        rows=[("кўйлак (аёл)","dress"),("шим","trousers"),("туфли","shoes"),
              ("куртка","jacket"),("пайпоқ","socks"),("шарф","scarf")], cols=3),
   dict(kind="write", title="2. this, these, that ёки those?", hint="",
        rows=[("______ shirt (яқинда, бирлик)","this"),
              ("______ shoes (яқинда, кўплик)","these"),
              ("______ coat (узоқда, бирлик)","that"),
              ("______ socks (узоқда, кўплик)","those")], cols=2),
   dict(kind="write", title="3. is ёки are?", hint="How much … ?",
        rows=[("How much ______ this shirt?","is"),
              ("How much ______ these shoes?","are"),
              ("How much ______ that bag?","is")], cols=1, wide=True),
   dict(kind="free", title="4. Дўкондаги суҳбатни ёзинг",
        hint="Нарх сўранг, кийиб кўринг, сотиб олинг.",
        rows=[("— ","—"),("— ","—"),("— ","—"),("— ","—")], cols=1, wide=True),
 ],
 13: [
   dict(kind="write", title="1. Жойни инглизча ёзинг", hint="",
        rows=[("дорихона","pharmacy"),("бозор","market"),("вокзал","railway station"),
              ("шифохона","hospital"),("почта","post office"),("бекат","bus stop")], cols=3),
   dict(kind="write", title="2. Йўлни кўрсатинг", hint="Инглизчасини ёзинг.",
        rows=[("Тўғрига юринг.","Go straight on."),("Чапга бурилинг.","Turn left."),
              ("У ўнг томонда.","It's on the right."),
              ("У мактаб ёнида.","It's next to the school.")], cols=1, wide=True),
   dict(kind="write", title="3. Транспортни ёзинг", hint="",
        rows=[("автобус","bus"),("поезд","train"),("самолёт","plane"),
              ("пиёда","on foot")], cols=4),
   dict(kind="free", title="4. Уйингиздан ишгача бўлган йўлни тасвирланг",
        hint="Мисол: I take the bus. Then I walk five minutes.",
        rows=[("1.","—"),("2.","—"),("3.","—")], cols=1, wide=True),
 ],
 14: [
   dict(kind="write", title="1. Касбни инглизча ёзинг", hint="",
        rows=[("шифокор","doctor"),("ўқитувчи","teacher"),("ҳайдовчи","driver"),
              ("муҳандис","engineer"),("сотувчи","shop assistant"),("ошпаз","cook")], cols=3),
   dict(kind="write", title="2. a ёки an?", hint="Унли ТОВУШ олдидан an.",
        rows=[("I'm ____ teacher.","a"),("I'm ____ engineer.","an"),
              ("She's ____ nurse.","a"),("He's ____ accountant.","an")], cols=2),
   dict(kind="write", title="3. in ёки at?", hint="in a school / at a bank",
        rows=[("I work ____ a school.","in"),("She works ____ a bank.","at"),
              ("He works ____ an office.","in"),("They work ____ a hospital.","in")],
        cols=2),
   dict(kind="free", title="4. Ўз ишингиз ҳақида 4 та гап ёзинг", hint="",
        rows=[("1.","—"),("2.","—"),("3.","—"),("4.","—")], cols=1, wide=True),
 ],
 15: [
   dict(kind="write", title="1. Тана аъзосини ёзинг", hint="",
        rows=[("бош","head"),("кўз","eye"),("қулоқ","ear"),("оғиз","mouth"),
              ("қўл (кафт)","hand"),("оёқ","leg"),("тиш","tooth"),("юрак","heart")], cols=4),
   dict(kind="write", title="2. Касалликни айтинг", hint="I've got a … / My … hurts.",
        rows=[("Бошим оғрияпти.","I've got a headache."),
              ("Тишим оғрияпти.","I've got a toothache."),
              ("Шамоллаб қолдим.","I've got a cold."),
              ("Белим оғрияпти.","My back hurts.")], cols=1, wide=True),
   dict(kind="write", title="3. should ёки shouldn't?", hint="",
        rows=[("You ______ rest.","should"),("You ______ work today.","shouldn't"),
              ("You ______ drink water.","should"),("You ______ eat that.","shouldn't")],
        cols=2),
   dict(kind="free", title="4. Шифокор билан суҳбат ёзинг", hint="",
        rows=[("— What's the matter?   — ","—"),("— ","—"),("— ","—")], cols=1, wide=True),
 ],
 16: [
   dict(kind="write", title="1. Об-ҳавони инглизча ёзинг", hint="",
        rows=[("қуёшли","sunny"),("ёмғирли","rainy"),("шамолли","windy"),
              ("қорли","snowy"),("булутли","cloudy"),("иссиқ","hot")], cols=3),
   dict(kind="write", title="2. Present Simple ёки Present Continuous?",
        hint="every day → Simple · now → Continuous",
        rows=[("I ______ (read) every day.","read"),
              ("I ______ (read) now.","am reading"),
              ("It ______ (rain) in spring.","rains"),
              ("It ______ (rain) now.","is raining")], cols=1, wide=True),
   dict(kind="write", title="3. -ing шаклини ёзинг", hint="",
        rows=[("cook","cooking"),("read","reading"),("go","going"),
              ("rain","raining"),("snow","snowing"),("work","working")], cols=3),
   dict(kind="free", title="4. Бугунги об-ҳаво ҳақида 3 та гап ёзинг", hint="",
        rows=[("1.","—"),("2.","—"),("3.","—")], cols=1, wide=True),
 ],
}

WEEK_PLAN = [
    ("1-ҳафта", "Мавзу 9. Кундалик тартиб. Ҳар кеча ўша кунингизни 5 та гап "
                "билан инглизча айтиб беринг.", "20 дақиқа"),
    ("2-ҳафта", "Мавзу 10. Овқат. Дастурхондаги ҳар бир нарсани инглизча "
                "номланг.", "20 дақиқа"),
    ("3-ҳафта", "Мавзу 11–12. Уй ва кийим. Хонангиздаги 10 та нарса қаерда "
                "турганини айтинг; эртага кийганингизни номланг.", "25 дақиқа"),
    ("4-ҳафта", "Мавзу 13–14. Шаҳар ва касб. Уйдан ишгача бўлган йўлни "
                "инглизча тасвирланг.", "25 дақиқа"),
    ("5-ҳафта", "Мавзу 15–16. Соғлиқ ва об-ҳаво. Ҳар эрталаб «What's the "
                "weather like today?» деб ўзингизга жавоб беринг.", "20 дақиқа"),
]

CHEAT_10 = [
    ("What time do you get up?",   "`у`от тайм ду ю: гэт ап"),
    ("I get up at seven.",         "ай гэт ап `э`т *сэ*вн"),
    ("I'd like a cup of tea.",     "айд лайк э кап ов ти:"),
    ("How much is this?",          "ҳау мач из `з`ис"),
    ("Can I try it on?",           "к`э`н ай трай ит он"),
    ("Where is the bank?",         "`у`эа из `з`э б`э`нк"),
    ("Go straight on, then turn left.","гоу стрейт он, `з`эн тён лефт"),
    ("What do you do?",            "`у`от ду ю: ду:"),
    ("I've got a headache.",       "айв гот э *ҳэд*эйк"),
    ("What's the weather like?",   "`у`отс `з`э *`у`э*`з`а лайк"),
]
