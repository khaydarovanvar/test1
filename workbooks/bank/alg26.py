# -*- coding: utf-8 -*-
"""Questions for topic 26 of Grade 8 algebra — revision for Control work 5."""

from .common import F, M, rt, sq

LT, GT = '&lt;', '&gt;'
S = M
R = lambda n, d=1: f'Rational({n},{d})'

Q_FOCUS = [
    dict(q='Solve ' + S(f'2x + 1 {GT} 9') + '.', a=S(f'x {GT} 4'),
         check=('solveset', '2*x + 1 > 9', 'Interval.open(4, oo)')),
    dict(q='Solve ' + S('−2x ≥ 6') + '.', a=S('x ≤ −3'),
         check=('solveset', '-2*x >= 6', 'Interval(-oo, -3)')),
    dict(q='Solve ' + S('|x| = 7') + '.', a=S('x = ±7'),
         check=('solveset', 'Eq(Abs(x), 7)', 'FiniteSet(-7, 7)')),
    dict(q='Solve ' + S(f'|x| {LT} 4') + '.', a=S(f'−4 {LT} x {LT} 4'),
         check=('solveset', 'Abs(x) < 4', 'Interval.open(-4, 4)')),
    dict(q='Round ' + S('6.48') + ' to 1 decimal place.', a=S('6.5'),
         check=('simp', 'Rational(65,10)', 'Rational(13,2)')),
    dict(q=S('x = 9') + ' to the nearest whole. Give the bounds.',
         a=S('8.5') + ' and ' + S('9.5'), check=('simp', 'Rational(17,2)+Rational(19,2)', '18')),
    dict(q='Write ' + S('[−1, 4)') + ' as an inequality.', a=S(f'−1 ≤ x {LT} 4'),
         check=('solveset', '(x >= -1) & (x < 4)', 'Interval.Ropen(-1, 4)')),
    dict(q='Solve ' + S(f'x {GT} 0') + ', ' + S('x ≤ 5') + '.', a=S(f'0 {LT} x ≤ 5'),
         check=('solveset', '(x > 0) & (x <= 5)', 'Interval.Lopen(0, 5)')),
    dict(q='Round ' + S('0.00356') + ' to 2 significant figures.', a=S('0.0036'),
         check=('simp', 'Rational(36,10000)', 'Rational(9,2500)')),
    dict(q='Find ' + S('|4 − 9|') + '.', a=S('5'), check=('simp', 'Abs(4-9)', '5')),
]

Q_PRACTICE = [
    dict(q='Solve ' + S(f'3(x − 1) ≤ x + 5') + '.', a=S('x ≤ 4'),
         check=('solveset', '3*(x-1) <= x + 5', 'Interval(-oo, 4)')),
    dict(q='Solve ' + S('|x − 2| = 6') + '.', a=S('x = 8') + ' or ' + S('x = −4'),
         check=('solveset', 'Eq(Abs(x-2), 6)', 'FiniteSet(-4, 8)')),
    dict(q='Solve ' + S(f'x + 1 {GT} 0') + ', ' + S(f'x − 4 {LT} 0') + '.',
         a=S(f'−1 {LT} x {LT} 4'),
         check=('solveset', '(x + 1 > 0) & (x - 4 < 0)', 'Interval.open(-1, 4)')),
    dict(q=S('a = 12') + ' and ' + S('b = 5') + ', both to the nearest whole. '
           'Find the bounds of ' + S('a + b') + '.', a=S('16') + ' to ' + S('18'),
         check=('bound', 'a+b', {'a': (R(23, 2), R(25, 2)), 'b': (R(9, 2), R(11, 2))},
                '16', '18')),
    dict(q='Solve ' + S('|2x| ≤ 10') + '.', a=S('−5 ≤ x ≤ 5'),
         check=('solveset', 'Abs(2*x) <= 10', 'Interval(-5, 5)')),
    dict(q='Find the absolute error when ' + S('3.14') + ' is used for ' + S('3.1416')
           + '.', a=S('0.0016'),
         check=('simp', 'Abs(Rational(314,100)-Rational(31416,10000))',
                'Rational(16,10000)')),
    dict(q='Solve ' + S('−6 ≤ 3x ≤ 12') + '.', a=S('−2 ≤ x ≤ 4'),
         check=('solveset', '(3*x >= -6) & (3*x <= 12)', 'Interval(-2, 4)')),
    dict(q='Solve ' + S(f'{sq("x")} {GT} 9') + '.',
         a=S(f'x {LT} −3') + ' or ' + S(f'x {GT} 3'),
         check=('solveset', 'x**2 > 9',
                'Union(Interval.open(-oo,-3), Interval.open(3,oo))')),
    dict(q='A length is ' + S('7.4') + ' cm to 1 d.p. Find the greatest possible '
           'perimeter of a square with that side.', a=S('29.8') + ' cm',
         check=('bound', '4*a', {'a': (R(735, 100), R(745, 100))},
                f'4*{R(735,100)}', f'4*{R(745,100)}')),
    dict(q='Solve ' + S(f'|x + 3| {GT} 2') + '.',
         a=S(f'x {LT} −5') + ' or ' + S(f'x {GT} −1'),
         check=('solveset', 'Abs(x+3) > 2',
                'Union(Interval.open(-oo,-5), Interval.open(-1,oo))')),
]

Q_CHALLENGE = [
    dict(q='Solve ' + S(F('x − 2', 3) + ' − ' + F('x + 1', 2) + ' ≥ 0') + '.',
         a=S('x ≤ −7'),
         check=('solveset', '(x-2)/3 - (x+1)/2 >= 0', 'Interval(-oo, -7)')),
    dict(q='Solve ' + S('|3x − 2| ≤ 4') + '.', a=S('−' + F(2, 3) + ' ≤ x ≤ 2'),
         check=('solveset', 'Abs(3*x-2) <= 4', 'Interval(Rational(-2,3), 2)')),
    dict(q='Solve ' + S(f'(x + 1)(x − 4) ≤ 0') + '.', a=S('−1 ≤ x ≤ 4'),
         check=('solveset', '(x+1)*(x-4) <= 0', 'Interval(-1, 4)')),
    dict(q=S('a = 20') + ' and ' + S('b = 4') + ', both to the nearest whole. '
           'Find the bounds of ' + S(F('a', 'b')) + '.',
         a=S(F(39, 9)) + ' to ' + S(F(41, 7)),
         check=('bound', 'a/b', {'a': (R(39, 2), R(41, 2)), 'b': (R(7, 2), R(9, 2))},
                f'{R(39,2)}/{R(9,2)}', f'{R(41,2)}/{R(7,2)}')),
    dict(q='How many integers satisfy ' + S(f'|x − 4| {LT} 3') + '?', a=S('5'),
         check=('custom', 'count_integers_mod_four')),
    dict(q='Solve ' + S(f'{sq("x")} − x − 6 {LT} 0') + '.', a=S(f'−2 {LT} x {LT} 3'),
         check=('solveset', 'x**2 - x - 6 < 0', 'Interval.open(-2, 3)')),
    dict(q='Solve ' + S(f'2x − 1 {GT} 5') + ', ' + S(f'3 − x {GT} −4') + '.',
         a=S(f'3 {LT} x {LT} 7'),
         check=('solveset', '(2*x - 1 > 5) & (3 - x > -4)', 'Interval.open(3, 7)')),
    dict(q='A rectangle is ' + S('9') + ' by ' + S('4') + ', both to the nearest whole. '
           'Find the bounds of its area.', a=S('29.75') + ' to ' + S('42.75'),
         check=('bound', 'a*b', {'a': (R(17, 2), R(19, 2)), 'b': (R(7, 2), R(9, 2))},
                f'{R(17,2)}*{R(7,2)}', f'{R(19,2)}*{R(9,2)}')),
    dict(q='Solve ' + S(F(1, 'x') + f' {GT} 3') + '.', a=S(f'0 {LT} x {LT} ' + F(1, 3)),
         check=('solveset', '1/x > 3', 'Interval.open(0, Rational(1,3))')),
    dict(q='Solve ' + S('|x| ≥ 2x') + '.', a=S('x ≤ 0') + ' — and every ' + S('x ≤ 0'),
         check=('solveset', 'Abs(x) >= 2*x', 'Interval(-oo, 0)')),
]

Q_BEYOND = [
    dict(q='A pupil solved ' + S(f'−2x {GT} 6') + ' and wrote ' + S(f'x {GT} −3')
           + '. Correct it.', a=S(f'x {LT} −3'),
         check=('solveset', '-2*x > 6', 'Interval.open(-oo, -3)'),
         sol='Dividing by −2 reverses the sign. Test x = 0: −0 > 6 is false, so 0 must '
             "not be in the answer — and in the pupil's version it is."),
    dict(q='A pupil solved ' + S(f'|x| {GT} 3') + ' and wrote ' + S(f'−3 {LT} x {LT} 3')
           + '. Correct it.', a=S(f'x {LT} −3') + ' or ' + S(f'x {GT} 3'),
         check=('solveset', 'Abs(x) > 3',
                'Union(Interval.open(-oo,-3), Interval.open(3,oo))'),
         sol='A modulus <b>less</b> than a number gives one interval; <b>greater</b> '
             'gives two. The pupil wrote the answer to |x| < 3.'),
    dict(q='A pupil found the bounds of ' + S('a − b') + ' with ' + S('a = 10')
           + ', ' + S('b = 6') + ' (both to the nearest whole) as ' + S('3.5 to 4.5')
           + '. Correct it.', a=S('3') + ' to ' + S('5'),
         check=('bound', 'a-b', {'a': (R(19, 2), R(21, 2)), 'b': (R(11, 2), R(13, 2))},
                '3', '5'),
         sol='For the lower bound use the lower a with the <b>upper</b> b: 9.5 − 6.5 = 3. '
             'The pupil paired lower with lower, which cannot give an extreme.'),
    dict(q='A pupil rounded ' + S('2.4499') + ' to 2 d.p., got ' + S('2.45') + ', then '
           'to 1 d.p. and got ' + S('2.5') + '. What is the correct answer to 1 d.p.?',
         a=S('2.4'), check=('custom', 'double_rounding'),
         sol='Round once, from the original: 2.4499 is below 2.45, so to 1 d.p. it is '
             '2.4. Rounding twice can lift a number over the halfway line.'),
    dict(q='Solve ' + S('|x − 1| + |x − 4| = 3') + '.', a=S('1 ≤ x ≤ 4'),
         check=('solveset', 'Eq(Abs(x-1)+Abs(x-4), 3)', 'Interval(1, 4)'),
         sol='The sum of the distances to 1 and 4 equals the gap between them exactly on '
             'the segment joining them, and exceeds it outside.'),
    dict(q='For which ' + S('a') + ' has ' + S(f'|x − 3| {LT} a') + ' no solution?',
         a=S('a ≤ 0'), check=('custom', 'modulus_no_solution'),
         sol='A modulus is never negative, so for a ≤ 0 nothing qualifies. '
             'For a > 0 the solutions fill the interval (3−a, 3+a).'),
    dict(q='Solve ' + S(f'{sq("x")} − 4 {GT} 0') + ' and ' + S(f'x {LT} 3')
           + ' together.',
         a=S(f'x {LT} −2') + ' or ' + S(f'2 {LT} x {LT} 3'),
         check=('solveset', '(x**2 - 4 > 0) & (x < 3)',
                'Union(Interval.open(-oo,-2), Interval.open(2,3))'),
         sol='The first gives two rays, and the second trims the right-hand one. '
             'Drawing both on one line is quicker than algebra here.'),
    dict(q='A square has area ' + S('100') + ' cm² to the nearest ' + S('10') + ' cm². '
           'Find the bounds of its perimeter.',
         a=S('4' + rt('95')) + ' to ' + S('4' + rt('105')) + ' cm',
         check=('bound', '4*sqrt(a)', {'a': ('95', '105')},
                '4*sqrt(95)', '4*sqrt(105)'),
         sol='Side = √area, perimeter = 4 × side. Both steps are increasing, so the '
             'bounds carry straight through: about 38.99 cm to 40.99 cm.'),
    dict(q='Solve ' + S(f'|2x − 6| {LT} |x|') + '.',
         a=S(f'2 {LT} x {LT} 6'),
         check=('solveset', 'Abs(2*x-6) < Abs(x)', 'Interval.open(2, 6)'),
         sol='Both sides non-negative, so square: 4x² − 24x + 36 < x², that is '
             '3x² − 24x + 36 < 0 and x² − 8x + 12 < 0, giving (x−2)(x−6) < 0.'),
    dict(q='Two masses are ' + S('1.0') + ' kg each to 1 d.p. Find the bounds of their '
           'difference and say what this shows.',
         a=S('−0.1') + ' to ' + S('0.1') + ' kg',
         check=('bound', 'a-b', {'a': (R(95, 100), R(105, 100)),
                                 'b': (R(95, 100), R(105, 100))},
                f'{R(-1,10)}', f'{R(1,10)}'),
         sol='The true difference might be zero, but the interval is a tenth of a '
             'kilogram wide — as wide as the whole uncertainty of each mass. '
             'Subtracting near-equal measurements destroys precision.'),
    dict(q='Find all integers ' + S('x') + ' with ' + S(f'3 {LT} |x| ≤ 6') + '.',
         a=S('±4, ±5, ±6') + ' — six values', check=('custom', 'integers_band_modulus'),
         sol='The condition is 3 < |x| ≤ 6, so |x| ∈ {4, 5, 6} and each gives two '
             'integers.'),
    dict(q='Solve ' + S(F('x − 1', 'x + 2') + ' ≥ 0') + '.',
         a=S(f'x {LT} −2') + ' or ' + S('x ≥ 1'),
         check=('solveset', '(x-1)/(x+2) >= 0',
                'Union(Interval.open(-oo,-2), Interval(1,oo))'),
         sol='Top and bottom must share a sign. x = 1 is allowed (the fraction is 0) but '
             'x = −2 is not (undefined) — note the different bracket at each end.'),
    dict(q='The side of a square is ' + S('s = 5') + ' cm to the nearest cm. '
           'Which has the wider relative interval, the perimeter or the area?',
         a='The area.', check=('custom', 'area_vs_perimeter_spread'),
         sol='The perimeter 4s scales the relative error by 1; the area s² doubles it. '
             'Perimeter runs 18–22 (±10%), area 20.25–30.25 (about ±20%).'),
    dict(q='Solve ' + S('|x| + |x − 2| ≥ 2') + '.', a='Every real ' + S('x'),
         check=('solveset', 'Abs(x)+Abs(x-2) >= 2', 'S.Reals'),
         sol='The total distance to 0 and to 2 is at least the distance between them, '
             'which is 2 — and that minimum is reached on the whole segment [0, 2].'),
    dict(q='Explain why ' + S(f'{sq("x")} {LT} 4') + ' and ' + S(f'x {LT} 2')
           + ' are not the same condition.', a=S('x = −3') + ' satisfies one, not the other',
         check=('bool', '(Integer(-3) < 2) & (Integer(-3)**2 > 4)'),
         sol='x² < 4 means −2 < x < 2. Taking a square root of both sides without the '
             'modulus loses the left-hand bound: x = −3 passes x < 2 but fails x² < 4.'),
]

TOPIC = dict(
    key='alg-26', number=26,
    unit='Unit 4 · Inequalities, modulus and accuracy',
    lessons='60–61',
    title='Revision · Control work 5 — inequalities, modulus and accuracy',
    subtitle='Chapter II mixed together, with the four errors that cost the most marks '
             'set as questions of their own.',
    uz='Algebra 8, revision of §§15–19', cam='Cambridge Stage 9 · 3.4, 4.3',
    keywords=['control work', 'work on mistakes', 'solution set', 'interval', 'modulus',
              'bound', 'error', 'counter-example'],
    remember=[
        'Multiplying or dividing an inequality by a negative <b>reverses</b> it.',
        '<span class="m">|x| &lt; a</span> is one interval; '
        '<span class="m">|x| &gt; a</span> is two.',
        'For the lower bound of a difference, take the lower bound of the first and the '
        '<b>upper</b> of the second.',
        'Round once, from the original value.',
        'Check one value from your answer in the original question — it catches a '
        'reversed sign immediately.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
