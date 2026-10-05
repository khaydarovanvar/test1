#!/usr/bin/env python3
"""Check every answer in the workbook question bank with sympy.

Run this before building the PDF. A workbook with a wrong answer in the back is
worse than no workbook, so nothing is taken on trust: algebraic answers are
compared symbolically, and the olympiad questions whose answers are sets or
numbers are checked by their own routine below.
"""

import sys
import os

from sympy import (Integer, Rational, Symbol, cancel, expand, lcm, pi,
                   preorder_traversal, simplify, solve, sqrt, sympify, together)

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bank

a, b, c, h, k, m, n, r, x, y, z = [Symbol(s) for s in 'abchkmnrxyz']
A, d = Symbol('A'), Symbol('d')
SYMS = dict(a=a, b=b, c=c, d=d, h=h, k=k, m=m, n=n, r=r, x=x, y=y, z=z, A=A,
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
