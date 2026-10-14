# -*- coding: utf-8 -*-
"""SAT Math 4.6 — Coordinate Geometry."""
import shapes as S
from svgbase import GREEN, INK, RED

DEG = '°'


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


LESSON = {
    'code': '4.6',
    'title': 'Coordinate Geometry',
    'sections': [
        {
            'title': 'Distance between two points',
            'fact': 'd = √[(x₂ − x₁)² + (y₂ − y₁)²] '
                    '— it is Pythagoras in disguise',
            'text': 'Draw the horizontal and vertical legs and the formula becomes obvious. '
                    'Because both differences are squared, the order of subtraction does not '
                    'matter.',
            'figs': [S.coord_distance((1, 2), (5, 5))],
            'caption': 'The green legs are just the differences in x and in y: 4 across and 3 up. '
                       'The red segment is the hypotenuse of that right triangle, so d = 5.',
            'examples': [
                ex('Find the distance between (1, 2) and (5, 5).',
                   ['Legs 4 and 3.', '√(16 + 9) = **5**.'],
                   S.coord_distance((1, 2), (5, 5))),
                ex('Find the distance between (−2, 1) and (4, 9).',
                   ['Legs 6 and 8.', '√(36 + 64) = **10**.'],
                   S.coord_distance((-2, 1), (4, 9), xmin=-3, xmax=6, ymin=-1, ymax=10)),
                ex('Why does subtracting the other way round give the same answer?',
                   ['Squaring removes the sign: (−4)² = 4².'],
                   S.coord_distance((5, 5), (1, 2), label='(−4)² + (−3)² = 25')),
            ],
        },
        {
            'title': 'Midpoint',
            'fact': 'midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2) — average '
                    'each coordinate',
            'text': 'Average the x’s and average the y’s, separately. If you are given '
                    'one endpoint and the midpoint, work backwards: the midpoint is as far past '
                    'itself again.',
            'figs': [S.coord_distance((1, 2), (5, 5), show_mid=True, label='midpoint = average '
                                      'of each coordinate')],
            'caption': 'The midpoint sits halfway along in both directions: x goes 1 → 3 '
                       '→ 5 and y goes 2 → 3.5 → 5.',
            'examples': [
                ex('Find the midpoint of (1, 2) and (5, 5).',
                   ['((1+5)/2, (2+5)/2) = **(3, 3.5)**.'],
                   S.coord_distance((1, 2), (5, 5), show_mid=True,
                                    label='midpoint (3, 3.5)')),
                ex('The midpoint of AB is (4, 1) and A is (2, −3). Find B.',
                   ['B is the same step again: (4 + 2, 1 + 4) = **(6, 5)**.'],
                   S.coord_lines(lines=(), points=((2, -3, 'A (2, −3)'),
                                                   (4, 1, 'M (4, 1)'), (6, 5, 'B (6, 5)')),
                                 xmin=-1, xmax=8, ymin=-5, ymax=7,
                                 label='same step twice: +2 across, +4 up')),
                ex('Find the midpoint of (−3, 7) and (5, −1).',
                   ['((−3+5)/2, (7−1)/2) = **(1, 3)**.'],
                   S.coord_distance((-3, 7), (5, -1), show_mid=True, xmin=-5, xmax=7,
                                    ymin=-3, ymax=9, label='midpoint (1, 3)')),
            ],
        },
        {
            'title': 'Slope',
            'fact': 'm = (y₂ − y₁)/(x₂ − x₁) — rise over run',
            'text': 'Keep the two points in the same order on top and bottom. A positive slope '
                    'rises left to right; a horizontal line has slope 0 and a vertical line has '
                    'no slope at all.',
            'figs': [S.coord_slope((1, 2), (5, 5)), S.slope_signs()],
            'caption': 'Rise 3 over run 4 gives m = 3/4. The four small panels show the only '
                       'four possibilities: up, down, flat (0) and vertical (undefined).',
            'examples': [
                ex('Find the slope through (1, 2) and (5, 5).',
                   ['(5 − 2)/(5 − 1) = **3/4**.'],
                   S.coord_slope((1, 2), (5, 5))),
                ex('Find the slope through (2, 7) and (6, −1).',
                   ['(−1 − 7)/(6 − 2) = −8/4 = **−2**.'],
                   S.coord_slope((2, 7), (6, -1), xmin=-1, xmax=8, ymin=-3, ymax=9)),
                ex('What is the slope of the line through (3, 4) and (3, 9)?',
                   ['The run is 0, so the slope is **undefined** — the line is vertical.'],
                   S.coord_slope((3, 4), (3, 9), xmin=-1, xmax=7, ymin=-1, ymax=11)),
            ],
        },
        {
            'title': 'Parallel and perpendicular',
            'fact': 'parallel → equal slopes  |  perpendicular → slopes multiply to '
                    '−1 (negative reciprocals)',
            'text': 'To get a perpendicular slope, flip the fraction and change the sign. The '
                    'perpendicular to a slope of 2/3 is −3/2.',
            'figs': [S.perp_lines(2 / 3.0)],
            'caption': 'The two blue lines never meet — same slope 2/3. The red line crosses '
                       'them at a right angle, and its slope −3/2 is the fraction flipped '
                       'and negated.',
            'examples': [
                ex('A line has slope 2/3. What is the slope of a line perpendicular to it?',
                   ['Flip and negate.', '**−3/2**.'],
                   S.perp_lines(2 / 3.0)),
                ex('Is y = 3x + 1 parallel to y = 3x − 7?',
                   ['Both have slope 3.', '**Yes** — parallel, and never meeting.'],
                   S.coord_lines(((3, 1, INK, 'y = 3x + 1'), (3, -7, GREEN, 'y = 3x − 7')),
                                 ymin=-9, ymax=9, label='same slope, different intercept')),
                ex('A line through (0, 4) is perpendicular to y = −½x. Write its '
                   'equation.',
                   ['The perpendicular slope is 2.', '**y = 2x + 4**.'],
                   S.coord_lines(((-0.5, 0, GREEN, 'y = −½x'),
                                  (2, 4, RED, 'y = 2x + 4')), ymin=-5, ymax=9,
                                 points=((0, 4, '(0, 4)'),))),
            ],
        },
        {
            'title': 'The equation of a circle in the plane',
            'fact': '(x − h)² + (y − k)² = r²',
            'text': 'This is coordinate geometry’s one memorised formula, and it is not on '
                    'the reference sheet. The centre’s coordinates appear with their signs '
                    'flipped.',
            'figs': [S.circle_on_grid(2, -3, 5, eq='(x − 2)² + (y + 3)² = 25',
                                      xmin=-5, xmax=9, ymin=-9, ymax=3)],
            'caption': 'Centre (2, −3) with radius 5. In the equation the 2 appears as '
                       '− 2 and the −3 appears as + 3, and the right-hand side is '
                       '5² = 25.',
            'examples': [
                ex('A circle has centre (2, −3) and radius 5. Write its equation.',
                   ['**(x − 2)² + (y + 3)² = 25**.'],
                   S.circle_on_grid(2, -3, 5, eq='(x − 2)² + (y + 3)² = 25',
                                    xmin=-5, xmax=9, ymin=-9, ymax=3)),
                ex('Find the centre and radius of (x + 4)² + (y − 1)² = 49.',
                   ['Centre **(−4, 1)**, radius **7**.'],
                   S.circle_on_grid(-4, 1, 7, eq='centre (−4, 1), r = 7',
                                    xmin=-12, xmax=4, ymin=-7, ymax=9)),
                ex('Is (5, −3) on the circle with centre (2, −3) and radius 5?',
                   ['(5 − 2)² + 0 = 9, not 25.', '**No** — it is inside.'],
                   S.circle_on_grid(2, -3, 5, eq='(5, −3) gives 9, not 25 → inside',
                                    xmin=-5, xmax=9, ymin=-9, ymax=3)),
            ],
        },
        {
            'title': 'Area on a grid',
            'fact': 'for a right-angled or axis-aligned figure, read the legs straight off the '
                    'grid',
            'text': 'When a figure sits on the coordinate axes, you rarely need a formula beyond '
                    'the basics: count the horizontal and vertical lengths and apply the '
                    'ordinary area rule.',
            'figs': [S.coord_area(((0, 0), (6, 0), (0, 4)), base=((0, 0), (6, 0), 6),
                                  height=((0, 0), (0, 4), 4),
                                  label='½ × 6 × 4 = 12')],
            'caption': 'Both legs lie along the axes, so the base is 6 and the height is 4 '
                       '— no distance formula needed.',
            'examples': [
                ex('Find the area of a triangle with vertices (0, 0), (6, 0) and (0, 4).',
                   ['Legs 6 and 4 along the axes.', '½(6)(4) = **12**.'],
                   S.coord_area(((0, 0), (6, 0), (0, 4)), base=((0, 0), (6, 0), 6),
                                height=((0, 0), (0, 4), 4),
                                label='½ × 6 × 4 = 12')),
                ex('Find the area of a rectangle with vertices (1, 1), (7, 1), (7, 5) and (1, 5).',
                   ['Width 6, height 4.', '**24**.'],
                   S.coord_area(((1, 1), (7, 1), (7, 5), (1, 5)),
                                base=((1, 1), (7, 1), 6), height=((7, 1), (7, 5), 4),
                                label='6 × 4 = 24')),
                ex('Find the area of a triangle with vertices (2, 1), (8, 1) and (5, 6).',
                   ['Base 6 along y = 1, height 5.', '½(6)(5) = **15**.'],
                   S.coord_area(((2, 1), (8, 1), (5, 6)), base=((2, 1), (8, 1), 6),
                                height=((5, 1), (5, 6), 5), label='½ × 6 × 5 = 15')),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. Here it is **a plotter**. '
                    'Enter the points and the line; seeing the picture settles slope signs and '
                    'perpendicularity faster than any rule.',
    'desmos': [
        ('What is the distance between (1, 2) and (5, 5)?', 'sqrt((5-1)^2+(5-2)^2)',
         'Pythagoras on the two differences.', '5'),
        ('What is the distance between (−2, 1) and (4, 9)?', 'sqrt(6^2+8^2)',
         'A 6-8-10 triangle.', '10'),
        ('What is the midpoint of (1, 2) and (5, 5)?', '((1+5)/2,(2+5)/2)',
         'Average each coordinate.', '(3, 3.5)'),
        ('What is the slope through (2, 7) and (6, −1)?', '(-1-7)/(6-2)',
         'Keep the order consistent.', '−2'),
        ('A line has slope 2/3. What is the perpendicular slope?', '-1/(2/3)',
         'Flip and negate.', '−1.5'),
        ('The midpoint of AB is (4, 1) and A is (2, −3). What is the x-coordinate of B?',
         '2*4-2', 'Twice the midpoint minus the known endpoint.', '6'),
        ('What is the radius of (x + 4)² + (y − 1)² = 49?', 'sqrt(49)',
         'The right-hand side is r squared.', '7'),
        ('What is the area of a triangle with vertices (0, 0), (6, 0) and (0, 4)?', '0.5*6*4',
         'The legs lie along the axes.', '12'),
        ('What is the area of a triangle with vertices (2, 1), (8, 1) and (5, 6)?', '0.5*6*5',
         'Base along y = 1, height from y = 1 to y = 6.', '15'),
        ('Is (5, −3) on the circle centred (2, −3) with radius 5?',
         '(5-2)^2+(-3+3)^2', 'Compare the result with r squared.', 'no, 9 is not 25'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there are '
                   'no options to choose from, so show the working that gets you there. Sketch '
                   'the points on a quick set of axes first. Nearly every question in this topic '
                   'is Pythagoras, an average, or a slope — and the sketch tells you which.',
    'part2': [
        ('P1', 'Hard',
         'What is the distance between the points (−2, 1) and (4, 9) in the xy-plane?', '10',
         ['The horizontal difference is 6 and the vertical difference is 8.',
          '√(36 + 64) = √100 = **10**.'],
         S.coord_distance((-2, 1), (4, 9), xmin=-3, xmax=6, ymin=-1, ymax=10)),
        ('P2', 'Hard',
         'What is the midpoint of the segment joining (−3, 7) and (5, −1)?', '(1, 3)',
         ['Average each coordinate: ((−3 + 5)/2, (7 − 1)/2).',
          '**(1, 3)**. A common wrong answer subtracts the coordinates instead of averaging them.'],
         S.coord_distance((-3, 7), (5, -1), show_mid=True, xmin=-5, xmax=7, ymin=-3, ymax=9,
                          label='midpoint (1, 3)')),
        ('P3', 'Hard',
         'What is the slope of the line passing through (2, 7) and (6, −1)?', '−2',
         ['(−1 − 7)/(6 − 2) = −8/4 = **−2**.',
          'A common wrong answer inverts the fraction, giving run over rise.'],
         S.coord_slope((2, 7), (6, -1), xmin=-1, xmax=8, ymin=-3, ymax=9)),
        ('P4', 'Hard',
         'A line has a slope of 2/3. What is the slope of any line perpendicular to it?',
         '−3/2',
         ['Perpendicular slopes are negative reciprocals: flip the fraction and change the sign.',
          '**−3/2**. A common wrong answer flips without negating; another negates without '
          'flipping.'],
         S.perp_lines(2 / 3.0)),
        ('P5', 'Hard',
         'A circle has centre (2, −3) and radius 5. Write the equation of that circle.',
         '(x − 2)² + (y + 3)² = 25',
         ['Signs flip inside the brackets and the right side is r².',
          '**(x − 2)² + (y + 3)² = 25.** A common wrong answer uses r instead of '
          'r².'],
         S.circle_on_grid(2, -3, 5, eq='(x − 2)² + (y + 3)² = 25',
                          xmin=-5, xmax=9, ymin=-9, ymax=3)),
        ('P6', 'Hard',
         'A triangle has vertices (2, 1), (8, 1) and (5, 6). What is its area, in square units?',
         '15',
         ['The base lies along y = 1 from x = 2 to x = 8, so it is 6 long, and the height is '
          '6 − 1 = 5.',
          '½(6)(5) = **15**.'],
         S.coord_area(((2, 1), (8, 1), (5, 6)), base=((2, 1), (8, 1), 6),
                      height=((5, 1), (5, 6), 5), label='½ × 6 × 5 = 15')),
        ('P7', 'Very hard',
         'The midpoint of segment AB is (4, 1). If A has coordinates (2, −3), what are the '
         'coordinates of B?', '(6, 5)',
         ['The midpoint is the average, so B is the same step again: (4 + 2, 1 + 4).',
          '**(6, 5)**. A common wrong answer is the midpoint of A and the given midpoint.'],
         S.coord_lines(lines=(), points=((2, -3, 'A (2, −3)'), (4, 1, 'M (4, 1)'),
                                         (6, 5, 'B (6, 5)')),
                       xmin=-1, xmax=8, ymin=-5, ymax=7,
                       label='same step twice: +2 across, +4 up')),
        ('P8', 'Very hard',
         'Line k passes through (0, 4) and is perpendicular to the line y = −½x + 3. '
         'What is the equation of line k?', 'y = 2x + 4',
         ['The perpendicular slope to −½ is **2**, and the y-intercept is given as 4.',
          '**y = 2x + 4.** A common wrong answer flips the fraction without changing the sign.'],
         S.coord_lines(((-0.5, 3, GREEN, 'y = −½x + 3'), (2, 4, RED, 'y = 2x + 4')),
                       ymin=-5, ymax=9, points=((0, 4, '(0, 4)'),))),
        ('P9', 'Very hard',
         'In the xy-plane, a circle has equation (x + 4)² + (y − 1)² = 49. What is '
         'the sum of the coordinates of its centre and its radius?', '4',
         ['Centre (−4, 1) and radius 7.', '−4 + 1 + 7 = **4**.'],
         S.circle_on_grid(-4, 1, 7, eq='centre (−4, 1), r = 7', xmin=-12, xmax=4,
                          ymin=-7, ymax=9)),
        ('P10', 'Very hard',
         'A square has two opposite vertices at (1, 1) and (7, 5). What is the length of its '
         'diagonal?', '2√13',
         ['The diagonal joins the two given points: √(36 + 16) = √52.',
          '√52 = 2√13 ≈ 7.21, so **2√13**. A common wrong answer is the same '
          'value unsimplified — the SAT expects the simplified radical.'],
         S.coord_distance((1, 1), (7, 5), xmin=-1, xmax=9, ymin=-1, ymax=7,
                          label='√(6² + 4²) = √52 = 2√13')),
        ('P11', 'Very hard',
         'Line m has equation y = 3x − 2. Which line is parallel to m and passes through '
         '(1, 5)?', 'y = 3x + 2',
         ['Parallel means the same slope, 3, and 5 = 3(1) + b gives b = 2.',
          '**y = 3x + 2.** A common wrong answer is the original line; another does not pass '
          'through (1, 5).'],
         S.coord_lines(((3, -2, GREEN, 'y = 3x − 2'), (3, 2, RED, 'y = 3x + 2')),
                       ymin=-9, ymax=9, points=((1, 5, '(1, 5)'),))),
        ('P12', 'Very hard',
         'Points A(0, 0), B(6, 0) and C(6, 8) form a triangle. What is its perimeter?', '24',
         ['AB = 6 and BC = 8, and the right angle at B makes AC = 10 by the 6-8-10 triple.',
          '6 + 8 + 10 = **24**. A common wrong answer omits the hypotenuse; another is twice the '
          'area.'],
         S.coord_area(((0, 0), (6, 0), (6, 8)), base=((0, 0), (6, 0), 6),
                      height=((6, 0), (6, 8), 8), ymin=-1, ymax=10,
                      label='6 + 8 + 10 = 24')),
    ],
    'habit': 'Distance is Pythagoras; midpoint is an average. Confusing the two is the commonest '
             'error here, and a thirty-second sketch prevents it.',
}
