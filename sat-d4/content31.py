# -*- coding: utf-8 -*-
"""SAT Math 3.1 — Ratios, Rates, Proportion & Units."""
import algebra as A
import data as D
from svgbase import GREEN, INK, RED


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


LESSON = {
    'code': '3.1',
    'title': 'Ratios, Rates, Proportion & Units',
    'sections': [
        {
            'title': 'Ratios — part to part, or part to whole?',
            'fact': 'a : b means a parts and b parts, so the whole is a + b parts',
            'text': '‘Boys to girls is 3 : 5’ means boys are **3/8** of the class, '
                    'not 3/5. **Add the parts first**, then take the share you need. When a '
                    'question gives a **difference** instead of a total, count how many parts '
                    'that difference is worth.',
            'figs': [D.ratio_bar((3, 5), ('red', 'blue'), 12,
                                 note='the difference of 2 parts is 24, so one part is 12')],
            'caption': 'Eight equal parts in all: three red and five blue. The gap between '
                       'them is two parts, which is what a ‘how many more’ question '
                       'gives you.',
            'examples': [
                ex('Red and blue counters are in the ratio 3 : 5 and there are 24 more blue '
                   'than red. How many counters altogether?',
                   ['The difference is 5 − 3 = 2 parts, so 2 parts = 24 and one part '
                    '= 12.', 'Total = 8 parts = **96**.'],
                   D.ratio_bar((3, 5), ('red', 'blue'), 12)),
                ex('A class of 36 has boys and girls in the ratio 4 : 5. How many girls?',
                   ['9 parts, so one part is 4.', 'Girls = 5 × 4 = **20**.'],
                   D.ratio_bar((4, 5), ('boys', 'girls'), 4)),
                ex('Three-eighths of a group are children. What is the ratio of children to '
                   'adults?',
                   ['Children 3 parts of 8, so adults are 8 − 3 = 5.',
                    'The ratio is **3 : 5**.'],
                   D.ratio_bar((3, 5), ('children', 'adults'), 1,
                               note='3 of the 8 parts are children')),
            ],
        },
        {
            'title': 'Proportion, and direct against inverse',
            'fact': 'direct: y = kx — double one, double the other  |  inverse: y = k/x '
                    '— double one, halve the other',
            'text': 'Decide which you have before calculating: more items cost more '
                    '(**direct**), more workers take fewer days (**inverse**). Inverse '
                    'questions are easiest as a fixed total of work — 5 painters × '
                    '12 days = 60 painter-days.',
            'figs': [A.rules_panel(
                (('direct: y = kx', 'twice the items, twice the cost'),
                 ('inverse: y = k/x', 'twice the workers, half the days'),
                 ('the test', 'does more of one mean more, or less, of the other?')),
                title='name the type before you calculate', w=340)],
            'caption': 'The two behave in opposite directions, and the words in the question '
                       'tell you which is which.',
            'examples': [
                ex('5 painters paint a house in 12 days. How many painters are needed to '
                   'finish it in 4 days?',
                   ['Total work = 5 × 12 = 60 painter-days.',
                    '60 ÷ 4 = **15 painters**. Fewer days needs more painters — '
                    'inverse.'],
                   A.flow(('5 × 12 = 60 painter-days', '60 ÷ 4 days',
                           '15 painters'))),
                ex('y is inversely proportional to x, and y = 6 when x = 4. Find y when '
                   'x = 3.',
                   ['k = xy = 24, so y = 24/3 = **8**. x went down, y went up.'],
                   A.flow(('k = xy = 24', 'y = 24/3', 'y = 8'))),
                ex('The time to fill a tank is inversely proportional to the number of taps. '
                   '5 taps take 36 minutes. How long do 9 taps take?',
                   ['Total work = 5 × 36 = 180 tap-minutes.',
                    '180 ÷ 9 = **20 minutes**.'],
                   A.flow(('5 × 36 = 180 tap-minutes', '180 ÷ 9', '20 minutes'))),
            ],
        },
        {
            'title': 'Scale drawings and maps',
            'fact': 'a scale of 1 : n means 1 unit on the drawing is n of the same units in '
                    'reality',
            'text': '1 : 50,000 means one centimetre is 50,000 **centimetres**. Multiply '
                    'first, **then** convert. And if lengths scale by k, **areas scale by '
                    'k²** and **volumes by k³**.',
            'figs': [D.unit_ladder(50)],
            'caption': 'The same factor applies once to a length, twice to an area and three '
                       'times to a volume — which is why a 1 : 50 model’s floor area '
                       'is 2,500 times smaller, not 50.',
            'examples': [
                ex('A model is built to scale 1 : 30 and holds 2 litres. How much does the '
                   'real object hold?',
                   ['Volumes scale by 30³ = 27,000.',
                    '2 × 27,000 = **54,000 litres** — not 60.'],
                   D.unit_ladder(30)),
                ex('A map has scale 1 : 50,000. A distance of 3 cm on the map is how many km?',
                   ['3 × 50,000 = 150,000 cm = 1,500 m.',
                    '**1.5 km.** Multiply first, convert second.'],
                   A.flow(('3 cm × 50 000', '150 000 cm', '1 500 m', '1.5 km'))),
                ex('On a 1 : 50 model the floor area is 1,200 cm². Find the real area in '
                   'm².',
                   ['Areas scale by 50² = 2,500.',
                    '1,200 × 2,500 = 3,000,000 cm² = **300 m²**.'],
                   D.unit_ladder(50)),
            ],
        },
        {
            'title': 'Unit rates and unit conversion',
            'fact': 'a unit rate is the amount per one  |  convert by multiplying by a '
                    'fraction equal to 1, arranged so the unwanted unit cancels',
            'text': 'The word after ‘per’ goes on the bottom. Write a conversion as '
                    'a fraction with the unit you want on top and the unit you are losing '
                    'underneath, and **never stop at the number** — check you finished in '
                    'the unit asked for.',
            'figs': [A.flow(('42 litres', '÷ 7 litres per 100 km',
                             '6 lots of 100 km', '600 km'),
                            note='the question asked for a distance, not a count of lots')],
            'caption': 'Six is the trap: it is the number of 100-km lots, not the distance. '
                       'One more step finishes the job.',
            'examples': [
                ex('A car uses 7 litres of fuel per 100 km. How far can it travel on 42 '
                   'litres?',
                   ['42 ÷ 7 = 6 lots of 100 km → **600 km**.',
                    'Stopping at 6 is the trap: the question asked for a distance, not a '
                    'count.'],
                   A.flow(('42 ÷ 7 = 6 lots', 'each lot is 100 km', '600 km'))),
                ex('Which is better value: 400 g for $3.20, or 650 g for $4.55?',
                   ['$8.00 per kg against **$7.00 per kg**, so the 650 g pack. Convert both '
                    'to the same rate first.'],
                   A.rules_panel((('400 g for $3.20', '$8.00 per kg'),
                                  ('650 g for $4.55', '$7.00 per kg — better')),
                                 w=320)),
                ex('Convert 72 km/h into metres per second.',
                   ['72 × 1,000 ÷ 3,600 = **20 m/s**. Kilometres and hours both '
                    'cancel.'],
                   A.flow(('72 km/h', '× 1000 m per km', '÷ 3600 s per hour',
                           '20 m/s'))),
            ],
        },
        {
            'title': 'Squared and cubed units, density and flow',
            'fact': '1 m² = 10,000 cm² · 1 m³ = 1,000,000 cm³ · '
                    '1 m³ = 1,000 L  |  density = mass ÷ volume',
            'text': 'Dividing an area by 100 instead of 10,000 is the error this box exists to '
                    'prevent. Flow rates **add** when two taps run together; times never do.',
            'figs': [D.unit_ladder(100)],
            'caption': 'One hundred centimetres to the metre, so ten thousand square '
                       'centimetres to the square metre and a million cubic ones. Each row is '
                       'the one above, multiplied by 100 again.',
            'examples': [
                ex('A tank measures 2 m by 1.5 m by 0.8 m and fills at 40 litres per minute. '
                   'How long does it take?',
                   ['Volume = 2.4 m³ = **2,400 litres**.',
                    '2,400 ÷ 40 = **60 minutes**. Two unit steps, not one.'],
                   A.flow(('2.4 m³', '×1000 → 2 400 L', '÷ 40 L/min',
                           '60 minutes'))),
                ex('A material has density 2.7 g/cm³. Express this in kg/m³.',
                   ['× 1,000,000 for the volume, ÷ 1,000 for the mass.',
                    '**2,700 kg/m³**.'],
                   D.unit_ladder(100)),
                ex('250 mL of a solution is 30% acid. How much water makes it 20% acid?',
                   ['Acid is 75 mL and does not change. 75 ÷ 0.20 = 375 mL in total.',
                    'Water added = **125 mL**.'],
                   A.flow(('75 mL acid stays fixed', '75 ÷ 0.20 = 375 mL total',
                           '375 − 250 = 125 mL'))),
            ],
        },
        {
            'title': 'Average speed — total over total',
            'fact': 'average speed = total distance ÷ total time  (never the average of '
                    'the speeds)',
            'text': 'This was the worst-answered question on your class’s mock: 2 of 15. '
                    'Averaging the two speeds is only correct when the legs take the **same '
                    'time**, which is almost never what the question describes.',
            'figs': [D.speed_panel(((600, 400), (600, 600)))],
            'caption': 'The slow leg takes longer, so it carries more weight. That is why the '
                       'answer sits below the halfway point between 400 and 600.',
            'examples': [
                ex('A plane flies 600 km at 400 km/h and returns at 600 km/h. Find the average '
                   'speed.',
                   ['Times 1.5 h and 1 h, so 2.5 h in total for 1,200 km.',
                    '1,200 ÷ 2.5 = **480 km/h** — not 500.'],
                   D.speed_panel(((600, 400), (600, 600)))),
                ex('A cyclist rides 24 km at 12 km/h, then 24 km at 8 km/h. Find the average '
                   'speed.',
                   ['Times 2 h and 3 h, so 5 h for 48 km.',
                    '48 ÷ 5 = **9.6 km/h** — not 10.'],
                   D.speed_panel(((24, 12), (24, 8)))),
                ex('Half a journey is covered at 30 km/h and half at 60 km/h. Find the average '
                   'speed.',
                   ['For a distance 2d the time is d/30 + d/60 = d/20.',
                    '2d ÷ (d/20) = **40 km/h**, not 45.'],
                   D.speed_panel(((60, 30), (60, 60)))),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. For this topic it is '
                    '**an equation solver and a unit chain**. Put the whole conversion on one '
                    'line so no step is lost, and type a relationship with an x in it when the '
                    'question hides one.',
    'desmos': [
        ('A recipe uses flour and sugar in the ratio 5 : 3. If 20 cups of flour are used, how '
         'many cups of sugar are needed?', '20*3/5', 'Scale the ratio in one line.', '12'),
        ('A car travels 240 kilometres in 3 hours at a constant speed. What is its speed in '
         'kilometres per hour?', '240/3', 'Distance over time.', '80'),
        ('A printer produces 18 pages in 40 seconds. At this rate, how many pages does it '
         'produce in 5 minutes?', '18/40*300', 'Convert minutes to seconds inside the line.',
         '135'),
        ('A map uses a scale of 1 cm to 25 km. Two towns are 7.4 cm apart on the map. How many '
         'kilometres apart are they?', '7.4*25', 'Multiply by the scale factor.', '185'),
        ('A rectangular tank measures 40 cm by 25 cm by 30 cm. How many litres does it hold? '
         '(1 litre = 1000 cm³)', '40*25*30/1000',
         'Divide by 1000, not by 1,000,000 — that factor converts to cubic metres.', '30'),
        ('A solution contains 36 grams of salt in 400 millilitres. What is the concentration '
         'in grams per litre?', '36/0.4', 'Convert millilitres to litres first.', '90'),
        ('A machine fills 450 bottles in 1 hour 15 minutes. How many bottles per minute is '
         'that?', '450/75', 'Work in a single unit before dividing.', '6'),
        ('A metal block has a mass of 540 grams and a volume of 60 cubic centimetres. What is '
         'its density, in grams per cubic centimetre?', '540/60', 'Density is mass over '
         'volume.', '9'),
        ('A shop sells 3 notebooks for $7.50. At the same rate, what do 11 notebooks cost, in '
         'dollars?', '7.50/3*11', 'Find the unit price, then scale.', '27.5'),
        ('A runner covers 12 kilometres in 50 minutes. What is this speed in kilometres per '
         'hour?', '12/50*60', 'Scale the time unit up to an hour.', '14.4'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'Two routes in: if the question hides a **relationship**, write an '
                   'equation; if it hides a **unit**, write the conversion as a fraction and '
                   'let the units cancel.',
    'part2': [
        ('P1', 'Hard',
         'A recipe calls for flour and sugar in the ratio 5 : 3. A baker uses 20 cups of '
         'flour. How many cups of sugar should the baker use?', '12',
         ['Each part is 20 ÷ 5 = 4 cups, and sugar is 3 parts.',
          '3 × 4 = **12 cups**. A common wrong answer is the difference between the '
          'parts, not the sugar.'],
         D.ratio_bar((5, 3), ('flour', 'sugar'), 4)),
        ('P2', 'Hard',
         'A printer produces 18 pages in 40 seconds. At this rate, how many pages will it '
         'produce in 5 minutes?', '135',
         ['5 minutes is 300 seconds, and the rate is 18/40 = 0.45 pages per second.',
          '0.45 × 300 = **135 pages**. A common wrong answer comes from using 5 minutes '
          'as 200 seconds.'],
         A.flow(('18 pages / 40 s', '= 0.45 pages per second', '× 300 s',
                 '135 pages'))),
        ('P3', 'Hard',
         'A rectangular oil tin measures 40 cm by 25 cm by 30 cm and is completely full. How '
         'many litres of oil does it hold? (1 litre = 1000 cubic centimetres)', '30',
         ['Volume = 40 × 25 × 30 = 30,000 cm³.',
          '30,000 ÷ 1000 = **30 litres**. Dividing by 1,000,000 gives 0.03 — that '
          'factor converts cm³ to *cubic metres*, not litres.'],
         D.unit_ladder(100)),
        ('P4', 'Hard',
         'On a map, 1 centimetre represents 25 kilometres. Two towns are 7.4 centimetres '
         'apart. What is the actual distance between them, in kilometres?', '185',
         ['7.4 × 25 = **185 km**.',
          'A common wrong answer divides instead of multiplying; another adds the two '
          'numbers.'],
         A.flow(('7.4 cm on the map', '× 25 km per cm', '185 km'))),
        ('P5', 'Hard',
         'A metal block has a mass of 540 grams and a volume of 60 cubic centimetres. What is '
         'its density, in grams per cubic centimetre?', '9',
         ['Density = mass ÷ volume = 540/60.',
          '= **9 g/cm³**. A common wrong answer inverts the fraction, giving volume per '
          'gram instead.'],
         A.rules_panel((('density = mass ÷ volume', '540 ÷ 60'),
                        ('answer', '9 g/cm³')), w=320)),
        ('P6', 'Hard',
         'A machine fills 450 bottles in 1 hour and 15 minutes. What is its rate, in bottles '
         'per minute?', '6',
         ['1 hour 15 minutes is 75 minutes.',
          '450 ÷ 75 = **6 bottles per minute**. A common wrong answer divides by 60, '
          'forgetting the extra 15 minutes.'],
         A.flow(('1 h 15 min', '= 75 minutes', '450 ÷ 75', '6 per minute'))),
        ('P7', 'Very hard',
         'A runner covers 12 kilometres in 50 minutes. What is this speed in kilometres per '
         'hour?', '14.4',
         ['In one minute the runner covers 12/50 = 0.24 km, and an hour is 60 minutes.',
          '0.24 × 60 = **14.4 km/h**. A common wrong answer divides 12 by 0.5, treating '
          '50 minutes as half an hour.'],
         A.flow(('12 km / 50 min', '0.24 km per minute', '× 60', '14.4 km/h'))),
        ('P8', 'Very hard',
         'A solution contains 36 grams of salt dissolved in 400 millilitres of water. What is '
         'the concentration, in grams per litre?', '90',
         ['400 mL = 0.4 L.',
          '36 ÷ 0.4 = **90 g/L**. A common wrong answer divides by 4 instead of 0.4 '
          '— a factor-of-ten slip the units would have caught.'],
         A.flow(('400 mL', '= 0.4 litres', '36 ÷ 0.4', '90 g/L'))),
        ('P9', 'Very hard',
         'Three identical notebooks cost $7.50. A school buys 44 notebooks and receives a 10% '
         'discount on the total. How much does the school pay, in dollars?', '99',
         ['Unit price = 7.50/3 = $2.50, so 44 cost 44 × 2.50 = $110.',
          'A 10% discount means paying 90%: 0.90 × 110 = **$99**.'],
         A.flow(('$2.50 each', '44 × 2.50 = $110', '× 0.90', '$99'))),
        ('P10', 'Very hard',
         'A cube has edges of 1 metre. A student says its volume is 100 cubic centimetres '
         'because 1 m = 100 cm. What is the correct volume, and what went wrong?',
         '1,000,000 cm³; the conversion factor must be cubed.',
         ['A length factor of 100 becomes 100² for area and 100³ for volume.',
          '1 m³ = 100³ = **1,000,000 cm³**. This is the same slip that turns '
          '30 litres into 0.03.'],
         D.unit_ladder(100)),
        ('P11', 'Very hard',
         'Two cyclists ride at constant speeds. The first covers 45 km in 3 hours; the second '
         'covers the same distance in 2 hours 30 minutes. How much faster is the second, in '
         'kilometres per hour?', '3',
         ['First: 45/3 = 15 km/h. Second: 2 h 30 min = 2.5 h, so 45/2.5 = 18 km/h.',
          '18 − 15 = **3 km/h**. A common wrong answer gives the second speed itself, '
          'not the difference.'],
         D.speed_panel(((45, 15), (45, 18)))),
        ('P12', 'Very hard',
         'A recipe for 4 people uses 300 grams of rice. A cook prepares the same recipe for 10 '
         'people but has only 700 grams of rice. How many grams short is the cook?', '50',
         ['For 10 people: 300 ÷ 4 = 75 g per person, and 75 × 10 = 750 g.',
          '750 − 700 = **50 grams short**.'],
         A.flow(('300 g for 4', '75 g per person', '× 10 = 750 g', '750 − 700 = 50'))),
    ],
    'habit': 'Eight of these twelve finish one step *before* the answer: 2.4 m³ is 2,400 '
             'litres, 6 lots of 100 km is 600 km, 48/5 is 9.6 and not 10. Every time you reach '
             'a number ask: *is this what they asked for, in the unit they asked for?*',
}
