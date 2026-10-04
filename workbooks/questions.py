# -*- coding: utf-8 -*-
"""The question bank for the Grade 8 algebra workbook.

Each question carries what the page shows (`q`, `a`) and, where the answer is an
algebraic object, a machine-checkable form (`check`) that verify-questions.py
runs through sympy. The sections follow the Cambridge workbook ladder — Focus,
Practice, Challenge — with a fourth, harder section for olympiad work.

check forms
    ('simp', expression, expected)   simplify(expression - expected) == 0
    ('lcm', [denominators], lcd)     the lowest common denominator
    ('value', expression, number)    a numeric answer
    ('custom', key)                  checked by hand in the verifier
"""


def F(num, den):
    """A stacked fraction."""
    return (f'<span class="frac"><span class="num">{num}</span>'
            f'<span class="den">{den}</span></span>')


def M(text):
    return f'<span class="m">{text}</span>'


def sq(base, power=2):
    return f'{base}<sup>{power}</sup>'


# ======================================================================
# Topic 1 — Reducing fractions to a common denominator (Algebra 8, §3)
# ======================================================================

T1_FOCUS = [
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

T1_PRACTICE = [
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

T1_CHALLENGE = [
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

T1_BEYOND = [
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

# ======================================================================
# Topic 2 — Addition and subtraction of algebraic fractions (Algebra 8, §4)
# ======================================================================

T2_FOCUS = [
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

T2_PRACTICE = [
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

T2_CHALLENGE = [
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

T2_BEYOND = [
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

TOPICS = [
    dict(key='alg-04', number=3, lessons='9–11',
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
         sections=[('Focus', T1_FOCUS), ('Practice', T1_PRACTICE),
                   ('Challenge', T1_CHALLENGE), ('Beyond', T1_BEYOND)]),
    dict(key='alg-05', number=4, lessons='12–14',
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
         sections=[('Focus', T2_FOCUS), ('Practice', T2_PRACTICE),
                   ('Challenge', T2_CHALLENGE), ('Beyond', T2_BEYOND)]),
]

SECTION_BLURB = {
    'Focus': 'The basic skill, one step at a time.',
    'Practice': 'The same skill where a denominator has to be factorised first.',
    'Challenge': 'Several factors, higher powers and reversed brackets.',
    'Beyond': 'Olympiad work. Expect to spend real time on these — '
              'some need an idea, not just a method.',
}
