# -*- coding: utf-8 -*-
"""Questions for topic 30 of Grade 8 algebra — Vieta's theorem and factorising."""

from .common import F, M, rt, sq

S = M
X2 = sq('x')
A, B = 'α', 'β'

Q_FOCUS = [
    dict(q='Find the sum of the roots of ' + S(f'{X2} − 5x + 6 = 0') + '.', a=S('5'),
         check=('simp', '5', '5')),
    dict(q='Find the product of the roots of ' + S(f'{X2} − 5x + 6 = 0') + '.', a=S('6'),
         check=('simp', '6', '6')),
    dict(q='Find the sum of the roots of ' + S(f'{X2} + 3x − 10 = 0') + '.', a=S('−3'),
         check=('simp', '-3', '-3')),
    dict(q='Find the product of the roots of ' + S(f'{X2} + 3x − 10 = 0') + '.',
         a=S('−10'), check=('simp', '-10', '-10')),
    dict(q='Two numbers have sum ' + S('7') + ' and product ' + S('12') + '. Find them.',
         a=S('3') + ' and ' + S('4'),
         check=('solveset', 'Eq(x**2-7*x+12, 0)', 'FiniteSet(3, 4)')),
    dict(q='Two numbers have sum ' + S('−1') + ' and product ' + S('−6') + '. Find them.',
         a=S('2') + ' and ' + S('−3'),
         check=('solveset', 'Eq(x**2+x-6, 0)', 'FiniteSet(2, -3)')),
    dict(q='Factorise ' + S(f'{X2} − 5x + 6') + '.', a=S('(x − 2)(x − 3)'),
         check=('simp', 'x**2-5*x+6', '(x-2)*(x-3)')),
    dict(q='Factorise ' + S(f'{X2} + x − 6') + '.', a=S('(x + 3)(x − 2)'),
         check=('simp', 'x**2+x-6', '(x+3)*(x-2)')),
    dict(q='Find the sum of the roots of ' + S(f'2{X2} − 6x + 1 = 0') + '.', a=S('3'),
         check=('simp', 'Rational(6,2)', '3')),
    dict(q='Find the product of the roots of ' + S(f'2{X2} − 6x + 1 = 0') + '.',
         a=S(F(1, 2)), check=('simp', 'Rational(1,2)', 'Rational(1,2)')),
]

Q_PRACTICE = [
    dict(q='The roots of ' + S(f'{X2} + kx + 12 = 0') + ' are ' + S('3') + ' and '
           + S('4') + '. Find ' + S('k') + '.', a=S('k = −7'),
         check=('custom', 'vieta_k_minus_seven')),
    dict(q='The roots of ' + S(f'{X2} − 7x + c = 0') + ' are ' + S('3') + ' and '
           + S('4') + '. Find ' + S('c') + '.', a=S('c = 12'),
         check=('simp', '3*4', '12')),
    dict(q='Factorise ' + S(f'{X2} − 9x + 20') + '.', a=S('(x − 4)(x − 5)'),
         check=('simp', 'x**2-9*x+20', '(x-4)*(x-5)')),
    dict(q='Factorise ' + S(f'2{X2} + 7x + 3') + '.', a=S('(2x + 1)(x + 3)'),
         check=('simp', '2*x**2+7*x+3', '(2*x+1)*(x+3)')),
    dict(q='Write a quadratic equation with roots ' + S('1') + ' and ' + S('−5') + '.',
         a=S(f'{X2} + 4x − 5 = 0'),
         check=('solveset', 'Eq(x**2+4*x-5, 0)', 'FiniteSet(1, -5)')),
    dict(q='Find the sum and product of the roots of ' + S(f'3{X2} − 4x − 4 = 0') + '.',
         a=S(F(4, 3)) + ' and ' + S('−' + F(4, 3)),
         check=('simp', 'Rational(4,3)-Rational(4,3)', '0')),
    dict(q='Factorise ' + S(f'{X2} − 4x − 21') + '.', a=S('(x − 7)(x + 3)'),
         check=('simp', 'x**2-4*x-21', '(x-7)*(x+3)')),
    dict(q='One root of ' + S(f'{X2} − 6x + 8 = 0') + ' is ' + S('2') + '. '
           'Find the other.', a=S('4'), check=('custom', 'other_root_four')),
    dict(q='Find the roots of ' + S(f'{X2} − 2x − 15 = 0') + ' by inspection.',
         a=S('5') + ' and ' + S('−3'),
         check=('solveset', 'Eq(x**2-2*x-15, 0)', 'FiniteSet(5, -3)')),
    dict(q='Factorise ' + S(f'{X2} + 10x + 25') + '.', a=S('(x + 5)<sup>2</sup>'),
         check=('simp', 'x**2+10*x+25', '(x+5)**2')),
]

Q_CHALLENGE = [
    dict(q=S(A) + ' and ' + S(B) + ' are the roots of ' + S(f'{X2} − 5x + 3 = 0')
           + '. Write down ' + S(f'{A} + {B}') + ' and ' + S(f'{A}{B}') + '.',
         a=S('5') + ' and ' + S('3'), check=('custom', 'vieta_five_three')),
    dict(q='For the same roots, find ' + S(f'{sq(A)} + {sq(B)}') + '.', a=S('19'),
         check=('custom', 'alpha_sq_plus_beta_sq')),
    dict(q='For the same roots, find ' + S(F(1, A) + ' + ' + F(1, B)) + '.',
         a=S(F(5, 3)), check=('custom', 'reciprocal_sum_roots')),
    dict(q='For the same roots, find ' + S(f'({A} − {B})<sup>2</sup>') + '.', a=S('13'),
         check=('custom', 'root_difference_squared')),
    dict(q='For the same roots, find ' + S(f'{sq(A, 3)} + {sq(B, 3)}') + '.', a=S('80'),
         check=('custom', 'alpha_cubed_sum')),
    dict(q='If ' + S(A) + ', ' + S(B) + ' are the roots of ' + S(f'{X2} + px + q = 0')
           + ', find ' + S(f'{sq(A)} + {sq(B)}') + ' in terms of ' + S('p') + ' and '
           + S('q') + '.', a=S(sq('p') + ' − 2q'), check=('custom', 'sum_squares_pq')),
    dict(q='The roots of ' + S(f'{X2} − 3x + 1 = 0') + ' are ' + S(A) + ', ' + S(B)
           + '. Write the equation with roots ' + S(f'2{A}') + ', ' + S(f'2{B}') + '.',
         a=S(f'{X2} − 6x + 4 = 0'), check=('custom', 'doubled_roots')),
    dict(q='For the same ' + S(A) + ', ' + S(B) + ', write the equation with roots '
           + S(f'{A} + 1') + ', ' + S(f'{B} + 1') + '.',
         a=S(f'{X2} − 5x + 5 = 0'), check=('custom', 'shifted_roots')),
    dict(q='Factorise ' + S(f'6{X2} − x − 2') + '.', a=S('(3x − 2)(2x + 1)'),
         check=('simp', '6*x**2-x-2', '(3*x-2)*(2*x+1)')),
    dict(q='Find ' + S('k') + ' so that one root of ' + S(f'{X2} − kx + 6 = 0')
           + ' is ' + S('2') + '.', a=S('k = 5'), check=('custom', 'k_root_two')),
]

Q_BEYOND = [
    dict(q='Prove Vieta’s theorem for ' + S(f'a{X2} + bx + c = 0') + '.',
         a=S('−' + F('b', 'a')) + ' and ' + S(F('c', 'a')),
         check=('custom', 'sum_of_roots'),
         sol='Write the equation as a(x−α)(x−β) = 0 and expand: '
             'ax² − a(α+β)x + aαβ. Matching coefficients gives α+β = −b/a and '
             'αβ = c/a.'),
    dict(q=S(A) + ', ' + S(B) + ' are the roots of ' + S(f'{X2} + px + q = 0')
           + ' with ' + S('q ≠ 0') + '. Find the equation with roots '
           + S(F(1, A)) + ', ' + S(F(1, B)) + '.',
         a=S(f'q{X2} + px + 1 = 0'), check=('custom', 'reciprocal_roots_equation'),
         sol='The new sum is (α+β)/(αβ) = −p/q and the new product is 1/q. '
             'So x² + (p/q)x + 1/q = 0, which is qx² + px + 1 = 0 — '
             'the original with its coefficients reversed.'),
    dict(q=S(A) + ' is a root of ' + S(f'{X2} − x − 1 = 0') + '. Show that '
           + S(f'{sq(A)} = {A} + 1') + ' and find ' + S(sq(A, 3)) + '.',
         a=S(f'2{A} + 1'), check=('custom', 'golden_power'),
         sol='The equation itself says α² = α + 1. Multiplying by α: '
             'α³ = α² + α = (α+1) + α = 2α + 1. Every power of α is a linear '
             'expression in α — the Fibonacci pattern.'),
    dict(q='The roots of ' + S(f'{X2} − 3x + 1 = 0') + ' are ' + S(A) + ', ' + S(B)
           + '. Find ' + S(f'{sq(A, 4)} + {sq(B, 4)}') + '.', a=S('47'),
         check=('custom', 'fourth_power_sum'),
         sol='α²+β² = 9 − 2 = 7, then α⁴+β⁴ = (α²+β²)² − 2(αβ)² = 49 − 2 = 47. '
             'Each step squares the previous one.'),
    dict(q='The roots of ' + S(f'{X2} − 5x + c = 0') + ' differ by ' + S('1') + '. '
           'Find ' + S('c') + '.', a=S('c = 6'), check=('custom', 'roots_differ_one'),
         sol='Sum 5 and difference 1 give roots 3 and 2, so c = 6. '
             'Equivalently (α−β)² = 25 − 4c = 1.'),
    dict(q='Write the equation whose roots are the <b>squares</b> of the roots of '
           + S(f'{X2} − 3x + 2 = 0') + '.', a=S(f'{X2} − 5x + 4 = 0'),
         check=('custom', 'squared_roots_equation'),
         sol='The roots are 1 and 2, so the new roots are 1 and 4: sum 5, product 4. '
             'In general the new sum is p² − 2q and the new product is q².'),
    dict(q='Show that a monic quadratic with integer coefficients and rational roots '
           'has <b>integer</b> roots.', a='The sum and product are integers.',
         check=('custom', 'monic_integer_roots'),
         sol='A rational root p/q in lowest terms must have q dividing the leading '
             'coefficient, which is 1. So the roots are integers — the rational root '
             'theorem in its simplest case.'),
    dict(q='The roots of ' + S(f'{X2} + px + q = 0') + ' are consecutive integers. '
           'Show that ' + S(sq('p') + ' − 4q = 1') + '.', a=S('1'),
         check=('custom', 'consecutive_roots'),
         sol='(α−β)² = (α+β)² − 4αβ = p² − 4q, and consecutive integers differ by 1.'),
    dict(q='Find ' + S('b') + ' and ' + S('c') + ' so that ' + S(f'{X2} + bx + c = 0')
           + ' has roots ' + S('2') + ' and ' + S('−3') + '.',
         a=S('b = 1') + ', ' + S('c = −6'), check=('custom', 'b_c_two_minus_three'),
         sol='Sum −1 gives b = 1; product −6 gives c = −6.'),
    dict(q='For the roots of ' + S(f'{X2} − 5x + 3 = 0') + ', find '
           + S(F(A, B) + ' + ' + F(B, A)) + '.', a=S(F(19, 3)),
         check=('custom', 'ratio_sum_roots'),
         sol='The expression is (α²+β²)/(αβ) = 19/3, using α²+β² = 25 − 6 = 19.'),
    dict(q='The roots of ' + S(f'{X2} − px + q = 0') + ' are ' + S(A) + ', ' + S(B)
           + '. Write the equation with roots ' + S(sq(A)) + ', ' + S(sq(B)) + '.',
         a=S(f'{X2} − ({sq("p")} − 2q)x + {sq("q")} = 0'),
         check=('custom', 'general_squared_roots'),
         sol='New sum α²+β² = p² − 2q; new product (αβ)² = q².'),
    dict(q='Show that the roots of ' + S(f'a{X2} + bx + c = 0') + ' are reciprocals of '
           'each other exactly when ' + S('c = a') + '.', a=S('c = a'),
         check=('custom', 'reciprocal_roots_condition'),
         sol='Reciprocal roots means αβ = 1, and αβ = c/a. So c/a = 1, that is c = a.'),
    dict(q='Show that the roots are opposite numbers exactly when ' + S('b = 0') + '.',
         a=S('b = 0'), check=('custom', 'opposite_roots_condition'),
         sol='Opposite means α + β = 0, and α + β = −b/a, so b = 0. '
             'The equation is then ax² + c = 0.'),
    dict(q='The roots of ' + S(f'{X2} − 6x + k = 0') + ' are in the ratio ' + S('2 : 1')
           + '. Find ' + S('k') + '.', a=S('k = 8'), check=('custom', 'ratio_two_one'),
         sol='Let the roots be 2r and r. Then 3r = 6, so r = 2 and the roots are 4 and 2, '
             'giving k = 8.'),
    dict(q='For ' + S(f'{X2} − bx + 1 = 0') + ' with real roots, find the least value of '
           + S(f'{sq(A)} + {sq(B)}') + '.', a=S('2'), check=('custom', 'least_sum_squares'),
         sol='α²+β² = b² − 2, and real roots need b² ≥ 4. So the least value is '
             '4 − 2 = 2, at b = ±2 where the roots coincide at ±1.'),
]

TOPIC = dict(
    key='alg-30', number=30, unit='Unit 5 · Quadratic equations', lessons='68–69',
    title='Vieta’s theorem and factorising a quadratic trinomial',
    subtitle='The sum and the product of the roots, read straight off the coefficients — '
             'a check, a shortcut and a factorising method at once.',
    uz='Algebra 8, Chapter III §23, pp. 141–146', cam='Cambridge Stage 9 · 2.4',
    keywords=['Vieta’s theorem', 'sum of the roots', 'product of the roots',
              'reduced quadratic equation', 'quadratic trinomial', 'by inspection',
              'linear factors', 'converse theorem'],
    remember=[
        'For <span class="m">ax<sup>2</sup> + bx + c = 0</span>: '
        '<span class="m">α + β = −b/a</span> and <span class="m">αβ = c/a</span>.',
        'For a monic equation the sum is <span class="m">−b</span> and the product is '
        '<span class="m">c</span> — factorise by finding two such numbers.',
        'Use it as a <b>check</b>: add and multiply your roots and compare with the '
        'coefficients.',
        'Symmetric expressions in the roots reduce to the sum and the product: '
        '<span class="m">α<sup>2</sup> + β<sup>2</sup> = (α+β)<sup>2</sup> − 2αβ</span>.',
        'To build an equation from roots: '
        '<span class="m">x<sup>2</sup> − (sum)x + (product) = 0</span>.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
