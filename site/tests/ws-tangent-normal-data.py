# -*- coding: utf-8 -*-
"""Practice worksheet — The equations of the tangent and the normal
(Grade 11, lessons 17–18).

Twenty-eight problems written for this sheet; none of them appears in the
lesson's own practice bank, so the sheet can follow the lesson without
repeating it.

Every answer and every intermediate step was checked with a CAS.

Notation: {...} is a maths span, a^b raises, and [num]/[den] stacks.
"""

TITLE = 'The equations of the tangent and the normal'
GRADE = 11
LESSONS = '17–18'
REFS = 'Algebra 11, §1.6 · P1 · 7.6'
NOTE = ('Every answer needs one gradient and one point. The normal gradient is '
        '{−[1]/[m]}, so a horizontal tangent has a <b>vertical</b> normal, which has '
        'no gradient at all.')


def Q(q, a, work):
    return dict(q=q, a=a, work=work)


BANDS = [
 dict(key='easy', label='Easy', cols=2,
      note='One derivative, one substitution, one line. Problem 7 is the trap: '
           'the tangent is horizontal, so the normal cannot be written as {y = mx + c}.',
      items=[
  Q('Tangent to {y = x^2 + 1} at {x = 2}', '{y = 4x − 3}',
    '{y′ = 2x = 4} and the point is {(2, 5)}, so {y − 5 = 4(x − 2)}.'),
  Q('Normal to {y = x^2 + 1} at {x = 2}', '{y = −[x]/[4] + [11]/[2]}',
    'The tangent gradient is {4}, so the normal gradient is {−[1]/[4]} through '
    '{(2, 5)}.'),
  Q('Tangent to {y = x^3} at {x = 1}', '{y = 3x − 2}',
    '{y′ = 3x^2 = 3} at the point {(1, 1)}.'),
  Q('Gradient of the normal to {y = x^2} at {x = 3}', '{−[1]/[6]}',
    '{y′ = 6}, and the normal gradient is the negative reciprocal.'),
  Q('Where is the tangent to {y = x^2 + 8x} horizontal?', '{x = −4}',
    '{y′ = 2x + 8 = 0}.'),
  Q('Tangent to {y = 5 − 2x} at {x = 7}', '{y = 5 − 2x}',
    'A straight line is its own tangent everywhere — the gradient never changes.'),
  Q('Normal to {y = x^3} at {x = 0}', '{x = 0}',
    '{y′(0) = 0}, so the tangent is the {x}-axis and the normal is vertical. '
    'A vertical line has the equation {x = 0}, not {y = } anything.'),
 ]),

 dict(key='med', label='Medium', cols=2,
      note='The derivative takes a line or two first. In 12 and 13 the gradient is '
           'given and the point must be found, which is the reverse of the usual order.',
      items=[
  Q('Tangent to {y = x^3 − 3x + 1} at {x = 2}', '{y = 9x − 15}',
    '{y′ = 3x^2 − 3 = 9} and {y(2) = 3}, so {y − 3 = 9(x − 2)}.'),
  Q('Normal to {y = x^3 − 3x + 1} at {x = 2}', '{y = −[x]/[9] + [29]/[9]}',
    'Gradient {−[1]/[9]} through {(2, 3)}. Multiplying through by {9} gives '
    '{9y + x = 29}.'),
  Q('Tangent to {y = √x} at {x = 9}', '{y = [x]/[6] + [3]/[2]}',
    '{y′ = [1]/[2√x] = [1]/[6]} and the point is {(9, 3)}.'),
  Q('Tangent to {y = [6]/[x]} at {x = 3}', '{y = 4 − [2x]/[3]}',
    '{y = 6x^-1}, so {y′ = −6x^-2 = −[2]/[3]}, and the point is {(3, 2)}.'),
  Q('Where has {y = x^2 − 2x} a tangent parallel to {y = 4x}?', '{x = 3}',
    'Parallel means equal gradients: {2x − 2 = 4}.'),
  Q('Where has {y = x^3 − 9x} a tangent parallel to the {x}-axis?', '{x = ±√3}',
    '{3x^2 − 9 = 0}, so {x^2 = 3}. Two places, not one.'),
  Q('The tangent to {y = x^2} at {x = 4} crosses the {x}-axis where?', '{x = 2}',
    'The tangent is {y = 8x − 16}; setting {y = 0} gives {x = 2}. '
    'For {y = x^2} the tangent always cuts the axis at half the {x}-coordinate.'),
 ]),

 dict(key='hard', label='Hard', cols=1,
      note='The point of contact is unknown, so call it {a} and let the condition '
           'find it. In 16 the normal is intersected with the curve, which needs a '
           'quadratic, not a substitution.',
      items=[
  Q('The tangent to {y = x^2 − 3x} at {x = a} passes through {(0, −4)}. Find {a}.',
    '{a = ±2}',
    'Gradient {2a − 3} at {(a, a^2 − 3a)}, so the tangent is '
    '{y = (2a − 3)(x − a) + a^2 − 3a}. Putting {x = 0} gives '
    '{−2a^2 + 3a + a^2 − 3a = −a^2}. Setting {−a^2 = −4} gives {a^2 = 4}.'),
  Q('The normal to {y = x^2} at {x = 2} meets the curve again. Find the second point.',
    '{(−[9]/[4], [81]/[16])}',
    'The normal is {y = −[x]/[4] + [9]/[2]}. Solving {x^2 = −[x]/[4] + [9]/[2]} '
    'gives {4x^2 + x − 18 = 0}, that is {(x − 2)(4x + 9) = 0}. The root {x = 2} '
    'is the point we started from, so the new one is {x = −[9]/[4]}.'),
  Q('Find {k} so that {y = 2x + k} is a tangent to {y = x^2 + 3x + 4}.',
    '{k = [15]/[4]}',
    'A tangent touches, so the two meet in a repeated root. '
    '{x^2 + 3x + 4 = 2x + k} gives {x^2 + x + (4 − k) = 0}, whose discriminant '
    '{1 − 4(4 − k)} must be zero.'),
  Q('Find the tangent and the normal to {y = x^3 − x} at {x = −1}.',
    '{y = 2x + 2}; {y = −[x]/[2] − [1]/[2]}',
    '{y′ = 3x^2 − 1 = 2} and {y(−1) = 0}, so the point is {(−1, 0)}. '
    'The normal gradient is {−[1]/[2]} through the same point.'),
  Q('Show that the tangent to {y = √x} at {x = a} cuts the {y}-axis at '
    '{(0, [√a]/[2])}.', 'shown',
    '{y′ = [1]/[2√a]}, so the tangent is {y = √a + [1]/[2√a](x − a)}. '
    'At {x = 0} this is {√a − [a]/[2√a] = √a − [√a]/[2] = [√a]/[2]}.'),
  Q('Find the two tangents to {y = x^2} that pass through {(1, −3)}.',
    '{y = 6x − 9} and {y = −2x − 1}',
    'The tangent at {x = a} is {y = 2ax − a^2}. Through {(1, −3)}: '
    '{2a − a^2 = −3}, so {a^2 − 2a − 3 = 0} and {a = 3} or {a = −1}. '
    'The point lies below the parabola, which is why there are two.'),
  Q('Where do the normals to {y = x^2} at {x = 1} and {x = −1} meet?',
    '{(0, [3]/[2])}',
    'At {x = 1}: gradient {−[1]/[2]} through {(1, 1)}, so {y = −[x]/[2] + [3]/[2]}. '
    'At {x = −1}: gradient {[1]/[2]} through {(−1, 1)}, so {y = [x]/[2] + [3]/[2]}. '
    'By symmetry they meet on the {y}-axis.'),
 ]),

 dict(key='vhard', label='Very hard', cols=1,
      note='General results, and one that is easier by coordinate geometry than by '
           'calculus. In 25 the algebra is the proof: the second root is forced to '
           'exist.',
      items=[
  Q('The tangent to {y = [1]/[x]} at {x = a} ({a > 0}) meets the axes at {P} and '
    '{Q}. Show that the point of contact is the midpoint of {PQ}.', 'shown',
    '{y′ = −[1]/[a^2]}, so the tangent is {y = [2]/[a] − [x]/[a^2]}. '
    'It meets the {x}-axis at {P(2a, 0)} and the {y}-axis at {Q(0, [2]/[a])}. '
    'The midpoint of {PQ} is {(a, [1]/[a])}, which is the point of contact. '
    'True for every {a}, which is why the triangle it cuts has constant area.'),
  Q('Find the angle between {y = x^2} and {y = x^3} at {(1, 1)}.', '{≈ 8.13°}',
    'The gradients there are {2} and {3}. For two lines, '
    '{tan θ = |[m<sub>2</sub> − m<sub>1</sub>]/[1 + m<sub>1</sub>m<sub>2</sub>]| = [1]/[7]}, so '
    '{θ = arctan [1]/[7] ≈ 8.13°}. The curves are nearly parallel at that point.'),
  Q('Find the normal to {y = x^2 − 4x} at the point where the curve crosses the '
    'positive {x}-axis.', '{y = 1 − [x]/[4]}',
    '{x^2 − 4x = 0} gives {x = 0} or {x = 4}, and the positive one is {x = 4}. '
    '{y′ = 2x − 4 = 4}, so the normal gradient is {−[1]/[4]} through {(4, 0)}.'),
  Q('Show that every normal to {y = x^2} except the {y}-axis meets the curve twice.',
    'shown',
    'At {x = a} with {a ≠ 0} the normal is {y = a^2 − [1]/[2a](x − a)}. '
    'Solving against {y = x^2} gives a quadratic whose roots are {x = a} and '
    '{x = −a − [1]/[2a]}. These agree only if {2a^2 + 1 = −2a^2}, that is '
    '{4a^2 = −1}, which is impossible — so the two points are always distinct. '
    'At {a = 0} the normal is the {y}-axis, which meets the parabola only at the '
    'origin.'),
  Q('Find the points on {y = x^3 − 3x^2 + 2} where the tangent is parallel to '
    '{y = 9x}.', '{(3, 2)} and {(−1, −2)}',
    '{y′ = 3x^2 − 6x = 9} gives {x^2 − 2x − 3 = 0}, so {x = 3} or {x = −1}. '
    'Substituting back into the curve, not into the derivative, gives the '
    '{y}-coordinates.'),
  Q('The tangent to {y = x^2 + bx + c} at {x = 1} is {y = 3x − 2}. Find {b} and {c}.',
    '{b = 1}, {c = −1}',
    'Two conditions. Equal gradients: {y′(1) = 2 + b = 3}, so {b = 1}. '
    'Same point: the line gives {y = 1} at {x = 1}, and the curve gives '
    '{1 + b + c}, so {2 + c = 1}. Check: {y = x^2 + x − 1} has {y(1) = 1} and '
    '{y′(1) = 3}. ✓'),
  Q('Find the shortest distance from the origin to the tangent to {y = x^2} at '
    '{x = 1}.', '{[√5]/[5] ≈ 0.447}',
    'The tangent is {y = 2x − 1}, or {2x − y − 1 = 0}. The distance from '
    '{(0, 0)} to {Ax + By + C = 0} is {[|C|]/[√(A^2 + B^2)] = [1]/[√5]}. '
    'Calculus would work too, but it is a longer road to the same number.'),
 ]),
]
