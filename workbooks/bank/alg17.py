# -*- coding: utf-8 -*-
"""Questions for topic 17 of Grade 8 algebra — properties of numerical inequalities."""

from .common import F, M, rt, sq

Q_FOCUS = [
    dict(q='If ' + M('a > b') + ', compare ' + M('a + 5') + ' and ' + M('b + 5') + '.',
         a=M('a + 5 > b + 5'), check=('nonneg', '(a+5)-(b+5)-(a-b)')),
    dict(q='If ' + M('a > b') + ', compare ' + M('a − 3') + ' and ' + M('b − 3') + '.',
         a=M('a − 3 > b − 3'), check=('nonneg', '(a-3)-(b-3)-(a-b)')),
    dict(q='If ' + M('a > b') + ' and ' + M('c > 0') + ', compare ' + M('ac') + ' and '
           + M('bc') + '.', a=M('ac > bc'), check=None),
    dict(q='If ' + M('a > b') + ' and ' + M('c < 0') + ', compare ' + M('ac') + ' and '
           + M('bc') + '.', a=M('ac < bc'), check=None),
    dict(q='Multiply ' + M('5 > 3') + ' by ' + M('−2') + '.', a=M('−10 < −6'),
         check=('bool', '-10 < -6')),
    dict(q='If ' + M('a > b') + ' and ' + M('b > c') + ', what follows?', a=M('a > c'),
         check=None),
    dict(q='If ' + M('x > 4') + ', what can you say about ' + M('2x') + '?',
         a=M('2x > 8'), check=('bool', '2*4 == 8')),
    dict(q='If ' + M('x > 4') + ', what can you say about ' + M('−x') + '?',
         a=M('−x < −4'), check=None),
    dict(q='If ' + M('a < b') + ', compare ' + M(F('a', 2)) + ' and ' + M(F('b', 2)) + '.',
         a=M(F('a', 2) + ' < ' + F('b', 2)), check=('nonneg', '(b/2-a/2)-(b-a)/2')),
    dict(q='Divide ' + M('3 < 7') + ' by ' + M('−1') + '.', a=M('−3 > −7'),
         check=('bool', '-3 > -7')),
]

Q_PRACTICE = [
    dict(q='If ' + M('x > 2') + ', show that ' + M('3x − 1 > 5') + '.',
         a=M('3x − 1 > 5'), check=('bool', '3*2-1 == 5')),
    dict(q='Is it always true that ' + M('a > b') + ' gives ' + M(sq('a') + ' > ' + sq('b'))
           + '?', a='No — take ' + M('a = 1') + ', ' + M('b = −2'),
         check=('bool', '(1 > -2) & (Integer(1)**2 < Integer(-2)**2)')),
    dict(q='If ' + M('a > b > 0') + ', compare ' + M(F(1, 'a')) + ' and ' + M(F(1, 'b'))
           + '.', a=M(F(1, 'a') + ' < ' + F(1, 'b')), check=None),
    dict(q='If ' + M('−2 < x < 3') + ', find the range of ' + M('−x') + '.',
         a=M('−3 < −x < 2'), check=('bound', '-x', {'x': ('-2', '3')}, '-3', '2')),
    dict(q='If ' + M('a > b') + ', what is the sign of ' + M('a − b') + '?',
         a='Positive.', check=None),
    dict(q='If ' + M('x ≥ 1') + ', show that ' + M(sq('x') + ' ≥ x') + '.',
         a=M(sq('x') + ' − x = x(x − 1) ≥ 0'), check=('custom', 'x_squared_ge_x')),
    dict(q='If ' + M('a > b') + ' and ' + M('c > d') + ', must ' + M('a − c > b − d')
           + '?', a='No — take ' + M('a = 5, b = 1, c = 10, d = 0'),
         check=('bool', '(5 > 1) & (10 > 0) & (5 - 10 < 1 - 0)')),
    dict(q='If ' + M('2 < x < 5') + ', find the range of ' + M('3x + 1') + '.',
         a=M('7 < 3x + 1 < 16'),
         check=('bound', '3*x+1', {'x': ('2', '5')}, '7', '16')),
    dict(q='If ' + M('a > b') + ', compare ' + M('−3a') + ' and ' + M('−3b') + '.',
         a=M('−3a < −3b'), check=None),
    dict(q='If ' + M('x < −1') + ', compare ' + M(sq('x')) + ' and ' + M('x') + '.',
         a=M(sq('x') + ' > x'), check=('custom', 'x_squared_gt_x_neg')),
]

Q_CHALLENGE = [
    dict(q='If ' + M('a > b > 0') + ' and ' + M('c > d > 0') + ', prove ' + M('ac > bd')
           + '.', a='Compare in two steps through ' + M('bc'),
         check=('custom', 'product_order')),
    dict(q='Prove that ' + M('a > b') + ' gives ' + M(sq('a', 3) + ' > ' + sq('b', 3)) + '.',
         a='The difference factorises with a positive second bracket.',
         check=('custom', 'cubes_order'),),
    dict(q='Give a counter-example to: ' + M('a > b') + ' implies ' + M(sq('a') + ' > ' + sq('b'))
           + '.', a=M('a = 0') + ', ' + M('b = −5'),
         check=('bool', '(0 > -5) & (Integer(0)**2 < Integer(-5)**2)')),
    dict(q='If ' + M('0 < a < 1') + ', compare ' + M(sq('a')) + ' and ' + M('a') + '.',
         a=M(sq('a') + ' < a'), check=('custom', 'square_less_in_unit')),
    dict(q='If ' + M('a > 1') + ', compare ' + M(sq('a')) + ' and ' + M('a') + '.',
         a=M(sq('a') + ' > a'), check=('custom', 'square_more_above_one')),
    dict(q='If ' + M('a > b') + ' and ' + M('c < 0') + ', prove ' + M(F('a', 'c') + ' < '
                                                                      + F('b', 'c')) + '.',
         a='Dividing by a negative reverses the sign.', check=('custom', 'divide_negative')),
    dict(q='If ' + M('1 < x < 2') + ', find the range of ' + M(F(1, 'x')) + '.',
         a=M(F(1, 2) + ' < ' + F(1, 'x') + ' < 1'),
         check=('bound', '1/x', {'x': ('1', '2')}, 'Rational(1,2)', '1')),
    dict(q='If ' + M('a > b') + ', show that ' + M(F('a + b', 2)) + ' lies between them.',
         a=M('b < ' + F('a + b', 2) + ' < a'), check=('custom', 'midpoint_between')),
    dict(q='If ' + M('x > y > 0') + ', compare ' + M(F('x', 'x + 1')) + ' and '
           + M(F('y', 'y + 1')) + '.', a=M(F('x', 'x + 1') + ' > ' + F('y', 'y + 1')),
         check=('custom', 'increasing_fraction')),
    dict(q='Is it always true that ' + M('a > b') + ' gives ' + M(F(1, 'a') + ' < ' + F(1, 'b'))
           + '?', a='No — take ' + M('a = 1') + ', ' + M('b = −1'),
         check=('bool', '(1 > -1) & (Rational(1,1) > Rational(1,-1))')),
]

Q_BEYOND = [
    dict(q='Prove that ' + M('a > b > 0') + ' gives ' + M(sq('a', 'n') + ' > ' + sq('b', 'n'))
           + ' for every ' + M('n ≥ 1') + '.',
         a='Multiply ' + M('n') + ' copies of ' + M('a > b'),
         check=('custom', 'powers_order'),
         sol='Multiplying inequalities of positive numbers is allowed, so from n copies '
             'of a > b > 0 we get aⁿ > bⁿ. (Equivalently aⁿ − bⁿ '
             '= (a−b)(aⁿ⁻¹ + … + bⁿ⁻¹), a positive times a positive.)'),
    dict(q='Show that ' + M(F('x', 'x + 1')) + ' increases as ' + M('x') + ' increases, '
           'for ' + M('x > −1') + '.',
         a=M(F('x', 'x + 1') + ' = 1 − ' + F(1, 'x + 1')),
         check=('custom', 'fraction_increasing'),
         sol='Write x/(x+1) = 1 − 1/(x+1). As x grows, x+1 grows, so 1/(x+1) shrinks and '
             '1 minus it grows. The function climbs towards 1 but never reaches it.'),
    dict(q='If ' + M('a > b > 0') + ', compare ' + M(F('a + 1', 'b + 1')) + ' and '
           + M(F('a', 'b')) + '.', a=M(F('a + 1', 'b + 1') + ' < ' + F('a', 'b')),
         check=('custom', 'add_one_ratio'),
         sol='The difference a/b − (a+1)/(b+1) = (a(b+1) − b(a+1))/(b(b+1)) '
             '= (a − b)/(b(b+1)) > 0. Adding 1 to both parts drags a ratio above 1 '
             'towards 1.'),
    dict(q='If ' + M(F('a', 'b') + ' < ' + F('c', 'd')) + ' with ' + M('b, d > 0')
           + ', prove ' + M(F('a', 'b') + ' < ' + F('a + c', 'b + d') + ' < ' + F('c', 'd'))
           + '.', a='The mediant lies between them.', check=('custom', 'mediant'),
         sol='(a+c)/(b+d) − a/b = (b(a+c) − a(b+d))/(b(b+d)) = (bc − ad)/(b(b+d)) > 0 '
             'since ad < bc. The other half is the same computation on the right. '
             'This is the mediant, the fraction a Farey sequence puts between two others.'),
    dict(q='Prove that ' + M(F('a + b', 2) + ' ≥ ' + F('2ab', 'a + b')) + ' for '
           + M('a, b > 0') + '.', a='Equality when ' + M('a = b'),
         check=('nonneg', '(a+b)/2 - 2*a*b/(a+b)', 'pos'),
         sol='Cross-multiplying by the positive 2(a+b): (a+b)² ≥ 4ab, which is '
             '(a−b)² ≥ 0. This says the arithmetic mean is at least the harmonic mean.'),
    dict(q='If ' + M('a > b') + ', ' + M('b > c') + ' and ' + M('c > d') + ', prove '
           + M('a > d') + '.', a='Transitivity, applied twice.',
         check=('custom', 'transitive_chain'),
         sol='a − d = (a−b) + (b−c) + (c−d), a sum of three positive numbers, '
             'so it is positive.'),
    dict(q='If ' + M('a > b') + ', show that ' + M('a > ' + F('a + b', 2) + ' > b') + '.',
         a='The mean splits the gap in half.', check=('custom', 'midpoint_between'),
         sol='a − (a+b)/2 = (a−b)/2 > 0 and (a+b)/2 − b = (a−b)/2 > 0. '
             'So between any two different numbers there is always another — '
             'the rationals have no gaps of this kind.'),
    dict(q='Prove that ' + M(F('x + 1', 'x + 2') + ' < ' + F('x + 2', 'x + 3')) + ' for '
           + M('x > 0') + '.', a='Cross-multiply.', check=('custom', 'consecutive_ratios'),
         sol='Both denominators are positive, so cross-multiplying is safe: '
             '(x+1)(x+3) = x²+4x+3 against (x+2)² = x²+4x+4. The second is larger by 1.'),
    dict(q='Find numbers with ' + M('a > b') + ' and ' + M('c > d') + ' but '
           + M('ac < bd') + '.', a=M('a = 1, b = −1, c = 1, d = −1')
           + ' gives ' + M('1 > −1') + ' twice and ' + M('1 = 1') + ' — adjust to '
           + M('a = 2, b = −3, c = 1, d = −4'),
         check=('bool', '(2 > -3) & (1 > -4) & (2*1 < (-3)*(-4))'),
         sol='Take a = 2, b = −3, c = 1, d = −4. Then a > b and c > d, but '
             'ac = 2 while bd = 12. Multiplying inequalities needs every number '
             'positive; with negatives it fails.'),
    dict(q='If ' + M('0 < a < b') + ', prove ' + M('a < ' + rt('ab') + ' < ' + F('a + b', 2)
                                                   + ' < b') + '.',
         a='Three comparisons in a row.', check=('custom', 'mean_chain'),
         sol='√(ab) > √(a·a) = a and (a+b)/2 < (b+b)/2 = b. The middle step is AM–GM: '
             '(a+b)/2 − √(ab) = (√a − √b)²/2 > 0 since a ≠ b.'),
    dict(q='If ' + M('a > b > 0') + ', compare ' + M(F('a − b', 'a')) + ' and '
           + M(F('a − b', 'b')) + '.', a=M(F('a − b', 'a') + ' < ' + F('a − b', 'b')),
         check=('custom', 'same_numerator'),
         sol='The numerator a − b is positive and the same in both; the bigger '
             'denominator gives the smaller fraction, and a > b.'),
    dict(q='Show that ' + M(sq('x') + ' + 1 ≥ 2|x|') + ' for every real ' + M('x') + '.',
         a='Equality at ' + M('x = ±1'), check=('custom', 'abs_square_bound'),
         sol='x² + 1 − 2|x| = (|x| − 1)², a square, so it is ≥ 0. '
             'Note x² = |x|², which is what lets the modulus in.'),
    dict(q='If ' + M('a + b + c = 3') + ' with ' + M('a, b, c > 0') + ', show that '
           + M('abc ≤ 1') + '.', a='By AM–GM on three numbers.',
         check=('custom', 'abc_le_one'),
         sol='AM–GM gives (a+b+c)/3 ≥ ∛(abc), so 1 ≥ ∛(abc) and abc ≤ 1. '
             'Equality only when a = b = c = 1.'),
    dict(q='Show that ' + M(F(1, 'n + 1') + ' < ' + F(1, 'n')) + ' for ' + M('n ≥ 1')
           + ', and hence that ' + M(F(1, 'n') + ' − ' + F(1, 'n + 1')) + ' is positive.',
         a=M(F(1, 'n(n + 1)')), check=('simp', '1/n - 1/(n+1)', '1/(n*(n+1))'),
         sol='A larger positive denominator gives a smaller fraction. The difference is '
             '1/(n(n+1)), positive for n ≥ 1 — the same splitting that makes telescoping '
             'sums work.'),
    dict(q='If ' + M('a > b') + ', prove that ' + M(sq('a', 3) + ' − ' + sq('b', 3))
           + ' and ' + M('a − b') + ' always have the same sign.',
         a='The other factor is never negative.', check=('custom', 'cubes_sign'),
         sol='a³ − b³ = (a − b)(a² + ab + b²), and a² + ab + b² = (a + b/2)² + 3b²/4 ≥ 0, '
             'zero only when a = b = 0. So the sign is decided by a − b alone — which is '
             'why cubing, unlike squaring, preserves order.'),
]

TOPIC = dict(
    key='alg-17', number=17, lessons='40–41',
    unit='Unit 3 · Numerical inequalities',
    title='Basic properties of numerical inequalities',
    subtitle='What you may do to both sides — and the one operation that turns the sign '
             'around.',
    uz='Algebra 8, §12, pp. 71–74', cam='Cambridge Stage 9 · 4.3',
    keywords=['property of an inequality', 'transitivity', 'reverse the sign',
              'both sides', 'multiply by', 'divide by', 'preserve',
              'equivalent inequality'],
    remember=[
        'Adding or subtracting the same number from both sides changes nothing.',
        'Multiplying or dividing by a <b>positive</b> number keeps the sign; by a '
        '<b>negative</b> number <b>reverses</b> it.',
        'Transitivity: <span class="m">a &gt; b</span> and '
        '<span class="m">b &gt; c</span> give <span class="m">a &gt; c</span>.',
        'Squaring does <b>not</b> preserve order — <span class="m">1 &gt; −2</span> but '
        '<span class="m">1 &lt; 4</span>. Cubing does.',
        'Taking reciprocals reverses the order only when both numbers have the '
        '<b>same sign</b>.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
