# -*- coding: utf-8 -*-
"""SAT Math 2.3 — Polynomials."""
import algebra as A
import plot as P
from svgbase import AMBER, GREEN, INK, RED


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


CUBIC = P.polynomial((1, -2, -5, 6), (-2, 1, 3), xmin=-3.2, xmax=4,
                     label='p(x) = (x + 2)(x − 1)(x − 3)')
TOUCH = P.polynomial((1, 1, -5, 3), (-3, 1),
                     xmin=-4.4, xmax=2.6, ymin=-10, ymax=14,
                     label='p(x) = (x − 1)²(x + 3)',
                     multiplicity=((1.0, 2.6, 'touches at x = 1'),
                                   (-3.0, -3.4, 'crosses at x = −3')))

LESSON = {
    'code': '2.3',
    'title': 'Polynomials',
    'sections': [
        {
            'title': 'Zeros, roots, factors and intercepts',
            'fact': 'all four words mean the same thing: p(a) = 0 ⇔ (x − a) is a '
                    'factor ⇔ (a, 0) is on the graph',
            'text': 'The SAT swaps these words freely inside one question. Translate whichever '
                    'you are given into whichever you need. A zero at x = 3 means the factor is '
                    '(x − 3) — note the sign flip.',
            'figs': [CUBIC, A.equiv_ring()],
            'caption': 'Each bracket switches off at one value of x, and that is where the '
                       'curve meets the axis. The four statements on the right are the same '
                       'fact in four vocabularies.',
            'examples': [
                ex('p(x) = (x + 2)(x − 1)(x − 3). What are its zeros?',
                   ['Set each factor to zero.', 'x = **−2, 1 and 3**. Each sign flips.'],
                   CUBIC),
                ex('A polynomial has zeros at x = −4 and x = 5. Give two of its factors.',
                   ['**(x + 4)** and **(x − 5)**.'],
                   A.rules_panel((('zero at x = −4', 'factor (x + 4)'),
                                  ('zero at x = 5', 'factor (x − 5)'),
                                  ('the sign always flips', 'x = a → (x − a)')),
                                 w=320)),
                ex('The graph of p crosses the x-axis at (7, 0). What does that tell you about '
                   'p?',
                   ['**p(7) = 0**, and (x − 7) is a factor of p(x).'],
                   A.equiv_ring(('p(7) = 0', '(x − 7) is a factor', '7 is a zero',
                                 '(7, 0) is on the graph'))),
            ],
        },
        {
            'title': 'The remainder and factor theorems',
            'fact': 'remainder on dividing by (x − a) is p(a)  |  remainder 0 ⇔ '
                    '(x − a) is a factor',
            'text': 'You never have to do the long division. To find the remainder, '
                    'substitute. Watch the sign: dividing by (x + 2) means a = −2, because '
                    'x + 2 = x − (−2).',
            'figs': [A.flow(('divide p(x) by (x − a)', 'substitute x = a',
                             'p(a) is the remainder'),
                            note='and if p(a) = 0, the divisor is a factor'),
                     A.rules_panel((('divide by (x − 3)', 'substitute x = +3'),
                                    ('divide by (x + 2)', 'substitute x = −2')),
                                   title='the sign flips on the way in', w=330)],
            'caption': 'No division at all: put the number that switches the divisor off into '
                       'p, and what comes out is the remainder. Zero means the divisor divides '
                       'exactly.',
            'examples': [
                ex('What is the remainder when p(x) = x³ − 4x² + 7x − 10 is '
                   'divided by x − 3?',
                   ['p(3) = 27 − 36 + 21 − 10 = **2**.'],
                   A.flow(('p(x) ÷ (x − 3)', 'p(3) = 27 − 36 + 21 − 10',
                           'remainder 2'))),
                ex('What is the remainder when p(x) = x³ + 2x − 5 is divided by x + 2?',
                   ['Here a = −2.', 'p(−2) = −8 − 4 − 5 = '
                    '**−17**.'],
                   A.flow(('p(x) ÷ (x + 2)', 'a = −2, not +2',
                           'p(−2) = −17'))),
                ex('Is (x − 2) a factor of x³ − 3x² + 4?',
                   ['p(2) = 8 − 12 + 4 = 0.',
                    '**Yes** — a remainder of zero means it is a factor.'],
                   A.flow(('p(2) = 8 − 12 + 4', 'remainder 0', '(x − 2) is a factor'))),
            ],
        },
        {
            'title': 'Degree, end behaviour and turning points',
            'fact': 'degree n has at most n zeros and at most n − 1 turning points',
            'text': 'The degree is the highest power. An odd-degree graph runs from '
                    'bottom-left to top-right (or the reverse if the leading coefficient is '
                    'negative); an even-degree graph has both ends pointing the same way.',
            'figs': [P.end_behaviour()],
            'caption': 'Four pictures cover every case. Odd degree sends the ends opposite '
                       'ways; even degree sends them the same way; the leading sign says which '
                       'way up.',
            'examples': [
                ex('How many turning points can a cubic have at most?',
                   ['Degree 3, so at most **2** turning points.'],
                   CUBIC),
                ex('Describe the end behaviour of p(x) = −x⁴ + 3x.',
                   ['Even degree with a negative leading coefficient, so **both ends go down**.'],
                   P.graph([(lambda x: -(x ** 4) / 4.0 + 3 * x, RED, 'y = −x⁴ + 3x')],
                           xmin=-3, xmax=3, ymin=-12, ymax=6, ystep=2, ytick_every=4,
                           label='both ends go down')),
                ex('A polynomial has degree 5. What is the greatest number of x-intercepts it '
                   'can have?',
                   ['**5.** It could have fewer, but never more than its degree.'],
                   A.rules_panel((('degree n', 'at most n zeros'),
                                  ('degree n', 'at most n − 1 turning points'),
                                  ('degree 5', '5 zeros, 4 turning points at most')), w=320)),
            ],
        },
        {
            'title': 'Multiplicity: crossing or touching',
            'fact': 'odd multiplicity → the graph crosses  |  even multiplicity → it '
                    'touches and turns back',
            'text': 'A repeated factor changes the shape at that zero. (x − 2)² makes '
                    'the curve bounce off the axis at x = 2; (x − 2)³ flattens but '
                    'still passes through.',
            'figs': [TOUCH],
            'caption': 'The squared factor at x = 1 turns the curve back without letting it '
                       'through; the single factor at x = −3 lets it cross. Count the '
                       'power on the bracket and you know which happens.',
            'examples': [
                ex('p(x) = (x − 1)²(x + 3). Describe the graph at each zero.',
                   ['At x = 1 the multiplicity is 2, so it **touches and turns**. At x = '
                    '−3 it is 1, so it **crosses**.'],
                   TOUCH),
                ex('A graph touches the x-axis at x = 4 without crossing. What does that say '
                   'about the factor?',
                   ['(x − 4) appears an **even** number of times — at least squared.'],
                   P.polynomial((1, -8, 16), (4,), xmin=1, xmax=7, ymin=-2, ymax=10,
                                label='(x − 4)² touches at x = 4',
                                multiplicity=((4.0, 2.4, 'even power → a bounce'),))),
                ex('What is the degree of p(x) = (x − 1)²(x + 3)?',
                   ['Add the multiplicities: 2 + 1 = **3**.'],
                   A.rules_panel((('(x − 1)²', 'contributes 2'),
                                  ('(x + 3)', 'contributes 1'),
                                  ('degree', '2 + 1 = 3')), w=300)),
            ],
        },
        {
            'title': 'Building a polynomial from its zeros',
            'fact': 'zeros a, b, c → p(x) = k(x − a)(x − b)(x − c)',
            'text': 'The zeros fix the shape but not the vertical scale, so a constant k '
                    'remains. One extra point — usually the y-intercept — pins k down.',
            'figs': [P.graph([(lambda x: (x - 1) * (x - 4), INK, 'k = 1'),
                              (lambda x: 2 * (x - 1) * (x - 4), GREEN, 'k = 2')],
                             xmin=-1, xmax=6, ymin=-4, ymax=10, ystep=2,
                             points=((1, 0, None, RED), (4, 0, None, RED), (0, 8, '(0, 8)', GREEN)),
                             label='same zeros, different k')],
            'caption': 'Both curves have zeros at 1 and 4; only the green one passes through '
                       '(0, 8). That extra point is what fixes k = 2.',
            'examples': [
                ex('Write a quadratic with zeros 2 and −5.',
                   ['**k(x − 2)(x + 5)** for any nonzero k; with k = 1, x² + 3x '
                    '− 10.'],
                   P.graph([(lambda x: (x - 2) * (x + 5), INK, 'k = 1')],
                           xmin=-7, xmax=4, ymin=-14, ymax=10, ystep=2, ytick_every=4,
                           points=((2, 0, None, RED), (-5, 0, None, RED)),
                           label='zeros at −5 and 2')),
                ex('A quadratic has zeros 1 and 4 and passes through (0, 8). Find it.',
                   ['p(x) = k(x − 1)(x − 4), and p(0) = 4k = 8, so k = 2.',
                    '**p(x) = 2(x − 1)(x − 4)**.'],
                   P.graph([(lambda x: 2 * (x - 1) * (x - 4), GREEN, 'k = 2')],
                           xmin=-1, xmax=6, ymin=-4, ymax=10, ystep=2,
                           points=((1, 0, None, RED), (4, 0, None, RED), (0, 8, '(0, 8)', GREEN)),
                           label='p(0) = 4k = 8 → k = 2')),
                ex('What is the y-intercept of p(x) = (x + 2)(x − 1)(x − 3)?',
                   ['p(0) = (2)(−1)(−3) = **6**.'],
                   P.polynomial((1, -2, -5, 6), (-2, 1, 3), xmin=-3.2, xmax=4,
                                label='y-intercept (0, 6)',
                                multiplicity=((0.4, 6.0, '(0, 6)'),))),
            ],
        },
        {
            'title': 'Dividing polynomials',
            'fact': 'p(x) = (divisor)(quotient) + remainder',
            'text': 'If a question gives you a quotient and a remainder, reassemble the '
                    'original with this identity rather than dividing again. When the remainder '
                    'is zero the divisor and quotient are factors.',
            'figs': [A.division_identity('x − 1', 'x + 4', '3',
                                         'x² + 3x − 1')],
            'caption': 'Multiply the divisor by the quotient and add the remainder: the '
                       'original polynomial reappears, with no long division anywhere.',
            'examples': [
                ex('x² + 5x + 6 divided by (x + 2) gives what quotient?',
                   ['x² + 5x + 6 = (x + 2)(x + 3), so the quotient is **x + 3** with '
                    'remainder 0.'],
                   A.division_identity('x + 2', 'x + 3', '0', 'x² + 5x + 6')),
                ex('p(x) divided by (x − 1) gives quotient x + 4 and remainder 3. Find '
                   'p(x).',
                   ['p(x) = (x − 1)(x + 4) + 3 = x² + 3x − 4 + 3.',
                    '= **x² + 3x − 1**.'],
                   A.division_identity('x − 1', 'x + 4', '3', 'x² + 3x − 1')),
                ex('Check that result using the remainder theorem.',
                   ['p(1) = 1 + 3 − 1 = **3**, which is the stated remainder. The '
                    'identity holds.'],
                   A.flow(('p(x) = x² + 3x − 1', 'p(1) = 1 + 3 − 1',
                           'remainder 3 ✓'))),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. For polynomials it is '
                    '**a zero finder**. Graph p and read where it meets the axis; substitute a '
                    'value to test a factor without dividing.',
    'desmos': [
        ('What is the value of x³ − 4x² + 7x − 10 at x = 3?',
         '3^3-4*3^2+7*3-10', 'The remainder theorem in one line.', '2'),
        ('What is the value of x³ + 2x − 5 at x = −2?', '(-2)^3+2*(-2)-5',
         'Dividing by x + 2 means substituting −2.', '-17'),
        ('Is x = 2 a zero of x³ − 3x² + 4?', '2^3-3*2^2+4',
         'A value of 0 confirms the factor.', '0 (yes)'),
        ('What is the y-intercept of y = (x + 2)(x − 1)(x − 3)?', '(0+2)*(0-1)*(0-3)',
         'Substitute x = 0.', '6'),
        ('Graph y = (x + 2)(x − 1)(x − 3). How many x-intercepts does it have?',
         'y=(x+2)(x-1)(x-3)', 'Count where the curve meets the axis.', '3'),
        ('For p(x) = k(x − 1)(x − 4) with p(0) = 8, what is k?', '8/((0-1)*(0-4))',
         'Solve 4k = 8.', '2'),
        ('Expand (x − 1)(x + 4) + 3 at x = 5 to check a division.', '(5-1)*(5+4)+3',
         'Compare with p(5) for p(x) = x² + 3x − 1.', '39'),
        ('What is x² + 3x − 1 at x = 5?', '5^2+3*5-1',
         'Matches the line above, confirming the identity.', '39'),
        ('Graph y = (x − 1)²(x + 3). At which zero does the curve only touch the '
         'axis?', 'y=(x-1)^2(x+3)', 'The squared factor makes it bounce.', 'x = 1'),
        ('What is the remainder when x⁴ − 1 is divided by x − 1?', '1^4-1',
         'Zero means (x − 1) is a factor.', '0'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'Nearly every question here is the same idea in different words: '
                   '**p(a) = 0** means (x − a) is a factor means the graph crosses at '
                   '(a, 0).',
    'part2': [
        ('P1', 'Hard',
         'A shop’s weekly profit index is modelled by p(x) = x³ − 4x² + 7x '
         '− 10. What is the remainder when p(x) is divided by x − 3?', '2',
         ['By the remainder theorem the answer is p(3).',
          '27 − 36 + 21 − 10 = **2**. No division is needed.'],
         A.flow(('p(x) ÷ (x − 3)', 'p(3) = 27 − 36 + 21 − 10',
                 'remainder 2'))),
        ('P2', 'Hard',
         'The polynomial p is defined by p(x) = (x + 2)(x − 1)(x − 3). What is the '
         'y-intercept of the graph of y = p(x)?', '6',
         ['The y-intercept is p(0) = (2)(−1)(−3) = **6**.',
          'A common wrong answer loses one of the two negative signs.'],
         P.polynomial((1, -2, -5, 6), (-2, 1, 3), xmin=-3.2, xmax=4,
                      label='y-intercept (0, 6)', multiplicity=((0.4, 6.0, '(0, 6)'),))),
        ('P3', 'Hard',
         'If (x − 4) is a factor of the polynomial p, which of the following must be true?',
         'p(4) = 0',
         ['A factor (x − a) corresponds to a zero at x = a, so **p(4) = 0**.',
          'A common wrong answer flips the sign, which is the single most common error in this '
          'topic.'],
         A.equiv_ring(('p(4) = 0', '(x − 4) is a factor', '4 is a zero',
                       '(4, 0) is on the graph'))),
        ('P4', 'Hard',
         'The graph of a polynomial p touches the x-axis at x = 2 without crossing it. Which '
         'could be a factor of p(x)?', '(x − 2)²',
         ['Touching without crossing means **even multiplicity**, so (x − 2)².',
          'Two common wrong answers use odd multiplicities, and both would cross.'],
         P.polynomial((1, -4, 4), (2,), xmin=-1, xmax=5, ymin=-2, ymax=10,
                      label='(x − 2)² touches at x = 2',
                      multiplicity=((2.0, 2.4, 'a bounce, not a crossing'),))),
        ('P5', 'Hard',
         'What is the greatest possible number of turning points on the graph of a polynomial '
         'of degree 5?', '4',
         ['A polynomial of degree n has at most n − 1 turning points.',
          '5 − 1 = **4**.'],
         P.end_behaviour()),
        ('P6', 'Hard',
         'A quadratic function has zeros at x = 1 and x = 4 and passes through the point '
         '(0, 8). What is the value of the leading coefficient?', '2',
         ['p(x) = k(x − 1)(x − 4), so p(0) = k(−1)(−4) = 4k.',
          '4k = 8 gives k = **2**.'],
         P.graph([(lambda x: 2 * (x - 1) * (x - 4), GREEN, 'k = 2'),
                  (lambda x: (x - 1) * (x - 4), INK, 'k = 1')],
                 xmin=-1, xmax=6, ymin=-4, ymax=10, ystep=2,
                 points=((0, 8, '(0, 8)', RED),), label='only k = 2 passes through (0, 8)')),
        ('P7', 'Very hard',
         'When the polynomial p is divided by x − 1, the quotient is x + 4 and the '
         'remainder is 3. What is p(x)?', 'x² + 3x − 1',
         ['p(x) = (x − 1)(x + 4) + 3 = x² + 3x − 4 + 3.',
          '= **x² + 3x − 1**. A common wrong answer forgets to add the remainder.'],
         A.division_identity('x − 1', 'x + 4', '3', 'x² + 3x − 1')),
        ('P8', 'Very hard',
         'The polynomial p(x) = x³ + kx² − 5x + 6 has a factor of '
         '(x − 2). What is the value of k?', '−1',
         ['A factor (x − 2) means p(2) = 0.',
          '8 + 4k − 10 + 6 = 0, so 4k + 4 = 0 and k = **−1**. Check: 8 − 4 '
          '− 10 + 6 = 0.'],
         A.flow(('(x − 2) is a factor', 'p(2) = 0',
                 '8 + 4k − 10 + 6 = 0', 'k = −1'))),
        ('P9', 'Very hard',
         'The graph of y = p(x) crosses the x-axis at x = −3, touches it at x = 1, and p '
         'has degree 3. Which could be p(x)?', '(x + 3)(x − 1)²',
         ['Crossing at −3 needs (x + 3) to odd power; touching at 1 needs (x − 1) to '
          'even power; the degrees must total 3.',
          '= **(x + 3)(x − 1)²**. A common wrong answer swaps which zero is repeated; '
          'C has both signs wrong.'],
         TOUCH),
        ('P10', 'Very hard',
         'For p(x) = x³ + 2x − 5, what is the remainder when p(x) is divided by '
         'x + 2?', '−17',
         ['x + 2 = x − (−2), so substitute −2.',
          '−8 − 4 − 5 = **−17**. A common wrong answer substitutes +2 '
          'instead, which is the sign trap this question is built on.'],
         A.rules_panel((('divide by (x + 2)', 'a = −2'),
                        ('p(−2)', '−8 − 4 − 5 = −17'),
                        ('p(+2)', '8 + 4 − 5 = 7 — the trap')), w=320)),
        ('P11', 'Very hard',
         'A polynomial p of degree 4 has zeros at x = −1, 0, 2 and 2. State what is true '
         'here.', 'The graph crosses at x = −1 and x = 0 and touches at x = 2.',
         ['x = 2 appears twice, so it has **even multiplicity** and the curve turns back '
          'there; the other two zeros are simple and the curve passes through.',
          'A common wrong answer confuses the degree with the number of distinct intercepts.'],
         P.graph([(lambda x: x * (x + 1) * (x - 2) ** 2 / 2.0, INK, None)],
                 xmin=-2, xmax=3.4, ymin=-4, ymax=8, ystep=2,
                 points=((-1, 0, None, GREEN), (0, 0, None, GREEN), (2, 0, None, AMBER)),
                 notes=((2.0, 1.2, 'touches', AMBER), (-1.0, -1.6, 'crosses', GREEN)),
                 label='zeros −1, 0 and a repeated 2')),
        ('P12', 'Very hard',
         'The polynomial p(x) = x³ − 7x + 6 has x = 1 as a zero. What is the sum of '
         'its other two zeros?', '−1',
         ['Dividing by (x − 1) gives x² + x − 6, whose roots sum to '
          '−b/a = **−1** (they are 2 and −3).',
          'Alternatively all three zeros sum to 0 (no x² term), so the other two sum to '
          '0 − 1 = −1.'],
         P.polynomial((1, 0, -7, 6), (-3, 1, 2), xmin=-4, xmax=3.4, ymin=-10, ymax=16,
                      ystep=2, label='zeros −3, 1 and 2')),
    ],
    'habit': 'Watch the sign when you convert. A factor of (x + 2) means a zero at x = '
             '−2, and dividing by (x + 2) means substituting −2. Your class lost more '
             'marks to that flip than to any calculation.',
}
