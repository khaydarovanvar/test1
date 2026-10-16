# -*- coding: utf-8 -*-
"""SAT Math 1.5 — Linear Inequalities."""
import algebra as A
import plot as P
from svgbase import AMBER, GREEN, INK, RED


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


LESSON = {
    'code': '1.5',
    'title': 'Linear Inequalities',
    'sections': [
        {
            'title': 'Solving an inequality',
            'fact': 'solve exactly as for an equation — but flip the sign when you '
                    'multiply or divide by a negative',
            'text': 'Every move is the same as for an equation except one. Multiplying or '
                    'dividing both sides by a negative number reverses the direction, and '
                    'forgetting that is the classic error.',
            'figs': [A.flow(('5 − 2x > 17', '−2x > 12',
                             'divide by −2 and flip', 'x < −6'),
                            note='dividing by a negative turns > into <'),
                     A.number_line((), rays=((-6, False, 'left'),), xmin=-10, xmax=4,
                                   label='x < −6')],
            'caption': 'The flip is the whole difference from an equation. The open circle at '
                       '−6 shows that the boundary itself is excluded by the strict '
                       'inequality.',
            'examples': [
                ex('Solve 5 − 2x > 17.',
                   ['−2x > 12, and dividing by −2 flips the sign.',
                    'x < **−6**.'],
                   A.number_line((), rays=((-6, False, 'left'),), xmin=-10, xmax=4,
                                 label='x < −6')),
                ex('Solve 3x + 4 ≤ 19.',
                   ['3x ≤ 15.',
                    'x ≤ **5**. No flip — we divided by a positive.'],
                   A.number_line((), rays=((5, True, 'left'),), xmin=-2, xmax=10,
                                 label='x ≤ 5')),
                ex('Solve −x/3 ≥ 2.',
                   ['Multiply by −3 and flip.', 'x ≤ **−6**.'],
                   A.number_line((), rays=((-6, True, 'left'),), xmin=-12, xmax=2,
                                 label='x ≤ −6')),
            ],
        },
        {
            'title': 'Translating the words',
            'fact': '‘at least’ → ≥  |  ‘at most’ / ‘no '
                    'more than’ → ≤  |  ‘more than’ → >',
            'text': 'The wording decides whether the boundary counts. ‘Greater than '
                    '$50’ excludes $50 exactly, so the least whole number of sales is one '
                    'past the boundary.',
            'figs': [A.rules_panel(
                (('at least 20', 'm ≥ 20 — 20 counts'),
                 ('at most 600 kg', 'L ≤ 600 — 600 counts'),
                 ('more than $50', 'p > 50 — 50 does not count')),
                title='does the boundary value itself count?', w=340)],
            'caption': 'Two of these include their boundary and one does not. That single '
                       'word is what separates 50 from 51 in the answer.',
            'examples': [
                ex('A vendor spends $75 and sells at $2.50 a cup. How many cups for profit '
                   'over $50?',
                   ['2.5n − 75 > 50 gives n > 50.',
                    'The least whole number is **51**, not 50.'],
                   A.number_line((), rays=((50, False, 'right'),), xmin=44, xmax=58,
                                 label='n > 50, so the least whole number is 51')),
                ex('A lift holds at most 600 kg. Write this as an inequality for the load L.',
                   ['L ≤ **600** — 600 itself is allowed.'],
                   A.number_line((), rays=((600, True, 'left'),), xmin=560, xmax=640,
                                 label='L ≤ 600')),
                ex('A club needs at least 20 members. Write it for membership m.',
                   ['m ≥ **20**.'],
                   A.number_line((), rays=((20, True, 'right'),), xmin=12, xmax=28,
                                 label='m ≥ 20')),
            ],
        },
        {
            'title': 'Interpreting a constant in context',
            'fact': 'ask what the units of each side are',
            'text': 'In 3a + 7b ≤ 84, the left side is a cost in talens, so 84 is the '
                    '**most** that can be spent — not a count of items. Checking units '
                    'settles these questions immediately.',
            'figs': [A.rules_panel(
                (('3a + 7b', '3 and 7 are prices, so this is money'),
                 ('≤ 84', 'so 84 is a maximum amount of money'),
                 ('not a count', 'the units do not match items')),
                title='follow the units on each side', w=340)],
            'caption': 'Because the coefficients are prices, everything on that side is money. '
                       'The number on the right has to be money too.',
            'examples': [
                ex('A stallholder buys a bags at 3 each and b jars at 7 each, with '
                   '3a + 7b ≤ 84. What is 84?',
                   ['Both sides are costs, so 84 is the **maximum amount that can be spent**.'],
                   A.rules_panel((('3a + 7b', 'a cost in talens'),
                                  ('84', 'the most that can be spent')), w=320)),
                ex('In 5x + 2y ≥ 40 where x is hours worked, what does 40 represent?',
                   ['The **minimum** total the quantities must reach.'],
                   A.rules_panel((('≥ 40', 'a floor, not a ceiling'),
                                  ('the total must reach it', 'at least 40')), w=320)),
                ex('Why is ‘the total number of items’ a wrong reading of 84?',
                   ['The coefficients 3 and 7 are prices, so the product is money, not a '
                    'count. **The units do not match.**'],
                   A.rules_panel((('3 × bags', 'talens, not bags'),
                                  ('a count would need', 'coefficients of 1')), w=320)),
            ],
        },
        {
            'title': 'Graphing an inequality',
            'fact': 'solid line for ≤ or ≥  |  dashed for < or >  |  test a point to '
                    'decide which side',
            'text': 'Draw the boundary line first, then pick any point not on it — (0, 0) '
                    'is easiest — and see whether it satisfies the inequality. If it '
                    'does, shade its side.',
            'figs': [P.half_plane(-1, 4, '<=', ((1, 1, True), (4, 4, False)),
                                  label='y ≤ −x + 4, shaded below')],
            'caption': 'The line itself is included, so it is solid. (1, 1) satisfies the '
                       'inequality and sits in the shaded region; (4, 4) fails and sits '
                       'outside it.',
            'examples': [
                ex('Describe the graph of y ≤ −x + 4.',
                   ['A **solid** line through (0, 4) and (4, 0), with the region **below** '
                    'shaded.'],
                   P.half_plane(-1, 4, '<=', (), label='solid line, shade below')),
                ex('Does (1, 1) satisfy y ≤ −x + 4?',
                   ['1 ≤ 3.', '**Yes**, so it is in the shaded region.'],
                   P.half_plane(-1, 4, '<=', ((1, 1, True),))),
                ex('Does (4, 4) satisfy it?',
                   ['4 ≤ 0 is false.', '**No** — it lies above the line.'],
                   P.half_plane(-1, 4, '<=', ((4, 4, False),))),
            ],
        },
        {
            'title': 'Compound inequalities',
            'fact': '‘and’ → the overlap  |  ‘or’ → either region',
            'text': 'Solve a three-part inequality by doing the same thing to all three parts '
                    'at once. Keep the variable in the middle and remember that flipping '
                    'applies to the whole chain.',
            'figs': [A.number_line((), band=(1, 5, False, False), xmin=-2, xmax=8,
                                   label='1 < x < 5: one band, both ends open')],
            'caption': 'An ‘and’ solution is a single stretch between two '
                       'boundaries. Only the integers inside it — 2, 3 and 4 — '
                       'qualify.',
            'examples': [
                ex('Solve 3 < 2x + 1 < 11.',
                   ['Subtract 1 throughout: 2 < 2x < 10.', '**1 < x < 5**.'],
                   A.number_line((), band=(1, 5, False, False), xmin=-2, xmax=8,
                                 label='1 < x < 5')),
                ex('Solve −4 ≤ 5 − 3x ≤ 8.',
                   ['Subtract 5: −9 ≤ −3x ≤ 3. Divide by −3 and flip '
                    'both signs.', '**−1 ≤ x ≤ 3**.'],
                   A.number_line((), band=(-1, 3, True, True), xmin=-6, xmax=8,
                                 label='−1 ≤ x ≤ 3')),
                ex('How many integers satisfy 1 < x < 5?',
                   ['x = 2, 3, 4.', '**Three.**'],
                   A.number_line((), band=(1, 5, False, False), xmin=-2, xmax=8,
                                 mark=(2, 3, 4), label='the integers inside are 2, 3 and 4')),
            ],
        },
        {
            'title': 'Systems of inequalities',
            'fact': 'the solution is the region satisfying every inequality at once',
            'text': 'Shade each inequality and look for the overlap. To test whether a point '
                    'is a solution, check it in every inequality — it only takes one '
                    'failure to rule a point out.',
            'figs': [P.half_plane(-1, 4, '<=', ((2, 1, True), (5, 1, False)),
                                  label='y ≤ −x + 4 and y ≥ 0')],
            'caption': '(2, 1) satisfies both conditions; (5, 1) is above the line, so one '
                       'failure is enough to exclude it.',
            'examples': [
                ex('Does (2, 1) satisfy y ≤ −x + 4 and y ≥ 0?',
                   ['1 ≤ 2 ✓ and 1 ≥ 0 ✓.', '**Yes**, both hold.'],
                   A.check_table((('y ≤ −x + 4', '1 ≤ 2 ✓', True),
                                  ('y ≥ 0', '1 ≥ 0 ✓', True)),
                                 title='a solution must pass every inequality')),
                ex('Does (5, 1) satisfy that system?',
                   ['1 ≤ −1 is false.', '**No** — one failure is enough.'],
                   A.check_table((('y ≤ −x + 4', '1 ≤ −1 ✗', False),
                                  ('y ≥ 0', '1 ≥ 0 ✓', True)),
                                 title='one failure rules the point out')),
                ex('A system is y > 2 and y < 1. What is the solution region?',
                   ['No value of y is both above 2 and below 1.',
                    '**Empty** — there is no solution.'],
                   A.number_line((), xmin=-2, xmax=6, mark=(),
                                 label='nothing is both above 2 and below 1')),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. Here it is **a region '
                    'shader**. Type the inequality and Desmos shades the solution, boundary '
                    'style included.',
    'desmos': [
        ('Solve 5 − 2x > 17. What is the boundary value of x?', '5-2x=17',
         'Solve the equation, then decide the direction.', '-6'),
        ('A vendor spends $75 and sells at $2.50 a cup. What is the break-even-plus-$50 cup '
         'count?', '(50+75)/2.5', 'The boundary; the answer is one more.', '50'),
        ('Solve 3x + 4 ≤ 19. What is the largest x?', '(19-4)/3',
         'Dividing by a positive keeps the sign.', '5'),
        ('Solve 3 < 2x + 1 < 11. What are the two boundary values of x?', '2x+1=3',
         'Do each end separately.', '1 and 5'),
        ('Solve −4 ≤ 5 − 3x. What is the boundary value of x?', '(5+4)/3',
         'Flip the sign when dividing by −3.', '3'),
        ('Does (1, 1) satisfy y ≤ −x + 4?', '-1+4', 'Compare the result with 1.',
         'yes'),
        ('Does (4, 4) satisfy y ≤ −x + 4?', '-4+4',
         '4 is not less than or equal to 0.', 'no'),
        ('How many integers satisfy 1 < x < 5?', '4-1-0', 'Count 2, 3 and 4.', '3'),
        ('Graph y ≤ −x + 4 and shade. Which side contains the origin?', 'y<=-x+4',
         'Desmos shades automatically.', 'below'),
        ('If 3a + 7b ≤ 84 and b = 6, what is the greatest whole value of a?', '(84-42)/3',
         'Substitute, then solve.', '14'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'Decide whether the boundary value itself counts: ‘more than 50’ '
                   'excludes 50, so the least whole number is 51.',
    'part2': [
        ('P1', 'Hard',
         'Which describes all values of x that satisfy 5 − 2x > 17?', 'x < −6',
         ['−2x > 12, and dividing by −2 **reverses** the inequality.',
          'x < **−6**. A common wrong answer is what you get by forgetting to flip '
          '— the single most common error in this topic.'],
         A.number_line((), rays=((-6, False, 'left'),), xmin=-10, xmax=4,
                       label='x < −6')),
        ('P2', 'Hard',
         'A lemonade vendor spends $75 on supplies each morning and sells lemonade for $2.50 '
         'per cup. What is the least whole number of cups the vendor must sell so that the '
         'day’s profit is greater than $50?', '51',
         ['2.5n − 75 > 50 gives 2.5n > 125, so n > 50.',
          'The least whole number strictly greater than 50 is **51**. A common wrong answer is '
          'the boundary itself, which ‘greater than’ excludes.'],
         A.number_line((), rays=((50, False, 'right'),), xmin=44, xmax=58,
                       label='n > 50 → the least whole number is 51')),
        ('P3', 'Hard',
         'A stallholder buys a bags of rice at 3 talens each and b jars of honey at 7 talens '
         'each, where 3a + 7b ≤ 84. What is the best interpretation of 84?',
         'The maximum number of talens the stallholder can spend.',
         ['Both sides are amounts of money, and ≤ caps the left side.',
          '**The most that can be spent.** The trap five of your class took: 84 cannot be a '
          'count, because 3 and 7 are prices.'],
         A.rules_panel((('3a + 7b', 'prices × quantities = money'),
                        ('≤ 84', 'a maximum amount of money'),
                        ('not a count of items', 'the units would not match')), w=330)),
        ('P4', 'Hard',
         'Which inequality represents ‘a lift holds at most 600 kilograms’, where L '
         'is the load?', 'L ≤ 600',
         ['‘At most’ means it may reach 600 but not exceed it.',
          '**L ≤ 600.** A common wrong answer would forbid a load of exactly 600 kg.'],
         A.number_line((), rays=((600, True, 'left'),), xmin=560, xmax=640,
                       label='L ≤ 600, and 600 is allowed')),
        ('P5', 'Hard',
         'If 3 < 2x + 1 < 11, how many integer values can x take?', '3',
         ['Subtracting 1 throughout gives 2 < 2x < 10, so 1 < x < 5.',
          'The integers are 2, 3 and 4, so there are **3** of them. The endpoints are '
          'excluded.'],
         A.number_line((), band=(1, 5, False, False), xmin=-2, xmax=8, mark=(2, 3, 4),
                       label='1 < x < 5')),
        ('P6', 'Hard',
         'Which point satisfies the system y ≤ −x + 4 and y ≥ 0?', '(2, 1)',
         ['Test each: at (2, 1), 1 ≤ 2 ✓ and 1 ≥ 0 ✓.',
          '**(2, 1) works.** (5, 1) fails the first; (1, −2) fails the second.'],
         P.half_plane(-1, 4, '<=', ((2, 1, True), (5, 1, False)),
                      label='y ≤ −x + 4 and y ≥ 0')),
        ('P7', 'Very hard',
         'If −4 ≤ 5 − 3x ≤ 8, which describes all possible values of x?',
         '−1 ≤ x ≤ 3',
         ['Subtract 5 throughout: −9 ≤ −3x ≤ 3. Dividing by −3 flips '
          'both signs and swaps the ends.',
          '**−1 ≤ x ≤ 3.** A common wrong answer is what you get without '
          'flipping.'],
         A.number_line((), band=(-1, 3, True, True), xmin=-6, xmax=8,
                       label='−1 ≤ x ≤ 3')),
        ('P8', 'Very hard',
         'In the inequality 3a + 7b ≤ 84, b = 6. What is the greatest possible '
         'whole-number value of a?', '14',
         ['3a + 42 ≤ 84 gives 3a ≤ 42.',
          'a ≤ 14, so the greatest whole value is **14** — the boundary is allowed '
          'because the sign is ≤.'],
         A.number_line((), rays=((14, True, 'left'),), xmin=6, xmax=22,
                       label='a ≤ 14, and 14 itself counts')),
        ('P9', 'Very hard',
         'A student must score at least 80 as an average over four tests. After three tests '
         'the scores are 72, 85 and 79. What is the minimum score needed on the fourth test?',
         '84',
         ['The total must be at least 4 × 80 = 320, and the first three sum to 236.',
          '320 − 236 = **84**.'],
         A.flow(('average ≥ 80 over 4 tests', 'total ≥ 320', '236 + x ≥ 320',
                 'x ≥ 84'))),
        ('P10', 'Very hard',
         'The graph of a linear inequality shows a **dashed** boundary line with the region '
         'above it shaded. Which inequality could it represent?', 'y > 2x + 1',
         ['Dashed means the boundary is **not** included, so the sign is strict; shading above '
          'means y is greater.',
          '**y > 2x + 1.** A common wrong answer would need a solid line.'],
         P.half_plane(2, 1, '>', (), xmin=-3, xmax=4, ymin=-4, ymax=8,
                      label='dashed boundary, shaded above')),
        ('P11', 'Very hard',
         'A company needs at least 40 units produced, using machine A at 5 units per hour and '
         'machine B at 2 units per hour. If x and y are the hours each runs, which inequality '
         'models this?', '5x + 2y ≥ 40',
         ['‘At least 40 units’ means the total production must reach 40 or more.',
          '**5x + 2y ≥ 40.** A common wrong answer counts hours rather than units.'],
         A.rules_panel((('5x + 2y', 'units produced'),
                        ('≥ 40', 'at least 40 of them')), w=320)),
        ('P12', 'Very hard',
         'A caterer has at most 90 talens to spend on x trays of bread at 6 talens each and y '
         'trays of cheese at 15 talens each. If 4 trays of cheese are bought, what is the '
         'greatest whole number of bread trays the caterer can buy?', '5',
         ['6x + 15y ≤ 90 with y = 4 gives 6x + 60 ≤ 90, so 6x ≤ 30.',
          'x ≤ 5, and the greatest whole number is **5**.'],
         A.flow(('6x + 15y ≤ 90', 'y = 4', '6x ≤ 30', 'x ≤ 5'))),
    ],
    'habit': 'Flip the inequality sign whenever you multiply or divide by a negative. It is '
             'the only rule that differs from solving an equation, and it is where the marks '
             'go.',
}
