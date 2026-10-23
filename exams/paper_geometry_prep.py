# -*- coding: utf-8 -*-
"""Preparation for the Grade 8 geometry final — thirty short questions.

The same seven topics as the paper, lessons 1–11: the Grade 7 revision,
polygons and their angles, the parallelogram and its tests, the rectangle,
the rhombus and square, and the trapezium.
"""

from bankfmt import M

SUBJECT = 'Geometry'
CODE = 'GEO'
DATE = '27/10/2026'
SUBTITLE = 'Quadrilaterals · lessons 1–11'
FOR = 'Geometry final exam, 27/10/2026'

_T1 = 'Revision of the Grade 7 course'
_T2 = 'Polygons. Interior and exterior angles'
_T3 = 'Parallelogram and its properties'
_T4 = 'Tests for a parallelogram'
_T5 = 'Rectangle and its properties'
_T6 = 'Rhombus and square'
_T7 = 'Trapezium and the isosceles trapezium'


def q(topic, text, answer, check=None):
    return dict(topic=topic, q=text, a=answer, check=check)


QUESTIONS = [
    # ---- the Grade 7 toolkit ---------------------------------------------
    q(_T1, 'Two angles of a triangle are 50° and 60°. Find the third.',
      '70°', ('simp', '180-50-60', '70')),
    q(_T1, 'An exterior angle of a triangle is 110°, and one of the two remote '
           'interior angles is 40°. Find the other.',
      '70°', ('simp', '110-40', '70')),
    q(_T1, 'The apex angle of an isosceles triangle is 40°. Find a base angle.',
      '70°', ('simp', '(180-40)/2', '70')),
    q(_T1, 'Two parallel lines are cut by a transversal. One co-interior angle '
           'is 115°. Find the other.',
      '65°', ('simp', '180-115', '65')),
    # ---- polygons ---------------------------------------------------------
    q(_T2, 'Find the sum of the interior angles of a hexagon.',
      '720°', ('simp', '180*(6-2)', '720')),
    q(_T2, 'Find the sum of the interior angles of a decagon.',
      '1440°', ('simp', '180*(10-2)', '1440')),
    q(_T2, 'Find each interior angle of a regular hexagon.',
      '120°', ('simp', '180*(6-2)/6', '120')),
    q(_T2, 'Find each exterior angle of a regular decagon.',
      '36°', ('simp', '360/10', '36')),
    q(_T2, 'Each exterior angle of a regular polygon is 30°. How many sides has '
           'it?',
      '12 sides', ('simp', '360/30', '12')),
    q(_T2, 'Three angles of a quadrilateral are 80°, 95° and 100°. Find the '
           'fourth.',
      '85°', ('simp', '360-80-95-100', '85')),
    # ---- the parallelogram ------------------------------------------------
    q(_T3, 'In parallelogram ' + M('ABCD') + ', ' + M('∠A') + ' = 110°. Find '
           + M('∠C') + '.',
      '110° — opposite angles are equal'),
    q(_T3, 'In parallelogram ' + M('ABCD') + ', ' + M('∠A') + ' = 110°. Find '
           + M('∠D') + '.',
      '70° — neighbouring angles are supplementary', ('simp', '180-110', '70')),
    q(_T3, 'The sides of a parallelogram are 7 cm and 9 cm. Find its perimeter.',
      '32 cm', ('simp', '2*(7+9)', '32')),
    q(_T3, 'The diagonals of parallelogram ' + M('ABCD') + ' meet at ' + M('O')
           + ', and ' + M('AC') + ' = 10 cm. Find ' + M('AO') + '.',
      '5 cm — the diagonals bisect each other', ('simp', '10/2', '5')),
    q(_T3, 'In parallelogram ' + M('ABCD') + ', ' + M('AB') + ' = 6 cm. Find '
           + M('CD') + '.',
      '6 cm — opposite sides are equal'),
    # ---- the tests --------------------------------------------------------
    q(_T4, 'The diagonals of quadrilateral ' + M('ABCD') + ' bisect each other. '
           'What kind of quadrilateral is it?',
      'A parallelogram.'),
    q(_T4, 'In quadrilateral ' + M('ABCD') + ', ' + M('AB ∥ CD') + ' and '
           + M('AD ∥ BC') + '. What kind of quadrilateral is it?',
      'A parallelogram, by the definition.'),
    q(_T4, 'A quadrilateral has one pair of parallel sides. Must it be a '
           'parallelogram?',
      'No — it is a trapezium. Both pairs must be parallel.'),
    # ---- the rectangle ----------------------------------------------------
    q(_T5, 'The sides of a rectangle are 5 cm and 12 cm. Find its diagonal.',
      '13 cm', ('simp', 'sqrt(5**2+12**2)', '13')),
    q(_T5, 'The diagonals of rectangle ' + M('ABCD') + ' meet at ' + M('O')
           + ' and ' + M('BD') + ' = 10 cm. Find ' + M('AO') + '.',
      '5 cm — the diagonals are equal and bisect each other',
      ('simp', '10/2', '5')),
    q(_T5, 'In rectangle ' + M('ABCD') + ', ' + M('∠ABD') + ' = 35°. Find '
           + M('∠DBC') + '.',
      '55°', ('simp', '90-35', '55')),
    q(_T5, 'A rectangle is 8 cm by 15 cm. Find its perimeter.',
      '46 cm', ('simp', '2*(8+15)', '46')),
    # ---- the rhombus and the square ---------------------------------------
    q(_T6, 'The side of a rhombus is 7 cm. Find its perimeter.',
      '28 cm', ('simp', '4*7', '28')),
    q(_T6, 'The diagonals of a rhombus are 10 cm and 24 cm. Find its area.',
      '120 cm²', ('simp', '10*24/2', '120')),
    q(_T6, 'The diagonals of a rhombus are 10 cm and 24 cm. Find its side.',
      '13 cm', ('simp', 'sqrt(5**2+12**2)', '13')),
    q(_T6, 'The diagonal of a square is 6 cm. Find its area.',
      '18 cm²', ('simp', '6*6/2', '18')),
    q(_T6, 'One angle of a rhombus is 120°. Find the angle next to it.',
      '60°', ('simp', '180-120', '60')),
    # ---- the trapezium ----------------------------------------------------
    q(_T7, 'In trapezium ' + M('ABCD') + ', ' + M('BC ∥ AD') + ' and '
           + M('∠A') + ' = 72°. Find ' + M('∠B') + '.',
      '108°', ('simp', '180-72', '108')),
    q(_T7, 'A base angle of an isosceles trapezium is 65°. Find the angle at the '
           'shorter base.',
      '115°', ('simp', '180-65', '115')),
    q(_T7, 'The bases of an isosceles trapezium are 6 cm and 14 cm, and each leg '
           'is 9 cm. Find its perimeter.',
      '38 cm', ('simp', '6+14+9+9', '38')),
]
