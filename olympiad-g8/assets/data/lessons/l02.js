/* Grade 8 topic 2 — generated from content/g8_02.py, do not edit by hand. */
window.LESSONS = window.LESSONS || {};
window.LESSONS[2] = {
 "n": 2,
 "cat": "nt",
 "title": {
  "ru": "Делимость, делители и кратные",
  "en": "Divisibility, factors and multiples"
 },
 "sub": {
  "ru": "Определение делимости и его следствия, признаки делимости с доказательствами, разложение на простые, количество делителей, НОД и НОК.",
  "en": "The definition of divisibility and what follows from it, the divisibility rules with proofs, prime factorisation, counting divisors, GCD and LCM."
 },
 "goals": {
  "ru": [
   "Пользоваться определением делимости и линейностью ($d\\mid a,\\ d\\mid b\\Rightarrow d\\mid ax+by$) как рабочим инструментом.",
   "Применять и доказывать признаки делимости на $2,3,4,5,8,9,11,25$.",
   "Читать с канонического разложения количество делителей, НОД, НОК и признак точного квадрата.",
   "Находить НОД алгоритмом Евклида, в том числе для выражений с переменной.",
   "Считать кратные в отрезке и показатель простого в факториале."
  ],
  "en": [
   "Use the definition of divisibility and linearity ($d\\mid a,\\ d\\mid b\\Rightarrow d\\mid ax+by$) as a working tool.",
   "Apply and prove the divisibility rules for $2,3,4,5,8,9,11,25$.",
   "Read the number of divisors, the GCD, the LCM and the square test straight off a canonical factorisation.",
   "Find a GCD by the Euclidean algorithm, including for expressions containing a variable.",
   "Count multiples in a range and the exponent of a prime inside a factorial."
  ]
 },
 "sections": [
  {
   "h": {
    "ru": "Делимость: определение и четыре свойства",
    "en": "Divisibility: the definition and four properties"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Делимость — это не «деление, которое получилось красиво». Это утверждение о существовании целого числа. Если держать в голове именно определение, большинство задач на делимость превращаются в одну строку алгебры.",
      "en": "Divisibility is not \"a division that came out neatly\". It is a statement that a certain integer exists. Keep the definition in front of you and most divisibility problems become one line of algebra."
     }
    },
    {
     "t": "def",
     "text": {
      "ru": "Пусть $a$ и $b$ — целые числа, $a\\neq 0$. Говорят, что **$a$ делит $b$** (пишут $a\\mid b$), если существует целое $k$, для которого $b=ak$. Тогда $a$ — **делитель** $b$, а $b$ — **кратное** $a$.",
      "en": "Let $a$ and $b$ be integers with $a\\neq 0$. We say **$a$ divides $b$** (written $a\\mid b$) if there is an integer $k$ with $b=ak$. Then $a$ is a **divisor** of $b$ and $b$ is a **multiple** of $a$."
     },
     "name": {
      "ru": "Делимость",
      "en": "Divisibility"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Примеры: $3\\mid 12$, потому что $12=3\\cdot 4$; $7\\mid 0$, потому что $0=7\\cdot 0$; но $4\\nmid 10$, потому что $10=4k$ не имеет целых решений. Ноль делится на всё, но сам не делит ничего.",
      "en": "Examples: $3\\mid 12$ because $12=3\\cdot 4$; $7\\mid 0$ because $0=7\\cdot 0$; but $4\\nmid 10$ because $10=4k$ has no integer solution. Zero is divisible by everything but divides nothing."
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "Если $d\\mid a$ и $d\\mid b$, то $d\\mid (ax+by)$ для любых целых $x,y$.",
      "en": "If $d\\mid a$ and $d\\mid b$, then $d\\mid (ax+by)$ for all integers $x,y$."
     },
     "name": {
      "ru": "Линейность",
      "en": "Linearity"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "По определению $a=dm$ и $b=dn$ для некоторых целых $m,n$. Тогда $ax+by=dmx+dny=d(mx+ny)$, а $mx+ny$ — целое число. Значит $d$ делит $ax+by$. $\\blacksquare$",
      "en": "By definition $a=dm$ and $b=dn$ for some integers $m,n$. Then $ax+by=dmx+dny=d(mx+ny)$, and $mx+ny$ is an integer. So $d$ divides $ax+by$. $\\blacksquare$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Эта теорема — то, чем вы будете пользоваться чаще всего. Чтобы показать, что $d$ делит какое-то выражение, соберите его из уже известных кратных $d$. Частные случаи: $d\\mid a+b$, $d\\mid a-b$, $d\\mid 5a-3b$ — всё это одна теорема.",
      "en": "This theorem is the one you will reach for most often. To show $d$ divides some expression, build the expression out of multiples of $d$ you already have. The special cases $d\\mid a+b$, $d\\mid a-b$, $d\\mid 5a-3b$ are all this one theorem."
     },
     "name": {
      "ru": "Линейность — главный рабочий инструмент",
      "en": "Linearity is the workhorse"
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "(1) Если $a\\mid b$ и $b\\mid c$, то $a\\mid c$.\n\n(2) Если $a\\mid b$ и $b\\neq 0$, то $|a|\\le |b|$.\n\n(3) Если $a\\mid b$ и $b\\mid a$, то $a=\\pm b$.",
      "en": "(1) If $a\\mid b$ and $b\\mid c$, then $a\\mid c$.\n\n(2) If $a\\mid b$ and $b\\neq 0$, then $|a|\\le |b|$.\n\n(3) If $a\\mid b$ and $b\\mid a$, then $a=\\pm b$."
     },
     "name": {
      "ru": "Транзитивность и порядок",
      "en": "Transitivity and size"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "(1) Из $b=am$ и $c=bn$ получаем $c=amn$.\n\n(2) Пусть $b=ak$. Так как $b\\neq 0$, то $k\\neq 0$, значит $|k|\\ge 1$ и $|b|=|a||k|\\ge |a|$.\n\n(3) Если одно из чисел равно нулю, то по пункту (2) и второе равно нулю. Иначе из (2) следует $|a|\\le|b|$ и $|b|\\le|a|$, то есть $|a|=|b|$. $\\blacksquare$",
      "en": "(1) From $b=am$ and $c=bn$ we get $c=amn$.\n\n(2) Let $b=ak$. Since $b\\neq 0$ we have $k\\neq 0$, so $|k|\\ge 1$ and $|b|=|a||k|\\ge |a|$.\n\n(3) If either number is zero then by (2) so is the other. Otherwise (2) gives $|a|\\le|b|$ and $|b|\\le|a|$, hence $|a|=|b|$. $\\blacksquare$"
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Пункт (2) объясняет, почему поиск делителей всегда конечен: делители числа $n>0$ лежат между $1$ и $n$. Именно поэтому работает приём «$d\\mid 2$, значит $d\\in\\{1,2\\}$» — он закрывает задачу за одну строку.",
      "en": "Part (2) is why hunting for divisors always terminates: the divisors of $n>0$ lie between $1$ and $n$. It is also what makes the move \"$d\\mid 2$, so $d\\in\\{1,2\\}$\" close a problem in one line."
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "Для любых целых $a$ и $b>0$ существуют *единственные* целые $q$ и $r$, для которых $$a=bq+r,\\qquad 0\\le r<b.$$",
      "en": "For any integers $a$ and $b>0$ there are *unique* integers $q$ and $r$ with $$a=bq+r,\\qquad 0\\le r<b.$$"
     },
     "name": {
      "ru": "Деление с остатком",
      "en": "Division with remainder"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Существование: возьмём наибольшее кратное $bq$, не превосходящее $a$ (такое есть, так как кратные $b$ уходят в обе стороны неограниченно), и положим $r=a-bq$. Тогда $r\\ge 0$ по выбору $q$, и $r<b$, иначе $b(q+1)\\le a$ противоречило бы максимальности.\n\nЕдинственность: если $bq_1+r_1=bq_2+r_2$, то $b(q_1-q_2)=r_2-r_1$. Слева кратное $b$, справа число, по модулю меньшее $b$ (так как оба остатка лежат в $[0,b)$). Значит обе части равны нулю. $\\blacksquare$",
      "en": "Existence: take the largest multiple $bq$ not exceeding $a$ (it exists, because the multiples of $b$ run off unboundedly both ways) and set $r=a-bq$. Then $r\\ge 0$ by the choice of $q$, and $r<b$, since otherwise $b(q+1)\\le a$ would contradict maximality.\n\nUniqueness: if $bq_1+r_1=bq_2+r_2$ then $b(q_1-q_2)=r_2-r_1$. The left side is a multiple of $b$, the right side has absolute value less than $b$ (both remainders lie in $[0,b)$). So both sides are zero. $\\blacksquare$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Любое целое $n$ можно записать как $3k$, $3k+1$ или $3k+2$ — и это все возможности. Такой разбор решает огромный класс задач вида «докажите, что …»: случаев конечное число, и каждый проверяется подстановкой.",
      "en": "Every integer $n$ can be written as $3k$, $3k+1$ or $3k+2$ — and those are all the possibilities. This split settles a huge class of \"prove that …\" problems: the number of cases is finite and each one is a substitution."
     },
     "name": {
      "ru": "Разбор по остаткам",
      "en": "Split into remainder cases"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Докажите, что $n(n+1)(n+2)$ делится на $6$ при любом целом $n$.",
      "en": "Prove that $n(n+1)(n+2)$ is divisible by $6$ for every integer $n$."
     },
     "steps": {
      "ru": [
       "Достаточно доказать делимость на $2$ и на $3$: эти числа взаимно просты, поэтому произведение $6$ тоже разделит.",
       "Среди двух подряд идущих чисел $n$ и $n+1$ одно чётно, значит произведение делится на $2$.",
       "Среди трёх подряд идущих чисел $n,n+1,n+2$ остатки по модулю $3$ попарно различны, значит один из множителей делится на $3$.",
       "Итого произведение делится и на $2$, и на $3$, а значит на $6$."
      ],
      "en": [
       "It suffices to prove divisibility by $2$ and by $3$: those are coprime, so $6$ will divide too.",
       "Of the two consecutive numbers $n$ and $n+1$ one is even, so the product is divisible by $2$.",
       "Among three consecutive numbers $n,n+1,n+2$ the remainders mod $3$ are pairwise different, so one factor is divisible by $3$.",
       "Hence the product is divisible by both $2$ and $3$, and therefore by $6$."
      ]
     },
     "ans": {
      "ru": "$6\\mid n(n+1)(n+2)$",
      "en": "$6\\mid n(n+1)(n+2)$"
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Признаки делимости и почему они работают",
    "en": "Divisibility rules, and why they work"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Признаки делимости стоит знать не как список, а как три идеи: смотреть на последние цифры (для делителей степеней десяти), складывать цифры (для $3$ и $9$) и складывать их со знаками (для $11$).",
      "en": "The divisibility rules are worth knowing not as a list but as three ideas: look at the last digits (for divisors of powers of ten), add the digits (for $3$ and $9$), and add them with alternating signs (for $11$)."
     }
    },
    {
     "t": "table",
     "head": {
      "ru": [
       "Делитель",
       "Признак"
      ],
      "en": [
       "Divisor",
       "Rule"
      ]
     },
     "rows": {
      "ru": [
       [
        "$2$",
        "последняя цифра чётна"
       ],
       [
        "$4$",
        "число из двух последних цифр делится на $4$"
       ],
       [
        "$8$",
        "число из трёх последних цифр делится на $8$"
       ],
       [
        "$5$",
        "последняя цифра $0$ или $5$"
       ],
       [
        "$25$",
        "две последние цифры дают $00,25,50$ или $75$"
       ],
       [
        "$10^k$",
        "последние $k$ цифр — нули"
       ],
       [
        "$3$",
        "сумма цифр делится на $3$"
       ],
       [
        "$9$",
        "сумма цифр делится на $9$"
       ],
       [
        "$11$",
        "знакочередующаяся сумма цифр делится на $11$"
       ],
       [
        "$6$",
        "делится на $2$ и на $3$"
       ],
       [
        "$12$",
        "делится на $4$ и на $3$"
       ]
      ],
      "en": [
       [
        "$2$",
        "the last digit is even"
       ],
       [
        "$4$",
        "the number formed by the last two digits is divisible by $4$"
       ],
       [
        "$8$",
        "the number formed by the last three digits is divisible by $8$"
       ],
       [
        "$5$",
        "the last digit is $0$ or $5$"
       ],
       [
        "$25$",
        "the last two digits are $00,25,50$ or $75$"
       ],
       [
        "$10^k$",
        "the last $k$ digits are zeros"
       ],
       [
        "$3$",
        "the digit sum is divisible by $3$"
       ],
       [
        "$9$",
        "the digit sum is divisible by $9$"
       ],
       [
        "$11$",
        "the alternating digit sum is divisible by $11$"
       ],
       [
        "$6$",
        "divisible by $2$ and by $3$"
       ],
       [
        "$12$",
        "divisible by $4$ and by $3$"
       ]
      ]
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "Натуральное число делится на $9$ тогда и только тогда, когда его сумма цифр делится на $9$. То же верно для $3$.",
      "en": "A positive integer is divisible by $9$ if and only if its digit sum is divisible by $9$. The same holds for $3$."
     },
     "name": {
      "ru": "Признак делимости на $9$ (и на $3$)",
      "en": "The rule for $9$ (and for $3$)"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Запишем $N=\\overline{a_ka_{k-1}\\ldots a_0}$, то есть $N=\\sum_{i=0}^{k}a_i\\cdot 10^i$. Заметим, что $10^i-1=\\underbrace{99\\ldots9}_{i}$ делится на $9$. Значит\n\n$$N-\\sum a_i=\\sum a_i(10^i-1)$$\n\n— сумма кратных девяти, то есть кратное девяти. По линейности $9\\mid N$ равносильно $9\\mid\\sum a_i$. Для $3$ доказательство то же: $3$ тоже делит каждое $10^i-1$. $\\blacksquare$",
      "en": "Write $N=\\overline{a_ka_{k-1}\\ldots a_0}$, that is $N=\\sum_{i=0}^{k}a_i\\cdot 10^i$. Note that $10^i-1=\\underbrace{99\\ldots9}_{i}$ is divisible by $9$. Hence\n\n$$N-\\sum a_i=\\sum a_i(10^i-1)$$\n\nis a sum of multiples of nine, so a multiple of nine. By linearity $9\\mid N$ is equivalent to $9\\mid\\sum a_i$. For $3$ the proof is the same: $3$ also divides every $10^i-1$. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "Число делится на $11$ тогда и только тогда, когда делится на $11$ его знакочередующаяся сумма цифр $a_0-a_1+a_2-a_3+\\ldots$ (справа налево).",
      "en": "A number is divisible by $11$ if and only if its alternating digit sum $a_0-a_1+a_2-a_3+\\ldots$ (from the right) is divisible by $11$."
     },
     "name": {
      "ru": "Признак делимости на $11$",
      "en": "The rule for $11$"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Теперь полезно заметить, что $10\\equiv -1$ при делении на $11$, поэтому $10^i$ отличается от $(-1)^i$ на кратное $11$: действительно, $10^i-(-1)^i$ делится на $10-(-1)=11$. Следовательно\n\n$$N-\\sum a_i(-1)^i=\\sum a_i\\bigl(10^i-(-1)^i\\bigr)$$\n\nкратно $11$, и снова по линейности одно делится на $11$ одновременно с другим. $\\blacksquare$",
      "en": "The useful observation now is that $10$ leaves remainder $-1$ on division by $11$, so $10^i$ differs from $(-1)^i$ by a multiple of $11$: indeed $10^i-(-1)^i$ is divisible by $10-(-1)=11$. Therefore\n\n$$N-\\sum a_i(-1)^i=\\sum a_i\\bigl(10^i-(-1)^i\\bigr)$$\n\nis a multiple of $11$, and by linearity again the two are divisible by $11$ together. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "При какой цифре $A$ число $\\overline{2A3}$ делится на $11$?",
      "en": "For which digit $A$ is $\\overline{2A3}$ divisible by $11$?"
     },
     "steps": {
      "ru": [
       "Знакочередующаяся сумма справа налево: $3-A+2=5-A$.",
       "Нужно, чтобы $11\\mid 5-A$. При $0\\le A\\le 9$ величина $5-A$ лежит между $-4$ и $5$, значит единственная возможность — $5-A=0$.",
       "Отсюда $A=5$, и действительно $253=11\\cdot 23$."
      ],
      "en": [
       "The alternating sum from the right is $3-A+2=5-A$.",
       "We need $11\\mid 5-A$. For $0\\le A\\le 9$ the value $5-A$ lies between $-4$ and $5$, so the only possibility is $5-A=0$.",
       "Hence $A=5$, and indeed $253=11\\cdot 23$."
      ]
     },
     "ans": {
      "ru": "$A=5$",
      "en": "$A=5$"
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Признак для $4$ — это *две* последние цифры, а не последняя. Число $1234$ оканчивается на чётную цифру, но $34$ не делится на $4$, значит и $1234$ не делится. Причина: $100$ делится на $4$, но $10$ — нет.",
      "en": "The rule for $4$ uses the last *two* digits, not the last one. $1234$ ends in an even digit, but $34$ is not divisible by $4$, so neither is $1234$. The reason: $100$ is divisible by $4$ but $10$ is not."
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "Если $\\gcd(m,n)=1$, то $mn\\mid N$ тогда и только тогда, когда $m\\mid N$ и $n\\mid N$.",
      "en": "If $\\gcd(m,n)=1$, then $mn\\mid N$ if and only if $m\\mid N$ and $n\\mid N$."
     },
     "name": {
      "ru": "Склейка взаимно простых признаков",
      "en": "Combining coprime rules"
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Условие взаимной простоты обязательно. Число $N=12$ делится и на $4$, и на $6$, но на $24$ не делится: $\\gcd(4,6)=2\\neq1$. Поэтому «делится на $4$ и на $6$» означает лишь «делится на $\\operatorname{lcm}(4,6)=12$».",
      "en": "Coprimality is essential. $N=12$ is divisible by $4$ and by $6$, but not by $24$: $\\gcd(4,6)=2\\neq1$. So \"divisible by $4$ and by $6$\" only means \"divisible by $\\operatorname{lcm}(4,6)=12$\"."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Разложение на простые множители",
    "en": "Breaking a number into primes"
   },
   "blocks": [
    {
     "t": "def",
     "text": {
      "ru": "Натуральное число $p>1$ называется **простым**, если его положительные делители — только $1$ и $p$. Число $n>1$, не являющееся простым, называется **составным**. Единица не относится ни к тем, ни к другим.",
      "en": "A positive integer $p>1$ is **prime** if its only positive divisors are $1$ and $p$. An integer $n>1$ that is not prime is **composite**. One is neither."
     },
     "name": {
      "ru": "Простое и составное",
      "en": "Prime and composite"
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "Каждое натуральное $n>1$ раскладывается в произведение простых, и такое разложение единственно с точностью до порядка множителей: $$n=p_1^{e_1}p_2^{e_2}\\cdots p_m^{e_m}.$$",
      "en": "Every integer $n>1$ factors into primes, and the factorisation is unique up to the order of the factors: $$n=p_1^{e_1}p_2^{e_2}\\cdots p_m^{e_m}.$$"
     },
     "name": {
      "ru": "Основная теорема арифметики",
      "en": "The fundamental theorem of arithmetic"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Эту запись называют **каноническим разложением**. Почти вся теория делимости — это чтение канонического разложения: количество делителей, НОД, НОК, признак квадрата — всё выражается через показатели $e_i$.",
      "en": "This is called the **canonical factorisation**. Almost all of divisibility theory is reading it off: the number of divisors, the GCD, the LCM, the test for a perfect square — everything is a statement about the exponents $e_i$."
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 440 230\" role=\"img\">\n  <g font-size=\"15\" text-anchor=\"middle\" fill=\"currentColor\">\n    <text x=\"220\" y=\"24\">360</text>\n    <text x=\"150\" y=\"80\">4</text>\n    <text x=\"290\" y=\"80\">90</text>\n    <text x=\"110\" y=\"136\">2</text>\n    <text x=\"190\" y=\"136\">2</text>\n    <text x=\"250\" y=\"136\">9</text>\n    <text x=\"330\" y=\"136\">10</text>\n    <text x=\"214\" y=\"192\">3</text>\n    <text x=\"286\" y=\"192\">3</text>\n    <text x=\"306\" y=\"192\">2</text>\n    <text x=\"378\" y=\"192\">5</text>\n  </g>\n  <g stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\" stroke-linecap=\"round\">\n    <path d=\"M208 30 L158 68\"/><path d=\"M232 30 L282 68\"/>\n    <path d=\"M140 88 L118 124\"/><path d=\"M160 88 L182 124\"/>\n    <path d=\"M278 88 L256 124\"/><path d=\"M300 88 L326 124\"/>\n    <path d=\"M242 144 L218 180\"/><path d=\"M258 144 L282 180\"/>\n    <path d=\"M322 144 L306 180\"/><path d=\"M338 144 L372 180\"/>\n  </g>\n  <text x=\"220\" y=\"222\" font-size=\"14\" text-anchor=\"middle\"\n        fill=\"var(--gold, #C8A24A)\">360 = 2³ · 3² · 5</text>\n</svg>",
     "cap": {
      "ru": "Дерево множителей: порядок разбиения любой, а ответ один.",
      "en": "A factor tree: the order of splitting is free, the answer is not."
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "Пусть $n=p_1^{e_1}\\cdots p_m^{e_m}$. Тогда $d\\mid n$ в точности тогда, когда $d=p_1^{f_1}\\cdots p_m^{f_m}$ при $0\\le f_i\\le e_i$.",
      "en": "Let $n=p_1^{e_1}\\cdots p_m^{e_m}$. Then $d\\mid n$ exactly when $d=p_1^{f_1}\\cdots p_m^{f_m}$ with $0\\le f_i\\le e_i$."
     },
     "name": {
      "ru": "Делители через показатели",
      "en": "Divisors from exponents"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Если $f_i\\le e_i$ для всех $i$, то $n/d=\\prod p_i^{e_i-f_i}$ — целое число, значит $d\\mid n$. Обратно, пусть $d\\mid n$ и $n=dc$. Разложим $d$ и $c$ на простые; по единственности разложения произведение этих разложений должно совпасть с разложением $n$. Значит в $d$ не может встретиться простое, которого нет в $n$, и показатель каждого простого в $d$ не превосходит его показателя в $n$. $\\blacksquare$",
      "en": "If $f_i\\le e_i$ for all $i$ then $n/d=\\prod p_i^{e_i-f_i}$ is an integer, so $d\\mid n$. Conversely let $d\\mid n$ with $n=dc$. Factor $d$ and $c$ into primes; by uniqueness the product of those factorisations must agree with that of $n$. So $d$ cannot contain a prime absent from $n$, and the exponent of each prime in $d$ is at most its exponent in $n$. $\\blacksquare$"
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "Если $n=p_1^{e_1}\\cdots p_m^{e_m}$, то число положительных делителей равно $$d(n)=(e_1+1)(e_2+1)\\cdots(e_m+1).$$",
      "en": "If $n=p_1^{e_1}\\cdots p_m^{e_m}$, the number of positive divisors is $$d(n)=(e_1+1)(e_2+1)\\cdots(e_m+1).$$"
     },
     "name": {
      "ru": "Количество делителей",
      "en": "The number of divisors"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "По предыдущей теореме делитель однозначно задаётся набором показателей $(f_1,\\ldots,f_m)$, и каждый $f_i$ выбирается независимо из $e_i+1$ значений $0,1,\\ldots,e_i$. По правилу произведения всего таких наборов $\\prod(e_i+1)$. $\\blacksquare$",
      "en": "By the previous theorem a divisor is determined by the tuple of exponents $(f_1,\\ldots,f_m)$, and each $f_i$ is chosen independently from the $e_i+1$ values $0,1,\\ldots,e_i$. By the product rule there are $\\prod(e_i+1)$ such tuples. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Сколько положительных делителей у числа $720$?",
      "en": "How many positive divisors does $720$ have?"
     },
     "steps": {
      "ru": [
       "$720=72\\cdot 10=(8\\cdot 9)\\cdot(2\\cdot 5)=2^4\\cdot 3^2\\cdot 5$.",
       "Показатели: $4,2,1$.",
       "$d(720)=(4+1)(2+1)(1+1)=5\\cdot 3\\cdot 2=30$."
      ],
      "en": [
       "$720=72\\cdot 10=(8\\cdot 9)\\cdot(2\\cdot 5)=2^4\\cdot 3^2\\cdot 5$.",
       "The exponents are $4,2,1$.",
       "$d(720)=(4+1)(2+1)(1+1)=5\\cdot 3\\cdot 2=30$."
      ]
     },
     "ans": {
      "ru": "$30$",
      "en": "$30$"
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "Натуральное число является точным квадратом тогда и только тогда, когда все показатели в его каноническом разложении чётны. Равносильно: $d(n)$ нечётно тогда и только тогда, когда $n$ — точный квадрат.",
      "en": "A positive integer is a perfect square if and only if every exponent in its canonical factorisation is even. Equivalently: $d(n)$ is odd if and only if $n$ is a perfect square."
     },
     "name": {
      "ru": "Признак точного квадрата",
      "en": "The test for a perfect square"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Если $n=k^2$ и $k=\\prod p_i^{g_i}$, то $n=\\prod p_i^{2g_i}$ — все показатели чётны. Обратно, если все $e_i=2g_i$, то $n=\\left(\\prod p_i^{g_i}\\right)^2$.\n\nДля второй формулировки: $d(n)=\\prod(e_i+1)$ нечётно тогда и только тогда, когда нечётен каждый множитель $e_i+1$, то есть когда каждое $e_i$ чётно. $\\blacksquare$",
      "en": "If $n=k^2$ with $k=\\prod p_i^{g_i}$ then $n=\\prod p_i^{2g_i}$ — all exponents even. Conversely, if every $e_i=2g_i$ then $n=\\left(\\prod p_i^{g_i}\\right)^2$.\n\nFor the second form: $d(n)=\\prod(e_i+1)$ is odd exactly when every factor $e_i+1$ is odd, that is when every $e_i$ is even. $\\blacksquare$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Вопросы «умножьте на наименьшее число, чтобы получился квадрат», «сколько квадратов среди делителей», «может ли это быть квадратом» — все об одном: о чётности показателей. Разложите на простые и посмотрите, какие показатели нечётны.",
      "en": "The questions \"multiply by the least number to get a square\", \"how many divisors are squares\", \"can this be a square\" are all the same question: parity of exponents. Factor into primes and see which exponents are odd."
     },
     "name": {
      "ru": "Чётность показателей",
      "en": "Parity of the exponents"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "На какое наименьшее натуральное число нужно умножить $360$, чтобы получился точный квадрат?",
      "en": "What is the smallest positive integer that $360$ must be multiplied by to give a perfect square?"
     },
     "steps": {
      "ru": [
       "$360=2^3\\cdot 3^2\\cdot 5^1$.",
       "Нечётные показатели — у $2$ (это $3$) и у $5$ (это $1$); показатель $3$ уже чётный.",
       "Чтобы сделать их чётными, достаточно домножить на $2\\cdot 5=10$.",
       "Проверка: $360\\cdot 10=3600=60^2$. $\\checkmark$"
      ],
      "en": [
       "$360=2^3\\cdot 3^2\\cdot 5^1$.",
       "The odd exponents belong to $2$ (namely $3$) and to $5$ (namely $1$); the exponent of $3$ is already even.",
       "To make them even it is enough to multiply by $2\\cdot 5=10$.",
       "Check: $360\\cdot 10=3600=60^2$. $\\checkmark$"
      ]
     },
     "ans": {
      "ru": "$10$",
      "en": "$10$"
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "Произведение всех положительных делителей числа $n$ равно $n^{d(n)/2}$.",
      "en": "The product of all positive divisors of $n$ equals $n^{d(n)/2}$."
     },
     "name": {
      "ru": "Произведение всех делителей",
      "en": "The product of all the divisors"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Разобьём делители на пары $\\{d,\\,n/d\\}$: каждая пара даёт произведение $n$. Пар ровно $d(n)/2$ (если $n$ — квадрат, делитель $\\sqrt n$ образует «пару сам с собой» и даёт множитель $\\sqrt n=n^{1/2}$, что согласуется с формулой при нечётном $d(n)$). $\\blacksquare$",
      "en": "Pair the divisors as $\\{d,\\,n/d\\}$: each pair multiplies to $n$. There are $d(n)/2$ pairs (if $n$ is a square, the divisor $\\sqrt n$ pairs with itself and contributes $\\sqrt n=n^{1/2}$, which matches the formula for odd $d(n)$). $\\blacksquare$"
     }
    }
   ]
  },
  {
   "h": {
    "ru": "НОД, НОК и алгоритм Евклида",
    "en": "GCD, LCM and the Euclidean algorithm"
   },
   "blocks": [
    {
     "t": "def",
     "text": {
      "ru": "**$\\gcd(a,b)$** — наибольшее целое, делящее и $a$, и $b$. **$\\operatorname{lcm}(a,b)$** — наименьшее положительное целое, которое делится и на $a$, и на $b$. Числа называются **взаимно простыми**, если $\\gcd(a,b)=1$.",
      "en": "**$\\gcd(a,b)$** is the largest integer dividing both $a$ and $b$. **$\\operatorname{lcm}(a,b)$** is the smallest positive integer divisible by both. Two numbers are **coprime** if $\\gcd(a,b)=1$."
     },
     "name": {
      "ru": "НОД и НОК",
      "en": "GCD and LCM"
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "Если $a=\\prod p_i^{\\alpha_i}$ и $b=\\prod p_i^{\\beta_i}$ (показатель $0$ для отсутствующего простого), то $$\\gcd(a,b)=\\prod p_i^{\\min(\\alpha_i,\\beta_i)},\\qquad \\operatorname{lcm}(a,b)=\\prod p_i^{\\max(\\alpha_i,\\beta_i)}.$$",
      "en": "If $a=\\prod p_i^{\\alpha_i}$ and $b=\\prod p_i^{\\beta_i}$ (exponent $0$ for a missing prime), then $$\\gcd(a,b)=\\prod p_i^{\\min(\\alpha_i,\\beta_i)},\\qquad \\operatorname{lcm}(a,b)=\\prod p_i^{\\max(\\alpha_i,\\beta_i)}.$$"
     },
     "name": {
      "ru": "НОД и НОК через разложения",
      "en": "GCD and LCM from the factorisations"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Общий делитель $d$ должен делить и $a$, и $b$, поэтому показатель $p_i$ в $d$ не превосходит ни $\\alpha_i$, ни $\\beta_i$, то есть не превосходит минимума; взяв все показатели равными минимумам, мы получаем общий делитель и притом наибольший. Для НОК рассуждение зеркально: общее кратное должно иметь показатель не меньше каждого из двух, то есть не меньше максимума. $\\blacksquare$",
      "en": "A common divisor $d$ must divide both $a$ and $b$, so the exponent of $p_i$ in $d$ is at most $\\alpha_i$ and at most $\\beta_i$, hence at most their minimum; taking every exponent equal to the minimum gives a common divisor, and the largest one. For the LCM the argument is mirrored: a common multiple must have each exponent at least both, hence at least the maximum. $\\blacksquare$"
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 400 210\" role=\"img\">\n  <g font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">\n    <text x=\"200\" y=\"26\">lcm = 2³·3²·5 = 360</text>\n    <text x=\"100\" y=\"108\">a = 2³·3 = 24</text>\n    <text x=\"300\" y=\"108\">b = 2²·3²·5 = 180</text>\n    <text x=\"200\" y=\"192\">gcd = 2²·3 = 12</text>\n  </g>\n  <g stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\" stroke-linecap=\"round\">\n    <path d=\"M170 34 L120 92\"/><path d=\"M230 34 L280 92\"/>\n    <path d=\"M120 122 L175 180\"/><path d=\"M280 122 L225 180\"/>\n  </g>\n</svg>",
     "cap": {
      "ru": "Минимумы показателей дают НОД, максимумы — НОК.",
      "en": "Minimums of the exponents give the GCD, maximums give the LCM."
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "Для любых натуральных $a,b$ $$\\gcd(a,b)\\cdot\\operatorname{lcm}(a,b)=ab.$$",
      "en": "For all positive integers $a,b$ $$\\gcd(a,b)\\cdot\\operatorname{lcm}(a,b)=ab.$$"
     },
     "name": {
      "ru": "Связь НОД и НОК",
      "en": "The GCD-LCM identity"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Сравним показатели простого $p$ в левой и правой части. Слева это $\\min(\\alpha,\\beta)+\\max(\\alpha,\\beta)$, справа $\\alpha+\\beta$. Но для любых двух чисел $\\min+\\max=$ их сумма (меньшее плюс большее — это и есть оба числа). Показатели совпали у каждого простого, значит совпали и сами числа. $\\blacksquare$",
      "en": "Compare the exponent of a prime $p$ on the two sides. On the left it is $\\min(\\alpha,\\beta)+\\max(\\alpha,\\beta)$, on the right $\\alpha+\\beta$. But for any two numbers $\\min+\\max$ equals their sum (the smaller plus the larger is just both of them). The exponents agree at every prime, so the numbers agree. $\\blacksquare$"
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Для трёх чисел аналогичная формула неверна: $\\gcd(a,b,c)\\cdot\\operatorname{lcm}(a,b,c)\\neq abc$ в общем случае. Проверьте на $a=b=c=2$: слева $2\\cdot 2=4$, справа $8$.",
      "en": "The analogous formula fails for three numbers: $\\gcd(a,b,c)\\cdot\\operatorname{lcm}(a,b,c)\\neq abc$ in general. Test it on $a=b=c=2$: the left side is $2\\cdot 2=4$, the right side $8$."
     }
    },
    {
     "t": "lemma",
     "text": {
      "ru": "Если $a=bq+r$, то $\\gcd(a,b)=\\gcd(b,r)$.",
      "en": "If $a=bq+r$, then $\\gcd(a,b)=\\gcd(b,r)$."
     },
     "name": {
      "ru": "Шаг Евклида",
      "en": "The Euclidean step"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Пусть $d\\mid b$ и $d\\mid r$. Тогда по линейности $d\\mid bq+r=a$, значит $d$ — общий делитель $a$ и $b$. Наоборот, если $d\\mid a$ и $d\\mid b$, то $d\\mid a-bq=r$. Итак, пары $(a,b)$ и $(b,r)$ имеют *одно и то же* множество общих делителей, а значит и один и тот же наибольший. $\\blacksquare$",
      "en": "Suppose $d\\mid b$ and $d\\mid r$. Then by linearity $d\\mid bq+r=a$, so $d$ is a common divisor of $a$ and $b$. Conversely, if $d\\mid a$ and $d\\mid b$ then $d\\mid a-bq=r$. So the pairs $(a,b)$ and $(b,r)$ have the *same* set of common divisors, hence the same greatest one. $\\blacksquare$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Заменяйте пару $(a,b)$ на $(b,\\,a\\bmod b)$, пока второе число не станет нулём. Последнее ненулевое число и есть НОД. Это быстрее разложения на простые и работает для любых чисел — в том числе для выражений с буквой.",
      "en": "Replace the pair $(a,b)$ by $(b,\\,a\\bmod b)$ until the second number is zero. The last nonzero number is the GCD. This is faster than factoring and works for any numbers — including expressions with a letter in them."
     },
     "name": {
      "ru": "Алгоритм Евклида",
      "en": "The Euclidean algorithm"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите $\\gcd(1365,3003)$.",
      "en": "Find $\\gcd(1365,3003)$."
     },
     "steps": {
      "ru": [
       "$3003=2\\cdot 1365+273$.",
       "$1365=5\\cdot 273+0$.",
       "Остаток ноль, значит НОД — последнее ненулевое число, $273$.",
       "Проверка разложением: $1365=3\\cdot 5\\cdot 7\\cdot 13$ и $3003=3\\cdot 7\\cdot 11\\cdot 13$; общие множители дают $3\\cdot 7\\cdot 13=273$. $\\checkmark$"
      ],
      "en": [
       "$3003=2\\cdot 1365+273$.",
       "$1365=5\\cdot 273+0$.",
       "The remainder is zero, so the GCD is the last nonzero number, $273$.",
       "Check by factoring: $1365=3\\cdot 5\\cdot 7\\cdot 13$ and $3003=3\\cdot 7\\cdot 11\\cdot 13$; the common factors give $3\\cdot 7\\cdot 13=273$. $\\checkmark$"
      ]
     },
     "ans": {
      "ru": "$273$",
      "en": "$273$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Шаг Евклида работает и когда числа содержат переменную. Чтобы найти $\\gcd(2n+3,\\,n+1)$, вычтите: $(2n+3)-2(n+1)=1$. Значит НОД делит $1$, то есть равен $1$ при любом $n$. Такой подсчёт — стандартный ход в задачах «докажите, что дробь несократима».",
      "en": "The Euclidean step works when the numbers contain a variable. To find $\\gcd(2n+3,\\,n+1)$, subtract: $(2n+3)-2(n+1)=1$. So the GCD divides $1$ and therefore equals $1$ for every $n$. This is the standard move in \"prove the fraction is irreducible\" problems."
     },
     "name": {
      "ru": "НОД выражений с буквой",
      "en": "GCD of expressions in $n$"
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Считаем кратные и простые внутри факториала",
    "en": "Counting multiples, and primes inside a factorial"
   },
   "blocks": [
    {
     "t": "thm",
     "text": {
      "ru": "Количество чисел от $1$ до $N$, делящихся на $d$, равно $\\left\\lfloor\\dfrac Nd\\right\\rfloor$.",
      "en": "The number of integers from $1$ to $N$ divisible by $d$ is $\\left\\lfloor\\dfrac Nd\\right\\rfloor$."
     },
     "name": {
      "ru": "Сколько кратных в отрезке",
      "en": "How many multiples in a range"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Это числа $d,2d,3d,\\ldots,kd$, где $k$ — наибольшее целое с $kd\\le N$, то есть $k\\le N/d$. Наибольшее такое целое — это и есть $\\lfloor N/d\\rfloor$. $\\blacksquare$",
      "en": "They are $d,2d,3d,\\ldots,kd$ where $k$ is the largest integer with $kd\\le N$, that is $k\\le N/d$. The largest such integer is precisely $\\lfloor N/d\\rfloor$. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Сколько чисел от $1$ до $200$ делятся на $3$ или на $5$?",
      "en": "How many integers from $1$ to $200$ are divisible by $3$ or by $5$?"
     },
     "steps": {
      "ru": [
       "Кратных трём: $\\lfloor 200/3\\rfloor=66$.",
       "Кратных пяти: $\\lfloor 200/5\\rfloor=40$.",
       "Кратных и тому, и другому — это кратные $15$: $\\lfloor 200/15\\rfloor=13$. Их мы посчитали дважды.",
       "Ответ: $66+40-13=93$."
      ],
      "en": [
       "Multiples of three: $\\lfloor 200/3\\rfloor=66$.",
       "Multiples of five: $\\lfloor 200/5\\rfloor=40$.",
       "Multiples of both are the multiples of $15$: $\\lfloor 200/15\\rfloor=13$. Those were counted twice.",
       "Answer: $66+40-13=93$."
      ]
     },
     "ans": {
      "ru": "$93$",
      "en": "$93$"
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "Показатель простого $p$ в разложении $n!$ равен $$\\left\\lfloor\\frac np\\right\\rfloor+\\left\\lfloor\\frac n{p^2}\\right\\rfloor+\\left\\lfloor\\frac n{p^3}\\right\\rfloor+\\cdots$$",
      "en": "The exponent of a prime $p$ in $n!$ is $$\\left\\lfloor\\frac np\\right\\rfloor+\\left\\lfloor\\frac n{p^2}\\right\\rfloor+\\left\\lfloor\\frac n{p^3}\\right\\rfloor+\\cdots$$"
     },
     "name": {
      "ru": "Формула Лежандра",
      "en": "Legendre's formula"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Посчитаем, сколько множителей $p$ вносят числа $1,2,\\ldots,n$. Каждое кратное $p$ вносит хотя бы один — таких $\\lfloor n/p\\rfloor$. Каждое кратное $p^2$ вносит ещё один сверх первого — таких $\\lfloor n/p^2\\rfloor$. И так далее: кратное $p^k$ оказывается посчитанным ровно $k$ раз, в суммах с $1$-го по $k$-й. Сумма конечна, так как при $p^i>n$ слагаемые равны нулю. $\\blacksquare$",
      "en": "Count how many factors of $p$ the numbers $1,2,\\ldots,n$ contribute. Every multiple of $p$ contributes at least one — there are $\\lfloor n/p\\rfloor$ of them. Every multiple of $p^2$ contributes one more on top of that — $\\lfloor n/p^2\\rfloor$ of them. And so on: a multiple of $p^k$ ends up counted exactly $k$ times, in the $1$st through $k$th sums. The sum is finite, because once $p^i>n$ the terms are zero. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Сколькими нулями оканчивается $100!$?",
      "en": "How many zeros does $100!$ end in?"
     },
     "steps": {
      "ru": [
       "Ноль на конце — это множитель $10=2\\cdot 5$, значит нас интересует $\\min$ показателей двойки и пятёрки.",
       "Пятёрок заведомо меньше, поэтому считаем только их: $\\lfloor 100/5\\rfloor+\\lfloor 100/25\\rfloor=20+4=24$ (дальше $125>100$).",
       "Значит $100!$ оканчивается на $24$ нуля."
      ],
      "en": [
       "A trailing zero is a factor $10=2\\cdot 5$, so we want the $\\min$ of the exponents of two and five.",
       "There are certainly fewer fives, so count only those: $\\lfloor 100/5\\rfloor+\\lfloor 100/25\\rfloor=20+4=24$ (after which $125>100$).",
       "So $100!$ ends in $24$ zeros."
      ]
     },
     "ans": {
      "ru": "$24$",
      "en": "$24$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Двоек в $100!$ ровно $50+25+12+6+3+1=97$ — куда больше, чем пятёрок. Поэтому в задачах про нули на конце факториала всегда считают пятёрки.",
      "en": "The exponent of two in $100!$ is $50+25+12+6+3+1=97$ — far more than the fives. This is why trailing-zero problems always count the fives."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Приёмы, которые решают задачи",
    "en": "The moves that solve problems"
   },
   "blocks": [
    {
     "t": "ol",
     "items": {
      "ru": [
       "**Разложите на простые.** Почти любой вопрос про делители, НОД, НОК или квадраты читается прямо с показателей.",
       "**Используйте линейность:** из $d\\mid a$ и $d\\mid b$ следует $d\\mid ax+by$. Так доказывается большинство утверждений о делимости.",
       "**Вычитайте кратные,** чтобы упростить НОД: $\\gcd(a,b)=\\gcd(b,\\,a-qb)$. Работает и с буквами.",
       "**Доведите до $d\\mid$ маленького числа.** Если $d\\mid 2$, то $d\\in\\{1,2\\}$ — и задача закончилась.",
       "**Разбирайте по остаткам:** $n=3k,3k+1,3k+2$ — конечный список случаев.",
       "**Смотрите на чётность показателей,** когда речь о точных квадратах.",
       "**$d(n)=\\prod(e_i+1)$** — и обратно: по числу делителей можно восстановить возможные наборы показателей.",
       "**$\\gcd\\cdot\\operatorname{lcm}=ab$** — если известны три из четырёх величин, четвёртая находится делением.",
       "**Считайте кратные через $\\lfloor N/d\\rfloor$** и вычитайте посчитанное дважды.",
       "**В факториале считайте пятёрки,** если вопрос о нулях на конце."
      ],
      "en": [
       "**Factor into primes.** Nearly any question about divisors, GCD, LCM or squares can be read straight off the exponents.",
       "**Use linearity:** $d\\mid a$ and $d\\mid b$ give $d\\mid ax+by$. That is how most divisibility statements are proved.",
       "**Subtract multiples** to simplify a GCD: $\\gcd(a,b)=\\gcd(b,\\,a-qb)$. It works with letters too.",
       "**Drive it down to $d\\mid$ a small number.** If $d\\mid 2$ then $d\\in\\{1,2\\}$ — and the problem is over.",
       "**Split into remainder cases:** $n=3k,3k+1,3k+2$ is a finite list.",
       "**Watch the parity of the exponents** whenever perfect squares appear.",
       "**$d(n)=\\prod(e_i+1)$** — and backwards: the number of divisors tells you the possible exponent patterns.",
       "**$\\gcd\\cdot\\operatorname{lcm}=ab$** — knowing three of the four quantities gives the fourth by division.",
       "**Count multiples with $\\lfloor N/d\\rfloor$** and subtract whatever you counted twice.",
       "**In a factorial, count the fives** when the question is about trailing zeros."
      ]
     }
    }
   ]
  }
 ],
 "problems": [
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Сколько положительных делителей у числа $36$?",
    "en": "How many positive divisors does $36$ have?"
   },
   "hint": {
    "ru": "$36=2^2\\cdot 3^2$.",
    "en": "$36=2^2\\cdot 3^2$."
   },
   "sol": {
    "ru": "$d(36)=(2+1)(2+1)=9$. Это $1,2,3,4,6,9,12,18,36$.",
    "en": "$d(36)=(2+1)(2+1)=9$. They are $1,2,3,4,6,9,12,18,36$."
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Делится ли $4578$ на $3$?",
    "en": "Is $4578$ divisible by $3$?"
   },
   "hint": {
    "ru": "Сложите цифры.",
    "en": "Add the digits."
   },
   "sol": {
    "ru": "$4+5+7+8=24$, и $3\\mid 24$, значит да. (На $9$ не делится: $9\\nmid 24$.)",
    "en": "$4+5+7+8=24$ and $3\\mid 24$, so yes. (It is not divisible by $9$, since $9\\nmid 24$.)"
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Найдите наименьшее натуральное число, делящееся и на $6$, и на $8$.",
    "en": "Find the smallest positive integer divisible by both $6$ and $8$."
   },
   "hint": {
    "ru": "Это НОК.",
    "en": "This is the LCM."
   },
   "sol": {
    "ru": "$6=2\\cdot 3$, $8=2^3$, значит $\\operatorname{lcm}=2^3\\cdot 3=24$.",
    "en": "$6=2\\cdot 3$ and $8=2^3$, so $\\operatorname{lcm}=2^3\\cdot 3=24$."
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Найдите $\\gcd(48,180)$.",
    "en": "Find $\\gcd(48,180)$."
   },
   "hint": {
    "ru": "Разложите оба числа или примените алгоритм Евклида.",
    "en": "Factor both, or run the Euclidean algorithm."
   },
   "sol": {
    "ru": "$48=2^4\\cdot 3$, $180=2^2\\cdot 3^2\\cdot 5$. Минимумы показателей: $2^2\\cdot 3=12$.",
    "en": "$48=2^4\\cdot 3$, $180=2^2\\cdot 3^2\\cdot 5$. Taking minimums of the exponents: $2^2\\cdot 3=12$."
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Разложите $360$ на простые множители.",
    "en": "Factor $360$ into primes."
   },
   "hint": {
    "ru": "Начните с $360=36\\cdot 10$.",
    "en": "Start from $360=36\\cdot 10$."
   },
   "sol": {
    "ru": "$360=36\\cdot 10=(2^2\\cdot 3^2)(2\\cdot 5)=2^3\\cdot 3^2\\cdot 5$.",
    "en": "$360=36\\cdot 10=(2^2\\cdot 3^2)(2\\cdot 5)=2^3\\cdot 3^2\\cdot 5$."
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Делится ли $1234$ на $4$?",
    "en": "Is $1234$ divisible by $4$?"
   },
   "hint": {
    "ru": "Смотрите на две последние цифры.",
    "en": "Look at the last two digits."
   },
   "sol": {
    "ru": "Две последние цифры дают $34$, а $4\\nmid 34$. Значит нет — несмотря на чётную последнюю цифру.",
    "en": "The last two digits form $34$, and $4\\nmid 34$. So no — despite the even final digit."
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Найдите $\\operatorname{lcm}(9,12)$.",
    "en": "Find $\\operatorname{lcm}(9,12)$."
   },
   "hint": {
    "ru": "Максимумы показателей.",
    "en": "Take maximums of the exponents."
   },
   "sol": {
    "ru": "$9=3^2$, $12=2^2\\cdot 3$, значит $\\operatorname{lcm}=2^2\\cdot 3^2=36$.",
    "en": "$9=3^2$ and $12=2^2\\cdot 3$, so $\\operatorname{lcm}=2^2\\cdot 3^2=36$."
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Сколько чисел от $1$ до $100$ делятся на $7$?",
    "en": "How many integers from $1$ to $100$ are divisible by $7$?"
   },
   "hint": {
    "ru": "$\\lfloor N/d\\rfloor$.",
    "en": "$\\lfloor N/d\\rfloor$."
   },
   "sol": {
    "ru": "$\\lfloor 100/7\\rfloor=14$ (от $7$ до $98$).",
    "en": "$\\lfloor 100/7\\rfloor=14$ (from $7$ up to $98$)."
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Делится ли $1331$ на $11$?",
    "en": "Is $1331$ divisible by $11$?"
   },
   "hint": {
    "ru": "Знакочередующаяся сумма цифр.",
    "en": "Alternating digit sum."
   },
   "sol": {
    "ru": "Справа налево: $1-3+3-1=0$, и $11\\mid 0$, значит да. Действительно $1331=11^3$.",
    "en": "From the right: $1-3+3-1=0$, and $11\\mid 0$, so yes. Indeed $1331=11^3$."
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Сколько положительных делителей у числа $100$?",
    "en": "How many positive divisors does $100$ have?"
   },
   "hint": {
    "ru": "$100=2^2\\cdot 5^2$.",
    "en": "$100=2^2\\cdot 5^2$."
   },
   "sol": {
    "ru": "$d(100)=(2+1)(2+1)=9$.",
    "en": "$d(100)=(2+1)(2+1)=9$."
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Найдите сумму всех положительных делителей числа $28$.",
    "en": "Find the sum of all positive divisors of $28$."
   },
   "hint": {
    "ru": "Выпишите делители.",
    "en": "List the divisors."
   },
   "sol": {
    "ru": "$1+2+4+7+14+28=56$. Заметьте: сумма делителей, *меньших* $28$, равна $28$ — такие числа называют совершенными.",
    "en": "$1+2+4+7+14+28=56$. Note that the divisors *smaller* than $28$ sum to $28$ — such numbers are called perfect."
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "При какой цифре $A$ число $\\overline{2A4}$ делится на $9$?",
    "en": "For which digit $A$ is $\\overline{2A4}$ divisible by $9$?"
   },
   "hint": {
    "ru": "Сумма цифр.",
    "en": "Digit sum."
   },
   "sol": {
    "ru": "$2+A+4=6+A$ должно делиться на $9$. При $0\\le A\\le 9$ сумма лежит между $6$ и $15$, значит она равна $9$ и $A=3$: число $234=9\\cdot 26$.",
    "en": "$2+A+4=6+A$ must be divisible by $9$. For $0\\le A\\le 9$ the sum lies between $6$ and $15$, so it equals $9$ and $A=3$: the number is $234=9\\cdot 26$."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "Сколько положительных делителей у числа $2024$?",
    "en": "How many positive divisors does $2024$ have?"
   },
   "hint": {
    "ru": "$2024=8\\cdot 253$.",
    "en": "$2024=8\\cdot 253$."
   },
   "sol": {
    "ru": "$2024=8\\cdot 253=2^3\\cdot 11\\cdot 23$, значит $d(2024)=(3+1)(1+1)(1+1)=16$.",
    "en": "$2024=8\\cdot 253=2^3\\cdot 11\\cdot 23$, so $d(2024)=(3+1)(1+1)(1+1)=16$."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "Найдите наименьшее число, большее $1000$ и делящееся на $36$.",
    "en": "Find the smallest number greater than $1000$ that is divisible by $36$."
   },
   "hint": {
    "ru": "Поделите $1000$ на $36$ с остатком.",
    "en": "Divide $1000$ by $36$ with remainder."
   },
   "sol": {
    "ru": "$1000=36\\cdot 27+28$, значит следующее кратное — $36\\cdot 28=1008$.",
    "en": "$1000=36\\cdot 27+28$, so the next multiple is $36\\cdot 28=1008$."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "Число при делении на $7$ даёт остаток $3$, а при делении на $5$ — остаток $2$. Найдите наименьшее такое натуральное число.",
    "en": "A number leaves remainder $3$ on division by $7$ and remainder $2$ on division by $5$. Find the smallest such positive integer."
   },
   "hint": {
    "ru": "Перебирайте числа вида $7k+3$.",
    "en": "Run through the numbers of the form $7k+3$."
   },
   "sol": {
    "ru": "Числа с остатком $3$ по модулю $7$: $3,10,17,24,\\ldots$ Из них первое с остатком $2$ по модулю $5$ — это $17$ ($17=5\\cdot 3+2$). Ответ: $17$.",
    "en": "The numbers leaving remainder $3$ mod $7$ are $3,10,17,24,\\ldots$ The first of these leaving remainder $2$ mod $5$ is $17$ ($17=5\\cdot 3+2$). Answer: $17$."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "Сколько чисел от $1$ до $200$ делятся на $3$ или на $5$?",
    "en": "How many integers from $1$ to $200$ are divisible by $3$ or by $5$?"
   },
   "hint": {
    "ru": "Вычтите посчитанное дважды.",
    "en": "Subtract what you counted twice."
   },
   "sol": {
    "ru": "$\\lfloor 200/3\\rfloor+\\lfloor 200/5\\rfloor-\\lfloor 200/15\\rfloor=66+40-13=93$.",
    "en": "$\\lfloor 200/3\\rfloor+\\lfloor 200/5\\rfloor-\\lfloor 200/15\\rfloor=66+40-13=93$."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "Произведение двух натуральных чисел равно $1620$, а их НОД равен $6$. Найдите их НОК.",
    "en": "The product of two positive integers is $1620$ and their GCD is $6$. Find their LCM."
   },
   "hint": {
    "ru": "$\\gcd\\cdot\\operatorname{lcm}=ab$.",
    "en": "$\\gcd\\cdot\\operatorname{lcm}=ab$."
   },
   "sol": {
    "ru": "$\\operatorname{lcm}=\\dfrac{1620}{6}=270$.",
    "en": "$\\operatorname{lcm}=\\dfrac{1620}{6}=270$."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "Сколькими нулями оканчивается $100!$?",
    "en": "How many zeros does $100!$ end in?"
   },
   "hint": {
    "ru": "Считайте пятёрки.",
    "en": "Count the fives."
   },
   "sol": {
    "ru": "$\\lfloor 100/5\\rfloor+\\lfloor 100/25\\rfloor=20+4=24$.",
    "en": "$\\lfloor 100/5\\rfloor+\\lfloor 100/25\\rfloor=20+4=24$."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "На какое наименьшее натуральное число нужно умножить $360$, чтобы получился точный квадрат?",
    "en": "What is the smallest positive integer that $360$ must be multiplied by to give a perfect square?"
   },
   "hint": {
    "ru": "Сделайте все показатели чётными.",
    "en": "Make every exponent even."
   },
   "sol": {
    "ru": "$360=2^3\\cdot 3^2\\cdot 5$; нечётны показатели у $2$ и $5$, значит нужно домножить на $10$, и $3600=60^2$.",
    "en": "$360=2^3\\cdot 3^2\\cdot 5$; the odd exponents belong to $2$ and $5$, so multiply by $10$, giving $3600=60^2$."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "Сколько двузначных чисел делятся и на $4$, и на $6$?",
    "en": "How many two-digit numbers are divisible by both $4$ and $6$?"
   },
   "hint": {
    "ru": "Это кратные НОК, а не произведения.",
    "en": "These are multiples of the LCM, not of the product."
   },
   "sol": {
    "ru": "$\\operatorname{lcm}(4,6)=12$. Двузначные кратные $12$: $12,24,\\ldots,96$, то есть $12k$ при $1\\le k\\le 8$ — всего $8$ чисел.",
    "en": "$\\operatorname{lcm}(4,6)=12$. The two-digit multiples of $12$ are $12,24,\\ldots,96$, i.e. $12k$ for $1\\le k\\le 8$ — that is $8$ numbers."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "Если $3\\mid n$ и $4\\mid n$, обязательно ли $12\\mid n$? А если $4\\mid n$ и $6\\mid n$, обязательно ли $24\\mid n$?",
    "en": "If $3\\mid n$ and $4\\mid n$, must $12\\mid n$? And if $4\\mid n$ and $6\\mid n$, must $24\\mid n$?"
   },
   "hint": {
    "ru": "Всё решает НОД двух делителей.",
    "en": "The GCD of the two divisors decides it."
   },
   "sol": {
    "ru": "В первом случае да: $\\gcd(3,4)=1$, поэтому $3\\cdot 4=12$ делит $n$.\n\nВо втором — нет: $\\gcd(4,6)=2\\neq1$, и из делимости на $4$ и $6$ следует лишь делимость на $\\operatorname{lcm}(4,6)=12$. Контрпример: $n=12$.",
    "en": "In the first case yes: $\\gcd(3,4)=1$, so $3\\cdot 4=12$ divides $n$.\n\nIn the second, no: $\\gcd(4,6)=2\\neq1$, and divisibility by $4$ and $6$ only forces divisibility by $\\operatorname{lcm}(4,6)=12$. Counterexample: $n=12$."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "Сколькими нулями оканчивается число $2^{10}\\cdot 5^8$?",
    "en": "How many zeros does $2^{10}\\cdot 5^8$ end in?"
   },
   "hint": {
    "ru": "Ноль — это пара $2\\cdot 5$.",
    "en": "A zero is a pair $2\\cdot 5$."
   },
   "sol": {
    "ru": "Число нулей равно $\\min(10,8)=8$: $2^{10}5^8=10^8\\cdot 2^2=400\\,000\\,000$.",
    "en": "The number of zeros is $\\min(10,8)=8$: $2^{10}5^8=10^8\\cdot 2^2=400{,}000{,}000$."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "Найдите наименьшее натуральное число, которое при делении на $2,3,4,5,6$ даёт остаток $1$.",
    "en": "Find the smallest positive integer that leaves remainder $1$ on division by each of $2,3,4,5,6$."
   },
   "hint": {
    "ru": "Вычтите единицу — и остатки исчезнут.",
    "en": "Subtract one and the remainders vanish."
   },
   "sol": {
    "ru": "Если $n-1$ делится на все пять чисел, то $n-1$ кратно $\\operatorname{lcm}(2,3,4,5,6)=60$. Наименьшее положительное $n>1$ — это $n=61$.",
    "en": "If $n-1$ is divisible by all five numbers then $n-1$ is a multiple of $\\operatorname{lcm}(2,3,4,5,6)=60$. The smallest such $n>1$ is $n=61$."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "Какое наибольшее число подарочных наборов можно собрать из $48$ конфет и $36$ печений так, чтобы все наборы были одинаковы и ничего не осталось?",
    "en": "What is the largest number of identical gift bags that can be made from $48$ sweets and $36$ biscuits with nothing left over?"
   },
   "hint": {
    "ru": "Количество наборов должно делить и $48$, и $36$.",
    "en": "The number of bags must divide both $48$ and $36$."
   },
   "sol": {
    "ru": "Это $\\gcd(48,36)=12$ наборов: в каждом $4$ конфеты и $3$ печенья.",
    "en": "That is $\\gcd(48,36)=12$ bags, each with $4$ sweets and $3$ biscuits."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "Сколько положительных делителей числа $1800$ являются точными квадратами?",
    "en": "How many positive divisors of $1800$ are perfect squares?"
   },
   "hint": {
    "ru": "Показатели делителя должны быть чётными.",
    "en": "The divisor's exponents must all be even."
   },
   "sol": {
    "ru": "$1800=2^3\\cdot 3^2\\cdot 5^2$. Для квадрата показатель двойки выбирается из $\\{0,2\\}$, тройки — из $\\{0,2\\}$, пятёрки — из $\\{0,2\\}$. Итого $2\\cdot 2\\cdot 2=8$ квадратов: $1,4,9,25,36,100,225,900$.",
    "en": "$1800=2^3\\cdot 3^2\\cdot 5^2$. For a square the exponent of two comes from $\\{0,2\\}$, of three from $\\{0,2\\}$, of five from $\\{0,2\\}$. That is $2\\cdot 2\\cdot 2=8$ squares: $1,4,9,25,36,100,225,900$."
   }
  },
  {
   "src": "AMC 8 · задачи 15–25 / AMC 8 · problems 15-25",
   "lvl": 3,
   "q": {
    "ru": "Какие натуральные числа имеют ровно три положительных делителя?",
    "en": "Which positive integers have exactly three positive divisors?"
   },
   "hint": {
    "ru": "$d(n)=3$, а $3$ — простое число.",
    "en": "$d(n)=3$, and $3$ is prime."
   },
   "sol": {
    "ru": "$d(n)=\\prod(e_i+1)=3$. Так как $3$ просто, произведение состоит из единственного множителя, равного $3$, значит у $n$ ровно одно простое и $e+1=3$, то есть $e=2$.\n\nЗначит $n=p^2$ — квадрат простого: $4,9,25,49,121,\\ldots$ Их делители — $1,p,p^2$.",
    "en": "$d(n)=\\prod(e_i+1)=3$. Since $3$ is prime the product has a single factor, equal to $3$, so $n$ has exactly one prime and $e+1=3$, i.e. $e=2$.\n\nSo $n=p^2$, the square of a prime: $4,9,25,49,121,\\ldots$ Its divisors are $1,p,p^2$."
   }
  },
  {
   "src": "AMC 8 · задачи 15–25 / AMC 8 · problems 15-25",
   "lvl": 3,
   "q": {
    "ru": "Найдите наименьшее натуральное число, имеющее ровно $12$ положительных делителей.",
    "en": "Find the smallest positive integer with exactly $12$ positive divisors."
   },
   "hint": {
    "ru": "Переберите разложения числа $12$ в произведение множителей $e_i+1$.",
    "en": "Run through the ways of writing $12$ as a product of factors $e_i+1$."
   },
   "sol": {
    "ru": "Нужны показатели с $\\prod(e_i+1)=12$. Варианты: $12=12$ даёт $p^{11}\\ge 2^{11}=2048$; $12=6\\cdot 2$ даёт $p^5q\\ge 2^5\\cdot 3=96$; $12=4\\cdot 3$ даёт $p^3q^2\\ge 2^3\\cdot 3^2=72$; $12=3\\cdot 2\\cdot 2$ даёт $p^2qr\\ge 2^2\\cdot 3\\cdot 5=60$.\n\nВ каждом варианте наименьшее значение получается, когда большие показатели стоят у меньших простых. Минимум из $2048,96,72,60$ — это $\\mathbf{60}$.",
    "en": "We need exponents with $\\prod(e_i+1)=12$. The options: $12=12$ gives $p^{11}\\ge 2^{11}=2048$; $12=6\\cdot 2$ gives $p^5q\\ge 2^5\\cdot 3=96$; $12=4\\cdot 3$ gives $p^3q^2\\ge 2^3\\cdot 3^2=72$; $12=3\\cdot 2\\cdot 2$ gives $p^2qr\\ge 2^2\\cdot 3\\cdot 5=60$.\n\nIn each case the least value comes from putting the larger exponents on the smaller primes. The minimum of $2048,96,72,60$ is $\\mathbf{60}$."
   }
  },
  {
   "src": "AMC 8 · задачи 15–25 / AMC 8 · problems 15-25",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что дробь $\\dfrac{2n+3}{n+1}$ несократима при любом натуральном $n$.",
    "en": "Prove that $\\dfrac{2n+3}{n+1}$ is irreducible for every positive integer $n$."
   },
   "hint": {
    "ru": "Вычтите из числителя удвоенный знаменатель.",
    "en": "Subtract twice the denominator from the numerator."
   },
   "sol": {
    "ru": "Пусть $d=\\gcd(2n+3,\\,n+1)$. Тогда $d$ делит и $2n+3$, и $2(n+1)=2n+2$, а значит по линейности делит их разность:\n\n$$(2n+3)-(2n+2)=1.$$\n\nИз $d\\mid 1$ и $d>0$ следует $d=1$. $\\blacksquare$",
    "en": "Let $d=\\gcd(2n+3,\\,n+1)$. Then $d$ divides $2n+3$ and $2(n+1)=2n+2$, so by linearity it divides their difference:\n\n$$(2n+3)-(2n+2)=1.$$\n\nFrom $d\\mid 1$ and $d>0$ we get $d=1$. $\\blacksquare$"
   }
  },
  {
   "src": "AMC 8 · задачи 15–25 / AMC 8 · problems 15-25",
   "lvl": 3,
   "q": {
    "ru": "Какова наибольшая степень тройки, делящая $50!$?",
    "en": "What is the highest power of three dividing $50!$?"
   },
   "hint": {
    "ru": "Формула Лежандра.",
    "en": "Legendre's formula."
   },
   "sol": {
    "ru": "$\\lfloor 50/3\\rfloor+\\lfloor 50/9\\rfloor+\\lfloor 50/27\\rfloor=16+5+1=22$ (далее $81>50$). Значит наибольшая степень — $3^{22}$.",
    "en": "$\\lfloor 50/3\\rfloor+\\lfloor 50/9\\rfloor+\\lfloor 50/27\\rfloor=16+5+1=22$ (then $81>50$). So the highest power is $3^{22}$."
   }
  },
  {
   "src": "Уровень «Кенгуру» (Cadet) / Kangaroo level (Cadet)",
   "lvl": 3,
   "q": {
    "ru": "Докажите, что сумма любых пяти подряд идущих целых чисел делится на $5$. Верно ли, что сумма любых четырёх подряд идущих делится на $4$?",
    "en": "Prove that the sum of any five consecutive integers is divisible by $5$. Is the sum of any four consecutive integers divisible by $4$?"
   },
   "hint": {
    "ru": "Запишите числа симметрично относительно среднего.",
    "en": "Write the numbers symmetrically about the middle one."
   },
   "sol": {
    "ru": "Пять чисел: $n-2,n-1,n,n+1,n+2$. Их сумма равна $5n$ — кратна пяти при любом $n$. $\\blacksquare$\n\nЧетыре числа: $n,n+1,n+2,n+3$. Сумма равна $4n+6$, и остаток при делении на $4$ равен $2$ при любом $n$. Значит сумма четырёх подряд идущих чисел **никогда** не делится на $4$. (Причина: у чётного количества слагаемых нет среднего элемента.)",
    "en": "Five numbers: $n-2,n-1,n,n+1,n+2$. Their sum is $5n$ — a multiple of five for every $n$. $\\blacksquare$\n\nFour numbers: $n,n+1,n+2,n+3$. The sum is $4n+6$, which leaves remainder $2$ on division by $4$ for every $n$. So the sum of four consecutive integers is **never** divisible by $4$. (The reason: an even count of terms has no middle element.)"
   }
  },
  {
   "src": "Уровень «Кенгуру» (Cadet) / Kangaroo level (Cadet)",
   "lvl": 3,
   "q": {
    "ru": "Найдите все числа между $300$ и $400$, делящиеся и на $7$, и на $8$.",
    "en": "Find every number between $300$ and $400$ divisible by both $7$ and $8$."
   },
   "hint": {
    "ru": "$\\gcd(7,8)=1$.",
    "en": "$\\gcd(7,8)=1$."
   },
   "sol": {
    "ru": "Так как $7$ и $8$ взаимно просты, число должно делиться на $56$. Кратные $56$: $\\ldots,280,336,392,448,\\ldots$ В промежутке $(300;400)$ лежат $336$ и $392$.",
    "en": "Since $7$ and $8$ are coprime, the number must be divisible by $56$. The multiples of $56$ are $\\ldots,280,336,392,448,\\ldots$ In $(300,400)$ we get $336$ and $392$."
   }
  },
  {
   "src": "AMC 8 · задачи 15–25 / AMC 8 · problems 15-25",
   "lvl": 3,
   "q": {
    "ru": "Сколько упорядоченных пар натуральных чисел $(a,b)$ удовлетворяют условиям $ab=72$ и $\\gcd(a,b)=1$?",
    "en": "How many ordered pairs of positive integers $(a,b)$ satisfy $ab=72$ and $\\gcd(a,b)=1$?"
   },
   "hint": {
    "ru": "Каждая степень простого целиком уходит к одному из двух.",
    "en": "Each prime power goes entirely to one of the two."
   },
   "sol": {
    "ru": "$72=2^3\\cdot 3^2$. Условие $\\gcd(a,b)=1$ означает, что ни одно простое не встречается в обоих числах, поэтому множитель $2^3$ целиком достаётся $a$ или $b$ — два варианта, и независимо от этого $3^2$ тоже — ещё два.\n\nИтого $2\\cdot 2=4$ пары: $(1,72),(8,9),(9,8),(72,1)$.",
    "en": "$72=2^3\\cdot 3^2$. The condition $\\gcd(a,b)=1$ says no prime occurs in both numbers, so the factor $2^3$ goes wholly to $a$ or wholly to $b$ — two choices — and independently so does $3^2$ — two more.\n\nThat makes $2\\cdot 2=4$ pairs: $(1,72),(8,9),(9,8),(72,1)$."
   }
  },
  {
   "src": "AMC 8 · задачи 15–25 / AMC 8 · problems 15-25",
   "lvl": 3,
   "q": {
    "ru": "Произведение всех положительных делителей числа $36$ — чему оно равно?",
    "en": "What is the product of all the positive divisors of $36$?"
   },
   "hint": {
    "ru": "Разбейте делители на пары $d$ и $36/d$.",
    "en": "Pair the divisors as $d$ and $36/d$."
   },
   "sol": {
    "ru": "$d(36)=9$, значит произведение равно $36^{9/2}=6^{9}=10\\,077\\,696$.\n\nПроверка попарно: $(1,36),(2,18),(3,12),(4,9)$ дают по $36$ каждая — это $36^4$ — а непарный делитель $6=\\sqrt{36}$ даёт ещё множитель $6$; итого $36^4\\cdot 6=6^9$. $\\checkmark$",
    "en": "$d(36)=9$, so the product is $36^{9/2}=6^{9}=10{,}077{,}696$.\n\nCheck by pairing: $(1,36),(2,18),(3,12),(4,9)$ each multiply to $36$ — that is $36^4$ — and the unpaired divisor $6=\\sqrt{36}$ contributes a further $6$; in all $36^4\\cdot 6=6^9$. $\\checkmark$"
   }
  },
  {
   "src": "«Кенгуру» · 5 баллов / Kangaroo · 5 points",
   "lvl": 3,
   "q": {
    "ru": "У числа $n^2$ ровно $15$ положительных делителей. Сколько делителей может быть у $n$?",
    "en": "The number $n^2$ has exactly $15$ positive divisors. How many divisors can $n$ have?"
   },
   "hint": {
    "ru": "У квадрата все показатели чётны.",
    "en": "Every exponent of a square is even."
   },
   "sol": {
    "ru": "Пусть $n=\\prod p_i^{e_i}$, тогда $n^2=\\prod p_i^{2e_i}$ и $d(n^2)=\\prod(2e_i+1)=15$. Каждый множитель нечётен, и $15=15$ или $15=3\\cdot 5$.\n\nСлучай $15=15$: $2e+1=15$, то есть $e=7$, значит $n=p^7$ и $d(n)=8$.\n\nСлучай $15=3\\cdot 5$: $2e_1+1=3$ и $2e_2+1=5$, то есть $e_1=1$, $e_2=2$, значит $n=p\\,q^2$ и $d(n)=2\\cdot 3=6$.\n\nОтвет: $6$ или $8$. (Примеры: $n=2^7=128$ и $n=2\\cdot 3^2=18$.)",
    "en": "Write $n=\\prod p_i^{e_i}$, so $n^2=\\prod p_i^{2e_i}$ and $d(n^2)=\\prod(2e_i+1)=15$. Every factor is odd, and $15=15$ or $15=3\\cdot 5$.\n\nCase $15=15$: $2e+1=15$, so $e=7$, giving $n=p^7$ and $d(n)=8$.\n\nCase $15=3\\cdot 5$: $2e_1+1=3$ and $2e_2+1=5$, so $e_1=1$, $e_2=2$, giving $n=p\\,q^2$ and $d(n)=2\\cdot 3=6$.\n\nAnswer: $6$ or $8$. (Examples: $n=2^7=128$ and $n=2\\cdot 3^2=18$.)"
   }
  },
  {
   "src": "AMC 8 · задачи 15–25 / AMC 8 · problems 15-25",
   "lvl": 3,
   "q": {
    "ru": "Найдите наименьшее натуральное $n$, для которого $n!$ делится на $2^{10}$.",
    "en": "Find the smallest positive integer $n$ for which $n!$ is divisible by $2^{10}$."
   },
   "hint": {
    "ru": "Считайте двойки по формуле Лежандра и увеличивайте $n$.",
    "en": "Count the twos by Legendre's formula and increase $n$."
   },
   "sol": {
    "ru": "Показатель двойки в $n!$ равен $\\lfloor n/2\\rfloor+\\lfloor n/4\\rfloor+\\lfloor n/8\\rfloor+\\cdots$\n\nПри $n=11$: $5+2+1=8<10$.\n\nПри $n=12$: $6+3+1=10\\ge 10$. $\\checkmark$\n\nТак как показатель не убывает с ростом $n$, ответ — $n=12$.",
    "en": "The exponent of two in $n!$ is $\\lfloor n/2\\rfloor+\\lfloor n/4\\rfloor+\\lfloor n/8\\rfloor+\\cdots$\n\nFor $n=11$: $5+2+1=8<10$.\n\nFor $n=12$: $6+3+1=10\\ge 10$. $\\checkmark$\n\nSince the exponent never decreases as $n$ grows, the answer is $n=12$."
   }
  },
  {
   "src": "Уровень «Кенгуру» (Cadet) / Kangaroo level (Cadet)",
   "lvl": 3,
   "q": {
    "ru": "Шестизначное число записано цифрами $\\overline{3A5B92}$ и делится на $9$, причём $A=B$. Найдите $A$.",
    "en": "A six-digit number is written $\\overline{3A5B92}$, is divisible by $9$, and has $A=B$. Find $A$."
   },
   "hint": {
    "ru": "Сложите все цифры, помня, что $A$ входит дважды.",
    "en": "Add all the digits, remembering $A$ appears twice."
   },
   "sol": {
    "ru": "Сумма цифр равна $3+A+5+A+9+2=19+2A$. Нужно, чтобы $9$ делило $19+2A$. При $0\\le A\\le 9$ величина $19+2A$ лежит между $19$ и $37$, значит она равна $27$ или $36$. Из $19+2A=27$ получаем $A=4$; $19+2A=36$ даёт нецелое $A$. Ответ: $A=4$ (число $345492$).",
    "en": "The digit sum is $3+A+5+A+9+2=19+2A$. We need $9$ to divide $19+2A$. For $0\\le A\\le 9$ the value $19+2A$ lies between $19$ and $37$, so it is $27$ or $36$. From $19+2A=27$ we get $A=4$; $19+2A=36$ gives a non-integer $A$. Answer: $A=4$ (the number $345492$)."
   }
  },
  {
   "src": "В духе AoPS / AoPS style",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что для любых натуральных $a,b$ выполнено $\\gcd(a,b)\\cdot\\operatorname{lcm}(a,b)=ab$.",
    "en": "Prove that $\\gcd(a,b)\\cdot\\operatorname{lcm}(a,b)=ab$ for all positive integers $a,b$."
   },
   "hint": {
    "ru": "Сравните показатели каждого простого в двух частях равенства.",
    "en": "Compare the exponent of each prime on the two sides."
   },
   "sol": {
    "ru": "Запишем $a=\\prod p_i^{\\alpha_i}$ и $b=\\prod p_i^{\\beta_i}$, взяв объединение простых и показатель $0$ там, где простого нет. По теореме о НОД и НОК через разложения показатель $p_i$ равен $\\min(\\alpha_i,\\beta_i)$ в НОД и $\\max(\\alpha_i,\\beta_i)$ в НОК.\n\nВ левой части равенства показатель $p_i$ равен $\\min(\\alpha_i,\\beta_i)+\\max(\\alpha_i,\\beta_i)$, в правой — $\\alpha_i+\\beta_i$. Но для любых двух чисел меньшее плюс большее равно их сумме, то есть $\\min(\\alpha,\\beta)+\\max(\\alpha,\\beta)=\\alpha+\\beta$.\n\nПоказатели совпадают у каждого простого, а по основной теореме арифметики этого достаточно, чтобы числа были равны. $\\blacksquare$",
    "en": "Write $a=\\prod p_i^{\\alpha_i}$ and $b=\\prod p_i^{\\beta_i}$, using the union of the primes and exponent $0$ where a prime is absent. By the theorem on GCD and LCM from factorisations, the exponent of $p_i$ is $\\min(\\alpha_i,\\beta_i)$ in the GCD and $\\max(\\alpha_i,\\beta_i)$ in the LCM.\n\nOn the left-hand side the exponent of $p_i$ is $\\min(\\alpha_i,\\beta_i)+\\max(\\alpha_i,\\beta_i)$; on the right it is $\\alpha_i+\\beta_i$. But for any two numbers the smaller plus the larger is their sum, i.e. $\\min(\\alpha,\\beta)+\\max(\\alpha,\\beta)=\\alpha+\\beta$.\n\nThe exponents agree at every prime, and by the fundamental theorem of arithmetic that is enough for the numbers to be equal. $\\blacksquare$"
   }
  },
  {
   "src": "В духе AoPS / AoPS style",
   "lvl": 4,
   "q": {
    "ru": "Найдите все натуральные $n$, для которых $n+1$ делит $n^2+1$.",
    "en": "Find every positive integer $n$ such that $n+1$ divides $n^2+1$."
   },
   "hint": {
    "ru": "Разделите $n^2+1$ на $n+1$ с остатком.",
    "en": "Divide $n^2+1$ by $n+1$ with remainder."
   },
   "sol": {
    "ru": "Заметим, что $n^2+1=(n+1)(n-1)+2$. Действительно, $(n+1)(n-1)=n^2-1$.\n\nПервое слагаемое кратно $n+1$, поэтому по линейности $n+1$ делит $n^2+1$ тогда и только тогда, когда $n+1$ делит $2$.\n\nПри натуральном $n$ имеем $n+1\\ge 2$, значит $n+1=2$ и $n=1$. Проверка: $n^2+1=2$ делится на $n+1=2$. $\\checkmark$",
    "en": "Note that $n^2+1=(n+1)(n-1)+2$, since $(n+1)(n-1)=n^2-1$.\n\nThe first term is a multiple of $n+1$, so by linearity $n+1$ divides $n^2+1$ if and only if $n+1$ divides $2$.\n\nFor a positive integer $n$ we have $n+1\\ge 2$, so $n+1=2$ and $n=1$. Check: $n^2+1=2$ is divisible by $n+1=2$. $\\checkmark$"
   }
  },
  {
   "src": "В духе AoPS / AoPS style",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что число положительных делителей $d(n)$ нечётно тогда и только тогда, когда $n$ — точный квадрат.",
    "en": "Prove that the number of positive divisors $d(n)$ is odd if and only if $n$ is a perfect square."
   },
   "hint": {
    "ru": "Два способа: через показатели или через разбиение делителей на пары.",
    "en": "Two routes: through the exponents, or by pairing the divisors."
   },
   "sol": {
    "ru": "**Через показатели.** Если $n=\\prod p_i^{e_i}$, то $d(n)=\\prod(e_i+1)$. Произведение нечётно тогда и только тогда, когда нечётен каждый множитель, то есть когда каждое $e_i$ чётно — а это в точности признак точного квадрата.\n\n**Через пары.** Сопоставим делителю $d$ делитель $n/d$. Это разбивает все делители на пары, кроме случая $d=n/d$, то есть $d^2=n$. Такой непарный делитель существует ровно тогда, когда $n$ — точный квадрат, и тогда он единственен ($d=\\sqrt n$). Значит $d(n)$ нечётно ровно в этом случае. $\\blacksquare$",
    "en": "**Through the exponents.** If $n=\\prod p_i^{e_i}$ then $d(n)=\\prod(e_i+1)$. A product is odd exactly when every factor is odd, that is when every $e_i$ is even — which is precisely the test for a perfect square.\n\n**By pairing.** Match each divisor $d$ with the divisor $n/d$. This splits the divisors into pairs except when $d=n/d$, i.e. $d^2=n$. Such an unpaired divisor exists exactly when $n$ is a perfect square, and then it is unique ($d=\\sqrt n$). So $d(n)$ is odd in exactly that case. $\\blacksquare$"
   }
  },
  {
   "src": "В духе AoPS / AoPS style",
   "lvl": 4,
   "q": {
    "ru": "Сколькими нулями оканчивается $2024!$?",
    "en": "How many zeros does $2024!$ end in?"
   },
   "hint": {
    "ru": "Считайте пятёрки по формуле Лежандра до $5^4$.",
    "en": "Count the fives by Legendre's formula up to $5^4$."
   },
   "sol": {
    "ru": "$\\lfloor 2024/5\\rfloor=404$, $\\lfloor 2024/25\\rfloor=80$, $\\lfloor 2024/125\\rfloor=16$, $\\lfloor 2024/625\\rfloor=3$, а $3125>2024$.\n\nСумма: $404+80+16+3=503$. Двоек заведомо больше, поэтому ответ — $503$ нуля.",
    "en": "$\\lfloor 2024/5\\rfloor=404$, $\\lfloor 2024/25\\rfloor=80$, $\\lfloor 2024/125\\rfloor=16$, $\\lfloor 2024/625\\rfloor=3$, and $3125>2024$.\n\nThe sum is $404+80+16+3=503$. There are certainly more twos, so the answer is $503$ zeros."
   }
  },
  {
   "src": "Вызов / Challenge",
   "lvl": 4,
   "q": {
    "ru": "Найдите все простые $p$, для которых числа $p$, $p+2$ и $p+4$ тоже простые.",
    "en": "Find every prime $p$ for which $p$, $p+2$ and $p+4$ are all prime."
   },
   "hint": {
    "ru": "Разберите остатки по модулю $3$.",
    "en": "Split into remainder cases modulo $3$."
   },
   "sol": {
    "ru": "Три числа $p,p+2,p+4$ дают по модулю $3$ остатки $p,p+2,p+1$ — то есть *все три* возможных остатка $0,1,2$ в каком-то порядке. Значит одно из них делится на $3$.\n\nПростое число, делящееся на $3$, — это только само $3$. Поэтому одно из трёх чисел равно $3$, а так как $p$ — наименьшее из них, остаётся $p=3$.\n\nПроверка: $3,5,7$ — все простые. $\\checkmark$ Ответ: единственное $p=3$.",
    "en": "Modulo $3$ the three numbers $p,p+2,p+4$ leave the remainders $p,p+2,p+1$ — that is *all three* possible remainders $0,1,2$ in some order. So one of them is divisible by $3$.\n\nThe only prime divisible by $3$ is $3$ itself. So one of the three numbers equals $3$, and since $p$ is the smallest of them, $p=3$.\n\nCheck: $3,5,7$ are all prime. $\\checkmark$ Answer: $p=3$ only."
   }
  },
  {
   "src": "Вызов / Challenge",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что если $7$ делит $a^2+b^2$, то $7$ делит и $a$, и $b$.",
    "en": "Prove that if $7$ divides $a^2+b^2$ then $7$ divides both $a$ and $b$."
   },
   "hint": {
    "ru": "Выпишите все возможные остатки квадрата по модулю $7$.",
    "en": "List every possible remainder of a square modulo $7$."
   },
   "sol": {
    "ru": "Переберём остатки $a\\bmod 7\\in\\{0,1,2,3,4,5,6\\}$ и посчитаем $a^2\\bmod 7$:\n\n$0^2=0$, $1^2=1$, $2^2=4$, $3^2=2$, $4^2=2$, $5^2=4$, $6^2=1$.\n\nЗначит квадрат по модулю $7$ даёт только остатки $\\{0,1,2,4\\}$.\n\nНужно, чтобы сумма двух таких остатков делилась на $7$, то есть была равна $0$ или $7$. Проверим все суммы двух элементов $\\{0,1,2,4\\}$: $0,1,2,4,2,3,5,4,6,8$. Из них делится на $7$ только $0$, и получается она единственным способом — $0+0$.\n\nЗначит $a^2\\equiv 0$ и $b^2\\equiv 0$ по модулю $7$. Так как $7$ просто, из $7\\mid a^2=a\\cdot a$ следует $7\\mid a$; то же для $b$. $\\blacksquare$",
    "en": "Run through $a\\bmod 7\\in\\{0,1,2,3,4,5,6\\}$ and compute $a^2\\bmod 7$:\n\n$0^2=0$, $1^2=1$, $2^2=4$, $3^2=2$, $4^2=2$, $5^2=4$, $6^2=1$.\n\nSo a square modulo $7$ leaves only the remainders $\\{0,1,2,4\\}$.\n\nWe need the sum of two such remainders to be divisible by $7$, i.e. equal to $0$ or $7$. The sums of two elements of $\\{0,1,2,4\\}$ are $0,1,2,4,2,3,5,4,6,8$. Only $0$ is divisible by $7$, and it arises in one way only — as $0+0$.\n\nHence $a^2\\equiv 0$ and $b^2\\equiv 0$ modulo $7$. Since $7$ is prime, $7\\mid a^2=a\\cdot a$ gives $7\\mid a$; likewise for $b$. $\\blacksquare$"
   }
  },
  {
   "src": "Вызов / Challenge",
   "lvl": 4,
   "q": {
    "ru": "Найдите все натуральные $n$, для которых сумма $1+2+\\cdots+n$ делится на $n+1$.",
    "en": "Find every positive integer $n$ for which $1+2+\\cdots+n$ is divisible by $n+1$."
   },
   "hint": {
    "ru": "Запишите сумму формулой и сократите.",
    "en": "Write the sum in closed form and cancel."
   },
   "sol": {
    "ru": "Сумма равна $S=\\dfrac{n(n+1)}2$. Тогда\n\n$$\\frac{S}{n+1}=\\frac{n(n+1)}{2(n+1)}=\\frac n2.$$\n\nЭто целое число тогда и только тогда, когда $n$ чётно.\n\nОтвет: все чётные $n$. Проверка при $n=4$: $1+2+3+4=10$ делится на $5$. $\\checkmark$ При $n=3$: $6$ не делится на $4$. $\\checkmark$",
    "en": "The sum is $S=\\dfrac{n(n+1)}2$. Then\n\n$$\\frac{S}{n+1}=\\frac{n(n+1)}{2(n+1)}=\\frac n2.$$\n\nThis is an integer if and only if $n$ is even.\n\nAnswer: every even $n$. Check at $n=4$: $1+2+3+4=10$ is divisible by $5$. $\\checkmark$ At $n=3$: $6$ is not divisible by $4$. $\\checkmark$"
   }
  },
  {
   "src": "Вызов / Challenge",
   "lvl": 4,
   "q": {
    "ru": "Сколько чисел $n$ от $1$ до $100$ взаимно просты с $100$?",
    "en": "How many integers $n$ from $1$ to $100$ are coprime to $100$?"
   },
   "hint": {
    "ru": "Выбросьте кратные $2$ и кратные $5$, не забыв о пересечении.",
    "en": "Throw out the multiples of $2$ and of $5$, minding the overlap."
   },
   "sol": {
    "ru": "$100=2^2\\cdot 5^2$, поэтому $\\gcd(n,100)>1$ ровно тогда, когда $n$ делится на $2$ или на $5$.\n\nКратных двум — $50$, кратных пяти — $20$, кратных десяти — $10$. По принципу включения-исключения «плохих» чисел $50+20-10=60$.\n\nЗначит взаимно простых с $100$ ровно $100-60=40$. (Это значение функции Эйлера: $\\varphi(100)=100\\left(1-\\tfrac12\\right)\\left(1-\\tfrac15\\right)=40$.)",
    "en": "$100=2^2\\cdot 5^2$, so $\\gcd(n,100)>1$ exactly when $n$ is divisible by $2$ or by $5$.\n\nThere are $50$ multiples of two, $20$ of five and $10$ of ten. By inclusion-exclusion the \"bad\" numbers number $50+20-10=60$.\n\nSo exactly $100-60=40$ are coprime to $100$. (This is Euler's function: $\\varphi(100)=100\\left(1-\\tfrac12\\right)\\left(1-\\tfrac15\\right)=40$.)"
   }
  },
  {
   "src": "Вызов / Challenge",
   "lvl": 4,
   "q": {
    "ru": "Натуральное число $N$ при делении на $9$ даёт остаток $7$. Какой остаток даёт $N^2$ при делении на $9$?",
    "en": "A positive integer $N$ leaves remainder $7$ on division by $9$. What remainder does $N^2$ leave on division by $9$?"
   },
   "hint": {
    "ru": "Запишите $N=9k+7$ и возведите в квадрат.",
    "en": "Write $N=9k+7$ and square it."
   },
   "sol": {
    "ru": "Пусть $N=9k+7$. Тогда\n\n$$N^2=81k^2+126k+49=9\\left(9k^2+14k+5\\right)+4.$$\n\nПервое слагаемое кратно $9$, а $49=9\\cdot 5+4$. Значит остаток равен $4$.\n\nПроверка: $N=7$ даёт $49=9\\cdot5+4$; $N=16$ даёт $256=9\\cdot 28+4$. $\\checkmark$",
    "en": "Let $N=9k+7$. Then\n\n$$N^2=81k^2+126k+49=9\\left(9k^2+14k+5\\right)+4.$$\n\nThe first term is a multiple of $9$, and $49=9\\cdot 5+4$. So the remainder is $4$.\n\nCheck: $N=7$ gives $49=9\\cdot5+4$; $N=16$ gives $256=9\\cdot 28+4$. $\\checkmark$"
   }
  },
  {
   "src": "Вызов / Challenge",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что произведение любых четырёх подряд идущих натуральных чисел делится на $24$.",
    "en": "Prove that the product of any four consecutive positive integers is divisible by $24$."
   },
   "hint": {
    "ru": "$24=8\\cdot 3$. Разберите делимость на $8$ и на $3$ отдельно.",
    "en": "$24=8\\cdot 3$. Handle divisibility by $8$ and by $3$ separately."
   },
   "sol": {
    "ru": "Пусть $P=n(n+1)(n+2)(n+3)$. Так как $\\gcd(8,3)=1$, достаточно показать, что $8\\mid P$ и $3\\mid P$.\n\n**Делимость на $3$.** Среди любых трёх подряд идущих чисел — в частности среди $n,n+1,n+2$ — есть кратное трём.\n\n**Делимость на $8$.** Среди четырёх подряд идущих чисел ровно два чётных, и они отличаются на $2$: это $2m$ и $2m+2=2(m+1)$. Их произведение равно $4m(m+1)$, а из двух подряд идущих чисел $m$ и $m+1$ одно чётно, поэтому $m(m+1)$ делится на $2$. Значит произведение двух чётных множителей делится на $4\\cdot 2=8$.\n\nИтого $P$ делится и на $8$, и на $3$, а значит на $24$. $\\blacksquare$",
    "en": "Let $P=n(n+1)(n+2)(n+3)$. Since $\\gcd(8,3)=1$ it is enough to show $8\\mid P$ and $3\\mid P$.\n\n**Divisibility by $3$.** Among any three consecutive integers — in particular among $n,n+1,n+2$ — one is a multiple of three.\n\n**Divisibility by $8$.** Among four consecutive integers exactly two are even, and they differ by $2$: say $2m$ and $2m+2=2(m+1)$. Their product is $4m(m+1)$, and of the two consecutive integers $m$ and $m+1$ one is even, so $m(m+1)$ is divisible by $2$. Hence the product of the two even factors is divisible by $4\\cdot 2=8$.\n\nSo $P$ is divisible by both $8$ and $3$, and therefore by $24$. $\\blacksquare$"
   }
  }
 ]
};
