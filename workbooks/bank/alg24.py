# -*- coding: utf-8 -*-
"""Questions for topic 24 of Grade 8 algebra — approximate values and error."""

from .common import F, M, rt, sq

LT, GT = '&lt;', '&gt;'
S = M

Q_FOCUS = [
    dict(q='Round ' + S('3.7') + ' to the nearest whole number.', a=S('4'),
         check=('simp', 'floor(Rational(37,10)+Rational(1,2))', '4')),
    dict(q='Round ' + S('12.46') + ' to 1 decimal place.', a=S('12.5'),
         check=('simp', 'Rational(125,10)', 'Rational(25,2)')),
    dict(q='Round ' + S('0.0837') + ' to 2 significant figures.', a=S('0.084'),
         check=('simp', 'Rational(84,1000)', 'Rational(21,250)')),
    dict(q='Round ' + S('1234') + ' to 2 significant figures.', a=S('1200'),
         check=('simp', '1200', '1200')),
    dict(q='Round ' + S('5.5') + ' to the nearest whole number.', a=S('6'),
         check=('simp', 'floor(Rational(55,10)+Rational(1,2))', '6')),
    dict(q='Round ' + S('0.999') + ' to 2 decimal places.', a=S('1.00'),
         check=('simp', 'Rational(100,100)', '1')),
    dict(q='How many significant figures has ' + S('0.00420') + '?', a=S('3'),
         check=('custom', 'sig_figs_three')),
    dict(q='Round ' + S('87') + ' to the nearest ten.', a=S('90'),
         check=('simp', '90', '90')),
    dict(q='Round ' + S('2.346') + ' to 2 decimal places.', a=S('2.35'),
         check=('simp', 'Rational(235,100)', 'Rational(47,20)')),
    dict(q='Round ' + S('0.0649') + ' to 2 decimal places.', a=S('0.06'),
         check=('simp', 'Rational(6,100)', 'Rational(3,50)')),
]

Q_PRACTICE = [
    dict(q='A value ' + S('7.28') + ' is given as ' + S('7.3') + '. '
           'Find the absolute error.', a=S('0.02'),
         check=('simp', 'Abs(Rational(73,10)-Rational(728,100))', 'Rational(1,50)')),
    dict(q='Find the relative error of that approximation, to 2 significant figures.',
         a=S('0.27%'), check=('custom', 'relative_error_728')),
    dict(q='Round ' + S('45 678') + ' to 3 significant figures.', a=S('45 700'),
         check=('simp', '45700', '45700')),
    dict(q='A length is ' + S('24') + ' cm to the nearest cm. Give its bounds.',
         a=S('23.5') + ' cm to ' + S('24.5') + ' cm',
         check=('custom', 'bounds_24')),
    dict(q='Round ' + S('0.004999') + ' to 2 significant figures.', a=S('0.0050'),
         check=('simp', 'Rational(50,10000)', 'Rational(1,200)')),
    dict(q='Which is the more accurate measurement, ' + S('5 ± 0.1') + ' or '
           + S('50 ± 0.1') + '?', a=S('50 ± 0.1') + ' — far smaller relative error',
         check=('bool', 'Rational(1,500) < Rational(1,50)')),
    dict(q='What is the largest possible absolute error when rounding to the nearest '
           'whole number?', a=S('0.5'),
         check=('simp', 'Rational(1,2)', 'Rational(1,2)')),
    dict(q='Round ' + S('3.456') + ' to 3 significant figures.', a=S('3.46'),
         check=('simp', 'Rational(346,100)', 'Rational(173,50)')),
    dict(q='Find the relative error when ' + S('20') + ' carries an absolute error of '
           + S('0.5') + '.', a=S('2.5%'),
         check=('simp', 'Rational(1,2)/20*100', 'Rational(5,2)')),
    dict(q='Round ' + S('999.6') + ' to the nearest whole number.', a=S('1000'),
         check=('simp', 'floor(Rational(9996,10)+Rational(1,2))', '1000')),
]

Q_CHALLENGE = [
    dict(q=S('x = 4.2') + ' to 1 decimal place. Give the bounds of ' + S('x') + '.',
         a=S('4.15 ≤ x ' + LT + ' 4.25'), check=('custom', 'bounds_42')),
    dict(q='Two lengths are ' + S('3.5') + ' and ' + S('2.1') + ', each to 1 decimal '
           'place. Find the bounds of their sum.',
         a=S('5.50') + ' to ' + S('5.70'),
         check=('bound', 'a+b', {'a': ('Rational(345,100)', 'Rational(355,100)'),
                                 'b': ('Rational(205,100)', 'Rational(215,100)')},
                'Rational(550,100)', 'Rational(570,100)')),
    dict(q='For the same two lengths, find the bounds of their difference.',
         a=S('1.30') + ' to ' + S('1.50'),
         check=('bound', 'a-b', {'a': ('Rational(345,100)', 'Rational(355,100)'),
                                 'b': ('Rational(205,100)', 'Rational(215,100)')},
                'Rational(130,100)', 'Rational(150,100)')),
    dict(q='For the same two lengths, find the bounds of their product.',
         a=S('7.0725') + ' to ' + S('7.6325'),
         check=('bound', 'a*b', {'a': ('Rational(345,100)', 'Rational(355,100)'),
                                 'b': ('Rational(205,100)', 'Rational(215,100)')},
                'Rational(345,100)*Rational(205,100)',
                'Rational(355,100)*Rational(215,100)')),
    dict(q='For the same two lengths, find the bounds of ' + S(F('a', 'b')) + '.',
         a=S('1.6047…') + ' to ' + S('1.7317…'),
         check=('bound', 'a/b', {'a': ('Rational(345,100)', 'Rational(355,100)'),
                                 'b': ('Rational(205,100)', 'Rational(215,100)')},
                'Rational(345,100)/Rational(215,100)',
                'Rational(355,100)/Rational(205,100)')),
    dict(q='A number rounds to ' + S('7.0') + ' to 1 decimal place. Give its range.',
         a=S('6.95 ≤ x ' + LT + ' 7.05'), check=('custom', 'bounds_70')),
    dict(q='Round ' + S('2.5') + ' and ' + S('3.5') + ' to the nearest whole number by '
           'the usual rule.', a=S('3') + ' and ' + S('4'),
         check=('custom', 'round_half_up')),
    dict(q='Two numbers each carry an absolute error of at most ' + S('0.05') + '. '
           'What is the largest possible error in their sum?', a=S('0.1'),
         check=('simp', '2*Rational(5,100)', 'Rational(1,10)')),
    dict(q='A mass is ' + S('500') + ' g to the nearest ' + S('10') + ' g. '
           'Give its bounds.', a=S('495') + ' g to ' + S('505') + ' g',
         check=('custom', 'bounds_500')),
    dict(q='Which has the smaller relative error: ' + S('2 ± 0.1') + ' or '
           + S('8 ± 0.2') + '?', a=S('8 ± 0.2') + ' — ' + S('2.5%') + ' against '
           + S('5%'), check=('bool', 'Rational(2,100) < Rational(5,100)')),
]

Q_BEYOND = [
    dict(q='If ' + S('x = 10 ± 0.1') + ', find the bounds of ' + S(sq('x')) + '.',
         a=S('98.01') + ' to ' + S('102.01'),
         check=('bound', 'x**2', {'x': ('Rational(99,10)', 'Rational(101,10)')},
                'Rational(99,10)**2', 'Rational(101,10)**2'),
         sol='Squaring is increasing on positives, so the bounds are 9.9² and 10.1². '
             'The spread, about 4, is twenty times the original 0.1 — errors grow.'),
    dict(q='Show that the relative error of a product is about the <b>sum</b> of the '
           'relative errors.', a=S('(1 + e₁)(1 + e₂) ≈ 1 + e₁ + e₂'),
         check=('custom', 'relative_error_product'),
         sol='Write the measurements as a(1+e₁) and b(1+e₂). The product is '
             'ab(1 + e₁ + e₂ + e₁e₂), and the last term is negligible when the errors '
             'are small. So percentages add.'),
    dict(q='Round ' + S('2.449') + ' to 2 decimal places, then to 1. Now round the '
           'original straight to 1. Explain the difference.',
         a=S('2.45') + ' then ' + S('2.5') + ', but directly ' + S('2.4'),
         check=('custom', 'double_rounding'),
         sol='Rounding twice lets a value that was below the halfway point be pushed '
             'above it. Always round once, from the original.'),
    dict(q='If ' + S('x = 5 ± 0.1') + ', find the bounds of ' + S(F(1, 'x')) + '.',
         a=S(F(1, '5.1')) + ' to ' + S(F(1, '4.9')),
         check=('bound', '1/x', {'x': ('Rational(49,10)', 'Rational(51,10)')},
                '1/Rational(51,10)', '1/Rational(49,10)'),
         sol='Taking reciprocals of positives reverses the order, so the largest x gives '
             'the smallest reciprocal.'),
    dict(q='A square has side ' + S('6') + ' cm to the nearest cm. Find the bounds of '
           'its area.', a=S('30.25') + ' cm² to ' + S('42.25') + ' cm²',
         check=('bound', 'x**2', {'x': ('Rational(55,10)', 'Rational(65,10)')},
                'Rational(55,10)**2', 'Rational(65,10)**2'),
         sol='The side lies in [5.5, 6.5), so the area lies between 5.5² = 30.25 and '
             '6.5² = 42.25 — a spread of 12 cm² from a half-centimetre of uncertainty.'),
    dict(q='Find the percentage error in using ' + S(F(22, 7)) + ' for ' + S('π')
           + ', to 2 significant figures.', a=S('0.040%'),
         check=('custom', 'pi_approximation'),
         sol='22/7 − π ≈ 0.001264, and dividing by π gives about 0.000402, that is '
             '0.040% — good enough for most school work.'),
    dict(q=S('x') + ' is ' + S('3.6') + ' to 2 significant figures. Give its range.',
         a=S('3.55 ≤ x ' + LT + ' 3.65'), check=('custom', 'bounds_36')),
    dict(q='A car travels ' + S('100') + ' m (to the nearest metre) in ' + S('10')
           + ' s (to the nearest second). Find the greatest possible speed.',
         a=S('100.5 ÷ 9.5 ≈ 10.58') + ' m/s',
         check=('bound', 'a/b', {'a': ('Rational(995,10)', 'Rational(1005,10)'),
                                 'b': ('Rational(95,10)', 'Rational(105,10)')},
                'Rational(995,10)/Rational(105,10)',
                'Rational(1005,10)/Rational(95,10)'),
         sol='Greatest speed means the greatest distance over the least time: '
             '100.5 ÷ 9.5. Pairing the wrong ends is the usual mistake.'),
    dict(q='One hundred numbers are each rounded to the nearest whole. What is the '
           'largest possible error in their total?', a=S('50'),
         check=('simp', '100*Rational(1,2)', '50'),
         sol='Each contributes at most 0.5, and in the worst case every error points the '
             'same way. In practice they partly cancel, which is why the worst case is '
             'rarely seen.'),
    dict(q='Show that rounding to ' + S('n') + ' significant figures gives a relative '
           'error of at most about ' + S('5 × 10<sup>−n</sup>') + '.',
         a='The absolute error is half a unit in the last place.',
         check=('custom', 'sig_fig_relative'),
         sol='A number with n significant figures has leading digit at least 1, so it is '
             'at least 10^(k) while the absolute error is at most half of 10^(k−n+1). '
             'The ratio is at most 5 × 10^(−n).'),
    dict(q='Use bounding to find ' + S(rt(50)) + ' to 1 decimal place without a '
           'calculator.', a=S('7.1'), check=('custom', 'sqrt_50_bound'),
         sol='7² = 49 and 7.1² = 50.41, so √50 is between 7 and 7.1. '
             'Since 7.05² = 49.7025 < 50, the value is above 7.05 and rounds to 7.1.'),
    dict(q='An area is ' + S('50') + ' cm² to 2 significant figures. Find the bounds of '
           'the side of a square with that area.',
         a=S(rt('49.5')) + ' to ' + S(rt('50.5')) + ' cm',
         check=('bound', 'sqrt(x)', {'x': ('Rational(495,10)', 'Rational(505,10)')},
                'sqrt(Rational(495,10))', 'sqrt(Rational(505,10))'),
         sol='The area lies in [49.5, 50.5), and the square root is increasing, '
             'so the side lies between the roots of the two ends.'),
    dict(q='Three quantities are each measured to within ' + S('1%') + '. '
           'Estimate the worst percentage error in their product.', a='About ' + S('3%'),
         check=('custom', 'three_percent'),
         sol='Relative errors add for a product, so three of 1% give about 3%. '
             'Exactly, 1.01³ = 1.0303, so 3.03%.'),
    dict(q='Why does an absolute error of ' + S('1') + ' matter more for a measurement '
           'of ' + S('5') + ' than for one of ' + S('500') + '?',
         a='Relative error: ' + S('20%') + ' against ' + S('0.2%'),
         check=('bool', 'Rational(1,5) > Rational(1,500)'),
         sol='The absolute error is the same but the relative error differs by a factor '
             'of 100. Relative error is what decides whether a measurement is useful.'),
    dict(q='Two sides of a rectangle are ' + S('8') + ' and ' + S('5') + ', each to the '
           'nearest whole. Find the bounds of the perimeter.',
         a=S('24') + ' to ' + S('28'),
         check=('bound', '2*(a+b)', {'a': ('Rational(75,10)', 'Rational(85,10)'),
                                     'b': ('Rational(45,10)', 'Rational(55,10)')},
                '24', '28'),
         sol='The sides lie in [7.5, 8.5) and [4.5, 5.5), so the perimeter 2(a+b) runs '
             'from 2(7.5+4.5) = 24 to 2(8.5+5.5) = 28. Half a unit on each side becomes '
             'two whole units on the perimeter.'),
]

TOPIC = dict(
    key='alg-24', number=24,
    unit='Unit 4 · Inequalities, modulus and accuracy',
    lessons='55–57',
    title='Approximate values and error',
    subtitle='Every measurement is approximate — this topic says by how much, and how to '
             'write it honestly.',
    uz='Algebra 8, §§18–19, pp. 111–117', cam='Cambridge Stage 9 · 3.4',
    keywords=['exact value', 'approximate value', 'absolute error', 'relative error',
              'round', 'decimal place', 'significant figures', 'accuracy', 'measurement'],
    remember=[
        'Absolute error is <span class="m">|exact − approximate|</span>; '
        'relative error is that divided by the exact value, usually as a percentage.',
        'Rounding to the nearest unit gives an absolute error of at most <b>half</b> a '
        'unit.',
        'Round <b>once</b>, from the original. Rounding twice can push a value the wrong '
        'way.',
        'Relative error, not absolute, decides whether a measurement is good enough.',
        'Leading zeros are not significant; trailing zeros after the point are.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
