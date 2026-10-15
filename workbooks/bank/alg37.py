# -*- coding: utf-8 -*-
"""Questions for topic 37 of Grade 8 algebra — counting by listing."""

from .common import M

S = M

Q_FOCUS = [
    dict(q='List every two-digit number that can be made from the digits '
           + S('1, 2') + ' and ' + S('3') + ' with no digit repeated. How many are '
           'there?', a=S('6'), check=('simp', '3*2', '6')),
    dict(q='How many two-digit numbers can be made from ' + S('1, 2, 3')
           + ' if a digit may be repeated?', a=S('9'), check=('simp', '3*3', '9')),
    dict(q='In how many orders can ' + S('3') + ' books be put on a shelf?',
         a=S('6'), check=('simp', 'factorial(3)', '6')),
    dict(q='How many ways can a captain and a vice-captain be chosen from '
           + S('4') + ' players?', a=S('12'), check=('simp', '4*3', '12')),
    dict(q='How many different pairs can be chosen from ' + S('4') + ' players?',
         a=S('6'), check=('simp', 'binomial(4,2)', '6')),
    dict(q='A coin is tossed twice. List the outcomes. How many are there?',
         a=S('4') + ' — ' + S('HH, HT, TH, TT'), check=('simp', '2**2', '4')),
    dict(q='A coin is tossed ' + S('3') + ' times. How many outcomes?', a=S('8'),
         check=('simp', '2**3', '8')),
    dict(q='Two dice are rolled. How many outcomes?', a=S('36'),
         check=('simp', '6*6', '36')),
    dict(q='In how many ways can ' + S('2') + ' of the ' + S('5')
           + ' letters of ' + S('MATHS') + ' be chosen?', a=S('10'),
         check=('simp', 'binomial(5,2)', '10')),
    dict(q='How many three-letter codes use the letters ' + S('A, B') + ' only, '
           'repeats allowed?', a=S('8'), check=('simp', '2**3', '8')),
]

Q_PRACTICE = [
    dict(q='How many three-digit numbers use the digits ' + S('1, 2, 3, 4')
           + ' with no repeats?', a=S('24'), check=('simp', '4*3*2', '24')),
    dict(q='How many of those three-digit numbers are even?', a=S('12'),
         check=('simp', '2*3*2', '12')),
    dict(q='In how many orders can ' + S('5') + ' people stand in a queue?',
         a=S('120'), check=('simp', 'factorial(5)', '120')),
    dict(q='From ' + S('6') + ' students, how many teams of ' + S('3')
           + ' can be chosen?', a=S('20'), check=('simp', 'binomial(6,3)', '20')),
    dict(q='Two dice are rolled. In how many ways do they total ' + S('7') + '?',
         a=S('6'), check=('simp', '6', '6')),
    dict(q='How many two-digit numbers have both digits odd?', a=S('25'),
         check=('simp', '5*5', '25')),
    dict(q='How many two-digit numbers have digits that add to ' + S('9') + '?',
         a=S('9'), check=('custom', 'digit_sum_nine')),
    dict(q='A menu has ' + S('3') + ' starters, ' + S('4') + ' mains and ' + S('2')
           + ' puddings. How many three-course meals?', a=S('24'),
         check=('simp', '3*4*2', '24')),
    dict(q='How many diagonals has a pentagon?', a=S('5'),
         check=('simp', 'binomial(5,2)-5', '5')),
    dict(q='A coin is tossed ' + S('4') + ' times. In how many outcomes are there '
           'exactly two heads?', a=S('6'), check=('simp', 'binomial(4,2)', '6')),
]

Q_CHALLENGE = [
    dict(q='How many four-digit numbers can be made from ' + S('0, 1, 2, 3')
           + ' with no repeats? (A number may not start with ' + S('0') + '.)',
         a=S('18'), check=('simp', '3*factorial(3)', '18')),
    dict(q='How many of the numbers ' + S('1') + ' to ' + S('100')
           + ' contain the digit ' + S('7') + '?', a=S('19'),
         check=('custom', 'contains_seven_100')),
    dict(q='Three dice are rolled. In how many ways do they total ' + S('6') + '?',
         a=S('10'), check=('custom', 'three_dice_six')),
    dict(q='From ' + S('5') + ' boys and ' + S('4') + ' girls, how many teams of '
           + S('3') + ' have at least one girl?', a=S('74'),
         check=('simp', 'binomial(9,3)-binomial(5,3)', '74')),
    dict(q='How many ways can the letters of ' + S('BOOK') + ' be arranged?',
         a=S('12'), check=('simp', 'factorial(4)/factorial(2)', '12')),
    dict(q='Five people sit in a row but two of them, ' + S('A') + ' and ' + S('B')
           + ', insist on sitting together. How many arrangements?', a=S('48'),
         check=('simp', 'factorial(4)*2', '48')),
    dict(q='How many three-digit numbers have all digits different and all odd?',
         a=S('60'), check=('simp', '5*4*3', '60')),
    dict(q='A path on a grid goes ' + S('3') + ' steps right and ' + S('2')
           + ' steps up, in any order. How many paths?', a=S('10'),
         check=('simp', 'binomial(5,2)', '10')),
    dict(q='How many subsets has a set of ' + S('5') + ' elements, the empty one '
           'included?', a=S('32'), check=('simp', '2**5', '32')),
    dict(q='Two cards are drawn from ' + S('10') + ' numbered ' + S('1') + ' to '
           + S('10') + '. In how many ways is the sum even?', a=S('20'),
         check=('simp', 'binomial(5,2)+binomial(5,2)', '20')),
]

Q_BEYOND = [
    dict(q='How many of the numbers ' + S('1') + ' to ' + S('1000')
           + ' contain no digit ' + S('7') + '?', a=S('729'),
         check=('custom', 'no_seven_1000')),
    dict(q='How many four-digit numbers have digits in strictly increasing order?',
         a=S('126'), check=('simp', 'binomial(9,4)', '126')),
    dict(q='How many four-digit numbers have digits in non-decreasing order?',
         a=S('495'), check=('custom', 'nondecreasing_four')),
    dict(q='In how many ways can ' + S('10') + ' be written as a sum of positive '
           'whole numbers in order, e.g. ' + S('3 + 7') + ' and ' + S('7 + 3')
           + ' counting separately?', a=S('512'), check=('simp', '2**9', '512')),
    dict(q='Eight people sit round a circular table. How many seatings are different '
           'if rotations count as the same?', a=S('5040'),
         check=('simp', 'factorial(7)', '5040')),
    dict(q='How many ways can ' + S('MISSISSIPPI') + ' be arranged?', a=S('34 650'),
         check=('simp',
                'factorial(11)/(factorial(4)*factorial(4)*factorial(2))', '34650')),
    dict(q='How many triangles have vertices among ' + S('10') + ' points on a '
           'circle?', a=S('120'), check=('simp', 'binomial(10,3)', '120')),
    dict(q='Ten points lie on a circle. How many points of intersection do the chords '
           'make inside, if no three chords meet at a point?', a=S('210'),
         check=('simp', 'binomial(10,4)', '210')),
    dict(q='How many ways can ' + S('5') + ' identical sweets be given to ' + S('3')
           + ' children, some possibly getting none?', a=S('21'),
         check=('simp', 'binomial(7,2)', '21')),
    dict(q='How many ways can ' + S('5') + ' identical sweets be given to ' + S('3')
           + ' children if each gets at least one?', a=S('6'),
         check=('simp', 'binomial(4,2)', '6')),
    dict(q='Six people shake hands, each with everyone else exactly once. How many '
           'handshakes, and in how many orders could the handshakes have happened?',
         a=S('15') + ' handshakes, ' + S('15!') + ' orders.',
         check=('simp', 'binomial(6,2)', '15')),
    dict(q='How many five-digit numbers have digits adding to ' + S('43') + '?',
         a=S('15'), check=('custom', 'digits_sum_43')),
    dict(q='A ' + S('4 × 4') + ' grid of squares. How many rectangles (of any size, '
           'sides along the grid lines) does it contain?', a=S('100'),
         check=('simp', 'binomial(5,2)**2', '100')),
    dict(q='In how many ways can ' + S('8') + ' people be split into ' + S('4')
           + ' pairs?', a=S('105'),
         check=('simp', 'factorial(8)/(2**4*factorial(4))', '105')),
    dict(q='A ' + S('3 × 3') + ' grid is to be filled with ' + S('0') + 's and '
           + S('1') + 's so that every row and every column has an even number of '
           + S('1') + 's. How many fillings are there?', a=S('16'),
         check=('custom', 'even_parity_grid')),
]

TOPIC = dict(
    key='alg-37', number=37, unit='Unit 6 · Data, counting and chance', lessons='83–85',
    title='Elements of combinatorics — counting by listing',
    subtitle='Before any formula: write the possibilities down in a system, and count '
             'what you wrote.',
    uz='Algebra 8, lessons 83–85', cam='Cambridge Stage 9 · 10.1',
    keywords=['combinatorics', 'list systematically', 'outcome', 'sample space',
              'tree diagram', 'arrangement', 'selection', 'order matters',
              'with repeats', 'without repeats', 'factorial'],
    remember=[
        'List in a system — smallest first, or first letter fixed then the rest — and '
        'nothing is missed or double-counted.',
        'Ask whether <em>order matters</em>. <span class="m">AB</span> and '
        '<span class="m">BA</span> are two arrangements but one selection.',
        'Ask whether <em>repeats are allowed</em>. Three letters from '
        '<span class="m">{A, B}</span> with repeats gives '
        '<span class="m">2 × 2 × 2</span>; without repeats it gives nothing.',
        'A tree diagram is a list drawn sideways. Use one when there are stages.',
        '<span class="m">n!</span> is the number of orders of '
        '<span class="m">n</span> different things: '
        '<span class="m">3! = 6</span>, <span class="m">5! = 120</span>.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
