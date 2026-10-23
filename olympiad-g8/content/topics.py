# -*- coding: utf-8 -*-
"""The Grade 8 topic breakdown, and the resource cards that hang off it.

Nineteen topics in five branches, ordered so that each one only needs what
came before it. Titles, branch names and the one-line tips carry both
languages; the names of books, papers and sites are proper names and stay as
they are.

Writing a lesson for a topic does not touch this file: the hub page prefers
the lesson's own title and subtitle wherever a lesson exists.
"""

import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, os.pardir, "assets", "data", "topics.js")


def L(ru, en):
    return {"ru": ru, "en": en}


BRANCH = {
    "nt":   ("#1E6FB8", "#E8F1FA", L("Числа", "Numbers")),
    "alg":  ("#8E4B9C", "#F3E9F6", L("Алгебра", "Algebra")),
    "geo":  ("#2E7D5B", "#E7F3EC", L("Геометрия", "Geometry")),
    "comb": ("#C0622A", "#FBEDE4", L("Комбинаторика и логика",
                                     "Counting and logic")),
    "mix":  ("#4A4A6A", "#ECECF4", L("Пробные туры", "Mock papers")),
}


# ---------------------------------------------------------------- cards

def book(title, ru, en, url, price="paid", star=False):
    return {"kind": "book", "label": L("📚 Книга", "📚 Book"),
            "title": title, "desc": L(ru, en), "url": url,
            "price": price, "star": star}


def site(title, ru, en, url, star=False):
    return {"kind": "site", "label": L("🔗 Сайт", "🔗 Site"),
            "title": title, "desc": L(ru, en), "url": url,
            "price": "free", "star": star}


def paper(title, ru, en, url, star=False):
    return {"kind": "pdf", "label": L("📄 Задачи", "📄 Past papers"),
            "title": title, "desc": L(ru, en), "url": url,
            "price": "free", "star": star}


#  Three resource cards recur on nearly every topic, because the three
#  competitions this course aims at each publish their whole archive.
AMC = paper(
    "AMC 8 — past papers and solutions (AoPS Wiki)",
    "Все варианты AMC 8 с 1985 года, с разобранными решениями по каждой "
    "задаче. Ищите по теме через указатель задач.",
    "Every AMC 8 paper since 1985, with worked solutions to each problem. "
    "Search by topic through the problem index.",
    "https://artofproblemsolving.com/wiki/index.php/AMC_8_Problems_and_Solutions",
    star=True)

KANG = paper(
    "Math Kangaroo — Cadet (grades 7-8) papers",
    "Задачи «Кенгуру» уровня Cadet: три группы по 3, 4 и 5 баллов. Сильны "
    "визуальные и логические задачи, которых мало в AMC.",
    "Kangaroo papers at Cadet level: three groups worth 3, 4 and 5 points. "
    "Strong on the visual and logical problems AMC has few of.",
    "https://mathkangaroo.org/mks/practice-materials/")

AOPS_ALC = book(
    "Art of Problem Solving: Prealgebra & Introduction to Algebra",
    "Два тома, закрывающие всю арифметику и алгебру этого курса. В конце "
    "каждой главы — задачи уровня AMC 8 с полными решениями.",
    "Two volumes covering all the arithmetic and algebra of this course. Each "
    "chapter ends with AMC 8-level problems and full solutions.",
    "https://artofproblemsolving.com/store")


TOPICS = [
    # ------------------------------------------------- numbers
    dict(n=1, cat="nt",
         title=L("Дроби, десятичные, проценты и отношения",
                 "Fractions, decimals, percents and ratios"),
         tip=L("Начните отсюда. Это самая частая тема AMC 8: процент или "
               "отношение встречается почти в каждом варианте, и обычно не "
               "один раз.",
               "Start here. This is the most frequent AMC 8 theme: a percent "
               "or a ratio turns up in nearly every paper, usually more than "
               "once."),
         cards=[AMC, KANG, AOPS_ALC]),

    dict(n=2, cat="nt",
         title=L("Делимость, делители и кратные",
                 "Divisibility, factors and multiples"),
         tip=L("Фундамент всей теории чисел: признаки делимости, разложение "
               "на простые, НОД и НОК, количество делителей.",
               "The foundation of all number theory: divisibility rules, "
               "prime factorisation, GCD and LCM, counting divisors."),
         cards=[AMC, KANG,
                book("Art of Problem Solving: Introduction to Number Theory",
                     "Главы 1–5 — делимость, простые числа, НОД и НОК, ровно "
                     "в объёме этой темы и следующей.",
                     "Chapters 1-5 cover divisibility, primes, GCD and LCM, "
                     "exactly the span of this topic and the next.",
                     "https://artofproblemsolving.com/store/book/intro-number-theory",
                     star=True)]),

    dict(n=3, cat="nt",
         title=L("Остатки, последние цифры и чётность",
                 "Remainders, last digits and parity"),
         tip=L("Арифметика остатков без слова «сравнение»: циклы последних "
               "цифр, чётность как инвариант, задачи про «какой день недели».",
               "Modular arithmetic without the word \"congruence\": cycles of "
               "last digits, parity as an invariant, \"what day of the week\" "
               "problems."),
         cards=[AMC, KANG]),

    dict(n=4, cat="nt",
         title=L("Цифры, разряды и системы счисления",
                 "Digits, place value and number bases"),
         tip=L("Задачи, где двузначное число нужно записать как 10a + b: "
               "палиндромы, перестановки цифр, двоичная запись.",
               "Problems where a two-digit number must be written as "
               "10a + b: palindromes, digit rearrangements, binary."),
         cards=[AMC, KANG]),

    # ------------------------------------------------- algebra
    dict(n=5, cat="alg",
         title=L("Линейные уравнения и перевод условия в алгебру",
                 "Linear equations and turning words into algebra"),
         tip=L("Главный навык всей алгебры: назвать неизвестное буквой и "
               "записать условие уравнением. Движение, работа, смеси, "
               "возрасты.",
               "The central skill of all algebra: name the unknown and write "
               "the story as an equation. Motion, work, mixtures, ages."),
         cards=[AMC, KANG, AOPS_ALC]),

    dict(n=6, cat="alg",
         title=L("Средние, скорости и взвешенное среднее",
                 "Averages, rates and weighted averages"),
         tip=L("Среднее арифметическое как сумма, делённая на количество — и "
               "почему средняя скорость не есть среднее двух скоростей.",
               "The mean as a total divided by a count — and why average "
               "speed is not the average of two speeds."),
         cards=[AMC, KANG]),

    dict(n=7, cat="alg",
         title=L("Степени, корни и тождества",
                 "Exponents, roots and identities"),
         tip=L("Правила действий со степенями, разность квадратов, квадрат "
               "суммы — инструменты, которые превращают выражение в "
               "произведение.",
               "The laws of exponents, the difference of squares, the square "
               "of a sum — the tools that turn an expression into a product."),
         cards=[AMC, AOPS_ALC]),

    dict(n=8, cat="alg",
         title=L("Последовательности, закономерности и суммы",
                 "Sequences, patterns and clever sums"),
         tip=L("Арифметическая прогрессия, сумма 1 + 2 + … + n, "
               "телескопические суммы и задачи «какой сотый член».",
               "Arithmetic progressions, the sum 1 + 2 + … + n, "
               "telescoping sums and \"what is the hundredth term\" "
               "problems."),
         cards=[AMC, KANG]),

    # ------------------------------------------------- geometry
    dict(n=9, cat="geo",
         title=L("Углы, треугольники и многоугольники",
                 "Angles, triangles and polygons"),
         tip=L("Погоня за углом от начала до конца. Отсюда начинается вся "
               "геометрия курса — и примерно четверть задач AMC 8.",
               "The angle chase from beginning to end. All the geometry of "
               "this course starts here — and about a quarter of AMC 8."),
         cards=[AMC, KANG,
                book("Art of Problem Solving: Introduction to Geometry",
                     "Главы 1–7 закрывают углы, треугольники, "
                     "многоугольники и подобие.",
                     "Chapters 1-7 cover angles, triangles, polygons and "
                     "similarity.",
                     "https://artofproblemsolving.com/store/book/intro-geometry",
                     star=True)]),

    dict(n=10, cat="geo",
         title=L("Площадь, периметр и закрашенные области",
                 "Area, perimeter and shaded regions"),
         tip=L("Жанр «какая часть закрашена»: формулы площадей, разрезание и "
               "достраивание, отношения площадей, формула Пика.",
               "The \"what fraction is shaded\" genre: area formulas, cutting "
               "and completing, ratios of areas, Pick's formula."),
         cards=[AMC, KANG]),

    dict(n=11, cat="geo",
         title=L("Теорема Пифагора и прямоугольные треугольники",
                 "Pythagoras and right triangles"),
         tip=L("Пифагоровы тройки, которые нужно узнавать с первого взгляда, "
               "и треугольники 30–60–90 и 45–45–90.",
               "The Pythagorean triples worth recognising instantly, and the "
               "30-60-90 and 45-45-90 triangles."),
         cards=[AMC, KANG]),

    dict(n=12, cat="geo",
         title=L("Окружности, дуги и число пи",
                 "Circles, arcs and pi"),
         tip=L("Длина окружности и площадь круга, сектор и дуга, вписанный "
               "угол, касательная — и фигуры, составленные из дуг.",
               "Circumference and area, sectors and arcs, the inscribed "
               "angle, tangents — and figures built out of arcs."),
         cards=[AMC, KANG]),

    dict(n=13, cat="geo",
         title=L("Тела, развёртки, площадь поверхности и объём",
                 "Solids, nets, surface area and volume"),
         tip=L("Куб, параллелепипед, призма, пирамида, цилиндр: развёртки, "
               "сечения и задачи про покраску и склейку.",
               "Cube, box, prism, pyramid, cylinder: nets, cross-sections and "
               "the painting and gluing problems."),
         cards=[AMC, KANG]),

    dict(n=14, cat="geo",
         title=L("Координаты, симметрия и преобразования",
                 "Coordinates, symmetry and transformations"),
         tip=L("Расстояние и середина, площадь по координатам, отражения, "
               "повороты и симметрия фигур.",
               "Distance and midpoint, area from coordinates, reflections, "
               "rotations and the symmetries of a figure."),
         cards=[AMC, KANG]),

    # ------------------------------------------------- counting and logic
    dict(n=15, cat="comb",
         title=L("Как считать: правила суммы и произведения",
                 "How to count: the sum and product rules"),
         tip=L("Два правила, разбор случаев и принцип включения-исключения. "
               "Самая «олимпиадная» тема, которую почти не учат в школе.",
               "Two rules, casework and inclusion-exclusion. The most "
               "contest-flavoured topic, and the one school barely covers."),
         cards=[AMC, KANG,
                book("Art of Problem Solving: Introduction to Counting "
                     "& Probability",
                     "Главы 1–6 — ровно эта тема и следующие две, с "
                     "задачами уровня AMC 8 и AMC 10.",
                     "Chapters 1-6 are exactly this topic and the next two, "
                     "with AMC 8 and AMC 10 level problems.",
                     "https://artofproblemsolving.com/store/book/intro-counting",
                     star=True)]),

    dict(n=16, cat="comb",
         title=L("Сочетания, треугольник Паскаля и пути",
                 "Combinations, Pascal's triangle and lattice paths"),
         tip=L("Когда порядок не важен: число сочетаний «n по k», подсчёт "
               "путей по решётке и рукопожатия.",
               "When order does not matter: the binomial coefficient "
               "«n choose k», counting paths on a grid, and handshakes."),
         cards=[AMC, KANG]),

    dict(n=17, cat="comb",
         title=L("Вероятность и ожидаемое количество",
                 "Probability and expected counts"),
         tip=L("Вероятность как отношение числа исходов, независимые "
               "события, дополнение — и геометрическая вероятность.",
               "Probability as a ratio of counts, independent events, "
               "complements — and geometric probability."),
         cards=[AMC, KANG]),

    dict(n=18, cat="comb",
         title=L("Логика, принцип Дирихле и инварианты",
                 "Logic, pigeonhole and invariants"),
         tip=L("Задачи про лгунов и рыцарей, принцип Дирихле, чётность как "
               "инвариант, раскраски — и визуальные задачи «Кенгуру».",
               "Liars-and-knights puzzles, the pigeonhole principle, parity "
               "as an invariant, colourings — and Kangaroo's visual "
               "problems."),
         cards=[AMC, KANG]),

    # ------------------------------------------------- mock papers
    dict(n=19, cat="mix",
         title=L("Пробные варианты AMC 8 и «Кенгуру»",
                 "Mock AMC 8 and Kangaroo papers"),
         tip=L("Как устроен тур, как распределить 40 минут на 25 задач, "
               "когда угадывать и когда идти дальше — и четыре пробных "
               "варианта.",
               "How a round works, how to spend 40 minutes on 25 problems, "
               "when to guess and when to move on — plus four mock papers."),
         cards=[AMC, KANG,
                site("AoPS For the Win! — timed practice rounds",
                     "Бесплатный тренажёр: вариант на время, с рейтингом и "
                     "разбором ошибок.",
                     "A free trainer: a timed paper with a rating and a "
                     "review of your mistakes.",
                     "https://artofproblemsolving.com/ftw")]),
]


def build():
    out = []
    for t in TOPICS:
        color, tint, name = BRANCH[t["cat"]]
        out.append({
            "n": t["n"],
            "title": t["title"],
            "cat": name,
            "catKey": t["cat"],
            "color": color,
            "tint": tint,
            "tip": t["tip"],
            "groups": [{"id": "theory", "cards": t["cards"]}],
        })
    with open(OUT, "w", encoding="utf-8") as f:
        f.write("/* Every Grade 8 olympiad topic, with its resources."
                " Generated from content/topics.py.\n"
                "   Titles, branch names and tips carry both languages;"
                " resource titles are proper\n"
                "   names and stay as they are. */\n")
        f.write("var TOPICS = %s;\n"
                % json.dumps(out, ensure_ascii=False, indent=1))
    by_branch = {}
    for t in TOPICS:
        by_branch[t["cat"]] = by_branch.get(t["cat"], 0) + 1
    print("topics.js  %d topics  %s"
          % (len(out), "  ".join("%s:%d" % kv for kv in by_branch.items())))
    return out


if __name__ == "__main__":
    build()
