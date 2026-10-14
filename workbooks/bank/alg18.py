# -*- coding: utf-8 -*-
"""Questions for topic 18 of Grade 8 algebra — adding and multiplying inequalities."""

from .common import F, M, rt, sq


def rng(lo, var, hi):
    return M(f'{lo} &lt; {var} &lt; {hi}')


Q_FOCUS = [
    dict(q='Add ' + M('3 &lt; 5') + ' and ' + M('2 &lt; 4') + '.', a=M('5 &lt; 9'),
         check=('bool', '5 < 9')),
    dict(q='Multiply ' + M('2 &lt; 3') + ' and ' + M('4 &lt; 5') + '.', a=M('8 &lt; 15'),
         check=('bool', '8 < 15')),
    dict(q='If ' + rng(1, 'a', 2) + ' and ' + rng(3, 'b', 4) + ', estimate ' + M('a + b')
           + '.', a=M('4 &lt; a + b &lt; 6'),
         check=('bound', 'a+b', {'a': ('1', '2'), 'b': ('3', '4')}, '4', '6')),
    dict(q='If ' + rng(1, 'a', 2) + ' and ' + rng(3, 'b', 4) + ', estimate ' + M('ab')
           + '.', a=M('3 &lt; ab &lt; 8'),
         check=('bound', 'a*b', {'a': ('1', '2'), 'b': ('3', '4')}, '3', '8')),
    dict(q='If ' + rng(2, 'x', 4) + ', estimate ' + M('2x') + '.',
         a=M('4 &lt; 2x &lt; 8'), check=('bound', '2*x', {'x': ('2', '4')}, '4', '8')),
    dict(q='If ' + rng(1, 'x', 3) + ', estimate ' + M('x + 5') + '.',
         a=M('6 &lt; x + 5 &lt; 8'), check=('bound', 'x+5', {'x': ('1', '3')}, '6', '8')),
    dict(q='May ' + M('5 &gt; 3') + ' and ' + M('2 &lt; 7') + ' be added as they stand?',
         a='No — they point in opposite directions.', check=None),
    dict(q='If ' + rng(0, 'a', 1) + ' and ' + rng(0, 'b', 1) + ', is ' + M('ab &lt; 1')
           + '?', a='Yes.', check=('bound', 'a*b', {'a': ('0', '1'), 'b': ('0', '1')},
                                   '0', '1')),
    dict(q='If ' + rng(3, 'a', 5) + ', estimate ' + M('a − 1') + '.',
         a=M('2 &lt; a − 1 &lt; 4'), check=('bound', 'a-1', {'a': ('3', '5')}, '2', '4')),
    dict(q='If ' + rng(2, 'a', 3) + ', estimate ' + M(sq('a')) + '.',
         a=M('4 &lt; ' + sq('a') + ' &lt; 9'),
         check=('bound', 'a**2', {'a': ('2', '3')}, '4', '9')),
]

Q_PRACTICE = [
    dict(q='If ' + rng(1, 'a', 2) + ' and ' + rng(3, 'b', 5) + ', estimate ' + M('a − b')
           + '.', a=M('−4 &lt; a − b &lt; −1'),
         check=('bound', 'a-b', {'a': ('1', '2'), 'b': ('3', '5')}, '-4', '-1')),
    dict(q='If ' + rng(1, 'a', 2) + ' and ' + rng(3, 'b', 5) + ', estimate '
           + M(F('a', 'b')) + '.', a=M(F(1, 5) + ' &lt; ' + F('a', 'b') + ' &lt; ' + F(2, 3)),
         check=('bound', 'a/b', {'a': ('1', '2'), 'b': ('3', '5')},
                'Rational(1,5)', 'Rational(2,3)')),
    dict(q='If ' + rng(2, 'x', 3) + ' and ' + rng(1, 'y', 4) + ', estimate '
           + M('2x + 3y') + '.', a=M('7 &lt; 2x + 3y &lt; 18'),
         check=('bound', '2*x+3*y', {'x': ('2', '3'), 'y': ('1', '4')}, '7', '18')),
    dict(q='Why may two inequalities not be subtracted term by term? Give a '
           'counter-example.',
         a=M('5 &gt; 1') + ' and ' + M('10 &gt; 2') + ', yet ' + M('5 − 10 &lt; 1 − 2'),
         check=('bool', '(5 > 1) & (10 > 2) & (5 - 10 < 1 - 2)')),
    dict(q='If ' + rng(1, 'a', 4) + ', estimate ' + M(F(1, 'a')) + '.',
         a=M(F(1, 4) + ' &lt; ' + F(1, 'a') + ' &lt; 1'),
         check=('bound', '1/a', {'a': ('1', '4')}, 'Rational(1,4)', '1')),
    dict(q='If ' + rng(0, 'a', 2) + ' and ' + rng(0, 'b', 3) + ', estimate ' + M('ab')
           + '.', a=M('0 &lt; ab &lt; 6'),
         check=('bound', 'a*b', {'a': ('0', '2'), 'b': ('0', '3')}, '0', '6')),
    dict(q='If ' + rng(3, 'a', 4) + ', estimate ' + M(sq('a') + ' − a') + '.',
         a=M('6 &lt; ' + sq('a') + ' − a &lt; 12'),
         check=('bound', 'a**2-a', {'a': ('3', '4')}, '6', '12')),
    dict(q='If ' + rng(2, 'a', 5) + ' and ' + rng(1, 'b', 2) + ', estimate '
           + M(F('a', 'b')) + '.', a=M('1 &lt; ' + F('a', 'b') + ' &lt; 5'),
         check=('bound', 'a/b', {'a': ('2', '5'), 'b': ('1', '2')}, '1', '5')),
    dict(q='If ' + rng(1, 'x', 2) + ', estimate ' + M(sq('x', 3)) + '.',
         a=M('1 &lt; ' + sq('x', 3) + ' &lt; 8'),
         check=('bound', 'x**3', {'x': ('1', '2')}, '1', '8')),
    dict(q='If ' + rng(2, 'a', 3) + ' and ' + rng(4, 'b', 6) + ', estimate '
           + M('a + b') + ' and ' + M('ab') + '.',
         a=M('6 &lt; a + b &lt; 9') + ', ' + M('8 &lt; ab &lt; 18'),
         check=('bound', 'a*b', {'a': ('2', '3'), 'b': ('4', '6')}, '8', '18')),
]

Q_CHALLENGE = [
    dict(q='If ' + M('−2 &lt; x &lt; 1') + ', estimate ' + M(sq('x')) + '. '
           '(Careful — the corners mislead here.)',
         a=M('0 ≤ ' + sq('x') + ' &lt; 4'), check=('custom', 'square_range_trap')),
    dict(q='If ' + rng(1, 'a', 2) + ' and ' + M('−3 &lt; b &lt; −1') + ', estimate '
           + M('ab') + '.', a=M('−6 &lt; ab &lt; −1'),
         check=('bound', 'a*b', {'a': ('1', '2'), 'b': ('-3', '-1')}, '-6', '-1')),
    dict(q='If ' + rng(2, 'a', 3) + ' and ' + rng(4, 'b', 6) + ', estimate '
           + M(sq('a') + ' + ' + sq('b')) + '.',
         a=M('20 &lt; ' + sq('a') + ' + ' + sq('b') + ' &lt; 45'),
         check=('bound', 'a**2+b**2', {'a': ('2', '3'), 'b': ('4', '6')}, '20', '45')),
    dict(q='Show by a counter-example that inequalities may not be divided term by term.',
         a=M('8 &gt; 2') + ' and ' + M('4 &gt; 1') + ' give ' + M('2 = 2') + ', not '
           + M('&gt;'), check=('bool', '(8 > 2) & (4 > 1) & (Rational(8,4) == Rational(2,1))')),
    dict(q='If ' + rng(1, 'a', 2) + ', estimate ' + M(F('a + 1', 'a')) + '.',
         a=M(F(3, 2) + ' &lt; ' + F('a + 1', 'a') + ' &lt; 2'),
         check=('bound', '(a+1)/a', {'a': ('1', '2')}, 'Rational(3,2)', '2')),
    dict(q='If ' + rng(2, 'x', 4) + ' and ' + rng(1, 'y', 3) + ', estimate '
           + M('x − 2y') + '.', a=M('−4 &lt; x − 2y &lt; 2'),
         check=('bound', 'x-2*y', {'x': ('2', '4'), 'y': ('1', '3')}, '-4', '2')),
    dict(q='If ' + rng(3, 'a', 4) + ', estimate ' + M(F(1, 'a − 2')) + '.',
         a=M(F(1, 2) + ' &lt; ' + F(1, 'a − 2') + ' &lt; 1'),
         check=('bound', '1/(a-2)', {'a': ('3', '4')}, 'Rational(1,2)', '1')),
    dict(q='If ' + rng(1, 'a', 3) + ' and ' + rng(2, 'b', 4) + ', estimate '
           + M('a + ' + F(1, 'b')) + '.',
         a=M(F(5, 4) + ' &lt; a + ' + F(1, 'b') + ' &lt; ' + F(7, 2)),
         check=('bound', 'a+1/b', {'a': ('1', '3'), 'b': ('2', '4')},
                'Rational(5,4)', 'Rational(7,2)')),
    dict(q='If ' + M('−1 &lt; x &lt; 2') + ', estimate ' + M(sq('x', 3)) + '.',
         a=M('−1 &lt; ' + sq('x', 3) + ' &lt; 8'),
         check=('bound', 'x**3', {'x': ('-1', '2')}, '-1', '8')),
    dict(q='If ' + rng(1, 'a', 2) + ' and ' + rng(1, 'b', 2) + ', estimate '
           + M(F('a', 'b')) + '.',
         a=M(F(1, 2) + ' &lt; ' + F('a', 'b') + ' &lt; 2'),
         check=('bound', 'a/b', {'a': ('1', '2'), 'b': ('1', '2')},
                'Rational(1,2)', '2')),
]

Q_BEYOND = [
    dict(q='Prove that ' + M('a &gt; b') + ' and ' + M('c &gt; d') + ' give '
           + M('a + c &gt; b + d') + '.', a='Add the two positive differences.',
         check=('custom', 'add_inequalities'),
         sol='a − b > 0 and c − d > 0, so their sum (a + c) − (b + d) is positive. '
             'Adding same-direction inequalities is always safe — no sign condition at all.'),
    dict(q='Show that ' + M('a &gt; b') + ' and ' + M('c &gt; d') + ' do <em>not</em> give '
           + M('ac &gt; bd') + '.', a=M('a = 2, b = −3, c = 1, d = −4'),
         check=('bool', '(2 > -3) & (1 > -4) & (2*1 < (-3)*(-4))'),
         sol='With a = 2, b = −3, c = 1, d = −4: ac = 2 but bd = 12. Multiplication needs '
             'every number positive; the rule is not symmetric with addition.'),
    dict(q='A rectangle has ' + M('2.4 &lt; L &lt; 2.5') + ' m and '
           + M('1.7 &lt; W &lt; 1.8') + ' m. Estimate its perimeter and its area.',
         a=M('8.2 &lt; P &lt; 8.6') + ' m, ' + M('4.08 &lt; A &lt; 4.5') + ' m²',
         check=('bound', '2*(a+b)', {'a': ('Rational(24,10)', 'Rational(25,10)'),
                                     'b': ('Rational(17,10)', 'Rational(18,10)')},
                'Rational(82,10)', 'Rational(86,10)'),
         sol='Perimeter 2(L+W): add the bounds first, then double. Area L·W: multiply the '
             'bounds, allowed because every number is positive. '
             'A = between 2.4·1.7 = 4.08 and 2.5·1.8 = 4.5.'),
    dict(q='If ' + rng(2, 'x', 3) + ', estimate ' + M(F('x + 1', 'x − 1')) + '.',
         a=M('2 &lt; ' + F('x + 1', 'x − 1') + ' &lt; 3'),
         check=('bound', '(x+1)/(x-1)', {'x': ('2', '3')}, '2', '3'),
         sol='Write (x+1)/(x−1) = 1 + 2/(x−1), which falls as x rises. At x = 2 it is 3 '
             'and at x = 3 it is 2, so the value lies between 2 and 3 — the ends swap over.'),
    dict(q='If ' + M('a + b = 10') + ' with ' + M('a, b &gt; 0') + ', what values can '
           + M('ab') + ' take?', a=M('0 &lt; ab ≤ 25'), check=('custom', 'sum_ten_product'),
         sol='With b = 10 − a, ab = 10a − a² = 25 − (a−5)². That is at most 25, reached at '
             'a = b = 5, and it approaches 0 as a nears 0 or 10 without reaching it.'),
    dict(q='If ' + M('|x − 3| &lt; 1') + ' and ' + M('|y + 2| &lt; 2') + ', estimate '
           + M('x + y') + '.', a=M('−2 &lt; x + y &lt; 4'),
         check=('bound', 'x+y', {'x': ('2', '4'), 'y': ('-4', '0')}, '-2', '4'),
         sol='The modulus conditions say 2 < x < 4 and −4 < y < 0. Adding the two, '
             '−2 < x + y < 4. The common slip is to add 2 + (−2) and 4 + 0, which uses '
             'the wrong ends of the second range.'),
    dict(q='If ' + rng(1, 'a', 2) + ', ' + rng(1, 'b', 2) + ' and ' + rng(1, 'c', 2)
           + ', estimate ' + M('abc') + '.', a=M('1 &lt; abc &lt; 8'),
         check=('bound', 'a*b*c', {'a': ('1', '2'), 'b': ('1', '2'), 'c': ('1', '2')},
                '1', '8'),
         sol='All three are positive, so the three inequalities may be multiplied: '
             '1·1·1 < abc < 2·2·2.'),
    dict(q='If ' + rng(1, 'a', 2) + ' and ' + rng(3, 'b', 4) + ', estimate '
           + M(F('b', 'a')) + '.',
         a=M(F(3, 2) + ' &lt; ' + F('b', 'a') + ' &lt; 4'),
         check=('bound', 'b/a', {'a': ('1', '2'), 'b': ('3', '4')},
                'Rational(3,2)', '4'),
         sol='Dividing is multiplying by the reciprocal, and 1/2 < 1/a < 1. '
             'So b/a runs from 3·(1/2) to 4·1.'),
    dict(q='If ' + M('x &gt; 0') + ' and ' + M(F(1, 'x') + ' &gt; 2') + ', what is '
           + M('x') + '?', a=M('0 &lt; x &lt; ' + F(1, 2)),
         check=('custom', 'reciprocal_bound'),
         sol='Both sides are positive, so taking reciprocals reverses the sign: '
             'x < 1/2. With x > 0 that gives 0 < x < 1/2.'),
    dict(q='If ' + rng(1, 'x', 2) + ', put ' + M('x') + ', ' + M(sq('x')) + ' and '
           + M(rt('x')) + ' in increasing order.',
         a=M(rt('x') + ' &lt; x &lt; ' + sq('x')), check=('custom', 'order_powers_unit'),
         sol='For x > 1 a larger index gives a larger value, so √x = x^(1/2) < x < x². '
             'Below 1 the order would reverse.'),
    dict(q='Estimate ' + M('x + ' + F(1, 'x')) + ' for ' + M(F(1, 2) + ' &lt; x &lt; 2')
           + '.', a=M('2 ≤ x + ' + F(1, 'x') + ' &lt; ' + F(5, 2)),
         check=('custom', 'x_plus_inverse_range'),
         sol='The corners both give 5/2, but the function dips in the middle: '
             'x + 1/x ≥ 2 with equality at x = 1. So the range is 2 to 5/2, '
             'and the minimum is inside the interval, not at an end.'),
    dict(q='If ' + M('a + b + c = 1') + ' with ' + M('a, b, c &gt; 0') + ', estimate '
           + M(sq('a') + ' + ' + sq('b') + ' + ' + sq('c')) + '.',
         a=M(F(1, 3) + ' ≤ ' + sq('a') + ' + ' + sq('b') + ' + ' + sq('c') + ' &lt; 1'),
         check=('custom', 'sum_squares_range'),
         sol='By the a²+b²+c² ≥ ab+bc+ca result, 3(a²+b²+c²) ≥ (a+b+c)² = 1, so the sum '
             'is at least 1/3, reached at a = b = c = 1/3. It stays below 1 because the '
             'cross terms 2(ab+bc+ca) are positive.'),
    dict(q='If ' + M('0 &lt; a &lt; 1') + ', show that ' + M(F(1, '1 − a') + ' &gt; 1 + a')
           + '.', a='The difference is ' + M(F(sq('a'), '1 − a')),
         check=('custom', 'geometric_bound'),
         sol='1/(1−a) − (1+a) = (1 − (1−a)(1+a))/(1−a) = (1 − 1 + a²)/(1−a) = a²/(1−a), '
             'which is positive for 0 < a < 1.'),
    dict(q='Prove that two inequalities of the same direction may always be added, but '
           'give the condition needed before they may be multiplied.',
         a='Addition: always. Multiplication: all terms positive.', check=None,
         sol='From a > b and c > d, (a+c) − (b+d) = (a−b) + (c−d) > 0 — no condition. '
             'For multiplication, ac − bd = c(a−b) + b(c−d), which needs b and c to be '
             'non-negative to conclude it is positive. Hence the positivity requirement.'),
    dict(q='If ' + rng(3, 'a', 4) + ' and ' + rng(1, 'b', 2) + ', estimate '
           + M(F('a + b', 'a − b')) + '.',
         a=M(F(5, 3) + ' &lt; ' + F('a + b', 'a − b') + ' &lt; 5'),
         check=('bound', '(a+b)/(a-b)', {'a': ('3', '4'), 'b': ('1', '2')},
                'Rational(5,3)', '5'),
         sol='Test all four corners: (3,1) → 2, (3,2) → 5, (4,1) → 5/3, (4,2) → 3. '
             'The extremes are 5/3 and 5. Note a > b throughout, so the denominator '
             'never reaches zero — always check that before trusting a corner.'),
]

TOPIC = dict(
    key='alg-18', number=18, lessons='42–43',
    unit='Unit 3 · Numerical inequalities',
    title='Adding and multiplying inequalities',
    subtitle='Two inequalities pointing the same way can be added — and, when everything '
             'is positive, multiplied.',
    uz='Algebra 8, §13, pp. 75–79', cam='Cambridge Stage 9 · beyond',
    keywords=['add inequalities', 'multiply inequalities', 'same direction', 'estimate',
              'range', 'lower bound', 'upper bound', 'term by term'],
    remember=[
        'Same direction may always be <b>added</b>: '
        '<span class="m">a &gt; b</span>, <span class="m">c &gt; d</span> give '
        '<span class="m">a + c &gt; b + d</span>.',
        'They may be <b>multiplied</b> only when every number is positive.',
        'They may <b>never</b> be subtracted or divided term by term.',
        'To estimate a difference, turn it into a sum: '
        '<span class="m">a − b = a + (−b)</span>, and reverse the bounds of '
        '<span class="m">b</span>.',
        'Check the <b>corners</b> of the ranges — but watch for a function that turns '
        'round inside, like <span class="m">x<sup>2</sup></span> across zero.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
