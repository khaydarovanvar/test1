# -*- coding: utf-8 -*-
"""Questions for topic 38 of Grade 8 algebra — the basic principle of counting."""

from .common import M

S = M

Q_FOCUS = [
    dict(q='A shirt comes in ' + S('4') + ' colours and ' + S('3') + ' sizes. How '
           'many shirts are there?', a=S('12'), check=('simp', '4*3', '12')),
    dict(q='A code is a letter from ' + S('A–E') + ' then a digit from ' + S('0–9')
           + '. How many codes?', a=S('50'), check=('simp', '5*10', '50')),
    dict(q='How many three-digit numbers are there altogether?', a=S('900'),
         check=('simp', '9*10*10', '900')),
    dict(q='How many three-digit numbers are even?', a=S('450'),
         check=('simp', '9*10*5', '450')),
    dict(q='A bag holds ' + S('5') + ' pens and another holds ' + S('7')
           + ' pencils. In how many ways can one of each be taken?', a=S('35'),
         check=('simp', '5*7', '35')),
    dict(q='In how many ways can one pen or one pencil be taken from those two bags?',
         a=S('12'), check=('simp', '5+7', '12')),
    dict(q='A number plate is ' + S('2') + ' letters then ' + S('3')
           + ' digits, repeats allowed, from ' + S('26') + ' letters. How many '
           'plates?', a=S('676 000'), check=('simp', '26**2*10**3', '676000')),
    dict(q='Write ' + S('5!') + ' as a number.', a=S('120'),
         check=('simp', 'factorial(5)', '120')),
    dict(q='Write ' + S('6!') + ' ÷ ' + S('4!') + ' as a number.', a=S('30'),
         check=('simp', 'factorial(6)/factorial(4)', '30')),
    dict(q='In how many orders can ' + S('4') + ' different cards be dealt?',
         a=S('24'), check=('simp', 'factorial(4)', '24')),
]

Q_PRACTICE = [
    dict(q='How many four-digit PIN codes are there, digits repeatable?',
         a=S('10 000'), check=('simp', '10**4', '10000')),
    dict(q='How many four-digit PIN codes have all four digits different?',
         a=S('5040'), check=('simp', '10*9*8*7', '5040')),
    dict(q='How many four-digit PIN codes have at least two digits the same?',
         a=S('4960'), check=('simp', '10**4-10*9*8*7', '4960')),
    dict(q='How many three-digit numbers have no digit ' + S('0') + '?', a=S('729'),
         check=('simp', '9**3', '729')),
    dict(q='How many three-digit numbers are divisible by ' + S('5') + '?',
         a=S('180'), check=('simp', '9*10*2', '180')),
    dict(q='From ' + S('8') + ' candidates, in how many ways can a chair, a secretary '
           'and a treasurer be chosen (all different people)?', a=S('336'),
         check=('simp', '8*7*6', '336')),
    dict(q='A spinner with ' + S('4') + ' sectors is spun ' + S('3') + ' times. How '
           'many outcomes?', a=S('64'), check=('simp', '4**3', '64')),
    dict(q='How many ways can ' + S('6') + ' people be seated on ' + S('6')
           + ' chairs in a row?', a=S('720'), check=('simp', 'factorial(6)', '720')),
    dict(q='How many ways can ' + S('3') + ' of ' + S('6') + ' people be seated on '
           + S('3') + ' chairs in a row?', a=S('120'),
         check=('simp', '6*5*4', '120')),
    dict(q='A lock has ' + S('3') + ' wheels, each with the digits ' + S('0–9')
           + '. How many settings must be tried in the worst case?', a=S('1000'),
         check=('simp', '10**3', '1000')),
]

Q_CHALLENGE = [
    dict(q='How many four-digit numbers are odd and have no repeated digit?',
         a=S('2240'), check=('custom', 'four_digit_odd_distinct')),
    dict(q='How many three-digit numbers have at least one digit ' + S('5') + '?',
         a=S('252'), check=('custom', 'three_digit_has_five')),
    dict(q='A committee of ' + S('3') + ' is chosen from ' + S('5') + ' teachers and '
           + S('6') + ' students, with at least one teacher. How many committees?',
         a=S('145'), check=('simp', 'binomial(11,3)-binomial(6,3)', '145')),
    dict(q='How many ways can ' + S('5') + ' people sit in a row if one particular '
           'person must sit at an end?', a=S('48'),
         check=('simp', '2*factorial(4)', '48')),
    dict(q='How many ways can ' + S('5') + ' people sit in a row if two particular '
           'people must not sit together?', a=S('72'),
         check=('simp', 'factorial(5)-factorial(4)*2', '72')),
    dict(q='Flags are made of ' + S('3') + ' horizontal stripes chosen from ' + S('5')
           + ' colours, with no two neighbouring stripes the same. How many flags?',
         a=S('80'), check=('simp', '5*4*4', '80')),
    dict(q='How many paths run from the bottom-left to the top-right corner of a '
           + S('4 × 3') + ' grid of streets, moving only right or up?', a=S('35'),
         check=('simp', 'binomial(7,3)', '35')),
    dict(q='How many whole numbers from ' + S('1') + ' to ' + S('1000')
           + ' are divisible by ' + S('3') + ' or by ' + S('5') + '?', a=S('467'),
         check=('simp', 'floor(1000/3)+floor(1000/5)-floor(1000/15)', '467')),
    dict(q='A password is ' + S('4') + ' characters from ' + S('26')
           + ' lower-case letters and ' + S('10') + ' digits, and must contain at '
           'least one digit. How many passwords?', a=S('1 222 640'),
         check=('simp', '36**4-26**4', '1222640')),
    dict(q='How many ways can the letters of ' + S('LEVEL') + ' be arranged?',
         a=S('30'), check=('simp',
                           'factorial(5)/(factorial(2)*factorial(2))', '30')),
]

Q_BEYOND = [
    dict(q='How many whole numbers from ' + S('1') + ' to ' + S('1000')
           + ' are divisible by none of ' + S('2, 3') + ' and ' + S('5') + '?',
         a=S('266'), check=('custom', 'coprime_to_30')),
    dict(q='In how many ways can ' + S('8') + ' people sit round a circular table if '
           'two of them refuse to sit next to each other?', a=S('3600'),
         check=('simp', 'factorial(7)-2*factorial(6)', '3600')),
    dict(q='The digits ' + S('1, 2, 3, 4, 5') + ' are each used once to make a '
           'five-digit number. How many of those numbers are divisible by ' + S('4')
           + '?', a=S('24'), check=('custom', 'perm12345_div4')),
    dict(q='How many ways can ' + S('3') + ' letters be put into ' + S('3')
           + ' addressed envelopes so that no letter is in its own envelope?',
         a=S('2'), check=('custom', 'derangement_three')),
    dict(q='How many ways can ' + S('4') + ' letters be put into ' + S('4')
           + ' addressed envelopes so that none is in its own envelope?', a=S('9'),
         check=('custom', 'derangement_four')),
    dict(q='A ' + S('2 × n') + ' strip is tiled with ' + S('1 × 2')
           + ' dominoes. How many tilings for ' + S('n = 10') + '?', a=S('89'),
         check=('custom', 'domino_strip_ten')),
    dict(q='How many subsets of ' + S('{1, 2, …, 10}') + ' contain no two '
           'consecutive numbers?', a=S('144'), check=('custom', 'no_two_consecutive')),
    dict(q='How many ' + S('6') + '-digit numbers have at least one digit '
           + S('0') + '?', a=S('368 559') + ' — all ' + S('900 000') + ' of them less '
           'the ' + S('531 441') + ' with no zero.',
         check=('simp', '9*10**5 - 9**6', '368559')),
    dict(q='How many ways can ' + S('10') + ' identical balls go into ' + S('4')
           + ' different boxes with no box empty?', a=S('84'),
         check=('simp', 'binomial(9,3)', '84')),
    dict(q='How many triples ' + S('(a, b, c)') + ' of positive whole numbers satisfy '
           + S('a + b + c = 12') + '?', a=S('55'),
         check=('simp', 'binomial(11,2)', '55')),
    dict(q='Prove that among any ' + S('n + 1') + ' numbers chosen from '
           + S('1') + ' to ' + S('2n') + ', two are consecutive.',
         a='Pair them as ' + S('(1,2), (3,4), …, (2n−1, 2n)') + ' — '
           + S('n') + ' pairs. With ' + S('n + 1') + ' numbers two share a pair, and '
           'the two in a pair are consecutive.',
         check=('bool', '(11 > 10) & Eq(2*10, 20)')),
    dict(q='How many ways can ' + S('5') + ' different prizes be given to ' + S('3')
           + ' children if a child may get any number, including none?', a=S('243'),
         check=('simp', '3**5', '243')),
    dict(q='How many ways can ' + S('5') + ' different prizes be given to ' + S('3')
           + ' children so that every child gets at least one?', a=S('150'),
         check=('custom', 'onto_five_three')),
    dict(q='How many ' + S('4') + '-digit numbers read the same forwards and '
           'backwards, and how many of those are divisible by ' + S('11') + '?',
         a=S('90') + ' palindromes, and all ' + S('90') + ' of them.',
         check=('custom', 'palindrome_four_eleven')),
    dict(q='Ten chairs stand in a row and ' + S('4') + ' people sit down with no two '
           'next to each other. In how many ways?', a=S('840'),
         check=('simp', 'binomial(7,4)*factorial(4)', '840')),
]

TOPIC = dict(
    key='alg-38', number=38, unit='Unit 6 · Data, counting and chance', lessons='86–88',
    title='The basic principle of counting',
    subtitle='Multiply the stages, add the alternatives — and when the condition is '
             'awkward, count the opposite instead.',
    uz='Algebra 8, lessons 86–88', cam='Cambridge Stage 9 · 10.2',
    keywords=['counting principle', 'multiplication rule', 'addition rule',
              'independent choices', 'factorial', 'permutation', 'combination',
              'complementary counting', 'at least one', 'total number of ways'],
    remember=[
        'Stages one after another: <strong>multiply</strong>. Alternatives instead of '
        'one another: <strong>add</strong>.',
        'Order matters and nothing repeats: '
        '<span class="m">n(n − 1)(n − 2)…</span>, as many factors as places.',
        'Order does not matter: divide by the number of orders of what you chose — '
        '<span class="m">C(n, r) = n! ÷ (r!(n − r)!)</span>.',
        '&ldquo;At least one&rdquo; is nearly always easier as '
        '<span class="m">total − none</span>.',
        'Watch the first digit: a number may not begin with '
        '<span class="m">0</span>, so that stage has one choice fewer.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
