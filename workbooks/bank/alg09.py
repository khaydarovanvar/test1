# -*- coding: utf-8 -*-
"""Questions for topic 9 of Grade 8 algebra — revision for Control work 2 (§§5–6)."""

from .common import F, M, sq

x2, x3 = sq('x'), sq('x', 3)
a2, b2, y2 = sq('a'), sq('b'), sq('y')


def mul(p, q):
    return M(p) + ' · ' + M(q)


def div(p, q):
    return M(p) + ' ÷ ' + M(q)


Q_FOCUS = [
    dict(q='Simplify ' + mul(F(3, 'x'), F('x', 6)) + '.', a=M(F(1, 2)),
         check=('simp', '(3/x)*(x/6)', 'Rational(1,2)')),
    dict(q='Simplify ' + div(F('a', 4), F('a', 8)) + '.', a=M('2'),
         check=('simp', '(a/4)/(a/8)', '2')),
    dict(q='Simplify ' + mul(F(x2, 'y'), F(y2, 'x')) + '.', a=M('xy'),
         check=('simp', '(x**2/y)*(y**2/x)', 'x*y')),
    dict(q='Simplify ' + M('(' + F(2, 'x') + ')<sup>3</sup>') + '.', a=M(F(8, x3)),
         check=('simp', '(2/x)**3', '8/x**3')),
    dict(q='Simplify ' + mul(F('x', 3), F(9, x2)) + '.', a=M(F(3, 'x')),
         check=('simp', '(x/3)*(9/x**2)', '3/x')),
    dict(q='Simplify ' + div(F(1, 'a'), 'b') + '.', a=M(F(1, 'ab')),
         check=('simp', '(1/a)/b', '1/(a*b)')),
    dict(q='Simplify ' + mul(F('x + 1', 2), F(4, 'x + 1')) + '.', a=M('2'),
         check=('simp', '((x+1)/2)*(4/(x+1))', '2')),
    dict(q='Simplify ' + mul(F(5, 'x'), F(x2, 10)) + '.', a=M(F('x', 2)),
         check=('simp', '(5/x)*(x**2/10)', 'x/2')),
    dict(q='Simplify ' + div(F('a', 'b'), F('a', 'c')) + '.', a=M(F('c', 'b')),
         check=('simp', '(a/b)/(a/c)', 'c/b')),
    dict(q='Simplify ' + mul(F('3x', 4), F(2, '9x')) + '.', a=M(F(1, 6)),
         check=('simp', '(3*x/4)*(2/(9*x))', 'Rational(1,6)')),
]

Q_PRACTICE = [
    dict(q='Simplify ' + mul(F(f'{x2} − 1', 'x + 1'), F(1, 'x − 1')) + '.', a=M('1'),
         check=('simp', '((x**2-1)/(x+1))*(1/(x-1))', '1')),
    dict(q='Simplify ' + div(F(f'{x2} − 4', 'x + 3'), F('x − 2', 'x + 3')) + '.',
         a=M('x + 2'), check=('simp', '((x**2-4)/(x+3))/((x-2)/(x+3))', 'x+2')),
    dict(q='Simplify ' + mul(F('x', 'x + 1'), F('(x + 1)<sup>2</sup>', x2)) + '.',
         a=M(F('x + 1', 'x')), check=('simp', '(x/(x+1))*((x+1)**2/x**2)', '(x+1)/x')),
    dict(q='Simplify ' + mul(F('(a + b)<sup>2</sup>', 'a − b'), F('a − b', 'a + b')) + '.',
         a=M('a + b'), check=('simp', '((a+b)**2/(a-b))*((a-b)/(a+b))', 'a+b')),
    dict(q='Simplify ' + div(F('2x', 'x − 3'), F(f'4{x2}', f'{x2} − 9')) + '.',
         a=M(F('x + 3', '2x')),
         check=('simp', '((2*x)/(x-3))/((4*x**2)/(x**2-9))', '(x+3)/(2*x)')),
    dict(q='Simplify ' + M('(1 + ' + F(1, 'x') + ') · ' + F('x', 'x + 2')) + '.',
         a=M(F('x + 1', 'x + 2')), check=('simp', '(1+1/x)*(x/(x+2))', '(x+1)/(x+2)')),
    dict(q='Simplify ' + mul(F(f'{x2} + 2x', f'{x2} − 4'), F('x − 2', 2)) + '.',
         a=M(F('x', 2)),
         check=('simp', '((x**2+2*x)/(x**2-4))*((x-2)/2)', 'x/2')),
    dict(q='Simplify ' + mul(F(x2, f'{x2} − 1'), F('x + 1', 'x')) + '.',
         a=M(F('x', 'x − 1')), check=('simp', '(x**2/(x**2-1))*((x+1)/x)', 'x/(x-1)')),
    dict(q='Simplify ' + div(F(f'{a2} − {b2}', a2), F('a + b', 'a')) + '.',
         a=M(F('a − b', 'a')),
         check=('simp', '((a**2-b**2)/a**2)/((a+b)/a)', '(a-b)/a')),
    dict(q='Simplify ' + M('(' + F('x', 2) + ')<sup>3</sup> ÷ ' + F('x', 2)) + '.',
         a=M(F(x2, 4)), check=('simp', '(x/2)**3/(x/2)', 'x**2/4')),
]

Q_CHALLENGE = [
    dict(q='Simplify ' + mul(F(f'{x2} − 5x + 6', f'{x2} − x − 6'), F('x + 2', 'x + 1')) + '.',
         a=M(F('x − 2', 'x + 1')),
         check=('simp', '((x**2-5*x+6)/(x**2-x-6))*((x+2)/(x+1))', '(x-2)/(x+1)')),
    dict(q='Simplify ' + div(F(f'{sq("a", 3)} − {sq("b", 3)}', 'a − b'),
                             F(f'{a2} + ab + {b2}', 'a + b')) + '.',
         a=M('a + b'),
         check=('simp', '((a**3-b**3)/(a-b))/((a**2+a*b+b**2)/(a+b))', 'a+b')),
    dict(q='Simplify ' + M('(' + F(1, 'x − 1') + ' − ' + F(1, 'x + 1') + ') · '
                           + F(f'{x2} − 1', 'x')) + '.',
         a=M(F(2, 'x')),
         check=('simp', '(1/(x-1)-1/(x+1))*((x**2-1)/x)', '2/x')),
    dict(q='Simplify ' + M('(' + F('x + 1', 'x − 1') + ')<sup>3</sup> · ('
                           + F('x − 1', 'x + 1') + ')<sup>2</sup>') + '.',
         a=M(F('x + 1', 'x − 1')),
         check=('simp', '((x+1)/(x-1))**3*((x-1)/(x+1))**2', '(x+1)/(x-1)')),
    dict(q='Simplify ' + div(F(f'{x2} − 9', f'{x2} + 6x + 9'), F('x − 3', 2)) + '.',
         a=M(F(2, 'x + 3')),
         check=('simp', '((x**2-9)/(x**2+6*x+9))/((x-3)/2)', '2/(x+3)')),
    dict(q='Simplify ' + M(F(F(1, 'x') + ' + ' + F(1, 'y'), F(1, 'x') + ' − ' + F(1, 'y'))) + '.',
         a=M(F('y + x', 'y − x')), check=('simp', '(1/x+1/y)/(1/x-1/y)', '(y+x)/(y-x)')),
    dict(q='Simplify ' + mul(F(f'{x2} − {y2}', f'{x2} + xy'), F('x', 'x + y')) + '.',
         a=M(F('x − y', 'x + y')),
         check=('simp', '((x**2-y**2)/(x**2+x*y))*(x/(x+y))', '(x-y)/(x+y)')),
    dict(q='Simplify ' + mul(F(2, f'{x2} − x'), F(f'{x3} − x', 4)) + '.',
         a=M(F('x + 1', 2)),
         check=('simp', '(2/(x**2-x))*((x**3-x)/4)', '(x+1)/2')),
    dict(q='Simplify ' + M('(' + F('a', 'b') + ' − ' + F('b', 'a') + ') ÷ '
                           + F('a + b', 'b')) + '.',
         a=M(F('a − b', 'a')),
         check=('simp', '(a/b-b/a)/((a+b)/b)', '(a-b)/a')),
    dict(q='Simplify ' + mul(F('x + 2', f'{x2} − 1'), F(f'{x2} + x', 'x + 2')) + '.',
         a=M(F('x', 'x − 1')),
         check=('simp', '((x+2)/(x**2-1))*((x**2+x)/(x+2))', 'x/(x-1)')),
]

Q_BEYOND = [
    dict(q='A pupil wrote ' + M(F('a', 'b') + ' ÷ ' + F('c', 'd') + ' = ' + F('ac', 'bd'))
           + '. Correct it, and show the right answer for ' + M(F(2, 3) + ' ÷ ' + F(4, 5)) + '.',
         a='Invert the divisor: ' + M(F('ad', 'bc')) + '; the value is ' + M(F(5, 6)),
         check=('simp', 'Rational(2,3)/Rational(4,5)', 'Rational(5,6)'),
         sol='Dividing by c/d means multiplying by d/c, so the answer is ad/(bc). '
             'For 2/3 ÷ 4/5 this is (2·5)/(3·4) = 10/12 = 5/6.'),
    dict(q='A pupil wrote ' + M('(' + F('2a', 'b') + ')<sup>3</sup> = ' + F(f'2{sq("a", 3)}', sq('b', 3)))
           + '. Find and correct the mistake.',
         a=M(F(f'8{sq("a", 3)}', sq('b', 3))), check=('simp', '(2*a/b)**3', '8*a**3/b**3'),
         sol='The power applies to the whole numerator, the 2 included: (2a)³ = 8a³. '
             'Only the letter was cubed.'),
    dict(q='A pupil cancelled ' + M(F(x2, f'{x2} + x')) + ' to ' + M(F(1, '1 + x'))
           + '. Find the mistake and give the correct answer.',
         a=M(F('x', 'x + 1')), check=('simp', 'x**2/(x**2+x)', 'x/(x+1)'),
         sol='Factorise first: x²/(x(x+1)). Cancelling one x from each part leaves '
             'x/(x+1), not 1/(1+x) — only one x goes, not both.'),
    dict(q='Simplify ' + M(F(F(1, 'x − 1') + ' + ' + F(1, 'x + 1'),
                             F(1, 'x − 1') + ' − ' + F(1, 'x + 1'))) + '.',
         a=M('x'),
         check=('simp', '(1/(x-1)+1/(x+1))/(1/(x-1)-1/(x+1))', 'x'),
         sol='Top: 2x/(x²−1). Bottom: 2/(x²−1). Dividing, the (x²−1) and the 2 cancel and '
             'x is left.'),
    dict(q='Simplify ' + M('(1 − ' + F(1, x2) + ') ÷ (1 − ' + F(1, 'x') + ')') + '.',
         a=M(F('x + 1', 'x')),
         check=('simp', '(1-1/x**2)/(1-1/x)', '(x+1)/x'),
         sol='Top (x²−1)/x², bottom (x−1)/x. Dividing: ((x−1)(x+1)/x²)·(x/(x−1)) '
             '= (x+1)/x.'),
    dict(q='Simplify ' + M(F('(x + ' + F(1, 'x') + ')<sup>2</sup> − 4',
                             '(x − ' + F(1, 'x') + ')<sup>2</sup>')) + '.',
         a=M('1'),
         check=('simp', '((x+1/x)**2-4)/((x-1/x)**2)', '1'),
         sol='(x + 1/x)² − 4 = x² + 2 + 1/x² − 4 = x² − 2 + 1/x² = (x − 1/x)². '
             'Top and bottom are the same, so the value is 1.'),
    dict(q='Simplify ' + M(F(1, '1 + ' + F(1, '1 + ' + F(1, '1 + ' + F(1, 'x'))))) + '.',
         a=M(F('2x + 1', '3x + 2')),
         check=('simp', '1/(1+1/(1+1/(1+1/x)))', '(2*x+1)/(3*x+2)'),
         sol='Build outwards: 1 + 1/x = (x+1)/x; 1 + x/(x+1) = (2x+1)/(x+1); '
             '1 + (x+1)/(2x+1) = (3x+2)/(2x+1); the reciprocal is (2x+1)/(3x+2).'),
    dict(q='Prove that ' + M(F(f'{a2} + {b2}', f'{a2} − {b2}') + ' · ' + F('a − b', 'a + b')
                             + ' = ' + F(f'{a2} + {b2}', '(a + b)<sup>2</sup>')) + '.',
         a=M(F(f'{a2} + {b2}', '(a + b)<sup>2</sup>')),
         check=('simp', '((a**2+b**2)/(a**2-b**2))*((a-b)/(a+b))',
                '(a**2+b**2)/(a+b)**2'),
         sol='a² − b² = (a−b)(a+b), so the (a−b) cancels and one (a+b) is left below, '
             'beside the (a+b) already there — hence the square.'),
    dict(q='Find ' + M(F(sq('2'), f'{sq("2")} − 1') + ' · ' + F(sq('3'), f'{sq("3")} − 1')
                       + ' · … · ' + F(sq('n'), f'{sq("n")} − 1')) + '.',
         a=M(F('2n', 'n + 1')), check=('custom', 'squares_product'),
         sol='k²/(k²−1) = k²/((k−1)(k+1)). Writing the whole product out, the numerators '
             'and denominators telescope to (2/1)·(n/(n+1)) = 2n/(n+1).'),
    dict(q='If ' + M('x + ' + F(1, 'x') + ' = 3') + ', find ' + M(sq('x', 5) + ' + ' + F(1, sq('x', 5)))
           + '.',
         a=M('123'), check=('custom', 'fifth_power'),
         sol='x² + 1/x² = 9 − 2 = 7 and x³ + 1/x³ = 27 − 9 = 18. Then '
             '(x² + 1/x²)(x³ + 1/x³) = x⁵ + 1/x⁵ + (x + 1/x), so '
             'x⁵ + 1/x⁵ = 7·18 − 3 = 123.'),
    dict(q='Simplify ' + M(F(F(1, 'a') + ' + ' + F(1, 'b'), F(1, 'a') + ' − ' + F(1, 'b'))
                           + ' · ' + F('a − b', 'a + b')) + '.',
         a=M('−1'),
         check=('simp', '((1/a+1/b)/(1/a-1/b))*((a-b)/(a+b))', '-1'),
         sol='The compound fraction is (b+a)/(b−a). Multiplying by (a−b)/(a+b) gives '
             '(a+b)(a−b)/((b−a)(a+b)) = (a−b)/(b−a) = −1.'),
    dict(q='Solve ' + M(F('x', 'x − 1') + ' ÷ ' + F('x + 1', 'x') + ' = 1')
           + ', or show it has no solution.',
         a='No solution.', check=('custom', 'no_solution_quotient'),
         sol='The left side is x²/((x−1)(x+1)) = x²/(x²−1). Setting it to 1 gives '
             'x² = x² − 1, that is 0 = −1 — impossible, so no x works.'),
    dict(q='Simplify ' + mul(F(f'{x3} + 1', f'{x2} − 1'), F('x − 1', f'{x2} − x + 1')) + '.',
         a=M('1'),
         check=('simp', '((x**3+1)/(x**2-1))*((x-1)/(x**2-x+1))', '1'),
         sol='x³ + 1 = (x+1)(x² − x + 1) and x² − 1 = (x−1)(x+1). Everything cancels, '
             'leaving 1 — valid for x ≠ ±1.'),
    dict(q='If ' + M(F('a', 'b') + ' = ' + F('c', 'd')) + ', prove that '
           + M(F(f'{a2} + {sq("c")}', f'{b2} + {sq("d")}') + ' = ' + F('ac', 'bd')) + '.',
         a=M(F('ac', 'bd')), check=('custom', 'ratio_squares'),
         sol='Let a/b = c/d = t, so a = bt and c = dt. Then '
             '(a² + c²)/(b² + d²) = t²(b² + d²)/(b² + d²) = t², and ac/(bd) = (bt)(dt)/(bd) '
             '= t² as well.'),
    dict(q='Simplify ' + M('(' + F(1, 'x − a') + ' − ' + F(1, 'x + a') + ') ÷ '
                           + F('2a', f'{x2} − {a2}')) + '.',
         a=M('1'),
         check=('simp', '(1/(x-a)-1/(x+a))/((2*a)/(x**2-a**2))', '1'),
         sol='The bracket is 2a/(x² − a²). Dividing by the same thing gives 1 — '
             'whatever a is, provided x ≠ ±a and a ≠ 0.'),
]

TOPIC = dict(
    key='alg-09', number=9, lessons='23–24',
    title='Revision · Control work 2 — rational expressions',
    subtitle='Multiplication, division, powers and the long chains, with the errors that '
             'cost the most marks set as questions of their own.',
    uz='Algebra 8, revision of §§5–6', cam='Cambridge Stage 9 · Units 2, 8',
    keywords=['control work', 'work on mistakes', 'reciprocal', 'coefficient', 'expand',
              'diagnose', 'justify', 'identity'],
    remember=[
        'Division is multiplication by the reciprocal — invert the <b>divisor</b> only.',
        'A power reaches every factor, the number included: '
        '<span class="m">(2a/b)<sup>3</sup> = 8a<sup>3</sup>/b<sup>3</sup></span>.',
        'Factorise before multiplying; cancel across the sign.',
        'A compound fraction is a division: tidy the top, tidy the bottom, then invert.',
        'Check a long chain at one value, such as <span class="m">x = 2</span>, before '
        'writing the answer down.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
