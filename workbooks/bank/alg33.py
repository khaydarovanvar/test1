# -*- coding: utf-8 -*-
"""Questions for topic 33 of Grade 8 algebra — percentages, simultaneous equations,
quadratic graphs."""

from .common import F, M, rt, sq

S = M
X2 = sq('x')

Q_FOCUS = [
    dict(q='Increase ' + S('200') + ' by ' + S('10%') + '.', a=S('220'),
         check=('simp', '200*Rational(11,10)', '220')),
    dict(q='Decrease ' + S('500') + ' by ' + S('20%') + '.', a=S('400'),
         check=('simp', '500*Rational(8,10)', '400')),
    dict(q='What multiplier increases by ' + S('5%') + '?', a=S('1.05'),
         check=('simp', 'Rational(105,100)', 'Rational(21,20)')),
    dict(q='What multiplier decreases by ' + S('15%') + '?', a=S('0.85'),
         check=('simp', 'Rational(85,100)', 'Rational(17,20)')),
    dict(q='Solve ' + S('x + y = 7') + ', ' + S('x − y = 1') + '.',
         a=S('x = 4') + ', ' + S('y = 3'), check=('custom', 'sim_sum_diff')),
    dict(q='Solve ' + S('2x + y = 8') + ', ' + S('y = 2') + '.',
         a=S('x = 3') + ', ' + S('y = 2'), check=('custom', 'sim_simple')),
    dict(q='Find ' + S('y') + ' when ' + S('x = 2') + ' on ' + S(f'y = {X2}') + '.',
         a=S('y = 4'), check=('simp', '2**2', '4')),
    dict(q='Find ' + S('y') + ' when ' + S('x = −3') + ' on ' + S(f'y = {X2}') + '.',
         a=S('y = 9'), check=('simp', '(-3)**2', '9')),
    dict(q='Where does ' + S(f'y = {X2} − 4') + ' cross the ' + S('x') + '-axis?',
         a=S('x = ±2'), check=('solveset', 'Eq(x**2-4, 0)', 'FiniteSet(-2, 2)')),
    dict(q='What is the vertex of ' + S(f'y = {X2}') + '?', a=S('(0, 0)'), check=None),
]

Q_PRACTICE = [
    dict(q=S('1000') + ' som grows by ' + S('10%') + ' a year. Find its value after '
           + S('2') + ' years.', a=S('1210') + ' som',
         check=('simp', '1000*Rational(11,10)**2', '1210')),
    dict(q=S('8000') + ' som falls by ' + S('25%') + ' a year. Find its value after '
           + S('2') + ' years.', a=S('4500') + ' som',
         check=('simp', '8000*Rational(3,4)**2', '4500')),
    dict(q='A price rises ' + S('20%') + ' then falls ' + S('20%') + '. '
           'What is the overall change?', a='A fall of ' + S('4%'),
         check=('simp', 'Rational(12,10)*Rational(8,10)', 'Rational(96,100)')),
    dict(q='Solve ' + S('3x + 2y = 12') + ', ' + S('x − y = 1') + '.',
         a=S('x = ' + F(14, 5)) + ', ' + S('y = ' + F(9, 5)),
         check=('custom', 'sim_three_two')),
    dict(q='Solve ' + S('x + 2y = 10') + ', ' + S('3x − y = 2') + '.',
         a=S('x = 2') + ', ' + S('y = 4'), check=('custom', 'sim_two_four')),
    dict(q='Complete for ' + S(f'y = {X2} − 2x') + ' at ' + S('x = 0, 1, 2, 3') + '.',
         a=S('0, −1, 0, 3'), check=('custom', 'table_parabola')),
    dict(q='Where does ' + S(f'y = {X2} − 5x + 6') + ' cross the ' + S('x') + '-axis?',
         a=S('x = 2') + ' and ' + S('x = 3'),
         check=('solveset', 'Eq(x**2-5*x+6, 0)', 'FiniteSet(2, 3)')),
    dict(q='Where does ' + S(f'y = {X2} − 5x + 6') + ' cross the ' + S('y') + '-axis?',
         a=S('(0, 6)'), check=('simp', '0-0+6', '6')),
    dict(q='Find the axis of symmetry of ' + S(f'y = {X2} − 6x + 5') + '.', a=S('x = 3'),
         check=('simp', '6/2', '3')),
    dict(q='Find the vertex of ' + S(f'y = {X2} − 6x + 5') + '.', a=S('(3, −4)'),
         check=('simp', '9-18+5', '-4')),
]

Q_CHALLENGE = [
    dict(q='A population of ' + S('5000') + ' grows ' + S('3%') + ' a year. '
           'Find it after ' + S('3') + ' years, to the nearest whole.', a=S('5464'),
         check=('custom', 'population_growth')),
    dict(q='A price after a ' + S('15%') + ' rise is ' + S('920') + ' som. '
           'Find the original.', a=S('800') + ' som',
         check=('simp', '920/Rational(115,100)', '800')),
    dict(q='A car worth ' + S('12000') + ' loses ' + S('20%') + ' a year. '
           'After how many whole years is it worth under ' + S('6000') + '?',
         a=S('4') + ' years', check=('custom', 'car_depreciation')),
    dict(q='Solve ' + S('2x + 3y = 16') + ', ' + S('3x − y = 2') + '.',
         a=S('x = 2') + ', ' + S('y = 4'), check=('custom', 'sim_two_four_b')),
    dict(q='Solve ' + S('5x + 2y = 1') + ', ' + S('2x + 3y = −4') + '.',
         a=S('x = 1') + ', ' + S('y = −2'), check=('custom', 'sim_one_minus_two')),
    dict(q='Find the vertex of ' + S(f'y = {X2} + 4x + 1') + '.', a=S('(−2, −3)'),
         check=('simp', '4-8+1', '-3')),
    dict(q='Find the vertex of ' + S(f'y = 2{X2} − 8x + 5') + '.', a=S('(2, −3)'),
         check=('simp', '2*4-16+5', '-3')),
    dict(q='Does ' + S(f'y = {X2} + x + 1') + ' cross the ' + S('x') + '-axis?',
         a='No — ' + S('D = −3'),
         check=('solveset', 'Eq(x**2+x+1, 0)', 'S.EmptySet')),
    dict(q='Where do ' + S(f'y = {X2}') + ' and ' + S('y = x + 2') + ' meet?',
         a=S('(2, 4)') + ' and ' + S('(−1, 1)'),
         check=('solveset', 'Eq(x**2, x+2)', 'FiniteSet(2, -1)')),
    dict(q='Where do ' + S(f'y = {X2} − 4') + ' and ' + S('y = 3x') + ' meet?',
         a=S('x = 4') + ' and ' + S('x = −1'),
         check=('solveset', 'Eq(x**2-4, 3*x)', 'FiniteSet(4, -1)')),
]

Q_BEYOND = [
    dict(q='A sum grows ' + S('10%') + ' a year. After how many whole years has it more '
           'than doubled?', a=S('8') + ' years', check=('custom', 'doubling_ten_percent'),
         sol='1.1⁷ ≈ 1.949 and 1.1⁸ ≈ 2.144, so the eighth year is the first to pass '
             'double. (The "rule of 72" estimates 72/10 ≈ 7.2 years.)'),
    dict(q='Show that a rise of ' + S('x%') + ' followed by a fall of ' + S('x%')
           + ' always loses money.', a='The multiplier is ' + S('1 − ' + F(sq('x'), 10000)),
         check=('custom', 'rise_fall_loss'),
         sol='(1 + x/100)(1 − x/100) = 1 − x²/10000, which is below 1 for every x ≠ 0. '
             'The order of the two changes makes no difference.'),
    dict(q='Solve ' + S('x + y = 5') + ', ' + S(f'{X2} + {sq("y")} = 13') + '.',
         a=S('(2, 3)') + ' and ' + S('(3, 2)'), check=('custom', 'sim_quadratic'),
         sol='Substitute y = 5 − x: x² + (5−x)² = 13 gives 2x² − 10x + 12 = 0, '
             'so x = 2 or 3. A linear equation with a quadratic one needs substitution, '
             'not elimination.'),
    dict(q='Solve ' + S('x + y = 6') + ', ' + S('xy = 8') + '.',
         a=S('(2, 4)') + ' and ' + S('(4, 2)'), check=('custom', 'sim_sum_product'),
         sol='x and y are the roots of t² − 6t + 8 = 0, that is 2 and 4. '
             'Vieta turns a symmetric pair of equations into one quadratic.'),
    dict(q='A parabola has vertex ' + S('(2, −1)') + ' and passes through ' + S('(0, 3)')
           + '. Find its equation.', a=S(f'y = ({X2} − 4x + 4) − 1') + ', i.e. '
           + S(f'y = {X2} − 4x + 3'), check=('custom', 'parabola_from_vertex'),
         sol='Write y = a(x−2)² − 1. At (0, 3): 4a − 1 = 3, so a = 1 and '
             'y = (x−2)² − 1 = x² − 4x + 3.'),
    dict(q='Show that the vertex of ' + S(f'y = a{X2} + bx + c') + ' is at '
           + S('x = −' + F('b', '2a')) + '.', a=S('−' + F('b', '2a')),
         check=('custom', 'vertex_formula'),
         sol='Completing the square: a(x + b/2a)² + (c − b²/4a). The squared term is '
             'least (or greatest) when x = −b/2a, and that is the axis of symmetry.'),
    dict(q='For which ' + S('k') + ' does ' + S(f'y = {X2} + kx + 4')
           + ' touch the ' + S('x') + '-axis exactly once?', a=S('k = ±4'),
         check=('custom', 'touch_once_k'),
         sol='Touching once means a repeated root, so D = k² − 16 = 0 and k = ±4. '
             'The curve then has its vertex on the axis.'),
    dict(q='Solve ' + S('2x + y = 7') + ', ' + S('4x + 2y = 14') + '.',
         a='Infinitely many — the same line.', check=('custom', 'dependent_system'),
         sol='The second equation is twice the first, so every point of the line '
             '2x + y = 7 is a solution. Two equations are not always two conditions.'),
    dict(q='Solve ' + S('x + y = 3') + ', ' + S('2x + 2y = 8') + '.', a='No solution.',
         check=('custom', 'inconsistent_system'),
         sol='Halving the second gives x + y = 4, contradicting x + y = 3. '
             'The lines are parallel and never meet.'),
    dict(q='A shop raises a price by ' + S('25%') + ' then offers ' + S('20%') + ' off. '
           'What is the net change?', a='None — back to the start.',
         check=('simp', 'Rational(5,4)*Rational(4,5)', '1'),
         sol='The multipliers 1.25 and 0.8 are reciprocals, so the price returns exactly. '
             'This is the one pair of percentages where the usual loss does not happen — '
             'because the percentages differ.'),
    dict(q='Find where ' + S(f'y = {X2} − 2x − 3') + ' is below the ' + S('x') + '-axis.',
         a=S('−1 &lt; x &lt; 3'),
         check=('solveset', 'x**2-2*x-3 < 0', 'Interval.open(-1, 3)'),
         sol='The parabola opens upwards and cuts the axis at −1 and 3, so it dips below '
             'between them.'),
    dict(q='A population falls ' + S('p%') + ' a year and halves in ' + S('10')
           + ' years. Estimate ' + S('p') + '.', a='About ' + S('6.7%'),
         check=('custom', 'halving_rate'),
         sol='(1 − p/100)¹⁰ = 0.5, so 1 − p/100 = 0.5^(1/10) ≈ 0.933 and p ≈ 6.7.'),
    dict(q='Solve ' + S(f'y = {X2}') + ', ' + S('y = 2x − 1') + ' and interpret.',
         a=S('(1, 1)') + ' — the line is a tangent',
         check=('solveset', 'Eq(x**2, 2*x-1)', 'FiniteSet(1)'),
         sol='x² − 2x + 1 = (x−1)² = 0 has a repeated root, so the line meets the curve '
             'at one point and does not cross it.'),
    dict(q='The sum of two numbers is ' + S('10') + ' and their squares differ by '
           + S('20') + '. Find them.', a=S('6') + ' and ' + S('4'),
         check=('custom', 'sum_and_square_difference'),
         sol='x² − y² = (x+y)(x−y) = 10(x−y) = 20, so x − y = 2. With x + y = 10 the '
             'numbers are 6 and 4 — no quadratic needed.'),
    dict(q='Show that the parabola ' + S(f'y = {X2} + bx + c') + ' is symmetric about '
           'its vertex.', a='Replace ' + S('x') + ' by ' + S('−' + F('b', 2) + ' ± t'),
         check=('custom', 'parabola_symmetry'),
         sol='Writing y = (x + b/2)² + (c − b²/4), the value depends only on '
             '(x + b/2)², which is unchanged when x + b/2 changes sign. '
             'So points equally far either side of x = −b/2 have equal heights.'),
]

TOPIC = dict(
    key='alg-33', number=33, unit='Unit 5 · Quadratic equations', lessons='74–76',
    title='Compound percentages, simultaneous equations and quadratic graphs',
    subtitle='Three Cambridge Stage 9 topics carried by the national plan’s practical '
             'lessons.',
    uz='Algebra 8, practical problems, pp. 159–164',
    cam='Cambridge Stage 9 · 3.3, 4.2, 10.2',
    keywords=['compound percentage', 'multiplier', 'increase / decrease',
              'simultaneous equations', 'substitution method', 'elimination method',
              'table of values', 'vertex of a parabola', 'axis of symmetry'],
    remember=[
        'Compound change multiplies: <span class="m">n</span> years at '
        '<span class="m">r%</span> gives the factor '
        '<span class="m">(1 + r/100)<sup>n</sup></span>.',
        'A rise then an equal fall always loses — the multipliers are not reciprocals.',
        'Two linear equations: <b>eliminate</b> or <b>substitute</b>. A linear with a '
        'quadratic: always substitute.',
        'The axis of symmetry is <span class="m">x = −b/2a</span>, and the vertex sits '
        'on it.',
        'The <span class="m">x</span>-intercepts are the roots, so the discriminant says '
        'whether the curve meets the axis twice, once or not at all.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
