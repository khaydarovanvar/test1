# -*- coding: utf-8 -*-
"""Grade 8 Geometry, Test 1 — lessons 1–6 of Quarter I.

Eleven questions out of 100 marks in 40 minutes, on two pages with room to
draw. Geometry is answered with a sketch, so each question is given working
space rather than a single answer line.

Every numeric answer was checked before it was written down.

Notation inside the text: {...} is a maths span, a^b raises, and [num]/[den]
stacks into a real fraction.
"""

TITLE = 'Test 1 · Geometry'
GRADE = 'Grade 8'
DURATION = 40          # minutes
TOTAL = 100            # marks

COVERS_SHORT = ('Lessons 1–6 · Revision of Grade 7 · Polygons · '
                'Parallelogram: properties and tests')

COVERS = [
    ('1–2', 'Revision of the Grade 7 course', 'Geometry 8, p. 3 · Stage 9 · 5.1'),
    ('3–4', 'Polygons. Interior and exterior angles', 'Geometry 8, Тема 1 · Stage 9 · 5.2–5.3'),
    ('5',   'Parallelogram and its properties', 'Geometry 8, Тема 2'),
    ('6',   'Tests for a parallelogram', 'Geometry 8, Тема 3'),
]

RULES = [
    'Draw a diagram for every question — an unlabelled answer earns no method marks.',
    'Give a reason for each step: the angle fact, the property, or the test you used.',
]


def Q(q, marks, ans, work, lesson, note=''):
    return dict(q=q, marks=marks, ans=ans, work=work, lesson=lesson, note=note)


SECTIONS = [
 dict(letter='A', level='easy', title='Six marks each',
      lead='One fact each. A short reason is enough.',
      cols=2, space=56, items=[

  Q('Two angles of a triangle are {38°} and {57°}. Find the third angle.',
    6, '{85°}',
    'The angle sum of a triangle is {180°}: {180° − 38° − 57° = 85°}.', 1),

  Q('An isosceles triangle has a base angle of {72°}. Find its apex angle.',
    6, '{36°}',
    'Both base angles are {72°}, so the apex is {180° − 2 × 72° = 36°}.', 1),

  Q('Each exterior angle of a regular polygon is {40°}. How many sides has it?',
    6, '{9} sides',
    'The exterior angles of any convex polygon add to {360°}, so {n = 360° ÷ 40° = 9}.', 2),

  Q('In parallelogram {ABCD}, {∠B = 115°}. Find {∠A} and {∠C}.',
    6, '{∠A = 65°}, {∠C = 115°}',
    '{∠A} and {∠B} are neighbouring, so they are supplementary: {180° − 115° = 65°}. '
    '{∠C} is opposite {∠B}, so it equals it.', 3,
    'Answering {∠A = 115°} means opposite and neighbouring angles have been swapped.'),

  Q('In quadrilateral {ABCD}, {AB = CD} and {AB ∥ CD}. Is {ABCD} a parallelogram? '
    'Name the test you used.',
    6, 'Yes — Test 1',
    'Test 1: one pair of opposite sides equal <em>and</em> parallel is enough.', 4),
 ]),

 dict(letter='B', level='med', title='Ten marks each',
      lead='Show the working. Method marks are available even when the final answer is wrong.',
      cols=1, space=100, items=[

  Q('In {△ABC}, {AB = AC} and {∠A = 40°}. The bisector of {∠B} meets {AC} at {D}. '
    'Find {∠BDC}.',
    10, '{∠BDC = 75°}',
    'The base angles are {(180° − 40°) ÷ 2 = 70°} each, so {∠B = ∠C = 70°}. The '
    'bisector halves {∠B}, giving {∠DBC = 35°}. In {△BDC}: '
    '{∠BDC = 180° − 35° − 70° = 75°}.', 1),

  Q('The interior angles of a convex polygon add to {1440°}. Find the number of '
    'sides, and the size of each interior angle if the polygon is regular.',
    10, '{n = 10}; each interior angle {144°}',
    '{180°(n − 2) = 1440°} gives {n − 2 = 8}, so {n = 10}. If regular, each angle is '
    '{1440° ÷ 10 = 144°}.', 2),

  Q('The perimeter of a parallelogram is {54} cm and one side is {5} cm shorter '
    'than the other. Find the two sides.',
    10, '{16} cm and {11} cm',
    'Opposite sides are equal, so two adjacent sides add to {27} cm. With '
    '{x + (x − 5) = 27}: {2x = 32}, {x = 16}, and the other side is {11}.', 3,
    'Dividing the perimeter by 4 is the usual error — the sides are not all equal.'),

  Q('In quadrilateral {ABCD} the diagonals meet at {O}, with {AO = OC = 6} cm, '
    '{BO = 5} cm and {OD = 5} cm. Is {ABCD} a parallelogram? Give your reason.',
    10, 'Yes — Test 3',
    '{O} is the midpoint of {AC} (since {AO = OC}) and of {BD} (since {BO = OD}), '
    'so the diagonals bisect each other. That is Test 3.', 4,
    'Compare with {AO = OC = 6}, {BO = 4}, {OD = 6}: only one diagonal is bisected, '
    'and the answer would be no.'),
 ]),

 dict(letter='C', level='hard', title='Fifteen marks each',
      lead='Set your work out as a proof: statement, then reason.',
      cols=1, space=270, items=[

  Q('A convex polygon has interior angles adding to {1800°}.<br>'
    '<b>(a)</b> Find the number of sides. &nbsp;<span class="mk">[5]</span><br>'
    '<b>(b)</b> The polygon is regular. Find each interior angle and each exterior '
    'angle. &nbsp;<span class="mk">[5]</span><br>'
    '<b>(c)</b> Find the total number of diagonals. &nbsp;<span class="mk">[5]</span>',
    15,
    '<b>(a)</b> {n = 12} &nbsp;&nbsp; <b>(b)</b> interior {150°}, exterior {30°} '
    '&nbsp;&nbsp; <b>(c)</b> {54}',
    '<b>(a)</b> {180°(n − 2) = 1800°}, so {n − 2 = 10} and {n = 12}.<br>'
    '<b>(b)</b> Each interior angle is {1800° ÷ 12 = 150°}, and the exterior angle is '
    '{180° − 150° = 30°}. Check: {12 × 30° = 360°}.<br>'
    '<b>(c)</b> Each vertex sends a diagonal to {n − 3 = 9} others, and every diagonal '
    'is counted from both ends: {[12 × 9]/[2] = 54}.', 2,
    'In (c) forgetting to halve gives 108 — the commonest slip in the topic.'),

  Q('{ABCD} is a quadrilateral in which {AB = CD} and {BC = AD}.<br>'
    '<b>(a)</b> Prove that {ABCD} is a parallelogram. &nbsp;<span class="mk">[10]</span><br>'
    '<b>(b)</b> A student says “{AC = BD} would also prove it”. Give a counter-example. '
    '&nbsp;<span class="mk">[5]</span>',
    15,
    '<b>(a)</b> proof below &nbsp;&nbsp; <b>(b)</b> an isosceles trapezium',
    '<b>(a)</b> Draw the diagonal {AC}. In {△ABC} and {△CDA}: {AB = CD} (given), '
    '{BC = DA} (given), and {AC} is common — so the triangles are congruent by '
    '<b>SSS</b>. Hence {∠BAC = ∠DCA}, and these are alternate angles, so {AB ∥ CD}. '
    'Likewise {∠BCA = ∠DAC} gives {BC ∥ AD}. Both pairs of opposite sides are '
    'parallel, so {ABCD} is a parallelogram.<br>'
    '<b>(b)</b> An isosceles trapezium has equal diagonals but only one pair of '
    'parallel sides, so equal diagonals are not sufficient.', 4,
    'Part (a) is Test 2, but the marks are for the congruence argument that proves '
    'it — quoting the test alone is not a proof. Part (b) is the discriminator.'),
 ]),
]

LESSON_OF = {1: 'Lessons 1–2 · Revision of the Grade 7 course',
             2: 'Lessons 3–4 · Polygons. Interior and exterior angles',
             3: 'Lesson 5 · Parallelogram and its properties',
             4: 'Lesson 6 · Tests for a parallelogram'}
