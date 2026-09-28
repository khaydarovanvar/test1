# -*- coding: utf-8 -*-
"""Practice worksheet — Extremum problems (Grade 11, lessons 23–25).

Twenty-eight problems written for this sheet; none of them appears in the
lesson's own practice bank, so the sheet can follow the lesson without
repeating it.

Every answer and every intermediate step was checked with a CAS.

Notation: {...} is a maths span, a^b raises, and [num]/[den] stacks.
"""

TITLE = 'Extremum problems'
GRADE = 11
LESSONS = '23–25'
REFS = 'Algebra 11, §1.8 · P1 · 7.8'
NOTE = ('Name the variable, write the quantity to be optimised in terms of that one '
        'variable, then differentiate. Use the constraint to remove the second '
        'variable <b>before</b> differentiating, and state the units in the answer.')


def Q(q, a, work):
    return dict(q=q, a=a, work=work)


BANDS = [
 dict(key='easy', label='Easy', cols=2,
      note='The modelling is done for you, or takes one line. Problem 6 is about the '
           'domain, which is part of the answer and not an afterthought.',
      items=[
  Q('Two numbers add to {30}. Maximise their product.', '{225}',
    '{P = x(30 − x) = 30x − x^2}, so {P′ = 30 − 2x = 0} gives {x = 15} and the '
    'other number is also {15}.'),
  Q('Two numbers add to {10}. Minimise the sum of their squares.', '{50}',
    '{S = x^2 + (10 − x)^2}, so {S′ = 2x − 2(10 − x) = 4x − 20 = 0} gives {x = 5}.'),
  Q('Maximum value of {y = 12x − x^2}', '{36}, at {x = 6}',
    '{y′ = 12 − 2x = 0}.'),
  Q('Minimum value of {y = x^2 − 8x + 3}', '{−13}, at {x = 4}',
    '{y′ = 2x − 8 = 0}, then {y(4) = 16 − 32 + 3}.'),
  Q('{200} m of fence makes a rectangular field. Find the greatest area.',
    '{2500} m²',
    'Two sides {x} and two sides {100 − x}, so {A = x(100 − x)} and {x = 50}. '
    'The best rectangle is a square.'),
  Q('A square of side {x} is cut from each corner of a {16 × 16} card. Give the '
    'domain of {x}.', '{0 < x < 8}',
    'The cut cannot be zero and two cuts must fit along a side, so {2x < 16}.'),
  Q('A rectangle has perimeter {24}. Write its area in terms of one side {x}.',
    '{A = x(12 − x)}',
    'The other side is {[24 − 2x]/[2] = 12 − x}.'),
 ]),

 dict(key='med', label='Medium', cols=2,
      note='One constraint to substitute. In 12 the greatest value sits at an '
           'endpoint, not at a stationary point, which is why the ends must be tested.',
      items=[
  Q('{60} m of fence encloses a rectangle against a wall (three sides). Find the '
    'greatest area.', '{450} m²',
    'With {x} the side parallel to the wall, {x + 2y = 60}, so '
    '{A = x·[60 − x]/[2]}. Then {A′ = 30 − x = 0} gives {x = 30} and {y = 15}.'),
  Q('Corner squares of side {x} are cut from a {24 × 24} card and the sides folded '
    'up. Find the greatest volume.', '{1024} cm³, at {x = 4}',
    '{V = x(24 − 2x)^2}. Differentiating, {V′ = (24 − 2x)(24 − 6x)}, so {x = 4} '
    'or {x = 12}. Only {x = 4} lies in the domain {0 < x < 12}.'),
  Q('A closed cylinder holds {2000} cm³. Find the radius that minimises the surface '
    'area.', '{r = ∛([1000]/[π]) ≈ 6.83} cm',
    '{h = [2000]/[πr^2]}, so {S = 2πr^2 + 2πrh = 2πr^2 + [4000]/[r]}. '
    'Then {S′ = 4πr − [4000]/[r^2] = 0} gives {r^3 = [1000]/[π]}, and '
    '{S ≈ 879} cm².'),
  Q('Least value of {y = x + [16]/[x]} for {x > 0}', '{8}, at {x = 4}',
    '{y′ = 1 − [16]/[x^2] = 0} gives {x^2 = 16}, and only {x = 4} is in range.'),
  Q('Greatest value of {y = x^3 − 6x^2} on {[0, 5]}', '{0}, at {x = 0}',
    '{y′ = 3x(x − 4)} gives {x = 0} and {x = 4}. The candidates are {y(0) = 0}, '
    '{y(4) = −32}, {y(5) = −25}. The greatest is at an endpoint.'),
  Q('A rectangle has area {64} cm². Minimise its perimeter.', '{32} cm',
    '{P = 2(x + [64]/[x])}, so {P′ = 2(1 − [64]/[x^2]) = 0} gives {x = 8} — a '
    'square again.'),
  Q('An open box has a square base of side {x} and volume {500} cm³. Write its '
    'surface area in terms of {x}.', '{S = x^2 + [2000]/[x]}',
    '{h = [500]/[x^2]}, and the box has one base and four sides: '
    '{S = x^2 + 4xh}.'),
 ]),

 dict(key='hard', label='Hard', cols=1,
      note='The model takes several lines. In 15 and 17 a geometric relation is the '
           'constraint; in 16 minimising the square of the distance avoids the root '
           'and gives the same answer.',
      items=[
  Q('A rectangle is inscribed in a circle of radius {10}. Maximise its perimeter.',
    '{40√2 ≈ 56.6}',
    'With sides {x} and {y}, {x^2 + y^2 = 400}, so {y = √(400 − x^2)} and '
    '{P = 2x + 2√(400 − x^2)}. Then {P′ = 2 − [2x]/[√(400 − x^2)] = 0} gives '
    '{x = √(400 − x^2)}, so {x = y = 10√2} — a square.'),
  Q('Find the point on {y = 2x + 1} closest to the origin.',
    '{(−[2]/[5], [1]/[5])}, distance {[√5]/[5]}',
    'Minimise {D = x^2 + (2x + 1)^2} rather than the distance itself; the same '
    '{x} minimises both, because the square root is increasing. '
    '{D′ = 10x + 4 = 0} gives {x = −[2]/[5]}.'),
  Q('A cylinder is inscribed in a sphere of radius {3}. Maximise its volume.',
    '{12√3 π ≈ 65.3}',
    'With height {h}, the radius satisfies {r^2 + ([h]/[2])^2 = 9}, so '
    '{V = πr^2h = π(9 − [h^2]/[4])h}. Then {V′ = 9π − [3πh^2]/[4] = 0} gives '
    '{h^2 = 12}, so {h = 2√3} and {r^2 = 6}.'),
  Q('A wire {100} cm long is cut into two pieces, one bent into a square and the '
    'other into an equilateral triangle. Minimise the total area.',
    '{≈ 272} cm², with {≈ 43.5} cm in the square',
    'With {x} cm in the square, its area is {[x^2]/[16]}; the triangle has side '
    '{[100 − x]/[3]} and area {[√3]/[4]([100 − x]/[3])^2}. Differentiating and '
    'setting to zero gives {x = [800√3]/[18 + 8√3] ≈ 43.50}. '
    'Cutting nothing off — all wire in the square — gives {625} cm², so the '
    'stationary point really is the least.'),
  Q('An open-topped box with a square base holds {4000} cm³. Minimise the material '
    'used.', '{1200} cm², with base {20} cm and height {10} cm',
    '{S = x^2 + 4xh} with {h = [4000]/[x^2]}, so {S = x^2 + [16000]/[x]}. '
    'Then {S′ = 2x − [16000]/[x^2] = 0} gives {x^3 = 8000}.'),
  Q('A running track is a rectangle with a semicircular end at each side, of total '
    'perimeter {400} m. Maximise the area of the <b>rectangle</b>.',
    '{[20000]/[π] ≈ 6366} m²',
    'With {r} the radius of the semicircles and {x} the length of the rectangle, '
    'the perimeter is {2x + 2πr = 400}, so {x = 200 − πr}. The rectangle is '
    '{x} by {2r}, so {A = 2r(200 − πr)}. Then {A′ = 400 − 4πr = 0} gives '
    '{r = [100]/[π]} and {x = 100} m.'),
  Q('A box with a square base and no lid is made from {300} cm² of card. Maximise '
    'its volume.', '{500} cm³, base {10} cm, height {5} cm',
    '{x^2 + 4xh = 300}, so {h = [300 − x^2]/[4x]} and '
    '{V = x^2h = 75x − [x^3]/[4]}. Then {V′ = 75 − [3x^2]/[4] = 0} gives '
    '{x^2 = 100}.'),
 ]),

 dict(key='vhard', label='Very hard', cols=1,
      note='Letters instead of numbers, or a constraint that has to be built from a '
           'diagram. In 24 the numbers are chosen so that the root comes out exactly.',
      items=[
  Q('Show that among all rectangles of a given perimeter, the square has the '
    'greatest area.', 'shown',
    'Let the perimeter be {p}, so the sides are {x} and {[p]/[2] − x}. '
    '{A = x([p]/[2] − x)}, and {A′ = [p]/[2] − 2x = 0} gives {x = [p]/[4]} — '
    'so both sides are {[p]/[4]}. {A″ = −2 < 0} confirms a maximum, and the '
    'greatest area is {[p^2]/[16]}.'),
  Q('A cylinder is inscribed in a cone of height {12} and base radius {5}, with its '
    'base on the base of the cone. Maximise its volume.',
    '{[400π]/[9] ≈ 140}, with {r = [10]/[3]} and {h = 4}',
    'Similar triangles give {[h]/[12] = [5 − r]/[5]}, so {h = 12 − [12r]/[5]}. '
    'Then {V = πr^2h = π(12r^2 − [12r^3]/[5])} and '
    '{V′ = π(24r − [36r^2]/[5]) = 0} gives {r = [10]/[3]}.'),
  Q('A pipeline runs from a rig {5} km offshore to a refinery {13} km along a '
    'straight coast. Underwater pipe costs ${5}m per km and land pipe ${3}m per km. '
    'Where should the pipe meet the shore, and what is the least cost?',
    '{3.75} km from the nearest point; ${59}m',
    'With {x} km along the shore from the point nearest the rig, '
    '{C = 5√(25 + x^2) + 3(13 − x)}. Then '
    '{C′ = [5x]/[√(25 + x^2)] − 3 = 0} gives {5x = 3√(25 + x^2)}, so '
    '{25x^2 = 225 + 9x^2} and {x = [15]/[4]}. '
    'Then {√(25 + x^2) = 6.25} and {C = 31.25 + 27.75 = 59}. '
    'Going straight ashore costs {25 + 39 = 64}, and going straight to the '
    'refinery costs {5√194 ≈ 69.6}, so the compromise really is cheaper.'),
  Q('The height plus the circumference of a cylindrical parcel may not exceed '
    '{300} cm. Maximise its volume.',
    '{[1000000]/[π] ≈ 318000} cm³, with {r = [100]/[π]} and {h = 100} cm',
    'The largest parcel uses the whole allowance, so {h + 2πr = 300} and '
    '{V = πr^2(300 − 2πr)}. Then {V′ = 600πr − 6π^2r^2 = 6πr(100 − πr) = 0} '
    'gives {r = [100]/[π] ≈ 31.8} cm, and {h = 300 − 200 = 100} cm.'),
  Q('Show that the rectangle of greatest area inscribed in a semicircle of radius '
    '{r}, with one side on the diameter, has area {r^2}.', 'shown',
    'Corners at {(±x, y)} with {x^2 + y^2 = r^2}, so {A = 2x√(r^2 − x^2)}. '
    'Maximise {A^2 = 4x^2(r^2 − x^2)} instead: differentiating gives '
    '{8xr^2 − 16x^3 = 0}, so {x^2 = [r^2]/[2]} and then {y^2 = [r^2]/[2]}. '
    'Hence {A = 2 · [r]/[√2] · [r]/[√2] = r^2}. '
    'The rectangle is twice as wide as it is tall, so it is not a square.'),
  Q('Find the point on {y = x^2} closest to {(3, 0)}.', '{(1, 1)}, distance {√5}',
    'Minimise {D = (x − 3)^2 + x^4}. Then {D′ = 2(x − 3) + 4x^3 = 0}, that is '
    '{2x^3 + x − 3 = 0}, which factorises as {(x − 1)(2x^2 + 2x + 3) = 0}. '
    'The quadratic has discriminant {4 − 24 < 0}, so {x = 1} is the only real '
    'root — one closest point, not two.'),
  Q('A cylindrical can with no lid has volume {V}. Show that the material is least '
    'when the height equals the radius.', 'shown',
    '{S = πr^2 + 2πrh} with {h = [V]/[πr^2]}, so {S = πr^2 + [2V]/[r]}. '
    'Then {S′ = 2πr − [2V]/[r^2] = 0} gives {r^3 = [V]/[π]}, that is '
    '{V = πr^3}. Putting that back, {h = [πr^3]/[πr^2] = r}. '
    '{S″ = 2π + [4V]/[r^3] > 0}, so it is a minimum. '
    'A closed can would give {h = 2r} instead — the lid changes the answer.'),
 ]),
]
