# -*- coding: utf-8 -*-
"""The Grade 8 geometry paper — quadrilaterals, lessons 1–11.

Seven topics: the Grade 7 revision, polygons and their angles, the
parallelogram and its tests, the rectangle, the rhombus and square, and the
trapezium. Every numerical answer carries a check the verifier runs.
"""

SUBJECT = 'Geometry'
CODE = 'GEO'
DATE = '27/10/2026'      # the geometry paper sits the day after the algebra one

from bankfmt import F, M

SECTIONS = [
    ('Section A — Easy', 5, 'Answer all eight questions.'),
    ('Section B — Medium', 8, 'Answer all five questions. Show your working.'),
    ('Section C — Hard', 10, 'Answer both questions. Show every step of your working.'),
]
SPACE = [2, 3, 5]
SUBTITLE = 'Quadrilaterals · lessons 1–11'

A = [
    dict(topic='Revision of the Grade 7 course',
         q='In triangle ' + M('ABC') + ', ' + M('∠A') + ' = 40°' + ' and '
           + M('∠B') + ' = 75°' + '. Find ' + M('∠C') + '.',
         a=M('∠C') + ' = 65°',
         check=('simp', '180-40-75', '65')),
    dict(topic='Polygons. Interior and exterior angles',
         q='Find the sum of the interior angles of a polygon with seven sides.',
         a='900°',
         check=('simp', '180*(7-2)', '900')),
    dict(topic='Polygons. Interior and exterior angles',
         q='Each exterior angle of a regular polygon is ' + '24°'
           + '. How many sides has the polygon?',
         a=M('15') + ' sides',
         check=('simp', '360/24', '15')),
    dict(topic='Parallelogram and its properties',
         q='In parallelogram ' + M('ABCD') + ', ' + M('∠A') + ' = 68°' + '. Find '
           + M('∠B') + '.',
         a=M('∠B') + ' = 112°' + ' — neighbouring angles are supplementary',
         fig='fig-parallelogram-angle',
         check=('simp', '180-68', '112')),
    dict(topic='Rectangle and its properties',
         q='In rectangle ' + M('ABCD') + ', ' + M('AB = 6') + ' cm and '
           + M('AD = 8') + ' cm. Find the length of the diagonal ' + M('AC') + '.',
         a=M('AC = 10') + ' cm',
         fig='fig-rectangle-diagonal',
         check=('simp', 'sqrt(6**2+8**2)', '10')),
    dict(topic='Rhombus and square',
         q='The diagonals of a rhombus are ' + M('6') + ' cm and ' + M('8')
           + ' cm. Find its area.',
         a=M('24') + ' cm²',
         check=('simp', '6*8/2', '24')),
    dict(topic='Trapezium and the isosceles trapezium',
         q='In trapezium ' + M('ABCD') + ', ' + M('BC ∥ AD') + ' and '
           + M('∠A') + ' = 65°' + '. Find ' + M('∠B') + '.',
         a=M('∠B') + ' = 115°' + ' — the angles on a leg are supplementary',
         fig='fig-trapezium-angle',
         check=('simp', '180-65', '115')),
    dict(topic='Tests for a parallelogram',
         q='In quadrilateral ' + M('ABCD') + ', ' + M('AB ∥ CD') + ' and '
           + M('AB = CD') + '. What kind of quadrilateral is ' + M('ABCD')
           + ', and which test shows it?',
         a='A parallelogram, by the test: one pair of opposite sides equal and '
           'parallel.',
         check=None),
]

B = [
    dict(topic='Polygons. Interior and exterior angles',
         q='Four angles of a pentagon are ' + '100°' + ', ' + '110°'
           + ', ' + '120°' + ' and ' + M('x') + '. The fifth is '
           + M('x') + ' + 30°' + '. Find ' + M('x') + '.',
         a=M('x') + ' = 90°',
         check=('solve', '100+110+120+x+(x+30)-540', ['90'])),
    dict(topic='Parallelogram and its properties',
         q='The perimeter of parallelogram ' + M('ABCD') + ' is ' + M('46')
           + ' cm, and ' + M('AB') + ' is ' + M('5') + ' cm longer than '
           + M('BC') + '. Find ' + M('AB') + ' and ' + M('BC') + '.',
         a=M('AB = 14') + ' cm, ' + M('BC = 9') + ' cm',
         fig='fig-parallelogram-sides',
         check=('solve', '2*((x+5)+x)-46', ['9'])),
    dict(topic='Rhombus and square',
         q='In rhombus ' + M('ABCD') + ' the side is ' + M('10') + ' cm and the '
           'diagonal ' + M('AC = 12') + ' cm. Find the diagonal ' + M('BD')
           + ' and the area of the rhombus.',
         a=M('BD = 16') + ' cm, area ' + M('96') + ' cm²',
         fig='fig-rhombus-diagonals',
         checks=[('simp', '2*sqrt(10**2-6**2)', '16'),
                 ('simp', '12*16/2', '96')]),
    dict(topic='Trapezium and the isosceles trapezium',
         q='In the isosceles trapezium ' + M('ABCD') + ', ' + M('BC = 10')
           + ' cm, ' + M('AD = 22') + ' cm and the leg ' + M('AB = 10')
           + ' cm. Find the height of the trapezium.',
         a=M('8') + ' cm',
         fig='fig-isosceles-trapezium',
         checks=[('simp', '(22-10)/2', '6'),
                 ('simp', 'sqrt(10**2-6**2)', '8')]),
    dict(topic='Rectangle and its properties',
         q='The diagonals of rectangle ' + M('ABCD') + ' meet at ' + M('O')
           + ', and ' + M('∠AOB') + ' = 130°' + '. Find ' + M('∠OAB') + '.',
         a=M('∠OAB') + ' = 25°' + ' — triangle ' + M('AOB') + ' is isosceles, since '
           'the diagonals are equal and bisect each other',
         fig='fig-rectangle-diagonals-o',
         check=('simp', '(180-130)/2', '25')),
]

C = [
    dict(topic='Parallelogram · tests and properties',
         q='In parallelogram ' + M('ABCD') + ' the bisector of ' + M('∠A')
           + ' meets ' + M('BC') + ' at ' + M('K') + '. Show that '
           + M('BK = AB') + '.',
         a=M('∠BAK = ∠KAD') + ' (bisector) and ' + M('∠KAD = ∠AKB')
           + ' (alternate angles, ' + M('AD ∥ BC') + '), so '
           + M('∠BAK = ∠AKB') + ' and triangle ' + M('ABK')
           + ' is isosceles: ' + M('BK = AB') + '.',
         fig='fig-parallelogram-bisector',
         check=None,
         extra=dict(q='In that parallelogram ' + M('AB = 7') + ' cm and '
                      + M('BC = 11') + ' cm. Find ' + M('KC') + '.',
                    marks=4, a=M('KC = 4') + ' cm',
                    check=('simp', '11-7', '4'))),
    dict(topic='Polygons. Interior and exterior angles',
         q='Each interior angle of a regular polygon is ' + '156°'
           + '. Find the number of sides.',
         a=M('15') + ' sides — the exterior angle is ' + '180° − 156° = 24°',
         check=('simp', '360/(180-156)', '15'),
         extra=dict(q='Find the number of diagonals of that polygon.',
                    marks=5, a=M('90') + ' diagonals, from '
                               + F(M('n(n − 3)'), M('2')),
                    check=('simp', '15*(15-3)/2', '90'))),
]

PAPER = [A, B, C]

# The worked solutions for the marking key, by question number. Kept apart
# from the questions so the key can be rewritten without disturbing the paper.
SOLUTIONS = {
    1: 'The three angles of a triangle add to 180°, so the third is '
       + M('180° − 40° − 75°') + '.',
    2: 'The interior angles of an ' + M('n') + '-sided polygon add to '
       + M('180°(n − 2)') + '; with ' + M('n = 7') + ' that is ' + M('180° · 5')
       + '.',
    3: 'The exterior angles of a convex polygon add to 360°, and in a regular '
       'one they are all equal, so there are ' + M('360° ÷ 24°') + ' of them.',
    4: M('AD ∥ BC') + ', so ' + M('∠A') + ' and ' + M('∠B') + ' are co-interior '
       'angles and add to 180°: ' + M('180° − 68°') + '.',
    5: 'A rectangle has right angles, so triangle ' + M('ABC') + ' is '
       'right-angled at ' + M('B') + ', and ' + M('BC = AD = 8') + ' cm. By '
       'Pythagoras ' + M('AC² = 6² + 8² = 100') + '.',
    6: 'The diagonals of a rhombus are perpendicular, so the area is half their '
       'product: ' + M('½ · 6 · 8') + '.',
    7: M('BC ∥ AD') + ', and the leg ' + M('AB') + ' crosses both, so '
       + M('∠A') + ' and ' + M('∠B') + ' are co-interior: ' + M('∠A + ∠B = 180°')
       + '.',
    8: 'Draw ' + M('AC') + '. The alternate angles at ' + M('A') + ' and '
       + M('C') + ' are equal and ' + M('AB = CD') + ', so the two triangles are '
       'congruent (SAS) and the other pair of sides is equal and parallel too.',
    9: 'The angles of a pentagon add to ' + M('180°(5 − 2) = 540°') + '. The '
       'three given ones make 330°, so ' + M('x + (x + 30°) = 210°') + ', giving '
       + M('2x = 180°') + '.',
    10: 'Opposite sides are equal, so the perimeter is ' + M('2(AB + BC) = 46')
        + ' and ' + M('AB + BC = 23') + '. With ' + M('AB = BC + 5') + ' that is '
        + M('2·BC + 5 = 23') + '.',
    11: 'The diagonals bisect each other at right angles, so half of '
        + M('AC') + ' is 6 cm and half of ' + M('BD') + ' is '
        + M('√(10² − 6²) = 8') + ' cm. So ' + M('BD = 16') + ' cm and the area '
        'is ' + M('½ · 12 · 16') + '.',
    12: 'The perpendiculars from ' + M('B') + ' and ' + M('C') + ' cut equal '
        'pieces off ' + M('AD') + ', each ' + M('(22 − 10) ÷ 2 = 6') + ' cm. '
        'Pythagoras in that right triangle gives ' + M('√(10² − 6²)') + '.',
    13: 'The diagonals of a rectangle are equal and bisect each other, so '
        + M('OA = OB') + ' and triangle ' + M('AOB') + ' is isosceles. Its base '
        'angles are ' + M('(180° − 130°) ÷ 2') + '.',
    14: 'Two equal angles in a triangle face two equal sides, which is what makes '
        + M('ABK') + ' isosceles and gives ' + M('BK = AB') + '. Note it is the '
        'parallel ' + M('AD ∥ BC') + ' that turns the bisected angle into '
        + M('∠AKB') + '.',
    15: 'Interior and exterior angles at a vertex are supplementary, so the '
        'exterior angle is ' + M('180° − 156° = 24°') + ', and a convex polygon '
        'has ' + M('360° ÷ 24° = 15') + ' of them.',
}

EXTRA_SOLUTIONS = {
    14: M('BK = AB = 7') + ' cm from part (a), and ' + M('K') + ' lies on '
        + M('BC') + ', so ' + M('KC = BC − BK = 11 − 7') + '.',
    15: 'Each vertex joins to all but itself and its two neighbours, so there are '
        + M('n(n − 3)') + ' such joins, each counted twice: '
        + M('15 · 12 ÷ 2') + '.',
}

_n = 0
for _section in PAPER:
    for _item in _section:
        _n += 1
        if _n in SOLUTIONS:
            _item['sol'] = SOLUTIONS[_n]
        if _item.get('extra') and _n in EXTRA_SOLUTIONS:
            _item['extra']['sol'] = EXTRA_SOLUTIONS[_n]
