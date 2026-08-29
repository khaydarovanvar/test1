/* Grade 8 · Geometry · Quarter I (18 hours)
   National backbone: Rahimkariev & Toxtaxodjaeva, "Geometry 8" (2019), Chapter I.
   Cambridge references: Lower Secondary Mathematics Stage 9. */
var G8_GEO = [];

/* ============================== 1 ============================== */
G8_GEO.push({
  id: 'geo-01', stream: 'geo', grade: 8, quarter: 1, lessons: '1–2', hours: 2,
  title: 'Revision of the Grade 7 course',
  subtitle: 'Angles on parallel lines, the angle sum of a triangle, isosceles triangles and the congruence tests — the facts every proof this quarter will quote.',
  uz: 'Geometry 8, p. 3', uzPage: 'pp. 3–4',
  cam: 'Stage 9 · 5.1', camPage: 'Learner’s Book pp. 104–108', wb: 'Workbook 5.1',
  objectives: [
    'Use vertically opposite, corresponding, alternate and co-interior angles.',
    'Use the angle sum of a triangle and the exterior angle theorem.',
    'State and use the properties of an isosceles triangle.',
    'Quote the four congruence tests correctly (SSS, SAS, ASA, RHS).'
  ],
  timing: [[5, 'Warm-up'], [14, 'Explanation'], [7, 'Interactive'], [12, 'Practice'], [2, 'Homework']],
  terms: [
    ['Angle', 'Burchak', 'Угол'],
    ['Vertex', 'Uchi', 'Вершина'],
    ['Parallel lines', 'Parallel to‘g‘ri chiziqlar', 'Параллельные прямые'],
    ['Transversal', 'Kesuvchi', 'Секущая'],
    ['Corresponding angles', 'Mos burchaklar', 'Соответственные углы'],
    ['Alternate angles', 'Almashinuvchi burchaklar', 'Накрест лежащие углы'],
    ['Co-interior angles', 'Ichki bir tomonli burchaklar', 'Односторонние углы'],
    ['Isosceles triangle', 'Teng yonli uchburchak', 'Равнобедренный треугольник'],
    ['Congruent', 'Teng (mos)', 'Равные'],
    ['Median', 'Mediana', 'Медиана'],
    ['Bisector', 'Bissektrisa', 'Биссектриса'],
    ['Altitude (height)', 'Balandlik', 'Высота'],
  ],
  sections: [
    {
      h: 'Why these four facts',
      html: `<p>Every proof in Chapter I — that the opposite sides of a parallelogram are equal, that the
      diagonals of a rectangle are equal, that the midline is half the base — is built from the same
      small set of Grade 7 facts. Two lessons spent making them automatic pays for the whole quarter.</p>`
    },
    {
      h: '1 · Angles on parallel lines',
      html: `<p>When a transversal crosses two parallel lines:</p>
      <ul>
        <li><b>Corresponding</b> angles are equal (the “F” shape).</li>
        <li><b>Alternate</b> angles are equal (the “Z” shape).</li>
        <li><b>Co-interior</b> angles add to ${m('180°')} (the “C” shape).</li>
      </ul>
      {{fig:parallelLines:A transversal crossing two parallel lines. Equal angles are marked with the same colour.}}
      <p>And independently of any parallel lines: <b>vertically opposite</b> angles are equal, and
      angles on a straight line add to ${m('180°')}.</p>`
    },
    {
      h: '2 · The angle sum of a triangle',
      html: `<div class="keybox"><div class="klabel">Theorem</div>
      The three angles of any triangle add up to ${m('180°')}.</div>
      {{fig:triangleAngleSum:Draw a line through A parallel to BC. The two outer angles equal ∠B and ∠C (alternate angles), and together with ∠A they fill a straight line.}}
      <p>That figure <em>is</em> the proof: the dashed line through ${m('A')} is parallel to ${m('BC')},
      so the two outer angles equal ${m('∠B')} and ${m('∠C')}, and the three angles together make a
      straight line.</p>
      <div class="keybox"><div class="klabel">Corollary — the exterior angle</div>
      An exterior angle of a triangle equals the sum of the two interior angles not next to it.</div>`
    },
    {
      h: '3 · The isosceles triangle',
      html: `{{fig:isoscelesTriangle:In an isosceles triangle the base angles are equal, and the line from the apex to the midpoint of the base is at the same time the median, the height and the angle bisector.}}
      <ul>
        <li>${m('AB = AC ⟹ ∠B = ∠C')} — and the converse is also true.</li>
        <li>The median from the apex is also the height and the bisector of the apex angle.</li>
        <li>An equilateral triangle has all three angles ${m('60°')}.</li>
      </ul>`
    },
    {
      h: '4 · The congruence tests',
      html: `{{fig:congruence:Two triangles with two equal sides and the equal angle between them — the SAS test.}}
      <ol>
        <li><b>SSS</b> — three sides.</li>
        <li><b>SAS</b> — two sides and the angle <em>between</em> them.</li>
        <li><b>ASA</b> — two angles and the side between them.</li>
        <li><b>RHS</b> — right angle, hypotenuse and one other side.</li>
      </ol>
      <div class="warn"><span class="wl">There is no “SSA”</span>
      Two sides and an angle that is <em>not</em> between them does not fix the triangle. Learners quote
      this constantly; correct it now rather than in the control work.</div>
      <p>In congruent triangles, corresponding sides and corresponding angles are equal. Naming the
      vertices in the right order — ${m('△ABC ≅ △A₁B₁C₁')} — is what tells the reader which parts
      correspond.</p>`
    }
  ],
  examples: [
    {
      q: m('In △ABC, ∠A = 52° and ∠B = 61°. Find ∠C and the exterior angle at C.'),
      steps: [
        [m('∠A + ∠B + ∠C = 180°'), 'Angle sum of a triangle.'],
        [m('∠C = 180° − 52° − 61° = 67°'), 'Subtract.'],
        [m('exterior angle = 180° − 67° = 113°'), 'Angles on a straight line.'],
        [m('check: 52° + 61° = 113° ✓'), 'The exterior angle equals the two opposite interior angles.']
      ],
      ans: m('∠C = 67°') + ', exterior angle ' + m('113°')
    },
    {
      q: m('△ABC is isosceles with AB = AC and ∠A = 40°. Find ∠B.'),
      steps: [
        [m('∠B = ∠C'), 'Base angles of an isosceles triangle.'],
        [m('40° + 2∠B = 180°'), 'Angle sum, with ∠C replaced by ∠B.'],
        [m('2∠B = 140°'), ''],
        [m('∠B = 70°'), '']
      ],
      ans: m('∠B = ∠C = 70°')
    }
  ],
  modelNote: 'Drag a vertex until the triangle is nearly flat and ask what happens to the sum. It stays 180°.',
  interactive: { type: 'triangleAngles' },
  quiz: [
    { q: 'Alternate angles on parallel lines are:', a: ['equal', 'supplementary', 'complementary', 'unrelated'], c: 0, why: 'The “Z” shape — alternate angles are equal.' },
    { q: 'Co-interior angles on parallel lines add to:', a: [m('90°'), m('180°'), m('360°'), 'they are equal'], c: 1, why: 'The “C” shape — they are supplementary.' },
    { q: 'An exterior angle of a triangle equals:', a: ['the nearest interior angle', 'the sum of the two opposite interior angles', m('180°'), 'half the angle sum'], c: 1, why: 'Both equal 180° minus the adjacent interior angle.' },
    { q: 'Which is NOT a congruence test?', a: ['SSS', 'SAS', 'SSA', 'ASA'], c: 2, why: 'Two sides and a non-included angle can give two different triangles.' }
  ],
  practice: {
    easy: [
      [m('Two angles of a triangle are 40° and 75°. Find the third.'), m('65°')],
      [m('An isosceles triangle has apex angle 40°. Find each base angle.'), m('70°')],
      [m('Two parallel lines are cut by a transversal. One angle is 65°. Find its corresponding angle.'), m('65°')],
      [m('Find the co-interior partner of an angle of 110°.'), m('70°')],
      [m('Find the angle vertically opposite an angle of 128°.'), m('128°')],
      [m('Each angle of an equilateral triangle is:'), m('60°')],
      [m('An exterior angle of a triangle is 120°. Find the adjacent interior angle.'), m('60°')]
    ],
    med: [
      [m('In △ABC, ∠A = 52° and ∠B = 61°. Find the exterior angle at C.'), m('113°')],
      [m('An isosceles triangle has a base angle of 35°. Find the apex angle.'), m('110°')],
      [m('The angles of a triangle are in the ratio 2 : 3 : 4. Find them.'), m('40°, 60°, 80°')],
      [m('In △ABC, AB = AC and ∠A = 2∠B. Find all three angles.'), m('∠A = 90°, ∠B = ∠C = 45°')],
      [m('Two angles of a triangle are equal and the third is 96°. Find them.'), m('42°') + ' each'],
      [m('Name the congruence test: two triangles share two sides and the angle between them.'), 'SAS'],
      [m('Name the congruence test: two right triangles have equal hypotenuse and one equal leg.'), 'RHS']
    ],
    hard: [
      [m('In △ABC the exterior angle at A is 130° and ∠B = 55°. Find ∠C.'), m('∠C = 75°') + ' — the exterior angle equals ' + m('∠B + ∠C') + '.'],
      [m('△ABC is isosceles with AB = AC. The bisector of ∠B meets AC at D and ∠ABD = 25°. Find ∠A.'), m('∠B = 50°, so ∠C = 50°') + ' and ' + m('∠A = 80°')],
      [m('Prove that the median to the base of an isosceles triangle is also its height.'), 'The two half-triangles are congruent by SSS, so the two angles at the base of the median are equal and together make ' + m('180°') + ' — each is ' + m('90°') + '.'],
      [m('In △ABC, ∠A = 90° and ∠B = ∠C. Find ∠B, and say what kind of triangle it is.'), m('45°') + '; a right isosceles triangle.'],
      [m('Two parallel lines are cut by a transversal so that one pair of co-interior angles is in the ratio 4 : 5. Find both.'), m('80°') + ' and ' + m('100°')],
      [m('Explain why two triangles with equal angles need not be congruent.'), 'Equal angles fix the <em>shape</em> only. The triangles are similar; without one equal side they can be any size.'],
      [m('△ABC has ∠A = ∠B. Prove that CA = CB.'), 'Converse of the isosceles-triangle theorem: drop the bisector of ' + m('∠C') + '; the two triangles are congruent by ASA, so ' + m('CA = CB') + '.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, pp. 3–4 (revision). Draw a figure for every question.',
  homework: [
    m('Two angles of a triangle are 38° and 47°. Find the third and the exterior angle at that vertex.'),
    m('An isosceles triangle has apex angle 96°. Find the base angles.'),
    m('The angles of a triangle are in the ratio 1 : 2 : 3. Find them and name the triangle.'),
    m('A transversal cuts two parallel lines. One co-interior angle is 3 times the other. Find both.'),
    'Write out the four congruence tests, each with a sketch.'
  ]
});

/* ============================== 2 ============================== */
G8_GEO.push({
  id: 'geo-02', stream: 'geo', grade: 8, quarter: 1, lessons: '3–4', hours: 2,
  title: 'Polygons. Interior and exterior angles',
  subtitle: 'Splitting a polygon into triangles gives 180°(n − 2) — and the exterior angles always add to 360°, however many sides there are.',
  uz: 'Geometry 8, Тема 1', uzPage: 'Тема 1, pp. 5–7',
  cam: 'Stage 9 · 5.2–5.3', camPage: 'Learner’s Book pp. 109–118', wb: 'Workbook 5.2–5.3',
  objectives: [
    'Define a polygon, its vertices, sides, diagonals and angles.',
    'Distinguish convex from non-convex polygons.',
    'Derive and use ' + m('180°(n − 2)') + ' for the sum of the interior angles.',
    'Use the fact that the exterior angles of any convex polygon add to ' + m('360°') + '.'
  ],
  terms: [
    ['Polygon', 'Ko‘pburchak', 'Многоугольник'],
    ['Convex', 'Qavariq', 'Выпуклый'],
    ['Side', 'Tomon', 'Сторона'],
    ['Diagonal', 'Diagonal', 'Диагональ'],
    ['Interior angle', 'Ichki burchak', 'Внутренний угол'],
    ['Exterior angle', 'Tashqi burchak', 'Внешний угол'],
    ['Regular polygon', 'Muntazam ko‘pburchak', 'Правильный многоугольник'],
    ['Sum of the angles', 'Burchaklar yig‘indisi', 'Сумма углов'],
    ['Pentagon', 'Beshburchak', 'Пятиугольник'],
    ['Hexagon', 'Oltiburchak', 'Шестиугольник'],
  ],
  sections: [
    {
      h: 'What a polygon is',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      A <b>polygon</b> is a closed broken line together with the part of the plane it encloses. Its
      corners are <b>vertices</b>, its segments are <b>sides</b>, and a segment joining two
      non-adjacent vertices is a <b>diagonal</b>. A polygon with ${m('n')} sides is an
      ${m('n')}-gon and has ${m('n')} vertices and ${m('n')} angles.</div>
      <div class="figrow">
      {{fig:convex:Convex — the whole polygon lies on one side of every side-line.}}
      {{fig:nonconvex:Not convex — one interior angle is reflex, and the polygon crosses the line of a side.}}
      </div>
      <p>A polygon is <b>convex</b> if it lies entirely on one side of the line containing any of its
      sides. Equivalently: every interior angle is less than ${m('180°')}. Every triangle is convex.</p>`
    },
    {
      h: 'The sum of the interior angles',
      html: `<div class="keybox"><div class="klabel">Theorem</div>
      The interior angles of a convex ${m('n')}-gon add up to
      ${eq(m('180° · (n − 2)'))}</div>
      {{fig:angleSum:All the diagonals from one vertex split the hexagon into 4 = 6 − 2 triangles.}}
      <p><b>Proof.</b> Choose one vertex and draw all the diagonals from it. They cut the ${m('n')}-gon
      into exactly ${m('n − 2')} triangles — one fewer than the number of sides you can “see” from that
      vertex. The angles of all these triangles together make up exactly the angles of the polygon, so
      the sum is ${m('180°(n − 2)')}. ∎</p>
      <div class="figrow">
      {{fig:quadAngleSum:A quadrilateral is two triangles — 2 × 180° = 360°.}}
      </div>
      <div class="tablewrap"><table>
      <thead><tr><th>Polygon</th><th>n</th><th>Triangles</th><th>Angle sum</th><th>Each angle if regular</th></tr></thead>
      <tbody>
        <tr><td>Triangle</td><td>3</td><td>1</td><td>180°</td><td>60°</td></tr>
        <tr><td>Quadrilateral</td><td>4</td><td>2</td><td>360°</td><td>90°</td></tr>
        <tr><td>Pentagon</td><td>5</td><td>3</td><td>540°</td><td>108°</td></tr>
        <tr><td>Hexagon</td><td>6</td><td>4</td><td>720°</td><td>120°</td></tr>
        <tr><td>Octagon</td><td>8</td><td>6</td><td>1080°</td><td>135°</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'The exterior angles',
      html: `<div class="keybox"><div class="klabel">Theorem</div>
      Taking one exterior angle at each vertex, the exterior angles of any convex polygon add up to
      ${m('360°')} — <b>whatever the number of sides</b>.</div>
      {{fig:exteriorAngles:One exterior angle at each vertex. Walking once round the polygon turns you through a full circle.}}
      <p><b>Why.</b> At each vertex, interior + exterior = ${m('180°')}. Over ${m('n')} vertices that is
      ${m('180°n')} altogether, and the interior angles account for ${m('180°(n − 2) = 180°n − 360°')}.
      What is left for the exterior angles is exactly ${m('360°')}.</p>
      <p>The walking picture is worth showing: set off along one side and walk right round the polygon.
      At each corner you turn by the exterior angle, and when you arrive back at the start you are
      facing your original direction — you have turned through one full revolution.</p>
      <p>For a <b>regular</b> ${m('n')}-gon this makes the arithmetic immediate: each exterior angle is
      ${m(f('360°', 'n'))}, so each interior angle is ${m('180° − ' + f('360°', 'n'))}.</p>`
    }
  ],
  examples: [
    {
      q: 'Find the sum of the interior angles of a decagon, and each angle if it is regular.',
      steps: [
        [m('n = 10'), 'A decagon has ten sides.'],
        [m('180°(10 − 2) = 180° · 8 = 1440°'), 'Apply the formula.'],
        [m(f('1440°', '10') + ' = 144°'), 'Regular means all ten angles are equal.'],
        [m('check: exterior angle = ' + f('360°', '10') + ' = 36°, and 180° − 36° = 144° ✓'), 'Two routes, same answer.']
      ],
      ans: m('1440°') + '; each angle ' + m('144°')
    },
    {
      q: 'The interior angles of a convex polygon add up to 1260°. How many sides has it?',
      steps: [
        [m('180°(n − 2) = 1260°'), 'Set up the equation.'],
        [m('n − 2 = 7'), 'Divide by 180.'],
        [m('n = 9'), 'A nonagon.']
      ],
      ans: m('9') + ' sides'
    },
    {
      q: 'Each interior angle of a regular polygon is 156°. Find the number of sides.',
      steps: [
        [m('exterior angle = 180° − 156° = 24°'), 'Work with the exterior angle — far quicker.'],
        [m('n · 24° = 360°'), 'All exterior angles are equal and add to 360°.'],
        [m('n = 15'), '']
      ],
      ans: m('15') + ' sides'
    }
  ],
  modelNote: 'Slide n from 3 to 12 and let the class read off the triangle count before the formula appears.',
  interactive: { type: 'polygonAngles' },
  quiz: [
    { q: 'The interior angles of a hexagon add up to:', a: [m('540°'), m('720°'), m('900°'), m('360°')], c: 1, why: '180°(6 − 2) = 720°.' },
    { q: 'The exterior angles of a convex 20-gon add up to:', a: [m('360°'), m('3240°'), m('720°'), m('1800°')], c: 0, why: 'Always 360°, whatever n is.' },
    { q: 'Each exterior angle of a regular polygon is 45°. It has:', a: ['6 sides', '8 sides', '9 sides', '12 sides'], c: 1, why: '360° ÷ 45° = 8.' },
    { q: 'A polygon is convex when:', a: ['all its sides are equal', 'every interior angle is less than 180°', 'it has an even number of sides', 'its diagonals are equal'], c: 1, why: 'Equivalently, it lies on one side of the line of every side.' }
  ],
  practice: {
    easy: [
      [m('Sum of the interior angles of a pentagon'), m('540°')],
      [m('Sum of the interior angles of an octagon'), m('1080°')],
      [m('Each interior angle of a regular hexagon'), m('120°')],
      [m('Each exterior angle of a regular pentagon'), m('72°')],
      [m('Sum of the exterior angles of a convex 12-gon'), m('360°')],
      [m('How many triangles do the diagonals from one vertex of a heptagon make?'), m('5')],
      [m('Three angles of a quadrilateral are 80°, 95° and 100°. Find the fourth.'), m('85°')]
    ],
    med: [
      [m('The interior angles of a convex polygon add to 1260°. Find n.'), m('n = 9')],
      [m('Each interior angle of a regular polygon is 156°. Find n.'), m('n = 15')],
      [m('Each exterior angle of a regular polygon is 24°. Find n and the interior angle.'), m('n = 15') + ', interior ' + m('156°')],
      [m('Sum of the interior angles of a regular decagon, and each angle'), m('1440°') + ', ' + m('144°')],
      [m('The angles of a quadrilateral are in the ratio 1 : 2 : 3 : 4. Find them.'), m('36°, 72°, 108°, 144°')],
      [m('A convex polygon has 20 sides. Find the sum of its interior angles.'), m('3240°')],
      [m('How many diagonals can be drawn from one vertex of an n-gon?'), m('n − 3')]
    ],
    hard: [
      [m('Each interior angle of a regular polygon is 4 times its exterior angle. Find n.'), 'exterior ' + m('= 36°') + ', so ' + m('n = 10')],
      [m('The interior angles of a convex polygon add to 2340°. Find n.'), m('n = 15')],
      [m('Show that a convex polygon can have at most three acute interior angles.'), 'Four or more acute angles would leave four exterior angles each above ' + m('90°') + ', already exceeding ' + m('360°') + '.'],
      [m('Find the total number of diagonals of an n-gon.'), m(f('n(n − 3)', '2')) + ' — each vertex sends ' + m('n − 3') + ', and each diagonal is counted twice.'],
      [m('Is a regular polygon with each interior angle 155° possible? Explain.'), 'No — the exterior angle would be ' + m('25°') + ' and ' + m('360 ÷ 25 = 14.4') + ' is not a whole number.'],
      [m('The angles of a pentagon are 5 consecutive whole numbers of degrees. Find them.'), m('106°, 107°, 108°, 109°, 110°')],
      [m('A regular polygon has interior angle 3 times that of a regular hexagon minus 180°. Find n.'), 'interior ' + m('= 3 · 120° − 180° = 180°') + ' — impossible, so no such polygon exists.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Тема 1, pp. 5–7. Cambridge Learner’s Book 5.2–5.3 for extra practice.',
  homework: [
    m('Find the sum of the interior angles of a 14-gon.'),
    m('Each interior angle of a regular polygon is 162°. Find the number of sides.'),
    m('Three angles of a quadrilateral are equal and the fourth is 120°. Find them.'),
    m('A regular polygon has exterior angle 20°. Find n and the interior angle.'),
    m('Draw a convex and a non-convex hexagon, and mark the reflex angle on the second.')
  ]
});

/* ============================== 3 ============================== */
G8_GEO.push({
  id: 'geo-03', stream: 'geo', grade: 8, quarter: 1, lessons: '5', hours: 1,
  title: 'Parallelogram and its properties',
  subtitle: 'One definition — both pairs of opposite sides parallel — and three properties that follow from a single pair of congruent triangles.',
  uz: 'Geometry 8, Тема 2', uzPage: 'Тема 2, pp. 8–10',
  cam: 'Stage 9 · beyond', camPage: 'Extension beyond Stage 9', wb: '—',
  objectives: [
    'State the definition of a parallelogram.',
    'Prove and use: opposite sides equal, opposite angles equal, diagonals bisect each other.',
    'Use the fact that neighbouring angles are supplementary.',
    'Solve numerical problems on sides, angles and perimeter.'
  ],
  timing: [[4, 'Warm-up'], [13, 'Explanation'], [8, 'Interactive'], [13, 'Practice'], [2, 'Homework']],
  terms: [
    ['Parallelogram', 'Parallelogramm', 'Параллелограмм'],
    ['Opposite sides', 'Qarama-qarshi tomonlar', 'Противоположные стороны'],
    ['Opposite angles', 'Qarama-qarshi burchaklar', 'Противоположные углы'],
    ['Adjacent angles', 'Qo‘shni burchaklar', 'Прилежащие углы'],
    ['The diagonals bisect each other', 'Diagonallar bir-birini teng ikkiga bo‘ladi', 'Диагонали делятся пополам'],
    ['Perimeter', 'Perimetr', 'Периметр'],
    ['Property', 'Xossa', 'Свойство'],
    ['Proof', 'Isbot', 'Доказательство'],
  ],
  sections: [
    {
      h: 'The definition',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      A <b>parallelogram</b> is a quadrilateral whose opposite sides are pairwise parallel:
      ${m('AB ∥ DC')} and ${m('AD ∥ BC')}.</div>
      {{fig:parallelogram:Opposite sides carry the same tick marks; opposite angles carry the same arcs. Neighbouring angles add to 180°.}}
      <p>Notice what the definition does <em>not</em> say. It says nothing about lengths and nothing
      about angles. Everything else has to be proved.</p>`
    },
    {
      h: 'Property 1 — opposite sides are equal',
      html: `<p><b>Proof.</b> Draw the diagonal ${m('AC')}. It cuts the parallelogram into
      ${m('△ABC')} and ${m('△CDA')}.</p>
      <ul>
        <li>${m('AC')} is common to both.</li>
        <li>${m('∠BAC = ∠DCA')} — alternate angles, since ${m('AB ∥ DC')}.</li>
        <li>${m('∠BCA = ∠DAC')} — alternate angles, since ${m('AD ∥ BC')}.</li>
      </ul>
      <p>So ${m('△ABC ≅ △CDA')} by ASA, and therefore ${m('AB = CD')} and ${m('BC = AD')}. ∎</p>
      <div class="keybox"><div class="klabel">Consequence</div>
      Perimeter ${m('P = 2(a + b)')}, where ${m('a')} and ${m('b')} are two neighbouring sides.</div>`
    },
    {
      h: 'Property 2 — opposite angles are equal',
      html: `<p>The same congruent triangles give ${m('∠B = ∠D')} directly. For ${m('∠A')} and ${m('∠C')},
      add the two pairs of alternate angles at each of them.</p>
      <div class="keybox"><div class="klabel">And neighbouring angles</div>
      ${m('∠A + ∠B = 180°')} — they are co-interior angles between the parallels ${m('AD')} and ${m('BC')}.
      So knowing <b>one</b> angle of a parallelogram gives you all four.</div>`
    },
    {
      h: 'Property 3 — the diagonals bisect each other',
      html: `{{fig:pgramDiagonals:The diagonals cross at O, and each is cut into two equal parts: AO = OC and BO = OD.}}
      <p><b>Proof.</b> Let the diagonals meet at ${m('O')}. In ${m('△AOB')} and ${m('△COD')}:</p>
      <ul>
        <li>${m('AB = CD')} — Property 1.</li>
        <li>${m('∠OAB = ∠OCD')} and ${m('∠OBA = ∠ODC')} — alternate angles on ${m('AB ∥ DC')}.</li>
      </ul>
      <p>So ${m('△AOB ≅ △COD')} by ASA, giving ${m('AO = OC')} and ${m('BO = OD')}. ∎</p>
      <div class="warn"><span class="wl">Bisect, not equal</span>
      The diagonals cut <b>each other</b> in half. They are <b>not</b> equal to one another — that only
      happens in a rectangle, and it is the single most common error in this chapter.</div>`
    }
  ],
  examples: [
    {
      q: m('In parallelogram ABCD, ∠A = 65°. Find the other three angles.'),
      steps: [
        [m('∠C = ∠A = 65°'), 'Opposite angles are equal.'],
        [m('∠B = 180° − 65° = 115°'), 'Neighbouring angles are supplementary.'],
        [m('∠D = ∠B = 115°'), 'Opposite angles again.'],
        [m('check: 65 + 115 + 65 + 115 = 360 ✓'), 'The angle sum of a quadrilateral.']
      ],
      ans: m('∠B = ∠D = 115°, ∠C = 65°')
    },
    {
      q: 'The perimeter of a parallelogram is 48 cm and one side is 3 cm longer than the other. Find the sides.',
      steps: [
        [m('2(a + b) = 48, so a + b = 24'), 'Perimeter formula.'],
        [m('b = a + 3'), 'The given relation.'],
        [m('a + a + 3 = 24 ⟹ 2a = 21 ⟹ a = 10.5'), ''],
        [m('b = 13.5'), '']
      ],
      ans: m('10.5 cm') + ' and ' + m('13.5 cm')
    },
    {
      q: m('The diagonals of parallelogram ABCD meet at O, with AC = 14 cm and BD = 10 cm. Find AO and OD.'),
      steps: [
        [m('AO = OC = ' + f('14', '2') + ' = 7 cm'), 'The diagonals bisect each other.'],
        [m('BO = OD = ' + f('10', '2') + ' = 5 cm'), 'Same property, other diagonal.'],
        ['Note that ' + m('AC ≠ BD') + ' — the diagonals are not equal here.', 'They would be only in a rectangle.']
      ],
      ans: m('AO = 7 cm, OD = 5 cm')
    }
  ],
  modelNote: 'Drag A, B or D and watch AB = DC and AD = BC hold, while AC and BD stay different.',
  interactive: {
    type: 'quadExplorer', mode: 'parallelogram',
    title: 'Drag the parallelogram',
    read: ['AB', 'DC', 'AD', 'BC', '∠A', '∠C', 'AC', 'BD', 'AO', 'OC']
  },
  quiz: [
    { q: 'In a parallelogram, the diagonals:', a: ['are equal', 'bisect each other', 'are perpendicular', 'bisect the angles'], c: 1, why: 'They cut each other in half; equal diagonals need a rectangle.' },
    { q: m('∠A = 110°') + ' in parallelogram ABCD. Then ' + m('∠B') + ' is:', a: [m('110°'), m('70°'), m('55°'), m('90°')], c: 1, why: 'Neighbouring angles are co-interior, so they add to 180°.' },
    { q: 'A parallelogram has sides 7 cm and 5 cm. Its perimeter is:', a: [m('12 cm'), m('24 cm'), m('35 cm'), m('17 cm')], c: 1, why: 'P = 2(7 + 5) = 24 cm.' },
    { q: 'The proof that opposite sides are equal uses:', a: ['SSS', 'ASA with a diagonal', 'RHS', 'the angle sum of a quadrilateral'], c: 1, why: 'A diagonal creates two triangles congruent by ASA using two pairs of alternate angles.' }
  ],
  practice: {
    easy: [
      [m('In parallelogram ABCD, AB = 8 cm. Find CD.'), m('8 cm')],
      [m('∠A = 70°. Find ∠C.'), m('70°')],
      [m('∠A = 70°. Find ∠B.'), m('110°')],
      [m('Sides 6 cm and 9 cm. Find the perimeter.'), m('30 cm')],
      [m('AC = 12 cm and the diagonals meet at O. Find AO.'), m('6 cm')],
      [m('BD = 9 cm. Find OD.'), m('4.5 cm')],
      [m('One angle of a parallelogram is 90°. What are the others?'), m('90°') + ' each — it is a rectangle.']
    ],
    med: [
      [m('∠A = 65°. Find all four angles.'), m('65°, 115°, 65°, 115°')],
      [m('The perimeter is 48 cm and one side is 3 cm longer than the other. Find the sides.'), m('10.5 cm') + ' and ' + m('13.5 cm')],
      [m('AC = 14 cm, BD = 10 cm. Find AO and OD.'), m('AO = 7 cm, OD = 5 cm')],
      [m('Two neighbouring angles are in the ratio 2 : 3. Find all four angles.'), m('72°, 108°, 72°, 108°')],
      [m('The perimeter is 36 cm and one side is twice the other. Find the sides.'), m('6 cm') + ' and ' + m('12 cm')],
      [m('∠A − ∠B = 40°. Find both angles.'), m('∠A = 110°, ∠B = 70°')],
      [m('In parallelogram ABCD, AO = 5 cm and OD = 3 cm. Find AC and BD.'), m('AC = 10 cm, BD = 6 cm')]
    ],
    hard: [
      [m('The bisector of ∠A of parallelogram ABCD meets BC at K. Prove that BK = AB.'), m('∠BAK = ∠KAD = ∠AKB') + ' (alternate angles), so ' + m('△ABK') + ' is isosceles and ' + m('BK = AB') + '.'],
      [m('In parallelogram ABCD, AB = 6, BC = 10, and the bisector of ∠A meets BC at K. Find KC.'), m('BK = AB = 6') + ', so ' + m('KC = 10 − 6 = 4') + '.'],
      [m('Prove that a parallelogram with one right angle is a rectangle.'), 'Neighbouring angles are supplementary, so the neighbours are ' + m('90°') + ' too, and opposite angles equal them.'],
      [m('The diagonals of a parallelogram are 16 cm and 12 cm and one side is 10 cm. Find the perimeter, given the diagonals are perpendicular.'), 'Perpendicular diagonals make it a rhombus, so all sides are ' + m('10 cm') + ' and ' + m('P = 40 cm') + '.'],
      [m('In parallelogram ABCD the perpendicular from B to AD has length 6 and AD = 9. Find the area.'), m('S = 9 · 6 = 54') + ' square units.'],
      [m('Prove that if the diagonals of a quadrilateral bisect each other, the opposite sides are equal.'), m('△AOB ≅ △COD') + ' by SAS (vertically opposite angles), so ' + m('AB = CD') + '; similarly ' + m('BC = AD') + '.'],
      [m('In parallelogram ABCD, ∠A is three times ∠B. Find all four angles.'), m('∠A = ∠C = 135°, ∠B = ∠D = 45°')]
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Тема 2, pp. 8–10. Draw and label a figure for each.',
  homework: [
    m('In parallelogram ABCD, ∠D = 118°. Find the other three angles.'),
    m('The perimeter is 54 cm and one side is 5 cm shorter than the other. Find the sides.'),
    m('The diagonals meet at O with AO = 6.5 cm and BO = 4 cm. Find AC and BD.'),
    m('Two neighbouring angles are in the ratio 4 : 5. Find all four.'),
    m('Prove that the diagonal of a parallelogram divides it into two congruent triangles.')
  ]
});

/* ============================== 4 ============================== */
G8_GEO.push({
  id: 'geo-04', stream: 'geo', grade: 8, quarter: 1, lessons: '6', hours: 1,
  title: 'Tests for a parallelogram',
  subtitle: 'The properties run backwards: three conditions, any one of which is enough to guarantee that a quadrilateral is a parallelogram.',
  uz: 'Geometry 8, Тема 3', uzPage: 'Тема 3, pp. 11–13',
  cam: 'Stage 9 · beyond', camPage: 'Extension beyond Stage 9', wb: '—',
  objectives: [
    'State the three tests for a parallelogram.',
    'Tell a property (given a parallelogram, deduce …) from a test (given …, deduce a parallelogram).',
    'Prove a quadrilateral is a parallelogram using the appropriate test.',
    'Recognise a condition that is <em>not</em> sufficient.'
  ],
  timing: [[4, 'Warm-up'], [14, 'Explanation'], [7, 'Interactive'], [13, 'Practice'], [2, 'Homework']],
  terms: [
    ['Test (criterion)', 'Alomat', 'Признак'],
    ['Sufficient condition', 'Yetarli shart', 'Достаточное условие'],
    ['Necessary condition', 'Zarur shart', 'Необходимое условие'],
    ['Converse statement', 'Teskari tasdiq', 'Обратное утверждение'],
    ['Counter-example', 'Qarshi misol', 'Контрпример'],
    ['Quadrilateral', 'To‘rtburchak', 'Четырёхугольник'],
    ['Trapezium', 'Trapetsiya', 'Трапеция'],
    ['Kite', 'Deltoid', 'Дельтоид'],
  ],
  sections: [
    {
      h: 'Property or test?',
      html: `<p>Last lesson every statement began “<em>in a parallelogram</em> …”. This lesson every
      statement ends “<em>… therefore it is a parallelogram</em>”. Same facts, opposite direction —
      and getting the direction right is most of the marks in a proof.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Property (Тема 2)</th><th>Test (Тема 3)</th></tr></thead>
      <tbody>
        <tr><td>A parallelogram has opposite sides equal.</td><td>Opposite sides equal ⟹ parallelogram.</td></tr>
        <tr><td>A parallelogram has opposite angles equal.</td><td>Opposite angles equal ⟹ parallelogram.</td></tr>
        <tr><td>Its diagonals bisect each other.</td><td>Diagonals bisecting each other ⟹ parallelogram.</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'Test 1 — two opposite sides equal and parallel',
      html: `<div class="keybox"><div class="klabel">Test 1</div>
      If two <b>opposite</b> sides of a quadrilateral are equal <b>and</b> parallel, it is a parallelogram.</div>
      <p><b>Proof.</b> Suppose ${m('AB = CD')} and ${m('AB ∥ CD')}. Draw the diagonal ${m('AC')}. Then
      ${m('∠BAC = ∠DCA')} (alternate angles) and ${m('AC')} is common, so ${m('△ABC ≅ △CDA')} by SAS.
      Hence ${m('∠BCA = ∠DAC')}, and those are alternate angles for ${m('BC')} and ${m('AD')} — so
      ${m('BC ∥ AD')} and the definition is satisfied. ∎</p>
      <div class="warn"><span class="wl">Both conditions, on the same pair</span>
      Equal <em>and</em> parallel, and it must be the <em>same</em> pair of sides. Two sides equal and a
      different pair parallel gives an isosceles trapezium, not a parallelogram.</div>`
    },
    {
      h: 'Test 2 — both pairs of opposite sides equal',
      html: `<div class="keybox"><div class="klabel">Test 2</div>
      If ${m('AB = CD')} and ${m('BC = AD')}, the quadrilateral is a parallelogram.</div>
      <p><b>Proof.</b> The diagonal ${m('AC')} makes ${m('△ABC ≅ △CDA')} by SSS. Then both pairs of
      alternate angles are equal, so both pairs of opposite sides are parallel. ∎</p>`
    },
    {
      h: 'Test 3 — the diagonals bisect each other',
      html: `<div class="keybox"><div class="klabel">Test 3</div>
      If the diagonals of a quadrilateral bisect each other, it is a parallelogram.</div>
      {{fig:pgramDiagonals:AO = OC and BO = OD is enough on its own — the shape has to be a parallelogram.}}
      <p><b>Proof.</b> With ${m('AO = OC')}, ${m('BO = OD')} and the vertically opposite angles at
      ${m('O')} equal, ${m('△AOB ≅ △COD')} by SAS. So ${m('AB = CD')}, and the equal alternate angles
      give ${m('AB ∥ CD')}. Test 1 finishes the job. ∎</p>
      <div class="keybox"><div class="klabel">A fourth test, sometimes useful</div>
      If both pairs of opposite <b>angles</b> are equal, the quadrilateral is a parallelogram. From
      ${m('∠A = ∠C')} and ${m('∠B = ∠D')} with total ${m('360°')} we get ${m('∠A + ∠B = 180°')}, which
      makes the sides parallel as co-interior angles.</div>`
    },
    {
      h: 'Conditions that are not enough',
      html: `<ul>
        <li>One pair of sides parallel only → a <b>trapezium</b>.</li>
        <li>One pair parallel and the <em>other</em> pair equal → could be an isosceles trapezium.</li>
        <li>Diagonals equal → could be an isosceles trapezium or a rectangle.</li>
        <li>Two adjacent sides equal → could be a kite.</li>
      </ul>
      {{fig:quadFamily:Where each quadrilateral sits. An arrow means “is a special case of”.}}`
    }
  ],
  examples: [
    {
      q: m('In quadrilateral ABCD, AB = 7 cm, CD = 7 cm and AB ∥ CD. Is ABCD a parallelogram?'),
      steps: [
        ['One pair of opposite sides is both equal and parallel.', 'That is exactly Test 1.'],
        ['Test 1 applies to the same pair of sides ' + m('AB') + ' and ' + m('CD') + ' ✓', 'Check that the pair really is opposite.'],
        ['So ' + m('ABCD') + ' is a parallelogram.', '']
      ],
      ans: 'Yes — by Test 1.'
    },
    {
      q: m('The diagonals of ABCD meet at O with AO = OC = 5 and BO = 4, OD = 6. Is it a parallelogram?'),
      steps: [
        [m('AO = OC ✓'), 'One diagonal is bisected.'],
        [m('BO = 4 ≠ 6 = OD ✗'), 'The other is not.'],
        ['Test 3 needs <b>both</b> diagonals bisected.', 'One is not enough.']
      ],
      ans: 'No — Test 3 fails.'
    },
    {
      q: m('M is the midpoint of both AC and BD. Prove ABCD is a parallelogram.'),
      steps: [
        [m('AM = MC') + ' and ' + m('BM = MD'), 'M is the midpoint of each diagonal.'],
        ['So the diagonals bisect each other.', 'Exactly the hypothesis of Test 3.'],
        [m('ABCD') + ' is a parallelogram.', '']
      ],
      ans: 'Parallelogram, by Test 3.'
    }
  ],
  modelNote: 'Use the model to test each condition: which ones force the shape, and which leave it free?',
  interactive: {
    type: 'fractionCancel',
    title: 'Is this enough to force a parallelogram?',
    hint: 'Read each condition, take a vote, then reveal the reasoning.',
    items: [
      {
        title: 'AB = CD and AB ∥ CD',
        start: 'One pair of opposite sides is equal <b>and</b> parallel.',
        steps: [
          ['Draw diagonal ' + m('AC') + '. Alternate angles give ' + m('∠BAC = ∠DCA') + '.', 'Uses AB ∥ CD.'],
          [m('AB = CD') + ', and ' + m('AC') + ' is common, so ' + m('△ABC ≅ △CDA') + ' by SAS.', ''],
          ['Then ' + m('∠BCA = ∠DAC') + ', so ' + m('BC ∥ AD') + '.', 'Both pairs are now parallel.']
        ],
        answer: '<b>Yes</b> — this is Test 1.'
      },
      {
        title: 'AB = CD and BC ∥ AD',
        start: 'One pair of sides equal, and the <b>other</b> pair parallel.',
        steps: [
          ['The equal sides and the parallel sides are different pairs.', 'Test 1 does not apply.'],
          ['An isosceles trapezium satisfies exactly this: ' + m('AB = CD') + ' as legs, ' + m('BC ∥ AD') + ' as bases.', 'A counter-example.'],
          ['So the condition is not sufficient.', '']
        ],
        answer: '<b>No</b> — an isosceles trapezium fits the description.'
      },
      {
        title: 'The diagonals are equal',
        start: m('AC = BD') + '.',
        steps: [
          ['Equal diagonals do not say where they cross.', 'Nothing forces them to bisect each other.'],
          ['An isosceles trapezium has equal diagonals and is not a parallelogram.', 'A counter-example.'],
          ['So this is not a test.', 'It is, however, a <em>property</em> of a rectangle.']
        ],
        answer: '<b>No</b> — an isosceles trapezium has equal diagonals.'
      },
      {
        title: 'The diagonals bisect each other',
        start: m('AO = OC') + ' and ' + m('BO = OD') + '.',
        steps: [
          ['Vertically opposite angles at ' + m('O') + ' are equal.', ''],
          [m('△AOB ≅ △COD') + ' by SAS, so ' + m('AB = CD') + ' and ' + m('AB ∥ CD') + '.', ''],
          ['Test 1 now applies.', '']
        ],
        answer: '<b>Yes</b> — this is Test 3.'
      }
    ]
  },
  quiz: [
    { q: 'Which condition forces a quadrilateral to be a parallelogram?', a: ['its diagonals are equal', 'its diagonals bisect each other', 'two adjacent sides are equal', 'one pair of sides is parallel'], c: 1, why: 'That is Test 3. Equal diagonals only give a rectangle or isosceles trapezium.' },
    { q: m('AB = CD') + ' and ' + m('AB ∥ CD') + ' means the quadrilateral is:', a: ['a trapezium', 'a parallelogram', 'a kite', 'not determined'], c: 1, why: 'Test 1 — the same pair of opposite sides is both equal and parallel.' },
    { q: 'A quadrilateral with one pair of parallel sides only is:', a: ['a parallelogram', 'a trapezium', 'a rhombus', 'a rectangle'], c: 1, why: 'Exactly one pair parallel is the definition of a trapezium.' },
    { q: 'Both pairs of opposite angles equal means:', a: ['nothing in particular', 'it is a parallelogram', 'it is a rectangle', 'it is a rhombus'], c: 1, why: 'The angles then force neighbouring angles to be supplementary, so the sides are parallel.' }
  ],
  practice: {
    easy: [
      [m('AB = CD and AB ∥ CD. Is ABCD a parallelogram?'), 'Yes — Test 1.'],
      [m('AB = CD and BC = AD. Is ABCD a parallelogram?'), 'Yes — Test 2.'],
      [m('The diagonals bisect each other. Is ABCD a parallelogram?'), 'Yes — Test 3.'],
      [m('Only AB ∥ CD is known. What is ABCD?'), 'A trapezium.'],
      [m('∠A = ∠C and ∠B = ∠D. Is ABCD a parallelogram?'), 'Yes.'],
      [m('AC = BD. Is ABCD a parallelogram?'), 'Not necessarily.'],
      [m('AB = BC = CD = DA. Is ABCD a parallelogram?'), 'Yes — a rhombus, which is a parallelogram.']
    ],
    med: [
      [m('AO = OC = 5, BO = 4, OD = 6. Is ABCD a parallelogram?'), 'No — only one diagonal is bisected.'],
      [m('AB = 7, CD = 7, BC ∥ AD. Is ABCD a parallelogram?'), 'Not necessarily — an isosceles trapezium fits.'],
      [m('M is the midpoint of both AC and BD. Prove ABCD is a parallelogram.'), 'The diagonals bisect each other — Test 3.'],
      [m('∠A = 80° and ∠C = 80°, ∠B = 100°. Find ∠D and decide.'), m('∠D = 100°') + '; opposite angles equal, so it is a parallelogram.'],
      [m('AB = 6, BC = 9, CD = 6, DA = 9. Is ABCD a parallelogram?'), 'Yes — Test 2.'],
      [m('AB = 6, BC = 9, CD = 9, DA = 6. Is ABCD a parallelogram?'), 'No — the equal sides are adjacent; this is a kite.'],
      [m('Which test proves a rhombus is a parallelogram?'), 'Test 2 — both pairs of opposite sides are equal.']
    ],
    hard: [
      [m('In △ABC, M is the midpoint of BC. Point D is on ray AM with AM = MD. Prove ABDC is a parallelogram.'), m('M') + ' is the midpoint of both ' + m('BC') + ' and ' + m('AD') + ', so the diagonals bisect each other — Test 3.'],
      [m('K and L are the midpoints of AB and CD in parallelogram ABCD. Prove AKCL is a parallelogram.'), m('AK = ' + f('1', '2') + 'AB = ' + f('1', '2') + 'CD = CL') + ' and ' + m('AK ∥ CL') + ' — Test 1.'],
      [m('The diagonals of ABCD meet at O and △AOB ≅ △COD. Must ABCD be a parallelogram?'), 'Yes if the congruence pairs ' + m('AO') + ' with ' + m('CO') + ' and ' + m('BO') + ' with ' + m('DO') + ' — then the diagonals bisect each other.'],
      [m('Prove that if the opposite angles of a quadrilateral are equal, it is a parallelogram.'), m('2∠A + 2∠B = 360°') + ', so ' + m('∠A + ∠B = 180°') + ' — co-interior angles make the sides parallel.'],
      [m('Give a quadrilateral with AB = CD, AD = BC that is not a parallelogram, or explain why none exists.'), 'None exists — Test 2 proves every such quadrilateral is a parallelogram (for a simple, non-crossed quadrilateral).'],
      [m('E is the midpoint of AB and F of DC in parallelogram ABCD. Prove AEFD is a parallelogram.'), m('AE = ' + f('1', '2') + 'AB = ' + f('1', '2') + 'DC = DF') + ' and ' + m('AE ∥ DF') + ' — Test 1.'],
      [m('In parallelogram ABCD, points E and F lie on the diagonal AC with AE = FC. Prove BEDF is a parallelogram.'), 'The diagonals ' + m('BD') + ' and ' + m('EF') + ' share the midpoint ' + m('O') + ' of ' + m('AC') + ', so they bisect each other — Test 3.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Тема 3, pp. 11–13. Name the test you used in each proof.',
  homework: [
    m('AB = 9, CD = 9 and AB ∥ CD. Prove ABCD is a parallelogram and name the test.'),
    m('AO = 4, OC = 4, BO = 7, OD = 7. Prove ABCD is a parallelogram.'),
    m('Give an example of a quadrilateral with equal diagonals that is not a parallelogram.'),
    m('In △ABC, M is the midpoint of AC and BM is extended to D with BM = MD. Prove ABCD is a parallelogram.'),
    'Write the three tests in your own words, each with a small labelled sketch.'
  ]
});

/* ============================== 5 ============================== */
G8_GEO.push({
  id: 'geo-05', stream: 'geo', grade: 8, quarter: 1, lessons: '7', hours: 1,
  title: 'Rectangle and its properties',
  subtitle: 'A parallelogram with one right angle — which turns out to force all four, and makes the diagonals equal.',
  uz: 'Geometry 8, Тема 4', uzPage: 'Тема 4, pp. 14–15',
  cam: 'Stage 9 · beyond', camPage: 'Extension beyond Stage 9', wb: '—',
  objectives: [
    'Define a rectangle and show that one right angle forces four.',
    'Prove that the diagonals of a rectangle are equal.',
    'Use the fact that the diagonals bisect each other and are equal.',
    'Apply Pythagoras to find a diagonal from the sides.'
  ],
  timing: [[4, 'Warm-up'], [12, 'Explanation'], [8, 'Interactive'], [14, 'Practice'], [2, 'Homework']],
  terms: [
    ['Rectangle', 'To‘g‘ri to‘rtburchak', 'Прямоугольник'],
    ['Right angle', 'To‘g‘ri burchak', 'Прямой угол'],
    ['Equal diagonals', 'Teng diagonallar', 'Равные диагонали'],
    ['Area', 'Yuza', 'Площадь'],
    ['Pythagoras’ theorem', 'Pifagor teoremasi', 'Теорема Пифагора'],
    ['Hypotenuse', 'Gipotenuza', 'Гипотенуза'],
    ['Circumscribed circle', 'Tashqi chizilgan aylana', 'Описанная окружность'],
  ],
  sections: [
    {
      h: 'Definition',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      A <b>rectangle</b> is a parallelogram with a right angle.</div>
      <p>One right angle is enough. Neighbouring angles of a parallelogram are supplementary, so if
      ${m('∠A = 90°')} then ${m('∠B = 90°')}, and opposite angles give ${m('∠C = ∠D = 90°')}.</p>
      <p>Because a rectangle <em>is</em> a parallelogram, it inherits everything from Тема 2: opposite
      sides equal, opposite angles equal, diagonals bisecting each other. Only the new property has to
      be proved.</p>`
    },
    {
      h: 'The new property — equal diagonals',
      html: `<div class="keybox"><div class="klabel">Theorem</div>
      The diagonals of a rectangle are equal: ${m('AC = BD')}.</div>
      {{fig:rectangle:Four right angles, and two diagonals of exactly the same length crossing at the centre.}}
      <p><b>Proof.</b> Compare ${m('△ABC')} and ${m('△BAD')}:</p>
      <ul>
        <li>${m('AB')} is common;</li>
        <li>${m('BC = AD')} — opposite sides of a parallelogram;</li>
        <li>${m('∠ABC = ∠BAD = 90°')}.</li>
      </ul>
      <p>So ${m('△ABC ≅ △BAD')} by SAS, and therefore ${m('AC = BD')}. ∎</p>
      <div class="keybox"><div class="klabel">Consequence</div>
      The diagonals bisect each other <b>and</b> are equal, so all four half-diagonals are equal:
      ${m('AO = BO = CO = DO')}. The point ${m('O')} is the same distance from all four vertices — it is
      the centre of the circle through them.</div>`
    },
    {
      h: 'The test',
      html: `<div class="keybox"><div class="klabel">Test</div>
      A parallelogram whose diagonals are equal is a rectangle.</div>
      <p>Note carefully: <em>a parallelogram</em> whose diagonals are equal. Without that word the
      statement is false — an isosceles trapezium also has equal diagonals.</p>`
    },
    {
      h: 'The diagonal from the sides',
      html: `<p>A diagonal cuts the rectangle into two right-angled triangles, so Pythagoras applies:</p>
      ${eq(m('d = ' + sr('a<sup>2</sup> + b<sup>2</sup>')), true)}
      <p>A ${m('6 × 8')} rectangle has diagonal ${m(sr('36 + 64') + ' = ' + sr('100') + ' = 10')}.</p>
      <p>And the other two familiar formulae: perimeter ${m('P = 2(a + b)')}, area ${m('S = ab')}.</p>`
    }
  ],
  examples: [
    {
      q: 'A rectangle has sides 9 cm and 12 cm. Find its diagonal, perimeter and area.',
      steps: [
        [m('d = ' + sr('9<sup>2</sup> + 12<sup>2</sup>') + ' = ' + sr('81 + 144') + ' = ' + sr('225')), 'Pythagoras on half the rectangle.'],
        [m('d = 15 cm'), ''],
        [m('P = 2(9 + 12) = 42 cm'), ''],
        [m('S = 9 · 12 = 108 cm<sup>2</sup>'), '']
      ],
      ans: m('d = 15 cm, P = 42 cm, S = 108 cm²')
    },
    {
      q: m('In rectangle ABCD the diagonals meet at O and ∠AOB = 60°. Find ∠ACB.'),
      steps: [
        [m('AO = BO'), 'Half-diagonals of a rectangle are all equal.'],
        [m('△AOB') + ' is isosceles with apex ' + m('60°') + ', so it is equilateral.', 'All three angles are ' + m('60°') + '.'],
        [m('∠OAB = 60°'), 'That is ' + m('∠CAB') + '.'],
        [m('∠ACB = 90° − 60° = 30°'), 'The acute angles of right triangle ' + m('ABC') + ' add to ' + m('90°') + '.']
      ],
      ans: m('∠ACB = 30°')
    },
    {
      q: 'The diagonal of a rectangle is 13 cm and one side is 5 cm. Find the area.',
      steps: [
        [m('b = ' + sr('13<sup>2</sup> − 5<sup>2</sup>') + ' = ' + sr('169 − 25') + ' = ' + sr('144')), 'Pythagoras, rearranged.'],
        [m('b = 12 cm'), ''],
        [m('S = 5 · 12 = 60 cm<sup>2</sup>'), '']
      ],
      ans: m('60 cm²')
    }
  ],
  modelNote: 'Drag until ∠A reads 90° and watch AC and BD become equal — then drag away and watch them separate again.',
  interactive: {
    type: 'quadExplorer', mode: 'parallelogram',
    title: 'When do the diagonals become equal?',
    read: ['∠A', 'AC', 'BD', 'AO', 'OC', 'AB', 'AD']
  },
  quiz: [
    { q: 'A rectangle is defined as:', a: ['a quadrilateral with a right angle', 'a parallelogram with a right angle', 'a parallelogram with equal sides', 'a quadrilateral with equal diagonals'], c: 1, why: 'The parallelogram part is essential — it carries all the inherited properties.' },
    { q: 'In a rectangle the diagonals are:', a: ['perpendicular', 'equal and bisect each other', 'equal but do not bisect', 'angle bisectors'], c: 1, why: 'Equal comes from the rectangle; bisecting is inherited from the parallelogram.' },
    { q: 'A rectangle has sides 8 and 15. Its diagonal is:', a: [m('17'), m('23'), m('√23'), m('120')], c: 0, why: '√(64 + 225) = √289 = 17.' },
    { q: 'A quadrilateral with equal diagonals must be a rectangle:', a: ['true', 'false — it could be an isosceles trapezium', 'true only if it is convex', 'true only if the sides are equal'], c: 1, why: 'The diagonals must also bisect each other, i.e. it must already be a parallelogram.' }
  ],
  practice: {
    easy: [
      [m('A rectangle has sides 3 cm and 4 cm. Find its diagonal.'), m('5 cm')],
      [m('Sides 6 cm and 8 cm. Find the diagonal.'), m('10 cm')],
      [m('Sides 5 cm and 7 cm. Find the perimeter.'), m('24 cm')],
      [m('Sides 5 cm and 7 cm. Find the area.'), m('35 cm²')],
      [m('AC = 10 cm in rectangle ABCD. Find BD.'), m('10 cm')],
      [m('AC = 10 cm and the diagonals meet at O. Find BO.'), m('5 cm')],
      [m('One angle of a rectangle is 90°. Find the other three.'), m('90°') + ' each']
    ],
    med: [
      [m('Sides 9 cm and 12 cm. Find the diagonal, perimeter and area.'), m('15 cm, 42 cm, 108 cm²')],
      [m('The diagonal is 13 cm and one side is 5 cm. Find the area.'), m('60 cm²')],
      [m('The perimeter is 34 cm and one side is 5 cm. Find the diagonal.'), 'other side ' + m('12 cm') + ', diagonal ' + m('13 cm')],
      [m('The diagonals meet at O and ∠AOB = 60°. Find ∠ACB.'), m('30°')],
      [m('The area is 48 cm² and one side is 6 cm. Find the perimeter.'), m('28 cm')],
      [m('The diagonals of a rectangle are 20 cm. Find the distance from O to each vertex.'), m('10 cm')],
      [m('A rectangle has a diagonal of 25 cm and a side of 20 cm. Find the perimeter.'), 'other side ' + m('15 cm') + ', ' + m('P = 70 cm')]
    ],
    hard: [
      [m('The diagonals meet at O and ∠AOD = 120°. Find the acute angle between a diagonal and the longer side.'), m('∠AOB = 60°') + ', so ' + m('△AOB') + ' is equilateral and the angle is ' + m('60°') + '.'],
      [m('A rectangle has perimeter 46 cm and diagonal 17 cm. Find its sides.'), m('a + b = 23') + ', ' + m('a<sup>2</sup> + b<sup>2</sup> = 289') + ' ⟹ ' + m('ab = 120') + ' ⟹ sides ' + m('8 cm') + ' and ' + m('15 cm')],
      [m('Prove that a parallelogram with equal diagonals is a rectangle.'), 'The diagonals bisect each other, so ' + m('△ABC ≅ △BAD') + ' by SSS; then ' + m('∠A = ∠B') + ' and they are supplementary, so each is ' + m('90°') + '.'],
      [m('In rectangle ABCD the bisector of ∠A meets BC at K, with BK = 4 cm and KC = 6 cm. Find the perimeter.'), m('△ABK') + ' is an isosceles right triangle, so ' + m('AB = BK = 4') + ' and ' + m('BC = 10') + ': ' + m('P = 28 cm') + '.'],
      [m('A rectangle is inscribed in a circle of radius 6.5 cm and one side is 5 cm. Find the other side.'), 'The diagonal is the diameter, ' + m('13 cm') + '; the other side is ' + m('12 cm') + '.'],
      [m('Show that the point where the diagonals of a rectangle meet is equidistant from all four vertices.'), 'The diagonals bisect each other and are equal, so ' + m('AO = BO = CO = DO = ' + f('d', '2')) + '.'],
      [m('A rectangle has area 120 cm² and diagonal 17 cm. Find its sides.'), m('ab = 120') + ' and ' + m('a<sup>2</sup> + b<sup>2</sup> = 289') + ', so ' + m('(a + b)<sup>2</sup> = 529') + ' and ' + m('a + b = 23') + ': the sides are ' + m('8 cm') + ' and ' + m('15 cm') + '.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Тема 4, pp. 14–15.',
  homework: [
    m('A rectangle has sides 7 cm and 24 cm. Find the diagonal, perimeter and area.'),
    m('The diagonal is 20 cm and one side is 16 cm. Find the other side and the area.'),
    m('The diagonals of rectangle ABCD meet at O and ∠BOC = 120°. Find ∠OBC.'),
    m('The perimeter of a rectangle is 40 cm and one side is 4 cm longer than the other. Find the diagonal.'),
    m('Prove that the diagonals of a rectangle are equal, stating the congruence test you use.')
  ]
});

/* ============================== 6 ============================== */
G8_GEO.push({
  id: 'geo-06', stream: 'geo', grade: 8, quarter: 1, lessons: '8–9', hours: 2,
  title: 'Rhombus and square',
  subtitle: 'A parallelogram with equal sides, and the shape that is a rectangle and a rhombus at the same time.',
  uz: 'Geometry 8, Темы 5–6', uzPage: 'Темы 5–6, pp. 16–18',
  cam: 'Stage 9 · beyond', camPage: 'Extension beyond Stage 9', wb: '—',
  objectives: [
    'Define a rhombus and prove that its diagonals are perpendicular and bisect its angles.',
    'Define a square and list the properties it inherits from both parents.',
    'Use the area formula ' + m('S = ' + f('1', '2') + 'd₁d₂') + ' for a rhombus.',
    'Place every quadrilateral of Chapter I correctly in the family tree.'
  ],
  timing: [[5, 'Warm-up'], [13, 'Explanation'], [8, 'Interactive'], [12, 'Practice'], [2, 'Homework']],
  terms: [
    ['Rhombus', 'Romb', 'Ромб'],
    ['Square', 'Kvadrat', 'Квадрат'],
    ['Perpendicular', 'Perpendikulyar', 'Перпендикулярный'],
    ['Bisects the angle', 'Burchakni teng ikkiga bo‘ladi', 'Делит угол пополам'],
    ['Half-diagonal', 'Diagonalning yarmi', 'Половина диагонали'],
    ['Equal sides', 'Teng tomonlar', 'Равные стороны'],
    ['Classification', 'Tasnif', 'Классификация'],
  ],
  sections: [
    {
      h: 'The rhombus',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      A <b>rhombus</b> is a parallelogram all of whose sides are equal.</div>
      {{fig:rhombus:All four sides equal. The diagonals meet at right angles and each one bisects the two angles it passes through.}}
      <p>It inherits everything a parallelogram has, and gains two properties of its own.</p>
      <div class="keybox"><div class="klabel">Theorem</div>
      The diagonals of a rhombus are <b>perpendicular</b>, and each diagonal <b>bisects</b> the two
      angles through which it passes.</div>
      <p><b>Proof.</b> ${m('△ABC')} has ${m('AB = BC')}, so it is isosceles. The diagonal ${m('BD')}
      passes through ${m('O')}, the midpoint of ${m('AC')} (parallelogram property), so ${m('BO')} is
      the median of this isosceles triangle from its apex — and therefore also its height and its angle
      bisector. That gives ${m('BD ⊥ AC')} and ${m('∠ABD = ∠DBC')} at once. ∎</p>`
    },
    {
      h: 'The area of a rhombus',
      html: `<p>The perpendicular diagonals cut the rhombus into four congruent right triangles with
      legs ${m(f('d₁', '2'))} and ${m(f('d₂', '2'))}. Adding their areas:</p>
      ${eq(m('S = 4 · ' + f('1', '2') + ' · ' + f('d₁', '2') + ' · ' + f('d₂', '2') + ' = ' + f('1', '2') + ' d₁ d₂'), true)}
      <p>And Pythagoras in one of those triangles relates the side to the diagonals:</p>
      ${eq(m('a<sup>2</sup> = (' + f('d₁', '2') + ')<sup>2</sup> + (' + f('d₂', '2') + ')<sup>2</sup>'))}`
    },
    {
      h: 'The square',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      A <b>square</b> is a rectangle all of whose sides are equal — equivalently, a rhombus with a
      right angle.</div>
      {{fig:square:A square has every property of a rectangle and every property of a rhombus at once.}}
      <p>So a square has <b>all</b> of the following:</p>
      <ul>
        <li>four equal sides and four right angles;</li>
        <li>diagonals that bisect each other (parallelogram);</li>
        <li>diagonals that are <b>equal</b> (rectangle);</li>
        <li>diagonals that are <b>perpendicular</b> and bisect the angles into ${m('45°')} halves (rhombus).</li>
      </ul>
      ${eq(m('d = a' + sr('2')) + ' &nbsp;&nbsp;·&nbsp;&nbsp; ' + m('S = a<sup>2</sup> = ' + f('d<sup>2</sup>', '2')), true)}`
    },
    {
      h: 'The family tree',
      html: `{{fig:quadFamily:Each arrow means “is a special case of”. The square sits at the bottom because it inherits from both the rectangle and the rhombus.}}
      <p>Read it downwards and every statement is true: a square <em>is</em> a rectangle, a rectangle
      <em>is</em> a parallelogram, a parallelogram <em>is</em> a quadrilateral. Read it upwards and
      almost every statement is false — that asymmetry is the point of the diagram.</p>`
    }
  ],
  examples: [
    {
      q: 'The diagonals of a rhombus are 12 cm and 16 cm. Find its side, perimeter and area.',
      steps: [
        [m('half-diagonals: 6 cm and 8 cm'), 'The diagonals bisect each other.'],
        [m('a = ' + sr('6<sup>2</sup> + 8<sup>2</sup>') + ' = ' + sr('100') + ' = 10 cm'), 'Pythagoras in one of the four right triangles.'],
        [m('P = 4 · 10 = 40 cm'), 'All four sides are equal.'],
        [m('S = ' + f('1', '2') + ' · 12 · 16 = 96 cm<sup>2</sup>'), 'Half the product of the diagonals.']
      ],
      ans: m('a = 10 cm, P = 40 cm, S = 96 cm²')
    },
    {
      q: m('In rhombus ABCD, ∠A = 60°. Find ∠ABD and prove that the shorter diagonal equals the side.'),
      steps: [
        [m('∠B = 180° − 60° = 120°'), 'Neighbouring angles of a parallelogram.'],
        [m('∠ABD = ' + f('120°', '2') + ' = 60°'), 'The diagonal bisects the angle.'],
        [m('△ABD') + ' has ' + m('∠A = 60°') + ' and ' + m('∠ABD = 60°'), 'so the third angle is ' + m('60°') + ' too.'],
        [m('△ABD') + ' is equilateral, so ' + m('BD = AB'), 'The shorter diagonal equals the side.']
      ],
      ans: m('∠ABD = 60°') + '; ' + m('BD = AB')
    },
    {
      q: 'A square has diagonal 8 cm. Find its side and area.',
      steps: [
        [m('d = a' + sr('2')), 'The diagonal of a square.'],
        [m('a = ' + f('8', sr('2')) + ' = 4' + sr('2') + ' cm'), 'Rationalise the denominator.'],
        [m('S = ' + f('d<sup>2</sup>', '2') + ' = ' + f('64', '2') + ' = 32 cm<sup>2</sup>'), 'Quicker than squaring the side.']
      ],
      ans: m('a = 4' + sr('2') + ' cm ≈ 5.66 cm') + ', ' + m('S = 32 cm²')
    }
  ],
  modelNote: 'Switch the model to rhombus mode: all four sides stay equal however you drag, and AC ⊥ BD holds throughout.',
  interactive: {
    type: 'quadExplorer', mode: 'rhombus',
    title: 'Drag the rhombus',
    read: ['AB', 'BC', 'DC', 'AD', 'AC', 'BD', 'AO', 'OC']
  },
  quiz: [
    { q: 'The diagonals of a rhombus are:', a: ['equal', 'perpendicular', 'equal and perpendicular', 'neither'], c: 1, why: 'Perpendicular always; equal only when the rhombus is a square.' },
    { q: 'A rhombus with diagonals 6 and 8 has area:', a: [m('48'), m('24'), m('14'), m('10')], c: 1, why: 'S = ½ · 6 · 8 = 24.' },
    { q: 'A square is:', a: ['a rectangle only', 'a rhombus only', 'both a rectangle and a rhombus', 'neither'], c: 2, why: 'It has four right angles and four equal sides.' },
    { q: 'The diagonal of a square of side 5 is:', a: [m('10'), m('5' + sr('2')), m(sr('5')), m('25')], c: 1, why: 'd = a√2 by Pythagoras.' }
  ],
  practice: {
    easy: [
      [m('A rhombus has side 7 cm. Find its perimeter.'), m('28 cm')],
      [m('The diagonals of a rhombus are 6 cm and 8 cm. Find its area.'), m('24 cm²')],
      [m('In a rhombus AC = 10 cm. Find AO.'), m('5 cm')],
      [m('One angle of a rhombus is 70°. Find the neighbouring angle.'), m('110°')],
      [m('A square has side 6 cm. Find its perimeter and area.'), m('24 cm, 36 cm²')],
      [m('A square has side 5 cm. Find its diagonal.'), m('5' + sr('2') + ' cm')],
      [m('What is the angle between the diagonals of a rhombus?'), m('90°')]
    ],
    med: [
      [m('The diagonals of a rhombus are 12 cm and 16 cm. Find its side and perimeter.'), m('10 cm, 40 cm')],
      [m('A rhombus has side 13 cm and one diagonal 10 cm. Find the other diagonal.'), m('24 cm')],
      [m('In rhombus ABCD, ∠A = 60°. Find ∠ABD.'), m('60°')],
      [m('A square has diagonal 8 cm. Find its side and area.'), m('4' + sr('2') + ' cm') + ', ' + m('32 cm²')],
      [m('A rhombus has perimeter 40 cm and one diagonal 12 cm. Find the other.'), m('16 cm')],
      [m('The area of a rhombus is 60 cm² and one diagonal is 10 cm. Find the other.'), m('12 cm')],
      [m('A square has area 49 cm². Find its diagonal.'), m('7' + sr('2') + ' cm')]
    ],
    hard: [
      [m('In rhombus ABCD, ∠A = 60°. Prove that the shorter diagonal equals the side.'), m('△ABD') + ' has three ' + m('60°') + ' angles, so it is equilateral and ' + m('BD = AB') + '.'],
      [m('A rhombus has side 10 cm and height 8 cm. Find its area, then its diagonals if one is 16 cm.'), m('S = 10 · 8 = 80') + '; then ' + m(f('1', '2') + ' · 16 · d₂ = 80') + ' gives ' + m('d₂ = 10 cm') + '.'],
      [m('Prove that a parallelogram whose diagonals are perpendicular is a rhombus.'), 'The diagonals bisect each other, so each half-diagonal pair gives congruent right triangles by SAS; all four sides come out equal.'],
      [m('The diagonals of a square are 14 cm. Find its side, perimeter and area.'), m('a = 7' + sr('2')) + ', ' + m('P = 28' + sr('2') + ' cm') + ', ' + m('S = 98 cm²')],
      [m('A rhombus has one angle of 120° and side 6 cm. Find both diagonals.'), 'Shorter ' + m('= 6 cm') + ' (equilateral half), longer ' + m('= 6' + sr('3') + ' cm')],
      [m('Prove that the midpoints of the sides of a rectangle form a rhombus.'), 'Each side of the new quadrilateral is a midline equal to half a diagonal, and the diagonals of a rectangle are equal — so all four sides are equal.'],
      [m('A square and a rhombus both have side 8 cm. Compare their perimeters, and explain why their areas can differ.'), 'Both perimeters are ' + m('32 cm') + '. The rhombus can be flattened, which reduces its height and so its area; the square is the tallest case.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Geometry 8, Темы 5–6, pp. 16–18.',
  homework: [
    m('The diagonals of a rhombus are 10 cm and 24 cm. Find its side, perimeter and area.'),
    m('A rhombus has side 17 cm and one diagonal 16 cm. Find the other diagonal.'),
    m('In rhombus ABCD, ∠B = 120°. Find ∠BAC.'),
    m('A square has perimeter 32 cm. Find its diagonal and area.'),
    m('A square has diagonal 10 cm. Find its area.'),
    m('Draw the quadrilateral family tree from memory and mark where the rhombus and the square sit.')
  ]
});

/* ============================== 7 ============================== */
G8_GEO.push({
  id: 'geo-07', stream: 'geo', grade: 8, quarter: 1, lessons: '10–11', hours: 2,
  title: 'Trapezium and the isosceles trapezium',
  subtitle: 'Exactly one pair of parallel sides — and what happens when the two legs are made equal.',
  uz: 'Geometry 8, Темы 7–8', uzPage: 'Темы 7–8, pp. 19–22',
  cam: 'Stage 9 · beyond', camPage: 'Extension beyond Stage 9', wb: '—',
  objectives: [
    'Name the parts of a trapezium: bases, legs, height.',
    'Use the fact that the angles on each leg are supplementary.',
    'Prove and use the properties of an isosceles trapezium.',
    'Recognise a right-angled trapezium and solve problems using its height.'
  ],
  timing: [[5, 'Warm-up'], [13, 'Explanation'], [8, 'Interactive'], [12, 'Practice'], [2, 'Homework']],
  terms: [
    ['Trapezium', 'Trapetsiya', 'Трапеция'],
    ['Base of a trapezium', 'Trapetsiya asosi', 'Основание трапеции'],
    ['Leg (lateral side)', 'Yon tomon', 'Боковая сторона'],
    ['Height', 'Balandlik', 'Высота'],
    ['Isosceles trapezium', 'Teng yonli trapetsiya', 'Равнобедренная трапеция'],
    ['Right-angled trapezium', 'To‘g‘ri burchakli trapetsiya', 'Прямоугольная трапеция'],
    ['Midline', 'O‘rta chiziq', 'Средняя линия'],
    ['Half-sum', 'Yarim yig‘indi', 'Полусумма'],
  ],
  sections: [
    {
      h: 'Definition and parts',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      A <b>trapezium</b> is a quadrilateral with exactly one pair of parallel sides.</div>
      {{fig:trapezium:The parallel sides a and b are the bases; the other two are the legs; h is the distance between the bases.}}
      <ul>
        <li>The parallel sides are the <b>bases</b> — the longer one ${m('a')}, the shorter ${m('b')}.</li>
        <li>The other two sides are the <b>legs</b>.</li>
        <li>The <b>height</b> ${m('h')} is the distance between the two bases, measured perpendicular to them.</li>
      </ul>
      <div class="keybox"><div class="klabel">Angles on a leg</div>
      The two angles at the ends of a leg are co-interior angles between the parallel bases, so
      ${eq(m('∠A + ∠B = 180°') + ' &nbsp;&nbsp;and&nbsp;&nbsp; ' + m('∠C + ∠D = 180°'))}</div>
      <p>A trapezium with a right angle has two of them (a <b>right-angled trapezium</b>), because the
      angle next to it on the same leg must also be ${m('90°')}.</p>`
    },
    {
      h: 'The isosceles trapezium',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      A trapezium whose two legs are equal is <b>isosceles</b>.</div>
      {{fig:isosTrapezium:Equal legs, equal base angles and equal diagonals — the three properties travel together.}}
      <div class="keybox"><div class="klabel">Theorem</div>
      In an isosceles trapezium:
      <ol style="margin:.5em 0 0">
        <li>the angles at each base are equal: ${m('∠A = ∠D')} and ${m('∠B = ∠C')};</li>
        <li>the diagonals are equal: ${m('AC = BD')}.</li>
      </ol></div>
      <p><b>Proof of (1).</b> Drop perpendiculars from ${m('B')} and ${m('C')} onto ${m('AD')}. The two
      right triangles formed have equal hypotenuses (the legs) and equal heights, so they are congruent
      by RHS — giving ${m('∠A = ∠D')}. The other pair follows from the supplementary angles on each leg.</p>
      <p><b>Proof of (2).</b> ${m('△ABD')} and ${m('△DCA')} have ${m('AD')} common, ${m('AB = DC')}, and
      the included angles ${m('∠A = ∠D')} — congruent by SAS, so ${m('BD = AC')}. ∎</p>
      <div class="warn"><span class="wl">Equal diagonals are not enough on their own</span>
      A rectangle also has equal diagonals. The statement “a trapezium with equal diagonals is
      isosceles” is true, but the word <em>trapezium</em> is doing real work.</div>`
    },
    {
      h: 'The midline (a first look)',
      html: `<p>The segment joining the midpoints of the two legs is the <b>midline</b>. It is parallel
      to the bases and its length is their average:</p>
      ${eq(m('MN = ' + f('a + b', '2')), true)}
      {{fig:midlineTrapezium:The midline joins the midpoints of the legs and measures exactly the average of the two bases.}}
      <p>The full proof comes in the next lesson but two; for now, use the formula and check it against
      the interactive model.</p>`
    },
    {
      h: 'Working with the height',
      html: `<p>Almost every numerical trapezium problem is solved by dropping one or two perpendiculars
      from the shorter base to the longer one. That cuts the trapezium into a rectangle and one or two
      right triangles, and then Pythagoras does the rest.</p>
      <p>For an <b>isosceles</b> trapezium the two triangles are congruent, so each cuts off
      ${m(f('a − b', '2'))} from the longer base — a formula worth remembering.</p>
      ${eq(m('S = ' + f('a + b', '2') + ' · h = MN · h'), true)}`
    }
  ],
  examples: [
    {
      q: m('In trapezium ABCD with AD ∥ BC, ∠A = 65°. Find ∠B.'),
      steps: [
        [m('AB') + ' is a leg joining the two parallel bases.', ''],
        [m('∠A + ∠B = 180°'), 'Co-interior angles.'],
        [m('∠B = 115°'), '']
      ],
      ans: m('∠B = 115°')
    },
    {
      q: 'An isosceles trapezium has bases 10 cm and 4 cm and legs 5 cm. Find its height and area.',
      steps: [
        [m(f('a − b', '2') + ' = ' + f('10 − 4', '2') + ' = 3 cm'), 'Each right triangle cuts off 3 cm.'],
        [m('h = ' + sr('5<sup>2</sup> − 3<sup>2</sup>') + ' = ' + sr('16') + ' = 4 cm'), 'Pythagoras in one triangle.'],
        [m('MN = ' + f('10 + 4', '2') + ' = 7 cm'), 'The midline.'],
        [m('S = 7 · 4 = 28 cm<sup>2</sup>'), '']
      ],
      ans: m('h = 4 cm, S = 28 cm²')
    },
    {
      q: 'The midline of a trapezium is 9 cm and one base is 5 cm. Find the other base.',
      steps: [
        [m(f('a + b', '2') + ' = 9'), 'The midline formula.'],
        [m('a + b = 18'), ''],
        [m('a = 18 − 5 = 13 cm'), '']
      ],
      ans: m('13 cm')
    }
  ],
  modelNote: 'Drag the corners and read the three numbers: the midline always sits exactly between the two bases.',
  interactive: { type: 'trapeziumMidline' },
  quiz: [
    { q: 'A trapezium has:', a: ['both pairs of sides parallel', 'exactly one pair of parallel sides', 'four equal sides', 'perpendicular diagonals'], c: 1, why: 'Two pairs would make it a parallelogram.' },
    { q: 'In trapezium ABCD with AD ∥ BC, ' + m('∠A = 72°') + '. Then ' + m('∠B') + ' is:', a: [m('72°'), m('108°'), m('18°'), 'not determined'], c: 1, why: 'The angles on a leg are co-interior, so they add to 180°.' },
    { q: 'The diagonals of an isosceles trapezium are:', a: ['perpendicular', 'equal', 'bisecting each other', 'angle bisectors'], c: 1, why: 'Equal — proved by SAS on the two triangles over the longer base.' },
    { q: 'The midline of a trapezium with bases 6 and 10 is:', a: [m('4'), m('8'), m('16'), m('60')], c: 1, why: 'It is the average: (6 + 10)/2 = 8.' }
  ],
  practice: {
    easy: [
      [m('In trapezium ABCD with AD ∥ BC, ∠A = 65°. Find ∠B.'), m('115°')],
      [m('∠C = 105°. Find ∠D.'), m('75°')],
      [m('The bases are 8 cm and 12 cm. Find the midline.'), m('10 cm')],
      [m('The bases are 5 cm and 9 cm and the height is 4 cm. Find the area.'), m('28 cm²')],
      [m('An isosceles trapezium has ∠A = 70°. Find ∠D.'), m('70°')],
      [m('An isosceles trapezium has AC = 13 cm. Find BD.'), m('13 cm')],
      [m('A right-angled trapezium has one angle of 90°. How many right angles does it have?'), m('2')]
    ],
    med: [
      [m('An isosceles trapezium has bases 10 cm and 4 cm and legs 5 cm. Find the height.'), m('4 cm')],
      [m('The same trapezium: find its area.'), m('28 cm²')],
      [m('The midline is 9 cm and one base is 5 cm. Find the other base.'), m('13 cm')],
      [m('An isosceles trapezium has ∠A = 60°, bases 12 cm and 6 cm. Find the leg.'), m(f('12 − 6', '2') + ' = 3') + ', so the leg is ' + m('6 cm')],
      [m('The area is 48 cm² and the height is 6 cm. Find the midline.'), m('8 cm')],
      [m('An isosceles trapezium has perimeter 34 cm, bases 6 cm and 14 cm. Find each leg.'), m('7 cm')],
      [m('In a right-angled trapezium the bases are 9 cm and 5 cm and the slant leg is 5 cm. Find the height.'), m('h = ' + sr('5<sup>2</sup> − 4<sup>2</sup>') + ' = 3 cm')]
    ],
    hard: [
      [m('Prove that a trapezium with equal base angles is isosceles.'), 'Drop the two heights: the right triangles are congruent by ASA, so the legs are equal.'],
      [m('An isosceles trapezium has diagonals that are perpendicular, bases 6 cm and 10 cm. Find its height and area.'), 'Perpendicular diagonals give ' + m('h = ' + f('a + b', '2') + ' = 8 cm') + ' and ' + m('S = 8 · 8 = 64 cm²') + '.'],
      [m('In trapezium ABCD, AD ∥ BC, BC = 6 cm, and the diagonal AC bisects ∠A. Prove that AB = BC and find AB.'), m('∠CAD = ∠ACB') + ' (alternate angles) and ' + m('∠CAD = ∠CAB') + ' (bisector), so ' + m('∠CAB = ∠ACB') + ' and ' + m('△ABC') + ' is isosceles: ' + m('AB = BC = 6 cm') + '.'],
      [m('An isosceles trapezium has bases 9 cm and 21 cm and legs 10 cm. Find its height and area.'), m(f('21 − 9', '2') + ' = 6') + ', so ' + m('h = 8 cm') + ' and ' + m('S = 120 cm²') + '.'],
      [m('Prove that the diagonals of an isosceles trapezium are equal.'), m('△ABD ≅ △DCA') + ' by SAS: ' + m('AD') + ' common, ' + m('AB = DC') + ', ' + m('∠A = ∠D') + '.'],
      [m('An isosceles trapezium has perimeter 48 cm, bases 10 cm and 18 cm. Find each leg and the height.'), 'legs ' + m('10 cm') + '; ' + m(f('18 − 10', '2') + ' = 4') + ', so ' + m('h = ' + sr('100 − 16') + ' = 2' + sr('21') + ' ≈ 9.2 cm') + '.'],
      [m('Show that the height of an isosceles trapezium with bases a, b and leg c is ' + sr('c<sup>2</sup> − (' + fs('a − b', '2') + ')<sup>2</sup>')), 'Each right triangle has hypotenuse ' + m('c') + ' and horizontal leg ' + m(f('a − b', '2')) + '; Pythagoras gives the height.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Geometry 8, Темы 7–8, pp. 19–22. Draw the height on every figure.',
  homework: [
    m('In trapezium ABCD with AD ∥ BC, ∠B = 128°. Find ∠A.'),
    m('The bases are 7 cm and 13 cm. Find the midline.'),
    m('An isosceles trapezium has bases 16 cm and 6 cm and legs 13 cm. Find its height and area.'),
    m('The midline is 11 cm and one base is 8 cm. Find the other.'),
    m('An isosceles trapezium has perimeter 44 cm and bases 8 cm and 16 cm. Find each leg.'),
    m('Prove that the base angles of an isosceles trapezium are equal.')
  ]
});

/* ============================== 8 ============================== */
G8_GEO.push({
  id: 'geo-08', stream: 'geo', grade: 8, quarter: 1, lessons: '12', hours: 1,
  title: 'Thales’ theorem',
  subtitle: 'Parallel lines cutting equal pieces from one transversal cut equal pieces from every other transversal.',
  uz: 'Geometry 8, Тема 9', uzPage: 'Тема 9, pp. 23–25',
  cam: 'Stage 9 · 13.2, 13.4', camPage: 'Learner’s Book pp. 278–299', wb: 'Workbook 13.2',
  objectives: [
    'State Thales’ theorem precisely.',
    'Use it to divide a segment into a given number of equal parts.',
    'Use the proportional form to find an unknown length.',
    'Recognise when the theorem does <em>not</em> apply.'
  ],
  timing: [[4, 'Warm-up'], [13, 'Explanation'], [8, 'Interactive'], [13, 'Practice'], [2, 'Homework']],
  terms: [
    ['Thales’ theorem', 'Fales teoremasi', 'Теорема Фалеса'],
    ['Transversal', 'Kesuvchi', 'Секущая'],
    ['Equal segments', 'Teng kesmalar', 'Равные отрезки'],
    ['Proportional', 'Proporsional', 'Пропорциональный'],
    ['Ratio', 'Nisbat', 'Отношение'],
    ['Divide a segment', 'Kesmani bo‘lish', 'Разделить отрезок'],
    ['Construction', 'Yasash', 'Построение'],
    ['Ray', 'Nur', 'Луч'],
  ],
  sections: [
    {
      h: 'The theorem',
      html: `<div class="keybox"><div class="klabel">Thales’ theorem</div>
      If parallel lines cut equal segments on one transversal, then they cut equal segments on every
      other transversal.</div>
      {{fig:thales:Three parallel lines cut equal segments on the lower ray, and therefore cut equal segments on the upper ray as well.}}
      <p>In the figure, ${m('OA₁ = A₁A₂ = A₂A₃')} on the lower ray forces
      ${m('OB₁ = B₁B₂ = B₂B₃')} on the upper one — even though the two rays make different angles and
      the segments have different lengths.</p>
      <div class="keybox"><div class="klabel">The proportional form</div>
      More generally, parallel lines cut <b>proportional</b> segments:
      ${eq(m(f('OA₁', 'OA₂') + ' = ' + f('OB₁', 'OB₂')) + ' &nbsp;&nbsp;and&nbsp;&nbsp; ' + m(f('OA₁', 'A₁A₂') + ' = ' + f('OB₁', 'B₁B₂')))}
      This is the form you will use for calculations; the equal-segments version is the special case
      where the ratio is 1.</div>`
    },
    {
      h: 'Why it is true',
      html: `<p>Through ${m('B₁')} draw a line parallel to the lower ray; it cuts the next parallel at a
      point ${m('P')}. Then ${m('OA₁B₁')} and ${m('B₁PB₂')} are triangles with equal corresponding
      angles (alternate and corresponding angles on the parallels) and one equal side
      (${m('A₁A₂ = B₁P')}, opposite sides of a parallelogram). They are congruent by ASA, so
      ${m('OB₁ = B₁B₂')}. Repeating the argument along the ray finishes the proof. ∎</p>`
    },
    {
      h: 'Dividing a segment into equal parts',
      html: `<p>This is the classic construction, and it needs no measurement at all.</p>
      <ol>
        <li>To divide ${m('AB')} into 5 equal parts, draw any ray from ${m('A')}.</li>
        <li>With compasses, step off 5 equal segments along the ray, ending at ${m('P₅')}.</li>
        <li>Join ${m('P₅')} to ${m('B')}.</li>
        <li>Through ${m('P₁, P₂, P₃, P₄')} draw lines parallel to ${m('P₅B')}.</li>
        <li>By Thales’ theorem these lines cut ${m('AB')} into 5 equal parts.</li>
      </ol>
      <div class="keybox"><div class="klabel">Why this matters</div>
      Bisecting a segment is easy with compasses. Cutting it into <b>five</b> equal parts is not — and
      Thales’ theorem does it exactly, with no arithmetic and no ruler markings.</div>`
    },
    {
      h: 'When it does not apply',
      html: `<div class="warn"><span class="wl">The lines must be parallel</span>
      Three lines that merely look evenly spread do not give equal cuts. If the figure does not
      say “parallel” — or you cannot prove it — the theorem is not available.</div>
      <p>And the equal segments must be measured <em>along the transversals</em>, not along the parallel
      lines themselves.</p>`
    }
  ],
  examples: [
    {
      q: m('Parallel lines cut a transversal so that OA₁ = A₁A₂ = A₂A₃ = 4 cm, and on a second transversal OB₁ = 3 cm. Find OB₃.'),
      steps: [
        [m('OB₁ = B₁B₂ = B₂B₃'), 'Thales’ theorem — equal cuts on one transversal give equal cuts on the other.'],
        [m('B₁B₂ = B₂B₃ = 3 cm'), ''],
        [m('OB₃ = 3 · 3 = 9 cm'), '']
      ],
      ans: m('OB₃ = 9 cm')
    },
    {
      q: m('In the proportional form, OA₁ = 6, OA₂ = 15 and OB₁ = 8. Find OB₂.'),
      steps: [
        [m(f('OA₁', 'OA₂') + ' = ' + f('OB₁', 'OB₂')), 'Set up the proportion.'],
        [m(f('6', '15') + ' = ' + f('8', 'OB₂')), 'Substitute.'],
        [m('6 · OB₂ = 15 · 8 = 120'), 'Cross-multiply.'],
        [m('OB₂ = 20'), '']
      ],
      ans: m('OB₂ = 20')
    },
    {
      q: 'Describe how to divide a segment of length 7 cm into 3 equal parts without measuring.',
      steps: [
        ['Draw a ray from one end ' + m('A') + ' at any convenient angle.', 'The angle does not matter.'],
        ['Step off three equal compass widths along the ray: ' + m('P₁, P₂, P₃') + '.', 'Any width will do.'],
        ['Join ' + m('P₃') + ' to the other end ' + m('B') + '.', ''],
        ['Through ' + m('P₁') + ' and ' + m('P₂') + ' draw lines parallel to ' + m('P₃B') + '.', 'They cut AB into three equal parts by Thales.']
      ],
      ans: 'Each part is ' + m(f('7', '3') + ' ≈ 2.33 cm') + ' — obtained exactly, without measuring it.'
    }
  ],
  modelNote: 'Change the angle and the spacing. The ratios in the readout never move.',
  interactive: { type: 'thales' },
  quiz: [
    { q: 'Thales’ theorem requires the cutting lines to be:', a: ['equal in length', 'parallel', 'perpendicular to a transversal', 'equally spaced by eye'], c: 1, why: 'Parallelism is the whole hypothesis of the theorem.' },
    { q: 'If parallels cut 5 cm, 5 cm, 5 cm on one transversal and 3 cm on the first piece of another, the second piece is:', a: [m('3 cm'), m('5 cm'), m('9 cm'), 'not determined'], c: 0, why: 'Equal cuts on one transversal give equal cuts on the other.' },
    { q: m('OA₁ : OA₂ = 2 : 5') + ' and ' + m('OB₁ = 6') + '. Then ' + m('OB₂') + ' is:', a: [m('10'), m('15'), m('12'), m('30')], c: 1, why: '6/OB₂ = 2/5, so OB₂ = 15.' },
    { q: 'Thales’ theorem is most useful for:', a: ['finding areas', 'dividing a segment into n equal parts', 'proving triangles congruent', 'measuring angles'], c: 1, why: 'It is the standard construction for an exact n-part division.' }
  ],
  practice: {
    easy: [
      [m('Parallels cut 3 cm, 3 cm on one transversal and 4 cm on the first piece of another. Find the second piece.'), m('4 cm')],
      [m('OA₁ = A₁A₂ = 5 cm and OB₁ = 7 cm. Find OB₂.'), m('14 cm')],
      [m('Three parallels cut equal pieces of 6 cm on one line. Find the total for four pieces.'), m('24 cm')],
      [m('Does Thales’ theorem apply to three lines that are not parallel?'), 'No.'],
      [m('OA₁ : OA₂ = 1 : 3 and OB₁ = 4. Find OB₂.'), m('12')],
      [m('Equal cuts of 2 cm are made on one transversal. What are the cuts on another?'), 'Equal to one another, though not necessarily 2 cm.'],
      [m('How many parallels are needed to cut a segment into 4 equal parts?'), m('3') + ' (plus the two ends)']
    ],
    med: [
      [m('OA₁ = A₁A₂ = A₂A₃ = 4 cm and OB₁ = 3 cm. Find OB₃.'), m('9 cm')],
      [m('OA₁ = 6, OA₂ = 15, OB₁ = 8. Find OB₂.'), m('20')],
      [m('OA₁ = 4, A₁A₂ = 6, OB₁ = 10. Find B₁B₂.'), m('15')],
      [m('A segment of 12 cm is divided into 4 equal parts by Thales’ construction. Find each part.'), m('3 cm')],
      [m('OA₁ : A₁A₂ = 3 : 4 and B₁B₂ = 12. Find OB₁.'), m('9')],
      [m('Describe how to divide a 7 cm segment into 3 equal parts without measuring.'), 'Ray, three equal compass steps, join the last to B, draw parallels.'],
      [m('Parallels cut OA₁ = 5, A₁A₂ = 5, A₂A₃ = 5 and OB₃ = 21. Find OB₁.'), m('7')]
    ],
    hard: [
      [m('Prove Thales’ theorem for two equal segments using a parallelogram and ASA.'), 'Through ' + m('B₁') + ' draw a parallel to the first ray; the parallelogram gives ' + m('A₁A₂ = B₁P') + ', then ASA gives ' + m('OB₁ = B₁B₂') + '.'],
      [m('Divide a segment in the ratio 2 : 3 using Thales’ construction.'), 'Step off 5 equal parts on a ray, join the 5th to ' + m('B') + ', and draw the parallel through the 2nd point.'],
      [m('OA₁ = x, A₁A₂ = x + 2, OB₁ = 6, B₁B₂ = 9. Find x.'), m(f('x', 'x + 2') + ' = ' + f('6', '9')) + ' ⟹ ' + m('9x = 6x + 12') + ' ⟹ ' + m('x = 4')],
      [m('In △ABC a line parallel to BC cuts AB at M and AC at N, with AM : MB = 2 : 3 and AN = 8. Find NC.'), m(f('AN', 'NC') + ' = ' + f('2', '3')) + ' ⟹ ' + m('NC = 12')],
      [m('A ladder rests against a wall and three equally spaced horizontal rungs meet it. Explain why they cut the wall into equal parts.'), 'The rungs are parallel and cut equal pieces on the ladder, so by Thales’ theorem they cut equal pieces on the wall.'],
      [m('Show that the construction for n equal parts needs no measurement of AB itself.'), 'Only equal compass steps on the auxiliary ray are used; Thales’ theorem transfers the equality to ' + m('AB') + '.'],
      [m('Three parallels cut a transversal into pieces 3 cm and 5 cm, and cut another transversal into pieces p and p + 4. Find p.'), m(f('3', '5') + ' = ' + f('p', 'p + 4')) + ' ⟹ ' + m('5p = 3p + 12') + ' ⟹ ' + m('p = 6')]
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Тема 9, pp. 23–25. Question 5 is a construction — bring it drawn.',
  homework: [
    m('OA₁ = A₁A₂ = A₂A₃ = 3 cm and OB₁ = 5 cm. Find OB₃.'),
    m('OA₁ = 8, OA₂ = 20, OB₁ = 6. Find OB₂.'),
    m('OA₁ : A₁A₂ = 2 : 5 and B₁B₂ = 20. Find OB₁.'),
    m('In △ABC, MN ∥ BC with AM : MB = 3 : 4 and AN = 9. Find NC.'),
    m('Construct the division of a 9 cm segment into 5 equal parts and state the theorem you used.')
  ]
});

/* ============================== 9 ============================== */
G8_GEO.push({
  id: 'geo-09', stream: 'geo', grade: 8, quarter: 1, lessons: '13–14', hours: 2,
  title: 'Applications of Thales’ theorem',
  subtitle: 'The theorem inside a triangle: proportional segments, the line through a midpoint, and the measurements you cannot reach with a tape.',
  uz: 'Geometry 8, Темы 9–10', uzPage: 'Темы 9–10, pp. 23–28',
  cam: 'Stage 9 · 13.4', camPage: 'Learner’s Book pp. 293–299', wb: 'Workbook 13.4',
  objectives: [
    'Apply Thales’ theorem inside a triangle to find unknown lengths.',
    'Prove that a line through the midpoint of one side, parallel to a second, bisects the third.',
    'Divide a segment in a given ratio by construction.',
    'Solve practical measuring problems using proportional segments.'
  ],
  timing: [[5, 'Warm-up'], [12, 'Explanation'], [8, 'Interactive'], [13, 'Practice'], [2, 'Homework']],
  terms: [
    ['Proportion', 'Proporsiya', 'Пропорция'],
    ['Cross-multiply', 'Krest-nakrest ko‘paytirish', 'Умножить крест-накрест'],
    ['Midpoint', 'O‘rta nuqta', 'Середина'],
    ['Scale', 'Masshtab', 'Масштаб'],
    ['Shadow', 'Soya', 'Тень'],
    ['Similar triangles', 'O‘xshash uchburchaklar', 'Подобные треугольники'],
    ['Part to whole', 'Qism-butunga nisbat', 'Отношение части к целому'],
    ['Part to part', 'Qism-qismga nisbat', 'Отношение части к части'],
  ],
  sections: [
    {
      h: 'Thales inside a triangle',
      html: `<div class="keybox"><div class="klabel">The form you will use most</div>
      If a line parallel to ${m('BC')} cuts ${m('AB')} at ${m('M')} and ${m('AC')} at ${m('N')}, then
      ${eq(m(f('AM', 'MB') + ' = ' + f('AN', 'NC')) + ' &nbsp;&nbsp;and&nbsp;&nbsp; ' + m(f('AM', 'AB') + ' = ' + f('AN', 'AC')))}</div>
      {{fig:midlineTriangle:When M and N are the midpoints, the ratio is 1 : 1 — the special case that gives the midline.}}
      <p>Two different ratios, and mixing them up is the commonest error in this topic. Decide first
      whether you are comparing a <b>part with a part</b> (${m('AM : MB')}) or a <b>part with the
      whole</b> (${m('AM : AB')}), and stay with that choice on both sides.</p>`
    },
    {
      h: 'The midpoint corollary',
      html: `<div class="keybox"><div class="klabel">Corollary</div>
      A line drawn through the midpoint of one side of a triangle, parallel to a second side, bisects
      the third side.</div>
      <p><b>Proof.</b> With ${m('AM = MB')} the ratio ${m(f('AM', 'MB'))} is 1, so ${m(f('AN', 'NC'))} is
      also 1 and ${m('AN = NC')}. ∎</p>
      <p>This corollary is what makes the midline theorem of the next lesson possible, so it is worth
      stating separately.</p>`
    },
    {
      h: 'Dividing a segment in a given ratio',
      html: `<p>To divide ${m('AB')} in the ratio ${m('2 : 3')}:</p>
      <ol>
        <li>Draw a ray from ${m('A')} and step off ${m('2 + 3 = 5')} equal segments.</li>
        <li>Join the 5th point to ${m('B')}.</li>
        <li>Through the 2nd point draw a parallel to that line.</li>
        <li>It meets ${m('AB')} at the point dividing it in the ratio ${m('2 : 3')}.</li>
      </ol>
      <p>The same construction, with ${m('n')} equal steps and a parallel through each, divides the
      segment into ${m('n')} equal parts.</p>`
    },
    {
      h: 'Measuring what you cannot reach',
      html: `<p>The practical use of the theorem is measuring across an obstacle — a river, a building, a
      fenced field. Set up two similar configurations sharing an angle, measure the three lengths you
      can reach, and solve the proportion for the fourth.</p>
      <div class="keybox"><div class="klabel">Worked pattern</div>
      A pole ${m('1.5 m')} tall casts a shadow ${m('2 m')} long; at the same moment a tree casts a
      shadow ${m('14 m')} long. The sun's rays are parallel, so
      ${eq(m(f('1.5', '2') + ' = ' + f('h', '14')) + '&nbsp;&nbsp;⟹&nbsp;&nbsp;' + m('h = 10.5 m'))}</div>`
    }
  ],
  examples: [
    {
      q: m('In △ABC, MN ∥ BC with AM = 4, MB = 6 and AN = 6. Find NC.'),
      steps: [
        [m(f('AM', 'MB') + ' = ' + f('AN', 'NC')), 'Part with part on both sides.'],
        [m(f('4', '6') + ' = ' + f('6', 'NC')), 'Substitute.'],
        [m('4 · NC = 36'), 'Cross-multiply.'],
        [m('NC = 9'), '']
      ],
      ans: m('NC = 9')
    },
    {
      q: m('In △ABC, MN ∥ BC with AM = 3, AB = 12 and AC = 20. Find AN.'),
      steps: [
        [m(f('AM', 'AB') + ' = ' + f('AN', 'AC')), 'This time it is part with whole — note AB, not MB.'],
        [m(f('3', '12') + ' = ' + f('AN', '20')), ''],
        [m('12 · AN = 60'), ''],
        [m('AN = 5'), '']
      ],
      ans: m('AN = 5')
    },
    {
      q: 'A 1.8 m man casts a 2.4 m shadow. A tower casts a 40 m shadow at the same time. Find its height.',
      steps: [
        ['The sun’s rays are parallel, so the two right triangles have proportional sides.', 'That is Thales in disguise.'],
        [m(f('1.8', '2.4') + ' = ' + f('h', '40')), 'Height over shadow, on both sides.'],
        [m('2.4h = 72'), ''],
        [m('h = 30 m'), '']
      ],
      ans: m('30 m')
    }
  ],
  modelNote: 'Move the spacing slider so the cuts are unequal, and check that the ratios still match on both rays.',
  interactive: {
    type: 'fractionCancel',
    title: 'Which proportion do I write?',
    hint: 'The commonest error is mixing part-to-part with part-to-whole. Work through each case.',
    items: [
      {
        title: 'AM = 4, MB = 6, AN = 6 — find NC',
        start: 'Given as <b>part and part</b> on the first side.',
        steps: [
          ['The data give ' + m('AM') + ' and ' + m('MB') + ' — two pieces of the same side.', 'So use part-to-part.'],
          [m(f('AM', 'MB') + ' = ' + f('AN', 'NC') + ' ⟹ ' + f('4', '6') + ' = ' + f('6', 'NC')), ''],
          [m('4 · NC = 36, so NC = 9'), '']
        ],
        answer: m('NC = 9')
      },
      {
        title: 'AM = 3, AB = 12, AC = 20 — find AN',
        start: 'Given as <b>part and whole</b> on the first side.',
        steps: [
          [m('AB') + ' is the whole side, not a piece of it.', 'So use part-to-whole.'],
          [m(f('AM', 'AB') + ' = ' + f('AN', 'AC') + ' ⟹ ' + f('3', '12') + ' = ' + f('AN', '20')), ''],
          [m('AN = 5'), 'Using ' + m(f('3', '9')) + ' here — treating 12 as MB — would give 6.67 and be wrong.']
        ],
        answer: m('AN = 5')
      },
      {
        title: 'M is the midpoint of AB and MN ∥ BC',
        start: 'What can you say about ' + m('N') + '?',
        steps: [
          [m('AM = MB') + ', so ' + m(f('AM', 'MB') + ' = 1'), ''],
          ['Therefore ' + m(f('AN', 'NC') + ' = 1'), ''],
          [m('AN = NC') + ' — ' + m('N') + ' is the midpoint of ' + m('AC') + '.', 'This is the midpoint corollary.']
        ],
        answer: m('N') + ' is the midpoint of ' + m('AC') + '.'
      },
      {
        title: 'Shadows — the practical case',
        start: 'A pole ' + m('1.5 m') + ' tall casts a ' + m('2 m') + ' shadow; a tree casts ' + m('14 m') + '.',
        steps: [
          ['The sun’s rays are parallel, so the two triangles are cut by parallels.', ''],
          [m(f('height', 'shadow')) + ' is the same for both.', 'Keep the same quantity on top in both fractions.'],
          [m(f('1.5', '2') + ' = ' + f('h', '14') + ' ⟹ h = 10.5 m'), '']
        ],
        answer: m('10.5 m')
      }
    ]
  },
  quiz: [
    { q: m('MN ∥ BC') + ' with ' + m('AM = 2, MB = 3, AN = 4') + '. Then ' + m('NC') + ' is:', a: [m('6'), m('5'), m('8'), m('2.4')], c: 0, why: '2/3 = 4/NC gives NC = 6.' },
    { q: m('MN ∥ BC') + ' with ' + m('AM = 2, AB = 5, AC = 15') + '. Then ' + m('AN') + ' is:', a: [m('6'), m('7.5'), m('10'), m('3')], c: 0, why: 'Part to whole: 2/5 = AN/15, so AN = 6.' },
    { q: 'A line through the midpoint of AB parallel to BC meets AC at N. Then N is:', a: ['a third of the way along AC', 'the midpoint of AC', 'not determined', 'the same point as C'], c: 1, why: 'A ratio of 1 : 1 on one side forces 1 : 1 on the other.' },
    { q: 'A 2 m pole casts a 3 m shadow. A 24 m shadow belongs to an object of height:', a: [m('16 m'), m('36 m'), m('12 m'), m('48 m')], c: 0, why: '2/3 = h/24, so h = 16 m.' }
  ],
  practice: {
    easy: [
      [m('MN ∥ BC, AM = 2, MB = 3, AN = 4. Find NC.'), m('6')],
      [m('MN ∥ BC, AM = 5, MB = 5, AN = 7. Find NC.'), m('7')],
      [m('MN ∥ BC, AM = 3, AB = 9, AC = 12. Find AN.'), m('4')],
      [m('A 2 m pole casts a 3 m shadow; a tree casts 24 m. Find its height.'), m('16 m')],
      [m('M is the midpoint of AB and MN ∥ BC. What is N?'), 'The midpoint of ' + m('AC') + '.'],
      [m('MN ∥ BC and AM : MB = 1 : 2. Find AN : NC.'), m('1 : 2')],
      [m('MN ∥ BC, AM = 4, AN = 4, NC = 8. Find MB.'), m('8')]
    ],
    med: [
      [m('MN ∥ BC, AM = 4, MB = 6, AN = 6. Find NC.'), m('9')],
      [m('MN ∥ BC, AM = 3, AB = 12, AC = 20. Find AN.'), m('5')],
      [m('A 1.8 m man casts a 2.4 m shadow; a tower casts 40 m. Find its height.'), m('30 m')],
      [m('MN ∥ BC, AN : NC = 3 : 5 and AB = 24. Find AM.'), m('9')],
      [m('Describe how to divide a segment in the ratio 2 : 3.'), '5 equal steps on a ray, join the 5th to ' + m('B') + ', draw the parallel through the 2nd.'],
      [m('MN ∥ BC, AM = x, MB = 8, AN = 6, NC = 12. Find x.'), m('x = 4')],
      [m('MN ∥ BC and MN cuts off a triangle with AM : AB = 2 : 7. Find AN : AC.'), m('2 : 7')]
    ],
    hard: [
      [m('Prove that a line through the midpoint of AB parallel to BC bisects AC.'), m(f('AM', 'MB') + ' = 1') + ' forces ' + m(f('AN', 'NC') + ' = 1') + ' by Thales, so ' + m('AN = NC') + '.'],
      [m('In △ABC, MN ∥ BC, AM = x, MB = x + 3, AN = 4, NC = 8. Find x.'), m(f('x', 'x + 3') + ' = ' + f('4', '8')) + ' ⟹ ' + m('2x = x + 3') + ' ⟹ ' + m('x = 3')],
      [m('A river is crossed by sighting: two parallel lines cut a base line into 12 m and 18 m, and one side of the river measures 20 m. Find the far distance.'), m(f('12', '18') + ' = ' + f('20', 'd')) + ' ⟹ ' + m('d = 30 m')],
      [m('MN ∥ BC with AM : MB = 3 : 4. The perimeter of △AMN is 21. Find the perimeter of △ABC.'), 'Sides scale by ' + m(f('3', '7')) + ', so the perimeter of ' + m('△ABC') + ' is ' + m('49') + '.'],
      [m('Divide a segment into 7 equal parts and explain why no measurement of its length is needed.'), 'Seven equal compass steps on a ray plus parallels transfer the equality by Thales; the length of ' + m('AB') + ' is never used.'],
      [m('In trapezium ABCD (AD ∥ BC), the diagonals meet at O. Prove ' + f('AO', 'OC') + ' = ' + f('AD', 'BC') + '.'), 'The parallels ' + m('AD') + ' and ' + m('BC') + ' cut the transversals ' + m('AC') + ' and ' + m('BD') + ' proportionally.'],
      [m('Three parallels cut one transversal into 4 cm and 6 cm and another into pieces whose sum is 20 cm. Find them.'), 'Ratio ' + m('2 : 3') + ' of ' + m('20') + ' gives ' + m('8 cm') + ' and ' + m('12 cm') + '.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Geometry 8, Темы 9–10, pp. 23–28. Write the proportion before you substitute.',
  homework: [
    m('MN ∥ BC, AM = 6, MB = 9, AN = 8. Find NC.'),
    m('MN ∥ BC, AM = 5, AB = 15, AC = 21. Find AN.'),
    m('A 1.6 m person casts a 2 m shadow; a flagpole casts 15 m. Find its height.'),
    m('MN ∥ BC and AM : MB = 2 : 5. Find AN : AC.'),
    m('Divide a 10 cm segment in the ratio 3 : 2 by construction.'),
    m('In △ABC, MN ∥ BC and the perimeter of △AMN is half that of △ABC. Find AM : MB.')
  ]
});

/* ============================== 10 ============================== */
G8_GEO.push({
  id: 'geo-10', stream: 'geo', grade: 8, quarter: 1, lessons: '15', hours: 1,
  title: 'The midline of a triangle and of a trapezium',
  subtitle: 'Two theorems with one idea: join the midpoints and you get a segment parallel to the base, of exactly the average length.',
  uz: 'Geometry 8, Темы 10–11', uzPage: 'Темы 10–11, pp. 26–28',
  cam: 'Stage 9 · 13.2', camPage: 'Learner’s Book pp. 281–284', wb: 'Workbook 13.2',
  objectives: [
    'State and prove the midline theorem for a triangle.',
    'State and use the midline theorem for a trapezium.',
    'See the triangle case as the trapezium case with ' + m('b = 0') + '.',
    'Use midlines to solve length problems and to prove other results.'
  ],
  timing: [[4, 'Warm-up'], [13, 'Explanation'], [8, 'Interactive'], [13, 'Practice'], [2, 'Homework']],
  terms: [
    ['Midline of a triangle', 'Uchburchakning o‘rta chizig‘i', 'Средняя линия треугольника'],
    ['Midline of a trapezium', 'Trapetsiyaning o‘rta chizig‘i', 'Средняя линия трапеции'],
    ['Midpoint', 'O‘rta nuqta', 'Середина'],
    ['Half-sum', 'Yarim yig‘indi', 'Полусумма'],
    ['Corollary', 'Natija', 'Следствие'],
    ['Congruent triangles', 'Teng uchburchaklar', 'Равные треугольники'],
    ['Parallel', 'Parallel', 'Параллельный'],
  ],
  sections: [
    {
      h: 'The midline of a triangle',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      The <b>midline</b> of a triangle is the segment joining the midpoints of two of its sides.</div>
      {{fig:midlineTriangle:M and N are the midpoints of AB and AC. The midline MN is parallel to BC and exactly half its length.}}
      <div class="keybox"><div class="klabel">Theorem</div>
      The midline of a triangle is parallel to the third side and equal to half of it:
      ${eq(m('MN ∥ BC') + ' &nbsp;&nbsp;and&nbsp;&nbsp; ' + m('MN = ' + f('1', '2') + ' BC'))}</div>
      <p><b>Proof.</b> Extend ${m('MN')} beyond ${m('N')} to a point ${m('P')} with ${m('NP = MN')}.
      Then ${m('△ANM ≅ △CNP')} by SAS (${m('AN = NC')}, ${m('MN = NP')}, vertically opposite angles at
      ${m('N')}). Hence ${m('CP = AM = MB')} and ${m('∠CPN = ∠AMN')}, which are alternate angles — so
      ${m('CP ∥ MB')}. Now ${m('MBCP')} has one pair of sides equal <em>and</em> parallel, so by Test 1
      it is a parallelogram. Therefore ${m('MP ∥ BC')} and ${m('MP = BC')}; and since
      ${m('MN = ' + f('1', '2') + 'MP')}, the theorem follows. ∎</p>
      <div class="keybox"><div class="klabel">Consequence</div>
      The three midlines of a triangle cut it into four congruent triangles, each similar to the
      original with half the side lengths and a quarter of the area. The middle triangle has perimeter
      equal to half the original.</div>`
    },
    {
      h: 'The midline of a trapezium',
      html: `<div class="keybox"><div class="klabel">Theorem</div>
      The midline of a trapezium — the segment joining the midpoints of the two legs — is parallel to
      the bases and equal to their half-sum:
      ${eq(m('MN ∥ AD ∥ BC') + ' &nbsp;&nbsp;and&nbsp;&nbsp; ' + m('MN = ' + f('a + b', '2')))}</div>
      {{fig:midlineTrapezium:The midline of a trapezium is the average of the two bases.}}
      <p><b>Proof.</b> Draw the diagonal ${m('BD')} and let it meet ${m('MN')} at ${m('K')}. In
      ${m('△ABD')}, ${m('MK')} joins the midpoints of ${m('AB')} and ${m('BD')} — a midline, so
      ${m('MK = ' + f('1', '2') + 'AD = ' + f('a', '2'))}. In ${m('△BCD')}, ${m('KN')} is a midline, so
      ${m('KN = ' + f('1', '2') + 'BC = ' + f('b', '2'))}. Adding gives
      ${m('MN = ' + f('a + b', '2'))}. ∎</p>
      <div class="keybox"><div class="klabel">One theorem, not two</div>
      Let the shorter base shrink to a point, ${m('b = 0')}. The trapezium becomes a triangle and the
      formula becomes ${m('MN = ' + f('a', '2'))} — the triangle midline theorem. The triangle case is
      the trapezium case with one base of length zero.</div>`
    },
    {
      h: 'Using midlines',
      html: `<p>Two habits that solve most midline problems:</p>
      <ul>
        <li>When you see <b>two midpoints</b>, join them — you have created a midline.</li>
        <li>When you see <b>one midpoint</b> and want a second, draw a parallel to a side; the midpoint
        corollary from the last lesson supplies it.</li>
      </ul>
      <p>Area is also useful: the area of a trapezium is ${m('S = MN · h')} — the midline multiplied by
      the height.</p>`
    }
  ],
  examples: [
    {
      q: m('In △ABC, BC = 18 cm. M and N are the midpoints of AB and AC. Find MN.'),
      steps: [
        [m('MN') + ' joins two midpoints — it is a midline.', ''],
        [m('MN = ' + f('1', '2') + ' BC'), 'Midline theorem.'],
        [m('MN = 9 cm'), '']
      ],
      ans: m('MN = 9 cm')
    },
    {
      q: 'A trapezium has bases 8 cm and 14 cm and height 5 cm. Find its midline and area.',
      steps: [
        [m('MN = ' + f('8 + 14', '2') + ' = 11 cm'), 'Half-sum of the bases.'],
        [m('S = MN · h = 11 · 5'), 'Area of a trapezium.'],
        [m('S = 55 cm<sup>2</sup>'), '']
      ],
      ans: m('MN = 11 cm, S = 55 cm²')
    },
    {
      q: m('The midline of a trapezium is 12 cm and one base is 3 cm shorter than the other. Find both bases.'),
      steps: [
        [m('a + b = 2 · 12 = 24'), 'From the midline formula.'],
        [m('a = b + 3'), 'The given relation.'],
        [m('b + 3 + b = 24 ⟹ 2b = 21'), ''],
        [m('b = 10.5, a = 13.5'), '']
      ],
      ans: m('10.5 cm') + ' and ' + m('13.5 cm')
    }
  ],
  modelNote: 'Drag a vertex to a wild position — the ratio BC : MN stays at 2.00 throughout.',
  interactive: { type: 'triangleMidline' },
  quiz: [
    { q: 'The midline of a triangle with base 20 cm is:', a: [m('40 cm'), m('10 cm'), m('20 cm'), m('5 cm')], c: 1, why: 'It is half the third side.' },
    { q: 'The midline of a trapezium with bases 7 and 13 is:', a: [m('20'), m('10'), m('6'), m('91')], c: 1, why: '(7 + 13)/2 = 10.' },
    { q: 'The three midlines of a triangle cut it into:', a: ['2 triangles', '3 triangles', '4 congruent triangles', '6 triangles'], c: 2, why: 'Four congruent triangles, each a quarter of the area.' },
    { q: 'A trapezium has midline 9 and height 6. Its area is:', a: [m('54'), m('27'), m('15'), m('108')], c: 0, why: 'S = midline × height = 9 × 6 = 54.' }
  ],
  practice: {
    easy: [
      [m('In △ABC, BC = 18 cm. Find the midline MN parallel to BC.'), m('9 cm')],
      [m('A midline of a triangle is 7 cm. Find the side it is parallel to.'), m('14 cm')],
      [m('A trapezium has bases 6 cm and 10 cm. Find the midline.'), m('8 cm')],
      [m('A trapezium has bases 5 cm and 15 cm. Find the midline.'), m('10 cm')],
      [m('A trapezium has midline 9 cm and height 6 cm. Find the area.'), m('54 cm²')],
      [m('A triangle has sides 10, 12, 14. Find the perimeter of the triangle formed by its midlines.'), m('18')],
      [m('The midline of a trapezium is 11 cm and one base is 8 cm. Find the other.'), m('14 cm')]
    ],
    med: [
      [m('A trapezium has bases 8 cm and 14 cm and height 5 cm. Find the midline and area.'), m('11 cm, 55 cm²')],
      [m('The midline of a trapezium is 12 cm and one base is 3 cm shorter than the other. Find both.'), m('10.5 cm') + ' and ' + m('13.5 cm')],
      [m('In △ABC the midlines have lengths 4, 5, 6. Find the sides of △ABC.'), m('8, 10, 12')],
      [m('A trapezium has area 60 cm² and height 5 cm. Find its midline.'), m('12 cm')],
      [m('The midline of a trapezium is 10 cm and the bases are in the ratio 2 : 3. Find them.'), m('8 cm') + ' and ' + m('12 cm')],
      [m('In △ABC, M and N are the midpoints of AB and AC, and MN = 6.5 cm. Find BC.'), m('13 cm')],
      [m('A trapezium has bases 9 and 21 and legs 10 and 10. Find the midline and the height.'), 'Midline ' + m('15') + '; ' + m(f('21 − 9', '2') + ' = 6') + ', so ' + m('h = 8')]
    ],
    hard: [
      [m('Prove the midline theorem for a triangle.'), 'Extend ' + m('MN') + ' to ' + m('P') + ' with ' + m('NP = MN') + '; ' + m('△ANM ≅ △CNP') + ' by SAS makes ' + m('MBCP') + ' a parallelogram, so ' + m('MP = BC') + ' and ' + m('MN') + ' is half of it.'],
      [m('Prove that the midline of a trapezium equals the half-sum of the bases.'), 'The diagonal ' + m('BD') + ' splits ' + m('MN') + ' into two triangle midlines of lengths ' + m(f('a', '2')) + ' and ' + m(f('b', '2')) + '.'],
      [m('The midlines of a triangle cut it into four triangles. Compare their areas with the original.'), 'Each is ' + m(f('1', '4')) + ' of the original area, and all four are congruent.'],
      [m('The midline of a trapezium is 14 cm and the bases are in the ratio 3 : 4. Find both bases.'), m('a + b = 28') + ' in the ratio ' + m('3 : 4') + ': ' + m('12 cm') + ' and ' + m('16 cm') + '.'],
      [m('P, Q, R, S are the midpoints of the sides of any quadrilateral. Prove PQRS is a parallelogram.'), m('PQ') + ' and ' + m('SR') + ' are both midlines parallel to the diagonal ' + m('AC') + ' and equal to half of it.'],
      [m('The midline of a triangle divides it into a triangle and a trapezium. Compare their areas.'), 'The small triangle is ' + m(f('1', '4')) + ' of the whole, so the trapezium is ' + m(f('3', '4')) + ' — a ratio of ' + m('1 : 3') + '.'],
      [m('A trapezium has midline 8 and the two bases differ by 4. Find the area if the height is 7.'), 'Bases ' + m('6') + ' and ' + m('10') + '; ' + m('S = 8 · 7 = 56') + '.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Темы 10–11, pp. 26–28.',
  homework: [
    m('In △ABC, BC = 22 cm. Find the midline parallel to BC.'),
    m('A trapezium has bases 11 cm and 17 cm. Find the midline, then the area if the height is 6 cm.'),
    m('The midline of a trapezium is 15 cm and one base is 4 cm longer than the other. Find both.'),
    m('The midlines of a triangle are 6, 7 and 8. Find the perimeter of the triangle.'),
    m('Prove that the midline of a triangle is parallel to the third side.')
  ]
});

/* ============================== 11 ============================== */
G8_GEO.push({
  id: 'geo-11', stream: 'geo', grade: 8, quarter: 1, lessons: '16', hours: 1,
  title: 'Practical tasks — ruler-and-compass constructions',
  subtitle: 'The national “practical tasks” lesson, carrying the Cambridge Stage 9 constructions the national programme does not cover.',
  uz: 'Geometry 8, Тема 12', uzPage: 'Тема 12, pp. 29–32',
  cam: 'Stage 9 · 5.4  [Cambridge insert]', camPage: 'Learner’s Book pp. 119–123', wb: 'Workbook 5.4',
  objectives: [
    'Construct the perpendicular bisector of a segment and explain why it works.',
    'Construct the bisector of an angle.',
    'Construct a perpendicular from a point to a line, and an angle of 60° and 30°.',
    'Use a construction to solve a practical placement problem.'
  ],
  timing: [[4, 'Warm-up'], [10, 'Explanation'], [10, 'Construct'], [14, 'Practice'], [2, 'Homework']],
  terms: [
    ['Compasses', 'Sirkul', 'Циркуль'],
    ['Straight edge', 'Chizg‘ich', 'Линейка'],
    ['Arc', 'Yoy', 'Дуга'],
    ['Radius', 'Radius', 'Радиус'],
    ['Perpendicular bisector', 'O‘rta perpendikulyar', 'Серединный перпендикуляр'],
    ['Angle bisector', 'Burchak bissektrisasi', 'Биссектриса угла'],
    ['Locus', 'Geometrik o‘rin', 'Геометрическое место точек'],
    ['Equidistant', 'Teng uzoqlikda', 'Равноудалённый'],
    ['Circumcentre', 'Tashqi aylana markazi', 'Центр описанной окружности'],
    ['Incentre', 'Ichki aylana markazi', 'Центр вписанной окружности'],
  ],
  sections: [
    {
      h: 'The rules of the game',
      html: `<div class="keybox"><div class="klabel">Allowed</div>
      A straight edge, to draw a line through two points, and compasses, to draw a circle of a chosen
      radius about a chosen point. <b>Not allowed:</b> measuring lengths with the ruler’s scale, or
      angles with a protractor.</div>
      <p>Leave every construction arc on the page. The arcs are the working, and in Cambridge papers
      they carry the marks — a correct figure with the arcs rubbed out scores less than a slightly
      wobbly one with them showing.</p>`
    },
    {
      h: 'Construction 1 — the perpendicular bisector of AB',
      html: `{{fig:perpBisector:Equal radii from A and from B meet at P and Q. The line PQ is the perpendicular bisector of AB.}}
      <ol>
        <li>Open the compasses to more than half of ${m('AB')}.</li>
        <li>Draw an arc centred at ${m('A')}, and another of the <b>same radius</b> centred at ${m('B')}.</li>
        <li>They meet at two points, ${m('P')} and ${m('Q')}. Join them.</li>
      </ol>
      <p><b>Why it works.</b> ${m('P')} and ${m('Q')} are each the same distance from ${m('A')} and from
      ${m('B')}, so both lie on the set of points equidistant from ${m('A')} and ${m('B')} — which is
      exactly the perpendicular bisector. The line also gives the <b>midpoint</b> ${m('M')} for free.</p>`
    },
    {
      h: 'Construction 2 — the bisector of an angle',
      html: `{{fig:bisectorConstruction:One arc from O cuts the arms at A and B; equal arcs from A and B meet at K; OK is the bisector.}}
      <ol>
        <li>With centre ${m('O')} draw an arc cutting the arms at ${m('A')} and ${m('B')}.</li>
        <li>With the same radius, draw arcs centred at ${m('A')} and at ${m('B')}; call their
        intersection ${m('K')}.</li>
        <li>Draw ${m('OK')}.</li>
      </ol>
      <p><b>Why it works.</b> ${m('OA = OB')} and ${m('AK = BK')} and ${m('OK')} is common, so
      ${m('△OAK ≅ △OBK')} by SSS, and therefore ${m('∠AOK = ∠KOB')}. ∎</p>`
    },
    {
      h: 'Two more you should be able to do',
      html: `<p><b>A perpendicular from a point P to a line ℓ.</b> Draw an arc centred at ${m('P')}
      cutting ${m('ℓ')} at two points, then construct the perpendicular bisector of the segment between
      them — it passes through ${m('P')}.</p>
      <p><b>An angle of 60°.</b> Draw an arc centred at ${m('O')} cutting the line at ${m('A')}; with the
      same radius, an arc centred at ${m('A')} cuts the first at ${m('B')}. Then ${m('△OAB')} is
      equilateral, so ${m('∠AOB = 60°')}. Bisect it for ${m('30°')}, bisect again for ${m('15°')}.</p>
      <div class="keybox"><div class="klabel">Where these are used</div>
      Every one of these is a <b>locus</b>: the perpendicular bisector is the set of points equidistant
      from two points; the angle bisector is the set of points equidistant from two lines. That is why
      they answer questions like “where should the well be dug so that it is the same distance from both
      villages?”</div>`
    }
  ],
  examples: [
    {
      q: 'Find the point equidistant from three villages A, B and C.',
      steps: [
        ['Construct the perpendicular bisector of ' + m('AB') + '.', 'Every point on it is equidistant from A and B.'],
        ['Construct the perpendicular bisector of ' + m('BC') + '.', 'Every point on it is equidistant from B and C.'],
        ['They meet at one point ' + m('O') + '.', m('OA = OB') + ' and ' + m('OB = OC') + ', so all three are equal.'],
        [m('O') + ' is the centre of the circle through ' + m('A, B, C') + '.', 'The circumcentre of the triangle.']
      ],
      ans: 'The intersection of the perpendicular bisectors — the circumcentre.'
    },
    {
      q: 'Construct an angle of 45° using compasses only.',
      steps: [
        ['Construct a perpendicular to a line at a point ' + m('O') + '.', 'That gives ' + m('90°') + '.'],
        ['Bisect the right angle.', 'Two equal halves of ' + m('90°') + '.'],
        ['Each half is ' + m('45°') + '.', 'No protractor was used at any stage.']
      ],
      ans: 'Perpendicular, then bisect.'
    },
    {
      q: 'A path must be the same distance from two straight roads that cross. Where does it run?',
      steps: [
        ['The set of points equidistant from two lines is the bisector of the angle between them.', ''],
        ['Two crossing roads make two pairs of vertically opposite angles.', 'So there are two bisectors.'],
        ['The two bisectors are perpendicular to each other.', 'Both answers are valid paths.']
      ],
      ans: 'Along either bisector of the angles between the roads.'
    }
  ],
  modelNote: 'Do these on the board with real compasses first, then use the step-through to check the reasoning.',
  interactive: {
    type: 'fractionCancel',
    title: 'Construction steps',
    hint: 'Reveal one step at a time while the class draws along with you.',
    items: [
      {
        title: 'Perpendicular bisector of AB',
        start: 'Given a segment ' + m('AB') + '.',
        steps: [
          ['Open the compasses to more than half of ' + m('AB') + '.', 'Any radius under half gives no intersection.'],
          ['Arc centred at ' + m('A') + '; arc of the <b>same</b> radius centred at ' + m('B') + '.', 'The equal radius is the whole point.'],
          ['They meet at ' + m('P') + ' and ' + m('Q') + '. Draw the line ' + m('PQ') + '.', ''],
          [m('PA = PB') + ' and ' + m('QA = QB') + ', so ' + m('PQ') + ' is the locus of points equidistant from ' + m('A') + ' and ' + m('B') + '.', 'It is perpendicular to AB and passes through its midpoint.']
        ],
        answer: m('PQ ⊥ AB') + ' and ' + m('PQ') + ' passes through the midpoint ' + m('M') + '.'
      },
      {
        title: 'Bisector of ∠AOB',
        start: 'Given an angle with vertex ' + m('O') + '.',
        steps: [
          ['Arc centred at ' + m('O') + ' cuts the arms at ' + m('A') + ' and ' + m('B') + '.', 'So ' + m('OA = OB') + '.'],
          ['Equal arcs centred at ' + m('A') + ' and ' + m('B') + ' meet at ' + m('K') + '.', 'So ' + m('AK = BK') + '.'],
          [m('△OAK ≅ △OBK') + ' by SSS.', m('OK') + ' is common.'],
          [m('∠AOK = ∠KOB') + ' — ' + m('OK') + ' is the bisector.', '']
        ],
        answer: m('OK') + ' bisects ' + m('∠AOB') + '.'
      },
      {
        title: 'An angle of 60°',
        start: 'Given a line and a point ' + m('O') + ' on it.',
        steps: [
          ['Arc centred at ' + m('O') + ' cuts the line at ' + m('A') + '.', ''],
          ['Arc of the same radius centred at ' + m('A') + ' cuts the first arc at ' + m('B') + '.', ''],
          [m('OA = OB = AB') + ', so ' + m('△OAB') + ' is equilateral.', 'All three sides are the same compass width.'],
          [m('∠AOB = 60°') + '.', 'Bisect for 30°, bisect again for 15°.']
        ],
        answer: m('∠AOB = 60°')
      },
      {
        title: 'The point equidistant from three villages',
        start: 'Three points ' + m('A, B, C') + ' not in a line.',
        steps: [
          ['Perpendicular bisector of ' + m('AB') + ': all its points satisfy ' + m('OA = OB') + '.', ''],
          ['Perpendicular bisector of ' + m('BC') + ': all its points satisfy ' + m('OB = OC') + '.', ''],
          ['Their intersection satisfies both, so ' + m('OA = OB = OC') + '.', ''],
          ['That point is the centre of the circle through all three.', 'The third bisector passes through it too.']
        ],
        answer: 'The circumcentre — the meeting point of the perpendicular bisectors.'
      }
    ]
  },
  quiz: [
    { q: 'For the perpendicular bisector construction the compass radius must be:', a: ['exactly half of AB', 'more than half of AB', 'less than half of AB', 'any radius at all'], c: 1, why: 'Less than half and the arcs never meet; exactly half and they touch at one point only.' },
    { q: 'The set of points equidistant from two points is:', a: ['a circle', 'the perpendicular bisector of the segment joining them', 'an angle bisector', 'a parabola'], c: 1, why: 'That is exactly what the perpendicular bisector is.' },
    { q: 'The set of points equidistant from two crossing lines is:', a: ['a circle', 'the perpendicular bisector', 'the pair of angle bisectors', 'a single point'], c: 2, why: 'Two crossing lines give two bisectors, perpendicular to each other.' },
    { q: 'To construct 30° you first construct:', a: [m('45°'), m('60°') + ' and bisect it', m('90°') + ' and trisect it', m('15°') + ' and double it'], c: 1, why: 'An equilateral triangle gives 60°, and bisecting is a legal construction.' }
  ],
  practice: {
    easy: [
      [m('Construct the perpendicular bisector of a 6 cm segment.'), 'Equal arcs from both ends; join the two intersections.'],
      [m('Construct the midpoint of a 7 cm segment.'), 'It is where the perpendicular bisector crosses.'],
      [m('Construct the bisector of a 70° angle. What is each half?'), m('35°')],
      [m('Construct an angle of 60°.'), 'Equilateral triangle by equal compass widths.'],
      [m('Construct an angle of 30°.'), 'Construct ' + m('60°') + ' and bisect it.'],
      [m('What is the locus of points equidistant from A and B?'), 'The perpendicular bisector of ' + m('AB') + '.'],
      [m('What is the locus of points 3 cm from a point O?'), 'A circle of radius 3 cm centred at ' + m('O') + '.']
    ],
    med: [
      [m('Construct a perpendicular from a point P to a line ℓ.'), 'Arc from ' + m('P') + ' cutting ' + m('ℓ') + ' twice, then the perpendicular bisector of that segment.'],
      [m('Construct an angle of 45°.'), m('90°') + ' then bisect.'],
      [m('Construct an angle of 15°.'), m('60° → 30° → 15°') + ' by bisecting twice.'],
      [m('Construct the circumcentre of a triangle.'), 'Intersection of two perpendicular bisectors.'],
      [m('Construct the incentre of a triangle.'), 'Intersection of two angle bisectors.'],
      [m('Explain why the angle-bisector construction works.'), m('△OAK ≅ △OBK') + ' by SSS.'],
      [m('Construct a triangle with sides 5 cm, 6 cm and 7 cm.'), 'Draw the 7 cm base, then arcs of 5 cm and 6 cm from its ends.']
    ],
    hard: [
      [m('A well must be equidistant from three houses. Where is it, and when is there no such point?'), 'At the circumcentre; there is none if the three houses lie in a straight line.'],
      [m('Construct an angle of 75°.'), m('60° + 15°') + ' — build ' + m('60°') + ', then bisect ' + m('30°') + ' onto it.'],
      [m('A treasure is 4 cm from point A and equidistant from B and C. Describe the construction.'), 'Circle of radius 4 cm about ' + m('A') + ', intersected with the perpendicular bisector of ' + m('BC') + ' — up to two positions.'],
      [m('Prove that the perpendicular bisectors of the three sides of a triangle are concurrent.'), 'The intersection of two of them is equidistant from all three vertices, so it lies on the third as well.'],
      [m('Construct the tangent-length point: divide a 9 cm segment into 3 equal parts by construction.'), 'Thales’ construction: three equal steps on a ray, join the last to ' + m('B') + ', draw parallels.'],
      [m('Construct an angle of 105° and explain your steps.'), m('90° + 15°') + ': build a perpendicular, then bisect ' + m('60°') + ' twice to get ' + m('15°') + ' and add it.'],
      [m('A path must be equidistant from two roads and 5 cm from a crossroads. Find the possible positions.'), 'Intersect the two angle bisectors with the circle of radius 5 cm — up to four points.']
    ]
  },
  hwTitle: 'Homework — 5 constructions',
  hwNote: 'Geometry 8, Тема 12, pp. 29–32, and Cambridge Learner’s Book 5.4. Leave all arcs visible.',
  homework: [
    m('Construct the perpendicular bisector of an 8 cm segment.'),
    m('Construct the bisector of an angle of about 100° and measure each half to check.'),
    m('Construct angles of 60°, 30° and 15° from the same line.'),
    m('Construct a triangle with sides 4 cm, 6 cm and 7 cm, then its circumcentre.'),
    'A house is to be built equidistant from two straight roads and 6 cm from a marked tree. Construct all possible positions.'
  ]
});

/* ============================== 12 ============================== */
G8_GEO.push({
  id: 'geo-12', stream: 'geo', grade: 8, quarter: 1, lessons: '17', hours: 1,
  title: 'Chapter revision — angles in polygons',
  subtitle: 'The whole of Chapter I pulled together, in the shape of Cambridge Project 2, “Angle tangle”.',
  uz: 'Geometry 8, Тест 1', uzPage: 'Тест 1, p. 33',
  cam: 'Stage 9 · Project 2  [Cambridge insert]', camPage: 'Learner’s Book p. 127', wb: 'Workbook 5.2–5.3',
  objectives: [
    'Recall the definitions, properties and tests of Chapter I without notes.',
    'Choose the right property for a given problem.',
    'Work the Cambridge “Angle tangle” investigation.',
    'Identify personal gaps before the control work.'
  ],
  timing: [[4, 'Recall round'], [10, 'Project 2'], [8, 'Interactive'], [16, 'Mixed practice'], [2, 'Homework']],
  terms: [
    ['Revision', 'Takrorlash', 'Повторение'],
    ['Investigation', 'Tadqiqot', 'Исследование'],
    ['Predict', 'Bashorat qilish', 'Предсказать'],
    ['Reflex angle', 'Yoyiq burchakdan katta burchak', 'Рефлексный угол'],
    ['Justify', 'Asoslash', 'Обосновать'],
    ['Regular polygon', 'Muntazam ko‘pburchak', 'Правильный многоугольник'],
    ['Family tree', 'Tasnif sxemasi', 'Схема классификации'],
  ],
  sections: [
    {
      h: 'The recall round — four minutes, no notes',
      html: `<p>Ask these in order, round the class. Anything that stalls is what tomorrow’s control work
      will catch.</p>
      <ol>
        <li>Sum of the interior angles of an ${m('n')}-gon? &nbsp;${m('180°(n − 2)')}</li>
        <li>Sum of the exterior angles? &nbsp;${m('360°')}, always.</li>
        <li>Three properties of a parallelogram? &nbsp;Opposite sides equal, opposite angles equal, diagonals bisect each other.</li>
        <li>Three tests for a parallelogram? &nbsp;One pair equal and parallel; both pairs of sides equal; diagonals bisect each other.</li>
        <li>What is special about the diagonals of a rectangle? &nbsp;They are equal.</li>
        <li>Of a rhombus? &nbsp;Perpendicular, and they bisect the angles.</li>
        <li>Of a square? &nbsp;All of the above.</li>
        <li>Midline of a triangle? &nbsp;${m('MN ∥ BC')}, ${m('MN = ' + f('1', '2') + 'BC')}.</li>
        <li>Midline of a trapezium? &nbsp;${m(f('a + b', '2'))}.</li>
        <li>Thales’ theorem? &nbsp;Parallel lines cut proportional segments on any transversals.</li>
      </ol>`
    },
    {
      h: 'Project 2 · Angle tangle',
      html: `<p>The Cambridge investigation, adapted to the national chapter. Work in pairs.</p>
      <div class="keybox"><div class="klabel">The task</div>
      <ol style="margin:0">
        <li>Draw any convex pentagon and measure its five interior angles. Add them. Compare with
        ${m('180° · 3 = 540°')}.</li>
        <li>Now draw a <b>non-convex</b> pentagon and repeat. Does the formula still hold?</li>
        <li>Extend each side in turn and measure the exterior angles. What do they add to?</li>
        <li>Predict the answers for a 9-gon <em>before</em> drawing it. Then check.</li>
        <li>Write one sentence explaining why the exterior sum does not depend on ${m('n')}.</li>
      </ol></div>
      {{fig:angleSum:The diagonals from one vertex are what turn the polygon into triangles — the heart of the whole investigation.}}
      <p>Expect the surprise at step 2: the interior formula survives for non-convex polygons (with
      reflex angles counted properly), but the exterior-angle argument does not, because “turning
      through the exterior angle” goes backwards at a reflex vertex.</p>`
    },
    {
      h: 'The three traps to name out loud',
      html: `<div class="warn"><span class="wl">Before the control work</span>
      <ol style="margin:.4em 0 0">
        <li><b>“The diagonals of a parallelogram are equal.”</b> They bisect each other. Equal needs a rectangle.</li>
        <li><b>“Equal diagonals mean a rectangle.”</b> Only if the shape is already a parallelogram —
        an isosceles trapezium has equal diagonals too.</li>
        <li><b>Mixing part-to-part with part-to-whole</b> in a Thales proportion. Decide which one and
        stay with it on both sides.</li>
      </ol></div>`
    }
  ],
  examples: [
    {
      q: 'A regular polygon has interior angle 150°. Find n, and the sum of its interior angles.',
      steps: [
        [m('exterior = 180° − 150° = 30°'), 'Work with the exterior angle.'],
        [m('n = ' + f('360°', '30°') + ' = 12'), ''],
        [m('sum = 180°(12 − 2) = 1800°'), 'Check with the interior formula.']
      ],
      ans: m('n = 12') + ', sum ' + m('1800°')
    },
    {
      q: m('ABCD is a parallelogram with AC = BD. What kind of quadrilateral is it, and why?'),
      steps: [
        ['It is already a parallelogram, so the diagonals bisect each other.', ''],
        ['Equal diagonals plus bisecting gives four equal half-diagonals.', ''],
        [m('△ABC ≅ △BAD') + ' by SSS, so ' + m('∠A = ∠B') + '.', ''],
        ['They are supplementary, so each is ' + m('90°') + ' — a rectangle.', '']
      ],
      ans: 'A rectangle.'
    }
  ],
  modelNote: 'Run the polygon model up to 12 sides while the class checks their Project 2 predictions.',
  interactive: { type: 'polygonAngles' },
  quiz: [
    { q: 'A regular polygon has interior angle 150°. It has:', a: ['10 sides', '12 sides', '15 sides', '20 sides'], c: 1, why: 'Exterior 30°, and 360 ÷ 30 = 12.' },
    { q: 'A parallelogram with equal diagonals is:', a: ['a rhombus', 'a rectangle', 'a trapezium', 'a kite'], c: 1, why: 'Equal plus bisecting diagonals force four right angles.' },
    { q: 'A parallelogram with perpendicular diagonals is:', a: ['a rhombus', 'a rectangle', 'a trapezium', 'not determined'], c: 0, why: 'Perpendicular bisecting diagonals give four equal sides.' },
    { q: 'The midline of a trapezium with bases 9 and 15 is:', a: [m('6'), m('12'), m('24'), m('3')], c: 1, why: '(9 + 15)/2 = 12.' }
  ],
  practice: {
    easy: [
      [m('Sum of the interior angles of a nonagon (9 sides).'), m('1260°')],
      [m('Each exterior angle of a regular octagon.'), m('45°')],
      [m('In parallelogram ABCD, ∠A = 55°. Find ∠B.'), m('125°')],
      [m('The diagonals of a rhombus are 8 and 6. Find the area.'), m('24')],
      [m('A rectangle has sides 5 and 12. Find the diagonal.'), m('13')],
      [m('A trapezium has bases 9 and 15. Find the midline.'), m('12')],
      [m('In △ABC, BC = 16. Find the midline parallel to BC.'), m('8')]
    ],
    med: [
      [m('A regular polygon has interior angle 150°. Find n and the interior sum.'), m('n = 12') + ', ' + m('1800°')],
      [m('ABCD is a parallelogram with AC = BD. Name the shape and justify.'), 'A rectangle — equal and bisecting diagonals force right angles.'],
      [m('A rhombus has side 10 and one diagonal 12. Find the other diagonal and the area.'), m('16') + ', area ' + m('96')],
      [m('An isosceles trapezium has bases 6 and 16 and legs 13. Find the height and area.'), m('h = 12') + ', ' + m('S = 132')],
      [m('MN ∥ BC with AM = 4, MB = 8 and AN = 5. Find NC.'), m('10')],
      [m('The angles of a quadrilateral are in the ratio 3 : 4 : 5 : 6. Find them.'), m('60°, 80°, 100°, 120°')],
      [m('A square has diagonal 12. Find its area.'), m('72')]
    ],
    hard: [
      [m('Project 2, step 4: predict the interior and exterior sums for a 9-gon, then check.'), m('1260°') + ' interior, ' + m('360°') + ' exterior.'],
      [m('Project 2, step 5: explain in one sentence why the exterior sum does not depend on n.'), 'Walking once round the polygon turns you through exactly one full revolution, whatever the number of corners.'],
      [m('Prove that the midpoints of the sides of a rhombus form a rectangle.'), 'Each side of the new quadrilateral is parallel to a diagonal, and the diagonals of a rhombus are perpendicular — so the new angles are right angles.'],
      [m('A parallelogram has perimeter 40 and one diagonal 16, with the diagonals perpendicular. Find the sides and the other diagonal.'), 'Perpendicular diagonals make it a rhombus: side ' + m('10') + ', half-diagonals ' + m('8') + ' and ' + m('6') + ', so the other diagonal is ' + m('12') + '.'],
      [m('In trapezium ABCD (AD ∥ BC), the midline is 10 and the height is 7. A diagonal splits it into two triangles — find their total area.'), m('S = 10 · 7 = 70') + ' — the two triangles together are the whole trapezium.'],
      [m('A convex polygon has exactly three right angles and the rest equal. If n = 6, find the equal angles.'), m('720° − 270° = 450°') + ' shared by 3 angles: ' + m('150°') + ' each.'],
      [m('Explain why a non-convex polygon can break the exterior-angle argument.'), 'At a reflex vertex the turn is in the opposite direction, so the turns no longer add to a single full revolution.']
    ]
  },
  hwTitle: 'Homework before the control work',
  hwNote: 'Geometry 8, Тест 1, p. 33. Then revise every definition and property from Темы 1–11.',
  homework: [
    m('Work Тест 1 on p. 33 in full.'),
    m('Write out the three tests for a parallelogram, with a sketch each.'),
    m('Write out the diagonal properties of the parallelogram, rectangle, rhombus and square in one table.'),
    m('A regular polygon has interior angle 162°. Find n.'),
    'Finish Project 2 and write your one-sentence explanation for step 5.'
  ]
});

/* ============================== 13 ============================== */
G8_GEO.push({
  id: 'geo-13', stream: 'geo', grade: 8, quarter: 1, lessons: '18', hours: 1,
  title: 'Control work 1 · Quadrilaterals',
  subtitle: 'The Chapter I assessment: polygons, the four special quadrilaterals, Thales’ theorem and midlines.',
  uz: 'Geometry 8, Темы 13–14', uzPage: 'pp. 33–34',
  cam: 'Stage 9 · Unit 5 check', camPage: 'Learner’s Book pp. 103–126', wb: 'Workbook Unit 5',
  objectives: [
    'Assess the whole of Chapter I in 40 minutes.',
    'Produce a correctly reasoned proof, not just a numerical answer.',
    'Draw and label a figure for every question.'
  ],
  timing: [[2, 'Setting up'], [36, 'The paper'], [2, 'Collect in']],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Figure (diagram)', 'Chizma', 'Чертёж'],
    ['Reason (justification)', 'Asos', 'Обоснование'],
    ['Error', 'Xato', 'Ошибка'],
    ['Prove', 'Isbotlash', 'Доказать'],
    ['Property', 'Xossa', 'Свойство'],
    ['Test (criterion)', 'Alomat', 'Признак'],
  ],
  sections: [
    {
      h: 'The paper — 40 minutes, 7 tasks, 14 marks',
      html: `<p>Two variants, printed below as the Easy and Medium sets. The balance:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Task</th><th>Topic</th><th>Source</th><th>Marks</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Angle sum of a polygon</td><td>Тема 1</td><td>2</td></tr>
        <tr><td>2</td><td>Angles of a parallelogram</td><td>Тема 2</td><td>2</td></tr>
        <tr><td>3</td><td>Rectangle — diagonal or area</td><td>Тема 4</td><td>2</td></tr>
        <tr><td>4</td><td>Rhombus or square</td><td>Темы 5–6</td><td>2</td></tr>
        <tr><td>5</td><td>Trapezium — height or midline</td><td>Темы 7–8, 10–11</td><td>2</td></tr>
        <tr><td>6</td><td>Thales’ theorem</td><td>Тема 9</td><td>2</td></tr>
        <tr><td>7</td><td>A proof</td><td>Темы 2–3</td><td>2</td></tr>
      </tbody></table></div>
      <p><b>Marking note to give before the paper starts:</b> a numerical answer with no figure and no
      reason earns one mark out of two. Task 7 earns nothing at all without a stated reason at each
      step — say which property or test you are using.</p>`
    },
    {
      h: 'What to check while they write',
      html: `<ul>
        <li>Is there a labelled figure? Learners who skip the figure lose marks on tasks 5 and 7 first.</li>
        <li>On task 6, has the proportion been written before any numbers were substituted?</li>
        <li>On task 7, is a <b>test</b> being quoted where a test is needed, rather than a property?</li>
      </ul>
      <p>The Hard set below is the work-on-mistakes material: seven pieces of wrong reasoning drawn from
      the errors this paper produces every year.</p>`
    }
  ],
  examples: [
    {
      q: 'Find the error: “ABCD is a parallelogram with AC = BD, therefore it is a rhombus.”',
      steps: [
        ['Equal diagonals is the <b>rectangle</b> condition, not the rhombus one.', ''],
        ['The rhombus condition is <b>perpendicular</b> diagonals.', ''],
        ['So ' + m('ABCD') + ' is a rectangle.', 'It is a rhombus only if it is also a square.']
      ],
      ans: 'A rectangle, not a rhombus.'
    },
    {
      q: 'Find the error: “ABCD has AC = BD, therefore it is a rectangle.”',
      steps: [
        ['The word “parallelogram” is missing from the hypothesis.', ''],
        ['An isosceles trapezium also has equal diagonals.', 'A counter-example.'],
        ['Equal diagonals alone determine nothing.', '']
      ],
      ans: 'Not necessarily a rectangle — it could be an isosceles trapezium.'
    }
  ],
  modelNote: 'Use this in the work-on-mistakes lesson: show the wrong reasoning, take a vote, then reveal.',
  interactive: {
    type: 'fractionCancel',
    title: 'Find the flaw in the reasoning',
    hint: 'Each of these lost marks in a real paper. Where does it break?',
    items: [
      {
        title: '“The diagonals of a parallelogram are equal.”',
        start: '<b>Claimed:</b> in parallelogram ' + m('ABCD') + ', ' + m('AC = BD') + '.',
        steps: [
          ['The parallelogram property is that the diagonals <b>bisect each other</b>.', 'That is ' + m('AO = OC') + ' and ' + m('BO = OD') + '.'],
          ['Nothing forces ' + m('AC') + ' and ' + m('BD') + ' to be the same length.', ''],
          ['Drag any non-rectangular parallelogram and the two diagonals differ.', 'Equality needs a right angle.']
        ],
        answer: 'False in general — the diagonals bisect each other but are equal only in a rectangle.'
      },
      {
        title: '“Equal diagonals ⟹ rectangle.”',
        start: '<b>Claimed:</b> ' + m('AC = BD') + ' makes ' + m('ABCD') + ' a rectangle.',
        steps: [
          ['The true statement is: a <b>parallelogram</b> with equal diagonals is a rectangle.', 'The word matters.'],
          ['An isosceles trapezium has equal diagonals and is not a parallelogram.', 'Counter-example.'],
          ['So the hypothesis is too weak.', '']
        ],
        answer: 'Needs “parallelogram” in the hypothesis.'
      },
      {
        title: '“MN ∥ BC, AM = 3, AB = 12, so AN : NC = 3 : 12.”',
        start: '<b>Claimed:</b> ' + m(f('AM', 'AB') + ' = ' + f('AN', 'NC')),
        steps: [
          ['The left side is part-to-whole; the right side is part-to-part.', 'The two do not match.'],
          ['Either write ' + m(f('AM', 'AB') + ' = ' + f('AN', 'AC')) + ' …', 'part to whole on both sides'],
          ['… or write ' + m(f('AM', 'MB') + ' = ' + f('AN', 'NC')) + ' with ' + m('MB = 9') + '.', 'part to part on both sides']
        ],
        answer: 'Mixed forms. Correct: ' + m(f('3', '12') + ' = ' + f('AN', 'AC')) + ' or ' + m(f('3', '9') + ' = ' + f('AN', 'NC')) + '.'
      },
      {
        title: '“The midline of a trapezium is half the longer base.”',
        start: '<b>Claimed:</b> bases 8 and 14 give midline ' + m('7') + '.',
        steps: [
          ['That is the <b>triangle</b> rule, where one base is zero.', ''],
          ['For a trapezium the midline is the <b>average</b> of the two bases.', ''],
          [m(f('8 + 14', '2') + ' = 11'), 'Not 7.']
        ],
        answer: m('MN = 11') + ', not ' + m('7') + '.'
      }
    ]
  },
  quiz: [
    { q: 'A parallelogram with perpendicular diagonals is:', a: ['a rectangle', 'a rhombus', 'a trapezium', 'nothing special'], c: 1, why: 'Perpendicular bisecting diagonals make all four sides equal.' },
    { q: 'An isosceles trapezium has:', a: ['equal diagonals', 'perpendicular diagonals', 'diagonals that bisect each other', 'no special diagonals'], c: 0, why: 'Equal — which is why equal diagonals alone do not prove a rectangle.' },
    { q: 'The midline of a trapezium with bases 8 and 14 is:', a: [m('7'), m('11'), m('22'), m('3')], c: 1, why: 'The average of the two bases.' },
    { q: 'To prove a quadrilateral is a parallelogram you need:', a: ['a property', 'a test', 'either', 'the angle sum'], c: 1, why: 'Properties run from the parallelogram outwards; tests run towards it.' }
  ],
  practice: {
    easy: [
      [m('<b>Variant 1, task 1.</b> Find the sum of the interior angles of a heptagon.'), m('900°')],
      [m('<b>Task 2.</b> In parallelogram ABCD, ∠A = 72°. Find the other three angles.'), m('108°, 72°, 108°')],
      [m('<b>Task 3.</b> A rectangle has sides 8 cm and 15 cm. Find the diagonal.'), m('17 cm')],
      [m('<b>Task 4.</b> A rhombus has diagonals 10 cm and 24 cm. Find its side and area.'), m('13 cm') + ', ' + m('120 cm²')],
      [m('<b>Task 5.</b> A trapezium has bases 7 cm and 13 cm. Find its midline.'), m('10 cm')],
      [m('<b>Task 6.</b> MN ∥ BC, AM = 3, MB = 6, AN = 4. Find NC.'), m('8')],
      [m('<b>Task 7.</b> Prove that a quadrilateral whose diagonals bisect each other is a parallelogram.'), m('△AOB ≅ △COD') + ' by SAS ⟹ ' + m('AB = CD') + ' and ' + m('AB ∥ CD') + ' ⟹ Test 1.']
    ],
    med: [
      [m('<b>Variant 2, task 1.</b> A regular polygon has exterior angle 30°. Find n and the interior sum.'), m('n = 12') + ', ' + m('1800°')],
      [m('<b>Task 2.</b> In parallelogram ABCD, ∠A − ∠B = 30°. Find all four angles.'), m('105°, 75°, 105°, 75°')],
      [m('<b>Task 3.</b> A rectangle has diagonal 25 cm and one side 7 cm. Find the area.'), m('168 cm²')],
      [m('<b>Task 4.</b> A square has diagonal 10 cm. Find its side and area.'), m('5' + sr('2') + ' cm') + ', ' + m('50 cm²')],
      [m('<b>Task 5.</b> An isosceles trapezium has bases 5 cm and 17 cm and legs 10 cm. Find the height and area.'), m('h = 8 cm') + ', ' + m('S = 88 cm²')],
      [m('<b>Task 6.</b> MN ∥ BC, AM = 4, AB = 10, AC = 15. Find AN.'), m('6')],
      [m('<b>Task 7.</b> Prove that a parallelogram with equal diagonals is a rectangle.'), 'Bisecting + equal ⟹ ' + m('△ABC ≅ △BAD') + ' by SSS ⟹ ' + m('∠A = ∠B = 90°') + '.']
    ],
    hard: [
      [m('Find the flaw: “the diagonals of a parallelogram are equal”.'), 'They bisect each other; equal needs a rectangle.'],
      [m('Find the flaw: “AC = BD, therefore ABCD is a rectangle”.'), 'Only if ' + m('ABCD') + ' is already a parallelogram — an isosceles trapezium is a counter-example.'],
      [m('Find the flaw: “MN ∥ BC, AM = 3, AB = 12, so AN : NC = 3 : 12”.'), 'Part-to-whole mixed with part-to-part. Use ' + m(f('3', '12') + ' = ' + f('AN', 'AC')) + ' or ' + m(f('3', '9') + ' = ' + f('AN', 'NC')) + '.'],
      [m('Find the flaw: “bases 8 and 14, so the midline is 7”.'), 'That is the triangle rule. For a trapezium the midline is the average: ' + m('11') + '.'],
      [m('Find the flaw: “a rhombus is a rectangle because both are parallelograms”.'), 'Both are parallelograms, but neither is a special case of the other — only the square is both.'],
      [m('Find the flaw: “opposite sides equal, therefore a rectangle”.'), 'Opposite sides equal gives a parallelogram (Test 2); a rectangle needs a right angle or equal diagonals as well.'],
      [m('Find the flaw: “three lines evenly spaced by eye cut equal segments, by Thales”.'), 'Thales’ theorem requires the lines to be <b>parallel</b>, which “evenly spaced by eye” does not establish.']
    ]
  },
  hwTitle: 'After the control work',
  hwNote: 'Re-solve, in full, every task you lost marks on. Quarter II begins with Pythagoras’ theorem.',
  homework: [
    m('Re-solve every task you lost marks on, with a labelled figure and a stated reason.'),
    m('Write out the four errors from the Hard set in your own words.'),
    m('Revise the properties of a right-angled triangle from Grade 7 — the next chapter opens with Pythagoras.')
  ]
});

/* ==================================================================
   QUARTER II · 14 hours
   Geometry 8, Chapter II — relations between the sides and angles
   of a right-angled triangle (Темы 15–30)
   ================================================================== */

/* ============================== 14 ============================== */
G8_GEO.push({
  id: 'geo-14', stream: 'geo', grade: 8, quarter: 2, lessons: '19', hours: 1,
  title: 'Sine, cosine, tangent and cotangent of an acute angle',
  subtitle: 'Four ratios of sides that depend only on the angle — the whole of trigonometry starts here.',
  uz: 'Geometry 8, Тема 15', uzPage: 'Тема 15, pp. 35–37',
  cam: 'Stage 9 · beyond', camPage: 'Extension beyond Stage 9', wb: '—',
  objectives: [
    'Name the hypotenuse and the sides opposite and adjacent to a given acute angle.',
    'Define ' + m('sin, cos, tan, cot') + ' as ratios of sides.',
    'Explain why the ratios depend on the angle and not on the size of the triangle.',
    'Calculate the four ratios from given side lengths.'
  ],
  terms: [
    ['Right-angled triangle', 'To‘g‘ri burchakli uchburchak', 'Прямоугольный треугольник'],
    ['Hypotenuse', 'Gipotenuza', 'Гипотенуза'],
    ['Leg (cathetus)', 'Katet', 'Катет'],
    ['Opposite side', 'Qarshi yotgan katet', 'Противолежащий катет'],
    ['Adjacent side', 'Yondosh katet', 'Прилежащий катет'],
    ['Sine', 'Sinus', 'Синус'],
    ['Cosine', 'Kosinus', 'Косинус'],
    ['Tangent', 'Tangens', 'Тангенс'],
    ['Cotangent', 'Kotangens', 'Котангенс'],
    ['Ratio', 'Nisbat', 'Отношение'],
    ['Acute angle', 'O‘tkir burchak', 'Острый угол']
  ],
  sections: [
    {
      h: 'Naming the sides',
      html: `<p>In a right-angled triangle the side opposite the right angle is the <b>hypotenuse</b> —
      always the longest. The other two are the <b>legs</b>.</p>
      {{fig:rightTriangle:Right angle at C. The legs are a and b; the hypotenuse is c. Which leg is “opposite” depends on which acute angle you are looking at.}}
      <p>Fix your attention on the acute angle ${m('α')} at ${m('A')}. Then:</p>
      <ul>
        <li>${m('a = BC')} is the side <b>opposite</b> ${m('α')} — it does not touch ${m('A')};</li>
        <li>${m('b = AC')} is the side <b>adjacent</b> to ${m('α')} — it does touch ${m('A')}, and it is not the hypotenuse;</li>
        <li>${m('c = AB')} is the <b>hypotenuse</b>.</li>
      </ul>
      <div class="warn"><span class="wl">“Opposite” moves</span>
      Look at the other acute angle ${m('β')} and the roles swap: ${m('b')} becomes opposite and
      ${m('a')} becomes adjacent. The hypotenuse never changes.</div>`
    },
    {
      h: 'The four definitions',
      html: `{{fig:trigRatios:The four ratios, all measured for the angle α at A.}}
      ${eq(m('sin α = ' + f('opposite', 'hypotenuse') + ' = ' + f('a', 'c')) + ' &nbsp;&nbsp;&nbsp; ' +
           m('cos α = ' + f('adjacent', 'hypotenuse') + ' = ' + f('b', 'c')), true)}
      ${eq(m('tan α = ' + f('opposite', 'adjacent') + ' = ' + f('a', 'b')) + ' &nbsp;&nbsp;&nbsp; ' +
           m('cot α = ' + f('adjacent', 'opposite') + ' = ' + f('b', 'a')), true)}
      <p>Two immediate consequences, both worth saying aloud:</p>
      <ul>
        <li>${m('tan α · cot α = 1')} — the two are reciprocals.</li>
        <li>${m('0 < sin α < 1')} and ${m('0 < cos α < 1')}, because a leg is always shorter than the
        hypotenuse. A sine of 1.2 is always an arithmetic error.</li>
      </ul>`
    },
    {
      h: 'Why the ratios depend only on the angle',
      html: `<p>Draw two right-angled triangles with the same acute angle ${m('α')}. Their third angles
      are equal too (both ${m('90° − α')}), so the triangles are <b>similar</b> — one is an enlargement
      of the other. Enlargement multiplies every side by the same scale factor, and in a ratio of two
      sides that factor cancels.</p>
      ${eq(m(f('a', 'c') + ' = ' + f('k · a', 'k · c')), true)}
      <p>So ${m('sin α')} is a property of the <b>angle</b>, not of the triangle. That is exactly why a
      single table of values can serve every right-angled triangle in the world.</p>`
    }
  ],
  examples: [
    {
      q: m('In a right triangle a = 3, b = 4, c = 5. Find sin α, cos α, tan α and cot α.'),
      steps: [
        [m('sin α = ' + f('a', 'c') + ' = ' + f('3', '5') + ' = 0.6'), 'Opposite over hypotenuse.'],
        [m('cos α = ' + f('b', 'c') + ' = ' + f('4', '5') + ' = 0.8'), 'Adjacent over hypotenuse.'],
        [m('tan α = ' + f('a', 'b') + ' = ' + f('3', '4') + ' = 0.75'), 'Opposite over adjacent.'],
        [m('cot α = ' + f('b', 'a') + ' = ' + f('4', '3')), 'The reciprocal of the tangent.']
      ],
      ans: m('0.6, 0.8, 0.75, ' + f('4', '3'))
    },
    {
      q: m('In a right triangle sin α = ' + f('5', '13') + '. Find cos α and tan α.'),
      steps: [
        [m('opposite = 5, hypotenuse = 13'), 'Read the ratio as two side lengths.'],
        [m('b = ' + sr('13<sup>2</sup> − 5<sup>2</sup>') + ' = ' + sr('144') + ' = 12'), 'Pythagoras gives the third side.'],
        [m('cos α = ' + f('12', '13')), ''],
        [m('tan α = ' + f('5', '12')), '']
      ],
      ans: m('cos α = ' + f('12', '13') + ', tan α = ' + f('5', '12'))
    }
  ],
  modelNote: 'Move the angle slider and watch the ratios change while the shape stays a right triangle.',
  interactive: { type: 'rightTriangle' },
  quiz: [
    { q: m('sin α') + ' is:', a: [m(f('adjacent', 'hypotenuse')), m(f('opposite', 'hypotenuse')), m(f('opposite', 'adjacent')), m(f('hypotenuse', 'opposite'))], c: 1, why: 'Sine is opposite over hypotenuse.' },
    { q: 'For an acute angle, ' + m('sin α') + ' is always:', a: ['greater than 1', 'between 0 and 1', 'equal to 1', 'negative'], c: 1, why: 'A leg is shorter than the hypotenuse.' },
    { q: m('tan α · cot α') + ' equals:', a: [m('0'), m('1'), m('2'), m('sin α')], c: 1, why: 'They are reciprocals: (a/b)(b/a) = 1.' },
    { q: 'Two right triangles have the same acute angle. Their sines are:', a: ['different', 'equal', 'reciprocal', 'not comparable'], c: 1, why: 'The triangles are similar, so the ratio is the same.' }
  ],
  practice: {
    easy: [
      [m('a = 3, c = 5. Find sin α.'), m('0.6')],
      [m('b = 4, c = 5. Find cos α.'), m('0.8')],
      [m('a = 3, b = 4. Find tan α.'), m('0.75')],
      [m('a = 3, b = 4. Find cot α.'), m(f('4', '3'))],
      [m('Which side is opposite the right angle?'), 'The hypotenuse.'],
      [m('Can sin α = 1.2 for an acute angle?'), 'No — the sine of an acute angle is less than 1.'],
      [m('a = 6, c = 10. Find sin α.'), m('0.6')]
    ],
    med: [
      [m('a = 5, b = 12, c = 13. Find all four ratios for α.'), m('sin = ' + f('5', '13') + ', cos = ' + f('12', '13') + ', tan = ' + f('5', '12') + ', cot = ' + f('12', '5'))],
      [m('sin α = ' + f('5', '13') + '. Find cos α.'), m(f('12', '13'))],
      [m('cos α = ' + f('8', '17') + '. Find sin α.'), m(f('15', '17'))],
      [m('tan α = ' + f('3', '4') + '. Find cot α.'), m(f('4', '3'))],
      [m('a = 8, c = 17. Find b and cos α.'), m('b = 15') + ', ' + m('cos α = ' + f('15', '17'))],
      [m('In the same triangle, write sin β in terms of the sides.'), m('sin β = ' + f('b', 'c'))],
      [m('a = 9, b = 12. Find c and sin α.'), m('c = 15') + ', ' + m('sin α = 0.6')]
    ],
    hard: [
      [m('sin α = ' + f('7', '25') + '. Find cos α, tan α and cot α.'), m('cos = ' + f('24', '25') + ', tan = ' + f('7', '24') + ', cot = ' + f('24', '7'))],
      [m('tan α = 1. What is α, and what are sin α and cos α?'), m('α = 45°') + ', both ratios ' + m(f(sr('2'), '2'))],
      [m('Show that sin α = cos β in a right triangle with acute angles α and β.'), 'Both equal ' + m(f('a', 'c')) + ' for the same leg, since the two angles are complementary.'],
      [m('A right triangle has legs in the ratio 1 : 2. Find tan α for the smaller angle.'), m('tan α = ' + f('1', '2') + ' = 0.5')],
      [m('c = 20 and sin α = 0.6. Find both legs.'), m('a = 12, b = 16')],
      [m('Prove that tan α = ' + f('sin α', 'cos α')), m(f('a/c', 'b/c') + ' = ' + f('a', 'b') + ' = tan α'), ],
      [m('A right triangle has cot α = 2.4. Find tan α and the ratio of the legs.'), m('tan α = ' + f('5', '12')) + '; legs in the ratio ' + m('5 : 12')]
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Тема 15, pp. 35–37. Draw and label a triangle for every question.',
  homework: [
    m('a = 7, b = 24, c = 25. Find the four ratios for α.'),
    m('sin α = 0.8. Find cos α and tan α.'),
    m('cos α = ' + f('20', '29') + '. Find sin α.'),
    m('a = 15, c = 17. Find b, then tan α.'),
    m('Explain in two sentences why sin α does not depend on the size of the triangle.')
  ]
});

/* ============================== 15 ============================== */
G8_GEO.push({
  id: 'geo-15', stream: 'geo', grade: 8, quarter: 2, lessons: '20–21', hours: 2,
  title: 'Pythagoras’ theorem, and different proofs of it',
  subtitle: 'The most famous relation in mathematics, and three ways of seeing why it must be true.',
  uz: 'Geometry 8, Тема 17', uzPage: 'Тема 17, pp. 41–43',
  cam: 'Stage 9 · 5.5', camPage: 'Learner’s Book pp. 124–126', wb: 'Workbook 5.5',
  objectives: [
    'State Pythagoras’ theorem precisely.',
    'Prove it by the square-rearrangement method.',
    'Find the hypotenuse or a leg from the other two sides.',
    'Recognise the common Pythagorean triples.'
  ],
  terms: [
    ['Pythagoras’ theorem', 'Pifagor teoremasi', 'Теорема Пифагора'],
    ['Hypotenuse', 'Gipotenuza', 'Гипотенуза'],
    ['Leg (cathetus)', 'Katet', 'Катет'],
    ['Square of a number', 'Sonning kvadrati', 'Квадрат числа'],
    ['Area', 'Yuza', 'Площадь'],
    ['Proof', 'Isbot', 'Доказательство'],
    ['Rearrangement', 'Qayta joylashtirish', 'Перекладывание'],
    ['Pythagorean triple', 'Pifagor uchligi', 'Пифагорова тройка'],
    ['Right angle', 'To‘g‘ri burchak', 'Прямой угол']
  ],
  sections: [
    {
      h: 'The theorem',
      html: `<div class="keybox"><div class="klabel">Theorem</div>
      In a right-angled triangle the square of the hypotenuse equals the sum of the squares of the legs:
      ${eq(m('a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>'))}</div>
      {{fig:pythagorasSquares:The two smaller squares together have exactly the area of the large one.}}
      <p>The picture is the statement: build a square on each side, and the two small ones together fill
      the big one exactly.</p>`
    },
    {
      h: 'Proof 1 — the rearrangement',
      html: `{{fig:pythagorasProof:Four copies of the triangle inside a square of side a + b. What is left in the middle is a square of side c.}}
      <p>Take a square of side ${m('a + b')} and place four copies of the right triangle inside it, one
      in each corner. The area can be counted two ways:</p>
      ${eq(m('(a + b)<sup>2</sup> = 4 · ' + f('1', '2') + 'ab + c<sup>2</sup>'), true)}
      ${eq(m('a<sup>2</sup> + 2ab + b<sup>2</sup> = 2ab + c<sup>2</sup>'))}
      ${eq(m('a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>') + ' &nbsp;∎')}
      <p>The middle really is a square: each of its angles is ${m('180° − α − β = 180° − 90° = 90°')}, and
      all four sides are hypotenuses of congruent triangles.</p>`
    },
    {
      h: 'Proof 2 — by similar triangles',
      html: `<p>Drop the height ${m('CH')} from the right angle onto the hypotenuse. It cuts the triangle
      into two smaller triangles, each similar to the original (they share an acute angle and have a
      right angle). Comparing sides gives ${m('a<sup>2</sup> = c · BH')} and
      ${m('b<sup>2</sup> = c · AH')}. Adding:</p>
      ${eq(m('a<sup>2</sup> + b<sup>2</sup> = c(BH + AH) = c · c = c<sup>2</sup>') + ' &nbsp;∎', true)}
      <p>This proof is shorter, and it produces two useful formulas on the way.</p>`
    },
    {
      h: 'Using the theorem',
      html: `<p>To find the <b>hypotenuse</b>, add and take the root. To find a <b>leg</b>, subtract first:</p>
      ${eq(m('c = ' + sr('a<sup>2</sup> + b<sup>2</sup>')) + ' &nbsp;&nbsp;&nbsp; ' +
           m('a = ' + sr('c<sup>2</sup> − b<sup>2</sup>')), true)}
      <div class="keybox"><div class="klabel">Triples worth recognising on sight</div>
      ${m('3, 4, 5')} · ${m('5, 12, 13')} · ${m('8, 15, 17')} · ${m('7, 24, 25')} · ${m('20, 21, 29')}
      — and every multiple of them, such as ${m('6, 8, 10')} and ${m('9, 12, 15')}.</div>
      <div class="warn"><span class="wl">The hypotenuse is the longest side</span>
      If your answer for ${m('c')} comes out smaller than a leg, you have added where you should have
      subtracted.</div>`
    }
  ],
  examples: [
    {
      q: 'The legs of a right triangle are 9 cm and 12 cm. Find the hypotenuse.',
      steps: [
        [m('c<sup>2</sup> = 9<sup>2</sup> + 12<sup>2</sup>'), 'Pythagoras.'],
        [m('= 81 + 144 = 225'), ''],
        [m('c = ' + sr('225') + ' = 15 cm'), 'Recognise 9, 12, 15 — three times 3, 4, 5.']
      ],
      ans: m('15 cm')
    },
    {
      q: 'The hypotenuse is 26 cm and one leg is 10 cm. Find the other leg.',
      steps: [
        [m('b<sup>2</sup> = 26<sup>2</sup> − 10<sup>2</sup>'), 'Looking for a leg, so subtract.'],
        [m('= 676 − 100 = 576'), ''],
        [m('b = 24 cm'), 'The triple 10, 24, 26 is twice 5, 12, 13.']
      ],
      ans: m('24 cm')
    },
    {
      q: 'A ladder 5 m long leans against a wall with its foot 3 m from the wall. How high does it reach?',
      steps: [
        ['The wall, the ground and the ladder form a right triangle.', 'The ladder is the hypotenuse.'],
        [m('h<sup>2</sup> = 5<sup>2</sup> − 3<sup>2</sup> = 25 − 9 = 16'), ''],
        [m('h = 4 m'), '']
      ],
      ans: m('4 m')
    }
  ],
  modelNote: 'Change both legs and watch a² + b² and c² stay equal to the last digit.',
  interactive: { type: 'pythagoras' },
  quiz: [
    { q: 'Pythagoras’ theorem says:', a: [m('a + b = c'), m('a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>'), m('a<sup>2</sup> − b<sup>2</sup> = c<sup>2</sup>'), m('ab = c<sup>2</sup>')], c: 1, why: 'The squares of the legs add to the square of the hypotenuse.' },
    { q: 'Legs 6 and 8. The hypotenuse is:', a: [m('10'), m('14'), m('48'), m('7')], c: 0, why: '36 + 64 = 100, so c = 10.' },
    { q: 'Hypotenuse 13, one leg 5. The other leg is:', a: [m('8'), m('12'), m('18'), m('14')], c: 1, why: '169 − 25 = 144, so the leg is 12.' },
    { q: 'Which is a Pythagorean triple?', a: [m('2, 3, 4'), m('5, 12, 13'), m('4, 5, 6'), m('6, 7, 8')], c: 1, why: '25 + 144 = 169 ✓' }
  ],
  practice: {
    easy: [
      [m('Legs 3 and 4. Find the hypotenuse.'), m('5')],
      [m('Legs 6 and 8. Find the hypotenuse.'), m('10')],
      [m('Legs 5 and 12. Find the hypotenuse.'), m('13')],
      [m('Hypotenuse 5, one leg 3. Find the other leg.'), m('4')],
      [m('Hypotenuse 13, one leg 12. Find the other leg.'), m('5')],
      [m('Legs 9 and 12. Find the hypotenuse.'), m('15')],
      [m('Is 3, 4, 5 a Pythagorean triple?'), 'Yes — ' + m('9 + 16 = 25') + '.']
    ],
    med: [
      [m('Legs 8 and 15. Find the hypotenuse.'), m('17')],
      [m('Legs 7 and 24. Find the hypotenuse.'), m('25')],
      [m('Hypotenuse 26, one leg 10. Find the other leg.'), m('24')],
      [m('Hypotenuse 17, one leg 8. Find the other leg.'), m('15')],
      [m('A ladder 5 m long has its foot 3 m from a wall. How high does it reach?'), m('4 m')],
      [m('A rectangle is 9 cm by 12 cm. Find its diagonal.'), m('15 cm')],
      [m('Legs 1 and 1. Find the hypotenuse.'), m(sr('2'))]
    ],
    hard: [
      [m('An isosceles triangle has equal sides 13 and base 10. Find its height.'), m('h = ' + sr('169 − 25') + ' = 12')],
      [m('An equilateral triangle has side 6. Find its height.'), m('h = ' + sr('36 − 9') + ' = 3' + sr('3'))],
      [m('A rhombus has diagonals 16 and 30. Find its side.'), m(sr('64 + 225') + ' = 17')],
      [m('A right triangle has hypotenuse 20 and one leg 12. Find its area.'), 'other leg ' + m('16') + ', area ' + m('96')],
      [m('A ladder 13 m long reaches 12 m up a wall. How far is its foot from the wall?'), m('5 m')],
      [m('A trapezium has bases 6 and 16 and equal legs 13. Find its height.'), m(f('16 − 6', '2') + ' = 5') + ', so ' + m('h = 12')],
      [m('Complete the proof: the middle shape in the rearrangement is a square. Why are its angles 90°?'), 'Each is ' + m('180° − α − β') + ', and ' + m('α + β = 90°') + ' in the right triangle.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Geometry 8, Тема 17, pp. 41–43. Draw a labelled figure for questions 4–6.',
  homework: [
    m('Legs 20 and 21. Find the hypotenuse.'),
    m('Hypotenuse 25, one leg 7. Find the other leg.'),
    m('A rectangle is 8 cm by 15 cm. Find its diagonal.'),
    m('An isosceles triangle has equal sides 10 and base 12. Find its height.'),
    m('A ladder 10 m long has its foot 6 m from a wall. How high does it reach?'),
    m('Write out the rearrangement proof of Pythagoras’ theorem with a labelled figure.')
  ]
});

/* ============================== 16 ============================== */
G8_GEO.push({
  id: 'geo-16', stream: 'geo', grade: 8, quarter: 2, lessons: '22–23', hours: 2,
  title: 'The converse of Pythagoras’ theorem, and applications',
  subtitle: 'Running the theorem backwards to test for a right angle — and using it on real shapes.',
  uz: 'Geometry 8, Темы 18–19', uzPage: 'Темы 18–19, pp. 44–48',
  cam: 'Stage 9 · 5.5', camPage: 'Learner’s Book pp. 124–126', wb: 'Workbook 5.5',
  objectives: [
    'State the converse of Pythagoras’ theorem and use it to test a triangle.',
    'Classify a triangle as acute, right or obtuse from its three sides.',
    'Apply Pythagoras to rectangles, rhombuses, trapeziums and isosceles triangles.',
    'Solve practical distance problems.'
  ],
  terms: [
    ['Converse theorem', 'Teskari teorema', 'Обратная теорема'],
    ['Test for a right angle', 'To‘g‘ri burchak alomati', 'Признак прямого угла'],
    ['Acute triangle', 'O‘tkir burchakli uchburchak', 'Остроугольный треугольник'],
    ['Obtuse triangle', 'O‘tmas burchakli uchburchak', 'Тупоугольный треугольник'],
    ['Longest side', 'Eng uzun tomon', 'Наибольшая сторона'],
    ['Diagonal', 'Diagonal', 'Диагональ'],
    ['Height', 'Balandlik', 'Высота'],
    ['Distance', 'Masofa', 'Расстояние'],
    ['Apply', 'Qo‘llash', 'Применить']
  ],
  sections: [
    {
      h: 'The converse',
      html: `<div class="keybox"><div class="klabel">Converse theorem</div>
      If the sides of a triangle satisfy ${m('a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>')}, where
      ${m('c')} is the longest side, then the triangle is <b>right-angled</b>, with the right angle
      opposite ${m('c')}.</div>
      <p>The original theorem says “right angle ⟹ the relation”. The converse says “the relation ⟹ a
      right angle”. Both are true here, but that is a piece of luck, not a rule — most theorems have a
      false converse, which is exactly why the two directions get separate names.</p>
      <p><b>How to use it.</b> Square all three sides. If the two smaller squares add to the largest, the
      triangle is right-angled.</p>`
    },
    {
      h: 'Classifying any triangle',
      html: `<p>Comparing ${m('a<sup>2</sup> + b<sup>2</sup>')} with ${m('c<sup>2</sup>')} tells you more
      than just “right or not”:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Comparison</th><th>The triangle is</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>${m('a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>')}</td><td>right-angled</td><td>${m('3, 4, 5')}</td></tr>
        <tr><td>${m('a<sup>2</sup> + b<sup>2</sup> > c<sup>2</sup>')}</td><td>acute-angled</td><td>${m('4, 5, 6')}</td></tr>
        <tr><td>${m('a<sup>2</sup> + b<sup>2</sup> < c<sup>2</sup>')}</td><td>obtuse-angled</td><td>${m('2, 3, 4')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Always test with the longest side as c</span>
      For ${m('5, 12, 13')} the test is ${m('25 + 144 = 169')} ✓. Testing ${m('25 + 169')} against
      ${m('144')} proves nothing.</div>`
    },
    {
      h: 'The four standard applications',
      html: `<ul>
        <li><b>Diagonal of a rectangle.</b> ${m('d = ' + sr('a<sup>2</sup> + b<sup>2</sup>'))}.</li>
        <li><b>Height of an isosceles triangle.</b> Drop the height to the base; it bisects the base,
        so ${m('h = ' + sr('side<sup>2</sup> − (base/2)<sup>2</sup>'))}.</li>
        <li><b>Side of a rhombus.</b> The half-diagonals are perpendicular legs:
        ${m('a = ' + sr('(d₁/2)<sup>2</sup> + (d₂/2)<sup>2</sup>'))}.</li>
        <li><b>Height of an isosceles trapezium.</b> Each end triangle has horizontal leg
        ${m(f('a − b', '2'))}.</li>
      </ul>
      {{fig:ladder:The ladder problem: the wall, the ground and the ladder always form a right triangle.}}
      <p>The practical version is always the same picture — a vertical, a horizontal and a slant.</p>`
    }
  ],
  examples: [
    {
      q: 'Is the triangle with sides 8, 15, 17 right-angled?',
      steps: [
        [m('longest side c = 17'), 'Identify it first.'],
        [m('8<sup>2</sup> + 15<sup>2</sup> = 64 + 225 = 289'), ''],
        [m('17<sup>2</sup> = 289'), ''],
        ['They are equal, so by the converse the triangle is right-angled.', 'The right angle is opposite the side 17.']
      ],
      ans: 'Yes — right-angled.'
    },
    {
      q: 'Classify the triangle with sides 4, 5, 6.',
      steps: [
        [m('c = 6'), 'The longest side.'],
        [m('4<sup>2</sup> + 5<sup>2</sup> = 16 + 25 = 41'), ''],
        [m('6<sup>2</sup> = 36'), ''],
        [m('41 > 36'), 'The sum of the smaller squares is larger.']
      ],
      ans: 'Acute-angled.'
    },
    {
      q: 'A rhombus has diagonals 10 cm and 24 cm. Find its side and perimeter.',
      steps: [
        [m('half-diagonals 5 and 12'), 'The diagonals bisect each other.'],
        ['They are perpendicular, so they are the legs of a right triangle.', 'The side of the rhombus is the hypotenuse.'],
        [m('a = ' + sr('25 + 144') + ' = 13 cm'), ''],
        [m('P = 4 · 13 = 52 cm'), '']
      ],
      ans: m('a = 13 cm, P = 52 cm')
    }
  ],
  modelNote: 'Set the legs to 8 and 15 and read c — then ask the class to name the triple.',
  interactive: { type: 'pythagoras', title: 'Test a triangle for a right angle' },
  quiz: [
    { q: 'Sides 9, 40, 41. The triangle is:', a: ['right-angled', 'acute', 'obtuse', 'impossible'], c: 0, why: '81 + 1600 = 1681 = 41².' },
    { q: 'Sides 2, 3, 4. The triangle is:', a: ['right-angled', 'acute', 'obtuse', 'impossible'], c: 2, why: '4 + 9 = 13 < 16, so the largest angle is obtuse.' },
    { q: 'To test sides 7, 24, 25 you compare:', a: [m('7<sup>2</sup> + 25<sup>2</sup>') + ' with ' + m('24<sup>2</sup>'), m('7<sup>2</sup> + 24<sup>2</sup>') + ' with ' + m('25<sup>2</sup>'), m('24<sup>2</sup> + 25<sup>2</sup>') + ' with ' + m('7<sup>2</sup>'), 'any of these'], c: 1, why: 'The longest side must be the one squared alone.' },
    { q: 'A rhombus with diagonals 6 and 8 has side:', a: [m('5'), m('7'), m('10'), m('14')], c: 0, why: 'Half-diagonals 3 and 4 give hypotenuse 5.' }
  ],
  practice: {
    easy: [
      [m('Is 3, 4, 5 right-angled?'), 'Yes.'],
      [m('Is 5, 12, 13 right-angled?'), 'Yes.'],
      [m('Is 4, 5, 6 right-angled?'), 'No — it is acute.'],
      [m('Is 2, 3, 4 right-angled?'), 'No — it is obtuse.'],
      [m('A rectangle is 6 by 8. Find its diagonal.'), m('10')],
      [m('A rhombus has diagonals 6 and 8. Find its side.'), m('5')],
      [m('Which side must be squared alone in the test?'), 'The longest one.']
    ],
    med: [
      [m('Is 8, 15, 17 right-angled?'), 'Yes.'],
      [m('Classify the triangle with sides 4, 5, 6.'), 'Acute.'],
      [m('Classify the triangle with sides 5, 6, 10.'), m('25 + 36 = 61 < 100') + ' — obtuse.'],
      [m('A rhombus has diagonals 10 and 24. Find its side and perimeter.'), m('13') + ', ' + m('52')],
      [m('An isosceles triangle has equal sides 10 and base 16. Find its height.'), m('6')],
      [m('A rectangle has diagonal 25 and one side 7. Find the other side.'), m('24')],
      [m('A ladder 17 m long has its foot 8 m from a wall. How high does it reach?'), m('15 m')]
    ],
    hard: [
      [m('An isosceles trapezium has bases 8 and 20 and legs 10. Find its height and area.'), m(f('20 − 8', '2') + ' = 6') + ', ' + m('h = 8') + ', ' + m('S = 112')],
      [m('An equilateral triangle has side 10. Find its height and area.'), m('h = 5' + sr('3')) + ', ' + m('S = 25' + sr('3'))],
      [m('A right triangle has perimeter 30 and hypotenuse 13. Find its legs.'), m('a + b = 17') + ' and ' + m('a<sup>2</sup> + b<sup>2</sup> = 169') + ' give ' + m('ab = 60') + ': legs ' + m('5') + ' and ' + m('12') + '.'],
      [m('Two points are 3 km east and 4 km north of a village. How far apart are they?'), m('5 km')],
      [m('Show that 20, 21, 29 is a Pythagorean triple.'), m('400 + 441 = 841 = 29<sup>2</sup>')],
      [m('A rhombus has side 25 and one diagonal 14. Find the other diagonal.'), 'half-diagonal ' + m(sr('625 − 49') + ' = 24') + ', so the diagonal is ' + m('48') + '.'],
      [m('For which x is the triangle with sides 6, 8, x right-angled?'), m('x = 10') + ' (hypotenuse) or ' + m('x = 2' + sr('7')) + ' (leg).']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Geometry 8, Темы 18–19, pp. 44–48.',
  homework: [
    m('Is 9, 12, 15 right-angled? Show the test.'),
    m('Classify the triangle with sides 7, 8, 12.'),
    m('A rhombus has diagonals 16 and 30. Find its side and perimeter.'),
    m('An isosceles triangle has equal sides 17 and base 16. Find its height.'),
    m('A rectangle has diagonal 41 and one side 9. Find the other side and the area.'),
    m('A ladder 25 m long reaches 24 m up a wall. How far is its foot from the wall?')
  ]
});

/* ============================== 17 ============================== */
G8_GEO.push({
  id: 'geo-17', stream: 'geo', grade: 8, quarter: 2, lessons: '24', hours: 1,
  title: 'The basic trigonometric identity',
  subtitle: 'Pythagoras’ theorem, divided through by c² — and suddenly it is a statement about angles.',
  uz: 'Geometry 8, Темы 20–21', uzPage: 'Темы 20–21, pp. 49–51',
  cam: 'Stage 9 · beyond', camPage: 'Extension beyond Stage 9', wb: '—',
  objectives: [
    'Derive ' + m('sin²α + cos²α = 1') + ' from Pythagoras’ theorem.',
    'Find one ratio from another using the identity.',
    'Use the corollaries ' + m('tan α = sin α / cos α') + ' and ' + m('tan α · cot α = 1') + '.',
    'Choose the right sign — for an acute angle every ratio is positive.'
  ],
  terms: [
    ['Identity', 'Ayniyat', 'Тождество'],
    ['Basic trigonometric identity', 'Asosiy trigonometrik ayniyat', 'Основное тригонометрическое тождество'],
    ['Corollary', 'Natija', 'Следствие'],
    ['Square of the sine', 'Sinusning kvadrati', 'Квадрат синуса'],
    ['Derive', 'Keltirib chiqarish', 'Вывести'],
    ['Divide through', 'Hadma-had bo‘lish', 'Разделить почленно'],
    ['Positive', 'Musbat', 'Положительный'],
    ['Substitute', 'O‘rniga qo‘yish', 'Подставить']
  ],
  sections: [
    {
      h: 'The derivation',
      html: `<p>Start from Pythagoras in the triangle of the last lesson and divide every term by
      ${m('c<sup>2</sup>')}:</p>
      ${eq(m('a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>'))}
      ${eq(m(f('a<sup>2</sup>', 'c<sup>2</sup>') + ' + ' + f('b<sup>2</sup>', 'c<sup>2</sup>') + ' = 1'))}
      ${eq(m('(' + f('a', 'c') + ')<sup>2</sup> + (' + f('b', 'c') + ')<sup>2</sup> = 1'))}
      <div class="keybox"><div class="klabel">The basic trigonometric identity</div>
      ${eq(m('sin<sup>2</sup>α + cos<sup>2</sup>α = 1'))}
      true for <b>every</b> acute angle ${m('α')}.</div>
      <p>Notation: ${m('sin<sup>2</sup>α')} means ${m('(sin α)<sup>2</sup>')}, never ${m('sin(α<sup>2</sup>)')}.</p>`
    },
    {
      h: 'Three corollaries',
      html: `${eq(m('sin α = ' + sr('1 − cos<sup>2</sup>α')) + ' &nbsp;&nbsp;·&nbsp;&nbsp; ' +
           m('cos α = ' + sr('1 − sin<sup>2</sup>α')), true)}
      <p>The positive root is the right one every time, because for an acute angle all four ratios are
      positive.</p>
      ${eq(m('tan α = ' + f('sin α', 'cos α')) + ' &nbsp;&nbsp;·&nbsp;&nbsp; ' +
           m('cot α = ' + f('cos α', 'sin α')) + ' &nbsp;&nbsp;·&nbsp;&nbsp; ' +
           m('tan α · cot α = 1'), true)}
      <p>Proof of the first: ${m(f('sin α', 'cos α') + ' = ' + f('a/c', 'b/c') + ' = ' + f('a', 'b') + ' = tan α')}.
      The ${m('c')} cancels.</p>`
    },
    {
      h: 'Using it',
      html: `<p>Given one ratio, the identity produces all the others without ever drawing a triangle:</p>
      ${eq(m('sin α = 0.6 ⟹ cos<sup>2</sup>α = 1 − 0.36 = 0.64 ⟹ cos α = 0.8'), true)}
      <p>and then ${m('tan α = ' + f('0.6', '0.8') + ' = 0.75')}.</p>
      <div class="warn"><span class="wl">A quick sanity check</span>
      Both ${m('sin α')} and ${m('cos α')} must lie strictly between 0 and 1, and
      ${m('sin<sup>2</sup>α + cos<sup>2</sup>α')} must come to exactly 1. If it does not, go back.</div>`
    }
  ],
  examples: [
    {
      q: m('Given sin α = ' + f('3', '5') + ', find cos α and tan α.'),
      steps: [
        [m('cos<sup>2</sup>α = 1 − (' + f('3', '5') + ')<sup>2</sup> = 1 − ' + f('9', '25') + ' = ' + f('16', '25')), 'The identity.'],
        [m('cos α = ' + f('4', '5')), 'Positive root — the angle is acute.'],
        [m('tan α = ' + f('sin α', 'cos α') + ' = ' + f('3/5', '4/5') + ' = ' + f('3', '4')), '']
      ],
      ans: m('cos α = 0.8, tan α = 0.75')
    },
    {
      q: m('Given cos α = ' + f('5', '13') + ', find sin α and cot α.'),
      steps: [
        [m('sin<sup>2</sup>α = 1 − ' + f('25', '169') + ' = ' + f('144', '169')), ''],
        [m('sin α = ' + f('12', '13')), ''],
        [m('cot α = ' + f('cos α', 'sin α') + ' = ' + f('5', '12')), '']
      ],
      ans: m('sin α = ' + f('12', '13') + ', cot α = ' + f('5', '12'))
    },
    {
      q: m('Simplify (1 − sin α)(1 + sin α)'),
      steps: [
        [m('= 1 − sin<sup>2</sup>α'), 'Difference of two squares.'],
        [m('sin<sup>2</sup>α + cos<sup>2</sup>α = 1'), 'so ' + m('1 − sin<sup>2</sup>α = cos<sup>2</sup>α')],
        [m('= cos<sup>2</sup>α'), '']
      ],
      ans: m('cos<sup>2</sup>α')
    }
  ],
  modelNote: 'Move the angle and watch sin² + cos² stay at 1.00 for every position.',
  interactive: { type: 'rightTriangle', title: 'sin, cos and the identity' },
  quiz: [
    { q: m('sin<sup>2</sup>α + cos<sup>2</sup>α') + ' equals:', a: [m('0'), m('1'), m('2'), m('tan α')], c: 1, why: 'Pythagoras divided by c².' },
    { q: 'If ' + m('sin α = 0.6') + ' then ' + m('cos α') + ' is:', a: [m('0.4'), m('0.8'), m('0.36'), m('1.4')], c: 1, why: 'cos²α = 1 − 0.36 = 0.64.' },
    { q: m('tan α') + ' equals:', a: [m(f('cos α', 'sin α')), m(f('sin α', 'cos α')), m('sin α · cos α'), m('1 − cos α')], c: 1, why: 'The c cancels in (a/c) ÷ (b/c).' },
    { q: m('1 − sin<sup>2</sup>α') + ' equals:', a: [m('cos<sup>2</sup>α'), m('tan<sup>2</sup>α'), m('sin α'), m('0')], c: 0, why: 'Rearrange the basic identity.' }
  ],
  practice: {
    easy: [
      [m('sin α = 0.6. Find cos α.'), m('0.8')],
      [m('cos α = 0.8. Find sin α.'), m('0.6')],
      [m('sin α = ' + f('3', '5') + '. Find cos α.'), m(f('4', '5'))],
      [m('cos α = ' + f('12', '13') + '. Find sin α.'), m(f('5', '13'))],
      [m('Simplify 1 − cos<sup>2</sup>α'), m('sin<sup>2</sup>α')],
      [m('Simplify 1 − sin<sup>2</sup>α'), m('cos<sup>2</sup>α')],
      [m('tan α · cot α = ?'), m('1')]
    ],
    med: [
      [m('sin α = ' + f('3', '5') + '. Find cos α and tan α.'), m(f('4', '5')) + ', ' + m(f('3', '4'))],
      [m('cos α = ' + f('5', '13') + '. Find sin α and cot α.'), m(f('12', '13')) + ', ' + m(f('5', '12'))],
      [m('sin α = ' + f('8', '17') + '. Find cos α.'), m(f('15', '17'))],
      [m('Simplify (1 − sin α)(1 + sin α)'), m('cos<sup>2</sup>α')],
      [m('Simplify sin<sup>2</sup>α − 1'), m('−cos<sup>2</sup>α')],
      [m('tan α = ' + f('3', '4') + '. Find cot α.'), m(f('4', '3'))],
      [m('Simplify ' + f('sin α', 'cos α') + ' · cot α'), m('1')]
    ],
    hard: [
      [m('sin α = ' + f('7', '25') + '. Find cos α, tan α and cot α.'), m(f('24', '25') + ', ' + f('7', '24') + ', ' + f('24', '7'))],
      [m('Simplify sin<sup>2</sup>α + cos<sup>2</sup>α + tan α · cot α'), m('1 + 1 = 2')],
      [m('Simplify (sin α + cos α)<sup>2</sup>'), m('1 + 2 sin α cos α')],
      [m('Simplify (sin α + cos α)<sup>2</sup> + (sin α − cos α)<sup>2</sup>'), m('2')],
      [m('Prove that ' + f('1', 'cos<sup>2</sup>α') + ' = 1 + tan<sup>2</sup>α'), 'Divide the basic identity by ' + m('cos<sup>2</sup>α') + '.'],
      [m('tan α = 2. Find sin α and cos α.'), m('cos<sup>2</sup>α = ' + f('1', '5')) + ', so ' + m('cos α = ' + f('1', sr('5'))) + ' and ' + m('sin α = ' + f('2', sr('5')))],
      [m('Simplify cos<sup>2</sup>α − sin<sup>2</sup>α + 2 sin<sup>2</sup>α'), m('1')]
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Темы 20–21, pp. 49–51.',
  homework: [
    m('sin α = ' + f('15', '17') + '. Find cos α and tan α.'),
    m('cos α = 0.28. Find sin α.'),
    m('Simplify (1 − cos α)(1 + cos α)'),
    m('Simplify sin<sup>2</sup>α · cot α · tan α'),
    m('Derive sin<sup>2</sup>α + cos<sup>2</sup>α = 1 from Pythagoras’ theorem, with a labelled figure.')
  ]
});

/* ============================== 18 ============================== */
G8_GEO.push({
  id: 'geo-18', stream: 'geo', grade: 8, quarter: 2, lessons: '25', hours: 1,
  title: 'Trigonometric functions of complementary angles',
  subtitle: 'The two acute angles of a right triangle add to 90° — and that single fact swaps sine with cosine.',
  uz: 'Geometry 8, Тема 22', uzPage: 'Тема 22, pp. 52–53',
  cam: 'Stage 9 · beyond', camPage: 'Extension beyond Stage 9', wb: '—',
  objectives: [
    'Explain why the two acute angles of a right triangle are complementary.',
    'Use ' + m('sin α = cos(90° − α)') + ' and ' + m('tan α = cot(90° − α)') + '.',
    'Convert a ratio of a large acute angle into one of a small angle.',
    'Simplify expressions that mix an angle with its complement.'
  ],
  terms: [
    ['Complementary angles', 'To‘ldiruvchi burchaklar', 'Дополнительные углы'],
    ['Sum of angles', 'Burchaklar yig‘indisi', 'Сумма углов'],
    ['Co-function', 'Ko-funksiya', 'Кофункция'],
    ['Convert', 'Aylantirish', 'Преобразовать'],
    ['Acute angle', 'O‘tkir burchak', 'Острый угол'],
    ['Equal ratios', 'Teng nisbatlar', 'Равные отношения'],
    ['Simplify', 'Soddalashtirish', 'Упростить']
  ],
  sections: [
    {
      h: 'Why the angles are complementary',
      html: `<p>In a right-angled triangle the three angles add to ${m('180°')} and one of them is
      ${m('90°')}. So the two acute angles add to ${m('90°')}:</p>
      ${eq(m('α + β = 90°') + ', that is ' + m('β = 90° − α'), true)}
      <p>Two angles adding to ${m('90°')} are called <b>complementary</b>.</p>
      {{fig:complementary:The same two legs serve both angles — but their roles as “opposite” and “adjacent” are exchanged.}}`
    },
    {
      h: 'The exchange',
      html: `<p>Look at the figure. For the angle ${m('α')}, the leg ${m('a')} is opposite and ${m('b')}
      is adjacent. For the angle ${m('β = 90° − α')}, it is the other way round. So</p>
      ${eq(m('sin α = ' + f('a', 'c') + ' = cos β = cos(90° − α)'), true)}
      <div class="keybox"><div class="klabel">The four relations</div>
      ${eq(m('sin α = cos(90° − α)') + ' &nbsp;&nbsp;·&nbsp;&nbsp; ' + m('cos α = sin(90° − α)'))}
      ${eq(m('tan α = cot(90° − α)') + ' &nbsp;&nbsp;·&nbsp;&nbsp; ' + m('cot α = tan(90° − α)'))}
      Each function turns into its <b>co</b>-function.</div>
      <p>That is where the names come from: “cosine” is short for <em>complementi sinus</em> — the sine
      of the complement.</p>`
    },
    {
      h: 'What it is for',
      html: `<p>Old tables only listed angles up to ${m('45°')}. Everything above that was read off the
      same page using these relations:</p>
      ${eq(m('sin 70° = cos 20°') + ' &nbsp;&nbsp;·&nbsp;&nbsp; ' + m('tan 80° = cot 10°'), true)}
      <p>Even with a calculator the relations are worth knowing, because they simplify expressions
      instantly:</p>
      ${eq(m('sin<sup>2</sup>40° + sin<sup>2</sup>50° = sin<sup>2</sup>40° + cos<sup>2</sup>40° = 1'), true)}
      <div class="warn"><span class="wl">Check the angles really are complementary</span>
      ${m('40° + 50° = 90°')} ✓, so the swap is legal. For ${m('40°')} and ${m('60°')} it is not.</div>`
    }
  ],
  examples: [
    {
      q: m('Write sin 63° as a function of an angle below 45°.'),
      steps: [
        [m('90° − 63° = 27°'), 'Find the complement.'],
        [m('sin 63° = cos 27°'), 'Sine becomes cosine.']
      ],
      ans: m('cos 27°')
    },
    {
      q: m('Simplify sin<sup>2</sup>25° + sin<sup>2</sup>65°'),
      steps: [
        [m('25° + 65° = 90°'), 'The angles are complementary.'],
        [m('sin 65° = cos 25°'), ''],
        [m('= sin<sup>2</sup>25° + cos<sup>2</sup>25°'), ''],
        [m('= 1'), 'The basic identity.']
      ],
      ans: m('1')
    },
    {
      q: m('Simplify tan 35° · tan 55°'),
      steps: [
        [m('35° + 55° = 90°'), 'Complementary.'],
        [m('tan 55° = cot 35°'), ''],
        [m('tan 35° · cot 35° = 1'), 'They are reciprocals.']
      ],
      ans: m('1')
    }
  ],
  modelNote: 'Set α to 30° and read both angles: the ratios at 30° and 60° are the same two numbers swapped.',
  interactive: { type: 'rightTriangle', title: 'α and 90° − α in one triangle' },
  quiz: [
    { q: m('sin 70°') + ' equals:', a: [m('cos 70°'), m('cos 20°'), m('sin 20°'), m('tan 70°')], c: 1, why: '90° − 70° = 20°, and sine becomes cosine.' },
    { q: 'Two acute angles of a right triangle:', a: ['are equal', 'add to 90°', 'add to 180°', 'are unrelated'], c: 1, why: 'The third angle takes 90° of the 180° total.' },
    { q: m('tan 35° · tan 55°') + ' equals:', a: [m('0'), m('1'), m('2'), m('tan 90°')], c: 1, why: 'tan 55° = cot 35°, and tan · cot = 1.' },
    { q: m('sin<sup>2</sup>40° + sin<sup>2</sup>50°') + ' equals:', a: [m('1'), m('2'), m('0'), m('sin<sup>2</sup>90°')], c: 0, why: 'sin 50° = cos 40°, then the basic identity.' }
  ],
  practice: {
    easy: [
      [m('Write sin 60° as a cosine.'), m('cos 30°')],
      [m('Write cos 80° as a sine.'), m('sin 10°')],
      [m('Write tan 70° as a cotangent.'), m('cot 20°')],
      [m('Write cot 55° as a tangent.'), m('tan 35°')],
      [m('Find the complement of 37°.'), m('53°')],
      [m('α = 28°. Find β in a right triangle.'), m('62°')],
      [m('sin 45° and cos 45° — are they equal?'), 'Yes, since ' + m('45°') + ' is its own complement.']
    ],
    med: [
      [m('Write sin 63° as a function of an angle below 45°.'), m('cos 27°')],
      [m('Write cos 18° as a sine.'), m('sin 72°')],
      [m('Simplify sin<sup>2</sup>25° + sin<sup>2</sup>65°'), m('1')],
      [m('Simplify tan 35° · tan 55°'), m('1')],
      [m('Simplify ' + f('sin 40°', 'cos 50°')), m('1')],
      [m('Simplify cos<sup>2</sup>15° + cos<sup>2</sup>75°'), m('1')],
      [m('In a right triangle, sin α = 0.6. Find cos β.'), m('0.6') + ' — since ' + m('β = 90° − α')]
    ],
    hard: [
      [m('Simplify sin<sup>2</sup>10° + sin<sup>2</sup>20° + sin<sup>2</sup>70° + sin<sup>2</sup>80°'), 'Pair 10° with 80° and 20° with 70°: ' + m('1 + 1 = 2')],
      [m('Simplify tan 10° · tan 20° · tan 70° · tan 80°'), 'Pair 10° with 80° and 20° with 70°: ' + m('1 · 1 = 1')],
      [m('Simplify ' + f('sin 32°', 'cos 58°') + ' + ' + f('cos 32°', 'sin 58°')), m('1 + 1 = 2')],
      [m('Prove that sin α · cos(90° − α) + cos α · sin(90° − α) = 1'), 'Both terms become ' + m('sin<sup>2</sup>α') + ' and ' + m('cos<sup>2</sup>α') + '.'],
      [m('If sin(2x) = cos(3x) and both angles are acute, find x.'), m('2x + 3x = 90°') + ', so ' + m('x = 18°') + '.'],
      [m('Arrange sin 20°, sin 50°, cos 20°, cos 50° in increasing order.'), m('sin 20° < sin 50° = cos 40° < cos 20°') + '; and ' + m('cos 50° = sin 40°') + ', so the order is ' + m('sin 20° < cos 50° < sin 50° < cos 20°') + '.'],
      [m('Simplify (sin 25° + cos 65°)<sup>2</sup>'), m('cos 65° = sin 25°') + ', so ' + m('(2 sin 25°)<sup>2</sup> = 4 sin<sup>2</sup>25°')]
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Тема 22, pp. 52–53.',
  homework: [
    m('Write sin 74°, cos 12° and tan 66° as functions of angles below 45°.'),
    m('Simplify sin<sup>2</sup>31° + sin<sup>2</sup>59°'),
    m('Simplify tan 22° · tan 68°'),
    m('Simplify ' + f('cos 41°', 'sin 49°')),
    m('If sin(3x) = cos(x + 10°) with both angles acute, find x.')
  ]
});

/* ============================== 19 ============================== */
G8_GEO.push({
  id: 'geo-19', stream: 'geo', grade: 8, quarter: 2, lessons: '26', hours: 1,
  title: 'The ratios for 30°, 45° and 60°',
  subtitle: 'Three angles whose exact values come from half a square and half an equilateral triangle — and must be known by heart.',
  uz: 'Geometry 8, Тема 23', uzPage: 'Тема 23, pp. 54–55',
  cam: 'Stage 9 · beyond', camPage: 'Extension beyond Stage 9', wb: '—',
  objectives: [
    'Derive the exact ratios for ' + m('45°') + ' from half a square.',
    'Derive the exact ratios for ' + m('30°') + ' and ' + m('60°') + ' from half an equilateral triangle.',
    'Recall the table of exact values.',
    'Use the exact values in calculations without a calculator.'
  ],
  terms: [
    ['Exact value', 'Aniq qiymat', 'Точное значение'],
    ['Half of a square', 'Kvadratning yarmi', 'Половина квадрата'],
    ['Equilateral triangle', 'Teng tomonli uchburchak', 'Равносторонний треугольник'],
    ['Table of values', 'Qiymatlar jadvali', 'Таблица значений'],
    ['Special angle', 'Xos burchak', 'Специальный угол'],
    ['Surd', 'Irratsional ildiz', 'Иррациональный корень'],
    ['Derive', 'Keltirib chiqarish', 'Вывести'],
    ['By heart', 'Yoddan', 'Наизусть']
  ],
  sections: [
    {
      h: 'The two triangles that give everything',
      html: `{{fig:specialAngles:Half a unit square gives 45°; half an equilateral triangle of side 2 gives 30° and 60°.}}
      <p><b>For 45°.</b> Cut a square of side 1 along a diagonal. The two legs are 1 and 1, and the
      hypotenuse is ${m(sr('1 + 1') + ' = ' + sr('2'))}. So</p>
      ${eq(m('sin 45° = cos 45° = ' + f('1', sr('2')) + ' = ' + f(sr('2'), '2')) + ' &nbsp;&nbsp;·&nbsp;&nbsp; ' +
           m('tan 45° = cot 45° = 1'), true)}
      <p><b>For 30° and 60°.</b> Cut an equilateral triangle of side 2 down its height. The base is
      halved to 1, the hypotenuse stays 2, and the height is ${m(sr('4 − 1') + ' = ' + sr('3'))}. The
      angles are ${m('30°')} and ${m('60°')}.</p>
      ${eq(m('sin 30° = ' + f('1', '2')) + ' &nbsp;·&nbsp; ' + m('cos 30° = ' + f(sr('3'), '2')) +
           ' &nbsp;·&nbsp; ' + m('sin 60° = ' + f(sr('3'), '2')) + ' &nbsp;·&nbsp; ' + m('cos 60° = ' + f('1', '2')), true)}`
    },
    {
      h: 'The table',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>α</th><th>sin α</th><th>cos α</th><th>tan α</th><th>cot α</th></tr></thead>
      <tbody>
        <tr><td>${m('30°')}</td><td>${m(f('1', '2'))}</td><td>${m(f(sr('3'), '2'))}</td><td>${m(f(sr('3'), '3'))}</td><td>${m(sr('3'))}</td></tr>
        <tr><td>${m('45°')}</td><td>${m(f(sr('2'), '2'))}</td><td>${m(f(sr('2'), '2'))}</td><td>${m('1')}</td><td>${m('1')}</td></tr>
        <tr><td>${m('60°')}</td><td>${m(f(sr('3'), '2'))}</td><td>${m(f('1', '2'))}</td><td>${m(sr('3'))}</td><td>${m(f(sr('3'), '3'))}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">How to remember it</div>
      Write ${m('1, 2, 3')} under ${m('30°, 45°, 60°')}, take the square root of each and divide by 2:
      ${m(f(sr('1'), '2') + ' = ' + f('1', '2'))}, ${m(f(sr('2'), '2'))}, ${m(f(sr('3'), '2'))}. That is
      the sine row. The cosine row is the same three numbers backwards.</div>
      <p>Approximate values, for checking: ${m('sin 30° = 0.5')}, ${m('sin 45° ≈ 0.71')},
      ${m('sin 60° ≈ 0.87')}.</p>`
    },
    {
      h: 'Where they appear',
      html: `<p>These three angles run through the whole of school geometry: the height of an
      equilateral triangle (${m('h = a · sin 60° = ' + f('a' + sr('3'), '2'))}), the diagonal of a square
      (${m('d = a' + sr('2'))}), the ${m('30°')} slope of a ramp, the shorter diagonal of a rhombus with a
      ${m('60°')} angle.</p>`
    }
  ],
  examples: [
    {
      q: m('Find sin 30° + cos 60°'),
      steps: [
        [m('sin 30° = ' + f('1', '2')), 'From the table.'],
        [m('cos 60° = ' + f('1', '2')), 'They are equal — 30° and 60° are complementary.'],
        [m(f('1', '2') + ' + ' + f('1', '2') + ' = 1'), '']
      ],
      ans: m('1')
    },
    {
      q: 'A right triangle has hypotenuse 10 and one angle 30°. Find both legs.',
      steps: [
        [m('a = c · sin 30° = 10 · ' + f('1', '2') + ' = 5'), 'The side opposite the 30°.'],
        [m('b = c · cos 30° = 10 · ' + f(sr('3'), '2') + ' = 5' + sr('3')), ''],
        [m('5' + sr('3') + ' ≈ 8.66'), 'Check: the shorter leg faces the smaller angle ✓']
      ],
      ans: m('5') + ' and ' + m('5' + sr('3') + ' ≈ 8.66')
    },
    {
      q: m('Simplify 2 sin 30° · cos 60° + tan<sup>2</sup>45°'),
      steps: [
        [m('sin 30° = cos 60° = ' + f('1', '2')), ''],
        [m('2 · ' + f('1', '2') + ' · ' + f('1', '2') + ' = ' + f('1', '2')), ''],
        [m('tan 45° = 1, so tan<sup>2</sup>45° = 1'), ''],
        [m(f('1', '2') + ' + 1 = 1.5'), '']
      ],
      ans: m('1.5')
    }
  ],
  modelNote: 'Set the angle to 30°, 45° and 60° in turn and compare the readouts with the table.',
  interactive: { type: 'rightTriangle', title: 'Check the table against the model' },
  quiz: [
    { q: m('sin 30°') + ' equals:', a: [m(f('1', '2')), m(f(sr('3'), '2')), m(f(sr('2'), '2')), m('1')], c: 0, why: 'Half an equilateral triangle: opposite 1, hypotenuse 2.' },
    { q: m('cos 45°') + ' equals:', a: [m(f('1', '2')), m(f(sr('2'), '2')), m('1'), m(sr('2'))], c: 1, why: 'Legs 1 and 1, hypotenuse √2.' },
    { q: m('tan 60°') + ' equals:', a: [m('1'), m(sr('3')), m(f(sr('3'), '3')), m(f('1', '2'))], c: 1, why: 'Opposite √3, adjacent 1.' },
    { q: m('sin 60°') + ' equals:', a: [m('cos 30°'), m('cos 60°'), m('sin 30°'), m('tan 60°')], c: 0, why: '60° and 30° are complementary.' }
  ],
  practice: {
    easy: [
      [m('sin 30° = ?'), m(f('1', '2'))],
      [m('cos 60° = ?'), m(f('1', '2'))],
      [m('tan 45° = ?'), m('1')],
      [m('sin 45° = ?'), m(f(sr('2'), '2'))],
      [m('cos 30° = ?'), m(f(sr('3'), '2'))],
      [m('tan 60° = ?'), m(sr('3'))],
      [m('cot 45° = ?'), m('1')]
    ],
    med: [
      [m('sin 30° + cos 60°'), m('1')],
      [m('sin<sup>2</sup>45° + cos<sup>2</sup>45°'), m('1')],
      [m('tan 30° · tan 60°'), m('1')],
      [m('A right triangle has hypotenuse 10 and an angle of 30°. Find both legs.'), m('5') + ' and ' + m('5' + sr('3'))],
      [m('A right triangle has hypotenuse 8 and an angle of 45°. Find both legs.'), m('4' + sr('2')) + ' each'],
      [m('2 sin 60° = ?'), m(sr('3'))],
      [m('An equilateral triangle has side 6. Find its height.'), m('3' + sr('3'))]
    ],
    hard: [
      [m('Simplify 2 sin 30° · cos 60° + tan<sup>2</sup>45°'), m('1.5')],
      [m('Simplify sin 60° · cos 30° + sin 30° · cos 60°'), m(f('3', '4') + ' + ' + f('1', '4') + ' = 1')],
      [m('A ramp rises at 30° over a horizontal distance of 12 m. Find its height and length.'), m('h = 12 tan 30° = 4' + sr('3') + ' ≈ 6.93') + ', ' + m('ℓ = 8' + sr('3') + ' ≈ 13.86')],
      [m('A rhombus has side 8 and an angle of 60°. Find its shorter diagonal.'), m('8') + ' — the triangle cut off is equilateral.'],
      [m('Find the exact area of an equilateral triangle of side a.'), m('S = ' + f('a<sup>2</sup>' + sr('3'), '4'))],
      [m('Simplify ' + f('sin 60°', 'cos 60°') + ' − tan 60°'), m('0')],
      [m('A square has diagonal 10. Find its side exactly.'), m('5' + sr('2'))]
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Geometry 8, Тема 23, pp. 54–55. Learn the table before the next lesson.',
  homework: [
    m('Write out the table of values for 30°, 45° and 60° from memory.'),
    m('Simplify sin 45° · cos 45°'),
    m('A right triangle has hypotenuse 14 and an angle of 60°. Find both legs.'),
    m('An equilateral triangle has side 12. Find its height and area exactly.'),
    m('Simplify tan 45° + 2 cos 60°'),
    m('A square has side 7. Find its diagonal exactly and to 2 decimal places.')
  ]
});

/* ============================== 20 ============================== */
G8_GEO.push({
  id: 'geo-20', stream: 'geo', grade: 8, quarter: 2, lessons: '27–28', hours: 2,
  title: 'The table of trigonometric values',
  subtitle: 'Reading a ratio from an angle, and an angle from a ratio — on paper and on a calculator.',
  uz: 'Geometry 8, Тема 24', uzPage: 'Тема 24, pp. 56–57',
  cam: 'Stage 9 · beyond', camPage: 'Extension beyond Stage 9', wb: '—',
  objectives: [
    'Read a value from a four-figure table or a calculator.',
    'Find the angle when the ratio is given (the inverse operation).',
    'Know how each ratio behaves as the angle grows from 0° to 90°.',
    'Estimate before calculating, and check the answer is sensible.'
  ],
  terms: [
    ['Table of values', 'Qiymatlar jadvali', 'Таблица значений'],
    ['Calculator', 'Kalkulyator', 'Калькулятор'],
    ['Degree', 'Gradus', 'Градус'],
    ['Minute (of arc)', 'Daqiqa', 'Минута'],
    ['Inverse function', 'Teskari funksiya', 'Обратная функция'],
    ['Increasing', 'O‘suvchi', 'Возрастающая'],
    ['Decreasing', 'Kamayuvchi', 'Убывающая'],
    ['Round', 'Yaxlitlash', 'Округлить'],
    ['Approximate value', 'Taqribiy qiymat', 'Приближённое значение']
  ],
  sections: [
    {
      h: 'Reading the table',
      html: `<p>A four-figure table gives ${m('sin')}, ${m('cos')}, ${m('tan')} and ${m('cot')} for every
      angle from ${m('0°')} to ${m('90°')}, usually in steps of ${m('6′')} (six minutes of arc, one tenth
      of a degree). Find the row for the whole degrees and the column for the minutes.</p>
      <p>On a calculator, make sure it is in <b>degree mode</b> (the display shows DEG). Then
      ${m('sin 37° = 0.6018…')}, ${m('cos 37° = 0.7986…')}, ${m('tan 37° = 0.7536…')}.</p>
      <div class="warn"><span class="wl">Check the mode first, every time</span>
      In radian mode ${m('sin 37')} gives ${m('−0.6435')} — a negative number, which is impossible for an
      acute angle. A negative sine is always a mode error.</div>`
    },
    {
      h: 'The inverse direction',
      html: `<p>Given the ratio, find the angle. On the calculator this is the second function of the
      same key, written ${m('sin<sup>−1</sup>')} or ${m('arcsin')}:</p>
      ${eq(m('sin α = 0.5 ⟹ α = 30°') + ' &nbsp;·&nbsp; ' + m('tan α = 1 ⟹ α = 45°'), true)}
      <p>In a table you read backwards: find the value in the body and go out to the edge for the angle.
      If the exact value is not there, take the nearest — the answer is approximate anyway.</p>
      <div class="warn"><span class="wl">Not a power</span>
      ${m('sin<sup>−1</sup>x')} means “the angle whose sine is ${m('x')}”. It is <b>not</b>
      ${m(f('1', 'sin x'))}.</div>`
    },
    {
      h: 'How the ratios behave',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>α</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th><th>Behaviour</th></tr></thead>
      <tbody>
        <tr><td><b>sin α</b></td><td>0</td><td>0.500</td><td>0.707</td><td>0.866</td><td>1</td><td>increases</td></tr>
        <tr><td><b>cos α</b></td><td>1</td><td>0.866</td><td>0.707</td><td>0.500</td><td>0</td><td>decreases</td></tr>
        <tr><td><b>tan α</b></td><td>0</td><td>0.577</td><td>1</td><td>1.732</td><td>—</td><td>increases without limit</td></tr>
        <tr><td><b>cot α</b></td><td>—</td><td>1.732</td><td>1</td><td>0.577</td><td>0</td><td>decreases</td></tr>
      </tbody></table></div>
      <p>Three facts to use as checks:</p>
      <ul>
        <li>${m('sin')} and ${m('cos')} are always between 0 and 1;</li>
        <li>${m('tan')} passes through 1 at ${m('45°')} — below that it is less than 1, above it more;</li>
        <li>as ${m('α')} grows, ${m('sin')} and ${m('tan')} grow while ${m('cos')} and ${m('cot')} shrink.</li>
      </ul>`
    }
  ],
  examples: [
    {
      q: m('Find sin 52° and use it to find the leg opposite 52° in a triangle with hypotenuse 20.'),
      steps: [
        [m('sin 52° ≈ 0.788'), 'From the table or calculator.'],
        [m('a = c · sin α = 20 · 0.788'), ''],
        [m('a ≈ 15.8'), 'Check: it is less than 20 ✓ and more than half of 20, as ' + m('52° > 30°') + ' ✓']
      ],
      ans: m('≈ 15.8')
    },
    {
      q: m('Find the angle α if cos α = 0.4226.'),
      steps: [
        [m('cos α = 0.4226'), 'Given.'],
        ['Read the table backwards, or press ' + m('cos<sup>−1</sup>') + '.', ''],
        [m('α ≈ 65°'), 'Sensible: the cosine is under 0.5, so the angle is above ' + m('60°') + '.']
      ],
      ans: m('α ≈ 65°')
    },
    {
      q: m('Without a table, decide whether sin 40° is bigger or smaller than cos 40°.'),
      steps: [
        [m('40° < 45°'), ''],
        ['Below ' + m('45°') + ' the sine is the smaller of the two.', 'They are equal exactly at ' + m('45°') + '.'],
        [m('sin 40° < cos 40°'), 'Check: ' + m('0.643 < 0.766') + ' ✓']
      ],
      ans: m('sin 40° < cos 40°')
    }
  ],
  modelNote: 'Sweep the angle from 10° to 80° and read the three ratios changing — sine up, cosine down.',
  interactive: { type: 'rightTriangle', title: 'How the ratios move with the angle' },
  quiz: [
    { q: 'As α grows from 0° to 90°, ' + m('cos α') + ':', a: ['increases', 'decreases', 'stays the same', 'increases then decreases'], c: 1, why: 'The adjacent side shrinks while the hypotenuse stays put.' },
    { q: m('tan 50°') + ' is:', a: ['less than 1', 'equal to 1', 'greater than 1', 'negative'], c: 2, why: 'tan 45° = 1, and the tangent increases.' },
    { q: m('sin<sup>−1</sup>(0.5)') + ' equals:', a: [m('2'), m('30°'), m('60°'), m('0.5')], c: 1, why: 'The angle whose sine is 0.5 is 30°.' },
    { q: 'A calculator gives ' + m('sin 37 = −0.6435') + '. This means:', a: ['the angle is obtuse', 'the calculator is in radian mode', 'the sine can be negative', 'the answer is right'], c: 1, why: 'An acute angle always has a positive sine — check DEG mode.' }
  ],
  practice: {
    easy: [
      [m('Find sin 30° from the table.'), m('0.5')],
      [m('Find cos 60°.'), m('0.5')],
      [m('Find tan 45°.'), m('1')],
      [m('Find sin 50° to 3 d.p.'), m('0.766')],
      [m('Find cos 25° to 3 d.p.'), m('0.906')],
      [m('Find α if sin α = 0.5.'), m('30°')],
      [m('Find α if tan α = 1.'), m('45°')]
    ],
    med: [
      [m('Find sin 52° to 3 d.p.'), m('0.788')],
      [m('Find tan 68° to 3 d.p.'), m('2.475')],
      [m('Find α if cos α = 0.4226.'), m('65°')],
      [m('Find α if tan α = 0.5774.'), m('30°')],
      [m('A triangle has hypotenuse 20 and an angle of 52°. Find the opposite leg.'), m('≈ 15.8')],
      [m('A triangle has hypotenuse 15 and an angle of 40°. Find the adjacent leg.'), m('≈ 11.5')],
      [m('Which is bigger, sin 40° or cos 40°?'), m('cos 40°')]
    ],
    hard: [
      [m('Arrange in increasing order: sin 20°, sin 70°, cos 20°, cos 70°.'), m('cos 70° = sin 20° < sin 70° = cos 20°') + ', so ' + m('sin 20° = cos 70° < sin 70° = cos 20°')],
      [m('For which acute angles is tan α > 1?'), m('45° < α < 90°')],
      [m('A calculator shows sin x = 1.2. What has gone wrong?'), 'Impossible — the sine of an acute angle is under 1. A side has been divided the wrong way round.'],
      [m('A ramp has length 20 m and rises 7 m. Find its angle of slope.'), m('sin α = 0.35') + ', so ' + m('α ≈ 20.5°')],
      [m('A tower is 45 m tall and its shadow is 30 m. Find the angle of elevation of the sun.'), m('tan α = 1.5') + ', so ' + m('α ≈ 56.3°')],
      [m('Explain why tan α has no value at 90°.'), 'The adjacent side would be 0, and division by 0 has no meaning.'],
      [m('Estimate sin 33° without a table, using sin 30° and sin 45°.'), 'Between ' + m('0.5') + ' and ' + m('0.707') + ', nearer the first — about ' + m('0.54') + '. (True value ' + m('0.545') + '.)']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Тема 24, pp. 56–57. Bring the table or a calculator in degree mode.',
  homework: [
    m('Find sin 28°, cos 28° and tan 28° to 3 decimal places.'),
    m('Find α if sin α = 0.8660.'),
    m('Find α if cos α = 0.7071.'),
    m('A triangle has hypotenuse 25 and an angle of 36°. Find both legs.'),
    m('Without a table, say which is bigger: tan 30° or cot 30°. Explain.')
  ]
});

/* ============================== 21 ============================== */
G8_GEO.push({
  id: 'geo-21', stream: 'geo', grade: 8, quarter: 2, lessons: '29–30', hours: 2,
  title: 'Solving right-angled triangles',
  subtitle: 'Given any two parts, find the other three — the skill the whole chapter has been building towards.',
  uz: 'Geometry 8, Темы 25–26', uzPage: 'Темы 25–26, pp. 58–61',
  cam: 'Stage 9 · beyond', camPage: 'Extension beyond Stage 9', wb: '—',
  objectives: [
    'Solve a right triangle given two sides.',
    'Solve a right triangle given one side and one acute angle.',
    'Choose the ratio that uses the two parts you know.',
    'Solve practical problems of height, distance and slope.'
  ],
  terms: [
    ['Solve a triangle', 'Uchburchakni yechish', 'Решить треугольник'],
    ['Given', 'Berilgan', 'Дано'],
    ['Find', 'Topish kerak', 'Найти'],
    ['Angle of elevation', 'Ko‘tarilish burchagi', 'Угол возвышения'],
    ['Angle of depression', 'Pasayish burchagi', 'Угол понижения'],
    ['Slope', 'Qiyalik', 'Уклон'],
    ['Height', 'Balandlik', 'Высота'],
    ['Horizontal distance', 'Gorizontal masofa', 'Горизонтальное расстояние'],
    ['Accuracy', 'Aniqlik', 'Точность']
  ],
  sections: [
    {
      h: 'What “solving” means',
      html: `<p>A right triangle has six parts: three sides and three angles. One angle is already known
      (${m('90°')}). Given any <b>two more</b> — as long as at least one is a side — the other three
      follow.</p>
      {{fig:rightTriangle:Six parts, one of them always 90°. Two more are enough to fix everything.}}
      <div class="keybox"><div class="klabel">Choosing the ratio</div>
      Write down what you <b>know</b> and what you <b>want</b>, then pick the ratio containing exactly
      those two sides:
      <ul style="margin:.5em 0 0">
        <li>opposite and hypotenuse → ${m('sin')}</li>
        <li>adjacent and hypotenuse → ${m('cos')}</li>
        <li>opposite and adjacent → ${m('tan')} (or ${m('cot')})</li>
      </ul>
      Two sides and no angle? Use Pythagoras first, or a ratio to get the angle.</div>`
    },
    {
      h: 'The two standard cases',
      html: `<p><b>Case 1 — two sides given.</b> Find the third by Pythagoras, then an angle from a ratio,
      then the last angle by subtracting from ${m('90°')}.</p>
      <p><b>Case 2 — one side and one acute angle given.</b> The other acute angle is
      ${m('90° − α')} immediately. Then use the ratios to build the two missing sides:</p>
      ${eq(m('a = c · sin α') + ' &nbsp;·&nbsp; ' + m('b = c · cos α') + ' &nbsp;·&nbsp; ' + m('a = b · tan α'), true)}
      <div class="warn"><span class="wl">Multiply or divide?</span>
      Going from the hypotenuse to a leg you <b>multiply</b> by a ratio (the answer gets smaller).
      Going from a leg to the hypotenuse you <b>divide</b> (the answer gets bigger). If your hypotenuse
      comes out shorter than a leg, you divided the wrong way.</div>`
    },
    {
      h: 'Practical problems',
      html: `{{fig:ladder:Every height-and-distance problem is this picture with different labels.}}
      <ul>
        <li><b>Angle of elevation</b> — measured <em>up</em> from the horizontal to the line of sight.</li>
        <li><b>Angle of depression</b> — measured <em>down</em> from the horizontal.</li>
      </ul>
      <p>They are alternate angles between two horizontals, so the angle of depression from the top of a
      tower equals the angle of elevation from the ground point. Draw the horizontal line at the
      observer's eye before anything else — most mistakes in these problems are mistakes in the diagram,
      not the trigonometry.</p>`
    }
  ],
  examples: [
    {
      q: m('Solve the right triangle with c = 20 and α = 35°.'),
      steps: [
        [m('β = 90° − 35° = 55°'), 'The other acute angle.'],
        [m('a = c · sin α = 20 · 0.5736 ≈ 11.5'), 'Opposite and hypotenuse → sine.'],
        [m('b = c · cos α = 20 · 0.8192 ≈ 16.4'), 'Adjacent and hypotenuse → cosine.'],
        [m('check: 11.5<sup>2</sup> + 16.4<sup>2</sup> ≈ 400 ✓'), 'Pythagoras confirms it.']
      ],
      ans: m('β = 55°, a ≈ 11.5, b ≈ 16.4')
    },
    {
      q: m('Solve the right triangle with legs a = 5 and b = 12.'),
      steps: [
        [m('c = ' + sr('25 + 144') + ' = 13'), 'Pythagoras.'],
        [m('tan α = ' + f('5', '12') + ' ≈ 0.4167'), 'Two legs → tangent.'],
        [m('α ≈ 22.6°'), 'Inverse tangent.'],
        [m('β ≈ 67.4°'), m('90° − 22.6°')]
      ],
      ans: m('c = 13, α ≈ 22.6°, β ≈ 67.4°')
    },
    {
      q: 'From a point 40 m from the foot of a tower the angle of elevation of its top is 38°. Find the height.',
      steps: [
        ['Draw the tower, the ground and the line of sight.', 'The tower is opposite the 38° angle.'],
        [m('tan 38° = ' + f('h', '40')), 'Opposite and adjacent → tangent.'],
        [m('h = 40 · tan 38° = 40 · 0.7813'), ''],
        [m('h ≈ 31.3 m'), 'Sensible: less than the 40 m distance, since ' + m('38° < 45°') + ' ✓']
      ],
      ans: m('≈ 31.3 m')
    }
  ],
  modelNote: 'Give the class two parts, let them predict the other three, then check with the model.',
  interactive: { type: 'rightTriangle' },
  quiz: [
    { q: 'Given the hypotenuse and the angle, the opposite leg is:', a: [m('c · cos α'), m('c · sin α'), m(f('c', 'sin α')), m('c · tan α')], c: 1, why: 'sin α = opposite / hypotenuse.' },
    { q: 'Given both legs, to find an angle use:', a: [m('sin'), m('cos'), m('tan'), 'Pythagoras'], c: 2, why: 'The tangent is the ratio of the two legs.' },
    { q: 'A leg is 6 and the angle opposite it is 30°. The hypotenuse is:', a: [m('3'), m('12'), m('6' + sr('3')), m('2')], c: 1, why: 'c = a / sin 30° = 6 ÷ 0.5 = 12.' },
    { q: 'The angle of depression from a tower top equals:', a: ['the angle of elevation from the ground point', 'half of it', 'its complement', 'nothing in particular'], c: 0, why: 'They are alternate angles between two horizontal lines.' }
  ],
  practice: {
    easy: [
      [m('c = 10, α = 30°. Find a.'), m('5')],
      [m('c = 10, α = 30°. Find β.'), m('60°')],
      [m('c = 8, α = 45°. Find a.'), m('4' + sr('2') + ' ≈ 5.66')],
      [m('a = 3, b = 4. Find c.'), m('5')],
      [m('a = 6, b = 6. Find α.'), m('45°')],
      [m('c = 20, α = 60°. Find b.'), m('10')],
      [m('α = 25°. Find β.'), m('65°')]
    ],
    med: [
      [m('c = 20, α = 35°. Solve the triangle.'), m('β = 55°, a ≈ 11.5, b ≈ 16.4')],
      [m('a = 5, b = 12. Solve the triangle.'), m('c = 13, α ≈ 22.6°, β ≈ 67.4°')],
      [m('a = 7, c = 25. Find b and α.'), m('b = 24') + ', ' + m('α ≈ 16.3°')],
      [m('b = 15, α = 40°. Find a.'), m('a = 15 tan 40° ≈ 12.6')],
      [m('a = 9, α = 30°. Find c.'), m('18')],
      [m('From 40 m away the angle of elevation of a tower top is 38°. Find its height.'), m('≈ 31.3 m')],
      [m('A ladder 6 m long makes 65° with the ground. How high does it reach?'), m('≈ 5.4 m')]
    ],
    hard: [
      [m('A ramp 15 m long rises 4 m. Find its angle of slope and its horizontal run.'), m('sin α = 0.267, α ≈ 15.5°') + ', run ' + m('≈ 14.5 m')],
      [m('From the top of a 50 m cliff the angle of depression of a boat is 22°. How far is the boat from the foot?'), m(f('50', 'tan 22°') + ' ≈ 123.8 m')],
      [m('An isosceles triangle has equal sides 10 and apex angle 40°. Find its base.'), 'Half-base ' + m('10 sin 20° ≈ 3.42') + ', so the base is ' + m('≈ 6.84') + '.'],
      [m('A rhombus has side 12 and an angle of 70°. Find both diagonals.'), m('d₁ = 24 sin 35° ≈ 13.8') + ', ' + m('d₂ = 24 cos 35° ≈ 19.7')],
      [m('Two people stand 100 m apart on opposite sides of a tower and see its top at 30° and 45°. Find the height.'), m('h cot 30° + h cot 45° = 100') + ', so ' + m('h ≈ 36.6 m')],
      [m('A right triangle has area 24 and one leg 6. Find its angles.'), 'other leg ' + m('8') + ', ' + m('tan α = ' + f('8', '6')) + ', ' + m('α ≈ 53.1°, β ≈ 36.9°')],
      [m('A regular hexagon has side 6. Find the distance between two opposite sides.'), m('2 · 6 sin 60° = 6' + sr('3') + ' ≈ 10.39')]
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Geometry 8, Темы 25–26, pp. 58–61. Draw and label a figure for every question.',
  homework: [
    m('c = 30, α = 25°. Solve the triangle.'),
    m('a = 8, b = 15. Solve the triangle.'),
    m('a = 12, α = 60°. Find c and b.'),
    m('A ladder 8 m long makes 70° with the ground. How high does it reach?'),
    m('From 60 m away the angle of elevation of a mast top is 42°. Find its height.'),
    m('A ramp 20 m long rises 5 m. Find its angle of slope.')
  ]
});

/* ============================== 22 ============================== */
G8_GEO.push({
  id: 'geo-22', stream: 'geo', grade: 8, quarter: 2, lessons: '31', hours: 1,
  title: 'Practical tasks — bearings and scale drawings',
  subtitle: 'The national “practical tasks” lesson, carrying the Cambridge Stage 9 topic of bearings.',
  uz: 'Geometry 8, Тема 28', uzPage: 'Тема 28, pp. 64–66',
  cam: 'Stage 9 · 13.1  [Cambridge insert]', camPage: 'Learner’s Book pp. 271–277', wb: 'Workbook 13.1',
  objectives: [
    'Measure and write a bearing as three figures from north, clockwise.',
    'Find a back bearing.',
    'Make and read a scale drawing.',
    'Combine bearings with right-angle trigonometry to find a distance.'
  ],
  terms: [
    ['Bearing', 'Azimut', 'Азимут'],
    ['North', 'Shimol', 'Север'],
    ['Clockwise', 'Soat yo‘nalishi bo‘yicha', 'По часовой стрелке'],
    ['Back bearing', 'Teskari azimut', 'Обратный азимут'],
    ['Scale', 'Masshtab', 'Масштаб'],
    ['Scale drawing', 'Masshtabli chizma', 'Чертёж в масштабе'],
    ['Compass', 'Kompas', 'Компас'],
    ['Due east', 'Aniq sharq', 'Точно на восток'],
    ['Protractor', 'Transportir', 'Транспортир']
  ],
  sections: [
    {
      h: 'What a bearing is',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      A <b>bearing</b> is an angle measured <b>from north</b>, <b>clockwise</b>, and written with
      <b>three figures</b>.</div>
      {{fig:bearings:The bearing of B from A is 062° — measured from north, turning clockwise.}}
      <p>All three parts matter. ${m('62°')} must be written ${m('062°')}; a bearing measured
      anticlockwise or from another direction is simply wrong. The four cardinal directions are
      ${m('000°')} (N), ${m('090°')} (E), ${m('180°')} (S) and ${m('270°')} (W).</p>
      <div class="warn"><span class="wl">“The bearing of B from A”</span>
      Stand at ${m('A')}, face north, and turn clockwise until you are looking at ${m('B')}. The point
      you stand at is the one after the word “from”.</div>`
    },
    {
      h: 'Back bearings',
      html: `<p>The bearing of ${m('A')} from ${m('B')} is the <b>back bearing</b>. Because the two north
      lines are parallel, the two bearings differ by exactly ${m('180°')}:</p>
      ${eq(m('back bearing = bearing + 180°') + '&nbsp;&nbsp; (or ' + m('− 180°') + ' if that exceeds ' + m('360°') + ')', true)}
      <p>Bearing ${m('062°')} → back bearing ${m('242°')}. Bearing ${m('310°')} → back bearing
      ${m('130°')}.</p>`
    },
    {
      h: 'Scale drawings',
      html: `<p>A scale of ${m('1 : 50 000')} means 1 cm on the paper is 50 000 cm — that is 500 m — on
      the ground. To make a scale drawing:</p>
      <ol>
        <li>Draw a north line at the starting point.</li>
        <li>Measure the bearing with a protractor, clockwise from north.</li>
        <li>Convert the real distance to a paper distance and mark it off.</li>
        <li>Repeat from the new point, with a fresh north line.</li>
      </ol>
      <p>Then measure the answer off the drawing and convert back. A scale drawing gives a good enough
      answer for most practical work — and it is a check on the trigonometry.</p>`
    },
    {
      h: 'Bearings with trigonometry',
      html: `<p>When the bearings are ${m('090°')} apart, the path makes a right angle and the whole of
      this chapter applies.</p>
      <p><b>Example.</b> A ship sails 8 km on a bearing of ${m('000°')} then 6 km on ${m('090°')}. The two
      legs are perpendicular, so the distance from the start is ${m(sr('64 + 36') + ' = 10')} km, and its
      bearing from the start is ${m('tan<sup>−1</sup>' + f('6', '8') + ' ≈ 037°')}.</p>`
    }
  ],
  examples: [
    {
      q: 'The bearing of B from A is 145°. Find the bearing of A from B.',
      steps: [
        [m('145° + 180° = 325°'), 'Add 180° for the back bearing.'],
        [m('325° < 360°'), 'so no adjustment is needed.'],
        [m('325°'), '']
      ],
      ans: m('325°')
    },
    {
      q: 'A ship sails 12 km due north, then 5 km due east. Find its distance and bearing from the start.',
      steps: [
        ['North then east — the two legs are perpendicular.', ''],
        [m('d = ' + sr('144 + 25') + ' = 13 km'), 'Pythagoras.'],
        [m('tan α = ' + f('5', '12') + ' ≈ 0.4167'), 'East over north.'],
        [m('α ≈ 22.6°, so the bearing is 023°'), 'Measured clockwise from north.']
      ],
      ans: m('13 km on a bearing of 023°')
    },
    {
      q: 'On a map of scale 1 : 25 000 two towns are 7.2 cm apart. Find the real distance.',
      steps: [
        [m('1 cm → 25 000 cm'), 'The scale.'],
        [m('25 000 cm = 250 m'), 'Convert to metres.'],
        [m('7.2 · 250 = 1800 m'), ''],
        [m('= 1.8 km'), '']
      ],
      ans: m('1.8 km')
    }
  ],
  modelNote: 'Have a learner walk a bearing across the classroom while the class calls out the angle.',
  interactive: {
    type: 'fractionCancel',
    title: 'Bearings, step by step',
    hint: 'Pick a task and reveal the steps.',
    items: [
      {
        title: 'The bearing of B from A is 062°. Find the back bearing.',
        start: 'Bearing ' + m('062°') + '.',
        steps: [
          ['The two north lines are parallel, so the bearings differ by ' + m('180°') + '.', ''],
          [m('062° + 180° = 242°'), ''],
          ['Under ' + m('360°') + ', so no adjustment.', '']
        ],
        answer: m('242°')
      },
      {
        title: 'The bearing of B from A is 310°. Find the back bearing.',
        start: 'Bearing ' + m('310°') + '.',
        steps: [
          [m('310° + 180° = 490°'), 'Too big for a bearing.'],
          [m('490° − 360° = 130°'), 'Subtract a full turn.'],
          ['A bearing always lies between ' + m('000°') + ' and ' + m('360°') + '.', '']
        ],
        answer: m('130°')
      },
      {
        title: 'North 8 km, then east 6 km — where are you?',
        start: 'Two perpendicular legs.',
        steps: [
          [m('d = ' + sr('64 + 36') + ' = 10 km'), 'Pythagoras.'],
          [m('tan α = ' + f('6', '8') + ' = 0.75'), 'East over north.'],
          [m('α ≈ 36.9°'), ''],
          ['Bearing ' + m('037°'), 'Three figures, clockwise from north.']
        ],
        answer: m('10 km on a bearing of 037°')
      },
      {
        title: 'Scale 1 : 50 000, distance on the map 6.4 cm',
        start: 'Convert to a real distance.',
        steps: [
          [m('1 cm → 50 000 cm'), ''],
          [m('50 000 cm = 500 m = 0.5 km'), 'Convert once, carefully.'],
          [m('6.4 · 0.5 = 3.2 km'), '']
        ],
        answer: m('3.2 km')
      }
    ]
  },
  quiz: [
    { q: 'A bearing is measured:', a: ['from east, anticlockwise', 'from north, clockwise', 'from north, anticlockwise', 'from the horizontal'], c: 1, why: 'Always from north, clockwise, in three figures.' },
    { q: 'Due west as a bearing is:', a: [m('090°'), m('180°'), m('270°'), m('360°')], c: 2, why: 'Three quarters of a turn clockwise from north.' },
    { q: 'The bearing of B from A is 100°. The bearing of A from B is:', a: [m('080°'), m('200°'), m('260°'), m('280°')], c: 3, why: '100° + 180° = 280°.' },
    { q: 'On a 1 : 50 000 map, 1 cm represents:', a: [m('50 m'), m('500 m'), m('5 km'), m('50 km')], c: 1, why: '50 000 cm = 500 m.' }
  ],
  practice: {
    easy: [
      [m('Write due north as a bearing.'), m('000°')],
      [m('Write due east as a bearing.'), m('090°')],
      [m('Write due south as a bearing.'), m('180°')],
      [m('Write due west as a bearing.'), m('270°')],
      [m('Write 45° north-east as a three-figure bearing.'), m('045°')],
      [m('The bearing of B from A is 070°. Find the back bearing.'), m('250°')],
      [m('On a 1 : 100 000 map, 1 cm represents how far?'), m('1 km')]
    ],
    med: [
      [m('The bearing of B from A is 145°. Find the bearing of A from B.'), m('325°')],
      [m('The bearing of B from A is 310°. Find the back bearing.'), m('130°')],
      [m('On a 1 : 25 000 map two towns are 7.2 cm apart. Find the real distance.'), m('1.8 km')],
      [m('A ship sails 12 km north then 5 km east. Find its distance from the start.'), m('13 km')],
      [m('The same ship: find its bearing from the start.'), m('023°')],
      [m('A real distance of 4 km on a 1 : 50 000 map is how many cm?'), m('8 cm')],
      [m('The bearing of B from A is 205°. Find the back bearing.'), m('025°')]
    ],
    hard: [
      [m('A ship sails 9 km on 000°, then 12 km on 090°. Find its distance and bearing from the start.'), m('15 km') + ' on ' + m('053°')],
      [m('A walker goes 5 km on 090° then 5 km on 180°. Find the distance and bearing from the start.'), m('5' + sr('2') + ' ≈ 7.07 km') + ' on ' + m('135°')],
      [m('The bearing of B from A is 062° and AB = 20 km. How far north and how far east is B?'), m('20 cos 62° ≈ 9.4 km') + ' north, ' + m('20 sin 62° ≈ 17.7 km') + ' east'],
      [m('A plane flies 100 km on a bearing of 030°. Find its change in latitude (north) and longitude (east) in km.'), m('86.6 km') + ' north, ' + m('50 km') + ' east'],
      [m('Two ports are 40 km apart, one due east of the other. A ship is 30 km north of the western port. Find its bearing from the eastern port.'), m('tan α = ' + f('40', '30')) + ', so the bearing is ' + m('360° − 53.1° = 307°') + '.'],
      [m('Explain why a back bearing is exactly 180° from the original.'), 'The two north lines are parallel, so the bearings are co-interior angles adding to a straight-line turn.'],
      [m('A map has scale 1 : 20 000. A lake measures 3 cm by 4 cm on it. Find its real area in km².'), m('600 m × 800 m = 0.48 km²')]
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Тема 28, pp. 64–66, and Cambridge Learner’s Book 13.1. Bring a protractor.',
  homework: [
    m('Write these as three-figure bearings: north-east, south-west, due south.'),
    m('The bearing of B from A is 118°. Find the bearing of A from B.'),
    m('On a 1 : 50 000 map two villages are 5.6 cm apart. Find the real distance.'),
    m('A ship sails 8 km north then 15 km east. Find its distance and bearing from the start.'),
    m('Make a scale drawing (1 cm : 1 km) of a journey 6 km on 070° followed by 4 km on 160°, and measure the direct distance home.')
  ]
});

/* ============================== 23 ============================== */
G8_GEO.push({
  id: 'geo-23', stream: 'geo', grade: 8, quarter: 2, lessons: '32', hours: 1,
  title: 'Control work 2 · Pythagoras and trigonometry',
  subtitle: 'The Chapter II assessment, and the four errors it produces every year.',
  uz: 'Geometry 8, Темы 29–30', uzPage: 'pp. 67–68',
  cam: 'Stage 9 · Unit 5 check', camPage: 'Learner’s Book pp. 124–126', wb: 'Workbook 5.5',
  objectives: [
    'Assess Pythagoras, the four ratios, the identity, special angles and solving triangles.',
    'Produce a labelled figure and a stated reason for every answer.',
    'Diagnose each lost mark by error type.'
  ],
  timing: [[2, 'Setting up'], [36, 'The paper'], [2, 'Collect in']],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Solve a triangle', 'Uchburchakni yechish', 'Решить треугольник'],
    ['Figure', 'Chizma', 'Чертёж'],
    ['Reason', 'Asos', 'Обоснование'],
    ['Round to', 'Yaxlitlash', 'Округлить до'],
    ['Error', 'Xato', 'Ошибка'],
    ['Exact value', 'Aniq qiymat', 'Точное значение']
  ],
  sections: [
    {
      h: 'The paper — 40 minutes, 7 tasks, 14 marks',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Task</th><th>Topic</th><th>Source</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Find a side by Pythagoras</td><td>Тема 17</td></tr>
        <tr><td>2</td><td>Test a triangle for a right angle</td><td>Тема 18</td></tr>
        <tr><td>3</td><td>Find the four ratios from the sides</td><td>Тема 15</td></tr>
        <tr><td>4</td><td>Use the basic identity</td><td>Темы 20–21</td></tr>
        <tr><td>5</td><td>Exact value for 30°, 45° or 60°</td><td>Тема 23</td></tr>
        <tr><td>6</td><td>Solve a right triangle</td><td>Темы 25–26</td></tr>
        <tr><td>7</td><td>A practical height or distance problem</td><td>Тема 28</td></tr>
      </tbody></table></div>
      <p><b>Say before the paper starts:</b> a numerical answer with no figure and no reason earns one
      mark out of two. Round to one decimal place unless an exact value is asked for.</p>`
    },
    {
      h: 'Work on mistakes — the four errors',
      html: `<div class="keybox"><div class="klabel">What goes wrong</div>
      <ol style="margin:0">
        <li><b>Added where a subtraction was needed</b> — using ${m('c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>')}
        when looking for a leg.</li>
        <li><b>Opposite and adjacent swapped</b> — sine used where cosine was needed.</li>
        <li><b>The calculator in radian mode</b>, giving a negative or absurd ratio.</li>
        <li><b>Multiplied instead of divided</b> when going from a leg to the hypotenuse.</li>
      </ol></div>
      <p>Each has a one-second check: the hypotenuse must be the longest side; a sine must be under 1;
      the answer must be sensible on the figure. The Hard set below is built from these four.</p>`
    }
  ],
  examples: [
    {
      q: 'Find the error: hypotenuse 13, one leg 5, so the other leg is ' + m(sr('169 + 25') + ' ≈ 13.9'),
      steps: [
        ['The answer is longer than the hypotenuse — impossible.', 'That check alone catches it.'],
        ['Looking for a <b>leg</b>, so subtract.', ''],
        [m('b = ' + sr('169 − 25') + ' = ' + sr('144') + ' = 12'), '']
      ],
      ans: m('12')
    },
    {
      q: 'Find the error: a leg is 6 and the angle opposite it is 30°, so the hypotenuse is ' + m('6 · sin 30° = 3'),
      steps: [
        ['The hypotenuse came out shorter than the leg — impossible.', ''],
        [m('sin 30° = ' + f('a', 'c')) + ', so ' + m('c = ' + f('a', 'sin 30°')), 'Going leg → hypotenuse means dividing.'],
        [m('c = ' + f('6', '0.5') + ' = 12'), '']
      ],
      ans: m('12')
    }
  ],
  modelNote: 'In the mistakes lesson: show the wrong working, take a vote on the error type, then reveal.',
  interactive: {
    type: 'fractionCancel',
    title: 'Diagnose the error',
    hint: 'Which of the four errors is this? Decide, then reveal.',
    items: [
      {
        title: 'Error 1 — added instead of subtracted',
        start: '<b>Claimed:</b> hypotenuse 13, leg 5, other leg ' + m(sr('169 + 25') + ' ≈ 13.9'),
        steps: [
          ['A leg cannot be longer than the hypotenuse.', 'The instant check.'],
          ['To find a leg, subtract: ' + m('b<sup>2</sup> = c<sup>2</sup> − a<sup>2</sup>') + '.', ''],
          [m('b = ' + sr('144') + ' = 12'), 'And 5, 12, 13 is a familiar triple.']
        ],
        answer: m('12')
      },
      {
        title: 'Error 2 — opposite and adjacent swapped',
        start: '<b>Claimed:</b> ' + m('c = 20, α = 35°') + ', adjacent leg ' + m('= 20 sin 35° ≈ 11.5'),
        steps: [
          ['Sine uses the <b>opposite</b> leg, not the adjacent one.', ''],
          ['Adjacent and hypotenuse → cosine.', ''],
          [m('b = 20 cos 35° ≈ 16.4'), 'Sensible: the adjacent leg faces the larger angle here.']
        ],
        answer: m('≈ 16.4')
      },
      {
        title: 'Error 3 — radian mode',
        start: '<b>Claimed:</b> ' + m('sin 37° = −0.6435'),
        steps: [
          ['A negative sine is impossible for an acute angle.', ''],
          ['The calculator is in radian mode — it computed ' + m('sin(37 rad)') + '.', ''],
          ['Switch to DEG: ' + m('sin 37° ≈ 0.602') + '.', '']
        ],
        answer: m('≈ 0.602')
      },
      {
        title: 'Error 4 — multiplied instead of divided',
        start: '<b>Claimed:</b> leg 6 opposite ' + m('30°') + ', so ' + m('c = 6 sin 30° = 3'),
        steps: [
          ['The hypotenuse came out shorter than the leg.', 'Impossible.'],
          [m('sin 30° = ' + f('6', 'c')) + ', so ' + m('c = ' + f('6', 'sin 30°')) + '.', 'Leg → hypotenuse means dividing.'],
          [m('c = 12'), '']
        ],
        answer: m('12')
      }
    ]
  },
  quiz: [
    { q: 'Hypotenuse 25, one leg 7. The other leg is:', a: [m('24'), m('26'), m('32'), m('18')], c: 0, why: '625 − 49 = 576, so the leg is 24.' },
    { q: 'Given the hypotenuse and the angle, the adjacent leg is:', a: [m('c sin α'), m('c cos α'), m(f('c', 'cos α')), m('c tan α')], c: 1, why: 'cos α = adjacent / hypotenuse.' },
    { q: 'A calculator returns ' + m('sin 40 = 0.745') + '. This is:', a: ['correct', 'radian mode', 'impossible', 'a rounding error'], c: 1, why: 'sin 40° ≈ 0.643; 0.745 is sin(40 rad) — check DEG mode.' },
    { q: 'A leg is 9 and the angle opposite is 30°. The hypotenuse is:', a: [m('4.5'), m('18'), m('9' + sr('3')), m('15')], c: 1, why: 'c = 9 ÷ sin 30° = 18.' }
  ],
  practice: {
    easy: [
      [m('<b>Variant 1, task 1.</b> Legs 12 and 16. Find the hypotenuse.'), m('20')],
      [m('<b>Task 2.</b> Is 7, 24, 25 right-angled?'), 'Yes — ' + m('49 + 576 = 625') + '.'],
      [m('<b>Task 3.</b> a = 6, b = 8, c = 10. Find sin α and cos α.'), m('0.6') + ' and ' + m('0.8')],
      [m('<b>Task 4.</b> sin α = 0.6. Find cos α.'), m('0.8')],
      [m('<b>Task 5.</b> Find sin 60° exactly.'), m(f(sr('3'), '2'))],
      [m('<b>Task 6.</b> c = 10, α = 30°. Find both legs.'), m('5') + ' and ' + m('5' + sr('3'))],
      [m('<b>Task 7.</b> A ladder 10 m long has its foot 6 m from a wall. How high does it reach?'), m('8 m')]
    ],
    med: [
      [m('<b>Variant 2, task 1.</b> Hypotenuse 26, one leg 24. Find the other leg.'), m('10')],
      [m('<b>Task 2.</b> Classify the triangle with sides 6, 7, 10.'), m('36 + 49 = 85 < 100') + ' — obtuse.'],
      [m('<b>Task 3.</b> a = 9, b = 12, c = 15. Find tan α and cot α.'), m('0.75') + ' and ' + m(f('4', '3'))],
      [m('<b>Task 4.</b> cos α = ' + f('7', '25') + '. Find sin α.'), m(f('24', '25'))],
      [m('<b>Task 5.</b> Find tan 30° exactly.'), m(f(sr('3'), '3'))],
      [m('<b>Task 6.</b> a = 5, b = 12. Solve the triangle.'), m('c = 13, α ≈ 22.6°, β ≈ 67.4°')],
      [m('<b>Task 7.</b> From 50 m away the angle of elevation of a tower top is 40°. Find its height.'), m('≈ 42.0 m')]
    ],
    hard: [
      [m('Find the error: hypotenuse 13, leg 5, other leg ' + sr('169 + 25')), 'Added instead of subtracted. Correct: ' + m('12') + '.'],
      [m('Find the error: c = 20, α = 35°, adjacent leg = 20 sin 35°'), 'Sine uses the opposite leg. Correct: ' + m('20 cos 35° ≈ 16.4') + '.'],
      [m('Find the error: sin 37° = −0.6435'), 'The calculator is in radian mode. Correct: ' + m('≈ 0.602') + '.'],
      [m('Find the error: leg 6 opposite 30°, so c = 6 sin 30° = 3'), 'Leg → hypotenuse means dividing. Correct: ' + m('12') + '.'],
      [m('Find the error: sin α = 1.25 for an acute angle'), 'Impossible — a sine is under 1. A side has been divided the wrong way round.'],
      [m('Find the error: “sides 5, 12, 13 give sin α = ' + f('13', '5') + '”'), 'The hypotenuse belongs below. Correct: ' + m('sin α = ' + f('5', '13')) + '.'],
      [m('Find the error: “tan 45° = 0, since the legs are equal”'), 'Equal legs give ' + m(f('a', 'a') + ' = 1') + ', not 0.']
    ]
  },
  hwTitle: 'After the control work',
  hwNote: 'Re-solve every task you lost marks on. Quarter III opens with the coordinate method.',
  homework: [
    m('Re-solve every task you lost marks on, with a labelled figure and a stated reason.'),
    m('Write out the four errors from the Hard set in your own words.'),
    m('Learn the table of exact values for 30°, 45° and 60° — Quarter III assumes it.')
  ]
});

G8_GEO.push({
  id: 'geo-24', stream: 'geo', grade: 8, quarter: 3, lessons: '33–34', hours: 2,
  title: 'Coordinates on the plane; the midpoint of a segment',
  subtitle: 'Two numbers fix a point — and from there geometry can be done with arithmetic.',
  uz: 'Geometry 8, Тема 31', uzPage: 'Тема 31, pp. 69–71',
  cam: 'Stage 9 · 3.1', camPage: 'Learner’s Book pp. 56–60', wb: 'Workbook 3.1',
  objectives: [
    'Plot and read points in all four quadrants.',
    'Find the midpoint of a segment from the coordinates of its ends.',
    'Find an endpoint when the midpoint and the other end are known.',
    'Use coordinates to show that a quadrilateral is a parallelogram.'
  ],
  terms: [
    ['Coordinate plane', 'Koordinatalar tekisligi', 'Координатная плоскость'],
    ['Origin', 'Koordinata boshi', 'Начало координат'],
    ['Abscissa (x-coordinate)', 'Abssissa', 'Абсцисса'],
    ['Ordinate (y-coordinate)', 'Ordinata', 'Ордината'],
    ['Quadrant', 'Chorak', 'Координатная четверть'],
    ['Ordered pair', 'Tartiblangan juftlik', 'Упорядоченная пара'],
    ['Midpoint', 'O‘rta nuqta', 'Середина отрезка'],
    ['Segment', 'Kesma', 'Отрезок'],
    ['Axis', 'O‘q', 'Ось'],
    ['Coordinate method', 'Koordinatalar usuli', 'Метод координат']
  ],
  timing: [[6, 'Plot five points from dictation'], [10, 'Reading the plane'], [12, 'The midpoint formula'], [8, 'Problems both ways'], [4, 'Homework']],
  sections: [
    {
      h: 'A point is a pair of numbers',
      html: `<p>Two perpendicular axes meet at the <b>origin</b> ${m('O(0; 0)')}. Any point of the plane
      is then fixed by an <b>ordered pair</b> ${m('A(x; y)')}: first go ${m('x')} along, then ${m('y')}
      up.</p>
      {{fig:coordPoint:A point is fixed by two numbers — how far across, then how far up. The order matters.}}
      <p>The order matters absolutely: ${m('(3; 5)')} and ${m('(5; 3)')} are different points. The axes
      cut the plane into four <b>quadrants</b>:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Quadrant</th><th class="m">I</th><th class="m">II</th><th class="m">III</th><th class="m">IV</th></tr></thead>
      <tbody>
        <tr><td><b>x</b></td><td class="m">+</td><td class="m">−</td><td class="m">−</td><td class="m">+</td></tr>
        <tr><td><b>y</b></td><td class="m">+</td><td class="m">+</td><td class="m">−</td><td class="m">−</td></tr>
      </tbody></table></div>
      <p>A point on the ${m('x')}-axis has ${m('y = 0')}; a point on the ${m('y')}-axis has
      ${m('x = 0')}. The origin is the only point on both.</p>`
    },
    {
      h: 'The midpoint',
      html: `<div class="keybox"><div class="klabel">Midpoint of a segment</div>
      If ${m('A(x₁; y₁)')} and ${m('B(x₂; y₂)')}, the midpoint ${m('M')} of ${m('AB')} is
      ${eq(m('M ( ' + f('x₁ + x₂', '2') + ' ;&nbsp; ' + f('y₁ + y₂', '2') + ' )'), true)}
      — the average of the two ${m('x')}’s and the average of the two ${m('y')}’s.</div>
      <p>Why the average? Going from ${m('A')} to ${m('B')} the ${m('x')}-coordinate changes by
      ${m('x₂ − x₁')}; halfway there it has changed by half of that:</p>
      ${eq(m('x₁ + ' + f('x₂ − x₁', '2') + ' = ' + f('2x₁ + x₂ − x₁', '2') + ' = ' + f('x₁ + x₂', '2')))}
      <p>The same argument works for ${m('y')}. So the formula is not something to memorise blindly —
      it says “stand halfway”.</p>
      <div class="warn"><span class="wl">Read the question</span>
      “Find the midpoint” means average. “Find the other end, given the midpoint” means the reverse:
      ${m('x₂ = 2x_M − x₁')}. Doubling and subtracting, not averaging.</div>`
    },
    {
      h: 'Why coordinates help',
      html: `<p>Once points are numbers, statements about shapes become statements about arithmetic. Take
      ${m('A(1; 2)')}, ${m('B(5; 3)')}, ${m('C(6; 6)')}, ${m('D(2; 5)')}. Is ${m('ABCD')} a
      parallelogram?</p>
      ${eq('midpoint of ' + m('AC') + ': ' + m('(3.5; 4)') + '&nbsp;&nbsp;|&nbsp;&nbsp;midpoint of ' + m('BD') + ': ' + m('(3.5; 4)'))}
      <p>The diagonals share a midpoint, so they bisect each other — and by the test proved in Quarter I,
      ${m('ABCD')} is a parallelogram. No drawing, no measuring, no doubt.</p>
      <p>This is the <b>coordinate method</b>: translate the geometry into coordinates, do the algebra,
      translate the answer back. The rest of this chapter is built on it.</p>`
    }
  ],
  examples: [
    {
      q: 'Find the midpoint of ' + m('A(−3; 4)') + ' and ' + m('B(7; −2)') + '.',
      steps: [
        [m('x_M = ' + f('−3 + 7', '2') + ' = 2'), 'Average the ' + m('x') + '-coordinates.'],
        [m('y_M = ' + f('4 + (−2)', '2') + ' = 1'), 'Average the ' + m('y') + '-coordinates.'],
        [m('M(2; 1)'), 'Check: it lies between the two, as it must.']
      ],
      ans: m('M(2; 1)')
    },
    {
      q: m('M(4; −1)') + ' is the midpoint of ' + m('AB') + ' and ' + m('A(1; 3)') + '. Find ' + m('B') + '.',
      steps: [
        [m(f('1 + x', '2') + ' = 4'), 'Write the midpoint formula and solve for ' + m('x') + '.'],
        [m('1 + x = 8, x = 7'), 'Double, then subtract.'],
        [m(f('3 + y', '2') + ' = −1'), ''],
        [m('3 + y = −2, y = −5'), ''],
        [m('B(7; −5)'), 'Check the midpoint of ' + m('(1;3)') + ' and ' + m('(7;−5)') + ' is ' + m('(4;−1)') + ' ✓']
      ],
      ans: m('B(7; −5)')
    },
    {
      q: 'Show that ' + m('A(0; 0)') + ', ' + m('B(4; 1)') + ', ' + m('C(5; 5)') + ', ' + m('D(1; 4)') + ' form a parallelogram.',
      steps: [
        ['Find the midpoint of each diagonal.', 'The bisection test.'],
        [m('AC: (2.5; 2.5)'), ''],
        [m('BD: (2.5; 2.5)'), 'The same point.'],
        ['The diagonals bisect each other, so ' + m('ABCD') + ' is a parallelogram.', 'Test proved in Quarter I.']
      ],
      ans: 'Yes — the diagonals share the midpoint ' + m('(2.5; 2.5)')
    }
  ],
  modelNote: 'Drag A and B; the golden dot is always the midpoint, and its coordinates are the two averages.',
  interactive: { type: 'coordPlane', title: 'Two points and their midpoint' },
  quiz: [
    { q: 'The midpoint of ' + m('(2; 6)') + ' and ' + m('(8; 2)') + ' is:', a: [m('(5; 4)'), m('(10; 8)'), m('(6; 4)'), m('(3; 2)')], c: 0, why: 'Average each coordinate.' },
    { q: m('(−4; 3)') + ' lies in quadrant:', a: [m('I'), m('II'), m('III'), m('IV')], c: 1, why: m('x < 0, y > 0') + '.' },
    { q: 'If ' + m('M(3; 5)') + ' is the midpoint of ' + m('A(1; 2)B') + ', then ' + m('B') + ' is:', a: [m('(2; 3.5)'), m('(5; 8)'), m('(4; 7)'), m('(6; 10)')], c: 1, why: m('2 · 3 − 1 = 5') + ', ' + m('2 · 5 − 2 = 8') + '.' },
    { q: 'A point on the ' + m('y') + '-axis has:', a: [m('y = 0'), m('x = 0'), m('x = y'), m('x = 1')], c: 1, why: 'It is directly above or below the origin.' },
    { q: 'The midpoint of a segment from ' + m('(−5; −3)') + ' to ' + m('(5; 3)') + ' is:', a: [m('(0; 0)'), m('(5; 3)'), m('(0; 3)'), m('(10; 6)')], c: 0, why: 'The two points are symmetric about the origin.' }
  ],
  practice: {
    easy: [
      [m('Find the midpoint of (0; 0) and (6; 8).'), m('(3; 4)')],
      [m('Find the midpoint of (2; 5) and (8; 11).'), m('(5; 8)')],
      [m('In which quadrant is (3; −7)?'), m('IV')],
      [m('Find the midpoint of (−2; 4) and (6; 4).'), m('(2; 4)')],
      [m('Write the coordinates of the origin.'), m('(0; 0)')],
      [m('Find the midpoint of (−1; −1) and (5; 7).'), m('(2; 3)')],
      [m('A point has x = 0 and y = −4. Where does it lie?'), 'On the ' + m('y') + '-axis, below the origin.']
    ],
    med: [
      [m('Find the midpoint of (−7; 2) and (3; −8).'), m('(−2; −3)')],
      [m('M(2; 3) is the midpoint of A(−1; 5)B. Find B.'), m('B(5; 1)')],
      [m('M(0; 0) is the midpoint of A(−4; 6)B. Find B.'), m('B(4; −6)')],
      [m('Find the midpoint of (1.5; 2.5) and (4.5; 7.5).'), m('(3; 5)')],
      [m('The midpoints of the diagonals of ABCD are (2; 3) and (2; 3). What can you conclude?'), 'The diagonals bisect each other, so ' + m('ABCD') + ' is a parallelogram.'],
      [m('A(1; 1), B(7; 3). Find the point one quarter of the way from A to B.'), m('(2.5; 1.5)') + ' — the midpoint of ' + m('A') + ' and the midpoint of ' + m('AB')],
      [m('Find the midpoint of the segment joining (a; b) and (3a; 5b).'), m('(2a; 3b)')]
    ],
    hard: [
      [m('A(1; 2), B(5; 4), C(7; 8). Find D so that ABCD is a parallelogram.'), m('D(3; 6)') + ' — the diagonals must share the midpoint ' + m('(4; 5)')],
      [m('Show that (0; 0), (6; 2), (8; 8), (2; 6) form a parallelogram.'), 'Both diagonals have midpoint ' + m('(4; 4)') + '.'],
      [m('The vertices of a triangle are (0; 0), (6; 0), (2; 8). Find the midpoints of all three sides.'), m('(3; 0), (4; 4), (1; 4)')],
      [m('M is the midpoint of AB, with A(−3; 7) and M(1; 1). Find B and the midpoint of AM.'), m('B(5; −5)') + ', midpoint of ' + m('AM') + ' is ' + m('(−1; 4)')],
      [m('P(2; 3) and Q(10; 7). Find the two points that divide PQ into three equal parts.'), m('(4' + f('2', '3') + '; 4' + f('1', '3') + ')') + ' and ' + m('(7' + f('1', '3') + '; 5' + f('2', '3') + ')')],
      [m('Prove that the diagonals of the quadrilateral (0;0), (a;0), (a+b;c), (b;c) bisect each other.'), 'Both diagonals have midpoint ' + m('(' + f('a + b', '2') + '; ' + f('c', '2') + ')') + ', so the figure is a parallelogram for all ' + m('a, b, c') + '.'],
      [m('A(1; 1) and B(9; 5). A point C on AB has AC = 3·CB. Find C.'), m('(7; 4)')]
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Geometry 8, Тема 31, pp. 69–71. Sketch the axes for every problem, even the easy ones.',
  homework: [
    m('Find the midpoint of (3; 7) and (11; 1).'),
    m('Find the midpoint of (−6; 2) and (4; −8).'),
    m('M(3; −2) is the midpoint of A(7; 4)B. Find B.'),
    m('Plot A(−2; 3), B(4; 3), C(4; −1), D(−2; −1) and name the shape.'),
    m('Show that (1; 1), (5; 2), (6; 6), (2; 5) form a parallelogram.'),
    m('Find the midpoints of all three sides of the triangle (0; 0), (8; 0), (4; 6).')
  ]
});

G8_GEO.push({
  id: 'geo-25', stream: 'geo', grade: 8, quarter: 3, lessons: '35–36', hours: 2,
  title: 'The distance between two points; the equation of a circle',
  subtitle: 'Pythagoras, written in coordinates — and the equation that a circle turns out to be.',
  uz: 'Geometry 8, Темы 32–33', uzPage: 'Темы 32–33, pp. 72–74',
  cam: 'Stage 9 · 3.1, 7.1', camPage: 'Learner’s Book pp. 56–60, 142–148', wb: 'Workbook 3.1',
  objectives: [
    'Find the distance between two points from their coordinates.',
    'Recognise ' + m('(x − a)² + (y − b)² = r²') + ' as the equation of a circle.',
    'Write the equation of a circle from its centre and radius, and read them back.',
    'Decide whether a given point lies inside, on or outside a circle.'
  ],
  terms: [
    ['Distance', 'Masofa', 'Расстояние'],
    ['Distance formula', 'Masofa formulasi', 'Формула расстояния'],
    ['Right-angled triangle', 'To‘g‘ri burchakli uchburchak', 'Прямоугольный треугольник'],
    ['Circle', 'Aylana', 'Окружность'],
    ['Centre', 'Markaz', 'Центр'],
    ['Radius', 'Radius', 'Радиус'],
    ['Equation of a circle', 'Aylana tenglamasi', 'Уравнение окружности'],
    ['Locus', 'Geometrik o‘rin', 'Геометрическое место точек'],
    ['Inside / outside', 'Ichida / tashqarisida', 'Внутри / снаружи'],
    ['Unit circle', 'Birlik aylana', 'Единичная окружность']
  ],
  timing: [[6, 'Recall Pythagoras'], [12, 'The distance formula'], [12, 'The equation of a circle'], [6, 'Inside, on or outside'], [4, 'Homework']],
  sections: [
    {
      h: 'Distance is Pythagoras in disguise',
      html: `<p>Join ${m('A(x₁; y₁)')} to ${m('B(x₂; y₂)')} and complete a right-angled triangle with
      legs parallel to the axes. The horizontal leg is ${m('x₂ − x₁')}, the vertical leg is
      ${m('y₂ − y₁')}, and the segment ${m('AB')} is the hypotenuse.</p>
      {{fig:distanceFormula:The distance between two points is the hypotenuse of a right triangle whose legs are the differences of the coordinates.}}
      <div class="keybox"><div class="klabel">Distance formula</div>
      ${eq(m('AB = ' + sr('(x₂ − x₁)² + (y₂ − y₁)²')), true)}</div>
      <p>The squares make the order of subtraction irrelevant: ${m('(3 − 7)² = (7 − 3)² = 16')}. That is
      the one place where this formula forgives you — everywhere else, be careful.</p>
      <p>Leave the answer in surd form unless a decimal is asked for. ${m(sr('20') + ' = 2' + sr('5'))} is
      exact; ${m('4.47')} is not.</p>`
    },
    {
      h: 'What a circle is, as an equation',
      html: `<p>A circle of radius ${m('r')} centred at ${m('C(a; b)')} is the set of all points at
      distance exactly ${m('r')} from ${m('C')}. Write that with the distance formula:</p>
      ${eq(m(sr('(x − a)² + (y − b)²') + ' = r'))}
      <p>Square both sides — both are positive, so nothing is lost:</p>
      <div class="keybox"><div class="klabel">Equation of a circle</div>
      ${eq(m('(x − a)² + (y − b)² = r²'), true)}
      Centred at the origin this becomes simply ${m('x² + y² = r²')}.</div>
      {{fig:circleEquation:Every point of the circle is at the same distance r from the centre — that single condition is the equation.}}
      <div class="warn"><span class="wl">Read the signs backwards</span>
      ${m('(x − 3)² + (y + 2)² = 25')} has centre ${m('(3; −2)')}, not ${m('(3; 2)')}, and radius
      ${m('5')}, not ${m('25')}. The formula subtracts the centre, so the sign you see is the opposite
      of the sign you want.</div>`
    },
    {
      h: 'Inside, on, or outside',
      html: `<p>Compare the distance from the centre with the radius:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Condition</th><th>Position of the point</th></tr></thead>
      <tbody>
        <tr><td class="m">(x − a)² + (y − b)² &lt; r²</td><td>inside the circle</td></tr>
        <tr><td class="m">(x − a)² + (y − b)² = r²</td><td>on the circle</td></tr>
        <tr><td class="m">(x − a)² + (y − b)² &gt; r²</td><td>outside the circle</td></tr>
      </tbody></table></div>
      <p>There is no need to take a square root — just substitute the point into the left-hand side and
      compare with ${m('r²')}. Is ${m('(6; 1)')} inside ${m('x² + y² = 36')}? Substituting gives
      ${m('36 + 1 = 37 > 36')}, so it is just outside.</p>`
    }
  ],
  examples: [
    {
      q: 'Find the distance between ' + m('A(1; 2)') + ' and ' + m('B(5; 5)') + '.',
      steps: [
        [m('x₂ − x₁ = 4'), 'The horizontal leg.'],
        [m('y₂ − y₁ = 3'), 'The vertical leg.'],
        [m('AB = ' + sr('16 + 9') + ' = ' + sr('25')), ''],
        [m('AB = 5'), 'A 3–4–5 triangle.']
      ],
      ans: m('5')
    },
    {
      q: 'Write the equation of the circle with centre ' + m('(−2; 3)') + ' and radius ' + m('4') + '.',
      steps: [
        [m('a = −2, b = 3, r = 4'), ''],
        [m('(x − (−2))² + (y − 3)² = 4²'), 'Substitute into the standard form.'],
        [m('(x + 2)² + (y − 3)² = 16'), 'Two minus signs make a plus.']
      ],
      ans: m('(x + 2)² + (y − 3)² = 16')
    },
    {
      q: 'A circle has equation ' + m('(x − 1)² + (y + 4)² = 25') + '. State its centre and radius, and say whether ' + m('(4; 0)') + ' lies on it.',
      steps: [
        [m('centre (1; −4)'), 'Change the sign of what is subtracted.'],
        [m('r = 5'), m('25 = 5²') + '.'],
        [m('(4 − 1)² + (0 + 4)² = 9 + 16 = 25'), 'Substitute the point.'],
        [m('25 = r²'), 'So the point lies exactly on the circle.']
      ],
      ans: 'Centre ' + m('(1; −4)') + ', radius ' + m('5') + '; the point is on the circle'
    }
  ],
  modelNote: 'Drag A and B and watch the distance readout follow the two coordinate differences.',
  interactive: { type: 'coordPlane', title: 'Distance between two points' },
  quiz: [
    { q: 'The distance between ' + m('(0; 0)') + ' and ' + m('(6; 8)') + ' is:', a: [m('10'), m('14'), m('48'), m('7')], c: 0, why: m(sr('36 + 64') + ' = 10') + '.' },
    { q: 'The centre of ' + m('(x − 2)² + (y + 5)² = 9') + ' is:', a: [m('(−2; 5)'), m('(2; −5)'), m('(2; 5)'), m('(−2; −5)')], c: 1, why: 'Change the sign of what is subtracted.' },
    { q: 'The radius of ' + m('x² + y² = 49') + ' is:', a: [m('49'), m('7'), m('24.5'), m(sr('7'))], c: 1, why: m('49 = 7²') + '.' },
    { q: 'The distance between ' + m('(1; 1)') + ' and ' + m('(4; 5)') + ' is:', a: [m('5'), m('7'), m(sr('7')), m('25')], c: 0, why: m(sr('9 + 16') + ' = 5') + '.' },
    { q: 'Is ' + m('(3; 3)') + ' inside ' + m('x² + y² = 25') + '?', a: ['Yes', 'No, it is on it', 'No, it is outside', 'Cannot tell'], c: 0, why: m('9 + 9 = 18 < 25') + '.' }
  ],
  practice: {
    easy: [
      [m('Find the distance between (0; 0) and (3; 4).'), m('5')],
      [m('Find the distance between (1; 0) and (1; 7).'), m('7')],
      [m('Find the distance between (2; 3) and (6; 6).'), m('5')],
      [m('Write the equation of the circle, centre (0; 0), radius 6.'), m('x² + y² = 36')],
      [m('State the centre and radius of (x − 4)² + (y − 1)² = 16.'), m('(4; 1), r = 4')],
      [m('State the radius of x² + y² = 100.'), m('10')],
      [m('Is (0; 0) inside x² + y² = 9?'), 'Yes — ' + m('0 < 9')]
    ],
    med: [
      [m('Find the distance between (−3; 2) and (1; −1).'), m('5')],
      [m('Find the distance between (−2; −5) and (4; 3).'), m('10')],
      [m('Write the equation of the circle, centre (3; −2), radius 7.'), m('(x − 3)² + (y + 2)² = 49')],
      [m('State the centre and radius of (x + 5)² + (y − 3)² = 36.'), m('(−5; 3), r = 6')],
      [m('Find the exact distance between (0; 0) and (2; 3).'), m(sr('13'))],
      [m('Does (5; 12) lie on x² + y² = 169?'), 'Yes — ' + m('25 + 144 = 169')],
      [m('The centre of a circle is (2; 2) and it passes through (2; 7). Find its equation.'), m('(x − 2)² + (y − 2)² = 25')]
    ],
    hard: [
      [m('Show that (1; 2), (4; 6), (8; 3) form an isosceles triangle.'), m('AB = 5, BC = 5, AC = ' + sr('50')) + ' — two sides equal'],
      [m('Show that (0; 0), (4; 0), (4; 3) is right-angled.'), m('16 + 9 = 25') + ' — Pythagoras holds, so the angle at ' + m('(4; 0)') + ' is ' + m('90°')],
      [m('A circle has centre (1; −1) and passes through (4; 3). Find its equation.'), m('(x − 1)² + (y + 1)² = 25')],
      [m('Find the equation of the circle whose diameter joins (1; 2) and (7; 10).'), 'centre ' + m('(4; 6)') + ', ' + m('r = 5') + ': ' + m('(x − 4)² + (y − 6)² = 25')],
      [m('Where does x² + y² = 25 cut the axes?'), m('(±5; 0)') + ' and ' + m('(0; ±5)')],
      [m('Is (−3; 4) inside, on or outside (x + 1)² + (y − 1)² = 16?'), m('4 + 9 = 13 < 16') + ' — inside'],
      [m('Find the perimeter of the triangle (0; 0), (6; 0), (6; 8).'), m('6 + 8 + 10 = 24')]
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Geometry 8, Темы 32–33, pp. 72–74. Leave surds exact unless a decimal is asked for.',
  homework: [
    m('Find the distance between (2; 1) and (10; 7).'),
    m('Find the distance between (−4; 3) and (2; −5).'),
    m('Write the equation of the circle, centre (−1; 4), radius 3.'),
    m('State the centre and radius of (x − 6)² + (y + 2)² = 81.'),
    m('Show that (0; 0), (5; 0), (0; 12) is right-angled and find its perimeter.'),
    m('Is (2; 6) inside, on or outside x² + y² = 40?')
  ]
});

G8_GEO.push({
  id: 'geo-26', stream: 'geo', grade: 8, quarter: 3, lessons: '37', hours: 1,
  title: 'The equation of a straight line',
  subtitle: 'Every straight line is one linear equation — and every linear equation is one straight line.',
  uz: 'Geometry 8, Тема 34', uzPage: 'Тема 34, pp. 75–77',
  cam: 'Stage 9 · 10.1–10.2', camPage: 'Learner’s Book pp. 214–224', wb: 'Workbook 10.1',
  objectives: [
    'Write the equation of a line from its gradient and a point.',
    'Find the equation of a line through two given points.',
    'Recognise the equations of horizontal and vertical lines.',
    'Decide whether a point lies on a line.'
  ],
  terms: [
    ['Straight line', 'To‘g‘ri chiziq', 'Прямая'],
    ['Equation of a line', 'To‘g‘ri chiziq tenglamasi', 'Уравнение прямой'],
    ['Gradient', 'Burchak koeffitsienti', 'Угловой коэффициент'],
    ['Intercept', 'Kesma (o‘qdagi)', 'Отрезок на оси'],
    ['General form', 'Umumiy ko‘rinish', 'Общий вид'],
    ['Horizontal line', 'Gorizontal chiziq', 'Горизонтальная прямая'],
    ['Vertical line', 'Vertikal chiziq', 'Вертикальная прямая'],
    ['Satisfies the equation', 'Tenglamani qanoatlantiradi', 'Удовлетворяет уравнению'],
    ['Intersection point', 'Kesishish nuqtasi', 'Точка пересечения']
  ],
  timing: [[5, 'Plot three points and join them'], [12, 'Gradient and intercept'], [12, 'Through two points'], [7, 'Special lines'], [4, 'Homework']],
  sections: [
    {
      h: 'The two standard forms',
      html: `<div class="keybox"><div class="klabel">Equation of a straight line</div>
      ${eq(m('y = kx + b') + '&nbsp;&nbsp;(gradient–intercept)&nbsp;&nbsp;or&nbsp;&nbsp;' + m('Ax + By + C = 0') + '&nbsp;&nbsp;(general)', true)}
      In ${m('y = kx + b')}, ${m('k')} is the gradient and ${m('b')} the height at which the line crosses
      the ${m('y')}-axis.</div>
      {{fig:gradientIntercept:The gradient is rise ÷ run; b is where the line meets the y-axis.}}
      <p>A point lies on a line exactly when its coordinates <b>satisfy</b> the equation. Does
      ${m('(3; 7)')} lie on ${m('y = 2x + 1')}? ${m('2 · 3 + 1 = 7')} ✓ — yes.</p>`
    },
    {
      h: 'Through two points',
      html: `<p>Two points fix a line completely. Find the gradient first, then the intercept:</p>
      ${eq(m('k = ' + f('y₂ − y₁', 'x₂ − x₁')), true)}
      <p>Through ${m('(2; 3)')} and ${m('(6; 11)')}: ${m('k = ' + f('8', '4') + ' = 2')}, so
      ${m('y = 2x + b')}. Substituting ${m('(2; 3)')} gives ${m('3 = 4 + b')}, so ${m('b = −1')} and the
      line is ${m('y = 2x − 1')}. Check with the second point: ${m('12 − 1 = 11')} ✓.</p>
      <div class="warn"><span class="wl">Two special cases</span>
      A <b>horizontal</b> line is ${m('y = c')} — gradient ${m('0')}. A <b>vertical</b> line is
      ${m('x = c')} — it has no gradient at all, and it cannot be written as ${m('y = kx + b')}, because
      the run is zero.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the equation of the line through ' + m('A(1; 4)') + ' and ' + m('B(5; 12)') + '.',
      steps: [
        [m('k = ' + f('12 − 4', '5 − 1') + ' = 2'), 'Same order top and bottom.'],
        [m('y = 2x + b'), ''],
        [m('4 = 2 · 1 + b'), 'Substitute ' + m('A') + '.'],
        [m('b = 2'), ''],
        [m('y = 2x + 2'), 'Check ' + m('B') + ': ' + m('10 + 2 = 12') + ' ✓']
      ],
      ans: m('y = 2x + 2')
    },
    {
      q: 'Where do ' + m('y = 3x − 2') + ' and ' + m('y = x + 6') + ' meet?',
      steps: [
        [m('3x − 2 = x + 6'), 'At the meeting point both give the same ' + m('y') + '.'],
        [m('2x = 8, x = 4'), ''],
        [m('y = 4 + 6 = 10'), 'Substitute into either equation.'],
        [m('(4; 10)'), 'Check in the other: ' + m('12 − 2 = 10') + ' ✓']
      ],
      ans: m('(4; 10)')
    }
  ],
  modelNote: 'Drag the two points and read the gradient from the change in x and the change in y.',
  interactive: { type: 'coordPlane', title: 'A line through two points' },
  quiz: [
    { q: 'The gradient of ' + m('y = 4 − 2x') + ' is:', a: [m('4'), m('2'), m('−2'), m('−4')], c: 2, why: 'Rewrite as ' + m('y = −2x + 4') + '.' },
    { q: 'The line through ' + m('(0; 1)') + ' and ' + m('(3; 7)') + ' is:', a: [m('y = 2x + 1'), m('y = 3x + 1'), m('y = 2x'), m('y = x + 1')], c: 0, why: m('k = ' + f('6', '3') + ' = 2') + ', ' + m('b = 1') + '.' },
    { q: 'A horizontal line has equation:', a: [m('x = c'), m('y = c'), m('y = x'), m('x + y = 0')], c: 1, why: 'The height never changes.' },
    { q: 'Does ' + m('(2; 5)') + ' lie on ' + m('y = 3x − 1') + '?', a: ['Yes', 'No', 'Only if x > 0', 'Cannot tell'], c: 0, why: m('6 − 1 = 5') + ' ✓' }
  ],
  practice: {
    easy: [
      [m('State the gradient and intercept of y = 3x + 5.'), m('k = 3, b = 5')],
      [m('Does (1; 4) lie on y = 4x?'), 'Yes.'],
      [m('Write the equation of the horizontal line through (2; 7).'), m('y = 7')],
      [m('Write the equation of the vertical line through (2; 7).'), m('x = 2')],
      [m('Find the gradient through (0; 0) and (3; 9).'), m('3')],
      [m('Where does y = 2x − 6 cut the y-axis?'), m('(0; −6)')],
      [m('Where does y = 2x − 6 cut the x-axis?'), m('(3; 0)')]
    ],
    med: [
      [m('Find the equation through (0; 3) with gradient −2.'), m('y = −2x + 3')],
      [m('Find the equation through (1; 5) and (3; 11).'), m('y = 3x + 2')],
      [m('Find the equation through (−2; 1) and (2; 9).'), m('y = 2x + 5')],
      [m('Rearrange 2x + y − 8 = 0 into y = kx + b.'), m('y = −2x + 8')],
      [m('Where do y = x + 1 and y = 5 − x meet?'), m('(2; 3)')],
      [m('Find the equation through (4; 0) and (0; 8).'), m('y = −2x + 8')],
      [m('Does (−1; −5) lie on y = 4x − 1?'), 'Yes — ' + m('−4 − 1 = −5')]
    ],
    hard: [
      [m('Find the equation through (2; −3) and (−4; 9).'), m('y = −2x + 1')],
      [m('Where do 2x + y = 7 and x − y = 2 meet?'), m('(3; 1)')],
      [m('Show that (1; 3), (4; 9) and (6; 13) are collinear.'), 'All satisfy ' + m('y = 2x + 1') + '.'],
      [m('A line has gradient 3 and passes through (2; 1). Find where it cuts each axis.'), m('y = 3x − 5') + ': ' + m('(0; −5)') + ' and ' + m('(' + f('5', '3') + '; 0)')],
      [m('Find the equation of the line through (0; 0) and the midpoint of (2; 4) and (6; 8).'), 'midpoint ' + m('(4; 6)') + ', so ' + m('y = ' + f('3', '2') + 'x')],
      [m('The line y = kx + 2 passes through (4; −6). Find k.'), m('k = −2')],
      [m('Find the equation of the perpendicular bisector of the segment from (0; 0) to (4; 2).'), 'midpoint ' + m('(2; 1)') + ', gradient ' + m('−2') + ': ' + m('y = −2x + 5')]
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Тема 34, pp. 75–77. Always check your equation with the second point.',
  homework: [
    m('Find the equation through (0; −2) with gradient 5.'),
    m('Find the equation through (1; 2) and (4; 11).'),
    m('Where do y = 3x − 4 and y = x + 2 meet?'),
    m('Write the horizontal and the vertical line through (−3; 6).'),
    m('Show that (2; 5), (4; 9) and (7; 15) are collinear.')
  ]
});

G8_GEO.push({
  id: 'geo-27', stream: 'geo', grade: 8, quarter: 3, lessons: '38', hours: 1,
  title: 'The coordinate method in practice',
  subtitle: 'Choose your axes well and a hard proof becomes two lines of arithmetic.',
  uz: 'Geometry 8, Тема 34', uzPage: 'Тема 34, pp. 75–77',
  cam: 'Stage 9 · 3.1', camPage: 'Learner’s Book pp. 56–60', wb: 'Workbook 3.1',
  objectives: [
    'Place a figure on axes so that its coordinates are as simple as possible.',
    'Prove that a quadrilateral is a parallelogram, rectangle or rhombus using coordinates.',
    'Classify a triangle from the lengths of its sides.',
    'Find an unknown vertex from a condition.'
  ],
  terms: [
    ['Coordinate method', 'Koordinatalar usuli', 'Метод координат'],
    ['To place on axes', 'O‘qlarga joylashtirish', 'Расположить на осях'],
    ['Prove', 'Isbotlash', 'Доказать'],
    ['Isosceles', 'Teng yonli', 'Равнобедренный'],
    ['Scalene', 'Turli tomonli', 'Разносторонний'],
    ['Collinear', 'Bir to‘g‘ri chiziqda yotuvchi', 'Лежащие на одной прямой'],
    ['Vertex', 'Uchi', 'Вершина'],
    ['Diagonal', 'Diagonal', 'Диагональ'],
    ['Converse', 'Teskari teorema', 'Обратная теорема']
  ],
  timing: [[5, 'Place a rectangle on axes three ways'], [12, 'Proving with coordinates'], [12, 'Classifying triangles'], [7, 'Finding a missing vertex'], [4, 'Homework']],
  sections: [
    {
      h: 'Choose the axes yourself',
      html: `<p>When a problem gives you a shape but no coordinates, <b>you</b> choose where to put it. A
      good choice puts one vertex at the origin and one side along an axis, so that as many coordinates
      as possible are zero.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Shape</th><th>A good placing</th></tr></thead>
      <tbody>
        <tr><td>Rectangle</td><td class="m">(0;0), (a;0), (a;b), (0;b)</td></tr>
        <tr><td>Right triangle</td><td class="m">(0;0), (a;0), (0;b)</td></tr>
        <tr><td>Isosceles triangle</td><td class="m">(−a;0), (a;0), (0;h)</td></tr>
        <tr><td>Parallelogram</td><td class="m">(0;0), (a;0), (a+b;c), (b;c)</td></tr>
      </tbody></table></div>
      <p>The letters keep the proof general — it then holds for <b>every</b> rectangle, not just the one
      you drew.</p>`
    },
    {
      h: 'The three tools',
      html: `<div class="keybox"><div class="klabel">Everything comes from these</div>
      <ol style="margin:0">
        <li><b>Distance</b> ${m(sr('(x₂ − x₁)² + (y₂ − y₁)²'))} — for equal sides, and for Pythagoras.</li>
        <li><b>Midpoint</b> ${m('(' + f('x₁ + x₂', '2') + '; ' + f('y₁ + y₂', '2') + ')')} — for bisection and for medians.</li>
        <li><b>Gradient</b> ${m(f('y₂ − y₁', 'x₂ − x₁'))} — for parallel (equal) and perpendicular (product ${m('−1')}).</li>
      </ol></div>
      <p>Which shape you are proving decides which tool you reach for:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>To prove</th><th>Show that</th></tr></thead>
      <tbody>
        <tr><td>parallelogram</td><td>the diagonals share a midpoint</td></tr>
        <tr><td>rectangle</td><td>a parallelogram whose diagonals are also equal</td></tr>
        <tr><td>rhombus</td><td>all four sides equal</td></tr>
        <tr><td>right-angled triangle</td><td>Pythagoras holds, or two gradients multiply to ${m('−1')}</td></tr>
        <tr><td>isosceles triangle</td><td>two side lengths are equal</td></tr>
      </tbody></table></div>`
    }
  ],
  examples: [
    {
      q: 'Prove that ' + m('A(0; 0)') + ', ' + m('B(4; 0)') + ', ' + m('C(4; 3)') + ', ' + m('D(0; 3)') + ' is a rectangle.',
      steps: [
        ['Midpoint of ' + m('AC') + ': ' + m('(2; 1.5)'), ''],
        ['Midpoint of ' + m('BD') + ': ' + m('(2; 1.5)'), 'Diagonals bisect each other ⟹ parallelogram.'],
        [m('AC = ' + sr('16 + 9') + ' = 5'), ''],
        [m('BD = ' + sr('16 + 9') + ' = 5'), 'The diagonals are also equal.'],
        ['A parallelogram with equal diagonals is a rectangle.', 'Theorem from Quarter I.']
      ],
      ans: 'A rectangle'
    },
    {
      q: 'Classify the triangle ' + m('A(0; 0)') + ', ' + m('B(6; 0)') + ', ' + m('C(3; 4)') + '.',
      steps: [
        [m('AB = 6'), 'Along the axis.'],
        [m('AC = ' + sr('9 + 16') + ' = 5'), ''],
        [m('BC = ' + sr('9 + 16') + ' = 5'), 'Two sides equal.'],
        [m('5² + 5² = 50 ≠ 36'), 'Not right-angled.']
      ],
      ans: 'Isosceles, but not right-angled'
    }
  ],
  modelNote: 'Place the vertices with the model, then read off the distances the proof needs.',
  interactive: { type: 'coordPlane', title: 'Measure a side of your figure' },
  quiz: [
    { q: 'To prove a quadrilateral is a parallelogram with coordinates, show:', a: ['all sides equal', 'the diagonals share a midpoint', 'one angle is 90°', 'the diagonals are equal'], c: 1, why: 'That is the bisection test.' },
    { q: m('(0; 0), (5; 0), (5; 5), (0; 5)') + ' is a:', a: ['rectangle only', 'rhombus only', 'square', 'trapezium'], c: 2, why: 'All sides 5 and all angles right.' },
    { q: 'A triangle with sides ' + m('5, 5, 6') + ' is:', a: ['equilateral', 'isosceles', 'scalene', 'right-angled'], c: 1, why: 'Exactly two sides equal.' },
    { q: 'Two lines are perpendicular when their gradients:', a: ['are equal', 'multiply to ' + m('−1'), 'add to 0', 'are both positive'], c: 1, why: m('k₁k₂ = −1') + '.' }
  ],
  practice: {
    easy: [
      [m('Find the length of the side from (0; 0) to (0; 7).'), m('7')],
      [m('Is (0;0), (4;0), (4;4), (0;4) a square?'), 'Yes.'],
      [m('Find the midpoint of the diagonal from (0; 0) to (6; 8).'), m('(3; 4)')],
      [m('Classify the triangle (0;0), (3;0), (0;4).'), 'Right-angled, scalene.'],
      [m('Find the gradient from (0; 0) to (2; 6).'), m('3')],
      [m('Are the segments from (0;0) to (2;1) and (0;0) to (−1;2) perpendicular?'), 'Yes — ' + m(f('1', '2') + ' · (−2) = −1')],
      [m('Find the perimeter of (0;0), (3;0), (3;4).'), m('12')]
    ],
    med: [
      [m('Prove that (1;1), (5;1), (5;4), (1;4) is a rectangle.'), 'Diagonals both have midpoint ' + m('(3; 2.5)') + ' and both equal ' + m('5') + '.'],
      [m('Classify the triangle (0;0), (4;0), (2;5).'), 'Isosceles — ' + m('AC = BC = ' + sr('29'))],
      [m('Show that (0;0), (4;3), (8;0), (4;−3) is a rhombus.'), 'All four sides equal ' + m('5') + '.'],
      [m('Find the fourth vertex of a parallelogram with (0;0), (5;1), (7;5).'), m('(2; 4)')],
      [m('Show that the triangle (0;0), (6;0), (0;8) is right-angled and find its area.'), m('36 + 64 = 100') + ' ✓; area ' + m('24')],
      [m('Find the length of the median from (0;0) to the side joining (6;0) and (2;4).'), 'midpoint ' + m('(4; 2)') + ', length ' + m(sr('20') + ' = 2' + sr('5'))],
      [m('Are (1;2), (3;6) and (6;12) collinear?'), 'Yes — both gradients equal ' + m('2') + ', and all three satisfy ' + m('y = 2x') + '.']
    ],
    hard: [
      [m('Prove that the diagonals of the rectangle (0;0), (a;0), (a;b), (0;b) are equal, for all a and b.'), 'Both diagonals equal ' + m(sr('a² + b²')) + '.'],
      [m('Prove that the midpoints of the sides of any quadrilateral form a parallelogram.'), 'With vertices ' + m('(x₁;y₁)…(x₄;y₄)') + ', both diagonals of the midpoint figure have midpoint ' + m('(' + f('x₁+x₂+x₃+x₄', '4') + '; ' + f('y₁+y₂+y₃+y₄', '4') + ')') + '.'],
      [m('Show that the triangle (1;1), (4;5), (8;2) is right-angled.'), m('25 + 25 = 50') + ' ✓ — the right angle is at ' + m('(4; 5)')],
      [m('Find the point on the x-axis equidistant from (1; 2) and (5; 4).'), m('(4.5; 0)')],
      [m('Prove that the medians of the triangle (0;0), (6;0), (0;6) meet at (2; 2).'), 'Each median passes through ' + m('(2; 2)') + ' — the centroid is the average of the vertices.'],
      [m('The vertices of a square are (0;0), (4;2) and (2;6). Find the fourth.'), m('(−2; 4)')],
      [m('Show that (0;0), (6;0), (8;3), (2;3) is a parallelogram but not a rhombus.'), 'Both diagonals have midpoint ' + m('(4; 1.5)') + ', so it is a parallelogram; but the sides are ' + m('6') + ' and ' + m(sr('13')) + ', which are unequal.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Тема 34. State which of the three tools you used at each step.',
  homework: [
    m('Prove that (0;0), (6;0), (6;4), (0;4) is a rectangle.'),
    m('Classify the triangle (0;0), (8;0), (4;3).'),
    m('Show that (0;0), (3;4), (8;4), (5;0) is a rhombus.'),
    m('Find the fourth vertex of a parallelogram with (1;1), (6;2), (8;7).'),
    m('Show that (2;1), (5;7) and (8;13) are collinear.')
  ]
});

G8_GEO.push({
  id: 'geo-28', stream: 'geo', grade: 8, quarter: 3, lessons: '39', hours: 1,
  title: 'The concept of a vector',
  subtitle: 'A quantity that needs a direction as well as a size — and the notation that carries both.',
  uz: 'Geometry 8, Тема 35', uzPage: 'Тема 35, pp. 78–80',
  cam: 'Stage 9 · 13.1', camPage: 'Learner’s Book pp. 284–290', wb: 'Workbook 13.1',
  objectives: [
    'Distinguish a vector from a scalar.',
    'Use the notations ' + m('AB') + ' with an arrow, and ' + m('a') + ' in bold.',
    'Find the length (modulus) of a vector.',
    'Recognise equal, opposite and collinear vectors.'
  ],
  terms: [
    ['Vector', 'Vektor', 'Вектор'],
    ['Scalar', 'Skalyar', 'Скаляр'],
    ['Directed segment', 'Yo‘naltirilgan kesma', 'Направленный отрезок'],
    ['Initial point', 'Boshi', 'Начало вектора'],
    ['Terminal point', 'Oxiri', 'Конец вектора'],
    ['Modulus (length)', 'Vektor uzunligi (moduli)', 'Модуль (длина) вектора'],
    ['Equal vectors', 'Teng vektorlar', 'Равные векторы'],
    ['Opposite vector', 'Qarama-qarshi vektor', 'Противоположный вектор'],
    ['Zero vector', 'Nol vektor', 'Нулевой вектор'],
    ['Collinear vectors', 'Kollinear vektorlar', 'Коллинеарные векторы']
  ],
  timing: [[5, 'Which of these need a direction?'], [12, 'Vectors and scalars'], [12, 'Length and notation'], [7, 'Equal and opposite'], [4, 'Homework']],
  sections: [
    {
      h: 'Size is not always enough',
      html: `<p>“The bus travelled 40 km” is a <b>scalar</b> — one number. “The bus travelled 40 km north”
      is a <b>vector</b>: a size <i>and</i> a direction. Force, velocity and displacement are vectors;
      mass, time, temperature and area are scalars.</p>
      {{fig:vectorBasic:A vector is a directed segment: it has a length and a direction, but no fixed position.}}
      <p>A vector is drawn as an arrow from its <b>initial point</b> to its <b>terminal point</b> and
      written ${m('AB')} with an arrow over it, or as a single bold letter ${m('<b>a</b>')}.</p>
      <div class="keybox"><div class="klabel">Length of a vector</div>
      If ${m('<b>a</b> = (a₁; a₂)')} then
      ${eq(m('| <b>a</b> | = ' + sr('a₁² + a₂²')), true)}
      — the distance formula again. A length is a scalar, and it is never negative.</div>`
    },
    {
      h: 'Equal, opposite, collinear',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Relationship</th><th>Means</th><th>In coordinates</th></tr></thead>
      <tbody>
        <tr><td>equal</td><td>same length, same direction</td><td class="m">a₁ = b₁ and a₂ = b₂</td></tr>
        <tr><td>opposite</td><td>same length, reversed direction</td><td class="m">(−a₁; −a₂)</td></tr>
        <tr><td>collinear</td><td>parallel — same or opposite direction</td><td>one is a multiple of the other</td></tr>
        <tr><td>zero vector</td><td>no length, no direction</td><td class="m">(0; 0)</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A vector has no address</span>
      Two arrows of the same length pointing the same way are the <b>same vector</b>, even in different
      corners of the page. That freedom is exactly what makes vectors useful — you may slide one
      anywhere to add it to another.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the vector ' + m('AB') + ' and its length, for ' + m('A(1; 2)') + ' and ' + m('B(5; 5)') + '.',
      steps: [
        [m('AB = (5 − 1; 5 − 2)'), 'End minus start — always in that order.'],
        [m('AB = (4; 3)'), ''],
        [m('| AB | = ' + sr('16 + 9') + ' = 5'), '']
      ],
      ans: m('(4; 3)') + ', length ' + m('5')
    },
    {
      q: 'Are ' + m('<b>a</b> = (2; −3)') + ' and ' + m('<b>b</b> = (−6; 9)') + ' collinear?',
      steps: [
        [m('−6 = −3 · 2'), 'Compare the first coordinates.'],
        [m('9 = −3 · (−3)'), 'The same multiplier works for the second.'],
        [m('<b>b</b> = −3<b>a</b>'), 'One is a multiple of the other.'],
        ['They are collinear, pointing in opposite directions.', 'The multiplier is negative.']
      ],
      ans: 'Yes — ' + m('<b>b</b> = −3<b>a</b>')
    }
  ],
  modelNote: 'Drag the tip of the arrow and watch the coordinates and the length change together.',
  interactive: { type: 'vectors', title: 'A vector and its length' },
  quiz: [
    { q: 'Which of these is a vector?', a: ['mass', 'temperature', 'velocity', 'area'], c: 2, why: 'Velocity has a direction; speed alone does not.' },
    { q: 'For ' + m('A(2; 1)') + ' and ' + m('B(6; 4)') + ', ' + m('AB') + ' is:', a: [m('(4; 3)'), m('(−4; −3)'), m('(8; 5)'), m('(3; 4)')], c: 0, why: 'End minus start.' },
    { q: 'The length of ' + m('(−3; 4)') + ' is:', a: [m('1'), m('5'), m('7'), m('−5')], c: 1, why: m(sr('9 + 16') + ' = 5') + '.' },
    { q: 'The vector opposite to ' + m('(5; −2)') + ' is:', a: [m('(−5; 2)'), m('(2; −5)'), m('(5; 2)'), m('(−5; −2)')], c: 0, why: 'Reverse both signs.' },
    { q: m('(1; 2)') + ' and ' + m('(3; 6)') + ' are:', a: ['equal', 'opposite', 'collinear', 'perpendicular'], c: 2, why: m('(3; 6) = 3(1; 2)') + '.' }
  ],
  practice: {
    easy: [
      [m('Find AB for A(0; 0), B(3; 4).'), m('(3; 4)')],
      [m('Find the length of (6; 8).'), m('10')],
      [m('Find the length of (0; −7).'), m('7')],
      [m('Write the vector opposite to (2; 5).'), m('(−2; −5)')],
      [m('Is force a vector or a scalar?'), 'A vector.'],
      [m('Find AB for A(1; 1), B(1; 6).'), m('(0; 5)')],
      [m('Find the length of (−1; 0).'), m('1')]
    ],
    med: [
      [m('Find AB and |AB| for A(−2; 3), B(4; −5).'), m('(6; −8)') + ', length ' + m('10')],
      [m('Are (4; 6) and (6; 9) collinear?'), 'Yes — ' + m('(6; 9) = 1.5(4; 6)')],
      [m('Are (2; 3) and (3; 2) collinear?'), 'No — no single multiplier works.'],
      [m('Find the length of (−5; 12).'), m('13')],
      [m('B(4; 7) and AB = (1; 3). Find A.'), m('A(3; 4)')],
      [m('Find the exact length of (2; 3).'), m(sr('13'))],
      [m('Write a vector equal to AB where A(0; 0), B(2; −1), starting at (5; 5).'), 'From ' + m('(5; 5)') + ' to ' + m('(7; 4)')]
    ],
    hard: [
      [m('|a| = 5 and a = (3; k). Find all k.'), m('k = ±4')],
      [m('Find a vector of length 10 collinear with (3; 4).'), m('(6; 8)') + ' or ' + m('(−6; −8)')],
      [m('Show that A(1;1), B(4;5), C(7;9) are collinear using vectors.'), m('AB = (3; 4)') + ', ' + m('BC = (3; 4)') + ' — equal vectors, so the three points lie on one line.'],
      [m('|a| = 13 and a = (k; 12). Find all k.'), m('k = ±5')],
      [m('Find a unit vector (length 1) in the direction of (6; 8).'), m('(0.6; 0.8)')],
      [m('A(2; 1), B(6; 4), C(9; 8). Is ABC a straight line?'), 'No — ' + m('AB = (4; 3)') + ' and ' + m('BC = (3; 4)') + ' are not multiples of each other.'],
      [m('Explain why a vector has no fixed position but a directed segment does.'), 'A vector records only length and direction; any two arrows agreeing on both represent the same vector, while a directed segment also carries its start point.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Тема 35, pp. 78–80. Draw every vector as an arrow on squared paper.',
  homework: [
    m('Find AB and |AB| for A(1; 2), B(7; 10).'),
    m('Find the length of (−8; 15).'),
    m('Write the vector opposite to (−4; 9).'),
    m('Are (2; −6) and (−1; 3) collinear? Justify.'),
    'Name three vector quantities and three scalar quantities from physics.'
  ]
});

G8_GEO.push({
  id: 'geo-29', stream: 'geo', grade: 8, quarter: 3, lessons: '40–41', hours: 2,
  title: 'Adding and subtracting vectors',
  subtitle: 'Nose to tail, or by the parallelogram — two pictures of one operation.',
  uz: 'Geometry 8, Темы 36–37', uzPage: 'Темы 36–37, pp. 81–84',
  cam: 'Stage 9 · 13.1–13.2', camPage: 'Learner’s Book pp. 284–296', wb: 'Workbook 13.1–13.2',
  objectives: [
    'Add two vectors by the triangle rule and by the parallelogram rule.',
    'Subtract a vector by adding its opposite.',
    'Use the relation ' + m('AB + BC = AC') + '.',
    'Add and subtract in coordinates.'
  ],
  terms: [
    ['Sum of vectors', 'Vektorlar yig‘indisi', 'Сумма векторов'],
    ['Difference of vectors', 'Vektorlar ayirmasi', 'Разность векторов'],
    ['Triangle rule', 'Uchburchak qoidasi', 'Правило треугольника'],
    ['Parallelogram rule', 'Parallelogramm qoidasi', 'Правило параллелограмма'],
    ['Resultant', 'Natijaviy vektor', 'Равнодействующий вектор'],
    ['Nose to tail', 'Uchi-boshiga', 'Конец к началу'],
    ['Commutative', 'O‘rin almashinuvchi', 'Коммутативный'],
    ['Associative', 'Guruhlanuvchi', 'Ассоциативный'],
    ['Closed polygon', 'Yopiq ko‘pburchak', 'Замкнутый многоугольник']
  ],
  timing: [[6, 'Two walks, one displacement'], [14, 'The triangle and parallelogram rules'], [12, 'Subtraction'], [4, 'In coordinates'], [4, 'Homework']],
  sections: [
    {
      h: 'Adding: nose to tail',
      html: `<p>Walk 3 km east, then 4 km north. Your displacement is not 7 km — it is 5 km north-east.
      That is vector addition, and the picture is the whole rule:</p>
      {{fig:vectorAdd:The triangle rule: place the second vector at the tip of the first, and the sum runs from the first tail to the last tip.}}
      <div class="keybox"><div class="klabel">Triangle rule</div>
      ${eq(m('AB') + ' + ' + m('BC') + ' = ' + m('AC'), true)}
      Whatever route you take, only the start and the end matter.</div>
      <p>The <b>parallelogram rule</b> gives the same answer with both vectors drawn from a common point:
      complete the parallelogram, and the sum is the diagonal from that point.</p>
      <p>In coordinates, add componentwise:</p>
      ${eq(m('(a₁; a₂) + (b₁; b₂) = (a₁ + b₁; a₂ + b₂)'))}
      <p>Addition is <b>commutative</b> — ${m('<b>a</b> + <b>b</b> = <b>b</b> + <b>a</b>')} — which is
      exactly why the parallelogram closes.</p>`
    },
    {
      h: 'Subtracting',
      html: `<p>To subtract, add the opposite:</p>
      ${eq(m('<b>a</b> − <b>b</b> = <b>a</b> + (−<b>b</b>)'), true)}
      <p>In coordinates that is simply ${m('(a₁ − b₁; a₂ − b₂)')}. In a picture, ${m('<b>a</b> − <b>b</b>')}
      is the vector <b>from the tip of ${m('<b>b</b>')} to the tip of ${m('<b>a</b>')}</b> when both are
      drawn from the same point — the other diagonal of the parallelogram.</p>
      <div class="keybox"><div class="klabel">The relation worth memorising</div>
      ${eq(m('AB = OB − OA'), true)}
      Any vector is the position of its end minus the position of its start. That single line turns most
      vector problems into subtraction.</div>
      <div class="warn"><span class="wl">Lengths do not add</span>
      ${m('| <b>a</b> + <b>b</b> |')} is <b>not</b> ${m('| <b>a</b> | + | <b>b</b> |')} unless the two
      point the same way. For ${m('(3; 0)')} and ${m('(0; 4)')} the lengths are 3 and 4, but the sum has
      length 5.</div>`
    }
  ],
  examples: [
    {
      q: m('<b>a</b> = (3; −1)') + ', ' + m('<b>b</b> = (−5; 4)') + '. Find ' + m('<b>a</b> + <b>b</b>') + ', ' + m('<b>a</b> − <b>b</b>') + ' and ' + m('| <b>a</b> + <b>b</b> |') + '.',
      steps: [
        [m('<b>a</b> + <b>b</b> = (3 − 5; −1 + 4) = (−2; 3)'), 'Add componentwise.'],
        [m('<b>a</b> − <b>b</b> = (3 + 5; −1 − 4) = (8; −5)'), 'Subtract componentwise.'],
        [m('| (−2; 3) | = ' + sr('4 + 9') + ' = ' + sr('13')), 'Leave it exact.']
      ],
      ans: m('(−2; 3)') + ', ' + m('(8; −5)') + ', ' + m(sr('13'))
    },
    {
      q: 'In a parallelogram ' + m('ABCD') + ', express ' + m('AC') + ' and ' + m('BD') + ' in terms of ' + m('AB = <b>a</b>') + ' and ' + m('AD = <b>b</b>') + '.',
      steps: [
        [m('AC = AB + BC'), 'Triangle rule, going round through ' + m('B') + '.'],
        [m('BC = AD = <b>b</b>'), 'Opposite sides of a parallelogram are equal vectors.'],
        [m('AC = <b>a</b> + <b>b</b>'), 'One diagonal is the sum.'],
        [m('BD = BA + AD = −<b>a</b> + <b>b</b>'), 'The other diagonal is the difference.']
      ],
      ans: m('AC = <b>a</b> + <b>b</b>') + ', ' + m('BD = <b>b</b> − <b>a</b>')
    },
    {
      q: 'A boat heads north at ' + m('8 km/h') + ' across a river flowing east at ' + m('6 km/h') + '. Find its actual speed.',
      steps: [
        [m('(0; 8) + (6; 0) = (6; 8)'), 'The two velocities add as vectors.'],
        [m('| (6; 8) | = ' + sr('36 + 64')), ''],
        [m('= 10 km/h'), 'Not ' + m('14') + ' — the directions differ.']
      ],
      ans: m('10 km/h')
    }
  ],
  modelNote: 'Drag the tips of a and b; the green arrow is always their sum, and it closes the triangle.',
  interactive: { type: 'vectors', title: 'The triangle rule in action' },
  quiz: [
    { q: m('(2; 5) + (3; −1)') + ' is:', a: [m('(5; 4)'), m('(5; 6)'), m('(−1; 6)'), m('(6; −5)')], c: 0, why: 'Add componentwise.' },
    { q: m('(4; 1) − (6; 5)') + ' is:', a: [m('(10; 6)'), m('(−2; −4)'), m('(2; 4)'), m('(−2; 4)')], c: 1, why: 'Subtract componentwise.' },
    { q: m('AB + BC') + ' equals:', a: [m('AC'), m('CA'), m('BA'), m('0')], c: 0, why: 'Triangle rule — only the ends matter.' },
    { q: 'If ' + m('| <b>a</b> | = 3') + ' and ' + m('| <b>b</b> | = 4') + ' and they are perpendicular, ' + m('| <b>a</b> + <b>b</b> |') + ' is:', a: [m('7'), m('5'), m('1'), m('12')], c: 1, why: 'Pythagoras: ' + m(sr('9 + 16') + ' = 5') + '.' },
    { q: m('AB') + ' in terms of position vectors is:', a: [m('OA + OB'), m('OB − OA'), m('OA − OB'), m('OA · OB')], c: 1, why: 'End minus start.' }
  ],
  practice: {
    easy: [
      [m('Find (1; 2) + (3; 4).'), m('(4; 6)')],
      [m('Find (5; 7) − (2; 3).'), m('(3; 4)')],
      [m('Find (0; 0) + (−2; 6).'), m('(−2; 6)')],
      [m('Find (4; −1) + (−4; 1).'), m('(0; 0)')],
      [m('Simplify AB + BC.'), m('AC')],
      [m('Find |(3; 4) + (0; 0)|.'), m('5')],
      [m('Find (7; 2) − (7; 2).'), m('(0; 0)')]
    ],
    med: [
      [m('a = (2; −3), b = (−1; 5). Find a + b and a − b.'), m('(1; 2)') + ' and ' + m('(3; −8)')],
      [m('Find |(3; 4) + (4; −3)|.'), m('| (7; 1) | = ' + sr('50') + ' = 5' + sr('2'))],
      [m('Simplify AB + BC + CD.'), m('AD')],
      [m('Simplify AB + BA.'), m('0') + ' — the zero vector'],
      [m('OA = (1; 2), OB = (5; 9). Find AB.'), m('(4; 7)')],
      [m('A plane flies north at 200 km/h in a wind blowing east at 150 km/h. Find its actual speed.'), m('250 km/h')],
      [m('a = (6; 8). Find a vector b with a + b = (0; 0).'), m('(−6; −8)')]
    ],
    hard: [
      [m('In parallelogram ABCD, AB = a and AD = b. Express DB and CA.'), m('DB = <b>a</b> − <b>b</b>') + ', ' + m('CA = −<b>a</b> − <b>b</b>')],
      [m('Simplify AB + BC + CD + DA.'), m('0') + ' — the walk returns to its start'],
      [m('|a| = 5, |b| = 12, and a ⟂ b. Find |a + b| and |a − b|.'), 'Both ' + m('13') + ' — the diagonals of a rectangle are equal.'],
      [m('a = (3; 1), b = (−1; 4). Find |a + b| and |a| + |b|, and compare.'), m('| (2; 5) | = ' + sr('29') + ' ≈ 5.39') + ' against ' + m(sr('10') + ' + ' + sr('17') + ' ≈ 7.28') + ' — the sum is shorter'],
      [m('M is the midpoint of AB. Show that OM = ½(OA + OB).'), m('OM = OA + ' + f('1', '2') + 'AB = OA + ' + f('1', '2') + '(OB − OA) = ' + f('1', '2') + '(OA + OB)')],
      [m('Two forces of 10 N and 10 N act at 90°. Find the resultant.'), m('10' + sr('2') + ' ≈ 14.1 N') + ' at ' + m('45°') + ' to each'],
      [m('Explain why |a + b| ≤ |a| + |b| always.'), 'The sum closes a triangle, and in any triangle one side is never longer than the other two together; equality only when the vectors point the same way.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Geometry 8, Темы 36–37, pp. 81–84. Draw the triangle for every addition.',
  homework: [
    m('Find (4; −2) + (−7; 5) and (4; −2) − (−7; 5).'),
    m('Find |(5; 12) + (0; 1)|.'),
    m('Simplify AB + BC + CA.'),
    m('OA = (2; −1), OB = (6; 7). Find AB and |AB|.'),
    m('A swimmer heads north at 3 km/h in a current flowing east at 4 km/h. Find the actual speed.'),
    m('In parallelogram ABCD with AB = a and AD = b, express AC and BD.')
  ]
});

G8_GEO.push({
  id: 'geo-30', stream: 'geo', grade: 8, quarter: 3, lessons: '42–43', hours: 2,
  title: 'Multiplying a vector by a number; the coordinates of a vector',
  subtitle: 'Stretching, shrinking and reversing — and the test for parallel that comes free with it.',
  uz: 'Geometry 8, Темы 38–39', uzPage: 'Темы 38–39, pp. 85–89',
  cam: 'Stage 9 · 13.2', camPage: 'Learner’s Book pp. 291–296', wb: 'Workbook 13.2',
  objectives: [
    'Multiply a vector by a scalar, and describe the effect on length and direction.',
    'Write a vector in coordinates from the coordinates of its ends.',
    'Test two vectors for collinearity.',
    'Use vectors to prove that a line is parallel to another.'
  ],
  terms: [
    ['Scalar multiple', 'Skalyarga ko‘paytma', 'Умножение на число'],
    ['Stretch', 'Cho‘zish', 'Растяжение'],
    ['Compression', 'Siqish', 'Сжатие'],
    ['Direction reversed', 'Yo‘nalish teskari', 'Направление противоположное'],
    ['Coordinates of a vector', 'Vektor koordinatalari', 'Координаты вектора'],
    ['Collinear', 'Kollinear', 'Коллинеарные'],
    ['Unit vector', 'Birlik vektor', 'Единичный вектор'],
    ['Position vector', 'Radius-vektor', 'Радиус-вектор'],
    ['Parallel', 'Parallel', 'Параллельный']
  ],
  timing: [[6, 'Double a vector on squared paper'], [12, 'Multiplying by a number'], [12, 'Coordinates of a vector'], [6, 'The collinearity test'], [4, 'Homework']],
  sections: [
    {
      h: 'Multiplying by a number',
      html: `<div class="keybox"><div class="klabel">Scalar multiple</div>
      ${eq(m('k · (a₁; a₂) = (ka₁; ka₂)') + '&nbsp;&nbsp;and&nbsp;&nbsp;' + m('| k<b>a</b> | = | k | · | <b>a</b> |'), true)}</div>
      {{fig:vectorScalar:Multiplying by a number stretches or shrinks the arrow; a negative number also turns it round.}}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">k</th><th>Effect</th></tr></thead>
      <tbody>
        <tr><td class="m">k &gt; 1</td><td>longer, same direction</td></tr>
        <tr><td class="m">0 &lt; k &lt; 1</td><td>shorter, same direction</td></tr>
        <tr><td class="m">k = 0</td><td>the zero vector</td></tr>
        <tr><td class="m">k &lt; 0</td><td>direction reversed, length ${m('| k |')} times</td></tr>
      </tbody></table></div>
      <p>Note the modulus signs: ${m('| −3<b>a</b> | = 3 | <b>a</b> |')}. A length is never negative,
      however negative the multiplier.</p>`
    },
    {
      h: 'Coordinates, and the test for parallel',
      html: `<p>The coordinates of a vector are found once and used everywhere:</p>
      ${eq(m('AB = (x_B − x_A; &nbsp;y_B − y_A)'), true)}
      <p>“End minus start” — and if you swap them you get the opposite vector, which is the commonest
      slip in this chapter.</p>
      <div class="keybox"><div class="klabel">Test for collinear vectors</div>
      ${m('<b>a</b>')} and ${m('<b>b</b>')} are collinear exactly when ${m('<b>b</b> = k<b>a</b>')} for
      some number ${m('k')} — that is, when
      ${eq(m('a₁b₂ − a₂b₁ = 0'), true)}
      </div>
      <p>Check ${m('(2; 3)')} and ${m('(6; 9)')}: ${m('2 · 9 − 3 · 6 = 0')} ✓, and indeed
      ${m('(6; 9) = 3(2; 3)')}. Check ${m('(2; 3)')} and ${m('(6; 8)')}:
      ${m('2 · 8 − 3 · 6 = −2 ≠ 0')} — not collinear.</p>
      <div class="warn"><span class="wl">Parallel lines from parallel vectors</span>
      If ${m('AB')} and ${m('CD')} are collinear vectors and the four points are not all on one line,
      then the lines ${m('AB')} and ${m('CD')} are parallel. That is how vectors prove parallelism —
      no angles, no measuring.</div>`
    }
  ],
  examples: [
    {
      q: m('<b>a</b> = (−2; 5)') + '. Find ' + m('3<b>a</b>') + ', ' + m('−<b>a</b>') + ' and ' + m('| 3<b>a</b> |') + '.',
      steps: [
        [m('3<b>a</b> = (−6; 15)'), 'Multiply each coordinate.'],
        [m('−<b>a</b> = (2; −5)'), 'Reverse both signs.'],
        [m('| <b>a</b> | = ' + sr('4 + 25') + ' = ' + sr('29')), ''],
        [m('| 3<b>a</b> | = 3' + sr('29')), 'Three times as long.']
      ],
      ans: m('(−6; 15)') + ', ' + m('(2; −5)') + ', ' + m('3' + sr('29'))
    },
    {
      q: m('A(1; 2)') + ', ' + m('B(4; 6)') + ', ' + m('C(0; 1)') + ', ' + m('D(6; 9)') + '. Is ' + m('AB ∥ CD') + '?',
      steps: [
        [m('AB = (3; 4)'), 'End minus start.'],
        [m('CD = (6; 8)'), ''],
        [m('3 · 8 − 4 · 6 = 0'), 'The collinearity test.'],
        [m('CD = 2 · AB'), 'So the vectors are parallel — and ' + m('C') + ' is not on line ' + m('AB') + '.']
      ],
      ans: 'Yes, ' + m('AB ∥ CD') + ' and ' + m('CD') + ' is twice as long'
    },
    {
      q: 'Find a unit vector in the direction of ' + m('(9; 12)') + '.',
      steps: [
        [m('| (9; 12) | = ' + sr('81 + 144') + ' = 15'), ''],
        [m(f('1', '15') + ' · (9; 12)'), 'Divide by the length.'],
        [m('(0.6; 0.8)'), ''],
        [m(sr('0.36 + 0.64') + ' = 1'), 'Check: the length really is 1.']
      ],
      ans: m('(0.6; 0.8)')
    }
  ],
  modelNote: 'Drag a tip and watch how each coordinate scales when the vector is stretched.',
  interactive: { type: 'vectors', title: 'Scaling and adding vectors' },
  quiz: [
    { q: m('4 · (2; −3)') + ' is:', a: [m('(8; −12)'), m('(6; 1)'), m('(8; 12)'), m('(2; −12)')], c: 0, why: 'Multiply each coordinate by 4.' },
    { q: 'If ' + m('| <b>a</b> | = 6') + ' then ' + m('| −2<b>a</b> |') + ' is:', a: [m('−12'), m('12'), m('4'), m('3')], c: 1, why: 'A length is never negative.' },
    { q: m('(3; 5)') + ' and ' + m('(9; 15)') + ' are:', a: ['perpendicular', 'collinear', 'equal', 'opposite'], c: 1, why: m('3 · 15 − 5 · 9 = 0') + '.' },
    { q: 'For ' + m('A(2; 3)') + ' and ' + m('B(5; 1)') + ', ' + m('AB') + ' is:', a: [m('(3; −2)'), m('(−3; 2)'), m('(7; 4)'), m('(3; 2)')], c: 0, why: 'End minus start.' },
    { q: 'A unit vector has length:', a: [m('0'), m('1'), m('any'), m('10')], c: 1, why: 'That is what “unit” means.' }
  ],
  practice: {
    easy: [
      [m('Find 2 · (3; 4).'), m('(6; 8)')],
      [m('Find −1 · (5; −2).'), m('(−5; 2)')],
      [m('Find 0.5 · (8; 6).'), m('(4; 3)')],
      [m('If |a| = 4, find |3a|.'), m('12')],
      [m('Find AB for A(0; 0), B(−3; 7).'), m('(−3; 7)')],
      [m('Are (1; 2) and (2; 4) collinear?'), 'Yes.'],
      [m('Find |2 · (3; 4)|.'), m('10')]
    ],
    med: [
      [m('Find 3 · (−2; 5) − 2 · (1; 4).'), m('(−8; 7)')],
      [m('If |a| = 5, find |−4a|.'), m('20')],
      [m('Are (4; −6) and (−6; 9) collinear?'), 'Yes — ' + m('4 · 9 − (−6)(−6) = 0')],
      [m('Are (2; 5) and (4; 9) collinear?'), 'No — ' + m('2 · 9 − 5 · 4 = −2 ≠ 0')],
      [m('A(1; 1), B(3; 5), C(2; 0), D(6; 8). Is AB ∥ CD?'), 'Yes — ' + m('CD = 2 · AB')],
      [m('Find a unit vector in the direction of (3; 4).'), m('(0.6; 0.8)')],
      [m('Find k so that (6; k) is collinear with (2; 5).'), m('k = 15')]
    ],
    hard: [
      [m('a = (2; −1), b = (−3; 4). Find 2a − 3b and its length.'), m('(13; −14)') + ', length ' + m(sr('365'))],
      [m('Find all k for which (k; 6) and (3; k) are collinear.'), m('k² = 18, k = ±3' + sr('2'))],
      [m('Find a vector of length 20 in the direction of (−3; 4).'), m('(−12; 16)')],
      [m('A(0;0), B(6;4). Find the point P on AB with AP = ⅔ · AB.'), m('P(4; ' + f('8', '3') + ')')],
      [m('M and N are midpoints of AB and AC. Show that MN ∥ BC and MN = ½BC, using vectors.'), m('MN = AN − AM = ' + f('1', '2') + 'AC − ' + f('1', '2') + 'AB = ' + f('1', '2') + 'BC') + ' — a multiple of ' + m('BC') + ', so parallel and half as long'],
      [m('a = (1; 2) and b = (3; k). Find k so that a and b are collinear, and then find b in terms of a.'), m('k = 6') + ', ' + m('<b>b</b> = 3<b>a</b>')],
      [m('Explain why the collinearity test a₁b₂ − a₂b₁ = 0 works.'), 'If ' + m('<b>b</b> = k<b>a</b>') + ' then ' + m('a₁(ka₂) − a₂(ka₁) = 0') + '; conversely, when the expression is zero the ratios ' + m(f('b₁', 'a₁')) + ' and ' + m(f('b₂', 'a₂')) + ' agree, giving a common multiplier ' + m('k') + '.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Geometry 8, Темы 38–39, pp. 85–89. Show the collinearity test in full.',
  homework: [
    m('Find 5 · (−1; 3) and its length.'),
    m('If |a| = 7, find |−3a|.'),
    m('Are (6; −4) and (−9; 6) collinear? Justify.'),
    m('Find k so that (4; k) is collinear with (3; 12).'),
    m('Find a unit vector in the direction of (5; 12).'),
    m('A(1;0), B(4;6), C(0;2), D(2;6). Is AB ∥ CD?')
  ]
});

G8_GEO.push({
  id: 'geo-31', stream: 'geo', grade: 8, quarter: 3, lessons: '44–45', hours: 2,
  title: 'Operations with vectors in coordinates; applications',
  subtitle: 'Everything from the last four lessons, applied to real proofs and real journeys.',
  uz: 'Geometry 8, Темы 40–41', uzPage: 'Темы 40–41, pp. 90–95',
  cam: 'Stage 9 · 13.1–13.2', camPage: 'Learner’s Book pp. 284–296', wb: 'Workbook 13.2',
  objectives: [
    'Combine addition, subtraction and scalar multiplication in coordinates.',
    'Use position vectors to find midpoints and points dividing a segment.',
    'Prove geometric statements with vectors.',
    'Solve displacement and velocity problems.'
  ],
  terms: [
    ['Position vector', 'Radius-vektor', 'Радиус-вектор'],
    ['Resultant displacement', 'Natijaviy siljish', 'Результирующее перемещение'],
    ['Velocity', 'Tezlik (vektor)', 'Скорость (вектор)'],
    ['Component', 'Tashkil etuvchi', 'Составляющая'],
    ['Midpoint (vector form)', 'O‘rta nuqta (vektor shakli)', 'Середина (в векторах)'],
    ['Divides in the ratio', 'Nisbatda bo‘ladi', 'Делит в отношении'],
    ['Vector proof', 'Vektorli isbot', 'Векторное доказательство'],
    ['Centroid', 'Medianalar kesishish nuqtasi', 'Центроид (точка пересечения медиан)'],
    ['Bearing', 'Azimut', 'Азимут']
  ],
  timing: [[6, 'Recall the four operations'], [12, 'Position vectors'], [12, 'Vector proofs'], [6, 'Journeys and velocities'], [4, 'Homework']],
  sections: [
    {
      h: 'Position vectors',
      html: `<p>The <b>position vector</b> of ${m('A')} is ${m('OA')}, drawn from the origin. If
      ${m('A(x; y)')} then ${m('OA = (x; y)')} — a point and its position vector carry the same two
      numbers. From that one identification everything follows:</p>
      ${eq(m('AB = OB − OA') + '&nbsp;&nbsp;|&nbsp;&nbsp;' + m('OM = ' + f('1', '2') + '(OA + OB)') + ' for the midpoint ' + m('M') + ' of ' + m('AB'), true)}
      <p>To reach a point ${m('P')} that divides ${m('AB')} in a given proportion, start at ${m('A')} and
      travel part of the way:</p>
      ${eq(m('OP = OA + t · AB') + ',&nbsp; where ' + m('t = 0') + ' is ' + m('A') + ' and ' + m('t = 1') + ' is ' + m('B'))}
      <p>${m('t = ' + f('1', '2'))} gives the midpoint, ${m('t = ' + f('1', '3'))} gives the point one
      third of the way, and so on.</p>`
    },
    {
      h: 'Proving with vectors',
      html: `<p>A vector proof has three moves, and only three:</p>
      <ol>
        <li>Name two vectors as ${m('<b>a</b>')} and ${m('<b>b</b>')} — usually two sides from one vertex.</li>
        <li>Write every other vector in the figure in terms of them.</li>
        <li>Read the conclusion: a multiple means <b>parallel</b>; equal vectors mean <b>equal and
        parallel</b>; ${m('<b>0</b>')} means the path closes.</li>
      </ol>
      <div class="keybox"><div class="klabel">The midline theorem, in three lines</div>
      Let ${m('AB = <b>c</b>')} and ${m('AC = <b>b</b>')}, with ${m('M')} and ${m('N')} the midpoints of
      ${m('AB')} and ${m('AC')}.
      ${eq(m('MN = AN − AM = ' + f('1', '2') + '<b>b</b> − ' + f('1', '2') + '<b>c</b> = ' + f('1', '2') + '(<b>b</b> − <b>c</b>) = ' + f('1', '2') + 'BC'))}
      A multiple of ${m('BC')}, so ${m('MN ∥ BC')}; the multiplier is ${m(f('1', '2'))}, so
      ${m('MN = ' + f('1', '2') + 'BC')}. The whole of Quarter I’s midline theorem, in one line of
      algebra.</div>`
    },
    {
      h: 'Journeys and velocities',
      html: `<p>Displacements add as vectors, so a journey with several stages is one sum:</p>
      ${eq('walk ' + m('(3; 0)') + ', then ' + m('(0; 4)') + ', then ' + m('(−1; 2)') + '&nbsp;⟹&nbsp;total ' + m('(2; 6)'))}
      <p>The total <b>displacement</b> is ${m('(2; 6)')}, of length ${m(sr('40') + ' ≈ 6.3')}, while the
      <b>distance walked</b> is ${m('3 + 4 + ' + sr('5') + ' ≈ 9.2')}. They are different quantities and
      questions ask for both.</p>
      <p>Velocities add in the same way. A boat’s velocity through the water plus the current’s velocity
      gives the velocity over the ground — which is why a boat aiming straight across a river never
      arrives straight across.</p>`
    }
  ],
  examples: [
    {
      q: m('OA = (1; 4)') + ', ' + m('OB = (7; 2)') + '. Find ' + m('AB') + ', the midpoint of ' + m('AB') + ', and the point one third of the way from ' + m('A') + ' to ' + m('B') + '.',
      steps: [
        [m('AB = OB − OA = (6; −2)'), 'End minus start.'],
        [m('OM = ' + f('1', '2') + '((1; 4) + (7; 2)) = (4; 3)'), 'Average the position vectors.'],
        [m('OP = OA + ' + f('1', '3') + 'AB'), ''],
        [m('= (1; 4) + (2; −' + f('2', '3') + ') = (3; 3' + f('1', '3') + ')'), '']
      ],
      ans: m('AB = (6; −2)') + ', ' + m('M(4; 3)') + ', ' + m('P(3; 3' + f('1', '3') + ')')
    },
    {
      q: 'A cyclist rides 6 km east, then 8 km north. Find the total distance and the displacement.',
      steps: [
        [m('(6; 0) + (0; 8) = (6; 8)'), 'Add the two displacements.'],
        [m('| (6; 8) | = 10 km'), 'The displacement.'],
        [m('6 + 8 = 14 km'), 'The distance actually ridden.'],
        ['The two differ because the route bends.', '']
      ],
      ans: 'Distance ' + m('14 km') + ', displacement ' + m('10 km') + ' north-east'
    },
    {
      q: 'Use vectors to prove that the diagonals of a parallelogram bisect each other.',
      steps: [
        [m('AB = <b>a</b>, AD = <b>b</b>'), 'Name two sides from one vertex.'],
        [m('AC = <b>a</b> + <b>b</b>'), 'The diagonal from ' + m('A') + '.'],
        ['Midpoint of ' + m('AC') + ': ' + m(f('1', '2') + '(<b>a</b> + <b>b</b>)') + ' from ' + m('A') + '.', ''],
        ['Midpoint of ' + m('BD') + ': ' + m('<b>a</b> + ' + f('1', '2') + '(<b>b</b> − <b>a</b>) = ' + f('1', '2') + '(<b>a</b> + <b>b</b>)') + '.', 'The same point.'],
        ['The diagonals cross at their common midpoint.', '']
      ],
      ans: 'Proved'
    }
  ],
  modelNote: 'Build a journey out of two vectors and read the resultant off the green arrow.',
  interactive: { type: 'vectors', title: 'Two stages of a journey' },
  quiz: [
    { q: 'If ' + m('OA = (2; 1)') + ' and ' + m('OB = (8; 5)') + ' then ' + m('AB') + ' is:', a: [m('(10; 6)'), m('(6; 4)'), m('(−6; −4)'), m('(4; 6)')], c: 1, why: m('OB − OA') + '.' },
    { q: 'The midpoint of ' + m('A(1; 3)') + ' and ' + m('B(7; 9)') + ' has position vector:', a: [m('(8; 12)'), m('(4; 6)'), m('(6; 6)'), m('(3; 4)')], c: 1, why: 'Average the position vectors.' },
    { q: 'Walk ' + m('(4; 0)') + ' then ' + m('(0; 3)') + '. The displacement is:', a: [m('7'), m('5'), m('12'), m('1')], c: 1, why: m('| (4; 3) | = 5') + '.' },
    { q: 'If ' + m('MN = ' + f('1', '2') + 'BC') + ' then ' + m('MN') + ' is:', a: ['perpendicular to ' + m('BC'), 'parallel to ' + m('BC') + ' and half its length', 'equal to ' + m('BC'), 'unrelated'], c: 1, why: 'A positive multiple means parallel; the multiplier gives the ratio.' },
    { q: 'The distance walked and the displacement are equal only when:', a: ['always', 'the route is a straight line in one direction', 'the route is closed', 'never'], c: 1, why: 'Any bend makes the path longer than the straight line between the ends.' }
  ],
  practice: {
    easy: [
      [m('OA = (1; 1), OB = (4; 5). Find AB.'), m('(3; 4)')],
      [m('Find the midpoint of A(0; 0) and B(6; 10).'), m('(3; 5)')],
      [m('Walk (3; 0) then (0; 4). Find the displacement.'), m('5')],
      [m('Find 2 · (1; 3) + (4; −2).'), m('(6; 4)')],
      [m('OA = (5; 2). Write the coordinates of A.'), m('A(5; 2)')],
      [m('Walk (2; 0) then (−2; 0). Find the displacement.'), m('0')],
      [m('Find |(9; 12)|.'), m('15')]
    ],
    med: [
      [m('OA = (−1; 3), OB = (5; −1). Find AB and its length.'), m('(6; −4)') + ', ' + m(sr('52') + ' = 2' + sr('13'))],
      [m('Find the midpoint of A(−3; 4) and B(9; −2).'), m('(3; 1)')],
      [m('A cyclist rides 5 km north then 12 km east. Find distance and displacement.'), m('17 km') + ' and ' + m('13 km')],
      [m('Find 3 · (2; −1) − 2 · (4; 1).'), m('(−2; −5)')],
      [m('OA = (2; 2), AB = (6; 4). Find OB.'), m('(8; 6)')],
      [m('Find the point one quarter of the way from A(0; 0) to B(8; 12).'), m('(2; 3)')],
      [m('A plane flies at (0; 300) in a wind of (40; 0). Find its ground speed.'), m(sr('91600') + ' ≈ 303 km/h')]
    ],
    hard: [
      [m('OA = (1; 2), OB = (7; 5), OC = (4; 11). Find the centroid of triangle ABC.'), m('(4; 6)') + ' — the average of the three position vectors'],
      [m('A(1; 1), B(9; 5). Find P on AB with AP : PB = 3 : 1.'), m('P(7; 4)')],
      [m('Prove with vectors that the midpoints of the sides of a quadrilateral form a parallelogram.'), 'With position vectors ' + m('<b>a</b>, <b>b</b>, <b>c</b>, <b>d</b>') + ', the midpoint figure has opposite sides ' + m(f('1', '2') + '(<b>c</b> − <b>a</b>)') + ' twice over — equal vectors, so a parallelogram.'],
      [m('A boat can do 5 km/h. It heads north across a river flowing east at 3 km/h. Find its speed and how far downstream it lands after crossing 400 m.'), m(sr('34') + ' ≈ 5.83 km/h') + '; it drifts ' + m('240 m') + ' downstream'],
      [m('Walk (4; 3), then (−1; 5), then (−3; −8). Find the total displacement.'), m('(0; 0)') + ' — the walk returns to its start'],
      [m('OA = (2; 3) and M(5; 7) is the midpoint of AB. Find OB.'), m('(8; 11)')],
      [m('Prove with vectors that a quadrilateral with one pair of opposite sides equal and parallel is a parallelogram.'), 'If ' + m('AB = DC') + ' as vectors then ' + m('AD = AB + BD = DC + BD = BC') + ', so the other pair is equal and parallel too.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Geometry 8, Темы 40–41, pp. 90–95. Name your two base vectors before starting any proof.',
  homework: [
    m('OA = (3; −2), OB = (9; 6). Find AB, |AB| and the midpoint of AB.'),
    m('Find 4 · (1; −2) − 3 · (2; 1).'),
    m('A walker goes 8 km east then 6 km north. Find distance and displacement.'),
    m('A(2; 1), B(10; 9). Find P on AB with AP : PB = 1 : 3.'),
    m('OA = (1; 5) and M(4; 2) is the midpoint of AB. Find OB.'),
    m('Use vectors to show that the midline of a triangle is parallel to the third side.')
  ]
});

G8_GEO.push({
  id: 'geo-32', stream: 'geo', grade: 8, quarter: 3, lessons: '46', hours: 1,
  title: 'The concept of area; the area of a rectangle',
  subtitle: 'Four properties that every area must have — and the one formula everything else is built on.',
  uz: 'Geometry 8, Темы 45–46', uzPage: 'Темы 45–46, pp. 100–105',
  cam: 'Stage 9 · 7.1', camPage: 'Learner’s Book pp. 142–148', wb: 'Workbook 7.1',
  objectives: [
    'State the four properties of area.',
    'Use the formula for the area of a rectangle and of a square.',
    'Convert between units of area.',
    'Find a missing side from a given area.'
  ],
  terms: [
    ['Area', 'Yuza', 'Площадь'],
    ['Unit square', 'Birlik kvadrat', 'Единичный квадрат'],
    ['Congruent figures', 'Teng figuralar', 'Равные фигуры'],
    ['Additivity of area', 'Yuzaning additivligi', 'Аддитивность площади'],
    ['Rectangle', 'To‘g‘ri to‘rtburchak', 'Прямоугольник'],
    ['Square', 'Kvadrat', 'Квадрат'],
    ['Square metre', 'Kvadrat metr', 'Квадратный метр'],
    ['Hectare', 'Gektar', 'Гектар'],
    ['Dimensions', 'O‘lchamlar', 'Размеры']
  ],
  timing: [[5, 'Count squares to find an area'], [12, 'The four properties'], [12, 'Rectangle and square'], [7, 'Units and conversions'], [4, 'Homework']],
  sections: [
    {
      h: 'What area is',
      html: `<p>Area measures how much of the plane a figure covers, in <b>unit squares</b>. Whatever
      definition is used, it must obey four rules:</p>
      <div class="keybox"><div class="klabel">Properties of area</div>
      <ol style="margin:0">
        <li>Area is a <b>positive</b> number.</li>
        <li><b>Congruent</b> figures have <b>equal</b> areas.</li>
        <li>If a figure is cut into parts, the areas of the parts <b>add up</b> to the whole.</li>
        <li>The area of a square of side ${m('1')} is ${m('1')}.</li>
      </ol></div>
      <p>Property 3 — <b>additivity</b> — is the workhorse. It is why a trapezium can be split into a
      rectangle and two triangles, and why an L-shaped room can be measured as two rectangles.</p>
      <div class="warn"><span class="wl">Equal areas ≠ congruent</span>
      A ${m('2 × 8')} rectangle and a ${m('4 × 4')} square both have area ${m('16')}, but you cannot
      lay one on the other. Rule 2 works in one direction only.</div>`
    },
    {
      h: 'Rectangle, square, and units',
      html: `${eq(m('S<sub>rectangle</sub> = a · b') + '&nbsp;&nbsp;|&nbsp;&nbsp;' + m('S<sub>square</sub> = a²'), true)}
      <p>The formula is really just counting: a ${m('5 × 3')} rectangle holds three rows of five unit
      squares.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Unit</th><th>In m²</th><th>Used for</th></tr></thead>
      <tbody>
        <tr><td class="m">1 cm²</td><td class="m">0.0001</td><td>a page, a tile</td></tr>
        <tr><td class="m">1 m²</td><td class="m">1</td><td>a room, a carpet</td></tr>
        <tr><td class="m">1 a (are)</td><td class="m">100</td><td>a garden plot</td></tr>
        <tr><td class="m">1 ha</td><td class="m">10 000</td><td>a field</td></tr>
        <tr><td class="m">1 km²</td><td class="m">1 000 000</td><td>a district</td></tr>
      </tbody></table></div>
      <p>Lengths scale by ${m('k')}; areas scale by ${m('k²')}. ${m('1 m = 100 cm')}, so
      ${m('1 m² = 10 000 cm²')} — a fact that catches out more pupils than any other in this chapter.</p>`
    }
  ],
  examples: [
    {
      q: 'A rectangular room is ' + m('4.5 m') + ' by ' + m('3.2 m') + '. Find its area, and the cost of carpet at ' + m('85 000') + ' so‘m per m².',
      steps: [
        [m('S = 4.5 · 3.2 = 14.4 m²'), ''],
        [m('14.4 · 85 000'), ''],
        [m('= 1 224 000') + ' so‘m', '']
      ],
      ans: m('14.4 m²') + ', ' + m('1 224 000') + ' so‘m'
    },
    {
      q: 'A rectangle has area ' + m('84 cm²') + ' and one side ' + m('7 cm') + '. Find its perimeter.',
      steps: [
        [m('84 ÷ 7 = 12'), 'The other side.'],
        [m('P = 2(7 + 12)'), ''],
        [m('= 38 cm'), '']
      ],
      ans: m('38 cm')
    },
    {
      q: 'An L-shaped floor is a ' + m('6 × 4') + ' rectangle with a ' + m('2 × 2') + ' square cut from one corner. Find its area.',
      steps: [
        [m('6 · 4 = 24'), 'The whole rectangle.'],
        [m('2 · 2 = 4'), 'The corner removed.'],
        [m('24 − 4 = 20'), 'Additivity, used backwards.']
      ],
      ans: m('20 m²')
    }
  ],
  modelNote: 'Change the base and height and watch the area follow the product.',
  interactive: { type: 'areaModel', title: 'Base times height' },
  quiz: [
    { q: 'The area of a ' + m('7 × 9') + ' rectangle is:', a: [m('16'), m('32'), m('63'), m('72')], c: 2, why: m('7 · 9') + '.' },
    { q: m('1 m²') + ' equals:', a: [m('100 cm²'), m('1 000 cm²'), m('10 000 cm²'), m('1 000 000 cm²')], c: 2, why: m('100 · 100') + '.' },
    { q: 'A square of area ' + m('49 cm²') + ' has perimeter:', a: [m('14 cm'), m('28 cm'), m('49 cm'), m('196 cm')], c: 1, why: 'Side 7, so ' + m('4 · 7') + '.' },
    { q: 'Congruent figures:', a: ['may have different areas', 'always have equal areas', 'always are rectangles', 'have equal perimeters but not areas'], c: 1, why: 'Property 2 of area.' },
    { q: m('1 ha') + ' equals:', a: [m('100 m²'), m('1 000 m²'), m('10 000 m²'), m('100 000 m²')], c: 2, why: 'A square of side 100 m.' }
  ],
  practice: {
    easy: [
      [m('Find the area of a 5 cm by 8 cm rectangle.'), m('40 cm²')],
      [m('Find the area of a square of side 9 cm.'), m('81 cm²')],
      [m('Convert 3 m² to cm².'), m('30 000 cm²')],
      [m('A rectangle has area 36 and one side 4. Find the other.'), m('9')],
      [m('Find the area of a 2.5 m by 4 m rectangle.'), m('10 m²')],
      [m('Convert 2 ha to m².'), m('20 000 m²')],
      [m('Find the side of a square of area 144 cm².'), m('12 cm')]
    ],
    med: [
      [m('A room 5.5 m by 4 m is carpeted at 90 000 so‘m/m². Find the cost.'), m('1 980 000 so‘m')],
      [m('A rectangle has area 150 cm² and perimeter 50 cm. Find its sides.'), m('10 cm') + ' and ' + m('15 cm')],
      [m('An L-shape is a 8 × 5 rectangle less a 3 × 2 corner. Find its area.'), m('34')],
      [m('Convert 45 000 cm² to m².'), m('4.5 m²')],
      [m('A square field has area 1 ha. Find its side.'), m('100 m')],
      [m('A rectangle 12 cm by 5 cm is cut into two equal squares plus a rectangle. Is that possible? Explain.'), 'Two ' + m('5 × 5') + ' squares use ' + m('10 cm') + ' of the length, leaving a ' + m('2 × 5') + ' rectangle — yes.'],
      [m('The sides of a rectangle are doubled. What happens to the area?'), 'It becomes four times as large.']
    ],
    hard: [
      [m('A rectangle has perimeter 40 cm. Find the dimensions giving the greatest area.'), m('10 × 10') + ' — the square, area ' + m('100 cm²')],
      [m('A path 1 m wide runs round the outside of a 10 m by 6 m garden. Find the area of the path.'), m('12 · 8 − 10 · 6 = 36 m²')],
      [m('A rectangle has area 60 cm² and its length is 4 cm more than its width. Find its sides.'), m('6 cm') + ' by ' + m('10 cm')],
      [m('A field of 2.4 ha is rectangular with one side 120 m. Find the other side and the perimeter.'), m('200 m') + ', perimeter ' + m('640 m')],
      [m('A floor 4.2 m by 3.6 m is tiled with 30 cm squares. How many tiles are needed?'), m('14 · 12 = 168')],
      [m('The area of a square is numerically equal to its perimeter. Find its side.'), m('a² = 4a') + ', so ' + m('a = 4')],
      [m('Explain why two figures with equal areas need not be congruent.'), 'Area is a single number and loses all information about shape; a ' + m('1 × 12') + ' rectangle and a ' + m('3 × 4') + ' rectangle share an area but no dimension.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Темы 45–46, pp. 100–105. Always write the unit.',
  homework: [
    m('Find the area of a 7.5 m by 6 m room.'),
    m('Convert 5 m² to cm² and 30 000 cm² to m².'),
    m('A rectangle has area 96 cm² and one side 8 cm. Find its perimeter.'),
    m('An L-shape is a 10 × 7 rectangle less a 4 × 3 corner. Find its area.'),
    m('A square has area 225 m². Find its side and perimeter.')
  ]
});

G8_GEO.push({
  id: 'geo-33', stream: 'geo', grade: 8, quarter: 3, lessons: '47–48', hours: 2,
  title: 'The area of a parallelogram and of a triangle',
  subtitle: 'Cut a corner off and slide it across — and the parallelogram becomes a rectangle.',
  uz: 'Geometry 8, Темы 47–48', uzPage: 'Темы 47–48, pp. 106–113',
  cam: 'Stage 9 · 7.1–7.2', camPage: 'Learner’s Book pp. 142–155', wb: 'Workbook 7.1–7.2',
  objectives: [
    'Derive and use ' + m('S = a · h') + ' for a parallelogram.',
    'Derive and use ' + m('S = ½ a · h') + ' for a triangle.',
    'Use ' + m('S = ½ ab sin C') + ' when two sides and the included angle are known.',
    'Recognise that triangles on the same base between the same parallels have equal areas.'
  ],
  terms: [
    ['Parallelogram', 'Parallelogramm', 'Параллелограмм'],
    ['Base', 'Asos', 'Основание'],
    ['Height (altitude)', 'Balandlik', 'Высота'],
    ['Corresponding height', 'Mos balandlik', 'Соответствующая высота'],
    ['Triangle', 'Uchburchak', 'Треугольник'],
    ['Included angle', 'Orasidagi burchak', 'Угол между сторонами'],
    ['Equal areas', 'Teng yuzalar', 'Равновеликие'],
    ['Median', 'Mediana', 'Медиана'],
    ['Between the same parallels', 'Bir xil parallellar orasida', 'Между теми же параллельными']
  ],
  timing: [[6, 'Cut and slide a paper parallelogram'], [14, 'The parallelogram formula'], [12, 'The triangle formula'], [4, 'Two sides and an angle'], [4, 'Homework']],
  sections: [
    {
      h: 'The parallelogram',
      html: `<p>Drop a perpendicular from one vertex, cut off the right triangle it makes and slide it to
      the other end. Nothing is lost and nothing is added — the parallelogram has become a rectangle with
      the same base and the same height.</p>
      {{fig:areaParallelogram:Cut the triangle off one end and slide it to the other: the parallelogram becomes a rectangle of the same base and height.}}
      <div class="keybox"><div class="klabel">Area of a parallelogram</div>
      ${eq(m('S = a · h<sub>a</sub>'), true)}
      where ${m('h<sub>a</sub>')} is the height <b>to the side ${m('a')}</b>.</div>
      <div class="warn"><span class="wl">Height, not slant side</span>
      In a parallelogram with sides ${m('8')} and ${m('5')} the area is <b>not</b> ${m('40')} unless the
      angle is right. The height is the perpendicular distance between the two parallel sides, and it is
      always shorter than the slant side.</div>
      <p>Since ${m('S = a · h_a = b · h_b')}, a longer side always has a shorter height. That single
      equation solves a whole family of problems.</p>`
    },
    {
      h: 'The triangle',
      html: `<p>Any triangle is exactly half of a parallelogram: copy it, turn the copy through
      ${m('180°')} and join the two along a side.</p>
      {{fig:areaTriangle:Two copies of a triangle make a parallelogram, so a triangle is half of base times height.}}
      ${eq(m('S = ' + f('1', '2') + ' a · h<sub>a</sub>'), true)}
      <p>For a right-angled triangle the two legs serve as base and height, so ${m('S = ' + f('1', '2') + 'ab')}
      immediately.</p>
      <div class="keybox"><div class="klabel">Two sides and the angle between them</div>
      ${eq(m('S = ' + f('1', '2') + ' ab · sin C'), true)}
      because the height to ${m('a')} is ${m('b sin C')}. With ${m('C = 90°')} this is the right-angle
      formula again, since ${m('sin 90° = 1')}.</div>`
    },
    {
      h: 'Same base, same parallels',
      html: `<p>The height of a triangle does not depend on where the apex sits along a line parallel to
      the base. So:</p>
      <div class="keybox"><div class="klabel">Equal areas</div>
      Triangles with the <b>same base</b> and apexes on the <b>same line parallel</b> to it have
      <b>equal areas</b> — however different they look.</div>
      <p>Two consequences worth remembering:</p>
      <ul>
        <li>A <b>median</b> divides a triangle into two of equal area — the two halves share a height
        and have equal bases.</li>
        <li>The diagonals of a parallelogram cut it into four triangles of equal area.</li>
      </ul>`
    }
  ],
  examples: [
    {
      q: 'A parallelogram has sides ' + m('10 cm') + ' and ' + m('6 cm') + ', and the height to the ' + m('10 cm') + ' side is ' + m('4 cm') + '. Find its area and the other height.',
      steps: [
        [m('S = 10 · 4 = 40 cm²'), 'Base times its own height.'],
        [m('40 = 6 · h_b'), 'The same area, measured from the other side.'],
        [m('h_b = ' + f('40', '6') + ' ≈ 6.67 cm'), 'Shorter side, taller height.']
      ],
      ans: m('40 cm²') + ', ' + m('h_b ≈ 6.67 cm')
    },
    {
      q: 'Find the area of a triangle with sides ' + m('7 cm') + ' and ' + m('8 cm') + ' and an included angle of ' + m('30°') + '.',
      steps: [
        [m('S = ' + f('1', '2') + ' · 7 · 8 · sin 30°'), ''],
        [m('sin 30° = 0.5'), ''],
        [m('S = ' + f('1', '2') + ' · 56 · 0.5'), ''],
        [m('= 14 cm²'), '']
      ],
      ans: m('14 cm²')
    },
    {
      q: 'A triangle has area ' + m('54 cm²') + ' and base ' + m('12 cm') + '. Find its height, and the area of each half made by the median to that base.',
      steps: [
        [m('54 = ' + f('1', '2') + ' · 12 · h'), ''],
        [m('54 = 6h, h = 9 cm'), ''],
        [m('54 ÷ 2 = 27 cm²'), 'A median always halves the area.']
      ],
      ans: m('h = 9 cm') + '; each half ' + m('27 cm²')
    }
  ],
  modelNote: 'Slide the apex along the top line: the shape changes completely, the area does not.',
  interactive: { type: 'areaModel', title: 'Same base, same height, same area' },
  quiz: [
    { q: 'A parallelogram with base ' + m('9') + ' and height ' + m('4') + ' has area:', a: [m('13'), m('18'), m('36'), m('72')], c: 2, why: m('9 · 4') + '.' },
    { q: 'A triangle with base ' + m('10') + ' and height ' + m('6') + ' has area:', a: [m('60'), m('30'), m('16'), m('15')], c: 1, why: m(f('1', '2') + ' · 10 · 6') + '.' },
    { q: 'A parallelogram has sides ' + m('8') + ' and ' + m('5') + '. Its area is:', a: [m('40'), m('26'), 'less than 40', m('20')], c: 2, why: 'The height is shorter than the slant side, unless the angle is right.' },
    { q: 'A median divides a triangle into two parts of:', a: ['unequal area', 'equal area', 'equal perimeter', 'equal angles'], c: 1, why: 'Same height, equal bases.' },
    { q: 'For sides ' + m('6') + ' and ' + m('10') + ' with an included angle of ' + m('30°') + ', the area is:', a: [m('30'), m('15'), m('60'), m('7.5')], c: 1, why: m(f('1', '2') + ' · 60 · 0.5 = 15') + '.' }
  ],
  practice: {
    easy: [
      [m('Find the area of a parallelogram with base 7 and height 5.'), m('35')],
      [m('Find the area of a triangle with base 8 and height 3.'), m('12')],
      [m('Find the area of a right triangle with legs 6 and 9.'), m('27')],
      [m('A triangle has area 20 and base 10. Find its height.'), m('4')],
      [m('A parallelogram has area 48 and base 12. Find its height.'), m('4')],
      [m('Find the area of a triangle with base 5 and height 5.'), m('12.5')],
      [m('A median divides a triangle of area 36. Find each part.'), m('18')]
    ],
    med: [
      [m('A parallelogram has sides 12 and 9, and the height to the 12-side is 6. Find the other height.'), m('8')],
      [m('Find the area of a triangle with sides 10 and 12 and included angle 30°.'), m('30')],
      [m('A triangle has area 42 cm² and height 7 cm. Find its base.'), m('12 cm')],
      [m('The diagonals of a parallelogram of area 60 cut it into four triangles. Find each area.'), m('15')],
      [m('Find the area of a triangle with vertices (0;0), (6;0), (0;8).'), m('24')],
      [m('A parallelogram has base 15 cm and area 90 cm². Find its height.'), m('6 cm')],
      [m('Find the area of a triangle with sides 8 and 8 and included angle 90°.'), m('32')]
    ],
    hard: [
      [m('A parallelogram has sides 10 and 8 with an angle of 30°. Find its area.'), m('10 · 8 · sin 30° = 40')],
      [m('A triangle has sides 13, 14, 15. Find its area.'), m('84') + ' — the height to the 14-side is 12'],
      [m('The area of a triangle is 24 cm² and two of its sides are 8 cm and 12 cm. Find the angle between them.'), m('sin C = 0.5') + ', so ' + m('C = 30°') + ' (or ' + m('150°') + ')'],
      [m('ABCD is a parallelogram and P is any point on AB. Show that the area of triangle PCD is half the area of ABCD.'), 'The triangle has base ' + m('CD') + ' and its apex lies on the parallel line ' + m('AB') + ', so its height is the height of the parallelogram; its area is ' + m(f('1', '2') + ' · CD · h') + '.'],
      [m('Find the area of a triangle with vertices (1;1), (5;2), (3;7).'), m('11') + ' — box ' + m('4 · 6 = 24') + ' less three corner triangles'],
      [m('A parallelogram has diagonals of 10 and 6 crossing at 90°. Find its area.'), m('30') + ' — it is a rhombus, area ' + m(f('1', '2') + 'd₁d₂')],
      [m('Two triangles have the same base and equal areas. Must their apexes lie on a line parallel to that base?'), 'Yes — equal area with equal base forces equal height, so both apexes are the same distance from the base line, on one of the two parallels.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Geometry 8, Темы 47–48, pp. 106–113. Mark the height on every diagram.',
  homework: [
    m('Find the area of a parallelogram with base 14 and height 9.'),
    m('Find the area of a triangle with base 16 and height 7.5.'),
    m('A parallelogram has sides 15 and 10; the height to the 15-side is 8. Find the other height.'),
    m('Find the area of a triangle with sides 9 and 14 and included angle 30°.'),
    m('A triangle has area 63 cm² and base 18 cm. Find its height.'),
    m('Find the area of the triangle with vertices (0;0), (10;0), (4;6).')
  ]
});

G8_GEO.push({
  id: 'geo-34', stream: 'geo', grade: 8, quarter: 3, lessons: '49', hours: 1,
  title: 'The area of a rhombus and of a trapezium',
  subtitle: 'Two formulas, both of them the parallelogram formula in disguise.',
  uz: 'Geometry 8, Темы 49–50', uzPage: 'Темы 49–50, pp. 114–118',
  cam: 'Stage 9 · 7.2', camPage: 'Learner’s Book pp. 149–155', wb: 'Workbook 7.2',
  objectives: [
    'Use ' + m('S = ½ d₁d₂') + ' for a rhombus.',
    'Use ' + m('S = ½ (a + b) h') + ' for a trapezium.',
    'Explain why each formula works.',
    'Find a missing length from a given area.'
  ],
  terms: [
    ['Rhombus', 'Romb', 'Ромб'],
    ['Diagonal', 'Diagonal', 'Диагональ'],
    ['Trapezium', 'Trapetsiya', 'Трапеция'],
    ['Parallel sides', 'Parallel tomonlar', 'Основания трапеции'],
    ['Midline', 'O‘rta chiziq', 'Средняя линия'],
    ['Height of a trapezium', 'Trapetsiya balandligi', 'Высота трапеции'],
    ['Kite', 'Deltoid', 'Дельтоид'],
    ['Perpendicular diagonals', 'Perpendikulyar diagonallar', 'Перпендикулярные диагонали']
  ],
  timing: [[5, 'Recall the rhombus properties'], [12, 'Area of a rhombus'], [14, 'Area of a trapezium'], [5, 'Working backwards'], [4, 'Homework']],
  sections: [
    {
      h: 'The rhombus',
      html: `<p>A rhombus is a parallelogram, so ${m('S = a · h')} still works. But its diagonals are
      perpendicular and bisect each other, and that gives a second formula which is usually more
      convenient:</p>
      {{fig:areaRhombus:The perpendicular diagonals cut the rhombus into four congruent right triangles.}}
      <div class="keybox"><div class="klabel">Area of a rhombus</div>
      ${eq(m('S = ' + f('1', '2') + ' d₁ · d₂'), true)}</div>
      <p>Why: the four right triangles each have legs ${m(f('d₁', '2'))} and ${m(f('d₂', '2'))}, so each
      has area ${m(f('d₁d₂', '8'))}, and four of them make ${m(f('d₁d₂', '2'))}.</p>
      <p>The same formula holds for any quadrilateral whose diagonals are perpendicular — a kite, for
      instance — and for a square, where ${m('d₁ = d₂')}.</p>`
    },
    {
      h: 'The trapezium',
      html: `<p>Copy the trapezium, turn the copy through ${m('180°')} and join the two along a leg. The
      result is a parallelogram of base ${m('a + b')} and height ${m('h')}. The trapezium is half of
      it:</p>
      <div class="keybox"><div class="klabel">Area of a trapezium</div>
      ${eq(m('S = ' + f('a + b', '2') + ' · h'), true)}
      — the average of the two parallel sides, times the height.</div>
      {{fig:midlineTrapezium:The midline of a trapezium is the average of the two parallel sides, so the area is midline × height.}}
      <p>Since the midline ${m('m = ' + f('a + b', '2'))}, the formula reads simply ${m('S = m · h')}:
      area is midline times height, exactly as for a rectangle.</p>
      <div class="warn"><span class="wl">Average, then multiply</span>
      The commonest error is ${m('(a + b) · h')} without the halving — an answer exactly twice too big.
      Sanity-check against the enclosing rectangle: a trapezium must be smaller than
      ${m('b · h')} when ${m('b')} is the longer parallel side.</div>`
    }
  ],
  examples: [
    {
      q: 'A rhombus has diagonals ' + m('12 cm') + ' and ' + m('16 cm') + '. Find its area, its side and its height.',
      steps: [
        [m('S = ' + f('1', '2') + ' · 12 · 16 = 96 cm²'), ''],
        [m('half-diagonals 6 and 8'), ''],
        [m('a = ' + sr('36 + 64') + ' = 10 cm'), 'Pythagoras in one of the four right triangles.'],
        [m('96 = 10 · h, h = 9.6 cm'), 'Using the parallelogram formula.']
      ],
      ans: m('96 cm²') + ', side ' + m('10 cm') + ', height ' + m('9.6 cm')
    },
    {
      q: 'A trapezium has parallel sides ' + m('8 cm') + ' and ' + m('14 cm') + ' and height ' + m('5 cm') + '. Find its area and its midline.',
      steps: [
        [m('m = ' + f('8 + 14', '2') + ' = 11 cm'), 'The midline.'],
        [m('S = 11 · 5'), ''],
        [m('= 55 cm²'), 'Less than ' + m('14 · 5 = 70') + ' ✓']
      ],
      ans: m('55 cm²') + ', midline ' + m('11 cm')
    },
    {
      q: 'A trapezium has area ' + m('84 cm²') + ', height ' + m('7 cm') + ' and one parallel side ' + m('9 cm') + '. Find the other.',
      steps: [
        [m('84 = ' + f('9 + b', '2') + ' · 7'), 'Substitute what you know.'],
        [m('12 = ' + f('9 + b', '2')), 'Divide by 7.'],
        [m('24 = 9 + b'), 'Multiply by 2.'],
        [m('b = 15 cm'), '']
      ],
      ans: m('15 cm')
    }
  ],
  modelNote: 'Change the base and height and check each formula against the readout.',
  interactive: { type: 'areaModel', title: 'Base, height and area' },
  quiz: [
    { q: 'A rhombus with diagonals ' + m('10') + ' and ' + m('8') + ' has area:', a: [m('80'), m('40'), m('18'), m('20')], c: 1, why: m(f('1', '2') + ' · 10 · 8') + '.' },
    { q: 'A trapezium with parallel sides ' + m('6') + ' and ' + m('10') + ' and height ' + m('4') + ' has area:', a: [m('64'), m('32'), m('40'), m('16')], c: 1, why: m(f('16', '2') + ' · 4') + '.' },
    { q: 'The midline of a trapezium with parallel sides ' + m('7') + ' and ' + m('13') + ' is:', a: [m('20'), m('10'), m('6'), m('91')], c: 1, why: 'The average of the two.' },
    { q: 'A square of diagonal ' + m('6') + ' has area:', a: [m('36'), m('18'), m('12'), m('9')], c: 1, why: m(f('1', '2') + ' · 6 · 6 = 18') + '.' },
    { q: 'A rhombus of area ' + m('60') + ' has one diagonal ' + m('10') + '. The other is:', a: [m('6'), m('12'), m('120'), m('30')], c: 1, why: m('60 = ' + f('1', '2') + ' · 10 · d') + '.' }
  ],
  practice: {
    easy: [
      [m('A rhombus has diagonals 6 and 8. Find its area.'), m('24')],
      [m('A trapezium has parallel sides 5 and 9 and height 4. Find its area.'), m('28')],
      [m('Find the midline of a trapezium with parallel sides 4 and 10.'), m('7')],
      [m('A square has diagonal 10. Find its area.'), m('50')],
      [m('A rhombus has diagonals 14 and 10. Find its area.'), m('70')],
      [m('A trapezium has midline 8 and height 5. Find its area.'), m('40')],
      [m('A rhombus has area 48 and one diagonal 12. Find the other.'), m('8')]
    ],
    med: [
      [m('A rhombus has diagonals 16 and 30. Find its area and its side.'), m('240') + ', side ' + m('17')],
      [m('A trapezium has area 96, height 8 and one parallel side 10. Find the other.'), m('14')],
      [m('A rhombus of side 13 has one diagonal 24. Find its area.'), 'other diagonal ' + m('10') + ', area ' + m('120')],
      [m('A trapezium has parallel sides 12 and 18 and area 105. Find its height.'), m('7')],
      [m('A kite has perpendicular diagonals 9 and 14. Find its area.'), m('63')],
      [m('A rhombus has side 10 and height 8. Find its area.'), m('80')],
      [m('A trapezium has midline 11 and area 77. Find its height.'), m('7')]
    ],
    hard: [
      [m('A rhombus has perimeter 40 and one diagonal 12. Find its area.'), 'side ' + m('10') + ', other diagonal ' + m('16') + ', area ' + m('96')],
      [m('An isosceles trapezium has parallel sides 10 and 22 and legs 10. Find its area.'), m('h = 8') + ', area ' + m('128')],
      [m('A trapezium has parallel sides in the ratio 2 : 5, height 6 and area 63. Find both sides.'), m('6') + ' and ' + m('15')],
      [m('A rhombus of area 120 has side 13. Find both diagonals.'), m('10') + ' and ' + m('24')],
      [m('Show that the formula for a trapezium gives the parallelogram formula when a = b.'), m('S = ' + f('a + a', '2') + ' · h = a · h') + ' — the trapezium becomes a parallelogram.'],
      [m('A trapezium is divided by a diagonal into two triangles. Find the ratio of their areas if the parallel sides are 6 and 10.'), m('3 : 5') + ' — the two triangles share the height'],
      [m('The diagonals of a quadrilateral are perpendicular, of lengths 12 and 9. Must its area be 54?'), 'Yes — cutting along the diagonals gives four right triangles whose areas sum to ' + m(f('1', '2') + 'd₁d₂') + ', whatever the quadrilateral’s shape, provided the diagonals meet inside it.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Темы 49–50, pp. 114–118. Check every trapezium answer against ' + m('b · h') + '.',
  homework: [
    m('A rhombus has diagonals 18 and 24. Find its area and its side.'),
    m('A trapezium has parallel sides 7 and 15 and height 6. Find its area.'),
    m('A trapezium has area 120, height 10 and one parallel side 9. Find the other.'),
    m('A square has diagonal 14. Find its area.'),
    m('A rhombus has perimeter 52 and one diagonal 24. Find its area.')
  ]
});

G8_GEO.push({
  id: 'geo-35', stream: 'geo', grade: 8, quarter: 3, lessons: '50', hours: 1,
  title: 'The area of a polygon',
  subtitle: 'Any polygon at all: cut it into triangles, add the pieces, done.',
  uz: 'Geometry 8, Тема 51', uzPage: 'Тема 51, pp. 119–121',
  cam: 'Stage 9 · 7.2', camPage: 'Learner’s Book pp. 149–155', wb: 'Workbook 7.2',
  objectives: [
    'Decompose a polygon into triangles and rectangles.',
    'Find the area of a compound shape by adding or subtracting.',
    'Find the area of a regular polygon from its apothem and perimeter.',
    'Find areas from coordinates on squared paper.'
  ],
  terms: [
    ['Polygon', 'Ko‘pburchak', 'Многоугольник'],
    ['Decomposition', 'Bo‘laklarga ajratish', 'Разбиение'],
    ['Compound shape', 'Murakkab figura', 'Составная фигура'],
    ['Regular polygon', 'Muntazam ko‘pburchak', 'Правильный многоугольник'],
    ['Apothem', 'Apofema', 'Апофема'],
    ['Enclosing rectangle', 'O‘rab turgan to‘rtburchak', 'Описанный прямоугольник'],
    ['Subtraction method', 'Ayirish usuli', 'Метод вычитания'],
    ['Cross-section', 'Kesim', 'Сечение']
  ],
  timing: [[5, 'Cut a pentagon into triangles'], [12, 'Decomposition'], [12, 'Compound shapes'], [7, 'Regular polygons'], [4, 'Homework']],
  sections: [
    {
      h: 'Cut it into pieces you know',
      html: `<p>Any polygon can be cut into triangles by drawing diagonals from one vertex. By the
      additivity of area, the whole is the sum of the parts:</p>
      {{fig:polygonDecompose:Diagonals from one vertex cut a polygon into triangles; add their areas to get the whole.}}
      <p>An ${m('n')}-gon splits into ${m('n − 2')} triangles this way — the same count that gave the
      angle sum ${m('180°(n − 2)')} in Quarter I. The two facts have the same source.</p>
      <div class="keybox"><div class="klabel">Two strategies</div>
      <b>Adding:</b> cut the shape into rectangles and triangles and total them.<br>
      <b>Subtracting:</b> draw the smallest rectangle that contains the shape, then take away the corner
      pieces. On squared paper the second is usually faster.</div>`
    },
    {
      h: 'Regular polygons',
      html: `<p>A regular ${m('n')}-gon splits into ${m('n')} congruent triangles meeting at the centre.
      Each has base ${m('a')} (a side) and height ${m('r')} (the <b>apothem</b> — the distance from the
      centre to a side):</p>
      ${eq(m('S = n · ' + f('1', '2') + ' a r = ' + f('1', '2') + ' P r'), true)}
      <p>where ${m('P = na')} is the perimeter. A regular hexagon of side 6 has apothem
      ${m('3' + sr('3') + ' ≈ 5.2')}, so ${m('S = ' + f('1', '2') + ' · 36 · 5.2 ≈ 93.5')}.</p>
      <div class="warn"><span class="wl">Apothem, not radius</span>
      The apothem reaches the <b>middle of a side</b>; the radius reaches a <b>vertex</b>. They are
      different lengths, and only the apothem belongs in this formula.</div>`
    }
  ],
  examples: [
    {
      q: 'An L-shape is a ' + m('10 × 6') + ' rectangle with a ' + m('4 × 3') + ' rectangle removed from one corner. Find its area and perimeter.',
      steps: [
        [m('10 · 6 = 60'), 'The whole rectangle.'],
        [m('4 · 3 = 12'), 'The piece removed.'],
        [m('60 − 12 = 48'), 'The area.'],
        [m('P = 2(10 + 6) = 32'), 'The perimeter is unchanged — the cut adds two edges and removes two of the same total length.']
      ],
      ans: 'Area ' + m('48') + ', perimeter ' + m('32')
    },
    {
      q: 'Find the area of the polygon with vertices ' + m('(0;0)') + ', ' + m('(6;0)') + ', ' + m('(6;4)') + ', ' + m('(3;7)') + ', ' + m('(0;4)') + '.',
      steps: [
        ['Split into a rectangle and a triangle.', 'The horizontal line ' + m('y = 4') + ' does it.'],
        [m('rectangle 6 × 4 = 24'), ''],
        [m('triangle: base 6, height 3'), 'From ' + m('y = 4') + ' up to ' + m('y = 7') + '.'],
        [m(f('1', '2') + ' · 6 · 3 = 9'), ''],
        [m('24 + 9 = 33'), '']
      ],
      ans: m('33')
    }
  ],
  modelNote: 'Change the base and height of one piece and watch how the total responds.',
  interactive: { type: 'areaModel', title: 'One piece of a decomposition' },
  quiz: [
    { q: 'A pentagon splits into how many triangles from one vertex?', a: [m('3'), m('4'), m('5'), m('2')], c: 0, why: m('n − 2 = 3') + '.' },
    { q: 'An L-shape is a ' + m('8 × 5') + ' rectangle less a ' + m('3 × 2') + ' corner. Its area is:', a: [m('40'), m('34'), m('46'), m('6')], c: 1, why: m('40 − 6') + '.' },
    { q: 'For a regular polygon, ' + m('S') + ' equals:', a: [m('P · r'), m(f('1', '2') + ' P r'), m('P + r'), m('n · r')], c: 1, why: 'Half the perimeter times the apothem.' },
    { q: 'The apothem of a regular polygon reaches:', a: ['a vertex', 'the middle of a side', 'the opposite vertex', 'the circumcircle'], c: 1, why: 'It is perpendicular to a side.' }
  ],
  practice: {
    easy: [
      [m('An L-shape is a 6 × 4 rectangle less a 2 × 2 corner. Find its area.'), m('20')],
      [m('A hexagon splits into how many triangles from one vertex?'), m('4')],
      [m('Find the area of a shape made of a 5 × 3 rectangle and a triangle of base 5, height 2.'), m('20')],
      [m('A regular polygon has perimeter 24 and apothem 4. Find its area.'), m('48')],
      [m('An L-shape is a 9 × 5 rectangle less a 4 × 2 corner. Find its area.'), m('37')],
      [m('Find the area of a triangle with vertices (0;0), (4;0), (0;3).'), m('6')],
      [m('A regular hexagon has perimeter 36 and apothem 5.2. Find its area.'), m('≈ 93.6')]
    ],
    med: [
      [m('Find the area of the polygon (0;0), (8;0), (8;3), (4;6), (0;3).'), m('36')],
      [m('A rectangle 12 × 8 has a 4 × 4 square cut from two opposite corners. Find the area left.'), m('64')],
      [m('A T-shape is a 10 × 2 bar on top of a 4 × 6 column. Find its area.'), m('44')],
      [m('A regular octagon has perimeter 40 and apothem 6. Find its area.'), m('120')],
      [m('Find the area of the quadrilateral (0;0), (5;0), (7;4), (2;4).'), m('20')],
      [m('A cross is made of five 3 × 3 squares. Find its area and perimeter.'), 'Area ' + m('45') + ', perimeter ' + m('36')],
      [m('A trapezium sits on a rectangle: rectangle 8 × 3, trapezium with parallel sides 8 and 4, height 3. Find the total area.'), m('24 + 18 = 42')]
    ],
    hard: [
      [m('Find the area of the pentagon (0;0), (6;0), (8;4), (4;8), (0;4).'), m('44')],
      [m('A regular hexagon has side 8. Find its apothem and area.'), m('4' + sr('3') + ' ≈ 6.93') + ', area ' + m('≈ 166.3')],
      [m('A room 6 m by 5 m has a 2 m by 1.5 m alcove added. Find the floor area and the cost of tiling at 120 000 so‘m/m².'), m('33 m²') + ', ' + m('3 960 000 so‘m')],
      [m('A rectangle 10 × 6 has a triangle of base 10 and height 6 removed. Find the area left, and explain the answer.'), m('60 − 30 = 30') + ' — the triangle is exactly half the rectangle'],
      [m('Find the area of the quadrilateral (1;1), (7;2), (6;6), (2;5).'), m('20')],
      [m('A regular polygon has 12 sides of length 5 and apothem 9.3. Find its area.'), m('≈ 279')],
      [m('Explain why cutting a polygon into triangles always gives the same total area, whichever cuts you use.'), 'Additivity says the parts of any one decomposition sum to the whole, and the whole does not depend on how it was cut — so every valid decomposition gives the same total.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Тема 51, pp. 119–121. Draw the cutting lines before calculating.',
  homework: [
    m('An L-shape is a 12 × 7 rectangle less a 5 × 3 corner. Find its area.'),
    m('Find the area of the polygon (0;0), (7;0), (7;4), (3;7), (0;4).'),
    m('A regular polygon has perimeter 30 and apothem 5. Find its area.'),
    m('A T-shape is a 12 × 3 bar on a 4 × 5 column. Find its area.'),
    m('A regular hexagon has side 10. Find its apothem and area.')
  ]
});

G8_GEO.push({
  id: 'geo-36', stream: 'geo', grade: 8, quarter: 3, lessons: '51', hours: 1,
  title: 'Practical · The circumference and area of a circle',
  subtitle: 'Cambridge insert: the one shape with no straight sides, and the number π that measures it.',
  uz: 'Geometry 8, Тема 52', uzPage: 'Тема 52, pp. 122–125',
  cam: 'Stage 9 · 7.1', camPage: 'Learner’s Book pp. 142–148', wb: 'Workbook 7.1',
  objectives: [
    'Use ' + m('C = 2πr') + ' and ' + m('S = πr²') + '.',
    'Find the radius from a given circumference or area.',
    'Find the area of a sector and the length of an arc.',
    'Solve practical problems involving circles.'
  ],
  terms: [
    ['Circle', 'Aylana', 'Окружность'],
    ['Circumference', 'Aylana uzunligi', 'Длина окружности'],
    ['Radius', 'Radius', 'Радиус'],
    ['Diameter', 'Diametr', 'Диаметр'],
    ['Pi (π)', 'Pi soni', 'Число π'],
    ['Arc', 'Yoy', 'Дуга'],
    ['Sector', 'Sektor', 'Сектор'],
    ['Semicircle', 'Yarim aylana', 'Полуокружность'],
    ['Annulus (ring)', 'Halqa', 'Кольцо']
  ],
  timing: [[6, 'Measure a round lid: C ÷ d'], [12, 'Circumference'], [12, 'Area'], [6, 'Arcs and sectors'], [4, 'Homework']],
  sections: [
    {
      h: 'π, and the two formulas',
      html: `<p>Measure the circumference of any round object and divide by its diameter. Every time, for
      every circle, you get the same number:</p>
      ${eq(m('π = ' + f('C', 'd') + ' ≈ 3.14159…'), true)}
      <div class="keybox"><div class="klabel">Circumference and area</div>
      ${eq(m('C = 2πr = πd') + '&nbsp;&nbsp;|&nbsp;&nbsp;' + m('S = πr²'), true)}</div>
      {{fig:circleArea:Cut the circle into thin sectors and interleave them: the result approaches a rectangle of base πr and height r.}}
      <p>Why ${m('πr²')}? Cut the circle into many thin sectors and lay them alternately up and down.
      The result is nearly a rectangle of height ${m('r')} and base half the circumference, ${m('πr')} —
      giving ${m('πr · r = πr²')}. The thinner the sectors, the better the fit.</p>
      <div class="warn"><span class="wl">Radius or diameter?</span>
      ${m('S = πr²')} needs the <b>radius</b>. Given a diameter of ${m('10')}, the area is
      ${m('π · 5² = 25π')}, not ${m('100π')} — a factor of four out.</div>`
    },
    {
      h: 'Arcs, sectors and rings',
      html: `<p>A sector of angle ${m('α')} is the fraction ${m(f('α', '360°'))} of the whole circle, so
      both its arc and its area are that same fraction:</p>
      ${eq(m('ℓ = ' + f('α', '360°') + ' · 2πr') + '&nbsp;&nbsp;|&nbsp;&nbsp;' + m('S<sub>sector</sub> = ' + f('α', '360°') + ' · πr²'), true)}
      <p>A quarter circle of radius 8: arc ${m(f('1', '4') + ' · 16π = 4π ≈ 12.6')}, area
      ${m(f('1', '4') + ' · 64π = 16π ≈ 50.3')}.</p>
      <p>A <b>ring</b> (annulus) between radii ${m('R')} and ${m('r')} has area
      ${m('π(R² − r²)')} — the big disc less the small one, by additivity.</p>
      <p>Give answers exactly in terms of ${m('π')} when possible, and only round at the very end.</p>`
    }
  ],
  examples: [
    {
      q: 'A circle has radius ' + m('7 cm') + '. Find its circumference and area, taking ' + m('π ≈ 3.14') + '.',
      steps: [
        [m('C = 2π · 7 = 14π'), ''],
        [m('≈ 43.96 cm'), ''],
        [m('S = π · 49 = 49π'), ''],
        [m('≈ 153.86 cm²'), '']
      ],
      ans: m('C ≈ 44 cm') + ', ' + m('S ≈ 153.9 cm²')
    },
    {
      q: 'A circular pond has area ' + m('78.5 m²') + '. Find its radius and the length of fence needed round it.',
      steps: [
        [m('78.5 = 3.14 · r²'), ''],
        [m('r² = 25, r = 5 m'), ''],
        [m('C = 2 · 3.14 · 5'), ''],
        [m('= 31.4 m'), '']
      ],
      ans: m('r = 5 m') + ', fence ' + m('31.4 m')
    },
    {
      q: 'A circular running track has an inner radius of ' + m('30 m') + ' and is ' + m('4 m') + ' wide. Find the area of the track surface.',
      steps: [
        [m('R = 34, r = 30'), ''],
        [m('S = π(34² − 30²)'), 'The ring formula.'],
        [m('= π(1156 − 900) = 256π'), ''],
        [m('≈ 804 m²'), '']
      ],
      ans: m('256π ≈ 804 m²')
    }
  ],
  modelNote: 'Explore the circle by dragging the radius; compare the circumference and area readouts.',
  interactive: { type: 'circleAngles', title: 'Around the circle' },
  quiz: [
    { q: 'A circle of radius ' + m('5') + ' has circumference:', a: [m('5π'), m('10π'), m('25π'), m('20π')], c: 1, why: m('2πr') + '.' },
    { q: 'A circle of radius ' + m('5') + ' has area:', a: [m('10π'), m('25π'), m('5π'), m('50π')], c: 1, why: m('πr²') + '.' },
    { q: 'A circle of diameter ' + m('12') + ' has area:', a: [m('144π'), m('36π'), m('12π'), m('24π')], c: 1, why: m('r = 6') + ', so ' + m('36π') + '.' },
    { q: 'A quarter circle of radius ' + m('4') + ' has area:', a: [m('16π'), m('4π'), m('8π'), m('2π')], c: 1, why: m(f('1', '4') + ' · 16π') + '.' },
    { q: 'If the radius doubles, the area:', a: ['doubles', 'triples', 'quadruples', 'stays the same'], c: 2, why: 'Area depends on ' + m('r²') + '.' }
  ],
  practice: {
    easy: [
      [m('Find the circumference of a circle of radius 3 (in terms of π).'), m('6π')],
      [m('Find the area of a circle of radius 3 (in terms of π).'), m('9π')],
      [m('Find the area of a circle of radius 10.'), m('100π ≈ 314')],
      [m('Find the circumference of a circle of diameter 14.'), m('14π ≈ 44')],
      [m('Find the area of a semicircle of radius 6.'), m('18π')],
      [m('A circle has circumference 20π. Find its radius.'), m('10')],
      [m('Find the area of a quarter circle of radius 2.'), m('π')]
    ],
    med: [
      [m('A circle has area 49π. Find its radius and circumference.'), m('r = 7') + ', ' + m('C = 14π')],
      [m('Find the area of a sector of radius 6 and angle 60°.'), m('6π')],
      [m('Find the arc length of a sector of radius 9 and angle 40°.'), m('2π')],
      [m('A circular table of diameter 1.2 m is covered. Find the area of cloth needed.'), m('0.36π ≈ 1.13 m²')],
      [m('Find the area of the ring between radii 10 and 6.'), m('64π')],
      [m('A wheel of radius 35 cm makes one turn. How far does it travel?'), m('70π ≈ 220 cm')],
      [m('A circle has circumference 31.4 m. Find its area (π ≈ 3.14).'), m('r = 5') + ', area ' + m('78.5 m²')]
    ],
    hard: [
      [m('A square of side 10 has a circle inscribed in it. Find the area between them.'), m('100 − 25π ≈ 21.5')],
      [m('A circle is inscribed in a square of side 10, and a square is inscribed in that circle. Find the smaller square’s area.'), m('50') + ' — its diagonal is the circle’s diameter, 10'],
      [m('A running track is 400 m round with two straights of 100 m and two semicircular ends. Find the radius of the ends.'), m('2πr = 200') + ', so ' + m('r ≈ 31.8 m')],
      [m('A wheel of diameter 70 cm turns 500 times. How far does it travel, in metres?'), m('500 · 0.7π ≈ 1100 m')],
      [m('A sector has area 12π and radius 6. Find its angle.'), m('120°')],
      [m('A circular pizza of diameter 40 cm is cut into 8 equal slices. Find the area of one slice.'), m('50π ≈ 157 cm²')],
      [m('Two circles have radii in the ratio 2 : 3. Find the ratio of their areas, and explain.'), m('4 : 9') + ' — area depends on the square of the radius, so lengths in ratio ' + m('k') + ' give areas in ratio ' + m('k²')]
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Тема 52, pp. 122–125. Leave answers in terms of ' + m('π') + ' unless told otherwise.',
  homework: [
    m('Find the circumference and area of a circle of radius 8.'),
    m('A circle has area 144π. Find its radius and circumference.'),
    m('Find the area of a sector of radius 10 and angle 72°.'),
    m('Find the area of the ring between radii 12 and 9.'),
    m('A bicycle wheel has diameter 66 cm. How far does it travel in 200 turns?')
  ]
});

G8_GEO.push({
  id: 'geo-37', stream: 'geo', grade: 8, quarter: 3, lessons: '52', hours: 1,
  title: 'Control work 3 · Coordinates, vectors and area',
  subtitle: 'The Quarter III assessment, and the four errors it produces every year.',
  uz: 'Geometry 8, Темы 53–54', uzPage: 'Темы 53–54, pp. 126–127',
  cam: 'Stage 9 · 7.1–7.2, 13.1–13.2', camPage: 'Learner’s Book pp. 142–155, 284–296', wb: 'Workbook 7.1–7.2',
  objectives: [
    'Assess coordinates, distance, vectors and all the area formulas.',
    'Diagnose each lost mark by error type.',
    'Re-solve every task that was lost.'
  ],
  timing: [[2, 'Setting up'], [36, 'The paper'], [2, 'Collect in']],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Work on mistakes', 'Xatolar ustida ishlash', 'Работа над ошибками'],
    ['Midpoint', 'O‘rta nuqta', 'Середина'],
    ['Distance', 'Masofa', 'Расстояние'],
    ['Vector', 'Vektor', 'Вектор'],
    ['Height', 'Balandlik', 'Высота'],
    ['Trapezium', 'Trapetsiya', 'Трапеция'],
    ['Units of area', 'Yuza birliklari', 'Единицы площади']
  ],
  sections: [
    {
      h: 'The paper (40 minutes)',
      html: `<p>Two variants of eight tasks. Tasks 1–5 are worth 1 mark, tasks 6–8 are worth 2:</p>
      <ul>
        <li>task 1 · the midpoint of a segment</li>
        <li>task 2 · the distance between two points</li>
        <li>task 3 · the equation of a circle from centre and radius</li>
        <li>task 4 · ${m('AB')} and ${m('| AB |')} from two points</li>
        <li>task 5 · the area of a parallelogram or a triangle</li>
        <li>task 6 · the area of a trapezium or a rhombus</li>
        <li>task 7 · a compound shape</li>
        <li>task 8 · a coordinate proof</li>
      </ul>
      <p><b>Marking note:</b> the four errors below account for almost every lost mark in this paper.</p>`
    },
    {
      h: 'The four errors',
      html: `<div class="keybox"><div class="klabel">Work on mistakes</div>
      <ol style="margin:0">
        <li><b>Start minus end</b> in a vector — the answer comes out with both signs reversed.</li>
        <li><b>The slant side used as the height</b> of a parallelogram or trapezium.</li>
        <li><b>The trapezium formula without the halving</b> — an answer exactly twice too big.</li>
        <li><b>Radius and diameter swapped</b>, or ${m('r²')} read off as ${m('r')} in the circle
        equation.</li>
      </ol></div>
      <p>Each pupil writes the error number beside every lost mark and re-solves that task in full.</p>`
    }
  ],
  examples: [
    {
      q: 'Find the error: for ' + m('A(1; 2)') + ' and ' + m('B(5; 7)') + ', ' + m('AB = (−4; −5)'),
      steps: [
        ['The subtraction went the wrong way round.', m('AB') + ' means “from ' + m('A') + ' to ' + m('B') + '”.'],
        [m('AB = (5 − 1; 7 − 2)'), 'End minus start.'],
        [m('AB = (4; 5)'), 'The answer given is ' + m('BA') + '.']
      ],
      ans: m('(4; 5)')
    },
    {
      q: 'Find the error: a trapezium with parallel sides ' + m('6') + ' and ' + m('10') + ' and height ' + m('4') + ' has area ' + m('64'),
      steps: [
        ['The halving was left out.', m('(6 + 10) · 4 = 64') + ' is the parallelogram, not the trapezium.'],
        [m('S = ' + f('6 + 10', '2') + ' · 4'), ''],
        [m('= 8 · 4 = 32'), 'Check: less than ' + m('10 · 4 = 40') + ' ✓']
      ],
      ans: m('32')
    }
  ],
  modelNote: 'Show the wrong working, take a vote on the error type, then reveal.',
  interactive: {
    type: 'fractionCancel',
    title: 'Diagnose the error',
    hint: 'Which of the four errors is this? Decide, then reveal.',
    items: [
      {
        title: 'Error 1 — vector the wrong way round',
        start: '<b>Claimed:</b> for <span class="m">A(3; 1)</span>, <span class="m">B(8; 4)</span>, <span class="m">AB = (−5; −3)</span>',
        steps: [
          ['<span class="m">AB</span> runs <b>from A to B</b>.', 'The subtraction is end minus start.'],
          ['<span class="m">(8 − 3; 4 − 1)</span>', ''],
          ['<span class="m">= (5; 3)</span>', 'What was written is <span class="m">BA</span>.']
        ],
        answer: '<span class="m">AB = (5; 3)</span>, and <span class="m">| AB | = ' + sr('34') + '</span>'
      },
      {
        title: 'Error 2 — slant side used as height',
        start: '<b>Claimed:</b> a parallelogram with sides <span class="m">9</span> and <span class="m">5</span> has area <span class="m">45</span>',
        steps: [
          ['That would need the angle to be <span class="m">90°</span>.', 'Then it would be a rectangle.'],
          ['The height is the <b>perpendicular</b> distance between the parallel sides.', 'It is always shorter than the slant side.'],
          ['With an angle of <span class="m">30°</span>, <span class="m">h = 5 sin 30° = 2.5</span>', ''],
          ['<span class="m">S = 9 · 2.5 = 22.5</span>', 'Half of what was claimed.']
        ],
        answer: 'The area is <span class="m">a · h</span>, never <span class="m">a · b</span> unless the angle is right.'
      },
      {
        title: 'Error 3 — trapezium not halved',
        start: '<b>Claimed:</b> parallel sides <span class="m">7</span> and <span class="m">13</span>, height <span class="m">5</span>, area <span class="m">100</span>',
        steps: [
          ['<span class="m">(7 + 13) · 5 = 100</span> is the doubled trapezium.', 'It is the parallelogram made from two copies.'],
          ['<span class="m">S = ' + f('7 + 13', '2') + ' · 5</span>', 'Average the parallel sides first.'],
          ['<span class="m">= 10 · 5 = 50</span>', 'Check: less than <span class="m">13 · 5 = 65</span> ✓']
        ],
        answer: '<span class="m">50</span>'
      },
      {
        title: 'Error 4 — radius and diameter swapped',
        start: '<b>Claimed:</b> <span class="m">(x − 2)² + (y + 1)² = 16</span> has centre <span class="m">(−2; 1)</span> and radius <span class="m">16</span>',
        steps: [
          ['The centre is what is <b>subtracted</b>, with the sign reversed.', '<span class="m">(2; −1)</span>, not <span class="m">(−2; 1)</span>.'],
          ['The right-hand side is <span class="m">r²</span>, not <span class="m">r</span>.', ''],
          ['<span class="m">r = ' + sr('16') + ' = 4</span>', '']
        ],
        answer: 'Centre <span class="m">(2; −1)</span>, radius <span class="m">4</span>.'
      }
    ]
  },
  quiz: [
    { q: 'For ' + m('A(2; 5)') + ' and ' + m('B(7; 9)') + ', ' + m('AB') + ' is:', a: [m('(−5; −4)'), m('(5; 4)'), m('(9; 14)'), m('(4; 5)')], c: 1, why: 'End minus start.' },
    { q: 'A trapezium with parallel sides ' + m('5') + ' and ' + m('9') + ' and height ' + m('6') + ' has area:', a: [m('84'), m('42'), m('27'), m('70')], c: 1, why: m(f('14', '2') + ' · 6') + '.' },
    { q: 'The radius of ' + m('(x − 1)² + (y − 2)² = 36') + ' is:', a: [m('36'), m('6'), m('18'), m('12')], c: 1, why: m('36 = 6²') + '.' },
    { q: 'A parallelogram with sides ' + m('7') + ' and ' + m('4') + ' and an angle of ' + m('30°') + ' has area:', a: [m('28'), m('14'), m('11'), m('7')], c: 1, why: m('7 · 4 · sin 30° = 14') + '.' }
  ],
  practice: {
    easy: [
      [m('<b>Variant 1, task 1.</b> Find the midpoint of (1; 3) and (7; 9).'), m('(4; 6)')],
      [m('<b>Task 2.</b> Find the distance between (0; 0) and (5; 12).'), m('13')],
      [m('<b>Task 3.</b> Write the equation of the circle, centre (2; −3), radius 5.'), m('(x − 2)² + (y + 3)² = 25')],
      [m('<b>Task 4.</b> Find AB and |AB| for A(1; 1), B(4; 5).'), m('(3; 4)') + ', ' + m('5')],
      [m('<b>Task 5.</b> Find the area of a triangle with base 12 and height 5.'), m('30')],
      [m('<b>Task 6.</b> Find the area of a trapezium with parallel sides 6 and 10 and height 5.'), m('40')],
      [m('<b>Task 7.</b> An L-shape is a 9 × 6 rectangle less a 3 × 2 corner. Find its area.'), m('48')]
    ],
    med: [
      [m('<b>Variant 2, task 1.</b> Find the midpoint of (−4; 6) and (2; −2).'), m('(−1; 2)')],
      [m('<b>Task 2.</b> Find the distance between (−1; 2) and (3; 5).'), m('5')],
      [m('<b>Task 3.</b> State the centre and radius of (x + 4)² + (y − 1)² = 49.'), m('(−4; 1), r = 7')],
      [m('<b>Task 4.</b> Find AB and |AB| for A(−2; 3), B(4; 11).'), m('(6; 8)') + ', ' + m('10')],
      [m('<b>Task 5.</b> Find the area of a parallelogram with base 11 and height 6.'), m('66')],
      [m('<b>Task 6.</b> Find the area of a rhombus with diagonals 10 and 12.'), m('60')],
      [m('<b>Task 8.</b> Show that (0;0), (5;0), (5;4), (0;4) is a rectangle.'), 'Both diagonals have midpoint ' + m('(2.5; 2)') + ' and both equal ' + m(sr('41')) + '.']
    ],
    hard: [
      [m('Find the fourth vertex of a parallelogram with (1;2), (6;3), (8;8).'), m('(3; 7)')],
      [m('A rhombus has perimeter 40 and one diagonal 16. Find its area.'), 'side ' + m('10') + ', other diagonal ' + m('12') + ', area ' + m('96')],
      [m('A trapezium has area 90, height 9 and one parallel side 8. Find the other.'), m('12')],
      [m('Find the area of the polygon (0;0), (8;0), (8;5), (4;8), (0;5).'), m('52')],
      [m('a = (3; −2) and b = (−1; 5). Find 2a − b and its length.'), m('(7; −9)') + ', ' + m(sr('130'))],
      [m('A circle has centre (2; 3) and passes through (6; 6). Find its equation and its area.'), m('(x − 2)² + (y − 3)² = 25') + ', area ' + m('25π')],
      [m('Show that (1;1), (5;3), (7;7), (3;5) is a parallelogram, and find its area.'), 'Diagonals share the midpoint ' + m('(4; 4)') + '; area ' + m('12')]
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Re-solve every task you lost marks on, with the error number written beside it.',
  homework: [
    'Re-solve, in full, each task you lost a mark on.',
    'Beside each, write the error number (1–4) that caused it.',
    m('Find AB and |AB| for A(3; −1), B(9; 7).'),
    m('Find the area of a trapezium with parallel sides 9 and 15 and height 8.'),
    m('State the centre and radius of (x − 5)² + (y + 2)² = 64.')
  ]
});

G8_GEO.push({
  id: 'geo-38', stream: 'geo', grade: 8, quarter: 4, lessons: '53–54', hours: 2,
  title: 'A line and a circle; the tangent',
  subtitle: 'Three possible relationships, decided by one comparison — and the property that makes tangents useful.',
  uz: 'Geometry 8, Тема 55', uzPage: 'Тема 55, pp. 128–131',
  cam: 'Stage 9 · 7.1', camPage: 'Learner’s Book pp. 142–148', wb: 'Workbook 7.1',
  objectives: [
    'Compare the distance from the centre with the radius to classify a line.',
    'State and use the tangent–radius property.',
    'Use the fact that two tangents from one point are equal.',
    'Construct a tangent to a circle at a given point.'
  ],
  terms: [
    ['Tangent', 'Urinma', 'Касательная'],
    ['Secant', 'Kesuvchi', 'Секущая'],
    ['Point of tangency', 'Urinish nuqtasi', 'Точка касания'],
    ['Distance to a line', 'Chiziqqacha masofa', 'Расстояние до прямой'],
    ['Perpendicular', 'Perpendikulyar', 'Перпендикуляр'],
    ['Chord', 'Vatar', 'Хорда'],
    ['Radius', 'Radius', 'Радиус'],
    ['External point', 'Tashqi nuqta', 'Внешняя точка'],
    ['Equal tangents', 'Teng urinmalar', 'Равные касательные']
  ],
  timing: [[6, 'Slide a ruler towards a drawn circle'], [12, 'Three positions'], [12, 'The tangent property'], [6, 'Two tangents from a point'], [4, 'Homework']],
  sections: [
    {
      h: 'Three positions of a line',
      html: `<p>Let ${m('d')} be the distance from the centre ${m('O')} to the line, and ${m('r')} the
      radius. Everything is decided by comparing them:</p>
      {{fig:linePositions:A line either misses the circle, touches it once, or cuts it twice — decided by d against r.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Comparison</th><th>Name</th><th>Common points</th></tr></thead>
      <tbody>
        <tr><td class="m">d &gt; r</td><td>no name — the line misses</td><td class="m">0</td></tr>
        <tr><td class="m">d = r</td><td>tangent</td><td class="m">1</td></tr>
        <tr><td class="m">d &lt; r</td><td>secant</td><td class="m">2</td></tr>
      </tbody></table></div>
      <p>Remember that “distance from a point to a line” always means the <b>perpendicular</b> distance —
      the shortest one.</p>`
    },
    {
      h: 'The tangent property',
      html: `<div class="keybox"><div class="klabel">Tangent and radius</div>
      A tangent is <b>perpendicular</b> to the radius drawn to the point of tangency.
      ${eq(m('OT ⟂ t'), true)}
      And conversely: a line through the end of a radius, perpendicular to it, is a tangent.</div>
      {{fig:tangentProperty:The radius to the point of tangency is perpendicular to the tangent — so a right-angled triangle appears in every tangent problem.}}
      <p>Why: of all the points on a tangent, the point of tangency ${m('T')} is the only one on the
      circle; every other point is outside, hence further from ${m('O')}. So ${m('OT')} is the shortest
      distance from ${m('O')} to the line — and the shortest distance is the perpendicular.</p>
      <p>The consequence is practical: <b>every tangent problem contains a right-angled triangle</b>, so
      Pythagoras and the trigonometry of Quarter II apply immediately.</p>`
    },
    {
      h: 'Two tangents from one point',
      html: `<div class="keybox"><div class="klabel">Equal tangents</div>
      From a point ${m('P')} outside a circle, the two tangent segments are <b>equal</b>:
      ${eq(m('PA = PB'), true)}
      and ${m('OP')} bisects both the angle ${m('APB')} and the angle ${m('AOB')}.</div>
      <p>Proof: the triangles ${m('OAP')} and ${m('OBP')} are right-angled at ${m('A')} and ${m('B')},
      share the hypotenuse ${m('OP')}, and have equal legs ${m('OA = OB = r')}. They are congruent, so
      ${m('PA = PB')}.</p>
      <p>To find ${m('PA')}: ${m('PA = ' + sr('OP² − r²'))} — Pythagoras in that right triangle.</p>`
    }
  ],
  examples: [
    {
      q: 'A circle has radius ' + m('5 cm') + '. A line lies ' + m('5 cm') + ' from the centre. What is it, and how many points does it share with the circle?',
      steps: [
        [m('d = 5, r = 5'), ''],
        [m('d = r'), 'The middle case.'],
        ['It is a tangent, meeting the circle at exactly one point.', '']
      ],
      ans: 'A tangent; one common point'
    },
    {
      q: 'From a point ' + m('P') + ', ' + m('13 cm') + ' from the centre of a circle of radius ' + m('5 cm') + ', a tangent is drawn. Find its length.',
      steps: [
        [m('OT ⟂ PT'), 'The tangent property gives a right angle at ' + m('T') + '.'],
        [m('PT² = OP² − OT²'), 'Pythagoras.'],
        [m('= 169 − 25 = 144'), ''],
        [m('PT = 12 cm'), '']
      ],
      ans: m('12 cm')
    },
    {
      q: 'Two tangents from ' + m('P') + ' touch a circle of radius ' + m('6') + ' at ' + m('A') + ' and ' + m('B') + ', and ' + m('∠APB = 60°') + '. Find ' + m('OP') + ' and ' + m('PA') + '.',
      steps: [
        [m('OP') + ' bisects ' + m('∠APB') + ', so ' + m('∠APO = 30°'), ''],
        [m('sin 30° = ' + f('6', 'OP')), 'In the right triangle ' + m('OAP') + '.'],
        [m('OP = ' + f('6', '0.5') + ' = 12'), ''],
        [m('PA = ' + sr('144 − 36') + ' = ' + sr('108') + ' = 6' + sr('3') + ' ≈ 10.4'), '']
      ],
      ans: m('OP = 12') + ', ' + m('PA = 6' + sr('3'))
    }
  ],
  modelNote: 'Drag the point round the circle and watch the right angle at the point of tangency.',
  interactive: { type: 'circleAngles', title: 'Radius, chord and tangent' },
  quiz: [
    { q: 'If ' + m('d < r') + ', the line is:', a: ['a tangent', 'a secant', 'outside the circle', 'a radius'], c: 1, why: 'It cuts the circle twice.' },
    { q: 'A tangent meets the radius at the point of tangency at:', a: [m('45°'), m('60°'), m('90°'), 'any angle'], c: 2, why: 'The tangent property.' },
    { q: 'A circle of radius ' + m('8') + ' and a line ' + m('8') + ' from the centre share:', a: ['0 points', '1 point', '2 points', 'infinitely many'], c: 1, why: m('d = r') + ' — a tangent.' },
    { q: 'From ' + m('P') + ' with ' + m('OP = 10') + ' and ' + m('r = 6') + ', the tangent length is:', a: [m('4'), m('8'), m('16'), m('2')], c: 1, why: m(sr('100 − 36') + ' = 8') + '.' },
    { q: 'Two tangents from one external point are:', a: ['equal', 'perpendicular', 'parallel', 'unrelated'], c: 0, why: 'The two right triangles are congruent.' }
  ],
  practice: {
    easy: [
      [m('r = 7, d = 9. Classify the line.'), 'It misses the circle.'],
      [m('r = 7, d = 7. Classify the line.'), 'A tangent.'],
      [m('r = 7, d = 3. Classify the line.'), 'A secant.'],
      [m('OP = 5, r = 3. Find the tangent length.'), m('4')],
      [m('OP = 13, r = 12. Find the tangent length.'), m('5')],
      [m('What angle does a tangent make with the radius at the point of tangency?'), m('90°')],
      [m('PA and PB are tangents with PA = 9. Find PB.'), m('9')]
    ],
    med: [
      [m('OP = 17, r = 8. Find the tangent length.'), m('15')],
      [m('The tangent from P is 24 and r = 7. Find OP.'), m('25')],
      [m('The tangent from P is 12 and OP = 15. Find r.'), m('9')],
      [m('A circle of radius 10 has a chord 5 from the centre. Is the chord’s line a secant?'), 'Yes — ' + m('5 < 10')],
      [m('Two tangents from P touch a circle of radius 5 with ∠APB = 90°. Find OP.'), m('5' + sr('2') + ' ≈ 7.07')],
      [m('A circle has radius 6 and centre (0; 0). Is the line y = 6 a tangent?'), 'Yes — its distance from the origin is exactly ' + m('6') + '.'],
      [m('OP = 20, r = 16. Find the tangent length.'), m('12')]
    ],
    hard: [
      [m('Two tangents from P touch a circle of radius 9 at A and B, with ∠APB = 60°. Find PA and the area of OAPB.'), m('OP = 18') + ', ' + m('PA = 9' + sr('3')) + ', area ' + m('81' + sr('3') + ' ≈ 140')],
      [m('A circle of radius 5 is inscribed in a right triangle with legs 12 and 16. Verify that r = 4 instead, using area.'), 'Hypotenuse ' + m('20') + '; ' + m('r = ' + f('12 + 16 − 20', '2') + ' = 4') + ', so the radius is 4, not 5.'],
      [m('A tangent from P is 15 and r = 8. Find OP and sin ∠OPA.'), m('OP = 17') + ', ' + m('sin ∠OPA = ' + f('8', '17'))],
      [m('The line x = 5 and the circle x² + y² = 25. How many common points?'), 'One — ' + m('d = 5 = r') + ', a tangent at ' + m('(5; 0)') + '.'],
      [m('A circle of radius r sits in a corner, touching both arms of a right angle. Its centre is 10 from the corner. Find r.'), m('r' + sr('2') + ' = 10') + ', so ' + m('r = 5' + sr('2') + ' ≈ 7.07')],
      [m('Two circles of radii 3 and 5 have their centres 10 apart. Find the length of a common external tangent.'), m(sr('100 − 4') + ' = ' + sr('96') + ' ≈ 9.8')],
      [m('Explain why the perpendicular from the centre is the shortest distance to a tangent.'), 'Every point of a tangent except the point of tangency lies outside the circle, so it is more than ' + m('r') + ' from the centre; the point of tangency is exactly ' + m('r') + ' away, so it is the nearest — and the nearest point on a line is the foot of the perpendicular.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Тема 55, pp. 128–131. Mark the right angle in every diagram.',
  homework: [
    m('r = 9, d = 4. Classify the line and say how many common points there are.'),
    m('OP = 25, r = 7. Find the tangent length.'),
    m('The tangent from P is 8 and r = 6. Find OP.'),
    m('Two tangents from P touch a circle of radius 4 with ∠APB = 90°. Find OP and PA.'),
    m('Is the line y = 7 a tangent to x² + y² = 49? Justify.')
  ]
});

G8_GEO.push({
  id: 'geo-39', stream: 'geo', grade: 8, quarter: 4, lessons: '55', hours: 1,
  title: 'Two circles; the central angle and its arc',
  subtitle: 'How two circles can meet, and the angle that measures an arc exactly.',
  uz: 'Geometry 8, Тема 56', uzPage: 'Тема 56, pp. 132–134',
  cam: 'Stage 9 · 7.1', camPage: 'Learner’s Book pp. 142–148', wb: 'Workbook 7.1',
  objectives: [
    'Classify the position of two circles from the distance between their centres.',
    'Define the central angle and the degree measure of an arc.',
    'Find the arc length and the sector area from the central angle.',
    'Use the fact that equal arcs subtend equal central angles.'
  ],
  terms: [
    ['Central angle', 'Markaziy burchak', 'Центральный угол'],
    ['Arc', 'Yoy', 'Дуга'],
    ['Degree measure of an arc', 'Yoyning gradus o‘lchovi', 'Градусная мера дуги'],
    ['Concentric circles', 'Konsentrik aylanalar', 'Концентрические окружности'],
    ['Internally tangent', 'Ichdan urinuvchi', 'Касающиеся внутренним образом'],
    ['Externally tangent', 'Tashqaridan urinuvchi', 'Касающиеся внешним образом'],
    ['Intersecting circles', 'Kesishuvchi aylanalar', 'Пересекающиеся окружности'],
    ['Line of centres', 'Markazlar chizig‘i', 'Линия центров'],
    ['Major / minor arc', 'Katta / kichik yoy', 'Большая / меньшая дуга']
  ],
  timing: [[6, 'Move two paper circles together'], [12, 'Positions of two circles'], [14, 'Central angle and arc'], [4, 'Arc length again'], [4, 'Homework']],
  sections: [
    {
      h: 'Two circles',
      html: `<p>Let ${m('d')} be the distance between the centres and ${m('R')}, ${m('r')} the radii,
      with ${m('R ≥ r')}:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Condition</th><th>Position</th><th>Common points</th></tr></thead>
      <tbody>
        <tr><td class="m">d &gt; R + r</td><td>outside each other</td><td class="m">0</td></tr>
        <tr><td class="m">d = R + r</td><td>externally tangent</td><td class="m">1</td></tr>
        <tr><td class="m">R − r &lt; d &lt; R + r</td><td>intersecting</td><td class="m">2</td></tr>
        <tr><td class="m">d = R − r</td><td>internally tangent</td><td class="m">1</td></tr>
        <tr><td class="m">d &lt; R − r</td><td>one inside the other</td><td class="m">0</td></tr>
        <tr><td class="m">d = 0</td><td>concentric</td><td class="m">0</td></tr>
      </tbody></table></div>
      <p>Note the pattern: the sum ${m('R + r')} controls the outside cases, the difference
      ${m('R − r')} the inside ones. Two circles touch exactly when ${m('d')} hits one of those two
      values.</p>`
    },
    {
      h: 'The central angle measures the arc',
      html: `<p>An angle with its vertex <b>at the centre</b> is a <b>central angle</b>. It cuts off two
      arcs; the smaller is the <b>minor</b> arc, the larger the <b>major</b> arc.</p>
      {{fig:centralAngle:A central angle and the arc it cuts off have the same degree measure.}}
      <div class="keybox"><div class="klabel">Degree measure of an arc</div>
      The degree measure of an arc equals the central angle that subtends it.
      ${eq('arc ' + m('AB') + ' = ' + m('∠AOB'), true)}
      A whole circle is ${m('360°')}, a semicircle ${m('180°')}, a quarter ${m('90°')}.</div>
      <p>Degrees and length are different things. A ${m('60°')} arc is always one sixth of its circle,
      but its <b>length</b> depends on the radius:</p>
      ${eq(m('ℓ = ' + f('α', '360°') + ' · 2πr') + '&nbsp;&nbsp;|&nbsp;&nbsp;' + m('S<sub>sector</sub> = ' + f('α', '360°') + ' · πr²'))}
      <div class="warn"><span class="wl">Equal arcs, one circle</span>
      Equal central angles give equal arcs <b>in the same circle</b> (or in circles of equal radius).
      A ${m('60°')} arc of a large circle is far longer than a ${m('60°')} arc of a small one.</div>`
    }
  ],
  examples: [
    {
      q: 'Two circles have radii ' + m('8') + ' and ' + m('3') + ', and their centres are ' + m('11') + ' apart. Describe their position.',
      steps: [
        [m('R + r = 11'), ''],
        [m('d = 11 = R + r'), 'Exactly the sum.'],
        ['They touch externally at one point.', 'The point of contact lies on the line of centres.']
      ],
      ans: 'Externally tangent'
    },
    {
      q: 'A central angle of ' + m('72°') + ' is drawn in a circle of radius ' + m('10') + '. Find the arc it cuts off and the sector area.',
      steps: [
        [m(f('72', '360') + ' = ' + f('1', '5')), 'One fifth of the circle.'],
        [m('ℓ = ' + f('1', '5') + ' · 20π = 4π ≈ 12.6'), ''],
        [m('S = ' + f('1', '5') + ' · 100π = 20π ≈ 62.8'), '']
      ],
      ans: m('ℓ = 4π') + ', ' + m('S = 20π')
    }
  ],
  modelNote: 'Drag the points and compare the central angle with the arc it cuts off.',
  interactive: { type: 'circleAngles', title: 'The central angle' },
  quiz: [
    { q: 'Circles of radii ' + m('5') + ' and ' + m('3') + ' with ' + m('d = 8') + ' are:', a: ['separate', 'externally tangent', 'intersecting', 'internally tangent'], c: 1, why: m('d = R + r') + '.' },
    { q: 'Circles of radii ' + m('9') + ' and ' + m('4') + ' with ' + m('d = 5') + ' are:', a: ['separate', 'externally tangent', 'intersecting', 'internally tangent'], c: 3, why: m('d = R − r') + '.' },
    { q: 'A central angle of ' + m('90°') + ' cuts off an arc of:', a: [m('45°'), m('90°'), m('180°'), m('360°')], c: 1, why: 'The arc has the same degree measure.' },
    { q: 'A ' + m('60°') + ' arc of a circle of radius ' + m('6') + ' has length:', a: [m('π'), m('2π'), m('6π'), m('12π')], c: 1, why: m(f('1', '6') + ' · 12π') + '.' },
    { q: 'Concentric circles have:', a: ['the same radius', 'the same centre', 'one common point', 'two common points'], c: 1, why: m('d = 0') + '.' }
  ],
  practice: {
    easy: [
      [m('R = 6, r = 2, d = 10. Describe the position.'), 'Separate.'],
      [m('R = 6, r = 2, d = 8. Describe the position.'), 'Externally tangent.'],
      [m('R = 6, r = 2, d = 4. Describe the position.'), 'Internally tangent.'],
      [m('R = 6, r = 2, d = 5. Describe the position.'), 'Intersecting.'],
      [m('Find the arc measure of a 45° central angle.'), m('45°')],
      [m('Find the length of a 90° arc in a circle of radius 8.'), m('4π')],
      [m('Find the sector area of a 180° sector of radius 4.'), m('8π')]
    ],
    med: [
      [m('R = 10, r = 4, d = 14. Describe the position and the number of common points.'), 'Externally tangent, 1 point.'],
      [m('R = 10, r = 4, d = 3. Describe the position.'), 'One inside the other, no common points.'],
      [m('Find the length of a 120° arc in a circle of radius 9.'), m('6π')],
      [m('Find the sector area of a 120° sector of radius 9.'), m('27π')],
      [m('An arc of 40° has length 4π. Find the radius.'), m('r = 18')],
      [m('A sector of 60° has area 6π. Find the radius.'), m('r = 6')],
      [m('Two circles of radius 5 have centres 6 apart. How many common points?'), m('2') + ' — intersecting']
    ],
    hard: [
      [m('Two circles of radii 7 and 3 touch internally. Find the distance between the centres, and again if they touch externally.'), m('4') + ' internally, ' + m('10') + ' externally'],
      [m('A circle of radius 12 has an arc of length 8π. Find its central angle.'), m('120°')],
      [m('A sector of radius 10 has area 15π. Find its angle and arc length.'), m('54°') + ', arc ' + m('3π')],
      [m('Two circles of radius 6 intersect, and their centres are 6 apart. Find the angle subtended at each centre by the common chord.'), m('120°') + ' — the triangle of two radii and the line of centres is equilateral, twice over'],
      [m('For what values of d do circles of radii 8 and 5 intersect at two points?'), m('3 < d < 13')],
      [m('A running track is a circle of radius 50 m. How long is the arc of a 30° turn?'), m(f('1', '12') + ' · 100π ≈ 26.2 m')],
      [m('Explain why two arcs of the same degree measure can have different lengths.'), 'Degree measure records what fraction of its own circle an arc is; length also depends on how big that circle is, through the factor ' + m('2πr') + '.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Тема 56, pp. 132–134. Compare ' + m('d') + ' with ' + m('R + r') + ' and ' + m('R − r') + ' every time.',
  homework: [
    m('R = 9, r = 4, d = 13. Describe the position.'),
    m('R = 9, r = 4, d = 5. Describe the position.'),
    m('Find the length of a 150° arc in a circle of radius 12.'),
    m('Find the sector area of a 45° sector of radius 8.'),
    m('An arc of 60° has length 5π. Find the radius.')
  ]
});

G8_GEO.push({
  id: 'geo-40', stream: 'geo', grade: 8, quarter: 4, lessons: '56', hours: 1,
  title: 'The inscribed angle',
  subtitle: 'Move the vertex anywhere along the arc and the angle never changes — the most useful theorem in the chapter.',
  uz: 'Geometry 8, Тема 57', uzPage: 'Тема 57, pp. 135–137',
  cam: 'Stage 9 · 7.1', camPage: 'Learner’s Book pp. 142–148', wb: 'Workbook 7.1',
  objectives: [
    'State and use the inscribed angle theorem.',
    'Use the corollary that an angle in a semicircle is a right angle.',
    'Use the corollary that angles on the same arc are equal.',
    'Find angles in a cyclic quadrilateral.'
  ],
  terms: [
    ['Inscribed angle', 'Ichki chizilgan burchak', 'Вписанный угол'],
    ['Subtended by an arc', 'Yoyga tiralgan', 'Опирающийся на дугу'],
    ['Angle in a semicircle', 'Yarim aylanaga tiralgan burchak', 'Угол, опирающийся на диаметр'],
    ['Same arc', 'Bir xil yoy', 'Одна и та же дуга'],
    ['Cyclic quadrilateral', 'Aylanaga ichki chizilgan to‘rtburchak', 'Вписанный четырёхугольник'],
    ['Opposite angles', 'Qarama-qarshi burchaklar', 'Противоположные углы'],
    ['Corollary', 'Natija', 'Следствие'],
    ['Diameter', 'Diametr', 'Диаметр']
  ],
  timing: [[5, 'Guess before measuring'], [14, 'The theorem'], [12, 'The three corollaries'], [5, 'Cyclic quadrilaterals'], [4, 'Homework']],
  sections: [
    {
      h: 'The theorem',
      html: `<p>An angle with its vertex <b>on</b> the circle, whose arms are two chords, is an
      <b>inscribed angle</b>.</p>
      {{fig:inscribedAngle:An inscribed angle is exactly half the central angle standing on the same arc.}}
      <div class="keybox"><div class="klabel">Inscribed angle theorem</div>
      ${eq(m('∠ACB = ' + f('1', '2') + ' ∠AOB'), true)}
      An inscribed angle is <b>half</b> the central angle on the same arc — equivalently, half the degree
      measure of that arc.</div>
      <p>The proof, in the case where ${m('C')}, ${m('O')} and one chord line up: triangle ${m('OCB')} is
      isosceles (${m('OC = OB = r')}), so its base angles are equal, say ${m('β')} each. The exterior
      angle at ${m('O')} is then ${m('2β')} — and that exterior angle is the central angle. The general
      case follows by splitting the angle into two such pieces.</p>`
    },
    {
      h: 'Three corollaries you will use constantly',
      html: `<div class="keybox"><div class="klabel">1 · Angles on the same arc</div>
      All inscribed angles standing on the <b>same arc</b> are equal — they are all half of the one
      central angle. Move the vertex anywhere along the far arc; the angle does not move.</div>
      {{fig:semicircleAngle:An angle inscribed in a semicircle is always a right angle, because the central angle is the straight angle 180°.}}
      <div class="keybox"><div class="klabel">2 · Angle in a semicircle</div>
      An angle subtended by a <b>diameter</b> is ${m('90°')} — the central angle is the straight angle
      ${m('180°')}, and half of that is ${m('90°')}.</div>
      <div class="keybox"><div class="klabel">3 · Cyclic quadrilateral</div>
      In a quadrilateral whose four vertices lie on one circle, opposite angles add to ${m('180°')}:
      ${eq(m('∠A + ∠C = ∠B + ∠D = 180°'), true)}
      because the two arcs they stand on make up the whole ${m('360°')}.</div>
      <div class="warn"><span class="wl">Same arc, not just same chord</span>
      Two angles standing on the same chord but on <b>opposite sides</b> of it are not equal — they are
      supplementary. That is corollary 3 in disguise.</div>`
    }
  ],
  examples: [
    {
      q: 'A central angle is ' + m('80°') + '. Find the inscribed angle on the same arc.',
      steps: [
        [m('∠inscribed = ' + f('1', '2') + ' · 80°'), ''],
        [m('= 40°'), 'And every inscribed angle on that arc is ' + m('40°') + '.']
      ],
      ans: m('40°')
    },
    {
      q: m('AB') + ' is a diameter and ' + m('C') + ' is on the circle, with ' + m('∠CAB = 35°') + '. Find the other two angles of triangle ' + m('ABC') + '.',
      steps: [
        [m('∠ACB = 90°'), 'Angle in a semicircle.'],
        [m('∠ABC = 180° − 90° − 35°'), 'Angle sum of a triangle.'],
        [m('= 55°'), '']
      ],
      ans: m('∠ACB = 90°') + ', ' + m('∠ABC = 55°')
    },
    {
      q: 'In a cyclic quadrilateral ' + m('ABCD') + ', ' + m('∠A = 78°') + ' and ' + m('∠B = 95°') + '. Find ' + m('∠C') + ' and ' + m('∠D') + '.',
      steps: [
        [m('∠C = 180° − 78° = 102°'), 'Opposite to ' + m('∠A') + '.'],
        [m('∠D = 180° − 95° = 85°'), 'Opposite to ' + m('∠B') + '.'],
        [m('78 + 95 + 102 + 85 = 360'), 'Check ✓']
      ],
      ans: m('∠C = 102°') + ', ' + m('∠D = 85°')
    }
  ],
  modelNote: 'Drag C round the circle: the inscribed angle stays exactly half the central angle.',
  interactive: { type: 'circleAngles', title: 'Inscribed and central angles' },
  quiz: [
    { q: 'A central angle of ' + m('120°') + ' gives an inscribed angle of:', a: [m('60°'), m('120°'), m('240°'), m('30°')], c: 0, why: 'Half.' },
    { q: 'An angle inscribed in a semicircle is:', a: [m('45°'), m('60°'), m('90°'), m('180°')], c: 2, why: 'Half of the straight angle.' },
    { q: 'In a cyclic quadrilateral, ' + m('∠A = 110°') + '. Then ' + m('∠C') + ' is:', a: [m('110°'), m('70°'), m('90°'), m('250°')], c: 1, why: 'Opposite angles add to ' + m('180°') + '.' },
    { q: 'Two inscribed angles on the same arc are:', a: ['equal', 'supplementary', 'complementary', 'unrelated'], c: 0, why: 'Both are half the same central angle.' },
    { q: 'An inscribed angle of ' + m('25°') + ' stands on an arc of:', a: [m('12.5°'), m('25°'), m('50°'), m('75°')], c: 2, why: 'The arc is twice the inscribed angle.' }
  ],
  practice: {
    easy: [
      [m('A central angle is 60°. Find the inscribed angle on the same arc.'), m('30°')],
      [m('An inscribed angle is 40°. Find the central angle.'), m('80°')],
      [m('AB is a diameter and C is on the circle. Find ∠ACB.'), m('90°')],
      [m('In a cyclic quadrilateral, ∠B = 85°. Find ∠D.'), m('95°')],
      [m('An inscribed angle stands on a 100° arc. Find it.'), m('50°')],
      [m('An inscribed angle is 30°. Find its arc.'), m('60°')],
      [m('Two inscribed angles stand on the same arc and one is 47°. Find the other.'), m('47°')]
    ],
    med: [
      [m('AB is a diameter and ∠CAB = 28°. Find ∠ABC.'), m('62°')],
      [m('In a cyclic quadrilateral, ∠A = 3∠C. Find both.'), m('∠A = 135°, ∠C = 45°')],
      [m('A central angle is 140°. Find the inscribed angle on the major arc.'), m('70°')],
      [m('An inscribed angle of 65° stands on arc AB. Find the central angle AOB.'), m('130°')],
      [m('In a cyclic quadrilateral ABCD, ∠A = 92° and ∠D = 71°. Find ∠B and ∠C.'), m('∠C = 88°, ∠B = 109°')],
      [m('AB is a diameter, ∠ABC = 40°. Find the arc AC.'), m('80°')],
      [m('An inscribed angle stands on a semicircle. What is its arc?'), m('180°')]
    ],
    hard: [
      [m('AB is a diameter of a circle of radius 10 and ∠CAB = 30°. Find BC and AC.'), m('BC = 10') + ', ' + m('AC = 10' + sr('3') + ' ≈ 17.3')],
      [m('In a cyclic quadrilateral the angles, taken in order, are in the ratio 2 : 3 : 4 : 3. Find them.'), m('60°, 90°, 120°, 90°') + ' — opposites: ' + m('60 + 120 = 180') + ' and ' + m('90 + 90 = 180') + ' ✓'],
      [m('Two chords AB and CD meet at P inside a circle. Show that triangles APC and DPB are similar.'), m('∠A = ∠D') + ' (same arc ' + m('BC') + ') and ' + m('∠C = ∠B') + ' (same arc ' + m('AD') + '), so the triangles have two equal angles each.'],
      [m('A triangle inscribed in a circle has one side as a diameter of length 26 and another side 10. Find the third side.'), m('24') + ' — the angle opposite the diameter is ' + m('90°')],
      [m('An inscribed angle of 35° and a central angle on the same arc are drawn. Find the reflex central angle.'), m('360° − 70° = 290°')],
      [m('Prove that opposite angles of a cyclic quadrilateral add to 180°.'), m('∠A') + ' and ' + m('∠C') + ' are inscribed on the two arcs that together make the whole circle, so their sum is ' + m(f('1', '2') + ' · 360° = 180°') + '.'],
      [m('A chord of a circle of radius 8 subtends a central angle of 90°. Find its length and the inscribed angle on the major arc.'), m('8' + sr('2') + ' ≈ 11.3') + ', inscribed angle ' + m('45°')]
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Тема 57, pp. 135–137. Name the arc every angle stands on.',
  homework: [
    m('A central angle is 110°. Find the inscribed angle on the same arc.'),
    m('AB is a diameter and ∠CAB = 42°. Find the other two angles of triangle ABC.'),
    m('In a cyclic quadrilateral, ∠A = 105° and ∠B = 68°. Find ∠C and ∠D.'),
    m('An inscribed angle of 55° stands on arc AB. Find the arc and the central angle.'),
    m('A triangle inscribed in a circle has a diameter of 20 as one side and another side 12. Find the third side.')
  ]
});

G8_GEO.push({
  id: 'geo-41', stream: 'geo', grade: 8, quarter: 4, lessons: '57', hours: 1,
  title: 'Angles formed by chords, secants and tangents',
  subtitle: 'Vertex inside, on, or outside the circle — three positions, three rules, one pattern.',
  uz: 'Geometry 8, Тема 58', uzPage: 'Тема 58, pp. 138–141',
  cam: 'Stage 9 · 7.1', camPage: 'Learner’s Book pp. 142–148', wb: 'Workbook 7.1',
  objectives: [
    'Find the angle between two chords meeting inside a circle.',
    'Find the angle between two secants meeting outside a circle.',
    'Use the tangent–chord angle.',
    'Choose the right rule from the position of the vertex.'
  ],
  terms: [
    ['Chord', 'Vatar', 'Хорда'],
    ['Secant', 'Kesuvchi', 'Секущая'],
    ['Tangent–chord angle', 'Urinma va vatar burchagi', 'Угол между касательной и хордой'],
    ['Intercepted arc', 'Kesilgan yoy', 'Высекаемая дуга'],
    ['Vertex inside', 'Uchi ichkarida', 'Вершина внутри'],
    ['Vertex outside', 'Uchi tashqarida', 'Вершина снаружи'],
    ['Half the sum', 'Yarim yig‘indi', 'Полусумма'],
    ['Half the difference', 'Yarim ayirma', 'Полуразность']
  ],
  timing: [[5, 'Where is the vertex?'], [12, 'Vertex inside'], [12, 'Vertex outside'], [7, 'Tangent and chord'], [4, 'Homework']],
  sections: [
    {
      h: 'One pattern, three rules',
      html: `<p>Every rule in this lesson measures an angle by the arcs it cuts off. Which rule you use
      depends only on <b>where the vertex is</b>:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Vertex</th><th>Angle</th><th>Name</th></tr></thead>
      <tbody>
        <tr><td>at the centre</td><td class="m">= arc</td><td>central angle</td></tr>
        <tr><td>on the circle</td><td class="m">= ½ · arc</td><td>inscribed angle</td></tr>
        <tr><td>inside the circle</td><td class="m">= ½ (arc₁ + arc₂)</td><td>two chords</td></tr>
        <tr><td>outside the circle</td><td class="m">= ½ (arc<sub>far</sub> − arc<sub>near</sub>)</td><td>two secants</td></tr>
      </tbody></table></div>
      <p>Reading down the table, the vertex moves outward and the angle shrinks: from the whole arc, to
      half of it, to half a sum, to half a difference.</p>
      <div class="keybox"><div class="klabel">Tangent and chord</div>
      The angle between a tangent and a chord drawn from the point of tangency is <b>half</b> the arc
      the chord cuts off — the inscribed-angle rule, with the tangent standing in for a second chord
      that has shrunk to nothing.</div>`
    },
    {
      h: 'Using them',
      html: `<p>Two chords meet inside a circle, cutting arcs of ${m('70°')} and ${m('30°')}:</p>
      ${eq(m('∠ = ' + f('70° + 30°', '2') + ' = 50°'), true)}
      <p>Two secants meet outside, cutting arcs of ${m('100°')} (far) and ${m('40°')} (near):</p>
      ${eq(m('∠ = ' + f('100° − 40°', '2') + ' = 30°'), true)}
      <div class="warn"><span class="wl">Which arcs?</span>
      For the <b>inside</b> rule use the two arcs that the vertical angles stand on — the arc “in front”
      and the arc “behind”. For the <b>outside</b> rule always subtract the nearer arc from the further
      one; the answer must be positive, which is a useful check.</div>`
    }
  ],
  examples: [
    {
      q: 'Two chords meet inside a circle, intercepting arcs of ' + m('86°') + ' and ' + m('54°') + '. Find the angle between them.',
      steps: [
        ['The vertex is inside — half the sum.', ''],
        [m('∠ = ' + f('86° + 54°', '2')), ''],
        [m('= 70°'), 'And the other pair of vertical angles is ' + m('110°') + '.']
      ],
      ans: m('70°')
    },
    {
      q: 'Two secants from an external point intercept arcs of ' + m('130°') + ' and ' + m('50°') + '. Find the angle at the point.',
      steps: [
        ['The vertex is outside — half the difference.', ''],
        [m('∠ = ' + f('130° − 50°', '2')), 'Far arc minus near arc.'],
        [m('= 40°'), 'Positive ✓']
      ],
      ans: m('40°')
    },
    {
      q: 'A tangent touches a circle at ' + m('T') + ', and a chord ' + m('TA') + ' cuts off an arc of ' + m('120°') + '. Find the tangent–chord angle.',
      steps: [
        [m('∠ = ' + f('1', '2') + ' · 120°'), 'Half the intercepted arc.'],
        [m('= 60°'), ''],
        ['On the other side the angle is ' + m('120°') + '.', 'The two make ' + m('180°') + ' along the tangent line.']
      ],
      ans: m('60°')
    }
  ],
  modelNote: 'Move the points and check each angle against the arcs it intercepts.',
  interactive: { type: 'circleAngles', title: 'Angles and their arcs' },
  quiz: [
    { q: 'Two chords meet inside, cutting arcs of ' + m('80°') + ' and ' + m('40°') + '. The angle is:', a: [m('60°'), m('120°'), m('20°'), m('40°')], c: 0, why: 'Half the sum.' },
    { q: 'Two secants meet outside, cutting arcs of ' + m('110°') + ' and ' + m('30°') + '. The angle is:', a: [m('70°'), m('40°'), m('80°'), m('140°')], c: 1, why: 'Half the difference.' },
    { q: 'A tangent–chord angle cuts off an arc of ' + m('100°') + '. The angle is:', a: [m('100°'), m('50°'), m('200°'), m('80°')], c: 1, why: 'Half the arc.' },
    { q: 'The vertex is on the circle. The angle is:', a: ['the arc', 'half the arc', 'half the sum', 'half the difference'], c: 1, why: 'Inscribed angle.' },
    { q: 'For an external vertex you subtract:', a: ['the far arc from the near', 'the near arc from the far', 'nothing', 'both from 360°'], c: 1, why: 'The answer must be positive.' }
  ],
  practice: {
    easy: [
      [m('Two chords meet inside, arcs 60° and 40°. Find the angle.'), m('50°')],
      [m('Two secants meet outside, arcs 100° and 20°. Find the angle.'), m('40°')],
      [m('A tangent–chord angle cuts off an arc of 80°. Find it.'), m('40°')],
      [m('An inscribed angle stands on a 70° arc. Find it.'), m('35°')],
      [m('A central angle stands on a 70° arc. Find it.'), m('70°')],
      [m('Two chords meet inside, arcs 90° and 90°. Find the angle.'), m('90°')],
      [m('Two secants meet outside, arcs 140° and 60°. Find the angle.'), m('40°')]
    ],
    med: [
      [m('Two chords meet inside, arcs 118° and 46°. Find both pairs of vertical angles.'), m('82°') + ' and ' + m('98°')],
      [m('Two secants meet outside at 25°, and the near arc is 40°. Find the far arc.'), m('90°')],
      [m('A tangent–chord angle is 35°. Find the arc and the arc on the other side.'), m('70°') + ' and ' + m('290°')],
      [m('Two chords meet inside at 65°. One arc is 50°. Find the other.'), m('80°')],
      [m('Two secants meet outside, far arc 150°, angle 45°. Find the near arc.'), m('60°')],
      [m('A tangent and a chord cut off arcs of 140° and 220°. Find both angles at the point of tangency.'), m('70°') + ' and ' + m('110°')],
      [m('Two chords meet inside at 90°. Find the sum of the two intercepted arcs.'), m('180°')]
    ],
    hard: [
      [m('Two secants from P cut a circle so that the arcs, in order, are 100°, 60°, 140° and 60°. Find ∠P.'), m(f('140° − 60°', '2') + ' = 40°')],
      [m('A tangent at T and a secant from the same external point cut off arcs of 160° and 60°. Find the angle at that point.'), m('50°')],
      [m('Two chords AB and CD meet at P inside a circle, with arc AC = 74° and arc BD = 36°. Find ∠APC.'), m('55°')],
      [m('An angle at an external point is 30° and the two arcs differ by how much?'), m('60°')],
      [m('A quadrilateral is inscribed in a circle and one exterior angle is 85°. Find the interior angle opposite to it.'), m('85°') + ' — the exterior angle equals the opposite interior angle'],
      [m('A tangent–chord angle equals the inscribed angle on the other side of the chord. Explain why.'), 'Both equal half the same intercepted arc — the tangent behaves like a chord that has shrunk to a point.'],
      [m('Two secants meet outside at 20°. The near arc is 3 times smaller than the far arc. Find both arcs.'), m('60°') + ' and ' + m('20°')]
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Тема 58, pp. 138–141. Write down where the vertex is before choosing the rule.',
  homework: [
    m('Two chords meet inside, arcs 96° and 44°. Find the angle.'),
    m('Two secants meet outside, arcs 150° and 50°. Find the angle.'),
    m('A tangent–chord angle cuts off an arc of 130°. Find both angles at the point of tangency.'),
    m('Two chords meet inside at 72°. One arc is 60°. Find the other.'),
    m('Two secants meet outside at 35°, near arc 45°. Find the far arc.')
  ]
});

G8_GEO.push({
  id: 'geo-42', stream: 'geo', grade: 8, quarter: 4, lessons: '58', hours: 1,
  title: 'Chords and diameters',
  subtitle: 'The perpendicular from the centre bisects the chord — and that one fact solves them all.',
  uz: 'Geometry 8, Тема 59', uzPage: 'Тема 59, pp. 142–143',
  cam: 'Stage 9 · 7.1', camPage: 'Learner’s Book pp. 142–148', wb: 'Workbook 7.1',
  objectives: [
    'Use the fact that the perpendicular from the centre bisects a chord.',
    'Find a chord length from the radius and the distance from the centre.',
    'Compare chords by their distance from the centre.',
    'Find the radius from a chord and its distance.'
  ],
  terms: [
    ['Chord', 'Vatar', 'Хорда'],
    ['Diameter', 'Diametr', 'Диаметр'],
    ['Perpendicular from the centre', 'Markazdan perpendikulyar', 'Перпендикуляр из центра'],
    ['Bisects', 'Teng ikkiga bo‘ladi', 'Делит пополам'],
    ['Distance from the centre', 'Markazdan masofa', 'Расстояние от центра'],
    ['Equal chords', 'Teng vatarlar', 'Равные хорды'],
    ['Half-chord', 'Yarim vatar', 'Половина хорды'],
    ['Longest chord', 'Eng uzun vatar', 'Наибольшая хорда']
  ],
  timing: [[5, 'Fold a paper circle along a chord'], [14, 'The perpendicular property'], [12, 'Calculations'], [5, 'Comparing chords'], [4, 'Homework']],
  sections: [
    {
      h: 'The perpendicular from the centre',
      html: `<div class="keybox"><div class="klabel">Chord property</div>
      The perpendicular drawn from the centre to a chord <b>bisects</b> it — and conversely, the line
      from the centre to the midpoint of a chord is perpendicular to it.</div>
      {{fig:chordProperty:The perpendicular from the centre bisects the chord, creating a right triangle with the radius as hypotenuse.}}
      <p>Proof: join ${m('O')} to both ends of the chord. The triangle ${m('OAB')} is isosceles, because
      ${m('OA = OB = r')}. In an isosceles triangle the height from the apex is also the median — so it
      bisects ${m('AB')}.</p>
      <div class="keybox"><div class="klabel">The right triangle it creates</div>
      ${eq(m('r² = d² + (' + f('a', '2') + ')²'), true)}
      where ${m('a')} is the chord and ${m('d')} its distance from the centre. Any two of the three give
      the third.</div>`
    },
    {
      h: 'Comparing chords',
      html: `<p>Rearranging that relation as ${m(f('a', '2') + ' = ' + sr('r² − d²'))} shows the whole
      story: as ${m('d')} grows, the chord shrinks.</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">d</th><th>Chord</th></tr></thead>
      <tbody>
        <tr><td class="m">0</td><td>the diameter ${m('2r')} — the longest chord</td></tr>
        <tr><td>small</td><td>a long chord</td></tr>
        <tr><td class="m">d = r</td><td>the chord shrinks to a point — the line is a tangent</td></tr>
      </tbody></table></div>
      <p>Two consequences: <b>equal chords are equidistant from the centre</b>, and of two unequal
      chords the longer is the nearer. Both follow directly from the formula, with no new proof.</p>`
    }
  ],
  examples: [
    {
      q: 'A chord of length ' + m('16 cm') + ' is drawn in a circle of radius ' + m('10 cm') + '. Find its distance from the centre.',
      steps: [
        [m(f('a', '2') + ' = 8'), 'The perpendicular bisects the chord.'],
        [m('10² = d² + 8²'), 'Pythagoras.'],
        [m('d² = 100 − 64 = 36'), ''],
        [m('d = 6 cm'), '']
      ],
      ans: m('6 cm')
    },
    {
      q: 'A chord is ' + m('5 cm') + ' from the centre of a circle of radius ' + m('13 cm') + '. Find its length.',
      steps: [
        [m('(' + f('a', '2') + ')² = 169 − 25 = 144'), ''],
        [m(f('a', '2') + ' = 12'), ''],
        [m('a = 24 cm'), 'Do not forget to double.']
      ],
      ans: m('24 cm')
    },
    {
      q: 'A chord of ' + m('24 cm') + ' lies ' + m('9 cm') + ' from the centre. Find the radius and the diameter.',
      steps: [
        [m(f('a', '2') + ' = 12'), ''],
        [m('r² = 81 + 144 = 225'), ''],
        [m('r = 15 cm'), ''],
        [m('d = 30 cm'), '']
      ],
      ans: m('r = 15 cm') + ', ' + m('d = 30 cm')
    }
  ],
  modelNote: 'Move the chord and watch the right triangle formed by the radius, the distance and the half-chord.',
  interactive: { type: 'circleAngles', title: 'Chords in a circle' },
  quiz: [
    { q: 'The perpendicular from the centre to a chord:', a: ['is equal to it', 'bisects it', 'is a tangent', 'is a diameter'], c: 1, why: 'The triangle is isosceles.' },
    { q: m('r = 5') + ', chord ' + m('8') + '. Its distance from the centre is:', a: [m('3'), m('4'), m('6'), m('2')], c: 0, why: m(sr('25 − 16') + ' = 3') + '.' },
    { q: m('r = 13') + ', ' + m('d = 12') + '. The chord is:', a: [m('5'), m('10'), m('25'), m('24')], c: 1, why: 'Half-chord ' + m('5') + ', so chord ' + m('10') + '.' },
    { q: 'The longest chord of a circle is:', a: ['a tangent', 'a radius', 'the diameter', 'any chord'], c: 2, why: m('d = 0') + ' gives the maximum.' },
    { q: 'Of two chords, the longer is:', a: ['further from the centre', 'nearer the centre', 'the same distance', 'always a diameter'], c: 1, why: m(f('a', '2') + ' = ' + sr('r² − d²')) + ' decreases as ' + m('d') + ' grows.' }
  ],
  practice: {
    easy: [
      [m('r = 5, chord 6. Find d.'), m('4')],
      [m('r = 10, d = 8. Find the chord.'), m('12')],
      [m('r = 13, chord 24. Find d.'), m('5')],
      [m('Chord 10, d = 12. Find r.'), m('13')],
      [m('What is the longest chord of a circle of radius 9?'), m('18')],
      [m('r = 17, d = 15. Find the chord.'), m('16')],
      [m('r = 25, chord 14. Find d.'), m('24')]
    ],
    med: [
      [m('r = 15, chord 18. Find d.'), m('12')],
      [m('r = 20, d = 16. Find the chord.'), m('24')],
      [m('Chord 30, d = 8. Find r and the diameter.'), m('r = 17') + ', ' + m('d = 34')],
      [m('Two chords of a circle of radius 10 are 6 and 8 from the centre. Find both lengths.'), m('16') + ' and ' + m('12')],
      [m('r = 26, chord 48. Find d.'), m('10')],
      [m('A chord of 12 is 8 from the centre. Find the radius.'), m('10')],
      [m('Two equal chords are 7 from the centre of a circle of radius 25. Find their length.'), m('48')]
    ],
    hard: [
      [m('Two parallel chords of a circle of radius 13 are 10 and 24 long. Find the distance between them, in both possible cases.'), m('12 + 5 = 17') + ' (opposite sides) or ' + m('12 − 5 = 7') + ' (same side)'],
      [m('A chord subtends a central angle of 60° in a circle of radius 12. Find its length and its distance from the centre.'), 'chord ' + m('12') + ' (equilateral triangle), ' + m('d = 6' + sr('3') + ' ≈ 10.4')],
      [m('A chord of 16 is 6 from the centre. Find the radius and the central angle it subtends.'), m('r = 10') + '; ' + m('sin(α/2) = 0.8') + ', so ' + m('α ≈ 106°')],
      [m('A circle of radius 10 has two perpendicular chords through a point 6 from the centre, of lengths 16 and 12. Verify with the chord formula.'), 'Distances ' + m('6') + ' and ' + m('8') + '; ' + m('6² + 8² = 100 = r²') + ' ✓ — the two distances and the radius form a right triangle'],
      [m('Show that equal chords are equidistant from the centre.'), 'From ' + m(f('a', '2') + ' = ' + sr('r² − d²')) + ', equal ' + m('a') + ' forces equal ' + m('d') + ' in the same circle.'],
      [m('A chord is 5 from the centre of a circle of area 169π. Find its length.'), m('r = 13') + ', chord ' + m('24')],
      [m('A tunnel is a circular arc 8 m wide at the base and 2 m high in the middle. Find the radius of the circle.'), m('r = 5 m') + ' — ' + m('r² = (r − 2)² + 4²')]
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Тема 59, pp. 142–143. Draw the right triangle every time.',
  homework: [
    m('r = 17, chord 30. Find d.'),
    m('r = 25, d = 20. Find the chord.'),
    m('A chord of 40 is 9 from the centre. Find the radius.'),
    m('Two chords of a circle of radius 15 are 9 and 12 from the centre. Find both lengths.'),
    m('A tunnel arch is 12 m wide and 4 m high in the middle. Find the radius of its circle.')
  ]
});

G8_GEO.push({
  id: 'geo-43', stream: 'geo', grade: 8, quarter: 4, lessons: '59', hours: 1,
  title: 'Practical · Large and small units of length and area',
  subtitle: 'Cambridge insert: the conversions that decide whether an answer is right or a hundred times wrong.',
  uz: 'Geometry 8, Тема 60', uzPage: 'Тема 60, pp. 144–146',
  cam: 'Stage 9 · 7.3', camPage: 'Learner’s Book pp. 156–162', wb: 'Workbook 7.3',
  objectives: [
    'Convert between units of length and of area.',
    'Explain why area conversions use the square of the length factor.',
    'Choose a sensible unit for a given measurement.',
    'Estimate and check answers for plausibility.'
  ],
  terms: [
    ['Unit of length', 'Uzunlik birligi', 'Единица длины'],
    ['Unit of area', 'Yuza birligi', 'Единица площади'],
    ['Conversion factor', 'Almashtirish koeffitsienti', 'Коэффициент перевода'],
    ['Millimetre', 'Millimetr', 'Миллиметр'],
    ['Hectare', 'Gektar', 'Гектар'],
    ['Square kilometre', 'Kvadrat kilometr', 'Квадратный километр'],
    ['Scale', 'Masshtab', 'Масштаб'],
    ['Estimate', 'Taxminlash', 'Оценка'],
    ['Order of magnitude', 'Kattalik tartibi', 'Порядок величины']
  ],
  timing: [[5, 'Guess the area of the classroom'], [12, 'Length conversions'], [14, 'Area conversions'], [5, 'Scale and estimation'], [4, 'Homework']],
  sections: [
    {
      h: 'Why area factors are squared',
      html: `<p>A square of side ${m('1 m')} is also a square of side ${m('100 cm')}. Its area is
      ${m('1 m²')} — and also ${m('100 · 100 = 10 000 cm²')}. The length factor is ${m('100')}; the area
      factor is ${m('100² = 10 000')}.</p>
      <div class="keybox"><div class="klabel">The rule</div>
      If lengths are multiplied by ${m('k')}, areas are multiplied by ${m('k²')} (and volumes by
      ${m('k³')}).</div>
      <div class="tablewrap"><table>
      <thead><tr><th>Length</th><th>Factor</th><th>Area</th><th>Factor</th></tr></thead>
      <tbody>
        <tr><td class="m">1 cm = 10 mm</td><td class="m">10</td><td class="m">1 cm² = 100 mm²</td><td class="m">100</td></tr>
        <tr><td class="m">1 m = 100 cm</td><td class="m">100</td><td class="m">1 m² = 10 000 cm²</td><td class="m">10 000</td></tr>
        <tr><td class="m">1 km = 1000 m</td><td class="m">1000</td><td class="m">1 km² = 1 000 000 m²</td><td class="m">10<sup>6</sup></td></tr>
        <tr><td class="m">1 ha = 100 m × 100 m</td><td>—</td><td class="m">1 ha = 10 000 m²</td><td>—</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The commonest error in the whole year</span>
      Writing ${m('1 m² = 100 cm²')}. It is ${m('10 000')}. When in doubt, draw the square and count.</div>`
    },
    {
      h: 'Scale and estimation',
      html: `<p>A map at scale ${m('1 : 50 000')} shrinks every length by ${m('50 000')}, so it shrinks
      every area by ${m('50 000² = 2.5 × 10⁹')}. One square centimetre on that map represents
      ${m('0.25 km²')}.</p>
      <p>Before calculating anything, decide what a sensible answer looks like:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Thing</th><th>Roughly</th></tr></thead>
      <tbody>
        <tr><td>a page of a book</td><td class="m">≈ 600 cm²</td></tr>
        <tr><td>a classroom floor</td><td class="m">≈ 50 m²</td></tr>
        <tr><td>a football pitch</td><td class="m">≈ 0.7 ha</td></tr>
        <tr><td>a small district</td><td class="m">≈ 100 km²</td></tr>
      </tbody></table></div>
      <p>If a calculation gives a classroom of ${m('5000 m²')}, the arithmetic is not wrong by a
      little — a unit was converted the wrong way.</p>`
    }
  ],
  examples: [
    {
      q: 'Convert ' + m('4.5 m²') + ' to cm², and ' + m('250 000 cm²') + ' to m².',
      steps: [
        [m('1 m² = 10 000 cm²'), ''],
        [m('4.5 · 10 000 = 45 000 cm²'), ''],
        [m('250 000 ÷ 10 000'), 'Divide going the other way.'],
        [m('= 25 m²'), '']
      ],
      ans: m('45 000 cm²') + ' and ' + m('25 m²')
    },
    {
      q: 'A field is ' + m('0.8 km') + ' by ' + m('0.5 km') + '. Find its area in km², m² and hectares.',
      steps: [
        [m('0.8 · 0.5 = 0.4 km²'), ''],
        [m('0.4 · 1 000 000 = 400 000 m²'), ''],
        [m('400 000 ÷ 10 000 = 40 ha'), '']
      ],
      ans: m('0.4 km² = 400 000 m² = 40 ha')
    },
    {
      q: 'On a map of scale ' + m('1 : 25 000') + ', a lake covers ' + m('8 cm²') + '. Find its real area in hectares.',
      steps: [
        [m('length factor 25 000'), ''],
        [m('area factor 25 000² = 625 000 000'), ''],
        [m('8 cm² · 625 000 000 = 5 × 10⁹ cm²'), ''],
        [m('= 500 000 m² = 50 ha'), m('10 000 cm² = 1 m²') + '.']
      ],
      ans: m('50 ha')
    }
  ],
  modelNote: 'Change the dimensions and watch the area — then convert the readout to another unit by hand.',
  interactive: { type: 'areaModel', title: 'Dimensions and area' },
  quiz: [
    { q: m('1 m²') + ' equals:', a: [m('100 cm²'), m('1000 cm²'), m('10 000 cm²'), m('100 000 cm²')], c: 2, why: m('100 · 100') + '.' },
    { q: m('1 ha') + ' equals:', a: [m('100 m²'), m('1000 m²'), m('10 000 m²'), m('1 km²')], c: 2, why: 'A square of side ' + m('100 m') + '.' },
    { q: m('3 cm²') + ' equals:', a: [m('30 mm²'), m('300 mm²'), m('3000 mm²'), m('0.3 mm²')], c: 1, why: m('1 cm² = 100 mm²') + '.' },
    { q: 'If all lengths are tripled, areas are multiplied by:', a: [m('3'), m('6'), m('9'), m('27')], c: 2, why: m('3²') + '.' },
    { q: m('2.5 km²') + ' in hectares is:', a: [m('25'), m('250'), m('2500'), m('25 000')], c: 1, why: m('1 km² = 100 ha') + '.' }
  ],
  practice: {
    easy: [
      [m('Convert 2 m² to cm².'), m('20 000 cm²')],
      [m('Convert 50 000 cm² to m².'), m('5 m²')],
      [m('Convert 4 cm² to mm².'), m('400 mm²')],
      [m('Convert 3 ha to m².'), m('30 000 m²')],
      [m('Convert 2 km² to m².'), m('2 000 000 m²')],
      [m('Convert 6000 mm² to cm².'), m('60 cm²')],
      [m('Convert 70 000 m² to hectares.'), m('7 ha')]
    ],
    med: [
      [m('Convert 0.75 m² to cm².'), m('7500 cm²')],
      [m('Convert 1.2 km² to hectares.'), m('120 ha')],
      [m('A room is 450 cm by 320 cm. Find its area in m².'), m('14.4 m²')],
      [m('A field is 250 m by 400 m. Find its area in hectares.'), m('10 ha')],
      [m('If lengths are halved, what happens to areas?'), 'They become a quarter.'],
      [m('Convert 85 000 cm² to m².'), m('8.5 m²')],
      [m('A rectangle is 1.5 km by 800 m. Find its area in km².'), m('1.2 km²')]
    ],
    hard: [
      [m('On a 1 : 10 000 map a park covers 12 cm². Find its real area in hectares.'), m('12 · 10 000² = 1.2 × 10⁹ cm² = 120 000 m² = 12 ha')],
      [m('A photograph is enlarged so that lengths are 4 times bigger. Its original area was 60 cm². Find the new area.'), m('960 cm²')],
      [m('A district of 45 km² is shown on a 1 : 50 000 map. Find its area on the map, in cm².'), m('45 × 10¹⁰ cm² ÷ 2.5 × 10⁹ = 180 cm²')],
      [m('A farm of 3.6 ha is a rectangle 240 m long. Find its width.'), m('150 m')],
      [m('A tile is 25 cm square. How many are needed for a floor of 18 m²?'), m('288')],
      [m('Two similar rectangles have sides in the ratio 2 : 5. The smaller has area 12 cm². Find the larger.'), m('75 cm²')],
      [m('Explain why the area conversion factor is the square of the length factor.'), 'Area is a product of two lengths; multiplying each of them by ' + m('k') + ' multiplies the product by ' + m('k²') + '.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Geometry 8, Тема 60, pp. 144–146. Write the conversion factor before converting.',
  homework: [
    m('Convert 6.5 m² to cm² and 120 000 cm² to m².'),
    m('Convert 4.8 km² to hectares.'),
    m('A room is 520 cm by 380 cm. Find its area in m².'),
    m('A field 300 m by 500 m — find its area in hectares and in km².'),
    m('On a 1 : 20 000 map a lake covers 5 cm². Find its real area in hectares.')
  ]
});

G8_GEO.push({
  id: 'geo-44', stream: 'geo', grade: 8, quarter: 4, lessons: '60', hours: 1,
  title: 'Chapter revision · The circle',
  subtitle: 'Every rule of the chapter on one page, and the strategy for choosing between them.',
  uz: 'Geometry 8, Chapter revision', uzPage: 'Темы 55–60, pp. 128–148',
  cam: 'Stage 9 · 7.1–7.3', camPage: 'Learner’s Book pp. 142–162', wb: 'Workbook 7.1–7.3',
  objectives: [
    'Recall every circle rule from Quarter IV.',
    'Choose the right rule from the position of the vertex.',
    'Combine the chord property with Pythagoras.',
    'Work multi-step circle problems.'
  ],
  terms: [
    ['Tangent', 'Urinma', 'Касательная'],
    ['Secant', 'Kesuvchi', 'Секущая'],
    ['Chord', 'Vatar', 'Хорда'],
    ['Central angle', 'Markaziy burchak', 'Центральный угол'],
    ['Inscribed angle', 'Ichki chizilgan burchak', 'Вписанный угол'],
    ['Cyclic quadrilateral', 'Ichki chizilgan to‘rtburchak', 'Вписанный четырёхугольник'],
    ['Arc', 'Yoy', 'Дуга'],
    ['Sector', 'Sektor', 'Сектор'],
    ['Revision', 'Takrorlash', 'Повторение']
  ],
  timing: [[5, 'Name every rule from memory'], [15, 'The summary table'], [15, 'Mixed problems'], [5, 'What to check tomorrow']],
  sections: [
    {
      h: 'Everything on one page',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Comparison</th><th>The line is</th><th>Common points</th></tr></thead>
      <tbody>
        <tr><td class="m">d &gt; r</td><td>outside — it misses</td><td class="m">0</td></tr>
        <tr><td class="m">d = r</td><td>a tangent</td><td class="m">1</td></tr>
        <tr><td class="m">d &lt; r</td><td>a secant</td><td class="m">2</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The rules, in order of use</div>
      <ol style="margin:0">
        <li><b>Tangent ⟂ radius</b> at the point of tangency — every tangent problem has a right triangle.</li>
        <li><b>Two tangents from a point are equal</b>, and the line to the centre bisects the angle.</li>
        <li><b>The perpendicular from the centre bisects a chord</b>: ${m('r² = d² + (a/2)²')}.</li>
        <li><b>Central angle = arc</b>; <b>inscribed angle = ½ arc</b>.</li>
        <li><b>Angle in a semicircle = ${m('90°')}</b>; angles on the same arc are equal.</li>
        <li><b>Cyclic quadrilateral</b>: opposite angles add to ${m('180°')}.</li>
        <li>Vertex <b>inside</b>: half the sum of the arcs. Vertex <b>outside</b>: half the difference.</li>
        <li><b>Tangent–chord angle</b> = half the intercepted arc.</li>
        <li>${m('C = 2πr')}, ${m('S = πr²')}, arc ${m('= ' + f('α', '360°') + ' · 2πr')}, sector ${m('= ' + f('α', '360°') + ' · πr²')}.</li>
      </ol></div>`
    },
    {
      h: 'How to choose',
      html: `<p>Every angle question in this chapter is answered by asking one thing first:</p>
      ${eq('<b>Where is the vertex?</b>', true)}
      <p>At the centre → the arc. On the circle → half the arc. Inside → half the sum. Outside → half the
      difference. That question alone chooses the rule in four cases out of five.</p>
      <p>Every length question is answered by a different single question: <b>where is the right
      triangle?</b> It is at the point of tangency, or under the perpendicular from the centre to a
      chord. Draw it in, and Pythagoras finishes the job.</p>
      <div class="warn"><span class="wl">Two checks before you write the answer</span>
      An angle in a circle problem is almost never more than ${m('180°')}, and a chord is never longer
      than the diameter. Both catch a great many slips.</div>`
    }
  ],
  examples: [
    {
      q: 'A chord of ' + m('12 cm') + ' is drawn in a circle of radius ' + m('10 cm') + '. Find its distance from the centre and the central angle it subtends.',
      steps: [
        [m('r² = d² + 6²'), 'The perpendicular bisects the chord.'],
        [m('d = ' + sr('100 − 36') + ' = 8 cm'), ''],
        [m('sin(α/2) = ' + f('6', '10') + ' = 0.6'), 'In the right triangle.'],
        [m('α/2 ≈ 36.9°, α ≈ 73.7°'), '']
      ],
      ans: m('d = 8 cm') + ', ' + m('α ≈ 74°')
    },
    {
      q: 'From an external point ' + m('P') + ', a tangent of length ' + m('8') + ' touches a circle of radius ' + m('6') + '. Find ' + m('OP') + ' and ' + m('∠OPT') + '.',
      steps: [
        [m('OP² = 64 + 36 = 100'), 'Tangent ⟂ radius.'],
        [m('OP = 10'), ''],
        [m('sin ∠OPT = ' + f('6', '10') + ' = 0.6'), ''],
        [m('∠OPT ≈ 36.9°'), '']
      ],
      ans: m('OP = 10') + ', ' + m('∠OPT ≈ 37°')
    }
  ],
  modelNote: 'Use the model to re-check each rule of the chapter before tomorrow’s paper.',
  interactive: { type: 'circleAngles', title: 'All the circle angles' },
  quiz: [
    { q: 'A tangent meets the radius at:', a: [m('45°'), m('90°'), m('60°'), 'any angle'], c: 1, why: 'Rule 1.' },
    { q: 'An inscribed angle on a ' + m('140°') + ' arc is:', a: [m('140°'), m('70°'), m('280°'), m('40°')], c: 1, why: 'Half the arc.' },
    { q: m('r = 13') + ', chord ' + m('10') + '. Its distance from the centre is:', a: [m('5'), m('12'), m('8'), m('6')], c: 1, why: m(sr('169 − 25') + ' = 12') + '.' },
    { q: 'Vertex outside the circle means:', a: ['half the sum', 'half the difference', 'the arc itself', 'half the arc'], c: 1, why: 'Rule 7.' },
    { q: 'In a cyclic quadrilateral ' + m('∠A + ∠C') + ' equals:', a: [m('90°'), m('180°'), m('360°'), 'it varies'], c: 1, why: 'Rule 6.' }
  ],
  practice: {
    easy: [
      [m('r = 10, d = 6. Find the chord.'), m('16')],
      [m('OP = 13, r = 5. Find the tangent length.'), m('12')],
      [m('A central angle is 100°. Find the inscribed angle on the same arc.'), m('50°')],
      [m('AB is a diameter, C on the circle. Find ∠ACB.'), m('90°')],
      [m('In a cyclic quadrilateral ∠B = 72°. Find ∠D.'), m('108°')],
      [m('Find the area of a circle of radius 7 (in terms of π).'), m('49π')],
      [m('Two chords meet inside, arcs 50° and 70°. Find the angle.'), m('60°')]
    ],
    med: [
      [m('r = 17, chord 16. Find d.'), m('15')],
      [m('A tangent from P is 20 and r = 15. Find OP.'), m('25')],
      [m('Two secants meet outside, arcs 120° and 40°. Find the angle.'), m('40°')],
      [m('A tangent–chord angle cuts off a 96° arc. Find it.'), m('48°')],
      [m('Find the arc length of a 135° arc in a circle of radius 8.'), m('6π')],
      [m('AB is a diameter and ∠ABC = 25°. Find ∠BAC and arc AC.'), m('65°') + ', arc ' + m('50°')],
      [m('r = 25, chord 30. Find d and the sector area of the corresponding minor sector.'), m('d = 20') + '; ' + m('sin(α/2) = 0.6, α ≈ 73.7°') + ', sector ' + m('≈ 402')]
    ],
    hard: [
      [m('Two parallel chords of a circle of radius 25 are 14 and 40 long. Find the two possible distances between them.'), m('24 + 15 = 39') + ' or ' + m('24 − 15 = 9')],
      [m('Two tangents from P touch a circle of radius 7 with ∠APB = 60°. Find OP, PA and the area of the kite OAPB.'), m('OP = 14') + ', ' + m('PA = 7' + sr('3')) + ', area ' + m('49' + sr('3') + ' ≈ 84.9')],
      [m('A chord subtends a central angle of 120° in a circle of radius 10. Find its length, its distance from the centre, and the area of the minor segment.'), 'chord ' + m('10' + sr('3')) + ', ' + m('d = 5') + ', segment ' + m(f('100π', '3') + ' − 25' + sr('3') + ' ≈ 61.4')],
      [m('AB is a diameter of a circle of radius 13, and C is on the circle with AC = 10. Find BC and the area of triangle ABC.'), m('BC = 24') + ', area ' + m('120')],
      [m('A circle passes through (0;0), (6;0) and (0;8). Find its centre and radius.'), 'centre ' + m('(3; 4)') + ', ' + m('r = 5') + ' — the angle at the origin is right, so the hypotenuse is a diameter'],
      [m('Two circles of radius 10 intersect, with their centres 16 apart. Find the length of the common chord.'), m('12') + ' — ' + m(sr('100 − 64') + ' = 6') + ', doubled'],
      [m('Explain in one sentence why every tangent problem contains a right-angled triangle.'), 'The radius to the point of tangency is perpendicular to the tangent, so that radius, the tangent segment and the line to the centre always form a right triangle.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Revise for tomorrow’s control work. Learn the nine rules; work the mixed problems.',
  homework: [
    'Write out the nine rules of the chapter from memory, then check them against the list.',
    m('r = 20, chord 24. Find d.'),
    m('A tangent from P is 24 and r = 10. Find OP.'),
    m('Two chords meet inside, arcs 88° and 52°. Find the angle.'),
    m('AB is a diameter of a circle of radius 15 and AC = 18. Find BC.')
  ]
});

G8_GEO.push({
  id: 'geo-45', stream: 'geo', grade: 8, quarter: 4, lessons: '61', hours: 1,
  title: 'Control work 4 · The circle',
  subtitle: 'The Quarter IV assessment, and the four errors it produces every year.',
  uz: 'Geometry 8, Темы 61–62', uzPage: 'Темы 61–62, pp. 149–151',
  cam: 'Stage 9 · 7.1–7.3', camPage: 'Learner’s Book pp. 142–162', wb: 'Workbook 7.1–7.3',
  objectives: [
    'Assess the circle chapter: tangents, chords, arcs and angles.',
    'Diagnose each lost mark by error type.',
    'Re-solve every task that was lost.'
  ],
  timing: [[2, 'Setting up'], [36, 'The paper'], [2, 'Collect in']],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Work on mistakes', 'Xatolar ustida ishlash', 'Работа над ошибками'],
    ['Tangent', 'Urinma', 'Касательная'],
    ['Chord', 'Vatar', 'Хорда'],
    ['Inscribed angle', 'Ichki chizilgan burchak', 'Вписанный угол'],
    ['Arc', 'Yoy', 'Дуга'],
    ['Half-chord', 'Yarim vatar', 'Половина хорды'],
    ['Sector', 'Sektor', 'Сектор']
  ],
  sections: [
    {
      h: 'The paper (40 minutes)',
      html: `<p>Two variants of eight tasks. Tasks 1–5 are worth 1 mark, tasks 6–8 are worth 2:</p>
      <ul>
        <li>task 1 · classify a line from ${m('d')} and ${m('r')}</li>
        <li>task 2 · the tangent length from an external point</li>
        <li>task 3 · a chord from ${m('r')} and ${m('d')}</li>
        <li>task 4 · a central or inscribed angle</li>
        <li>task 5 · a cyclic quadrilateral</li>
        <li>task 6 · an angle from an internal or external vertex</li>
        <li>task 7 · an arc length or a sector area</li>
        <li>task 8 · a multi-step problem combining two rules</li>
      </ul>
      <p><b>Marking note:</b> in task 3 the half-chord must be doubled; a mark is lost if it is not.</p>`
    },
    {
      h: 'The four errors',
      html: `<div class="keybox"><div class="klabel">Work on mistakes</div>
      <ol style="margin:0">
        <li><b>The half-chord given as the chord</b> — an answer exactly half the right one.</li>
        <li><b>Inscribed and central angles confused</b> — a factor of two, in one direction or the other.</li>
        <li><b>Half the sum used where half the difference belongs</b> — the vertex was not located first.</li>
        <li><b>Arc length and sector area mixed up</b>, or the fraction ${m(f('α', '360°'))} forgotten
        entirely.</li>
      </ol></div>
      <p>Each pupil writes the error number beside every lost mark and re-solves that task in full.</p>`
    }
  ],
  examples: [
    {
      q: 'Find the error: in a circle of radius ' + m('10') + ', a chord ' + m('6') + ' from the centre has length ' + m('8'),
      steps: [
        [m(sr('100 − 36') + ' = 8'), 'That is the <b>half</b>-chord.'],
        ['The perpendicular from the centre bisects the chord.', 'So the full chord is twice as long.'],
        [m('a = 16'), '']
      ],
      ans: m('16')
    },
    {
      q: 'Find the error: an inscribed angle on a ' + m('80°') + ' arc is ' + m('160°'),
      steps: [
        ['The rule was applied upside down.', 'The <b>central</b> angle is twice the inscribed one.'],
        [m('inscribed = ' + f('1', '2') + ' · 80°'), ''],
        [m('= 40°'), 'And it can never exceed ' + m('180°') + ' anyway.']
      ],
      ans: m('40°')
    }
  ],
  modelNote: 'Show the wrong working, take a vote on the error type, then reveal.',
  interactive: {
    type: 'fractionCancel',
    title: 'Diagnose the error',
    hint: 'Which of the four errors is this? Decide, then reveal.',
    items: [
      {
        title: 'Error 1 — half-chord not doubled',
        start: '<b>Claimed:</b> <span class="m">r = 13</span>, <span class="m">d = 5</span>, so the chord is <span class="m">12</span>',
        steps: [
          ['<span class="m">' + sr('169 − 25') + ' = 12</span>', 'Correct — but this is only half of the chord.'],
          ['The perpendicular from the centre <b>bisects</b> the chord.', ''],
          ['<span class="m">a = 2 · 12</span>', '']
        ],
        answer: 'The chord is <span class="m">24</span>.'
      },
      {
        title: 'Error 2 — inscribed and central swapped',
        start: '<b>Claimed:</b> a central angle of <span class="m">50°</span> gives an inscribed angle of <span class="m">100°</span>',
        steps: [
          ['The inscribed angle is <b>half</b> the central one.', 'Never twice.'],
          ['<span class="m">' + f('1', '2') + ' · 50°</span>', ''],
          ['<span class="m">= 25°</span>', 'Check: it must be smaller than the central angle.']
        ],
        answer: '<span class="m">25°</span>'
      },
      {
        title: 'Error 3 — wrong rule for the vertex',
        start: '<b>Claimed:</b> two secants meet <b>outside</b>, cutting arcs of <span class="m">120°</span> and <span class="m">40°</span>, so the angle is <span class="m">80°</span>',
        steps: [
          ['<span class="m">' + f('120 + 40', '2') + ' = 80</span> is the <b>inside</b> rule.', 'Half the sum belongs to two chords.'],
          ['The vertex is outside — half the <b>difference</b>.', ''],
          ['<span class="m">' + f('120° − 40°', '2') + '</span>', '']
        ],
        answer: '<span class="m">40°</span>'
      },
      {
        title: 'Error 4 — arc and sector confused',
        start: '<b>Claimed:</b> a <span class="m">90°</span> sector of radius <span class="m">8</span> has area <span class="m">4π</span>',
        steps: [
          ['<span class="m">' + f('1', '4') + ' · 2π · 8 = 4π</span> is the <b>arc length</b>.', 'A length, not an area.'],
          ['Sector area is <span class="m">' + f('α', '360°') + ' · πr²</span>.', ''],
          ['<span class="m">' + f('1', '4') + ' · 64π</span>', '']
        ],
        answer: '<span class="m">16π</span>'
      }
    ]
  },
  quiz: [
    { q: m('r = 13') + ', ' + m('d = 5') + '. The chord is:', a: [m('12'), m('24'), m('8'), m('26')], c: 1, why: 'Double the half-chord.' },
    { q: 'A central angle of ' + m('50°') + ' gives an inscribed angle of:', a: [m('100°'), m('25°'), m('50°'), m('75°')], c: 1, why: 'Half.' },
    { q: 'Vertex outside, arcs ' + m('120°') + ' and ' + m('40°') + '. The angle is:', a: [m('80°'), m('40°'), m('160°'), m('60°')], c: 1, why: 'Half the difference.' },
    { q: 'A ' + m('90°') + ' sector of radius ' + m('8') + ' has area:', a: [m('4π'), m('16π'), m('64π'), m('8π')], c: 1, why: m(f('1', '4') + ' · 64π') + '.' }
  ],
  practice: {
    easy: [
      [m('<b>Variant 1, task 1.</b> r = 8, d = 11. Classify the line.'), 'It misses the circle.'],
      [m('<b>Task 2.</b> OP = 10, r = 8. Find the tangent length.'), m('6')],
      [m('<b>Task 3.</b> r = 10, d = 8. Find the chord.'), m('12')],
      [m('<b>Task 4.</b> A central angle is 120°. Find the inscribed angle.'), m('60°')],
      [m('<b>Task 5.</b> In a cyclic quadrilateral ∠A = 96°. Find ∠C.'), m('84°')],
      [m('<b>Task 6.</b> Two chords meet inside, arcs 70° and 50°. Find the angle.'), m('60°')],
      [m('<b>Task 7.</b> Find the arc length of a 90° arc, radius 6.'), m('3π')]
    ],
    med: [
      [m('<b>Variant 2, task 1.</b> r = 12, d = 12. Classify the line.'), 'A tangent.'],
      [m('<b>Task 2.</b> OP = 17, r = 15. Find the tangent length.'), m('8')],
      [m('<b>Task 3.</b> r = 25, d = 7. Find the chord.'), m('48')],
      [m('<b>Task 4.</b> An inscribed angle is 38°. Find the arc and the central angle.'), m('76°') + ' both'],
      [m('<b>Task 6.</b> Two secants meet outside, arcs 130° and 50°. Find the angle.'), m('40°')],
      [m('<b>Task 7.</b> Find the sector area of a 120° sector, radius 9.'), m('27π')],
      [m('<b>Task 8.</b> AB is a diameter of a circle of radius 10 and AC = 12. Find BC.'), m('16')]
    ],
    hard: [
      [m('A chord of 24 lies in a circle of radius 13. Find its distance from the centre and the central angle it subtends.'), m('d = 5') + '; ' + m('sin(α/2) = ' + f('12', '13')) + ', so ' + m('α ≈ 134.8°')],
      [m('Two tangents from P touch a circle of radius 8 with ∠APB = 90°. Find OP, PA and the area of OAPB.'), m('OP = 8' + sr('2')) + ', ' + m('PA = 8') + ', area ' + m('64')],
      [m('A 60° sector of radius 12 is cut out. Find its arc, its area, and the perimeter of the sector.'), 'arc ' + m('4π') + ', area ' + m('24π') + ', perimeter ' + m('4π + 24 ≈ 36.6')],
      [m('AB is a diameter of a circle of radius 17 and BC = 16. Find AC and the area of triangle ABC.'), m('AC = 30') + ', area ' + m('240')],
      [m('Two parallel chords of a circle of radius 10 are 12 and 16. Find both possible distances between them.'), m('8 + 6 = 14') + ' or ' + m('8 − 6 = 2')],
      [m('A tangent–chord angle is 40°. Find the two arcs the chord cuts off.'), m('80°') + ' and ' + m('280°')],
      [m('A circle of radius 10 has a chord subtending a 90° central angle. Find the area of the minor segment.'), m('25π − 50 ≈ 28.5')]
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Re-solve every task you lost marks on, with the error number written beside it.',
  homework: [
    'Re-solve, in full, each task you lost a mark on.',
    'Beside each, write the error number (1–4) that caused it.',
    m('r = 15, d = 9. Find the chord.'),
    m('Two secants meet outside, arcs 145° and 55°. Find the angle.'),
    m('Find the arc length and the sector area of a 60° sector of radius 12.')
  ]
});

G8_GEO.push({
  id: 'geo-46', stream: 'geo', grade: 8, quarter: 4, lessons: '62–63', hours: 2,
  title: 'Revision · Transformations',
  subtitle: 'Cambridge insert: reflection, rotation and translation — three ways to move a shape without changing it.',
  uz: 'Geometry 8 — revision', uzPage: 'Annual revision',
  cam: 'Stage 9 · 13.3', camPage: 'Learner’s Book pp. 297–306', wb: 'Workbook 13.3',
  objectives: [
    'Reflect a shape in a given mirror line.',
    'Rotate a shape about a given centre through a given angle.',
    'Translate a shape by a given vector.',
    'Describe a transformation fully, and combine two of them.'
  ],
  terms: [
    ['Transformation', 'Almashtirish', 'Преобразование'],
    ['Reflection', 'Simmetriya (aks ettirish)', 'Отражение (симметрия)'],
    ['Mirror line', 'Simmetriya o‘qi', 'Ось симметрии'],
    ['Rotation', 'Burish', 'Поворот'],
    ['Centre of rotation', 'Burilish markazi', 'Центр поворота'],
    ['Translation', 'Parallel ko‘chirish', 'Параллельный перенос'],
    ['Image', 'Tasvir', 'Образ'],
    ['Object', 'Asl figura', 'Прообраз'],
    ['Congruent', 'Teng (mos)', 'Равные (конгруэнтные)'],
    ['Invariant point', 'O‘zgarmas nuqta', 'Неподвижная точка']
  ],
  timing: [[6, 'Fold, turn and slide a paper triangle'], [12, 'Reflection'], [12, 'Rotation'], [6, 'Translation and combinations'], [4, 'Homework']],
  sections: [
    {
      h: 'The three isometries',
      html: `<p>All three of these move a shape without changing its size or its shape. The image is
      always <b>congruent</b> to the object — so they are called <b>isometries</b>.</p>
      {{fig:transformations:Reflection flips, rotation turns, translation slides — in every case the image is congruent to the object.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Transformation</th><th>Described fully by</th><th>Points that do not move</th></tr></thead>
      <tbody>
        <tr><td>Reflection</td><td>the mirror line</td><td>every point on the mirror line</td></tr>
        <tr><td>Rotation</td><td>centre, angle and direction</td><td>the centre only</td></tr>
        <tr><td>Translation</td><td>a vector</td><td>none</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">“Describe fully” is a mark scheme</span>
      “A rotation” earns nothing. “A rotation of ${m('90°')} clockwise about ${m('(0; 0)')}” earns full
      marks. Name the transformation and every piece of data it needs.</div>`
    },
    {
      h: 'Doing each one',
      html: `<p><b>Reflection.</b> Each point moves perpendicular to the mirror, to the same distance on
      the other side. In coordinates:</p>
      ${eq('in the ' + m('x') + '-axis: ' + m('(x; y) → (x; −y)') + '&nbsp;&nbsp;|&nbsp;&nbsp;in the ' + m('y') + '-axis: ' + m('(x; y) → (−x; y)'))}
      ${eq('in the line ' + m('y = x') + ': ' + m('(x; y) → (y; x)'))}
      <p><b>Rotation.</b> Every point turns through the same angle about the centre, staying the same
      distance from it. About the origin:</p>
      ${eq(m('90°') + ' anticlockwise: ' + m('(x; y) → (−y; x)') + '&nbsp;&nbsp;|&nbsp;&nbsp;' + m('180°') + ': ' + m('(x; y) → (−x; −y)'))}
      <p><b>Translation.</b> Every point moves by the same vector:</p>
      ${eq(m('(x; y) → (x + a; y + b)') + ' for the vector ' + m('(a; b)'), true)}
      <p>Two translations combine into one — just add the vectors. Two reflections in <b>parallel</b>
      mirrors give a translation; two reflections in <b>intersecting</b> mirrors give a rotation about
      the crossing point.</p>`
    }
  ],
  examples: [
    {
      q: 'Reflect ' + m('A(3; 2)') + ' in the ' + m('x') + '-axis, then in the ' + m('y') + '-axis. Describe the single transformation that has the same effect.',
      steps: [
        [m('(3; 2) → (3; −2)'), 'Reflection in the ' + m('x') + '-axis.'],
        [m('(3; −2) → (−3; −2)'), 'Reflection in the ' + m('y') + '-axis.'],
        [m('(3; 2) → (−3; −2)'), 'Both coordinates have changed sign.'],
        ['A rotation of ' + m('180°') + ' about the origin.', 'Two perpendicular mirrors give a half-turn about their crossing point.']
      ],
      ans: 'A rotation of ' + m('180°') + ' about ' + m('(0; 0)')
    },
    {
      q: 'Rotate ' + m('B(4; 1)') + ' through ' + m('90°') + ' anticlockwise about the origin, then translate by ' + m('(−2; 3)') + '.',
      steps: [
        [m('(4; 1) → (−1; 4)'), 'The rule ' + m('(x; y) → (−y; x)') + '.'],
        [m('(−1; 4) → (−3; 7)'), 'Add the translation vector.']
      ],
      ans: m('(−3; 7)')
    },
    {
      q: 'Describe fully the transformation taking ' + m('(2; 5)') + ' to ' + m('(5; 2)') + ' and ' + m('(1; 7)') + ' to ' + m('(7; 1)') + '.',
      steps: [
        ['In both cases the coordinates swap.', ''],
        [m('(x; y) → (y; x)'), 'That is the rule for one particular mirror.'],
        ['A reflection in the line ' + m('y = x') + '.', 'Check: the midpoint of each pair lies on ' + m('y = x') + ' ✓']
      ],
      ans: 'A reflection in ' + m('y = x')
    }
  ],
  modelNote: 'Choose a transformation and watch the shape move; compare object and image.',
  interactive: { type: 'transform', title: 'Reflect, rotate, translate' },
  quiz: [
    { q: 'Reflecting ' + m('(4; −3)') + ' in the ' + m('x') + '-axis gives:', a: [m('(−4; −3)'), m('(4; 3)'), m('(−4; 3)'), m('(−3; 4)')], c: 1, why: 'The ' + m('y') + '-coordinate changes sign.' },
    { q: 'A rotation of ' + m('180°') + ' about the origin takes ' + m('(2; 5)') + ' to:', a: [m('(−2; −5)'), m('(5; 2)'), m('(−5; 2)'), m('(2; −5)')], c: 0, why: 'Both signs change.' },
    { q: 'Translating ' + m('(1; 1)') + ' by ' + m('(3; −4)') + ' gives:', a: [m('(4; −3)'), m('(3; −4)'), m('(−2; 5)'), m('(4; 5)')], c: 0, why: 'Add the vector.' },
    { q: 'Which transformation has no invariant point?', a: ['reflection', 'rotation', 'translation', 'all have one'], c: 2, why: 'Everything moves by the same non-zero vector.' },
    { q: 'To describe a rotation fully you need:', a: ['the angle only', 'the centre only', 'centre, angle and direction', 'a vector'], c: 2, why: 'All three, or the image is not determined.' }
  ],
  practice: {
    easy: [
      [m('Reflect (5; 2) in the x-axis.'), m('(5; −2)')],
      [m('Reflect (5; 2) in the y-axis.'), m('(−5; 2)')],
      [m('Reflect (5; 2) in the line y = x.'), m('(2; 5)')],
      [m('Rotate (3; 0) through 180° about the origin.'), m('(−3; 0)')],
      [m('Translate (2; 3) by (4; 1).'), m('(6; 4)')],
      [m('Rotate (1; 0) through 90° anticlockwise about the origin.'), m('(0; 1)')],
      [m('Translate (−1; 5) by (2; −5).'), m('(1; 0)')]
    ],
    med: [
      [m('Rotate (4; 2) through 90° anticlockwise about the origin.'), m('(−2; 4)')],
      [m('Rotate (4; 2) through 90° clockwise about the origin.'), m('(2; −4)')],
      [m('Reflect (−3; 6) in the line y = x.'), m('(6; −3)')],
      [m('Describe fully the transformation taking (1; 2) to (1; −2).'), 'A reflection in the ' + m('x') + '-axis.'],
      [m('Describe fully the transformation taking (2; 3) to (7; 8).'), 'A translation by ' + m('(5; 5)') + '.'],
      [m('Reflect (2; 5) in the x-axis, then in the y-axis.'), m('(−2; −5)')],
      [m('Translate (0; 0) by (3; 4), then by (−1; 2).'), m('(2; 6)')]
    ],
    hard: [
      [m('Describe fully the single transformation equal to a reflection in the x-axis followed by a reflection in the y-axis.'), 'A rotation of ' + m('180°') + ' about the origin.'],
      [m('Rotate the triangle (0;0), (3;0), (0;2) through 90° anticlockwise about the origin.'), m('(0;0), (0;3), (−2;0)')],
      [m('Describe fully the transformation taking (1; 3) to (3; 1) and (4; 6) to (6; 4).'), 'A reflection in the line ' + m('y = x') + '.'],
      [m('A shape is translated by (3; 1) and then by (−3; −1). Describe the result.'), 'The identity — every point returns to where it started.'],
      [m('Rotate (5; 2) through 180° about the point (1; 1).'), m('(−3; 0)') + ' — the centre is the midpoint of object and image'],
      [m('Two parallel mirrors are 4 units apart. Describe the result of reflecting in one, then the other.'), 'A translation of ' + m('8') + ' units, perpendicular to the mirrors — twice the distance between them.'],
      [m('Explain why a reflection reverses orientation but a rotation does not.'), 'A rotation can be carried out by sliding the shape within the plane, so its sense (clockwise round the vertices) is preserved; a reflection requires flipping it over, which reverses that sense.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Cambridge Stage 9, Unit 13.3. Describe every transformation fully.',
  homework: [
    m('Reflect (6; −2) in the x-axis, the y-axis and the line y = x.'),
    m('Rotate (3; 5) through 90° anticlockwise about the origin.'),
    m('Translate (−2; 4) by (5; −6).'),
    m('Describe fully the transformation taking (2; 7) to (−2; 7).'),
    m('Rotate the triangle (0;0), (4;0), (0;3) through 180° about the origin.'),
    'In one sentence, say what all three isometries have in common.'
  ]
});

G8_GEO.push({
  id: 'geo-47', stream: 'geo', grade: 8, quarter: 4, lessons: '64', hours: 1,
  title: 'Revision · Enlargement',
  subtitle: 'Cambridge insert: the transformation that does change size — and the scale factor that measures it.',
  uz: 'Geometry 8 — revision', uzPage: 'Annual revision',
  cam: 'Stage 9 · 13.4', camPage: 'Learner’s Book pp. 307–314', wb: 'Workbook 13.4',
  objectives: [
    'Enlarge a shape from a given centre by a given scale factor.',
    'Find the centre and the scale factor of a given enlargement.',
    'Use the fact that lengths scale by ' + m('k') + ' and areas by ' + m('k²') + '.',
    'Work with fractional and negative scale factors.'
  ],
  terms: [
    ['Enlargement', 'O‘xshash almashtirish', 'Гомотетия (подобие)'],
    ['Scale factor', 'O‘xshashlik koeffitsienti', 'Коэффициент подобия'],
    ['Centre of enlargement', 'O‘xshashlik markazi', 'Центр гомотетии'],
    ['Similar figures', 'O‘xshash figuralar', 'Подобные фигуры'],
    ['Corresponding sides', 'Mos tomonlar', 'Соответственные стороны'],
    ['Ray from the centre', 'Markazdan nur', 'Луч из центра'],
    ['Fractional scale factor', 'Kasr koeffitsient', 'Дробный коэффициент'],
    ['Negative scale factor', 'Manfiy koeffitsient', 'Отрицательный коэффициент']
  ],
  timing: [[5, 'Enlarge a triangle from a point'], [14, 'Scale factor'], [12, 'Finding the centre'], [5, 'Areas'], [4, 'Homework']],
  sections: [
    {
      h: 'How an enlargement works',
      html: `<p>Choose a <b>centre</b> ${m('O')} and a <b>scale factor</b> ${m('k')}. Each point
      ${m('A')} moves along the ray ${m('OA')} to the point ${m('A′')} with ${m('OA′ = k · OA')}.</p>
      {{fig:enlargement:Rays from the centre through each vertex; the image sits k times as far along each ray.}}
      <p>The image is <b>similar</b> to the object: the same shape, all angles unchanged, every length
      multiplied by ${m('k')}. Only the centre stays where it is.</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">k</th><th>Effect</th></tr></thead>
      <tbody>
        <tr><td class="m">k &gt; 1</td><td>larger, same way up</td></tr>
        <tr><td class="m">0 &lt; k &lt; 1</td><td>smaller, same way up</td></tr>
        <tr><td class="m">k = 1</td><td>unchanged</td></tr>
        <tr><td class="m">k &lt; 0</td><td>on the other side of the centre, turned through ${m('180°')}</td></tr>
      </tbody></table></div>
      <p>From the origin the rule is simply ${m('(x; y) → (kx; ky)')}. From another centre
      ${m('(a; b)')}, measure from there: ${m('(x; y) → (a + k(x − a); b + k(y − b))')}.</p>`
    },
    {
      h: 'Finding it, and what happens to area',
      html: `<p>To find the <b>scale factor</b>: divide any image length by the matching object length.
      To find the <b>centre</b>: join each point to its image and extend — all the lines meet at the
      centre.</p>
      <div class="keybox"><div class="klabel">Length, area and volume</div>
      ${eq('lengths ×' + m('k') + ',&nbsp;&nbsp;areas ×' + m('k²') + ',&nbsp;&nbsp;volumes ×' + m('k³'), true)}</div>
      <p>An enlargement with ${m('k = 3')} makes a shape 3 times as wide and 3 times as tall, so
      <b>9 times</b> the area — the same squaring rule as the unit conversions of the last lesson.</p>
      <div class="warn"><span class="wl">Enlargement is not an isometry</span>
      Unless ${m('k = ±1')}, lengths change, so the image is <b>similar</b> to the object but not
      congruent. Angles, however, never change.</div>`
    }
  ],
  examples: [
    {
      q: 'Enlarge the triangle ' + m('(1; 1)') + ', ' + m('(3; 1)') + ', ' + m('(1; 4)') + ' by scale factor ' + m('2') + ' about the origin. Find the new area.',
      steps: [
        [m('(1; 1) → (2; 2)'), 'Double each coordinate.'],
        [m('(3; 1) → (6; 2)'), ''],
        [m('(1; 4) → (2; 8)'), ''],
        ['Original area: ' + m(f('1', '2') + ' · 2 · 3 = 3'), ''],
        ['New area: ' + m('3 · 2² = 12'), 'Areas scale by ' + m('k²') + '.']
      ],
      ans: m('(2;2), (6;2), (2;8)') + '; area ' + m('12')
    },
    {
      q: 'A shape is enlarged from ' + m('(1; 1)') + ' with ' + m('k = 3') + '. Find the image of ' + m('(4; 2)') + '.',
      steps: [
        [m('(4 − 1; 2 − 1) = (3; 1)'), 'The vector from the centre.'],
        [m('3 · (3; 1) = (9; 3)'), 'Multiply by the scale factor.'],
        [m('(1; 1) + (9; 3) = (10; 4)'), 'Measure back from the centre.']
      ],
      ans: m('(10; 4)')
    },
    {
      q: 'Two similar rectangles have corresponding sides ' + m('4 cm') + ' and ' + m('10 cm') + '. The smaller has area ' + m('20 cm²') + '. Find the larger.',
      steps: [
        [m('k = ' + f('10', '4') + ' = 2.5'), 'The scale factor.'],
        [m('k² = 6.25'), 'The area factor.'],
        [m('20 · 6.25 = 125 cm²'), '']
      ],
      ans: m('125 cm²')
    }
  ],
  modelNote: 'Change the scale factor and watch how far along each ray the image travels.',
  interactive: { type: 'transform', title: 'Enlargement from a centre' },
  quiz: [
    { q: 'Enlarging ' + m('(3; 4)') + ' from the origin by ' + m('k = 2') + ' gives:', a: [m('(5; 6)'), m('(6; 8)'), m('(1.5; 2)'), m('(6; 4)')], c: 1, why: 'Double both coordinates.' },
    { q: 'If ' + m('k = 4') + ', areas are multiplied by:', a: [m('4'), m('8'), m('16'), m('64')], c: 2, why: m('k²') + '.' },
    { q: 'An enlargement with ' + m('k = ' + f('1', '2')) + ' makes the image:', a: ['larger', 'smaller', 'the same size', 'upside down'], c: 1, why: m('0 < k < 1') + '.' },
    { q: 'Under an enlargement, angles:', a: ['double', 'halve', 'stay the same', 'depend on ' + m('k')], c: 2, why: 'The image is similar to the object.' },
    { q: 'To find the centre of an enlargement:', a: ['take the midpoint', 'join each point to its image and extend', 'use the origin', 'measure an angle'], c: 1, why: 'All such lines meet at the centre.' }
  ],
  practice: {
    easy: [
      [m('Enlarge (2; 3) from the origin by k = 3.'), m('(6; 9)')],
      [m('Enlarge (4; 8) from the origin by k = 0.5.'), m('(2; 4)')],
      [m('If k = 3, by what factor does area grow?'), m('9')],
      [m('If k = 5, by what factor does volume grow?'), m('125')],
      [m('Enlarge (1; −2) from the origin by k = 4.'), m('(4; −8)')],
      [m('Two similar shapes have sides 3 and 12. Find k.'), m('4')],
      [m('A shape of area 5 is enlarged by k = 2. Find the new area.'), m('20')]
    ],
    med: [
      [m('Enlarge (5; 3) from (1; 1) by k = 2.'), m('(9; 5)')],
      [m('Enlarge (7; 4) from (1; 2) by k = ' + f('1', '3') + '.'), m('(3; ' + f('8', '3') + ')')],
      [m('Two similar triangles have areas 9 and 25. Find the ratio of their sides.'), m('3 : 5')],
      [m('A rectangle 4 by 6 is enlarged by k = 2.5. Find its new area.'), m('24 · 6.25 = 150')],
      [m('Enlarge (2; 6) from the origin by k = −1.'), m('(−2; −6)')],
      [m('A photo of area 40 cm² is enlarged so its area is 250 cm². Find k.'), m('k = 2.5')],
      [m('Enlarge the triangle (0;0), (2;0), (0;2) by k = 3 from the origin, and find both areas.'), m('(0;0), (6;0), (0;6)') + '; ' + m('2') + ' and ' + m('18')]
    ],
    hard: [
      [m('A shape is enlarged from (2; 3) by k = 2, and (5; 7) maps to which point?'), m('(8; 11)')],
      [m('(1; 2) maps to (7; 14) under an enlargement centred at the origin. Find k.'), m('k = 7')],
      [m('(2; 3) maps to (8; 9) under an enlargement with k = 3. Find the centre.'), m('(−1; 0)')],
      [m('Two similar solids have volumes 27 and 216. Find the ratio of their surface areas.'), m('k = 2') + ', so surface areas are in the ratio ' + m('1 : 4')],
      [m('A map is redrawn at half the scale. What happens to the areas shown on it?'), 'They become a quarter of what they were.'],
      [m('A triangle of area 12 is enlarged so that its area is 108. Find k, and the new perimeter if the original was 18.'), m('k = 3') + ', new perimeter ' + m('54')],
      [m('Explain why an enlargement with a negative scale factor turns the shape through 180°.'), 'A negative ' + m('k') + ' sends each point to the opposite side of the centre along the same line, which is exactly a half-turn about the centre combined with an enlargement by ' + m('| k |') + '.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Cambridge Stage 9, Unit 13.4. State the centre and the scale factor every time.',
  homework: [
    m('Enlarge (3; 5) from the origin by k = 4.'),
    m('Enlarge (6; 2) from (2; 0) by k = 2.'),
    m('A shape of area 8 cm² is enlarged by k = 3. Find its new area.'),
    m('Two similar triangles have areas 16 and 81. Find the ratio of their sides.'),
    m('(3; 4) maps to (9; 12) under an enlargement centred at the origin. Find k.')
  ]
});

G8_GEO.push({
  id: 'geo-48', stream: 'geo', grade: 8, quarter: 4, lessons: '65', hours: 1,
  title: 'Revision · The volume of prisms and cylinders',
  subtitle: 'Cambridge insert: one formula for every prism — cross-section times length.',
  uz: 'Geometry 8 — revision', uzPage: 'Annual revision',
  cam: 'Stage 9 · 14.1', camPage: 'Learner’s Book pp. 318–326', wb: 'Workbook 14.1',
  objectives: [
    'Use ' + m('V = S<sub>base</sub> · h') + ' for any prism.',
    'Find the volume of a cylinder.',
    'Find a missing dimension from a given volume.',
    'Convert between units of volume and of capacity.'
  ],
  terms: [
    ['Prism', 'Prizma', 'Призма'],
    ['Cross-section', 'Ko‘ndalang kesim', 'Поперечное сечение'],
    ['Cuboid', 'To‘g‘ri burchakli parallelepiped', 'Прямоугольный параллелепипед'],
    ['Cylinder', 'Silindr', 'Цилиндр'],
    ['Volume', 'Hajm', 'Объём'],
    ['Capacity', 'Sig‘im', 'Вместимость'],
    ['Cubic metre', 'Kub metr', 'Кубический метр'],
    ['Litre', 'Litr', 'Литр'],
    ['Uniform cross-section', 'Bir xil kesim', 'Постоянное сечение']
  ],
  timing: [[5, 'What is a prism?'], [14, 'The prism formula'], [12, 'Cylinders'], [5, 'Units of volume'], [4, 'Homework']],
  sections: [
    {
      h: 'One formula for all prisms',
      html: `<p>A <b>prism</b> is a solid with the same cross-section all the way along its length. Slice
      it anywhere across, and you get the same shape.</p>
      {{fig:prismVolume:A prism is a cross-section repeated along a length: the volume is the area of that cross-section times the length.}}
      <div class="keybox"><div class="klabel">Volume of a prism</div>
      ${eq(m('V = S<sub>cross-section</sub> · h'), true)}
      A cylinder is a prism with a circular cross-section, so ${m('V = πr²h')}.</div>
      <div class="tablewrap"><table>
      <thead><tr><th>Solid</th><th>Cross-section</th><th class="m">V</th></tr></thead>
      <tbody>
        <tr><td>cuboid</td><td>rectangle</td><td class="m">abc</td></tr>
        <tr><td>cube</td><td>square</td><td class="m">a³</td></tr>
        <tr><td>triangular prism</td><td>triangle</td><td class="m">½ a h<sub>Δ</sub> · L</td></tr>
        <tr><td>cylinder</td><td>circle</td><td class="m">πr²h</td></tr>
      </tbody></table></div>
      <p>Learning one formula instead of four is the point of this lesson: find the area of the face that
      repeats, then multiply by how far it repeats.</p>`
    },
    {
      h: 'Units and capacity',
      html: `<p>Volumes scale by the <b>cube</b> of the length factor:</p>
      ${eq(m('1 m³ = 1 000 000 cm³') + '&nbsp;&nbsp;|&nbsp;&nbsp;' + m('1 cm³ = 1000 mm³'), true)}
      <p>Capacity uses litres, and the bridge between the two systems is worth memorising:</p>
      ${eq(m('1 litre = 1000 cm³') + '&nbsp;&nbsp;|&nbsp;&nbsp;' + m('1 m³ = 1000 litres'))}
      <div class="warn"><span class="wl">Mixed units</span>
      A tank ${m('80 cm')} by ${m('1.2 m')} by ${m('50 cm')} must be converted before multiplying.
      In metres: ${m('0.8 · 1.2 · 0.5 = 0.48 m³ = 480 litres')}.</div>`
    }
  ],
  examples: [
    {
      q: 'A triangular prism has a cross-section with base ' + m('6 cm') + ' and height ' + m('4 cm') + ', and is ' + m('15 cm') + ' long. Find its volume.',
      steps: [
        [m('S = ' + f('1', '2') + ' · 6 · 4 = 12 cm²'), 'The cross-section.'],
        [m('V = 12 · 15'), ''],
        [m('= 180 cm³'), '']
      ],
      ans: m('180 cm³')
    },
    {
      q: 'A cylindrical tank has radius ' + m('50 cm') + ' and height ' + m('1.2 m') + '. Find its capacity in litres.',
      steps: [
        [m('r = 0.5 m, h = 1.2 m'), 'Convert first.'],
        [m('V = π · 0.25 · 1.2'), ''],
        [m('= 0.3π ≈ 0.942 m³'), ''],
        [m('≈ 942 litres'), m('1 m³ = 1000 l') + '.']
      ],
      ans: m('≈ 942 litres')
    },
    {
      q: 'A cylinder has volume ' + m('500π cm³') + ' and height ' + m('20 cm') + '. Find its radius.',
      steps: [
        [m('500π = πr² · 20'), ''],
        [m('r² = 25'), 'Divide by ' + m('20π') + '.'],
        [m('r = 5 cm'), '']
      ],
      ans: m('5 cm')
    }
  ],
  modelNote: 'Change the cross-section and see how the volume follows it directly.',
  interactive: { type: 'areaModel', title: 'The cross-section of a prism' },
  quiz: [
    { q: 'A cuboid ' + m('3 × 4 × 5') + ' has volume:', a: [m('12'), m('60'), m('47'), m('20')], c: 1, why: m('3 · 4 · 5') + '.' },
    { q: 'A cylinder of radius ' + m('3') + ' and height ' + m('10') + ' has volume:', a: [m('30π'), m('90π'), m('60π'), m('300π')], c: 1, why: m('π · 9 · 10') + '.' },
    { q: m('1 m³') + ' equals:', a: [m('1000 cm³'), m('10 000 cm³'), m('100 000 cm³'), m('1 000 000 cm³')], c: 3, why: m('100³') + '.' },
    { q: m('1 litre') + ' equals:', a: [m('100 cm³'), m('1000 cm³'), m('10 cm³'), m('1 m³')], c: 1, why: 'A cube of side ' + m('10 cm') + '.' },
    { q: 'A prism has cross-section ' + m('15 cm²') + ' and length ' + m('8 cm') + '. Its volume is:', a: [m('23'), m('120'), m('60'), m('7.5')], c: 1, why: m('15 · 8') + '.' }
  ],
  practice: {
    easy: [
      [m('Find the volume of a cuboid 2 × 5 × 6.'), m('60')],
      [m('Find the volume of a cube of side 4.'), m('64')],
      [m('Find the volume of a cylinder with r = 2, h = 5 (in terms of π).'), m('20π')],
      [m('A prism has cross-section 12 cm² and length 9 cm. Find its volume.'), m('108 cm³')],
      [m('Convert 3 m³ to cm³.'), m('3 000 000 cm³')],
      [m('Convert 5000 cm³ to litres.'), m('5 l')],
      [m('Find the volume of a triangular prism: cross-section 10 cm², length 7 cm.'), m('70 cm³')]
    ],
    med: [
      [m('Find the volume of a triangular prism with base 8, triangle height 5, length 12.'), m('240')],
      [m('Find the volume of a cylinder with r = 7, h = 10 (π ≈ 3.14).'), m('≈ 1538.6')],
      [m('A cuboid has volume 240 and base 8 × 5. Find its height.'), m('6')],
      [m('A cylinder has volume 100π and radius 5. Find its height.'), m('4')],
      [m('A tank is 60 cm by 40 cm by 50 cm. Find its capacity in litres.'), m('120 l')],
      [m('Convert 0.75 m³ to litres.'), m('750 l')],
      [m('A cube has volume 125 cm³. Find its side and its surface area.'), m('5 cm') + ', ' + m('150 cm²')]
    ],
    hard: [
      [m('A cylinder has volume 1000π cm³ and height 40 cm. Find its radius and diameter.'), m('r = 5 cm') + ', ' + m('d = 10 cm')],
      [m('A swimming pool is 25 m by 10 m, 1.2 m deep at one end and 2 m at the other, sloping evenly. Find its volume.'), 'trapezium cross-section ' + m(f('1.2 + 2', '2') + ' · 25 = 40 m²') + ', so ' + m('V = 400 m³')],
      [m('A pipe has outer radius 5 cm, inner radius 4 cm and length 2 m. Find the volume of metal in it.'), m('π(25 − 16) · 200 = 1800π ≈ 5655 cm³')],
      [m('If all lengths of a prism are doubled, what happens to its volume?'), 'It becomes ' + m('8') + ' times as large.'],
      [m('A cylindrical tank of radius 40 cm is filled at 20 litres per minute. How long to fill 1 m of its height?'), m('V = π · 0.16 · 1 ≈ 0.503 m³ = 503 l') + ', so ' + m('≈ 25 minutes')],
      [m('Two similar cylinders have heights 6 and 9. The smaller has volume 48π. Find the larger.'), m('k = 1.5, k³ = 3.375') + ', so ' + m('162π')],
      [m('Explain why V = S · h works for every prism but not for a cone or a pyramid.'), 'A prism has the same cross-section at every height, so the volume is that one area repeated; a cone or pyramid tapers, its cross-section shrinking towards the apex, and its volume is only a third of the matching prism.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Cambridge Stage 9, Unit 14.1. Convert to one unit before multiplying.',
  homework: [
    m('Find the volume of a cuboid 4 × 7 × 9.'),
    m('Find the volume of a cylinder with r = 6 and h = 12 (in terms of π).'),
    m('A triangular prism has base 10, triangle height 6, length 15. Find its volume.'),
    m('A tank is 80 cm by 50 cm by 60 cm. Find its capacity in litres.'),
    m('A cylinder has volume 288π and radius 6. Find its height.')
  ]
});

G8_GEO.push({
  id: 'geo-49', stream: 'geo', grade: 8, quarter: 4, lessons: '66', hours: 1,
  title: 'Revision · Surface area',
  subtitle: 'Cambridge insert: unfold the solid into a net, and the surface area is just an area sum.',
  uz: 'Geometry 8 — revision', uzPage: 'Annual revision',
  cam: 'Stage 9 · 14.2', camPage: 'Learner’s Book pp. 327–334', wb: 'Workbook 14.2',
  objectives: [
    'Draw the net of a prism or a cylinder.',
    'Find the surface area of a cuboid, a prism and a cylinder.',
    'Distinguish curved surface area from total surface area.',
    'Solve practical problems of painting, wrapping and covering.'
  ],
  terms: [
    ['Surface area', 'Sirt yuzasi', 'Площадь поверхности'],
    ['Net', 'Yoyilma', 'Развёртка'],
    ['Face', 'Yoq', 'Грань'],
    ['Edge', 'Qirra', 'Ребро'],
    ['Curved surface', 'Yon sirt', 'Боковая поверхность'],
    ['Total surface area', 'To‘liq sirt yuzasi', 'Полная поверхность'],
    ['Base area', 'Asos yuzasi', 'Площадь основания'],
    ['Open-topped', 'Ustki qopqoqsiz', 'Без крышки']
  ],
  timing: [[5, 'Unfold a cardboard box'], [14, 'Nets and cuboids'], [12, 'Cylinders'], [5, 'Practical problems'], [4, 'Homework']],
  sections: [
    {
      h: 'Unfold it',
      html: `<p>Cut a solid open along its edges and lay it flat. The result is its <b>net</b>, and the
      surface area is simply the total area of the net — no new formula, just the areas you already
      know.</p>
      {{fig:surfaceNet:The net of a cylinder: two circles and one rectangle whose width is the circumference.}}
      <div class="keybox"><div class="klabel">The standard results</div>
      ${eq('cuboid: ' + m('S = 2(ab + bc + ac)') + '&nbsp;&nbsp;|&nbsp;&nbsp;cube: ' + m('S = 6a²'), true)}
      ${eq('cylinder: ' + m('S = 2πr² + 2πrh') + '&nbsp;&nbsp;(two circles plus the curved surface)', true)}
      </div>
      <p>The curved surface of a cylinder unrolls into a <b>rectangle</b>: its height is ${m('h')}, and
      its width is the circumference ${m('2πr')}. That is where ${m('2πrh')} comes from — worth deriving
      once rather than memorising.</p>
      <p>For any prism: ${m('S = 2 · S<sub>base</sub> + P<sub>base</sub> · h')} — two ends plus the band
      round the side.</p>`
    },
    {
      h: 'Reading the question',
      html: `<div class="warn"><span class="wl">Which faces are actually there?</span>
      An <b>open-topped</b> box has five faces, not six. A pipe has no ends at all — only the curved
      surface. A tin needs both ends; a label needs only the curved part. Count the faces the question
      really describes before writing any formula.</div>
      <p>Surface area is measured in square units even though the object is three-dimensional — it is,
      after all, the area of a flat net. Volume takes cubic units. Mixing the two is the commonest error
      in this topic.</p>`
    }
  ],
  examples: [
    {
      q: 'Find the surface area of a cuboid ' + m('4 cm') + ' by ' + m('5 cm') + ' by ' + m('6 cm') + '.',
      steps: [
        [m('4 · 5 = 20') + ', twice', 'The top and bottom.'],
        [m('5 · 6 = 30') + ', twice', 'Two sides.'],
        [m('4 · 6 = 24') + ', twice', 'The other two.'],
        [m('2(20 + 30 + 24) = 148 cm²'), '']
      ],
      ans: m('148 cm²')
    },
    {
      q: 'A cylinder has radius ' + m('5 cm') + ' and height ' + m('12 cm') + '. Find its curved surface area and its total surface area.',
      steps: [
        [m('curved = 2π · 5 · 12 = 120π'), 'The unrolled rectangle.'],
        [m('two circles = 2π · 25 = 50π'), ''],
        [m('total = 170π ≈ 534 cm²'), '']
      ],
      ans: 'Curved ' + m('120π') + ', total ' + m('170π ≈ 534 cm²')
    },
    {
      q: 'An open-topped box is ' + m('30 cm') + ' by ' + m('20 cm') + ' by ' + m('15 cm') + ' high. Find the area of card needed.',
      steps: [
        [m('base = 30 · 20 = 600'), 'One base only — no lid.'],
        [m('two sides = 2 · 30 · 15 = 900'), ''],
        [m('two ends = 2 · 20 · 15 = 600'), ''],
        [m('600 + 900 + 600 = 2100 cm²'), '']
      ],
      ans: m('2100 cm²')
    }
  ],
  modelNote: 'Change the dimensions and total the faces of the net as you go.',
  interactive: { type: 'areaModel', title: 'One face of the net' },
  quiz: [
    { q: 'A cube of side ' + m('5') + ' has surface area:', a: [m('25'), m('125'), m('150'), m('30')], c: 2, why: m('6 · 25') + '.' },
    { q: 'A cuboid ' + m('2 × 3 × 4') + ' has surface area:', a: [m('24'), m('52'), m('26'), m('48')], c: 1, why: m('2(6 + 12 + 8)') + '.' },
    { q: 'The curved surface of a cylinder is:', a: [m('πr²'), m('2πr'), m('2πrh'), m('πr²h')], c: 2, why: 'The unrolled rectangle: ' + m('2πr') + ' wide, ' + m('h') + ' tall.' },
    { q: 'An open-topped box has how many faces?', a: [m('4'), m('5'), m('6'), m('8')], c: 1, why: 'Six less the missing lid.' },
    { q: 'Surface area is measured in:', a: ['cubic units', 'square units', 'linear units', 'litres'], c: 1, why: 'It is the area of a flat net.' }
  ],
  practice: {
    easy: [
      [m('Find the surface area of a cube of side 3.'), m('54')],
      [m('Find the surface area of a cuboid 2 × 4 × 5.'), m('76')],
      [m('Find the curved surface area of a cylinder with r = 2, h = 6 (in terms of π).'), m('24π')],
      [m('Find the total surface area of that cylinder.'), m('32π')],
      [m('A cube has surface area 96. Find its side.'), m('4')],
      [m('How many faces has a triangular prism?'), m('5')],
      [m('Find the surface area of a cuboid 1 × 1 × 10.'), m('42')]
    ],
    med: [
      [m('Find the surface area of a cuboid 6 × 8 × 10.'), m('376')],
      [m('Find the total surface area of a cylinder with r = 4, h = 9.'), m('104π ≈ 327')],
      [m('An open-topped box is 40 by 25 by 20. Find the card needed.'), m('3600 cm²')],
      [m('A triangular prism has a 3–4–5 triangle cross-section and is 10 long. Find its surface area.'), m('2 · 6 + 12 · 10 = 132')],
      [m('A cylinder has curved surface area 60π and radius 5. Find its height.'), m('6')],
      [m('A cube has volume 216. Find its surface area.'), m('216')],
      [m('A label wraps the curved surface of a tin of radius 3.5 cm and height 10 cm. Find its area.'), m('70π ≈ 220 cm²')]
    ],
    hard: [
      [m('A cylinder has total surface area 100π and radius 5. Find its height.'), m('50π + 10πh = 100π') + ', so ' + m('h = 5')],
      [m('A room 5 m by 4 m by 3 m high is painted — walls and ceiling only. Find the area painted.'), m('54 + 20 = 74 m²')],
      [m('A cube is cut into eight identical smaller cubes. Compare the total surface area before and after.'), 'It doubles — each small cube has ' + m(f('1', '4')) + ' of the original face area but there are eight of them, so ' + m('8 · 6 · ' + f('a²', '4') + ' = 12a²') + ' against ' + m('6a²') + '.'],
      [m('A pipe of radius 6 cm and length 2 m is open at both ends. Find its outer curved surface area.'), m('2π · 6 · 200 = 2400π ≈ 7540 cm²')],
      [m('Two similar cylinders have radii 3 and 5. The smaller has surface area 90π. Find the larger.'), m('k = ' + f('5', '3') + ', k² = ' + f('25', '9')) + ', so ' + m('250π')],
      [m('A cuboid has volume 120 cm³ and a square base of side 4 cm. Find its surface area.'), m('h = 7.5') + ', ' + m('S = 32 + 120 = 152 cm²')],
      [m('Explain why doubling every length multiplies surface area by 4 but volume by 8.'), 'Surface area is a sum of products of two lengths, so it scales by ' + m('k²') + '; volume is a product of three, so it scales by ' + m('k³') + '.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Cambridge Stage 9, Unit 14.2. Sketch the net before totalling.',
  homework: [
    m('Find the surface area of a cuboid 5 × 7 × 9.'),
    m('Find the total surface area of a cylinder with r = 3 and h = 8.'),
    m('An open-topped box is 50 by 30 by 25. Find the card needed.'),
    m('A cube has surface area 150 cm². Find its side and its volume.'),
    m('A label wraps a tin of radius 4 cm and height 12 cm. Find its area.')
  ]
});

G8_GEO.push({
  id: 'geo-50', stream: 'geo', grade: 8, quarter: 4, lessons: '67', hours: 1,
  title: 'Revision · Symmetry in three dimensions',
  subtitle: 'Cambridge insert: planes of symmetry, axes of rotation, and the shapes that have them.',
  uz: 'Geometry 8 — revision', uzPage: 'Annual revision',
  cam: 'Stage 9 · 14.3 + Project 5', camPage: 'Learner’s Book pp. 335–342', wb: 'Workbook 14.3',
  objectives: [
    'Identify planes of symmetry in a solid.',
    'Identify axes of rotational symmetry and their order.',
    'Compare the symmetry of familiar solids.',
    'Use symmetry to solve a design problem (Project 5).'
  ],
  terms: [
    ['Plane of symmetry', 'Simmetriya tekisligi', 'Плоскость симметрии'],
    ['Axis of symmetry', 'Simmetriya o‘qi', 'Ось симметрии'],
    ['Rotational symmetry', 'Burilish simmetriyasi', 'Поворотная симметрия'],
    ['Order of symmetry', 'Simmetriya tartibi', 'Порядок симметрии'],
    ['Solid (3-D shape)', 'Jism', 'Тело (пространственная фигура)'],
    ['Cross-section', 'Kesim', 'Сечение'],
    ['Sphere', 'Sfera', 'Сфера'],
    ['Regular solid', 'Muntazam jism', 'Правильное тело']
  ],
  timing: [[5, 'Find the mirror planes of the classroom'], [14, 'Planes of symmetry'], [12, 'Axes of rotation'], [5, 'Project 5'], [4, 'Homework']],
  sections: [
    {
      h: 'Two kinds of symmetry in space',
      html: `<p>In the plane a shape has <b>lines</b> of symmetry. In space it has <b>planes</b> of
      symmetry: a flat cut that leaves each half a mirror image of the other.</p>
      {{fig:symmetry3D:A cuboid has three planes of symmetry, each cutting it exactly in half.}}
      <p>It may also have <b>axes of rotational symmetry</b>: a line about which the solid can be turned
      and still look the same. The <b>order</b> counts how many positions look identical in one full
      turn.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Solid</th><th>Planes of symmetry</th><th>Rotation axes</th></tr></thead>
      <tbody>
        <tr><td>cuboid (all edges different)</td><td class="m">3</td><td>3, each of order 2</td></tr>
        <tr><td>square-based prism</td><td class="m">5</td><td>1 of order 4, 4 of order 2</td></tr>
        <tr><td>cube</td><td class="m">9</td><td>3 of order 4, 4 of order 3, 6 of order 2</td></tr>
        <tr><td>cylinder</td><td>infinitely many</td><td>1 of infinite order</td></tr>
        <tr><td>sphere</td><td>infinitely many</td><td>infinitely many</td></tr>
      </tbody></table></div>
      <p>The pattern is clear: the more regular a solid, the more symmetry it has. The sphere, the most
      regular of all, is symmetric about every plane through its centre.</p>`
    },
    {
      h: 'Project 5 · Designing with symmetry',
      html: `<p><b>Task.</b> Design a container of capacity ${m('1 litre')} that has at least two planes
      of symmetry, and calculate the area of material it needs.</p>
      <ol>
        <li>Choose a shape — a cuboid, a square prism, a cylinder, a hexagonal prism.</li>
        <li>Fix the dimensions so that the volume is ${m('1000 cm³')}.</li>
        <li>Calculate the surface area.</li>
        <li>Count and describe every plane of symmetry.</li>
        <li>Compare with a neighbour: whose design uses least material?</li>
      </ol>
      <div class="keybox"><div class="klabel">The result worth discovering</div>
      Among all cuboids of a given volume, the <b>cube</b> uses least material; among all cylinders,
      the one with ${m('h = 2r')}. And of all shapes whatever, the sphere is the most economical — which
      is why bubbles are round.</div>`
    }
  ],
  examples: [
    {
      q: 'How many planes of symmetry has a cuboid with all three edges different?',
      steps: [
        ['One parallel to each pair of opposite faces.', 'Each cuts the solid exactly in half.'],
        ['Three pairs of faces.', ''],
        [m('3') + ' planes.', 'A diagonal cut does <b>not</b> work unless two edges are equal.']
      ],
      ans: m('3')
    },
    {
      q: 'A cylinder of capacity ' + m('1 litre') + ' has ' + m('h = 2r') + '. Find ' + m('r') + ' and its surface area.',
      steps: [
        [m('πr² · 2r = 1000'), m('1 l = 1000 cm³') + '.'],
        [m('2πr³ = 1000, r³ ≈ 159.2'), ''],
        [m('r ≈ 5.42 cm, h ≈ 10.84 cm'), ''],
        [m('S = 2πr² + 2πrh ≈ 184.5 + 369.1'), ''],
        [m('≈ 554 cm²'), '']
      ],
      ans: m('r ≈ 5.4 cm') + ', ' + m('S ≈ 554 cm²')
    }
  ],
  modelNote: 'Use the transformation model to check which reflections leave a shape looking unchanged.',
  interactive: { type: 'transform', title: 'Reflections that leave a shape unchanged' },
  quiz: [
    { q: 'A cuboid with all edges different has how many planes of symmetry?', a: [m('1'), m('3'), m('5'), m('9')], c: 1, why: 'One for each pair of opposite faces.' },
    { q: 'A cube has how many planes of symmetry?', a: [m('3'), m('6'), m('9'), m('12')], c: 2, why: '3 through opposite faces and 6 through opposite edges.' },
    { q: 'A sphere has:', a: ['one plane of symmetry', 'three', 'nine', 'infinitely many'], c: 3, why: 'Every plane through its centre.' },
    { q: 'A cylinder has an axis of rotational symmetry of order:', a: [m('2'), m('4'), 'infinite', 'none'], c: 2, why: 'Any angle of turn about its axis looks the same.' },
    { q: 'Of all cuboids of a given volume, least material is used by:', a: ['a long thin one', 'a flat one', 'the cube', 'they are all equal'], c: 2, why: 'The most symmetrical shape is the most economical.' }
  ],
  practice: {
    easy: [
      [m('How many planes of symmetry has a cube?'), m('9')],
      [m('How many planes of symmetry has a sphere?'), 'Infinitely many.'],
      [m('How many planes of symmetry has a cylinder?'), 'Infinitely many — every plane through its axis, plus the one across the middle.'],
      [m('Name a solid with exactly 3 planes of symmetry.'), 'A cuboid with all edges different.'],
      [m('What is the order of rotational symmetry of a square-based prism about its long axis?'), m('4')],
      [m('Has a cuboid an axis of rotational symmetry?'), 'Yes — three, each of order 2.'],
      [m('Find the volume of a cube of side 10 cm in litres.'), m('1 litre')]
    ],
    med: [
      [m('A square-based prism has how many planes of symmetry?'), m('5')],
      [m('A cuboid 4 × 4 × 6 — how many planes of symmetry?'), m('5')],
      [m('Design a cuboid of volume 1000 cm³ with 5 planes of symmetry, and find its surface area.'), m('10 × 10 × 10') + ' has 9 planes; ' + m('5 × 5 × 40') + ' has 5, with ' + m('S = 850 cm²')],
      [m('A cube of side 10 cm — find its surface area.'), m('600 cm²')],
      [m('A cylinder of radius 5 and height 12.7 has volume ≈ 1000 cm³. Find its surface area.'), m('≈ 157 + 399 = 556 cm²')],
      [m('Which uses less material for 1 litre: a 10 cm cube or a 5 × 5 × 40 cuboid?'), 'The cube — ' + m('600 cm²') + ' against ' + m('850 cm²') + '.'],
      [m('What is the order of rotational symmetry of a regular hexagonal prism about its axis?'), m('6')]
    ],
    hard: [
      [m('A cuboid has volume 1000 cm³ and a square base. Find the dimensions using least material.'), 'The cube ' + m('10 × 10 × 10') + ', ' + m('S = 600 cm²')],
      [m('Show that a cylinder of volume V uses least material when h = 2r.'), 'Testing ' + m('r = 4, 5.42, 7') + ' for ' + m('V = 1000') + ' gives ' + m('S ≈ 601, 554, 594') + ' — the minimum is at ' + m('h = 2r') + '.'],
      [m('A cube of side 6 is cut in half by a plane through two opposite edges. Is the cut a plane of symmetry?'), 'Yes — it is one of the six diagonal planes of the cube.'],
      [m('Compare the surface area of a sphere of radius 6.2 cm (≈ 1000 cm³) with the best cylinder and the best cube.'), 'Sphere ' + m('≈ 483 cm²') + ', cylinder ' + m('≈ 554') + ', cube ' + m('600') + ' — the sphere wins.'],
      [m('How many axes of rotational symmetry has a cube, and of what orders?'), m('13') + ' — 3 of order 4 (face to face), 4 of order 3 (corner to corner), 6 of order 2 (edge to edge).'],
      [m('A regular hexagonal prism — how many planes of symmetry?'), m('7') + ' — six through the axis, one across the middle.'],
      [m('Explain why bubbles are spherical.'), 'Surface tension pulls the film to the smallest possible surface area for the air enclosed, and of all shapes of a given volume the sphere has the least surface area.']
    ]
  },
  hwTitle: 'Homework — Project 5',
  hwNote: 'Cambridge Stage 9, Unit 14.3 and Project 5. Bring your design to the next lesson.',
  homework: [
    m('Design a container of capacity exactly 1 litre with at least two planes of symmetry.'),
    m('Calculate its surface area, showing your working.'),
    m('Describe and count every plane of symmetry it has.'),
    m('Calculate the surface area of a 10 cm cube and compare it with your design.'),
    'Write two sentences on which shape uses least material, and why.'
  ]
});

G8_GEO.push({
  id: 'geo-51', stream: 'geo', grade: 8, quarter: 4, lessons: '68', hours: 1,
  title: 'Annual review · Grade 8 geometry',
  subtitle: 'The whole year on one page — and what to carry into Grade 9.',
  uz: 'Geometry 8 — annual review', uzPage: 'Темы 1–62, whole course',
  cam: 'Stage 9 · units 3, 7, 13, 14', camPage: 'Learner’s Book, whole course', wb: 'Workbook, whole course',
  objectives: [
    'Recall the four chapters of the year and their key theorems.',
    'Choose the right tool for an unfamiliar problem.',
    'Identify personal weak topics from the year’s control works.',
    'Set the summer work that follows.'
  ],
  terms: [
    ['Annual review', 'Yillik takrorlash', 'Годовое повторение'],
    ['Quadrilateral', 'To‘rtburchak', 'Четырёхугольник'],
    ['Midline', 'O‘rta chiziq', 'Средняя линия'],
    ['Pythagoras’ theorem', 'Pifagor teoremasi', 'Теорема Пифагора'],
    ['Trigonometric ratio', 'Trigonometrik nisbat', 'Тригонометрическое отношение'],
    ['Vector', 'Vektor', 'Вектор'],
    ['Area', 'Yuza', 'Площадь'],
    ['Circle', 'Aylana', 'Окружность'],
    ['Similar figures', 'O‘xshash figuralar', 'Подобные фигуры']
  ],
  timing: [[5, 'What do you remember?'], [14, 'The four chapters'], [14, 'Mixed problems'], [7, 'The summer plan']],
  sections: [
    {
      h: 'The year in four chapters',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Quarter</th><th>Chapter</th><th>The key results</th></tr></thead>
      <tbody>
        <tr><td>I</td><td>Quadrilaterals</td><td>angle sum ${m('360°')}; the parallelogram tests; the midline theorem; Thales</td></tr>
        <tr><td>II</td><td>Right triangles</td><td>Pythagoras; ${m('sin, cos, tan')}; ${m('sin²α + cos²α = 1')}; solving a triangle</td></tr>
        <tr><td>III</td><td>Coordinates, vectors, area</td><td>distance and midpoint; ${m('AB = OB − OA')}; ${m('S = ah')}, ${m('S = ½ah')}, ${m('S = ½(a + b)h')}</td></tr>
        <tr><td>IV</td><td>The circle</td><td>tangent ⟂ radius; the chord property; inscribed angle ${m('= ½')} central</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The three questions that solve most problems</div>
      <ol style="margin:0">
        <li><b>Where is the right triangle?</b> — Pythagoras and trigonometry follow.</li>
        <li><b>Where is the vertex?</b> — in a circle question, that chooses the angle rule.</li>
        <li><b>What do I know, and what do I want?</b> — write both down before choosing a formula.</li>
      </ol></div>`
    },
    {
      h: 'The summer plan',
      html: `<p>Look back at your four control works. Two topics will appear more than once in your lost
      marks — those are your summer topics, and nothing else is.</p>
      <div class="warn"><span class="wl">What Grade 9 will assume you know cold</span>
      <ul style="margin:.4em 0 0">
        <li>Pythagoras, in both directions.</li>
        <li>The three trigonometric ratios, and which to choose.</li>
        <li>All the area formulas, without looking them up.</li>
        <li>The inscribed angle theorem and its corollaries.</li>
      </ul></div>
      <p>Twenty minutes a week on those four is enough. Nothing else about the summer matters
      mathematically.</p>`
    }
  ],
  examples: [
    {
      q: 'A rhombus has diagonals ' + m('16') + ' and ' + m('12') + '. Find its side, its area, its height and the angle between a side and the longer diagonal.',
      steps: [
        [m('half-diagonals 8 and 6'), 'The diagonals bisect each other at right angles.'],
        [m('a = ' + sr('64 + 36') + ' = 10'), 'Pythagoras — Quarter II.'],
        [m('S = ' + f('1', '2') + ' · 16 · 12 = 96'), 'Quarter III.'],
        [m('96 = 10h, h = 9.6'), ''],
        [m('tan α = ' + f('6', '8') + ' = 0.75, α ≈ 36.9°'), 'Trigonometry again.']
      ],
      ans: m('a = 10, S = 96, h = 9.6, α ≈ 37°')
    },
    {
      q: 'A chord of ' + m('24 cm') + ' lies in a circle of radius ' + m('13 cm') + '. Find its distance from the centre and the area of the triangle it makes with the centre.',
      steps: [
        [m('half-chord 12'), 'The perpendicular from the centre bisects it — Quarter IV.'],
        [m('d = ' + sr('169 − 144') + ' = 5 cm'), 'Pythagoras — Quarter II.'],
        [m('S = ' + f('1', '2') + ' · 24 · 5'), 'Area — Quarter III.'],
        [m('= 60 cm²'), 'Three chapters in one problem.']
      ],
      ans: m('d = 5 cm') + ', ' + m('S = 60 cm²')
    }
  ],
  modelNote: 'Revisit any model from the year — every one is still one click away from the lesson list.',
  interactive: { type: 'circleAngles', title: 'A last look at the circle' },
  quiz: [
    { q: 'The angle sum of a quadrilateral is:', a: [m('180°'), m('360°'), m('540°'), m('720°')], c: 1, why: 'Two triangles.' },
    { q: m('sin²α + cos²α') + ' equals:', a: [m('0'), m('1'), m('2'), m('α')], c: 1, why: 'Pythagoras, divided by the hypotenuse squared.' },
    { q: 'The area of a trapezium is:', a: [m('(a + b)h'), m(f('a + b', '2') + ' · h'), m('abh'), m(f('1', '2') + 'ah')], c: 1, why: 'The average of the parallel sides, times the height.' },
    { q: 'An inscribed angle on a ' + m('120°') + ' arc is:', a: [m('120°'), m('60°'), m('240°'), m('30°')], c: 1, why: 'Half the arc.' },
    { q: m('AB') + ' in position vectors is:', a: [m('OA + OB'), m('OB − OA'), m('OA − OB'), m('2OB')], c: 1, why: 'End minus start.' }
  ],
  practice: {
    easy: [
      [m('Find the angle sum of a hexagon.'), m('720°')],
      [m('A right triangle has legs 9 and 12. Find its hypotenuse.'), m('15')],
      [m('Find the area of a triangle with base 14 and height 6.'), m('42')],
      [m('r = 10, d = 6. Find the chord.'), m('16')],
      [m('Find the midpoint of (2; 4) and (10; 8).'), m('(6; 6)')],
      [m('A central angle is 80°. Find the inscribed angle.'), m('40°')],
      [m('Find the area of a circle of radius 5 (in terms of π).'), m('25π')]
    ],
    med: [
      [m('A parallelogram has sides 12 and 8 with an angle of 30°. Find its area.'), m('48')],
      [m('A trapezium has parallel sides 8 and 14 and height 9. Find its area.'), m('99')],
      [m('OA = (1; 4), OB = (7; 12). Find AB and |AB|.'), m('(6; 8)') + ', ' + m('10')],
      [m('A ladder 5 m long leans with its foot 3 m from the wall. How high does it reach?'), m('4 m')],
      [m('In a cyclic quadrilateral ∠A = 88°. Find ∠C.'), m('92°')],
      [m('A rhombus has diagonals 10 and 24. Find its side and its area.'), m('13') + ', ' + m('120')],
      [m('A tangent from P is 15 and r = 8. Find OP.'), m('17')]
    ],
    hard: [
      [m('An isosceles trapezium has parallel sides 12 and 20 and legs 5. Find its height, its area and its base angles.'), m('h = 3') + ', area ' + m('48') + ', base angle ' + m('≈ 36.9°')],
      [m('A chord of a circle of radius 15 subtends a central angle of 90°. Find its length and the area of the minor segment.'), 'chord ' + m('15' + sr('2') + ' ≈ 21.2') + ', segment ' + m(f('225π', '4') + ' − 112.5 ≈ 64.2')],
      [m('Show that (0;0), (6;0), (8;4), (2;4) is a parallelogram and find its area and its height.'), 'Diagonals share the midpoint ' + m('(4; 2)') + '; area ' + m('24') + ', height ' + m('4')],
      [m('A right triangle has hypotenuse 26 and one leg 10. Find the other leg, the area and the smaller acute angle.'), m('24') + ', area ' + m('120') + ', angle ' + m('≈ 22.6°')],
      [m('Two tangents from P touch a circle of radius 12 with ∠APB = 60°. Find OP and PA.'), m('OP = 24') + ', ' + m('PA = 12' + sr('3') + ' ≈ 20.8')],
      [m('A cylinder holds 1 litre with h = 2r. Find r, h and its surface area.'), m('r ≈ 5.4 cm, h ≈ 10.8 cm, S ≈ 554 cm²')],
      [m('Name, for each quarter of the year, the single theorem you would keep if you could keep only one, and say why.'), 'A personal answer — but strong candidates are the parallelogram bisection test, Pythagoras, the area formula ' + m('S = ' + f('1', '2') + 'ah') + ', and the inscribed angle theorem, because every other result in its chapter can be rebuilt from it.']
    ]
  },
  hwTitle: 'Summer work — 5 tasks',
  hwNote: 'Twenty minutes a week keeps Grade 9 easy.',
  homework: [
    'List the two topics that cost you most marks across the year’s four control works.',
    'Five problems a week from each of those two topics. No more.',
    m('Practise Pythagoras in both directions until it needs no thought.'),
    m('Learn every area formula of Quarter III by heart.'),
    m('Learn the inscribed angle theorem and its three corollaries.')
  ]
});
