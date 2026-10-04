#!/usr/bin/env python3
"""Check every answer in the workbook question bank with sympy.

Run this before building the PDF. A workbook with a wrong answer in the back is
worse than no workbook, so nothing is taken on trust: algebraic answers are
compared symbolically, and the olympiad questions whose answers are sets or
numbers are checked by their own routine below.
"""

import sys
import os

from sympy import (Rational, Symbol, cancel, denom, expand, factor_list, lcm,
                   nsimplify, simplify, sympify, together)

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import questions as bank

a, b, c, k, m, n, x, y = [Symbol(s) for s in 'abckmnxy']
SYMS = dict(a=a, b=b, c=c, k=k, m=m, n=n, x=x, y=y)


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


# ---------------------------------------------------------------- custom ----

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
