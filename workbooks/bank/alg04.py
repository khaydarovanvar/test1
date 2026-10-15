# -*- coding: utf-8 -*-
"""Questions for topic 4 of Grade 8 algebra."""

from .common import F, M, sq


Q_FOCUS = [
    dict(q=f'Find the lowest common denominator of {M(F(1, 4))} and {M(F(1, 6))}.',
         a=M('12'), check=('lcm', ['4', '6'], '12')),
    dict(q=f'Find the LCD of {M(F(1, "3x"))} and {M(F(1, "5x"))}.',
         a=M('15x'), check=('lcm', ['3*x', '5*x'], '15*x')),
    dict(q=f'Find the LCD of {M(F(1, "a"))} and {M(F(1, "b"))}.',
         a=M('ab'), check=('lcm', ['a', 'b'], 'a*b')),
    dict(q=f'Find the LCD of {M(F(1, sq("x")))} and {M(F(1, sq("x", 3)))}.',
         a=M(sq('x', 3)), check=('lcm', ['x**2', 'x**3'], 'x**3')),
    dict(q=f'Find the LCD of {M(F(1, "2a"))} and {M(F(1, sq("a")))}.',
         a=M(f'2{sq("a")}'), check=('lcm', ['2*a', 'a**2'], '2*a**2')),
    dict(q=f'Write {M(F(5, "x"))} with denominator {M(sq("x", 3))}.',
         a=M(F(f'5{sq("x")}', sq('x', 3))), check=('simp', '5*x**2/x**3', '5/x')),
    dict(q=f'Write {M(F(3, "2y"))} with denominator {M(f"6{sq(chr(121))}")}.',
         a=M(F('9y', f'6{sq("y")}')), check=('simp', '9*y/(6*y**2)', '3/(2*y)')),
    dict(q=f'Write {M(F(7, "a"))} with denominator {M("a(a + 1)")}.',
         a=M(F('7(a + 1)', 'a(a + 1)')), check=('simp', '7*(a+1)/(a*(a+1))', '7/a')),
    dict(q=f'Find the LCD of {M(F(1, "x + 2"))} and {M(F(1, "x + 5"))}.',
         a=M('(x + 2)(x + 5)'), check=('lcm', ['x+2', 'x+5', ], '(x+2)*(x+5)')),
    dict(q=f'What additional factor turns {M("3ab")} into {M(f"12{sq(chr(97))}b")}?',
         a=M('4a'), check=('simp', '12*a**2*b/(3*a*b)', '4*a')),
]

Q_PRACTICE = [
    dict(q=f'Find the LCD of {M(F(1, f"{sq(chr(120))} − 16"))} and {M(F(1, "x + 4"))}.',
         a=M('(x − 4)(x + 4)'), check=('lcm', ['x**2-16', 'x+4'], '(x-4)*(x+4)')),
    dict(q=f'Find the LCD of {M(F(1, f"{sq(chr(120))} + 3x"))} and {M(F(1, "x + 3"))}.',
         a=M('x(x + 3)'), check=('lcm', ['x**2+3*x', 'x+3'], 'x*(x+3)')),
    dict(q=f'Bring {M(F(1, "x − 5"))} and {M(F(1, "x + 5"))} to a common denominator.',
         a=f'{M(F("x + 5", f"{sq(chr(120))} − 25"))} and {M(F("x − 5", f"{sq(chr(120))} − 25"))}',
         check=('simp', '(x+5)/(x**2-25)', '1/(x-5)')),
    dict(q=f'Find the LCD of {M(F(2, f"9{sq(chr(97))}b"))} and {M(F(5, f"12a{sq(chr(98))}"))}.',
         a=M(f'36{sq("a")}{sq("b")}'), check=('lcm', ['9*a**2*b', '12*a*b**2'], '36*a**2*b**2')),
    dict(q=f'Bring {M(F(2, f"{sq(chr(120))} − x"))} and {M(F(3, "x"))} to a common denominator.',
         a=f'LCD {M("x(x − 1)")}: {M(F(2, "x(x − 1)"))} and {M(F("3(x − 1)", "x(x − 1)"))}',
         check=('simp', '3*(x-1)/(x*(x-1))', '3/x')),
    dict(q=f'Find the LCD of {M(F(1, f"{sq(chr(120))} − 6x + 9"))} and {M(F(1, "x − 3"))}.',
         a=M(f'(x − 3){sq("", 2)}'.replace('<sup>2</sup>', '') + '<sup>2</sup>'),
         check=('lcm', ['x**2-6*x+9', 'x-3'], '(x-3)**2')),
    dict(q=f'Write {M(F("x", "x − 4"))} and {M(F(4, "4 − x"))} with the same denominator.',
         a=f'{M(F("x", "x − 4"))} and {M(F("−4", "x − 4"))}',
         check=('simp', '-4/(x-4)', '4/(4-x)')),
    dict(q=f'Find the LCD of {M(F(1, "2x + 4"))} and {M(F(1, f"{sq(chr(120))} − 4"))}.',
         a=M('2(x − 2)(x + 2)'), check=('lcm', ['2*x+4', 'x**2-4'], '2*(x-2)*(x+2)')),
    dict(q=f'Find the LCD of {M(F(1, f"{sq(chr(97))} + ab"))} and {M(F(1, f"ab + {sq(chr(98))}"))}.',
         a=M('ab(a + b)'), check=('lcm', ['a**2+a*b', 'a*b+b**2'], 'a*b*(a+b)')),
    dict(q=f'Bring {M(F(1, "x + 1"))}, {M(F(1, "x − 1"))} and {M(F(1, f"{sq(chr(120))} − 1"))} '
           'to a common denominator.',
         a=f'LCD {M(f"{sq(chr(120))} − 1")}: {M(F("x − 1", f"{sq(chr(120))} − 1"))}, '
           f'{M(F("x + 1", f"{sq(chr(120))} − 1"))}, {M(F(1, f"{sq(chr(120))} − 1"))}',
         check=('lcm', ['x+1', 'x-1', 'x**2-1'], 'x**2-1')),
]

Q_CHALLENGE = [
    dict(q=f'Find the LCD of {M(F(1, f"{sq(chr(120), 3)} − x"))} and {M(F(1, f"{sq(chr(120))} + 2x + 1"))}.',
         a=M(f'x(x − 1)(x + 1){sq("", 2)}'.replace('<sup>2</sup>', '') + '<sup>2</sup>'),
         check=('lcm', ['x**3-x', 'x**2+2*x+1'], 'x*(x-1)*(x+1)**2')),
    dict(q=f'Find the LCD of {M(F(1, f"{sq(chr(120))} − 5x + 6"))} and {M(F(1, f"{sq(chr(120))} − 4x + 4"))}.',
         a=M('(x − 2)<sup>2</sup>(x − 3)'),
         check=('lcm', ['x**2-5*x+6', 'x**2-4*x+4'], '(x-2)**2*(x-3)')),
    dict(q=f'Find the LCD of {M(F(1, f"{sq(chr(120))} − 9"))}, {M(F(1, f"{sq(chr(120))} + 6x + 9"))} '
           f'and {M(F(1, f"{sq(chr(120))} − 6x + 9"))}.',
         a=M('(x − 3)<sup>2</sup>(x + 3)<sup>2</sup>'),
         check=('lcm', ['x**2-9', 'x**2+6*x+9', 'x**2-6*x+9'], '(x-3)**2*(x+3)**2')),
    dict(q=f'Find the LCD of {M(F(1, f"{sq(chr(97), 3)} − {sq(chr(98), 3)}"))} and '
           f'{M(F(1, f"{sq(chr(97))} − {sq(chr(98))}"))}.',
         a=M(f'(a − b)(a + b)({sq("a")} + ab + {sq("b")})'),
         check=('lcm', ['a**3-b**3', 'a**2-b**2'], '(a-b)*(a+b)*(a**2+a*b+b**2)')),
    dict(q=f'Find the LCD of {M(F(1, f"{sq(chr(120))} + x − 6"))} and {M(F(1, f"{sq(chr(120))} − x − 2"))}.',
         a=M('(x − 2)(x + 3)(x + 1)'),
         check=('lcm', ['x**2+x-6', 'x**2-x-2'], '(x-2)*(x+3)*(x+1)')),
    dict(q=f'Find the LCD of {M(F(1, f"2{sq(chr(120))} − 8"))} and {M(F(1, "3x + 6"))}.',
         a=M('6(x − 2)(x + 2)'), check=('lcm', ['2*x**2-8', '3*x+6'], '6*(x-2)*(x+2)')),
    dict(q=f'Bring {M(F(1, "(x − y)<sup>2</sup>"))} and {M(F(1, "(y − x)<sup>3</sup>"))} '
           'to a common denominator.',
         a=f'LCD {M("(x − y)<sup>3</sup>")}: {M(F("x − y", "(x − y)<sup>3</sup>"))} and '
           f'{M(F("−1", "(x − y)<sup>3</sup>"))}',
         check=('simp', '-1/(x-y)**3', '1/(y-x)**3')),
    dict(q=f'Find the LCD of {M(F(1, f"{sq(chr(120), 4)} − 1"))} and {M(F(1, f"{sq(chr(120))} + 1"))}.',
         a=M(f'{sq("x", 4)} − 1'), check=('lcm', ['x**4-1', 'x**2+1'], 'x**4-1')),
    dict(q=f'Find the LCD of {M(F(1, f"{sq(chr(120))} − x − 12"))} and {M(F(1, f"{sq(chr(120))} − 16"))}.',
         a=M('(x − 4)(x + 4)(x + 3)'),
         check=('lcm', ['x**2-x-12', 'x**2-16'], '(x-4)*(x+4)*(x+3)')),
    dict(q=f'Bring {M(F(1, f"{sq(chr(120), 3)} − 8"))} and {M(F(1, f"{sq(chr(120))} − 4"))} '
           'to a common denominator.',
         a=f'LCD {M(f"(x − 2)(x + 2)({sq(chr(120))} + 2x + 4)")}',
         check=('lcm', ['x**3-8', 'x**2-4'], '(x-2)*(x+2)*(x**2+2*x+4)')),
]

Q_BEYOND = [
    dict(q=f'Find the LCD of {M(F(1, f"{sq(chr(120))} − 1"))} and {M(F(1, f"{sq(chr(120), 3)} − 1"))}.',
         a=M(f'(x − 1)(x + 1)({sq("x")} + x + 1)'),
         check=('lcm', ['x**2-1', 'x**3-1'], '(x-1)*(x+1)*(x**2+x+1)'),
         sol='x² − 1 = (x − 1)(x + 1) and x³ − 1 = (x − 1)(x² + x + 1). The factor '
             '(x − 1) is shared, so it is taken once: LCD = (x − 1)(x + 1)(x² + x + 1).'),
    dict(q=f'Find the LCD of {M(F(1, f"{sq(chr(120), 3)} − x"))}, {M(F(1, f"{sq(chr(120), 3)} + {sq(chr(120))}"))} '
           f'and {M(F(1, f"{sq(chr(120))} − 1"))}.',
         a=M(f'{sq("x")}(x − 1)(x + 1)'),
         check=('lcm', ['x**3-x', 'x**3+x**2', 'x**2-1'], 'x**2*(x-1)*(x+1)'),
         sol='x³ − x = x(x − 1)(x + 1), x³ + x² = x²(x + 1), x² − 1 = (x − 1)(x + 1). '
             'Highest power of x is x², and each bracket appears once: x²(x − 1)(x + 1).'),
    dict(q=f'Show that {M(f"{sq(chr(120), 4)} − 1")} and {M(f"{sq(chr(120), 6)} − 1")} have the common '
           f'factor {M(f"{sq(chr(120))} − 1")}, then find their LCD.',
         a=M(f'({sq("x")} − 1)({sq("x")} + 1)({sq("x")} + x + 1)({sq("x")} − x + 1)'),
         check=('lcm', ['x**4-1', 'x**6-1'],
                '(x**2-1)*(x**2+1)*(x**2+x+1)*(x**2-x+1)'),
         sol='x⁴ − 1 = (x² − 1)(x² + 1) and x⁶ − 1 = (x² − 1)(x⁴ + x² + 1) '
             '= (x² − 1)(x² + x + 1)(x² − x + 1). The shared part is x² − 1, taken once. '
             'In general gcd(xⁿ − 1, xᵐ − 1) = x^gcd(n,m) − 1.'),
    dict(q=f'Bring {M(F(1, "(x − y)<sup>2</sup>"))}, {M(F(1, "(y − x)<sup>3</sup>"))} and '
           f'{M(F(1, f"{sq(chr(120))} − {sq(chr(121))}"))} to a common denominator.',
         a=M('(x − y)<sup>3</sup>(x + y)'),
         check=('lcm', ['(x-y)**2', '(x-y)**3', 'x**2-y**2'], '(x-y)**3*(x+y)'),
         sol='(y − x)³ = −(x − y)³, so the third bracket is the same one with a sign. '
             'x² − y² = (x − y)(x + y). Highest power of (x − y) is 3, and (x + y) appears once.'),
    dict(q=f'Find the LCD of {M(F(1, f"{sq(chr(120))} + x + 1"))} and {M(F(1, f"{sq(chr(120), 3)} − 1"))}.',
         a=M(f'{sq("x", 3)} − 1'),
         check=('lcm', ['x**2+x+1', 'x**3-1'], 'x**3-1'),
         sol='x³ − 1 = (x − 1)(x² + x + 1), so the first denominator is already a factor '
             'of the second. The LCD is the second denominator itself.'),
    dict(q=f'Find the LCD of {M(F(1, f"{sq(chr(120))} − (a + b)x + ab"))} and {M(F(1, "x − a"))}.',
         a=M('(x − a)(x − b)'),
         check=('lcm', ['x**2-(a+b)*x+a*b', 'x-a'], '(x-a)*(x-b)'),
         sol='x² − (a + b)x + ab = (x − a)(x − b) — the two numbers that add to a + b and '
             'multiply to ab are a and b. The factor (x − a) is shared.'),
    dict(q=f'Find every integer {M("n")} for which {M(F("n + 3", "n − 1"))} is an integer.',
         a=M('n ∈ {−3, −1, 0, 2, 3, 5}'), check=('custom', 'divisors_n_plus_3'),
         sol='Build the numerator from the denominator: (n + 3)/(n − 1) = 1 + 4/(n − 1). '
             'This is an integer exactly when (n − 1) divides 4, so n − 1 ∈ {±1, ±2, ±4} '
             'and n ∈ {−3, −1, 0, 2, 3, 5}.'),
    dict(q=f'Find every integer {M("n")} for which {M(F("2n + 5", "n − 2"))} is an integer.',
         a=M('n ∈ {−7, −1, 1, 3, 5, 11}'), check=('custom', 'divisors_2n_plus_5'),
         sol='(2n + 5)/(n − 2) = 2 + 9/(n − 2), so (n − 2) divides 9: '
             'n − 2 ∈ {±1, ±3, ±9} and n ∈ {−7, −1, 1, 3, 5, 11}.'),
    dict(q=f'Bring {M(F(1, f"{sq(chr(120), 3)} + 1"))} and {M(F(1, f"{sq(chr(120))} − 1"))} '
           'to a common denominator.',
         a=M(f'(x − 1)(x + 1)({sq("x")} − x + 1)'),
         check=('lcm', ['x**3+1', 'x**2-1'], '(x-1)*(x+1)*(x**2-x+1)'),
         sol='x³ + 1 = (x + 1)(x² − x + 1) and x² − 1 = (x − 1)(x + 1). The shared (x + 1) '
             'is taken once.'),
    dict(q=f'Find the LCD of {M(F(1, f"{sq(chr(120))} + 5x + 6"))}, {M(F(1, f"{sq(chr(120))} + 4x + 3"))} '
           f'and {M(F(1, f"{sq(chr(120))} + 3x + 2"))}.',
         a=M('(x + 1)(x + 2)(x + 3)'),
         check=('lcm', ['x**2+5*x+6', 'x**2+4*x+3', 'x**2+3*x+2'], '(x+1)*(x+2)*(x+3)'),
         sol='The three denominators are (x + 2)(x + 3), (x + 1)(x + 3) and (x + 1)(x + 2) — '
             'the three pairs from the same three brackets. Each bracket is taken once.'),
    dict(q=f'For which values of {M("k")} do {M(F(1, f"{sq(chr(120))} − 4"))} and '
           f'{M(F(1, f"{sq(chr(120))} + kx + 4"))} have an LCD of degree 3?',
         a=M('k = 4') + ' or ' + M('k = −4'), check=('custom', 'k_degree_three'),
         sol='Degree 3 means the two denominators share exactly one linear factor. '
             'x² − 4 = (x − 2)(x + 2). If (x − 2) divides x² + kx + 4 then 4 + 2k + 4 = 0, '
             'k = −4, giving (x − 2)²; if (x + 2) does, then 4 − 2k + 4 = 0, k = 4, giving '
             '(x + 2)². Both give an LCD of degree 3.'),
    dict(q=f'Show that {M(F(1, "n(n + 1)"))} = {M(F(1, "n"))} − {M(F(1, "n + 1"))}, and hence find '
           f'the LCD of {M(F(1, 2))}, {M(F(1, 6))}, {M(F(1, 12))} and {M(F(1, 20))}.',
         a=M('60'), check=('lcm', ['2', '6', '12', '20'], '60'),
         sol='Over the common denominator n(n + 1): 1/n − 1/(n+1) = [(n+1) − n]/(n(n+1)) '
             '= 1/(n(n+1)). The four denominators are 1·2, 2·3, 3·4 and 4·5, and '
             'LCM(2, 6, 12, 20) = 60.'),
    dict(q='Two denominators have LCD equal to their product. What does that tell you about '
           'them? Give an example and a counter-example.',
         a='They share no common factor.', check=None,
         sol='If A and B have no factor in common, nothing is taken twice and LCD = AB. '
             'Example: (x − 1) and (x + 1) give (x − 1)(x + 1). Counter-example: '
             'x² − 1 and x + 1 share (x + 1), so the LCD is x² − 1, not (x² − 1)(x + 1).'),
    dict(q=f'Find the smallest expression that both {M(F(1, f"6{sq(chr(97))}b"))} and '
           f'{M(F(1, f"15a{sq(chr(98), 3)}"))} can be written over, and give each additional factor.',
         a=M(f'30{sq("a")}{sq("b", 3)}') + '; factors ' + M(f'5{sq("b")}') + ' and ' + M('2a'),
         check=('lcm', ['6*a**2*b', '15*a*b**3'], '30*a**2*b**3'),
         sol='LCM(6, 15) = 30; a to its highest power is a²; b to its highest power is b³. '
             'So the LCD is 30a²b³. Dividing: 30a²b³ ÷ 6a²b = 5b² and 30a²b³ ÷ 15ab³ = 2a.'),
    dict(q=f'Prove that for every integer {M("n ≥ 1")} the fractions {M(F(1, "n"))} and '
           f'{M(F(1, "n + 1"))} have LCD {M("n(n + 1)")}.',
         a='Consecutive integers share no factor above 1.', check=None,
         sol='Any common divisor d of n and n + 1 divides their difference, which is 1, '
             'so d = 1. With no shared factor the LCD is the product n(n + 1).'),
]

TOPIC = dict(key='alg-04', unit='Unit 1 · Algebraic fractions', number=4, lessons='9–11',
         title='Reducing fractions to a common denominator',
         subtitle='Building fractions up instead of cutting them down.',
         uz='Algebra 8, §3, pp. 18–21', cam='Cambridge Stage 9 · 2.5',
         keywords=['common denominator', 'lowest common denominator (LCD)',
                   'additional factor', 'lowest common multiple', 'highest power',
                   'factorised form', 'reversed bracket'],
         remember=[
             'Factorise every denominator completely before you do anything else.',
             'Take every factor that appears anywhere, each to its <b>highest</b> power — '
             'that product is the LCD.',
             'The additional factor of a fraction is LCD ÷ its own denominator.',
             'Multiply the numerator by the additional factor too, never the denominator alone.',
             '<span class="m">b − a = −(a − b)</span>, so a reversed bracket costs a sign, '
             'not a new factor.'],
         sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
                   ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
