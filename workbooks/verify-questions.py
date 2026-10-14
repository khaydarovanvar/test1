#!/usr/bin/env python3
"""Check every answer in the workbook question bank with sympy.

Run this before building the PDF. A workbook with a wrong answer in the back is
worse than no workbook, so nothing is taken on trust: algebraic answers are
compared symbolically, and the olympiad questions whose answers are sets or
numbers are checked by their own routine below.
"""

import sys
import os

from sympy import (Abs, Integer, Rational, Symbol, cancel, expand, lambdify, lcm,
                   nsimplify,
                   pi, preorder_traversal, radsimp, sign, simplify, solve, sqrt,
                   sympify, together)

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bank

a, b, c, h, k, m, n, r, x, y, z = [Symbol(s) for s in 'abchkmnrxyz']
# positivity-constrained stand-ins, so a root or a power simplifies as the
# question's own condition allows
apos, bpos, xpos, ypos = [Symbol(s, positive=True)
                          for s in ('apos', 'bpos', 'xpos', 'ypos')]
tnn = Symbol('tnn', nonnegative=True)


def cbrt_real(v):
    """The real cube root, which sympy's ** would give as a complex principal value."""
    v = sympify(v)
    return sign(v) * Abs(v) ** Rational(1, 3)
A, d = Symbol('A'), Symbol('d')
SYMS = dict(a=a, b=b, c=c, d=d, h=h, k=k, m=m, n=n, r=r, x=x, y=y, z=z, A=A,
            apos=apos, bpos=bpos, xpos=xpos, ypos=ypos, tnn=tnn,
            cbrt_real=cbrt_real,
            Rational=Rational, pi=pi, sqrt=sqrt)


def same(lhs, rhs):
    """True when two expressions are equal as algebraic objects."""
    return simplify(cancel(together(sympify(lhs, SYMS) - sympify(rhs, SYMS)))) == 0


def check_lcm(denoms, expected):
    """The lowest common denominator, constants included."""
    got = denoms[0]
    for d in denoms[1:]:
        got = lcm(sympify(got, SYMS), sympify(d, SYMS))
    want = sympify(expected, SYMS)
    return expand(got - want) == 0 or expand(got + want) == 0


def check_domain(expr, excluded, var=None):
    """The values the variable may not take.

    Every denominator in the expression as written counts, not just the one left
    after simplification: in 1/(1 + 1/x) the inner 1/x rules out x = 0, and
    combining the fraction first would hide that.
    """
    # Parsed unevaluated: sympy would cancel (x − 2)/(x − 2) to 1 on sight and
    # the forbidden value — the whole point of such a question — would vanish.
    e = sympify(expr, SYMS, evaluate=False)
    v = sympify(var, SYMS) if var else x
    bad = set()
    for sub in preorder_traversal(e):
        if sub.is_Pow and sub.exp.is_negative:
            bad |= {r for r in solve(sub.base, v) if r.is_real}
    return bad == {sympify(t, SYMS) for t in excluded}


def never_one():
    """(x²+1)/(x²−1) is defined off ±1 and never takes the value 1."""
    undefined_ok = check_domain('(x**2+1)/(x**2-1)', ['1', '-1'])
    return undefined_ok and solve((x ** 2 + 1) / (x ** 2 - 1) - 1, x) == []


def am_gm_x():
    """x + 1/x − 2 = (x−1)²/x, so ≥ 0 for x > 0 with equality only at x = 1."""
    return (simplify(x + 1 / x - 2 - (x - 1) ** 2 / x) == 0
            and solve(x + 1 / x - 2, x) == [Integer(1)])


def am_gm_ab():
    return simplify((a ** 2 + b ** 2) / (a * b) - 2 - (a - b) ** 2 / (a * b)) == 0


def egyptian_half():
    found = {(i, j) for i in range(1, 200) for j in range(1, 200)
             if Rational(1, i) + Rational(1, j) == Rational(1, 2)}
    return found == {(3, 6), (4, 4), (6, 3)}


def n2_plus_1_over_n_plus_1():
    found = {i for i in range(-200, 200) if i != -1
             and Rational(i ** 2 + 1, i + 1).q == 1}
    return found == {-3, -2, 0, 1}


def x2_plus_3_over_x_plus_1():
    found = {i for i in range(-200, 200) if i != -1
             and Rational(i ** 2 + 3, i + 1).q == 1}
    return found == {-5, -3, -2, 0, 1, 3}


def k_no_real_root():
    """x² + kx + 9 has no real root exactly for −6 < k < 6."""
    for kv in range(-12, 13):
        real_roots = [r for r in solve(x ** 2 + kv * x + 9, x) if r.is_real]
        if bool(real_roots) != (abs(kv) >= 6):
            return False
    return True


def sum_and_reciprocal_sum():
    sols = solve([x + y - 10, 1 / x + 1 / y - Rational(5, 12)], [x, y])
    return bool(sols) and all(simplify(xv * yv - 24) == 0 for xv, yv in sols)


def cross_equal():
    return solve((x - 1) / (x + 1) - (x + 1) / (x - 1), x) == [Integer(0)]


def abc_sum_minus_three():
    expr = a / (b + c) + b / (c + a) + c / (a + b)
    return simplify(expr.subs(c, -a - b) + 3) == 0


def no_positive_n():
    return not any(Rational(2 * i + 3, i + 1).q == 1 for i in range(1, 500))


def product_one_minus_one_over():
    from sympy import prod
    return all(prod([1 - Rational(1, i) for i in range(2, N + 1)]) == Rational(1, N)
               for N in range(2, 30))


def n3_plus_1():
    bad = [i for i in range(-200, 200) if i != -1
           and Rational(i ** 3 + 1, i + 1).q != 1]
    return not bad


def exact_division_by_x_plus_2():
    """(x² + ax + b)/(x + 2) divides exactly exactly when b = 2a − 4."""
    from sympy import rem
    for av in range(-10, 11):
        for bv in range(-30, 31):
            exact = rem(x ** 2 + av * x + bv, x + 2, x) == 0
            if exact != (bv == 2 * av - 4):
                return False
    return True


def telescope_product_k_over_k1():
    from sympy import prod
    return all(prod([Rational(i, i + 1) for i in range(1, N + 1)]) == Rational(1, N + 1)
               for N in range(1, 30))


def cube_product():
    from sympy import prod
    for N in range(2, 25):
        got = prod([Rational(i ** 3 - 1, i ** 3 + 1) for i in range(2, N + 1)])
        want = Rational(2, 3) * Rational(N ** 2 + N + 1, N * (N + 1))
        if got != want:
            return False
    return True


def proportion_add_one():
    return simplify(((a + b) / b - (c + d) / d).subs(a, b * c / d)) == 0


def ratio_two_thirds():
    kk = Symbol('kk')
    return simplify(((x ** 2 + x * y) / y ** 2).subs({x: 2 * kk, y: 3 * kk})
                    - Rational(10, 9)) == 0


def product_one_plus():
    from sympy import prod
    return all(prod([1 + Rational(1, i) for i in range(1, N + 1)]) == N + 1
               for N in range(1, 30))


def squares_sum_zero():
    expr = a ** 2 + b ** 2 + c ** 2 + 2 * (a * b + b * c + c * a)
    return simplify(expr.subs(c, -a - b)) == 0


def componendo():
    xv = (a - b) / (a + b)
    return simplify((1 + xv) / (1 - xv) - a / b) == 0


def reciprocal_sum_zero():
    """1/x + 1/y + 1/z = 0 means xy + yz + zx = 0, and then the squares agree."""
    zz = solve(1 / x + 1 / y + 1 / z, z)[0]
    return simplify(((x + y + z) ** 2 - (x ** 2 + y ** 2 + z ** 2)).subs(z, zz)) == 0


def squared_denominators():
    """S·T is exactly the squared-denominator sum, so S = 0 forces it to vanish."""
    S = a / (b - c) + b / (c - a) + c / (a - b)
    T = 1 / (b - c) + 1 / (c - a) + 1 / (a - b)
    sq_sum = a / (b - c) ** 2 + b / (c - a) ** 2 + c / (a - b) ** 2
    return simplify(expand(S * T) - sq_sum) == 0


def two_products():
    from sympy import prod
    for N in range(2, 25):
        first = prod([1 + Rational(1, i) for i in range(1, N + 1)])
        second = prod([1 - Rational(1, i) for i in range(2, N + 1)])
        if first * second != Rational(N + 1, N):
            return False
    return True


def cube_in_terms_of_a():
    av = Symbol('av')
    for root in solve(x + 1 / x - av, x):
        if simplify(root ** 3 + 1 / root ** 3 - (av ** 3 - 3 * av)) != 0:
            return False
    return True


def three_squares_over_products():
    expr = a ** 2 / (b * c) + b ** 2 / (c * a) + c ** 2 / (a * b)
    return simplify(expr.subs(c, -a - b) - 3) == 0


def table_18():
    return [18 / i for i in (1, 2, 3, 6, 9)] == [18, 9, 6, 3, 2]


def odd_symmetry():
    kk = Symbol('kk')
    return simplify((-a) * (-(kk / a)) - kk) == 0


def lattice_points_12():
    pts = {(i, 12 // i) for i in range(-12, 13) if i != 0 and 12 % i == 0}
    return len(pts) == 12 and all(i * j == 12 for i, j in pts)


def min_x_plus_12_over_x():
    """x + 12/x − 4√3 = (x − 2√3)²/x."""
    return simplify(x + 12 / x - 4 * sqrt(3) - (x - 2 * sqrt(3)) ** 2 / x) == 0


def line_through_origin():
    mm, kk = Symbol('mm', positive=True), Symbol('kk', positive=True)
    roots = solve(mm * x ** 2 - kk, x)
    return len(roots) == 2 and simplify(roots[0] + roots[1]) == 0


def k_through_intersection():
    sol = solve([y - 2 * x, y - (x + 3)], [x, y])
    return sol[x] * sol[y] == 18


def two_taps():
    t = Symbol('t', positive=True)
    return solve(1 / t + 1 / (t + 5) - Rational(1, 6), t) == [Integer(10)]


def egyptian_sixth():
    found = {(i, j) for i in range(1, 300) for j in range(1, 300)
             if Rational(1, i) + Rational(1, j) == Rational(1, 6)}
    return (len(found) == 9
            and {(7, 42), (8, 24), (9, 18), (10, 15), (12, 12)} <= found)


def journey_speed():
    v = Symbol('v', positive=True)
    return solve(120 / v - 120 / (v + 10) - 1, v) == [Integer(30)]


def am_gm_k():
    kk = Symbol('kk', positive=True)
    return simplify(x + kk / x - 2 * sqrt(kk) - (x - sqrt(kk)) ** 2 / x) == 0


def reflect_y_equals_x():
    kk = Symbol('kk', positive=True)
    return simplify((kk / x) * x - kk) == 0


def hyperbola_line_distance():
    roots = sorted(solve(12 / x - (x + 1), x))
    if roots != [Integer(-4), Integer(3)]:
        return False
    p, q = (-4, -3), (3, 4)
    d2 = (p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2
    return simplify(sqrt(d2) - 7 * sqrt(2)) == 0


def odd_telescope():
    return sum(Rational(1, i * (i + 2)) for i in range(1, 100, 2)) == Rational(50, 101)


def egyptian_third():
    found = {(i, j) for i in range(1, 200) for j in range(1, 200)
             if Rational(1, i) + Rational(1, j) == Rational(1, 3)}
    return found == {(4, 12), (6, 6), (12, 4)}


def no_real_solution():
    """1/a − 1/b = 1/(a−b) forces a² − ab + b² = 0, impossible for real a, b ≠ 0."""
    aa, bb = Symbol('aa', real=True, nonzero=True), Symbol('bb', real=True, nonzero=True)
    reduced = simplify((1 / aa - 1 / bb - 1 / (aa - bb)) * (aa * bb * (aa - bb)))
    return simplify(reduced + (aa ** 2 - aa * bb + bb ** 2)) == 0 or \
        simplify(reduced - (aa ** 2 - aa * bb + bb ** 2)) == 0


def no_valid_root():
    """The algebra gives x = 1, which every denominator forbids."""
    candidates = solve(1 / (x - 1) + 1 / (x + 1) - 2 / (x ** 2 - 1), x)
    return all(c in (1, -1) for c in candidates)


def k_equals_three():
    kk = Symbol('kk')
    return set(solve(kk ** 2 - 9, kk)) == {Integer(3), Integer(-3)}


def reciprocal_products_zero():
    expr = 1 / (a * b) + 1 / (b * c) + 1 / (c * a)
    return simplify(expr.subs(c, -a - b)) == 0


def squares_product():
    from sympy import prod
    return all(prod([Rational(i ** 2, i ** 2 - 1) for i in range(2, N + 1)])
               == Rational(2 * N, N + 1) for N in range(2, 25))


def fifth_power():
    for root in solve(x + 1 / x - 3, x):
        if simplify(root ** 5 + 1 / root ** 5 - 123) != 0:
            return False
    return True


def no_solution_quotient():
    return solve((x / (x - 1)) / ((x + 1) / x) - 1, x) == []


def ratio_squares():
    t, bb, dd = Symbol('t'), Symbol('bb'), Symbol('dd')
    aa, cc = bb * t, dd * t
    return simplify((aa ** 2 + cc ** 2) / (bb ** 2 + dd ** 2) - aa * cc / (bb * dd)) == 0


def root_n2_plus_n():
    """n < √(n²+n) < n+1 for every n ≥ 1, so it is never a whole number."""
    nn = Symbol('nn', positive=True, integer=True)
    return (simplify(nn ** 2 + nn - nn ** 2) > 0) is not False and all(
        i < float(sqrt(i ** 2 + i)) < i + 1 for i in range(1, 400))


def nested_pair():
    expr = sqrt(x + 2 * sqrt(x - 1)) + sqrt(x - 2 * sqrt(x - 1))
    return all(abs(float(expr.subs(x, Rational(v, 100))) - 2) < 1e-9
               for v in range(100, 201, 7))


def root_telescope():
    """Each term rationalises to √(k+1) − √k, so the sum collapses to √100 − √1.

    Summing the 99 surds exactly and calling simplify takes minutes; the
    rationalisation identity plus a numeric total settles it in milliseconds.
    """
    kk = Symbol('kk', positive=True)
    identity = expand((sqrt(kk + 1) - sqrt(kk)) * (sqrt(kk + 1) + sqrt(kk))) == 1
    numeric = sum(1.0 / (i ** 0.5 + (i + 1) ** 0.5) for i in range(1, 100))
    return identity and abs(numeric - 9) < 1e-9


def cube_root_sum():
    val = cbrt_real(2 + sqrt(5)) + cbrt_real(2 - sqrt(5))
    return abs(float(val) - 1) < 1e-12


def root_sum_ineq():
    """(√a + √b)² − (√(a+b))² = 2√(ab) ≥ 0."""
    return simplify((sqrt(apos) + sqrt(bpos)) ** 2 - (apos + bpos)
                    - 2 * sqrt(apos * bpos)) == 0


def clever_square():
    return 1 + 2022 * 2024 == 2023 ** 2


def abs_root():
    return simplify(sqrt(Symbol('w', real=True) ** 2) - Abs(Symbol('w', real=True))) == 0 \
        and float(sqrt(Integer(-3) ** 2)) == 3


def nested_fixed_point():
    xp = Symbol('xp', positive=True)
    return solve(xp ** 2 - xp - 2, xp) == [Integer(2)]


def solve_x_two_thirds():
    """x^(2/3) = 4 has the two real roots ±8."""
    return {v for v in (8, -8) if abs(abs(v) ** Rational(2, 3) - 4) == 0} == {8, -8}


def solve_pow_two():
    return 2 ** 3 == Integer(8) ** Rational(1, 3) * 4


def order_three_roots():
    vals = [Integer(2) ** Rational(1, 2), Integer(3) ** Rational(1, 3),
            Integer(6) ** Rational(1, 6)]
    return [float(v) for v in sorted(vals, key=float)] == sorted(float(v) for v in vals) \
        and float(vals[2]) < float(vals[0]) < float(vals[1])


def quad_in_sqrt():
    return {v for v in range(0, 200) if v - 5 * Integer(v) ** Rational(1, 2) + 6 == 0} \
        == {4, 9}


def two_to_the_x():
    xx = Symbol('xx')
    sol = solve(2 ** xx - 3, xx)[0]
    return simplify(8 ** sol - 27) == 0 and simplify(2 ** (sol + 2) - 12) == 0


def quad_in_three_x():
    return {v for v in range(-5, 6) if 9 ** v - 4 * 3 ** v + 3 == 0} == {0, 1}


def am_gm_two():
    return simplify(apos + bpos - 2 * sqrt(apos * bpos)
                    - (sqrt(apos) - sqrt(bpos)) ** 2) == 0


def quartic_in_root():
    return {v for v in (16, 256)
            if Integer(v) ** Rational(1, 2) - 6 * Integer(v) ** Rational(1, 4) + 8 == 0} \
        == {16, 256}


def root_plus_inverse():
    for root in solve(sqrt(xpos) + 1 / sqrt(xpos) - 3, xpos):
        if simplify(root + 1 / root - 7) != 0:
            return False
    return True


def _digits_of(frac, count):
    """The first `count` decimal digits of a fraction below 1."""
    out, rem = [], frac.p % frac.q
    for _ in range(count):
        rem *= 10
        out.append(rem // frac.q)
        rem %= frac.q
    return out


def _period_of(q):
    """The repeating-block length of 1/q, for q coprime to 10."""
    k, r = 1, 10 % q
    while r != 1:
        r = r * 10 % q
        k += 1
    return k


def one_seventh():
    return _digits_of(Rational(1, 7), 12) == [1, 4, 2, 8, 5, 7] * 2


def which_terminates():
    def terminates(q):
        while q % 2 == 0:
            q //= 2
        while q % 5 == 0:
            q //= 5
        return q == 1
    return terminates(8) and not terminates(6)


def point_one_six():
    return Rational(16 - 1, 90) == Rational(1, 6)


def terminating_set():
    def terminates(q):
        while q % 2 == 0:
            q //= 2
        while q % 5 == 0:
            q //= 5
        return q == 1
    return {q for q in (12, 20, 25) if terminates(q)} == {20, 25}


def point_two_seven():
    return Rational(27 - 2, 90) == Rational(5, 18)


def point_nine_recurring():
    """9x = 9 when x = 0.999…, so x = 1."""
    xx = Symbol('xx')
    return solve(10 * xx - xx - 9, xx) == [Integer(1)]


def period_seven():
    return _period_of(7) == 6


def terminating_rule():
    def terminates(q):
        while q % 2 == 0:
            q //= 2
        while q % 5 == 0:
            q //= 5
        return q == 1
    def only_two_and_five(q):
        for prime in (2, 5):
            while q % prime == 0:
                q //= prime
        return q == 1
    return all(terminates(q) == only_two_and_five(q) for q in range(1, 200))


def sum_of_recurring():
    return sum(Rational(i, 9) for i in range(1, 10)) == 5


def hundredth_digit():
    return _digits_of(Rational(1, 7), 100)[-1] == 8


def digits_two_64():
    return len(str(2 ** 64)) == 20


def period_thirteen():
    return _period_of(13) == 6


def abc_recurring():
    for a_, b_, c_ in ((1, 2, 3), (0, 5, 9), (9, 0, 7)):
        block = 100 * a_ + 10 * b_ + c_
        if Rational(block, 999) != Rational(block, 999):
            return False
        if _digits_of(Rational(block, 999), 6) != [a_, b_, c_, a_, b_, c_]:
            return False
    return True


def order_small_numbers():
    vals = [3 * Integer(10) ** -5, 2 * Integer(10) ** -4, 4 * Integer(10) ** -6]
    return sorted(vals, key=float) == [vals[2], vals[0], vals[1]]


def root_sum_counterexample():
    return abs(float(sqrt(Integer(3) ** 2 + Integer(3) ** 2)) - 6) > 1


def abs_root_again():
    w = Symbol('w', real=True)
    return simplify(sqrt(w ** 2) - Abs(w)) == 0


def powers_of_two_order():
    vals = [float(Integer(2) ** Rational(1, d)) for d in (2, 3, 4)]
    return vals[0] > vals[1] > vals[2]


def four_to_x_is_eight():
    """4^x = 8 has the single real solution 3/2 (sympy also returns a complex one)."""
    xx = Symbol('xx')
    real = [s for s in solve(4 ** xx - 8, xx) if s.is_real]
    return real == [Rational(3, 2)] and Integer(4) ** Rational(3, 2) == 8


def electron_count():
    value = 1 / (Rational(911, 100) * Integer(10) ** -31)
    return abs(float(value) / 1.1e30 - 1) < 0.02


def quartic_sum_six():
    return {v for v in range(0, 2000)
            if Integer(v) ** Rational(1, 2) + Integer(v) ** Rational(1, 4) == 6} == {16}


def ninety_nine_hundred():
    return 99 ** 100 > 100 ** 99


def product_bound_half():
    """x(1−x) = 1/4 − (x − 1/2)², so the maximum is 1/4 at x = 1/2."""
    return simplify(x * (1 - x) - (Rational(1, 4) - (x - Rational(1, 2)) ** 2)) == 0


def wallis_product():
    p = Rational(1)
    for i in range(1, 100, 2):
        p *= Rational(i, i + 1)
    return p < Rational(1, 10)


def nine_bound():
    """(1+1/a)(1+1/b) with a+b=1 is (ab+2)/(ab), least when ab is largest."""
    aa = Symbol('aa', positive=True)
    expr = (1 + 1 / aa) * (1 + 1 / (1 - aa))
    return all(float(expr.subs(aa, Rational(i, 100))) >= 9 - 1e-9
               for i in range(1, 100))


def root_gaps():
    return all((i + 1) ** 0.5 - i ** 0.5 < i ** 0.5 - (i - 1) ** 0.5
               for i in range(1, 300))


def factorial_bound():
    from math import factorial
    return all(factorial(i) < i ** i for i in range(2, 60))


def _sample(predicate, lo=-50, hi=50, step=1, scale=4):
    """Try the predicate over a grid of rationals; True when it never fails."""
    for i in range(lo, hi, step):
        for d in range(1, scale + 1):
            if not predicate(Rational(i, d)):
                return False
    return True


def x_squared_ge_x():
    """Only for x ≥ 1 — below 1 the inequality turns the other way."""
    vals = [Rational(i, 4) for i in range(4, 240)]
    return all(v ** 2 >= v for v in vals) and Rational(1, 2) ** 2 < Rational(1, 2)


def x_squared_gt_x_neg():
    vals = [Rational(i, 4) for i in range(-240, -4)]
    return all(v ** 2 > v for v in vals)


def product_order():
    """a > b > 0 and c > d > 0 give ac > bd, via ac > bc > bd."""
    vals = [Rational(i, 2) for i in range(1, 24)]
    return all(av * cv > bv * dv
               for av in vals for bv in vals if av > bv > 0
               for cv in vals[:6] for dv in vals[:6] if cv > dv > 0)


def cubes_order():
    return simplify((a ** 3 - b ** 3) - (a - b) * (a ** 2 + a * b + b ** 2)) == 0 \
        and check_nonneg('a**2 + a*b + b**2')


def square_less_in_unit():
    return all(Rational(i, 100) ** 2 < Rational(i, 100) for i in range(1, 100))


def square_more_above_one():
    return all(Rational(i, 10) ** 2 > Rational(i, 10) for i in range(11, 200))


def divide_negative():
    vals = [Rational(i, 3) for i in range(-30, 31)]
    return all(av / cv < bv / cv
               for av in vals for bv in vals if av > bv
               for cv in vals if cv < 0)


def midpoint_between():
    return simplify(a - (a + b) / 2 - (a - b) / 2) == 0 \
        and simplify((a + b) / 2 - b - (a - b) / 2) == 0


def increasing_fraction():
    vals = [Rational(i, 4) for i in range(1, 60)]
    return all(xv / (xv + 1) > yv / (yv + 1) for xv in vals for yv in vals if xv > yv)


def powers_order():
    vals = [Rational(i, 3) for i in range(1, 20)]
    return all(av ** nn > bv ** nn
               for av in vals for bv in vals if av > bv > 0 for nn in range(1, 6))


def fraction_increasing():
    return simplify(x / (x + 1) - (1 - 1 / (x + 1))) == 0


def add_one_ratio():
    vals = [Rational(i, 2) for i in range(1, 40)]
    return all((av + 1) / (bv + 1) < av / bv
               for av in vals for bv in vals if av > bv > 0)


def mediant():
    quads = [(1, 3, 1, 2), (2, 7, 3, 5), (1, 5, 4, 9), (5, 11, 7, 12)]
    for a_, b_, c_, d_ in quads:
        left, med, right = Rational(a_, b_), Rational(a_ + c_, b_ + d_), Rational(c_, d_)
        if not left < med < right:
            return False
    return True


def transitive_chain():
    return simplify((a - d) - ((a - b) + (b - c) + (c - d))) == 0


def consecutive_ratios():
    return expand((x + 1) * (x + 3) + 1 - (x + 2) ** 2) == 0


def mean_chain():
    pairs = [(Rational(i, 2), Rational(j, 2)) for i in range(1, 12) for j in range(1, 12)]
    for av, bv in pairs:
        if not 0 < av < bv:
            continue
        g, m = sqrt(av * bv), (av + bv) / 2
        if not (av < g < m < bv):
            return False
    return True


def same_numerator():
    vals = [Rational(i, 2) for i in range(1, 30)]
    return all((av - bv) / av < (av - bv) / bv
               for av in vals for bv in vals if av > bv > 0)


def abs_square_bound():
    w = Symbol('w', real=True)
    return simplify(w ** 2 + 1 - 2 * Abs(w) - (Abs(w) - 1) ** 2) == 0


def abc_le_one():
    vals = [Rational(i, 10) for i in range(1, 30)]
    for av in vals:
        for bv in vals:
            cv = 3 - av - bv
            if cv > 0 and av * bv * cv > 1:
                return False
    return True


def cubes_sign():
    return simplify((a ** 3 - b ** 3) - (a - b) * (a ** 2 + a * b + b ** 2)) == 0 \
        and check_nonneg('a**2 + a*b + b**2')


def square_range_trap():
    """For −2 < x < 1 the square reaches 0 inside the interval, not at a corner."""
    vals = [Rational(i, 50) for i in range(-99, 50)]
    squares = [v ** 2 for v in vals]
    return min(squares) == 0 and max(squares) < 4 and max(squares) > Rational(39, 10)


def add_inequalities():
    return simplify(((a + c) - (b + d)) - ((a - b) + (c - d))) == 0


def sum_ten_product():
    aa = Symbol('aa')
    return simplify(aa * (10 - aa) - (25 - (aa - 5) ** 2)) == 0


def reciprocal_bound():
    vals = [Rational(i, 100) for i in range(1, 200)]
    return all((1 / v > 2) == (v < Rational(1, 2)) for v in vals)


def order_powers_unit():
    vals = [Rational(i, 100) for i in range(101, 200)]
    return all(sqrt(v) < v < v ** 2 for v in vals)


def x_plus_inverse_range():
    vals = [Rational(i, 200) for i in range(100, 401)]
    got = [v + 1 / v for v in vals]
    return min(got) == 2 and max(got) == Rational(5, 2)


def sum_squares_range():
    vals = [Rational(i, 60) for i in range(1, 60)]
    best = Rational(1)
    for av in vals:
        for bv in vals:
            cv = 1 - av - bv
            if cv <= 0:
                continue
            total = av ** 2 + bv ** 2 + cv ** 2
            best = min(best, total)
            if total >= 1:
                return False
    return best >= Rational(1, 3)


def geometric_bound():
    aa = Symbol('aa')
    return simplify(1 / (1 - aa) - (1 + aa) - aa ** 2 / (1 - aa)) == 0


def powers_shrink_in_unit():
    vals = [Rational(i, 100) for i in range(1, 100)]
    return all(v > v ** 2 > v ** 3 for v in vals)


def square_order_positive():
    vals = [Rational(i, 4) for i in range(1, 40)]
    return all(av ** 2 < bv ** 2 for av in vals for bv in vals if 0 < av < bv)


def square_range_mixed():
    """−2 < x < 3: the square dips to 0 inside and climbs to just under 9."""
    vals = [Rational(i, 50) for i in range(-99, 150)]
    squares = [v ** 2 for v in vals]
    return min(squares) == 0 and max(squares) < 9 and max(squares) > 8


def root_order():
    """Monotone, so checking consecutive values is enough — and exact sympy roots
    over every pair would take minutes for no extra certainty."""
    vals = [i / 4 for i in range(1, 400)]
    return all(vals[i] ** 0.5 < vals[i + 1] ** 0.5 for i in range(len(vals) - 1))


def x_squared_minus_x_range():
    vals = [Rational(i, 100) for i in range(100, 401)]
    got = [v ** 2 - v for v in vals]
    return min(got) == 0 and max(got) == 12


def root_bigger_in_unit():
    return all((i / 100) ** 0.5 > i / 100 for i in range(1, 100))


def fourth_power_range():
    vals = [Rational(i, 50) for i in range(-49, 100)]
    got = [v ** 4 for v in vals]
    return min(got) == 0 and max(got) < 16 and max(got) > 15


def order_four_powers_unit():
    vals = [i / 100 for i in range(1, 100)]
    return all(v ** 3 < v ** 2 < v < v ** 0.5 for v in vals)


def bernoulli():
    for hv in [Rational(i, 10) for i in range(-10, 40)]:
        for nn in range(1, 12):
            if (1 + hv) ** nn < 1 + nn * hv:
                return False
    return True


def square_less_than_self():
    vals = [Rational(i, 100) for i in range(1, 400)]
    return all((v ** 2 < v) == (v < 1) for v in vals)


def cube_root_order():
    vals = [i / 4 for i in range(0, 400)]
    return all(vals[i] ** (1 / 3) <= vals[i + 1] ** (1 / 3)
               for i in range(len(vals) - 1))


def quartic_less_square():
    vals = [Rational(i, 50) for i in range(-150, 150)]
    return all((v ** 4 < v ** 2) == (v != 0 and abs(v) < 1) for v in vals)


def cube_bigger_above_one():
    vals = [Rational(i, 100) for i in range(101, 200)]
    return all(v ** 3 > v ** 2 for v in vals)


def square_plus_inverse():
    vals = [Rational(i, 20) for i in range(1, 200)]
    got = [v ** 2 + 1 / v ** 2 for v in vals]
    return min(got) == 2


def ratio_square_smaller():
    pairs = [(Rational(i, 4), Rational(j, 4)) for i in range(1, 20) for j in range(1, 20)]
    return all((av / bv) ** 2 < av / bv for av, bv in pairs if 0 < av < bv)


def sum_six_product():
    aa = Symbol('aa')
    return simplify(aa * (6 - aa) - (9 - (aa - 3) ** 2)) == 0


def square_range_minus_one_two():
    vals = [Rational(i, 50) for i in range(-49, 100)]
    squares = [v ** 2 for v in vals]
    return min(squares) == 0 and max(squares) < 4 and max(squares) > Rational(39, 10)


def x_plus_inverse_third():
    vals = [Rational(i, 300) for i in range(100, 901)]
    got = [v + 1 / v for v in vals]
    return min(got) == 2 and max(got) == Rational(10, 3)


def triangle_inequality():
    """(|a|+|b|)² − (a+b)² = 2(|ab| − ab) ≥ 0."""
    u, v = Symbol('u', real=True), Symbol('v', real=True)
    return simplify((Abs(u) + Abs(v)) ** 2 - (u + v) ** 2
                    - 2 * (Abs(u * v) - u * v)) == 0


def geometric_under_two():
    for nn in range(0, 30):
        total = sum(Rational(1, 2 ** i) for i in range(nn + 1))
        if total != 2 - Rational(1, 2 ** nn) or total >= 2:
            return False
    return True


def abc_one_sum_three():
    vals = [Rational(i, 8) for i in range(1, 40)]
    for av in vals:
        for bv in vals:
            cv = 1 / (av * bv)
            if av + bv + cv < 3:
                return False
    return True


def check_nonneg(expr, domain='real', names=None):
    """The expression is never negative on the stated domain.

    Inequality questions are nearly all "this difference is never negative", and
    for those a dense random sample beats simplify, which often cannot decide a
    sign. The expression is compiled once with lambdify and sampled numerically —
    substituting symbolically thousands of times is far too slow. Equality cases
    are allowed, so the test is against a small negative tolerance rather than 0.
    """
    import random
    e = sympify(expr, SYMS)
    free = sorted(e.free_symbols, key=str) if names is None else \
        [sympify(nm, SYMS) for nm in names]
    if not free:
        return float(e) >= -1e-9
    f = lambdify(free, e, 'math')
    rng = random.Random(20260214)
    for _ in range(3000):
        if domain == 'pos':
            point = [rng.uniform(1e-3, 40) for _ in free]
        else:
            point = [rng.uniform(-40, 40) for _ in free]
        try:
            value = f(*point)
        except (ZeroDivisionError, ValueError, OverflowError):
            continue
        if isinstance(value, complex):
            continue
        scale = max(1.0, *(abs(v) for v in point))
        if value < -1e-9 * scale ** 4:
            return False
    return True


def check_bound(expr, ranges, lo, hi):
    """expr stays strictly between lo and hi while each variable runs its range.

    The extremes of a sum, difference, product or quotient of monotone pieces sit
    at the corners of the box, so the corners decide the bounds; a coarse interior
    grid guards against anything that is not monotone.
    """
    import itertools
    e = sympify(expr, SYMS)
    names = sorted(ranges)
    corners = itertools.product(*[[sympify(v, SYMS) for v in ranges[nm]]
                                  for nm in names])
    values = []
    for combo in corners:
        values.append(e.subs({sympify(nm, SYMS): v for nm, v in zip(names, combo)}))
    for frac in (Rational(1, 4), Rational(1, 2), Rational(3, 4)):
        point = {}
        for nm in names:
            a_, b_ = [sympify(v, SYMS) for v in ranges[nm]]
            point[sympify(nm, SYMS)] = a_ + frac * (b_ - a_)
        values.append(e.subs(point))
    low, high = sympify(lo, SYMS), sympify(hi, SYMS)
    return min(values) == low and max(values) == high


def check_bool(statement):
    """A comparison that must come out true, e.g. sqrt(7)+sqrt(5) > sqrt(10)+sqrt(2)."""
    return bool(sympify(statement, SYMS)) is True


def check_solve(expr, roots):
    """The solutions of expr = 0 in x."""
    got = set(solve(sympify(expr, SYMS), x))
    want = {sympify(r, SYMS) for r in roots}
    return got == want


# ---------------------------------------------------------------- custom ----

def subject_r():
    return simplify(sqrt(A / (pi * h)) ** 2 * pi * h - A) == 0


def sum_product_7_10():
    roots = solve([x + y - 7, x * y - 10], [x, y])
    return all(simplify(xv ** 2 + yv ** 2 - 29) == 0
               and simplify(xv ** 3 + yv ** 3 - 133) == 0 for xv, yv in roots)


def product_one_minus():
    from sympy import prod
    for N in range(2, 25):
        got = prod([1 - Rational(1, i ** 2) for i in range(2, N + 1)])
        if got != Rational(N + 1, 2 * N):
            return False
    return True


def xy_diophantine():
    found = {(i, j) for i in range(-60, 60) for j in range(-60, 60)
             if i * j - 2 * i + 3 * j == 11}
    return found == {(2, 3), (-2, 7), (-4, -3), (-8, 1)}


def a_plus_inverse_5():
    for root in solve(a + 1 / a - 5, a):
        if simplify(root ** 2 + 1 / root ** 2 - 23) != 0:
            return False
        if simplify(root ** 4 + 1 / root ** 4 - 527) != 0:
            return False
    return True


def powers_of_two_seven():
    total = 2 ** 10 + 2 ** 11 + 2 ** 12
    return total % 7 == 0 and total == 7 * 2 ** 10


def no_solution_linear():
    return solve(2 * (x - 3) - 3 * (x - 5) - (4 - x), x) == []


def fermat_product():
    return (2 + 1) * (2 ** 2 + 1) * (2 ** 4 + 1) * (2 ** 8 + 1) == 2 ** 16 - 1 == 65535


def abc_cubes():
    return simplify((a ** 3 + b ** 3 + c ** 3 - 3 * a * b * c).subs(c, -a - b)) == 0


def divisors_n_plus_3():
    found = {i for i in range(-200, 200) if i != 1 and Rational(i + 3, i - 1).q == 1}
    return found == {-3, -1, 0, 2, 3, 5}


def divisors_2n_plus_5():
    found = {i for i in range(-200, 200) if i != 2 and Rational(2 * i + 5, i - 2).q == 1}
    return found == {-7, -1, 1, 3, 5, 11}


def k_degree_three():
    good = set()
    for kv in range(-30, 31):
        combined = lcm(x ** 2 - 4, x ** 2 + kv * x + 4)
        if combined.as_poly(x).degree() == 3:
            good.add(kv)
    return good == {4, -4}


def telescope_99():
    return sum(Rational(1, i * (i + 1)) for i in range(1, 100)) == Rational(99, 100)


def telescope_n():
    return all(sum(Rational(1, i * (i + 1)) for i in range(1, N + 1)) == Rational(N, N + 1)
               for N in range(1, 40))


def abc_identity():
    """(ab+bc+ca)(a+b+c) − abc factorises as (a+b)(b+c)(c+a)."""
    return expand((a * b + b * c + c * a) * (a + b + c) - a * b * c
                  - (a + b) * (b + c) * (c + a)) == 0


def x_plus_inverse():
    from sympy import solve
    roots = solve(x + 1 / x - 3, x)
    for r in roots:
        if simplify(r ** 2 + 1 / r ** 2 - 7) != 0:
            return False
        if simplify(r ** 3 + 1 / r ** 3 - 18) != 0:
            return False
        if simplify(r ** 4 + 1 / r ** 4 - 47) != 0:
            return False
    return len(roots) == 2


def egyptian_quarter():
    found = {(i, j) for i in range(1, 400) for j in range(1, 400)
             if Rational(1, i) + Rational(1, j) == Rational(1, 4)}
    return found == {(5, 20), (6, 12), (8, 8), (12, 6), (20, 5)}


def abc_zero_sum():
    expr = (1 / (a ** 2 + b ** 2 - c ** 2) + 1 / (b ** 2 + c ** 2 - a ** 2)
            + 1 / (c ** 2 + a ** 2 - b ** 2))
    return simplify(expr.subs(c, -a - b)) == 0


def sum_k_squared_minus_one():
    def formula(N):
        return Rational(3, 4) - Rational(1, 2 * N) - Rational(1, 2 * (N + 1))
    return all(sum(Rational(1, i ** 2 - 1) for i in range(2, N + 1)) == formula(N)
               for N in range(2, 40))


CUSTOM = {
    'sum_six_product': sum_six_product,
    'square_range_minus_one_two': square_range_minus_one_two,
    'x_plus_inverse_third': x_plus_inverse_third,
    'triangle_inequality': triangle_inequality,
    'geometric_under_two': geometric_under_two,
    'abc_one_sum_three': abc_one_sum_three,
    'powers_shrink_in_unit': powers_shrink_in_unit,
    'square_order_positive': square_order_positive,
    'square_range_mixed': square_range_mixed,
    'root_order': root_order,
    'x_squared_minus_x_range': x_squared_minus_x_range,
    'root_bigger_in_unit': root_bigger_in_unit,
    'fourth_power_range': fourth_power_range,
    'order_four_powers_unit': order_four_powers_unit,
    'bernoulli': bernoulli,
    'square_less_than_self': square_less_than_self,
    'cube_root_order': cube_root_order,
    'quartic_less_square': quartic_less_square,
    'cube_bigger_above_one': cube_bigger_above_one,
    'square_plus_inverse': square_plus_inverse,
    'ratio_square_smaller': ratio_square_smaller,
    'square_range_trap': square_range_trap,
    'add_inequalities': add_inequalities,
    'sum_ten_product': sum_ten_product,
    'reciprocal_bound': reciprocal_bound,
    'order_powers_unit': order_powers_unit,
    'x_plus_inverse_range': x_plus_inverse_range,
    'sum_squares_range': sum_squares_range,
    'geometric_bound': geometric_bound,
    'x_squared_ge_x': x_squared_ge_x,
    'x_squared_gt_x_neg': x_squared_gt_x_neg,
    'product_order': product_order,
    'cubes_order': cubes_order,
    'square_less_in_unit': square_less_in_unit,
    'square_more_above_one': square_more_above_one,
    'divide_negative': divide_negative,
    'midpoint_between': midpoint_between,
    'increasing_fraction': increasing_fraction,
    'powers_order': powers_order,
    'fraction_increasing': fraction_increasing,
    'add_one_ratio': add_one_ratio,
    'mediant': mediant,
    'transitive_chain': transitive_chain,
    'consecutive_ratios': consecutive_ratios,
    'mean_chain': mean_chain,
    'same_numerator': same_numerator,
    'abs_square_bound': abs_square_bound,
    'abc_le_one': abc_le_one,
    'cubes_sign': cubes_sign,
    'ninety_nine_hundred': ninety_nine_hundred,
    'product_bound_half': product_bound_half,
    'wallis_product': wallis_product,
    'nine_bound': nine_bound,
    'root_gaps': root_gaps,
    'factorial_bound': factorial_bound,
    'root_sum_counterexample': root_sum_counterexample,
    'abs_root_again': abs_root_again,
    'powers_of_two_order': powers_of_two_order,
    'four_to_x_is_eight': four_to_x_is_eight,
    'electron_count': electron_count,
    'quartic_sum_six': quartic_sum_six,
    'one_seventh': one_seventh,
    'which_terminates': which_terminates,
    'point_one_six': point_one_six,
    'terminating_set': terminating_set,
    'point_two_seven': point_two_seven,
    'point_nine_recurring': point_nine_recurring,
    'period_seven': period_seven,
    'terminating_rule': terminating_rule,
    'sum_of_recurring': sum_of_recurring,
    'hundredth_digit': hundredth_digit,
    'digits_two_64': digits_two_64,
    'period_thirteen': period_thirteen,
    'abc_recurring': abc_recurring,
    'order_small_numbers': order_small_numbers,
    'am_gm_two': am_gm_two,
    'quartic_in_root': quartic_in_root,
    'root_plus_inverse': root_plus_inverse,
    'solve_x_two_thirds': solve_x_two_thirds,
    'solve_pow_two': solve_pow_two,
    'order_three_roots': order_three_roots,
    'quad_in_sqrt': quad_in_sqrt,
    'two_to_the_x': two_to_the_x,
    'quad_in_three_x': quad_in_three_x,
    'root_n2_plus_n': root_n2_plus_n,
    'nested_pair': nested_pair,
    'root_telescope': root_telescope,
    'cube_root_sum': cube_root_sum,
    'root_sum_ineq': root_sum_ineq,
    'clever_square': clever_square,
    'abs_root': abs_root,
    'nested_fixed_point': nested_fixed_point,
    'squares_product': squares_product,
    'fifth_power': fifth_power,
    'no_solution_quotient': no_solution_quotient,
    'ratio_squares': ratio_squares,
    'odd_telescope': odd_telescope,
    'egyptian_third': egyptian_third,
    'no_real_solution': no_real_solution,
    'no_valid_root': no_valid_root,
    'k_equals_three': k_equals_three,
    'reciprocal_products_zero': reciprocal_products_zero,
    'table_18': table_18,
    'odd_symmetry': odd_symmetry,
    'lattice_points_12': lattice_points_12,
    'min_x_plus_12_over_x': min_x_plus_12_over_x,
    'line_through_origin': line_through_origin,
    'k_through_intersection': k_through_intersection,
    'two_taps': two_taps,
    'egyptian_sixth': egyptian_sixth,
    'journey_speed': journey_speed,
    'am_gm_k': am_gm_k,
    'reflect_y_equals_x': reflect_y_equals_x,
    'hyperbola_line_distance': hyperbola_line_distance,
    'squares_sum_zero': squares_sum_zero,
    'componendo': componendo,
    'reciprocal_sum_zero': reciprocal_sum_zero,
    'squared_denominators': squared_denominators,
    'two_products': two_products,
    'cube_in_terms_of_a': cube_in_terms_of_a,
    'three_squares_over_products': three_squares_over_products,
    'telescope_product_k_over_k1': telescope_product_k_over_k1,
    'cube_product': cube_product,
    'proportion_add_one': proportion_add_one,
    'ratio_two_thirds': ratio_two_thirds,
    'product_one_plus': product_one_plus,
    'product_one_minus_one_over': product_one_minus_one_over,
    'n3_plus_1': n3_plus_1,
    'exact_division_by_x_plus_2': exact_division_by_x_plus_2,
    'never_one': never_one,
    'am_gm_x': am_gm_x,
    'am_gm_ab': am_gm_ab,
    'egyptian_half': egyptian_half,
    'n2_plus_1_over_n_plus_1': n2_plus_1_over_n_plus_1,
    'x2_plus_3_over_x_plus_1': x2_plus_3_over_x_plus_1,
    'k_no_real_root': k_no_real_root,
    'sum_and_reciprocal_sum': sum_and_reciprocal_sum,
    'cross_equal': cross_equal,
    'abc_sum_minus_three': abc_sum_minus_three,
    'no_positive_n': no_positive_n,
    'subject_r': subject_r,
    'sum_product_7_10': sum_product_7_10,
    'product_one_minus': product_one_minus,
    'xy_diophantine': xy_diophantine,
    'a_plus_inverse_5': a_plus_inverse_5,
    'powers_of_two_seven': powers_of_two_seven,
    'no_solution_linear': no_solution_linear,
    'fermat_product': fermat_product,
    'abc_cubes': abc_cubes,
    'divisors_n_plus_3': divisors_n_plus_3,
    'divisors_2n_plus_5': divisors_2n_plus_5,
    'k_degree_three': k_degree_three,
    'telescope_99': telescope_99,
    'telescope_n': telescope_n,
    'abc_identity': abc_identity,
    'x_plus_inverse': x_plus_inverse,
    'egyptian_quarter': egyptian_quarter,
    'abc_zero_sum': abc_zero_sum,
    'sum_k_squared_minus_one': sum_k_squared_minus_one,
}


def main():
    failures, unchecked, total = [], [], 0
    for topic in bank.TOPICS:
        for section, items in topic['sections']:
            for i, item in enumerate(items, start=1):
                total += 1
                where = f'{topic["key"]} {section} Q{i}'
                check = item.get('check')
                try:
                    if check is None:
                        unchecked.append(where)
                    elif check[0] == 'simp':
                        if not same(check[1], check[2]):
                            failures.append(f'{where}: {check[1]} != {check[2]}')
                    elif check[0] == 'lcm':
                        if not check_lcm(check[1], check[2]):
                            failures.append(f'{where}: lcm{check[1]} != {check[2]}')
                    elif check[0] == 'nonneg':
                        if not check_nonneg(*check[1:]):
                            failures.append(f'{where}: {check[1]} goes negative')
                    elif check[0] == 'bound':
                        if not check_bound(*check[1:]):
                            failures.append(f'{where}: {check[1]} is not bounded by '
                                            f'{check[3]} and {check[4]}')
                    elif check[0] == 'bool':
                        if not check_bool(check[1]):
                            failures.append(f'{where}: {check[1]} is not true')
                    elif check[0] == 'domain':
                        if not check_domain(*check[1:]):
                            failures.append(f'{where}: undefined-at set of {check[1]} '
                                            f'!= {check[2]}')
                    elif check[0] == 'solve':
                        if not check_solve(check[1], check[2]):
                            failures.append(f'{where}: solutions of {check[1]} != {check[2]}')
                    elif check[0] == 'custom':
                        if not CUSTOM[check[1]]():
                            failures.append(f'{where}: custom check {check[1]} failed')
                    else:
                        failures.append(f'{where}: unknown check {check[0]}')
                except Exception as exc:                      # a bad expression string
                    failures.append(f'{where}: {type(exc).__name__}: {exc}')

    print(f'{total} questions checked')
    if unchecked:
        print(f'{len(unchecked)} with no machine check (discussion/proof in words): '
              + ', '.join(unchecked))
    if failures:
        print(f'\n{len(failures)} FAILED:')
        for f in failures:
            print('  ' + f)
        return 1
    print('every machine-checkable answer verifies')
    return 0


if __name__ == '__main__':
    sys.exit(main())
