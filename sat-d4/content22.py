# -*- coding: utf-8 -*-
"""SAT Math 2.2 — Quadratic Equations."""
import algebra as A
import plot as P
from svgbase import AMBER, GREEN, INK, RED


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


def zero_product(factors=('x − 3', 'x − 4'), roots=('3', '4'), w=330, h=150):
    """Factored form, each factor set to zero, then the two roots."""
    return A.flow(('(%s)(%s) = 0' % factors,
                   '%s = 0  or  %s = 0' % factors,
                   'x = %s or x = %s' % tuple(str(r) for r in roots)),
                  note='the product is zero only when a factor is zero', w=w, h=h)


FORMULA = A.rules_panel(
    (('x = [−b ± √(b² − 4ac)] ÷ 2a', 'not on the reference sheet'),
     ('write a, b and c down first', 'with their signs'),
     ('b² − 4ac is the discriminant', 'it decides how many roots')),
    title='the formula works on every quadratic, factorable or not', w=340)

LESSON = {
    'code': '2.2',
    'title': 'Quadratic Equations',
    'sections': [
        {
            'title': 'Solving by factoring',
            'fact': 'get = 0 first  |  factor  |  set each factor to zero',
            'text': 'The zero-product property only works against zero, so move everything to '
                    'one side before you factor. Dividing both sides by a variable loses a '
                    'solution — factor it out instead.',
            'figs': [zero_product(('x − 3', 'x − 4'), ('3', '4')),
                     P.parabola(1, 3.5, -0.25, roots=(3, 4), xmin=1, xmax=6, ymin=-1.5,
                                ymax=3, label='y = x² − 7x + 12')],
            'caption': 'The factored form names the roots directly, and the graph shows them '
                       'as the two places the curve meets the axis. Both brackets are zero '
                       'nowhere else, which is why the method works.',
            'examples': [
                ex('Solve x² − 7x + 12 = 0.',
                   ['(x − 3)(x − 4) = 0.', 'x = **3 or 4**.'],
                   zero_product(('x − 3', 'x − 4'), ('3', '4'))),
                ex('Solve x² = 5x.',
                   ['x² − 5x = 0, so x(x − 5) = 0.',
                    'x = **0 or 5**. Dividing by x at the start would have lost x = 0.'],
                   zero_product(('x', 'x − 5'), ('0', '5'))),
                ex('Solve 2x² + 7x + 3 = 0.',
                   ['(2x + 1)(x + 3) = 0.', 'x = **−1/2 or −3**.'],
                   zero_product(('2x + 1', 'x + 3'), ('−1/2', '−3'))),
            ],
        },
        {
            'title': 'The quadratic formula',
            'fact': 'x = [−b ± √(b² − 4ac)] ÷ 2a — not on '
                    'the reference sheet',
            'text': 'Learn it: the SAT does not give it to you. Write a, b and c down before '
                    'substituting, and keep the signs of b and c with their numbers. It works '
                    'on every quadratic, factorable or not.',
            'figs': [FORMULA],
            'caption': 'Three lines worth memorising. The sign of b travels with it: for '
                       'x² − 6x + 5 the value of b is −6, so −b is +6.',
            'examples': [
                ex('Solve x² + 4x + 1 = 0.',
                   ['a = 1, b = 4, c = 1, so the discriminant is 16 − 4 = 12.',
                    'x = (−4 ± √12)/2 = **−2 ± √3**.'],
                   A.flow(('a = 1, b = 4, c = 1', 'b² − 4ac = 12',
                           'x = (−4 ± √12)/2', '−2 ± √3'))),
                ex('Solve 2x² − 3x − 2 = 0.',
                   ['Discriminant = 9 + 16 = 25, and √25 = 5.',
                    'x = (3 ± 5)/4, so x = **2 or −1/2**.'],
                   P.parabola(2, 0.75, -3.125, roots=(-0.5, 2), xmin=-2, xmax=3.5, ymin=-4,
                              ymax=4, label='y = 2x² − 3x − 2')),
                ex('Why keep the sign with b?',
                   ['For x² − 6x + 5, b = −6, so −b = +6. Writing b = 6 '
                    'flips both roots — the single most common slip with the formula.'],
                   A.rules_panel((('x² − 6x + 5', 'b = −6, so −b = +6'),
                                  ('writing b = 6', 'gives −5 and −1 — both '
                                   'wrong')), w=330)),
            ],
        },
        {
            'title': 'The discriminant',
            'fact': 'b² − 4ac > 0 → two real solutions  |  = 0 → one  |  '
                    '< 0 → none',
            'text': 'Whenever a question says ‘exactly one solution’, ‘a '
                    'repeated root’, ‘touches the x-axis once’ or ‘the line '
                    'is tangent’, it is asking you to set b² − 4ac = 0. One '
                    'idea, many disguises.',
            'figs': [P.discriminant_panels()],
            'caption': 'The discriminant is the quantity under the root, so it counts the '
                       'crossings: positive gives two, zero gives a touch, negative gives none '
                       'because the root of a negative is not real.',
            'examples': [
                ex('For what value of k does x² − 10x + k = 0 have exactly one '
                   'solution?',
                   ['100 − 4k = 0.', 'k = **25**.'],
                   P.parabola(1, 5, 0, roots=(5,), xmin=0, xmax=10, ymin=-4, ymax=12,
                              label='k = 25 gives a repeated root at x = 5')),
                ex('For what value of c does 4x² − 12x + c = 0 have exactly one real '
                   'solution?',
                   ['144 − 16c = 0.', 'c = **9**.'],
                   P.parabola(4, 1.5, 0, roots=(1.5,), xmin=-0.5, xmax=3.5, ymin=-3, ymax=12,
                              label='c = 9 gives a touch at x = 1.5')),
                ex('How many real solutions does x² + 2x + 5 = 0 have?',
                   ['4 − 20 = −16, which is negative.', '**None.**'],
                   P.parabola(1, -1, 4, roots=(), xmin=-5, xmax=3, ymin=-1, ymax=12,
                              label='the curve never reaches the axis')),
            ],
        },
        {
            'title': 'Sum and product of the roots',
            'fact': 'sum = −b/a  |  product = c/a',
            'text': 'When a question asks for the sum or product of the solutions, you never '
                    'need the solutions themselves. Watch the sign: for x² − 7x + 12 '
                    'the sum is +7, not −7.',
            'figs': [A.rules_panel(
                (('sum of the roots', '−b/a'), ('product of the roots', 'c/a'),
                 ('x² − 7x + 12', 'sum −(−7)/1 = 7, product 12/1 = 12')),
                title='read them straight off the coefficients', w=340)],
            'caption': 'The roots of x² − 7x + 12 are 3 and 4: they add to 7 and '
                       'multiply to 12, exactly as −b/a and c/a predict — without '
                       'solving anything.',
            'examples': [
                ex('What is the sum of the solutions of x² − 7x + 12 = 0?',
                   ['−b/a = −(−7)/1 = **7**. Checking: 3 + 4 = 7.'],
                   zero_product(('x − 3', 'x − 4'), ('3', '4'))),
                ex('What is the product of the solutions of 2x² + 7x + 3 = 0?',
                   ['c/a = 3/2 = **1.5**. Checking: (−1/2)(−3) = 1.5.'],
                   A.rules_panel((('2x² + 7x + 3', 'a = 2, c = 3'),
                                  ('product = c/a', '3/2 = 1.5')), w=300)),
                ex('The solutions of x² + bx + 10 = 0 sum to 7. What is b?',
                   ['−b = 7, so b = **−7**.'],
                   A.rules_panel((('sum = −b/a = −b', 'and the sum is 7'),
                                  ('so −b = 7', 'b = −7')), w=300)),
            ],
        },
        {
            'title': 'Completing the square and vertex form',
            'fact': 'x² + bx = (x + b/2)² − (b/2)²  |  vertex form '
                    'y = a(x − h)² + k has vertex (h, k)',
            'text': 'Halve the coefficient of x, square it, add and subtract it. Vertex form '
                    'hands you the turning point directly, which is why the SAT asks you to '
                    'produce it.',
            'figs': [P.parabola(1, 2, -1, roots=(1, 3), xmin=-2, xmax=6, ymin=-3, ymax=6,
                                label='y = x² − 4x + 3 = (x − 2)² − 1')],
            'caption': 'Both forms draw the same curve. Standard form shows the y-intercept 3; '
                       'vertex form shows the turning point (2, −1) without any further '
                       'work.',
            'examples': [
                ex('Write x² + 6x + 5 in vertex form.',
                   ['Half of 6 is 3, and 3² = 9.',
                    '= (x + 3)² − 9 + 5 = **(x + 3)² − 4**, vertex '
                    '(−3, −4).'],
                   P.parabola(1, -3, -4, roots=(-5, -1), xmin=-7, xmax=1, ymin=-6, ymax=6,
                              label='vertex (−3, −4)')),
                ex('Write x² − 4x + 7 in vertex form.',
                   ['Half of −4 is −2, squared is 4.',
                    '= **(x − 2)² + 3**, vertex (2, 3).'],
                   P.parabola(1, 2, 3, roots=(), xmin=-2, xmax=6, ymin=0, ymax=12,
                              label='vertex (2, 3) — no real roots')),
                ex('What is the minimum value of y = x² − 4x + 7?',
                   ['From the vertex form, the smallest (x − 2)² can be is 0.',
                    'The minimum is **3**, reached at x = 2.'],
                   P.parabola(1, 2, 3, roots=(), xmin=-2, xmax=6, ymin=0, ymax=12,
                              label='minimum 3 at x = 2')),
            ],
        },
        {
            'title': 'Quadratic word problems',
            'fact': 'maximum or minimum → the vertex  |  hits the ground / breaks even '
                    '→ a root',
            'text': 'Translate the question into one of two requests. ‘What price gives '
                    'the greatest revenue?’ wants the vertex’s x. ‘What is the '
                    'greatest revenue?’ wants its y. Confusing those two costs marks every '
                    'time.',
            'figs': [P.parabola(-2, 9, 162, roots=(0, 18), xmin=-1, xmax=19, ymin=-20,
                                ymax=200, label='R(x) = −2x² + 36x',
                                show_axis=True, h=215)],
            'caption': 'The vertex (9, 162) answers both questions at once: x = 9 is the price '
                       'that maximises revenue, y = 162 is the revenue itself. The roots are '
                       'where revenue falls to zero.',
            'examples': [
                ex('R(x) = −2x² + 36x. What price x gives the maximum revenue?',
                   ['Vertex at x = −b/2a = −36/(−4) = **$9**.'],
                   P.parabola(-2, 9, 162, roots=(0, 18), xmin=-1, xmax=19, ymin=-20, ymax=200,
                              label='x = 9 at the vertex')),
                ex('For that same R, what is the maximum revenue?',
                   ['R(9) = −2(81) + 324 = **$162**. Note this answers a different '
                    'question from the one above.'],
                   P.parabola(-2, 9, 162, roots=(0, 18), xmin=-1, xmax=19, ymin=-20, ymax=200,
                              label='y = 162 at the vertex')),
                ex('A ball’s height is h(t) = −5t² + 30t. When does it land?',
                   ['−5t(t − 6) = 0, so t = 0 or 6.',
                    'It lands at **t = 6 seconds**; t = 0 is the launch.'],
                   P.parabola(-5, 3, 45, roots=(0, 6), xmin=-0.5, xmax=6.5, ymin=-6, ymax=55,
                              label='h(t) = −5t² + 30t')),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. Here it is **a root '
                    'finder and a vertex finder**. Type the equation and read the x-intercepts, '
                    'or type the function and click the turning point.',
    'desmos': [
        ('What are the solutions of x² − 7x + 12 = 0?', 'x^2-7x+12=0',
         'Type the equation; Desmos marks the roots on the x-axis.', '3 and 4'),
        ('What is the sum of the solutions of x² − 7x + 12 = 0?', '3+4',
         'Or use −b/a directly.', '7'),
        ('For what value of k does x² − 10x + k = 0 have exactly one solution?',
         '10^2/4', 'Set the discriminant to zero: k = b²/4a.', '25'),
        ('What is the discriminant of x² + 2x + 5 = 0?', '2^2-4*1*5',
         'Negative means no real solutions.', '-16'),
        ('Solve 2x² − 3x − 2 = 0.', '2x^2-3x-2=0',
         'Graph it and read both x-intercepts.', '2 and -0.5'),
        ('What is the minimum value of y = x² − 4x + 7?', 'y=x^2-4x+7',
         'Graph it and click the turning point.', '3'),
        ('R(x) = −2x² + 36x. What value of x gives the maximum?', 'y=-2x^2+36x',
         'Click the vertex; Desmos labels it.', '9'),
        ('For that R, what is the maximum value?', '-2*9^2+36*9',
         'The y of the vertex, not the x.', '162'),
        ('At what positive time does h(t) = −5t² + 30t return to zero?',
         '-5t^2+30t=0', 'Read the right-hand root.', '6'),
        ('What is the value of the discriminant of 4x² − 12x + 9?', '12^2-4*4*9',
         'Zero means one repeated root.', '0'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'Two questions decide most of these: is it asking **where** or **how much**, '
                   'and does ‘exactly one solution’ appear anywhere in the stem?',
    'part2': [
        ('P1', 'Hard',
         'What is the sum of the solutions of the equation x² − 7x + 12 = 0?', '7',
         ['Sum of roots = −b/a = −(−7)/1 = **7**, and indeed 3 + 4 = 7.',
          'A common wrong answer applies the formula without the sign of b — the error '
          'five of your class made on Test 5.'],
         zero_product(('x − 3', 'x − 4'), ('3', '4'))),
        ('P2', 'Hard', 'If x² = 5x and x ≠ 0, what is the value of x?', '5',
         ['x² − 5x = 0 gives x(x − 5) = 0, so x = 0 or 5.',
          'The condition x ≠ 0 leaves **5**. Dividing by x at the start would also reach '
          '5, but it silently discards a solution, which matters when the question does not '
          'rule it out.'],
         zero_product(('x', 'x − 5'), ('0', '5'))),
        ('P3', 'Hard',
         'For what value of k does the equation x² − 10x + k = 0 have exactly one '
         'real solution?', '25',
         ['Exactly one solution means b² − 4ac = 0.',
          '100 − 4k = 0, so k = **25**. A common wrong answer is b/2 and B is b itself, '
          'both read off the equation rather than derived.'],
         P.parabola(1, 5, 0, roots=(5,), xmin=0, xmax=10, ymin=-4, ymax=12,
                    label='k = 25: a repeated root at x = 5')),
        ('P4', 'Hard',
         'A candle shop’s daily revenue, in dollars, is R(x) = −2x² + 36x, where '
         'x is the price of one candle. What price gives the maximum daily revenue?', '$9',
         ['The vertex is at x = −b/2a = −36/(−4) = **$9**.',
          'A common wrong answer is the maximum revenue R(9) = 162, which answers a different '
          'question; C is the coefficient read straight off the equation.'],
         P.parabola(-2, 9, 162, roots=(0, 18), xmin=-1, xmax=19, ymin=-20, ymax=200,
                    label='vertex (9, 162)')),
        ('P5', 'Hard', 'Write an equivalent form of x² − 4x + 7.',
         '(x − 2)² + 3',
         ['Half of −4 is −2 and (−2)² = 4, so x² − 4x = '
          '(x − 2)² − 4.',
          '= **(x − 2)² + 3**. A common wrong answer forgets to subtract the 4 back '
          'out.'],
         P.parabola(1, 2, 3, roots=(), xmin=-2, xmax=6, ymin=0, ymax=12,
                    label='vertex (2, 3)')),
        ('P6', 'Hard',
         'How many distinct real solutions does x² + 2x + 5 = 0 have?', 'Zero',
         ['b² − 4ac = 4 − 20 = −16 < 0.',
          'A negative discriminant means **no real solutions** — the parabola never '
          'reaches the x-axis.'],
         P.discriminant_panels()),
        ('P7', 'Very hard',
         'A ball is thrown upward and its height, in metres, after t seconds is '
         'h(t) = −5t² + 30t. What is the maximum height reached, in metres?', '45',
         ['The vertex is at t = −30/(−10) = 3 seconds.',
          'h(3) = −45 + 90 = **45 metres**. Answering 3 gives the time, not the height.'],
         P.parabola(-5, 3, 45, roots=(0, 6), xmin=-0.5, xmax=6.5, ymin=-6, ymax=55,
                    label='vertex (3, 45)')),
        ('P8', 'Very hard',
         'In the equation 4x² − 12x + c = 0, c is a constant. If the equation has '
         'exactly one real solution, what is the value of c?', '9',
         ['144 − 16c = 0, so c = 144/16 = **9**.',
          'A common wrong answer is 12/4, read off the equation rather than derived.'],
         P.parabola(4, 1.5, 0, roots=(1.5,), xmin=-0.5, xmax=3.5, ymin=-3, ymax=12,
                    label='c = 9: a touch at x = 1.5')),
        ('P9', 'Very hard',
         'The solutions of 2x² − 3x − 2 = 0 are p and q. What is the value of '
         'pq?', '−1',
         ['Product of roots = c/a = −2/2 = **−1**. Checking: the roots are 2 and '
          '−1/2, and 2 × (−1/2) = −1.',
          'A common wrong answer uses c/a without the sign of c.'],
         P.parabola(2, 0.75, -3.125, roots=(-0.5, 2), xmin=-2, xmax=3.5, ymin=-4, ymax=4,
                    label='roots 2 and −1/2')),
        ('P10', 'Very hard',
         'The graph of y = x² + bx + 10 has its vertex on the line x = 3.5. What is the '
         'value of b?', '−7',
         ['The vertex sits at x = −b/2a = −b/2.',
          '−b/2 = 3.5 gives b = **−7**. A common wrong answer drops the minus sign.'],
         P.parabola(1, 3.5, -2.25, roots=(2, 5), xmin=-1, xmax=8, ymin=-4, ymax=12,
                    label='axis of symmetry x = 3.5')),
        ('P11', 'Very hard',
         'The equation x² + 4x + 1 = 0 has solutions of the form −2 ± √n, '
         'where n is a constant. What is the value of n?', '3',
         ['Discriminant = 16 − 4 = 12, so x = (−4 ± √12)/2 = −2 '
          '± √12/2.',
          '√12/2 = 2√3/2 = √3, so n = **3**.'],
         A.flow(('b² − 4ac = 12', 'x = (−4 ± √12)/2',
                 '−2 ± √3', 'n = 3'))),
        ('P12', 'Very hard',
         'A rectangular garden has a perimeter of 44 metres and an area of 117 square metres. '
         'What is the length of its longer side, in metres?', '13',
         ['Half the perimeter is 22, so the sides are x and 22 − x with '
          'x(22 − x) = 117.',
          'x² − 22x + 117 = 0 factors as (x − 9)(x − 13) = 0, giving sides '
          '9 and **13**. A common wrong answer is the shorter side.'],
         zero_product(('x − 9', 'x − 13'), ('9', '13'))),
    ],
    'habit': 'The quadratic formula is **not** on the reference sheet. Write a, b and c down '
             'with their signs before you substitute — losing the sign of b is the most '
             'expensive habit in this topic.',
}
