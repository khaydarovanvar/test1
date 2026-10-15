# -*- coding: utf-8 -*-
"""Questions for topic 27 of Grade 8 algebra — the quadratic equation and its roots."""

from .common import F, M, rt, sq

S = M
X2 = sq('x')


def eq(t):
    return S(t)


Q_FOCUS = [
    dict(q='Is ' + eq(f'{X2} − 3x + 2 = 0') + ' a quadratic equation?',
         a='Yes — the highest power is ' + S('2') + '.', check=None),
    dict(q='Write the coefficients of ' + eq(f'2{X2} − 5x + 3 = 0') + '.',
         a=S('a = 2, b = −5, c = 3'), check=('simp', '2-5+3', '0')),
    dict(q='Is ' + S('x = 1') + ' a root of ' + eq(f'{X2} − 3x + 2 = 0') + '?',
         a='Yes.', check=('simp', '1-3+2', '0')),
    dict(q='Is ' + S('x = 3') + ' a root of ' + eq(f'{X2} − 3x + 2 = 0') + '?',
         a='No — it gives ' + S('2') + '.', check=('simp', '9-9+2', '2')),
    dict(q='Solve ' + eq('(x − 2)(x − 5) = 0') + '.', a=S('x = 2') + ' or ' + S('x = 5'),
         check=('solveset', 'Eq((x-2)*(x-5), 0)', 'FiniteSet(2, 5)')),
    dict(q='Solve ' + eq('x(x − 4) = 0') + '.', a=S('x = 0') + ' or ' + S('x = 4'),
         check=('solveset', 'Eq(x*(x-4), 0)', 'FiniteSet(0, 4)')),
    dict(q='Solve ' + eq('(x + 1)(x + 6) = 0') + '.',
         a=S('x = −1') + ' or ' + S('x = −6'),
         check=('solveset', 'Eq((x+1)*(x+6), 0)', 'FiniteSet(-1, -6)')),
    dict(q='Solve ' + eq(f'{X2} − 9 = 0') + '.', a=S('x = ±3'),
         check=('solveset', 'Eq(x**2-9, 0)', 'FiniteSet(-3, 3)')),
    dict(q='Solve ' + eq(f'{X2} = 16') + '.', a=S('x = ±4'),
         check=('solveset', 'Eq(x**2, 16)', 'FiniteSet(-4, 4)')),
    dict(q='What is the leading coefficient of ' + eq(f'3 − {X2}') + '?', a=S('−1'),
         check=('simp', '-1', '-1')),
]

Q_PRACTICE = [
    dict(q='Solve ' + eq(f'{X2} − 5x + 6 = 0') + '.', a=S('x = 2') + ' or ' + S('x = 3'),
         check=('solveset', 'Eq(x**2-5*x+6, 0)', 'FiniteSet(2, 3)')),
    dict(q='Solve ' + eq(f'{X2} + 7x + 12 = 0') + '.',
         a=S('x = −3') + ' or ' + S('x = −4'),
         check=('solveset', 'Eq(x**2+7*x+12, 0)', 'FiniteSet(-3, -4)')),
    dict(q='Solve ' + eq(f'{X2} − x − 12 = 0') + '.',
         a=S('x = 4') + ' or ' + S('x = −3'),
         check=('solveset', 'Eq(x**2-x-12, 0)', 'FiniteSet(4, -3)')),
    dict(q='Solve ' + eq(f'{X2} + 2x − 15 = 0') + '.',
         a=S('x = 3') + ' or ' + S('x = −5'),
         check=('solveset', 'Eq(x**2+2*x-15, 0)', 'FiniteSet(3, -5)')),
    dict(q='Solve ' + eq(f'{X2} − 8x + 16 = 0') + '.', a=S('x = 4') + ' (repeated)',
         check=('solveset', 'Eq(x**2-8*x+16, 0)', 'FiniteSet(4)')),
    dict(q='Check whether ' + S('x = −2') + ' solves ' + eq(f'{X2} + 5x + 6 = 0') + '.',
         a='Yes.', check=('simp', '4-10+6', '0')),
    dict(q='Write ' + eq(f'3x = {X2} − 4') + ' in standard form.',
         a=eq(f'{X2} − 3x − 4 = 0'), check=('simp', 'x**2-3*x-4', 'x**2-3*x-4')),
    dict(q='Solve ' + eq(f'2{X2} − 8 = 0') + '.', a=S('x = ±2'),
         check=('solveset', 'Eq(2*x**2-8, 0)', 'FiniteSet(-2, 2)')),
    dict(q='Solve ' + eq(f'{X2} + x = 0') + '.', a=S('x = 0') + ' or ' + S('x = −1'),
         check=('solveset', 'Eq(x**2+x, 0)', 'FiniteSet(0, -1)')),
    dict(q='Solve ' + eq(f'{X2} − 4x = 0') + '.', a=S('x = 0') + ' or ' + S('x = 4'),
         check=('solveset', 'Eq(x**2-4*x, 0)', 'FiniteSet(0, 4)')),
]

Q_CHALLENGE = [
    dict(q='Solve ' + eq(f'2{X2} − 7x + 3 = 0') + '.',
         a=S('x = 3') + ' or ' + S('x = ' + F(1, 2)),
         check=('solveset', 'Eq(2*x**2-7*x+3, 0)', 'FiniteSet(3, Rational(1,2))')),
    dict(q='Solve ' + eq(f'3{X2} + 5x − 2 = 0') + '.',
         a=S('x = ' + F(1, 3)) + ' or ' + S('x = −2'),
         check=('solveset', 'Eq(3*x**2+5*x-2, 0)', 'FiniteSet(Rational(1,3), -2)')),
    dict(q='Solve ' + eq(f'{X2} − 2x − 8 = 0') + '.',
         a=S('x = 4') + ' or ' + S('x = −2'),
         check=('solveset', 'Eq(x**2-2*x-8, 0)', 'FiniteSet(4, -2)')),
    dict(q='Solve ' + eq(f'4{X2} − 12x + 9 = 0') + '.', a=S('x = ' + F(3, 2)),
         check=('solveset', 'Eq(4*x**2-12*x+9, 0)', 'FiniteSet(Rational(3,2))')),
    dict(q='Solve ' + eq('(2x − 1)(x + 3) = 0') + '.',
         a=S('x = ' + F(1, 2)) + ' or ' + S('x = −3'),
         check=('solveset', 'Eq((2*x-1)*(x+3), 0)', 'FiniteSet(Rational(1,2), -3)')),
    dict(q='Solve ' + eq(f'{X2} = 5x') + '.', a=S('x = 0') + ' or ' + S('x = 5'),
         check=('solveset', 'Eq(x**2, 5*x)', 'FiniteSet(0, 5)')),
    dict(q='Solve ' + eq('(x − 3)<sup>2</sup> = 4') + '.',
         a=S('x = 5') + ' or ' + S('x = 1'),
         check=('solveset', 'Eq((x-3)**2, 4)', 'FiniteSet(1, 5)')),
    dict(q='Solve ' + eq(f'{X2} + 6x + 9 = 0') + '.', a=S('x = −3'),
         check=('solveset', 'Eq(x**2+6*x+9, 0)', 'FiniteSet(-3)')),
    dict(q='For which ' + S('c') + ' is ' + S('x = 1') + ' a root of '
           + eq(f'{X2} − 4x + c = 0') + '?', a=S('c = 3'),
         check=('custom', 'c_root_one')),
    dict(q='Solve ' + eq('x(x + 2) = 15') + '.', a=S('x = 3') + ' or ' + S('x = −5'),
         check=('solveset', 'Eq(x*(x+2), 15)', 'FiniteSet(3, -5)')),
]

Q_BEYOND = [
    dict(q='Show that a quadratic equation can have at most two roots.',
         a='Two different roots already fix the factorisation.',
         check=('custom', 'at_most_two_roots'),
         sol='If p and q are roots of ax²+bx+c, then the polynomial equals a(x−p)(x−q). '
             'A third root r would need a(r−p)(r−q) = 0 with all three different, '
             'and a product of non-zero numbers is not zero.'),
    dict(q='Write a quadratic equation whose roots are ' + S('2') + ' and ' + S('5') + '.',
         a=eq(f'{X2} − 7x + 10 = 0'),
         check=('solveset', 'Eq(x**2-7*x+10, 0)', 'FiniteSet(2, 5)'),
         sol='Use (x−2)(x−5) = 0 and expand. Any non-zero multiple works too, so the '
             'equation is not unique — only its roots are.'),
    dict(q='For which ' + S('k') + ' has ' + eq(f'{X2} + kx + 9 = 0')
           + ' a repeated root?', a=S('k = ±6'), check=('custom', 'repeated_root_k'),
         sol='A repeated root needs the left side to be a perfect square, (x ± 3)², '
             'which expands to x² ± 6x + 9. So k = 6 or k = −6.'),
    dict(q='Solve ' + eq(f'{sq("x", 4)} − 5{X2} + 4 = 0') + '.', a=S('x = ±1, ±2'),
         check=('solveset', 'Eq(x**4-5*x**2+4, 0)', 'FiniteSet(-2,-1,1,2)'),
         sol='Put t = x². Then t² − 5t + 4 = 0 gives t = 1 or t = 4, so x² = 1 or 4 and '
             'each gives two values of x.'),
    dict(q='Solve ' + eq(f'({X2} − 1)({X2} − 4) = 0') + '.', a=S('x = ±1, ±2'),
         check=('solveset', 'Eq((x**2-1)*(x**2-4), 0)', 'FiniteSet(-2,-1,1,2)'),
         sol='A product is zero when a factor is, and each factor is a difference of two '
             'squares. The same four roots as the question before, reached directly.'),
    dict(q='If ' + eq(f'{X2} + bx + c = 0') + ' has roots ' + S('3') + ' and '
           + S('−3') + ', find ' + S('b') + ' and ' + S('c') + '.',
         a=S('b = 0') + ', ' + S('c = −9'), check=('custom', 'roots_three_minus_three'),
         sol='The equation must be (x−3)(x+3) = x² − 9. Opposite roots always give '
             'b = 0 — the two cancel in the sum.'),
    dict(q='Solve ' + eq(f'{X2} − (a + b)x + ab = 0') + '.',
         a=S('x = a') + ' or ' + S('x = b'), check=('custom', 'roots_a_b'),
         sol="The left side factorises as (x−a)(x−b). This is Vieta's theorem read "
             "backwards, and it is why factorising works at all."),
    dict(q='Solve ' + eq(f'{X2} = x + 6') + '.', a=S('x = 3') + ' or ' + S('x = −2'),
         check=('solveset', 'Eq(x**2, x+6)', 'FiniteSet(3, -2)'),
         sol='Bring everything to one side first: x² − x − 6 = 0. Never divide by x — '
             'that loses a root whenever 0 is one.'),
    dict(q='Prove that if ' + S('a + b + c = 0') + ' then ' + S('x = 1')
           + ' is a root of ' + eq(f'a{X2} + bx + c = 0') + '.', a=S('x = 1'),
         check=('custom', 'sum_coeffs_root_one'),
         sol='Substituting x = 1 gives a + b + c, which is 0 by assumption. '
             'A fast check: 3x² − 5x + 2 = 0 has coefficients summing to 0, so 1 is a root.'),
    dict(q='Prove that if ' + S('a − b + c = 0') + ' then ' + S('x = −1')
           + ' is a root of ' + eq(f'a{X2} + bx + c = 0') + '.', a=S('x = −1'),
         check=('custom', 'alt_coeffs_root_minus_one'),
         sol='Substituting x = −1 gives a − b + c = 0. The companion to the question '
             'before, and together they catch most factorisable quadratics by eye.'),
    dict(q='Find every quadratic equation with roots ' + S('0') + ' and ' + S('4') + '.',
         a=S('k·x(x − 4) = 0') + ' for any ' + S('k ≠ 0'),
         check=('custom', 'family_roots_zero_four'),
         sol='Roots determine the equation only up to a non-zero multiple: '
             'x² − 4x = 0, 2x² − 8x = 0 and so on all have exactly these roots.'),
    dict(q='Solve ' + eq('|x|<sup>2</sup> − 3|x| + 2 = 0') + '.', a=S('x = ±1, ±2'),
         check=('solveset', 'Eq(Abs(x)**2-3*Abs(x)+2, 0)', 'FiniteSet(-2,-1,1,2)'),
         sol='Put t = |x| ≥ 0: t² − 3t + 2 = 0 gives t = 1 or 2, and each positive t '
             'gives two values of x.'),
    dict(q='Solve ' + eq(f'{X2} + ' + F(1, X2) + ' = 2') + '.', a=S('x = ±1'),
         check=('solveset', 'Eq(x**2 + 1/x**2, 2)', 'FiniteSet(-1, 1)'),
         sol='With t = x² > 0 the equation is t + 1/t = 2, whose only solution is t = 1. '
             'So x² = 1 and x = ±1.'),
    dict(q='How many real solutions has ' + eq(f'{X2} = −1') + '?', a='None.',
         check=('solveset', 'Eq(x**2, -1)', 'S.EmptySet'),
         sol='A square is never negative. (In Grade 10 the complex numbers supply two '
             'solutions, but not among the reals.)'),
    dict(q='Solve ' + eq('(x − 1)(x − 2)(x − 3) = 0') + ' and say why it is not a '
           'quadratic.', a=S('x = 1, 2, 3') + ' — it is a cubic',
         check=('solveset', 'Eq((x-1)*(x-2)*(x-3), 0)', 'FiniteSet(1, 2, 3)'),
         sol='Three roots force degree at least 3, so the equation cannot be quadratic — '
             'which matches the at-most-two-roots result above.'),
]

TOPIC = dict(
    key='alg-27', number=27, unit='Unit 5 · Quadratic equations', lessons='62–63',
    title='The quadratic equation and its roots',
    subtitle='The first equation of the course that can have two answers, one, or none '
             'at all.',
    uz='Algebra 8, Chapter III §20, pp. 122–128', cam='Cambridge Stage 9 · beyond',
    keywords=['quadratic equation', 'root of an equation', 'coefficient',
              'leading coefficient', 'free term (constant)', 'factorise',
              'zero product rule', 'parabola', 'substitute and check'],
    remember=[
        'Standard form first: <span class="m">ax<sup>2</sup> + bx + c = 0</span> with '
        '<span class="m">a ≠ 0</span>.',
        'The zero product rule: if <span class="m">AB = 0</span> then '
        '<span class="m">A = 0</span> or <span class="m">B = 0</span>. It needs the '
        '<b>zero</b> on the right.',
        'Never divide both sides by <span class="m">x</span> — that throws away the '
        'root <span class="m">x = 0</span>.',
        'A quadratic has at most two roots, and a repeated root counts once.',
        'Check a root by substituting; it costs seconds and catches a sign error.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
