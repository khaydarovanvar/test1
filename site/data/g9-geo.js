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

/* ============================== 6 ============================== */
G9_GEO.push({
  id: 'g9-06', stream: 'geo', grade: 9, quarter: 1, lessons: '7', hours: 1,
  title: 'The third criterion of similarity — three sides',
  subtitle: 'No angle needed at all: three proportional sides make the same shape.',
  uz: 'Geometriya 9, §5', uzPage: 'pp. 28–31',
  cam: 'IGX 11.2', camPage: 'Core & Extended, pp. 226–231', wb: 'Exercise 11.2',
  objectives: [
    'State the SSS similarity criterion.',
    'Test three ratios and decide similarity from numbers alone.',
    'Order the sides before comparing, so that corresponding sides are paired.',
    'Choose between the three criteria according to what is given.'
  ],
  terms: [
    ['Third criterion', 'Uchinchi alomat', 'Третий признак'],
    ['Three sides', 'Uchta tomon', 'Три стороны'],
    ['To order', 'Tartiblash', 'Упорядочить'],
    ['Ratio test', 'Nisbat sinovi', 'Проверка отношений'],
    ['Shortest side', 'Eng kichik tomon', 'Наименьшая сторона'],
    ['Longest side', 'Eng katta tomon', 'Наибольшая сторона'],
    ['Equal ratios', 'Teng nisbatlar', 'Равные отношения'],
    ['Decide', 'Aniqlash', 'Определить']
  ],
  timing: [[10, 'The criterion'], [12, 'Ordering first'], [12, 'Choosing a criterion'], [6, 'Homework']],
  sections: [
    {
      h: 'The criterion',
      html: `${eq('If the three sides of one triangle are proportional to the three sides of another, the triangles are similar', true)}
      ${eq(m(f('AB', 'A₁B₁') + ' = ' + f('BC', 'B₁C₁') + ' = ' + f('CA', 'C₁A₁')) + '  ⟹  ' + m('△ABC ∼ △A₁B₁C₁'), true)}
      <p>This is the criterion for the case where no angle is known — a set of measurements, and nothing
      else. It is also the one that a computer would use, because it needs no reasoning about the
      figure.</p>
      <div class="keybox"><div class="klabel">Three numbers, three numbers, one decision</div>
      Divide the sides in matching order and look at the three quotients. If they agree, the triangles
      are similar and the quotient is ${m('k')}; if any one differs, they are not.</div>`
    },
    {
      h: 'Ordering first',
      html: `<p>Corresponding sides must be paired correctly, and without a figure the only reliable way
      is to sort both lists.</p>
      <p><b>Example.</b> ${m('△ABC')} has sides ${m('4, 7, 5')} and ${m('△DEF')} has ${m('10.5, 6, 7.5')}.
      Sorted: ${m('4, 5, 7')} and ${m('6, 7.5, 10.5')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Pair</th><th>Ratio</th></tr></thead>
      <tbody>
        <tr><td class="m">6 : 4</td><td class="m">1.5</td></tr>
        <tr><td class="m">7.5 : 5</td><td class="m">1.5</td></tr>
        <tr><td class="m">10.5 : 7</td><td class="m">1.5</td></tr>
      </tbody></table></div>
      <p>All three agree, so the triangles are similar with ${m('k = 1.5')}.</p>
      <div class="warn"><span class="wl">Comparing the lists in the order given is a lottery</span>
      Pairing ${m('4')} with ${m('10.5')} produces ${m('2.625')}, and the question looks as if the answer
      is “not similar”. Sorting both lists takes five seconds and removes the whole risk.</div>`
    },
    {
      h: 'Choosing a criterion',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>What you are given</th><th>Use</th></tr></thead>
      <tbody>
        <tr><td>parallel lines, or a shared angle plus another equal angle</td><td>the first (AA)</td></tr>
        <tr><td>a shared angle and two ratios around it</td><td>the second (SAS)</td></tr>
        <tr><td>six side lengths and no angles</td><td>the third (SSS)</td></tr>
      </tbody></table></div>
      <p>In practice the first criterion does most of the work, because angles are what diagrams supply.
      The third is for numerical questions, and the second for the ${m('Λ')} figure run backwards.</p>
      <div class="keybox"><div class="klabel">Say which criterion you used</div>
      A proof that establishes similarity without naming the criterion is incomplete. One sentence —
      “by the third criterion, since all three ratios equal ${m('1.5')}” — is what the mark is for.</div>`
    }
  ],
  examples: [
    {
      q: 'Are triangles with sides ' + m('4, 7, 5') + ' and ' + m('10.5, 6, 7.5') + ' similar?',
      steps: [
        ['Sort: ' + m('4, 5, 7') + ' and ' + m('6, 7.5, 10.5') + '.', ''],
        [m(f('6', '4') + ' = 1.5'), ''],
        [m(f('7.5', '5') + ' = 1.5') + ', ' + m(f('10.5', '7') + ' = 1.5') + '.', ''],
        ['Yes — by the third criterion, ' + m('k = 1.5') + '.', '']
      ],
      ans: 'Yes, ' + m('k = 1.5')
    },
    {
      q: 'Are triangles with sides ' + m('3, 4, 5') + ' and ' + m('6, 8, 11') + ' similar?',
      steps: [
        [m(f('6', '3') + ' = 2'), ''],
        [m(f('8', '4') + ' = 2'), ''],
        [m(f('11', '5') + ' = 2.2') + ' — different.', ''],
        ['No.', 'One failing ratio is enough.']
      ],
      ans: 'No'
    },
    {
      q: 'A triangle has sides ' + m('6, 8, 10') + '. A similar triangle has perimeter ' + m('36') + '. Find its sides.',
      steps: [
        ['Perimeter of the first: ' + m('24') + '.', ''],
        [m('k = ' + f('36', '24') + ' = 1.5'), ''],
        [m('6 × 1.5 = 9') + ', ' + m('8 × 1.5 = 12') + ', ' + m('10 × 1.5 = 15') + '.', ''],
        ['Check: ' + m('9 + 12 + 15 = 36') + ' ✓', '']
      ],
      ans: m('9, 12, 15')
    }
  ],
  modelNote: 'Give the six numbers in scrambled order and let half the class compare as given while the other half sorts first; the disagreement teaches the rule.',
  interactive: {
    type: 'triangleAngles',
    title: 'Three sides fix the shape',
    hint: 'Scale all three together and nothing about the shape changes.'
  },
  quiz: [
    { q: 'The third criterion needs:', a: ['two angles', 'three sides', 'two sides and an angle', 'one side'], c: 1, why: 'SSS, proportionally.' },
    { q: 'Before comparing, you should:', a: ['draw', 'sort both lists', 'measure the angles', 'nothing'], c: 1, why: 'To pair corresponding sides.' },
    { q: m('4, 5, 7') + ' and ' + m('6, 7.5, 10.5') + ' give ' + m('k') + ' =', a: [m('1.25'), m('1.5'), m('1.75'), m('2')], c: 1, why: 'All three ratios agree.' },
    { q: m('3, 4, 5') + ' and ' + m('6, 8, 11') + ' are:', a: ['similar', 'not similar', 'congruent', 'right-angled and so similar'], c: 1, why: 'The third ratio differs.' },
    { q: 'With six sides and no angles, use:', a: ['the first', 'the second', 'the third', 'any'], c: 2, why: 'No angle is available.' },
    { q: 'A complete proof must:', a: ['give the answer', 'name the criterion', 'include a graph', 'measure'], c: 1, why: 'That is what the mark is for.' }
  ],
  practice: {
    easy: [
      [m('3, 4, 5') + ' and ' + m('6, 8, 10'), 'Similar, ' + m('k = 2')],
      [m('2, 3, 4') + ' and ' + m('4, 6, 8'), 'Similar, ' + m('k = 2')],
      [m('3, 4, 5') + ' and ' + m('6, 8, 11'), 'Not similar'],
      [m('5, 12, 13') + ' and ' + m('10, 24, 26'), 'Similar, ' + m('k = 2')],
      ['Ratio ' + m('7.5 : 5'), m('1.5')],
      ['Ratio ' + m('10.5 : 7'), m('1.5')],
      ['Perimeter ' + m('24') + ' scaled to ' + m('36') + ': ' + m('k'), m('1.5')]
    ],
    med: [
      [m('4, 7, 5') + ' and ' + m('10.5, 6, 7.5'), 'Similar, ' + m('k = 1.5')],
      ['Sides ' + m('6, 8, 10') + ', similar perimeter ' + m('36') + ': the sides', m('9, 12, 15')],
      [m('6, 9, 12') + ' and ' + m('8, 12, 16'), 'Similar, ' + m('k = ' + f('4', '3'))],
      [m('4, 6, 8') + ' and ' + m('6, 9, 11'), 'Not similar'],
      ['Sides ' + m('5, 7, 9') + ' and ' + m('15, x, y'), m('x = 21, y = 27')],
      ['Which criterion for six side lengths?', 'The third'],
      ['Which criterion for two parallel lines?', 'The first']
    ],
    hard: [
      ['Sides ' + m('a, a + 2, a + 4') + ' and ' + m('2a, 2a + 4, 2a + 8') + ': similar?', 'Yes, ' + m('k = 2')],
      ['Two similar triangles have perimeters ' + m('20') + ' and ' + m('35') + ' and the smaller has sides ' + m('4, 7, 9'), m('7, 12.25, 15.75')],
      ['A triangle ' + m('9, 12, 15') + ' is similar to one of area ' + m('24') + ': the smaller sides', m('6, 8, 10')],
      ['For which ' + m('x') + ' are ' + m('4, 6, 8') + ' and ' + m('6, 9, x') + ' similar?', m('x = 12')],
      ['Are ' + m('2, 3, 4') + ' and ' + m('3, 4, 5') + ' similar?', 'No'],
      ['A triangle with sides in the ratio ' + m('3 : 4 : 5') + ' and perimeter ' + m('60'), m('15, 20, 25')],
      ['Its area', m('150')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Sort both lists of sides before comparing, every time.',
  homework: [
    'Are triangles with sides ' + m('6, 9, 12') + ' and ' + m('8, 12, 16') + ' similar?',
    'Are triangles with sides ' + m('5, 6, 7') + ' and ' + m('10, 12, 15') + ' similar?',
    'A triangle has sides ' + m('8, 15, 17') + '. A similar triangle has perimeter ' + m('80') + '. Find its sides.',
    'For which ' + m('x') + ' are ' + m('3, 5, 7') + ' and ' + m('9, 15, x') + ' similar?',
    'Say which criterion you would use for each of the three standard situations.'
  ]
});

/* ============================== 7 ============================== */
G9_GEO.push({
  id: 'g9-07', stream: 'geo', grade: 9, quarter: 1, lessons: '8', hours: 1,
  title: 'Criteria of similarity of right-angled triangles',
  subtitle: 'With one right angle given free, a single further fact is enough.',
  uz: 'Geometriya 9, §6', uzPage: 'pp. 32–35',
  cam: 'IGX 11.1–11.2', camPage: 'Core & Extended, pp. 220–231', wb: 'Exercise 11.1',
  objectives: [
    'State the special criteria for right-angled triangles.',
    'Use one acute angle, or two proportional legs, to establish similarity.',
    'Use the hypotenuse-and-leg criterion.',
    'Recognise the three similar triangles created by the altitude to the hypotenuse.'
  ],
  terms: [
    ['Right-angled triangle', 'To‘g‘ri burchakli uchburchak', 'Прямоугольный треугольник'],
    ['Leg', 'Katet', 'Катет'],
    ['Hypotenuse', 'Gipotenuza', 'Гипотенуза'],
    ['Acute angle', 'O‘tkir burchak', 'Острый угол'],
    ['Altitude', 'Balandlik', 'Высота'],
    ['Foot of the altitude', 'Balandlik asosi', 'Основание высоты'],
    ['Projection', 'Proyeksiya', 'Проекция'],
    ['Mean proportional', 'O‘rta proporsional', 'Среднее пропорциональное']
  ],
  timing: [[10, 'The three special criteria'], [14, 'The altitude figure'], [10, 'Working with it'], [6, 'Homework']],
  sections: [
    {
      h: 'The three special criteria',
      html: `<p>One right angle is common to both triangles already, so each general criterion needs one
      fact fewer.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>From</th><th>Needs only</th><th>Because</th></tr></thead>
      <tbody>
        <tr><td>the first</td><td>one equal acute angle</td><td>the right angles are the second pair</td></tr>
        <tr><td>the second</td><td>two proportional legs</td><td>the right angle is included</td></tr>
        <tr><td>the third</td><td>a leg and the hypotenuse proportional</td><td>Pythagoras supplies the third side</td></tr>
      </tbody></table></div>
      {{fig:rightTriangle:One right angle is free; a single further fact decides similarity.}}
      <div class="keybox"><div class="klabel">Two right triangles sharing an acute angle are always similar</div>
      This is the workhorse of the whole chapter, and the reason shadow problems, ladder problems and
      the altitude figure below all work.</div>`
    },
    {
      h: 'The altitude figure',
      html: `<p>Drop the altitude ${m('CH')} from the right angle ${m('C')} to the hypotenuse ${m('AB')}.
      Three triangles appear — ${m('△ACH')}, ${m('△CBH')} and ${m('△ABC')} — and all three are
      similar.</p>
      {{fig:rightTriangle:The altitude from the right angle splits the triangle into two copies of itself.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Pair</th><th>Equal angles</th></tr></thead>
      <tbody>
        <tr><td class="m">△ACH ∼ △ABC</td><td class="m">∠A common, both right-angled</td></tr>
        <tr><td class="m">△CBH ∼ △ABC</td><td class="m">∠B common, both right-angled</td></tr>
        <tr><td class="m">△ACH ∼ △CBH</td><td>both similar to ${m('△ABC')}</td></tr>
      </tbody></table></div>
      <p>Reading the proportions off gives three relations, which Quarter IV will use constantly:</p>
      ${eq(m('CH² = AH · HB') + '     ' + m('AC² = AH · AB') + '     ' + m('BC² = BH · AB'), true)}
      <div class="keybox"><div class="klabel">Each leg is the mean proportional between the hypotenuse and its own projection</div>
      And the altitude is the mean proportional between the two projections. Three sentences, three
      formulae — and adding the last two gives Pythagoras' theorem in one line.</div>`
    },
    {
      h: 'Working with it',
      html: `<p><b>Example.</b> In a right triangle the altitude to the hypotenuse divides it into
      ${m('4')} and ${m('9')}. Find the altitude and the two legs.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Quantity</th><th>Relation</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td class="m">CH</td><td class="m">CH² = 4 × 9</td><td class="m">6</td></tr>
        <tr><td class="m">AC</td><td class="m">AC² = 4 × 13</td><td class="m">2${sr('13')}</td></tr>
        <tr><td class="m">BC</td><td class="m">BC² = 9 × 13</td><td class="m">3${sr('13')}</td></tr>
      </tbody></table></div>
      <p>Check: ${m('52 + 117 = 169 = 13²')} ✓ — Pythagoras holds, as it must.</p>
      <div class="warn"><span class="wl">${m('AB')} is ${m('13')}, not ${m('9')}</span>
      The relation for a leg uses the <b>whole</b> hypotenuse and that leg's own projection. Using the
      other projection, or only part of the hypotenuse, is the usual slip here.</div>`
    }
  ],
  examples: [
    {
      q: 'The altitude to the hypotenuse divides it into ' + m('4') + ' and ' + m('9') + '. Find the altitude.',
      steps: [
        [m('△ACH ∼ △CBH'), 'Both similar to the whole.'],
        [m(f('AH', 'CH') + ' = ' + f('CH', 'HB')), ''],
        [m('CH² = 4 × 9 = 36'), ''],
        [m('CH = 6'), '']
      ],
      ans: m('6')
    },
    {
      q: 'In the same triangle find the two legs.',
      steps: [
        [m('AB = 4 + 9 = 13'), 'The whole hypotenuse.'],
        [m('AC² = AH · AB = 4 × 13 = 52'), ''],
        [m('AC = 2' + sr('13')), ''],
        [m('BC² = 9 × 13 = 117') + ', so ' + m('BC = 3' + sr('13')) + '.', '']
      ],
      ans: m('2' + sr('13')) + ' and ' + m('3' + sr('13'))
    },
    {
      q: 'Two right triangles have legs ' + m('6, 8') + ' and ' + m('9, 12') + '. Are they similar?',
      steps: [
        [m(f('9', '6') + ' = 1.5'), ''],
        [m(f('12', '8') + ' = 1.5'), 'Equal ratios.'],
        ['The right angle is the included angle.', ''],
        ['Yes — by the second criterion, ' + m('k = 1.5') + '.', '']
      ],
      ans: 'Yes, ' + m('k = 1.5')
    }
  ],
  modelNote: 'Cut a paper right triangle along the altitude from the right angle; the two pieces can be laid on the original to show all three are the same shape.',
  interactive: {
    type: 'rightTriangle',
    title: 'The altitude to the hypotenuse',
    hint: 'Move the right-angle vertex and watch the three similar triangles.'
  },
  quiz: [
    { q: 'Two right triangles with one equal acute angle are:', a: ['congruent', 'similar', 'equal in area', 'unrelated'], c: 1, why: 'AA, with the right angles as the second pair.' },
    { q: 'The altitude to the hypotenuse creates:', a: ['two similar triangles', 'three similar triangles', 'no similar triangles', 'congruent triangles'], c: 1, why: 'Both parts and the whole.' },
    { q: m('CH²') + ' equals:', a: [m('AH · AB'), m('AH · HB'), m('HB · AB'), m('AB²')], c: 1, why: 'The mean proportional of the projections.' },
    { q: m('AC²') + ' equals:', a: [m('AH · HB'), m('AH · AB'), m('HB · AB'), m('CH²')], c: 1, why: 'Its own projection times the hypotenuse.' },
    { q: 'Projections ' + m('4') + ' and ' + m('9') + ' give an altitude of:', a: [m('5'), m('6'), m('6.5'), m('13')], c: 1, why: m(sr('36')) + '.' },
    { q: 'Adding the two leg relations gives:', a: ['the sine rule', 'Pythagoras', 'the area', 'nothing'], c: 1, why: m('AH · AB + HB · AB = AB²') + '.' }
  ],
  practice: {
    easy: [
      ['Projections ' + m('4') + ' and ' + m('9') + ': the altitude', m('6')],
      ['Projections ' + m('9') + ' and ' + m('16') + ': the altitude', m('12')],
      ['Projections ' + m('3') + ' and ' + m('12') + ': the altitude', m('6')],
      [m('CH²') + ' equals', m('AH · HB')],
      [m('AC²') + ' equals', m('AH · AB')],
      ['Legs ' + m('6, 8') + ' and ' + m('9, 12') + ': similar?', 'Yes, ' + m('k = 1.5')],
      ['Two right triangles with a ' + m('30°') + ' angle each', 'Similar']
    ],
    med: [
      ['Projections ' + m('4') + ' and ' + m('9') + ': the legs', m('2' + sr('13')) + ' and ' + m('3' + sr('13'))],
      ['Projections ' + m('9') + ' and ' + m('16') + ': the legs', m('15') + ' and ' + m('20')],
      ['Legs ' + m('15') + ' and ' + m('20') + ': the hypotenuse', m('25')],
      ['Hypotenuse ' + m('25') + ', one projection ' + m('9') + ': that leg', m('15')],
      ['Altitude ' + m('12') + ', one projection ' + m('9') + ': the other', m('16')],
      ['A ' + m('3–4–5') + ' triangle: the altitude to the hypotenuse', m('2.4')],
      ['Its two projections', m('1.8') + ' and ' + m('3.2')]
    ],
    hard: [
      ['A right triangle with hypotenuse ' + m('13') + ' and altitude ' + m('6') + ': the projections', m('4') + ' and ' + m('9')],
      ['Legs ' + m('a') + ' and ' + m('b') + ': the altitude to the hypotenuse', m(f('ab', sr('a² + b²')))],
      ['A ' + m('5–12–13') + ' triangle: its altitude to the hypotenuse', m(f('60', '13'))],
      ['Its two projections', m(f('25', '13')) + ' and ' + m(f('144', '13'))],
      ['Prove Pythagoras from the two leg relations', m('AH · AB + HB · AB = AB²')],
      ['A right triangle: the altitude is ' + m('6') + ' and one projection twice the other', m('AH = 3' + sr('2')) + ', ' + m('HB = 6' + sr('2'))],
      ['A ladder ' + m('13 m') + ' reaches ' + m('12 m') + ' up a wall: its foot from the wall', m('5 m')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Label the foot of the altitude on every figure; the three relations are unreadable without it.',
  homework: [
    'The altitude to the hypotenuse divides it into ' + m('9') + ' and ' + m('16') + '. Find the altitude and the legs.',
    'A right triangle has legs ' + m('9') + ' and ' + m('12') + '. Find the altitude to the hypotenuse.',
    'Find the projections of the legs in that triangle.',
    'Two right triangles have legs ' + m('5, 12') + ' and ' + m('10, 24') + '. Are they similar?',
    'Derive Pythagoras’ theorem from the two leg relations.'
  ]
});

/* ============================== 8 ============================== */
G9_GEO.push({
  id: 'g9-08', stream: 'geo', grade: 9, quarter: 1, lessons: '9', hours: 1,
  title: 'Applying the criteria to problems on proof',
  subtitle: 'Similarity is mostly used not to find lengths but to prove that two lines are parallel, or two products equal.',
  uz: 'Geometriya 9, §7', uzPage: 'pp. 36–40',
  cam: 'IGX 11.4', camPage: 'Core & Extended, pp. 237–241', wb: 'Exercise 11.4',
  objectives: [
    'Write a proof that uses similarity as its central step.',
    'Convert a proportion into an equal-products statement and back.',
    'Prove the bisector property of a triangle.',
    'Lay a proof out in the standard statement–reason form.'
  ],
  terms: [
    ['Proof', 'Isbot', 'Доказательство'],
    ['Statement', 'Tasdiq', 'Утверждение'],
    ['Reason', 'Asos', 'Обоснование'],
    ['To follow', 'Kelib chiqmoq', 'Следовать'],
    ['Bisector', 'Bissektrisa', 'Биссектриса'],
    ['Equal products', 'Teng ko‘paytmalar', 'Равные произведения'],
    ['Converse', 'Teskari teorema', 'Обратная теорема'],
    ['Auxiliary line', 'Yordamchi chiziq', 'Вспомогательная линия']
  ],
  timing: [[10, 'The shape of a proof'], [14, 'Proportions and products'], [10, 'The bisector property'], [6, 'Homework']],
  sections: [
    {
      h: 'The shape of a proof',
      html: `<p>Almost every similarity proof has the same four lines.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Line</th><th>Content</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>name two equal angles (or the three ratios)</td></tr>
        <tr><td>2</td><td>conclude the similarity, naming the criterion</td></tr>
        <tr><td>3</td><td>write the proportion that follows</td></tr>
        <tr><td>4</td><td>rearrange it into what was asked</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Write reasons, not only statements</div>
      “${m('∠A = ∠A')} (common)”, “${m('∠ADE = ∠ABC')} (corresponding angles, ${m('DE ∥ BC')})”. Each
      bracket is a mark. A chain of true statements without reasons is not a proof.</div>`
    },
    {
      h: 'Proportions and products',
      html: `<p>Examination questions almost always ask for a product, not a ratio.</p>
      ${eq(m(f('a', 'b') + ' = ' + f('c', 'd')) + '  ⟺  ' + m('ad = bc'), true)}
      <p><b>Example.</b> In ${m('△ABC')}, ${m('CH')} is the altitude from the right angle. Prove
      ${m('AC² = AH · AB')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>Reason</th></tr></thead>
      <tbody>
        <tr><td class="m">∠A = ∠A</td><td>common</td></tr>
        <tr><td class="m">∠AHC = ∠ACB = 90°</td><td>given</td></tr>
        <tr><td class="m">△AHC ∼ △ACB</td><td>first criterion</td></tr>
        <tr><td class="m">${f('AH', 'AC')} = ${f('AC', 'AB')}</td><td>corresponding sides</td></tr>
        <tr><td class="m">AC² = AH · AB</td><td>cross-multiplying</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The middle term repeats — that is the signal</span>
      A statement of the form ${m('x² = pq')} always comes from a proportion in which ${m('x')} appears
      twice. Looking for that repeated term tells you which two triangles to compare.</div>`
    },
    {
      h: 'The bisector property',
      html: `${eq('The bisector of an angle of a triangle divides the opposite side in the ratio of the two adjacent sides', true)}
      ${eq(m(f('BD', 'DC') + ' = ' + f('AB', 'AC')), true)}
      {{fig:bisectorConstruction:The bisector from A meets BC at D, cutting it in the ratio of the two sides at A.}}
      <p>The proof draws an auxiliary line: through ${m('C')}, a parallel to ${m('AD')} meeting
      ${m('BA')} extended at ${m('E')}. Then ${m('△ACE')} is isosceles and the similar triangles
      ${m('△BAD')} and ${m('△BEC')} give the ratio.</p>
      <div class="keybox"><div class="klabel">An auxiliary line is a legitimate move, not a trick</div>
      Many proofs are impossible until one extra line is drawn — usually a parallel, an altitude, or an
      extension of a side. Trying those three, in that order, solves most problems that appear to have
      no route in.</div>`
    }
  ],
  examples: [
    {
      q: 'Prove ' + m('AC² = AH · AB') + ' where ' + m('CH') + ' is the altitude from the right angle ' + m('C') + '.',
      steps: [
        [m('∠A') + ' is common to ' + m('△AHC') + ' and ' + m('△ACB') + '.', ''],
        [m('∠AHC = ∠ACB = 90°') + '.', ''],
        [m('△AHC ∼ △ACB') + ' by the first criterion.', ''],
        [m(f('AH', 'AC') + ' = ' + f('AC', 'AB') + ' ⇒ AC² = AH · AB') + '.', '']
      ],
      ans: 'Proved'
    },
    {
      q: 'In ' + m('△ABC') + ', ' + m('AB = 8') + ', ' + m('AC = 12') + ' and the bisector from ' + m('A') + ' meets ' + m('BC') + ' at ' + m('D') + '. If ' + m('BC = 15') + ', find ' + m('BD') + '.',
      steps: [
        [m(f('BD', 'DC') + ' = ' + f('8', '12') + ' = ' + f('2', '3')), ''],
        ['Let ' + m('BD = 2t') + ', ' + m('DC = 3t') + '.', ''],
        [m('5t = 15 ⇒ t = 3'), ''],
        [m('BD = 6'), '']
      ],
      ans: m('BD = 6')
    },
    {
      q: 'In ' + m('△ABC') + ', ' + m('D') + ' on ' + m('AB') + ' and ' + m('E') + ' on ' + m('AC') + ' satisfy ' + m('AD · AB = AE · AC') + '. Prove ' + m('△ADE ∼ △ACB') + '.',
      steps: [
        ['Rewrite: ' + m(f('AD', 'AC') + ' = ' + f('AE', 'AB')) + '.', 'Note the crossing.'],
        [m('∠A') + ' is common.', ''],
        ['Two sides proportional with the included angle equal.', 'Second criterion.'],
        [m('△ADE ∼ △ACB') + '.', 'Vertices in that order.']
      ],
      ans: 'Proved'
    }
  ],
  modelNote: 'Write a proof on the board with the reasons column blank and ask the class to fill it in; they discover that the reasons are the proof.',
  interactive: {
    type: 'thales',
    title: 'Ratios that stay equal',
    hint: 'Move the line and watch the two ratios track each other.'
  },
  quiz: [
    { q: 'A similarity proof begins by:', a: ['writing the answer', 'naming equal angles', 'measuring', 'drawing a graph'], c: 1, why: 'The criterion needs them.' },
    { q: m(f('a', 'b') + ' = ' + f('c', 'd')) + ' is the same as:', a: [m('ac = bd'), m('ad = bc'), m('a + d = b + c'), m('ab = cd')], c: 1, why: 'Cross-multiplying.' },
    { q: m('x² = pq') + ' comes from a proportion where:', a: [m('x') + ' appears once', m('x') + ' appears twice', m('p = q'), 'nothing repeats'], c: 1, why: 'The repeated middle term.' },
    { q: 'The bisector from ' + m('A') + ' cuts ' + m('BC') + ' in the ratio:', a: [m('AB : BC'), m('AB : AC'), m('AC : BC'), m('1 : 1')], c: 1, why: 'The two adjacent sides.' },
    { q: m('AB = 8, AC = 12, BC = 15') + ': ' + m('BD') + ' =', a: [m('5'), m('6'), m('7.5'), m('9')], c: 1, why: m('2 : 3') + ' of ' + m('15') + '.' },
    { q: 'An auxiliary line is:', a: ['cheating', 'a legitimate step', 'always a circle', 'never needed'], c: 1, why: 'Many proofs need one.' }
  ],
  practice: {
    easy: [
      ['Rewrite ' + m(f('a', 'b') + ' = ' + f('c', 'd')) + ' as products', m('ad = bc')],
      ['Rewrite ' + m('x² = pq') + ' as a proportion', m(f('p', 'x') + ' = ' + f('x', 'q'))],
      ['Bisector ratio in ' + m('△ABC') + ' from ' + m('A'), m(f('AB', 'AC'))],
      [m('AB = 6, AC = 9') + ': ' + m('BD : DC'), m('2 : 3')],
      [m('AB = 5, AC = 5') + ': ' + m('BD : DC'), m('1 : 1')],
      ['Reason for “' + m('∠A = ∠A') + '”', 'Common angle'],
      ['Criterion used with two equal angles', 'The first']
    ],
    med: [
      [m('AB = 8, AC = 12, BC = 15') + ': ' + m('BD'), m('6')],
      ['Same: ' + m('DC'), m('9')],
      [m('AB = 10, AC = 15, BD = 4') + ': ' + m('DC'), m('6')],
      ['Prove ' + m('AC² = AH · AB'), 'Similar triangles, then cross-multiply'],
      ['Prove ' + m('CH² = AH · HB'), m('△ACH ∼ △CBH')],
      [m('AD · AB = AE · AC') + ' with ' + m('∠A') + ' common gives', m('△ADE ∼ △ACB')],
      ['A bisector divides ' + m('BC = 21') + ' in ' + m('3 : 4') + ': the parts', m('9') + ' and ' + m('12')]
    ],
    hard: [
      [m('AB = 6, AC = 8, BC = 7') + ': ' + m('BD'), m('3')],
      ['A triangle with a bisector cutting ' + m('BC') + ' into ' + m('4') + ' and ' + m('6') + ', ' + m('AB = 10') + ': ' + m('AC'), m('15')],
      ['Prove that ' + m('DE ∥ BC') + ' follows from ' + m(f('AD', 'AB') + ' = ' + f('AE', 'AC')), 'Second criterion, then equal corresponding angles'],
      ['Two chords ' + m('AB') + ' and ' + m('CD') + ' meet at ' + m('P') + ': prove ' + m('PA · PB = PC · PD'), m('△APC ∼ △DPB')],
      ['In that figure ' + m('PA = 4, PB = 9, PC = 6') + ': ' + m('PD'), m('6')],
      ['A tangent ' + m('PT') + ' and a secant ' + m('PAB') + ': prove ' + m('PT² = PA · PB'), m('△PTA ∼ △PBT')],
      [m('PA = 4, PB = 9') + ': ' + m('PT'), m('6')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Set every proof out in two columns — statement and reason.',
  homework: [
    'Prove ' + m('BC² = BH · AB') + ' in the altitude figure.',
    'In ' + m('△ABC') + ', ' + m('AB = 9') + ', ' + m('AC = 12') + ', ' + m('BC = 14') + '. Find the parts into which the bisector from ' + m('A') + ' divides ' + m('BC') + '.',
    'Prove that a line dividing two sides of a triangle proportionally is parallel to the third.',
    'Two chords meet inside a circle at ' + m('P') + '. Prove ' + m('PA · PB = PC · PD') + '.',
    'In that figure ' + m('PA = 3') + ', ' + m('PB = 8') + ', ' + m('PC = 4') + '. Find ' + m('PD') + '.'
  ]
});

/* ============================== 9 ============================== */
G9_GEO.push({
  id: 'g9-09', stream: 'geo', grade: 9, quarter: 1, lessons: '10', hours: 1,
  title: 'Transformations of the plane — movement and translation',
  subtitle: 'A second way to think about figures: not as sets of points but as things that can be moved.',
  uz: 'Geometriya 9, §8', uzPage: 'pp. 41–45',
  cam: 'IGX 3.1 extension', camPage: 'Core & Extended, pp. 40–46', wb: 'Exercise 3.1',
  objectives: [
    'Define a transformation of the plane and a movement (isometry).',
    'Describe a translation by a vector and find images of points.',
    'Know what a movement preserves and what it does not.',
    'Compose two translations.'
  ],
  terms: [
    ['Transformation', 'Almashtirish', 'Преобразование'],
    ['Movement', 'Harakat', 'Движение'],
    ['Isometry', 'Izometriya', 'Изометрия'],
    ['Translation', 'Parallel ko‘chirish', 'Параллельный перенос'],
    ['Image', 'Tasvir', 'Образ'],
    ['Pre-image', 'Asl nusxa', 'Прообраз'],
    ['Vector', 'Vektor', 'Вектор'],
    ['Composition', 'Kompozitsiya', 'Композиция']
  ],
  timing: [[10, 'What a transformation is'], [14, 'Translation'], [10, 'What is preserved'], [6, 'Homework']],
  sections: [
    {
      h: 'What a transformation is',
      html: `<p>A <b>transformation</b> of the plane is a rule that sends every point ${m('P')} to exactly
      one point ${m('P′')}, its <b>image</b>. A transformation that preserves distance is a
      <b>movement</b> — in Cambridge, an <b>isometry</b>.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Transformation</th><th>A movement?</th><th>Effect</th></tr></thead>
      <tbody>
        <tr><td>translation</td><td>yes</td><td>slides the figure</td></tr>
        <tr><td>axial symmetry (reflection)</td><td>yes</td><td>flips it</td></tr>
        <tr><td>rotation</td><td>yes</td><td>turns it</td></tr>
        <tr><td>homothety (enlargement)</td><td>no</td><td>resizes it</td></tr>
      </tbody></table></div>
      {{fig:transformations:The four transformations of the Grade 9 course — three preserve size, one does not.}}
      <div class="keybox"><div class="klabel">Movements produce congruent figures, homothety similar ones</div>
      That single sentence organises the whole chapter: the first three lessons are about congruence in
      motion, the last three about similarity in motion.</div>`
    },
    {
      h: 'Translation',
      html: `<p>A <b>translation</b> by the vector ${m('a⃗(m, n)')} sends ${m('P(x, y)')} to</p>
      ${eq(m('P′(x + m, y + n)'), true)}
      <p>Every point moves the same distance in the same direction, so ${m('PP′')} is the same segment
      for every ${m('P')} — which is exactly what a vector is.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Point</th><th>Vector</th><th>Image</th></tr></thead>
      <tbody>
        <tr><td class="m">A(1, 2)</td><td class="m">(3, −1)</td><td class="m">A′(4, 1)</td></tr>
        <tr><td class="m">B(−2, 5)</td><td class="m">(3, −1)</td><td class="m">B′(1, 4)</td></tr>
        <tr><td class="m">C(0, 0)</td><td class="m">(3, −1)</td><td class="m">C′(3, −1)</td></tr>
      </tbody></table></div>
      <p>Composing two translations gives a third: translate by ${m('(3, −1)')} then by ${m('(1, 4)')}
      and the result is a translation by ${m('(4, 3)')} — the vectors add.</p>
      <div class="warn"><span class="wl">A translation has no fixed points</span>
      Unless the vector is zero, nothing stays where it was. A rotation fixes its centre and a
      reflection fixes its axis; a translation fixes nothing — a fact that distinguishes it at once.</div>`
    },
    {
      h: 'What is preserved',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Preserved by a movement</th><th>Not preserved</th></tr></thead>
      <tbody>
        <tr><td>distances</td><td>position</td></tr>
        <tr><td>angles</td><td>orientation (by a reflection)</td></tr>
        <tr><td>areas</td><td>—</td></tr>
        <tr><td>parallelism</td><td>—</td></tr>
        <tr><td>straightness</td><td>—</td></tr>
      </tbody></table></div>
      <p>Because distances are preserved, a figure and its image under a movement are <b>congruent</b>.
      Under a homothety they are only similar — angles survive but distances are multiplied by
      ${m('k')}.</p>
      <div class="keybox"><div class="klabel">Cambridge asks for a full description</div>
      “A translation” is not an answer; “a translation by the vector ${m('(3, −1)')}” is. Each type of
      transformation has its own required data: a vector, an axis, a centre and angle, or a centre and
      a scale factor.</div>`
    }
  ],
  examples: [
    {
      q: 'Translate ' + m('△ABC') + ' with ' + m('A(1, 2)') + ', ' + m('B(4, 2)') + ', ' + m('C(1, 6)') + ' by ' + m('(3, −1)') + '.',
      steps: [
        [m('A′(1 + 3, 2 − 1) = A′(4, 1)'), ''],
        [m('B′(7, 1)'), ''],
        [m('C′(4, 5)'), ''],
        ['The image is congruent to the original.', 'A movement.']
      ],
      ans: m('A′(4, 1), B′(7, 1), C′(4, 5)')
    },
    {
      q: 'A translation sends ' + m('P(2, 5)') + ' to ' + m('P′(−1, 9)') + '. Find its vector, and the image of ' + m('Q(4, 0)') + '.',
      steps: [
        [m('m = −1 − 2 = −3'), ''],
        [m('n = 9 − 5 = 4'), 'Vector ' + m('(−3, 4)') + '.'],
        [m('Q′(4 − 3, 0 + 4)'), ''],
        [m('Q′(1, 4)'), '']
      ],
      ans: 'Vector ' + m('(−3, 4)') + '; ' + m('Q′(1, 4)')
    },
    {
      q: 'Translate by ' + m('(3, −1)') + ' and then by ' + m('(1, 4)') + '. Describe the single transformation that does the same.',
      steps: [
        ['Each point gains ' + m('3') + ' then ' + m('1') + ' in ' + m('x') + '.', ''],
        ['And loses ' + m('1') + ' then gains ' + m('4') + ' in ' + m('y') + '.', ''],
        ['Total: ' + m('(4, 3)') + '.', 'The vectors add.'],
        ['A translation by ' + m('(4, 3)') + '.', 'Full description.']
      ],
      ans: 'A translation by ' + m('(4, 3)')
    }
  ],
  modelNote: 'Slide a cut-out triangle across squared paper without turning it; every vertex traces the same arrow, and the vector is that arrow.',
  interactive: {
    type: 'transform',
    title: 'Slide the figure',
    hint: 'Change the vector and watch every point move alike.'
  },
  quiz: [
    { q: 'A movement preserves:', a: ['position', 'distance', 'colour', 'nothing'], c: 1, why: 'That is the definition.' },
    { q: 'A translation is described by:', a: ['an axis', 'a centre', 'a vector', 'a scale factor'], c: 2, why: 'Direction and distance.' },
    { q: m('P(1, 2)') + ' translated by ' + m('(3, −1)') + ':', a: [m('(4, 1)'), m('(3, 1)'), m('(4, 3)'), m('(−2, 3)')], c: 0, why: 'Add the components.' },
    { q: 'A translation fixes:', a: ['one point', 'a line', 'nothing', 'everything'], c: 2, why: 'Unless the vector is zero.' },
    { q: 'Two translations compose into:', a: ['a rotation', 'a reflection', 'a translation', 'nothing'], c: 2, why: 'The vectors add.' },
    { q: 'A homothety is:', a: ['a movement', 'not a movement', 'a reflection', 'a translation'], c: 1, why: 'It changes distances.' }
  ],
  practice: {
    easy: [
      [m('(1, 2)') + ' by ' + m('(3, −1)'), m('(4, 1)')],
      [m('(0, 0)') + ' by ' + m('(3, −1)'), m('(3, −1)')],
      [m('(−2, 5)') + ' by ' + m('(3, −1)'), m('(1, 4)')],
      [m('(4, 2)') + ' by ' + m('(−1, 3)'), m('(3, 5)')],
      ['Does a translation preserve area?', 'Yes'],
      ['Does a translation have a fixed point?', 'No'],
      ['A translation is described by', 'A vector']
    ],
    med: [
      [m('P(2,5) → P′(−1,9)') + ': the vector', m('(−3, 4)')],
      ['Same vector applied to ' + m('Q(4, 0)'), m('(1, 4)')],
      [m('(3, −1)') + ' then ' + m('(1, 4)'), m('(4, 3)')],
      [m('(5, 2)') + ' then ' + m('(−5, −2)'), 'The identity'],
      ['Translate ' + m('A(1,2), B(4,2), C(1,6)') + ' by ' + m('(3, −1)'), m('(4,1), (7,1), (4,5)')],
      ['The image triangle is', 'Congruent to the original'],
      ['Which of the four is not a movement?', 'Homothety']
    ],
    hard: [
      ['A translation maps ' + m('(1, 1)') + ' to ' + m('(4, 5)') + ': the length of the vector', m('5')],
      ['The image of the line ' + m('y = 2x') + ' under ' + m('(0, 3)'), m('y = 2x + 3')],
      ['The image of ' + m('y = x²') + ' under ' + m('(2, 0)'), m('y = (x − 2)²')],
      ['A translation maps the circle ' + m('x² + y² = 9') + ' by ' + m('(1, −2)'), m('(x−1)² + (y+2)² = 9')],
      ['Composing ' + m('n') + ' translations by ' + m('(1, 1)'), m('(n, n)')],
      ['Two translations commute?', 'Yes — vector addition is commutative'],
      ['A movement that fixes exactly one point is a', 'Rotation']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Give a full description of every transformation — the type <i>and</i> its data.',
  homework: [
    'Translate ' + m('A(2, 1)') + ', ' + m('B(5, 1)') + ', ' + m('C(2, 5)') + ' by ' + m('(−2, 3)') + '.',
    'A translation sends ' + m('(3, 4)') + ' to ' + m('(0, 8)') + '. Find its vector and the image of ' + m('(1, 1)') + '.',
    'Compose translations by ' + m('(2, −3)') + ' and ' + m('(−5, 1)') + '.',
    'Find the image of the line ' + m('y = 3x − 1') + ' under a translation by ' + m('(0, 4)') + '.',
    'State what a movement preserves and give one thing it does not.'
  ]
});

/* ============================== 10 ============================== */
G9_GEO.push({
  id: 'g9-10', stream: 'geo', grade: 9, quarter: 1, lessons: '11', hours: 1,
  title: 'Axial symmetry',
  subtitle: 'Reflection in a line — the movement that reverses orientation, and the only one that does.',
  uz: 'Geometriya 9, §9', uzPage: 'pp. 46–50',
  cam: 'Extension beyond IGX', camPage: 'Core & Extended, pp. 46–50', wb: 'Exercise 3.1',
  objectives: [
    'Construct the image of a point and a figure under reflection in a line.',
    'Reflect a point in the axes and in the lines y = x and y = −x.',
    'Find the axes of symmetry of a given figure.',
    'Know that reflection reverses orientation but preserves distance.'
  ],
  terms: [
    ['Axial symmetry', 'O‘qqa nisbatan simmetriya', 'Осевая симметрия'],
    ['Reflection', 'Simmetriya', 'Отражение'],
    ['Axis of symmetry', 'Simmetriya o‘qi', 'Ось симметрии'],
    ['Perpendicular bisector', 'O‘rta perpendikulyar', 'Серединный перпендикуляр'],
    ['Orientation', 'Yo‘nalish', 'Ориентация'],
    ['Fixed point', 'Qo‘zg‘almas nuqta', 'Неподвижная точка'],
    ['Mirror line', 'Ko‘zgu chizig‘i', 'Зеркальная линия'],
    ['Symmetric figure', 'Simmetrik shakl', 'Симметричная фигура']
  ],
  timing: [[10, 'The construction'], [14, 'Reflection in the coordinate lines'], [10, 'Axes of symmetry'], [6, 'Homework']],
  sections: [
    {
      h: 'The construction',
      html: `<p>To reflect ${m('P')} in the line ${m('ℓ')}: drop a perpendicular from ${m('P')} to
      ${m('ℓ')}, and continue it the same distance on the other side. The line ${m('ℓ')} is the
      <b>perpendicular bisector</b> of ${m('PP′')}.</p>
      {{fig:perpBisector:The axis is the perpendicular bisector of every segment joining a point to its image.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Property</th><th>Statement</th></tr></thead>
      <tbody>
        <tr><td>fixed points</td><td>every point of ${m('ℓ')}</td></tr>
        <tr><td>distance</td><td>preserved</td></tr>
        <tr><td>angles</td><td>preserved in size</td></tr>
        <tr><td>orientation</td><td><b>reversed</b></td></tr>
        <tr><td>applied twice</td><td>the identity</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A reflection is its own inverse</div>
      Reflecting twice in the same line returns every point to where it started. No other transformation
      of the chapter has that property, and it is a useful check on any construction.</div>`
    },
    {
      h: 'Reflection in the coordinate lines',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Axis</th><th class="m">P(x, y) ↦</th><th>Example ${m('(3, 5)')}</th></tr></thead>
      <tbody>
        <tr><td class="m">Ox</td><td class="m">(x, −y)</td><td class="m">(3, −5)</td></tr>
        <tr><td class="m">Oy</td><td class="m">(−x, y)</td><td class="m">(−3, 5)</td></tr>
        <tr><td class="m">y = x</td><td class="m">(y, x)</td><td class="m">(5, 3)</td></tr>
        <tr><td class="m">y = −x</td><td class="m">(−y, −x)</td><td class="m">(−5, −3)</td></tr>
        <tr><td class="m">x = a</td><td class="m">(2a − x, y)</td><td class="m">a = 1: (−1, 5)</td></tr>
        <tr><td class="m">y = b</td><td class="m">(x, 2b − y)</td><td class="m">b = 2: (3, −1)</td></tr>
      </tbody></table></div>
      <p>The last two rows contain the first four as special cases: ${m('a = 0')} gives reflection in
      ${m('Oy')}, and ${m('b = 0')} gives reflection in ${m('Ox')}.</p>
      <div class="warn"><span class="wl">${m('y = x')} swaps the coordinates; it does not negate them</span>
      ${m('(3, 5) ↦ (5, 3)')}, not ${m('(−3, −5)')}. Reflecting a graph in ${m('y = x')} is exactly how
      an inverse function is drawn, which is why this row matters beyond geometry.</div>`
    },
    {
      h: 'Axes of symmetry',
      html: `<p>A figure has an <b>axis of symmetry</b> if reflecting it in that line leaves it
      unchanged.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Figure</th><th>Axes</th></tr></thead>
      <tbody>
        <tr><td>an isosceles triangle</td><td class="m">1</td></tr>
        <tr><td>an equilateral triangle</td><td class="m">3</td></tr>
        <tr><td>a rectangle</td><td class="m">2</td></tr>
        <tr><td>a rhombus</td><td class="m">2</td></tr>
        <tr><td>a square</td><td class="m">4</td></tr>
        <tr><td>a regular ${m('n')}-gon</td><td class="m">n</td></tr>
        <tr><td>a circle</td><td>infinitely many</td></tr>
        <tr><td>a parallelogram (not a rhombus)</td><td class="m">0</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A parallelogram has no axis of symmetry</span>
      Its diagonals are not axes: reflecting in a diagonal does not map the figure to itself. It has
      <b>central</b> symmetry instead — which is the next lesson.</div>`
    }
  ],
  examples: [
    {
      q: 'Reflect ' + m('A(3, 5)') + ' in ' + m('Ox') + ', in ' + m('Oy') + ' and in ' + m('y = x') + '.',
      steps: [
        [m('Ox') + ': negate ' + m('y') + ' — ' + m('(3, −5)') + '.', ''],
        [m('Oy') + ': negate ' + m('x') + ' — ' + m('(−3, 5)') + '.', ''],
        [m('y = x') + ': swap — ' + m('(5, 3)') + '.', ''],
        ['Each image is the same distance from the axis.', '']
      ],
      ans: m('(3, −5), (−3, 5), (5, 3)')
    },
    {
      q: 'Reflect ' + m('P(3, 5)') + ' in the line ' + m('x = 1') + '.',
      steps: [
        ['Distance from the line: ' + m('3 − 1 = 2') + '.', ''],
        ['The image is ' + m('2') + ' on the other side.', ''],
        [m('1 − 2 = −1'), ''],
        [m('P′(−1, 5)'), m('y') + ' is unchanged.']
      ],
      ans: m('(−1, 5)')
    },
    {
      q: 'How many axes of symmetry has a rhombus that is not a square?',
      steps: [
        ['Its two diagonals are perpendicular bisectors of each other.', ''],
        ['Reflecting in either diagonal maps the rhombus to itself.', ''],
        ['The lines through the midpoints of opposite sides do not.', ''],
        ['Two.', '']
      ],
      ans: m('2')
    }
  ],
  modelNote: 'Fold a paper figure along a proposed axis; if the two halves coincide it is an axis, and if they do not, the class sees exactly why.',
  interactive: {
    type: 'transform',
    title: 'Reflect in a line',
    hint: 'Drag the axis and watch the image follow.'
  },
  quiz: [
    { q: 'The axis is the ______ of ' + m('PP′') + ':', a: ['midpoint', 'perpendicular bisector', 'parallel', 'extension'], c: 1, why: 'By construction.' },
    { q: 'Reflection preserves:', a: ['orientation', 'distance', 'position', 'nothing'], c: 1, why: 'It is a movement.' },
    { q: 'Reflection reverses:', a: ['distance', 'angle size', 'orientation', 'area'], c: 2, why: 'A mirror image.' },
    { q: m('(3, 5)') + ' in ' + m('y = x') + ':', a: [m('(−3, −5)'), m('(5, 3)'), m('(3, −5)'), m('(−5, −3)')], c: 1, why: 'Swap the coordinates.' },
    { q: 'A square has how many axes?', a: [m('2'), m('3'), m('4'), m('8')], c: 2, why: 'Two diagonals, two midlines.' },
    { q: 'A parallelogram has how many axes?', a: [m('0'), m('1'), m('2'), m('4')], c: 0, why: 'Its diagonals are not axes.' }
  ],
  practice: {
    easy: [
      [m('(3, 5)') + ' in ' + m('Ox'), m('(3, −5)')],
      [m('(3, 5)') + ' in ' + m('Oy'), m('(−3, 5)')],
      [m('(3, 5)') + ' in ' + m('y = x'), m('(5, 3)')],
      [m('(−2, 7)') + ' in ' + m('Ox'), m('(−2, −7)')],
      ['Axes of an equilateral triangle', m('3')],
      ['Axes of a rectangle', m('2')],
      ['Axes of a circle', 'Infinitely many']
    ],
    med: [
      [m('(3, 5)') + ' in ' + m('x = 1'), m('(−1, 5)')],
      [m('(3, 5)') + ' in ' + m('y = 2'), m('(3, −1)')],
      [m('(3, 5)') + ' in ' + m('y = −x'), m('(−5, −3)')],
      ['Axes of a rhombus (not a square)', m('2')],
      ['Axes of a parallelogram', m('0')],
      ['Axes of a regular hexagon', m('6')],
      ['Reflecting twice in the same line gives', 'The identity']
    ],
    hard: [
      ['The image of ' + m('y = 2x + 1') + ' in ' + m('Ox'), m('y = −2x − 1')],
      ['The image of ' + m('y = 2x + 1') + ' in ' + m('Oy'), m('y = −2x + 1')],
      ['The image of ' + m('y = 2x + 1') + ' in ' + m('y = x'), m('y = ' + f('x − 1', '2'))],
      ['The image of ' + m('y = x²') + ' in ' + m('Ox'), m('y = −x²')],
      ['Reflect ' + m('(a, b)') + ' in ' + m('x = c'), m('(2c − a, b)')],
      ['Two reflections in parallel lines ' + m('d') + ' apart give', 'A translation of ' + m('2d')],
      ['Two reflections in perpendicular lines give', 'A half-turn about their intersection']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw the axis and the perpendicular for every construction.',
  homework: [
    'Reflect ' + m('(4, −3)') + ' in ' + m('Ox') + ', ' + m('Oy') + ', ' + m('y = x') + ' and ' + m('y = −x') + '.',
    'Reflect ' + m('(5, 2)') + ' in the line ' + m('x = 3') + '.',
    'How many axes of symmetry has a regular octagon?',
    'Find the image of the line ' + m('y = 3x − 2') + ' under reflection in ' + m('Oy') + '.',
    'Explain why a parallelogram has no axis of symmetry.'
  ]
});

/* ============================== 11 ============================== */
G9_GEO.push({
  id: 'g9-11', stream: 'geo', grade: 9, quarter: 1, lessons: '12', hours: 1,
  title: 'Central symmetry and rotation',
  subtitle: 'Turning about a point — and the half-turn, which is the case worth knowing by heart.',
  uz: 'Geometriya 9, §10', uzPage: 'pp. 51–56',
  cam: 'Extension beyond IGX', camPage: 'Core & Extended, pp. 46–50', wb: 'Exercise 3.1',
  objectives: [
    'Define central symmetry as a half-turn about a point.',
    'Describe a rotation by its centre, angle and direction.',
    'Find images under a rotation of 90°, 180° or 270° about the origin.',
    'Identify figures with central symmetry and with rotational symmetry of order n.'
  ],
  terms: [
    ['Central symmetry', 'Markazga nisbatan simmetriya', 'Центральная симметрия'],
    ['Centre of symmetry', 'Simmetriya markazi', 'Центр симметрии'],
    ['Rotation', 'Burish', 'Поворот'],
    ['Angle of rotation', 'Burilish burchagi', 'Угол поворота'],
    ['Direction', 'Yo‘nalish', 'Направление'],
    ['Half-turn', 'Yarim burilish', 'Поворот на 180°'],
    ['Rotational symmetry', 'Burilish simmetriyasi', 'Поворотная симметрия'],
    ['Order of symmetry', 'Simmetriya tartibi', 'Порядок симметрии']
  ],
  timing: [[10, 'Central symmetry'], [14, 'Rotation'], [10, 'Rotational symmetry'], [6, 'Homework']],
  sections: [
    {
      h: 'Central symmetry',
      html: `<p>The image of ${m('P')} under central symmetry with centre ${m('O')} is the point
      ${m('P′')} on the line ${m('PO')} with ${m('OP′ = OP')} and ${m('O')} between them: ${m('O')} is
      the <b>midpoint</b> of ${m('PP′')}.</p>
      ${eq(m('P(x, y) ↦ P′(−x, −y)') + '   for the centre at the origin', true)}
      {{fig:transformations:A half-turn about O — every point goes through the centre to the far side.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Figure</th><th>Centre of symmetry?</th></tr></thead>
      <tbody>
        <tr><td>a parallelogram</td><td>yes — the intersection of the diagonals</td></tr>
        <tr><td>a circle</td><td>yes — its centre</td></tr>
        <tr><td>a regular hexagon</td><td>yes</td></tr>
        <tr><td>an equilateral triangle</td><td><b>no</b></td></tr>
        <tr><td>a regular pentagon</td><td><b>no</b></td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Central symmetry is a rotation of ${m('180°')}</div>
      It is not a separate kind of transformation; it is the special case of a rotation that is worth its
      own name because it appears so often — in the parallelogram, in the hyperbola, in every odd
      function.</div>`
    },
    {
      h: 'Rotation',
      html: `<p>A <b>rotation</b> needs three pieces of data: a <b>centre</b>, an <b>angle</b> and a
      <b>direction</b> (anticlockwise positive, as in trigonometry).</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Rotation about ${m('O')}</th><th class="m">(x, y) ↦</th><th>Example ${m('(3, 1)')}</th></tr></thead>
      <tbody>
        <tr><td class="m">90° anticlockwise</td><td class="m">(−y, x)</td><td class="m">(−1, 3)</td></tr>
        <tr><td class="m">180°</td><td class="m">(−x, −y)</td><td class="m">(−3, −1)</td></tr>
        <tr><td class="m">270° anticlockwise</td><td class="m">(y, −x)</td><td class="m">(1, −3)</td></tr>
        <tr><td class="m">360°</td><td class="m">(x, y)</td><td class="m">(3, 1)</td></tr>
      </tbody></table></div>
      <p>A rotation of ${m('90°')} clockwise is the same as ${m('270°')} anticlockwise, so the third row
      answers both.</p>
      <div class="warn"><span class="wl">Give all three pieces of data</span>
      “A rotation of ${m('90°')}” is incomplete: about which point, and which way? Cambridge marks the
      description, and two of the three marks are for the centre and the direction.</div>`
    },
    {
      h: 'Rotational symmetry',
      html: `<p>A figure has <b>rotational symmetry of order ${m('n')}</b> if it maps onto itself
      ${m('n')} times in a full turn — that is, under a rotation of ${m(f('360°', 'n'))}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Figure</th><th>Order</th><th>Smallest angle</th></tr></thead>
      <tbody>
        <tr><td>an equilateral triangle</td><td class="m">3</td><td class="m">120°</td></tr>
        <tr><td>a square</td><td class="m">4</td><td class="m">90°</td></tr>
        <tr><td>a rectangle</td><td class="m">2</td><td class="m">180°</td></tr>
        <tr><td>a parallelogram</td><td class="m">2</td><td class="m">180°</td></tr>
        <tr><td>a regular ${m('n')}-gon</td><td class="m">n</td><td class="m">${f('360°', 'n')}</td></tr>
        <tr><td>a circle</td><td>infinite</td><td>any angle</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Order ${m('2')} and central symmetry are the same thing</div>
      A figure has a centre of symmetry exactly when its rotational symmetry has even order — the
      half-turn is then one of its symmetries. That is why the parallelogram and the regular hexagon
      have centres and the equilateral triangle and regular pentagon do not.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the image of ' + m('(3, 1)') + ' under a rotation of ' + m('90°') + ' anticlockwise about the origin.',
      steps: [
        ['The rule is ' + m('(x, y) ↦ (−y, x)') + '.', ''],
        [m('x = 3, y = 1'), ''],
        [m('(−1, 3)'), ''],
        ['Check: both points are ' + m(sr('10')) + ' from the origin ✓', '']
      ],
      ans: m('(−1, 3)')
    },
    {
      q: 'A point ' + m('P(4, −2)') + ' is mapped to ' + m('P′(−4, 2)') + '. Describe the transformation fully.',
      steps: [
        ['Both coordinates are negated.', ''],
        ['That is a half-turn about the origin.', ''],
        ['Equivalently, central symmetry in ' + m('O') + '.', ''],
        ['A rotation of ' + m('180°') + ' about ' + m('(0, 0)') + '.', 'Direction is irrelevant at ' + m('180°') + '.']
      ],
      ans: 'A rotation of ' + m('180°') + ' about the origin'
    },
    {
      q: 'Give the order of rotational symmetry and the number of axes for a regular hexagon.',
      steps: [
        ['A regular ' + m('n') + '-gon has order ' + m('n') + '.', ''],
        ['Order ' + m('6') + ', smallest angle ' + m('60°') + '.', ''],
        ['It has ' + m('n = 6') + ' axes of symmetry.', ''],
        ['Order ' + m('6') + ' is even, so it also has a centre.', '']
      ],
      ans: 'Order ' + m('6') + ', ' + m('6') + ' axes, and a centre'
    }
  ],
  modelNote: 'Pin a cut-out shape at a point and turn it; the class counts how many times it looks the same in one full turn, and that count is the order.',
  interactive: {
    type: 'transform',
    title: 'Turn about a point',
    hint: 'Change the centre and the angle separately.'
  },
  quiz: [
    { q: 'Central symmetry is a rotation of:', a: [m('90°'), m('180°'), m('270°'), m('360°')], c: 1, why: 'A half-turn.' },
    { q: m('(x, y)') + ' under a half-turn about ' + m('O') + ':', a: [m('(−x, y)'), m('(x, −y)'), m('(−x, −y)'), m('(y, x)')], c: 2, why: 'Both negated.' },
    { q: m('90°') + ' anticlockwise sends ' + m('(3, 1)') + ' to:', a: [m('(1, 3)'), m('(−1, 3)'), m('(1, −3)'), m('(−3, −1)')], c: 1, why: m('(x, y) ↦ (−y, x)') + '.' },
    { q: 'A rotation is described by:', a: ['a vector', 'an axis', 'centre, angle and direction', 'a scale factor'], c: 2, why: 'All three.' },
    { q: 'A regular pentagon has a centre of symmetry:', a: ['yes', 'no', 'sometimes', 'five of them'], c: 1, why: 'Its order is odd.' },
    { q: 'A parallelogram has rotational symmetry of order:', a: [m('1'), m('2'), m('3'), m('4')], c: 1, why: 'The half-turn.' }
  ],
  practice: {
    easy: [
      [m('(3, 1)') + ' under ' + m('180°'), m('(−3, −1)')],
      [m('(3, 1)') + ' under ' + m('90°') + ' anticlockwise', m('(−1, 3)')],
      [m('(3, 1)') + ' under ' + m('270°') + ' anticlockwise', m('(1, −3)')],
      [m('(−2, 5)') + ' under ' + m('180°'), m('(2, −5)')],
      ['Order of a square', m('4')],
      ['Order of an equilateral triangle', m('3')],
      ['Centre of symmetry of a parallelogram', 'Where the diagonals meet']
    ],
    med: [
      [m('(4, −2) → (−4, 2)') + ': the transformation', 'Half-turn about ' + m('O')],
      ['Order and axes of a regular hexagon', m('6') + ' and ' + m('6')],
      ['Order and axes of a rectangle', m('2') + ' and ' + m('2')],
      ['Has a regular pentagon a centre?', 'No'],
      ['Has a regular hexagon a centre?', 'Yes'],
      [m('90°') + ' clockwise is the same as', m('270°') + ' anticlockwise'],
      ['Smallest rotation for a regular octagon', m('45°')]
    ],
    hard: [
      ['The image of ' + m('y = 2x') + ' under a half-turn about ' + m('O'), m('y = 2x') + ' — unchanged'],
      ['The image of ' + m('y = x²') + ' under a half-turn about ' + m('O'), m('y = −x²')],
      ['The image of ' + m('(1, 2)') + ' under ' + m('90°') + ' anticlockwise about ' + m('(1, 1)'), m('(0, 1)')],
      ['Two half-turns about different centres give', 'A translation'],
      ['A rotation of ' + m('120°') + ' three times gives', 'The identity'],
      ['Which quadrilaterals have both an axis and a centre?', 'Rectangle, rhombus, square'],
      ['Order of rotational symmetry of the letter S', m('2')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Give centre, angle and direction in every description of a rotation.',
  homework: [
    'Find the image of ' + m('(5, −2)') + ' under rotations of ' + m('90°') + ', ' + m('180°') + ' and ' + m('270°') + ' anticlockwise about the origin.',
    'A point ' + m('(2, 7)') + ' maps to ' + m('(−2, −7)') + '. Describe the transformation fully.',
    'Give the order of rotational symmetry and the number of axes for a regular decagon.',
    'Which of the special quadrilaterals have a centre of symmetry?',
    'Find the image of ' + m('(3, 4)') + ' under a half-turn about ' + m('(1, 1)') + '.'
  ]
});

/* ============================== 12 ============================== */
G9_GEO.push({
  id: 'g9-12', stream: 'geo', grade: 9, quarter: 1, lessons: '13', hours: 1,
  title: 'Similarity of geometric figures',
  subtitle: 'The definition widened from polygons to any figure at all — including curved ones.',
  uz: 'Geometriya 9, §11', uzPage: 'pp. 57–60',
  cam: 'IGX 11.3', camPage: 'Core & Extended, pp. 232–236', wb: 'Exercise 11.3',
  objectives: [
    'Define similarity of arbitrary figures by a distance-scaling map.',
    'Recognise that all circles, all squares and all regular n-gons are similar.',
    'Use the k, k², k³ rule for lengths, areas and volumes.',
    'Apply similarity to scale models and maps.'
  ],
  terms: [
    ['Similarity transformation', 'O‘xshashlik almashtirishi', 'Преобразование подобия'],
    ['Figure', 'Shakl', 'Фигура'],
    ['Scale factor', 'Masshtab koeffitsiyenti', 'Масштабный коэффициент'],
    ['Volume', 'Hajm', 'Объём'],
    ['Model', 'Model', 'Модель'],
    ['Map scale', 'Xarita masshtabi', 'Масштаб карты'],
    ['Enlargement', 'Kattalashtirish', 'Увеличение'],
    ['Reduction', 'Kichraytirish', 'Уменьшение']
  ],
  timing: [[10, 'The general definition'], [12, 'Which figures are always similar'], [12, 'Lengths, areas, volumes'], [6, 'Homework']],
  sections: [
    {
      h: 'The general definition',
      html: `<p>A <b>similarity transformation</b> with coefficient ${m('k > 0')} is a map of the plane
      such that for every pair of points,</p>
      ${eq(m('P′Q′ = k · PQ'), true)}
      <p>Two figures are <b>similar</b> if some similarity transformation carries one onto the other.
      For polygons this reduces to the definition of the second lesson; but the new definition also
      applies to circles, arcs, sectors and any curved figure at all.</p>
      <div class="keybox"><div class="klabel">${m('k = 1')} gives the movements</div>
      A similarity with ${m('k = 1')} preserves every distance — it is a movement. So congruence is the
      special case of similarity in which nothing is resized, and the previous three lessons were about
      that case.</div>`
    },
    {
      h: 'Which figures are always similar',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Pair</th><th>Always similar?</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td>any two circles</td><td>yes</td><td>a circle is determined by its radius alone</td></tr>
        <tr><td>any two squares</td><td>yes</td><td>determined by the side</td></tr>
        <tr><td>any two regular ${m('n')}-gons (same ${m('n')})</td><td>yes</td><td>angles fixed, sides equal</td></tr>
        <tr><td>any two equilateral triangles</td><td>yes</td><td>the case ${m('n = 3')}</td></tr>
        <tr><td>any two rectangles</td><td><b>no</b></td><td>the ratio of the sides can differ</td></tr>
        <tr><td>any two isosceles triangles</td><td><b>no</b></td><td>the apex angle can differ</td></tr>
        <tr><td>any two sectors of the same angle</td><td>yes</td><td>the shape depends only on the angle</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">“Same shape” must mean “one shape parameter”</span>
      A circle has no shape parameter at all, a regular ${m('n')}-gon none once ${m('n')} is fixed, but a
      rectangle has one — the ratio of its sides — and that is exactly why two rectangles need not be
      similar.</div>`
    },
    {
      h: 'Lengths, areas, volumes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Quantity</th><th>Multiplied by</th><th>Example, ${m('k = 3')}</th></tr></thead>
      <tbody>
        <tr><td>length</td><td class="m">k</td><td class="m">×3</td></tr>
        <tr><td>area</td><td class="m">k²</td><td class="m">×9</td></tr>
        <tr><td>volume</td><td class="m">k³</td><td class="m">×27</td></tr>
      </tbody></table></div>
      {{fig:similarSolids:Doubling every length multiplies the surface by four and the volume by eight.}}
      <p><b>Example.</b> A model car is built at scale ${m('1 : 20')}. Its surface needs ${m(f('1', '400'))}
      of the paint and it holds ${m(f('1', '8000'))} of the volume — which is why small models are so
      much lighter than they look.</p>
      <div class="warn"><span class="wl">Going backwards needs a root</span>
      Given the ratio of areas, ${m('k')} is the <b>square root</b>; given the ratio of volumes, the
      <b>cube root</b>. Areas ${m('9 : 25')} give ${m('k = ' + f('3', '5'))}; volumes ${m('8 : 27')} give
      ${m('k = ' + f('2', '3'))}.</div>`
    }
  ],
  examples: [
    {
      q: 'Two similar solids have volumes ' + m('54') + ' and ' + m('128') + '. Find the ratio of their surface areas.',
      steps: [
        [m('k³ = ' + f('128', '54') + ' = ' + f('64', '27')), ''],
        [m('k = ' + f('4', '3')), 'Cube root.'],
        ['Areas scale by ' + m('k²') + '.', ''],
        [m('k² = ' + f('16', '9')) + ', so ' + m('16 : 9') + '.', '']
      ],
      ans: m('16 : 9')
    },
    {
      q: 'A map has scale ' + m('1 : 25 000') + '. A lake covers ' + m('8 cm²') + ' on the map. Find its real area in km².',
      steps: [
        [m('k = 25 000') + ' for lengths.', ''],
        ['Areas scale by ' + m('k² = 6.25 × 10⁸') + '.', ''],
        [m('8 × 6.25 × 10⁸ = 5 × 10⁹ cm²'), ''],
        [m('= 5 × 10⁵ m² = 0.5 km²'), '']
      ],
      ans: m('0.5 km²')
    },
    {
      q: 'Are all rectangles similar? Justify with an example.',
      steps: [
        ['All angles are ' + m('90°') + ' in every rectangle.', ''],
        ['But a ' + m('1 × 2') + ' and a ' + m('1 × 3') + ' rectangle:', ''],
        [m(f('1', '1') + ' = 1') + ' while ' + m(f('2', '3')) + ' — not equal.', ''],
        ['No. Their side ratios differ.', '']
      ],
      ans: 'No'
    }
  ],
  modelNote: 'Show a matchbox and a shipping container photograph at the same apparent size; ask what would happen to weight if one really were a scaled copy of the other.',
  interactive: {
    type: 'scaleSolid',
    title: 'k, k² and k³',
    hint: 'Change k and watch the three quantities separately.'
  },
  quiz: [
    { q: 'A similarity multiplies every distance by:', a: [m('k'), m('k²'), m('k³'), m('1')], c: 0, why: 'That is the definition.' },
    { q: m('k = 1') + ' gives:', a: ['an enlargement', 'a movement', 'a reduction', 'nothing'], c: 1, why: 'Distances unchanged.' },
    { q: 'Any two circles are:', a: ['congruent', 'similar', 'equal', 'unrelated'], c: 1, why: 'One shape parameter — none.' },
    { q: 'Any two rectangles are:', a: ['similar', 'not necessarily similar', 'congruent', 'equal in area'], c: 1, why: 'The side ratio can differ.' },
    { q: 'Volumes scale by:', a: [m('k'), m('k²'), m('k³'), m('3k')], c: 2, why: 'Three dimensions.' },
    { q: 'Volumes ' + m('8 : 27') + ' give ' + m('k') + ' =', a: [m(f('8', '27')), m(f('2', '3')), m(f('4', '9')), m(f('3', '2'))], c: 1, why: 'Cube root.' }
  ],
  practice: {
    easy: [
      [m('k = 2') + ': ratio of areas', m('4')],
      [m('k = 2') + ': ratio of volumes', m('8')],
      [m('k = 3') + ': ratio of volumes', m('27')],
      ['Areas ' + m('9 : 25') + ': ' + m('k'), m('3 : 5')],
      ['Volumes ' + m('8 : 27') + ': ' + m('k'), m('2 : 3')],
      ['Are all circles similar?', 'Yes'],
      ['Are all rectangles similar?', 'No']
    ],
    med: [
      ['Volumes ' + m('54') + ' and ' + m('128') + ': ratio of areas', m('16 : 9')],
      ['A model at ' + m('1 : 20') + ': ratio of surface areas', m('1 : 400')],
      ['Same: ratio of volumes', m('1 : 8000')],
      ['Map ' + m('1 : 25 000') + ': ' + m('8 cm²') + ' in km²', m('0.5')],
      ['Areas ' + m('12') + ' and ' + m('27') + ': ' + m('k'), m('2 : 3')],
      ['Are all regular hexagons similar?', 'Yes'],
      ['Are all isosceles triangles similar?', 'No']
    ],
    hard: [
      ['Two similar cones: heights ' + m('6') + ' and ' + m('9') + ', smaller volume ' + m('24π'), m('81π')],
      ['Two similar cylinders: volumes ' + m('16') + ' and ' + m('54') + ', smaller radius ' + m('2'), m('3')],
      ['A statue ' + m('2 m') + ' tall weighs ' + m('160 kg') + '; a model ' + m('0.5 m') + ' tall', m('2.5 kg')],
      ['A map ' + m('1 : 50 000') + ': a field of ' + m('0.25 km²') + ' on the map', m('1 cm²')],
      ['Two similar solids: surface areas ' + m('50') + ' and ' + m('72') + ', ratio of volumes', m('125 : 216')],
      ['A cone is cut halfway up: the ratio of the small cone to the whole', m('1 : 8')],
      ['The ratio of the frustum to the whole cone', m('7 : 8')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Say which of ' + m('k') + ', ' + m('k²') + ' or ' + m('k³') + ' each question needs before computing.',
  homework: [
    'Two similar solids have volumes ' + m('27') + ' and ' + m('125') + '. Find the ratio of their surface areas.',
    'A model aeroplane is built at ' + m('1 : 72') + '. Find the ratio of the wing areas.',
    'A map has scale ' + m('1 : 10 000') + '. A park covers ' + m('5 cm²') + '. Find its real area in hectares.',
    'Explain why all regular pentagons are similar but not all isosceles triangles are.',
    'A cone is cut by a plane halfway up. Find the ratio of the volumes of the two pieces.'
  ]
});

/* ============================== 13 ============================== */
G9_GEO.push({
  id: 'g9-13', stream: 'geo', grade: 9, quarter: 1, lessons: '14', hours: 1,
  title: 'Properties of similar polygons',
  subtitle: 'The consequences of similarity, gathered — and the area theorem proved rather than asserted.',
  uz: 'Geometriya 9, §12', uzPage: 'pp. 61–65',
  cam: 'IGX 11.3', camPage: 'Core & Extended, pp. 232–236', wb: 'Exercise 11.3',
  objectives: [
    'Prove that the ratio of the areas of similar polygons is k².',
    'Use the ratio of perimeters, diagonals and any corresponding lengths.',
    'Solve problems in which the area ratio is given and k is required.',
    'Apply the properties to a composite figure.'
  ],
  terms: [
    ['Property', 'Xossa', 'Свойство'],
    ['Ratio of areas', 'Yuzalar nisbati', 'Отношение площадей'],
    ['Ratio of perimeters', 'Perimetrlar nisbati', 'Отношение периметров'],
    ['Diagonal', 'Diagonal', 'Диагональ'],
    ['Decomposition', 'Bo‘laklarga ajratish', 'Разбиение'],
    ['Corresponding', 'Mos', 'Соответственный'],
    ['Composite figure', 'Murakkab shakl', 'Составная фигура'],
    ['Theorem', 'Teorema', 'Теорема']
  ],
  timing: [[10, 'The list of properties'], [14, 'Proving the area theorem'], [10, 'Backwards problems'], [6, 'Homework']],
  sections: [
    {
      h: 'The list of properties',
      html: `<p>Let two polygons be similar with coefficient ${m('k')}. Then:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Quantity</th><th>Ratio</th></tr></thead>
      <tbody>
        <tr><td>corresponding sides</td><td class="m">k</td></tr>
        <tr><td>corresponding diagonals</td><td class="m">k</td></tr>
        <tr><td>corresponding heights and medians</td><td class="m">k</td></tr>
        <tr><td>perimeters</td><td class="m">k</td></tr>
        <tr><td>radii of inscribed and circumscribed circles</td><td class="m">k</td></tr>
        <tr><td>corresponding angles</td><td class="m">1</td></tr>
        <tr><td>areas</td><td class="m">k²</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">One rule, not seven</div>
      Every <b>length</b> in the figure is multiplied by ${m('k')}; every <b>angle</b> is unchanged; every
      <b>area</b> is multiplied by ${m('k²')}. The table is a list of examples of those three
      statements, not seven separate facts to learn.</div>`
    },
    {
      h: 'Proving the area theorem',
      html: `<p>For triangles the proof is immediate: ${m('S = ' + f('1', '2') + 'ah')}, and both the base
      and the height are multiplied by ${m('k')}, so ${m('S′ = ' + f('1', '2') + '(ka)(kh) = k²S')}.</p>
      {{fig:polygonDecompose:Any polygon splits into triangles; each one scales by k², so the whole does.}}
      <p>For a general polygon, cut it into triangles by diagonals from one vertex. The similar polygon
      splits into corresponding triangles, each similar with the same ${m('k')}. Adding:</p>
      ${eq(m('S′ = k²S₁ + k²S₂ + … = k²(S₁ + S₂ + …) = k²S'), true)}
      <div class="keybox"><div class="klabel">Decomposition is the standard method for area proofs</div>
      Cut into triangles, prove it for a triangle, add up. The same argument gives the area of a
      trapezium, the area of a regular polygon, and — in the limit — the area of a disc in Quarter
      III.</div>`
    },
    {
      h: 'Backwards problems',
      html: `<p>The examination favourite: the ratio of areas is given, and something linear is
      required.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Step</th><th>Then</th></tr></thead>
      <tbody>
        <tr><td>areas ${m('S₁ : S₂')}</td><td class="m">k = ${sr('S₁ : S₂')}</td><td>any length scales by ${m('k')}</td></tr>
        <tr><td>perimeters ${m('P₁ : P₂')}</td><td class="m">k = P₁ : P₂</td><td>areas scale by ${m('k²')}</td></tr>
      </tbody></table></div>
      <p><b>Example.</b> Two similar polygons have areas ${m('48')} and ${m('75')}. Then
      ${m('k² = ' + f('75', '48') + ' = ' + f('25', '16'))}, so ${m('k = ' + f('5', '4'))} and the
      perimeters are in the ratio ${m('5 : 4')}.</p>
      <div class="warn"><span class="wl">Do not give the ratio of areas when a length was asked for</span>
      ${m(f('75', '48'))} is the ratio of the areas; ${m(f('5', '4'))} is the ratio of the sides. Reading
      the question for which of the two is wanted is worth as much as the arithmetic.</div>`
    }
  ],
  examples: [
    {
      q: 'Two similar polygons have areas ' + m('48') + ' and ' + m('75') + '. Find the ratio of their perimeters.',
      steps: [
        [m('k² = ' + f('75', '48')), ''],
        ['Cancel by ' + m('3') + ': ' + m(f('25', '16')) + '.', ''],
        [m('k = ' + f('5', '4')), 'Square root.'],
        ['Perimeters ' + m('5 : 4') + '.', '']
      ],
      ans: m('5 : 4')
    },
    {
      q: 'A polygon of area ' + m('20') + ' and perimeter ' + m('18') + ' is enlarged so that its perimeter becomes ' + m('27') + '. Find its new area.',
      steps: [
        [m('k = ' + f('27', '18') + ' = 1.5'), ''],
        ['Areas scale by ' + m('k² = 2.25') + '.', ''],
        [m('20 × 2.25'), ''],
        [m('= 45'), '']
      ],
      ans: m('45')
    },
    {
      q: 'A quadrilateral has diagonals ' + m('10') + ' and ' + m('14') + ' and area ' + m('56') + '. A similar quadrilateral has a diagonal of ' + m('21') + ' corresponding to the ' + m('14') + '. Find its area.',
      steps: [
        [m('k = ' + f('21', '14') + ' = 1.5'), 'Diagonals are lengths.'],
        [m('k² = 2.25'), ''],
        [m('56 × 2.25'), ''],
        [m('= 126'), '']
      ],
      ans: m('126')
    }
  ],
  modelNote: 'Draw a pentagon, cut it into triangles from one vertex, and scale each triangle on the board; the sum makes the k² proof visible in one picture.',
  interactive: {
    type: 'areaModel',
    title: 'Areas under enlargement',
    hint: 'Double the sides and count the copies.'
  },
  quiz: [
    { q: 'Corresponding diagonals are in the ratio:', a: [m('1'), m('k'), m('k²'), m('k³')], c: 1, why: 'They are lengths.' },
    { q: 'Areas are in the ratio:', a: [m('k'), m('k²'), m('k³'), m('2k')], c: 1, why: 'Base and height both scale.' },
    { q: 'The proof for a polygon uses:', a: ['Pythagoras', 'decomposition into triangles', 'the sine rule', 'coordinates'], c: 1, why: 'Cut, prove, add.' },
    { q: 'Areas ' + m('48') + ' and ' + m('75') + ' give ' + m('k') + ' =', a: [m(f('75', '48')), m(f('5', '4')), m(f('4', '5')), m(f('25', '16'))], c: 1, why: 'Take the square root.' },
    { q: 'Perimeter ' + m('18 → 27') + ' scales the area by:', a: [m('1.5'), m('2.25'), m('3'), m('4.5')], c: 1, why: m('k²') + '.' },
    { q: 'The inradius scales by:', a: [m('1'), m('k'), m('k²'), 'it does not'], c: 1, why: 'It is a length.' }
  ],
  practice: {
    easy: [
      [m('k = 1.5') + ': ratio of areas', m('2.25')],
      [m('k = 4') + ': ratio of perimeters', m('4')],
      ['Areas ' + m('16 : 25') + ': ' + m('k'), m('4 : 5')],
      ['Areas ' + m('4 : 9') + ': ratio of perimeters', m('2 : 3')],
      ['Perimeters ' + m('3 : 7') + ': ratio of areas', m('9 : 49')],
      ['Diagonals scale by', m('k')],
      ['Angles scale by', m('1')]
    ],
    med: [
      ['Areas ' + m('48') + ' and ' + m('75') + ': ratio of perimeters', m('5 : 4')],
      ['Area ' + m('20') + ', perimeter ' + m('18 → 27') + ': the new area', m('45')],
      ['Diagonal ' + m('14 → 21') + ', area ' + m('56') + ': the new area', m('126')],
      ['Areas ' + m('50') + ' and ' + m('98') + ': ' + m('k'), m('5 : 7')],
      ['Perimeter ' + m('24') + ', ' + m('k = ' + f('5', '6')) + ': the new perimeter', m('20')],
      ['Inradius ' + m('6') + ', ' + m('k = 2.5') + ': the new inradius', m('15')],
      ['Areas ' + m('27') + ' and ' + m('12') + ': ' + m('k'), m('3 : 2')]
    ],
    hard: [
      ['Two similar polygons: areas differ by ' + m('44') + ' and ' + m('k = ' + f('5', '3')), 'Areas ' + m('24.75') + ' and ' + m('68.75')],
      ['A polygon and its enlargement have total area ' + m('125') + ' with ' + m('k = 2'), m('25') + ' and ' + m('100')],
      ['Two similar triangles with perimeters ' + m('30') + ' and ' + m('42') + ', larger area ' + m('98'), m('50')],
      ['A rectangle ' + m('6 × 8') + ' is enlarged to area ' + m('192') + ': ' + m('k'), m('2')],
      ['Its new diagonal', m('20')],
      ['Two similar polygons with equal areas: ' + m('k'), m('1') + ' — they are congruent'],
      ['A figure is scaled so that the area triples: ' + m('k'), m(sr('3'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Say whether the quantity asked for is a length or an area before choosing ' + m('k') + ' or ' + m('k²') + '.',
  homework: [
    'Two similar polygons have areas ' + m('27') + ' and ' + m('48') + '. Find the ratio of their perimeters.',
    'A polygon of area ' + m('35') + ' has its perimeter increased from ' + m('20') + ' to ' + m('30') + '. Find its new area.',
    'Two similar triangles have perimeters ' + m('16') + ' and ' + m('24') + '. The smaller has area ' + m('30') + '. Find the larger area.',
    'Prove that the ratio of the areas of two similar polygons is ' + m('k²') + '.',
    'A figure is scaled so that its area is halved. Find ' + m('k') + '.'
  ]
});

/* ============================== 14 ============================== */
G9_GEO.push({
  id: 'g9-14', stream: 'geo', grade: 9, quarter: 1, lessons: '15', hours: 1,
  title: 'Homothety and similarity',
  subtitle: 'The transformation that actually produces similar figures — a stretch from a fixed centre.',
  uz: 'Geometriya 9, §13', uzPage: 'pp. 66–71',
  cam: 'IGX 11.3', camPage: 'Core & Extended, pp. 232–236', wb: 'Exercise 11.3',
  objectives: [
    'Define homothety with centre O and coefficient k.',
    'Construct the image of a figure under a homothety, including negative k.',
    'Find images under a homothety centred at the origin.',
    'Know that every similarity is a homothety followed by a movement.'
  ],
  terms: [
    ['Homothety', 'Gomotetiya', 'Гомотетия'],
    ['Centre of homothety', 'Gomotetiya markazi', 'Центр гомотетии'],
    ['Coefficient', 'Koeffitsiyent', 'Коэффициент'],
    ['Enlargement', 'Kattalashtirish', 'Увеличение'],
    ['Negative coefficient', 'Manfiy koeffitsiyent', 'Отрицательный коэффициент'],
    ['Ray', 'Nur', 'Луч'],
    ['Corresponding points', 'Mos nuqtalar', 'Соответственные точки'],
    ['Invariant point', 'O‘zgarmas nuqta', 'Инвариантная точка']
  ],
  timing: [[10, 'The definition'], [14, 'Constructing the image'], [10, 'Homothety and similarity'], [6, 'Homework']],
  sections: [
    {
      h: 'The definition',
      html: `<p>A <b>homothety</b> with centre ${m('O')} and coefficient ${m('k ≠ 0')} sends each point
      ${m('P')} to the point ${m('P′')} on the line ${m('OP')} with</p>
      ${eq(m('OP′ = |k| · OP'), true)}
      <p>on the same side of ${m('O')} if ${m('k > 0')}, on the opposite side if ${m('k < 0')}.</p>
      {{fig:enlargement:Rays from the centre carry every point outwards (or inwards) by the same factor.}}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">k</th><th>Effect</th></tr></thead>
      <tbody>
        <tr><td class="m">k > 1</td><td>enlargement, same side</td></tr>
        <tr><td class="m">0 < k < 1</td><td>reduction, same side</td></tr>
        <tr><td class="m">k = 1</td><td>the identity</td></tr>
        <tr><td class="m">k = −1</td><td>central symmetry in ${m('O')}</td></tr>
        <tr><td class="m">k < 0</td><td>resize and turn through ${m('180°')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Cambridge calls it an enlargement, and allows negative scale factors</div>
      The row ${m('k = −1')} is worth noticing: central symmetry, met two lessons ago, is a homothety.
      The transformations of this chapter form one family, not five unrelated rules.</div>`
    },
    {
      h: 'Constructing the image',
      html: `<p>With the centre at the origin the formula is as simple as it can be:</p>
      ${eq(m('P(x, y) ↦ P′(kx, ky)'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Point</th><th class="m">k = 2</th><th class="m">k = ${f('1', '2')}</th><th class="m">k = −1</th></tr></thead>
      <tbody>
        <tr><td class="m">(3, 4)</td><td class="m">(6, 8)</td><td class="m">(1.5, 2)</td><td class="m">(−3, −4)</td></tr>
        <tr><td class="m">(−2, 6)</td><td class="m">(−4, 12)</td><td class="m">(−1, 3)</td><td class="m">(2, −6)</td></tr>
      </tbody></table></div>
      <p>With a centre ${m('C(a, b)')} other than the origin, work relative to ${m('C')}:</p>
      ${eq(m('P′ = (a + k(x − a),  b + k(y − b))'), true)}
      <p>To construct without coordinates: draw the ray from ${m('O')} through each vertex, and mark the
      new point at ${m('k')} times the distance. Joining the marks gives the image.</p>
      <div class="warn"><span class="wl">The centre is the only point that does not move</span>
      Every other point slides along its ray. A construction in which ${m('O')} has moved is wrong, and
      that single check catches most errors.</div>`
    },
    {
      h: 'Homothety and similarity',
      html: `${eq('A homothety with coefficient k is a similarity transformation with coefficient |k|', true)}
      <p>So a figure and its homothetic image are always similar. The converse is almost true and is the
      structural fact of the chapter:</p>
      ${eq('Every similarity is a homothety followed by a movement', true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Transformation</th><th>Preserves distance?</th><th>Preserves shape?</th></tr></thead>
      <tbody>
        <tr><td>translation, reflection, rotation</td><td>yes</td><td>yes</td></tr>
        <tr><td>homothety</td><td>no</td><td>yes</td></tr>
        <tr><td>a general similarity</td><td>no</td><td>yes</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The whole chapter in one sentence</div>
      Movements are similarities with ${m('k = 1')}; homotheties supply every other ${m('k')}; and
      combining the two produces every similarity there is. Nothing else is needed.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the image of ' + m('A(3, 4)') + ' under a homothety centred at ' + m('O') + ' with ' + m('k = 2') + ', and with ' + m('k = −1') + '.',
      steps: [
        [m('k = 2') + ': multiply both coordinates.', ''],
        [m('(6, 8)'), ''],
        [m('k = −1') + ': ' + m('(−3, −4)') + '.', ''],
        ['The second is central symmetry in ' + m('O') + '.', '']
      ],
      ans: m('(6, 8)') + ' and ' + m('(−3, −4)')
    },
    {
      q: 'A homothety with centre ' + m('C(1, 2)') + ' and ' + m('k = 3') + ' maps ' + m('P(4, 6)') + '. Find its image.',
      steps: [
        ['Relative to ' + m('C') + ': ' + m('(4 − 1, 6 − 2) = (3, 4)') + '.', ''],
        ['Multiply by ' + m('3') + ': ' + m('(9, 12)') + '.', ''],
        ['Add ' + m('C') + ' back: ' + m('(1 + 9, 2 + 12)') + '.', ''],
        [m('P′(10, 14)'), '']
      ],
      ans: m('(10, 14)')
    },
    {
      q: 'A triangle of area ' + m('12') + ' undergoes a homothety with ' + m('k = −2') + '. Find the area of the image.',
      steps: [
        ['Lengths scale by ' + m('|k| = 2') + '.', 'The sign only turns the figure.'],
        ['Areas scale by ' + m('|k|² = 4') + '.', ''],
        [m('12 × 4'), ''],
        [m('= 48'), '']
      ],
      ans: m('48')
    }
  ],
  modelNote: 'Use a torch and a cut-out shape to cast a shadow on the wall; the bulb is the centre, and moving it changes k in front of the class.',
  interactive: {
    type: 'transform',
    title: 'Stretch from a centre',
    hint: 'Try a negative k and watch the figure flip through the centre.'
  },
  quiz: [
    { q: 'A homothety is described by:', a: ['a vector', 'a centre and a coefficient', 'an axis', 'an angle'], c: 1, why: 'Both are needed.' },
    { q: m('k = −1') + ' gives:', a: ['the identity', 'a translation', 'central symmetry', 'a reflection'], c: 2, why: 'A half-turn about ' + m('O') + '.' },
    { q: m('(3, 4)') + ' under ' + m('k = 2') + ' about ' + m('O') + ':', a: [m('(5, 6)'), m('(6, 8)'), m('(1.5, 2)'), m('(−3, −4)')], c: 1, why: 'Multiply both coordinates.' },
    { q: 'The only fixed point is:', a: ['the origin', 'the centre', 'every point', 'none'], c: 1, why: 'Everything else slides along a ray.' },
    { q: 'Areas scale by:', a: [m('k'), m('|k|'), m('k²'), m('|k|³')], c: 2, why: m('k²') + ' is positive either way.' },
    { q: 'Every similarity is:', a: ['a homothety', 'a movement', 'a homothety followed by a movement', 'a reflection'], c: 2, why: 'The structural theorem.' }
  ],
  practice: {
    easy: [
      [m('(3, 4)') + ', ' + m('k = 2') + ' about ' + m('O'), m('(6, 8)')],
      [m('(3, 4)') + ', ' + m('k = ' + f('1', '2')) + ' about ' + m('O'), m('(1.5, 2)')],
      [m('(3, 4)') + ', ' + m('k = −1') + ' about ' + m('O'), m('(−3, −4)')],
      [m('(−2, 6)') + ', ' + m('k = 2') + ' about ' + m('O'), m('(−4, 12)')],
      [m('k = 1') + ' gives', 'The identity'],
      ['Fixed point of a homothety', 'The centre'],
      ['Areas scale by', m('k²')]
    ],
    med: [
      [m('P(4, 6)') + ', centre ' + m('(1, 2)') + ', ' + m('k = 3'), m('(10, 14)')],
      [m('P(5, 1)') + ', centre ' + m('(1, 1)') + ', ' + m('k = 2'), m('(9, 1)')],
      ['Area ' + m('12') + ', ' + m('k = −2') + ': the image area', m('48')],
      ['Area ' + m('50') + ', ' + m('k = ' + f('1', '5')) + ': the image area', m('2')],
      [m('k = −1') + ' is the same as', 'Central symmetry'],
      ['A homothety with ' + m('k = 3') + ' applied twice', m('k = 9')],
      ['Perimeter ' + m('30') + ', ' + m('k = −1.5'), m('45')]
    ],
    hard: [
      ['The image of ' + m('y = 2x + 4') + ' under ' + m('k = 2') + ' about ' + m('O'), m('y = 2x + 8')],
      ['The image of ' + m('x² + y² = 4') + ' under ' + m('k = 3') + ' about ' + m('O'), m('x² + y² = 36')],
      ['A homothety maps ' + m('(2, 3)') + ' to ' + m('(6, 9)') + ': find ' + m('k') + ' if the centre is ' + m('O'), m('3')],
      ['A homothety centred at ' + m('(2, 2)') + ' maps ' + m('(4, 6)') + ' to ' + m('(8, 14)') + ': find ' + m('k'), m('3')],
      ['Composing homotheties with ' + m('k₁') + ' and ' + m('k₂') + ' about the same centre', m('k₁k₂')],
      ['A homothety with ' + m('k = −2') + ' followed by one with ' + m('k = −' + f('1', '2')), 'The identity'],
      ['Why is a homothety not a movement?', 'It changes distances unless ' + m('|k| = 1')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw the rays from the centre in every construction; the image is read off them.',
  homework: [
    'Find the image of ' + m('(5, −3)') + ' under homotheties about ' + m('O') + ' with ' + m('k = 3') + ', ' + m('k = ' + f('1', '2')) + ' and ' + m('k = −2') + '.',
    'A homothety with centre ' + m('(2, 1)') + ' and ' + m('k = 2') + ' maps ' + m('(5, 4)') + '. Find its image.',
    'A polygon of area ' + m('18') + ' undergoes a homothety with ' + m('k = −3') + '. Find the image area.',
    'Explain why central symmetry is a homothety.',
    'Find the image of the circle ' + m('x² + y² = 9') + ' under a homothety about ' + m('O') + ' with ' + m('k = 2') + '.'
  ]
});

/* ============================== 15 ============================== */
G9_GEO.push({
  id: 'g9-15', stream: 'geo', grade: 9, quarter: 1, lessons: '16', hours: 1,
  title: 'Chapter exercises — Cambridge congruence and similarity notation',
  subtitle: 'The same theorems in the language and the question style of an IGCSE paper.',
  uz: 'Geometriya 9, I bob mashqlari', uzPage: 'pp. 72–75',
  cam: 'IGX 11.4', camPage: 'Core & Extended, pp. 237–241', wb: 'Exercise 11.4',
  objectives: [
    'Use the Cambridge names for the congruence conditions: SSS, SAS, ASA, RHS.',
    'Describe a transformation fully in the form an IGCSE paper requires.',
    'Answer “prove that these triangles are congruent” with reasons in the expected form.',
    'Use scale-factor language for enlargement, including a negative scale factor.'
  ],
  terms: [
    ['Congruent', 'Teng', 'Равный'],
    ['SSS', 'USU', 'ССС'],
    ['SAS', 'UBU', 'СУС'],
    ['ASA', 'BUB', 'УСУ'],
    ['RHS', 'TGK', 'ПГК'],
    ['Enlargement', 'Kattalashtirish', 'Увеличение'],
    ['Scale factor', 'Masshtab koeffitsiyenti', 'Масштабный коэффициент'],
    ['Fully describe', 'To‘liq tasvirlash', 'Полностью описать']
  ],
  timing: [[10, 'The four congruence conditions'], [12, 'Describing a transformation fully'], [12, 'Exam-style items'], [6, 'Homework']],
  sections: [
    {
      h: 'The four congruence conditions',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Code</th><th>Means</th><th>Uzbek criterion</th></tr></thead>
      <tbody>
        <tr><td class="m">SSS</td><td>three sides</td><td>the third</td></tr>
        <tr><td class="m">SAS</td><td>two sides and the included angle</td><td>the first</td></tr>
        <tr><td class="m">ASA</td><td>two angles and the side between</td><td>the second</td></tr>
        <tr><td class="m">AAS</td><td>two angles and a side not between</td><td>a consequence of ASA</td></tr>
        <tr><td class="m">RHS</td><td>right angle, hypotenuse and one side</td><td>the right-triangle criterion</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('AAA')} is not a congruence condition</span>
      Three equal angles give <b>similarity</b>, never congruence — the triangles can be any size. This
      is the single most common wrong answer in IGCSE congruence questions.</div>`
    },
    {
      h: 'Describing a transformation fully',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Transformation</th><th>Must state</th><th>Example of a full answer</th></tr></thead>
      <tbody>
        <tr><td>translation</td><td>the vector</td><td>a translation by ${m('(3, −2)')}</td></tr>
        <tr><td>reflection</td><td>the mirror line</td><td>a reflection in ${m('y = x')}</td></tr>
        <tr><td>rotation</td><td>centre, angle, direction</td><td>a rotation of ${m('90°')} clockwise about ${m('(0, 0)')}</td></tr>
        <tr><td>enlargement</td><td>centre and scale factor</td><td>an enlargement, centre ${m('(1, 1)')}, scale factor ${m('2')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">One transformation only</div>
      If a question says “describe the <b>single</b> transformation”, an answer of the form “a reflection
      and then a translation” scores zero, even when it is geometrically correct. Find the one
      transformation that does the whole job.</div>`
    },
    {
      h: 'Exam-style items',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>What earns the marks</th></tr></thead>
      <tbody>
        <tr><td>“Prove ${m('△ABC ≡ △DEF')}”</td><td>three statements with reasons, then the condition named</td></tr>
        <tr><td>“Describe fully the single transformation”</td><td>the type plus its data</td></tr>
        <tr><td>“Find the scale factor”</td><td>a ratio of corresponding lengths, with the direction stated</td></tr>
        <tr><td>“Explain why the triangles are similar”</td><td>two equal angles, each with a reason</td></tr>
        <tr><td>“Work out the area of the larger shape”</td><td class="m">k²</td></tr>
      </tbody></table></div>
      <p>A worked model answer for the first row:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>Reason</th></tr></thead>
      <tbody>
        <tr><td class="m">AB = DE</td><td>given</td></tr>
        <tr><td class="m">∠ABC = ∠DEF</td><td>given</td></tr>
        <tr><td class="m">BC = EF</td><td>given</td></tr>
        <tr><td class="m">△ABC ≡ △DEF</td><td class="m">SAS</td></tr>
      </tbody></table></div>`
    }
  ],
  examples: [
    {
      q: 'A shape at ' + m('(1,1), (3,1), (1,4)') + ' maps to ' + m('(2,2), (6,2), (2,8)') + '. Describe the single transformation fully.',
      steps: [
        ['Each coordinate is doubled.', ''],
        ['That is an enlargement about the origin.', ''],
        ['Scale factor ' + m('2') + '.', ''],
        ['An enlargement, centre ' + m('(0, 0)') + ', scale factor ' + m('2') + '.', 'Type plus data.']
      ],
      ans: 'Enlargement, centre ' + m('(0,0)') + ', scale factor ' + m('2')
    },
    {
      q: 'Two triangles have a right angle, equal hypotenuses of ' + m('13') + ' and one leg of ' + m('5') + ' each. Name the condition.',
      steps: [
        ['A right angle in each.', ''],
        ['Equal hypotenuses.', ''],
        ['One pair of equal sides.', ''],
        [m('RHS') + ' — congruent.', '']
      ],
      ans: m('RHS')
    },
    {
      q: 'A shape of area ' + m('7') + ' is enlarged by scale factor ' + m('4') + '. Find the new area.',
      steps: [
        ['Lengths ×' + m('4') + '.', ''],
        ['Areas ×' + m('4² = 16') + '.', ''],
        [m('7 × 16'), ''],
        [m('= 112'), '']
      ],
      ans: m('112')
    }
  ],
  modelNote: 'Read out four candidate answers to “describe fully” — one missing the centre, one missing the direction, one giving two transformations, one complete — and let the class mark them.',
  interactive: {
    type: 'transform',
    title: 'Name the transformation',
    hint: 'Type plus data, always.'
  },
  quiz: [
    { q: m('AAA') + ' gives:', a: ['congruence', 'similarity', 'nothing', 'equality of areas'], c: 1, why: 'Any size fits.' },
    { q: m('RHS') + ' stands for:', a: ['right, hypotenuse, side', 'right, height, side', 'ratio, height, side', 'none'], c: 0, why: 'For right triangles.' },
    { q: 'A rotation must state:', a: ['the angle', 'the centre', 'the direction', 'all three'], c: 3, why: 'All of them.' },
    { q: 'An enlargement must state:', a: ['the vector', 'the centre and the scale factor', 'the axis', 'the angle'], c: 1, why: 'Both.' },
    { q: '“Describe the single transformation” allows:', a: ['two transformations', 'one transformation', 'any description', 'a sketch only'], c: 1, why: 'One, or no marks.' },
    { q: 'Area ' + m('7') + ', scale factor ' + m('4') + ':', a: [m('28'), m('49'), m('112'), m('448')], c: 2, why: m('7 × 16') + '.' }
  ],
  practice: {
    easy: [
      ['Three equal sides', m('SSS')],
      ['Two sides and the included angle', m('SAS')],
      ['Two angles and the side between', m('ASA')],
      ['Right angle, hypotenuse and a side', m('RHS')],
      ['Three equal angles gives', 'Similarity only'],
      ['A translation is described by', 'A vector'],
      ['A reflection is described by', 'A mirror line']
    ],
    med: [
      [m('(1,1),(3,1),(1,4) → (2,2),(6,2),(2,8)'), 'Enlargement, centre ' + m('O') + ', s.f. ' + m('2')],
      [m('(1,2) → (1,−2)') + ' with the shape flipped', 'Reflection in ' + m('Ox')],
      [m('(2,3) → (−3,2)'), 'Rotation ' + m('90°') + ' anticlockwise about ' + m('O')],
      ['Area ' + m('7') + ', scale factor ' + m('4'), m('112')],
      ['Area ' + m('45') + ', scale factor ' + m(f('1', '3')), m('5')],
      ['A rotation description missing the centre scores', 'Fewer marks'],
      ['Two triangles, hypotenuse ' + m('13') + ' and leg ' + m('5'), m('RHS')]
    ],
    hard: [
      ['An enlargement with s.f. ' + m('−2') + ' about ' + m('O') + ' maps ' + m('(3, 1)'), m('(−6, −2)')],
      ['An enlargement, centre ' + m('(1,1)') + ', s.f. ' + m('3') + ', maps ' + m('(2, 3)'), m('(4, 7)')],
      ['A shape and its image have areas ' + m('9') + ' and ' + m('81') + ': the scale factor', m('±3')],
      ['Describe fully: ' + m('(x, y) ↦ (y, x)'), 'Reflection in ' + m('y = x')],
      ['Describe fully: ' + m('(x, y) ↦ (−x, −y)'), 'Rotation ' + m('180°') + ' about ' + m('O')],
      ['Describe fully: ' + m('(x, y) ↦ (x + 2, y − 5)'), 'Translation by ' + m('(2, −5)')],
      ['Why is ' + m('AAA') + ' not a congruence condition?', 'The triangles may differ in size']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every description must give the type and all of its data.',
  homework: [
    'Name the congruence condition for each of: three sides; two angles and the side between; a right angle with the hypotenuse and a leg.',
    'Describe fully the transformation ' + m('(x, y) ↦ (−y, x)') + '.',
    'Describe fully the transformation ' + m('(x, y) ↦ (3x, 3y)') + '.',
    'A shape of area ' + m('12') + ' is enlarged by scale factor ' + m('2.5') + '. Find the new area.',
    'Explain, with a diagram, why ' + m('AAA') + ' does not prove congruence.'
  ]
});

/* ============================== 16 ============================== */
G9_GEO.push({
  id: 'g9-16', stream: 'geo', grade: 9, quarter: 1, lessons: '17–18', hours: 2,
  title: 'Control work 1, and work on the mistakes',
  subtitle: 'Similarity and the transformations of the plane, tested — and the chapter closed as one map.',
  uz: 'Geometriya 9, Nazorat ishi 1', uzPage: 'pp. 9–75',
  cam: 'IGX 11 review', camPage: 'Core & Extended, pp. 220–241', wb: 'Control paper G1',
  objectives: [
    'Establish similarity by the appropriate criterion under time.',
    'Use k, k² correctly for lengths and areas.',
    'Describe a transformation fully.',
    'Classify each lost mark and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Criterion', 'Alomat', 'Признак'],
    ['Coefficient of similarity', 'O‘xshashlik koeffitsiyenti', 'Коэффициент подобия'],
    ['Ratio of areas', 'Yuzalar nisbati', 'Отношение площадей'],
    ['Transformation', 'Almashtirish', 'Преобразование'],
    ['Homothety', 'Gomotetiya', 'Гомотетия'],
    ['Full description', 'To‘liq tavsif', 'Полное описание'],
    ['Diagnosis', 'Tashxis', 'Диагностика']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [12, 'Answers'], [20, 'Diagnosis and rewrite'], [5, 'The map']],
  sections: [
    {
      h: 'The paper — 30 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>In ${m('△ABC')}, ${m('DE ∥ BC')}, ${m('AD = 5')}, ${m('DB = 3')}, ${m('DE = 10')}: find ${m('BC')}</td><td class="m">5</td><td>L5</td></tr>
        <tr><td>2</td><td>Are triangles ${m('4, 6, 8')} and ${m('6, 9, 12')} similar? Name the criterion</td><td class="m">5</td><td>L7</td></tr>
        <tr><td>3</td><td>Two similar polygons have areas ${m('27')} and ${m('48')}: find the ratio of their perimeters</td><td class="m">5</td><td>L14</td></tr>
        <tr><td>4</td><td>The altitude to the hypotenuse divides it into ${m('4')} and ${m('16')}: find the altitude</td><td class="m">5</td><td>L8</td></tr>
        <tr><td>5</td><td>Reflect ${m('(3, −2)')} in ${m('Ox')}, in ${m('Oy')} and in ${m('y = x')}</td><td class="m">5</td><td>L11</td></tr>
        <tr><td>6</td><td>Describe fully the transformation ${m('(x, y) ↦ (2x, 2y)')}</td><td class="m">5</td><td>L15</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks actually go</div>
      Q1 carries one mark for using ${m('AB = 8')} rather than ${m('DB = 3')}; Q2 two for naming the
      criterion; Q3 two for taking the square root; Q5 one for the swap in ${m('y = x')}; Q6 two for
      giving the centre as well as the scale factor.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>part of a side used as the whole</td><td class="m">k = ${f('3', '5')}</td><td class="m">k = ${f('8', '5')}</td></tr>
        <tr><td>criterion not named</td><td>“they are similar”</td><td>“by the third criterion”</td></tr>
        <tr><td>ratio of areas given for a length</td><td class="m">${f('48', '27')}</td><td class="m">${f('4', '3')}</td></tr>
        <tr><td>wrong altitude relation</td><td class="m">CH² = 4 × 20</td><td class="m">CH² = 4 × 16</td></tr>
        <tr><td class="m">y = x</td><td class="m">(−3, 2)</td><td class="m">(−2, 3)</td></tr>
        <tr><td>centre omitted</td><td>“an enlargement, s.f. ${m('2')}”</td><td>“…centre ${m('(0, 0)')}”</td></tr>
        <tr><td>sides not sorted</td><td class="m">${f('6', '8')} ≠ ${f('9', '4')}</td><td>sort both lists first</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'Chapter I as one map',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Block</th><th>The sentence</th></tr></thead>
      <tbody>
        <tr><td>similarity of polygons</td><td>equal angles <b>and</b> proportional sides</td></tr>
        <tr><td>similar triangles</td><td>either condition alone is enough</td></tr>
        <tr><td>the three criteria</td><td>AA, SAS, SSS — proportionally</td></tr>
        <tr><td>right triangles</td><td>the altitude makes three similar triangles</td></tr>
        <tr><td>movements</td><td>translation, reflection, rotation — distance preserved</td></tr>
        <tr><td>homothety</td><td>a stretch from a centre — shape preserved, size not</td></tr>
        <tr><td>the ratios</td><td>lengths ${m('k')}, areas ${m('k²')}, volumes ${m('k³')}</td></tr>
      </tbody></table></div>
      {{fig:enlargement:One picture for the whole chapter — a figure and its scaled copy.}}
      <div class="keybox"><div class="klabel">Looking forward</div>
      Chapter II removes the right angle. The sine and cosine rules let a triangle be solved from any
      three suitable pieces of information, and the trigonometric ratios are extended to obtuse angles.
      Nothing from Chapter I is needed for the formulae, but the similar-triangle habits are used in
      every proof.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q1: ' + m('DE ∥ BC') + ', ' + m('AD = 5') + ', ' + m('DB = 3') + ', ' + m('DE = 10') + '.',
      steps: [
        [m('∠A') + ' common; ' + m('∠ADE = ∠ABC') + ' (corresponding).', 'First criterion.'],
        [m('AB = 5 + 3 = 8'), 'The whole side.'],
        [m('k = ' + f('8', '5')), ''],
        [m('BC = 10 × ' + f('8', '5') + ' = 16'), '']
      ],
      ans: m('BC = 16')
    },
    {
      q: 'Model answer, Q3: areas ' + m('27') + ' and ' + m('48') + '.',
      steps: [
        [m('k² = ' + f('48', '27') + ' = ' + f('16', '9')), ''],
        [m('k = ' + f('4', '3')), 'Square root.'],
        ['Perimeters scale by ' + m('k') + '.', ''],
        [m('4 : 3'), '']
      ],
      ans: m('4 : 3')
    },
    {
      q: 'Model answer, Q6: describe ' + m('(x, y) ↦ (2x, 2y)') + '.',
      steps: [
        ['Every distance from the origin is doubled.', ''],
        ['The origin itself does not move.', 'It is the centre.'],
        ['Shape preserved, size not — an enlargement.', ''],
        ['An enlargement, centre ' + m('(0, 0)') + ', scale factor ' + m('2') + '.', 'Type plus data.']
      ],
      ans: 'Enlargement, centre ' + m('(0,0)') + ', scale factor ' + m('2')
    }
  ],
  modelNote: 'Return Q6 with four candidate answers written on the board — one missing the centre, one naming two transformations — and let the class allocate the five marks.',
  interactive: {
    type: 'quiz',
    title: 'Chapter I in twelve questions',
    hint: 'Two from each block.',
    items: [
      { q: 'Similar polygons need:', a: ['equal angles only', 'proportional sides only', 'both', 'neither'], c: 2, why: 'Both conditions.' },
      { q: 'For triangles, equal angles give:', a: ['nothing', 'proportional sides', 'equal sides', 'equal areas'], c: 1, why: 'Triangles are rigid.' },
      { q: 'The first criterion needs:', a: ['one angle', 'two angles', 'three sides', 'two sides'], c: 1, why: 'AA.' },
      { q: 'The second criterion needs the angle to be:', a: ['the largest', 'included', 'acute', 'right'], c: 1, why: 'Between the two sides.' },
      { q: 'Six sides and no angles: use', a: ['the first', 'the second', 'the third', 'none'], c: 2, why: 'SSS.' },
      { q: 'The altitude to the hypotenuse makes:', a: ['two', 'three', 'four', 'no'], c: 1, why: 'Three similar triangles.' },
      { q: m('CH²') + ' equals:', a: [m('AH · AB'), m('AH · HB'), m('HB · AB'), m('AB²')], c: 1, why: 'The two projections.' },
      { q: 'A translation is described by:', a: ['a vector', 'a centre', 'an axis', 'an angle'], c: 0, why: 'Direction and distance.' },
      { q: 'A reflection reverses:', a: ['distance', 'angle size', 'orientation', 'area'], c: 2, why: 'A mirror image.' },
      { q: 'Central symmetry is a rotation of:', a: [m('90°'), m('180°'), m('270°'), m('360°')], c: 1, why: 'A half-turn.' },
      { q: 'A homothety is described by:', a: ['a vector', 'a centre and a coefficient', 'an axis', 'an angle'], c: 1, why: 'Both.' },
      { q: 'Areas scale by:', a: [m('k'), m('k²'), m('k³'), m('2k')], c: 1, why: 'Two dimensions.' }
    ]
  },
  quiz: [
    { q: 'In Q1 the ratio uses:', a: [m('DB'), m('AB'), m('DE'), m('AC')], c: 1, why: 'The whole side.' },
    { q: 'Q2 must include:', a: ['a diagram', 'the criterion', 'a decimal', 'an angle'], c: 1, why: 'Two of the five marks.' },
    { q: 'Q3 needs:', a: ['squaring', 'a square root', 'a cube root', 'nothing'], c: 1, why: 'Areas to lengths.' },
    { q: 'In Q4 the whole hypotenuse is:', a: [m('4'), m('16'), m('20'), m('12')], c: 2, why: m('4 + 16') + '.' },
    { q: 'Q5’s ' + m('y = x') + ' image of ' + m('(3, −2)') + ':', a: [m('(−3, 2)'), m('(−2, 3)'), m('(2, −3)'), m('(3, 2)')], c: 1, why: 'Swap the coordinates.' },
    { q: 'Q6 must give:', a: ['the type only', 'the type and its data', 'two transformations', 'a sketch'], c: 1, why: 'Both, always.' }
  ],
  practice: {
    easy: [
      [m('DE ∥ BC') + ', ' + m('AD = 5, DB = 3') + ': ' + m('AB'), m('8')],
      ['Same: ' + m('k'), m(f('8', '5'))],
      ['Same, ' + m('DE = 10') + ': ' + m('BC'), m('16')],
      [m('4, 6, 8') + ' and ' + m('6, 9, 12'), 'Similar, ' + m('k = 1.5')],
      ['Areas ' + m('27') + ' and ' + m('48') + ': ' + m('k'), m(f('4', '3'))],
      ['Projections ' + m('4') + ' and ' + m('16') + ': the altitude', m('8')],
      [m('(3, −2)') + ' in ' + m('Ox'), m('(3, 2)')]
    ],
    med: [
      [m('(3, −2)') + ' in ' + m('Oy'), m('(−3, −2)')],
      [m('(3, −2)') + ' in ' + m('y = x'), m('(−2, 3)')],
      ['Describe ' + m('(x, y) ↦ (2x, 2y)'), 'Enlargement, centre ' + m('O') + ', s.f. ' + m('2')],
      ['Areas ' + m('27') + ' and ' + m('48') + ': ratio of perimeters', m('4 : 3')],
      ['Projections ' + m('4') + ' and ' + m('16') + ': the legs', m('4' + sr('5')) + ' and ' + m('8' + sr('5'))],
      ['Which criterion for ' + m('4, 6, 8') + ' and ' + m('6, 9, 12') + '?', 'The third'],
      ['A shape of area ' + m('9') + ' with ' + m('k = 2') + ': its area', m('36')]
    ],
    hard: [
      [m('DE ∥ BC') + ', ' + m('[△ADE] = 25, [△ABC] = 64') + ': ' + m('AD : DB'), m('5 : 3')],
      ['A right triangle with hypotenuse ' + m('20') + ' and altitude ' + m('8') + ': the projections', m('4') + ' and ' + m('16')],
      ['Two similar polygons: perimeters ' + m('21') + ' and ' + m('28') + ', smaller area ' + m('45'), m('80')],
      ['Describe ' + m('(x, y) ↦ (−x, −y)'), 'Rotation ' + m('180°') + ' about ' + m('O')],
      ['Describe ' + m('(x, y) ↦ (y, x)'), 'Reflection in ' + m('y = x')],
      ['A bisector from ' + m('A') + ' with ' + m('AB = 12, AC = 18, BC = 20') + ': ' + m('BD'), m('8')],
      ['A triangle ' + m('6, 8, 10') + ': the altitude to the hypotenuse', m('4.8')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite in full every question that lost a mark before Chapter II begins.',
  homework: [
    'In ' + m('△ABC') + ', ' + m('DE ∥ BC') + ', ' + m('AD = 6') + ', ' + m('DB = 2') + ', ' + m('DE = 9') + '. Find ' + m('BC') + '.',
    'Two similar polygons have areas ' + m('50') + ' and ' + m('72') + '. Find the ratio of their perimeters.',
    'The altitude to the hypotenuse divides it into ' + m('5') + ' and ' + m('20') + '. Find the altitude and the legs.',
    'Reflect ' + m('(−4, 1)') + ' in ' + m('Ox') + ', ' + m('Oy') + ' and ' + m('y = x') + '.',
    'Describe fully the transformation ' + m('(x, y) ↦ (−y, x)') + '.'
  ]
});

/* ============================== 17 ============================== */
G9_GEO.push({
  id: 'g9-17', stream: 'geo', grade: 9, quarter: 2, lessons: '19–20', hours: 2,
  title: 'Sine, cosine, tangent and cotangent of angles from 0° to 180°',
  subtitle: 'The ratios escape the right triangle, so that an obtuse angle can have a sine too.',
  uz: 'Geometriya 9, §14', uzPage: 'pp. 76–82',
  cam: 'Extension beyond IGX', camPage: 'Core & Extended, pp. 300–310', wb: 'Exercise 15.1',
  objectives: [
    'Define the four ratios for any angle from 0° to 180° using the unit semicircle.',
    'Give the exact values at 0°, 30°, 45°, 60°, 90°, 120°, 135°, 150° and 180°.',
    'Use sin(180° − α) = sin α and cos(180° − α) = −cos α.',
    'Determine the sign of each ratio for an obtuse angle.'
  ],
  terms: [
    ['Obtuse angle', 'O‘tmas burchak', 'Тупой угол'],
    ['Unit semicircle', 'Birlik yarim aylana', 'Единичная полуокружность'],
    ['Supplementary angles', 'Qo‘shni burchaklar', 'Смежные углы'],
    ['Ordinate', 'Ordinata', 'Ордината'],
    ['Abscissa', 'Abssissa', 'Абсцисса'],
    ['Sign', 'Ishora', 'Знак'],
    ['Exact value', 'Aniq qiymat', 'Точное значение'],
    ['Extension', 'Kengaytirish', 'Расширение']
  ],
  timing: [[15, 'Why the right triangle is not enough'], [25, 'The definition on a semicircle'], [22, 'Supplementary angles'], [23, 'The table'], [5, 'Homework']],
  sections: [
    {
      h: 'Why the right triangle is not enough',
      html: `<p>In Grade 8 ${m('sin A')} was defined as ${m(f('opposite', 'hypotenuse'))} in a right
      triangle, so ${m('A')} had to be acute. But a triangle can have an obtuse angle, and the sine rule
      of the next lesson will need its sine.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Definition</th><th>Works for</th></tr></thead>
      <tbody>
        <tr><td>ratios in a right triangle</td><td class="m">0° < α < 90°</td></tr>
        <tr><td>coordinates on the unit semicircle</td><td class="m">0° ≤ α ≤ 180°</td></tr>
        <tr><td>coordinates on the whole unit circle</td><td>every angle (Grade 9 algebra)</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The same extension as in algebra, arriving from the other side</div>
      The algebra course reaches the unit circle from rotation; geometry reaches it from the need to
      solve an obtuse triangle. The definition is identical, and the two courses meet here.</div>`
    },
    {
      h: 'The definition on a semicircle',
      html: `<p>Draw the unit semicircle above ${m('Ox')} and let the ray at angle ${m('α')} from the
      positive ${m('x')}-axis meet it at ${m('P(x, y)')}. Then</p>
      ${eq(m('sin α = y') + '     ' + m('cos α = x') + '     ' + m('tan α = ' + f('y', 'x')) + '     ' + m('cot α = ' + f('x', 'y')), true)}
      {{fig:unitCircle:For an angle up to 180° the point lies on the upper half — the ordinate is never negative.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Range</th><th class="m">sin</th><th class="m">cos</th><th class="m">tan</th></tr></thead>
      <tbody>
        <tr><td class="m">0° < α < 90°</td><td class="m">+</td><td class="m">+</td><td class="m">+</td></tr>
        <tr><td class="m">α = 90°</td><td class="m">1</td><td class="m">0</td><td>undefined</td></tr>
        <tr><td class="m">90° < α < 180°</td><td class="m">+</td><td class="m">−</td><td class="m">−</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Sine is never negative for a triangle’s angle</div>
      Every angle of a triangle lies strictly between ${m('0°')} and ${m('180°')}, so its point is on the
      upper semicircle and its sine is positive. That is exactly what makes the sine rule and the area
      formula work without any case analysis.</div>`
    },
    {
      h: 'Supplementary angles',
      html: `<p>The points at ${m('α')} and ${m('180° − α')} are mirror images in the ${m('y')}-axis, so
      the ordinates agree and the abscissae are opposite:</p>
      ${eq(m('sin(180° − α) = sin α') + '     ' + m('cos(180° − α) = −cos α'), true)}
      ${eq(m('tan(180° − α) = −tan α') + '     ' + m('cot(180° − α) = −cot α'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Angle</th><th>Rewrite</th><th class="m">sin</th><th class="m">cos</th></tr></thead>
      <tbody>
        <tr><td class="m">120°</td><td class="m">180° − 60°</td><td class="m">${f(sr('3'), '2')}</td><td class="m">−${f('1', '2')}</td></tr>
        <tr><td class="m">135°</td><td class="m">180° − 45°</td><td class="m">${f(sr('2'), '2')}</td><td class="m">−${f(sr('2'), '2')}</td></tr>
        <tr><td class="m">150°</td><td class="m">180° − 30°</td><td class="m">${f('1', '2')}</td><td class="m">−${f(sr('3'), '2')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Two angles share a sine; only one shares a cosine</span>
      ${m('sin 30° = sin 150°')}. This ambiguity is the reason the sine rule can give two answers for an
      angle, and why the cosine rule — whose cosine determines the angle uniquely — is preferred when
      there is any doubt.</div>`
    },
    {
      h: 'The table',
      html: `<div class="tablewrap"><table>
      <thead><tr><th class="m">α</th><th class="m">0°</th><th class="m">30°</th><th class="m">45°</th><th class="m">60°</th><th class="m">90°</th><th class="m">120°</th><th class="m">135°</th><th class="m">150°</th><th class="m">180°</th></tr></thead>
      <tbody>
        <tr><td class="m">sin</td><td class="m">0</td><td class="m">${f('1', '2')}</td><td class="m">${f(sr('2'), '2')}</td><td class="m">${f(sr('3'), '2')}</td><td class="m">1</td><td class="m">${f(sr('3'), '2')}</td><td class="m">${f(sr('2'), '2')}</td><td class="m">${f('1', '2')}</td><td class="m">0</td></tr>
        <tr><td class="m">cos</td><td class="m">1</td><td class="m">${f(sr('3'), '2')}</td><td class="m">${f(sr('2'), '2')}</td><td class="m">${f('1', '2')}</td><td class="m">0</td><td class="m">−${f('1', '2')}</td><td class="m">−${f(sr('2'), '2')}</td><td class="m">−${f(sr('3'), '2')}</td><td class="m">−1</td></tr>
        <tr><td class="m">tan</td><td class="m">0</td><td class="m">${f(sr('3'), '3')}</td><td class="m">1</td><td class="m">${sr('3')}</td><td>—</td><td class="m">−${sr('3')}</td><td class="m">−1</td><td class="m">−${f(sr('3'), '3')}</td><td class="m">0</td></tr>
      </tbody></table></div>
      <p>The sine row is symmetric about ${m('90°')}; the cosine row is antisymmetric. Reading the table
      that way halves what has to be remembered.</p>`
    }
  ],
  examples: [
    {
      q: 'Find ' + m('sin 120°') + ', ' + m('cos 120°') + ' and ' + m('tan 120°') + '.',
      steps: [
        [m('120° = 180° − 60°'), ''],
        [m('sin 120° = sin 60° = ' + f(sr('3'), '2')), 'Sine unchanged.'],
        [m('cos 120° = −cos 60° = −' + f('1', '2')), 'Cosine negated.'],
        [m('tan 120° = −' + sr('3')), '']
      ],
      ans: m(f(sr('3'), '2') + ', −' + f('1', '2') + ', −' + sr('3'))
    },
    {
      q: 'An angle of a triangle has ' + m('sin α = ' + f('1', '2')) + '. What can ' + m('α') + ' be?',
      steps: [
        [m('sin 30° = ' + f('1', '2')), ''],
        [m('sin 150° = sin(180° − 30°) = ' + f('1', '2')), ''],
        ['Both lie strictly between ' + m('0°') + ' and ' + m('180°') + '.', ''],
        [m('α = 30°') + ' or ' + m('α = 150°') + '.', 'Two possibilities.']
      ],
      ans: m('30°') + ' or ' + m('150°')
    },
    {
      q: 'An angle of a triangle has ' + m('cos α = −' + f('1', '2')) + '. Find ' + m('α') + '.',
      steps: [
        ['A negative cosine means an obtuse angle.', ''],
        [m('cos 60° = ' + f('1', '2')), ''],
        [m('cos(180° − 60°) = −' + f('1', '2')), ''],
        [m('α = 120°') + ' — the only possibility.', 'Cosine is not ambiguous.']
      ],
      ans: m('120°')
    }
  ],
  modelNote: 'Draw one semicircle and swing a ruler from 0° to 180°; the class watches the height rise and fall while the horizontal reading passes through zero and turns negative.',
  interactive: {
    type: 'circleAngles',
    title: 'From 0° to 180°',
    hint: 'Watch the abscissa change sign at 90°.'
  },
  quiz: [
    { q: 'For ' + m('0° < α < 180°') + ', ' + m('sin α') + ' is:', a: ['always positive', 'always negative', 'sometimes zero', 'undefined'], c: 0, why: 'The upper semicircle.' },
    { q: m('cos α') + ' for an obtuse ' + m('α') + ' is:', a: ['positive', 'negative', 'zero', 'undefined'], c: 1, why: 'The abscissa is to the left.' },
    { q: m('sin(180° − α)') + ' equals:', a: [m('−sin α'), m('sin α'), m('cos α'), m('−cos α')], c: 1, why: 'Mirror in the ' + m('y') + '-axis.' },
    { q: m('cos(180° − α)') + ' equals:', a: [m('cos α'), m('−cos α'), m('sin α'), m('−sin α')], c: 1, why: 'The abscissa is negated.' },
    { q: m('cos 120°') + ' equals:', a: [m(f('1', '2')), m('−' + f('1', '2')), m(f(sr('3'), '2')), m('−' + f(sr('3'), '2'))], c: 1, why: m('180° − 60°') + '.' },
    { q: m('sin α = ' + f('1', '2')) + ' in a triangle gives:', a: [m('30°') + ' only', m('150°') + ' only', 'both', 'neither'], c: 2, why: 'Sine is ambiguous.' }
  ],
  practice: {
    easy: [
      [m('sin 90°'), m('1')],
      [m('cos 90°'), m('0')],
      [m('sin 180°'), m('0')],
      [m('cos 180°'), m('−1')],
      [m('sin 120°'), m(f(sr('3'), '2'))],
      [m('cos 120°'), m('−' + f('1', '2'))],
      [m('sin 150°'), m(f('1', '2'))]
    ],
    med: [
      [m('cos 150°'), m('−' + f(sr('3'), '2'))],
      [m('sin 135°'), m(f(sr('2'), '2'))],
      [m('cos 135°'), m('−' + f(sr('2'), '2'))],
      [m('tan 120°'), m('−' + sr('3'))],
      [m('tan 135°'), m('−1')],
      [m('sin α = ' + f('1', '2')) + ' in a triangle', m('30°') + ' or ' + m('150°')],
      [m('cos α = −' + f('1', '2')) + ' in a triangle', m('120°')]
    ],
    hard: [
      [m('sin 120° + cos 60°'), m(f(sr('3') + ' + 1', '2'))],
      [m('sin 150° · cos 150°'), m('−' + f(sr('3'), '4'))],
      [m('sin²120° + cos²120°'), m('1')],
      [m('cos α = −0.8') + ' in a triangle: ' + m('sin α'), m('0.6')],
      [m('sin α = 0.6') + ' and ' + m('α') + ' obtuse: ' + m('cos α'), m('−0.8')],
      ['Which angle of a triangle can have a negative cosine?', 'At most one — the obtuse angle'],
      ['Simplify ' + m('sin(180° − α) + cos(180° − α)'), m('sin α − cos α')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite every obtuse angle as ' + m('180° − α') + ' before using the table.',
  homework: [
    'Find ' + m('sin 135°') + ', ' + m('cos 135°') + ' and ' + m('tan 135°') + '.',
    'Find ' + m('sin 150°') + ' and ' + m('cos 150°') + '.',
    'An angle of a triangle has ' + m('sin α = ' + f(sr('2'), '2')) + '. What can ' + m('α') + ' be?',
    'An angle of a triangle has ' + m('cos α = −0.6') + '. Find ' + m('sin α') + '.',
    'Explain why the sine of any angle of a triangle is positive.'
  ]
});

/* ============================== 18 ============================== */
G9_GEO.push({
  id: 'g9-18', stream: 'geo', grade: 9, quarter: 2, lessons: '21', hours: 1,
  title: 'The area of a triangle from two sides and the angle between them',
  subtitle: 'S = ½ab sin C — the formula that needs no height at all.',
  uz: 'Geometriya 9, §15', uzPage: 'pp. 83–86',
  cam: 'IGX 7.1', camPage: 'Core & Extended, pp. 130–136', wb: 'Exercise 7.1',
  objectives: [
    'Derive S = ½ab sin C from the base-and-height formula.',
    'Use the formula for acute and obtuse included angles.',
    'Rearrange it to find a side or the angle.',
    'Apply it to parallelograms and to land measurement.'
  ],
  terms: [
    ['Area of a triangle', 'Uchburchak yuzi', 'Площадь треугольника'],
    ['Included angle', 'Orasidagi burchak', 'Угол между сторонами'],
    ['Height', 'Balandlik', 'Высота'],
    ['Base', 'Asos', 'Основание'],
    ['To rearrange', 'Almashtirish', 'Выразить'],
    ['Parallelogram', 'Parallelogramm', 'Параллелограмм'],
    ['Square unit', 'Kvadrat birlik', 'Квадратная единица'],
    ['Two answers', 'Ikki javob', 'Два ответа']
  ],
  timing: [[10, 'The derivation'], [14, 'Using it'], [10, 'Backwards'], [6, 'Homework']],
  sections: [
    {
      h: 'The derivation',
      html: `<p>In ${m('△ABC')} drop the height ${m('h')} from ${m('A')} to ${m('BC')}. In the right
      triangle formed, ${m('h = b sin C')}. Substituting into ${m('S = ' + f('1', '2') + 'ah')}:</p>
      ${eq(m('S = ' + f('1', '2') + 'ab sin C'), true)}
      {{fig:areaTriangle:The height is b sin C — so the area needs only two sides and the angle between them.}}
      <p>The same argument works when ${m('C')} is obtuse: the foot of the height falls outside the
      triangle, but ${m('h = b sin(180° − C) = b sin C')} all the same. That is precisely why the last
      lesson was needed.</p>
      <div class="keybox"><div class="klabel">Two sides and the angle <b>between</b> them</div>
      The angle must be the included one. ${m('S = ' + f('1', '2') + 'ab sin A')} is wrong unless
      ${m('A')} happens to lie between the sides ${m('a')} and ${m('b')} — which it does not, since
      ${m('a')} is opposite ${m('A')}.</div>`
    },
    {
      h: 'Using it',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Sides</th><th>Angle</th><th>Area</th></tr></thead>
      <tbody>
        <tr><td class="m">6, 8</td><td class="m">30°</td><td class="m">½ · 48 · 0.5 = 12</td></tr>
        <tr><td class="m">6, 8</td><td class="m">90°</td><td class="m">24</td></tr>
        <tr><td class="m">6, 8</td><td class="m">150°</td><td class="m">12</td></tr>
        <tr><td class="m">5, 5</td><td class="m">60°</td><td class="m">${f('25' + sr('3'), '4')}</td></tr>
      </tbody></table></div>
      <p>The first and third rows have the same area, because ${m('sin 30° = sin 150°')}. The area is
      greatest when the angle is ${m('90°')} — a fact worth remembering for optimisation questions.</p>
      <p>For a <b>parallelogram</b> the same two sides and angle give twice as much:
      ${m('S = ab sin C')}.</p>
      <div class="keybox"><div class="klabel">The greatest area for two given sides is at ${m('90°')}</div>
      Because ${m('sin C ≤ 1')} with equality only at ${m('C = 90°')}. Any “maximise the area” question
      about two fixed sides has the same one-word answer.</div>`
    },
    {
      h: 'Backwards',
      html: `<p>Rearranging gives a side or the angle.</p>
      ${eq(m('sin C = ' + f('2S', 'ab')) + '     ' + m('b = ' + f('2S', 'a sin C')), true)}
      <p><b>Example.</b> ${m('S = 12')}, ${m('a = 6')}, ${m('b = 8')}. Then
      ${m('sin C = ' + f('24', '48') + ' = 0.5')}, so ${m('C = 30°')} <b>or</b> ${m('C = 150°')}.</p>
      <div class="warn"><span class="wl">Give both answers unless the question rules one out</span>
      A sine does not determine an angle of a triangle. Only extra information — “the triangle is
      acute”, or a diagram — removes one of the two. Losing the second answer is the standard mistake
      here and in the sine rule.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the area of a triangle with sides ' + m('6') + ' and ' + m('8') + ' and included angle ' + m('30°') + '.',
      steps: [
        [m('S = ' + f('1', '2') + ' · 6 · 8 · sin 30°'), ''],
        [m('= 24 × 0.5'), ''],
        [m('= 12'), ''],
        ['The same as with ' + m('150°') + '.', m('sin 30° = sin 150°') + '.']
      ],
      ans: m('12')
    },
    {
      q: 'A triangle has area ' + m('20') + ' and sides ' + m('8') + ' and ' + m('10') + ' about the included angle. Find that angle.',
      steps: [
        [m('sin C = ' + f('2 × 20', '80')), ''],
        [m('= 0.5'), ''],
        [m('C = 30°') + ' or ' + m('C = 150°') + '.', ''],
        ['Both are possible without more information.', '']
      ],
      ans: m('30°') + ' or ' + m('150°')
    },
    {
      q: 'A parallelogram has sides ' + m('7') + ' and ' + m('9') + ' with an angle of ' + m('120°') + '. Find its area.',
      steps: [
        [m('S = ab sin C') + ' for a parallelogram.', 'Twice the triangle.'],
        [m('= 7 × 9 × sin 120°'), ''],
        [m('= 63 × ' + f(sr('3'), '2')), ''],
        [m('= ' + f('63' + sr('3'), '2') + ' ≈ 54.6'), '']
      ],
      ans: m(f('63' + sr('3'), '2'))
    }
  ],
  modelNote: 'Fix two rods at a hinge and open them slowly; the area of the triangle they span grows to a maximum at a right angle and falls again — the formula made physical.',
  interactive: {
    type: 'solveTriangle',
    title: 'Two sides and the angle between',
    hint: 'Open the angle past 90° and watch the area fall.'
  },
  quiz: [
    { q: 'The area formula is:', a: [m('½ab sin C'), m('ab sin C'), m('½ab cos C'), m('½a sin C')], c: 0, why: m('h = b sin C') + '.' },
    { q: 'The angle must be:', a: ['the largest', 'the included one', 'acute', 'opposite ' + m('a')], c: 1, why: 'Between the two sides.' },
    { q: 'Sides ' + m('6, 8') + ' and ' + m('30°') + ':', a: [m('12'), m('24'), m('48'), m('6')], c: 0, why: m('24 × 0.5') + '.' },
    { q: 'The area is greatest when the angle is:', a: [m('30°'), m('60°'), m('90°'), m('180°')], c: 2, why: m('sin C ≤ 1') + '.' },
    { q: m('sin C = 0.5') + ' gives:', a: [m('30°'), m('150°'), 'both', 'neither'], c: 2, why: 'Sine is ambiguous.' },
    { q: 'For a parallelogram the area is:', a: [m('½ab sin C'), m('ab sin C'), m('2ab sin C'), m('ab cos C')], c: 1, why: 'Two triangles.' }
  ],
  practice: {
    easy: [
      ['Sides ' + m('6, 8') + ', angle ' + m('30°'), m('12')],
      ['Sides ' + m('6, 8') + ', angle ' + m('90°'), m('24')],
      ['Sides ' + m('6, 8') + ', angle ' + m('150°'), m('12')],
      ['Sides ' + m('10, 12') + ', angle ' + m('30°'), m('30')],
      ['Sides ' + m('5, 5') + ', angle ' + m('60°'), m(f('25' + sr('3'), '4'))],
      ['Parallelogram ' + m('4, 6') + ', angle ' + m('30°'), m('12')],
      ['Greatest area for sides ' + m('6, 8'), m('24')]
    ],
    med: [
      ['Sides ' + m('7, 9') + ', angle ' + m('120°') + ': triangle area', m(f('63' + sr('3'), '4'))],
      ['Same as a parallelogram', m(f('63' + sr('3'), '2'))],
      [m('S = 20') + ', sides ' + m('8, 10') + ': the angle', m('30°') + ' or ' + m('150°')],
      [m('S = 24') + ', ' + m('a = 8') + ', ' + m('C = 30°') + ': ' + m('b'), m('12')],
      ['Sides ' + m('12, 5') + ', angle ' + m('90°'), m('30')],
      ['An equilateral triangle of side ' + m('a'), m(f('a²' + sr('3'), '4'))],
      ['A rhombus of side ' + m('6') + ' with a ' + m('60°') + ' angle', m('18' + sr('3'))]
    ],
    hard: [
      ['A field: two sides ' + m('120 m') + ' and ' + m('150 m') + ' with an angle of ' + m('75°'), m('≈ 8693 m²')],
      ['A triangle with ' + m('S = 30') + ', ' + m('a = 10') + ', ' + m('b = 12') + ': the angle', m('30°') + ' or ' + m('150°')],
      ['A quadrilateral split by a diagonal into ' + m('△(6, 8, 45°)') + ' and ' + m('△(8, 5, 60°)'), m('≈ 34.3')],
      ['A regular hexagon of side ' + m('4'), m('24' + sr('3'))],
      ['Two sides ' + m('a') + ' and ' + m('b') + ': the angle giving half the maximum area', m('30°') + ' or ' + m('150°')],
      ['A triangle of area ' + m('18') + ' with sides ' + m('6') + ' and ' + m('12'), m('30°') + ' or ' + m('150°')],
      ['Prove that the area of a parallelogram is ' + m('ab sin C'), 'Two congruent triangles']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'When a sine gives two angles, write both unless the question excludes one.',
  homework: [
    'Find the area of a triangle with sides ' + m('9') + ' and ' + m('14') + ' and included angle ' + m('45°') + '.',
    'A triangle has area ' + m('35') + ' and sides ' + m('10') + ' and ' + m('14') + '. Find the included angle.',
    'A parallelogram has sides ' + m('5') + ' and ' + m('8') + ' with an angle of ' + m('150°') + '. Find its area.',
    'Find the area of a regular hexagon of side ' + m('6') + '.',
    'Show that the area of a triangle with two given sides is greatest when the included angle is ' + m('90°') + '.'
  ]
});

/* ============================== 19 ============================== */
G9_GEO.push({
  id: 'g9-19', stream: 'geo', grade: 9, quarter: 2, lessons: '22', hours: 1,
  title: 'The sine rule',
  subtitle: 'A side and its opposite angle move together — and the constant is the circumcircle’s diameter.',
  uz: 'Geometriya 9, §16', uzPage: 'pp. 87–91',
  cam: 'Extension beyond IGX', camPage: 'Core & Extended, pp. 310–316', wb: 'Exercise 15.2',
  objectives: [
    'State and prove the sine rule.',
    'Use it when a side and its opposite angle are known.',
    'Know that a/sin A = 2R and use it to find a circumradius.',
    'Recognise and resolve the ambiguous case.'
  ],
  terms: [
    ['Sine rule', 'Sinuslar teoremasi', 'Теорема синусов'],
    ['Opposite side', 'Qarshi tomon', 'Противолежащая сторона'],
    ['Circumscribed circle', 'Tashqi chizilgan aylana', 'Описанная окружность'],
    ['Circumradius', 'Tashqi radius', 'Радиус описанной окружности'],
    ['Ambiguous case', 'Noaniq hol', 'Неоднозначный случай'],
    ['Proportion', 'Proporsiya', 'Пропорция'],
    ['Solve a triangle', 'Uchburchakni yechish', 'Решить треугольник'],
    ['Given', 'Berilgan', 'Дано']
  ],
  timing: [[10, 'The rule'], [12, 'When to use it'], [12, 'The ambiguous case'], [6, 'Homework']],
  sections: [
    {
      h: 'The rule',
      html: `${eq(m(f('a', 'sin A') + ' = ' + f('b', 'sin B') + ' = ' + f('c', 'sin C') + ' = 2R'), true)}
      <p>where ${m('R')} is the radius of the circumscribed circle. The proof: the area of the triangle
      is ${m(f('1', '2') + 'ab sin C = ' + f('1', '2') + 'bc sin A = ' + f('1', '2') + 'ca sin B')};
      dividing all three by ${m(f('1', '2') + 'abc')} gives the rule at once.</p>
      {{fig:sineCosRule:Each side divided by the sine of its opposite angle gives the same number.}}
      <div class="keybox"><div class="klabel">The constant is not arbitrary</div>
      That the common value is ${m('2R')} is a genuinely useful fact: it turns any triangle question
      into a circle question. A triangle with ${m('a = 6')} and ${m('A = 30°')} sits in a circle of
      radius ${m('6')}, whatever its other two sides are.</div>`
    },
    {
      h: 'When to use it',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Use</th><th>Find</th></tr></thead>
      <tbody>
        <tr><td>two angles and any side (AAS, ASA)</td><td>the sine rule</td><td>the other sides</td></tr>
        <tr><td>two sides and an angle opposite one of them (SSA)</td><td>the sine rule</td><td>the other angle — <b>possibly two answers</b></td></tr>
        <tr><td>two sides and the included angle (SAS)</td><td>the cosine rule</td><td>—</td></tr>
        <tr><td>three sides (SSS)</td><td>the cosine rule</td><td>—</td></tr>
      </tbody></table></div>
      <p><b>Example.</b> ${m('A = 40°')}, ${m('B = 60°')}, ${m('a = 8')}. Then ${m('C = 80°')} and</p>
      ${eq(m('b = ' + f('a sin B', 'sin A') + ' = ' + f('8 sin 60°', 'sin 40°') + ' ≈ 10.8'), true)}
      <div class="keybox"><div class="klabel">Pair a side with its own opposite angle</div>
      The rule links ${m('a')} with ${m('A')}, never ${m('a')} with ${m('B')}. If the given data contains
      no such matched pair, the sine rule cannot start and the cosine rule is the tool.</div>`
    },
    {
      h: 'The ambiguous case',
      html: `<p>When two sides and a <b>non-included</b> angle are given, the sine found may correspond to
      two angles, and both may give a valid triangle.</p>
      <p><b>Example.</b> ${m('a = 7')}, ${m('b = 9')}, ${m('A = 40°')}. Then</p>
      ${eq(m('sin B = ' + f('9 sin 40°', '7') + ' ≈ 0.826'), true)}
      <p>so ${m('B ≈ 55.7°')} or ${m('B ≈ 124.3°')}. Both leave a positive third angle
      (${m('84.3°')} or ${m('15.7°')}), so <b>both triangles exist</b>.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Check</th><th>Conclusion</th></tr></thead>
      <tbody>
        <tr><td class="m">sin B > 1</td><td>no triangle</td></tr>
        <tr><td>the obtuse option makes the angle sum exceed ${m('180°')}</td><td>one triangle</td></tr>
        <tr><td>both options leave a positive third angle</td><td>two triangles</td></tr>
        <tr><td>the side opposite the given angle is the longer</td><td>one triangle</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Always test the obtuse option</span>
      Add it to the given angle: if the total is ${m('180°')} or more, discard it; otherwise it is a real
      second answer. A question that expects two triangles and receives one loses half its marks.</div>`
    }
  ],
  examples: [
    {
      q: 'In ' + m('△ABC') + ', ' + m('A = 40°') + ', ' + m('B = 60°') + ', ' + m('a = 8') + '. Find ' + m('b') + ' and ' + m('C') + '.',
      steps: [
        [m('C = 180° − 40° − 60° = 80°'), ''],
        [m(f('b', 'sin 60°') + ' = ' + f('8', 'sin 40°')), ''],
        [m('b = ' + f('8 × 0.866', '0.643')), ''],
        [m('b ≈ 10.8'), '']
      ],
      ans: m('b ≈ 10.8') + ', ' + m('C = 80°')
    },
    {
      q: 'In ' + m('△ABC') + ', ' + m('a = 7') + ', ' + m('b = 9') + ', ' + m('A = 40°') + '. Find ' + m('B') + '.',
      steps: [
        [m('sin B = ' + f('9 sin 40°', '7') + ' ≈ 0.826'), ''],
        [m('B ≈ 55.7°') + ' or ' + m('B ≈ 124.3°') + '.', ''],
        ['Check: ' + m('40 + 124.3 = 164.3 < 180') + ' ✓', 'Both survive.'],
        ['Two triangles exist.', '']
      ],
      ans: m('B ≈ 55.7°') + ' or ' + m('124.3°')
    },
    {
      q: 'A triangle has ' + m('a = 10') + ' and ' + m('A = 30°') + '. Find the radius of its circumscribed circle.',
      steps: [
        [m(f('a', 'sin A') + ' = 2R'), ''],
        [m('2R = ' + f('10', '0.5')), ''],
        [m('2R = 20'), ''],
        [m('R = 10'), '']
      ],
      ans: m('R = 10')
    }
  ],
  modelNote: 'Draw one circle and inscribe three different triangles on the same chord; the class sees that the angle opposite that chord never changes, which is the sine rule in a picture.',
  interactive: {
    type: 'solveTriangle',
    title: 'A side and its opposite angle',
    hint: 'Change one pair and watch the ratio stay fixed.'
  },
  quiz: [
    { q: 'The sine rule links:', a: ['any side with any angle', 'a side with its opposite angle', 'two sides', 'two angles'], c: 1, why: 'Matched pairs only.' },
    { q: 'The common value equals:', a: [m('R'), m('2R'), m('R²'), m('πR')], c: 1, why: 'The circumdiameter.' },
    { q: 'Use the sine rule when given:', a: ['SSS', 'SAS', 'AAS', 'nothing'], c: 2, why: 'A matched pair exists.' },
    { q: 'The ambiguous case arises with:', a: ['AAS', 'SAS', 'SSA', 'SSS'], c: 2, why: 'A non-included angle.' },
    { q: m('a = 10, A = 30°') + ': ' + m('R') + ' =', a: [m('5'), m('10'), m('20'), m('15')], c: 1, why: m('2R = 20') + '.' },
    { q: m('sin B > 1') + ' means:', a: ['two triangles', 'one triangle', 'no triangle', 'a right angle'], c: 2, why: 'Impossible data.' }
  ],
  practice: {
    easy: [
      ['State the sine rule', m(f('a', 'sin A') + ' = ' + f('b', 'sin B') + ' = ' + f('c', 'sin C'))],
      ['The common value equals', m('2R')],
      [m('a = 10, A = 30°') + ': ' + m('R'), m('10')],
      [m('a = 8, A = 90°') + ': ' + m('R'), m('4')],
      [m('A = 40°, B = 60°') + ': ' + m('C'), m('80°')],
      ['Use the sine rule for', 'AAS or SSA'],
      ['Use the cosine rule for', 'SAS or SSS']
    ],
    med: [
      [m('A = 40°, B = 60°, a = 8') + ': ' + m('b'), m('≈ 10.8')],
      ['Same: ' + m('c'), m('≈ 12.3')],
      [m('a = 7, b = 9, A = 40°') + ': ' + m('sin B'), m('≈ 0.826')],
      ['Same: ' + m('B'), m('≈ 55.7°') + ' or ' + m('124.3°')],
      [m('a = 12, A = 45°, B = 60°') + ': ' + m('b'), m('≈ 14.7')],
      [m('a = 5, b = 8, A = 30°') + ': ' + m('sin B'), m('0.8')],
      ['Same: how many triangles?', 'Two']
    ],
    hard: [
      [m('a = 9, b = 5, A = 60°') + ': how many triangles?', 'One — ' + m('a > b')],
      [m('a = 4, b = 9, A = 40°') + ': how many triangles?', 'None — ' + m('sin B > 1')],
      ['A triangle inscribed in a circle of radius ' + m('6') + ' has ' + m('A = 30°') + ': ' + m('a'), m('6')],
      ['An equilateral triangle of side ' + m('a') + ': its circumradius', m(f('a', sr('3')))],
      [m('A = 45°, B = 105°, c = 10') + ': ' + m('a'), m('≈ 14.1')],
      ['A triangle with ' + m('A = 30°, B = 45°') + ' and ' + m('a = 6') + ': its area', m('≈ 24.6')],
      ['Prove ' + m(f('a', 'sin A') + ' = 2R'), 'The inscribed angle on the chord ' + m('a')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Test the obtuse option in every SSA question, and say whether it survives.',
  homework: [
    'In ' + m('△ABC') + ', ' + m('A = 50°') + ', ' + m('B = 70°') + ', ' + m('a = 12') + '. Find ' + m('b') + ' and ' + m('c') + '.',
    'In ' + m('△ABC') + ', ' + m('a = 6') + ', ' + m('b = 10') + ', ' + m('A = 30°') + '. Find ' + m('B') + ', and say how many triangles exist.',
    'A triangle has ' + m('a = 14') + ' and ' + m('A = 45°') + '. Find its circumradius.',
    'In ' + m('△ABC') + ', ' + m('a = 5') + ', ' + m('b = 12') + ', ' + m('A = 60°') + '. How many triangles are possible?',
    'Prove the sine rule from the area formula.'
  ]
});

/* ============================== 20 ============================== */
G9_GEO.push({
  id: 'g9-20', stream: 'geo', grade: 9, quarter: 2, lessons: '23', hours: 1,
  title: 'The cosine rule',
  subtitle: 'Pythagoras with a correction term — and the tool for every triangle the sine rule cannot start.',
  uz: 'Geometriya 9, §17', uzPage: 'pp. 92–96',
  cam: 'Extension beyond IGX', camPage: 'Core & Extended, pp. 317–322', wb: 'Exercise 15.3',
  objectives: [
    'State and use the cosine rule in both of its forms.',
    'Use it for SAS and for SSS.',
    'See Pythagoras’ theorem as the special case C = 90°.',
    'Use the sign of cos C to classify a triangle as acute, right or obtuse.'
  ],
  terms: [
    ['Cosine rule', 'Kosinuslar teoremasi', 'Теорема косинусов'],
    ['Correction term', 'Tuzatish hadi', 'Поправочный член'],
    ['Special case', 'Xususiy hol', 'Частный случай'],
    ['Acute triangle', 'O‘tkir burchakli uchburchak', 'Остроугольный треугольник'],
    ['Obtuse triangle', 'O‘tmas burchakli uchburchak', 'Тупоугольный треугольник'],
    ['Rearrange', 'Almashtirish', 'Выразить'],
    ['Longest side', 'Eng katta tomon', 'Наибольшая сторона'],
    ['Unique', 'Yagona', 'Единственный']
  ],
  timing: [[10, 'The rule'], [12, 'Two uses'], [12, 'Classifying a triangle'], [6, 'Homework']],
  sections: [
    {
      h: 'The rule',
      html: `${eq(m('c² = a² + b² − 2ab cos C'), true)}
      <p>and likewise for the other two sides. When ${m('C = 90°')}, ${m('cos C = 0')} and the rule
      becomes ${m('c² = a² + b²')} — Pythagoras' theorem is the special case.</p>
      {{fig:sineCosRule:The cosine rule corrects Pythagoras by the term −2ab cos C.}}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">C</th><th class="m">cos C</th><th>Effect</th></tr></thead>
      <tbody>
        <tr><td class="m">< 90°</td><td class="m">> 0</td><td class="m">c² < a² + b²</td></tr>
        <tr><td class="m">= 90°</td><td class="m">0</td><td class="m">c² = a² + b²</td></tr>
        <tr><td class="m">> 90°</td><td class="m">< 0</td><td class="m">c² > a² + b²</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Unlike the sine rule, the cosine rule is never ambiguous</div>
      A cosine determines an angle between ${m('0°')} and ${m('180°')} uniquely, sign and all. When both
      rules could be used to find an angle, the cosine rule is the safer choice.</div>`
    },
    {
      h: 'Two uses',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Form to use</th><th>Finds</th></tr></thead>
      <tbody>
        <tr><td>SAS — two sides and the included angle</td><td class="m">c² = a² + b² − 2ab cos C</td><td>the third side</td></tr>
        <tr><td>SSS — three sides</td><td class="m">cos C = ${f('a² + b² − c²', '2ab')}</td><td>any angle</td></tr>
      </tbody></table></div>
      <p><b>Example (SAS).</b> ${m('a = 7')}, ${m('b = 9')}, ${m('C = 60°')}:</p>
      ${eq(m('c² = 49 + 81 − 2 · 63 · 0.5 = 130 − 63 = 67') + ',  so  ' + m('c = ' + sr('67') + ' ≈ 8.19'), true)}
      <p><b>Example (SSS).</b> ${m('a = 5')}, ${m('b = 6')}, ${m('c = 7')}:</p>
      ${eq(m('cos C = ' + f('25 + 36 − 49', '60') + ' = ' + f('12', '60') + ' = 0.2') + ',  so  ' + m('C ≈ 78.5°'), true)}
      <div class="warn"><span class="wl">The angle in the formula is opposite the side that stands alone</span>
      In ${m('c² = a² + b² − 2ab cos C')}, the angle ${m('C')} and the side ${m('c')} are a matched pair.
      Using ${m('cos A')} with ${m('c')} on the left is the standard error.</div>`
    },
    {
      h: 'Classifying a triangle',
      html: `<p>Compare the square of the longest side with the sum of the other two squares.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Sides</th><th>Test</th><th>Type</th></tr></thead>
      <tbody>
        <tr><td class="m">3, 4, 5</td><td class="m">25 = 9 + 16</td><td>right</td></tr>
        <tr><td class="m">4, 5, 6</td><td class="m">36 < 16 + 25</td><td>acute</td></tr>
        <tr><td class="m">4, 5, 8</td><td class="m">64 > 16 + 25</td><td>obtuse</td></tr>
      </tbody></table></div>
      <p>Only the longest side needs testing: the angle opposite it is the largest, and a triangle has at
      most one non-acute angle.</p>
      <div class="keybox"><div class="klabel">One inequality decides the whole triangle</div>
      That is why the test is so quick, and it is a favourite short question in both the national and
      the Cambridge papers.</div>`
    }
  ],
  examples: [
    {
      q: 'Find ' + m('c') + ' when ' + m('a = 7') + ', ' + m('b = 9') + ', ' + m('C = 60°') + '.',
      steps: [
        [m('c² = 7² + 9² − 2 · 7 · 9 · cos 60°'), ''],
        [m('= 49 + 81 − 126 × 0.5'), ''],
        [m('= 130 − 63 = 67'), ''],
        [m('c = ' + sr('67') + ' ≈ 8.19'), '']
      ],
      ans: m('c ≈ 8.19')
    },
    {
      q: 'Find the largest angle of the triangle with sides ' + m('5, 6, 7') + '.',
      steps: [
        ['The largest angle is opposite ' + m('7') + '.', ''],
        [m('cos C = ' + f('25 + 36 − 49', '2 · 5 · 6')), ''],
        [m('= ' + f('12', '60') + ' = 0.2'), ''],
        [m('C ≈ 78.5°'), 'Acute — so the triangle is acute.']
      ],
      ans: m('≈ 78.5°')
    },
    {
      q: 'Classify the triangle with sides ' + m('4, 5, 8') + '.',
      steps: [
        ['Longest side ' + m('8') + ': ' + m('8² = 64') + '.', ''],
        [m('4² + 5² = 16 + 25 = 41'), ''],
        [m('64 > 41'), ''],
        ['Obtuse.', 'The angle opposite ' + m('8') + ' exceeds ' + m('90°') + '.']
      ],
      ans: 'Obtuse'
    }
  ],
  modelNote: 'Fix two rods at 90° and read the third side; then open and close the angle and let the class see the correction term appear with each sign.',
  interactive: {
    type: 'solveTriangle',
    title: 'Pythagoras, corrected',
    hint: 'Set the angle to 90° and the correction vanishes.'
  },
  quiz: [
    { q: 'The cosine rule is:', a: [m('c² = a² + b² − 2ab cos C'), m('c² = a² + b² + 2ab cos C'), m('c = a + b − 2ab cos C'), m('c² = a² − b²')], c: 0, why: 'Pythagoras plus a correction.' },
    { q: m('C = 90°') + ' gives:', a: ['the sine rule', 'Pythagoras', 'nothing', 'the area formula'], c: 1, why: m('cos 90° = 0') + '.' },
    { q: 'Use it for:', a: ['AAS', 'SSA', 'SAS or SSS', 'AAA'], c: 2, why: 'When no matched pair exists.' },
    { q: 'Is the cosine rule ambiguous?', a: ['yes', 'no', 'sometimes', 'only for SSS'], c: 1, why: 'A cosine fixes the angle.' },
    { q: 'Sides ' + m('4, 5, 8') + ' make a triangle that is:', a: ['acute', 'right', 'obtuse', 'impossible'], c: 2, why: m('64 > 41') + '.' },
    { q: m('cos C < 0') + ' means ' + m('C') + ' is:', a: ['acute', 'right', 'obtuse', 'impossible'], c: 2, why: 'Beyond ' + m('90°') + '.' }
  ],
  practice: {
    easy: [
      ['State the cosine rule', m('c² = a² + b² − 2ab cos C')],
      [m('C = 90°') + ' gives', m('c² = a² + b²')],
      ['Use for SAS or', 'SSS'],
      ['Sides ' + m('3, 4, 5'), 'Right'],
      ['Sides ' + m('4, 5, 6'), 'Acute'],
      ['Sides ' + m('4, 5, 8'), 'Obtuse'],
      [m('cos C < 0') + ' means', m('C') + ' is obtuse']
    ],
    med: [
      [m('a = 7, b = 9, C = 60°') + ': ' + m('c'), m('≈ 8.19')],
      [m('a = 5, b = 8, C = 120°') + ': ' + m('c'), m('≈ 11.4')],
      ['Sides ' + m('5, 6, 7') + ': the largest angle', m('≈ 78.5°')],
      ['Sides ' + m('3, 5, 7') + ': the largest angle', m('120°')],
      [m('a = 6, b = 10, C = 90°') + ': ' + m('c'), m('≈ 11.66')],
      ['Sides ' + m('2, 3, 4') + ': ' + m('cos C') + ' for the largest angle', m('−' + f('1', '4'))],
      ['Sides ' + m('7, 8, 9') + ': type', 'Acute']
    ],
    hard: [
      ['Sides ' + m('3, 5, 7') + ': the area', m(f('15' + sr('3'), '4'))],
      ['A parallelogram with sides ' + m('5, 8') + ' and an angle of ' + m('60°') + ': the shorter diagonal', m('7')],
      ['The longer diagonal', m(sr('129'))],
      ['A triangle with ' + m('a = 8, b = 5, c = 7') + ': ' + m('cos A'), m(f('1', '7'))],
      ['Two ships leave a port at ' + m('40°') + ' apart, at ' + m('12') + ' and ' + m('18 km/h') + ': their distance after ' + m('2 h'), m('≈ 23.4 km')],
      ['For which ' + m('x') + ' is the triangle ' + m('5, 12, x') + ' right-angled?', m('13') + ' or ' + m(sr('119'))],
      ['A triangle with sides ' + m('n, n+1, n+2') + ' is right-angled for', m('n = 3')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Pair the lone side with the angle in the formula; write the pair down before substituting.',
  homework: [
    'Find ' + m('c') + ' when ' + m('a = 6') + ', ' + m('b = 10') + ', ' + m('C = 120°') + '.',
    'Find the largest angle of the triangle with sides ' + m('4, 6, 8') + '.',
    'Classify the triangles with sides ' + m('6, 8, 9') + ' and ' + m('6, 8, 11') + '.',
    'Two roads leave a junction at ' + m('55°') + '. Find the distance between points ' + m('5 km') + ' and ' + m('8 km') + ' along them.',
    'Show that the cosine rule gives Pythagoras’ theorem when ' + m('C = 90°') + '.'
  ]
});

/* ============================== 21 ============================== */
G9_GEO.push({
  id: 'g9-21', stream: 'geo', grade: 9, quarter: 2, lessons: '24–25', hours: 2,
  title: 'Applications of the sine and cosine rules',
  subtitle: 'Bearings, heights, distances across a river — the rules put to work outside the exercise book.',
  uz: 'Geometriya 9, §18', uzPage: 'pp. 97–103',
  cam: 'Extension beyond IGX', camPage: 'Core & Extended, pp. 323–330', wb: 'Exercise 15.4',
  objectives: [
    'Choose between the two rules from the given data.',
    'Draw a labelled diagram from a worded description, including bearings.',
    'Solve problems on distance, height and navigation.',
    'Give answers to a sensible accuracy with units.'
  ],
  terms: [
    ['Bearing', 'Azimut', 'Азимут'],
    ['Due north', 'Shimolga', 'На север'],
    ['Angle of elevation', 'Ko‘tarilish burchagi', 'Угол возвышения'],
    ['Angle of depression', 'Tushish burchagi', 'Угол понижения'],
    ['Navigation', 'Navigatsiya', 'Навигация'],
    ['Accuracy', 'Aniqlik', 'Точность'],
    ['Three-figure bearing', 'Uch xonali azimut', 'Трёхзначный азимут'],
    ['Sketch', 'Chizma', 'Чертёж']
  ],
  timing: [[15, 'Choosing the rule'], [25, 'Bearings'], [25, 'Heights and distances'], [20, 'Accuracy'], [5, 'Homework']],
  sections: [
    {
      h: 'Choosing the rule',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Rule</th><th>Note</th></tr></thead>
      <tbody>
        <tr><td>two angles and a side</td><td>sine</td><td>find the third angle first</td></tr>
        <tr><td>two sides and a non-included angle</td><td>sine</td><td>check for two answers</td></tr>
        <tr><td>two sides and the included angle</td><td>cosine</td><td>gives the third side</td></tr>
        <tr><td>three sides</td><td>cosine</td><td>gives any angle</td></tr>
        <tr><td>two sides and the included angle, area wanted</td><td class="m">½ab sin C</td><td>no third side needed</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Look for a matched pair</div>
      A side together with its opposite angle means the sine rule can start. If the data contains no such
      pair, use the cosine rule — that decision takes five seconds and settles the whole question.</div>`
    },
    {
      h: 'Bearings',
      html: `<p>A <b>bearing</b> is measured clockwise from due north and always written with three
      figures: ${m('060°')}, ${m('135°')}, ${m('310°')}.</p>
      {{fig:bearings:Bearings are measured clockwise from north, and written with three figures.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Direction</th><th>Bearing</th></tr></thead>
      <tbody>
        <tr><td>north</td><td class="m">000°</td></tr>
        <tr><td>east</td><td class="m">090°</td></tr>
        <tr><td>south</td><td class="m">180°</td></tr>
        <tr><td>west</td><td class="m">270°</td></tr>
      </tbody></table></div>
      <p>The <b>back bearing</b> — from ${m('B')} to ${m('A')} when the bearing from ${m('A')} to
      ${m('B')} is known — is found by adding ${m('180°')} and subtracting ${m('360°')} if the result
      exceeds it.</p>
      <div class="warn"><span class="wl">The angle in the triangle is not the bearing</span>
      Two bearings of ${m('060°')} and ${m('140°')} from the same point give an angle of ${m('80°')}
      between the paths. Always convert bearings into an angle of the triangle before applying a
      rule.</div>`
    },
    {
      h: 'Heights and distances',
      html: `<p><b>Across a river.</b> To find ${m('AB')} across water: mark a baseline ${m('AC')} on one
      bank, measure ${m('AC')}, and measure the angles at ${m('A')} and ${m('C')} to the far point
      ${m('B')}. Then the sine rule gives ${m('AB')}.</p>
      <p><b>A tower.</b> From two points ${m('50 m')} apart in line with the base, the angles of
      elevation are ${m('30°')} and ${m('45°')}. The triangle formed by the two observation points and
      the top has angles ${m('30°')}, ${m('135°')} and ${m('15°')} — and the sine rule gives the slant
      distance, then the height.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td>angle at the top</td><td class="m">45° − 30° = 15°</td></tr>
        <tr><td>sine rule</td><td class="m">${f('d', 'sin 30°')} = ${f('50', 'sin 15°')}</td></tr>
        <tr><td class="m">d</td><td class="m">≈ 96.6</td></tr>
        <tr><td>height</td><td class="m">96.6 sin 45° ≈ 68.3</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The angle at the top is the difference of the elevations</div>
      It is the exterior-angle theorem in disguise, and it turns every two-observation tower problem into
      a single application of the sine rule.</div>`
    },
    {
      h: 'Accuracy',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Data given to</th><th>Answer to</th></tr></thead>
      <tbody>
        <tr><td>whole numbers</td><td>3 significant figures</td></tr>
        <tr><td>1 decimal place</td><td>3 significant figures</td></tr>
        <tr><td>exact values</td><td>exact, if possible</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Do not round in the middle</span>
      Rounding ${m('sin 15°')} to ${m('0.26')} before dividing shifts the tower's height by more than a
      metre. Keep full accuracy in the calculator and round only the final answer — and always give the
      unit.</div>`
    }
  ],
  examples: [
    {
      q: 'From two points ' + m('50 m') + ' apart in line with a tower, the angles of elevation are ' + m('30°') + ' and ' + m('45°') + '. Find the height.',
      steps: [
        ['Angle at the top ' + m('= 45° − 30° = 15°') + '.', 'Exterior angle.'],
        [m(f('d', 'sin 30°') + ' = ' + f('50', 'sin 15°')), ''],
        [m('d = ' + f('50 × 0.5', '0.2588') + ' ≈ 96.6 m'), ''],
        ['Height ' + m('= 96.6 sin 45° ≈ 68.3 m') + '.', '']
      ],
      ans: m('≈ 68.3 m')
    },
    {
      q: 'A ship sails ' + m('30 km') + ' on a bearing of ' + m('060°') + ', then ' + m('40 km') + ' on ' + m('150°') + '. Find its distance from the start.',
      steps: [
        ['The turn is ' + m('150° − 060° = 90°') + '.', 'The interior angle is ' + m('90°') + '.'],
        [m('d² = 30² + 40²'), 'The cosine rule with ' + m('cos 90° = 0') + '.'],
        [m('= 900 + 1600 = 2500'), ''],
        [m('d = 50 km'), '']
      ],
      ans: m('50 km')
    },
    {
      q: 'To find the width ' + m('AB') + ' of a river, a baseline ' + m('AC = 60 m') + ' is measured with ' + m('∠BAC = 70°') + ' and ' + m('∠BCA = 55°') + '.',
      steps: [
        [m('∠ABC = 180° − 70° − 55° = 55°') + '.', ''],
        [m(f('AB', 'sin 55°') + ' = ' + f('60', 'sin 55°')), ''],
        ['The two angles are equal, so ' + m('AB = AC') + '.', 'An isosceles triangle.'],
        [m('AB = 60 m'), '']
      ],
      ans: m('60 m')
    }
  ],
  modelNote: 'Take the class outside with a protractor and a tape; measuring the school building by two elevations makes the sine rule an instrument in twenty minutes.',
  interactive: {
    type: 'solveTriangle',
    title: 'Two observations, one height',
    hint: 'Change the baseline and watch the computed height stay put.'
  },
  quiz: [
    { q: 'A bearing is measured from:', a: ['east, anticlockwise', 'north, clockwise', 'north, anticlockwise', 'the horizontal'], c: 1, why: 'Always three figures.' },
    { q: 'East is a bearing of:', a: [m('000°'), m('090°'), m('180°'), m('270°')], c: 1, why: 'A quarter turn clockwise.' },
    { q: 'Bearings ' + m('060°') + ' and ' + m('140°') + ' give an angle of:', a: [m('60°'), m('80°'), m('140°'), m('200°')], c: 1, why: 'The difference.' },
    { q: 'Elevations ' + m('30°') + ' and ' + m('45°') + ' give a top angle of:', a: [m('15°'), m('75°'), m('105°'), m('135°')], c: 0, why: 'The exterior-angle theorem.' },
    { q: 'Two sides and the included angle: use', a: ['the sine rule', 'the cosine rule', 'Pythagoras', 'a bearing'], c: 1, why: 'No matched pair.' },
    { q: 'Rounding should be done:', a: ['at every step', 'only at the end', 'never', 'to 1 s.f.'], c: 1, why: 'To avoid accumulated error.' }
  ],
  practice: {
    easy: [
      ['Bearing of due east', m('090°')],
      ['Bearing of due south', m('180°')],
      ['Back bearing of ' + m('070°'), m('250°')],
      ['Back bearing of ' + m('200°'), m('020°')],
      ['Angle between bearings ' + m('060°') + ' and ' + m('140°'), m('80°')],
      ['Elevations ' + m('30°') + ' and ' + m('45°') + ': the top angle', m('15°')],
      ['Two sides and the included angle: rule', 'Cosine']
    ],
    med: [
      ['Ship: ' + m('30 km') + ' on ' + m('060°') + ', then ' + m('40 km') + ' on ' + m('150°'), m('50 km')],
      ['Tower: ' + m('50 m') + ' apart, elevations ' + m('30°') + ' and ' + m('45°'), m('≈ 68.3 m')],
      ['River: ' + m('AC = 60') + ', angles ' + m('70°') + ' and ' + m('55°') + ': ' + m('AB'), m('60 m')],
      ['Two roads at ' + m('55°') + ', points ' + m('5') + ' and ' + m('8 km') + ' along', m('≈ 6.6 km')],
      ['A triangle plot ' + m('40, 55, 70 m') + ': its largest angle', m('≈ 93.6°')],
      ['Its area', m('≈ 1098 m²')],
      ['A ladder ' + m('6 m') + ' at ' + m('70°') + ' to the ground: the height reached', m('≈ 5.64 m')]
    ],
    hard: [
      ['A ship sails ' + m('20 km') + ' on ' + m('040°') + ' then ' + m('35 km') + ' on ' + m('110°') + ': its distance from the start', m('≈ 45.9 km')],
      ['Its bearing from the start', m('≈ 086°')],
      ['A tower: elevations ' + m('25°') + ' and ' + m('40°') + ' from points ' + m('80 m') + ' apart', m('≈ 83.9 m')],
      ['Two lighthouses ' + m('12 km') + ' apart; a boat bears ' + m('040°') + ' from one and ' + m('310°') + ' from the other', 'Solve with the sine rule'],
      ['A triangle field ' + m('120, 150 m') + ' with an angle of ' + m('75°') + ': the third side', m('≈ 166 m')],
      ['Its area', m('≈ 8693 m²')],
      ['An aircraft flies ' + m('300 km') + ' on ' + m('070°') + ' then turns onto ' + m('160°') + ' for ' + m('400 km'), m('500 km') + ' from the start']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw and label a diagram before any calculation; mark north on every bearing question.',
  homework: [
    'A ship sails ' + m('25 km') + ' on ' + m('050°') + ', then ' + m('40 km') + ' on ' + m('140°') + '. Find its distance from the start.',
    'From two points ' + m('60 m') + ' apart the angles of elevation of a tower are ' + m('35°') + ' and ' + m('50°') + '. Find its height.',
    'A triangular plot has sides ' + m('45') + ', ' + m('60') + ' and ' + m('75 m') + '. Find its largest angle and its area.',
    'Two roads leave a junction at ' + m('65°') + '. Find the distance between points ' + m('6') + ' and ' + m('9 km') + ' along them.',
    'Find the back bearing of ' + m('115°') + ' and of ' + m('295°') + '.'
  ]
});

/* ============================== 22 ============================== */
G9_GEO.push({
  id: 'g9-22', stream: 'geo', grade: 9, quarter: 2, lessons: '26–27', hours: 2,
  title: 'The angle between two vectors and the scalar product',
  subtitle: 'A multiplication of vectors whose answer is a number — and it measures the angle between them.',
  uz: 'Geometriya 9, §19', uzPage: 'pp. 104–110',
  cam: 'Extension beyond IGX', camPage: 'Core & Extended, pp. 331–338', wb: 'Exercise 15.5',
  objectives: [
    'Define the angle between two vectors and the scalar product.',
    'Compute a·b from coordinates and from |a||b| cos φ.',
    'Use the scalar product to find an angle and to test perpendicularity.',
    'Apply it to prove that two lines are perpendicular.'
  ],
  terms: [
    ['Vector', 'Vektor', 'Вектор'],
    ['Scalar product', 'Skalyar ko‘paytma', 'Скалярное произведение'],
    ['Angle between vectors', 'Vektorlar orasidagi burchak', 'Угол между векторами'],
    ['Magnitude', 'Modul', 'Модуль'],
    ['Perpendicular', 'Perpendikulyar', 'Перпендикулярный'],
    ['Coordinates of a vector', 'Vektor koordinatalari', 'Координаты вектора'],
    ['Collinear', 'Kollinear', 'Коллинеарные'],
    ['Unit vector', 'Birlik vektor', 'Единичный вектор']
  ],
  timing: [[15, 'The angle between vectors'], [25, 'The scalar product'], [25, 'Finding an angle'], [20, 'Perpendicularity'], [5, 'Homework']],
  sections: [
    {
      h: 'The angle between vectors',
      html: `<p>To measure the angle between ${m('a⃗')} and ${m('b⃗')}, move them so that they start at
      the same point. The angle ${m('φ')} between them satisfies ${m('0° ≤ φ ≤ 180°')} — which is exactly
      the range the first lesson of this chapter prepared.</p>
      {{fig:scalarAngle:Brought to a common origin, two vectors make one angle between 0° and 180°.}}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">φ</th><th>The vectors are</th></tr></thead>
      <tbody>
        <tr><td class="m">0°</td><td>parallel, same direction</td></tr>
        <tr><td class="m">90°</td><td>perpendicular</td></tr>
        <tr><td class="m">180°</td><td>parallel, opposite directions</td></tr>
      </tbody></table></div>
      <p>A vector ${m('a⃗(x, y)')} has magnitude ${m('|a⃗| = ' + sr('x² + y²'))} — the distance formula,
      applied to the arrow.</p>`
    },
    {
      h: 'The scalar product',
      html: `${eq(m('a⃗ · b⃗ = |a⃗| |b⃗| cos φ'), true)}
      <p>and, in coordinates,</p>
      ${eq(m('a⃗(x₁, y₁) · b⃗(x₂, y₂) = x₁x₂ + y₁y₂'), true)}
      <p>The result is a <b>number</b>, not a vector — which is why it is called the <i>scalar</i>
      product.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Property</th><th>Statement</th></tr></thead>
      <tbody>
        <tr><td>commutative</td><td class="m">a⃗ · b⃗ = b⃗ · a⃗</td></tr>
        <tr><td>distributive</td><td class="m">a⃗ · (b⃗ + c⃗) = a⃗ · b⃗ + a⃗ · c⃗</td></tr>
        <tr><td>with a scalar</td><td class="m">(ka⃗) · b⃗ = k(a⃗ · b⃗)</td></tr>
        <tr><td>square</td><td class="m">a⃗ · a⃗ = |a⃗|²</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Two formulae for one quantity — and that is the point</div>
      One formula computes it from coordinates; the other contains the angle. Setting them equal is how
      an angle is found, and it is the only method available without a diagram.</div>`
    },
    {
      h: 'Finding an angle',
      html: `${eq(m('cos φ = ' + f('a⃗ · b⃗', '|a⃗| |b⃗|')), true)}
      <p><b>Example.</b> ${m('a⃗(3, 4)')} and ${m('b⃗(1, 2)')}. Then ${m('a⃗ · b⃗ = 3 + 8 = 11')},
      ${m('|a⃗| = 5')}, ${m('|b⃗| = ' + sr('5'))}, so</p>
      ${eq(m('cos φ = ' + f('11', '5' + sr('5')) + ' ≈ 0.9839') + ',  ' + m('φ ≈ 10.3°'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">a⃗ · b⃗</th><th class="m">φ</th></tr></thead>
      <tbody>
        <tr><td class="m">> 0</td><td>acute</td></tr>
        <tr><td class="m">= 0</td><td class="m">90°</td></tr>
        <tr><td class="m">< 0</td><td>obtuse</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The sign of the scalar product is the sign of the cosine</span>
      Because the two magnitudes are never negative. So a single subtraction tells you whether the angle
      is acute or obtuse, without computing it — a useful check on any answer.</div>`
    },
    {
      h: 'Perpendicularity',
      html: `${eq(m('a⃗ ⊥ b⃗') + '  ⟺  ' + m('a⃗ · b⃗ = 0') + '  ⟺  ' + m('x₁x₂ + y₁y₂ = 0'), true)}
      <p>This is the standard way to prove a right angle without measuring anything.</p>
      <p><b>Example.</b> Show that the triangle ${m('A(1, 1)')}, ${m('B(4, 2)')}, ${m('C(2, 8)')} is
      right-angled.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Vector</th><th>Coordinates</th></tr></thead>
      <tbody>
        <tr><td class="m">AB</td><td class="m">(3, 1)</td></tr>
        <tr><td class="m">AC</td><td class="m">(1, 7)</td></tr>
        <tr><td class="m">BC</td><td class="m">(−2, 6)</td></tr>
      </tbody></table></div>
      <p>${m('AB · BC = −6 + 6 = 0')}, so the right angle is at ${m('B')}.</p>
      <div class="keybox"><div class="klabel">One multiplication and one addition</div>
      Compared with computing three side lengths and testing Pythagoras, the scalar product is far
      quicker — and it also tells you <b>where</b> the right angle is, which Pythagoras only reveals
      after the fact.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the angle between ' + m('a⃗(3, 4)') + ' and ' + m('b⃗(1, 2)') + '.',
      steps: [
        [m('a⃗ · b⃗ = 3 × 1 + 4 × 2 = 11'), ''],
        [m('|a⃗| = 5') + ', ' + m('|b⃗| = ' + sr('5')), ''],
        [m('cos φ = ' + f('11', '5' + sr('5')) + ' ≈ 0.9839'), ''],
        [m('φ ≈ 10.3°'), 'Acute, as the positive product predicted.']
      ],
      ans: m('≈ 10.3°')
    },
    {
      q: 'Show that ' + m('A(1, 1)') + ', ' + m('B(4, 2)') + ', ' + m('C(2, 8)') + ' is right-angled, and say where.',
      steps: [
        [m('AB(3, 1)') + ', ' + m('BC(−2, 6)') + '.', 'From ' + m('B') + ' in both directions.'],
        [m('AB · BC = 3(−2) + 1(6)'), ''],
        [m('= −6 + 6 = 0'), ''],
        ['Right-angled at ' + m('B') + '.', '']
      ],
      ans: 'Right-angled at ' + m('B')
    },
    {
      q: 'For which ' + m('t') + ' are ' + m('a⃗(t, 3)') + ' and ' + m('b⃗(4, −2)') + ' perpendicular?',
      steps: [
        [m('a⃗ · b⃗ = 4t − 6'), ''],
        ['Perpendicular means the product is zero.', ''],
        [m('4t − 6 = 0'), ''],
        [m('t = 1.5'), '']
      ],
      ans: m('t = 1.5')
    }
  ],
  modelNote: 'Hold two metre rules at a common point and ask the class to predict the sign of the product as the angle opens past a right angle; the sign change is visible before any arithmetic.',
  interactive: {
    type: 'vectors',
    title: 'Two arrows and one number',
    hint: 'Watch the product change sign as the angle passes 90°.'
  },
  quiz: [
    { q: 'The scalar product of two vectors is:', a: ['a vector', 'a number', 'an angle', 'a length'], c: 1, why: 'Hence “scalar”.' },
    { q: m('a⃗ · b⃗') + ' in coordinates:', a: [m('x₁y₂ − x₂y₁'), m('x₁x₂ + y₁y₂'), m('x₁x₂ − y₁y₂'), m('x₁ + y₂')], c: 1, why: 'Multiply and add.' },
    { q: m('a⃗ · b⃗ = 0') + ' means:', a: ['parallel', 'perpendicular', 'equal', 'zero vectors'], c: 1, why: m('cos 90° = 0') + '.' },
    { q: m('a⃗ · b⃗ < 0') + ' means ' + m('φ') + ' is:', a: ['acute', 'right', 'obtuse', 'zero'], c: 2, why: 'A negative cosine.' },
    { q: m('a⃗ · a⃗') + ' equals:', a: [m('0'), m('|a⃗|'), m('|a⃗|²'), m('2|a⃗|')], c: 2, why: m('cos 0° = 1') + '.' },
    { q: m('(3,4)') + ' has magnitude:', a: [m('5'), m('7'), m('12'), m('25')], c: 0, why: m(sr('9 + 16')) + '.' }
  ],
  practice: {
    easy: [
      [m('(3,4) · (1,2)'), m('11')],
      [m('(2,3) · (4,−1)'), m('5')],
      [m('(1,0) · (0,1)'), m('0')],
      [m('|(3,4)|'), m('5')],
      [m('|(5,12)|'), m('13')],
      [m('a⃗ · a⃗') + ' for ' + m('(3,4)'), m('25')],
      [m('(2,1) · (−1,2)'), m('0')]
    ],
    med: [
      ['Angle between ' + m('(3,4)') + ' and ' + m('(1,2)'), m('≈ 10.3°')],
      ['Angle between ' + m('(1,0)') + ' and ' + m('(1,1)'), m('45°')],
      ['Angle between ' + m('(1,0)') + ' and ' + m('(−1,1)'), m('135°')],
      ['Are ' + m('(2,1)') + ' and ' + m('(−1,2)') + ' perpendicular?', 'Yes'],
      [m('t') + ' with ' + m('(t,3) ⊥ (4,−2)'), m('1.5')],
      ['Is the angle between ' + m('(2,3)') + ' and ' + m('(−4,1)') + ' acute?', 'No — the product is ' + m('−5')],
      [m('A(1,1), B(4,2), C(2,8)') + ': the right angle is at', m('B')]
    ],
    hard: [
      ['Angle between ' + m('(1,1)') + ' and ' + m('(1,' + sr('3') + ')'), m('15°')],
      [m('|a⃗| = 3, |b⃗| = 4, φ = 60°') + ': ' + m('a⃗ · b⃗'), m('6')],
      ['Same: ' + m('|a⃗ + b⃗|'), m(sr('37'))],
      [m('A(0,0), B(4,3), C(−3,4)') + ': the angle at ' + m('A'), m('90°')],
      ['For which ' + m('t') + ' is the angle between ' + m('(1,t)') + ' and ' + m('(1,1)') + ' equal to ' + m('45°') + '?', m('t = 0')],
      ['Prove the cosine rule using ' + m('|a⃗ − b⃗|²'), 'Expand the scalar square'],
      ['A rhombus: prove its diagonals are perpendicular', m('(a⃗ + b⃗) · (a⃗ − b⃗) = |a⃗|² − |b⃗|² = 0')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'State the sign of the scalar product before computing the angle, as a check.',
  homework: [
    'Find ' + m('(5, 2) · (3, −4)') + ' and say whether the angle is acute or obtuse.',
    'Find the angle between ' + m('(1, 1)') + ' and ' + m('(0, 1)') + '.',
    'For which ' + m('t') + ' are ' + m('(t, 2)') + ' and ' + m('(3, −6)') + ' perpendicular?',
    'Show that ' + m('A(0, 0)') + ', ' + m('B(4, 3)') + ', ' + m('C(−3, 4)') + ' form a right angle at ' + m('A') + '.',
    'Prove that the diagonals of a rhombus are perpendicular using the scalar product.'
  ]
});

/* ============================== 23 ============================== */
G9_GEO.push({
  id: 'g9-23', stream: 'geo', grade: 9, quarter: 2, lessons: '28–29', hours: 2,
  title: 'Solving triangles',
  subtitle: 'Four kinds of data, four routes — and a checklist that finishes any triangle.',
  uz: 'Geometriya 9, §20', uzPage: 'pp. 111–117',
  cam: 'Extension beyond IGX', camPage: 'Core & Extended, pp. 310–330', wb: 'Exercise 15.6',
  objectives: [
    'Recognise the four standard cases and choose the right route for each.',
    'Find all remaining sides and angles from three given elements.',
    'Decide how many triangles exist in the ambiguous case.',
    'Check the answer against the triangle inequality and the largest-side rule.'
  ],
  terms: [
    ['To solve a triangle', 'Uchburchakni yechish', 'Решить треугольник'],
    ['Given elements', 'Berilgan elementlar', 'Данные элементы'],
    ['Case', 'Hol', 'Случай'],
    ['Triangle inequality', 'Uchburchak tengsizligi', 'Неравенство треугольника'],
    ['Largest side', 'Eng katta tomon', 'Наибольшая сторона'],
    ['Check', 'Tekshirish', 'Проверка'],
    ['Two solutions', 'Ikkita yechim', 'Два решения'],
    ['No solution', 'Yechimi yo‘q', 'Нет решения']
  ],
  timing: [[15, 'The four cases'], [25, 'SSS and SAS'], [25, 'ASA and SSA'], [20, 'Checking'], [5, 'Homework']],
  sections: [
    {
      h: 'The four cases',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Case</th><th>Given</th><th>First step</th><th>Solutions</th></tr></thead>
      <tbody>
        <tr><td class="m">SSS</td><td>three sides</td><td>cosine rule for the largest angle</td><td class="m">1</td></tr>
        <tr><td class="m">SAS</td><td>two sides and the included angle</td><td>cosine rule for the third side</td><td class="m">1</td></tr>
        <tr><td class="m">ASA / AAS</td><td>two angles and a side</td><td>third angle, then the sine rule</td><td class="m">1</td></tr>
        <tr><td class="m">SSA</td><td>two sides and a non-included angle</td><td>sine rule for the second angle</td><td class="m">0, 1 or 2</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('AAA')} is not a case</span>
      Three angles determine the shape but not the size — infinitely many similar triangles fit. A
      question giving only angles cannot ask for a side.</div>`
    },
    {
      h: 'SSS and SAS',
      html: `<p><b>SSS.</b> ${m('a = 5')}, ${m('b = 6')}, ${m('c = 7')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Working</th><th>Result</th></tr></thead>
      <tbody>
        <tr><td>largest angle first</td><td class="m">cos C = ${f('25 + 36 − 49', '60')} = 0.2</td><td class="m">C ≈ 78.5°</td></tr>
        <tr><td>sine rule</td><td class="m">sin A = ${f('5 sin 78.5°', '7')}</td><td class="m">A ≈ 44.4°</td></tr>
        <tr><td>angle sum</td><td class="m">180 − 78.5 − 44.4</td><td class="m">B ≈ 57.1°</td></tr>
      </tbody></table></div>
      <p><b>SAS.</b> ${m('a = 8')}, ${m('b = 5')}, ${m('C = 60°')}. The cosine rule gives
      ${m('c² = 64 + 25 − 40 = 49')}, so ${m('c = 7')}; then the sine rule or the cosine rule finishes
      the angles.</p>
      <div class="keybox"><div class="klabel">Find the largest angle first in the SSS case</div>
      It is the only one that might be obtuse. Once it is known, every remaining angle is acute, so the
      sine rule cannot be ambiguous — the ambiguity has been removed before it can arise.</div>`
    },
    {
      h: 'ASA and SSA',
      html: `<p><b>ASA.</b> ${m('A = 50°')}, ${m('B = 60°')}, ${m('c = 10')}. Then ${m('C = 70°')} and the
      sine rule gives ${m('a = ' + f('10 sin 50°', 'sin 70°') + ' ≈ 8.15')} and
      ${m('b = ' + f('10 sin 60°', 'sin 70°') + ' ≈ 9.21')}.</p>
      <p><b>SSA.</b> This is the case that needs care. With ${m('a')}, ${m('b')} and ${m('A')}:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Condition</th><th>Number of triangles</th></tr></thead>
      <tbody>
        <tr><td class="m">a ≥ b</td><td class="m">1</td></tr>
        <tr><td class="m">a < b</td> <td>compute ${m('sin B = ' + f('b sin A', 'a'))}</td></tr>
        <tr><td class="m">sin B > 1</td><td class="m">0</td></tr>
        <tr><td class="m">sin B = 1</td><td class="m">1</td> </tr>
        <tr><td class="m">sin B < 1</td><td class="m">2</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The last row assumes ${m('A')} is acute</span>
      If ${m('A')} is obtuse there can be at most one triangle, because a triangle has at most one obtuse
      angle. Check ${m('A')} before counting.</div>`
    },
    {
      h: 'Checking',
      html: `<p>Three checks catch almost every arithmetic slip.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Check</th><th>Statement</th></tr></thead>
      <tbody>
        <tr><td>angle sum</td><td>the three angles total ${m('180°')}</td></tr>
        <tr><td>largest side</td><td>the largest side faces the largest angle</td></tr>
        <tr><td>triangle inequality</td><td>each side is less than the sum of the other two</td></tr>
      </tbody></table></div>
      <p>A fourth, when the area is also wanted: compute it twice, by ${m(f('1', '2') + 'ab sin C')} and
      by Heron's formula, and compare.</p>
      <div class="keybox"><div class="klabel">Thirty seconds of checking is worth five marks</div>
      An answer in which the largest angle faces the shortest side is wrong, whatever the working shows.
      That single glance catches mismatched pairs, the commonest error in this whole chapter.</div>`
    }
  ],
  examples: [
    {
      q: 'Solve the triangle with ' + m('a = 5') + ', ' + m('b = 6') + ', ' + m('c = 7') + '.',
      steps: [
        [m('cos C = ' + f('25 + 36 − 49', '60') + ' = 0.2 ⇒ C ≈ 78.5°'), 'Largest angle first.'],
        [m('sin A = ' + f('5 sin 78.5°', '7') + ' ≈ 0.700 ⇒ A ≈ 44.4°'), ''],
        [m('B ≈ 180 − 78.5 − 44.4 = 57.1°'), ''],
        ['Check: largest side ' + m('7') + ' faces ' + m('78.5°') + ' ✓', '']
      ],
      ans: m('A ≈ 44.4°, B ≈ 57.1°, C ≈ 78.5°')
    },
    {
      q: 'Solve the triangle with ' + m('a = 8') + ', ' + m('b = 5') + ', ' + m('C = 60°') + '.',
      steps: [
        [m('c² = 64 + 25 − 2 · 40 · 0.5 = 49'), ''],
        [m('c = 7'), ''],
        [m('cos A = ' + f('25 + 49 − 64', '70') + ' = ' + f('10', '70') + ' ≈ 0.143 ⇒ A ≈ 81.8°'), ''],
        [m('B ≈ 180 − 60 − 81.8 = 38.2°'), '']
      ],
      ans: m('c = 7, A ≈ 81.8°, B ≈ 38.2°')
    },
    {
      q: 'How many triangles have ' + m('a = 6') + ', ' + m('b = 10') + ', ' + m('A = 30°') + '?',
      steps: [
        [m('a < b') + ', and ' + m('A') + ' is acute — the ambiguous case.', ''],
        [m('sin B = ' + f('10 × 0.5', '6') + ' ≈ 0.833'), ''],
        [m('B ≈ 56.4°') + ' or ' + m('123.6°') + '.', ''],
        ['Both leave a positive third angle — two triangles.', '']
      ],
      ans: 'Two'
    }
  ],
  modelNote: 'Give the class one set of data at a time and ask only “which case, and which rule first?” for ten sets before any calculation; the recognition is the skill.',
  interactive: {
    type: 'solveTriangle',
    title: 'Three elements, one triangle',
    hint: 'Switch between the four cases and see which rule starts.'
  },
  quiz: [
    { q: 'SSS starts with:', a: ['the sine rule', 'the cosine rule', 'the area formula', 'the angle sum'], c: 1, why: 'No matched pair.' },
    { q: 'In SSS, find first:', a: ['the smallest angle', 'the largest angle', 'any angle', 'the area'], c: 1, why: 'It is the only one that can be obtuse.' },
    { q: 'ASA starts with:', a: ['the cosine rule', 'the third angle', 'the area', 'Pythagoras'], c: 1, why: 'Then the sine rule.' },
    { q: 'SSA can give:', a: ['one triangle', 'two triangles', 'no triangle', 'any of these'], c: 3, why: 'The ambiguous case.' },
    { q: m('AAA') + ' determines:', a: ['the triangle', 'the shape only', 'the area', 'nothing'], c: 1, why: 'Infinitely many similar triangles.' },
    { q: 'The largest side faces:', a: ['the smallest angle', 'the largest angle', 'the right angle', 'no particular angle'], c: 1, why: 'A quick check on any answer.' }
  ],
  practice: {
    easy: [
      ['Three sides: which rule?', 'Cosine'],
      ['Two sides and the included angle: which rule?', 'Cosine'],
      ['Two angles and a side: which rule?', 'Sine'],
      ['Two sides and a non-included angle: which rule?', 'Sine'],
      [m('A = 50°, B = 60°') + ': ' + m('C'), m('70°')],
      ['Largest side faces', 'The largest angle'],
      [m('AAA') + ' determines', 'The shape only']
    ],
    med: [
      [m('a = 5, b = 6, c = 7') + ': ' + m('C'), m('≈ 78.5°')],
      ['Same: ' + m('A'), m('≈ 44.4°')],
      [m('a = 8, b = 5, C = 60°') + ': ' + m('c'), m('7')],
      ['Same: ' + m('A'), m('≈ 81.8°')],
      [m('A = 50°, B = 60°, c = 10') + ': ' + m('a'), m('≈ 8.15')],
      ['Same: ' + m('b'), m('≈ 9.21')],
      [m('a = 6, b = 10, A = 30°') + ': how many triangles?', 'Two']
    ],
    hard: [
      [m('a = 5, b = 12, A = 60°') + ': how many triangles?', 'None'],
      [m('a = 12, b = 5, A = 60°') + ': how many triangles?', 'One'],
      [m('a = 5, b = 10, A = 30°') + ': how many triangles?', 'One — a right triangle'],
      ['Solve ' + m('a = 7, b = 8, c = 9') + ': the largest angle', m('≈ 73.4°')],
      ['Its area, by Heron', m('≈ 26.8')],
      ['Its area, by ' + m('½ab sin C'), m('≈ 26.8')],
      ['A triangle with ' + m('A = 30°, a = 6, b = 8') + ': the two possible areas', m('≈ 22.8') + ' and ' + m('≈ 4.9')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Name the case before starting, and finish with the two checks.',
  homework: [
    'Solve the triangle with ' + m('a = 6') + ', ' + m('b = 7') + ', ' + m('c = 9') + '.',
    'Solve the triangle with ' + m('b = 10') + ', ' + m('c = 12') + ', ' + m('A = 45°') + '.',
    'Solve the triangle with ' + m('A = 40°') + ', ' + m('C = 75°') + ', ' + m('b = 15') + '.',
    'How many triangles have ' + m('a = 7') + ', ' + m('b = 9') + ', ' + m('A = 50°') + '?',
    'Explain why the largest angle should be found first in the SSS case.'
  ]
});

/* ============================== 24 ============================== */
G9_GEO.push({
  id: 'g9-24', stream: 'geo', grade: 9, quarter: 2, lessons: '30', hours: 1,
  title: 'Chapter exercises — Cambridge triangles and bearings',
  subtitle: 'The same two rules, in the wording and the marking scheme of an IGCSE paper.',
  uz: 'Geometriya 9, II bob mashqlari', uzPage: 'pp. 118–120',
  cam: 'IGX 3.2', camPage: 'Core & Extended, pp. 51–58', wb: 'Exercise 3.2',
  objectives: [
    'Answer “calculate the length of…” and “calculate the size of…” in the expected form.',
    'Use three-figure bearings correctly in both directions.',
    'Give answers to 3 significant figures with units.',
    'Recognise when a diagram must be drawn before anything else.'
  ],
  terms: [
    ['Calculate', 'Hisoblang', 'Вычислите'],
    ['Three significant figures', 'Uchta ma’noli raqam', 'Три значащие цифры'],
    ['Not to scale', 'Masshtabda emas', 'Не в масштабе'],
    ['Bearing', 'Azimut', 'Азимут'],
    ['Correct to', 'Aniqlikda', 'С точностью до'],
    ['Show your working', 'Yechimni yozing', 'Покажите решение'],
    ['Units', 'Birliklar', 'Единицы'],
    ['Diagram', 'Chizma', 'Диаграмма']
  ],
  timing: [[8, 'What the wording asks for'], [14, 'Bearings both ways'], [12, 'Worked items'], [6, 'Homework']],
  sections: [
    {
      h: 'What the wording asks for',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Cambridge says</th><th>You must give</th></tr></thead>
      <tbody>
        <tr><td>“Calculate the length of ${m('BC')}”</td><td>a number with units, 3 s.f.</td></tr>
        <tr><td>“Calculate the size of angle ${m('ABC')}”</td><td>degrees, 1 d.p. or 3 s.f.</td></tr>
        <tr><td>“Show that ${m('BC = 12.4')}”</td><td>working ending at more accuracy than ${m('12.4')}</td></tr>
        <tr><td>“The diagram is not to scale”</td><td>never measure — calculate</td></tr>
        <tr><td>“Calculate the bearing of ${m('C')} from ${m('A')}”</td><td>three figures, e.g. ${m('072°')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">“Show that” must not start from the answer</span>
      Working that begins ${m('BC = 12.4')} and verifies it scores nothing. Start from the data, and
      finish with a value more accurate than the one given — ${m('12.43…')} — then state that it rounds
      to ${m('12.4')}.</div>`
    },
    {
      h: 'Bearings both ways',
      html: `<p>Half the marks in a bearings question are for converting between the bearing and the angle
      inside the triangle.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Situation</th><th>Angle in the triangle</th></tr></thead>
      <tbody>
        <tr><td>two bearings from one point</td><td>their difference</td></tr>
        <tr><td>a leg and then a turn</td><td class="m">180° − (difference of the bearings)</td></tr>
        <tr><td>bearing of ${m('B')} from ${m('A')} is ${m('θ')}</td><td>bearing of ${m('A')} from ${m('B')} is ${m('θ ± 180°')}</td></tr>
      </tbody></table></div>
      {{fig:bearings:North is redrawn at every point; the angles of the triangle are read between the legs.}}
      <div class="keybox"><div class="klabel">Draw a north arrow at every vertex</div>
      Bearings are measured from north <b>at the point you are standing on</b>. Drawing the arrow at each
      vertex turns every bearing question into an ordinary angle-chase.</div>`
    },
    {
      h: 'Worked items',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Item</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>${m('AB = 9')}, ${m('AC = 12')}, ${m('∠A = 65°')}: calculate ${m('BC')}</td><td class="m">≈ 11.6</td></tr>
        <tr><td>${m('a = 11')}, ${m('b = 13')}, ${m('c = 20')}: calculate the largest angle</td><td class="m">≈ 113°</td></tr>
        <tr><td>${m('A = 42°')}, ${m('B = 71°')}, ${m('a = 8')}: calculate ${m('b')}</td><td class="m">≈ 11.3</td></tr>
        <tr><td>${m('AB = 9')}, ${m('AC = 12')}, ${m('∠A = 65°')}: calculate the area</td><td class="m">≈ 48.9</td></tr>
      </tbody></table></div>
      <p>Each answer is given to three significant figures, with the units the question used.</p>`
    }
  ],
  examples: [
    {
      q: 'In ' + m('△ABC') + ', ' + m('AB = 9 cm') + ', ' + m('AC = 12 cm') + ', ' + m('∠A = 65°') + '. Calculate ' + m('BC') + '.',
      steps: [
        ['SAS — use the cosine rule.', ''],
        [m('BC² = 81 + 144 − 2 · 108 · cos 65°'), ''],
        [m('= 225 − 216 × 0.4226 = 133.7'), ''],
        [m('BC ≈ 11.6 cm'), 'Three significant figures.']
      ],
      ans: m('≈ 11.6 cm')
    },
    {
      q: 'A ship sails from ' + m('A') + ' to ' + m('B') + ' on a bearing of ' + m('072°') + '. What is the bearing of ' + m('A') + ' from ' + m('B') + '?',
      steps: [
        ['Add ' + m('180°') + '.', ''],
        [m('072° + 180° = 252°'), ''],
        ['Less than ' + m('360°') + ', so no subtraction is needed.', ''],
        [m('252°'), 'Three figures.']
      ],
      ans: m('252°')
    },
    {
      q: 'Calculate the area of the triangle with ' + m('AB = 9') + ', ' + m('AC = 12') + ' and ' + m('∠A = 65°') + '.',
      steps: [
        [m('S = ' + f('1', '2') + ' · 9 · 12 · sin 65°'), ''],
        [m('= 54 × 0.9063'), ''],
        [m('≈ 48.9'), ''],
        ['Units: ' + m('cm²') + ' if the sides were in ' + m('cm') + '.', '']
      ],
      ans: m('≈ 48.9 cm²')
    }
  ],
  modelNote: 'Show a “show that” answer that begins with the given value and one that begins with the data; the class marks both, and the rule becomes theirs.',
  interactive: {
    type: 'solveTriangle',
    title: 'Calculate and round',
    hint: 'Keep full accuracy; round only at the end.'
  },
  quiz: [
    { q: 'Answers are normally given to:', a: ['1 s.f.', '2 s.f.', '3 s.f.', 'exact values only'], c: 2, why: 'The IGCSE convention.' },
    { q: '“Not to scale” means:', a: ['measure carefully', 'calculate', 'estimate', 'redraw'], c: 1, why: 'The diagram is a sketch.' },
    { q: 'A “show that” answer must:', a: ['start from the answer', 'start from the data', 'be measured', 'be estimated'], c: 1, why: 'Otherwise it proves nothing.' },
    { q: 'Bearing of ' + m('B') + ' from ' + m('A') + ' is ' + m('072°') + '. Bearing of ' + m('A') + ' from ' + m('B') + ':', a: [m('108°'), m('252°'), m('288°'), m('072°')], c: 1, why: 'Add ' + m('180°') + '.' },
    { q: m('AB = 9, AC = 12, ∠A = 65°') + ': ' + m('BC') + ' ≈', a: [m('9.8'), m('11.6'), m('13.2'), m('15.0')], c: 1, why: 'The cosine rule.' },
    { q: 'A bearing is always written with:', a: ['one figure', 'two figures', 'three figures', 'four figures'], c: 2, why: m('072°') + ', not ' + m('72°') + '.' }
  ],
  practice: {
    easy: [
      ['Bearing of due west', m('270°')],
      ['Back bearing of ' + m('072°'), m('252°')],
      ['Back bearing of ' + m('250°'), m('070°')],
      ['Answers to how many significant figures?', 'Three'],
      ['“Not to scale” means', 'Calculate, do not measure'],
      [m('AB = 9, AC = 12, ∠A = 65°') + ': which rule?', 'Cosine'],
      [m('A = 42°, B = 71°, a = 8') + ': which rule?', 'Sine']
    ],
    med: [
      [m('AB = 9, AC = 12, ∠A = 65°') + ': ' + m('BC'), m('≈ 11.6')],
      ['Same: the area', m('≈ 48.9')],
      [m('a = 11, b = 13, c = 20') + ': the largest angle', m('≈ 113°')],
      [m('A = 42°, B = 71°, a = 8') + ': ' + m('b'), m('≈ 11.3')],
      [m('a = 7, b = 10, C = 55°') + ': ' + m('c'), m('≈ 8.29')],
      [m('a = 6, b = 7, c = 8') + ': the smallest angle', m('≈ 46.6°')],
      ['A ship on ' + m('072°') + ' for ' + m('40 km') + ': how far east?', m('≈ 38.0 km')]
    ],
    hard: [
      [m('B') + ' is ' + m('12 km') + ' from ' + m('A') + ' on ' + m('040°') + '; ' + m('C') + ' is ' + m('15 km') + ' from ' + m('B') + ' on ' + m('130°') + ': ' + m('AC'), m('≈ 19.2 km')],
      ['Its bearing from ' + m('A'), m('≈ 091°')],
      ['A triangle with ' + m('a = 9, b = 12, c = 15') + ': its type', 'Right-angled'],
      ['Its area', m('54')],
      ['Show that ' + m('BC = 11.6') + ' when ' + m('AB = 9, AC = 12, ∠A = 65°'), m('BC = 11.56…') + ' rounds to ' + m('11.6')],
      ['A kite: two pairs ' + m('6, 6') + ' and ' + m('9, 9') + ' with an angle of ' + m('120°') + ' between ' + m('6') + ' and ' + m('9'), 'Area ' + m('≈ 46.8')],
      ['A regular pentagon of side ' + m('10') + ': its area', m('≈ 172')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every answer needs units and three significant figures unless the question says otherwise.',
  homework: [
    'In ' + m('△ABC') + ', ' + m('AB = 7 cm') + ', ' + m('AC = 10 cm') + ', ' + m('∠A = 48°') + '. Calculate ' + m('BC') + ' and the area.',
    'Calculate the largest angle of the triangle with sides ' + m('9') + ', ' + m('12') + ' and ' + m('18 cm') + '.',
    'A ship sails from ' + m('P') + ' on a bearing of ' + m('115°') + '. Find the bearing of ' + m('P') + ' from the ship.',
    'In ' + m('△ABC') + ', ' + m('A = 38°') + ', ' + m('B = 64°') + ', ' + m('a = 11 cm') + '. Calculate ' + m('b') + '.',
    'Show that a triangle with sides ' + m('9') + ', ' + m('12') + ' and ' + m('15') + ' is right-angled, and find its area.'
  ]
});

/* ============================== 25 ============================== */
G9_GEO.push({
  id: 'g9-25', stream: 'geo', grade: 9, quarter: 2, lessons: '31–32', hours: 2,
  title: 'Control work 2, and work on the mistakes',
  subtitle: 'Solving triangles in one paper, and the trigonometry chapter closed.',
  uz: 'Geometriya 9, Nazorat ishi 2', uzPage: 'pp. 76–120',
  cam: 'IGX 3, 7 review', camPage: 'Core & Extended, pp. 40–72, 130–140', wb: 'Control paper G2',
  objectives: [
    'Choose and apply the correct rule under time.',
    'Use the area formula and the extended ratios accurately.',
    'Handle the ambiguous case correctly.',
    'Classify each lost mark and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Sine rule', 'Sinuslar teoremasi', 'Теорема синусов'],
    ['Cosine rule', 'Kosinuslar teoremasi', 'Теорема косинусов'],
    ['Area formula', 'Yuza formulasi', 'Формула площади'],
    ['Scalar product', 'Skalyar ko‘paytma', 'Скалярное произведение'],
    ['Ambiguous case', 'Noaniq hol', 'Неоднозначный случай'],
    ['Bearing', 'Azimut', 'Азимут'],
    ['Diagnosis', 'Tashxis', 'Диагностика']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [12, 'Answers'], [20, 'Diagnosis and rewrite'], [5, 'The map']],
  sections: [
    {
      h: 'The paper — 30 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Find ${m('sin 135°')}, ${m('cos 135°')} and ${m('tan 150°')}</td><td class="m">5</td><td>L19–20</td></tr>
        <tr><td>2</td><td>Find the area of a triangle with sides ${m('9')} and ${m('12')} and included angle ${m('30°')}</td><td class="m">4</td><td>L21</td></tr>
        <tr><td>3</td><td>${m('A = 45°')}, ${m('B = 60°')}, ${m('a = 10')}: find ${m('b')}</td><td class="m">5</td><td>L22</td></tr>
        <tr><td>4</td><td>${m('a = 6')}, ${m('b = 9')}, ${m('C = 120°')}: find ${m('c')}</td><td class="m">5</td><td>L23</td></tr>
        <tr><td>5</td><td>Find the largest angle of the triangle with sides ${m('4, 7, 9')}</td><td class="m">5</td><td>L23</td></tr>
        <tr><td>6</td><td>Find the angle between ${m('(2, 1)')} and ${m('(1, 3)')}</td><td class="m">6</td><td>L26–27</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks actually go</div>
      Q1 carries two marks for the signs; Q3 one for finding ${m('C')} first; Q4 one for the sign of
      ${m('cos 120°')}; Q5 two for choosing the angle opposite ${m('9')}; Q6 two for the two
      magnitudes.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>cosine of an obtuse angle left positive</td><td class="m">cos 135° = ${f(sr('2'), '2')}</td><td class="m">−${f(sr('2'), '2')}</td></tr>
        <tr><td>angle not the included one</td><td class="m">½ab sin A</td><td class="m">½ab sin C</td></tr>
        <tr><td>mismatched pair in the sine rule</td><td class="m">${f('a', 'sin B')}</td><td class="m">${f('a', 'sin A')}</td></tr>
        <tr><td>sign of the correction term</td><td class="m">c² = 36 + 81 − 54</td><td class="m">= 36 + 81 + 54</td></tr>
        <tr><td>wrong angle chosen as largest</td><td>opposite ${m('4')}</td><td>opposite ${m('9')}</td></tr>
        <tr><td>magnitudes omitted</td><td class="m">cos φ = a⃗ · b⃗</td><td class="m">cos φ = ${f('a⃗ · b⃗', '|a⃗||b⃗|')}</td></tr>
        <tr><td>second answer missing in SSA</td><td>one angle</td><td>test the obtuse option</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'Chapter II as one map',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Block</th><th>The sentence</th></tr></thead>
      <tbody>
        <tr><td>ratios to ${m('180°')}</td><td>coordinates on the upper semicircle; sine positive, cosine changing sign</td></tr>
        <tr><td>the area</td><td class="m">S = ½ab sin C</td></tr>
        <tr><td>the sine rule</td><td class="m">${f('a', 'sin A')} = 2R — needs a matched pair</td></tr>
        <tr><td>the cosine rule</td><td>Pythagoras with ${m('−2ab cos C')}</td></tr>
        <tr><td>solving a triangle</td><td>four cases, and only SSA is ambiguous</td></tr>
        <tr><td>the scalar product</td><td class="m">a⃗ · b⃗ = x₁x₂ + y₁y₂ = |a⃗||b⃗| cos φ</td></tr>
      </tbody></table></div>
      {{fig:sineCosRule:One triangle, two rules — and between them every triangle can be solved.}}
      <div class="keybox"><div class="klabel">Looking forward</div>
      Chapter III returns to the circle: inscribed and circumscribed polygons, regular polygons, and the
      circumference and area of a disc. The trigonometry of this chapter is used throughout — the side of
      a regular ${m('n')}-gon is found with a sine.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q4: ' + m('a = 6') + ', ' + m('b = 9') + ', ' + m('C = 120°') + '.',
      steps: [
        [m('c² = 36 + 81 − 2 · 54 · cos 120°'), ''],
        [m('cos 120° = −0.5'), 'The sign matters.'],
        [m('c² = 117 + 54 = 171'), ''],
        [m('c = ' + sr('171') + ' ≈ 13.1'), '']
      ],
      ans: m('c ≈ 13.1')
    },
    {
      q: 'Model answer, Q5: the largest angle of ' + m('4, 7, 9') + '.',
      steps: [
        ['It is opposite the longest side, ' + m('9') + '.', ''],
        [m('cos C = ' + f('16 + 49 − 81', '2 · 4 · 7')), ''],
        [m('= ' + f('−16', '56') + ' ≈ −0.2857'), 'Negative — obtuse.'],
        [m('C ≈ 106.6°'), '']
      ],
      ans: m('≈ 106.6°')
    },
    {
      q: 'Model answer, Q6: the angle between ' + m('(2, 1)') + ' and ' + m('(1, 3)') + '.',
      steps: [
        [m('a⃗ · b⃗ = 2 + 3 = 5'), ''],
        [m('|a⃗| = ' + sr('5')) + ', ' + m('|b⃗| = ' + sr('10')), ''],
        [m('cos φ = ' + f('5', sr('50')) + ' ≈ 0.7071'), ''],
        [m('φ = 45°'), 'Exactly.']
      ],
      ans: m('45°')
    }
  ],
  modelNote: 'Read out a solution to Q4 that treats cos 120° as positive; the class finds a c smaller than both given sides, which is impossible for an obtuse angle.',
  interactive: {
    type: 'quiz',
    title: 'Chapter II in twelve questions',
    hint: 'Two from each block.',
    items: [
      { q: m('sin(180° − α)') + ' equals:', a: [m('−sin α'), m('sin α'), m('cos α'), m('−cos α')], c: 1, why: 'Mirror in the ' + m('y') + '-axis.' },
      { q: m('cos 120°') + ' equals:', a: [m(f('1', '2')), m('−' + f('1', '2')), m(f(sr('3'), '2')), m('−' + f(sr('3'), '2'))], c: 1, why: m('180° − 60°') + '.' },
      { q: 'The area formula is:', a: [m('½ab sin C'), m('ab sin C'), m('½ab cos C'), m('½ac sin C')], c: 0, why: m('h = b sin C') + '.' },
      { q: 'The area is greatest when ' + m('C') + ' is:', a: [m('30°'), m('60°'), m('90°'), m('120°')], c: 2, why: m('sin C = 1') + '.' },
      { q: 'The sine rule needs:', a: ['three sides', 'a matched pair', 'a right angle', 'an area'], c: 1, why: 'A side and its opposite angle.' },
      { q: 'The common value of the sine rule is:', a: [m('R'), m('2R'), m('πR'), m('R²')], c: 1, why: 'The circumdiameter.' },
      { q: 'The cosine rule is used for:', a: ['AAS', 'SSA', 'SAS or SSS', 'AAA'], c: 2, why: 'No matched pair.' },
      { q: m('cos C < 0') + ' means:', a: ['acute', 'right', 'obtuse', 'impossible'], c: 2, why: 'Beyond ' + m('90°') + '.' },
      { q: 'Only which case is ambiguous?', a: ['SSS', 'SAS', 'ASA', 'SSA'], c: 3, why: 'A non-included angle.' },
      { q: 'The largest side faces:', a: ['the smallest angle', 'the largest angle', 'the right angle', 'no particular angle'], c: 1, why: 'A standard check.' },
      { q: m('a⃗ · b⃗') + ' in coordinates:', a: [m('x₁y₂ − x₂y₁'), m('x₁x₂ + y₁y₂'), m('x₁x₂ − y₁y₂'), m('x₁ + y₁')], c: 1, why: 'Multiply and add.' },
      { q: m('a⃗ · b⃗ = 0') + ' means:', a: ['parallel', 'perpendicular', 'equal', 'zero'], c: 1, why: m('cos 90° = 0') + '.' }
    ]
  },
  quiz: [
    { q: 'Q1 loses marks most often for:', a: ['arithmetic', 'the signs', 'the formula', 'the units'], c: 1, why: 'Obtuse cosines are negative.' },
    { q: 'Q2’s angle must be:', a: ['the largest', 'the included one', 'acute', 'opposite ' + m('a')], c: 1, why: 'Between the two sides.' },
    { q: 'Q3 begins by finding:', a: [m('b'), m('C'), 'the area', m('R')], c: 1, why: 'Then the sine rule.' },
    { q: 'In Q4 the correction term is:', a: ['subtracted', 'added', 'zero', 'halved'], c: 1, why: m('cos 120° < 0') + '.' },
    { q: 'Q5’s angle is opposite:', a: [m('4'), m('7'), m('9'), 'any side'], c: 2, why: 'The longest side.' },
    { q: 'Q6 needs, besides the product:', a: ['an angle', 'the two magnitudes', 'a diagram', 'nothing'], c: 1, why: m('cos φ = ' + f('a⃗ · b⃗', '|a⃗||b⃗|')) + '.' }
  ],
  practice: {
    easy: [
      [m('sin 135°'), m(f(sr('2'), '2'))],
      [m('cos 135°'), m('−' + f(sr('2'), '2'))],
      [m('tan 150°'), m('−' + f(sr('3'), '3'))],
      ['Sides ' + m('9, 12') + ', angle ' + m('30°') + ': area', m('27')],
      [m('A = 45°, B = 60°') + ': ' + m('C'), m('75°')],
      [m('(2,1) · (1,3)'), m('5')],
      [m('|(2,1)|'), m(sr('5'))]
    ],
    med: [
      [m('A = 45°, B = 60°, a = 10') + ': ' + m('b'), m('≈ 12.2')],
      [m('a = 6, b = 9, C = 120°') + ': ' + m('c'), m('≈ 13.1')],
      ['Sides ' + m('4, 7, 9') + ': the largest angle', m('≈ 106.6°')],
      ['Angle between ' + m('(2,1)') + ' and ' + m('(1,3)'), m('45°')],
      ['Sides ' + m('4, 7, 9') + ': the area', m('≈ 13.4')],
      [m('a = 10, A = 45°') + ': ' + m('R'), m('≈ 7.07')],
      ['Sides ' + m('4, 7, 9') + ': type', 'Obtuse']
    ],
    hard: [
      ['A triangle with ' + m('a = 8, b = 11, A = 40°') + ': how many triangles?', 'Two'],
      ['Its two possible areas', m('≈ 43.0') + ' and ' + m('≈ 16.5')],
      ['A parallelogram ' + m('6, 10') + ' with an angle of ' + m('135°') + ': the shorter diagonal', m('≈ 7.15')],
      ['For which ' + m('t') + ' are ' + m('(t, 4)') + ' and ' + m('(2, −t)') + ' perpendicular?', m('t = 0')],
      ['A triangle inscribed in a circle of radius ' + m('8') + ' with ' + m('A = 60°') + ': ' + m('a'), m('8' + sr('3'))],
      ['A ship: ' + m('18 km') + ' on ' + m('050°') + ' then ' + m('24 km') + ' on ' + m('140°'), m('30 km')],
      ['Sides ' + m('5, 5, 6') + ': the area', m('12')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite in full every question that lost a mark before Chapter III begins.',
  homework: [
    'Find ' + m('sin 120°') + ', ' + m('cos 150°') + ' and ' + m('tan 135°') + '.',
    'Find the area of a triangle with sides ' + m('8') + ' and ' + m('15') + ' and included angle ' + m('150°') + '.',
    'In ' + m('△ABC') + ', ' + m('A = 35°') + ', ' + m('B = 80°') + ', ' + m('a = 9') + '. Find ' + m('b') + '.',
    'Find the largest angle of the triangle with sides ' + m('5, 9, 11') + '.',
    'Find the angle between the vectors ' + m('(3, 1)') + ' and ' + m('(1, 2)') + '.'
  ]
});

/* ============================== 26 ============================== */
G9_GEO.push({
  id: 'g9-26', stream: 'geo', grade: 9, quarter: 3, lessons: '33–34', hours: 2,
  title: 'The inscribed polygon',
  subtitle: 'A polygon whose every vertex lies on one circle — and the condition that decides when that is possible.',
  uz: 'Geometriya 9, §21', uzPage: 'pp. 121–127',
  cam: 'IGX 3.5', camPage: 'Core & Extended, pp. 63–70', wb: 'Exercise 3.5',
  objectives: [
    'Define an inscribed polygon and a circumscribed circle.',
    'Prove that every triangle has a circumscribed circle, and construct its centre.',
    'State and use the cyclic-quadrilateral condition ∠A + ∠C = 180°.',
    'Decide whether a given quadrilateral is cyclic.'
  ],
  terms: [
    ['Inscribed polygon', 'Ichki chizilgan ko‘pburchak', 'Вписанный многоугольник'],
    ['Circumscribed circle', 'Tashqi chizilgan aylana', 'Описанная окружность'],
    ['Circumcentre', 'Tashqi markaz', 'Центр описанной окружности'],
    ['Perpendicular bisector', 'O‘rta perpendikulyar', 'Серединный перпендикуляр'],
    ['Cyclic quadrilateral', 'Ichki chizilgan to‘rtburchak', 'Вписанный четырёхугольник'],
    ['Opposite angles', 'Qarama-qarshi burchaklar', 'Противоположные углы'],
    ['Chord', 'Vatar', 'Хорда'],
    ['Concurrent', 'Bir nuqtada kesishuvchi', 'Пересекающиеся в одной точке']
  ],
  timing: [[15, 'The definition'], [25, 'Every triangle has one'], [25, 'Cyclic quadrilaterals'], [20, 'Deciding'], [5, 'Homework']],
  sections: [
    {
      h: 'The definition',
      html: `<p>A polygon is <b>inscribed</b> in a circle if every one of its vertices lies on the circle;
      the circle is then <b>circumscribed</b> about the polygon.</p>
      {{fig:inscribedAngle:A polygon inscribed in a circle — every vertex on the circumference, every side a chord.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Polygon</th><th>Always has a circumscribed circle?</th></tr></thead>
      <tbody>
        <tr><td>any triangle</td><td>yes</td></tr>
        <tr><td>a rectangle</td><td>yes</td></tr>
        <tr><td>a general quadrilateral</td><td><b>no</b></td></tr>
        <tr><td>a parallelogram (not a rectangle)</td><td><b>no</b></td></tr>
        <tr><td>any regular polygon</td><td>yes</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Every side of an inscribed polygon is a chord</div>
      So all the chord theorems of Grade 8 apply at once: equal chords subtend equal angles, the
      perpendicular from the centre bisects the chord, and the inscribed angle is half the central
      angle.</div>`
    },
    {
      h: 'Every triangle has one',
      html: `${eq('The three perpendicular bisectors of the sides of a triangle meet in one point, which is equidistant from all three vertices', true)}
      {{fig:perpBisector:A point on the perpendicular bisector of a segment is equidistant from its ends.}}
      <p>The proof is short. A point on the perpendicular bisector of ${m('AB')} is equidistant from
      ${m('A')} and ${m('B')}; one on the bisector of ${m('BC')} is equidistant from ${m('B')} and
      ${m('C')}. Their intersection ${m('O')} therefore satisfies ${m('OA = OB = OC')}, so it also lies
      on the third bisector, and the circle of radius ${m('OA')} passes through all three vertices.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Triangle</th><th>Where the circumcentre lies</th></tr></thead>
      <tbody>
        <tr><td>acute</td><td>inside</td></tr>
        <tr><td>right</td><td>at the midpoint of the hypotenuse</td></tr>
        <tr><td>obtuse</td><td>outside</td></tr>
      </tbody></table></div>
      <p>The middle row is Thales' theorem restated: the hypotenuse of a right triangle is a diameter of
      its circumcircle, and ${m('R = ' + f('c', '2'))}.</p>`
    },
    {
      h: 'Cyclic quadrilaterals',
      html: `${eq('A quadrilateral can be inscribed in a circle if and only if its opposite angles are supplementary', true)}
      ${eq(m('∠A + ∠C = 180°') + '     and     ' + m('∠B + ∠D = 180°'), true)}
      <p>The forward direction follows from the inscribed-angle theorem: ${m('∠A')} and ${m('∠C')} stand
      on the two arcs ${m('BCD')} and ${m('BAD')}, whose central angles add to ${m('360°')}, so the
      inscribed angles add to ${m('180°')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Quadrilateral</th><th>Cyclic?</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td>a rectangle</td><td>yes</td><td>all angles ${m('90°')}</td></tr>
        <tr><td>a square</td><td>yes</td><td>a rectangle</td></tr>
        <tr><td>an isosceles trapezium</td><td>yes</td><td>base angles equal</td></tr>
        <tr><td>a rhombus (not a square)</td><td>no</td><td>opposite angles are equal, not supplementary</td></tr>
        <tr><td>a kite</td><td>only if two opposite angles are ${m('90°')}</td><td>—</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Equal is not supplementary</span>
      A parallelogram has ${m('∠A = ∠C')}. That gives ${m('∠A + ∠C = 180°')} only when both are
      ${m('90°')} — which is why the only cyclic parallelograms are rectangles.</div>`
    },
    {
      h: 'Deciding',
      html: `<p>Three practical tests for whether four points lie on a circle:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Test</th><th>Condition</th></tr></thead>
      <tbody>
        <tr><td>opposite angles</td><td class="m">∠A + ∠C = 180°</td></tr>
        <tr><td>an exterior angle</td><td>equals the opposite interior angle</td></tr>
        <tr><td>equal angles on one side</td><td class="m">∠ACB = ∠ADB</td> </tr>
      </tbody></table></div>
      <p>The third is the converse of “angles on the same arc are equal”, and it is the one used when
      the quadrilateral is not drawn but two triangles share a base.</p>
      <div class="keybox"><div class="klabel">Cyclic quadrilaterals appear constantly in circle proofs</div>
      Recognising one in a complicated figure converts an unknown angle into a known one in a single
      step. It is the most useful theorem of the Grade 9 circle work.</div>`
    }
  ],
  examples: [
    {
      q: 'A cyclic quadrilateral has ' + m('∠A = 85°') + ' and ' + m('∠B = 110°') + '. Find ' + m('∠C') + ' and ' + m('∠D') + '.',
      steps: [
        [m('∠A + ∠C = 180°'), ''],
        [m('∠C = 95°'), ''],
        [m('∠B + ∠D = 180°'), ''],
        [m('∠D = 70°'), 'Check: ' + m('85 + 110 + 95 + 70 = 360') + ' ✓']
      ],
      ans: m('∠C = 95°, ∠D = 70°')
    },
    {
      q: 'A right triangle has legs ' + m('6') + ' and ' + m('8') + '. Find the radius of its circumscribed circle.',
      steps: [
        ['The hypotenuse is ' + m('10') + '.', ''],
        ['For a right triangle the hypotenuse is a diameter.', 'Thales.'],
        [m('R = ' + f('10', '2')), ''],
        [m('R = 5'), '']
      ],
      ans: m('R = 5')
    },
    {
      q: 'Is a rhombus with angles ' + m('60°') + ' and ' + m('120°') + ' cyclic?',
      steps: [
        ['Opposite angles of a rhombus are equal.', ''],
        ['So they are ' + m('60°, 60°') + ' and ' + m('120°, 120°') + '.', ''],
        [m('60 + 60 = 120 ≠ 180'), ''],
        ['No — it is not cyclic.', 'Only a square among rhombi is.']
      ],
      ans: 'No'
    }
  ],
  modelNote: 'Draw a triangle on the board and construct two perpendicular bisectors; the third passes through their meeting point without being drawn, and the class sees why.',
  interactive: {
    type: 'circleAngles',
    title: 'Four points on a circle',
    hint: 'Drag a vertex and watch the opposite angles keep their sum.'
  },
  quiz: [
    { q: 'An inscribed polygon has:', a: ['its sides touching the circle', 'its vertices on the circle', 'the circle inside', 'no circle'], c: 1, why: 'Vertices, not sides.' },
    { q: 'The circumcentre is where the ______ meet:', a: ['medians', 'bisectors of the angles', 'perpendicular bisectors', 'altitudes'], c: 2, why: 'Equidistant from the vertices.' },
    { q: 'For a right triangle, ' + m('R') + ' equals:', a: [m(f('a', '2')), m(f('c', '2')), m('c'), m(f('a + b', '2'))], c: 1, why: 'The hypotenuse is a diameter.' },
    { q: 'A quadrilateral is cyclic when:', a: ['its sides are equal', 'opposite angles sum to ' + m('180°'), 'its diagonals are equal', 'always'], c: 1, why: 'The standard test.' },
    { q: 'Which parallelogram is cyclic?', a: ['all of them', 'the rhombus', 'the rectangle', 'none'], c: 2, why: 'All angles ' + m('90°') + '.' },
    { q: 'An isosceles trapezium is:', a: ['never cyclic', 'always cyclic', 'sometimes cyclic', 'not a quadrilateral'], c: 1, why: 'Its base angles are equal.' }
  ],
  practice: {
    easy: [
      ['Cyclic quadrilateral, ' + m('∠A = 85°') + ': ' + m('∠C'), m('95°')],
      ['Cyclic quadrilateral, ' + m('∠B = 110°') + ': ' + m('∠D'), m('70°')],
      ['Right triangle legs ' + m('6, 8') + ': ' + m('R'), m('5')],
      ['Right triangle legs ' + m('5, 12') + ': ' + m('R'), m('6.5')],
      ['Is a rectangle cyclic?', 'Yes'],
      ['Is a rhombus (not a square) cyclic?', 'No'],
      ['Where is the circumcentre of an acute triangle?', 'Inside']
    ],
    med: [
      ['Cyclic, ' + m('∠A = 3x') + ' and ' + m('∠C = 2x') + ': ' + m('x'), m('36°')],
      ['Cyclic, ' + m('∠A = 100°') + ' and ' + m('∠B = 75°') + ': the other two', m('80°') + ' and ' + m('105°')],
      ['Where is the circumcentre of an obtuse triangle?', 'Outside'],
      ['An equilateral triangle of side ' + m('6') + ': ' + m('R'), m('2' + sr('3'))],
      ['Is an isosceles trapezium cyclic?', 'Yes'],
      ['The exterior angle of a cyclic quadrilateral equals', 'The opposite interior angle'],
      ['A triangle ' + m('5, 12, 13') + ': ' + m('R'), m('6.5')]
    ],
    hard: [
      ['A cyclic quadrilateral with ' + m('∠A : ∠C = 4 : 5'), m('80°') + ' and ' + m('100°')],
      ['A triangle ' + m('a = 7, A = 30°') + ': ' + m('R'), m('7')],
      ['A cyclic quadrilateral with sides ' + m('4, 5, 6, 7') + ': its area (Brahmagupta)', m('≈ 29.0')],
      ['A square of side ' + m('8') + ': the radius of its circumscribed circle', m('4' + sr('2'))],
      ['A regular hexagon of side ' + m('6') + ': ' + m('R'), m('6')],
      ['A cyclic quadrilateral has an exterior angle of ' + m('70°') + ': the opposite interior angle', m('70°')],
      ['Prove that a rectangle is cyclic', 'Opposite angles are both ' + m('90°')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Mark the circle and its centre on every figure before hunting for angles.',
  homework: [
    'A cyclic quadrilateral has ' + m('∠A = 72°') + ' and ' + m('∠B = 95°') + '. Find the other two angles.',
    'A right triangle has legs ' + m('9') + ' and ' + m('12') + '. Find the radius of its circumscribed circle.',
    'Show that a parallelogram is cyclic only if it is a rectangle.',
    'Find the circumradius of an equilateral triangle of side ' + m('10') + '.',
    'A cyclic quadrilateral has ' + m('∠A : ∠C = 2 : 3') + '. Find both angles.'
  ]
});

/* ============================== 27 ============================== */
G9_GEO.push({
  id: 'g9-27', stream: 'geo', grade: 9, quarter: 3, lessons: '35–36', hours: 2,
  title: 'The circumscribed polygon',
  subtitle: 'A polygon whose every side touches one circle — and the tangent lengths that make it work.',
  uz: 'Geometriya 9, §22', uzPage: 'pp. 128–134',
  cam: 'IGX 3.5', camPage: 'Core & Extended, pp. 63–70', wb: 'Exercise 3.5',
  objectives: [
    'Define a circumscribed polygon and an inscribed circle.',
    'Prove that every triangle has an inscribed circle and locate its centre.',
    'Use S = pr, where p is the semiperimeter.',
    'State and use the tangential-quadrilateral condition a + c = b + d.'
  ],
  terms: [
    ['Circumscribed polygon', 'Tashqi chizilgan ko‘pburchak', 'Описанный многоугольник'],
    ['Inscribed circle', 'Ichki chizilgan aylana', 'Вписанная окружность'],
    ['Incentre', 'Ichki markaz', 'Центр вписанной окружности'],
    ['Inradius', 'Ichki radius', 'Радиус вписанной окружности'],
    ['Angle bisector', 'Bissektrisa', 'Биссектриса'],
    ['Tangent length', 'Urinma uzunligi', 'Длина касательной'],
    ['Semiperimeter', 'Yarim perimetr', 'Полупериметр'],
    ['Tangential quadrilateral', 'Tashqi chizilgan to‘rtburchak', 'Описанный четырёхугольник']
  ],
  timing: [[15, 'The definition'], [25, 'Every triangle has one'], [25, 'The area formula'], [20, 'Tangential quadrilaterals'], [5, 'Homework']],
  sections: [
    {
      h: 'The definition',
      html: `<p>A polygon is <b>circumscribed</b> about a circle if every one of its sides is tangent to
      the circle; the circle is then <b>inscribed</b> in the polygon.</p>
      {{fig:tangentProperty:A tangent is perpendicular to the radius at the point of contact.}}
      <p>Two facts from Grade 8 are used throughout:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Fact</th><th>Statement</th></tr></thead>
      <tbody>
        <tr><td>tangent and radius</td><td>perpendicular at the point of contact</td></tr>
        <tr><td>two tangents from one point</td><td>equal in length</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Inscribed and circumscribed are opposite words</div>
      A polygon inscribed <b>in</b> a circle has its vertices on it; a polygon circumscribed <b>about</b>
      a circle has its sides touching it. Reading which is which in a question is worth doing
      slowly.</div>`
    },
    {
      h: 'Every triangle has one',
      html: `${eq('The three angle bisectors of a triangle meet in one point, which is equidistant from all three sides', true)}
      <p>A point on the bisector of an angle is equidistant from its two arms. The intersection ${m('I')}
      of two bisectors is therefore equidistant from all three sides, so the circle centred at ${m('I')}
      with that distance as radius touches all three sides.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Centre</th><th>Meeting point of</th><th>Always inside?</th></tr></thead>
      <tbody>
        <tr><td>circumcentre</td><td>the perpendicular bisectors</td><td>no</td></tr>
        <tr><td>incentre</td><td>the angle bisectors</td><td><b>yes</b></td></tr>
        <tr><td>centroid</td><td>the medians</td><td>yes</td></tr>
        <tr><td>orthocentre</td><td>the altitudes</td><td>no</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The incentre is always inside</div>
      Because it is equidistant from the three sides and inside the angle at each vertex. That
      distinguishes it from the circumcentre, which leaves the triangle as soon as an angle becomes
      obtuse.</div>`
    },
    {
      h: 'The area formula',
      html: `<p>Join the incentre to the three vertices. The triangle splits into three triangles, each
      with height ${m('r')} on one of the sides:</p>
      ${eq(m('S = ' + f('1', '2') + 'ar + ' + f('1', '2') + 'br + ' + f('1', '2') + 'cr = ' + f('1', '2') + '(a + b + c)r'), true)}
      ${eq(m('S = pr') + ',   where ' + m('p = ' + f('a + b + c', '2')) + ' is the semiperimeter', true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Triangle</th><th class="m">p</th><th class="m">S</th><th class="m">r = ${f('S', 'p')}</th></tr></thead>
      <tbody>
        <tr><td class="m">3, 4, 5</td><td class="m">6</td><td class="m">6</td><td class="m">1</td></tr>
        <tr><td class="m">5, 12, 13</td><td class="m">15</td><td class="m">30</td><td class="m">2</td></tr>
        <tr><td class="m">13, 14, 15</td><td class="m">21</td><td class="m">84</td><td class="m">4</td></tr>
      </tbody></table></div>
      <p>For a right triangle there is a shortcut: ${m('r = ' + f('a + b − c', '2'))}, which the
      ${m('3–4–5')} row confirms.</p>
      <div class="warn"><span class="wl">${m('p')} is the <i>semi</i>perimeter</span>
      Using the whole perimeter halves the inradius. Writing ${m('p')} out as ${m(f('a + b + c', '2'))}
      once, at the top of the solution, prevents it.</div>`
    },
    {
      h: 'Tangential quadrilaterals',
      html: `${eq('A quadrilateral has an inscribed circle if and only if the sums of its opposite sides are equal', true)}
      ${eq(m('a + c = b + d'), true)}
      <p>The proof uses the equal tangent lengths. If the tangent lengths from the four vertices are
      ${m('x, y, z, t')}, then ${m('a = x + y')}, ${m('b = y + z')}, ${m('c = z + t')}, ${m('d = t + x')},
      and both sums equal ${m('x + y + z + t')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Quadrilateral</th><th>Tangential?</th></tr></thead>
      <tbody>
        <tr><td>a rhombus</td><td>yes — all sides equal</td></tr>
        <tr><td>a square</td><td>yes</td></tr>
        <tr><td>a kite</td><td>yes — ${m('a + c = b + d')} by symmetry</td></tr>
        <tr><td>a rectangle (not a square)</td><td><b>no</b></td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The rectangle and the rhombus swap places</div>
      A rectangle is cyclic but not tangential; a rhombus is tangential but not cyclic. Only the square
      is both — which is the neatest way to remember the two conditions.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the inradius of the triangle with sides ' + m('13, 14, 15') + '.',
      steps: [
        [m('p = ' + f('13 + 14 + 15', '2') + ' = 21'), ''],
        ['Heron: ' + m('S = ' + sr('21 · 8 · 7 · 6') + ' = 84') + '.', ''],
        [m('r = ' + f('S', 'p') + ' = ' + f('84', '21')), ''],
        [m('r = 4'), '']
      ],
      ans: m('r = 4')
    },
    {
      q: 'A tangential quadrilateral has sides ' + m('7') + ', ' + m('9') + ', ' + m('11') + ' and ' + m('x') + ' in order. Find ' + m('x') + '.',
      steps: [
        [m('a + c = b + d'), ''],
        [m('7 + 11 = 9 + x'), ''],
        [m('18 = 9 + x'), ''],
        [m('x = 9'), '']
      ],
      ans: m('x = 9')
    },
    {
      q: 'Find the inradius of a right triangle with legs ' + m('6') + ' and ' + m('8') + '.',
      steps: [
        ['Hypotenuse ' + m('10') + ', ' + m('S = 24') + ', ' + m('p = 12') + '.', ''],
        [m('r = ' + f('24', '12') + ' = 2'), ''],
        ['Check with the shortcut: ' + m(f('6 + 8 − 10', '2') + ' = 2') + ' ✓', ''],
        [m('r = 2'), '']
      ],
      ans: m('r = 2')
    }
  ],
  modelNote: 'Construct the three angle bisectors of a scalene triangle with compasses; the circle drawn from their meeting point touches all three sides at the first attempt.',
  interactive: {
    type: 'circleAngles',
    title: 'The inscribed circle',
    hint: 'Move a vertex and watch the incentre stay inside.'
  },
  quiz: [
    { q: 'A circumscribed polygon has:', a: ['vertices on the circle', 'sides touching the circle', 'the circle outside', 'no circle'], c: 1, why: 'Sides, not vertices.' },
    { q: 'The incentre is where the ______ meet:', a: ['medians', 'angle bisectors', 'perpendicular bisectors', 'altitudes'], c: 1, why: 'Equidistant from the sides.' },
    { q: 'The incentre is:', a: ['sometimes outside', 'always inside', 'on a side', 'at a vertex'], c: 1, why: 'It is inside every angle.' },
    { q: m('S') + ' equals:', a: [m('pr'), m('2pr'), m(f('pr', '2')), m('p + r')], c: 0, why: 'Three triangles of height ' + m('r') + '.' },
    { q: 'For ' + m('13, 14, 15') + ', ' + m('r') + ' =', a: [m('2'), m('3'), m('4'), m('6')], c: 2, why: m(f('84', '21')) + '.' },
    { q: 'A tangential quadrilateral satisfies:', a: [m('a + b = c + d'), m('a + c = b + d'), m('a = c'), m('abcd = 1')], c: 1, why: 'Opposite sides.' }
  ],
  practice: {
    easy: [
      [m('3, 4, 5') + ': ' + m('p'), m('6')],
      ['Same: ' + m('S'), m('6')],
      ['Same: ' + m('r'), m('1')],
      [m('5, 12, 13') + ': ' + m('r'), m('2')],
      [m('13, 14, 15') + ': ' + m('r'), m('4')],
      ['Is a rhombus tangential?', 'Yes'],
      ['Is a rectangle (not a square) tangential?', 'No']
    ],
    med: [
      ['Right triangle legs ' + m('6, 8') + ': ' + m('r'), m('2')],
      ['Right triangle legs ' + m('9, 12') + ': ' + m('r'), m('3')],
      ['Tangential quadrilateral ' + m('7, 9, 11, x'), m('x = 9')],
      ['Tangential quadrilateral ' + m('5, 8, 10, x'), m('x = 7')],
      ['A triangle with ' + m('S = 60') + ' and ' + m('p = 20') + ': ' + m('r'), m('3')],
      ['An equilateral triangle of side ' + m('6') + ': ' + m('r'), m(sr('3'))],
      ['Which quadrilateral is both cyclic and tangential?', 'The square']
    ],
    hard: [
      ['A triangle ' + m('7, 8, 9') + ': ' + m('r'), m('≈ 2.24')],
      ['An equilateral triangle of side ' + m('a') + ': ' + m('r'), m(f('a', '2' + sr('3')))],
      ['Same: the ratio ' + m('R : r'), m('2 : 1')],
      ['A right triangle with legs ' + m('a, b') + ': ' + m('r'), m(f('a + b − c', '2'))],
      ['A rhombus of side ' + m('10') + ' with diagonals ' + m('12') + ' and ' + m('16') + ': ' + m('r'), m('4.8')],
      ['A tangential quadrilateral of perimeter ' + m('40') + ': ' + m('a + c'), m('20')],
      ['A triangle with ' + m('r = 3') + ' and perimeter ' + m('30') + ': its area', m('45')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write ' + m('p') + ' as a fraction over ' + m('2') + ' before using ' + m('S = pr') + '.',
  homework: [
    'Find the inradius of the triangle with sides ' + m('9, 10, 17') + '.',
    'Find the inradius of a right triangle with legs ' + m('5') + ' and ' + m('12') + '.',
    'A tangential quadrilateral has sides ' + m('6, 11, 13, x') + ' in order. Find ' + m('x') + '.',
    'Find the inradius of an equilateral triangle of side ' + m('12') + '.',
    'Explain why a rectangle that is not a square has no inscribed circle touching all four sides.'
  ]
});

/* ============================== 28 ============================== */
G9_GEO.push({
  id: 'g9-28', stream: 'geo', grade: 9, quarter: 3, lessons: '37', hours: 1,
  title: 'Regular polygons',
  subtitle: 'All sides equal and all angles equal — and one formula for every interior angle.',
  uz: 'Geometriya 9, §23', uzPage: 'pp. 135–138',
  cam: 'IGX 3.4', camPage: 'Core & Extended, pp. 58–63', wb: 'Exercise 3.4',
  objectives: [
    'Define a regular polygon and give the interior and exterior angle formulae.',
    'Find n from a given interior or exterior angle.',
    'Know which regular polygons tessellate.',
    'Compute the sum of the interior angles of any polygon.'
  ],
  terms: [
    ['Regular polygon', 'Muntazam ko‘pburchak', 'Правильный многоугольник'],
    ['Interior angle', 'Ichki burchak', 'Внутренний угол'],
    ['Exterior angle', 'Tashqi burchak', 'Внешний угол'],
    ['Angle sum', 'Burchaklar yig‘indisi', 'Сумма углов'],
    ['Central angle', 'Markaziy burchak', 'Центральный угол'],
    ['Tessellation', 'Parketlash', 'Замощение'],
    ['Equilateral', 'Teng tomonli', 'Равносторонний'],
    ['Equiangular', 'Teng burchakli', 'Равноугольный']
  ],
  timing: [[10, 'The definition and the angles'], [14, 'Working backwards'], [10, 'Tessellation'], [6, 'Homework']],
  sections: [
    {
      h: 'The definition and the angles',
      html: `<p>A polygon is <b>regular</b> if it is both equilateral and equiangular. Both conditions are
      needed: a rhombus is equilateral but not regular, a rectangle equiangular but not regular.</p>
      ${eq('Sum of the interior angles: ' + m('(n − 2) · 180°'), true)}
      ${eq('Each interior angle: ' + m(f('(n − 2) · 180°', 'n')) + '     Each exterior angle: ' + m(f('360°', 'n')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">n</th><th>Name</th><th>Interior</th><th>Exterior</th><th>Central</th></tr></thead>
      <tbody>
        <tr><td class="m">3</td><td>triangle</td><td class="m">60°</td><td class="m">120°</td><td class="m">120°</td></tr>
        <tr><td class="m">4</td><td>square</td><td class="m">90°</td><td class="m">90°</td><td class="m">90°</td></tr>
        <tr><td class="m">5</td><td>pentagon</td><td class="m">108°</td><td class="m">72°</td><td class="m">72°</td></tr>
        <tr><td class="m">6</td><td>hexagon</td><td class="m">120°</td><td class="m">60°</td><td class="m">60°</td></tr>
        <tr><td class="m">8</td><td>octagon</td><td class="m">135°</td><td class="m">45°</td><td class="m">45°</td></tr>
        <tr><td class="m">10</td><td>decagon</td><td class="m">144°</td><td class="m">36°</td><td class="m">36°</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The exterior angles always total ${m('360°')}</div>
      For every polygon, regular or not, convex or not. Walking once round the boundary turns you through
      one full circle — which is why the exterior angle formula has no ${m('n − 2')} in it, and why it is
      the easier of the two to use.</div>`
    },
    {
      h: 'Working backwards',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Find ${m('n')} by</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>an exterior angle ${m('e')}</td><td class="m">n = ${f('360°', 'e')}</td><td class="m">e = 24° ⇒ n = 15</td></tr>
        <tr><td>an interior angle ${m('i')}</td><td class="m">e = 180° − i, then divide</td><td class="m">i = 162° ⇒ e = 18° ⇒ n = 20</td></tr>
        <tr><td>the angle sum ${m('S')}</td><td class="m">n = ${f('S', '180°')} + 2</td><td class="m">S = 1440° ⇒ n = 10</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Go through the exterior angle</span>
      Solving ${m(f('(n − 2)180', 'n') + ' = 162')} directly needs an equation; ${m('180 − 162 = 18')}
      then ${m(f('360', '18') + ' = 20')} needs two subtractions. The second route is faster and far
      less error-prone.</div>`
    },
    {
      h: 'Tessellation',
      html: `<p>A regular polygon <b>tessellates</b> — tiles the plane with no gaps — exactly when its
      interior angle divides ${m('360°')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Polygon</th><th>Interior</th><th class="m">360° ÷</th><th>Tessellates?</th></tr></thead>
      <tbody>
        <tr><td>triangle</td><td class="m">60°</td><td class="m">6</td><td>yes</td></tr>
        <tr><td>square</td><td class="m">90°</td><td class="m">4</td><td>yes</td></tr>
        <tr><td>pentagon</td><td class="m">108°</td><td class="m">3.33…</td><td><b>no</b></td></tr>
        <tr><td>hexagon</td><td class="m">120°</td><td class="m">3</td><td>yes</td></tr>
        <tr><td>octagon</td><td class="m">135°</td><td class="m">2.67</td><td><b>no</b></td></tr>
      </tbody></table></div>
      <p>Only three regular polygons tessellate on their own: the equilateral triangle, the square and
      the regular hexagon. The hexagon is the most efficient of the three, which is why bees build
      hexagonal cells.</p>`
    }
  ],
  examples: [
    {
      q: 'A regular polygon has an interior angle of ' + m('162°') + '. Find ' + m('n') + '.',
      steps: [
        ['Exterior angle ' + m('= 180° − 162° = 18°') + '.', ''],
        [m('n = ' + f('360°', '18°')), ''],
        [m('n = 20'), ''],
        ['Check: ' + m(f('18 · 180', '20') + ' = 162') + ' ✓', '']
      ],
      ans: m('n = 20')
    },
    {
      q: 'Find the sum of the interior angles of a polygon with ' + m('12') + ' sides, and each angle if it is regular.',
      steps: [
        [m('(12 − 2) × 180° = 1800°'), ''],
        ['Each angle ' + m('= ' + f('1800', '12')), ''],
        [m('= 150°'), ''],
        ['Check: exterior ' + m('= 30° = ' + f('360', '12')) + ' ✓', '']
      ],
      ans: m('1800°') + '; each ' + m('150°')
    },
    {
      q: 'Does a regular pentagon tessellate?',
      steps: [
        ['Its interior angle is ' + m('108°') + '.', ''],
        [m(f('360', '108') + ' = 3.33…'), 'Not a whole number.'],
        ['Three pentagons leave a gap of ' + m('36°') + '.', ''],
        ['No.', '']
      ],
      ans: 'No'
    }
  ],
  modelNote: 'Give out card triangles, squares, pentagons and hexagons and let the class try to tile a desk; the pentagon fails visibly, and the arithmetic afterwards explains it.',
  interactive: {
    type: 'polygonAngles',
    title: 'Interior and exterior angles',
    hint: 'Change n and watch both formulae.'
  },
  quiz: [
    { q: 'The interior angle sum is:', a: [m('n · 180°'), m('(n − 2) · 180°'), m('360°'), m('(n + 2) · 180°')], c: 1, why: m('n − 2') + ' triangles.' },
    { q: 'The exterior angles total:', a: [m('180°'), m('360°'), m('n · 180°'), 'it varies'], c: 1, why: 'One full turn.' },
    { q: 'A regular pentagon’s interior angle:', a: [m('72°'), m('108°'), m('120°'), m('135°')], c: 1, why: m('180 − 72') + '.' },
    { q: 'An exterior angle of ' + m('24°') + ' gives:', a: [m('n = 12'), m('n = 15'), m('n = 18'), m('n = 20')], c: 1, why: m(f('360', '24')) + '.' },
    { q: 'An interior angle of ' + m('162°') + ' gives:', a: [m('n = 18'), m('n = 20'), m('n = 24'), m('n = 30')], c: 1, why: 'Exterior ' + m('18°') + '.' },
    { q: 'Which regular polygons tessellate?', a: ['all', 'triangle, square, hexagon', 'square only', 'pentagon and hexagon'], c: 1, why: 'Their angles divide ' + m('360°') + '.' }
  ],
  practice: {
    easy: [
      ['Interior angle of a regular hexagon', m('120°')],
      ['Exterior angle of a regular hexagon', m('60°')],
      ['Interior angle of a regular octagon', m('135°')],
      ['Angle sum of a pentagon', m('540°')],
      ['Angle sum of a decagon', m('1440°')],
      ['Exterior angles always total', m('360°')],
      ['Interior angle of a regular pentagon', m('108°')]
    ],
    med: [
      ['Exterior angle ' + m('24°') + ': ' + m('n'), m('15')],
      ['Interior angle ' + m('162°') + ': ' + m('n'), m('20')],
      ['Angle sum ' + m('1800°') + ': ' + m('n'), m('12')],
      ['Interior angle of a regular ' + m('12') + '-gon', m('150°')],
      ['Interior angle of a regular ' + m('9') + '-gon', m('140°')],
      ['Does a regular pentagon tessellate?', 'No'],
      ['Does a regular hexagon tessellate?', 'Yes']
    ],
    hard: [
      ['A regular polygon whose interior angle is ' + m('5') + ' times its exterior', m('n = 12')],
      ['A regular polygon with ' + m('n') + ' diagonals from one vertex is a', m('(n + 3)') + '-gon'],
      ['Total diagonals of a regular decagon', m('35')],
      ['A regular polygon with interior angle ' + m('175°'), m('n = 72')],
      ['Two regular polygons tile with a square at a point: which?', 'Two octagons and a square'],
      ['Interior angle of a regular ' + m('20') + '-gon', m('162°')],
      ['Is there a regular polygon with interior angle ' + m('155°') + '?', 'No — ' + m(f('360', '25')) + ' is not whole']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Find ' + m('n') + ' through the exterior angle, never by solving the interior-angle equation.',
  homework: [
    'Find the interior and exterior angles of a regular ' + m('15') + '-gon.',
    'A regular polygon has an exterior angle of ' + m('20°') + '. Find ' + m('n') + ' and the angle sum.',
    'A regular polygon has an interior angle of ' + m('156°') + '. Find ' + m('n') + '.',
    'Which regular polygons tessellate, and why?',
    'How many diagonals has a regular ' + m('12') + '-gon?'
  ]
});

/* ============================== 29 ============================== */
G9_GEO.push({
  id: 'g9-29', stream: 'geo', grade: 9, quarter: 3, lessons: '38–39', hours: 2,
  title: 'Circles inscribed in and circumscribed about a regular polygon',
  subtitle: 'Every regular polygon has both circles, and they share a centre.',
  uz: 'Geometriya 9, §24', uzPage: 'pp. 139–145',
  cam: 'IGX 3.4–3.5', camPage: 'Core & Extended, pp. 58–70', wb: 'Exercise 3.4',
  objectives: [
    'Prove that a regular polygon has both an inscribed and a circumscribed circle with the same centre.',
    'Use the central triangle to relate R, r and the side a.',
    'Compute the area of a regular polygon as ½ P r.',
    'Find R and r for the standard polygons.'
  ],
  terms: [
    ['Centre of a regular polygon', 'Muntazam ko‘pburchak markazi', 'Центр правильного многоугольника'],
    ['Apothem', 'Apofema', 'Апофема'],
    ['Central triangle', 'Markaziy uchburchak', 'Центральный треугольник'],
    ['Circumradius', 'Tashqi radius', 'Радиус описанной окружности'],
    ['Inradius', 'Ichki radius', 'Радиус вписанной окружности'],
    ['Half-angle', 'Yarim burchak', 'Половинный угол'],
    ['Perimeter', 'Perimetr', 'Периметр'],
    ['Area of a polygon', 'Ko‘pburchak yuzi', 'Площадь многоугольника']
  ],
  timing: [[15, 'One centre, two circles'], [25, 'The central triangle'], [25, 'The area'], [20, 'The standard polygons'], [5, 'Homework']],
  sections: [
    {
      h: 'One centre, two circles',
      html: `<p>Join the centre ${m('O')} of a regular ${m('n')}-gon to all ${m('n')} vertices. The
      ${m('n')} triangles formed are congruent isosceles triangles, so:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>All equal</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td>the distances ${m('O')} to the vertices</td><td>a circumscribed circle of radius ${m('R')}</td></tr>
        <tr><td>the distances ${m('O')} to the sides</td><td>an inscribed circle of radius ${m('r')}</td></tr>
      </tbody></table></div>
      <p>The inradius ${m('r')} is also called the <b>apothem</b>: it is the distance from the centre to
      the midpoint of a side, and it is the height of one of the ${m('n')} triangles.</p>
      <div class="keybox"><div class="klabel">Only regular polygons have both circles concentric</div>
      A general triangle has both circles, but with different centres. A rhombus has only the inscribed
      one, a rectangle only the circumscribed one. Regularity is exactly the condition that makes the
      two centres coincide.</div>`
    },
    {
      h: 'The central triangle',
      html: `<p>One of the ${m('n')} triangles has apex angle ${m(f('360°', 'n'))} at ${m('O')}, two
      sides ${m('R')}, base ${m('a')} and height ${m('r')}. Halving it gives a right triangle with acute
      angle ${m(f('180°', 'n'))}:</p>
      ${eq(m(f('a', '2') + ' = R sin ' + f('180°', 'n')) + '     ' + m('r = R cos ' + f('180°', 'n')), true)}
      ${eq(m('a = 2R sin ' + f('180°', 'n')) + '     ' + m('a = 2r tan ' + f('180°', 'n')), true)}
      {{fig:circleArea:One of the n congruent triangles — its height is the apothem, its base a side.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Known</th><th>Find</th><th>Formula</th></tr></thead>
      <tbody>
        <tr><td class="m">R, n</td><td class="m">a</td><td class="m">2R sin ${f('180°', 'n')}</td></tr>
        <tr><td class="m">a, n</td><td class="m">R</td><td class="m">${f('a', '2 sin (180°/n)')}</td></tr>
        <tr><td class="m">a, n</td><td class="m">r</td><td class="m">${f('a', '2 tan (180°/n)')}</td></tr>
        <tr><td class="m">R, n</td><td class="m">r</td><td class="m">R cos ${f('180°', 'n')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The angle in the formula is ${m(f('180°', 'n'))}, not ${m(f('360°', 'n'))}</span>
      Because the right triangle is <b>half</b> of the central one. Using the full central angle doubles
      every side — the commonest error of this lesson.</div>`
    },
    {
      h: 'The area',
      html: `<p>The polygon is ${m('n')} triangles, each of area ${m(f('1', '2') + 'ar')}:</p>
      ${eq(m('S = n · ' + f('1', '2') + 'ar = ' + f('1', '2') + 'Pr'), true)}
      <p>where ${m('P = na')} is the perimeter. This is exactly the formula ${m('S = pr')} of the last
      lesson, with ${m('p = ' + f('P', '2'))}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Polygon of side ${m('a')}</th><th>Area</th></tr></thead>
      <tbody>
        <tr><td>equilateral triangle</td><td class="m">${f('a²' + sr('3'), '4')}</td></tr>
        <tr><td>square</td><td class="m">a²</td></tr>
        <tr><td>regular hexagon</td><td class="m">${f('3a²' + sr('3'), '2')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A regular hexagon is six equilateral triangles</div>
      Its central angle is ${m('60°')}, so each of the six triangles is equilateral and ${m('R = a')}.
      That single fact answers most hexagon questions in one line.</div>`
    },
    {
      h: 'The standard polygons',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Polygon</th><th class="m">R</th><th class="m">r</th><th class="m">a</th></tr></thead>
      <tbody>
        <tr><td>equilateral triangle</td><td class="m">${f('a', sr('3'))}</td><td class="m">${f('a', '2' + sr('3'))}</td><td class="m">R${sr('3')}</td></tr>
        <tr><td>square</td><td class="m">${f('a' + sr('2'), '2')}</td><td class="m">${f('a', '2')}</td><td class="m">R${sr('2')}</td></tr>
        <tr><td>regular hexagon</td><td class="m">a</td><td class="m">${f('a' + sr('3'), '2')}</td><td class="m">R</td></tr>
      </tbody></table></div>
      <p>These three are worth knowing by heart: the ratio ${m('R : r')} is ${m('2 : 1')} for the
      triangle, ${m(sr('2') + ' : 1')} for the square and ${m('2 : ' + sr('3'))} for the hexagon.</p>
      <div class="warn"><span class="wl">${m('R = a')} is true only for the hexagon</span>
      For the square ${m('R')} is larger than half the side by a factor of ${m(sr('2'))}; for the
      triangle larger still. Assuming ${m('R = a')} in general is a serious error.</div>`
    }
  ],
  examples: [
    {
      q: 'A regular hexagon has side ' + m('6') + '. Find ' + m('R') + ', ' + m('r') + ' and its area.',
      steps: [
        ['Central angle ' + m('60°') + ' — the triangles are equilateral, so ' + m('R = 6') + '.', ''],
        [m('r = R cos 30° = 6 × ' + f(sr('3'), '2') + ' = 3' + sr('3')), ''],
        [m('P = 36'), ''],
        [m('S = ' + f('1', '2') + ' × 36 × 3' + sr('3') + ' = 54' + sr('3') + ' ≈ 93.5'), '']
      ],
      ans: m('R = 6, r = 3' + sr('3') + ', S = 54' + sr('3'))
    },
    {
      q: 'A regular pentagon has circumradius ' + m('10') + '. Find its side and area.',
      steps: [
        [m('a = 2R sin 36° = 20 × 0.5878'), ''],
        [m('a ≈ 11.76'), ''],
        [m('r = R cos 36° = 10 × 0.8090 ≈ 8.09'), ''],
        [m('S = ' + f('1', '2') + ' × 5 × 11.76 × 8.09 ≈ 238'), '']
      ],
      ans: m('a ≈ 11.8') + ', ' + m('S ≈ 238')
    },
    {
      q: 'A square has side ' + m('8') + '. Find ' + m('R') + ' and ' + m('r') + '.',
      steps: [
        [m('r = ' + f('a', '2') + ' = 4'), 'Half the side.'],
        [m('R = ' + f('a' + sr('2'), '2') + ' = 4' + sr('2')), 'Half the diagonal.'],
        [m('R ≈ 5.66'), ''],
        [m('R : r = ' + sr('2') + ' : 1') + ' ✓', '']
      ],
      ans: m('R = 4' + sr('2') + ', r = 4')
    }
  ],
  modelNote: 'Draw a regular hexagon by stepping the radius round a circle with compasses; the six equal chords prove R = a without any algebra.',
  interactive: {
    type: 'polygonAngles',
    title: 'R, r and the side',
    hint: 'Increase n and watch both radii approach each other.'
  },
  quiz: [
    { q: 'A regular polygon has:', a: ['only an inscribed circle', 'only a circumscribed circle', 'both, concentric', 'neither'], c: 2, why: 'The centres coincide.' },
    { q: 'The apothem is:', a: [m('R'), m('r'), m('a'), m('P')], c: 1, why: 'The distance to a side.' },
    { q: m('a') + ' equals:', a: [m('2R sin ' + f('360°', 'n')), m('2R sin ' + f('180°', 'n')), m('R sin ' + f('180°', 'n')), m('2R cos ' + f('180°', 'n'))], c: 1, why: 'Half the central angle.' },
    { q: 'The area of a regular polygon is:', a: [m('Pr'), m('½Pr'), m('2Pr'), m('Pr²')], c: 1, why: m('n') + ' triangles of height ' + m('r') + '.' },
    { q: 'For a regular hexagon:', a: [m('R = 2a'), m('R = a'), m('R = ' + f('a', '2')), m('R = a' + sr('3'))], c: 1, why: 'Six equilateral triangles.' },
    { q: 'For a square, ' + m('R : r') + ' is:', a: [m('2 : 1'), m(sr('2') + ' : 1'), m('1 : 1'), m('2 : ' + sr('3'))], c: 1, why: 'Half-diagonal to half-side.' }
  ],
  practice: {
    easy: [
      ['Hexagon of side ' + m('6') + ': ' + m('R'), m('6')],
      ['Hexagon of side ' + m('6') + ': ' + m('r'), m('3' + sr('3'))],
      ['Square of side ' + m('8') + ': ' + m('r'), m('4')],
      ['Square of side ' + m('8') + ': ' + m('R'), m('4' + sr('2'))],
      ['Equilateral triangle of side ' + m('6') + ': ' + m('R'), m('2' + sr('3'))],
      ['Same: ' + m('r'), m(sr('3'))],
      ['Area of a regular polygon', m('½Pr')]
    ],
    med: [
      ['Hexagon of side ' + m('6') + ': its area', m('54' + sr('3'))],
      ['Square of side ' + m('8') + ': its area', m('64')],
      ['Pentagon with ' + m('R = 10') + ': its side', m('≈ 11.8')],
      ['Same: its area', m('≈ 238')],
      ['Octagon of side ' + m('4') + ': its apothem', m('≈ 4.83')],
      ['Same: its area', m('≈ 77.3')],
      ['Hexagon with ' + m('R = 10') + ': its area', m('150' + sr('3'))]
    ],
    hard: [
      ['A regular ' + m('12') + '-gon with ' + m('R = 6') + ': its area', m('108')],
      ['A regular polygon with ' + m('a = 5') + ' and ' + m('r = 6') + ': ' + m('n'), m('8')],
      ['A hexagon inscribed in a circle of radius ' + m('8') + ': its perimeter', m('48')],
      ['A square inscribed in a circle of radius ' + m('8') + ': its area', m('128')],
      ['An equilateral triangle inscribed in a circle of radius ' + m('8') + ': its side', m('8' + sr('3'))],
      ['The ratio of the areas of the inscribed square and hexagon of the same circle', m('4 : 3' + sr('3'))],
      ['As ' + m('n → ∞') + ', ' + m(f('r', 'R')) + ' tends to', m('1')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw the central triangle and mark the half-angle ' + m(f('180°', 'n')) + ' every time.',
  homework: [
    'A regular hexagon has side ' + m('10') + '. Find ' + m('R') + ', ' + m('r') + ' and its area.',
    'A square has circumradius ' + m('6') + '. Find its side and area.',
    'A regular octagon has side ' + m('5') + '. Find its apothem and area.',
    'An equilateral triangle is inscribed in a circle of radius ' + m('9') + '. Find its side.',
    'Explain why ' + m('R = a') + ' for a regular hexagon but not for a square.'
  ]
});

/* ============================== 30 ============================== */
G9_GEO.push({
  id: 'g9-30', stream: 'geo', grade: 9, quarter: 3, lessons: '40–41', hours: 2,
  title: 'The side of a regular polygon and the radii',
  subtitle: 'Exact expressions for the triangle, the square and the hexagon — and one recurrence for doubling n.',
  uz: 'Geometriya 9, §25', uzPage: 'pp. 146–152',
  cam: 'IGX 3.4', camPage: 'Core & Extended, pp. 58–63', wb: 'Exercise 3.4',
  objectives: [
    'Derive the exact side of the inscribed triangle, square and hexagon in terms of R.',
    'Use a = 2R sin(180°/n) for any n.',
    'Use the doubling formula to pass from an n-gon to a 2n-gon.',
    'Compare the perimeters of inscribed polygons with the circumference.'
  ],
  terms: [
    ['Side of a polygon', 'Ko‘pburchak tomoni', 'Сторона многоугольника'],
    ['Inscribed in a circle', 'Aylanaga ichki chizilgan', 'Вписанный в окружность'],
    ['Exact expression', 'Aniq ifoda', 'Точное выражение'],
    ['Doubling formula', 'Ikkilantirish formulasi', 'Формула удвоения'],
    ['Approximation', 'Taqribiy qiymat', 'Приближение'],
    ['Perimeter', 'Perimetr', 'Периметр'],
    ['Limit', 'Limit', 'Предел'],
    ['Archimedes', 'Arximed', 'Архимед']
  ],
  timing: [[15, 'Three exact sides'], [25, 'The general formula'], [25, 'Doubling n'], [20, 'Towards the circumference'], [5, 'Homework']],
  sections: [
    {
      h: 'Three exact sides',
      html: `<p>For a polygon inscribed in a circle of radius ${m('R')}, the central triangle gives the
      side directly.</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">n</th><th>Central angle</th><th class="m">a = 2R sin ${f('180°', 'n')}</th><th>Exact</th></tr></thead>
      <tbody>
        <tr><td class="m">3</td><td class="m">120°</td><td class="m">2R sin 60°</td><td class="m">R${sr('3')}</td></tr>
        <tr><td class="m">4</td><td class="m">90°</td><td class="m">2R sin 45°</td><td class="m">R${sr('2')}</td></tr>
        <tr><td class="m">6</td><td class="m">60°</td><td class="m">2R sin 30°</td><td class="m">R</td></tr>
        <tr><td class="m">8</td><td class="m">45°</td><td class="m">2R sin 22.5°</td><td class="m">R${sr('2 − ' + sr('2'))}</td></tr>
        <tr><td class="m">12</td><td class="m">30°</td><td class="m">2R sin 15°</td><td class="m">R${sr('2 − ' + sr('3'))}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Three that must be automatic</div>
      ${m('a₃ = R' + sr('3'))}, ${m('a₄ = R' + sr('2'))}, ${m('a₆ = R')}. The pattern
      ${m(sr('3') + ', ' + sr('2') + ', ' + sr('1'))} is easy to hold, and these three cover almost every
      examination question.</div>`
    },
    {
      h: 'The general formula',
      html: `${eq(m('aₙ = 2R sin ' + f('180°', 'n')) + '     ' + m('rₙ = R cos ' + f('180°', 'n')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Find</th><th>Formula</th></tr></thead>
      <tbody>
        <tr><td class="m">R, n</td><td class="m">a</td><td class="m">2R sin ${f('180°', 'n')}</td></tr>
        <tr><td class="m">a, n</td><td class="m">R</td><td class="m">${f('a', '2 sin (180°/n)')}</td></tr>
        <tr><td class="m">r, n</td><td class="m">R</td><td class="m">${f('r', 'cos (180°/n)')}</td></tr>
        <tr><td class="m">R, r</td><td class="m">a</td><td class="m">2${sr('R² − r²')}</td></tr>
      </tbody></table></div>
      <p>The last row is Pythagoras in the half-central triangle, and it needs no trigonometry at all —
      useful when neither ${m('n')} nor a calculator is available.</p>
      <div class="warn"><span class="wl">${m('R² = r² + ' + f('a²', '4'))}</span>
      This one relation ties all three quantities together. Given any two of ${m('R')}, ${m('r')},
      ${m('a')}, it gives the third without knowing ${m('n')}.</div>`
    },
    {
      h: 'Doubling n',
      html: `<p>From the side of an inscribed ${m('n')}-gon, the side of the ${m('2n')}-gon follows:</p>
      ${eq(m('a₂ₙ = ' + sr('2R² − 2R' + sr('R² − ' + f('aₙ²', '4')))), true)}
      <p>Starting from the hexagon (${m('a₆ = R')}) and doubling repeatedly gives the ${m('12')}-gon,
      the ${m('24')}-gon, the ${m('48')}-gon — which is how Archimedes computed ${m('π')} to two decimal
      places, about 250 BC.</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">n</th><th class="m">aₙ ÷ R</th><th>Perimeter ÷ ${m('2R')}</th></tr></thead>
      <tbody>
        <tr><td class="m">6</td><td class="m">1</td><td class="m">3.000</td></tr>
        <tr><td class="m">12</td><td class="m">0.5176</td><td class="m">3.106</td></tr>
        <tr><td class="m">24</td><td class="m">0.2611</td><td class="m">3.133</td></tr>
        <tr><td class="m">48</td><td class="m">0.1308</td><td class="m">3.139</td></tr>
        <tr><td class="m">96</td><td class="m">0.0654</td><td class="m">3.141</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The last column is ${m('π')} appearing</div>
      The perimeter of an inscribed ${m('n')}-gon divided by the diameter creeps up towards
      ${m('3.14159…')}. The next lesson gives that limit its name.</div>`
    },
    {
      h: 'Towards the circumference',
      html: `<p>As ${m('n')} grows, three things happen together:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Quantity</th><th>Behaviour</th><th>Limit</th></tr></thead>
      <tbody>
        <tr><td class="m">aₙ</td><td>decreases</td><td class="m">0</td></tr>
        <tr><td class="m">rₙ</td><td>increases</td><td class="m">R</td></tr>
        <tr><td>the perimeter ${m('naₙ')}</td><td>increases</td><td>the circumference</td></tr>
        <tr><td>the area</td><td>increases</td><td>the area of the disc</td></tr>
      </tbody></table></div>
      <p>The inscribed polygon is always <b>smaller</b> than the circle and the circumscribed one always
      larger, so the circumference is trapped between two computable numbers — which is exactly how
      Archimedes bounded ${m('π')} between ${m(f('223', '71'))} and ${m(f('22', '7'))}.</p>
      <div class="warn"><span class="wl">A polygon never becomes a circle</span>
      For every finite ${m('n')} the polygon has corners and the circle does not. The circle is the
      <b>limit</b>, a word that will be defined properly in Grade 11 — but the idea is already clear
      here.</div>`
    }
  ],
  examples: [
    {
      q: 'A regular hexagon is inscribed in a circle of radius ' + m('8') + '. Find its side and perimeter.',
      steps: [
        [m('a₆ = 2R sin 30°'), ''],
        [m('= 2 × 8 × 0.5'), ''],
        [m('a = 8'), 'Equal to ' + m('R') + '.'],
        [m('P = 48'), '']
      ],
      ans: m('a = 8, P = 48')
    },
    {
      q: 'A square is inscribed in a circle of radius ' + m('5') + '. Find its side, apothem and area.',
      steps: [
        [m('a = R' + sr('2') + ' = 5' + sr('2') + ' ≈ 7.07'), ''],
        [m('r = R cos 45° = ' + f('5' + sr('2'), '2') + ' ≈ 3.54'), ''],
        [m('S = a² = 50'), ''],
        ['Check: ' + m('½ × 4 × 7.07 × 3.54 ≈ 50') + ' ✓', '']
      ],
      ans: m('a = 5' + sr('2') + ', r = ' + f('5' + sr('2'), '2') + ', S = 50')
    },
    {
      q: 'A regular polygon inscribed in a circle of radius ' + m('10') + ' has apothem ' + m('8') + '. Find its side.',
      steps: [
        [m('R² = r² + ' + f('a²', '4')), ''],
        [m('100 = 64 + ' + f('a²', '4')), ''],
        [m(f('a²', '4') + ' = 36 ⇒ a² = 144'), ''],
        [m('a = 12'), 'No trigonometry needed.']
      ],
      ans: m('a = 12')
    }
  ],
  modelNote: 'Draw a hexagon, a 12-gon and a 24-gon in one circle on the board; the 24-gon is already visually a circle, and the class sees the limit forming.',
  interactive: {
    type: 'polygonAngles',
    title: 'More sides, closer to a circle',
    hint: 'Increase n and watch the perimeter approach 2πR.'
  },
  quiz: [
    { q: m('a₆') + ' equals:', a: [m('R'), m('R' + sr('2')), m('R' + sr('3')), m('2R')], c: 0, why: 'Six equilateral triangles.' },
    { q: m('a₄') + ' equals:', a: [m('R'), m('R' + sr('2')), m('R' + sr('3')), m('2R')], c: 1, why: m('2R sin 45°') + '.' },
    { q: m('a₃') + ' equals:', a: [m('R'), m('R' + sr('2')), m('R' + sr('3')), m('3R')], c: 2, why: m('2R sin 60°') + '.' },
    { q: m('R² ') + ' equals:', a: [m('r² + a²'), m('r² + ' + f('a²', '4')), m('r² − a²'), m('2r²')], c: 1, why: 'Pythagoras in the half-triangle.' },
    { q: 'As ' + m('n') + ' grows, ' + m('rₙ') + ':', a: ['decreases to ' + m('0'), 'increases to ' + m('R'), 'stays fixed', 'oscillates'], c: 1, why: 'The apothem approaches the radius.' },
    { q: 'The inscribed perimeter is:', a: ['greater than the circumference', 'less than it', 'equal to it', 'unrelated'], c: 1, why: 'A chord is shorter than its arc.' }
  ],
  practice: {
    easy: [
      [m('a₆') + ' for ' + m('R = 8'), m('8')],
      [m('a₄') + ' for ' + m('R = 5'), m('5' + sr('2'))],
      [m('a₃') + ' for ' + m('R = 6'), m('6' + sr('3'))],
      [m('r₆') + ' for ' + m('R = 8'), m('4' + sr('3'))],
      [m('r₄') + ' for ' + m('R = 5'), m(f('5' + sr('2'), '2'))],
      ['Perimeter of a hexagon in ' + m('R = 8'), m('48')],
      ['Area of a square in ' + m('R = 5'), m('50')]
    ],
    med: [
      [m('R = 10, r = 8') + ': ' + m('a'), m('12')],
      [m('R = 13, a = 24') + ': ' + m('r'), m('5')],
      [m('a₁₂') + ' for ' + m('R = 10'), m('≈ 5.18')],
      ['Perimeter of a ' + m('12') + '-gon in ' + m('R = 10'), m('≈ 62.1')],
      ['Circumference of that circle', m('≈ 62.8')],
      [m('a₈') + ' for ' + m('R = 4'), m('≈ 3.06')],
      ['Area of a hexagon in ' + m('R = 8'), m('96' + sr('3'))]
    ],
    hard: [
      ['A regular ' + m('24') + '-gon in ' + m('R = 1') + ': its perimeter', m('≈ 6.265')],
      ['Compare with ' + m('2π'), m('≈ 6.283') + ' — the polygon is smaller'],
      ['A hexagon and a square in the same circle: the ratio of their perimeters', m('6R : 4R' + sr('2')) + ', i.e. ' + m('3 : 2' + sr('2'))],
      ['A regular polygon with ' + m('a = R') + ': ' + m('n'), m('6')],
      ['A regular polygon with ' + m('a = R' + sr('2')) + ': ' + m('n'), m('4')],
      ['A regular ' + m('n') + '-gon has ' + m('r = ' + f('R', '2')) + ': find ' + m('n'), m('3')],
      ['Archimedes bounded ' + m('π') + ' between', m(f('223', '71')) + ' and ' + m(f('22', '7'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Use ' + m('R² = r² + ' + f('a²', '4')) + ' whenever two of the three are known.',
  homework: [
    'A regular hexagon is inscribed in a circle of radius ' + m('12') + '. Find its side, apothem and area.',
    'A square is inscribed in a circle of radius ' + m('9') + '. Find its side and area.',
    'An equilateral triangle is inscribed in a circle of radius ' + m('10') + '. Find its side.',
    'A regular polygon inscribed in a circle of radius ' + m('13') + ' has side ' + m('10') + '. Find its apothem.',
    'Compare the perimeter of a regular ' + m('12') + '-gon inscribed in a unit circle with ' + m('2π') + '.'
  ]
});

/* ============================== 31 ============================== */
G9_GEO.push({
  id: 'g9-31', stream: 'geo', grade: 9, quarter: 3, lessons: '42–43', hours: 2,
  title: 'The circumference of a circle',
  subtitle: 'One number, the same for every circle — and the formula that follows from it.',
  uz: 'Geometriya 9, §26', uzPage: 'pp. 153–158',
  cam: 'IGX 7.1', camPage: 'Core & Extended, pp. 130–136', wb: 'Exercise 7.1',
  objectives: [
    'Define π as the ratio of the circumference to the diameter.',
    'Use C = 2πR = πd in both directions.',
    'Solve problems on wheels, belts and perimeters of composite figures.',
    'Give answers exactly in terms of π and as decimals.'
  ],
  terms: [
    ['Circumference', 'Aylana uzunligi', 'Длина окружности'],
    ['Diameter', 'Diametr', 'Диаметр'],
    ['Radius', 'Radius', 'Радиус'],
    ['Pi', 'Pi soni', 'Число пи'],
    ['Irrational', 'Irratsional', 'Иррациональное'],
    ['Composite figure', 'Murakkab shakl', 'Составная фигура'],
    ['Revolution', 'Aylanish', 'Оборот'],
    ['Exactly', 'Aniq', 'Точно']
  ],
  timing: [[15, 'What π is'], [25, 'The formula'], [25, 'Wheels and belts'], [20, 'Composite perimeters'], [5, 'Homework']],
  sections: [
    {
      h: 'What π is',
      html: `<p>Measure the circumference ${m('C')} and the diameter ${m('d')} of any circle and divide.
      The answer is the same every time:</p>
      ${eq(m('π = ' + f('C', 'd') + ' = 3.14159265…'), true)}
      <p>This is not a coincidence but a consequence of the fact that all circles are similar: a circle
      of twice the radius is an enlargement with ${m('k = 2')}, so its circumference is twice as
      long.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Approximation</th><th>Value</th><th>Error</th></tr></thead>
      <tbody>
        <tr><td class="m">3</td><td class="m">3</td><td class="m">≈ 4.5%</td></tr>
        <tr><td class="m">${f('22', '7')}</td><td class="m">3.1428…</td><td class="m">≈ 0.04%</td></tr>
        <tr><td class="m">3.14</td><td class="m">3.14</td><td class="m">≈ 0.05%</td></tr>
        <tr><td class="m">${f('355', '113')}</td><td class="m">3.14159292…</td><td class="m">≈ 0.000009%</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">${m('π')} is irrational — and that was proved only in 1761</div>
      No fraction equals it exactly, and no decimal expansion terminates or repeats. Every value above is
      an approximation, which is why exact answers are left in terms of ${m('π')}.</div>`
    },
    {
      h: 'The formula',
      html: `${eq(m('C = πd = 2πR'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Find</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td class="m">R = 7</td><td class="m">C</td><td class="m">14π ≈ 44.0</td></tr>
        <tr><td class="m">d = 10</td><td class="m">C</td><td class="m">10π ≈ 31.4</td></tr>
        <tr><td class="m">C = 62.8</td><td class="m">R</td><td class="m">${f('62.8', '2π')} ≈ 10</td></tr>
        <tr><td class="m">C = 12π</td><td class="m">d</td><td class="m">12</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Exact means “in terms of ${m('π')}”</span>
      A circle of radius ${m('7')} has circumference exactly ${m('14π')}; ${m('43.98')} is a rounded
      value. When a question says “give your answer in terms of ${m('π')}”, a decimal scores
      nothing.</div>`
    },
    {
      h: 'Wheels and belts',
      html: `<p>One revolution of a wheel moves it forward by one circumference.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td>a wheel of radius ${m('30 cm')} in ${m('100')} turns</td><td class="m">100 × 60π ≈ 188 m</td></tr>
        <tr><td>turns needed to travel ${m('1 km')}</td><td class="m">${f('100000', '60π')} ≈ 531</td></tr>
        <tr><td>a belt round two equal pulleys of radius ${m('r')}, centres ${m('d')} apart</td><td class="m">2πr + 2d</td></tr>
      </tbody></table></div>
      <p>The last row is worth thinking through: the two straight parts total ${m('2d')}, and the two
      arcs together make one complete circle.</p>
      <div class="keybox"><div class="klabel">Distance ÷ circumference = number of turns</div>
      Every wheel question is one of those two divisions. Deciding which before starting takes five
      seconds and settles the whole problem.</div>`
    },
    {
      h: 'Composite perimeters',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Figure</th><th>Perimeter</th></tr></thead>
      <tbody>
        <tr><td>a semicircle of radius ${m('R')}</td><td class="m">πR + 2R</td></tr>
        <tr><td>a quarter-circle of radius ${m('R')}</td><td class="m">${f('πR', '2')} + 2R</td></tr>
        <tr><td>a running track: two straights ${m('L')}, two semicircular ends of radius ${m('R')}</td><td class="m">2L + 2πR</td></tr>
        <tr><td>a square of side ${m('a')} with a semicircle on one side</td><td class="m">3a + ${f('πa', '2')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A semicircle’s perimeter includes the diameter</span>
      ${m('πR')} is only the curved part. The boundary of the region also runs along the straight edge,
      so ${m('2R')} must be added. Omitting it is the single most common error in composite-perimeter
      questions.</div>`
    }
  ],
  examples: [
    {
      q: 'A circle has radius ' + m('7 cm') + '. Find its circumference exactly and to 3 s.f.',
      steps: [
        [m('C = 2πR = 14π'), 'Exact.'],
        [m('14 × 3.14159…'), ''],
        [m('≈ 43.98'), ''],
        [m('≈ 44.0 cm'), 'Three significant figures.']
      ],
      ans: m('14π ≈ 44.0 cm')
    },
    {
      q: 'A bicycle wheel has radius ' + m('30 cm') + '. How many turns to travel ' + m('1 km') + '?',
      steps: [
        [m('C = 60π ≈ 188.5 cm'), ''],
        [m('1 km = 100 000 cm'), ''],
        [m(f('100000', '188.5')), ''],
        [m('≈ 531') + ' turns.', '']
      ],
      ans: m('≈ 531')
    },
    {
      q: 'Find the perimeter of a semicircular region of radius ' + m('10') + '.',
      steps: [
        ['Curved part: ' + m(f('1', '2') + ' × 2π × 10 = 10π') + '.', ''],
        ['Straight part: the diameter, ' + m('20') + '.', ''],
        [m('P = 10π + 20'), ''],
        [m('≈ 51.4'), '']
      ],
      ans: m('10π + 20 ≈ 51.4')
    }
  ],
  modelNote: 'Measure a tin lid with string and a ruler, divide, and collect the whole class’s answers on the board; they cluster around 3.14 without anyone being told to expect it.',
  interactive: {
    type: 'circleAngles',
    title: 'C and d together',
    hint: 'Change the radius and watch the ratio hold.'
  },
  quiz: [
    { q: m('π') + ' is:', a: [m(f('C', 'R')), m(f('C', 'd')), m(f('d', 'C')), m('Cd')], c: 1, why: 'Circumference over diameter.' },
    { q: m('C') + ' equals:', a: [m('πR'), m('2πR'), m('πR²'), m('2πR²')], c: 1, why: 'Or ' + m('πd') + '.' },
    { q: m('R = 7') + ' gives ' + m('C') + ' =', a: [m('7π'), m('14π'), m('49π'), m('21π')], c: 1, why: m('2 × 7 × π') + '.' },
    { q: m('C = 12π') + ' gives ' + m('d') + ' =', a: [m('6'), m('12'), m('24'), m('36')], c: 1, why: m('C = πd') + '.' },
    { q: 'The perimeter of a semicircle of radius ' + m('R') + ':', a: [m('πR'), m('πR + 2R'), m('2πR'), m('πR + R')], c: 1, why: 'Include the diameter.' },
    { q: 'Turns to travel a distance ' + m('D') + ':', a: [m('DC'), m(f('D', 'C')), m(f('C', 'D')), m('D + C')], c: 1, why: 'One turn is one circumference.' }
  ],
  practice: {
    easy: [
      [m('R = 7') + ': ' + m('C') + ' exactly', m('14π')],
      [m('R = 5') + ': ' + m('C') + ' exactly', m('10π')],
      [m('d = 10') + ': ' + m('C') + ' exactly', m('10π')],
      [m('C = 12π') + ': ' + m('R'), m('6')],
      [m('C = 20π') + ': ' + m('d'), m('20')],
      [m('R = 7') + ': ' + m('C') + ' to 3 s.f.', m('44.0')],
      ['Perimeter of a semicircle, ' + m('R = 10'), m('10π + 20')]
    ],
    med: [
      ['A wheel ' + m('R = 30 cm') + ': distance in ' + m('100') + ' turns', m('≈ 188 m')],
      ['Same wheel: turns to travel ' + m('1 km'), m('≈ 531')],
      ['Perimeter of a quarter-circle, ' + m('R = 8'), m('4π + 16')],
      ['A track: straights ' + m('100 m') + ', ends of radius ' + m('35 m'), m('200 + 70π ≈ 420 m')],
      ['A belt round two pulleys of radius ' + m('5') + ', centres ' + m('20') + ' apart', m('10π + 40')],
      [m('C = 31.4') + ': ' + m('R'), m('≈ 5')],
      ['A square of side ' + m('6') + ' with a semicircle on one side: its perimeter', m('18 + 3π')]
    ],
    hard: [
      ['A circle whose circumference equals its diameter times ' + m('π') + ': always true?', 'Yes — that is the definition'],
      ['Two circles of radii ' + m('3') + ' and ' + m('5') + ': the difference of their circumferences', m('4π')],
      ['A circle of circumference ' + m('C') + ': the circumference when ' + m('R') + ' is doubled', m('2C')],
      ['Earth’s equator, ' + m('R ≈ 6371 km') + ': its length', m('≈ 40 030 km')],
      ['A rope round the equator, raised ' + m('1 m') + ' everywhere: extra length needed', m('2π ≈ 6.28 m')],
      ['A running track lane ' + m('1.22 m') + ' wide: the extra length of the outer lane', m('≈ 7.67 m')],
      ['Three equal circles of radius ' + m('r') + ' touching pairwise: the perimeter of the curved triangle between', m('πr')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Give every answer twice: exactly in terms of ' + m('π') + ', and to three significant figures.',
  homework: [
    'Find the circumference of a circle of radius ' + m('9 cm') + '.',
    'A circle has circumference ' + m('44 cm') + '. Find its radius, taking ' + m('π = ' + f('22', '7')) + '.',
    'A wheel of diameter ' + m('70 cm') + ' makes ' + m('500') + ' turns. How far does it travel?',
    'Find the perimeter of a semicircular region of radius ' + m('14') + '.',
    'A rope stretched round the Earth is raised ' + m('1 m') + ' at every point. How much extra rope is needed?'
  ]
});

/* ============================== 32 ============================== */
G9_GEO.push({
  id: 'g9-32', stream: 'geo', grade: 9, quarter: 3, lessons: '44–45', hours: 2,
  title: 'The length of an arc, and the radian measure of an angle',
  subtitle: 'A fraction of a circle, and the unit of angle that makes the fraction disappear.',
  uz: 'Geometriya 9, §27', uzPage: 'pp. 159–165',
  cam: 'IGX 7.1', camPage: 'Core & Extended, pp. 130–136', wb: 'Exercise 7.1',
  objectives: [
    'Find an arc length as a fraction of the circumference.',
    'Convert between degrees and radians.',
    'Use l = Rα with α in radians.',
    'Solve problems on arcs, sector perimeters and angular measure.'
  ],
  terms: [
    ['Arc', 'Yoy', 'Дуга'],
    ['Arc length', 'Yoy uzunligi', 'Длина дуги'],
    ['Central angle', 'Markaziy burchak', 'Центральный угол'],
    ['Radian', 'Radian', 'Радиан'],
    ['Degree', 'Gradus', 'Градус'],
    ['Sector', 'Sektor', 'Сектор'],
    ['Perimeter of a sector', 'Sektor perimetri', 'Периметр сектора'],
    ['Fraction of a circle', 'Aylananing ulushi', 'Доля окружности']
  ],
  timing: [[15, 'An arc as a fraction'], [25, 'The radian'], [25, 'l = Rα'], [20, 'Sector perimeters'], [5, 'Homework']],
  sections: [
    {
      h: 'An arc as a fraction',
      html: `<p>A central angle of ${m('θ')} degrees cuts off ${m(f('θ', '360'))} of the whole circle, so</p>
      ${eq(m('l = ' + f('θ', '360°') + ' · 2πR'), true)}
      {{fig:radianSector:The arc is the same fraction of the circumference as the angle is of a full turn.}}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">θ</th><th>Fraction</th><th>Arc, ${m('R = 12')}</th></tr></thead>
      <tbody>
        <tr><td class="m">90°</td><td class="m">${f('1', '4')}</td><td class="m">6π</td></tr>
        <tr><td class="m">60°</td><td class="m">${f('1', '6')}</td><td class="m">4π</td></tr>
        <tr><td class="m">45°</td><td class="m">${f('1', '8')}</td><td class="m">3π</td></tr>
        <tr><td class="m">120°</td><td class="m">${f('1', '3')}</td><td class="m">8π</td></tr>
        <tr><td class="m">30°</td><td class="m">${f('1', '12')}</td><td class="m">2π</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Every arc question is a fraction question</div>
      Write the fraction first, then multiply. Doing the fraction and the circumference in one step is
      where the arithmetic errors live.</div>`
    },
    {
      h: 'The radian',
      html: `<p>One <b>radian</b> is the central angle whose arc equals the radius. Since a full turn has
      arc ${m('2πR')}, a full turn is ${m('2π')} radians:</p>
      ${eq(m('180° = π rad') + '     ' + m('1 rad = ' + f('180°', 'π') + ' ≈ 57.3°'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Degrees</th><th class="m">30°</th><th class="m">45°</th><th class="m">60°</th><th class="m">90°</th><th class="m">180°</th><th class="m">360°</th></tr></thead>
      <tbody>
        <tr><td>Radians</td><td class="m">${f('π', '6')}</td><td class="m">${f('π', '4')}</td><td class="m">${f('π', '3')}</td><td class="m">${f('π', '2')}</td><td class="m">π</td><td class="m">2π</td></tr>
      </tbody></table></div>
      <p>Degrees → radians: multiply by ${m(f('π', '180°'))}. Radians → degrees: multiply by
      ${m(f('180°', 'π'))}.</p>
      <div class="keybox"><div class="klabel">The same definition as in the algebra course</div>
      Grade 9 algebra introduced the radian from the unit circle in Quarter II; geometry meets it here
      through the arc. Both are the same statement, ${m('α = ' + f('l', 'R'))}, and the two courses
      agree exactly.</div>`
    },
    {
      h: 'l = Rα',
      html: `<p>With ${m('α')} in radians the fraction ${m(f('θ', '360'))} disappears entirely:</p>
      ${eq(m('α = ' + f('l', 'R')) + '     ⟹     ' + m('l = Rα'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Find</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td class="m">R = 12, α = ${f('π', '3')}</td><td class="m">l</td><td class="m">4π</td></tr>
        <tr><td class="m">R = 5, α = 2</td><td class="m">l</td><td class="m">10</td></tr>
        <tr><td class="m">l = 15, α = 3</td><td class="m">R</td><td class="m">5</td></tr>
        <tr><td class="m">l = 6π, R = 12</td><td class="m">α</td><td class="m">${f('π', '2')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('l = Rα')} is false in degrees</span>
      With ${m('α = 60')} meaning degrees, ${m('Rα')} would be ${m('720')} for ${m('R = 12')} — absurd.
      Convert first, or use the ${m(f('θ', '360'))} form. Mixing the two is the standard error.</div>`
    },
    {
      h: 'Sector perimeters',
      html: `<p>The boundary of a sector is one arc and two radii:</p>
      ${eq(m('P = l + 2R = Rα + 2R = R(α + 2)'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Sector</th><th>Perimeter</th></tr></thead>
      <tbody>
        <tr><td class="m">R = 6, α = ${f('π', '3')}</td><td class="m">2π + 12</td></tr>
        <tr><td class="m">R = 10, θ = 90°</td><td class="m">5π + 20</td></tr>
        <tr><td class="m">a semicircle, ${m('R')}</td><td class="m">πR + 2R</td></tr>
        <tr><td>a segment cut by a chord</td><td>arc ${m('+')} chord</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A sector has two radii, a segment has a chord</span>
      They are different regions with different boundaries. Reading which one a question means — and
      drawing it — settles the perimeter before any arithmetic.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the length of an arc of ' + m('60°') + ' in a circle of radius ' + m('12') + '.',
      steps: [
        [m(f('60', '360') + ' = ' + f('1', '6')), 'The fraction.'],
        [m('C = 24π'), ''],
        [m('l = ' + f('1', '6') + ' × 24π'), ''],
        [m('= 4π ≈ 12.6'), '']
      ],
      ans: m('4π ≈ 12.6')
    },
    {
      q: 'Convert ' + m('135°') + ' to radians and ' + m(f('5π', '6')) + ' to degrees.',
      steps: [
        [m('135 × ' + f('π', '180') + ' = ' + f('135π', '180')), ''],
        ['Cancel by ' + m('45') + ': ' + m(f('3π', '4')) + '.', ''],
        [m(f('5π', '6') + ' × ' + f('180', 'π') + ' = ' + f('900', '6')), ''],
        [m('= 150°'), '']
      ],
      ans: m(f('3π', '4')) + ' and ' + m('150°')
    },
    {
      q: 'A sector has radius ' + m('10') + ' and angle ' + m('90°') + '. Find its perimeter.',
      steps: [
        [m('α = ' + f('π', '2')), ''],
        [m('l = 10 × ' + f('π', '2') + ' = 5π'), ''],
        ['Two radii: ' + m('20') + '.', ''],
        [m('P = 5π + 20 ≈ 35.7'), '']
      ],
      ans: m('5π + 20 ≈ 35.7')
    }
  ],
  modelNote: 'Cut a length of string equal to the radius and lay it round the rim; the angle it subtends is one radian, and 57° becomes a measurement rather than a fact.',
  interactive: {
    type: 'circleAngles',
    title: 'Arc, angle and radius',
    hint: 'Set the arc equal to the radius and read the angle.'
  },
  quiz: [
    { q: 'One radian is the angle whose arc equals:', a: ['the diameter', 'the radius', 'the circumference', m('π')], c: 1, why: 'The definition.' },
    { q: m('180°') + ' in radians:', a: [m(f('π', '2')), m('π'), m('2π'), m('90')], c: 1, why: 'Half a turn.' },
    { q: m('l') + ' with ' + m('α') + ' in radians:', a: [m('Rα'), m('R²α'), m(f('α', 'R')), m('2πRα')], c: 0, why: 'From ' + m('α = ' + f('l', 'R')) + '.' },
    { q: 'An arc of ' + m('60°') + ' in ' + m('R = 12') + ':', a: [m('2π'), m('4π'), m('6π'), m('8π')], c: 1, why: m(f('1', '6') + ' × 24π') + '.' },
    { q: 'The perimeter of a sector is:', a: [m('l'), m('l + R'), m('l + 2R'), m('2l + R')], c: 2, why: 'One arc, two radii.' },
    { q: m('135°') + ' in radians:', a: [m(f('π', '4')), m(f('3π', '4')), m(f('2π', '3')), m(f('5π', '6'))], c: 1, why: m('135 × ' + f('π', '180')) + '.' }
  ],
  practice: {
    easy: [
      ['Arc of ' + m('90°') + ' in ' + m('R = 12'), m('6π')],
      ['Arc of ' + m('60°') + ' in ' + m('R = 12'), m('4π')],
      ['Arc of ' + m('30°') + ' in ' + m('R = 12'), m('2π')],
      [m('90°') + ' in radians', m(f('π', '2'))],
      [m('60°') + ' in radians', m(f('π', '3'))],
      [m('π') + ' in degrees', m('180°')],
      [m('R = 5, α = 2') + ': ' + m('l'), m('10')]
    ],
    med: [
      [m('135°') + ' in radians', m(f('3π', '4'))],
      [m(f('5π', '6')) + ' in degrees', m('150°')],
      [m('R = 12, α = ' + f('π', '3')) + ': ' + m('l'), m('4π')],
      [m('l = 15, α = 3') + ': ' + m('R'), m('5')],
      ['Sector ' + m('R = 10, θ = 90°') + ': perimeter', m('5π + 20')],
      ['Sector ' + m('R = 6, α = ' + f('π', '3')) + ': perimeter', m('2π + 12')],
      ['Arc of ' + m('120°') + ' in ' + m('R = 9'), m('6π')]
    ],
    hard: [
      ['An arc of ' + m('10 cm') + ' subtends ' + m('2 rad') + ': the radius', m('5 cm')],
      ['An arc of ' + m('8π') + ' in a circle of radius ' + m('12') + ': the angle in degrees', m('120°')],
      ['A sector of perimeter ' + m('20') + ' and radius ' + m('6') + ': its angle in radians', m(f('4', '3'))],
      ['The minute hand is ' + m('12 cm') + ': the arc its tip sweeps in ' + m('25') + ' minutes', m('10π cm')],
      ['A pendulum of length ' + m('80 cm') + ' swings through ' + m('12°') + ': the arc', m(f('16π', '3') + ' cm')],
      ['Two arcs of equal length in circles of radii ' + m('4') + ' and ' + m('6') + ': the ratio of their angles', m('3 : 2')],
      ['A wheel of radius ' + m('35 cm') + ' turns through ' + m('4') + ' radians: the distance rolled', m('140 cm')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Convert to radians before using ' + m('l = Rα') + ', and say so in the working.',
  homework: [
    'Find the arc length for ' + m('θ = 45°') + ' in a circle of radius ' + m('16') + '.',
    'Convert ' + m('210°') + ' to radians and ' + m(f('7π', '4')) + ' to degrees.',
    'A sector has radius ' + m('9') + ' and angle ' + m(f('2π', '3')) + '. Find its arc and perimeter.',
    'An arc of ' + m('21 cm') + ' subtends ' + m('1.5 rad') + '. Find the radius.',
    'The minute hand of a clock is ' + m('10 cm') + ' long. Find the arc its tip sweeps in ' + m('40') + ' minutes.'
  ]
});

/* ============================== 33 ============================== */
G9_GEO.push({
  id: 'g9-33', stream: 'geo', grade: 9, quarter: 3, lessons: '46–47', hours: 2,
  title: 'The area of a disc',
  subtitle: 'πR² — proved by cutting the disc into ever-thinner triangles.',
  uz: 'Geometriya 9, §28', uzPage: 'pp. 166–171',
  cam: 'IGX 7.1', camPage: 'Core & Extended, pp. 130–136', wb: 'Exercise 7.1',
  objectives: [
    'Derive S = πR² from the area of a regular polygon.',
    'Use S = πR² in both directions.',
    'Find the area of a ring (annulus).',
    'Solve problems on composite areas involving circles.'
  ],
  terms: [
    ['Disc', 'Doira', 'Круг'],
    ['Area of a disc', 'Doira yuzi', 'Площадь круга'],
    ['Annulus', 'Halqa', 'Кольцо'],
    ['Ring', 'Halqa', 'Кольцо'],
    ['Composite area', 'Murakkab yuza', 'Составная площадь'],
    ['Shaded region', 'Bo‘yalgan soha', 'Закрашенная область'],
    ['Semicircle', 'Yarim doira', 'Полукруг'],
    ['Limit', 'Limit', 'Предел']
  ],
  timing: [[15, 'The proof'], [25, 'Using the formula'], [25, 'Rings'], [20, 'Composite areas'], [5, 'Homework']],
  sections: [
    {
      h: 'The proof',
      html: `<p>A regular ${m('n')}-gon inscribed in the circle has area ${m('S = ' + f('1', '2') + 'Pr')}.
      As ${m('n')} grows, ${m('P')} approaches the circumference ${m('2πR')} and ${m('r')} approaches
      ${m('R')}. Hence</p>
      ${eq(m('S → ' + f('1', '2') + ' · 2πR · R = πR²'), true)}
      {{fig:circleArea:The disc cut into thin sectors and rearranged — the strip is πR long and R high.}}
      <p>The same argument in a picture: cut the disc into many thin sectors and interleave them. The
      result approaches a rectangle of height ${m('R')} and width ${m('πR')} — half the circumference —
      whose area is ${m('πR²')}.</p>
      <div class="keybox"><div class="klabel">Circumference and area are one formula apart</div>
      ${m('C = 2πR')} and ${m('S = πR²')}, and ${m(f('1', '2') + 'CR = S')}. Every disc formula in this
      chapter is a consequence of those two.</div>`
    },
    {
      h: 'Using the formula',
      html: `${eq(m('S = πR² = ' + f('πd²', '4')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Find</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td class="m">R = 7</td><td class="m">S</td><td class="m">49π ≈ 154</td></tr>
        <tr><td class="m">d = 10</td><td class="m">S</td><td class="m">25π ≈ 78.5</td></tr>
        <tr><td class="m">S = 36π</td><td class="m">R</td><td class="m">6</td></tr>
        <tr><td class="m">S = 100</td><td class="m">R</td><td class="m">${sr(f('100', 'π'))} ≈ 5.64</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Going backwards needs a square root</span>
      ${m('S = 36π')} gives ${m('R² = 36')} and then ${m('R = 6')} — not ${m('R = 36')}. Writing
      ${m('R²')} explicitly before taking the root prevents the slip.</div>`
    },
    {
      h: 'Rings',
      html: `<p>An <b>annulus</b> is the region between two concentric circles of radii ${m('R')} and
      ${m('r')}:</p>
      ${eq(m('S = πR² − πr² = π(R² − r²) = π(R − r)(R + r)'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Ring</th><th>Area</th></tr></thead>
      <tbody>
        <tr><td class="m">R = 10, r = 6</td><td class="m">64π</td></tr>
        <tr><td class="m">R = 5, r = 3</td><td class="m">16π</td></tr>
        <tr><td>outer diameter ${m('20')}, width ${m('2')}</td><td class="m">36π</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Factorise rather than subtract</div>
      ${m('π(R − r)(R + r)')} is usually quicker than squaring both radii, and it makes “a ring of width
      ${m('w')}” questions almost immediate: the area is ${m('πw(2r + w)')}.</div>`
    },
    {
      h: 'Composite areas',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Figure</th><th>Area</th></tr></thead>
      <tbody>
        <tr><td>a semicircle of radius ${m('R')}</td><td class="m">${f('πR²', '2')}</td></tr>
        <tr><td>a quarter-disc of radius ${m('R')}</td><td class="m">${f('πR²', '4')}</td></tr>
        <tr><td>a square of side ${m('a')} minus its inscribed disc</td><td class="m">a² − ${f('πa²', '4')}</td></tr>
        <tr><td>a disc minus its inscribed square</td><td class="m">πR² − 2R²</td></tr>
        <tr><td>a running track: two straights ${m('L')} wide ${m('w')}, two semicircular ends</td><td>strips plus rings</td></tr>
      </tbody></table></div>
      <p>The third row is worth remembering as a fraction: an inscribed disc occupies
      ${m(f('π', '4') + ' ≈ 78.5%')} of its square, so the corners take about ${m('21.5%')}.</p>
      <div class="warn"><span class="wl">Subtract, do not guess</span>
      A shaded region is almost always a difference of two simple areas. Name both, compute both, and
      subtract — attempting to find the shaded area directly is what makes these questions look
      hard.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the area of a disc of radius ' + m('7 cm') + ' exactly and to 3 s.f.',
      steps: [
        [m('S = πR² = 49π'), 'Exact.'],
        [m('49 × 3.14159…'), ''],
        [m('≈ 153.94'), ''],
        [m('≈ 154 cm²'), '']
      ],
      ans: m('49π ≈ 154 cm²')
    },
    {
      q: 'A ring has outer radius ' + m('10') + ' and inner radius ' + m('6') + '. Find its area.',
      steps: [
        [m('S = π(R² − r²)'), ''],
        [m('= π(100 − 36)'), ''],
        [m('= 64π'), ''],
        [m('≈ 201'), '']
      ],
      ans: m('64π ≈ 201')
    },
    {
      q: 'A disc is inscribed in a square of side ' + m('12') + '. Find the area outside the disc.',
      steps: [
        ['Square: ' + m('144') + '.', ''],
        ['Disc: ' + m('R = 6') + ', ' + m('S = 36π') + '.', ''],
        [m('144 − 36π'), ''],
        [m('≈ 144 − 113.1 = 30.9'), '']
      ],
      ans: m('144 − 36π ≈ 30.9')
    }
  ],
  modelNote: 'Cut a paper disc into sixteen sectors and interleave them into a near-rectangle; the class measures its sides as πR and R and the formula is theirs.',
  interactive: {
    type: 'circleAngles',
    title: 'From polygon to disc',
    hint: 'Increase n and watch the area approach πR².'
  },
  quiz: [
    { q: 'The area of a disc is:', a: [m('2πR'), m('πR²'), m('πd²'), m('2πR²')], c: 1, why: 'From ' + m('½CR') + '.' },
    { q: m('R = 7') + ' gives ' + m('S') + ' =', a: [m('14π'), m('49π'), m('7π'), m('98π')], c: 1, why: m('π × 49') + '.' },
    { q: m('S = 36π') + ' gives ' + m('R') + ' =', a: [m('6'), m('18'), m('36'), m('12')], c: 0, why: 'Square root of ' + m('36') + '.' },
    { q: 'A ring of radii ' + m('10') + ' and ' + m('6') + ':', a: [m('16π'), m('64π'), m('136π'), m('4π')], c: 1, why: m('π(100 − 36)') + '.' },
    { q: 'A disc inscribed in a square occupies:', a: [m('50%'), m('≈ 78.5%'), m('≈ 90%'), m('100%')], c: 1, why: m(f('π', '4')) + '.' },
    { q: 'A shaded region is usually:', a: ['found directly', 'a difference of two areas', 'a product', 'impossible'], c: 1, why: 'Name both, subtract.' }
  ],
  practice: {
    easy: [
      [m('R = 7') + ': ' + m('S') + ' exactly', m('49π')],
      [m('R = 5') + ': ' + m('S') + ' exactly', m('25π')],
      [m('d = 10') + ': ' + m('S') + ' exactly', m('25π')],
      [m('S = 36π') + ': ' + m('R'), m('6')],
      [m('S = 81π') + ': ' + m('d'), m('18')],
      ['Area of a semicircle, ' + m('R = 6'), m('18π')],
      ['Area of a quarter-disc, ' + m('R = 8'), m('16π')]
    ],
    med: [
      ['Ring ' + m('R = 10, r = 6'), m('64π')],
      ['Ring ' + m('R = 5, r = 3'), m('16π')],
      ['Square of side ' + m('12') + ' minus its inscribed disc', m('144 − 36π')],
      ['A disc of area ' + m('100') + ': its radius', m('≈ 5.64')],
      ['A ring of outer diameter ' + m('20') + ' and width ' + m('2'), m('36π')],
      ['A disc minus its inscribed square, ' + m('R = 5'), m('25π − 50')],
      ['Two discs of radii ' + m('3') + ' and ' + m('4') + ': the radius of a disc of equal total area', m('5')]
    ],
    hard: [
      ['A disc inscribed in an equilateral triangle of side ' + m('12') + ': the area outside it', m('36' + sr('3') + ' − 12π')],
      ['A running track: inner radius ' + m('30') + ', width ' + m('8') + ', straights ' + m('100') + ': the tarmac area', m('800 + 544π')],
      ['A circle whose area equals its circumference numerically: its radius', m('2')],
      ['A ring of area ' + m('96π') + ' and inner radius ' + m('10') + ': its outer radius', m('14')],
      ['Three equal circles of radius ' + m('r') + ' touching pairwise: the area between them', m('r²(' + sr('3') + ' − ' + f('π', '2') + ')')],
      ['A disc of radius ' + m('R') + ' and one of radius ' + m('2R') + ': the ratio of their areas', m('1 : 4')],
      ['A goat tethered by ' + m('7 m') + ' at a corner of a large field: the grazed area', m(f('49π', '4'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Give every answer exactly in terms of ' + m('π') + ' and then to three significant figures.',
  homework: [
    'Find the area of a disc of radius ' + m('9 cm') + '.',
    'A disc has area ' + m('64π') + '. Find its radius and circumference.',
    'Find the area of a ring with radii ' + m('12') + ' and ' + m('9') + '.',
    'A disc is inscribed in a square of side ' + m('20') + '. Find the area outside the disc.',
    'Find the radius of a disc whose area is ' + m('200 cm²') + '.'
  ]
});

/* ============================== 34 ============================== */
G9_GEO.push({
  id: 'g9-34', stream: 'geo', grade: 9, quarter: 3, lessons: '48–49', hours: 2,
  title: 'The areas of the parts of a disc',
  subtitle: 'Sector and segment — one is a fraction of the disc, the other is that fraction minus a triangle.',
  uz: 'Geometriya 9, §29', uzPage: 'pp. 172–178',
  cam: 'IGX 7.1', camPage: 'Core & Extended, pp. 130–140', wb: 'Exercise 7.1',
  objectives: [
    'Find the area of a sector in degrees and in radians.',
    'Find the area of a segment as sector minus triangle.',
    'Solve problems on shaded regions built from sectors and segments.',
    'Choose between the degree and radian forms.'
  ],
  terms: [
    ['Sector', 'Sektor', 'Сектор'],
    ['Segment', 'Segment', 'Сегмент'],
    ['Minor sector', 'Kichik sektor', 'Малый сектор'],
    ['Major sector', 'Katta sektor', 'Большой сектор'],
    ['Chord', 'Vatar', 'Хорда'],
    ['Shaded region', 'Bo‘yalgan soha', 'Закрашенная область'],
    ['Subtract', 'Ayirmoq', 'Вычесть'],
    ['Exact answer', 'Aniq javob', 'Точный ответ']
  ],
  timing: [[15, 'The sector'], [25, 'The segment'], [25, 'Shaded regions'], [20, 'Choosing the form'], [5, 'Homework']],
  sections: [
    {
      h: 'The sector',
      html: `<p>A <b>sector</b> is the region between two radii and the arc between them — a slice of the
      disc.</p>
      ${eq(m('S = ' + f('θ', '360°') + ' · πR²') + '     (degrees)     ' + m('S = ' + f('1', '2') + 'R²α') + '     (radians)', true)}
      {{fig:radianSector:A sector is the same fraction of the disc as its angle is of a full turn.}}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">θ</th><th>Fraction</th><th>Area, ${m('R = 6')}</th></tr></thead>
      <tbody>
        <tr><td class="m">90°</td><td class="m">${f('1', '4')}</td><td class="m">9π</td></tr>
        <tr><td class="m">60°</td><td class="m">${f('1', '6')}</td><td class="m">6π</td></tr>
        <tr><td class="m">120°</td><td class="m">${f('1', '3')}</td><td class="m">12π</td></tr>
        <tr><td class="m">45°</td><td class="m">${f('1', '8')}</td><td class="m">4.5π</td></tr>
      </tbody></table></div>
      <p>Note the pleasing relation ${m('S = ' + f('1', '2') + 'lR')}: a sector is “half base times height”
      with the arc as the base — the same shape of formula as for a triangle.</p>`
    },
    {
      h: 'The segment',
      html: `<p>A <b>segment</b> is the region between a chord and its arc. It is the sector minus the
      triangle formed by the two radii and the chord:</p>
      ${eq(m('S_segment = ' + f('1', '2') + 'R²α − ' + f('1', '2') + 'R² sin α = ' + f('1', '2') + 'R²(α − sin α)'), true)}
      <p>with ${m('α')} in radians. In degrees, compute the sector by the fraction and the triangle by
      ${m(f('1', '2') + 'R² sin θ')}, then subtract.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Formula</th><th class="m">R = 10, θ = 60°</th></tr></thead>
      <tbody>
        <tr><td>sector</td><td class="m">${f('θ', '360')}πR²</td><td class="m">${f('100π', '6')} ≈ 52.36</td></tr>
        <tr><td>triangle</td><td class="m">½R² sin θ</td><td class="m">50 sin 60° ≈ 43.30</td></tr>
        <tr><td>segment</td><td>the difference</td><td class="m">≈ 9.06</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('sin α')} needs ${m('α')} in the calculator’s current mode</span>
      In the radian formula ${m(f('1', '2') + 'R²(α − sin α)')}, both ${m('α')} and ${m('sin α')} are in
      radians. Subtracting a degree sine from a radian angle produces nonsense — and it is the standard
      error in segment questions.</div>`
    },
    {
      h: 'Shaded regions',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Region</th><th>Built from</th></tr></thead>
      <tbody>
        <tr><td>a segment</td><td>sector ${m('−')} triangle</td></tr>
        <tr><td>a major sector</td><td>disc ${m('−')} minor sector</td></tr>
        <tr><td>a lune between two arcs</td><td>sector ${m('−')} sector</td></tr>
        <tr><td>a square minus four quarter-discs at its corners</td><td class="m">a² − πr²</td></tr>
        <tr><td>the region between a square and its inscribed disc</td><td class="m">a² − ${f('πa²', '4')}</td></tr>
      </tbody></table></div>
      <p>The fourth row is worth noticing: four quarter-discs of radius ${m('r')} make one whole disc, so
      no fractions are needed at all.</p>
      <div class="keybox"><div class="klabel">Name the two simple regions before computing either</div>
      Almost every shaded-area question is “this minus that”, and the difficulty is entirely in seeing
      which two. Writing the two names on the diagram makes the arithmetic routine.</div>`
    },
    {
      h: 'Choosing the form',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>If the angle is given in</th><th>Use</th></tr></thead>
      <tbody>
        <tr><td>degrees, a nice fraction of ${m('360')}</td><td class="m">${f('θ', '360')}πR²</td></tr>
        <tr><td>radians</td><td class="m">½R²α</td></tr>
        <tr><td>degrees, awkward</td><td>convert, then ${m('½R²α')}</td></tr>
      </tbody></table></div>
      <p>The radian form is the one used from Grade 10 onwards, so it is worth becoming fluent in it now
      even where the degree form would serve.</p>
      <div class="keybox"><div class="klabel">Four formulae, and they are all the same one</div>
      ${m('l = ' + f('θ', '360') + '·2πR = Rα')} and ${m('S = ' + f('θ', '360') + '·πR² = ' + f('1', '2') + 'R²α')}.
      Both radian forms come from the degree forms by substituting ${m('θ = ' + f('180α', 'π'))}, and both
      are shorter.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the area of a sector with ' + m('R = 6') + ' and ' + m('θ = 120°') + '.',
      steps: [
        [m(f('120', '360') + ' = ' + f('1', '3')), ''],
        [m('πR² = 36π'), ''],
        [m('S = ' + f('1', '3') + ' × 36π'), ''],
        [m('= 12π ≈ 37.7'), '']
      ],
      ans: m('12π ≈ 37.7')
    },
    {
      q: 'Find the area of the segment cut off by a chord subtending ' + m('60°') + ' in a circle of radius ' + m('10') + '.',
      steps: [
        ['Sector: ' + m(f('1', '6') + ' × 100π ≈ 52.36') + '.', ''],
        ['Triangle: ' + m('½ × 100 × sin 60° ≈ 43.30') + '.', 'Equilateral, in fact.'],
        [m('52.36 − 43.30'), ''],
        [m('≈ 9.06'), '']
      ],
      ans: m('≈ 9.06')
    },
    {
      q: 'A sector has area ' + m('24π') + ' and radius ' + m('12') + '. Find its angle in degrees.',
      steps: [
        [m(f('θ', '360') + ' × 144π = 24π'), ''],
        [m(f('θ', '360') + ' = ' + f('24', '144') + ' = ' + f('1', '6')), ''],
        [m('θ = 60°'), ''],
        ['In radians, ' + m(f('π', '3')) + '.', '']
      ],
      ans: m('60°')
    }
  ],
  modelNote: 'Draw one circle with a 60° chord and shade the segment; ask which two regions the class would subtract before writing a single number.',
  interactive: {
    type: 'circleAngles',
    title: 'Sector and segment',
    hint: 'Open the angle and watch the two areas separate.'
  },
  quiz: [
    { q: 'A sector’s area in degrees:', a: [m(f('θ', '360') + 'πR²'), m(f('θ', '180') + 'πR²'), m('θπR²'), m(f('θ', '360') + '2πR')], c: 0, why: 'A fraction of the disc.' },
    { q: 'A sector’s area in radians:', a: [m('R²α'), m('½R²α'), m('2R²α'), m('½Rα')], c: 1, why: 'Substitute ' + m('θ = ' + f('180α', 'π')) + '.' },
    { q: 'A segment is:', a: ['sector ' + m('+') + ' triangle', 'sector ' + m('−') + ' triangle', 'disc ' + m('−') + ' sector', 'half a sector'], c: 1, why: 'Between chord and arc.' },
    { q: m('R = 6, θ = 120°') + ': the sector area', a: [m('6π'), m('9π'), m('12π'), m('36π')], c: 2, why: m(f('1', '3') + ' × 36π') + '.' },
    { q: 'A sector of area ' + m('24π') + ' and ' + m('R = 12') + ' has angle:', a: [m('30°'), m('60°'), m('90°'), m('120°')], c: 1, why: m(f('1', '6')) + ' of the disc.' },
    { q: m('S = ½lR') + ' resembles the formula for:', a: ['a circle', 'a triangle', 'a square', 'a ring'], c: 1, why: 'Half base times height.' }
  ],
  practice: {
    easy: [
      ['Sector ' + m('R = 6, θ = 90°'), m('9π')],
      ['Sector ' + m('R = 6, θ = 60°'), m('6π')],
      ['Sector ' + m('R = 6, θ = 120°'), m('12π')],
      ['Sector ' + m('R = 4, α = ' + f('π', '2')), m('4π')],
      ['Sector ' + m('R = 10, α = 1'), m('50')],
      ['Area of a semicircle, ' + m('R = 8'), m('32π')],
      ['A segment is sector minus', 'A triangle']
    ],
    med: [
      ['Segment, ' + m('R = 10, θ = 60°'), m('≈ 9.06')],
      ['Segment, ' + m('R = 6, θ = 90°'), m('9π − 18 ≈ 10.3')],
      ['Sector of area ' + m('24π') + ', ' + m('R = 12') + ': the angle', m('60°')],
      ['Sector of area ' + m('50') + ', ' + m('R = 10') + ': ' + m('α'), m('1 rad')],
      ['Major sector, ' + m('R = 6, θ = 120°'), m('24π')],
      ['A square of side ' + m('10') + ' minus four quarter-discs of radius ' + m('5'), m('100 − 25π')],
      ['Segment, ' + m('R = 8, α = ' + f('π', '3')), m(f('32π', '3') + ' − 16' + sr('3'))]
    ],
    hard: [
      ['A segment of ' + m('R = 12') + ' and ' + m('θ = 90°'), m('36π − 72 ≈ 41.1')],
      ['A chord of length ' + m('R') + ': the area of the minor segment', m('R²(' + f('π', '6') + ' − ' + f(sr('3'), '4') + ')')],
      ['A goat tethered by ' + m('12 m') + ' at the corner of a square shed, grazing a ' + m('90°') + ' region', m('36π')],
      ['Two circles of radius ' + m('r') + ' whose centres are ' + m('r') + ' apart: the area of overlap', m('r²(' + f('2π', '3') + ' − ' + f(sr('3'), '2') + ')')],
      ['A sector of perimeter ' + m('28') + ' and radius ' + m('8') + ': its area', m('48')],
      ['The greatest sector area for a given perimeter ' + m('P'), m(f('P²', '16')) + ', at ' + m('α = 2')],
      ['A disc of radius ' + m('10') + ' with a ' + m('120°') + ' sector removed: the remaining area', m(f('200π', '3'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'For a segment, write down the sector and the triangle separately before subtracting.',
  homework: [
    'Find the area of a sector with ' + m('R = 9') + ' and ' + m('θ = 40°') + '.',
    'Find the area of a sector with ' + m('R = 5') + ' and ' + m('α = 1.2') + '.',
    'Find the area of the segment cut off by a ' + m('90°') + ' chord in a circle of radius ' + m('8') + '.',
    'A sector has area ' + m('27π') + ' and radius ' + m('9') + '. Find its angle.',
    'A square of side ' + m('12') + ' has a quarter-disc of radius ' + m('12') + ' drawn from one corner. Find the area outside the quarter-disc.'
  ]
});

/* ============================== 35 ============================== */
G9_GEO.push({
  id: 'g9-35', stream: 'geo', grade: 9, quarter: 3, lessons: '50', hours: 1,
  title: 'Chapter exercises — Cambridge solids, surface area and volume',
  subtitle: 'The circle formulae carried into three dimensions, as an IGCSE paper uses them.',
  uz: 'Geometriya 9, III bob mashqlari', uzPage: 'pp. 179–182',
  cam: 'IGX 7.2–7.3', camPage: 'Core & Extended, pp. 137–152', wb: 'Exercise 7.2–7.3',
  objectives: [
    'Use the volume and surface-area formulae for a prism, cylinder, cone and sphere.',
    'Recognise which circle formula each one contains.',
    'Solve problems requiring a formula to be rearranged.',
    'Give answers in terms of π and to three significant figures.'
  ],
  terms: [
    ['Prism', 'Prizma', 'Призма'],
    ['Cylinder', 'Silindr', 'Цилиндр'],
    ['Cone', 'Konus', 'Конус'],
    ['Sphere', 'Sfera', 'Сфера'],
    ['Slant height', 'Yasovchi', 'Образующая'],
    ['Curved surface area', 'Yon sirt yuzi', 'Площадь боковой поверхности'],
    ['Cross-section', 'Kesim', 'Сечение'],
    ['Net', 'Yoyilma', 'Развёртка']
  ],
  timing: [[8, 'The formulae'], [14, 'Where the circle appears'], [12, 'Rearranging'], [6, 'Homework']],
  sections: [
    {
      h: 'The formulae',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Solid</th><th>Volume</th><th>Curved surface</th><th>Total surface</th></tr></thead>
      <tbody>
        <tr><td>prism</td><td class="m">A × h</td><td>perimeter ${m('× h')}</td><td class="m">+ 2A</td></tr>
        <tr><td>cylinder</td><td class="m">πR²h</td><td class="m">2πRh</td><td class="m">2πRh + 2πR²</td></tr>
        <tr><td>cone</td><td class="m">${f('1', '3')}πR²h</td><td class="m">πRL</td><td class="m">πRL + πR²</td></tr>
        <tr><td>sphere</td><td class="m">${f('4', '3')}πR³</td><td class="m">4πR²</td><td class="m">4πR²</td></tr>
        <tr><td>pyramid</td><td class="m">${f('1', '3')}Ah</td><td>—</td><td>—</td></tr>
      </tbody></table></div>
      {{fig:cylinderNet:The net of a cylinder — a rectangle 2πR wide and two discs.}}
      <div class="keybox"><div class="klabel">The cone and the pyramid share the ${m(f('1', '3'))}</div>
      Anything that tapers to a point has one third the volume of the prism or cylinder on the same base
      with the same height. That single sentence covers both rows.</div>`
    },
    {
      h: 'Where the circle appears',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Formula</th><th>Contains</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td class="m">V = πR²h</td><td class="m">πR²</td><td>the area of the circular base</td></tr>
        <tr><td class="m">2πRh</td><td class="m">2πR</td><td>the circumference, unrolled</td></tr>
        <tr><td class="m">πRL</td><td class="m">πR</td><td>half the circumference times ${m('L')}</td></tr>
        <tr><td class="m">L² = R² + h²</td><td>Pythagoras</td><td>the slant height of a cone</td></tr>
      </tbody></table></div>
      {{fig:coneNet:The net of a cone — a sector whose arc is the base circumference.}}
      <p>The curved surface of a cone unrolls into a sector of radius ${m('L')} whose arc is
      ${m('2πR')}; its area is ${m(f('1', '2') + ' × 2πR × L = πRL')}, by the sector formula of the last
      lesson.</p>`
    },
    {
      h: 'Rearranging',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Find</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td>a cylinder, ${m('V = 500')}, ${m('R = 5')}</td><td class="m">h</td><td class="m">${f('500', '25π')} ≈ 6.37</td></tr>
        <tr><td>a sphere, ${m('V = 36π')}</td><td class="m">R</td><td class="m">3</td></tr>
        <tr><td>a cone, ${m('R = 6')}, ${m('h = 8')}</td><td>${m('L')}, then the surface</td><td class="m">L = 10, S = 96π</td></tr>
        <tr><td>a sphere, ${m('S = 100π')}</td><td class="m">R</td><td class="m">5</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A cube root for a sphere’s volume</span>
      ${m('V = ' + f('4', '3') + 'πR³ = 36π')} gives ${m('R³ = 27')}, so ${m('R = 3')}. Taking a square
      root instead is the usual slip.</div>`
    }
  ],
  examples: [
    {
      q: 'A cylinder has radius ' + m('5') + ' and height ' + m('12') + '. Find its volume and total surface area.',
      steps: [
        [m('V = πR²h = π × 25 × 12'), ''],
        [m('= 300π ≈ 942'), ''],
        [m('S = 2πRh + 2πR² = 120π + 50π'), ''],
        [m('= 170π ≈ 534'), '']
      ],
      ans: m('V = 300π') + ', ' + m('S = 170π')
    },
    {
      q: 'A cone has radius ' + m('6') + ' and height ' + m('8') + '. Find its slant height, volume and total surface area.',
      steps: [
        [m('L = ' + sr('36 + 64') + ' = 10'), 'Pythagoras.'],
        [m('V = ' + f('1', '3') + 'π × 36 × 8 = 96π'), ''],
        [m('S = πRL + πR² = 60π + 36π'), ''],
        [m('= 96π ≈ 302'), '']
      ],
      ans: m('L = 10, V = 96π, S = 96π')
    },
    {
      q: 'A sphere has volume ' + m('36π') + '. Find its radius and surface area.',
      steps: [
        [m(f('4', '3') + 'πR³ = 36π'), ''],
        [m('R³ = 27'), ''],
        [m('R = 3'), 'A cube root.'],
        [m('S = 4πR² = 36π ≈ 113'), '']
      ],
      ans: m('R = 3, S = 36π')
    }
  ],
  modelNote: 'Fill a cone with sand and pour it into a cylinder of the same base and height; three pours fill it, and the one third is measured rather than asserted.',
  interactive: {
    type: 'solidVolume',
    title: 'Volumes of the standard solids',
    hint: 'Compare the cone and the cylinder on the same base.'
  },
  quiz: [
    { q: 'The volume of a cylinder:', a: [m('2πRh'), m('πR²h'), m(f('1', '3') + 'πR²h'), m(f('4', '3') + 'πR³')], c: 1, why: 'Base area times height.' },
    { q: 'The curved surface of a cylinder:', a: [m('πR²'), m('2πRh'), m('πRL'), m('4πR²')], c: 1, why: 'The circumference, unrolled.' },
    { q: 'The volume of a cone:', a: [m('πR²h'), m(f('1', '3') + 'πR²h'), m(f('1', '2') + 'πR²h'), m('πRL')], c: 1, why: 'One third of the cylinder.' },
    { q: 'The slant height of a cone:', a: [m('R + h'), m(sr('R² + h²')), m(sr('R² − h²')), m('Rh')], c: 1, why: 'Pythagoras.' },
    { q: 'The surface area of a sphere:', a: [m('πR²'), m('2πR²'), m('4πR²'), m(f('4', '3') + 'πR³')], c: 2, why: 'Four great circles.' },
    { q: m('V = 36π') + ' for a sphere gives ' + m('R') + ' =', a: [m('3'), m('6'), m('9'), m('27')], c: 0, why: 'A cube root.' }
  ],
  practice: {
    easy: [
      ['Cylinder ' + m('R = 5, h = 12') + ': ' + m('V'), m('300π')],
      ['Cylinder ' + m('R = 5, h = 12') + ': curved surface', m('120π')],
      ['Cone ' + m('R = 6, h = 8') + ': ' + m('L'), m('10')],
      ['Cone ' + m('R = 6, h = 8') + ': ' + m('V'), m('96π')],
      ['Sphere ' + m('R = 3') + ': ' + m('V'), m('36π')],
      ['Sphere ' + m('R = 3') + ': ' + m('S'), m('36π')],
      ['Volume of a prism', m('A × h')]
    ],
    med: [
      ['Cylinder ' + m('R = 5, h = 12') + ': total surface', m('170π')],
      ['Cone ' + m('R = 6, h = 8') + ': total surface', m('96π')],
      ['Sphere of volume ' + m('36π') + ': ' + m('R'), m('3')],
      ['Sphere of surface ' + m('100π') + ': ' + m('R'), m('5')],
      ['Cylinder of volume ' + m('500') + ' and ' + m('R = 5') + ': ' + m('h'), m('≈ 6.37')],
      ['Cone of volume ' + m('100π') + ' and ' + m('R = 5') + ': ' + m('h'), m('12')],
      ['A hemisphere of radius ' + m('6') + ': its volume', m('144π')]
    ],
    hard: [
      ['A sphere fits exactly in a cylinder: the ratio of their volumes', m('2 : 3')],
      ['And of their curved surfaces', m('1 : 1')],
      ['A cone, a hemisphere and a cylinder of the same radius and height ' + m('R'), m('1 : 2 : 3')],
      ['A cylinder of height ' + m('h') + ' and volume ' + m('V') + ': its radius', m(sr(f('V', 'πh')))],
      ['A cone of slant height ' + m('13') + ' and radius ' + m('5') + ': its volume', m('100π')],
      ['A sphere of radius ' + m('R') + ' melted into cones of radius ' + m('R') + ' and height ' + m('R'), m('4') + ' cones'],
      ['A cylindrical tank of diameter ' + m('2 m') + ' holding ' + m('6280 L') + ': its height', m('≈ 2 m')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Give every answer in terms of ' + m('π') + ' and then to three significant figures, with units.',
  homework: [
    'A cylinder has radius ' + m('7') + ' and height ' + m('10') + '. Find its volume and total surface area.',
    'A cone has radius ' + m('9') + ' and height ' + m('12') + '. Find its slant height and total surface area.',
    'A sphere has surface area ' + m('144π') + '. Find its radius and volume.',
    'A cone of volume ' + m('48π') + ' has radius ' + m('6') + '. Find its height.',
    'Show that a sphere inscribed in a cylinder occupies two thirds of its volume.'
  ]
});

/* ============================== 36 ============================== */
G9_GEO.push({
  id: 'g9-36', stream: 'geo', grade: 9, quarter: 3, lessons: '51–52', hours: 2,
  title: 'Control work 3, and work on the mistakes',
  subtitle: 'Regular polygons and the circle in one paper, and the chapter closed.',
  uz: 'Geometriya 9, Nazorat ishi 3', uzPage: 'pp. 121–182',
  cam: 'IGX 3, 7 review', camPage: 'Core & Extended, pp. 58–152', wb: 'Control paper G3',
  objectives: [
    'Use the interior and exterior angle formulae under time.',
    'Relate R, r and a for a regular polygon.',
    'Compute arc, sector and segment accurately.',
    'Classify each lost mark and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Regular polygon', 'Muntazam ko‘pburchak', 'Правильный многоугольник'],
    ['Inscribed circle', 'Ichki chizilgan aylana', 'Вписанная окружность'],
    ['Circumscribed circle', 'Tashqi chizilgan aylana', 'Описанная окружность'],
    ['Arc', 'Yoy', 'Дуга'],
    ['Sector', 'Sektor', 'Сектор'],
    ['Segment', 'Segment', 'Сегмент'],
    ['Diagnosis', 'Tashxis', 'Диагностика']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [12, 'Answers'], [20, 'Diagnosis and rewrite'], [5, 'The map']],
  sections: [
    {
      h: 'The paper — 30 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>A regular polygon has an interior angle of ${m('150°')}: find ${m('n')}</td><td class="m">4</td><td>L37</td></tr>
        <tr><td>2</td><td>A cyclic quadrilateral has ${m('∠A = 78°')}: find ${m('∠C')}</td><td class="m">3</td><td>L33–34</td></tr>
        <tr><td>3</td><td>A regular hexagon of side ${m('8')}: find ${m('R')}, ${m('r')} and its area</td><td class="m">6</td><td>L38–41</td></tr>
        <tr><td>4</td><td>A circle of radius ${m('15')}: find the arc and sector for ${m('θ = 72°')}</td><td class="m">6</td><td>L44–47</td></tr>
        <tr><td>5</td><td>A ring with radii ${m('13')} and ${m('5')}: find its area</td><td class="m">5</td><td>L46–47</td></tr>
        <tr><td>6</td><td>The segment cut off by a ${m('90°')} chord in a circle of radius ${m('10')}</td><td class="m">6</td><td>L48–49</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks actually go</div>
      Q1 carries one mark for going through the exterior angle; Q3 two for ${m('R = a')}; Q4 one for the
      fraction ${m(f('72', '360'))}; Q5 two for factorising; Q6 two for subtracting the triangle.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>interior-angle equation solved directly</td><td class="m">${f('(n − 2)180', 'n')} = 150</td><td class="m">e = 30 ⇒ n = 12</td></tr>
        <tr><td>cyclic angles taken as equal</td><td class="m">∠C = 78°</td><td class="m">∠C = 102°</td></tr>
        <tr><td class="m">R</td><td class="m">R = ${f('a', '2')}</td><td class="m">R = a for a hexagon</td></tr>
        <tr><td>circumference used for area</td><td class="m">2πR</td><td class="m">πR²</td></tr>
        <tr><td>ring radii squared wrongly</td><td class="m">π(13 − 5)²</td><td class="m">π(13² − 5²)</td></tr>
        <tr><td>segment left as the sector</td><td class="m">25π</td><td class="m">25π − 50</td></tr>
        <tr><td>degrees used in ${m('½R²α')}</td><td class="m">½ × 100 × 90</td><td>convert to radians first</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'Chapter III as one map',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Block</th><th>The sentence</th></tr></thead>
      <tbody>
        <tr><td>inscribed polygons</td><td>vertices on the circle; a quadrilateral needs ${m('∠A + ∠C = 180°')}</td></tr>
        <tr><td>circumscribed polygons</td><td>sides touching the circle; a quadrilateral needs ${m('a + c = b + d')}</td></tr>
        <tr><td>regular polygons</td><td class="m">e = ${f('360°', 'n')}, i = 180° − e</td></tr>
        <tr><td>the two radii</td><td class="m">a = 2R sin ${f('180°', 'n')}, r = R cos ${f('180°', 'n')}</td></tr>
        <tr><td>the circumference</td><td class="m">C = 2πR</td></tr>
        <tr><td>the arc</td><td class="m">l = ${f('θ', '360')}·2πR = Rα</td></tr>
        <tr><td>the disc</td><td class="m">S = πR²</td></tr>
        <tr><td>the sector</td><td class="m">S = ${f('θ', '360')}·πR² = ½R²α</td></tr>
        <tr><td>the segment</td><td>sector ${m('−')} triangle</td></tr>
      </tbody></table></div>
      {{fig:circleArea:One circle carries every formula of the chapter.}}
      <div class="keybox"><div class="klabel">Looking forward</div>
      Chapter IV returns to similarity, in its most computational form: proportional segments in a
      triangle and in a circle, the mean proportional, and the constructions that produce it. The
      chapter after this one is Grade 10.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q3: a regular hexagon of side ' + m('8') + '.',
      steps: [
        ['Central angle ' + m('60°') + ' — the triangles are equilateral.', ''],
        [m('R = a = 8'), 'The key fact.'],
        [m('r = R cos 30° = 4' + sr('3')), ''],
        [m('S = ½ × 48 × 4' + sr('3') + ' = 96' + sr('3') + ' ≈ 166'), '']
      ],
      ans: m('R = 8, r = 4' + sr('3') + ', S = 96' + sr('3'))
    },
    {
      q: 'Model answer, Q4: ' + m('R = 15') + ', ' + m('θ = 72°') + '.',
      steps: [
        [m(f('72', '360') + ' = ' + f('1', '5')), 'The fraction.'],
        [m('l = ' + f('1', '5') + ' × 30π = 6π ≈ 18.8'), ''],
        [m('S = ' + f('1', '5') + ' × 225π = 45π'), ''],
        [m('≈ 141'), '']
      ],
      ans: m('l = 6π') + ', ' + m('S = 45π')
    },
    {
      q: 'Model answer, Q6: the segment for ' + m('θ = 90°') + ', ' + m('R = 10') + '.',
      steps: [
        ['Sector: ' + m(f('1', '4') + ' × 100π = 25π ≈ 78.5') + '.', ''],
        ['Triangle: ' + m('½ × 10 × 10 = 50') + '.', 'Right-angled.'],
        [m('25π − 50'), ''],
        [m('≈ 28.5'), '']
      ],
      ans: m('25π − 50 ≈ 28.5')
    }
  ],
  modelNote: 'Put a Q6 answer of 25π on the board and ask what is still missing; the class names the triangle before you do.',
  interactive: {
    type: 'quiz',
    title: 'Chapter III in twelve questions',
    hint: 'Two from each block.',
    items: [
      { q: 'An inscribed polygon has:', a: ['sides touching', 'vertices on the circle', 'the circle inside', 'no circle'], c: 1, why: 'Vertices.' },
      { q: 'A cyclic quadrilateral satisfies:', a: [m('∠A = ∠C'), m('∠A + ∠C = 180°'), m('a + c = b + d'), 'nothing'], c: 1, why: 'Opposite angles.' },
      { q: 'A tangential quadrilateral satisfies:', a: [m('∠A + ∠C = 180°'), m('a + c = b + d'), m('a = c'), 'nothing'], c: 1, why: 'Opposite sides.' },
      { q: 'The incentre is where the ______ meet:', a: ['medians', 'angle bisectors', 'perpendicular bisectors', 'altitudes'], c: 1, why: 'Equidistant from the sides.' },
      { q: 'An exterior angle of a regular ' + m('n') + '-gon:', a: [m(f('180°', 'n')), m(f('360°', 'n')), m(f('(n−2)180°', 'n')), m('n · 180°')], c: 1, why: 'They total ' + m('360°') + '.' },
      { q: 'For a regular hexagon:', a: [m('R = 2a'), m('R = a'), m('R = ' + f('a', '2')), m('R = a' + sr('2'))], c: 1, why: 'Six equilateral triangles.' },
      { q: m('a') + ' equals:', a: [m('2R sin ' + f('180°', 'n')), m('2R cos ' + f('180°', 'n')), m('R sin ' + f('360°', 'n')), m('R tan ' + f('180°', 'n'))], c: 0, why: 'Half the central angle.' },
      { q: m('C') + ' equals:', a: [m('πR'), m('2πR'), m('πR²'), m('2πR²')], c: 1, why: 'Or ' + m('πd') + '.' },
      { q: 'An arc with ' + m('α') + ' in radians:', a: [m('Rα'), m('R²α'), m('2πRα'), m(f('α', 'R'))], c: 0, why: m('α = ' + f('l', 'R')) + '.' },
      { q: 'The area of a disc:', a: [m('2πR'), m('πR²'), m('πd²'), m(f('4', '3') + 'πR³')], c: 1, why: 'From ' + m('½CR') + '.' },
      { q: 'A sector in radians:', a: [m('R²α'), m('½R²α'), m('2R²α'), m('½Rα')], c: 1, why: 'Half of ' + m('R²α') + '.' },
      { q: 'A segment is:', a: ['sector ' + m('+') + ' triangle', 'sector ' + m('−') + ' triangle', 'disc ' + m('−') + ' sector', 'half a disc'], c: 1, why: 'Between chord and arc.' }
    ]
  },
  quiz: [
    { q: 'Q1 is quickest through:', a: ['the interior angle', 'the exterior angle', 'the angle sum', 'a diagram'], c: 1, why: 'Two subtractions.' },
    { q: 'In Q2 the angles are:', a: ['equal', 'supplementary', 'complementary', 'unrelated'], c: 1, why: 'Cyclic quadrilateral.' },
    { q: 'In Q3, ' + m('R') + ' equals:', a: [m(f('a', '2')), m('a'), m('a' + sr('2')), m('2a')], c: 1, why: 'Hexagon only.' },
    { q: 'Q4 begins with:', a: ['the circumference', 'the fraction', 'the radius', 'a sketch'], c: 1, why: m(f('72', '360')) + '.' },
    { q: 'Q5 is quickest by:', a: ['squaring separately', 'factorising', 'a calculator', 'estimating'], c: 1, why: m('π(R − r)(R + r)') + '.' },
    { q: 'Q6 must subtract:', a: ['a sector', 'a triangle', 'a ring', 'nothing'], c: 1, why: 'Segment = sector − triangle.' }
  ],
  practice: {
    easy: [
      ['Interior angle ' + m('150°') + ': ' + m('n'), m('12')],
      ['Cyclic, ' + m('∠A = 78°') + ': ' + m('∠C'), m('102°')],
      ['Hexagon of side ' + m('8') + ': ' + m('R'), m('8')],
      ['Hexagon of side ' + m('8') + ': ' + m('r'), m('4' + sr('3'))],
      [m('R = 15, θ = 72°') + ': the arc', m('6π')],
      [m('R = 15, θ = 72°') + ': the sector', m('45π')],
      ['Ring ' + m('13') + ' and ' + m('5') + ': its area', m('144π')]
    ],
    med: [
      ['Hexagon of side ' + m('8') + ': its area', m('96' + sr('3'))],
      ['Segment, ' + m('R = 10, θ = 90°'), m('25π − 50')],
      ['Exterior angle ' + m('30°') + ': ' + m('n'), m('12')],
      ['A square of side ' + m('10') + ': ' + m('R'), m('5' + sr('2'))],
      ['Circumference of a circle of radius ' + m('15'), m('30π')],
      ['Area of that circle', m('225π')],
      ['A sector of ' + m('R = 15') + ' and ' + m('α = 1.2'), m('135')]
    ],
    hard: [
      ['A regular polygon with ' + m('R = 10') + ' and ' + m('a = 10') + ': its area', m('150' + sr('3'))],
      ['A ring of area ' + m('144π') + ' and inner radius ' + m('5') + ': its outer radius', m('13')],
      ['A segment of ' + m('R = 6') + ' and ' + m('θ = 120°'), m('12π − 9' + sr('3'))],
      ['A cyclic quadrilateral with ' + m('∠A : ∠C = 5 : 7'), m('75°') + ' and ' + m('105°')],
      ['A regular octagon of side ' + m('6') + ': its area', m('≈ 174')],
      ['A circle inscribed in a regular hexagon of side ' + m('8') + ': its area', m('48π')],
      ['The area between that circle and the hexagon', m('96' + sr('3') + ' − 48π')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite in full every question that lost a mark before Chapter IV begins.',
  homework: [
    'A regular polygon has an exterior angle of ' + m('15°') + '. Find ' + m('n') + ' and its interior angle.',
    'A regular hexagon has side ' + m('10') + '. Find ' + m('R') + ', ' + m('r') + ' and its area.',
    'A circle has radius ' + m('12') + '. Find the arc and the sector area for ' + m('θ = 150°') + '.',
    'Find the area of a ring with radii ' + m('17') + ' and ' + m('8') + '.',
    'Find the area of the segment cut off by a ' + m('60°') + ' chord in a circle of radius ' + m('12') + '.'
  ]
});

/* ============================== 37 ============================== */
G9_GEO.push({
  id: 'g9-37', stream: 'geo', grade: 9, quarter: 4, lessons: '53–54', hours: 2,
  title: 'The projection of segments, and proportionality',
  subtitle: 'Parallel lines cut any two transversals in the same ratios — the theorem of Thales, in full.',
  uz: 'Geometriya 9, §30', uzPage: 'pp. 183–189',
  cam: 'IGX 11.2', camPage: 'Core & Extended, pp. 226–231', wb: 'Exercise 11.2',
  objectives: [
    'Define the projection of a segment onto a line.',
    'State and use Thales’ theorem for a family of parallel lines.',
    'Divide a segment in a given ratio by construction.',
    'Use the theorem to prove that a line is parallel to a side.'
  ],
  terms: [
    ['Projection', 'Proyeksiya', 'Проекция'],
    ['Transversal', 'Kesuvchi', 'Секущая'],
    ['Parallel lines', 'Parallel to‘g‘ri chiziqlar', 'Параллельные прямые'],
    ['Thales’ theorem', 'Fales teoremasi', 'Теорема Фалеса'],
    ['Proportional segments', 'Proporsional kesmalar', 'Пропорциональные отрезки'],
    ['To divide in a ratio', 'Nisbatda bo‘lish', 'Разделить в отношении'],
    ['Equal segments', 'Teng kesmalar', 'Равные отрезки'],
    ['Converse', 'Teskari teorema', 'Обратная теорема']
  ],
  timing: [[15, 'Projection'], [25, 'Thales’ theorem'], [25, 'Dividing a segment'], [20, 'The converse'], [5, 'Homework']],
  sections: [
    {
      h: 'Projection',
      html: `<p>The <b>projection</b> of a point onto a line is the foot of the perpendicular from it. The
      projection of a segment ${m('AB')} is the segment ${m('A′B′')} joining the projections of its
      ends.</p>
      {{fig:orthoProjection:Dropping perpendiculars from both ends gives the projection of a segment.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Segment</th><th>Its projection</th></tr></thead>
      <tbody>
        <tr><td>parallel to the line</td><td>equal in length</td></tr>
        <tr><td>at ${m('α')} to the line</td><td class="m">AB cos α</td></tr>
        <tr><td>perpendicular to the line</td><td>a single point</td></tr>
      </tbody></table></div>
      <p>In a right triangle, the projections of the two legs onto the hypotenuse are the two parts into
      which the altitude divides it — the figure of Quarter I, met again.</p>
      <div class="keybox"><div class="klabel">A projection is never longer than the segment</div>
      Because ${m('cos α ≤ 1')}. That gives an immediate check on any answer, and it is the reason a
      shadow is shorter than the object except when the light is level.</div>`
    },
    {
      h: 'Thales’ theorem',
      html: `${eq('Parallel lines cutting two transversals cut off proportional segments on them', true)}
      {{fig:thales:Three parallels across two transversals — the ratios on one match the ratios on the other.}}
      <p>If three parallels cut one transversal in ${m('A, B, C')} and the other in ${m('A₁, B₁, C₁')},
      then</p>
      ${eq(m(f('AB', 'BC') + ' = ' + f('A₁B₁', 'B₁C₁')), true)}
      <p>In particular, if the parallels cut equal segments on one transversal they cut equal segments on
      every transversal — which is the classical form of the theorem, and the basis of the construction
      in the next section.</p>
      <div class="warn"><span class="wl">The transversals need not be parallel to each other</span>
      They may meet, cross, or be at any angle. Only the <b>cutting</b> lines must be parallel. Applying
      the theorem to a figure with non-parallel cutting lines is the error to watch for.</div>`
    },
    {
      h: 'Dividing a segment',
      html: `<p><b>Problem.</b> Divide a given segment ${m('AB')} in the ratio ${m('3 : 5')} using only
      compasses and a straight edge.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>What to do</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>draw any ray ${m('AX')} from ${m('A')}</td></tr>
        <tr><td>2</td><td>mark ${m('8')} equal steps along it: ${m('P₁, …, P₈')}</td></tr>
        <tr><td>3</td><td>join ${m('P₈')} to ${m('B')}</td></tr>
        <tr><td>4</td><td>draw the parallel to ${m('P₈B')} through ${m('P₃')}</td></tr>
        <tr><td>5</td><td>it meets ${m('AB')} at the required point</td></tr>
      </tbody></table></div>
      <p>The equal steps are made with one compass opening, and the parallels do the rest. No measuring
      is required, and the construction works for any ratio of whole numbers.</p>
      <div class="keybox"><div class="klabel">${m('3 : 5')} needs ${m('8')} steps, not ${m('5')}</div>
      The total of the two parts of the ratio is the number of equal steps to mark. Marking ${m('5')} and
      counting ${m('3')} gives ${m('3 : 2')} instead.</div>`
    },
    {
      h: 'The converse',
      html: `${eq('If a line divides two sides of a triangle proportionally, it is parallel to the third side', true)}
      <p>This is the form used in proofs. From ${m(f('AD', 'DB') + ' = ' + f('AE', 'EC'))} it follows that
      ${m('DE ∥ BC')} — and the second criterion of similarity is what proves it.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Conclude</th></tr></thead>
      <tbody>
        <tr><td class="m">DE ∥ BC</td><td class="m">${f('AD', 'DB')} = ${f('AE', 'EC')}</td></tr>
        <tr><td class="m">${f('AD', 'DB')} = ${f('AE', 'EC')}</td><td class="m">DE ∥ BC</td></tr>
        <tr><td class="m">DE ∥ BC</td><td class="m">${f('AD', 'AB')} = ${f('DE', 'BC')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Two different ratios, both correct</span>
      ${m(f('AD', 'DB'))} uses the two <b>parts</b>; ${m(f('AD', 'AB'))} uses the part and the
      <b>whole</b>. Both are valid, but only the second gives ${m(f('DE', 'BC'))}. Mixing them is the
      commonest error in this topic.</div>`
    }
  ],
  examples: [
    {
      q: 'In ' + m('△ABC') + ', ' + m('DE ∥ BC') + ', ' + m('AD = 4') + ', ' + m('DB = 6') + ', ' + m('AE = 5') + '. Find ' + m('EC') + '.',
      steps: [
        [m(f('AD', 'DB') + ' = ' + f('AE', 'EC')), 'Parts to parts.'],
        [m(f('4', '6') + ' = ' + f('5', 'EC')), ''],
        [m('4 · EC = 30'), ''],
        [m('EC = 7.5'), '']
      ],
      ans: m('EC = 7.5')
    },
    {
      q: 'Three parallels cut one transversal into ' + m('3') + ' and ' + m('7') + '. They cut the other into ' + m('4.5') + ' and ' + m('x') + '. Find ' + m('x') + '.',
      steps: [
        [m(f('3', '7') + ' = ' + f('4.5', 'x')), ''],
        [m('3x = 31.5'), ''],
        [m('x = 10.5'), ''],
        ['Check: ' + m(f('4.5', '10.5') + ' = ' + f('3', '7')) + ' ✓', '']
      ],
      ans: m('x = 10.5')
    },
    {
      q: 'A segment ' + m('AB = 24') + ' is divided in the ratio ' + m('3 : 5') + '. Find the two parts.',
      steps: [
        ['Total parts: ' + m('3 + 5 = 8') + '.', ''],
        ['One part ' + m('= ' + f('24', '8') + ' = 3') + '.', ''],
        [m('3 × 3 = 9') + ' and ' + m('5 × 3 = 15') + '.', ''],
        ['Check: ' + m('9 + 15 = 24') + ' ✓', '']
      ],
      ans: m('9') + ' and ' + m('15')
    }
  ],
  modelNote: 'Divide a strip of paper into five equal parts using only a ruled exercise book: the printed parallel lines do the work, and Thales’ theorem becomes a practical trick.',
  interactive: {
    type: 'thales',
    title: 'Parallels and ratios',
    hint: 'Slide a parallel and watch both ratios move together.'
  },
  quiz: [
    { q: 'The projection of a segment at ' + m('α') + ' to a line:', a: [m('AB'), m('AB cos α'), m('AB sin α'), m('AB tan α')], c: 1, why: 'Never longer than the segment.' },
    { q: 'Thales’ theorem needs:', a: ['parallel transversals', 'parallel cutting lines', 'a right angle', 'equal segments'], c: 1, why: 'Only the cutting lines.' },
    { q: m('DE ∥ BC') + ' gives:', a: [m(f('AD', 'DB') + ' = ' + f('AE', 'EC')), m('AD = AE'), m('DE = BC'), 'nothing'], c: 0, why: 'Proportional parts.' },
    { q: m(f('AD', 'AB')) + ' equals:', a: [m(f('DE', 'BC')), m(f('AD', 'DB')), m(f('BC', 'DE')), m('1')], c: 0, why: 'Part to whole.' },
    { q: 'To divide in ' + m('3 : 5') + ', mark:', a: [m('3'), m('5'), m('8'), m('15')], c: 2, why: 'The sum of the parts.' },
    { q: 'The converse of Thales gives:', a: ['equal lengths', 'parallelism', 'a right angle', 'similarity of areas'], c: 1, why: 'Proportional division ⇒ parallel.' }
  ],
  practice: {
    easy: [
      [m('DE ∥ BC') + ', ' + m('AD = 4, DB = 6, AE = 5') + ': ' + m('EC'), m('7.5')],
      [m('AD = 3, DB = 6, AE = 4') + ': ' + m('EC'), m('8')],
      ['Divide ' + m('24') + ' in ' + m('3 : 5'), m('9') + ' and ' + m('15')],
      ['Divide ' + m('35') + ' in ' + m('2 : 5'), m('10') + ' and ' + m('25')],
      ['Projection of a segment parallel to the line', 'The segment itself'],
      ['Projection of a perpendicular segment', 'A point'],
      ['To divide in ' + m('2 : 7') + ', how many steps?', m('9')]
    ],
    med: [
      ['Parallels cutting ' + m('3, 7') + ' and ' + m('4.5, x'), m('x = 10.5')],
      ['Parallels cutting ' + m('5, 8') + ' and ' + m('x, 12'), m('x = 7.5')],
      [m('DE ∥ BC') + ', ' + m('AD : AB = 2 : 5') + ': ' + m('DE : BC'), m('2 : 5')],
      ['Same: ' + m('AD : DB'), m('2 : 3')],
      ['Projection of a segment ' + m('10') + ' at ' + m('60°'), m('5')],
      ['Projection of a segment ' + m('10') + ' at ' + m('30°'), m('5' + sr('3'))],
      ['Is ' + m('DE ∥ BC') + ' if ' + m('AD = 4, DB = 6, AE = 6, EC = 9') + '?', 'Yes']
    ],
    hard: [
      ['A segment ' + m('AB = 30') + ' with ' + m('AP : PB = 2 : 3') + ': ' + m('AP'), m('12')],
      ['A triangle with a midline: the ratio it cuts each side in', m('1 : 1')],
      ['Three parallels cut ' + m('AB') + ' into ' + m('x, 2x, 3x') + ' and ' + m('CD = 24') + ': its parts', m('4, 8, 12')],
      ['A trapezium: a line parallel to the bases through the diagonal intersection', 'Divides each leg equally by ratio'],
      ['In ' + m('△ABC') + ', ' + m('D') + ' on ' + m('AB') + ' with ' + m('AD : DB = 1 : 2') + ' and ' + m('DE ∥ BC') + ': ' + m('[△ADE] : [ABC]'), m('1 : 9')],
      ['Same figure: ' + m('[△ADE] : [DBCE]'), m('1 : 8')],
      ['A ladder against a wall makes ' + m('65°') + ': the projection of its ' + m('6 m') + ' length on the ground', m('≈ 2.54 m')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Say each time whether your ratio is part-to-part or part-to-whole.',
  homework: [
    'In ' + m('△ABC') + ', ' + m('DE ∥ BC') + ', ' + m('AD = 6') + ', ' + m('DB = 4') + ', ' + m('AE = 9') + '. Find ' + m('EC') + '.',
    'Divide a segment of length ' + m('42') + ' in the ratio ' + m('3 : 4') + '.',
    'Three parallels cut one transversal into ' + m('4') + ' and ' + m('9') + ', and the other into ' + m('6') + ' and ' + m('x') + '. Find ' + m('x') + '.',
    'Describe the construction that divides a segment in the ratio ' + m('2 : 5') + '.',
    'Find the projection of a segment of length ' + m('12') + ' making ' + m('45°') + ' with a line.'
  ]
});

/* ============================== 38 ============================== */
G9_GEO.push({
  id: 'g9-38', stream: 'geo', grade: 9, quarter: 4, lessons: '55–56', hours: 2,
  title: 'Properties of proportional segments',
  subtitle: 'The bisector theorems, internal and external — and the ratios they create.',
  uz: 'Geometriya 9, §31', uzPage: 'pp. 190–196',
  cam: 'IGX 11.2', camPage: 'Core & Extended, pp. 226–231', wb: 'Exercise 11.2',
  objectives: [
    'State and prove the internal bisector theorem.',
    'Use it to find lengths and to find a side from a given division.',
    'Use the midline theorem and the median-intersection ratio.',
    'Combine several proportional relations in one problem.'
  ],
  terms: [
    ['Bisector theorem', 'Bissektrisa teoremasi', 'Теорема о биссектрисе'],
    ['Internal bisector', 'Ichki bissektrisa', 'Внутренняя биссектриса'],
    ['Midline', 'O‘rta chiziq', 'Средняя линия'],
    ['Median', 'Mediana', 'Медиана'],
    ['Centroid', 'Og‘irlik markazi', 'Центр тяжести'],
    ['Ratio', 'Nisbat', 'Отношение'],
    ['Proportional', 'Proporsional', 'Пропорциональный'],
    ['Auxiliary parallel', 'Yordamchi parallel', 'Вспомогательная параллель']
  ],
  timing: [[15, 'The bisector theorem'], [25, 'Using it'], [25, 'Midlines and medians'], [20, 'Combining relations'], [5, 'Homework']],
  sections: [
    {
      h: 'The bisector theorem',
      html: `${eq('The bisector of an angle of a triangle divides the opposite side in the ratio of the two adjacent sides', true)}
      ${eq(m(f('BD', 'DC') + ' = ' + f('AB', 'AC')), true)}
      {{fig:bisectorConstruction:The bisector from A meets BC at D, dividing it as AB : AC.}}
      <p><b>Proof.</b> Through ${m('C')} draw the parallel to ${m('AD')}, meeting ${m('BA')} extended at
      ${m('E')}. Then ${m('∠ACE = ∠CAD')} (alternate) and ${m('∠AEC = ∠BAD')} (corresponding), and since
      ${m('AD')} bisects, ${m('∠ACE = ∠AEC')}, so ${m('△ACE')} is isosceles with ${m('AE = AC')}.
      Thales in ${m('△BEC')} then gives ${m(f('BD', 'DC') + ' = ' + f('BA', 'AE') + ' = ' + f('AB', 'AC'))}.</p>
      <div class="keybox"><div class="klabel">The bisector is the only cevian with this property</div>
      A median divides the opposite side in ${m('1 : 1')} regardless of the sides; an altitude divides it
      in the ratio of the squares. Only the bisector reproduces the ratio of the sides themselves.</div>`
    },
    {
      h: 'Using it',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Find</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td class="m">AB = 8, AC = 12, BC = 15</td><td class="m">BD</td><td class="m">${f('2', '5')} × 15 = 6</td></tr>
        <tr><td class="m">AB = 10, BD = 4, DC = 6</td><td class="m">AC</td><td class="m">15</td></tr>
        <tr><td class="m">AB = 6, AC = 9, BD = 4</td><td class="m">DC</td><td class="m">6</td></tr>
        <tr><td class="m">AB = AC</td><td class="m">BD : DC</td><td class="m">1 : 1</td></tr>
      </tbody></table></div>
      <p>The last row says that in an isosceles triangle the bisector from the apex is also the median —
      and, by symmetry, the altitude.</p>
      <div class="warn"><span class="wl">Set up the proportion before substituting</span>
      Write ${m(f('BD', 'DC') + ' = ' + f('AB', 'AC'))} first, then put the numbers in. Half the errors
      in this topic come from pairing ${m('BD')} with ${m('AC')}.</div>`
    },
    {
      h: 'Midlines and medians',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>Ratio</th></tr></thead>
      <tbody>
        <tr><td>the midline of a triangle</td><td>parallel to the third side and half of it</td></tr>
        <tr><td>the midline of a trapezium</td><td class="m">${f('a + b', '2')}</td></tr>
        <tr><td>the three medians</td><td>meet at one point</td></tr>
        <tr><td>the centroid divides each median</td><td class="m">2 : 1</td></tr>
      </tbody></table></div>
      {{fig:midlineTriangle:The midline joins two midpoints; it is parallel to the third side and half its length.}}
      <p>The ${m('2 : 1')} ratio is measured <b>from the vertex</b>: the longer piece touches the vertex,
      the shorter the midpoint of the opposite side.</p>
      <div class="keybox"><div class="klabel">The midline is Thales with the ratio ${m('1 : 1')}</div>
      Everything in this section is one theorem seen at different ratios. Recognising that keeps four
      separate facts down to one.</div>`
    },
    {
      h: 'Combining relations',
      html: `<p>A typical Quarter IV problem chains two or three of these together.</p>
      <p><b>Example.</b> In ${m('△ABC')}, ${m('AB = 12')}, ${m('AC = 18')}, ${m('BC = 20')}. The bisector
      from ${m('A')} meets ${m('BC')} at ${m('D')}, and ${m('M')} is the midpoint of ${m('BC')}. Find
      ${m('DM')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td class="m">BD : DC</td><td class="m">12 : 18 = 2 : 3</td></tr>
        <tr><td class="m">BD</td><td class="m">${f('2', '5')} × 20 = 8</td></tr>
        <tr><td class="m">BM</td><td class="m">10</td></tr>
        <tr><td class="m">DM</td><td class="m">10 − 8 = 2</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Put every computed length on the diagram</div>
      A figure with ${m('BD = 8')} and ${m('BM = 10')} marked answers the question at a glance. Keeping
      the numbers in the working instead of on the picture is what makes these problems feel hard.</div>`
    }
  ],
  examples: [
    {
      q: 'In ' + m('△ABC') + ', ' + m('AB = 8') + ', ' + m('AC = 12') + ', ' + m('BC = 15') + '. The bisector from ' + m('A') + ' meets ' + m('BC') + ' at ' + m('D') + '. Find ' + m('BD') + ' and ' + m('DC') + '.',
      steps: [
        [m(f('BD', 'DC') + ' = ' + f('8', '12') + ' = ' + f('2', '3')), ''],
        ['Total parts ' + m('5') + '.', ''],
        [m('BD = ' + f('2', '5') + ' × 15 = 6'), ''],
        [m('DC = 9'), '']
      ],
      ans: m('BD = 6, DC = 9')
    },
    {
      q: 'In ' + m('△ABC') + ', ' + m('AB = 10') + ' and the bisector from ' + m('A') + ' divides ' + m('BC') + ' into ' + m('4') + ' and ' + m('6') + '. Find ' + m('AC') + '.',
      steps: [
        [m(f('4', '6') + ' = ' + f('10', 'AC')), ''],
        [m('4 · AC = 60'), ''],
        [m('AC = 15'), ''],
        ['Check: ' + m(f('10', '15') + ' = ' + f('2', '3') + ' = ' + f('4', '6')) + ' ✓', '']
      ],
      ans: m('AC = 15')
    },
    {
      q: 'In ' + m('△ABC') + ', ' + m('AB = 12') + ', ' + m('AC = 18') + ', ' + m('BC = 20') + '. Find the distance from the foot of the bisector from ' + m('A') + ' to the midpoint of ' + m('BC') + '.',
      steps: [
        [m('BD : DC = 12 : 18 = 2 : 3'), ''],
        [m('BD = ' + f('2', '5') + ' × 20 = 8'), ''],
        [m('BM = 10'), 'The midpoint.'],
        [m('DM = 2'), '']
      ],
      ans: m('DM = 2')
    }
  ],
  modelNote: 'Draw a triangle with sides 3 cm and 6 cm and bisect the angle between them; measuring the two parts of the opposite side confirms 1 : 2 before any proof.',
  interactive: {
    type: 'triangleMidline',
    title: 'Midlines and medians',
    hint: 'Drag a vertex and watch the 2 : 1 ratio hold.'
  },
  quiz: [
    { q: 'The bisector from ' + m('A') + ' divides ' + m('BC') + ' in the ratio:', a: [m('AB : BC'), m('AB : AC'), m('AC : BC'), m('1 : 1')], c: 1, why: 'The two adjacent sides.' },
    { q: m('AB = 8, AC = 12, BC = 15') + ': ' + m('BD') + ' =', a: [m('5'), m('6'), m('7.5'), m('9')], c: 1, why: m(f('2', '5') + ' × 15') + '.' },
    { q: 'In an isosceles triangle the bisector from the apex is also:', a: ['an altitude only', 'a median only', 'both', 'neither'], c: 2, why: 'By symmetry.' },
    { q: 'A midline is:', a: ['equal to the third side', 'half the third side', 'twice it', 'unrelated'], c: 1, why: 'And parallel to it.' },
    { q: 'The centroid divides each median in:', a: [m('1 : 1'), m('2 : 1'), m('3 : 1'), m('1 : 2') + ' from the vertex'], c: 1, why: 'Measured from the vertex.' },
    { q: 'The midline of a trapezium is:', a: [m('a + b'), m(f('a + b', '2')), m(f('ab', '2')), m('a − b')], c: 1, why: 'The mean of the bases.' }
  ],
  practice: {
    easy: [
      [m('AB = 8, AC = 12') + ': ' + m('BD : DC'), m('2 : 3')],
      [m('AB = 8, AC = 12, BC = 15') + ': ' + m('BD'), m('6')],
      ['Same: ' + m('DC'), m('9')],
      [m('AB = 6, AC = 9, BD = 4') + ': ' + m('DC'), m('6')],
      [m('AB = AC') + ': ' + m('BD : DC'), m('1 : 1')],
      ['Midline of a triangle with third side ' + m('14'), m('7')],
      ['The centroid ratio', m('2 : 1')]
    ],
    med: [
      [m('AB = 10, BD = 4, DC = 6') + ': ' + m('AC'), m('15')],
      [m('AB = 12, AC = 18, BC = 20') + ': ' + m('BD'), m('8')],
      ['Same: ' + m('DM') + ' where ' + m('M') + ' is the midpoint', m('2')],
      ['Midline of a trapezium with bases ' + m('8') + ' and ' + m('14'), m('11')],
      ['A median of length ' + m('12') + ': the distance from the vertex to the centroid', m('8')],
      [m('AB = 15, AC = 20, BC = 21') + ': ' + m('BD'), m('9')],
      ['A triangle with ' + m('BD : DC = 3 : 4') + ' and ' + m('AB = 9') + ': ' + m('AC'), m('12')]
    ],
    hard: [
      ['A triangle ' + m('13, 14, 15') + ': the bisector from the vertex between ' + m('13') + ' and ' + m('14') + ' divides ' + m('15'), m('7.22') + ' and ' + m('7.78')],
      ['A trapezium with bases ' + m('10') + ' and ' + m('16') + ': the segment of the midline between the diagonals', m('3')],
      ['A triangle whose medians are ' + m('9, 12, 15') + ': its area', m('72')],
      ['A bisector divides ' + m('BC = 28') + ' as ' + m('3 : 4') + ' with ' + m('AB = 12') + ': ' + m('AC'), m('16')],
      ['The centroid of a triangle with vertices ' + m('(0,0), (6,0), (0,9)'), m('(2, 3)')],
      ['A median divides a triangle into two parts of area ratio', m('1 : 1')],
      ['Three medians divide a triangle into', m('6') + ' triangles of equal area']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write the proportion in full before substituting any number.',
  homework: [
    'In ' + m('△ABC') + ', ' + m('AB = 9') + ', ' + m('AC = 15') + ', ' + m('BC = 16') + '. Find the parts into which the bisector from ' + m('A') + ' divides ' + m('BC') + '.',
    'A bisector divides ' + m('BC') + ' into ' + m('5') + ' and ' + m('7') + ', and ' + m('AB = 20') + '. Find ' + m('AC') + '.',
    'Find the midline of a trapezium with bases ' + m('12') + ' and ' + m('20') + '.',
    'A median has length ' + m('15') + '. Find the two parts into which the centroid divides it.',
    'Prove the bisector theorem using an auxiliary parallel.'
  ]
});

/* ============================== 39 ============================== */
G9_GEO.push({
  id: 'g9-39', stream: 'geo', grade: 9, quarter: 4, lessons: '57–58', hours: 2,
  title: 'Proportional segments in a right-angled triangle',
  subtitle: 'The altitude to the hypotenuse, and the three mean proportionals it creates.',
  uz: 'Geometriya 9, §32', uzPage: 'pp. 197–203',
  cam: 'IGX 11.1', camPage: 'Core & Extended, pp. 220–226', wb: 'Exercise 11.1',
  objectives: [
    'Define the mean proportional of two segments.',
    'State the three relations of the altitude figure and use them fluently.',
    'Derive Pythagoras’ theorem from them.',
    'Solve numerical problems on the altitude and the projections.'
  ],
  terms: [
    ['Mean proportional', 'O‘rta proporsional', 'Среднее пропорциональное'],
    ['Geometric mean', 'O‘rta geometrik', 'Среднее геометрическое'],
    ['Altitude', 'Balandlik', 'Высота'],
    ['Projection', 'Proyeksiya', 'Проекция'],
    ['Hypotenuse', 'Gipotenuza', 'Гипотенуза'],
    ['Leg', 'Katet', 'Катет'],
    ['Relation', 'Munosabat', 'Соотношение'],
    ['Derive', 'Keltirib chiqarish', 'Вывести']
  ],
  timing: [[15, 'The mean proportional'], [25, 'The three relations'], [25, 'Pythagoras from them'], [20, 'Problems'], [5, 'Homework']],
  sections: [
    {
      h: 'The mean proportional',
      html: `<p>${m('x')} is the <b>mean proportional</b> between ${m('a')} and ${m('b')} if</p>
      ${eq(m(f('a', 'x') + ' = ' + f('x', 'b')) + '   that is   ' + m('x² = ab') + '   that is   ' + m('x = ' + sr('ab')), true)}
      <p>It is the geometric mean of the algebra course, met here as a length. Since a length is positive,
      only the positive root is taken.</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">a</th><th class="m">b</th><th class="m">x = ${sr('ab')}</th></tr></thead>
      <tbody>
        <tr><td class="m">4</td><td class="m">9</td><td class="m">6</td></tr>
        <tr><td class="m">2</td><td class="m">8</td><td class="m">4</td></tr>
        <tr><td class="m">3</td><td class="m">12</td><td class="m">6</td></tr>
        <tr><td class="m">5</td><td class="m">20</td><td class="m">10</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The mean proportional always lies between the two</div>
      Because ${m(sr('ab'))} is between ${m('a')} and ${m('b')} whenever they differ — the
      arithmetic–geometric mean inequality of the algebra course, seen as a picture.</div>`
    },
    {
      h: 'The three relations',
      html: `<p>In a right triangle with the right angle at ${m('C')} and altitude ${m('CH')} to the
      hypotenuse ${m('AB')}:</p>
      ${eq(m('CH² = AH · HB') + '     ' + m('AC² = AH · AB') + '     ' + m('BC² = BH · AB'), true)}
      {{fig:rightTriangle:The altitude divides the triangle into two triangles similar to it and to each other.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Segment</th><th>Is the mean proportional between</th></tr></thead>
      <tbody>
        <tr><td>the altitude ${m('CH')}</td><td>the two projections</td></tr>
        <tr><td>the leg ${m('AC')}</td><td>its own projection and the whole hypotenuse</td></tr>
        <tr><td>the leg ${m('BC')}</td><td>its own projection and the whole hypotenuse</td></tr>
      </tbody></table></div>
      <p>All three come from the similarity of the three triangles, and each is one cross-multiplication
      away from a proportion.</p>
      <div class="warn"><span class="wl">Each leg goes with its <i>own</i> projection</span>
      ${m('AC')} with ${m('AH')}, ${m('BC')} with ${m('BH')}. Crossing them gives a plausible number and
      a wrong answer, and it is by far the commonest error of this lesson.</div>`
    },
    {
      h: 'Pythagoras from them',
      html: `<p>Add the two leg relations:</p>
      ${eq(m('AC² + BC² = AH · AB + BH · AB = (AH + BH) · AB = AB · AB = AB²'), true)}
      <p>That is Pythagoras' theorem, in one line, from similar triangles alone — a proof quite different
      from the area proofs of Grade 8.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Also worth knowing</th><th>Statement</th></tr></thead>
      <tbody>
        <tr><td>the altitude</td><td class="m">CH = ${f('AC · BC', 'AB')}</td></tr>
        <tr><td>the area, two ways</td><td class="m">½ · AC · BC = ½ · AB · CH</td></tr>
        <tr><td>the reciprocal relation</td><td class="m">${f('1', 'CH²')} = ${f('1', 'AC²')} + ${f('1', 'BC²')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Two expressions for the same area</div>
      The middle row is where ${m('CH = ' + f('AC · BC', 'AB'))} comes from, and it is often the fastest
      route to the altitude when both legs are known.</div>`
    },
    {
      h: 'Problems',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Find</th><th>Relation</th></tr></thead>
      <tbody>
        <tr><td>projections ${m('9')} and ${m('16')}</td><td class="m">CH</td><td class="m">${sr('144')} = 12</td></tr>
        <tr><td>same</td><td class="m">AC, BC</td><td class="m">${sr('9 · 25')} = 15, ${sr('16 · 25')} = 20</td></tr>
        <tr><td>legs ${m('6')} and ${m('8')}</td><td class="m">CH</td><td class="m">${f('48', '10')} = 4.8</td></tr>
        <tr><td>same</td><td>the projections</td><td class="m">3.6 and 6.4</td></tr>
        <tr><td class="m">AB = 25, AC = 15</td><td class="m">AH</td><td class="m">${f('225', '25')} = 9</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Label the figure before writing any relation</div>
      Mark ${m('A')}, ${m('B')}, ${m('C')}, ${m('H')} and every known length. The three relations are
      unusable on an unlabelled diagram, and readable at a glance on a labelled one.</div>`
    }
  ],
  examples: [
    {
      q: 'The altitude to the hypotenuse divides it into ' + m('9') + ' and ' + m('16') + '. Find the altitude and the two legs.',
      steps: [
        [m('CH² = 9 × 16 = 144 ⇒ CH = 12'), ''],
        [m('AB = 25'), ''],
        [m('AC² = 9 × 25 = 225 ⇒ AC = 15'), ''],
        [m('BC² = 16 × 25 = 400 ⇒ BC = 20'), 'Check: ' + m('15² + 20² = 625') + ' ✓']
      ],
      ans: m('CH = 12, AC = 15, BC = 20')
    },
    {
      q: 'A right triangle has legs ' + m('6') + ' and ' + m('8') + '. Find the altitude to the hypotenuse and the projections.',
      steps: [
        [m('AB = 10'), ''],
        [m('CH = ' + f('6 × 8', '10') + ' = 4.8'), 'Two areas.'],
        [m('AH = ' + f('36', '10') + ' = 3.6'), ''],
        [m('BH = ' + f('64', '10') + ' = 6.4'), 'Check: ' + m('3.6 + 6.4 = 10') + ' ✓']
      ],
      ans: m('CH = 4.8, AH = 3.6, BH = 6.4')
    },
    {
      q: 'Find the mean proportional between ' + m('3') + ' and ' + m('27') + ', and between ' + m('5') + ' and ' + m('20') + '.',
      steps: [
        [m('x = ' + sr('3 × 27') + ' = ' + sr('81')), ''],
        [m('= 9'), ''],
        [m('x = ' + sr('5 × 20') + ' = ' + sr('100')), ''],
        [m('= 10'), '']
      ],
      ans: m('9') + ' and ' + m('10')
    }
  ],
  modelNote: 'Draw the altitude figure once, very large, and label all six lengths; every question in the lesson is then read off that one picture.',
  interactive: {
    type: 'rightTriangle',
    title: 'The altitude figure',
    hint: 'Move the right-angle vertex and watch all three relations hold.'
  },
  quiz: [
    { q: 'The mean proportional between ' + m('a') + ' and ' + m('b') + ':', a: [m(f('a + b', '2')), m(sr('ab')), m('ab'), m('a − b')], c: 1, why: m('x² = ab') + '.' },
    { q: m('CH²') + ' equals:', a: [m('AH · AB'), m('AH · HB'), m('HB · AB'), m('AB²')], c: 1, why: 'The two projections.' },
    { q: m('AC²') + ' equals:', a: [m('AH · HB'), m('AH · AB'), m('HB · AB'), m('CH²')], c: 1, why: 'Its own projection and the hypotenuse.' },
    { q: 'Adding the two leg relations gives:', a: ['the sine rule', 'Pythagoras', 'the area', 'nothing'], c: 1, why: m('(AH + HB) · AB') + '.' },
    { q: 'Legs ' + m('6') + ' and ' + m('8') + ': the altitude is', a: [m('4'), m('4.8'), m('5'), m('7')], c: 1, why: m(f('48', '10')) + '.' },
    { q: 'The mean proportional between ' + m('4') + ' and ' + m('9') + ':', a: [m('6'), m('6.5'), m('13'), m('36')], c: 0, why: m(sr('36')) + '.' }
  ],
  practice: {
    easy: [
      ['Mean proportional of ' + m('4') + ' and ' + m('9'), m('6')],
      ['Mean proportional of ' + m('2') + ' and ' + m('8'), m('4')],
      ['Mean proportional of ' + m('5') + ' and ' + m('20'), m('10')],
      ['Projections ' + m('9') + ' and ' + m('16') + ': the altitude', m('12')],
      ['Same: the hypotenuse', m('25')],
      ['Same: the legs', m('15') + ' and ' + m('20')],
      ['Legs ' + m('6') + ' and ' + m('8') + ': the altitude', m('4.8')]
    ],
    med: [
      ['Legs ' + m('6') + ' and ' + m('8') + ': the projections', m('3.6') + ' and ' + m('6.4')],
      ['Legs ' + m('5') + ' and ' + m('12') + ': the altitude', m(f('60', '13'))],
      [m('AB = 25, AC = 15') + ': ' + m('AH'), m('9')],
      [m('AB = 25, AC = 15') + ': ' + m('CH'), m('12')],
      ['Projections ' + m('4') + ' and ' + m('12') + ': the altitude', m('4' + sr('3'))],
      ['Altitude ' + m('6') + ', one projection ' + m('4') + ': the other', m('9')],
      ['Same: the hypotenuse', m('13')]
    ],
    hard: [
      ['A right triangle with hypotenuse ' + m('20') + ' and altitude ' + m('8') + ': the projections', m('4') + ' and ' + m('16')],
      ['Legs ' + m('a') + ' and ' + m('b') + ': the altitude', m(f('ab', sr('a² + b²')))],
      ['Prove ' + m(f('1', 'CH²') + ' = ' + f('1', 'AC²') + ' + ' + f('1', 'BC²')), 'Substitute ' + m('CH = ' + f('ab', 'c'))],
      ['A right triangle whose altitude divides the hypotenuse in ' + m('1 : 4') + ': the ratio of the legs', m('1 : 2')],
      ['A right triangle with projections in ratio ' + m('9 : 16') + ': the ratio of the legs', m('3 : 4')],
      ['The altitude of a right triangle with hypotenuse ' + m('c') + ' equals ' + m(f('c', '2')) + ' when', 'The triangle is isosceles'],
      ['A right triangle with altitude ' + m('13') + ' and hypotenuse ' + m('25') + ': possible?', 'No — the maximum altitude is ' + m('12.5')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Pair each leg with its own projection; write the pairing down before substituting.',
  homework: [
    'The altitude to the hypotenuse divides it into ' + m('4') + ' and ' + m('21') + '. Find the altitude and the legs.',
    'A right triangle has legs ' + m('9') + ' and ' + m('12') + '. Find the altitude and the projections.',
    'Find the mean proportional between ' + m('8') + ' and ' + m('18') + '.',
    'A right triangle has hypotenuse ' + m('26') + ' and one leg ' + m('10') + '. Find that leg’s projection.',
    'Derive Pythagoras’ theorem from the two leg relations.'
  ]
});

/* ============================== 40 ============================== */
G9_GEO.push({
  id: 'g9-40', stream: 'geo', grade: 9, quarter: 4, lessons: '59–60', hours: 2,
  title: 'Constructing the mean proportional of two segments',
  subtitle: 'Compasses and a straight edge produce √ab exactly — no measuring, no decimals.',
  uz: 'Geometriya 9, §33', uzPage: 'pp. 204–209',
  cam: 'IGX 3.6', camPage: 'Core & Extended, pp. 70–75', wb: 'Exercise 3.6',
  objectives: [
    'Carry out the semicircle construction for the mean proportional.',
    'Justify it with the altitude relation.',
    'Construct √a for a given segment a, and hence √2, √3, √5.',
    'Use the construction to build a square equal in area to a given rectangle.'
  ],
  terms: [
    ['Construction', 'Yasash', 'Построение'],
    ['Compasses', 'Sirkul', 'Циркуль'],
    ['Straight edge', 'Chizg‘ich', 'Линейка'],
    ['Semicircle', 'Yarim aylana', 'Полуокружность'],
    ['Perpendicular', 'Perpendikulyar', 'Перпендикуляр'],
    ['Justification', 'Asoslash', 'Обоснование'],
    ['Unit segment', 'Birlik kesma', 'Единичный отрезок'],
    ['Quadrature', 'Kvadratura', 'Квадратура']
  ],
  timing: [[15, 'The construction'], [25, 'Why it works'], [25, 'Constructing surds'], [20, 'Squaring a rectangle'], [5, 'Homework']],
  sections: [
    {
      h: 'The construction',
      html: `<p><b>Problem.</b> Given segments of lengths ${m('a')} and ${m('b')}, construct a segment of
      length ${m(sr('ab'))}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>What to do</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>on a line, mark ${m('AH = a')} and then ${m('HB = b')}, in that order</td></tr>
        <tr><td>2</td><td>find the midpoint of ${m('AB')} with the perpendicular-bisector construction</td></tr>
        <tr><td>3</td><td>draw the semicircle on ${m('AB')} as diameter</td></tr>
        <tr><td>4</td><td>erect the perpendicular to ${m('AB')} at ${m('H')}</td></tr>
        <tr><td>5</td><td>it meets the semicircle at ${m('C')}; then ${m('CH = ' + sr('ab'))}</td></tr>
      </tbody></table></div>
      {{fig:semicircleAngle:Any point on a semicircle sees the diameter at a right angle.}}
      <div class="keybox"><div class="klabel">The whole construction is Thales’ semicircle theorem</div>
      Because ${m('C')} lies on the semicircle, ${m('∠ACB = 90°')}. So ${m('CH')} is the altitude of a
      right triangle to its hypotenuse, and the relation of the last lesson applies.</div>`
    },
    {
      h: 'Why it works',
      html: `<p>In the figure, ${m('△ACB')} is right-angled at ${m('C')} and ${m('CH ⊥ AB')}. Therefore</p>
      ${eq(m('CH² = AH · HB = ab') + '   so   ' + m('CH = ' + sr('ab')), true)}
      <p>The construction is exact — not an approximation. That is the point of a straight-edge and
      compasses construction: it produces the number itself, however irrational.</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">a</th><th class="m">b</th><th class="m">CH</th></tr></thead>
      <tbody>
        <tr><td class="m">1</td><td class="m">2</td><td class="m">${sr('2')}</td></tr>
        <tr><td class="m">1</td><td class="m">3</td><td class="m">${sr('3')}</td></tr>
        <tr><td class="m">1</td><td class="m">5</td><td class="m">${sr('5')}</td></tr>
        <tr><td class="m">2</td><td class="m">8</td><td class="m">4</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('a')} and ${m('b')} must be laid end to end</span>
      ${m('AH = a')} and ${m('HB = b')} along the <b>same</b> line, so that ${m('AB = a + b')} is the
      diameter. Marking them from the same end gives the wrong figure entirely.</div>`
    },
    {
      h: 'Constructing surds',
      html: `<p>Taking ${m('a = 1')} makes ${m('CH = ' + sr('b'))}. So from a unit segment and a segment
      of length ${m('b')}, the construction produces ${m(sr('b'))} exactly.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>To construct</th><th>Take</th></tr></thead>
      <tbody>
        <tr><td class="m">${sr('2')}</td><td class="m">a = 1, b = 2</td></tr>
        <tr><td class="m">${sr('3')}</td><td class="m">a = 1, b = 3</td></tr>
        <tr><td class="m">${sr('6')}</td><td class="m">a = 2, b = 3</td></tr>
        <tr><td class="m">${sr('10')}</td><td class="m">a = 2, b = 5</td></tr>
      </tbody></table></div>
      <p>There is a second route for ${m(sr('2'))}: the diagonal of a unit square. For ${m(sr('3'))}: the
      diagonal of a unit cube, or the height of an equilateral triangle of side ${m('2')}. The
      semicircle construction is the one that works for every ${m('b')}.</p>
      <div class="keybox"><div class="klabel">Not every number can be constructed</div>
      Square roots can; ${m(rt('3', '2'))} cannot, and neither can ${m('π')}. Proving that took until the
      nineteenth century, and it is why “squaring the circle” is impossible — a phrase that entered
      ordinary language from this very construction.</div>`
    },
    {
      h: 'Squaring a rectangle',
      html: `<p><b>Problem.</b> Construct a square with the same area as a given rectangle ${m('a × b')}.</p>
      <p>The square must have side ${m('x')} with ${m('x² = ab')} — that is, ${m('x = ' + sr('ab'))}, which
      is exactly what the construction produces.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Rectangle</th><th>Equal square</th></tr></thead>
      <tbody>
        <tr><td class="m">4 × 9</td><td>side ${m('6')}</td></tr>
        <tr><td class="m">2 × 8</td><td>side ${m('4')}</td></tr>
        <tr><td class="m">3 × 5</td><td>side ${m(sr('15'))}</td></tr>
        <tr><td class="m">a × b</td><td>side ${m(sr('ab'))}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">This is what “quadrature” meant to the Greeks</div>
      To find the area of a figure was to construct a square equal to it. Rectangles, triangles and
      polygons can all be squared; the circle cannot, and that question stayed open for two thousand
      years.</div>`
    }
  ],
  examples: [
    {
      q: 'Describe the construction of ' + m(sr('12')) + ' from a unit segment.',
      steps: [
        ['Take ' + m('a = 1') + ' and ' + m('b = 12') + ' end to end.', 'Or ' + m('a = 3, b = 4') + '.'],
        ['Draw the semicircle on the total, ' + m('13') + ', as diameter.', ''],
        ['Erect the perpendicular at the join.', ''],
        ['Its length to the semicircle is ' + m(sr('12') + ' = 2' + sr('3')) + '.', '']
      ],
      ans: m(sr('12') + ' = 2' + sr('3'))
    },
    {
      q: 'A rectangle is ' + m('3 cm') + ' by ' + m('12 cm') + '. Find the side of the square of equal area.',
      steps: [
        [m('x² = 3 × 12'), ''],
        [m('= 36'), ''],
        [m('x = 6'), ''],
        ['Check: ' + m('6² = 36 = 3 × 12') + ' ✓', '']
      ],
      ans: m('6 cm')
    },
    {
      q: 'The perpendicular at ' + m('H') + ' meets the semicircle at height ' + m('CH = 8') + ', and ' + m('AH = 4') + '. Find ' + m('HB') + ' and the diameter.',
      steps: [
        [m('CH² = AH · HB'), ''],
        [m('64 = 4 · HB'), ''],
        [m('HB = 16'), ''],
        [m('AB = 4 + 16 = 20'), '']
      ],
      ans: m('HB = 16, AB = 20')
    }
  ],
  modelNote: 'Do the construction on the board with real compasses for a = 1 cm and b = 3 cm, then measure CH; it comes out at 1.7 cm, and √3 = 1.732.',
  interactive: {
    type: 'rightTriangle',
    title: 'The semicircle construction',
    hint: 'Slide H and watch CH follow √(AH · HB).'
  },
  quiz: [
    { q: 'The construction rests on:', a: ['the sine rule', 'Thales’ semicircle theorem', 'Pythagoras only', 'the bisector theorem'], c: 1, why: m('∠ACB = 90°') + '.' },
    { q: m('CH') + ' equals:', a: [m('a + b'), m(sr('ab')), m(f('a + b', '2')), m('ab')], c: 1, why: 'The altitude relation.' },
    { q: m('a') + ' and ' + m('b') + ' are laid:', a: ['from the same end', 'end to end', 'perpendicular', 'anywhere'], c: 1, why: 'Their sum is the diameter.' },
    { q: 'To construct ' + m(sr('5')) + ' take:', a: [m('a = 1, b = 5'), m('a = 5, b = 5'), m('a = 2, b = 3'), m('a = 1, b = 25')], c: 0, why: m(sr('1 × 5')) + '.' },
    { q: 'A square equal to a ' + m('3 × 12') + ' rectangle has side:', a: [m('6'), m('7.5'), m('15'), m('36')], c: 0, why: m(sr('36')) + '.' },
    { q: 'Which cannot be constructed?', a: [m(sr('2')), m(sr('7')), m('π'), m(sr('15'))], c: 2, why: 'Proved impossible in 1882.' }
  ],
  practice: {
    easy: [
      ['Mean proportional of ' + m('1') + ' and ' + m('4'), m('2')],
      ['Mean proportional of ' + m('1') + ' and ' + m('9'), m('3')],
      ['To construct ' + m(sr('2')) + ' take', m('a = 1, b = 2')],
      ['To construct ' + m(sr('3')) + ' take', m('a = 1, b = 3')],
      ['Square equal to a ' + m('4 × 9') + ' rectangle', 'Side ' + m('6')],
      ['Square equal to a ' + m('2 × 8') + ' rectangle', 'Side ' + m('4')],
      [m('CH²') + ' equals', m('AH · HB')]
    ],
    med: [
      ['Square equal to a ' + m('3 × 12') + ' rectangle', 'Side ' + m('6')],
      ['Square equal to a ' + m('3 × 5') + ' rectangle', 'Side ' + m(sr('15'))],
      [m('CH = 8, AH = 4') + ': ' + m('HB'), m('16')],
      ['Same: the diameter', m('20')],
      ['To construct ' + m(sr('6')) + ' take', m('a = 2, b = 3')],
      ['To construct ' + m(sr('10')) + ' take', m('a = 2, b = 5')],
      [m('AH = 2, HB = 18') + ': ' + m('CH'), m('6')]
    ],
    hard: [
      ['Construct ' + m(sr('12')) + ': one choice of ' + m('a, b'), m('3') + ' and ' + m('4')],
      ['A rectangle of perimeter ' + m('26') + ' and area ' + m('36') + ': the equal square’s side', m('6')],
      ['The greatest ' + m('CH') + ' for a fixed ' + m('AB = c'), m(f('c', '2')) + ', when ' + m('H') + ' is the midpoint'],
      ['Which is larger, ' + m(f('a + b', '2')) + ' or ' + m(sr('ab')) + '?', 'The arithmetic mean, unless ' + m('a = b')],
      ['Interpret that inequality in the semicircle', 'The radius is at least the altitude'],
      ['Construct a square equal to a triangle of base ' + m('8') + ' and height ' + m('6'), 'Side ' + m(sr('24') + ' = 2' + sr('6'))],
      ['Why can a circle not be squared?', m('π') + ' is not constructible']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Describe every construction as numbered steps, and justify it in one sentence.',
  homework: [
    'Describe the construction of the mean proportional between ' + m('2 cm') + ' and ' + m('8 cm') + '.',
    'Find the side of the square equal in area to a ' + m('5 × 20') + ' rectangle.',
    'Describe how to construct ' + m(sr('7')) + ' from a unit segment.',
    'In the semicircle figure, ' + m('AH = 3') + ' and ' + m('CH = 6') + '. Find ' + m('HB') + ' and the diameter.',
    'Explain why the greatest possible altitude in the figure is half the diameter.'
  ]
});

/* ============================== 41 ============================== */
G9_GEO.push({
  id: 'g9-41', stream: 'geo', grade: 9, quarter: 4, lessons: '61–62', hours: 2,
  title: 'Proportional segments in a circle',
  subtitle: 'Chords, secants and a tangent — three theorems that are one theorem.',
  uz: 'Geometriya 9, §34', uzPage: 'pp. 210–216',
  cam: 'IGX 3.5', camPage: 'Core & Extended, pp. 63–70', wb: 'Exercise 3.5',
  objectives: [
    'State and prove the intersecting-chords theorem.',
    'State and use the secant–secant and tangent–secant theorems.',
    'Recognise that all three are the power of a point.',
    'Solve numerical problems on each configuration.'
  ],
  terms: [
    ['Chord', 'Vatar', 'Хорда'],
    ['Secant', 'Kesuvchi', 'Секущая'],
    ['Tangent', 'Urinma', 'Касательная'],
    ['Intersecting chords', 'Kesishuvchi vatarlar', 'Пересекающиеся хорды'],
    ['External point', 'Tashqi nuqta', 'Внешняя точка'],
    ['Power of a point', 'Nuqtaning darajasi', 'Степень точки'],
    ['Product of segments', 'Kesmalar ko‘paytmasi', 'Произведение отрезков'],
    ['Tangent–secant', 'Urinma-kesuvchi', 'Касательная–секущая']
  ],
  timing: [[15, 'Two chords inside'], [25, 'Two secants outside'], [25, 'A tangent and a secant'], [20, 'One theorem'], [5, 'Homework']],
  sections: [
    {
      h: 'Two chords inside',
      html: `${eq('If two chords meet inside a circle, the products of the two parts of each are equal', true)}
      ${eq(m('PA · PB = PC · PD'), true)}
      {{fig:chordProperty:Two chords crossing at P — the two products are equal.}}
      <p><b>Proof.</b> Join ${m('A')} to ${m('C')} and ${m('D')} to ${m('B')}. Then
      ${m('∠APC = ∠DPB')} (vertical) and ${m('∠CAP = ∠BDP')} (angles on the arc ${m('CB')}), so
      ${m('△APC ∼ △DPB')}. Hence ${m(f('PA', 'PD') + ' = ' + f('PC', 'PB'))}, and cross-multiplying gives
      the result.</p>
      <div class="keybox"><div class="klabel">The proof is the whole chapter in miniature</div>
      Two equal angles, a similarity, a proportion, a cross-multiplication. Every theorem in this section
      follows the same four steps with a different pair of triangles.</div>`
    },
    {
      h: 'Two secants outside',
      html: `<p>From a point ${m('P')} outside the circle, draw two secants meeting it at ${m('A, B')} and
      ${m('C, D')} (with ${m('A')} and ${m('C')} nearer to ${m('P')}). Then</p>
      ${eq(m('PA · PB = PC · PD'), true)}
      {{fig:secantToTangent:Two secants from an external point — again the products agree.}}
      <p>The proof is the same: ${m('∠P')} is common and ${m('∠PAC = ∠PDB')} because ${m('ABDC')} is
      cyclic, so ${m('△PAC ∼ △PDB')}.</p>
      <div class="warn"><span class="wl">The products use the <i>whole</i> secant, not the far part</span>
      ${m('PB')} runs from ${m('P')} all the way to the far intersection, not from ${m('A')} to
      ${m('B')}. Using ${m('AB')} in place of ${m('PB')} is the standard error, and it gives an answer
      that looks reasonable.</div>`
    },
    {
      h: 'A tangent and a secant',
      html: `<p>If ${m('PT')} is a tangent and ${m('PAB')} a secant from the same external point,</p>
      ${eq(m('PT² = PA · PB'), true)}
      <p>so the tangent length is the mean proportional between the two parts of the secant — the
      construction of the last lesson, appearing in a circle.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Find</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td class="m">PA = 4, PB = 9</td><td class="m">PT</td><td class="m">${sr('36')} = 6</td></tr>
        <tr><td class="m">PT = 8, PA = 4</td><td class="m">PB</td><td class="m">16</td></tr>
        <tr><td class="m">PT = 12, PB = 18</td><td class="m">PA</td><td class="m">8</td></tr>
        <tr><td class="m">PA = 5, AB = 11</td><td class="m">PT</td><td class="m">${sr('80')} = 4${sr('5')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A tangent is the limiting case of a secant</div>
      Rotate a secant until its two intersections merge into one: then ${m('PA')} and ${m('PB')} both
      become ${m('PT')}, and ${m('PA · PB')} becomes ${m('PT²')}. The third theorem is the second one at
      its limit.</div>`
    },
    {
      h: 'One theorem',
      html: `<p>Define the <b>power</b> of a point ${m('P')} with respect to a circle of centre ${m('O')}
      and radius ${m('R')} as</p>
      ${eq(m('k = OP² − R²'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Position of ${m('P')}</th><th class="m">k</th><th>Equals</th></tr></thead>
      <tbody>
        <tr><td>outside</td><td class="m">> 0</td><td class="m">PA · PB = PT²</td></tr>
        <tr><td>on the circle</td><td class="m">0</td><td class="m">0</td></tr>
        <tr><td>inside</td><td class="m">< 0</td><td class="m">−PA · PB</td></tr>
      </tbody></table></div>
      <p>So all three theorems say the same thing: the product ${m('PA · PB')} depends only on ${m('P')}
      and the circle, not on which line through ${m('P')} is drawn.</p>
      <div class="keybox"><div class="klabel">Three theorems, one idea, one thing to remember</div>
      Draw any line through ${m('P')}; multiply the two distances to the circle. The answer is always the
      same. That sentence replaces all three statements.</div>`
    }
  ],
  examples: [
    {
      q: 'Two chords meet at ' + m('P') + ' with ' + m('PA = 4') + ', ' + m('PB = 9') + ', ' + m('PC = 6') + '. Find ' + m('PD') + '.',
      steps: [
        [m('PA · PB = PC · PD'), ''],
        [m('4 × 9 = 6 × PD'), ''],
        [m('36 = 6 PD'), ''],
        [m('PD = 6'), '']
      ],
      ans: m('PD = 6')
    },
    {
      q: 'From ' + m('P') + ', a tangent ' + m('PT') + ' and a secant meeting the circle at ' + m('A') + ' and ' + m('B') + ' with ' + m('PA = 4') + ' and ' + m('AB = 5') + '. Find ' + m('PT') + '.',
      steps: [
        [m('PB = PA + AB = 9'), 'The whole secant.'],
        [m('PT² = PA · PB = 4 × 9'), ''],
        [m('= 36'), ''],
        [m('PT = 6'), '']
      ],
      ans: m('PT = 6')
    },
    {
      q: 'From an external point, two secants give ' + m('PA = 5') + ', ' + m('PB = 12') + ' and ' + m('PC = 4') + '. Find ' + m('PD') + '.',
      steps: [
        [m('PA · PB = PC · PD'), ''],
        [m('5 × 12 = 4 × PD'), ''],
        [m('60 = 4 PD'), ''],
        [m('PD = 15'), '']
      ],
      ans: m('PD = 15')
    }
  ],
  modelNote: 'Draw one circle and three lines through a single external point; measuring the products with a ruler gives the same answer each time, and the theorem is discovered rather than told.',
  interactive: {
    type: 'circleAngles',
    title: 'The power of a point',
    hint: 'Rotate the line through P and watch the product hold.'
  },
  quiz: [
    { q: 'Two chords meeting inside give:', a: [m('PA + PB = PC + PD'), m('PA · PB = PC · PD'), m('PA = PC'), 'nothing'], c: 1, why: 'Equal products.' },
    { q: 'For two secants, ' + m('PB') + ' means:', a: [m('AB'), 'the whole secant from ' + m('P'), 'half the secant', 'the tangent'], c: 1, why: 'From ' + m('P') + ' to the far point.' },
    { q: 'The tangent–secant theorem:', a: [m('PT = PA · PB'), m('PT² = PA · PB'), m('PT = PA + PB'), m('PT² = PA + PB')], c: 1, why: 'A mean proportional.' },
    { q: m('PA = 4, PB = 9') + ': ' + m('PT') + ' =', a: [m('6'), m('13'), m('36'), m('18')], c: 0, why: m(sr('36')) + '.' },
    { q: 'The power of a point on the circle is:', a: [m('R'), m('0'), m('R²'), 'undefined'], c: 1, why: m('OP = R') + '.' },
    { q: 'A tangent is the limiting case of:', a: ['a chord', 'a secant', 'a radius', 'a diameter'], c: 1, why: 'Its two intersections merge.' }
  ],
  practice: {
    easy: [
      ['Chords: ' + m('PA = 4, PB = 9, PC = 6') + ': ' + m('PD'), m('6')],
      ['Chords: ' + m('PA = 3, PB = 8, PC = 4') + ': ' + m('PD'), m('6')],
      ['Tangent: ' + m('PA = 4, PB = 9') + ': ' + m('PT'), m('6')],
      ['Tangent: ' + m('PA = 2, PB = 8') + ': ' + m('PT'), m('4')],
      ['Secants: ' + m('PA = 5, PB = 12, PC = 4') + ': ' + m('PD'), m('15')],
      ['Power of a point on the circle', m('0')],
      [m('PT² ') + ' equals', m('PA · PB')]
    ],
    med: [
      ['Tangent with ' + m('PA = 4, AB = 5') + ': ' + m('PT'), m('6')],
      ['Tangent with ' + m('PT = 8, PA = 4') + ': ' + m('PB'), m('16')],
      ['Same: ' + m('AB'), m('12')],
      ['Tangent with ' + m('PT = 12, PB = 18') + ': ' + m('PA'), m('8')],
      ['Chords: ' + m('PA = 6, PB = 4') + ' and ' + m('PC = PD') + ': ' + m('PC'), m('2' + sr('6'))],
      ['Secants: ' + m('PA = 3, AB = 9, PC = 4') + ': ' + m('PD'), m('9')],
      ['Tangent with ' + m('PA = 5, AB = 11') + ': ' + m('PT'), m('4' + sr('5'))]
    ],
    hard: [
      ['A chord of length ' + m('10') + ' meets another at ' + m('4') + ' from one end; the second is cut into ' + m('3') + ' and ' + m('x'), m('x = 8')],
      ['Two chords of a circle meet at the centre: the products', 'Both equal ' + m('R²')],
      [m('OP = 13, R = 5') + ': the tangent length from ' + m('P'), m('12')],
      [m('OP = 13, R = 5') + ': the power of ' + m('P'), m('144')],
      ['A point ' + m('3') + ' from the centre of a circle of radius ' + m('5') + ': ' + m('PA · PB'), m('16')],
      ['Two circles meet at ' + m('A') + ' and ' + m('B') + '; ' + m('P') + ' on line ' + m('AB') + ' outside both', 'Equal tangent lengths to both'],
      ['A tangent of length ' + m('15') + ' and a secant with ' + m('AB = 16') + ': ' + m('PA'), m('9')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'For a secant, mark ' + m('PA') + ' and ' + m('PB') + ' from ' + m('P') + ' on the figure before writing anything.',
  homework: [
    'Two chords meet at ' + m('P') + ' with ' + m('PA = 6') + ', ' + m('PB = 8') + ', ' + m('PC = 4') + '. Find ' + m('PD') + '.',
    'A tangent and a secant from ' + m('P') + ' give ' + m('PA = 3') + ' and ' + m('AB = 9') + '. Find ' + m('PT') + '.',
    'Two secants give ' + m('PA = 4') + ', ' + m('PB = 15') + ' and ' + m('PC = 5') + '. Find ' + m('PD') + '.',
    'A point is ' + m('10') + ' from the centre of a circle of radius ' + m('6') + '. Find the tangent length from it.',
    'Prove the intersecting-chords theorem.'
  ]
});

/* ============================== 42 ============================== */
G9_GEO.push({
  id: 'g9-42', stream: 'geo', grade: 9, quarter: 4, lessons: '63–64', hours: 2,
  title: 'Practical exercises — constructions, scale drawing and similarity in use',
  subtitle: 'Compasses, a scale and a measured field — geometry taken outside the exercise book.',
  uz: 'Geometriya 9, IV bob amaliy mashqlari', uzPage: 'pp. 217–220',
  cam: 'IGX 3.6', camPage: 'Core & Extended, pp. 70–78', wb: 'Exercise 3.6',
  objectives: [
    'Carry out the standard straight-edge and compasses constructions.',
    'Make and read a scale drawing, converting both ways.',
    'Use similar triangles to measure an inaccessible height or width.',
    'Construct a locus described in words.'
  ],
  terms: [
    ['Scale drawing', 'Masshtabli chizma', 'Масштабный чертёж'],
    ['Scale', 'Masshtab', 'Масштаб'],
    ['Locus', 'Geometrik o‘rin', 'Геометрическое место точек'],
    ['Equidistant', 'Teng uzoqlikda', 'Равноудалённый'],
    ['Bisector', 'Bissektrisa', 'Биссектриса'],
    ['Perpendicular from a point', 'Nuqtadan perpendikulyar', 'Перпендикуляр из точки'],
    ['Inaccessible', 'Yetib bo‘lmaydigan', 'Недоступный'],
    ['Plan', 'Reja', 'План']
  ],
  timing: [[15, 'The four constructions'], [25, 'Scale drawing'], [25, 'Measuring the unreachable'], [20, 'Loci'], [5, 'Homework']],
  sections: [
    {
      h: 'The four constructions',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Construction</th><th>Method</th><th>Result</th></tr></thead>
      <tbody>
        <tr><td>perpendicular bisector of ${m('AB')}</td><td>arcs of equal radius from ${m('A')} and ${m('B')}</td><td>the set of points equidistant from ${m('A')} and ${m('B')}</td></tr>
        <tr><td>bisector of an angle</td><td>arc across both arms, then two equal arcs</td><td>the set of points equidistant from the arms</td></tr>
        <tr><td>perpendicular from a point to a line</td><td>an arc cutting the line twice, then a bisector</td><td>the shortest distance</td></tr>
        <tr><td>an angle of ${m('60°')}</td><td>one arc, one equal step</td><td>an equilateral triangle</td></tr>
      </tbody></table></div>
      {{fig:bisectorConstruction:The angle bisector — one arc across both arms, then two equal arcs.}}
      <div class="warn"><span class="wl">Leave the construction arcs on the page</span>
      Cambridge and the national papers both award marks for visible arcs. A perfect line with the
      working rubbed out scores less than a slightly wobbly one with the arcs showing.</div>`
    },
    {
      h: 'Scale drawing',
      html: `<p>A scale of ${m('1 : n')} means every length on the drawing represents ${m('n')} times as
      much in reality.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Scale</th><th>${m('1 cm')} represents</th><th>${m('1 cm²')} represents</th></tr></thead>
      <tbody>
        <tr><td class="m">1 : 100</td><td class="m">1 m</td><td class="m">1 m²</td></tr>
        <tr><td class="m">1 : 1000</td><td class="m">10 m</td><td class="m">100 m²</td></tr>
        <tr><td class="m">1 : 25 000</td><td class="m">250 m</td><td class="m">62 500 m²</td></tr>
        <tr><td class="m">1 : 50 000</td><td class="m">500 m</td><td class="m">250 000 m²</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Areas scale by ${m('n²')}, not ${m('n')}</span>
      On a ${m('1 : 1000')} plan, ${m('1 cm²')} is ${m('100 m²')} — because both dimensions are
      multiplied by ${m('1000')}. This is the ${m('k²')} rule of Chapter I, in its most practical
      form.</div>`
    },
    {
      h: 'Measuring the unreachable',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>To measure</th><th>Method</th></tr></thead>
      <tbody>
        <tr><td>the height of a tree</td><td>compare its shadow with a metre rule’s shadow</td></tr>
        <tr><td>the height of a building</td><td>a mirror on the ground, similar triangles</td></tr>
        <tr><td>the width of a river</td><td>a baseline on one bank and two measured angles</td></tr>
        <tr><td>a distance across a lake</td><td>a triangle with two measured sides and the included angle</td></tr>
      </tbody></table></div>
      <p><b>The mirror method.</b> Place a mirror on the ground between you and the building. Step back
      until you see the top in it. Then</p>
      ${eq(m(f('your height', 'your distance to the mirror') + ' = ' + f('the building’s height', 'its distance to the mirror')), true)}
      <p>because the angle of incidence equals the angle of reflection, making the two triangles
      similar.</p>
      <div class="keybox"><div class="klabel">Every method here is two similar triangles</div>
      A shadow, a mirror, a sighting stick: in each case one triangle is small enough to measure and one
      is not, and they are similar. Chapter I, used outdoors.</div>`
    },
    {
      h: 'Loci',
      html: `<p>A <b>locus</b> is the set of all points satisfying a condition.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Condition</th><th>Locus</th></tr></thead>
      <tbody>
        <tr><td>at a fixed distance ${m('r')} from a point</td><td>a circle of radius ${m('r')}</td></tr>
        <tr><td>equidistant from two points</td><td>the perpendicular bisector of the segment</td></tr>
        <tr><td>equidistant from two intersecting lines</td><td>the pair of angle bisectors</td></tr>
        <tr><td>at a fixed distance from a line</td><td>two parallels</td></tr>
        <tr><td>seeing a segment at ${m('90°')}</td><td>the circle on it as diameter</td></tr>
      </tbody></table></div>
      <p>A question asking for a region — “nearer to ${m('A')} than to ${m('B')} <b>and</b> within
      ${m('5 cm')} of ${m('C')}” — is answered by drawing both loci and shading the overlap.</p>
      <div class="keybox"><div class="klabel">Draw each condition separately, then intersect</div>
      Exactly the method used for systems of inequalities in the algebra course. Two conditions, two
      constructions, one shaded region.</div>`
    }
  ],
  examples: [
    {
      q: 'A plan has scale ' + m('1 : 200') + '. A room measures ' + m('4 cm') + ' by ' + m('3 cm') + ' on the plan. Find its real dimensions and area.',
      steps: [
        [m('4 cm × 200 = 800 cm = 8 m'), ''],
        [m('3 cm × 200 = 600 cm = 6 m'), ''],
        ['Real area ' + m('= 48 m²') + '.', ''],
        ['Check: ' + m('12 cm² × 200² = 480 000 cm² = 48 m²') + ' ✓', '']
      ],
      ans: m('8 m × 6 m = 48 m²')
    },
    {
      q: 'A ' + m('1.6 m') + ' student stands ' + m('2 m') + ' from a mirror and sees the top of a building ' + m('15 m') + ' beyond it. Find the building’s height.',
      steps: [
        [m(f('1.6', '2') + ' = ' + f('h', '15')), 'Similar triangles.'],
        [m('2h = 24'), ''],
        [m('h = 12 m'), ''],
        ['The mirror method needs no instruments beyond a tape.', '']
      ],
      ans: m('12 m')
    },
    {
      q: 'Describe the locus of points equidistant from two intersecting lines.',
      steps: [
        ['A point equidistant from two lines lies on a bisector of the angle between them.', ''],
        ['Two lines make two pairs of vertical angles.', ''],
        ['So there are two bisectors.', ''],
        ['The locus is the pair of angle bisectors — two perpendicular lines.', '']
      ],
      ans: 'The two angle bisectors'
    }
  ],
  modelNote: 'Take the class outside with a tape and a mirror and measure the school building; the answer agrees with the plan on the wall, and the method is believed.',
  interactive: {
    type: 'transform',
    title: 'Scale and construction',
    hint: 'Change the scale and watch the real dimensions follow.'
  },
  quiz: [
    { q: 'The locus of points equidistant from two points:', a: ['a circle', 'the perpendicular bisector', 'two parallels', 'an angle bisector'], c: 1, why: 'Every point on it is equidistant.' },
    { q: 'The locus at a fixed distance from a line:', a: ['a circle', 'one parallel', 'two parallels', 'a bisector'], c: 2, why: 'One on each side.' },
    { q: 'On a ' + m('1 : 1000') + ' plan, ' + m('1 cm²') + ' is:', a: [m('10 m²'), m('100 m²'), m('1000 m²'), m('1 m²')], c: 1, why: 'Areas scale by ' + m('n²') + '.' },
    { q: 'Construction arcs should be:', a: ['rubbed out', 'left visible', 'drawn in pen', 'omitted'], c: 1, why: 'They carry marks.' },
    { q: 'The mirror method uses:', a: ['Pythagoras', 'similar triangles', 'the cosine rule', 'a protractor'], c: 1, why: 'Incidence equals reflection.' },
    { q: 'The locus of points seeing a segment at ' + m('90°') + ':', a: ['a line', 'the circle on it as diameter', 'two parallels', 'a bisector'], c: 1, why: 'Thales’ theorem.' }
  ],
  practice: {
    easy: [
      ['Locus at distance ' + m('r') + ' from a point', 'A circle'],
      ['Locus equidistant from two points', 'The perpendicular bisector'],
      ['Locus at distance ' + m('d') + ' from a line', 'Two parallels'],
      [m('1 : 100') + ': ' + m('1 cm') + ' represents', m('1 m')],
      [m('1 : 1000') + ': ' + m('1 cm') + ' represents', m('10 m')],
      [m('1 : 1000') + ': ' + m('1 cm²') + ' represents', m('100 m²')],
      ['Construction arcs should be', 'Left visible']
    ],
    med: [
      [m('1 : 200') + ' plan, room ' + m('4 × 3 cm') + ': real size', m('8 m × 6 m')],
      ['Same: real area', m('48 m²')],
      ['Mirror: ' + m('1.6 m') + ' at ' + m('2 m') + ', building at ' + m('15 m'), m('12 m')],
      ['Shadow: ' + m('1 m') + ' rule casts ' + m('1.5 m') + ', tree casts ' + m('18 m'), m('12 m')],
      [m('1 : 25 000') + ': ' + m('6 cm') + ' on the map', m('1.5 km')],
      ['Locus equidistant from two intersecting lines', 'The two angle bisectors'],
      ['Locus seeing ' + m('AB') + ' at ' + m('90°'), 'The circle on ' + m('AB')]
    ],
    hard: [
      ['Points nearer to ' + m('A') + ' than ' + m('B') + ' and within ' + m('5 cm') + ' of ' + m('C'), 'A region — half-plane ∩ disc'],
      [m('1 : 50 000') + ': a lake of ' + m('4 cm²') + ' on the map', m('1 km²')],
      ['A plan at ' + m('1 : 250') + ': a garden of ' + m('600 m²'), m('96 cm²') + ' on the plan'],
      ['Describe the locus of the centre of a circle of radius ' + m('2') + ' rolling along a line', 'A parallel at distance ' + m('2')],
      ['Describe the locus of points ' + m('3 cm') + ' from a circle of radius ' + m('5 cm'), 'Two concentric circles, radii ' + m('2') + ' and ' + m('8')],
      ['A field is surveyed as a triangle ' + m('80, 100, 120 m') + ': its area', m('≈ 3968 m²')],
      ['Its area on a ' + m('1 : 2000') + ' plan', m('≈ 9.9 cm²')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Leave every construction arc visible, and state the scale on every drawing.',
  homework: [
    'Construct the perpendicular bisector of a ' + m('7 cm') + ' segment, leaving all arcs.',
    'Construct the bisector of a ' + m('70°') + ' angle.',
    'A plan has scale ' + m('1 : 500') + '. A field is ' + m('6 cm') + ' by ' + m('4 cm') + ' on the plan. Find its real area.',
    'A ' + m('1.7 m') + ' person stands ' + m('2.5 m') + ' from a mirror and sees the top of a mast ' + m('20 m') + ' beyond it. Find the mast’s height.',
    'Describe and draw the locus of points equidistant from two parallel lines ' + m('6 cm') + ' apart.'
  ]
});

/* ============================== 43 ============================== */
G9_GEO.push({
  id: 'g9-43', stream: 'geo', grade: 9, quarter: 4, lessons: '65', hours: 1,
  title: 'Control work 4 — proportional segments',
  subtitle: 'Thales, the bisector, the altitude figure and the circle, in one short paper.',
  uz: 'Geometriya 9, Nazorat ishi 4', uzPage: 'pp. 183–220',
  cam: 'IGX 11 review', camPage: 'Core & Extended, pp. 220–241', wb: 'Control paper G4',
  objectives: [
    'Apply Thales’ theorem and the bisector theorem under time.',
    'Use the three relations of the altitude figure.',
    'Use the power of a point in all three configurations.',
    'Classify each lost mark and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Thales’ theorem', 'Fales teoremasi', 'Теорема Фалеса'],
    ['Bisector theorem', 'Bissektrisa teoremasi', 'Теорема о биссектрисе'],
    ['Mean proportional', 'O‘rta proporsional', 'Среднее пропорциональное'],
    ['Power of a point', 'Nuqtaning darajasi', 'Степень точки'],
    ['Projection', 'Proyeksiya', 'Проекция'],
    ['Tangent', 'Urinma', 'Касательная'],
    ['Diagnosis', 'Tashxis', 'Диагностика']
  ],
  timing: [[2, 'Instructions'], [25, 'The paper'], [8, 'Answers'], [5, 'Diagnosis and rewrite']],
  sections: [
    {
      h: 'The paper — 25 marks, 25 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>${m('DE ∥ BC')}, ${m('AD = 5')}, ${m('DB = 3')}, ${m('AE = 10')}: find ${m('EC')}</td><td class="m">5</td><td>L53–54</td></tr>
        <tr><td>2</td><td>${m('AB = 12')}, ${m('AC = 20')}, ${m('BC = 24')}: find ${m('BD')} for the bisector from ${m('A')}</td><td class="m">5</td><td>L55–56</td></tr>
        <tr><td>3</td><td>The altitude divides the hypotenuse into ${m('5')} and ${m('20')}: find it and the legs</td><td class="m">5</td><td>L57–58</td></tr>
        <tr><td>4</td><td>Find the mean proportional between ${m('6')} and ${m('24')}</td><td class="m">4</td><td>L59–60</td></tr>
        <tr><td>5</td><td>A tangent and a secant with ${m('PA = 4')}, ${m('AB = 12')}: find ${m('PT')}</td><td class="m">6</td><td>L61–62</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks actually go</div>
      Q1 carries one mark for the part-to-part ratio; Q2 two for ${m('AB : AC = 3 : 5')}; Q3 one for
      ${m('AB = 25')}; Q5 two for using ${m('PB = 16')} rather than ${m('AB = 12')}.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>part and whole mixed</td><td class="m">${f('AD', 'AB')} = ${f('AE', 'EC')}</td><td class="m">${f('AD', 'DB')} = ${f('AE', 'EC')}</td></tr>
        <tr><td>bisector ratio reversed</td><td class="m">${f('BD', 'DC')} = ${f('AC', 'AB')}</td><td class="m">= ${f('AB', 'AC')}</td></tr>
        <tr><td>leg paired with the wrong projection</td><td class="m">AC² = HB · AB</td><td class="m">AC² = AH · AB</td></tr>
        <tr><td>hypotenuse taken as one part</td><td class="m">AB = 20</td><td class="m">AB = 25</td></tr>
        <tr><td>mean proportional as the average</td><td class="m">15</td><td class="m">12</td></tr>
        <tr><td class="m">AB</td><td class="m">PT² = 4 × 12</td><td class="m">PT² = 4 × 16</td></tr>
        <tr><td>square root omitted</td><td class="m">PT = 64</td><td class="m">PT = 8</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'Chapter IV as one map',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Block</th><th>The relation</th></tr></thead>
      <tbody>
        <tr><td>Thales</td><td class="m">${f('AD', 'DB')} = ${f('AE', 'EC')}</td></tr>
        <tr><td>part and whole</td><td class="m">${f('AD', 'AB')} = ${f('DE', 'BC')}</td></tr>
        <tr><td>the bisector</td><td class="m">${f('BD', 'DC')} = ${f('AB', 'AC')}</td></tr>
        <tr><td>the altitude</td><td class="m">CH² = AH · HB</td></tr>
        <tr><td>each leg</td><td class="m">AC² = AH · AB</td></tr>
        <tr><td>chords</td><td class="m">PA · PB = PC · PD</td></tr>
        <tr><td>tangent and secant</td><td class="m">PT² = PA · PB</td></tr>
      </tbody></table></div>
      {{fig:thales:Seven relations, all of them one proportion cross-multiplied.}}
      <div class="keybox"><div class="klabel">Every line of that table is ${m('x² = ab')} or ${m(f('a', 'b') + ' = ' + f('c', 'd'))}</div>
      There is only one idea in the chapter — a proportion between segments — and seven places where it
      appears. Recognising which configuration a question is in is the whole task.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q2: ' + m('AB = 12') + ', ' + m('AC = 20') + ', ' + m('BC = 24') + '.',
      steps: [
        [m(f('BD', 'DC') + ' = ' + f('12', '20') + ' = ' + f('3', '5')), ''],
        ['Total parts ' + m('8') + '.', ''],
        [m('BD = ' + f('3', '8') + ' × 24 = 9'), ''],
        [m('DC = 15'), 'Check: ' + m('9 + 15 = 24') + ' ✓']
      ],
      ans: m('BD = 9')
    },
    {
      q: 'Model answer, Q3: projections ' + m('5') + ' and ' + m('20') + '.',
      steps: [
        [m('CH² = 5 × 20 = 100 ⇒ CH = 10'), ''],
        [m('AB = 25'), 'The whole hypotenuse.'],
        [m('AC² = 5 × 25 = 125 ⇒ AC = 5' + sr('5')), ''],
        [m('BC² = 20 × 25 = 500 ⇒ BC = 10' + sr('5')), '']
      ],
      ans: m('CH = 10, AC = 5' + sr('5') + ', BC = 10' + sr('5'))
    },
    {
      q: 'Model answer, Q5: ' + m('PA = 4') + ', ' + m('AB = 12') + '.',
      steps: [
        [m('PB = PA + AB = 16'), 'The whole secant.'],
        [m('PT² = PA · PB = 4 × 16'), ''],
        [m('= 64'), ''],
        [m('PT = 8'), '']
      ],
      ans: m('PT = 8')
    }
  ],
  modelNote: 'Put four configurations on the board unlabelled and ask only which relation each needs; the recognition is what the paper tests.',
  interactive: {
    type: 'quiz',
    title: 'Which relation?',
    hint: 'Name the configuration before the formula.',
    items: [
      { q: 'Parallel lines cut two transversals: the segments are:', a: ['equal', 'proportional', 'perpendicular', 'unrelated'], c: 1, why: "Thales' theorem." },
      { q: 'A line parallel to one side of a triangle divides the other two:', a: ['equally', 'in the same ratio', 'perpendicularly', 'in the ratio ' + m('2 : 1')], c: 1, why: 'The basic proportionality theorem.' },
      { q: 'The bisector of an angle of a triangle divides the opposite side in the ratio of:', a: ['the other two sides', 'the other two angles', m('1 : 1'), 'the altitudes'], c: 0, why: 'The bisector theorem.' },
      { q: 'The altitude to the hypotenuse is the mean proportional between:', a: ['the two legs', 'the two segments of the hypotenuse', 'the hypotenuse and a leg', 'nothing'], c: 1, why: m('h² = pq') + '.' },
      { q: 'Each leg is the mean proportional between the hypotenuse and:', a: ['the other leg', 'its own projection on it', 'the altitude', 'the median'], c: 1, why: m('a² = c · p') + '.' },
      { q: 'For a point outside a circle, the two secants satisfy:', a: [m('PA · PB = PC · PD'), m('PA + PB = PC + PD'), m('PA = PC'), 'nothing'], c: 0, why: 'The power of the point.' },
      { q: 'For a tangent and a secant from the same point:', a: [m('PT = PA'), m('PT² = PA · PB'), m('PT² = PA + PB'), m('PT = PA · PB')], c: 1, why: 'The tangent is the mean proportional.' },
      { q: 'Two chords meeting inside a circle give:', a: [m('AE · EB = CE · ED'), m('AE + EB = CE + ED'), m('AE = CE'), 'nothing'], c: 0, why: 'The same power relation.' }
    ]
  },
  quiz: [
    { q: 'Q1 uses:', a: [m(f('AD', 'AB') + ' = ' + f('AE', 'AC')), m(f('AD', 'DB') + ' = ' + f('AE', 'EC')), m('AD = AE'), 'the bisector theorem'], c: 1, why: 'Part to part.' },
    { q: 'In Q2 the ratio is:', a: [m('AC : AB'), m('AB : AC'), m('AB : BC'), m('1 : 1')], c: 1, why: 'The two adjacent sides.' },
    { q: 'In Q3 the hypotenuse is:', a: [m('5'), m('20'), m('25'), m('15')], c: 2, why: 'The sum of the projections.' },
    { q: 'The mean proportional between ' + m('6') + ' and ' + m('24') + ':', a: [m('12'), m('15'), m('18'), m('144')], c: 0, why: m(sr('144')) + '.' },
    { q: 'In Q5, ' + m('PB') + ' is:', a: [m('12'), m('16'), m('4'), m('8')], c: 1, why: m('PA + AB') + '.' },
    { q: 'The chapter’s single idea is:', a: ['area', 'a proportion between segments', 'congruence', 'symmetry'], c: 1, why: 'Seven appearances of one relation.' }
  ],
  practice: {
    easy: [
      [m('AD = 5, DB = 3, AE = 10') + ': ' + m('EC'), m('6')],
      [m('AB = 12, AC = 20') + ': ' + m('BD : DC'), m('3 : 5')],
      ['Same, ' + m('BC = 24') + ': ' + m('BD'), m('9')],
      ['Projections ' + m('5') + ' and ' + m('20') + ': the altitude', m('10')],
      ['Same: the hypotenuse', m('25')],
      ['Mean proportional of ' + m('6') + ' and ' + m('24'), m('12')],
      [m('PA = 4, AB = 12') + ': ' + m('PB'), m('16')]
    ],
    med: [
      [m('PA = 4, AB = 12') + ': ' + m('PT'), m('8')],
      ['Projections ' + m('5') + ' and ' + m('20') + ': the legs', m('5' + sr('5')) + ' and ' + m('10' + sr('5'))],
      [m('AD = 6, DB = 4, AE = 9') + ': ' + m('EC'), m('6')],
      [m('AB = 9, AC = 12, BC = 14') + ': ' + m('BD'), m('6')],
      ['Chords ' + m('PA = 5, PB = 6, PC = 3') + ': ' + m('PD'), m('10')],
      ['Mean proportional of ' + m('8') + ' and ' + m('50'), m('20')],
      ['A tangent of ' + m('6') + ' and ' + m('PA = 3') + ': ' + m('PB'), m('12')]
    ],
    hard: [
      ['A right triangle with legs ' + m('15') + ' and ' + m('20') + ': the projections', m('9') + ' and ' + m('16')],
      [m('DE ∥ BC') + ' with ' + m('[ADE] : [ABC] = 4 : 9') + ': ' + m('AD : DB'), m('2 : 1')],
      ['A bisector cuts ' + m('BC = 35') + ' as ' + m('2 : 5') + ' with ' + m('AC = 25') + ': ' + m('AB'), m('10')],
      ['A tangent of ' + m('PT = 10') + ' and a secant with ' + m('AB = 21') + ': ' + m('PA'), m('4')],
      ['Two chords: ' + m('PA · PB = 24') + ' and ' + m('PC = PD') + ': ' + m('PC'), m('2' + sr('6'))],
      ['A point ' + m('P') + ' with ' + m('OP = 17') + ' and ' + m('R = 8') + ': the tangent length', m('15')],
      ['A rectangle ' + m('4 × 25') + ': the side of the equal square', m('10')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite in full every question that lost a mark before the annual revision.',
  homework: [
    'In ' + m('△ABC') + ', ' + m('DE ∥ BC') + ', ' + m('AD = 8') + ', ' + m('DB = 4') + ', ' + m('AE = 10') + '. Find ' + m('EC') + '.',
    'A bisector from ' + m('A') + ' divides ' + m('BC = 30') + ' with ' + m('AB = 14') + ' and ' + m('AC = 21') + '. Find ' + m('BD') + '.',
    'The altitude divides a hypotenuse into ' + m('8') + ' and ' + m('18') + '. Find the altitude and the legs.',
    'Find the mean proportional between ' + m('9') + ' and ' + m('49') + '.',
    'A tangent and a secant give ' + m('PA = 5') + ' and ' + m('AB = 15') + '. Find ' + m('PT') + '.'
  ]
});

/* ============================== 44 ============================== */
G9_GEO.push({
  id: 'g9-44', stream: 'geo', grade: 9, quarter: 4, lessons: '66–68', hours: 3,
  title: 'Annual revision, and the Grade 10 preview',
  subtitle: 'Four chapters, four pictures — and the plane geometry course closed before solid geometry opens.',
  uz: 'Geometriya 9, Yillik takrorlash', uzPage: 'pp. 1–220',
  cam: 'IGX 1–12 review', camPage: 'Core & Extended, full course', wb: 'Revision exercises',
  objectives: [
    'State the central idea of each of the four chapters in one sentence.',
    'Recognise which chapter a mixed question belongs to.',
    'Identify personally weak areas and plan summer practice.',
    'See what Grade 10 solid geometry will assume.'
  ],
  terms: [
    ['Revision', 'Takrorlash', 'Повторение'],
    ['Similarity', 'O‘xshashlik', 'Подобие'],
    ['Solving triangles', 'Uchburchaklarni yechish', 'Решение треугольников'],
    ['Regular polygon', 'Muntazam ko‘pburchak', 'Правильный многоугольник'],
    ['Proportional segments', 'Proporsional kesmalar', 'Пропорциональные отрезки'],
    ['Solid geometry', 'Stereometriya', 'Стереометрия'],
    ['Plane', 'Tekislik', 'Плоскость'],
    ['Preparation', 'Tayyorgarlik', 'Подготовка']
  ],
  timing: [[25, 'Four chapters, four pictures'], [35, 'Which chapter is this?'], [35, 'Mixed practice'], [20, 'What Grade 10 expects'], [5, 'The summer plan']],
  sections: [
    {
      h: 'Four chapters, four pictures',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Chapter</th><th>The sentence</th><th>The picture</th></tr></thead>
      <tbody>
        <tr><td>I — similarity and transformations</td><td>same shape, all lengths ${m('× k')}, all areas ${m('× k²')}</td><td>a figure and its scaled copy</td></tr>
        <tr><td>II — trigonometry in any triangle</td><td>the sine rule for a matched pair, the cosine rule otherwise</td><td>a triangle with all six elements</td></tr>
        <tr><td>III — regular polygons and the circle</td><td>${m('n')} congruent triangles, and the circle as their limit</td><td>a circle with a polygon inside</td></tr>
        <tr><td>IV — proportional segments</td><td>one proportion, seven configurations</td><td>a triangle cut by a parallel</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Four pictures are enough</div>
      If those four can be drawn from memory with their labels, the year is secure. Every formula in the
      course can be rebuilt from one of them.</div>`
    },
    {
      h: 'Which chapter is this?',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>Chapter</th><th>Because</th></tr></thead>
      <tbody>
        <tr><td>“Two similar polygons have areas ${m('27')} and ${m('48')}…”</td><td>I</td><td class="m">k²</td></tr>
        <tr><td>“Find the largest angle of a triangle ${m('4, 7, 9')}”</td><td>II</td><td>SSS — the cosine rule</td></tr>
        <tr><td>“A regular polygon has interior angle ${m('150°')}”</td><td>III</td><td>the exterior angle</td></tr>
        <tr><td>“A tangent and a secant from ${m('P')}…”</td><td>IV</td><td class="m">PT² = PA · PB</td></tr>
        <tr><td>“The area of a segment…”</td><td>III</td><td>sector ${m('−')} triangle</td></tr>
        <tr><td>“The altitude to the hypotenuse…”</td><td>I or IV</td><td>similar triangles, or the mean proportional</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Two chapters can both be right</span>
      The last row is genuinely either: Chapter I proves the three triangles similar, Chapter IV names
      the relations that follow. Choose whichever route you can carry out fastest.</div>`
    },
    {
      h: 'Mixed practice',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Task</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>Two similar triangles, areas ${m('16')} and ${m('81')}: the ratio of perimeters</td><td class="m">4 : 9</td></tr>
        <tr><td>${m('a = 7, b = 8, C = 60°')}: find ${m('c')}</td><td class="m">${sr('57')} ≈ 7.55</td></tr>
        <tr><td>A regular hexagon of side ${m('5')}: its area</td><td class="m">${f('75' + sr('3'), '2')}</td></tr>
        <tr><td>A sector ${m('R = 6, θ = 60°')}</td><td class="m">6π</td></tr>
        <tr><td>A bisector with ${m('AB = 9, AC = 12, BC = 21')}: ${m('BD')}</td><td class="m">9</td></tr>
        <tr><td>Chords ${m('PA = 3, PB = 8, PC = 4')}: ${m('PD')}</td><td class="m">6</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Mixed practice trains the choice</div>
      Twenty questions from one chapter train a method; twenty from four chapters train the recognition
      — and it is the recognition an examination measures.</div>`
    },
    {
      h: 'What Grade 10 expects',
      html: `<p>Grade 10 geometry is <b>solid</b> geometry: points, lines and planes in space. What it
      assumes from this year:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Grade 10 topic</th><th>Needs, from Grade 9</th></tr></thead>
      <tbody>
        <tr><td>lines and planes in space</td><td>parallels, perpendiculars, projections</td></tr>
        <tr><td>the angle between a line and a plane</td><td>projection, and right-triangle trigonometry</td></tr>
        <tr><td>sections of a cube and a prism</td><td>similar triangles and Thales</td></tr>
        <tr><td>areas of sections</td><td>the ratio ${m('k²')}</td></tr>
        <tr><td>volumes (Grade 11)</td><td>the ratio ${m('k³')}</td></tr>
        <tr><td>the surface of a cylinder and a cone</td><td>the circumference and the sector</td></tr>
      </tbody></table></div>
      <p>Nothing in solid geometry is new mathematics: it is plane geometry applied inside a
      three-dimensional figure, one plane at a time.</p>
      <div class="keybox"><div class="klabel">The summer plan, in one line</div>
      One page a week: the similarity ratios ${m('k, k², k³')}; the sine and cosine rules with one worked
      triangle each; the circle formulae; the altitude figure with all three relations. Four sessions,
      and September starts from a full page.</div>`
    }
  ],
  examples: [
    {
      q: 'Two similar triangles have areas ' + m('16') + ' and ' + m('81') + '. Find the ratio of their perimeters.',
      steps: [
        [m('k² = ' + f('81', '16')), 'Chapter I.'],
        [m('k = ' + f('9', '4')), ''],
        ['Perimeters scale by ' + m('k') + '.', ''],
        [m('9 : 4'), '']
      ],
      ans: m('9 : 4')
    },
    {
      q: 'In ' + m('△ABC') + ', ' + m('a = 7') + ', ' + m('b = 8') + ', ' + m('C = 60°') + '. Find ' + m('c') + ' and the area.',
      steps: [
        [m('c² = 49 + 64 − 2 · 56 · 0.5'), 'Chapter II.'],
        [m('= 113 − 56 = 57 ⇒ c = ' + sr('57') + ' ≈ 7.55'), ''],
        [m('S = ½ · 56 · sin 60°'), ''],
        [m('= 14' + sr('3') + ' ≈ 24.2'), '']
      ],
      ans: m('c ≈ 7.55') + ', ' + m('S = 14' + sr('3'))
    },
    {
      q: 'A regular hexagon has side ' + m('5') + '. Find its area, and the area of its inscribed circle.',
      steps: [
        [m('S = ' + f('3' + sr('3'), '2') + ' × 25 = ' + f('75' + sr('3'), '2') + ' ≈ 65.0'), 'Chapter III.'],
        [m('r = ' + f('5' + sr('3'), '2')), ''],
        [m('πr² = π × ' + f('75', '4')), ''],
        [m('= ' + f('75π', '4') + ' ≈ 58.9'), '']
      ],
      ans: m(f('75' + sr('3'), '2')) + ' and ' + m(f('75π', '4'))
    }
  ],
  modelNote: 'Give twelve questions in random order and ask only for the chapter of each — no solving. Recognition, practised on its own, is what a mixed paper rewards.',
  interactive: {
    type: 'quiz',
    title: 'Which chapter, and which relation?',
    hint: 'Name the chapter before the formula.',
    items: [
      { q: 'Similar triangles have:', a: ['equal sides', 'equal angles and proportional sides', 'equal areas', 'equal perimeters'], c: 1, why: 'Same shape, any size.' },
      { q: 'Their areas are in the ratio:', a: [m('k'), m('k²'), m('k³'), m('1')], c: 1, why: 'The square of the scale factor.' },
      { q: 'The sine rule is:', a: [m(f('a', 'sin A') + ' = ' + f('b', 'sin B')), m('a² = b² + c² − 2bc cos A'), m('S = ' + f('1', '2') + 'ab sin C'), m('a + b > c')], c: 0, why: 'Sides over the sines of the opposite angles.' },
      { q: 'The cosine rule finds a third side from:', a: ['two angles', 'two sides and the angle between them', 'three angles', 'one side'], c: 1, why: 'SAS.' },
      { q: 'The area of a triangle from two sides and the included angle is:', a: [m(f('1', '2') + 'ab sin C'), m('ab sin C'), m(f('1', '2') + 'ab cos C'), m('ab')], c: 0, why: 'The formula of Q2.' },
      { q: 'The circumference of a circle of radius ' + m('r') + ' is:', a: [m('πr²'), m('2πr'), m('πr'), m('4πr')], c: 1, why: 'Length, not area.' },
      { q: 'The area of a sector of angle ' + m('α') + ' radians is:', a: [m(f('1', '2') + 'r²α'), m('r²α'), m('rα'), m('πr²α')], c: 0, why: 'A fraction of the disc.' },
      { q: 'An inscribed angle is:', a: ['equal to the central angle', 'half the central angle', 'twice it', 'a right angle always'], c: 1, why: 'On the same arc.' }
    ]
  },
  quiz: [
    { q: '“Areas ' + m('27') + ' and ' + m('48') + '” belongs to:', a: ['Chapter I', 'Chapter II', 'Chapter III', 'Chapter IV'], c: 0, why: m('k²') + '.' },
    { q: '“Largest angle of ' + m('4, 7, 9') + '” belongs to:', a: ['Chapter I', 'Chapter II', 'Chapter III', 'Chapter IV'], c: 1, why: 'The cosine rule.' },
    { q: '“Interior angle ' + m('150°') + '” belongs to:', a: ['Chapter I', 'Chapter II', 'Chapter III', 'Chapter IV'], c: 2, why: 'Regular polygons.' },
    { q: '“A tangent and a secant” belongs to:', a: ['Chapter I', 'Chapter II', 'Chapter III', 'Chapter IV'], c: 3, why: m('PT² = PA · PB') + '.' },
    { q: 'Grade 10 geometry is:', a: ['more plane geometry', 'solid geometry', 'coordinate geometry', 'trigonometry'], c: 1, why: 'Lines and planes in space.' },
    { q: 'The most useful thing to revise is:', a: ['the whole book', 'the four pictures', 'the definitions', 'nothing'], c: 1, why: 'Every formula rebuilds from them.' }
  ],
  practice: {
    easy: [
      ['Areas ' + m('16') + ' and ' + m('81') + ': ' + m('k'), m('9 : 4')],
      [m('a = 7, b = 8, C = 60°') + ': ' + m('c'), m(sr('57'))],
      ['Regular hexagon of side ' + m('5') + ': its area', m(f('75' + sr('3'), '2'))],
      ['Sector ' + m('R = 6, θ = 60°'), m('6π')],
      [m('AB = 9, AC = 12, BC = 21') + ': ' + m('BD'), m('9')],
      ['Chords ' + m('PA = 3, PB = 8, PC = 4') + ': ' + m('PD'), m('6')],
      ['Interior angle of a regular ' + m('12') + '-gon', m('150°')]
    ],
    med: [
      ['Two similar solids, volumes ' + m('8') + ' and ' + m('125') + ': the ratio of areas', m('4 : 25')],
      ['Sides ' + m('4, 7, 9') + ': the largest angle', m('≈ 106.6°')],
      ['Its area', m('≈ 13.4')],
      ['A segment, ' + m('R = 6, θ = 90°'), m('9π − 18')],
      ['Projections ' + m('4') + ' and ' + m('9') + ': the altitude', m('6')],
      ['A tangent with ' + m('PA = 4, AB = 12'), m('PT = 8')],
      ['A regular hexagon of side ' + m('5') + ': its inscribed circle area', m(f('75π', '4'))]
    ],
    hard: [
      ['A triangle ' + m('13, 14, 15') + ': its area, inradius and circumradius', m('84') + ', ' + m('4') + ', ' + m('8.125')],
      ['A regular hexagon and its circumscribed circle: the ratio of their areas', m('3' + sr('3') + ' : 2π')],
      ['A right triangle with legs ' + m('9, 12') + ': the altitude and the two projections', m('7.2') + '; ' + m('5.4') + ' and ' + m('9.6')],
      ['Two similar triangles: perimeters ' + m('20') + ' and ' + m('28') + ', smaller area ' + m('25'), m('49')],
      ['A ship: ' + m('15 km') + ' on ' + m('070°') + ' then ' + m('20 km') + ' on ' + m('160°'), m('25 km')],
      ['A sector of perimeter ' + m('30') + ' and radius ' + m('10') + ': its area', m('50')],
      ['A cyclic quadrilateral with three angles ' + m('80°, 95°, 100°') + ': the fourth', m('85°')]
    ]
  },
  hwTitle: 'Summer work — 5 tasks, one a week',
  hwNote: 'Not five tasks for one evening: one page a week, spread across the summer.',
  homework: [
    'Week 1: draw a figure and its enlargement, and write the three ratios ' + m('k, k², k³') + '.',
    'Week 2: solve one triangle by the sine rule and one by the cosine rule, in full.',
    'Week 3: draw a circle with an inscribed hexagon and write every circle formula on it.',
    'Week 4: draw the altitude figure and write all three relations, then do ten problems on them.',
    'Week 5: do Control work 4 again from a blank page and compare.'
  ]
});
