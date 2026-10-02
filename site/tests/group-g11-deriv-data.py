# -*- coding: utf-8 -*-
"""Grade 11 Algebra — group activity on three taught topics of Quarter I.

One 40-minute lesson as four timed rounds. Nineteen questions spread over
limits, the five rules of differentiation, and the chain rule.

Two taught topics are deliberately left out: lessons 1–2, "Increments and the
problem of the tangent", and lessons 5–6, "The derivative of a function". So
no question asks for a secant slope, an increment, a derivative from first
principles, or the definition itself — every derivative here is found with the
rules.

Every answer was checked with a CAS.

Notation: {...} is a maths span, a^b raises, and [num]/[den] stacks.
"""

TITLE = 'Derivatives — group rounds'
GRADE = 'Grade 11'
COVERS = 'Lessons 3–4, 7–12 · Quarter I'
DURATION = 40
GROUP_SIZE = '3–4'
NOTE = ('Four rounds, each timed and worth more than the last. The tag on every '
        'question names the topic it comes from. Work on paper, hand in one sheet '
        'for the group. An answer with no method scores half.')

TOPICS = [
    ('T2', 'The limit of a function · lessons 3–4'),
    ('T3', 'The rules of differentiation · lessons 7–9'),
    ('T4', 'The derivative of a composite function · lessons 10–12'),
]

CLOCK = [
    (4, 'Form groups, read the rules'),
    (5, 'Round A'),
    (8, 'Round B'),
    (9, 'Round C'),
    (8, 'Round D'),
    (6, 'Answers on the board, scores'),
]

RULES = [
    'Groups of {3–4}. One answer sheet per group, with every member’s name on it.',
    'Rounds are timed and called by the teacher. When a round is called, pens down '
    'and move on — an unfinished round scores what it has.',
    'In rounds C and D any member may be asked to explain the method. If nobody can, '
    'the group scores half for that question, however correct the answer is.',
    'No calculators. Leave surds and {π} exact, and factorise every derivative.',
]


def Q(q, a, work, topic):
    return dict(q=q, a=a, work=work, topic=topic)


ROUNDS = [
 dict(key='r1', nom='Round A · Easy', minutes=5, points=2, cols=2,
      lead='Three topics, eight questions — speed round', items=[
  Q('Evaluate {lim} as {x → −2} of {[x^2 + 5x + 6]/[x + 2]}.', '{1}',
    'The numerator factorises as {(x + 2)(x + 3)}, so after cancelling the limit '
    'is {x + 3 → 1}.', 'T2'),
  Q('Differentiate {y = 5√x − [3]/[x^2]}.', '{[5]/[2√x] + [6]/[x^3]}',
    'Rewrite as {5x^1/2 − 3x^-2}, then {[5]/[2]x^-1/2 + 6x^-3}.', 'T3'),
  Q('Evaluate {lim} as {x → 3} of {[x^2 − 9]/[x^2 − 2x − 3]}.', '{[3]/[2]}',
    'Both factorise through {(x − 3)}: {[(x − 3)(x + 3)]/[(x − 3)(x + 1)] = '
    '[x + 3]/[x + 1] → [6]/[4]}.', 'T2'),
  Q('Evaluate {lim} as {x → 0} of {[√(x + 1) − 1]/[x]}.', '{[1]/[2]}',
    'Conjugate: the numerator becomes {x}, leaving {[1]/[√(x + 1) + 1]}.', 'T2'),
  Q('Differentiate {y = [2x^3 − 5]/[x^2]}.', '{2 + [10]/[x^3]}',
    'Divide first: {y = 2x − 5x^-2}, so {y′ = 2 + 10x^-3}.', 'T3'),
  Q('Differentiate {y = x√x}.', '{[3]/[2]√x}',
    '{x√x = x^3/2}, so {y′ = [3]/[2]x^1/2}.', 'T3'),
  Q('Differentiate {y = [1]/[(2x − 7)^3]}.', '{−[6]/[(2x − 7)^4]}',
    '{y = (2x − 7)^-3}, so {y′ = −3(2x − 7)^-4 × 2}.', 'T4'),
  Q('Differentiate {y = ∛(3x + 1)}.', '{[1]/[(3x + 1)^2/3]}',
    '{y = (3x + 1)^1/3}, so {y′ = [1]/[3](3x + 1)^-2/3 × 3} — the {3}s cancel.',
    'T4'),
 ]),

 dict(key='r2', nom='Round B · Medium', minutes=8, points=4, cols=2,
      lead='Rewrite before you differentiate', items=[
  Q('Differentiate {y = √(1 − 4x^3)}.', '{−[6x^2]/[√(1 − 4x^3)]}',
    'Chain rule: {[1]/[2√(1 − 4x^3)] × (−12x^2)}; the {2} cancels.', 'T4'),
  Q('Evaluate {lim} as {x → 2} of {[x^3 − 8]/[x − 2]}.', '{12}',
    '{x^3 − 8 = (x − 2)(x^2 + 2x + 4)}, so the limit is {4 + 4 + 4}.', 'T2'),
  Q('Evaluate {lim} as {x → 1} of {[1]/[x − 1] − [2]/[x^2 − 1]}.', '{[1]/[2]}',
    'Neither part has a limit on its own. Over a common denominator: '
    '{[(x + 1) − 2]/[(x − 1)(x + 1)] = [x − 1]/[(x − 1)(x + 1)] = [1]/[x + 1]}.',
    'T2'),
  Q('Differentiate {y = (x + 1)(x − 2)(x + 3)}.', '{3x^2 + 4x − 5}',
    'Expanding is quicker than two product rules: {y = x^3 + 2x^2 − 5x − 6}.',
    'T3'),
  Q('Differentiate {y = [x^2 + 1]/[x^2 − 1]}.', '{−[4x]/[(x^2 − 1)^2]}',
    'Quotient rule; the numerator is {2x(x^2 − 1) − (x^2 + 1)2x = 2x(−2) = −4x}.',
    'T3'),
  Q('Differentiate {y = (1 − 2x)^6(x + 3)} and factorise.',
    '{−7(1 − 2x)^5(2x + 5)}',
    'Product rule with the chain rule on the first factor: '
    '{−12(1 − 2x)^5(x + 3) + (1 − 2x)^6}. Take out {(1 − 2x)^5}; what is left is '
    '{−12(x + 3) + (1 − 2x) = −14x − 35}.', 'T4'),
 ]),

 dict(key='r3', nom='Round C · Hard', minutes=9, points=7, cols=1,
      lead='Two steps at least — be ready to explain', items=[
  Q('Differentiate {y = [x^2 + 1]/[x + 2]} and find every {x} at which the '
    'tangent is horizontal.', '{y′ = [x^2 + 4x − 1]/[(x + 2)^2]}; {x = −2 ± √5}',
    'Quotient rule: the numerator is '
    '{2x(x + 2) − (x^2 + 1) = x^2 + 4x − 1}. A fraction is zero only when its '
    'numerator is, so solve {x^2 + 4x − 1 = 0}; completing the square gives '
    '{(x + 2)^2 = 5}. Two places, and neither is a whole number — groups that '
    'expect a tidy root stop too early.', 'T3'),
  Q('Evaluate {lim} as {x → 4} of {[√x − 2]/[x^2 − 16]}.', '{[1]/[32]}',
    'Factorise the denominator as {(x − 4)(x + 4)} and multiply above and below '
    'by {√x + 2}. The numerator becomes {x − 4}, which cancels, leaving '
    '{[1]/[(√x + 2)(x + 4)] → [1]/[4 × 8]}.', 'T2'),
  Q('Differentiate {y = [x + 1]/[√x]} for {x > 0}, and give the answer as a '
    'single fraction.', '{[x − 1]/[2x√x]}',
    'The quotient rule works, but rewriting is far quicker: '
    '{y = x^1/2 + x^-1/2}, so {y′ = [1]/[2]x^-1/2 − [1]/[2]x^-3/2}. Taking out '
    '{[1]/[2]x^-3/2} leaves {x − 1}, giving {[x − 1]/[2x√x]}. '
    'Check: at {x = 4} this is {[3]/[16]}, and the curve is rising there.', 'T3'),
  Q('Differentiate {y = √([2x + 1]/[2x − 1])} for {x > [1]/[2]}.',
    '{−[2]/[(2x − 1)√(4x^2 − 1)]}',
    'Chain rule on {u^1/2} with {u = [2x + 1]/[2x − 1]}. The quotient rule gives '
    '{[du]/[dx] = [2(2x − 1) − 2(2x + 1)]/[(2x − 1)^2] = −[4]/[(2x − 1)^2]}, so '
    '{y′ = [1]/[2√u] × (−[4]/[(2x − 1)^2])}. Writing {√u = [√(2x + 1)]/[√(2x − 1)]} '
    'and tidying gives the answer. The derivative is negative everywhere on the '
    'domain, which matches a decreasing curve.', 'T4'),
 ]),

 dict(key='r4', nom='Round D · Very hard', minutes=8, points=16, cols=1,
      lead='Every part needed for full marks', items=[
  Q('<b>(a)</b> Show that {y = [x]/[√(x^2 + 4)]} has '
    '{y′ = [4]/[(x^2 + 4)^3/2]}. <b>(b)</b> Hence find the equation of the '
    'tangent at {x = 0}. <b>(c)</b> Explain why the curve has no stationary '
    'point.',
    '<b>(b)</b> {y = [x]/[2]} &nbsp;&nbsp; <b>(c)</b> {y′} is never zero',
    '<b>(a)</b> Quotient rule: '
    '{[√(x^2 + 4) − x · [x]/[√(x^2 + 4)]]/[x^2 + 4]}. Multiply above and below '
    'by {√(x^2 + 4)}: the numerator becomes {(x^2 + 4) − x^2 = 4} and the '
    'denominator {(x^2 + 4)^3/2}.<br>'
    '<b>(b)</b> {y(0) = 0} and {y′(0) = [4]/[8] = [1]/[2]}, so the tangent is '
    '{y = [1]/[2]x}.<br>'
    '<b>(c)</b> The numerator of {y′} is the constant {4}, so {y′ ≠ 0} for every '
    '{x} — the curve is increasing everywhere and never levels off.', 'T3 T4'),
 ]),
]
