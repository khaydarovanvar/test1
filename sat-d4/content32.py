# -*- coding: utf-8 -*-
"""SAT Math 3.2 — Percentages."""
import algebra as A
import data as D
from data import S1, S2, S3


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


LESSON = {
    'code': '3.2',
    'title': 'Percentages',
    'sections': [
        {
            'title': 'Percent of a number',
            'fact': 'p% of N = (p/100) × N — the word *of* always means multiply',
            'text': 'Turn the percentage into a decimal and multiply. Percentages above 100 '
                    'are **not special**: 150% of 60 is 1.5 × 60 = 90. Run it backwards with '
                    'one division — if 12% of x is 54, then x = 54 ÷ 0.12.',
            'figs': [D.percent_bars(((100, 'the whole, N', S1), (36, '36% of N', S2),
                                     (150, '150% of N', S3)),
                                    note='every percentage is just a multiplier: '
                                         '0.36 and 1.50')],
            'caption': 'A percentage above 100 sits past the whole bar — nothing about the '
                       'method changes, only the multiplier.',
            'examples': [
                ex('A shop has 1,250 items. 36% are books, and 20% of the books are '
                   'hardback. How many hardback books are there?',
                   ['0.36 × 1,250 = **450 books**.',
                    '0.20 × 450 = **90 hardback books**.'],
                   A.flow(('1 250 items', '× 0.36', '450 books', '× 0.20',
                           '90 hardback'))),
                ex('A shop has 1,250 items. 36% are books, and 20% of the books are '
                   'hardback. How many hardbacks?',
                   ['0.36 × 1,250 = 450 books; 0.20 × 450 = **90**.'],
                   A.rules_panel((('0.36 × 1,250', '450 books'),
                                  ('0.20 × 450', '90 hardbacks')),
                                 title='the second percentage is taken of the books, '
                                       'not of 1,250', w=330)),
                ex('If 12% of x is 54, what is x?',
                   ['0.12x = 54 → x = 54 ÷ 0.12 = **450**.'],
                   A.flow(('0.12x = 54', 'x = 54 ÷ 0.12', 'x = 450'))),
            ],
        },
        {
            'title': 'Increase and decrease — multiply by what is left',
            'fact': 'up p%: × (1 + p/100)  |  down p%: × (1 − p/100)',
            'text': 'One multiplication, **not a subtraction**. To take 25% off, multiply by '
                    '0.75; to add 15%, multiply by 1.15. Writing the multiplier straight '
                    'down is what makes every harder question in this topic a one-liner.',
            'figs': [A.percent_factor(rises=(15, 40), falls=(20, 25))],
            'caption': 'The percentage is the distance from 1. What you multiply by is what '
                       'is left, or what you end up with — never the percentage itself.',
            'examples': [
                ex('A $1,500 laptop falls 20% in its first year and a further 15% in its '
                   'second. Find the final price.',
                   ['1,500 × 0.80 × 0.85 = **$1,020**.',
                    'Multiplying by 0.25 to take 25% off is the classic slip — the '
                    'multiplier is what is *left*.'],
                   D.percent_bars(((100, 'original', S1), (80, 'after −20%', S3),
                                   (68, 'after −15%', S3)),
                                  note='1 500 × 0.80 × 0.85 = $1 020')),
                ex('A $1,500 laptop falls 20% in year one and a further 15% in year two. '
                   'Find the final price.',
                   ['1,500 × 0.80 × 0.85 = **$1,020**.'],
                   A.flow(('$1 500', '× 0.80', '$1 200', '× 0.85', '$1 020'))),
                ex('A number increased by 40% gives 294. Find the number.',
                   ['1.4x = 294 → x = **210**. Divide by the multiplier.'],
                   A.flow(('1.4x = 294', 'x = 294 ÷ 1.4', 'x = 210'))),
            ],
        },
        {
            'title': 'Percent change, and one quantity as a percent of another',
            'fact': 'percent change = (new − old) ÷ old × 100  |  A as a percent of B '
                    '= (A ÷ B) × 100',
            'text': 'The denominator is always **what you started from**, or whatever '
                    'follows the word *of*. The same gap is a different percentage in each '
                    'direction: 96 → 120 is a 25% rise, but 120 → 96 is a 20% fall.',
            'figs': [D.base_compare(96, 120)],
            'caption': 'One gap of 24, two answers. Measured against 96 it is a quarter; '
                       'measured against 120 it is a fifth. The base decides.',
            'examples': [
                ex('A ticket price rises from $50 to $65. What is the percent increase?',
                   ['(65 − 50)/50 = 15/50 = **30%**.',
                    'Dividing by 65 gives about 23% — the right subtraction and the '
                    'wrong denominator.'],
                   D.base_compare(50, 65)),
                ex('A value falls from 80 to 60. Find the percent decrease.',
                   ['20 ÷ 80 = **25%**. The denominator is the old value.'],
                   D.base_compare(60, 80)),
                ex('In a class of 40, 14 students wear glasses. What percent do not?',
                   ['40 − 14 = 26 students.', '26 ÷ 40 = **65%**.'],
                   A.flow(('40 in the class', '26 do not', '26 ÷ 40', '65%'),
                          note='the question asks for those who do NOT wear them')),
            ],
        },
        {
            'title': 'Reverse percent — finding the original',
            'fact': 'if the final value is F after a change of p%, then original '
                    '= F ÷ (1 ± p/100)',
            'text': 'Given the price **after** a change, you divide. Adding the percentage '
                    'back on is the trap: 15% off $120 is $102, but 15% more than $102 is '
                    'only $117.30. Write 0.85x = 102 and solve it.',
            'figs': [D.reverse_chain(102, ((0.85, '15% off'),))],
            'caption': 'The arrow runs forwards, so reading it backwards means dividing. '
                       'Adding 15% of $102 back on lands at $117.30 — the wrong base.',
            'examples': [
                ex('An item sells for $135 including 8% tax. What was the pre-tax price?',
                   ['1.08x = 135, so x = 135 ÷ 1.08 = **$125**.',
                    'Tax is *added*, so divide by 1.08 — not by 0.92.'],
                   D.reverse_chain(135, ((1.08, '8% tax added'),))),
                ex('A price is $288 after 20% off and then a further 10% off. Find the '
                   'original.',
                   ['0.8 × 0.9 = 0.72, so 288 ÷ 0.72 = **$400**. Divide by the whole '
                    'chain.'],
                   D.reverse_chain(288, ((0.8, '20% off'), (0.9, 'a further 10% off')))),
                ex('After a 30% increase a population is 10,400. What was it before?',
                   ['10,400 ÷ 1.3 = **8,000**.'],
                   D.reverse_chain(10400, ((1.3, '30% increase'),))),
            ],
        },
        {
            'title': 'Successive percent change — multiply, never add',
            'fact': 'up p% then down q% → multiply by (1 + p/100)(1 − q/100)',
            'text': 'Two changes **do not add**, because the second is taken from a bigger '
                    'or smaller number. The recovery is always larger than the fall: down '
                    '20% needs a 25% rise to get back, since 0.8 × 1.25 = 1.',
            'figs': [D.percent_bars(((100, 'original', S1), (120, 'after +20%', S2),
                                     (96, 'then −20%', S3)),
                                    note='1.20 × 0.80 = 0.96 — a 4% fall, not zero')],
            'caption': 'The second 20% is taken from 120, not from 100, so it removes more '
                       'than the first 20% added. The bar lands below where it started.',
            'examples': [
                ex('A price rises 20% and then falls 20%. What is the overall change?',
                   ['1.20 × 0.80 = 0.96, so the price is 96% of the original — '
                    'a **4% decrease**, not zero.',
                    'The order makes no difference: 0.80 × 1.20 is the same 0.96.'],
                   D.percent_bars(((100, 'original', S1), (80, 'after −20% first', S3),
                                   (96, 'then +20%', S2)),
                                  note='the other order gives 0.80 × 1.20 = 0.96 too')),
                ex('A price falls 20%. By what percent must it rise to restore the original?',
                   ['0.8 × m = 1 → m = 1.25, a **25% rise**. The recovery is always '
                    'bigger than the fall.'],
                   A.flow(('0.8 × m = 1', 'm = 1 ÷ 0.8', 'm = 1.25', 'a 25% rise'))),
                ex('A value falls 10% each year for three years. It ends at what percent of '
                   'the original?',
                   ['0.9³ = 0.729, so **72.9%**. Repeated change is a power.'],
                   D.percent_bars(((100, 'start', S1), (90, 'after year 1', S3),
                                   (81, 'after year 2', S3), (72.9, 'after year 3', S3)),
                                  note='0.9³ = 0.729, and three falls of 10% are not 30%')),
            ],
        },
        {
            'title': 'Discount, markup, tax and commission',
            'fact': 'markup is on the cost · discount is on the marked price · tax is on the '
                    'price after the discount · percent profit is measured on the cost',
            'text': 'The order is **not decoration** — doing tax before the discount gives '
                    'a different, wrong answer. Commission is often tiered or applies only '
                    'above a threshold, so read **which sales it covers**.',
            'figs': [A.rules_panel(
                (('markup', 'taken on the cost'),
                 ('discount', 'taken on the marked price'),
                 ('tax', 'taken on the price after the discount'),
                 ('percent profit', 'measured against the cost')),
                title='each percentage has its own base — work left to right', w=340)],
            'caption': 'Four percentages, four different bases. Reading the chain in order '
                       'is the whole method.',
            'examples': [
                ex('A shop marks goods up 40% above cost and then offers 25% off. What '
                   'percent profit is made on the cost?',
                   ['1.40 × 0.75 = 1.05, so the selling price is 105% of cost — a '
                    '**5% profit**.',
                    'Not 15%. The 25% came off the *marked price*, not the cost.'],
                   D.percent_bars(((100, 'cost', S1), (140, 'marked up 40%', S2),
                                   (105, '25% off the marked price', S3)),
                                  note='1.40 × 0.75 = 1.05 — a 5% profit, not 15%')),
                ex('A $250 coat is reduced 30%, then 8% tax is added to the sale price. Find '
                   'the total.',
                   ['250 × 0.7 = $175, then 175 × 1.08 = **$189**. Tax is on what you '
                    'actually pay.'],
                   A.flow(('$250 marked', '× 0.70', '$175 sale price', '× 1.08', '$189'),
                          note='tax after the discount, never before')),
                ex('Commission is 6% on sales above $5,000 only. Find the commission on '
                   'sales of $21,500.',
                   ['Only the excess counts: 0.06 × 16,500 = **$990**.'],
                   A.flow(('sales $21 500', 'subtract the $5 000 threshold',
                           '$16 500 qualifies', '× 0.06 = $990'))),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. For percentages it is '
                    '**a multiplier chain**. Type every multiplier onto one line and read the '
                    'final number; where the original is unknown, type the equation and let '
                    'Desmos solve it.',
    'desmos': [
        ('A jacket priced at $80 is reduced by 15%. What is the sale price, in dollars?',
         '80*0.85', 'A 15% cut multiplies by 0.85.', '68'),
        ('A salary of $42,000 rises by 6%. What is the new salary, in dollars?',
         '42000*1.06', 'A 6% rise multiplies by 1.06.', '44520'),
        ('After a 15% discount an item sells for $61.20. What was the original price, in '
         'dollars?', '61.20/0.85', 'Reversing a discount means dividing.', '72'),
        ('A price of 60 is raised by 30% and the new price is then cut by 10%. What is the '
         'final price?', '60*1.3*0.9',
         'Chain the multipliers; the answer is not 60 × 1.20.', '70.2'),
        ('A population grows from 2,400 to 2,760. What is the percentage increase?',
         '(2760-2400)/2400*100', 'Change over the ORIGINAL, times 100.', '15'),
        ('What is 18% of 350?', '0.18*350', 'Write the percentage as a decimal.', '63'),
        ('A $90 item is taxed at 8%. What is the total cost, in dollars?', '90*1.08',
         'Adding tax multiplies by 1 + rate.', '97.2'),
        ('A number decreases from 250 to 190. What is the percentage decrease?',
         '(250-190)/250*100', 'Still divide by the original value.', '24'),
        ('A $500 investment grows by 7% a year for 3 years. What is it worth, in dollars?',
         '500*1.07^3', 'Repeated multiplication, not 500 × 1.21.', '612.52'),
        ('36 is what percentage of 240?', '36/240*100', 'Part over whole, times 100.', '15'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'Two routes in: if a percentage is running **backwards**, divide; if two '
                   'changes are **stacked**, multiply. And check which number the percentage '
                   'is taken *of*.',
    'part2': [
        ('P1', 'Hard',
         'A jacket is priced at $80. During a sale the price is reduced by 15%. What is the '
         'sale price of the jacket?', '$68.00',
         ['A 15% reduction leaves 85% of the price.',
          '0.85 × 80 = **$68**. A common wrong answer is the discount itself, not the '
          'new price.'],
         D.percent_bars(((100, 'marked $80', S1), (85, 'sale price', S3)),
                        note='0.85 × 80 = $68 — the price left, not the $12 taken off')),
        ('P2', 'Hard',
         'After a discount of 15%, a brass scale sells for 61.20 talens. What was its '
         'original price, in talens?', '72.00',
         ['The sale price is 85% of the original, so divide.',
          '61.20 ÷ 0.85 = **72**. A common wrong answer adds 15% of 61.20 back on, which '
          'reverses the wrong base — the commonest error here.'],
         D.reverse_chain(61.2, ((0.85, '15% discount'),))),
        ('P3', 'Hard',
         'A copper kettle is priced at 60 talens. The shop raises the price by 30%, then '
         'lowers the new price by 10%. What is the final price, in talens?', '70.2',
         ['60 × 1.30 = 78, then 78 × 0.90 = **70.2**.',
          'Successive changes multiply: 1.30 × 0.90 = 1.17, a rise of 17% — not the 20% '
          'you get by adding 30 and −10.'],
         D.percent_bars(((100, 'original 60', S1), (130, 'after +30%', S2),
                         (117, 'after −10%', S3)),
                        note='×1.30 × 0.90 = ×1.17, so 70.2 — not +20%')),
        ('P4', 'Hard',
         "A town's population grows from 2,400 to 2,760. What is the percentage increase?",
         '15%',
         ['Change = 360, and the base is the original 2,400.',
          '360/2400 = 0.15 = **15%**. A common wrong answer divides by the new value '
          '2,760 instead.'],
         D.base_compare(2400, 2760)),
        ('P5', 'Hard',
         'A $90 item is subject to 8% sales tax. What is the total cost, to the nearest '
         'cent?', '97.20',
         ['90 × 1.08 = **$97.20**.'],
         A.flow(('$90 before tax', '× 1.08', '$97.20'),
                note='adding 8% multiplies by 1.08, it does not add 8')),
        ('P6', 'Hard',
         'A number decreases from 250 to 190. What is the percentage decrease?', '24%',
         ['Change = 60, over the original 250.',
          '60/250 = 0.24 = **24%**. A common wrong answer divides by 190; D is the '
          'proportion remaining, not the decrease.'],
         D.base_compare(190, 250)),
        ('P7', 'Very hard',
         'A $500 investment grows by 7% each year. To the nearest cent, what is it worth '
         'after 3 years?', '$612.52',
         ['500(1.07)³ = 500 × 1.225043 = **$612.52**.',
          'A common wrong answer is 500 × 1.21, which multiplies the rate by 3 instead of '
          'compounding it.'],
         D.percent_bars(((100, '$500 at the start', S1), (107, 'after year 1', S2),
                         (114.49, 'after year 2', S2), (122.5, 'after year 3', S3)),
                        note='1.07³ = 1.225043, not 1 + 3(0.07) = 1.21')),
        ('P8', 'Very hard',
         'The price of a ticket rises by 20% and then falls by 20%. Compared with the '
         'original price, the final price is', '4% lower.',
         ['1.20 × 0.80 = 0.96, so the final price is 96% of the original — **4% lower**.',
          'The two 20%s are taken from different bases, which is why they do not cancel.'],
         D.percent_bars(((100, 'original', S1), (120, 'after +20%', S2),
                         (96, 'then −20%', S3)),
                        note='the fall is 20% of 120, not of 100')),
        ('P9', 'Very hard',
         'A shop marks up the cost of an item by 40% to set its selling price. During a sale '
         'it then takes 25% off the selling price. What is the overall percentage change '
         'from the original cost?', '5% increase',
         ['1.40 × 0.75 = 1.05, so the final price is 105% of the cost — a **5% '
          'increase**.',
          'A common wrong answer adds 40 and −25, which treats both percentages as if they '
          'had the same base.'],
         D.percent_bars(((100, 'cost', S1), (140, 'marked up 40%', S2),
                         (105, '25% off the marked price', S3)),
                        note='1.40 × 0.75 = 1.05 — a 5% profit, not 15%')),
        ('P10', 'Very hard',
         'In a survey, 36 of the respondents chose option A, which was 15% of all '
         'respondents. How many people responded in total?', '240',
         ['If 36 is 15% of the total, then total = 36 ÷ 0.15 = **240 people**.'],
         D.reverse_chain(36, ((0.15, '15% chose option A'),))),
        ('P11', 'Very hard',
         "A laptop's price is reduced by 20%, and a customer with a membership card receives "
         'a further 10% off the reduced price. The customer pays $576. What was the original '
         'price, in dollars?', '$800.00',
         ['The two reductions multiply: 0.80 × 0.90 = 0.72 of the original.',
          '576 ÷ 0.72 = **$800**. A common wrong answer divides by 0.90 only; B treats the '
          'total discount as 20%.'],
         D.reverse_chain(576, ((0.8, '20% off'), (0.9, '10% off the reduced price')))),
        ('P12', 'Very hard',
         "A shop's revenue rose 25% in year 1 and fell 20% in year 2. A manager reports that "
         'revenue is now 5% above where it started. Is the manager right?',
         'No; revenue is back to exactly where it started.',
         ['1.25 × 0.80 = 1.00 exactly, so revenue is **unchanged**.',
          'Adding and subtracting the percentages (that answer) ignores that the 20% fall '
          'is taken from the larger, post-increase figure.'],
         D.percent_bars(((100, 'year 0', S1), (125, 'after +25%', S2),
                         (100, 'after −20%', S3)),
                        note='1.25 × 0.80 = 1.00 — back where it started, not up 5%')),
    ],
    'habit': 'Every percentage is a percentage **of something**, and the SAT’s whole game is '
             'changing which something. Profit is on the cost, percent change is on the old '
             'value, tax is on the discounted price. Before you divide, say out loud: *of '
             'what?*',
}
