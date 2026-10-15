# -*- coding: utf-8 -*-
"""Questions for topic 36 of Grade 8 algebra — mean, mode and median."""

from .common import F, M

S = M

FT = ('<table class="data"><tr><th>Goals</th><td>0</td><td>1</td><td>2</td><td>3</td>'
      '</tr><tr><th>Matches</th><td>4</td><td>7</td><td>6</td><td>3</td></tr></table>')

Q_FOCUS = [
    dict(q='Find the mean of ' + S('4, 7, 7, 10') + ' and ' + S('12') + '.', a=S('8'),
         check=('simp', '(4+7+7+10+12)/5', '8')),
    dict(q='Find the mode of ' + S('3, 5, 5, 8, 9, 5') + ' and ' + S('11') + '.',
         a=S('5'), check=('simp', '5', '5')),
    dict(q='Find the median of ' + S('9, 2, 7, 4') + ' and ' + S('6') + '.', a=S('6'),
         check=('simp', '6', '6')),
    dict(q='Find the median of ' + S('3, 8, 4, 11, 6') + ' and ' + S('9') + '.',
         a=S('7'), check=('simp', '(6+8)/2', '7')),
    dict(q='Find the range of ' + S('14, 9, 21, 5') + ' and ' + S('17') + '.',
         a=S('16'), check=('simp', '21-5', '16')),
    dict(q='Six numbers have mean ' + S('9') + '. Find their total.', a=S('54'),
         check=('simp', '6*9', '54')),
    dict(q='The mean of ' + S('5') + ' numbers is ' + S('12') + ' and four of them '
           'are ' + S('8, 10, 15') + ' and ' + S('16') + '. Find the fifth.',
         a=S('11'), check=('simp', '5*12-8-10-15-16', '11')),
    dict(q='A team scores ' + S('0, 1, 2') + ' or ' + S('3') + ' goals. ' + FT
           + ' How many matches were played?', a=S('20'),
         check=('simp', '4+7+6+3', '20')),
    dict(q='From the same table, find the mean number of goals.', a=S('1.4'),
         check=('simp', '(0*4+1*7+2*6+3*3)/20', 'Rational(7,5)')),
    dict(q='From the same table, write the modal and the median number of goals.',
         a='Mode ' + S('1') + ', median ' + S('1') + '.',
         check=('bool', 'Eq(4+7, 11) & (11 > 10)')),
]

Q_PRACTICE = [
    dict(q='Eight numbers have mean ' + S('7.5') + '. A ninth number, ' + S('12')
           + ', joins them. Find the new mean.', a=S('8'),
         check=('simp', '(8*Rational(15,2)+12)/9', '8')),
    dict(q='The mean of ' + S('6') + ' numbers is ' + S('14') + '. One number, '
           + S('9') + ', is removed. Find the mean of the rest.', a=S('15'),
         check=('simp', '(6*14-9)/5', '15')),
    dict(q='Estimate the mean of the grouped data: classes ' + S('0–9, 10–19, 20–29')
           + ' with frequencies ' + S('6, 10') + ' and ' + S('4') + '.',
         a=S('13.5'),
         check=('simp', '(Rational(9,2)*6+Rational(29,2)*10+Rational(49,2)*4)/20',
                'Rational(27,2)')),
    dict(q='Five whole numbers have median ' + S('8') + ', mode ' + S('6')
           + ' and range ' + S('9') + '. Give such a set.',
         a=S('6, 6, 8, 12, 15'),
         check=('bool', 'Eq(15-6, 9) & Eq(8, 8)')),
    dict(q='The mean of ' + S('x, 2x') + ' and ' + S('3x') + ' is ' + S('8')
           + '. Find ' + S('x') + '.', a=S('4'),
         check=('solveset', 'Eq((x+2*x+3*x)/3, 8)', 'FiniteSet(4)')),
    dict(q='A class of ' + S('20') + ' has mean mark ' + S('62') + ' and another class '
           'of ' + S('30') + ' has mean ' + S('72') + '. Find the mean of all '
           + S('50') + '.', a=S('68'),
         check=('simp', '(20*62+30*72)/50', '68')),
    dict(q='Four numbers have mean ' + S('10') + ' and median ' + S('9')
           + '. The two middle numbers differ by ' + S('4') + '. Find them.',
         a=S('7') + ' and ' + S('11'),
         check=('solveset', 'Eq((x + (x+4))/2, 9)', 'FiniteSet(7)')),
    dict(q='The mean of ' + S('n') + ' numbers is ' + S('6') + ' and their total is '
           + S('48') + '. Find ' + S('n') + '.', a=S('8'),
         check=('solveset', 'Eq(6*n, 48)', 'FiniteSet(8)', 'n')),
    dict(q='Each number in a set of mean ' + S('11') + ' is multiplied by ' + S('3')
           + ' and then ' + S('5') + ' is subtracted. Find the new mean.', a=S('28'),
         check=('simp', '3*11-5', '28')),
    dict(q='Seven numbers have mean ' + S('9') + '. Two of them, ' + S('4') + ' and '
           + S('20') + ', are replaced by ' + S('12') + ' each. Find the new mean.',
         a=S('9'), check=('simp', '(7*9-4-20+12+12)/7', '9')),
]

Q_CHALLENGE = [
    dict(q='The mean of ' + S('10') + ' numbers is ' + S('15') + '. Removing one '
           'number raises the mean to ' + S('16') + '. Which number was removed?',
         a=S('6'), check=('solveset', 'Eq((10*15 - x)/9, 16)', 'FiniteSet(6)')),
    dict(q='A set of ' + S('5') + ' whole numbers has mean, mode and median all equal '
           'to ' + S('6') + ', and range ' + S('8') + '. Find the set.',
         a=S('2, 6, 6, 6, 10'),
         check=('bool', 'Eq((2+6+6+6+10)/5, 6) & Eq(10-2, 8)')),
    dict(q='The mean of ' + S('x, x + 2, x + 4, x + 6') + ' and ' + S('x + 8')
           + ' is ' + S('17') + '. Find the median.', a=S('17'),
         check=('solveset', 'Eq((5*x+20)/5, 17)', 'FiniteSet(13)')),
    dict(q='Nine numbers have mean ' + S('12') + '. The first ' + S('4')
           + ' have mean ' + S('10') + ' and the last ' + S('4') + ' have mean '
           + S('15') + '. Find the fifth number.', a=S('8'),
         check=('simp', '9*12-4*10-4*15', '8')),
    dict(q='Six whole numbers between ' + S('1') + ' and ' + S('10')
           + ' have mean ' + S('5') + ' and mode ' + S('3')
           + ' appearing exactly three times. Find the largest possible value in the '
           'set.', a=S('10'),
         check=('bool', 'Eq(3+3+3+1+10+10, 30) & (10 <= 10)')),
    dict(q='The mean of a set of ' + S('n') + ' numbers is ' + S('m')
           + '. A number equal to ' + S('m') + ' is added. What happens to the mean?',
         a='Nothing — it stays ' + S('m') + '.',
         check=('simp', '(n*m+m)/(n+1)', 'm')),
    dict(q='Boys in a class have mean height ' + S('150') + ' cm and girls '
           + S('142') + ' cm. The class of ' + S('25') + ' has mean ' + S('145.2')
           + ' cm. How many boys?', a=S('10'),
         check=('solveset', 'Eq((150*x + 142*(25-x))/25, Rational(726,5))',
                'FiniteSet(10)')),
    dict(q='Grouped data: ' + S('0–4') + ' with frequency ' + S('f') + ', '
           + S('5–9') + ' with ' + S('8') + ', ' + S('10–14') + ' with ' + S('6')
           + '. The estimated mean is ' + S('7') + '. Find ' + S('f') + '.',
         a=S('6'), check=('solveset',
                          'Eq((2*x+7*8+12*6)/(x+14), 7)', 'FiniteSet(6)')),
    dict(q='Four positive whole numbers have mean ' + S('5') + ' and median '
           + S('4') + '. What is the largest the greatest of them can be?',
         a=S('11') + ' — the median forces the middle pair to add to ' + S('8')
           + ', so the set is ' + S('1, 3, 5, 11') + '.',
         check=('bool', 'Eq(1+3+5+11, 20) & Eq((3+5)/2, 4)')),
    dict(q='A list of ' + S('5') + ' numbers has mean ' + S('8') + '. Adding '
           + S('k') + ' to every number and then halving them gives mean ' + S('7')
           + '. Find ' + S('k') + '.', a=S('6'),
         check=('solveset', 'Eq((8+k)/2, 7)', 'FiniteSet(6)', 'k')),
]

Q_BEYOND = [
    dict(q='Five whole numbers have mean ' + S('10') + ', median ' + S('10')
           + ', mode ' + S('10') + ' (unique) and range ' + S('10')
           + '. Find every such set.',
         a='Three: ' + S('4, 10, 10, 12, 14') + ', ' + S('5, 10, 10, 10, 15')
           + ' and ' + S('6, 8, 10, 10, 16') + '.',
         check=('custom', 'five_ten_set')),
    dict(q='The mean of the first ' + S('n') + ' positive whole numbers is '
           + S('50.5') + '. Find ' + S('n') + '.', a=S('100'),
         check=('solveset', 'Eq((n+1)/2, Rational(101,2))', 'FiniteSet(100)', 'n')),
    dict(q='A set of ' + S('n') + ' numbers has mean ' + S('n') + '. Adding the number '
           + S('n + 1') + ' gives mean ' + S('n + 1') + '? Find every ' + S('n')
           + ' for which that happens.', a='No positive ' + S('n')
           + ': the new mean is always ' + S('n + 1/(n+1)') + ', never ' + S('n + 1')
           + '.', check=('custom', 'mean_n_shift')),
    dict(q='Nine different positive whole numbers have mean ' + S('10')
           + '. How large can the largest be?', a=S('54'),
         check=('bool', 'Eq(1+2+3+4+5+6+7+8+54, 90)')),
    dict(q='Nine different positive whole numbers have mean ' + S('10')
           + '. How large can the median be?', a=S('14'),
         check=('custom', 'median_nine_mean_ten')),
    dict(q='Prove that the mean of a set of numbers is never smaller than the smallest '
           'of them.', a='Replace every number by the smallest, ' + S('p')
           + '. The total only falls, so the mean is at least '
           + S('np ÷ n = p') + '.',
         check=('bool', '(4+7+7+10+12)/5 >= 4')),
    dict(q='Ten numbers have mean ' + S('m') + '. Nine of them are ' + S('m')
           + ' and the tenth is ' + S('m + 10') + '. Explain why this is impossible.',
         a='Those ten have total ' + S('10m + 10') + ', so their mean is '
           + S('m + 1') + ', not ' + S('m') + '.',
         check=('simp', '(9*m + m + 10)/10', 'm+1')),
    dict(q='A data set of ' + S('2n') + ' numbers is split into two halves of mean '
           + S('p') + ' and ' + S('q') + '. Show the mean of the whole set is '
           + S(F('p + q', 2)) + '.',
         a='Each half totals ' + S('np') + ' and ' + S('nq') + ', so the whole totals '
           + S('n(p + q)') + ' over ' + S('2n') + ' numbers.',
         check=('simp', '(n*p + n*q)/(2*n)', '(p+q)/2')),
    dict(q='Seven whole numbers from ' + S('1') + ' to ' + S('7')
           + ' are written down, repeats allowed, with mean ' + S('4')
           + ' and mode ' + S('7') + ' occurring three times. Find the median.',
         a=S('3') + ' — e.g. ' + S('1, 1, 2, 3, 7, 7, 7'),
         check=('bool', 'Eq(1+1+2+3+7+7+7, 28) & Eq(Rational(28,7), 4)')),
    dict(q='Show that for any ' + S('5') + ' numbers the mean and the median can '
           'differ by as much as you like, but the median always lies between the '
           'smallest and largest.',
         a='Take ' + S('0, 0, 0, 0, N') + ': median ' + S('0') + ', mean '
           + S('N/5') + '. The median is one of the values (or the average of two), so '
           'it cannot leave the range.',
         check=('bool', '(100/5 - 0 > 10) & (0 >= 0) & (0 <= 100)')),
    dict(q='The mean of ' + S('a, b') + ' and ' + S('c') + ' is ' + S('6')
           + ' and the mean of ' + S('a<sup>2</sup>, b<sup>2</sup>') + ' and '
           + S('c<sup>2</sup>') + ' is ' + S('38') + '. Find '
           + S('ab + bc + ca') + '.', a=S('105'),
         check=('simp', '(18**2 - 3*38)/2', '105')),
    dict(q='Twelve numbers have mean ' + S('9') + '. Increasing four of them by '
           + S('3') + ' each and decreasing three of them by ' + S('4')
           + ' each gives what new mean?', a=S('9'),
         check=('simp', '(12*9 + 4*3 - 3*4)/12', '9')),
    dict(q='A set of distinct positive whole numbers has mean ' + S('6')
           + '. What is the greatest number of members it can have?', a=S('11'),
         check=('custom', 'distinct_mean_six')),
    dict(q='The numbers ' + S('1, 2, 3, …, n') + ' are written and one is erased. The '
           'mean of those left is ' + S('6.1') + '. Which was erased, and what is '
           + S('n') + '?', a=S('n = 11') + ', the number ' + S('5') + ' erased.',
         check=('custom', 'erase_mean_61')),
    dict(q='Prove that if every number in a set is increased by ' + S('k')
           + ' then the mean increases by ' + S('k') + ' and the range does not '
           'change.', a='The total rises by ' + S('nk') + ', so the mean rises by '
           + S('k') + '; the largest and smallest both rise by ' + S('k')
           + ', so their difference is unchanged.',
         check=('simp', '(n*m + n*k)/n - m', 'k')),
]

TOPIC = dict(
    key='alg-36', number=36, unit='Unit 6 · Data, counting and chance', lessons='81–82',
    title='Mean, mode and median',
    subtitle='The three averages, the range, and the algebra of a total that has to be '
             'recovered before anything else can be done.',
    uz='Algebra 8, lessons 81–82', cam='Cambridge Stage 9 · 9.3',
    keywords=['mean', 'mode', 'modal class', 'median', 'range', 'total', 'frequency',
              'estimated mean', 'midpoint', 'combined mean', 'outlier'],
    remember=[
        'The mean is <span class="m">total ÷ how many</span>. Almost every mean '
        'question is really about the <em>total</em> — find it first.',
        'From a frequency table the mean is '
        '<span class="m">Σ(f × x) ÷ Σf</span>; from grouped data use the midpoints '
        'and call the answer an <em>estimate</em>.',
        'For the median, order the data. With <span class="m">n</span> values the '
        'median sits in position <span class="m">(n + 1) ÷ 2</span>; for even '
        '<span class="m">n</span> average the two middle ones.',
        'Two groups do not give a mean of means: combine the totals, '
        '<span class="m">(n₁m₁ + n₂m₂) ÷ (n₁ + n₂)</span>.',
        'Add <span class="m">k</span> to every value and the mean rises by '
        '<span class="m">k</span> while the range stays put; multiply by '
        '<span class="m">k</span> and both are multiplied by '
        '<span class="m">k</span>.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
