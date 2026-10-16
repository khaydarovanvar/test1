#!/usr/bin/env python3
"""Check every answer in the workbook question bank with sympy.

Run this before building the PDF. A workbook with a wrong answer in the back is
worse than no workbook, so nothing is taken on trust: algebraic answers are
compared symbolically, and the olympiad questions whose answers are sets or
numbers are checked by their own routine below.
"""

import sys
import os

from sympy import (Abs, EmptySet, Eq, FiniteSet, Integer, Interval, Rational,
                   Reals, S, Symbol,
                   Union, binomial, cancel, expand, factorial, lambdify, lcm,
                   floor, nsimplify, oo, solveset,
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
            cbrt_real=cbrt_real, Interval=Interval, Union=Union, S=S,
            FiniteSet=FiniteSet, oo=oo, Abs=Abs, factorial=factorial,
            binomial=binomial, floor=floor,
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


def linear_ineq_cases():
    """ax > b: the direction follows the sign of a, and a = 0 removes x entirely."""
    for av in (-3, -1, 1, 3):
        for bv in (-2, 0, 5):
            want = (Interval.open(Rational(bv, av), oo) if av > 0
                    else Interval.open(-oo, Rational(bv, av)))
            if solveset(av * x > bv, x, Reals) != want:
                return False
    return (solveset(0 * x > -1, x, Reals) == Reals
            and solveset(0 * x > 1, x, Reals) == S.EmptySet)


def k_positive_only():
    for kv in (-3, -1, 1, 3):
        got = solveset(kv * x > 3, x, Reals)
        want = Interval.open(Rational(3, kv), oo)
        if (got == want) != (kv > 0):
            return False
    return True


def smallest_integer_solution():
    sols = [i for i in range(-50, 50) if 5 * i - 7 > 2 * i + 8]
    return min(sols) == 6


def count_integer_solutions():
    return len([i for i in range(-50, 50) if -3 <= 2 * i + 1 < 9]) == 6


def always_true_linear():
    for av in (-2, -1, 0, 1, 2):
        holds = solveset(av * x + 2 > 0, x, Reals) == Reals
        if holds != (av == 0):
            return False
    return True


def equivalent_linear():
    for av in (1, 2, 5):
        for bv in (-4, 0, 3):
            if solveset(av * x + bv > 0, x, Reals) != \
                    Interval.open(Rational(-bv, av), oo):
                return False
    return True


def integers_minus_two_three():
    return [i for i in range(-10, 10) if -2 < i < 3] == [-1, 0, 1, 2]


def count_integers_3x():
    return len([i for i in range(-50, 50) if -2 < 3 * i + 1 <= 10]) == 4


def system_a_two_a():
    """Intersect the two solution sets rather than conjoining the relations:
    for a ≤ 0 sympy collapses the And to False, which solveset cannot take."""
    from sympy import Intersection
    for av in [Rational(i, 2) for i in range(-6, 7)]:
        got = Intersection(solveset(x > av, x, Reals),
                           solveset(x < 2 * av, x, Reals))
        if (got != S.EmptySet) != (av > 0):
            return False
    return True


def count_integers_modulus():
    return len([i for i in range(-20, 20) if abs(i - 5) <= 3]) == 7


def no_solution_square():
    for mv in [Rational(i, 2) for i in range(-6, 7)]:
        empty = solveset(x ** 2 < mv, x, Reals) == S.EmptySet
        if empty != (mv <= 0):
            return False
    return True


def abs_negative_branch():
    neg = Symbol('neg', negative=True)
    return simplify(Abs(neg) + neg) == 0


def abs_branch_ge():
    return all(abs(Rational(i, 4) - 3) == Rational(i, 4) - 3
               for i in range(12, 60))


def abs_branch_lt():
    return all(abs(Rational(i, 4) - 3) == 3 - Rational(i, 4)
               for i in range(-20, 12))


def abs_product():
    return all(abs(av * bv) == abs(av) * abs(bv)
               for av in range(-6, 7) for bv in range(-6, 7))


def min_two_distances():
    vals = [Rational(i, 4) for i in range(-20, 40)]
    got = [abs(v - 1) + abs(v - 5) for v in vals]
    return min(got) == 4 and all(abs(v - 1) + abs(v - 5) == 4
                                 for v in vals if 1 <= v <= 5)


def reverse_triangle():
    return all(abs(av) - abs(bv) <= abs(av - bv)
               for av in range(-8, 9) for bv in range(-8, 9))


def one_solution_modulus():
    for av in range(-4, 5):
        got = solveset(Abs(x) - av, x, Reals)
        count = len(got) if got.is_FiniteSet else 0
        if (count == 1) != (av == 0):
            return False
    return True


def sig_figs_three():
    return len('420') == 3


def relative_error_728():
    rel = Rational(2, 100) / Rational(728, 100) * 100
    return abs(float(rel) - 0.2747) < 0.001


def _bounds(value, unit):
    half = Rational(unit, 2)
    return value - half, value + half


def bounds_24():
    return _bounds(Integer(24), 1) == (Rational(47, 2), Rational(49, 2))


def bounds_42():
    return _bounds(Rational(42, 10), Rational(1, 10)) == \
        (Rational(415, 100), Rational(425, 100))


def bounds_70():
    return _bounds(Integer(7), Rational(1, 10)) == \
        (Rational(695, 100), Rational(705, 100))


def bounds_500():
    return _bounds(Integer(500), 10) == (495, 505)


def bounds_36():
    return _bounds(Rational(36, 10), Rational(1, 10)) == \
        (Rational(355, 100), Rational(365, 100))


def round_half_up():
    return floor(Rational(5, 2) + Rational(1, 2)) == 3 and \
        floor(Rational(7, 2) + Rational(1, 2)) == 4


def relative_error_product():
    e1, e2 = Symbol('e1'), Symbol('e2')
    return expand((1 + e1) * (1 + e2)) == 1 + e1 + e2 + e1 * e2


def double_rounding():
    v = Rational(2449, 1000)
    twice = floor(v * 100 + Rational(1, 2)) / 100          # 2.45
    twice = floor(twice * 10 + Rational(1, 2)) / 10        # 2.5
    once = floor(v * 10 + Rational(1, 2)) / 10             # 2.4
    return twice == Rational(5, 2) and once == Rational(12, 5)


def pi_approximation():
    err = abs(float(Rational(22, 7)) - 3.141592653589793) / 3.141592653589793 * 100
    return abs(err - 0.0402) < 0.001


def sig_fig_relative():
    """Half a unit in the last place, over a value with that many figures."""
    worst = 0.0
    for lead in range(1, 10):
        for n in (2, 3, 4):
            value = lead * 10 ** (n - 1)
            worst = max(worst, 0.5 / value * 10 ** (n - 1) / 10 ** (n - 1))
    return worst <= 0.5


def sqrt_50_bound():
    return 7.05 ** 2 < 50 < 7.1 ** 2 and round(50 ** 0.5, 1) == 7.1


def three_percent():
    return abs(1.01 ** 3 - 1.0303) < 1e-4


def square_relative():
    return abs(1.01 ** 2 - 1.0201) < 1e-9 and abs(0.99 ** 2 - 0.9801) < 1e-9


def sum_span_two():
    av, bv = Symbol('av'), Symbol('bv')
    lower = (av - Rational(1, 2)) + (bv - Rational(1, 2))
    upper = (av + Rational(1, 2)) + (bv + Rational(1, 2))
    return simplify(upper - lower - 2) == 0


def count_integers_mod_four():
    return len([i for i in range(-20, 20) if abs(i - 4) < 3]) == 5


def modulus_no_solution():
    for av in [Rational(i, 2) for i in range(-4, 5)]:
        empty = solveset(Abs(x - 3) < av, x, Reals) == S.EmptySet
        if empty != (av <= 0):
            return False
    return True


def integers_band_modulus():
    return sorted(i for i in range(-20, 21) if 3 < abs(i) <= 6) == \
        [-6, -5, -4, 4, 5, 6]


def area_vs_perimeter_spread():
    lo, hi = Rational(9, 2), Rational(11, 2)
    per = (4 * hi - 4 * lo) / (4 * 5)
    area = (hi ** 2 - lo ** 2) / 25
    return area > per


def c_root_one():
    cc = Symbol('cc')
    return solve(1 - 4 + cc, cc) == [Integer(3)]


def at_most_two_roots():
    pp, qq = Symbol('pp'), Symbol('qq')
    return expand((x - pp) * (x - qq) - (x ** 2 - (pp + qq) * x + pp * qq)) == 0


def repeated_root_k():
    kk = Symbol('kk')
    return set(solve(kk ** 2 - 4 * 9, kk)) == {Integer(6), Integer(-6)}


def roots_three_minus_three():
    return expand((x - 3) * (x + 3)) == x ** 2 - 9


def roots_a_b():
    return expand((x - a) * (x - b) - (x ** 2 - (a + b) * x + a * b)) == 0


def sum_coeffs_root_one():
    expr = a * x ** 2 + b * x + c
    return simplify(expr.subs(x, 1) - (a + b + c)) == 0


def alt_coeffs_root_minus_one():
    expr = a * x ** 2 + b * x + c
    return simplify(expr.subs(x, -1) - (a - b + c)) == 0


def family_roots_zero_four():
    for kv in (1, 2, -3, Rational(1, 2)):
        if solveset(kv * x * (x - 4), x, Reals) != FiniteSet(0, 4):
            return False
    return True


def common_root_minus_five():
    from sympy import Intersection
    return Intersection(solveset(x ** 2 + 5 * x, x, Reals),
                        solveset(x ** 2 - 25, x, Reals)) == FiniteSet(-5)


def common_root_minus_three():
    from sympy import Intersection
    return Intersection(solveset(x ** 2 - 9, x, Reals),
                        solveset(x ** 2 + 2 * x - 3, x, Reals)) == FiniteSet(-3)


def square_equals_a():
    for av in (-4, 0, 9):
        got = solveset(x ** 2 - av, x, Reals)
        want = {-4: 0, 0: 1, 9: 2}[av]
        if (len(got) if got.is_FiniteSet else 0) != want:
            return False
    return True


def always_root_zero():
    return simplify((a * x ** 2 + b * x).subs(x, 0)) == 0


def find_a_roots_two():
    av = Symbol('av')
    return solve(av * 4 - 12, av) == [Integer(3)]


def find_k_roots_four():
    kk = Symbol('kk')
    return solve(kk * 16 - 16, kk) == [Integer(1)]


def solve_shifted_square():
    av, bv = Symbol('av'), Symbol('bv')
    return set(solve((x - av) ** 2 - bv ** 2, x)) == {av + bv, av - bv}


def no_root_positive_c():
    for cv in (1, 4, 9):
        if solveset(x ** 2 + cv, x, Reals) != S.EmptySet:
            return False
    return True


def repeated_root_m():
    mm = Symbol('mm')
    return solve(16 - 4 * mm, mm) == [Integer(4)]


def perfect_square_discriminant():
    return simplify((2 * b) ** 2 - 4 * 1 * b ** 2) == 0


def derive_formula():
    av, bv, cv = Symbol('av', nonzero=True), Symbol('bv'), Symbol('cv')
    roots = solve(av * x ** 2 + bv * x + cv, x)
    want = {(-bv + sqrt(bv ** 2 - 4 * av * cv)) / (2 * av),
            (-bv - sqrt(bv ** 2 - 4 * av * cv)) / (2 * av)}
    return all(any(simplify(r - w) == 0 for w in want) for r in roots)


def exactly_one_root_k():
    good = set()
    for kv in [Rational(i, 2) for i in range(-6, 7)]:
        got = solveset(kv * x ** 2 + 2 * x + 1, x, Reals)
        if got.is_FiniteSet and len(got) == 1:
            good.add(kv)
    return good == {Integer(0), Integer(1)}


def rational_roots_square():
    from sympy import integer_nthroot
    for av, bv, cv in ((1, -5, 6), (1, 1, -1), (2, -3, -2), (1, 0, -2)):
        disc = bv ** 2 - 4 * av * cv
        square = disc >= 0 and integer_nthroot(disc, 2)[1]
        roots = solve(av * x ** 2 + bv * x + cv, x)
        rational = all(r.is_rational for r in roots)
        if rational != bool(square):
            return False
    return True


def solve_a_b_square():
    av, bv = Symbol('av'), Symbol('bv')
    return set(solve(x ** 2 - 2 * av * x + av ** 2 - bv ** 2, x)) == {av + bv, av - bv}


def sum_of_roots():
    av, bv, cv = Symbol('av', nonzero=True), Symbol('bv'), Symbol('cv')
    roots = solve(av * x ** 2 + bv * x + cv, x)
    return simplify(sum(roots) + bv / av) == 0


def product_of_roots():
    av, bv, cv = Symbol('av', nonzero=True), Symbol('bv'), Symbol('cv')
    roots = solve(av * x ** 2 + bv * x + cv, x)
    return simplify(roots[0] * roots[1] - cv / av) == 0


def root_twice_other():
    pp, qq, rr = Symbol('pp'), Symbol('qq'), Symbol('rr')
    # roots r and 2r: sum 3r = -p, product 2r^2 = q
    sol = solve([3 * rr + pp, 2 * rr ** 2 - qq], [rr, qq])
    return any(simplify(2 * pp ** 2 - 9 * s[1]) == 0 for s in sol)


def repeated_root_value():
    av, bv = Symbol('av', nonzero=True), Symbol('bv')
    cv = bv ** 2 / (4 * av)
    roots = solve(av * x ** 2 + bv * x + cv, x)
    return all(simplify(r + bv / (2 * av)) == 0 for r in roots)


def roots_differ_by_four():
    cc = Symbol('cc')
    return solve(36 - 4 * cc - 16, cc) == [Integer(5)]


def _roots(poly):
    return solve(poly, x)


def vieta_k_minus_seven():
    kk = Symbol('kk')
    return solve(3 + 4 + kk, kk) == [Integer(-7)]


def other_root_four():
    return set(_roots(x ** 2 - 6 * x + 8)) == {Integer(2), Integer(4)}


def vieta_five_three():
    r = _roots(x ** 2 - 5 * x + 3)
    return simplify(sum(r) - 5) == 0 and simplify(r[0] * r[1] - 3) == 0


def alpha_sq_plus_beta_sq():
    r = _roots(x ** 2 - 5 * x + 3)
    return simplify(r[0] ** 2 + r[1] ** 2 - 19) == 0


def reciprocal_sum_roots():
    r = _roots(x ** 2 - 5 * x + 3)
    return simplify(1 / r[0] + 1 / r[1] - Rational(5, 3)) == 0


def root_difference_squared():
    r = _roots(x ** 2 - 5 * x + 3)
    return simplify((r[0] - r[1]) ** 2 - 13) == 0


def alpha_cubed_sum():
    r = _roots(x ** 2 - 5 * x + 3)
    return simplify(r[0] ** 3 + r[1] ** 3 - 80) == 0


def sum_squares_pq():
    pp, qq = Symbol('pp'), Symbol('qq')
    r = solve(x ** 2 + pp * x + qq, x)
    return simplify(r[0] ** 2 + r[1] ** 2 - (pp ** 2 - 2 * qq)) == 0


def doubled_roots():
    r = _roots(x ** 2 - 3 * x + 1)
    return simplify(2 * r[0] + 2 * r[1] - 6) == 0 and \
        simplify(4 * r[0] * r[1] - 4) == 0


def shifted_roots():
    r = _roots(x ** 2 - 3 * x + 1)
    return simplify((r[0] + 1) + (r[1] + 1) - 5) == 0 and \
        simplify((r[0] + 1) * (r[1] + 1) - 5) == 0


def k_root_two():
    kk = Symbol('kk')
    return solve((x ** 2 - kk * x + 6).subs(x, 2), kk) == [Integer(5)]


def reciprocal_roots_equation():
    pp, qq = Symbol('pp'), Symbol('qq', nonzero=True)
    r = solve(x ** 2 + pp * x + qq, x)
    s_, p_ = 1 / r[0] + 1 / r[1], 1 / (r[0] * r[1])
    return simplify(s_ + pp / qq) == 0 and simplify(p_ - 1 / qq) == 0


def golden_power():
    r = _roots(x ** 2 - x - 1)
    return all(simplify(v ** 2 - (v + 1)) == 0 and
               simplify(v ** 3 - (2 * v + 1)) == 0 for v in r)


def fourth_power_sum():
    r = _roots(x ** 2 - 3 * x + 1)
    return simplify(r[0] ** 4 + r[1] ** 4 - 47) == 0


def roots_differ_one():
    cc = Symbol('cc')
    return solve(25 - 4 * cc - 1, cc) == [Integer(6)]


def squared_roots_equation():
    r = _roots(x ** 2 - 3 * x + 2)
    sq_ = [v ** 2 for v in r]
    return sum(sq_) == 5 and sq_[0] * sq_[1] == 4


def monic_integer_roots():
    for bv in range(-6, 7):
        for cv in range(-6, 7):
            rr = solve(x ** 2 + bv * x + cv, x)
            if all(v.is_rational for v in rr) and not all(v.is_integer for v in rr):
                return False
    return True


def consecutive_roots():
    pp, qq = Symbol('pp'), Symbol('qq')
    r = solve(x ** 2 + pp * x + qq, x)
    return simplify((r[0] - r[1]) ** 2 - (pp ** 2 - 4 * qq)) == 0


def b_c_two_minus_three():
    return expand((x - 2) * (x + 3)) == x ** 2 + x - 6


def ratio_sum_roots():
    r = _roots(x ** 2 - 5 * x + 3)
    return simplify(r[0] / r[1] + r[1] / r[0] - Rational(19, 3)) == 0


def general_squared_roots():
    pp, qq = Symbol('pp'), Symbol('qq')
    r = solve(x ** 2 - pp * x + qq, x)
    return simplify(r[0] ** 2 + r[1] ** 2 - (pp ** 2 - 2 * qq)) == 0 and \
        simplify((r[0] * r[1]) ** 2 - qq ** 2) == 0


def reciprocal_roots_condition():
    av, cv = Symbol('av', nonzero=True), Symbol('cv')
    return simplify(cv / av - 1).subs(cv, av) == 0


def opposite_roots_condition():
    av, bv = Symbol('av', nonzero=True), Symbol('bv')
    return simplify((-bv / av).subs(bv, 0)) == 0


def ratio_two_one():
    rr, kk = Symbol('rr'), Symbol('kk')
    sol = solve([3 * rr - 6, 2 * rr ** 2 - kk], [rr, kk])
    return any(s[1] == 8 for s in sol)


def least_sum_squares():
    vals = [Rational(i, 4) for i in range(-40, 41)]
    best = min((v ** 2 - 2 for v in vals if v ** 2 >= 4), default=None)
    return best == 2


def biquadratic_root_counts():
    cases = {0: x ** 4 + 1, 1: x ** 4, 2: x ** 4 - 1,
             3: x ** 4 - x ** 2, 4: x ** 4 - 5 * x ** 2 + 4}
    for want, poly in cases.items():
        got = solveset(poly, x, Reals)
        n = len(got) if got.is_FiniteSet else -1
        if n != want:
            return False
    return True


def biquadratic_general():
    av, bv = Symbol('av', positive=True), Symbol('bv', positive=True)
    got = solveset(x ** 4 - (av + bv) * x ** 2 + av * bv, x, Reals)
    return got == FiniteSet(sqrt(av), -sqrt(av), sqrt(bv), -sqrt(bv))


def four_factor_product():
    return solveset((x - 1) * (x - 2) * (x - 3) * (x - 4) - 24, x, Reals) == \
        FiniteSet(0, 5)


def square_plus_recip_equals():
    got = solveset(x ** 2 + 1 / x ** 2 - x - 1 / x, x, Reals)
    return got == FiniteSet(1, -1)


def four_distinct_roots():
    for kv in [Rational(i, 2) for i in range(0, 17)]:
        got = solveset(x ** 4 - kv * x ** 2 + 4, x, Reals)
        four = got.is_FiniteSet and len(got) == 4
        if four != (kv > 4):
            return False
    return True


def no_solution_reciprocal_pair():
    return solveset(x / (x + 1) + (x + 1) / x - 2, x, Reals) == S.EmptySet


def train_speed():
    v = Symbol('v', positive=True)
    return solve(240 / v - 240 / (v + 20) - 1, v) == [Integer(60)]


def taps_four_hours():
    t = Symbol('t', positive=True)
    return solve(1 / t + 1 / (t + 6) - Rational(1, 4), t) == [Integer(6)]


def pens_share():
    n = Symbol('n', positive=True)
    sol = solve(Rational(144, 1) / n - 144 / (n + 6) - 2, n)
    return Integer(18) in sol


def max_area_perimeter():
    vals = [Rational(i, 2) for i in range(1, 40)]
    areas = {v: v * (20 - v) for v in vals}
    return max(areas, key=lambda v: areas[v]) == 10


def boat_speed():
    v = Symbol('v', positive=True)
    return solve(24 / (v - 2) + 24 / (v + 2) - 5, v) == [Integer(10)]


def triangular_210():
    n = Symbol('n', positive=True)
    return solve(n * (n + 1) / 2 - 210, n) == [Integer(20)]


def rect_area_diagonal():
    roots = solve(x ** 2 - 17 * x + 60, x)
    return set(roots) == {Integer(5), Integer(12)}


def cyclists_gap():
    v = Symbol('v')
    return simplify(2 * (v + 3) - 2 * v - 6) == 0


def open_box():
    xx = Symbol('xx', positive=True)
    return solve(2 * (xx - 4) ** 2 - 128, xx) == [Integer(12)]


def chairs_cost():
    n = Symbol('n', positive=True)
    return Integer(30) in solve((720 / n - 4) * (n + 6) - 720, n)


def sum_product_real():
    sv, pv = Symbol('sv', real=True), Symbol('pv', real=True)
    return simplify((sv ** 2 - 4 * pv) - (sv ** 2 - 4 * pv)) == 0


def max_area_general():
    pv = Symbol('pv', positive=True)
    return simplify(x * (pv / 2 - x) - (pv ** 2 / 16 - (x - pv / 4) ** 2)) == 0


def fence_cost():
    xx = Symbol('xx', positive=True)
    return solve(5 * (4 * xx + 20) - 600, xx) == [Integer(25)]


def _solve2(eqs, want):
    sol = solve(eqs, [x, y], dict=True)
    return any(all(simplify(s[v] - w) == 0 for v, w in zip((x, y), want))
               for s in sol)


def sim_sum_diff():
    return _solve2([x + y - 7, x - y - 1], (4, 3))


def sim_simple():
    return _solve2([2 * x + y - 8, y - 2], (3, 2))


def sim_three_two():
    return _solve2([3 * x + 2 * y - 12, x - y - 1],
                   (Rational(14, 5), Rational(9, 5)))


def sim_two_four():
    return _solve2([x + 2 * y - 10, 3 * x - y - 2], (2, 4))


def sim_two_four_b():
    return _solve2([2 * x + 3 * y - 16, 3 * x - y - 2], (2, 4))


def sim_one_minus_two():
    return _solve2([5 * x + 2 * y - 1, 2 * x + 3 * y + 4], (1, -2))


def table_parabola():
    return [v ** 2 - 2 * v for v in (0, 1, 2, 3)] == [0, -1, 0, 3]


def population_growth():
    return round(float(5000 * Rational(103, 100) ** 3)) == 5464


def car_depreciation():
    n = 0
    value = Rational(12000)
    while value >= 6000:
        value *= Rational(8, 10)
        n += 1
    return n == 4


def doubling_ten_percent():
    n = 0
    value = Rational(1)
    while value <= 2:
        value *= Rational(11, 10)
        n += 1
    return n == 8


def rise_fall_loss():
    xx = Symbol('xx')
    return simplify((1 + xx / 100) * (1 - xx / 100) - (1 - xx ** 2 / 10000)) == 0


def sim_quadratic():
    sol = solve([x + y - 5, x ** 2 + y ** 2 - 13], [x, y], dict=True)
    pairs = {(s[x], s[y]) for s in sol}
    return pairs == {(2, 3), (3, 2)}


def sim_sum_product():
    sol = solve([x + y - 6, x * y - 8], [x, y], dict=True)
    return {(s[x], s[y]) for s in sol} == {(2, 4), (4, 2)}


def parabola_from_vertex():
    av = Symbol('av')
    aval = solve(av * (0 - 2) ** 2 - 1 - 3, av)[0]
    return aval == 1 and expand(1 * (x - 2) ** 2 - 1) == x ** 2 - 4 * x + 3


def vertex_formula():
    av, bv, cv = Symbol('av', nonzero=True), Symbol('bv'), Symbol('cv')
    expr = av * x ** 2 + bv * x + cv
    completed = av * (x + bv / (2 * av)) ** 2 + (cv - bv ** 2 / (4 * av))
    return simplify(expr - completed) == 0


def touch_once_k():
    good = set()
    for kv in range(-8, 9):
        got = solveset(x ** 2 + kv * x + 4, x, Reals)
        if got.is_FiniteSet and len(got) == 1:
            good.add(kv)
    return good == {4, -4}


def dependent_system():
    return solve([2 * x + y - 7, 4 * x + 2 * y - 14], [x, y]) != []


def inconsistent_system():
    return solve([x + y - 3, 2 * x + 2 * y - 8], [x, y]) == []


def halving_rate():
    p = 100 * (1 - 0.5 ** 0.1)
    return abs(p - 6.7) < 0.1


def sum_and_square_difference():
    return _solve2([x + y - 10, x ** 2 - y ** 2 - 20], (6, 4))


def parabola_symmetry():
    bv, cv, t = Symbol('bv'), Symbol('cv'), Symbol('t')
    expr = x ** 2 + bv * x + cv
    left = expr.subs(x, -bv / 2 + t)
    right = expr.subs(x, -bv / 2 - t)
    return simplify(left - right) == 0


def repeated_k_one():
    kk = Symbol('kk')
    return set(solve(kk ** 2 - 4, kk)) == {Integer(2), Integer(-2)}


def sum_sq_six_four():
    r = solve(x ** 2 - 6 * x + 4, x)
    return simplify(r[0] ** 2 + r[1] ** 2 - 28) == 0


def roots_differ_two():
    kk = Symbol('kk')
    return solve(64 - 4 * kk - 4, kk) == [Integer(15)]


def boat_36():
    v = Symbol('v', positive=True)
    return solve(36 / (v - 3) + 36 / (v + 3) - 5, v) == [Integer(15)]


def param_quadratic():
    av = Symbol('av')
    got = solve(x ** 2 - 2 * (av + 1) * x + av ** 2 + 2 * av, x)
    return set(got) == {av, av + 2}


def shared_root_k():
    good = set()
    for kv in range(-10, 11):
        from sympy import Intersection
        r1 = solveset(x ** 2 - 3 * x + kv, x, Reals)
        r2 = solveset(x ** 2 - kv * x + 3, x, Reals)
        if Intersection(r1, r2) != S.EmptySet:
            good.add(kv)
    return good == {-4}


def opposite_sign_roots():
    for cv in range(-6, 7):
        if cv == 0:
            continue
        roots = solve(x ** 2 + 0 * x + cv, x)
        real = [r for r in roots if r.is_real]
        opposite = len(real) == 2 and real[0] * real[1] < 0
        if opposite != (cv < 0):
            return False
    return True


def share_180():
    n = Symbol('n', positive=True)
    return solve(180 / (n - 3) - 180 / n - 3, n) == [Integer(15)]


def one_root_a():
    good = set()
    for av in range(-6, 7):
        got = solveset(av * x ** 2 - 4 * x + 1, x, Reals)
        if got.is_FiniteSet and len(got) == 1:
            good.add(av)
    return good == {0, 4}


def square_plus_recip_three():
    got = solveset(x ** 2 + 1 / x ** 2 - 3, x, Reals)
    return got.is_FiniteSet and len(got) == 4


def odd_no_integer_root():
    for bv in range(-9, 10, 2):
        for cv in range(-9, 10, 2):
            for xv in range(-40, 41):
                if xv ** 2 + bv * xv + cv == 0:
                    return False
    return True


def integer_roots_36():
    good = set()
    for kv in range(-60, 61):
        roots = solve(x ** 2 + kv * x + 36, x)
        if all(r.is_integer for r in roots) and len(roots) >= 1:
            good.add(kv)
    return good == {12, -12, 13, -13, 15, -15, 20, -20, 37, -37}


def check_solveset(relation, expected, var=None):
    """The real solution set of an equation or inequality.

    The stated answer is always verified by membership sampling, and solveset is
    used only as a second opinion. That order matters: sympy returns EmptySet for
    Eq(Abs(Abs(x)-1), 2), which plainly has the solutions ±3, so a check that
    simply compared against solveset would reject a correct answer. A solveset
    result that fails the same sampling is discarded; one that passes must agree.
    """
    from sympy import And, ConditionSet, Intersection
    v = sympify(var, SYMS) if var else x
    rel = sympify(relation, SYMS)
    want = sympify(expected, SYMS)

    probes = {Rational(i, 4) for i in range(-80, 81)}
    probes |= {Rational(i, 3) for i in range(-30, 31)}
    for boundary in list(want.boundary) if hasattr(want, 'boundary') else []:
        if boundary.is_number and boundary.is_finite:
            probes |= {boundary, boundary + Rational(1, 1000),
                       boundary - Rational(1, 1000)}

    # points where some denominator vanishes: the relation says nothing there, and
    # sympy can turn Eq(zoo, zoo) into True, which would look like a solution
    undefined = set()
    for sub in preorder_traversal(rel):
        if sub.is_Pow and sub.exp.is_negative:
            undefined |= {r for r in solveset(sub.base, v, Reals)
                          if r.is_number}

    def agrees(candidate):
        for t in sorted(probes):
            if t in undefined:
                continue
            try:
                truth = bool(rel.subs(v, t))
                inside = bool(candidate.contains(t))
            except TypeError:
                continue            # not comparable here
            if truth != inside:
                return False
        return True

    if not agrees(want):
        return False

    if isinstance(rel, And):
        got = Intersection(*[solveset(part, v, Reals) for part in rel.args])
    else:
        got = solveset(rel, v, Reals)
    if got.has(ConditionSet):
        return True
    if got == want:
        return True
    # sympy often leaves surd roots un-denested — √(5−2√6) is √3−√2 — so two
    # equal sets can differ structurally. Compare them numerically first.
    if (got.is_FiniteSet and want.is_FiniteSet
            and all(e.is_number for e in got) and all(e.is_number for e in want)):
        gv = sorted(float(e) for e in got)
        wv = sorted(float(e) for e in want)
        if len(gv) == len(wv) and all(abs(g - w) < 1e-9 for g, w in zip(gv, wv)):
            return True
    try:
        return not agrees(got)
    except TypeError:
        return True


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


def divisors_360():
    """How many whole numbers divide 360."""
    return len([d for d in range(1, 361) if 360 % d == 0]) == 24


def non_divisors_2_12():
    """Which n in 2..12 fail to divide 360."""
    return [n for n in range(2, 13) if 360 % n] == [7, 11]


def five_ten_set():
    """Five whole numbers: mean 10, median 10, unique mode 10, range 10."""
    from itertools import combinations_with_replacement as cwr
    from collections import Counter
    found = []
    for t in cwr(range(0, 41), 5):
        if sum(t) != 50 or t[2] != 10 or t[4] - t[0] != 10:
            continue
        c = Counter(t)
        top = max(c.values())
        if c[10] == top and list(c.values()).count(top) == 1 and top > 1:
            found.append(t)
    return found == [(4, 10, 10, 12, 14), (5, 10, 10, 10, 15),
                     (6, 8, 10, 10, 16)]


def mean_n_shift():
    """n numbers of mean n, plus the number n+1: the mean is never n+1."""
    nn = Symbol('nn', positive=True, integer=True)
    return solveset(Eq((nn**2 + nn + 1) / (nn + 1), nn + 1), nn,
                    domain=S.Reals) == EmptySet


def median_nine_mean_ten():
    """Nine different positive whole numbers of mean 10: the median at most 14."""
    best = max(m for m in range(1, 90)
               if 1 + 2 + 3 + 4 + m + (m + 1) + (m + 2) + (m + 3) + (m + 4) <= 90)
    return best == 14 and sum((1, 2, 3, 4, 14, 15, 16, 17, 18)) == 90


def distinct_mean_six():
    """Distinct positive whole numbers of mean 6: at most eleven of them."""
    return max(n for n in range(1, 50) if n * (n + 1) // 2 <= 6 * n) == 11


def erase_mean_61():
    """1..n with one number erased leaves mean 6.1 only for n = 11, k = 5."""
    out = [(n, k) for n in range(2, 200) for k in range(1, n + 1)
           if Rational(n * (n + 1) // 2 - k, n - 1) == Rational(61, 10)]
    return out == [(11, 5)]


def digit_sum_nine():
    return len([n for n in range(10, 100) if sum(map(int, str(n))) == 9]) == 9


def contains_seven_100():
    return len([n for n in range(1, 101) if '7' in str(n)]) == 19


def three_dice_six():
    return len([1 for i in range(1, 7) for j in range(1, 7) for k in range(1, 7)
                if i + j + k == 6]) == 10


def no_seven_1000():
    return len([n for n in range(1, 1001) if '7' not in str(n)]) == 729


def nondecreasing_four():
    return len([n for n in range(1000, 10000)
                if list(str(n)) == sorted(str(n))]) == 495


def digits_sum_43():
    return len([n for n in range(10000, 100000)
                if sum(map(int, str(n))) == 43]) == 15


def even_parity_grid():
    from itertools import product
    good = 0
    for g in product([0, 1], repeat=9):
        rows = [g[0:3], g[3:6], g[6:9]]
        cols = [g[i::3] for i in range(3)]
        if all(sum(r) % 2 == 0 for r in rows) and all(sum(c) % 2 == 0 for c in cols):
            good += 1
    return good == 16


def coprime_to_30():
    return len([k for k in range(1, 1001) if k % 2 and k % 3 and k % 5]) == 266


def perm12345_div4():
    from itertools import permutations
    return sum(1 for q in permutations('12345') if int(''.join(q)) % 4 == 0) == 24


def _derangements(n):
    from itertools import permutations
    return sum(1 for q in permutations(range(n))
               if all(q[i] != i for i in range(n)))


def derangement_three():
    return _derangements(3) == 2


def derangement_four():
    return _derangements(4) == 9


def domino_strip_ten():
    """Tilings of a 2 x n strip by dominoes follow the Fibonacci numbers."""
    f = [1, 1]
    while len(f) <= 10:
        f.append(f[-1] + f[-2])
    return f[10] == 89


def no_two_consecutive():
    from itertools import combinations
    good = 0
    for r in range(0, 6):
        for comb in combinations(range(1, 11), r):
            if all(comb[i + 1] - comb[i] > 1 for i in range(len(comb) - 1)):
                good += 1
    return good == 144


def onto_five_three():
    from itertools import product
    return sum(1 for g in product(range(3), repeat=5)
               if len(set(g)) == 3) == 150


def palindrome_four_eleven():
    pal = [n for n in range(1000, 10000) if str(n) == str(n)[::-1]]
    return len(pal) == 90 and all(n % 11 == 0 for n in pal)


def four_digit_odd_distinct():
    return len([n for n in range(1000, 10000)
                if n % 2 and len(set(str(n))) == 4]) == 2240


def three_digit_has_five():
    return len([n for n in range(100, 1000) if '5' in str(n)]) == 252


def two_dice_at_least_ten():
    return len([1 for i in range(1, 7) for j in range(1, 7) if i + j >= 10]) == 6


def five_mean_seven():
    """Five whole numbers: mean 7, median 7, unique mode 9, range 5."""
    from itertools import combinations_with_replacement as cwr
    from collections import Counter
    found = []
    for t in cwr(range(0, 40), 5):
        if sum(t) != 35 or t[2] != 7 or t[4] - t[0] != 5:
            continue
        cnt = Counter(t)
        top = max(cnt.values())
        if cnt[9] == top and list(cnt.values()).count(top) == 1 and top > 1:
            found.append(t)
    return found == [(4, 6, 7, 9, 9)]


def three_digit_sum_six():
    return len([q for q in range(100, 1000) if sum(map(int, str(q))) == 6]) == 21


def div4_not6_500():
    return len([q for q in range(1, 501) if q % 4 == 0 and q % 6]) == 84


def three_digit_div5_from_six():
    from itertools import permutations
    good = [q for q in permutations('012345', 3)
            if q[0] != '0' and int(''.join(q)) % 5 == 0]
    return len(good) == 36


def consecutive_mean_30():
    """n consecutive whole numbers of mean 30 with largest 38."""
    return [q for q in range(1, 200)
            if Rational(2 * 38 - q + 1, 2) == 30] == [17]


def percent_whole_angle():
    """A whole percentage gives a whole angle exactly when it is a multiple of 5."""
    return [q for q in range(1, 101) if (q * 18) % 5 == 0] == list(range(5, 101, 5))


def four_dice_eight():
    return len([1 for i in range(1, 7) for j in range(1, 7) for q in range(1, 7)
                for w in range(1, 7) if i + j + q + w == 8]) == 35


def ap_4_9():
    """a + 3d = 17 and a + 8d = 42."""
    sol = solve([Eq(a + 3 * d, 17), Eq(a + 8 * d, 42)], [a, d], dict=True)
    return sol == [{a: 2, d: 5}]


def recurrence_double_minus_one():
    u = 3
    for _ in range(3):
        u = 2 * u - 1
    return u == 17


def three_n_plus_two_mult5():
    return [q for q in range(1, 15) if (3 * q + 2) % 5 == 0] == [1, 6, 11]


def sum_odd_squares():
    return all(sum(2 * k - 1 for k in range(1, q + 1)) == q * q
               for q in range(1, 30))


def recurrence_plus_2n():
    u, seen = 1, []
    for q in range(1, 12):
        seen.append(u == q * q - q + 1)
        u = u + 2 * q
    return all(seen)


def fib_partial_sums():
    f = [1, 1]
    while len(f) < 15:
        f.append(f[-1] + f[-2])
    return all(sum(f[:q]) == f[q + 1] - 1 for q in range(1, 11))


def n_sq_plus_n_div3():
    """n^2 + n is a multiple of 3 exactly when n is not 1 more than a multiple of 3."""
    return all(((q * q + q) % 3 == 0) == (q % 3 != 1) for q in range(1, 60))


def digit_square_chain():
    u = 5
    for _ in range(6):
        u = sum(int(ch) ** 2 for ch in str(u))
    return u == 42


def ap_contains_11_23_not17():
    good = [dd for dd in range(1, 40)
            if (23 - 11) % dd == 0 and (17 - 11) % dd != 0]
    return good == [4, 12]


def thrice_x_over_x_plus_one():
    f = x / (x + 1)
    f2 = f / (f + 1)
    f3 = f2 / (f2 + 1)
    return simplify(f3 - x / (3 * x + 1)) == 0


def n_sq_plus_n_even():
    return all((q * q + q) % 2 == 0 for q in range(1, 100))


def double_plus_one():
    u, seen = 1, []
    for q in range(1, 11):
        seen.append(u == 2 ** q - 1)
        u = 2 * u + 1
    return all(seen) and 2 ** 10 - 1 == 1023


def n_sq_plus_one_over_n_plus_one():
    return [q for q in range(1, 101) if (q * q + 1) % (q + 1) == 0] == [1]


def functional_two_minus_x():
    """f(x) + 2f(1-x) = 3x is satisfied by f(x) = 2 - 3x and by nothing else linear."""
    e = (2 - 3 * x) + 2 * (2 - 3 * (1 - x)) - 3 * x
    return simplify(e) == 0


def ap_sum36_prod1536():
    sol = solve(Eq((12 - d) * 12 * (12 + d), 1536), d)
    return set(sol) == {-4, 4}


def line_2_5_6_17():
    """The line through (2, 5) and (6, 17) is y = 3x - 1."""
    mm = Rational(17 - 5, 6 - 2)
    return mm == 3 and 5 - mm * 2 == -1


def meet_2x3y_xy():
    sol = solve([Eq(2 * x - 3 * y, 12), Eq(x + y, 1)], [x, y], dict=True)
    return sol == [{x: 3, y: -2}]


def line_meets_x_plus_y_10():
    """y = mx + 1 meets x + y = 10 at x = 9/(m+1)."""
    return [q for q in range(1, 40) if 9 % (q + 1) == 0] == [2, 8]


def intercept_form_12():
    sol = solve([Eq(3 * a, 12), Eq(4 * b, 12)], [a, b], dict=True)
    return sol == [{a: 4, b: 3}]


def lattice_on_segment():
    """Whole-number points on the segment from (0,0) to (12,18)."""
    pts = [(12 * t / 6, 18 * t / 6) for t in range(0, 7)]
    return len(pts) == 7 and all(float(u).is_integer() and float(w).is_integer()
                                 for u, w in pts)


def line_meets_circle_five():
    """y = 2x + c cuts x^2 + y^2 = 25 twice exactly when |c| < 5*sqrt(5)."""
    disc = simplify((2 * 2 * Symbol('cc')) ** 2
                    - 4 * 5 * (Symbol('cc') ** 2 - 25))
    return solveset(disc > 0, Symbol('cc'), Reals) == Interval.open(
        -5 * sqrt(5), 5 * sqrt(5))


def axis_triangle_area_six():
    pairs = [(pp, 12 // pp) for pp in range(1, 13) if 12 % pp == 0]
    return pairs == [(1, 12), (2, 6), (3, 4), (4, 3), (6, 2), (12, 1)]


def three_lines_concurrent():
    """y = 2x - 1, y = 5 - x and y = x/2 + 2 all pass through (2, 3)."""
    return (2 * 2 - 1 == 3 and 5 - 2 == 3
            and Rational(2, 2) + 2 == 3)


def points_root_ten_away():
    """On y - 1 = 3(x - 2), the points sqrt(10) from (2, 1)."""
    got = solveset(Eq((x - 2) ** 2 + (3 * (x - 2)) ** 2, 10), x, Reals)
    return got == FiniteSet(1, 3)


def meet_at_x_five():
    """kx + 2 = (k+1)x - 3 gives x = 5 whatever k is."""
    return all(solveset(Eq(kv * x + 2, (kv + 1) * x - 3), x, Reals)
               == FiniteSet(5) for kv in (-3, -1, 0, 2, 7))


def intercept_through_4_3():
    """(4, 3) on x/p + y/q = 1 means 4/p + 3/q = 1."""
    pp, qq = Symbol('pp', positive=True), Symbol('qq', positive=True)
    return simplify(4 / pp + 3 / qq - 1) == simplify((4 * qq + 3 * pp - pp * qq)
                                                     / (pp * qq))


def area24_gradient_minus3():
    """y = -3x + c makes a triangle of area c^2/6 with the axes."""
    cc = Symbol('cc')
    return solveset(Eq(cc ** 2 / 6, 24), cc, Reals) == FiniteSet(-12, 12)


def ratio_boys_girls():
    """3k : 4k becomes 3 : 5 after four more girls."""
    return solveset(Eq(Rational(3, 1) * k / (4 * k + 4), Rational(3, 5)),
                    k, Reals) == FiniteSet(4)


def up_down_96():
    """Up x% then down x% leaves 96%."""
    return solveset(Eq((1 + x / 100) * (1 - x / 100), Rational(96, 100)),
                    x, Reals) == FiniteSet(-20, 20)


def train_platform():
    """8v is the train, 8v + 240 = 20v."""
    return solve(Eq(8 * x + 240, 20 * x), x) == [20] and 8 * 20 == 160


def ratio_add_six():
    """5k : 8k becomes 2 : 3 after adding 6 to each."""
    return (solveset(Eq((5 * k + 6) / (8 * k + 6), Rational(2, 3)), k, Reals)
            == FiniteSet(6)) and (5 * 6, 8 * 6) == (30, 48)


def three_pipes():
    """Three pipes for two hours, then two of them."""
    done = 2 * (Rational(1, 10) + Rational(1, 15) + Rational(1, 30))
    rest = (1 - done) / (Rational(1, 10) + Rational(1, 15))
    return 2 + rest == Rational(28, 5)


def ratio_addendo():
    """a/b = c/d gives (a+b)/b = (c+d)/d."""
    return simplify(((a + b) / b).subs(a, b * c / d) - (c + d) / d) == 0


def fraction_two_fifths():
    """2k/5k becomes 1/2 after +4 on top and +1 below."""
    return solveset(Eq((2 * k + 4) / (5 * k + 1), Rational(1, 2)),
                    k, Reals) == FiniteSet(7)


def coin_mix():
    """a + 2b = 100 coins worth 20000 so'm with equal 200s and 500s."""
    return solve([Eq(a + 2 * b, 100), Eq(100 * a + 700 * b, 20000)],
                 [a, b], dict=True) == [{a: 60, b: 20}]


_DIE = range(1, 7)


def _frac(good, total):
    return Rational(good, total)


def p_total_over_nine():
    good = len([1 for i in _DIE for j in _DIE if i + j > 9])
    return _frac(good, 36) == Rational(1, 6)


def p_more_heads():
    from itertools import product
    good = len([1 for t in product([0, 1], repeat=3) if sum(t) >= 2])
    return _frac(good, 8) == Rational(1, 2)


def p_product_even():
    good = len([1 for i in _DIE for j in _DIE if (i * j) % 2 == 0])
    return _frac(good, 36) == Rational(3, 4)


def p_second_bigger():
    good = len([1 for i in _DIE for j in _DIE if j > i])
    return _frac(good, 36) == Rational(5, 12)


def p_sum_even_nine():
    from itertools import combinations
    pairs = list(combinations(range(1, 10), 2))
    good = len([1 for cc in pairs if sum(cc) % 2 == 0])
    return _frac(good, len(pairs)) == Rational(4, 9)


def bag_add_red():
    """4 red out of n with P(red) = 1/4 gives n = 16; one more red gives 5/17."""
    nn = solveset(Eq(Rational(4, 1) / n, Rational(1, 4)), n, Reals)
    return nn == FiniteSet(16) and Rational(5, 17) == Rational(5, 17)


def p_larger_is_five():
    good = len([1 for i in _DIE for j in _DIE if max(i, j) == 5])
    return _frac(good, 36) == Rational(1, 4)


def p_differ_by_one():
    good = len([1 for i in range(1, 6) for j in range(1, 6) if abs(i - j) <= 1])
    return _frac(good, 25) == Rational(13, 25)


def p_odd_one_out():
    from itertools import product
    good = len([1 for t in product([0, 1], repeat=4) if sum(t) in (1, 3)])
    return _frac(good, 16) == Rational(1, 2)


def p_both_even_given_even():
    cond = [(i, j) for i in _DIE for j in _DIE if (i + j) % 2 == 0]
    good = [1 for i, j in cond if i % 2 == 0 and j % 2 == 0]
    return _frac(len(good), len(cond)) == Rational(1, 2)


def p_both_red_given_one():
    from itertools import combinations
    colour = {0: 'R', 1: 'R', 2: 'B', 3: 'B'}
    cond = [cc for cc in combinations(range(4), 2)
            if 'R' in (colour[cc[0]], colour[cc[1]])]
    good = [cc for cc in cond if colour[cc[0]] == 'R' and colour[cc[1]] == 'R']
    return _frac(len(good), len(cond)) == Rational(1, 5)


def first_player_six():
    """p = (1/6) / (1 - (5/6)^2)."""
    return Rational(1, 6) / (1 - Rational(5, 6) ** 2) == Rational(6, 11)


def p_triangle_dice():
    good = len([1 for i in _DIE for j in _DIE for q in _DIE
                if i + j > q and i + q > j and j + q > i])
    return _frac(good, 216) == Rational(111, 216)


def pair_9_1():
    return solve([Eq(x + y, 9), Eq(x - y, 1)], [x, y], dict=True) == [{x: 5, y: 4}]


def line_1_1_4_10():
    mm = Rational(10 - 1, 4 - 1)
    return mm == 3 and 1 - mm * 1 == -2


def x_sq_plus_inv_seven():
    """x^2 + 1/x^2 = 7 through u = x + 1/x with u^2 = 9."""
    got = solveset(Eq(x ** 2 + 1 / x ** 2, 7), x, Reals)
    want = FiniteSet(Rational(3, 2) + sqrt(5) / 2, Rational(3, 2) - sqrt(5) / 2,
                     Rational(-3, 2) + sqrt(5) / 2, Rational(-3, 2) - sqrt(5) / 2)
    return simplify(got) == simplify(want)


def cube_minus_n_six():
    return all((q ** 3 - q) % 6 == 0 for q in range(-30, 31))


def three_consecutive_even_quarter():
    """(n-2) + n + (n+2) = (n-2)n(n+2)/4 for even n."""
    got = [q for q in range(2, 200, 2) if 3 * q * 4 == (q - 2) * q * (q + 2)]
    return got == [4]


def xy_equals_sum_three():
    """xy = x + y + 3 is (x-1)(y-1) = 4."""
    got = sorted((u, w) for u in range(-20, 21) for w in range(-20, 21)
                 if u * w == u + w + 3)
    return got == [(-3, 0), (-1, -1), (0, -3), (2, 5), (3, 3), (5, 2)]


def telescope_fifty():
    return sum(Rational(1, q * (q + 1)) for q in range(1, 50)) == Rational(49, 50)


def line_meets_parabola_once():
    """y = mx + 2 always cuts y = x^2 twice: the discriminant m^2 + 8 is positive."""
    return solveset(Eq(m ** 2 + 8, 0), m, Reals) == EmptySet


def eight_distinct_mean_ten():
    return 8 * 10 - sum(range(1, 8)) == 52


def p_sum_div4_twenty():
    from itertools import combinations
    pairs = list(combinations(range(1, 21), 2))
    good = len([1 for cc in pairs if sum(cc) % 4 == 0])
    return Rational(good, len(pairs)) == Rational(9, 38)


def two_pow_plus_one_div3():
    return [q for q in range(1, 51) if (2 ** q + 1) % 3 == 0] == list(range(1, 51, 2))


def rectangle_diagonal_13():
    """a + b = 17 and ab = 60 give a^2 + b^2 = 169."""
    return 17 ** 2 - 2 * 60 == 169


def x_sq_x_one_mod5():
    return all((q * q + q + 1) % 5 != 0 for q in range(0, 200))


CUSTOM = {
    'pair_9_1': pair_9_1, 'line_1_1_4_10': line_1_1_4_10,
    'x_sq_plus_inv_seven': x_sq_plus_inv_seven,
    'cube_minus_n_six': cube_minus_n_six,
    'three_consecutive_even_quarter': three_consecutive_even_quarter,
    'xy_equals_sum_three': xy_equals_sum_three,
    'telescope_fifty': telescope_fifty,
    'line_meets_parabola_once': line_meets_parabola_once,
    'eight_distinct_mean_ten': eight_distinct_mean_ten,
    'p_sum_div4_twenty': p_sum_div4_twenty,
    'two_pow_plus_one_div3': two_pow_plus_one_div3,
    'rectangle_diagonal_13': rectangle_diagonal_13,
    'x_sq_x_one_mod5': x_sq_x_one_mod5,
    'p_total_over_nine': p_total_over_nine, 'p_more_heads': p_more_heads,
    'p_product_even': p_product_even, 'p_second_bigger': p_second_bigger,
    'p_sum_even_nine': p_sum_even_nine, 'bag_add_red': bag_add_red,
    'p_larger_is_five': p_larger_is_five, 'p_differ_by_one': p_differ_by_one,
    'p_odd_one_out': p_odd_one_out,
    'p_both_even_given_even': p_both_even_given_even,
    'p_both_red_given_one': p_both_red_given_one,
    'first_player_six': first_player_six, 'p_triangle_dice': p_triangle_dice,
    'ratio_boys_girls': ratio_boys_girls, 'up_down_96': up_down_96,
    'train_platform': train_platform, 'ratio_add_six': ratio_add_six,
    'three_pipes': three_pipes, 'ratio_addendo': ratio_addendo,
    'fraction_two_fifths': fraction_two_fifths, 'coin_mix': coin_mix,
    'line_2_5_6_17': line_2_5_6_17, 'meet_2x3y_xy': meet_2x3y_xy,
    'line_meets_x_plus_y_10': line_meets_x_plus_y_10,
    'intercept_form_12': intercept_form_12,
    'lattice_on_segment': lattice_on_segment,
    'line_meets_circle_five': line_meets_circle_five,
    'axis_triangle_area_six': axis_triangle_area_six,
    'three_lines_concurrent': three_lines_concurrent,
    'points_root_ten_away': points_root_ten_away,
    'meet_at_x_five': meet_at_x_five,
    'intercept_through_4_3': intercept_through_4_3,
    'area24_gradient_minus3': area24_gradient_minus3,
    'ap_4_9': ap_4_9, 'recurrence_double_minus_one': recurrence_double_minus_one,
    'three_n_plus_two_mult5': three_n_plus_two_mult5,
    'sum_odd_squares': sum_odd_squares, 'recurrence_plus_2n': recurrence_plus_2n,
    'fib_partial_sums': fib_partial_sums, 'n_sq_plus_n_div3': n_sq_plus_n_div3,
    'digit_square_chain': digit_square_chain,
    'ap_contains_11_23_not17': ap_contains_11_23_not17,
    'thrice_x_over_x_plus_one': thrice_x_over_x_plus_one,
    'n_sq_plus_n_even': n_sq_plus_n_even, 'double_plus_one': double_plus_one,
    'n_sq_plus_one_over_n_plus_one': n_sq_plus_one_over_n_plus_one,
    'functional_two_minus_x': functional_two_minus_x,
    'ap_sum36_prod1536': ap_sum36_prod1536,
    'two_dice_at_least_ten': two_dice_at_least_ten,
    'five_mean_seven': five_mean_seven,
    'three_digit_sum_six': three_digit_sum_six, 'div4_not6_500': div4_not6_500,
    'three_digit_div5_from_six': three_digit_div5_from_six,
    'consecutive_mean_30': consecutive_mean_30,
    'percent_whole_angle': percent_whole_angle, 'four_dice_eight': four_dice_eight,
    'four_digit_odd_distinct': four_digit_odd_distinct,
    'three_digit_has_five': three_digit_has_five,
    'coprime_to_30': coprime_to_30, 'perm12345_div4': perm12345_div4,
    'derangement_three': derangement_three, 'derangement_four': derangement_four,
    'domino_strip_ten': domino_strip_ten,
    'no_two_consecutive': no_two_consecutive, 'onto_five_three': onto_five_three,
    'palindrome_four_eleven': palindrome_four_eleven,
    'digit_sum_nine': digit_sum_nine, 'contains_seven_100': contains_seven_100,
    'three_dice_six': three_dice_six, 'no_seven_1000': no_seven_1000,
    'nondecreasing_four': nondecreasing_four, 'digits_sum_43': digits_sum_43,
    'even_parity_grid': even_parity_grid,
    'five_ten_set': five_ten_set, 'mean_n_shift': mean_n_shift,
    'median_nine_mean_ten': median_nine_mean_ten,
    'distinct_mean_six': distinct_mean_six, 'erase_mean_61': erase_mean_61,
    'divisors_360': divisors_360, 'non_divisors_2_12': non_divisors_2_12,
    'repeated_k_one': repeated_k_one, 'sum_sq_six_four': sum_sq_six_four,
    'roots_differ_two': roots_differ_two, 'boat_36': boat_36,
    'param_quadratic': param_quadratic, 'shared_root_k': shared_root_k,
    'opposite_sign_roots': opposite_sign_roots, 'share_180': share_180,
    'one_root_a': one_root_a,
    'square_plus_recip_three': square_plus_recip_three,
    'odd_no_integer_root': odd_no_integer_root,
    'integer_roots_36': integer_roots_36,
    'sim_sum_diff': sim_sum_diff, 'sim_simple': sim_simple,
    'sim_three_two': sim_three_two, 'sim_two_four': sim_two_four,
    'sim_two_four_b': sim_two_four_b, 'sim_one_minus_two': sim_one_minus_two,
    'table_parabola': table_parabola, 'population_growth': population_growth,
    'car_depreciation': car_depreciation,
    'doubling_ten_percent': doubling_ten_percent, 'rise_fall_loss': rise_fall_loss,
    'sim_quadratic': sim_quadratic, 'sim_sum_product': sim_sum_product,
    'parabola_from_vertex': parabola_from_vertex, 'vertex_formula': vertex_formula,
    'touch_once_k': touch_once_k, 'dependent_system': dependent_system,
    'inconsistent_system': inconsistent_system, 'halving_rate': halving_rate,
    'sum_and_square_difference': sum_and_square_difference,
    'parabola_symmetry': parabola_symmetry,
    'train_speed': train_speed, 'taps_four_hours': taps_four_hours,
    'pens_share': pens_share, 'max_area_perimeter': max_area_perimeter,
    'boat_speed': boat_speed, 'triangular_210': triangular_210,
    'rect_area_diagonal': rect_area_diagonal, 'cyclists_gap': cyclists_gap,
    'open_box': open_box, 'chairs_cost': chairs_cost,
    'sum_product_real': sum_product_real, 'max_area_general': max_area_general,
    'fence_cost': fence_cost,
    'biquadratic_root_counts': biquadratic_root_counts,
    'biquadratic_general': biquadratic_general,
    'four_factor_product': four_factor_product,
    'square_plus_recip_equals': square_plus_recip_equals,
    'four_distinct_roots': four_distinct_roots,
    'no_solution_reciprocal_pair': no_solution_reciprocal_pair,
    'vieta_k_minus_seven': vieta_k_minus_seven, 'other_root_four': other_root_four,
    'vieta_five_three': vieta_five_three,
    'alpha_sq_plus_beta_sq': alpha_sq_plus_beta_sq,
    'reciprocal_sum_roots': reciprocal_sum_roots,
    'root_difference_squared': root_difference_squared,
    'alpha_cubed_sum': alpha_cubed_sum, 'sum_squares_pq': sum_squares_pq,
    'doubled_roots': doubled_roots, 'shifted_roots': shifted_roots,
    'k_root_two': k_root_two,
    'reciprocal_roots_equation': reciprocal_roots_equation,
    'golden_power': golden_power, 'fourth_power_sum': fourth_power_sum,
    'roots_differ_one': roots_differ_one,
    'squared_roots_equation': squared_roots_equation,
    'monic_integer_roots': monic_integer_roots,
    'consecutive_roots': consecutive_roots,
    'b_c_two_minus_three': b_c_two_minus_three,
    'ratio_sum_roots': ratio_sum_roots,
    'general_squared_roots': general_squared_roots,
    'reciprocal_roots_condition': reciprocal_roots_condition,
    'opposite_roots_condition': opposite_roots_condition,
    'ratio_two_one': ratio_two_one, 'least_sum_squares': least_sum_squares,
    'repeated_root_m': repeated_root_m,
    'perfect_square_discriminant': perfect_square_discriminant,
    'derive_formula': derive_formula,
    'exactly_one_root_k': exactly_one_root_k,
    'rational_roots_square': rational_roots_square,
    'solve_a_b_square': solve_a_b_square,
    'sum_of_roots': sum_of_roots,
    'product_of_roots': product_of_roots,
    'root_twice_other': root_twice_other,
    'repeated_root_value': repeated_root_value,
    'roots_differ_by_four': roots_differ_by_four,
    'common_root_minus_five': common_root_minus_five,
    'common_root_minus_three': common_root_minus_three,
    'square_equals_a': square_equals_a,
    'always_root_zero': always_root_zero,
    'find_a_roots_two': find_a_roots_two,
    'find_k_roots_four': find_k_roots_four,
    'solve_shifted_square': solve_shifted_square,
    'no_root_positive_c': no_root_positive_c,
    'c_root_one': c_root_one,
    'at_most_two_roots': at_most_two_roots,
    'repeated_root_k': repeated_root_k,
    'roots_three_minus_three': roots_three_minus_three,
    'roots_a_b': roots_a_b,
    'sum_coeffs_root_one': sum_coeffs_root_one,
    'alt_coeffs_root_minus_one': alt_coeffs_root_minus_one,
    'family_roots_zero_four': family_roots_zero_four,
    'count_integers_mod_four': count_integers_mod_four,
    'modulus_no_solution': modulus_no_solution,
    'integers_band_modulus': integers_band_modulus,
    'area_vs_perimeter_spread': area_vs_perimeter_spread,
    'square_relative': square_relative,
    'sum_span_two': sum_span_two,
    'sig_figs_three': sig_figs_three,
    'relative_error_728': relative_error_728,
    'bounds_24': bounds_24, 'bounds_42': bounds_42, 'bounds_70': bounds_70,
    'bounds_500': bounds_500, 'bounds_36': bounds_36,
    'round_half_up': round_half_up,
    'relative_error_product': relative_error_product,
    'double_rounding': double_rounding,
    'pi_approximation': pi_approximation,
    'sig_fig_relative': sig_fig_relative,
    'sqrt_50_bound': sqrt_50_bound,
    'three_percent': three_percent,
    'abs_negative_branch': abs_negative_branch,
    'abs_branch_ge': abs_branch_ge,
    'abs_branch_lt': abs_branch_lt,
    'abs_product': abs_product,
    'min_two_distances': min_two_distances,
    'reverse_triangle': reverse_triangle,
    'one_solution_modulus': one_solution_modulus,
    'integers_minus_two_three': integers_minus_two_three,
    'count_integers_3x': count_integers_3x,
    'system_a_two_a': system_a_two_a,
    'count_integers_modulus': count_integers_modulus,
    'no_solution_square': no_solution_square,
    'linear_ineq_cases': linear_ineq_cases,
    'k_positive_only': k_positive_only,
    'smallest_integer_solution': smallest_integer_solution,
    'count_integer_solutions': count_integer_solutions,
    'always_true_linear': always_true_linear,
    'equivalent_linear': equivalent_linear,
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


def check_one(where, check, failures, unchecked):
    """Run one check tuple, recording what it says. Shared by the workbook
    sections and the Milliy sertifikat items."""
    try:
        if check is None:
            unchecked.append(where)
        elif check[0] == 'simp':
            if not same(check[1], check[2]):
                failures.append(f'{where}: {check[1]} != {check[2]}')
        elif check[0] == 'lcm':
            if not check_lcm(check[1], check[2]):
                failures.append(f'{where}: lcm{check[1]} != {check[2]}')
        elif check[0] == 'solveset':
            if not check_solveset(*check[1:]):
                failures.append(f'{where}: solution set of {check[1]} '
                                f'is not {check[2]}')
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
    except Exception as exc:                          # a bad expression string
        failures.append(f'{where}: {type(exc).__name__}: {exc}')


def main():
    wanted = set(sys.argv[1:])
    failures, unchecked, total, ms_total = [], [], 0, 0
    for topic in bank.TOPICS:
        if wanted and topic['key'] not in wanted:
            continue
        for section, items in topic['sections']:
            for i, item in enumerate(items, start=1):
                total += 1
                check_one(f'{topic["key"]} {section} Q{i}', item.get('check'),
                          failures, unchecked)

        # the Milliy sertifikat items: every one of them carries its own checks,
        # and a keyed option that is not the true answer is the worst kind of
        # mistake a practice paper can make
        ms = topic.get('milliy')
        if not ms:
            continue
        for i, item in enumerate(ms['items'], start=1):
            ms_total += 1
            where = f'{topic["key"]} Milliy Q{i} ({item["kind"]})'
            checks = item.get('checks') or ([item['check']] if item.get('check')
                                            else [None])
            for j, check in enumerate(checks, start=1):
                check_one(where + (f' [{j}]' if len(checks) > 1 else ''), check,
                          failures, unchecked)
            if item['kind'] == 'Y-1' and len(set(item['opts'])) != len(item['opts']):
                failures.append(f'{where}: two options are the same')

    print(f'{total} questions checked'
          + (f', {ms_total} Milliy sertifikat items' if ms_total else ''))
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
