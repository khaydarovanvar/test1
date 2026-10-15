# -*- coding: utf-8 -*-
"""Questions for topic 21 of Grade 8 algebra — inequalities with one unknown."""

from .common import F, M, rt, sq

LT, GT = '&lt;', '&gt;'


def S(text):
    return M(text)


Q_FOCUS = [
    dict(q='Solve ' + S(f'x + 3 {GT} 7') + '.', a=S(f'x {GT} 4'),
         check=('solveset', 'x + 3 > 7', 'Interval.open(4, oo)')),
    dict(q='Solve ' + S(f'x − 5 {LT} 2') + '.', a=S(f'x {LT} 7'),
         check=('solveset', 'x - 5 < 2', 'Interval.open(-oo, 7)')),
    dict(q='Solve ' + S(f'2x {GT} 10') + '.', a=S(f'x {GT} 5'),
         check=('solveset', '2*x > 10', 'Interval.open(5, oo)')),
    dict(q='Solve ' + S(f'−3x {GT} 9') + '.', a=S(f'x {LT} −3'),
         check=('solveset', '-3*x > 9', 'Interval.open(-oo, -3)')),
    dict(q='Solve ' + S(F('x', 2) + ' ≥ 4') + '.', a=S('x ≥ 8'),
         check=('solveset', 'x/2 >= 4', 'Interval(8, oo)')),
    dict(q='Solve ' + S('5x ≤ 20') + '.', a=S('x ≤ 4'),
         check=('solveset', '5*x <= 20', 'Interval(-oo, 4)')),
    dict(q='Solve ' + S(f'−x {LT} 6') + '.', a=S(f'x {GT} −6'),
         check=('solveset', '-x < 6', 'Interval.open(-6, oo)')),
    dict(q='Solve ' + S(f'3x + 1 {GT} 7') + '.', a=S(f'x {GT} 2'),
         check=('solveset', '3*x + 1 > 7', 'Interval.open(2, oo)')),
    dict(q='Solve ' + S('4 − x ≥ 1') + '.', a=S('x ≤ 3'),
         check=('solveset', '4 - x >= 1', 'Interval(-oo, 3)')),
    dict(q='Solve ' + S('2x − 6 ≤ 0') + '.', a=S('x ≤ 3'),
         check=('solveset', '2*x - 6 <= 0', 'Interval(-oo, 3)')),
]

Q_PRACTICE = [
    dict(q='Solve ' + S(f'3(x − 2) {GT} x') + '.', a=S(f'x {GT} 3'),
         check=('solveset', '3*(x-2) > x', 'Interval.open(3, oo)')),
    dict(q='Solve ' + S('5 − 2x ≤ 11') + '.', a=S('x ≥ −3'),
         check=('solveset', '5 - 2*x <= 11', 'Interval(-3, oo)')),
    dict(q='Solve ' + S(F('x + 1', 3) + f' {LT} 2') + '.', a=S(f'x {LT} 5'),
         check=('solveset', '(x+1)/3 < 2', 'Interval.open(-oo, 5)')),
    dict(q='Solve ' + S('2(x + 3) ≥ 3(x − 1)') + '.', a=S('x ≤ 9'),
         check=('solveset', '2*(x+3) >= 3*(x-1)', 'Interval(-oo, 9)')),
    dict(q='Solve ' + S(f'7 − 3x {GT} 1') + '.', a=S(f'x {LT} 2'),
         check=('solveset', '7 - 3*x > 1', 'Interval.open(-oo, 2)')),
    dict(q='Solve ' + S(F('x', 4) + ' − 1 ≤ 0') + '.', a=S('x ≤ 4'),
         check=('solveset', 'x/4 - 1 <= 0', 'Interval(-oo, 4)')),
    dict(q='Solve ' + S(f'4x + 5 {LT} 2x + 11') + '.', a=S(f'x {LT} 3'),
         check=('solveset', '4*x + 5 < 2*x + 11', 'Interval.open(-oo, 3)')),
    dict(q='Solve ' + S('−2(x − 1) ≥ 4') + '.', a=S('x ≤ −1'),
         check=('solveset', '-2*(x-1) >= 4', 'Interval(-oo, -1)')),
    dict(q='Solve ' + S(F('2x − 1', 5) + ' ≥ 1') + '.', a=S('x ≥ 3'),
         check=('solveset', '(2*x-1)/5 >= 1', 'Interval(3, oo)')),
    dict(q='Solve ' + S(f'6 − x {LT} x') + '.', a=S(f'x {GT} 3'),
         check=('solveset', '6 - x < x', 'Interval.open(3, oo)')),
]

Q_CHALLENGE = [
    dict(q='Solve ' + S(F('x', 2) + ' + ' + F('x', 3) + f' {GT} 5') + '.',
         a=S(f'x {GT} 6'), check=('solveset', 'x/2 + x/3 > 5', 'Interval.open(6, oo)')),
    dict(q='Solve ' + S('3x − 2(x + 1) ≤ 4') + '.', a=S('x ≤ 6'),
         check=('solveset', '3*x - 2*(x+1) <= 4', 'Interval(-oo, 6)')),
    dict(q='Solve ' + S(F('x − 1', 2) + ' − ' + F('x + 2', 3) + f' {GT} 0') + '.',
         a=S(f'x {GT} 7'),
         check=('solveset', '(x-1)/2 - (x+2)/3 > 0', 'Interval.open(7, oo)')),
    dict(q='Solve ' + S(f'2(3 − x) {LT} 3(2 − x)') + '.', a=S(f'x {LT} 0'),
         check=('solveset', '2*(3-x) < 3*(2-x)', 'Interval.open(-oo, 0)')),
    dict(q='Solve ' + S(f'0.2x + 1 {GT} 0.5x − 2') + '.', a=S(f'x {LT} 10'),
         check=('solveset', 'Rational(1,5)*x + 1 > Rational(1,2)*x - 2',
                'Interval.open(-oo, 10)')),
    dict(q='Solve ' + S(f'x − 4 {GT} 2x − 1') + '.', a=S(f'x {LT} −3'),
         check=('solveset', 'x - 4 > 2*x - 1', 'Interval.open(-oo, -3)')),
    dict(q='Solve ' + S('5(x + 1) − 3(x − 1) ≤ 2x + 8') + '.',
         a='Every real ' + S('x'),
         check=('solveset', '5*(x+1) - 3*(x-1) <= 2*x + 8', 'S.Reals')),
    dict(q='Solve ' + S(f'3x + 1 {GT} 3x') + '.', a='Every real ' + S('x'),
         check=('solveset', '3*x + 1 > 3*x', 'S.Reals')),
    dict(q='Solve ' + S(f'2x + 5 {LT} 2x + 3') + '.', a='No solutions.',
         check=('solveset', '2*x + 5 < 2*x + 3', 'S.EmptySet')),
    dict(q='Solve ' + S(f'−4 {LT} 2x ≤ 8') + '.', a=S(f'−2 {LT} x ≤ 4'),
         check=('solveset', '(-4 < 2*x) & (2*x <= 8)', 'Interval.Lopen(-2, 4)')),
]

Q_BEYOND = [
    dict(q='Solve ' + S(f'ax {GT} b') + ', treating every possible ' + S('a') + '.',
         a=S(f'x {GT} ' + F('b', 'a')) + ' if ' + S(f'a {GT} 0') + '; '
           + S(f'x {LT} ' + F('b', 'a')) + ' if ' + S(f'a {LT} 0') + '; '
           'if ' + S('a = 0') + ' then every ' + S('x') + ' when ' + S(f'b {LT} 0')
           + ', none otherwise.', check=('custom', 'linear_ineq_cases'),
         sol='Dividing by a reverses the sign when a is negative. When a = 0 there is no '
             'x in the statement at all: 0 > b is either always true or always false.'),
    dict(q='For which ' + S('k') + ' does ' + S(f'kx {GT} 3') + ' have solution set '
           + S(f'x {GT} ' + F(3, 'k')) + '?', a=S(f'k {GT} 0'),
         check=('custom', 'k_positive_only'),
         sol='Only a positive k keeps the direction. A negative k would give x < 3/k, '
             'and k = 0 gives no x at all.'),
    dict(q='Solve ' + S(f'{sq("x")} {GT} 0') + '.', a='Every ' + S('x ≠ 0'),
         check=('solveset', 'x**2 > 0',
                'Union(Interval.open(-oo,0), Interval.open(0,oo))'),
         sol='A square is never negative, and it is zero only at x = 0 — so every other '
             'real number works.'),
    dict(q='Solve ' + S(F(1, 'x') + f' {GT} 2') + '.', a=S(f'0 {LT} x {LT} ' + F(1, 2)),
         check=('solveset', '1/x > 2', 'Interval.open(0, Rational(1,2))'),
         sol='For x < 0 the left side is negative, so no solutions there. For x > 0 '
             'multiply by the positive x: 1 > 2x, giving x < 1/2.'),
    dict(q='Solve ' + S(F(1, 'x') + f' {LT} 1') + '.',
         a=S(f'x {LT} 0') + ' or ' + S(f'x {GT} 1'),
         check=('solveset', '1/x < 1',
                'Union(Interval.open(-oo,0), Interval.open(1,oo))'),
         sol='Split by the sign of x. Negative x always works. Positive x needs 1 < x. '
             'Multiplying through by x without splitting is the classic error here.'),
    dict(q='Solve ' + S(f'(x − 1)(x − 3) {GT} 0') + '.',
         a=S(f'x {LT} 1') + ' or ' + S(f'x {GT} 3'),
         check=('solveset', '(x-1)*(x-3) > 0',
                'Union(Interval.open(-oo,1), Interval.open(3,oo))'),
         sol='A product of two factors is positive when both are positive or both are '
             'negative. Mark 1 and 3 on a line and test one point in each of the three '
             'regions.'),
    dict(q='Solve ' + S('x(x + 2) ≤ 0') + '.', a=S('−2 ≤ x ≤ 0'),
         check=('solveset', 'x*(x+2) <= 0', 'Interval(-2, 0)'),
         sol='The product is negative exactly between the two roots, and zero at them.'),
    dict(q='Find the smallest integer satisfying ' + S(f'5x − 7 {GT} 2x + 8') + '.',
         a=S('6'), check=('custom', 'smallest_integer_solution'),
         sol='3x > 15, so x > 5. The smallest integer strictly greater than 5 is 6 — '
             'note that 5 itself does not qualify.'),
    dict(q='How many integers satisfy ' + S(f'−3 ≤ 2x + 1 {LT} 9') + '?', a=S('6'),
         check=('custom', 'count_integer_solutions'),
         sol='Subtract 1 and halve: −2 ≤ x < 4, so x ∈ {−2, −1, 0, 1, 2, 3} — six values. '
             'The closed end is included, the open end is not.'),
    dict(q='For which ' + S('a') + ' does ' + S(f'ax + 2 {GT} 0') + ' hold for every '
           + S('x') + '?', a=S('a = 0'), check=('custom', 'always_true_linear'),
         sol='Any non-zero a makes the left side negative for large |x| of the right '
             'sign. With a = 0 the statement is 2 > 0, true for every x.'),
    dict(q='Solve ' + S(F('x + 1', 'x − 2') + f' {GT} 0') + '.',
         a=S(f'x {LT} −1') + ' or ' + S(f'x {GT} 2'),
         check=('solveset', '(x+1)/(x-2) > 0',
                'Union(Interval.open(-oo,-1), Interval.open(2,oo))'),
         sol='A fraction is positive when top and bottom share a sign. The critical '
             'values are −1 (zero) and 2 (undefined); test a point in each region.'),
    dict(q='Solve ' + S(f'{sq("x", 3)} {GT} x') + '.',
         a=S(f'−1 {LT} x {LT} 0') + ' or ' + S(f'x {GT} 1'),
         check=('solveset', 'x**3 > x',
                'Union(Interval.open(-1,0), Interval.open(1,oo))'),
         sol='x³ − x = x(x−1)(x+1) > 0. Three roots cut the line into four regions; '
             'testing one point in each gives the two that work.'),
    dict(q='Show that if ' + S(f'a {GT} 0') + ' then ' + S(f'ax + b {GT} 0')
           + ' is the same as ' + S(f'x {GT} −' + F('b', 'a')) + '.',
         a='Divide by the positive ' + S('a'), check=('custom', 'equivalent_linear'),
         sol='Subtracting b and dividing by a positive number are both reversible steps '
             'that keep the direction, so the two statements have exactly the same '
             'solution set.'),
    dict(q='Solve ' + S(f'|x| {LT} x') + '.', a='No solutions.',
         check=('solveset', 'Abs(x) < x', 'S.EmptySet'),
         sol='|x| is x when x ≥ 0 and −x when x < 0. In the first case the claim is '
             'x < x, false; in the second −x < x needs x > 0, contradicting x < 0.'),
    dict(q='Solve ' + S('|x| ≥ x') + '.', a='Every real ' + S('x'),
         check=('solveset', 'Abs(x) >= x', 'S.Reals'),
         sol='For x ≥ 0 the two sides are equal; for x < 0 the left is positive and the '
             'right negative. So it holds everywhere — the companion to the question '
             'before it.'),
]

TOPIC = dict(
    key='alg-21', number=21,
    unit='Unit 4 · Inequalities, modulus and accuracy',
    lessons='49–50',
    title='Inequalities with one unknown',
    subtitle='Solving an inequality is solving an equation with one extra rule — and an '
             'answer that is a whole interval, not a number.',
    uz='Algebra 8, §15, pp. 85–93', cam='Cambridge Stage 9 · 4.3',
    keywords=['inequality with one unknown', 'solution of an inequality', 'solution set',
              'interval', 'number line', 'equivalent inequalities', 'reverse the sign',
              'no solutions', 'every number'],
    remember=[
        'Every step of solving an equation is allowed, with one exception: multiplying '
        'or dividing by a <b>negative</b> reverses the sign.',
        'The answer is a <b>set</b>. Write it as an inequality or an interval, and draw '
        'it on a number line.',
        'An unknown that cancels leaves either a true statement (every number works) or '
        'a false one (none do).',
        'Never multiply by an expression whose sign you do not know — '
        '<span class="m">x</span> could be negative.',
        'For a product or a fraction, mark the critical values on a line and test one '
        'point in each region.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
