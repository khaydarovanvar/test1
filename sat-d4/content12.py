# -*- coding: utf-8 -*-
"""SAT Math 1.2 — Linear Functions."""
import algebra as A
import plot as P
import shapes as S
from svgbase import AMBER, GREEN, INK, RED


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


SLOPE = S.coord_slope((1, 1.75), (5, 4.75), xmin=-1, xmax=7, ymin=-1, ymax=7,
                      label='m = rise/run = 3/4, and b = 1')

LESSON = {
    'code': '1.2',
    'title': 'Linear Functions',
    'sections': [
        {
            'title': 'Slope as a rate of change',
            'fact': 'm = (y₂ − y₁)/(x₂ − x₁) = rise over run',
            'text': 'Slope is how much y changes for a one-unit rise in x. In a real context '
                    'it always carries units: dollars per kilometre, degrees per hour. Keep '
                    'the two points in the same order top and bottom.',
            'figs': [SLOPE],
            'caption': 'From (1, 1.75) to (5, 4.75) the line climbs 3 while running 4, so the '
                       'slope is 3/4. Swapping both differences gives −3/−4 — '
                       'the same number.',
            'examples': [
                ex('Find the slope through (1, 1.75) and (5, 4.75).',
                   ['(4.75 − 1.75)/(5 − 1) = 3/4.', 'm = **0.75**.'],
                   SLOPE),
                ex('A tailor charges $19 for 2 m and $40 for 5 m. Find the rate per metre.',
                   ['(40 − 19)/(5 − 2) = 21/3 = **$7 per metre**.'],
                   P.context_line(5, 7, 8, xlabel='metres', ylabel='charge',
                                  label='C = 7x + 5')),
                ex('What is the slope of the line through (2, 7) and (6, −1)?',
                   ['(−1 − 7)/(6 − 2) = −8/4 = **−2**.'],
                   S.coord_slope((2, 7), (6, -1), xmin=-1, xmax=8, ymin=-3, ymax=9)),
            ],
        },
        {
            'title': 'y = mx + b in context',
            'fact': 'b is the starting or fixed amount  |  m is the amount per unit',
            'text': 'Interpretation questions are worth easy marks if you name the units. In '
                    'C = 2.50 + 1.75d, the 2.50 is dollars and the 1.75 is dollars *per '
                    'kilometre* — the ‘per’ is what makes it a rate.',
            'figs': [P.context_line(15, 5, 8, xlabel='hours', ylabel='cost',
                                    label='C = 15 + 5h')],
            'caption': 'The line starts at the fixed 15 and climbs 5 for every extra hour. '
                       'Read b where the line meets the axis and m from one step across.',
            'examples': [
                ex('C = 2.50 + 1.75d gives a taxi fare for d kilometres. What does 1.75 mean?',
                   ['The cost **per kilometre**, in dollars.'],
                   P.context_line(2.5, 1.75, 8, xlabel='kilometres', ylabel='fare',
                                  label='C = 2.50 + 1.75d')),
                ex('What does 2.50 mean in that model?',
                   ['The **fixed starting fare** before any distance is travelled.'],
                   P.context_line(2.5, 1.75, 8, xlabel='kilometres', ylabel='fare',
                                  label='the fare before you move')),
                ex('P(n) = 2.5n − 40 gives daily profit for n melons. What does 2.5 mean?',
                   ['The **increase in profit for each extra melon sold**, in dollars.'],
                   P.context_line(-40, 2.5, 40, xlabel='melons', ylabel='profit',
                                  label='P(n) = 2.5n − 40')),
            ],
        },
        {
            'title': 'Writing a line from information',
            'fact': 'from two points: find m, then use y = mx + b with one point to get b',
            'text': 'Three routes to the same line: two points, a point and a slope, or a '
                    'table. Find the slope first in every case, then pin down b by '
                    'substituting a known point.',
            'figs': [A.flow(('two points (2, 19) and (5, 40)', 'm = 21/3 = 7',
                             '19 = 7(2) + b', 'C = 7x + 5'),
                            note='slope first, intercept second — always in that order')],
            'caption': 'The rate comes from the two points; the fixed part comes from putting '
                       'one of them back in. Doing it the other way round has nothing to '
                       'substitute.',
            'examples': [
                ex('A tailor charges $19 for 2 m and $40 for 5 m. Write the model.',
                   ['m = 7, and 19 = 7(2) + b gives b = 5.', '**C = 7x + 5**.'],
                   P.context_line(5, 7, 8, xlabel='metres', ylabel='charge',
                                  label='C = 7x + 5')),
                ex('For that model, what is the charge for 8 metres?',
                   ['7(8) + 5 = **$61**.'],
                   A.flow(('C = 7x + 5', 'x = 8', '56 + 5', '$61'))),
                ex('Write the equation of the line with slope −3 through (2, 1).',
                   ['1 = −3(2) + b gives b = 7.', '**y = −3x + 7**.'],
                   P.coord_lines(((-3, 7, INK, 'y = −3x + 7'),), xmin=-1, xmax=5,
                                 ymin=-3, ymax=9, points=((2, 1, '(2, 1)'),),
                                 tick_every=2)),
            ],
        },
        {
            'title': 'Intercepts and what they mean',
            'fact': 'y-intercept: set x = 0  |  x-intercept: set y = 0',
            'text': 'In context the y-intercept is the starting value and the x-intercept is '
                    'when the quantity reaches zero — the break-even point, or when a '
                    'tank empties.',
            'figs': [P.coord_lines(((-0.4, 4, INK, '2x + 5y = 20'),), xmin=-1, xmax=12,
                                   ymin=-2, ymax=6, tick_every=2,
                                   points=((0, 4, '(0, 4)'), (10, 0, '(10, 0)')),
                                   label='both intercepts of 2x + 5y = 20')],
            'caption': 'Setting x = 0 gives the height where the line starts; setting y = 0 '
                       'gives where it reaches the axis. Each is one substitution.',
            'examples': [
                ex('Find both intercepts of 2x + 5y = 20.',
                   ['x = 0 gives y = 4; y = 0 gives x = 10.', '**(0, 4) and (10, 0)**.'],
                   P.coord_lines(((-0.4, 4, INK, '2x + 5y = 20'),), xmin=-1, xmax=12,
                                 ymin=-2, ymax=6, tick_every=2,
                                 points=((0, 4, '(0, 4)'), (10, 0, '(10, 0)')))),
                ex('A tank model is V = 200 − 8t litres. When is it empty?',
                   ['200 − 8t = 0, so t = **25 minutes**.'],
                   P.context_line(200, -8, 25, xlabel='minutes', ylabel='litres',
                                  label='V = 200 − 8t: empty at t = 25')),
                ex('What does the 200 represent?',
                   ['The **starting volume**, in litres, at t = 0.'],
                   P.context_line(200, -8, 25, xlabel='minutes', ylabel='litres',
                                  label='200 litres before any time passes')),
            ],
        },
        {
            'title': 'Function notation',
            'fact': 'f(3) means substitute 3  |  f(x) = 3 means solve for x',
            'text': 'The notation is compact but precise. Reading f(a) = b off a graph means '
                    'the point (a, b) lies on it. Evaluating and solving are opposite '
                    'directions, and the SAT tests both.',
            'figs': [P.function_machine('f(x) = 3x − 5', (4, 7), (7, 16))],
            'caption': 'Put 4 in and 7 comes out, so f(4) = 7. Running it backwards from 16 '
                       'asks which input produces that output.',
            'examples': [
                ex('f(x) = 3x − 5. Find f(4).',
                   ['3(4) − 5 = **7**.'],
                   P.function_machine('f(x) = 3x − 5', (4,), (7,))),
                ex('For that f, solve f(x) = 16.',
                   ['3x − 5 = 16, so 3x = 21.', 'x = **7**.'],
                   A.flow(('3x − 5 = 16', '3x = 21', 'x = 7'))),
                ex('The graph of f passes through (2, 9). Write that in function notation.',
                   ['**f(2) = 9**.'],
                   A.rules_panel((('the point (2, 9)', 'is on the graph'),
                                  ('in function notation', 'f(2) = 9')), w=300)),
            ],
        },
        {
            'title': 'Linear models and tables',
            'fact': 'a constant difference in a table means the model is linear',
            'text': 'Check the y-differences for equal steps. Once you know it is linear, the '
                    'common difference is the slope and the value at x = 0 is b.',
            'figs': [A.diff_ratio_table((0, 1, 2, 3), (5, 8, 11, 14), 'linear')],
            'caption': 'Equal jumps of 3 for equal steps of 1: that is a slope of 3, and the '
                       'value at x = 0 is the intercept.',
            'examples': [
                ex('A table gives y = 5, 8, 11, 14 for x = 0, 1, 2, 3. Write the model.',
                   ['Differences are all 3, and y = 5 at x = 0.', '**y = 3x + 5**.'],
                   A.diff_ratio_table((0, 1, 2, 3), (5, 8, 11, 14), 'linear')),
                ex('A table gives y = 20, 17, 14 for x = 1, 2, 3. Write the model.',
                   ['Difference −3, and at x = 1, y = 20, so b = 23.',
                    '**y = −3x + 23**.'],
                   A.diff_ratio_table((1, 2, 3), (20, 17, 14), 'linear')),
                ex('Is y = 2, 4, 8, 16 linear?',
                   ['Differences 2, 4, 8 are not constant.',
                    '**No** — it is exponential, with ratio 2.'],
                   A.diff_ratio_table((0, 1, 2, 3), (2, 4, 8, 16), 'exponential')),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. Here it is **a line '
                    'reader**. Plot two points, draw the line and Desmos gives the equation, '
                    'the slope and both intercepts.',
    'desmos': [
        ('What is the slope of the line through (1, 1.75) and (5, 4.75)?',
         '(4.75-1.75)/(5-1)', 'Rise over run.', '0.75'),
        ('A tailor charges $19 for 2 m and $40 for 5 m. What is the rate per metre?',
         '(40-19)/(5-2)', 'The slope of the cost model.', '7'),
        ('For that tailor, what is the charge for 8 metres?', '7*8+5',
         'Rate times amount plus the fixed part.', '61'),
        ('What is the slope through (2, 7) and (6, −1)?', '(-1-7)/(6-2)',
         'Keep the order consistent.', '-2'),
        ('Find the y-intercept of 2x + 5y = 20.', '20/5', 'Set x = 0.', '4'),
        ('Find the x-intercept of 2x + 5y = 20.', '20/2', 'Set y = 0.', '10'),
        ('V = 200 − 8t. At what t is V = 0?', '200/8', 'The x-intercept in context.',
         '25'),
        ('If f(x) = 3x − 5, what is f(4)?', '3*4-5', 'Substitute.', '7'),
        ('If f(x) = 3x − 5 and f(x) = 16, what is x?', '(16+5)/3',
         'Solve, do not substitute.', '7'),
        ('A table gives y = 5, 8, 11, 14 at x = 0, 1, 2, 3. What is the slope?', '8-5',
         'Constant difference means linear.', '3'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'Every interpretation question is answered by naming the **units**: '
                   'dollars, or dollars per kilometre.',
    'part2': [
        ('P1', 'Hard',
         'A tailor’s total charge is a linear function of the length of fabric used. The '
         'charge is $19 for 2 metres and $40 for 5 metres. What is the charge for 8 metres of '
         'fabric?', '$61',
         ['Rate = (40 − 19)/(5 − 2) = $7 per metre, and 19 = 7(2) + b gives b = $5.',
          '7(8) + 5 = **$61**. A common wrong answer is 40 + 7×4, counting 5 to 8 as four '
          'steps instead of three; that answer drops the fixed $5. Only two of your thirteen '
          'got this on Test 5.'],
         P.context_line(5, 7, 9, xlabel='metres', ylabel='charge', label='C = 7x + 5')),
        ('P2', 'Hard',
         'The function P(n) = 2.5n − 40 gives the daily profit P, in dollars, of a fruit '
         'stall that sells n melons. What is the best interpretation of the number 2.5?',
         'The increase in profit, in dollars, for each additional melon sold.',
         ['The coefficient of n is a **rate**: profit per extra melon.',
          'A common wrong answer describes −40, the value when n = 0.'],
         P.context_line(-40, 2.5, 40, xlabel='melons', ylabel='profit',
                        label='P(n) = 2.5n − 40')),
        ('P3', 'Hard',
         'The taxi fare, in dollars, for a ride of d kilometres is C = 2.50 + 1.75d. What is '
         'the best interpretation of 1.75?',
         'The cost, in dollars, for each kilometre travelled.',
         ['1.75 multiplies d, so it is the cost **per kilometre**.',
          'A common wrong answer is close but wrong: a 1 km ride costs 2.50 + 1.75 = $4.25.'],
         P.context_line(2.5, 1.75, 10, xlabel='kilometres', ylabel='fare',
                        label='C = 2.50 + 1.75d')),
        ('P4', 'Hard',
         'What is the y-coordinate of the y-intercept of the line 2x + 5y = 20?', '4',
         ['Set x = 0: 5y = 20.', 'y = **4**.'],
         P.coord_lines(((-0.4, 4, INK, '2x + 5y = 20'),), xmin=-1, xmax=12, ymin=-2,
                       ymax=6, tick_every=2, points=((0, 4, '(0, 4)'),))),
        ('P5', 'Hard',
         'If f(x) = 3x − 5, for what value of x does f(x) = 16?', '7',
         ['3x − 5 = 16 gives 3x = 21.',
          'x = **7**. Substituting 16 instead would give 43, which answers a different '
          'question.'],
         A.flow(('3x − 5 = 16', '3x = 21', 'x = 7'))),
        ('P6', 'Hard',
         'A table shows y = 5, 8, 11 and 14 when x = 0, 1, 2 and 3. Write the equation that '
         'models the data.', 'y = 3x + 5',
         ['The differences are all 3, so the slope is 3, and y = 5 when x = 0.',
          '**y = 3x + 5.** A common wrong answer swaps the slope and the intercept.'],
         A.diff_ratio_table((0, 1, 2, 3), (5, 8, 11, 14), 'linear')),
        ('P7', 'Very hard',
         'A water tank is modelled by V = 200 − 8t, where V is litres and t is minutes. '
         'After how many minutes is the tank empty?', '25',
         ['Set V = 0: 200 = 8t.',
          't = **25 minutes**. This is the x-intercept read in context.'],
         P.context_line(200, -8, 25, xlabel='minutes', ylabel='litres',
                        label='empty when V = 0')),
        ('P8', 'Very hard',
         'A line passes through (2, 7) and (6, −1). Write the equation of that line.',
         'y = −2x + 11',
         ['Slope = −8/4 = −2, and 7 = −2(2) + b gives b = 11.',
          '**y = −2x + 11.** A common wrong answer uses the y-value of the first point as '
          'the intercept.'],
         P.coord_lines(((-2, 11, INK, 'y = −2x + 11'),), xmin=-1, xmax=8, ymin=-3,
                       ymax=12, tick_every=2,
                       points=((2, 7, '(2, 7)'), (6, -1, '(6, −1)')))),
        ('P9', 'Very hard',
         'Two linear models for a monthly cost are C = 30 + 4n and C = 50 + 2n, where n is the '
         'number of items. For what value of n do the two cost the same?', '10',
         ['30 + 4n = 50 + 2n gives 2n = 20.',
          'n = **10 items**, where both cost $70.'],
         P.coord_lines(((4, 30, INK, 'C = 30 + 4n'), (2, 50, GREEN, 'C = 50 + 2n')),
                       xmin=0, xmax=20, ymin=20, ymax=110, tick_every=5,
                       points=((10, 70, '(10, 70)'),), label='they meet at n = 10')),
        ('P10', 'Very hard',
         'The graph of a linear function f passes through (0, 6) and (4, 0). What is the value '
         'of f(10)?', '−9',
         ['Slope = (0 − 6)/(4 − 0) = −1.5, and b = 6, so f(x) = −1.5x + 6.',
          'f(10) = −15 + 6 = **−9**. A common wrong answer assumes the line stops at '
          'zero.'],
         P.coord_lines(((-1.5, 6, INK, 'f(x) = −1.5x + 6'),), xmin=-1, xmax=12,
                       ymin=-12, ymax=8, tick_every=4,
                       points=((0, 6, '(0, 6)'), (4, 0, '(4, 0)'), (10, -9, '(10, −9)')))),
        ('P11', 'Very hard',
         'A phone plan charges a fixed monthly fee plus a rate per gigabyte. Using 4 GB costs '
         '$26 and using 9 GB costs $41. What is the fixed monthly fee, in dollars?', '14',
         ['Rate = (41 − 26)/(9 − 4) = 15/5 = $3 per GB.',
          '26 = f + 3(4), so f = **$14**. A common wrong answer is the rate, not the fee.'],
         P.context_line(14, 3, 10, xlabel='gigabytes', ylabel='cost',
                        label='cost = 14 + 3g')),
        ('P12', 'Very hard',
         'For a linear function g, g(1) = 4 and g(5) = 16. What is the value of g(8)?', '25',
         ['Slope = (16 − 4)/(5 − 1) = 3, and 4 = 3(1) + b gives b = 1.',
          'g(8) = 24 + 1 = **25**. A common wrong answer adds the slope once rather than three '
          'times.'],
         P.coord_lines(((3, 1, INK, 'g(x) = 3x + 1'),), xmin=0, xmax=10, ymin=0, ymax=28,
                       tick_every=2,
                       points=((1, 4, '(1, 4)'), (5, 16, '(5, 16)'), (8, 25, '(8, 25)')))),
    ],
    'habit': 'Find the rate first and the fixed part second. On Test 5 only two of thirteen '
             'got the tailor question, and the usual cause was counting the step from 5 to 8 '
             'as four instead of three.',
}
