# -*- coding: utf-8 -*-
"""Questions for topic 2 of Grade 8 algebra — algebraic expressions."""

from .common import F, M, sq

x2, x3 = sq('x'), sq('x', 3)

Q_FOCUS = [
    dict(q=f'Is {M("3x + 5")} a whole expression or a fractional one?',
         a='Whole — no variable in a denominator.', check=None),
    dict(q=f'Is {M(F("x + 1", "x"))} a whole expression or a fractional one?',
         a='Fractional — the variable is in the denominator.', check=None),
    dict(q=f'State the permissible values of {M(F(1, "x"))}.',
         a=M('x ≠ 0'), check=('domain', '1/x', ['0'])),
    dict(q=f'State the permissible values of {M(F(1, "x − 3"))}.',
         a=M('x ≠ 3'), check=('domain', '1/(x-3)', ['3'])),
    dict(q=f'Find the value of {M("2x + 7")} when {M("x = 4")}.',
         a=M('15'), check=('simp', '2*4+7', '15')),
    dict(q=f'Find the value of {M(f"{x2} − 3x")} when {M("x = 5")}.',
         a=M('10'), check=('simp', '5**2-3*5', '10')),
    dict(q=f'State the permissible values of {M(F("x + 2", 5))}.',
         a='Every value of ' + M('x') + ' — the denominator is a number.',
         check=('domain', '(x+2)/5', [])),
    dict(q='Write as an algebraic expression: five more than three times ' + M('x') + '.',
         a=M('3x + 5'), check=('simp', '3*x+5', '3*x+5')),
    dict(q=f'Find the value of {M(F("x + 1", "x − 1"))} when {M("x = 3")}.',
         a=M('2'), check=('simp', '(3+1)/(3-1)', '2')),
    dict(q=f'State the permissible values of {M(F(1, "x + 6"))}.',
         a=M('x ≠ −6'), check=('domain', '1/(x+6)', ['-6'])),
]

Q_PRACTICE = [
    dict(q=f'State the permissible values of {M(F(1, f"{x2} − 9"))}.',
         a=M('x ≠ 3') + ', ' + M('x ≠ −3'), check=('domain', '1/(x**2-9)', ['3', '-3'])),
    dict(q=f'State the permissible values of {M(F("x", f"{x2} + 1"))}.',
         a='Every value of ' + M('x') + ' — ' + M(f'{x2} + 1') + ' is never zero.',
         check=('domain', 'x/(x**2+1)', [])),
    dict(q=f'Find the value of {M(F(f"{sq(chr(97))} − {sq(chr(98))}", "a + b"))} when '
           f'{M("a = 7")} and {M("b = 3")}.',
         a=M('4'), check=('simp', '(7**2-3**2)/(7+3)', '4')),
    dict(q=f'State the permissible values of {M(F(1, f"{x2} + 4x"))}.',
         a=M('x ≠ 0') + ', ' + M('x ≠ −4'), check=('domain', '1/(x**2+4*x)', ['0', '-4'])),
    dict(q='Write as an algebraic expression: the reciprocal of the sum of '
           + M('x') + ' and ' + M('3') + '.',
         a=M(F(1, 'x + 3')), check=('simp', '1/(x+3)', '1/(x+3)')),
    dict(q=f'Find the value of {M(F(1, "x") + " + " + F(1, "y"))} when {M("x = 2")} and {M("y = 3")}.',
         a=M(F(5, 6)), check=('simp', '1/2+1/3', 'Rational(5,6)')),
    dict(q=f'State the permissible values of {M(F("x − 1", "(x − 2)(x + 5)"))}.',
         a=M('x ≠ 2') + ', ' + M('x ≠ −5'),
         check=('domain', '(x-1)/((x-2)*(x+5))', ['2', '-5'])),
    dict(q='Write as an algebraic expression: the time taken to travel '
           + M('s') + ' km at ' + M('v') + ' km/h.',
         a=M(F('s', 'v')) + ' hours', check=None),
    dict(q=f'Find the value of {M(F("2x + 1", "x − 4"))} when {M("x = 0")}.',
         a=M('−' + F(1, 4)), check=('simp', '(2*0+1)/(0-4)', 'Rational(-1,4)')),
    dict(q=f'Is {M(F(3, "x") + " + " + F("x", 3))} a whole expression or a fractional one?',
         a='Fractional — ' + M(F(3, 'x')) + ' has the variable below the line.',
         check=None),
]

Q_CHALLENGE = [
    dict(q=f'State the permissible values of {M(F(1, f"{x2} − 5x + 6"))}.',
         a=M('x ≠ 2') + ', ' + M('x ≠ 3'),
         check=('domain', '1/(x**2-5*x+6)', ['2', '3'])),
    dict(q=f'State the permissible values of {M(F("x + 1", f"{x3} − x"))}.',
         a=M('x ≠ 0') + ', ' + M('x ≠ 1') + ', ' + M('x ≠ −1'),
         check=('domain', '(x+1)/(x**3-x)', ['0', '1', '-1'])),
    dict(q=f'Find the value of {M(F(f"{x2} − {sq(chr(121))}", f"{x2} + 2xy + {sq(chr(121))}"))} '
           f'when {M("x = 5")} and {M("y = 3")}.',
         a=M(F(1, 4)), check=('simp', '(5**2-3**2)/(5**2+2*5*3+3**2)', 'Rational(1,4)')),
    dict(q=f'For which value of {M("x")} is {M(F("x − 2", "x − 2"))} <em>not</em> equal to '
           f'{M("1")}?',
         a=M('x = 2') + ' — there it is undefined, not equal to anything.',
         check=('domain', '(x-2)/(x-2)', ['2'])),
    dict(q=f'State the permissible values of {M(F(1, "1 + " + F(1, "x")))}.',
         a=M('x ≠ 0') + ', ' + M('x ≠ −1'), check=('domain', '1/(1+1/x)', ['0', '-1'])),
    dict(q='Two cars cover ' + M('d') + ' km, one at ' + M('v') + ' km/h and one at '
           + M('v + 10') + ' km/h. Write an expression for the difference in their times.',
         a=M(F('d', 'v') + ' − ' + F('d', 'v + 10')), check=None),
    dict(q=f'Where is {M(F(f"{x2} − 4", "x − 2"))} undefined, and what does it equal '
           'everywhere else?',
         a='Undefined at ' + M('x = 2') + '; equal to ' + M('x + 2') + ' elsewhere.',
         check=('domain', '(x**2-4)/(x-2)', ['2'])),
    dict(q=f'State the permissible values of {M(F(1, f"{x2} + 2x + 1"))}.',
         a=M('x ≠ −1'), check=('domain', '1/(x**2+2*x+1)', ['-1'])),
    dict(q=f'Find the value of {M(F(F(1, "a") + " − " + F(1, "b"), F(1, "a") + " + " + F(1, "b")))} '
           f'when {M("a = 2")} and {M("b = 3")}.',
         a=M(F(1, 5)), check=('simp', '(1/2-1/3)/(1/2+1/3)', 'Rational(1,5)')),
    dict(q=f'State the permissible values of {M(F(1, "x(x − 1)(x + 2)"))}.',
         a=M('x ≠ 0, 1, −2'), check=('domain', '1/(x*(x-1)*(x+2))', ['0', '1', '-2'])),
]

Q_BEYOND = [
    dict(q=f'For which {M("x")} is {M(F(f"{x2} + 1", f"{x2} − 1"))} defined, and can it ever '
           f'equal {M("1")}?',
         a=M('x ≠ ±1') + '; it is never equal to ' + M('1'),
         check=('custom', 'never_one'),
         sol='The denominator vanishes at x = ±1. If the fraction equalled 1 then '
             'x² + 1 = x² − 1, that is 1 = −1, which is false. So the value 1 is never '
             'reached — however large x grows the fraction only approaches it.'),
    dict(q=f'Show that {M("x + " + F(1, "x") + " ≥ 2")} for every {M("x > 0")}, and say when '
           'the two sides are equal.',
         a=M('x = 1'), check=('custom', 'am_gm_x'),
         sol='x + 1/x − 2 = (x² − 2x + 1)/x = (x − 1)²/x. For x > 0 the denominator is '
             'positive and the numerator is a square, so the whole is ≥ 0. It is zero '
             'exactly when x = 1.'),
    dict(q=f'Show that {M(F(f"{sq(chr(97))} + {sq(chr(98))}", "ab") + " ≥ 2")} for all '
           f'{M("a > 0")}, {M("b > 0")}.',
         a='Equality when ' + M('a = b'), check=('custom', 'am_gm_ab'),
         sol='(a² + b²)/(ab) − 2 = (a² − 2ab + b²)/(ab) = (a − b)²/(ab), which is ≥ 0 when '
             'a and b are positive. Equality needs (a − b)² = 0, so a = b.'),
    dict(q=f'Find every pair of positive integers {M("(a, b)")} with '
           f'{M(F(1, "a") + " + " + F(1, "b") + " = " + F(1, 2))}.',
         a=M('(3, 6), (4, 4), (6, 3)'), check=('custom', 'egyptian_half'),
         sol='Over a common denominator 2(a + b) = ab, so ab − 2a − 2b = 0 and, adding 4, '
             '(a − 2)(b − 2) = 4. The positive factor pairs of 4 are 1×4, 2×2, 4×1, '
             'giving (3, 6), (4, 4), (6, 3).'),
    dict(q=f'For which integers {M("n")} is {M(F(f"{sq(chr(110))} + 1", "n + 1"))} an integer?',
         a=M('n ∈ {−3, −2, 0, 1}'), check=('custom', 'n2_plus_1_over_n_plus_1'),
         sol='Divide: n² + 1 = (n + 1)(n − 1) + 2, so the fraction is n − 1 + 2/(n + 1). '
             'It is an integer exactly when (n + 1) divides 2, so n + 1 ∈ {±1, ±2} and '
             'n ∈ {−3, −2, 0, 1}.'),
    dict(q=f'For which integers {M("x")} is {M(F(f"{x2} + 3", "x + 1"))} an integer?',
         a=M('x ∈ {−5, −3, −2, 0, 1, 3}'), check=('custom', 'x2_plus_3_over_x_plus_1'),
         sol='x² + 3 = (x + 1)(x − 1) + 4, so the fraction is x − 1 + 4/(x + 1) and '
             '(x + 1) must divide 4: x + 1 ∈ {±1, ±2, ±4}, giving '
             'x ∈ {−5, −3, −2, 0, 1, 3}.'),
    dict(q=f'Show that {M(f"{x2} + x + 1 > 0")} for every real {M("x")}, so that '
           f'{M(F(1, f"{x2} + x + 1"))} is defined everywhere.',
         a='Always defined — no real root.', check=('domain', '1/(x**2+x+1)', []),
         sol='Complete the square: x² + x + 1 = (x + ½)² + ¾ ≥ ¾ > 0. '
             '(Equivalently the discriminant is 1 − 4 = −3 < 0, so there is no real root.)'),
    dict(q=f'For which values of {M("k")} is {M(F(1, f"{x2} + kx + 9"))} defined for every '
           f'real {M("x")}?',
         a=M('−6 < k < 6'), check=('custom', 'k_no_real_root'),
         sol='The denominator must have no real root, so its discriminant is negative: '
             'k² − 36 < 0, that is −6 < k < 6. At k = ±6 the denominator is (x ± 3)² and '
             'the expression fails at one point.'),
    dict(q=f'If {M("x + y = 10")} and {M(F(1, "x") + " + " + F(1, "y") + " = " + F(5, 12))}, '
           f'find {M("xy")}.',
         a=M('24'), check=('custom', 'sum_and_reciprocal_sum'),
         sol='1/x + 1/y = (x + y)/(xy), so 10/(xy) = 5/12 and xy = 24. '
             '(x and y are then 4 and 6.)'),
    dict(q=f'Solve {M(F("x − 1", "x + 1") + " = " + F("x + 1", "x − 1"))}.',
         a=M('x = 0'), check=('custom', 'cross_equal'),
         sol='Both denominators must be non-zero, so x ≠ ±1. Cross-multiplying, '
             '(x − 1)² = (x + 1)², so x² − 2x + 1 = x² + 2x + 1 and 4x = 0, giving x = 0. '
             'Checking: both sides are −1.'),
    dict(q=f'Three resistors in parallel satisfy {M(F(1, "R") + " = " + F(1, "R₁") + " + " + F(1, "R₂") + " + " + F(1, "R₃"))}. '
           f'Find {M("R")} when the three are {M("2")}, {M("3")} and {M("6")} ohms.',
         a=M('R = 1') + ' ohm', check=('simp', '1/(1/2+1/3+1/6)', '1'),
         sol='1/R = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 1, so R = 1 ohm — less than the '
             'smallest of the three, as a parallel combination always is.'),
    dict(q=f'If {M("a + b + c = 0")} and none of the denominators is zero, find the value of '
           f'{M(F("a", "b + c") + " + " + F("b", "c + a") + " + " + F("c", "a + b"))}.',
         a=M('−3'), check=('custom', 'abc_sum_minus_three'),
         sol='From a + b + c = 0, b + c = −a, c + a = −b and a + b = −c. '
             'Each term is therefore −1, and the sum is −3.'),
    dict(q=f'Simplify {M(F(f"{x2} − 1", "x − 1"))} and state exactly where the simplified '
           'form may be used.',
         a=M('x + 1') + ' for ' + M('x ≠ 1'), check=('domain', '(x**2-1)/(x-1)', ['1']),
         sol='x² − 1 = (x − 1)(x + 1), and cancelling (x − 1) needs it to be non-zero. '
             'So the two expressions agree everywhere except x = 1, where the original '
             'is undefined and x + 1 is 2.'),
    dict(q=f'State the permissible values of {M(F(1, "1 + " + F(1, "1 + " + F(1, "x"))))}.',
         a=M('x ≠ 0') + ', ' + M('x ≠ −1') + ', ' + M('x ≠ −' + F(1, 2)),
         check=('domain', '1/(1+1/(1+1/x))', ['0', '-1', 'Rational(-1,2)']),
         sol='Three denominators must be watched, not one: x ≠ 0 for the innermost; '
             '1 + 1/x ≠ 0 gives x ≠ −1; and 1 + 1/(1 + 1/x) = (2x + 1)/(x + 1) ≠ 0 gives '
             'x ≠ −½.'),
    dict(q=f'For which positive integers {M("n")} is {M(F("2n + 3", "n + 1"))} an integer?',
         a='None.', check=('custom', 'no_positive_n'),
         sol='(2n + 3)/(n + 1) = 2 + 1/(n + 1), so (n + 1) must divide 1. '
             'That needs n + 1 = ±1, so n = 0 or n = −2 — neither is a positive integer.'),
]

TOPIC = dict(
    key='alg-02', number=2, lessons='4–5',
    title='Algebraic expressions',
    subtitle='Whole expressions, fractional expressions, and the values of the '
             'variable that are simply not allowed.',
    uz='Algebra 8, §1, pp. 7–11', cam='Cambridge Stage 9 · 2.1–2.2',
    keywords=['algebraic expression', 'whole (integer) expression',
              'fractional expression', 'variable', 'permissible values',
              'numerator', 'denominator', 'value of an expression', 'undefined',
              'reciprocal'],
    remember=[
        'A <b>whole</b> expression has no variable below the line; a <b>fractional</b> '
        'one does.',
        'The permissible values are every value except those making a denominator zero.',
        'Read every denominator in the expression <b>as written</b> — in '
        '<span class="m">1 ÷ (1 + 1/x)</span> both <span class="m">x</span> and '
        '<span class="m">1 + 1/x</span> must be non-zero.',
        'A denominator that is a number, such as <span class="m">5</span>, rules nothing '
        'out.',
        'Cancelling can hide a forbidden value: <span class="m">(x−2)/(x−2)</span> is '
        '<span class="m">1</span> everywhere except at <span class="m">x = 2</span>, '
        'where it is undefined.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
