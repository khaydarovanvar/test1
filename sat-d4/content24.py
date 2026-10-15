# -*- coding: utf-8 -*-
"""SAT Math 2.4 — Rational & Radical Equations."""
import algebra as A
import plot as P
from svgbase import AMBER, GREEN, INK, RED


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


SHIFTED = P.rational(vas=(1,), ha=2, f=lambda x: 1.0 / (x - 1) + 2,
                     xmin=-3, xmax=7, ymin=-3, ymax=7,
                     label='y = 1/(x − 1) + 2')

LESSON = {
    'code': '2.4',
    'title': 'Rational & Radical Equations',
    'sections': [
        {
            'title': 'Solving rational equations',
            'fact': 'multiply both sides by the denominator  |  then check nothing was made '
                    'zero',
            'text': 'Clearing the fraction turns the problem into something familiar. The one '
                    'extra step is checking: any value that makes an original denominator zero '
                    'must be thrown out, however correctly it was derived.',
            'figs': [A.flow(('5/(x − 2) = x + 2', 'multiply by (x − 2)',
                             '5 = x² − 4', 'x = 3 or −3'),
                            note='then check: neither value makes x − 2 zero, so both '
                                 'survive'),
                     A.number_line((2,), xmin=-4, xmax=6,
                                   label='x = 2 is forbidden from the start')],
            'caption': 'Clearing the denominator is a legal move, but it quietly forgets that '
                       'x = 2 was never allowed. The number line keeps that exclusion in view '
                       'while you solve.',
            'examples': [
                ex('Solve 5/(x − 2) = x + 2.',
                   ['Multiply by (x − 2): 5 = (x + 2)(x − 2) = x² − 4.',
                    'x² = 9, so x = **3 or −3**. Neither makes x − 2 zero.'],
                   A.flow(('5 = x² − 4', 'x² = 9', 'x = 3 or −3'),
                          note='both check out')),
                ex('Solve (x + 3)/(x − 1) = 4.',
                   ['x + 3 = 4(x − 1) = 4x − 4, so 7 = 3x.', 'x = **7/3**.'],
                   A.flow(('(x + 3)/(x − 1) = 4', 'x + 3 = 4x − 4', 'x = 7/3'))),
                ex('Solve 1/x + 1/(2x) = 3.',
                   ['Multiply by 2x: 2 + 1 = 6x.',
                    'x = **1/2**. Check x ≠ 0, which it is not.'],
                   A.flow(('1/x + 1/(2x) = 3', 'multiply by 2x', '3 = 6x', 'x = 1/2'))),
            ],
        },
        {
            'title': 'Extraneous solutions',
            'fact': 'squaring or clearing a denominator can invent solutions — always '
                    'substitute back',
            'text': 'This is the highest-value habit in the topic. Both squaring and '
                    'multiplying out can produce values that satisfy the new equation but not '
                    'the original. The check is part of the method, not an optional tidy-up.',
            'figs': [P.graph([(lambda x: (2 * x + 7) ** 0.5 if 2 * x + 7 >= 0 else None, INK,
                               'y = √(2x + 7)'),
                              (lambda x: x - 4, GREEN, 'y = x − 4')],
                             xmin=-4, xmax=12, ymin=-5, ymax=7, xstep=1, ystep=1,
                             xtick_every=2, ytick_every=2,
                             points=((9, 5, 'x = 9 only', RED),),
                             label='the graphs meet once, not twice'),
                     A.check_table()],
            'caption': 'Squaring turned one equation into another with an extra root. The '
                       'graphs cross only at x = 9; x = 1 solves the squared equation and '
                       'nothing else.',
            'examples': [
                ex('Solve √(2x + 7) = x − 4.',
                   ['Squaring: 2x + 7 = x² − 8x + 16, so x² − 10x + 9 = 0 '
                    'and x = 1 or 9.',
                    'Check x = 1: √9 = 3 but 1 − 4 = −3, so it fails. The '
                    'solution set is **{9}**.'],
                   A.check_table()),
                ex('Why did x = 1 appear at all?',
                   ['Squaring turns 3 = −3 into 9 = 9. The step is not reversible, so it '
                    'can create solutions that were never there.'],
                   A.rules_panel((('3 = −3', 'is false'),
                                  ('square both sides', '9 = 9 is true'),
                                  ('so squaring', 'can invent a solution')), w=320)),
                ex('Solve √(x + 5) = x − 1.',
                   ['x + 5 = x² − 2x + 1 gives x² − 3x − 4 = 0, so '
                    'x = 4 or −1.',
                    'x = −1 gives √4 = 2 but −2, so it fails. Answer **x = 4**.'],
                   A.check_table((('x = −1', '√4 = 2 against −2', False),
                                  ('x = 4', '√9 = 3 against 3', True)))),
            ],
        },
        {
            'title': 'Radical equations',
            'fact': 'isolate the radical first, then square once',
            'text': 'Get the root alone on one side before squaring, or you will square a sum '
                    'and create cross terms. If two radicals appear, isolate one, square, then '
                    'isolate and square again.',
            'figs': [A.flow(('√(3x − 2) + 4 = 7', 'isolate: √(3x − 2) = 3',
                             'square: 3x − 2 = 9', 'x = 11/3'),
                            note='squaring before isolating leaves a radical behind')],
            'caption': 'Four steps in order. Squaring the left side as it stands would give '
                       '3x − 2 + 8√(3x − 2) + 16 — still a radical, and '
                       'worse than where you started.',
            'examples': [
                ex('Solve √(2x + 7) = 5.',
                   ['Square both sides: 2x + 7 = 25.', 'x = **9**. Check: √25 = 5.'],
                   A.flow(('√(2x + 7) = 5', '2x + 7 = 25', 'x = 9'))),
                ex('Solve √(3x − 2) + 4 = 7.',
                   ['Isolate first: √(3x − 2) = 3, so 3x − 2 = 9.',
                    'x = **11/3**.'],
                   A.flow(('√(3x − 2) + 4 = 7', '√(3x − 2) = 3',
                           '3x − 2 = 9', 'x = 11/3'))),
                ex('Why not square √(3x − 2) + 4 = 7 immediately?',
                   ['The left side would become 3x − 2 + 8√(3x − 2) + 16, which '
                    'still has a radical in it — **worse than where you started**.'],
                   A.rules_panel((('(√a + 4)²', '= a + 8√a + 16'),
                                  ('the radical survives', 'so isolate it first')), w=320)),
            ],
        },
        {
            'title': 'Domain restrictions',
            'fact': 'a denominator cannot be zero  |  an even root cannot take a negative',
            'text': 'Questions often ask which values are excluded rather than asking you to '
                    'solve anything. Set the denominator to zero and solve; for a square root, '
                    'set the inside greater than or equal to zero.',
            'figs': [A.number_line((1,), xmin=-4, xmax=6,
                                   label='(x + 3)/(x − 1) is undefined at x = 1'),
                     A.number_line((), ray=(3, True), xmin=-2, xmax=8,
                                   label='domain of √(2x − 6) is x ≥ 3')],
            'caption': 'A hollow crossed circle marks a value x may not take; a filled dot with '
                       'a ray marks where a square root starts being defined. At x = 3 the root '
                       'is √0 = 0, which is allowed.',
            'examples': [
                ex('For what value of x is (x + 3)/(x − 1) undefined?',
                   ['x − 1 = 0.', '**x = 1**.'],
                   A.number_line((1,), xmin=-4, xmax=6, label='x ≠ 1')),
                ex('What is the domain of √(2x − 6)?',
                   ['2x − 6 ≥ 0, so 2x ≥ 6.', '**x ≥ 3**.'],
                   A.number_line((), ray=(3, True), xmin=-2, xmax=8,
                                 label='x ≥ 3, including 3 itself')),
                ex('For what values of x is 1/(x² − 9) undefined?',
                   ['x² − 9 = 0 gives x = ±3.',
                    'Undefined at **x = 3 and x = −3**.'],
                   A.number_line((3, -3), xmin=-6, xmax=6,
                                 label='both roots of the denominator are excluded')),
            ],
        },
        {
            'title': 'Asymptotes of a rational function',
            'fact': 'vertical asymptote where the denominator is zero  |  horizontal asymptote '
                    'from comparing degrees',
            'text': 'A vertical asymptote is a value x cannot take. For the horizontal one: if '
                    'the top’s degree is smaller the asymptote is y = 0; if the degrees '
                    'match it is the ratio of leading coefficients.',
            'figs': [SHIFTED],
            'caption': 'The curve runs away to infinity at x = 1, where the denominator '
                       'vanishes, and flattens towards y = 2, the constant that was added on. '
                       'Neither line is ever reached.',
            'examples': [
                ex('Find the vertical asymptote of y = 1/(x − 1) + 2.',
                   ['The denominator vanishes at **x = 1**.'],
                   SHIFTED),
                ex('Find the horizontal asymptote of that same function.',
                   ['As x grows, 1/(x − 1) tends to 0, so y tends to **2**.'],
                   SHIFTED),
                ex('Find the horizontal asymptote of y = (3x + 1)/(x − 4).',
                   ['Degrees match, so take the ratio of leading coefficients.',
                    '**y = 3**.'],
                   P.rational(vas=(4,), ha=3, f=lambda x: (3 * x + 1) / (x - 4),
                              xmin=-6, xmax=14, ymin=-6, ymax=12, label='y = (3x + 1)/(x − 4)')),
            ],
        },
        {
            'title': 'Simplifying rational expressions',
            'fact': 'factor top and bottom, then cancel common factors — never cancel '
                    'across a + sign',
            'text': 'You may cancel a factor, never a term. (x² + 3x)/x cancels to x + 3 '
                    'because x is a factor of both terms on top; (x + 3)/x cancels to nothing '
                    'at all.',
            'figs': [A.cancel_fraction(('(x − 3)', '(x + 3)'), ('(x + 3)',),
                                       'x − 3', 'valid for x ≠ −3')],
            'caption': 'The bracket (x + 3) multiplies everything above and below it, so it '
                       'cancels. A loose x added to something else does not multiply the whole '
                       'line and cannot.',
            'examples': [
                ex('Simplify (x² − 9)/(x + 3).',
                   ['Factor the top: (x − 3)(x + 3)/(x + 3).',
                    '= **x − 3**, for x ≠ −3.'],
                   A.cancel_fraction(('(x − 3)', '(x + 3)'), ('(x + 3)',),
                                     'x − 3', 'x ≠ −3')),
                ex('Simplify (x² + 5x + 6)/(x² − 4).',
                   ['= (x + 2)(x + 3) / [(x − 2)(x + 2)].',
                    '= **(x + 3)/(x − 2)**, for x ≠ −2.'],
                   A.cancel_fraction(('(x + 2)', '(x + 3)'), ('(x + 2)',),
                                     '(x + 3)/(x − 2)', 'x ≠ −2')),
                ex('Can you cancel the x in (x + 4)/x?',
                   ['**No.** On top x is a term, not a factor. The expression is already '
                    'simplest.'],
                   A.rules_panel((('(x² + 3x)/x', '= x + 3  ✓ x is a factor'),
                                  ('(x + 4)/x', 'cannot cancel — x is a term'),), w=330)),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. Here it is **an '
                    'extraneous-root filter**. Graph both sides: Desmos shows only the real '
                    'intersections, so a root it does not show is one your algebra invented.',
    'desmos': [
        ('Solve 5/(x − 2) = x + 2. What is the sum of the solutions?', '5/(x-2)=x+2',
         'Graph both sides; the roots are 3 and −3.', '0'),
        ('Solve √(2x + 7) = x − 4.', 'sqrt(2x+7)=x-4',
         'Desmos shows the genuine intersection, not the extraneous root.', '9'),
        ('Solve √(2x + 7) = 5.', 'sqrt(2x+7)=5', 'Square both sides mentally to check.',
         '9'),
        ('Solve (x + 3)/(x − 1) = 4.', '(x+3)/(x-1)=4',
         'Desmos gives the exact fraction.', '7/3'),
        ('For what value of x is (x + 3)/(x − 1) undefined?', 'x-1=0',
         'Graph it and look for the vertical asymptote.', '1'),
        ('What is the horizontal asymptote of y = (3x + 1)/(x − 4)?', 'y=(3x+1)/(x-4)',
         'Zoom out until the curve flattens.', '3'),
        ('Solve 1/x + 1/(2x) = 3.', '1/x+1/(2x)=3', 'Clear the denominators first if you '
         'prefer.', '0.5'),
        ('Solve √(3x − 2) + 4 = 7.', 'sqrt(3x-2)+4=7', 'Isolate the radical first.',
         '11/3'),
        ('Evaluate (x² − 9)/(x + 3) at x = 10.', '(10^2-9)/(10+3)',
         'Compare with x − 3 at x = 10.', '7'),
        ('Solve √(x + 5) = x − 1.', 'sqrt(x+5)=x-1',
         'Only one intersection appears; −1 is extraneous.', '4'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'Every radical equation on this sheet needs a check, and every rational one '
                   'needs you to ask which values the denominator forbids.',
    'part2': [
        ('P1', 'Hard',
         'What is the sum of all solutions to the equation 5/(x − 2) = x + 2?', '0',
         ['Multiplying by (x − 2) gives 5 = x² − 4, so x² = 9 and x = '
          '±3.',
          '3 + (−3) = **0**. A common wrong answer is the positive root alone — the '
          'word *sum* means there is more than one.'],
         A.flow(('5 = x² − 4', 'x = 3 or −3', 'sum = 0'))),
        ('P2', 'Hard',
         'What is the solution set of the equation √(2x + 7) = x − 4?', '{9}',
         ['Squaring gives x² − 10x + 9 = 0, so x = 1 or 9. But x = 1 gives '
          '√9 = 3 against 1 − 4 = −3, which is false.',
          'Only **x = 9** survives. A common wrong answer is what you get by never checking '
          '— six of your class chose it on Test 5.'],
         A.check_table()),
        ('P3', 'Hard', 'If √(2x + 7) = 5, what is the value of x?', '9',
         ['Square both sides: 2x + 7 = 25, so 2x = 18 and x = **9**.'],
         A.flow(('√(2x + 7) = 5', '2x + 7 = 25', 'x = 9'))),
        ('P4', 'Hard',
         'The function f is defined by f(x) = (x + 3)/(x − 1). If f(a) = 4, what is the '
         'value of a?', '7/3',
         ['a + 3 = 4(a − 1) = 4a − 4, so 7 = 3a.', 'a = **7/3**.'],
         A.flow(('(a + 3)/(a − 1) = 4', 'a + 3 = 4a − 4', 'a = 7/3'))),
        ('P5', 'Hard',
         'For what value of x is the expression (x + 5)/(x² − 9) undefined, given '
         'x > 0?', '3',
         ['The expression is undefined where the denominator is zero: x² = 9 gives '
          'x = ±3.', 'With x > 0, x = **3**.'],
         A.number_line((3, -3), xmin=-6, xmax=6, label='x² − 9 = 0 at both ±3')),
        ('P6', 'Hard',
         'Write an equivalent expression for (x² + 5x + 6)/(x² − 4) for '
         'x ≠ ±2.', '(x + 3)/(x − 2)',
         ['Factor both: (x + 2)(x + 3) over (x − 2)(x + 2), and cancel (x + 2).',
          '= **(x + 3)/(x − 2)**.'],
         A.cancel_fraction(('(x + 2)', '(x + 3)'), ('(x + 2)',), '(x + 3)/(x − 2)',
                           'x ≠ −2')),
        ('P7', 'Very hard',
         'What is the solution to √(x + 5) = x − 1?', '4',
         ['Squaring gives x² − 3x − 4 = 0, so x = 4 or −1. Testing '
          'x = −1: √4 = 2 but −1 − 1 = −2, so it fails.',
          'Only **x = 4** works. A common wrong answer keeps the extraneous root.'],
         A.check_table((('x = −1', '√4 = 2 against −2', False),
                        ('x = 4', '√9 = 3 against 3', True)))),
        ('P8', 'Very hard',
         'The graph of y = 1/(x − 1) + 2 has a vertical asymptote and a horizontal '
         'asymptote. What are they?', 'x = 1 and y = 2',
         ['The denominator vanishes at x = 1; as x grows, 1/(x − 1) → 0, leaving '
          'y → 2.',
          '**x = 1 and y = 2.** A common wrong answer gives the asymptotes of y = 1/(x − 1) '
          'before the shift.'],
         SHIFTED),
        ('P9', 'Very hard',
         'State the complete domain of f(x) = √(2x − 6).', 'x ≥ 3',
         ['An even root needs a non-negative inside: 2x − 6 ≥ 0.',
          '**x ≥ 3.** The equals sign belongs: at x = 3 the value is √0 = 0, which is '
          'defined.'],
         A.number_line((), ray=(3, True), xmin=-2, xmax=8, label='x ≥ 3')),
        ('P10', 'Very hard',
         'If 1/x + 1/(2x) = 3 and x ≠ 0, what is the value of x?', '1/2',
         ['Multiply through by 2x: 2 + 1 = 6x, so 6x = 3.', 'x = **1/2**.'],
         A.flow(('1/x + 1/(2x) = 3', 'multiply by 2x', '3 = 6x', 'x = 1/2'))),
        ('P11', 'Very hard',
         'A student solves √(3x − 2) + 4 = 7 by squaring both sides immediately, '
         'obtaining 3x − 2 + 16 = 49. What is wrong, and what is the correct value of x?',
         'The radical must be isolated first; x = 11/3.',
         ['Squaring a sum is not squaring each piece: (√a + 4)² = a + 8√a + 16, '
          'so the radical survives.',
          'Isolating first gives √(3x − 2) = 3, then 3x − 2 = 9 and x = '
          '**11/3**.'],
         A.flow(('√(3x − 2) + 4 = 7', '√(3x − 2) = 3', '3x − 2 = 9',
                 'x = 11/3'))),
        ('P12', 'Very hard',
         'What is the horizontal asymptote of the graph of y = (3x + 1)/(x − 4)?', 'y = 3',
         ['The numerator and denominator have the same degree, so the asymptote is the ratio '
          'of leading coefficients.',
          '3/1 = **y = 3**. A common wrong answer is the rule for when the top’s degree is '
          'smaller.'],
         P.rational(vas=(4,), ha=3, f=lambda x: (3 * x + 1) / (x - 4),
                    xmin=-6, xmax=14, ymin=-6, ymax=12, label='y = (3x + 1)/(x − 4)')),
    ],
    'habit': 'Substitute your answer back into the **original** equation. Squaring and clearing '
             'denominators are not reversible steps, and six of your class lost M2 Q25 on '
             'Test 5 by skipping the check.',
}
