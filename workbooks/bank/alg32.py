# -*- coding: utf-8 -*-
"""Questions for topic 32 of Grade 8 algebra — problems solved with quadratics."""

from .common import F, M, rt, sq

S = M
X2 = sq('x')

Q_FOCUS = [
    dict(q='Two consecutive whole numbers have product ' + S('12') + '. Find them.',
         a=S('3') + ' and ' + S('4'),
         check=('solveset', 'Eq(x*(x+1), 12)', 'FiniteSet(3, -4)')),
    dict(q='A number added to its square gives ' + S('12') + '. Find it.',
         a=S('3') + ' or ' + S('−4'),
         check=('solveset', 'Eq(x + x**2, 12)', 'FiniteSet(3, -4)')),
    dict(q='A square has area ' + S('49') + ' cm². Find its side.', a=S('7') + ' cm',
         check=('solveset', 'Eq(x**2, 49)', 'FiniteSet(-7, 7)')),
    dict(q='Two numbers have sum ' + S('10') + ' and product ' + S('21') + '. Find them.',
         a=S('3') + ' and ' + S('7'),
         check=('solveset', 'Eq(x*(10-x), 21)', 'FiniteSet(3, 7)')),
    dict(q='A number multiplied by ' + S('2') + ' more than itself gives ' + S('15')
           + '. Find it.', a=S('3') + ' or ' + S('−5'),
         check=('solveset', 'Eq(x*(x+2), 15)', 'FiniteSet(3, -5)')),
    dict(q='Two consecutive even numbers have product ' + S('48') + '. Find them.',
         a=S('6') + ' and ' + S('8'),
         check=('solveset', 'Eq(x*(x+2), 48)', 'FiniteSet(6, -8)')),
    dict(q='A number equals ' + S('5') + ' times itself less its square. Write and solve.',
         a=S('x = 0') + ' or ' + S('x = 4'),
         check=('solveset', 'Eq(x, 5*x - x**2)', 'FiniteSet(0, 4)')),
    dict(q='A rectangle is ' + S('3') + ' cm longer than it is wide and has area '
           + S('40') + ' cm². Find the width.', a=S('5') + ' cm',
         check=('solveset', 'Eq(x*(x+3), 40)', 'FiniteSet(5, -8)')),
    dict(q='The square of a number is ' + S('6') + ' more than the number. Find it.',
         a=S('3') + ' or ' + S('−2'),
         check=('solveset', 'Eq(x**2, x + 6)', 'FiniteSet(3, -2)')),
    dict(q='A square has perimeter ' + S('24') + ' cm. Find its area.', a=S('36') + ' cm²',
         check=('simp', '(24/4)**2', '36')),
]

Q_PRACTICE = [
    dict(q='Two consecutive whole numbers have squares summing to ' + S('85')
           + '. Find them.', a=S('6') + ' and ' + S('7'),
         check=('solveset', 'Eq(x**2 + (x+1)**2, 85)', 'FiniteSet(6, -7)')),
    dict(q='A rectangle has perimeter ' + S('26') + ' cm and area ' + S('40')
           + ' cm². Find its sides.', a=S('5') + ' cm and ' + S('8') + ' cm',
         check=('solveset', 'Eq(x*(13-x), 40)', 'FiniteSet(5, 8)')),
    dict(q='A number is ' + S('3') + ' less than its square. Find it.',
         a=S('x = ' + F('1 ± ' + rt(13), 2)),
         check=('solveset', 'Eq(x, x**2 - 3)',
                'FiniteSet((1+sqrt(13))/2, (1-sqrt(13))/2)')),
    dict(q='The product of two numbers differing by ' + S('5') + ' is ' + S('36')
           + '. Find them.', a=S('4') + ' and ' + S('9'),
         check=('solveset', 'Eq(x*(x+5), 36)', 'FiniteSet(4, -9)')),
    dict(q='A triangle has base ' + S('2') + ' cm more than its height and area '
           + S('24') + ' cm². Find the height.', a=S('6') + ' cm',
         check=('solveset', 'Eq(x*(x+2)/2, 24)', 'FiniteSet(6, -8)')),
    dict(q='A square field is enlarged by ' + S('3') + ' m on each side and the area '
           'becomes ' + S('100') + ' m². Find the original side.', a=S('7') + ' m',
         check=('solveset', 'Eq((x+3)**2, 100)', 'FiniteSet(7, -13)')),
    dict(q='Two numbers have sum ' + S('12') + ' and the sum of their squares is '
           + S('80') + '. Find them.', a=S('4') + ' and ' + S('8'),
         check=('solveset', 'Eq(x**2 + (12-x)**2, 80)', 'FiniteSet(4, 8)')),
    dict(q='A number and its reciprocal sum to ' + S(F(10, 3)) + '. Find it.',
         a=S('3') + ' or ' + S(F(1, 3)),
         check=('solveset', 'Eq(x + 1/x, Rational(10,3))',
                'FiniteSet(3, Rational(1,3))')),
    dict(q='The product of three consecutive integers equals ' + S('8')
           + ' times the middle one. Find the middle one.', a=S('0, 3') + ' or ' + S('−3'),
         check=('solveset', 'Eq((x-1)*x*(x+1), 8*x)', 'FiniteSet(-3, 0, 3)')),
    dict(q='A rectangle is twice as long as it is wide and has area ' + S('72')
           + ' cm². Find the width.', a=S('6') + ' cm',
         check=('solveset', 'Eq(2*x**2, 72)', 'FiniteSet(-6, 6)')),
]

Q_CHALLENGE = [
    dict(q='A garden ' + S('20') + ' m by ' + S('15') + ' m has a path of width '
           + S('x') + ' round it. The total area is ' + S('500') + ' m². Find '
           + S('x') + '.', a=S('2.5') + ' m',
         check=('solveset', 'Eq((20+2*x)*(15+2*x), 500)',
                'FiniteSet(Rational(5,2), -20)')),
    dict(q='A train travels ' + S('240') + ' km. If its speed were ' + S('20')
           + ' km/h greater the journey would take ' + S('1') + ' hour less. '
           'Find the speed.', a=S('60') + ' km/h',
         check=('custom', 'train_speed')),
    dict(q='Two taps fill a tank in ' + S('4') + ' hours together; alone one takes '
           + S('6') + ' hours longer than the other. Find the times.',
         a=S('6') + ' h and ' + S('12') + ' h', check=('custom', 'taps_four_hours')),
    dict(q='The sum of a number and its square is ' + S('90') + '. Find it.',
         a=S('9') + ' or ' + S('−10'),
         check=('solveset', 'Eq(x + x**2, 90)', 'FiniteSet(9, -10)')),
    dict(q='A rectangle has diagonal ' + S('13') + ' cm and perimeter ' + S('34')
           + ' cm. Find its sides.', a=S('5') + ' cm and ' + S('12') + ' cm',
         check=('solveset', 'Eq(x**2 + (17-x)**2, 169)', 'FiniteSet(5, 12)')),
    dict(q='A ball is thrown so that its height is ' + S(f'h = 20t − 5{sq("t")}')
           + ' metres. When is it at ' + S('15') + ' m?',
         a=S('t = 1') + ' s or ' + S('t = 3') + ' s',
         check=('solveset', 'Eq(20*x - 5*x**2, 15)', 'FiniteSet(1, 3)')),
    dict(q='When does the ball in the previous question return to the ground?',
         a=S('t = 4') + ' s',
         check=('solveset', 'Eq(20*x - 5*x**2, 0)', 'FiniteSet(0, 4)')),
    dict(q='A number of pupils share ' + S('144') + ' pens equally. If there were '
           + S('6') + ' more pupils each would get ' + S('2') + ' fewer. '
           'How many pupils are there?', a=S('18'), check=('custom', 'pens_share')),
    dict(q='The sum of the squares of three consecutive integers is ' + S('110')
           + '. Find them.', a=S('5, 6, 7') + ' or ' + S('−7, −6, −5'),
         check=('solveset', 'Eq((x-1)**2 + x**2 + (x+1)**2, 110)',
                'FiniteSet(6, -6)')),
    dict(q='A rectangle of perimeter ' + S('40') + ' cm has the greatest possible area. '
           'Find its sides.', a=S('10') + ' cm by ' + S('10') + ' cm',
         check=('custom', 'max_area_perimeter')),
]

Q_BEYOND = [
    dict(q='Why must one root often be rejected in a word problem? Give an example.',
         a='A length or a count cannot be negative.', check=None,
         sol='The algebra is blind to meaning. In "a rectangle 3 cm longer than it is '
             'wide with area 40", the equation gives 5 and −8, but a width of −8 cm is '
             'not a rectangle.'),
    dict(q='A boat travels ' + S('24') + ' km upstream and back in ' + S('5')
           + ' hours. The current is ' + S('2') + ' km/h. Find the boat’s speed in '
           'still water.', a=S('10') + ' km/h', check=('custom', 'boat_speed'),
         sol='Time up plus time down: 24/(v−2) + 24/(v+2) = 5. Clearing gives '
             '5v² − 48v − 20 = 0, so v = 10 (rejecting the negative root).'),
    dict(q='The sum of the first ' + S('n') + ' whole numbers is ' + S('210')
           + '. Find ' + S('n') + '.', a=S('n = 20'), check=('custom', 'triangular_210'),
         sol='n(n+1)/2 = 210, so n² + n − 420 = 0 and n = 20 (rejecting −21).'),
    dict(q='A rectangle has area ' + S('60') + ' cm² and its diagonal is ' + S('13')
           + ' cm. Find its sides.', a=S('5') + ' cm and ' + S('12') + ' cm',
         check=('custom', 'rect_area_diagonal'),
         sol='With sides a, b: ab = 60 and a² + b² = 169. Then (a+b)² = 169 + 120 = 289, '
             'so a + b = 17 and the sides are the roots of t² − 17t + 60 = 0.'),
    dict(q='Two cyclists start together, one ' + S('3') + ' km/h faster. After '
           + S('2') + ' hours they are ' + S('6') + ' km apart. Find their speeds.',
         a=S('v') + ' and ' + S('v + 3') + ' — the difference alone fixes it',
         check=('custom', 'cyclists_gap'),
         sol='The gap after 2 hours is 2 × 3 = 6 km whatever the speeds. '
             'The problem is under-determined — a reminder to check whether an equation '
             'is really needed.'),
    dict(q='A square sheet has a ' + S('2') + ' cm square cut from each corner and the '
           'sides folded up. The open box holds ' + S('128') + ' cm³. Find the sheet’s '
           'side.', a=S('12') + ' cm', check=('custom', 'open_box'),
         sol='Base side x − 4, height 2, so 2(x−4)² = 128, (x−4)² = 64 and x = 12 '
             '(rejecting −4).'),
    dict(q='The product of two consecutive odd numbers is ' + S('255') + '. Find them.',
         a=S('15') + ' and ' + S('17'),
         check=('solveset', 'Eq(x*(x+2), 255)', 'FiniteSet(15, -17)'),
         sol='x(x+2) = 255 gives x² + 2x − 255 = 0 and x = 15 or −17. '
             'Both are genuine: −17 and −15 also work.'),
    dict(q='A number of identical chairs cost ' + S('720') + ' som in total. '
           'If each cost ' + S('4') + ' som less, ' + S('6') + ' more could be bought. '
           'How many were bought?', a=S('30'), check=('custom', 'chairs_cost'),
         sol='With n chairs at 720/n each: (720/n − 4)(n + 6) = 720. '
             'Expanding gives n² + 6n − 1080 = 0, so n = 30.'),
    dict(q='Show that two numbers with sum ' + S('s') + ' and product ' + S('p')
           + ' exist as real numbers exactly when ' + S(sq('s') + ' ≥ 4p') + '.',
         a=S(sq('s') + ' ≥ 4p'), check=('custom', 'sum_product_real'),
         sol='They are the roots of t² − st + p = 0, which has real roots exactly when '
             'its discriminant s² − 4p is non-negative.'),
    dict(q='A rectangle has perimeter ' + S('P') + '. Show that its area is greatest '
           'when it is a square.', a='Sides ' + S(F('P', 4)) + ' each',
         check=('custom', 'max_area_general'),
         sol='With sides x and P/2 − x, the area is x(P/2 − x) = P²/16 − (x − P/4)², '
             'largest when x = P/4.'),
    dict(q='The hypotenuse of a right triangle is ' + S('10') + ' cm and one leg is '
           + S('2') + ' cm longer than the other. Find the legs.',
         a=S('6') + ' cm and ' + S('8') + ' cm',
         check=('solveset', 'Eq(x**2 + (x+2)**2, 100)', 'FiniteSet(6, -8)'),
         sol='x² + (x+2)² = 100 gives 2x² + 4x − 96 = 0, that is x² + 2x − 48 = 0 and '
             'x = 6 (rejecting −8).'),
    dict(q='A worker can finish a job ' + S('5') + ' days sooner than another. '
           'Together they take ' + S('6') + ' days. How long does each take alone?',
         a=S('10') + ' and ' + S('15') + ' days', check=('custom', 'two_taps'),
         sol='1/t + 1/(t+5) = 1/6 gives t² − 7t − 30 = 0, so t = 10 and the other is 15.'),
    dict(q='Find two numbers whose sum is ' + S('6') + ' and whose squares sum to '
           + S('20') + '.', a=S('2') + ' and ' + S('4'),
         check=('solveset', 'Eq(x**2 + (6-x)**2, 20)', 'FiniteSet(2, 4)'),
         sol='x² + (6−x)² = 20 gives 2x² − 12x + 16 = 0, that is x² − 6x + 8 = 0.'),
    dict(q='A field is ' + S('x') + ' m wide and ' + S('x + 10') + ' m long. Fencing '
           'costs ' + S('5') + ' som a metre and the total is ' + S('600') + ' som. '
           'Find ' + S('x') + '.', a=S('25') + ' m', check=('custom', 'fence_cost'),
         sol='The perimeter is 2(2x + 10) = 4x + 20, costing 5(4x + 20) = 600, '
             'so 20x = 500 and x = 25. Note this one is linear — not every word problem '
             'needs a quadratic.'),
    dict(q='The sum of a number and ' + S('12') + ' times its reciprocal is ' + S('7')
           + '. Find the number.', a=S('3') + ' or ' + S('4'),
         check=('solveset', 'Eq(x + 12/x, 7)', 'FiniteSet(3, 4)'),
         sol='Multiplying by x gives x² − 7x + 12 = 0. Both roots are valid, since '
             'neither is zero.'),
]

TOPIC = dict(
    key='alg-32', number=32, unit='Unit 5 · Quadratic equations', lessons='72–73',
    title='Solving problems with quadratic equations',
    subtitle='Turning words into a quadratic — and deciding which of the two roots the '
             'problem actually allows.',
    uz='Algebra 8, Chapter III §25, pp. 153–158', cam='Cambridge Stage 9 · 4.1',
    keywords=['word problem', 'let x be…', 'set up an equation', 'reject a root',
              'consecutive numbers', 'average speed', 'dimensions',
              'interpret the answer'],
    remember=[
        'Say what <span class="m">x</span> stands for, with its unit, before writing '
        'anything else.',
        'Consecutive numbers: <span class="m">x</span> and <span class="m">x + 1</span>; '
        'consecutive even or odd: <span class="m">x</span> and '
        '<span class="m">x + 2</span>.',
        'Rate problems add <b>work per hour</b> or compare <b>times</b>: '
        '<span class="m">t = d/v</span>.',
        'Solve, then <b>interpret</b>: reject a negative length, time or count.',
        'Check the answer against the words, not against your own equation.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
