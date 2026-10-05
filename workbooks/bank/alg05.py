# -*- coding: utf-8 -*-
"""Questions for topic 5 of Grade 8 algebra."""

from .common import F, M, sq


Q_FOCUS = [
    dict(q=M(F(5, 'x') + ' + ' + F(2, 'x')), a=M(F(7, 'x')),
         check=('simp', '5/x + 2/x', '7/x')),
    dict(q=M(F(9, 'a') + ' − ' + F(4, 'a')), a=M(F(5, 'a')),
         check=('simp', '9/a - 4/a', '5/a')),
    dict(q=M(F('2x', 7) + ' + ' + F('3x', 7)), a=M(F('5x', 7)),
         check=('simp', '2*x/7 + 3*x/7', '5*x/7')),
    dict(q=M(F('4m', 'n') + ' − ' + F('m', 'n')), a=M(F('3m', 'n')),
         check=('simp', '4*m/n - m/n', '3*m/n')),
    dict(q=M(F(1, 3) + ' + ' + F(1, 'x')), a=M(F('x + 3', '3x')),
         check=('simp', '1/3 + 1/x', '(x+3)/(3*x)')),
    dict(q=M(F(2, 'x') + ' − ' + F(1, 'y')), a=M(F('2y − x', 'xy')),
         check=('simp', '2/x - 1/y', '(2*y-x)/(x*y)')),
    dict(q=M(F(4, 'x + 2') + ' + ' + F(3, 'x + 2')), a=M(F(7, 'x + 2')),
         check=('simp', '4/(x+2) + 3/(x+2)', '7/(x+2)')),
    dict(q=M(F('x', 'x − 1') + ' − ' + F(1, 'x − 1')), a=M('1') + ', ' + M('x ≠ 1'),
         check=('simp', 'x/(x-1) - 1/(x-1)', '1')),
    dict(q=M(F(3, '2x') + ' + ' + F(1, 2)), a=M(F('x + 3', '2x')),
         check=('simp', '3/(2*x) + 1/2', '(x+3)/(2*x)')),
    dict(q=M(F(5, 'a + b') + ' − ' + F(2, 'a + b')), a=M(F(3, 'a + b')),
         check=('simp', '5/(a+b) - 2/(a+b)', '3/(a+b)')),
]

Q_PRACTICE = [
    dict(q=M(F(1, 'x − 5') + ' + ' + F(1, 'x + 5')), a=M(F('2x', f'{sq("x")} − 25')),
         check=('simp', '1/(x-5) + 1/(x+5)', '2*x/(x**2-25)')),
    dict(q=M(F(1, 'x − 4') + ' − ' + F(1, 'x + 4')), a=M(F(8, f'{sq("x")} − 16')),
         check=('simp', '1/(x-4) - 1/(x+4)', '8/(x**2-16)')),
    dict(q=M(F(5, sq('x')) + ' − ' + F(2, 'x')), a=M(F('5 − 2x', sq('x'))),
         check=('simp', '5/x**2 - 2/x', '(5-2*x)/x**2')),
    dict(q=M(F('x + 1', 'x + 4') + ' + ' + F(3, 'x + 4')), a=M('1') + ', ' + M('x ≠ −4'),
         check=('simp', '(x+1)/(x+4) + 3/(x+4)', '1')),
    dict(q=M(F(2, f'{sq("x")} − 1') + ' + ' + F(1, 'x + 1')), a=M(F(1, 'x − 1')),
         check=('simp', '2/(x**2-1) + 1/(x+1)', '1/(x-1)')),
    dict(q=M(F(1, '2x') + ' + ' + F(1, '3x')), a=M(F(5, '6x')),
         check=('simp', '1/(2*x) + 1/(3*x)', '5/(6*x)')),
    dict(q=M(F('a', 'a + b') + ' + ' + F('b', 'a + b')), a=M('1'),
         check=('simp', 'a/(a+b) + b/(a+b)', '1')),
    dict(q=M(F(1, 'x + 1') + ' − ' + F(1, 'x + 2')), a=M(F(1, '(x + 1)(x + 2)')),
         check=('simp', '1/(x+1) - 1/(x+2)', '1/((x+1)*(x+2))')),
    dict(q=M(F('x', f'{sq("x")} − 9') + ' + ' + F(3, f'{sq("x")} − 9')), a=M(F(1, 'x − 3')),
         check=('simp', 'x/(x**2-9) + 3/(x**2-9)', '1/(x-3)')),
    dict(q=M(F(1, 'x') + ' + ' + F(1, 'x + 1')), a=M(F('2x + 1', 'x(x + 1)')),
         check=('simp', '1/x + 1/(x+1)', '(2*x+1)/(x*(x+1))')),
]

Q_CHALLENGE = [
    dict(q=M(F(1, f'{sq("x")} + x') + ' − ' + F(1, f'{sq("x")} − x')),
         a=M(F('−2', f'x({sq("x")} − 1)')),
         check=('simp', '1/(x**2+x) - 1/(x**2-x)', '-2/(x*(x**2-1))')),
    dict(q=M(F(2, 'x − 2') + ' − ' + F('2x', f'{sq("x")} − 4')), a=M(F(4, f'{sq("x")} − 4')),
         check=('simp', '2/(x-2) - 2*x/(x**2-4)', '4/(x**2-4)')),
    dict(q=M(F(1, 'a − b') + ' − ' + F(1, 'a + b') + ' − ' + F('2b', f'{sq("a")} − {sq("b")}')),
         a=M('0'),
         check=('simp', '1/(a-b) - 1/(a+b) - 2*b/(a**2-b**2)', '0')),
    dict(q=M(F('x', 'x − y') + ' + ' + F('y', 'y − x')), a=M('1') + ', ' + M('x ≠ y'),
         check=('simp', 'x/(x-y) + y/(y-x)', '1')),
    dict(q=M(F(1, f'{sq("x")} − 3x + 2') + ' + ' + F(1, f'{sq("x")} − 5x + 6')),
         a=M(F(2, '(x − 1)(x − 3)')),
         check=('simp', '1/(x**2-3*x+2) + 1/(x**2-5*x+6)', '2/((x-1)*(x-3))')),
    dict(q=M(F('x + 1', 'x − 1') + ' − ' + F('x − 1', 'x + 1')), a=M(F('4x', f'{sq("x")} − 1')),
         check=('simp', '(x+1)/(x-1) - (x-1)/(x+1)', '4*x/(x**2-1)')),
    dict(q=M(F(1, 'x + 2') + ' + ' + F(2, f'{sq("x")} − 4') + ' − ' + F(1, 'x − 2')),
         a=M(F('−2', f'{sq("x")} − 4')),
         check=('simp', '1/(x+2) + 2/(x**2-4) - 1/(x-2)', '-2/(x**2-4)')),
    dict(q=M(F(3, f'{sq("x")} + 2x') + ' − ' + F(2, f'{sq("x")} + 3x + 2')),
         a=M(F('x + 3', 'x(x + 1)(x + 2)')),
         check=('simp', '3/(x**2+2*x) - 2/(x**2+3*x+2)', '(x+3)/(x*(x+1)*(x+2))')),
    dict(q=M('1 + ' + F(1, 'x') + ' + ' + F(1, sq('x'))), a=M(F(f'{sq("x")} + x + 1', sq('x'))),
         check=('simp', '1 + 1/x + 1/x**2', '(x**2+x+1)/x**2')),
    dict(q=M(F('a', f'{sq("a")} − {sq("b")}') + ' + ' + F(1, 'a + b')),
         a=M(F('2a − b', f'{sq("a")} − {sq("b")}')),
         check=('simp', 'a/(a**2-b**2) + 1/(a+b)', '(2*a-b)/(a**2-b**2)')),
]

Q_BEYOND = [
    dict(q=f'Show that {M(F(1, "k(k + 1)"))} = {M(F(1, "k"))} − {M(F(1, "k + 1"))}, and hence find '
           f'{M(F(1, "1 · 2") + " + " + F(1, "2 · 3") + " + … + " + F(1, "99 · 100"))}.',
         a=M(F(99, 100)), check=('custom', 'telescope_99'),
         sol='Over the common denominator k(k+1): 1/k − 1/(k+1) = [(k+1) − k]/(k(k+1)) '
             '= 1/(k(k+1)). The sum collapses: (1/1 − 1/2) + (1/2 − 1/3) + … + (1/99 − 1/100) '
             '= 1 − 1/100 = 99/100.'),
    dict(q=f'Prove that {M(F(1, "1 · 2") + " + " + F(1, "2 · 3") + " + … + " + F(1, "n(n + 1)"))} = '
           f'{M(F("n", "n + 1"))} for every {M("n ≥ 1")}.',
         a=M(F('n', 'n + 1')), check=('custom', 'telescope_n'),
         sol='By the same splitting, every inner term cancels with the next: the sum is '
             '1 − 1/(n+1) = n/(n+1). (Induction gives the same: n/(n+1) + 1/((n+1)(n+2)) '
             '= (n+1)/(n+2).)'),
    dict(q=M(F(1, 'x(x + 1)') + ' + ' + F(1, '(x + 1)(x + 2)') + ' + ' + F(1, '(x + 2)(x + 3)')),
         a=M(F(3, 'x(x + 3)')),
         check=('simp', '1/(x*(x+1)) + 1/((x+1)*(x+2)) + 1/((x+2)*(x+3))', '3/(x*(x+3))'),
         sol='Split each term: (1/x − 1/(x+1)) + (1/(x+1) − 1/(x+2)) + (1/(x+2) − 1/(x+3)) '
             '= 1/x − 1/(x+3) = 3/(x(x+3)).'),
    dict(q=M(F(1, '1 + x') + ' + ' + F(1, '1 − x') + ' + ' + F(2, f'1 + {sq("x")}') + ' + '
             + F(4, f'1 + {sq("x", 4)}')),
         a=M(F(8, f'1 − {sq("x", 8)}')),
         check=('simp', '1/(1+x) + 1/(1-x) + 2/(1+x**2) + 4/(1+x**4)', '8/(1-x**8)'),
         sol='Work left to right. 1/(1+x) + 1/(1−x) = 2/(1−x²); then 2/(1−x²) + 2/(1+x²) '
             '= 4/(1−x⁴); then 4/(1−x⁴) + 4/(1+x⁴) = 8/(1−x⁸). Each step is a difference '
             'of two squares in the denominator.'),
    dict(q=M(F(1, f'{sq("x")} + 3x + 2') + ' + ' + F(1, f'{sq("x")} + 5x + 6') + ' + '
             + F(1, f'{sq("x")} + 7x + 12')),
         a=M(F(3, '(x + 1)(x + 4)')),
         check=('simp', '1/(x**2+3*x+2) + 1/(x**2+5*x+6) + 1/(x**2+7*x+12)',
                '3/((x+1)*(x+4))'),
         sol='The denominators are (x+1)(x+2), (x+2)(x+3), (x+3)(x+4). Splitting each gives '
             '1/(x+1) − 1/(x+4) = 3/((x+1)(x+4)).'),
    dict(q=f'Prove that {M(F(1, "(a − b)(a − c)") + " + " + F(1, "(b − a)(b − c)") + " + " + F(1, "(c − a)(c − b)"))} = '
           f'{M("0")}.',
         a=M('0'),
         check=('simp', '1/((a-b)*(a-c)) + 1/((b-a)*(b-c)) + 1/((c-a)*(c-b))', '0'),
         sol='Reverse the brackets so every denominator is built from (a−b), (b−c), (a−c): '
             'the common denominator is (a−b)(b−c)(a−c). The numerators become '
             '(b−c) − (a−c) + (a−b) = 0.'),
    dict(q=f'Prove that {M(F(sq("a"), "(a − b)(a − c)") + " + " + F(sq("b"), "(b − a)(b − c)") + " + " + F(sq("c"), "(c − a)(c − b)"))} = '
           f'{M("1")}.',
         a=M('1'),
         check=('simp', 'a**2/((a-b)*(a-c)) + b**2/((b-a)*(b-c)) + c**2/((c-a)*(c-b))', '1'),
         sol='Over the common denominator (a−b)(b−c)(a−c) the numerator is '
             'a²(b−c) − b²(a−c) + c²(a−b), which factorises as (a−b)(b−c)(a−c). '
             'So the sum is 1. (With a, b, c replaced by numerators 1 and a the same working '
             'gives 0 — see the two neighbouring questions.)'),
    dict(q=f'Prove that {M(F("a", "(a − b)(a − c)") + " + " + F("b", "(b − a)(b − c)") + " + " + F("c", "(c − a)(c − b)"))} = '
           f'{M("0")}.',
         a=M('0'),
         check=('simp', 'a/((a-b)*(a-c)) + b/((b-a)*(b-c)) + c/((c-a)*(c-b))', '0'),
         sol='Same common denominator (a−b)(b−c)(a−c). The numerator is '
             'a(b−c) − b(a−c) + c(a−b) = ab − ac − ab + bc + ac − bc = 0.'),
    dict(q=f'If {M(F(1, "a") + " + " + F(1, "b") + " + " + F(1, "c") + " = " + F(1, "a + b + c"))}, '
           f'prove that {M("(a + b)(b + c)(c + a) = 0")}.',
         a=M('(a + b)(b + c)(c + a) = 0'), check=('custom', 'abc_identity'),
         sol='Put the left side over abc: (bc + ac + ab)/(abc) = 1/(a+b+c). Cross-multiplying, '
             '(ab + bc + ca)(a + b + c) = abc. Expanding and cancelling abc leaves '
             'a²b + a²c + b²a + b²c + c²a + c²b + 2abc = 0, which factorises as '
             '(a + b)(b + c)(c + a) = 0. So two of the three numbers are opposites.'),
    dict(q=f'Given {M("x + " + F(1, "x") + " = 3")}, find {M(sq("x") + " + " + F(1, sq("x")))}, '
           f'{M(sq("x", 3) + " + " + F(1, sq("x", 3)))} and {M(sq("x", 4) + " + " + F(1, sq("x", 4)))}.',
         a=M('7') + ', ' + M('18') + ', ' + M('47'), check=('custom', 'x_plus_inverse'),
         sol='Square: (x + 1/x)² = x² + 2 + 1/x², so x² + 1/x² = 9 − 2 = 7. '
             'Cube: (x + 1/x)³ = x³ + 3(x + 1/x) + 1/x³, so x³ + 1/x³ = 27 − 9 = 18. '
             'Square again: (x² + 1/x²)² = x⁴ + 2 + 1/x⁴, so x⁴ + 1/x⁴ = 49 − 2 = 47.'),
    dict(q=f'Find every pair of positive integers {M("(x, y)")} with '
           f'{M(F(1, "x") + " + " + F(1, "y") + " = " + F(1, 4))}.',
         a=M('(5, 20), (6, 12), (8, 8), (12, 6), (20, 5)'),
         check=('custom', 'egyptian_quarter'),
         sol='Over the common denominator: 4(x + y) = xy, so xy − 4x − 4y = 0 and, adding 16, '
             '(x − 4)(y − 4) = 16. The positive factor pairs of 16 are 1×16, 2×8, 4×4, 8×2, '
             '16×1, giving (5, 20), (6, 12), (8, 8), (12, 6), (20, 5).'),
    dict(q=f'Prove that {M(F("(x − b)(x − c)", "(a − b)(a − c)") + " + " + F("(x − c)(x − a)", "(b − c)(b − a)") + " + " + F("(x − a)(x − b)", "(c − a)(c − b)"))} = '
           f'{M("1")} for every {M("x")}.',
         a=M('1'),
         check=('simp', '(x-b)*(x-c)/((a-b)*(a-c)) + (x-c)*(x-a)/((b-c)*(b-a))'
                ' + (x-a)*(x-b)/((c-a)*(c-b))', '1'),
         sol='The left side is a quadratic in x. It takes the value 1 at x = a, x = b and '
             'x = c (each time one term is 1 and the other two vanish). A quadratic agreeing '
             'with the constant 1 at three points is the constant 1.'),
    dict(q=f'Simplify {M(F(1, "1 + " + F(1, "1 + " + F(1, "x"))))}.',
         a=M(F('x + 1', '2x + 1')),
         check=('simp', '1/(1 + 1/(1 + 1/x))', '(x+1)/(2*x+1)'),
         sol='Work outwards. 1 + 1/x = (x+1)/x, so 1/((x+1)/x) = x/(x+1). '
             'Then 1 + x/(x+1) = (2x+1)/(x+1), and the reciprocal is (x+1)/(2x+1).'),
    dict(q=f'If {M("a + b + c = 0")} and none of the denominators is zero, prove that '
           f'{M(F(1, sq("a") + " + " + sq("b") + " − " + sq("c")) + " + " + F(1, sq("b") + " + " + sq("c") + " − " + sq("a")) + " + " + F(1, sq("c") + " + " + sq("a") + " − " + sq("b")))} = '
           f'{M("0")}.',
         a=M('0'), check=('custom', 'abc_zero_sum'),
         sol='From c = −(a+b), c² = a² + 2ab + b², so a² + b² − c² = −2ab. In the same way '
             'b² + c² − a² = −2bc and c² + a² − b² = −2ac. The sum is '
             '−(1/(2ab) + 1/(2bc) + 1/(2ac)) = −(c + a + b)/(2abc) = 0.'),
    dict(q=f'Find {M(F(1, f"{sq(chr(50))} − 1") + " + " + F(1, f"{sq(chr(51))} − 1") + " + … + " + F(1, f"{sq(chr(110))} − 1"))} '
           f'in terms of {M("n")}.',
         a=M(F(3, 4) + ' − ' + F(1, '2n') + ' − ' + F(1, '2(n + 1)')),
         check=('custom', 'sum_k_squared_minus_one'),
         sol='1/(k² − 1) = 1/((k−1)(k+1)) = ½(1/(k−1) − 1/(k+1)). Summing from k = 2 to n, '
             'the surviving terms are ½(1/1 + 1/2 − 1/n − 1/(n+1)) '
             '= 3/4 − 1/(2n) − 1/(2(n+1)).'),
]

TOPIC = dict(key='alg-05', number=5, lessons='12–14',
         title='Addition and subtraction of algebraic fractions',
         subtitle='Same denominator — add the numerators. Different denominators — build first.',
         uz='Algebra 8, §4, pp. 22–26', cam='Cambridge Stage 9 · 2.5',
         keywords=['add', 'subtract', 'like fractions', 'unlike fractions', 'combine',
                   'numerator', 'simplify the result', 'permissible values'],
         remember=[
             'Same denominator: keep it, combine the numerators, then try to cancel.',
             'Different denominators: factorise, find the LCD, build each fraction up, '
             'then add the numerators.',
             'Subtracting a numerator of more than one term — bracket the whole of it: '
             '<span class="m">A − (B + C)</span>, not <span class="m">A − B + C</span>.',
             'Always simplify the answer, and state the values the variable may not take.',
             'A fraction worth <span class="m">1</span> often hides in the answer: '
             '<span class="m">(x + 3)/(x + 3) = 1</span>.'],
         sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
                   ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
