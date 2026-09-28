# -*- coding: utf-8 -*-
"""Practice worksheet — Investigating a function with the derivative
(Grade 11, lessons 19–22).

Twenty-eight problems written for this sheet; none of them appears in the
lesson's own practice bank, so the sheet can follow the lesson without
repeating it.

Every answer and every intermediate step was checked with a CAS.

Notation: {...} is a maths span, a^b raises, and [num]/[den] stacks.
"""

TITLE = 'Investigating a function with the derivative'
GRADE = 11
LESSONS = '19–22'
REFS = 'Algebra 11, §1.7 · P1 · 7.7–7.8'
NOTE = ('Solve {y′ = 0} for the stationary points, then classify each one — by the '
        'sign of {y′} on either side, or by {y″}. Always put the {x}-value back '
        'into {y}, not into {y′}.')


def Q(q, a, work):
    return dict(q=q, a=a, work=work)


BANDS = [
 dict(key='easy', label='Easy', cols=2,
      note='One stationary point, or a sign that never changes. Problem 7 is the '
           'reminder that {y′ = 0} does not have to mean a turning point.',
      items=[
  Q('Stationary point of {y = x^2 − 8x}', '{x = 4}',
    '{y′ = 2x − 8 = 0}.'),
  Q('Classify it', 'minimum, at {(4, −16)}',
    '{y″ = 2 > 0}, so the curve is bending upwards.'),
  Q('Stationary point of {y = 6x − x^2}, and its nature', 'maximum at {(3, 9)}',
    '{y′ = 6 − 2x = 0} gives {x = 3}; {y″ = −2 < 0}.'),
  Q('Is {y = 5 − 2x} increasing or decreasing?', 'decreasing everywhere',
    '{y′ = −2}, which is negative for every {x}.'),
  Q('Find {y″} for {y = x^4 − 2x^2}', '{12x^2 − 4}',
    '{y′ = 4x^3 − 4x}, and differentiating again gives {12x^2 − 4}.'),
  Q('Where is {y = x^2 − 2x} increasing?', '{x > 1}',
    '{y′ = 2x − 2 > 0}.'),
  Q('Stationary point of {y = x^3 + 1}, and its nature',
    '{x = 0}, a stationary inflection',
    '{y′ = 3x^2 = 0} only at {x = 0}, but {y′ ≥ 0} on both sides, so the curve '
    'flattens without turning.'),
 ]),

 dict(key='med', label='Medium', cols=2,
      note='Two stationary points, or an interval to check. In 11 and 12 one of the '
           'two is not a turning point, which the second derivative alone will not '
           'reveal.',
      items=[
  Q('Investigate {y = x^3 − 6x}', 'max {(−√2, 4√2)}, min {(√2, −4√2)}',
    '{y′ = 3x^2 − 6 = 0} gives {x = ±√2}. {y″ = 6x}, negative at {−√2} and '
    'positive at {√2}. {4√2 ≈ 5.66}.'),
  Q('Investigate {y = 2x^3 − 9x^2 + 12x}', 'max {(1, 5)}, min {(2, 4)}',
    '{y′ = 6x^2 − 18x + 12 = 6(x − 1)(x − 2)}. {y″ = 12x − 18} is {−6} at '
    '{x = 1} and {6} at {x = 2}. Note the maximum value here is larger than the '
    'minimum value, but neither is the greatest or least value of the function.'),
  Q('Where is {y = x^3 − 3x^2} decreasing?', '{0 < x < 2}',
    '{y′ = 3x(x − 2) < 0} exactly between its two roots.'),
  Q('Stationary points of {y = x^4 − 4x^3}', '{x = 0} and {x = 3}',
    '{y′ = 4x^3 − 12x^2 = 4x^2(x − 3)}.'),
  Q('Give the nature of each', '{x = 3} minimum {(3, −27)}; {x = 0} inflection',
    'At {x = 0} the factor {4x^2} keeps the sign of {y′} negative on both sides, '
    'so the curve flattens and carries on down. {y″(0) = 0}, which is why the '
    'second-derivative test says nothing there.'),
  Q('Point of inflection of {y = x^3 − 9x^2}', '{(3, −54)}',
    '{y″ = 6x − 18 = 0} gives {x = 3}, and {y″} changes sign there.'),
  Q('Greatest value of {y = x^3 − 3x} on {[0, 2]}', '{2}, at {x = 2}',
    'Stationary at {x = 1} with {y = −2}; the ends give {y(0) = 0} and '
    '{y(2) = 2}. On a closed interval the ends must always be tested.'),
 ]),

 dict(key='hard', label='Hard', cols=1,
      note='Unknown constants, or a sign chart with three roots. In 20 the answer '
           'is a range of {k}, not a number.',
      items=[
  Q('Investigate {y = [x^2]/[x^2 + 3]}', 'minimum at {(0, 0)}',
    'Quotient rule: {y′ = [2x(x^2 + 3) − x^2(2x)]/[(x^2 + 3)^2] = '
    '[6x]/[(x^2 + 3)^2]}. The denominator is always positive, so the sign of {y′} '
    'is the sign of {x}: down then up, a minimum. There is no maximum — the curve '
    'rises towards {y = 1} without reaching it.'),
  Q('Find {a} so that {y = x^3 − ax} has stationary points at {x = ±2}.',
    '{a = 12}',
    '{y′ = 3x^2 − a = 0} at {x = 2} gives {a = 12}, and {x = −2} then works too '
    'because {y′} is even.'),
  Q('Find {a} and {b} so that {y = x^3 + ax^2 + bx} has a stationary point at '
    '{(1, −2)}.', '{a = 0}, {b = −3}',
    'Two conditions. The point: {1 + a + b = −2}, so {a + b = −3}. '
    'Stationary: {y′ = 3x^2 + 2ax + b} gives {3 + 2a + b = 0}. '
    'Subtracting, {a = 0} and {b = −3}. The curve is {y = x^3 − 3x}.'),
  Q('Show that {y = x^3 + 4x − 1} is increasing for every {x}.', 'shown',
    '{y′ = 3x^2 + 4}. Since {3x^2 ≥ 0}, the derivative is at least {4}, so it is '
    'never zero and never negative. A cubic with no stationary point at all.'),
  Q('Find the intervals on which {y = 3x^4 − 4x^3 − 12x^2} is increasing.',
    '{−1 < x < 0} and {x > 2}',
    '{y′ = 12x^3 − 12x^2 − 24x = 12x(x − 2)(x + 1)}. Three roots at {−1}, {0} and '
    '{2} split the line into four parts; testing one point in each gives the '
    'signs {−, +, −, +}.'),
  Q('{y = x^4 + kx^2} has exactly one stationary point. Find the values of {k}.',
    '{k ≥ 0}',
    '{y′ = 2x(2x^2 + k)}. The factor {x} always gives {x = 0}. The bracket gives '
    '{x^2 = −[k]/[2]}, which has real roots only when {k < 0}. So one stationary '
    'point exactly when {k ≥ 0}, and three when {k < 0}.'),
  Q('Find and classify the stationary points of {y = x^3 − 3x^2 − 9x + 5}.',
    'max {(−1, 10)}, min {(3, −22)}',
    '{y′ = 3x^2 − 6x − 9 = 3(x − 3)(x + 1)}. {y″ = 6x − 6} is {−12} at {x = −1} '
    'and {12} at {x = 3}.'),
 ]),

 dict(key='vhard', label='Very hard', cols=1,
      note='Where the routine test breaks down, and where the conditions are given '
           'in reverse. In 25 the two stationary points are handed to you as the '
           'roots of {f′}.',
      items=[
  Q('Show that {y = x^4} has a minimum at {x = 0} even though {y″(0) = 0}, and '
    'explain why the second-derivative test fails.', 'shown',
    '{y′ = 4x^3}, which is negative for {x < 0} and positive for {x > 0}, so the '
    'curve falls then rises — a minimum. But {y″ = 12x^2} is {0} at {x = 0}. '
    'The test only reports a verdict when {y″ ≠ 0}; when it is zero the test is '
    'silent, and the sign of {y′} must be used instead. It is not evidence '
    'against a minimum.'),
  Q('Investigate {y = (x − 1)^2(x + 2)} fully: stationary points, their nature, and '
    'the point of inflection.',
    'max {(−1, 4)}, min {(1, 0)}, inflection {(0, 2)}',
    'Expanding gives {y = x^3 − 3x + 2}, so {y′ = 3x^2 − 3} and {x = ±1}. '
    '{y″ = 6x}, so {x = −1} is a maximum and {x = 1} a minimum; {y″ = 0} at '
    '{x = 0}. The repeated factor {(x − 1)^2} is why the curve touches the '
    '{x}-axis at {x = 1} instead of crossing it.'),
  Q('Find the values of {k} for which {y = x^3 + 3x^2 + kx} has no stationary point.',
    '{k > 3}',
    '{y′ = 3x^2 + 6x + k} must have no real root, so its discriminant '
    '{36 − 12k} must be negative.'),
  Q('{f(x) = ax^3 + bx^2 + cx} has a maximum at {x = −1}, a minimum at {x = 3} and '
    '{f(−1) = 10}. Find {a}, {b} and {c}.', '{a = 2}, {b = −6}, {c = −18}',
    '{f′(x) = 3ax^2 + 2bx + c} has roots {−1} and {3}, so '
    '{f′(x) = 3a(x + 1)(x − 3) = 3a(x^2 − 2x − 3)}. Comparing coefficients, '
    '{2b = −6a} and {c = −9a}. Then {f(−1) = −a + b − c = 5a = 10}. '
    'Check: {f′ = 6(x + 1)(x − 3)}, which is positive before {−1} — a maximum '
    'there, as required.'),
  Q('The curve {y = x^3 + px + q} has a stationary point at {(2, −6)}. Find {p} and '
    '{q}, and the other stationary point.',
    '{p = −12}, {q = 10}; the other is {(−2, 26)}',
    '{y′ = 3x^2 + p = 0} at {x = 2} gives {p = −12}. Then {y(2) = 8 − 24 + q = −6} '
    'gives {q = 10}. Because {y′} is even, the other root is {x = −2}, and '
    '{y(−2) = −8 + 24 + 10 = 26}.'),
  Q('Find the greatest and least values of {y = x^3 − 6x^2 + 9x + 1} on {[0, 4]}.',
    'greatest {5}, least {1}',
    '{y′ = 3(x − 1)(x − 3)}, so the stationary points are {x = 1} and {x = 3}. '
    'The four candidates are {y(0) = 1}, {y(1) = 5}, {y(3) = 1}, {y(4) = 5}. '
    'Both extreme values are reached twice — a local maximum ties with an '
    'endpoint, and a local minimum ties with the other endpoint.'),
  Q('Show that if {f′(a) = 0} and {f″(a) > 0} then {f} has a local minimum at {a}.',
    'shown',
    '{f″(a) > 0} means {f′} is increasing at {a}. Since {f′(a) = 0}, just to the '
    'left of {a} the derivative {f′} is negative and just to the right it is '
    'positive. A function that falls then rises has a minimum at the turn. '
    'This is the whole content of the second-derivative test, and it also shows '
    'why {f″(a) = 0} settles nothing: {f′} may then be increasing, decreasing or '
    'neither.'),
 ]),
]
