# -*- coding: utf-8 -*-
"""Grade 8 topic 9 — Angles, triangles and polygons."""

from common import (L, LL, p, dfn, thm, lemma, idea, proof, note, warn, ol,
                    table, fig, ex, sec, prob, write)

# ---------------------------------------------------------------- figures

FIG_PARALLEL = """
<svg viewBox="0 0 460 230" role="img">
  <g stroke="currentColor" stroke-width="2" fill="none">
    <line x1="30" y1="70" x2="430" y2="70"/>
    <line x1="30" y1="170" x2="430" y2="170"/>
    <line x1="120" y1="20" x2="330" y2="215"/>
  </g>
  <g fill="none" stroke="var(--gold, #C8A24A)" stroke-width="2">
    <path d="M186 70 a28 28 0 0 1 -24 15"/>
    <path d="M268 170 a28 28 0 0 0 24 -15"/>
    <path d="M131 70 a28 28 0 0 0 23 16"/>
  </g>
  <g font-size="14" fill="currentColor">
    <text x="196" y="62">1</text>
    <text x="137" y="98">2</text>
    <text x="286" y="198">3</text>
    <text x="38" y="62">m</text>
    <text x="38" y="192">n</text>
    <text x="340" y="212">t</text>
  </g>
  <g font-size="12" fill="currentColor" opacity="0.75">
    <text x="300" y="62">m ∥ n</text>
  </g>
</svg>
"""

FIG_TRISUM = """
<svg viewBox="0 0 420 224" role="img">
  <g stroke="currentColor" stroke-width="2" fill="none">
    <polygon points="180,50 60,180 360,180"/>
  </g>
  <g stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4" fill="none">
    <line x1="55" y1="50" x2="320" y2="50"/>
  </g>
  <g fill="none" stroke="var(--gold, #C8A24A)" stroke-width="2">
    <path d="M152 50 a28 28 0 0 0 16 24"/>
    <path d="M196 61 a28 28 0 0 0 12 -11"/>
    <path d="M170 76 a26 26 0 0 0 22 -14"/>
    <path d="M88 180 a30 30 0 0 0 20 -22"/>
    <path d="M330 180 a30 30 0 0 1 -22 -20"/>
  </g>
  <g font-size="14" fill="currentColor">
    <text x="156" y="70">β</text>
    <text x="177" y="86">α</text>
    <text x="199" y="70">γ</text>
    <text x="96" y="168">β</text>
    <text x="312" y="168">γ</text>
    <text x="50" y="196">B</text>
    <text x="362" y="196">C</text>
    <text x="176" y="42">A</text>
  </g>
  <text x="210" y="212" font-size="13" text-anchor="middle"
        fill="var(--gold, #C8A24A)">α + β + γ = 180°</text>
</svg>
"""

FIG_EXTERIOR = """
<svg viewBox="0 0 440 210" role="img">
  <g stroke="currentColor" stroke-width="2" fill="none">
    <polygon points="150,55 50,170 280,170"/>
  </g>
  <g stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4" fill="none">
    <line x1="280" y1="170" x2="400" y2="170"/>
  </g>
  <g fill="none" stroke="var(--gold, #C8A24A)" stroke-width="2">
    <path d="M152 83 a30 30 0 0 1 20 -5"/>
    <path d="M80 170 a30 30 0 0 0 22 -25"/>
    <path d="M258 158 a26 26 0 0 0 -11 12"/>
    <path d="M306 170 a26 26 0 0 0 -8 -17"/>
  </g>
  <g font-size="14" fill="currentColor">
    <text x="156" y="76">α</text>
    <text x="88" y="158">β</text>
    <text x="246" y="152">γ</text>
    <text x="306" y="152">δ</text>
    <text x="42" y="190">B</text>
    <text x="276" y="190">C</text>
    <text x="146" y="46">A</text>
    <text x="396" y="190">D</text>
  </g>
  <text x="220" y="204" font-size="13" text-anchor="middle"
        fill="var(--gold, #C8A24A)">δ = α + β</text>
</svg>
"""

FIG_PENTAGON = """
<svg viewBox="0 0 300 290" role="img">
  <polygon points="150,40 45,116 85,239 215,239 255,116"
           fill="var(--c, #2E7D5B)" fill-opacity="0.08"/>
  <g stroke="currentColor" stroke-width="2" fill="none">
    <polygon points="150,40 45,116 85,239 215,239 255,116"/>
  </g>
  <g stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" fill="none">
    <line x1="150" y1="40" x2="85" y2="239"/>
    <line x1="150" y1="40" x2="215" y2="239"/>
  </g>
  <g font-size="14" fill="currentColor">
    <text x="146" y="30">A</text>
    <text x="26" y="112">B</text>
    <text x="70" y="256">C</text>
    <text x="218" y="256">D</text>
    <text x="262" y="112">E</text>
  </g>
  <text x="150" y="282" font-size="13" text-anchor="middle"
        fill="var(--gold, #C8A24A)">5 − 2 = 3 triangles → 3 · 180° = 540°</text>
</svg>
"""

FIG_MIDLINE = """
<svg viewBox="0 0 420 240" role="img">
  <g stroke="currentColor" stroke-width="2" fill="none">
    <polygon points="200,40 50,200 350,200"/>
  </g>
  <g stroke="var(--gold, #C8A24A)" stroke-width="2.4" fill="none">
    <line x1="125" y1="120" x2="275" y2="120"/>
  </g>
  <g fill="currentColor">
    <circle cx="125" cy="120" r="4"/>
    <circle cx="275" cy="120" r="4"/>
  </g>
  <g font-size="14" fill="currentColor">
    <text x="196" y="32">A</text>
    <text x="40" y="220">B</text>
    <text x="354" y="220">C</text>
    <text x="104" y="116">M</text>
    <text x="284" y="116">N</text>
  </g>
  <text x="210" y="232" font-size="13" text-anchor="middle"
        fill="var(--gold, #C8A24A)">MN ∥ BC and MN = ½ BC</text>
</svg>
"""

FIG_INEQ = """
<svg viewBox="0 0 420 180" role="img">
  <g stroke="currentColor" stroke-width="2" fill="none">
    <polygon points="190,40 60,135 350,135"/>
  </g>
  <g font-size="14" fill="currentColor">
    <text x="50" y="155">B</text>
    <text x="354" y="155">C</text>
    <text x="186" y="32">A</text>
    <text x="110" y="82">c</text>
    <text x="278" y="82">b</text>
    <text x="202" y="153">a</text>
  </g>
  <text x="210" y="166" font-size="13" text-anchor="middle"
        fill="var(--gold, #C8A24A)">|b − c| &lt; a &lt; b + c</text>
</svg>
"""

# ---------------------------------------------------------------- sections

SECTIONS = [

    sec("Углы при параллельных прямых",
        "Angles made by parallel lines", [
        p("Почти любая задача на углы из AMC 8 или «Кенгуру» решается "
          "*погоней за углом*: вы находите один угол, он даёт следующий, и "
          "так до ответа. Чтобы погоня шла, нужны всего два факта о "
          "параллельных прямых — и привычка подписывать каждый найденный "
          "угол прямо на чертеже.",
          "Almost every angle problem on AMC 8 or Kangaroo falls to an *angle "
          "chase*: you find one angle, it gives the next, and so on to the "
          "answer. To keep the chase going you need only two facts about "
          "parallel lines — and the habit of writing every angle you find "
          "onto the diagram."),

        dfn("Смежные и вертикальные углы",
            "Adjacent and vertical angles",
            "Два угла **смежные**, если у них общая сторона, а две другие "
            "образуют прямую; их сумма равна $180^\\circ$. Два угла "
            "**вертикальные**, если стороны одного продолжают стороны "
            "другого; вертикальные углы равны.",
            "Two angles are **adjacent (a linear pair)** if they share a side "
            "and their other sides form a straight line; they add up to "
            "$180^\\circ$. Two angles are **vertical** if the sides of one "
            "are the extensions of the sides of the other; vertical angles "
            "are equal."),

        proof("Равенство вертикальных углов следует из смежных: если углы "
              "$1$ и $2$ смежные, то $\\angle1+\\angle2=180^\\circ$, и если "
              "углы $2$ и $3$ тоже смежные, то "
              "$\\angle2+\\angle3=180^\\circ$. Вычитая, получаем "
              "$\\angle1=\\angle3$, а это и есть пара вертикальных углов. "
              "$\\blacksquare$",
              "The equality of vertical angles follows from linear pairs: if "
              "angles $1$ and $2$ form a linear pair then "
              "$\\angle1+\\angle2=180^\\circ$, and if $2$ and $3$ also form "
              "one then $\\angle2+\\angle3=180^\\circ$. Subtracting gives "
              "$\\angle1=\\angle3$, and that is a pair of vertical angles. "
              "$\\blacksquare$"),

        thm("Признак и свойство параллельности",
            "Parallel lines: the test and the property",
            "Пусть прямая $t$ пересекает прямые $m$ и $n$. Тогда $m\\parallel n$ "
            "тогда и только тогда, когда\n\n"
            "— **соответственные** углы равны, или\n\n"
            "— **накрест лежащие** углы равны, или\n\n"
            "— **односторонние** углы дают в сумме $180^\\circ$.\n\n"
            "Любое одно из трёх условий влечёт два других.",
            "Let a line $t$ cross two lines $m$ and $n$. Then "
            "$m\\parallel n$ if and only if\n\n"
            "— the **corresponding** angles are equal, or\n\n"
            "— the **alternate** angles are equal, or\n\n"
            "— the **co-interior** angles add up to $180^\\circ$.\n\n"
            "Any one of the three conditions implies the other two."),

        fig(FIG_PARALLEL,
            "Угол $1$ и угол $3$ — накрест лежащие и равны; угол $1$ и угол "
            "$2$ — вертикальные.",
            "Angle $1$ and angle $3$ are alternate and equal; angle $1$ and "
            "angle $2$ are vertical."),

        idea("Проведите параллельную прямую",
             "Draw the missing parallel",
             "Если на чертеже есть параллельные прямые, но нужный угол ни к "
             "одной из них не прислонён, проведите через вершину этого угла "
             "прямую, параллельную данным. Угол разобьётся на два, и каждый "
             "из них окажется накрест лежащим с уже известным. Это самый "
             "частый дополнительный ход в задачах «Кенгуру» со "
             "«ступеньками».",
             "If the figure has parallel lines but the angle you need touches "
             "none of them, draw a line through that angle's vertex parallel "
             "to the given ones. The angle splits in two, and each part turns "
             "out to be alternate to an angle you already know. This is the "
             "most common extra construction in Kangaroo's \"staircase\" "
             "problems."),

        warn("Равенство углов доказывает параллельность только тогда, когда "
             "углы действительно соответственные или накрест лежащие при "
             "*одной и той же* секущей. Две равные пары углов при разных "
             "секущих ничего не доказывают — это типичная ловушка в задачах "
             "«найдите ошибку в решении».",
             "Equal angles prove lines parallel only when the angles really "
             "are corresponding or alternate with respect to the *same* "
             "transversal. Two equal pairs of angles at different "
             "transversals prove nothing — a standard trap in \"find the "
             "error in this solution\" problems."),
    ]),

    sec("Сумма углов треугольника и внешний угол",
        "The angle sum of a triangle, and the exterior angle", [
        thm("Сумма углов треугольника",
            "The angle sum of a triangle",
            "Сумма внутренних углов любого треугольника равна "
            "$180^\\circ$.",
            "The interior angles of any triangle add up to $180^\\circ$."),

        proof("Проведём через вершину $A$ прямую, параллельную стороне $BC$. "
              "При секущей $AB$ угол $\\beta$ треугольника и один из углов у "
              "вершины $A$ — накрест лежащие, значит равны. То же при "
              "секущей $AC$ для угла $\\gamma$.\n\n"
              "У вершины $A$ три угла — $\\beta$, $\\alpha$ и $\\gamma$ — "
              "вместе составляют развёрнутый угол, то есть "
              "$\\beta+\\alpha+\\gamma=180^\\circ$. $\\blacksquare$",
              "Draw the line through vertex $A$ parallel to side $BC$. With "
              "transversal $AB$, the triangle's angle $\\beta$ and one of the "
              "angles at $A$ are alternate, hence equal. The same holds with "
              "transversal $AC$ for the angle $\\gamma$.\n\n"
              "At vertex $A$ the three angles $\\beta$, $\\alpha$ and "
              "$\\gamma$ together make a straight angle, so "
              "$\\beta+\\alpha+\\gamma=180^\\circ$. $\\blacksquare$"),

        fig(FIG_TRISUM,
            "Прямая через $A$, параллельная $BC$: три угла при вершине $A$ "
            "составляют развёрнутый.",
            "The line through $A$ parallel to $BC$: the three angles at $A$ "
            "make a straight angle."),

        thm("Внешний угол", "The exterior angle",
            "Внешний угол треугольника равен сумме двух внутренних углов, не "
            "смежных с ним: $\\delta=\\alpha+\\beta$.",
            "An exterior angle of a triangle equals the sum of the two "
            "interior angles not adjacent to it: $\\delta=\\alpha+\\beta$."),

        proof("Угол $\\delta$ смежный с внутренним углом $\\gamma$, поэтому "
              "$\\delta=180^\\circ-\\gamma$. По теореме о сумме углов "
              "$\\alpha+\\beta=180^\\circ-\\gamma$. Правые части совпадают, "
              "значит $\\delta=\\alpha+\\beta$. $\\blacksquare$",
              "The angle $\\delta$ forms a linear pair with the interior "
              "angle $\\gamma$, so $\\delta=180^\\circ-\\gamma$. By the angle "
              "sum, $\\alpha+\\beta=180^\\circ-\\gamma$. The right-hand sides "
              "agree, so $\\delta=\\alpha+\\beta$. $\\blacksquare$"),

        fig(FIG_EXTERIOR,
            "Внешний угол $\\delta$ при вершине $C$ равен $\\alpha+\\beta$.",
            "The exterior angle $\\delta$ at vertex $C$ equals "
            "$\\alpha+\\beta$."),

        note("Следствие, которым пользуются постоянно: внешний угол **больше** "
             "каждого из двух несмежных внутренних. Это даёт оценки без "
             "вычислений — например, сразу видно, что у треугольника не может "
             "быть двух тупых углов.",
             "A corollary in constant use: an exterior angle is **greater** "
             "than each of the two non-adjacent interior angles. That gives "
             "bounds without computation — for instance it shows at once that "
             "a triangle cannot have two obtuse angles."),

        ex("Углы треугольника равны $x$, $2x-10^\\circ$ и $3x+10^\\circ$. "
           "Найдите их.",
           "The angles of a triangle are $x$, $2x-10^\\circ$ and "
           "$3x+10^\\circ$. Find them.",
           ["Сумма равна $180^\\circ$: "
            "$x+(2x-10^\\circ)+(3x+10^\\circ)=180^\\circ$.",
            "Слагаемые $-10^\\circ$ и $+10^\\circ$ сокращаются: "
            "$6x=180^\\circ$.",
            "Значит $x=30^\\circ$, и углы равны $30^\\circ$, $50^\\circ$, "
            "$100^\\circ$.",
            "Проверка: $30+50+100=180$. $\\checkmark$"],
           ["The sum is $180^\\circ$: "
            "$x+(2x-10^\\circ)+(3x+10^\\circ)=180^\\circ$.",
            "The $-10^\\circ$ and $+10^\\circ$ cancel: $6x=180^\\circ$.",
            "So $x=30^\\circ$ and the angles are $30^\\circ$, $50^\\circ$, "
            "$100^\\circ$.",
            "Check: $30+50+100=180$. $\\checkmark$"],
           "$30^\\circ,\\;50^\\circ,\\;100^\\circ$",
           "$30^\\circ,\\;50^\\circ,\\;100^\\circ$"),
    ]),

    sec("Равнобедренный треугольник",
        "The isosceles triangle", [
        thm("Углы при основании", "The base angles",
            "В треугольнике углы при основании равны тогда и только тогда, "
            "когда равны противолежащие им стороны: "
            "$$AB=AC\\iff \\angle B=\\angle C.$$",
            "In a triangle the base angles are equal if and only if the sides "
            "opposite them are equal: "
            "$$AB=AC\\iff \\angle B=\\angle C.$$"),

        proof("Пусть $AB=AC$ и $M$ — середина $BC$. Треугольники $ABM$ и "
              "$ACM$ равны по трём сторонам ($AB=AC$, $BM=CM$, $AM$ общая), "
              "поэтому $\\angle B=\\angle C$.\n\n"
              "Обратно, пусть $\\angle B=\\angle C$, и проведём биссектрису "
              "$AL$ угла $A$. Треугольники $ABL$ и $ACL$ имеют равные углы "
              "$\\angle B=\\angle C$, равные углы при $A$ (по построению) и "
              "общую сторону $AL$ — значит равны по второму признаку, откуда "
              "$AB=AC$. $\\blacksquare$",
              "Let $AB=AC$ and let $M$ be the midpoint of $BC$. Triangles "
              "$ABM$ and $ACM$ are congruent by SSS ($AB=AC$, $BM=CM$, $AM$ "
              "shared), so $\\angle B=\\angle C$.\n\n"
              "Conversely, let $\\angle B=\\angle C$ and draw the bisector "
              "$AL$ of angle $A$. Triangles $ABL$ and $ACL$ have "
              "$\\angle B=\\angle C$, equal angles at $A$ (by construction) "
              "and the shared side $AL$ — hence they are congruent by AAS, "
              "giving $AB=AC$. $\\blacksquare$"),

        note("В равнобедренном треугольнике биссектриса угла при вершине, "
             "медиана и высота к основанию — **одна и та же прямая**, и она "
             "же ось симметрии. Увидев равнобедренный треугольник, сразу "
             "проводите эту прямую: она делит задачу на две равные "
             "половины.",
             "In an isosceles triangle the bisector of the apex angle, the "
             "median and the altitude to the base are **one and the same "
             "line**, and it is the axis of symmetry. The moment you see an "
             "isosceles triangle, draw that line: it cuts the problem into "
             "two equal halves."),

        idea("Ищите равные стороны", "Hunt for equal sides",
             "Каждая пара равных сторон даёт пару равных углов, и наоборот. "
             "В погоне за углом равнобедренные треугольники — это "
             "бесплатные уравнения: отмечайте равные стороны одинаковыми "
             "штрихами, и нужные равенства углов станут видны сами.",
             "Every pair of equal sides gives a pair of equal angles, and the "
             "other way round. In an angle chase, isosceles triangles are "
             "free equations: mark equal sides with matching ticks and the "
             "angle equalities you need show up by themselves."),

        ex("В треугольнике $ABC$ имеем $AB=AC$ и $\\angle A=36^\\circ$. "
           "Биссектриса угла $B$ пересекает $AC$ в точке $D$. Найдите "
           "$\\angle BDC$.",
           "In triangle $ABC$, $AB=AC$ and $\\angle A=36^\\circ$. The "
           "bisector of angle $B$ meets $AC$ at $D$. Find $\\angle BDC$.",
           ["Углы при основании: "
            "$\\angle B=\\angle C=\\dfrac{180^\\circ-36^\\circ}2=72^\\circ$.",
            "Биссектриса делит угол $B$ пополам: "
            "$\\angle DBC=36^\\circ$.",
            "В треугольнике $BDC$ известны два угла: $\\angle DBC=36^\\circ$ "
            "и $\\angle BCD=\\angle C=72^\\circ$.",
            "Значит $\\angle BDC=180^\\circ-36^\\circ-72^\\circ=72^\\circ$."],
           ["The base angles are "
            "$\\angle B=\\angle C=\\dfrac{180^\\circ-36^\\circ}2=72^\\circ$.",
            "The bisector halves angle $B$: $\\angle DBC=36^\\circ$.",
            "In triangle $BDC$ two angles are known: $\\angle DBC=36^\\circ$ "
            "and $\\angle BCD=\\angle C=72^\\circ$.",
            "Hence $\\angle BDC=180^\\circ-36^\\circ-72^\\circ=72^\\circ$."],
           "$72^\\circ$", "$72^\\circ$"),
    ]),

    sec("Признаки равенства треугольников",
        "The congruence criteria", [
        p("Равенство треугольников — способ *переносить* информацию по "
          "чертежу: доказав равенство двух треугольников, вы получаете сразу "
          "три равенства сторон и три равенства углов. Признаков всего "
          "четыре, и к ним есть один важный «не-признак».",
          "Congruence is how you *move* information around a figure: once two "
          "triangles are congruent you get three equalities of sides and "
          "three of angles at once. There are four criteria — and one "
          "important non-criterion."),

        table(["Признак", "Что дано", "Когда применять"],
              ["Criterion", "What is given", "When to use it"],
              [["SSS", "три стороны", "есть длины или равные отрезки"],
               ["SAS", "две стороны и угол *между* ними",
                "самый частый признак на олимпиадах"],
               ["ASA", "два угла и сторона между ними",
                "после погони за углом"],
               ["AAS", "два угла и любая сторона",
                "третий угол находится вычитанием"],
               ["(SSA)", "две стороны и угол *не* между ними",
                "**не признак** — два разных треугольника"]],
              [["SSS", "three sides", "lengths or equal segments are given"],
               ["SAS", "two sides and the angle *between* them",
                "the most frequently used one in contests"],
               ["ASA", "two angles and the side between them",
                "after an angle chase"],
               ["AAS", "two angles and any side",
                "the third angle comes by subtraction"],
               ["(SSA)", "two sides and the angle *not* between them",
                "**not a criterion** — two different triangles fit"]]),

        warn("Запомните, почему SSA не работает: если известны $AB$, $BC$ и "
             "угол $A$, то вершина $C$ может оказаться в двух разных "
             "положениях на луче — окружность радиуса $BC$ с центром в $B$ "
             "пересекает этот луч дважды. Поэтому в задачах, где дан угол "
             "*не между* известными сторонами, ответов часто два, и оба нужно "
             "привести.",
             "Remember why SSA fails: given $AB$, $BC$ and angle $A$, the "
             "vertex $C$ can sit in two different places on the ray — the "
             "circle of radius $BC$ about $B$ meets that ray twice. So in "
             "problems where the given angle is *not between* the given "
             "sides, there are often two answers and both must be given."),

        note("Два угла достаточно для **подобия**, но не для равенства: "
             "треугольники с одинаковыми углами могут различаться размером. "
             "Признак «AAA» даёт подобие, а равенство — только вместе с "
             "одной равной стороной.",
             "Two angles are enough for **similarity** but not for "
             "congruence: triangles with the same angles may differ in size. "
             "\"AAA\" gives similarity; congruence needs one equal side as "
             "well."),

        thm("Соотношение между сторонами и углами",
            "Bigger side, bigger angle",
            "В любом треугольнике против большей стороны лежит больший угол, "
            "и наоборот: $$AB>AC\\iff \\angle C>\\angle B.$$",
            "In any triangle the greater side is opposite the greater angle, "
            "and conversely: $$AB>AC\\iff \\angle C>\\angle B.$$"),

        proof("Пусть $AB>AC$. Отложим на луче $AB$ точку $D$ с $AD=AC$; так "
              "как $AD<AB$, точка $D$ лежит *внутри* отрезка $AB$. "
              "Треугольник $ACD$ равнобедренный, поэтому "
              "$\\angle ACD=\\angle ADC$.\n\n"
              "Угол $\\angle ADC$ — внешний для треугольника $BDC$, значит он "
              "больше угла $\\angle B$. А угол $\\angle ACB$ больше своей "
              "части $\\angle ACD$, так как $D$ лежит внутри угла $ACB$. "
              "Собирая цепочку:\n\n"
              "$$\\angle ACB>\\angle ACD=\\angle ADC>\\angle B.$$\n\n"
              "Обратное утверждение следует отсюда же: если бы было "
              "$AB\\le AC$, то по доказанному получилось бы "
              "$\\angle C\\le\\angle B$. $\\blacksquare$",
              "Let $AB>AC$. On the ray $AB$ mark the point $D$ with $AD=AC$; "
              "since $AD<AB$, the point $D$ lies *inside* the segment $AB$. "
              "Triangle $ACD$ is isosceles, so "
              "$\\angle ACD=\\angle ADC$.\n\n"
              "The angle $\\angle ADC$ is exterior to triangle $BDC$, so it "
              "exceeds $\\angle B$. And $\\angle ACB$ exceeds its own part "
              "$\\angle ACD$, because $D$ lies inside the angle $ACB$. "
              "Chaining these:\n\n"
              "$$\\angle ACB>\\angle ACD=\\angle ADC>\\angle B.$$\n\n"
              "The converse follows from the same statement: if $AB\\le AC$ "
              "then what we proved would give $\\angle C\\le\\angle B$. "
              "$\\blacksquare$"),
    ]),

    sec("Неравенство треугольника", "The triangle inequality", [
        thm("Неравенство треугольника", "The triangle inequality",
            "Для сторон $a,b,c$ треугольника выполнено $a<b+c$, и, что то же "
            "самое, $$|b-c|<a<b+c.$$ Обратно, если три положительных числа "
            "удовлетворяют этим неравенствам, то треугольник с такими "
            "сторонами существует.",
            "For the sides $a,b,c$ of a triangle we have $a<b+c$, equivalently "
            "$$|b-c|<a<b+c.$$ Conversely, if three positive numbers satisfy "
            "these inequalities then a triangle with those sides exists."),

        proof("Неравенство $a<b+c$ — это утверждение, что прямой путь из $B$ "
              "в $C$ короче пути через $A$.\n\n"
              "Второе неравенство выводится из первого: из $b<a+c$ получаем "
              "$b-c<a$, а из $c<a+b$ получаем $c-b<a$. Значит $a$ больше "
              "каждого из чисел $b-c$ и $c-b$, то есть больше $|b-c|$. "
              "$\\blacksquare$",
              "The inequality $a<b+c$ says that the direct route from $B$ to "
              "$C$ is shorter than the route through $A$.\n\n"
              "The second inequality follows from the first: $b<a+c$ gives "
              "$b-c<a$, and $c<a+b$ gives $c-b<a$. So $a$ exceeds both "
              "$b-c$ and $c-b$, hence exceeds $|b-c|$. $\\blacksquare$"),

        fig(FIG_INEQ,
            "Каждая сторона меньше суммы и больше разности двух других.",
            "Each side is less than the sum and more than the difference of "
            "the other two."),

        idea("Проверяйте только наибольшую сторону",
             "Check the longest side only",
             "Чтобы убедиться, что из трёх отрезков складывается "
             "треугольник, достаточно одной проверки: сравните наибольшую "
             "сторону с суммой двух других. Остальные два неравенства "
             "выполняются автоматически.",
             "To decide whether three segments form a triangle, one check "
             "suffices: compare the longest side with the sum of the other "
             "two. The other two inequalities then hold automatically."),

        ex("Равнобедренный треугольник имеет периметр $50$, и одна из его "
           "сторон равна $12$. Найдите остальные стороны.",
           "An isosceles triangle has perimeter $50$ and one of its sides is "
           "$12$. Find the other sides.",
           ["**Случай 1: $12$ — боковая сторона.** Тогда стороны равны "
            "$12,12$ и $50-24=26$. Но $12+12=24<26$ — неравенство "
            "треугольника нарушено, такого треугольника нет.",
            "**Случай 2: $12$ — основание.** Тогда боковые равны "
            "$\\dfrac{50-12}2=19$ каждая.",
            "Проверка: $19+19=38>12$, $19+12=31>19$. $\\checkmark$",
            "Ответ единственный именно из-за неравенства треугольника — без "
            "него было бы два."],
           ["**Case 1: $12$ is a leg.** Then the sides are $12,12$ and "
            "$50-24=26$. But $12+12=24<26$ — the triangle inequality fails, "
            "so no such triangle exists.",
            "**Case 2: $12$ is the base.** Then each leg is "
            "$\\dfrac{50-12}2=19$.",
            "Check: $19+19=38>12$ and $19+12=31>19$. $\\checkmark$",
            "The answer is unique precisely because of the triangle "
            "inequality — without it there would be two."],
           "$19$ и $19$", "$19$ and $19$"),
    ]),

    sec("Углы многоугольника", "The angles of a polygon", [
        thm("Сумма внутренних углов", "The interior angle sum",
            "Сумма внутренних углов выпуклого $n$-угольника равна "
            "$$(n-2)\\cdot 180^\\circ.$$",
            "The interior angles of a convex $n$-gon add up to "
            "$$(n-2)\\cdot 180^\\circ.$$"),

        proof("Выберем вершину и проведём из неё все диагонали. Они разбивают "
              "$n$-угольник на треугольники: диагоналей из одной вершины "
              "$n-3$, и они дают $n-2$ треугольника. Сумма всех их углов "
              "равна $(n-2)\\cdot180^\\circ$, и при этом каждый угол "
              "треугольника лежит внутри какого-то угла многоугольника, а "
              "вместе углы треугольников при каждой вершине составляют в "
              "точности угол многоугольника. $\\blacksquare$",
              "Pick a vertex and draw every diagonal from it. They cut the "
              "$n$-gon into triangles: there are $n-3$ diagonals from one "
              "vertex and they give $n-2$ triangles. The sum of all their "
              "angles is $(n-2)\\cdot180^\\circ$, and every triangle angle "
              "lies inside some angle of the polygon, while at each vertex "
              "the triangle angles together make exactly the polygon's angle. "
              "$\\blacksquare$"),

        fig(FIG_PENTAGON,
            "Диагонали из одной вершины делят пятиугольник на три "
            "треугольника.",
            "The diagonals from one vertex cut the pentagon into three "
            "triangles."),

        thm("Сумма внешних углов", "The exterior angle sum",
            "Сумма внешних углов выпуклого многоугольника, взятых по одному "
            "при каждой вершине, равна $360^\\circ$ — **при любом** числе "
            "сторон.",
            "The exterior angles of a convex polygon, one at each vertex, add "
            "up to $360^\\circ$ — **whatever** the number of sides."),

        proof("При каждой вершине внутренний и внешний углы смежны, поэтому "
              "их сумма равна $180^\\circ$. Сложив по всем $n$ вершинам, "
              "получаем $180^\\circ n$. Отнимем сумму внутренних углов:\n\n"
              "$$180^\\circ n-(n-2)\\cdot180^\\circ=360^\\circ.$$\n\n"
              "Число $n$ сократилось — потому ответ и не зависит от числа "
              "сторон. $\\blacksquare$",
              "At each vertex the interior and exterior angles form a linear "
              "pair, so they sum to $180^\\circ$. Adding over all $n$ "
              "vertices gives $180^\\circ n$. Subtract the interior angle "
              "sum:\n\n"
              "$$180^\\circ n-(n-2)\\cdot180^\\circ=360^\\circ.$$\n\n"
              "The $n$ cancelled — which is exactly why the answer does not "
              "depend on the number of sides. $\\blacksquare$"),

        idea("Для правильных многоугольников считайте внешний угол",
             "For a regular polygon, use the exterior angle",
             "У правильного $n$-угольника внешний угол равен "
             "$\\dfrac{360^\\circ}n$, а внутренний — "
             "$180^\\circ-\\dfrac{360^\\circ}n$. Через внешний угол считать "
             "почти всегда быстрее: уравнение получается без скобок. Задача "
             "«внутренний угол равен $150^\\circ$» превращается в «внешний "
             "равен $30^\\circ$», откуда $n=12$ сразу.",
             "In a regular $n$-gon the exterior angle is "
             "$\\dfrac{360^\\circ}n$ and the interior angle is "
             "$180^\\circ-\\dfrac{360^\\circ}n$. Working through the exterior "
             "angle is almost always faster: the equation comes out without "
             "brackets. \"The interior angle is $150^\\circ$\" becomes \"the "
             "exterior angle is $30^\\circ$\", giving $n=12$ at once."),

        thm("Число диагоналей", "The number of diagonals",
            "У $n$-угольника ровно $\\dfrac{n(n-3)}2$ диагоналей.",
            "An $n$-gon has exactly $\\dfrac{n(n-3)}2$ diagonals."),

        proof("Из каждой вершины выходит $n-3$ диагонали: нельзя соединять "
              "вершину с собой и с двумя соседями. Получается $n(n-3)$ "
              "концов, но каждая диагональ посчитана дважды — по одному разу "
              "с каждого конца. Делим на $2$. $\\blacksquare$",
              "From each vertex there are $n-3$ diagonals: a vertex cannot "
              "join itself or either neighbour. That gives $n(n-3)$ ends, but "
              "each diagonal has been counted twice — once from each end. "
              "Divide by $2$. $\\blacksquare$"),

        ex("У правильного многоугольника внутренний угол больше внешнего на "
           "$132^\\circ$. Сколько у него сторон?",
           "In a regular polygon the interior angle exceeds the exterior "
           "angle by $132^\\circ$. How many sides does it have?",
           ["Обозначим внутренний угол $i$, внешний $e$. Они смежные: "
            "$i+e=180^\\circ$.",
            "По условию $i-e=132^\\circ$.",
            "Складывая два уравнения: $2i=312^\\circ$, значит "
            "$i=156^\\circ$ и $e=24^\\circ$.",
            "Из $e=\\dfrac{360^\\circ}n$ получаем "
            "$n=\\dfrac{360}{24}=15$."],
           ["Call the interior angle $i$ and the exterior angle $e$. They "
            "form a linear pair: $i+e=180^\\circ$.",
            "We are told $i-e=132^\\circ$.",
            "Adding the two equations: $2i=312^\\circ$, so $i=156^\\circ$ and "
            "$e=24^\\circ$.",
            "From $e=\\dfrac{360^\\circ}n$ we get $n=\\dfrac{360}{24}=15$."],
           "$15$ сторон", "$15$ sides"),
    ]),

    sec("Подобие и средняя линия", "Similarity and the midline", [
        dfn("Подобие", "Similarity",
            "Треугольники **подобны**, если их углы соответственно равны; "
            "тогда соответствующие стороны пропорциональны с одним и тем же "
            "коэффициентом $k$. Площади при этом относятся как $k^2$.",
            "Two triangles are **similar** if their angles are equal in "
            "pairs; then corresponding sides are proportional with one and "
            "the same factor $k$. Their areas are then in the ratio $k^2$."),

        thm("Средняя линия", "The midline theorem",
            "Отрезок, соединяющий середины двух сторон треугольника, "
            "параллелен третьей стороне и равен её половине.",
            "The segment joining the midpoints of two sides of a triangle is "
            "parallel to the third side and equal to half of it."),

        proof("Пусть $M$ и $N$ — середины сторон $AB$ и $AC$. Треугольники "
              "$AMN$ и $ABC$ имеют общий угол $A$ и пропорциональные "
              "прилежащие стороны: "
              "$\\dfrac{AM}{AB}=\\dfrac{AN}{AC}=\\dfrac12$. Значит они "
              "подобны с коэффициентом $\\tfrac12$.\n\n"
              "Из подобия $MN=\\tfrac12BC$ и $\\angle AMN=\\angle ABC$; "
              "последнее равенство — равенство соответственных углов при "
              "секущей $AB$, откуда $MN\\parallel BC$. $\\blacksquare$",
              "Let $M$ and $N$ be the midpoints of $AB$ and $AC$. Triangles "
              "$AMN$ and $ABC$ share the angle $A$ and have proportional "
              "adjacent sides: "
              "$\\dfrac{AM}{AB}=\\dfrac{AN}{AC}=\\dfrac12$. So they are "
              "similar with factor $\\tfrac12$.\n\n"
              "Similarity gives $MN=\\tfrac12BC$ and "
              "$\\angle AMN=\\angle ABC$; the latter is an equality of "
              "corresponding angles at the transversal $AB$, so "
              "$MN\\parallel BC$. $\\blacksquare$"),

        fig(FIG_MIDLINE,
            "Средняя линия $MN$ параллельна $BC$ и вдвое короче.",
            "The midline $MN$ is parallel to $BC$ and half as long."),

        note("Три средние линии образуют треугольник, подобный исходному с "
             "коэффициентом $\\tfrac12$: его периметр вдвое меньше, а площадь "
             "— в четыре раза.",
             "The three midlines form a triangle similar to the original with "
             "factor $\\tfrac12$: its perimeter is half as large and its area "
             "a quarter."),

        thm("Угол между биссектрисами",
            "The angle between two bisectors",
            "Если биссектрисы углов $B$ и $C$ треугольника $ABC$ пересекаются "
            "в точке $I$, то "
            "$$\\angle BIC=90^\\circ+\\frac{\\angle A}2.$$",
            "If the bisectors of angles $B$ and $C$ of triangle $ABC$ meet at "
            "$I$, then $$\\angle BIC=90^\\circ+\\frac{\\angle A}2.$$"),

        proof("В треугольнике $BIC$ углы при $B$ и $C$ — половины углов "
              "$\\angle B$ и $\\angle C$. Значит\n\n"
              "$$\\angle BIC=180^\\circ-\\frac{\\angle B+\\angle C}2.$$\n\n"
              "Но $\\angle B+\\angle C=180^\\circ-\\angle A$, поэтому\n\n"
              "$$\\angle BIC=180^\\circ-\\frac{180^\\circ-\\angle A}2"
              "=90^\\circ+\\frac{\\angle A}2.$$\n\n"
              "$\\blacksquare$",
              "In triangle $BIC$ the angles at $B$ and $C$ are halves of "
              "$\\angle B$ and $\\angle C$. So\n\n"
              "$$\\angle BIC=180^\\circ-\\frac{\\angle B+\\angle C}2.$$\n\n"
              "But $\\angle B+\\angle C=180^\\circ-\\angle A$, hence\n\n"
              "$$\\angle BIC=180^\\circ-\\frac{180^\\circ-\\angle A}2"
              "=90^\\circ+\\frac{\\angle A}2.$$\n\n"
              "$\\blacksquare$"),

        warn("Проверьте формулу на знакомом случае: при "
             "$\\angle A=60^\\circ$ получаем $\\angle BIC=120^\\circ$, а не "
             "$60^\\circ$. Угол между биссектрисами всегда **тупой** — это "
             "хороший способ поймать ошибку в знаке.",
             "Test the formula on a familiar case: $\\angle A=60^\\circ$ "
             "gives $\\angle BIC=120^\\circ$, not $60^\\circ$. The angle "
             "between two bisectors is always **obtuse** — a good way to "
             "catch a sign slip."),
    ]),

    sec("Приёмы, которые решают задачи", "The moves that solve problems", [
        ol(["**Подписывайте каждый найденный угол на чертеже.** Погоня за "
            "углом разваливается не от сложности, а от того, что найденное "
            "держат в голове.",
            "**Обозначьте неизвестный угол буквой $x$** и выразите через него "
            "остальные: получится одно уравнение.",
            "**Сумма углов треугольника — $180^\\circ$, четырёхугольника — "
            "$360^\\circ$,** $n$-угольника — $(n-2)\\cdot180^\\circ$.",
            "**Внешний угол = сумма двух несмежных внутренних.** Это "
            "сокращает две строки вычислений до одной.",
            "**Для правильного многоугольника считайте внешний угол** "
            "$\\dfrac{360^\\circ}n$, а не внутренний.",
            "**Равные стороны $\\Rightarrow$ равные углы.** Отмечайте "
            "равенства штрихами, чтобы увидеть равнобедренные треугольники.",
            "**В равнобедренном треугольнике проводите ось симметрии** — "
            "биссектрису, медиану и высоту сразу.",
            "**Проведите прямую, параллельную данным,** через вершину "
            "нужного угла, если угол ни к чему не прислонён.",
            "**Проверяйте неравенство треугольника** в любой задаче, где "
            "перебираются длины: оно отсекает лишние случаи.",
            "**Соединяйте середины сторон:** средняя линия даёт и "
            "параллельность, и отношение $1:2$ одним движением.",
            "**Оценивайте ответ по чертежу.** Если вычисление дало "
            "$30^\\circ$, а на рисунке угол явно тупой, ошибка в вычислении, "
            "а не в рисунке."],
           ["**Write every angle you find onto the diagram.** An angle chase "
            "fails not from difficulty but from keeping results in your "
            "head.",
            "**Name the unknown angle $x$** and express the others through "
            "it: you end up with one equation.",
            "**The angle sum is $180^\\circ$ for a triangle, $360^\\circ$ for "
            "a quadrilateral,** $(n-2)\\cdot180^\\circ$ for an $n$-gon.",
            "**Exterior angle = sum of the two non-adjacent interior "
            "angles.** This turns two lines of work into one.",
            "**For a regular polygon use the exterior angle** "
            "$\\dfrac{360^\\circ}n$, not the interior one.",
            "**Equal sides $\\Rightarrow$ equal angles.** Mark the equalities "
            "with ticks so the isosceles triangles become visible.",
            "**In an isosceles triangle draw the axis of symmetry** — the "
            "bisector, median and altitude all at once.",
            "**Draw a line parallel to the given ones** through the vertex of "
            "the angle you want, when that angle touches nothing.",
            "**Check the triangle inequality** in any problem that searches "
            "over lengths: it kills the spurious cases.",
            "**Join the midpoints of sides:** a midline gives parallelism and "
            "the ratio $1:2$ in one move.",
            "**Sanity-check the answer against the picture.** If the "
            "computation says $30^\\circ$ but the diagram shows a plainly "
            "obtuse angle, the computation is wrong, not the diagram."]),
    ]),
]

# ---------------------------------------------------------------- problems

PROBLEMS = [

    # ---- level 1 ---------------------------------------------------------
    prob("warm", 1,
         "Два угла треугольника равны $40^\\circ$ и $75^\\circ$. Найдите "
         "третий.",
         "Two angles of a triangle are $40^\\circ$ and $75^\\circ$. Find the "
         "third.",
         "Сумма равна $180^\\circ$.",
         "The sum is $180^\\circ$.",
         "$180^\\circ-40^\\circ-75^\\circ=65^\\circ$.",
         "$180^\\circ-40^\\circ-75^\\circ=65^\\circ$."),

    prob("warm", 1,
         "Внешний угол треугольника равен $110^\\circ$, а один из несмежных "
         "с ним внутренних углов равен $45^\\circ$. Найдите второй.",
         "An exterior angle of a triangle is $110^\\circ$ and one of the "
         "non-adjacent interior angles is $45^\\circ$. Find the other.",
         "Внешний угол равен сумме двух несмежных внутренних.",
         "An exterior angle is the sum of the two non-adjacent interior "
         "angles.",
         "$110^\\circ-45^\\circ=65^\\circ$.",
         "$110^\\circ-45^\\circ=65^\\circ$."),

    prob("warm", 1,
         "В равнобедренном треугольнике угол при вершине равен $40^\\circ$. "
         "Найдите углы при основании.",
         "The apex angle of an isosceles triangle is $40^\\circ$. Find the "
         "base angles.",
         "Они равны между собой.",
         "They are equal to each other.",
         "$\\dfrac{180^\\circ-40^\\circ}2=70^\\circ$ каждый.",
         "$\\dfrac{180^\\circ-40^\\circ}2=70^\\circ$ each."),

    prob("warm", 1,
         "Чему равна сумма внутренних углов шестиугольника?",
         "What is the sum of the interior angles of a hexagon?",
         "$(n-2)\\cdot180^\\circ$.",
         "$(n-2)\\cdot180^\\circ$.",
         "$(6-2)\\cdot180^\\circ=720^\\circ$.",
         "$(6-2)\\cdot180^\\circ=720^\\circ$."),

    prob("warm", 1,
         "Внешний угол правильного многоугольника равен $24^\\circ$. Сколько "
         "у него сторон?",
         "The exterior angle of a regular polygon is $24^\\circ$. How many "
         "sides does it have?",
         "Сумма внешних углов равна $360^\\circ$.",
         "The exterior angles add up to $360^\\circ$.",
         "$n=\\dfrac{360^\\circ}{24^\\circ}=15$.",
         "$n=\\dfrac{360^\\circ}{24^\\circ}=15$."),

    prob("warm", 1,
         "Найдите внутренний угол правильного пятиугольника.",
         "Find the interior angle of a regular pentagon.",
         "Через внешний угол быстрее.",
         "The exterior angle is the quicker route.",
         "Внешний угол равен $\\dfrac{360^\\circ}5=72^\\circ$, значит "
         "внутренний равен $180^\\circ-72^\\circ=108^\\circ$.",
         "The exterior angle is $\\dfrac{360^\\circ}5=72^\\circ$, so the "
         "interior angle is $180^\\circ-72^\\circ=108^\\circ$."),

    prob("warm", 1,
         "Найдите угол, дополняющий $37^\\circ$ до прямого.",
         "Find the complement of $37^\\circ$.",
         "Дополняющие углы дают $90^\\circ$.",
         "Complementary angles add up to $90^\\circ$.",
         "$90^\\circ-37^\\circ=53^\\circ$.",
         "$90^\\circ-37^\\circ=53^\\circ$."),

    prob("warm", 1,
         "Один из двух вертикальных углов равен $115^\\circ$. Чему равен "
         "второй и чему равен смежный с ним?",
         "One of two vertical angles is $115^\\circ$. What is the other, and "
         "what is the angle adjacent to it?",
         "Вертикальные равны, смежные дают $180^\\circ$.",
         "Vertical angles are equal; a linear pair adds to $180^\\circ$.",
         "Второй вертикальный тоже $115^\\circ$, а смежный равен "
         "$180^\\circ-115^\\circ=65^\\circ$.",
         "The other vertical angle is also $115^\\circ$, and the adjacent "
         "angle is $180^\\circ-115^\\circ=65^\\circ$."),

    prob("warm", 1,
         "Существует ли треугольник со сторонами $3$, $4$ и $8$?",
         "Does a triangle with sides $3$, $4$ and $8$ exist?",
         "Проверьте наибольшую сторону.",
         "Check the longest side.",
         "$3+4=7<8$ — неравенство треугольника нарушено, такого треугольника "
         "нет.",
         "$3+4=7<8$ — the triangle inequality fails, so no such triangle "
         "exists."),

    prob("warm", 1,
         "Углы треугольника относятся как $1:2:3$. Найдите их.",
         "The angles of a triangle are in the ratio $1:2:3$. Find them.",
         "Введите единицу $k$.",
         "Introduce the unit $k$.",
         "$k+2k+3k=6k=180^\\circ$, значит $k=30^\\circ$ и углы равны "
         "$30^\\circ,60^\\circ,90^\\circ$ — треугольник прямоугольный.",
         "$k+2k+3k=6k=180^\\circ$, so $k=30^\\circ$ and the angles are "
         "$30^\\circ,60^\\circ,90^\\circ$ — a right triangle."),

    prob("warm", 1,
         "Прямые $m$ и $n$ параллельны, и один из односторонних углов при "
         "секущей равен $70^\\circ$. Найдите второй.",
         "Lines $m$ and $n$ are parallel and one of the co-interior angles at "
         "a transversal is $70^\\circ$. Find the other.",
         "Односторонние углы дают $180^\\circ$.",
         "Co-interior angles add up to $180^\\circ$.",
         "$180^\\circ-70^\\circ=110^\\circ$.",
         "$180^\\circ-70^\\circ=110^\\circ$."),

    prob("warm", 1,
         "Сумма внутренних углов некоторого выпуклого многоугольника равна "
         "$1440^\\circ$. Сколько у него сторон?",
         "The interior angles of a convex polygon add up to $1440^\\circ$. "
         "How many sides does it have?",
         "Решите $(n-2)\\cdot180^\\circ=1440^\\circ$.",
         "Solve $(n-2)\\cdot180^\\circ=1440^\\circ$.",
         "$n-2=\\dfrac{1440}{180}=8$, значит $n=10$.",
         "$n-2=\\dfrac{1440}{180}=8$, so $n=10$."),

    # ---- level 2 ---------------------------------------------------------
    prob("amc", 2,
         "Внутренний угол правильного многоугольника равен $150^\\circ$. "
         "Сколько у него сторон?",
         "The interior angle of a regular polygon is $150^\\circ$. How many "
         "sides does it have?",
         "Переходите к внешнему углу.",
         "Switch to the exterior angle.",
         "Внешний угол равен $180^\\circ-150^\\circ=30^\\circ$, значит "
         "$n=\\dfrac{360}{30}=12$.",
         "The exterior angle is $180^\\circ-150^\\circ=30^\\circ$, so "
         "$n=\\dfrac{360}{30}=12$."),

    prob("amc", 2,
         "Сколько диагоналей у десятиугольника?",
         "How many diagonals does a decagon have?",
         "$\\dfrac{n(n-3)}2$.",
         "$\\dfrac{n(n-3)}2$.",
         "$\\dfrac{10\\cdot 7}2=35$.",
         "$\\dfrac{10\\cdot 7}2=35$."),

    prob("amc", 2,
         "Углы выпуклого четырёхугольника относятся как $2:3:4:6$. Найдите "
         "их.",
         "The angles of a convex quadrilateral are in the ratio $2:3:4:6$. "
         "Find them.",
         "Сумма углов четырёхугольника равна $360^\\circ$.",
         "The angles of a quadrilateral add up to $360^\\circ$.",
         "Частей $2+3+4+6=15$, значит $15k=360^\\circ$ и $k=24^\\circ$. Углы "
         "равны $48^\\circ,72^\\circ,96^\\circ,144^\\circ$.",
         "There are $2+3+4+6=15$ parts, so $15k=360^\\circ$ and "
         "$k=24^\\circ$. The angles are "
         "$48^\\circ,72^\\circ,96^\\circ,144^\\circ$."),

    prob("amc", 2,
         "В прямоугольном треугольнике один острый угол вдвое больше "
         "другого. Найдите оба.",
         "In a right triangle one acute angle is twice the other. Find both.",
         "Острые углы прямоугольного треугольника дают $90^\\circ$.",
         "The acute angles of a right triangle add up to $90^\\circ$.",
         "$x+2x=90^\\circ$, значит $x=30^\\circ$: углы равны $30^\\circ$ и "
         "$60^\\circ$.",
         "$x+2x=90^\\circ$, so $x=30^\\circ$: the angles are $30^\\circ$ and "
         "$60^\\circ$."),

    prob("amc", 2,
         "Биссектрисы двух острых углов прямоугольного треугольника "
         "пересекаются. Под каким углом?",
         "The bisectors of the two acute angles of a right triangle meet. At "
         "what angle?",
         "Воспользуйтесь формулой "
         "$\\angle BIC=90^\\circ+\\tfrac{\\angle A}2$.",
         "Use $\\angle BIC=90^\\circ+\\tfrac{\\angle A}2$.",
         "Здесь $\\angle A=90^\\circ$, значит "
         "$\\angle BIC=90^\\circ+45^\\circ=135^\\circ$.\n\n"
         "Прямо: половины острых углов дают "
         "$\\tfrac{90^\\circ}2=45^\\circ$, и третий угол треугольника "
         "равен $180^\\circ-45^\\circ=135^\\circ$.",
         "Here $\\angle A=90^\\circ$, so "
         "$\\angle BIC=90^\\circ+45^\\circ=135^\\circ$.\n\n"
         "Directly: the halves of the acute angles add to "
         "$\\tfrac{90^\\circ}2=45^\\circ$, and the third angle of that "
         "triangle is $180^\\circ-45^\\circ=135^\\circ$."),

    prob("amc", 2,
         "Сколько существует треугольников с целыми сторонами и периметром "
         "$12$? (Треугольники, отличающиеся только порядком сторон, "
         "считаются одинаковыми.)",
         "How many triangles with integer sides have perimeter $12$? "
         "(Triangles differing only in the order of the sides count as the "
         "same.)",
         "Перебирайте $a\\le b\\le c$ и проверяйте $a+b>c$.",
         "Run over $a\\le b\\le c$ and check $a+b>c$.",
         "Разбиения $12$ на три части с $a\\le b\\le c$: "
         "$(1,1,10),(1,2,9),(1,3,8),(1,4,7),(1,5,6),(2,2,8),(2,3,7),"
         "(2,4,6),(2,5,5),(3,3,6),(3,4,5),(4,4,4)$.\n\n"
         "Условие $a+b>c$ выполняется только для $(2,5,5)$, $(3,4,5)$ и "
         "$(4,4,4)$. Ответ: **три** треугольника.",
         "The partitions of $12$ into three parts with $a\\le b\\le c$ are "
         "$(1,1,10),(1,2,9),(1,3,8),(1,4,7),(1,5,6),(2,2,8),(2,3,7),"
         "(2,4,6),(2,5,5),(3,3,6),(3,4,5),(4,4,4)$.\n\n"
         "The condition $a+b>c$ holds only for $(2,5,5)$, $(3,4,5)$ and "
         "$(4,4,4)$. Answer: **three** triangles."),

    prob("amc", 2,
         "Стороны треугольника равны $10$, $12$ и $14$. Найдите периметр "
         "треугольника, образованного его средними линиями.",
         "A triangle has sides $10$, $12$ and $14$. Find the perimeter of the "
         "triangle formed by its midlines.",
         "Каждая средняя линия вдвое короче своей стороны.",
         "Each midline is half its side.",
         "Средние линии равны $5,6,7$, значит периметр равен $18$ — ровно "
         "половина периметра $36$ исходного треугольника.",
         "The midlines are $5,6,7$, so the perimeter is $18$ — exactly half "
         "the original perimeter $36$."),

    prob("amc", 2,
         "В треугольнике $ABC$ угол $A$ равен $50^\\circ$. Биссектрисы углов "
         "$B$ и $C$ пересекаются в точке $I$. Найдите $\\angle BIC$.",
         "In triangle $ABC$ the angle $A$ is $50^\\circ$. The bisectors of "
         "angles $B$ and $C$ meet at $I$. Find $\\angle BIC$.",
         "$90^\\circ+\\tfrac{\\angle A}2$.",
         "$90^\\circ+\\tfrac{\\angle A}2$.",
         "$\\angle BIC=90^\\circ+\\dfrac{50^\\circ}2=115^\\circ$.",
         "$\\angle BIC=90^\\circ+\\dfrac{50^\\circ}2=115^\\circ$."),

    prob("amc", 2,
         "Чему равна сумма внешних углов выпуклого $100$-угольника, взятых по "
         "одному при каждой вершине?",
         "What is the sum of the exterior angles of a convex $100$-gon, one "
         "at each vertex?",
         "Ответ не зависит от числа сторон.",
         "The answer does not depend on the number of sides.",
         "$360^\\circ$ — как и у любого выпуклого многоугольника.",
         "$360^\\circ$ — as for every convex polygon."),

    prob("amc", 2,
         "В равнобедренном треугольнике периметр равен $50$, и одна из сторон "
         "равна $12$. Найдите остальные стороны.",
         "An isosceles triangle has perimeter $50$ and one side equal to "
         "$12$. Find the other sides.",
         "Разберите два случая и проверьте неравенство треугольника.",
         "Consider two cases and check the triangle inequality.",
         "Если $12$ — боковая сторона, то третья равна $26$, но "
         "$12+12=24<26$ — невозможно.\n\n"
         "Значит $12$ — основание, и боковые равны $\\dfrac{50-12}2=19$. "
         "Проверка: $19+19=38>12$. $\\checkmark$",
         "If $12$ is a leg then the third side is $26$, but $12+12=24<26$ — "
         "impossible.\n\n"
         "So $12$ is the base and each leg is $\\dfrac{50-12}2=19$. Check: "
         "$19+19=38>12$. $\\checkmark$"),

    prob("amc", 2,
         "В треугольнике $ABC$ угол $A$ прямой, а высота из $A$ попадает в "
         "точку $D$ на $BC$. Если $\\angle B=35^\\circ$, найдите "
         "$\\angle DAC$.",
         "In triangle $ABC$ the angle $A$ is right, and the altitude from $A$ "
         "meets $BC$ at $D$. If $\\angle B=35^\\circ$, find $\\angle DAC$.",
         "В треугольнике $ADC$ известны два угла.",
         "Two angles of triangle $ADC$ are known.",
         "Сначала $\\angle C=90^\\circ-35^\\circ=55^\\circ$. В треугольнике "
         "$ADC$ угол при $D$ прямой, значит "
         "$\\angle DAC=90^\\circ-55^\\circ=35^\\circ$.\n\n"
         "Заметьте: $\\angle DAC=\\angle B$. Высота из вершины прямого угла "
         "всегда «переносит» острые углы.",
         "First $\\angle C=90^\\circ-35^\\circ=55^\\circ$. In triangle $ADC$ "
         "the angle at $D$ is right, so "
         "$\\angle DAC=90^\\circ-55^\\circ=35^\\circ$.\n\n"
         "Note that $\\angle DAC=\\angle B$. The altitude from the right "
         "angle always \"transfers\" the acute angles."),

    prob("amc", 2,
         "У правильного многоугольника $54$ диагонали. Сколько у него сторон?",
         "A regular polygon has $54$ diagonals. How many sides does it have?",
         "$\\dfrac{n(n-3)}2=54$.",
         "$\\dfrac{n(n-3)}2=54$.",
         "$n(n-3)=108$. Подбором: $12\\cdot 9=108$, значит $n=12$. "
         "(Формально $n^2-3n-108=0$, корни $12$ и $-9$; подходит "
         "положительный.)",
         "$n(n-3)=108$. By inspection $12\\cdot 9=108$, so $n=12$. "
         "(Formally $n^2-3n-108=0$ with roots $12$ and $-9$; the positive one "
         "fits.)"),

    prob("amc", 2,
         "В треугольнике $ABC$ угол $B$ равен $70^\\circ$, угол $C$ равен "
         "$50^\\circ$. Найдите угол между высотой и биссектрисой, "
         "проведёнными из вершины $A$.",
         "In triangle $ABC$ the angle $B$ is $70^\\circ$ and the angle $C$ is "
         "$50^\\circ$. Find the angle between the altitude and the bisector "
         "drawn from $A$.",
         "Посчитайте по отдельности угол, который каждая из них образует с "
         "$AB$.",
         "Compute separately the angle each of them makes with $AB$.",
         "Угол $A$ равен $180^\\circ-70^\\circ-50^\\circ=60^\\circ$.\n\n"
         "Биссектриса образует с $AB$ угол $30^\\circ$.\n\n"
         "Высота $AH$ в треугольнике $ABH$ даёт "
         "$\\angle BAH=90^\\circ-\\angle B=20^\\circ$.\n\n"
         "Искомый угол равен $30^\\circ-20^\\circ=10^\\circ$. В общем виде "
         "он равен $\\dfrac{|\\angle B-\\angle C|}2$.",
         "The angle $A$ is $180^\\circ-70^\\circ-50^\\circ=60^\\circ$.\n\n"
         "The bisector makes an angle of $30^\\circ$ with $AB$.\n\n"
         "The altitude $AH$ in triangle $ABH$ gives "
         "$\\angle BAH=90^\\circ-\\angle B=20^\\circ$.\n\n"
         "The required angle is $30^\\circ-20^\\circ=10^\\circ$. In general it "
         "equals $\\dfrac{|\\angle B-\\angle C|}2$."),

    # ---- level 3 ---------------------------------------------------------
    prob("kang", 3,
         "В правильном пятиугольнике $ABCDE$ проведены диагонали $AC$ и $CE$. "
         "Найдите $\\angle ACE$.",
         "In a regular pentagon $ABCDE$ the diagonals $AC$ and $CE$ are "
         "drawn. Find $\\angle ACE$.",
         "Треугольник $ABC$ равнобедренный.",
         "Triangle $ABC$ is isosceles.",
         "Внутренний угол пятиугольника равен $108^\\circ$.\n\n"
         "В треугольнике $ABC$ имеем $AB=BC$ (стороны пятиугольника) и "
         "$\\angle ABC=108^\\circ$, значит "
         "$\\angle BCA=\\dfrac{180^\\circ-108^\\circ}2=36^\\circ$.\n\n"
         "Точно так же в треугольнике $CDE$ получаем "
         "$\\angle DCE=36^\\circ$.\n\n"
         "Эти два угла вместе с искомым составляют угол $\\angle BCD="
         "108^\\circ$, поэтому "
         "$\\angle ACE=108^\\circ-36^\\circ-36^\\circ=36^\\circ$.",
         "The interior angle of the pentagon is $108^\\circ$.\n\n"
         "In triangle $ABC$ we have $AB=BC$ (sides of the pentagon) and "
         "$\\angle ABC=108^\\circ$, so "
         "$\\angle BCA=\\dfrac{180^\\circ-108^\\circ}2=36^\\circ$.\n\n"
         "In the same way triangle $CDE$ gives $\\angle DCE=36^\\circ$.\n\n"
         "Those two angles together with the required one make up "
         "$\\angle BCD=108^\\circ$, so "
         "$\\angle ACE=108^\\circ-36^\\circ-36^\\circ=36^\\circ$."),

    prob("amch", 3,
         "Сколько существует треугольников с целыми сторонами и периметром "
         "$20$?",
         "How many triangles with integer sides have perimeter $20$?",
         "Перебирайте наибольшую сторону $c$: она удовлетворяет "
         "$7\\le c\\le 9$.",
         "Run over the longest side $c$: it satisfies $7\\le c\\le 9$.",
         "Пусть $a\\le b\\le c$ и $a+b+c=20$. Из $a+b>c$ следует "
         "$20-c>c$, то есть $c<10$; из $c\\ge b\\ge a$ следует "
         "$3c\\ge 20$, то есть $c\\ge 7$.\n\n"
         "$c=7$: $a+b=13$ при $a\\le b\\le 7$ — это $(6,7)$. Один вариант.\n\n"
         "$c=8$: $a+b=12$ при $a\\le b\\le 8$ — это $(4,8),(5,7),(6,6)$. Три.\n\n"
         "$c=9$: $a+b=11$ при $a\\le b\\le 9$ — это "
         "$(2,9),(3,8),(4,7),(5,6)$. Четыре.\n\n"
         "Итого $1+3+4=8$ треугольников.",
         "Let $a\\le b\\le c$ with $a+b+c=20$. From $a+b>c$ we get "
         "$20-c>c$, i.e. $c<10$; from $c\\ge b\\ge a$ we get $3c\\ge 20$, "
         "i.e. $c\\ge 7$.\n\n"
         "$c=7$: $a+b=13$ with $a\\le b\\le 7$ — only $(6,7)$. One.\n\n"
         "$c=8$: $a+b=12$ with $a\\le b\\le 8$ — $(4,8),(5,7),(6,6)$. "
         "Three.\n\n"
         "$c=9$: $a+b=11$ with $a\\le b\\le 9$ — "
         "$(2,9),(3,8),(4,7),(5,6)$. Four.\n\n"
         "In all $1+3+4=8$ triangles."),

    prob("kang", 3,
         "Какой угол образуют часовая и минутная стрелки в $3{:}40$?",
         "What angle do the hour and minute hands make at $3{:}40$?",
         "Часовая стрелка тоже движется: $0{,}5^\\circ$ в минуту.",
         "The hour hand moves too: $0.5^\\circ$ per minute.",
         "Минутная стрелка: $40\\cdot 6^\\circ=240^\\circ$ от «$12$».\n\n"
         "Часовая: $3\\cdot 30^\\circ+40\\cdot 0{,}5^\\circ"
         "=90^\\circ+20^\\circ=110^\\circ$.\n\n"
         "Разность равна $240^\\circ-110^\\circ=130^\\circ$, и это меньше "
         "$180^\\circ$, значит это и есть искомый угол.",
         "Minute hand: $40\\cdot 6^\\circ=240^\\circ$ from \"$12$\".\n\n"
         "Hour hand: $3\\cdot 30^\\circ+40\\cdot 0.5^\\circ"
         "=90^\\circ+20^\\circ=110^\\circ$.\n\n"
         "The difference is $240^\\circ-110^\\circ=130^\\circ$, which is less "
         "than $180^\\circ$, so that is the angle."),

    prob("kang5", 3,
         "Докажите, что сумма пяти углов при вершинах пятиконечной звезды "
         "равна $180^\\circ$.",
         "Prove that the five point angles of a five-pointed star add up to "
         "$180^\\circ$.",
         "Каждый угол звезды — внешний угол одного из внутренних "
         "треугольников; или сосчитайте через внутренний пятиугольник.",
         "Each point angle is related to the inner pentagon; or use exterior "
         "angles of the triangles that stick out.",
         "Звезда получается, если из каждой вершины внутреннего "
         "пятиугольника «вырастить» треугольник наружу. Обозначим угол "
         "звезды при $i$-й вершине через $x_i$, а внутренние углы малого "
         "пятиугольника — через $p_1,\\ldots,p_5$.\n\n"
         "В каждом из пяти выступающих треугольников два угла при основании "
         "смежны с углами малого пятиугольника, поэтому каждый равен "
         "$180^\\circ-p$ для соответствующего $p$. Сумма углов "
         "$i$-го треугольника даёт\n\n"
         "$$x_i=180^\\circ-(180^\\circ-p_j)-(180^\\circ-p_k)=p_j+p_k-"
         "180^\\circ,$$\n\n"
         "где $p_j,p_k$ — углы пятиугольника при концах соответствующей "
         "стороны. Сложим по всем пяти вершинам: каждый угол $p$ попадёт в "
         "сумму дважды (он прилежит двум сторонам), поэтому\n\n"
         "$$\\sum x_i=2\\sum p_j-5\\cdot 180^\\circ"
         "=2\\cdot 540^\\circ-900^\\circ=180^\\circ.$$\n\n"
         "$\\blacksquare$ Для правильной звезды это видно сразу: "
         "$5\\cdot 36^\\circ=180^\\circ$.",
         "A star is what you get by growing a triangle outward from each side "
         "of an inner pentagon. Write $x_i$ for the star's angle at the $i$th "
         "point and $p_1,\\ldots,p_5$ for the interior angles of the small "
         "pentagon.\n\n"
         "In each of the five protruding triangles the two base angles form "
         "linear pairs with angles of the small pentagon, so each equals "
         "$180^\\circ-p$ for the corresponding $p$. The angle sum of the "
         "$i$th triangle gives\n\n"
         "$$x_i=180^\\circ-(180^\\circ-p_j)-(180^\\circ-p_k)=p_j+p_k-"
         "180^\\circ,$$\n\n"
         "where $p_j,p_k$ are the pentagon's angles at the ends of that side. "
         "Add over all five points: each angle $p$ appears twice (it is "
         "adjacent to two sides), so\n\n"
         "$$\\sum x_i=2\\sum p_j-5\\cdot 180^\\circ"
         "=2\\cdot 540^\\circ-900^\\circ=180^\\circ.$$\n\n"
         "$\\blacksquare$ For a regular star it is immediate: "
         "$5\\cdot 36^\\circ=180^\\circ$."),

    prob("amch", 3,
         "В треугольнике $ABC$ угол $A$ равен $60^\\circ$. Биссектрисы углов "
         "$B$ и $C$ пересекаются в точке $I$. Найдите $\\angle BIC$ и "
         "объясните, почему ответ не зависит от углов $B$ и $C$ по "
         "отдельности.",
         "In triangle $ABC$ the angle $A$ is $60^\\circ$. The bisectors of "
         "angles $B$ and $C$ meet at $I$. Find $\\angle BIC$ and explain why "
         "the answer does not depend on $B$ and $C$ individually.",
         "В формулу входит только сумма $\\angle B+\\angle C$.",
         "Only the sum $\\angle B+\\angle C$ enters the formula.",
         "В треугольнике $BIC$ углы при $B$ и $C$ равны "
         "$\\tfrac{\\angle B}2$ и $\\tfrac{\\angle C}2$, поэтому\n\n"
         "$$\\angle BIC=180^\\circ-\\frac{\\angle B+\\angle C}2.$$\n\n"
         "В это выражение входит только *сумма* $\\angle B+\\angle C$, а она "
         "равна $180^\\circ-\\angle A=120^\\circ$ при любом распределении "
         "между $B$ и $C$. Значит\n\n"
         "$$\\angle BIC=180^\\circ-60^\\circ=120^\\circ"
         "=90^\\circ+\\frac{60^\\circ}2.$$",
         "In triangle $BIC$ the angles at $B$ and $C$ are "
         "$\\tfrac{\\angle B}2$ and $\\tfrac{\\angle C}2$, so\n\n"
         "$$\\angle BIC=180^\\circ-\\frac{\\angle B+\\angle C}2.$$\n\n"
         "Only the *sum* $\\angle B+\\angle C$ appears, and it equals "
         "$180^\\circ-\\angle A=120^\\circ$ however it is split between $B$ "
         "and $C$. Hence\n\n"
         "$$\\angle BIC=180^\\circ-60^\\circ=120^\\circ"
         "=90^\\circ+\\frac{60^\\circ}2.$$"),

    prob("amch", 3,
         "Докажите, что для любой точки $A$ и любого отрезка $BC$ выполнено "
         "$|AB-AC|<BC$.",
         "Prove that for any point $A$ and any segment $BC$ we have "
         "$|AB-AC|<BC$.",
         "Это неравенство треугольника, записанное дважды.",
         "This is the triangle inequality written twice.",
         "Если $A$ не лежит на прямой $BC$, то $ABC$ — треугольник, и по "
         "неравенству треугольника $AB<AC+BC$, откуда $AB-AC<BC$. Точно так "
         "же $AC<AB+BC$ даёт $AC-AB<BC$. Значит $BC$ больше обоих чисел "
         "$AB-AC$ и $AC-AB$, то есть больше их максимума "
         "$|AB-AC|$.\n\n"
         "Если $A$ лежит на прямой $BC$, то либо $A$ внутри отрезка (и тогда "
         "$|AB-AC|<AB+AC=BC$), либо вне — и тогда $|AB-AC|=BC$, то есть "
         "строгое неравенство обращается в равенство. Поэтому в условии и "
         "подразумевается невырожденный треугольник. $\\blacksquare$",
         "If $A$ is not on the line $BC$ then $ABC$ is a triangle, and the "
         "triangle inequality gives $AB<AC+BC$, hence $AB-AC<BC$. Likewise "
         "$AC<AB+BC$ gives $AC-AB<BC$. So $BC$ exceeds both $AB-AC$ and "
         "$AC-AB$, hence exceeds their maximum $|AB-AC|$.\n\n"
         "If $A$ lies on the line $BC$ then either $A$ is inside the segment "
         "(and then $|AB-AC|<AB+AC=BC$) or outside — and then $|AB-AC|=BC$, "
         "so the strict inequality becomes an equality. This is why the "
         "statement presumes a non-degenerate triangle. $\\blacksquare$"),

    prob("kang", 3,
         "Треугольник $ABC$ равнобедренный с $AB=AC$, и "
         "$\\angle A=20^\\circ$. На стороне $AC$ отмечена точка $D$ так, что "
         "$BD=BC$. Найдите $\\angle ABD$.",
         "Triangle $ABC$ is isosceles with $AB=AC$ and $\\angle A=20^\\circ$. "
         "A point $D$ on side $AC$ satisfies $BD=BC$. Find $\\angle ABD$.",
         "Сначала найдите углы треугольника $BDC$: он тоже равнобедренный.",
         "First find the angles of triangle $BDC$: it too is isosceles.",
         "Углы при основании: "
         "$\\angle ABC=\\angle ACB=\\dfrac{180^\\circ-20^\\circ}2"
         "=80^\\circ$.\n\n"
         "В треугольнике $BDC$ имеем $BD=BC$, значит углы при основании "
         "$DC$ равны: $\\angle BDC=\\angle BCD=\\angle ACB=80^\\circ$. "
         "Тогда $\\angle DBC=180^\\circ-80^\\circ-80^\\circ=20^\\circ$.\n\n"
         "Угол $\\angle ABC$ разбит точкой $D$ на $\\angle ABD$ и "
         "$\\angle DBC$, поэтому\n\n"
         "$$\\angle ABD=80^\\circ-20^\\circ=60^\\circ.$$",
         "The base angles are "
         "$\\angle ABC=\\angle ACB=\\dfrac{180^\\circ-20^\\circ}2"
         "=80^\\circ$.\n\n"
         "In triangle $BDC$ we have $BD=BC$, so the angles on the base $DC$ "
         "are equal: $\\angle BDC=\\angle BCD=\\angle ACB=80^\\circ$. Then "
         "$\\angle DBC=180^\\circ-80^\\circ-80^\\circ=20^\\circ$.\n\n"
         "The point $D$ splits $\\angle ABC$ into $\\angle ABD$ and "
         "$\\angle DBC$, so\n\n"
         "$$\\angle ABD=80^\\circ-20^\\circ=60^\\circ.$$"),

    prob("amch", 3,
         "При каких $n$ внутренний угол правильного $n$-угольника выражается "
         "целым числом градусов?",
         "For which $n$ is the interior angle of a regular $n$-gon a whole "
         "number of degrees?",
         "Внутренний угол равен $180^\\circ-\\tfrac{360^\\circ}n$.",
         "The interior angle is $180^\\circ-\\tfrac{360^\\circ}n$.",
         "Угол равен $180-\\dfrac{360}n$, и он целый ровно тогда, когда "
         "$\\dfrac{360}n$ целое, то есть когда $n\\mid 360$.\n\n"
         "У числа $360=2^3\\cdot3^2\\cdot5$ ровно "
         "$(3+1)(2+1)(1+1)=24$ делителя. Из них $n=1$ и $n=2$ не дают "
         "многоугольника, значит подходят $22$ значения:\n\n"
         "$3,4,5,6,8,9,10,12,15,18,20,24,30,36,40,45,60,72,90,120,180,360$.",
         "The angle is $180-\\dfrac{360}n$, and it is an integer exactly when "
         "$\\dfrac{360}n$ is, that is when $n\\mid 360$.\n\n"
         "The number $360=2^3\\cdot3^2\\cdot5$ has exactly "
         "$(3+1)(2+1)(1+1)=24$ divisors. Of these $n=1$ and $n=2$ give no "
         "polygon, so $22$ values work:\n\n"
         "$3,4,5,6,8,9,10,12,15,18,20,24,30,36,40,45,60,72,90,120,180,360$."),

    prob("amch", 3,
         "В выпуклом четырёхугольнике $ABCD$ известно, что "
         "$\\angle A=\\angle C=90^\\circ$ и $\\angle B=70^\\circ$. Найдите "
         "$\\angle D$.",
         "In a convex quadrilateral $ABCD$ we have "
         "$\\angle A=\\angle C=90^\\circ$ and $\\angle B=70^\\circ$. Find "
         "$\\angle D$.",
         "Сумма углов четырёхугольника равна $360^\\circ$.",
         "The angles of a quadrilateral add up to $360^\\circ$.",
         "$\\angle D=360^\\circ-90^\\circ-90^\\circ-70^\\circ=110^\\circ$. "
         "Заметьте: $\\angle B+\\angle D=180^\\circ$ — такой "
         "четырёхугольник вписан в окружность с диаметром $BD$.",
         "$\\angle D=360^\\circ-90^\\circ-90^\\circ-70^\\circ=110^\\circ$. "
         "Note that $\\angle B+\\angle D=180^\\circ$ — such a quadrilateral "
         "is inscribed in the circle with diameter $BD$."),

    prob("kang", 3,
         "Правильный шестиугольник и правильный треугольник имеют общую "
         "сторону. Под каким углом сходятся их стороны, выходящие из общей "
         "вершины в разные фигуры?",
         "A regular hexagon and a regular triangle share a side. At what "
         "angle do their other sides at a shared vertex meet?",
         "Сложите внутренние углы двух фигур и вычтите из $360^\\circ$.",
         "Add the two interior angles and subtract from $360^\\circ$.",
         "Внутренний угол шестиугольника равен "
         "$180^\\circ-\\tfrac{360^\\circ}6=120^\\circ$, треугольника — "
         "$60^\\circ$.\n\n"
         "Если фигуры лежат по разные стороны от общей стороны, то вокруг "
         "общей вершины все углы дают $360^\\circ$, поэтому искомый угол "
         "равен $360^\\circ-120^\\circ-60^\\circ=180^\\circ$: эти две "
         "стороны лежат на одной прямой.",
         "The hexagon's interior angle is "
         "$180^\\circ-\\tfrac{360^\\circ}6=120^\\circ$ and the triangle's is "
         "$60^\\circ$.\n\n"
         "If the two shapes lie on opposite sides of the shared side then the "
         "angles around the shared vertex total $360^\\circ$, so the required "
         "angle is $360^\\circ-120^\\circ-60^\\circ=180^\\circ$: those two "
         "sides lie on one straight line."),

    prob("amch", 3,
         "Докажите, что у выпуклого многоугольника не может быть более трёх "
         "острых внутренних углов.",
         "Prove that a convex polygon cannot have more than three acute "
         "interior angles.",
         "Переведите условие на язык внешних углов.",
         "Translate the condition into the language of exterior angles.",
         "Внутренний угол острый ($<90^\\circ$) тогда и только тогда, когда "
         "смежный с ним внешний угол тупой ($>90^\\circ$).\n\n"
         "Сумма всех внешних углов выпуклого многоугольника равна "
         "$360^\\circ$. Если бы острых внутренних углов было четыре или "
         "больше, то четыре внешних угла были бы больше $90^\\circ$ каждый, и "
         "уже их сумма превысила бы $4\\cdot 90^\\circ=360^\\circ$ — "
         "противоречие (остальные внешние углы выпуклого многоугольника "
         "положительны).\n\n"
         "Значит острых углов не больше трёх. Оценка достигается: у "
         "подходящего четырёхугольника может быть три острых угла. "
         "$\\blacksquare$",
         "An interior angle is acute ($<90^\\circ$) if and only if the "
         "exterior angle beside it is obtuse ($>90^\\circ$).\n\n"
         "The exterior angles of a convex polygon add up to $360^\\circ$. If "
         "there were four or more acute interior angles then four exterior "
         "angles would each exceed $90^\\circ$, and their sum alone would "
         "exceed $4\\cdot 90^\\circ=360^\\circ$ — a contradiction (the "
         "remaining exterior angles of a convex polygon are positive).\n\n"
         "So there are at most three acute angles. The bound is attained: a "
         "suitable quadrilateral can have three acute angles. $\\blacksquare$"),

    # ---- level 4 ---------------------------------------------------------
    prob("aops", 4,
         "Докажите, что сумма внутренних углов выпуклого $n$-угольника равна "
         "$(n-2)\\cdot180^\\circ$, пользуясь только суммой углов "
         "треугольника.",
         "Prove that the interior angles of a convex $n$-gon add up to "
         "$(n-2)\\cdot180^\\circ$, using only the angle sum of a triangle.",
         "Проведите диагонали из одной вершины и сосчитайте треугольники.",
         "Draw the diagonals from one vertex and count the triangles.",
         "Проведём из вершины $A_1$ все диагонали "
         "$A_1A_3,A_1A_4,\\ldots,A_1A_{n-1}$ — их $n-3$. Для выпуклого "
         "многоугольника каждая такая диагональ лежит внутри, и вместе они "
         "разбивают его на треугольники\n\n"
         "$$A_1A_2A_3,\\;A_1A_3A_4,\\;\\ldots,\\;A_1A_{n-1}A_n,$$\n\n"
         "то есть ровно на $n-2$ треугольника (на один больше, чем "
         "диагоналей).\n\n"
         "Сумма углов всех треугольников равна $(n-2)\\cdot180^\\circ$. "
         "Осталось проверить, что она в точности равна сумме углов "
         "многоугольника. Углы при вершинах $A_2,\\ldots,A_n$, не считая "
         "$A_1$: при $A_2$ и $A_n$ угол треугольника совпадает с углом "
         "многоугольника, а при каждой промежуточной вершине $A_i$ углы двух "
         "соседних треугольников в сумме дают угол многоугольника. Наконец, "
         "углы всех треугольников при вершине $A_1$ в сумме составляют "
         "угол $A_1$ многоугольника.\n\n"
         "Значит каждый угол многоугольника посчитан ровно один раз, и "
         "никаких лишних углов не осталось. $\\blacksquare$",
         "From the vertex $A_1$ draw every diagonal "
         "$A_1A_3,A_1A_4,\\ldots,A_1A_{n-1}$ — there are $n-3$ of them. For a "
         "convex polygon each such diagonal lies inside, and together they "
         "cut it into the triangles\n\n"
         "$$A_1A_2A_3,\\;A_1A_3A_4,\\;\\ldots,\\;A_1A_{n-1}A_n,$$\n\n"
         "that is, exactly $n-2$ triangles (one more than the number of "
         "diagonals).\n\n"
         "The angles of all these triangles sum to $(n-2)\\cdot180^\\circ$. It "
         "remains to check that this is exactly the polygon's angle sum. At "
         "$A_2$ and $A_n$ the triangle's angle coincides with the polygon's; "
         "at each intermediate vertex $A_i$ the angles of the two neighbouring "
         "triangles add up to the polygon's angle. Finally the triangles' "
         "angles at $A_1$ together make up the polygon's angle at $A_1$.\n\n"
         "So every angle of the polygon is counted exactly once, with nothing "
         "left over. $\\blacksquare$"),

    prob("aops", 4,
         "Докажите, что в любом треугольнике против большей стороны лежит "
         "больший угол.",
         "Prove that in any triangle the greater side is opposite the greater "
         "angle.",
         "Отложите на большей стороне отрезок, равный меньшей, и используйте "
         "внешний угол.",
         "On the greater side mark off a segment equal to the smaller one, "
         "then use an exterior angle.",
         "Пусть в треугольнике $ABC$ выполнено $AB>AC$; докажем, что "
         "$\\angle C>\\angle B$.\n\n"
         "Отложим на отрезке $AB$ точку $D$ с $AD=AC$. Так как $AD=AC<AB$, "
         "точка $D$ лежит строго между $A$ и $B$.\n\n"
         "Треугольник $ACD$ равнобедренный, поэтому "
         "$\\angle ACD=\\angle ADC$.\n\n"
         "Угол $\\angle ADC$ — внешний угол треугольника $BDC$ при вершине "
         "$D$, значит он больше несмежного внутреннего угла "
         "$\\angle DBC=\\angle B$.\n\n"
         "Точка $D$ лежит внутри угла $ACB$, поэтому "
         "$\\angle ACB>\\angle ACD$. Собирая всё:\n\n"
         "$$\\angle C=\\angle ACB>\\angle ACD=\\angle ADC>\\angle B.$$\n\n"
         "$\\blacksquare$",
         "Suppose triangle $ABC$ has $AB>AC$; we prove "
         "$\\angle C>\\angle B$.\n\n"
         "On the segment $AB$ mark the point $D$ with $AD=AC$. Since "
         "$AD=AC<AB$, the point $D$ lies strictly between $A$ and $B$.\n\n"
         "Triangle $ACD$ is isosceles, so $\\angle ACD=\\angle ADC$.\n\n"
         "The angle $\\angle ADC$ is an exterior angle of triangle $BDC$ at "
         "$D$, so it exceeds the non-adjacent interior angle "
         "$\\angle DBC=\\angle B$.\n\n"
         "The point $D$ lies inside the angle $ACB$, so "
         "$\\angle ACB>\\angle ACD$. Putting it together:\n\n"
         "$$\\angle C=\\angle ACB>\\angle ACD=\\angle ADC>\\angle B.$$\n\n"
         "$\\blacksquare$"),

    prob("aops", 4,
         "Докажите теорему о средней линии: отрезок, соединяющий середины "
         "двух сторон треугольника, параллелен третьей стороне и равен её "
         "половине.",
         "Prove the midline theorem: the segment joining the midpoints of two "
         "sides of a triangle is parallel to the third side and equal to half "
         "of it.",
         "Подобие по общему углу и двум пропорциональным сторонам.",
         "Similarity from a shared angle and two proportional sides.",
         "Пусть $M$ и $N$ — середины сторон $AB$ и $AC$ треугольника "
         "$ABC$.\n\n"
         "Треугольники $AMN$ и $ABC$ имеют общий угол при вершине $A$, а "
         "стороны, его образующие, пропорциональны:\n\n"
         "$$\\frac{AM}{AB}=\\frac{AN}{AC}=\\frac12.$$\n\n"
         "По признаку подобия «угол и две пропорциональные прилежащие "
         "стороны» треугольники подобны с коэффициентом $\\tfrac12$.\n\n"
         "Из подобия сразу следует $MN=\\tfrac12BC$, а также "
         "$\\angle AMN=\\angle ABC$. Но это соответственные углы при "
         "секущей $AB$ для прямых $MN$ и $BC$, и их равенство означает "
         "$MN\\parallel BC$. $\\blacksquare$",
         "Let $M$ and $N$ be the midpoints of the sides $AB$ and $AC$ of "
         "triangle $ABC$.\n\n"
         "Triangles $AMN$ and $ABC$ share the angle at $A$, and the sides "
         "forming it are proportional:\n\n"
         "$$\\frac{AM}{AB}=\\frac{AN}{AC}=\\frac12.$$\n\n"
         "By the \"angle and two proportional adjacent sides\" similarity "
         "criterion the triangles are similar with factor $\\tfrac12$.\n\n"
         "Similarity gives $MN=\\tfrac12BC$ at once, and also "
         "$\\angle AMN=\\angle ABC$. But those are corresponding angles at "
         "the transversal $AB$ for the lines $MN$ and $BC$, and their "
         "equality means $MN\\parallel BC$. $\\blacksquare$"),

    prob("chal", 4,
         "Докажите, что в выпуклом четырёхугольнике сумма диагоналей меньше "
         "его периметра.",
         "Prove that in a convex quadrilateral the sum of the diagonals is "
         "less than the perimeter.",
         "Примените неравенство треугольника к четырём треугольникам, "
         "образованным диагоналями.",
         "Apply the triangle inequality to the four triangles cut off by the "
         "diagonals.",
         "Пусть четырёхугольник $ABCD$ имеет диагонали $AC$ и $BD$, "
         "пересекающиеся в точке $O$ (для выпуклого четырёхугольника "
         "диагонали действительно пересекаются внутри).\n\n"
         "Применим неравенство треугольника к четырём треугольникам:\n\n"
         "$$AO+OB>AB,\\quad BO+OC>BC,\\quad CO+OD>CD,\\quad DO+OA>DA.$$\n\n"
         "Сложим все четыре. В левой части каждый из отрезков "
         "$AO,OB,OC,OD$ встречается дважды, то есть левая часть равна\n\n"
         "$$2(AO+OC)+2(BO+OD)=2(AC+BD).$$\n\n"
         "Справа стоит периметр $P$. Получаем $2(AC+BD)>P$ — это пока "
         "*нижняя* оценка, а нам нужна верхняя, поэтому воспользуемся другой "
         "группировкой.\n\n"
         "Возьмём треугольники, на которые каждая диагональ разбивает "
         "четырёхугольник. Диагональ $AC$ лежит в треугольниках $ABC$ и "
         "$ACD$, поэтому\n\n"
         "$$AC<AB+BC\\quad\\text{и}\\quad AC<AD+DC.$$\n\n"
         "Аналогично для $BD$:\n\n"
         "$$BD<BA+AD\\quad\\text{и}\\quad BD<BC+CD.$$\n\n"
         "Сложим все четыре неравенства: слева получится $2(AC+BD)$, а "
         "справа каждая сторона встретится дважды, то есть $2P$. Значит "
         "$2(AC+BD)<2P$, откуда $AC+BD<P$. $\\blacksquare$",
         "Let the quadrilateral $ABCD$ have diagonals $AC$ and $BD$ meeting "
         "at $O$ (in a convex quadrilateral the diagonals do meet "
         "inside).\n\n"
         "Apply the triangle inequality to the four triangles:\n\n"
         "$$AO+OB>AB,\\quad BO+OC>BC,\\quad CO+OD>CD,\\quad DO+OA>DA.$$\n\n"
         "Add all four. On the left each of $AO,OB,OC,OD$ appears twice, so "
         "the left side equals\n\n"
         "$$2(AO+OC)+2(BO+OD)=2(AC+BD).$$\n\n"
         "On the right stands the perimeter $P$. This gives $2(AC+BD)>P$ — a "
         "*lower* bound, whereas we want an upper one, so group "
         "differently.\n\n"
         "Take the triangles into which each diagonal cuts the "
         "quadrilateral. The diagonal $AC$ lies in triangles $ABC$ and "
         "$ACD$, so\n\n"
         "$$AC<AB+BC\\quad\\text{and}\\quad AC<AD+DC.$$\n\n"
         "Similarly for $BD$:\n\n"
         "$$BD<BA+AD\\quad\\text{and}\\quad BD<BC+CD.$$\n\n"
         "Add all four: the left side becomes $2(AC+BD)$ and on the right "
         "each side appears twice, that is $2P$. Hence $2(AC+BD)<2P$, so "
         "$AC+BD<P$. $\\blacksquare$"),

    prob("chal", 4,
         "В треугольнике $ABC$ угол $B$ вдвое больше угла $C$, а биссектриса "
         "угла $A$ пересекает $BC$ в точке $L$, причём "
         "$\\angle ALC=100^\\circ$. Найдите все углы треугольника.",
         "In triangle $ABC$ the angle $B$ is twice the angle $C$, and the "
         "bisector of angle $A$ meets $BC$ at $L$ with "
         "$\\angle ALC=100^\\circ$. Find all the angles of the triangle.",
         "Выразите $\\angle ALC$ как внешний угол треугольника $ABL$.",
         "Express $\\angle ALC$ as an exterior angle of triangle $ABL$.",
         "Положим $\\angle C=x$, тогда $\\angle B=2x$ и "
         "$\\angle A=180^\\circ-3x$.\n\n"
         "Угол $\\angle ALC$ — внешний для треугольника $ABL$ при вершине "
         "$L$, поэтому он равен сумме двух несмежных внутренних:\n\n"
         "$$\\angle ALC=\\angle B+\\angle BAL=2x+\\frac{180^\\circ-3x}2.$$\n\n"
         "Приравниваем к $100^\\circ$:\n\n"
         "$$2x+90^\\circ-\\frac{3x}2=100^\\circ"
         "\\;\\Longrightarrow\\;\\frac{x}2=10^\\circ"
         "\\;\\Longrightarrow\\;x=20^\\circ.$$\n\n"
         "Значит $\\angle C=20^\\circ$, $\\angle B=40^\\circ$, "
         "$\\angle A=120^\\circ$.\n\n"
         "Проверка: $\\angle BAL=60^\\circ$, и в треугольнике $ABL$ "
         "получается $\\angle ALB=180^\\circ-40^\\circ-60^\\circ=80^\\circ$, "
         "откуда $\\angle ALC=180^\\circ-80^\\circ=100^\\circ$. "
         "$\\checkmark$",
         "Put $\\angle C=x$, so $\\angle B=2x$ and "
         "$\\angle A=180^\\circ-3x$.\n\n"
         "The angle $\\angle ALC$ is exterior to triangle $ABL$ at $L$, so it "
         "equals the sum of the two non-adjacent interior angles:\n\n"
         "$$\\angle ALC=\\angle B+\\angle BAL=2x+\\frac{180^\\circ-3x}2.$$\n\n"
         "Setting this equal to $100^\\circ$:\n\n"
         "$$2x+90^\\circ-\\frac{3x}2=100^\\circ"
         "\\;\\Longrightarrow\\;\\frac{x}2=10^\\circ"
         "\\;\\Longrightarrow\\;x=20^\\circ.$$\n\n"
         "So $\\angle C=20^\\circ$, $\\angle B=40^\\circ$, "
         "$\\angle A=120^\\circ$.\n\n"
         "Check: $\\angle BAL=60^\\circ$, and in triangle $ABL$ we get "
         "$\\angle ALB=180^\\circ-40^\\circ-60^\\circ=80^\\circ$, hence "
         "$\\angle ALC=180^\\circ-80^\\circ=100^\\circ$. $\\checkmark$"),

    prob("chal", 4,
         "Докажите, что угол между высотой и биссектрисой, проведёнными из "
         "одной вершины треугольника, равен "
         "$\\dfrac{|\\angle B-\\angle C|}2$.",
         "Prove that the angle between the altitude and the bisector drawn "
         "from one vertex of a triangle equals "
         "$\\dfrac{|\\angle B-\\angle C|}2$.",
         "Посчитайте угол каждой из двух прямых со стороной $AB$.",
         "Compute the angle each of the two lines makes with the side $AB$.",
         "Пусть высота из $A$ попадает в точку $H$, а биссектриса — в точку "
         "$L$, и пусть $\\angle B>\\angle C$ (иначе поменяем обозначения "
         "$B$ и $C$ местами; при $\\angle B=\\angle C$ обе прямые "
         "совпадают и угол равен нулю, что согласуется с формулой).\n\n"
         "В прямоугольном треугольнике $ABH$:\n\n"
         "$$\\angle BAH=90^\\circ-\\angle B.$$\n\n"
         "Биссектриса даёт\n\n"
         "$$\\angle BAL=\\frac{\\angle A}2"
         "=\\frac{180^\\circ-\\angle B-\\angle C}2"
         "=90^\\circ-\\frac{\\angle B+\\angle C}2.$$\n\n"
         "Так как $\\angle B>\\angle C$, имеем "
         "$\\frac{\\angle B+\\angle C}2<\\angle B$, то есть "
         "$\\angle BAL>\\angle BAH$: высота лежит ближе к стороне $AB$, и "
         "искомый угол равен разности\n\n"
         "$$\\angle HAL=\\angle BAL-\\angle BAH"
         "=\\left(90^\\circ-\\frac{\\angle B+\\angle C}2\\right)"
         "-\\left(90^\\circ-\\angle B\\right)"
         "=\\frac{\\angle B-\\angle C}2.$$\n\n"
         "В общем случае это $\\dfrac{|\\angle B-\\angle C|}2$. "
         "$\\blacksquare$",
         "Let the altitude from $A$ meet $BC$ at $H$ and the bisector at $L$, "
         "and suppose $\\angle B>\\angle C$ (otherwise swap the names $B$ and "
         "$C$; if $\\angle B=\\angle C$ the two lines coincide and the angle "
         "is zero, which matches the formula).\n\n"
         "In the right triangle $ABH$:\n\n"
         "$$\\angle BAH=90^\\circ-\\angle B.$$\n\n"
         "The bisector gives\n\n"
         "$$\\angle BAL=\\frac{\\angle A}2"
         "=\\frac{180^\\circ-\\angle B-\\angle C}2"
         "=90^\\circ-\\frac{\\angle B+\\angle C}2.$$\n\n"
         "Since $\\angle B>\\angle C$ we have "
         "$\\frac{\\angle B+\\angle C}2<\\angle B$, that is "
         "$\\angle BAL>\\angle BAH$: the altitude lies nearer the side $AB$, "
         "and the required angle is the difference\n\n"
         "$$\\angle HAL=\\angle BAL-\\angle BAH"
         "=\\left(90^\\circ-\\frac{\\angle B+\\angle C}2\\right)"
         "-\\left(90^\\circ-\\angle B\\right)"
         "=\\frac{\\angle B-\\angle C}2.$$\n\n"
         "In general this is $\\dfrac{|\\angle B-\\angle C|}2$. "
         "$\\blacksquare$"),

    prob("chal", 4,
         "Сколько существует треугольников с целыми сторонами и периметром "
         "$24$, у которых все три стороны различны?",
         "How many triangles with integer sides and perimeter $24$ have all "
         "three sides different?",
         "Переберите наибольшую сторону и считайте только строгие "
         "неравенства.",
         "Run over the longest side and count only the strict cases.",
         "Пусть $a<b<c$ и $a+b+c=24$. Из $a+b>c$ следует $c<12$, а из "
         "$c>b>a$ следует $3c>24$, то есть $c>8$. Значит "
         "$c\\in\\{9,10,11\\}$.\n\n"
         "$c=9$: $a+b=15$ при $a<b<9$, то есть $b=8,a=7$. Один "
         "треугольник $(7,8,9)$.\n\n"
         "$c=10$: $a+b=14$ при $a<b<10$ — это $(5,9),(6,8)$; пара "
         "$(7,7)$ отпадает, так как стороны должны быть различны. Два "
         "треугольника.\n\n"
         "$c=11$: $a+b=13$ при $a<b<11$ — это "
         "$(3,10),(4,9),(5,8),(6,7)$. Четыре треугольника.\n\n"
         "Итого $1+2+4=7$ разносторонних треугольников.",
         "Let $a<b<c$ with $a+b+c=24$. From $a+b>c$ we get $c<12$, and from "
         "$c>b>a$ we get $3c>24$, i.e. $c>8$. So $c\\in\\{9,10,11\\}$.\n\n"
         "$c=9$: $a+b=15$ with $a<b<9$, so $b=8,a=7$. One triangle "
         "$(7,8,9)$.\n\n"
         "$c=10$: $a+b=14$ with $a<b<10$ — $(5,9),(6,8)$; the pair $(7,7)$ "
         "is out because the sides must differ. Two triangles.\n\n"
         "$c=11$: $a+b=13$ with $a<b<11$ — "
         "$(3,10),(4,9),(5,8),(6,7)$. Four triangles.\n\n"
         "In all $1+2+4=7$ scalene triangles."),

    prob("chal", 4,
         "Правильный $n$-угольник и правильный $m$-угольник приложены "
         "сторона к стороне так, что вокруг общей вершины остаётся ещё ровно "
         "один правильный $k$-угольник, и три фигуры полностью закрывают "
         "плоскость вокруг этой вершины. Найдите все такие тройки "
         "$(n,m,k)$ при $n=m$.",
         "A regular $n$-gon, a regular $m$-gon and a regular $k$-gon are "
         "placed edge to edge so that they exactly fill the plane around a "
         "shared vertex. Find all such triples with $n=m$.",
         "Сумма трёх внутренних углов при вершине равна $360^\\circ$.",
         "The three interior angles at the vertex add up to $360^\\circ$.",
         "Внутренний угол правильного $n$-угольника равен "
         "$180^\\circ-\\dfrac{360^\\circ}n$. Условие полного заполнения:\n\n"
         "$$2\\left(180-\\frac{360}n\\right)+\\left(180-\\frac{360}k\\right)"
         "=360.$$\n\n"
         "Упрощаем: $540-\\dfrac{720}n-\\dfrac{360}k=360$, то есть\n\n"
         "$$\\frac{720}n+\\frac{360}k=180"
         "\\;\\Longleftrightarrow\\;\\frac{4}n+\\frac{2}k=1.$$\n\n"
         "Отсюда $\\dfrac4n<1$, значит $n>4$; и $\\dfrac2k<1$, значит "
         "$k>2$. Выразим $k$: $\\dfrac2k=\\dfrac{n-4}n$, то есть "
         "$k=\\dfrac{2n}{n-4}$.\n\n"
         "Перебираем $n\\ge 5$ и требуем целое $k\\ge 3$:\n\n"
         "$n=5\\Rightarrow k=10$; $n=6\\Rightarrow k=6$; "
         "$n=8\\Rightarrow k=4$; $n=12\\Rightarrow k=3$. Значения "
         "$n=7,9,10,11$ дают нецелое $k$, а при $n>12$ получается $k<3$.\n\n"
         "Ответ: $(5,5,10)$, $(6,6,6)$, $(8,8,4)$, $(12,12,3)$. Проверка "
         "для $(8,8,4)$: $135+135+90=360$. $\\checkmark$",
         "The interior angle of a regular $n$-gon is "
         "$180^\\circ-\\dfrac{360^\\circ}n$. Filling the plane requires\n\n"
         "$$2\\left(180-\\frac{360}n\\right)+\\left(180-\\frac{360}k\\right)"
         "=360.$$\n\n"
         "Simplifying: $540-\\dfrac{720}n-\\dfrac{360}k=360$, that is\n\n"
         "$$\\frac{720}n+\\frac{360}k=180"
         "\\;\\Longleftrightarrow\\;\\frac{4}n+\\frac{2}k=1.$$\n\n"
         "Hence $\\dfrac4n<1$, so $n>4$; and $\\dfrac2k<1$, so $k>2$. "
         "Solving for $k$: $\\dfrac2k=\\dfrac{n-4}n$, i.e. "
         "$k=\\dfrac{2n}{n-4}$.\n\n"
         "Run over $n\\ge 5$ requiring an integer $k\\ge 3$:\n\n"
         "$n=5\\Rightarrow k=10$; $n=6\\Rightarrow k=6$; "
         "$n=8\\Rightarrow k=4$; $n=12\\Rightarrow k=3$. The values "
         "$n=7,9,10,11$ give a non-integer $k$, and $n>12$ gives $k<3$.\n\n"
         "Answer: $(5,5,10)$, $(6,6,6)$, $(8,8,4)$, $(12,12,3)$. Check for "
         "$(8,8,4)$: $135+135+90=360$. $\\checkmark$"),

    prob("chal", 4,
         "Внутри равностороннего треугольника $ABC$ взята точка $P$. "
         "Докажите, что сумма расстояний от $P$ до трёх сторон не зависит от "
         "выбора $P$.",
         "A point $P$ is taken inside an equilateral triangle $ABC$. Prove "
         "that the sum of the distances from $P$ to the three sides does not "
         "depend on the choice of $P$.",
         "Разбейте треугольник на три и сложите площади.",
         "Cut the triangle into three and add the areas.",
         "Пусть сторона равна $a$, а расстояния от $P$ до сторон $BC$, $CA$, "
         "$AB$ равны $x$, $y$, $z$.\n\n"
         "Отрезки $PA$, $PB$, $PC$ разбивают треугольник $ABC$ на три "
         "треугольника $PBC$, $PCA$, $PAB$ без наложений, поэтому их площади "
         "складываются:\n\n"
         "$$[ABC]=\\frac{ax}2+\\frac{ay}2+\\frac{az}2"
         "=\\frac a2\\,(x+y+z).$$\n\n"
         "Отсюда\n\n"
         "$$x+y+z=\\frac{2\\,[ABC]}{a},$$\n\n"
         "а правая часть зависит только от треугольника, но не от точки $P$. "
         "Более того, подставив $[ABC]=\\dfrac{a^2\\sqrt3}4$, получаем "
         "$x+y+z=\\dfrac{a\\sqrt3}2$ — это в точности высота треугольника. "
         "$\\blacksquare$\n\n"
         "(Это теорема Вивиани. Заметьте, что равносторонность нужна только "
         "для того, чтобы у всех трёх треугольников было одно и то же "
         "основание $a$.)",
         "Let the side be $a$ and let the distances from $P$ to $BC$, $CA$, "
         "$AB$ be $x$, $y$, $z$.\n\n"
         "The segments $PA$, $PB$, $PC$ cut $ABC$ into the three triangles "
         "$PBC$, $PCA$, $PAB$ without overlap, so their areas add:\n\n"
         "$$[ABC]=\\frac{ax}2+\\frac{ay}2+\\frac{az}2"
         "=\\frac a2\\,(x+y+z).$$\n\n"
         "Therefore\n\n"
         "$$x+y+z=\\frac{2\\,[ABC]}{a},$$\n\n"
         "and the right-hand side depends only on the triangle, not on $P$. "
         "Substituting $[ABC]=\\dfrac{a^2\\sqrt3}4$ gives "
         "$x+y+z=\\dfrac{a\\sqrt3}2$ — exactly the triangle's altitude. "
         "$\\blacksquare$\n\n"
         "(This is Viviani's theorem. Note that being equilateral is needed "
         "only so that all three triangles have the same base $a$.)"),

    prob("chal", 4,
         "В треугольнике $ABC$ проведены медианы к сторонам $AB$ и $AC$; они "
         "перпендикулярны друг другу. Докажите, что "
         "$AB^2+AC^2=5\\,BC^2$.",
         "In triangle $ABC$ the medians to the sides $AB$ and $AC$ are "
         "perpendicular to each other. Prove that $AB^2+AC^2=5\\,BC^2$.",
         "Поставьте точку пересечения медиан в начало координат — или "
         "примените теорему Пифагора к трём прямоугольным треугольникам.",
         "Put the centroid at the origin — or apply Pythagoras to three right "
         "triangles.",
         "Пусть $M$ — середина $AB$, $N$ — середина $AC$, а медианы $CM$ и "
         "$BN$ пересекаются в точке $G$ под прямым углом. Обозначим "
         "$BG=2u$ и $CG=2v$; тогда по свойству медиан $GN=u$ и "
         "$GM=v$.\n\n"
         "В прямоугольном треугольнике $BGC$ по теореме Пифагора\n\n"
         "$$BC^2=4u^2+4v^2.$$\n\n"
         "В прямоугольном треугольнике $BGM$ (угол при $G$ прямой, так как "
         "$M$ лежит на прямой $CG$):\n\n"
         "$$BM^2=4u^2+v^2,\\qquad\\text{а }AB=2BM,"
         "\\text{ значит } AB^2=4\\left(4u^2+v^2\\right).$$\n\n"
         "Аналогично в треугольнике $CGN$:\n\n"
         "$$CN^2=4v^2+u^2,\\qquad AC=2CN,"
         "\\text{ значит } AC^2=4\\left(4v^2+u^2\\right).$$\n\n"
         "Складываем:\n\n"
         "$$AB^2+AC^2=4\\left(5u^2+5v^2\\right)=20\\left(u^2+v^2\\right)"
         "=5\\cdot 4\\left(u^2+v^2\\right)=5\\,BC^2.$$\n\n"
         "$\\blacksquare$",
         "Let $M$ be the midpoint of $AB$, $N$ the midpoint of $AC$, and let "
         "the medians $CM$ and $BN$ meet at right angles at $G$. Write "
         "$BG=2u$ and $CG=2v$; then the centroid property gives $GN=u$ and "
         "$GM=v$.\n\n"
         "In the right triangle $BGC$, Pythagoras gives\n\n"
         "$$BC^2=4u^2+4v^2.$$\n\n"
         "In the right triangle $BGM$ (the angle at $G$ is right, since $M$ "
         "lies on the line $CG$):\n\n"
         "$$BM^2=4u^2+v^2,\\qquad\\text{and }AB=2BM,"
         "\\text{ so } AB^2=4\\left(4u^2+v^2\\right).$$\n\n"
         "Similarly in triangle $CGN$:\n\n"
         "$$CN^2=4v^2+u^2,\\qquad AC=2CN,"
         "\\text{ so } AC^2=4\\left(4v^2+u^2\\right).$$\n\n"
         "Adding:\n\n"
         "$$AB^2+AC^2=4\\left(5u^2+5v^2\\right)=20\\left(u^2+v^2\\right)"
         "=5\\cdot 4\\left(u^2+v^2\\right)=5\\,BC^2.$$\n\n"
         "$\\blacksquare$"),
]

LESSON = {
    "n": 9,
    "cat": "geo",
    "title": L("Углы, треугольники и многоугольники",
               "Angles, triangles and polygons"),
    "sub": L("Погоня за углом от начала до конца: параллельные прямые, сумма "
             "углов, внешний угол, равнобедренный треугольник, признаки "
             "равенства, неравенство треугольника и углы многоугольника.",
             "The angle chase from beginning to end: parallel lines, the "
             "angle sum, the exterior angle, isosceles triangles, the "
             "congruence criteria, the triangle inequality and polygon "
             "angles."),
    "goals": LL(["Вести погоню за углом: подписывать найденное, обозначать "
                 "неизвестное буквой и получать одно уравнение.",
                 "Пользоваться углами при параллельных прямых и строить "
                 "дополнительную параллельную, когда её не хватает.",
                 "Применять теорему о сумме углов и теорему о внешнем угле, "
                 "в том числе для оценок.",
                 "Доказывать равенство треугольников по SSS, SAS, ASA и AAS и "
                 "понимать, почему SSA не признак.",
                 "Отсекать невозможные случаи неравенством треугольника.",
                 "Считать углы и диагонали многоугольника, предпочитая "
                 "внешний угол внутреннему."],
                ["Run an angle chase: label what you find, name the unknown "
                 "and reduce the figure to one equation.",
                 "Use the angles made by parallel lines, and draw the extra "
                 "parallel when the figure lacks one.",
                 "Apply the angle sum and the exterior angle theorem, "
                 "including for bounds.",
                 "Prove triangles congruent by SSS, SAS, ASA and AAS, and see "
                 "why SSA is not a criterion.",
                 "Rule out impossible cases with the triangle inequality.",
                 "Count a polygon's angles and diagonals, preferring the "
                 "exterior angle to the interior one."]),
    "sections": SECTIONS,
    "problems": PROBLEMS,
}

if __name__ == "__main__":
    write(LESSON)
