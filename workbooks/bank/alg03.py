# -*- coding: utf-8 -*-
"""Questions for topic 3 of Grade 8 algebra — the algebraic fraction, cancelling."""

from .common import F, M, sq

x2, x3, x4 = sq('x'), sq('x', 3), sq('x', 4)
a2, a3, b2 = sq('a'), sq('a', 3), sq('b')

Q_FOCUS = [
    dict(q='Cancel ' + M(F('6x', 9)) + '.', a=M(F('2x', 3)),
         check=('simp', '6*x/9', '2*x/3')),
    dict(q='Cancel ' + M(F('4a', '6a')) + '.', a=M(F(2, 3)),
         check=('simp', '4*a/(6*a)', 'Rational(2,3)')),
    dict(q='Cancel ' + M(F(x2, sq('x', 5))) + '.', a=M(F(1, x3)),
         check=('simp', 'x**2/x**5', '1/x**3')),
    dict(q='Cancel ' + M(F('5x', f'10{x2}')) + '.', a=M(F(1, '2x')),
         check=('simp', '5*x/(10*x**2)', '1/(2*x)')),
    dict(q='Cancel ' + M(F('3(x + 1)', '6(x + 1)')) + '.', a=M(F(1, 2)),
         check=('simp', '3*(x+1)/(6*(x+1))', 'Rational(1,2)')),
    dict(q='Cancel ' + M(F('x(x − 4)', 'x')) + '.', a=M('x − 4'),
         check=('simp', 'x*(x-4)/x', 'x-4')),
    dict(q='Cancel ' + M(F(f'12{a2}b', f'8a{b2}')) + '.', a=M(F('3a', '2b')),
         check=('simp', '12*a**2*b/(8*a*b**2)', '3*a/(2*b)')),
    dict(q='Cancel ' + M(F('x + 5', '2(x + 5)')) + '.', a=M(F(1, 2)),
         check=('simp', '(x+5)/(2*(x+5))', 'Rational(1,2)')),
    dict(q='Cancel ' + M(F('2x + 4', 2)) + '.', a=M('x + 2'),
         check=('simp', '(2*x+4)/2', 'x+2')),
    dict(q='Cancel ' + M(F(f'{a2}b', 'ab')) + '.', a=M('a'),
         check=('simp', 'a**2*b/(a*b)', 'a')),
]

Q_PRACTICE = [
    dict(q='Cancel ' + M(F(f'{x2} − 16', 'x + 4')) + '.', a=M('x − 4'),
         check=('simp', '(x**2-16)/(x+4)', 'x-4')),
    dict(q='Cancel ' + M(F('3x − 12', 'x − 4')) + '.', a=M('3'),
         check=('simp', '(3*x-12)/(x-4)', '3')),
    dict(q='Cancel ' + M(F(f'{x2} + 6x + 9', 'x + 3')) + '.', a=M('x + 3'),
         check=('simp', '(x**2+6*x+9)/(x+3)', 'x+3')),
    dict(q='Cancel ' + M(F(f'{x2} − x', 'x − 1')) + '.', a=M('x'),
         check=('simp', '(x**2-x)/(x-1)', 'x')),
    dict(q='Cancel ' + M(F('2x − 6', f'{x2} − 9')) + '.', a=M(F(2, 'x + 3')),
         check=('simp', '(2*x-6)/(x**2-9)', '2/(x+3)')),
    dict(q='Cancel ' + M(F(f'{a2} − {b2}', 'a − b')) + '.', a=M('a + b'),
         check=('simp', '(a**2-b**2)/(a-b)', 'a+b')),
    dict(q='Cancel ' + M(F('5x − 5y', 'y − x')) + '.', a=M('−5'),
         check=('simp', '(5*x-5*y)/(y-x)', '-5')),
    dict(q='Cancel ' + M(F(f'{x2} + 2x', f'{x2} − 4')) + '.', a=M(F('x', 'x − 2')),
         check=('simp', '(x**2+2*x)/(x**2-4)', 'x/(x-2)')),
    dict(q='Cancel ' + M(F(f'4{x2} − 1', '2x − 1')) + '.', a=M('2x + 1'),
         check=('simp', '(4*x**2-1)/(2*x-1)', '2*x+1')),
    dict(q='Cancel ' + M(F(f'{x3} − x', f'{x2} + x')) + '.', a=M('x − 1'),
         check=('simp', '(x**3-x)/(x**2+x)', 'x-1')),
]

Q_CHALLENGE = [
    dict(q='Cancel ' + M(F(f'{x2} − 5x + 6', f'{x2} − 4')) + '.', a=M(F('x − 3', 'x + 2')),
         check=('simp', '(x**2-5*x+6)/(x**2-4)', '(x-3)/(x+2)')),
    dict(q='Cancel ' + M(F(f'{x3} − 8', f'{x2} − 4')) + '.',
         a=M(F(f'{x2} + 2x + 4', 'x + 2')),
         check=('simp', '(x**3-8)/(x**2-4)', '(x**2+2*x+4)/(x+2)')),
    dict(q='Cancel ' + M(F(f'{a3} − {sq("b", 3)}', f'{a2} − {b2}')) + '.',
         a=M(F(f'{a2} + ab + {b2}', 'a + b')),
         check=('simp', '(a**3-b**3)/(a**2-b**2)', '(a**2+a*b+b**2)/(a+b)')),
    dict(q='Cancel ' + M(F(f'{x2} − 9', f'9 − {x2}')) + '.', a=M('−1') + ', ' + M('x ≠ ±3'),
         check=('simp', '(x**2-9)/(9-x**2)', '-1')),
    dict(q='Cancel ' + M(F(f'2{x2} + 7x + 3', f'{x2} − 9')) + '.',
         a=M(F('2x + 1', 'x − 3')),
         check=('simp', '(2*x**2+7*x+3)/(x**2-9)', '(2*x+1)/(x-3)')),
    dict(q='Cancel ' + M(F(f'{x4} − 16', f'{x2} + 4')) + '.', a=M(f'{x2} − 4'),
         check=('simp', '(x**4-16)/(x**2+4)', 'x**2-4')),
    dict(q='Cancel ' + M(F('ax + ay + bx + by', 'x + y')) + '.', a=M('a + b'),
         check=('simp', '(a*x+a*y+b*x+b*y)/(x+y)', 'a+b')),
    dict(q='Cancel ' + M(F(f'{x2} − xy', f'xy − {sq("y")}')) + '.', a=M(F('x', 'y')),
         check=('simp', '(x**2-x*y)/(x*y-y**2)', 'x/y')),
    dict(q='Cancel ' + M(F(f'6{x2} − 6', '3x + 3')) + '.', a=M('2(x − 1)'),
         check=('simp', '(6*x**2-6)/(3*x+3)', '2*(x-1)')),
    dict(q='Cancel ' + M(F(f'{x3} + {x2} − x − 1', f'{x2} − 1')) + '.', a=M('x + 1'),
         check=('simp', '(x**3+x**2-x-1)/(x**2-1)', 'x+1')),
]

Q_BEYOND = [
    dict(q='Cancel ' + M(F('(a − b)<sup>3</sup>', '(b − a)<sup>2</sup>')) + '.',
         a=M('a − b'), check=('simp', '(a-b)**3/(b-a)**2', 'a-b'),
         sol='(b − a)² = (a − b)², because squaring kills the sign. So the fraction is '
             '(a − b)³/(a − b)² = a − b. Had the power below been 3, the answer would be −1.'),
    dict(q='Cancel ' + M(F(f'{x4} + {x2} + 1', f'{x2} + x + 1')) + '.',
         a=M(f'{x2} − x + 1'),
         check=('simp', '(x**4+x**2+1)/(x**2+x+1)', 'x**2-x+1'),
         sol='x⁴ + x² + 1 = (x² + 1)² − x² = (x² + x + 1)(x² − x + 1), so the common '
             'factor cancels.'),
    dict(q='Cancel ' + M(F(f'{x4} + 4', f'{x2} + 2x + 2')) + '.',
         a=M(f'{x2} − 2x + 2'),
         check=('simp', '(x**4+4)/(x**2+2*x+2)', 'x**2-2*x+2'),
         sol='By the Sophie Germain identity x⁴ + 4 = (x² − 2x + 2)(x² + 2x + 2).'),
    dict(q='Cancel ' + M(F(f'{a3} + {sq("b", 3)} + {sq("c", 3)} − 3abc', 'a + b + c')) + '.',
         a=M(f'{a2} + {b2} + {sq("c")} − ab − bc − ca'),
         check=('simp', '(a**3+b**3+c**3-3*a*b*c)/(a+b+c)',
                'a**2+b**2+c**2-a*b-b*c-c*a'),
         sol='The numerator factorises as (a + b + c)(a² + b² + c² − ab − bc − ca), so the '
             'bracket cancels.'),
    dict(q='Cancel ' + M(F(f'{sq("n")} − 1', f'{sq("n", 3)} − 1')) + '.',
         a=M(F('n + 1', f'{sq("n")} + n + 1')),
         check=('simp', '(n**2-1)/(n**3-1)', '(n+1)/(n**2+n+1)'),
         sol='Both share (n − 1): the top is (n − 1)(n + 1) and the bottom is '
             '(n − 1)(n² + n + 1).'),
    dict(q=f'Show that {M(F(f"{x2} − 4", f"{x2} + x − 6"))} = {M(F("x + 2", "x + 3"))}, and say '
           'for which values of ' + M('x') + ' the two agree.',
         a='Equal for ' + M('x ≠ 2') + ' and ' + M('x ≠ −3'),
         check=('simp', '(x**2-4)/(x**2+x-6)', '(x+2)/(x+3)'),
         sol='Top (x − 2)(x + 2), bottom (x − 2)(x + 3); cancelling (x − 2) needs x ≠ 2. '
             'Both sides also need x ≠ −3. At x = 2 the left side is undefined while the '
             'right side is 4/5, so the two are not the same expression — only equal '
             'where both are defined.'),
    dict(q=f'Find the value of {M("(1 − " + F(1, 2) + ")(1 − " + F(1, 3) + ")… (1 − " + F(1, "n") + ")")}.',
         a=M(F(1, 'n')), check=('custom', 'product_one_minus_one_over'),
         sol='Each bracket is (k − 1)/k, so the product is (1/2)(2/3)(3/4)…((n−1)/n). '
             'Every numerator cancels the previous denominator and 1/n is left.'),
    dict(q='Cancel ' + M(F('(x + 1)<sup>2</sup> − (x − 1)<sup>2</sup>',
                           f'(x + 1)<sup>2</sup> + 2({x2} − 1) + (x − 1)<sup>2</sup>')) + '.',
         a=M(F(1, 'x')),
         check=('simp', '((x+1)**2-(x-1)**2)/((x+1)**2+2*(x**2-1)+(x-1)**2)', '1/x'),
         sol='The top is a difference of two squares: (2)(2x) = 4x. The bottom is a '
             'perfect square in disguise, [(x+1) + (x−1)]² = (2x)² = 4x². '
             'So the fraction is 4x/4x² = 1/x.'),
    dict(q='Cancel ' + M(F(f'{a2} − (b − c)<sup>2</sup>', f'(a + b)<sup>2</sup> − {sq("c")}')) + '.',
         a=M(F('a − b + c', 'a + b + c')),
         check=('simp', '(a**2-(b-c)**2)/((a+b)**2-c**2)',
                '(a-b+c)/(a+b+c)'),
         sol='Both are differences of two squares: the top is (a − b + c)(a + b − c), the '
             'bottom (a + b − c)(a + b + c). The factor (a + b − c) cancels.'),
    dict(q=f'For which integers {M("n")} is {M(F(f"{sq(chr(110), 3)} + 1", "n + 1"))} an integer?',
         a='Every integer except ' + M('n = −1'), check=('custom', 'n3_plus_1'),
         sol='n³ + 1 = (n + 1)(n² − n + 1), so for n ≠ −1 the fraction is exactly '
             'n² − n + 1, always an integer. At n = −1 it is undefined.'),
    dict(q='Cancel ' + M(F(f'{sq("x", 6)} − 1', f'{x3} − 1')) + '.', a=M(f'{x3} + 1'),
         check=('simp', '(x**6-1)/(x**3-1)', 'x**3+1'),
         sol='x⁶ − 1 = (x³ − 1)(x³ + 1), a difference of two squares in x³.'),
    dict(q='Cancel ' + M(F(f'{x2} − 3x + 2', f'{x2} − 4x + 3')) + '.',
         a=M(F('x − 2', 'x − 3')),
         check=('simp', '(x**2-3*x+2)/(x**2-4*x+3)', '(x-2)/(x-3)'),
         sol='(x − 1)(x − 2) over (x − 1)(x − 3); the shared (x − 1) cancels, '
             'with x ≠ 1 and x ≠ 3.'),
    dict(q=f'For which {M("a")} and {M("b")} does {M(F(f"{x2} + ax + b", "x + 2"))} cancel '
           'exactly, leaving no remainder?',
         a=M('b = 2a − 4'), check=('custom', 'exact_division_by_x_plus_2'),
         sol='The bottom cancels only if x = −2 makes the top zero: 4 − 2a + b = 0, '
             'that is b = 2a − 4. The fraction is then x + (a − 2).'),
    dict(q='Cancel ' + M(F('(x + h)<sup>2</sup> − ' + x2, 'h')) + '.', a=M('2x + h'),
         check=('simp', '((x+h)**2-x**2)/h', '2*x+h'),
         sol='The top is x² + 2xh + h² − x² = 2xh + h² = h(2x + h), so the h cancels '
             '(for h ≠ 0). This is the difference quotient the calculus of Grade 11 '
             'begins with.'),
    dict(q='Cancel ' + M(F(F(1, 'x') + ' − ' + F(1, 'y'), 'x − y')) + '.',
         a=M('−' + F(1, 'xy')),
         check=('simp', '(1/x-1/y)/(x-y)', '-1/(x*y)'),
         sol='The top over a common denominator is (y − x)/(xy) = −(x − y)/(xy). '
             'Dividing by (x − y) leaves −1/(xy).'),
]

TOPIC = dict(
    key='alg-03', number=3, lessons='6–8',
    title='Algebraic fraction. Cancelling fractions',
    subtitle='The fundamental property of a fraction, and the one rule that governs '
             'every simplification: factorise first, cancel second.',
    uz='Algebra 8, §2, pp. 12–17', cam='Cambridge Stage 9 · 2.5',
    keywords=['algebraic fraction', 'fundamental property of a fraction',
              'cancel (reduce) a fraction', 'factor', 'term', 'polynomial',
              'identical transformation', 'sign', 'bracket', 'simplify'],
    remember=[
        'The fundamental property: multiplying or dividing <b>both</b> parts of a '
        'fraction by the same non-zero expression leaves its value unchanged.',
        'You may cancel <b>factors</b>, never <b>terms</b>: '
        '<span class="m">(x + 5)/5</span> does not cancel.',
        'Factorise the numerator and the denominator completely first — a fraction that '
        'looks irreducible usually is not.',
        '<span class="m">b − a = −(a − b)</span>: take out <span class="m">−1</span> and '
        'the brackets match.',
        'Cancelling assumes the factor is non-zero, so the cancelled form may be valid at '
        'one point fewer than it looks.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
