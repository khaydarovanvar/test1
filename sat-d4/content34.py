# -*- coding: utf-8 -*-
"""SAT Math 3.4 — Data Displays."""
import algebra as A
import data as D

BOOKS = (2, 3, 3, 4, 4, 4, 4, 5, 5, 6, 6, 7, 9)
WAITS = ('0–4', '5–9', '10–14', '15–19', '20–24', '25–29')
BARS = (3, 7, 9, 6, 4, 2)


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


LESSON = {
    'code': '3.4',
    'title': 'Data Displays',
    'sections': [
        {
            'title': 'Reading a bar chart or histogram',
            'fact': 'a bar chart compares separate categories  |  a histogram shows how one '
                    'number is distributed across intervals',
            'text': '**Read the scale before the bars.** A bar chart has gaps between the '
                    'bars because the categories are separate things; a histogram has none, '
                    'because the intervals run into each other. The height is a **count**, '
                    'so the total sample size is the sum of all the heights — not the '
                    'number of bars.',
            'figs': [D.histogram(WAITS, BARS, ylabel='number of customers',
                                 xlabel='minutes waited')],
            'caption': 'Six touching intervals. The sample size is 3 + 7 + 9 + 6 + 4 + 2 '
                       '= 31 customers, and six is only the number of bars.',
            'examples': [
                ex('Using the histogram above, how many customers waited fewer than 10 '
                   'minutes?',
                   ['The first two intervals are 0–4 and 5–9, with heights 3 and 7.',
                    '3 + 7 = **10 customers**.'],
                   D.histogram(WAITS, BARS, ylabel='number of customers',
                               xlabel='minutes waited', highlight=(0, 1))),
                ex('How many customers are in the sample altogether?',
                   ['Add every bar: 3 + 7 + 9 + 6 + 4 + 2 = **31**. A common slip is to '
                    'answer 6, the number of bars.'],
                   D.histogram(WAITS, BARS, ylabel='number of customers',
                               xlabel='minutes waited', highlight=(0, 1, 2, 3, 4, 5))),
                ex('Which interval contains the median wait?',
                   ['With 31 values the median is the 16th. Running totals: 3, 10, 19 — '
                    'the 16th falls in the third interval, **10–14 minutes**.'],
                   D.running_total(WAITS, BARS)),
            ],
        },
        {
            'title': 'Frequency tables and the mean',
            'fact': 'mean from a table = ∑(value × frequency) ÷ ∑frequency — divide by the '
                    'total count, never by the number of rows',
            'text': 'This is the **single most common error** on data-display questions. A '
                    'table with five rows does not mean you divide by five. Multiply each '
                    'value by how many times it occurred, add those products, then divide by '
                    'the **total frequency**.',
            'figs': [D.freq_table((1, 2, 3), (4, 6, 10),
                                  label='three rows, but twenty values')],
            'caption': 'The right-hand column is what you add; the middle column is what '
                       'you divide by. The number of rows plays no part at all.',
            'examples': [
                ex('Values 1, 2, 3 occur 4, 6 and 10 times. What is the mean?',
                   ['∑(value × freq) = 1(4) + 2(6) + 3(10) = 4 + 12 + 30 = 46.',
                    'Total frequency = 20, so the mean is 46/20 = **2.3**.'],
                   D.freq_table((1, 2, 3), (4, 6, 10),
                                label='46 over 20, not 46 over 3')),
                ex('A quiz is marked out of 4. Scores 2, 3 and 4 were earned by 5, 8 and 7 '
                   'students. Find the mean.',
                   ['2(5) + 3(8) + 4(7) = 10 + 24 + 28 = 62 over 20 students.',
                    '62/20 = **3.1**.'],
                   D.freq_table((2, 3, 4), (5, 8, 7), label='a quiz marked out of 4',
                                head=('score', 'students', 'score × students'))),
                ex('Why is dividing by 3 wrong in the question above?',
                   ['Three is the number of **distinct scores**, not the number of '
                    'students.',
                    '62/3 ≈ 20.7, which is not even a possible score out of 4 — a quick '
                    'sanity check that catches the error.'],
                   A.flow(('62 ÷ 20 = 3.1', '62 ÷ 3 ≈ 20.7'),
                          colours=('#1e7a4d', '#c0392b'),
                          note='a score of 20.7 out of 4 is impossible — check the '
                               'divisor')),
            ],
        },
        {
            'title': 'Bar charts: comparing categories',
            'fact': 'read the axis scale first  |  ‘how many more’ means subtract, ‘how many '
                    'times’ means divide',
            'text': 'Most bar-chart questions are one of three things: **read one bar, '
                    'compare two bars, or combine several.** The wording tells you which '
                    'operation. Watch for an axis that does not start at zero — it makes '
                    'differences look bigger than they are.',
            'figs': [D.barchart(note='separate days, so the bars stand apart')],
            'caption': 'Five separate days. Nothing here is an interval, so nothing touches '
                       '— that gap is what tells you it is a bar chart.',
            'examples': [
                ex('From the chart above, how many more loaves were sold on Wednesday than '
                   'on Monday?',
                   ['Wednesday 31, Monday 18.', '31 − 18 = **13 loaves**.'],
                   D.barchart(highlight=(0, 2), note='‘how many more’ — subtract the two')),
                ex('What was the total number of loaves sold over the five days?',
                   ['18 + 24 + 31 + 27 + 20 = **120 loaves**.'],
                   D.barchart(highlight=(0, 1, 2, 3, 4),
                              note='every bar counts towards the week’s total of 120')),
                ex("What percentage of the week's sales happened on Wednesday?",
                   ['31 out of 120.', '31/120 = 0.2583… ≈ **25.8%**.'],
                   D.barchart(highlight=(2,),
                              note='one bar over the total of all five: 31 ÷ 120')),
            ],
        },
        {
            'title': 'Two-way tables',
            'fact': 'each cell is a count  |  the row and column totals must add to the '
                    'grand total',
            'text': 'Fill in any missing totals **before** you answer anything. Then the only '
                    'question that matters is **which number is the whole**: the grand '
                    'total, one row total, or one column total. The wording picks it for '
                    'you.',
            'figs': [D.twoway()],
            'caption': 'Three possible denominators sit in this one table: 180, a row total '
                       'of 100 or 80, or a column total of 80 or 100.',
            'examples': [
                ex('From the table above, how many customers bought cheese?',
                   ['The Cheese column totals 60 + 20 = **80 customers**.'],
                   D.twoway(highlight='col0')),
                ex('What fraction of all customers bought fruit but not cheese?',
                   ['That cell holds 40, and the grand total is 180.',
                    '40/180 = **2/9 ≈ 0.222**.'],
                   D.twoway(highlight='grand')),
                ex('Of the customers who bought cheese, what fraction also bought fruit?',
                   ['Now the whole is the Cheese column, **80** — not 180.',
                    '60/80 = **3/4**. Changing which total you divide by is the whole '
                    'skill here.'],
                   D.twoway(highlight='col0')),
            ],
        },
        {
            'title': 'Dot plots and the shape of data',
            'fact': 'every dot is one value  |  count dots for the sample size, not columns',
            'text': 'A dot plot shows the **whole data set**, so you can read the mode '
                    'straight off (the tallest stack), count to the median, and see the '
                    'shape. Repeated values matter: three dots above 4 means the value 4 '
                    'appears three times in the list.',
            'figs': [D.dotplot(BOOKS,
                               label='number of books read last month (13 students)')],
            'caption': 'Thirteen dots, eight columns. The sample size is the number of '
                       'dots, and the tallest stack is the mode.',
            'examples': [
                ex('Using the dot plot above, how many students read exactly 4 books?',
                   ['There are four dots above 4, so **4 students**.'],
                   D.dotplot(BOOKS, label='four dots sit above the value 4')),
                ex('What is the median number of books read?',
                   ['13 values, so the median is the 7th. Counting up: 2 (1), 3 (3), '
                    '4 (7) — the 7th dot sits above **4 books**.'],
                   D.dotplot(BOOKS, median=4,
                             label='count the dots from the left to the 7th')),
                ex('What is the range?',
                   ['Largest 9, smallest 2.', '9 − 2 = **7 books**.'],
                   A.flow(('largest 9', 'smallest 2', '9 − 2 = 7'),
                          note='the range uses only the two ends of the plot')),
            ],
        },
        {
            'title': 'Line graphs and rates of change',
            'fact': 'steeper = faster  |  flat = no change  |  downward = decreasing',
            'text': 'On a line graph the question is almost always about the **slope** '
                    'between two points, not the heights themselves. ‘Greatest increase’ '
                    'means the **steepest** upward segment, which is not necessarily the '
                    'segment ending highest.',
            'figs': [D.linegraph(((1, 20), (2, 24), (3, 28), (4, 32)), xlabel='week',
                                 ylabel='value')],
            'caption': 'Equal steps of 4 a week give a constant slope. The rate of change is '
                       '(32 − 20) ÷ (4 − 1) = 4 per week.',
            'examples': [
                ex('A graph shows 20 at week 1 and 32 at week 4. What is the average rate of '
                   'change per week?',
                   ['(32 − 20)/(4 − 1) = 12/3 = **4 per week**.'],
                   D.linegraph(((1, 20), (2, 24), (3, 28), (4, 32)), xlabel='week',
                               ylabel='value')),
                ex('Between which pair of days did sales rise fastest: Mon→Tue (18 to 24) or '
                   'Tue→Wed (24 to 31)?',
                   ['Mon→Tue rises 6; Tue→Wed rises 7.',
                    'The faster rise is **Tuesday to Wednesday**.'],
                   D.linegraph(((1, 18), (2, 24), (3, 31), (4, 27), (5, 20)),
                               xlabel='Mon · Tue · Wed · Thu · Fri', ylabel='loaves sold',
                               steepest=1)),
                ex('A line graph is flat from month 3 to month 5. What does that mean?',
                   ['The quantity **did not change** over those two months.',
                    'Flat does not mean zero — it means constant, and the constant could '
                    'be any height.'],
                   D.linegraph(((1, 30), (2, 38), (3, 44), (4, 44), (5, 44)),
                               xlabel='month', ylabel='value')),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. Here it is **a '
                    'calculator plus a careful denominator**. Build the frequency products '
                    'and the correct total into a single line so you cannot divide by the '
                    'wrong thing.',
    'desmos': [
        ("A shop's daily sales were 18, 24, 31, 27 and 20 loaves. What is the mean number of "
         'loaves sold per day?', '(18+24+31+27+20)/5',
         'Type the whole sum on one line.', '24'),
        ('In a survey the values 1, 2 and 3 occurred 4, 6 and 10 times. What is the mean '
         'value?', '(1*4+2*6+3*10)/(4+6+10)',
         'Products on top, total frequency underneath.', '2.3'),
        ('A histogram has bars of height 3, 7, 9, 6, 4 and 2. How many values are in the data '
         'set?', '3+7+9+6+4+2', 'Add the heights, not the bars.', '31'),
        ('Of 180 customers surveyed, 100 bought fruit and 60 of those also bought cheese. '
         'What fraction of the fruit buyers bought cheese?', '60/100',
         'The fruit buyers are the whole here.', '0.6'),
        ('A quiz out of 4 was scored 2, 3 and 4 by 5, 8 and 7 students. What is the mean '
         'score?', '(2*5+3*8+4*7)/20', 'Weighted mean in one line.', '3.1'),
        ("A bakery sold 31 loaves on Wednesday out of 120 for the week. What percentage of "
         "the week's loaves is that, to the nearest tenth?", '31/120*100',
         'Desmos gives the full decimal; round at the end.', '25.8'),
        ('A line graph reads 20 at week 1 and 32 at week 4. What is the average rate of change '
         'per week?', '(32-20)/(4-1)', 'Rise over run.', '4'),
        ('A dot plot shows 2, 3, 3, 4, 4, 4, 4, 5, 5, 6, 6, 7 and 9. What is the mean, to two '
         'decimal places?', '(2+3+3+4+4+4+4+5+5+6+6+7+9)/13',
         'Desmos holds the exact fraction 62/13.', '4.77'),
        ('A two-way table has row totals 100 and 80. What percentage of the whole sample is '
         'the first row?', '100/180*100', 'Round only at the end.', '55.6'),
        ("A histogram's intervals 0–4 and 5–9 hold 3 and 7 values out of 31. What percentage "
         'of the data is below 10?', '10/31*100', 'Combine the two bars first.', '32.3'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'Before touching the numbers, decide what the display **shows** and what '
                   'the question **wants**: a value, a difference, a total, or a fraction '
                   '— and if a fraction, out of what.',
    'part2': [
        ('P1', 'Hard',
         'The histogram shows the time, in minutes, that each of 31 customers waited at a '
         'service desk. How many customers waited 15 minutes or longer?', '12',
         ['The last three intervals are 15–19, 20–24 and 25–29, with heights 6, 4 and 2.',
          '6 + 4 + 2 = **12**. A common wrong answer is the first of those bars taken '
          'alone.'],
         D.histogram(WAITS, BARS, ylabel='number of customers', xlabel='minutes waited',
                     highlight=(3, 4, 5))),
        ('P2', 'Hard',
         'In a frequency table, the value 1 occurs 4 times, the value 2 occurs 6 times and '
         'the value 3 occurs 10 times. What is the mean of the data?', '2.3',
         ['∑(value × freq) = 4 + 12 + 30 = 46 over a total frequency of 20.',
          '46/20 = **2.3**. A common wrong answer is the mean of 1, 2 and 3 with the '
          'frequencies ignored; D is 46 ÷ 7.'],
         D.freq_table((1, 2, 3), (4, 6, 10), label='divide by 20, not by 3 and not by 7')),
        ('P3', 'Hard',
         'The table shows the results of a survey of 180 market customers. Of the customers '
         'who bought cheese, what fraction also bought fruit?', '3/4',
         ['The whole is the Cheese column, 60 + 20 = 80, not the grand total.',
          '60/80 = **3/4**. A common wrong answer divides by the Fruit row (100) '
          'instead.'],
         D.twoway(highlight='col0')),
        ('P4', 'Hard',
         'The bar chart shows loaves sold on each of five days. What percentage of the '
         "week's total was sold on Wednesday, to the nearest tenth of a percent?", '25.8',
         ['Total = 18 + 24 + 31 + 27 + 20 = 120.', '31/120 = 0.2583… = **25.8%**.'],
         D.barchart(highlight=(2,), note='Wednesday’s 31 over the week’s 120')),
        ('P5', 'Hard',
         'The dot plot shows the number of books read last month by each of 13 students. What '
         'is the median number of books read?', '4',
         ['Thirteen values, so the median is the 7th in order. The running count 2 (1), '
          '3 (3), 4 (7) puts the 7th value at **4**.',
          'A common wrong answer is the mean, which the question did not ask for.'],
         D.dotplot(BOOKS, median=4,
                   label='number of books read last month (13 students)')),
        ('P6', 'Hard',
         "A bakery's sales rose from 18 loaves on Monday to 24 on Tuesday, then to 31 on "
         'Wednesday. Between which pair of consecutive days was the increase greatest, and by '
         'how much?', 'Tuesday to Wednesday, by 7',
         ['Monday to Tuesday rises 24 − 18 = 6; Tuesday to Wednesday rises 31 − 24 = 7.',
          'The greater rise is **Tuesday to Wednesday, by 7**. B and C give day totals, '
          'not increases.'],
         D.linegraph(((1, 18), (2, 24), (3, 31)), xlabel='Mon · Tue · Wed',
                     ylabel='loaves sold', steepest=1)),
        ('P7', 'Very hard',
         'In the two-way table, what percentage of the customers who did not buy fruit also '
         'did not buy cheese?', '75',
         ['The whole is the ‘No fruit’ row, which totals 20 + 60 = 80.',
          '60/80 = **75%**. Dividing 60 by the grand total 180 gives 33.3%, which answers '
          'a different question.'],
         D.twoway(highlight='row1')),
        ('P8', 'Very hard',
         'A histogram of 31 wait times has bars of height 3, 7, 9, 6, 4 and 2 over the '
         'intervals 0–4, 5–9, 10–14, 15–19, 20–24 and 25–29 minutes. Which interval contains '
         'the median wait time?', '10–14',
         ['With 31 values the median is the 16th. Running totals are 3, 10, 19, so the '
          '16th value sits in the third interval, **10–14**.',
          'A common wrong answer stops at the running total 10.'],
         D.running_total(WAITS, BARS)),
        ('P9', 'Very hard',
         'A dot plot shows the values 2, 3, 3, 4, 4, 4, 4, 5, 5, 6, 6, 7 and 9. One more '
         'student is added who read 9 books. What happens to the median?', 'It rises to 4.5.',
         ['With 14 values the median is the average of the 7th and 8th. In order those are '
          '4 and 5.',
          '(4 + 5)/2 = **4.5**. Adding a large value at the top shifts the middle by half '
          'a step, not a whole one.'],
         D.sorted_list((4, 4, 4, 4, 5, 5), median_at=(3, 4),
                       label='the 7th and 8th of the new list of 14')),
        ('P10', 'Very hard',
         'A frequency table records a quiz marked out of 4: five students scored 2, eight '
         'scored 3 and seven scored 4. A student computes the mean as 62 ÷ 3 ≈ 20.7. What is '
         'the error, and what is the correct mean?',
         'Divided by the number of distinct scores instead of the number of students; the '
         'mean is 3.1.',
         ['∑(value × freq) = 10 + 24 + 28 = 62 is right, but the divisor must be the '
          'total frequency, **20**, not the 3 rows.',
          '62/20 = **3.1**. A mean of 20.7 on a test marked out of 4 is impossible, which '
          'is the quickest way to spot it.'],
         D.freq_table((2, 3, 4), (5, 8, 7), label='twenty students, three rows',
                      head=('score', 'students', 'score × students'))),
        ('P11', 'Very hard',
         'Over five days a bakery sold 18, 24, 31, 27 and 20 loaves. On the sixth day it sold '
         'enough to raise the mean for all six days to 25. How many loaves were sold on the '
         'sixth day?', '30',
         ['Five-day total = 120. For a six-day mean of 25 the total must be 6 × 25 = 150.',
          '150 − 120 = **30**.'],
         A.flow(('five days total 120', 'six-day total 6 × 25 = 150', '150 − 120 = 30'),
                note='work in totals, then take the difference')),
        ('P12', 'Very hard',
         'In a two-way table of 180 customers, 100 bought fruit and 80 did not; 60 fruit '
         'buyers and 20 non-buyers bought cheese. A report claims ‘most cheese buyers did not '
         'buy fruit’. Which statement best evaluates the claim?',
         'It is incorrect: 60 of the 80 cheese buyers also bought fruit.',
         ['There are 80 cheese buyers in all, and 60 of them bought fruit — **three '
          'quarters**.',
          'The claim reverses the comparison. A common wrong answer quotes a true number '
          'that answers a different question.'],
         D.twoway(highlight='col0')),
    ],
    'habit': 'In this topic the answer is almost always right and **the denominator is almost '
             'always wrong**. Grand total, row total, column total, total frequency — name '
             'it out loud before you divide.',
}
