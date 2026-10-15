# -*- coding: utf-8 -*-
"""SAT Math 2.8 — Nonlinear Systems."""
import algebra as A
import plot as P
from svgbase import AMBER, GREEN, INK, RED


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


SUB = P.nonlinear_system(f=lambda x: x * x, g=lambda x: 2 * x + 3,
                         solutions=((3, 9), (-1, 1)), xmin=-3, xmax=5, ymin=-2, ymax=12,
                         legend=('y = x²', 'y = 2x + 3'),
                         label='where they meet, both equations hold')
TANGENT = P.nonlinear_system(f=lambda x: x * x, g=lambda x: 2 * x - 1,
                             solutions=((1, 1),), xmin=-2, xmax=4, ymin=-2, ymax=9,
                             legend=('y = x²', 'y = 2x − 1'),
                             label='one point only — the discriminant is zero')


def circle_line(r=5, m=1, c=1, pts=((3, 4), (-4, -3)), label=None, w=300, h=215):
    """A circle with a line cutting it, and the shared points marked."""
    top = lambda x: (r * r - x * x) ** 0.5 if abs(x) <= r else None
    bot = lambda x: -((r * r - x * x) ** 0.5) if abs(x) <= r else None
    return P.graph([(top, INK, None), (bot, INK, 'x² + y² = %g' % (r * r)),
                    (lambda x: m * x + c, GREEN, 'y = %gx + %g' % (m, c))],
                   xmin=-r - 2, xmax=r + 2, ymin=-r - 2, ymax=r + 2, xstep=1, ystep=1,
                   xtick_every=2, ytick_every=2,
                   points=tuple((x, y, '(%g, %g)' % (x, y), RED) for (x, y) in pts),
                   label=label, w=w, h=h)


LESSON = {
    'code': '2.8',
    'title': 'Nonlinear Systems',
    'sections': [
        {
            'title': 'Solving by substitution',
            'fact': 'set the two expressions for y equal  |  solve the resulting equation  |  '
                    'find each y',
            'text': 'A nonlinear system is one curve and one line, or two curves. Where they '
                    'meet, both equations hold, so equating them turns the pair into a single '
                    'equation you already know how to solve. Do not stop at x — the '
                    'solutions are points.',
            'figs': [SUB],
            'caption': 'The two crossings are the two solutions. Equating x² = 2x + 3 '
                       'finds their x-values; substituting back into either equation gives the '
                       'matching y.',
            'examples': [
                ex('Solve y = x² and y = 2x + 3.',
                   ['x² = 2x + 3, so x² − 2x − 3 = 0 and '
                    '(x − 3)(x + 1) = 0.',
                    'x = 3 or −1, giving **(3, 9) and (−1, 1)**.'],
                   SUB),
                ex('Solve y = x² − 4 and y = 3x.',
                   ['x² − 3x − 4 = 0, so (x − 4)(x + 1) = 0.',
                    '**(4, 12) and (−1, −3)**.'],
                   P.nonlinear_system(f=lambda x: x * x - 4, g=lambda x: 3 * x,
                                      solutions=((4, 12), (-1, -3)), xmin=-3, xmax=6,
                                      ymin=-6, ymax=14,
                                      legend=('y = x² − 4', 'y = 3x'))),
                ex('Solve y = x² and y = 4.',
                   ['x² = 4, so x = ±2.', '**(2, 4) and (−2, 4)**.'],
                   P.nonlinear_system(f=lambda x: x * x, g=lambda x: 4 + 0 * x,
                                      solutions=((2, 4), (-2, 4)), xmin=-4, xmax=4,
                                      ymin=-1, ymax=10, legend=('y = x²', 'y = 4'))),
            ],
        },
        {
            'title': 'How many intersection points?',
            'fact': 'after substituting, the discriminant of the resulting quadratic counts the '
                    'meetings',
            'text': 'Two real solutions means the line cuts the curve twice; one means it is '
                    'tangent; none means they miss entirely. This is the same discriminant test '
                    'as always, wearing a different hat.',
            'figs': [TANGENT],
            'caption': 'Substituting y = 2x − 1 into y = x² gives x² − 2x '
                       '+ 1 = 0 with discriminant 0 — and the picture shows the line just '
                       'grazing the curve.',
            'examples': [
                ex('How many times does y = 2x + 3 meet y = x²?',
                   ['x² − 2x − 3 = 0 has discriminant 4 + 12 = 16 > 0.',
                    '**Twice.**'],
                   SUB),
                ex('How many times does y = 2x − 1 meet y = x²?',
                   ['x² − 2x + 1 = 0 has discriminant 4 − 4 = 0.',
                    '**Once** — the line is tangent.'],
                   TANGENT),
                ex('How many times does y = 2x − 5 meet y = x²?',
                   ['x² − 2x + 5 = 0 has discriminant 4 − 20 = −16 < 0.',
                    '**Never.**'],
                   P.nonlinear_system(f=lambda x: x * x, g=lambda x: 2 * x - 5,
                                      solutions=(), xmin=-3, xmax=5, ymin=-6, ymax=10,
                                      legend=('y = x²', 'y = 2x − 5'),
                                      label='the line passes below the parabola')),
            ],
        },
        {
            'title': 'Tangency questions',
            'fact': '‘meets at exactly one point’ ⇔ discriminant = 0',
            'text': 'Whenever a question fixes a constant so that a line touches a curve once, '
                    'substitute, collect into ax² + bx + c = 0, and set b² − 4ac '
                    '= 0. Watch the sign at the last step — that is where the marks go.',
            'figs': [A.flow(('y = 2x + b meets y = x² once',
                             'x² − 2x − b = 0',
                             'discriminant 4 + 4b = 0', 'b = −1'),
                            note='the final sign is where five of your class lost the mark'),
                     TANGENT],
            'caption': 'Set up, substitute, set the discriminant to zero, then solve for the '
                       'constant — and check the sign of the answer against the picture.',
            'examples': [
                ex('For what b does y = 2x + b meet y = x² exactly once?',
                   ['x² − 2x − b = 0 with discriminant 4 + 4b = 0.',
                    'b = **−1**. Five of your class reached +1 here.'],
                   TANGENT),
                ex('For what c does y = x + c meet y = x² exactly once?',
                   ['x² − x − c = 0, so 1 + 4c = 0.', 'c = **−1/4**.'],
                   P.nonlinear_system(f=lambda x: x * x, g=lambda x: x - 0.25,
                                      solutions=((0.5, 0.25),), xmin=-2, xmax=3, ymin=-2,
                                      ymax=6, legend=('y = x²', 'y = x − ¼'),
                                      label='tangent at (0.5, 0.25)')),
                ex('Why does a positive b give two intersections in the first example?',
                   ['4 + 4b > 0 whenever b > −1, so the discriminant is positive and the '
                    'line cuts the parabola **twice**.'],
                   P.nonlinear_system(f=lambda x: x * x, g=lambda x: 2 * x + 1,
                                      solutions=((1 + 2 ** 0.5, 3 + 2 * 2 ** 0.5),
                                                 (1 - 2 ** 0.5, 3 - 2 * 2 ** 0.5)),
                                      xmin=-2, xmax=4, ymin=-2, ymax=10,
                                      legend=('y = x²', 'y = 2x + 1'),
                                      label='b = 1 > −1 → two crossings')),
            ],
        },
        {
            'title': 'Circle and line systems',
            'fact': 'substitute the line into the circle equation, then solve the quadratic',
            'text': 'The method does not change when one equation is a circle. Replace y in '
                    'x² + y² = r² using the line, expand carefully, and solve.',
            'figs': [circle_line(5, 1, 1, ((3, 4), (-4, -3)),
                                 label='x² + y² = 25 and y = x + 1')],
            'caption': 'The line cuts the circle at two lattice points. Substituting y = x + 1 '
                       'turns the system into 2x² + 2x − 24 = 0, whose roots are those '
                       'two x-values.',
            'examples': [
                ex('Solve x² + y² = 25 and y = x + 1.',
                   ['x² + (x + 1)² = 25 gives 2x² + 2x − 24 = 0, so '
                    'x² + x − 12 = 0.',
                    'x = 3 or −4, giving **(3, 4) and (−4, −3)**.'],
                   circle_line(5, 1, 1, ((3, 4), (-4, -3)))),
                ex('How many points does y = 7 share with x² + y² = 25?',
                   ['x² = 25 − 49 = −24, which is impossible.',
                    '**None** — the line lies outside the circle.'],
                   circle_line(5, 0, 7, (), label='y = 7 misses the circle entirely')),
                ex('How many points does y = 5 share with that circle?',
                   ['x² = 0, so x = 0 only.',
                    '**One**: the line is tangent at (0, 5).'],
                   circle_line(5, 0, 5, ((0, 5),), label='tangent at the top')),
            ],
        },
        {
            'title': 'Systems with two curves',
            'fact': 'equate the two expressions  |  you may get a higher-degree equation',
            'text': 'Two parabolas, or a parabola and a reciprocal, follow the same rule. The '
                    'resulting equation may be cubic or quartic, so factor fully and keep every '
                    'root.',
            'figs': [P.nonlinear_system(f=lambda x: x * x, g=lambda x: 2 * x * x - 4,
                                        solutions=((2, 4), (-2, 4)), xmin=-4, xmax=4,
                                        ymin=-5, ymax=10,
                                        legend=('y = x²', 'y = 2x² − 4'),
                                        label='two curves, two crossings')],
            'caption': 'Both curves are even, so the crossings come in a symmetric pair. '
                       'Equating them gives x² = 4 and both roots count.',
            'examples': [
                ex('Solve y = x² and y = 2x² − 4.',
                   ['x² = 2x² − 4 gives x² = 4.',
                    '**(2, 4) and (−2, 4)**.'],
                   P.nonlinear_system(f=lambda x: x * x, g=lambda x: 2 * x * x - 4,
                                      solutions=((2, 4), (-2, 4)), xmin=-4, xmax=4,
                                      ymin=-5, ymax=10,
                                      legend=('y = x²', 'y = 2x² − 4'))),
                ex('Solve y = x² and y = 4/x for x ≠ 0.',
                   ['x² = 4/x, so x³ = 4 and x = ³√4 ≈ 1.587.',
                    'One real intersection, near **(1.587, 2.520)**.'],
                   P.nonlinear_system(f=lambda x: x * x, g=lambda x: 4.0 / x if x else None,
                                      solutions=((1.587, 2.520),), xmin=-4, xmax=4,
                                      ymin=-6, ymax=10,
                                      legend=('y = x²', 'y = 4/x'),
                                      label='a cube root, not a square root')),
                ex('Solve y = x² − 1 and y = 1 − x².',
                   ['x² − 1 = 1 − x² gives 2x² = 2.',
                    '**(1, 0) and (−1, 0)**.'],
                   P.nonlinear_system(f=lambda x: x * x - 1, g=lambda x: 1 - x * x,
                                      solutions=((1, 0), (-1, 0)), xmin=-3, xmax=3,
                                      ymin=-4, ymax=4,
                                      legend=('y = x² − 1', 'y = 1 − x²'),
                                      label='they meet on the x-axis')),
            ],
        },
        {
            'title': 'Reading a system off a graph',
            'fact': 'a solution is a point the two graphs share  |  count intersections, not '
                    'curves',
            'text': 'Desmos makes this almost free: enter both equations and click each '
                    'crossing. The SAT often asks only for the number of solutions, or for one '
                    'coordinate of one solution.',
            'figs': [SUB],
            'caption': 'Two crossings means two solutions, and each one is a pair (x, y). '
                       'Reading off only the x-values answers half the question.',
            'examples': [
                ex('Two graphs cross at (3, 9) and (−1, 1). How many solutions does the '
                   'system have?',
                   ['**Two** — one for each shared point.'],
                   SUB),
                ex('A line touches a parabola at one point. How many solutions does that system '
                   'have?',
                   ['**One.** A tangency is a single repeated solution.'],
                   TANGENT),
                ex('A system’s solutions are (3, 9) and (−1, 1). What is the sum of '
                   'the x-coordinates?',
                   ['3 + (−1) = **2**. This also equals −b/a for the quadratic you '
                    'solved.'],
                   SUB),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. Here it is **an '
                    'intersection finder**. Enter both equations and click every crossing; '
                    'Desmos gives you each point exactly.',
    'desmos': [
        ('Solve the system y = x² and y = 2x + 3. What is the larger x-value?',
         'y=x^2  and  y=2x+3', 'Graph both and click the intersections.', '3'),
        ('For that system, what is the sum of the two x-values?', '3+(-1)',
         'Equals −b/a for x² − 2x − 3.', '2'),
        ('For what value of b does y = 2x + b meet y = x² exactly once?', '-(2^2)/4',
         'Set 4 + 4b = 0.', '-1'),
        ('How many times does y = 2x − 5 meet y = x²?', 'y=x^2  and  y=2x-5',
         'The line passes below the parabola.', '0'),
        ('Solve x² + y² = 25 and y = x + 1. What is the larger x-value?',
         'x^2+(x+1)^2=25', 'Substitute, then solve the quadratic.', '3'),
        ('Solve y = x² and y = 2x² − 4. What are the x-values?', 'x^2=2x^2-4',
         'Both curves are even, so the answers are symmetric.', '2 and -2'),
        ('Solve y = x² and y = 4/x. What is x, to three decimal places?', 'x^3=4',
         'A cube root, not a square root.', '1.587'),
        ('How many points does the line y = 5 share with x² + y² = 25?', '25-5^2',
         'Zero under the root means tangency.', '1'),
        ('Solve y = x² − 4 and y = 3x. What is the larger x-value?', 'x^2-4=3x',
         'Factor x² − 3x − 4.', '4'),
        ('For what value of c does y = x + c meet y = x² exactly once?', '-1/4',
         'Set 1 + 4c = 0.', '-0.25'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'When a question fixes a constant so two graphs meet **exactly once**, it is '
                   'a discriminant question wearing a disguise.',
    'part2': [
        ('P1', 'Hard',
         'In the xy-plane, the graphs of y = x² and y = 2x + 3 intersect at two points. '
         'What is the sum of the x-coordinates of those points?', '2',
         ['x² = 2x + 3 gives x² − 2x − 3 = 0, whose roots sum to '
          '−b/a = **2**.',
          'The roots are 3 and −1. A common wrong answer is the larger root alone.'],
         SUB),
        ('P2', 'Hard',
         'In the xy-plane, the line y = 2x + b, where b is a constant, intersects the parabola '
         'y = x² at exactly one point. What is the value of b?', '−1',
         ['x² − 2x − b = 0 must have discriminant zero: 4 + 4b = 0.',
          'b = **−1**. Five of your class answered +1 — the method was right and the '
          'sign was lost at the last step.'],
         TANGENT),
        ('P3', 'Hard',
         'How many solutions does the system y = x² and y = 2x − 5 have?', 'Zero',
         ['x² − 2x + 5 = 0 has discriminant 4 − 20 = −16 < 0.',
          '**No real solutions** — the line passes entirely below the parabola.'],
         P.nonlinear_system(f=lambda x: x * x, g=lambda x: 2 * x - 5, solutions=(),
                            xmin=-3, xmax=5, ymin=-6, ymax=10,
                            legend=('y = x²', 'y = 2x − 5'),
                            label='no crossing at all')),
        ('P4', 'Hard',
         'The system y = x² − 4 and y = 3x has two solutions. What is the greater of '
         'the two x-values?', '4',
         ['x² − 3x − 4 = 0 factors as (x − 4)(x + 1) = 0.',
          'x = 4 or −1, so the greater is **4**.'],
         P.nonlinear_system(f=lambda x: x * x - 4, g=lambda x: 3 * x,
                            solutions=((4, 12), (-1, -3)), xmin=-3, xmax=6, ymin=-6, ymax=14,
                            legend=('y = x² − 4', 'y = 3x'))),
        ('P5', 'Hard',
         'Which ordered pair is a solution to the system y = x² and y = 2x + 3?',
         '(−1, 1)',
         ['Substituting x = −1: y = 1 from the parabola and y = −2 + 3 = 1 from the '
          'line, so both hold.',
          '**(−1, 1).** A common wrong answer uses the right y but the wrong sign of x.'],
         SUB),
        ('P6', 'Hard',
         'How many points of intersection do the line y = 5 and the circle x² + y² = '
         '25 have?', 'One',
         ['Substituting gives x² + 25 = 25, so x² = 0 and x = 0 only.',
          '**One** point, (0, 5): the line is tangent at the top of the circle.'],
         circle_line(5, 0, 5, ((0, 5),), label='tangent at (0, 5)')),
        ('P7', 'Very hard',
         'The system x² + y² = 25 and y = x + 1 has two solutions. What is the greater '
         'of the two x-values?', '3',
         ['x² + (x + 1)² = 25 gives 2x² + 2x − 24 = 0, so x² + x '
          '− 12 = 0 and (x + 4)(x − 3) = 0.',
          'x = 3 or −4, so the greater is **3**. A common wrong answer is the circle’s '
          'radius, not a solution.'],
         circle_line(5, 1, 1, ((3, 4), (-4, -3)))),
        ('P8', 'Very hard',
         'For what value of c does the line y = x + c intersect the parabola y = x² at '
         'exactly one point?', '−1/4',
         ['x² − x − c = 0 must have discriminant zero: 1 + 4c = 0.',
          'c = **−1/4**. A common wrong answer drops the minus sign.'],
         P.nonlinear_system(f=lambda x: x * x, g=lambda x: x - 0.25,
                            solutions=((0.5, 0.25),), xmin=-2, xmax=3, ymin=-2, ymax=6,
                            legend=('y = x²', 'y = x − ¼'),
                            label='tangent at (0.5, 0.25)')),
        ('P9', 'Very hard',
         'The graphs of y = x² and y = 2x² − 4 intersect at two points. What is '
         'the y-coordinate of both points?', '4',
         ['x² = 2x² − 4 gives x² = 4, so x = ±2.',
          'In either case y = x² = **4**. Both points share the same height.'],
         P.nonlinear_system(f=lambda x: x * x, g=lambda x: 2 * x * x - 4,
                            solutions=((2, 4), (-2, 4)), xmin=-4, xmax=4, ymin=-5, ymax=10,
                            legend=('y = x²', 'y = 2x² − 4'),
                            label='both crossings at y = 4')),
        ('P10', 'Very hard',
         'In the xy-plane, the line y = mx intersects the parabola y = x² + 4 at exactly '
         'one point, where m is a positive constant. What is the value of m?', '4',
         ['x² − mx + 4 = 0 needs m² − 16 = 0, so m = ±4.',
          'With m positive, m = **4**. A common wrong answer is m², stopped one step '
          'early.'],
         P.nonlinear_system(f=lambda x: x * x + 4, g=lambda x: 4 * x,
                            solutions=((2, 8),), xmin=-1, xmax=5, ymin=0, ymax=16,
                            legend=('y = x² + 4', 'y = 4x'),
                            label='tangent at (2, 8)')),
        ('P11', 'Very hard',
         'The graphs of y = x² − 1 and y = 1 − x² intersect at how many '
         'points, and where?', 'Two points, at (1, 0) and (−1, 0)',
         ['x² − 1 = 1 − x² gives 2x² = 2, so x = ±1, and then '
          'y = 1 − 1 = 0.',
          '**(1, 0) and (−1, 0)** — the two parabolas meet on the x-axis.'],
         P.nonlinear_system(f=lambda x: x * x - 1, g=lambda x: 1 - x * x,
                            solutions=((1, 0), (-1, 0)), xmin=-3, xmax=3, ymin=-4, ymax=4,
                            legend=('y = x² − 1', 'y = 1 − x²'))),
        ('P12', 'Very hard',
         'A system consists of y = x² and y = k, where k is a constant. For which values '
         'of k does the system have exactly two real solutions?', 'k > 0',
         ['x² = k has two real solutions exactly when k is positive, one when k = 0, and '
          'none when k is negative.',
          '**k > 0.** The horizontal line must sit above the vertex.'],
         P.graph([(lambda x: x * x, INK, 'y = x²')],
                 xmin=-4, xmax=4, ymin=-3, ymax=10, xstep=1, ystep=1, xtick_every=2,
                 ytick_every=2,
                 hlines=((4, GREEN, 'k > 0: two'), (0, AMBER, 'k = 0: one'),
                         (-2, RED, 'k < 0: none')),
                 label='how high the line sits decides everything')),
    ],
    'habit': 'Set the discriminant to zero, then check the sign of your answer against the '
             'graph. On Test 5 ten students reached the right equation for b and five of them '
             'wrote +1 instead of −1.',
}
