/* Grade 8 · Geometry · Quarter I (18 hours)
   National backbone: Rahimkariev & Toxtaxodjaeva, "Geometry 8" (2019), Chapter I.
   Cambridge references: Lower Secondary Mathematics Stage 9. */
var G8_GEO_Q1 = [];

/* ============================== 1 ============================== */
G8_GEO_Q1.push({
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
G8_GEO_Q1.push({
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
G8_GEO_Q1.push({
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
      [m('The sum of two angles of a parallelogram is 180°. What can you say about them?'), 'They are neighbouring angles — opposite angles are equal, so their sum is ' + m('180°') + ' only when both are ' + m('90°') + '.']
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
G8_GEO_Q1.push({
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
      [m('P, Q, R, S are the midpoints of the sides of any quadrilateral. Prove PQRS is a parallelogram.'), 'Draw a diagonal: ' + m('PQ') + ' and ' + m('SR') + ' are both midlines parallel to it and half its length — Test 1.'],
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
G8_GEO_Q1.push({
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
G8_GEO_Q1.push({
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
      [m('Show that a rhombus and a square with the same side have the same perimeter but different areas.'), 'Both perimeters are ' + m('4a') + '; the area ' + m('a<sup>2</sup>sin θ') + ' is largest when ' + m('θ = 90°') + ', i.e. for the square.']
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
G8_GEO_Q1.push({
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
      [m('The bases of a trapezium are 7 cm and 15 cm and the legs are 5 cm and 5√5 cm. Find the height.'), 'Let the feet cut off ' + m('x') + ' and ' + m('8 − x') + ': ' + m('25 − x<sup>2</sup> = 125 − (8 − x)<sup>2</sup>') + ' gives ' + m('x = 3') + ' and ' + m('h = 4 cm') + '.'],
      [m('Prove that the diagonals of an isosceles trapezium are equal.'), m('△ABD ≅ △DCA') + ' by SAS: ' + m('AD') + ' common, ' + m('AB = DC') + ', ' + m('∠A = ∠D') + '.'],
      [m('An isosceles trapezium is circumscribed about a circle with bases 4 cm and 16 cm. Find its legs and perimeter.'), 'Tangency gives ' + m('a + b = 2 × leg') + ', so each leg is ' + m('10 cm') + ' and ' + m('P = 40 cm') + '.'],
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
G8_GEO_Q1.push({
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
G8_GEO_Q1.push({
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
G8_GEO_Q1.push({
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
      [m('In trapezium ABCD the midline is 14 and the segment joining the midpoints of the diagonals is 3. Find the bases.'), 'Midline ' + m('= ' + f('a + b', '2') + ' = 14') + ' and the diagonal midpoint segment ' + m('= ' + f('a − b', '2') + ' = 3') + ', so ' + m('a = 17, b = 11') + '.'],
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
G8_GEO_Q1.push({
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
      [m('Why can a 20° angle not be constructed with ruler and compasses?'), 'It would trisect ' + m('60°') + ', and angle trisection is impossible with these tools.'],
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
G8_GEO_Q1.push({
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
G8_GEO_Q1.push({
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
