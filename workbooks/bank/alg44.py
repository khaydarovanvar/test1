# -*- coding: utf-8 -*-
"""Questions for topic 44 of Grade 8 algebra — Control work 8, the annual review."""

from .common import F, M, rt, sq

S = M
X2, X3 = sq('x'), sq('x', 3)

Q_FOCUS = [
    dict(q='Simplify ' + S('3(2x − 5) − 4(x − 3)') + '.', a=S('2x − 3'),
         check=('simp', '3*(2*x-5)-4*(x-3)', '2*x-3')),
    dict(q='Solve ' + S('5x − 7 = 3x + 9') + '.', a=S('x = 8'),
         check=('solveset', 'Eq(5*x-7, 3*x+9)', 'FiniteSet(8)')),
    dict(q='Factorise ' + S(f'{X2} − 49') + '.', a=S('(x − 7)(x + 7)'),
         check=('simp', 'x**2-49', '(x-7)*(x+7)')),
    dict(q='Simplify ' + S(F(f'6{X2}', '9x')) + '.', a=S(F('2x', 3)),
         check=('simp', '6*x**2/(9*x)', '2*x/3')),
    dict(q='Simplify ' + S(rt(50)) + '.', a=S('5' + rt(2)),
         check=('simp', 'sqrt(50)', '5*sqrt(2)')),
    dict(q='Solve ' + S(f'{X2} = 81') + '.', a=S('x = ±9'),
         check=('solveset', 'Eq(x**2, 81)', 'FiniteSet(-9, 9)')),
    dict(q='Find the ' + S('n') + 'th term of ' + S('7, 12, 17, 22, …') + '.',
         a=S('5n + 2'), check=('simp', '5*n+2', '5*n+2')),
    dict(q='Find the gradient of the line through ' + S('(0, 4)') + ' and '
           + S('(3, 13)') + '.', a=S('3'), check=('simp', '(13-4)/3', '3')),
    dict(q='Find the mean of ' + S('6, 9, 11, 14') + '.', a=S('10'),
         check=('simp', '(6+9+11+14)/4', '10')),
    dict(q='A die is rolled. Find ' + S('P(at least 5)') + '.', a=S(F(1, 3)),
         check=('simp', 'Rational(2,6)', 'Rational(1,3)')),
]

Q_PRACTICE = [
    dict(q='Expand and simplify ' + S('(2x − 3)(x + 5)') + '.',
         a=S(f'2{X2} + 7x − 15'), check=('simp', '(2*x-3)*(x+5)', '2*x**2+7*x-15')),
    dict(q='Factorise ' + S(f'{X2} − 5x − 14') + '.', a=S('(x − 7)(x + 2)'),
         check=('simp', 'x**2-5*x-14', '(x-7)*(x+2)')),
    dict(q='Solve ' + S(f'{X2} − 5x − 14 = 0') + '.', a=S('x = 7') + ' or '
           + S('x = −2'),
         check=('solveset', 'Eq(x**2-5*x-14, 0)', 'FiniteSet(7, -2)')),
    dict(q='Simplify ' + S(F(f'{X2} − 9', f'{X2} + 3x')) + '.',
         a=S(F('x − 3', 'x')),
         check=('simp', '(x**2-9)/(x**2+3*x)', '(x-3)/x')),
    dict(q='Simplify ' + S(rt(12) + ' + ' + rt(27)) + '.', a=S('5' + rt(3)),
         check=('simp', 'sqrt(12)+sqrt(27)', '5*sqrt(3)')),
    dict(q='Rationalise ' + S(F(6, rt(3))) + '.', a=S('2' + rt(3)),
         check=('simp', '6/sqrt(3)', '2*sqrt(3)')),
    dict(q='Solve ' + S('3x − 2 < 10') + '.', a=S('x < 4'),
         check=('solveset', '3*x-2 < 10', 'Interval.open(-oo, 4)')),
    dict(q='Solve the pair ' + S('x + y = 9') + ', ' + S('x − y = 1') + '.',
         a=S('x = 5') + ', ' + S('y = 4'), check=('custom', 'pair_9_1')),
    dict(q='Share ' + S('96') + ' in the ratio ' + S('5 : 7') + '.',
         a=S('40') + ' and ' + S('56'), check=('simp', '96*5/12', '40')),
    dict(q='Two coins are tossed. Find ' + S('P(at least one tail)') + '.',
         a=S(F(3, 4)), check=('simp', '1-Rational(1,4)', 'Rational(3,4)')),
]

Q_CHALLENGE = [
    dict(q='Solve ' + S(f'2{X2} + 5x − 3 = 0') + '.',
         a=S('x = ' + F(1, 2)) + ' or ' + S('x = −3'),
         check=('solveset', 'Eq(2*x**2+5*x-3, 0)',
                'FiniteSet(Rational(1,2), -3)')),
    dict(q='Simplify ' + S(F(1, 'x − 2') + ' − ' + F(1, 'x + 2')) + '.',
         a=S(F(4, f'{X2} − 4')),
         check=('simp', '1/(x-2)-1/(x+2)', '4/(x**2-4)')),
    dict(q='Solve ' + S(F(1, 'x') + ' + ' + F(1, 'x + 3') + ' = ' + F(1, 2)) + '.',
         a=S('x = 3') + ' or ' + S('x = −2'),
         check=('solveset', 'Eq(1/x + 1/(x+3), Rational(1,2))',
                'FiniteSet(3, -2)')),
    dict(q='Find the equation of the line through ' + S('(1, 1)') + ' and '
           + S('(4, 10)') + '.', a=S('y = 3x − 2'), check=('custom', 'line_1_1_4_10')),
    dict(q='Simplify ' + S('(' + rt(5) + ' + ' + rt(2) + ')(' + rt(5) + ' − '
                           + rt(2) + ')') + '.', a=S('3'),
         check=('simp', '(sqrt(5)+sqrt(2))*(sqrt(5)-sqrt(2))', '3')),
    dict(q='The mean of ' + S('7') + ' numbers is ' + S('12') + '. Removing one '
           'leaves mean ' + S('13') + '. Which number went?', a=S('6'),
         check=('solveset', 'Eq((7*12-x)/6, 13)', 'FiniteSet(6)')),
    dict(q='A price falls by ' + S('15%') + ' to ' + S('340 000')
           + ' so‘m. Find the original price.', a=S('400 000') + ' so‘m',
         check=('solveset', 'Eq(Rational(85,100)*x, 340000)',
                'FiniteSet(400000)')),
    dict(q='How many four-digit numbers have all digits different?', a=S('4536'),
         check=('simp', '9*9*8*7', '4536')),
    dict(q='A bag has ' + S('4') + ' red and ' + S('5') + ' blue balls. Two are drawn '
           'without replacement. Find ' + S('P(both the same colour)') + '.',
         a=S(F(4, 9)),
         check=('simp', '(binomial(4,2)+binomial(5,2))/binomial(9,2)',
                'Rational(4,9)')),
    dict(q='Solve ' + S(f'{X2} − 6x + 5 ≤ 0') + '.', a=S('1 ≤ x ≤ 5'),
         check=('solveset', 'x**2-6*x+5 <= 0', 'Interval(1, 5)')),
]

Q_BEYOND = [
    dict(q='Find all real ' + S('x') + ' with ' + S(f'{X2} + ' + F(1, X2) + ' = '
                                                    + '7') + '.',
         a=S('x + ' + F(1, 'x') + ' = ±3') + ', giving '
           + S('x = ' + F('±3 ± ' + rt(5), 2)),
         check=('custom', 'x_sq_plus_inv_seven')),
    dict(q='Prove that ' + S(f'{X3} − x') + ' is a multiple of ' + S('6')
           + ' for every whole ' + S('x') + '.',
         a=S('(x − 1)x(x + 1)') + ' — three consecutive numbers, so one is even and '
           'one is a multiple of ' + S('3') + '.',
         check=('custom', 'cube_minus_n_six')),
    dict(q='Find the smallest positive value of ' + S('x + ' + F(9, 'x'))
           + ' for ' + S('x > 0') + '.', a=S('6') + ' at ' + S('x = 3'),
         check=('nonneg', 'xpos + 9/xpos - 6', 'pos')),
    dict(q='Solve ' + S('|2x − 5| = 7') + '.', a=S('x = 6') + ' or ' + S('x = −1'),
         check=('solveset', 'Eq(Abs(2*x-5), 7)', 'FiniteSet(6, -1)')),
    dict(q='The sum of three consecutive even numbers is a quarter of their '
           'product. Find them.', a=S('2, 4, 6') + ' — sum ' + S('12')
           + ', product ' + S('48') + '.',
         check=('custom', 'three_consecutive_even_quarter')),
    dict(q='Find all pairs of whole numbers with ' + S('xy = x + y + 3') + '.',
         a=S('(2, 5), (3, 3), (5, 2), (0, −3), (−1, −1)') + ' and ' + S('(−3, 0)')
           + ' — write it as ' + S('(x − 1)(y − 1) = 4') + '.',
         check=('custom', 'xy_equals_sum_three')),
    dict(q='Simplify ' + S(F(1, '1 · 2') + ' + ' + F(1, '2 · 3') + ' + … + '
                           + F(1, '49 · 50')) + '.', a=S(F(49, 50)),
         check=('custom', 'telescope_fifty')),
    dict(q='A line of gradient ' + S('m') + ' through ' + S('(0, 2)')
           + ' meets the curve ' + S(f'y = {X2}') + ' exactly once. Find ' + S('m')
           + '.', a='No real ' + S('m') + ' does: the line always meets it twice, '
           'because ' + S('2') + ' is above the vertex.',
         check=('custom', 'line_meets_parabola_once')),
    dict(q='Eight different positive whole numbers have mean ' + S('10')
           + '. How large can the largest be, and what are the other seven then?',
         a=S('52') + ', with ' + S('1, 2, 3, 4, 5, 6, 7') + ' below it.',
         check=('custom', 'eight_distinct_mean_ten')),
    dict(q='Find the probability that two numbers chosen at random from ' + S('1')
           + ' to ' + S('20') + ', without replacement, have a sum divisible by '
           + S('4') + '.', a=S(F(9, 38)), check=('custom', 'p_sum_div4_twenty')),
    dict(q='Solve ' + S(F('x', 'x − 1') + ' + ' + F('x − 1', 'x') + ' = '
                        + F(5, 2)) + '.', a=S('x = 2') + ' or ' + S('x = −1'),
         check=('solveset', 'Eq(x/(x-1) + (x-1)/x, Rational(5,2))',
                'FiniteSet(2, -1)')),
    dict(q='For which whole ' + S('n') + ' from ' + S('1') + ' to ' + S('50')
           + ' is ' + S('2<sup>n</sup> + 1') + ' a multiple of ' + S('3') + '?',
         a='Every odd ' + S('n') + '.', check=('custom', 'two_pow_plus_one_div3')),
    dict(q='A rectangle has perimeter ' + S('34') + ' cm and area ' + S('60')
           + ' cm². Find its diagonal.', a=S('13') + ' cm',
         check=('custom', 'rectangle_diagonal_13')),
    dict(q='Three positive numbers have sum ' + S('12') + ' and the sum of their '
           'squares is ' + S('56') + '. Find the sum of their products in pairs.',
         a=S('44'), check=('simp', '(144-56)/2', '44')),
    dict(q='Prove that ' + S(f'{X2} + x + 1') + ' is never a multiple of ' + S('5')
           + ' for whole ' + S('x') + '.',
         a='Checking ' + S('x = 0, 1, 2, 3, 4') + ' gives remainders '
           + S('1, 3, 2, 3, 1') + ' — never ' + S('0') + '.',
         check=('custom', 'x_sq_x_one_mod5')),
]

TOPIC = dict(
    key='alg-44', number=44, unit='Unit 7 · Annual revision', lessons='101–102',
    title='Revision · Control work 8 — the whole year',
    subtitle='One question from every chapter, in the order they will come, with the '
             'year&rsquo;s hardest ideas waiting at the end.',
    uz='Algebra 8, revision of the whole course', cam='Cambridge Stage 9 · review',
    keywords=['annual review', 'control work', 'expand', 'factorise', 'solve',
              'simplify', 'surd', 'quadratic', 'inequality', 'sequence', 'graph',
              'ratio', 'average', 'probability'],
    remember=[
        'Read the instruction word. <em>Simplify</em>, <em>factorise</em>, '
        '<em>expand</em> and <em>solve</em> ask for four different things, and marks '
        'go for the one that was asked.',
        'With a fraction equation, multiply up by the common denominator — then check '
        'every root against the denominators.',
        'Quadratics: standard form, then common factor, then factorise, then the '
        'formula. The discriminant answers &ldquo;how many roots&rdquo; on its own.',
        'Surds: take out the largest square factor, and rationalise by multiplying '
        'top and bottom by the conjugate.',
        'Statistics: find the total first. Probability: '
        '<span class="m">1 −</span> the opposite is usually shorter.',
        'Leave the working on the page. A wrong answer with clear working still '
        'collects most of the marks.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
