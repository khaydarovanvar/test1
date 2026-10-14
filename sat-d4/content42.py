# -*- coding: utf-8 -*-
"""SAT Math 4.2 — Similarity & Congruence."""
import shapes as S

DEG = '°'


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


LESSON = {
    'code': '4.2',
    'title': 'Similarity & Congruence',
    'sections': [
        {
            'title': 'When are two triangles similar?',
            'fact': 'AA — two pairs of equal angles is enough  |  similar means same shape, '
                    'different size',
            'text': 'You never need all three angles: if two match, the third must. Similar '
                    'triangles have equal angles and proportional sides, and the SAT almost '
                    'always gives you the angles and asks for a side.',
            'figs': [S.aa_pair((40, 60, 80))],
            'caption': 'Same three angles, different sizes. Nothing here fixes the size, which '
                       'is exactly why AA proves similarity but never congruence.',
            'examples': [
                ex('Two triangles have angles 40' + DEG + ', 60' + DEG + ' and 40' + DEG + ', 80'
                   + DEG + '. Are they similar?',
                   ['The first has third angle 80' + DEG + ', the second 60' + DEG
                    + '. Both are 40, 60, 80.', '**Yes**, by AA.'],
                   S.aa_pair((40, 60, 80))),
                ex('Two right triangles each have an angle of 35' + DEG + '. Are they similar?',
                   ['Both have 90' + DEG + ' and 35' + DEG + ', so the third is 55' + DEG
                    + ' in each.', '**Yes**, by AA.'],
                   S.similar_right_pair(35)),
                ex('Two triangles have sides 3, 4, 5 and 6, 8, 11. Are they similar?',
                   ['6/3 = 2 and 8/4 = 2, but 11/5 = 2.2.',
                    '**No** — the ratios must all match.'],
                   S.two_triangles(('3', '4', '5'), ('6', '8', '11'),
                                   ratios=['6/3 = 2', '8/4 = 2', '11/5 = 2.2'], bad=True)),
            ],
        },
        {
            'title': 'The scale factor',
            'fact': 'scale factor k = new ÷ old  |  every matching length multiplies by k',
            'text': 'Find k from the one pair of sides you are given, then apply it to the side '
                    'you want. Pair the sides correctly: the side opposite the 30' + DEG
                    + ' angle in one triangle matches the side opposite the 30' + DEG
                    + ' angle in the other.',
            'figs': [S.similar_pair((3, 4, 5), (9, 12, 15), 3)],
            'caption': 'One pair of matching sides gives k = 9/3 = 3. From there every other '
                       'length follows: 4 → 12 and 5 → 15.',
            'examples': [
                ex('A triangle with sides 3, 4, 5 is enlarged so the shortest side becomes 9. '
                   'Find the scale factor.',
                   ['k = 9/3 = **3**.'],
                   S.similar_pair((3, 4, 5), (9, 12, 15), 3)),
                ex('For that enlargement, what is the new longest side?',
                   ['5 × 3 = **15**.'],
                   S.right_triangle(9, 12, 15, la='9', lb='12', lc='15 ← 5 × 3',
                                    fill=S.FILLG, stroke=S.GREEN)),
                ex('Triangle ABC has AB = 6; similar triangle DEF has DE = 15. If BC = 8, find EF.',
                   ['k = 15/6 = 2.5.', 'EF = 8 × 2.5 = **20**.'],
                   S.two_triangles(('6', '8', ''), ('15', '20', ''), k='2.5')),
            ],
        },
        {
            'title': 'Area and volume scale differently',
            'fact': 'lengths × k  |  areas × k²  |  volumes × k³',
            'text': 'This is the trap the SAT returns to. Doubling every length multiplies the '
                    'area by 4 and the volume by 8. Going the other way, if areas are in the '
                    'ratio 9 : 4, the lengths are in the ratio 3 : 2 — take the square root.',
            'figs': [S.scale_area_volume(2), S.scale_solid(2)],
            'caption': 'Double the side and four copies of the small square fit inside the big '
                       'one; eight copies of the small cube fit inside the big cube. The '
                       'exponent matches the dimension: 1 for length, 2 for area, 3 for volume.',
            'examples': [
                ex('Two similar rectangles have sides in the ratio 2 : 5. What is the ratio of '
                   'their areas?',
                   ['Square the factor.', '**4 : 25**.'],
                   S.rect_pair(2, 5)),
                ex('Two similar solids have volumes 8 cm³ and 216 cm³. Find the ratio '
                   'of their heights.',
                   ['216/8 = 27, and the cube root of 27 is 3.', '**1 : 3**.'],
                   S.cube_pair(2, 6, 8, 216)),
                ex('A model is built to scale 1 : 30. The model holds 2 litres. How much does '
                   'the real tank hold?',
                   ['Volume scales by 30³ = 27,000.',
                    '2 × 27,000 = **54,000 litres**.'],
                   S.tank_pair(30)),
            ],
        },
        {
            'title': 'Similar triangles hidden in one figure',
            'fact': 'a line parallel to one side cuts off a similar triangle',
            'text': 'When a figure contains a line parallel to a side, two similar triangles are '
                    'sitting inside it. Redraw them separately, the same way round, before '
                    'writing any ratio.',
            'figs': [S.nested_similar(4, 6, 6, 9)],
            'caption': 'DE ∥ BC makes the angles at D and B equal, and the angle at A is '
                       'shared, so triangle ADE is similar to triangle ABC. The matching sides '
                       'give AD/DB = AE/EC.',
            'examples': [
                ex('In triangle ABC, DE is parallel to BC with AD = 4, DB = 6 and AE = 6. Find EC.',
                   ['AD/DB = AE/EC, so 4/6 = 6/EC.', 'EC = **9**.'],
                   S.nested_similar(4, 6, 6, 9)),
                ex('Why are the two triangles similar?',
                   ['DE parallel to BC makes the corresponding angles equal, so **AA** applies.'],
                   S.nested_similar(4, 6, 6, 9)),
                ex('In that figure, AB = 10 and AC = 15. What is the scale factor from ADE to ABC?',
                   ['AD/AB = 4/10.', 'k = **2.5** going from the small triangle to the large one.'],
                   S.two_triangles(('AD = 4', '', ''), ('AB = 10', '', ''),
                                   names1=('A', 'D', 'E'), names2=('A', 'B', 'C'), k='2.5')),
            ],
        },
        {
            'title': 'Shadows, mirrors and indirect measurement',
            'fact': 'same sun angle → similar triangles → height/shadow is the same '
                    'ratio for both',
            'text': 'The classic SAT word problem. Write the ratio the same way round for both '
                    'objects: height ÷ shadow for one equals height ÷ shadow for the '
                    'other.',
            'figs': [S.shadows()],
            'caption': 'Both objects stand upright and both shadows run along the same ground, '
                       'so the two triangles have the same three angles. 6/4 = h/18 gives h = 27.',
            'examples': [
                ex('A 6-foot pole casts a 4-foot shadow. A signpost casts an 18-foot shadow. '
                   'Find its height.',
                   ['6/4 = h/18, so h = 18 × 1.5 = **27 feet**.'],
                   S.shadows('6 ft', '4 ft', 'h = 27', '18 ft')),
                ex('A 1.8 m person casts a 1.2 m shadow. A tree’s shadow is 8 m. Find the '
                   'tree’s height.',
                   ['1.8/1.2 = 1.5, and 8 × 1.5 = **12 m**.'],
                   S.shadows('1.8 m', '1.2 m', 'h = 12', '8 m')),
                ex('Why must the two shadows be measured at the same time?',
                   ['The sun’s angle changes through the day. Only at the same moment are '
                    'the two triangles **similar**.'],
                   S.shadows('6 ft', '4 ft', 'h', '18 ft')),
            ],
        },
        {
            'title': 'Congruence',
            'fact': 'congruent = same shape and same size, so the scale factor is 1',
            'text': 'Congruent triangles match exactly: SSS, SAS, ASA or AAS. Note that AAA '
                    'gives similarity only, never congruence, because the sizes can differ.',
            'figs': [S.congruent_pair(marks='SSS'), S.aa_pair((40, 60, 80))],
            'caption': 'On the left the three pairs of sides match, so the triangles are '
                       'congruent. On the right only the angles match, so they are similar '
                       '— one is an enlargement of the other.',
            'examples': [
                ex('Two triangles have all three pairs of sides equal. Are they congruent?',
                   ['**Yes**, by SSS.'],
                   S.congruent_pair(marks='SSS')),
                ex('Two triangles have all three pairs of angles equal. Are they congruent?',
                   ['**Not necessarily** — they are similar, but one could be an '
                    'enlargement of the other.'],
                   S.aa_pair((40, 60, 80))),
                ex('Triangles ABC and DEF are congruent with AB = 7. What is DE?',
                   ['Congruent means the scale factor is 1.', 'DE = **7**.'],
                   S.two_triangles(('7', '', ''), ('7', '', ''), k='1')),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. Here it is **a proportion '
                    'solver**. Type the ratio as an equation with the unknown in it and read the '
                    'answer straight off.',
    'desmos': [
        ('A triangle with sides 3, 4, 5 is enlarged so the shortest side becomes 9. What is the '
         'new longest side?', '5*(9/3)', 'Find the factor, then scale.', '15'),
        ('Triangle ABC has AB = 6; similar triangle DEF has DE = 15. If BC = 8, what is EF?',
         '8*(15/6)', 'The same factor applies to every side.', '20'),
        ('Two similar rectangles have sides in the ratio 2 : 5. What is the ratio of their areas '
         'as a decimal?', '(2/5)^2', 'Square the length ratio.', '0.16'),
        ('Two similar solids have volumes 8 and 216. What is the ratio of their heights?',
         '(216/8)^(1/3)', 'Cube root of the volume ratio.', '3'),
        ('A model is built to scale 1 : 30 and holds 2 litres. How much does the real tank hold?',
         '2*30^3', 'Volume scales by the cube.', '54000'),
        ('A 6-foot pole casts a 4-foot shadow. A signpost casts an 18-foot shadow. How tall is it?',
         '18*(6/4)', 'Same ratio for both objects.', '27'),
        ('A 1.8 m person casts a 1.2 m shadow. A tree’s shadow is 8 m. How tall is the tree?',
         '8*(1.8/1.2)', 'Height over shadow is constant.', '12'),
        ('In triangle ABC, DE is parallel to BC with AD = 4, DB = 6 and AE = 6. What is EC?',
         '6*(6/4)', 'Set up AD/DB = AE/EC.', '9'),
        ('Two similar triangles have areas 9 and 25. What is the ratio of their corresponding '
         'sides?', 'sqrt(9/25)', 'Take the square root of the area ratio.', '0.6'),
        ('A photo 4 cm by 6 cm is enlarged by a factor of 2.5. What is the new area in square '
         'centimetres?', '4*6*2.5^2', 'Area scales by the square of the factor.', '150'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there are '
                   'no options to choose from, so show the working that gets you there. For every '
                   'question, first ask whether the quantity being scaled is a **length**, an '
                   '**area** or a **volume**. That one decision picks the exponent.',
    'part2': [
        ('P1', 'Hard',
         'Beside a market stall, a vertical pole 6 feet tall casts a shadow 4 feet long. At the '
         'same time of day, a signpost casts a shadow 18 feet long. What is the height of the '
         'signpost, in feet?', '27',
         ['The sun’s angle is the same, so the triangles are similar: 6/4 = h/18.',
          'h = 18 × 1.5 = **27 feet**. A common wrong answer comes from 18 − 6, not a '
          'ratio at all.'],
         S.shadows('6 ft', '4 ft', 'h = 27', '18 ft')),
        ('P2', 'Hard',
         'Triangle ABC is similar to triangle DEF, with AB = 6 and DE = 15. If BC = 8, what is '
         'the length of EF?', '20',
         ['The scale factor is 15/6 = 2.5, and it applies to every pair of matching sides.',
          'EF = 8 × 2.5 = **20**.'],
         S.two_triangles(('6', '8', ''), ('15', '20', ''), k='2.5')),
        ('P3', 'Hard',
         'Two similar rectangles have corresponding sides in the ratio 2 : 5. What is the ratio '
         'of their areas?', '4 : 25',
         ['Area scales by the **square** of the length ratio.',
          '2² : 5² = **4 : 25**. A common wrong answer forgets to square; D cubes it, '
          'which is the volume rule for solids.'],
         S.rect_pair(2, 5)),
        ('P4', 'Hard',
         'In triangle ABC, point D lies on AB and point E lies on AC so that DE is parallel to '
         'BC. If AD = 4, DB = 6 and AE = 6, what is the length of EC?', '9',
         ['DE parallel to BC makes the two triangles similar, so AD/DB = AE/EC.',
          '4/6 = 6/EC gives EC = 36/4 = **9**.'],
         S.nested_similar(4, 6, 6, 9)),
        ('P5', 'Hard',
         'Two triangles have angles of 40' + DEG + ' and 60' + DEG + ' in the first, and 40' + DEG
         + ' and 80' + DEG + ' in the second. State what is true here.',
         'They are similar, because two angles of each match.',
         ['The first triangle’s third angle is 80' + DEG + ' and the second’s is 60'
          + DEG + ', so both have angles 40, 60 and 80.',
          '**Similar by AA.** Congruence would need the sizes to match too, which nothing here '
          'establishes.'],
         S.aa_pair((40, 60, 80))),
        ('P6', 'Hard',
         'A model of a water tank is built to a scale of 1 : 30. The model holds 2 litres. How '
         'many litres does the real tank hold?', '54,000',
         ['Volume scales by the **cube** of the length factor: 30³ = 27,000.',
          '2 × 27,000 = **54,000 litres**. A common wrong answer multiplies by 30 once; '
          'B squares it.'],
         S.tank_pair(30)),
        ('P7', 'Very hard',
         'Two similar solid figures have volumes of 8 cubic centimetres and 216 cubic '
         'centimetres. What is the ratio of their corresponding heights?', '1 : 3',
         ['216/8 = 27, and the height ratio is the **cube root** of the volume ratio.',
          '∛27 = 3, so the ratio is **1 : 3**. A common wrong answer uses the volume ratio '
          'itself.'],
         S.cube_pair(2, 6, 8, 216)),
        ('P8', 'Very hard',
         'Two similar triangles have areas of 9 and 25 square units. The shorter triangle has a '
         'side of length 6. What is the length of the corresponding side in the larger triangle?',
         '10',
         ['The side ratio is the square root of the area ratio: √(25/9) = 5/3.',
          '6 × 5/3 = **10**.'],
         S.two_triangles(('6', '', ''), ('10', '', ''), k='5/3')),
        ('P9', 'Very hard',
         'Triangles ABC and DEF have all three pairs of angles equal. Which conclusion is '
         'guaranteed?', 'The triangles are similar.',
         ['Equal angles guarantee the same **shape** but say nothing about size.',
          '**Similar**, and possibly congruent, but AAA alone never proves congruence — one '
          'could be an enlargement of the other.'],
         S.aa_pair((40, 60, 80))),
        ('P10', 'Very hard',
         'A rectangular photograph measuring 4 cm by 6 cm is enlarged by a scale factor of 2.5. '
         'What is the area of the enlarged photograph, in square centimetres?', '150',
         ['Original area 24 cm²; area scales by 2.5² = 6.25.',
          '24 × 6.25 = **150**. A common wrong answer multiplies the area by 2.5 once, the '
          'commonest error here.'],
         S.rect_pair(4, 10)),
        ('P11', 'Very hard',
         'Two triangles have sides 3, 4, 5 and 6, 8, 11 respectively. Are they similar, and why?',
         'No, because the three ratios are not all equal.',
         ['6/3 = 2 and 8/4 = 2, but 11/5 = 2.2.',
          'Similarity needs **all** matching ratios to agree, so they are not similar. A common '
          'wrong answer is true but irrelevant — similar triangles normally do have '
          'different perimeters.'],
         S.two_triangles(('3', '4', '5'), ('6', '8', '11'),
                         ratios=['6/3 = 2', '8/4 = 2', '11/5 = 2.2'], bad=True)),
        ('P12', 'Very hard',
         'In a figure, triangle ADE sits inside triangle ABC with DE parallel to BC. AD = 4, '
         'AB = 10 and the area of triangle ADE is 12 square units. What is the area of triangle '
         'ABC, in square units?', '75',
         ['The length factor is AB/AD = 10/4 = 2.5, so the area factor is 2.5² = 6.25.',
          '12 × 6.25 = **75**. A common wrong answer applies the length factor 2.5 to the '
          'area directly instead of squaring it.'],
         S.nested_similar(4, 6, 4, 6)),
    ],
    'habit': 'Areas scale by k squared and volumes by k cubed. Your class scored 47% here, and '
             'almost every lost mark was a length factor applied to an area or a volume.',
}
