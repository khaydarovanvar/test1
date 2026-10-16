# -*- coding: utf-8 -*-
"""SAT Math 1.6 — Absolute Value."""
import algebra as A
import plot as P
from svgbase import AMBER, GREEN, INK, RED


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


LESSON = {
    'code': '1.6',
    'title': 'Absolute Value',
    'sections': [
        {
            'title': 'What absolute value means',
            'fact': '|a| is the distance from zero, so it is never negative',
            'text': 'Distance has no direction, which is why |−7| = 7. An equation '
                    '|x| = c with c negative has no solution at all, because no distance is '
                    'negative.',
            'figs': [A.abs_distance(9)],
            'caption': 'Both −9 and 9 sit nine units from zero, so both satisfy '
                       '|x| = 9. Nothing sits a negative distance away, which is why '
                       '|x| = −4 has no solution.',
            'examples': [
                ex('Evaluate |−7| + |3|.',
                   ['7 + 3 = **10**.'],
                   A.abs_distance(7)),
                ex('Solve |x| = 9.',
                   ['x is 9 away from zero in either direction.',
                    'x = **9 or −9**.'],
                   A.abs_distance(9)),
                ex('Solve |x| = −4.',
                   ['**No solution** — an absolute value can never be negative.'],
                   A.rules_panel((('|x| = −4', 'a distance cannot be negative'),
                                  ('nothing to split', 'no solution')), w=320)),
            ],
        },
        {
            'title': 'Solving |ax + b| = c',
            'fact': 'split into two equations: ax + b = c and ax + b = −c',
            'text': 'The bars hide a plus-or-minus. Write both cases before solving either, '
                    'and check c is not negative first.',
            'figs': [A.flow(('|2p − 9| = 5', 'two cases',
                             '2p − 9 = 5  or  2p − 9 = −5', 'p = 7 or p = 2'),
                            note='both cases are real solutions — neither is a spare')],
            'caption': 'One set of bars, two equations. Taking only the positive case is what '
                       'loses half the answer.',
            'examples': [
                ex('Solve |2p − 9| = 5.',
                   ['2p − 9 = 5 gives p = 7; 2p − 9 = −5 gives p = 2.',
                    '**p = 7 or 2**, and their sum is 9.'],
                   A.flow(('|2p − 9| = 5', '2p − 9 = ±5', 'p = 7 or p = 2'))),
                ex('Solve |x + 3| = 8.',
                   ['x + 3 = 8 or x + 3 = −8.', 'x = **5 or −11**.'],
                   A.flow(('|x + 3| = 8', 'x + 3 = ±8', 'x = 5 or −11'))),
                ex('Solve |3x − 1| = 11.',
                   ['3x − 1 = 11 gives x = 4; 3x − 1 = −11 gives x = '
                    '−10/3.', 'x = **4 or −10/3**.'],
                   A.flow(('|3x − 1| = 11', '3x − 1 = ±11',
                           'x = 4 or −10/3'))),
            ],
        },
        {
            'title': 'Isolate the bars first',
            'fact': 'get |…| alone on one side before splitting',
            'text': 'If something is added to or multiplying the absolute value, undo that '
                    'first. Splitting too early produces two wrong equations instead of one '
                    'right pair.',
            'figs': [A.flow(('2|x − 1| + 3 = 11', 'isolate: 2|x − 1| = 8',
                             '|x − 1| = 4', 'x = 5 or −3'),
                            note='the +3 and the 2 apply to the whole distance')],
            'caption': 'The 2 and the +3 sit outside the bars, so they act on the whole '
                       'distance. Only once the bars stand alone can the split be made.',
            'examples': [
                ex('Solve 2|x − 1| + 3 = 11.',
                   ['Isolate: 2|x − 1| = 8, so |x − 1| = 4.',
                    'x − 1 = ±4, giving x = **5 or −3**.'],
                   A.flow(('2|x − 1| + 3 = 11', '|x − 1| = 4',
                           'x = 5 or −3'))),
                ex('Solve |x + 2| − 5 = 0.',
                   ['|x + 2| = 5.', 'x = **3 or −7**.'],
                   A.flow(('|x + 2| − 5 = 0', '|x + 2| = 5', 'x = 3 or −7'))),
                ex('Why not split 2|x − 1| + 3 = 11 straight away?',
                   ['The +3 and the 2 are outside the bars, so they apply to the whole '
                    'distance. Splitting first would attach them to only one side and '
                    '**both answers would be wrong**.'],
                   A.rules_panel((('2|x − 1| + 3 = 11', 'the 2 and 3 are outside'),
                                  ('isolate first', '|x − 1| = 4'),
                                  ('then split', 'x − 1 = ±4')), w=330)),
            ],
        },
        {
            'title': 'Absolute value inequalities: the ‘and’ case',
            'fact': '|x| < c means −c < x < c — one interval, between',
            'text': 'Less than means close to zero, so the solution is a single band around '
                    'the centre. Write it as a compound inequality and solve all three parts '
                    'at once.',
            'figs': [A.number_line((), band=(-6, 6, False, False), xmin=-10, xmax=10,
                                   label='|x| < 6 means −6 < x < 6')],
            'caption': 'Everything within six units of zero, in either direction: one '
                       'unbroken band, with both ends open because the inequality is strict.',
            'examples': [
                ex('Solve |x| < 6.',
                   ['**−6 < x < 6**.'],
                   A.number_line((), band=(-6, 6, False, False), xmin=-10, xmax=10,
                                 label='−6 < x < 6')),
                ex('Solve |x − 3| ≤ 5.',
                   ['−5 ≤ x − 3 ≤ 5, so add 3 throughout.',
                    '**−2 ≤ x ≤ 8**.'],
                   A.number_line((), band=(-2, 8, True, True), xmin=-6, xmax=12,
                                 label='−2 ≤ x ≤ 8')),
                ex('Solve |2x + 1| < 7.',
                   ['−7 < 2x + 1 < 7 gives −8 < 2x < 6.',
                    '**−4 < x < 3**.'],
                   A.number_line((), band=(-4, 3, False, False), xmin=-8, xmax=8,
                                 label='−4 < x < 3')),
            ],
        },
        {
            'title': 'Absolute value inequalities: the ‘or’ case',
            'fact': '|x| > c means x < −c or x > c — two separate pieces',
            'text': 'Greater than means far from zero, so the solution splits into two rays '
                    'with a gap in the middle. It can never be written as a single interval.',
            'figs': [A.number_line((), rays=((-4, False, 'left'), (4, False, 'right')),
                                   xmin=-9, xmax=9,
                                   label='|x| > 4 means x < −4 or x > 4')],
            'caption': 'Two pieces with a hole between them. Writing this as one interval is '
                       'impossible — the middle values fail the inequality.',
            'examples': [
                ex('Solve |x| > 4.',
                   ['**x < −4 or x > 4**.'],
                   A.number_line((), rays=((-4, False, 'left'), (4, False, 'right')),
                                 xmin=-9, xmax=9, label='x < −4 or x > 4')),
                ex('Solve |x − 2| ≥ 6.',
                   ['x − 2 ≥ 6 or x − 2 ≤ −6.',
                    '**x ≥ 8 or x ≤ −4**.'],
                   A.number_line((), rays=((-4, True, 'left'), (8, True, 'right')),
                                 xmin=-9, xmax=13,
                                 label='x ≤ −4 or x ≥ 8')),
                ex('A machine part must be within 0.4 mm of 25 mm. Write that as an '
                   'inequality.',
                   ['**|L − 25| ≤ 0.4**, which means 24.6 ≤ L ≤ 25.4.'],
                   A.number_line((), band=(24.6, 25.4, True, True), xmin=24, xmax=26,
                                 label='|L − 25| ≤ 0.4')),
            ],
        },
        {
            'title': 'The V-shaped graph',
            'fact': 'y = |x − h| + k is a V with vertex (h, k)',
            'text': 'The graph folds upward at the vertex. A horizontal line cuts it twice '
                    'above the vertex, once at the vertex, and not at all below — which '
                    'is how the number of solutions is decided.',
            'figs': [P.absolute_v(1, 0, 3, label='y = |x − 1| meets y = 3 twice')],
            'caption': 'The line y = 3 sits above the vertex, so it crosses both arms, at '
                       'x = −2 and x = 4. Lowering it to the vertex would give one '
                       'crossing; below, none.',
            'examples': [
                ex('Find the vertex of y = |x − 1|.',
                   ['**(1, 0)**.'],
                   P.absolute_v(1, 0, None, label='vertex at (1, 0)')),
                ex('How many solutions does |x − 1| = 3 have?',
                   ['The line y = 3 is above the vertex, so it cuts the V twice.',
                    '**Two**: x = 4 and x = −2.'],
                   P.absolute_v(1, 0, 3)),
                ex('How many solutions does |x − 1| = 0 have?',
                   ['The line passes exactly through the vertex.', '**One**: x = 1.'],
                   P.absolute_v(1, 0, 0, label='the line meets the vertex only')),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. Here it is **a '
                    'V-grapher**. Type abs(x − 1) alongside a horizontal line and count '
                    'the crossings to see how many solutions there are.',
    'desmos': [
        ('What is |−7| + |3|?', 'abs(-7)+abs(3)', 'Use abs() in Desmos.', '10'),
        ('Solve |2p − 9| = 5. What is the sum of the solutions?', '7+2',
         'Graph both sides and read the two crossings.', '9'),
        ('Solve |x + 3| = 8. What is the smaller solution?', '-8-3',
         'Two cases, two answers.', '-11'),
        ('Solve 2|x − 1| + 3 = 11. What is the larger solution?', '4+1',
         'Isolate the bars before splitting.', '5'),
        ('Solve |x − 3| ≤ 5. What is the upper bound of x?', '5+3',
         'The ‘and’ case.', '8'),
        ('Solve |2x + 1| < 7. What is the lower bound of x?', '(-7-1)/2',
         'Three parts at once.', '-4'),
        ('Solve |x − 2| ≥ 6. What is the smaller boundary?', '-6+2',
         'The ‘or’ case.', '-4'),
        ('A part must be within 0.4 mm of 25 mm. What is the smallest allowed length?',
         '25-0.4', 'Centre minus the tolerance.', '24.6'),
        ('Graph y = |x − 1|. What is the x-coordinate of the vertex?', 'y=abs(x-1)',
         'The V folds at the vertex.', '1'),
        ('How many solutions does |x − 1| = 3 have?', 'y=abs(x-1)  and  y=3',
         'Count the intersections.', '2'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'Decide first whether the inequality is the ‘and’ case (one band) '
                   'or the ‘or’ case (two pieces).',
    'part2': [
        ('P1', 'Hard',
         'The price p, in talens, of a lantern satisfies |2p − 9| = 5. What is the sum of '
         'all possible values of p?', '9',
         ['2p − 9 = 5 gives p = 7, and 2p − 9 = −5 gives p = 2.',
          '7 + 2 = **9**. Taking only the positive case and answering 7 is the usual error.'],
         A.flow(('|2p − 9| = 5', '2p − 9 = ±5', 'p = 7 or 2', 'sum = 9'))),
        ('P2', 'Hard', 'Solve |x + 3| = 8. Give both solutions.', 'x = 5 and x = −11',
         ['x + 3 = 8 gives x = 5; x + 3 = −8 gives x = −11.',
          'Both are valid: the bars hide a plus-or-minus.'],
         A.flow(('|x + 3| = 8', 'x + 3 = ±8', 'x = 5 or −11'))),
        ('P3', 'Hard', 'Solve 2|x − 1| + 3 = 11. Give both solutions.',
         'x = 5 and x = −3',
         ['Isolate first: 2|x − 1| = 8, so |x − 1| = 4.',
          'x − 1 = ±4 gives **5 or −3**. Splitting before isolating gives the '
          'wrong pair.'],
         A.flow(('2|x − 1| + 3 = 11', '|x − 1| = 4', 'x = 5 or −3'))),
        ('P4', 'Hard',
         'Solve the inequality |x − 3| ≤ 5. Write your answer as a compound '
         'inequality.', '−2 ≤ x ≤ 8',
         ['Less than means a single band: −5 ≤ x − 3 ≤ 5.',
          'Adding 3 throughout gives **−2 ≤ x ≤ 8**.'],
         A.number_line((), band=(-2, 8, True, True), xmin=-6, xmax=12,
                       label='−2 ≤ x ≤ 8')),
        ('P5', 'Hard',
         'Solve the inequality |x − 2| ≥ 6. Describe all values of x.',
         'x ≤ −4 or x ≥ 8',
         ['Greater than means two separate pieces: x − 2 ≥ 6 or x − 2 ≤ '
          '−6.',
          '**x ≥ 8 or x ≤ −4.** This cannot be written as one interval.'],
         A.number_line((), rays=((-4, True, 'left'), (8, True, 'right')), xmin=-9,
                       xmax=13, label='two pieces, with a gap between')),
        ('P6', 'Hard',
         'A machine part must be within 0.4 millimetres of a target length of 25 millimetres. '
         'Write an absolute-value inequality for the acceptable length L.',
         '|L − 25| ≤ 0.4',
         ['‘Within 0.4 of 25’ is a distance statement.',
          '**|L − 25| ≤ 0.4**, which unpacks to 24.6 ≤ L ≤ 25.4.'],
         A.number_line((), band=(24.6, 25.4, True, True), xmin=24, xmax=26,
                       label='24.6 ≤ L ≤ 25.4')),
        ('P7', 'Very hard',
         'How many solutions does the equation |3x − 6| = −2 have? Explain briefly.',
         'none',
         ['An absolute value is a distance and can never be negative, so no value of x can '
          'satisfy it.',
          '**No solutions.** There is nothing to split — checking the right-hand side '
          'first saves the whole calculation.'],
         A.rules_panel((('|3x − 6| = −2', 'a distance cannot be negative'),
                        ('check c first', 'no solutions, no work needed')), w=330)),
        ('P8', 'Very hard',
         'Solve |2x + 1| < 7. Write your answer as a compound inequality.',
         '−4 < x < 3',
         ['−7 < 2x + 1 < 7 gives −8 < 2x < 6.',
          'Dividing by 2 gives **−4 < x < 3**.'],
         A.number_line((), band=(-4, 3, False, False), xmin=-8, xmax=8,
                       label='−4 < x < 3')),
        ('P9', 'Very hard',
         'The graph of y = |x − 1| is drawn together with the horizontal line y = 3. At '
         'how many points do they intersect, and at which x-values?',
         'two, at x = 4 and x = −2',
         ['y = 3 sits above the vertex (1, 0), so it cuts both arms of the V.',
          '|x − 1| = 3 gives x − 1 = ±3, so x = **4 or −2**.'],
         P.absolute_v(1, 0, 3)),
        ('P10', 'Very hard',
         'For what value of c does the equation |x − 5| = c have exactly one solution?',
         '0',
         ['A horizontal line meets the V twice above the vertex and not at all below it.',
          'Exactly one intersection happens only at the vertex itself, so c = **0**.'],
         P.absolute_v(5, 0, 0, xmin=0, xmax=10, label='only the vertex gives one solution')),
        ('P11', 'Very hard', 'Solve |3x − 1| = 11. Give both solutions.',
         'x = 4 and x = −10/3',
         ['3x − 1 = 11 gives 3x = 12, so x = 4.',
          '3x − 1 = −11 gives 3x = −10, so x = **−10/3**.'],
         A.flow(('|3x − 1| = 11', '3x − 1 = ±11', 'x = 4 or −10/3'))),
        ('P12', 'Very hard',
         'A thermostat keeps a room within 1.5°C of 21°C. Write an absolute-value '
         'inequality for the temperature T, and state the range of acceptable temperatures.',
         '|T − 21| ≤ 1.5, so 19.5 ≤ T ≤ 22.5',
         ['‘Within 1.5 of 21’ gives **|T − 21| ≤ 1.5**.',
          'Unpacking: −1.5 ≤ T − 21 ≤ 1.5, so **19.5 ≤ T ≤ '
          '22.5**.'],
         A.number_line((), band=(19.5, 22.5, True, True), xmin=18, xmax=24,
                       label='19.5 ≤ T ≤ 22.5')),
    ],
    'habit': 'Isolate the bars before splitting into two cases, and check the right-hand side '
             'is not negative — if it is, there is no solution and no work to do.',
}
