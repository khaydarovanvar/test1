# -*- coding: utf-8 -*-
"""Grade 11 Algebra — group activity on lessons 1–12 of Quarter I.

One 40-minute lesson, run as four timed rounds that get harder. Sixteen
questions across the five topics taught so far: increments and the tangent,
limits, the derivative, the five rules, and the chain rule. Nothing needs a
technique from lesson 13 onwards.

Every answer was checked with a CAS.

Notation: {...} is a maths span, a^b raises, and [num]/[den] stacks.
"""

TITLE = 'Derivatives — group rounds'
GRADE = 'Grade 11'
COVERS = 'Lessons 1–12 · Quarter I'
DURATION = 40
GROUP_SIZE = '3–4'
NOTE = ('Four rounds, each timed and worth more than the last. Work on paper and '
        'hand in one sheet for the group. An answer with no method scores half.')

CLOCK = [
    (4, 'Form groups, read the rules'),
    (5, 'Round A'),
    (7, 'Round B'),
    (8, 'Round C'),
    (8, 'Round D'),
    (8, 'Answers on the board, scores'),
]

RULES = [
    'Groups of {3–4}. One answer sheet per group, with every member’s name on it.',
    'Rounds are timed and called by the teacher. When a round is called, pens down '
    'and move on — an unfinished round scores what it has.',
    'In rounds C and D any member may be asked to explain the method. If nobody can, '
    'the group scores half for that question, however correct the answer is.',
    'No calculators. Leave {π} and surds exact.',
]


def Q(q, a, work):
    return dict(q=q, a=a, work=work)


ROUNDS = [
 dict(key='r1', nom='Round A · Easy', minutes=5, points=2, cols=2,
      lead='One step each — speed round', items=[
  Q('Find the slope of the secant to {y = x^2} between {x = 1} and {x = 3}.',
    '{4}', 'Slope {= [9 − 1]/[3 − 1] = [8]/[2]}.'),
  Q('Evaluate {lim} as {x → 2} of {3x^2 − 5}.', '{7}',
    'A polynomial is continuous, so substitute: {3(4) − 5}.'),
  Q('Evaluate {lim} as {x → 4} of {[x^2 − 16]/[x − 4]}.', '{8}',
    'Factorise and cancel: {[(x − 4)(x + 4)]/[x − 4] = x + 4 → 8}.'),
  Q('Differentiate {y = x^8}.', '{8x^7}', 'The power rule.'),
  Q('Differentiate {y = 5x^3 − 2x}.', '{15x^2 − 2}', 'Term by term.'),
  Q('Differentiate {y = (3x + 1)^4}.', '{12(3x + 1)^3}',
    'Chain rule: {4(3x + 1)^3 × 3}.'),
 ]),

 dict(key='r2', nom='Round B · Medium', minutes=7, points=4, cols=2,
      lead='Two or three steps', items=[
  Q('Evaluate {lim} as {x → 0} of {[√(x + 9) − 3]/[x]}.', '{[1]/[6]}',
    'Multiply above and below by the conjugate {√(x + 9) + 3}. The numerator '
    'becomes {(x + 9) − 9 = x}, which cancels the {x} below, leaving '
    '{[1]/[√(x + 9) + 3] → [1]/[6]}.'),
  Q('Use first principles to find {f′(x)} for {f(x) = x^2 − 5x}.', '{2x − 5}',
    '{[(x + h)^2 − 5(x + h) − x^2 + 5x]/[h] = [2xh + h^2 − 5h]/[h] = 2x + h − 5}, '
    'and {h → 0}.'),
  Q('Differentiate {y = [2x − 3]/[x + 1]}.', '{[5]/[(x + 1)^2]}',
    'Quotient rule. The numerator is {2(x + 1) − (2x − 3)(1) = 5}.'),
  Q('Differentiate {y = √(x^2 + 7)}.', '{[x]/[√(x^2 + 7)]}',
    'Chain rule: {[1]/[2√(x^2 + 7)] × 2x}; the {2} cancels.'),
  Q('Where does {y = x^3 − 12x} have a horizontal tangent?', '{x = ±2}',
    '{y′ = 3x^2 − 12 = 0} gives {x^2 = 4}. Two places, not one.'),
 ]),

 dict(key='r3', nom='Round C · Hard', minutes=8, points=6, cols=1,
      lead='Two rules at once — be ready to explain', items=[
  Q('Differentiate {y = x^3(2x − 5)^4} and factorise the answer.',
    '{x^2(2x − 5)^3(14x − 15)}',
    'Product rule with the chain rule inside: '
    '{3x^2(2x − 5)^4 + x^3 · 4(2x − 5)^3 · 2}. Take out {x^2(2x − 5)^3}; what is '
    'left is {3(2x − 5) + 8x = 14x − 15}.'),
  Q('Evaluate {lim} as {x → 3} of {[x^2 − x − 6]/[x^2 − 9]}.', '{[5]/[6]}',
    'Both parts are zero at {x = 3}, so factorise: '
    '{[(x − 3)(x + 2)]/[(x − 3)(x + 3)] = [x + 2]/[x + 3] → [5]/[6]}.'),
  Q('Find the equation of the tangent to {y = √(4x + 9)} at {x = 4}.',
    '{y = [2]/[5]x + [17]/[5]}',
    '{y(4) = √25 = 5}, so the point is {(4, 5)}. {y′ = [2]/[√(4x + 9)]}, which at '
    '{x = 4} is {[2]/[5]}. Then {y − 5 = [2]/[5](x − 4)}. '
    'Check: at {x = 4} the line gives {[8]/[5] + [17]/[5] = 5}. ✓'),
 ]),

 dict(key='r4', nom='Round D · Very hard', minutes=8, points=15, cols=1,
      lead='Both parts needed for full marks', items=[
  Q('A spherical balloon is inflated so that its <b>surface area</b> grows at '
    '{24} cm²/s.<br><b>(a)</b> Find the rate the radius grows when {r = 3} cm. '
    '<b>(b)</b> Find the rate the volume grows at that moment.',
    '<b>(a)</b> {[1]/[π]} cm/s &nbsp;&nbsp; <b>(b)</b> {36} cm³/s',
    '<b>(a)</b> {S = 4πr^2}, so {[dS]/[dr] = 8πr = 24π} at {r = 3}. From '
    '{[dS]/[dt] = [dS]/[dr] × [dr]/[dt]}: {24 = 24π × [dr]/[dt]}, giving '
    '{[dr]/[dt] = [1]/[π]}.<br>'
    '<b>(b)</b> {V = [4]/[3]πr^3}, so {[dV]/[dr] = 4πr^2 = 36π}. Then '
    '{[dV]/[dt] = 36π × [1]/[π] = 36}. The {π} cancels — a good sign the rate '
    'in (a) was right. The common error is to substitute {r = 3} before '
    'differentiating, which turns the radius into a constant.'),
  Q('<b>(a)</b> Use first principles to show that {f(x) = [1]/[x]} has '
    '{f′(x) = −[1]/[x^2]}.<br><b>(b)</b> Hence find the equation of the '
    '<b>normal</b> to {y = [1]/[x]} at {x = 2}.',
    '<b>(a)</b> shown &nbsp;&nbsp; <b>(b)</b> {y = 4x − [15]/[2]}',
    '<b>(a)</b> {[f(x + h) − f(x)]/[h] = [1]/[h]([1]/[x + h] − [1]/[x])}. Over a '
    'common denominator the bracket is {[x − (x + h)]/[x(x + h)] = [−h]/[x(x + h)]}, '
    'so the quotient is {[−1]/[x(x + h)]}. Letting {h → 0} gives '
    '{−[1]/[x^2]}.<br>'
    '<b>(b)</b> At {x = 2}: the point is {(2, [1]/[2])} and the tangent gradient is '
    '{−[1]/[4]}. The normal gradient is the negative reciprocal, {4}, so '
    '{y − [1]/[2] = 4(x − 2)}. '
    'Groups that use {−[1]/[4]} for the normal have confused the two lines.'),
 ]),
]
