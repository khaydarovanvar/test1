# -*- coding: utf-8 -*-
"""Questions for topic 34 of Grade 8 algebra — revision for Control work 6."""

from .common import F, M, rt, sq

S = M
X2, X4 = sq('x'), sq('x', 4)

Q_FOCUS = [
    dict(q='Solve ' + S(f'{X2} − 36 = 0') + '.', a=S('x = ±6'),
         check=('solveset', 'Eq(x**2-36, 0)', 'FiniteSet(-6, 6)')),
    dict(q='Solve ' + S(f'{X2} + 5x = 0') + '.', a=S('x = 0') + ' or ' + S('x = −5'),
         check=('solveset', 'Eq(x**2+5*x, 0)', 'FiniteSet(0, -5)')),
    dict(q='Solve ' + S(f'{X2} − 7x + 10 = 0') + '.',
         a=S('x = 2') + ' or ' + S('x = 5'),
         check=('solveset', 'Eq(x**2-7*x+10, 0)', 'FiniteSet(2, 5)')),
    dict(q='Find the discriminant of ' + S(f'{X2} − 4x + 4 = 0') + '.', a=S('0'),
         check=('simp', '16-16', '0')),
    dict(q='How many roots has ' + S(f'{X2} + 2x + 5 = 0') + '?', a='None.',
         check=('solveset', 'Eq(x**2+2*x+5, 0)', 'S.EmptySet')),
    dict(q='Find the sum of the roots of ' + S(f'{X2} − 9x + 14 = 0') + '.', a=S('9'),
         check=('simp', '9', '9')),
    dict(q='Find the product of the roots of ' + S(f'{X2} − 9x + 14 = 0') + '.',
         a=S('14'), check=('simp', '14', '14')),
    dict(q='Factorise ' + S(f'{X2} − 7x + 12') + '.', a=S('(x − 3)(x − 4)'),
         check=('simp', 'x**2-7*x+12', '(x-3)*(x-4)')),
    dict(q='Solve ' + S(f'{X4} − 16 = 0') + '.', a=S('x = ±2'),
         check=('solveset', 'Eq(x**4-16, 0)', 'FiniteSet(-2, 2)')),
    dict(q='Two numbers have sum ' + S('9') + ' and product ' + S('20') + '. Find them.',
         a=S('4') + ' and ' + S('5'),
         check=('solveset', 'Eq(x*(9-x), 20)', 'FiniteSet(4, 5)')),
]

Q_PRACTICE = [
    dict(q='Solve ' + S(f'2{X2} − 5x − 3 = 0') + '.',
         a=S('x = 3') + ' or ' + S('x = −' + F(1, 2)),
         check=('solveset', 'Eq(2*x**2-5*x-3, 0)', 'FiniteSet(3, Rational(-1,2))')),
    dict(q='Solve ' + S(f'3{X2} − 12 = 0') + '.', a=S('x = ±2'),
         check=('solveset', 'Eq(3*x**2-12, 0)', 'FiniteSet(-2, 2)')),
    dict(q='Solve ' + S(f'{X2} − 2x − 5 = 0') + '.', a=S('x = 1 ± ' + rt(6)),
         check=('solveset', 'Eq(x**2-2*x-5, 0)',
                'FiniteSet(1+sqrt(6), 1-sqrt(6))')),
    dict(q='Solve ' + S(f'{X4} − 10{X2} + 9 = 0') + '.', a=S('x = ±1, ±3'),
         check=('solveset', 'Eq(x**4-10*x**2+9, 0)', 'FiniteSet(-3,-1,1,3)')),
    dict(q='For which ' + S('k') + ' has ' + S(f'{X2} + kx + 1 = 0')
           + ' a repeated root?', a=S('k = ±2'), check=('custom', 'repeated_k_one')),
    dict(q='A rectangle is ' + S('2') + ' cm longer than wide, area ' + S('35')
           + ' cm². Find the width.', a=S('5') + ' cm',
         check=('solveset', 'Eq(x*(x+2), 35)', 'FiniteSet(5, -7)')),
    dict(q='Solve ' + S(F(1, 'x') + ' + ' + F(1, 'x + 2') + ' = ' + F(3, 4)) + '.',
         a=S('x = 2') + ' or ' + S('x = −' + F(4, 3)),
         check=('solveset', 'Eq(1/x + 1/(x+2), Rational(3,4))',
                'FiniteSet(2, Rational(-4,3))')),
    dict(q='Factorise ' + S(f'2{X2} + 5x + 2') + '.', a=S('(2x + 1)(x + 2)'),
         check=('simp', '2*x**2+5*x+2', '(2*x+1)*(x+2)')),
    dict(q='Find ' + S(f'{sq("α")} + {sq("β")}') + ' for ' + S(f'{X2} − 6x + 4 = 0')
           + '.', a=S('28'), check=('custom', 'sum_sq_six_four')),
    dict(q='Where does ' + S(f'y = {X2} − x − 6') + ' cross the ' + S('x') + '-axis?',
         a=S('x = 3') + ' and ' + S('x = −2'),
         check=('solveset', 'Eq(x**2-x-6, 0)', 'FiniteSet(3, -2)')),
]

Q_CHALLENGE = [
    dict(q='Solve ' + S(f'6{X2} − 7x + 2 = 0') + '.',
         a=S('x = ' + F(1, 2)) + ' or ' + S('x = ' + F(2, 3)),
         check=('solveset', 'Eq(6*x**2-7*x+2, 0)',
                'FiniteSet(Rational(1,2), Rational(2,3))')),
    dict(q='For which ' + S('m') + ' has ' + S(f'{X2} − 2mx + 9 = 0')
           + ' no real root?', a=S('−3 &lt; m &lt; 3'),
         check=('solveset', '4*k**2 - 36 < 0', 'Interval.open(-3, 3)', 'k')),
    dict(q='Solve ' + S(f'({X2} − 4)<sup>2</sup> = 9') + '.',
         a=S('x = ±' + rt(7)) + ' or ' + S('x = ±1'),
         check=('solveset', 'Eq((x**2-4)**2, 9)',
                'FiniteSet(-sqrt(7), sqrt(7), -1, 1)')),
    dict(q='The roots of ' + S(f'{X2} − 8x + k = 0') + ' differ by ' + S('2')
           + '. Find ' + S('k') + '.', a=S('k = 15'), check=('custom', 'roots_differ_two')),
    dict(q='A boat goes ' + S('36') + ' km up and back in ' + S('5') + ' h; the current '
           'is ' + S('3') + ' km/h. Find its speed in still water.', a=S('15') + ' km/h',
         check=('custom', 'boat_36')),
    dict(q='Solve ' + S(f'{X2} − 4|x| + 3 = 0') + '.', a=S('x = ±1, ±3'),
         check=('solveset', 'Eq(x**2-4*Abs(x)+3, 0)', 'FiniteSet(-3,-1,1,3)')),
    dict(q='Find the vertex of ' + S(f'y = {X2} − 10x + 21') + '.', a=S('(5, −4)'),
         check=('simp', '25-50+21', '-4')),
    dict(q='Solve ' + S(f'{X2} − 5x + 6 &lt; 0') + '.', a=S('2 &lt; x &lt; 3'),
         check=('solveset', 'x**2-5*x+6 < 0', 'Interval.open(2, 3)')),
    dict(q='Write the equation with roots ' + S('3') + ' and ' + S('−7') + '.',
         a=S(f'{X2} + 4x − 21 = 0'),
         check=('solveset', 'Eq(x**2+4*x-21, 0)', 'FiniteSet(3, -7)')),
    dict(q='The sum of the squares of two consecutive integers is ' + S('181')
           + '. Find them.', a=S('9') + ' and ' + S('10'),
         check=('solveset', 'Eq(x**2+(x+1)**2, 181)', 'FiniteSet(9, -10)')),
]

Q_BEYOND = [
    dict(q='A pupil solved ' + S(f'{X2} = 4x') + ' by dividing by ' + S('x')
           + ' and wrote ' + S('x = 4') + '. What is missing?', a=S('x = 0'),
         check=('solveset', 'Eq(x**2, 4*x)', 'FiniteSet(0, 4)'),
         sol='Dividing by x assumes x ≠ 0 and so deletes that root. '
             'Factorise instead: x(x − 4) = 0.'),
    dict(q='A pupil wrote the roots of ' + S(f'{X2} = 25') + ' as ' + S('x = 5')
           + ' only. Correct it.', a=S('x = ±5'),
         check=('solveset', 'Eq(x**2, 25)', 'FiniteSet(-5, 5)'),
         sol='Taking a square root gives both signs. The arithmetic root symbol √25 is 5, '
             'but the equation x² = 25 has two solutions.'),
    dict(q='A pupil found ' + S('D = 9') + ' for ' + S(f'{X2} − 5x + 4 = 0')
           + ' and wrote the roots as ' + S('x = ' + F('5 ± 9', 2)) + '. '
           'What went wrong?', a=S('x = ' + F('5 ± 3', 2)) + ', so ' + S('1') + ' and '
           + S('4'), check=('solveset', 'Eq(x**2-5*x+4, 0)', 'FiniteSet(1, 4)'),
         sol='The formula uses √D, not D. Here √9 = 3, giving 4 and 1.'),
    dict(q='A pupil solved ' + S(F(1, 'x − 1') + ' = ' + F('x', 'x − 1'))
           + ' and wrote ' + S('x = 1') + '. Why is that wrong?',
         a='No solution — ' + S('x = 1') + ' is forbidden.',
         check=('solveset', 'Eq(1/(x-1), x/(x-1))', 'S.EmptySet'),
         sol='Cancelling the denominator gives 1 = x, but x = 1 makes both sides '
             'undefined. Every candidate must be checked against the denominators.'),
    dict(q='Solve ' + S(f'{X2} − 2(a + 1)x + {sq("a")} + 2a = 0') + '.',
         a=S('x = a') + ' or ' + S('x = a + 2'), check=('custom', 'param_quadratic'),
         sol='The discriminant is 4(a+1)² − 4(a²+2a) = 4, so x = (a+1) ± 1.'),
    dict(q='For which ' + S('k') + ' do ' + S(f'{X2} − 3x + k = 0') + ' and '
           + S(f'{X2} − kx + 3 = 0') + ' share a root?', a=S('k = −4'),
         check=('custom', 'shared_root_k'),
         sol='Subtracting the two equations gives (k − 3)x + (k − 3) = 0, so either '
             'k = 3 or x = −1. At k = 3 the first equation is x² − 3x + 3 = 0 with '
             'D = −3, so it has no real root at all. Putting x = −1 into the first gives '
             '1 + 3 + k = 0, so k = −4; then the equations are x² − 3x − 4 = 0 '
             '(roots −1, 4) and x² + 4x + 3 = 0 (roots −1, −3), sharing −1.'),
    dict(q='Show that ' + S(f'{X2} + bx + c = 0') + ' has two roots of opposite sign '
           'exactly when ' + S('c &lt; 0') + '.', a=S('c &lt; 0'),
         check=('custom', 'opposite_sign_roots'),
         sol='The product of the roots is c. A negative product means one root of each '
             'sign, and that also forces D = b² − 4c > 0, so the roots are real.'),
    dict(q='A number of pupils share ' + S('180') + ' som. If there were ' + S('3')
           + ' fewer, each would get ' + S('3') + ' som more. How many pupils?',
         a=S('15'), check=('custom', 'share_180'),
         sol='180/(n−3) − 180/n = 3 gives n² − 3n − 180 = 0, so n = 15.'),
    dict(q='Solve ' + S(f'{sq("x", 3)} − 3{X2} − x + 3 = 0') + '.',
         a=S('x = 1, −1, 3'),
         check=('solveset', 'Eq(x**3-3*x**2-x+3, 0)', 'FiniteSet(1, -1, 3)'),
         sol='Group: x²(x−3) − (x−3) = (x−3)(x²−1) = (x−3)(x−1)(x+1).'),
    dict(q='The product of the roots of ' + S(f'2{X2} + bx − 6 = 0') + ' is '
           + S('−3') + '. Check this against Vieta.', a=S('−3') + ' — it agrees',
         check=('simp', 'Rational(-6,2)', '-3'),
         sol='The product is c/a = −6/2 = −3, whatever b is. Vieta gives the product '
             'without solving.'),
    dict(q='For which ' + S('a') + ' has ' + S(f'a{X2} − 4x + 1 = 0')
           + ' exactly one root?', a=S('a = 0') + ' or ' + S('a = 4'),
         check=('custom', 'one_root_a'),
         sol='a = 0 makes it linear with one root; a ≠ 0 needs D = 16 − 4a = 0, '
             'so a = 4.'),
    dict(q='Two consecutive even numbers have squares summing to ' + S('340')
           + '. Find them.', a=S('12') + ' and ' + S('14'),
         check=('solveset', 'Eq(x**2+(x+2)**2, 340)', 'FiniteSet(12, -14)'),
         sol='x² + (x+2)² = 340 gives 2x² + 4x − 336 = 0, that is x² + 2x − 168 = 0 '
             'and x = 12 or −14. Both give valid pairs.'),
    dict(q='Solve ' + S(f'{X2} + ' + F(1, X2) + ' = 3') + '.',
         a=S('x = ±' + rt(F('3 + ' + rt(5), 2))) + ' and ' + S('±' + rt(F('3 − ' + rt(5), 2))),
         check=('custom', 'square_plus_recip_three'),
         sol='With t = x²: t + 1/t = 3 gives t² − 3t + 1 = 0 and t = (3 ± √5)/2. '
             'Both are positive, so each gives two values of x — four roots in all.'),
    dict(q='Show that if ' + S('b') + ' and ' + S('c') + ' are odd then '
           + S(f'{X2} + bx + c = 0') + ' has no integer root.',
         a='Parity.', check=('custom', 'odd_no_integer_root'),
         sol='If x is even, x² + bx + c is odd + even... more carefully: x² + bx is even '
             'when x is even and even when x is odd (x² and bx are both odd, and their '
             'sum is even). Adding the odd c leaves an odd number, never 0.'),
    dict(q='Find all integers ' + S('k') + ' for which ' + S(f'{X2} + kx + 36 = 0')
           + ' has two integer roots.',
         a=S('k = ±12, ±13, ±15, ±20, ±37'), check=('custom', 'integer_roots_36'),
         sol='The roots multiply to 36 and add to −k. The factor pairs of 36 — '
             '(1,36), (2,18), (3,12), (4,9), (6,6) and their negatives — give the '
             'sums 37, 20, 15, 13, 12 and their opposites.'),
]

TOPIC = dict(
    key='alg-34', number=34, unit='Unit 5 · Quadratic equations', lessons='77–78',
    title='Revision · Control work 6 — quadratic equations',
    subtitle='Chapter III mixed together, with the four errors the paper produces every '
             'year set as questions of their own.',
    uz='Algebra 8, revision of Chapter III', cam='Cambridge Stage 9 · 4.1',
    keywords=['control work', 'work on mistakes', 'discriminant', 'root', 'reject',
              'check by substitution', 'word problem'],
    remember=[
        'Standard form first; then look for a common factor or an easy factorisation '
        'before reaching for the formula.',
        'Never divide by <span class="m">x</span> — factorise.',
        '<span class="m">x<sup>2</sup> = a</span> gives <span class="m">±√a</span>, '
        'not <span class="m">√a</span> alone.',
        'The formula uses <span class="m">√D</span>, not <span class="m">D</span>.',
        'Check every root against the original: denominators, lengths and counts all '
        'rule some out.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
