# -*- coding: utf-8 -*-
"""Grade 8 Geometry — revision drill on the Test 1 topics (lessons 1–6).

Thirty-five short questions on exactly the four topics Test 1 examined, for
students who need the practice repeated before a retake. Nothing here needs
anything from lesson 7 onwards.

Every numeric answer was checked before it was written down.

Notation: {...} is a maths span, a^b raises, and [num]/[den] stacks.
"""

TITLE = 'Geometry — revision of Test 1'
GRADE = 'Grade 8'
COVERS = 'Lessons 1–6 · Quarter I'
NOTE = ('Sketch every question before answering it, and name the fact you used — '
        'the angle sum, the property, or the test. A number with no reason earns '
        'no method marks.')
COLS = 2        # columns on the student sheet
COLS_KEY = 2    # columns on the answer key


def Q(q, a, why=''):
    return dict(q=q, a=a, why=why)


BLOCKS = [
 dict(key='t1', nom='Lessons 1–2 · Revision of the Grade 7 course',
      lead='Angles and triangles', items=[
  Q('Two angles of a triangle are {42°} and {63°}. Find the third.', '{75°}',
    'The angle sum of a triangle is {180°}.'),
  Q('An isosceles triangle has a base angle of {55°}. Find the apex angle.',
    '{70°}', '{180° − 2 × 55°}.'),
  Q('An isosceles triangle has an apex angle of {96°}. Find each base angle.',
    '{42°}', 'The two base angles are equal: {(180° − 96°) ÷ 2}.'),
  Q('Two interior angles of a triangle are {40°} and {65°}. Find the exterior '
    'angle at the third vertex.', '{105°}',
    'An exterior angle equals the sum of the two remote interior angles.'),
  Q('One acute angle of a right-angled triangle is {37°}. Find the other.',
    '{53°}', 'The two acute angles add to {90°}.'),
  Q('State each angle of an equilateral triangle.', '{60°}'),
  Q('Two angles lie on a straight line and one is {118°}. Find the other.',
    '{62°}', 'Angles on a straight line add to {180°}.'),
  Q('Two straight lines cross. One angle is {74°}. Find the angle vertically '
    'opposite it.', '{74°}', 'Vertically opposite angles are equal.'),
 ]),

 dict(key='t2', nom='Lessons 3–4 · Polygons. Interior and exterior angles',
      lead='Angle sums, regular polygons', items=[
  Q('Find the sum of the interior angles of a hexagon.', '{720°}',
    '{(6 − 2) × 180°}.'),
  Q('Find the sum of the interior angles of a decagon.', '{1440°}',
    '{(10 − 2) × 180°}.'),
  Q('The interior angles of a convex polygon add to {900°}. How many sides?',
    '{7}', '{(n − 2) × 180° = 900°}.'),
  Q('The interior angles of a convex polygon add to {2160°}. How many sides?',
    '{14}'),
  Q('Each exterior angle of a regular polygon is {24°}. How many sides?',
    '{15}', 'The exterior angles add to {360°}.'),
  Q('Each exterior angle of a regular polygon is {72°}. How many sides?',
    '{5}'),
  Q('Find each interior angle of a regular pentagon.', '{108°}',
    '{540° ÷ 5}, or {180° − 72°}.'),
  Q('Find each interior angle of a regular octagon.', '{135°}'),
  Q('Each interior angle of a regular polygon is {150°}. How many sides?',
    '{12}', 'Then each exterior angle is {30°}, and {360° ÷ 30° = 12}.'),
  Q('What do the exterior angles of <em>any</em> convex polygon add to?',
    '{360°}', 'The number of sides does not matter.'),
  Q('A regular polygon has {20} sides. Find each exterior angle.', '{18°}'),
  Q('Four angles of a pentagon are {100°}, {110°}, {120°} and {95°}. Find the '
    'fifth.', '{115°}', 'The five add to {540°}.'),
 ]),

 dict(key='t3', nom='Lesson 5 · Parallelogram and its properties',
      lead='Opposite sides and angles, diagonals', items=[
  Q('In parallelogram {ABCD}, {∠A = 68°}. Find {∠B}, {∠C} and {∠D}.',
    '{∠B = 112°}, {∠C = 68°}, {∠D = 112°}',
    'Opposite angles are equal; neighbouring angles are supplementary.'),
  Q('The perimeter of a parallelogram is {42} cm and one side is {12} cm. Find '
    'the other side.', '{9} cm', 'Two sides of each length: {42 ÷ 2 − 12}.'),
  Q('A parallelogram has {AB = 7} cm and {BC = 11} cm. Find its perimeter.',
    '{36} cm'),
  Q('The diagonal {AC} of parallelogram {ABCD} is {16} cm and the diagonals meet '
    'at {O}. Find {AO}.', '{8} cm', 'The diagonals bisect each other.'),
  Q('In parallelogram {ABCD}, {∠A : ∠B = 2 : 3}. Find both angles.',
    '{∠A = 72°}, {∠B = 108°}', 'They are supplementary, so {5} parts make {180°}.'),
  Q('One angle of a parallelogram is {90°}. What can you say about the other '
    'three?', 'all {90°} — it is a rectangle',
    'Its neighbour is {180° − 90°}, and opposite angles repeat.'),
  Q('In parallelogram {ABCD} the diagonal {BD} makes {∠ABD = 35°} and '
    '{∠ADB = 60°}. Find {∠A}.', '{85°}',
    'The three angles of {△ABD} add to {180°}.'),
  Q('What do two neighbouring angles of a parallelogram add to?', '{180°}',
    'They are co-interior angles between the parallel sides.'),
 ]),

 dict(key='t4', nom='Lesson 6 · Tests for a parallelogram',
      lead='Which test proves it — and which does not', items=[
  Q('In {ABCD}, {AB ∥ CD} and {AB = CD}. Is it a parallelogram? Name the test.',
    'yes — one pair of sides equal and parallel'),
  Q('In {ABCD}, {AB = CD} and {BC = AD}. Is it a parallelogram? Name the test.',
    'yes — both pairs of opposite sides equal'),
  Q('In {ABCD} the diagonals bisect each other. Is it a parallelogram?',
    'yes — the diagonal test'),
  Q('In {ABCD}, {AB ∥ CD} and {BC ∥ AD}. Is it a parallelogram?',
    'yes — this is the definition'),
  Q('In {ABCD}, {AB ∥ CD} and {BC = AD}. Must it be a parallelogram?',
    'no', 'An isosceles trapezium satisfies this and is not a parallelogram — '
    'the equal pair must be the <em>parallel</em> pair.'),
  Q('In {ABCD}, {∠A = ∠C} and {∠B = ∠D}. Is it a parallelogram?',
    'yes — both pairs of opposite angles equal'),
  Q('The diagonals of {ABCD} meet at {O} with {AO = OC = 5} cm and '
    '{BO = OD = 7} cm. Is it a parallelogram? Name the test.',
    'yes — each diagonal is bisected by the other'),
 ]),
]
