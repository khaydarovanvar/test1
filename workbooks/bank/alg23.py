# -*- coding: utf-8 -*-
"""Questions for topic 23 of Grade 8 algebra — the modulus of a number."""

from .common import F, M, rt, sq

LT, GT = '&lt;', '&gt;'
S = M


def mod(t):
    return f'|{t}|'


Q_FOCUS = [
    dict(q='Find ' + S(mod('−7')) + '.', a=S('7'), check=('simp', 'Abs(-7)', '7')),
    dict(q='Find ' + S(mod('5')) + '.', a=S('5'), check=('simp', 'Abs(5)', '5')),
    dict(q='Find ' + S(mod('0')) + '.', a=S('0'), check=('simp', 'Abs(0)', '0')),
    dict(q='Find ' + S(mod('3 − 8')) + '.', a=S('5'), check=('simp', 'Abs(3-8)', '5')),
    dict(q='Solve ' + S(mod('x') + ' = 4') + '.', a=S('x = ±4'),
         check=('solveset', 'Eq(Abs(x), 4)', 'FiniteSet(-4, 4)')),
    dict(q='Solve ' + S(mod('x') + ' = 0') + '.', a=S('x = 0'),
         check=('solveset', 'Eq(Abs(x), 0)', 'FiniteSet(0)')),
    dict(q='Solve ' + S(mod('x') + ' = −2') + '.', a='No solutions.',
         check=('solveset', 'Eq(Abs(x), -2)', 'S.EmptySet')),
    dict(q='Solve ' + S(mod('x') + f' {LT} 2') + '.', a=S(f'−2 {LT} x {LT} 2'),
         check=('solveset', 'Abs(x) < 2', 'Interval.open(-2, 2)')),
    dict(q='Solve ' + S(mod('x') + ' ≥ 3') + '.',
         a=S('x ≤ −3') + ' or ' + S('x ≥ 3'),
         check=('solveset', 'Abs(x) >= 3',
                'Union(Interval(-oo,-3), Interval(3,oo))')),
    dict(q='Find ' + S(mod('−3') + ' + ' + mod('2')) + '.', a=S('5'),
         check=('simp', 'Abs(-3)+Abs(2)', '5')),
]

Q_PRACTICE = [
    dict(q='Solve ' + S(mod('x − 1') + ' = 3') + '.', a=S('x = 4') + ' or ' + S('x = −2'),
         check=('solveset', 'Eq(Abs(x-1), 3)', 'FiniteSet(-2, 4)')),
    dict(q='Solve ' + S(mod('x + 2') + ' = 5') + '.', a=S('x = 3') + ' or ' + S('x = −7'),
         check=('solveset', 'Eq(Abs(x+2), 5)', 'FiniteSet(-7, 3)')),
    dict(q='Solve ' + S(mod('2x') + ' = 6') + '.', a=S('x = ±3'),
         check=('solveset', 'Eq(Abs(2*x), 6)', 'FiniteSet(-3, 3)')),
    dict(q='Solve ' + S(mod('x − 3') + f' {LT} 2') + '.', a=S(f'1 {LT} x {LT} 5'),
         check=('solveset', 'Abs(x-3) < 2', 'Interval.open(1, 5)')),
    dict(q='Solve ' + S(mod('x + 1') + ' ≤ 4') + '.', a=S('−5 ≤ x ≤ 3'),
         check=('solveset', 'Abs(x+1) <= 4', 'Interval(-5, 3)')),
    dict(q='Solve ' + S(mod('x') + f' {GT} 5') + '.',
         a=S(f'x {LT} −5') + ' or ' + S(f'x {GT} 5'),
         check=('solveset', 'Abs(x) > 5',
                'Union(Interval.open(-oo,-5), Interval.open(5,oo))')),
    dict(q='Find ' + S(mod('x − 4')) + ' when ' + S('x = 1') + '.', a=S('3'),
         check=('simp', 'Abs(1-4)', '3')),
    dict(q='Solve ' + S(mod('3x') + ' = 12') + '.', a=S('x = ±4'),
         check=('solveset', 'Eq(Abs(3*x), 12)', 'FiniteSet(-4, 4)')),
    dict(q='Solve ' + S(mod('x − 2') + f' {GT} 1') + '.',
         a=S(f'x {LT} 1') + ' or ' + S(f'x {GT} 3'),
         check=('solveset', 'Abs(x-2) > 1',
                'Union(Interval.open(-oo,1), Interval.open(3,oo))')),
    dict(q='Simplify ' + S(mod('x')) + ' for ' + S(f'x {LT} 0') + '.', a=S('−x'),
         check=('custom', 'abs_negative_branch')),
]

Q_CHALLENGE = [
    dict(q='Solve ' + S(mod('2x − 1') + ' = 5') + '.', a=S('x = 3') + ' or ' + S('x = −2'),
         check=('solveset', 'Eq(Abs(2*x-1), 5)', 'FiniteSet(-2, 3)')),
    dict(q='Solve ' + S(mod('2x + 3') + ' ≤ 7') + '.', a=S('−5 ≤ x ≤ 2'),
         check=('solveset', 'Abs(2*x+3) <= 7', 'Interval(-5, 2)')),
    dict(q='Solve ' + S(mod('1 − x') + ' = 4') + '.', a=S('x = −3') + ' or ' + S('x = 5'),
         check=('solveset', 'Eq(Abs(1-x), 4)', 'FiniteSet(-3, 5)')),
    dict(q='Simplify ' + S(mod('x − 3')) + ' for ' + S('x ≥ 3') + '.', a=S('x − 3'),
         check=('custom', 'abs_branch_ge')),
    dict(q='Simplify ' + S(mod('x − 3')) + ' for ' + S(f'x {LT} 3') + '.', a=S('3 − x'),
         check=('custom', 'abs_branch_lt')),
    dict(q='Solve ' + S(mod('x') + ' = x') + '.', a=S('x ≥ 0'),
         check=('solveset', 'Eq(Abs(x), x)', 'Interval(0, oo)')),
    dict(q='Solve ' + S(mod('x') + ' + ' + mod('x') + ' = 6') + '.', a=S('x = ±3'),
         check=('solveset', 'Eq(Abs(x)+Abs(x), 6)', 'FiniteSet(-3, 3)')),
    dict(q='Solve ' + S(mod(sq('x') + ' − 4') + ' = 0') + '.', a=S('x = ±2'),
         check=('solveset', 'Eq(Abs(x**2-4), 0)', 'FiniteSet(-2, 2)')),
    dict(q='Solve ' + S(mod('x − 1') + ' + ' + mod('x + 1') + ' = 2') + '.',
         a=S('−1 ≤ x ≤ 1'),
         check=('solveset', 'Eq(Abs(x-1)+Abs(x+1), 2)', 'Interval(-1, 1)')),
    dict(q='Solve ' + S(mod('x') + f' {LT} −1') + '.', a='No solutions.',
         check=('solveset', 'Abs(x) < -1', 'S.EmptySet')),
]

Q_BEYOND = [
    dict(q='Solve ' + S(mod('x − 1') + ' + ' + mod('x − 3') + ' = 2') + '.',
         a=S('1 ≤ x ≤ 3'),
         check=('solveset', 'Eq(Abs(x-1)+Abs(x-3), 2)', 'Interval(1, 3)'),
         sol='Read the left side as total distance to 1 and to 3. Any point between them '
             'has total distance exactly 2; outside, the total is larger. '
             'So the whole segment solves it.'),
    dict(q='Solve ' + S(mod('x − 1') + ' + ' + mod('x − 3') + ' = 4') + '.',
         a=S('x = 0') + ' or ' + S('x = 4'),
         check=('solveset', 'Eq(Abs(x-1)+Abs(x-3), 4)', 'FiniteSet(0, 4)'),
         sol='Outside the segment the total distance is 2 plus twice the overshoot. '
             'Needing 4 means an overshoot of 1 at either end.'),
    dict(q='Prove that ' + S(mod('ab') + ' = ' + mod('a') + ' · ' + mod('b')) + '.',
         a='Check the four sign cases.', check=('custom', 'abs_product'),
         sol='Both sides are non-negative, and squaring gives (ab)² = a²b², which is '
             'true. Since two non-negative numbers with equal squares are equal, '
             'the identity follows.'),
    dict(q='Prove that ' + S(mod('a + b') + ' ≤ ' + mod('a') + ' + ' + mod('b')) + '.',
         a='Square both sides.', check=('custom', 'triangle_inequality'),
         sol='(|a|+|b|)² − (a+b)² = 2(|ab| − ab) ≥ 0, because ab ≤ |ab| always. '
             'Equality exactly when a and b have the same sign.'),
    dict(q='Solve ' + S(mod('x') + f' {GT} x') + '.', a=S(f'x {LT} 0'),
         check=('solveset', 'Abs(x) > x', 'Interval.open(-oo, 0)'),
         sol='For x ≥ 0 the two sides are equal, so the strict inequality fails. '
             'For x < 0 the left is positive and the right negative.'),
    dict(q='Solve ' + S(mod('2x − 1') + f' {LT} ' + mod('x')) + '.',
         a=S(F(1, 3) + f' {LT} x {LT} 1'),
         check=('solveset', 'Abs(2*x-1) < Abs(x)',
                'Interval.open(Rational(1,3), 1)'),
         sol='Both sides are non-negative, so square: 4x² − 4x + 1 < x², that is '
             '3x² − 4x + 1 < 0 and (3x − 1)(x − 1) < 0.'),
    dict(q='Find the least value of ' + S(mod('x − 1') + ' + ' + mod('x − 5')) + '.',
         a=S('4') + ', for every ' + S('1 ≤ x ≤ 5'), check=('custom', 'min_two_distances'),
         sol='The sum of the distances to 1 and to 5 is at least the distance between '
             'them, 4, and equals it everywhere on the segment joining them.'),
    dict(q='Solve ' + S(mod('x − 2') + ' = 2x') + '.', a=S('x = ' + F(2, 3)),
         check=('solveset', 'Eq(Abs(x-2), 2*x)', 'FiniteSet(Rational(2,3))'),
         sol='The right side must be ≥ 0, so x ≥ 0. Case x ≥ 2 gives x − 2 = 2x, '
             'x = −2, rejected. Case x < 2 gives 2 − x = 2x, x = 2/3, which is valid.'),
    dict(q='Solve ' + S(mod(mod('x') + ' − 1') + ' = 2') + '.', a=S('x = ±3'),
         check=('solveset', 'Eq(Abs(Abs(x)-1), 2)', 'FiniteSet(-3, 3)'),
         sol='|x| − 1 = ±2, so |x| = 3 or |x| = −1. The second is impossible, '
             'leaving x = ±3.'),
    dict(q='Prove that ' + S(mod('a') + ' − ' + mod('b') + ' ≤ ' + mod('a − b')) + '.',
         a='Apply the triangle inequality to ' + S('a = (a − b) + b'),
         check=('custom', 'reverse_triangle'),
         sol='|a| = |(a−b) + b| ≤ |a−b| + |b|. Subtracting |b| gives the result. '
             'Swapping a and b gives the companion bound.'),
    dict(q='Solve ' + S(mod('x − 1') + ' ≤ ' + mod('x + 1')) + '.', a=S('x ≥ 0'),
         check=('solveset', 'Abs(x-1) <= Abs(x+1)', 'Interval(0, oo)'),
         sol='Distance to 1 against distance to −1: the points at least as close to 1 '
             'are those from the midpoint 0 rightwards.'),
    dict(q='How many solutions has ' + S(mod(sq('x') + ' − 1') + ' = 1') + '?',
         a=S('3') + ' — ' + S('x = 0') + ' and ' + S('x = ±' + rt(2)),
         check=('solveset', 'Eq(Abs(x**2-1), 1)',
                'FiniteSet(0, sqrt(2), -sqrt(2))'),
         sol='x² − 1 = 1 gives x = ±√2; x² − 1 = −1 gives x = 0. Three in all — '
             'the inner expression can reach ±1 at different numbers of points.'),
    dict(q='Solve ' + S(mod('x') + ' = ' + mod('x − 4')) + '.', a=S('x = 2'),
         check=('solveset', 'Eq(Abs(x), Abs(x-4))', 'FiniteSet(2)'),
         sol='The point equidistant from 0 and 4 is their midpoint.'),
    dict(q='Solve ' + S(mod('x − 1') + ' · ' + mod('x + 1') + ' = 0') + '.',
         a=S('x = ±1'),
         check=('solveset', 'Eq(Abs(x-1)*Abs(x+1), 0)', 'FiniteSet(-1, 1)'),
         sol='A product is zero when a factor is zero, and a modulus is zero only when '
             'its contents are.'),
    dict(q='For which ' + S('a') + ' does ' + S(mod('x') + ' = a')
           + ' have exactly one solution?', a=S('a = 0'),
         check=('custom', 'one_solution_modulus'),
         sol='For a > 0 there are two solutions, ±a; for a < 0 none. '
             'Only a = 0 gives the single solution x = 0.'),
]

TOPIC = dict(
    key='alg-23', number=23,
    unit='Unit 4 · Inequalities, modulus and accuracy',
    lessons='53–54',
    title='The modulus of a number',
    subtitle='Distance from zero — one idea that turns every modulus equation and '
             'inequality into something you can already solve.',
    uz='Algebra 8, §17, pp. 105–110', cam='Cambridge Stage 9 · beyond',
    keywords=['modulus (absolute value)', 'distance from zero', 'non-negative',
              'two cases', 'opposite numbers', 'equation with a modulus',
              'inequality with a modulus', 'solution set'],
    remember=[
        '<span class="m">|x|</span> is the distance from <span class="m">x</span> to '
        '<span class="m">0</span>, so it is never negative.',
        '<span class="m">|x − a|</span> is the distance from <span class="m">x</span> to '
        '<span class="m">a</span> — the quickest way to read any modulus question.',
        '<span class="m">|x| = a</span> has two solutions when '
        '<span class="m">a &gt; 0</span>, one when <span class="m">a = 0</span> and none '
        'when <span class="m">a &lt; 0</span>.',
        '<span class="m">|x| &lt; a</span> is one interval; '
        '<span class="m">|x| &gt; a</span> is two.',
        'With a modulus on both sides, squaring is safe — both sides are non-negative.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
