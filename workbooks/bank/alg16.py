# -*- coding: utf-8 -*-
"""Questions for topic 16 of Grade 8 algebra — numerical inequalities."""

from .common import F, M, rt, sq

Q_FOCUS = [
    dict(q='Which is greater, ' + M(F(3, 4)) + ' or ' + M('0.7') + '?', a=M(F(3, 4)),
         check=('bool', 'Rational(3,4) > Rational(7,10)')),
    dict(q='Which is greater, ' + M('−5') + ' or ' + M('−8') + '?', a=M('−5'),
         check=('bool', '-5 > -8')),
    dict(q='True or false: ' + M('−3 < −1') + '.', a='True', check=('bool', '-3 < -1')),
    dict(q='Which is greater, ' + M(F(2, 3)) + ' or ' + M(F(3, 5)) + '?', a=M(F(2, 3)),
         check=('bool', 'Rational(2,3) > Rational(3,5)')),
    dict(q='Write as an inequality: ' + M('x') + ' is at least ' + M('5') + '.',
         a=M('x ≥ 5'), check=None),
    dict(q='Write as an inequality: ' + M('y') + ' is less than ' + M('−2') + '.',
         a=M('y < −2'), check=None),
    dict(q='Which is greater, ' + M(rt(2)) + ' or ' + M('1.5') + '?', a=M('1.5'),
         check=('bool', 'Rational(3,2) > sqrt(2)')),
    dict(q='If ' + M('a − b = 3') + ', which of ' + M('a') + ' and ' + M('b')
           + ' is greater?', a=M('a'), check=('bool', '3 > 0')),
    dict(q='Which is greater, ' + M('0.3') + ' or ' + M(F(1, 3)) + '?', a=M(F(1, 3)),
         check=('bool', 'Rational(1,3) > Rational(3,10)')),
    dict(q='Is ' + M('7 ≥ 7') + ' true?', a='Yes — ' + M('≥') + ' allows equality.',
         check=('bool', '7 >= 7')),
]

Q_PRACTICE = [
    dict(q='Which is greater, ' + M(F(5, 7)) + ' or ' + M(F(7, 9)) + '?', a=M(F(7, 9)),
         check=('bool', 'Rational(7,9) > Rational(5,7)')),
    dict(q='Show that ' + M(sq('x') + ' + 1 > x') + ' for every real ' + M('x') + '.',
         a='The difference is ' + M('(x − ' + F(1, 2) + ')<sup>2</sup> + ' + F(3, 4)),
         check=('nonneg', 'x**2 + 1 - x')),
    dict(q='Show that ' + M(sq('a') + ' + 1 ≥ 2a') + ' for every real ' + M('a') + '.',
         a='The difference is ' + M('(a − 1)<sup>2</sup>'),
         check=('nonneg', 'a**2 + 1 - 2*a')),
    dict(q='Which is greater, ' + M(F(1, 2) + ' + ' + F(1, 3)) + ' or ' + M('1') + '?',
         a=M('1'), check=('bool', '1 > Rational(1,2)+Rational(1,3)')),
    dict(q='Which is greater, ' + M(sq(2, 10)) + ' or ' + M(sq(10, 3)) + '?',
         a=M(sq(2, 10)) + ' = ' + M('1024'),
         check=('bool', 'Integer(2)**10 > Integer(10)**3')),
    dict(q='Which is greater, ' + M('−' + F(2, 3)) + ' or ' + M('−' + F(3, 4)) + '?',
         a=M('−' + F(2, 3)), check=('bool', 'Rational(-2,3) > Rational(-3,4)')),
    dict(q='Put in increasing order: ' + M('−1.5, 0, ' + F(2, 3) + ', −' + F(1, 2)) + '.',
         a=M('−1.5 < −' + F(1, 2) + ' < 0 < ' + F(2, 3)),
         check=('bool', 'Rational(-3,2) < Rational(-1,2)')),
    dict(q='Which is greater at ' + M('a = 4') + ', ' + M('b = 9') + ': '
           + M(F('a + b', 2)) + ' or ' + M(rt('ab')) + '?',
         a=M(F('a + b', 2)) + ' = ' + M('6.5'),
         check=('bool', 'Rational(13,2) > sqrt(36)')),
    dict(q='Show that ' + M(sq('x') + ' + 4 ≥ 4x') + ', with equality only at '
           + M('x = 2') + '.',
         a='The difference is ' + M('(x − 2)<sup>2</sup>'),
         check=('nonneg', 'x**2 + 4 - 4*x')),
    dict(q='Which is greater, ' + M(F(3, 7)) + ' or ' + M(F(4, 9)) + '?', a=M(F(4, 9)),
         check=('bool', 'Rational(4,9) > Rational(3,7)')),
]

Q_CHALLENGE = [
    dict(q='Prove that ' + M(sq('a') + ' + ' + sq('b') + ' ≥ 2ab') + ' for all real '
           + M('a, b') + '.', a='The difference is ' + M('(a − b)<sup>2</sup>'),
         check=('nonneg', 'a**2 + b**2 - 2*a*b')),
    dict(q='Prove that ' + M(F('a', 'b') + ' + ' + F('b', 'a') + ' ≥ 2') + ' for '
           + M('a, b > 0') + '.',
         a='The difference is ' + M(F('(a − b)<sup>2</sup>', 'ab')),
         check=('nonneg', 'a/b + b/a - 2', 'pos')),
    dict(q='Which is greater, ' + M(F(100, 101)) + ' or ' + M(F(101, 102)) + '?',
         a=M(F(101, 102)), check=('bool', 'Rational(101,102) > Rational(100,101)')),
    dict(q='Prove that ' + M('(a + b)<sup>2</sup> ≥ 4ab') + ' for all real ' + M('a, b')
           + '.', a='The difference is ' + M('(a − b)<sup>2</sup>'),
         check=('nonneg', '(a+b)**2 - 4*a*b')),
    dict(q='Which is greater, ' + M(rt(5) + ' + ' + rt(3)) + ' or ' + M(rt(15) + ' + 1')
           + '?', a=M(rt(15) + ' + 1'),
         check=('bool', 'sqrt(15)+1 > sqrt(5)+sqrt(3)')),
    dict(q='Prove that ' + M('x + ' + F(1, 'x') + ' ≥ 2') + ' for ' + M('x > 0') + '.',
         a='The difference is ' + M(F('(x − 1)<sup>2</sup>', 'x')),
         check=('nonneg', 'x + 1/x - 2', 'pos')),
    dict(q='Prove that ' + M(sq('a') + ' + ' + sq('b') + ' + ' + sq('c') + ' ≥ ab + bc + ca')
           + '.',
         a='Twice the difference is ' + M('(a − b)<sup>2</sup> + (b − c)<sup>2</sup> + (c − a)<sup>2</sup>'),
         check=('nonneg', 'a**2+b**2+c**2 - a*b - b*c - c*a')),
    dict(q='Which is greater, ' + M(sq(2, 30)) + ' or ' + M(sq(3, 20)) + '?',
         a=M(sq(3, 20)), check=('bool', 'Integer(3)**20 > Integer(2)**30')),
    dict(q='Prove that ' + M(sq('x') + ' + ' + sq('y') + ' + 1 ≥ xy + x + y') + '.',
         a='Twice the difference is a sum of three squares.',
         check=('nonneg', 'x**2+y**2+1 - x*y - x - y')),
    dict(q='Which is greater, ' + M(F(1, rt(2))) + ' or ' + M(rt(2) + ' − 1') + '?',
         a=M(F(1, rt(2))), check=('bool', '1/sqrt(2) > sqrt(2)-1')),
]

Q_BEYOND = [
    dict(q='Prove that ' + M('(a + b + c)<sup>2</sup> ≥ 3(ab + bc + ca)') + '.',
         a='The difference is ' + M(F(1, 2)) + ' of a sum of three squares.',
         check=('nonneg', '(a+b+c)**2 - 3*(a*b+b*c+c*a)'),
         sol='(a+b+c)² − 3(ab+bc+ca) = a²+b²+c² − ab−bc−ca, which is '
             '½[(a−b)² + (b−c)² + (c−a)²] ≥ 0. Equality exactly when a = b = c.'),
    dict(q='Prove that ' + M(sq('a', 3) + ' + ' + sq('b', 3) + ' + ' + sq('c', 3) + ' ≥ 3abc')
           + ' for ' + M('a, b, c ≥ 0') + '.',
         a='Use the factorisation of ' + M(sq('a', 3) + ' + ' + sq('b', 3) + ' + '
                                           + sq('c', 3) + ' − 3abc'),
         check=('nonneg', 'a**3+b**3+c**3-3*a*b*c', 'pos'),
         sol='a³+b³+c³−3abc = (a+b+c)(a²+b²+c²−ab−bc−ca). The first bracket is ≥ 0 and '
             'the second is ½[(a−b)²+(b−c)²+(c−a)²] ≥ 0, so the product is ≥ 0. '
             'This is AM–GM for three numbers.'),
    dict(q='Prove that ' + M(F(1, 'a') + ' + ' + F(1, 'b') + ' + ' + F(1, 'c') + ' ≥ '
                             + F(9, 'a + b + c')) + ' for ' + M('a, b, c > 0') + '.',
         a='Multiply out and use ' + M(F('x', 'y') + ' + ' + F('y', 'x') + ' ≥ 2'),
         check=('nonneg', '1/a+1/b+1/c - 9/(a+b+c)', 'pos'),
         sol='(a+b+c)(1/a+1/b+1/c) = 3 + (a/b+b/a) + (b/c+c/b) + (c/a+a/c) ≥ 3 + 2 + 2 + 2 '
             '= 9. Dividing by the positive a+b+c gives the result, with equality when '
             'a = b = c.'),
    dict(q='Prove that ' + M('(a + b)(b + c)(c + a) ≥ 8abc') + ' for ' + M('a, b, c > 0')
           + '.', a='Multiply three copies of ' + M('a + b ≥ 2' + rt('ab')),
         check=('nonneg', '(a+b)*(b+c)*(c+a) - 8*a*b*c', 'pos'),
         sol='By AM–GM, a+b ≥ 2√(ab), b+c ≥ 2√(bc) and c+a ≥ 2√(ca). All sides are '
             'positive, so the three may be multiplied: the product is at least '
             '8√(a²b²c²) = 8abc. Equality when a = b = c.'),
    dict(q='Which is greater, ' + M(sq(99, 100)) + ' or ' + M(sq(100, 99)) + '?',
         a=M(sq(99, 100)), check=('custom', 'ninety_nine_hundred'),
         sol='Compare by dividing: 100⁹⁹/99¹⁰⁰ = (100/99)⁹⁹ / 99. Now (1 + 1/99)⁹⁹ < e < 3, '
             'and 3/99 < 1, so the ratio is less than 1. Hence 99¹⁰⁰ is the larger.'),
    dict(q='Prove that ' + M(sq('a', 4) + ' + ' + sq('b', 4) + ' ≥ ' + sq('a', 3) + 'b + a'
                             + sq('b', 3)) + ' for all real ' + M('a, b') + '.',
         a='The difference factorises as ' + M('(a − b)<sup>2</sup>(' + sq('a') + ' + ab + '
                                               + sq('b') + ')'),
         check=('nonneg', 'a**4+b**4-a**3*b-a*b**3'),
         sol='a⁴+b⁴−a³b−ab³ = a³(a−b) − b³(a−b) = (a−b)(a³−b³) = (a−b)²(a²+ab+b²). '
             'The square is ≥ 0 and a²+ab+b² = (a + b/2)² + 3b²/4 ≥ 0.'),
    dict(q='Prove that ' + M(rt(sq('a') + ' + ' + sq('b')) + ' ≥ ' + F('a + b', rt(2)))
           + ' for ' + M('a, b ≥ 0') + '.',
         a='Square both sides.', check=('nonneg', '2*(a**2+b**2) - (a+b)**2', 'pos'),
         sol='Both sides are non-negative, so square: a²+b² against (a+b)²/2. '
             'Twice the difference is 2(a²+b²) − (a+b)² = (a−b)² ≥ 0.'),
    dict(q='If ' + M('x + y = 1') + ' with ' + M('x, y > 0') + ', show that '
           + M('xy ≤ ' + F(1, 4)) + '.', a='Maximum at ' + M('x = y = ' + F(1, 2)),
         check=('custom', 'product_bound_half'),
         sol='With y = 1 − x, xy = x − x² = 1/4 − (x − 1/2)² ≤ 1/4, '
             'and equality only at x = 1/2.'),
    dict(q='Show that ' + M(F(1, 2) + ' · ' + F(3, 4) + ' · ' + F(5, 6) + ' · … · '
                            + F(99, 100) + ' < ' + F(1, 10)) + '.',
         a='Compare with ' + M(F(2, 3) + ' · ' + F(4, 5) + ' · … · ' + F(100, 101)),
         check=('custom', 'wallis_product'),
         sol='Call the product P and let Q = (2/3)(4/5)…(100/101). Term by term P < Q, '
             'so P² < PQ = 1/101. Hence P < 1/√101 < 1/10.'),
    dict(q='Prove that ' + M(sq('a') + ' + ' + sq('b') + ' + ' + sq('c') + ' + ' + sq('d')
                             + ' ≥ ab + bc + cd + da') + '.',
         a='Group as ' + M('(a + c)(b + d)'),
         check=('nonneg', 'a**2+b**2+c**2+d**2 - (a*b+b*c+c*d+d*a)'),
         sol='The right side is (a+c)(b+d). Writing s = a+c and t = b+d, '
             'a²+c² ≥ s²/2 and b²+d² ≥ t²/2, so the left side is at least '
             '(s²+t²)/2 ≥ st.'),
    dict(q='If ' + M('a + b = 1') + ' with ' + M('a, b > 0') + ', prove that '
           + M('(1 + ' + F(1, 'a') + ')(1 + ' + F(1, 'b') + ') ≥ 9') + '.',
         a='Minimum at ' + M('a = b = ' + F(1, 2)), check=('custom', 'nine_bound'),
         sol='With b = 1 − a the product is (1+1/a)(1+1/(1−a)) = 1/(a(1−a)) + ... '
             'More directly: (1+1/a)(1+1/b) = (a+1)(b+1)/(ab) = (ab + a + b + 1)/(ab) '
             '= (ab + 2)/(ab). Since ab ≤ 1/4 this is at least (1/4 + 2)/(1/4) = 9.'),
    dict(q='Which is larger, ' + M(rt('n + 1') + ' − ' + rt('n')) + ' or '
           + M(rt('n') + ' − ' + rt('n − 1')) + ', for ' + M('n ≥ 1') + '?',
         a=M(rt('n') + ' − ' + rt('n − 1')), check=('custom', 'root_gaps'),
         sol='Each is 1/(√(n+1)+√n) and 1/(√n+√(n−1)). The first denominator is larger, '
             'so the first fraction is smaller: the gaps between consecutive roots shrink.'),
    dict(q='Prove that ' + M('(a + b + c)(' + F(1, 'a') + ' + ' + F(1, 'b') + ' + '
                             + F(1, 'c') + ') ≥ 9') + ' for ' + M('a, b, c > 0') + '.',
         a='Equality when ' + M('a = b = c'),
         check=('nonneg', '(a+b+c)*(1/a+1/b+1/c) - 9', 'pos'),
         sol='Expanding gives 3 + (a/b + b/a) + (b/c + c/b) + (c/a + a/c), and each '
             'bracket is at least 2 by the x + 1/x ≥ 2 result. So the total is at least '
             '3 + 6 = 9.'),
    dict(q='Show that ' + M('n! < ' + sq('n', 'n')) + ' for every ' + M('n ≥ 2') + '.',
         a='Each factor below ' + M('n') + ' is smaller than ' + M('n'),
         check=('custom', 'factorial_bound'),
         sol='n! = 1·2·…·n has n factors, every one of them at most n and at least one '
             '(namely 1) strictly less. So the product is strictly less than n·n·…·n '
             '= nⁿ.'),
    dict(q='Prove that ' + M(F('a + b', 2) + ' ≥ ' + rt('ab')) + ' for ' + M('a, b ≥ 0')
           + ', and say when the two are equal.',
         a='Equality when ' + M('a = b'), check=('nonneg', 'a+b-2*sqrt(a*b)', 'pos'),
         sol='a + b − 2√(ab) = (√a − √b)² ≥ 0. Equality needs √a = √b, that is a = b. '
             'This is the arithmetic–geometric mean inequality, the root of most of '
             'the inequalities on this page.'),
]

TOPIC = dict(
    key='alg-16', number=16, lessons='38–39',
    unit='Unit 3 · Numerical inequalities',
    title='Numerical inequalities',
    subtitle='What "greater than" really means — one definition by subtraction that '
             'settles every comparison, however awkward the numbers.',
    uz='Algebra 8, §11, pp. 68–70', cam='Cambridge Stage 9 · 4.3',
    keywords=['inequality', 'greater than', 'less than', 'strict inequality',
              'non-strict inequality', 'difference', 'positive', 'negative',
              'number line', 'compare'],
    remember=[
        'The definition: <span class="m">a &gt; b</span> means '
        '<span class="m">a − b</span> is <b>positive</b>. Every comparison reduces to '
        'the sign of a difference.',
        'To compare two awkward numbers, subtract — or, for positives, divide and '
        'compare with <span class="m">1</span>.',
        'A square is never negative, so <span class="m">(a − b)<sup>2</sup> ≥ 0</span> '
        'proves a great many inequalities on its own.',
        '<span class="m">&lt;</span> and <span class="m">&gt;</span> are strict; '
        '<span class="m">≤</span> and <span class="m">≥</span> allow equality — say '
        'which case gives it.',
        'For positive numbers, raising both to the same power keeps the order, which '
        'clears roots away.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
