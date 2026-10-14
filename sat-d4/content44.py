# -*- coding: utf-8 -*-
"""SAT Math 4.4 — Circles."""
import shapes as S

DEG = '°'


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


LESSON = {
    'code': '4.4',
    'title': 'Circles',
    'sections': [
        {
            'title': 'Circumference and area',
            'fact': 'C = 2πr  |  A = πr² — both are on the reference sheet',
            'text': 'Almost every circle question starts by finding r. If you are given the '
                    'area, take the square root; if the circumference, divide by 2π. Then '
                    'answer what was asked.',
            'figs': [S.circle_basic('r')],
            'caption': 'The radius is the one number that unlocks both formulas: the green ring '
                       'is the circumference and the shaded disc is the area.',
            'examples': [
                ex('A circle has area 64π. Find its circumference.',
                   ['πr² = 64π gives r = 8.', 'C = 2π(8) = **16π**.'],
                   S.circle_basic('8')),
                ex('A circle has circumference 18π. Find its area.',
                   ['2πr = 18π gives r = 9.', 'A = π(81) = **81π**.'],
                   S.circle_basic('9')),
                ex('A circular path encloses 100π square metres. How long is the path?',
                   ['r = 10, so the path is the circumference.',
                    '2π(10) = **20π** metres.'],
                   S.circle_basic('10')),
            ],
        },
        {
            'title': 'Arcs and sectors',
            'fact': 'arc = (θ/360) × 2πr  |  sector area = (θ/360) × '
                    'πr²',
            'text': 'A sector is a fraction of the whole circle, and the fraction is the angle '
                    'over 360. Work out the whole first, then take the slice.',
            'figs': [S.sector(80, '9')],
            'caption': 'The central angle picks the fraction: 80/360 = 2/9. Multiply the whole '
                       'circumference by it for the arc, or the whole area for the sector.',
            'examples': [
                ex('A circle of radius 9 has a sector with central angle 80' + DEG
                   + '. Find its area.',
                   ['Whole area = 81π, and 80/360 = 2/9.',
                    '(2/9)(81π) = **18π**.'],
                   S.sector(80, '9')),
                ex('For that same circle, find the arc length of the sector.',
                   ['Whole circumference = 18π.', '(2/9)(18π) = **4π**.'],
                   S.sector(80, '9')),
                ex('A sector of a circle of radius 6 has area 6π. Find its central angle.',
                   ['Whole area 36π, and 6π/36π = 1/6.',
                    '(1/6)(360) = **60' + DEG + '**.'],
                   S.sector(60, '6')),
            ],
        },
        {
            'title': 'Central and inscribed angles',
            'fact': 'a central angle equals its arc  |  an inscribed angle is half its arc',
            'text': 'The vertex position decides the rule: at the centre, the angle equals the '
                    'arc; on the circle, it is half. The special case worth knowing cold is that '
                    'an angle inscribed in a semicircle is a right angle.',
            'figs': [S.inscribed_angle(70), S.semicircle_right()],
            'caption': 'Both angles stand on the same red arc. The one at the centre is 70'
                       + DEG + '; the one on the circle is 35' + DEG + '. When the arc is a '
                       'semicircle (180' + DEG + '), half of it is a right angle.',
            'examples': [
                ex('A central angle cuts an arc of 70' + DEG + '. What is the central angle?',
                   ['**70' + DEG + '** — they are equal.'],
                   S.inscribed_angle(70)),
                ex('An inscribed angle cuts that same 70' + DEG + ' arc. What is the inscribed '
                   'angle?',
                   ['Half the arc.', '**35' + DEG + '**.'],
                   S.inscribed_angle(70)),
                ex('Triangle ABC is inscribed in a circle with AB a diameter. What is angle ACB?',
                   ['The arc AB is 180' + DEG + ', and the inscribed angle is half.',
                    '**90' + DEG + '**.'],
                   S.semicircle_right()),
            ],
        },
        {
            'title': 'Tangents and chords',
            'fact': 'a tangent is perpendicular to the radius at the point of contact',
            'text': 'A tangent gives you a right angle for free, which usually means Pythagoras '
                    'is next. A radius drawn perpendicular to a chord also bisects it.',
            'figs': [S.tangent_figure(5, 12, 13), S.chord_figure(16, 10, 6)],
            'caption': 'Left: the radius OP meets the tangent at 90' + DEG + ', so OPQ is a '
                       'right triangle with legs 5 and 12. Right: the perpendicular from the '
                       'centre cuts the chord in half, giving legs 8 and d with hypotenuse 10.',
            'examples': [
                ex('A tangent touches a circle of radius 5 at P. From an external point Q, '
                   'PQ = 12. Find OQ.',
                   ['Angle OPQ is 90' + DEG + ', so OQ² = 25 + 144.', 'OQ = **13**.'],
                   S.tangent_figure(5, 12, 13)),
                ex('Why is triangle OPQ right-angled?',
                   ['OP is a radius to the point of contact, and a **tangent is perpendicular '
                    'to the radius** there.'],
                   S.tangent_figure(5, 12, 13)),
                ex('A chord of length 16 sits in a circle of radius 10. How far is it from the '
                   'centre?',
                   ['The perpendicular from the centre bisects the chord, giving legs 8 and d '
                    'with hypotenuse 10.', 'd = √(100 − 64) = **6**.'],
                   S.chord_figure(16, 10, 6)),
            ],
        },
        {
            'title': 'The equation of a circle',
            'fact': '(x − h)² + (y − k)² = r², centre (h, k), radius r',
            'text': 'Read the centre with the signs flipped and remember the right-hand side is '
                    'r squared, not r. This formula is *not* on the reference sheet.',
            'figs': [S.circle_on_grid(3, -1, 3)],
            'caption': '(x − 3)² + (y + 1)² = 9 sits at (3, −1): the x term '
                       'reads −3 so h = +3, the y term reads +1 so k = −1. And 9 is '
                       'r², so r = 3.',
            'examples': [
                ex('Find the centre and radius of (x − 3)² + (y + 1)² = 9.',
                   ['Centre **(3, −1)**; radius **3**, because 9 = 3².'],
                   S.circle_on_grid(3, -1, 3)),
                ex('Write the equation of a circle with centre (−2, 5) and radius 4.',
                   ['**(x + 2)² + (y − 5)² = 16**.'],
                   S.circle_on_grid(-2, 5, 4, eq='(x + 2)² + (y − 5)² = 16',
                                    xmin=-8, xmax=4, ymin=0, ymax=10)),
                ex('Does the point (6, −1) lie on the circle in the first example?',
                   ['(6 − 3)² + (−1 + 1)² = 9 + 0 = 9.',
                    '**Yes**, it is exactly on the circle.'],
                   S.circle_on_grid(3, -1, 3)),
            ],
        },
        {
            'title': 'Completing the square for a circle',
            'fact': 'group the x terms and the y terms, then halve and square each coefficient',
            'text': 'An equation given as x² + y² + Dx + Ey = F has to be rearranged '
                    'before you can read anything off. Complete the square twice, once for x and '
                    'once for y.',
            'figs': [S.complete_square(8)],
            'caption': 'The square of side x plus the two strips of width 4 almost make a square '
                       'of side x + 4. The dashed 16 is the missing corner — add it to both '
                       'sides and the left-hand side becomes (x + 4)².',
            'examples': [
                ex('Find the radius of x² + y² − 8x + 6y = 11.',
                   ['(x − 4)² − 16 + (y + 3)² − 9 = 11.',
                    '(x − 4)² + (y + 3)² = 36, so r = **6**.'],
                   S.circle_on_grid(4, -3, 6, eq='(x − 4)² + (y + 3)² = 36',
                                    xmin=-4, xmax=12, ymin=-10, ymax=4)),
                ex('Find its centre.',
                   ['**(4, −3)** — the signs flip.'],
                   S.circle_on_grid(4, -3, 6, eq='centre (4, −3), r = 6',
                                    xmin=-4, xmax=12, ymin=-10, ymax=4)),
                ex('Find the radius of x² + y² + 4x − 2y = 20.',
                   ['(x + 2)² + (y − 1)² = 20 + 4 + 1 = 25.', 'r = **5**.'],
                   S.circle_on_grid(-2, 1, 5, eq='(x + 2)² + (y − 1)² = 25',
                                    xmin=-9, xmax=5, ymin=-5, ymax=7)),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. Here it is **a circle '
                    'grapher**. Type the equation in any form and Desmos draws it, centre and '
                    'radius included — a fast check on your completing the square.',
    'desmos': [
        ('A circle has area 64π. What is its circumference as a multiple of π?',
         '2*sqrt(64)', 'Radius first, then the circumference.', '16'),
        ('A circle has circumference 18π. What is its area as a multiple of π?',
         '(18/2)^2', 'r = 9, then r squared.', '81'),
        ('A sector of a circle of radius 9 has central angle 80' + DEG + '. What is its area as '
         'a multiple of π?', '80/360*81', 'Fraction of the whole.', '18'),
        ('For that same sector, what is the arc length as a multiple of π?', '80/360*18',
         'Same fraction, applied to the circumference.', '4'),
        ('A sector of a circle of radius 6 has area 6π. What is its central angle in degrees?',
         '6/36*360', 'The ratio of areas gives the ratio of angles.', '60'),
        ('A tangent meets a circle of radius 5 at P, and PQ = 12. What is OQ?',
         'sqrt(5^2+12^2)', 'The tangent makes a right angle with the radius.', '13'),
        ('A chord of length 16 is in a circle of radius 10. How far is it from the centre?',
         'sqrt(10^2-8^2)', 'Half the chord is one leg.', '6'),
        ('What is the radius of x² + y² − 8x + 6y = 11?', 'sqrt(11+16+9)',
         'Add the completing-the-square constants to both sides.', '6'),
        ('What is the radius of x² + y² + 4x − 2y = 20?', 'sqrt(20+4+1)',
         'Same method, different numbers.', '5'),
        ('An inscribed angle cuts an arc of 70' + DEG + '. What is the inscribed angle?', '70/2',
         'Half the arc.', '35'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there are '
                   'no options to choose from, so show the working that gets you there. Find the '
                   'radius first in almost every question, then answer what was actually asked: '
                   'circumference, area, arc or sector.',
    'part2': [
        ('P1', 'Hard',
         'The area enclosed by a circular jogging path is 64π square metres. What is the '
         'length of the path, in metres?', '16π',
         ['πr² = 64π gives r = 8, and the path is the circumference.',
          '2π(8) = **16π**. A common wrong answer is the radius times π, a common '
          'slip.'],
         S.circle_basic('8')),
        ('P2', 'Hard',
         'A round cheese wheel has a circumference of 18π centimetres. What is the area, in '
         'square centimetres, of its circular top face?', '81π',
         ['2πr = 18π gives r = 9.',
          'A = π(9)² = **81π**. A common wrong answer squares the diameter instead '
          'of the radius.'],
         S.circle_basic('9')),
        ('P3', 'Hard',
         'A wedge cut from a circular cheese of radius 9 inches has a central angle of 80' + DEG
         + '. What is the area, in square inches, of the top face of the wedge?', '18π',
         ['The whole area is 81π and the wedge is 80/360 = 2/9 of it.',
          '(2/9)(81π) = **18π**.'],
         S.sector(80, '9')),
        ('P4', 'Hard',
         'What is the radius of the circle given by x² + y² − 8x + 6y = 11?', '6',
         ['Complete the square twice: (x − 4)² + (y + 3)² = 11 + 16 + 9 = 36.',
          'r = √36 = **6**. Answering 36 gives r², not r.'],
         S.circle_on_grid(4, -3, 6, eq='(x − 4)² + (y + 3)² = 36',
                          xmin=-4, xmax=12, ymin=-10, ymax=4)),
        ('P5', 'Hard',
         'A circle in the xy-plane has equation (x − 3)² + (y + 1)² = 9. What are '
         'the coordinates of its centre?', '(3, −1)',
         ['The form is (x − h)² + (y − k)² = r², so h = 3 and k = −1.',
          '**(3, −1)** — the signs flip. A common wrong answer flips them the wrong way.'],
         S.circle_on_grid(3, -1, 3)),
        ('P6', 'Hard',
         'A sector of a circle of radius 6 has an area of 6π. What is its central angle, in '
         'degrees?', '60',
         ['The whole circle has area 36π, and 6π/36π = 1/6.',
          '(1/6)(360) = **60' + DEG + '**.'],
         S.sector(60, '6')),
        ('P7', 'Very hard',
         'In a circle with centre O, AB is a diameter and C is a point on the circle distinct '
         'from A and B. What is the measure of angle ACB, in degrees?', '90',
         ['Angle ACB is inscribed in a semicircle, so it cuts an arc of 180' + DEG + ' and is '
          'half of it.',
          '**90' + DEG + '** wherever C sits — which is exactly why any other answer is '
          'wrong.'],
         S.semicircle_right()),
        ('P8', 'Very hard',
         'A tangent touches a circle with centre O and radius 5 at point P. An external point Q '
         'lies on the tangent with PQ = 12. What is the length of OQ?', '13',
         ['The tangent is perpendicular to the radius OP, so triangle OPQ has a right angle at P.',
          'OQ = √(25 + 144) = **13**, the 5-12-13 triple.'],
         S.tangent_figure(5, 12, 13)),
        ('P9', 'Very hard',
         'A chord of length 16 is drawn in a circle of radius 10. What is the distance from the '
         'centre of the circle to the chord?', '6',
         ['The perpendicular from the centre bisects the chord, giving a right triangle with '
          'hypotenuse 10 and one leg 8.',
          'd = √(100 − 64) = **6**. A common wrong answer is half the chord itself.'],
         S.chord_figure(16, 10, 6)),
        ('P10', 'Very hard',
         'The circular fountain plaza at the centre of a market square is modelled by '
         'x² + y² − 8x + 6y = 11, with units in metres. What is the radius, in '
         'metres?', '6',
         ['Completing the square gives (x − 4)² + (y + 3)² = 36.',
          'r = **6**. A common wrong answer is r², and C is the number on the right of the '
          'original equation — both are answers to steps along the way, not the question.'],
         S.circle_on_grid(4, -3, 6, eq='(x − 4)² + (y + 3)² = 36',
                          xmin=-4, xmax=12, ymin=-10, ymax=4)),
        ('P11', 'Very hard',
         'A circle has centre (−2, 5) and radius 4. Write the equation of this circle.',
         '(x + 2)² + (y − 5)² = 16',
         ['Signs flip inside the brackets and the right-hand side is r².',
          '**(x + 2)² + (y − 5)² = 16.** A common wrong answer uses r instead of '
          'r²; another gets both signs wrong.'],
         S.circle_on_grid(-2, 5, 4, eq='(x + 2)² + (y − 5)² = 16',
                          xmin=-8, xmax=4, ymin=0, ymax=10)),
        ('P12', 'Very hard',
         'A circle of radius 12 centimetres has a sector whose arc length is 8π centimetres. '
         'What is the area of that sector, in square centimetres?', '48π',
         ['The full circumference is 24π, so the sector is 8π/24π = 1/3 of the '
          'circle.',
          'The full area is 144π, and (1/3)(144π) = **48π**.'],
         S.sector(120, '12')),
    ],
    'habit': 'The right-hand side of a circle equation is r², not r. Your class scored 47% '
             'on the circle equation, and answering 36 instead of 6 was the single most common '
             'slip.',
}
