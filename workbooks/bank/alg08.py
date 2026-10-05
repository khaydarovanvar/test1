# -*- coding: utf-8 -*-
"""Questions for topic 8 of Grade 8 algebra — fractional-rational expressions."""

from .common import F, M, sq

x2, x3 = sq('x'), sq('x', 3)
a2, b2, c2, y2, z2 = sq('a'), sq('b'), sq('c'), sq('y'), sq('z')

Q_FOCUS = [
    dict(q='Simplify ' + M('(' + F(1, 'x') + ' + ' + F(1, 'y') + ') · xy') + '.',
         a=M('y + x'), check=('simp', '(1/x+1/y)*x*y', 'y+x')),
    dict(q='Simplify ' + M('(' + F(1, 2) + ' + ' + F(1, 3) + ') ÷ ' + F(1, 6)) + '.',
         a=M('5'), check=('simp', '(Rational(1,2)+Rational(1,3))/Rational(1,6)', '5')),
    dict(q='Simplify ' + M('x(' + F(1, 'x') + ' + 1)') + '.', a=M('1 + x'),
         check=('simp', 'x*(1/x+1)', '1+x')),
    dict(q='Write ' + M('1 + ' + F(1, 'x')) + ' as a single fraction.',
         a=M(F('x + 1', 'x')), check=('simp', '1+1/x', '(x+1)/x')),
    dict(q='Write ' + M('1 − ' + F(1, 'x')) + ' as a single fraction.',
         a=M(F('x − 1', 'x')), check=('simp', '1-1/x', '(x-1)/x')),
    dict(q='Simplify ' + M(F(F(1, 'x'), F(1, 'y'))) + '.', a=M(F('y', 'x')),
         check=('simp', '(1/x)/(1/y)', 'y/x')),
    dict(q='Simplify ' + M(F(F('a', 'b'), 'a')) + '.', a=M(F(1, 'b')),
         check=('simp', '(a/b)/a', '1/b')),
    dict(q='Simplify ' + M(F(F('x', 2), F('x', 3))) + '.', a=M(F(3, 2)),
         check=('simp', '(x/2)/(x/3)', 'Rational(3,2)')),
    dict(q='Simplify ' + M(F(1, 'x') + ' + ' + F(1, 'x')) + '.', a=M(F(2, 'x')),
         check=('simp', '1/x+1/x', '2/x')),
    dict(q='Simplify ' + M(F(F(1, 3), F(2, 9))) + '.', a=M(F(3, 2)),
         check=('simp', 'Rational(1,3)/Rational(2,9)', 'Rational(3,2)')),
]

Q_PRACTICE = [
    dict(q='Simplify ' + M(F('1 + ' + F(1, 'x'), '1 − ' + F(1, 'x'))) + '.',
         a=M(F('x + 1', 'x − 1')), check=('simp', '(1+1/x)/(1-1/x)', '(x+1)/(x-1)')),
    dict(q='Simplify ' + M(F(F(1, 'x') + ' − ' + F(1, 'y'), F(1, 'x') + ' + ' + F(1, 'y'))) + '.',
         a=M(F('y − x', 'y + x')), check=('simp', '(1/x-1/y)/(1/x+1/y)', '(y-x)/(y+x)')),
    dict(q='Simplify ' + M('(x + ' + F(1, 'x') + ') · ' + F('x', f'{x2} + 1')) + '.',
         a=M('1'), check=('simp', '(x+1/x)*(x/(x**2+1))', '1')),
    dict(q='Simplify ' + M('(' + F(1, 'x − 1') + ' + ' + F(1, 'x + 1') + ') · '
                           + F(f'{x2} − 1', 2)) + '.',
         a=M('x'), check=('simp', '(1/(x-1)+1/(x+1))*((x**2-1)/2)', 'x')),
    dict(q='Simplify ' + M(F('a + b', F(1, 'a') + ' + ' + F(1, 'b'))) + '.', a=M('ab'),
         check=('simp', '(a+b)/(1/a+1/b)', 'a*b')),
    dict(q='Simplify ' + M(F(F(1, 'x') + ' − 1', '1 − x')) + '.', a=M(F(1, 'x')),
         check=('simp', '(1/x-1)/(1-x)', '1/x')),
    dict(q='Simplify ' + M(F('x − ' + F(1, 'x'), '1 + ' + F(1, 'x'))) + '.', a=M('x − 1'),
         check=('simp', '(x-1/x)/(1+1/x)', 'x-1')),
    dict(q='Simplify ' + M(F(F(1, x2) + ' − 1', F(1, 'x') + ' − 1')) + '.',
         a=M(F('1 + x', 'x')), check=('simp', '(1/x**2-1)/(1/x-1)', '(1+x)/x')),
    dict(q='Prove that ' + M(F('a', 'b') + ' + ' + F('b', 'a') + ' = ' + F(f'{a2} + {b2}', 'ab'))
           + '.',
         a=M(F(f'{a2} + {b2}', 'ab')), check=('simp', 'a/b+b/a', '(a**2+b**2)/(a*b)')),
    dict(q='Simplify ' + M('(' + F(2, 'x') + ' + ' + F(3, x2) + ') · ' + x2) + '.',
         a=M('2x + 3'), check=('simp', '(2/x+3/x**2)*x**2', '2*x+3')),
]

Q_CHALLENGE = [
    dict(q='Simplify ' + M('(' + F(1, 'x − 1') + ' − ' + F(1, 'x + 1') + ') ÷ '
                           + F(4, f'{x2} − 1')) + '.',
         a=M(F(1, 2)),
         check=('simp', '(1/(x-1)-1/(x+1))/(4/(x**2-1))', 'Rational(1,2)')),
    dict(q='Simplify ' + M(F('x', 'x − y') + ' − ' + F('y', 'x + y')) + '.',
         a=M(F(f'{x2} + {y2}', f'{x2} − {y2}')),
         check=('simp', 'x/(x-y)-y/(x+y)', '(x**2+y**2)/(x**2-y**2)')),
    dict(q='Simplify ' + M('(' + F('a + b', 'a − b') + ' − ' + F('a − b', 'a + b') + ') ÷ '
                           + F('4ab', f'{a2} − {b2}')) + '.',
         a=M('1'),
         check=('simp', '((a+b)/(a-b)-(a-b)/(a+b))/((4*a*b)/(a**2-b**2))', '1')),
    dict(q='Simplify ' + M('(1 + ' + F(1, 'x − 1') + ') · ' + F('x − 1', 'x + 1')) + '.',
         a=M(F('x', 'x + 1')),
         check=('simp', '(1+1/(x-1))*((x-1)/(x+1))', 'x/(x+1)')),
    dict(q='Simplify ' + M('(' + F(1, 'x') + ' + ' + F(1, 'x + 1') + ') ÷ '
                           + F('2x + 1', 'x')) + '.',
         a=M(F(1, 'x + 1')),
         check=('simp', '(1/x+1/(x+1))/((2*x+1)/x)', '1/(x+1)')),
    dict(q='Simplify ' + M(F('x + 2', f'{x2} − 1') + ' · ' + F('x − 1', 'x + 2') + ' + '
                           + F(1, 'x + 1')) + '.',
         a=M(F(2, 'x + 1')),
         check=('simp', '((x+2)/(x**2-1))*((x-1)/(x+2)) + 1/(x+1)', '2/(x+1)')),
    dict(q='Prove that ' + M('(' + F(1, 'a') + ' + ' + F(1, 'b') + ') · ' + F('ab', 'a + b')
                             + ' = 1') + '.',
         a=M('1'), check=('simp', '(1/a+1/b)*(a*b/(a+b))', '1')),
    dict(q='Simplify ' + M(F('x', 'x + 1') + ' − ' + F(1, 'x − 1')) + '.',
         a=M(F(f'{x2} − 2x − 1', f'{x2} − 1')),
         check=('simp', 'x/(x+1)-1/(x-1)', '(x**2-2*x-1)/(x**2-1)')),
    dict(q='Simplify ' + M(F(1, '1 + ' + F(1, '1 + x'))) + '.',
         a=M(F('1 + x', '2 + x')), check=('simp', '1/(1+1/(1+x))', '(1+x)/(2+x)')),
    dict(q='Simplify ' + M(F(f'{a2} − {b2}', 'ab') + ' · (' + F(1, 'a − b') + ' + '
                           + F(1, 'a + b') + ')') + '.',
         a=M(F(2, 'b')),
         check=('simp', '((a**2-b**2)/(a*b))*(1/(a-b)+1/(a+b))', '2/b')),
]

Q_BEYOND = [
    dict(q='Write ' + M(F(1, 'x') + ' + ' + F(1, 'x + 1') + ' + ' + F(1, 'x + 2'))
           + ' as a single fraction.',
         a=M(F(f'3{x2} + 6x + 2', 'x(x + 1)(x + 2)')),
         check=('simp', '1/x+1/(x+1)+1/(x+2)',
                '(3*x**2+6*x+2)/(x*(x+1)*(x+2))'),
         sol='The LCD is x(x+1)(x+2). The numerators become (x+1)(x+2) + x(x+2) + x(x+1) '
             '= (x²+3x+2) + (x²+2x) + (x²+x) = 3x² + 6x + 2, which does not factorise, '
             'so the fraction is already in lowest terms.'),
    dict(q='Simplify the continued fraction '
           + M('1 + ' + F(1, '1 + ' + F(1, '1 + ' + F(1, 'x')))) + '.',
         a=M(F('3x + 2', '2x + 1')),
         check=('simp', '1+1/(1+1/(1+1/x))', '(3*x+2)/(2*x+1)'),
         sol='Work outwards: 1 + 1/x = (x+1)/x; then 1 + x/(x+1) = (2x+1)/(x+1); '
             'then 1 + (x+1)/(2x+1) = (3x+2)/(2x+1). The coefficients 1,1,2,3 are '
             'Fibonacci numbers — they always are for this fraction.'),
    dict(q='Simplify ' + M(F('x + y', 'xy') + ' ÷ (' + F(1, x2) + ' − ' + F(1, y2) + ')') + '.',
         a=M(F('xy', 'y − x')),
         check=('simp', '((x+y)/(x*y))/(1/x**2-1/y**2)', 'x*y/(y-x)'),
         sol='1/x² − 1/y² = (y² − x²)/(x²y²) = (y−x)(y+x)/(x²y²). Dividing, '
             '((x+y)/(xy))·(x²y²/((y−x)(y+x))) = xy/(y−x).'),
    dict(q='If ' + M('a + b + c = 0') + ', prove that '
           + M(f'{a2} + {b2} + {c2} = −2(ab + bc + ca)') + '.',
         a=M('−2(ab + bc + ca)'), check=('custom', 'squares_sum_zero'),
         sol='Square the condition: (a+b+c)² = a²+b²+c² + 2(ab+bc+ca) = 0, '
             'so a²+b²+c² = −2(ab+bc+ca). In particular the right side is never negative, '
             'so ab + bc + ca ≤ 0.'),
    dict(q='Simplify ' + M('(' + F(1, f'{x2} − x') + ' + ' + F(1, f'{x2} + x') + ') · '
                           + F(f'{x2} − 1', 'x')) + '.',
         a=M(F(2, 'x')),
         check=('simp', '(1/(x**2-x)+1/(x**2+x))*((x**2-1)/x)', '2/x'),
         sol='The bracket is 1/(x(x−1)) + 1/(x(x+1)) = 2x/(x(x²−1)) = 2/(x²−1). '
             'Multiplying by (x²−1)/x leaves 2/x.'),
    dict(q='If ' + M('x = ' + F('a − b', 'a + b')) + ', show that '
           + M(F('1 + x', '1 − x') + ' = ' + F('a', 'b')) + '.',
         a=M(F('a', 'b')), check=('custom', 'componendo'),
         sol='1 + x = (a+b+a−b)/(a+b) = 2a/(a+b) and 1 − x = (a+b−a+b)/(a+b) = 2b/(a+b). '
             'Dividing, the (a+b) and the 2 both cancel, leaving a/b.'),
    dict(q='Simplify ' + M(F(F(1, 'a') + ' + ' + F(1, 'b') + ' + ' + F(1, 'c'),
                             F(1, 'ab') + ' + ' + F(1, 'bc') + ' + ' + F(1, 'ca'))) + '.',
         a=M(F('ab + bc + ca', 'a + b + c')),
         check=('simp', '(1/a+1/b+1/c)/(1/(a*b)+1/(b*c)+1/(c*a))',
                '(a*b+b*c+c*a)/(a+b+c)'),
         sol='Both parts over abc: the top is (bc+ca+ab)/(abc), the bottom is '
             '(c+a+b)/(abc). The abc cancels, leaving (ab+bc+ca)/(a+b+c).'),
    dict(q='If ' + M(F(1, 'x') + ' + ' + F(1, 'y') + ' + ' + F(1, 'z') + ' = 0')
           + ', prove that ' + M(f'(x + y + z)<sup>2</sup> = {x2} + {y2} + {z2}') + '.',
         a=M(f'{x2} + {y2} + {z2}'), check=('custom', 'reciprocal_sum_zero'),
         sol='The condition over a common denominator is (yz + zx + xy)/(xyz) = 0, so '
             'xy + yz + zx = 0. Then (x+y+z)² = x²+y²+z² + 2(xy+yz+zx) = x²+y²+z².'),
    dict(q='Given that ' + M(F('a', 'b − c') + ' + ' + F('b', 'c − a') + ' + '
                             + F('c', 'a − b') + ' = 0') + ', prove that '
           + M(F('a', '(b − c)<sup>2</sup>') + ' + ' + F('b', '(c − a)<sup>2</sup>') + ' + '
               + F('c', '(a − b)<sup>2</sup>') + ' = 0') + '.',
         a=M('0'), check=('custom', 'squared_denominators'),
         sol='Multiply the given sum by T = 1/(b−c) + 1/(c−a) + 1/(a−b). The cross terms '
             'cancel in pairs and what is left is exactly the second sum. Since the first '
             'factor is 0, the product is 0, so the second sum is 0 too.'),
    dict(q='Simplify ' + M(F(f'{x2} − 1', f'{x2} + 1') + ' · (1 + ' + F(1, x2) + ')') + '.',
         a=M(F(f'{x2} − 1', x2)),
         check=('simp', '((x**2-1)/(x**2+1))*(1+1/x**2)', '(x**2-1)/x**2'),
         sol='1 + 1/x² = (x²+1)/x², so the (x²+1) cancels and (x²−1)/x² is left.'),
    dict(q='Simplify ' + M(F('(a + ' + F(1, 'a') + ')<sup>2</sup> − (a − ' + F(1, 'a')
                             + ')<sup>2</sup>', 4)) + '.',
         a=M('1'), check=('simp', '((a+1/a)**2-(a-1/a)**2)/4', '1'),
         sol='The top is a difference of two squares: (2/a)(2a) = 4, so the whole is 1 '
             'for every a ≠ 0.'),
    dict(q='Find ' + M('(1 + ' + F(1, 1) + ')… (1 + ' + F(1, 'n') + ') · (1 − ' + F(1, 2)
                       + ')… (1 − ' + F(1, 'n') + ')') + '.',
         a=M(F('n + 1', 'n')), check=('custom', 'two_products'),
         sol='The first product telescopes to n + 1 and the second to 1/n, so together '
             'they give (n + 1)/n.'),
    dict(q='If ' + M('x + ' + F(1, 'x') + ' = a') + ', express ' + M(x3 + ' + ' + F(1, x3))
           + ' in terms of ' + M('a') + '.',
         a=M(sq('a', 3) + ' − 3a'), check=('custom', 'cube_in_terms_of_a'),
         sol='(x + 1/x)³ = x³ + 3x + 3/x + 1/x³ = x³ + 1/x³ + 3(x + 1/x). '
             'So a³ = (x³ + 1/x³) + 3a, giving x³ + 1/x³ = a³ − 3a.'),
    dict(q='Simplify ' + M(F('x − y', 'xy') + ' + ' + F('y − z', 'yz') + ' + '
                           + F('z − x', 'zx')) + '.',
         a=M('0'),
         check=('simp', '(x-y)/(x*y)+(y-z)/(y*z)+(z-x)/(z*x)', '0'),
         sol='Split each term: (1/y − 1/x) + (1/z − 1/y) + (1/x − 1/z). '
             'Everything cancels in pairs, so the sum is 0.'),
    dict(q='If ' + M('a + b + c = 0') + ' and none of them is zero, find '
           + M(F(a2, 'bc') + ' + ' + F(b2, 'ca') + ' + ' + F(c2, 'ab')) + '.',
         a=M('3'), check=('custom', 'three_squares_over_products'),
         sol='Over the common denominator abc the sum is (a³ + b³ + c³)/(abc). '
             'When a + b + c = 0 the numerator is 3abc, so the value is 3.'),
]

TOPIC = dict(
    key='alg-08', number=8, lessons='20–22',
    title='Identical transformation of fractional-rational expressions',
    subtitle='Everything from §§2–5 in one question: the long chains where the order of '
             'work decides whether it takes three lines or thirteen.',
    uz='Algebra 8, §6, pp. 30–33', cam='Cambridge Stage 9 · 2.3, 2.6',
    keywords=['rational expression', 'fractional-rational expression',
              'compound fraction', 'identity', 'identically equal', 'prove',
              'order of operations', 'transform'],
    remember=[
        'Work the brackets first, then multiplication and division, then addition and '
        'subtraction — the ordinary order, applied to fractions.',
        'A compound fraction is a division: '
        '<span class="m">(A/B) ÷ (C/D)</span>. Tidy the top and the bottom into single '
        'fractions, then multiply by the reciprocal.',
        'Cancel at every stage. An expression that is never allowed to grow stays easy.',
        'To prove an identity, transform <b>one</b> side until it matches the other; '
        'never move terms across the equals sign as if it were an equation.',
        'Check the result at one convenient value, such as '
        '<span class="m">x = 2</span> — a wrong sign shows up at once.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
