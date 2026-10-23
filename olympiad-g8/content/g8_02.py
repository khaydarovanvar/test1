# -*- coding: utf-8 -*-
"""Grade 8 topic 2 — Divisibility, factors and multiples."""

from common import (L, LL, p, dfn, thm, lemma, idea, proof, note, warn, ol,
                    table, fig, ex, sec, prob, write)

# ---------------------------------------------------------------- figures

FIG_TREE = """
<svg viewBox="0 0 440 230" role="img">
  <g font-size="15" text-anchor="middle" fill="currentColor">
    <text x="220" y="24">360</text>
    <text x="150" y="80">4</text>
    <text x="290" y="80">90</text>
    <text x="110" y="136">2</text>
    <text x="190" y="136">2</text>
    <text x="250" y="136">9</text>
    <text x="330" y="136">10</text>
    <text x="214" y="192">3</text>
    <text x="286" y="192">3</text>
    <text x="306" y="192">2</text>
    <text x="378" y="192">5</text>
  </g>
  <g stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round">
    <path d="M208 30 L158 68"/><path d="M232 30 L282 68"/>
    <path d="M140 88 L118 124"/><path d="M160 88 L182 124"/>
    <path d="M278 88 L256 124"/><path d="M300 88 L326 124"/>
    <path d="M242 144 L218 180"/><path d="M258 144 L282 180"/>
    <path d="M322 144 L306 180"/><path d="M338 144 L372 180"/>
  </g>
  <text x="220" y="222" font-size="14" text-anchor="middle"
        fill="var(--gold, #C8A24A)">360 = 2³ · 3² · 5</text>
</svg>
"""

FIG_LATTICE = """
<svg viewBox="0 0 400 210" role="img">
  <g font-size="14" text-anchor="middle" fill="currentColor">
    <text x="200" y="26">lcm = 2³·3²·5 = 360</text>
    <text x="100" y="108">a = 2³·3 = 24</text>
    <text x="300" y="108">b = 2²·3²·5 = 180</text>
    <text x="200" y="192">gcd = 2²·3 = 12</text>
  </g>
  <g stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round">
    <path d="M170 34 L120 92"/><path d="M230 34 L280 92"/>
    <path d="M120 122 L175 180"/><path d="M280 122 L225 180"/>
  </g>
</svg>
"""

# ---------------------------------------------------------------- sections

SECTIONS = [

    sec("Делимость: определение и четыре свойства",
        "Divisibility: the definition and four properties", [
        p("Делимость — это не «деление, которое получилось красиво». Это "
          "утверждение о существовании целого числа. Если держать в голове "
          "именно определение, большинство задач на делимость превращаются в "
          "одну строку алгебры.",
          "Divisibility is not \"a division that came out neatly\". It is a "
          "statement that a certain integer exists. Keep the definition in "
          "front of you and most divisibility problems become one line of "
          "algebra."),

        dfn("Делимость", "Divisibility",
            "Пусть $a$ и $b$ — целые числа, $a\\neq 0$. Говорят, что **$a$ "
            "делит $b$** (пишут $a\\mid b$), если существует целое $k$, для "
            "которого $b=ak$. Тогда $a$ — **делитель** $b$, а $b$ — "
            "**кратное** $a$.",
            "Let $a$ and $b$ be integers with $a\\neq 0$. We say **$a$ "
            "divides $b$** (written $a\\mid b$) if there is an integer $k$ "
            "with $b=ak$. Then $a$ is a **divisor** of $b$ and $b$ is a "
            "**multiple** of $a$."),

        note("Примеры: $3\\mid 12$, потому что $12=3\\cdot 4$; $7\\mid 0$, "
             "потому что $0=7\\cdot 0$; но $4\\nmid 10$, потому что "
             "$10=4k$ не имеет целых решений. Ноль делится на всё, но сам "
             "не делит ничего.",
             "Examples: $3\\mid 12$ because $12=3\\cdot 4$; $7\\mid 0$ "
             "because $0=7\\cdot 0$; but $4\\nmid 10$ because $10=4k$ has no "
             "integer solution. Zero is divisible by everything but divides "
             "nothing."),

        thm("Линейность", "Linearity",
            "Если $d\\mid a$ и $d\\mid b$, то $d\\mid (ax+by)$ для любых "
            "целых $x,y$.",
            "If $d\\mid a$ and $d\\mid b$, then $d\\mid (ax+by)$ for all "
            "integers $x,y$."),

        proof("По определению $a=dm$ и $b=dn$ для некоторых целых $m,n$. "
              "Тогда $ax+by=dmx+dny=d(mx+ny)$, а $mx+ny$ — целое число. "
              "Значит $d$ делит $ax+by$. $\\blacksquare$",
              "By definition $a=dm$ and $b=dn$ for some integers $m,n$. Then "
              "$ax+by=dmx+dny=d(mx+ny)$, and $mx+ny$ is an integer. So $d$ "
              "divides $ax+by$. $\\blacksquare$"),

        idea("Линейность — главный рабочий инструмент",
             "Linearity is the workhorse",
             "Эта теорема — то, чем вы будете пользоваться чаще всего. Чтобы "
             "показать, что $d$ делит какое-то выражение, соберите его из уже "
             "известных кратных $d$. Частные случаи: $d\\mid a+b$, "
             "$d\\mid a-b$, $d\\mid 5a-3b$ — всё это одна теорема.",
             "This theorem is the one you will reach for most often. To show "
             "$d$ divides some expression, build the expression out of "
             "multiples of $d$ you already have. The special cases "
             "$d\\mid a+b$, $d\\mid a-b$, $d\\mid 5a-3b$ are all this one "
             "theorem."),

        thm("Транзитивность и порядок",
            "Transitivity and size",
            "(1) Если $a\\mid b$ и $b\\mid c$, то $a\\mid c$.\n\n"
            "(2) Если $a\\mid b$ и $b\\neq 0$, то $|a|\\le |b|$.\n\n"
            "(3) Если $a\\mid b$ и $b\\mid a$, то $a=\\pm b$.",
            "(1) If $a\\mid b$ and $b\\mid c$, then $a\\mid c$.\n\n"
            "(2) If $a\\mid b$ and $b\\neq 0$, then $|a|\\le |b|$.\n\n"
            "(3) If $a\\mid b$ and $b\\mid a$, then $a=\\pm b$."),

        proof("(1) Из $b=am$ и $c=bn$ получаем $c=amn$.\n\n"
              "(2) Пусть $b=ak$. Так как $b\\neq 0$, то $k\\neq 0$, значит "
              "$|k|\\ge 1$ и $|b|=|a||k|\\ge |a|$.\n\n"
              "(3) Если одно из чисел равно нулю, то по пункту (2) и второе "
              "равно нулю. Иначе из (2) следует $|a|\\le|b|$ и $|b|\\le|a|$, "
              "то есть $|a|=|b|$. $\\blacksquare$",
              "(1) From $b=am$ and $c=bn$ we get $c=amn$.\n\n"
              "(2) Let $b=ak$. Since $b\\neq 0$ we have $k\\neq 0$, so "
              "$|k|\\ge 1$ and $|b|=|a||k|\\ge |a|$.\n\n"
              "(3) If either number is zero then by (2) so is the other. "
              "Otherwise (2) gives $|a|\\le|b|$ and $|b|\\le|a|$, hence "
              "$|a|=|b|$. $\\blacksquare$"),

        warn("Пункт (2) объясняет, почему поиск делителей всегда конечен: "
             "делители числа $n>0$ лежат между $1$ и $n$. Именно поэтому "
             "работает приём «$d\\mid 2$, значит $d\\in\\{1,2\\}$» — он "
             "закрывает задачу за одну строку.",
             "Part (2) is why hunting for divisors always terminates: the "
             "divisors of $n>0$ lie between $1$ and $n$. It is also what "
             "makes the move \"$d\\mid 2$, so $d\\in\\{1,2\\}$\" close a "
             "problem in one line."),

        thm("Деление с остатком", "Division with remainder",
            "Для любых целых $a$ и $b>0$ существуют *единственные* целые $q$ "
            "и $r$, для которых $$a=bq+r,\\qquad 0\\le r<b.$$",
            "For any integers $a$ and $b>0$ there are *unique* integers $q$ "
            "and $r$ with $$a=bq+r,\\qquad 0\\le r<b.$$"),

        proof("Существование: возьмём наибольшее кратное $bq$, не "
              "превосходящее $a$ (такое есть, так как кратные $b$ уходят в "
              "обе стороны неограниченно), и положим $r=a-bq$. Тогда "
              "$r\\ge 0$ по выбору $q$, и $r<b$, иначе $b(q+1)\\le a$ "
              "противоречило бы максимальности.\n\n"
              "Единственность: если $bq_1+r_1=bq_2+r_2$, то "
              "$b(q_1-q_2)=r_2-r_1$. Слева кратное $b$, справа число, по "
              "модулю меньшее $b$ (так как оба остатка лежат в $[0,b)$). "
              "Значит обе части равны нулю. $\\blacksquare$",
              "Existence: take the largest multiple $bq$ not exceeding $a$ "
              "(it exists, because the multiples of $b$ run off unboundedly "
              "both ways) and set $r=a-bq$. Then $r\\ge 0$ by the choice of "
              "$q$, and $r<b$, since otherwise $b(q+1)\\le a$ would "
              "contradict maximality.\n\n"
              "Uniqueness: if $bq_1+r_1=bq_2+r_2$ then "
              "$b(q_1-q_2)=r_2-r_1$. The left side is a multiple of $b$, the "
              "right side has absolute value less than $b$ (both remainders "
              "lie in $[0,b)$). So both sides are zero. $\\blacksquare$"),

        idea("Разбор по остаткам", "Split into remainder cases",
             "Любое целое $n$ можно записать как $3k$, $3k+1$ или $3k+2$ — и "
             "это все возможности. Такой разбор решает огромный класс задач "
             "вида «докажите, что …»: случаев конечное число, и каждый "
             "проверяется подстановкой.",
             "Every integer $n$ can be written as $3k$, $3k+1$ or $3k+2$ — "
             "and those are all the possibilities. This split settles a huge "
             "class of \"prove that …\" problems: the number of cases is "
             "finite and each one is a substitution."),

        ex("Докажите, что $n(n+1)(n+2)$ делится на $6$ при любом целом $n$.",
           "Prove that $n(n+1)(n+2)$ is divisible by $6$ for every "
           "integer $n$.",
           ["Достаточно доказать делимость на $2$ и на $3$: эти числа взаимно "
            "просты, поэтому произведение $6$ тоже разделит.",
            "Среди двух подряд идущих чисел $n$ и $n+1$ одно чётно, значит "
            "произведение делится на $2$.",
            "Среди трёх подряд идущих чисел $n,n+1,n+2$ остатки по модулю $3$ "
            "попарно различны, значит один из множителей делится на $3$.",
            "Итого произведение делится и на $2$, и на $3$, а значит на $6$."],
           ["It suffices to prove divisibility by $2$ and by $3$: those are "
            "coprime, so $6$ will divide too.",
            "Of the two consecutive numbers $n$ and $n+1$ one is even, so the "
            "product is divisible by $2$.",
            "Among three consecutive numbers $n,n+1,n+2$ the remainders mod "
            "$3$ are pairwise different, so one factor is divisible by $3$.",
            "Hence the product is divisible by both $2$ and $3$, and "
            "therefore by $6$."],
           "$6\\mid n(n+1)(n+2)$", "$6\\mid n(n+1)(n+2)$"),
    ]),

    sec("Признаки делимости и почему они работают",
        "Divisibility rules, and why they work", [
        p("Признаки делимости стоит знать не как список, а как три идеи: "
          "смотреть на последние цифры (для делителей степеней десяти), "
          "складывать цифры (для $3$ и $9$) и складывать их со знаками "
          "(для $11$).",
          "The divisibility rules are worth knowing not as a list but as "
          "three ideas: look at the last digits (for divisors of powers of "
          "ten), add the digits (for $3$ and $9$), and add them with "
          "alternating signs (for $11$)."),

        table(["Делитель", "Признак"],
              ["Divisor", "Rule"],
              [["$2$", "последняя цифра чётна"],
               ["$4$", "число из двух последних цифр делится на $4$"],
               ["$8$", "число из трёх последних цифр делится на $8$"],
               ["$5$", "последняя цифра $0$ или $5$"],
               ["$25$", "две последние цифры дают $00,25,50$ или $75$"],
               ["$10^k$", "последние $k$ цифр — нули"],
               ["$3$", "сумма цифр делится на $3$"],
               ["$9$", "сумма цифр делится на $9$"],
               ["$11$", "знакочередующаяся сумма цифр делится на $11$"],
               ["$6$", "делится на $2$ и на $3$"],
               ["$12$", "делится на $4$ и на $3$"]],
              [["$2$", "the last digit is even"],
               ["$4$", "the number formed by the last two digits is divisible by $4$"],
               ["$8$", "the number formed by the last three digits is divisible by $8$"],
               ["$5$", "the last digit is $0$ or $5$"],
               ["$25$", "the last two digits are $00,25,50$ or $75$"],
               ["$10^k$", "the last $k$ digits are zeros"],
               ["$3$", "the digit sum is divisible by $3$"],
               ["$9$", "the digit sum is divisible by $9$"],
               ["$11$", "the alternating digit sum is divisible by $11$"],
               ["$6$", "divisible by $2$ and by $3$"],
               ["$12$", "divisible by $4$ and by $3$"]]),

        thm("Признак делимости на $9$ (и на $3$)",
            "The rule for $9$ (and for $3$)",
            "Натуральное число делится на $9$ тогда и только тогда, когда его "
            "сумма цифр делится на $9$. То же верно для $3$.",
            "A positive integer is divisible by $9$ if and only if its digit "
            "sum is divisible by $9$. The same holds for $3$."),

        proof("Запишем $N=\\overline{a_ka_{k-1}\\ldots a_0}$, то есть "
              "$N=\\sum_{i=0}^{k}a_i\\cdot 10^i$. Заметим, что "
              "$10^i-1=\\underbrace{99\\ldots9}_{i}$ делится на $9$. Значит\n\n"
              "$$N-\\sum a_i=\\sum a_i(10^i-1)$$\n\n"
              "— сумма кратных девяти, то есть кратное девяти. По линейности "
              "$9\\mid N$ равносильно $9\\mid\\sum a_i$. Для $3$ "
              "доказательство то же: $3$ тоже делит каждое $10^i-1$. "
              "$\\blacksquare$",
              "Write $N=\\overline{a_ka_{k-1}\\ldots a_0}$, that is "
              "$N=\\sum_{i=0}^{k}a_i\\cdot 10^i$. Note that "
              "$10^i-1=\\underbrace{99\\ldots9}_{i}$ is divisible by $9$. "
              "Hence\n\n"
              "$$N-\\sum a_i=\\sum a_i(10^i-1)$$\n\n"
              "is a sum of multiples of nine, so a multiple of nine. By "
              "linearity $9\\mid N$ is equivalent to $9\\mid\\sum a_i$. For "
              "$3$ the proof is the same: $3$ also divides every $10^i-1$. "
              "$\\blacksquare$"),

        thm("Признак делимости на $11$", "The rule for $11$",
            "Число делится на $11$ тогда и только тогда, когда делится на "
            "$11$ его знакочередующаяся сумма цифр "
            "$a_0-a_1+a_2-a_3+\\ldots$ (справа налево).",
            "A number is divisible by $11$ if and only if its alternating "
            "digit sum $a_0-a_1+a_2-a_3+\\ldots$ (from the right) is "
            "divisible by $11$."),

        proof("Теперь полезно заметить, что $10\\equiv -1$ при делении на "
              "$11$, поэтому $10^i$ отличается от $(-1)^i$ на кратное $11$: "
              "действительно, $10^i-(-1)^i$ делится на $10-(-1)=11$. "
              "Следовательно\n\n"
              "$$N-\\sum a_i(-1)^i=\\sum a_i\\bigl(10^i-(-1)^i\\bigr)$$\n\n"
              "кратно $11$, и снова по линейности одно делится на $11$ "
              "одновременно с другим. $\\blacksquare$",
              "The useful observation now is that $10$ leaves remainder $-1$ "
              "on division by $11$, so $10^i$ differs from $(-1)^i$ by a "
              "multiple of $11$: indeed $10^i-(-1)^i$ is divisible by "
              "$10-(-1)=11$. Therefore\n\n"
              "$$N-\\sum a_i(-1)^i=\\sum a_i\\bigl(10^i-(-1)^i\\bigr)$$\n\n"
              "is a multiple of $11$, and by linearity again the two are "
              "divisible by $11$ together. $\\blacksquare$"),

        ex("При какой цифре $A$ число $\\overline{2A3}$ делится на $11$?",
           "For which digit $A$ is $\\overline{2A3}$ divisible by $11$?",
           ["Знакочередующаяся сумма справа налево: $3-A+2=5-A$.",
            "Нужно, чтобы $11\\mid 5-A$. При $0\\le A\\le 9$ величина $5-A$ "
            "лежит между $-4$ и $5$, значит единственная возможность — "
            "$5-A=0$.",
            "Отсюда $A=5$, и действительно $253=11\\cdot 23$."],
           ["The alternating sum from the right is $3-A+2=5-A$.",
            "We need $11\\mid 5-A$. For $0\\le A\\le 9$ the value $5-A$ lies "
            "between $-4$ and $5$, so the only possibility is $5-A=0$.",
            "Hence $A=5$, and indeed $253=11\\cdot 23$."],
           "$A=5$", "$A=5$"),

        warn("Признак для $4$ — это *две* последние цифры, а не последняя. "
             "Число $1234$ оканчивается на чётную цифру, но $34$ не делится "
             "на $4$, значит и $1234$ не делится. Причина: $100$ делится на "
             "$4$, но $10$ — нет.",
             "The rule for $4$ uses the last *two* digits, not the last one. "
             "$1234$ ends in an even digit, but $34$ is not divisible by $4$, "
             "so neither is $1234$. The reason: $100$ is divisible by $4$ "
             "but $10$ is not."),

        thm("Склейка взаимно простых признаков",
            "Combining coprime rules",
            "Если $\\gcd(m,n)=1$, то $mn\\mid N$ тогда и только тогда, когда "
            "$m\\mid N$ и $n\\mid N$.",
            "If $\\gcd(m,n)=1$, then $mn\\mid N$ if and only if $m\\mid N$ "
            "and $n\\mid N$."),

        warn("Условие взаимной простоты обязательно. Число $N=12$ делится и "
             "на $4$, и на $6$, но на $24$ не делится: $\\gcd(4,6)=2\\neq1$. "
             "Поэтому «делится на $4$ и на $6$» означает лишь «делится на "
             "$\\operatorname{lcm}(4,6)=12$».",
             "Coprimality is essential. $N=12$ is divisible by $4$ and by "
             "$6$, but not by $24$: $\\gcd(4,6)=2\\neq1$. So \"divisible by "
             "$4$ and by $6$\" only means \"divisible by "
             "$\\operatorname{lcm}(4,6)=12$\"."),
    ]),

    sec("Разложение на простые множители",
        "Breaking a number into primes", [
        dfn("Простое и составное", "Prime and composite",
            "Натуральное число $p>1$ называется **простым**, если его "
            "положительные делители — только $1$ и $p$. Число $n>1$, не "
            "являющееся простым, называется **составным**. Единица не "
            "относится ни к тем, ни к другим.",
            "A positive integer $p>1$ is **prime** if its only positive "
            "divisors are $1$ and $p$. An integer $n>1$ that is not prime is "
            "**composite**. One is neither."),

        thm("Основная теорема арифметики",
            "The fundamental theorem of arithmetic",
            "Каждое натуральное $n>1$ раскладывается в произведение простых, "
            "и такое разложение единственно с точностью до порядка "
            "множителей: $$n=p_1^{e_1}p_2^{e_2}\\cdots p_m^{e_m}.$$",
            "Every integer $n>1$ factors into primes, and the factorisation "
            "is unique up to the order of the factors: "
            "$$n=p_1^{e_1}p_2^{e_2}\\cdots p_m^{e_m}.$$"),

        note("Эту запись называют **каноническим разложением**. Почти вся "
             "теория делимости — это чтение канонического разложения: "
             "количество делителей, НОД, НОК, признак квадрата — всё "
             "выражается через показатели $e_i$.",
             "This is called the **canonical factorisation**. Almost all of "
             "divisibility theory is reading it off: the number of divisors, "
             "the GCD, the LCM, the test for a perfect square — everything is "
             "a statement about the exponents $e_i$."),

        fig(FIG_TREE,
            "Дерево множителей: порядок разбиения любой, а ответ один.",
            "A factor tree: the order of splitting is free, the answer is "
            "not."),

        thm("Делители через показатели", "Divisors from exponents",
            "Пусть $n=p_1^{e_1}\\cdots p_m^{e_m}$. Тогда $d\\mid n$ в точности "
            "тогда, когда $d=p_1^{f_1}\\cdots p_m^{f_m}$ при "
            "$0\\le f_i\\le e_i$.",
            "Let $n=p_1^{e_1}\\cdots p_m^{e_m}$. Then $d\\mid n$ exactly when "
            "$d=p_1^{f_1}\\cdots p_m^{f_m}$ with $0\\le f_i\\le e_i$."),

        proof("Если $f_i\\le e_i$ для всех $i$, то $n/d=\\prod p_i^{e_i-f_i}$ "
              "— целое число, значит $d\\mid n$. Обратно, пусть $d\\mid n$ и "
              "$n=dc$. Разложим $d$ и $c$ на простые; по единственности "
              "разложения произведение этих разложений должно совпасть с "
              "разложением $n$. Значит в $d$ не может встретиться простое, "
              "которого нет в $n$, и показатель каждого простого в $d$ не "
              "превосходит его показателя в $n$. $\\blacksquare$",
              "If $f_i\\le e_i$ for all $i$ then $n/d=\\prod p_i^{e_i-f_i}$ is "
              "an integer, so $d\\mid n$. Conversely let $d\\mid n$ with "
              "$n=dc$. Factor $d$ and $c$ into primes; by uniqueness the "
              "product of those factorisations must agree with that of $n$. So "
              "$d$ cannot contain a prime absent from $n$, and the exponent of "
              "each prime in $d$ is at most its exponent in $n$. "
              "$\\blacksquare$"),

        thm("Количество делителей", "The number of divisors",
            "Если $n=p_1^{e_1}\\cdots p_m^{e_m}$, то число положительных "
            "делителей равно "
            "$$d(n)=(e_1+1)(e_2+1)\\cdots(e_m+1).$$",
            "If $n=p_1^{e_1}\\cdots p_m^{e_m}$, the number of positive "
            "divisors is "
            "$$d(n)=(e_1+1)(e_2+1)\\cdots(e_m+1).$$"),

        proof("По предыдущей теореме делитель однозначно задаётся набором "
              "показателей $(f_1,\\ldots,f_m)$, и каждый $f_i$ выбирается "
              "независимо из $e_i+1$ значений $0,1,\\ldots,e_i$. По правилу "
              "произведения всего таких наборов $\\prod(e_i+1)$. "
              "$\\blacksquare$",
              "By the previous theorem a divisor is determined by the tuple of "
              "exponents $(f_1,\\ldots,f_m)$, and each $f_i$ is chosen "
              "independently from the $e_i+1$ values $0,1,\\ldots,e_i$. By the "
              "product rule there are $\\prod(e_i+1)$ such tuples. "
              "$\\blacksquare$"),

        ex("Сколько положительных делителей у числа $720$?",
           "How many positive divisors does $720$ have?",
           ["$720=72\\cdot 10=(8\\cdot 9)\\cdot(2\\cdot 5)=2^4\\cdot 3^2\\cdot 5$.",
            "Показатели: $4,2,1$.",
            "$d(720)=(4+1)(2+1)(1+1)=5\\cdot 3\\cdot 2=30$."],
           ["$720=72\\cdot 10=(8\\cdot 9)\\cdot(2\\cdot 5)=2^4\\cdot 3^2\\cdot 5$.",
            "The exponents are $4,2,1$.",
            "$d(720)=(4+1)(2+1)(1+1)=5\\cdot 3\\cdot 2=30$."],
           "$30$", "$30$"),

        thm("Признак точного квадрата", "The test for a perfect square",
            "Натуральное число является точным квадратом тогда и только "
            "тогда, когда все показатели в его каноническом разложении чётны. "
            "Равносильно: $d(n)$ нечётно тогда и только тогда, когда $n$ — "
            "точный квадрат.",
            "A positive integer is a perfect square if and only if every "
            "exponent in its canonical factorisation is even. Equivalently: "
            "$d(n)$ is odd if and only if $n$ is a perfect square."),

        proof("Если $n=k^2$ и $k=\\prod p_i^{g_i}$, то "
              "$n=\\prod p_i^{2g_i}$ — все показатели чётны. Обратно, если "
              "все $e_i=2g_i$, то $n=\\left(\\prod p_i^{g_i}\\right)^2$.\n\n"
              "Для второй формулировки: $d(n)=\\prod(e_i+1)$ нечётно тогда и "
              "только тогда, когда нечётен каждый множитель $e_i+1$, то есть "
              "когда каждое $e_i$ чётно. $\\blacksquare$",
              "If $n=k^2$ with $k=\\prod p_i^{g_i}$ then "
              "$n=\\prod p_i^{2g_i}$ — all exponents even. Conversely, if "
              "every $e_i=2g_i$ then $n=\\left(\\prod p_i^{g_i}\\right)^2$.\n\n"
              "For the second form: $d(n)=\\prod(e_i+1)$ is odd exactly when "
              "every factor $e_i+1$ is odd, that is when every $e_i$ is even. "
              "$\\blacksquare$"),

        idea("Чётность показателей", "Parity of the exponents",
             "Вопросы «умножьте на наименьшее число, чтобы получился "
             "квадрат», «сколько квадратов среди делителей», «может ли это "
             "быть квадратом» — все об одном: о чётности показателей. "
             "Разложите на простые и посмотрите, какие показатели нечётны.",
             "The questions \"multiply by the least number to get a square\", "
             "\"how many divisors are squares\", \"can this be a square\" are "
             "all the same question: parity of exponents. Factor into primes "
             "and see which exponents are odd."),

        ex("На какое наименьшее натуральное число нужно умножить $360$, чтобы "
           "получился точный квадрат?",
           "What is the smallest positive integer that $360$ must be "
           "multiplied by to give a perfect square?",
           ["$360=2^3\\cdot 3^2\\cdot 5^1$.",
            "Нечётные показатели — у $2$ (это $3$) и у $5$ (это $1$); "
            "показатель $3$ уже чётный.",
            "Чтобы сделать их чётными, достаточно домножить на $2\\cdot 5=10$.",
            "Проверка: $360\\cdot 10=3600=60^2$. $\\checkmark$"],
           ["$360=2^3\\cdot 3^2\\cdot 5^1$.",
            "The odd exponents belong to $2$ (namely $3$) and to $5$ (namely "
            "$1$); the exponent of $3$ is already even.",
            "To make them even it is enough to multiply by $2\\cdot 5=10$.",
            "Check: $360\\cdot 10=3600=60^2$. $\\checkmark$"],
           "$10$", "$10$"),

        thm("Произведение всех делителей",
            "The product of all the divisors",
            "Произведение всех положительных делителей числа $n$ равно "
            "$n^{d(n)/2}$.",
            "The product of all positive divisors of $n$ equals "
            "$n^{d(n)/2}$."),

        proof("Разобьём делители на пары $\\{d,\\,n/d\\}$: каждая пара даёт "
              "произведение $n$. Пар ровно $d(n)/2$ (если $n$ — квадрат, "
              "делитель $\\sqrt n$ образует «пару сам с собой» и даёт "
              "множитель $\\sqrt n=n^{1/2}$, что согласуется с формулой при "
              "нечётном $d(n)$). $\\blacksquare$",
              "Pair the divisors as $\\{d,\\,n/d\\}$: each pair multiplies to "
              "$n$. There are $d(n)/2$ pairs (if $n$ is a square, the divisor "
              "$\\sqrt n$ pairs with itself and contributes "
              "$\\sqrt n=n^{1/2}$, which matches the formula for odd $d(n)$). "
              "$\\blacksquare$"),
    ]),

    sec("НОД, НОК и алгоритм Евклида",
        "GCD, LCM and the Euclidean algorithm", [
        dfn("НОД и НОК", "GCD and LCM",
            "**$\\gcd(a,b)$** — наибольшее целое, делящее и $a$, и $b$. "
            "**$\\operatorname{lcm}(a,b)$** — наименьшее положительное целое, "
            "которое делится и на $a$, и на $b$. Числа называются **взаимно "
            "простыми**, если $\\gcd(a,b)=1$.",
            "**$\\gcd(a,b)$** is the largest integer dividing both $a$ and "
            "$b$. **$\\operatorname{lcm}(a,b)$** is the smallest positive "
            "integer divisible by both. Two numbers are **coprime** if "
            "$\\gcd(a,b)=1$."),

        thm("НОД и НОК через разложения",
            "GCD and LCM from the factorisations",
            "Если $a=\\prod p_i^{\\alpha_i}$ и $b=\\prod p_i^{\\beta_i}$ "
            "(показатель $0$ для отсутствующего простого), то "
            "$$\\gcd(a,b)=\\prod p_i^{\\min(\\alpha_i,\\beta_i)},\\qquad "
            "\\operatorname{lcm}(a,b)=\\prod p_i^{\\max(\\alpha_i,\\beta_i)}.$$",
            "If $a=\\prod p_i^{\\alpha_i}$ and $b=\\prod p_i^{\\beta_i}$ "
            "(exponent $0$ for a missing prime), then "
            "$$\\gcd(a,b)=\\prod p_i^{\\min(\\alpha_i,\\beta_i)},\\qquad "
            "\\operatorname{lcm}(a,b)=\\prod p_i^{\\max(\\alpha_i,\\beta_i)}.$$"),

        proof("Общий делитель $d$ должен делить и $a$, и $b$, поэтому "
              "показатель $p_i$ в $d$ не превосходит ни $\\alpha_i$, ни "
              "$\\beta_i$, то есть не превосходит минимума; взяв все "
              "показатели равными минимумам, мы получаем общий делитель и "
              "притом наибольший. Для НОК рассуждение зеркально: общее "
              "кратное должно иметь показатель не меньше каждого из двух, то "
              "есть не меньше максимума. $\\blacksquare$",
              "A common divisor $d$ must divide both $a$ and $b$, so the "
              "exponent of $p_i$ in $d$ is at most $\\alpha_i$ and at most "
              "$\\beta_i$, hence at most their minimum; taking every exponent "
              "equal to the minimum gives a common divisor, and the largest "
              "one. For the LCM the argument is mirrored: a common multiple "
              "must have each exponent at least both, hence at least the "
              "maximum. $\\blacksquare$"),

        fig(FIG_LATTICE,
            "Минимумы показателей дают НОД, максимумы — НОК.",
            "Minimums of the exponents give the GCD, maximums give the LCM."),

        thm("Связь НОД и НОК", "The GCD-LCM identity",
            "Для любых натуральных $a,b$ "
            "$$\\gcd(a,b)\\cdot\\operatorname{lcm}(a,b)=ab.$$",
            "For all positive integers $a,b$ "
            "$$\\gcd(a,b)\\cdot\\operatorname{lcm}(a,b)=ab.$$"),

        proof("Сравним показатели простого $p$ в левой и правой части. "
              "Слева это $\\min(\\alpha,\\beta)+\\max(\\alpha,\\beta)$, "
              "справа $\\alpha+\\beta$. Но для любых двух чисел "
              "$\\min+\\max=$ их сумма (меньшее плюс большее — это и есть "
              "оба числа). Показатели совпали у каждого простого, значит "
              "совпали и сами числа. $\\blacksquare$",
              "Compare the exponent of a prime $p$ on the two sides. On the "
              "left it is $\\min(\\alpha,\\beta)+\\max(\\alpha,\\beta)$, on "
              "the right $\\alpha+\\beta$. But for any two numbers "
              "$\\min+\\max$ equals their sum (the smaller plus the larger is "
              "just both of them). The exponents agree at every prime, so the "
              "numbers agree. $\\blacksquare$"),

        warn("Для трёх чисел аналогичная формула неверна: "
             "$\\gcd(a,b,c)\\cdot\\operatorname{lcm}(a,b,c)\\neq abc$ в общем "
             "случае. Проверьте на $a=b=c=2$: слева $2\\cdot 2=4$, справа "
             "$8$.",
             "The analogous formula fails for three numbers: "
             "$\\gcd(a,b,c)\\cdot\\operatorname{lcm}(a,b,c)\\neq abc$ in "
             "general. Test it on $a=b=c=2$: the left side is $2\\cdot 2=4$, "
             "the right side $8$."),

        lemma("Шаг Евклида", "The Euclidean step",
              "Если $a=bq+r$, то $\\gcd(a,b)=\\gcd(b,r)$.",
              "If $a=bq+r$, then $\\gcd(a,b)=\\gcd(b,r)$."),

        proof("Пусть $d\\mid b$ и $d\\mid r$. Тогда по линейности "
              "$d\\mid bq+r=a$, значит $d$ — общий делитель $a$ и $b$. "
              "Наоборот, если $d\\mid a$ и $d\\mid b$, то "
              "$d\\mid a-bq=r$. Итак, пары $(a,b)$ и $(b,r)$ имеют *одно и "
              "то же* множество общих делителей, а значит и один и тот же "
              "наибольший. $\\blacksquare$",
              "Suppose $d\\mid b$ and $d\\mid r$. Then by linearity "
              "$d\\mid bq+r=a$, so $d$ is a common divisor of $a$ and $b$. "
              "Conversely, if $d\\mid a$ and $d\\mid b$ then "
              "$d\\mid a-bq=r$. So the pairs $(a,b)$ and $(b,r)$ have the "
              "*same* set of common divisors, hence the same greatest one. "
              "$\\blacksquare$"),

        idea("Алгоритм Евклида", "The Euclidean algorithm",
             "Заменяйте пару $(a,b)$ на $(b,\\,a\\bmod b)$, пока второе число "
             "не станет нулём. Последнее ненулевое число и есть НОД. Это "
             "быстрее разложения на простые и работает для любых чисел — в "
             "том числе для выражений с буквой.",
             "Replace the pair $(a,b)$ by $(b,\\,a\\bmod b)$ until the second "
             "number is zero. The last nonzero number is the GCD. This is "
             "faster than factoring and works for any numbers — including "
             "expressions with a letter in them."),

        ex("Найдите $\\gcd(1365,3003)$.",
           "Find $\\gcd(1365,3003)$.",
           ["$3003=2\\cdot 1365+273$.",
            "$1365=5\\cdot 273+0$.",
            "Остаток ноль, значит НОД — последнее ненулевое число, $273$.",
            "Проверка разложением: $1365=3\\cdot 5\\cdot 7\\cdot 13$ и "
            "$3003=3\\cdot 7\\cdot 11\\cdot 13$; общие множители дают "
            "$3\\cdot 7\\cdot 13=273$. $\\checkmark$"],
           ["$3003=2\\cdot 1365+273$.",
            "$1365=5\\cdot 273+0$.",
            "The remainder is zero, so the GCD is the last nonzero number, "
            "$273$.",
            "Check by factoring: $1365=3\\cdot 5\\cdot 7\\cdot 13$ and "
            "$3003=3\\cdot 7\\cdot 11\\cdot 13$; the common factors give "
            "$3\\cdot 7\\cdot 13=273$. $\\checkmark$"],
           "$273$", "$273$"),

        idea("НОД выражений с буквой", "GCD of expressions in $n$",
             "Шаг Евклида работает и когда числа содержат переменную. Чтобы "
             "найти $\\gcd(2n+3,\\,n+1)$, вычтите: "
             "$(2n+3)-2(n+1)=1$. Значит НОД делит $1$, то есть равен $1$ при "
             "любом $n$. Такой подсчёт — стандартный ход в задачах «докажите, "
             "что дробь несократима».",
             "The Euclidean step works when the numbers contain a variable. "
             "To find $\\gcd(2n+3,\\,n+1)$, subtract: "
             "$(2n+3)-2(n+1)=1$. So the GCD divides $1$ and therefore equals "
             "$1$ for every $n$. This is the standard move in \"prove the "
             "fraction is irreducible\" problems."),
    ]),

    sec("Считаем кратные и простые внутри факториала",
        "Counting multiples, and primes inside a factorial", [
        thm("Сколько кратных в отрезке", "How many multiples in a range",
            "Количество чисел от $1$ до $N$, делящихся на $d$, равно "
            "$\\left\\lfloor\\dfrac Nd\\right\\rfloor$.",
            "The number of integers from $1$ to $N$ divisible by $d$ is "
            "$\\left\\lfloor\\dfrac Nd\\right\\rfloor$."),

        proof("Это числа $d,2d,3d,\\ldots,kd$, где $k$ — наибольшее целое с "
              "$kd\\le N$, то есть $k\\le N/d$. Наибольшее такое целое — это "
              "и есть $\\lfloor N/d\\rfloor$. $\\blacksquare$",
              "They are $d,2d,3d,\\ldots,kd$ where $k$ is the largest integer "
              "with $kd\\le N$, that is $k\\le N/d$. The largest such integer "
              "is precisely $\\lfloor N/d\\rfloor$. $\\blacksquare$"),

        ex("Сколько чисел от $1$ до $200$ делятся на $3$ или на $5$?",
           "How many integers from $1$ to $200$ are divisible by $3$ or "
           "by $5$?",
           ["Кратных трём: $\\lfloor 200/3\\rfloor=66$.",
            "Кратных пяти: $\\lfloor 200/5\\rfloor=40$.",
            "Кратных и тому, и другому — это кратные $15$: "
            "$\\lfloor 200/15\\rfloor=13$. Их мы посчитали дважды.",
            "Ответ: $66+40-13=93$."],
           ["Multiples of three: $\\lfloor 200/3\\rfloor=66$.",
            "Multiples of five: $\\lfloor 200/5\\rfloor=40$.",
            "Multiples of both are the multiples of $15$: "
            "$\\lfloor 200/15\\rfloor=13$. Those were counted twice.",
            "Answer: $66+40-13=93$."],
           "$93$", "$93$"),

        thm("Формула Лежандра", "Legendre's formula",
            "Показатель простого $p$ в разложении $n!$ равен "
            "$$\\left\\lfloor\\frac np\\right\\rfloor+"
            "\\left\\lfloor\\frac n{p^2}\\right\\rfloor+"
            "\\left\\lfloor\\frac n{p^3}\\right\\rfloor+\\cdots$$",
            "The exponent of a prime $p$ in $n!$ is "
            "$$\\left\\lfloor\\frac np\\right\\rfloor+"
            "\\left\\lfloor\\frac n{p^2}\\right\\rfloor+"
            "\\left\\lfloor\\frac n{p^3}\\right\\rfloor+\\cdots$$"),

        proof("Посчитаем, сколько множителей $p$ вносят числа "
              "$1,2,\\ldots,n$. Каждое кратное $p$ вносит хотя бы один — "
              "таких $\\lfloor n/p\\rfloor$. Каждое кратное $p^2$ вносит ещё "
              "один сверх первого — таких $\\lfloor n/p^2\\rfloor$. И так "
              "далее: кратное $p^k$ оказывается посчитанным ровно $k$ раз, "
              "в суммах с $1$-го по $k$-й. Сумма конечна, так как при "
              "$p^i>n$ слагаемые равны нулю. $\\blacksquare$",
              "Count how many factors of $p$ the numbers $1,2,\\ldots,n$ "
              "contribute. Every multiple of $p$ contributes at least one — "
              "there are $\\lfloor n/p\\rfloor$ of them. Every multiple of "
              "$p^2$ contributes one more on top of that — "
              "$\\lfloor n/p^2\\rfloor$ of them. And so on: a multiple of "
              "$p^k$ ends up counted exactly $k$ times, in the $1$st through "
              "$k$th sums. The sum is finite, because once $p^i>n$ the terms "
              "are zero. $\\blacksquare$"),

        ex("Сколькими нулями оканчивается $100!$?",
           "How many zeros does $100!$ end in?",
           ["Ноль на конце — это множитель $10=2\\cdot 5$, значит нас "
            "интересует $\\min$ показателей двойки и пятёрки.",
            "Пятёрок заведомо меньше, поэтому считаем только их: "
            "$\\lfloor 100/5\\rfloor+\\lfloor 100/25\\rfloor"
            "=20+4=24$ (дальше $125>100$).",
            "Значит $100!$ оканчивается на $24$ нуля."],
           ["A trailing zero is a factor $10=2\\cdot 5$, so we want the "
            "$\\min$ of the exponents of two and five.",
            "There are certainly fewer fives, so count only those: "
            "$\\lfloor 100/5\\rfloor+\\lfloor 100/25\\rfloor=20+4=24$ "
            "(after which $125>100$).",
            "So $100!$ ends in $24$ zeros."],
           "$24$", "$24$"),

        note("Двоек в $100!$ ровно "
             "$50+25+12+6+3+1=97$ — куда больше, чем пятёрок. Поэтому в "
             "задачах про нули на конце факториала всегда считают пятёрки.",
             "The exponent of two in $100!$ is $50+25+12+6+3+1=97$ — far more "
             "than the fives. This is why trailing-zero problems always count "
             "the fives."),
    ]),

    sec("Приёмы, которые решают задачи", "The moves that solve problems", [
        ol(["**Разложите на простые.** Почти любой вопрос про делители, НОД, "
            "НОК или квадраты читается прямо с показателей.",
            "**Используйте линейность:** из $d\\mid a$ и $d\\mid b$ следует "
            "$d\\mid ax+by$. Так доказывается большинство утверждений о "
            "делимости.",
            "**Вычитайте кратные,** чтобы упростить НОД: "
            "$\\gcd(a,b)=\\gcd(b,\\,a-qb)$. Работает и с буквами.",
            "**Доведите до $d\\mid$ маленького числа.** Если $d\\mid 2$, то "
            "$d\\in\\{1,2\\}$ — и задача закончилась.",
            "**Разбирайте по остаткам:** $n=3k,3k+1,3k+2$ — конечный список "
            "случаев.",
            "**Смотрите на чётность показателей,** когда речь о точных "
            "квадратах.",
            "**$d(n)=\\prod(e_i+1)$** — и обратно: по числу делителей можно "
            "восстановить возможные наборы показателей.",
            "**$\\gcd\\cdot\\operatorname{lcm}=ab$** — если известны три из "
            "четырёх величин, четвёртая находится делением.",
            "**Считайте кратные через $\\lfloor N/d\\rfloor$** и вычитайте "
            "посчитанное дважды.",
            "**В факториале считайте пятёрки,** если вопрос о нулях на "
            "конце."],
           ["**Factor into primes.** Nearly any question about divisors, GCD, "
            "LCM or squares can be read straight off the exponents.",
            "**Use linearity:** $d\\mid a$ and $d\\mid b$ give $d\\mid ax+by$. "
            "That is how most divisibility statements are proved.",
            "**Subtract multiples** to simplify a GCD: "
            "$\\gcd(a,b)=\\gcd(b,\\,a-qb)$. It works with letters too.",
            "**Drive it down to $d\\mid$ a small number.** If $d\\mid 2$ then "
            "$d\\in\\{1,2\\}$ — and the problem is over.",
            "**Split into remainder cases:** $n=3k,3k+1,3k+2$ is a finite "
            "list.",
            "**Watch the parity of the exponents** whenever perfect squares "
            "appear.",
            "**$d(n)=\\prod(e_i+1)$** — and backwards: the number of divisors "
            "tells you the possible exponent patterns.",
            "**$\\gcd\\cdot\\operatorname{lcm}=ab$** — knowing three of the "
            "four quantities gives the fourth by division.",
            "**Count multiples with $\\lfloor N/d\\rfloor$** and subtract "
            "whatever you counted twice.",
            "**In a factorial, count the fives** when the question is about "
            "trailing zeros."]),
    ]),
]

# ---------------------------------------------------------------- problems

PROBLEMS = [

    # ---- level 1 ---------------------------------------------------------
    prob("warm", 1,
         "Сколько положительных делителей у числа $36$?",
         "How many positive divisors does $36$ have?",
         "$36=2^2\\cdot 3^2$.",
         "$36=2^2\\cdot 3^2$.",
         "$d(36)=(2+1)(2+1)=9$. Это $1,2,3,4,6,9,12,18,36$.",
         "$d(36)=(2+1)(2+1)=9$. They are $1,2,3,4,6,9,12,18,36$."),

    prob("warm", 1,
         "Делится ли $4578$ на $3$?",
         "Is $4578$ divisible by $3$?",
         "Сложите цифры.",
         "Add the digits.",
         "$4+5+7+8=24$, и $3\\mid 24$, значит да. (На $9$ не делится: "
         "$9\\nmid 24$.)",
         "$4+5+7+8=24$ and $3\\mid 24$, so yes. (It is not divisible by $9$, "
         "since $9\\nmid 24$.)"),

    prob("warm", 1,
         "Найдите наименьшее натуральное число, делящееся и на $6$, и на $8$.",
         "Find the smallest positive integer divisible by both $6$ and $8$.",
         "Это НОК.",
         "This is the LCM.",
         "$6=2\\cdot 3$, $8=2^3$, значит "
         "$\\operatorname{lcm}=2^3\\cdot 3=24$.",
         "$6=2\\cdot 3$ and $8=2^3$, so "
         "$\\operatorname{lcm}=2^3\\cdot 3=24$."),

    prob("warm", 1,
         "Найдите $\\gcd(48,180)$.",
         "Find $\\gcd(48,180)$.",
         "Разложите оба числа или примените алгоритм Евклида.",
         "Factor both, or run the Euclidean algorithm.",
         "$48=2^4\\cdot 3$, $180=2^2\\cdot 3^2\\cdot 5$. Минимумы "
         "показателей: $2^2\\cdot 3=12$.",
         "$48=2^4\\cdot 3$, $180=2^2\\cdot 3^2\\cdot 5$. Taking minimums of "
         "the exponents: $2^2\\cdot 3=12$."),

    prob("warm", 1,
         "Разложите $360$ на простые множители.",
         "Factor $360$ into primes.",
         "Начните с $360=36\\cdot 10$.",
         "Start from $360=36\\cdot 10$.",
         "$360=36\\cdot 10=(2^2\\cdot 3^2)(2\\cdot 5)=2^3\\cdot 3^2\\cdot 5$.",
         "$360=36\\cdot 10=(2^2\\cdot 3^2)(2\\cdot 5)=2^3\\cdot 3^2\\cdot 5$."),

    prob("warm", 1,
         "Делится ли $1234$ на $4$?",
         "Is $1234$ divisible by $4$?",
         "Смотрите на две последние цифры.",
         "Look at the last two digits.",
         "Две последние цифры дают $34$, а $4\\nmid 34$. Значит нет — "
         "несмотря на чётную последнюю цифру.",
         "The last two digits form $34$, and $4\\nmid 34$. So no — despite "
         "the even final digit."),

    prob("warm", 1,
         "Найдите $\\operatorname{lcm}(9,12)$.",
         "Find $\\operatorname{lcm}(9,12)$.",
         "Максимумы показателей.",
         "Take maximums of the exponents.",
         "$9=3^2$, $12=2^2\\cdot 3$, значит "
         "$\\operatorname{lcm}=2^2\\cdot 3^2=36$.",
         "$9=3^2$ and $12=2^2\\cdot 3$, so "
         "$\\operatorname{lcm}=2^2\\cdot 3^2=36$."),

    prob("warm", 1,
         "Сколько чисел от $1$ до $100$ делятся на $7$?",
         "How many integers from $1$ to $100$ are divisible by $7$?",
         "$\\lfloor N/d\\rfloor$.",
         "$\\lfloor N/d\\rfloor$.",
         "$\\lfloor 100/7\\rfloor=14$ (от $7$ до $98$).",
         "$\\lfloor 100/7\\rfloor=14$ (from $7$ up to $98$)."),

    prob("warm", 1,
         "Делится ли $1331$ на $11$?",
         "Is $1331$ divisible by $11$?",
         "Знакочередующаяся сумма цифр.",
         "Alternating digit sum.",
         "Справа налево: $1-3+3-1=0$, и $11\\mid 0$, значит да. "
         "Действительно $1331=11^3$.",
         "From the right: $1-3+3-1=0$, and $11\\mid 0$, so yes. Indeed "
         "$1331=11^3$."),

    prob("warm", 1,
         "Сколько положительных делителей у числа $100$?",
         "How many positive divisors does $100$ have?",
         "$100=2^2\\cdot 5^2$.",
         "$100=2^2\\cdot 5^2$.",
         "$d(100)=(2+1)(2+1)=9$.",
         "$d(100)=(2+1)(2+1)=9$."),

    prob("warm", 1,
         "Найдите сумму всех положительных делителей числа $28$.",
         "Find the sum of all positive divisors of $28$.",
         "Выпишите делители.",
         "List the divisors.",
         "$1+2+4+7+14+28=56$. Заметьте: сумма делителей, *меньших* $28$, "
         "равна $28$ — такие числа называют совершенными.",
         "$1+2+4+7+14+28=56$. Note that the divisors *smaller* than $28$ sum "
         "to $28$ — such numbers are called perfect."),

    prob("warm", 1,
         "При какой цифре $A$ число $\\overline{2A4}$ делится на $9$?",
         "For which digit $A$ is $\\overline{2A4}$ divisible by $9$?",
         "Сумма цифр.",
         "Digit sum.",
         "$2+A+4=6+A$ должно делиться на $9$. При $0\\le A\\le 9$ сумма "
         "лежит между $6$ и $15$, значит она равна $9$ и $A=3$: число "
         "$234=9\\cdot 26$.",
         "$2+A+4=6+A$ must be divisible by $9$. For $0\\le A\\le 9$ the sum "
         "lies between $6$ and $15$, so it equals $9$ and $A=3$: the number "
         "is $234=9\\cdot 26$."),

    # ---- level 2 ---------------------------------------------------------
    prob("amc", 2,
         "Сколько положительных делителей у числа $2024$?",
         "How many positive divisors does $2024$ have?",
         "$2024=8\\cdot 253$.",
         "$2024=8\\cdot 253$.",
         "$2024=8\\cdot 253=2^3\\cdot 11\\cdot 23$, значит "
         "$d(2024)=(3+1)(1+1)(1+1)=16$.",
         "$2024=8\\cdot 253=2^3\\cdot 11\\cdot 23$, so "
         "$d(2024)=(3+1)(1+1)(1+1)=16$."),

    prob("amc", 2,
         "Найдите наименьшее число, большее $1000$ и делящееся на $36$.",
         "Find the smallest number greater than $1000$ that is divisible "
         "by $36$.",
         "Поделите $1000$ на $36$ с остатком.",
         "Divide $1000$ by $36$ with remainder.",
         "$1000=36\\cdot 27+28$, значит следующее кратное — "
         "$36\\cdot 28=1008$.",
         "$1000=36\\cdot 27+28$, so the next multiple is "
         "$36\\cdot 28=1008$."),

    prob("amc", 2,
         "Число при делении на $7$ даёт остаток $3$, а при делении на $5$ — "
         "остаток $2$. Найдите наименьшее такое натуральное число.",
         "A number leaves remainder $3$ on division by $7$ and remainder $2$ "
         "on division by $5$. Find the smallest such positive integer.",
         "Перебирайте числа вида $7k+3$.",
         "Run through the numbers of the form $7k+3$.",
         "Числа с остатком $3$ по модулю $7$: $3,10,17,24,\\ldots$ Из них "
         "первое с остатком $2$ по модулю $5$ — это $17$ "
         "($17=5\\cdot 3+2$). Ответ: $17$.",
         "The numbers leaving remainder $3$ mod $7$ are $3,10,17,24,\\ldots$ "
         "The first of these leaving remainder $2$ mod $5$ is $17$ "
         "($17=5\\cdot 3+2$). Answer: $17$."),

    prob("amc", 2,
         "Сколько чисел от $1$ до $200$ делятся на $3$ или на $5$?",
         "How many integers from $1$ to $200$ are divisible by $3$ or by $5$?",
         "Вычтите посчитанное дважды.",
         "Subtract what you counted twice.",
         "$\\lfloor 200/3\\rfloor+\\lfloor 200/5\\rfloor-"
         "\\lfloor 200/15\\rfloor=66+40-13=93$.",
         "$\\lfloor 200/3\\rfloor+\\lfloor 200/5\\rfloor-"
         "\\lfloor 200/15\\rfloor=66+40-13=93$."),

    prob("amc", 2,
         "Произведение двух натуральных чисел равно $1620$, а их НОД равен "
         "$6$. Найдите их НОК.",
         "The product of two positive integers is $1620$ and their GCD is "
         "$6$. Find their LCM.",
         "$\\gcd\\cdot\\operatorname{lcm}=ab$.",
         "$\\gcd\\cdot\\operatorname{lcm}=ab$.",
         "$\\operatorname{lcm}=\\dfrac{1620}{6}=270$.",
         "$\\operatorname{lcm}=\\dfrac{1620}{6}=270$."),

    prob("amc", 2,
         "Сколькими нулями оканчивается $100!$?",
         "How many zeros does $100!$ end in?",
         "Считайте пятёрки.",
         "Count the fives.",
         "$\\lfloor 100/5\\rfloor+\\lfloor 100/25\\rfloor=20+4=24$.",
         "$\\lfloor 100/5\\rfloor+\\lfloor 100/25\\rfloor=20+4=24$."),

    prob("amc", 2,
         "На какое наименьшее натуральное число нужно умножить $360$, чтобы "
         "получился точный квадрат?",
         "What is the smallest positive integer that $360$ must be multiplied "
         "by to give a perfect square?",
         "Сделайте все показатели чётными.",
         "Make every exponent even.",
         "$360=2^3\\cdot 3^2\\cdot 5$; нечётны показатели у $2$ и $5$, "
         "значит нужно домножить на $10$, и $3600=60^2$.",
         "$360=2^3\\cdot 3^2\\cdot 5$; the odd exponents belong to $2$ and "
         "$5$, so multiply by $10$, giving $3600=60^2$."),

    prob("amc", 2,
         "Сколько двузначных чисел делятся и на $4$, и на $6$?",
         "How many two-digit numbers are divisible by both $4$ and $6$?",
         "Это кратные НОК, а не произведения.",
         "These are multiples of the LCM, not of the product.",
         "$\\operatorname{lcm}(4,6)=12$. Двузначные кратные $12$: "
         "$12,24,\\ldots,96$, то есть $12k$ при $1\\le k\\le 8$ — всего "
         "$8$ чисел.",
         "$\\operatorname{lcm}(4,6)=12$. The two-digit multiples of $12$ are "
         "$12,24,\\ldots,96$, i.e. $12k$ for $1\\le k\\le 8$ — that is $8$ "
         "numbers."),

    prob("amc", 2,
         "Если $3\\mid n$ и $4\\mid n$, обязательно ли $12\\mid n$? А если "
         "$4\\mid n$ и $6\\mid n$, обязательно ли $24\\mid n$?",
         "If $3\\mid n$ and $4\\mid n$, must $12\\mid n$? And if $4\\mid n$ "
         "and $6\\mid n$, must $24\\mid n$?",
         "Всё решает НОД двух делителей.",
         "The GCD of the two divisors decides it.",
         "В первом случае да: $\\gcd(3,4)=1$, поэтому $3\\cdot 4=12$ делит "
         "$n$.\n\nВо втором — нет: $\\gcd(4,6)=2\\neq1$, и из делимости на "
         "$4$ и $6$ следует лишь делимость на "
         "$\\operatorname{lcm}(4,6)=12$. Контрпример: $n=12$.",
         "In the first case yes: $\\gcd(3,4)=1$, so $3\\cdot 4=12$ "
         "divides $n$.\n\nIn the second, no: $\\gcd(4,6)=2\\neq1$, and "
         "divisibility by $4$ and $6$ only forces divisibility by "
         "$\\operatorname{lcm}(4,6)=12$. Counterexample: $n=12$."),

    prob("amc", 2,
         "Сколькими нулями оканчивается число $2^{10}\\cdot 5^8$?",
         "How many zeros does $2^{10}\\cdot 5^8$ end in?",
         "Ноль — это пара $2\\cdot 5$.",
         "A zero is a pair $2\\cdot 5$.",
         "Число нулей равно $\\min(10,8)=8$: "
         "$2^{10}5^8=10^8\\cdot 2^2=400\\,000\\,000$.",
         "The number of zeros is $\\min(10,8)=8$: "
         "$2^{10}5^8=10^8\\cdot 2^2=400{,}000{,}000$."),

    prob("amc", 2,
         "Найдите наименьшее натуральное число, которое при делении на "
         "$2,3,4,5,6$ даёт остаток $1$.",
         "Find the smallest positive integer that leaves remainder $1$ on "
         "division by each of $2,3,4,5,6$.",
         "Вычтите единицу — и остатки исчезнут.",
         "Subtract one and the remainders vanish.",
         "Если $n-1$ делится на все пять чисел, то $n-1$ кратно "
         "$\\operatorname{lcm}(2,3,4,5,6)=60$. Наименьшее положительное "
         "$n>1$ — это $n=61$.",
         "If $n-1$ is divisible by all five numbers then $n-1$ is a multiple "
         "of $\\operatorname{lcm}(2,3,4,5,6)=60$. The smallest such $n>1$ is "
         "$n=61$."),

    prob("amc", 2,
         "Какое наибольшее число подарочных наборов можно собрать из $48$ "
         "конфет и $36$ печений так, чтобы все наборы были одинаковы и ничего "
         "не осталось?",
         "What is the largest number of identical gift bags that can be made "
         "from $48$ sweets and $36$ biscuits with nothing left over?",
         "Количество наборов должно делить и $48$, и $36$.",
         "The number of bags must divide both $48$ and $36$.",
         "Это $\\gcd(48,36)=12$ наборов: в каждом $4$ конфеты и $3$ "
         "печенья.",
         "That is $\\gcd(48,36)=12$ bags, each with $4$ sweets and $3$ "
         "biscuits."),

    prob("amc", 2,
         "Сколько положительных делителей числа $1800$ являются точными "
         "квадратами?",
         "How many positive divisors of $1800$ are perfect squares?",
         "Показатели делителя должны быть чётными.",
         "The divisor's exponents must all be even.",
         "$1800=2^3\\cdot 3^2\\cdot 5^2$. Для квадрата показатель двойки "
         "выбирается из $\\{0,2\\}$, тройки — из $\\{0,2\\}$, пятёрки — из "
         "$\\{0,2\\}$. Итого $2\\cdot 2\\cdot 2=8$ квадратов: "
         "$1,4,9,25,36,100,225,900$.",
         "$1800=2^3\\cdot 3^2\\cdot 5^2$. For a square the exponent of two "
         "comes from $\\{0,2\\}$, of three from $\\{0,2\\}$, of five from "
         "$\\{0,2\\}$. That is $2\\cdot 2\\cdot 2=8$ squares: "
         "$1,4,9,25,36,100,225,900$."),

    # ---- level 3 ---------------------------------------------------------
    prob("amch", 3,
         "Какие натуральные числа имеют ровно три положительных делителя?",
         "Which positive integers have exactly three positive divisors?",
         "$d(n)=3$, а $3$ — простое число.",
         "$d(n)=3$, and $3$ is prime.",
         "$d(n)=\\prod(e_i+1)=3$. Так как $3$ просто, произведение состоит из "
         "единственного множителя, равного $3$, значит у $n$ ровно одно "
         "простое и $e+1=3$, то есть $e=2$.\n\nЗначит $n=p^2$ — квадрат "
         "простого: $4,9,25,49,121,\\ldots$ Их делители — $1,p,p^2$.",
         "$d(n)=\\prod(e_i+1)=3$. Since $3$ is prime the product has a single "
         "factor, equal to $3$, so $n$ has exactly one prime and $e+1=3$, "
         "i.e. $e=2$.\n\nSo $n=p^2$, the square of a prime: "
         "$4,9,25,49,121,\\ldots$ Its divisors are $1,p,p^2$."),

    prob("amch", 3,
         "Найдите наименьшее натуральное число, имеющее ровно $12$ "
         "положительных делителей.",
         "Find the smallest positive integer with exactly $12$ positive "
         "divisors.",
         "Переберите разложения числа $12$ в произведение множителей "
         "$e_i+1$.",
         "Run through the ways of writing $12$ as a product of factors "
         "$e_i+1$.",
         "Нужны показатели с $\\prod(e_i+1)=12$. Варианты: "
         "$12=12$ даёт $p^{11}\\ge 2^{11}=2048$; "
         "$12=6\\cdot 2$ даёт $p^5q\\ge 2^5\\cdot 3=96$; "
         "$12=4\\cdot 3$ даёт $p^3q^2\\ge 2^3\\cdot 3^2=72$; "
         "$12=3\\cdot 2\\cdot 2$ даёт $p^2qr\\ge 2^2\\cdot 3\\cdot 5=60$.\n\n"
         "В каждом варианте наименьшее значение получается, когда большие "
         "показатели стоят у меньших простых. Минимум из "
         "$2048,96,72,60$ — это $\\mathbf{60}$.",
         "We need exponents with $\\prod(e_i+1)=12$. The options: "
         "$12=12$ gives $p^{11}\\ge 2^{11}=2048$; "
         "$12=6\\cdot 2$ gives $p^5q\\ge 2^5\\cdot 3=96$; "
         "$12=4\\cdot 3$ gives $p^3q^2\\ge 2^3\\cdot 3^2=72$; "
         "$12=3\\cdot 2\\cdot 2$ gives "
         "$p^2qr\\ge 2^2\\cdot 3\\cdot 5=60$.\n\n"
         "In each case the least value comes from putting the larger "
         "exponents on the smaller primes. The minimum of $2048,96,72,60$ is "
         "$\\mathbf{60}$."),

    prob("amch", 3,
         "Докажите, что дробь $\\dfrac{2n+3}{n+1}$ несократима при любом "
         "натуральном $n$.",
         "Prove that $\\dfrac{2n+3}{n+1}$ is irreducible for every positive "
         "integer $n$.",
         "Вычтите из числителя удвоенный знаменатель.",
         "Subtract twice the denominator from the numerator.",
         "Пусть $d=\\gcd(2n+3,\\,n+1)$. Тогда $d$ делит и $2n+3$, и "
         "$2(n+1)=2n+2$, а значит по линейности делит их разность:\n\n"
         "$$(2n+3)-(2n+2)=1.$$\n\n"
         "Из $d\\mid 1$ и $d>0$ следует $d=1$. $\\blacksquare$",
         "Let $d=\\gcd(2n+3,\\,n+1)$. Then $d$ divides $2n+3$ and "
         "$2(n+1)=2n+2$, so by linearity it divides their difference:\n\n"
         "$$(2n+3)-(2n+2)=1.$$\n\n"
         "From $d\\mid 1$ and $d>0$ we get $d=1$. $\\blacksquare$"),

    prob("amch", 3,
         "Какова наибольшая степень тройки, делящая $50!$?",
         "What is the highest power of three dividing $50!$?",
         "Формула Лежандра.",
         "Legendre's formula.",
         "$\\lfloor 50/3\\rfloor+\\lfloor 50/9\\rfloor+"
         "\\lfloor 50/27\\rfloor=16+5+1=22$ (далее $81>50$). Значит "
         "наибольшая степень — $3^{22}$.",
         "$\\lfloor 50/3\\rfloor+\\lfloor 50/9\\rfloor+"
         "\\lfloor 50/27\\rfloor=16+5+1=22$ (then $81>50$). So the highest "
         "power is $3^{22}$."),

    prob("kang", 3,
         "Докажите, что сумма любых пяти подряд идущих целых чисел делится на "
         "$5$. Верно ли, что сумма любых четырёх подряд идущих делится на "
         "$4$?",
         "Prove that the sum of any five consecutive integers is divisible by "
         "$5$. Is the sum of any four consecutive integers divisible by $4$?",
         "Запишите числа симметрично относительно среднего.",
         "Write the numbers symmetrically about the middle one.",
         "Пять чисел: $n-2,n-1,n,n+1,n+2$. Их сумма равна $5n$ — кратна "
         "пяти при любом $n$. $\\blacksquare$\n\n"
         "Четыре числа: $n,n+1,n+2,n+3$. Сумма равна $4n+6$, и остаток при "
         "делении на $4$ равен $2$ при любом $n$. Значит сумма четырёх "
         "подряд идущих чисел **никогда** не делится на $4$. (Причина: у "
         "чётного количества слагаемых нет среднего элемента.)",
         "Five numbers: $n-2,n-1,n,n+1,n+2$. Their sum is $5n$ — a multiple "
         "of five for every $n$. $\\blacksquare$\n\n"
         "Four numbers: $n,n+1,n+2,n+3$. The sum is $4n+6$, which leaves "
         "remainder $2$ on division by $4$ for every $n$. So the sum of four "
         "consecutive integers is **never** divisible by $4$. (The reason: an "
         "even count of terms has no middle element.)"),

    prob("kang", 3,
         "Найдите все числа между $300$ и $400$, делящиеся и на $7$, и на "
         "$8$.",
         "Find every number between $300$ and $400$ divisible by both $7$ "
         "and $8$.",
         "$\\gcd(7,8)=1$.",
         "$\\gcd(7,8)=1$.",
         "Так как $7$ и $8$ взаимно просты, число должно делиться на $56$. "
         "Кратные $56$: $\\ldots,280,336,392,448,\\ldots$ В промежутке "
         "$(300;400)$ лежат $336$ и $392$.",
         "Since $7$ and $8$ are coprime, the number must be divisible by "
         "$56$. The multiples of $56$ are $\\ldots,280,336,392,448,\\ldots$ "
         "In $(300,400)$ we get $336$ and $392$."),

    prob("amch", 3,
         "Сколько упорядоченных пар натуральных чисел $(a,b)$ удовлетворяют "
         "условиям $ab=72$ и $\\gcd(a,b)=1$?",
         "How many ordered pairs of positive integers $(a,b)$ satisfy "
         "$ab=72$ and $\\gcd(a,b)=1$?",
         "Каждая степень простого целиком уходит к одному из двух.",
         "Each prime power goes entirely to one of the two.",
         "$72=2^3\\cdot 3^2$. Условие $\\gcd(a,b)=1$ означает, что ни одно "
         "простое не встречается в обоих числах, поэтому множитель $2^3$ "
         "целиком достаётся $a$ или $b$ — два варианта, и независимо от "
         "этого $3^2$ тоже — ещё два.\n\n"
         "Итого $2\\cdot 2=4$ пары: $(1,72),(8,9),(9,8),(72,1)$.",
         "$72=2^3\\cdot 3^2$. The condition $\\gcd(a,b)=1$ says no prime "
         "occurs in both numbers, so the factor $2^3$ goes wholly to $a$ or "
         "wholly to $b$ — two choices — and independently so does $3^2$ — two "
         "more.\n\nThat makes $2\\cdot 2=4$ pairs: "
         "$(1,72),(8,9),(9,8),(72,1)$."),

    prob("amch", 3,
         "Произведение всех положительных делителей числа $36$ — чему оно "
         "равно?",
         "What is the product of all the positive divisors of $36$?",
         "Разбейте делители на пары $d$ и $36/d$.",
         "Pair the divisors as $d$ and $36/d$.",
         "$d(36)=9$, значит произведение равно "
         "$36^{9/2}=6^{9}=10\\,077\\,696$.\n\nПроверка попарно: "
         "$(1,36),(2,18),(3,12),(4,9)$ дают по $36$ каждая — это $36^4$ — а "
         "непарный делитель $6=\\sqrt{36}$ даёт ещё множитель $6$; итого "
         "$36^4\\cdot 6=6^9$. $\\checkmark$",
         "$d(36)=9$, so the product is $36^{9/2}=6^{9}=10{,}077{,}696$.\n\n"
         "Check by pairing: $(1,36),(2,18),(3,12),(4,9)$ each multiply to "
         "$36$ — that is $36^4$ — and the unpaired divisor "
         "$6=\\sqrt{36}$ contributes a further $6$; in all "
         "$36^4\\cdot 6=6^9$. $\\checkmark$"),

    prob("kang5", 3,
         "У числа $n^2$ ровно $15$ положительных делителей. Сколько делителей "
         "может быть у $n$?",
         "The number $n^2$ has exactly $15$ positive divisors. How many "
         "divisors can $n$ have?",
         "У квадрата все показатели чётны.",
         "Every exponent of a square is even.",
         "Пусть $n=\\prod p_i^{e_i}$, тогда $n^2=\\prod p_i^{2e_i}$ и "
         "$d(n^2)=\\prod(2e_i+1)=15$. Каждый множитель нечётен, и "
         "$15=15$ или $15=3\\cdot 5$.\n\n"
         "Случай $15=15$: $2e+1=15$, то есть $e=7$, значит $n=p^7$ и "
         "$d(n)=8$.\n\n"
         "Случай $15=3\\cdot 5$: $2e_1+1=3$ и $2e_2+1=5$, то есть $e_1=1$, "
         "$e_2=2$, значит $n=p\\,q^2$ и $d(n)=2\\cdot 3=6$.\n\n"
         "Ответ: $6$ или $8$. (Примеры: $n=2^7=128$ и $n=2\\cdot 3^2=18$.)",
         "Write $n=\\prod p_i^{e_i}$, so $n^2=\\prod p_i^{2e_i}$ and "
         "$d(n^2)=\\prod(2e_i+1)=15$. Every factor is odd, and $15=15$ or "
         "$15=3\\cdot 5$.\n\n"
         "Case $15=15$: $2e+1=15$, so $e=7$, giving $n=p^7$ and "
         "$d(n)=8$.\n\n"
         "Case $15=3\\cdot 5$: $2e_1+1=3$ and $2e_2+1=5$, so $e_1=1$, "
         "$e_2=2$, giving $n=p\\,q^2$ and $d(n)=2\\cdot 3=6$.\n\n"
         "Answer: $6$ or $8$. (Examples: $n=2^7=128$ and "
         "$n=2\\cdot 3^2=18$.)"),

    prob("amch", 3,
         "Найдите наименьшее натуральное $n$, для которого $n!$ делится на "
         "$2^{10}$.",
         "Find the smallest positive integer $n$ for which $n!$ is divisible "
         "by $2^{10}$.",
         "Считайте двойки по формуле Лежандра и увеличивайте $n$.",
         "Count the twos by Legendre's formula and increase $n$.",
         "Показатель двойки в $n!$ равен "
         "$\\lfloor n/2\\rfloor+\\lfloor n/4\\rfloor+\\lfloor n/8\\rfloor"
         "+\\cdots$\n\nПри $n=11$: $5+2+1=8<10$.\n\n"
         "При $n=12$: $6+3+1=10\\ge 10$. $\\checkmark$\n\n"
         "Так как показатель не убывает с ростом $n$, ответ — $n=12$.",
         "The exponent of two in $n!$ is "
         "$\\lfloor n/2\\rfloor+\\lfloor n/4\\rfloor+\\lfloor n/8\\rfloor"
         "+\\cdots$\n\nFor $n=11$: $5+2+1=8<10$.\n\n"
         "For $n=12$: $6+3+1=10\\ge 10$. $\\checkmark$\n\n"
         "Since the exponent never decreases as $n$ grows, the answer is "
         "$n=12$."),

    prob("kang", 3,
         "Шестизначное число записано цифрами $\\overline{3A5B92}$ и делится "
         "на $9$, причём $A=B$. Найдите $A$.",
         "A six-digit number is written $\\overline{3A5B92}$, is divisible by "
         "$9$, and has $A=B$. Find $A$.",
         "Сложите все цифры, помня, что $A$ входит дважды.",
         "Add all the digits, remembering $A$ appears twice.",
         "Сумма цифр равна $3+A+5+A+9+2=19+2A$. Нужно, чтобы $9$ делило "
         "$19+2A$. При $0\\le A\\le 9$ величина $19+2A$ лежит между $19$ и "
         "$37$, значит она равна $27$ или $36$. Из $19+2A=27$ получаем "
         "$A=4$; $19+2A=36$ даёт нецелое $A$. Ответ: $A=4$ (число "
         "$345492$).",
         "The digit sum is $3+A+5+A+9+2=19+2A$. We need $9$ to divide "
         "$19+2A$. For $0\\le A\\le 9$ the value $19+2A$ lies between $19$ "
         "and $37$, so it is $27$ or $36$. From $19+2A=27$ we get $A=4$; "
         "$19+2A=36$ gives a non-integer $A$. Answer: $A=4$ (the number "
         "$345492$)."),

    # ---- level 4 ---------------------------------------------------------
    prob("aops", 4,
         "Докажите, что для любых натуральных $a,b$ выполнено "
         "$\\gcd(a,b)\\cdot\\operatorname{lcm}(a,b)=ab$.",
         "Prove that $\\gcd(a,b)\\cdot\\operatorname{lcm}(a,b)=ab$ for all "
         "positive integers $a,b$.",
         "Сравните показатели каждого простого в двух частях равенства.",
         "Compare the exponent of each prime on the two sides.",
         "Запишем $a=\\prod p_i^{\\alpha_i}$ и $b=\\prod p_i^{\\beta_i}$, "
         "взяв объединение простых и показатель $0$ там, где простого нет. "
         "По теореме о НОД и НОК через разложения показатель $p_i$ равен "
         "$\\min(\\alpha_i,\\beta_i)$ в НОД и $\\max(\\alpha_i,\\beta_i)$ в "
         "НОК.\n\n"
         "В левой части равенства показатель $p_i$ равен "
         "$\\min(\\alpha_i,\\beta_i)+\\max(\\alpha_i,\\beta_i)$, в правой — "
         "$\\alpha_i+\\beta_i$. Но для любых двух чисел меньшее плюс большее "
         "равно их сумме, то есть "
         "$\\min(\\alpha,\\beta)+\\max(\\alpha,\\beta)=\\alpha+\\beta$.\n\n"
         "Показатели совпадают у каждого простого, а по основной теореме "
         "арифметики этого достаточно, чтобы числа были равны. "
         "$\\blacksquare$",
         "Write $a=\\prod p_i^{\\alpha_i}$ and $b=\\prod p_i^{\\beta_i}$, "
         "using the union of the primes and exponent $0$ where a prime is "
         "absent. By the theorem on GCD and LCM from factorisations, the "
         "exponent of $p_i$ is $\\min(\\alpha_i,\\beta_i)$ in the GCD and "
         "$\\max(\\alpha_i,\\beta_i)$ in the LCM.\n\n"
         "On the left-hand side the exponent of $p_i$ is "
         "$\\min(\\alpha_i,\\beta_i)+\\max(\\alpha_i,\\beta_i)$; on the right "
         "it is $\\alpha_i+\\beta_i$. But for any two numbers the smaller "
         "plus the larger is their sum, i.e. "
         "$\\min(\\alpha,\\beta)+\\max(\\alpha,\\beta)=\\alpha+\\beta$.\n\n"
         "The exponents agree at every prime, and by the fundamental theorem "
         "of arithmetic that is enough for the numbers to be equal. "
         "$\\blacksquare$"),

    prob("aops", 4,
         "Найдите все натуральные $n$, для которых $n+1$ делит $n^2+1$.",
         "Find every positive integer $n$ such that $n+1$ divides $n^2+1$.",
         "Разделите $n^2+1$ на $n+1$ с остатком.",
         "Divide $n^2+1$ by $n+1$ with remainder.",
         "Заметим, что $n^2+1=(n+1)(n-1)+2$. Действительно, "
         "$(n+1)(n-1)=n^2-1$.\n\n"
         "Первое слагаемое кратно $n+1$, поэтому по линейности $n+1$ делит "
         "$n^2+1$ тогда и только тогда, когда $n+1$ делит $2$.\n\n"
         "При натуральном $n$ имеем $n+1\\ge 2$, значит $n+1=2$ и $n=1$. "
         "Проверка: $n^2+1=2$ делится на $n+1=2$. $\\checkmark$",
         "Note that $n^2+1=(n+1)(n-1)+2$, since $(n+1)(n-1)=n^2-1$.\n\n"
         "The first term is a multiple of $n+1$, so by linearity $n+1$ "
         "divides $n^2+1$ if and only if $n+1$ divides $2$.\n\n"
         "For a positive integer $n$ we have $n+1\\ge 2$, so $n+1=2$ and "
         "$n=1$. Check: $n^2+1=2$ is divisible by $n+1=2$. $\\checkmark$"),

    prob("aops", 4,
         "Докажите, что число положительных делителей $d(n)$ нечётно тогда и "
         "только тогда, когда $n$ — точный квадрат.",
         "Prove that the number of positive divisors $d(n)$ is odd if and "
         "only if $n$ is a perfect square.",
         "Два способа: через показатели или через разбиение делителей на "
         "пары.",
         "Two routes: through the exponents, or by pairing the divisors.",
         "**Через показатели.** Если $n=\\prod p_i^{e_i}$, то "
         "$d(n)=\\prod(e_i+1)$. Произведение нечётно тогда и только тогда, "
         "когда нечётен каждый множитель, то есть когда каждое $e_i$ чётно — "
         "а это в точности признак точного квадрата.\n\n"
         "**Через пары.** Сопоставим делителю $d$ делитель $n/d$. Это "
         "разбивает все делители на пары, кроме случая $d=n/d$, то есть "
         "$d^2=n$. Такой непарный делитель существует ровно тогда, когда $n$ "
         "— точный квадрат, и тогда он единственен ($d=\\sqrt n$). Значит "
         "$d(n)$ нечётно ровно в этом случае. $\\blacksquare$",
         "**Through the exponents.** If $n=\\prod p_i^{e_i}$ then "
         "$d(n)=\\prod(e_i+1)$. A product is odd exactly when every factor is "
         "odd, that is when every $e_i$ is even — which is precisely the test "
         "for a perfect square.\n\n"
         "**By pairing.** Match each divisor $d$ with the divisor $n/d$. This "
         "splits the divisors into pairs except when $d=n/d$, i.e. $d^2=n$. "
         "Such an unpaired divisor exists exactly when $n$ is a perfect "
         "square, and then it is unique ($d=\\sqrt n$). So $d(n)$ is odd in "
         "exactly that case. $\\blacksquare$"),

    prob("aops", 4,
         "Сколькими нулями оканчивается $2024!$?",
         "How many zeros does $2024!$ end in?",
         "Считайте пятёрки по формуле Лежандра до $5^4$.",
         "Count the fives by Legendre's formula up to $5^4$.",
         "$\\lfloor 2024/5\\rfloor=404$, "
         "$\\lfloor 2024/25\\rfloor=80$, "
         "$\\lfloor 2024/125\\rfloor=16$, "
         "$\\lfloor 2024/625\\rfloor=3$, а $3125>2024$.\n\n"
         "Сумма: $404+80+16+3=503$. Двоек заведомо больше, поэтому ответ — "
         "$503$ нуля.",
         "$\\lfloor 2024/5\\rfloor=404$, "
         "$\\lfloor 2024/25\\rfloor=80$, "
         "$\\lfloor 2024/125\\rfloor=16$, "
         "$\\lfloor 2024/625\\rfloor=3$, and $3125>2024$.\n\n"
         "The sum is $404+80+16+3=503$. There are certainly more twos, so the "
         "answer is $503$ zeros."),

    prob("chal", 4,
         "Найдите все простые $p$, для которых числа $p$, $p+2$ и $p+4$ тоже "
         "простые.",
         "Find every prime $p$ for which $p$, $p+2$ and $p+4$ are all prime.",
         "Разберите остатки по модулю $3$.",
         "Split into remainder cases modulo $3$.",
         "Три числа $p,p+2,p+4$ дают по модулю $3$ остатки $p,p+2,p+1$ — то "
         "есть *все три* возможных остатка $0,1,2$ в каком-то порядке. "
         "Значит одно из них делится на $3$.\n\n"
         "Простое число, делящееся на $3$, — это только само $3$. Поэтому "
         "одно из трёх чисел равно $3$, а так как $p$ — наименьшее из них, "
         "остаётся $p=3$.\n\n"
         "Проверка: $3,5,7$ — все простые. $\\checkmark$ Ответ: "
         "единственное $p=3$.",
         "Modulo $3$ the three numbers $p,p+2,p+4$ leave the remainders "
         "$p,p+2,p+1$ — that is *all three* possible remainders $0,1,2$ in "
         "some order. So one of them is divisible by $3$.\n\n"
         "The only prime divisible by $3$ is $3$ itself. So one of the three "
         "numbers equals $3$, and since $p$ is the smallest of them, $p=3$.\n\n"
         "Check: $3,5,7$ are all prime. $\\checkmark$ Answer: $p=3$ only."),

    prob("chal", 4,
         "Докажите, что если $7$ делит $a^2+b^2$, то $7$ делит и $a$, и $b$.",
         "Prove that if $7$ divides $a^2+b^2$ then $7$ divides both $a$ "
         "and $b$.",
         "Выпишите все возможные остатки квадрата по модулю $7$.",
         "List every possible remainder of a square modulo $7$.",
         "Переберём остатки $a\\bmod 7\\in\\{0,1,2,3,4,5,6\\}$ и посчитаем "
         "$a^2\\bmod 7$:\n\n"
         "$0^2=0$, $1^2=1$, $2^2=4$, $3^2=2$, $4^2=2$, $5^2=4$, $6^2=1$.\n\n"
         "Значит квадрат по модулю $7$ даёт только остатки "
         "$\\{0,1,2,4\\}$.\n\n"
         "Нужно, чтобы сумма двух таких остатков делилась на $7$, то есть "
         "была равна $0$ или $7$. Проверим все суммы двух элементов "
         "$\\{0,1,2,4\\}$: $0,1,2,4,2,3,5,4,6,8$. Из них делится на $7$ "
         "только $0$, и получается она единственным способом — $0+0$.\n\n"
         "Значит $a^2\\equiv 0$ и $b^2\\equiv 0$ по модулю $7$. Так как $7$ "
         "просто, из $7\\mid a^2=a\\cdot a$ следует $7\\mid a$; то же для "
         "$b$. $\\blacksquare$",
         "Run through $a\\bmod 7\\in\\{0,1,2,3,4,5,6\\}$ and compute "
         "$a^2\\bmod 7$:\n\n"
         "$0^2=0$, $1^2=1$, $2^2=4$, $3^2=2$, $4^2=2$, $5^2=4$, $6^2=1$.\n\n"
         "So a square modulo $7$ leaves only the remainders "
         "$\\{0,1,2,4\\}$.\n\n"
         "We need the sum of two such remainders to be divisible by $7$, i.e. "
         "equal to $0$ or $7$. The sums of two elements of $\\{0,1,2,4\\}$ "
         "are $0,1,2,4,2,3,5,4,6,8$. Only $0$ is divisible by $7$, and it "
         "arises in one way only — as $0+0$.\n\n"
         "Hence $a^2\\equiv 0$ and $b^2\\equiv 0$ modulo $7$. Since $7$ is "
         "prime, $7\\mid a^2=a\\cdot a$ gives $7\\mid a$; likewise for $b$. "
         "$\\blacksquare$"),

    prob("chal", 4,
         "Найдите все натуральные $n$, для которых сумма "
         "$1+2+\\cdots+n$ делится на $n+1$.",
         "Find every positive integer $n$ for which $1+2+\\cdots+n$ is "
         "divisible by $n+1$.",
         "Запишите сумму формулой и сократите.",
         "Write the sum in closed form and cancel.",
         "Сумма равна $S=\\dfrac{n(n+1)}2$. Тогда\n\n"
         "$$\\frac{S}{n+1}=\\frac{n(n+1)}{2(n+1)}=\\frac n2.$$\n\n"
         "Это целое число тогда и только тогда, когда $n$ чётно.\n\n"
         "Ответ: все чётные $n$. Проверка при $n=4$: $1+2+3+4=10$ делится на "
         "$5$. $\\checkmark$ При $n=3$: $6$ не делится на $4$. "
         "$\\checkmark$",
         "The sum is $S=\\dfrac{n(n+1)}2$. Then\n\n"
         "$$\\frac{S}{n+1}=\\frac{n(n+1)}{2(n+1)}=\\frac n2.$$\n\n"
         "This is an integer if and only if $n$ is even.\n\n"
         "Answer: every even $n$. Check at $n=4$: $1+2+3+4=10$ is divisible "
         "by $5$. $\\checkmark$ At $n=3$: $6$ is not divisible by $4$. "
         "$\\checkmark$"),

    prob("chal", 4,
         "Сколько чисел $n$ от $1$ до $100$ взаимно просты с $100$?",
         "How many integers $n$ from $1$ to $100$ are coprime to $100$?",
         "Выбросьте кратные $2$ и кратные $5$, не забыв о пересечении.",
         "Throw out the multiples of $2$ and of $5$, minding the overlap.",
         "$100=2^2\\cdot 5^2$, поэтому $\\gcd(n,100)>1$ ровно тогда, когда "
         "$n$ делится на $2$ или на $5$.\n\n"
         "Кратных двум — $50$, кратных пяти — $20$, кратных десяти — $10$. "
         "По принципу включения-исключения «плохих» чисел "
         "$50+20-10=60$.\n\n"
         "Значит взаимно простых с $100$ ровно $100-60=40$. (Это значение "
         "функции Эйлера: "
         "$\\varphi(100)=100\\left(1-\\tfrac12\\right)"
         "\\left(1-\\tfrac15\\right)=40$.)",
         "$100=2^2\\cdot 5^2$, so $\\gcd(n,100)>1$ exactly when $n$ is "
         "divisible by $2$ or by $5$.\n\n"
         "There are $50$ multiples of two, $20$ of five and $10$ of ten. By "
         "inclusion-exclusion the \"bad\" numbers number "
         "$50+20-10=60$.\n\n"
         "So exactly $100-60=40$ are coprime to $100$. (This is Euler's "
         "function: $\\varphi(100)=100\\left(1-\\tfrac12\\right)"
         "\\left(1-\\tfrac15\\right)=40$.)"),

    prob("chal", 4,
         "Натуральное число $N$ при делении на $9$ даёт остаток $7$. Какой "
         "остаток даёт $N^2$ при делении на $9$?",
         "A positive integer $N$ leaves remainder $7$ on division by $9$. "
         "What remainder does $N^2$ leave on division by $9$?",
         "Запишите $N=9k+7$ и возведите в квадрат.",
         "Write $N=9k+7$ and square it.",
         "Пусть $N=9k+7$. Тогда\n\n"
         "$$N^2=81k^2+126k+49=9\\left(9k^2+14k+5\\right)+4.$$\n\n"
         "Первое слагаемое кратно $9$, а $49=9\\cdot 5+4$. Значит остаток "
         "равен $4$.\n\n"
         "Проверка: $N=7$ даёт $49=9\\cdot5+4$; $N=16$ даёт "
         "$256=9\\cdot 28+4$. $\\checkmark$",
         "Let $N=9k+7$. Then\n\n"
         "$$N^2=81k^2+126k+49=9\\left(9k^2+14k+5\\right)+4.$$\n\n"
         "The first term is a multiple of $9$, and $49=9\\cdot 5+4$. So the "
         "remainder is $4$.\n\n"
         "Check: $N=7$ gives $49=9\\cdot5+4$; $N=16$ gives "
         "$256=9\\cdot 28+4$. $\\checkmark$"),

    prob("chal", 4,
         "Докажите, что произведение любых четырёх подряд идущих натуральных "
         "чисел делится на $24$.",
         "Prove that the product of any four consecutive positive integers is "
         "divisible by $24$.",
         "$24=8\\cdot 3$. Разберите делимость на $8$ и на $3$ отдельно.",
         "$24=8\\cdot 3$. Handle divisibility by $8$ and by $3$ separately.",
         "Пусть $P=n(n+1)(n+2)(n+3)$. Так как $\\gcd(8,3)=1$, достаточно "
         "показать, что $8\\mid P$ и $3\\mid P$.\n\n"
         "**Делимость на $3$.** Среди любых трёх подряд идущих чисел — в "
         "частности среди $n,n+1,n+2$ — есть кратное трём.\n\n"
         "**Делимость на $8$.** Среди четырёх подряд идущих чисел ровно два "
         "чётных, и они отличаются на $2$: это $2m$ и $2m+2=2(m+1)$. Их "
         "произведение равно $4m(m+1)$, а из двух подряд идущих чисел $m$ и "
         "$m+1$ одно чётно, поэтому $m(m+1)$ делится на $2$. Значит "
         "произведение двух чётных множителей делится на $4\\cdot 2=8$.\n\n"
         "Итого $P$ делится и на $8$, и на $3$, а значит на $24$. "
         "$\\blacksquare$",
         "Let $P=n(n+1)(n+2)(n+3)$. Since $\\gcd(8,3)=1$ it is enough to show "
         "$8\\mid P$ and $3\\mid P$.\n\n"
         "**Divisibility by $3$.** Among any three consecutive integers — in "
         "particular among $n,n+1,n+2$ — one is a multiple of three.\n\n"
         "**Divisibility by $8$.** Among four consecutive integers exactly two "
         "are even, and they differ by $2$: say $2m$ and $2m+2=2(m+1)$. Their "
         "product is $4m(m+1)$, and of the two consecutive integers $m$ and "
         "$m+1$ one is even, so $m(m+1)$ is divisible by $2$. Hence the "
         "product of the two even factors is divisible by $4\\cdot 2=8$.\n\n"
         "So $P$ is divisible by both $8$ and $3$, and therefore by $24$. "
         "$\\blacksquare$"),
]

LESSON = {
    "n": 2,
    "cat": "nt",
    "title": L("Делимость, делители и кратные",
               "Divisibility, factors and multiples"),
    "sub": L("Определение делимости и его следствия, признаки делимости с "
             "доказательствами, разложение на простые, количество делителей, "
             "НОД и НОК.",
             "The definition of divisibility and what follows from it, the "
             "divisibility rules with proofs, prime factorisation, counting "
             "divisors, GCD and LCM."),
    "goals": LL(["Пользоваться определением делимости и линейностью "
                 "($d\\mid a,\\ d\\mid b\\Rightarrow d\\mid ax+by$) как "
                 "рабочим инструментом.",
                 "Применять и доказывать признаки делимости на "
                 "$2,3,4,5,8,9,11,25$.",
                 "Читать с канонического разложения количество делителей, НОД, "
                 "НОК и признак точного квадрата.",
                 "Находить НОД алгоритмом Евклида, в том числе для выражений "
                 "с переменной.",
                 "Считать кратные в отрезке и показатель простого в "
                 "факториале."],
                ["Use the definition of divisibility and linearity "
                 "($d\\mid a,\\ d\\mid b\\Rightarrow d\\mid ax+by$) as a "
                 "working tool.",
                 "Apply and prove the divisibility rules for "
                 "$2,3,4,5,8,9,11,25$.",
                 "Read the number of divisors, the GCD, the LCM and the "
                 "square test straight off a canonical factorisation.",
                 "Find a GCD by the Euclidean algorithm, including for "
                 "expressions containing a variable.",
                 "Count multiples in a range and the exponent of a prime "
                 "inside a factorial."]),
    "sections": SECTIONS,
    "problems": PROBLEMS,
}

if __name__ == "__main__":
    write(LESSON)
