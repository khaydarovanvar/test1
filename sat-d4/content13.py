# -*- coding: utf-8 -*-
"""SAT Math 1.3 — Linear Equations in Two Variables."""
import algebra as A
import plot as P
import shapes as S
from svgbase import AMBER, GREEN, INK, RED


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


LESSON = {
    'code': '1.3',
    'title': 'Linear Equations in Two Variables',
    'sections': [
        {
            'title': 'Graphing a line',
            'fact': 'plot both intercepts and join them  |  or start at b and step by the slope',
            'text': 'From standard form, the intercepts are the fastest two points: set x = 0, '
                    'then set y = 0. From slope-intercept form, plot b on the y-axis and step '
                    'rise over run.',
            'figs': [P.coord_lines(((-0.75, 3, INK, '3x + 4y = 12'),), xmin=-1, xmax=6,
                                   ymin=-2, ymax=5, tick_every=2,
                                   points=((0, 3, '(0, 3)'), (4, 0, '(4, 0)')),
                                   label='two intercepts are enough to draw it')],
            'caption': 'Two points fix a line, and the intercepts are the two easiest to find '
                       '— each costs one substitution.',
            'examples': [
                ex('Find both intercepts of 3x + 4y = 12.',
                   ['x = 0 gives y = 3; y = 0 gives x = 4.', '**(0, 3) and (4, 0)**.'],
                   P.coord_lines(((-0.75, 3, INK, '3x + 4y = 12'),), xmin=-1, xmax=6,
                                 ymin=-2, ymax=5, tick_every=2,
                                 points=((0, 3, '(0, 3)'), (4, 0, '(4, 0)')))),
                ex('Describe how to graph y = 2x − 3 without a table.',
                   ['Start at **(0, −3)**, then go up 2 and right 1 to reach (1, '
                    '−1).'],
                   S.coord_slope((0, -3), (1, -1), xmin=-2, xmax=5, ymin=-5, ymax=5,
                                 label='start at b, then step the slope')),
                ex('Find the x-intercept of y = −5x + 20.',
                   ['0 = −5x + 20, so x = **4**.'],
                   P.coord_lines(((-5, 20, INK, 'y = −5x + 20'),), xmin=-1, xmax=6,
                                 ymin=-6, ymax=24, tick_every=2,
                                 points=((4, 0, '(4, 0)'),))),
            ],
        },
        {
            'title': 'Is this point on the line?',
            'fact': 'substitute both coordinates and see whether the equation holds',
            'text': 'There is nothing clever here, and that is the point: a question asking '
                    'which point lies on a line is answered by testing options until one '
                    'works.',
            'figs': [P.coord_lines(((2, -1, INK, 'y = 2x − 1'),), xmin=-2, xmax=6,
                                   ymin=-4, ymax=10, tick_every=2,
                                   points=((3, 5, 'on the line'), (2, 9, 'not on it')),
                                   label='test each candidate by substituting')],
            'caption': 'A point is on the line exactly when its coordinates satisfy the '
                       'equation. One substitution settles it.',
            'examples': [
                ex('Does (3, 5) lie on y = 2x − 1?',
                   ['2(3) − 1 = 5, which matches.', '**Yes.**'],
                   A.check_table((('(3, 5)', '2(3) − 1 = 5 ✓', True),), 
                                 title='substitute x and compare with y')),
                ex('Does (2, 9) lie on 4x + y = 16?',
                   ['8 + 9 = 17, not 16.', '**No.**'],
                   A.check_table((('(2, 9)', '8 + 9 = 17, not 16', False),),
                                 title='substitute x and y into the equation')),
                ex('The point (k, 7) lies on y = 3x + 1. Find k.',
                   ['7 = 3k + 1, so 3k = 6.', 'k = **2**.'],
                   A.flow(('7 = 3k + 1', '3k = 6', 'k = 2'))),
            ],
        },
        {
            'title': 'The same line in different clothes',
            'fact': 'slope-intercept y = mx + b  |  standard Ax + By = C  |  point-slope '
                    'y − y₁ = m(x − x₁)',
            'text': 'Two equations describe the same line when one is a multiple of the other. '
                    'Rearranging to y = mx + b is the quickest way to compare.',
            'figs': [A.rules_panel(
                (('2x + 3y = 12', 'standard form'),
                 ('y = −(2/3)x + 4', 'the same line, rearranged'),
                 ('4x + 6y = 24', 'the same line again, doubled')),
                title='one line, three appearances', w=340)],
            'caption': 'Doubling every coefficient changes nothing about the line. Putting '
                       'each into y = mx + b makes that obvious at a glance.',
            'examples': [
                ex('Write 2x + 3y = 12 in slope-intercept form.',
                   ['3y = −2x + 12.', '**y = −(2/3)x + 4**.'],
                   P.coord_lines(((-2 / 3.0, 4, INK, 'y = −(2/3)x + 4'),), xmin=-2,
                                 xmax=8, ymin=-2, ymax=6, tick_every=2)),
                ex('Are 2x + 3y = 12 and 4x + 6y = 24 the same line?',
                   ['The second is exactly twice the first.',
                    '**Yes** — one line, written two ways.'],
                   P.coord_lines(((-2 / 3.0, 4, INK, '2x + 3y = 12'),), xmin=-2, xmax=8,
                                 ymin=-2, ymax=6, tick_every=2,
                                 label='4x + 6y = 24 draws the identical line')),
                ex('Write the line through (2, 5) with slope 3 in point-slope form.',
                   ['**y − 5 = 3(x − 2)**, which rearranges to y = 3x − 1.'],
                   P.coord_lines(((3, -1, INK, 'y = 3x − 1'),), xmin=-1, xmax=5,
                                 ymin=-4, ymax=10, tick_every=2,
                                 points=((2, 5, '(2, 5)'),))),
            ],
        },
        {
            'title': 'Parallel and perpendicular',
            'fact': 'parallel → same slope  |  perpendicular → slopes multiply to '
                    '−1',
            'text': 'Rearrange both equations into y = mx + b before comparing. To get a '
                    'perpendicular slope, flip the fraction and change the sign.',
            'figs': [S.perp_lines(2 / 3.0)],
            'caption': 'The two blue lines share a slope and never meet; the red one crosses '
                       'at a right angle, with the slope flipped and negated.',
            'examples': [
                ex('Is y = 3x + 1 parallel to 6x − 2y = 8?',
                   ['The second gives y = 3x − 4, the same slope.',
                    '**Yes**, parallel.'],
                   P.coord_lines(((3, 1, INK, 'y = 3x + 1'), (3, -4, GREEN,
                                                              'y = 3x − 4')),
                                 xmin=-2, xmax=5, ymin=-8, ymax=10, tick_every=2)),
                ex('Find the slope perpendicular to y = −(2/5)x + 1.',
                   ['Flip and negate.', '**5/2**.'],
                   S.perp_lines(-2 / 5.0, mlabel='−2/5', plabel='5/2')),
                ex('Write the line through (0, −1) perpendicular to y = 4x.',
                   ['Perpendicular slope −1/4.', '**y = −(1/4)x − 1**.'],
                   P.coord_lines(((4, 0, GREEN, 'y = 4x'),
                                  (-0.25, -1, RED, 'y = −(1/4)x − 1')),
                                 xmin=-4, xmax=4, ymin=-6, ymax=6, tick_every=2,
                                 points=((0, -1, '(0, −1)'),))),
            ],
        },
        {
            'title': 'Horizontal and vertical lines',
            'fact': 'y = c is horizontal, slope 0  |  x = c is vertical, slope undefined',
            'text': 'A horizontal line has zero slope because nothing rises. A vertical line '
                    'has no slope at all, because the run is zero and you cannot divide by it '
                    '— ‘zero slope’ and ‘undefined slope’ are '
                    'different things.',
            'figs': [S.slope_signs()],
            'caption': 'Four lines, four slopes: positive, negative, zero (flat) and '
                       'undefined (vertical). The last two are the pair that get confused.',
            'examples': [
                ex('What is the slope of y = 7?',
                   ['**0** — it is horizontal.'],
                   P.coord_lines(((0, 7, INK, 'y = 7'),), xmin=-4, xmax=4, ymin=-2,
                                 ymax=10, tick_every=2, label='flat: slope 0')),
                ex('What is the slope of x = −3?',
                   ['**Undefined** — it is vertical, and the run is zero.'],
                   S.coord_slope((-3, -2), (-3, 5), xmin=-6, xmax=2, ymin=-4, ymax=7,
                                 label='run = 0 → slope undefined')),
                ex('Write the line through (4, 9) that is parallel to the x-axis.',
                   ['Parallel to the x-axis means horizontal.', '**y = 9**.'],
                   P.coord_lines(((0, 9, INK, 'y = 9'),), xmin=-1, xmax=8, ymin=-1,
                                 ymax=12, tick_every=2, points=((4, 9, '(4, 9)'),))),
            ],
        },
        {
            'title': 'Reading a line off a graph',
            'fact': 'find b where it crosses the y-axis, then count rise over run between two '
                    'grid points',
            'text': 'Pick two points where the line passes exactly through grid '
                    'intersections, or the slope you count will be wrong. Then read b '
                    'directly.',
            'figs': [S.coord_slope((0, 1), (4, 4), xmin=-1, xmax=7, ymin=-1, ymax=7,
                                   label='b = 1, and rise 3 over run 4')],
            'caption': 'Both marked points sit on grid corners, so the count is exact: up 3, '
                       'across 4, starting from a y-intercept of 1.',
            'examples': [
                ex('A line crosses the y-axis at 1 and passes through (4, 4). Find its '
                   'equation.',
                   ['m = (4 − 1)/4 = 3/4.', '**y = (3/4)x + 1**.'],
                   S.coord_slope((0, 1), (4, 4), xmin=-1, xmax=7, ymin=-1, ymax=7)),
                ex('A line falls 2 for every 1 across and passes through (0, 5). Find its '
                   'equation.',
                   ['**y = −2x + 5**.'],
                   P.coord_lines(((-2, 5, INK, 'y = −2x + 5'),), xmin=-1, xmax=5,
                                 ymin=-5, ymax=7, tick_every=2,
                                 points=((0, 5, '(0, 5)'),))),
                ex('A graph shows a line through (0, 1) and (5, 4.75). Find its slope.',
                   ['(4.75 − 1)/5 = **0.75**.'],
                   S.coord_slope((0, 1), (5, 4.75), xmin=-1, xmax=7, ymin=-1, ymax=7)),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. Here it is **a '
                    'grapher**. Type any form of the equation and read the slope and the '
                    'intercepts straight off the picture.',
    'desmos': [
        ('What is the y-intercept of 3x + 4y = 12?', '12/4', 'Set x = 0.', '3'),
        ('What is the x-intercept of 3x + 4y = 12?', '12/3', 'Set y = 0.', '4'),
        ('Does the point (3, 5) lie on y = 2x − 1?', '2*3-1', 'Compare with 5.', 'yes'),
        ('The point (k, 7) is on y = 3x + 1. What is k?', '(7-1)/3', 'Solve for the input.',
         '2'),
        ('Write 2x + 3y = 12 in the form y = mx + b. What is m?', '-2/3',
         'Rearranging is easier than it looks.', '-2/3'),
        ('What slope is perpendicular to −2/5?', '-1/(-2/5)', 'Flip and negate.', '2.5'),
        ('Are y = 3x + 1 and 6x − 2y = 8 parallel?', '6/2',
         'Rearrange the second to compare.', 'yes, both slope 3'),
        ('What is the slope of the line through (0, 1) and (5, 4.75)?', '(4.75-1)/5',
         'Rise over run.', '0.75'),
        ('What is the x-intercept of y = −5x + 20?', '20/5', 'Set y = 0.', '4'),
        ('A line has slope −2 and passes through (0, 5). What is y at x = 3?', '-2*3+5',
         'Substitute into y = mx + b.', '-1'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'Rearrange to y = mx + b before comparing two lines — two equations '
                   'can look different and be the same line.',
    'part2': [
        ('P1', 'Hard', 'Give a point that lies on the line y = 2x − 1.', '(3, 5)',
         ['Test each: at x = 3, y = 2(3) − 1 = **5**.',
          'A common wrong answer gives 2(2) − 1 = 3, not 5 — close enough to catch a '
          'careless reader.'],
         P.coord_lines(((2, -1, INK, 'y = 2x − 1'),), xmin=-2, xmax=6, ymin=-4,
                       ymax=10, tick_every=2, points=((3, 5, '(3, 5)'),))),
        ('P2', 'Hard', 'What is the x-intercept of the line 3x + 4y = 12?', '4',
         ['Set y = 0: 3x = 12.',
          'x = **4**. Setting x = 0 instead gives the y-intercept, 3.'],
         P.coord_lines(((-0.75, 3, INK, '3x + 4y = 12'),), xmin=-1, xmax=6, ymin=-2,
                       ymax=5, tick_every=2,
                       points=((4, 0, '(4, 0)'), (0, 3, '(0, 3)')))),
        ('P3', 'Hard', 'Write the equation of a line parallel to y = 3x + 1.',
         '6x − 2y = 8',
         ['Rearranging 6x − 2y = 8 gives y = 3x − 4, which has the same slope.',
          '**Parallel.** A common wrong answer negates the slope, and another inverts it '
          '— neither is parallel.'],
         P.coord_lines(((3, 1, INK, 'y = 3x + 1'), (3, -4, GREEN, '6x − 2y = 8')),
                       xmin=-2, xmax=5, ymin=-8, ymax=10, tick_every=2)),
        ('P4', 'Hard',
         'A line has slope −2/5. What is the slope of a line perpendicular to it?', '5/2',
         ['Perpendicular slopes are negative reciprocals: flip and change the sign.',
          '**5/2.** A common wrong answer flips without negating.'],
         S.perp_lines(-2 / 5.0, mlabel='−2/5', plabel='5/2')),
        ('P5', 'Hard', 'What is the slope of the line x = −3?', 'undefined',
         ['A vertical line has a run of zero, and division by zero is undefined.',
          '**Undefined.** A common wrong answer is the slope of a *horizontal* line — the '
          'two are often confused.'],
         S.slope_signs()),
        ('P6', 'Hard', 'Write the equation that 2x + 3y = 12 becomes in slope-intercept form.',
         'y = −(2/3)x + 4',
         ['3y = −2x + 12, then divide by 3.',
          '**y = −(2/3)x + 4.** A common wrong answer inverts the slope.'],
         P.coord_lines(((-2 / 3.0, 4, INK, 'y = −(2/3)x + 4'),), xmin=-2, xmax=8,
                       ymin=-2, ymax=6, tick_every=2)),
        ('P7', 'Very hard',
         'Line k passes through (0, −1) and is perpendicular to the line y = 4x. What is '
         'the equation of line k?', 'y = −(1/4)x − 1',
         ['The perpendicular slope to 4 is −1/4, and the y-intercept is given as '
          '−1.',
          '**y = −(1/4)x − 1.** A common wrong answer negates without flipping.'],
         P.coord_lines(((4, 0, GREEN, 'y = 4x'), (-0.25, -1, RED,
                                                  'y = −(1/4)x − 1')),
                       xmin=-4, xmax=4, ymin=-6, ymax=6, tick_every=2,
                       points=((0, -1, '(0, −1)'),))),
        ('P8', 'Very hard',
         'A line passes through (2, 5) and (6, 13). Give one other point with integer '
         'coordinates that lies on this line.', '(4, 9)',
         ['Slope = (13 − 5)/(6 − 2) = 2, and 5 = 2(2) + b gives b = 1, so '
          'y = 2x + 1.',
          'At x = 4: y = **9**, so (4, 9). A common wrong answer would need y = 21.'],
         P.coord_lines(((2, 1, INK, 'y = 2x + 1'),), xmin=-1, xmax=8, ymin=-2, ymax=16,
                       tick_every=2,
                       points=((2, 5, '(2, 5)'), (4, 9, '(4, 9)'), (6, 13, '(6, 13)')))),
        ('P9', 'Very hard',
         'The equations 2x + 3y = 12 and 4x + 6y = k represent the same line. What is the '
         'value of k?', '24',
         ['The second equation must be a multiple of the first; doubling 2x + 3y = 12 gives '
          '4x + 6y = 24.', 'k = **24**.'],
         A.rules_panel((('2x + 3y = 12', 'double everything'),
                        ('4x + 6y = 24', 'so k = 24')), w=320)),
        ('P10', 'Very hard',
         'A line with slope 3 passes through the point (2, 5). What is its y-intercept?',
         '−1',
         ['5 = 3(2) + b gives b = 5 − 6.',
          'b = **−1**. A common wrong answer adds instead of subtracting.'],
         P.coord_lines(((3, -1, INK, 'y = 3x − 1'),), xmin=-1, xmax=5, ymin=-4,
                       ymax=10, tick_every=2,
                       points=((2, 5, '(2, 5)'), (0, -1, '(0, −1)')))),
        ('P11', 'Very hard',
         'Which is the equation of the line through (4, 9) that is parallel to the x-axis?',
         'y = 9',
         ['Parallel to the x-axis means **horizontal**, so y is constant at the given '
          'y-value.',
          '**y = 9.** A common wrong answer is the vertical line through that point.'],
         P.coord_lines(((0, 9, INK, 'y = 9'),), xmin=-1, xmax=8, ymin=-1, ymax=12,
                       tick_every=2, points=((4, 9, '(4, 9)'),))),
        ('P12', 'Very hard',
         'In the xy-plane, line m has equation 5x − 2y = 10. What is the sum of its '
         'x-intercept and its y-intercept?', '−3',
         ['Set y = 0: x = 2. Set x = 0: −2y = 10, so y = −5.',
          '2 + (−5) = **−3**.'],
         P.coord_lines(((2.5, -5, INK, '5x − 2y = 10'),), xmin=-1, xmax=5, ymin=-8,
                       ymax=4, tick_every=2,
                       points=((2, 0, '(2, 0)'), (0, -5, '(0, −5)')))),
    ],
    'habit': 'Zero slope and undefined slope are different things. A horizontal line has slope '
             '0; a vertical line has none at all.',
}
