# -*- coding: utf-8 -*-
"""Practice worksheet — The derivative of a composite function (Grade 11, lessons 10–12).

Twenty-eight problems written for this sheet; none of them appears in the
lesson's own practice bank, so the sheet can follow the lesson without
repeating it. The five rules of lessons 7–9 are assumed; every problem here
needs the chain rule at least once.

Every answer and every intermediate step was checked with a CAS.

Notation: {...} is a maths span, a^b raises, and [num]/[den] stacks.
"""

TITLE = 'The derivative of a composite function'
GRADE = 11
LESSONS = '10–12'
REFS = 'Algebra 11, §1.5 · P1 · 7.5'
NOTE = ('Differentiate with respect to {x} unless a rate is asked for. '
        'Factorise every answer — the factorised form is the one later questions need.')


def Q(q, a, work):
    return dict(q=q, a=a, work=work)


BANDS = [
 dict(key='easy', label='Easy', cols=2,
      note='One bracket, one chain. The whole test is whether the second factor '
           '— the derivative of the inside — is there at all.',
      items=[
  Q('{((x + 5)^3)′}', '{3(x + 5)^2}',
    'The inside is {x + 5}, whose derivative is {1}, so the second factor changes nothing.'),
  Q('{((4x − 1)^2)′}', '{8(4x − 1)}',
    '{2(4x − 1) × 4 = 8(4x − 1)}.'),
  Q('{((1 − 3x)^5)′}', '{−15(1 − 3x)^4}',
    'The inside derivative is {−3}, so {5(1 − 3x)^4 × (−3)}. The sign is the whole point.'),
  Q('{(√(5x))′}', '{[5]/[2√(5x)]}',
    'Write it as {(5x)^1/2}. Then {[1]/[2](5x)^-1/2 × 5 = [5]/[2√(5x)]}.'),
  Q('{((x^3 + 2)^4)′}', '{12x^2(x^3 + 2)^3}',
    '{4(x^3 + 2)^3 × 3x^2}.'),
  Q('{([1]/[(3x + 1)^2])′}', '{−[6]/[(3x + 1)^3]}',
    'Write it as {(3x + 1)^-2}. Then {−2(3x + 1)^-3 × 3 = −6(3x + 1)^-3}.'),
  Q('{((2 − x^2)^6)′}', '{−12x(2 − x^2)^5}',
    '{6(2 − x^2)^5 × (−2x)}.'),
 ]),

 dict(key='med', label='Medium', cols=2,
      note='The inside is no longer linear, so the second factor carries real work. '
           'In 12 the outside is a power but the inside needs the product rule first; '
           '14 is a rate, so differentiate before any number goes in.',
      items=[
  Q('{((2x^2 + 3x)^5)′}', '{5(4x + 3)(2x^2 + 3x)^4}',
    'Inside derivative {4x + 3}, so {5(2x^2 + 3x)^4(4x + 3)}.'),
  Q('{(∛(x^2 + 1))′}', '{[2x]/[3(x^2 + 1)^2/3]}',
    'Write it as {(x^2 + 1)^1/3}. Then {[1]/[3](x^2 + 1)^-2/3 × 2x}.'),
  Q('{([1]/[√(4 − x)])′}', '{[1]/[2(4 − x)^3/2]}',
    '{(4 − x)^-1/2} differentiates to {−[1]/[2](4 − x)^-3/2 × (−1)}. '
    'Two minus signs, so the answer is positive.'),
  Q('{((x + [1]/[x])^3)′}', '{3(1 − [1]/[x^2])(x + [1]/[x])^2}',
    'The inside is {x + x^-1}, whose derivative is {1 − x^-2}.'),
  Q('{(x^2(3x − 1)^4)′}', '{2x(3x − 1)^3(9x − 1)}',
    'Product rule, with the chain rule on the second factor: '
    '{2x(3x − 1)^4 + 12x^2(3x − 1)^3}. Take out {2x(3x − 1)^3}, leaving '
    '{(3x − 1) + 6x = 9x − 1}.'),
  Q('{(√(x^2 − 4x))′}', '{[x − 2]/[√(x^2 − 4x)]}',
    '{[1]/[2√(x^2 − 4x)] × (2x − 4)}, and the {2} cancels.'),
  Q('The radius of a circle shrinks at {0.5} cm/s. Find {[dA]/[dt]} when {r = 6} cm.',
    '{−6π} cm²/s',
    '{A = πr^2}, so {[dA]/[dr] = 2πr = 12π}. Then '
    '{[dA]/[dt] = 12π × (−0.5) = −6π}. The sign is negative because the circle '
    'is shrinking.'),
 ]),

 dict(key='hard', label='Hard', cols=1,
      note='Two rules at once. Decide the outermost structure first — product, '
           'quotient or power — and only then reach for the chain rule inside it.',
      items=[
  Q('Differentiate {y = (x − 1)^3(x + 2)^2} and factorise the answer.',
    '{(x − 1)^2(x + 2)(5x + 4)}',
    'Product rule: {3(x − 1)^2(x + 2)^2 + 2(x − 1)^3(x + 2)}. The common factor is '
    '{(x − 1)^2(x + 2)}, and what is left is {3(x + 2) + 2(x − 1) = 5x + 4}.'),
  Q('Differentiate {y = [(2x + 3)^4]/[x^2]}.',
    '{[2(2x + 3)^3(2x − 3)]/[x^3]}',
    'Quotient rule: the numerator is {8(2x + 3)^3x^2 − 2x(2x + 3)^4}. Take out '
    '{2x(2x + 3)^3}, leaving {4x − (2x + 3) = 2x − 3}. One {x} cancels with {x^4}.'),
  Q('Differentiate {y = √(1 + √x)}.',
    '{[1]/[4√x √(1 + √x)]}',
    'Chain rule twice: {[1]/[2√(1 + √x)] × [1]/[2√x]}. The outer root is '
    'differentiated first, with the inside left alone.'),
  Q('Find the gradient of {y = (x^2 + 1)^3} at {x = 1}.', '{24}',
    '{y′ = 6x(x^2 + 1)^2}. At {x = 1} this is {6 × 1 × 4 = 24}.'),
  Q('Find the {x}-coordinates of the stationary points of {y = (x^2 − 9)^4}.',
    '{x = 0} and {x = ±3}',
    '{y′ = 8x(x^2 − 9)^3}. A product is zero when a factor is zero, so {x = 0} '
    'or {x^2 = 9}. Three stationary points, not one.'),
  Q('Differentiate {y = [x]/[√(x^2 + 1)]}.', '{[1]/[(x^2 + 1)^3/2]}',
    'Quotient rule: {[√(x^2 + 1) − x · [x]/[√(x^2 + 1)]]/[x^2 + 1]}. Multiply top '
    'and bottom by {√(x^2 + 1)}: the numerator becomes {(x^2 + 1) − x^2 = 1}.'),
  Q('The surface area of a cube grows at {12} cm²/s. How fast is the side growing '
    'when the side is {5} cm?', '{0.2} cm/s',
    '{S = 6a^2}, so {[dS]/[da] = 12a = 60}. From {[dS]/[dt] = [dS]/[da] × [da]/[dt]}, '
    '{12 = 60 × [da]/[dt]}, so {[da]/[dt] = [1]/[5]}.'),
 ]),

 dict(key='vhard', label='Very hard', cols=1,
      note='Letters instead of numbers, and questions that ask why. In 26 the '
           'discriminant decides how many answers there are; in 28 the inside never '
           'reaches zero, which is what makes the stationary point unique.',
      items=[
  Q('Show that {(ax + b)^n} differentiates to {an(ax + b)<sup>n − 1</sup>} for every constant '
    '{a}, {b} and every index {n}.', 'shown',
    'Let {u = ax + b}, so {y = u^n}. Then {[dy]/[du] = nu<sup>n − 1</sup>} and {[du]/[dx] = a}. '
    'Multiplying, {[dy]/[dx] = nu<sup>n − 1</sup> × a = an(ax + b)<sup>n − 1</sup>}. This is the shortcut '
    'used silently in every easy question above.'),
  Q('Differentiate {y = ([x + 1]/[x − 1])^3}.', '{−[6(x + 1)^2]/[(x − 1)^4]}',
    'The outermost structure is a power, so chain first. With {u = [x + 1]/[x − 1]}, '
    'the quotient rule gives {[du]/[dx] = [(x − 1) − (x + 1)]/[(x − 1)^2] = '
    '−[2]/[(x − 1)^2]}. Then {3u^2 × [du]/[dx] = [3(x + 1)^2]/[(x − 1)^2] × '
    '(−[2]/[(x − 1)^2])}.'),
  Q('Find the equation of the tangent to {y = √(3x + 4)} at {x = 4}.',
    '{y = [3]/[8]x + [5]/[2]}',
    '{y(4) = √16 = 4}, so the point is {(4, 4)}. {y′ = [3]/[2√(3x + 4)]}, which at '
    '{x = 4} is {[3]/[8]}. Then {y − 4 = [3]/[8](x − 4)}. '
    'Check: at {x = 4}, {[3]/[8](4) + [5]/[2] = 4}. ✓'),
  Q('A spherical balloon is inflated at {100} cm³/s. How fast is its radius growing '
    'when {r = 5} cm?', '{[1]/[π] ≈ 0.318} cm/s',
    '{V = [4]/[3]πr^3}, so {[dV]/[dr] = 4πr^2 = 100π}. From '
    '{[dV]/[dt] = [dV]/[dr] × [dr]/[dt]}, {100 = 100π × [dr]/[dt]}, giving '
    '{[dr]/[dt] = [1]/[π]}. Note that the answer is a rate of length, so the units '
    'are cm/s, not cm³/s.'),
  Q('{f(x) = (x^2 + k)^3} has gradient {36} at {x = 1}. Find the possible values of {k}.',
    '{k = −1 ± √6}',
    '{f′(x) = 6x(x^2 + k)^2}, so {f′(1) = 6(1 + k)^2 = 36}, giving {(1 + k)^2 = 6}. '
    'A square equals a positive number in two ways, so {1 + k = ±√6} and there are '
    '<b>two</b> values of {k}.'),
  Q('Sand falls into a conical pile whose height always equals the radius of its base, '
    'at {8} cm³/s. How fast is the height rising when {h = 4} cm?',
    '{[1]/[2π] ≈ 0.159} cm/s',
    'Use the condition to remove {r} before differentiating: with {r = h}, '
    '{V = [1]/[3]πr^2h = [1]/[3]πh^3}. Then {[dV]/[dh] = πh^2 = 16π} and '
    '{8 = 16π × [dh]/[dt]}, so {[dh]/[dt] = [1]/[2π]}. '
    'Differentiating before the substitution leaves two unknown rates and gets nowhere.'),
  Q('Show that {y = (x^2 − 2x + 2)^3} has exactly one stationary point, and find it.',
    '{(1, 1)}',
    '{y′ = 3(x^2 − 2x + 2)^2(2x − 2) = 6(x − 1)(x^2 − 2x + 2)^2}. Completing the '
    'square, {x^2 − 2x + 2 = (x − 1)^2 + 1 ≥ 1}, so that factor is never zero. '
    'Hence {y′ = 0} only when {x = 1}, and {y(1) = 1^3 = 1}.'),
 ]),
]
