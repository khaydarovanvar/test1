# -*- coding: utf-8 -*-
"""SAT Math 2.6 — Quadratic & Polynomial Graphs."""
import algebra as A
import plot as P
from svgbase import AMBER, GREEN, INK, RED


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


THREE_FORMS = P.parabola(1, 2, -1, roots=(1, 3), xmin=-2, xmax=6, ymin=-3, ymax=6,
                         label='y = x² − 4x + 3 = (x − 1)(x − 3) = '
                               '(x − 2)² − 1')
CUBIC = P.polynomial((1, -2, -5, 6), (-2, 1, 3), xmin=-3.2, xmax=4,
                     label='p(x) = (x + 2)(x − 1)(x − 3)')

LESSON = {
    'code': '2.6',
    'title': 'Quadratic & Polynomial Graphs',
    'sections': [
        {
            'title': 'Three forms, three facts',
            'fact': 'standard ax²+bx+c → y-intercept c  |  factored → '
                    'x-intercepts  |  vertex a(x−h)²+k → vertex (h, k)',
            'text': 'Each form hands you one fact for free. The question tells you which fact '
                    'it wants, and that tells you which form to produce. Converting between '
                    'them is the work; knowing which to aim for is the skill.',
            'figs': [THREE_FORMS,
                     A.rules_panel((('standard: x² − 4x + 3', 'y-intercept (0, 3)'),
                                    ('factored: (x − 1)(x − 3)',
                                     'x-intercepts 1 and 3'),
                                    ('vertex: (x − 2)² − 1', 'vertex (2, −1)')),
                                   title='one curve, three ways of writing it', w=330)],
            'caption': 'All three expressions describe the identical parabola. Which one you '
                       'write depends only on which number the question is asking for.',
            'examples': [
                ex('y = x² − 4x + 3. What is the y-intercept?',
                   ['Standard form gives it immediately: c = **3**, so (0, 3).'],
                   THREE_FORMS),
                ex('Write the same function in factored form and give the x-intercepts.',
                   ['(x − 1)(x − 3), so the x-intercepts are **(1, 0) and (3, 0)**.'],
                   THREE_FORMS),
                ex('Write it in vertex form and give the vertex.',
                   ['(x − 2)² − 1, so the vertex is **(2, −1)**.'],
                   THREE_FORMS),
            ],
        },
        {
            'title': 'Finding the vertex',
            'fact': 'x = −b/2a  |  or the midpoint of the two x-intercepts',
            'text': 'Both routes give the same x. Substitute it back to get the y. When a '
                    'question gives you the factored form, the midpoint of the roots is faster '
                    'than the formula.',
            'figs': [P.parabola(1, 3, -4, roots=(1, 5), xmin=-1, xmax=7, ymin=-6, ymax=6,
                                label='y = x² − 6x + 5: vertex at x = 3'),
                     A.rules_panel((('from standard form', 'x = −b/2a = 6/2 = 3'),
                                    ('from the roots 1 and 5', 'midpoint (1 + 5)/2 = 3'),
                                    ('then substitute', 'y = 9 − 18 + 5 = −4')),
                                   title='two routes, one answer', w=330)],
            'caption': 'The parabola is symmetric about its vertex, so the turning point sits '
                       'exactly halfway between the two crossings — which is why both '
                       'routes agree.',
            'examples': [
                ex('Find the vertex of y = x² − 6x + 5.',
                   ['x = 6/2 = 3, and y = 9 − 18 + 5 = −4.',
                    'Vertex **(3, −4)**.'],
                   P.parabola(1, 3, -4, roots=(1, 5), xmin=-1, xmax=7, ymin=-6, ymax=6,
                              label='vertex (3, −4)')),
                ex('Find the vertex of y = a(x − 3)(x + 5).',
                   ['Midpoint of 3 and −5 is (3 − 5)/2 = **x = −1**.'],
                   P.graph([(lambda x: 0.5 * (x - 3) * (x + 5), INK, None)],
                           xmin=-7, xmax=5, ymin=-10, ymax=8, xstep=1, ystep=2,
                           xtick_every=2, ytick_every=4,
                           points=((3, 0, None, GREEN), (-5, 0, None, GREEN),
                                   (-1, -8, None, RED)),
                           vlines=((-1, AMBER, 'x = −1'),),
                           label='halfway between −5 and 3')),
                ex('R(x) = −2x² + 36x. Find the x that maximises R.',
                   ['x = −36/(2 × −2) = **9**.'],
                   P.parabola(-2, 9, 162, roots=(0, 18), xmin=-1, xmax=19, ymin=-20, ymax=200,
                              label='maximum at x = 9')),
            ],
        },
        {
            'title': 'Which way does it open, and what does that mean?',
            'fact': 'a > 0 → opens up, vertex is a minimum  |  a < 0 → opens down, '
                    'vertex is a maximum',
            'text': 'The sign of a settles maximum against minimum on its own. A negative a '
                    'does not make everything else negative — the y-intercept, for '
                    'instance, can still be positive.',
            'figs': [P.graph([(lambda x: 0.6 * (x - 1) * (x + 3), INK, 'a > 0: minimum'),
                              (lambda x: -0.6 * (x - 1) * (x + 3), RED, 'a < 0: maximum')],
                             xmin=-5, xmax=3, ymin=-5, ymax=5, xstep=1, ystep=1,
                             xtick_every=2, ytick_every=2,
                             label='same roots, opposite signs of a')],
            'caption': 'Flipping the sign of a turns the curve over: the lowest point becomes '
                       'the highest. The roots stay exactly where they were.',
            'examples': [
                ex('y = a(x − 3)(x + 5) with a < 0. Does the vertex give a maximum or a '
                   'minimum?',
                   ['a < 0 means the parabola opens downward, so the vertex is a **maximum**, '
                    'at x = −1.'],
                   P.graph([(lambda x: -0.5 * (x - 3) * (x + 5), RED, None)],
                           xmin=-7, xmax=5, ymin=-6, ymax=10, xstep=1, ystep=2,
                           xtick_every=2, ytick_every=4,
                           points=((-1, 8, None, RED),),
                           vlines=((-1, AMBER, 'maximum at x = −1'),),
                           label='a < 0 → opens down')),
                ex('For that same function, is the y-intercept positive or negative?',
                   ['y(0) = a(−3)(5) = −15a. With a < 0 this is **positive**. A '
                    'negative a does not make the intercept negative — seven of your class '
                    'assumed it did.'],
                   A.rules_panel((('y(0) = a(−3)(5)', '= −15a'),
                                  ('a < 0', 'so −15a > 0'),
                                  ('the intercept', 'is positive')), w=310)),
                ex('y = 3x² + 12x + 7 has what kind of turning point?',
                   ['a = 3 > 0, so a **minimum**.'],
                   P.parabola(3, -2, -5, xmin=-6, xmax=2, ymin=-8, ymax=10,
                              label='a = 3 > 0 → minimum')),
            ],
        },
        {
            'title': 'Reading intercepts off a graph',
            'fact': 'x-intercepts are where y = 0  |  the y-intercept is where x = 0',
            'text': 'Substituting zero is the whole method. For the y-intercept of a product, '
                    'multiply the constants: the y-intercept of (x + 2)(x − 1)(x − 3) '
                    'is 2 × −1 × −3 = 6.',
            'figs': [CUBIC],
            'caption': 'Where the curve meets the x-axis, y is zero; where it meets the '
                       'y-axis, x is zero. Putting x = 0 into the three brackets gives the '
                       'height 6.',
            'examples': [
                ex('Find the y-intercept of y = (x − 1)(x − 3).',
                   ['y(0) = (−1)(−3) = **3**.'],
                   THREE_FORMS),
                ex('Find the x-intercepts of y = x² − 5x + 6.',
                   ['(x − 2)(x − 3) = 0.', '**(2, 0) and (3, 0)**.'],
                   P.parabola(1, 2.5, -0.25, roots=(2, 3), xmin=0, xmax=5, ymin=-1.5, ymax=3,
                              label='y = x² − 5x + 6')),
                ex('A parabola has x-intercepts 1 and 3 and passes through (0, 6). Find a in '
                   'y = a(x−1)(x−3).',
                   ['6 = a(−1)(−3) = 3a, so a = **2**.'],
                   P.graph([(lambda x: 2 * (x - 1) * (x - 3), GREEN, 'a = 2'),
                            (lambda x: (x - 1) * (x - 3), INK, 'a = 1')],
                           xmin=-1, xmax=5, ymin=-3, ymax=8, xstep=1, ystep=1,
                           xtick_every=2, ytick_every=2,
                           points=((0, 6, '(0, 6)', RED),),
                           label='a scales the height, not the roots')),
            ],
        },
        {
            'title': 'How many times does it cross?',
            'fact': 'the number of x-intercepts is decided by the discriminant b² − 4ac',
            'text': 'Two intercepts, one (a touch), or none. A question that says ‘touches '
                    'the x-axis at exactly one point’ or ‘is tangent to the '
                    'x-axis’ is asking you to set the discriminant to zero.',
            'figs': [P.discriminant_panels()],
            'caption': 'The same three cases as in 2.2, now read off the picture: cutting '
                       'twice, grazing once, or missing the axis altogether.',
            'examples': [
                ex('How many x-intercepts does y = x² + 2x + 5 have?',
                   ['4 − 20 = −16 < 0.',
                    '**None** — the parabola sits entirely above the axis.'],
                   P.parabola(1, -1, 4, roots=(), xmin=-5, xmax=3, ymin=-1, ymax=12,
                              label='vertex above the axis')),
                ex('For what k does y = x² + 8x + k touch the x-axis exactly once?',
                   ['64 − 4k = 0.', 'k = **16**.'],
                   P.parabola(1, -4, 0, roots=(-4,), xmin=-9, xmax=1, ymin=-3, ymax=12,
                              label='k = 16: a touch at x = −4')),
                ex('How many x-intercepts does y = 4x² − 12x + 9 have?',
                   ['144 − 144 = 0.', '**One**, at the vertex x = 1.5.'],
                   P.parabola(4, 1.5, 0, roots=(1.5,), xmin=-0.5, xmax=3.5, ymin=-3, ymax=12,
                              label='a repeated root at x = 1.5')),
            ],
        },
        {
            'title': 'Cubics and higher',
            'fact': 'the graph crosses at odd multiplicity and touches at even  |  degree n has '
                    'at most n − 1 turning points',
            'text': 'The factored form of a polynomial is a map of its graph. Each factor gives '
                    'a zero, and the power on that factor says whether the curve passes through '
                    'or bounces off.',
            'figs': [CUBIC,
                     P.polynomial((1, 1, -5, 3), (-3, 1), xmin=-4.4, xmax=2.6, ymin=-10,
                                  ymax=14, label='p(x) = (x − 1)²(x + 3)',
                                  multiplicity=((1.0, 2.6, 'touches'),
                                                (-3.0, -3.4, 'crosses')))],
            'caption': 'Three single factors on the left: three crossings and two turning '
                       'points. A squared factor on the right: the curve meets the axis at '
                       'x = 1 and turns straight back.',
            'examples': [
                ex('Describe the graph of y = (x + 2)(x − 1)(x − 3).',
                   ['Three simple zeros, so it **crosses at −2, 1 and 3**, with at most 2 '
                    'turning points.'],
                   CUBIC),
                ex('Describe the graph of y = (x − 1)²(x + 3) at x = 1.',
                   ['Multiplicity 2, so the curve **touches the axis and turns back**.'],
                   P.polynomial((1, 1, -5, 3), (-3, 1), xmin=-4.4, xmax=2.6, ymin=-10, ymax=14,
                                label='a bounce at x = 1',
                                multiplicity=((1.0, 2.6, 'touches'),))),
                ex('What is the y-intercept of y = (x + 2)(x − 1)(x − 3)?',
                   ['(2)(−1)(−3) = **6**.'],
                   P.polynomial((1, -2, -5, 6), (-2, 1, 3), xmin=-3.2, xmax=4,
                                label='y-intercept (0, 6)',
                                multiplicity=((0.4, 6.0, '(0, 6)'),))),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. This topic is **where '
                    'Desmos earns its keep**. Graph the function, click the vertex and the '
                    'intercepts, and the question usually answers itself.',
    'desmos': [
        ('Graph y = x² − 4x + 3. What is the vertex?', 'y=x^2-4x+3',
         'Click the turning point; Desmos labels it.', '(2, -1)'),
        ('For that graph, what are the x-intercepts?', 'y=x^2-4x+3',
         'Click where the curve meets the axis.', '1 and 3'),
        ('What is the minimum value of y = x² − 6x + 5?', 'y=x^2-6x+5',
         'Read the y of the vertex.', '-4'),
        ('R(x) = −2x² + 36x. What x gives the maximum?', 'y=-2x^2+36x',
         'The x of the vertex, not the y.', '9'),
        ('How many x-intercepts does y = x² + 2x + 5 have?', 'y=x^2+2x+5',
         'The curve never reaches the axis.', '0'),
        ('For what k does x² + 8x + k = 0 have exactly one solution?', '8^2/4',
         'Set the discriminant to zero.', '16'),
        ('What is the y-intercept of y = (x + 2)(x − 1)(x − 3)?',
         '(0+2)*(0-1)*(0-3)', 'Substitute x = 0.', '6'),
        ('Graph y = (x − 1)²(x + 3). How many turning points does it have?',
         'y=(x-1)^2(x+3)', 'Degree 3 allows at most 2.', '2'),
        ('A parabola has x-intercepts 1 and 3 and passes through (0, 6). What is a in '
         'y = a(x−1)(x−3)?', '6/((0-1)*(0-3))', 'Solve 3a = 6.', '2'),
        ('What is the value of −2x² + 36x at x = 9?', '-2*9^2+36*9',
         'The maximum revenue itself.', '162'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'Decide first whether the question wants **where** something happens (an x) '
                   'or **how much** it is (a y). Most of the lost marks in this topic are the '
                   'right number answering the wrong question.',
    'part2': [
        ('P1', 'Hard',
         'A candle shop’s daily revenue, in dollars, is modelled by R(x) = −2x² '
         '+ 36x, where x is the price of one candle in dollars. What price gives the maximum '
         'daily revenue?', '$9',
         ['The vertex sits at x = −b/2a = −36/(−4) = **$9**.',
          'A common wrong answer is the maximum revenue R(9) = 162 — the answer to a '
          'different question. Five of your class chose C, reading 36 straight off the '
          'equation.'],
         P.parabola(-2, 9, 162, roots=(0, 18), xmin=-1, xmax=19, ymin=-20, ymax=200,
                    label='vertex (9, 162)')),
        ('P2', 'Hard',
         'The graph of y = x² − 4x + 3 has its vertex at which point?', '(2, −1)',
         ['x = −b/2a = 4/2 = 2, and y = 4 − 8 + 3 = −1.',
          'Vertex **(2, −1)**. A common wrong answer drops the sign on −b.'],
         THREE_FORMS),
        ('P3', 'Hard',
         'A candle stall’s weekly profit is modelled by y = a(x − 3)(x + 5), where '
         'a < 0. Which must be true about the graph?',
         'The graph has a maximum at x = −1.',
         ['The zeros are 3 and −5, so the vertex is at their midpoint x = −1, and '
          'a < 0 makes it a **maximum**.',
          'The trap seven of your class took: the y-intercept is a(−3)(5) = −15a, '
          'which is *positive* when a < 0.'],
         P.graph([(lambda x: -0.5 * (x - 3) * (x + 5), RED, None)],
                 xmin=-7, xmax=5, ymin=-6, ymax=10, xstep=1, ystep=2, xtick_every=2,
                 ytick_every=4, points=((-1, 8, None, RED),),
                 vlines=((-1, AMBER, 'maximum at x = −1'),),
                 label='a < 0 with zeros −5 and 3')),
        ('P4', 'Hard',
         'What is the y-intercept of the graph of y = (x + 2)(x − 1)(x − 3)?', '6',
         ['Substitute x = 0: (2)(−1)(−3) = **6**.'],
         P.polynomial((1, -2, -5, 6), (-2, 1, 3), xmin=-3.2, xmax=4,
                      label='y-intercept (0, 6)', multiplicity=((0.4, 6.0, '(0, 6)'),))),
        ('P5', 'Hard',
         'For what value of k does the graph of y = x² + 8x + k touch the x-axis at '
         'exactly one point?', '16',
         ['Touching once means the discriminant is zero: 64 − 4k = 0.', 'k = **16**.'],
         P.parabola(1, -4, 0, roots=(-4,), xmin=-9, xmax=1, ymin=-3, ymax=12,
                    label='k = 16: one touch at x = −4')),
        ('P6', 'Hard',
         'How many x-intercepts does the graph of y = x² + 2x + 5 have?', 'Zero',
         ['b² − 4ac = 4 − 20 = −16 < 0.',
          'The parabola opens upward with vertex above the axis, so it has **no** '
          'x-intercepts.'],
         P.discriminant_panels()),
        ('P7', 'Very hard',
         'A parabola has x-intercepts at (1, 0) and (3, 0) and passes through (0, 6). What is '
         'the y-value of its vertex?', '−2',
         ['y = a(x − 1)(x − 3), and 6 = a(−1)(−3) = 3a gives a = 2. The '
          'vertex sits at x = 2.',
          'y = 2(1)(−1) = **−2**. A common wrong answer is the vertex y when a = 1.'],
         P.graph([(lambda x: 2 * (x - 1) * (x - 3), GREEN, 'a = 2')],
                 xmin=-1, xmax=5, ymin=-4, ymax=8, xstep=1, ystep=1, xtick_every=2,
                 ytick_every=2,
                 points=((0, 6, '(0, 6)', RED), (2, -2, '(2, −2)', RED)),
                 label='a = 2, vertex (2, −2)')),
        ('P8', 'Very hard',
         'The graph of a polynomial p crosses the x-axis at x = −3 and touches it at '
         'x = 1. Which could be p(x)?', '(x + 3)(x − 1)²',
         ['Crossing needs odd multiplicity, touching needs even.',
          '= **(x + 3)(x − 1)².** A common wrong answer swaps which zero is repeated; '
          'D has both signs wrong.'],
         P.polynomial((1, 1, -5, 3), (-3, 1), xmin=-4.4, xmax=2.6, ymin=-10, ymax=14,
                      label='crosses at −3, touches at 1',
                      multiplicity=((1.0, 2.6, 'touches'), (-3.0, -3.4, 'crosses')))),
        ('P9', 'Very hard',
         'The function f is defined by f(x) = −x² + 14x − 33. What is the maximum '
         'value of f?', '16',
         ['The vertex is at x = −14/(−2) = 7.',
          'f(7) = −49 + 98 − 33 = **16**. Answering 7 gives where the maximum occurs, '
          'not the maximum itself.'],
         P.parabola(-1, 7, 16, roots=(3, 11), xmin=1, xmax=13, ymin=-6, ymax=22,
                    label='vertex (7, 16)')),
        ('P10', 'Very hard',
         'The graph of y = a(x − h)² + k has its vertex at (4, −9) and passes '
         'through (1, 0). What is the value of a?', '1',
         ['y = a(x − 4)² − 9, and at (1, 0): 0 = a(9) − 9, so 9a = 9.',
          'a = **1**.'],
         P.parabola(1, 4, -9, roots=(1, 7), xmin=-1, xmax=9, ymin=-11, ymax=8,
                    label='vertex (4, −9) through (1, 0)')),
        ('P11', 'Very hard',
         'Two functions are given by f(x) = x² − 4x + 3 and g(x) = (x − 2)² '
         '− 1. State what is true here.', 'f and g are the same function.',
         ['Expanding g: x² − 4x + 4 − 1 = x² − 4x + 3 = f(x).',
          'They are **the same function written in two forms** — standard and vertex.'],
         THREE_FORMS),
        ('P12', 'Very hard',
         'The graph of y = x² + bx + 10 has its axis of symmetry at x = 3.5. What is the '
         'value of b?', '−7',
         ['The axis of symmetry is x = −b/2a = −b/2.',
          '−b/2 = 3.5 gives b = **−7**. A common wrong answer drops the minus sign.'],
         P.parabola(1, 3.5, -2.25, roots=(2, 5), xmin=-1, xmax=8, ymin=-4, ymax=12,
                    label='axis of symmetry x = 3.5')),
    ],
    'habit': 'The x of the vertex is where the maximum occurs; the y is the maximum itself. On '
             'Test 5 five students answered 36 and one answered 162 when the question wanted 9 '
             '— all three numbers were in the problem, and only one answered what was '
             'asked.',
}
