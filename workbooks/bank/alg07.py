# -*- coding: utf-8 -*-
"""Questions for topic 7 of Grade 8 algebra — multiplying and dividing fractions."""

from .common import F, M, sq

x2, x3, x4 = sq('x'), sq('x', 3), sq('x', 4)
a2, a3, b2, y2 = sq('a'), sq('a', 3), sq('b'), sq('y')


def mul(p, q):
    return M(p) + ' · ' + M(q)


def div(p, q):
    return M(p) + ' ÷ ' + M(q)


Q_FOCUS = [
    dict(q='Simplify ' + mul(F(2, 'x'), F('x', 5)) + '.', a=M(F(2, 5)),
         check=('simp', '(2/x)*(x/5)', 'Rational(2,5)')),
    dict(q='Simplify ' + mul(F('a', 3), F(6, 'a')) + '.', a=M('2'),
         check=('simp', '(a/3)*(6/a)', '2')),
    dict(q='Simplify ' + mul(F(3, 'x'), F(x2, 9)) + '.', a=M(F('x', 3)),
         check=('simp', '(3/x)*(x**2/9)', 'x/3')),
    dict(q='Simplify ' + div(F('x', 2), F('x', 4)) + '.', a=M('2'),
         check=('simp', '(x/2)/(x/4)', '2')),
    dict(q='Simplify ' + div(F(1, 'a'), F(1, 'b')) + '.', a=M(F('b', 'a')),
         check=('simp', '(1/a)/(1/b)', 'b/a')),
    dict(q='Simplify ' + mul(F('2x', 3), F(9, '4x')) + '.', a=M(F(3, 2)),
         check=('simp', '(2*x/3)*(9/(4*x))', 'Rational(3,2)')),
    dict(q='Simplify ' + mul(F(a2, 'b'), F(b2, 'a')) + '.', a=M('ab'),
         check=('simp', '(a**2/b)*(b**2/a)', 'a*b')),
    dict(q='Simplify ' + M('(' + F('x', 'y') + ')<sup>2</sup>') + '.', a=M(F(x2, y2)),
         check=('simp', '(x/y)**2', 'x**2/y**2')),
    dict(q='Simplify ' + div(F(5, 'x'), '5') + '.', a=M(F(1, 'x')),
         check=('simp', '(5/x)/5', '1/x')),
    dict(q='Simplify ' + mul(F(3, 4), F(8, 9)) + '.', a=M(F(2, 3)),
         check=('simp', '(Rational(3,4))*(Rational(8,9))', 'Rational(2,3)')),
]

Q_PRACTICE = [
    dict(q='Simplify ' + mul(F('x + 1', 'x'), F('x', 'x + 1')) + '.', a=M('1'),
         check=('simp', '((x+1)/x)*(x/(x+1))', '1')),
    dict(q='Simplify ' + mul(F(f'{x2} − 1', 'x'), F('x', 'x − 1')) + '.', a=M('x + 1'),
         check=('simp', '((x**2-1)/x)*(x/(x-1))', 'x+1')),
    dict(q='Simplify ' + mul(F(2, 'x + 3'), F('x + 3', 4)) + '.', a=M(F(1, 2)),
         check=('simp', '(2/(x+3))*((x+3)/4)', 'Rational(1,2)')),
    dict(q='Simplify ' + div(F(f'{x2} − 4', 3), F('x − 2', 6)) + '.', a=M('2(x + 2)'),
         check=('simp', '((x**2-4)/3)/((x-2)/6)', '2*(x+2)')),
    dict(q='Simplify ' + mul(F('a + b', 'a − b'), F('a − b', 'a + b')) + '.', a=M('1'),
         check=('simp', '((a+b)/(a-b))*((a-b)/(a+b))', '1')),
    dict(q='Simplify ' + mul(F(x2, sq('y', 3)), F('y', 'x')) + '.', a=M(F('x', y2)),
         check=('simp', '(x**2/y**3)*(y/x)', 'x/y**2')),
    dict(q='Simplify ' + div(F('3x', 'x + 2'), F('9x', 'x + 2')) + '.', a=M(F(1, 3)),
         check=('simp', '((3*x)/(x+2))/((9*x)/(x+2))', 'Rational(1,3)')),
    dict(q='Simplify ' + mul(F(f'{x2} − 9', 'x + 1'), F('x + 1', 'x − 3')) + '.',
         a=M('x + 3'),
         check=('simp', '((x**2-9)/(x+1))*((x+1)/(x-3))', 'x+3')),
    dict(q='Simplify ' + M('(' + F('2a', 'b') + ')<sup>3</sup>') + '.', a=M(F(f'8{a3}', sq('b', 3))),
         check=('simp', '(2*a/b)**3', '8*a**3/b**3')),
    dict(q='Simplify ' + div(F('x + 5', 2), F('x + 5', 8)) + '.', a=M('4'),
         check=('simp', '((x+5)/2)/((x+5)/8)', '4')),
]

Q_CHALLENGE = [
    dict(q='Simplify ' + mul(F(f'{x2} − x − 6', f'{x2} − 9'), F('x + 3', 'x + 1')) + '.',
         a=M(F('x + 2', 'x + 1')),
         check=('simp', '((x**2-x-6)/(x**2-9))*((x+3)/(x+1))', '(x+2)/(x+1)')),
    dict(q='Simplify ' + div(F(f'{a2} − {b2}', f'{a2} + 2ab + {b2}'), F('a − b', 2)) + '.',
         a=M(F(2, 'a + b')),
         check=('simp', '((a**2-b**2)/(a**2+2*a*b+b**2))/((a-b)/2)', '2/(a+b)')),
    dict(q='Simplify ' + mul(F(f'{x3} − 8', f'{x2} − 4'), F('x', f'{x2} + 2x + 4')) + '.',
         a=M(F('x', 'x + 2')),
         check=('simp', '((x**3-8)/(x**2-4))*(x/(x**2+2*x+4))', 'x/(x+2)')),
    dict(q='Simplify ' + div(F(f'2{x2} + 6x', f'{x2} − 9'), F('4x', 'x − 3')) + '.',
         a=M(F(1, 2)),
         check=('simp', '((2*x**2+6*x)/(x**2-9))/((4*x)/(x-3))', 'Rational(1,2)')),
    dict(q='Simplify ' + mul(F(f'{x2} − {y2}', 'xy'), F(f'{x2}y', 'x + y')) + '.',
         a=M('x(x − y)'),
         check=('simp', '((x**2-y**2)/(x*y))*((x**2*y)/(x+y))', 'x*(x-y)')),
    dict(q='Simplify ' + M('(' + F('x + 1', 'x − 1') + ')<sup>2</sup>') + ' · '
           + M(F('x − 1', 'x + 1')) + '.',
         a=M(F('x + 1', 'x − 1')),
         check=('simp', '((x+1)/(x-1))**2*((x-1)/(x+1))', '(x+1)/(x-1)')),
    dict(q='Simplify ' + mul(F(f'{a2} − 9', f'{a2} + 6a + 9'), F('a + 3', 'a + 1')) + '.',
         a=M(F('a − 3', 'a + 1')),
         check=('simp', '((a**2-9)/(a**2+6*a+9))*((a+3)/(a+1))', '(a-3)/(a+1)')),
    dict(q='Simplify ' + div(F(f'{x2} − 5x + 6', f'{x2} − 4'), F('x − 3', 'x + 1')) + '.',
         a=M(F('x + 1', 'x + 2')),
         check=('simp', '((x**2-5*x+6)/(x**2-4))/((x-3)/(x+1))', '(x+1)/(x+2)')),
    dict(q='Simplify ' + mul(F(3, f'{x2} − 1'), F('x + 1', 6)) + '.',
         a=M(F(1, '2(x − 1)')),
         check=('simp', '(3/(x**2-1))*((x+1)/6)', '1/(2*(x-1))')),
    dict(q='Simplify ' + div(F(f'{x2} + x', f'{x2} − x'), F('x + 1', 'x')) + '.',
         a=M(F('x', 'x − 1')),
         check=('simp', '((x**2+x)/(x**2-x))/((x+1)/x)', 'x/(x-1)')),
]

Q_BEYOND = [
    dict(q='Simplify ' + mul(F(f'{x2} − 1', f'{x2} + 2x + 1'),
                             '(' + F('x − 1', 'x + 1') + ')<sup>2</sup>') + '.',
         a=M('(' + F('x − 1', 'x + 1') + ')<sup>3</sup>'),
         check=('simp', '((x**2-1)/(x**2+2*x+1))*((x-1)/(x+1))**2', '(x-1)**3/(x+1)**3'),
         sol='The first fraction is (x−1)(x+1)/(x+1)² = (x−1)/(x+1). Multiplying by '
             '((x−1)/(x+1))² gives the cube.'),
    dict(q='Simplify ' + M('(1 − ' + F(1, 'x') + ')(1 + ' + F(1, 'x') + ')') + '.',
         a=M(F(f'{x2} − 1', x2)),
         check=('simp', '(1-1/x)*(1+1/x)', '(x**2-1)/x**2'),
         sol='A difference of two squares with 1 and 1/x: the product is 1 − 1/x², '
             'which over a common denominator is (x² − 1)/x².'),
    dict(q='Simplify ' + M('(' + F('a − b', 'b − a') + ')<sup>3</sup>') + '.',
         a=M('−1'), check=('simp', '((a-b)/(b-a))**3', '-1'),
         sol='The fraction inside is −1, and (−1)³ = −1. An even power would have '
             'given +1.'),
    dict(q='Simplify ' + mul(mul(F('x', 'x + 1'), F('x + 1', 'x + 2')), F('x + 2', 'x + 3'))
           + '.',
         a=M(F('x', 'x + 3')),
         check=('simp', '(x/(x+1))*((x+1)/(x+2))*((x+2)/(x+3))', 'x/(x+3)'),
         sol='Each numerator cancels the denominator before it — a telescoping product. '
             'Only the first numerator and the last denominator survive.'),
    dict(q='Find ' + M(F(1, 2) + ' · ' + F(2, 3) + ' · ' + F(3, 4) + ' · … · '
                       + F('n', 'n + 1')) + '.',
         a=M(F(1, 'n + 1')), check=('custom', 'telescope_product_k_over_k1'),
         sol='Everything cancels except the first numerator 1 and the last denominator '
             'n + 1, leaving 1/(n + 1).'),
    dict(q='Simplify ' + div(F(f'{x2} + x − 2', f'{x2} − 4x + 3'),
                             F(f'{x2} + 4x + 4', f'{x2} − 9')) + '.',
         a=M(F('x + 3', 'x + 2')),
         check=('simp', '((x**2+x-2)/(x**2-4*x+3))/((x**2+4*x+4)/(x**2-9))',
                '(x+3)/(x+2)'),
         sol='Factorise all four: (x+2)(x−1) / (x−1)(x−3), divided by (x+2)² / (x−3)(x+3). '
             'Invert the second and cancel (x−1), (x−3) and one (x+2).'),
    dict(q='Simplify ' + M('(' + F(f'−2{x2}', '3y') + ')<sup>3</sup>') + '.',
         a=M('−' + F(f'8{sq("x", 6)}', f'27{sq("y", 3)}')),
         check=('simp', '(-2*x**2/(3*y))**3', '-8*x**6/(27*y**3)'),
         sol='Cube the sign, the number and each letter: (−2)³ = −8, (x²)³ = x⁶, '
             '3³ = 27, y³ = y³.'),
    dict(q='Show that ' + M(F(F('a', 'b'), F('c', 'd')) + ' = ' + F('ad', 'bc'))
           + ', then use it on ' + M(F(2, 3) + ' ÷ ' + F(4, 9)) + '.',
         a=M(F(3, 2)), check=('simp', '(Rational(2,3))/(Rational(4,9))', 'Rational(3,2)'),
         sol='Dividing by c/d is multiplying by its reciprocal d/c, so (a/b)·(d/c) '
             '= ad/(bc). Then (2/3)·(9/4) = 18/12 = 3/2.'),
    dict(q='Find ' + M(F(f'{sq("2", 3)} − 1', f'{sq("2", 3)} + 1') + ' · ' + F(f'{sq("3", 3)} − 1', f'{sq("3", 3)} + 1')
                       + ' · … · ' + F(f'{sq("n", 3)} − 1', f'{sq("n", 3)} + 1')) + '.',
         a=M(F(2, 3) + ' · ' + F(f'{sq("n")} + n + 1', 'n(n + 1)')),
         check=('custom', 'cube_product'),
         sol='Use k³ − 1 = (k − 1)(k² + k + 1) and k³ + 1 = (k + 1)(k² − k + 1), and note '
             'that k² + k + 1 at k equals (k+1)² − (k+1) + 1 at k+1. Both strands '
             'telescope, leaving (2/3) · (n² + n + 1)/(n(n + 1)).'),
    dict(q='If ' + M(F('a', 'b') + ' = ' + F('c', 'd')) + ', prove that '
           + M(F('a + b', 'b') + ' = ' + F('c + d', 'd')) + '.',
         a='Add 1 to both sides.', check=('custom', 'proportion_add_one'),
         sol='a/b = c/d. Adding 1 to each side: a/b + 1 = c/d + 1, that is '
             '(a + b)/b = (c + d)/d. This is the componendo step used all through ratio work.'),
    dict(q='Simplify ' + M('(x + ' + F(1, 'x') + ')<sup>2</sup> − (x − ' + F(1, 'x')
                           + ')<sup>2</sup>') + '.',
         a=M('4'), check=('simp', '(x+1/x)**2-(x-1/x)**2', '4'),
         sol='By the difference of two squares the value is '
             '[(x + 1/x) − (x − 1/x)][(x + 1/x) + (x − 1/x)] = (2/x)(2x) = 4 — '
             'no x left at all.'),
    dict(q='Simplify ' + div(F(f'{x4} − 1', f'{x2} + 1'), 'x + 1') + '.', a=M('x − 1'),
         check=('simp', '((x**4-1)/(x**2+1))/(x+1)', 'x-1'),
         sol='x⁴ − 1 = (x² − 1)(x² + 1), so the first fraction is x² − 1 = (x−1)(x+1). '
             'Dividing by (x + 1) leaves x − 1.'),
    dict(q='Simplify ' + div(F(f'{sq("a", 4)} − {sq("b", 4)}', f'{a2} + {b2}'), 'a + b') + '.',
         a=M('a − b'),
         check=('simp', '((a**4-b**4)/(a**2+b**2))/(a+b)', 'a-b'),
         sol='a⁴ − b⁴ = (a² − b²)(a² + b²), so the fraction is a² − b² = (a−b)(a+b); '
             'dividing by (a + b) leaves a − b.'),
    dict(q='If ' + M(F('x', 'y') + ' = ' + F(2, 3)) + ', find the value of '
           + M(F(f'{x2} + xy', y2)) + '.',
         a=M(F(10, 9)), check=('custom', 'ratio_two_thirds'),
         sol='Write x = 2k and y = 3k. Then (4k² + 6k²)/(9k²) = 10k²/9k² = 10/9 — '
             'the k cancels, so only the ratio matters.'),
    dict(q='Find ' + M('(1 + ' + F(1, 1) + ')(1 + ' + F(1, 2) + ')(1 + ' + F(1, 3)
                       + ')… (1 + ' + F(1, 'n') + ')') + '.',
         a=M('n + 1'), check=('custom', 'product_one_plus'),
         sol='Each bracket is (k + 1)/k, so the product is (2/1)(3/2)(4/3)…((n+1)/n). '
             'Everything cancels but the last numerator: n + 1.'),
]

TOPIC = dict(
    key='alg-07', number=7, lessons='17–19',
    title='Multiplication and division of algebraic fractions',
    subtitle='No common denominator needed — but factorise before you multiply, or you '
             'will multiply out work you are about to cancel.',
    uz='Algebra 8, §5, pp. 27–29', cam='Cambridge Stage 9 · 8.3–8.4',
    keywords=['multiply', 'divide', 'product', 'quotient', 'reciprocal fraction',
              'power of a fraction', 'cancel across', 'divisor'],
    remember=[
        'Multiply: numerator by numerator, denominator by denominator — '
        '<span class="m">(a/b)·(c/d) = ac/(bd)</span>.',
        'Divide by multiplying by the reciprocal: '
        '<span class="m">(a/b) ÷ (c/d) = (a/b)·(d/c)</span>.',
        'Factorise everything <b>first</b>, then cancel across the multiplication sign; '
        'multiplying out first only makes work you then undo.',
        'A power applies to every part: '
        '<span class="m">(2a/b)<sup>3</sup> = 8a<sup>3</sup>/b<sup>3</sup></span>.',
        'A fraction that becomes <span class="m">1</span> still carries its forbidden '
        'values — keep them in the answer.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
