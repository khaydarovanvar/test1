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
