# -*- coding: utf-8 -*-
"""Questions for topic 40 of Grade 8 algebra — revision of sequences and functions."""

from .common import F, M, rt, sq

S = M
X2, N2 = sq('x'), sq('n')

Q_FOCUS = [
    dict(q='Write the next two terms of ' + S('3, 7, 11, 15, …') + '.',
         a=S('19, 23'), check=('simp', '15+4+4', '23')),
    dict(q='Find the ' + S('n') + 'th term of ' + S('3, 7, 11, 15, …') + '.',
         a=S('4n − 1'), check=('simp', '4*n-1', '4*n-1')),
    dict(q='Find the ' + S('10') + 'th term of ' + S('4n − 1') + '.', a=S('39'),
         check=('simp', '4*10-1', '39')),
    dict(q='Which term of ' + S('4n − 1') + ' equals ' + S('99') + '?', a=S('n = 25'),
         check=('solveset', 'Eq(4*n-1, 99)', 'FiniteSet(25)', 'n')),
    dict(q='Find the ' + S('n') + 'th term of ' + S('20, 17, 14, 11, …') + '.',
         a=S('23 − 3n'), check=('simp', '23-3*n', '23-3*n')),
    dict(q='If ' + S('f(x) = 2x + 5') + ', find ' + S('f(4)') + '.', a=S('13'),
         check=('simp', '2*4+5', '13')),
    dict(q='If ' + S('f(x) = 2x + 5') + ', solve ' + S('f(x) = 0') + '.',
         a=S('x = −2.5'),
         check=('solveset', 'Eq(2*x+5, 0)', 'FiniteSet(Rational(-5,2))')),
    dict(q='If ' + S(f'g(x) = {X2} − 3') + ', find ' + S('g(−4)') + '.', a=S('13'),
         check=('simp', '(-4)**2-3', '13')),
    dict(q='Write the next two terms of ' + S('1, 4, 9, 16, …') + '.',
         a=S('25, 36'), check=('simp', '5**2+6**2', '61')),
    dict(q='Find the ' + S('n') + 'th term of ' + S('2, 4, 8, 16, …') + '.',
         a=S('2<sup>n</sup>'), check=('simp', '2**n', '2**n')),
]

Q_PRACTICE = [
    dict(q='Find the ' + S('n') + 'th term of ' + S('5, 11, 17, 23, …') + ' and then '
           'the ' + S('50') + 'th term.', a=S('6n − 1') + ', so ' + S('299'),
         check=('simp', '6*50-1', '299')),
    dict(q='The ' + S('n') + 'th term of a sequence is ' + S(f'{N2} + n')
           + '. Find the first three terms.', a=S('2, 6, 12'),
         check=('simp', '1+1 + (4+2) + (9+3)', '20')),
    dict(q='A sequence starts ' + S('2') + ' and each term is ' + S('3')
           + ' times the one before. Find the ' + S('5') + 'th term.', a=S('162'),
         check=('simp', '2*3**4', '162')),
    dict(q='If ' + S('f(x) = 3x − 7') + ', find ' + S('x') + ' when ' + S('f(x) = 14')
           + '.', a=S('x = 7'), check=('solveset', 'Eq(3*x-7, 14)', 'FiniteSet(7)')),
    dict(q='If ' + S(f'f(x) = {X2} − 2x') + ', find ' + S('f(5) − f(3)') + '.',
         a=S('12'), check=('simp', '(25-10)-(9-6)', '12')),
    dict(q='Find the ' + S('n') + 'th term of ' + S('1, 3, 6, 10, 15, …') + '.',
         a=S(F('n(n + 1)', 2)), check=('simp', 'n*(n+1)/2', 'n*(n+1)/2')),
    dict(q='A sequence has ' + S('n') + 'th term ' + S('50 − 4n')
           + '. Which is the first negative term?', a=S('n = 13') + ', giving '
           + S('−2'), check=('bool', '(50-4*12 > 0) & (50-4*13 < 0)')),
    dict(q='If ' + S('f(x) = ' + F(12, 'x')) + ', find ' + S('f(3) + f(4)') + '.',
         a=S('7'), check=('simp', '12/3 + 12/4', '7')),
    dict(q='The ' + S('n') + 'th term of a sequence is ' + S(f'2{N2} − 1')
           + '. Is ' + S('49') + ' a term?', a='Yes — ' + S('n = 5'),
         check=('solveset', 'Eq(2*n**2-1, 49)', 'FiniteSet(5, -5)', 'n')),
    dict(q='Find the ' + S('n') + 'th term of ' + S('3, 6, 12, 24, …') + '.',
         a=S('3 × 2<sup>n−1</sup>'), check=('simp', '3*2**(n-1)', '3*2**(n-1)')),
]

Q_CHALLENGE = [
    dict(q='Find the ' + S('n') + 'th term of ' + S('2, 6, 12, 20, 30, …') + '.',
         a=S('n(n + 1)'), check=('simp', 'n*(n+1)', 'n**2+n')),
    dict(q='The ' + S('n') + 'th term of a sequence is ' + S(f'{N2} − 10n + 21')
           + '. For which ' + S('n') + ' is the term negative?',
         a=S('n = 4, 5, 6'),
         check=('bool', '(16-40+21 < 0) & (36-60+21 < 0) & (49-70+21 >= 0)')),
    dict(q='A sequence is ' + S('a, a + d, a + 2d, …') + '. Its ' + S('4')
           + 'th term is ' + S('17') + ' and its ' + S('9') + 'th is ' + S('42')
           + '. Find ' + S('a') + ' and ' + S('d') + '.',
         a=S('a = 2') + ', ' + S('d = 5'), check=('custom', 'ap_4_9')),
    dict(q='If ' + S('f(x) = 2x + 1') + ', solve ' + S('f(f(x)) = 13') + '.',
         a=S('x = 2.5'),
         check=('solveset', 'Eq(2*(2*x+1)+1, 13)', 'FiniteSet(Rational(5,2))')),
    dict(q='If ' + S(f'f(x) = {X2} + bx + 3') + ' and ' + S('f(2) = 1')
           + ', find ' + S('b') + '.', a=S('b = −3'),
         check=('solveset', 'Eq(4+2*b+3, 1)', 'FiniteSet(-3)', 'b')),
    dict(q='Find the sum of the first ' + S('20') + ' terms of ' + S('3, 7, 11, …')
           + '.', a=S('820'), check=('simp', '20*(3+79)/2', '820')),
    dict(q='A sequence satisfies ' + S('u₁ = 3') + ' and ' + S('uₙ₊₁ = 2uₙ − 1')
           + '. Find ' + S('u₄') + '.', a=S('17'),
         check=('custom', 'recurrence_double_minus_one')),
    dict(q='For which ' + S('n') + ' is ' + S('3n + 2') + ' a multiple of '
           + S('5') + '? Give the first three.', a=S('n = 1, 6, 11'),
         check=('custom', 'three_n_plus_two_mult5')),
    dict(q='The ' + S('n') + 'th term of a sequence is ' + S(F('n', 'n + 1'))
           + '. Which term first exceeds ' + S('0.95') + '?', a=S('n = 20'),
         check=('bool', '(Rational(19,20) <= Rational(19,20)) & '
                        '(Rational(20,21) > Rational(19,20))')),
    dict(q='A function is ' + S(f'f(x) = {X2} − 6x + 11')
           + '. Find its smallest value and where it occurs.',
         a=S('2') + ' at ' + S('x = 3'),
         check=('nonneg', 'x**2-6*x+11-2')),
]

Q_BEYOND = [
    dict(q='Find the ' + S('n') + 'th term of ' + S('1, 5, 14, 30, 55, …')
           + ' (the sums of the square numbers).',
         a=S(F('n(n + 1)(2n + 1)', 6)),
         check=('simp', 'n*(n+1)*(2*n+1)/6', 'n*(n+1)*(2*n+1)/6')),
    dict(q='Prove that the sum of the first ' + S('n') + ' odd numbers is '
           + S(sq('n')) + '.',
         a='The ' + S('k') + 'th odd number is ' + S('2k − 1')
           + '; the sum is ' + S('2 · ' + F('n(n+1)', 2) + ' − n = ' + sq('n')) + '.',
         check=('custom', 'sum_odd_squares')),
    dict(q='A sequence has ' + S('u₁ = 1') + ' and ' + S('uₙ₊₁ = uₙ + 2n')
           + '. Find a formula for ' + S('uₙ') + '.',
         a=S(sq('n') + ' − n + 1'), check=('custom', 'recurrence_plus_2n')),
    dict(q='The Fibonacci numbers are ' + S('1, 1, 2, 3, 5, 8, …')
           + '. Show that ' + S('F₁ + F₂ + … + Fₙ = Fₙ₊₂ − 1') + ' for '
           + S('n = 1') + ' to ' + S('10') + '.',
         a='Each partial sum is two places further on, less ' + S('1')
           + '; e.g. ' + S('1+1+2+3+5 = 12 = 13 − 1') + '.',
         check=('custom', 'fib_partial_sums')),
    dict(q='For which ' + S('n') + ' is ' + S(f'{N2} + n') + ' divisible by '
           + S('3') + '? Describe them all.',
         a='When ' + S('n') + ' is a multiple of ' + S('3')
           + ' or leaves remainder ' + S('2') + '; that is, never when '
           + S('n ≡ 1 (mod 3)') + '.', check=('custom', 'n_sq_plus_n_div3')),
    dict(q='A sequence of positive whole numbers has ' + S('u₁ = 5')
           + ' and each later term is the sum of the squares of the digits of the one '
           'before. Find ' + S('u₇') + '.',
         a=S('42') + ' — the chain runs ' + S('5, 25, 29, 85, 89, 145, 42')
           + ' and then enters the cycle ' + S('42, 20, 4, 16, 37, 58, 89, 145')
           + '.',
         check=('custom', 'digit_square_chain')),
    dict(q='The ' + S('n') + 'th term of a sequence is ' + S(F('3n + 1', 'n + 2'))
           + '. Show every term is less than ' + S('3') + ' and find how close it '
           'gets.', a=S('3 − ' + F(5, 'n + 2')) + ', which rises towards '
           + S('3') + ' but never reaches it.',
         check=('simp', '(3*n+1)/(n+2)', '3 - 5/(n+2)')),
    dict(q='An arithmetic sequence starts at ' + S('11') + ' and goes up in steps of '
           + S('d') + ', a positive whole number. For which ' + S('d')
           + ' does it contain ' + S('23') + ' but not ' + S('17') + '?',
         a=S('d = 4') + ' or ' + S('d = 12') + ' — ' + S('d')
           + ' must divide ' + S('12') + ' without dividing ' + S('6') + '.',
         check=('custom', 'ap_contains_11_23_not17')),
    dict(q='If ' + S('f(x) = ' + F('x', 'x + 1')) + ', find '
           + S('f(f(f(x)))') + ' in its simplest form.',
         a=S(F('x', '3x + 1')),
         check=('custom', 'thrice_x_over_x_plus_one')),
    dict(q='Show that ' + S(f'{N2} + n') + ' is always even.',
         a=S('n(n + 1)') + ' is a product of consecutive whole numbers, so one factor '
           'is even.', check=('custom', 'n_sq_plus_n_even')),
    dict(q='A sequence doubles and adds ' + S('1') + ' each step, starting at '
           + S('1') + '. Find a closed formula and the ' + S('10') + 'th term.',
         a=S('2<sup>n</sup> − 1') + ', so ' + S('1023'),
         check=('custom', 'double_plus_one')),
    dict(q='The sum of the first ' + S('n') + ' terms of a sequence is '
           + S(f'{N2} + 2n') + '. Find the ' + S('n') + 'th term.',
         a=S('2n + 1'),
         check=('simp', '(n**2+2*n) - ((n-1)**2+2*(n-1))', '2*n+1')),
    dict(q='Find every whole ' + S('n') + ' from ' + S('1') + ' to ' + S('100')
           + ' for which ' + S(F(f'{N2} + 1', 'n + 1')) + ' is a whole number.',
         a=S('n = 1') + ' only.', check=('custom', 'n_sq_plus_one_over_n_plus_one')),
    dict(q='A function satisfies ' + S('f(x) + 2f(1 − x) = 3x') + ' for every '
           + S('x') + '. Find ' + S('f(x)') + '.', a=S('f(x) = 2 − 3x'),
         check=('custom', 'functional_two_minus_x')),
    dict(q='Three consecutive terms of an arithmetic sequence have sum ' + S('36')
           + ' and product ' + S('1536') + '. Find them.',
         a=S('8, 12, 16') + ' (or that order reversed).',
         check=('custom', 'ap_sum36_prod1536')),
]

TOPIC = dict(
    key='alg-40', number=40, unit='Unit 7 · Annual revision', lessons='91–93',
    title='Revision · Sequences, the nth term and functions',
    subtitle='Everything from the first quarter of the year brought back: the pattern, '
             'the rule, and the value a rule gives.',
    uz='Algebra 8, lessons 91–93', cam='Cambridge Stage 9 · 2.1, 3.1',
    keywords=['sequence', 'term', 'nth term', 'arithmetic', 'geometric', 'common '
              'difference', 'common ratio', 'function', 'f(x)', 'substitute',
              'inverse', 'recurrence'],
    remember=[
        'A sequence that goes up by the same amount each time has '
        '<span class="m">n</span>th term <span class="m">dn + c</span>, where '
        '<span class="m">d</span> is the step and <span class="m">c</span> is the '
        '&ldquo;term zero&rdquo; you would have had before the first.',
        'A sequence that multiplies by the same amount has '
        '<span class="m">n</span>th term <span class="m">ar<sup>n−1</sup></span>.',
        'Second differences constant means the rule is quadratic: half the second '
        'difference is the coefficient of <span class="m">n<sup>2</sup></span>.',
        '<span class="m">f(4)</span> means substitute; '
        '<span class="m">f(x) = 4</span> means solve.',
        'For the <span class="m">n</span>th term from a sum: '
        '<span class="m">u<sub>n</sub> = S<sub>n</sub> − S<sub>n−1</sub></span>.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
