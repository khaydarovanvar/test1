/* Grade 8 topic 1 — generated from content/g8_01.py, do not edit by hand. */
window.LESSONS = window.LESSONS || {};
window.LESSONS[1] = {
 "n": 1,
 "cat": "nt",
 "title": {
  "ru": "Дроби, десятичные, проценты и отношения",
  "en": "Fractions, decimals, percents and ratios"
 },
 "sub": {
  "ru": "Самая частая тема AMC 8 и «Кенгуру»: перевод между тремя записями одного числа, последовательные изменения в процентах и отношения как части целого.",
  "en": "The most frequent theme on AMC 8 and Kangaroo: moving between the three ways of writing one number, changes in percent one after another, and ratios as parts of a whole."
 },
 "goals": {
  "ru": [
   "Мгновенно переводить дробь, десятичную запись и процент друг в друга, узнавая $\\tfrac18,\\tfrac16,\\tfrac38$ по их процентам.",
   "Сравнивать и упорядочивать дроби перекрёстным умножением, по ориентиру и по медианте.",
   "Считать последовательные изменения в процентах через множители и находить исходную величину по конечной.",
   "Решать задачи на отношения введением единицы $k$, склейкой отношений и поиском неизменной величины.",
   "Переводить задачи о работе, смесях и масштабе в уравнения со скоростями и долями."
  ],
  "en": [
   "Convert instantly between a fraction, a decimal and a percent, recognising $\\tfrac18,\\tfrac16,\\tfrac38$ from their percents.",
   "Compare and order fractions by cross-multiplication, by a benchmark and by the mediant.",
   "Handle successive percent changes with factors, and recover the original amount from the final one.",
   "Solve ratio problems by introducing the unit $k$, splicing ratios and finding the quantity that stays fixed.",
   "Turn work, mixture and scale problems into equations about rates and fractions."
  ]
 },
 "sections": [
  {
   "h": {
    "ru": "Одно число в трёх костюмах",
    "en": "One number, three costumes"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Дробь, десятичная запись и процент — это не три разных объекта, а три способа записать одно и то же число. На AMC 8 и «Кенгуру» условие почти никогда не просит «перевести»: оно просто говорит $37{,}5\\%$, а выиграет тот, кто мгновенно увидит $\\tfrac38$.",
      "en": "A fraction, a decimal and a percent are not three different objects but three ways of writing the same number. On AMC 8 and Kangaroo a problem almost never asks you to \"convert\": it simply says $37.5\\%$, and the winner is whoever instantly sees $\\tfrac38$."
     }
    },
    {
     "t": "def",
     "text": {
      "ru": "**Процент** — это сотая доля: $p\\%=\\dfrac{p}{100}$. Поэтому «$p$ процентов от $N$» означает $\\dfrac{p}{100}\\cdot N$ — и ничего больше.",
      "en": "A **percent** is a hundredth: $p\\%=\\dfrac{p}{100}$. So \"$p$ percent of $N$\" means $\\dfrac{p}{100}\\cdot N$ — and nothing more."
     },
     "name": {
      "ru": "Процент",
      "en": "Percent"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Слово «от» в задачах на проценты и доли всегда означает умножение: «$\\tfrac23$ от $45$» — это $\\tfrac23\\cdot 45=30$. Это самое полезное правило перевода с русского на алгебру.",
      "en": "The word \"of\" in a percent or fraction problem always means multiply: \"$\\tfrac23$ of $45$\" is $\\tfrac23\\cdot 45=30$. This is the single most useful translation rule there is."
     }
    },
    {
     "t": "p",
     "text": {
      "ru": "Следующую таблицу нужно знать наизусть — так же, как таблицу умножения. Каждая её строка экономит на олимпиаде по полминуты, а сорок минут AMC 8 на двадцать пять задач — это ровно полторы минуты на задачу.",
      "en": "The table below has to be known by heart, exactly like the multiplication table. Each row saves you half a minute, and the forty minutes of AMC 8 divided by twenty-five questions is exactly a minute and a half per problem."
     }
    },
    {
     "t": "table",
     "head": {
      "ru": [
       "Дробь",
       "Десятичная",
       "Процент"
      ],
      "en": [
       "Fraction",
       "Decimal",
       "Percent"
      ]
     },
     "rows": {
      "ru": [
       [
        "$\\tfrac1{2}$",
        "$0{,}5$",
        "$50\\%$"
       ],
       [
        "$\\tfrac1{3}$",
        "$0{,}333\\ldots$",
        "$33\\tfrac13\\%$"
       ],
       [
        "$\\tfrac2{3}$",
        "$0{,}666\\ldots$",
        "$66\\tfrac23\\%$"
       ],
       [
        "$\\tfrac1{4}$",
        "$0{,}25$",
        "$25\\%$"
       ],
       [
        "$\\tfrac3{4}$",
        "$0{,}75$",
        "$75\\%$"
       ],
       [
        "$\\tfrac1{5}$",
        "$0{,}2$",
        "$20\\%$"
       ],
       [
        "$\\tfrac1{6}$",
        "$0{,}1666\\ldots$",
        "$16\\tfrac23\\%$"
       ],
       [
        "$\\tfrac1{8}$",
        "$0{,}125$",
        "$12{,}5\\%$"
       ],
       [
        "$\\tfrac3{8}$",
        "$0{,}375$",
        "$37{,}5\\%$"
       ],
       [
        "$\\tfrac5{8}$",
        "$0{,}625$",
        "$62{,}5\\%$"
       ],
       [
        "$\\tfrac1{9}$",
        "$0{,}111\\ldots$",
        "$11\\tfrac19\\%$"
       ],
       [
        "$\\tfrac1{11}$",
        "$0{,}0909\\ldots$",
        "$9\\tfrac1{11}\\%$"
       ],
       [
        "$\\tfrac1{12}$",
        "$0{,}08333\\ldots$",
        "$8\\tfrac13\\%$"
       ],
       [
        "$\\tfrac1{16}$",
        "$0{,}0625$",
        "$6{,}25\\%$"
       ],
       [
        "$\\tfrac1{20}$",
        "$0{,}05$",
        "$5\\%$"
       ],
       [
        "$\\tfrac1{25}$",
        "$0{,}04$",
        "$4\\%$"
       ]
      ],
      "en": [
       [
        "$\\tfrac1{2}$",
        "$0.5$",
        "$50\\%$"
       ],
       [
        "$\\tfrac1{3}$",
        "$0.333\\ldots$",
        "$33\\tfrac13\\%$"
       ],
       [
        "$\\tfrac2{3}$",
        "$0.666\\ldots$",
        "$66\\tfrac23\\%$"
       ],
       [
        "$\\tfrac1{4}$",
        "$0.25$",
        "$25\\%$"
       ],
       [
        "$\\tfrac3{4}$",
        "$0.75$",
        "$75\\%$"
       ],
       [
        "$\\tfrac1{5}$",
        "$0.2$",
        "$20\\%$"
       ],
       [
        "$\\tfrac1{6}$",
        "$0.1666\\ldots$",
        "$16\\tfrac23\\%$"
       ],
       [
        "$\\tfrac1{8}$",
        "$0.125$",
        "$12.5\\%$"
       ],
       [
        "$\\tfrac3{8}$",
        "$0.375$",
        "$37.5\\%$"
       ],
       [
        "$\\tfrac5{8}$",
        "$0.625$",
        "$62.5\\%$"
       ],
       [
        "$\\tfrac1{9}$",
        "$0.111\\ldots$",
        "$11\\tfrac19\\%$"
       ],
       [
        "$\\tfrac1{11}$",
        "$0.0909\\ldots$",
        "$9\\tfrac1{11}\\%$"
       ],
       [
        "$\\tfrac1{12}$",
        "$0.08333\\ldots$",
        "$8\\tfrac13\\%$"
       ],
       [
        "$\\tfrac1{16}$",
        "$0.0625$",
        "$6.25\\%$"
       ],
       [
        "$\\tfrac1{20}$",
        "$0.05$",
        "$5\\%$"
       ],
       [
        "$\\tfrac1{25}$",
        "$0.04$",
        "$4\\%$"
       ]
      ]
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Прежде чем считать «$p\\%$ от $N$», посмотрите, не узнаёте ли вы $p\\%$ как хорошую дробь. $37{,}5\\%$ от $64$ в столбик — это работа; $\\tfrac38\\cdot 64=24$ — это один взгляд.",
      "en": "Before computing \"$p\\%$ of $N$\", check whether you recognise $p\\%$ as a friendly fraction. $37.5\\%$ of $64$ by long multiplication is work; $\\tfrac38\\cdot 64=24$ is one glance."
     },
     "name": {
      "ru": "Проценты — через дроби",
      "en": "Turn the percent into a fraction"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Найдите $87{,}5\\%$ от $136$.",
      "en": "Find $87.5\\%$ of $136$."
     },
     "steps": {
      "ru": [
       "$87{,}5\\%=100\\%-12{,}5\\%$, а $12{,}5\\%=\\tfrac18$. Значит $87{,}5\\%=\\tfrac78$.",
       "$\\tfrac78\\cdot 136$: сначала делим, $136:8=17$.",
       "Затем умножаем: $7\\cdot 17=119$."
      ],
      "en": [
       "$87.5\\%=100\\%-12.5\\%$, and $12.5\\%=\\tfrac18$, so $87.5\\%=\\tfrac78$.",
       "$\\tfrac78\\cdot 136$: divide first, $136\\div 8=17$.",
       "Then multiply: $7\\cdot 17=119$."
      ]
     },
     "ans": {
      "ru": "$119$",
      "en": "$119$"
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "Если период состоит из $k$ цифр и начинается сразу после запятой, то число равно *периоду*, делённому на $\\underbrace{99\\ldots9}_{k}$. Например $0{,}\\overline{36}=\\dfrac{36}{99}=\\dfrac{4}{11}$.",
      "en": "If the repeating block has $k$ digits and starts right after the point, the number equals the *block* divided by $\\underbrace{99\\ldots9}_{k}$. For instance $0.\\overline{36}=\\dfrac{36}{99}=\\dfrac{4}{11}$."
     },
     "name": {
      "ru": "Периодическая дробь",
      "en": "A repeating decimal"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Пусть $x=0{,}\\overline{a_1a_2\\ldots a_k}$ и $A$ — целое число, записанное цифрами $a_1\\ldots a_k$. Умножение на $10^k$ сдвигает запятую ровно на один период: $10^kx=A+x$. Отсюда $(10^k-1)x=A$, то есть $x=\\dfrac{A}{10^k-1}$, а $10^k-1$ — это и есть $k$ девяток. $\\blacksquare$",
      "en": "Let $x=0.\\overline{a_1a_2\\ldots a_k}$ and let $A$ be the integer written with the digits $a_1\\ldots a_k$. Multiplying by $10^k$ shifts the point by exactly one block, so $10^kx=A+x$. Hence $(10^k-1)x=A$, that is $x=\\dfrac{A}{10^k-1}$, and $10^k-1$ is precisely $k$ nines. $\\blacksquare$"
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Как сравнивать дроби",
    "en": "How to compare fractions"
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Сравнение дробей — самая частая мелкая операция во всей олимпиадной арифметике. Приводить к общему знаменателю приходится редко: почти всегда хватает одного из трёх приёмов ниже.",
      "en": "Comparing fractions is the most frequent small operation in all of contest arithmetic. You rarely need a common denominator: one of the three moves below almost always settles it."
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "Пусть $b>0$ и $d>0$. Тогда $\\dfrac{a}{b}<\\dfrac{c}{d}\\iff ad<bc$.",
      "en": "Let $b>0$ and $d>0$. Then $\\dfrac{a}{b}<\\dfrac{c}{d}\\iff ad<bc$."
     },
     "name": {
      "ru": "Сравнение перекрёстным умножением",
      "en": "Comparison by cross-multiplication"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Умножим обе части неравенства $\\frac ab<\\frac cd$ на положительное число $bd$. Умножение на положительное число сохраняет знак неравенства, и мы получаем $ad<bc$. Обратный переход — деление на то же положительное $bd$. $\\blacksquare$",
      "en": "Multiply both sides of $\\frac ab<\\frac cd$ by the positive number $bd$. Multiplying by a positive number preserves the inequality, and we get $ad<bc$. The converse is division by the same positive $bd$. $\\blacksquare$"
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Условие $b>0,\\;d>0$ существенно. Для $\\frac{1}{-2}$ и $\\frac{1}{3}$ перекрёстное умножение даёт неверный ответ. В олимпиадных задачах про дроби знаменатели обычно положительны — но проверять это нужно сознательно.",
      "en": "The condition $b>0,\\;d>0$ matters. For $\\frac{1}{-2}$ and $\\frac{1}{3}$ cross-multiplication gives the wrong answer. In contest problems denominators are usually positive — but check it on purpose, not by habit."
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Чтобы сравнить две дроби, часто достаточно заметить, что одна меньше $\\tfrac12$, а другая больше. Дробь $\\frac ab$ (при $b>0$) больше $\\tfrac12$ ровно тогда, когда $2a>b$ — то есть когда числитель больше половины знаменателя.",
      "en": "To compare two fractions it is often enough to notice that one is below $\\tfrac12$ and the other above. For $b>0$, $\\frac ab>\\tfrac12$ exactly when $2a>b$ — when the numerator is more than half the denominator."
     },
     "name": {
      "ru": "Сравнение с ориентиром",
      "en": "Compare against a benchmark"
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 520 90\" role=\"img\">\n  <line x1=\"30\" y1=\"55\" x2=\"490\" y2=\"55\" stroke=\"currentColor\" stroke-width=\"2\"/>\n  <g stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\">\n    <line x1=\"30\" y1=\"48\" x2=\"30\" y2=\"62\"/>\n    <line x1=\"260\" y1=\"48\" x2=\"260\" y2=\"62\"/>\n    <line x1=\"490\" y1=\"48\" x2=\"490\" y2=\"62\"/>\n  </g>\n  <g font-size=\"13\" text-anchor=\"middle\" fill=\"currentColor\">\n    <text x=\"30\" y=\"80\">0</text>\n    <text x=\"260\" y=\"80\">1/2</text>\n    <text x=\"490\" y=\"80\">1</text>\n  </g>\n  <g fill=\"var(--gold, #C8A24A)\">\n    <circle cx=\"214\" cy=\"55\" r=\"4.5\"/>\n    <circle cx=\"317\" cy=\"55\" r=\"4.5\"/>\n    <circle cx=\"358\" cy=\"55\" r=\"4.5\"/>\n  </g>\n  <g font-size=\"13\" text-anchor=\"middle\" fill=\"currentColor\">\n    <text x=\"214\" y=\"38\">5/12</text>\n    <text x=\"317\" y=\"38\">5/8</text>\n    <text x=\"358\" y=\"38\">5/7</text>\n  </g>\n</svg>",
     "cap": {
      "ru": "Один числитель, три знаменателя: чем больше знаменатель, тем меньше дробь.",
      "en": "One numerator, three denominators: the bigger the denominator, the smaller the fraction."
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Если числители равны, больше та дробь, у которой знаменатель меньше: $\\tfrac57>\\tfrac58>\\tfrac5{12}$. Поэтому дроби вида $\\frac{n}{n+1}$ растут с ростом $n$ — ведь $\\frac{n}{n+1}=1-\\frac{1}{n+1}$, и вычитаемое уменьшается.",
      "en": "If the numerators are equal, the fraction with the smaller denominator is bigger: $\\tfrac57>\\tfrac58>\\tfrac5{12}$. This is why $\\frac{n}{n+1}$ increases with $n$: $\\frac{n}{n+1}=1-\\frac{1}{n+1}$, and the part being subtracted shrinks."
     },
     "name": {
      "ru": "Одинаковый числитель",
      "en": "Same numerator"
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "Если $\\dfrac ab<\\dfrac cd$ и $b,d>0$, то $$\\frac ab<\\frac{a+c}{b+d}<\\frac cd.$$",
      "en": "If $\\dfrac ab<\\dfrac cd$ with $b,d>0$, then $$\\frac ab<\\frac{a+c}{b+d}<\\frac cd.$$"
     },
     "name": {
      "ru": "Медианта",
      "en": "The mediant"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "По предыдущей теореме $ad<bc$. Проверим левое неравенство: $\\frac ab<\\frac{a+c}{b+d}$ равносильно $a(b+d)<b(a+c)$, то есть $ab+ad<ab+bc$, то есть $ad<bc$ — верно. Правое неравенство: $\\frac{a+c}{b+d}<\\frac cd$ равносильно $d(a+c)<c(b+d)$, то есть $ad+cd<bc+cd$, снова $ad<bc$. $\\blacksquare$",
      "en": "By the previous theorem $ad<bc$. For the left inequality, $\\frac ab<\\frac{a+c}{b+d}$ is equivalent to $a(b+d)<b(a+c)$, i.e. $ab+ad<ab+bc$, i.e. $ad<bc$ — true. For the right one, $\\frac{a+c}{b+d}<\\frac cd$ is equivalent to $d(a+c)<c(b+d)$, i.e. $ad+cd<bc+cd$, again $ad<bc$. $\\blacksquare$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Медианта — это готовый способ назвать дробь, лежащую строго между двумя данными. Более того, из всех дробей между $\\frac ab$ и $\\frac cd$ медианта имеет наименьший знаменатель, если $bc-ad=1$. Это ядро задач вида «найдите дробь с наименьшим знаменателем между …».",
      "en": "The mediant is a ready-made way to name a fraction strictly between two given ones. Moreover, among all fractions between $\\frac ab$ and $\\frac cd$ the mediant has the smallest denominator whenever $bc-ad=1$. That is the engine behind \"find the fraction with the smallest denominator between …\"."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Расположите по возрастанию: $\\dfrac7{11},\\;\\dfrac58,\\;\\dfrac9{14},\\;\\dfrac23$.",
      "en": "Put in increasing order: $\\dfrac7{11},\\;\\dfrac58,\\;\\dfrac9{14},\\;\\dfrac23$."
     },
     "steps": {
      "ru": [
       "Все четыре больше $\\tfrac12$, так что ориентир не помогает — сравниваем попарно.",
       "$\\tfrac58$ и $\\tfrac7{11}$: $5\\cdot 11=55<56=7\\cdot 8$, значит $\\tfrac58<\\tfrac7{11}$.",
       "$\\tfrac7{11}$ и $\\tfrac9{14}$: $7\\cdot 14=98<99=9\\cdot 11$, значит $\\tfrac7{11}<\\tfrac9{14}$.",
       "$\\tfrac9{14}$ и $\\tfrac23$: $9\\cdot 3=27<28=2\\cdot 14$, значит $\\tfrac9{14}<\\tfrac23$.",
       "Три сравнения выстроили всю цепочку."
      ],
      "en": [
       "All four exceed $\\tfrac12$, so the benchmark does not help — compare in pairs.",
       "$\\tfrac58$ versus $\\tfrac7{11}$: $5\\cdot 11=55<56=7\\cdot 8$, so $\\tfrac58<\\tfrac7{11}$.",
       "$\\tfrac7{11}$ versus $\\tfrac9{14}$: $7\\cdot 14=98<99=9\\cdot 11$, so $\\tfrac7{11}<\\tfrac9{14}$.",
       "$\\tfrac9{14}$ versus $\\tfrac23$: $9\\cdot 3=27<28=2\\cdot 14$, so $\\tfrac9{14}<\\tfrac23$.",
       "Three comparisons give the whole chain."
      ]
     },
     "ans": {
      "ru": "$\\tfrac58<\\tfrac7{11}<\\tfrac9{14}<\\tfrac23$",
      "en": "$\\tfrac58<\\tfrac7{11}<\\tfrac9{14}<\\tfrac23$"
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Не сравнивайте дроби по первым цифрам десятичной записи, посчитанным в уме приблизительно. $\\tfrac7{11}=0{,}6363\\ldots$ и $\\tfrac9{14}=0{,}6428\\ldots$ различаются только в третьем знаке. Перекрёстное умножение даёт точный ответ за одно действие.",
      "en": "Do not compare fractions by the first digits of a decimal you estimated in your head. $\\tfrac7{11}=0.6363\\ldots$ and $\\tfrac9{14}=0.6428\\ldots$ differ only in the third place. Cross-multiplication gives the exact answer in one step."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Проценты: «от», «больше», «меньше»",
    "en": "Percent: \"of\", \"more than\", \"less than\""
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Три четверти всех ошибок на процентах — это не арифметика, а перевод. Нужно твёрдо знать, *от чего* берётся процент: «$25\\%$ больше, чем $B$» и «$25\\%$ меньше, чем $A$» считаются от разных чисел.",
      "en": "Three quarters of all percent mistakes are not arithmetic but translation. You must be sure *what the percent is taken of*: \"$25\\%$ more than $B$\" and \"$25\\%$ less than $A$\" are taken of different numbers."
     }
    },
    {
     "t": "table",
     "head": {
      "ru": [
       "Фраза",
       "Формула"
      ],
      "en": [
       "Phrase",
       "Formula"
      ]
     },
     "rows": {
      "ru": [
       [
        "$p\\%$ от $N$",
        "$\\dfrac{p}{100}N$"
       ],
       [
        "на $p\\%$ больше, чем $N$",
        "$\\left(1+\\dfrac{p}{100}\\right)N$"
       ],
       [
        "на $p\\%$ меньше, чем $N$",
        "$\\left(1-\\dfrac{p}{100}\\right)N$"
       ],
       [
        "составляет $p\\%$ от $N$",
        "$=\\dfrac{p}{100}N$"
       ],
       [
        "$X$ — это сколько процентов от $N$?",
        "$\\dfrac{X}{N}\\cdot 100\\%$"
       ],
       [
        "во сколько раз $X$ больше $N$?",
        "$\\dfrac{X}{N}$"
       ]
      ],
      "en": [
       [
        "$p\\%$ of $N$",
        "$\\dfrac{p}{100}N$"
       ],
       [
        "$p\\%$ more than $N$",
        "$\\left(1+\\dfrac{p}{100}\\right)N$"
       ],
       [
        "$p\\%$ less than $N$",
        "$\\left(1-\\dfrac{p}{100}\\right)N$"
       ],
       [
        "is $p\\%$ of $N$",
        "$=\\dfrac{p}{100}N$"
       ],
       [
        "$X$ is what percent of $N$?",
        "$\\dfrac{X}{N}\\cdot 100\\%$"
       ],
       [
        "how many times is $X$ bigger than $N$?",
        "$\\dfrac{X}{N}$"
       ]
      ]
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "$p\\%$ от $q\\%$ от $N$ равно $q\\%$ от $p\\%$ от $N$, и оба равны $\\dfrac{pq}{10000}N$.",
      "en": "$p\\%$ of $q\\%$ of $N$ equals $q\\%$ of $p\\%$ of $N$, and both equal $\\dfrac{pq}{10000}N$."
     },
     "name": {
      "ru": "Проценты от процентов перестановочны",
      "en": "Percents of percents commute"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Оба выражения — это произведение трёх чисел $\\frac{p}{100}\\cdot\\frac{q}{100}\\cdot N$, а умножение коммутативно. $\\blacksquare$",
      "en": "Both expressions are the product of the three numbers $\\frac{p}{100}\\cdot\\frac{q}{100}\\cdot N$, and multiplication is commutative. $\\blacksquare$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Следствие, которое экономит время: $18\\%$ от $50$ считать неудобно, а $50\\%$ от $18$ — это $9$. Меняйте множители местами всякий раз, когда один из них становится «половиной» или «четвертью».",
      "en": "A time-saving corollary: $18\\%$ of $50$ is awkward, but $50\\%$ of $18$ is $9$. Swap the factors whenever one of them turns into \"a half\" or \"a quarter\"."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Число $A$ на $25\\%$ больше числа $B$. На сколько процентов $B$ меньше $A$?",
      "en": "$A$ is $25\\%$ more than $B$. By what percent is $B$ less than $A$?"
     },
     "steps": {
      "ru": [
       "«$A$ на $25\\%$ больше $B$» значит $A=1{,}25B=\\tfrac54B$.",
       "Выразим $B$: $B=\\tfrac45A=0{,}8A$.",
       "Значит $B$ меньше $A$ на $0{,}2A$, то есть на $20\\%$ *от* $A$.",
       "Обратите внимание: $25\\%$ и $20\\%$ — разные числа, потому что берутся от разных баз."
      ],
      "en": [
       "\"$A$ is $25\\%$ more than $B$\" means $A=1.25B=\\tfrac54B$.",
       "Solve for $B$: $B=\\tfrac45A=0.8A$.",
       "So $B$ is below $A$ by $0.2A$, that is by $20\\%$ *of* $A$.",
       "Note that $25\\%$ and $20\\%$ differ precisely because they are taken of different bases."
      ]
     },
     "ans": {
      "ru": "на $20\\%$",
      "en": "by $20\\%$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Если известна цена *после* скидки, не вычитайте проценты — делите. Цена $1200$ после скидки $25\\%$ означает $0{,}75x=1200$, откуда $x=1600$. Привычка «добавить $25\\%$ к $1200$» даёт $1500$ и неверна.",
      "en": "If you are given the price *after* a discount, do not add the percent back — divide. A price of $1200$ after a $25\\%$ discount means $0.75x=1200$, so $x=1600$. The reflex of \"adding $25\\%$ to $1200$\" gives $1500$ and is wrong."
     },
     "name": {
      "ru": "Обратный процент",
      "en": "Reverse percent"
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "«Процент» и «процентный пункт» — не одно и то же. Если доля выросла с $20\\%$ до $25\\%$, то она выросла на $5$ процентных пунктов, но на $25\\%$ (потому что $5$ — это четверть от $20$). Задачи «Кенгуру» сознательно ставят эту ловушку.",
      "en": "\"Percent\" and \"percentage point\" are not the same. If a share grows from $20\\%$ to $25\\%$ it has grown by $5$ percentage points but by $25\\%$ (because $5$ is a quarter of $20$). Kangaroo problems set this trap on purpose."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Изменение в процентах и последовательные изменения",
    "en": "Percent change, and changes one after another"
   },
   "blocks": [
    {
     "t": "def",
     "text": {
      "ru": "Если величина изменилась с $N_{\\text{стар}}$ на $N_{\\text{нов}}$, то изменение в процентах равно $$\\frac{N_{\\text{нов}}-N_{\\text{стар}}}{N_{\\text{стар}}}\\cdot 100\\%.$$ В знаменателе всегда *старое* значение.",
      "en": "If a quantity changes from $N_{\\text{old}}$ to $N_{\\text{new}}$, the percent change is $$\\frac{N_{\\text{new}}-N_{\\text{old}}}{N_{\\text{old}}}\\cdot 100\\%.$$ The denominator is always the *old* value."
     },
     "name": {
      "ru": "Изменение в процентах",
      "en": "Percent change"
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "Изменение на $r_1$ (в долях), а затем на $r_2$ даёт множитель $(1+r_1)(1+r_2)$, то есть суммарное изменение $$r_1+r_2+r_1r_2.$$",
      "en": "A change by $r_1$ (as a decimal) followed by a change by $r_2$ gives the factor $(1+r_1)(1+r_2)$, that is a total change of $$r_1+r_2+r_1r_2.$$"
     },
     "name": {
      "ru": "Последовательные изменения умножаются",
      "en": "Successive changes multiply"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "После первого изменения величина равна $N(1+r_1)$. Второе изменение берётся от этого нового значения, поэтому результат равен $N(1+r_1)(1+r_2)$. Раскрыв скобки, $(1+r_1)(1+r_2)=1+r_1+r_2+r_1r_2$, а изменение — это всё, что сверх единицы. $\\blacksquare$",
      "en": "After the first change the quantity is $N(1+r_1)$. The second change is taken of that new value, so the result is $N(1+r_1)(1+r_2)$. Expanding, $(1+r_1)(1+r_2)=1+r_1+r_2+r_1r_2$, and the change is whatever exceeds $1$. $\\blacksquare$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Слагаемое $r_1r_2$ — это и есть причина, по которой проценты «не складываются». Оно маленькое, когда оба изменения малы, и вполне заметное, когда они велики: $50\\%$ и $50\\%$ дают не $100\\%$, а $125\\%$.",
      "en": "The term $r_1r_2$ is exactly why percents \"do not add\". It is small when both changes are small and quite visible when they are large: $50\\%$ and $50\\%$ give not $100\\%$ but $125\\%$."
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "Увеличение на $p\\%$, а затем уменьшение на $p\\%$ всегда даёт *потерю*, причём ровно $\\dfrac{p^2}{100}\\%$ от исходного.",
      "en": "An increase by $p\\%$ followed by a decrease by $p\\%$ always gives a *loss*, and exactly $\\dfrac{p^2}{100}\\%$ of the original."
     },
     "name": {
      "ru": "Подъём и спуск на одно и то же число процентов",
      "en": "Up then down by the same percent"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Множитель равен $\\left(1+\\frac{p}{100}\\right)\\left(1-\\frac{p}{100}\\right)=1-\\frac{p^2}{10000}$ по формуле разности квадратов. Значит потеря составляет $\\frac{p^2}{10000}$ в долях, то есть $\\frac{p^2}{100}\\%$. Она положительна при любом $p\\neq 0$, и порядок двух изменений не важен — произведение коммутативно. $\\blacksquare$",
      "en": "The factor is $\\left(1+\\frac{p}{100}\\right)\\left(1-\\frac{p}{100}\\right)=1-\\frac{p^2}{10000}$ by the difference of squares. So the loss is $\\frac{p^2}{10000}$ as a decimal, i.e. $\\frac{p^2}{100}\\%$. It is positive for every $p\\neq 0$, and the order of the two changes does not matter — the product commutes. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Цена выросла на $20\\%$, а затем упала на $20\\%$. Как она относится к исходной?",
      "en": "A price rises by $20\\%$ and then falls by $20\\%$. How does it compare with the original?"
     },
     "steps": {
      "ru": [
       "Множитель: $1{,}2\\cdot 0{,}8=0{,}96$.",
       "Или сразу по теореме: $\\frac{20^2}{100}=4$.",
       "Цена стала на $4\\%$ **ниже** исходной."
      ],
      "en": [
       "The factor is $1.2\\cdot 0.8=0.96$.",
       "Or straight from the theorem: $\\frac{20^2}{100}=4$.",
       "The price ends $4\\%$ **below** the original."
      ]
     },
     "ans": {
      "ru": "на $4\\%$ меньше",
      "en": "$4\\%$ less"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Скидка $30\\%$, а затем ещё $20\\%$ от новой цены. Какой одной скидке это равносильно?",
      "en": "A $30\\%$ discount, then a further $20\\%$ off the new price. What single discount is that?"
     },
     "steps": {
      "ru": [
       "Множитель: $0{,}7\\cdot 0{,}8=0{,}56$.",
       "Платим $56\\%$ цены, значит скидка — $44\\%$.",
       "Не $50\\%$: вторая скидка берётся от уже уменьшенной цены."
      ],
      "en": [
       "The factor is $0.7\\cdot 0.8=0.56$.",
       "You pay $56\\%$ of the price, so the discount is $44\\%$.",
       "Not $50\\%$: the second discount is taken of the already reduced price."
      ]
     },
     "ans": {
      "ru": "$44\\%$",
      "en": "$44\\%$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Переведите каждое изменение в множитель ($+15\\%\\to 1{,}15$, $-40\\%\\to 0{,}6$) и перемножьте. Любая цепочка наценок, скидок, налогов и инфляции превращается в одно умножение, и порядок операций перестаёт иметь значение.",
      "en": "Turn every change into a factor ($+15\\%\\to 1.15$, $-40\\%\\to 0.6$) and multiply. Any chain of markups, discounts, taxes and inflation becomes a single multiplication, and the order stops mattering."
     },
     "name": {
      "ru": "Работайте с множителями, а не с процентами",
      "en": "Work with factors, not with percents"
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Отношение — это части, а не количества",
    "en": "A ratio is parts, not amounts"
   },
   "blocks": [
    {
     "t": "def",
     "text": {
      "ru": "Запись $a:b$ означает, что две величины можно представить как $ak$ и $bk$ для одного и того же положительного $k$. Само $k$ условие обычно не называет — его нужно найти.",
      "en": "Writing $a:b$ means the two quantities can be written as $ak$ and $bk$ for one and the same positive $k$. The problem usually does not name $k$ — finding it is your job."
     },
     "name": {
      "ru": "Отношение",
      "en": "Ratio"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Это главный приём всей темы. Отношение $3:5$ — это не «$3$ и $5$», а «$3k$ и $5k$». Одна буква превращает задачу про отношения в линейное уравнение.",
      "en": "This is the central move of the whole topic. A ratio of $3:5$ does not mean \"$3$ and $5$\" but \"$3k$ and $5k$\". One letter turns a ratio problem into a linear equation."
     },
     "name": {
      "ru": "Введите единицу $k$",
      "en": "Introduce the unit $k$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Отрезок длины $96$ разделён в отношении $3:5$. Найдите части.",
      "en": "A segment of length $96$ is divided in the ratio $3:5$. Find the parts."
     },
     "steps": {
      "ru": [
       "Части равны $3k$ и $5k$.",
       "Сумма: $3k+5k=8k=96$, значит $k=12$.",
       "Части: $3\\cdot 12=36$ и $5\\cdot 12=60$."
      ],
      "en": [
       "The parts are $3k$ and $5k$.",
       "Their sum is $3k+5k=8k=96$, so $k=12$.",
       "The parts are $3\\cdot 12=36$ and $5\\cdot 12=60$."
      ]
     },
     "ans": {
      "ru": "$36$ и $60$",
      "en": "$36$ and $60$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Число частей — $3+5=8$ — это самое полезное число в задаче. Если целое делится на отношение $a:b:c$, то каждая часть равна $\\frac{\\text{целое}}{a+b+c}$.",
      "en": "The number of parts — $3+5=8$ — is the most useful number in the problem. If a whole is split in the ratio $a:b:c$, each part equals $\\frac{\\text{whole}}{a+b+c}$."
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Отношения нельзя складывать покоординатно. Если в одном классе мальчиков и девочек $2:3$, а в другом $3:4$, то вместе вовсе не $5:7$ — это зависит от размеров классов. Складывать можно только количества.",
      "en": "Ratios cannot be added coordinate-wise. If one class has boys to girls $2:3$ and another $3:4$, together they are *not* $5:7$ — that depends on the class sizes. Only amounts add."
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "Если $A:B=p:q$ и $B:C=r:s$, то $$A:B:C=pr:qr:qs.$$",
      "en": "If $A:B=p:q$ and $B:C=r:s$, then $$A:B:C=pr:qr:qs.$$"
     },
     "name": {
      "ru": "Склейка отношений",
      "en": "Splicing two ratios"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Домножим первое отношение на $r$, а второе на $q$: $A:B=pr:qr$ и $B:C=qr:qs$. Теперь у обоих отношений средний член один и тот же, $qr$, поэтому их можно записать одной цепочкой. $\\blacksquare$",
      "en": "Scale the first ratio by $r$ and the second by $q$: $A:B=pr:qr$ and $B:C=qr:qs$. Now both ratios share the same middle term $qr$, so they can be written as one chain. $\\blacksquare$"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "$A:B=2:3$ и $B:C=4:5$. Найдите $A:B:C$.",
      "en": "$A:B=2:3$ and $B:C=4:5$. Find $A:B:C$."
     },
     "steps": {
      "ru": [
       "Общий член — $B$. В первом отношении ему отвечает $3$, во втором — $4$; наименьшее общее кратное равно $12$.",
       "Домножаем первое на $4$: $A:B=8:12$.",
       "Домножаем второе на $3$: $B:C=12:15$.",
       "Склеиваем: $A:B:C=8:12:15$."
      ],
      "en": [
       "The shared term is $B$. It is $3$ in the first ratio and $4$ in the second; the least common multiple is $12$.",
       "Scale the first by $4$: $A:B=8:12$.",
       "Scale the second by $3$: $B:C=12:15$.",
       "Splice: $A:B:C=8:12:15$."
      ]
     },
     "ans": {
      "ru": "$8:12:15$",
      "en": "$8:12:15$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Когда отношение меняется, почти всегда одна из величин или их сумма остаётся прежней. Найдите это неизменное количество, выразите его через обе версии отношения — и уравнение готово.",
      "en": "When a ratio changes, almost always one of the quantities, or their sum, stays the same. Find that fixed amount, write it in terms of both versions of the ratio, and the equation is done."
     },
     "name": {
      "ru": "Что в задаче не меняется?",
      "en": "What does the problem hold fixed?"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "В коробке красных и синих шаров $3:4$. Добавили $6$ красных, и отношение стало $6:7$. Сколько синих шаров?",
      "en": "A box has red and blue balls in the ratio $3:4$. Six more red balls are added and the ratio becomes $6:7$. How many blue balls are there?"
     },
     "steps": {
      "ru": [
       "Синие не менялись — вот неизменное количество. Пусть красных $3k$, синих $4k$.",
       "После добавления: $\\dfrac{3k+6}{4k}=\\dfrac67$.",
       "Перекрёстно: $7(3k+6)=24k$, то есть $21k+42=24k$, откуда $3k=42$ и $k=14$.",
       "Синих $4k=56$. Проверка: красных $42+6=48$, и $48:56=6:7$. $\\checkmark$"
      ],
      "en": [
       "The blue balls never change — that is the fixed amount. Let there be $3k$ red and $4k$ blue.",
       "After the addition $\\dfrac{3k+6}{4k}=\\dfrac67$.",
       "Cross-multiplying, $7(3k+6)=24k$, so $21k+42=24k$, giving $3k=42$ and $k=14$.",
       "The blue count is $4k=56$. Check: red is $42+6=48$ and $48:56=6:7$. $\\checkmark$"
      ]
     },
     "ans": {
      "ru": "$56$",
      "en": "$56$"
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Пропорция, обратная пропорция и единицы",
    "en": "Proportion, inverse proportion and units"
   },
   "blocks": [
    {
     "t": "def",
     "text": {
      "ru": "Величины **прямо пропорциональны**, если $y=kx$: их отношение постоянно. Они **обратно пропорциональны**, если $xy=k$: постоянно произведение.",
      "en": "Two quantities are in **direct proportion** if $y=kx$: their ratio is constant. They are in **inverse proportion** if $xy=k$: their product is constant."
     },
     "name": {
      "ru": "Прямая и обратная пропорциональность",
      "en": "Direct and inverse proportion"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Как отличить одно от другого: спросите, что произойдёт, если удвоить первую величину. Удвоилась и вторая — прямая пропорциональность. Уменьшилась вдвое — обратная. Больше рабочих — меньше дней: обратная.",
      "en": "How to tell them apart: ask what happens if you double the first quantity. If the second doubles too, it is direct. If it halves, it is inverse. More workers, fewer days: inverse."
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "Если один исполнитель делает работу за $a$ единиц времени, а другой за $b$, то вместе они делают её за $$\\frac{1}{\\frac1a+\\frac1b}=\\frac{ab}{a+b}.$$",
      "en": "If one worker finishes a job in $a$ units of time and another in $b$, together they finish it in $$\\frac{1}{\\frac1a+\\frac1b}=\\frac{ab}{a+b}.$$"
     },
     "name": {
      "ru": "Задачи на совместную работу",
      "en": "Work done together"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Считаем не время, а *скорость*: первый делает $\\frac1a$ работы за единицу времени, второй — $\\frac1b$. Скорости складываются, вместе они дают $\\frac1a+\\frac1b$ работы за единицу времени. Время на всю работу — величина, обратная скорости. $\\blacksquare$",
      "en": "Count rates, not times: the first does $\\frac1a$ of the job per unit time, the second $\\frac1b$. Rates add, so together they do $\\frac1a+\\frac1b$ per unit time. The time for the whole job is the reciprocal of the rate. $\\blacksquare$"
     }
    },
    {
     "t": "warn",
     "text": {
      "ru": "Времена никогда не складываются и не усредняются. Ответ $\\frac{a+b}{2}$ на задачу о совместной работе неверен всегда — и всегда стоит среди вариантов ответа.",
      "en": "Times never add and never average. The answer $\\frac{a+b}{2}$ to a work problem is always wrong — and it is always one of the offered choices."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Три крана наполняют бассейн за $10$, $15$ и $30$ часов. За сколько часов они наполнят его вместе?",
      "en": "Three taps fill a pool in $10$, $15$ and $30$ hours. How long do they take together?"
     },
     "steps": {
      "ru": [
       "Скорости: $\\tfrac1{10},\\tfrac1{15},\\tfrac1{30}$ бассейна в час.",
       "Общий знаменатель $30$: $\\tfrac3{30}+\\tfrac2{30}+\\tfrac1{30}=\\tfrac6{30}=\\tfrac15$.",
       "Вместе — пятая часть бассейна в час, значит время равно $5$ часам."
      ],
      "en": [
       "The rates are $\\tfrac1{10},\\tfrac1{15},\\tfrac1{30}$ of the pool per hour.",
       "Over the denominator $30$: $\\tfrac3{30}+\\tfrac2{30}+\\tfrac1{30}=\\tfrac6{30}=\\tfrac15$.",
       "Together they do a fifth of the pool per hour, so the time is $5$ hours."
      ]
     },
     "ans": {
      "ru": "$5$ часов",
      "en": "$5$ hours"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Записывайте единицы и сокращайте их как множители. $7{,}2\\ \\text{см}\\times\\frac{250000\\ \\text{см}}{1\\ \\text{см}}=1\\,800\\,000$ см $=18$ км. Если единицы в ответе получились не те, которые нужны, вы где-то умножили вместо деления — и это видно до того, как вы посчитали число.",
      "en": "Write the units down and cancel them like factors. $7.2\\ \\text{cm}\\times\\frac{250000\\ \\text{cm}}{1\\ \\text{cm}}=1{,}800{,}000$ cm $=18$ km. If the units of your answer are not the ones asked for, you multiplied where you should have divided — and you can see it before you compute the number."
     },
     "name": {
      "ru": "Следите за единицами",
      "en": "Let the units do the work"
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Масштаб карты $1:250\\,000$. Дорога на карте имеет длину $7{,}2$ см. Какова её настоящая длина в километрах?",
      "en": "A map has scale $1:250{,}000$. A road is $7.2$ cm long on the map. What is its real length in kilometres?"
     },
     "steps": {
      "ru": [
       "Масштаб $1:250\\,000$ значит, что $1$ см на карте — это $250\\,000$ см на земле.",
       "$7{,}2\\cdot 250\\,000=1\\,800\\,000$ см.",
       "В километре $100\\,000$ см, значит $1\\,800\\,000:100\\,000=18$ км."
      ],
      "en": [
       "Scale $1:250{,}000$ means $1$ cm on the map is $250{,}000$ cm on the ground.",
       "$7.2\\cdot 250{,}000=1{,}800{,}000$ cm.",
       "There are $100{,}000$ cm in a kilometre, so $1{,}800{,}000\\div 100{,}000=18$ km."
      ]
     },
     "ans": {
      "ru": "$18$ км",
      "en": "$18$ km"
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "Если смешать $V_1$ раствора концентрации $c_1$ и $V_2$ раствора концентрации $c_2$, то концентрация смеси равна $$c=\\frac{c_1V_1+c_2V_2}{V_1+V_2}.$$",
      "en": "Mixing $V_1$ of a solution of concentration $c_1$ with $V_2$ of concentration $c_2$ gives the concentration $$c=\\frac{c_1V_1+c_2V_2}{V_1+V_2}.$$"
     },
     "name": {
      "ru": "Смесь двух растворов",
      "en": "Mixing two solutions"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Количество растворённого вещества сохраняется: было $c_1V_1+c_2V_2$, столько же и стало. Объём стал $V_1+V_2$. Концентрация — это отношение одного к другому. $\\blacksquare$",
      "en": "The amount of dissolved substance is conserved: it was $c_1V_1+c_2V_2$ and it still is. The volume is now $V_1+V_2$. The concentration is the ratio of the two. $\\blacksquare$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Это взвешенное среднее: концентрация смеси всегда лежит между $c_1$ и $c_2$, ближе к той, которой больше по объёму. Если получилось число вне этого отрезка — ошибка в арифметике.",
      "en": "This is a weighted average: the mixture's concentration always lies between $c_1$ and $c_2$, nearer to whichever has the larger volume. A number outside that range means an arithmetic slip."
     }
    }
   ]
  },
  {
   "h": {
    "ru": "Доли в геометрии: «какая часть закрашена?»",
    "en": "Fractions in geometry: \"what fraction is shaded?\""
   },
   "blocks": [
    {
     "t": "p",
     "text": {
      "ru": "Задачи «какая часть фигуры закрашена» — целый жанр и на AMC 8, и на «Кенгуру». Почти все они решаются одним из двух способов: *считать клетки* или *считать отношения площадей*.",
      "en": "\"What fraction of the figure is shaded\" is a whole genre on both AMC 8 and Kangaroo. Nearly all of them yield to one of two moves: *count cells* or *compare areas by ratio*."
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 240 240\" role=\"img\">\n  <g fill=\"var(--c, #1E6FB8)\" fill-opacity=\"0.78\">\n    <rect x=\"20\" y=\"20\" width=\"40\" height=\"40\"/>\n    <rect x=\"60\" y=\"60\" width=\"40\" height=\"40\"/>\n    <rect x=\"100\" y=\"100\" width=\"40\" height=\"40\"/>\n    <rect x=\"140\" y=\"140\" width=\"40\" height=\"40\"/>\n    <rect x=\"180\" y=\"180\" width=\"40\" height=\"40\"/>\n    <rect x=\"180\" y=\"20\" width=\"40\" height=\"40\"/>\n    <rect x=\"140\" y=\"60\" width=\"40\" height=\"40\"/>\n    <rect x=\"60\" y=\"140\" width=\"40\" height=\"40\"/>\n    <rect x=\"20\" y=\"180\" width=\"40\" height=\"40\"/>\n  </g>\n  <g stroke=\"currentColor\" stroke-width=\"1.4\" fill=\"none\">\n    <path d=\"M20 20h200v200H20z\"/>\n    <path d=\"M60 20v200M100 20v200M140 20v200M180 20v200\"/>\n    <path d=\"M20 60h200M20 100h200M20 140h200M20 180h200\"/>\n  </g>\n</svg>",
     "cap": {
      "ru": "Квадрат $5\\times 5$: закрашены клетки обеих диагоналей.",
      "en": "A $5\\times 5$ square with both diagonals' cells shaded."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "Какая часть квадрата $5\\times 5$ на рисунке закрашена?",
      "en": "What fraction of the $5\\times 5$ square in the figure is shaded?"
     },
     "steps": {
      "ru": [
       "На каждой диагонали по $5$ клеток, всего $5+5=10$.",
       "Но центральная клетка лежит на обеих диагоналях и посчитана дважды — вычитаем её: закрашено $10-1=9$ клеток.",
       "Всего клеток $25$, значит доля равна $\\tfrac9{25}$."
      ],
      "en": [
       "Each diagonal holds $5$ cells, giving $5+5=10$.",
       "But the centre cell lies on both diagonals and was counted twice — subtract it: $10-1=9$ cells are shaded.",
       "There are $25$ cells in all, so the fraction is $\\tfrac9{25}$."
      ]
     },
     "ans": {
      "ru": "$\\tfrac9{25}$",
      "en": "$\\tfrac9{25}$"
     }
    },
    {
     "t": "note",
     "text": {
      "ru": "Вычитание повторно посчитанного — это принцип включения и исключения в самом простом виде. Он вернётся в теме о комбинаторике.",
      "en": "Subtracting what you counted twice is inclusion-exclusion in its simplest form. It comes back in the counting topic."
     }
    },
    {
     "t": "thm",
     "text": {
      "ru": "Если два треугольника имеют вершину $A$ и основания на одной прямой, то отношение их площадей равно отношению оснований: $$\\frac{[ABD]}{[ADC]}=\\frac{BD}{DC}.$$",
      "en": "If two triangles share a vertex $A$ and have their bases on one line, the ratio of their areas equals the ratio of the bases: $$\\frac{[ABD]}{[ADC]}=\\frac{BD}{DC}.$$"
     },
     "name": {
      "ru": "Треугольники с общей высотой",
      "en": "Triangles that share a height"
     }
    },
    {
     "t": "proof",
     "text": {
      "ru": "Опустим из $A$ перпендикуляр $h$ на прямую $BC$. Это одна и та же высота для обоих треугольников, поэтому $[ABD]=\\tfrac12\\,BD\\cdot h$ и $[ADC]=\\tfrac12\\,DC\\cdot h$. В отношении множитель $\\tfrac12 h$ сокращается. $\\blacksquare$",
      "en": "Drop the perpendicular $h$ from $A$ to the line $BC$. It is the same height for both triangles, so $[ABD]=\\tfrac12\\,BD\\cdot h$ and $[ADC]=\\tfrac12\\,DC\\cdot h$. In the ratio the factor $\\tfrac12 h$ cancels. $\\blacksquare$"
     }
    },
    {
     "t": "fig",
     "svg": "<svg viewBox=\"0 0 420 200\" role=\"img\">\n  <polygon points=\"40,165 380,165 300,35\" fill=\"var(--c, #1E6FB8)\" fill-opacity=\"0.10\"/>\n  <polygon points=\"40,165 160,165 300,35\" fill=\"var(--c, #1E6FB8)\" fill-opacity=\"0.30\"/>\n  <g stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\">\n    <polygon points=\"40,165 380,165 300,35\"/>\n    <line x1=\"160\" y1=\"165\" x2=\"300\" y2=\"35\"/>\n  </g>\n  <g stroke=\"currentColor\" stroke-width=\"1.3\" stroke-dasharray=\"5 4\" fill=\"none\">\n    <line x1=\"300\" y1=\"35\" x2=\"300\" y2=\"165\"/>\n  </g>\n  <g font-size=\"14\" fill=\"currentColor\">\n    <text x=\"30\" y=\"184\">B</text>\n    <text x=\"155\" y=\"184\">D</text>\n    <text x=\"376\" y=\"184\">C</text>\n    <text x=\"296\" y=\"26\">A</text>\n    <text x=\"306\" y=\"110\">h</text>\n  </g>\n</svg>",
     "cap": {
      "ru": "Общая высота $h$ из вершины $A$: площади относятся как $BD:DC$.",
      "en": "A shared height $h$ from $A$: the areas are in the ratio $BD:DC$."
     }
    },
    {
     "t": "ex",
     "q": {
      "ru": "В треугольнике $ABC$ точка $D$ на стороне $BC$ делит её так, что $BD:DC=1:2$. Какую часть площади $ABC$ составляет площадь $ABD$?",
      "en": "In triangle $ABC$ a point $D$ on side $BC$ divides it so that $BD:DC=1:2$. What fraction of the area of $ABC$ is the area of $ABD$?"
     },
     "steps": {
      "ru": [
       "Треугольники $ABD$ и $ADC$ имеют общую высоту из $A$.",
       "Значит $[ABD]:[ADC]=BD:DC=1:2$.",
       "Площадь $ABC$ — это $1+2=3$ части, а $ABD$ — одна из них."
      ],
      "en": [
       "Triangles $ABD$ and $ADC$ share the height from $A$.",
       "So $[ABD]:[ADC]=BD:DC=1:2$.",
       "The area of $ABC$ is $1+2=3$ parts and $ABD$ is one of them."
      ]
     },
     "ans": {
      "ru": "$\\tfrac13$",
      "en": "$\\tfrac13$"
     }
    },
    {
     "t": "idea",
     "text": {
      "ru": "Если в условии нет ни одного числа, а спрашивают долю, объявите площадь всей фигуры равной $1$ — или числу, которое делится на все знаменатели задачи. Ответ от этого не зависит, а вычисления становятся целыми.",
      "en": "If the problem gives no numbers at all and asks for a fraction, declare the whole figure to have area $1$ — or a number divisible by every denominator in sight. The answer does not depend on the choice, and the arithmetic turns into integers."
     },
     "name": {
      "ru": "Назначьте удобную площадь",
      "en": "Give the figure a convenient area"
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
       "**Узнайте процент как дробь.** $12{,}5\\%=\\tfrac18$, $16\\tfrac23\\%=\\tfrac16$, $37{,}5\\%=\\tfrac38$. Это превращает умножение в деление.",
       "**Переведите каждое изменение в множитель** и перемножьте. Порядок скидок, наценок и налогов перестаёт иметь значение.",
       "**Спросите «процент от чего?»** Если в задаче два разных основания, подпишите их буквами, прежде чем считать.",
       "**Если дана цена после скидки — делите, а не прибавляйте.**",
       "**Введите единицу $k$:** отношение $a:b$ — это $ak$ и $bk$.",
       "**Склеивайте отношения через НОК общего члена.**",
       "**Найдите то, что не меняется** — количество, сумму или разность — и запишите его дважды.",
       "**Считайте скорости, а не времена**, в любой задаче про работу, наполнение и движение.",
       "**Сокращайте единицы как множители** — они покажут ошибку раньше арифметики.",
       "**Назначьте удобное число** ($100$ для процентов, НОК знаменателей для дробей, $1$ для площади), если в условии чисел нет."
      ],
      "en": [
       "**Recognise the percent as a fraction.** $12.5\\%=\\tfrac18$, $16\\tfrac23\\%=\\tfrac16$, $37.5\\%=\\tfrac38$. That turns a multiplication into a division.",
       "**Turn every change into a factor** and multiply. The order of discounts, markups and taxes stops mattering.",
       "**Ask \"a percent of what?\"** If the problem has two different bases, give them letters before you compute.",
       "**Given the price after a discount, divide — do not add back.**",
       "**Introduce the unit $k$:** a ratio $a:b$ means $ak$ and $bk$.",
       "**Splice ratios through the LCM of the shared term.**",
       "**Find what does not change** — an amount, a sum or a difference — and write it down twice.",
       "**Count rates, not times**, in every problem about work, filling and motion.",
       "**Cancel units like factors** — they catch an error sooner than the arithmetic does.",
       "**Choose a convenient number** ($100$ for percents, the LCM of the denominators for fractions, $1$ for an area) when the problem gives none."
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
    "ru": "Запишите $0{,}375$ несократимой дробью.",
    "en": "Write $0.375$ as a fraction in lowest terms."
   },
   "hint": {
    "ru": "Три знака после запятой — знаменатель $1000$.",
    "en": "Three decimal places means a denominator of $1000$."
   },
   "sol": {
    "ru": "$0{,}375=\\dfrac{375}{1000}$. Сокращаем на $125$: $\\dfrac{3}{8}$.",
    "en": "$0.375=\\dfrac{375}{1000}$. Divide by $125$: $\\dfrac{3}{8}$."
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Найдите $15\\%$ от $240$.",
    "en": "Find $15\\%$ of $240$."
   },
   "hint": {
    "ru": "$15\\%=10\\%+5\\%$.",
    "en": "$15\\%=10\\%+5\\%$."
   },
   "sol": {
    "ru": "$10\\%$ от $240$ — это $24$, а $5\\%$ — половина от этого, то есть $12$. Сумма: $24+12=36$.",
    "en": "$10\\%$ of $240$ is $24$ and $5\\%$ is half of that, namely $12$. The sum is $24+12=36$."
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Сколько процентов составляет $28$ от $80$?",
    "en": "What percent of $80$ is $28$?"
   },
   "hint": {
    "ru": "Делите на то число, от которого берётся процент.",
    "en": "Divide by the number the percent is taken of."
   },
   "sol": {
    "ru": "$\\dfrac{28}{80}=\\dfrac{7}{20}=0{,}35$, то есть $35\\%$.",
    "en": "$\\dfrac{28}{80}=\\dfrac{7}{20}=0.35$, that is $35\\%$."
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "$\\tfrac25$ некоторого числа равны $34$. Найдите это число.",
    "en": "$\\tfrac25$ of a number is $34$. Find the number."
   },
   "hint": {
    "ru": "Умножьте на обратную дробь.",
    "en": "Multiply by the reciprocal."
   },
   "sol": {
    "ru": "$x=34\\cdot\\dfrac52=17\\cdot 5=85$.",
    "en": "$x=34\\cdot\\dfrac52=17\\cdot 5=85$."
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Расположите по возрастанию: $\\dfrac37$, $0{,}43$, $42\\%$.",
    "en": "Put in increasing order: $\\dfrac37$, $0.43$, $42\\%$."
   },
   "hint": {
    "ru": "Переведите всё в десятичные дроби с четырьмя знаками.",
    "en": "Turn everything into a decimal with four places."
   },
   "sol": {
    "ru": "$42\\%=0{,}4200$, $\\dfrac37=0{,}4285\\ldots$, $0{,}43=0{,}4300$. Значит $42\\%<\\dfrac37<0{,}43$.",
    "en": "$42\\%=0.4200$, $\\dfrac37=0.4285\\ldots$, $0.43=0.4300$. So $42\\%<\\dfrac37<0.43$."
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Число $45$ разделили в отношении $2:3$. Найдите части.",
    "en": "The number $45$ is split in the ratio $2:3$. Find the parts."
   },
   "hint": {
    "ru": "Всего $2+3=5$ частей.",
    "en": "There are $2+3=5$ parts in all."
   },
   "sol": {
    "ru": "$5k=45$, значит $k=9$; части равны $18$ и $27$.",
    "en": "$5k=45$, so $k=9$; the parts are $18$ and $27$."
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Увеличьте $60$ на $35\\%$.",
    "en": "Increase $60$ by $35\\%$."
   },
   "hint": {
    "ru": "Множитель $1{,}35$.",
    "en": "The factor is $1.35$."
   },
   "sol": {
    "ru": "$60\\cdot 1{,}35=60+21=81$.",
    "en": "$60\\cdot 1.35=60+21=81$."
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Уменьшите $90$ на $40\\%$.",
    "en": "Decrease $90$ by $40\\%$."
   },
   "hint": {
    "ru": "Остаётся $60\\%$.",
    "en": "What remains is $60\\%$."
   },
   "sol": {
    "ru": "$90\\cdot 0{,}6=54$.",
    "en": "$90\\cdot 0.6=54$."
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Вычислите $\\dfrac12+\\dfrac13+\\dfrac16$.",
    "en": "Compute $\\dfrac12+\\dfrac13+\\dfrac16$."
   },
   "hint": {
    "ru": "Общий знаменатель $6$.",
    "en": "The common denominator is $6$."
   },
   "sol": {
    "ru": "$\\dfrac36+\\dfrac26+\\dfrac16=\\dfrac66=1$.",
    "en": "$\\dfrac36+\\dfrac26+\\dfrac16=\\dfrac66=1$."
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Что больше: $\\dfrac58$ или $\\dfrac7{11}$?",
    "en": "Which is bigger: $\\dfrac58$ or $\\dfrac7{11}$?"
   },
   "hint": {
    "ru": "Перекрёстное умножение.",
    "en": "Cross-multiply."
   },
   "sol": {
    "ru": "$5\\cdot 11=55$, а $7\\cdot 8=56$. Так как $55<56$, имеем $\\dfrac58<\\dfrac7{11}$: больше $\\dfrac7{11}$.",
    "en": "$5\\cdot 11=55$ and $7\\cdot 8=56$. Since $55<56$ we get $\\dfrac58<\\dfrac7{11}$, so $\\dfrac7{11}$ is bigger."
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Рубашка стоит $1200$ после скидки $25\\%$. Какова была цена до скидки?",
    "en": "A shirt costs $1200$ after a $25\\%$ discount. What was the price before the discount?"
   },
   "hint": {
    "ru": "Делите, а не прибавляйте.",
    "en": "Divide; do not add the percent back."
   },
   "sol": {
    "ru": "$0{,}75x=1200$, значит $x=\\dfrac{1200}{0{,}75}=1600$. (Распространённая ошибка — $1500$.)",
    "en": "$0.75x=1200$, so $x=\\dfrac{1200}{0.75}=1600$. (The common wrong answer is $1500$.)"
   }
  },
  {
   "src": "Разминка / Warm-up",
   "lvl": 1,
   "q": {
    "ru": "Сократите дробь $\\dfrac{84}{126}$.",
    "en": "Reduce the fraction $\\dfrac{84}{126}$."
   },
   "hint": {
    "ru": "Оба числа делятся на $42$.",
    "en": "Both numbers are divisible by $42$."
   },
   "sol": {
    "ru": "$84=42\\cdot 2$, $126=42\\cdot 3$, значит дробь равна $\\dfrac23$.",
    "en": "$84=42\\cdot 2$ and $126=42\\cdot 3$, so the fraction is $\\dfrac23$."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "Число увеличили на $20\\%$, а затем уменьшили на $25\\%$ и получили $90$. Каким было число?",
    "en": "A number is increased by $20\\%$ and then decreased by $25\\%$, giving $90$. What was the number?"
   },
   "hint": {
    "ru": "Перемножьте два множителя.",
    "en": "Multiply the two factors."
   },
   "sol": {
    "ru": "Множитель: $1{,}2\\cdot 0{,}75=0{,}9$. Значит $0{,}9x=90$ и $x=100$.",
    "en": "The factor is $1.2\\cdot 0.75=0.9$. So $0.9x=90$ and $x=100$."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "В классе мальчиков и девочек $4:5$, причём девочек на $6$ больше. Сколько в классе учеников?",
    "en": "A class has boys and girls in the ratio $4:5$, and there are $6$ more girls than boys. How many students are in the class?"
   },
   "hint": {
    "ru": "Разница — это одна часть.",
    "en": "The difference is one part."
   },
   "sol": {
    "ru": "Мальчиков $4k$, девочек $5k$, разница $k=6$. Всего $9k=54$ ученика.",
    "en": "There are $4k$ boys and $5k$ girls, so the difference is $k=6$. The total is $9k=54$."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "В школе $40\\%$ учеников играют в шахматы, и $25\\%$ из них играют ещё и в теннис. Сколько процентов учеников играют и в то, и в другое?",
    "en": "At a school $40\\%$ of the students play chess, and $25\\%$ of those also play tennis. What percent of the students play both?"
   },
   "hint": {
    "ru": "Процент от процента — произведение.",
    "en": "A percent of a percent is a product."
   },
   "sol": {
    "ru": "$0{,}25\\cdot 0{,}40=0{,}10$, то есть $10\\%$.",
    "en": "$0.25\\cdot 0.40=0.10$, that is $10\\%$."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "Цена выросла на $10\\%$, а затем упала на $10\\%$. На сколько процентов она отличается от исходной?",
    "en": "A price rises by $10\\%$ and then falls by $10\\%$. By what percent does it differ from the original?"
   },
   "hint": {
    "ru": "$\\dfrac{p^2}{100}$.",
    "en": "$\\dfrac{p^2}{100}$."
   },
   "sol": {
    "ru": "$1{,}1\\cdot 0{,}9=0{,}99$: цена на $1\\%$ **ниже** исходной. По формуле: $\\dfrac{10^2}{100}=1$.",
    "en": "$1.1\\cdot 0.9=0.99$: the price is $1\\%$ **below** the original. By the formula, $\\dfrac{10^2}{100}=1$."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "Трое друзей разделили деньги в отношении $2:3:7$. Самая большая часть больше самой маленькой на $60$. Сколько денег было всего?",
    "en": "Three friends split some money in the ratio $2:3:7$. The largest share exceeds the smallest by $60$. How much money was there altogether?"
   },
   "hint": {
    "ru": "Разность частей тоже измеряется в частях.",
    "en": "The difference of the shares is measured in parts too."
   },
   "sol": {
    "ru": "$7k-2k=5k=60$, значит $k=12$. Всего частей $2+3+7=12$, то есть $12k=144$.",
    "en": "$7k-2k=5k=60$, so $k=12$. There are $2+3+7=12$ parts, so the total is $12k=144$."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "Бак заполнен на $\\tfrac23$. После того как слили $24$ литра, он оказался заполнен ровно наполовину. Какова ёмкость бака?",
    "en": "A tank is $\\tfrac23$ full. After $24$ litres are drained it is exactly half full. What is the capacity of the tank?"
   },
   "hint": {
    "ru": "Слитое — это разность двух долей.",
    "en": "What was drained is the difference of the two fractions."
   },
   "sol": {
    "ru": "$\\left(\\tfrac23-\\tfrac12\\right)C=\\tfrac16C=24$, значит $C=144$ литра.",
    "en": "$\\left(\\tfrac23-\\tfrac12\\right)C=\\tfrac16C=24$, so $C=144$ litres."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "В мешке красных и синих шаров $3:4$. Добавили $6$ красных, и отношение стало $6:7$. Сколько стало шаров всего?",
    "en": "A bag has red and blue balls in the ratio $3:4$. Six red balls are added and the ratio becomes $6:7$. How many balls are there now?"
   },
   "hint": {
    "ru": "Синие не изменились.",
    "en": "The blue balls did not change."
   },
   "sol": {
    "ru": "Пусть красных $3k$, синих $4k$. Тогда $7(3k+6)=6\\cdot 4k$, то есть $21k+42=24k$ и $k=14$. Сейчас шаров $48+56=104$.",
    "en": "Let there be $3k$ red and $4k$ blue. Then $7(3k+6)=6\\cdot 4k$, so $21k+42=24k$ and $k=14$. There are now $48+56=104$ balls."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "Смешали $2$ литра $30\\%$-го раствора кислоты и $3$ литра $55\\%$-го. Какова концентрация смеси?",
    "en": "Two litres of a $30\\%$ acid solution are mixed with three litres of a $55\\%$ solution. What is the concentration of the mixture?"
   },
   "hint": {
    "ru": "Сохраняется количество кислоты.",
    "en": "The amount of acid is conserved."
   },
   "sol": {
    "ru": "Кислоты: $0{,}3\\cdot 2+0{,}55\\cdot 3=0{,}6+1{,}65=2{,}25$ л. Объём $5$ л, концентрация $\\dfrac{2{,}25}{5}=0{,}45=45\\%$.",
    "en": "Acid: $0.3\\cdot 2+0.55\\cdot 3=0.6+1.65=2.25$ L. The volume is $5$ L, so the concentration is $\\dfrac{2.25}{5}=0.45=45\\%$."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "Какую часть суток составляют $42$ минуты?",
    "en": "What fraction of a day is $42$ minutes?"
   },
   "hint": {
    "ru": "В сутках $1440$ минут.",
    "en": "A day has $1440$ minutes."
   },
   "sol": {
    "ru": "$\\dfrac{42}{1440}=\\dfrac{7}{240}$.",
    "en": "$\\dfrac{42}{1440}=\\dfrac{7}{240}$."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "Один рабочий выполняет заказ за $12$ дней, другой — за $18$. За сколько дней они выполнят его вместе?",
    "en": "One worker finishes an order in $12$ days, another in $18$. How long do they take together?"
   },
   "hint": {
    "ru": "Складывайте скорости.",
    "en": "Add the rates."
   },
   "sol": {
    "ru": "$\\dfrac1{12}+\\dfrac1{18}=\\dfrac{3}{36}+\\dfrac{2}{36}=\\dfrac5{36}$. Время равно $\\dfrac{36}{5}=7{,}2$ дня.",
    "en": "$\\dfrac1{12}+\\dfrac1{18}=\\dfrac{3}{36}+\\dfrac{2}{36}=\\dfrac5{36}$. The time is $\\dfrac{36}{5}=7.2$ days."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "Запишите $0{,}\\overline{36}$ несократимой дробью.",
    "en": "Write $0.\\overline{36}$ as a fraction in lowest terms."
   },
   "hint": {
    "ru": "Период из двух цифр — знаменатель $99$.",
    "en": "A two-digit block means a denominator of $99$."
   },
   "sol": {
    "ru": "$0{,}\\overline{36}=\\dfrac{36}{99}=\\dfrac{4}{11}$.",
    "en": "$0.\\overline{36}=\\dfrac{36}{99}=\\dfrac{4}{11}$."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "Длину прямоугольника увеличили на $25\\%$, а ширину уменьшили на $20\\%$. Как изменилась площадь?",
    "en": "A rectangle's length is increased by $25\\%$ and its width decreased by $20\\%$. How does the area change?"
   },
   "hint": {
    "ru": "Площадь — произведение, значит множители перемножаются.",
    "en": "Area is a product, so the factors multiply."
   },
   "sol": {
    "ru": "$1{,}25\\cdot 0{,}8=1$: площадь не изменилась.",
    "en": "$1.25\\cdot 0.8=1$: the area does not change."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "В опросе $55\\%$ выбрали вариант $A$, $30\\%$ — вариант $B$, а $45$ человек не выбрали ни одного. Сколько человек участвовало?",
    "en": "In a survey $55\\%$ chose option $A$, $30\\%$ chose option $B$, and $45$ people chose neither. How many people took part?"
   },
   "hint": {
    "ru": "Сколько процентов осталось?",
    "en": "What percent is left over?"
   },
   "sol": {
    "ru": "Ни один не выбрали $100\\%-55\\%-30\\%=15\\%$. Значит $0{,}15N=45$ и $N=300$.",
    "en": "Neither was chosen by $100\\%-55\\%-30\\%=15\\%$. So $0.15N=45$ and $N=300$."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "Цена книги выросла с $80$ до $92$. На сколько процентов?",
    "en": "The price of a book went from $80$ to $92$. By what percent did it rise?"
   },
   "hint": {
    "ru": "В знаменателе — старая цена.",
    "en": "The old price goes in the denominator."
   },
   "sol": {
    "ru": "$\\dfrac{92-80}{80}=\\dfrac{12}{80}=0{,}15=15\\%$.",
    "en": "$\\dfrac{92-80}{80}=\\dfrac{12}{80}=0.15=15\\%$."
   }
  },
  {
   "src": "Уровень AMC 8 / AMC 8 level",
   "lvl": 2,
   "q": {
    "ru": "В магазине на витрине написано: «второй товар — за полцены». Покупатель берёт два одинаковых товара. Какой скидке на весь чек это равносильно?",
    "en": "A shop sign reads \"second item half price\". A customer buys two identical items. What discount on the whole bill is that equivalent to?"
   },
   "hint": {
    "ru": "Посчитайте, сколько заплачено из $2p$.",
    "en": "Work out how much of $2p$ is paid."
   },
   "sol": {
    "ru": "Платим $p+\\tfrac12p=\\tfrac32p$ вместо $2p$, то есть $\\tfrac34$ суммы. Скидка — $25\\%$.",
    "en": "You pay $p+\\tfrac12p=\\tfrac32p$ instead of $2p$, that is $\\tfrac34$ of the bill. The discount is $25\\%$."
   }
  },
  {
   "src": "Уровень «Кенгуру» (Cadet) / Kangaroo level (Cadet)",
   "lvl": 3,
   "q": {
    "ru": "Квадрат $5\\times 5$ разбит на $25$ одинаковых клеток. Закрашены все клетки, лежащие на какой-нибудь из двух диагоналей. Какая часть квадрата закрашена?",
    "en": "A $5\\times 5$ square is cut into $25$ equal cells. Every cell lying on either diagonal is shaded. What fraction of the square is shaded?"
   },
   "hint": {
    "ru": "Центральная клетка лежит на обеих диагоналях.",
    "en": "The centre cell lies on both diagonals."
   },
   "sol": {
    "ru": "На каждой диагонали $5$ клеток, но центральная общая: $5+5-1=9$. Доля равна $\\dfrac9{25}$.",
    "en": "Each diagonal has $5$ cells but the centre one is shared: $5+5-1=9$. The fraction is $\\dfrac9{25}$."
   }
  },
  {
   "src": "AMC 8 · задачи 15–25 / AMC 8 · problems 15-25",
   "lvl": 3,
   "q": {
    "ru": "Три числа относятся как $3:4:6$, а разность наибольшего и наименьшего равна $18$. Найдите их сумму.",
    "en": "Three numbers are in the ratio $3:4:6$, and the difference between the largest and the smallest is $18$. Find their sum."
   },
   "hint": {
    "ru": "$6k-3k=3k$.",
    "en": "$6k-3k=3k$."
   },
   "sol": {
    "ru": "$3k=18$, значит $k=6$; числа равны $18,24,36$, их сумма — $78$. (Или сразу: $13k=13\\cdot 6=78$.)",
    "en": "$3k=18$, so $k=6$; the numbers are $18,24,36$ with sum $78$. (Or directly: $13k=13\\cdot 6=78$.)"
   }
  },
  {
   "src": "AMC 8 · задачи 15–25 / AMC 8 · problems 15-25",
   "lvl": 3,
   "q": {
    "ru": "Зарплату сначала повысили на $20\\%$, затем ещё на $10\\%$, и она стала равна $1320$. Какой она была изначально?",
    "en": "A salary is raised by $20\\%$ and then by a further $10\\%$, reaching $1320$. What was it originally?"
   },
   "hint": {
    "ru": "Поделите на произведение множителей.",
    "en": "Divide by the product of the factors."
   },
   "sol": {
    "ru": "$1{,}2\\cdot 1{,}1=1{,}32$, значит $x=\\dfrac{1320}{1{,}32}=1000$.",
    "en": "$1.2\\cdot 1.1=1.32$, so $x=\\dfrac{1320}{1.32}=1000$."
   }
  },
  {
   "src": "AMC 8 · задачи 15–25 / AMC 8 · problems 15-25",
   "lvl": 3,
   "q": {
    "ru": "Если к числителю дроби прибавить $1$, получится $\\tfrac12$; если из знаменателя вычесть $1$, получится $\\tfrac13$. Найдите дробь.",
    "en": "Adding $1$ to the numerator of a fraction gives $\\tfrac12$; subtracting $1$ from the denominator gives $\\tfrac13$. Find the fraction."
   },
   "hint": {
    "ru": "Два условия — два уравнения на $a$ и $b$.",
    "en": "Two conditions give two equations in $a$ and $b$."
   },
   "sol": {
    "ru": "Из $\\dfrac{a+1}{b}=\\dfrac12$ имеем $b=2a+2$. Из $\\dfrac{a}{b-1}=\\dfrac13$ имеем $3a=b-1=2a+1$, значит $a=1$ и $b=4$. Дробь равна $\\dfrac14$; проверка: $\\dfrac24=\\dfrac12$ и $\\dfrac13=\\dfrac13$. $\\checkmark$",
    "en": "From $\\dfrac{a+1}{b}=\\dfrac12$ we get $b=2a+2$. From $\\dfrac{a}{b-1}=\\dfrac13$ we get $3a=b-1=2a+1$, so $a=1$ and $b=4$. The fraction is $\\dfrac14$; check: $\\dfrac24=\\dfrac12$ and $\\dfrac13=\\dfrac13$. $\\checkmark$"
   }
  },
  {
   "src": "AMC 8 · задачи 15–25 / AMC 8 · problems 15-25",
   "lvl": 3,
   "q": {
    "ru": "В группе $\\tfrac35$ — девочки. Восемь мальчиков ушли, и девочек стало $\\tfrac34$. Сколько человек было в группе сначала?",
    "en": "In a group $\\tfrac35$ are girls. Eight boys leave and now $\\tfrac34$ are girls. How many people were in the group at first?"
   },
   "hint": {
    "ru": "Число девочек не менялось.",
    "en": "The number of girls never changed."
   },
   "sol": {
    "ru": "Пусть было $n$ человек, девочек $\\tfrac35n$. Тогда $\\dfrac{\\tfrac35 n}{n-8}=\\dfrac34$, то есть $\\tfrac{12}5n=3n-24$. Умножим на $5$: $12n=15n-120$, откуда $3n=120$ и $n=40$. Проверка: $24$ девочки и $16$ мальчиков; после ухода восьмерых — $24$ из $32$, то есть $\\tfrac34$. $\\checkmark$",
    "en": "Let the group have $n$ people, of whom $\\tfrac35n$ are girls. Then $\\dfrac{\\tfrac35 n}{n-8}=\\dfrac34$, i.e. $\\tfrac{12}5n=3n-24$. Multiplying by $5$: $12n=15n-120$, so $3n=120$ and $n=40$. Check: $24$ girls and $16$ boys; after eight leave, $24$ out of $32$, which is $\\tfrac34$. $\\checkmark$"
   }
  },
  {
   "src": "Уровень «Кенгуру» (Cadet) / Kangaroo level (Cadet)",
   "lvl": 3,
   "q": {
    "ru": "Арбуз весит $50$ кг, и вода составляет $90\\%$ его массы. Арбуз подсушили, и теперь вода составляет $80\\%$. Сколько он весит теперь?",
    "en": "A watermelon weighs $50$ kg and water is $90\\%$ of its mass. It is dried until water is $80\\%$ of its mass. What does it weigh now?"
   },
   "hint": {
    "ru": "Сухая часть не испаряется — работайте с ней.",
    "en": "The dry part does not evaporate — work with that."
   },
   "sol": {
    "ru": "Сухого вещества $10\\%$ от $50$, то есть $5$ кг, и оно не меняется. Теперь оно составляет $20\\%$ массы, значит масса равна $\\dfrac{5}{0{,}2}=25$ кг. Ответ удивляет: достаточно убрать $10$ процентных пунктов воды, чтобы вес упал вдвое.",
    "en": "The dry matter is $10\\%$ of $50$, i.e. $5$ kg, and it does not change. It is now $20\\%$ of the mass, so the mass is $\\dfrac{5}{0.2}=25$ kg. The answer is surprising: dropping the water by $10$ percentage points halves the weight."
   }
  },
  {
   "src": "AMC 8 · задачи 15–25 / AMC 8 · problems 15-25",
   "lvl": 3,
   "q": {
    "ru": "Запишите $0{,}2\\overline{45}$ несократимой дробью.",
    "en": "Write $0.2\\overline{45}$ as a fraction in lowest terms."
   },
   "hint": {
    "ru": "Умножьте на $10$, чтобы период начинался сразу после запятой.",
    "en": "Multiply by $10$ so the block starts right after the point."
   },
   "sol": {
    "ru": "Пусть $x=0{,}2\\overline{45}$. Тогда $10x=2{,}\\overline{45}=2+\\dfrac{45}{99}$, то есть $10x=\\dfrac{198+45}{99}=\\dfrac{243}{99}$. Значит $x=\\dfrac{243}{990}=\\dfrac{27}{110}$.",
    "en": "Let $x=0.2\\overline{45}$. Then $10x=2.\\overline{45}=2+\\dfrac{45}{99}$, so $10x=\\dfrac{198+45}{99}=\\dfrac{243}{99}$. Hence $x=\\dfrac{243}{990}=\\dfrac{27}{110}$."
   }
  },
  {
   "src": "AMC 8 · задачи 15–25 / AMC 8 · problems 15-25",
   "lvl": 3,
   "q": {
    "ru": "Сколько процентов от $\\tfrac38$ составляет $\\tfrac16$?",
    "en": "What percent of $\\tfrac38$ is $\\tfrac16$?"
   },
   "hint": {
    "ru": "Разделите одно на другое.",
    "en": "Divide one by the other."
   },
   "sol": {
    "ru": "$\\dfrac{1/6}{3/8}=\\dfrac16\\cdot\\dfrac83=\\dfrac{8}{18}=\\dfrac49$, то есть $44\\tfrac49\\%$.",
    "en": "$\\dfrac{1/6}{3/8}=\\dfrac16\\cdot\\dfrac83=\\dfrac{8}{18}=\\dfrac49$, that is $44\\tfrac49\\%$."
   }
  },
  {
   "src": "Уровень «Кенгуру» (Cadet) / Kangaroo level (Cadet)",
   "lvl": 3,
   "q": {
    "ru": "Прямоугольник со сторонами в отношении $3:4$ имеет периметр $70$. Найдите его площадь.",
    "en": "A rectangle whose sides are in the ratio $3:4$ has perimeter $70$. Find its area."
   },
   "hint": {
    "ru": "Полупериметр равен сумме двух сторон.",
    "en": "The semiperimeter is the sum of two sides."
   },
   "sol": {
    "ru": "$3k+4k=35$, значит $k=5$ и стороны равны $15$ и $20$. Площадь равна $300$.",
    "en": "$3k+4k=35$, so $k=5$ and the sides are $15$ and $20$. The area is $300$."
   }
  },
  {
   "src": "AMC 8 · задачи 15–25 / AMC 8 · problems 15-25",
   "lvl": 3,
   "q": {
    "ru": "Скидка $30\\%$, а затем ещё $20\\%$ от новой цены. Какой одной скидке это равносильно?",
    "en": "A $30\\%$ discount followed by a further $20\\%$ off the new price. What single discount is equivalent?"
   },
   "hint": {
    "ru": "Перемножьте множители.",
    "en": "Multiply the factors."
   },
   "sol": {
    "ru": "$0{,}7\\cdot 0{,}8=0{,}56$: платим $56\\%$, значит скидка $44\\%$.",
    "en": "$0.7\\cdot 0.8=0.56$: you pay $56\\%$, so the discount is $44\\%$."
   }
  },
  {
   "src": "«Кенгуру» · 5 баллов / Kangaroo · 5 points",
   "lvl": 3,
   "q": {
    "ru": "$x:y=2:3$ и $y:z=5:7$, причём $x+y+z=184$. Найдите $z$.",
    "en": "$x:y=2:3$ and $y:z=5:7$, with $x+y+z=184$. Find $z$."
   },
   "hint": {
    "ru": "Склейте отношения через общий член $y$.",
    "en": "Splice the ratios through the shared term $y$."
   },
   "sol": {
    "ru": "НОК для $y$ равен $15$: $x:y=10:15$ и $y:z=15:21$, значит $x:y:z=10:15:21$. Частей $46$, и $46k=184$ даёт $k=4$. Тогда $z=21\\cdot 4=84$.",
    "en": "The LCM for $y$ is $15$: $x:y=10:15$ and $y:z=15:21$, so $x:y:z=10:15:21$. That is $46$ parts, and $46k=184$ gives $k=4$. Hence $z=21\\cdot 4=84$."
   }
  },
  {
   "src": "AMC 8 · задачи 15–25 / AMC 8 · problems 15-25",
   "lvl": 3,
   "q": {
    "ru": "На выборах с двумя кандидатами победитель получил $55\\%$ голосов и выиграл с перевесом $1200$ голосов. Сколько было голосов всего?",
    "en": "In a two-candidate election the winner took $55\\%$ of the votes and won by $1200$ votes. How many votes were cast?"
   },
   "hint": {
    "ru": "Перевес — это разность двух процентов.",
    "en": "The margin is the difference of the two percents."
   },
   "sol": {
    "ru": "Проигравший получил $45\\%$, перевес равен $55\\%-45\\%=10\\%$. Значит $0{,}1N=1200$ и $N=12\\,000$.",
    "en": "The loser took $45\\%$, so the margin is $55\\%-45\\%=10\\%$. Hence $0.1N=1200$ and $N=12{,}000$."
   }
  },
  {
   "src": "В духе AoPS / AoPS style",
   "lvl": 4,
   "q": {
    "ru": "Сколько существует несократимых дробей $\\dfrac ab$ с натуральными $a,b$, для которых $a+b=100$ и $\\dfrac13<\\dfrac ab<\\dfrac12$?",
    "en": "How many fractions $\\dfrac ab$ in lowest terms with positive integers $a,b$ satisfy $a+b=100$ and $\\dfrac13<\\dfrac ab<\\dfrac12$?"
   },
   "hint": {
    "ru": "Сначала найдите все $a$, потом отсеките сократимые.",
    "en": "First find all the $a$, then throw out the reducible ones."
   },
   "sol": {
    "ru": "Здесь $b=100-a>0$. Неравенство $\\dfrac{a}{100-a}>\\dfrac13$ даёт $3a>100-a$, то есть $a>25$. Неравенство $\\dfrac{a}{100-a}<\\dfrac12$ даёт $2a<100-a$, то есть $a<33\\tfrac13$. Значит $a\\in\\{26,\\ldots,33\\}$.\n\nДробь несократима, когда $\\gcd(a,100-a)=\\gcd(a,100)=1$. Из восьми значений это выполняется для $a=27,29,31,33$: дроби $\\dfrac{27}{73},\\dfrac{29}{71},\\dfrac{31}{69},\\dfrac{33}{67}$. Остальные делятся на $2$ или на $5$. Итого **четыре**.",
    "en": "Here $b=100-a>0$. The inequality $\\dfrac{a}{100-a}>\\dfrac13$ gives $3a>100-a$, i.e. $a>25$. The inequality $\\dfrac{a}{100-a}<\\dfrac12$ gives $2a<100-a$, i.e. $a<33\\tfrac13$. So $a\\in\\{26,\\ldots,33\\}$.\n\nThe fraction is in lowest terms when $\\gcd(a,100-a)=\\gcd(a,100)=1$. Of the eight values that holds for $a=27,29,31,33$, giving $\\dfrac{27}{73},\\dfrac{29}{71},\\dfrac{31}{69},\\dfrac{33}{67}$. The rest share a factor $2$ or $5$. So **four**."
   }
  },
  {
   "src": "В духе AoPS / AoPS style",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что увеличение на $p\\%$ с последующим уменьшением на $p\\%$ всегда даёт потерю, и найдите её в процентах.",
    "en": "Prove that an increase by $p\\%$ followed by a decrease by $p\\%$ always gives a loss, and find that loss as a percent."
   },
   "hint": {
    "ru": "Разность квадратов.",
    "en": "Difference of squares."
   },
   "sol": {
    "ru": "Множитель равен $\\left(1+\\frac p{100}\\right)\\left(1-\\frac p{100}\\right)=1-\\frac{p^2}{10000}$. При $p\\neq 0$ это строго меньше $1$, значит величина уменьшилась. Потеря в долях равна $\\frac{p^2}{10000}$, то есть $\\frac{p^2}{100}\\%$. Например при $p=20$ это $4\\%$, а при $p=50$ — уже $25\\%$. $\\blacksquare$",
    "en": "The factor is $\\left(1+\\frac p{100}\\right)\\left(1-\\frac p{100}\\right)=1-\\frac{p^2}{10000}$. For $p\\neq 0$ this is strictly less than $1$, so the quantity has decreased. The loss as a decimal is $\\frac{p^2}{10000}$, that is $\\frac{p^2}{100}\\%$. For $p=20$ that is $4\\%$; for $p=50$ it is already $25\\%$. $\\blacksquare$"
   }
  },
  {
   "src": "В духе AoPS / AoPS style",
   "lvl": 4,
   "q": {
    "ru": "Найдите дробь с наименьшим знаменателем, строго заключённую между $\\dfrac5{12}$ и $\\dfrac49$.",
    "en": "Find the fraction with the smallest denominator lying strictly between $\\dfrac5{12}$ and $\\dfrac49$."
   },
   "hint": {
    "ru": "Попробуйте медианту, а затем проверьте все знаменатели меньше неё.",
    "en": "Try the mediant, then check every smaller denominator by hand."
   },
   "sol": {
    "ru": "Медианта равна $\\dfrac{5+4}{12+9}=\\dfrac9{21}=\\dfrac37$, и $\\dfrac5{12}=0{,}4167<\\dfrac37=0{,}4286<\\dfrac49=0{,}4444$. $\\checkmark$\n\nОсталось убедиться, что знаменателя меньше $7$ не хватит. Для $q\\le 6$ все дроби $\\frac pq$ в окрестности — это $\\tfrac13=0{,}333$, $\\tfrac25=0{,}4$, $\\tfrac12=0{,}5$, $\\tfrac36=0{,}5$, $\\tfrac26=0{,}333$, $\\tfrac14=0{,}25$; ни одна не попадает в интервал $(0{,}4167;\\,0{,}4444)$. Значит ответ — $\\dfrac37$.",
    "en": "The mediant is $\\dfrac{5+4}{12+9}=\\dfrac9{21}=\\dfrac37$, and $\\dfrac5{12}=0.4167<\\dfrac37=0.4286<\\dfrac49=0.4444$. $\\checkmark$\n\nIt remains to rule out every denominator below $7$. For $q\\le 6$ the nearby fractions $\\frac pq$ are $\\tfrac13=0.333$, $\\tfrac25=0.4$, $\\tfrac12=0.5$, $\\tfrac36=0.5$, $\\tfrac26=0.333$, $\\tfrac14=0.25$; none lands in $(0.4167,\\,0.4444)$. So the answer is $\\dfrac37$."
   }
  },
  {
   "src": "В духе AoPS / AoPS style",
   "lvl": 4,
   "q": {
    "ru": "Из сосуда с $20$ литрами чистого спирта отлили $4$ литра и долили $4$ литра воды. Затем так сделали ещё раз. Сколько процентов спирта в сосуде теперь?",
    "en": "From a vessel holding $20$ litres of pure alcohol, $4$ litres are poured out and replaced by $4$ litres of water. This is then done once more. What percent of the vessel is alcohol now?"
   },
   "hint": {
    "ru": "Каждая операция умножает долю спирта на одно и то же число.",
    "en": "Each operation multiplies the alcohol share by the same number."
   },
   "sol": {
    "ru": "При отливании $4$ из $20$ литров остаётся доля $\\dfrac{16}{20}=\\dfrac45$ *всего* содержимого, в том числе и спирта; долив воды объём восстанавливает, но спирта не добавляет. Значит после каждой операции количество спирта умножается на $\\tfrac45$.\n\nПосле двух операций спирта $20\\cdot\\left(\\tfrac45\\right)^2=20\\cdot\\tfrac{16}{25}=12{,}8$ литра, то есть $\\dfrac{12{,}8}{20}=64\\%$.",
    "en": "Pouring out $4$ of $20$ litres leaves the fraction $\\dfrac{16}{20}=\\dfrac45$ of *everything* in the vessel, alcohol included; topping up with water restores the volume but adds no alcohol. So each operation multiplies the alcohol by $\\tfrac45$.\n\nAfter two operations the alcohol is $20\\cdot\\left(\\tfrac45\\right)^2=20\\cdot\\tfrac{16}{25}=12.8$ litres, that is $\\dfrac{12.8}{20}=64\\%$."
   }
  },
  {
   "src": "В духе AoPS / AoPS style",
   "lvl": 4,
   "q": {
    "ru": "Известно, что $\\dfrac ab=\\dfrac34$. Найдите $\\dfrac{2a+3b}{5a-b}$.",
    "en": "Given $\\dfrac ab=\\dfrac34$, find $\\dfrac{2a+3b}{5a-b}$."
   },
   "hint": {
    "ru": "Положите $a=3k$, $b=4k$.",
    "en": "Put $a=3k$, $b=4k$."
   },
   "sol": {
    "ru": "Пусть $a=3k$ и $b=4k$ при $k\\neq 0$. Тогда $2a+3b=6k+12k=18k$ и $5a-b=15k-4k=11k$. Отношение равно $\\dfrac{18k}{11k}=\\dfrac{18}{11}$ — от $k$ не зависит, как и должно быть: и числитель, и знаменатель однородны первой степени.",
    "en": "Let $a=3k$ and $b=4k$ with $k\\neq 0$. Then $2a+3b=6k+12k=18k$ and $5a-b=15k-4k=11k$. The ratio is $\\dfrac{18k}{11k}=\\dfrac{18}{11}$ — independent of $k$, as it must be: numerator and denominator are both homogeneous of degree one."
   }
  },
  {
   "src": "В духе AoPS / AoPS style",
   "lvl": 4,
   "q": {
    "ru": "Магазин делает наценку $60\\%$ на себестоимость, затем даёт скидку $25\\%$ и всё ещё зарабатывает $300$ на каждом товаре. Какова себестоимость?",
    "en": "A shop marks an item up by $60\\%$ over cost, then gives a $25\\%$ discount, and still makes $300$ profit on each item. What is the cost?"
   },
   "hint": {
    "ru": "Соберите цепочку в один множитель.",
    "en": "Collapse the chain into one factor."
   },
   "sol": {
    "ru": "Цена продажи равна $1{,}6c\\cdot 0{,}75=1{,}2c$. Прибыль — это $1{,}2c-c=0{,}2c$, и она равна $300$. Значит $c=1500$.",
    "en": "The selling price is $1.6c\\cdot 0.75=1.2c$. The profit is $1.2c-c=0.2c$, and that equals $300$. Hence $c=1500$."
   }
  },
  {
   "src": "Вызов / Challenge",
   "lvl": 4,
   "q": {
    "ru": "Докажите, что если $\\dfrac ab<\\dfrac cd$ и $b,d>0$, то $$\\frac ab<\\frac{a+c}{b+d}<\\frac cd.$$",
    "en": "Prove that if $\\dfrac ab<\\dfrac cd$ with $b,d>0$, then $$\\frac ab<\\frac{a+c}{b+d}<\\frac cd.$$"
   },
   "hint": {
    "ru": "Перепишите каждое из двух неравенств перекрёстным умножением.",
    "en": "Rewrite each of the two inequalities by cross-multiplication."
   },
   "sol": {
    "ru": "Так как $b,d>0$, условие $\\frac ab<\\frac cd$ равносильно $ad<bc$. Заметим также $b+d>0$.\n\nЛевое неравенство $\\frac ab<\\frac{a+c}{b+d}$ равносильно $a(b+d)<b(a+c)$, то есть $ab+ad<ab+bc$, то есть $ad<bc$ — выполнено.\n\nПравое неравенство $\\frac{a+c}{b+d}<\\frac cd$ равносильно $d(a+c)<c(b+d)$, то есть $ad+cd<bc+cd$, снова $ad<bc$ — выполнено. $\\blacksquare$",
    "en": "Since $b,d>0$, the hypothesis $\\frac ab<\\frac cd$ is equivalent to $ad<bc$. Note also that $b+d>0$.\n\nThe left inequality $\\frac ab<\\frac{a+c}{b+d}$ is equivalent to $a(b+d)<b(a+c)$, i.e. $ab+ad<ab+bc$, i.e. $ad<bc$ — which holds.\n\nThe right inequality $\\frac{a+c}{b+d}<\\frac cd$ is equivalent to $d(a+c)<c(b+d)$, i.e. $ad+cd<bc+cd$, again $ad<bc$ — which holds. $\\blacksquare$"
   }
  },
  {
   "src": "Вызов / Challenge",
   "lvl": 4,
   "q": {
    "ru": "Прямоугольник разрезали прямой на квадрат и меньший прямоугольник, подобный исходному. Найдите отношение большей стороны исходного прямоугольника к меньшей.",
    "en": "A rectangle is cut by a straight line into a square and a smaller rectangle similar to the original. Find the ratio of the longer side of the original rectangle to the shorter one."
   },
   "hint": {
    "ru": "Обозначьте отношение одной буквой и составьте уравнение.",
    "en": "Call the ratio one letter and write down the equation."
   },
   "sol": {
    "ru": "Пусть короткая сторона равна $1$, длинная — $x>1$, и отношение равно $x:1$. Отрезав квадрат $1\\times 1$, получаем прямоугольник со сторонами $1$ и $x-1$, у которого отношение большей стороны к меньшей равно $\\dfrac{1}{x-1}$.\n\nПодобие даёт $x=\\dfrac1{x-1}$, то есть $x^2-x-1=0$. Положительный корень — $x=\\dfrac{1+\\sqrt5}{2}\\approx 1{,}618$: золотое сечение.",
    "en": "Let the short side be $1$ and the long side $x>1$, so the ratio is $x:1$. Cutting off the $1\\times 1$ square leaves a rectangle with sides $1$ and $x-1$, whose longer-to-shorter ratio is $\\dfrac{1}{x-1}$.\n\nSimilarity gives $x=\\dfrac1{x-1}$, that is $x^2-x-1=0$. The positive root is $x=\\dfrac{1+\\sqrt5}{2}\\approx 1.618$: the golden ratio."
   }
  },
  {
   "src": "Вызов / Challenge",
   "lvl": 4,
   "q": {
    "ru": "Два сплава содержат медь и цинк в отношениях $2:3$ и $5:4$. В каком отношении надо взять эти сплавы, чтобы в полученном сплаве меди и цинка было $1:1$?",
    "en": "Two alloys contain copper and zinc in the ratios $2:3$ and $5:4$. In what ratio should they be taken so that the resulting alloy has copper and zinc in the ratio $1:1$?"
   },
   "hint": {
    "ru": "Посчитайте долю меди в каждом сплаве и решите уравнение на взвешенное среднее.",
    "en": "Compute the copper fraction of each alloy and solve the weighted average equation."
   },
   "sol": {
    "ru": "Доля меди: в первом сплаве $\\tfrac25$, во втором $\\tfrac59$. Нужна доля $\\tfrac12$.\n\nВозьмём массы $m_1$ и $m_2$. Тогда $\\dfrac{\\tfrac25m_1+\\tfrac59m_2}{m_1+m_2}=\\tfrac12$, то есть $\\tfrac45m_1+\\tfrac{10}9m_2=m_1+m_2$, откуда $\\tfrac19m_2=\\tfrac15m_1$ и $\\dfrac{m_1}{m_2}=\\dfrac59$.\n\nПроверка: взяв $5$ и $9$, получаем меди $\\tfrac25\\cdot5+\\tfrac59\\cdot9=2+5=7$ из $14$ — ровно половина. $\\checkmark$ Ответ: $5:9$.",
    "en": "Copper fraction: $\\tfrac25$ in the first alloy, $\\tfrac59$ in the second. We want $\\tfrac12$.\n\nTake masses $m_1$ and $m_2$. Then $\\dfrac{\\tfrac25m_1+\\tfrac59m_2}{m_1+m_2}=\\tfrac12$, so $\\tfrac45m_1+\\tfrac{10}9m_2=m_1+m_2$, giving $\\tfrac19m_2=\\tfrac15m_1$ and $\\dfrac{m_1}{m_2}=\\dfrac59$.\n\nCheck: taking $5$ and $9$ gives copper $\\tfrac25\\cdot5+\\tfrac59\\cdot9=2+5=7$ out of $14$ — exactly half. $\\checkmark$ The answer is $5:9$."
   }
  },
  {
   "src": "Вызов / Challenge",
   "lvl": 4,
   "q": {
    "ru": "Цену товара дважды снизили на одно и то же число процентов, и в итоге она упала на $36\\%$. На сколько процентов снижали каждый раз?",
    "en": "A price was reduced twice by the same percent, and in total it fell by $36\\%$. By what percent was it reduced each time?"
   },
   "hint": {
    "ru": "Получится квадратное уравнение — или просто квадратный корень.",
    "en": "You will get a quadratic — or simply take a square root."
   },
   "sol": {
    "ru": "Пусть каждый раз снижали на $p\\%$ и $r=\\frac p{100}$. Тогда $(1-r)^2=1-0{,}36=0{,}64$, значит $1-r=0{,}8$ (берём положительный корень, так как $1-r>0$) и $r=0{,}2$.\n\nКаждое снижение составляло $20\\%$. Проверка: $0{,}8\\cdot 0{,}8=0{,}64$. $\\checkmark$",
    "en": "Let each reduction be $p\\%$ and set $r=\\frac p{100}$. Then $(1-r)^2=1-0.36=0.64$, so $1-r=0.8$ (the positive root, since $1-r>0$) and $r=0.2$.\n\nEach reduction was $20\\%$. Check: $0.8\\cdot 0.8=0.64$. $\\checkmark$"
   }
  }
 ]
};
