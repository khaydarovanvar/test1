# -*- coding: utf-8 -*-
"""Questions for topic 25 of Grade 8 algebra — upper and lower bounds."""

from .common import F, M, rt, sq

LT = '&lt;'
S = M
R = lambda n, d=1: f'Rational({n},{d})'


def rng(lo, hi):
    return {'a': (lo, hi)}


Q_FOCUS = [
    dict(q=S('x = 8') + ' to the nearest whole. Give the lower bound.', a=S('7.5'),
         check=('simp', 'Rational(15,2)', 'Rational(15,2)')),
    dict(q=S('x = 8') + ' to the nearest whole. Give the upper bound.', a=S('8.5'),
         check=('simp', 'Rational(17,2)', 'Rational(17,2)')),
    dict(q=S('m = 3.4') + ' to 1 d.p. Give the bounds.', a=S('3.35') + ' and ' + S('3.45'),
         check=('simp', 'Rational(335,100)+Rational(345,100)', 'Rational(68,10)')),
    dict(q=S('n = 250') + ' to the nearest ten. Give the bounds.',
         a=S('245') + ' and ' + S('255'), check=('simp', '245+255', '500')),
    dict(q=S('t = 12') + ' to the nearest 2 units. Give the bounds.',
         a=S('11') + ' and ' + S('13'), check=('simp', '11+13', '24')),
    dict(q='A length is ' + S('5.0') + ' cm to 1 d.p. What is the greatest it could be?',
         a=S('5.05') + ' cm', check=('simp', 'Rational(505,100)', 'Rational(101,20)')),
    dict(q=S('p = 1.75') + ' to 2 d.p. Give the lower bound.', a=S('1.745'),
         check=('simp', 'Rational(1745,1000)', 'Rational(349,200)')),
    dict(q='A crowd is ' + S('4000') + ' to the nearest hundred. Give the bounds.',
         a=S('3950') + ' and ' + S('4050'), check=('simp', '3950+4050', '8000')),
    dict(q='If ' + S('2.5 ≤ x ' + LT + ' 3.5') + ', to what was ' + S('x') + ' rounded?',
         a=S('3') + ', to the nearest whole', check=('simp', 'Rational(5,2)+Rational(7,2)', '6')),
    dict(q='A mass is ' + S('6.2') + ' kg to 1 d.p. Give the least it could be.',
         a=S('6.15') + ' kg', check=('simp', 'Rational(615,100)', 'Rational(123,20)')),
]

Q_PRACTICE = [
    dict(q=S('a = 7') + ' and ' + S('b = 4') + ', both to the nearest whole. '
           'Find the bounds of ' + S('a + b') + '.', a=S('10') + ' to ' + S('12'),
         check=('bound', 'a+b', {'a': (R(13, 2), R(15, 2)), 'b': (R(7, 2), R(9, 2))},
                '10', '12')),
    dict(q='For the same ' + S('a') + ' and ' + S('b') + ', find the bounds of '
           + S('a − b') + '.', a=S('2') + ' to ' + S('4'),
         check=('bound', 'a-b', {'a': (R(13, 2), R(15, 2)), 'b': (R(7, 2), R(9, 2))},
                '2', '4')),
    dict(q='For the same ' + S('a') + ' and ' + S('b') + ', find the bounds of '
           + S('ab') + '.', a=S('22.75') + ' to ' + S('33.75'),
         check=('bound', 'a*b', {'a': (R(13, 2), R(15, 2)), 'b': (R(7, 2), R(9, 2))},
                f'{R(13,2)}*{R(7,2)}', f'{R(15,2)}*{R(9,2)}')),
    dict(q='For the same ' + S('a') + ' and ' + S('b') + ', find the bounds of '
           + S(F('a', 'b')) + '.', a=S(F(13, 9)) + ' to ' + S(F(15, 7)),
         check=('bound', 'a/b', {'a': (R(13, 2), R(15, 2)), 'b': (R(7, 2), R(9, 2))},
                f'{R(13,2)}/{R(9,2)}', f'{R(15,2)}/{R(7,2)}')),
    dict(q=S('L = 12.0') + ' cm to 1 d.p. Find the bounds of the perimeter of a square '
           'of side ' + S('L') + '.', a=S('47.8') + ' to ' + S('48.2') + ' cm',
         check=('bound', '4*a', {'a': (R(1195, 100), R(1205, 100))},
                f'4*{R(1195,100)}', f'4*{R(1205,100)}')),
    dict(q='A rectangle is ' + S('6') + ' by ' + S('3') + ', both to the nearest whole. '
           'Find the bounds of its area.', a=S('13.75') + ' to ' + S('24.75'),
         check=('bound', 'a*b', {'a': (R(11, 2), R(13, 2)), 'b': (R(5, 2), R(7, 2))},
                f'{R(11,2)}*{R(5,2)}', f'{R(13,2)}*{R(7,2)}')),
    dict(q=S('v = 20') + ' m/s to the nearest whole and ' + S('t = 5') + ' s to the '
           'nearest whole. Find the bounds of ' + S('vt') + '.',
         a=S('87.75') + ' to ' + S('112.75') + ' m',
         check=('bound', 'a*b', {'a': (R(39, 2), R(41, 2)), 'b': (R(9, 2), R(11, 2))},
                f'{R(39,2)}*{R(9,2)}', f'{R(41,2)}*{R(11,2)}')),
    dict(q='To get the <b>largest</b> value of ' + S(F('a', 'b')) + ', which bounds do '
           'you use?', a='Upper for ' + S('a') + ', lower for ' + S('b'), check=None),
    dict(q='To get the <b>smallest</b> value of ' + S('a − b') + ', which bounds do you '
           'use?', a='Lower for ' + S('a') + ', upper for ' + S('b'), check=None),
    dict(q=S('x = 4.50') + ' to 2 d.p. Find the bounds of ' + S('10x') + '.',
         a=S('44.95') + ' to ' + S('45.05'),
         check=('bound', '10*a', {'a': (R(4495, 1000), R(4505, 1000))},
                f'10*{R(4495,1000)}', f'10*{R(4505,1000)}')),
]

Q_CHALLENGE = [
    dict(q=S('a = 10') + ' and ' + S('b = 2') + ', both to the nearest whole. '
           'Find the bounds of ' + S(F('a', 'b')) + '.',
         a=S(F(19, 5)) + ' to ' + S(7),
         check=('bound', 'a/b', {'a': (R(19, 2), R(21, 2)), 'b': (R(3, 2), R(5, 2))},
                f'{R(19,2)}/{R(5,2)}', f'{R(21,2)}/{R(3,2)}')),
    dict(q='A square has area ' + S('36') + ' cm² to the nearest cm². Find the bounds of '
           'its side.', a=S(rt('35.5')) + ' to ' + S(rt('36.5')) + ' cm',
         check=('bound', 'sqrt(a)', {'a': (R(71, 2), R(73, 2))},
                f'sqrt({R(71,2)})', f'sqrt({R(73,2)})')),
    dict(q=S('x = 5') + ' to the nearest whole. Find the bounds of ' + S(sq('x')) + '.',
         a=S('20.25') + ' to ' + S('30.25'),
         check=('bound', 'a**2', {'a': (R(9, 2), R(11, 2))},
                f'{R(9,2)}**2', f'{R(11,2)}**2')),
    dict(q=S('x = 5') + ' to the nearest whole. Find the bounds of ' + S(F(1, 'x')) + '.',
         a=S(F(2, 11)) + ' to ' + S(F(2, 9)),
         check=('bound', '1/a', {'a': (R(9, 2), R(11, 2))},
                f'1/{R(11,2)}', f'1/{R(9,2)}')),
    dict(q='A field is ' + S('100') + ' m by ' + S('60') + ' m, both to the nearest '
           'metre. Find the bounds of the perimeter.',
         a=S('318') + ' to ' + S('322') + ' m',
         check=('bound', '2*(a+b)', {'a': (R(199, 2), R(201, 2)),
                                     'b': (R(119, 2), R(121, 2))}, '318', '322')),
    dict(q='Density is ' + S(F('m', 'V')) + '. With ' + S('m = 500') + ' g to the '
           'nearest ' + S('10') + ' g and ' + S('V = 200') + ' cm³ to the nearest '
           + S('10') + ' cm³, find the greatest possible density.',
         a=S(F('505', '195')) + ' ≈ ' + S('2.59') + ' g/cm³',
         check=('bound', 'a/b', {'a': ('495', '505'), 'b': ('195', '205')},
                '495/205', '505/195')),
    dict(q='Two masses are ' + S('2.5') + ' kg and ' + S('1.5') + ' kg, each to 1 d.p. '
           'Find the bounds of their difference.',
         a=S('0.9') + ' to ' + S('1.1') + ' kg',
         check=('bound', 'a-b', {'a': (R(245, 100), R(255, 100)),
                                 'b': (R(145, 100), R(155, 100))},
                f'{R(9,10)}', f'{R(11,10)}')),
    dict(q='Why is the lower bound of ' + S('a − b') + ' found from the lower bound of '
           + S('a') + ' and the <b>upper</b> bound of ' + S('b') + '?',
         a='Subtracting more leaves less.', check=None),
    dict(q=S('n = 1000') + ' to 2 significant figures. Give the bounds.',
         a=S('950') + ' to ' + S('1050'), check=('simp', '950+1050', '2000')),
    dict(q='A speed is ' + S('30') + ' km/h to the nearest ' + S('5') + ' km/h. '
           'Find the bounds.', a=S('27.5') + ' to ' + S('32.5') + ' km/h',
         check=('simp', 'Rational(275,10)+Rational(325,10)', '60')),
]

Q_BEYOND = [
    dict(q='A rectangle measures ' + S('x = 8.0') + ' cm by ' + S('y = 5.0') + ' cm, '
           'both to 1 d.p. Find the bounds of its area and say how wide the interval is.',
         a=S('39.4025') + ' to ' + S('40.6025') + ' cm², a spread of ' + S('1.2'),
         check=('bound', 'a*b', {'a': (R(795, 100), R(805, 100)),
                                 'b': (R(495, 100), R(505, 100))},
                f'{R(795,100)}*{R(495,100)}', f'{R(805,100)}*{R(505,100)}'),
         sol='A tenth of a centimetre on each side becomes more than a square '
             'centimetre of area: the relative errors add, so about 0.6% + 1% ≈ 1.6%, '
             'and 1.6% of 40 is about 0.6 each way.'),
    dict(q='Show that for positive quantities the relative error of ' + S('ab') + ' is '
           'about the sum of the relative errors of ' + S('a') + ' and ' + S('b') + '.',
         a=S('(1+e₁)(1+e₂) ≈ 1 + e₁ + e₂'), check=('custom', 'relative_error_product'),
         sol='The cross term e₁e₂ is a product of two small numbers and can be ignored. '
             'This is why bounds spread faster for products than for sums.'),
    dict(q='A cube has edge ' + S('4') + ' cm to the nearest cm. Find the bounds of its '
           'volume.', a=S('42.875') + ' to ' + S('91.125') + ' cm³',
         check=('bound', 'a**3', {'a': (R(7, 2), R(9, 2))},
                f'{R(7,2)}**3', f'{R(9,2)}**3'),
         sol='3.5³ = 42.875 and 4.5³ = 91.125. Cubing triples the relative error, so the '
             'upper bound is more than twice the lower.'),
    dict(q='A time is ' + S('9.58') + ' s to 2 d.p. over a distance of ' + S('100')
           + ' m measured exactly. Find the bounds of the average speed.',
         a=S(F('100', '9.585')) + ' to ' + S(F('100', '9.575')) + ' m/s',
         check=('bound', '100/a', {'a': (R(9575, 1000), R(9585, 1000))},
                f'100/{R(9585,1000)}', f'100/{R(9575,1000)}'),
         sol='Dividing by the larger time gives the smaller speed. The bounds differ by '
             'about 0.01 m/s — which is why sprint records are timed to hundredths.'),
    dict(q='If ' + S('x') + ' is positive and known to within ' + S('1%') + ', within '
           'what percentage is ' + S(sq('x')) + ' known?', a='About ' + S('2%'),
         check=('custom', 'square_relative'),
         sol='1.01² = 1.0201 and 0.99² = 0.9801, so the spread is about ±2%. '
             'A power multiplies the relative error by its index.'),
    dict(q='Two resistors are ' + S('100') + ' Ω and ' + S('200') + ' Ω, each to the '
           'nearest ' + S('10') + ' Ω. Find the bounds of the total in series.',
         a=S('290') + ' to ' + S('310') + ' Ω',
         check=('bound', 'a+b', {'a': ('95', '105'), 'b': ('195', '205')},
                '290', '310'),
         sol='In series the resistances add, so the bounds add: 95 + 195 = 290 up to '
             '105 + 205 = 310 Ω. Each measurement contributes 5 Ω either way, so the '
             'total spans 20 Ω.'),
    dict(q='A number ' + S('n') + ' satisfies ' + S('4.5 ≤ n ' + LT + ' 5.5') + '. '
           'What is ' + S('n') + ' to the nearest whole, and what to 1 d.p.?',
         a=S('5') + '; to 1 d.p. it cannot be decided', check=None,
         sol='The interval is exactly the rounding interval for 5 to the nearest whole. '
             'It spans many different values to 1 d.p., from 4.5 to 5.4, so that '
             'question has no single answer.'),
    dict(q='Find the bounds of ' + S(F('a + b', 'c')) + ' when ' + S('a = 10')
           + ', ' + S('b = 6') + ' and ' + S('c = 4') + ', each to the nearest whole.',
         a=S(F('15', '4.5')) + ' to ' + S(F('17', '3.5')),
         check=('bound', '(a+b)/c', {'a': (R(19, 2), R(21, 2)), 'b': (R(11, 2), R(13, 2)),
                                     'c': (R(7, 2), R(9, 2))},
                f'({R(19,2)}+{R(11,2)})/{R(9,2)}', f'({R(21,2)}+{R(13,2)})/{R(7,2)}'),
         sol='Largest numerator over smallest denominator, and the reverse. '
             'Three quantities, so eight corners — but only two of them matter.'),
    dict(q='A square field has perimeter ' + S('200') + ' m to the nearest ' + S('10')
           + ' m. Find the bounds of its area.',
         a=S('2376.5625') + ' to ' + S('2626.5625') + ' m²',
         check=('bound', '(a/4)**2', {'a': ('195', '205')},
                '(Rational(195,4))**2', '(Rational(205,4))**2'),
         sol='The side is between 195/4 and 205/4, so the area is between their squares. '
             'A 5% range in the perimeter becomes about 10% in the area.'),
    dict(q='Explain why bounds should be kept unrounded until the very last step.',
         a='Rounding the bounds throws away the accuracy they measure.', check=None,
         sol='Each rounding adds error of its own. If a bound is rounded first and then '
             'used in a calculation, the final interval can both shift and shrink, so it '
             'no longer honestly contains the true value.'),
    dict(q='A triangle has base ' + S('10') + ' cm and height ' + S('6') + ' cm, both to '
           'the nearest cm. Find the bounds of its area.',
         a=S('26.125') + ' to ' + S('34.125') + ' cm²',
         check=('bound', 'a*b/2', {'a': (R(19, 2), R(21, 2)), 'b': (R(11, 2), R(13, 2))},
                f'{R(19,2)}*{R(11,2)}/2', f'{R(21,2)}*{R(13,2)}/2'),
         sol='½ · 9.5 · 5.5 = 26.125 and ½ · 10.5 · 6.5 = 34.125. The constant ½ scales '
             'both bounds and changes nothing about which corner to use.'),
    dict(q='Two measurements are ' + S('a = 50 ± 1') + ' and ' + S('b = 50 ± 1') + '. '
           'Find the bounds of ' + S('a − b') + ', and comment.',
         a=S('−2') + ' to ' + S('2'),
         check=('bound', 'a-b', {'a': ('49', '51'), 'b': ('49', '51')}, '-2', '2'),
         sol='The difference of two nearly equal measurements is swamped by the error: '
             'a true value of 0 sits in an interval four units wide. Subtracting close '
             'numbers destroys accuracy, which is why formulae are rearranged to avoid it.'),
    dict(q='A rectangle has area ' + S('24') + ' cm² to the nearest cm² and one side '
           + S('6') + ' cm to the nearest cm. Find the bounds of the other side.',
         a=S(F('23.5', '6.5')) + ' to ' + S(F('24.5', '5.5')) + ' cm',
         check=('bound', 'a/b', {'a': (R(47, 2), R(49, 2)), 'b': (R(11, 2), R(13, 2))},
                f'{R(47,2)}/{R(13,2)}', f'{R(49,2)}/{R(11,2)}'),
         sol='Largest area over smallest side gives the largest possible other side. '
             'The interval, about 3.6 to 4.5, is far wider than "4 to the nearest cm" '
             'would suggest.'),
    dict(q='Show that if ' + S('a') + ' and ' + S('b') + ' are each given to the nearest '
           'unit, the bounds of ' + S('a + b') + ' span exactly ' + S('2') + ' units.',
         a='Half a unit each way, twice.', check=('custom', 'sum_span_two'),
         sol='The lower bound is (a−½)+(b−½) = a+b−1 and the upper is a+b+1, '
             'so the span is 2 — regardless of how big a and b are.'),
    dict(q='A journey of ' + S('150') + ' km to the nearest km takes ' + S('2')
           + ' hours to the nearest ' + S('0.1') + ' h. Find the greatest possible '
           'average speed.', a=S(F('150.5', '1.95')) + ' ≈ ' + S('77.2') + ' km/h',
         check=('bound', 'a/b', {'a': (R(2999, 20), R(3001, 20)),
                                 'b': (R(195, 100), R(205, 100))},
                f'{R(2999,20)}/{R(205,100)}', f'{R(3001,20)}/{R(195,100)}'),
         sol='Greatest distance over least time. Note how a tenth of an hour on a '
             'two-hour journey matters far more than half a kilometre on 150.'),
]

TOPIC = dict(
    key='alg-25', number=25,
    unit='Unit 4 · Inequalities, modulus and accuracy',
    lessons='58–59',
    title='Upper and lower bounds',
    subtitle='A rounded measurement is an interval, not a number — and the interval '
             'spreads as soon as you calculate with it.',
    uz='Algebra 8, Chapter II revision, pp. 118–121',
    cam='Cambridge Stage 9 · 3.4',
    keywords=['upper bound', 'lower bound', 'rounded to', 'nearest', 'half a unit',
              'sum', 'difference', 'product', 'quotient'],
    remember=[
        'Rounded to the nearest unit means half a unit either way: '
        '<span class="m">a − ½ ≤ x &lt; a + ½</span>.',
        'Sum: add the lower bounds for the lower, the upper for the upper.',
        'Difference: <b>lower minus upper</b> gives the lower bound, and the reverse.',
        'Quotient: largest over smallest for the upper bound, smallest over largest for '
        'the lower.',
        'Keep bounds unrounded until the final answer — rounding them throws away the '
        'accuracy they exist to record.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
