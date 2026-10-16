# -*- coding: utf-8 -*-
"""Milliy sertifikat practice for Quarter II — roots, exponents, inequalities."""

from .common import F, M, rt

MS = {}

MS['alg-11'] = dict(brief=[
    ('Take the root of the factorisation, not of the number',
     M('√50') + ' is ' + M('√(25 · 2)') + ' = ' + M('5√2') + '. Every Y-1 item '
     'on surds is this one move; the options always include the unfactorised '
     'form so that a candidate who stops early still finds an answer.'),
    ('An even root of a negative number does not exist; an odd one does',
     M('⁴√(−16)') + ' has no value in the real numbers, while '
     + M('³√(−64) = −4') + '. The paper tests the difference directly.'),
    ('Roots multiply and divide, they do not add',
     M('√a · √b = √(ab)') + ', but ' + M('√a + √b') + ' is not ' + M('√(a + b)')
     + '. Check with ' + M('√9 + √16 = 7') + ' against ' + M('√25 = 5') + '.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Find ' + rt(M('81'), 4) + '.',
         opts=(M('3'), M('9'), M('6'), M('27')),
         key=0, a=M('3'),
         check=('simp', '81**Rational(1,4)', '3')),
    dict(kind='Y-1', mark='1,3',
         q='Find ' + rt(M('−64'), 3) + '.',
         opts=(M('−4'), M('4'), M('−8'), 'it does not exist'),
         key=0, a=M('−4'),
         check=('simp', 'cbrt_real(-64)', '-4')),
    dict(kind='Y-1', mark='2,2',
         q='Simplify ' + rt(M('50')) + '.',
         opts=(M('5') + rt(M('2')), M('2') + rt(M('5')), M('25') + rt(M('2')),
               M('10') + rt(M('5'))),
         key=0, a=M('5') + rt(M('2')),
         check=('simp', 'sqrt(50)', '5*sqrt(2)')),
    dict(kind='Y-1', mark='2,2',
         q='Find ' + rt(M('8')) + ' · ' + rt(M('2')) + '.',
         opts=(M('4'), M('16'), M('2') + rt(M('2')), M('8')),
         key=0, a=M('4'),
         check=('simp', 'sqrt(8)*sqrt(2)', '4')),
    dict(kind='Y-2', mark='2,2',
         q='Match each root with its value.',
         left=(rt(M('144')), rt(M('125'), 3), rt(M('16'), 4), rt(M('243'), 5)),
         right=(M('2'), M('12'), M('3'), M('5')),
         a='1–B, 2–D, 3–A, 4–C',
         checks=[('simp', 'sqrt(144)', '12'), ('simp', '125**Rational(1,3)', '5'),
                 ('simp', '16**Rational(1,4)', '2'),
                 ('simp', '243**Rational(1,5)', '3')]),
    dict(kind='O', mark='3,2',
         q='Consider ' + rt(M('75')) + ' − ' + rt(M('12')) + '.',
         parts=('Write it in the form ' + M('a') + rt(M('3')) + '.',
                'Hence find its value divided by ' + rt(M('3')) + '.'),
         a='a) ' + M('3') + rt(M('3')) + ' &nbsp; b) ' + M('3'),
         checks=[('simp', 'sqrt(75)-sqrt(12)', '3*sqrt(3)'),
                 ('simp', '(sqrt(75)-sqrt(12))/sqrt(3)', '3')]),
])

MS['alg-12'] = dict(brief=[
    ('The bottom of the fraction is the root, the top is the power',
     M('8') + '<sup>2/3</sup> is ' + M('(³√8)² = 4') + '. Take the root first: '
     'the numbers stay small, and small numbers are fast.'),
    ('A negative exponent turns the number over',
     M('32') + '<sup>−2/5</sup> is ' + M('1 ÷ 32') + '<sup>2/5</sup> = '
     + M('1/4') + '. It does not make the answer negative — a distractor on '
     'every such item is the same number with a minus sign.'),
    ('Write the base as a power before you start',
     M('32 = 2⁵') + ', ' + M('27 = 3³') + ', ' + M('0,04 = 1/25') + '. Once the '
     'base is a perfect power the exponent does the rest in one step.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Find ' + M('16') + '<sup>1/2</sup>.',
         opts=(M('4'), M('8'), M('32'), M('256')),
         key=0, a=M('4'),
         check=('simp', '16**Rational(1,2)', '4')),
    dict(kind='Y-1', mark='1,3',
         q='Find ' + M('8') + '<sup>2/3</sup>.',
         opts=(M('4'), M('16'), M('6'), M('2')),
         key=0, a=M('4'),
         check=('simp', '8**Rational(2,3)', '4')),
    dict(kind='Y-1', mark='2,2',
         q='Find ' + M('32') + '<sup>−2/5</sup>.',
         opts=(F(M('1'), M('4')), M('−4'), F(M('1'), M('2')), M('4')),
         key=0, a=F(M('1'), M('4')),
         check=('simp', '32**Rational(-2,5)', 'Rational(1,4)')),
    dict(kind='Y-1', mark='2,2',
         q='For ' + M('a > 0') + ', which expression equals ' + M('a')
           + '<sup>3/4</sup>?',
         opts=(rt(M('a³'), 4), rt(M('a⁴'), 3), rt(M('a³')), M('a') + rt(M('a'), 4)),
         key=0, a=rt(M('a³'), 4),
         check=('simp', 'apos**Rational(3,4)', '(apos**3)**Rational(1,4)')),
    dict(kind='Y-2', mark='2,2',
         q='Match each power with its value.',
         left=(M('27') + '<sup>1/3</sup>', M('81') + '<sup>3/4</sup>',
               M('25') + '<sup>−1/2</sup>', M('64') + '<sup>2/3</sup>'),
         right=(M('3'), F(M('1'), M('5')), M('16'), M('27')),
         a='1–A, 2–D, 3–B, 4–C',
         checks=[('simp', '27**Rational(1,3)', '3'),
                 ('simp', '81**Rational(3,4)', '27'),
                 ('simp', '25**Rational(-1,2)', 'Rational(1,5)'),
                 ('simp', '64**Rational(2,3)', '16')]),
    dict(kind='O', mark='3,2',
         q='Evaluate the following without a calculator.',
         parts=(M('(0,04)') + '<sup>−1/2</sup>',
                M('(8/27)') + '<sup>2/3</sup>'),
         a='a) ' + M('5') + ' &nbsp; b) ' + F(M('4'), M('9')),
         checks=[('simp', 'Rational(1,25)**Rational(-1,2)', '5'),
                 ('simp', 'Rational(8,27)**Rational(2,3)', 'Rational(4,9)')]),
])

MS['alg-13'] = dict(brief=[
    ('Add the exponents to multiply, subtract to divide, multiply to raise',
     'The three laws cover every item of this kind. '
     + M('a') + '<sup>1/2</sup>' + M(' · a') + '<sup>1/3</sup> = ' + M('a')
     + '<sup>5/6</sup> needs a common denominator in the exponent, not in the '
     'expression.'),
    ('A root is a power, so the laws apply to roots too',
     M('√(a³)') + ' is ' + M('a') + '<sup>3/2</sup>. Converting every root to a '
     'power first turns a messy item into bookkeeping with fractions.'),
    ('The condition ' + M('a > 0') + ' is doing real work',
     'It is what lets ' + M('√(a²)') + ' be ' + M('a') + ' rather than '
     + M('|a|') + '. When the paper states it, use it; when it does not, be '
     'careful with even roots.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Simplify ' + M('a') + '<sup>1/2</sup>' + M(' · a') + '<sup>1/3</sup>.',
         opts=(M('a') + '<sup>5/6</sup>', M('a') + '<sup>1/6</sup>',
               M('a') + '<sup>2/3</sup>', M('a') + '<sup>1/5</sup>'),
         key=0, a=M('a') + '<sup>5/6</sup>',
         check=('simp', 'apos**Rational(1,2)*apos**Rational(1,3)',
                'apos**Rational(5,6)')),
    dict(kind='Y-1', mark='1,3',
         q='Simplify ' + M('(a²)') + '<sup>3/2</sup> for ' + M('a > 0') + '.',
         opts=(M('a³'), M('a⁴'), M('a') + '<sup>7/2</sup>', M('a')),
         key=0, a=M('a³'),
         check=('simp', '(apos**2)**Rational(3,2)', 'apos**3')),
    dict(kind='Y-1', mark='2,2',
         q='Simplify ' + F(M('x') + '<sup>2/3</sup>', M('x') + '<sup>1/6</sup>')
           + ' for ' + M('x > 0') + '.',
         opts=(rt(M('x')), M('x') + '<sup>5/6</sup>', M('x') + '<sup>4</sup>',
               M('x') + '<sup>1/9</sup>'),
         key=0, a=rt(M('x')) + ', that is ' + M('x') + '<sup>1/2</sup>',
         check=('simp', 'xpos**Rational(2,3)/xpos**Rational(1,6)',
                'xpos**Rational(1,2)')),
    dict(kind='Y-1', mark='2,2',
         q='Simplify ' + M('(16x⁴)') + '<sup>1/2</sup> for ' + M('x > 0') + '.',
         opts=(M('4x²'), M('8x²'), M('4x'), M('16x²')),
         key=0, a=M('4x²'),
         check=('simp', '(16*xpos**4)**Rational(1,2)', '4*xpos**2')),
    dict(kind='Y-2', mark='2,2',
         q='Match each expression with its simplest form, taking ' + M('a > 0')
           + '.',
         left=(M('a') + '<sup>3/4</sup> ÷ ' + M('a') + '<sup>1/4</sup>',
               M('(a') + '<sup>1/2</sup>)<sup>4</sup>',
               M('a') + '<sup>1/3</sup> · ' + M('a') + '<sup>2/3</sup>',
               M('(a⁹)') + '<sup>1/3</sup>'),
         right=(M('a'), M('a³'), rt(M('a')), M('a²')),
         a='1–C, 2–D, 3–A, 4–B',
         checks=[('simp', 'apos**Rational(3,4)/apos**Rational(1,4)',
                  'apos**Rational(1,2)'),
                 ('simp', '(apos**Rational(1,2))**4', 'apos**2'),
                 ('simp', 'apos**Rational(1,3)*apos**Rational(2,3)', 'apos'),
                 ('simp', '(apos**9)**Rational(1,3)', 'apos**3')]),
    dict(kind='O', mark='3,2',
         q='Take ' + M('x > 0') + ' and the expression '
           + M('(x') + '<sup>1/2</sup>' + M(' · x') + '<sup>1/3</sup>)<sup>6</sup>.',
         parts=('Write it as a single power of ' + M('x') + '.',
                'Hence find its value when ' + M('x = 2') + '.'),
         a='a) ' + M('x⁵') + ' &nbsp; b) ' + M('32'),
         checks=[('simp', '(xpos**Rational(1,2)*xpos**Rational(1,3))**6',
                  'xpos**5'),
                 ('simp', '2**5', '32')]),
])

MS['alg-14'] = dict(brief=[
    ('Standard form is one digit, then the point',
     M('a · 10') + '<sup>n</sup> with ' + M('1 ≤ a < 10') + '. '
     + M('34 · 10⁻⁵') + ' is a correct number but not standard form, and the '
     'paper keys only the standard one.'),
    ('Multiply the fronts, add the exponents',
     M('(3 · 10⁵)(2 · 10⁻²) = 6 · 10³') + '. If the front comes out as 10 or '
     'more, move the point once more and bump the exponent.'),
    ('To compare, look at the exponent first',
     M('1,2 · 10⁻²') + ' beats ' + M('7 · 10⁻³') + ' because ' + M('−2 > −3')
     + '. Only when the exponents match does the front matter.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Write ' + M('0,00034') + ' in standard form.',
         opts=(M('3,4 · 10⁻⁴'), M('3,4 · 10⁻³'), M('34 · 10⁻⁵'), M('3,4 · 10⁴')),
         key=0, a=M('3,4 · 10⁻⁴'),
         check=('simp', 'Rational(34,10)*10**(-4)', 'Rational(34,100000)')),
    dict(kind='Y-1', mark='1,3',
         q='Write ' + M('2,5 · 10³') + ' as an ordinary number.',
         opts=(M('2500'), M('250'), M('25000'), M('0,0025')),
         key=0, a=M('2500'),
         check=('simp', 'Rational(25,10)*10**3', '2500')),
    dict(kind='Y-1', mark='2,2',
         q='Find ' + M('(3 · 10⁵) · (2 · 10⁻²)') + ', in standard form.',
         opts=(M('6 · 10³'), M('6 · 10⁻¹⁰'), M('5 · 10³'), M('6 · 10⁷')),
         key=0, a=M('6 · 10³'),
         check=('simp', '(3*10**5)*(2*10**(-2))', '6*10**3')),
    dict(kind='Y-1', mark='2,2',
         q='Which of these numbers is the largest?',
         opts=(M('4,1 · 10⁻³'), M('9,9 · 10⁻⁴'), M('1,2 · 10⁻²'), M('7 · 10⁻³')),
         key=2, a=M('1,2 · 10⁻²'),
         check=('bool', 'And(Rational(12,1000) > Rational(7,1000), '
                        'Rational(12,1000) > Rational(41,10000), '
                        'Rational(12,1000) > Rational(99,100000))')),
    dict(kind='Y-2', mark='2,2',
         q='Match each fraction with its decimal form.',
         left=(F(M('1'), M('8')), F(M('3'), M('4')), F(M('1'), M('40')),
               F(M('7'), M('20'))),
         right=(M('0,75'), M('0,125'), M('0,35'), M('0,025')),
         a='1–B, 2–A, 3–D, 4–C',
         checks=[('simp', 'Rational(1,8)', 'Rational(125,1000)'),
                 ('simp', 'Rational(3,4)', 'Rational(75,100)'),
                 ('simp', 'Rational(1,40)', 'Rational(25,1000)'),
                 ('simp', 'Rational(7,20)', 'Rational(35,100)')]),
    dict(kind='O', mark='3,2',
         q='One grain of a crop has mass ' + M('2,5 · 10⁻⁵') + ' kg.',
         parts=('Find the mass of ' + M('4 · 10⁶') + ' grains, in kilograms.',
                'Write that mass in standard form.'),
         a='a) ' + M('100') + ' kg &nbsp; b) ' + M('1 · 10²') + ' kg',
         checks=[('simp', 'Rational(25,10)*10**(-5)*4*10**6', '100'),
                 ('simp', '1*10**2', '100')]),
])

MS['alg-15'] = dict(brief=[
    ('Surds add only when the root is the same',
     M('√18 + √8') + ' is ' + M('3√2 + 2√2 = 5√2') + '. Simplify each surd '
     'first; the like terms appear by themselves.'),
    ('Conjugates clear a surd',
     M('(√5 + √2)(√5 − √2) = 5 − 2 = 3') + '. Recognising the difference of two '
     'squares saves multiplying out four terms and makes the item a 1,3-ball one.'),
    ('A root of a fraction is the fraction of the roots',
     M('√(49/9) = 7/3') + '. The paper offers ' + M('49/3') + ' and '
     + M('7/9') + ' beside it for candidates who take the root of one part only.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Find ' + rt(F(M('49'), M('9'))) + '.',
         opts=(F(M('7'), M('3')), F(M('49'), M('3')), F(M('7'), M('9')),
               F(M('3'), M('7'))),
         key=0, a=F(M('7'), M('3')),
         check=('simp', 'sqrt(Rational(49,9))', 'Rational(7,3)')),
    dict(kind='Y-1', mark='1,3',
         q='Find ' + M('100') + '<sup>3/2</sup>.',
         opts=(M('1000'), M('150'), M('10000'), M('300')),
         key=0, a=M('1000'),
         check=('simp', '100**Rational(3,2)', '1000')),
    dict(kind='Y-1', mark='2,2',
         q='Simplify ' + rt(M('18')) + ' + ' + rt(M('8')) + '.',
         opts=(M('5') + rt(M('2')), M('26'), rt(M('26')), M('6') + rt(M('2'))),
         key=0, a=M('5') + rt(M('2')),
         check=('simp', 'sqrt(18)+sqrt(8)', '5*sqrt(2)')),
    dict(kind='Y-1', mark='2,2',
         q='Find ' + M('2') + '<sup>1/2</sup> · ' + M('8') + '<sup>1/2</sup>.',
         opts=(M('4'), M('16'), M('2') + rt(M('2')), M('10')),
         key=0, a=M('4'),
         check=('simp', '2**Rational(1,2)*8**Rational(1,2)', '4')),
    dict(kind='Y-2', mark='2,2',
         q='Match each expression with its value.',
         left=(M('4') + '<sup>3/2</sup>', M('9') + '<sup>−1/2</sup>',
               rt(M('−27'), 3), M('(1/16)') + '<sup>1/4</sup>'),
         right=(M('−3'), M('8'), F(M('1'), M('2')), F(M('1'), M('3'))),
         a='1–B, 2–D, 3–A, 4–C',
         checks=[('simp', '4**Rational(3,2)', '8'),
                 ('simp', '9**Rational(-1,2)', 'Rational(1,3)'),
                 ('simp', 'cbrt_real(-27)', '-3'),
                 ('simp', 'Rational(1,16)**Rational(1,4)', 'Rational(1,2)')]),
    dict(kind='O', mark='3,2',
         q='Simplify the following.',
         parts=(rt(M('12')) + ' · ' + rt(M('3')),
                M('(') + rt(M('5')) + ' + ' + rt(M('2')) + M(')(') + rt(M('5'))
                + ' − ' + rt(M('2')) + M(')')),
         a='a) ' + M('6') + ' &nbsp; b) ' + M('3'),
         checks=[('simp', 'sqrt(12)*sqrt(3)', '6'),
                 ('simp', '(sqrt(5)+sqrt(2))*(sqrt(5)-sqrt(2))', '3')]),
])

MS['alg-16'] = dict(brief=[
    ('Compare by cross-multiplying, not by dividing',
     'For ' + F(M('2'), M('3')) + ' against ' + F(M('3'), M('5'))
     + ', compare ' + M('2 · 5 = 10') + ' with ' + M('3 · 3 = 9') + '. No '
     'decimals, no rounding, no doubt.'),
    ('On the negative side, bigger digits mean a smaller number',
     M('−2,55 < −2,5 < −2,05') + '. Half the marks lost on this topic are lost '
     'here, and the paper knows it.'),
    ('To place a surd, square both sides',
     'Is ' + M('√10') + ' more or less than ' + M('3,2') + '? Compare '
     + M('10') + ' with ' + M('3,2² = 10,24') + ': so ' + M('√10 < 3,2') + '.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Which statement is true?',
         opts=(F(M('2'), M('3')) + ' &lt; ' + F(M('3'), M('5')),
               F(M('2'), M('3')) + ' = ' + F(M('3'), M('5')),
               F(M('2'), M('3')) + ' &gt; ' + F(M('3'), M('5')),
               'they cannot be compared'),
         key=2, a=F(M('2'), M('3')) + ' &gt; ' + F(M('3'), M('5')),
         check=('bool', 'Rational(2,3) > Rational(3,5)')),
    dict(kind='Y-1', mark='1,3',
         q='Which of these numbers is the greatest?',
         opts=(M('−3'), M('−0,5'), M('0,1'), M('−0,9')),
         key=2, a=M('0,1'),
         check=('bool', 'And(Rational(1,10) > Rational(-1,2), '
                        'Rational(1,10) > -3, Rational(1,10) > Rational(-9,10))')),
    dict(kind='Y-1', mark='2,2',
         q='It is known that ' + M('a − b = −4') + '. Which is true?',
         opts=(M('a > b'), M('a < b'), M('a = b'), 'nothing can be said'),
         key=1, a=M('a < b'),
         check=('bool', '-4 < 0')),
    dict(kind='Y-1', mark='2,2',
         q='Which statement about ' + rt(M('10')) + ' is true?',
         opts=(rt(M('10')) + ' &gt; 3,2', rt(M('10')) + ' &lt; 3,2',
               rt(M('10')) + ' = 3,2', rt(M('10')) + ' &gt; 3,5'),
         key=1, a=rt(M('10')) + ' &lt; 3,2',
         check=('bool', 'sqrt(10) < Rational(16,5)')),
    dict(kind='Y-2', mark='2,2',
         q='Match each root with its value to one decimal place.',
         left=(rt(M('2')), rt(M('5')), rt(M('10')), rt(M('17'))),
         right=(M('3,2'), M('1,4'), M('4,1'), M('2,2')),
         a='1–B, 2–D, 3–A, 4–C',
         checks=[('bool', 'And(sqrt(2) > Rational(135,100), '
                          'sqrt(2) < Rational(145,100))'),
                 ('bool', 'And(sqrt(5) > Rational(215,100), '
                          'sqrt(5) < Rational(225,100))'),
                 ('bool', 'And(sqrt(10) > Rational(315,100), '
                          'sqrt(10) < Rational(325,100))'),
                 ('bool', 'And(sqrt(17) > Rational(405,100), '
                          'sqrt(17) < Rational(415,100))')]),
    dict(kind='O', mark='3,2',
         q='Consider the numbers ' + M('−2,5') + ', ' + M('−2,05') + ', '
           + M('−2,55') + ', and separately ' + rt(M('8')) + ' and ' + M('2,9') + '.',
         parts=('Write the three negative numbers in increasing order.',
                'State which is larger, ' + rt(M('8')) + ' or ' + M('2,9') + '.'),
         a='a) ' + M('−2,55 < −2,5 < −2,05') + ' &nbsp; b) ' + M('2,9'),
         checks=[('bool', 'And(Rational(-255,100) < Rational(-25,10), '
                          'Rational(-25,10) < Rational(-205,100))'),
                 ('bool', 'sqrt(8) < Rational(29,10)')]),
])

MS['alg-17'] = dict(brief=[
    ('Adding anything keeps the sign; multiplying by a negative turns it',
     'From ' + M('a > b') + ' you may add or subtract anything at all. You may '
     'multiply by a positive. Multiply by a negative and the inequality reverses '
     '— that single rule is most of this topic.'),
    ('To bound an expression, bound each piece',
     'If ' + M('3 < x < 5') + ' then ' + M('6 < 2x < 10') + ' and so '
     + M('7 < 2x + 1 < 11') + '. Do the multiplication first and the addition '
     'second, exactly as you would evaluate it.'),
    ('Taking reciprocals reverses the inequality for positives',
     'From ' + M('2 < a < 6') + ' follows ' + F(M('1'), M('6')) + ' &lt; '
     + F(M('1'), M('a')) + ' &lt; ' + F(M('1'), M('2')) + '. The ends swap '
     'places; writing them in the wrong order is the keyed distractor.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Given ' + M('a > b') + ', which is always true?',
         opts=(M('a + 5 > b + 5'), M('a + 5 < b + 5'), M('a − 5 < b − 5'),
               M('5a < 5b')),
         key=0, a=M('a + 5 > b + 5'),
         check=('bool', 'And(3 + 5 > 1 + 5, -1 + 5 > -4 + 5)')),
    dict(kind='Y-1', mark='1,3',
         q='Given ' + M('a > b') + ', which is always true?',
         opts=(M('−a > −b'), M('−a < −b'), M('−a = −b'), M('a² > b²')),
         key=1, a=M('−a < −b'),
         check=('bool', 'And(-3 < -1, -(-1) < -(-4))')),
    dict(kind='Y-1', mark='2,2',
         q='Given ' + M('a > b') + ' and ' + M('c < 0') + ', which is true?',
         opts=(M('ac > bc'), M('ac < bc'), M('ac = bc'), M('a + c > b + c')
               + ' is false'),
         key=1, a=M('ac < bc'),
         check=('bool', 'And(3*(-2) < 1*(-2), (-1)*(-5) < (-4)*(-5))')),
    dict(kind='Y-1', mark='2,2',
         q='Given ' + M('3 < x < 5') + ', between which values does '
           + M('2x + 1') + ' lie?',
         opts=(M('7') + ' and ' + M('11'), M('6') + ' and ' + M('10'),
               M('4') + ' and ' + M('6'), M('7') + ' and ' + M('10')),
         key=0, a='between ' + M('7') + ' and ' + M('11'),
         check=('bound', '2*x+1', {'x': ('3', '5')}, '7', '11')),
    dict(kind='Y-2', mark='2,2',
         q='Take ' + M('a = −3') + ' and ' + M('b = 2') + ', so that '
           + M('a < b') + '. Match each expression with its value.',
         left=(M('a + 3'), M('−2a'), F(M('a'), M('2')), M('a − b')),
         right=(M('6'), M('0'), M('−5'), M('−1,5')),
         a='1–B, 2–A, 3–D, 4–C',
         checks=[('simp', '-3+3', '0'), ('simp', '-2*(-3)', '6'),
                 ('simp', 'Rational(-3,2)', '-3/2'), ('simp', '-3-2', '-5')]),
    dict(kind='O', mark='3,2',
         q='It is given that ' + M('2 < a < 6') + '.',
         parts=('Find the values between which ' + M('3a − 1') + ' lies.',
                'Find the values between which ' + F(M('1'), M('a')) + ' lies.'),
         a='a) ' + M('5 < 3a − 1 < 17') + ' &nbsp; b) ' + F(M('1'), M('6'))
           + ' &lt; ' + F(M('1'), M('a')) + ' &lt; ' + F(M('1'), M('2')),
         checks=[('bound', '3*a-1', {'a': ('2', '6')}, '5', '17'),
                 ('bound', '1/a', {'a': ('2', '6')}, 'Rational(1,6)', 'Rational(1,2)')]),
])

MS['alg-18'] = dict(brief=[
    ('Add the ends to add the quantities',
     'From ' + M('2 < a < 5') + ' and ' + M('1 < b < 3') + ' comes '
     + M('3 < a + b < 8') + '. Lower with lower, upper with upper.'),
    ('To subtract, reverse the second range first',
     M('a − b') + ' is ' + M('a + (−b)') + ', and ' + M('1 < b < 3') + ' gives '
     + M('−3 < −b < −1') + '. So ' + M('−1 < a − b < 4') + ' — the lower end of '
     + M('a') + ' with the <em>upper</em> end of ' + M('b') + '.'),
    ('Multiplying and dividing need positive quantities',
     'For positives the ends multiply: ' + M('2 < ab < 15') + '. For a quotient '
     'the small over the large gives the lower end: ' + F(M('2'), M('3'))
     + ' &lt; ' + F(M('a'), M('b')) + ' &lt; ' + M('5') + '.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Given ' + M('2 < a < 5') + ' and ' + M('1 < b < 3') + ', '
           + M('a + b') + ' lies between',
         opts=(M('3') + ' and ' + M('8'), M('2') + ' and ' + M('15'),
               M('1') + ' and ' + M('8'), M('3') + ' and ' + M('15')),
         key=0, a=M('3') + ' and ' + M('8'),
         check=('bound', 'a+b', {'a': ('2', '5'), 'b': ('1', '3')}, '3', '8')),
    dict(kind='Y-1', mark='1,3',
         q='Given ' + M('2 < a < 5') + ' and ' + M('1 < b < 3') + ', '
           + M('ab') + ' lies between',
         opts=(M('2') + ' and ' + M('15'), M('3') + ' and ' + M('8'),
               M('2') + ' and ' + M('8'), M('5') + ' and ' + M('15')),
         key=0, a=M('2') + ' and ' + M('15'),
         check=('bound', 'a*b', {'a': ('2', '5'), 'b': ('1', '3')}, '2', '15')),
    dict(kind='Y-1', mark='2,2',
         q='Given ' + M('2 < a < 5') + ' and ' + M('1 < b < 3') + ', '
           + M('a − b') + ' lies between',
         opts=(M('−1') + ' and ' + M('4'), M('1') + ' and ' + M('2'),
               M('1') + ' and ' + M('4'), M('−1') + ' and ' + M('2')),
         key=0, a=M('−1') + ' and ' + M('4'),
         check=('bound', 'a-b', {'a': ('2', '5'), 'b': ('1', '3')}, '-1', '4')),
    dict(kind='Y-1', mark='2,2',
         q='Given ' + M('2 < a < 5') + ' and ' + M('1 < b < 3') + ', '
           + F(M('a'), M('b')) + ' lies between',
         opts=(F(M('2'), M('3')) + ' and ' + M('5'), M('2') + ' and ' + M('5'),
               F(M('1'), M('3')) + ' and ' + M('5'),
               F(M('2'), M('3')) + ' and ' + M('15')),
         key=0, a=F(M('2'), M('3')) + ' and ' + M('5'),
         check=('bound', 'a/b', {'a': ('2', '5'), 'b': ('1', '3')}, 'Rational(2,3)', '5')),
    dict(kind='Y-2', mark='2,2',
         q='Take ' + M('1 < x < 4') + ' and ' + M('2 < y < 3') + '. Match each '
           'expression with the interval it lies in.',
         left=(M('x + y'), M('x − y'), M('xy'), F(M('x'), M('y'))),
         right=(M('(2; 12)'), M('(3; 7)'), M('(1/3; 2)'), M('(−2; 2)')),
         a='1–B, 2–D, 3–A, 4–C',
         checks=[('bound', 'x+y', {'x': ('1', '4'), 'y': ('2', '3')}, '3', '7'),
                 ('bound', 'x-y', {'x': ('1', '4'), 'y': ('2', '3')}, '-2', '2'),
                 ('bound', 'x*y', {'x': ('1', '4'), 'y': ('2', '3')}, '2', '12'),
                 ('bound', 'x/y', {'x': ('1', '4'), 'y': ('2', '3')}, 'Rational(1,3)', '2')]),
    dict(kind='O', mark='3,2',
         q='A rectangle has length ' + M('x') + ' cm with ' + M('3 < x < 4')
           + ', and width ' + M('y') + ' cm with ' + M('2 < y < 2,5') + '.',
         parts=('Find the values between which its perimeter lies.',
                'Find the values between which its area lies.'),
         a='a) ' + M('10 < P < 13') + ' &nbsp; b) ' + M('6 < A < 10'),
         checks=[('bound', '2*(x+y)', {'x': ('3', '4'), 'y': ('2', 'Rational(5,2)')}, '10', '13'),
                 ('bound', 'x*y', {'x': ('3', '4'), 'y': ('2', 'Rational(5,2)')}, '6', '10')]),
])

MS['alg-19'] = dict(brief=[
    ('Squaring is safe only for positives',
     'From ' + M('2 < a < 3') + ' follows ' + M('4 < a² < 9') + '. From '
     + M('−3 < a < 2') + ' nothing of the kind follows: ' + M('a²') + ' runs '
     'from ' + M('0') + ' up to ' + M('9') + ', because ' + M('a') + ' passes '
     'through zero. Check the sign of the interval before you square it.'),
    ('Between 0 and 1 the powers go down',
     'For ' + M('0 < a < 1') + ', ' + M('a² < a') + ' and ' + M('a³ < a²')
     + '. For ' + M('a > 1') + ' they go up. Several items a sitting turn on '
     'nothing else.'),
    ('To compare two big powers, make the exponents equal',
     M('2³⁰ = (2³)¹⁰ = 8¹⁰') + ' and ' + M('3²⁰ = (3²)¹⁰ = 9¹⁰') + ', so '
     + M('3²⁰') + ' is the greater. Never estimate; always rewrite.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Given ' + M('0 < a < 1') + ', which is true?',
         opts=(M('a² < a'), M('a² > a'), M('a² = a'), M('a² > 1')),
         key=0, a=M('a² < a'),
         check=('bool', 'And(Rational(1,2)**2 < Rational(1,2), '
                        'Rational(9,10)**2 < Rational(9,10), '
                        'Rational(1,100)**2 < Rational(1,100))')),
    dict(kind='Y-1', mark='1,3',
         q='Given ' + M('2 < a < 3') + ', ' + M('a²') + ' lies between',
         opts=(M('4') + ' and ' + M('9'), M('2') + ' and ' + M('9'),
               M('4') + ' and ' + M('6'), M('8') + ' and ' + M('27')),
         key=0, a=M('4') + ' and ' + M('9'),
         check=('bound', 'a**2', {'a': ('2', '3')}, '4', '9')),
    dict(kind='Y-1', mark='2,2',
         q='Given ' + M('−3 < a < −1') + ', ' + M('a²') + ' lies between',
         opts=(M('1') + ' and ' + M('9'), M('−9') + ' and ' + M('−1'),
               M('−3') + ' and ' + M('−1'), M('0') + ' and ' + M('9')),
         key=0, a=M('1') + ' and ' + M('9'),
         check=('bound', 'a**2', {'a': ('-3', '-1')}, '1', '9')),
    dict(kind='Y-1', mark='2,2',
         q='Which number is greater?',
         opts=(M('2³⁰'), M('3²⁰'), 'they are equal', 'it cannot be decided'),
         key=1, a=M('3²⁰') + ', since ' + M('9¹⁰ > 8¹⁰'),
         check=('bool', '3**20 > 2**30')),
    dict(kind='Y-2', mark='2,2',
         q='Match each range of ' + M('a') + ' with the range of ' + M('a³') + '.',
         left=(M('1 < a < 2'), M('2 < a < 3'), M('−2 < a < −1'), M('0 < a < 1')),
         right=(M('(8; 27)'), M('(1; 8)'), M('(0; 1)'), M('(−8; −1)')),
         a='1–B, 2–A, 3–D, 4–C',
         checks=[('bound', 'a**3', {'a': ('1', '2')}, '1', '8'),
                 ('bound', 'a**3', {'a': ('2', '3')}, '8', '27'),
                 ('bound', 'a**3', {'a': ('-2', '-1')}, '-8', '-1'),
                 ('bound', 'a**3', {'a': ('0', '1')}, '0', '1')]),
    dict(kind='O', mark='3,2',
         q='It is given that ' + M('1 < x < 2') + '.',
         parts=('Find the values between which ' + M('x²') + ' lies.',
                'Find the values between which ' + F(M('1'), M('x²'))
                + ' lies.'),
         a='a) ' + M('1 < x² < 4') + ' &nbsp; b) ' + F(M('1'), M('4')) + ' &lt; '
           + F(M('1'), M('x²')) + ' &lt; ' + M('1'),
         checks=[('bound', 'x**2', {'x': ('1', '2')}, '1', '4'),
                 ('bound', '1/x**2', {'x': ('1', '2')}, 'Rational(1,4)', '1')]),
])

MS['alg-20'] = dict(brief=[
    ('Every item here is one rule applied once',
     'Add to both sides, multiply by a positive, multiply by a negative and '
     'turn the sign. The control work mixes them; it adds nothing new.'),
    ('A range question is answered at the two ends',
     'Substituting the ends of the range into the expression gives the ends of '
     'its range — provided the expression is increasing or decreasing '
     'throughout, which at this level it always is.'),
    ('Decimals and fractions in the same item',
     'Turn one into the other before comparing. ' + F(M('1'), M('3'))
     + ' is ' + M('0,333…') + ', which is less than ' + M('0,34') + ' — and the '
     'paper will offer you the opposite.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Given ' + M('a < b') + ', which is always true?',
         opts=(M('a − 3 < b − 3'), M('a − 3 > b − 3'), M('−a < −b'),
               M('a² < b²')),
         key=0, a=M('a − 3 < b − 3'),
         check=('bool', 'And(1 - 3 < 4 - 3, -5 - 3 < -2 - 3)')),
    dict(kind='Y-1', mark='1,3',
         q='Given ' + M('3 < x < 7') + ', ' + M('x − 5') + ' lies between',
         opts=(M('−2') + ' and ' + M('2'), M('−2') + ' and ' + M('12'),
               M('8') + ' and ' + M('12'), M('0') + ' and ' + M('2')),
         key=0, a=M('−2') + ' and ' + M('2'),
         check=('bound', 'x-5', {'x': ('3', '7')}, '-2', '2')),
    dict(kind='Y-1', mark='2,2',
         q='Which is greater, ' + F(M('1'), M('3')) + ' or ' + M('0,34') + '?',
         opts=(F(M('1'), M('3')), M('0,34'), 'they are equal',
               'it cannot be decided'),
         key=1, a=M('0,34'),
         check=('bool', 'Rational(34,100) > Rational(1,3)')),
    dict(kind='Y-1', mark='2,2',
         q='Given ' + M('2 < a < 4') + ' and ' + M('1 < b < 2') + ', '
           + F(M('a'), M('b')) + ' lies between',
         opts=(M('1') + ' and ' + M('4'), M('2') + ' and ' + M('4'),
               M('1') + ' and ' + M('2'), M('2') + ' and ' + M('8')),
         key=0, a=M('1') + ' and ' + M('4'),
         check=('bound', 'a/b', {'a': ('2', '4'), 'b': ('1', '2')}, '1', '4')),
    dict(kind='Y-2', mark='2,2',
         q='Take ' + M('0 < x < 2') + '. Match each expression with its range.',
         left=(M('2x'), M('x + 3'), M('−x'), F(M('x'), M('2'))),
         right=(M('(3; 5)'), M('(0; 4)'), M('(0; 1)'), M('(−2; 0)')),
         a='1–B, 2–A, 3–D, 4–C',
         checks=[('bound', '2*x', {'x': ('0', '2')}, '0', '4'),
                 ('bound', 'x+3', {'x': ('0', '2')}, '3', '5'),
                 ('bound', '-x', {'x': ('0', '2')}, '-2', '0'),
                 ('bound', 'x/2', {'x': ('0', '2')}, '0', '1')]),
    dict(kind='O', mark='3,2',
         q='It is given that ' + M('3 < a < 5') + ' and ' + M('1 < b < 2') + '.',
         parts=('Find the values between which ' + M('10 − 2a') + ' lies.',
                'Find the values between which ' + M('a + b') + ' lies.'),
         a='a) ' + M('0 < 10 − 2a < 4') + ' &nbsp; b) ' + M('4 < a + b < 7'),
         checks=[('bound', '10-2*a', {'a': ('3', '5')}, '0', '4'),
                 ('bound', 'a+b', {'a': ('3', '5'), 'b': ('1', '2')}, '4', '7')]),
])

MS['alg-21'] = dict(brief=[
    ('Solve it like an equation, and watch one step',
     'Everything you do to an equation you may do here, except one: dividing or '
     'multiplying by a negative number turns the sign round. '
     + M('−3x > 9') + ' gives ' + M('x < −3') + '.'),
    ('The answer is a set, so say which ends belong to it',
     M('≤') + ' keeps the end point and is written with a square bracket; '
     + M('<') + ' loses it and is written with a round one. A mark is lost for '
     'the wrong bracket as surely as for the wrong number.'),
    ('&ldquo;The smallest integer such that…&rdquo;',
     'Solve first, then read the answer off the line. For ' + M('x > 3') + ' the '
     'smallest integer is ' + M('4') + '; for ' + M('x ≥ 3') + ' it is '
     + M('3') + '. The paper sets both in the same sitting.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Solve ' + M('2x − 6 > 0') + '.',
         opts=(M('x > 3'), M('x < 3'), M('x > −3'), M('x > 6')),
         key=0, a=M('x > 3'),
         check=('solveset', '2*x-6>0', 'Interval.open(3,oo)')),
    dict(kind='Y-1', mark='1,3',
         q='Solve ' + M('−3x > 9') + '.',
         opts=(M('x < −3'), M('x > −3'), M('x > 3'), M('x < 3')),
         key=0, a=M('x < −3'),
         check=('solveset', '-3*x>9', 'Interval.open(-oo,-3)')),
    dict(kind='Y-1', mark='2,2',
         q='Solve ' + M('5 − 2x ≤ 1') + '.',
         opts=(M('x ≥ 2'), M('x ≤ 2'), M('x ≥ −2'), M('x ≤ 3')),
         key=0, a=M('x ≥ 2'),
         check=('solveset', '5-2*x<=1', 'Interval(2,oo)')),
    dict(kind='Y-1', mark='2,2',
         q='What is the smallest integer ' + M('x') + ' for which '
           + M('3x + 1 > 10') + '?',
         opts=(M('3'), M('4'), M('5'), M('10')),
         key=1, a=M('4') + ', since the solution is ' + M('x > 3'),
         check=('solveset', '3*x+1>10', 'Interval.open(3,oo)')),
    dict(kind='Y-2', mark='2,2',
         q='Match each inequality with its solution.',
         left=(M('x + 2 > 5'), M('2x < 8'), M('−x ≥ 1'), F(M('x'), M('3'))
               + ' ≤ ' + M('2')),
         right=(M('x < 4'), M('x > 3'), M('x ≤ 6'), M('x ≤ −1')),
         a='1–B, 2–A, 3–D, 4–C',
         checks=[('solveset', 'x+2>5', 'Interval.open(3,oo)'),
                 ('solveset', '2*x<8', 'Interval.open(-oo,4)'),
                 ('solveset', '-x>=1', 'Interval(-oo,-1)'),
                 ('solveset', 'x/3<=2', 'Interval(-oo,6)')]),
    dict(kind='O', mark='3,2',
         q='Consider the inequality ' + M('4(x − 1) ≥ 2x + 6') + '.',
         parts=('Solve it.',
                'Write down the smallest integer that satisfies it.'),
         a='a) ' + M('x ≥ 5') + ' &nbsp; b) ' + M('5'),
         checks=[('solveset', '4*(x-1)>=2*x+6', 'Interval(5,oo)'),
                 ('simp', '5', '5')]),
])

MS['alg-22'] = dict(brief=[
    ('A system is an intersection: both must hold',
     M('x > 2') + ' and ' + M('x < 5') + ' together are ' + M('(2; 5)') + '. '
     'Draw the two sets on one line and read off the overlap; the picture is '
     'faster than the algebra and far harder to get wrong.'),
    ('Square bracket included, round bracket excluded',
     M('[−2; 5)') + ' holds ' + M('−2') + ' but not ' + M('5') + '. Infinity '
     'always takes a round bracket, because it is not a number you can reach.'),
    ('Counting integers in an interval',
     'In ' + M('−3 < x ≤ 2') + ' the integers are ' + M('−2, −1, 0, 1, 2')
     + ' — five of them. Count on the line rather than with a formula; the '
     'formula is where the off-by-one lives.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Write ' + M('−2 ≤ x < 5') + ' in interval notation.',
         opts=(M('[−2; 5)'), M('(−2; 5]'), M('[−2; 5]'), M('(−2; 5)')),
         key=0, a=M('[−2; 5)'),
         check=('solveset', 'x>=-2', 'Interval(-2,oo)')),
    dict(kind='Y-1', mark='1,3',
         q='Solve the system ' + M('x > 1') + ' and ' + M('x < 4') + '.',
         opts=(M('(1; 4)'), M('(−∞; 1) ∪ (4; +∞)'), M('[1; 4]'), 'no solution'),
         key=0, a=M('(1; 4)'),
         checks=[('solveset', 'x>1', 'Interval.open(1,oo)'),
                 ('solveset', 'x<4', 'Interval.open(-oo,4)')]),
    dict(kind='Y-1', mark='2,2',
         q='Solve the system ' + M('2x − 1 > 3') + ' and ' + M('x − 5 < 0') + '.',
         opts=(M('(2; 5)'), M('(2; +∞)'), M('(−∞; 5)'), M('[2; 5]')),
         key=0, a=M('(2; 5)'),
         checks=[('solveset', '2*x-1>3', 'Interval.open(2,oo)'),
                 ('solveset', 'x-5<0', 'Interval.open(-oo,5)')]),
    dict(kind='Y-1', mark='2,2',
         q='How many integers satisfy ' + M('−3 < x ≤ 2') + '?',
         opts=(M('4'), M('5'), M('6'), M('7')),
         key=1, a=M('5'),
         check=('simp', '2-(-2)+1', '5')),
    dict(kind='Y-2', mark='2,2',
         q='Match each inequality with its solution set.',
         left=(M('x > 2'), M('x ≤ 0'), M('x ≥ −1'), M('x < −4')),
         right=(M('(−∞; 0]'), M('(2; +∞)'), M('(−∞; −4)'), M('[−1; +∞)')),
         a='1–B, 2–A, 3–D, 4–C',
         checks=[('solveset', 'x>2', 'Interval.open(2,oo)'),
                 ('solveset', 'x<=0', 'Interval(-oo,0)'),
                 ('solveset', 'x>=-1', 'Interval(-1,oo)'),
                 ('solveset', 'x<-4', 'Interval.open(-oo,-4)')]),
    dict(kind='O', mark='3,2',
         q='Consider the system ' + M('3x − 2 ≥ 4') + ' and ' + M('2x < 14') + '.',
         parts=('Solve it, giving the answer as an interval.',
                'State how many integers satisfy it.'),
         a='a) ' + M('[2; 7)') + ' &nbsp; b) ' + M('5'),
         checks=[('solveset', '3*x-2>=4', 'Interval(2,oo)'),
                 ('solveset', '2*x<14', 'Interval.open(-oo,7)'),
                 ('simp', '6-2+1', '5')]),
])

MS['alg-23'] = dict(brief=[
    ('The modulus is a distance, so it is never negative',
     M('|x| = 5') + ' asks which numbers are five away from zero: '
     + M('5') + ' and ' + M('−5') + '. An equation ' + M('|x| = −2')
     + ' has no solution at all, and the paper sets one every few sittings.'),
    (M('|x − a|') + ' is the distance from ' + M('a'),
     'So ' + M('|x − 2| = 3') + ' means three away from ' + M('2') + ': '
     + M('5') + ' and ' + M('−1') + '. Reading it as a distance beats solving '
     'two separate equations.'),
    ('Less than gives one interval, greater than gives two',
     M('|x| < 4') + ' is ' + M('(−4; 4)') + '. ' + M('|x| > 4') + ' is '
     + M('(−∞; −4) ∪ (4; +∞)') + ' — two pieces, and both must be written.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Find ' + M('|−7| + |3|') + '.',
         opts=(M('10'), M('4'), M('−4'), M('−10')),
         key=0, a=M('10'),
         check=('simp', 'Abs(-7)+Abs(3)', '10')),
    dict(kind='Y-1', mark='1,3',
         q='Solve ' + M('|x| = 5') + '.',
         opts=(M('x = 5'), M('x = −5'), M('x = ±5'), 'no solution'),
         key=2, a=M('x = ±5'),
         check=('solveset', 'Eq(Abs(x),5)', 'FiniteSet(-5,5)')),
    dict(kind='Y-1', mark='2,2',
         q='Solve ' + M('|x − 2| = 3') + '.',
         opts=(M('x = 5') + ' or ' + M('x = −1'), M('x = 5') + ' only',
               M('x = ±3'), M('x = 1') + ' or ' + M('x = 5')),
         key=0, a=M('x = 5') + ' or ' + M('x = −1'),
         check=('solveset', 'Eq(Abs(x-2),3)', 'FiniteSet(-1,5)')),
    dict(kind='Y-1', mark='2,2',
         q='Solve ' + M('|x| < 4') + '.',
         opts=(M('(−4; 4)'), M('(−∞; −4) ∪ (4; +∞)'), M('(0; 4)'), M('[−4; 4]')),
         key=0, a=M('(−4; 4)'),
         check=('solveset', 'Abs(x)<4', 'Interval.open(-4,4)')),
    dict(kind='Y-2', mark='2,2',
         q='Match each expression with its value.',
         left=(M('|−3|'), M('|3 − 7|'), M('|−2| · |5|'), M('|−8| ÷ |4|')),
         right=(M('4'), M('3'), M('2'), M('10')),
         a='1–B, 2–A, 3–D, 4–C',
         checks=[('simp', 'Abs(-3)', '3'), ('simp', 'Abs(3-7)', '4'),
                 ('simp', 'Abs(-2)*Abs(5)', '10'),
                 ('simp', 'Abs(-8)/Abs(4)', '2')]),
    dict(kind='O', mark='3,2',
         q='Solve the following.',
         parts=(M('|2x − 6| = 8'), M('|x + 1| ≤ 2')),
         a='a) ' + M('x = 7') + ' or ' + M('x = −1') + ' &nbsp; b) ' + M('[−3; 1]'),
         checks=[('solveset', 'Eq(Abs(2*x-6),8)', 'FiniteSet(-1,7)'),
                 ('solveset', 'Abs(x+1)<=2', 'Interval(-3,1)')]),
])

MS['alg-24'] = dict(brief=[
    ('Absolute error is a difference; relative error is a fraction',
     'Absolute error is ' + M('|true − approximate|') + ', in the units of the '
     'measurement. Relative error is that divided by the true value, and is a '
     'percentage. The paper asks for one and offers the other.'),
    ('Rounding to the nearest unit means half a unit of error',
     'A length given as ' + M('50') + ' cm to the nearest centimetre is wrong by '
     'at most ' + M('0,5') + ' cm. That half is the whole of this topic.'),
    ('Round once, from the original number',
     M('2,449') + ' to one decimal place is ' + M('2,4') + ', not ' + M('2,5')
     + '. Rounding to ' + M('2,45') + ' first and then again is the mistake the '
     'distractors are built from.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Round ' + M('3,2648') + ' to two decimal places.',
         opts=(M('3,26'), M('3,27'), M('3,25'), M('3,3')),
         key=0, a=M('3,26'),
         check=('simp', 'floor(Rational(32648,10000)*100+Rational(1,2))/100',
                'Rational(326,100)')),
    dict(kind='Y-1', mark='1,3',
         q='A value of ' + M('5,2') + ' is approximated by ' + M('5')
           + '. What is the absolute error?',
         opts=(M('0,2'), M('0,02'), M('2'), M('0,96')),
         key=0, a=M('0,2'),
         check=('simp', 'Abs(Rational(52,10)-5)', 'Rational(2,10)')),
    dict(kind='Y-1', mark='2,2',
         q='A length is measured as ' + M('50') + ' cm, to the nearest '
           'centimetre. The absolute error is at most',
         opts=(M('0,5') + ' cm', M('1') + ' cm', M('0,05') + ' cm', M('5') + ' cm'),
         key=0, a=M('0,5') + ' cm',
         check=('simp', '1/2', 'Rational(5,10)')),
    dict(kind='Y-1', mark='2,2',
         q='A length of ' + M('20') + ' m is measured with an absolute error of '
           + M('0,5') + ' m. What is the relative error?',
         opts=(M('2,5 %'), M('0,25 %'), M('5 %'), M('25 %')),
         key=0, a=M('2,5 %'),
         check=('simp', 'Rational(5,10)/20', 'Rational(25,1000)')),
    dict(kind='Y-2', mark='2,2',
         q='Match each number with its value rounded to one decimal place.',
         left=(M('2,449'), M('2,45'), M('2,96'), M('2,04')),
         right=(M('3,0'), M('2,4'), M('2,0'), M('2,5')),
         a='1–B, 2–D, 3–A, 4–C',
         checks=[('simp', 'floor(Rational(2449,1000)*10+Rational(1,2))/10',
                  'Rational(24,10)'),
                 ('simp', 'floor(Rational(245,100)*10+Rational(1,2))/10',
                  'Rational(25,10)'),
                 ('simp', 'floor(Rational(296,100)*10+Rational(1,2))/10',
                  'Rational(30,10)'),
                 ('simp', 'floor(Rational(204,100)*10+Rational(1,2))/10',
                  'Rational(20,10)')]),
    dict(kind='O', mark='3,2',
         q='A rectangle measures ' + M('12') + ' cm by ' + M('8') + ' cm, each '
           'to the nearest centimetre.',
         parts=('Find the smallest possible area.',
                'Find the largest possible area.'),
         a='a) ' + M('86,25') + ' cm² &nbsp; b) ' + M('106,25') + ' cm²',
         checks=[('simp', 'Rational(115,10)*Rational(75,10)',
                  'Rational(8625,100)'),
                 ('simp', 'Rational(125,10)*Rational(85,10)',
                  'Rational(10625,100)')]),
])

MS['alg-25'] = dict(brief=[
    ('The bounds are half a unit of the last figure, either way',
     M('4,6') + ' to one decimal place lies in ' + M('[4,55; 4,65)') + '. '
     + M('70') + ' to the nearest ten lies in ' + M('[65; 75)') + '. Find the '
     'unit first, halve it, and go both ways.'),
    ('For a sum, add the like bounds; for a difference, cross them',
     'The largest ' + M('a − b') + ' comes from the largest ' + M('a') + ' and '
     'the <em>smallest</em> ' + M('b') + '. Half the marks on this topic turn '
     'on that crossing.'),
    ('For an area, multiply the like bounds',
     'Lower by lower, upper by upper — both measurements are positive, so no '
     'crossing is needed here.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='A value is ' + M('4,6') + ', correct to one decimal place. Its '
           'lower bound is',
         opts=(M('4,55'), M('4,5'), M('4,65'), M('4,59')),
         key=0, a=M('4,55'),
         check=('simp', 'Rational(46,10)-Rational(5,100)', 'Rational(455,100)')),
    dict(kind='Y-1', mark='1,3',
         q='A value is ' + M('4,6') + ', correct to one decimal place. Its '
           'upper bound is',
         opts=(M('4,65'), M('4,7'), M('4,64'), M('4,69')),
         key=0, a=M('4,65'),
         check=('simp', 'Rational(46,10)+Rational(5,100)', 'Rational(465,100)')),
    dict(kind='Y-1', mark='2,2',
         q='A mass is ' + M('8') + ' kg, to the nearest kilogram. The largest '
           'possible value is',
         opts=(M('8,5'), M('8,4'), M('9'), M('8,05')),
         key=0, a=M('8,5'),
         check=('simp', '8+Rational(1,2)', 'Rational(85,10)')),
    dict(kind='Y-1', mark='2,2',
         q='Two lengths are ' + M('5') + ' cm and ' + M('3') + ' cm, each to '
           'the nearest centimetre. The largest possible value of their '
           'difference is',
         opts=(M('3') + ' cm', M('2') + ' cm', M('2,5') + ' cm', M('1') + ' cm'),
         key=0, a=M('3') + ' cm',
         check=('simp', 'Rational(55,10)-Rational(25,10)', '3')),
    dict(kind='Y-2', mark='2,2',
         q='Match each measurement with its lower bound.',
         left=(M('7') + ', to the nearest unit',
               M('7,0') + ', to one decimal place',
               M('70') + ', to the nearest ten',
               M('0,7') + ', to one decimal place'),
         right=(M('6,95'), M('6,5'), M('0,65'), M('65')),
         a='1–B, 2–A, 3–D, 4–C',
         checks=[('simp', '7-Rational(1,2)', 'Rational(65,10)'),
                 ('simp', '7-Rational(5,100)', 'Rational(695,100)'),
                 ('simp', '70-5', '65'),
                 ('simp', 'Rational(7,10)-Rational(5,100)', 'Rational(65,100)')]),
    dict(kind='O', mark='3,2',
         q='A rectangle measures ' + M('9') + ' cm by ' + M('4') + ' cm, each '
           'to the nearest centimetre.',
         parts=('Find the lower bound of its perimeter.',
                'Find the upper bound of its perimeter.'),
         a='a) ' + M('24') + ' cm &nbsp; b) ' + M('28') + ' cm',
         checks=[('simp', '2*(Rational(85,10)+Rational(35,10))', '24'),
                 ('simp', '2*(Rational(95,10)+Rational(45,10))', '28')]),
])

MS['alg-26'] = dict(brief=[
    ('Three topics, one habit: find the set, then describe it',
     'Whether the item is a linear inequality, a modulus or a bound, the answer '
     'is a set of numbers. Get the set, then write it in the form the item asks '
     'for — interval, inequality, or a count of integers.'),
    ('A modulus inequality is two statements',
     M('|x − 1| > 2') + ' says ' + M('x − 1 > 2') + ' or ' + M('x − 1 < −2')
     + ', giving ' + M('(−∞; −1) ∪ (3; +∞)') + '. Writing only one of the two '
     'pieces is the most common way to lose these 2,2 ball.'),
    ('Keep the accuracy items in the units they came in',
     'A bound is a measurement, so it keeps its unit and its number of decimal '
     'places. An answer of ' + M('4,6499') + ' where ' + M('4,65') + ' was '
     'wanted is marked wrong.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Solve ' + M('3x + 2 < 11') + '.',
         opts=(M('x < 3'), M('x > 3'), M('x < 9'), M('x > −3')),
         key=0, a=M('x < 3'),
         check=('solveset', '3*x+2<11', 'Interval.open(-oo,3)')),
    dict(kind='Y-1', mark='1,3',
         q='Find ' + M('|−4| − |−1|') + '.',
         opts=(M('3'), M('−3'), M('5'), M('−5')),
         key=0, a=M('3'),
         check=('simp', 'Abs(-4)-Abs(-1)', '3')),
    dict(kind='Y-1', mark='2,2',
         q='Solve ' + M('|x − 1| > 2') + '.',
         opts=(M('(−∞; −1) ∪ (3; +∞)'), M('(−1; 3)'), M('(3; +∞)'),
               M('(−∞; −1)')),
         key=0, a=M('(−∞; −1) ∪ (3; +∞)'),
         check=('solveset', 'Abs(x-1)>2',
                'Union(Interval.open(-oo,-1), Interval.open(3,oo))')),
    dict(kind='Y-1', mark='2,2',
         q='A value is ' + M('4,7') + ', correct to one decimal place. Its '
           'lower bound is',
         opts=(M('4,65'), M('4,6'), M('4,75'), M('4,69')),
         key=0, a=M('4,65'),
         check=('simp', 'Rational(47,10)-Rational(5,100)', 'Rational(465,100)')),
    dict(kind='Y-2', mark='2,2',
         q='Match each inequality with its solution set.',
         left=(M('2x ≥ 6'), M('x + 4 < 2'), M('|x| ≤ 3'), M('−x > 5')),
         right=(M('(−∞; −2)'), M('[3; +∞)'), M('(−∞; −5)'), M('[−3; 3]')),
         a='1–B, 2–A, 3–D, 4–C',
         checks=[('solveset', '2*x>=6', 'Interval(3,oo)'),
                 ('solveset', 'x+4<2', 'Interval.open(-oo,-2)'),
                 ('solveset', 'Abs(x)<=3', 'Interval(-3,3)'),
                 ('solveset', '-x>5', 'Interval.open(-oo,-5)')]),
    dict(kind='O', mark='3,2',
         q='Solve the following.',
         parts=(M('5 − 3x ≥ −1'), M('|x + 2| < 3')),
         a='a) ' + M('x ≤ 2') + ' &nbsp; b) ' + M('(−5; 1)'),
         checks=[('solveset', '5-3*x>=-1', 'Interval(-oo,2)'),
                 ('solveset', 'Abs(x+2)<3', 'Interval.open(-5,1)')]),
])
