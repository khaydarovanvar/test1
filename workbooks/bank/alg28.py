# -*- coding: utf-8 -*-
"""Questions for topic 28 of Grade 8 algebra — incomplete quadratic equations."""

from .common import F, M, rt, sq

S = M
X2 = sq('x')

Q_FOCUS = [
    dict(q='Solve ' + S(f'{X2} − 25 = 0') + '.', a=S('x = ±5'),
         check=('solveset', 'Eq(x**2-25, 0)', 'FiniteSet(-5, 5)')),
    dict(q='Solve ' + S(f'{X2} = 49') + '.', a=S('x = ±7'),
         check=('solveset', 'Eq(x**2, 49)', 'FiniteSet(-7, 7)')),
    dict(q='Solve ' + S(f'{X2} + 3x = 0') + '.', a=S('x = 0') + ' or ' + S('x = −3'),
         check=('solveset', 'Eq(x**2+3*x, 0)', 'FiniteSet(0, -3)')),
    dict(q='Solve ' + S(f'2{X2} − 18 = 0') + '.', a=S('x = ±3'),
         check=('solveset', 'Eq(2*x**2-18, 0)', 'FiniteSet(-3, 3)')),
    dict(q='Solve ' + S(f'{X2} = 0') + '.', a=S('x = 0'),
         check=('solveset', 'Eq(x**2, 0)', 'FiniteSet(0)')),
    dict(q='Solve ' + S(f'5{X2} = 0') + '.', a=S('x = 0'),
         check=('solveset', 'Eq(5*x**2, 0)', 'FiniteSet(0)')),
    dict(q='Solve ' + S(f'{X2} − x = 0') + '.', a=S('x = 0') + ' or ' + S('x = 1'),
         check=('solveset', 'Eq(x**2-x, 0)', 'FiniteSet(0, 1)')),
    dict(q='Solve ' + S(f'3{X2} = 27') + '.', a=S('x = ±3'),
         check=('solveset', 'Eq(3*x**2, 27)', 'FiniteSet(-3, 3)')),
    dict(q='Solve ' + S(f'{X2} + 4 = 0') + '.', a='No real roots.',
         check=('solveset', 'Eq(x**2+4, 0)', 'S.EmptySet')),
    dict(q='Solve ' + S(f'4{X2} − 1 = 0') + '.', a=S('x = ±' + F(1, 2)),
         check=('solveset', 'Eq(4*x**2-1, 0)',
                'FiniteSet(Rational(-1,2), Rational(1,2))')),
]

Q_PRACTICE = [
    dict(q='Solve ' + S(f'2{X2} − 50 = 0') + '.', a=S('x = ±5'),
         check=('solveset', 'Eq(2*x**2-50, 0)', 'FiniteSet(-5, 5)')),
    dict(q='Solve ' + S(f'{X2} + 7x = 0') + '.', a=S('x = 0') + ' or ' + S('x = −7'),
         check=('solveset', 'Eq(x**2+7*x, 0)', 'FiniteSet(0, -7)')),
    dict(q='Solve ' + S(f'3{X2} − 12x = 0') + '.', a=S('x = 0') + ' or ' + S('x = 4'),
         check=('solveset', 'Eq(3*x**2-12*x, 0)', 'FiniteSet(0, 4)')),
    dict(q='Solve ' + S(f'9{X2} = 16') + '.', a=S('x = ±' + F(4, 3)),
         check=('solveset', 'Eq(9*x**2, 16)',
                'FiniteSet(Rational(-4,3), Rational(4,3))')),
    dict(q='Solve ' + S(f'{X2} + 9 = 0') + '.', a='No real roots.',
         check=('solveset', 'Eq(x**2+9, 0)', 'S.EmptySet')),
    dict(q='Solve ' + S(f'5{X2} − 20 = 0') + '.', a=S('x = ±2'),
         check=('solveset', 'Eq(5*x**2-20, 0)', 'FiniteSet(-2, 2)')),
    dict(q='Solve ' + S(f'7{X2} + 14x = 0') + '.', a=S('x = 0') + ' or ' + S('x = −2'),
         check=('solveset', 'Eq(7*x**2+14*x, 0)', 'FiniteSet(0, -2)')),
    dict(q='Solve ' + S(F(X2, 4) + ' = 9') + '.', a=S('x = ±6'),
         check=('solveset', 'Eq(x**2/4, 9)', 'FiniteSet(-6, 6)')),
    dict(q='Solve ' + S(f'−2{X2} + 8 = 0') + '.', a=S('x = ±2'),
         check=('solveset', 'Eq(-2*x**2+8, 0)', 'FiniteSet(-2, 2)')),
    dict(q='Solve ' + S(f'6{X2} − x = 0') + '.', a=S('x = 0') + ' or ' + S('x = ' + F(1, 6)),
         check=('solveset', 'Eq(6*x**2-x, 0)', 'FiniteSet(0, Rational(1,6))')),
]

Q_CHALLENGE = [
    dict(q='Solve ' + S('(x − 1)<sup>2</sup> = 9') + '.',
         a=S('x = 4') + ' or ' + S('x = −2'),
         check=('solveset', 'Eq((x-1)**2, 9)', 'FiniteSet(4, -2)')),
    dict(q='Solve ' + S('2(x + 3)<sup>2</sup> = 8') + '.',
         a=S('x = −1') + ' or ' + S('x = −5'),
         check=('solveset', 'Eq(2*(x+3)**2, 8)', 'FiniteSet(-1, -5)')),
    dict(q='Solve ' + S(f'{X2} − 2 = 0') + '.', a=S('x = ±' + rt(2)),
         check=('solveset', 'Eq(x**2-2, 0)', 'FiniteSet(-sqrt(2), sqrt(2))')),
    dict(q='Solve ' + S(f'3{X2} − 5 = 0') + '.', a=S('x = ±' + rt(F(5, 3))),
         check=('solveset', 'Eq(3*x**2-5, 0)',
                'FiniteSet(-sqrt(Rational(5,3)), sqrt(Rational(5,3)))')),
    dict(q='Solve ' + S('x(2x − 6) = 0') + '.', a=S('x = 0') + ' or ' + S('x = 3'),
         check=('solveset', 'Eq(x*(2*x-6), 0)', 'FiniteSet(0, 3)')),
    dict(q='Solve ' + S('(3x − 2)<sup>2</sup> = 0') + '.', a=S('x = ' + F(2, 3)),
         check=('solveset', 'Eq((3*x-2)**2, 0)', 'FiniteSet(Rational(2,3))')),
    dict(q='Find the common root of ' + S(f'{X2} + 5x = 0') + ' and '
           + S(f'{X2} − 25 = 0') + '.', a=S('x = −5'),
         check=('custom', 'common_root_minus_five')),
    dict(q='Solve ' + S(f'4{X2} = 9x') + '.', a=S('x = 0') + ' or ' + S('x = ' + F(9, 4)),
         check=('solveset', 'Eq(4*x**2, 9*x)', 'FiniteSet(0, Rational(9,4))')),
    dict(q='Solve ' + S('(2x + 1)<sup>2</sup> = 25') + '.',
         a=S('x = 2') + ' or ' + S('x = −3'),
         check=('solveset', 'Eq((2*x+1)**2, 25)', 'FiniteSet(2, -3)')),
    dict(q='Solve ' + S(f'5{X2} + 3x = 0') + '.',
         a=S('x = 0') + ' or ' + S('x = −' + F(3, 5)),
         check=('solveset', 'Eq(5*x**2+3*x, 0)', 'FiniteSet(0, Rational(-3,5))')),
]

Q_BEYOND = [
    dict(q='Explain why ' + S(f'{X2} = a') + ' has two roots when ' + S('a &gt; 0')
           + ', one when ' + S('a = 0') + ' and none when ' + S('a &lt; 0') + '.',
         a='A square is never negative.', check=('custom', 'square_equals_a'),
         sol='For a > 0 the two roots ±√a are distinct; at a = 0 they coincide at 0; '
             'for a < 0 no real square is negative.'),
    dict(q='Solve ' + S(f'{sq("x", 4)} = 16') + ' over the real numbers.', a=S('x = ±2'),
         check=('solveset', 'Eq(x**4, 16)', 'FiniteSet(-2, 2)'),
         sol='x⁴ = 16 gives x² = 4 (x² = −4 is impossible), so x = ±2. '
             'A fourth power has only two real fourth roots, not four.'),
    dict(q='Solve ' + S(f'{sq("x", 3)} = 4x') + '.', a=S('x = 0, ±2'),
         check=('solveset', 'Eq(x**3, 4*x)', 'FiniteSet(-2, 0, 2)'),
         sol='x³ − 4x = x(x−2)(x+2) = 0. Dividing by x first would lose the root 0 — '
             'the standard trap of this topic.'),
    dict(q='Solve ' + S(f'{X2}(x − 1) = 0') + '.', a=S('x = 0') + ' or ' + S('x = 1'),
         check=('solveset', 'Eq(x**2*(x-1), 0)', 'FiniteSet(0, 1)'),
         sol='The factor x² gives the root 0 (twice, as a repeated root) and the other '
             'factor gives 1.'),
    dict(q='Show that ' + S(f'a{X2} + bx = 0') + ' always has the root ' + S('x = 0')
           + '.', a='Take out the common factor ' + S('x'),
         check=('custom', 'always_root_zero'),
         sol='x(ax + b) = 0, so x = 0 is always one root and x = −b/a the other '
             '(they coincide when b = 0).'),
    dict(q='Find ' + S('a') + ' so that ' + S(f'a{X2} − 12 = 0') + ' has roots '
           + S('±2') + '.', a=S('a = 3'), check=('custom', 'find_a_roots_two'),
         sol='Substituting x = 2 gives 4a = 12, so a = 3. Then 3x² = 12 and x² = 4.'),
    dict(q='Solve ' + S(f'({X2} − 4)({X2} + 4) = 0') + '.', a=S('x = ±2'),
         check=('solveset', 'Eq((x**2-4)*(x**2+4), 0)', 'FiniteSet(-2, 2)'),
         sol='Only the first factor can vanish over the reals; x² + 4 is always at '
             'least 4.'),
    dict(q='Solve ' + S(f'{X2} = |x|') + '.', a=S('x = 0, ±1'),
         check=('solveset', 'Eq(x**2, Abs(x))', 'FiniteSet(-1, 0, 1)'),
         sol='With t = |x| ≥ 0 the equation is t² = t, so t = 0 or 1, giving x = 0 '
             'and x = ±1.'),
    dict(q='Find the common root of ' + S(f'{X2} − 9 = 0') + ' and '
           + S(f'{X2} + 2x − 3 = 0') + '.', a=S('x = −3'),
         check=('custom', 'common_root_minus_three'),
         sol='The first gives ±3, the second (x+3)(x−1) gives −3 and 1. '
             'Only −3 appears in both.'),
    dict(q='Solve ' + S(f'2{X2} = 3x') + '.', a=S('x = 0') + ' or ' + S('x = ' + F(3, 2)),
         check=('solveset', 'Eq(2*x**2, 3*x)', 'FiniteSet(0, Rational(3,2))'),
         sol='x(2x − 3) = 0. Again, do not cancel the x.'),
    dict(q='Solve ' + S(f'{X2} + x' + rt(3) + ' = 0') + '.',
         a=S('x = 0') + ' or ' + S('x = −' + rt(3)),
         check=('solveset', 'Eq(x**2 + x*sqrt(3), 0)', 'FiniteSet(0, -sqrt(3))'),
         sol='x(x + √3) = 0. An irrational coefficient changes nothing about the method.'),
    dict(q='Find ' + S('k') + ' so that ' + S(f'k{X2} − 16 = 0') + ' has roots '
           + S('±4') + '.', a=S('k = 1'), check=('custom', 'find_k_roots_four'),
         sol='16k = 16, so k = 1. For any other k the roots are ±4/√k.'),
    dict(q='Solve ' + S('(x − a)<sup>2</sup> = ' + sq('b')) + '.',
         a=S('x = a ± b'), check=('custom', 'solve_shifted_square'),
         sol='Taking roots gives x − a = ±b. Writing only the positive root is the '
             'commonest way to lose half the answer.'),
    dict(q='Show that ' + S(f'{X2} + c = 0') + ' has no real root when ' + S('c &gt; 0')
           + '.', a=S(f'{X2} = −c &lt; 0'), check=('custom', 'no_root_positive_c'),
         sol='The equation says x² = −c, which is negative, and no real square is '
             'negative.'),
    dict(q='Solve ' + S(f'{sq("x", 6)} = {sq("x", 4)}') + '.', a=S('x = 0, ±1'),
         check=('solveset', 'Eq(x**6, x**4)', 'FiniteSet(-1, 0, 1)'),
         sol='x⁴(x² − 1) = 0, so x = 0 or x = ±1. Dividing by x⁴ would again lose the '
             'root 0.'),
]

TOPIC = dict(
    key='alg-28', number=28, unit='Unit 5 · Quadratic equations', lessons='64–65',
    title='Incomplete quadratic equations',
    subtitle='When b or c is zero the formula is unnecessary — three short methods that '
             'are quicker and safer.',
    uz='Algebra 8, Chapter III §21, pp. 129–133', cam='Cambridge Stage 9 · beyond',
    keywords=['incomplete quadratic equation', 'common factor', 'take the square root',
              'two opposite roots', 'lose a root', 'no real roots', 'zero root'],
    remember=[
        '<span class="m">ax<sup>2</sup> + c = 0</span>: make '
        '<span class="m">x<sup>2</sup></span> the subject and take <b>both</b> roots.',
        '<span class="m">ax<sup>2</sup> + bx = 0</span>: take out '
        '<span class="m">x</span>. One root is always <span class="m">0</span>.',
        'Never divide an equation by <span class="m">x</span> — it deletes the root '
        '<span class="m">x = 0</span>.',
        '<span class="m">x<sup>2</sup> = a</span> has no real root when '
        '<span class="m">a &lt; 0</span>.',
        'Writing <span class="m">x = √a</span> alone loses the negative root; write '
        '<span class="m">x = ±√a</span>.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
