# -*- coding: utf-8 -*-
"""Questions for topic 41 of Grade 8 algebra — revision of straight-line graphs."""

from .common import F, M, rt, sq

S = M
X2 = sq('x')

Q_FOCUS = [
    dict(q='Write the gradient and the ' + S('y') + '-intercept of ' + S('y = 3x − 5')
           + '.', a='Gradient ' + S('3') + ', intercept ' + S('−5') + '.',
         check=('simp', '3', '3')),
    dict(q='Find the gradient of the line through ' + S('(1, 2)') + ' and '
           + S('(4, 11)') + '.', a=S('3'), check=('simp', '(11-2)/(4-1)', '3')),
    dict(q='Does ' + S('(2, 1)') + ' lie on ' + S('y = 3x − 5') + '?',
         a='Yes.', check=('simp', '3*2-5', '1')),
    dict(q='Where does ' + S('y = 2x − 6') + ' cross the ' + S('x') + '-axis?',
         a=S('(3, 0)'), check=('solveset', 'Eq(2*x-6, 0)', 'FiniteSet(3)')),
    dict(q='Where does ' + S('y = 2x − 6') + ' cross the ' + S('y') + '-axis?',
         a=S('(0, −6)'), check=('simp', '2*0-6', '-6')),
    dict(q='Write the equation of the line with gradient ' + S('−2')
           + ' through ' + S('(0, 7)') + '.', a=S('y = −2x + 7'),
         check=('simp', '-2*0+7', '7')),
    dict(q='Rearrange ' + S('2x + y = 8') + ' into the form ' + S('y = mx + c') + '.',
         a=S('y = 8 − 2x'), check=('simp', '8-2*x', '-2*x+8')),
    dict(q='Which of ' + S('y = 4x + 1') + ' and ' + S('y = 4x − 3')
           + ' is steeper?', a='Neither — they are parallel.',
         check=('simp', '4-4', '0')),
    dict(q='Write the gradient of a line parallel to ' + S('y = ' + F(1, 2) + 'x + 9')
           + '.', a=S(F(1, 2)), check=('simp', 'Rational(1,2)', 'Rational(1,2)')),
    dict(q='Sketch ' + S('y = x') + ' and ' + S('y = −x') + '. At what angle do they '
           'meet?', a=S('90°') + ' — the gradients multiply to ' + S('−1') + '.',
         check=('simp', '1*(-1)', '-1')),
]

Q_PRACTICE = [
    dict(q='Find the equation of the line through ' + S('(2, 5)') + ' and '
           + S('(6, 17)') + '.', a=S('y = 3x − 1'),
         check=('custom', 'line_2_5_6_17')),
    dict(q='Find where ' + S('y = 2x + 1') + ' meets ' + S('y = 7 − x') + '.',
         a=S('(2, 5)'), check=('solveset', 'Eq(2*x+1, 7-x)', 'FiniteSet(2)')),
    dict(q='A line has gradient ' + S('−3') + ' and passes through ' + S('(2, 1)')
           + '. Find its ' + S('y') + '-intercept.', a=S('7'),
         check=('simp', '1+3*2', '7')),
    dict(q='Find the gradient of ' + S('3x + 4y = 12') + '.', a=S('−' + F(3, 4)),
         check=('simp', '(12-3*x)/4', '3-Rational(3,4)*x')),
    dict(q='Write the equation of the line perpendicular to ' + S('y = 2x + 1')
           + ' through ' + S('(0, 3)') + '.', a=S('y = −' + F(1, 2) + 'x + 3'),
         check=('simp', '2*(-Rational(1,2))', '-1')),
    dict(q='Find the area of the triangle made by ' + S('y = 6 − 2x') + ' and the two '
           'axes.', a=S('9'), check=('simp', 'Rational(1,2)*3*6', '9')),
    dict(q='The line ' + S('y = mx + 4') + ' passes through ' + S('(3, 13)')
           + '. Find ' + S('m') + '.', a=S('3'),
         check=('solveset', 'Eq(3*m+4, 13)', 'FiniteSet(3)', 'm')),
    dict(q='Find the midpoint of ' + S('(−1, 4)') + ' and ' + S('(5, 10)') + '.',
         a=S('(2, 7)'), check=('simp', '(-1+5)/2 + (4+10)/2', '9')),
    dict(q='Find the length of the segment from ' + S('(0, 0)') + ' to '
           + S('(6, 8)') + '.', a=S('10'), check=('simp', 'sqrt(36+64)', '10')),
    dict(q='Does the point ' + S('(100, 299)') + ' lie on ' + S('y = 3x − 1') + '?',
         a='Yes.', check=('simp', '3*100-1', '299')),
]

Q_CHALLENGE = [
    dict(q='Find the point where ' + S('2x − 3y = 12') + ' meets ' + S('x + y = 1')
           + '.', a=S('(3, −2)'), check=('custom', 'meet_2x3y_xy')),
    dict(q='A line through ' + S('(1, 2)') + ' has gradient ' + S('m')
           + ' and passes through ' + S('(4, 2 + 3m)') + '. Explain why that is true '
           'for every ' + S('m') + '.', a='The run is ' + S('3')
           + ', so the rise is ' + S('3m') + ' whatever ' + S('m') + ' is.',
         check=('simp', '(2+3*m-2)/(4-1)', 'm')),
    dict(q='Two lines ' + S('y = 2x + c') + ' and ' + S('y = 5 − x')
           + ' meet on the ' + S('y') + '-axis. Find ' + S('c') + '.', a=S('5'),
         check=('solveset', 'Eq(2*0+c, 5-0)', 'FiniteSet(5)', 'c')),
    dict(q='The line through ' + S('(0, k)') + ' and ' + S('(k, 0)')
           + ' has gradient ' + S('−1') + ' for every ' + S('k ≠ 0')
           + '. Show why.', a='Rise ' + S('−k') + ' over run ' + S('k') + '.',
         check=('simp', '(0-k)/(k-0)', '-1')),
    dict(q='Find the area of the triangle with vertices ' + S('(0, 0), (4, 0)')
           + ' and ' + S('(4, 6)') + '.', a=S('12'),
         check=('simp', 'Rational(1,2)*4*6', '12')),
    dict(q='A line has gradient ' + S('2') + ' and cuts the axes at ' + S('(p, 0)')
           + ' and ' + S('(0, q)') + ' with ' + S('q = −6') + '. Find ' + S('p')
           + '.', a=S('3'), check=('solveset', 'Eq(2*x-6, 0)', 'FiniteSet(3)')),
    dict(q='Show that ' + S('(1, 3), (3, 7)') + ' and ' + S('(6, 13)')
           + ' are collinear, or show they are not.',
         a='They are: both gradients are ' + S('2') + '.',
         check=('bool', 'Eq((7-3)/(3-1), 2) & Eq((13-7)/(6-3), 2)')),
    dict(q='The lines ' + S('y = ax + 3') + ' and ' + S('y = 4x + b')
           + ' are the same line. Find ' + S('a') + ' and ' + S('b') + '.',
         a=S('a = 4') + ', ' + S('b = 3') + '.',
         check=('bool', 'Eq(4, 4) & Eq(3, 3)')),
    dict(q='Find the perpendicular distance from ' + S('(0, 0)') + ' to the line '
           + S('y = 4') + ', and then to the line ' + S('x + y = 4') + '.',
         a=S('4') + ' and ' + S('2' + rt(2)),
         check=('simp', '4/sqrt(2)', '2*sqrt(2)')),
    dict(q='The line ' + S('y = mx') + ' passes through the centre of the square with '
           'corners ' + S('(1, 1)') + ' and ' + S('(5, 5)') + '. Find ' + S('m')
           + '.', a=S('1'), check=('solveset', 'Eq(3*m, 3)', 'FiniteSet(1)', 'm')),
]

Q_BEYOND = [
    dict(q='For which positive whole ' + S('m') + ' do ' + S('y = mx + 1') + ' and '
           + S('x + y = 10') + ' meet at a point whose coordinates are both whole '
           'numbers?', a=S('m = 2') + ' or ' + S('m = 8') + ' — ' + S('m + 1')
           + ' has to divide ' + S('9') + '.',
         check=('custom', 'line_meets_x_plus_y_10')),
    dict(q='The line ' + S('ax + by = 12') + ' passes through ' + S('(3, 0)')
           + ' and ' + S('(0, 4)') + '. Find ' + S('a') + ' and ' + S('b') + '.',
         a=S('a = 4') + ', ' + S('b = 3'), check=('custom', 'intercept_form_12')),
    dict(q='How many points with whole-number coordinates lie on the segment from '
           + S('(0, 0)') + ' to ' + S('(12, 18)') + ', endpoints included?',
         a=S('7'), check=('custom', 'lattice_on_segment')),
    dict(q='Three lines ' + S('y = x, y = 4') + ' and ' + S('x = 6')
           + ' bound a triangle. Find its area.', a=S('2'),
         check=('simp', 'Rational(1,2)*2*2', '2')),
    dict(q='Find the largest area of a triangle with two vertices at ' + S('(0, 0)')
           + ' and ' + S('(6, 0)') + ' and the third on the line ' + S('y = 4')
           + '.', a=S('12') + ' — the height is always ' + S('4') + '.',
         check=('simp', 'Rational(1,2)*6*4', '12')),
    dict(q='The line ' + S('y = 2x + c') + ' meets the circle of radius ' + S('5')
           + ' about the origin in two points for which values of ' + S('c') + '? '
           'Give the range.', a=S('−5' + rt(5) + ' < c < 5' + rt(5)),
         check=('custom', 'line_meets_circle_five')),
    dict(q='Four lines ' + S('x = 0, x = a, y = 0') + ' and ' + S('y = b')
           + ' bound a rectangle of perimeter ' + S('20') + '. What is its largest '
           'area?', a=S('25') + ' — the square with ' + S('a = b = 5') + '.',
         check=('bound', '(10-a)*a', {'a': ('0', '10')}, '0', '25')),
    dict(q='A straight line crosses the axes at ' + S('(p, 0)') + ' and '
           + S('(0, q)') + ' with ' + S('p') + ' and ' + S('q')
           + ' positive whole numbers and area ' + S('6') + '. List every '
           + S('(p, q)') + '.', a=S('(1, 12), (2, 6), (3, 4), (4, 3), (6, 2), (12, 1)'),
         check=('custom', 'axis_triangle_area_six')),
    dict(q='Show that the three lines ' + S('y = 2x − 1, y = 5 − x')
           + ' and ' + S('y = ' + F('x', 2) + ' + 2')
           + ' all pass through one point. Find it.', a=S('(2, 3)'),
         check=('custom', 'three_lines_concurrent')),
    dict(q='The points ' + S('(1, 1), (2, 4), (3, 9)') + ' lie on ' + S(f'y = {X2}')
           + '. Find the gradient of the chord from ' + S('(a, ' + sq('a') + ')')
           + ' to ' + S('(b, ' + sq('b') + ')') + ' in its simplest form.',
         a=S('a + b'), check=('simp', '(a**2-b**2)/(a-b)', 'a+b')),
    dict(q='A line of gradient ' + S('3') + ' passes through ' + S('(2, 1)')
           + '. Find the two points on it that are ' + S(rt(10))
           + ' from ' + S('(2, 1)') + '.', a=S('(3, 4)') + ' and ' + S('(1, −2)'),
         check=('custom', 'points_root_ten_away')),
    dict(q='For which ' + S('k') + ' do ' + S('y = kx + 2') + ' and '
           + S('y = (k + 1)x − 3') + ' meet at a point with ' + S('x = 5') + '?',
         a='Every ' + S('k') + ' — the ' + S('x')
           + '-coordinate of the meeting point is always ' + S('5') + '.',
         check=('custom', 'meet_at_x_five')),
    dict(q='A line through ' + S('(4, 3)') + ' cuts the positive axes at '
           + S('(p, 0)') + ' and ' + S('(0, q)') + '. Show that '
           + S(F(4, 'p') + ' + ' + F(3, 'q') + ' = 1') + '.',
         a='The point lies on ' + S(F('x', 'p') + ' + ' + F('y', 'q') + ' = 1') + '.',
         check=('custom', 'intercept_through_4_3')),
    dict(q='Two perpendicular lines through ' + S('(0, 5)') + ' cut the '
           + S('x') + '-axis at ' + S('A') + ' and ' + S('B')
           + '. Show that ' + S('OA × OB = 25') + ' where ' + S('O')
           + ' is the origin.', a='If one gradient is ' + S('m')
           + ' the intercepts are ' + S('−5/m') + ' and ' + S('5m')
           + '; their product has size ' + S('25') + '.',
         check=('simp', 'Abs(-5/m)*Abs(5*m)', '25')),
    dict(q='Find the equation of the line that cuts the axes so that the triangle it '
           'makes with them has area ' + S('24') + ' and gradient ' + S('−3') + '.',
         a=S('y = −3x + 12') + ' (or ' + S('y = −3x − 12') + ').',
         check=('custom', 'area24_gradient_minus3')),
]

TOPIC = dict(
    key='alg-41', number=41, unit='Unit 7 · Annual revision', lessons='94–96',
    title='Revision · Graphs, gradient and intercept',
    subtitle='The straight line from every side: two points, a gradient and a point, '
             'a rearranged equation, and a pair of lines meeting.',
    uz='Algebra 8, lessons 94–96', cam='Cambridge Stage 9 · 3.2–3.3',
    keywords=['gradient', 'intercept', 'y = mx + c', 'rise over run', 'parallel',
              'perpendicular', 'midpoint', 'length of a segment', 'collinear',
              'simultaneous equations', 'point of intersection'],
    remember=[
        'Gradient is <span class="m">(y₂ − y₁) ÷ (x₂ − x₁)</span> — rise over run, '
        'and the order of the two points does not matter as long as you keep it the '
        'same top and bottom.',
        'In <span class="m">y = mx + c</span> the gradient is '
        '<span class="m">m</span> and the <span class="m">y</span>-intercept is '
        '<span class="m">c</span>. Rearrange into that form before reading either off.',
        'Parallel means equal gradients; perpendicular means the gradients multiply '
        'to <span class="m">−1</span>.',
        'For the <span class="m">x</span>-intercept put '
        '<span class="m">y = 0</span>; for the <span class="m">y</span>-intercept put '
        '<span class="m">x = 0</span>.',
        'Two lines meet where their equations agree — that is a pair of simultaneous '
        'equations.',
        'Length between two points is '
        '<span class="m">√((x₂ − x₁)<sup>2</sup> + (y₂ − y₁)<sup>2</sup>)</span>; the '
        'midpoint is the average of each coordinate.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
