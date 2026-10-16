# -*- coding: utf-8 -*-
"""SAT Math 1.1 — Linear Equations in One Variable."""
import algebra as A
import plot as P
from svgbase import AMBER, GREEN, INK, RED


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


LESSON = {
    'code': '1.1',
    'title': 'Linear Equations in One Variable',
    'sections': [
        {
            'title': 'Multi-step equations',
            'fact': 'undo the operations in reverse order  |  whatever you do to one side, do '
                    'to the other',
            'text': 'Work from the outside in: deal with addition and subtraction before '
                    'multiplication and division. Substituting your answer back is a '
                    'ten-second check that catches almost every slip.',
            'figs': [A.flow(('5(x − 2) = 30', 'divide by 5', 'x − 2 = 6', 'x = 8'),
                            note='then check: 5(8 − 2) = 30 ✓')],
            'caption': 'Each box undoes one operation, in the reverse of the order they were '
                       'applied. The last box is the answer, and the check puts it straight '
                       'back into the original.',
            'examples': [
                ex('Solve 5(x − 2) = 30.',
                   ['Divide by 5: x − 2 = 6.', 'x = **8**. Check: 5(6) = 30.'],
                   A.flow(('5(x − 2) = 30', 'x − 2 = 6', 'x = 8'))),
                ex('Solve 4x + 7 = 2x − 5.',
                   ['Collect x on one side: 2x = −12.', 'x = **−6**.'],
                   A.flow(('4x + 7 = 2x − 5', '2x = −12', 'x = −6'))),
                ex('Solve 3(2x + 1) − 4 = 11.',
                   ['6x + 3 − 4 = 11, so 6x = 12.', 'x = **2**.'],
                   A.flow(('3(2x + 1) − 4 = 11', '6x − 1 = 11', '6x = 12',
                           'x = 2'))),
            ],
        },
        {
            'title': 'Clearing fractions and decimals',
            'fact': 'multiply every term by the common denominator',
            'text': 'Fractions make arithmetic slow and errors likely. Multiply the whole '
                    'equation through by the lowest common denominator first, and the problem '
                    'becomes an ordinary one.',
            'figs': [A.flow(('x/3 + x/4 = 14', 'multiply every term by 12',
                             '4x + 3x = 168', 'x = 24'),
                            note='every term — including the one on the right')],
            'caption': 'Twelve is the lowest number both 3 and 4 divide into, so one '
                       'multiplication clears both fractions at once.',
            'examples': [
                ex('Solve x/3 + x/4 = 14.',
                   ['Multiply everything by 12: 4x + 3x = 168.',
                    '7x = 168, so x = **24**.'],
                   A.flow(('x/3 + x/4 = 14', '4x + 3x = 168', '7x = 168', 'x = 24'))),
                ex('Solve (x + 2)/5 = 3.',
                   ['Multiply by 5: x + 2 = 15.', 'x = **13**.'],
                   A.flow(('(x + 2)/5 = 3', 'x + 2 = 15', 'x = 13'))),
                ex('Solve 0.4x + 1.2 = 3.6.',
                   ['Multiply by 10 to clear decimals: 4x + 12 = 36.',
                    '4x = 24, so x = **6**.'],
                   A.flow(('0.4x + 1.2 = 3.6', '4x + 12 = 36', 'x = 6'))),
            ],
        },
        {
            'title': 'Translating a sentence',
            'fact': 'name the unknown  |  write one equation  |  answer the question that was '
                    'asked',
            'text': 'Most SAT algebra is a sentence in disguise. ‘A fixed charge plus so '
                    'much each’ is always b + mx. Write the equation before touching any '
                    'arithmetic.',
            'figs': [A.rules_panel(
                (('a fixed charge plus so much each', 'b + mx'),
                 ('‘$2 for a box plus $3 per muffin’', '2 + 3m'),
                 ('‘three more than twice a number’', '2n + 3')),
                title='the words map onto the symbols, phrase by phrase', w=340),
                     P.context_line(2, 3, 8, xlabel='muffins', ylabel='cost',
                                    label='C = 2 + 3m')],
            'caption': 'The fixed charge is where the line starts and the per-item charge is '
                       'how fast it climbs. Paying $23 means asking which m puts you at that '
                       'height.',
            'examples': [
                ex('A bakery charges $2 for a box plus $3 per muffin. A customer pays $23. '
                   'How many muffins?',
                   ['2 + 3m = 23, so 3m = 21.', 'm = **7 muffins**.'],
                   A.flow(('2 + 3m = 23', '3m = 21', 'm = 7'))),
                ex('A fabric shop charges $4.50 per metre plus a $2 cutting fee. A customer '
                   'pays $29. How many metres?',
                   ['4.5x + 2 = 29, so 4.5x = 27.', 'x = **6 metres**.'],
                   A.flow(('4.5x + 2 = 29', '4.5x = 27', 'x = 6'))),
                ex('Three more than twice a number is 17. Find the number.',
                   ['2n + 3 = 17, so 2n = 14.', 'n = **7**.'],
                   A.flow(('2n + 3 = 17', '2n = 14', 'n = 7'))),
            ],
        },
        {
            'title': 'Literal equations',
            'fact': 'treat the other letters as numbers and isolate the one you want',
            'text': 'Rearranging a formula uses exactly the same moves as solving for x. If '
                    'the target letter appears twice, gather those terms together and factor '
                    'it out.',
            'figs': [A.flow(('A = ½bh', 'multiply by 2', '2A = bh', 'h = 2A/b'),
                            note='the same three moves as solving for a number'),
                     A.flow(('ax = bx + c', 'gather: ax − bx = c', 'x(a − b) = c',
                             'x = c/(a − b)'),
                            note='when the letter appears twice, factor it out')],
            'caption': 'Top: isolate h exactly as you would isolate x. Bottom: with x on both '
                       'sides you must collect first — dividing early is what loses the '
                       'mark.',
            'examples': [
                ex('Solve A = ½bh for h.',
                   ['Multiply by 2: 2A = bh.', 'h = **2A/b**.'],
                   A.flow(('A = ½bh', '2A = bh', 'h = 2A/b'))),
                ex('Solve y = mx + b for x.',
                   ['y − b = mx.', 'x = **(y − b)/m**.'],
                   A.flow(('y = mx + b', 'y − b = mx', 'x = (y − b)/m'))),
                ex('Solve ax = bx + c for x, where a ≠ b.',
                   ['x appears twice, so gather and factor: ax − bx = c, giving '
                    'x(a − b) = c.', 'x = **c/(a − b)**.'],
                   A.flow(('ax = bx + c', 'ax − bx = c', 'x(a − b) = c',
                           'x = c/(a − b)'))),
            ],
        },
        {
            'title': 'No solution or infinitely many',
            'fact': 'variables cancel and the statement is false → no solution  |  true '
                    '→ infinitely many',
            'text': 'Simplify both sides fully. If the x terms vanish, look at what is left: '
                    '5 = 7 is false, so nothing works; 5 = 5 is true, so everything works. For '
                    'ax + b = cx + d this means a = c with b ≠ d, or a = c with b = d.',
            'figs': [P.system_cases()],
            'caption': 'The same three cases drawn as lines: crossing once, running parallel '
                       'with no crossing, or lying on top of each other so every point works.',
            'examples': [
                ex('Solve 2(x + 3) = 2x + 7.',
                   ['2x + 6 = 2x + 7 gives 6 = 7, which is false.', '**No solution.**'],
                   A.flow(('2(x + 3) = 2x + 7', '2x + 6 = 2x + 7', '6 = 7 is false',
                           'no solution'))),
                ex('Solve 3(x − 1) = 3x − 3.',
                   ['3x − 3 = 3x − 3 gives 0 = 0, which is always true.',
                    '**Infinitely many solutions.**'],
                   A.flow(('3(x − 1) = 3x − 3', '0 = 0 is always true',
                           'infinitely many'))),
                ex('For what k does kx + 5 = 4x + 5 have infinitely many solutions?',
                   ['The sides must match exactly.', 'k = **4**.'],
                   A.rules_panel((('kx + 5 = 4x + 5', 'the constants already match'),
                                  ('so the x terms must too', 'k = 4')), w=320)),
            ],
        },
        {
            'title': 'Checking and interpreting',
            'fact': 'substitute back  |  and make sure the answer is the quantity asked for',
            'text': 'Two different habits, both worth marks. Substituting catches arithmetic '
                    'errors. Re-reading the question catches the trap where you solve for x '
                    'but the question wanted 2x, or the price rather than the quantity.',
            'figs': [A.check_table(
                (('x = 6', 'left 4(6) + 7 = 31 against right 2(6) − 5 = 7', False),
                 ('x = −6', 'left −17 against right −17', True)),
                title='substitute into both sides of the original')],
            'caption': 'A wrong answer fails the check loudly: the two sides come out '
                       'different. The correct one makes them agree.',
            'examples': [
                ex('A student solves 4x + 7 = 2x − 5 and gets x = 6. Check it.',
                   ['Left: 31. Right: 7. They differ, so **x = 6 is wrong**; the correct '
                    'answer is −6.'],
                   A.check_table(
                       (('x = 6', '31 against 7', False),
                        ('x = −6', '−17 against −17', True)))),
                ex('If 3x − 4 = 11, what is the value of 6x?',
                   ['3x = 15, so x = 5.',
                    '6x = **30**, not 5 — read what was asked.'],
                   A.flow(('3x − 4 = 11', 'x = 5', 'but the question wants 6x',
                           '6x = 30'))),
                ex('If 2n + 3 = 17, what is n + 1?',
                   ['n = 7, so n + 1 = **8**.'],
                   A.flow(('2n + 3 = 17', 'n = 7', 'n + 1 = 8'))),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. Here it is **an '
                    'equation solver**. Type the equation exactly as written and Desmos '
                    'returns the value; the skill is turning the sentence into that equation.',
    'desmos': [
        ('If 5(x − 2) = 30, what is x?', '5(x-2)=30',
         'Type the equation; Desmos solves it.', '8'),
        ('Solve 4x + 7 = 2x − 5.', '4x+7=2x-5', 'Variables on both sides are no harder.',
         '-6'),
        ('Solve x/3 + x/4 = 14.', 'x/3+x/4=14', 'Fractions are fine typed directly.', '24'),
        ('A bakery charges $2 plus $3 per muffin and the total is $23. How many muffins?',
         '2+3m=23', 'Write the model, then solve.', '7'),
        ('A shop charges $4.50 per metre plus a $2 fee and the total is $29. How many metres?',
         '4.5x+2=29', 'Fixed part plus rate times amount.', '6'),
        ('Solve 0.4x + 1.2 = 3.6.', '0.4x+1.2=3.6', 'Decimals need no clearing in Desmos.',
         '6'),
        ('If 3x − 4 = 11, what is 6x?', '6*((11+4)/3)',
         'Solve, then answer what was asked.', '30'),
        ('Solve 3(2x + 1) − 4 = 11.', '3(2x+1)-4=11', 'Brackets are handled as typed.',
         '2'),
        ('For what k does kx + 5 = 4x + 5 have infinitely many solutions?', '4',
         'The two sides must be identical.', '4'),
        ('Solve (x + 2)/5 = 3.', '(x+2)/5=3', 'One step after clearing the denominator.',
         '13'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'Several of these solve to a value that is not the answer — re-read '
                   'the final sentence before writing anything down.',
    'part2': [
        ('P1', 'Hard',
         'A bakery charges $2 for a gift box plus $3 for each muffin placed in it. A customer '
         'pays $23 in total for one box of muffins. How many muffins are in the box?', '7',
         ['2 + 3m = 23, so 3m = 21.',
          'm = **7 muffins**. A common wrong answer comes from 23/3 rounded, ignoring the box '
          'charge.'],
         A.flow(('2 + 3m = 23', '3m = 21', 'm = 7'))),
        ('P2', 'Hard', 'If 5(x − 2) = 30, what is the value of x?', '8',
         ['Divide both sides by 5 first: x − 2 = 6.',
          'x = **8**. A common wrong answer is x − 2, one step short of the answer.'],
         A.flow(('5(x − 2) = 30', 'x − 2 = 6', 'x = 8'))),
        ('P3', 'Hard',
         'A fabric shop charges $4.50 per metre of linen plus a flat $2 cutting fee. A '
         'customer pays $29 in total. How many metres of linen did the customer buy?', '6',
         ['4.5x + 2 = 29 gives 4.5x = 27.', 'x = **6 metres**.'],
         A.flow(('4.5x + 2 = 29', '4.5x = 27', 'x = 6'))),
        ('P4', 'Hard', 'If x/3 + x/4 = 14, what is the value of x?', '24',
         ['Multiply every term by 12: 4x + 3x = 168, so 7x = 168.', 'x = **24**.'],
         A.flow(('x/3 + x/4 = 14', '4x + 3x = 168', 'x = 24'))),
        ('P5', 'Hard',
         'The equation A = ½bh gives the area of a triangle. Which expression gives h in '
         'terms of A and b?', '2A/b',
         ['Multiply both sides by 2, then divide by b.',
          'h = **2A/b**. A common wrong answer divides by 2 instead of multiplying.'],
         A.flow(('A = ½bh', '2A = bh', 'h = 2A/b'))),
        ('P6', 'Hard',
         'How many solutions does the equation 2(x + 3) = 2x + 7 have?', 'Zero',
         ['Expanding gives 2x + 6 = 2x + 7, and the x terms cancel to leave 6 = 7.',
          'That is false, so there are **no solutions** — the two sides never meet.'],
         P.system_cases()),
        ('P7', 'Very hard', 'If 3x − 4 = 11, what is the value of 6x + 2?', '32',
         ['3x = 15, so x = 5 and 6x = 30.',
          '6x + 2 = **32**. A common wrong answer is x itself, and another is 6x — both '
          'are steps along the way, not the answer.'],
         A.flow(('3x − 4 = 11', 'x = 5', '6x = 30', '6x + 2 = 32'))),
        ('P8', 'Very hard',
         'In the equation ax + 12 = 4x + b, a and b are constants. For which values does the '
         'equation have infinitely many solutions?', 'a = 4 and b = 12',
         ['Infinitely many solutions means the two sides are the **same expression**, so the '
          'x coefficients match and the constants match.',
          '**a = 4 and b = 12.** A common wrong answer gives no solution; another gives '
          'exactly one.'],
         A.rules_panel((('ax + 12 = 4x + b', 'same line, written twice'),
                        ('x terms must match', 'a = 4'),
                        ('constants must match', 'b = 12')), w=330)),
        ('P9', 'Very hard', 'Solve the equation ax = bx + c for x, where a ≠ b.',
         'c/(a − b)',
         ['x appears on both sides, so gather and factor: ax − bx = c gives '
          'x(a − b) = c.',
          'x = **c/(a − b)**. Dividing before factoring is what leads to the wrong '
          'answer.'],
         A.flow(('ax = bx + c', 'ax − bx = c', 'x(a − b) = c',
                 'x = c/(a − b)'))),
        ('P10', 'Very hard',
         'A taxi charges a fixed fee plus a rate per kilometre. A 5 km ride costs $11 and a '
         '12 km ride costs $25. What is the fixed fee, in dollars?', '1',
         ['The rate is (25 − 11)/(12 − 5) = 14/7 = $2 per km.',
          'At 5 km: 11 = f + 2(5), so f = **$1**.'],
         P.context_line(1, 2, 14, xlabel='kilometres', ylabel='fare',
                        label='fare = 1 + 2d')),
        ('P11', 'Very hard', 'If 2(3x − 1) = 4(x + 5) − 2, what is the value of x?',
         '10',
         ['6x − 2 = 4x + 20 − 2 = 4x + 18, so 2x = 20.',
          'x = **10**. Forgetting to distribute the 4 over both terms gives 8.'],
         A.flow(('2(3x − 1) = 4(x + 5) − 2', '6x − 2 = 4x + 18', '2x = 20',
                 'x = 10'))),
        ('P12', 'Very hard',
         'A student solves 4x + 7 = 2x − 5 and obtains x = 6. Substituting x = 6 gives 31 '
         'on the left and 7 on the right. What is the correct value of x?', '−6',
         ['Collecting correctly: 4x − 2x = −5 − 7, so 2x = −12.',
          'x = **−6**. Check: 4(−6) + 7 = −17 and 2(−6) − 5 = '
          '−17. The sign of the constant was the error.'],
         A.check_table((('x = 6', '31 against 7', False),
                        ('x = −6', '−17 against −17', True)))),
    ],
    'habit': 'Substitute your answer back into the original equation. It takes ten seconds and '
             'catches almost every sign slip.',
}
