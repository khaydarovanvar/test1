# -*- coding: utf-8 -*-
"""SAT Math 2.7 — Function Notation & Transformations."""
import algebra as A
import plot as P
from svgbase import AMBER, GREEN, INK, RED


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


SHIFTS = P.graph(
    [(lambda x: x * x, INK, 'f(x) = x²'),
     (lambda x: (x - 2) ** 2, GREEN, 'f(x − 2): right 2'),
     (lambda x: x * x + 2, AMBER, 'f(x) + 2: up 2'),
     (lambda x: -(x * x), RED, '−f(x): flipped')],
    xmin=-4, xmax=5, ymin=-5, ymax=8, xstep=1, ystep=1, xtick_every=2, ytick_every=2,
    label='one curve, four positions')

LESSON = {
    'code': '2.7',
    'title': 'Function Notation & Transformations',
    'sections': [
        {
            'title': 'Function notation',
            'fact': 'f(3) means put 3 in  |  f(x) = 3 means the output is 3 — solve for x',
            'text': 'The brackets say substitute; they are not multiplication. f(a + b) is not '
                    'f(a) + f(b), and the difference between f(3) = ? and f(x) = 3 is the '
                    'difference between evaluating and solving.',
            'figs': [P.function_machine('f(x) = 2x² − 5x + 1', (0, 3, 4),
                                        (1, 4, 13)),
                     A.rules_panel((('f(3) = ?', 'put 3 in, read the output'),
                                    ('f(x) = 3', 'the output is 3, solve for x')),
                                   title='two different jobs, one notation', w=330)],
            'caption': 'The machine takes an input and returns an output. ‘Find f(3)’ '
                       'runs it forwards; ‘solve f(x) = 3’ runs it backwards and can '
                       'have two answers.',
            'examples': [
                ex('f(x) = 2x² − 5x + 1. Find f(3).',
                   ['2(9) − 15 + 1 = 18 − 15 + 1 = **4**.'],
                   P.function_machine('f(x) = 2x² − 5x + 1', (3,), (4,), h=110)),
                ex('For that f, solve f(x) = 1.',
                   ['2x² − 5x + 1 = 1 gives 2x² − 5x = 0, so '
                    'x(2x − 5) = 0.', 'x = **0 or 2.5**.'],
                   A.flow(('2x² − 5x + 1 = 1', '2x² − 5x = 0',
                           'x(2x − 5) = 0', 'x = 0 or 2.5'))),
                ex('f(x) = 3x − 5. Find f(a + 2).',
                   ['Substitute the whole expression: 3(a + 2) − 5.',
                    '= **3a + 1**.'],
                   A.flow(('f(a + 2)', '3(a + 2) − 5', '3a + 6 − 5', '3a + 1'))),
            ],
        },
        {
            'title': 'Composition',
            'fact': 'f(g(x)): work the inner function first, then feed that number outward',
            'text': 'Composition is done from the inside out, and the order matters: f(g(2)) is '
                    'usually not g(f(2)). Write the inner value down before touching the outer '
                    'function.',
            'figs': [A.composition('f(x) = 2x² − 5x + 1', 'g(x) = x − 3',
                                   4, 1, -2)],
            'caption': 'g(4) = 1 comes out of the first box and goes straight into the second, '
                       'where f(1) = −2. Reversing the boxes gives a different number '
                       'altogether.',
            'examples': [
                ex('f(x) = 2x² − 5x + 1 and g(x) = x − 3. Find f(g(4)).',
                   ['g(4) = 1 first.', 'f(1) = 2 − 5 + 1 = **−2**.'],
                   A.composition('f(x) = 2x² − 5x + 1', 'g(x) = x − 3',
                                 4, 1, -2)),
                ex('f(x) = 3x − 4 and g(x) = x² + 1. Find f(g(2)).',
                   ['g(2) = 5.', 'f(5) = 15 − 4 = **11**.'],
                   A.composition('f(x) = 3x − 4', 'g(x) = x² + 1', 2, 5, 11)),
                ex('For those same functions, find g(f(2)).',
                   ['f(2) = 2.', 'g(2) = 5. Different from f(g(2)) = 11 — **order '
                    'matters**.'],
                   A.composition('g(x) = x² + 1', 'f(x) = 3x − 4', 2, 2, 5)),
            ],
        },
        {
            'title': 'Vertical shifts and reflections',
            'fact': 'f(x) + k moves up k  |  f(x) − k moves down  |  −f(x) flips over '
                    'the x-axis',
            'text': 'Changes made *outside* the function act on the output, so they behave '
                    'exactly as you expect: add to go up, negate to flip vertically.',
            'figs': [SHIFTS],
            'caption': 'Everything outside the bracket does what it says: +2 lifts the curve, '
                       'the minus sign turns it upside down. Only the green curve, whose change '
                       'is inside the bracket, moves sideways.',
            'examples': [
                ex('The graph of y = f(x) is shifted up 3. Write the new function.',
                   ['**y = f(x) + 3**.'],
                   P.graph([(lambda x: x * x, INK, 'f(x)'),
                            (lambda x: x * x + 3, GREEN, 'f(x) + 3')],
                           xmin=-4, xmax=4, ymin=-2, ymax=10, xstep=1, ystep=1,
                           xtick_every=2, ytick_every=2, label='up 3')),
                ex('f(x) = x². Describe y = −f(x).',
                   ['A reflection over the **x-axis**: the upward parabola becomes a downward '
                    'one.'],
                   P.graph([(lambda x: x * x, INK, 'f(x)'),
                            (lambda x: -(x * x), RED, '−f(x)')],
                           xmin=-4, xmax=4, ymin=-8, ymax=8, xstep=1, ystep=1,
                           xtick_every=2, ytick_every=4, label='flipped over the x-axis')),
                ex('The point (2, 7) is on y = f(x). Where is it on y = f(x) − 4?',
                   ['Only the output changes.', '**(2, 3)**.'],
                   A.rules_panel((('(2, 7) on f(x)', 'the input stays 2'),
                                  ('f(x) − 4', 'the output drops by 4'),
                                  ('new point', '(2, 3)')), w=300)),
            ],
        },
        {
            'title': 'Horizontal shifts — the opposite way',
            'fact': 'f(x − h) moves right h  |  f(x + h) moves left h',
            'text': 'Changes made *inside* the brackets act on the input, and they run '
                    'backwards. f(x − 2) shifts right, not left, because x must be 2 larger '
                    'to produce the same output. This reversal is the single most-missed idea '
                    'in transformations.',
            'figs': [P.graph([(lambda x: x * x, INK, 'f(x) = x²'),
                              (lambda x: (x - 2) ** 2, GREEN, 'f(x − 2): right 2'),
                              (lambda x: (x + 2) ** 2, RED, 'f(x + 2): left 2')],
                             xmin=-5, xmax=5, ymin=-1, ymax=9, xstep=1, ystep=1,
                             xtick_every=2, ytick_every=2,
                             label='the sign inside runs backwards'),
                     A.rules_panel((('f(x − 2)', 'x must be 2 bigger → right 2'),
                                    ('f(x + 5)', 'x must be 5 smaller → left 5')),
                                   title='why inside runs backwards', w=330)],
            'caption': 'To get the same output from f(x − 2) you must feed in an x that is '
                       '2 larger — so every point slides right. The minus sign moves the '
                       'graph the opposite way to how it reads.',
            'examples': [
                ex('f(x) = x². Describe the graph of y = f(x − 2).',
                   ['A shift **2 to the right**, giving y = (x − 2)² with vertex '
                    '(2, 0).'],
                   P.graph([(lambda x: x * x, INK, 'f(x)'),
                            (lambda x: (x - 2) ** 2, GREEN, 'f(x − 2)')],
                           xmin=-4, xmax=5, ymin=-1, ymax=9, xstep=1, ystep=1,
                           xtick_every=2, ytick_every=2,
                           points=((2, 0, 'vertex (2, 0)', GREEN),), label='right 2')),
                ex('Describe y = f(x + 5).',
                   ['A shift **5 to the left** — the sign inside is the opposite of the '
                    'direction.'],
                   P.graph([(lambda x: x * x, INK, 'f(x)'),
                            (lambda x: (x + 5) ** 2, RED, 'f(x + 5)')],
                           xmin=-8, xmax=4, ymin=-1, ymax=9, xstep=1, ystep=1,
                           xtick_every=2, ytick_every=2, label='left 5')),
                ex('The point (3, 8) is on y = f(x). Where is the matching point on '
                   'y = f(x − 4)?',
                   ['The input must be 4 larger to give the same output.', '**(7, 8)**.'],
                   A.rules_panel((('(3, 8) on f(x)', 'output 8 at input 3'),
                                  ('f(x − 4)', 'needs x − 4 = 3'),
                                  ('so x = 7', 'new point (7, 8)')), w=310)),
            ],
        },
        {
            'title': 'Stretches',
            'fact': 'a·f(x) stretches vertically by a  |  f(bx) squeezes horizontally by '
                    '1/b',
            'text': 'Outside multiplies the outputs, so heights change. Inside multiplies the '
                    'inputs, so widths change — and again it runs backwards: f(2x) makes '
                    'the graph half as wide, not twice.',
            'figs': [P.transformations(kind='stretch')],
            'caption': 'Tripling outside makes every height three times as big. Doubling inside '
                       'pulls the curve in to half its width, because x only has to reach half '
                       'as far.',
            'examples': [
                ex('f(x) = x². Describe y = 3f(x).',
                   ['Every y is tripled: a **vertical stretch by 3**, giving y = 3x².'],
                   P.graph([(lambda x: x * x, INK, 'f(x)'),
                            (lambda x: 3 * x * x, GREEN, '3f(x)')],
                           xmin=-3, xmax=3, ymin=-1, ymax=10, xstep=1, ystep=1,
                           xtick_every=1, ytick_every=2, label='three times as tall')),
                ex('Describe y = f(2x).',
                   ['A **horizontal squeeze by a factor of 2** — the graph is half as '
                    'wide.'],
                   P.graph([(lambda x: x * x, INK, 'f(x)'),
                            (lambda x: (2 * x) ** 2, RED, 'f(2x)')],
                           xmin=-3, xmax=3, ymin=-1, ymax=10, xstep=1, ystep=1,
                           xtick_every=1, ytick_every=2, label='half as wide')),
                ex('The point (4, 6) is on y = f(x). Where is it on y = 2f(x)?',
                   ['The output doubles, the input does not.', '**(4, 12)**.'],
                   A.rules_panel((('(4, 6) on f(x)', 'input 4, output 6'),
                                  ('2f(x)', 'doubles the output only'),
                                  ('new point', '(4, 12)')), w=300)),
            ],
        },
        {
            'title': 'Reading transformations from an equation',
            'fact': 'y = a·f(x − h) + k → stretch by a, right h, up k',
            'text': 'Take the pieces in order and read the sign inside backwards. From vertex '
                    'form y = a(x − h)² + k you can state the whole transformation of '
                    'y = x² in one sentence.',
            'figs': [P.graph([(lambda x: x * x, INK, 'y = x²'),
                              (lambda x: 2 * (x - 3) ** 2 + 5, GREEN,
                               'y = 2(x − 3)² + 5')],
                             xmin=-2, xmax=7, ymin=-1, ymax=16, xstep=1, ystep=1,
                             xtick_every=2, ytick_every=4,
                             points=((3, 5, 'vertex (3, 5)', GREEN),),
                             label='stretch 2, right 3, up 5')],
            'caption': 'Read a, then h, then k: stretched by 2, moved 3 right (sign reversed) '
                       'and 5 up. The vertex lands exactly at (h, k).',
            'examples': [
                ex('Describe y = 2(x − 3)² + 5 as a transformation of y = x².',
                   ['**Stretched vertically by 2, moved 3 right and 5 up**; vertex (3, 5).'],
                   P.graph([(lambda x: x * x, INK, 'y = x²'),
                            (lambda x: 2 * (x - 3) ** 2 + 5, GREEN, None)],
                           xmin=-2, xmax=7, ymin=-1, ymax=16, xstep=1, ystep=1,
                           xtick_every=2, ytick_every=4,
                           points=((3, 5, 'vertex (3, 5)', GREEN),), label='stretch 2, right 3, up 5')),
                ex('Describe y = −(x + 1)² − 4.',
                   ['**Flipped over the x-axis, moved 1 left and 4 down**; vertex '
                    '(−1, −4).'],
                   P.graph([(lambda x: x * x, INK, 'y = x²'),
                            (lambda x: -((x + 1) ** 2) - 4, RED, None)],
                           xmin=-6, xmax=4, ymin=-10, ymax=8, xstep=1, ystep=2,
                           xtick_every=2, ytick_every=4,
                           points=((-1, -4, 'vertex (−1, −4)', RED),),
                           label='flip, left 1, down 4')),
                ex('y = f(x) has a maximum at (2, 9). Where is the maximum of '
                   'y = f(x − 1) + 3?',
                   ['Right 1 and up 3.', '**(3, 12)**.'],
                   A.rules_panel((('maximum (2, 9)', 'on y = f(x)'),
                                  ('f(x − 1)', 'moves it right 1 → x = 3'),
                                  ('+ 3', 'moves it up 3 → y = 12')), w=320)),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. Here it is **a '
                    'transformation viewer**. Graph f and the transformed version together and '
                    'watch which way the curve actually moves — it settles the inside-sign '
                    'question for good.',
    'desmos': [
        ('f(x) = 2x² − 5x + 1. What is f(3)?', '2*3^2-5*3+1',
         'Substitute and evaluate in one line.', '4'),
        ('f(x) = 2x² − 5x + 1 and g(x) = x − 3. What is f(g(4))?',
         '2*(4-3)^2-5*(4-3)+1', 'Inner function first.', '-2'),
        ('f(x) = 3x − 4 and g(x) = x² + 1. What is f(g(2))?', '3*(2^2+1)-4',
         'g(2) = 5, then f(5).', '11'),
        ('For those same functions, what is g(f(2))?', '(3*2-4)^2+1',
         'Different from D3 — order matters.', '5'),
        ('Graph y = x² and y = (x − 2)². Which way did it move?', 'y=(x-2)^2',
         'The sign inside runs backwards.', 'right 2'),
        ('What is the vertex of y = 2(x − 3)² + 5?', 'y=2(x-3)^2+5',
         'Read h and k straight off.', '(3, 5)'),
        ('f(x) = 3x − 5. What is f(a + 2) when a = 4?', '3*(4+2)-5',
         'Substitute the whole expression.', '13'),
        ('Solve 2x² − 5x + 1 = 1.', '2x^2-5x+1=1',
         'Two solutions; the question asks where the output is 1.', '0 and 2.5'),
        ('The point (2, 7) is on y = f(x). What is the y-value on y = f(x) − 4?', '7-4',
         'Only the output shifts.', '3'),
        ('What is the vertex of y = −(x + 1)² − 4?', 'y=-(x+1)^2-4',
         'Inside sign flips; outside does not.', '(-1, -4)'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'Sort each change into **outside** (acts on the output, behaves as expected) '
                   'or **inside** (acts on the input, runs backwards) before you answer.',
    'part2': [
        ('P1', 'Hard',
         'The functions f and g are defined by f(x) = 2x² − 5x + 1 and '
         'g(x) = x − 3. What is the value of f(g(4))?', '−2',
         ['g(4) = 1 first, then f(1) = 2 − 5 + 1 = **−2**.',
          'A common wrong answer is f(4) — the inner function g was never applied.'],
         A.composition('f(x) = 2x² − 5x + 1', 'g(x) = x − 3', 4, 1, -2)),
        ('P2', 'Hard',
         'For f(x) = 3x − 4 and g(x) = x² + 1, what is the value of f(g(2))?', '11',
         ['g(2) = 5, then f(5) = 15 − 4 = **11**.',
          'A common wrong answer works the functions in the wrong order: g(f(2)) = 5 is a '
          'different value again.'],
         A.composition('f(x) = 3x − 4', 'g(x) = x² + 1', 2, 5, 11)),
        ('P3', 'Hard',
         'The graph of y = f(x) is transformed to y = f(x − 2). Which describes the '
         'transformation?', 'Shift 2 units right',
         ['A change inside the brackets acts on the input and runs *backwards*: x must be 2 '
          'larger to give the same output.',
          'The graph moves **2 right**. A common wrong answer is the instinctive one and the '
          'most common error in this topic.'],
         P.graph([(lambda x: x * x, INK, 'f(x)'),
                  (lambda x: (x - 2) ** 2, GREEN, 'f(x − 2)')],
                 xmin=-4, xmax=5, ymin=-1, ymax=9, xstep=1, ystep=1, xtick_every=2,
                 ytick_every=2, label='right 2, not left')),
        ('P4', 'Hard',
         'The point (2, 7) lies on the graph of y = f(x). Which point must lie on the graph of '
         'y = f(x) − 4?', '(2, 3)',
         ['Subtracting outside the function changes only the output.',
          '**(2, 3).** A common wrong answer moves the input instead, which is what '
          'f(x − 4) would do.'],
         A.rules_panel((('f(x) − 4', 'outside → output drops 4'),
                        ('(2, 7)', 'becomes (2, 3)'),
                        ('f(x − 4)', 'would give (6, 7) instead')), w=320)),
        ('P5', 'Hard',
         'If f(x) = 3x − 5, which expression is equal to f(a + 2)?', '3a + 1',
         ['Substitute the whole expression: 3(a + 2) − 5 = 3a + 6 − 5.',
          '= **3a + 1**. A common wrong answer forgets to subtract the 5.'],
         A.flow(('f(a + 2)', '3(a + 2) − 5', '3a + 6 − 5', '3a + 1'))),
        ('P6', 'Hard',
         'What is the vertex of the graph of y = 2(x − 3)² + 5?', '(3, 5)',
         ['Vertex form y = a(x − h)² + k has vertex (h, k).',
          '**(3, 5)** — note h is +3 even though the bracket reads −3.'],
         P.graph([(lambda x: 2 * (x - 3) ** 2 + 5, GREEN, None)],
                 xmin=-1, xmax=7, ymin=0, ymax=16, xstep=1, ystep=1, xtick_every=2,
                 ytick_every=4, points=((3, 5, 'vertex (3, 5)', RED),),
                 label='y = 2(x − 3)² + 5')),
        ('P7', 'Very hard',
         'The graph of y = f(x) has a maximum at the point (2, 9). What are the coordinates of '
         'the maximum of y = f(x − 1) + 3?', '(3, 12)',
         ['Inside, −1 moves the graph right 1; outside, +3 moves it up 3.',
          '**(3, 12).** A common wrong answer moves left instead of right — the inside sign '
          'reverses.'],
         A.rules_panel((('maximum (2, 9)', 'on y = f(x)'),
                        ('f(x − 1)', 'right 1 → x = 3'),
                        ('+ 3', 'up 3 → y = 12')), w=320)),
        ('P8', 'Very hard',
         'Which describes the graph of y = −(x + 1)² − 4 as a transformation of '
         'y = x²?', 'Reflected over the x-axis, 1 left, 4 down',
         ['The minus outside reflects over the **x-axis**; (x + 1) moves **left** 1; '
          '−4 moves down 4.',
          'Vertex (−1, −4). A common wrong answer gets the direction of the shift '
          'backwards.'],
         P.graph([(lambda x: x * x, INK, 'y = x²'),
                  (lambda x: -((x + 1) ** 2) - 4, RED, 'y = −(x + 1)² − 4')],
                 xmin=-6, xmax=4, ymin=-10, ymax=8, xstep=1, ystep=2, xtick_every=2,
                 ytick_every=4, points=((-1, -4, 'vertex', RED),),
                 label='flip, left 1, down 4')),
        ('P9', 'Very hard',
         'The point (4, 6) lies on the graph of y = f(x). Which point must lie on the graph of '
         'y = 2f(x)?', '(4, 12)',
         ['Multiplying outside the function doubles the **output** only.',
          '**(4, 12).** A common wrong answer doubles the input, which is what f(x/2) would do.'],
         A.rules_panel((('2f(x)', 'outside → output doubles'),
                        ('(4, 6)', 'becomes (4, 12)'),
                        ('f(2x)', 'would halve the input instead')), w=320)),
        ('P10', 'Very hard',
         'If f(x) = 2x² − 5x + 1, what is the greatest value of x for which f(x) = 1?',
         '2.5',
         ['2x² − 5x + 1 = 1 gives 2x² − 5x = 0, so x(2x − 5) = 0.',
          'x = 0 or 2.5, and the greater is **2.5**. Note this question asks you to *solve*, '
          'not to evaluate.'],
         A.flow(('f(x) = 1', '2x² − 5x = 0', 'x(2x − 5) = 0',
                 'x = 0 or 2.5'))),
        ('P11', 'Very hard',
         'The graph of y = f(x) passes through (0, 0), (1, 1) and (2, 4). The graph of '
         'y = g(x) passes through (0, 0), (1, 2) and (2, 8). Which relationship is consistent '
         'with these points?', 'g(x) = 2f(x)',
         ['Each output of g is exactly twice the matching output of f: 0, 2, 8 against 0, 1, 4.',
          '**g(x) = 2f(x)**, a vertical stretch. A common wrong answer would double the inputs, '
          'giving g(1) = f(2) = 4, not 2.'],
         P.graph([(lambda x: x * x, INK, 'f(x) = x²'),
                  (lambda x: 2 * x * x, GREEN, 'g(x) = 2f(x)')],
                 xmin=-0.5, xmax=3, ymin=-1, ymax=10, xstep=1, ystep=1, xtick_every=1,
                 ytick_every=2,
                 points=((1, 1, None, INK), (2, 4, None, INK), (1, 2, None, GREEN),
                         (2, 8, None, GREEN)),
                 label='every output doubled')),
        ('P12', 'Very hard',
         'The function h is defined by h(x) = f(x) + k, where k is a constant. If f(3) = 7 and '
         'h(3) = 2, what is the value of k?', '−5',
         ['h(3) = f(3) + k, so 2 = 7 + k.', 'k = **−5**.'],
         A.rules_panel((('h(3) = f(3) + k', '2 = 7 + k'),
                        ('k = −5', 'the graph moved down 5')), w=310)),
    ],
    'habit': 'Inside the brackets, everything is the opposite of what it looks like: '
             'f(x − 2) goes right, f(x + 5) goes left, f(2x) gets narrower. Your class '
             'scored 13% on transformations, the lowest figure on the whole syllabus, and this '
             'single rule is most of it.',
}
