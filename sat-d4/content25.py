# -*- coding: utf-8 -*-
"""SAT Math 2.5 — Exponential Functions."""
import algebra as A
import plot as P
from svgbase import AMBER, FAINT, GREEN, INK, RED


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


GROWTH_DECAY = P.graph(
    [(lambda x: 2 ** x, GREEN, 'growth, b > 1'),
     (lambda x: 3 * 0.5 ** x, RED, 'decay, 0 < b < 1')],
    xmin=-1, xmax=5, ymin=-1, ymax=12, xstep=1, ystep=1, xtick_every=1, ytick_every=4,
    hlines=((0, FAINT, 'y = 0'),), label='both start at a and never reach the asymptote')

LESSON = {
    'code': '2.5',
    'title': 'Exponential Functions',
    'sections': [
        {
            'title': 'The exponential model',
            'fact': 'y = a · bˣ  |  a is the starting value, b is the growth factor '
                    'per step',
            'text': 'Read a at x = 0 and b as the multiplier for one step. Exponential means '
                    'repeated multiplication, which is what separates it from a linear '
                    'model’s repeated addition.',
            'figs': [GROWTH_DECAY],
            'caption': 'Both curves cut the y-axis at their starting value a. Above b = 1 the '
                       'curve climbs ever faster; below it the curve falls towards y = 0 '
                       'without ever arriving.',
            'examples': [
                ex('A shop opens with 150 members and the number doubles each year. Write the '
                   'model.',
                   ['a = 150 and b = 2.', '**M(t) = 150(2)ᵗ**.'],
                   P.exponential(150, 2, xmin=-0.4, xmax=4, ymin=-100, ymax=2600,
                                 ystep=200, ytick_every=600,
                                 label='M(t) = 150(2)ᵗ')),
                ex('How many members after 3 years?',
                   ['150(2)³ = 150 × 8 = **1200**. Listing 150 → 300 → 600 '
                    '→ 1200 stops you counting one doubling short.'],
                   A.diff_ratio_table((0, 1, 2, 3), (150, 300, 600, 1200), 'exponential')),
                ex('A culture starts at 80 and triples every hour. How many after 4 hours?',
                   ['80(3)⁴ = 80 × 81 = **6480**.'],
                   P.exponential(80, 3, xmin=-0.3, xmax=4.3, ymin=-400, ymax=7200,
                                 ystep=500, ytick_every=2000,
                                 label='80(3)⁴ = 6480')),
            ],
        },
        {
            'title': 'Growth, decay and the percentage',
            'fact': 'rise of r% → b = 1 + r  |  fall of r% → b = 1 − r',
            'text': 'Convert between the base and the percentage in both directions. A base of '
                    '0.88 is a fall of 12%, not a fall of 88% and not ‘keeps 12%’. A '
                    'base of 1.07 is a rise of 7%.',
            'figs': [A.percent_factor((15, 7), (8, 12))],
            'caption': 'The percentage is the distance from 1, never the base itself. 0.88 '
                       'keeps 88% and therefore loses 12%.',
            'examples': [
                ex('A population falls 8% a year. What is the growth factor?',
                   ['1 − 0.08 = **0.92**.'],
                   A.percent_factor((), (8,))),
                ex('V(t) = 4200(0.88)ᵗ. What does 0.88 mean?',
                   ['The value **falls by 12% each year**, because 1 − 0.88 = 0.12. It '
                    'keeps 88%, not 12%.'],
                   A.percent_factor((), (12,))),
                ex('A deposit grows 7% a year. Write the model for $500.',
                   ['**A(t) = 500(1.07)ᵗ**.'],
                   P.exponential(500, 1.07, xmin=-0.3, xmax=10, ymin=0, ymax=1100,
                                 ystep=100, ytick_every=200,
                                 label='A(t) = 500(1.07)ᵗ')),
            ],
        },
        {
            'title': 'Changing the time unit',
            'fact': 'bᵗ = (b¹ᐟⁿ)ⁿᵗ — take the n-th root of '
                    'the base, multiply the exponent by n',
            'text': 'This is the subtopic your class scored lowest on. Changing from years to '
                    'months never changes the base alone and never the exponent alone — it '
                    'does both, in opposite directions. The tell in the question is a word like '
                    '*monthly* or *quarterly*.',
            'figs': [A.time_unit(0.88, 12, 'month')],
            'caption': 'Twelve monthly steps must come to one yearly step, so the monthly base '
                       'is the twelfth root and the exponent is multiplied by twelve. Do one '
                       'without the other and the model no longer matches.',
            'examples': [
                ex('V(t) = 84,000(0.88)ᵗ with t in years. Rewrite it with a monthly factor.',
                   ['One year is 12 months, so t years is 12t months.',
                    '**84,000((0.88)¹ᐟ¹²)¹²ᵗ**, and '
                    '(0.88)¹ᐟ¹² ≈ 0.9894.'],
                   A.time_unit(0.88, 12, 'month')),
                ex('Why is 84,000(0.88)¹²ᵗ wrong?',
                   ['That multiplies by 0.88 twelve times a *year* — a fall of about 78% '
                    'annually instead of 12%.'],
                   A.rules_panel((('(0.88)¹²', '≈ 0.216 — a 78% fall'),
                                  ('(0.88¹ᐟ¹²)¹²', '= 0.88 '
                                   '✓ the same 12% fall')), w=330)),
                ex('P = 200(1.6)ᵗ with t in years. Write it with a quarterly factor.',
                   ['Four quarters in a year.',
                    '**200((1.6)¹ᐟ⁴)⁴ᵗ**.'],
                   A.time_unit(1.6, 4, 'quarter')),
            ],
        },
        {
            'title': 'Exponential against linear',
            'fact': 'constant difference → linear  |  constant ratio → exponential',
            'text': 'Test a table both ways. Subtract consecutive values: equal differences '
                    'mean linear. Divide them: equal ratios mean exponential. Exponential '
                    'growth eventually overtakes any linear growth, however slow it starts.',
            'figs': [A.diff_ratio_table((0, 1, 2, 3), (5, 8, 11, 14), 'linear'),
                     A.diff_ratio_table((0, 1, 2, 3), (5, 10, 20, 40), 'exponential'),
                     P.growth_vs_linear()],
            'caption': 'Same first value, two different engines. Adding a fixed amount draws a '
                       'straight line; multiplying by a fixed amount bends upward and always '
                       'wins in the end.',
            'examples': [
                ex('y = 5, 8, 11, 14. Which model?',
                   ['Differences 3, 3, 3.', '**Linear**, y = 3x + 2.'],
                   A.diff_ratio_table((0, 1, 2, 3), (5, 8, 11, 14), 'linear')),
                ex('y = 5, 10, 20, 40. Which model?',
                   ['Ratios 2, 2, 2.', '**Exponential**, y = 5(2)ˣ counting from x = 0.'],
                   A.diff_ratio_table((0, 1, 2, 3), (5, 10, 20, 40), 'exponential')),
                ex('A saver adds $50 a month; an investment grows 3% a month. Which is '
                   'exponential?',
                   ['The **investment** — a percentage of a changing amount. Adding a '
                    'fixed $50 is linear.'],
                   P.growth_vs_linear()),
            ],
        },
        {
            'title': 'The horizontal asymptote',
            'fact': 'y = a·bˣ approaches y = 0  |  adding c shifts the asymptote to '
                    'y = c',
            'text': 'A decaying exponential gets arbitrarily close to its asymptote but never '
                    'reaches it, which is why a model like ‘cools towards room '
                    'temperature’ is written with a constant added on.',
            'figs': [P.graph([(lambda x: 3 * 0.5 ** x, RED, 'y = 3(0.5)ˣ'),
                              (lambda x: 3 * 0.5 ** x + 20, GREEN, 'y = 3(0.5)ˣ + 20')],
                             xmin=-1, xmax=6, ymin=-2, ymax=26, xstep=1, ystep=2,
                             xtick_every=2, ytick_every=4,
                             hlines=((0, FAINT, 'y = 0'), (20, GREEN, 'y = 20')),
                             label='the +20 lifts the whole graph, asymptote included')],
            'caption': 'Both curves have the same shape; the green one sits 20 higher, so it '
                       'levels off at 20 instead of 0. Whatever is added on is the value the '
                       'model approaches.',
            'examples': [
                ex('What is the horizontal asymptote of y = 3(0.5)ˣ?',
                   ['**y = 0.** The curve falls towards the x-axis without touching it.'],
                   P.exponential(3, 0.5, xmin=-1, xmax=6, ymin=-1, ymax=7, decay=True,
                                 ystep=1, ytick_every=2, label='y = 3(0.5)ˣ')),
                ex('What is it for y = 3(0.5)ˣ + 20?',
                   ['**y = 20** — the whole graph is lifted 20.'],
                   P.graph([(lambda x: 3 * 0.5 ** x + 20, GREEN, None)],
                           xmin=-1, xmax=6, ymin=14, ymax=26, xstep=1, ystep=1,
                           xtick_every=2, ytick_every=2,
                           hlines=((20, GREEN, 'y = 20'),), label='levels off at 20')),
                ex('A drink cools according to T(t) = 65(0.9)ᵗ + 22. What does 22 '
                   'represent?',
                   ['The **room temperature**, 22 degrees — the value the drink '
                    'approaches but never quite reaches.'],
                   P.graph([(lambda x: 65 * 0.9 ** x + 22, RED, 'T(t) = 65(0.9)ᵗ + 22')],
                           xmin=-2, xmax=40, ymin=10, ymax=95, xstep=2, ystep=5,
                           xtick_every=10, ytick_every=20,
                           hlines=((22, GREEN, 'room temperature 22'),),
                           label='starts at 87, settles towards 22')),
            ],
        },
        {
            'title': 'Solving exponential equations',
            'fact': 'same base → equate the exponents  |  otherwise graph it in Desmos',
            'text': 'Rewrite both sides as powers of the same number whenever you can. When the '
                    'bases cannot be matched, the SAT expects you to read the intersection off '
                    'a graph rather than use logarithms.',
            'figs': [A.flow(('2ˣ = 32', '32 = 2⁵', '2ˣ = 2⁵', 'x = 5'),
                            note='matching bases turns it into an ordinary equation')],
            'caption': 'Once both sides are powers of 2, the exponents must agree. That is the '
                       'whole method — no logarithms required.',
            'examples': [
                ex('Solve 2ˣ = 32.',
                   ['32 = 2⁵.', 'x = **5**.'],
                   A.flow(('2ˣ = 32', '2ˣ = 2⁵', 'x = 5'))),
                ex('Solve 3²ˣ = 81.',
                   ['81 = 3⁴, so 2x = 4.', 'x = **2**.'],
                   A.flow(('3²ˣ = 81', '3²ˣ = 3⁴', '2x = 4',
                           'x = 2'))),
                ex('Solve 5ˣ⁺¹ = 125.',
                   ['125 = 5³, so x + 1 = 3.', 'x = **2**.'],
                   A.flow(('5ˣ⁺¹ = 125', '5ˣ⁺¹ = 5³',
                           'x + 1 = 3', 'x = 2'))),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. Here it is **a growth '
                    'calculator**. Type the whole model and evaluate it, or graph both sides of '
                    'an exponential equation and read the crossing.',
    'desmos': [
        ('A shop opens with 150 members and the number doubles each year. How many after 3 '
         'years?', '150*2^3', 'Count the doublings carefully.', '1200'),
        ('A town of 1200 falls 8% a year. What is the population after 5 years, to the nearest '
         'whole number?', '1200*0.92^5', 'A fall of 8% means a factor of 0.92.', '791'),
        ('What is (0.88)¹ᐟ¹², to four decimal places?', '0.88^(1/12)',
         'The monthly factor behind an annual 0.88.', '0.9894'),
        ('$500 grows at 7% a year. What is it worth after 3 years, to the nearest cent?',
         '500*1.07^3', 'Repeated multiplication, not 500 × 1.21.', '612.52'),
        ('Solve 2ˣ = 32.', '2^x=32', 'Graph both sides and read the intersection.', '5'),
        ('A culture starts at 80 and triples hourly. How many after 4 hours?', '80*3^4',
         'Powers grow fast; let Desmos do it.', '6480'),
        ('What is the growth factor for a rise of 15% per period?', '1+0.15',
         'A rise adds to 1.', '1.15'),
        ('250 subscribers grow 20% monthly. How many after 2 months?', '250*1.2^2',
         '1.2 squared is 1.44.', '360'),
        ('Solve 3²ˣ = 81.', '3^(2x)=81', 'Both sides are powers of 3.', '2'),
        ('What does 65(0.9)ᵗ + 22 approach as t grows large?', '65*0.9^100+22',
         'Try a large t to see the asymptote.', '22'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'Read the base carefully every time: it tells you growth or decay, and the '
                   'percentage is its distance from 1 — not the base itself.',
    'part2': [
        ('P1', 'Hard',
         'When a tea shop opened it had 150 loyalty members, and the number has doubled every '
         'year since. How many members does the shop have 3 years after opening?', '1200',
         ['150 × 2³ = 150 × 8 = **1200**.',
          'A common wrong answer counts only two doublings — four of your class chose it '
          'on Test 5.'],
         A.diff_ratio_table((0, 1, 2, 3), (150, 300, 600, 1200), 'exponential')),
        ('P2', 'Hard',
         'The function V(t) = 4200(0.88)ᵗ gives the value, in talens, of an inventory t '
         'years after purchase. What is the best interpretation of 0.88?',
         'The value decreases by 12% each year.',
         ['A base below 1 is decay, and 1 − 0.88 = 0.12.',
          'The value **falls 12% a year** and keeps 88%. A common wrong answer reverses which '
          'figure is kept.'],
         A.percent_factor((), (12,))),
        ('P3', 'Hard',
         'A spice stall opens with 640 jars and the number of unsold jars decreases by 15% each '
         'week. Which function gives the number of jars after t weeks?', 'J(t) = 640(0.85)ᵗ',
         ['A fall of 15% leaves 85%, so the base is 1 − 0.15 = 0.85.',
          '**J(t) = 640(0.85)ᵗ.** A common wrong answer uses the rate as the base; C is '
          'linear.'],
         P.exponential(640, 0.85, xmin=-1, xmax=12, ymin=-50, ymax=750, decay=True,
                       ystep=50, ytick_every=200, label='J(t) = 640(0.85)ᵗ')),
        ('P4', 'Hard',
         'A subscription service has 250 subscribers and grows by 20% each month. How many '
         'subscribers will it have after 2 months?', '360',
         ['250(1.2)² = 250 × 1.44 = **360**.',
          'Adding 20% of 250 twice would give 350, which is the common error.'],
         A.diff_ratio_table((0, 1, 2), (250, 300, 360), 'exponential')),
        ('P5', 'Hard', 'If 3²ˣ = 81, what is the value of x?', '2',
         ['81 = 3⁴, so 2x = 4 and x = **2**.',
          'A common wrong answer stops at 2x = 4 without halving.'],
         A.flow(('3²ˣ = 81', '3²ˣ = 3⁴', '2x = 4', 'x = 2'))),
        ('P6', 'Hard',
         'A table shows y = 5, 10, 20, 40 for x = 0, 1, 2, 3. Which function models the data?',
         'y = 5(2)ˣ',
         ['The ratios are all 2, so the model is exponential with a = 5 and b = 2.',
          '**y = 5(2)ˣ.** A common wrong answer swaps the starting value and the base; at '
          'x = 0 it gives 2, not 5.'],
         A.diff_ratio_table((0, 1, 2, 3), (5, 10, 20, 40), 'exponential')),
        ('P7', 'Very hard',
         'The value V(t), in dollars, of a tour bus t years after purchase is V(t) = '
         '84,000(0.88)ᵗ. Which expression is equivalent and uses the approximate monthly '
         'decay factor?', '84,000(0.88¹ᐟ¹²)¹²ᵗ',
         ['One year is 12 months, so take the twelfth root of the base and multiply the '
          'exponent by 12.',
          '**84,000(0.88¹ᐟ¹²)¹²ᵗ**, where '
          '0.88¹ᐟ¹² ≈ 0.9894. Two common wrong answers decay twelve '
          'times too fast; C treats 0.12 as a factor rather than a rate.'],
         A.time_unit(0.88, 12, 'month')),
        ('P8', 'Very hard',
         'A population of 1,200 decreases by 8% each year. To the nearest whole number, what is '
         'the population after 5 years?', '791',
         ['1200(0.92)⁵ = 790.89… ≈ **791**.',
          'Subtracting 8% of 1,200 five times would give 720 — that treats the decrease as '
          'linear.'],
         P.exponential(1200, 0.92, xmin=-0.5, xmax=6, ymin=0, ymax=1400, decay=True,
                       ystep=100, ytick_every=400, label='1200(0.92)⁵ ≈ 791')),
        ('P9', 'Very hard',
         'A hot drink cools according to T(t) = 65(0.9)ᵗ + 22, where T is in degrees '
         'Celsius and t in minutes. What does the 22 represent?',
         'The room temperature the drink approaches.',
         ['As t grows, 65(0.9)ᵗ → 0, so T → **22**, the horizontal asymptote.',
          'The drink’s initial temperature is T(0) = 87, which is that answer’s trap.'],
         P.graph([(lambda x: 65 * 0.9 ** x + 22, RED, 'T(t) = 65(0.9)ᵗ + 22')],
                 xmin=-2, xmax=40, ymin=10, ymax=95, xstep=2, ystep=5, xtick_every=10,
                 ytick_every=20, hlines=((22, GREEN, 'y = 22'),),
                 points=((0, 87, 'T(0) = 87', AMBER),), label='starts at 87, settles at 22')),
        ('P10', 'Very hard',
         'Two investments start at $1,000. The first adds $80 each year; the second grows by 7% '
         'each year. State what is true here.',
         'The first leads at first, but the second eventually overtakes it.',
         ['After one year: $1,080 against $1,070. But 7% of a growing balance eventually '
          'exceeds a fixed $80.',
          '**Exponential growth always overtakes linear growth in the end**, whatever the head '
          'start.'],
         P.graph([(lambda x: 1000 + 80 * x, INK, '$1000 + 80t'),
                  (lambda x: 1000 * 1.07 ** x, RED, '$1000(1.07)ᵗ')],
                 xmin=0, xmax=16, ymin=900, ymax=3000, xstep=1, ystep=100,
                 xtick_every=4, ytick_every=500, label='the curve crosses the line and stays up')),
        ('P11', 'Very hard', 'If 5ˣ⁺¹ = 125, what is the value of x?', '2',
         ['125 = 5³, so x + 1 = 3.', 'x = **2**.'],
         A.flow(('5ˣ⁺¹ = 125', '5ˣ⁺¹ = 5³', 'x + 1 = 3',
                 'x = 2'))),
        ('P12', 'Very hard',
         'A quantity P is modelled by P = 200(1.6)ᵗ, where t is in years. Which expression '
         'gives P using a quarterly growth factor?', '200(1.6¹ᐟ⁴)⁴ᵗ',
         ['A year holds 4 quarters, so take the fourth root of the base and multiply the '
          'exponent by 4.',
          '**200(1.6¹ᐟ⁴)⁴ᵗ.** A common wrong answer is algebraically '
          'equal to the original but uses an *annual* factor raised to a quarter power — '
          'it is not the quarterly factor the question asks for.'],
         A.time_unit(1.6, 4, 'quarter')),
    ],
    'habit': 'Changing the time unit changes **both** the base and the exponent, in opposite '
             'directions. Your class scored 23% on that one subtopic, the second worst on the '
             'whole paper, so drill it until the shape of the answer is automatic.',
}
