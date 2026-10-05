# -*- coding: utf-8 -*-
"""Questions for topic 1 of Grade 8 algebra — revision of the Grade 7 course."""

from .common import F, M, sq

x2, x3, x4 = sq('x'), sq('x', 3), sq('x', 4)
a2, a3 = sq('a'), sq('a', 3)

Q_FOCUS = [
    dict(q=f'Simplify {M(sq("x", 3) + " · " + sq("x", 5))}.',
         a=M(sq('x', 8)), check=('simp', 'x**3*x**5', 'x**8')),
    dict(q=f'Simplify {M(sq("a", 7) + " ÷ " + sq("a", 3))}.',
         a=M(sq('a', 4)), check=('simp', 'a**7/a**3', 'a**4')),
    dict(q=f'Simplify {M("(" + sq("y", 4) + ")<sup>3</sup>")}.',
         a=M(sq('y', 12)), check=('simp', '(y**4)**3', 'y**12')),
    dict(q=f'Expand {M("3(x − 5)")}.',
         a=M('3x − 15'), check=('simp', '3*(x-5)', '3*x-15')),
    dict(q=f'Expand {M("x(x + 7)")}.',
         a=M(f'{x2} + 7x'), check=('simp', 'x*(x+7)', 'x**2+7*x')),
    dict(q=f'Factorise {M("6x + 9")}.',
         a=M('3(2x + 3)'), check=('simp', '6*x+9', '3*(2*x+3)')),
    dict(q=f'Factorise {M(f"{x2} − 49")}.',
         a=M('(x − 7)(x + 7)'), check=('simp', 'x**2-49', '(x-7)*(x+7)')),
    dict(q=f'Solve {M("4x − 12 = 0")}.',
         a=M('x = 3'), check=('solve', '4*x-12', ['3'])),
    dict(q=f'Simplify {M("(2a)<sup>3</sup>")}.',
         a=M(f'8{a3}'), check=('simp', '(2*a)**3', '8*a**3')),
    dict(q=f'Expand {M("(x + 3)(x + 4)")}.',
         a=M(f'{x2} + 7x + 12'), check=('simp', '(x+3)*(x+4)', 'x**2+7*x+12')),
]

Q_PRACTICE = [
    dict(q=f'Simplify {M(f"(3{x2}y)(4x{sq(chr(121), 3)})")}.',
         a=M(f'12{sq("x", 3)}{sq("y", 4)}'), check=('simp', '3*x**2*y*4*x*y**3', '12*x**3*y**4')),
    dict(q=f'Simplify {M(f"15{sq(chr(97), 5)}{sq(chr(98))} ÷ 5{a2}b")}.',
         a=M(f'3{a3}b'), check=('simp', '15*a**5*b**2/(5*a**2*b)', '3*a**3*b')),
    dict(q=f'Expand and simplify {M("(x − 5)(x + 2)")}.',
         a=M(f'{x2} − 3x − 10'), check=('simp', '(x-5)*(x+2)', 'x**2-3*x-10')),
    dict(q=f'Expand {M("(2x + 3)<sup>2</sup>")}.',
         a=M(f'4{x2} + 12x + 9'), check=('simp', '(2*x+3)**2', '4*x**2+12*x+9')),
    dict(q=f'Factorise {M(f"{x2} + 8x + 16")}.',
         a=M('(x + 4)<sup>2</sup>'), check=('simp', 'x**2+8*x+16', '(x+4)**2')),
    dict(q=f'Factorise {M(f"4{x2} − 25")}.',
         a=M('(2x − 5)(2x + 5)'), check=('simp', '4*x**2-25', '(2*x-5)*(2*x+5)')),
    dict(q=f'Factorise {M("ax + ay + bx + by")}.',
         a=M('(a + b)(x + y)'), check=('simp', 'a*x+a*y+b*x+b*y', '(a+b)*(x+y)')),
    dict(q=f'Solve {M("5(x − 2) = 3x + 4")}.',
         a=M('x = 7'), check=('solve', '5*(x-2)-(3*x+4)', ['7'])),
    dict(q=f'Make {M("x")} the subject of {M("y = 3x + 7")}.',
         a=M('x = ' + F('y − 7', 3)), check=('simp', '(y-7)/3', '(y-7)/3')),
    dict(q=f'Simplify {M(f"({x3})<sup>2</sup> · {x4} ÷ {sq(chr(120), 5)}")}.',
         a=M(sq('x', 5)), check=('simp', '(x**3)**2*x**4/x**5', 'x**5')),
]

Q_CHALLENGE = [
    dict(q=f'Factorise {M(f"{x3} − 9x")}.',
         a=M('x(x − 3)(x + 3)'), check=('simp', 'x**3-9*x', 'x*(x-3)*(x+3)')),
    dict(q=f'Factorise {M(f"2{x2} + 7x + 3")}.',
         a=M('(2x + 1)(x + 3)'), check=('simp', '2*x**2+7*x+3', '(2*x+1)*(x+3)')),
    dict(q=f'Simplify {M(f"({a2}{sq(chr(98), 3)})<sup>4</sup> ÷ ({a3}{sq(chr(98))})<sup>2</sup>")}.',
         a=M(f'{a2}{sq("b", 8)}'), check=('simp', '(a**2*b**3)**4/(a**3*b**2)**2', 'a**2*b**8')),
    dict(q=f'Expand and simplify {M("(x + 2)(x − 2)(x + 1)")}.',
         a=M(f'{x3} + {x2} − 4x − 4'),
         check=('simp', '(x+2)*(x-2)*(x+1)', 'x**3+x**2-4*x-4')),
    dict(q=f'Factorise {M(f"3{x3} − 12{x2} + 12x")}.',
         a=M('3x(x − 2)<sup>2</sup>'), check=('simp', '3*x**3-12*x**2+12*x', '3*x*(x-2)**2')),
    dict(q=f'Solve {M(F("x − 1", 2) + " + " + F("x + 2", 3) + " = 4")}.',
         a=M('x = ' + F(23, 5)), check=('solve', '(x-1)/2+(x+2)/3-4', ['Rational(23,5)'])),
    dict(q=f'Make {M("r")} the subject of {M("A = πr<sup>2</sup>h")}, '
           f'taking {M("r > 0")}.',
         a=M('r = √(' + F('A', 'πh') + ')'), check=('custom', 'subject_r')),
    dict(q=f'Factorise {M(f"{x4} − 16")} completely.',
         a=M(f'({x2} + 4)(x − 2)(x + 2)'),
         check=('simp', 'x**4-16', '(x**2+4)*(x-2)*(x+2)')),
    dict(q=f'Simplify {M(f"(3{x2})<sup>3</sup> ÷ 9{x4}")}.',
         a=M(f'3{x2}'), check=('simp', '(3*x**2)**3/(9*x**4)', '3*x**2')),
    dict(q=f'Factorise {M(f"{a3} + {a2} − a − 1")}.',
         a=M('(a + 1)<sup>2</sup>(a − 1)'),
         check=('simp', 'a**3+a**2-a-1', '(a+1)**2*(a-1)')),
]

Q_BEYOND = [
    dict(q=f'Factorise {M(f"{x4} + 4")} into two quadratic factors.',
         a=M(f'({x2} − 2x + 2)({x2} + 2x + 2)'),
         check=('simp', 'x**4+4', '(x**2-2*x+2)*(x**2+2*x+2)'),
         sol='Add and subtract 4x²: x⁴ + 4x² + 4 − 4x² = (x² + 2)² − (2x)², '
             'a difference of two squares, giving (x² − 2x + 2)(x² + 2x + 2). '
             'This is the Sophie Germain identity.'),
    dict(q=f'Given {M("x + y = 7")} and {M("xy = 10")}, find {M(f"{x2} + {sq(chr(121))}")} '
           f'and {M(f"{x3} + {sq(chr(121), 3)}")}.',
         a=M('29') + ' and ' + M('133'), check=('custom', 'sum_product_7_10'),
         sol='x² + y² = (x + y)² − 2xy = 49 − 20 = 29. '
             'x³ + y³ = (x + y)³ − 3xy(x + y) = 343 − 3·10·7 = 133.'),
    dict(q=f'Prove that {M(f"{sq(chr(110), 3)} − n")} is divisible by {M("6")} for every integer {M("n")}.',
         a=M('n(n − 1)(n + 1)') + ' — three consecutive integers',
         check=('simp', 'n**3-n', '(n-1)*n*(n+1)'),
         sol='n³ − n = n(n² − 1) = (n − 1)n(n + 1), three consecutive integers. '
             'One of any three is divisible by 3 and at least one is even, so the '
             'product is divisible by 2 · 3 = 6.'),
    dict(q=f'Factorise {M(f"{a3} + {sq(chr(98), 3)} + {sq(chr(99), 3)} − 3abc")}.',
         a=M(f'(a + b + c)({a2} + {sq("b")} + {sq("c")} − ab − bc − ca)'),
         check=('simp', 'a**3+b**3+c**3-3*a*b*c',
                '(a+b+c)*(a**2+b**2+c**2-a*b-b*c-c*a)'),
         sol='A standard identity. One route: substitute c → −(a + b) and watch the '
             'expression vanish, which shows (a + b + c) is a factor; dividing gives '
             'the quadratic factor. It follows at once that a + b + c = 0 forces '
             'a³ + b³ + c³ = 3abc.'),
    dict(q=f'Simplify {M("(1 − " + F(1, sq("2")) + ")(1 − " + F(1, sq("3")) + ")… (1 − " + F(1, sq("n")) + ")")}.',
         a=M(F('n + 1', '2n')), check=('custom', 'product_one_minus'),
         sol='1 − 1/k² = (k − 1)(k + 1)/k². Writing the product out, the numerators '
             '1·3, 2·4, 3·5, … slide against the denominators and all that survives is '
             '(1/2)·((n + 1)/n) = (n + 1)/(2n).'),
    dict(q=f'Find every pair of integers {M("(x, y)")} with {M("xy − 2x + 3y = 11")}.',
         a=M('(2, 3), (−2, 7), (−4, −3), (−8, 1)'), check=('custom', 'xy_diophantine'),
         sol='Group to factorise: x(y − 2) + 3(y − 2) = 11 − 6, so (x + 3)(y − 2) = 5. '
             'The factor pairs of 5 are (1, 5), (5, 1), (−1, −5), (−5, −1), giving '
             '(x, y) = (−2, 7), (2, 3), (−4, −3), (−8, 1).'),
    dict(q=f'Prove that {M("(a + b)<sup>2</sup> − (a − b)<sup>2</sup> = 4ab")}.',
         a=M('4ab'), check=('simp', '(a+b)**2-(a-b)**2', '4*a*b'),
         sol='Either expand both squares and subtract, or treat it as a difference of '
             'two squares: [(a+b) − (a−b)][(a+b) + (a−b)] = (2b)(2a) = 4ab.'),
    dict(q=f'If {M("a + " + F(1, "a") + " = 5")}, find {M(a2 + " + " + F(1, a2))} and '
           f'{M(sq("a", 4) + " + " + F(1, sq("a", 4)))}.',
         a=M('23') + ' and ' + M('527'), check=('custom', 'a_plus_inverse_5'),
         sol='Square: (a + 1/a)² = a² + 2 + 1/a², so a² + 1/a² = 25 − 2 = 23. '
             'Square again: (a² + 1/a²)² = a⁴ + 2 + 1/a⁴, so a⁴ + 1/a⁴ = 529 − 2 = 527.'),
    dict(q=f'Factorise {M(f"{x4} + {x2} + 1")}.',
         a=M(f'({x2} + x + 1)({x2} − x + 1)'),
         check=('simp', 'x**4+x**2+1', '(x**2+x+1)*(x**2-x+1)'),
         sol='Add and subtract x²: x⁴ + 2x² + 1 − x² = (x² + 1)² − x², a difference of '
             'two squares.'),
    dict(q=f'Show that {M(sq("2", 10) + " + " + sq("2", 11) + " + " + sq("2", 12))} is divisible by {M("7")}.',
         a=M('7 · ' + sq('2', 10)), check=('custom', 'powers_of_two_seven'),
         sol='Take out the common factor: 2¹⁰(1 + 2 + 4) = 2¹⁰ · 7. '
             'The same trick shows 2ⁿ + 2ⁿ⁺¹ + 2ⁿ⁺² is always a multiple of 7.'),
    dict(q=f'Prove that {M("n(n + 1)(n + 2)(n + 3) + 1")} is a perfect square for every integer {M("n")}.',
         a=M(f'({sq(chr(110))} + 3n + 1)<sup>2</sup>'),
         check=('simp', 'n*(n+1)*(n+2)*(n+3)+1', '(n**2+3*n+1)**2'),
         sol='Pair the outer and inner factors: n(n+3) = n² + 3n and (n+1)(n+2) = n² + 3n + 2. '
             'With t = n² + 3n the expression is t(t + 2) + 1 = (t + 1)², '
             'that is (n² + 3n + 1)².'),
    dict(q=f'Expand {M("(x + y + z)<sup>2</sup>")}.',
         a=M(f'{x2} + {sq("y")} + {sq("z")} + 2xy + 2yz + 2zx'),
         check=('simp', '(x+y+z)**2', 'x**2+y**2+z**2+2*x*y+2*y*z+2*z*x'),
         sol='Every term multiplies every term: the three squares, and each of the '
             'three cross products twice.'),
    dict(q=f'Solve {M("2(x − 3) − 3(x − 5) = 4 − x")}, or show that it has no solution.',
         a='No solution — the equation reduces to ' + M('9 = 4'),
         check=('custom', 'no_solution_linear'),
         sol='Left side: 2x − 6 − 3x + 15 = −x + 9. The equation is −x + 9 = 4 − x; '
             'adding x to both sides leaves 9 = 4, which is false, so no value of x works.'),
    dict(q=f'Find the value of {M("(2 + 1)(" + sq("2") + " + 1)(" + sq("2", 4) + " + 1)(" + sq("2", 8) + " + 1)")}.',
         a=M(sq('2', 16) + ' − 1 = 65 535'), check=('custom', 'fermat_product'),
         sol='Multiply by (2 − 1) = 1, which changes nothing: '
             '(2 − 1)(2 + 1) = 2² − 1, then (2² − 1)(2² + 1) = 2⁴ − 1, and so on up to '
             '2¹⁶ − 1 = 65 535.'),
    dict(q=f'Prove that if {M("a + b + c = 0")} then {M(f"{a3} + {sq(chr(98), 3)} + {sq(chr(99), 3)} = 3abc")}.',
         a=M('3abc'), check=('custom', 'abc_cubes'),
         sol='From the factorisation a³ + b³ + c³ − 3abc '
             '= (a + b + c)(a² + b² + c² − ab − bc − ca), the first bracket is 0, '
             'so the whole left side is 0 and a³ + b³ + c³ = 3abc.'),
]

TOPIC = dict(
    key='alg-01', number=1, lessons='1–3',
    title='Revision of the Grade 7 course',
    subtitle='Powers, brackets, factorising and linear equations — the four tools '
             'every fraction question this term will need.',
    uz='Algebra 8, pp. 3–6', cam='Cambridge Stage 8 review',
    keywords=['power', 'base of a power', 'index (exponent)', 'expand the brackets',
              'factorise', 'common factor', 'difference of two squares',
              'perfect square', 'linear equation', 'subject of a formula'],
    remember=[
        'Indices: <span class="m">x<sup>m</sup> · x<sup>n</sup> = x<sup>m+n</sup></span>, '
        '<span class="m">x<sup>m</sup> ÷ x<sup>n</sup> = x<sup>m−n</sup></span>, '
        '<span class="m">(x<sup>m</sup>)<sup>n</sup> = x<sup>mn</sup></span>.',
        'A power outside a bracket reaches everything inside: '
        '<span class="m">(2a)<sup>3</sup> = 8a<sup>3</sup></span>, not '
        '<span class="m">2a<sup>3</sup></span>.',
        'Always look for a common factor first, and only then for one of the three '
        'identities.',
        'The three identities: <span class="m">a<sup>2</sup> − b<sup>2</sup> = (a − b)(a + b)</span>, '
        '<span class="m">a<sup>2</sup> ± 2ab + b<sup>2</sup> = (a ± b)<sup>2</sup></span>.',
        'Four terms and no common factor — try grouping them in pairs.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
