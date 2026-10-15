# -*- coding: utf-8 -*-
"""Questions for topic 42 of Grade 8 algebra — revision of ratio and proportion."""

from .common import F, M

S = M

Q_FOCUS = [
    dict(q='Simplify the ratio ' + S('18 : 24') + '.', a=S('3 : 4'),
         check=('simp', 'Rational(18,24)', 'Rational(3,4)')),
    dict(q='Share ' + S('60') + ' in the ratio ' + S('2 : 3') + '.',
         a=S('24') + ' and ' + S('36'), check=('simp', '60*2/5', '24')),
    dict(q='Share ' + S('84') + ' in the ratio ' + S('1 : 2 : 4') + '.',
         a=S('12, 24, 48'), check=('simp', '84/7 + 2*84/7 + 4*84/7', '84')),
    dict(q='Increase ' + S('80') + ' by ' + S('15%') + '.', a=S('92'),
         check=('simp', '80*Rational(115,100)', '92')),
    dict(q='Decrease ' + S('250') + ' by ' + S('12%') + '.', a=S('220'),
         check=('simp', '250*Rational(88,100)', '220')),
    dict(q='A car travels ' + S('180') + ' km in ' + S('3') + ' hours. Find its '
           'average speed.', a=S('60') + ' km/h', check=('simp', '180/3', '60')),
    dict(q='Convert ' + S('54') + ' km/h to metres per second.', a=S('15') + ' m/s',
         check=('simp', '54*1000/3600', '15')),
    dict(q='If ' + S('5') + ' pens cost ' + S('12 500') + ' so‘m, find the cost of '
           + S('8') + '.', a=S('20 000') + ' so‘m',
         check=('simp', '12500/5*8', '20000')),
    dict(q='Two quantities are in direct proportion and ' + S('y = 12') + ' when '
           + S('x = 3') + '. Find ' + S('y') + ' when ' + S('x = 7') + '.',
         a=S('28'), check=('simp', '4*7', '28')),
    dict(q='Write ' + S('0.35') + ' as a percentage and as a fraction in lowest '
           'terms.', a=S('35%') + ', ' + S(F(7, 20)),
         check=('simp', 'Rational(35,100)', 'Rational(7,20)')),
]

Q_PRACTICE = [
    dict(q='A sum is shared in the ratio ' + S('3 : 5') + ' and the larger share is '
           + S('45') + '. Find the total.', a=S('72'),
         check=('solveset', 'Eq(5*x/8, 45)', 'FiniteSet(72)')),
    dict(q='After a ' + S('20%') + ' discount a coat costs ' + S('480 000')
           + ' so‘m. Find the original price.', a=S('600 000') + ' so‘m',
         check=('solveset', 'Eq(Rational(80,100)*x, 480000)', 'FiniteSet(600000)')),
    dict(q='A price rises by ' + S('10%') + ' and then falls by ' + S('10%')
           + '. What is the overall change?', a='A fall of ' + S('1%') + '.',
         check=('simp', 'Rational(110,100)*Rational(90,100)', 'Rational(99,100)')),
    dict(q='Three workers build a wall in ' + S('8') + ' days. How long would '
           + S('4') + ' take, working at the same rate?', a=S('6') + ' days',
         check=('simp', '3*8/4', '6')),
    dict(q='A map has scale ' + S('1 : 50 000') + '. How far on the ground is '
           + S('3.5') + ' cm on the map?', a=S('1.75') + ' km',
         check=('simp', 'Rational(35,10)*50000/100000', 'Rational(7,4)')),
    dict(q='Divide ' + S('126') + ' in the ratio ' + S('2 : 3 : 4') + '.',
         a=S('28, 42, 56'), check=('simp', '126*2/9', '28')),
    dict(q='If ' + S('y') + ' is inversely proportional to ' + S('x')
           + ' and ' + S('y = 6') + ' when ' + S('x = 4') + ', find ' + S('y')
           + ' when ' + S('x = 3') + '.', a=S('8'), check=('simp', '24/3', '8')),
    dict(q='A journey of ' + S('210') + ' km takes ' + S('2') + ' hours '
           + S('30') + ' minutes. Find the average speed.', a=S('84') + ' km/h',
         check=('simp', '210/Rational(5,2)', '84')),
    dict(q='Two numbers are in the ratio ' + S('4 : 7') + ' and differ by '
           + S('18') + '. Find them.', a=S('24') + ' and ' + S('42'),
         check=('solveset', 'Eq(7*x-4*x, 18)', 'FiniteSet(6)')),
    dict(q='What percentage of ' + S('240') + ' is ' + S('54') + '?', a=S('22.5%'),
         check=('simp', '54/240*100', 'Rational(45,2)')),
]

Q_CHALLENGE = [
    dict(q='The ratio of boys to girls in a class is ' + S('3 : 4') + '. Four more '
           'girls join and the ratio becomes ' + S('3 : 5') + '. How many boys?',
         a=S('12'), check=('custom', 'ratio_boys_girls')),
    dict(q='A sum of money is shared so that ' + S('A') + ' gets twice ' + S('B')
           + ' and ' + S('B') + ' gets three times ' + S('C') + '. If ' + S('C')
           + ' gets ' + S('5000') + ' so‘m, find the total.', a=S('50 000')
           + ' so‘m', check=('simp', '5000*(1+3+6)', '50000')),
    dict(q='A price is increased by ' + S('x%') + ' and then decreased by '
           + S('x%') + ', ending at ' + S('96%') + ' of the start. Find ' + S('x')
           + '.', a=S('20'), check=('custom', 'up_down_96')),
    dict(q='Two taps fill a tank in ' + S('6') + ' and ' + S('4') + ' hours. How long '
           'together?', a=S('2.4') + ' hours',
         check=('solveset', 'Eq(1/6 + 1/4, 1/x)', 'FiniteSet(Rational(12,5))')),
    dict(q='A car does ' + S('60') + ' km/h out and ' + S('40') + ' km/h back over '
           'the same road. Find the average speed for the whole journey.',
         a=S('48') + ' km/h', check=('simp', '2*60*40/(60+40)', '48')),
    dict(q='Alloy ' + S('A') + ' is ' + S('3') + ' parts copper to ' + S('1')
           + ' part tin; alloy ' + S('B') + ' is ' + S('1') + ' to ' + S('3')
           + '. How much of each gives ' + S('8') + ' kg that is half copper?',
         a=S('4') + ' kg of each.',
         check=('solveset', 'Eq(Rational(3,4)*x + Rational(1,4)*(8-x), 4)',
                'FiniteSet(4)')),
    dict(q='The ratio ' + S('a : b') + ' is ' + S('2 : 3') + ' and ' + S('b : c')
           + ' is ' + S('5 : 7') + '. Find ' + S('a : c') + '.', a=S('10 : 21'),
         check=('simp', 'Rational(2,3)*Rational(5,7)', 'Rational(10,21)')),
    dict(q='A shop makes ' + S('25%') + ' profit on the cost price. What percentage '
           'of the selling price is the profit?', a=S('20%'),
         check=('simp', 'Rational(25,125)*100', '20')),
    dict(q='If ' + S('5') + ' machines make ' + S('300') + ' parts in ' + S('4')
           + ' hours, how many parts do ' + S('8') + ' machines make in ' + S('6')
           + ' hours?', a=S('720'), check=('simp', '300/(5*4)*8*6', '720')),
    dict(q='A mixture of ' + S('20') + ' litres is ' + S('40%') + ' acid. How much '
           'pure acid must be added to make it ' + S('50%') + '?', a=S('4')
           + ' litres',
         check=('solveset', 'Eq((8+x)/(20+x), Rational(1,2))', 'FiniteSet(4)')),
]

Q_BEYOND = [
    dict(q='A train passes a ' + S('240') + ' m platform in ' + S('20')
           + ' seconds and a man standing on it in ' + S('8') + ' seconds. Find the '
           'length and the speed of the train.',
         a=S('160') + ' m at ' + S('20') + ' m/s',
         check=('custom', 'train_platform')),
    dict(q='Two cyclists ' + S('60') + ' km apart ride towards each other at '
           + S('18') + ' and ' + S('12') + ' km/h. A fly leaves the first at '
           + S('30') + ' km/h, bounces between them and returns each time. How far '
           'does the fly travel before they meet?', a=S('60') + ' km',
         check=('simp', '30*60/(18+12)', '60')),
    dict(q='A sum is shared between three people so that the first gets '
           + S(F(1, 2)) + ' of the total, the second ' + S(F(1, 3))
           + ' and the third ' + S('5000') + ' so‘m. Find the total.',
         a=S('30 000') + ' so‘m',
         check=('solveset', 'Eq(x - x/2 - x/3, 5000)', 'FiniteSet(30000)')),
    dict(q='A ' + S('30%') + ' alcohol solution is mixed with a ' + S('60%')
           + ' one to make ' + S('50') + ' litres at ' + S('40%')
           + '. How much of each?', a=S('33') + F(1, 3) + ' litres of the first, '
           + S('16') + F(2, 3) + ' of the second.',
         check=('solveset',
                'Eq(Rational(30,100)*x + Rational(60,100)*(50-x), Rational(40,100)*50)',
                'FiniteSet(Rational(100,3))')),
    dict(q='The ratio of two numbers is ' + S('5 : 8') + '. Adding ' + S('6')
           + ' to each makes the ratio ' + S('2 : 3') + '. Find the numbers.',
         a=S('30') + ' and ' + S('48'), check=('custom', 'ratio_add_six')),
    dict(q='A man walks part of a journey at ' + S('4') + ' km/h and runs the rest at '
           + S('12') + ' km/h. The whole ' + S('12') + ' km takes ' + S('2')
           + ' hours. How far did he walk?', a=S('6') + ' km',
         check=('solveset', 'Eq(x/4 + (12-x)/12, 2)', 'FiniteSet(6)')),
    dict(q='Three pipes fill a tank in ' + S('10, 15') + ' and ' + S('30')
           + ' hours. All three run for ' + S('2') + ' hours, then the third is shut '
           'off. How long in all?', a=S('5.6') + ' hours',
         check=('custom', 'three_pipes')),
    dict(q='A shopkeeper marks up by ' + S('40%') + ' then gives a discount of '
           + S('25%') + '. Find the overall profit as a percentage of cost.',
         a=S('5%'), check=('simp', 'Rational(140,100)*Rational(75,100)*100-100', '5')),
    dict(q='If ' + S(F('a', 'b') + ' = ' + F('c', 'd')) + ', show that '
           + S(F('a + b', 'b') + ' = ' + F('c + d', 'd')) + '.',
         a='Add ' + S('1') + ' to both sides of the first.',
         check=('custom', 'ratio_addendo')),
    dict(q='Two numbers have sum ' + S('S') + ' and ratio ' + S('p : q')
           + '. Write each number in terms of ' + S('S, p') + ' and ' + S('q')
           + '.', a=S(F('pS', 'p + q')) + ' and ' + S(F('qS', 'p + q')),
         check=('simp', 'a*A/(a+b) + b*A/(a+b)', 'A')),
    dict(q='A tank has a filling pipe that takes ' + S('6') + ' hours and a drain '
           'that empties it in ' + S('9') + ' hours. Both are open. How long to '
           'fill?', a=S('18') + ' hours',
         check=('solveset', 'Eq(1/6 - 1/9, 1/x)', 'FiniteSet(18)')),
    dict(q='A fraction has value ' + S(F(2, 5)) + '. Adding ' + S('4')
           + ' to the numerator and ' + S('1') + ' to the denominator gives '
           + S(F(1, 2)) + '. Find the fraction.', a=S(F(14, 35)),
         check=('custom', 'fraction_two_fifths')),
    dict(q='The price of a book rises by ' + S('25%') + '. By what percentage must '
           'it then fall to return to the original price?', a=S('20%'),
         check=('solveset', 'Eq(Rational(125,100)*(1-x), 1)',
                'FiniteSet(Rational(1,5))')),
    dict(q='Two candles of the same length burn out in ' + S('4') + ' and ' + S('3')
           + ' hours. After how long is the first twice as long as the second?',
         a=S('2') + F(2, 5) + ' hours',
         check=('solveset', 'Eq(1 - x/4, 2*(1 - x/3))', 'FiniteSet(Rational(12,5))')),
    dict(q='A sum of ' + S('100') + ' coins of ' + S('100') + ', ' + S('200')
           + ' and ' + S('500') + ' so‘m is worth ' + S('20 000') + ' so‘m, with '
           'equal numbers of the ' + S('200') + ' and ' + S('500')
           + ' coins. How many of each?',
         a=S('60') + ' hundreds and ' + S('20') + ' of each of the others.',
         check=('custom', 'coin_mix')),
]

TOPIC = dict(
    key='alg-42', number=42, unit='Unit 7 · Annual revision', lessons='97–98',
    title='Revision · Ratio, proportion and rates',
    subtitle='Sharing, percentage change, speed and work — and the multiplier that '
             'turns each of them into one line of algebra.',
    uz='Algebra 8, lessons 97–98', cam='Cambridge Stage 9 · 1.3, 6.1',
    keywords=['ratio', 'share in a given ratio', 'direct proportion',
              'inverse proportion', 'percentage increase', 'percentage decrease',
              'multiplier', 'reverse percentage', 'speed', 'rate of work', 'scale'],
    remember=[
        'To share in the ratio <span class="m">p : q</span>, divide by '
        '<span class="m">p + q</span> and multiply back up.',
        'Percentage change is a <em>multiplier</em>: up '
        '<span class="m">15%</span> is <span class="m">× 1.15</span>, down '
        '<span class="m">12%</span> is <span class="m">× 0.88</span>. Two changes '
        'multiply, they do not add.',
        'To undo a percentage change, <strong>divide</strong> by the multiplier — '
        'never take the same percentage off again.',
        'Direct proportion: <span class="m">y = kx</span>. Inverse: '
        '<span class="m">y = k ÷ x</span>. Find <span class="m">k</span> from the '
        'pair you are given.',
        'Work rates add: in one hour the taps fill '
        '<span class="m">1/a + 1/b</span> of the tank.',
        'Average speed is <em>total distance ÷ total time</em>, never the average of '
        'two speeds.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
