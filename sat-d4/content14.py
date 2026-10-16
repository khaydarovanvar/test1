# -*- coding: utf-8 -*-
"""SAT Math 1.4 — Systems of Linear Equations."""
import algebra as A
import plot as P
from svgbase import AMBER, GREEN, INK, RED


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


def meet(m1, c1, m2, c2, sol, w=300, h=195, **kw):
    return P.coord_lines(((m1, c1, INK, kw.pop('l1', '')), (m2, c2, GREEN, kw.pop('l2', ''))),
                         points=((sol[0], sol[1], '(%g, %g)' % sol),), w=w, h=h, **kw)


LESSON = {
    'code': '1.4',
    'title': 'Systems of Linear Equations',
    'sections': [
        {
            'title': 'Elimination',
            'fact': 'line the equations up and add or subtract to kill one variable',
            'text': 'Elimination is usually faster than substitution on the SAT, because the '
                    'coefficients are chosen to cooperate. If they do not match, multiply one '
                    'equation through first.',
            'figs': [A.elimination('2x + y = 11', 'x − y = 4', 'add', '3x = 15',
                                   'x = 5, then y = 1')],
            'caption': 'The y terms are +y and −y, so adding the two equations removes y '
                       'outright and leaves one equation in x.',
            'examples': [
                ex('Solve 2x + y = 11 and x − y = 4.',
                   ['Adding kills y: 3x = 15, so x = 5.', 'Then y = 1, giving **(5, 1)**.'],
                   A.elimination('2x + y = 11', 'x − y = 4', 'add', '3x = 15',
                                 'x = 5, y = 1')),
                ex('Solve 3a + 2p = 8 and a + 2p = 6.',
                   ['Subtracting kills p: 2a = 2, so a = 1.',
                    'Then p = 2.5, giving **a = 1, p = 2.5**.'],
                   A.elimination('3a + 2p = 8', 'a + 2p = 6', 'subtract', '2a = 2',
                                 'a = 1, p = 2.5')),
                ex('Solve 3x + 2y = 57 and x + 4y = 39.',
                   ['Multiply the second by 3: 3x + 12y = 117. Subtract: 10y = 60, so y = 6.',
                    'Then x = 15, giving **(15, 6)**.'],
                   A.elimination('3x + 2y = 57', '3x + 12y = 117', 'subtract', '10y = 60',
                                 'y = 6, x = 15')),
            ],
        },
        {
            'title': 'Substitution',
            'fact': 'when one variable is already alone, put that expression into the other '
                    'equation',
            'text': 'Substitution is the natural choice when an equation reads y = something. '
                    'Replace, solve for the remaining variable, then go back for the other '
                    'one.',
            'figs': [A.flow(('y = 2x + 3 and 3x + y = 13', 'replace y',
                             '3x + (2x + 3) = 13', 'x = 2, then y = 7'),
                            note='solve for one, then go back for the other'),
                     meet(2, 3, -3, 13, (2, 7), l1='y = 2x + 3', l2='3x + y = 13',
                          xmin=-1, xmax=5, ymin=-2, ymax=12, tick_every=2)],
            'caption': 'The algebra and the picture agree: the pair (2, 7) is the one point '
                       'that satisfies both equations at once.',
            'examples': [
                ex('Solve y = 2x + 3 and 3x + y = 13.',
                   ['3x + (2x + 3) = 13 gives 5x = 10, so x = 2.',
                    'Then y = 7: **(2, 7)**.'],
                   meet(2, 3, -3, 13, (2, 7), l1='y = 2x + 3', l2='3x + y = 13',
                        xmin=-1, xmax=5, ymin=-2, ymax=12, tick_every=2)),
                ex('Solve x = y + 4 and 2x + 3y = 23.',
                   ['2(y + 4) + 3y = 23 gives 5y = 15, so y = 3.',
                    'Then x = 7: **(7, 3)**.'],
                   A.flow(('x = y + 4', '2(y + 4) + 3y = 23', '5y = 15', 'y = 3, x = 7'))),
                ex('Why finish by finding the second variable?',
                   ['A system’s solution is a **point**. Stopping at x answers only half '
                    'the question — though do check whether the question wanted only one '
                    'of them.'],
                   meet(2, 3, -3, 13, (2, 7), l1='y = 2x + 3', l2='3x + y = 13',
                        xmin=-1, xmax=5, ymin=-2, ymax=12, tick_every=2)),
            ],
        },
        {
            'title': 'One, none, or infinitely many',
            'fact': 'different slopes → one  |  same slope, different intercept → '
                    'none  |  identical → infinitely many',
            'text': 'Two lines either cross once, run parallel forever, or sit on top of each '
                    'other. For a₁x + b₁y = c₁ and a₂x + b₂y = '
                    'c₂, compare the ratios a₁/a₂, b₁/b₂ and '
                    'c₁/c₂.',
            'figs': [P.system_cases()],
            'caption': 'Crossing once, never meeting, or lying on top of one another — '
                       'and the ratios of the coefficients tell you which before you solve '
                       'anything.',
            'examples': [
                ex('How many solutions does 3x + 5y = 21 and 6x + 10y = 42 have?',
                   ['The second is exactly twice the first.',
                    '**Infinitely many** — one line.'],
                   P.system_cases()),
                ex('How many solutions does 3x + 5y = 21 and 6x + 10y = 35 have?',
                   ['Same slope, different constant: parallel.', '**None.**'],
                   P.system_cases()),
                ex('How many does 3x + 5y = 21 and 2x − y = 4 have?',
                   ['The slopes differ.', '**Exactly one.**'],
                   P.system_cases()),
            ],
        },
        {
            'title': 'Finding the parameter',
            'fact': 'no solution → match the coefficients but not the constants  |  '
                    'infinitely many → match everything',
            'text': 'These questions give you a letter in one coefficient and ask you to force '
                    'a case. Scale one equation until the x and y parts line up, then compare '
                    'the constants.',
            'figs': [A.flow(('3x + 5y = 21 and kx + 10y = 35', 'double the first: 6x + 10y = 42',
                             'y parts match when k = 6', '42 ≠ 35, so no solution'),
                            note='match the coefficients, then check the constants')],
            'caption': 'Doubling makes the y terms agree, which fixes k. The constants then '
                       'decide whether the answer is ‘no solution’ or '
                       '‘infinitely many’.',
            'examples': [
                ex('For what k does 3x + 5y = 21 and kx + 10y = 35 have no solution?',
                   ['Doubling the first gives 6x + 10y = 42, so k = **6**, and 42 ≠ 35 '
                    'confirms no solution.'],
                   A.flow(('double: 6x + 10y = 42', 'so k = 6', '42 ≠ 35 → none'))),
                ex('For what k does 2x + 6y = 10 and kx + 9y = 15 have infinitely many '
                   'solutions?',
                   ['Multiplying the first by 1.5 gives 3x + 9y = 15.', 'k = **3**.'],
                   A.flow(('×1.5: 3x + 9y = 15', 'matches both sides', 'k = 3'))),
                ex('For what value of k does 3x + ky = 8 and 6x + 10y = 9 have no solution?',
                   ['Doubling the first gives 6x + 2ky = 16, so 2k = 10.', 'k = **5**.'],
                   A.flow(('double: 6x + 2ky = 16', '2k = 10', 'k = 5'))),
            ],
        },
        {
            'title': 'Two-constraint word problems',
            'fact': 'one equation for the count, one for the value',
            'text': 'Tickets, coins, mixtures and two-rate problems all share this shape: how '
                    'many things, and how much they are worth. Define both variables before '
                    'writing anything.',
            'figs': [A.rules_panel(
                (('how many: a + s = 45', 'the count equation'),
                 ('how much: 12a + 7s = 440', 'the value equation'),
                 ('substitute s = 45 − a', '5a = 125, so a = 25')),
                title='two sentences, two equations', w=340)],
            'caption': 'The first equation counts the tickets; the second prices them. Two '
                       'unknowns need exactly these two facts.',
            'examples': [
                ex('Adult tickets cost $12 and student $7. 45 tickets sold for $440. How many '
                   'adult tickets?',
                   ['a + s = 45 and 12a + 7s = 440.',
                    'Substituting: 12a + 7(45 − a) = 440 gives 5a = 125, so a = **25**.'],
                   A.rules_panel((('a + s = 45', 'count'),
                                  ('12a + 7s = 440', 'value'),
                                  ('5a = 125', 'a = 25')), w=320)),
                ex('3 apples and 2 pears cost $8.00; 1 apple and 2 pears cost $6.00. Find the '
                   'price of a pear.',
                   ['Subtracting: 2 apples cost $2, so an apple is $1.',
                    'Then 2 pears cost $5: a pear is **$2.50**.'],
                   A.elimination('3a + 2p = 8', 'a + 2p = 6', 'subtract', '2a = 2',
                                 'a = 1, so p = 2.50')),
                ex('3 crates and 2 baskets cost 57; 1 crate and 4 baskets cost 39. Find the '
                   'crate price.',
                   ['Multiply the second by 3 and subtract: 10 baskets = 60, so a basket is 6.',
                    'A crate is (57 − 12)/3 = **15**.'],
                   A.elimination('3c + 2b = 57', '3c + 12b = 117', 'subtract', '10b = 60',
                                 'b = 6, c = 15')),
            ],
        },
        {
            'title': 'Interpreting the solution',
            'fact': 'the solution is the point where both conditions hold at once',
            'text': 'In context the intersection is the break-even point, the moment two plans '
                    'cost the same, or the mix that satisfies both requirements. Check your '
                    'answer makes sense: you cannot sell 2.5 tickets.',
            'figs': [P.coord_lines(((4, 30, INK, 'C = 30 + 4n'), (2, 50, GREEN,
                                                                  'C = 50 + 2n')),
                                   xmin=0, xmax=20, ymin=20, ymax=110, tick_every=5,
                                   points=((10, 70, '(10, 70)'),),
                                   label='both plans cost $70 at n = 10')],
            'caption': 'Before n = 10 one plan is cheaper; after it, the other. The crossing '
                       'point is the only place they agree.',
            'examples': [
                ex('Two plans cost C = 30 + 4n and C = 50 + 2n. What does their intersection '
                   'mean?',
                   ['The number of items at which **both plans cost the same**: n = 10, at '
                    '$70.'],
                   P.coord_lines(((4, 30, INK, 'C = 30 + 4n'), (2, 50, GREEN,
                                                                'C = 50 + 2n')),
                                 xmin=0, xmax=20, ymin=20, ymax=110, tick_every=5,
                                 points=((10, 70, '(10, 70)'),))),
                ex('A system gives a = 25 and s = 20 for tickets. Check it against 45 tickets '
                   'for $440.',
                   ['25 + 20 = 45 ✓ and 12(25) + 7(20) = 300 + 140 = 440 ✓.',
                    '**Both hold.**'],
                   A.check_table((('count: 25 + 20', '= 45 ✓', True),
                                  ('value: 300 + 140', '= 440 ✓', True)),
                                 title='a solution must satisfy both equations')),
                ex('A ticket system solves to a = 22.5. What does that tell you?',
                   ['That something is wrong — you cannot sell **half a ticket**. '
                    'Recheck the setup.'],
                   A.check_table((('a = 22.5', 'tickets come in whole numbers', False),),
                                 title='does the answer make sense in context?')),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. Here it is **an '
                    'intersection finder**. Enter both equations and click where the lines '
                    'cross; Desmos gives the point exactly.',
    'desmos': [
        ('Solve 2x + y = 11 and x − y = 4. What is x?', '2x+y=11,  x-y=4',
         'Enter both equations and click the intersection.', '5'),
        ('For that system, what is x + y?', '5+1', 'Find both, then combine.', '6'),
        ('Solve y = 2x + 3 and 3x + y = 13. What is x?', 'y=2x+3,  3x+y=13',
         'Desmos marks the crossing point.', '2'),
        ('3 apples and 2 pears cost $8.00; 1 apple and 2 pears cost $6.00. What does a pear '
         'cost?', '3a+2p=8,  a+2p=6', 'Two equations, two unknowns.', '2.5'),
        ('Adult tickets cost $12 and student $7; 45 tickets for $440. How many adult tickets?',
         'a+s=45,  12a+7s=440', 'Count equation and value equation.', '25'),
        ('3 crates and 2 baskets cost 57; 1 crate and 4 baskets cost 39. What does a crate '
         'cost?', '3c+2b=57,  c+4b=39', 'Same structure again.', '15'),
        ('For what k do 3x + ky = 8 and 6x + 10y = 9 have no solution?', '10/2',
         'Match the coefficients.', '5'),
        ('For what k do 2x + 6y = 10 and kx + 9y = 15 have infinitely many solutions?',
         '2*1.5', 'Scale the whole first equation.', '3'),
        ('Two plans cost 30 + 4n and 50 + 2n. At what n are they equal?', '30+4n=50+2n',
         'Set them equal.', '10'),
        ('Solve 3x + 2y = 57 and x + 4y = 39. What is y?', '3x+2y=57,  x+4y=39',
         'Eliminate x first if you work by hand.', '6'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'For word problems write one equation for the **count** and one for the '
                   '**value** before solving anything.',
    'part2': [
        ('P1', 'Hard',
         'The system 2x + y = 11 and x − y = 4 has solution (x, y). What is the value of '
         'x + y?', '6',
         ['Adding the equations gives 3x = 15, so x = 5, and then y = 1.',
          'x + y = **6**. A common wrong answer is x + 4, and another is the first constant '
          '— both are numbers already in the problem.'],
         A.elimination('2x + y = 11', 'x − y = 4', 'add', '3x = 15',
                       'x = 5, y = 1, so x + y = 6')),
        ('P2', 'Hard',
         'At a farmers market, 3 apples and 2 pears cost $8.00, and 1 apple and 2 pears cost '
         '$6.00. What is the price of one pear?', '$2.50',
         ['Subtracting the equations removes the pears: 2 apples cost $2, so an apple is $1.',
          'Then 2 pears cost $5, so a pear is **$2.50**. A common wrong answer is the apple '
          'price.'],
         A.elimination('3a + 2p = 8', 'a + 2p = 6', 'subtract', '2a = 2',
                       'a = $1, so p = $2.50')),
        ('P3', 'Hard',
         'At a basketball tournament, adult tickets cost $12 each and student tickets cost $7 '
         'each. A total of 45 tickets were sold for $440. How many adult tickets were sold?',
         '25',
         ['a + s = 45 and 12a + 7s = 440. Substituting s = 45 − a gives 12a + 315 '
          '− 7a = 440.', '5a = 125, so a = **25**.'],
         A.rules_panel((('a + s = 45', 'the count'),
                        ('12a + 7s = 440', 'the value'),
                        ('5a = 125', 'a = 25 adult tickets')), w=330)),
        ('P4', 'Hard',
         'In the system 3x + ky = 8 and 6x + 10y = 9, k is a constant. For which value of k '
         'does the system have no solution?', '5',
         ['No solution means the lines are parallel, so doubling the first must match the '
          'second’s x and y parts: 6x + 2ky = 16 needs 2k = 10.',
          'k = **5**, and 16 ≠ 9 confirms they never meet.'],
         A.flow(('double: 6x + 2ky = 16', '2k = 10', 'k = 5', '16 ≠ 9 → none'))),
        ('P5', 'Hard',
         'At a market, 3 crates of oranges and 2 baskets of figs cost 57 talens, while 1 crate '
         'and 4 baskets cost 39 talens. What is the price, in talens, of one crate of '
         'oranges?', '15',
         ['Multiply the second equation by 3 and subtract: 10 baskets cost 60, so a basket '
          'is 6.',
          'Then 3 crates cost 57 − 12 = 45, so a crate is **15**. A common wrong answer '
          'is the basket price.'],
         A.elimination('3c + 2b = 57', '3c + 12b = 117', 'subtract', '10b = 60',
                       'b = 6, so c = 15')),
        ('P6', 'Hard',
         'How many solutions does the system 3x + 5y = 21 and 6x + 10y = 35 have?', 'Zero',
         ['Doubling the first gives 6x + 10y = 42, which contradicts 35.',
          'Same slope, different intercept means the lines are **parallel** and never meet.'],
         P.system_cases()),
        ('P7', 'Very hard',
         'A weaver’s pricing system is modelled by 2x + 6y = 10 and kx + 9y = 15, where k '
         'is a constant. If the system has infinitely many solutions, what is the value of k?',
         '3',
         ['Infinitely many solutions means one equation is a multiple of the other. The y '
          'terms give the factor: 9/6 = 1.5, and 15/10 = 1.5 agrees.',
          'k = 2 × 1.5 = **3**.'],
         A.flow(('9/6 = 1.5', '15/10 = 1.5 ✓', 'k = 2 × 1.5', 'k = 3'))),
        ('P8', 'Very hard',
         'Two mobile plans charge C = 30 + 4n and C = 50 + 2n dollars for n items. At the '
         'number of items where the costs are equal, what is that cost, in dollars?', '70',
         ['30 + 4n = 50 + 2n gives 2n = 20, so n = 10.',
          'C = 30 + 40 = **$70**. Answering 10 gives the number of items, not the cost.'],
         P.coord_lines(((4, 30, INK, 'C = 30 + 4n'), (2, 50, GREEN, 'C = 50 + 2n')),
                       xmin=0, xmax=20, ymin=20, ymax=110, tick_every=5,
                       points=((10, 70, '(10, 70)'),))),
        ('P9', 'Very hard',
         'A chemist mixes a 20% solution with a 50% solution to make 30 litres of a 40% '
         'solution. How many litres of the 20% solution are used?', '10',
         ['Let x be the 20% volume: x + y = 30 and 0.2x + 0.5y = 12.',
          'Substituting: 0.2x + 0.5(30 − x) = 12 gives −0.3x = −3, so x = '
          '**10 litres**.'],
         A.rules_panel((('x + y = 30', 'the volume equation'),
                        ('0.2x + 0.5y = 12', 'the concentration equation'),
                        ('−0.3x = −3', 'x = 10 litres')), w=330)),
        ('P10', 'Very hard',
         'The system y = 2x + 3 and y = ax + 7 has no solution. What is the value of a?', '2',
         ['No solution means the lines are parallel, so the slopes match.',
          'a = **2**, and because 3 ≠ 7 the lines really are distinct.'],
         P.system_cases()),
        ('P11', 'Very hard',
         'A system of two linear equations is graphed, and the two lines lie exactly on top of '
         'one another. State what is true here.', 'The system has infinitely many solutions.',
         ['Every point on the shared line satisfies both equations.',
          '**Infinitely many solutions.** A common wrong answer describes parallel lines, '
          'which look similar on a small sketch but are never identical.'],
         P.system_cases()),
        ('P12', 'Very hard',
         'In the system 3x + 5y = 21 and 2x − y = 1, what is the value of y?', '3',
         ['From the second equation, y = 2x − 1. Substituting: 3x + 5(2x − 1) = 21 '
          'gives 13x = 26, so x = 2.',
          'Then y = 2(2) − 1 = **3**. A common wrong answer is x — check which '
          'variable the question asked for.'],
         meet(-0.6, 4.2, 2, -1, (2, 3), l1='3x + 5y = 21', l2='2x − y = 1',
              xmin=-1, xmax=6, ymin=-2, ymax=6, tick_every=2)),
    ],
    'habit': 'Finish the problem. A system’s solution is a point, and the question may '
             'want x, y, their sum, or the cost at the intersection — not the first '
             'number you find.',
}
