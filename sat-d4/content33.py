# -*- coding: utf-8 -*-
"""SAT Math 3.3 — One-Variable Data: Centre & Spread."""
import algebra as A
import data as D


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


LESSON = {
    'code': '3.3',
    'title': 'One-Variable Data: Centre & Spread',
    'sections': [
        {
            'title': 'Mean, median and mode',
            'fact': 'mean = total ÷ how many  |  median = middle value once sorted  |  '
                    'mode = most frequent',
            'text': '**Sort the list before taking a median** — that single step is the '
                    'whole trick. With an even count the median is the average of the two '
                    'middle values. The mean uses every value, so it moves when any one of '
                    'them moves; the median usually does not.',
            'figs': [D.sorted_list((2, 4, 6, 9, 9), median_at=2,
                                   label='4, 9, 6, 2, 9 — sorted, then read the middle')],
            'caption': 'The median is a *position*, so the list has to be in order before '
                       'you look at the middle. Here 6 sits third of five.',
            'examples': [
                ex('Find the mean and the median of 4, 9, 6, 2, 9.',
                   ['Mean = 30 ÷ 5 = **6**.',
                    'Sorted: 2, 4, 6, 9, 9, so the median is **6**.'],
                   D.dotplot((4, 9, 6, 2, 9), mean=6, median=6,
                             label='here the two happen to coincide')),
                ex('Find the median of 3, 8, 5, 12.',
                   ['Sorted: 3, 5, 8, 12. Even count, so average the middle two.',
                    '(5 + 8)/2 = **6.5**.'],
                   D.sorted_list((3, 5, 8, 12), median_at=(1, 2),
                                 label='an even count has no single middle value')),
                ex('The mean of 5 numbers is 14. What is their total?',
                   ['Total = mean × how many = 14 × 5 = **70**.',
                    'Turning a mean back into a total is the move behind most of these '
                    'questions.'],
                   A.flow(('mean 14', '× 5 values', 'total 70'))),
            ],
        },
        {
            'title': 'Changing the data set',
            'fact': 'work with the total, not the mean — total = mean × count',
            'text': 'Whenever a value is added, removed or changed, **convert to the total '
                    'first**, adjust it, then divide by the **new** count. Trying to patch '
                    'the mean directly is where the errors come from.',
            'figs': [D.mean_total(6, 18, 'remove 23', 5, 85)],
            'caption': 'Four short steps, and the count changes in the middle of them. '
                       'Dividing by the old count is the slip this picture is here to stop.',
            'examples': [
                ex('The mean of 6 numbers is 18. The number 23 is removed. Find the new '
                   'mean.',
                   ['Total = 108; removing 23 leaves 85 over 5 numbers.',
                    '85 ÷ 5 = **17**.'],
                   D.mean_total(6, 18, 'remove 23', 5, 85)),
                ex('The mean of 8 numbers is 12. A ninth number is added and the mean becomes '
                   '13. Find the ninth.',
                   ['New total = 9 × 13 = 117; old total = 96.',
                    '117 − 96 = **21**.'],
                   A.flow(('new total 9 × 13 = 117', 'old total 8 × 12 = 96',
                           '117 − 96 = 21'),
                          note='the new value is the difference between the two totals')),
                ex('A value of 20 in a list of 10 numbers with mean 15 is changed to 40. Find '
                   'the new mean.',
                   ['Total 150 rises by 20 to 170, still over 10 numbers.',
                    '170 ÷ 10 = **17**.'],
                   D.mean_total(10, 15, 'swap 20 for 40', 10, 170)),
            ],
        },
        {
            'title': 'Weighted average',
            'fact': 'weighted mean = (sum of value × weight) ÷ (sum of weights)',
            'text': 'When groups are different sizes you **cannot average the averages**. '
                    'Multiply each group’s mean by its size, add those up, then divide by '
                    'the total number of items.',
            'figs': [D.freq_table((75, 85), (20, 30),
                                  label='two classes, two different sizes',
                                  head=('class mean', 'students', 'mean × students'))],
            'caption': 'The bigger class contributes more rows to the total, so the combined '
                       'mean of 81 sits nearer 85 than the halfway 80.',
            'examples': [
                ex('A class of 20 scores a mean of 75; another class of 30 scores a mean of '
                   '85. Find the mean of all 50.',
                   ['(20 × 75 + 30 × 85)/50 = (1,500 + 2,550)/50 = **81**.',
                    'Not 80 — the bigger class pulls the mean towards 85.'],
                   D.freq_table((75, 85), (20, 30),
                                label='the 30-student class carries more weight',
                                head=('class mean', 'students', 'mean × students'))),
                ex('A student scores 80 on a test worth 40% and 90 on one worth 60%. Find the '
                   'overall score.',
                   ['0.4(80) + 0.6(90) = 32 + 54 = **86**.'],
                   D.freq_table((80, 90), (0.4, 0.6),
                                label='the weights are the percentages, and they add to 1',
                                head=('score', 'weight', 'score × weight'))),
                ex('5 items cost $4 each and 3 cost $12 each. Find the mean cost.',
                   ['(5 × 4 + 3 × 12)/8 = (20 + 36)/8 = **$7**.'],
                   D.freq_table((4, 12), (5, 3), label='total cost over total count',
                                head=('price', 'how many', 'price × how many'))),
            ],
        },
        {
            'title': 'Spread: range and standard deviation',
            'fact': 'range = largest − smallest  |  standard deviation measures how far '
                    'values sit from the mean — compare it, never compute it',
            'text': 'The SAT **never** asks you to calculate a standard deviation. It asks '
                    'which of two data sets has the larger one, and the answer is whichever '
                    'is **more spread out from its mean**. Values bunched together give a '
                    'small standard deviation even if the mean is large.',
            'figs': [D.spread_pair()],
            'caption': 'Both sets centre on 10. Set A has no spread at all, so its standard '
                       'deviation is zero — any spread beats none.',
            'examples': [
                ex('Set A is 10, 10, 10, 10 and Set B is 6, 8, 12, 14. Both have mean 10. '
                   'Which has the greater standard deviation?',
                   ['Set A has every value **at** the mean, so its standard deviation '
                    'is 0.',
                    '**Set B** is greater — its values sit further from 10.'],
                   D.spread_pair()),
                ex('Find the range of 14, 9, 22, 9, 17.',
                   ['22 − 9 = **13**.'],
                   A.flow(('14, 9, 22, 9, 17', 'largest 22, smallest 9', '22 − 9 = 13'),
                          note='the range uses only the two extremes')),
                ex('Set P is 40, 41, 42, 43 and Set Q is 10, 40, 42, 74. Which has the '
                   'greater standard deviation, and do they have the same mean?',
                   ['Both have mean 41.5. **Set Q** has the greater standard deviation '
                    '— the same centre, far wider spread.'],
                   D.spread_pair((40, 41, 42, 43), (10, 40, 42, 74),
                                 ('Set P', 'Set Q'))),
            ],
        },
        {
            'title': 'Outliers: the mean moves, the median does not',
            'fact': 'an extreme value drags the mean towards it and leaves the median almost '
                    'alone',
            'text': 'The median only cares about **position**, so one wild value changes it '
                    'by at most one place. The mean adds every value into a total, so a '
                    'single outlier can shift it a long way. That is why the median is the '
                    'better summary of a skewed set.',
            'figs': [D.dotplot((3, 4, 5, 6, 7), mean=5, median=5,
                               label='before: 3, 4, 5, 6, 7 — mean and median both 5')],
            'caption': 'This is the set before the outlier arrives. Compare it with the '
                       'example below, where one value moves and only the mean follows.',
            'examples': [
                ex('For 3, 4, 5, 6, 7 the mean and median are both 5. The 7 is changed to 70. '
                   'What happens to each?',
                   ['New values 3, 4, 5, 6, 70: mean = 88/5 = **17.6**, median is still '
                    '**5**.',
                    'The mean moved by 12.6; the median did not move at all.'],
                   D.dotplot((3, 4, 5, 6, 70), mean=17.6, median=5,
                             label='after: the 7 becomes 70')),
                ex('A data set has an outlier far above the rest. Which is larger, the mean '
                   'or the median?',
                   ['**The mean** — it is pulled up towards the outlier.'],
                   D.dotplot((2, 3, 3, 4, 4, 5, 30), mean=7.29, median=4,
                             label='one value far above the rest')),
                ex('Which measure of centre should you report for house prices in a town with '
                   'a few mansions?',
                   ['**The median.** A handful of very expensive houses would inflate the '
                    'mean and misrepresent a typical house.'],
                   D.dotplot((180, 190, 200, 210, 220, 900), mean=316.7, median=205,
                             label='house prices, in thousands of dollars')),
            ],
        },
        {
            'title': 'Shape: symmetric and skewed',
            'fact': 'symmetric → mean = median  |  skewed right → mean > median  |  '
                    'skewed left → mean < median',
            'text': 'The skew is named after **the tail**, not the bulk of the data. A long '
                    'tail to the right drags the mean to the right of the median. Reading '
                    'this off a histogram is a standard SAT question.',
            'figs': [D.hist_shapes()],
            'caption': 'Three shapes, three verdicts. Find the tail first, then say which '
                       'way the mean has been pulled.',
            'examples': [
                ex('A histogram has most of its bars on the left and a long tail stretching '
                   'right. Compare the mean and the median.',
                   ['Skewed right, so the tail pulls the mean up: **mean > median**.'],
                   D.histogram(('0–4', '5–9', '10–14', '15–19', '20–24', '25–29'),
                               (9, 7, 4, 2, 1, 1), ylabel='number of households',
                               xlabel='income, in thousands', highlight=(4, 5))),
                ex('For the data 1, 2, 2, 3, 3, 3, 4, 4, 20, which is larger, the mean or the '
                   'median?',
                   ['Median is the 5th of 9 values = **3**. Mean = 42/9 ≈ **4.67**.',
                    'The 20 is a right tail, so mean > median. ✓'],
                   D.dotplot((1, 2, 2, 3, 3, 3, 4, 4, 20), mean=4.67, median=3,
                             label='1, 2, 2, 3, 3, 3, 4, 4, 20')),
                ex('A distribution is roughly symmetric with mean 50. What is the approximate '
                   'median?',
                   ['**About 50.** In a symmetric distribution the two coincide.'],
                   D.histogram(('30–39', '40–44', '45–49', '50–54', '55–59', '60–69'),
                               (2, 5, 8, 8, 5, 2), ylabel='frequency',
                               xlabel='value')),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. Here it is **a '
                    'calculator for totals**. The move that matters is turning a mean back '
                    'into a total — total = mean × count — and you can build that '
                    'straight into the line.',
    'desmos': [
        ('A basketball player scored 12, 15, 19, 22 and 27 points in five games. What is the '
         'mean number of points per game?', '(12+15+19+22+27)/5',
         'Type the whole sum on one line.', '19'),
        ('The mean mass of 6 parcels is 18 kilograms. One parcel with a mass of 23 kilograms '
         'is removed. What is the mean mass, in kilograms, of the remaining parcels?',
         '(6*18-23)/5', 'Turn the mean into a total inside the same line.', '17'),
        ('Eight students have a mean test score of 12. A ninth student joins and the mean '
         'becomes 13. What is the ninth student’s score?', '9*13-8*12',
         'New total minus old total.', '21'),
        ('A class of 20 students averaged 75 on a test and a class of 30 students averaged '
         '85. What is the mean score of all 50 students?', '(20*75+30*85)/50',
         'Weighted — not the average of the averages.', '81'),
        ('The daily high temperatures, in degrees Celsius, for five days were 14, 9, 22, 9 '
         'and 17. What is the range of these temperatures?', '22-9',
         'Largest minus smallest.', '13'),
        ('Four runners finished a race in 3, 8, 5 and 12 minutes. What is the median '
         'finishing time, in minutes?', '(5+8)/2',
         'Sort first, then average the middle pair.', '6.5'),
        ('A course grade is 40% midterm and 60% final. A student scored 80 on the midterm and '
         '90 on the final. What is the student’s course grade?', '0.4*80+0.6*90',
         'Weights as decimals on one line.', '86'),
        ('The ages, in years, of five club members are 3, 4, 5, 6 and 70. What is the mean '
         'age, in years, of the members?', '(3+4+5+6+70)/5',
         'Compare with the median of 5 — the outlier moves only the mean.', '17.6'),
        ('A librarian recorded the number of books read last month by nine students: 1, 2, 2, '
         '3, 3, 3, 4, 4 and 20. What is the mean number of books read?',
         '(1+2+2+3+3+3+4+4+20)/9',
         'Desmos keeps the exact fraction 14/3 if you want it.', '4.67 (42/9)'),
        ('A shop sold 5 notebooks at $4 each and 3 notebooks at $12 each. What is the mean '
         'price, in dollars, per notebook sold?', '(5*4+3*12)/8',
         'Total cost over total count.', '7'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'Almost every one is solved by converting to a **total** first, adjusting '
                   'it, then dividing by the **new** count — decide what the count is '
                   'before you divide.',
    'part2': [
        ('P1', 'Hard',
         'A list of 5 numbers has a mean of 14. A sixth number, 26, is added to the list. '
         'What is the mean of the 6 numbers?', '16',
         ['Total of the five is 5 × 14 = 70. New total 70 + 26 = 96 over 6 numbers.',
          '96 ÷ 6 = **16**. The trap for forgetting the sixth value.'],
         D.mean_total(5, 14, 'add 26', 6, 96)),
        ('P2', 'Hard',
         'The number of hours worked last week by each of 6 employees was 11, 4, 9, 4, 15 and '
         '20. What is the median number of hours worked?', '10',
         ['Sorted: 4, 4, 9, 11, 15, 20. Even count, so average the middle pair.',
          '(9 + 11)/2 = **10**. A and D are the two middle values taken alone.'],
         D.sorted_list((4, 4, 9, 11, 15, 20), median_at=(2, 3),
                       label='sorted first — the median is their average, 10')),
        ('P3', 'Hard',
         'In an experiment, 12 plants had a mean height of 150 centimetres and 8 plants had a '
         'mean height of 160 centimetres. What is the mean height, in centimetres, of all 20 '
         'plants?', '154',
         ['(12 × 150 + 8 × 160)/20 = 3,080/20 = **154**.',
          'The trap: averaging 150 and 160 ignores the unequal group sizes.'],
         D.freq_table((150, 160), (12, 8), label='unequal groups, so weight each mean',
                      head=('group mean', 'plants', 'mean × plants'))),
        ('P4', 'Hard',
         'A list of 10 numbers has a mean of 15. One of the numbers, 20, is replaced by 40 '
         'and no other number is changed. What is the mean of the new list?', '17',
         ['The total rises by 40 − 20 = 20, from 150 to 170.', '170 ÷ 10 = **17**.'],
         D.mean_total(10, 15, 'swap 20 for 40', 10, 170)),
        ('P5', 'Hard',
         'Data set A consists of the values 10, 10, 10 and 10. Data set B consists of the '
         'values 6, 8, 12 and 14. State what is true here.',
         'Data set B has the greater standard deviation.',
         ['Both sets have a mean of 10, but every value of A **is** the mean, so A has no '
          'spread at all and its standard deviation is 0.',
          'Any spread beats none.'],
         D.spread_pair()),
        ('P6', 'Hard',
         'The masses, in kilograms, of 5 packages are 3, 4, 5, 6 and 70. Which correctly '
         'compares the mean and the median of these masses?',
         'The mean is greater than the median.',
         ['Mean = 88/5 = **17.6**; median = **5**.',
          'The single large value pulls the mean up but leaves the middle value where it '
          'was.'],
         D.dotplot((3, 4, 5, 6, 70), mean=17.6, median=5,
                   label='masses, in kilograms')),
        ('P7', 'Very hard',
         'The mean of a list of 9 numbers is 30. When one number is removed from the list, '
         'the mean of the remaining 8 numbers is 32. What is the value of the number that was '
         'removed?', '14',
         ['Old total 9(30) = 270; the remaining 8 total 8(32) = 256.',
          '270 − 256 = **14**. Removing a below-average value raises the mean.'],
         A.flow(('old total 9 × 30 = 270', 'new total 8 × 32 = 256', '270 − 256 = 14'),
                note='the value removed is the gap between the two totals')),
        ('P8', 'Very hard',
         'A list of 5 numbers has a mean of 8 and a median of 7. The largest number in the '
         'list is increased by 10, and no other number is changed. What are the mean and the '
         'median of the new list?', 'mean 10, median 7',
         ['Total 5(8) = 40 → 50, so the mean becomes 50/5 = **10**.',
          'The largest value is still the largest, so the sorted order is unchanged and '
          'the middle value — the median — stays **7**.'],
         A.flow(('total 5 × 8 = 40', '+10 → 50', 'mean 50 ÷ 5 = 10',
                 'median still 7'),
                note='the biggest value is still biggest, so no one changes places')),
        ('P9', 'Very hard',
         'Six students in a class had a mean test score of 72. Two more students, with scores '
         'of 90 and 84, join the class. What is the mean score of all 8 students?', '75.75',
         ['Old total 6(72) = 432; new total 432 + 90 + 84 = 606 over 8 students.',
          '606 ÷ 8 = **75.75**.'],
         D.mean_total(6, 72, 'add 90 and 84', 8, 606)),
        ('P10', 'Very hard',
         'A histogram showing the distribution of household incomes in a city is skewed to '
         'the right. Which statements about the mean and the median income is true?',
         'The mean is greater than the median.',
         ['The long right tail contains a few very large incomes.',
          'They enter the mean at full weight but shift the middle value hardly at all, so '
          'the mean is dragged **above** the median.'],
         D.hist_shapes()),
        ('P11', 'Very hard',
         'The mean of 4 numbers is 25. Three of the numbers are 18, 22 and 31. What is the '
         'value of the fourth number?', '29',
         ['Total = 4 × 25 = 100. Known three sum to 71.',
          '100 − 71 = **29**. The trap for stopping at the sum of the three.'],
         A.flow(('total 4 × 25 = 100', '18 + 22 + 31 = 71', '100 − 71 = 29'))),
        ('P12', 'Very hard',
         'Data set P consists of 40, 41, 42 and 43. Data set Q consists of 10, 40, 42 and 74. '
         'The two data sets have the same mean. State what is true here.',
         'Data set Q has the greater standard deviation.',
         ['Both have mean 166/4 = 41.5. P’s values all sit within 1.5 of the centre; Q’s '
          'reach 31.5 away.',
          'Standard deviation measures typical distance from the mean, so **Q’s is far '
          'larger**.'],
         D.spread_pair((40, 41, 42, 43), (10, 40, 42, 74), ('Set P', 'Set Q'))),
    ],
    'habit': 'Never patch a mean directly. Turn it into a **total**, change the total, then '
             'divide by the **new** number of values. Half of these twelve change the count '
             'as well as the total, and that is where the marks go.',
}
