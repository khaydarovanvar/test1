# -*- coding: utf-8 -*-
"""Questions for topic 11 of Grade 8 algebra — the arithmetic root of degree n."""

from .common import F, M, rt, sq

Q_FOCUS = [
    dict(q='Find ' + M(rt(49)) + '.', a=M('7'), check=('simp', 'sqrt(49)', '7')),
    dict(q='Find ' + M(rt(27, 3)) + '.', a=M('3'), check=('simp', 'Integer(27)**Rational(1,3)', '3')),
    dict(q='Find ' + M(rt('0.04')) + '.', a=M('0.2'),
         check=('simp', 'sqrt(Rational(4,100))', 'Rational(1,5)')),
    dict(q='Find ' + M(rt(16, 4)) + '.', a=M('2'),
         check=('simp', 'Integer(16)**Rational(1,4)', '2')),
    dict(q='Find ' + M(rt(144)) + '.', a=M('12'), check=('simp', 'sqrt(144)', '12')),
    dict(q='Find ' + M(rt('−8', 3)) + '.', a=M('−2'),
         check=('simp', 'cbrt_real(-8)', '-2')),
    dict(q='Find ' + M(rt(F(25, 36))) + '.', a=M(F(5, 6)),
         check=('simp', 'sqrt(Rational(25,36))', 'Rational(5,6)')),
    dict(q='Find ' + M(rt(2) + ' · ' + rt(8)) + '.', a=M('4'),
         check=('simp', 'sqrt(2)*sqrt(8)', '4')),
    dict(q='Find ' + M(F(rt(50), rt(2))) + '.', a=M('5'),
         check=('simp', 'sqrt(50)/sqrt(2)', '5')),
    dict(q='Find ' + M('(' + rt(7) + ')<sup>2</sup>') + '.', a=M('7'),
         check=('simp', 'sqrt(7)**2', '7')),
]

Q_PRACTICE = [
    dict(q='Simplify ' + M(rt(75)) + '.', a=M('5' + rt(3)),
         check=('simp', 'sqrt(75)', '5*sqrt(3)')),
    dict(q='Simplify ' + M(rt(32)) + '.', a=M('4' + rt(2)),
         check=('simp', 'sqrt(32)', '4*sqrt(2)')),
    dict(q='Simplify ' + M(rt(18) + ' + ' + rt(2)) + '.', a=M('4' + rt(2)),
         check=('simp', 'sqrt(18)+sqrt(2)', '4*sqrt(2)')),
    dict(q='Simplify ' + M(rt(f'49{sq("a")}')) + ' for ' + M('a > 0') + '.', a=M('7a'),
         check=('simp', 'sqrt(49*apos**2)', '7*apos')),
    dict(q='Simplify ' + M(rt(54, 3)) + '.', a=M('3' + rt(2, 3)),
         check=('simp', 'Integer(54)**Rational(1,3)', '3*Integer(2)**Rational(1,3)')),
    dict(q='Simplify ' + M(rt(12) + ' · ' + rt(3)) + '.', a=M('6'),
         check=('simp', 'sqrt(12)*sqrt(3)', '6')),
    dict(q='Put the factor under the root: ' + M('3' + rt(2)) + '.', a=M(rt(18)),
         check=('simp', '3*sqrt(2)', 'sqrt(18)')),
    dict(q='Rationalise ' + M(F(1, rt(3))) + '.', a=M(F(rt(3), 3)),
         check=('simp', '1/sqrt(3)', 'sqrt(3)/3')),
    dict(q='Simplify ' + M(rt(sq('a', 4))) + ' for ' + M('a > 0') + '.', a=M(sq('a')),
         check=('simp', 'sqrt(apos**4)', 'apos**2')),
    dict(q='Find ' + M(rt('0.09 · 100')) + '.', a=M('3'),
         check=('simp', 'sqrt(Rational(9,100)*100)', '3')),
]

Q_CHALLENGE = [
    dict(q='Simplify ' + M(rt(45) + ' + ' + rt(20)) + '.', a=M('5' + rt(5)),
         check=('simp', 'sqrt(45)+sqrt(20)', '5*sqrt(5)')),
    dict(q='Rationalise ' + M(F(2, rt(5) + ' − 1')) + '.', a=M(F(rt(5) + ' + 1', 2)),
         check=('simp', '2/(sqrt(5)-1)', '(sqrt(5)+1)/2')),
    dict(q='Simplify ' + M('(' + rt(3) + ' + ' + rt(2) + ')(' + rt(3) + ' − ' + rt(2) + ')')
           + '.', a=M('1'),
         check=('simp', '(sqrt(3)+sqrt(2))*(sqrt(3)-sqrt(2))', '1')),
    dict(q='Simplify ' + M(rt(8) + ' · ' + rt(8, 3)) + '.', a=M('4' + rt(2)),
         check=('simp', 'sqrt(8)*Integer(8)**Rational(1,3)', '4*sqrt(2)')),
    dict(q='Simplify ' + M('(2' + rt(3) + ')<sup>2</sup>') + '.', a=M('12'),
         check=('simp', '(2*sqrt(3))**2', '12')),
    dict(q='Simplify ' + M(rt(f'{sq("x")} − 2x + 1')) + ' for ' + M('x ≥ 1') + '.',
         a=M('x − 1'), check=('simp', 'sqrt(tnn**2)', 'tnn')),
    dict(q='Rationalise ' + M(F(1, rt(7) + ' + ' + rt(5))) + '.',
         a=M(F(rt(7) + ' − ' + rt(5), 2)),
         check=('simp', '1/(sqrt(7)+sqrt(5))', '(sqrt(7)-sqrt(5))/2')),
    dict(q='Simplify ' + M(rt(98) + ' − ' + rt(50) + ' + ' + rt(8)) + '.', a=M('4' + rt(2)),
         check=('simp', 'sqrt(98)-sqrt(50)+sqrt(8)', '4*sqrt(2)')),
    dict(q='Simplify ' + M(rt(16, 3) + ' + ' + rt(54, 3)) + '.', a=M('5' + rt(2, 3)),
         check=('simp', 'Integer(16)**Rational(1,3)+Integer(54)**Rational(1,3)',
                '5*Integer(2)**Rational(1,3)')),
    dict(q='Simplify ' + M('(' + rt(5) + ' + 2)<sup>2</sup>') + '.', a=M('9 + 4' + rt(5)),
         check=('simp', '(sqrt(5)+2)**2', '9+4*sqrt(5)')),
]

Q_BEYOND = [
    dict(q='Simplify ' + M(rt('3 + 2' + rt(2))) + '.', a=M('1 + ' + rt(2)),
         check=('simp', 'sqrt(3+2*sqrt(2))', '1+sqrt(2)'),
         sol='Look for a square: 3 + 2√2 = 1 + 2√2 + 2 = (1 + √2)². '
             'Since 1 + √2 > 0 the root is 1 + √2.'),
    dict(q='Simplify ' + M(rt('7 − 4' + rt(3))) + '.', a=M('2 − ' + rt(3)),
         check=('simp', 'sqrt(7-4*sqrt(3))', '2-sqrt(3)'),
         sol='7 − 4√3 = 4 − 4√3 + 3 = (2 − √3)². As 2 > √3 the bracket is positive, '
             'so the root is 2 − √3, not √3 − 2.'),
    dict(q='Rationalise ' + M(F(1, rt(2, 3) + ' − 1')) + '.',
         a=M(rt(4, 3) + ' + ' + rt(2, 3) + ' + 1'),
         check=('simp', '1/(Integer(2)**Rational(1,3)-1)',
                'Integer(4)**Rational(1,3)+Integer(2)**Rational(1,3)+1'),
         sol='Use a³ − b³ = (a − b)(a² + ab + b²) with a = ∛2, b = 1. '
             'Multiplying top and bottom by ∛4 + ∛2 + 1 makes the denominator 2 − 1 = 1.'),
    dict(q='Prove that ' + M(rt(2)) + ' is irrational.',
         a='No fraction in lowest terms can square to ' + M('2'), check=None,
         sol='Suppose √2 = p/q in lowest terms. Then p² = 2q², so p² is even and so is p; '
             'write p = 2k. Then 4k² = 2q², so q² = 2k² and q is even too — contradicting '
             '"lowest terms". So no such fraction exists.'),
    dict(q='Show that ' + M(rt(f'{sq("n")} + n')) + ' is never a whole number for '
           + M('n ≥ 1') + '.',
         a='It lies strictly between ' + M('n') + ' and ' + M('n + 1'),
         check=('custom', 'root_n2_plus_n'),
         sol='n² < n² + n < n² + 2n + 1 = (n+1)², so n < √(n²+n) < n + 1. '
             'There is no whole number strictly between n and n + 1.'),
    dict(q='Simplify ' + M(rt('x + 2' + rt('x − 1')) + ' + ' + rt('x − 2' + rt('x − 1')))
           + ' for ' + M('1 ≤ x ≤ 2') + '.',
         a=M('2'), check=('custom', 'nested_pair'),
         sol='Put t = √(x−1), so x = t² + 1 and 0 ≤ t ≤ 1. Then x + 2t = (t+1)² and '
             'x − 2t = (t−1)². The sum of the roots is (t+1) + (1−t) = 2 — '
             'constant on the whole interval.'),
    dict(q='Find ' + M(F(1, rt(1) + ' + ' + rt(2)) + ' + ' + F(1, rt(2) + ' + ' + rt(3))
                       + ' + … + ' + F(1, rt(99) + ' + ' + rt(100))) + '.',
         a=M('9'), check=('custom', 'root_telescope'),
         sol='Rationalise each term: 1/(√k + √(k+1)) = √(k+1) − √k. The sum collapses to '
             '√100 − √1 = 10 − 1 = 9.'),
    dict(q='Which is larger, ' + M(rt(10) + ' + ' + rt(2)) + ' or ' + M(rt(7) + ' + ' + rt(5))
           + '?',
         a=M(rt(7) + ' + ' + rt(5)), check=('bool', 'sqrt(7)+sqrt(5) > sqrt(10)+sqrt(2)'),
         sol='Both are positive, so compare their squares: 12 + 2√20 against 12 + 2√35. '
             'Since 35 > 20, the second is larger. The pair that is closer together wins — '
             'the same sum 12 split more evenly.'),
    dict(q='Find the value of ' + M(rt('2 + ' + rt(5), 3) + ' + ' + rt('2 − ' + rt(5), 3)) + '.',
         a=M('1'), check=('custom', 'cube_root_sum'),
         sol='Call it x. Cubing, x³ = (2+√5) + (2−√5) + 3·∛((2+√5)(2−√5))·x '
             '= 4 + 3∛(−1)·x = 4 − 3x. So x³ + 3x − 4 = 0, that is (x−1)(x²+x+4) = 0. '
             'The quadratic has no real root, so x = 1.'),
    dict(q='Show that ' + M(rt('a') + ' + ' + rt('b') + ' ≥ ' + rt('a + b')) + ' for '
           + M('a ≥ 0') + ', ' + M('b ≥ 0') + '.',
         a='Square both sides.', check=('custom', 'root_sum_ineq'),
         sol='Both sides are non-negative, so square: a + 2√(ab) + b against a + b. '
             'The difference is 2√(ab) ≥ 0, so the left side is at least the right, '
             'with equality exactly when a or b is 0.'),
    dict(q='Simplify ' + M(F(rt('a') + ' − ' + rt('b'), 'a − b')) + ' for '
           + M('a, b > 0') + ', ' + M('a ≠ b') + '.',
         a=M(F(1, rt('a') + ' + ' + rt('b'))),
         check=('simp', '(sqrt(apos)-sqrt(bpos))/(apos-bpos)',
                '1/(sqrt(apos)+sqrt(bpos))'),
         sol='a − b = (√a − √b)(√a + √b), so the numerator cancels and 1/(√a + √b) is left.'),
    dict(q='Prove that ' + M(rt(2) + ' + ' + rt(3)) + ' is irrational.',
         a='Its square is ' + M('5 + 2' + rt(6)), check=None,
         sol='Suppose x = √2 + √3 were rational. Then x² = 5 + 2√6 would be rational, '
             'so √6 = (x² − 5)/2 would be rational. But √6 is irrational by the same '
             'argument as for √2 (6 is not a perfect square). Contradiction.'),
    dict(q='Find ' + M(rt('1 + 2022 · 2024')) + ' without a calculator.',
         a=M('2023'), check=('custom', 'clever_square'),
         sol='2022 · 2024 = (2023 − 1)(2023 + 1) = 2023² − 1. Adding 1 gives 2023², '
             'whose root is 2023.'),
    dict(q='Simplify ' + M(rt(sq('x'))) + ' for every real ' + M('x') + ', and give a value '
           'of ' + M('x') + ' for which ' + M(rt(sq('x')) + ' = x') + ' is false.',
         a=M('|x|') + '; false at any negative ' + M('x') + ', e.g. ' + M('x = −3'),
         check=('custom', 'abs_root'),
         sol='The arithmetic root is never negative, so √(x²) = |x|. At x = −3 the left '
             'side is 3 and the right side is −3.'),
    dict(q='A number satisfies ' + M('x = ' + rt('2 + x')) + ' with ' + M('x > 0') + '. '
           'Find it.',
         a=M('x = 2'), check=('custom', 'nested_fixed_point'),
         sol='Square: x² = 2 + x, so x² − x − 2 = 0 and (x−2)(x+1) = 0. '
             'A root is non-negative, so x = 2. This is the value of the infinite tower '
             '√(2 + √(2 + √(2 + …))).'),
]

TOPIC = dict(
    key='alg-11', number=11, lessons='28–29',
    unit='Unit 2 · Roots and rational exponents',
    title='The arithmetic root of degree n',
    subtitle='Undoing a power: what the n-th root means, when it exists, and the four '
             'properties that let you work with it.',
    uz='Algebra 8, §8, pp. 39–41', cam='Cambridge Stage 9 · 1.1',
    keywords=['root of degree n', 'arithmetic root', 'radicand', 'index of the root',
              'square root', 'cube root', 'irrational number',
              'rationalise the denominator', 'take a factor out', 'simplify'],
    remember=[
        'The arithmetic root is the <b>non-negative</b> one: '
        '<span class="m">√(x<sup>2</sup>) = |x|</span>, never <span class="m">x</span>.',
        'An even root needs a non-negative radicand; an odd root takes any sign.',
        'The four properties: <span class="m">√(ab) = √a · √b</span>, '
        '<span class="m">√(a/b) = √a / √b</span>, '
        '<span class="m">(√a)<sup>2</sup> = a</span>, '
        '<span class="m">√(a<sup>2</sup>) = |a|</span>.',
        'Take a factor out by splitting the radicand into a square times the rest.',
        'Rationalise with the conjugate: multiply by '
        '<span class="m">√a − √b</span> over itself.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
