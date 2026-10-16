# -*- coding: utf-8 -*-
"""SAT Math 3.6 — Probability."""
import algebra as A
import data as D

BAG = ((5, 'red', D.S3), (4, 'blue', D.S1), (3, 'green', D.S2))


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


LESSON = {
    'code': '3.6',
    'title': 'Probability',
    'sections': [
        {
            'title': 'Basic probability',
            'fact': 'P(event) = favourable ÷ total  |  every probability lies between 0 '
                    'and 1',
            'text': 'Count what you want, count everything, divide. The commonest error is '
                    '**counting the total wrong** — add all the categories, including the '
                    'one you are not choosing. A probability above 1 always means the '
                    'denominator is wrong.',
            'figs': [D.counters(BAG, favourable=1)],
            'caption': 'Twelve counters drawn out, so the denominator is counted rather '
                       'than guessed. Four of them are blue.',
            'examples': [
                ex('A bag holds 5 red, 4 blue and 3 green counters. What is P(blue)?',
                   ['Total = 5 + 4 + 3 = 12.', 'P(blue) = 4/12 = **1/3**.'],
                   D.counters(BAG, favourable=1)),
                ex('For the same bag, what is P(not green)?',
                   ['Not green means red or blue: 5 + 4 = 9 of 12.',
                    '9/12 = **3/4**. Equivalently 1 − 3/12.'],
                   D.counters(BAG, favourable=(0, 1), event='not green')),
                ex('A spinner has 8 equal sectors numbered 1 to 8. What is P(a number '
                   'greater than 5)?',
                   ['The values 6, 7, 8 qualify — three of them.',
                    'P = **3/8**. ‘Greater than 5’ excludes 5 itself.'],
                   D.spinner(8, (6, 7, 8))),
            ],
        },
        {
            'title': 'Probability from a two-way table',
            'fact': 'decide the whole first: grand total, one row, or one column',
            'text': 'Almost every two-way-table question is easy arithmetic and **one hard '
                    'decision** — which total goes underneath. Read the sentence for the '
                    'group being described; that group is the denominator.',
            'figs': [D.twoway()],
            'caption': 'Everything you need is in the margins. The only question left is '
                       'which of those margin numbers is the whole.',
            'examples': [
                ex('From the table above, what is the probability that a randomly chosen '
                   'customer bought cheese?',
                   ['The Cheese column totals 60 + 20 = 80, out of 180.',
                    'P = 80/180 = **4/9**.'],
                   D.twoway(highlight='col0')),
                ex('What is the probability that a customer bought both fruit and cheese?',
                   ['One cell, 60, out of the grand total 180.',
                    'P = 60/180 = **1/3**.'],
                   D.twoway(highlight='cell00')),
                ex('What is the probability that a customer bought fruit but not cheese?',
                   ['That cell holds 40, out of 180.', 'P = 40/180 = **2/9**.'],
                   D.twoway(highlight='cell01')),
            ],
        },
        {
            'title': 'Conditional probability',
            'fact': '‘given that’ or ‘of those who’ → the named group becomes the whole',
            'text': 'This is the **highest-value idea in the topic** and the one your class '
                    'loses marks on. The phrase ‘of the customers who bought fruit’ replaces '
                    'the grand total with the fruit row. Nothing else changes — the '
                    'numerator is still the overlap.',
            'figs': [D.venn(40, 60, 20, ('fruit', 'cheese'), whole='a')],
            'caption': 'P(cheese | fruit) uses only the shaded left circle as the whole: '
                       '60 out of 100, not 60 out of 180.',
            'examples': [
                ex('Of the customers who bought fruit, what is the probability one also '
                   'bought cheese?',
                   ['The whole is now the Fruit row, 100.',
                    'P = 60/100 = **3/5**, not 60/180.'],
                   D.venn(40, 60, 20, ('fruit', 'cheese'), whole='a')),
                ex('Given that a customer bought cheese, what is the probability they bought '
                   'fruit?',
                   ['Now the whole is the Cheese column, 80.',
                    'P = 60/80 = **3/4**. Notice this differs from the previous answer — '
                    'order matters.'],
                   D.venn(40, 60, 20, ('fruit', 'cheese'), whole='b')),
                ex('Of the customers who did not buy fruit, what fraction bought cheese?',
                   ['The No-fruit row totals 20 + 60 = 80.', 'P = 20/80 = **1/4**.'],
                   D.twoway(highlight='row1')),
            ],
        },
        {
            'title': 'Independent events and ‘and’',
            'fact': 'independent events: P(A and B) = P(A) × P(B)  |  without replacement '
                    'the second probability changes',
            'text': '**Multiply** along a sequence of events. The question to ask is whether '
                    'the first event changes the second: drawing **with** replacement leaves '
                    'the bag unchanged, drawing **without** replacement removes one item '
                    'from both the numerator and the total.',
            'figs': [D.tree()],
            'caption': 'Follow one branch and multiply along it. The second fraction is 4/7, '
                       'not 5/8, because a red counter has already gone.',
            'examples': [
                ex('A fair coin is tossed twice. What is P(two heads)?',
                   ['The tosses are independent.', 'P = ½ × ½ = **1/4**.'],
                   D.tree(('heads', '1/2'), ('heads', '1/2'), '1/2 × 1/2 = 1/4',
                          note='a coin has no memory, so the two halves are the same')),
                ex('A bag has 5 red and 3 blue. Two are drawn with replacement. What is '
                   'P(both red)?',
                   ['The bag is unchanged between draws.', 'P = (5/8)(5/8) = **25/64**.'],
                   D.tree(('red', '5/8'), ('red', '5/8'), '5/8 × 5/8 = 25/64',
                          note='with replacement: the second fraction is the same')),
                ex('The same bag, but drawn without replacement. What is P(both red)?',
                   ['After one red is taken, 4 reds remain out of 7.',
                    'P = (5/8)(4/7) = 20/56 = **5/14**.'],
                   D.tree()),
            ],
        },
        {
            'title': '‘Or’ and the overlap',
            'fact': 'P(A or B) = P(A) + P(B) − P(A and B)',
            'text': 'Adding two probabilities **double-counts** anything in both, so '
                    'subtract the overlap once. If the events cannot happen together, the '
                    'overlap is zero and the formula collapses to simple addition.',
            'figs': [D.venn(40, 60, 20, ('fruit', 'cheese'), whole='all')],
            'caption': 'Shading both circles covers 40 + 60 + 20 = 120 people. Adding 100 '
                       'and 80 would count the middle 60 twice.',
            'examples': [
                ex('From the table, what is P(bought fruit or bought cheese)?',
                   ['100/180 + 80/180 − 60/180 = 120/180 = **2/3**. Without subtracting '
                    'the 60, you would wrongly get 1.'],
                   D.venn(40, 60, 20, ('fruit', 'cheese'), whole='all')),
                ex('A card is drawn from 52. What is P(a heart or a king)?',
                   ['13/52 + 4/52 − 1/52 (the king of hearts) = 16/52 = **4/13**.'],
                   D.venn(12, 1, 3, ('hearts', 'kings'), whole='all')),
                ex('A die is rolled. What is P(an even number or a 5)?',
                   ['Even gives 3 outcomes, 5 gives 1, and they cannot both happen.',
                    'P = 3/6 + 1/6 = 4/6 = **2/3**.'],
                   D.venn(3, 0, 1, ('even', 'a 5'), whole='all')),
            ],
        },
        {
            'title': 'Expected counts',
            'fact': 'expected number = probability × group size',
            'text': 'When a question scales a proportion up to a larger population, '
                    '**multiply**. This is the same arithmetic as a percentage of a total, '
                    'and the answer should be rounded to a whole number of people or items '
                    'when that is what is being counted.',
            'figs': [A.flow(('P(cheese) = 4/9', '× 450 customers', '200 expected'),
                            note='a probability becomes a count the moment you multiply')],
            'caption': 'The fraction is a rate; the group size turns it into people. Nothing '
                       'more complicated than that.',
            'examples': [
                ex('The probability a customer buys cheese is 4/9. In a day with 450 '
                   'customers, how many are expected to buy cheese?',
                   ['(4/9)(450) = **200 customers**.'],
                   A.flow(('4/9', '× 450', '200 customers'))),
                ex('A machine produces faulty parts 3% of the time. How many faults are '
                   'expected in 1,200 parts?',
                   ['0.03 × 1200 = **36 parts**.'],
                   A.flow(('3% faulty', '0.03 × 1 200', '36 parts'))),
                ex('In a survey, 60 of 100 fruit buyers also bought cheese. In a town with '
                   '2,500 fruit buyers, how many are expected to buy cheese?',
                   ['The rate is 60/100 = 0.6.', '0.6 × 2500 = **1,500 people**.'],
                   A.flow(('60 of 100 = 0.6', '× 2 500', '1 500 people'))),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. Here it is **a '
                    'fraction calculator**. Type the numerator and denominator you have '
                    'chosen — the whole difficulty of this topic is choosing the '
                    'denominator, and Desmos cannot do that.',
    'desmos': [
        ('A bag holds 5 red, 4 blue and 3 green counters. What is the probability of drawing '
         'a blue counter, as a decimal to three places?', '4/12',
         'Desmos keeps the exact fraction 1/3.', '0.333'),
        ('In a survey of 180 customers, 80 bought cheese. What is the probability a randomly '
         'chosen customer bought cheese?', '80/180',
         'Desmos simplifies the fraction for you.', '4/9'),
        ('Of 100 fruit buyers, 60 also bought cheese. What is this conditional probability?',
         '60/100', 'The named group, 100, is the denominator.', '0.6'),
        ('A fair coin is tossed twice. What is the probability of two heads?', '(1/2)*(1/2)',
         'Independent events multiply.', '0.25'),
        ('A bag has 5 red and 3 blue. Two are drawn without replacement. What is P(both '
         'red)?', '(5/8)*(4/7)',
         'The second fraction changes because one red has gone.', '5/14'),
        ('What is the probability that a card drawn from 52 is a heart or a king?',
         '13/52+4/52-1/52', 'Subtract the king of hearts once.', '4/13'),
        ('The probability a customer buys cheese is 4/9. How many of 450 customers are '
         'expected to?', '(4/9)*450', 'Probability times group size.', '200'),
        ('A machine is faulty 3% of the time. How many faults are expected in 1,200 parts?',
         '0.03*1200', 'Write the percentage as a decimal.', '36'),
        ('From a two-way table, 120 of 180 customers bought fruit or cheese. What is that '
         'probability?', '120/180', 'Desmos reduces it.', '2/3'),
        ('A spinner has 8 equal sectors numbered 1 to 8. What is P(greater than 5)?', '3/8',
         'Count 6, 7, 8 — not 5 itself.', '0.375'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'One question decides almost all of these: **has the group been '
                   'narrowed?** If the wording says ‘given that’, ‘of the’ or ‘among’, the '
                   'denominator is a row or a column, not the whole table.',
    'part2': [
        ('P1', 'Hard',
         'The table shows the results of a survey of 180 market customers. If one customer is '
         'selected at random, what is the probability that the customer bought cheese?',
         '4/9',
         ['The Cheese column totals 60 + 20 = 80, out of the grand total 180.',
          '80/180 = **4/9**. A common wrong answer is the single overlap cell 60/180.'],
         D.twoway(highlight='col0')),
        ('P2', 'Hard',
         'Using the same table: of the customers who bought fruit, what is the probability '
         'that the customer also bought cheese?', '3/5',
         ['‘Of the customers who bought fruit’ makes the Fruit row, 100, the whole.',
          '60/100 = **3/5**. A common wrong answer divides by 180 instead — the single '
          'most common error on this topic.'],
         D.twoway(highlight='row0')),
        ('P3', 'Hard',
         'A bag contains 5 red, 4 blue and 3 green counters. One counter is drawn at random. '
         'What is the probability that it is not green?', '3/4',
         ['Not green means 5 + 4 = 9 of the 12 counters.',
          '9/12 = **3/4**. A common wrong answer is P(green) itself.'],
         D.counters(BAG, favourable=(0, 1), event='not green')),
        ('P4', 'Hard',
         'A bag contains 5 red and 3 blue counters. Two counters are drawn at random without '
         'replacement. What is the probability that both are red?', '5/14',
         ['First draw 5/8; after one red is removed, 4 reds remain of 7.',
          '(5/8)(4/7) = 20/56 = **5/14**. A common wrong answer is the answer if the '
          'counter is replaced.'],
         D.tree()),
        ('P5', 'Hard',
         'A card is drawn at random from a standard deck of 52. What is the probability that '
         'it is a heart or a king?', '4/13',
         ['13 hearts + 4 kings, minus the king of hearts counted twice.',
          '(13 + 4 − 1)/52 = 16/52 = **4/13**. Forgetting to subtract gives 17/52.'],
         D.venn(12, 1, 3, ('hearts', 'kings'), whole='all')),
        ('P6', 'Hard',
         'The probability that a customer at a market buys cheese is 4/9. On a day when 450 '
         'customers visit, how many would be expected to buy cheese?', '200',
         ['Expected count = probability × group size.',
          '(4/9)(450) = **200 customers**.'],
         A.flow(('4/9', '× 450 customers', '200 expected'))),
        ('P7', 'Very hard',
         'Using the survey table, what is the probability that a randomly chosen customer '
         'bought fruit or cheese?', '2/3',
         ['100/180 + 80/180 would double-count the 60 who did both.',
          '(100 + 80 − 60)/180 = 120/180 = **2/3**. A common wrong answer is what you get '
          'by adding 100 and 80 and not subtracting the overlap.'],
         D.venn(40, 60, 20, ('fruit', 'cheese'), whole='all')),
        ('P8', 'Very hard',
         'In the same survey, let A be ‘bought cheese given bought fruit’ and B be ‘bought '
         'fruit given bought cheese’. State what is true here.',
         'A < B, because 100 is larger than 80.',
         ['A = 60/100 = 0.6 and B = 60/80 = 0.75, so **A < B**.',
          'The numerator is the same 60 both times; only the denominator changes, and the '
          'larger denominator gives the smaller probability. A common wrong answer is the '
          'classic error of treating conditional probability as symmetric.'],
         A.rules_panel((('A = P(cheese | fruit)', '60 ÷ 100 = 0.6'),
                        ('B = P(fruit | cheese)', '60 ÷ 80 = 0.75')),
                       title='same numerator, different whole — so A ≠ B', w=340)),
        ('P9', 'Very hard',
         'A quality check finds that 3% of parts are faulty. In a batch of 1,200 parts, two '
         'are drawn at random with replacement. What is the probability that both are '
         'faulty?', '0.0009',
         ['With replacement the draws are independent.',
          '(0.03)(0.03) = **0.0009**. A common wrong answer adds the two probabilities '
          'instead of multiplying; the batch size of 1,200 is not needed at all.'],
         D.tree(('faulty', '0.03'), ('faulty', '0.03'), '0.03 × 0.03 = 0.0009',
                note='with replacement, so the second draw matches the first')),
        ('P10', 'Very hard',
         'A spinner has 8 equal sectors numbered 1 to 8. It is spun twice. What is the '
         'probability that both spins give a number greater than 5?', '9/64',
         ['Each spin: 6, 7, 8 qualify, so 3/8. The spins are independent.',
          '(3/8)(3/8) = **9/64**. A common wrong answer is one spin only.'],
         D.tree(('above 5', '3/8'), ('above 5', '3/8'), '3/8 × 3/8 = 9/64',
                note='a spinner has no memory, so both fractions are 3/8')),
        ('P11', 'Very hard',
         'In a survey of 180 customers, 100 bought fruit and 60 of those also bought cheese; '
         '20 of the remaining 80 bought cheese. A manager claims that buying fruit and '
         'buying cheese are independent. Which calculation best tests the claim?',
         'Compare 60/100 with 80/180.',
         ['Independence means P(cheese | fruit) equals P(cheese).',
          'P(cheese | fruit) = 60/100 = 0.6 and P(cheese) = 80/180 ≈ 0.44. They differ, so '
          'the events are **not independent** and the claim fails. A common wrong answer '
          'compares the two conditional probabilities, which tests something else.'],
         A.rules_panel((('P(cheese | fruit)', '60 ÷ 100 = 0.6'),
                        ('P(cheese) overall', '80 ÷ 180 ≈ 0.44'),
                        ('verdict', 'different, so not independent')),
                       title='independence is a comparison, not a formula', w=340)),
        ('P12', 'Very hard',
         'Of 100 fruit buyers surveyed, 60 also bought cheese. A town has 2,500 fruit buyers. '
         'Assuming the same rate, how many are expected to buy cheese?', '1500',
         ['The rate is 60/100 = 0.6.', '0.6 × 2500 = **1,500 people**.'],
         A.flow(('60 of 100 = 0.6', '× 2 500 fruit buyers', '1 500 people'))),
    ],
    'habit': 'Your class scored 20% on conditional probability, and the cause is always the '
             'same: **the right numerator over the wrong denominator.** Before dividing, say '
             'which group you are now inside.',
}
