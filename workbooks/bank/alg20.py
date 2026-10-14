# -*- coding: utf-8 -*-
"""Questions for topic 20 of Grade 8 algebra — revision for Control work 4 (§§11–14)."""

from .common import F, M, rt, sq


def rng(lo, var, hi):
    return M(f'{lo} &lt; {var} &lt; {hi}')


Q_FOCUS = [
    dict(q='Which is greater, ' + M('−7') + ' or ' + M('−9') + '?', a=M('−7'),
         check=('bool', '-7 > -9')),
    dict(q='Multiply ' + M('4 &gt; 1') + ' by ' + M('−3') + '.', a=M('−12 &lt; −3'),
         check=('bool', '-12 < -3')),
    dict(q='If ' + rng(1, 'a', 3) + ', estimate ' + M('a + 2') + '.',
         a=M('3 &lt; a + 2 &lt; 5'), check=('bound', 'a+2', {'a': ('1', '3')}, '3', '5')),
    dict(q='Square ' + M('3 &lt; 5') + '.', a=M('9 &lt; 25'), check=('bool', '9 < 25')),
    dict(q='If ' + M('a &gt; b') + ', compare ' + M('a + 7') + ' and ' + M('b + 7') + '.',
         a=M('a + 7 &gt; b + 7'), check=('nonneg', '(a+7)-(b+7)-(a-b)')),
    dict(q='Which is greater, ' + M(F(2, 5)) + ' or ' + M(F(3, 8)) + '?', a=M(F(2, 5)),
         check=('bool', 'Rational(2,5) > Rational(3,8)')),
    dict(q='If ' + rng(2, 'x', 4) + ', estimate ' + M('3x') + '.',
         a=M('6 &lt; 3x &lt; 12'), check=('bound', '3*x', {'x': ('2', '4')}, '6', '12')),
    dict(q='Cube ' + M('−2 &lt; 1') + '.', a=M('−8 &lt; 1'), check=('bool', '-8 < 1')),
    dict(q='If ' + M('a &gt; b') + ' and ' + M('b &gt; c') + ', what follows?',
         a=M('a &gt; c'), check=None),
    dict(q='Is ' + M('(a − b)<sup>2</sup> ≥ 0') + ' always true?', a='Yes.',
         check=('nonneg', '(a-b)**2')),
]

Q_PRACTICE = [
    dict(q='If ' + rng(1, 'a', 2) + ' and ' + rng(2, 'b', 3) + ', estimate ' + M('a + b')
           + '.', a=M('3 &lt; a + b &lt; 5'),
         check=('bound', 'a+b', {'a': ('1', '2'), 'b': ('2', '3')}, '3', '5')),
    dict(q='If ' + rng(1, 'a', 2) + ' and ' + rng(2, 'b', 3) + ', estimate ' + M('ab')
           + '.', a=M('2 &lt; ab &lt; 6'),
         check=('bound', 'a*b', {'a': ('1', '2'), 'b': ('2', '3')}, '2', '6')),
    dict(q='Prove that ' + M(sq('a') + ' + ' + sq('b') + ' ≥ 2ab') + '.',
         a='The difference is ' + M('(a − b)<sup>2</sup>'),
         check=('nonneg', 'a**2+b**2-2*a*b')),
    dict(q='If ' + rng(1, 'x', 4) + ', estimate ' + M(F(1, 'x')) + '.',
         a=M(F(1, 4) + ' &lt; ' + F(1, 'x') + ' &lt; 1'),
         check=('bound', '1/x', {'x': ('1', '4')}, 'Rational(1,4)', '1')),
    dict(q='Give a counter-example to: ' + M('a &gt; b') + ' gives '
           + M(sq('a') + ' &gt; ' + sq('b')) + '.',
         a=M('a = 2') + ', ' + M('b = −5'),
         check=('bool', '(2 > -5) & (Integer(2)**2 < Integer(-5)**2)')),
    dict(q='If ' + M('−3 &lt; x &lt; 2') + ', estimate ' + M('−2x') + '.',
         a=M('−4 &lt; −2x &lt; 6'),
         check=('bound', '-2*x', {'x': ('-3', '2')}, '-4', '6')),
    dict(q='Prove that ' + M('x + ' + F(1, 'x') + ' ≥ 2') + ' for ' + M('x &gt; 0') + '.',
         a='The difference is ' + M(F('(x − 1)<sup>2</sup>', 'x')),
         check=('nonneg', 'x + 1/x - 2', 'pos')),
    dict(q='If ' + rng(2, 'a', 3) + ', estimate ' + M(sq('a')) + '.',
         a=M('4 &lt; ' + sq('a') + ' &lt; 9'),
         check=('bound', 'a**2', {'a': ('2', '3')}, '4', '9')),
    dict(q='Which is greater, ' + M(F(5, 9)) + ' or ' + M(F(6, 11)) + '?', a=M(F(5, 9)),
         check=('bool', 'Rational(5,9) > Rational(6,11)')),
    dict(q='If ' + M('a &gt; b &gt; 0') + ', compare ' + M(F(1, 'a')) + ' and '
           + M(F(1, 'b')) + '.', a=M(F(1, 'a') + ' &lt; ' + F(1, 'b')), check=None),
]

Q_CHALLENGE = [
    dict(q='If ' + M('−2 &lt; x &lt; 3') + ', estimate ' + M(sq('x')) + '.',
         a=M('0 ≤ ' + sq('x') + ' &lt; 9'), check=('custom', 'square_range_mixed')),
    dict(q='Prove that ' + M('(a + b)<sup>2</sup> ≥ 4ab') + '.',
         a='The difference is ' + M('(a − b)<sup>2</sup>'),
         check=('nonneg', '(a+b)**2-4*a*b')),
    dict(q='If ' + rng(1, 'a', 2) + ' and ' + rng(3, 'b', 4) + ', estimate ' + M('a − b')
           + '.', a=M('−3 &lt; a − b &lt; −1'),
         check=('bound', 'a-b', {'a': ('1', '2'), 'b': ('3', '4')}, '-3', '-1')),
    dict(q='Prove that ' + M(F('a', 'b') + ' + ' + F('b', 'a') + ' ≥ 2') + ' for '
           + M('a, b &gt; 0') + '.',
         a='The difference is ' + M(F('(a − b)<sup>2</sup>', 'ab')),
         check=('nonneg', 'a/b + b/a - 2', 'pos')),
    dict(q='If ' + rng(1, 'x', 2) + ', estimate ' + M(sq('x') + ' + ' + F(1, 'x')) + '.',
         a=M('2 &lt; ' + sq('x') + ' + ' + F(1, 'x') + ' &lt; ' + F(9, 2)),
         check=('bound', 'x**2+1/x', {'x': ('1', '2')}, '2', 'Rational(9,2)')),
    dict(q='Find numbers with ' + M('a &gt; b') + ', ' + M('c &gt; d') + ' but '
           + M('ac &lt; bd') + '.', a=M('a = 2, b = −3, c = 1, d = −4'),
         check=('bool', '(2 > -3) & (1 > -4) & (2*1 < (-3)*(-4))')),
    dict(q='If ' + M('0 &lt; a &lt; 1') + ', compare ' + M(sq('a')) + ' and ' + M('a')
           + '.', a=M(sq('a') + ' &lt; a'), check=('custom', 'square_less_in_unit')),
    dict(q='Prove that ' + M(sq('a') + ' + ' + sq('b') + ' + ' + sq('c') + ' ≥ ab + bc + ca')
           + '.', a='Twice the difference is a sum of three squares.',
         check=('nonneg', 'a**2+b**2+c**2-a*b-b*c-c*a')),
    dict(q='If ' + rng(4, 'x', 9) + ', estimate ' + M(rt('x')) + '.',
         a=M('2 &lt; ' + rt('x') + ' &lt; 3'),
         check=('bound', 'sqrt(x)', {'x': ('4', '9')}, '2', '3')),
    dict(q='Prove that ' + M('a &gt; b') + ' gives ' + M(sq('a', 3) + ' &gt; ' + sq('b', 3))
           + '.', a='The second factor is never negative.', check=('custom', 'cubes_order')),
]

Q_BEYOND = [
    dict(q='A pupil wrote: "' + M('a &gt; b') + ', so ' + M(sq('a') + ' &gt; ' + sq('b'))
           + '". Give a counter-example and the missing condition.',
         a=M('a = 1, b = −4') + '; the rule needs ' + M('a &gt; b ≥ 0'),
         check=('bool', '(1 > -4) & (Integer(1)**2 < Integer(-4)**2)'),
         sol='1 > −4 but 1 < 16. Squaring preserves order only when both sides are '
             'non-negative; with a negative in play the larger number can have the '
             'smaller square.'),
    dict(q='A pupil multiplied ' + M('3 &gt; 1') + ' by ' + M('−2') + ' and wrote '
           + M('−6 &gt; −2') + '. Correct it.', a=M('−6 &lt; −2'),
         check=('bool', '-6 < -2'),
         sol='Multiplying by a negative number reverses the sign. The pupil kept the '
             'direction, which is the single most common error in this chapter.'),
    dict(q='A pupil wrote: "' + M('5 &gt; 1') + ' and ' + M('10 &gt; 2') + ', so '
           + M('5 − 10 &gt; 1 − 2') + '". What is wrong?',
         a=M('−5 &lt; −1') + ' — inequalities may not be subtracted term by term.',
         check=('bool', '(5 > 1) & (10 > 2) & (5 - 10 < 1 - 2)'),
         sol='Only same-direction <b>addition</b> is valid. To handle a difference, turn '
             'it into a sum: a − c = a + (−c), and reverse the bounds of c first.'),
    dict(q='A pupil wrote: "' + M(F(1, 'a') + ' &lt; ' + F(1, 'b')) + ', so '
           + M('a &gt; b') + '". Give a counter-example.',
         a=M('a = 1, b = −1') + ': ' + M('1 &gt; −1') + ' holds, but take '
           + M('a = −1, b = 1'), check=('bool', '(Rational(1,-1) < Rational(1,1)) & (-1 < 1)'),
         sol='With a = −1 and b = 1: 1/a = −1 < 1 = 1/b, yet a < b. Reciprocals reverse '
             'the order only when both numbers have the same sign.'),
    dict(q='Prove that ' + M(F(1, 'a') + ' + ' + F(1, 'b') + ' ≥ ' + F(4, 'a + b'))
           + ' for ' + M('a, b &gt; 0') + '.', a='Equality when ' + M('a = b'),
         check=('nonneg', '1/a + 1/b - 4/(a+b)', 'pos'),
         sol='Over a common denominator the claim is (a+b)² ≥ 4ab, that is (a−b)² ≥ 0. '
             'This is the harmonic-mean bound again, in another dress.'),
    dict(q='If ' + M('a + b = 6') + ' with ' + M('a, b &gt; 0') + ', find the greatest '
           'value of ' + M('ab') + '.', a=M('9') + ' at ' + M('a = b = 3'),
         check=('custom', 'sum_six_product'),
         sol='ab = a(6−a) = 9 − (a−3)², largest when a = 3. For a fixed sum, the product '
             'is biggest when the two numbers are equal.'),
    dict(q='If ' + M('−1 &lt; x &lt; 2') + ', give the exact range of ' + M(sq('x')) + '.',
         a=M('0 ≤ ' + sq('x') + ' &lt; 4'), check=('custom', 'square_range_minus_one_two'),
         sol='The interval contains 0, where the square is least. The furthest point from '
             '0 is x = 2, so the square climbs towards 4 without reaching it. '
             'Taking the corners alone would wrongly give 1 as the minimum.'),
    dict(q='Prove that ' + M(sq('a') + ' + ' + sq('b') + ' + 1 ≥ ab + a + b') + '.',
         a='Twice the difference is a sum of three squares.',
         check=('nonneg', 'a**2+b**2+1-a*b-a-b'),
         sol='2(a²+b²+1−ab−a−b) = (a−b)² + (a−1)² + (b−1)² ≥ 0. '
             'Equality only at a = b = 1.'),
    dict(q='Estimate ' + M('x + ' + F(1, 'x')) + ' for ' + M(F(1, 3) + ' &lt; x &lt; 3')
           + '.', a=M('2 ≤ x + ' + F(1, 'x') + ' &lt; ' + F(10, 3)),
         check=('custom', 'x_plus_inverse_third'),
         sol='The minimum 2 sits inside the interval at x = 1; the ends both give 10/3. '
             'A corner check alone would miss the minimum entirely.'),
    dict(q='Prove that ' + M(F('a', 'b + c') + ' + ' + F('b', 'c + a') + ' + '
                             + F('c', 'a + b') + ' ≥ ' + F(3, 2)) + ' for '
           + M('a, b, c &gt; 0') + '.', a='Equality when ' + M('a = b = c'),
         check=('nonneg', 'a/(b+c) + b/(c+a) + c/(a+b) - Rational(3,2)', 'pos'),
         sol='Add 1 to each term: the sum becomes (a+b+c)(1/(b+c) + 1/(c+a) + 1/(a+b)). '
             'By the (x+y+z)(1/x+1/y+1/z) ≥ 9 result applied to the three denominators, '
             'whose total is 2(a+b+c), this is at least 9/2. Subtracting the 3 we added '
             "leaves 3/2. This is Nesbitt's inequality."),
    dict(q='If ' + rng(2, 'a', 3) + ' and ' + rng(1, 'b', 2) + ', estimate '
           + M(sq('a') + ' − ' + sq('b')) + '.',
         a=M('0 &lt; ' + sq('a') + ' − ' + sq('b') + ' &lt; 8'),
         check=('bound', 'a**2-b**2', {'a': ('2', '3'), 'b': ('1', '2')}, '0', '8'),
         sol='Both squares are increasing on these positive ranges, so the corners '
             'decide: least at a = 2, b = 2 and greatest at a = 3, b = 1.'),
    dict(q='Prove the triangle inequality ' + M('|a + b| ≤ |a| + |b|') + ' for real '
           + M('a, b') + '.', a='Square both sides.',
         check=('custom', 'triangle_inequality'),
         sol='Both sides are non-negative, so compare squares: (a+b)² = a² + 2ab + b² '
             'against (|a|+|b|)² = a² + 2|ab| + b². Since ab ≤ |ab|, the first is at most '
             'the second. Equality when a and b have the same sign.'),
    dict(q='Show that ' + M('1 + ' + F(1, 2) + ' + ' + F(1, 4) + ' + … + '
                            + F(1, sq(2, 'n')) + ' &lt; 2') + ' for every ' + M('n') + '.',
         a='The sum is ' + M('2 − ' + F(1, sq(2, 'n'))),
         check=('custom', 'geometric_under_two'),
         sol='The sum of the geometric series is (1 − (1/2)ⁿ⁺¹)/(1 − 1/2) = 2 − 1/2ⁿ, '
             'which is always below 2 and creeps towards it.'),
    dict(q='If ' + M('abc = 1') + ' with ' + M('a, b, c &gt; 0') + ', prove '
           + M('a + b + c ≥ 3') + '.', a='By AM–GM on three numbers.',
         check=('custom', 'abc_one_sum_three'),
         sol='AM–GM gives (a+b+c)/3 ≥ ∛(abc) = 1, so a+b+c ≥ 3, with equality only when '
             'a = b = c = 1.'),
    dict(q='Show that between any two different rational numbers there is another one.',
         a='Their mean, ' + M(F('a + b', 2)), check=('custom', 'midpoint_between'),
         sol='If a < b then a < (a+b)/2 < b, and the mean of two rationals is rational. '
             'So the rationals have no "next" number — between any two there are '
             'infinitely many.'),
]

TOPIC = dict(
    key='alg-20', number=20, lessons='47–48',
    unit='Unit 3 · Numerical inequalities',
    title='Revision · Control work 4 — numerical inequalities',
    subtitle='Chapter II mixed together — the definition, the properties, adding, '
             'multiplying and powers — with the four errors that cost the most marks.',
    uz='Algebra 8, revision of §§11–14', cam='Cambridge Stage 9 · 4.3',
    keywords=['control work', 'work on mistakes', 'estimate a range',
              'reverse the sign', 'counter-example', 'prove', 'condition'],
    remember=[
        'Multiplying or dividing by a <b>negative</b> reverses the sign — the single '
        'most costly slip in this chapter.',
        'Same-direction inequalities may be added always, multiplied only when every '
        'number is positive, and subtracted or divided <b>never</b>.',
        'Squaring preserves order only for non-negative numbers; cubing always does.',
        'When a range crosses <span class="m">0</span>, check <b>inside</b> it as well as '
        'at the corners.',
        'Nearly every proof here reduces to '
        '<span class="m">(something)<sup>2</sup> ≥ 0</span>.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
