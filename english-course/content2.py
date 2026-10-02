# -*- coding: utf-8 -*-
"""Book 2 — topics 4–8. Same marks as Book 1 (see content.py):
    *...*  stressed syllable      `x`  a sound Uzbek does not have
Vocabulary rows are (picture, English, pronunciation, Ўзбекча); for shapes the
picture is an SVG key resolved by book2.shape().
"""

BOOK = dict(
    no=2, title="Grammar for the Lesson", uz="Дарс учун грамматика",
    topics="Мавзу 4–8",
    blurb="Сўзларни гапга айлантирамиз. Шу китобдан кейин сиз тайёр "
          "гапларни ёдлаб эмас, ўзингиз гап тузиб гапирасиз.",
)

# ---------------------------------------------- Topic 4 — colours & shapes ---
COLOURS = [
    ("🔴","red",    "рэд",      "қизил"),
    ("🔵","blue",   "блу:",     "кўк"),
    ("🟡","yellow", "*йе*лоу",  "сариқ"),
    ("🟢","green",  "гри:н",    "яшил"),
    ("🟠","orange", "*о*ринж",  "тўқ сариқ"),
    ("🟣","purple", "*пё*пл",   "бинафша"),
    ("🩷","pink",   "пинк",     "пушти"),
    ("🟤","brown",  "браун",    "жигарранг"),
    ("⚫","black",  "бл`э`к",   "қора"),
    ("⚪","white",  "`у`айт",   "оқ"),
    ("🩶","grey",   "грей",     "кулранг"),
]

# (svg key, English, pronunciation, Ўзбекча, sides, corners)
SHAPES = [
    ("circle",    "circle",    "*сё*кл",         "доира",            "0", "0"),
    ("square",    "square",    "ск`у`эа",        "квадрат",          "4", "4"),
    ("triangle",  "triangle",  "*трай*`э`нгл",   "учбурчак",         "3", "3"),
    ("rectangle", "rectangle", "*рэк*т`э`нгл",   "тўғри тўртбурчак", "4", "4"),
    ("oval",      "oval",      "*оу*вл",         "овал",             "0", "0"),
    ("rhombus",   "rhombus",   "*ром*бас",       "ромб",             "4", "4"),
    ("star",      "star",      "ста:",           "юлдуз",            "10","10"),
    ("pentagon",  "pentagon",  "*пен*тэгэн",     "бешбурчак",        "5", "5"),
    ("hexagon",   "hexagon",   "*ҳек*сэгэн",     "олтибурчак",       "6", "6"),
    ("semicircle","semicircle","*сэ*ми-сёкл",    "ярим доира",       "1", "2"),
]

SHAPE_WORDS = [
    ("📐","shape",         "шейп",          "шакл"),
    ("📏","side",          "сайд",          "томон"),
    ("📐","corner",        "*ко:*на",       "бурчак"),
    ("✴️","vertex",        "*вё*текс",      "учи (вершина)"),
    ("➖","straight line", "стрейт лайн",   "тўғри чизиқ"),
    ("〰️","curved line",   "кёвд лайн",     "эгри чизиқ"),
    ("⭕","round",         "раунд",         "думалоқ"),
    ("🟰","equal",         "*и:к*`у`эл",    "тенг"),
]

COLOUR_PHRASES = [
    ("What colour is it?",        "`у`от *ка*ла из ит",            "Бу қайси ранг?"),
    ("It is red.",                "ит из рэд",                     "У қизил."),
    ("Colour the circle blue.",   "*ка*ла `з`э *сё*кл блу:",       "Доирани кўкка бўянг."),
    ("Draw a square.",            "дро: э ск`у`эа",                "Квадрат чизинг."),
    ("Which shape is this?",      "`у`ич шейп из `з`ис",           "Бу қайси шакл?"),
    ("How many sides has it got?","ҳау *мэ*ни сайдз ҳ`э`з ит гот", "Унинг нечта томони бор?"),
    ("It has got four sides.",    "ит ҳ`э`з гот фо: сайдз",        "Унинг тўртта томони бор."),
    ("Point to the triangle.",    "пойнт ту `з`э *трай*`э`нгл",    "Учбурчакни кўрсатинг."),
]

# ------------------------------------------------ Topic 5 — a / an / plural ---
A_AN = [
    ("a book",     "э бук",        "a + ундош товуш"),
    ("a pencil",   "э *пен*сл",    "a + ундош товуш"),
    ("a square",   "э ск`у`эа",    "a + ундош товуш"),
    ("an apple",   "эн *`э`*пл",   "an + унли товуш"),
    ("an egg",     "эн эг",        "an + унли товуш"),
    ("an orange",  "эн *о*ринж",   "an + унли товуш"),
    ("an answer",  "эн *а:н*са",   "an + унли товуш"),
    ("an hour",    "эн *ау*а",     "h ўқилмайди — товуш унли!"),
]

PLURAL_RULES = [
    ("+ s", "кўпчилик сўзлар",
     [("book → books", "бук → букс"), ("pen → pens", "пэн → пэнз"),
      ("circle → circles", "*сё*кл → *сё*клз"), ("number → numbers", "*нам*ба → *нам*баз")]),
    ("+ es", "s, x, ch, sh билан тугаса",
     [("box → boxes", "бокс → *бок*сиз"), ("class → classes", "кла:с → *кла:*сиз"),
      ("bus → buses", "бас → *ба*сиз"), ("watch → watches", "`у`оч → *`у`о*чиз")]),
    ("y → ies", "ундош + y билан тугаса",
     [("city → cities", "*си*ти → *си*тиз"), ("body → bodies", "*бо*ди → *бо*диз"),
      ("country → countries", "*кан*три → *кан*триз"), ("copy → copies", "*ко*пи → *ко*пиз")]),
    ("f / fe → ves", "f ёки fe билан тугаса",
     [("half → halves", "ҳа:ф → ҳа:вз"), ("leaf → leaves", "ли:ф → ли:вз"),
      ("shelf → shelves", "шелф → шелвз"), ("knife → knives", "найф → найвз")]),
]

IRREGULAR = [
    ("👶","child → children", "чайлд → *чил*дрэн", "бола → болалар"),
    ("👨","man → men",        "м`э`н → мэн",       "эркак → эркаклар"),
    ("👩","woman → women",    "*`у`у*ман → *`у`и*мин","аёл → аёллар"),
    ("🦶","foot → feet",      "фут → фи:т",        "оёқ → оёқлар"),
    ("🦷","tooth → teeth",    "ту:`с` → ти:`с`",   "тиш → тишлар"),
    ("🧑","person → people",  "*пё*сн → *пи:*пл",  "одам → одамлар"),
    ("🐁","mouse → mice",     "маус → майс",       "сичқон → сичқонлар"),
    ("🐑","sheep → sheep",    "ши:п → ши:п",       "қўй → қўйлар (ўзгармайди)"),
]

PLURAL_PHRASES = [
    ("This is a circle.",          "`з`ис из э *сё*кл",             "Бу — доира."),
    ("These are circles.",         "`з`и:з а: *сё*клз",             "Булар — доиралар."),
    ("There is one triangle.",     "`з`эа из `у`ан *трай*`э`нгл",   "Битта учбурчак бор."),
    ("There are five triangles.",  "`з`эа а: файв *трай*`э`нглз",   "Бешта учбурчак бор."),
    ("Take a pencil.",             "тейк э *пен*сл",                "Қалам олинг."),
    ("Open the book.",             "*оу*пн `з`э бук",               "Китобни очинг."),
    ("A square has four sides.",   "э ск`у`эа ҳ`э`з фо: сайдз",     "Квадратнинг тўртта томони бор."),
    ("Two halves make one whole.", "ту: ҳа:вз мейк `у`ан ҳоул",     "Икки ярим — бир бутун."),
]

# --------------------------------------------------------- Topic 6 — to be ---
# (pronoun, form, short form, pronunciation, Ўзбекча)
TO_BE = [
    ("I",    "am",  "I'm",     "ай `э`м  ·  айм",      "мен ...ман"),
    ("You",  "are", "You're",  "ю: а:  ·  ю:а",        "сиз ...сиз"),
    ("He",   "is",  "He's",    "ҳи: из  ·  ҳи:з",      "у (эркак) ...дир"),
    ("She",  "is",  "She's",   "ши: из  ·  ши:з",      "у (аёл) ...дир"),
    ("It",   "is",  "It's",    "ит из  ·  итс",        "у (нарса) ...дир"),
    ("We",   "are", "We're",   "`у`и: а:  ·  `у`иа",   "биз ...миз"),
    ("They", "are", "They're", "`з`ей а:  ·  `з`еа",   "улар ...дир"),
]

THIS_THESE = [
    ("This is a square.",    "`з`ис из э ск`у`эа",     "Бу — квадрат.",   "бир нарса, яқинда"),
    ("These are squares.",   "`з`и:з а: ск`у`эаз",     "Булар — квадратлар.","кўп нарса, яқинда"),
    ("That is a circle.",    "`з``э`т из э *сё*кл",    "Ана у — доира.",  "бир нарса, узоқда"),
    ("Those are circles.",   "`з`оуз а: *сё*клз",      "Ана улар — доиралар.","кўп нарса, узоқда"),
]

BE_NEG_Q = [
    ("It is a triangle.",      "ит из э *трай*`э`нгл",        "Тасдиқ"),
    ("It is not a triangle.",  "ит из нот э *трай*`э`нгл",    "Инкор — тўлиқ шакли"),
    ("It isn't a triangle.",   "ит *и*знт э *трай*`э`нгл",    "Инкор — қисқа шакли"),
    ("Is it a triangle?",      "из ит э *трай*`э`нгл",        "Савол — is олдинга чиқади"),
    ("Yes, it is.",            "йес, ит из",                  "Қисқа жавоб — ҳа"),
    ("No, it isn't.",          "ноу, ит *и*знт",              "Қисқа жавоб — йўқ"),
]

BE_MATHS = [
    ("Two plus two is four.",     "ту: плас ту: из фо:",             "Икки қўшув икки — тўрт."),
    ("The answer is ten.",        "`з`и *а:н*са из тэн",             "Жавоб — ўн."),
    ("The sides are equal.",      "`з`э сайдз а: *и:к*`у`эл",        "Томонлар тенг."),
    ("This number is bigger.",    "`з`ис *нам*ба из *би*га",         "Бу сон каттароқ."),
    ("You are right.",            "ю: а: райт",                      "Сиз ҳақсиз."),
    ("That is not correct.",      "`з``э`т из нот ка*рэкт*",         "Бу тўғри эмас."),
    ("The answer is wrong.",      "`з`и *а:н*са из ро`нг`",          "Жавоб нотўғри."),
    ("We are ready.",             "`у`и: а: *рэ*ди",                 "Биз тайёрмиз."),
]

# ------------------------------------------------------ Topic 7 — commands ---
COMMAND_VERBS = [
    ("📖","open",      "*оу*пн",      "очмоқ"),
    ("📕","close",     "клоуз",       "ёпмоқ"),
    ("👀","look",      "лук",         "қарамоқ"),
    ("👂","listen",    "*ли*сн",      "тингламоқ"),
    ("✍️","write",     "райт",        "ёзмоқ"),
    ("📄","read",      "ри:д",        "ўқимоқ"),
    ("✏️","draw",      "дро:",        "чизмоқ"),
    ("🔢","count",     "каунт",       "санамоқ"),
    ("👉","point",     "пойнт",       "кўрсатмоқ"),
    ("🤚","raise",     "рейз",        "кўтармоқ"),
    ("🎨","colour",    "*ка*ла",      "бўямоқ"),
    ("✂️","cut",       "кат",         "кесмоқ"),
    ("🔗","match",     "м`э`ч",       "мослаштирмоқ"),
    ("⭕","circle",    "*сё*кл",      "айлана ичига олмоқ"),
    ("📝","underline", "*ан*далайн",  "тагига чизмоқ"),
    ("🧮","solve",     "солв",        "ечмоқ"),
    ("➕","add",       "`э`д",        "қўшмоқ"),
    ("⚖️","compare",   "кам*пэа*",    "таққосламоқ"),
    ("✅","check",     "чек",         "текширмоқ"),
    ("🔁","repeat",    "ри*пи:т*",    "такрорламоқ"),
]

MATHS_COMMANDS = [
    ("Draw a circle.",             "дро: э *сё*кл",                   "Доира чизинг."),
    ("Count the triangles.",       "каунт `з`э *трай*`э`нглз",        "Учбурчакларни сананг."),
    ("Write the answer.",          "райт `з`и *а:н*са",               "Жавобни ёзинг."),
    ("Solve the problem.",         "солв `з`э *про*блэм",             "Масалани ечинг."),
    ("Add the numbers.",           "`э`д `з`э *нам*баз",              "Сонларни қўшинг."),
    ("Compare the numbers.",       "кам*пэа* `з`э *нам*баз",          "Сонларни таққосланг."),
    ("Circle the correct answer.", "*сё*кл `з`э ка*рэкт* *а:н*са",    "Тўғри жавобни айлантиринг."),
    ("Underline the number.",      "*ан*далайн `з`э *нам*ба",         "Сон тагига чизинг."),
    ("Colour the square green.",   "*ка*ла `з`э ск`у`эа гри:н",       "Квадратни яшилга бўянг."),
    ("Check your work.",           "чек ё: `у`ёк",                    "Ишингизни текширинг."),
]

NEG_COMMANDS = [
    ("Don't talk.",             "доунт то:к",                  "Гаплашманг."),
    ("Don't run.",              "доунт ран",                   "Югурманг."),
    ("Don't forget your homework.","доунт фа*гэт* ё: *ҳоум*`у`ёк","Уй вазифасини унутманг."),
    ("Don't worry.",            "доунт *`у`а*ри",              "Хавотир олманг."),
    ("Let's count together.",   "летс каунт та*гэ*`з`а",       "Келинг, бирга санаймиз."),
    ("Let's start.",            "летс ста:т",                  "Бошлаймиз."),
    ("Let's check the answer.", "летс чек `з`и *а:н*са",       "Жавобни текширамиз."),
    ("Can you help me, please?","к`э`н ю: ҳелп ми:, пли:з",    "Менга ёрдам бера оласизми?"),
]

# ----------------------------------------------------- Topic 8 — questions ---
QWORDS = [
    ("❓","What?",    "`у`от",        "Нима?",     "What is this?"),
    ("🙋","Who?",     "ҳу:",          "Ким?",      "Who knows the answer?"),
    ("📍","Where?",   "`у`эа",        "Қаерда?",   "Where is the ruler?"),
    ("🕐","When?",    "`у`эн",        "Қачон?",    "When is the lesson?"),
    ("🔀","Which?",   "`у`ич",        "Қайси?",    "Which number is bigger?"),
    ("🤔","Why?",     "`у`ай",        "Нима учун?","Why is it wrong?"),
    ("🛠️","How?",     "ҳау",          "Қандай?",   "How do you know?"),
    ("🔢","How many?","ҳау *мэ*ни",   "Нечта?",    "How many sides are there?"),
    ("💰","How much?","ҳау мач",      "Қанча?",    "How much is it?"),
    ("🎒","Whose?",   "ҳу:з",         "Кимники?",  "Whose book is this?"),
]

Q_ORDER = [
    ("What <b>is</b> this?",            "савол сўзи + is + эга"),
    ("Where <b>is</b> the ruler?",      "савол сўзи + is + эга"),
    ("How many sides <b>are</b> there?","How many + от + are there"),
    ("<b>Is</b> it a circle?",          "is олдинга — ҳа/йўқ саволи"),
    ("<b>Are</b> these squares?",       "are олдинга — ҳа/йўқ саволи"),
    ("<b>Do</b> you understand?",       "do + эга + феъл"),
    ("<b>Can</b> you see the board?",   "can + эга + феъл"),
]

SHORT_ANSWERS = [
    ("Is it a circle?",      "Yes, it is.",      "No, it isn't.",   "из ит э *сё*кл"),
    ("Are these squares?",   "Yes, they are.",   "No, they aren't.","а: `з`и:з ск`у`эаз"),
    ("Do you understand?",   "Yes, I do.",       "No, I don't.",    "ду ю: анда*ст`э`нд*"),
    ("Can you see it?",      "Yes, I can.",      "No, I can't.",    "к`э`н ю: си: ит"),
]

MATHS_QUESTIONS = [
    ("What is two plus three?",            "`у`от из ту: плас `с`ри:",             "Икки қўшув уч нечи бўлади?"),
    ("How many sides does a square have?", "ҳау *мэ*ни сайдз даз э ск`у`эа ҳ`э`в", "Квадратнинг нечта томони бор?"),
    ("Which number is bigger?",            "`у`ич *нам*ба из *би*га",              "Қайси сон каттароқ?"),
    ("Where is the answer?",               "`у`эа из `з`и *а:н*са",                "Жавоб қаерда?"),
    ("Who wants to try?",                  "ҳу: `у`онтс ту трай",                  "Ким уриниб кўрмоқчи?"),
    ("Why is it wrong?",                   "`у`ай из ит ро`нг`",                   "Нима учун нотўғри?"),
    ("Is this correct?",                   "из `з`ис ка*рэкт*",                    "Бу тўғрими?"),
    ("Do you understand?",                 "ду ю: анда*ст`э`нд*",                  "Тушундингизми?"),
]

# ----------------------------------------------------------- the exercises ---
EXERCISES = {
 4: [
   dict(kind="write", title="1. Рангни инглизча ёзинг", hint="",
        rows=[("қизил","red"),("кўк","blue"),("яшил","green"),("сариқ","yellow"),
              ("қора","black"),("оқ","white"),("пушти","pink"),("жигарранг","brown")], cols=2),
   dict(kind="write", title="2. Шаклнинг нечта томони бор? Инглизча ёзинг",
        hint="Мисол: a triangle — three sides.",
        rows=[("a square","four sides"),("a triangle","three sides"),
              ("a rectangle","four sides"),("a pentagon","five sides"),
              ("a hexagon","six sides"),("a circle","no sides")], cols=2),
   dict(kind="write", title="3. Шакл номини ёзинг", hint="",
        rows=[("доира","circle"),("квадрат","square"),("учбурчак","triangle"),
              ("тўғри тўртбурчак","rectangle"),("ромб","rhombus"),("юлдуз","star")], cols=2),
   dict(kind="write", title="4. Гапни тўлдиринг", hint="",
        rows=[("What ______ is it? — It is green.","colour"),
              ("______ the circle red.","Colour"),
              ("How many ______ has a square got?","sides"),
              ("______ to the triangle.","Point")], cols=1, wide=True),
   dict(kind="free", title="5. Синфингиздаги 5 та нарсанинг рангини ёзинг",
        hint="Мисол: The board is green.",
        rows=[("The ____________ is ____________ .","—")]*5, cols=1, wide=True),
 ],
 5: [
   dict(kind="write", title="1. a ёки an?", hint="Унли ТОВУШ олдидан an.",
        rows=[("____ book","a"),("____ apple","an"),("____ ruler","a"),
              ("____ egg","an"),("____ square","a"),("____ orange","an"),
              ("____ answer","an"),("____ pencil","a")], cols=2),
   dict(kind="write", title="2. Кўпликни ёзинг", hint="",
        rows=[("book","books"),("box","boxes"),("city","cities"),("half","halves"),
              ("circle","circles"),("class","classes"),("leaf","leaves"),
              ("number","numbers")], cols=2),
   dict(kind="write", title="3. Қоидага бўйсунмайдиган кўплик", hint="",
        rows=[("child","children"),("man","men"),("woman","women"),("foot","feet"),
              ("tooth","teeth"),("person","people")], cols=3),
   dict(kind="write", title="4. This is … ёки These are … ?", hint="",
        rows=[("______ a circle.","This is"),("______ two squares.","These are"),
              ("______ an apple.","This is"),("______ five triangles.","These are")],
        cols=1, wide=True),
   dict(kind="free", title="5. Ўз синфингиз ҳақида 4 та гап ёзинг",
        hint="Мисол: There are twenty pupils in my class.",
        rows=[("There is ____________ .","—"),("There are ____________ .","—"),
              ("There is ____________ .","—"),("There are ____________ .","—")],
        cols=1, wide=True),
 ],
 6: [
   dict(kind="write", title="1. am, is ёки are?", hint="",
        rows=[("I ____ a teacher.","am"),("It ____ a circle.","is"),
              ("They ____ squares.","are"),("You ____ right.","are"),
              ("She ____ my pupil.","is"),("We ____ ready.","are"),
              ("The answer ____ ten.","is"),("These ____ triangles.","are")], cols=2),
   dict(kind="write", title="2. Инкор шаклини ёзинг", hint="Мисол: It is a square. → It isn't a square.",
        rows=[("It is a circle.","It isn't a circle."),
              ("They are equal.","They aren't equal."),
              ("The answer is correct.","The answer isn't correct."),
              ("I am late.","I'm not late.")], cols=1, wide=True),
   dict(kind="write", title="3. Савол ясанг ва қисқа жавоб беринг",
        hint="Мисол: It is a square. → Is it a square? — Yes, it is.",
        rows=[("It is a triangle.","Is it a triangle? — Yes, it is."),
              ("They are circles.","Are they circles? — Yes, they are."),
              ("The sides are equal.","Are the sides equal? — Yes, they are.")],
        cols=1, wide=True),
   dict(kind="write", title="4. Инглизчага ўгиринг", hint="",
        rows=[("Бу — квадрат.","This is a square."),
              ("Булар — доиралар.","These are circles."),
              ("Жавоб — ўн беш.","The answer is fifteen."),
              ("Томонлар тенг.","The sides are equal.")], cols=1, wide=True),
   dict(kind="free", title="5. Доскадаги шакл ҳақида 3 та гап ёзинг",
        hint="Мисол: This is a rectangle. It is blue. It has four sides.",
        rows=[("1.","—"),("2.","—"),("3.","—")], cols=1, wide=True),
 ],
 7: [
   dict(kind="write", title="1. Буйруқни инглизча ёзинг", hint="",
        rows=[("Китобни очинг.","Open the book."),("Доскага қаранг.","Look at the board."),
              ("Доира чизинг.","Draw a circle."),("Жавобни ёзинг.","Write the answer."),
              ("Учбурчакларни сананг.","Count the triangles."),
              ("Ишингизни текширинг.","Check your work.")], cols=1, wide=True),
   dict(kind="write", title="2. Инкор буйруқ ясанг", hint="Don't + феъл.",
        rows=[("talk","Don't talk."),("run","Don't run."),
              ("forget","Don't forget."),("worry","Don't worry.")], cols=2),
   dict(kind="write", title="3. «Let's …» билан ёзинг", hint="Келинг, бирга қиламиз.",
        rows=[("санаш","Let's count."),("бошлаш","Let's start."),
              ("текшириш","Let's check."),("ўқиш","Let's read.")], cols=2),
   dict(kind="write", title="4. Етишмаётган феълни ёзинг", hint="",
        rows=[("______ the square green.","Colour"),("______ the numbers.","Add"),
              ("______ the problem.","Solve"),("______ your hand.","Raise"),
              ("______ the correct answer.","Circle"),("______ after me.","Repeat")],
        cols=1, wide=True),
   dict(kind="free", title="5. Эртанги дарс учун 6 та буйруқ ёзинг",
        hint="Шу мавзудан танланг — ва эртага дарсда айтинг.",
        rows=[("1.","—"),("2.","—"),("3.","—"),("4.","—"),("5.","—"),("6.","—")], cols=2),
 ],
 8: [
   dict(kind="write", title="1. Қайси савол сўзи керак?", hint="",
        rows=[("______ is this? — A circle.","What"),
              ("______ many sides? — Four.","How"),
              ("______ is the ruler? — On the desk.","Where"),
              ("______ knows the answer? — Dilnoza.","Who"),
              ("______ number is bigger? — Ten.","Which"),
              ("______ is it wrong? — Because 2+2 is 4.","Why")], cols=1, wide=True),
   dict(kind="write", title="2. Саволга айлантиринг", hint="is/are ни олдинга чиқаринг.",
        rows=[("It is a square.","Is it a square?"),
              ("These are circles.","Are these circles?"),
              ("The answer is ten.","Is the answer ten?")], cols=1, wide=True),
   dict(kind="write", title="3. Қисқа жавоб ёзинг", hint="Ҳа ва йўқ — иккаласини ҳам.",
        rows=[("Is it a triangle?","Yes, it is. / No, it isn't."),
              ("Are they equal?","Yes, they are. / No, they aren't."),
              ("Do you understand?","Yes, I do. / No, I don't.")], cols=1, wide=True),
   dict(kind="write", title="4. Математик саволни инглизча ёзинг", hint="",
        rows=[("Икки қўшув уч нечи бўлади?","What is two plus three?"),
              ("Квадратнинг нечта томони бор?","How many sides does a square have?"),
              ("Қайси сон каттароқ?","Which number is bigger?"),
              ("Тушундингизми?","Do you understand?")], cols=1, wide=True),
   dict(kind="free", title="5. Ўқувчиларингизга берадиган 5 та савол ёзинг",
        hint="Эртанги дарсда шу саволларни беринг.",
        rows=[("1.","—"),("2.","—"),("3.","—"),("4.","—"),("5.","—")], cols=1, wide=True),
 ],
}

WEEK_PLAN = [
    ("1-ҳафта", "Мавзу 4. Ранглар ва шакллар. Ҳар куни синфдаги 5 та нарсанинг "
                "рангини инглизча айтинг.", "20 дақиқа"),
    ("2-ҳафта", "Мавзу 5. a/an, кўплик қоидалари. Ҳар куни 10 та сўзнинг "
                "кўплигини ёзинг.", "20 дақиқа"),
    ("3-ҳафта", "Мавзу 6. am/is/are. Ҳар куни доскадаги шакл ҳақида "
                "3 та гап тузинг.", "25 дақиқа"),
    ("4-ҳафта", "Мавзу 7. Буйруқ гаплар. Дарсдаги ҳар бир кўрсатмани "
                "инглизча беринг.", "дарс вақти"),
    ("5-ҳафта", "Мавзу 8. Саволлар. Ҳар дарсда камида 5 та саволни "
                "инглизча беринг.", "дарс вақти"),
]

CHEAT_10 = [
    ("What is this?",              "`у`от из `з`ис"),
    ("This is a circle.",          "`з`ис из э *сё*кл"),
    ("These are squares.",         "`з`и:з а: ск`у`эаз"),
    ("What colour is it?",         "`у`от *ка*ла из ит"),
    ("How many sides are there?",  "ҳау *мэ*ни сайдз а: `з`эа"),
    ("Draw a triangle.",           "дро: э *трай*`э`нгл"),
    ("Colour it blue.",            "*ка*ла ит блу:"),
    ("Is this correct?",           "из `з`ис ка*рэкт*"),
    ("Yes, it is. / No, it isn't.","йес, ит из  ·  ноу, ит *и*знт"),
    ("Do you understand?",         "ду ю: анда*ст`э`нд*"),
]
