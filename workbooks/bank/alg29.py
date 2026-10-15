# -*- coding: utf-8 -*-
"""Questions for topic 29 of Grade 8 algebra — the quadratic formula."""

from .common import F, M, rt, sq

S = M
X2 = sq('x')
D = 'D = ' + sq('b') + ' − 4ac'

Q_FOCUS = [
    dict(q='Find the discriminant of ' + S(f'{X2} − 5x + 6 = 0') + '.', a=S('1'),
         check=('simp', '25-24', '1')),
    dict(q='Find the discriminant of ' + S(f'{X2} + 2x + 1 = 0') + '.', a=S('0'),
         check=('simp', '4-4', '0')),
    dict(q='Find the discriminant of ' + S(f'{X2} + x + 1 = 0') + '.', a=S('−3'),
         check=('simp', '1-4', '-3')),
    dict(q='How many real roots when ' + S('D &gt; 0') + '?', a=S('2'), check=None),
    dict(q='How many real roots when ' + S('D = 0') + '?', a=S('1') + ' (repeated)',
         check=None),
    dict(q='How many real roots when ' + S('D &lt; 0') + '?', a='None.', check=None),
    dict(q='Solve ' + S(f'{X2} − 5x + 6 = 0') + ' with the formula.',
         a=S('x = 2') + ' or ' + S('x = 3'),
         check=('solveset', 'Eq(x**2-5*x+6, 0)', 'FiniteSet(2, 3)')),
    dict(q='Solve ' + S(f'{X2} − 4x + 4 = 0') + '.', a=S('x = 2'),
         check=('solveset', 'Eq(x**2-4*x+4, 0)', 'FiniteSet(2)')),
    dict(q='Solve ' + S(f'{X2} + x + 1 = 0') + '.', a='No real roots.',
         check=('solveset', 'Eq(x**2+x+1, 0)', 'S.EmptySet')),
    dict(q='Write the quadratic formula.',
         a=S('x = ' + F('−b ± ' + rt(sq('b') + ' − 4ac'), '2a')), check=None),
]

Q_PRACTICE = [
    dict(q='Find ' + S('D') + ' for ' + S(f'2{X2} − 3x − 2 = 0') + '.', a=S('25'),
         check=('simp', '9+16', '25')),
    dict(q='Solve ' + S(f'2{X2} − 3x − 2 = 0') + '.',
         a=S('x = 2') + ' or ' + S('x = −' + F(1, 2)),
         check=('solveset', 'Eq(2*x**2-3*x-2, 0)', 'FiniteSet(2, Rational(-1,2))')),
    dict(q='Find ' + S('D') + ' for ' + S(f'3{X2} + 4x + 1 = 0') + '.', a=S('4'),
         check=('simp', '16-12', '4')),
    dict(q='Solve ' + S(f'3{X2} + 4x + 1 = 0') + '.',
         a=S('x = −' + F(1, 3)) + ' or ' + S('x = −1'),
         check=('solveset', 'Eq(3*x**2+4*x+1, 0)', 'FiniteSet(Rational(-1,3), -1)')),
    dict(q='Find ' + S('D') + ' for ' + S(f'{X2} − 6x + 9 = 0') + '.', a=S('0'),
         check=('simp', '36-36', '0')),
    dict(q='Solve ' + S(f'{X2} − 2x − 1 = 0') + '.', a=S('x = 1 ± ' + rt(2)),
         check=('solveset', 'Eq(x**2-2*x-1, 0)',
                'FiniteSet(1+sqrt(2), 1-sqrt(2))')),
    dict(q='Find ' + S('D') + ' for ' + S(f'{X2} + 3x + 5 = 0') + '.', a=S('−11'),
         check=('simp', '9-20', '-11')),
    dict(q='Solve ' + S(f'4{X2} − 4x + 1 = 0') + '.', a=S('x = ' + F(1, 2)),
         check=('solveset', 'Eq(4*x**2-4*x+1, 0)', 'FiniteSet(Rational(1,2))')),
    dict(q='Solve ' + S(f'{X2} + 4x + 1 = 0') + '.', a=S('x = −2 ± ' + rt(3)),
         check=('solveset', 'Eq(x**2+4*x+1, 0)',
                'FiniteSet(-2+sqrt(3), -2-sqrt(3))')),
    dict(q='Find ' + S('D') + ' for ' + S(f'{X2} + kx + 4 = 0') + '.',
         a=S(sq('k') + ' − 16'), check=('simp', 'k**2-16', 'k**2-16')),
]

Q_CHALLENGE = [
    dict(q='For which ' + S('k') + ' has ' + S(f'{X2} + kx + 4 = 0')
           + ' two distinct roots?', a=S('k &lt; −4') + ' or ' + S('k &gt; 4'),
         check=('solveset', 'k**2 - 16 > 0',
                'Union(Interval.open(-oo,-4), Interval.open(4,oo))', 'k')),
    dict(q='For which ' + S('k') + ' has ' + S(f'{X2} + kx + 4 = 0')
           + ' no real root?', a=S('−4 &lt; k &lt; 4'),
         check=('solveset', 'k**2 - 16 < 0', 'Interval.open(-4, 4)', 'k')),
    dict(q='Solve ' + S(f'2{X2} + 5x − 3 = 0') + '.',
         a=S('x = ' + F(1, 2)) + ' or ' + S('x = −3'),
         check=('solveset', 'Eq(2*x**2+5*x-3, 0)', 'FiniteSet(Rational(1,2), -3)')),
    dict(q='Solve ' + S(f'3{X2} − 2x − 1 = 0') + '.',
         a=S('x = 1') + ' or ' + S('x = −' + F(1, 3)),
         check=('solveset', 'Eq(3*x**2-2*x-1, 0)', 'FiniteSet(1, Rational(-1,3))')),
    dict(q='Solve ' + S(f'{X2} − x − 1 = 0') + '.',
         a=S('x = ' + F('1 ± ' + rt(5), 2)),
         check=('solveset', 'Eq(x**2-x-1, 0)',
                'FiniteSet((1+sqrt(5))/2, (1-sqrt(5))/2)')),
    dict(q='For which ' + S('m') + ' has ' + S(f'm{X2} + 4x + 1 = 0')
           + ' a repeated root?', a=S('m = 4'), check=('custom', 'repeated_root_m')),
    dict(q='Solve ' + S(f'5{X2} − 2x − 3 = 0') + '.',
         a=S('x = 1') + ' or ' + S('x = −' + F(3, 5)),
         check=('solveset', 'Eq(5*x**2-2*x-3, 0)', 'FiniteSet(1, Rational(-3,5))')),
    dict(q='Solve ' + S(f'{X2} + 2' + rt(2) + 'x + 2 = 0') + '.', a=S('x = −' + rt(2)),
         check=('solveset', 'Eq(x**2+2*sqrt(2)*x+2, 0)', 'FiniteSet(-sqrt(2))')),
    dict(q='Show that ' + S(f'{X2} + 2bx + ' + sq('b') + ' = 0')
           + ' always has a repeated root.', a=S('D = 0'),
         check=('custom', 'perfect_square_discriminant')),
    dict(q='Solve ' + S(f'6{X2} − 5x + 1 = 0') + '.',
         a=S('x = ' + F(1, 2)) + ' or ' + S('x = ' + F(1, 3)),
         check=('solveset', 'Eq(6*x**2-5*x+1, 0)',
                'FiniteSet(Rational(1,2), Rational(1,3))')),
]

Q_BEYOND = [
    dict(q='Derive the quadratic formula by completing the square.',
         a=S('x = ' + F('−b ± ' + rt(sq('b') + ' − 4ac'), '2a')),
         check=('custom', 'derive_formula'),
         sol='Divide by a, then x² + (b/a)x = −c/a. Add (b/2a)² to both sides: '
             '(x + b/2a)² = (b² − 4ac)/(4a²). Taking roots and subtracting b/2a gives '
             'the formula.'),
    dict(q='For which ' + S('k') + ' has ' + S(f'k{X2} + 2x + 1 = 0')
           + ' exactly one root?', a=S('k = 0') + ' or ' + S('k = 1'),
         check=('custom', 'exactly_one_root_k'),
         sol='Two separate cases. If k = 0 the equation is linear, 2x + 1 = 0, with one '
             'root. If k ≠ 0 it is quadratic with a repeated root when 4 − 4k = 0, '
             'that is k = 1.'),
    dict(q='Show that for integer coefficients the roots are rational exactly when '
           + S('D') + ' is a perfect square.', a=S(rt('D')) + ' must be rational',
         check=('custom', 'rational_roots_square'),
         sol='The roots are (−b ± √D)/(2a). With a, b integers this is rational exactly '
             'when √D is, and the square root of a whole number is rational only when '
             'that number is a perfect square.'),
    dict(q='Solve ' + S(f'{X2} − 2ax + ' + sq('a') + ' − ' + sq('b') + ' = 0') + '.',
         a=S('x = a ± b'), check=('custom', 'solve_a_b_square'),
         sol='The discriminant is 4a² − 4(a² − b²) = 4b², a perfect square, so '
             'x = (2a ± 2b)/2 = a ± b. Or notice the left side is (x−a)² − b².'),
    dict(q='Prove that the sum of the roots is ' + S('−' + F('b', 'a')) + '.',
         a=S('−' + F('b', 'a')), check=('custom', 'sum_of_roots'),
         sol='Adding (−b+√D)/(2a) and (−b−√D)/(2a), the surds cancel and −2b/(2a) is '
             'left.'),
    dict(q='Prove that the product of the roots is ' + S(F('c', 'a')) + '.',
         a=S(F('c', 'a')), check=('custom', 'product_of_roots'),
         sol='The product is (b² − D)/(4a²) = (b² − b² + 4ac)/(4a²) = c/a — '
             'a difference of two squares doing the work.'),
    dict(q='One root of ' + S(f'{X2} + px + q = 0') + ' is twice the other. '
           'Find a relation between ' + S('p') + ' and ' + S('q') + '.',
         a=S('2' + sq('p') + ' = 9q'), check=('custom', 'root_twice_other'),
         sol='Let the roots be r and 2r. Then 3r = −p and 2r² = q. '
             'Eliminating r: r = −p/3, so q = 2p²/9, that is 2p² = 9q.'),
    dict(q='For which ' + S('k') + ' are the roots of ' + S(f'{X2} − kx + 9 = 0')
           + ' equal?', a=S('k = ±6'), check=('custom', 'repeated_root_k'),
         sol='D = k² − 36 = 0 gives k = ±6, and the repeated root is then ±3.'),
    dict(q='Use the discriminant to show ' + S(f'{X2} + x + 1 &gt; 0')
           + ' for every real ' + S('x') + '.', a=S('D = −3 &lt; 0'),
         check=('nonneg', 'x**2 + x + 1'),
         sol='The parabola never crosses the axis (D < 0) and opens upwards, so it stays '
             'above it. Completing the square gives (x + ½)² + ¾ ≥ ¾.'),
    dict(q='Solve ' + S('(x − 1)<sup>2</sup> = 2(x − 1) + 3') + '.',
         a=S('x = 4') + ' or ' + S('x = 0'),
         check=('solveset', 'Eq((x-1)**2, 2*(x-1)+3)', 'FiniteSet(4, 0)'),
         sol='Put t = x − 1: t² − 2t − 3 = 0, so t = 3 or t = −1 and x = 4 or x = 0. '
             'Substituting is quicker than expanding.'),
    dict(q='How many real roots has ' + S(f'{sq("x", 4)} + {X2} + 1 = 0') + '?',
         a='None.', check=('solveset', 'Eq(x**4+x**2+1, 0)', 'S.EmptySet'),
         sol='With t = x² ≥ 0 the equation is t² + t + 1 = 0, whose discriminant is −3. '
             'Even if it had roots, they would have to be non-negative.'),
    dict(q='Show that when ' + S('D = 0') + ' the repeated root is ' + S('−' + F('b', '2a'))
           + '.', a=S('−' + F('b', '2a')), check=('custom', 'repeated_root_value'),
         sol='The formula becomes (−b ± 0)/(2a). The parabola touches the axis at its '
             'vertex, whose x-coordinate is always −b/2a.'),
    dict(q='Solve ' + S(f'{X2} − (' + rt(2) + ' + ' + rt(3) + ')x + ' + rt(6) + ' = 0')
           + '.', a=S('x = ' + rt(2)) + ' or ' + S('x = ' + rt(3)),
         check=('solveset', 'Eq(x**2-(sqrt(2)+sqrt(3))*x+sqrt(6), 0)',
                'FiniteSet(sqrt(2), sqrt(3))'),
         sol='The sum of the roots is √2 + √3 and the product is √6 = √2·√3. '
             'Vieta identifies the roots by inspection.'),
    dict(q='Solve ' + S(f'{X2} = x + 1') + ', the golden ratio equation.',
         a=S('x = ' + F('1 ± ' + rt(5), 2)),
         check=('solveset', 'Eq(x**2, x+1)',
                'FiniteSet((1+sqrt(5))/2, (1-sqrt(5))/2)'),
         sol='x² − x − 1 = 0 gives (1 ± √5)/2. The positive root, about 1.618, is the '
             'golden ratio φ, the only positive number with φ² = φ + 1.'),
    dict(q='For which ' + S('c') + ' does ' + S(f'{X2} − 6x + c = 0')
           + ' have two roots whose difference is ' + S('4') + '?', a=S('c = 5'),
         check=('custom', 'roots_differ_by_four'),
         sol='Sum 6 and difference 4 give roots 5 and 1, so c = 5·1 = 5. '
             'Equivalently √D = 4, so 36 − 4c = 16.'),
]

TOPIC = dict(
    key='alg-29', number=29, unit='Unit 5 · Quadratic equations', lessons='66–67',
    title='The quadratic formula and the discriminant',
    subtitle='One formula that solves every quadratic — and one number inside it that '
             'says in advance how many roots there will be.',
    uz='Algebra 8, Chapter III §22, pp. 134–140', cam='Cambridge Stage 9 · beyond',
    keywords=['discriminant', 'quadratic formula', 'two distinct roots', 'repeated root',
              'no real roots', 'substitute', 'simplify the surd', 'exact answer'],
    remember=[
        'The formula: <span class="m">x = (−b ± √(b<sup>2</sup> − 4ac)) / 2a</span>, '
        'used only after the equation is in standard form.',
        'The discriminant <span class="m">D = b<sup>2</sup> − 4ac</span> decides: '
        'two roots, one, or none.',
        'Work out <span class="m">D</span> first — it is a check on the arithmetic and '
        'it tells you what to expect.',
        'Watch the signs of <span class="m">b</span> and <span class="m">c</span>; '
        '<span class="m">−4ac</span> is positive when <span class="m">c</span> is '
        'negative.',
        'Leave surds exact unless a decimal is asked for.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
