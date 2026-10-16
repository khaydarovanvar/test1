# -*- coding: utf-8 -*-
"""SAT Math 4.3 — Right Triangles & Trigonometry."""
import shapes as S

DEG = '°'


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


LESSON = {
    'code': '4.3',
    'title': 'Right Triangles & Trigonometry',
    'sections': [
        {
            'title': 'Pythagoras',
            'fact': 'a² + b² = c², where c is the hypotenuse — the side '
                    'opposite the right angle',
            'text': 'Identify the hypotenuse before substituting. It is always the longest side '
                    'and always opposite the right angle. Putting a leg where c belongs is the '
                    'error that costs this topic its marks.',
            'figs': [S.pythagoras(9, 12, 15)],
            'caption': 'The arrow points from the right angle to the side facing it: that side '
                       'is c. Here 81 + 144 = 225, so c = 15.',
            'examples': [
                ex('A right triangle has legs 9 and 12. Find the hypotenuse.',
                   ['81 + 144 = 225.', 'c = √225 = **15**.'],
                   S.right_triangle(9, 12, 15, lc='c = 15')),
                ex('A right triangle has hypotenuse 13 and one leg 5. Find the other leg.',
                   ['Here 13 is c, so 25 + b² = 169.', 'b = √144 = **12**.'],
                   S.right_triangle(5, 12, 13, la='5', lb='b = 12', lc='13')),
                ex('A drone flies 9 km east then 12 km north. How far is it from the start?',
                   ['The path makes a right angle.', '√(81 + 144) = **15 km**.'],
                   S.right_triangle(12, 9, 15, la='12 km north', lb='9 km east',
                                    lc='15 km')),
            ],
        },
        {
            'title': 'The triples worth memorising',
            'fact': '3-4-5  |  5-12-13  |  8-15-17  |  7-24-25 — and all their multiples',
            'text': 'Recognising a triple turns a calculation into a glance. 9-12-15 is 3-4-5 '
                    'tripled; 10-24-26 is 5-12-13 doubled. If two sides fit a triple, the third '
                    'is immediate.',
            'figs': [S.triples()],
            'caption': 'Four right triangles whose sides are whole numbers. Spotting one saves '
                       'squaring, adding and taking a root.',
            'examples': [
                ex('A right triangle has legs 9 and 12. Which triple is this?',
                   ['3-4-5 multiplied by 3.', 'The hypotenuse is 5 × 3 = **15**.'],
                   S.right_triangle(9, 12, 15, la='9 = 3×3', lb='12 = 4×3',
                                    lc='15 = 5×3')),
                ex('A right triangle has hypotenuse 26 and one leg 10. Find the other leg.',
                   ['5-12-13 doubled.', 'The other leg is 12 × 2 = **24**.'],
                   S.right_triangle(10, 24, 26, la='10 = 5×2', lb='24 = 12×2',
                                    lc='26 = 13×2')),
                ex('Is a triangle with sides 8, 15, 17 right-angled?',
                   ['64 + 225 = 289 = 17².', '**Yes** — the converse of Pythagoras.'],
                   S.right_triangle(8, 15, 17)),
            ],
        },
        {
            'title': 'Special right triangles',
            'fact': '45-45-90 → sides 1 : 1 : √2  |  30-60-90 → sides 1 : √3 : 2',
            'text': 'These two appear constantly and are on the reference sheet. In a 30-60-90 '
                    'the shortest side faces the 30' + DEG + ' angle and is half the hypotenuse; '
                    'the √3 side faces the 60' + DEG + '.',
            'figs': [S.special_triangles()],
            'caption': 'Memorise which side faces which angle. The hypotenuse is always the '
                       'largest number in the ratio — √2 on the left, 2 on the right.',
            'examples': [
                ex('A 45-45-90 triangle has legs of 5. Find the hypotenuse.',
                   ['5 × √2 = **5√2** ≈ 7.07.'],
                   S.right_triangle(5, 5, 5, la='5', lb='5', lc='5√2 ≈ 7.07',
                                    theta='45' + DEG)),
                ex('A 30-60-90 triangle has hypotenuse 10. Find the shortest side.',
                   ['The side opposite 30' + DEG + ' is half the hypotenuse.', '**5**.'],
                   S.right_triangle(5, 8.66, 10, la='5 (faces 30' + DEG + ')',
                                    lb='5√3', lc='10', theta='30' + DEG)),
                ex('For that triangle, find the remaining side.',
                   ['It faces the 60' + DEG + ' angle: 5√3 ≈ **8.66**.'],
                   S.right_triangle(5, 8.66, 10, la='5', lb='5√3 ≈ 8.66', lc='10',
                                    theta='30' + DEG)),
            ],
        },
        {
            'title': 'SOH-CAH-TOA',
            'fact': 'sin = opp/hyp  |  cos = adj/hyp  |  tan = opp/adj',
            'text': 'Label the three sides relative to the angle you are working with before '
                    'choosing a ratio. Opposite and adjacent swap when you switch angles; the '
                    'hypotenuse never moves.',
            'figs': [S.sohcahtoa()],
            'caption': 'Stand at θ: the side across the triangle is opposite, the side you '
                       'are standing on is adjacent, and the long side facing the right angle '
                       'is the hypotenuse.',
            'examples': [
                ex('In a right triangle, sin A = 0.6 and the hypotenuse is 20. Find the side '
                   'opposite A.',
                   ['sin A = opp/hyp, so opp = 0.6 × 20 = **12**.'],
                   S.right_triangle(12, 16, 20, la='opp = 12', lb='16', lc='hyp = 20',
                                    theta='A')),
                ex('A ramp makes an angle whose sine is 0.6 and is 20 feet long. How high is the '
                   'top?',
                   ['The ramp is the hypotenuse.', '0.6 × 20 = **12 feet**.'],
                   S.right_triangle(12, 16, 20, la='height 12', lb='ground 16',
                                    lc='ramp 20', theta='θ')),
                ex('In a right triangle, the side adjacent to angle B is 8 and the hypotenuse is '
                   '17. Find cos B.',
                   ['cos B = adj/hyp = **8/17** ≈ 0.471.'],
                   S.right_triangle(15, 8, 17, la='15', lb='adj = 8', lc='hyp = 17',
                                    theta='B')),
            ],
        },
        {
            'title': 'Finding an angle',
            'fact': 'use inverse trig: if tan θ = 3/4 then θ = tan⁻¹(3/4)',
            'text': 'When the sides are known and the angle is not, the inverse functions give '
                    'it. In Desmos type arctan, arcsin or arccos and make sure the calculator is '
                    'in degrees.',
            'figs': [S.inverse_trig(3, 4, 37)],
            'caption': 'Two sides are known, the angle is not — so run the ratio backwards '
                       'with the inverse function, and check the calculator says degrees.',
            'examples': [
                ex('A right triangle has opposite 3 and adjacent 4. Find the angle, to the '
                   'nearest degree.',
                   ['tan θ = 0.75, so θ = tan⁻¹(0.75) ≈ **37' + DEG + '**.'],
                   S.inverse_trig(3, 4, 37)),
                ex('A ladder 10 m long reaches 8 m up a wall. What angle does it make with the '
                   'ground?',
                   ['sin θ = 8/10 = 0.8.',
                    'θ = sin⁻¹(0.8) ≈ **53' + DEG + '**.'],
                   S.ladder(10, 8, 6, 53)),
                ex('Why do those two answers add to about 90' + DEG + '?',
                   ['They are the **two acute angles** of similar right triangles — 3-4-5 '
                    'in both cases.'],
                   S.complement_pair()),
            ],
        },
        {
            'title': 'sin θ = cos(90' + DEG + ' − θ)',
            'fact': 'the sine of an angle equals the cosine of its complement',
            'text': 'In a right triangle the two acute angles add to 90' + DEG + ', and what is '
                    'opposite one is adjacent to the other. So sin and cos swap. Questions set '
                    'sin(expression) = cos(expression) and ask you to make the two angles add '
                    'to 90.',
            'figs': [S.complement_pair()],
            'caption': 'The side marked opposite for θ is the side adjacent for 90' + DEG
                       + ' − θ. Same two lengths, same fraction — only the name '
                         'of the ratio changes.',
            'examples': [
                ex('If sin 35' + DEG + ' = cos x' + DEG + ' and x is acute, find x.',
                   ['x = 90 − 35 = **55**.'],
                   S.right_triangle(5.74, 8.19, 10, la='opp of 35' + DEG,
                                    lb='adj of 35' + DEG, lc='hyp', theta='35' + DEG)),
                ex('In a right triangle the acute angles are (2x + 10)' + DEG + ' and '
                   '(3x − 20)' + DEG + '. Find x.',
                   ['They are complementary: 2x + 10 + 3x − 20 = 90, so 5x = 100.',
                    'x = **20**.'],
                   S.complement_pair()),
                ex('If sin A = 3/5 for an acute angle A, what is cos(90' + DEG + ' − A)?',
                   ['**3/5** — it is the same quantity, by the identity.'],
                   S.right_triangle(3, 4, 5, la='3', lb='4', lc='5', theta='A')),
            ],
        },
    ],
    'desmos_sub': 'draw the figure; the picture is faster than the algebra',
    'desmos_intro': 'The SAT gives you Desmos on every maths question. Here it is **a trig '
                    'calculator**. Use arcsin, arccos and arctan for angles, and check the '
                    'setting is **degrees** before you trust anything.',
    'desmos': [
        ('A right triangle has legs 9 and 12. What is the hypotenuse?', 'sqrt(9^2+12^2)',
         'Square, add, root — in one line.', '15'),
        ('A right triangle has hypotenuse 13 and one leg 5. What is the other leg?',
         'sqrt(13^2-5^2)', 'Subtract when you are given the hypotenuse.', '12'),
        ('A 45-45-90 triangle has legs of 5. What is the hypotenuse, to two decimal places?',
         '5*sqrt(2)', 'Desmos keeps the exact form too.', '7.07'),
        ('A 30-60-90 triangle has hypotenuse 10. What is the side opposite 60' + DEG
         + ', to two decimals?', '5*sqrt(3)', 'Half the hypotenuse, times √3.', '8.66'),
        ('If sin A = 0.6 and the hypotenuse is 20, what is the opposite side?', '0.6*20',
         'sin = opp/hyp rearranged.', '12'),
        ('A right triangle has opposite 3 and adjacent 4. What is the angle in degrees, to the '
         'nearest degree?', 'arctan(3/4)', 'Check Desmos is set to degrees.', '37'),
        ('A ladder 10 m long reaches 8 m up a wall. What angle does it make with the ground?',
         'arcsin(8/10)', 'Inverse sine.', '53'),
        ('If sin 35' + DEG + ' = cos x' + DEG + ', what is x?', '90-35',
         'Complementary angles.', '55'),
        ('A right triangle has sides 8 and 17 as leg and hypotenuse. What is cos of that angle, '
         'to three decimals?', '8/17', 'Adjacent over hypotenuse.', '0.471'),
        ('In a right triangle the acute angles are (2x + 10)' + DEG + ' and (3x − 20)' + DEG
         + '. What is x?', '2x+10+3x-20=90', 'The two acute angles total 90.', '20'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there are '
                   'no options to choose from, so show the working that gets you there. Label '
                   'opposite, adjacent and hypotenuse relative to the angle in the question '
                   '*before* choosing a ratio. Opposite and adjacent swap when the angle does.',
    'part2': [
        ('P1', 'Hard',
         'A drone takes off from a stadium, flies 9 kilometres due east, then 12 kilometres due '
         'north. What is the straight-line distance, in kilometres, between the drone and the '
         'stadium?', '15',
         ['East and north are perpendicular, so this is a right triangle.',
          '√(81 + 144) = √225 = **15 km**. It is 3-4-5 tripled.'],
         S.right_triangle(12, 9, 15, la='12 km north', lb='9 km east', lc='15 km')),
        ('P2', 'Hard',
         'A straight loading ramp forms a right triangle with the level ground. The sine of the '
         'angle between the ramp and the ground is 0.6, and the ramp is 20 feet long. How many '
         'feet above the ground is the top of the ramp?', '12',
         ['The ramp is the hypotenuse, and sin = opp/hyp.',
          '0.6 × 20 = **12 feet**. A common wrong answer divides 20 by 0.6 × 2 or '
          'similar — the clue is that the opposite side must be shorter than the '
          'hypotenuse.'],
         S.right_triangle(12, 16, 20, la='height 12', lb='ground 16', lc='ramp 20',
                          theta='θ')),
        ('P3', 'Hard',
         'In right triangle ABC, the right angle is at C and the hypotenuse AB = 13. If BC = 5, '
         'what is the length of AC?', '12',
         ['AB is the hypotenuse, so 5² + AC² = 13².',
          'AC = √144 = **12**. This is the 5-12-13 triple.'],
         S.right_triangle(5, 12, 13, la='BC = 5', lb='AC = 12', lc='AB = 13',
                          names=('C', 'A', 'B'))),
        ('P4', 'Hard',
         'A 30-60-90 triangle has a hypotenuse of length 10. What is the length of the side '
         'opposite the 30' + DEG + ' angle?', '5',
         ['In a 30-60-90 triangle the side opposite 30' + DEG + ' is **half the hypotenuse**.',
          '10/2 = **5**. A common wrong answer is the side opposite 60' + DEG + '.'],
         S.right_triangle(5, 8.66, 10, la='5 (faces 30' + DEG + ')', lb='5√3', lc='10',
                          theta='30' + DEG)),
        ('P5', 'Hard',
         'If sin 35' + DEG + ' = cos x' + DEG + ' and 0 < x < 90, what is the value of x?', '55',
         ['sin θ = cos(90' + DEG + ' − θ).', 'x = 90 − 35 = **55**.'],
         S.complement_pair()),
        ('P6', 'Hard',
         'A 45-45-90 triangle has legs of length 5. What is the length of the hypotenuse?',
         '5√2',
         ['In a 45-45-90 triangle the sides are in the ratio 1 : 1 : √2.',
          'The hypotenuse is **5√2** ≈ 7.07. A common wrong answer doubles the leg '
          'instead.'],
         S.right_triangle(5, 5, 5, la='5', lb='5', lc='5√2', theta='45' + DEG)),
        ('P7', 'Very hard',
         'In a right-triangle design on a banner, the two acute angles measure (2x + 10)' + DEG
         + ' and (3x − 20)' + DEG + ', so sin((2x + 10)' + DEG + ') = cos((3x − 20)'
         + DEG + '). What is the value of x?', '20',
         ['The identity holds exactly when the two angles are complementary.',
          '2x + 10 + 3x − 20 = 90 gives 5x = 100, so x = **20**. The angles are 50' + DEG
          + ' and 40' + DEG + '.'],
         S.complement_pair()),
        ('P8', 'Very hard',
         'A ladder 10 metres long leans against a wall and reaches 8 metres up it. What angle, '
         'to the nearest degree, does the ladder make with the ground?', '53' + DEG,
         ['The wall height is opposite the angle and the ladder is the hypotenuse: sin θ = 0.8.',
          'θ = sin⁻¹(0.8) ≈ **53' + DEG + '**. A common wrong answer is the '
          'angle at the *top* of the ladder, the complement.'],
         S.ladder(10, 8, 6, 53)),
        ('P9', 'Very hard',
         'A right triangle has legs of length 8 and 15. What is the length of the hypotenuse?',
         '17',
         ['64 + 225 = 289, and √289 = **17** — the 8-15-17 triple.',
          'A common wrong answer comes from subtracting instead of adding the squares.'],
         S.right_triangle(8, 15, 17, lc='17')),
        ('P10', 'Very hard',
         'In right triangle ABC the right angle is at C, and sin A = 3/5. What is the value of '
         'cos B?', '3/5',
         ['Angles A and B are complementary, and sin A = cos(90' + DEG + ' − A) = cos B.',
          'cos B = **3/5**. A common wrong answer is cos A, which answers a different question.'],
         S.right_triangle(3, 4, 5, la='BC = 3', lb='AC = 4', lc='AB = 5', theta='A',
                          names=('C', 'A', 'B'))),
        ('P11', 'Very hard',
         'A right triangle has an angle whose tangent is 3/4. If the side adjacent to that angle '
         'is 12, what is the length of the hypotenuse?', '15',
         ['tan = opp/adj = 3/4, so with adj = 12 the opposite is 9.',
          'This is 9-12-15, which is 3-4-5 tripled, so the hypotenuse is **15**. A common wrong '
          'answer is the opposite side, not the hypotenuse.'],
         S.right_triangle(9, 12, 15, la='opp 9', lb='adj 12', lc='hyp 15', theta='θ')),
        ('P12', 'Very hard',
         'A rectangular field measures 40 metres by 30 metres. A path runs diagonally from one '
         'corner to the opposite corner. How much shorter, in metres, is the diagonal path than '
         'walking along two sides?', '20',
         ['The diagonal is √(1600 + 900) = √2500 = 50 m, and two sides total 70 m.',
          '70 − 50 = **20 metres shorter**.'],
         S.rect_diagonal(40, 30, 50, note='70 − 50 = 20 m shorter')),
    ],
    'habit': 'Find the hypotenuse first and write it down. Your class scored 20% on Pythagoras, '
             'and the usual cause is putting a leg where c belongs — the hypotenuse is '
             'always opposite the right angle and always the longest side.',
}
