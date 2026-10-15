# -*- coding: utf-8 -*-
"""Questions for topic 43 of Grade 8 algebra — revision of probability."""

from .common import F, M

S = M

Q_FOCUS = [
    dict(q='A fair die is rolled. Find ' + S('P(4)') + '.', a=S(F(1, 6)),
         check=('simp', 'Rational(1,6)', 'Rational(1,6)')),
    dict(q='A fair die is rolled. Find ' + S('P(even)') + '.', a=S(F(1, 2)),
         check=('simp', 'Rational(3,6)', 'Rational(1,2)')),
    dict(q='A bag has ' + S('3') + ' red and ' + S('5') + ' blue balls. Find '
           + S('P(red)') + '.', a=S(F(3, 8)),
         check=('simp', 'Rational(3,8)', 'Rational(3,8)')),
    dict(q='From the same bag, find ' + S('P(not red)') + '.', a=S(F(5, 8)),
         check=('simp', '1-Rational(3,8)', 'Rational(5,8)')),
    dict(q='A coin is tossed twice. Find ' + S('P(two heads)') + '.', a=S(F(1, 4)),
         check=('simp', 'Rational(1,2)**2', 'Rational(1,4)')),
    dict(q='A card is drawn from ' + S('1') + ' to ' + S('10') + '. Find '
           + S('P(prime)') + '.', a=S(F(2, 5)),
         check=('simp', 'Rational(4,10)', 'Rational(2,5)')),
    dict(q='The probability of rain is ' + S('0.3') + '. Find the probability of no '
           'rain.', a=S('0.7'),
         check=('simp', '1-Rational(3,10)', 'Rational(7,10)')),
    dict(q='A spinner has ' + S('8') + ' equal sectors, ' + S('3') + ' of them red. '
           'Find ' + S('P(red)') + '.', a=S(F(3, 8)),
         check=('simp', 'Rational(3,8)', 'Rational(3,8)')),
    dict(q='A die is rolled ' + S('60') + ' times. How many sixes are expected?',
         a=S('10'), check=('simp', '60*Rational(1,6)', '10')),
    dict(q='Two dice are rolled. Find ' + S('P(total 7)') + '.', a=S(F(1, 6)),
         check=('simp', 'Rational(6,36)', 'Rational(1,6)')),
]

Q_PRACTICE = [
    dict(q='Two dice are rolled. Find ' + S('P(double)') + '.', a=S(F(1, 6)),
         check=('simp', 'Rational(6,36)', 'Rational(1,6)')),
    dict(q='Two dice are rolled. Find ' + S('P(total > 9)') + '.', a=S(F(1, 6)),
         check=('custom', 'p_total_over_nine')),
    dict(q='A bag has ' + S('4') + ' red and ' + S('6') + ' white balls. Two are '
           'taken without replacement. Find ' + S('P(both red)') + '.',
         a=S(F(2, 15)), check=('simp', 'Rational(4,10)*Rational(3,9)',
                               'Rational(2,15)')),
    dict(q='From the same bag, find ' + S('P(one of each colour)') + '.',
         a=S(F(8, 15)), check=('simp', '2*Rational(4,10)*Rational(6,9)',
                               'Rational(8,15)')),
    dict(q='A coin is tossed ' + S('3') + ' times. Find ' + S('P(exactly two heads)')
           + '.', a=S(F(3, 8)),
         check=('simp', 'binomial(3,2)*Rational(1,2)**3', 'Rational(3,8)')),
    dict(q='A coin is tossed ' + S('3') + ' times. Find ' + S('P(at least one head)')
           + '.', a=S(F(7, 8)),
         check=('simp', '1-Rational(1,2)**3', 'Rational(7,8)')),
    dict(q='A letter is chosen from ' + S('MATHEMATICS') + '. Find ' + S('P(M)')
           + '.', a=S(F(2, 11)), check=('simp', 'Rational(2,11)', 'Rational(2,11)')),
    dict(q='The probability a seed grows is ' + S('0.8') + '. Two seeds are planted. '
           'Find the probability both grow.', a=S('0.64'),
         check=('simp', 'Rational(8,10)**2', 'Rational(16,25)')),
    dict(q='A bag has ' + S('x') + ' red and ' + S('8') + ' blue balls and '
           + S('P(red) = ') + S(F(1, 3)) + '. Find ' + S('x') + '.', a=S('4'),
         check=('solveset', 'Eq(x/(x+8), Rational(1,3))', 'FiniteSet(4)')),
    dict(q='Two events have ' + S('P(A) = 0.4') + ' and ' + S('P(B) = 0.5')
           + ' and cannot both happen. Find ' + S('P(A or B)') + '.', a=S('0.9'),
         check=('simp', 'Rational(4,10)+Rational(5,10)', 'Rational(9,10)')),
]

Q_CHALLENGE = [
    dict(q='Three coins are tossed. Find ' + S('P(more heads than tails)') + '.',
         a=S(F(1, 2)), check=('custom', 'p_more_heads')),
    dict(q='Two dice are rolled. Find ' + S('P(product is even)') + '.',
         a=S(F(3, 4)), check=('custom', 'p_product_even')),
    dict(q='A bag has ' + S('5') + ' red and ' + S('3') + ' green balls. Three are '
           'taken without replacement. Find ' + S('P(all red)') + '.',
         a=S(F(5, 28)),
         check=('simp', 'binomial(5,3)/binomial(8,3)', 'Rational(5,28)')),
    dict(q='From the same bag, find ' + S('P(at least one green)') + '.',
         a=S(F(23, 28)),
         check=('simp', '1-binomial(5,3)/binomial(8,3)', 'Rational(23,28)')),
    dict(q='A die is rolled twice. Find ' + S('P(second > first)') + '.',
         a=S(F(5, 12)), check=('custom', 'p_second_bigger')),
    dict(q='Three letters are drawn from ' + S('A, B, C, D') + ' without '
           'replacement and written in order. Find ' + S('P(the word begins with A)')
           + '.', a=S(F(1, 4)), check=('simp', 'Rational(6,24)', 'Rational(1,4)')),
    dict(q='Two cards are drawn from ' + S('1') + ' to ' + S('9') + ' without '
           'replacement. Find ' + S('P(the sum is even)') + '.', a=S(F(4, 9)),
         check=('custom', 'p_sum_even_nine')),
    dict(q='A spinner gives ' + S('1') + ' with probability ' + S('p')
           + ' and ' + S('2') + ' with probability ' + S('2p') + ' and nothing else. '
           'Find ' + S('p') + '.', a=S(F(1, 3)),
         check=('solveset', 'Eq(x+2*x, 1)', 'FiniteSet(Rational(1,3))')),
    dict(q='The probability a shot scores is ' + S('0.6') + '. Three shots are taken. '
           'Find the probability of exactly two scores.', a=S('0.432'),
         check=('simp', 'binomial(3,2)*Rational(6,10)**2*Rational(4,10)',
                'Rational(54,125)')),
    dict(q='A bag has ' + S('n') + ' balls, ' + S('4') + ' of them red, and '
           + S('P(red) = 0.25') + '. A red ball is added. Find the new '
           + S('P(red)') + '.', a=S(F(5, 17)),
         check=('custom', 'bag_add_red')),
]

Q_BEYOND = [
    dict(q='Two dice are rolled. Find the probability that the larger score is '
           + S('5') + '.', a=S(F(1, 4)), check=('custom', 'p_larger_is_five')),
    dict(q='Three dice are rolled. Find ' + S('P(all different)') + '.',
         a=S(F(5, 9)), check=('simp', '6*5*4/6**3', 'Rational(5,9)')),
    dict(q='A coin is tossed ' + S('4') + ' times. Find the probability that heads '
           'and tails alternate.', a=S(F(1, 8)),
         check=('simp', '2/2**4', 'Rational(1,8)')),
    dict(q='Two numbers are chosen at random, without replacement, from ' + S('1')
           + ' to ' + S('10') + '. Find ' + S('P(their product is odd)') + '.',
         a=S(F(2, 9)),
         check=('simp', 'binomial(5,2)/binomial(10,2)', 'Rational(2,9)')),
    dict(q='A bag has ' + S('3') + ' red and ' + S('4') + ' blue balls. Balls are '
           'drawn without replacement until a red appears. Find the probability that '
           'this takes exactly ' + S('3') + ' draws.', a=S(F(6, 35)),
         check=('simp', 'Rational(4,7)*Rational(3,6)*Rational(3,5)',
                'Rational(6,35)')),
    dict(q='Two people each choose a whole number from ' + S('1') + ' to ' + S('5')
           + '. Find ' + S('P(the numbers differ by at most 1)') + '.',
         a=S(F(13, 25)), check=('custom', 'p_differ_by_one')),
    dict(q='Three points are chosen among the ' + S('6') + ' vertices of a regular '
           'hexagon. Find the probability the triangle is equilateral.',
         a=S(F(1, 10)), check=('simp', '2/binomial(6,3)', 'Rational(1,10)')),
    dict(q='Four people each toss a coin. Find the probability that exactly one gets '
           'a result different from the other three.', a=S(F(1, 2)),
         check=('custom', 'p_odd_one_out')),
    dict(q='A fair die is rolled until a six appears. Find the probability that it '
           'takes at most ' + S('3') + ' rolls.', a=S(F(91, 216)),
         check=('simp', '1-Rational(5,6)**3', 'Rational(91,216)')),
    dict(q='Two dice are rolled. Given that the total is even, find the probability '
           'that both scores are even.', a=S(F(1, 2)),
         check=('custom', 'p_both_even_given_even')),
    dict(q='Three cards numbered ' + S('1, 2, 3') + ' are dealt at random into '
           'places ' + S('1, 2, 3') + '. Find the probability that no card is in its '
           'own place.', a=S(F(1, 3)),
         check=('simp', '2/factorial(3)', 'Rational(1,3)')),
    dict(q='A bag has ' + S('2') + ' red and ' + S('2') + ' blue balls. Two are drawn '
           'without replacement. Given that at least one is red, find the probability '
           'that both are red.', a=S(F(1, 5)),
         check=('custom', 'p_both_red_given_one')),
    dict(q='Two players take turns rolling a die; the first to throw a six wins. Find '
           'the probability that the player who starts wins.', a=S(F(6, 11)),
         check=('custom', 'first_player_six')),
    dict(q='Three dice are rolled. Find the probability that the three scores can be '
           'the sides of a triangle.', a=S(F(111, 216)),
         check=('custom', 'p_triangle_dice')),
    dict(q='A ' + S('4') + '-digit PIN is chosen at random. Find the probability that '
           'its digits are all different and in increasing order.', a=S(F(21, 1000)),
         check=('simp', 'binomial(10,4)/10**4', 'Rational(21,1000)')),
]

TOPIC = dict(
    key='alg-43', number=43, unit='Unit 7 · Annual revision', lessons='99–100',
    title='Revision · Probability',
    subtitle='Equally likely outcomes, the complement, two stages with and without '
             'replacement, and the conditional question read carefully.',
    uz='Algebra 8, lessons 99–100', cam='Cambridge Stage 9 · 11.1–11.3',
    keywords=['probability', 'outcome', 'equally likely', 'sample space',
              'complement', 'mutually exclusive', 'independent', 'with replacement',
              'without replacement', 'tree diagram', 'expected number',
              'conditional probability'],
    remember=[
        '<span class="m">P(event) = favourable outcomes ÷ all equally likely '
        'outcomes</span>, and the answer is always between <span class="m">0</span> '
        'and <span class="m">1</span>.',
        '<span class="m">P(not A) = 1 − P(A)</span>. For '
        '&ldquo;at least one&rdquo;, take <span class="m">1 −</span> P(none).',
        'Two stages: <strong>multiply</strong> along a branch, <strong>add</strong> '
        'between branches.',
        'Without replacement the second denominator is one smaller — and the '
        'numerator changes too if the first ball mattered.',
        'Expected number in <span class="m">n</span> trials is '
        '<span class="m">n × P</span>.',
        'A conditional question (&ldquo;given that …&rdquo;) throws away every '
        'outcome that does not satisfy the condition, so both the top and the bottom '
        'of the fraction change.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
