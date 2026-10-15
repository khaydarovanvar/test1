# -*- coding: utf-8 -*-
"""Questions for topic 39 of Grade 8 algebra — revision for Control work 7."""

from .common import F, M

S = M

FT = ('<table class="data"><tr><th>Score</th><td>1</td><td>2</td><td>3</td><td>4</td>'
      '<td>5</td></tr><tr><th>Pupils</th><td>2</td><td>5</td><td>8</td><td>7</td>'
      '<td>3</td></tr></table>')

Q_FOCUS = [
    dict(q='Twenty-five pupils were scored out of ' + S('5') + '. ' + FT
           + ' How many pupils in all?', a=S('25'),
         check=('simp', '2+5+8+7+3', '25')),
    dict(q='From the same table, find the modal score.', a=S('3'),
         check=('bool', '(8 > 7) & (8 > 5)')),
    dict(q='From the same table, find the median score.', a=S('3'),
         check=('bool', '(2+5 < 13) & (2+5+8 >= 13)')),
    dict(q='From the same table, find the mean score.', a=S('3.16'),
         check=('simp', '(1*2+2*5+3*8+4*7+5*3)/25', 'Rational(79,25)')),
    dict(q='From the same table, find the range.', a=S('4'),
         check=('simp', '5-1', '4')),
    dict(q='From the same table, what angle shows score ' + S('3')
           + ' on a pie chart?', a=S('115.2°'),
         check=('simp', '8/25*360', 'Rational(576,5)')),
    dict(q='How many two-digit codes can be made from ' + S('6') + ' letters, '
           'repeats allowed?', a=S('36'), check=('simp', '6**2', '36')),
    dict(q='In how many orders can ' + S('5') + ' photographs be hung in a row?',
         a=S('120'), check=('simp', 'factorial(5)', '120')),
    dict(q='From ' + S('7') + ' pupils, how many pairs can be chosen?', a=S('21'),
         check=('simp', 'binomial(7,2)', '21')),
    dict(q='A die is rolled and a coin tossed. How many outcomes?', a=S('12'),
         check=('simp', '6*2', '12')),
]

Q_PRACTICE = [
    dict(q='Six numbers have mean ' + S('11') + '. Five of them are '
           + S('7, 9, 12, 14') + ' and ' + S('15') + '. Find the sixth.', a=S('9'),
         check=('simp', '6*11-7-9-12-14-15', '9')),
    dict(q='A class of ' + S('18') + ' has mean mark ' + S('65')
           + '; a class of ' + S('12') + ' has mean ' + S('75')
           + '. Find the mean of all ' + S('30') + '.', a=S('69'),
         check=('simp', '(18*65+12*75)/30', '69')),
    dict(q='In a pie chart of ' + S('45') + ' people a sector is ' + S('96°')
           + '. How many people?', a=S('12'), check=('simp', '96/360*45', '12')),
    dict(q='Estimate the mean of classes ' + S('0–9, 10–19, 20–29')
           + ' with frequencies ' + S('8, 10, 2') + '.', a=S('11.5'),
         check=('simp', '(Rational(9,2)*8+Rational(29,2)*10+Rational(49,2)*2)/20',
                'Rational(23,2)')),
    dict(q='How many four-digit numbers have no repeated digit?', a=S('4536'),
         check=('simp', '9*9*8*7', '4536')),
    dict(q='From ' + S('4') + ' boys and ' + S('5') + ' girls, how many teams of '
           + S('3') + ' are all girls?', a=S('10'),
         check=('simp', 'binomial(5,3)', '10')),
    dict(q='How many ways can ' + S('3') + ' of ' + S('8') + ' books be put in order '
           'on a shelf?', a=S('336'), check=('simp', '8*7*6', '336')),
    dict(q='Four numbers have mean ' + S('12') + ' and median ' + S('11')
           + '. The middle two differ by ' + S('6') + '. Find them.',
         a=S('8') + ' and ' + S('14'),
         check=('solveset', 'Eq((x + (x+6))/2, 11)', 'FiniteSet(8)')),
    dict(q='Two dice are rolled. In how many ways is the total at least ' + S('10')
           + '?', a=S('6'), check=('custom', 'two_dice_at_least_ten')),
    dict(q='Each value in a set of mean ' + S('14') + ' and range ' + S('9')
           + ' is doubled. Find the new mean and range.', a=S('28') + ' and '
           + S('18'), check=('bool', 'Eq(2*14, 28) & Eq(2*9, 18)')),
]

Q_CHALLENGE = [
    dict(q='Eleven numbers have mean ' + S('20') + '. Removing one leaves mean '
           + S('21') + '. Which number went?', a=S('10'),
         check=('solveset', 'Eq((11*20-x)/10, 21)', 'FiniteSet(10)')),
    dict(q='Five whole numbers have mean ' + S('7') + ', median ' + S('7')
           + ', unique mode ' + S('9') + ' and range ' + S('5') + '. Find the set.',
         a=S('4, 6, 7, 9, 9'), check=('custom', 'five_mean_seven')),
    dict(q='A pie chart of ' + S('n') + ' people has a sector of ' + S('40°')
           + ' for the ' + S('7') + ' who walk. Find ' + S('n') + '.', a=S('63'),
         check=('solveset', 'Eq(Rational(7,1)/n*360, 40)', 'FiniteSet(63)', 'n')),
    dict(q='How many three-digit numbers have digits adding to ' + S('6') + '?',
         a=S('21'), check=('custom', 'three_digit_sum_six')),
    dict(q='Seven people sit in a row. In how many ways if two particular people sit '
           'together?', a=S('1440'), check=('simp', 'factorial(6)*2', '1440')),
    dict(q='Grouped data has classes ' + S('0–4, 5–9, 10–14') + ' with frequencies '
           + S('f, 2f, 2f') + ' and total ' + S('30') + '. Estimate the mean.',
         a=S('8'), check=('simp', '(2*6+7*12+12*12)/30', '8')),
    dict(q='From ' + S('5') + ' teachers and ' + S('7') + ' pupils a committee of '
           + S('4') + ' must have exactly ' + S('2') + ' teachers. How many '
           'committees?', a=S('210'),
         check=('simp', 'binomial(5,2)*binomial(7,2)', '210')),
    dict(q='Nine numbers have mean ' + S('8') + '. The first four have mean ' + S('6')
           + ' and the last four have mean ' + S('9') + '. Find the middle number.',
         a=S('12'), check=('simp', '9*8-4*6-4*9', '12')),
    dict(q='How many paths go from one corner of a ' + S('3 × 3') + ' grid of streets '
           'to the opposite corner, moving only right or up?', a=S('20'),
         check=('simp', 'binomial(6,3)', '20')),
    dict(q='Of ' + S('80') + ' pupils, ' + S('45') + ' study French, ' + S('38')
           + ' study German and ' + S('12') + ' study neither. How many study both?',
         a=S('15'), check=('solveset', 'Eq(45+38-x, 80-12)', 'FiniteSet(15)')),
]

Q_BEYOND = [
    dict(q='A pie chart of ' + S('6') + ' sectors has every angle a whole number of '
           'degrees, all different, and the largest is ' + S('70°')
           + '. How small can the smallest be?', a=S('20°'),
         check=('bool', 'Eq(70+69+68+67+66+20, 360) & Eq(70+69+68+67+66, 340)')),
    dict(q='Eight different positive whole numbers have mean ' + S('9')
           + '. How large can the largest be?', a=S('44'),
         check=('bool', 'Eq(1+2+3+4+5+6+7+44, 72)')),
    dict(q='Twelve numbers have mean ' + S('m') + '. Three of them are replaced by '
           'three numbers each ' + S('4') + ' larger. Find the new mean.',
         a=S('m + 1'), check=('simp', '(12*m + 12)/12', 'm+1')),
    dict(q='How many whole numbers from ' + S('1') + ' to ' + S('500')
           + ' are divisible by ' + S('4') + ' but not by ' + S('6') + '?',
         a=S('84'), check=('custom', 'div4_not6_500')),
    dict(q='From the digits ' + S('0, 1, 2, 3, 4, 5') + ' how many three-digit '
           'numbers with no repeats are divisible by ' + S('5') + '?', a=S('36'),
         check=('custom', 'three_digit_div5_from_six')),
    dict(q='In how many ways can ' + S('7') + ' identical chairs and ' + S('3')
           + ' identical tables be put in a row?', a=S('120'),
         check=('simp', 'binomial(10,3)', '120')),
    dict(q='Thirteen pupils sit a test marked out of ' + S('10')
           + '. Show that two of them have the same mark.',
         a='There are only ' + S('11') + ' possible marks, ' + S('0') + ' to '
           + S('10') + ', and ' + S('13') + ' pupils.',
         check=('bool', '(13 > 11)')),
    dict(q='The mean of ' + S('n') + ' consecutive whole numbers is ' + S('30')
           + ' and the largest is ' + S('38') + '. Find ' + S('n') + '.', a=S('17'),
         check=('custom', 'consecutive_mean_30')),
    dict(q='Six numbers have mean ' + S('10') + ' and the five smallest have mean '
           + S('8') + '. Show the largest is ' + S('20') + ', and find the smallest '
           'possible range.',
         a='Largest ' + S('20') + '; if the other five were all ' + S('8')
           + ' the range would be ' + S('12') + '.',
         check=('bool', 'Eq(6*10-5*8, 20) & Eq(20-8, 12)')),
    dict(q='How many ways can ' + S('4') + ' prizes, all different, be given to '
           + S('6') + ' pupils if no pupil may win twice?', a=S('360'),
         check=('simp', '6*5*4*3', '360')),
    dict(q='A survey of ' + S('100') + ' people gives whole-number percentages for '
           + S('7') + ' categories, each at least ' + S('1%') + '. How many of the '
           'pie-chart angles are certain to be whole numbers of degrees?',
         a='None need be: ' + S('1%') + ' is ' + S('3.6°')
           + '. An angle is whole exactly when the percentage is a multiple of '
           + S('5') + '.', check=('custom', 'percent_whole_angle')),
    dict(q='Ten numbers have mean ' + S('12') + '. Each is increased by its own '
           'position in the list (' + S('1') + ' added to the first, ' + S('2')
           + ' to the second, and so on). Find the new mean.', a=S('17.5'),
         check=('simp', '12 + Rational(55,10)', 'Rational(35,2)')),
    dict(q='Four dice are rolled. In how many ways is the total ' + S('8') + '?',
         a=S('35'), check=('custom', 'four_dice_eight')),
    dict(q='Prove that the mean of any ' + S('5') + ' consecutive whole numbers is '
           'the middle one.',
         a='Write them as ' + S('m − 2, m − 1, m, m + 1, m + 2')
           + '; the total is ' + S('5m') + '.',
         check=('simp', '((m-2)+(m-1)+m+(m+1)+(m+2))/5', 'm')),
    dict(q='Twenty-five people each pick a whole number from ' + S('1') + ' to '
           + S('6') + '. Show that at least ' + S('5') + ' pick the same number, and '
           'that ' + S('5') + ' cannot be improved.',
         a='Four each would account for only ' + S('24')
           + ' people. The split ' + S('5, 4, 4, 4, 4, 4') + ' shows '
           + S('5') + ' is reached.', check=('bool', '(4*6 < 25) & (5*6 >= 25)')),
]

TOPIC = dict(
    key='alg-39', number=39, unit='Unit 6 · Data, counting and chance', lessons='89–90',
    title='Revision · Control work 7 — data and counting',
    subtitle='Averages, charts and the counting principle together, with the mistakes '
             'the paper collects every year set as questions of their own.',
    uz='Algebra 8, revision of lessons 79–88', cam='Cambridge Stage 9 · 9–10',
    keywords=['control work', 'work on mistakes', 'mean', 'median', 'mode',
              'pie chart', 'estimated mean', 'counting principle', 'at least one',
              'pigeonhole'],
    remember=[
        'Mean questions: recover the <em>total</em> first.',
        'Median questions: order the data first, and count the frequencies to find '
        'which position you are standing in.',
        'A combined mean is never the mean of two means unless the groups are the '
        'same size.',
        'Counting: multiply the stages, add the alternatives, and for '
        '&ldquo;at least one&rdquo; take the total and subtract the none.',
        'Check an answer for sense: a probability is between '
        '<span class="m">0</span> and <span class="m">1</span>, a count is a whole '
        'number, pie-chart angles add to <span class="m">360°</span>.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
