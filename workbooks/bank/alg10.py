# -*- coding: utf-8 -*-
"""Questions for topic 10 of Grade 8 algebra — the function y = k/x."""

from .common import F, M, sq

x2 = sq('x')

Q_FOCUS = [
    dict(q=f'For {M("y = " + F(12, "x"))}, find {M("y")} when {M("x = 3")}.', a=M('y = 4'),
         check=('simp', '12/3', '4')),
    dict(q=f'For {M("y = " + F(12, "x"))}, find {M("x")} when {M("y = 6")}.', a=M('x = 2'),
         check=('solve', '12/x-6', ['2'])),
    dict(q=f'The graph of {M("y = " + F("k", "x"))} passes through {M("(2, 5)")}. Find {M("k")}.',
         a=M('k = 10'), check=('simp', '2*5', '10')),
    dict(q=f'Is {M("y = " + F(3, "x"))} an inverse proportion?', a='Yes.', check=None),
    dict(q=f'Is {M("y = 3x")} an inverse proportion?', a='No — it is a direct proportion.',
         check=None),
    dict(q=f'State the domain of {M("y = " + F(5, "x"))}.', a=M('x ≠ 0'),
         check=('domain', '5/x', ['0'])),
    dict(q=f'In which quadrants does the graph of {M("y = −" + F(6, "x"))} lie?',
         a='The second and the fourth.', check=None),
    dict(q=f'For {M("y = " + F(8, "x"))}, what is the product {M("xy")} at every point?',
         a=M('8'), check=('simp', 'x*(8/x)', '8')),
    dict(q=f'For {M("y = " + F(4, "x"))}, find {M("y")} when {M("x = −2")}.', a=M('y = −2'),
         check=('simp', '4/(-2)', '-2')),
    dict(q=f'The point {M("(−3, 4)")} lies on {M("y = " + F("k", "x"))}. Find {M("k")}.',
         a=M('k = −12'), check=('simp', '(-3)*4', '-12')),
]

Q_PRACTICE = [
    dict(q=f'Complete the table for {M("y = " + F(18, "x"))}: '
           f'{M("x = 1, 2, 3, 6, 9")}.',
         a=M('y = 18, 9, 6, 3, 2'), check=('custom', 'table_18')),
    dict(q=f'The graph of {M("y = " + F("k", "x"))} passes through {M("(4, 2.5)")}. '
           f'Find {M("k")}.', a=M('k = 10'), check=('simp', '4*Rational(5,2)', '10')),
    dict(q=f'For {M("y = " + F(10, "x"))}, find {M("x")} when {M("y = 0.5")}.',
         a=M('x = 20'), check=('solve', '10/x-Rational(1,2)', ['20'])),
    dict(q='Six workers finish a job in 10 days. Working at the same rate, how long do '
           '15 workers take?', a=M('4') + ' days', check=('simp', '6*10/15', '4')),
    dict(q=f'On {M("y = " + F(24, "x"))}, {M("x")} is doubled. What happens to {M("y")}?',
         a='It is halved.', check=('simp', '(24/(2*x))/(24/x)', 'Rational(1,2)')),
    dict(q=f'Does the graph of {M("y = " + F(7, "x"))} ever meet the axes?',
         a='No — the axes are its asymptotes.', check=None),
    dict(q=f'{M("y = " + F("k", "x"))} passes through {M("(5, −4)")}. Find {M("y")} when '
           f'{M("x = 10")}.', a=M('k = −20') + ', ' + M('y = −2'),
         check=('simp', '(5*(-4))/10', '-2')),
    dict(q=f'A car covers {M("120")} km, so {M("t = " + F(120, "v"))}. Find {M("t")} at '
           f'{M("v = 60")} and at {M("v = 80")}.',
         a=M('2') + ' h and ' + M('1.5') + ' h', check=('simp', '120/80', 'Rational(3,2)')),
    dict(q=f'Is {M("(3, 4)")} on the graph of {M("y = " + F(12, "x"))}?',
         a='Yes — ' + M('3 · 4 = 12'), check=('simp', '12/3', '4')),
    dict(q=f'State the symmetry of the graph of {M("y = " + F("k", "x"))}.',
         a='Symmetric about the origin.', check=None),
]

Q_CHALLENGE = [
    dict(q=f'{M("y = " + F("k", "x"))} passes through {M("(−2, 9)")}. Find {M("k")}, then '
           f'{M("y")} at {M("x = 3")}.', a=M('k = −18') + ', ' + M('y = −6'),
         check=('simp', '(-2*9)/3', '-6')),
    dict(q=f'{M("(2, 6)")} and {M("(3, p)")} lie on the same graph {M("y = " + F("k", "x"))}. '
           f'Find {M("p")}.', a=M('p = 4'), check=('simp', '(2*6)/3', '4')),
    dict(q='For a fixed mass of gas, pressure × volume is constant. At '
           + M('V = 3') + ' litres the pressure is ' + M('200') + ' kPa. '
           'Find the pressure at ' + M('V = 5') + ' litres.',
         a=M('120') + ' kPa', check=('simp', '200*3/5', '120')),
    dict(q=f'Where do {M("y = " + F(6, "x"))} and {M("y = 6x")} meet?',
         a=M('(1, 6)') + ' and ' + M('(−1, −6)'), check=('solve', '6/x-6*x', ['1', '-1'])),
    dict(q=f'For {M("y = " + F("k", "x"))} with {M("k > 0")} and {M("x > 0")}, explain why '
           f'{M("y")} falls as {M("x")} rises.',
         a='A constant product: a bigger ' + M('x') + ' forces a smaller ' + M('y') + '.',
         check=None),
    dict(q=f'Find where {M("y = " + F(12, "x"))} meets {M("y = x + 1")}.',
         a=M('(3, 4)') + ' and ' + M('(−4, −3)'),
         check=('solve', '12/x-(x+1)', ['3', '-4'])),
    dict(q='A rectangle has area ' + M('36') + ' cm². Write its length as a function of '
           'its width ' + M('w') + '.',
         a=M('L = ' + F(36, 'w')), check=('simp', '36/w', '36/w')),
    dict(q=f'If {M("(a, b)")} lies on {M("y = " + F("k", "x"))}, show that {M("(−a, −b)")} '
           'does too.',
         a='Because ' + M('(−a)(−b) = ab = k'), check=('custom', 'odd_symmetry')),
    dict(q=f'For {M("y = " + F(8, "x"))}, find the points where {M("y = x")}.',
         a=M('(2√2, 2√2)') + ' and ' + M('(−2√2, −2√2)'),
         check=('solve', '8/x-x', ['2*sqrt(2)', '-2*sqrt(2)'])),
    dict(q=f'Do {M("(1, 12)")} and {M("(4, 3)")} lie on one graph {M("y = " + F("k", "x"))}?',
         a='Yes, with ' + M('k = 12'), check=('simp', '1*12-4*3', '0')),
]

Q_BEYOND = [
    dict(q=f'Find every point on {M("y = " + F(12, "x"))} whose coordinates are both integers.',
         a='12 points — ' + M('(±1, ±12), (±2, ±6), (±3, ±4), (±4, ±3), (±6, ±2), (±12, ±1)')
           + ' with matching signs',
         check=('custom', 'lattice_points_12'),
         sol='xy = 12, so x must divide 12: x ∈ {±1, ±2, ±3, ±4, ±6, ±12}, and y = 12/x. '
             'That is 12 points, six in the first quadrant and six in the third.'),
    dict(q=f'Explain why the graph of {M("y = " + F("k", "x"))} never touches either axis.',
         a='Neither ' + M('x = 0') + ' nor ' + M('y = 0') + ' can give ' + M('xy = k ≠ 0'),
         check=None,
         sol='On the graph xy = k, which is not zero. A point on the y-axis has x = 0 and '
             'a point on the x-axis has y = 0; either makes the product 0. So the axes are '
             'approached but never reached — they are asymptotes.'),
    dict(q=f'Find the least value of {M("x + " + F(12, "x"))} for {M("x > 0")}.',
         a=M('4√3') + ' at ' + M('x = 2√3'), check=('custom', 'min_x_plus_12_over_x'),
         sol='x + 12/x − 4√3 = (x − 2√3)²/x, which is ≥ 0 for x > 0 and zero only at '
             'x = 2√3. So the least value is 4√3 ≈ 6.93.'),
    dict(q=f'A line through the origin meets {M("y = " + F("k", "x"))} twice. Prove the two '
           'points are symmetric about the origin.',
         a='The roots of ' + M('m' + x2 + ' = k') + ' are ' + M('±√(k/m)'),
         check=('custom', 'line_through_origin'),
         sol='Put y = mx into xy = k: mx² = k, so x = ±√(k/m) — two opposite values, with '
             'y = mx also opposite. The points are (t, mt) and (−t, −mt).'),
    dict(q=f'Find {M("k")} so that {M("y = " + F("k", "x"))} passes through the point where '
           f'{M("y = 2x")} meets {M("y = x + 3")}.', a=M('k = 18'),
         check=('custom', 'k_through_intersection'),
         sol='2x = x + 3 gives x = 3 and y = 6. Then k = xy = 18.'),
    dict(q=f'{M("P")} is the point {M("(a, " + F("k", "a") + ")")} on the graph. Show that the '
           'rectangle with corners ' + M('O') + ', ' + M('P') + ' and the two axes always '
           'has the same area.',
         a=M('|k|'), check=('simp', 'a*(k/a)', 'k'),
         sol='The sides are a and k/a, so the area is a · (k/a) = k, whatever a is. '
             'This constant area is what makes k the signature of the hyperbola.'),
    dict(q=f'Solve {M(F(12, "x") + " = x − 1")}.', a=M('x = 4') + ' or ' + M('x = −3'),
         check=('solve', '12/x-(x-1)', ['4', '-3']),
         sol='Multiply by x (allowed, since x ≠ 0): 12 = x² − x, so x² − x − 12 = 0 and '
             '(x − 4)(x + 3) = 0.'),
    dict(q='Two taps fill a tank in ' + M('6') + ' hours together. Alone, the slower takes '
           + M('5') + ' hours longer than the faster. How long does each take alone?',
         a=M('10') + ' h and ' + M('15') + ' h', check=('custom', 'two_taps'),
         sol='If the faster takes t hours, 1/t + 1/(t+5) = 1/6. Over a common denominator '
             '6(t+5) + 6t = t(t+5), so t² − 7t − 30 = 0 and (t − 10)(t + 3) = 0. '
             'Only t = 10 is possible, so the taps take 10 and 15 hours.'),
    dict(q=f'Find every pair of positive integers {M("(n, m)")} with '
           f'{M(F(1, "n") + " + " + F(1, "m") + " = " + F(1, 6))}.',
         a='9 pairs — ' + M('(7, 42), (8, 24), (9, 18), (10, 15), (12, 12)') + ' and their reverses',
         check=('custom', 'egyptian_sixth'),
         sol='6(n + m) = nm, so nm − 6n − 6m = 0 and, adding 36, (n − 6)(m − 6) = 36. '
             'The positive factor pairs of 36 — 1×36, 2×18, 3×12, 4×9, 6×6 and reverses — '
             'give the nine pairs.'),
    dict(q=f'Show that {M("y = " + F("2x + 1", "x"))} is a hyperbola {M("y = " + F(1, "x"))} '
           'moved, and say where to.',
         a=M('y = 2 + ' + F(1, 'x')) + ' — up by ' + M('2'),
         check=('simp', '(2*x+1)/x', '2+1/x'),
         sol='Divide term by term: (2x + 1)/x = 2 + 1/x. So it is y = 1/x shifted up 2, '
             'with asymptotes x = 0 and y = 2.'),
    dict(q=f'Write {M("y = " + F("3x − 1", "x − 2"))} in the form {M("y = A + " + F("B", "x − 2"))} '
           'and state the asymptotes.',
         a=M('y = 3 + ' + F(5, 'x − 2')) + '; ' + M('x = 2') + ', ' + M('y = 3'),
         check=('simp', '(3*x-1)/(x-2)', '3+5/(x-2)'),
         sol='3x − 1 = 3(x − 2) + 5, so the fraction is 3 + 5/(x − 2). It is y = 5/x moved '
             '2 right and 3 up, so the asymptotes are x = 2 and y = 3.'),
    dict(q='A journey of ' + M('120') + ' km takes ' + M('1') + ' hour less when the speed '
           'is ' + M('10') + ' km/h greater. Find the original speed.',
         a=M('30') + ' km/h', check=('custom', 'journey_speed'),
         sol='120/v − 120/(v + 10) = 1. Over a common denominator 120(v + 10) − 120v '
             '= v(v + 10), so 1200 = v² + 10v and v² + 10v − 1200 = 0, '
             '(v − 30)(v + 40) = 0. A speed is positive, so v = 30 km/h.'),
    dict(q=f'Prove that {M("x + " + F("k", "x") + " ≥ 2√k")} for all {M("x > 0")}, {M("k > 0")}.',
         a='Equality at ' + M('x = √k'), check=('custom', 'am_gm_k'),
         sol='x + k/x − 2√k = (x² − 2√k·x + k)/x = (x − √k)²/x, which is ≥ 0 when x > 0 '
             'and zero only at x = √k.'),
    dict(q=f'Show that the graph of {M("y = " + F("k", "x"))} with {M("k > 0")} is unchanged '
           f'by reflection in the line {M("y = x")}.',
         a='Because ' + M('(a, b)') + ' on the graph gives ' + M('(b, a)') + ' on it too',
         check=('custom', 'reflect_y_equals_x'),
         sol='A point (a, b) is on the graph when ab = k. Reflection in y = x sends it to '
             '(b, a), and ba = ab = k, so the image is on the graph as well. '
             'In function terms, y = k/x is its own inverse.'),
    dict(q=f'Find the two points where {M("y = " + F(12, "x"))} meets {M("y = x + 1")}, and '
           'the distance between them.',
         a=M('(3, 4)') + ', ' + M('(−4, −3)') + '; distance ' + M('7√2'),
         check=('custom', 'hyperbola_line_distance'),
         sol='12/x = x + 1 gives x² + x − 12 = 0, so x = 3 or x = −4 and the points are '
             '(3, 4) and (−4, −3). The distance is √(7² + 7²) = 7√2.'),
]

TOPIC = dict(
    key='alg-10', number=10, lessons='25–27',
    unit='Unit 1 · Algebraic fractions',
    title='The function y = k / x — properties and graph',
    subtitle='Inverse proportion: the first function of the course whose graph is not a '
             'straight line, and whose defining feature is a product that never changes.',
    uz='Algebra 8, §7, pp. 34–38', cam='Cambridge Stage 9 · 10.1–10.2, 11.2',
    keywords=['function', 'inverse proportion', 'coefficient k', 'graph', 'hyperbola',
              'branch', 'domain', 'asymptote', 'quadrant', 'symmetry'],
    remember=[
        'Inverse proportion means the <b>product</b> is constant: '
        '<span class="m">xy = k</span>, so <span class="m">y = k/x</span>.',
        'One known point gives <span class="m">k</span> at once — multiply its '
        'coordinates.',
        'The domain is every <span class="m">x</span> except <span class="m">0</span>, and '
        '<span class="m">y</span> is never <span class="m">0</span>: the axes are '
        'asymptotes.',
        '<span class="m">k &gt; 0</span> puts the two branches in quadrants I and III; '
        '<span class="m">k &lt; 0</span> puts them in II and IV.',
        'The graph has rotational symmetry about the origin: if '
        '<span class="m">(a, b)</span> is on it, so is <span class="m">(−a, −b)</span>.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
