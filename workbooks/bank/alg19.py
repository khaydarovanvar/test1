# -*- coding: utf-8 -*-
"""Questions for topic 19 of Grade 8 algebra — raising an inequality to a power."""

from .common import F, M, rt, sq


def rng(lo, var, hi):
    return M(f'{lo} &lt; {var} &lt; {hi}')


Q_FOCUS = [
    dict(q='Square ' + M('2 &lt; 3') + '.', a=M('4 &lt; 9'), check=('bool', '4 < 9')),
    dict(q='Cube ' + M('2 &lt; 3') + '.', a=M('8 &lt; 27'), check=('bool', '8 < 27')),
    dict(q='Square ' + M('−3 &lt; −2') + '.', a=M('9 &gt; 4'), check=('bool', '9 > 4')),
    dict(q='Cube ' + M('−3 &lt; −2') + '.', a=M('−27 &lt; −8'), check=('bool', '-27 < -8')),
    dict(q='If ' + rng(1, 'x', 2) + ', find the range of ' + M(sq('x')) + '.',
         a=M('1 &lt; ' + sq('x') + ' &lt; 4'),
         check=('bound', 'x**2', {'x': ('1', '2')}, '1', '4')),
    dict(q='Take the square root of ' + M('4 &lt; 9') + '.', a=M('2 &lt; 3'),
         check=('bool', '2 < 3')),
    dict(q='If ' + rng(0, 'a', 1) + ', is ' + M(sq('a') + ' &lt; a') + '?', a='Yes.',
         check=('custom', 'square_less_in_unit')),
    dict(q='If ' + rng(4, 'x', 9) + ', find the range of ' + M(rt('x')) + '.',
         a=M('2 &lt; ' + rt('x') + ' &lt; 3'),
         check=('bound', 'sqrt(x)', {'x': ('4', '9')}, '2', '3')),
    dict(q='Does ' + M('a &lt; b') + ' always give ' + M(sq('a') + ' &lt; ' + sq('b'))
           + '?', a='No — not when negatives are involved.',
         check=('bool', '(-3 < 2) & (Integer(-3)**2 > Integer(2)**2)')),
    dict(q='Does ' + M('a &lt; b') + ' always give ' + M(sq('a', 3) + ' &lt; ' + sq('b', 3))
           + '?', a='Yes — an odd power keeps the order.',
         check=('custom', 'cubes_order')),
]

Q_PRACTICE = [
    dict(q='If ' + rng(2, 'x', 5) + ', find the range of ' + M(sq('x')) + '.',
         a=M('4 &lt; ' + sq('x') + ' &lt; 25'),
         check=('bound', 'x**2', {'x': ('2', '5')}, '4', '25')),
    dict(q='If ' + M('−5 &lt; x &lt; −2') + ', find the range of ' + M(sq('x')) + '.',
         a=M('4 &lt; ' + sq('x') + ' &lt; 25'),
         check=('bound', 'x**2', {'x': ('-5', '-2')}, '4', '25')),
    dict(q='If ' + rng(1, 'x', 3) + ', find the range of ' + M(sq('x', 3)) + '.',
         a=M('1 &lt; ' + sq('x', 3) + ' &lt; 27'),
         check=('bound', 'x**3', {'x': ('1', '3')}, '1', '27')),
    dict(q='If ' + rng(9, 'x', 16) + ', find the range of ' + M(rt('x')) + '.',
         a=M('3 &lt; ' + rt('x') + ' &lt; 4'),
         check=('bound', 'sqrt(x)', {'x': ('9', '16')}, '3', '4')),
    dict(q='If ' + rng(1, 'a', 2) + ' and ' + rng(2, 'b', 3) + ', find the range of '
           + M(sq('a') + sq('b')) + '.',
         a=M('4 &lt; ' + sq('a') + sq('b') + ' &lt; 36'),
         check=('bound', 'a**2*b**2', {'a': ('1', '2'), 'b': ('2', '3')}, '4', '36')),
    dict(q='Give a counter-example to: ' + M('a &lt; b') + ' gives ' + M(sq('a') + ' &lt; '
                                                                        + sq('b')) + '.',
         a=M('a = −4') + ', ' + M('b = 1'),
         check=('bool', '(-4 < 1) & (Integer(-4)**2 > Integer(1)**2)')),
    dict(q='If ' + rng(8, 'x', 27) + ', find the range of ' + M(rt('x', 3)) + '.',
         a=M('2 &lt; ' + rt('x', 3) + ' &lt; 3'),
         check=('bound', 'cbrt_real(x)', {'x': ('8', '27')}, '2', '3')),
    dict(q='If ' + rng(0, 'x', 1) + ', put ' + M('x') + ', ' + M(sq('x')) + ', '
           + M(sq('x', 3)) + ' in decreasing order.',
         a=M('x &gt; ' + sq('x') + ' &gt; ' + sq('x', 3)),
         check=('custom', 'powers_shrink_in_unit')),
    dict(q='If ' + rng(1, 'x', 4) + ', find the range of ' + M(rt('x') + ' + x') + '.',
         a=M('2 &lt; ' + rt('x') + ' + x &lt; 6'),
         check=('bound', 'sqrt(x)+x', {'x': ('1', '4')}, '2', '6')),
    dict(q='Square ' + M('0 &lt; a &lt; b') + '.', a=M('0 &lt; ' + sq('a') + ' &lt; ' + sq('b')),
         check=('custom', 'square_order_positive')),
]

Q_CHALLENGE = [
    dict(q='If ' + M('−2 &lt; x &lt; 3') + ', find the range of ' + M(sq('x')) + '.',
         a=M('0 ≤ ' + sq('x') + ' &lt; 9'), check=('custom', 'square_range_mixed')),
    dict(q='If ' + M('−3 &lt; x &lt; 1') + ', find the range of ' + M(sq('x', 3)) + '.',
         a=M('−27 &lt; ' + sq('x', 3) + ' &lt; 1'),
         check=('bound', 'x**3', {'x': ('-3', '1')}, '-27', '1')),
    dict(q='If ' + rng(1, 'x', 2) + ', find the range of ' + M(F(1, sq('x'))) + '.',
         a=M(F(1, 4) + ' &lt; ' + F(1, sq('x')) + ' &lt; 1'),
         check=('bound', '1/x**2', {'x': ('1', '2')}, 'Rational(1,4)', '1')),
    dict(q='If ' + rng(2, 'a', 3) + ', find the range of ' + M(sq('a') + ' − 2a') + '.',
         a=M('0 &lt; ' + sq('a') + ' − 2a &lt; 3'),
         check=('bound', 'a**2-2*a', {'a': ('2', '3')}, '0', '3')),
    dict(q='Prove that ' + M('0 &lt; a &lt; b') + ' gives ' + M(rt('a') + ' &lt; ' + rt('b'))
           + '.', a='Roots preserve order among positives.',
         check=('custom', 'root_order')),
    dict(q='If ' + rng(1, 'x', 4) + ', find the range of ' + M(sq('x') + ' − x') + '.',
         a=M('0 &lt; ' + sq('x') + ' − x &lt; 12'),
         check=('custom', 'x_squared_minus_x_range')),
    dict(q='Give a counter-example to: ' + M(sq('a') + ' &lt; ' + sq('b')) + ' gives '
           + M('a &lt; b') + '.', a=M('a = 1') + ', ' + M('b = −3'),
         check=('bool', '(Integer(1)**2 < Integer(-3)**2) & (1 > -3)')),
    dict(q='If ' + rng(1, 'a', 2) + ', find the range of ' + M(sq('a', 4)) + '.',
         a=M('1 &lt; ' + sq('a', 4) + ' &lt; 16'),
         check=('bound', 'a**4', {'a': ('1', '2')}, '1', '16')),
    dict(q='If ' + rng(0, 'x', 1) + ', compare ' + M(rt('x')) + ' and ' + M('x') + '.',
         a=M(rt('x') + ' &gt; x'), check=('custom', 'root_bigger_in_unit')),
    dict(q='If ' + rng(2, 'x', 3) + ', find the range of ' + M(sq('x') + ' + ' + F(1, 'x'))
           + '.',
         a=M(F(13, 3) + ' &lt; ' + sq('x') + ' + ' + F(1, 'x') + ' &lt; ' + F(28, 3)),
         check=('bound', 'x**2+1/x', {'x': ('2', '3')},
                'Rational(9,2)', 'Rational(28,3)')),
]

Q_BEYOND = [
    dict(q='Prove that ' + M('0 &lt; a &lt; b') + ' gives ' + M(sq('a', 'n') + ' &lt; '
                                                                + sq('b', 'n'))
           + ' for every ' + M('n ≥ 1') + '.', a='Multiply n copies.',
         check=('custom', 'powers_order'),
         sol='aⁿ and bⁿ are products of n positive factors with aᵏ < bᵏ at each step; '
             'multiplying same-direction inequalities of positives is allowed. '
             'Equivalently bⁿ − aⁿ = (b−a)(bⁿ⁻¹ + bⁿ⁻²a + … + aⁿ⁻¹), a positive times '
             'a positive.'),
    dict(q='Explain why squaring may reverse an inequality but cubing never does.',
         a='Because ' + M(sq('x')) + ' is not one-to-one on the reals; ' + M(sq('x', 3))
           + ' is.', check=('custom', 'cubes_order'),
         sol='x³ − y³ = (x−y)(x²+xy+y²) and the second bracket is never negative, so the '
             'sign of the difference follows x − y alone. For squares, '
             'x² − y² = (x−y)(x+y) — the second factor can be negative, and then the '
             'order flips.'),
    dict(q='If ' + M('−1 &lt; x &lt; 2') + ', find the exact range of ' + M(sq('x', 4))
           + '.', a=M('0 ≤ ' + sq('x', 4) + ' &lt; 16'),
         check=('custom', 'fourth_power_range'),
         sol='An even power is non-negative and least at x = 0, which lies inside the '
             'interval. The largest value comes from the end furthest from 0, x = 2, '
             'giving 16 (not attained).'),
    dict(q='If ' + rng(0, 'x', 1) + ', put ' + M(sq('x', 3)) + ', ' + M(sq('x')) + ', '
           + M('x') + ', ' + M(rt('x')) + ' in increasing order.',
         a=M(sq('x', 3) + ' &lt; ' + sq('x') + ' &lt; x &lt; ' + rt('x')),
         check=('custom', 'order_four_powers_unit'),
         sol='Below 1 a larger index gives a smaller value, because multiplying by a '
             'number less than 1 shrinks. Above 1 the whole order reverses.'),
    dict(q='Prove that ' + M('a &gt; 1') + ' gives ' + M(sq('a', 'n')) + ' growing without '
           'limit as ' + M('n') + ' grows.', a='Write ' + M('a = 1 + h') + ' with '
           + M('h &gt; 0') + '.', check=('custom', 'bernoulli'),
         sol='With a = 1 + h, the binomial expansion gives (1+h)ⁿ ≥ 1 + nh '
             '(Bernoulli\'s inequality). Since h > 0, 1 + nh passes any bound as n grows, '
             'so aⁿ does too.'),
    dict(q='If ' + rng(1, 'a', 2) + ' and ' + rng(1, 'b', 2) + ', find the range of '
           + M(sq('a') + ' + ' + sq('b')) + '.',
         a=M('2 &lt; ' + sq('a') + ' + ' + sq('b') + ' &lt; 8'),
         check=('bound', 'a**2+b**2', {'a': ('1', '2'), 'b': ('1', '2')}, '2', '8'),
         sol='Both squares increase on this range, so the corners decide: 1+1 and 4+4.'),
    dict(q='Show that ' + M(rt('a') + ' + ' + rt('b') + ' ≤ ' + rt('2(a + b)')) + ' for '
           + M('a, b ≥ 0') + '.', a='Square both sides.',
         check=('nonneg', '2*(a+b) - (sqrt(a)+sqrt(b))**2', 'pos'),
         sol='Squaring, 2(a+b) − (a + 2√(ab) + b) = a + b − 2√(ab) = (√a − √b)² ≥ 0. '
             'Equality when a = b.'),
    dict(q='If ' + M('x &gt; 0') + ' and ' + M(sq('x') + ' &lt; x') + ', what is '
           + M('x') + '?', a=M('0 &lt; x &lt; 1'), check=('custom', 'square_less_than_self'),
         sol='x² < x with x > 0 divides to x < 1. So the condition pins x into (0, 1) — '
             'exactly the range where squaring shrinks a number.'),
    dict(q='Prove that ' + M('0 ≤ a ≤ b') + ' gives ' + M(rt('a', 3) + ' ≤ ' + rt('b', 3))
           + '.', a='Cube roots preserve order everywhere.',
         check=('custom', 'cube_root_order'),
         sol='If ∛a > ∛b then cubing (which preserves order) would give a > b, '
             'contradiction. So ∛a ≤ ∛b. Unlike square roots, this works for negatives too.'),
    dict(q='If ' + rng(2, 'x', 4) + ', find the range of ' + M(F(1, sq('x', 3))) + '.',
         a=M(F(1, 64) + ' &lt; ' + F(1, sq('x', 3)) + ' &lt; ' + F(1, 8)),
         check=('bound', '1/x**3', {'x': ('2', '4')}, 'Rational(1,64)', 'Rational(1,8)'),
         sol='Cubing preserves the order, and taking reciprocals of positives reverses '
             'it: 8 < x³ < 64 becomes 1/64 < 1/x³ < 1/8.'),
    dict(q='Find all real ' + M('x') + ' with ' + M(sq('x', 4) + ' &lt; ' + sq('x')) + '.',
         a=M('−1 &lt; x &lt; 1') + ', ' + M('x ≠ 0'), check=('custom', 'quartic_less_square'),
         sol='x⁴ < x² means x²(x² − 1) < 0. Since x² ≥ 0, we need x² > 0 and x² < 1, '
             'that is 0 < |x| < 1.'),
    dict(q='Show that ' + M('(1 + h)<sup>n</sup> ≥ 1 + nh') + ' for ' + M('h ≥ −1')
           + ' and ' + M('n ≥ 1') + '.', a='Bernoulli\'s inequality.',
         check=('custom', 'bernoulli'),
         sol='By induction: true at n = 1. If (1+h)ⁿ ≥ 1 + nh then multiplying by the '
             'non-negative (1+h) gives (1+h)ⁿ⁺¹ ≥ (1+nh)(1+h) = 1 + (n+1)h + nh² '
             '≥ 1 + (n+1)h.'),
    dict(q='If ' + rng(1, 'x', 2) + ', which is larger, ' + M(sq('x', 3)) + ' or '
           + M(sq('x'))+ '?', a=M(sq('x', 3)), check=('custom', 'cube_bigger_above_one'),
         sol='x³ − x² = x²(x − 1), and both factors are positive for x > 1. '
             'Below 1 the sign flips.'),
    dict(q='Find the range of ' + M(sq('x') + ' + ' + F(1, sq('x'))) + ' for '
           + M('x ≠ 0') + '.', a=M('at least 2'), check=('custom', 'square_plus_inverse'),
         sol='Put t = x² > 0. Then t + 1/t ≥ 2 with equality at t = 1, that is x = ±1. '
             'There is no upper bound.'),
    dict(q='If ' + M('0 &lt; a &lt; b') + ', compare ' + M(F('a', 'b')) + ' with '
           + M(sq(F('a', 'b'))) + '.', a=M(sq(F('a', 'b')) + ' &lt; ' + F('a', 'b')),
         check=('custom', 'ratio_square_smaller'),
         sol='a/b lies strictly between 0 and 1, and squaring a number in that range '
             'makes it smaller.'),
]

TOPIC = dict(
    key='alg-19', number=19, lessons='44–46',
    unit='Unit 3 · Numerical inequalities',
    title='Raising a numerical inequality to a power',
    subtitle='Squaring, cubing and taking roots — safe when both sides are positive, and '
             'full of traps when they are not.',
    uz='Algebra 8, §14, pp. 80–84', cam='Cambridge Stage 9 · beyond',
    keywords=['raise to a power', 'take the root', 'even power', 'odd power',
              'positive numbers', 'condition', 'counter-example', 'monotonic'],
    remember=[
        'For <b>positive</b> numbers, raising both sides to any power keeps the order.',
        'An <b>odd</b> power keeps the order for every real number; an <b>even</b> power '
        'does not.',
        'Taking a root of both sides is safe when both are non-negative.',
        'Between <span class="m">0</span> and <span class="m">1</span>, a higher power is '
        '<b>smaller</b>; above <span class="m">1</span> it is larger.',
        'When a range crosses <span class="m">0</span>, an even power reaches its '
        'minimum <b>inside</b> the range, not at a corner.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
