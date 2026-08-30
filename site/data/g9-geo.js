/* Grade 9 · Geometry · 68 hours (18 / 14 / 20 / 16)
   National KTP 2025–2026, following Geometry 9 §§1–30.
   Cambridge layer: IGCSE Core & Extended, chapters 1–12. */
var G9_GEO = [];

/* ============================== 1 ============================== */
G9_GEO.push({
  id: 'g9-01', stream: 'geo', grade: 9, quarter: 1, lessons: '1–2', hours: 2,
  title: 'Revision of the Grade 8 course, and the entry diagnostic',
  subtitle: 'Pythagoras, the triangle criteria and the circle — the four facts the whole year is built on.',
  uz: 'Geometriya 9, Takrorlash', uzPage: 'pp. 3–8',
  cam: 'IGX 3, 11 audit', camPage: 'Core & Extended, pp. 40–72, 220–240', wb: 'Diagnostic paper G0',
  objectives: [
    'Recall the three congruence criteria and use them in a short proof.',
    'Use Pythagoras’ theorem and the trigonometric ratios in a right triangle.',
    'Recall the circle theorems of Grade 8 — the inscribed angle and the tangent.',
    'Identify personally weak areas before the similarity chapter begins.'
  ],
  terms: [
    ['Congruence', 'Tenglik', 'Равенство'],
    ['Criterion', 'Alomat', 'Признак'],
    ['Hypotenuse', 'Gipotenuza', 'Гипотенуза'],
    ['Inscribed angle', 'Ichki chizilgan burchak', 'Вписанный угол'],
    ['Central angle', 'Markaziy burchak', 'Центральный угол'],
    ['Tangent', 'Urinma', 'Касательная'],
    ['Median', 'Mediana', 'Медиана'],
    ['Diagnostic test', 'Tashxis testi', 'Диагностический тест']
  ],
  timing: [[15, 'Triangles'], [20, 'Right triangles'], [20, 'The circle'], [20, 'The diagnostic'], [5, 'Feedback']],
  sections: [
    {
      h: 'Triangles',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Criterion</th><th>Needs</th><th>Short name</th></tr></thead>
      <tbody>
        <tr><td>first</td><td>two sides and the angle between them</td><td>SAS</td></tr>
        <tr><td>second</td><td>a side and the two angles on it</td><td>ASA</td></tr>
        <tr><td>third</td><td>three sides</td><td>SSS</td></tr>
      </tbody></table></div>
      {{fig:congruence:Two triangles are congruent when three correctly chosen elements agree.}}
      <p>The angles of a triangle add to ${m('180°')}; an exterior angle equals the sum of the two
      opposite interior angles; the angles opposite equal sides are equal.</p>
      <div class="keybox"><div class="klabel">Congruent now, similar next</div>
      This year the criteria are repeated with one word changed: instead of equal sides, <b>proportional</b>
      sides. Everything about the structure of a proof stays the same, which is why the revision matters
      more than usual.</div>`
    },
    {
      h: 'Right triangles',
      html: `${eq(m('a² + b² = c²') + '     ' + m('sin A = ' + f('a', 'c')) + '     ' + m('cos A = ' + f('b', 'c')) + '     ' + m('tan A = ' + f('a', 'b')), true)}
      {{fig:trigRatios:Opposite, adjacent and hypotenuse — named from the angle you are working at.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Angle</th><th class="m">30°</th><th class="m">45°</th><th class="m">60°</th></tr></thead>
      <tbody>
        <tr><td class="m">sin</td><td class="m">${f('1', '2')}</td><td class="m">${f(sr('2'), '2')}</td><td class="m">${f(sr('3'), '2')}</td></tr>
        <tr><td class="m">cos</td><td class="m">${f(sr('3'), '2')}</td><td class="m">${f(sr('2'), '2')}</td><td class="m">${f('1', '2')}</td></tr>
        <tr><td class="m">tan</td><td class="m">${f(sr('3'), '3')}</td><td class="m">1</td><td class="m">${sr('3')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">These ratios are still only for a right triangle</span>
      Quarter II removes that restriction with the sine and cosine rules. Until then, every use of
      ${m('sin')}, ${m('cos')} or ${m('tan')} requires a right angle somewhere in the figure — and if
      there is none, the first step is to draw an altitude and make one.</div>`
    },
    {
      h: 'The circle',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Theorem</th><th>Statement</th></tr></thead>
      <tbody>
        <tr><td>inscribed angle</td><td>half the central angle on the same arc</td></tr>
        <tr><td>angle in a semicircle</td><td class="m">90°</td></tr>
        <tr><td>angles on the same arc</td><td>equal</td></tr>
        <tr><td>tangent and radius</td><td>perpendicular at the point of contact</td></tr>
        <tr><td>two tangents from a point</td><td>equal in length</td></tr>
      </tbody></table></div>
      {{fig:inscribedAngle:The inscribed angle is half the central angle standing on the same arc.}}
      <p>These five return in Quarter III, when the circle is combined with regular polygons, and in
      Quarter IV, when chords and secants give proportional segments.</p>`
    },
    {
      h: 'The diagnostic',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>Tests</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Find the third side of a right triangle with legs ${m('9')} and ${m('12')}</td><td class="m">3</td><td>Pythagoras</td></tr>
        <tr><td>2</td><td>Find ${m('x')} if ${m('sin 30° = ' + f('x', '10'))}</td><td class="m">3</td><td>ratios</td></tr>
        <tr><td>3</td><td>Two angles of a triangle are ${m('50°')} and ${m('70°')}: find the third</td><td class="m">2</td><td>angle sum</td></tr>
        <tr><td>4</td><td>A central angle is ${m('80°')}: find the inscribed angle on the same arc</td><td class="m">3</td><td>the circle</td></tr>
        <tr><td>5</td><td>Name the criterion that proves two triangles with three equal sides congruent</td><td class="m">2</td><td>criteria</td></tr>
        <tr><td>6</td><td>Find the area of a triangle with base ${m('12')} and height ${m('7')}</td><td class="m">2</td><td>area</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where Grade 9 geometry is going</div>
      Four chapters: similarity and transformations; trigonometry in any triangle; regular polygons and
      the circle; proportional segments. The first and the last are the same idea seen twice, and the
      middle two are what make geometry computational rather than only deductive.</div>`
    }
  ],
  examples: [
    {
      q: 'A right triangle has legs ' + m('9') + ' and ' + m('12') + '. Find the hypotenuse.',
      steps: [
        [m('c² = 9² + 12²'), ''],
        [m('= 81 + 144 = 225'), ''],
        [m('c = 15'), ''],
        ['A ' + m('3–4–5') + ' triangle, scaled by ' + m('3') + '.', 'Worth recognising.']
      ],
      ans: m('15')
    },
    {
      q: 'A central angle is ' + m('80°') + '. Find the inscribed angle on the same arc.',
      steps: [
        ['The inscribed angle is half the central angle.', ''],
        [m(f('80°', '2')), ''],
        [m('= 40°'), ''],
        ['Every inscribed angle on that arc is ' + m('40°') + '.', 'Not only one of them.']
      ],
      ans: m('40°')
    },
    {
      q: 'In a right triangle, ' + m('sin A = 0.6') + ' and the hypotenuse is ' + m('20') + '. Find the two legs.',
      steps: [
        ['Opposite ' + m('= 20 × 0.6 = 12') + '.', ''],
        [m('cos A = ' + sr('1 − 0.36') + ' = 0.8'), ''],
        ['Adjacent ' + m('= 20 × 0.8 = 16') + '.', ''],
        ['Check: ' + m('12² + 16² = 400 = 20²') + ' ✓', '']
      ],
      ans: m('12') + ' and ' + m('16')
    }
  ],
  modelNote: 'Draw one figure containing a right triangle, a circle and two congruent triangles, and ask the class to state every fact they can read from it; the diagnostic writes itself.',
  interactive: {
    type: 'pythagoras',
    title: 'The three sides',
    hint: 'Drag a vertex and watch the identity hold.'
  },
  quiz: [
    { q: 'Three equal sides prove congruence by:', a: ['SAS', 'ASA', 'SSS', 'none'], c: 2, why: 'The third criterion.' },
    { q: 'The angles of a triangle add to:', a: [m('90°'), m('180°'), m('270°'), m('360°')], c: 1, why: 'Always.' },
    { q: 'An inscribed angle is:', a: ['equal to the central angle', 'half of it', 'twice it', 'unrelated'], c: 1, why: 'On the same arc.' },
    { q: 'The angle in a semicircle is:', a: [m('45°'), m('60°'), m('90°'), m('180°')], c: 2, why: 'A diameter subtends a right angle.' },
    { q: 'A tangent meets the radius at:', a: [m('30°'), m('45°'), m('60°'), m('90°')], c: 3, why: 'At the point of contact.' },
    { q: m('sin 60°') + ' equals:', a: [m(f('1', '2')), m(f(sr('2'), '2')), m(f(sr('3'), '2')), m('1')], c: 2, why: 'The half-equilateral triangle.' }
  ],
  practice: {
    easy: [
      ['Legs ' + m('9') + ' and ' + m('12') + ': hypotenuse', m('15')],
      ['Legs ' + m('5') + ' and ' + m('12') + ': hypotenuse', m('13')],
      ['Angles ' + m('50°') + ' and ' + m('70°') + ': the third', m('60°')],
      ['Central angle ' + m('80°') + ': inscribed angle', m('40°')],
      [m('sin 30°'), m(f('1', '2'))],
      [m('tan 45°'), m('1')],
      ['Base ' + m('12') + ', height ' + m('7') + ': area', m('42')]
    ],
    med: [
      ['Hypotenuse ' + m('20') + ', ' + m('sin A = 0.6') + ': the legs', m('12') + ' and ' + m('16')],
      ['A ladder ' + m('5 m') + ' long, foot ' + m('3 m') + ' out: height reached', m('4 m')],
      ['An inscribed angle is ' + m('35°') + ': the central angle', m('70°')],
      ['An equilateral triangle of side ' + m('6') + ': its height', m('3' + sr('3'))],
      ['Its area', m('9' + sr('3'))],
      ['A square of diagonal ' + m('10') + ': its side', m('5' + sr('2'))],
      ['Two tangents from a point, one is ' + m('8') + ': the other', m('8')]
    ],
    hard: [
      ['A triangle ' + m('13, 14, 15') + ': its area', m('84')],
      ['Its height on the side ' + m('14'), m('12')],
      ['A chord ' + m('16') + ' in a circle of radius ' + m('10') + ': its distance from the centre', m('6')],
      ['An isosceles triangle with sides ' + m('13, 13, 10') + ': its area', m('60')],
      ['A rhombus with diagonals ' + m('16') + ' and ' + m('12') + ': its side', m('10')],
      ['Its area', m('96')],
      ['A right triangle with legs ' + m('a') + ' and ' + m('b') + ': the median to the hypotenuse', m(f(sr('a² + b²'), '2'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw a labelled figure for every task; an unlabelled figure is worth no marks.',
  homework: [
    'A right triangle has legs ' + m('7') + ' and ' + m('24') + '. Find the hypotenuse.',
    'An inscribed angle is ' + m('42°') + '. Find the central angle on the same arc.',
    'Find the area of an equilateral triangle of side ' + m('8') + '.',
    'A chord of length ' + m('12') + ' lies in a circle of radius ' + m('10') + '. Find its distance from the centre.',
    'State the three congruence criteria and draw a figure illustrating each.'
  ]
});

/* ============================== 2 ============================== */
G9_GEO.push({
  id: 'g9-02', stream: 'geo', grade: 9, quarter: 1, lessons: '3', hours: 1,
  title: 'Similarity of polygons',
  subtitle: 'Same shape, different size — and the two conditions that say so precisely.',
  uz: 'Geometriya 9, §1', uzPage: 'pp. 9–13',
  cam: 'IGX 11.3', camPage: 'Core & Extended, pp. 232–236', wb: 'Exercise 11.3',
  objectives: [
    'Define similar polygons by equal angles and proportional sides.',
    'Find and use the coefficient of similarity k.',
    'Show that both conditions are needed by a counter-example.',
    'Write a similarity statement with the vertices in matching order.'
  ],
  terms: [
    ['Similar', 'O‘xshash', 'Подобный'],
    ['Coefficient of similarity', 'O‘xshashlik koeffitsiyenti', 'Коэффициент подобия'],
    ['Corresponding sides', 'Mos tomonlar', 'Соответственные стороны'],
    ['Corresponding angles', 'Mos burchaklar', 'Соответственные углы'],
    ['Proportional', 'Proporsional', 'Пропорциональные'],
    ['Ratio', 'Nisbat', 'Отношение'],
    ['Scale factor', 'Masshtab koeffitsiyenti', 'Масштабный коэффициент'],
    ['Order of vertices', 'Uchlar tartibi', 'Порядок вершин']
  ],
  timing: [[10, 'The definition'], [12, 'The coefficient'], [12, 'Both conditions are needed'], [6, 'Homework']],
  sections: [
    {
      h: 'The definition',
      html: `<p>Two polygons are <b>similar</b> if</p>
      <ol>
        <li>their corresponding angles are equal, <b>and</b></li>
        <li>their corresponding sides are proportional.</li>
      </ol>
      ${eq(m('ABCD ∼ A₁B₁C₁D₁') + '  means  ' + m('∠A = ∠A₁, …') + '  and  ' + m(f('AB', 'A₁B₁') + ' = ' + f('BC', 'B₁C₁') + ' = … = k'), true)}
      {{fig:enlargement:The same shape at two sizes — every length multiplied by k, every angle unchanged.}}
      <div class="warn"><span class="wl">The order of the letters is part of the statement</span>
      ${m('ABCD ∼ A₁B₁C₁D₁')} says that ${m('A')} corresponds to ${m('A₁')}, ${m('B')} to ${m('B₁')},
      and so on. Writing ${m('ABCD ∼ B₁A₁C₁D₁')} claims something different, and usually something
      false.</div>`
    },
    {
      h: 'The coefficient',
      html: `<p>The common ratio ${m('k')} is the <b>coefficient of similarity</b>. It scales every length
      in the figure — sides, diagonals, heights, medians, the perimeter.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Quantity</th><th>Multiplied by</th></tr></thead>
      <tbody>
        <tr><td>any length</td><td class="m">k</td></tr>
        <tr><td>the perimeter</td><td class="m">k</td></tr>
        <tr><td>any angle</td><td class="m">1</td></tr>
        <tr><td>the area</td><td class="m">k²</td></tr>
      </tbody></table></div>
      <p>${m('k > 1')} means an enlargement, ${m('k < 1')} a reduction, and ${m('k = 1')} congruence —
      so congruent figures are similar with coefficient ${m('1')}.</p>
      <div class="keybox"><div class="klabel">Areas go as ${m('k²')}, and this is not obvious</div>
      Doubling every side multiplies the area by ${m('4')}, not by ${m('2')}. The full proof comes later
      in the chapter, but the fact is worth knowing from the first lesson — it is the single most-tested
      consequence of similarity.</div>`
    },
    {
      h: 'Both conditions are needed',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Pair</th><th>Angles equal?</th><th>Sides proportional?</th><th>Similar?</th></tr></thead>
      <tbody>
        <tr><td>a square and a rectangle ${m('2 × 4')}</td><td>yes</td><td>no</td><td>no</td></tr>
        <tr><td>a square and a rhombus of the same side</td><td>no</td><td>yes</td><td>no</td></tr>
        <tr><td>two squares</td><td>yes</td><td>yes</td><td>yes</td></tr>
        <tr><td>two circles</td><td>—</td><td>—</td><td>always</td></tr>
      </tbody></table></div>
      <p>The first two rows are the standard counter-examples, and they are worth drawing rather than
      merely reading: each condition on its own is genuinely insufficient.</p>
      <div class="keybox"><div class="klabel">Triangles are the exception</div>
      For <b>triangles</b> either condition alone forces the other, which is why the next four lessons
      are about triangles specifically. For every other polygon, both must be checked.</div>`
    }
  ],
  examples: [
    {
      q: 'Two similar quadrilaterals have sides ' + m('3, 4, 5, 6') + ' and ' + m('9, 12, 15, x') + '. Find ' + m('k') + ' and ' + m('x') + '.',
      steps: [
        [m('k = ' + f('9', '3') + ' = 3'), ''],
        ['Check: ' + m(f('12', '4') + ' = 3') + ', ' + m(f('15', '5') + ' = 3') + ' ✓', ''],
        [m('x = 6 × 3'), ''],
        [m('= 18'), '']
      ],
      ans: m('k = 3, x = 18')
    },
    {
      q: 'The perimeter of a polygon is ' + m('20') + '. A similar polygon has ' + m('k = 2.5') + '. Find its perimeter.',
      steps: [
        ['Every side is multiplied by ' + m('2.5') + '.', ''],
        ['So is their sum.', ''],
        [m('20 × 2.5'), ''],
        [m('= 50'), '']
      ],
      ans: m('50')
    },
    {
      q: 'Are a square of side ' + m('4') + ' and a rectangle ' + m('4 × 8') + ' similar?',
      steps: [
        ['All angles are ' + m('90°') + ' — the first condition holds.', ''],
        ['Sides: ' + m(f('4', '4') + ' = 1') + ' but ' + m(f('4', '8') + ' = 0.5') + '.', ''],
        ['Not proportional.', ''],
        ['No — the second condition fails.', 'Both are needed.']
      ],
      ans: 'No'
    }
  ],
  modelNote: 'Hold up a photograph and an enlargement of it; ask what changed and what did not, and the two conditions are stated by the class before they are written down.',
  interactive: {
    type: 'transform',
    title: 'Enlarging a polygon',
    hint: 'Change k and watch the angles stay put.'
  },
  quiz: [
    { q: 'Similar polygons have:', a: ['equal sides', 'proportional sides and equal angles', 'equal areas', 'the same perimeter'], c: 1, why: 'Both conditions.' },
    { q: m('k') + ' is the ratio of:', a: ['areas', 'angles', 'corresponding sides', 'perimeters only'], c: 2, why: 'And hence of all lengths.' },
    { q: 'Under similarity the angles are:', a: ['multiplied by ' + m('k'), 'unchanged', 'halved', 'squared'], c: 1, why: 'Shape is preserved.' },
    { q: 'The areas are in the ratio:', a: [m('k'), m('k²'), m('k³'), m('2k')], c: 1, why: 'Two dimensions.' },
    { q: m('k = 1') + ' means the figures are:', a: ['similar only', 'congruent', 'different', 'not similar'], c: 1, why: 'Every length equal.' },
    { q: 'A square and a rectangle ' + m('2 × 4') + ' are:', a: ['similar', 'not similar', 'congruent', 'equal in area'], c: 1, why: 'The sides are not proportional.' }
  ],
  practice: {
    easy: [
      ['Sides ' + m('3') + ' and ' + m('9') + ': ' + m('k'), m('3')],
      ['Sides ' + m('10') + ' and ' + m('4') + ': ' + m('k'), m('0.4')],
      ['Perimeter ' + m('20') + ', ' + m('k = 2.5') + ': new perimeter', m('50')],
      ['Angles under similarity', 'Unchanged'],
      ['Areas ratio for ' + m('k = 3'), m('9')],
      ['Are two squares similar?', 'Always'],
      ['Are two circles similar?', 'Always']
    ],
    med: [
      ['Sides ' + m('3,4,5,6') + ' and ' + m('9,12,15,x') + ': ' + m('x'), m('18')],
      ['Are a square and a ' + m('4 × 8') + ' rectangle similar?', 'No'],
      ['Are a square and a rhombus of the same side similar?', 'No'],
      ['Perimeters ' + m('12') + ' and ' + m('30') + ': ' + m('k'), m('2.5')],
      ['Areas ' + m('16') + ' and ' + m('144') + ': ' + m('k'), m('3')],
      ['A rectangle ' + m('3 × 5') + ' and one ' + m('6 × 10'), 'Similar, ' + m('k = 2')],
      ['A rectangle ' + m('3 × 5') + ' and one ' + m('6 × 9'), 'Not similar']
    ],
    hard: [
      ['Two similar polygons have areas ' + m('50') + ' and ' + m('98') + ': ' + m('k'), m(f('7', '5'))],
      ['Their perimeters are in the ratio', m('7 : 5')],
      ['A photograph ' + m('10 × 15') + ' enlarged to width ' + m('25') + ': its height', m('37.5')],
      ['For which ' + m('x') + ' are ' + m('2 × 6') + ' and ' + m('3 × x') + ' rectangles similar?', m('x = 9') + ' (or ' + m('x = 1') + ')'],
      ['A map scale ' + m('1 : 25000') + ': ' + m('4 cm') + ' on the map', m('1 km')],
      ['Area on the map ' + m('2 cm²') + ': the real area', m('0.125 km²')],
      ['Two similar figures: ' + m('k = ' + f('2', '3')) + '. The ratio of their areas', m('4 : 9')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write the similarity statement with the vertices in matching order every time.',
  homework: [
    'Two similar pentagons have sides ' + m('2,3,4,5,6') + ' and ' + m('5, x, 10, y, 15') + '. Find ' + m('k') + ', ' + m('x') + ' and ' + m('y') + '.',
    'Two similar polygons have perimeters ' + m('18') + ' and ' + m('45') + '. Find ' + m('k') + '.',
    'Their areas are in what ratio?',
    'Draw a counter-example showing that equal angles alone do not give similarity.',
    'A map has scale ' + m('1 : 50000') + '. Find the real distance for ' + m('6 cm') + ' on the map.'
  ]
});

/* ============================== 3 ============================== */
G9_GEO.push({
  id: 'g9-03', stream: 'geo', grade: 9, quarter: 1, lessons: '4', hours: 1,
  title: 'Similar triangles and their properties',
  subtitle: 'For triangles, one condition implies the other — which is what makes similarity a tool.',
  uz: 'Geometriya 9, §2', uzPage: 'pp. 14–18',
  cam: 'IGX 11.2', camPage: 'Core & Extended, pp. 226–231', wb: 'Exercise 11.2',
  objectives: [
    'State what similarity means for triangles and why one condition suffices.',
    'Use the ratio of corresponding sides to find an unknown length.',
    'Know that heights, medians and bisectors scale by k, and areas by k².',
    'Set up a proportion with corresponding sides in matching positions.'
  ],
  terms: [
    ['Similar triangles', 'O‘xshash uchburchaklar', 'Подобные треугольники'],
    ['Corresponding', 'Mos', 'Соответственный'],
    ['Proportion', 'Proporsiya', 'Пропорция'],
    ['Height', 'Balandlik', 'Высота'],
    ['Median', 'Mediana', 'Медиана'],
    ['Bisector', 'Bissektrisa', 'Биссектриса'],
    ['Ratio of areas', 'Yuzalar nisbati', 'Отношение площадей'],
    ['Cross-multiply', 'Krest usuli', 'Перекрёстное умножение']
  ],
  timing: [[10, 'Why one condition is enough'], [12, 'Setting up the proportion'], [12, 'What else scales'], [6, 'Homework']],
  sections: [
    {
      h: 'Why one condition is enough',
      html: `<p>For a general polygon, equal angles and proportional sides are independent conditions. For
      a <b>triangle</b> each forces the other.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>If</th><th>Then</th></tr></thead>
      <tbody>
        <tr><td>the angles are equal in pairs</td><td>the sides are automatically proportional</td></tr>
        <tr><td>the sides are proportional</td><td>the angles are automatically equal</td></tr>
      </tbody></table></div>
      {{fig:thales:A line parallel to one side cuts the other two proportionally — the source of triangle similarity.}}
      <p>The reason is that a triangle is rigid: three sides determine it completely, and two angles
      determine its shape. No other polygon has that property, which is why the next three lessons can
      state criteria that need only two or three facts.</p>`
    },
    {
      h: 'Setting up the proportion',
      html: `<p>If ${m('△ABC ∼ △A₁B₁C₁')} then</p>
      ${eq(m(f('AB', 'A₁B₁') + ' = ' + f('BC', 'B₁C₁') + ' = ' + f('CA', 'C₁A₁') + ' = k'), true)}
      <p>Corresponding sides are those <b>opposite equal angles</b>. Finding them correctly is the whole
      difficulty; the arithmetic afterwards is one cross-multiplication.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>What to do</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>mark the equal angles on both figures</td></tr>
        <tr><td>2</td><td>write the similarity with the vertices in matching order</td></tr>
        <tr><td>3</td><td>read the proportion straight off that statement</td></tr>
        <tr><td>4</td><td>cross-multiply and solve</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Mismatched sides give a plausible but wrong answer</span>
      Pairing the longest side of one triangle with the shortest of the other still produces a number.
      Step 1 above is the guard, and it is why marking the angles on the diagram is not optional.</div>`
    },
    {
      h: 'What else scales',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Element</th><th>Ratio</th></tr></thead>
      <tbody>
        <tr><td>corresponding sides</td><td class="m">k</td></tr>
        <tr><td>corresponding heights</td><td class="m">k</td></tr>
        <tr><td>corresponding medians</td><td class="m">k</td></tr>
        <tr><td>corresponding bisectors</td><td class="m">k</td></tr>
        <tr><td>perimeters</td><td class="m">k</td></tr>
        <tr><td>areas</td><td class="m">k²</td></tr>
      </tbody></table></div>
      <p>The area result follows at once: ${m('S = ' + f('1', '2') + 'ah')}, and both ${m('a')} and
      ${m('h')} are multiplied by ${m('k')}, so ${m('S')} is multiplied by ${m('k²')}.</p>
      <div class="keybox"><div class="klabel">Every <i>length</i> scales by ${m('k')} — no exceptions</div>
      Including ones that are not sides: the radius of the inscribed circle, the distance from a vertex
      to the centroid, the length of any cevian. If it is measured in centimetres, it is multiplied by
      ${m('k')}; if in square centimetres, by ${m('k²')}.</div>`
    }
  ],
  examples: [
    {
      q: m('△ABC ∼ △A₁B₁C₁') + ' with ' + m('AB = 6') + ', ' + m('A₁B₁ = 9') + ', ' + m('BC = 8') + '. Find ' + m('B₁C₁') + '.',
      steps: [
        [m('k = ' + f('9', '6') + ' = 1.5'), 'From the first pair.'],
        [m(f('BC', 'B₁C₁') + ' = ' + f('1', '1.5')), ''],
        [m('B₁C₁ = 8 × 1.5'), ''],
        [m('= 12'), '']
      ],
      ans: m('12')
    },
    {
      q: 'Two similar triangles have areas ' + m('18') + ' and ' + m('50') + '. Find the ratio of their perimeters.',
      steps: [
        [m('k² = ' + f('50', '18') + ' = ' + f('25', '9')), ''],
        [m('k = ' + f('5', '3')), 'Take the square root.'],
        ['Perimeters scale by ' + m('k') + '.', ''],
        [m('5 : 3'), '']
      ],
      ans: m('5 : 3')
    },
    {
      q: 'A triangle has a height of ' + m('12') + '. A similar triangle has sides ' + m(f('3', '4')) + ' as long. Find its height and the ratio of the areas.',
      steps: [
        [m('k = ' + f('3', '4')), ''],
        ['Height ' + m('= 12 × ' + f('3', '4') + ' = 9') + '.', 'A length.'],
        ['Areas: ' + m('k² = ' + f('9', '16')) + '.', ''],
        ['Height ' + m('9') + ', areas ' + m('9 : 16') + '.', '']
      ],
      ans: m('9') + '; areas ' + m('9 : 16')
    }
  ],
  modelNote: 'Draw two similar triangles in different orientations, one rotated; the class must match the angles before writing anything, and that is the whole skill.',
  interactive: {
    type: 'thales',
    title: 'A parallel line and two similar triangles',
    hint: 'Slide the parallel and watch the ratios stay equal.'
  },
  quiz: [
    { q: 'For triangles, equal angles imply:', a: ['nothing more', 'proportional sides', 'equal sides', 'equal areas'], c: 1, why: 'Triangles are rigid.' },
    { q: 'Corresponding sides are those:', a: ['of equal length', 'opposite equal angles', 'drawn first', 'the longest'], c: 1, why: 'That is the definition.' },
    { q: 'Corresponding medians are in the ratio:', a: [m('1'), m('k'), m('k²'), m('2k')], c: 1, why: 'They are lengths.' },
    { q: 'Areas are in the ratio:', a: [m('k'), m('k²'), m('k³'), m('2k')], c: 1, why: m('S = ½ah') + ', both scaled.' },
    { q: 'Areas ' + m('18') + ' and ' + m('50') + ' give ' + m('k') + ' =', a: [m(f('25', '9')), m(f('5', '3')), m(f('3', '5')), m(f('9', '25'))], c: 1, why: 'Take the square root.' },
    { q: 'The inscribed circle’s radius scales by:', a: [m('1'), m('k'), m('k²'), 'it does not scale'], c: 1, why: 'It is a length.' }
  ],
  practice: {
    easy: [
      [m('AB = 6, A₁B₁ = 9') + ': ' + m('k'), m('1.5')],
      ['Same, ' + m('BC = 8') + ': ' + m('B₁C₁'), m('12')],
      [m('k = 2') + ': ratio of areas', m('4')],
      [m('k = 3') + ': ratio of perimeters', m('3')],
      ['Height ' + m('12') + ', ' + m('k = ' + f('3', '4')) + ': new height', m('9')],
      ['Median ' + m('10') + ', ' + m('k = 0.6') + ': new median', m('6')],
      ['Areas ' + m('9 : 16') + ': ' + m('k'), m('3 : 4')]
    ],
    med: [
      ['Areas ' + m('18') + ' and ' + m('50') + ': ratio of perimeters', m('5 : 3')],
      ['Perimeters ' + m('15') + ' and ' + m('25') + ': ratio of areas', m('9 : 25')],
      ['Sides ' + m('3, 5, 7') + ' and ' + m('9, x, y'), m('x = 15, y = 21')],
      ['Areas ' + m('12') + ' and ' + m('27') + ': ' + m('k'), m(f('3', '2'))],
      ['A triangle of area ' + m('20') + ' scaled by ' + m('k = 2.5'), m('125')],
      ['Bisector ' + m('8') + ', ' + m('k = 1.25') + ': new bisector', m('10')],
      ['Inradius ' + m('4') + ', ' + m('k = 3') + ': new inradius', m('12')]
    ],
    hard: [
      ['Two similar triangles: areas differ by ' + m('56') + ', ' + m('k = 3') + '. The smaller area', m('7')],
      ['A triangle is cut by a midline: the ratio of the two areas', m('1 : 3')],
      ['Similar triangles with perimeters ' + m('24') + ' and ' + m('36') + ', smaller area ' + m('32') + ': the larger', m('72')],
      ['A model at ' + m('1 : 50') + ': the real area for ' + m('20 cm²'), m('50 000 cm²')],
      ['A triangle ' + m('6, 8, 10') + ' and a similar one of perimeter ' + m('36') + ': its sides', m('9, 12, 15')],
      ['Two similar triangles have heights ' + m('6') + ' and ' + m('10') + ': the ratio of areas', m('9 : 25')],
      ['A triangle of area ' + m('60') + ' is scaled so that its area is ' + m('15') + ': find ' + m('k'), m(f('1', '2'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Mark the equal angles on the figure before writing any proportion.',
  homework: [
    m('△ABC ∼ △DEF') + ' with ' + m('AB = 8') + ', ' + m('DE = 12') + ', ' + m('BC = 10') + '. Find ' + m('EF') + '.',
    'Two similar triangles have areas ' + m('27') + ' and ' + m('48') + '. Find ' + m('k') + '.',
    'A triangle of perimeter ' + m('30') + ' is enlarged by ' + m('k = 1.4') + '. Find the new perimeter.',
    'A triangle of area ' + m('45') + ' is reduced by ' + m('k = ' + f('1', '3')) + '. Find the new area.',
    'Explain why the ratio of areas is ' + m('k²') + ' and not ' + m('k') + '.'
  ]
});

/* ============================== 4 ============================== */
G9_GEO.push({
  id: 'g9-04', stream: 'geo', grade: 9, quarter: 1, lessons: '5', hours: 1,
  title: 'The first criterion of similarity — two angles',
  subtitle: 'Two angles equal and the triangles are similar: the criterion used more than all the others together.',
  uz: 'Geometriya 9, §3', uzPage: 'pp. 19–23',
  cam: 'IGX 11.2', camPage: 'Core & Extended, pp. 226–231', wb: 'Exercise 11.2',
  objectives: [
    'State and prove the AA criterion.',
    'Recognise the two standard configurations in which it appears.',
    'Use it to find an unknown length in a figure with parallel lines.',
    'Write a two-line proof of similarity from a diagram.'
  ],
  terms: [
    ['Criterion', 'Alomat', 'Признак'],
    ['Two angles', 'Ikki burchak', 'Два угла'],
    ['Corresponding angles', 'Mos burchaklar', 'Соответственные углы'],
    ['Vertical angles', 'Vertikal burchaklar', 'Вертикальные углы'],
    ['Common angle', 'Umumiy burchak', 'Общий угол'],
    ['Parallel', 'Parallel', 'Параллельный'],
    ['Transversal', 'Kesuvchi', 'Секущая'],
    ['Proof', 'Isbot', 'Доказательство']
  ],
  timing: [[10, 'The criterion'], [14, 'Two configurations'], [10, 'Using it'], [6, 'Homework']],
  sections: [
    {
      h: 'The criterion',
      html: `${eq('If two angles of one triangle equal two angles of another, the triangles are similar', true)}
      <p>The proof is one line: the third angles are equal too, because all three add to ${m('180°')}.
      So all three angles agree, and for triangles that is enough.</p>
      {{fig:thales:Two angles equal — and the two triangles are the same shape at different sizes.}}
      <div class="keybox"><div class="klabel">Two angles, and nothing about sides at all</div>
      This is what makes similarity useful. Angles are easy to find — from parallel lines, from vertical
      angles, from a shared angle — while sides usually have to be measured. Nine out of ten similarity
      problems are solved by this criterion.</div>`
    },
    {
      h: 'Two configurations',
      html: `<p>Almost every diagram in this chapter is one of two pictures.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Configuration</th><th>The equal angles come from</th></tr></thead>
      <tbody>
        <tr><td>the “${m('Λ')}” — a line parallel to a side</td><td>the common angle, and corresponding angles</td></tr>
        <tr><td>the “${m('X')}” — two lines crossing between parallels</td><td>vertical angles, and alternate angles</td></tr>
      </tbody></table></div>
      {{fig:parallelLines:Parallel lines cut by a transversal — the standard supply of equal angles.}}
      <p>In the ${m('Λ')} configuration, ${m('DE ∥ BC')} in ${m('△ABC')} gives
      ${m('△ADE ∼ △ABC')} with ${m('∠A')} common. In the ${m('X')} configuration the equal angles are
      the vertical pair at the crossing point together with one pair of alternate angles.</p>
      <div class="warn"><span class="wl">Name the vertices in the right order in the ${m('X')} case</span>
      The two triangles point in opposite directions, so the matching is not the obvious one. Mark the
      equal angles on the figure first, then read the order off the marks.</div>`
    },
    {
      h: 'Using it',
      html: `<p><b>Example.</b> In ${m('△ABC')}, ${m('DE ∥ BC')} with ${m('D')} on ${m('AB')} and
      ${m('E')} on ${m('AC')}. If ${m('AD = 4')}, ${m('DB = 6')} and ${m('DE = 5')}, find ${m('BC')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td>similar by AA</td><td class="m">∠A common, ∠ADE = ∠ABC</td></tr>
        <tr><td class="m">k</td><td class="m">${f('AB', 'AD')} = ${f('10', '4')} = 2.5</td></tr>
        <tr><td class="m">BC</td><td class="m">5 × 2.5 = 12.5</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('AB')} is ${m('10')}, not ${m('6')}</span>
      The proportion involves the <b>whole</b> side ${m('AB = AD + DB')}, not the part beyond ${m('D')}.
      Using ${m('DB')} in place of ${m('AB')} is the classic error of this configuration.</div>`
    }
  ],
  examples: [
    {
      q: 'In ' + m('△ABC') + ', ' + m('DE ∥ BC') + ', ' + m('AD = 4') + ', ' + m('DB = 6') + ', ' + m('DE = 5') + '. Find ' + m('BC') + '.',
      steps: [
        [m('∠A') + ' is common; ' + m('∠ADE = ∠ABC') + ' (corresponding).', 'AA.'],
        [m('AB = 4 + 6 = 10'), 'The whole side.'],
        [m('k = ' + f('10', '4') + ' = 2.5'), ''],
        [m('BC = 5 × 2.5 = 12.5'), '']
      ],
      ans: m('12.5')
    },
    {
      q: 'Two triangles have angles ' + m('50°, 60°') + ' and ' + m('60°, 70°') + '. Are they similar?',
      steps: [
        ['First triangle: third angle ' + m('70°') + '.', ''],
        ['Second: third angle ' + m('50°') + '.', ''],
        ['Both have ' + m('{50°, 60°, 70°}') + '.', ''],
        ['Yes — similar by AA.', '']
      ],
      ans: 'Yes'
    },
    {
      q: 'A ' + m('1.8 m') + ' person casts a ' + m('2.4 m') + ' shadow; a tower casts a ' + m('20 m') + ' shadow. Find the tower’s height.',
      steps: [
        ['Both triangles are right-angled with the same sun angle.', 'AA.'],
        [m(f('h', '20') + ' = ' + f('1.8', '2.4')), ''],
        [m('h = 20 × 0.75'), ''],
        [m('= 15 m'), '']
      ],
      ans: m('15 m')
    }
  ],
  modelNote: 'Measure the classroom window with a metre rule and a shadow; the criterion becomes an instrument rather than a theorem.',
  interactive: {
    type: 'thales',
    title: 'A parallel line inside a triangle',
    hint: 'Move the parallel and watch which lengths keep their ratio.'
  },
  quiz: [
    { q: 'The AA criterion needs:', a: ['one angle', 'two angles', 'three angles', 'two sides'], c: 1, why: 'The third follows.' },
    { q: 'The proof rests on:', a: ['Pythagoras', 'the angle sum', 'the area formula', 'the sine rule'], c: 1, why: m('180°') + ' fixes the third angle.' },
    { q: m('DE ∥ BC') + ' gives equal angles by:', a: ['vertical angles', 'corresponding angles', 'Pythagoras', 'chance'], c: 1, why: 'Parallel lines and a transversal.' },
    { q: 'In the ' + m('Λ') + ' figure the ratio uses:', a: [m('DB'), m('AB'), m('DE'), m('AC') + ' only'], c: 1, why: 'The whole side.' },
    { q: 'Angles ' + m('50°, 60°') + ' and ' + m('60°, 70°') + ' give:', a: ['similar', 'not similar', 'congruent', 'not enough information'], c: 0, why: 'Both are ' + m('{50, 60, 70}') + '.' },
    { q: 'Shadow problems use:', a: ['SSS', 'SAS', 'AA', 'Pythagoras'], c: 2, why: 'Two right triangles with a common sun angle.' }
  ],
  practice: {
    easy: [
      ['Angles ' + m('40°, 60°') + ' and ' + m('40°, 60°'), 'Similar'],
      ['Angles ' + m('30°, 90°') + ' and ' + m('60°, 90°'), 'Similar'],
      ['Angles ' + m('50°, 60°') + ' and ' + m('50°, 80°'), 'Not similar'],
      [m('DE ∥ BC') + ', ' + m('AD = 3') + ', ' + m('DB = 3') + ': ' + m('k'), m('2')],
      [m('AD = 4, DB = 6') + ': ' + m('AB'), m('10')],
      ['Same: ' + m('k'), m('2.5')],
      [m('DE = 5, k = 2.5') + ': ' + m('BC'), m('12.5')]
    ],
    med: [
      [m('AD = 4, DB = 6, DE = 5') + ': ' + m('BC'), m('12.5')],
      [m('AD = 5, AB = 15, BC = 21') + ': ' + m('DE'), m('7')],
      ['A ' + m('1.8 m') + ' person, ' + m('2.4 m') + ' shadow; tower shadow ' + m('20 m'), m('15 m')],
      ['A ' + m('2 m') + ' pole, ' + m('3 m') + ' shadow; tree shadow ' + m('18 m'), m('12 m')],
      [m('DE ∥ BC') + ', ' + m('AD : DB = 2 : 3') + ': ' + m('DE : BC'), m('2 : 5')],
      ['Same: ratio of the areas of ' + m('△ADE') + ' and ' + m('△ABC'), m('4 : 25')],
      ['Two right triangles share an acute angle: are they similar?', 'Yes']
    ],
    hard: [
      [m('DE ∥ BC') + ', ' + m('△ADE') + ' has area ' + m('9') + ' and ' + m('△ABC') + ' has ' + m('25') + ': ' + m('AD : AB'), m('3 : 5')],
      ['Same figure: ' + m('AD : DB'), m('3 : 2')],
      ['The area of the trapezium ' + m('DBCE'), m('16')],
      ['In the ' + m('X') + ' figure with ' + m('AB ∥ CD') + ', ' + m('AB = 6, CD = 9, AO = 4') + ': ' + m('OD'), m('6')],
      ['A mirror on the ground ' + m('3 m') + ' from a ' + m('1.5 m') + ' observer and ' + m('12 m') + ' from a tower', m('6 m')],
      ['A triangle is divided by a line parallel to the base into equal areas: the ratio of the parts of a side', m('1 : (' + sr('2') + ' − 1)')],
      ['Two triangles have angles ' + m('x, 2x') + ' and ' + m('2x, 3x') + ', ' + m('x = 30°') + ': similar?', 'Yes — both are ' + m('{30°, 60°, 90°}')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'State the two equal angles by name before claiming similarity.',
  homework: [
    'In ' + m('△ABC') + ', ' + m('DE ∥ BC') + ', ' + m('AD = 6') + ', ' + m('DB = 4') + ', ' + m('DE = 9') + '. Find ' + m('BC') + '.',
    'A ' + m('1.6 m') + ' person casts a ' + m('2 m') + ' shadow; a building casts a ' + m('35 m') + ' shadow. Find its height.',
    'Two triangles have angles ' + m('45°, 55°') + ' and ' + m('55°, 80°') + '. Are they similar?',
    'In the ' + m('X') + ' figure with ' + m('AB ∥ CD') + ', ' + m('AB = 8') + ', ' + m('CD = 12') + ', ' + m('AO = 6') + '. Find ' + m('OD') + '.',
    'Prove the AA criterion in two lines.'
  ]
});

/* ============================== 5 ============================== */
G9_GEO.push({
  id: 'g9-05', stream: 'geo', grade: 9, quarter: 1, lessons: '6', hours: 1,
  title: 'The second criterion of similarity — two sides and the included angle',
  subtitle: 'When only one angle is known, two proportional sides around it finish the job.',
  uz: 'Geometriya 9, §4', uzPage: 'pp. 24–27',
  cam: 'IGX 11.2', camPage: 'Core & Extended, pp. 226–231', wb: 'Exercise 11.2',
  objectives: [
    'State the SAS similarity criterion precisely, including the word “included”.',
    'Apply it to a figure with a common angle and two ratios.',
    'Distinguish it from the congruence criterion of the same name.',
    'Show by a counter-example that the angle must be the included one.'
  ],
  terms: [
    ['Included angle', 'Orasidagi burchak', 'Угол между сторонами'],
    ['Two sides', 'Ikki tomon', 'Две стороны'],
    ['Proportional', 'Proporsional', 'Пропорциональные'],
    ['Common angle', 'Umumiy burchak', 'Общий угол'],
    ['Second criterion', 'Ikkinchi alomat', 'Второй признак'],
    ['Counter-example', 'Qarama-qarshi misol', 'Контрпример'],
    ['Configuration', 'Chizma', 'Конфигурация'],
    ['Follows', 'Kelib chiqadi', 'Следует']
  ],
  timing: [[10, 'The criterion'], [12, 'The standard figure'], [12, 'Why “included” matters'], [6, 'Homework']],
  sections: [
    {
      h: 'The criterion',
      html: `${eq('If two sides of one triangle are proportional to two sides of another, and the angles between those sides are equal, the triangles are similar', true)}
      ${eq(m(f('AB', 'A₁B₁') + ' = ' + f('AC', 'A₁C₁')) + '  and  ' + m('∠A = ∠A₁')  + '  ⟹  ' + m('△ABC ∼ △A₁B₁C₁'), true)}
      {{fig:congruence:Two sides and the angle between them fix the shape — proportionally, not just exactly.}}
      <div class="keybox"><div class="klabel">The same criterion as for congruence, one word changed</div>
      Congruence: two sides <b>equal</b> and the included angle equal. Similarity: two sides
      <b>proportional</b> and the included angle equal. Every congruence criterion has a similarity twin
      of exactly this form.</div>`
    },
    {
      h: 'The standard figure',
      html: `<p>The criterion is used almost exclusively when the two triangles <b>share</b> an angle.</p>
      <p><b>Example.</b> In ${m('△ABC')}, take ${m('D')} on ${m('AB')} and ${m('E')} on ${m('AC')} with
      ${m('AD = 3')}, ${m('AB = 12')}, ${m('AE = 4')}, ${m('AC = 16')}. Then</p>
      ${eq(m(f('AD', 'AB') + ' = ' + f('3', '12') + ' = ' + f('1', '4')) + '  and  ' + m(f('AE', 'AC') + ' = ' + f('4', '16') + ' = ' + f('1', '4')), true)}
      <p>and ${m('∠A')} is common, so ${m('△ADE ∼ △ABC')} with ${m('k = 4')} — <b>without</b> being told
      that ${m('DE ∥ BC')}. Indeed the similarity now proves the parallelism.</p>
      <div class="keybox"><div class="klabel">The criterion runs the ${m('Λ')} figure backwards</div>
      In the last lesson, parallel lines gave the ratios. Here the ratios give the parallel lines. Which
      direction a question is going is worth deciding before starting.</div>`
    },
    {
      h: 'Why “included” matters',
      html: `<p>The equal angle must lie <b>between</b> the two proportional sides. Otherwise the claim
      is false.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Similar?</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('AB', 'A₁B₁')} = ${f('AC', 'A₁C₁')}, ∠A = ∠A₁</td><td>yes — included</td></tr>
        <tr><td class="m">${f('AB', 'A₁B₁')} = ${f('AC', 'A₁C₁')}, ∠B = ∠B₁</td><td>not necessarily</td></tr>
      </tbody></table></div>
      <p>The second row is the “ambiguous case” familiar from congruence: two sides and a non-included
      angle can produce two genuinely different triangles.</p>
      <div class="warn"><span class="wl">Check where the angle sits before invoking the criterion</span>
      A proof that says “two sides proportional and an angle equal” without saying <b>which</b> angle is
      incomplete, and in an examination it is marked as incomplete.</div>`
    }
  ],
  examples: [
    {
      q: 'In ' + m('△ABC') + ', ' + m('AD = 3') + ', ' + m('AB = 12') + ', ' + m('AE = 4') + ', ' + m('AC = 16') + '. Show that ' + m('△ADE ∼ △ABC') + ' and find ' + m('k') + '.',
      steps: [
        [m(f('AD', 'AB') + ' = ' + f('1', '4')), ''],
        [m(f('AE', 'AC') + ' = ' + f('1', '4')), 'Equal ratios.'],
        [m('∠A') + ' is common — the included angle.', 'SAS.'],
        [m('△ADE ∼ △ABC') + ', ' + m('k = 4') + '.', '']
      ],
      ans: 'Similar, ' + m('k = 4')
    },
    {
      q: 'In the same figure ' + m('DE = 5') + '. Find ' + m('BC') + '.',
      steps: [
        [m('k = 4') + ' from the previous part.', ''],
        [m('BC = DE × k'), ''],
        [m('= 5 × 4'), ''],
        [m('= 20'), '']
      ],
      ans: m('20')
    },
    {
      q: 'Two triangles have sides ' + m('4, 6') + ' and ' + m('6, 9') + ' with the included angle ' + m('50°') + ' in each. Are they similar?',
      steps: [
        [m(f('4', '6') + ' = ' + f('2', '3')), ''],
        [m(f('6', '9') + ' = ' + f('2', '3')), 'Equal ratios.'],
        ['The equal angle is included in both.', ''],
        ['Yes — similar with ' + m('k = 1.5') + '.', '']
      ],
      ans: 'Yes, ' + m('k = 1.5')
    }
  ],
  modelNote: 'Draw two triangles with the same two ratios but the equal angle in the wrong place, and let the class see that they are not similar; the word “included” then means something.',
  interactive: {
    type: 'triangleAngles',
    title: 'Two sides and the angle between',
    hint: 'Fix the angle, change the two sides together.'
  },
  quiz: [
    { q: 'The second criterion needs:', a: ['three sides', 'two angles', 'two sides and the included angle', 'one side'], c: 2, why: 'SAS, proportionally.' },
    { q: '“Included” means the angle is:', a: ['the largest', 'between the two sides', 'opposite the longest', 'anywhere'], c: 1, why: 'Otherwise the claim fails.' },
    { q: m('AD : AB = AE : AC') + ' with ' + m('∠A') + ' common gives:', a: ['nothing', m('△ADE ∼ △ABC'), 'congruence', 'equal areas'], c: 1, why: 'SAS similarity.' },
    { q: 'It also proves:', a: [m('DE ⊥ BC'), m('DE ∥ BC'), m('DE = BC'), 'nothing'], c: 1, why: 'Equal corresponding angles.' },
    { q: 'Sides ' + m('4, 6') + ' and ' + m('6, 9') + ', included angle equal:', a: ['similar', 'not similar', 'congruent', 'not enough'], c: 0, why: 'Both ratios are ' + m(f('2', '3')) + '.' },
    { q: 'A non-included equal angle gives:', a: ['similarity', 'congruence', 'not necessarily similarity', 'a contradiction'], c: 2, why: 'The ambiguous case.' }
  ],
  practice: {
    easy: [
      [m('AD = 3, AB = 12') + ': ratio', m(f('1', '4'))],
      [m('AE = 4, AC = 16') + ': ratio', m(f('1', '4'))],
      ['Common angle plus equal ratios gives', 'Similarity'],
      [m('k') + ' in that figure', m('4')],
      [m('DE = 5, k = 4') + ': ' + m('BC'), m('20')],
      ['Sides ' + m('4, 6') + ' and ' + m('6, 9') + ', included angle equal', 'Similar'],
      ['Sides ' + m('4, 6') + ' and ' + m('8, 10') + ', included angle equal', 'Not similar']
    ],
    med: [
      [m('AD = 2, AB = 6, AE = 3, AC = 9') + ': ' + m('k'), m('3')],
      ['Same, ' + m('DE = 4') + ': ' + m('BC'), m('12')],
      [m('AD = 5, AB = 20, DE = 6') + ' with matching ratio on ' + m('AC') + ': ' + m('BC'), m('24')],
      ['Sides ' + m('3, 5') + ' and ' + m('9, 15') + ', included angle equal: ' + m('k'), m('3')],
      ['Does the second criterion also prove ' + m('DE ∥ BC') + '?', 'Yes'],
      ['Two triangles: ' + m('6, 8') + ' and ' + m('9, 12') + ', included ' + m('40°'), 'Similar, ' + m('k = 1.5')],
      ['Two triangles: ' + m('6, 8') + ' and ' + m('9, 12') + ', ' + m('40°') + ' not included', 'Not necessarily']
    ],
    hard: [
      [m('AD = 4, DB = 8, AE = 5') + ': ' + m('EC') + ' if ' + m('DE ∥ BC'), m('10')],
      [m('△ADE ∼ △ABC') + ' with ' + m('k = 3') + ' and ' + m('[△ADE] = 7') + ': ' + m('[△ABC]'), m('63')],
      ['A triangle with sides ' + m('6, 9, 12') + ' and one with ' + m('4, 6, 8') + ': ' + m('k'), m('1.5')],
      ['Are they similar by the second criterion or the third?', 'The third — all three sides'],
      ['In ' + m('△ABC') + ', ' + m('AD = 2, AB = 8, AE = 3, AC = 12') + ': ' + m('[△ADE] : [△ABC]'), m('1 : 16')],
      ['A triangle ' + m('5, 7') + ' with included ' + m('60°') + ' and one ' + m('10, 14') + ' with included ' + m('60°'), 'Similar, ' + m('k = 2')],
      ['Why does the ambiguous case not arise when the angle is included?', 'Two sides and the angle between them fix the triangle']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Name the included angle explicitly in every proof.',
  homework: [
    'In ' + m('△ABC') + ', ' + m('AD = 4') + ', ' + m('AB = 16') + ', ' + m('AE = 5') + ', ' + m('AC = 20') + '. Prove ' + m('△ADE ∼ △ABC') + ' and find ' + m('k') + '.',
    'In the same figure ' + m('DE = 6') + '. Find ' + m('BC') + '.',
    'Two triangles have sides ' + m('5, 8') + ' and ' + m('10, 16') + ' with equal included angles. Find ' + m('k') + '.',
    'Explain why the equal angle must be the included one.',
    'Show that the second criterion also proves ' + m('DE ∥ BC') + ' in the standard figure.'
  ]
});
