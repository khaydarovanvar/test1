# -*- coding: utf-8 -*-
"""Questions for topic 31 of Grade 8 algebra — biquadratic and reducible equations."""

from .common import F, M, rt, sq

S = M
X2, X4 = sq('x'), sq('x', 4)

Q_FOCUS = [
    dict(q='Solve ' + S(f'{X4} − 5{X2} + 4 = 0') + '.', a=S('x = ±1, ±2'),
         check=('solveset', 'Eq(x**4-5*x**2+4, 0)', 'FiniteSet(-2,-1,1,2)')),
    dict(q='Solve ' + S(f'{X4} − 13{X2} + 36 = 0') + '.', a=S('x = ±2, ±3'),
         check=('solveset', 'Eq(x**4-13*x**2+36, 0)', 'FiniteSet(-3,-2,2,3)')),
    dict(q='Solve ' + S(f'{X4} − 16 = 0') + '.', a=S('x = ±2'),
         check=('solveset', 'Eq(x**4-16, 0)', 'FiniteSet(-2, 2)')),
    dict(q='Solve ' + S(f'{X4} − {X2} = 0') + '.', a=S('x = 0, ±1'),
         check=('solveset', 'Eq(x**4-x**2, 0)', 'FiniteSet(-1, 0, 1)')),
    dict(q='Solve ' + S(f'{X4} + 3{X2} = 0') + '.', a=S('x = 0'),
         check=('solveset', 'Eq(x**4+3*x**2, 0)', 'FiniteSet(0)')),
    dict(q='Solve ' + S(f'{X4} + {X2} + 1 = 0') + '.', a='No real roots.',
         check=('solveset', 'Eq(x**4+x**2+1, 0)', 'S.EmptySet')),
    dict(q='With ' + S(f't = {X2}') + ', write ' + S(f'{X4} − 7{X2} + 12 = 0')
           + ' in ' + S('t') + '.', a=S(sq('t') + ' − 7t + 12 = 0'),
         check=('solveset', 'Eq(x**4-7*x**2+12, 0)',
                'FiniteSet(-sqrt(3), sqrt(3), -2, 2)')),
    dict(q='Solve ' + S(f'{X4} = 81') + '.', a=S('x = ±3'),
         check=('solveset', 'Eq(x**4, 81)', 'FiniteSet(-3, 3)')),
    dict(q='Solve ' + S(f'{X4} − 2{X2} + 1 = 0') + '.', a=S('x = ±1'),
         check=('solveset', 'Eq(x**4-2*x**2+1, 0)', 'FiniteSet(-1, 1)')),
    dict(q='Why is ' + S(f't = {X2} = −4') + ' rejected?', a='A square is never negative.',
         check=None),
]

Q_PRACTICE = [
    dict(q='Solve ' + S(f'{X4} − 10{X2} + 9 = 0') + '.', a=S('x = ±1, ±3'),
         check=('solveset', 'Eq(x**4-10*x**2+9, 0)', 'FiniteSet(-3,-1,1,3)')),
    dict(q='Solve ' + S(f'{X4} − 3{X2} − 4 = 0') + '.', a=S('x = ±2'),
         check=('solveset', 'Eq(x**4-3*x**2-4, 0)', 'FiniteSet(-2, 2)')),
    dict(q='Solve ' + S(f'4{X4} − 5{X2} + 1 = 0') + '.', a=S('x = ±1, ±' + F(1, 2)),
         check=('solveset', 'Eq(4*x**4-5*x**2+1, 0)',
                'FiniteSet(-1, 1, Rational(-1,2), Rational(1,2))')),
    dict(q='Solve ' + S(f'{X4} + 4{X2} − 5 = 0') + '.', a=S('x = ±1'),
         check=('solveset', 'Eq(x**4+4*x**2-5, 0)', 'FiniteSet(-1, 1)')),
    dict(q='Solve ' + S(f'9{X4} − 10{X2} + 1 = 0') + '.', a=S('x = ±1, ±' + F(1, 3)),
         check=('solveset', 'Eq(9*x**4-10*x**2+1, 0)',
                'FiniteSet(-1, 1, Rational(-1,3), Rational(1,3))')),
    dict(q='Solve ' + S(f'{X4} − 5{X2} + 6 = 0') + '.',
         a=S('x = ±' + rt(2) + ', ±' + rt(3)),
         check=('solveset', 'Eq(x**4-5*x**2+6, 0)',
                'FiniteSet(-sqrt(2), sqrt(2), -sqrt(3), sqrt(3))')),
    dict(q='Solve ' + S(F(1, 'x') + ' + ' + F(1, 'x + 1') + ' = ' + F(5, 6)) + '.',
         a=S('x = 2') + ' or ' + S('x = −' + F(3, 5)),
         check=('solveset', 'Eq(1/x + 1/(x+1), Rational(5,6))',
                'FiniteSet(2, Rational(-3,5))')),
    dict(q='Solve ' + S(F('x', 'x − 1') + ' + ' + F('x − 1', 'x') + ' = ' + F(5, 2)) + '.',
         a=S('x = 2') + ' or ' + S('x = −1'),
         check=('solveset', 'Eq(x/(x-1) + (x-1)/x, Rational(5,2))',
                'FiniteSet(2, -1)')),
    dict(q='Solve ' + S(f'{X4} = 4{X2}') + '.', a=S('x = 0, ±2'),
         check=('solveset', 'Eq(x**4, 4*x**2)', 'FiniteSet(-2, 0, 2)')),
    dict(q='Solve ' + S(f'2{X4} − 32 = 0') + '.', a=S('x = ±2'),
         check=('solveset', 'Eq(2*x**4-32, 0)', 'FiniteSet(-2, 2)')),
]

Q_CHALLENGE = [
    dict(q='Solve ' + S(F(6, 'x') + ' − ' + F(6, 'x + 1') + ' = 1') + '.',
         a=S('x = 2') + ' or ' + S('x = −3'),
         check=('solveset', 'Eq(6/x - 6/(x+1), 1)', 'FiniteSet(2, -3)')),
    dict(q='Solve ' + S(f'({X2} − 1)<sup>2</sup> − 4({X2} − 1) + 3 = 0') + '.',
         a=S('x = ±' + rt(2) + ', ±2'),
         check=('solveset', 'Eq((x**2-1)**2 - 4*(x**2-1) + 3, 0)',
                'FiniteSet(-sqrt(2), sqrt(2), -2, 2)')),
    dict(q='Solve ' + S(F('x + 1', 'x') + ' + ' + F('x', 'x + 1') + ' = ' + F(13, 6))
           + '.', a=S('x = 2') + ' or ' + S('x = −3'),
         check=('solveset', 'Eq((x+1)/x + x/(x+1), Rational(13,6))',
                'FiniteSet(2, -3)')),
    dict(q='Solve ' + S(f'{X4} − 6{X2} + 8 = 0') + '.',
         a=S('x = ±' + rt(2) + ', ±2'),
         check=('solveset', 'Eq(x**4-6*x**2+8, 0)',
                'FiniteSet(-sqrt(2), sqrt(2), -2, 2)')),
    dict(q='Solve ' + S(F(1, 'x − 1') + ' + ' + F(1, 'x + 1') + ' = 1') + '.',
         a=S('x = 1 ± ' + rt(2)),
         check=('solveset', 'Eq(1/(x-1) + 1/(x+1), 1)',
                'FiniteSet(1+sqrt(2), 1-sqrt(2))')),
    dict(q='Solve ' + S(f'{X2} + ' + F(1, X2) + ' = ' + F(17, 4)) + '.',
         a=S('x = ±2, ±' + F(1, 2)),
         check=('solveset', 'Eq(x**2 + 1/x**2, Rational(17,4))',
                'FiniteSet(-2, 2, Rational(-1,2), Rational(1,2))')),
    dict(q='Solve ' + S(f'(x + ' + F(1, 'x') + ')<sup>2</sup> − 3(x + ' + F(1, 'x')
                        + ') + 2 = 0') + '.', a=S('x = 1'),
         check=('solveset', 'Eq((x+1/x)**2 - 3*(x+1/x) + 2, 0)', 'FiniteSet(1)')),
    dict(q='Solve ' + S(f'{sq("x", 6)} − 9{sq("x", 3)} + 8 = 0') + '.',
         a=S('x = 1') + ' or ' + S('x = 2'),
         check=('solveset', 'Eq(x**6-9*x**3+8, 0)', 'FiniteSet(1, 2)')),
    dict(q='Solve ' + S(F('2x', 'x + 1') + ' − ' + F('x + 1', 'x') + ' = 0') + '.',
         a=S('x = 1 ± ' + rt(2)),
         check=('solveset', 'Eq(2*x/(x+1) - (x+1)/x, 0)',
                'FiniteSet(1+sqrt(2), 1-sqrt(2))')),
    dict(q='Solve ' + S(f'{X4} + 2{X2} − 3 = 0') + '.', a=S('x = ±1'),
         check=('solveset', 'Eq(x**4+2*x**2-3, 0)', 'FiniteSet(-1, 1)')),
]

Q_BEYOND = [
    dict(q='How many real roots can a biquadratic equation have? Give an example of '
           'each case.', a=S('0, 1, 2, 3') + ' or ' + S('4'),
         check=('custom', 'biquadratic_root_counts'),
         sol='Each positive t gives two roots, t = 0 gives one and negative t none. '
             'So 0 (x⁴+1=0), 1 (x⁴=0), 2 (x⁴=1), 3 (x⁴−x²=0) and 4 (x⁴−5x²+4=0) '
             'are all possible.'),
    dict(q='Solve ' + S(f'{X4} − (a + b){X2} + ab = 0') + ' for ' + S('a, b &gt; 0')
           + '.', a=S('x = ±' + rt('a') + ', ±' + rt('b')),
         check=('custom', 'biquadratic_general'),
         sol='In t the equation is (t−a)(t−b) = 0, so x² = a or b and each positive '
             'value gives two roots.'),
    dict(q='Solve ' + S(F('x', 'x − 2') + ' + ' + F(2, 'x') + ' = ' + F(5, 2)) + '.',
         a=S('x = 4') + ' or ' + S('x = ' + F(2, 3)),
         check=('solveset', 'Eq(x/(x-2) + 2/x, Rational(5,2))',
                'FiniteSet(4, Rational(2,3))'),
         sol='Multiply by 2x(x−2) and collect: 3x² − 14x + 8 = 0, giving 4 and 2/3. '
             'Both are allowed, since neither makes a denominator zero.'),
    dict(q='Solve ' + S(F(1, 'x') + ' + ' + F(1, 'x − 3') + ' = ' + F(1, 2)) + '.',
         a=S('x = 1') + ' or ' + S('x = 6'),
         check=('solveset', 'Eq(1/x + 1/(x-3), Rational(1,2))', 'FiniteSet(1, 6)'),
         sol='Clearing gives x² − 7x + 6 = 0. Always check the candidates against the '
             'denominators — here 0 and 3 would have been rejected.'),
    dict(q='Why can clearing denominators create a root that does not solve the '
           'original equation?', a='Multiplying by zero.', check=None,
         sol='Multiplying both sides by an expression that is zero at some value adds '
             'that value as a solution of the new equation. Such extraneous roots must '
             'be tested against the original denominators.'),
    dict(q='Solve ' + S(f'{X2} − 5|x| + 6 = 0') + '.', a=S('x = ±2, ±3'),
         check=('solveset', 'Eq(x**2-5*Abs(x)+6, 0)', 'FiniteSet(-3,-2,2,3)'),
         sol='With t = |x| ≥ 0 the equation is t² − 5t + 6 = 0, so t = 2 or 3 and each '
             'gives two values of x. Note x² = |x|², which is what lets the substitution '
             'work.'),
    dict(q='Solve ' + S(f'{X4} − 5{X2} + 4 ≤ 0') + '.',
         a=S('−2 ≤ x ≤ −1') + ' or ' + S('1 ≤ x ≤ 2'),
         check=('solveset', 'x**4-5*x**2+4 <= 0',
                'Union(Interval(-2,-1), Interval(1,2))'),
         sol='In t: (t−1)(t−4) ≤ 0 gives 1 ≤ x² ≤ 4, that is 1 ≤ |x| ≤ 2. '
             'Each side of zero contributes one interval.'),
    dict(q='Solve ' + S(f'(x − 1)(x − 2)(x − 3)(x − 4) = 24') + '.',
         a=S('x = 0') + ' or ' + S('x = 5'),
         check=('custom', 'four_factor_product'),
         sol='Pair the outer and inner factors: (x−1)(x−4) = x²−5x+4 and '
             '(x−2)(x−3) = x²−5x+6. With t = x²−5x, (t+4)(t+6) = 24 gives t² + 10t = 0, '
             'so t = 0 or t = −10. Only t = 0 gives real x, namely 0 and 5.'),
    dict(q='Solve ' + S(f'{X2} + ' + F(1, X2) + ' = x + ' + F(1, 'x')) + '.',
         a=S('x = 1'),
         check=('solveset', 'Eq(x**2 + 1/x**2, x + 1/x)', 'FiniteSet(1)'),
         sol='Put u = x + 1/x, so x² + 1/x² = u² − 2 and the equation is u² − u − 2 = 0, '
             'giving u = 2 or u = −1. Now u = 2 means x + 1/x = 2, so x = 1. '
             'u = −1 means x + 1/x = −1, which has no real solution, since '
             '|x + 1/x| ≥ 2 for every real x ≠ 0.'),
    dict(q='Solve ' + S(f'{sq("x", 3)} − 7{X2} + 7x − 1 = 0') + '.',
         a=S('x = 1') + ' or ' + S('x = 3 ± 2' + rt(2)),
         check=('solveset', 'Eq(x**3-7*x**2+7*x-1, 0)',
                'FiniteSet(1, 3+2*sqrt(2), 3-2*sqrt(2))'),
         sol='The coefficients 1, −7, 7, −1 are palindromic, so x = 1 is a root. '
             'Dividing out gives x² − 6x + 1 = 0.'),
    dict(q='For which ' + S('k') + ' has ' + S(f'{X4} − k{X2} + 4 = 0')
           + ' four distinct real roots?', a=S('k &gt; 4'),
         check=('custom', 'four_distinct_roots'),
         sol='In t the equation needs two distinct positive roots: discriminant '
             'k² − 16 > 0 and sum k > 0 and product 4 > 0. So k > 4.'),
    dict(q='Solve ' + S(F(1, f'{X2} − 1') + ' = ' + F(1, 'x − 1') + ' − 1') + '.',
         a=S('x = ' + F('1 ± ' + rt(5), 2)),
         check=('solveset', 'Eq(1/(x**2-1), 1/(x-1) - 1)',
                'FiniteSet((1+sqrt(5))/2, (1-sqrt(5))/2)'),
         sol='Multiply by (x−1)(x+1): 1 = (x+1) − (x²−1), which collects to '
             'x² − x − 1 = 0 and gives (1 ± √5)/2. Neither value is ±1, so both survive '
             'the denominator check.'),
    dict(q='Solve ' + S(f'{sq("x", 8)} − 17{sq("x", 4)} + 16 = 0') + '.',
         a=S('x = ±1, ±2'),
         check=('solveset', 'Eq(x**8-17*x**4+16, 0)', 'FiniteSet(-2,-1,1,2)'),
         sol='With t = x⁴: t² − 17t + 16 = 0 gives t = 1 or 16, so x⁴ = 1 or 16 and '
             'x = ±1 or ±2. Two substitutions nested inside each other.'),
    dict(q='Solve ' + S(F('x', 'x + 1') + ' + ' + F('x + 1', 'x') + ' = 2') + '.',
         a='No solution.', check=('custom', 'no_solution_reciprocal_pair'),
         sol='With u = x/(x+1) the equation is u + 1/u = 2, so u = 1, that is '
             'x = x + 1 — impossible. The sum of a positive number and its reciprocal '
             'is 2 only when the number is 1.'),
    dict(q='Solve ' + S(f'{X4} + {X2} − 2 = 0') + ' and explain why only two roots '
           'appear.', a=S('x = ±1'),
         check=('solveset', 'Eq(x**4+x**2-2, 0)', 'FiniteSet(-1, 1)'),
         sol='In t: (t−1)(t+2) = 0, so t = 1 or t = −2. Only t = 1 is a possible square, '
             'and it gives two roots. A negative t is always discarded.'),
]

TOPIC = dict(
    key='alg-31', number=31, unit='Unit 5 · Quadratic equations', lessons='70–71',
    title='Biquadratic equations and equations reducible to quadratics',
    subtitle='One substitution turns a degree-four equation, or a fractional one, into a '
             'quadratic you can already solve.',
    uz='Algebra 8, Chapter III §24, pp. 147–152', cam='Cambridge Stage 9 · beyond',
    keywords=['biquadratic equation', 'substitution', 'new variable', 'reject a value',
              'fractional-rational equation', 'extraneous root', 'return to x',
              'degree of an equation'],
    remember=[
        'Put <span class="m">t = x<sup>2</sup></span> — and remember to return to '
        '<span class="m">x</span> at the end.',
        'A negative value of <span class="m">t</span> is rejected: no real square is '
        'negative.',
        'Each positive <span class="m">t</span> gives <b>two</b> values of '
        '<span class="m">x</span>; <span class="m">t = 0</span> gives one.',
        'For a fractional equation, clear the denominators — then check every candidate '
        'against them.',
        'The same trick works for <span class="m">|x|</span>, '
        '<span class="m">x<sup>3</sup></span> and <span class="m">x + 1/x</span>: look '
        'for a repeated block.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
