# -*- coding: utf-8 -*-
"""Questions for topic 35 of Grade 8 algebra — collecting and showing data."""

from .common import F, M

S = M

TABLE = ('<table class="data"><tr><th>Sport</th><td>football</td><td>basketball</td>'
         '<td>tennis</td><td>swimming</td></tr>'
         '<tr><th>Students</th><td>11</td><td>8</td><td>5</td><td>?</td></tr></table>')

GROUPED = ('<table class="data"><tr><th>Mark</th><td>0–9</td><td>10–19</td>'
           '<td>20–29</td><td>30–39</td></tr>'
           '<tr><th>Frequency</th><td>5</td><td>13</td><td>9</td><td>3</td></tr></table>')

Q_FOCUS = [
    dict(q='Thirty students each named one sport. ' + TABLE
           + ' How many chose swimming?', a=S('6'),
         check=('simp', '30-11-8-5', '6')),
    dict(q='The same thirty answers are drawn as a pie chart. What angle does the '
           'football sector need?', a=S('132°'),
         check=('simp', '11/30*360', '132')),
    dict(q='A pie chart of ' + S('60') + ' people has a sector of ' + S('54°')
           + '. How many people is that?', a=S('9'),
         check=('simp', '54/360*60', '9')),
    dict(q='Find the range of ' + S('12, 7, 19, 4, 15') + '.', a=S('15'),
         check=('simp', '19-4', '15')),
    dict(q='A grouped table uses the class ' + S('20–29') + '. Write its midpoint.',
         a=S('24.5'), check=('simp', '(20+29)/2', 'Rational(49,2)')),
    dict(q='A set of marks is grouped. ' + GROUPED
           + ' How many marks are there altogether?', a=S('30'),
         check=('simp', '5+13+9+3', '30')),
    dict(q='From the same table, what fraction of the marks lie in ' + S('10–19')
           + '?', a=S(F(13, 30)), check=('simp', '13/30', 'Rational(13,30)')),
    dict(q='From the same table, what percentage of the marks are below ' + S('20')
           + '?', a=S('60%'), check=('simp', '(5+13)/30*100', '60')),
    dict(q='A bar chart shows ' + S('14, 9, 11') + ' and ' + S('6')
           + ' books borrowed on four days. How many in the four days?', a=S('40'),
         check=('simp', '14+9+11+6', '40')),
    dict(q='In a scatter graph of a pupil&rsquo;s height against shoe size the points '
           'rise to the right. Describe the correlation.',
         a='Positive — taller pupils tend to take a larger shoe.'),
]

Q_PRACTICE = [
    dict(q='In a pie chart a sector of ' + S('72°') + ' stands for ' + S('14')
           + ' people. How many people were asked altogether?', a=S('70'),
         check=('simp', '14*360/72', '70')),
    dict(q='School A asked ' + S('200') + ' pupils and ' + S('25%')
           + ' walk to school. School B asked ' + S('100') + ' and ' + S('40%')
           + ' walk. Which school has more walkers?',
         a='A — ' + S('50') + ' walkers against ' + S('40') + '.',
         check=('bool', '200*Rational(25,100) > 100*Rational(40,100)')),
    dict(q='Forty-eight people were asked and ' + S('18') + ' chose tea. What angle '
           'shows tea on a pie chart?', a=S('135°'),
         check=('simp', '18/48*360', '135')),
    dict(q='A line of best fit passes through ' + S('(0, 20)') + ' and '
           + S('(10, 50)') + '. Use it to predict ' + S('y') + ' when ' + S('x = 6')
           + '.', a=S('38'), check=('simp', '20+3*6', '38')),
    dict(q='A bar rises from ' + S('40') + ' one year to ' + S('52') + ' the next. '
           'What percentage increase is that?', a=S('30%'),
         check=('simp', '(52-40)/40*100', '30')),
    dict(q='Of ' + S('60') + ' students, ' + S('35') + ' are girls. Twenty-two study '
           'French and ' + S('13') + ' of those are girls. How many boys do not study '
           'French?', a=S('16'), check=('simp', '60-35-(22-13)', '16')),
    dict(q='A frequency table of ' + S('5') + ' classes totals ' + S('80') + '. Four of '
           'the frequencies are ' + S('12, 19, 8') + ' and ' + S('26')
           + '. Find the fifth.', a=S('15'),
         check=('simp', '80-12-19-8-26', '15')),
    dict(q='A stem-and-leaf diagram has stem ' + S('3') + ' with leaves '
           + S('1, 4, 4, 9') + ' and stem ' + S('5') + ' with leaves ' + S('0, 2')
           + '. The key is ' + S('3 | 1 = 31') + '. Find the range.', a=S('21'),
         check=('simp', '52-31', '21')),
    dict(q='A pie chart is drawn for ' + S('3') + ' categories in the ratio '
           + S('2 : 3 : 4') + '. Find all three angles.',
         a=S('80°, 120°, 160°'), check=('simp', '2/9*360 + 3/9*360', '200')),
    dict(q='A histogram bar is ' + S('10') + ' marks wide and its frequency density '
           'is ' + S('2.4') + '. How many values are in that class?', a=S('24'),
         check=('simp', '10*Rational(24,10)', '24')),
]

Q_CHALLENGE = [
    dict(q='In a pie chart a sector of ' + S('150°') + ' stands for ' + S('25')
           + ' people. Another group has ' + S('42') + ' people. Find its angle.',
         a=S('252°'), check=('simp', '42*150/25', '252')),
    dict(q='Two sectors of a pie chart differ by ' + S('40°') + ' and together make '
           + S('160°') + '. Find each.', a=S('100°') + ' and ' + S('60°'),
         check=('solveset', 'Eq(x + (x-40), 160)', 'FiniteSet(100)')),
    dict(q='Eight sectors of a pie chart are in arithmetic progression and the '
           'smallest is ' + S('10°') + '. Find the common difference.', a=S('10°'),
         check=('solveset', 'Eq(4*(2*10+7*d), 360)', 'FiniteSet(10)', 'd')),
    dict(q='A survey of ' + S('250') + ' people is shown twice: once as a pie chart '
           'and once as a bar chart. One sector is ' + S('86.4°')
           + '. How many people, and what percentage?',
         a=S('60') + ' people, ' + S('24%'),
         check=('simp', 'Rational(432,5)/360*250', '60')),
    dict(q='Thirty per cent of the people in the ' + S('40%')
           + ' sector of a pie chart are left-handed. What angle of the whole chart '
           'do they fill?', a=S('43.2°'),
         check=('simp', 'Rational(3,10)*Rational(4,10)*360', 'Rational(216,5)')),
    dict(q='A grouped table has classes ' + S('10–19, 20–29, 30–39')
           + ' with frequencies ' + S('4, 11, 5') + '. What is the largest the range '
           'of the raw data could be?', a=S('29'), check=('simp', '39-10', '29')),
    dict(q='A histogram has two classes: ' + S('0–20') + ' with frequency ' + S('30')
           + ' and ' + S('20–50') + ' with frequency ' + S('30') + '. Find both '
           'frequency densities.', a=S('1.5') + ' and ' + S('1'),
         check=('simp', '30/20 - 30/30', 'Rational(1,2)')),
    dict(q='A pie chart has four sectors whose angles are four consecutive multiples '
           'of ' + S('12°') + '. Find the smallest.', a=S('72°'),
         check=('solveset', 'Eq(4*x + 12*(1+2+3), 360)', 'FiniteSet(72)')),
    dict(q='A bar chart starts its vertical axis at ' + S('95') + ' instead of '
           + S('0') + '. Two bars read ' + S('100') + ' and ' + S('110')
           + '. By what factor does the drawing exaggerate the ratio of the two?',
         a='The drawn heights are in the ratio ' + S('1 : 3') + ', the true values in '
           'the ratio ' + S('10 : 11') + '.',
         check=('simp', '(110-95)/(100-95)', '3')),
    dict(q='Of ' + S('n') + ' students, ' + S('40%') + ' walk and ' + S('35%')
           + ' cycle; ' + S('30') + ' do neither. Find ' + S('n') + '.', a=S('120'),
         check=('solveset', 'Eq(x - Rational(40,100)*x - Rational(35,100)*x, 30)',
                'FiniteSet(120)')),
]

Q_BEYOND = [
    dict(q='A pie chart has ' + S('7') + ' sectors. Every angle is a whole number of '
           'degrees and no two are equal. How small can the largest angle be?',
         a=S('55°') + ' — for example ' + S('55, 54, 53, 52, 51, 50, 45') + '.',
         check=('bool', 'Eq(55+54+53+52+51+50+45, 360) & (7*54-21 < 360)')),
    dict(q='A pie chart is cut into ' + S('n') + ' equal sectors, each a whole number '
           'of degrees, with ' + S('1 ≤ n ≤ 360') + '. How many values of ' + S('n')
           + ' are possible?', a=S('24'), check=('custom', 'divisors_360')),
    dict(q='Four categories have frequencies that are four consecutive whole numbers '
           'and total ' + S('30') + '. Find the four pie-chart angles.',
         a=S('72°, 84°, 96°, 108°'),
         check=('solveset', 'Eq(4*x+6, 30)', 'FiniteSet(6)')),
    dict(q='Twenty-five students each choose one of four clubs. Show that some club is '
           'chosen by at least ' + S('7') + ' of them, and that ' + S('7')
           + ' cannot be improved.',
         a='If every club had ' + S('6') + ' or fewer there would be at most '
           + S('24') + ' students. Twenty-five split as ' + S('7, 6, 6, 6')
           + ' shows no club need exceed ' + S('7') + '.',
         check=('bool', '(6*4 < 25) & (7*4 >= 25)')),
    dict(q='Can a bar chart of four bars totalling ' + S('100')
           + ' have every bar a multiple of ' + S('3') + '? Explain.',
         a='No — a sum of multiples of ' + S('3') + ' is a multiple of ' + S('3')
           + ', and ' + S('100') + ' leaves remainder ' + S('1') + '.',
         check=('simp', '100-3*33', '1')),
    dict(q='A survey of ' + S('100') + ' people splits into ' + S('5')
           + ' categories, each with at least one person. How small can the largest '
           'category be?', a=S('20'),
         check=('bool', '(5*19 < 100) & (5*20 >= 100)')),
    dict(q='Each of ' + S('3') + ' percentages is rounded to the nearest whole number '
           'and the three printed figures add to ' + S('101') + '. Give three exact '
           'percentages that do this.',
         a=S('33.4%, 33.3%, 33.3%') + ' round to ' + S('33, 33, 33') + '; take instead '
           + S('33.5%, 33.3%, 33.2%') + ' &rarr; ' + S('34 + 33 + 33 = 100')
           + '. One that works is ' + S('30.5%, 34.5%, 35%') + ' &rarr; ' + S('31 + 35 + 35 = 101')
           + '.', check=('simp', '31+35+35', '101')),
    dict(q='For which whole ' + S('n') + ' between ' + S('2') + ' and ' + S('12')
           + ' do ' + S('n') + ' equal sectors fail to give whole-number angles? '
           'List them.', a=S('7') + ' and ' + S('11') + ' — every other '
           + S('n') + ' in that range divides ' + S('360') + '.',
         check=('custom', 'non_divisors_2_12')),
    dict(q='A pie chart has sectors of ' + S('a°, b°') + ' and ' + S('c°') + ' with '
           + S('a : b = 2 : 3') + ' and ' + S('b : c = 3 : 4') + '. Find all three.',
         a=S('80°, 120°, 160°'),
         check=('solveset', 'Eq(x + Rational(3,2)*x + 2*x, 360)', 'FiniteSet(80)')),
    dict(q='A histogram has classes of widths ' + S('5, 10') + ' and ' + S('15')
           + ' with equal frequency density. The total frequency is ' + S('120')
           + '. Find the three frequencies.', a=S('20, 40, 60'),
         check=('solveset', 'Eq(5*x+10*x+15*x, 120)', 'FiniteSet(4)')),
    dict(q='Two schools each draw a pie chart of the same four clubs. In school A the '
           'chess sector is ' + S('60°') + ' of ' + S('180') + ' pupils; in school B '
           'it is ' + S('45°') + ' of ' + S('320') + '. Which school has more chess '
           'players, and by how many?', a='B, by ' + S('10') + '.',
         check=('simp', '45/360*320 - 60/360*180', '10')),
    dict(q='Seven data values have range ' + S('20') + ' and every value is a whole '
           'number. What is the largest number of different values the set can '
           'contain?', a=S('7') + ' — all seven can differ, e.g. '
           + S('0, 1, 2, 3, 4, 5, 20') + '.',
         check=('bool', 'Eq(20-0, 20) & (7 <= 21)')),
    dict(q='A grouped table has three classes of width ' + S('10')
           + ' and frequencies ' + S('f, 2f') + ' and ' + S('3f') + '. The pie chart '
           'of the same data has a sector of ' + S('60°') + '. Which class is it, and '
           'what is ' + S('f') + ' if the total is ' + S('42') + '?',
         a='The first class, and ' + S('f = 7') + '.',
         check=('bool', 'Eq(6*7, 42) & Eq(Rational(1,6)*360, 60)')),
    dict(q='A scatter graph of ' + S('n') + ' points has a line of best fit through '
           + S('(0, 5)') + ' with gradient ' + S('2') + '. The point ' + S('(4, 20)')
           + ' lies above the line. By how much?', a=S('7'),
         check=('simp', '20-(5+2*4)', '7')),
    dict(q='Thirteen pupils are born in the same year. Show that at least two share a '
           'birth month, and find the smallest number of pupils for which at least '
           + S('3') + ' must share a month.', a=S('25') + ' pupils.',
         check=('bool', '(13 > 12) & (2*12 < 25) & (24 <= 2*12)')),
]

TOPIC = dict(
    key='alg-35', number=35, unit='Unit 6 · Data, counting and chance', lessons='79–80',
    title='Data analysis and the representation of data',
    subtitle='Tally, frequency table, bar chart, pie chart, stem-and-leaf and scatter '
             'graph — and what each one hides.',
    uz='Algebra 8, lessons 79–80', cam='Cambridge Stage 9 · 9.1–9.2',
    keywords=['data', 'tally', 'frequency table', 'class interval', 'midpoint',
              'bar chart', 'pie chart', 'sector angle', 'stem-and-leaf', 'key',
              'scatter graph', 'correlation', 'line of best fit', 'frequency density',
              'misleading graph'],
    remember=[
        'A pie-chart angle is <span class="m">frequency ÷ total × 360°</span>. '
        'The angles must add to <span class="m">360°</span> — add them up and check.',
        'Going the other way, one degree stands for <span class="m">total ÷ 360</span> '
        'people.',
        'A stem-and-leaf keeps every original value, so it gives the range exactly; '
        'a grouped table does not.',
        'The midpoint of the class <span class="m">a–b</span> is '
        '<span class="m">(a + b) ÷ 2</span>.',
        'In a histogram with unequal classes the <em>area</em> is the frequency: '
        '<span class="m">frequency = width × frequency density</span>.',
        'An axis that does not start at zero exaggerates differences. Say so when you '
        'see one.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
