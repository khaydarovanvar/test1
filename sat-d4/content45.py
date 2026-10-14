# -*- coding: utf-8 -*-
"""SAT Math 4.5 — Area & Volume."""
import shapes as S

DEG = '°'


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


LESSON = {
    'code': '4.5',
    'title': 'Area & Volume',
    'sections': [
        {
            'title': 'Areas of plane figures',
            'fact': 'triangle ½bh  |  parallelogram bh  |  trapezoid ½(a + b)h  |  '
                    'circle πr²',
            'text': 'The height is always the *perpendicular* distance, not the slanted side. A '
                    'triangle drawn leaning over still uses the vertical height.',
            'figs': [S.area_triangle(12, 7), S.area_parallelogram(9, 5, 6),
                     S.area_trapezoid(8, 14, 5)],
            'caption': 'In all three the red dashed line is the height: it meets the base at a '
                       'right angle. The slanted side of 6 in the parallelogram is a '
                       'distraction — the height is 5.',
            'examples': [
                ex('A triangle has base 12 and perpendicular height 7. Find its area.',
                   ['½(12)(7) = **42**.'],
                   S.area_triangle(12, 7)),
                ex('A trapezoid has parallel sides 8 and 14 and height 5. Find its area.',
                   ['½(8 + 14)(5) = ½(22)(5) = **55**.'],
                   S.area_trapezoid(8, 14, 5)),
                ex('A parallelogram has base 9 and slant side 6, with perpendicular height 5. '
                   'Find its area.',
                   ['Use the perpendicular height, not the slant.', '9 × 5 = **45**.'],
                   S.area_parallelogram(9, 5, 6)),
            ],
        },
        {
            'title': 'Composite figures',
            'fact': 'split the shape into pieces you know, or subtract a hole from a whole',
            'text': 'Decide whether adding or subtracting is quicker, then label every piece '
                    'before calculating. A shaded region is nearly always one area minus '
                    'another.',
            'figs': [S.composite_square_circle(10, 5), S.lshape(10, 6, 4, 3)],
            'caption': 'Left: the shaded part is the square minus the circular hole. Right: the '
                       'L-shape is the full rectangle minus the dashed corner that was removed.',
            'examples': [
                ex('A square of side 10 has a circle of radius 5 cut from it. Find the shaded '
                   'area left over.',
                   ['100 − 25π ≈ 100 − 78.54 = **21.46**.'],
                   S.composite_square_circle(10, 5)),
                ex('A rectangle 12 by 8 has a triangle of base 12 and height 8 removed. What '
                   'fraction remains?',
                   ['Rectangle 96, triangle 48.', '**Half** remains.'],
                   S.rect_minus_triangle(12, 8)),
                ex('An L-shape is a 10 by 6 rectangle with a 4 by 3 rectangle removed from one '
                   'corner. Find its area.',
                   ['60 − 12 = **48**.'],
                   S.lshape(10, 6, 4, 3)),
            ],
        },
        {
            'title': 'Volume of prisms and cylinders',
            'fact': 'V = (area of the base) × height  |  cylinder V = πr²h',
            'text': 'Any solid with the same cross-section all the way up follows one rule: find '
                    'the base area, multiply by the height. The reference sheet gives these, so '
                    'the work is choosing the base.',
            'figs': [S.cylinder(3, 8), S.cuboid(40, 25, 30), S.prism_triangular(15, 10)],
            'caption': 'Each solid has one cross-section repeated along its length. Find that '
                       'face’s area — a circle, a rectangle, a triangle — then '
                       'multiply by how far it travels.',
            'examples': [
                ex('A cylinder has radius 3 and height 8. Find its volume.',
                   ['π(9)(8) = **72π** ≈ 226.19.'],
                   S.cylinder(3, 8)),
                ex('A rectangular tank measures 40 by 25 by 30 centimetres. Find its volume.',
                   ['40 × 25 × 30 = **30,000 cm³**, which is 30 litres.'],
                   S.cuboid(40, 25, 30)),
                ex('A triangular prism has a base triangle of area 15 and length 10. Find its '
                   'volume.',
                   ['15 × 10 = **150**.'],
                   S.prism_triangular(15, 10)),
            ],
        },
        {
            'title': 'Cones, pyramids and spheres',
            'fact': 'cone ⅓πr²h  |  pyramid ⅓Bh  |  sphere '
                    '⁴⁄₃πr³',
            'text': 'The one-third is the whole difficulty: a cone is a third of the cylinder '
                    'that would contain it. All three formulas are on the reference sheet, so '
                    'check you have copied the fraction.',
            'figs': [S.cone(6, 10), S.pyramid(), S.sphere(3)],
            'caption': 'The cone and the pyramid both carry the one third; the sphere carries '
                       'four thirds and cubes the radius. Copy the fraction before you '
                       'substitute.',
            'examples': [
                ex('A cone has radius 6 and height 10. Find its volume.',
                   ['(1/3)π(36)(10) = **120π**.'],
                   S.cone(6, 10)),
                ex('A sphere has radius 3. Find its volume.',
                   ['(4/3)π(27) = **36π**.'],
                   S.sphere(3)),
                ex('A cylinder and a cone share the same radius and height. How do their volumes '
                   'compare?',
                   ['The cone is exactly **one third** of the cylinder.'],
                   S.solids_row()),
            ],
        },
        {
            'title': 'Scaling a solid',
            'fact': 'lengths × k  |  surface area × k²  |  volume × k³',
            'text': 'Changing one dimension multiplies the volume by that factor alone. Changing '
                    'every dimension by k multiplies the volume by k cubed. Read carefully which '
                    'the question means.',
            'figs': [S.scale_solid(2), S.cylinder_pair(2, 3)],
            'caption': 'Left: every edge doubles, so the volume is eight times as large. Right: '
                       'two similar cans in the ratio 2 : 3 have volumes in the ratio 8 : 27.',
            'examples': [
                ex('A cylinder’s radius is doubled and its height is unchanged. What '
                   'happens to the volume?',
                   ['V depends on r².', 'The volume is multiplied by **4**.'],
                   S.cylinder(6, 8)),
                ex('A cube’s edges are all tripled. What happens to its volume?',
                   ['Every dimension triples.', 'Volume × 3³ = **27**.'],
                   S.scale_solid(3)),
                ex('A cylinder’s height alone is doubled. What happens to the volume?',
                   ['Only one dimension changes.', 'Volume **doubles**.'],
                   S.cylinder_pair(1, 2)),
            ],
        },
        {
            'title': 'Density and unit conversion',
            'fact': 'density = mass ÷ volume  |  for volume the conversion factor is cubed',
            'text': 'Density questions are a rate in disguise. For units, remember 1 litre = '
                    '1000 cm³ while 1 m³ = 1,000,000 cm³ — the two are not '
                    'the same factor.',
            'figs': [S.density(540, 60), S.unit_conversion()],
            'caption': 'A litre is a 10 cm cube, so 10³ = 1 000 cm³. A cubic metre is '
                       'a 100 cm cube, so 100³ = 1 000 000 cm³. Using one factor for '
                       'the other is the classic slip.',
            'examples': [
                ex('A block has mass 540 g and volume 60 cm³. Find its density.',
                   ['540/60 = **9 g/cm³**.'],
                   S.density(540, 60)),
                ex('A tank holds 30,000 cm³. How many litres is that?',
                   ['30,000 ÷ 1000 = **30 litres**.'],
                   S.cuboid(40, 25, 30, note='30 000 cm³ = 30 litres')),
                ex('How many cubic centimetres are in 1 cubic metre?',
                   ['100³ = **1,000,000**. The length factor 100 gets cubed.'],
                   S.unit_conversion()),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. Here it is **an arithmetic '
                    'engine for formulas**. Type the whole formula with its numbers in one line '
                    'so the 1/3 or the ½ cannot go missing.',
    'desmos': [
        ('A triangle has base 12 and height 7. What is its area?', '0.5*12*7',
         'Half base times height.', '42'),
        ('A trapezoid has parallel sides 8 and 14 and height 5. What is its area?',
         '0.5*(8+14)*5', 'Average the parallel sides, then multiply by the height.', '55'),
        ('A cylinder has radius 3 and height 8. What is its volume as a multiple of π?',
         '3^2*8', 'r squared times h.', '72'),
        ('A cone has radius 6 and height 10. What is its volume as a multiple of π?',
         '(1/3)*6^2*10', 'Do not forget the one third.', '120'),
        ('A sphere has radius 3. What is its volume as a multiple of π?', '(4/3)*3^3',
         'Four thirds times r cubed.', '36'),
        ('A tank measures 40 by 25 by 30 cm. How many litres does it hold?', '40*25*30/1000',
         'Divide by 1000, not by a million.', '30'),
        ('A block has mass 540 g and volume 60 cm³. What is its density in g/cm³?',
         '540/60', 'Mass over volume.', '9'),
        ('A square of side 10 has a circle of radius 5 removed. What area remains, to two '
         'decimals?', '100-pi*25', 'Subtract the hole from the whole.', '21.46'),
        ('A cylinder’s radius is doubled and its height is unchanged. By what factor does '
         'the volume grow?', '2^2', 'Volume depends on r squared.', '4'),
        ('How many cubic centimetres are in one cubic metre?', '100^3',
         'The length factor is cubed.', '1000000'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there are '
                   'no options to choose from, so show the working that gets you there. Write the '
                   'formula down before substituting. Most lost marks in this topic are a correct '
                   'calculation of the wrong formula.',
    'part2': [
        ('P1', 'Hard',
         'A market supplier pours 4,320π cubic centimetres of olive oil into identical '
         'cylindrical jars. Each jar has an inside radius of 3 centimetres and is filled to a '
         'height of 8 centimetres. How many jars does the supplier fill?', '60',
         ['Each jar holds π(9)(8) = 72π cm³.',
          '4320π ÷ 72π = **60 jars**. A common wrong answer is the volume of one '
          'jar in multiples of π, not a count.'],
         S.jar_fill()),
        ('P2', 'Hard',
         'An oil tin is a rectangular prism measuring 40 cm by 25 cm by 30 cm and is completely '
         'full. How many litres of oil does it hold? (1 litre = 1000 cubic centimetres)', '30',
         ['40 × 25 × 30 = 30,000 cm³.',
          '30,000 ÷ 1000 = **30 litres**. Dividing by 1,000,000 gives 0.03 — that '
          'factor converts to cubic *metres*, and eight of your class used it on Test 5.'],
         S.cuboid(40, 25, 30, note='30 000 cm³ = 30 litres')),
        ('P3', 'Hard',
         'A trapezoid has parallel sides of 8 and 14 and a perpendicular height of 5. What is '
         'its area?', '55',
         ['Area = ½(a + b)h = ½(22)(5) = **55**.',
          'A common wrong answer forgets the one half; another averages the sides but omits the '
          'height.'],
         S.area_trapezoid(8, 14, 5)),
        ('P4', 'Hard',
         'A cone has a radius of 6 and a height of 10. What is its volume?', '120π',
         ['V = (1/3)πr²h = (1/3)π(36)(10).',
          '= **120π**. A common wrong answer is the cylinder’s volume — the one '
          'third was dropped.'],
         S.cone(6, 10)),
        ('P5', 'Hard',
         'A metal block has a mass of 540 grams and a volume of 60 cubic centimetres. What is '
         'its density, in grams per cubic centimetre?', '9',
         ['Density = mass ÷ volume = 540/60 = **9 g/cm³**.',
          'A common wrong answer inverts the fraction; another multiplies instead of dividing.'],
         S.density(540, 60)),
        ('P6', 'Hard',
         'A square of side 10 centimetres has a circle of radius 5 centimetres cut out of it. '
         'What is the area of the remaining region, to the nearest hundredth of a square '
         'centimetre?', '21.46',
         ['100 − π(25) = 100 − 78.5398… = **21.46 cm²**.'],
         S.composite_square_circle(10, 5)),
        ('P7', 'Very hard',
         'A cylinder’s radius is doubled while its height stays the same. By what factor is '
         'its volume multiplied?', '4',
         ['V = πr²h, and only r changes, so the factor is 2².',
          'The volume is **4 times** as large. A common wrong answer would be right if *every* '
          'dimension doubled.'],
         S.cylinder_pair(1, 2)),
        ('P8', 'Very hard',
         'A sphere and a cylinder both have radius 3. The cylinder has height 3. What is the '
         'ratio of the sphere’s volume to the cylinder’s?', '4 : 3',
         ['Sphere = (4/3)π(27) = 36π; cylinder = π(9)(3) = 27π.',
          '36 : 27 = **4 : 3**. A common wrong answer inverts the ratio.'],
         S.sphere(3)),
        ('P9', 'Very hard',
         'A rectangular swimming pool is 12 metres long, 5 metres wide and 2 metres deep. Water '
         'is pumped in at 40 litres per minute. How many minutes does it take to fill?', '3000',
         ['Volume = 120 m³, and 1 m³ = 1000 litres, so 120,000 litres.',
          '120,000 ÷ 40 = **3,000 minutes**. Using 1 m³ = 1,000,000 cm³ and then '
          'forgetting to convert to litres is the usual slip here.'],
         S.cuboid(12, 5, 2, unit_name='m', note='120 m³ = 120 000 litres')),
        ('P10', 'Very hard',
         'Two similar cylindrical cans have heights in the ratio 2 : 3. What is the ratio of '
         'their volumes?', '8 : 27',
         ['Similar solids scale by k in length, so volumes scale by k³.',
          '2³ : 3³ = **8 : 27**. A common wrong answer squares instead of cubing, '
          'which is the surface-area rule.'],
         S.cylinder_pair(2, 3)),
        ('P11', 'Very hard',
         'An L-shaped floor is formed by removing a 4 m by 3 m rectangle from one corner of a '
         '10 m by 6 m rectangle. Tiles cost $12 per square metre. What is the total cost of '
         'tiling the floor?', '$576',
         ['Area = 60 − 12 = 48 m².',
          '48 × 12 = **$576**. A common wrong answer tiles only the 12 m² corner that '
          'was removed.'],
         S.lshape(10, 6, 4, 3)),
        ('P12', 'Very hard',
         'A cube has a surface area of 150 square centimetres. What is its volume, in cubic '
         'centimetres?', '125',
         ['A cube has 6 faces, so each face has area 150/6 = 25 and the edge is 5.',
          'V = 5³ = **125**. A common wrong answer is the area of one face, not the volume.'],
         S.cube_faces(150)),
    ],
    'habit': 'Litres and cubic metres use different conversion factors: 1 litre = 1,000 cm³ '
             'but 1 m³ = 1,000,000 cm³. Eight of thirteen of your class used the wrong '
             'one on Test 5 and turned 30 litres into 0.03.',
}
