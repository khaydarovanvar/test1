# -*- coding: utf-8 -*-
"""Questions for topic 22 of Grade 8 algebra — systems of inequalities, intervals."""

from .common import F, M, sq

LT, GT = '&lt;', '&gt;'
S = M

Q_FOCUS = [
    dict(q='Solve the system ' + S(f'x {GT} 2') + ', ' + S(f'x {LT} 5') + '.',
         a=S(f'2 {LT} x {LT} 5'),
         check=('solveset', '(x > 2) & (x < 5)', 'Interval.open(2, 5)')),
    dict(q='Solve ' + S('x ≥ 0') + ', ' + S('x ≤ 3') + '.', a=S('0 ≤ x ≤ 3'),
         check=('solveset', '(x >= 0) & (x <= 3)', 'Interval(0, 3)')),
    dict(q='Solve ' + S(f'x {GT} 1') + ', ' + S(f'x {GT} 4') + '.', a=S(f'x {GT} 4'),
         check=('solveset', '(x > 1) & (x > 4)', 'Interval.open(4, oo)')),
    dict(q='Solve ' + S(f'x {LT} 0') + ', ' + S(f'x {LT} −2') + '.', a=S(f'x {LT} −2'),
         check=('solveset', '(x < 0) & (x < -2)', 'Interval.open(-oo, -2)')),
    dict(q='Solve ' + S(f'x {GT} 3') + ', ' + S(f'x {LT} 1') + '.', a='No solutions.',
         check=('solveset', '(x > 3) & (x < 1)', 'S.EmptySet')),
    dict(q='Write ' + S('[2, 7]') + ' as an inequality.', a=S('2 ≤ x ≤ 7'),
         check=('solveset', '(x >= 2) & (x <= 7)', 'Interval(2, 7)')),
    dict(q='Write ' + S('(−∞, 5)') + ' as an inequality.', a=S(f'x {LT} 5'),
         check=('solveset', 'x < 5', 'Interval.open(-oo, 5)')),
    dict(q='Write ' + S('(1, 4]') + ' as an inequality.', a=S(f'1 {LT} x ≤ 4'),
         check=('solveset', '(x > 1) & (x <= 4)', 'Interval.Lopen(1, 4)')),
    dict(q='List the integers with ' + S(f'−2 {LT} x {LT} 3') + '.',
         a=S('−1, 0, 1, 2'), check=('custom', 'integers_minus_two_three')),
    dict(q='Solve ' + S('x ≥ −1') + ', ' + S('x ≤ −1') + '.', a=S('x = −1'),
         check=('solveset', '(x >= -1) & (x <= -1)', 'FiniteSet(-1)')),
]

Q_PRACTICE = [
    dict(q='Solve ' + S(f'2x {GT} 4') + ', ' + S(f'x − 1 {LT} 3') + '.',
         a=S(f'2 {LT} x {LT} 4'),
         check=('solveset', '(2*x > 4) & (x - 1 < 3)', 'Interval.open(2, 4)')),
    dict(q='Solve ' + S('x + 1 ≥ 0') + ', ' + S('2x ≤ 6') + '.', a=S('−1 ≤ x ≤ 3'),
         check=('solveset', '(x + 1 >= 0) & (2*x <= 6)', 'Interval(-1, 3)')),
    dict(q='Solve ' + S(f'3x {LT} 9') + ', ' + S(f'x {GT} −2') + '.',
         a=S(f'−2 {LT} x {LT} 3'),
         check=('solveset', '(3*x < 9) & (x > -2)', 'Interval.open(-2, 3)')),
    dict(q='Solve ' + S(f'5 − x {GT} 0') + ', ' + S(f'x + 2 {GT} 0') + '.',
         a=S(f'−2 {LT} x {LT} 5'),
         check=('solveset', '(5 - x > 0) & (x + 2 > 0)', 'Interval.open(-2, 5)')),
    dict(q='Solve ' + S('2x + 1 ≥ 5') + ', ' + S('3x ≤ 18') + '.', a=S('2 ≤ x ≤ 6'),
         check=('solveset', '(2*x + 1 >= 5) & (3*x <= 18)', 'Interval(2, 6)')),
    dict(q='Solve ' + S(F('x', 2) + f' {GT} 1') + ', ' + S(f'x {LT} 10') + '.',
         a=S(f'2 {LT} x {LT} 10'),
         check=('solveset', '(x/2 > 1) & (x < 10)', 'Interval.open(2, 10)')),
    dict(q='Solve ' + S(f'x − 3 {GT} 0') + ', ' + S(f'4 − x {GT} 0') + '.',
         a=S(f'3 {LT} x {LT} 4'),
         check=('solveset', '(x - 3 > 0) & (4 - x > 0)', 'Interval.open(3, 4)')),
    dict(q='Solve ' + S('2x ≥ 8') + ', ' + S('x ≤ 3') + '.', a='No solutions.',
         check=('solveset', '(2*x >= 8) & (x <= 3)', 'S.EmptySet')),
    dict(q='Solve ' + S('−1 ≤ 2x + 1 ≤ 7') + '.', a=S('−1 ≤ x ≤ 3'),
         check=('solveset', '(2*x + 1 >= -1) & (2*x + 1 <= 7)', 'Interval(-1, 3)')),
    dict(q='Write as an interval: ' + S(f'x {GT} −3') + ' and ' + S('x ≤ 2') + '.',
         a=S('(−3, 2]'),
         check=('solveset', '(x > -3) & (x <= 2)', 'Interval.Lopen(-3, 2)')),
]

Q_CHALLENGE = [
    dict(q='Solve ' + S(f'3(x − 1) {LT} 2x + 1') + ', ' + S(f'x + 4 {GT} 2') + '.',
         a=S(f'−2 {LT} x {LT} 4'),
         check=('solveset', '(3*(x-1) < 2*x + 1) & (x + 4 > 2)',
                'Interval.open(-2, 4)')),
    dict(q='Solve ' + S(f'{sq("x")} ≤ 9') + '.', a=S('−3 ≤ x ≤ 3'),
         check=('solveset', 'x**2 <= 9', 'Interval(-3, 3)')),
    dict(q='Solve ' + S(f'{sq("x")} {GT} 4') + '.',
         a=S(f'x {LT} −2') + ' or ' + S(f'x {GT} 2'),
         check=('solveset', 'x**2 > 4',
                'Union(Interval.open(-oo,-2), Interval.open(2,oo))')),
    dict(q='Solve ' + S(f'(x − 1)(x + 2) {LT} 0') + '.', a=S(f'−2 {LT} x {LT} 1'),
         check=('solveset', '(x-1)*(x+2) < 0', 'Interval.open(-2, 1)')),
    dict(q='Solve ' + S(f'1 {LT} 2x − 3 {LT} 7') + '.', a=S(f'2 {LT} x {LT} 5'),
         check=('solveset', '(2*x - 3 > 1) & (2*x - 3 < 7)', 'Interval.open(2, 5)')),
    dict(q='Solve ' + S('−3 ≤ ' + F('x + 1', 2) + ' ≤ 2') + '.', a=S('−7 ≤ x ≤ 3'),
         check=('solveset', '((x+1)/2 >= -3) & ((x+1)/2 <= 2)', 'Interval(-7, 3)')),
    dict(q='Solve ' + S(F('x', 3) + f' − 1 {GT} 0') + ', ' + S(f'2 − ' + F('x', 2)
                                                               + f' {GT} 0') + '.',
         a=S(f'3 {LT} x {LT} 4'),
         check=('solveset', '(x/3 - 1 > 0) & (2 - x/2 > 0)', 'Interval.open(3, 4)')),
    dict(q='How many integers satisfy ' + S(f'−2 {LT} 3x + 1 ≤ 10') + '?', a=S('4'),
         check=('custom', 'count_integers_3x')),
    dict(q='Solve ' + S(f'2x − 1 {GT} 3') + ', ' + S(f'3 − x {GT} 0') + '.',
         a=S(f'2 {LT} x {LT} 3'),
         check=('solveset', '(2*x - 1 > 3) & (3 - x > 0)', 'Interval.open(2, 3)')),
    dict(q='Solve ' + S(f'{sq("x")} − 5x + 6 ≤ 0') + '.', a=S('2 ≤ x ≤ 3'),
         check=('solveset', 'x**2 - 5*x + 6 <= 0', 'Interval(2, 3)')),
]

Q_BEYOND = [
    dict(q='Solve ' + S(f'|x − 2| {LT} 3') + '.', a=S(f'−1 {LT} x {LT} 5'),
         check=('solveset', 'Abs(x - 2) < 3', 'Interval.open(-1, 5)'),
         sol='The modulus measures distance from 2, so the solutions are the points '
             'less than 3 away: the interval from 2−3 to 2+3.'),
    dict(q='Solve ' + S('|2x + 1| ≤ 5') + '.', a=S('−3 ≤ x ≤ 2'),
         check=('solveset', 'Abs(2*x + 1) <= 5', 'Interval(-3, 2)'),
         sol='−5 ≤ 2x + 1 ≤ 5, so −6 ≤ 2x ≤ 4 and −3 ≤ x ≤ 2. '
             'One double inequality replaces two separate cases.'),
    dict(q='Solve ' + S(f'|x| {GT} |x − 2|') + '.', a=S(f'x {GT} 1'),
         check=('solveset', 'Abs(x) > Abs(x - 2)', 'Interval.open(1, oo)'),
         sol='Read it as distance: the points closer to 2 than to 0 are those beyond the '
             'midpoint 1. Squaring both sides gives the same: 0 > −4x + 4.'),
    dict(q='For which ' + S('a') + ' does the system ' + S(f'x {GT} a') + ', '
           + S(f'x {LT} 2a') + ' have solutions?', a=S(f'a {GT} 0'),
         check=('custom', 'system_a_two_a'),
         sol='Solutions exist exactly when a < 2a, that is 0 < a. For a ≤ 0 the two '
             'conditions contradict each other.'),
    dict(q='Solve ' + S(f'(x − 1)(x − 2)(x − 3) {LT} 0') + '.',
         a=S(f'x {LT} 1') + ' or ' + S(f'2 {LT} x {LT} 3'),
         check=('solveset', '(x-1)*(x-2)*(x-3) < 0',
                'Union(Interval.open(-oo,1), Interval.open(2,3))'),
         sol='Three roots cut the line into four regions, and the sign alternates. '
             'Test one point on the far right: there the product is positive, so the '
             'negative regions are the second and the fourth from the right.'),
    dict(q='Solve ' + S(f'1 {LT} ' + F(1, 'x') + f' {LT} 2') + '.',
         a=S(f'{F(1, 2)} {LT} x {LT} 1'),
         check=('solveset', '(1/x > 1) & (1/x < 2)',
                'Interval.open(Rational(1,2), 1)'),
         sol='Both bounds are positive, so x must be positive. Taking reciprocals of '
             '1 < 1/x < 2 reverses everything: 1/2 < x < 1.'),
    dict(q='How many integers satisfy ' + S('|x − 5| ≤ 3') + '?', a=S('7'),
         check=('custom', 'count_integers_modulus'),
         sol='The condition is 2 ≤ x ≤ 8, which holds for 2, 3, 4, 5, 6, 7, 8 — '
             'seven integers, both ends included.'),
    dict(q='Solve ' + S(f'{sq("x")} − 4x + 3 {GT} 0') + '.',
         a=S(f'x {LT} 1') + ' or ' + S(f'x {GT} 3'),
         check=('solveset', 'x**2 - 4*x + 3 > 0',
                'Union(Interval.open(-oo,1), Interval.open(3,oo))'),
         sol='Factorise to (x−1)(x−3) > 0. A positive-leading quadratic is above the '
             'axis outside its roots and below between them.'),
    dict(q='For which ' + S('m') + ' does ' + S(f'{sq("x")} {LT} m')
           + ' have no solution?', a=S('m ≤ 0'), check=('custom', 'no_solution_square'),
         sol='x² ≥ 0 always, so x² < m is impossible when m ≤ 0. For m > 0 the solutions '
             'are −√m < x < √m.'),
    dict(q='Solve ' + S(f'0 {LT} {sq("x")} − 1 {LT} 3') + '.',
         a=S(f'−2 {LT} x {LT} −1') + ' or ' + S(f'1 {LT} x {LT} 2'),
         check=('solveset', '(x**2 - 1 > 0) & (x**2 - 1 < 3)',
                'Union(Interval.open(-2,-1), Interval.open(1,2))'),
         sol='The two conditions give 1 < x² < 4, that is 1 < |x| < 2. '
             'Each side of zero contributes one interval.'),
    dict(q='Solve ' + S(f'|x| + x {GT} 2') + '.', a=S(f'x {GT} 1'),
         check=('solveset', 'Abs(x) + x > 2', 'Interval.open(1, oo)'),
         sol='For x < 0 the left side is 0, never above 2. For x ≥ 0 it is 2x, so x > 1.'),
    dict(q='Solve ' + S(F('x', 'x − 1') + ' ≥ 0') + '.',
         a=S('x ≤ 0') + ' or ' + S(f'x {GT} 1'),
         check=('solveset', 'x/(x-1) >= 0',
                'Union(Interval(-oo,0), Interval.open(1,oo))'),
         sol='Top and bottom must share a sign, and x = 1 is excluded. '
             'Note 0 itself is allowed, since the fraction is then 0.'),
    dict(q='Find the shortest interval containing every ' + S('x') + ' with '
           + S(f'|x − 1| {LT} 2') + ' and ' + S(f'|x + 1| {LT} 3') + '.',
         a=S(f'−1 {LT} x {LT} 2'),
         check=('solveset', '(Abs(x-1) < 2) & (Abs(x+1) < 3)', 'Interval.open(-1, 2)'),
         sol='The first gives (−1, 3), the second (−4, 2). The system is their overlap, '
             '(−1, 2).'),
    dict(q='Solve ' + S('x' + '<sup>2</sup> ≤ x') + '.', a=S('0 ≤ x ≤ 1'),
         check=('solveset', 'x**2 <= x', 'Interval(0, 1)'),
         sol='x² − x = x(x−1) ≤ 0, which holds between the roots. '
             'This is exactly the range where squaring does not enlarge a number.'),
    dict(q='Show that the overlap of two intervals is an interval or empty.',
         a='The larger lower bound and the smaller upper bound.', check=None,
         sol='A point is in both exactly when it is above both lower bounds and below '
             'both upper bounds, that is above max(a, c) and below min(b, d). '
             'If that lower bound is not below that upper bound, nothing qualifies.'),
]

TOPIC = dict(
    key='alg-22', number=22,
    unit='Unit 4 · Inequalities, modulus and accuracy',
    lessons='51–52',
    title='Systems of inequalities. Number intervals',
    subtitle='Two conditions at once — the answer is where the two solution sets overlap.',
    uz='Algebra 8, §16, pp. 94–104', cam='Cambridge Stage 9 · 4.3',
    keywords=['system of inequalities', 'intersection', 'number interval',
              'segment (closed interval)', 'open interval', 'half-open interval',
              'ray (half-line)', 'double inequality', 'empty set'],
    remember=[
        'Solve each inequality separately, then take the <b>overlap</b> on a number line.',
        'Notation: <span class="m">[a, b]</span> includes its ends, '
        '<span class="m">(a, b)</span> excludes them, '
        '<span class="m">(a, b]</span> does one of each.',
        'No overlap means no solutions — write the empty set, not nothing.',
        'A double inequality such as <span class="m">1 ≤ 2x + 3 ≤ 9</span> is one system; '
        'do the same thing to all three parts.',
        'For a quadratic or a product, the sign alternates between consecutive roots.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
