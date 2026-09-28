# -*- coding: utf-8 -*-
"""Practice worksheet — The modulus function (Grade 11, lessons 15–16).

Twenty-eight problems written for this sheet; none of them appears in the
lesson's own practice bank, so the sheet can follow the lesson without
repeating it.

Every answer was checked with a CAS.

Notation: {...} is a maths span, a^b raises, and [num]/[den] stacks.
"""

TITLE = 'The modulus function'
GRADE = 11
LESSONS = '15–16'
REFS = 'Algebra 11, §1.5 (extension) · P1 · 1.6 · P2 · 1.1–1.3'
NOTE = ('A modulus equation splits into two cases; a modulus inequality is a '
        'region. Check every root against the original equation — squaring and '
        'case-splitting both invent answers.')


def Q(q, a, work):
    return dict(q=q, a=a, work=work)


BANDS = [
 dict(key='easy', label='Easy', cols=2,
      note='Reading the definition. {|x| = a} has two answers when {a > 0}; '
           '{|x| ≤ a} is the interval between them.',
      items=[
  Q('{|7 − 12|}', '{5}', 'The bars come off after the subtraction: {|−5| = 5}.'),
  Q('{|−3| + |−4|}', '{7}',
    '{3 + 4}. Note that this is not {|−3 − 4| = 7} by accident — see problem 22.'),
  Q('Solve {|x| = 11}', '{x = ±11}', 'Two numbers are {11} units from zero.'),
  Q('Solve {|x + 5| = 2}', '{x = −3} or {x = −7}',
    '{x + 5 = 2} gives {x = −3}; {x + 5 = −2} gives {x = −7}.'),
  Q('Solve {|x| ≤ 4}', '{−4 ≤ x ≤ 4}',
    'Distance from zero at most {4}, so a closed interval.'),
  Q('Solve {|x| > 7}', '{x < −7} or {x > 7}',
    'Distance from zero more than {7} — two separate pieces, never one.'),
  Q('Give the vertex of {y = |x + 3| − 2}', '{(−3, −2)}',
    'The corner sits where the inside is zero, at {x = −3}, and the {−2} lowers it.'),
 ]),

 dict(key='med', label='Medium', cols=2,
      note='The inside is now linear in {x}, so each case still gives one root. '
           'In 12 both sides carry a modulus, which gives two cases and no more.',
      items=[
  Q('Solve {|3x − 2| = 10}', '{x = 4} or {x = −[8]/[3]}',
    '{3x − 2 = 10} gives {x = 4}; {3x − 2 = −10} gives {3x = −8}.'),
  Q('Solve {|5 − 2x| = 1}', '{x = 2} or {x = 3}',
    '{5 − 2x = 1} gives {x = 2}; {5 − 2x = −1} gives {x = 3}.'),
  Q('Solve {|x − 4| ≤ 6}', '{−2 ≤ x ≤ 10}',
    'Read it as a distance: {x} is within {6} of {4}, so {4 − 6 ≤ x ≤ 4 + 6}.'),
  Q('Solve {|4x + 1| ≥ 9}', '{x ≤ −[5]/[2]} or {x ≥ 2}',
    '{4x + 1 ≥ 9} gives {x ≥ 2}; {4x + 1 ≤ −9} gives {4x ≤ −10}.'),
  Q('Solve {|x + 2| = |3x − 4|}', '{x = 3} or {x = [1]/[2]}',
    'Two moduli give two cases only. {x + 2 = 3x − 4} gives {x = 3}; '
    '{x + 2 = −(3x − 4)} gives {4x = 2}.'),
  Q('Give the vertex and the {y}-intercept of {y = |2x − 6|}', '{(3, 0)}; {6}',
    'The corner is where {2x − 6 = 0}. At {x = 0}, {y = |−6| = 6}.'),
  Q('Give the range of {y = 5 − |x − 1|}', '{y ≤ 5}',
    '{|x − 1| ≥ 0}, so subtracting it can only lower {5}. The greatest value is '
    '{5}, reached at {x = 1}.'),
 ]),

 dict(key='hard', label='Hard', cols=1,
      note='Now the cases have to be checked. In 15 one case produces a root that '
           'the original equation rejects; in 17 the middle interval produces no root '
           'at all.',
      items=[
  Q('Solve {|x + 1| = 3x − 5}', '{x = 3} only',
    '{x + 1 = 3x − 5} gives {x = 3}; check: {|4| = 4} and {3(3) − 5 = 4}. ✓ '
    '{x + 1 = −(3x − 5)} gives {4x = 4}, so {x = 1}; check: {|2| = 2} but '
    '{3(1) − 5 = −2}. ✗ A modulus can never equal a negative number.'),
  Q('Solve {|x^2 − 9| = 7}', '{x = ±4} and {x = ±√2}',
    '{x^2 − 9 = 7} gives {x^2 = 16}; {x^2 − 9 = −7} gives {x^2 = 2}. '
    'Four roots, because the inside is quadratic.'),
  Q('Solve {|x − 5| + |x + 2| = 9}', '{x = −3} or {x = 6}',
    'The two corners are at {x = −2} and {x = 5}, which split the line into three '
    'parts. For {x < −2}: {(5 − x) + (−x − 2) = 3 − 2x = 9}, so {x = −3}. ✓ '
    'For {−2 ≤ x ≤ 5}: the sum is always {7}, never {9}. '
    'For {x > 5}: {2x − 3 = 9}, so {x = 6}. ✓'),
  Q('Solve {|2x − 1| < |x + 3|}', '{−[2]/[3] < x < 4}',
    'Both sides are non-negative, so squaring is safe here: '
    '{4x^2 − 4x + 1 < x^2 + 6x + 9}, that is {3x^2 − 10x − 8 < 0}, or '
    '{(3x + 2)(x − 4) < 0}. A negative product means {x} lies between the roots.'),
  Q('Solve {|x| − x = 8}', '{x = −4}',
    'For {x ≥ 0} the left side is {0}, never {8}. For {x < 0} it is {−2x = 8}.'),
  Q('The graph of {y = |x − a|} passes through {(1, 4)} and {(7, 2)}. Find {a}.',
    '{a = 5}',
    '{|1 − a| = 4} gives {a = 5} or {a = −3}; {|7 − a| = 2} gives {a = 5} or '
    '{a = 9}. Only {a = 5} satisfies both.'),
  Q('Solve {|x^2 − 2x| = x}', '{x = 0}, {x = 1}, {x = 3}',
    '{x^2 − 2x = x} gives {x(x − 3) = 0}; {x^2 − 2x = −x} gives {x(x − 1) = 0}. '
    'The right side must be non-negative, and all three roots satisfy {x ≥ 0}, '
    'so all three stand.'),
 ]),

 dict(key='vhard', label='Very hard', cols=1,
      note='Two corners, or letters instead of numbers. A sketch of each piece is '
           'faster than any amount of case algebra.',
      items=[
  Q('Show that {|a| + |b| ≥ |a + b|}, and say when the two sides are equal.',
    'Equal when {a} and {b} have the same sign, or one of them is {0}',
    'Squaring both sides, the claim becomes '
    '{a^2 + 2|ab| + b^2 ≥ a^2 + 2ab + b^2}, that is {|ab| ≥ ab}, which is true '
    'for every real number. Equality needs {|ab| = ab}, so {ab ≥ 0} — the two '
    'numbers point the same way. This is the triangle inequality.'),
  Q('Solve {|x − 1| + |x − 3| < 4}.', '{0 < x < 4}',
    'Corners at {1} and {3}. For {x < 1}: {4 − 2x < 4}, so {x > 0}, giving '
    '{0 < x < 1}. For {1 ≤ x ≤ 3}: the sum is {2}, which is always less than {4}. '
    'For {x > 3}: {2x − 4 < 4}, so {x < 4}. The three pieces join into one '
    'interval.'),
  Q('Find the greatest and least values of {y = |x − 2| + |x + 4|}.',
    'least {6}; no greatest value',
    'Between the corners, for {−4 ≤ x ≤ 2}, the sum is {(2 − x) + (x + 4) = 6} — '
    'constant, and that constant is the distance between {−4} and {2}. Outside, '
    'both terms grow, so {y → ∞}. The minimum is reached on a whole interval, not '
    'at one point.'),
  Q('Solve {|x + 3| ≥ |2x|}.', '{−1 ≤ x ≤ 3}',
    'Both sides non-negative, so square: {x^2 + 6x + 9 ≥ 4x^2}, that is '
    '{3x^2 − 6x − 9 ≤ 0}, or {(x − 3)(x + 1) ≤ 0}.'),
  Q('Explain why {y = |x^2 − 1|} has no derivative at {x = 1} but does have one at '
    '{x = 0}.', 'a corner at {x = 1}; {y′(0) = 0}',
    'For {x > 1} the inside is positive, so {y = x^2 − 1} and {y′ = 2x → 2}. '
    'For {x} just below {1} the inside is negative, so {y = 1 − x^2} and '
    '{y′ = −2x → −2}. The one-sided gradients differ, so there is no tangent. '
    'Near {x = 0} the inside is negative throughout, so {y = 1 − x^2} with no '
    'switch at all, and {y′(0) = 0}.'),
  Q('{|x − 2| = k} has exactly two solutions. Find the values of {k}.', '{k > 0}',
    'The graph of {y = |x − 2|} is a V with its corner on the {x}-axis. A '
    'horizontal line {y = k} cuts it twice when {k > 0}, once when {k = 0} and '
    'never when {k < 0}.'),
  Q('Sketch {y = |x| − |x − 4|} and give its range.', '{−4 ≤ y ≤ 4}',
    'Three pieces. For {x < 0}: {(−x) − (4 − x) = −4}. For {0 ≤ x ≤ 4}: '
    '{x − (4 − x) = 2x − 4}, a line from {−4} to {4}. For {x > 4}: '
    '{x − (x − 4) = 4}. The graph is flat, then a ramp, then flat again.'),
 ]),
]
