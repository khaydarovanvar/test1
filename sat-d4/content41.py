# -*- coding: utf-8 -*-
"""SAT Math 4.1 — Lines, Angles & Triangles."""
import shapes as S

DEG = '°'


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


LESSON = {
    'code': '4.1',
    'title': 'Lines, Angles & Triangles',
    'sections': [
        {
            'title': 'Angles on a line and at a point',
            'fact': 'straight line = 180' + DEG + '  |  full turn = 360' + DEG
                    + '  |  vertical angles are equal',
            'text': 'Complementary angles add to 90' + DEG + '; supplementary to 180' + DEG
                    + '. Vertical (opposite) angles made by two crossing lines are always '
                      'equal. Most angle-chasing questions are one of these three facts '
                      'applied twice.',
            'figs': [S.complementary(), S.straight_line(), S.crossing_lines()],
            'caption': 'Three pictures, three facts: a right angle split in two parts that '
                       'add to 90' + DEG + '; a straight line split in two that add to 180'
                       + DEG + '; and two crossing lines, where opposite angles are equal '
                       'and neighbours add to 180' + DEG + '.',
            'examples': [
                ex('Two angles are complementary. One is 3x' + DEG + ' and the other (2x + 10)'
                   + DEG + '. Find x.',
                   ['3x + 2x + 10 = 90, so 5x = 80.', 'x = **16**.'],
                   S.complementary('48' + DEG, '42' + DEG)),
                ex('Two angles on a straight line are (4x)' + DEG + ' and (x + 30)' + DEG
                   + '. Find x.',
                   ['4x + x + 30 = 180, so 5x = 150.', 'x = **30**.'],
                   S.straight_line('120' + DEG, '60' + DEG)),
                ex('Two lines cross. One angle is 65' + DEG + '. Find the other three.',
                   ['The vertical angle is **65' + DEG + '**; the two adjacent ones are each '
                    '180 − 65 = **115' + DEG + '**.'],
                   S.crossing_lines(65)),
            ],
        },
        {
            'title': 'Parallel lines and a transversal',
            'fact': 'corresponding and alternate angles are equal  |  co-interior angles add '
                    'to 180' + DEG,
            'text': 'When a line crosses two parallels, every angle is either equal to a given '
                    'one or supplementary to it. Find the equal pairs first; everything else '
                    'follows from 180' + DEG + '.',
            'figs': [S.transversal()],
            'caption': 'The arrow marks say the two lines are parallel. Angles 1 and 5 are '
                       'corresponding (equal), 4 and 5 are alternate interior (equal), and '
                       '3 and 5 are co-interior (they add to 180' + DEG + ').',
            'examples': [
                ex('Two parallel lines are cut by a transversal and one angle is 72' + DEG
                   + '. What is its corresponding angle?',
                   ['Corresponding angles are equal.', '**72' + DEG + '**.'],
                   S.transversal('corresponding', 72)),
                ex('What is the co-interior angle to that 72' + DEG + '?',
                   ['Co-interior angles add to 180' + DEG + '.',
                    '180 − 72 = **108' + DEG + '**.'],
                   S.transversal('cointerior', 72)),
                ex('In the figure above, angles 4 and 5 are what kind of pair?',
                   ['They sit between the parallels on opposite sides of the transversal: '
                    '**alternate interior**, so they are equal.'],
                   S.transversal('alternate', 72)),
            ],
        },
        {
            'title': 'Triangle angle facts',
            'fact': 'angles sum to 180' + DEG + '  |  an exterior angle equals the two remote '
                    'interior angles',
            'text': 'The exterior-angle shortcut saves a step: instead of finding the third '
                    'angle and subtracting from 180, add the two far angles directly.',
            'figs': [S.triangle((50, 60, 70), exterior=120)],
            'caption': 'The three angles inside total 180' + DEG + '. The exterior angle at B '
                       'is 120' + DEG + ', which is both 180 − 60 and 50 + 70 — the '
                       'two angles far away from it.',
            'examples': [
                ex('A triangle has angles 50' + DEG + ' and 60' + DEG + '. Find the third.',
                   ['180 − 50 − 60 = **70' + DEG + '**.'],
                   S.triangle((50, 60, 70))),
                ex('For that triangle, what is the exterior angle at the 60' + DEG + ' vertex?',
                   ['It equals the two remote interior angles: 50 + 70 = **120' + DEG + '**. '
                    'Checking: 180 − 60 = 120.'],
                   S.triangle((50, 60, 70), exterior=120)),
                ex('A triangle’s angles are in the ratio 2 : 3 : 4. Find the largest.',
                   ['The parts total 9, and 180/9 = 20' + DEG + ' per part.',
                    'The largest is 4 × 20 = **80' + DEG + '**.'],
                   S.triangle((40, 60, 80))),
            ],
        },
        {
            'title': 'Isosceles and equilateral triangles',
            'fact': 'equal sides face equal angles  |  equilateral → every angle 60' + DEG,
            'text': 'The tick marks on a diagram are doing real work: two marked sides mean two '
                    'equal base angles. This turns most isosceles questions into a single '
                    'equation.',
            'figs': [S.isosceles(40), S.isosceles('60' + DEG, base='60' + DEG, equilateral=True)],
            'caption': 'Two equal sides (the tick marks) force two equal base angles, so '
                       '2x + 40 = 180. When all three sides are marked, every angle is 60'
                       + DEG + '.',
            'examples': [
                ex('An isosceles triangle has apex angle 40' + DEG + '. Find each base angle.',
                   ['The two base angles are equal: (180 − 40)/2.', '**70' + DEG + '** each.'],
                   S.isosceles(40, base='70' + DEG)),
                ex('An isosceles triangle has a base angle of 50' + DEG + '. Find the apex angle.',
                   ['Both base angles are 50' + DEG + '.',
                    '180 − 100 = **80' + DEG + '**.'],
                   S.isosceles('80' + DEG, base='50' + DEG)),
                ex('Why can an isosceles triangle not have two angles of 100' + DEG + '?',
                   ['They would total 200' + DEG + ', already above 180' + DEG + '. The equal '
                    'angles in an isosceles triangle must each be **below 90' + DEG + '**.'],
                   S.isosceles('?', base='100' + DEG, impossible=True)),
            ],
        },
        {
            'title': 'The triangle inequality',
            'fact': 'any two sides must add to more than the third',
            'text': 'Given two sides a and b, the third side x satisfies |a − b| < x < a + b. '
                    'Questions ask for the possible values, or for the largest or smallest whole '
                    'number that works.',
            'figs': [S.hinge(7, 10), S.numberline(3, 17)],
            'caption': 'Hinge the two known sides open and shut. Straightened out they reach '
                       '7 + 10 = 17; folded back they close to 10 − 7 = 3. The third side '
                       'lives strictly between, which is the red stretch of the number line.',
            'examples': [
                ex('Two sides are 7 and 10. What values can the third side take?',
                   ['10 − 7 < x < 10 + 7.', '**3 < x < 17**.'],
                   S.numberline(3, 17)),
                ex('For those sides, what is the largest possible whole-number third side?',
                   ['x must be below 17.', '**16**.'],
                   S.numberline(3, 17, mark=16)),
                ex('Can a triangle have sides 4, 5 and 9?',
                   ['4 + 5 = 9, which is not *more* than 9.',
                    '**No** — it collapses flat.'],
                   S.flat_triangle(4, 5, 9)),
            ],
        },
        {
            'title': 'Polygons and quadrilaterals',
            'fact': 'interior angles of an n-gon sum to (n − 2) × 180' + DEG
                    + '  |  exterior angles always sum to 360' + DEG,
            'text': 'The exterior-angle fact is the quicker route for regular polygons: each '
                    'exterior angle is 360/n, and the interior angle is its supplement. In a '
                    'parallelogram opposite angles are equal and adjacent ones add to 180' + DEG + '.',
            'figs': [S.ngon(6, interior=120, exterior=60), S.parallelogram(65)],
            'caption': 'Extend one side of the hexagon and the exterior angle appears: 60'
                       + DEG + ', with 120' + DEG + ' inside. Walk right round and the exterior '
                       'angles total 360' + DEG + '. In the parallelogram, 65' + DEG + ' sits '
                       'opposite 65' + DEG + ' and beside 115' + DEG + '.',
            'examples': [
                ex('Find the sum of the interior angles of a hexagon.',
                   ['(6 − 2) × 180 = **720' + DEG + '**.'],
                   S.ngon(6, triangulate=True)),
                ex('Find each interior angle of a regular hexagon.',
                   ['Each exterior angle is 360/6 = 60' + DEG + '.',
                    'Interior = 180 − 60 = **120' + DEG + '**.'],
                   S.ngon(6, interior=120, exterior=60)),
                ex('A regular polygon has interior angles of 150' + DEG + '. How many sides?',
                   ['Each exterior angle is 30' + DEG + ', and they total 360' + DEG + '.',
                    '360/30 = **12 sides**.'],
                   S.ngon(12, interior=150, exterior=30)),
            ],
        },
    ],
    'desmos_sub': 'draw the figure; the picture is faster than the algebra',
    'desmos_intro': 'The SAT gives you Desmos on every maths question. For angle work it is '
                    '**an equation solver**. Write the angle relationship as an equation and '
                    'let Desmos finish it — the thinking is choosing which relationship '
                    'applies.',
    'desmos': [
        ('Two complementary angles measure 3x' + DEG + ' and (2x + 10)' + DEG + '. What is x?',
         '3x+2x+10=90', 'Type the equation; Desmos solves it.', '16'),
        ('Two angles on a straight line are 4x' + DEG + ' and (x + 30)' + DEG + '. What is x?',
         '4x+x+30=180', 'A straight line gives 180.', '30'),
        ('A triangle has angles 50' + DEG + ' and 60' + DEG + '. What is the third angle?',
         '180-50-60', 'The three must total 180.', '70'),
        ('A triangle’s angles are in the ratio 2 : 3 : 4. What is the largest angle?',
         '180/9*4', 'Nine parts in total.', '80'),
        ('An isosceles triangle has apex angle 40' + DEG + '. What is each base angle?',
         '(180-40)/2', 'The two base angles are equal.', '70'),
        ('What is the sum of the interior angles of a hexagon?',
         '(6-2)*180', 'The formula works for any polygon.', '720'),
        ('What is each interior angle of a regular hexagon?',
         '180-360/6', 'Exterior first, then subtract from 180.', '120'),
        ('A regular polygon has interior angles of 150' + DEG + '. How many sides does it have?',
         '360/(180-150)', 'Exterior angles always total 360.', '12'),
        ('Two sides of a triangle are 7 and 10. What is the largest whole-number third side?',
         '7+10-1', 'Strictly less than the sum.', '16'),
        ('Two parallel lines are cut by a transversal and one angle is 72' + DEG
         + '. What is the co-interior angle?',
         '180-72', 'Co-interior angles are supplementary.', '108'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'Mark every angle you can deduce on the figure before you write an equation. '
                   'Most of these fall out in two steps once the diagram is labelled.',
    'part2': [
        ('P1', 'Hard',
         'Two angles are complementary. One angle measures 3x' + DEG + ' and the other measures '
         '(2x + 10)' + DEG + '. What is the value of x?', '16',
         ['Complementary means they total 90' + DEG + ': 3x + 2x + 10 = 90, so 5x = 80.',
          'x = **16**. Using 180 instead of 90 gives 34, which is not an option — a useful '
          'check.'],
         S.complementary('3x' + DEG, '(2x + 10)' + DEG)),
        ('P2', 'Hard',
         'In the figure, two parallel lines are cut by a transversal. If angle 1 measures 72'
         + DEG + ', what is the measure of angle 3, in degrees?', '108',
         ['Angles 1 and 3 sit on a straight line, so they are supplementary.',
          '180 − 72 = **108' + DEG + '**.'],
         S.transversal('cointerior', 72)),
        ('P3', 'Hard',
         'In a triangle, two of the angles measure 50' + DEG + ' and 60' + DEG + '. What is the '
         'measure of the exterior angle at the third vertex, in degrees?', '110',
         ['The third interior angle is 180 − 110 = 70' + DEG + ', and its exterior angle '
          'is 180 − 70 = **110' + DEG + '**.',
          'Equivalently, the exterior angle equals the two remote interior angles: 50 + 60 = 110.'],
         S.triangle((50, 60, 70), exterior=110, names=('A', 'B', 'C'))),
        ('P4', 'Hard',
         'An isosceles triangle has an apex angle of 40' + DEG + '. What is the measure of each '
         'base angle?', '70' + DEG,
         ['The two base angles are equal and the three total 180' + DEG + '.',
          '(180 − 40)/2 = **70' + DEG + '**. A common wrong answer is the sum of the two '
          'base angles, not each one.'],
         S.isosceles(40, base='70' + DEG)),
        ('P5', 'Hard',
         'The angles of a triangle are in the ratio 2 : 3 : 4. What is the measure of the '
         'largest angle, in degrees?', '80',
         ['The ratio has 2 + 3 + 4 = 9 parts, and 180/9 = 20' + DEG + ' per part.',
          '4 × 20 = **80' + DEG + '**.'],
         S.triangle((40, 60, 80))),
        ('P6', 'Hard',
         'Two sides of a triangle measure 7 and 10. State the range of possible lengths for the '
         'third side.', '3 < x < 17',
         ['The third side x must satisfy **3 < x < 17**.',
          'Both boundaries are excluded, and each would give a flat, degenerate triangle.'],
         S.numberline(3, 17)),
        ('P7', 'Very hard',
         'In a regular polygon, each interior angle measures 150' + DEG + '. How many sides does '
         'the polygon have?', '12',
         ['Each exterior angle is 180 − 150 = 30' + DEG + ', and the exterior angles always '
          'total 360' + DEG + '.',
          '360/30 = **12 sides**.'],
         S.ngon(12, interior=150, exterior=30)),
        ('P8', 'Very hard',
         'Two parallel lines are cut by a transversal. One of the eight angles formed measures '
         '(3x + 10)' + DEG + ' and the co-interior angle on the same side measures (2x − 5)'
         + DEG + '. What is the value of x?', '35',
         ['Co-interior angles are supplementary: 3x + 10 + 2x − 5 = 180, so 5x + 5 = 180.',
          'x = **35**. Setting them equal instead gives x = −15, which is impossible — '
          'a sign you chose the wrong angle relationship.'],
         S.transversal('cointerior')),
        ('P9', 'Very hard',
         'In triangle ABC, angle A measures (2x)' + DEG + ', angle B measures (3x + 10)' + DEG
         + ', and angle C measures (x + 20)' + DEG + '. What is the measure of the largest angle, '
         'in degrees?', '85' + DEG,
         ['2x + 3x + 10 + x + 20 = 180 gives 6x + 30 = 180, so x = 25.',
          'The angles are 50' + DEG + ', 85' + DEG + ' and 45' + DEG + ', so the largest is '
          '**85' + DEG + '**. A common wrong answer is x itself, which is not an angle of the '
          'triangle.'],
         S.triangle((50, 85, 45), names=('A', 'B', 'C'))),
        ('P10', 'Very hard',
         'A parallelogram has one angle measuring 65' + DEG + '. What is the measure of the angle '
         'adjacent to it, in degrees?', '115',
         ['Adjacent angles of a parallelogram are supplementary.',
          '180 − 65 = **115' + DEG + '**. The opposite angle, by contrast, is also 65' + DEG + '.'],
         S.parallelogram(65)),
        ('P11', 'Very hard',
         'The sum of the interior angles of a polygon is 1,260' + DEG + '. How many sides does it '
         'have?', '9',
         ['(n − 2) × 180 = 1260, so n − 2 = 7.',
          'n = **9**. A common wrong answer is n − 2, stopped one step early.'],
         S.ngon(9, triangulate=True)),
        ('P12', 'Very hard',
         'In the figure, two lines intersect and one of the four angles formed measures '
         '(5x − 20)' + DEG + '. Its vertical angle measures (3x + 10)' + DEG + '. What is the '
         'measure of each of these angles, in degrees?', '55' + DEG,
         ['Vertical angles are equal: 5x − 20 = 3x + 10, so 2x = 30 and x = 15.',
          'The angle is 5(15) − 20 = **55' + DEG + '**. A common wrong answer is x itself, '
          'not the angle — read what the question asks for.'],
         S.crossing_lines(55)),
    ],
    'habit': '**Read what the question asks for.** Several of these solve to a value of x that '
             'is *not* the answer — the angle is 5x − 20, not x.',
}
