# -*- coding: utf-8 -*-
"""Practice worksheet — The rules of differentiation (Grade 11, lessons 7–9).

Twenty-eight problems written for this sheet; none of them appears in the
lesson's own practice bank, so the sheet can follow the lesson without
repeating it. Nothing here needs the chain rule — that is lessons 10–12.

Every answer and every intermediate step was checked with a CAS.

Notation: {...} is a maths span, a^b raises, and [num]/[den] stacks.
"""

TITLE = 'The rules of differentiation'
GRADE = 11
LESSONS = '7–9'
REFS = 'Algebra 11, §1.4 · P1 · 7.2–7.4'
NOTE = 'Differentiate with respect to {x}. No chain rule is needed anywhere on this sheet.'


def Q(q, a, work):
    return dict(q=q, a=a, work=work)


BANDS = [
 dict(key='easy', label='Easy', cols=2,
      note='One rule applied once. Problems 6 and 7 are the test: the expression '
           'has to be rewritten as an index before the power rule is usable.',
      items=[
  Q('{(x^9)′}', '{9x^8}', 'Power rule: the {9} comes down, the index drops by one.'),
  Q('{(7x^3)′}', '{21x^2}', 'Constant multiple: {7 × 3x^2 = 21x^2}.'),
  Q('{(x^5 − x^2)′}', '{5x^4 − 2x}', 'Differentiate term by term.'),
  Q('{(−12)′}', '{0}', 'A constant does not change, so its rate of change is {0}.'),
  Q('{(6x + 1)′}', '{6}', 'A straight line of gradient {6}; the {+1} contributes nothing.'),
  Q('{([1]/[x^3])′}', '{−[3]/[x^4]}',
    'Rewrite as {x^-3}. The power rule gives {−3x^-4 = −[3]/[x^4]}.'),
  Q('{(2√x)′}', '{[1]/[√x]}',
    'Rewrite as {2x^1/2}. Then {2 × [1]/[2]x^-1/2 = x^-1/2 = [1]/[√x]}.'),
 ]),

 dict(key='med', label='Medium', cols=2,
      note='Choosing the shorter route. In 11, 12 and 14 expanding or splitting beats '
           'the product and quotient rules; 13 genuinely needs the quotient rule.',
      items=[
  Q('{(5x^3 + 2x^2 − 8x + 1)′}', '{15x^2 + 4x − 8}', 'Term by term; the {+1} vanishes.'),
  Q('{([4]/[x^5])′}', '{−[20]/[x^6]}',
    '{[4]/[x^5] = 4x^-5}, so the derivative is {−20x^-6}.'),
  Q('{(x^2√x)′}', '{[5]/[2]x^3/2}',
    '{x^2√x = x^2 · x^1/2 = x^5/2}, so the derivative is {[5]/[2]x^3/2}.'),
  Q('{((x − 2)(x + 6))′}', '{2x + 4}',
    'Expanding is quicker: {(x − 2)(x + 6) = x^2 + 4x − 12}.'),
  Q('{(3x(x^2 − 4))′}', '{9x^2 − 12}',
    'Expand first: {3x^3 − 12x}.'),
  Q('{([x + 3]/[x − 1])′}', '{−[4]/[(x − 1)^2]}',
    'Quotient rule with {u = x + 3}, {v = x − 1}. The numerator is '
    '{1·(x − 1) − (x + 3)·1 = −4}.'),
  Q('{([x^3 − 5x]/[x])′}', '{2x}',
    'Divide first: {[x^3 − 5x]/[x] = x^2 − 5}, whose derivative is {2x}.'),
 ]),

 dict(key='hard', label='Hard', cols=1,
      note='Method and condition. In 16 the numerator must collapse to a constant; '
           '17 and 18 want index form; 21 gives the gradient and asks for the point, '
           'which reverses the usual direction.',
      items=[
  Q('{((3x + 2)(x^2 − x))′}', '{9x^2 − 2x − 2}',
    'Product rule with {u = 3x + 2}, {v = x^2 − x}: '
    '{3(x^2 − x) + (3x + 2)(2x − 1) = 3x^2 − 3x + 6x^2 + x − 2 = 9x^2 − 2x − 2}. '
    'Expanding to {3x^3 − x^2 − 2x} first gives the same answer.'),
  Q('{([x^2 + 1]/[x − 3])′}', '{[x^2 − 6x − 1]/[(x − 3)^2]}',
    'Quotient rule with {u = x^2 + 1}, {v = x − 3}. The numerator is '
    '{2x(x − 3) − (x^2 + 1) = 2x^2 − 6x − x^2 − 1 = x^2 − 6x − 1}.'),
  Q('{(x^4√x)′}', '{[9]/[2]x^7/2}',
    '{x^4√x = x^9/2}, so the derivative is {[9]/[2]x^7/2}.'),
  Q('{([x + 4]/[√x])′}', '{[1]/[2√x] − [2]/[x√x]}',
    'Split the fraction rather than using the quotient rule: '
    '{[x + 4]/[√x] = x^1/2 + 4x^-1/2}. Differentiating gives '
    '{[1]/[2]x^-1/2 − 2x^-3/2}.'),
  Q('{(x^3(x − 2)(x + 2))′}', '{5x^4 − 12x^2}',
    'Recognise the difference of two squares first: '
    '{x^3(x^2 − 4) = x^5 − 4x^3}, so the derivative is {5x^4 − 12x^2}.'),
  Q('Find {y″} for {y = 2x^5 − x^3 + 4x}', '{40x^3 − 6x}',
    '{y′ = 10x^4 − 3x^2 + 4}, and differentiating again gives {y″ = 40x^3 − 6x}.'),
  Q('Find the values of {x} at which {y = x^3 − 12x} has gradient {15}', '{x = ±3}',
    'Gradient means {y′}, so set {3x^2 − 12 = 15}. Then {3x^2 = 27}, {x^2 = 9}, '
    'so {x = 3} or {x = −3}. A cubic reaches a given positive gradient twice.'),
 ]),

 dict(key='vhard', label='Very hard', cols=1,
      note='Nothing here needs the chain rule. What is hard is choosing the form '
           '(22, 23, 26) or working backwards from a gradient to the function '
           '(27, 28).',
      items=[
  Q('{((2x − 1)(x + 1)(x + 3))′}', '{6x^2 + 14x + 2}',
    'Expand rather than apply the product rule twice. '
    '{(2x − 1)(x + 1) = 2x^2 + x − 1}, and multiplying by {(x + 3)} gives '
    '{2x^3 + 7x^2 + 2x − 3}. The derivative is {6x^2 + 14x + 2}.'),
  Q('{([(x − 1)(x^2 + 4)]/[x^2])′}', '{1 − [4]/[x^2] + [8]/[x^3]}',
    'Expand the numerator to {x^3 − x^2 + 4x − 4}, then divide every term by {x^2}: '
    '{x − 1 + 4x^-1 − 4x^-2}. Differentiating gives {1 − 4x^-2 + 8x^-3}.'),
  Q('Find the gradient of {y = [2x + 1]/[x^2 + 1]} at {x = 0}', '{2}',
    'Quotient rule. The numerator is {2(x^2 + 1) − (2x + 1)(2x) = −2x^2 − 2x + 2}, '
    'so {y′ = [−2x^2 − 2x + 2]/[(x^2 + 1)^2]}. At {x = 0} this is {[2]/[1] = 2}.'),
  Q('Find the fourth derivative of {y = [1]/[x^2]}', '{[120]/[x^6]}',
    '{y = x^-2}. Then {y′ = −2x^-3}, {y″ = 6x^-4}, {y‴ = −24x^-5} and '
    '{y⁗ = 120x^-6}. The sign alternates and each coefficient multiplies by the '
    'next index.'),
  Q('Differentiate {y = (x^2 − 3)^2} <b>without</b> using the chain rule',
    '{4x^3 − 12x}',
    'Expand first: {(x^2 − 3)^2 = x^4 − 6x^2 + 9}. Differentiating term by term '
    'gives {4x^3 − 12x}.'),
  Q('{y = ax^2 + bx} passes through {(2, 2)} and has gradient {5} at {x = 2}. '
    'Find {a} and {b}.', '{a = 2}, {b = −3}',
    'Two conditions, two unknowns. The point gives {4a + 2b = 2}, so {2a + b = 1}. '
    'The gradient {y′ = 2ax + b} at {x = 2} gives {4a + b = 5}. Subtracting, '
    '{2a = 4}, so {a = 2} and {b = −3}. Check: {y = 2x^2 − 3x} gives {y(2) = 2} and '
    '{y′(2) = 5}.'),
  Q('The tangent to {y = x^2 + [k]/[x]} at {x = 1} is horizontal. Find {k}, and the '
    'value of {y} there.', '{k = 2}, and {y = 3}',
    'Horizontal means {y′ = 0}. With {y = x^2 + kx^-1}, {y′ = 2x − kx^-2}, so at '
    '{x = 1}: {2 − k = 0}, giving {k = 2}. Then {y(1) = 1 + 2 = 3}.'),
 ]),
]
