/* G11_GEO — Quarter I (18 hours). National backbone: "Geometry 11", Chapter 1 —
   the coordinate system in space, vectors, the scalar product and transformations. */
var G11_GEO = [];

/* ============================== 1 ============================== */
G11_GEO.push({
  id: 'g11-01', stream: 'geo', grade: 11, quarter: 1, lessons: '1–3', hours: 3,
  title: 'The rectangular coordinate system in space',
  subtitle: 'A third axis, and the two formulas — distance and midpoint — that everything else in the chapter is built on.',
  uz: 'Geometry 11, §1', uzPage: 'pp. 3–16',
  cam: 'P1 · 3-D coordinates', camPage: 'Core & Extended, pp. 318–324', wb: 'Exercise 1.1',
  objectives: [
    'Plot a point from its three coordinates and read coordinates from a diagram.',
    'Use the distance formula in space.',
    'Use the midpoint formula in space.',
    'Find the equation of a sphere from its centre and radius.'
  ],
  terms: [
    ['Coordinate system in space', 'Fazoviy koordinatalar sistemasi', 'Пространственная система координат'],
    ['Ordinate / abscissa / applicate', 'Ordinata / abssissa / applikata', 'Ордината / абсцисса / аппликата'],
    ['Octant', 'Oktant', 'Октант'],
    ['Coordinate plane', 'Koordinata tekisligi', 'Координатная плоскость'],
    ['Distance between two points', 'Ikki nuqta orasidagi masofa', 'Расстояние между точками'],
    ['Midpoint of a segment', 'Kesma o‘rtasi', 'Середина отрезка'],
    ['Sphere', 'Sfera', 'Сфера'],
    ['Projection onto a plane', 'Tekislikka proyeksiya', 'Проекция на плоскость'],
    ['Origin', 'Koordinatalar boshi', 'Начало координат']
  ],
  timing: [[14, 'The third axis'], [22, 'Plotting and reading points'], [30, 'The distance formula'], [24, 'The midpoint formula'], [24, 'The sphere'], [21, 'Practice and homework']],
  sections: [
    {
      h: 'A third axis',
      html: `<p>Add an axis ${m('Oz')} perpendicular to both ${m('Ox')} and ${m('Oy')}. Every point of
      space then has exactly three coordinates ${m('(x, y, z)')} — how far along, how far across, how far
      up.</p>
      {{fig:point3d:The point (3, 4, 5) and the box that locates it. Read along, across, then up.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Object</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td>the three axes</td><td class="m">Ox, Oy, Oz</td></tr>
        <tr><td>the three coordinate planes</td><td class="m">z = 0, y = 0, x = 0</td></tr>
        <tr><td>octants</td><td class="m">8</td></tr>
        <tr><td>a point on the ${m('x')}-axis</td><td class="m">(a, 0, 0)</td></tr>
        <tr><td>a point in the ${m('xy')}-plane</td><td class="m">(a, b, 0)</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Right-handed convention</div>
      Point the fingers of the right hand along ${m('Ox')} and curl them towards ${m('Oy')}; the thumb
      points along ${m('Oz')}. Every formula in this chapter assumes it.</div>`
    },
    {
      h: 'Distance',
      html: `<p>Pythagoras, used twice — once in the base plane and once vertically:</p>
      {{fig:dist3d:The base diagonal first, then the vertical rise. One right triangle inside another.}}
      ${eq(m('AB = ' + sr('(x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²')), true)}
      <p>From the origin it shortens to ${m('OA = ' + sr('x² + y² + z²'))}. For ${m('(3, 4, 12)')} that
      is ${m(sr('9 + 16 + 144') + ' = 13')}.</p>
      <div class="warn"><span class="wl">Square the differences, not the coordinates</span>
      ${m('A(1, 2, 3)')} and ${m('B(4, 6, 15)')} give ${m(sr('9 + 16 + 144') + ' = 13')} — from the
      <b>differences</b> ${m('3, 4, 12')}. Squaring the coordinates themselves is the commonest slip.</div>`
    },
    {
      h: 'Midpoint',
      html: `${eq(m('M = (' + f('x₁ + x₂', '2') + ', ' + f('y₁ + y₂', '2') + ', ' + f('z₁ + z₂', '2') + ')'), true)}
      <p>Each coordinate is averaged independently — the plane formula with one more entry.</p>
      <p>More generally, the point dividing ${m('AB')} in the ratio ${m('m : n')} from ${m('A')} is</p>
      ${eq(m('P = (' + f('nx₁ + mx₂', 'm + n') + ', ' + f('ny₁ + my₂', 'm + n') + ', ' + f('nz₁ + mz₂', 'm + n') + ')'), false)}
      <p>and the midpoint is the case ${m('m = n')}.</p>`
    },
    {
      h: 'The sphere',
      html: `<p>A sphere is the set of points a fixed distance from a centre. Writing that with the
      distance formula and squaring gives its equation directly:</p>
      ${eq(m('(x − a)² + (y − b)² + (z − c)² = R²'), true)}
      <p>Centre ${m('(2, −1, 3)')}, radius ${m('5')}: ${m('(x − 2)² + (y + 1)² + (z − 3)² = 25')}.</p>
      <div class="keybox"><div class="klabel">Going backwards</div>
      Given ${m('x² + y² + z² − 4x + 6y − 12 = 0')}, complete the square in each variable:
      ${m('(x − 2)² + (y + 3)² + z² = 25')}. Centre ${m('(2, −3, 0)')}, radius ${m('5')}.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the distance between ' + m('A(1, −2, 3)') + ' and ' + m('B(4, 2, 15)') + '.',
      steps: [
        ['Differences ' + m('3, 4, 12') + '.', ''],
        [m('9 + 16 + 144 = 169'), ''],
        [m(sr('169') + ' = 13'), '']
      ],
      ans: m('13')
    },
    {
      q: m('A(2, −3, 5)') + ' and ' + m('M(4, 1, 0)') + ' is the midpoint of ' + m('AB') + '. Find ' + m('B') + '.',
      steps: [
        [m(f('2 + x', '2') + ' = 4 ⇒ x = 6'), ''],
        [m(f('−3 + y', '2') + ' = 1 ⇒ y = 5'), ''],
        [m(f('5 + z', '2') + ' = 0 ⇒ z = −5'), '']
      ],
      ans: m('B(6, 5, −5)')
    },
    {
      q: 'Find the centre and radius of ' + m('x² + y² + z² − 6x + 4z − 3 = 0') + '.',
      steps: [
        [m('(x − 3)² − 9'), ''],
        [m('(z + 2)² − 4'), ''],
        [m('(x − 3)² + y² + (z + 2)² = 16'), ''],
        ['Read off.', '']
      ],
      ans: 'centre ' + m('(3, 0, −2)') + ', radius ' + m('4')
    }
  ],
  modelNote: 'Move the point and watch each coordinate and the distance from the origin update.',
  interactive: {
    type: 'space3d',
    title: 'A point in space',
    hint: 'Drag x, y and z and read the distance from the origin.'
  },
  quiz: [
    { q: 'The distance from the origin to ' + m('(2, 3, 6)') + ' is:', a: [m('11'), m('7'), m('9'), m('' + sr('11'))], c: 1, why: m(sr('4 + 9 + 36') + ' = 7') + '.' },
    { q: 'The midpoint of ' + m('(0,0,0)') + ' and ' + m('(4, 6, 8)') + ' is:', a: [m('(2, 3, 4)'), m('(4, 6, 8)'), m('(1, 2, 3)'), m('(8, 12, 16)')], c: 0, why: 'Average each coordinate.' },
    { q: 'A point in the ' + m('xy') + '-plane has:', a: [m('x = 0'), m('y = 0'), m('z = 0'), 'all zero'], c: 2, why: 'No height.' },
    { q: 'How many octants?', a: [m('4'), m('6'), m('8'), m('12')], c: 2, why: 'Two choices of sign on each of three axes.' },
    { q: m('(x − 1)² + y² + (z + 2)² = 9') + ' has radius:', a: [m('9'), m('3'), m('' + sr('3')), m('81')], c: 1, why: m('R² = 9') + '.' }
  ],
  practice: {
    easy: [
      ['Distance from ' + m('O') + ' to ' + m('(1, 2, 2)'), m('3')],
      ['Distance from ' + m('O') + ' to ' + m('(2, 3, 6)'), m('7')],
      ['Distance from ' + m('O') + ' to ' + m('(3, 4, 12)'), m('13')],
      ['Midpoint of ' + m('(0,0,0)') + ' and ' + m('(2, 4, 6)'), m('(1, 2, 3)')],
      ['Midpoint of ' + m('(1,1,1)') + ' and ' + m('(3,5,7)'), m('(2, 3, 4)')],
      ['Radius of ' + m('x² + y² + z² = 36'), m('6')],
      ['A point on the ' + m('z') + '-axis has form', m('(0, 0, c)')]
    ],
    med: [
      ['Distance ' + m('A(1,2,3)') + ' to ' + m('B(4,6,15)'), m('13')],
      ['Distance ' + m('A(−1,0,2)') + ' to ' + m('B(3,4,2)'), m('4' + sr('2'))],
      ['Midpoint of ' + m('(−2, 5, 1)') + ' and ' + m('(6, −1, 7)'), m('(2, 2, 4)')],
      ['Sphere, centre ' + m('(1,2,3)') + ' radius 4 — its equation', m('(x−1)² + (y−2)² + (z−3)² = 16')],
      ['Centre and radius of ' + m('x² + y² + z² − 4x = 0'), m('(2,0,0)') + ', ' + m('2')],
      [m('M(3,1,2)') + ' is the midpoint of ' + m('A(1,−1,0)B') + '. Find ' + m('B'), m('(5, 3, 4)')],
      ['Is ' + m('(1,2,2)') + ' on the sphere ' + m('x²+y²+z² = 9') + '?', 'yes']
    ],
    hard: [
      ['Show ' + m('A(1,2,3), B(3,4,5), C(5,6,7)') + ' are collinear', 'Equal steps of ' + m('(2,2,2)')],
      ['Find ' + m('z') + ' so ' + m('(1, 2, z)') + ' is 7 from ' + m('(4, 6, 1)'), m('z = 1 ± 2' + sr('6'))],
      ['Point dividing ' + m('A(1,0,2)B(7,6,8)') + ' in ratio ' + m('1:2'), m('(3, 2, 4)')],
      ['Centre and radius of ' + m('x²+y²+z² −2x +4y −6z −11 = 0'), m('(1,−2,3)') + ', ' + m('5')],
      ['Find the point equidistant from ' + m('(0,0,0), (2,0,0), (0,2,0), (0,0,2)'), m('(1, 1, 1)')],
      ['Show ' + m('A(0,0,0), B(4,0,0), C(4,3,0), D(0,3,0)') + ' form a rectangle', 'Opposite sides equal, diagonals equal ' + m('5')],
      ['A cube has vertices ' + m('(0,0,0)') + ' and ' + m('(a,a,a)') + '. Find the space diagonal', m('a' + sr('3'))]
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Show the differences before squaring in every distance question.',
  homework: [
    'Find the distance between ' + m('A(2, −1, 4)') + ' and ' + m('B(5, 3, 16)') + '.',
    'Find the midpoint of ' + m('A(−3, 2, 7)') + ' and ' + m('B(5, −4, 1)') + '.',
    m('M(1, 0, 2)') + ' is the midpoint of ' + m('AB') + ' with ' + m('A(−2, 3, 5)') + '. Find ' + m('B') + '.',
    'Write the equation of the sphere with centre ' + m('(−1, 2, 0)') + ' and radius ' + m('6') + '.',
    'Find the centre and radius of ' + m('x² + y² + z² + 2x − 8y + 4z + 5 = 0') + '.',
    'Show that ' + m('A(1,1,1), B(3,3,3), C(6,6,6)') + ' are collinear and find the ratio ' + m('AB : BC') + '.'
  ]
});

/* ============================== 2 ============================== */
G11_GEO.push({
  id: 'g11-02', stream: 'geo', grade: 11, quarter: 1, lessons: '4–5', hours: 2,
  title: 'Vectors in space and operations on them',
  subtitle: 'The same three operations as in the plane, with one extra component — and the position vector that makes coordinates and vectors the same thing.',
  uz: 'Geometry 11, §2', uzPage: 'pp. 17–28',
  cam: 'P1 · vectors', camPage: 'Core & Extended, pp. 325–334', wb: 'Exercise 2.1',
  objectives: [
    'Write a vector in component and in unit-vector form.',
    'Add, subtract and multiply a vector by a scalar.',
    'Find the magnitude of a vector and a unit vector in its direction.',
    'Use position vectors to express AB as b − a.'
  ],
  terms: [
    ['Vector', 'Vektor', 'Вектор'],
    ['Component', 'Komponenta', 'Компонента'],
    ['Position vector', 'Radius-vektor', 'Радиус-вектор'],
    ['Magnitude (modulus)', 'Uzunlik (modul)', 'Длина (модуль)'],
    ['Unit vector', 'Birlik vektor', 'Единичный вектор'],
    ['Zero vector', 'Nol vektor', 'Нулевой вектор'],
    ['Scalar multiplication', 'Skalyarga ko‘paytirish', 'Умножение на скаляр'],
    ['Equal vectors', 'Teng vektorlar', 'Равные векторы'],
    ['Basis vectors i, j, k', 'Bazis vektorlar', 'Базисные векторы']
  ],
  timing: [[10, 'What carries over from the plane'], [20, 'Components and the basis'], [22, 'The three operations'], [20, 'Magnitude and unit vectors'], [18, 'Position vectors'], [10, 'Homework']],
  sections: [
    {
      h: 'One extra component, nothing else new',
      html: `<p>A vector in space is written in components or on the basis ${m('i, j, k')}:</p>
      ${eq(m('a = (a₁, a₂, a₃) = a₁i + a₂j + a₃k'), true)}
      {{fig:vec3d:A vector as an arrow, and as the three steps along the axes that build it.}}
      <div class="keybox"><div class="klabel">Vector or point?</div>
      ${m('(3, 4, 5)')} as a <b>point</b> is a place. As a <b>vector</b> it is a displacement — three
      along, four across, five up — which may start anywhere. Two vectors are equal when their
      components agree, wherever they are drawn.</div>`
    },
    {
      h: 'The three operations',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Operation</th><th>Rule</th><th>Example with ${m('a = (1,2,3)')}, ${m('b = (4,0,−1)')}</th></tr></thead>
      <tbody>
        <tr><td>addition</td><td class="m">(a₁+b₁, a₂+b₂, a₃+b₃)</td><td class="m">(5, 2, 2)</td></tr>
        <tr><td>subtraction</td><td class="m">(a₁−b₁, a₂−b₂, a₃−b₃)</td><td class="m">(−3, 2, 4)</td></tr>
        <tr><td>scalar multiple</td><td class="m">(ka₁, ka₂, ka₃)</td><td class="m">3a = (3, 6, 9)</td></tr>
      </tbody></table></div>
      <p>Geometrically nothing changes: addition is still the triangle rule, and ${m('ka')} is still
      ${m('a')} stretched by ${m('|k|')}, reversed if ${m('k')} is negative.</p>
      <div class="warn"><span class="wl">Vectors are added componentwise</span>
      There is no “cross-multiplying” of components in addition. Each component minds its own axis.</div>`
    },
    {
      h: 'Magnitude and unit vectors',
      html: `${eq(m('|a| = ' + sr('a₁² + a₂² + a₃²')), true)}
      <p>It is the distance formula from the origin, and it obeys the same rules as in the plane:
      ${m('|ka| = |k| · |a|')}, and ${m('|a| = 0')} only for the zero vector.</p>
      <p>A <b>unit vector</b> has magnitude 1. To build one in the direction of ${m('a')}, divide by the
      magnitude:</p>
      ${eq(m('â = ' + f('a', '|a|')), true)}
      <p>For ${m('a = (2, −1, 2)')}: ${m('|a| = 3')}, so ${m('â = (' + f('2', '3') + ', −' + f('1', '3') + ', ' + f('2', '3') + ')')}.</p>
      <div class="warn"><span class="wl">Divide the vector, not the components separately in your head</span>
      Every component is divided by the <b>same</b> number ${m('|a|')}. Check by confirming the new
      magnitude is 1.</div>`
    },
    {
      h: 'Position vectors',
      html: `<div class="keybox"><div class="klabel">The bridge between points and vectors</div>
      The <b>position vector</b> of ${m('A')} is ${m('OA')}, written ${m('a')}, and its components are
      simply the coordinates of ${m('A')}. Then for any two points:</p>
      ${eq(m('AB = b − a'), true)}
      “Head minus tail” — the destination’s position vector minus the start’s.</div>
      <p>So ${m('A(1, 2, 3)')} to ${m('B(4, 6, 15)')} gives ${m('AB = (3, 4, 12)')}, of length ${m('13')} —
      the same answer as the distance formula, because it <b>is</b> the distance formula.</p>
      <p>The midpoint of ${m('AB')} has position vector ${m(f('a + b', '2'))}, which is the midpoint
      formula written once instead of three times.</p>`
    }
  ],
  examples: [
    {
      q: m('a = (2, −1, 3)') + ', ' + m('b = (1, 4, −2)') + '. Find ' + m('2a − 3b') + ' and its magnitude.',
      steps: [
        [m('2a = (4, −2, 6)'), ''],
        [m('3b = (3, 12, −6)'), ''],
        [m('2a − 3b = (1, −14, 12)'), ''],
        [m('|·| = ' + sr('1 + 196 + 144') + ' = ' + sr('341') + ' ≈ 18.47'), '']
      ],
      ans: m('(1, −14, 12)') + ', magnitude ' + m(sr('341')) + ' ≈ ' + m('18.5')
    },
    {
      q: 'Find a unit vector in the direction of ' + m('a = (6, −2, 3)') + '.',
      steps: [
        [m('|a| = ' + sr('36 + 4 + 9') + ' = 7'), ''],
        [m('â = ' + f('1', '7') + '(6, −2, 3)'), ''],
        ['Check: ' + m(f('36 + 4 + 9', '49') + ' = 1') + ' ✓', '']
      ],
      ans: m('(' + f('6', '7') + ', −' + f('2', '7') + ', ' + f('3', '7') + ')')
    },
    {
      q: m('A(3, 0, −1)') + ', ' + m('B(1, 4, 5)') + '. Find ' + m('AB') + ', its length, and the midpoint.',
      steps: [
        [m('AB = b − a = (−2, 4, 6)'), ''],
        [m('|AB| = ' + sr('4 + 16 + 36') + ' = ' + sr('56') + ' = 2' + sr('14')), ''],
        [m('M = ' + f('a + b', '2') + ' = (2, 2, 2)'), '']
      ],
      ans: m('AB = (−2, 4, 6)') + ', ' + m('2' + sr('14')) + ', ' + m('M(2, 2, 2)')
    }
  ],
  modelNote: 'Change the components and watch the arrow and its length move together.',
  interactive: {
    type: 'vectors',
    title: 'Vector arithmetic',
    hint: 'Add and scale, and read the resultant.'
  },
  quiz: [
    { q: m('|(3, 4, 12)|') + ' is:', a: [m('19'), m('13'), m('12'), m('' + sr('19'))], c: 1, why: m(sr('9 + 16 + 144')) + '.' },
    { q: m('AB') + ' in position vectors is:', a: [m('a + b'), m('b − a'), m('a − b'), m(f('a + b', '2'))], c: 1, why: 'Head minus tail.' },
    { q: 'A unit vector has magnitude:', a: [m('0'), m('1'), m('|a|'), 'any'], c: 1, why: 'By definition.' },
    { q: m('(1,2,3) + (4,0,−1)') + ' is:', a: [m('(5,2,2)'), m('(4,0,−3)'), m('(5,2,4)'), m('(−3,2,4)')], c: 0, why: 'Componentwise.' },
    { q: m('|3a|') + ' equals:', a: [m('|a|'), m('3|a|'), m('9|a|'), m('|a|³')], c: 1, why: 'Scaling multiplies the length.' }
  ],
  practice: {
    easy: [
      [m('(1,2,3) + (3,2,1)'), m('(4,4,4)')],
      [m('(5,0,2) − (1,3,2)'), m('(4,−3,0)')],
      [m('2(1,−2,3)'), m('(2,−4,6)')],
      [m('|(1,2,2)|'), m('3')],
      [m('|(0,3,4)|'), m('5')],
      [m('|(2,3,6)|'), m('7')],
      ['Unit vector along ' + m('(0,0,5)'), m('(0,0,1)')]
    ],
    med: [
      [m('a = (2,−1,3), b = (1,0,4)') + '; find ' + m('a + 2b'), m('(4,−1,11)')],
      ['Same; find ' + m('3a − b'), m('(5,−3,5)')],
      [m('|(6,−2,3)|'), m('7')],
      ['Unit vector along ' + m('(6,−2,3)'), m(f('1', '7') + '(6,−2,3)')],
      [m('A(1,2,3), B(4,6,15)') + '; find ' + m('AB'), m('(3,4,12)')],
      ['Same; find ' + m('|AB|'), m('13')],
      ['Midpoint of ' + m('A(1,2,3)') + ' and ' + m('B(5,6,7)'), m('(3,4,5)')]
    ],
    hard: [
      ['Find ' + m('k') + ' so ' + m('|(k, 2, 2)| = 3'), m('k = ±1')],
      ['Find a unit vector opposite to ' + m('(1, 2, −2)'), m('−' + f('1', '3') + '(1,2,−2)')],
      [m('a = (1,2,2), b = (2,−1,2)') + '; find ' + m('|a + b|'), m(sr('34')) + ' ≈ ' + m('5.83')],
      ['Show ' + m('|a + b| ≤ |a| + |b|') + ' for those vectors', m('5.83 ≤ 6')],
      ['Find ' + m('t') + ' so ' + m('(1, t, 2)') + ' is parallel to ' + m('(3, 6, 6)'), m('t = 2')],
      ['Express ' + m('(5, 4, 3)') + ' in terms of ' + m('i, j, k'), m('5i + 4j + 3k')],
      [m('A(2,1,0), B(4,5,6)') + '; find the point ' + m('P') + ' on ' + m('AB') + ' with ' + m('AP : PB = 1 : 3'), m('(2.5, 2, 1.5)')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Check every unit vector by confirming its magnitude is 1.',
  homework: [
    m('a = (3, −1, 2)') + ', ' + m('b = (0, 4, −2)') + '. Find ' + m('a + b') + ', ' + m('a − b') + ' and ' + m('2a + 3b') + '.',
    'Find ' + m('|a|') + ' and a unit vector along ' + m('a') + ' for ' + m('a = (2, 3, 6)') + '.',
    m('A(0, 1, −2)') + ', ' + m('B(6, 5, 4)') + '. Find ' + m('AB') + ', ' + m('|AB|') + ' and the midpoint.',
    'Find ' + m('k') + ' so that ' + m('|(k, 4, 3)| = 13') + '.',
    'Explain in three sentences the difference between the point ' + m('(2,3,4)') + ' and the vector ' + m('(2,3,4)') + '.'
  ]
});

/* ============================== 3 ============================== */
G11_GEO.push({
  id: 'g11-03', stream: 'geo', grade: 11, quarter: 1, lessons: '6', hours: 1,
  title: 'Collinear and coplanar vectors',
  subtitle: 'Two tests, both from the definition: one scalar for collinearity, two for coplanarity.',
  uz: 'Geometry 11, §3', uzPage: 'pp. 29–34',
  cam: 'P1 · vectors', camPage: 'Core & Extended, pp. 335–338', wb: 'Exercise 3.1',
  objectives: [
    'Test two vectors for parallelism.',
    'Prove three points are collinear using vectors.',
    'Express a vector as a linear combination of two others.',
    'Decide whether three vectors are coplanar.'
  ],
  terms: [
    ['Collinear vectors', 'Kollinear vektorlar', 'Коллинеарные векторы'],
    ['Coplanar vectors', 'Komplanar vektorlar', 'Компланарные векторы'],
    ['Linear combination', 'Chiziqli kombinatsiya', 'Линейная комбинация'],
    ['Parallel vectors', 'Parallel vektorlar', 'Параллельные векторы'],
    ['Decomposition', 'Yoyish', 'Разложение'],
    ['Linearly independent', 'Chiziqli erkli', 'Линейно независимые'],
    ['Scalar coefficient', 'Skalyar koeffitsient', 'Скалярный коэффициент'],
    ['Common point', 'Umumiy nuqta', 'Общая точка']
  ],
  timing: [[8, 'Collinearity'], [12, 'Proving three points collinear'], [14, 'Coplanarity'], [8, 'Practice'], [3, 'Homework']],
  sections: [
    {
      h: 'Collinear vectors',
      html: `<div class="keybox"><div class="klabel">The test</div>
      ${m('a')} and ${m('b')} are <b>collinear</b> (parallel) exactly when ${m('b = ka')} for some
      scalar ${m('k')} — equivalently, when their components are in a constant ratio:
      ${m(f('b₁', 'a₁') + ' = ' + f('b₂', 'a₂') + ' = ' + f('b₃', 'a₃'))}.</div>
      <p>${m('(2, −4, 6)')} and ${m('(1, −2, 3)')} are collinear with ${m('k = 2')}.
      ${m('(1, 2, 3)')} and ${m('(2, 4, 5)')} are not: the first two ratios give ${m('2')} but the third
      gives ${m(f('5', '3'))}.</p>
      <div class="warn"><span class="wl">All three ratios, not two</span>
      Two agreeing ratios prove nothing. This is exactly how a “parallel” answer goes wrong.</div>`
    },
    {
      h: 'Three points collinear',
      html: `<p>Points ${m('A, B, C')} lie on one line exactly when ${m('AB')} and ${m('AC')} are
      collinear vectors — they already share the point ${m('A')}, so a common direction is enough.</p>
      ${eq(m('A(1,2,3), B(3,5,7), C(7,11,15):  AB = (2,3,4),  AC = (6,9,12) = 3AB'), true)}
      <p>So the three are collinear, and ${m('AB : BC = 1 : 2')}.</p>`
    },
    {
      h: 'Coplanar vectors',
      html: `<div class="keybox"><div class="klabel">The test</div>
      Three vectors are <b>coplanar</b> when one is a linear combination of the other two:
      ${m('c = αa + βb')}. Geometrically, all three can be drawn in one plane.</div>
      <p><b>Method.</b> Write the equation componentwise, giving three equations in ${m('α')} and
      ${m('β')}. Solve two of them and check the third. If it holds, they are coplanar; if it fails,
      they are not.</p>
      ${eq(m('c = αa + βb  ⇒  three equations, two unknowns  ⇒  check for consistency'), true)}
      <p>Two vectors are always coplanar — two directions determine a plane. Coplanarity only becomes a
      real question with three.</p>`
    }
  ],
  examples: [
    {
      q: 'Are ' + m('a = (2, −6, 4)') + ' and ' + m('b = (−3, 9, −6)') + ' collinear?',
      steps: [
        [m(f('−3', '2') + ' = −1.5'), ''],
        [m(f('9', '−6') + ' = −1.5'), ''],
        [m(f('−6', '4') + ' = −1.5'), 'All three agree.']
      ],
      ans: 'Yes, with ' + m('b = −1.5a')
    },
    {
      q: 'Are ' + m('A(1,0,2)') + ', ' + m('B(3,2,4)') + ', ' + m('C(6,5,7)') + ' collinear?',
      steps: [
        [m('AB = (2,2,2)'), ''],
        [m('AC = (5,5,5)'), ''],
        [m('AC = 2.5 AB'), '']
      ],
      ans: 'Yes'
    },
    {
      q: 'Are ' + m('a = (1,0,1)') + ', ' + m('b = (0,1,1)') + ', ' + m('c = (2,3,5)') + ' coplanar?',
      steps: [
        [m('c = αa + βb'), ''],
        [m('α = 2') + ' from the first component.', ''],
        [m('β = 3') + ' from the second.', ''],
        ['Third: ' + m('α + β = 5') + ' ✓', '']
      ],
      ans: 'Yes — ' + m('c = 2a + 3b')
    }
  ],
  modelNote: 'Draw two vectors, then a third, and ask whether a sheet of paper can hold all three.',
  interactive: {
    type: 'vectors',
    title: 'Combining vectors',
    hint: 'Scale and add, and see whether the third arrow can be reached.'
  },
  quiz: [
    { q: m('a') + ' and ' + m('b') + ' are collinear when:', a: [m('a = b'), m('b = ka'), m('|a| = |b|'), 'always'], c: 1, why: 'One is a multiple of the other.' },
    { q: m('(1,2,3)') + ' and ' + m('(2,4,6)') + ' are:', a: ['collinear', 'perpendicular', 'coplanar only', 'unrelated'], c: 0, why: m('k = 2') + '.' },
    { q: 'Three vectors are coplanar when:', a: ['all are parallel', 'one is a combination of the others', 'all are unit vectors', 'never'], c: 1, why: 'They fit in one plane.' },
    { q: 'Two vectors are:', a: ['never coplanar', 'always coplanar', 'sometimes coplanar', 'always collinear'], c: 1, why: 'Two directions determine a plane.' }
  ],
  practice: {
    easy: [
      ['Are ' + m('(1,2,3)') + ' and ' + m('(3,6,9)') + ' collinear?', 'yes'],
      ['Are ' + m('(1,2,3)') + ' and ' + m('(2,4,7)') + ' collinear?', 'no'],
      ['Find ' + m('k') + ': ' + m('(4,8,12) = k(1,2,3)'), m('k = 4')],
      ['Are ' + m('(0,0,1)') + ' and ' + m('(0,0,−5)') + ' collinear?', 'yes'],
      ['Are two vectors always coplanar?', 'yes'],
      ['Is ' + m('(2,2,2)') + ' parallel to ' + m('(1,1,1)') + '?', 'yes'],
      [m('AB = (1,1,1)') + ', ' + m('AC = (3,3,3)') + '. Are the points collinear?', 'yes']
    ],
    med: [
      ['Are ' + m('A(1,0,2), B(3,2,4), C(6,5,7)') + ' collinear?', 'yes'],
      ['Are ' + m('A(0,0,0), B(1,1,1), C(2,2,3)') + ' collinear?', 'no'],
      ['Find ' + m('t') + ' so ' + m('(2, t, 6)') + ' is parallel to ' + m('(1, 3, 3)'), m('t = 6')],
      ['Is ' + m('(2,3,5)') + ' in the plane of ' + m('(1,0,1)') + ' and ' + m('(0,1,1)') + '?', 'yes'],
      ['Express ' + m('(3,4,7)') + ' from ' + m('(1,0,1)') + ' and ' + m('(0,1,1)'), m('3a + 4b')],
      ['Are ' + m('(1,0,0), (0,1,0), (0,0,1)') + ' coplanar?', 'no'],
      ['Find the ratio ' + m('AB : BC') + ' for ' + m('A(1,2,3), B(3,5,7), C(7,11,15)'), m('1 : 2')]
    ],
    hard: [
      ['Are ' + m('(1,2,1), (2,1,3), (4,5,5)') + ' coplanar?', 'yes — ' + m('c = 2a + b')],
      ['Are ' + m('(1,1,0), (0,1,1), (1,0,2)') + ' coplanar?', 'no'],
      ['Find ' + m('λ') + ' so ' + m('(1,2,λ)') + ' is coplanar with ' + m('(1,0,1)') + ' and ' + m('(0,1,1)'), m('λ = 3')],
      ['Prove the midpoints of the sides of a space quadrilateral form a parallelogram', 'Each midline equals ' + m(f('1', '2')) + ' of a diagonal'],
      ['Prove the medians of a triangle are concurrent using vectors', 'All meet at ' + m(f('a + b + c', '3'))],
      ['Show that if ' + m('c = αa + βb') + ' then ' + m('a, b, c') + ' cannot span space', 'They lie in the plane of ' + m('a') + ' and ' + m('b')],
      ['Find ' + m('P') + ' on ' + m('AB') + ' with ' + m('AP : PB = 2:3') + ' for ' + m('A(1,1,1), B(6,11,16)'), m('(3, 5, 7)')]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Check all three ratios, never two.',
  homework: [
    'Are ' + m('(3, −6, 9)') + ' and ' + m('(−2, 4, −6)') + ' collinear? Show the ratios.',
    'Are ' + m('A(2,1,0)') + ', ' + m('B(4,4,3)') + ', ' + m('C(8,10,9)') + ' collinear? Give ' + m('AB : BC') + '.',
    'Show that ' + m('(3, 5, 8)') + ' is coplanar with ' + m('(1, 1, 2)') + ' and ' + m('(1, 3, 4)') + '.',
    'Find ' + m('λ') + ' so that ' + m('(2, λ, 5)') + ' is coplanar with ' + m('(1, 0, 1)') + ' and ' + m('(0, 1, 2)') + '.'
  ]
});

/* ============================== 4 ============================== */
G11_GEO.push({
  id: 'g11-04', stream: 'geo', grade: 11, quarter: 1, lessons: '7–8', hours: 2,
  title: 'The scalar product, magnitude and the angle between vectors',
  subtitle: 'One multiplication that returns a number instead of a vector — and answers every angle question in space.',
  uz: 'Geometry 11, §4', uzPage: 'pp. 35–46',
  cam: 'P1 · scalar product', camPage: 'Core & Extended, pp. 339–348', wb: 'Exercise 4.1',
  objectives: [
    'Compute the scalar product from components and from magnitudes and the angle.',
    'Find the angle between two vectors.',
    'Test two vectors for perpendicularity.',
    'Find the projection of one vector on another.'
  ],
  terms: [
    ['Scalar (dot) product', 'Skalyar ko‘paytma', 'Скалярное произведение'],
    ['Angle between vectors', 'Vektorlar orasidagi burchak', 'Угол между векторами'],
    ['Perpendicular vectors', 'Perpendikulyar vektorlar', 'Перпендикулярные векторы'],
    ['Orthogonal', 'Ortogonal', 'Ортогональные'],
    ['Projection', 'Proyeksiya', 'Проекция'],
    ['Commutative', 'Kommutativ', 'Коммутативное'],
    ['Distributive', 'Distributiv', 'Дистрибутивное'],
    ['Direction cosines', 'Yo‘naltiruvchi kosinuslar', 'Направляющие косинусы'],
    ['Work done', 'Bajarilgan ish', 'Работа силы']
  ],
  timing: [[12, 'Two formulas for one product'], [20, 'The angle formula'], [20, 'Perpendicularity'], [18, 'Projections'], [20, 'Practice'], [10, 'Homework']],
  sections: [
    {
      h: 'Two formulas, one number',
      html: `${eq(m('a · b = a₁b₁ + a₂b₂ + a₃b₃') + '     and     ' + m('a · b = |a||b| cos θ'), true)}
      <p>The first computes it; the second interprets it. Setting them equal is what makes the angle
      findable.</p>
      {{fig:scalarAngle:Two vectors and the angle between them, drawn from a common start point.}}
      <div class="keybox"><div class="klabel">The result is a number</div>
      ${m('a · b')} is a <b>scalar</b>, not a vector. Expressions like ${m('(a · b) · c')} as a further
      dot product are meaningless — you cannot dot a number with a vector.</div>
      <p>Properties: ${m('a · b = b · a')}, ${m('a · (b + c) = a · b + a · c')}, and
      ${m('a · a = |a|²')} — which gives a second way to find a magnitude.</p>`
    },
    {
      h: 'The angle',
      html: `${eq(m('cos θ = ' + f('a · b', '|a||b|')), true)}
      <p>For ${m('a = (1, 2, 2)')} and ${m('b = (2, −1, 2)')}:</p>
      ${eq(m('a · b = 2 − 2 + 4 = 4,   |a| = 3,   |b| = 3   ⇒   cos θ = ' + f('4', '9') + '  ⇒  θ ≈ 63.6°'), false)}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">a · b</th><th>Angle</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td class="m">&gt; 0</td><td class="m">θ &lt; 90°</td><td>the vectors point broadly the same way</td></tr>
        <tr><td class="m">= 0</td><td class="m">θ = 90°</td><td>perpendicular</td></tr>
        <tr><td class="m">&lt; 0</td><td class="m">θ &gt; 90°</td><td>broadly opposite</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The sign alone tells you a lot</span>
      Before computing an angle, look at the sign of ${m('a · b')}. A negative dot product with a
      final answer of ${m('40°')} is a certain arithmetic error.</div>`
    },
    {
      h: 'Perpendicularity',
      html: `<div class="keybox"><div class="klabel">The single most used consequence</div>
      ${m('a ⊥ b  ⟺  a · b = 0')} (for non-zero vectors). No angles, no roots — one line of arithmetic.</div>
      <p>${m('(1, 2, −1)')} and ${m('(3, −1, 1)')}: ${m('3 − 2 − 1 = 0')}, so they are perpendicular.</p>
      <p>This is the test used for every right angle in the rest of the course — the diagonals of a
      rhombus, the edges of a cuboid, a line perpendicular to a plane.</p>`
    },
    {
      h: 'Projection',
      html: `<p>The <b>projection</b> of ${m('a')} on ${m('b')} is the length of the shadow ${m('a')} casts
      along the direction of ${m('b')}:</p>
      ${eq(m('proj = |a| cos θ = ' + f('a · b', '|b|')), true)}
      <p>For ${m('a = (3, 4, 0)')} on ${m('b = (1, 0, 0)')}: ${m(f('3', '1') + ' = 3')} — the
      ${m('x')}-component, exactly as expected.</p>
      <p>In physics the work done by a force ${m('F')} over a displacement ${m('s')} is ${m('F · s')} —
      the same idea, and the reason the scalar product was invented.</p>`
    }
  ],
  examples: [
    {
      q: 'Find the angle between ' + m('a = (2, 1, −2)') + ' and ' + m('b = (1, 2, 2)') + '.',
      steps: [
        [m('a · b = 2 + 2 − 4 = 0'), ''],
        ['A zero dot product.', ''],
        ['No further work is needed.', '']
      ],
      ans: m('90°') + ' — they are perpendicular'
    },
    {
      q: 'Find the angle between ' + m('a = (1, 1, 0)') + ' and ' + m('b = (1, 0, 1)') + '.',
      steps: [
        [m('a · b = 1'), ''],
        [m('|a| = |b| = ' + sr('2')), ''],
        [m('cos θ = ' + f('1', '2')), ''],
        [m('θ = 60°'), '']
      ],
      ans: m('60°')
    },
    {
      q: 'Find ' + m('t') + ' so that ' + m('(t, 2, 3)') + ' and ' + m('(4, t, −6)') + ' are perpendicular.',
      steps: [
        [m('4t + 2t − 18 = 0'), ''],
        [m('6t = 18'), ''],
        [m('t = 3'), '']
      ],
      ans: m('t = 3')
    }
  ],
  modelNote: 'Rotate one vector and watch the dot product pass through zero exactly at the right angle.',
  interactive: {
    type: 'vectors',
    title: 'The angle between two vectors',
    hint: 'Move the arrows and read the dot product and the angle.'
  },
  quiz: [
    { q: m('a · b') + ' is:', a: ['a vector', 'a scalar', 'an angle', 'a matrix'], c: 1, why: 'It returns a number.' },
    { q: m('(1,2,3) · (4,5,6)') + ' is:', a: [m('32'), m('12'), m('21'), m('90')], c: 0, why: m('4 + 10 + 18') + '.' },
    { q: m('a · b = 0') + ' means:', a: ['parallel', 'perpendicular', 'equal', 'opposite'], c: 1, why: m('cos 90° = 0') + '.' },
    { q: m('a · a') + ' equals:', a: [m('0'), m('|a|'), m('|a|²'), m('2a')], c: 2, why: m('θ = 0') + ' and ' + m('cos 0 = 1') + '.' },
    { q: 'If ' + m('a · b < 0') + ' the angle is:', a: ['acute', 'right', 'obtuse', 'zero'], c: 2, why: m('cos θ < 0') + '.' }
  ],
  practice: {
    easy: [
      [m('(1,0,0) · (0,1,0)'), m('0')],
      [m('(1,2,3) · (1,1,1)'), m('6')],
      [m('(2,0,1) · (3,4,5)'), m('11')],
      [m('(1,1,1) · (1,1,1)'), m('3')],
      ['Are ' + m('(1,0,0)') + ' and ' + m('(0,0,1)') + ' perpendicular?', 'yes'],
      ['Angle between ' + m('(1,0,0)') + ' and ' + m('(1,0,0)'), m('0°')],
      ['Angle between ' + m('(1,0,0)') + ' and ' + m('(−1,0,0)'), m('180°')]
    ],
    med: [
      ['Angle between ' + m('(1,1,0)') + ' and ' + m('(1,0,1)'), m('60°')],
      ['Angle between ' + m('(1,2,2)') + ' and ' + m('(2,−1,2)'), m('≈ 63.6°')],
      ['Are ' + m('(2,1,−2)') + ' and ' + m('(1,2,2)') + ' perpendicular?', 'yes'],
      ['Find ' + m('t') + ': ' + m('(t,2,3) ⊥ (4,t,−6)'), m('t = 3')],
      ['Projection of ' + m('(3,4,0)') + ' on ' + m('(1,0,0)'), m('3')],
      ['Projection of ' + m('(1,2,2)') + ' on ' + m('(0,0,1)'), m('2')],
      [m('|a| = 5, |b| = 4, θ = 60°') + '; find ' + m('a · b'), m('10')]
    ],
    hard: [
      ['Angle between the space diagonal and an edge of a unit cube', m('≈ 54.7°')],
      ['Angle between two space diagonals of a unit cube', m('≈ 70.5°')],
      ['Angle between a face diagonal and a space diagonal', m('≈ 35.26°')],
      ['Find ' + m('t') + ' so ' + m('(1, t, 2)') + ' makes ' + m('60°') + ' with ' + m('(1, 0, 0)'), m('t = ±' + sr('11'))],
      ['Prove ' + m('|a + b|² = |a|² + 2a·b + |b|²'), 'Expand ' + m('(a+b)·(a+b)')],
      ['Deduce the cosine rule from the scalar product', m('|a−b|² = |a|² + |b|² − 2|a||b|cos θ')],
      ['Prove the diagonals of a rhombus are perpendicular using vectors', m('(a+b)·(a−b) = |a|² − |b|² = 0')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Check the sign of ' + m('a · b') + ' against your final angle every time.',
  homework: [
    'Find ' + m('a · b') + ' and the angle for ' + m('a = (2, −1, 3)') + ', ' + m('b = (1, 4, 1)') + '.',
    'Find ' + m('t') + ' so that ' + m('(3, t, −1)') + ' and ' + m('(2, 1, 5)') + ' are perpendicular.',
    'Find the angle between the space diagonal of a cube and one of its edges.',
    'Find the projection of ' + m('(4, 3, 0)') + ' on ' + m('(0, 1, 0)') + '.',
    'Prove that ' + m('a · a = |a|²') + ' and use it to find ' + m('|(2, 3, 6)|') + '.'
  ]
});

/* ============================== 5 ============================== */
G11_GEO.push({
  id: 'g11-05', stream: 'geo', grade: 11, quarter: 1, lessons: '9', hours: 1,
  title: 'Transformations in space',
  subtitle: 'Translation, reflection, rotation and enlargement — the plane transformations, each with one more coordinate.',
  uz: 'Geometry 11, §5', uzPage: 'pp. 47–52',
  cam: 'IGCSE E7.2', camPage: 'Core & Extended, pp. 349–354', wb: 'Exercise 5.1',
  objectives: [
    'Apply a translation, a reflection in a coordinate plane and an enlargement in space.',
    'Write the coordinate rule for each transformation.',
    'Recognise which transformations preserve length and which do not.',
    'Compose two transformations.'
  ],
  terms: [
    ['Transformation', 'Almashtirish', 'Преобразование'],
    ['Translation', 'Parallel ko‘chirish', 'Параллельный перенос'],
    ['Reflection in a plane', 'Tekislikka nisbatan akslantirish', 'Отражение относительно плоскости'],
    ['Rotation about an axis', 'O‘q atrofida burish', 'Поворот вокруг оси'],
    ['Enlargement (dilation)', 'Gomotetiya', 'Гомотетия'],
    ['Centre of enlargement', 'Gomotetiya markazi', 'Центр гомотетии'],
    ['Isometry', 'Izometriya', 'Изометрия'],
    ['Invariant point', 'O‘zgarmas nuqta', 'Неподвижная точка'],
    ['Image', 'Tasvir', 'Образ']
  ],
  timing: [[8, 'Four transformations'], [14, 'Coordinate rules'], [12, 'Isometries'], [8, 'Composition'], [3, 'Homework']],
  sections: [
    {
      h: 'Four transformations, four rules',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Transformation</th><th>Rule</th><th>Preserves length?</th></tr></thead>
      <tbody>
        <tr><td>translation by ${m('(p, q, r)')}</td><td class="m">(x + p, y + q, z + r)</td><td>yes</td></tr>
        <tr><td>reflection in ${m('z = 0')}</td><td class="m">(x, y, −z)</td><td>yes</td></tr>
        <tr><td>reflection in ${m('y = 0')}</td><td class="m">(x, −y, z)</td><td>yes</td></tr>
        <tr><td>reflection in the ${m('z')}-axis</td><td class="m">(−x, −y, z)</td><td>yes</td></tr>
        <tr><td>reflection in the origin</td><td class="m">(−x, −y, −z)</td><td>yes</td></tr>
        <tr><td>rotation ${m('90°')} about ${m('Oz')}</td><td class="m">(−y, x, z)</td><td>yes</td></tr>
        <tr><td>enlargement, centre ${m('O')}, factor ${m('k')}</td><td class="m">(kx, ky, kz)</td><td>no — scaled by ${m('|k|')}</td></tr>
      </tbody></table></div>
      {{fig:reflectInPlane:A point and its image in the plane z = 0. Only the third coordinate changes sign.}}`
    },
    {
      h: 'Isometries',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      An <b>isometry</b> is a transformation preserving distance: ${m("|A′B′| = |AB|")} for every pair.
      Translations, reflections and rotations are isometries; enlargements with ${m('|k| ≠ 1')} are not.</div>
      <p>Isometries preserve everything that depends only on distance — angles, areas, volumes,
      congruence. An enlargement of factor ${m('k')} multiplies lengths by ${m('|k|')}, areas by
      ${m('k²')} and volumes by ${m('|k|³')}.</p>
      <div class="warn"><span class="wl">A reflection reverses orientation</span>
      A right-handed screw becomes left-handed in a mirror. That is why a reflection cannot be achieved
      by any rotation, however clever.</div>`
    },
    {
      h: 'Composition',
      html: `<p>Applying two transformations in turn is itself a transformation. Two reflections in
      <b>parallel</b> planes give a translation of twice the gap; two reflections in <b>intersecting</b>
      planes give a rotation about their line of intersection, through twice the angle between them.</p>
      ${eq('reflect in ' + m('z = 0') + ', then in ' + m('z = 3') + '  ⟹  translation by ' + m('(0, 0, 6)'), true)}
      <p>Composition is not commutative in general: reflecting then translating is not the same as
      translating then reflecting.</p>`
    }
  ],
  examples: [
    {
      q: 'Find the image of ' + m('A(2, −3, 5)') + ' under reflection in the plane ' + m('y = 0') + ', then a translation by ' + m('(1, 1, 1)') + '.',
      steps: [
        ['Reflection: ' + m('(2, 3, 5)') + '.', ''],
        ['Translation: ' + m('(3, 4, 6)') + '.', '']
      ],
      ans: m('(3, 4, 6)')
    },
    {
      q: 'A solid of volume ' + m('40') + ' cm³ is enlarged by factor ' + m('3') + '. Find the new volume.',
      steps: [
        ['Volumes scale by ' + m('k³') + '.', ''],
        [m('27 × 40'), '']
      ],
      ans: m('1080') + ' cm³'
    },
    {
      q: 'What single transformation results from reflecting in ' + m('x = 0') + ' then in ' + m('x = 4') + '?',
      steps: [
        [m('(x,y,z) → (−x,y,z)'), ''],
        [m('→ (8 + x, y, z)'), 'Reflection in ' + m('x = 4') + ' sends ' + m('u') + ' to ' + m('8 − u') + '.'],
        ['Net effect: add 8 to ' + m('x') + '.', '']
      ],
      ans: 'Translation by ' + m('(8, 0, 0)')
    }
  ],
  modelNote: 'Reflect a shoe in a mirror to show that no rotation can reproduce a reflection.',
  interactive: {
    type: 'transform',
    title: 'Transforming a figure',
    hint: 'Apply each transformation and watch the coordinates change.'
  },
  quiz: [
    { q: 'Reflection in ' + m('z = 0') + ' sends ' + m('(x,y,z)') + ' to:', a: [m('(−x,y,z)'), m('(x,−y,z)'), m('(x,y,−z)'), m('(−x,−y,−z)')], c: 2, why: 'Only the height flips.' },
    { q: 'An enlargement of factor 2 multiplies volume by:', a: [m('2'), m('4'), m('8'), m('16')], c: 2, why: m('k³') + '.' },
    { q: 'Which is not an isometry?', a: ['translation', 'reflection', 'rotation', 'enlargement of factor 3'], c: 3, why: 'It changes lengths.' },
    { q: 'Two reflections in parallel planes give:', a: ['a rotation', 'a translation', 'an enlargement', 'the identity'], c: 1, why: 'Twice the gap.' },
    { q: 'Reflection in the origin sends ' + m('(1,2,3)') + ' to:', a: [m('(−1,2,3)'), m('(1,−2,−3)'), m('(−1,−2,−3)'), m('(3,2,1)')], c: 2, why: 'All three signs change.' }
  ],
  practice: {
    easy: [
      ['Image of ' + m('(1,2,3)') + ' under reflection in ' + m('z = 0'), m('(1,2,−3)')],
      ['Image under reflection in ' + m('x = 0'), m('(−1,2,3)')],
      ['Image under reflection in the origin', m('(−1,−2,−3)')],
      ['Image under translation ' + m('(2,2,2)'), m('(3,4,5)')],
      ['Image under enlargement factor 2, centre ' + m('O'), m('(2,4,6)')],
      ['Volume scale factor for ' + m('k = 3'), m('27')],
      ['Area scale factor for ' + m('k = 4'), m('16')]
    ],
    med: [
      ['Reflect ' + m('(2,−3,5)') + ' in ' + m('y = 0') + ', then translate by ' + m('(1,1,1)'), m('(3,4,6)')],
      ['Rotate ' + m('(1,0,4)') + ' by ' + m('90°') + ' about ' + m('Oz'), m('(0,1,4)')],
      ['Two reflections in ' + m('x = 0') + ' and ' + m('x = 4'), 'translation by ' + m('(8,0,0)')],
      ['A solid of volume 40 enlarged by 3 — new volume', m('1080')],
      ['Surface area 24 enlarged by 5 — new area', m('600')],
      ['Image of ' + m('(4, −2, 6)') + ' under enlargement factor ' + m('−' + f('1', '2')), m('(−2, 1, −3)')],
      ['Is reflection an isometry?', 'yes']
    ],
    hard: [
      ['Find the reflection of ' + m('(1,2,3)') + ' in the plane ' + m('z = 5'), m('(1,2,7)')],
      ['Find the reflection of ' + m('(3,1,2)') + ' in the plane ' + m('x = −1'), m('(−5,1,2)')],
      ['Two reflections in planes at ' + m('30°') + ' — what results?', 'A rotation of ' + m('60°')],
      ['A cube of side 4 is enlarged so its volume becomes 1728. Find ' + m('k'), m('k = 3')],
      ['Show that composing two translations gives a translation', 'Add the vectors'],
      ['Why can no rotation reproduce a reflection?', 'Rotations preserve orientation; reflections reverse it'],
      ['Find the centre of an enlargement mapping ' + m('(2,2,2)') + ' to ' + m('(6,6,6)') + ' with ' + m('k = 3'), m('(0,0,0)')]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Write the coordinate rule beside every image you find.',
  homework: [
    'Find the image of ' + m('(3, −1, 4)') + ' under reflection in each of the three coordinate planes.',
    'Find the image of ' + m('(2, 5, −1)') + ' under enlargement of factor ' + m('−2') + ' about the origin.',
    'A solid has volume ' + m('54') + ' cm³ and surface area ' + m('90') + ' cm². Find both after an enlargement of factor ' + m('2') + '.',
    'What single transformation is equivalent to reflecting in ' + m('y = 0') + ' and then in ' + m('y = 3') + '?'
  ]
});

/* ============================== 6 ============================== */
G11_GEO.push({
  id: 'g11-06', stream: 'geo', grade: 11, quarter: 1, lessons: '10–11', hours: 2,
  title: 'Symmetry in space',
  subtitle: 'Central, axial and plane symmetry — the three kinds, their coordinate rules, and how to count them on a solid.',
  uz: 'Geometry 11, §6', uzPage: 'pp. 53–64',
  cam: 'IGCSE E4.6', camPage: 'Core & Extended, pp. 355–362', wb: 'Exercise 6.1',
  objectives: [
    'Distinguish central, axial and plane symmetry.',
    'Write the coordinate rule for each and apply it.',
    'Count the symmetries of a given solid.',
    'Use symmetry to shorten a calculation or a proof.'
  ],
  terms: [
    ['Central symmetry', 'Markaziy simmetriya', 'Центральная симметрия'],
    ['Axial symmetry', 'O‘qqa nisbatan simmetriya', 'Осевая симметрия'],
    ['Plane symmetry', 'Tekislikka nisbatan simmetriya', 'Зеркальная симметрия'],
    ['Centre of symmetry', 'Simmetriya markazi', 'Центр симметрии'],
    ['Axis of symmetry', 'Simmetriya o‘qi', 'Ось симметрии'],
    ['Plane of symmetry', 'Simmetriya tekisligi', 'Плоскость симметрии'],
    ['Order of symmetry', 'Simmetriya tartibi', 'Порядок симметрии'],
    ['Symmetric figure', 'Simmetrik shakl', 'Симметричная фигура'],
    ['Symmetry group', 'Simmetriya guruhi', 'Группа симметрии']
  ],
  timing: [[10, 'Three kinds'], [20, 'Coordinate rules'], [24, 'Counting on solids'], [20, 'Symmetry as a shortcut'], [14, 'Practice'], [2, 'Homework']],
  sections: [
    {
      h: 'Three kinds of symmetry',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Kind</th><th>Fixed object</th><th>Rule (about the origin / axes)</th></tr></thead>
      <tbody>
        <tr><td>central</td><td>a point</td><td class="m">(x, y, z) → (−x, −y, −z)</td></tr>
        <tr><td>axial (order 2)</td><td>a line</td><td class="m">(x, y, z) → (−x, −y, z) about ${m('Oz')}</td></tr>
        <tr><td>plane (mirror)</td><td>a plane</td><td class="m">(x, y, z) → (x, y, −z) in ${m('z = 0')}</td></tr>
      </tbody></table></div>
      {{fig:symmetry3D:The same cuboid, seen through a plane of symmetry and turned about an axis.}}
      <div class="keybox"><div class="klabel">Central symmetry is a half-turn plus a mirror</div>
      In space, ${m('(x,y,z) → (−x,−y,−z)')} equals a ${m('180°')} rotation about ${m('Oz')} followed by
      a reflection in ${m('z = 0')}. It reverses orientation, so it is not a rotation.</div>`
    },
    {
      h: 'Counting on solids',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Solid</th><th>Centre?</th><th>Planes</th><th>Axes</th></tr></thead>
      <tbody>
        <tr><td>cube</td><td>yes</td><td class="m">9</td><td>13</td></tr>
        <tr><td>cuboid, edges different</td><td>yes</td><td class="m">3</td><td>3</td></tr>
        <tr><td>regular tetrahedron</td><td>no</td><td class="m">6</td><td>7</td></tr>
        <tr><td>square-based pyramid</td><td>no</td><td class="m">4</td><td>1</td></tr>
        <tr><td>regular hexagonal prism</td><td>yes</td><td class="m">7</td><td>7</td></tr>
        <tr><td>sphere</td><td>yes</td><td>infinitely many</td><td>infinitely many</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A pyramid has no centre of symmetry</span>
      The apex would have to map to a point of the base, and there is nothing there. Any solid with a
      centre has every point paired with an opposite one — so a pyramid, a cone and a tetrahedron all
      fail.</div>`
    },
    {
      h: 'Symmetry as a tool',
      html: `<p>Three uses that save real work:</p>
      <ul>
        <li>The <b>centre of mass</b> lies on every plane and axis of symmetry — so at their intersection.</li>
        <li>Two lengths or angles symmetric about a plane are <b>equal</b>, with no calculation.</li>
        <li>A section perpendicular to an axis of order ${m('n')} repeats ${m('n')} times, so one
        computation covers ${m('n')} cases.</li>
      </ul>
      <p><b>Example.</b> The centre of a cube with opposite vertices ${m('(0,0,0)')} and ${m('(6,6,6)')}
      is ${m('(3,3,3)')} — by symmetry, in one line, with no distance formula.</p>`
    }
  ],
  examples: [
    {
      q: 'Find the image of ' + m('(2, −3, 4)') + ' under central symmetry about the origin, and about ' + m('(1, 1, 1)') + '.',
      steps: [
        ['About ' + m('O') + ': negate all.', m('(−2, 3, −4)')],
        ['About ' + m('C') + ': ' + m("P′ = 2C − P") + '.', ''],
        [m('(2 − 2, 2 + 3, 2 − 4)'), '']
      ],
      ans: m('(−2, 3, −4)') + ' and ' + m('(0, 5, −2)')
    },
    {
      q: 'How many planes of symmetry has a regular hexagonal prism?',
      steps: [
        ['The hexagon has 6 lines of symmetry.', '6 vertical planes.'],
        ['One horizontal plane halfway up.', '']
      ],
      ans: m('7')
    },
    {
      q: 'Does a square-based pyramid have a centre of symmetry?',
      steps: [
        ['A centre pairs every point with an opposite.', ''],
        ['The apex would need a matching point below the base.', 'There is none.']
      ],
      ans: 'No'
    }
  ],
  modelNote: 'Hold a cuboid box and find each plane, then each axis, and count aloud.',
  interactive: {
    type: 'quiz',
    title: 'Counting symmetry in space',
    hint: 'Planes cut into mirror halves; axes are lines to turn about.',
    items: [
      { q: 'Central symmetry sends ' + m('(1,2,3)') + ' to:', a: [m('(−1,2,3)'), m('(1,−2,3)'), m('(−1,−2,−3)'), m('(3,2,1)')], c: 2, why: 'All three signs change.' },
      { q: 'A cube has how many planes of symmetry?', a: [m('3'), m('6'), m('9'), m('12')], c: 2, why: '3 face, 6 edge.' },
      { q: 'A square pyramid has a centre of symmetry:', a: ['yes', 'no', 'sometimes', 'only if regular'], c: 1, why: 'The apex has no partner.' },
      { q: 'A regular hexagonal prism has how many planes?', a: [m('6'), m('7'), m('12'), m('13')], c: 1, why: '6 vertical, 1 horizontal.' },
      { q: 'The centre of mass lies on:', a: ['no axis', 'every plane of symmetry', 'the base', 'the apex'], c: 1, why: 'Symmetry forces it there.' }
    ]
  },
  quiz: [
    { q: 'Central symmetry about ' + m('C') + ' sends ' + m('P') + ' to:', a: [m('C − P'), m('2C − P'), m('P − C'), m('−P')], c: 1, why: m('C') + ' is the midpoint of ' + m("PP′") + '.' },
    { q: 'Reflection in ' + m('z = 0') + ' changes:', a: [m('x'), m('y'), m('z'), 'all three'], c: 2, why: 'Only the height.' },
    { q: 'Which solid has no centre of symmetry?', a: ['cube', 'cuboid', 'sphere', 'tetrahedron'], c: 3, why: 'Its vertices have no opposites.' },
    { q: 'A cuboid with all edges different has how many axes?', a: [m('0'), m('1'), m('3'), m('9')], c: 2, why: 'Three, each of order 2.' }
  ],
  practice: {
    easy: [
      ['Central image of ' + m('(1,2,3)'), m('(−1,−2,−3)')],
      ['Plane image of ' + m('(1,2,3)') + ' in ' + m('z = 0'), m('(1,2,−3)')],
      ['Axial image about ' + m('Oz') + ' of ' + m('(1,2,3)'), m('(−1,−2,3)')],
      ['Planes of symmetry of a cube', m('9')],
      ['Planes of a ' + m('2 × 3 × 4') + ' cuboid', m('3')],
      ['Has a sphere a centre of symmetry?', 'yes'],
      ['Has a cone a centre of symmetry?', 'no']
    ],
    med: [
      ['Central image of ' + m('(2,−3,4)') + ' about ' + m('(1,1,1)'), m('(0,5,−2)')],
      ['Planes of a regular hexagonal prism', m('7')],
      ['Planes of a regular tetrahedron', m('6')],
      ['Axes of a cube', m('13')],
      ['Planes of a ' + m('3 × 3 × 8') + ' cuboid', m('5')],
      ['Centre of a cube with opposite vertices ' + m('(0,0,0), (6,6,6)'), m('(3,3,3)')],
      ['Rotational order of a regular pentagonal pyramid', m('5')]
    ],
    hard: [
      ['Prove central symmetry equals a half-turn followed by a mirror', m('(x,y,z) → (−x,−y,z) → (−x,−y,−z)')],
      ['Why has a regular tetrahedron 6 planes but no centre?', 'Each plane holds an edge and bisects the opposite; no vertex has an opposite'],
      ['Find the centre of symmetry of the cuboid with opposite corners ' + m('(1,2,3)') + ' and ' + m('(7,10,15)'), m('(4,6,9)')],
      ['A solid has exactly one plane of symmetry. Sketch one', 'e.g. an isosceles-triangle prism'],
      ['How many symmetries (rotations only) has a cube?', m('24')],
      ['Show that a solid with a centre of symmetry has an even number of vertices', 'They pair up'],
      ['Use symmetry to find the centroid of a regular tetrahedron of side ' + m('a'), 'At ' + m(f('1', '4')) + ' of the height above the base centre']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Sketch each solid and mark the symmetries on the sketch.',
  homework: [
    'Find the image of ' + m('(3, −2, 5)') + ' under central symmetry about ' + m('(0,0,0)') + ' and about ' + m('(2, 1, 3)') + '.',
    'Count the planes and axes of symmetry of a cube, a regular tetrahedron and a ' + m('4 × 4 × 9') + ' cuboid.',
    'Explain why a pyramid can never have a centre of symmetry.',
    'Use symmetry to find the centre of the cuboid with opposite corners ' + m('(−1, 0, 2)') + ' and ' + m('(5, 8, 10)') + '.'
  ]
});

/* ============================== 7 ============================== */
G11_GEO.push({
  id: 'g11-07', stream: 'geo', grade: 11, quarter: 1, lessons: '12', hours: 1,
  title: 'Symmetry in nature and in technology',
  subtitle: 'Where the mathematics of the last two lessons actually appears — in crystals, in living things, and in the things engineers build.',
  uz: 'Geometry 11, §7', uzPage: 'pp. 65–70',
  cam: 'IGCSE E4.6', camPage: 'Core & Extended, pp. 363–366', wb: 'Project sheet S1',
  objectives: [
    'Identify the symmetry of a natural or manufactured object.',
    'Explain why a particular symmetry is useful in a design.',
    'Name the crystal systems by their symmetry.',
    'Present one object and its symmetry to the class.'
  ],
  terms: [
    ['Bilateral symmetry', 'Ikki tomonlama simmetriya', 'Двусторонняя симметрия'],
    ['Radial symmetry', 'Radial simmetriya', 'Радиальная симметрия'],
    ['Crystal lattice', 'Kristall panjara', 'Кристаллическая решётка'],
    ['Unit cell', 'Elementar yacheyka', 'Элементарная ячейка'],
    ['Helix', 'Spiral', 'Спираль'],
    ['Tessellation', 'Parketlash', 'Паркет (замощение)'],
    ['Balance (in design)', 'Muvozanat', 'Равновесие'],
    ['Girih pattern', 'Girih naqshi', 'Гирих'],
    ['Chirality', 'Xirallik', 'Хиральность']
  ],
  timing: [[8, 'Symmetry in living things'], [12, 'Crystals'], [12, 'Engineering and architecture'], [10, 'Uzbek ornament'], [3, 'Homework']],
  sections: [
    {
      h: 'Living things',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Organism</th><th>Symmetry</th><th>Why it helps</th></tr></thead>
      <tbody>
        <tr><td>most animals</td><td>bilateral — one plane</td><td>a front and a direction of travel</td></tr>
        <tr><td>starfish</td><td>radial, order 5</td><td>no preferred direction; food may come from anywhere</td></tr>
        <tr><td>most flowers</td><td>radial, order 3–8</td><td>visible to a pollinator from any side</td></tr>
        <tr><td>snowflake</td><td>radial, order 6</td><td>the hexagonal geometry of the water molecule</td></tr>
        <tr><td>DNA</td><td>a helix — screw symmetry</td><td>compact storage of a long chain</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A useful observation</div>
      Animals that <b>move</b> in a chosen direction are bilaterally symmetric; those that stay put, or
      drift, are radially symmetric. Motion selects a plane; stillness does not.</div>`
    },
    {
      h: 'Crystals',
      html: `<p>A crystal is a lattice — one <b>unit cell</b> repeated by translation in three directions.
      The seven crystal systems are classified purely by their symmetry:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>System</th><th>Cell</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>cubic</td><td>${m('a = b = c')}, all angles ${m('90°')}</td><td>salt, diamond, pyrite</td></tr>
        <tr><td>tetragonal</td><td>${m('a = b ≠ c')}, all ${m('90°')}</td><td>zircon</td></tr>
        <tr><td>orthorhombic</td><td>${m('a ≠ b ≠ c')}, all ${m('90°')}</td><td>sulfur</td></tr>
        <tr><td>hexagonal</td><td>a hexagonal prism cell</td><td>quartz, ice</td></tr>
      </tbody></table></div>
      <p>A cubic cell carries all 9 planes and 13 axes of the cube — which is why salt cleaves into
      little cubes, and why a diamond can be cut along predictable planes.</p>`
    },
    {
      h: 'Engineering, architecture, ornament',
      html: `<ul>
        <li><b>Wheels, gears, turbines</b> — radial symmetry of order ${m('n')} balances the rotating
        mass; an unbalanced wheel destroys its bearing.</li>
        <li><b>Bridges and domes</b> — a plane of symmetry halves the load calculation and makes the
        structure predictable under wind from either side.</li>
        <li><b>Aircraft</b> — bilateral symmetry keeps the centre of mass on the centre line.</li>
        <li><b>Screw threads</b> — helical symmetry; the handedness matters, which is why a
        left-handed bolt is a real and separate object.</li>
      </ul>
      <p><b>Uzbek ornament.</b> The <i>girih</i> patterns of Samarkand and Bukhara are built from a small
      set of tiles with 5- and 10-fold rotational symmetry, repeated by translation. The tilework of the
      Registan is a mathematical object: a plane group, chosen and executed by hand centuries before the
      classification of such groups was written down.</p>
      <div class="keybox"><div class="klabel">The project</div>
      Each learner brings one object — natural or made — photographs or sketches it, and states its
      symmetry precisely: how many planes, how many axes and of what order, and whether it has a centre.
      Two present next lesson.</div>`
    }
  ],
  examples: [
    {
      q: 'State the symmetry of a starfish.',
      steps: [
        ['Five identical arms.', 'Rotational order 5.'],
        ['One mirror line through each arm.', '5 planes in three dimensions.'],
        ['No centre — the top and bottom differ.', '']
      ],
      ans: 'Radial, order 5, with 5 planes; no centre'
    },
    {
      q: 'Why must a turbine blade assembly be rotationally symmetric?',
      steps: [
        ['An asymmetric mass has a centre of mass off the axis.', ''],
        ['That produces a rotating force on the bearings.', ''],
        ['At high speed the force is destructive.', '']
      ],
      ans: 'To keep the centre of mass on the rotation axis and avoid vibration'
    },
    {
      q: 'A salt crystal is cubic. How many planes of symmetry has one grain?',
      steps: [
        ['A cube has 3 face planes.', ''],
        ['And 6 through opposite edges.', '']
      ],
      ans: m('9')
    }
  ],
  modelNote: 'Bring a real object — a nut, a flower, a snowflake photograph — and count its symmetries aloud.',
  interactive: {
    type: 'quiz',
    title: 'Symmetry around us',
    hint: 'Ask what stays fixed when the object is moved onto itself.',
    items: [
      { q: 'Most animals have:', a: ['radial symmetry', 'bilateral symmetry', 'no symmetry', 'a centre of symmetry'], c: 1, why: 'One plane, front to back.' },
      { q: 'A snowflake has rotational order:', a: [m('4'), m('5'), m('6'), m('8')], c: 2, why: 'The hexagonal geometry of ice.' },
      { q: 'A cubic crystal has how many planes?', a: [m('3'), m('6'), m('9'), m('12')], c: 2, why: 'Those of a cube.' },
      { q: 'A screw thread has:', a: ['plane symmetry', 'helical symmetry', 'central symmetry', 'no symmetry'], c: 1, why: 'Rotation combined with translation.' },
      { q: 'Girih patterns commonly show rotational order:', a: [m('3') + ' and ' + m('4'), m('5') + ' and ' + m('10'), m('7'), m('12') + ' only'], c: 1, why: 'The classic Central Asian tiles.' }
    ]
  },
  quiz: [
    { q: 'Radial symmetry suits organisms that:', a: ['move fast forward', 'stay in one place', 'fly', 'burrow'], c: 1, why: 'No preferred direction.' },
    { q: 'A unit cell is:', a: ['a whole crystal', 'the smallest repeating block', 'a plane of symmetry', 'an axis'], c: 1, why: 'Translation repeats it.' },
    { q: 'A left-handed and a right-handed screw are:', a: ['identical', 'mirror images', 'rotations of each other', 'the same object'], c: 1, why: 'Chirality — no rotation maps one to the other.' },
    { q: 'Symmetry in a bridge mainly helps with:', a: ['appearance only', 'load calculation and predictability', 'cost of paint', 'nothing'], c: 1, why: 'It halves the analysis.' }
  ],
  practice: {
    easy: [
      ['Symmetry of a starfish', 'radial, order 5'],
      ['Symmetry of a human body (externally)', 'bilateral, one plane'],
      ['Rotational order of a snowflake', m('6')],
      ['Symmetry of a wheel with 8 spokes', 'radial, order 8'],
      ['Planes of a cubic salt crystal', m('9')],
      ['Symmetry of DNA', 'helical'],
      ['Symmetry of a flower with 5 petals', 'radial, order 5']
    ],
    med: [
      ['Why are aircraft bilaterally symmetric?', 'To keep the centre of mass on the centre line'],
      ['Why must a turbine be radially symmetric?', 'To avoid vibration from an off-axis mass'],
      ['Name two cubic minerals', 'salt, pyrite (also diamond)'],
      ['Which crystal system has ' + m('a = b ≠ c') + ' with right angles?', 'tetragonal'],
      ['What rotational orders appear in girih patterns?', m('5') + ' and ' + m('10')],
      ['Why do most flowers have radial symmetry?', 'Pollinators approach from any direction'],
      ['Give a manufactured object with exactly one plane of symmetry', 'e.g. a chair, a car exterior']
    ],
    hard: [
      ['Explain why 5-fold symmetry cannot tile the plane periodically', 'Pentagons leave gaps; only orders 2, 3, 4, 6 tile'],
      ['How do girih tilings achieve 5-fold local symmetry then?', 'By combining several tile shapes — a quasi-periodic arrangement'],
      ['A crystal has 3 planes and a centre. Which system?', 'orthorhombic'],
      ['Why is chirality important in chemistry?', 'Mirror-image molecules can behave completely differently in the body'],
      ['Design a logo with rotational order 3 and no plane of symmetry', 'e.g. a three-bladed spiral'],
      ['Count the symmetries of a standard hexagonal pencil', '7 planes, 7 axes'],
      ['Why does a soap bubble take a spherical shape?', 'Maximum symmetry minimises surface area for a fixed volume']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Bring your object, or a clear photograph of it, to the next lesson.',
  homework: [
    'Choose one object — natural or manufactured — and state its symmetry precisely: planes, axes with orders, and whether it has a centre.',
    'Photograph or sketch a piece of Uzbek tilework and identify its rotational order.',
    'Explain in three sentences why moving animals are bilaterally symmetric and stationary ones are radially symmetric.',
    'Name the four crystal systems in the lesson with one example each.'
  ]
});

/* ============================== 8 ============================== */
G11_GEO.push({
  id: 'g11-08', stream: 'geo', grade: 11, quarter: 1, lessons: '13', hours: 1,
  title: 'Similarity of spatial figures',
  subtitle: 'One scale factor, three consequences — lengths by k, areas by k², volumes by k³.',
  uz: 'Geometry 11, §8', uzPage: 'pp. 71–76',
  cam: 'IGCSE E4.5', camPage: 'Core & Extended, pp. 367–372', wb: 'Exercise 8.1',
  objectives: [
    'Decide whether two solids are similar.',
    'Apply the k, k², k³ rules to lengths, areas and volumes.',
    'Work backwards from an area or volume ratio to the scale factor.',
    'Solve problems on models, maps and scaled containers.'
  ],
  terms: [
    ['Similar solids', 'O‘xshash jismlar', 'Подобные тела'],
    ['Scale factor', 'O‘xshashlik koeffitsienti', 'Коэффициент подобия'],
    ['Ratio of areas', 'Yuzalar nisbati', 'Отношение площадей'],
    ['Ratio of volumes', 'Hajmlar nisbati', 'Отношение объёмов'],
    ['Corresponding lengths', 'Mos uzunliklar', 'Соответственные длины'],
    ['Model (scale model)', 'Model', 'Модель'],
    ['Enlargement', 'Gomotetiya', 'Гомотетия'],
    ['Linear dimension', 'Chiziqli o‘lcham', 'Линейный размер']
  ],
  timing: [[8, 'What similarity means for solids'], [14, 'The three rules'], [12, 'Working backwards'], [8, 'Applications'], [3, 'Homework']],
  sections: [
    {
      h: 'Similar solids',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      Two solids are <b>similar</b> when one is an enlargement of the other: all corresponding lengths
      are in the same ratio ${m('k')}, and all corresponding angles are equal.</div>
      {{fig:similarSolids:Two cuboids in the ratio 1 : 2. Every edge doubles; the surface quadruples; the volume is eight times.}}
      <p>All cubes are similar. All spheres are similar. Two cuboids are similar only if their three
      edge ratios all agree — a ${m('2 × 3 × 4')} and a ${m('4 × 6 × 8')} box are similar; a
      ${m('2 × 3 × 4')} and a ${m('4 × 6 × 9')} are not.</p>`
    },
    {
      h: 'The three rules',
      html: `${eq(m(f('L₂', 'L₁') + ' = k') + '   ·   ' + m(f('S₂', 'S₁') + ' = k²') + '   ·   ' + m(f('V₂', 'V₁') + ' = k³'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">k</th><th>Lengths</th><th>Areas</th><th>Volumes</th></tr></thead>
      <tbody>
        <tr><td class="m">2</td><td class="m">×2</td><td class="m">×4</td><td class="m">×8</td></tr>
        <tr><td class="m">3</td><td class="m">×3</td><td class="m">×9</td><td class="m">×27</td></tr>
        <tr><td class="m">${f('1', '2')}</td><td class="m">×${f('1', '2')}</td><td class="m">×${f('1', '4')}</td><td class="m">×${f('1', '8')}</td></tr>
        <tr><td class="m">1.5</td><td class="m">×1.5</td><td class="m">×2.25</td><td class="m">×3.375</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The commonest error in the whole topic</span>
      Doubling the dimensions does <b>not</b> double the volume — it multiplies it by eight. A model car
      at ${m('1 : 20')} needs ${m(f('1', '8000'))} of the paint volume, not ${m(f('1', '20'))}.</div>`
    },
    {
      h: 'Working backwards',
      html: `<p>Given a ratio of areas or volumes, recover ${m('k')} by taking the root:</p>
      ${eq(m('k = ' + sr(f('S₂', 'S₁')) + '   or   k = ∛' + f('V₂', 'V₁')), true)}
      <p>Two similar cones have volumes ${m('54')} and ${m('128')} cm³. Then
      ${m('k = ∛' + f('128', '54') + ' = ∛' + f('64', '27') + ' = ' + f('4', '3'))}, so the heights are in
      the ratio ${m('3 : 4')} and the surface areas in the ratio ${m('9 : 16')}.</p>
      <div class="keybox"><div class="klabel">Practical consequences</div>
      A model at ${m('1 : 50')} has ${m(f('1', '2500'))} of the surface and ${m(f('1', '125000'))} of the
      volume. This is why large animals have thick legs: mass grows as ${m('k³')} but bone
      cross-section only as ${m('k²')}.</div>`
    }
  ],
  examples: [
    {
      q: 'Two similar cylinders have radii 3 cm and 5 cm. The smaller has volume 90 cm³. Find the larger.',
      steps: [
        [m('k = ' + f('5', '3')), ''],
        [m('k³ = ' + f('125', '27')), ''],
        [m('V = 90 × ' + f('125', '27')), ''],
        [m('= 416.7'), '']
      ],
      ans: m('≈ 417') + ' cm³'
    },
    {
      q: 'Two similar solids have surface areas ' + m('48') + ' and ' + m('108') + ' cm². Find the ratio of their volumes.',
      steps: [
        [m('k² = ' + f('108', '48') + ' = ' + f('9', '4')), ''],
        [m('k = ' + f('3', '2')), ''],
        [m('k³ = ' + f('27', '8')), '']
      ],
      ans: m('27 : 8')
    },
    {
      q: 'A model aeroplane is built at ' + m('1 : 40') + '. The real wing area is ' + m('32') + ' m². Find the model’s wing area in cm².',
      steps: [
        [m('k = ' + f('1', '40')) + ', ' + m('k² = ' + f('1', '1600')), ''],
        [m('32 ÷ 1600 = 0.02') + ' m².', ''],
        [m('0.02 × 10000 = 200') + ' cm².', '']
      ],
      ans: m('200') + ' cm²'
    }
  ],
  modelNote: 'Build two cubes of side 2 cm and 4 cm and count how many small ones fill the large one.',
  interactive: {
    type: 'quiz',
    title: 'Scaling up and down',
    hint: 'Lengths ' + m('k') + ', areas ' + m('k²') + ', volumes ' + m('k³') + '.',
    items: [
      { q: 'Doubling every length multiplies the volume by:', a: [m('2'), m('4'), m('6'), m('8')], c: 3, why: m('k³ = 8') + '.' },
      { q: 'Doubling every length multiplies the surface area by:', a: [m('2'), m('4'), m('8'), m('16')], c: 1, why: m('k² = 4') + '.' },
      { q: 'Volumes in the ratio ' + m('27 : 64') + ' give lengths in:', a: [m('27:64'), m('3:4'), m('9:16'), m('1:2')], c: 1, why: 'Cube roots.' },
      { q: 'Areas in the ratio ' + m('9 : 25') + ' give volumes in:', a: [m('3:5'), m('9:25'), m('27:125'), m('81:625')], c: 2, why: m('k = ' + f('3', '5')) + ', then cube.' },
      { q: 'A ' + m('1:100') + ' model has what fraction of the volume?', a: [m(f('1', '100')), m(f('1', '10000')), m(f('1', '1000000')), m(f('1', '1000'))], c: 2, why: m('100³') + '.' }
    ]
  },
  quiz: [
    { q: 'Similar solids have equal:', a: ['volumes', 'areas', 'angles', 'lengths'], c: 2, why: 'Only the scale changes.' },
    { q: 'Areas scale by:', a: [m('k'), m('k²'), m('k³'), m('2k')], c: 1, why: 'Two dimensions.' },
    { q: 'Volumes scale by:', a: [m('k'), m('k²'), m('k³'), m('3k')], c: 2, why: 'Three dimensions.' },
    { q: 'All spheres are:', a: ['congruent', 'similar', 'neither', 'equal in volume'], c: 1, why: 'One radius determines the shape.' }
  ],
  practice: {
    easy: [
      [m('k = 2') + '; area factor', m('4')],
      [m('k = 2') + '; volume factor', m('8')],
      [m('k = 3') + '; volume factor', m('27')],
      [m('k = ' + f('1', '2')) + '; volume factor', m(f('1', '8'))],
      ['Volumes ' + m('8 : 27') + '; length ratio', m('2 : 3')],
      ['Areas ' + m('4 : 9') + '; length ratio', m('2 : 3')],
      ['Are all cubes similar?', 'yes']
    ],
    med: [
      ['Radii ' + m('3') + ' and ' + m('5') + ', smaller volume ' + m('90') + '; larger volume', m('≈ 417')],
      ['Areas ' + m('48') + ' and ' + m('108') + '; volume ratio', m('27 : 8')],
      ['Volumes ' + m('54') + ' and ' + m('128') + '; length ratio', m('3 : 4')],
      [m('1 : 40') + ' model, real wing area ' + m('32') + ' m²; model area', m('200') + ' cm²'],
      ['A cone is cut halfway up. Volume ratio of small cone to whole', m('1 : 8')],
      ['Same cut: ratio of small cone to frustum', m('1 : 7')],
      ['Two similar tins: heights ' + m('10') + ' and ' + m('15') + ', smaller holds ' + m('400') + ' ml; larger', m('1350') + ' ml']
    ],
    hard: [
      ['A statue is ' + m('1:6') + ' scale and needs ' + m('0.5') + ' litres of paint. The real one needs?', m('18') + ' litres'],
      ['Two similar solids differ in volume by ' + m('117') + ' cm³ with ' + m('k = ' + f('4', '3')) + '. Find both volumes', m('81') + ' and ' + m('192')],
      ['A cone of height 12 is cut at height 8. Volume ratio of the two parts', m('8 : 19')],
      ['Why do large animals have proportionally thicker legs?', 'Mass grows as ' + m('k³') + ', bone strength only as ' + m('k²')],
      ['A ' + m('1:50') + ' model has surface area ' + m('80') + ' cm². Find the real area in m²', m('20') + ' m²'],
      ['Two similar cylinders have total surface areas ' + m('150π') + ' and ' + m('600π') + '. Find the volume ratio', m('1 : 8')],
      ['Show that if two solids have equal volumes and are similar they are congruent', m('k³ = 1 ⇒ k = 1')]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'State ' + m('k') + ' explicitly before using ' + m('k²') + ' or ' + m('k³') + '.',
  homework: [
    'Two similar cones have heights ' + m('6') + ' and ' + m('9') + ' cm. The smaller has volume ' + m('80') + ' cm³. Find the larger.',
    'Two similar solids have surface areas ' + m('75') + ' and ' + m('300') + ' cm². Find the ratio of their volumes.',
    'A model bridge is ' + m('1 : 200') + '. The real deck area is ' + m('4000') + ' m². Find the model’s deck area in cm².',
    'Explain, using ' + m('k²') + ' and ' + m('k³') + ', why a doubled animal would break its own legs.'
  ]
});

/* ============================== 9 ============================== */
G11_GEO.push({
  id: 'g11-09', stream: 'geo', grade: 11, quarter: 1, lessons: '14–16', hours: 3,
  title: 'The vector equation of a line',
  subtitle: 'Cambridge insert: a point and a direction give every point of a line — and intersection, parallelism and skewness all become arithmetic.',
  uz: 'Geometry 11, §8 (extension)', uzPage: 'pp. 77–84',
  cam: 'P3 · 9.1–9.3', camPage: 'Pure Mathematics 2 & 3, pp. 190–208', wb: 'P3 Exercise 9A–9C',
  objectives: [
    'Write the vector equation of a line from a point and a direction.',
    'Write it from two points, and convert to parametric form.',
    'Decide whether two lines meet, are parallel, or are skew.',
    'Find the angle between two lines and the point of intersection.'
  ],
  terms: [
    ['Vector equation of a line', 'To‘g‘ri chiziq vektor tenglamasi', 'Векторное уравнение прямой'],
    ['Direction vector', 'Yo‘naltiruvchi vektor', 'Направляющий вектор'],
    ['Parameter', 'Parametr', 'Параметр'],
    ['Parametric form', 'Parametrik shakl', 'Параметрический вид'],
    ['Point of intersection', 'Kesishish nuqtasi', 'Точка пересечения'],
    ['Skew lines', 'Ayqash chiziqlar', 'Скрещивающиеся прямые'],
    ['Position vector', 'Radius-vektor', 'Радиус-вектор'],
    ['Consistent system', 'Birgalikdagi sistema', 'Совместная система'],
    ['Angle between lines', 'Chiziqlar orasidagi burchak', 'Угол между прямыми']
  ],
  timing: [[14, 'A point and a direction'], [22, 'From two points'], [24, 'Do two lines meet?'], [26, 'Parallel, intersecting or skew'], [30, 'The angle'], [19, 'Practice and homework']],
  sections: [
    {
      h: 'A point and a direction',
      html: `<p>Start at a known point ${m('A')} with position vector ${m('a')}, and travel any multiple
      of a direction ${m('d')}:</p>
      ${eq(m('r = a + t d,   t ∈ ℝ'), true)}
      {{fig:lineVectorEq:A fixed point, a direction arrow, and the whole line traced out as t runs over the reals.}}
      <p>Each value of ${m('t')} gives one point; ${m('t = 0')} gives ${m('A')} itself. In components,
      with ${m('a = (1, 2, 3)')} and ${m('d = (2, −1, 4)')}:</p>
      ${eq(m('x = 1 + 2t,   y = 2 − t,   z = 3 + 4t'), false)}
      <div class="keybox"><div class="klabel">The equation is not unique</div>
      Any point of the line may play ${m('a')}, and any non-zero multiple of ${m('d')} may play the
      direction. ${m('r = (3,1,7) + s(4,−2,8)')} is the <b>same line</b>. Never conclude two lines
      differ just because the equations look different.</div>`
    },
    {
      h: 'From two points',
      html: `<p>Take one point as ${m('a')} and the vector between them as ${m('d')}:</p>
      ${eq(m('r = a + t(b − a)'), true)}
      <p>Through ${m('A(1, 0, 2)')} and ${m('B(4, 6, 8)')}: ${m('d = (3, 6, 6)')}, or more simply
      ${m('(1, 2, 2)')}, so ${m('r = (1, 0, 2) + t(1, 2, 2)')}.</p>
      <div class="warn"><span class="wl">Simplify the direction</span>
      Dividing ${m('d')} by a common factor changes nothing but makes every later calculation easier —
      and makes parallel lines obvious at a glance.</div>`
    },
    {
      h: 'Do two lines meet?',
      html: `<div class="keybox"><div class="klabel">The procedure</div>
      Set the two position vectors equal, using <b>different</b> parameters ${m('t')} and ${m('s')}.
      That gives three equations in two unknowns. Solve two of them; substitute into the third.
      Consistent ⟹ they meet. Inconsistent ⟹ they do not.</div>
      <p>${m('ℓ₁ : r = (1,0,2) + t(1,2,2)')} and ${m('ℓ₂ : r = (2,5,3) + s(0,1,−1)')}:</p>
      ${eq(m('1 + t = 2 ⇒ t = 1;   2t = 5 + s ⇒ s = −3;   check: 2 + 2t = 4,  3 − s = 6  ✗'), true)}
      <p>The third equation fails, so the lines do not meet. Their directions are not parallel either,
      so they are <b>skew</b>.</p>
      <div class="warn"><span class="wl">Use two different letters</span>
      Writing ${m('t')} in both equations forces the two lines to reach the meeting point “at the same
      time”, which is an extra condition the geometry never imposed. It is the single most common error
      in this topic.</div>`
    },
    {
      h: 'Classifying, and the angle',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Directions</th><th>System</th><th>Conclusion</th></tr></thead>
      <tbody>
        <tr><td>parallel</td><td>—</td><td>parallel (or identical, if a point is shared)</td></tr>
        <tr><td>not parallel</td><td>consistent</td><td>they intersect — one point</td></tr>
        <tr><td>not parallel</td><td>inconsistent</td><td>skew</td></tr>
      </tbody></table></div>
      <p>The <b>angle</b> between two lines is the angle between their directions, from the scalar
      product — and it is defined even for skew lines, where the lines themselves never meet:</p>
      ${eq(m('cos θ = ' + f('|d₁ · d₂|', '|d₁||d₂|')), true)}
      <p>The modulus in the numerator forces the acute angle, which is the conventional answer.</p>`
    }
  ],
  examples: [
    {
      q: 'Find the vector equation of the line through ' + m('A(2, −1, 3)') + ' and ' + m('B(4, 3, 7)') + '.',
      steps: [
        [m('d = b − a = (2, 4, 4)'), 'Simplify to ' + m('(1, 2, 2)') + '.'],
        [m('r = (2, −1, 3) + t(1, 2, 2)'), ''],
        ['Parametric: ' + m('x = 2 + t, y = −1 + 2t, z = 3 + 2t') + '.', '']
      ],
      ans: m('r = (2, −1, 3) + t(1, 2, 2)')
    },
    {
      q: 'Do ' + m('ℓ₁ : r = (1,1,1) + t(2,1,3)') + ' and ' + m('ℓ₂ : r = (3,2,4) + s(1,−1,2)') + ' meet?',
      steps: [
        [m('1 + 2t = 3 + s') + ' and ' + m('1 + t = 2 − s'), ''],
        ['Adding: ' + m('2 + 3t = 5 ⇒ t = 1') + ', then ' + m('s = 0') + '.', ''],
        ['Third: ' + m('1 + 3t = 4') + ' and ' + m('4 + 2s = 4') + '.', 'Both give 4 ✓'],
        ['Point: ' + m('(3, 2, 4)') + '.', '']
      ],
      ans: 'Yes, at ' + m('(3, 2, 4)')
    },
    {
      q: 'Find the acute angle between the lines with directions ' + m('(1, 2, 2)') + ' and ' + m('(2, −1, 2)') + '.',
      steps: [
        [m('d₁ · d₂ = 2 − 2 + 4 = 4'), ''],
        [m('|d₁| = |d₂| = 3'), ''],
        [m('cos θ = ' + f('4', '9')), ''],
        [m('θ ≈ 63.6°'), '']
      ],
      ans: m('≈ 63.6°')
    }
  ],
  modelNote: 'Vary t and watch the point travel along the line; then add a second line and look for a crossing.',
  interactive: {
    type: 'space3d',
    title: 'A line in space',
    hint: 'Change the parameter and watch the point move along the direction vector.'
  },
  quiz: [
    { q: 'In ' + m('r = a + td') + ', ' + m('d') + ' is:', a: ['a point', 'the direction', 'the length', 'a parameter'], c: 1, why: 'It gives the line its direction.' },
    { q: 'The line through ' + m('A') + ' and ' + m('B') + ' is:', a: [m('r = a + tb'), m('r = a + t(b − a)'), m('r = ab'), m('r = a − b')], c: 1, why: 'Point plus direction.' },
    { q: 'When two lines are compared you must use:', a: ['the same parameter', 'two different parameters', 'no parameter', 'three parameters'], c: 1, why: 'Otherwise an extra condition is imposed.' },
    { q: 'Non-parallel directions with an inconsistent system means:', a: ['intersecting', 'parallel', 'skew', 'identical'], c: 2, why: 'No common point, no common plane.' },
    { q: 'The angle between lines uses:', a: [m('|d₁ · d₂|'), m('d₁ · d₂'), m('|d₁| + |d₂|'), 'the points'], c: 0, why: 'The modulus gives the acute angle.' }
  ],
  practice: {
    easy: [
      ['Line through ' + m('(0,0,0)') + ' with direction ' + m('(1,1,1)'), m('r = t(1,1,1)')],
      ['Line through ' + m('(1,2,3)') + ' with direction ' + m('(0,0,1)'), m('r = (1,2,3) + t(0,0,1)')],
      ['Is ' + m('(2,4,6)') + ' on ' + m('r = t(1,2,3)') + '?', 'yes, ' + m('t = 2')],
      ['Is ' + m('(1,1,2)') + ' on ' + m('r = t(1,1,1)') + '?', 'no'],
      ['Direction of the line through ' + m('(1,0,0)') + ' and ' + m('(3,2,4)'), m('(2,2,4)') + ' or ' + m('(1,1,2)')],
      ['Are ' + m('(1,2,2)') + ' and ' + m('(2,4,4)') + ' parallel directions?', 'yes'],
      ['Value of ' + m('t') + ' giving the point ' + m('a') + ' itself', m('t = 0')]
    ],
    med: [
      ['Line through ' + m('A(2,−1,3)') + ' and ' + m('B(4,3,7)'), m('r = (2,−1,3) + t(1,2,2)')],
      ['Parametric form of that line', m('x = 2+t, y = −1+2t, z = 3+2t')],
      ['Do ' + m('r = (1,1,1)+t(2,1,3)') + ' and ' + m('r = (3,2,4)+s(1,−1,2)') + ' meet?', 'yes, at ' + m('(3,2,4)')],
      ['Angle between directions ' + m('(1,2,2)') + ' and ' + m('(2,−1,2)'), m('≈ 63.6°')],
      ['Angle between ' + m('(1,0,0)') + ' and ' + m('(1,1,0)'), m('45°')],
      ['Are ' + m('r = (0,0,0)+t(1,2,3)') + ' and ' + m('r = (1,2,3)+s(2,4,6)') + ' parallel?', 'yes — the same line'],
      ['Where does ' + m('r = (1,2,3)+t(1,1,1)') + ' meet the plane ' + m('z = 0') + '?', m('(−2,−1,0)')]
    ],
    hard: [
      ['Show ' + m('r = (1,0,2)+t(1,2,2)') + ' and ' + m('r = (2,5,3)+s(0,1,−1)') + ' are skew', 'Directions not parallel; the system is inconsistent'],
      ['Find where ' + m('r = (2,0,1)+t(1,1,2)') + ' meets ' + m('r = (4,2,5)+s(2,1,1)'), m('(4,2,5)')],
      ['Find the angle between the lines in the previous question', m('≈ 33.6°')],
      ['Find ' + m('λ') + ' so ' + m('(3, λ, 6)') + ' lies on ' + m('r = (1,0,2)+t(1,2,2)'), m('λ = 4')],
      ['Find the point of ' + m('r = t(1,2,2)') + ' closest to ' + m('(3,0,0)'), m('(' + f('1', '3') + ', ' + f('2', '3') + ', ' + f('2', '3') + ')')],
      ['Show the lines through ' + m('(0,0,0),(1,1,1)') + ' and ' + m('(1,0,0),(0,1,1)') + ' intersect', 'At ' + m('(0.5, 0.5, 0.5)')],
      ['Write the equation of the ' + m('x') + '-axis in vector form', m('r = t(1,0,0)')]
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Use different letters for the two parameters, every time.',
  homework: [
    'Find the vector equation of the line through ' + m('A(1, −2, 4)') + ' and ' + m('B(5, 2, 12)') + '.',
    'Write that line in parametric form and find the point with ' + m('t = 3') + '.',
    'Decide whether ' + m('r = (1,2,0) + t(1,1,1)') + ' and ' + m('r = (3,4,2) + s(2,1,3)') + ' meet, and if so where.',
    'Find the acute angle between the directions ' + m('(2, 1, −2)') + ' and ' + m('(1, 2, 2)') + '.',
    'Show that ' + m('r = (0,0,0) + t(1,1,0)') + ' and ' + m('r = (0,1,1) + s(1,0,0)') + ' are skew.',
    'Find where ' + m('r = (2, 1, 5) + t(1, −1, 2)') + ' crosses the plane ' + m('y = 0') + '.'
  ]
});

/* ============================== 10 ============================== */
G11_GEO.push({
  id: 'g11-10', stream: 'geo', grade: 11, quarter: 1, lessons: '17–18', hours: 2,
  title: 'Control work, and the quarter review',
  subtitle: 'Coordinates, vectors, the scalar product, symmetry and the vector line — one paper, then the map.',
  uz: 'Geometry 11, Nazorat ishi 1', uzPage: 'pp. 85–88',
  cam: 'P3 · Chapter 9 review', camPage: 'Pure Mathematics 2 & 3, pp. 209–212', wb: 'Control paper G1',
  objectives: [
    'Apply the whole quarter in one assessment.',
    'Choose between the coordinate and the vector method.',
    'Classify each lost mark and rewrite the solution.',
    'Build a concept map of vectors in space.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Concept map', 'Tushunchalar xaritasi', 'Карта понятий'],
    ['Justification', 'Asoslash', 'Обоснование'],
    ['Method choice', 'Usul tanlash', 'Выбор метода'],
    ['Self-assessment', 'O‘z-o‘zini baholash', 'Самооценка'],
    ['Revision', 'Takrorlash', 'Повторение'],
    ['Target', 'Maqsad', 'Цель'],
    ['Command word', 'Topshiriq so‘zi', 'Командное слово']
  ],
  timing: [[3, 'Instructions'], [42, 'The paper'], [12, 'Answers'], [20, 'Rewrite'], [10, 'Concept map'], [3, 'Targets']],
  sections: [
    {
      h: 'The paper — 30 marks, 42 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Distance and midpoint of ${m('A(1,−2,4)')} and ${m('B(5,2,16)')}</td><td class="m">4</td><td>L1–3</td></tr>
        <tr><td>2</td><td>Centre and radius of ${m('x²+y²+z²−4x+2y−4=0')}</td><td class="m">3</td><td>L1–3</td></tr>
        <tr><td>3</td><td>${m('a = (2,−1,2)')}, ${m('b = (1,2,2)')}: find ${m('|a|')}, ${m('a·b')} and the angle</td><td class="m">5</td><td>L7–8</td></tr>
        <tr><td>4</td><td>Find ${m('t')} so that ${m('(t,3,−1)')} and ${m('(2,t,5)')} are perpendicular</td><td class="m">3</td><td>L7–8</td></tr>
        <tr><td>5</td><td>Are ${m('A(1,0,2), B(3,2,4), C(6,5,7)')} collinear? Give ${m('AB:BC')}</td><td class="m">4</td><td>L6</td></tr>
        <tr><td>6</td><td>Vector equation of the line through ${m('(2,−1,3)')} and ${m('(4,3,7)')}; is ${m('(6,7,11)')} on it?</td><td class="m">5</td><td>L14–16</td></tr>
        <tr><td>7</td><td>Count the planes and axes of symmetry of a cube and of a ${m('3×3×8')} cuboid</td><td class="m">6</td><td>L10–11</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Q3 and Q6 carry the method marks</div>
      Q3 gives 2 for the angle formula written correctly before any numbers go in. Q6 gives 2 for the
      direction vector and 3 for the test — a stated answer with no substitution scores one.</div>`
    },
    {
      h: 'The concept map',
      html: `<p>Six boxes, links as sentences:</p>
      <ul>
        <li><b>coordinates</b> → <b>distance</b> — “Pythagoras twice”</li>
        <li><b>coordinates</b> → <b>position vectors</b> — “the same three numbers, read as a displacement”</li>
        <li><b>vectors</b> → <b>collinear / coplanar</b> — “one scalar, or two”</li>
        <li><b>vectors</b> → <b>scalar product</b> — “a number that carries the angle”</li>
        <li><b>scalar product</b> → <b>perpendicularity</b> — “zero means a right angle”</li>
        <li><b>point + direction</b> → <b>the line</b> — “${m('r = a + td')} generates every point”</li>
      </ul>
      {{fig:lineVectorEq:The picture that ties the last three boxes together.}}`
    },
    {
      h: 'Looking forward',
      html: `<p>Quarter II is polyhedra, prisms and cylinders — surface area and volume. Every angle in it
      is found by the scalar product of this quarter, and every distance by the formula of Lesson 1–3.
      Neither is re-taught.</p>
      <div class="keybox"><div class="klabel">One habit to carry forward</div>
      Write the vector before the arithmetic. ${m('AB = b − a')}, then compute. Learners who go
      straight to numbers lose the sign of the direction and, with it, the angle.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q3: ' + m('a = (2,−1,2)') + ', ' + m('b = (1,2,2)') + '.',
      steps: [
        [m('|a| = ' + sr('4+1+4') + ' = 3'), ''],
        [m('|b| = ' + sr('1+4+4') + ' = 3'), ''],
        [m('a · b = 2 − 2 + 4 = 4'), ''],
        [m('cos θ = ' + f('4', '9') + ' ⇒ θ ≈ 63.6°'), '']
      ],
      ans: m('|a| = 3') + ', ' + m('a·b = 4') + ', ' + m('θ ≈ 63.6°')
    },
    {
      q: 'Model answer, Q6: line through ' + m('(2,−1,3)') + ' and ' + m('(4,3,7)') + '; is ' + m('(6,7,11)') + ' on it?',
      steps: [
        [m('d = (2,4,4)') + ', simplify to ' + m('(1,2,2)') + '.', ''],
        [m('r = (2,−1,3) + t(1,2,2)'), ''],
        [m('2 + t = 6 ⇒ t = 4'), ''],
        ['Check: ' + m('−1 + 8 = 7') + ' ✓, ' + m('3 + 8 = 11') + ' ✓', '']
      ],
      ans: 'Yes, at ' + m('t = 4')
    },
    {
      q: 'Model answer, Q2: centre and radius of ' + m('x²+y²+z²−4x+2y−4=0') + '.',
      steps: [
        [m('(x−2)² − 4'), ''],
        [m('(y+1)² − 1'), ''],
        [m('(x−2)² + (y+1)² + z² = 9'), ''],
        ['Read off.', '']
      ],
      ans: 'centre ' + m('(2,−1,0)') + ', radius ' + m('3')
    }
  ],
  modelNote: 'Work Q3 and Q6 on the board before the rewrite hour begins.',
  interactive: {
    type: 'quiz',
    title: 'The quarter in ten questions',
    hint: 'One from each block.',
    items: [
      { q: 'Distance ' + m('A(1,−2,4)') + ' to ' + m('B(5,2,16)') + ':', a: [m('12'), m('13'), m('14'), m('16')], c: 1, why: m(sr('16+16+144')) + '.' },
      { q: 'Midpoint of those points:', a: [m('(3,0,10)'), m('(2,0,10)'), m('(3,0,8)'), m('(6,0,20)')], c: 0, why: 'Average each.' },
      { q: 'Radius of ' + m('(x−2)²+(y+1)²+z²=9') + ':', a: [m('9'), m('3'), m('' + sr('3')), m('81')], c: 1, why: m('R² = 9') + '.' },
      { q: m('(2,−1,2) · (1,2,2)') + ':', a: [m('4'), m('0'), m('8'), m('−4')], c: 0, why: m('2 − 2 + 4') + '.' },
      { q: 'The angle between them:', a: [m('30°'), m('45°'), m('≈ 63.6°'), m('90°')], c: 2, why: m('cos θ = ' + f('4', '9')) + '.' },
      { q: m('(t,3,−1) ⊥ (2,t,5)') + ' gives ' + m('t') + ':', a: [m('1'), m('−1'), m('5'), m('−5')], c: 0, why: m('2t + 3t − 5 = 0') + '.' },
      { q: m('A(1,0,2), B(3,2,4), C(6,5,7)') + ' are:', a: ['collinear', 'not collinear', 'coplanar only', 'perpendicular'], c: 0, why: m('AC = 2.5 AB') + '.' },
      { q: 'Direction of the line through ' + m('(2,−1,3)') + ' and ' + m('(4,3,7)') + ':', a: [m('(1,2,2)'), m('(2,2,4)'), m('(1,1,1)'), m('(2,−1,3)')], c: 0, why: m('(2,4,4) ÷ 2') + '.' },
      { q: 'Planes of symmetry of a ' + m('3×3×8') + ' cuboid:', a: [m('3'), m('4'), m('5'), m('9')], c: 2, why: '3 face plus 2 diagonal.' },
      { q: 'Two non-parallel lines with an inconsistent system are:', a: ['parallel', 'intersecting', 'skew', 'identical'], c: 2, why: 'No common point or plane.' }
    ]
  },
  quiz: [
    { q: 'The most efficient test for a right angle in space:', a: ['measure it', 'the cosine rule', m('a · b = 0'), 'Pythagoras'], c: 2, why: 'One line of arithmetic.' },
    { q: 'Two lines are skew when:', a: ['directions parallel', 'the system is inconsistent and directions differ', 'they meet', 'they are equal'], c: 1, why: 'No common point, no common plane.' },
    { q: 'A vector equation of a line is unique:', a: ['always', 'never', 'only in 2-D', 'only through the origin'], c: 1, why: 'Any point and any multiple of ' + m('d') + ' work.' },
    { q: 'Quarter II begins with:', a: ['the derivative', 'polyhedra and volume', 'probability', 'trigonometry'], c: 1, why: 'Surface area and volume of prisms and cylinders.' }
  ],
  practice: {
    easy: [
      ['Distance ' + m('A(1,−2,4)') + ' to ' + m('B(5,2,16)'), m('13')],
      ['Midpoint of those', m('(3,0,10)')],
      ['Radius of ' + m('x²+y²+z²=49'), m('7')],
      [m('(2,−1,2)·(1,2,2)'), m('4')],
      [m('|(2,−1,2)|'), m('3')],
      ['Planes of a cube', m('9')],
      ['Direction through ' + m('(2,−1,3)') + ' and ' + m('(4,3,7)'), m('(1,2,2)')]
    ],
    med: [
      ['Centre and radius of ' + m('x²+y²+z²−4x+2y−4=0'), m('(2,−1,0)') + ', ' + m('3')],
      ['Angle between ' + m('(2,−1,2)') + ' and ' + m('(1,2,2)'), m('≈ 63.6°')],
      ['Find ' + m('t') + ': ' + m('(t,3,−1) ⊥ (2,t,5)'), m('t = 1')],
      ['Are ' + m('A(1,0,2), B(3,2,4), C(6,5,7)') + ' collinear? ' + m('AB:BC'), 'yes, ' + m('2:3')],
      ['Is ' + m('(6,7,11)') + ' on ' + m('r = (2,−1,3)+t(1,2,2)') + '?', 'yes, ' + m('t = 4')],
      ['Planes of a ' + m('3×3×8') + ' cuboid', m('5')],
      ['Axes of a cube', m('13')]
    ],
    hard: [
      ['Find the point of ' + m('r = (2,−1,3)+t(1,2,2)') + ' closest to the origin', m('(' + f('16', '9') + ', −' + f('13', '9') + ', ' + f('19', '9') + ')')],
      ['Show two given lines are skew and find the angle between them', 'Inconsistent system; angle from ' + m('|d₁·d₂|')],
      ['Find the sphere through ' + m('(0,0,0), (2,0,0), (0,2,0), (0,0,2)'), m('(x−1)²+(y−1)²+(z−1)² = 3')],
      ['Prove the diagonals of a cube meet at its centre', 'All four have midpoint ' + m('(' + f('a', '2') + ',' + f('a', '2') + ',' + f('a', '2') + ')')],
      ['Angle between two space diagonals of a cube', m('≈ 70.5°')],
      ['Find ' + m('λ') + ' so ' + m('(1,2,λ)') + ' is coplanar with ' + m('(1,0,1)') + ' and ' + m('(0,1,1)'), m('λ = 3')],
      ['Where does ' + m('r = (1,1,1)+t(2,−1,3)') + ' meet the plane ' + m('x = 5') + '?', m('(5,−1,7)')]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Bring the concept map to the first lesson of Quarter II.',
  homework: [
    'Rewrite in full every control-work question that lost a mark.',
    'Finish the concept map with all six links written as sentences.',
    'Find the vector equation of the line through ' + m('(0, 1, −2)') + ' and ' + m('(4, 5, 6)') + ', and test whether ' + m('(6, 7, 10)') + ' is on it.',
    'Write your target for Quarter II in one checkable sentence, and date it.'
  ]
});

/* ===================== QUARTER II (14 hours) ===================== */

/* ============================== 11 ============================== */
G11_GEO.push({
  id: 'g11-11', stream: 'geo', grade: 11, quarter: 2, lessons: '19–20', hours: 2,
  title: 'Polyhedral angles and polyhedra',
  subtitle: 'What happens at a vertex of a solid — the angle condition every corner must satisfy.',
  uz: 'Geometry 11, §9', uzPage: 'pp. 89–100',
  cam: 'IGCSE E13.x', camPage: 'Core & Extended, pp. 282–288', wb: 'Exercise 9.1',
  objectives: [
    'Define a polyhedral angle and name its plane and dihedral angles.',
    'Apply the inequality on the plane angles at a vertex.',
    'Classify polyhedra as convex or non-convex.',
    'Use Euler’s formula on a given solid.'
  ],
  terms: [
    ['Polyhedral angle', 'Ko‘pyoqli burchak', 'Многогранный угол'],
    ['Trihedral angle', 'Uch yoqli burchak', 'Трёхгранный угол'],
    ['Plane angle (of a corner)', 'Yassi burchak', 'Плоский угол'],
    ['Dihedral angle', 'Ikki yoqli burchak', 'Двугранный угол'],
    ['Apex (vertex)', 'Uchi', 'Вершина'],
    ['Convex polyhedron', 'Qavariq ko‘pyoq', 'Выпуклый многогранник'],
    ['Non-convex', 'Qavariq bo‘lmagan', 'Невыпуклый'],
    ['Euler’s formula', 'Eyler formulasi', 'Формула Эйлера'],
    ['Lateral face', 'Yon yoq', 'Боковая грань']
  ],
  timing: [[12, 'What a polyhedral angle is'], [22, 'The angle inequality'], [22, 'Convexity'], [20, 'Euler again'], [18, 'Practice'], [6, 'Homework']],
  sections: [
    {
      h: 'The corner of a solid',
      html: `<p>Take a point ${m('S')} and several rays from it, no three coplanar, joined in order by
      plane faces. The figure is a <b>polyhedral angle</b>: three rays give a <b>trihedral</b> angle,
      four a tetrahedral one, and so on.</p>
      {{fig:polyhedralAngle:Five faces meeting at S. Each face contributes a plane angle; each edge a dihedral angle.}}
      <div class="keybox"><div class="klabel">Two kinds of angle at a corner</div>
      A <b>plane angle</b> lies inside one face, between two adjacent edges. A <b>dihedral angle</b> is
      between two adjacent faces, measured along their common edge. A corner with ${m('n')} edges has
      ${m('n')} of each.</div>`
    },
    {
      h: 'The angle inequality',
      html: `<div class="keybox"><div class="klabel">Two theorems about the plane angles</div>
      <b>1</b> Each plane angle is less than the sum of the others.
      <b>2</b> The sum of all the plane angles at a vertex is less than ${m('360°')}.</div>
      <p>Theorem 2 is the reason there are only five regular polyhedra: with equilateral triangles
      (${m('60°')}) at most five fit; with squares (${m('90°')}) at most three; with regular pentagons
      (${m('108°')}) at most three; six hexagons give exactly ${m('360°')} and lie flat, forming no
      corner at all.</p>
      <div class="warn"><span class="wl">Exactly ${m('360°')} is not a corner</span>
      It is a flat piece of plane. To fold up into a solid, a corner must have angles totalling
      <b>strictly less</b> than a full turn — the deficit is what makes it pop out.</div>`
    },
    {
      h: 'Convexity',
      html: `<p>A polyhedron is <b>convex</b> when it lies entirely on one side of the plane of each of
      its faces — equivalently, when the segment joining any two of its points stays inside.</p>
      {{fig:convex:Convex on the left. On the right, a segment between two interior points leaves the solid.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Property</th><th>Convex</th><th>Non-convex</th></tr></thead>
      <tbody>
        <tr><td>Euler’s formula ${m('F + V − E = 2')}</td><td>always</td><td>usually, but not for a solid with a hole</td></tr>
        <tr><td>every section is a single polygon</td><td>yes</td><td>no</td></tr>
        <tr><td>every plane angle sum ${m('< 360°')}</td><td>yes</td><td>can exceed it at a reflex corner</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'Euler again, as a tool',
      html: `${eq(m('F + V − E = 2'), true)}
      <p>Two counting facts make it usable when the faces are known:</p>
      ${eq(m('2E = Σ (edges per face) = Σ (edges per vertex)'), true)}
      <p>A solid with 12 pentagons and 20 hexagons, three faces at each vertex:
      ${m('2E = 12 × 5 + 20 × 6 = 180')}, so ${m('E = 90')}; and ${m('3V = 2E = 180')} gives
      ${m('V = 60')}. Check: ${m('32 + 60 − 90 = 2')} ✓. That solid is the football.</p>`
    }
  ],
  examples: [
    {
      q: 'Can a corner have three plane angles of ' + m('120°') + ' each?',
      steps: [
        [m('3 × 120° = 360°'), ''],
        ['The sum must be strictly less.', ''],
        ['They lie flat.', '']
      ],
      ans: 'No — it is a flat plane, not a corner'
    },
    {
      q: 'A corner has plane angles ' + m('70°') + ', ' + m('80°') + ' and ' + m('x') + '. Find the possible values of ' + m('x') + '.',
      steps: [
        ['Sum ' + m('< 360°') + ': ' + m('x < 210°') + '.', ''],
        ['Each less than the sum of the others: ' + m('x < 150°') + '.', ''],
        ['And ' + m('80 < 70 + x') + ', so ' + m('x > 10°') + '.', '']
      ],
      ans: m('10° < x < 150°')
    },
    {
      q: 'A polyhedron has 12 pentagonal and 20 hexagonal faces, 3 at each vertex. Find ' + m('V') + ' and ' + m('E') + '.',
      steps: [
        [m('2E = 12 × 5 + 20 × 6 = 180'), m('E = 90')],
        [m('3V = 2E = 180'), m('V = 60')],
        ['Check: ' + m('32 + 60 − 90 = 2') + ' ✓', '']
      ],
      ans: m('V = 60') + ', ' + m('E = 90')
    }
  ],
  modelNote: 'Fold three squares at a corner and try to add a fourth — the angles refuse.',
  interactive: {
    type: 'polygonAngles',
    title: 'Angles at a corner',
    hint: 'Add faces until the total reaches ' + m('360°') + '.'
  },
  quiz: [
    { q: 'The plane angles at a vertex sum to:', a: [m('360°'), 'less than ' + m('360°'), 'more than ' + m('360°'), m('180°')], c: 1, why: 'Strictly less, or it lies flat.' },
    { q: 'A trihedral angle has how many faces?', a: [m('2'), m('3'), m('4'), m('6')], c: 1, why: 'Three, by the name.' },
    { q: 'Three regular hexagons at a corner:', a: ['make a solid', 'lie flat', 'are impossible', 'make a cube'], c: 1, why: m('3 × 120° = 360°') + '.' },
    { q: 'Euler’s formula holds for:', a: ['every solid', 'every convex polyhedron', 'only prisms', 'only regular solids'], c: 1, why: 'A solid with a hole fails it.' },
    { q: m('2E') + ' equals:', a: ['the number of faces', 'the sum of edges per face', m('F + V'), m('3V') + ' always'], c: 1, why: 'Each edge is shared by two faces.' }
  ],
  practice: {
    easy: [
      ['How many faces has a trihedral angle?', m('3')],
      ['Sum of plane angles at a vertex is', 'less than ' + m('360°')],
      ['Can three ' + m('120°') + ' angles form a corner?', 'no'],
      ['Can three ' + m('90°') + ' angles?', 'yes — a cube corner'],
      ['Can five ' + m('60°') + ' angles?', 'yes — an icosahedron corner'],
      ['Can six ' + m('60°') + ' angles?', 'no — exactly ' + m('360°')],
      ['State Euler’s formula', m('F + V − E = 2')]
    ],
    med: [
      ['Plane angles ' + m('70°, 80°, x') + '. Find the range of ' + m('x'), m('10° < x < 150°')],
      [m('F = 8, V = 6') + '; find ' + m('E'), m('12')],
      [m('F = 20, E = 30') + '; find ' + m('V'), m('12')],
      ['12 pentagons + 20 hexagons, 3 per vertex: ' + m('V, E'), m('60, 90')],
      ['A solid with only triangular faces and ' + m('V = 6') + ', 4 per vertex: ' + m('E, F'), m('12, 8')],
      ['Why are there only five regular polyhedra?', 'The angle sum at a corner must be under ' + m('360°')],
      ['Is a picture-frame solid convex?', 'no']
    ],
    hard: [
      ['Prove each plane angle is less than the sum of the others', 'Unfold the corner into the plane and use the triangle inequality'],
      ['Prove the plane angles sum to less than ' + m('360°'), 'Project the corner onto a plane and compare'],
      ['A convex solid has 7 faces. What is the least possible ' + m('E') + '?', m('12') + ' — a hexagonal pyramid'],
      ['Show ' + m('2E ≥ 3F') + ' and ' + m('2E ≥ 3V') + ' for any polyhedron', 'At least 3 edges per face and per vertex'],
      ['Deduce ' + m('F ≤ 2V − 4') + ' and ' + m('V ≤ 2F − 4'), 'Substitute both into Euler'],
      ['Can a convex polyhedron have exactly 7 edges?', 'no'],
      ['A solid has faces that are all squares and triangles, 12 vertices, 4 edges at each. Find ' + m('E, F'), m('E = 24, F = 14')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every Euler answer must be checked against ' + m('F + V − E = 2') + '.',
  homework: [
    'A corner has plane angles ' + m('60°') + ', ' + m('100°') + ' and ' + m('x') + '. Find the range of ' + m('x') + '.',
    'Explain, with the angle sums, why there are exactly five regular polyhedra.',
    'A solid has 12 faces and 30 edges. Find ' + m('V') + ' and name it if it is regular.',
    'A solid has only triangular faces and 20 of them. Find ' + m('E') + ' and ' + m('V') + '.',
    'Give an example of a solid for which Euler’s formula fails, and say why.'
  ]
});

/* ============================== 12 ============================== */
G11_GEO.push({
  id: 'g11-12', stream: 'geo', grade: 11, quarter: 2, lessons: '21–22', hours: 2,
  title: 'The prism, the parallelepiped and the cube',
  subtitle: 'The family, its sections, and the diagonal formula that every cuboid problem reduces to.',
  uz: 'Geometry 11, §10', uzPage: 'pp. 101–112',
  cam: 'IGCSE E13.x', camPage: 'Core & Extended, pp. 289–296', wb: 'Exercise 10.1',
  objectives: [
    'Name the elements of a prism and classify it as right, oblique or regular.',
    'Describe the sections of a prism parallel to the base and through a lateral edge.',
    'Prove the properties of a parallelepiped.',
    'Use the space-diagonal formula for a cuboid.'
  ],
  terms: [
    ['Prism', 'Prizma', 'Призма'],
    ['Right prism', 'To‘g‘ri prizma', 'Прямая призма'],
    ['Oblique prism', 'Og‘ma prizma', 'Наклонная призма'],
    ['Regular prism', 'Muntazam prizma', 'Правильная призма'],
    ['Parallelepiped', 'Parallelepiped', 'Параллелепипед'],
    ['Cuboid', 'To‘g‘ri burchakli parallelepiped', 'Прямоугольный параллелепипед'],
    ['Lateral edge', 'Yon qirra', 'Боковое ребро'],
    ['Diagonal section', 'Diagonal kesim', 'Диагональное сечение'],
    ['Space diagonal', 'Fazoviy diagonal', 'Пространственная диагональ'],
    ['Perpendicular section', 'Perpendikulyar kesim', 'Перпендикулярное сечение']
  ],
  timing: [[12, 'The family'], [22, 'Sections'], [24, 'The parallelepiped'], [22, 'The diagonal formula'], [16, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'The family',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      A <b>prism</b> has two congruent parallel bases joined by parallelograms. It is <b>right</b> when
      the lateral edges are perpendicular to the bases, and <b>regular</b> when it is right and its base
      is a regular polygon.</div>
      <div class="tablewrap"><table>
      <thead><tr><th>Solid</th><th>Base</th><th>Lateral faces</th></tr></thead>
      <tbody>
        <tr><td>oblique prism</td><td>any polygon</td><td>parallelograms</td></tr>
        <tr><td>right prism</td><td>any polygon</td><td>rectangles</td></tr>
        <tr><td>regular prism</td><td>regular polygon</td><td>congruent rectangles</td></tr>
        <tr><td>parallelepiped</td><td>parallelogram</td><td>parallelograms</td></tr>
        <tr><td>cuboid</td><td>rectangle</td><td>rectangles</td></tr>
        <tr><td>cube</td><td>square</td><td>squares</td></tr>
      </tbody></table></div>
      <p>Each row is a special case of the one above it. Every theorem proved for a prism therefore
      holds for a cube.</p>`
    },
    {
      h: 'Sections',
      html: `{{fig:prismSection:A plane parallel to the base cuts a triangle congruent to it — at every height.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Cutting plane</th><th>Section</th></tr></thead>
      <tbody>
        <tr><td>parallel to the base</td><td>congruent to the base</td></tr>
        <tr><td>through two lateral edges</td><td>a parallelogram (a <b>diagonal section</b>)</td></tr>
        <tr><td>perpendicular to the lateral edges</td><td>the <b>perpendicular section</b></td></tr>
      </tbody></table></div>
      <p>The perpendicular section matters because the lateral surface area of <b>any</b> prism, right or
      oblique, is the perimeter of the perpendicular section times the lateral edge.</p>`
    },
    {
      h: 'The parallelepiped',
      html: `<p>Four properties, each proved from the parallel-plane theorems of Grade 10:</p>
      <ol>
        <li>Opposite faces are congruent parallelograms lying in parallel planes.</li>
        <li>All four space diagonals meet at one point and bisect each other.</li>
        <li>That point is the centre of symmetry of the solid.</li>
        <li>In a <b>cuboid</b> all four space diagonals are equal.</li>
      </ol>
      <p>Property 2 says the parallelepiped is the space analogue of the parallelogram, whose diagonals
      also bisect each other. The proof is the same: the two diagonals of any diagonal section are the
      diagonals of a parallelogram.</p>`
    },
    {
      h: 'The diagonal formula',
      html: `${eq(m('d² = a² + b² + c²'), true)}
      <p>Pythagoras twice — once in the base to get ${m(sr('a² + b²'))}, once vertically. For a cube of
      edge ${m('a')} it gives ${m('d = a' + sr('3'))}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Cuboid</th><th>Base diagonal</th><th>Space diagonal</th></tr></thead>
      <tbody>
        <tr><td class="m">3 × 4 × 12</td><td class="m">5</td><td class="m">13</td></tr>
        <tr><td class="m">1 × 2 × 2</td><td class="m">${sr('5')}</td><td class="m">3</td></tr>
        <tr><td class="m">2 × 3 × 6</td><td class="m">${sr('13')}</td><td class="m">7</td></tr>
        <tr><td class="m">a × a × a</td><td class="m">a${sr('2')}</td><td class="m">a${sr('3')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Three squares, not two</span>
      Every edge contributes. Learners who use only the two base edges get the <b>face</b> diagonal and
      answer a different question.</div>`
    }
  ],
  examples: [
    {
      q: 'A cuboid measures ' + m('6 × 8 × 10') + '. Find its space diagonal and its four diagonal sections.',
      steps: [
        [m('d = ' + sr('36 + 64 + 100') + ' = ' + sr('200')), ''],
        [m('= 10' + sr('2') + ' ≈ 14.1'), ''],
        ['Diagonal sections are rectangles ' + m('10 × ' + sr('100')) + ' and ' + m('10 × ' + sr('136')) + '.', 'Two different sizes.']
      ],
      ans: m('10' + sr('2')) + ' ≈ ' + m('14.1')
    },
    {
      q: 'A regular hexagonal prism has base edge 4 and height 9. Find the longest diagonal.',
      steps: [
        ['The longest base diagonal of a regular hexagon is ' + m('2 × 4 = 8') + '.', ''],
        [m('d = ' + sr('64 + 81')), ''],
        [m('= ' + sr('145') + ' ≈ 12.04'), '']
      ],
      ans: m(sr('145')) + ' ≈ ' + m('12.0')
    },
    {
      q: 'A cube has space diagonal ' + m('9' + sr('3')) + '. Find its edge and its face diagonal.',
      steps: [
        [m('a' + sr('3') + ' = 9' + sr('3')), m('a = 9')],
        ['Face diagonal ' + m('a' + sr('2') + ' = 9' + sr('2')), ''],
        [m('≈ 12.7'), '']
      ],
      ans: 'Edge ' + m('9') + ', face diagonal ' + m('9' + sr('2'))
    }
  ],
  modelNote: 'Hold a box and trace the base diagonal, then the space diagonal, saying the two Pythagoras steps.',
  interactive: {
    type: 'space3d',
    title: 'The diagonal of a box',
    hint: 'Change the three edges and watch the diagonal.'
  },
  quiz: [
    { q: 'A right prism has lateral faces that are:', a: ['parallelograms', 'rectangles', 'triangles', 'trapezia'], c: 1, why: 'The edges are perpendicular to the bases.' },
    { q: 'A section parallel to the base is:', a: ['smaller', 'congruent to the base', 'a triangle', 'a point'], c: 1, why: 'A prism has constant cross-section.' },
    { q: 'The space diagonal of an ' + m('a × b × c') + ' cuboid is:', a: [m('a + b + c'), m(sr('a² + b²')), m(sr('a² + b² + c²')), m('abc')], c: 2, why: 'Pythagoras twice.' },
    { q: 'The diagonals of a parallelepiped:', a: ['are equal', 'bisect each other', 'are perpendicular', 'do not meet'], c: 1, why: 'At the centre of symmetry.' },
    { q: 'A cube of edge 5 has space diagonal:', a: [m('5' + sr('2')), m('5' + sr('3')), m('15'), m('25')], c: 1, why: m('a' + sr('3')) + '.' }
  ],
  practice: {
    easy: [
      ['Space diagonal of a ' + m('3 × 4 × 12') + ' cuboid', m('13')],
      ['Space diagonal of a cube of edge 5', m('5' + sr('3'))],
      ['Face diagonal of a cube of edge 5', m('5' + sr('2'))],
      ['Lateral faces of a right prism are', 'rectangles'],
      ['Section parallel to the base is', 'congruent to the base'],
      ['How many space diagonals has a cuboid?', m('4')],
      ['Space diagonal of a ' + m('1 × 2 × 2') + ' cuboid', m('3')]
    ],
    med: [
      ['Space diagonal of a ' + m('6 × 8 × 10') + ' cuboid', m('10' + sr('2'))],
      ['Cube with space diagonal ' + m('9' + sr('3')) + '; find the edge', m('9')],
      ['Regular hexagonal prism, base edge 4, height 9: longest diagonal', m(sr('145'))],
      ['Cuboid ' + m('2 × 3 × 6') + '; space diagonal', m('7')],
      ['A cuboid has square base 5 and diagonal 13. Find the height', m(sr('119')) + ' ≈ ' + m('10.9')],
      ['Diagonal section of a cube of edge 6: its area', m('36' + sr('2'))],
      ['Perpendicular section of a right prism is', 'congruent to the base']
    ],
    hard: [
      ['A cuboid has edges in ratio ' + m('1:2:3') + ' and diagonal ' + m(sr('56')) + '. Find them', m('2, 4, 6')],
      ['Prove the four space diagonals of a parallelepiped meet at one point', 'Each diagonal section is a parallelogram'],
      ['Oblique prism, lateral edge 10, perpendicular-section perimeter 18. Lateral area', m('180')],
      ['A cube of edge ' + m('a') + ': angle between the space diagonal and a face diagonal', m('≈ 35.26°')],
      ['A cuboid with all four space diagonals equal must be', 'any cuboid — they always are'],
      ['A parallelepiped whose diagonals are all equal is', 'a cuboid'],
      ['A regular triangular prism, base edge 6, height 8: longest diagonal', m('10')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every diagonal answer must show both Pythagoras steps.',
  homework: [
    'Find the space diagonal of a ' + m('5 × 12 × 84') + ' cuboid.',
    'A cube has space diagonal ' + m('12') + '. Find its edge and its face diagonal.',
    'A regular hexagonal prism has base edge 5 and height 12. Find its longest diagonal.',
    'Prove that the four space diagonals of a cuboid are equal.',
    'A cuboid has edges in the ratio ' + m('2 : 3 : 6') + ' and space diagonal ' + m('14') + '. Find the edges.'
  ]
});

/* ============================== 13 ============================== */
G11_GEO.push({
  id: 'g11-13', stream: 'geo', grade: 11, quarter: 2, lessons: '23', hours: 1,
  title: 'The surface area of a prism',
  subtitle: 'Two bases and one rectangle — the net says the formula better than the formula does.',
  uz: 'Geometry 11, §11', uzPage: 'pp. 113–118',
  cam: 'IGCSE E13.x', camPage: 'Core & Extended, pp. 297–300', wb: 'Exercise 11.1',
  objectives: [
    'Derive the lateral surface area of a right prism from its net.',
    'Compute the total surface area of a prism.',
    'Use the perpendicular section for an oblique prism.',
    'Solve for a missing dimension from a given surface area.'
  ],
  terms: [
    ['Lateral surface area', 'Yon sirt yuzasi', 'Площадь боковой поверхности'],
    ['Total surface area', 'To‘la sirt yuzasi', 'Площадь полной поверхности'],
    ['Net', 'Yoyma', 'Развёртка'],
    ['Base perimeter', 'Asos perimetri', 'Периметр основания'],
    ['Base area', 'Asos yuzasi', 'Площадь основания'],
    ['Perpendicular section', 'Perpendikulyar kesim', 'Перпендикулярное сечение'],
    ['Lateral edge', 'Yon qirra', 'Боковое ребро'],
    ['Apothem of a polygon', 'Ko‘pburchak apofemasi', 'Апофема многоугольника']
  ],
  timing: [[8, 'The net'], [12, 'The formula'], [10, 'Oblique prisms'], [10, 'Working backwards'], [5, 'Homework']],
  sections: [
    {
      h: 'The net',
      html: `<p>Cut a right prism along one lateral edge and roll the sides flat. The lateral surface is
      a single rectangle: its height is the prism's height, and its width is the base perimeter.</p>
      {{fig:surfaceNet:The lateral surface unrolls into one rectangle, P wide and h tall.}}
      ${eq(m('S_lat = P · h') + '     ' + m('S_total = 2B + P h'), true)}
      <p>where ${m('B')} is the base area and ${m('P')} the base perimeter.</p>`
    },
    {
      h: 'Worked shapes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Prism</th><th class="m">B</th><th class="m">P</th><th class="m">S_total</th></tr></thead>
      <tbody>
        <tr><td>cuboid ${m('a × b × h')}</td><td class="m">ab</td><td class="m">2(a + b)</td><td class="m">2ab + 2(a+b)h</td></tr>
        <tr><td>cube, edge ${m('a')}</td><td class="m">a²</td><td class="m">4a</td><td class="m">6a²</td></tr>
        <tr><td>regular triangular, edge ${m('a')}, height ${m('h')}</td><td class="m">${f(sr('3'), '4')}a²</td><td class="m">3a</td><td class="m">${f(sr('3'), '2')}a² + 3ah</td></tr>
        <tr><td>regular hexagonal, edge ${m('a')}, height ${m('h')}</td><td class="m">${f('3' + sr('3'), '2')}a²</td><td class="m">6a</td><td class="m">3${sr('3')}a² + 6ah</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Two bases, not one</span>
      A closed prism has a lid. ${m('S_total = 2B + Ph')}: the ${m('2')} is the mark most often lost.
      An open container — a trough, a box without a lid — needs the formula adjusted, and the question
      will say so.</div>`
    },
    {
      h: 'Oblique prisms',
      html: `<p>For an oblique prism the lateral faces are parallelograms of different shapes, and the
      net is not one rectangle. The formula generalises by using the <b>perpendicular section</b> — the
      cut at right angles to the lateral edges:</p>
      ${eq(m('S_lat = P_⊥ · ℓ') + '   where ' + m('ℓ') + ' is the lateral edge', true)}
      <p>For a right prism the perpendicular section is the base and ${m('ℓ = h')}, so the general
      formula reduces to the one above.</p>`
    }
  ],
  examples: [
    {
      q: 'A regular hexagonal prism has base edge 4 cm and height 10 cm. Find its total surface area.',
      steps: [
        [m('B = ' + f('3' + sr('3'), '2') + ' × 16 = 24' + sr('3') + ' ≈ 41.57'), ''],
        [m('P = 24'), ''],
        [m('S_lat = 240'), ''],
        [m('S = 2(41.57) + 240 ≈ 323.1'), '']
      ],
      ans: m('48' + sr('3') + ' + 240') + ' ≈ ' + m('323') + ' cm²'
    },
    {
      q: 'A cuboid has surface area ' + m('136') + ' cm² and base ' + m('4 × 5') + '. Find its height.',
      steps: [
        [m('2(20) + 2(9)h = 136'), ''],
        [m('18h = 96'), ''],
        [m('h = ' + f('16', '3') + ' ≈ 5.33'), '']
      ],
      ans: m(f('16', '3')) + ' ≈ ' + m('5.33') + ' cm'
    },
    {
      q: 'An oblique prism has lateral edge 12 and perpendicular section a triangle with sides 3, 4, 5. Find the lateral area.',
      steps: [
        [m('P_⊥ = 12'), ''],
        [m('S_lat = 12 × 12'), ''],
        [m('= 144'), '']
      ],
      ans: m('144') + ' square units'
    }
  ],
  modelNote: 'Unroll a cardboard tube or box and measure the rectangle directly.',
  interactive: {
    type: 'areaModel',
    title: 'Area from a net',
    hint: 'Change the base and the height and watch the rectangle.'
  },
  quiz: [
    { q: m('S_lat') + ' of a right prism is:', a: [m('Bh'), m('Ph'), m('2B'), m('2B + Ph')], c: 1, why: 'Perimeter times height.' },
    { q: m('S_total') + ' of a right prism is:', a: [m('Ph'), m('B + Ph'), m('2B + Ph'), m('2Ph')], c: 2, why: 'Two bases plus the sides.' },
    { q: 'A cube of edge 4 has surface area:', a: [m('16'), m('64'), m('96'), m('24')], c: 2, why: m('6 × 16') + '.' },
    { q: 'For an oblique prism ' + m('S_lat') + ' uses:', a: ['the base perimeter', 'the perpendicular section perimeter', 'the height', 'the diagonal'], c: 1, why: 'The faces are parallelograms.' },
    { q: 'An open box needs:', a: [m('2B + Ph'), m('B + Ph'), m('Ph'), m('2B')], c: 1, why: 'One base only.' }
  ],
  practice: {
    easy: [
      ['Surface area of a cube of edge 3', m('54')],
      ['Surface area of a cube of edge 7', m('294')],
      ['Cuboid ' + m('2 × 3 × 4'), m('52')],
      ['Cuboid ' + m('5 × 5 × 10'), m('250')],
      [m('S_lat') + ' of a prism with ' + m('P = 20, h = 6'), m('120')],
      [m('S_total') + ' with ' + m('B = 15, P = 16, h = 5'), m('110')],
      ['A cube has surface area 150. Find its edge', m('5')]
    ],
    med: [
      ['Regular triangular prism, edge 6, height 10: total area', m('18' + sr('3') + ' + 180') + ' ≈ ' + m('211')],
      ['Regular hexagonal prism, edge 4, height 10: total area', m('48' + sr('3') + ' + 240') + ' ≈ ' + m('323')],
      ['Cuboid with base ' + m('4 × 5') + ' and area 136: the height', m(f('16', '3'))],
      ['Right prism, base a 3-4-5 triangle, height 9: total area', m('12 + 108 = 120')],
      ['Oblique prism, edge 12, perpendicular perimeter 12: lateral area', m('144')],
      ['Open cuboid ' + m('3 × 4 × 5') + ' (no lid): area', m('82')],
      ['A cube of surface area 384: its space diagonal', m('8' + sr('3'))]
    ],
    hard: [
      ['A cuboid has square base and total area 294 with height equal to the base edge. Find the edge', m('7')],
      ['Regular hexagonal prism of base edge ' + m('a') + ' and height ' + m('a') + ': total area', m('3' + sr('3') + 'a² + 6a²')],
      ['A prism has a rhombus base with diagonals 6 and 8, height 10. Total area', m('48 + 200 = 248')],
      ['A cuboid of volume 240 and square base 4: total area', m('272')],
      ['Two similar prisms with areas ' + m('75') + ' and ' + m('300') + ': the length ratio', m('1 : 2')],
      ['A prism’s lateral area equals its total area minus what?', 'twice the base area'],
      ['Prove ' + m('S_lat = P_⊥ ℓ') + ' for an oblique prism', 'Each parallelogram has base a side of the perpendicular section']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Say whether the solid is closed or open before choosing the formula.',
  homework: [
    'A regular hexagonal prism has base edge 6 cm and height 15 cm. Find its total surface area.',
    'A cuboid with base ' + m('6 × 8') + ' has total surface area ' + m('376') + ' cm². Find its height.',
    'A right prism has a 5-12-13 triangular base and height 20. Find its total surface area.',
    'An open trough is a cuboid ' + m('2 × 3 × 8') + ' with no lid. Find the area of material needed.'
  ]
});

/* ============================== 14 ============================== */
G11_GEO.push({
  id: 'g11-14', stream: 'geo', grade: 11, quarter: 2, lessons: '24', hours: 1,
  title: 'Upper and lower bounds in measurement',
  subtitle: 'Cambridge insert: every measurement is an interval, and every calculation from it is an interval too.',
  uz: 'Geometry 11, §11 (extension)', uzPage: 'pp. 119–122',
  cam: 'IGCSE E13.3', camPage: 'Core & Extended, pp. 44–48', wb: 'IGCSE Exercise 13.3',
  objectives: [
    'Write the upper and lower bound of a rounded measurement.',
    'Find the bounds of a sum, difference, product and quotient.',
    'Apply bounds to the area and volume of a solid.',
    'Decide how many figures an answer can honestly carry.'
  ],
  terms: [
    ['Upper bound', 'Yuqori chegara', 'Верхняя граница'],
    ['Lower bound', 'Quyi chegara', 'Нижняя граница'],
    ['Rounded to the nearest', 'Yaxlitlangan', 'Округлено до'],
    ['Degree of accuracy', 'Aniqlik darajasi', 'Степень точности'],
    ['Interval of values', 'Qiymatlar oralig‘i', 'Промежуток значений'],
    ['Maximum value', 'Eng katta qiymat', 'Максимальное значение'],
    ['Minimum value', 'Eng kichik qiymat', 'Минимальное значение'],
    ['Significant figures', 'Muhim raqamlar', 'Значащие цифры']
  ],
  timing: [[8, 'A measurement is an interval'], [12, 'The four operations'], [14, 'Areas and volumes'], [8, 'How many figures'], [3, 'Homework']],
  sections: [
    {
      h: 'A measurement is an interval',
      html: `<div class="keybox"><div class="klabel">Half the rounding unit, each way</div>
      A length given as ${m('8')} cm to the nearest cm lies in ${m('7.5 ≤ ℓ < 8.5')}.
      To the nearest ${m('0.1')} cm, ${m('8.0')} means ${m('7.95 ≤ ℓ < 8.05')}.</div>
      <p>The lower bound is included and the upper is not — but at this level both are written as
      ${m('≤')}, and the distinction is only mentioned.</p>
      {{fig:errorBounds:The interval a rounded value stands for. Half a unit each side.}}`
    },
    {
      h: 'The four operations',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Quantity</th><th>Greatest when</th><th>Least when</th></tr></thead>
      <tbody>
        <tr><td class="m">a + b</td><td>both are greatest</td><td>both are least</td></tr>
        <tr><td class="m">a − b</td><td>${m('a')} greatest, ${m('b')} least</td><td>${m('a')} least, ${m('b')} greatest</td></tr>
        <tr><td class="m">a × b</td><td>both greatest</td><td>both least</td></tr>
        <tr><td class="m">${f('a', 'b')}</td><td>${m('a')} greatest, ${m('b')} least</td><td>${m('a')} least, ${m('b')} greatest</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Subtraction and division swap the bounds</span>
      To make a difference as large as possible, take the largest top and the <b>smallest</b> bottom.
      Using the upper bound of both is the standard error.</div>`
    },
    {
      h: 'Areas and volumes',
      html: `<p>A cuboid measured as ${m('6 × 8 × 10')} cm, each to the nearest cm, has</p>
      ${eq(m('V_max = 6.5 × 8.5 × 10.5 = 580.125') + '     ' + m('V_min = 5.5 × 7.5 × 9.5 = 391.875'), true)}
      <p>The stated volume is ${m('480')} cm³, but the true value lies anywhere in a range of nearly
      ${m('190')} cm³. Small uncertainties in three lengths compound sharply in the product.</p>
      <div class="keybox"><div class="klabel">Why this insert sits here</div>
      Every surface-area and volume formula of this quarter multiplies two or three measured lengths.
      Bounds are how a real answer is stated, and the reason a measured result is never quoted to eight
      figures.</div>`
    },
    {
      h: 'How many figures',
      html: `<p>Quote the answer only to the digits that agree between the upper and lower bounds. For
      the cuboid: ${m('V_min = 391.9')}, ${m('V_max = 580.1')} — not even the first digit agrees, so
      the honest statement is “between about ${m('390')} and ${m('580')} cm³”.</p>
      <p>Measure the same box to the nearest millimetre and the bounds become ${m('478.5')} and
      ${m('481.5')}: now “${m('480')} cm³” is justified.</p>`
    }
  ],
  examples: [
    {
      q: 'A length is ' + m('12.4') + ' cm to 1 d.p. Give its bounds.',
      steps: [
        ['Rounding unit ' + m('0.1') + '; half is ' + m('0.05') + '.', ''],
        [m('12.35 ≤ ℓ ≤ 12.45'), '']
      ],
      ans: m('12.35') + ' and ' + m('12.45') + ' cm'
    },
    {
      q: 'A rectangle is ' + m('7') + ' cm by ' + m('4') + ' cm, each to the nearest cm. Find the bounds of its area.',
      steps: [
        [m('6.5 ≤ a ≤ 7.5') + ', ' + m('3.5 ≤ b ≤ 4.5') + '.', ''],
        [m('A_min = 6.5 × 3.5 = 22.75'), ''],
        [m('A_max = 7.5 × 4.5 = 33.75'), '']
      ],
      ans: m('22.75') + ' to ' + m('33.75') + ' cm²'
    },
    {
      q: 'A journey of ' + m('150') + ' km (to the nearest 10 km) takes ' + m('2.5') + ' h (to the nearest 0.1 h). Find the greatest possible speed.',
      steps: [
        ['Distance greatest: ' + m('155') + '.', ''],
        ['Time least: ' + m('2.45') + '.', ''],
        [m(f('155', '2.45') + ' ≈ 63.3'), '']
      ],
      ans: m('≈ 63.3') + ' km/h'
    }
  ],
  modelNote: 'Measure the same object with a ruler and with a tape and compare the intervals.',
  interactive: {
    type: 'quiz',
    title: 'Bounds',
    hint: 'Half the rounding unit each way; then think about which extreme makes the answer largest.',
    items: [
      { q: m('8') + ' cm to the nearest cm has lower bound:', a: [m('7'), m('7.5'), m('7.9'), m('8')], c: 1, why: 'Half a unit below.' },
      { q: m('4.60') + ' to 2 d.p. has upper bound:', a: [m('4.61'), m('4.605'), m('4.65'), m('4.7')], c: 1, why: 'Half of ' + m('0.01') + '.' },
      { q: 'To maximise ' + m('a − b') + ' take:', a: ['both maxima', 'both minima', m('a') + ' max, ' + m('b') + ' min', m('a') + ' min, ' + m('b') + ' max'], c: 2, why: 'Subtract as little as possible.' },
      { q: 'To maximise ' + m(f('a', 'b')) + ' take:', a: ['both maxima', m('a') + ' max, ' + m('b') + ' min', 'both minima', m('a') + ' min, ' + m('b') + ' max'], c: 1, why: 'Divide by as little as possible.' },
      { q: 'A ' + m('7 × 4') + ' rectangle (nearest cm) has greatest area:', a: [m('28'), m('30'), m('33.75'), m('35')], c: 2, why: m('7.5 × 4.5') + '.' }
    ]
  },
  quiz: [
    { q: m('20') + ' m to the nearest 10 m lies in:', a: [m('19–21'), m('15–25'), m('19.5–20.5'), m('10–30')], c: 1, why: 'Half of 10.' },
    { q: 'A measurement is best described as:', a: ['an exact number', 'an interval', 'a guess', 'a fraction'], c: 1, why: 'Rounding hides a range.' },
    { q: 'Bounds of a volume from three measured lengths:', a: ['add', 'multiply the corresponding bounds', 'stay the same', 'halve'], c: 1, why: 'All three extremes together.' },
    { q: 'An answer should be quoted to:', a: ['as many figures as the calculator gives', 'the figures the bounds agree on', 'two figures always', 'one figure'], c: 1, why: 'Beyond that it is not known.' }
  ],
  practice: {
    easy: [
      ['Bounds of ' + m('9') + ' cm to the nearest cm', m('8.5') + ' and ' + m('9.5')],
      ['Bounds of ' + m('4.2') + ' to 1 d.p.', m('4.15') + ' and ' + m('4.25')],
      ['Bounds of ' + m('300') + ' to the nearest 100', m('250') + ' and ' + m('350')],
      ['Bounds of ' + m('12.40') + ' to 2 d.p.', m('12.395') + ' and ' + m('12.405')],
      ['Greatest ' + m('a + b') + ' for ' + m('a = 5, b = 3') + ' (nearest 1)', m('9')],
      ['Least ' + m('a + b') + ' for the same', m('7')],
      ['Greatest ' + m('a − b') + ' for the same', m('3')]
    ],
    med: [
      ['Rectangle ' + m('7 × 4') + ' (nearest cm): area bounds', m('22.75') + ' to ' + m('33.75')],
      ['Cuboid ' + m('6 × 8 × 10') + ' (nearest cm): volume bounds', m('391.875') + ' to ' + m('580.125')],
      ['Speed: ' + m('150') + ' km (nearest 10), ' + m('2.5') + ' h (nearest 0.1). Greatest speed', m('≈ 63.3') + ' km/h'],
      ['Same: least speed', m('≈ 56.9') + ' km/h'],
      ['A square of side ' + m('5.0') + ' cm (1 d.p.): area bounds', m('24.5025') + ' to ' + m('25.5025')],
      ['A cube of edge ' + m('4') + ' cm (nearest cm): volume bounds', m('42.875') + ' to ' + m('91.125')],
      ['To how many figures can that volume be quoted?', 'none — not even the first digit agrees']
    ],
    hard: [
      ['A circle of radius ' + m('6.0') + ' cm (1 d.p.): area bounds', m('≈ 111.2') + ' to ' + m('≈ 115.0')],
      ['A cylinder ' + m('r = 3, h = 10') + ' (nearest 1): volume bounds', m('≈ 205.6') + ' to ' + m('≈ 405.7')],
      ['A density is ' + m(f('m', 'V')) + ' with ' + m('m = 250') + ' g (nearest 10) and ' + m('V = 50') + ' cm³ (nearest 5). Greatest density', m('≈ 5.42') + ' g/cm³'],
      ['Same: least density', m('≈ 4.62') + ' g/cm³'],
      ['A rectangle has area ' + m('40') + ' cm² and length ' + m('8') + ' cm, both to the nearest unit. Greatest width', m('≈ 5.4') + ' cm'],
      ['Explain why bounds widen faster for a volume than for a length', 'Three uncertainties multiply'],
      ['A pipe is ' + m('2.0') + ' m long to 1 d.p.; how many fit in ' + m('50') + ' m to the nearest metre?', 'at least ' + m('24') + ', at most ' + m('25')]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Always state both bounds, and say which extreme you used and why.',
  homework: [
    'Write the bounds of ' + m('15') + ' cm (nearest cm), ' + m('3.7') + ' m (1 d.p.) and ' + m('600') + ' g (nearest 100 g).',
    'A cuboid measures ' + m('4 × 6 × 9') + ' cm, each to the nearest cm. Find the bounds of its volume.',
    'A car travels ' + m('80') + ' km (nearest 10 km) in ' + m('1.5') + ' h (nearest 0.1 h). Find the greatest and least possible speeds.',
    'Explain, with the cuboid of task 2, why the answer cannot honestly be quoted to three figures.'
  ]
});

/* ============================== 15 ============================== */
G11_GEO.push({
  id: 'g11-15', stream: 'geo', grade: 11, quarter: 2, lessons: '25', hours: 1,
  title: 'The concept of volume, and the volume of a parallelepiped',
  subtitle: 'What a volume is before any formula — three properties, and the cuboid they force.',
  uz: 'Geometry 11, §12', uzPage: 'pp. 123–128',
  cam: 'IGCSE E13.1', camPage: 'Core & Extended, pp. 301–304', wb: 'Exercise 12.1',
  objectives: [
    'State the three defining properties of volume.',
    'Derive V = abc for a cuboid from those properties.',
    'Compute the volume of a parallelepiped.',
    'Convert between units of volume.'
  ],
  terms: [
    ['Volume', 'Hajm', 'Объём'],
    ['Unit cube', 'Birlik kub', 'Единичный куб'],
    ['Additivity', 'Additivlik', 'Аддитивность'],
    ['Congruent solids', 'Teng jismlar', 'Равные тела'],
    ['Cubic unit', 'Kub birlik', 'Кубическая единица'],
    ['Parallelepiped', 'Parallelepiped', 'Параллелепипед'],
    ['Base area', 'Asos yuzasi', 'Площадь основания'],
    ['Height of a solid', 'Jism balandligi', 'Высота тела'],
    ['Capacity', 'Sig‘im', 'Вместимость']
  ],
  timing: [[10, 'What volume is'], [12, 'The cuboid'], [12, 'The parallelepiped'], [8, 'Units'], [3, 'Homework']],
  sections: [
    {
      h: 'The three properties',
      html: `<div class="keybox"><div class="klabel">Volume is defined by what it does</div>
      <b>1</b> Congruent solids have equal volumes.
      <b>2</b> If a solid is cut into pieces, the volumes add.
      <b>3</b> The unit cube has volume ${m('1')}.</div>
      <p>Nothing else is assumed. Every formula in this chapter is a consequence of these three
      statements, and the first formula follows almost immediately.</p>`
    },
    {
      h: 'The cuboid',
      html: `<p>A cuboid ${m('a × b × c')} with whole-number edges can be filled with exactly
      ${m('abc')} unit cubes: ${m('ab')} in the bottom layer, and ${m('c')} layers. By properties 2 and 3
      its volume is ${m('abc')}.</p>
      ${eq(m('V = abc = B · h'), true)}
      <p>For fractional and then irrational edges the same result follows by squeezing between cuboids
      with rational edges. The formula, once proved for whole numbers, holds for all.</p>
      {{fig:prismVolume:The bottom layer holds ab cubes; there are c layers.}}`
    },
    {
      h: 'The parallelepiped',
      html: `<p>An oblique parallelepiped has the same volume as the right one on the same base with the
      same height. The proof is Cavalieri's principle: every horizontal slice of the two solids has the
      same area, so the volumes agree.</p>
      {{fig:cavalieri:Slide the layers sideways. Nothing is added or removed, so the volume is unchanged.}}
      ${eq(m('V = B · h') + '   for every parallelepiped, right or oblique', true)}
      <div class="warn"><span class="wl">${m('h')} is the perpendicular height</span>
      Not the lateral edge. In an oblique solid the lateral edge is longer than the height, and using it
      inflates the answer.</div>`
    },
    {
      h: 'Units',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Length</th><th>Volume</th><th>Factor</th></tr></thead>
      <tbody>
        <tr><td class="m">1 cm = 10 mm</td><td class="m">1 cm³ = 1000 mm³</td><td class="m">10³</td></tr>
        <tr><td class="m">1 m = 100 cm</td><td class="m">1 m³ = 1 000 000 cm³</td><td class="m">100³</td></tr>
        <tr><td class="m">—</td><td class="m">1 litre = 1000 cm³</td><td>—</td></tr>
        <tr><td class="m">—</td><td class="m">1 m³ = 1000 litres</td><td>—</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Cube the length factor</span>
      ${m('1 m³')} is not ${m('100')} cm³ but ${m('1 000 000')}. This is the ${m('k³')} rule of Grade 11
      similarity, applied to a change of unit.</div>`
    }
  ],
  examples: [
    {
      q: 'A cuboid is ' + m('12 × 8 × 5') + ' cm. Find its volume in cm³ and in litres.',
      steps: [
        [m('V = 480') + ' cm³.', ''],
        [m('1') + ' litre ' + m('= 1000') + ' cm³.', ''],
        [m('0.48') + ' litres.', '']
      ],
      ans: m('480') + ' cm³ = ' + m('0.48') + ' litres'
    },
    {
      q: 'An oblique parallelepiped has base area ' + m('30') + ' cm² and lateral edge ' + m('10') + ' cm inclined at ' + m('60°') + ' to the base. Find its volume.',
      steps: [
        ['Height ' + m('h = 10 sin 60° = 5' + sr('3') + ' ≈ 8.66') + '.', 'Not ' + m('10') + '.'],
        [m('V = 30 × 8.66'), ''],
        [m('≈ 259.8'), '']
      ],
      ans: m('150' + sr('3')) + ' ≈ ' + m('260') + ' cm³'
    },
    {
      q: 'A tank holds ' + m('2.4') + ' m³. How many litres is that?',
      steps: [
        [m('1') + ' m³ ' + m('= 1000') + ' litres.', ''],
        [m('2.4 × 1000'), '']
      ],
      ans: m('2400') + ' litres'
    }
  ],
  modelNote: 'Fill a box with unit cubes, one layer at a time, and count aloud.',
  interactive: {
    type: 'solidVolume',
    title: 'Base area times height',
    hint: 'Change the base and the height, and watch B, S and V respond.'
  },
  quiz: [
    { q: 'The volume of a unit cube is:', a: [m('0'), m('1'), m('6'), m('3')], c: 1, why: 'By definition.' },
    { q: 'Volume of a cuboid ' + m('a × b × c') + ':', a: [m('2(ab + bc + ca)'), m('abc'), m('a + b + c'), m('3abc')], c: 1, why: 'Layers of unit cubes.' },
    { q: m('1') + ' m³ in cm³:', a: [m('100'), m('10 000'), m('1 000 000'), m('1000')], c: 2, why: m('100³') + '.' },
    { q: m('1') + ' litre in cm³:', a: [m('100'), m('1000'), m('10 000'), m('1')], c: 1, why: 'By definition.' },
    { q: 'For an oblique solid ' + m('V = Bh') + ' where ' + m('h') + ' is:', a: ['the lateral edge', 'the perpendicular height', 'the diagonal', 'the base edge'], c: 1, why: 'Cavalieri’s principle.' }
  ],
  practice: {
    easy: [
      ['Volume of a ' + m('3 × 4 × 5') + ' cuboid', m('60')],
      ['Volume of a cube of edge 6', m('216')],
      [m('1') + ' m³ in litres', m('1000')],
      [m('2500') + ' cm³ in litres', m('2.5')],
      [m('1') + ' cm³ in mm³', m('1000')],
      ['A cube of volume 125: its edge', m('5')],
      ['Volume with ' + m('B = 20, h = 7'), m('140')]
    ],
    med: [
      ['Cuboid ' + m('12 × 8 × 5') + ' in litres', m('0.48')],
      ['Oblique parallelepiped, ' + m('B = 30') + ', edge 10 at ' + m('60°'), m('150' + sr('3')) + ' ≈ ' + m('260')],
      ['A tank of ' + m('2.4') + ' m³ in litres', m('2400')],
      ['A cuboid of volume 720 with base ' + m('12 × 10') + ': its height', m('6')],
      ['A cube of surface area 216: its volume', m('216')],
      ['Convert ' + m('0.75') + ' m³ to cm³', m('750 000')],
      ['A regular hexagonal prism, base edge 4, height 10: volume', m('240' + sr('3')) + ' ≈ ' + m('416')]
    ],
    hard: [
      ['A parallelepiped has edges 6, 8, 10 with the 10-edge at ' + m('45°') + ' to the base. Volume', m('240' + sr('2')) + ' ≈ ' + m('339')],
      ['A cuboid of volume ' + m('V') + ' is scaled by ' + m('k') + '. New volume', m('k³V')],
      ['A cube of volume 64 cm³: its surface area', m('96') + ' cm²'],
      ['A tank ' + m('2 m × 1.5 m × 0.8 m') + ' holds how many litres?', m('2400')],
      ['A brick is ' + m('24 × 12 × 6') + ' cm. How many in a ' + m('1') + ' m³ wall?', m('578') + ' (allowing no mortar)'],
      ['Prove ' + m('V = abc') + ' for whole-number edges from the three properties', 'Fill with ' + m('abc') + ' unit cubes and add'],
      ['Why does the same formula hold for irrational edges?', 'Squeeze between rational cuboids']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Always state the unit, and convert with the cube of the length factor.',
  homework: [
    'Find the volume of a ' + m('15 × 9 × 4') + ' cm cuboid in cm³ and in litres.',
    'An oblique parallelepiped has base area ' + m('48') + ' cm² and lateral edge ' + m('12') + ' cm inclined at ' + m('30°') + '. Find its volume.',
    'Convert ' + m('3.6') + ' m³ to litres and to cm³.',
    'Explain in three sentences why ' + m('1') + ' m³ is a million cm³ and not a hundred.'
  ]
});

/* ============================== 16 ============================== */
G11_GEO.push({
  id: 'g11-16', stream: 'geo', grade: 11, quarter: 2, lessons: '26–27', hours: 2,
  title: 'The volume of a prism',
  subtitle: 'Base area times height, for every prism — and the dissection that proves it.',
  uz: 'Geometry 11, §13', uzPage: 'pp. 129–140',
  cam: 'IGCSE E13.x', camPage: 'Core & Extended, pp. 305–310', wb: 'Exercise 13.1',
  objectives: [
    'Derive V = Bh for a triangular prism from the parallelepiped.',
    'Compute the volume of any prism.',
    'Solve for a missing dimension from a given volume.',
    'Handle compound solids made of prisms.'
  ],
  terms: [
    ['Volume of a prism', 'Prizma hajmi', 'Объём призмы'],
    ['Base area', 'Asos yuzasi', 'Площадь основания'],
    ['Height', 'Balandlik', 'Высота'],
    ['Dissection', 'Bo‘lish', 'Разбиение'],
    ['Cavalieri’s principle', 'Kavaleri prinsipi', 'Принцип Кавальери'],
    ['Compound solid', 'Murakkab jism', 'Составное тело'],
    ['Cross-section', 'Ko‘ndalang kesim', 'Поперечное сечение'],
    ['Uniform cross-section', 'O‘zgarmas kesim', 'Постоянное сечение'],
    ['Capacity', 'Sig‘im', 'Вместимость']
  ],
  timing: [[14, 'From the cuboid to any prism'], [20, 'Applying the formula'], [20, 'Working backwards'], [22, 'Compound solids'], [16, 'Practice'], [8, 'Homework']],
  sections: [
    {
      h: 'From the cuboid to any prism',
      html: `<p><b>Step 1.</b> A parallelepiped is a cuboid with the layers slid sideways, so
      ${m('V = Bh')} by Cavalieri.</p>
      <p><b>Step 2.</b> A triangular prism is half a parallelepiped, cut along a diagonal plane. Both
      halves are congruent, so each has volume ${m(f('1', '2') + 'B_p h = B h')}, where ${m('B')} is now
      the triangle's area.</p>
      <p><b>Step 3.</b> Any polygonal base splits into triangles; the prism splits into triangular
      prisms of the same height, and the volumes add.</p>
      ${eq(m('V = B · h') + '   for every prism', true)}
      {{fig:cavalieri:Cavalieri’s principle: equal slices at every height mean equal volumes.}}
      <div class="keybox"><div class="klabel">The idea behind every volume formula</div>
      <b>A solid of uniform cross-section has volume = area of cross-section × length.</b> The cylinder
      of the next lesson is the same statement with a circle instead of a polygon.</div>`
    },
    {
      h: 'Applying it',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Prism</th><th class="m">B</th><th class="m">V</th></tr></thead>
      <tbody>
        <tr><td>cuboid ${m('a × b')}, height ${m('h')}</td><td class="m">ab</td><td class="m">abh</td></tr>
        <tr><td>right triangular, legs ${m('p, q')}</td><td class="m">${f('1', '2')}pq</td><td class="m">${f('1', '2')}pqh</td></tr>
        <tr><td>regular triangular, edge ${m('a')}</td><td class="m">${f(sr('3'), '4')}a²</td><td class="m">${f(sr('3'), '4')}a²h</td></tr>
        <tr><td>regular hexagonal, edge ${m('a')}</td><td class="m">${f('3' + sr('3'), '2')}a²</td><td class="m">${f('3' + sr('3'), '2')}a²h</td></tr>
        <tr><td>trapezium base ${m('p, q')}, depth ${m('d')}</td><td class="m">${f('p + q', '2')}d</td><td class="m">${f('p + q', '2')}dh</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'Compound solids',
      html: `<p>Real objects — an L-shaped room, a channel, a house with a roof — are prisms with a
      compound cross-section. Find the area of the whole cross-section first, then multiply once.</p>
      <p><b>Example.</b> A shed is a cuboid ${m('6 × 4')} m and ${m('2.5')} m to the eaves, with a
      triangular roof ${m('1.5')} m high. Cross-section: rectangle ${m('4 × 2.5 = 10')} plus triangle
      ${m(f('1', '2') + ' × 4 × 1.5 = 3')}, total ${m('13')} m². Volume ${m('13 × 6 = 78')} m³.</p>
      <div class="warn"><span class="wl">Multiply once, at the end</span>
      Computing each part's volume separately works too, but doubles the arithmetic and the chances of
      error. Add the areas first.</div>`
    }
  ],
  examples: [
    {
      q: 'A regular hexagonal prism has base edge 5 cm and height 12 cm. Find its volume.',
      steps: [
        [m('B = ' + f('3' + sr('3'), '2') + ' × 25 ≈ 64.95'), ''],
        [m('V = 64.95 × 12'), ''],
        [m('≈ 779.4'), '']
      ],
      ans: m('150' + sr('3') + ' × ' + f('12', '2')) + ' — i.e. ' + m('≈ 779') + ' cm³'
    },
    {
      q: 'A trough has a trapezium cross-section with parallel sides 40 cm and 60 cm, depth 30 cm, and is 2 m long. Find its capacity in litres.',
      steps: [
        [m('B = ' + f('40 + 60', '2') + ' × 30 = 1500') + ' cm².', ''],
        [m('V = 1500 × 200 = 300 000') + ' cm³.', ''],
        [m('= 300') + ' litres.', '']
      ],
      ans: m('300') + ' litres'
    },
    {
      q: 'A prism has volume ' + m('540') + ' cm³ and a triangular base with legs 6 and 9. Find its height.',
      steps: [
        [m('B = ' + f('1', '2') + ' × 6 × 9 = 27'), ''],
        [m('27h = 540'), ''],
        [m('h = 20'), '']
      ],
      ans: m('20') + ' cm'
    }
  ],
  modelNote: 'Cut a parallelepiped of plasticine along a diagonal plane and compare the two halves.',
  interactive: {
    type: 'solidVolume',
    title: 'The volume of a prism',
    hint: 'Change the base edge, the number of sides and the height.'
  },
  quiz: [
    { q: 'The volume of any prism is:', a: [m('Ph'), m('Bh'), m('2B + Ph'), m(f('1', '3') + 'Bh')], c: 1, why: 'Uniform cross-section.' },
    { q: 'A triangular prism is:', a: ['a third of a cuboid', 'half a parallelepiped', 'a quarter of a cube', 'unrelated'], c: 1, why: 'Cut along a diagonal plane.' },
    { q: 'Cavalieri’s principle says:', a: ['equal bases give equal volumes', 'equal slice areas at every height give equal volumes', 'volumes always add', 'nothing about volume'], c: 1, why: 'That is its statement.' },
    { q: 'A prism of ' + m('B = 27') + ' and ' + m('V = 540') + ' has height:', a: [m('15'), m('20'), m('27'), m('30')], c: 1, why: m(f('540', '27')) + '.' },
    { q: 'For a compound cross-section you should:', a: ['multiply each part', 'add the areas then multiply once', 'take the largest', 'average them'], c: 1, why: 'Fewer steps, fewer errors.' }
  ],
  practice: {
    easy: [
      ['Volume with ' + m('B = 12, h = 5'), m('60')],
      ['Cuboid ' + m('4 × 5 × 6'), m('120')],
      ['Right triangular prism, legs 3 and 4, height 10', m('60')],
      ['Cube of edge 8', m('512')],
      ['Prism ' + m('B = 25, h = 4'), m('100')],
      ['A prism of ' + m('V = 100, B = 20') + ': the height', m('5')],
      ['Regular triangular prism, edge 4, height 6', m('24' + sr('3'))]
    ],
    med: [
      ['Regular hexagonal prism, edge 5, height 12', m('≈ 779') + ' cm³'],
      ['Trough, trapezium 40/60 by 30 cm, 2 m long: litres', m('300')],
      ['Prism ' + m('V = 540') + ', triangular base legs 6 and 9: height', m('20')],
      ['Regular hexagonal prism, edge 4, height 10', m('240' + sr('3')) + ' ≈ ' + m('416')],
      ['Shed: rectangle ' + m('4 × 2.5') + ' plus roof triangle height 1.5, length 6 m', m('78') + ' m³'],
      ['An L-shaped cross-section of area 34 cm², length 15 cm', m('510') + ' cm³'],
      ['A cuboid of volume 600 with base ' + m('10 × 12') + ': height', m('5')]
    ],
    hard: [
      ['A prism has a rhombus base with diagonals 10 and 24, height 15. Volume', m('1800')],
      ['A regular hexagonal prism of volume ' + m('648' + sr('3')) + ' and edge 6: its height', m('12')],
      ['A channel of trapezium section 1.2 m and 2 m wide, 0.8 m deep, 30 m long: capacity in m³', m('38.4')],
      ['Two similar prisms of volumes ' + m('54') + ' and ' + m('128') + ': the surface-area ratio', m('9 : 16')],
      ['A cube is cut by a plane through ' + m('A, C, B₁') + '. Find the volume of the smaller piece for edge 6', m('36')],
      ['A prism’s height doubles and its base edges halve. What happens to the volume?', 'It halves'],
      ['Prove ' + m('V = Bh') + ' for a triangular prism', 'It is half a parallelepiped on twice the base']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Add the cross-sectional areas before multiplying by the length.',
  homework: [
    'A regular hexagonal prism has base edge 6 cm and height 14 cm. Find its volume.',
    'A trough has a trapezium section with parallel sides 30 cm and 50 cm and depth 25 cm, and is 3 m long. Find its capacity in litres.',
    'A prism has volume ' + m('420') + ' cm³ and a triangular base with legs 7 and 8. Find its height.',
    'A shed has a rectangular cross-section ' + m('5 × 3') + ' m with a triangular roof ' + m('2') + ' m high, and is ' + m('8') + ' m long. Find its volume.',
    'Prove that a triangular prism has volume ' + m('Bh') + ', starting from the parallelepiped.'
  ]
});

/* ============================== 17 ============================== */
G11_GEO.push({
  id: 'g11-17', stream: 'geo', grade: 11, quarter: 2, lessons: '28–29', hours: 2,
  title: 'The cylinder — surface area and volume',
  subtitle: 'A prism whose base is a circle: the same two formulas, with π in them.',
  uz: 'Geometry 11, §14', uzPage: 'pp. 141–152',
  cam: 'IGCSE E13.x', camPage: 'Core & Extended, pp. 311–318', wb: 'Exercise 14.1',
  objectives: [
    'Derive the surface area of a cylinder from its net.',
    'Compute the volume of a cylinder.',
    'Solve for a missing radius or height.',
    'Handle hollow cylinders and compound solids.'
  ],
  terms: [
    ['Cylinder', 'Silindr', 'Цилиндр'],
    ['Axis of a cylinder', 'Silindr o‘qi', 'Ось цилиндра'],
    ['Base circle', 'Asos aylanasi', 'Основание'],
    ['Curved surface', 'Yon sirt', 'Боковая поверхность'],
    ['Net of a cylinder', 'Silindr yoymasi', 'Развёртка цилиндра'],
    ['Axial section', 'O‘qli kesim', 'Осевое сечение'],
    ['Hollow cylinder (pipe)', 'Bo‘sh silindr', 'Полый цилиндр'],
    ['Capacity', 'Sig‘im', 'Вместимость'],
    ['Solid of revolution', 'Aylanish jismi', 'Тело вращения']
  ],
  timing: [[12, 'A prism with a circular base'], [22, 'The net and the area'], [22, 'The volume'], [22, 'Working backwards'], [20, 'Compound solids'], [8, 'Homework']],
  sections: [
    {
      h: 'A prism with a circular base',
      html: `<p>A <b>cylinder</b> is the solid swept out when a rectangle turns about one of its sides.
      Its two bases are congruent circles in parallel planes, and every cross-section parallel to the
      base is the same circle.</p>
      <p>So the principle of the last lesson applies unchanged: <b>uniform cross-section means
      ${m('V = Bh')}</b>, with ${m('B = πr²')}.</p>
      ${eq(m('V = πr²h'), true)}`
    },
    {
      h: 'The net and the surface area',
      html: `{{fig:cylinderNet:Cut down one side and unroll: two circles and a rectangle 2πr wide.}}
      <p>The curved surface unrolls into a rectangle whose width is the circumference of the base and
      whose height is the cylinder's height:</p>
      ${eq(m('S_curved = 2πrh') + '     ' + m('S_total = 2πr² + 2πrh = 2πr(r + h)'), true)}
      <div class="warn"><span class="wl">Curved, or total?</span>
      A tin has two ends. A pipe has none. A cup has one. Read the object before choosing the formula —
      the question always describes it precisely enough to decide.</div>`
    },
    {
      h: 'Working backwards',
      html: `<p>Given a volume and one dimension, the other follows:</p>
      ${eq(m('r = ' + sr(f('V', 'πh'))) + '     ' + m('h = ' + f('V', 'πr²')), true)}
      <p><b>Example.</b> A cylindrical tin holds ${m('500')} ml and is ${m('12')} cm tall. Its radius is
      ${m(sr(f('500', '12π')) + ' ≈ 3.64')} cm.</p>
      <p>Given a <b>surface area</b> and one dimension, the equation is quadratic in ${m('r')} — solve it
      with the formula and reject the negative root.</p>`
    },
    {
      h: 'Hollow and compound solids',
      html: `<p>A pipe of outer radius ${m('R')} and inner radius ${m('r')} is the difference of two
      cylinders:</p>
      ${eq(m('V = π(R² − r²)h'), true)}
      <p>Do <b>not</b> compute ${m('π(R − r)²h')} — the cross-section is an annulus, whose area is a
      difference of two circles, not the circle on the difference of the radii.</p>
      <p><b>Compound solids.</b> A silo is a cylinder with a hemisphere on top; a pencil is a hexagonal
      prism with a cone. Split, compute each, add — and remember that the joining faces are internal and
      contribute nothing to the surface area.</p>
      <div class="keybox"><div class="klabel">The axial section</div>
      Cutting a cylinder through its axis gives a rectangle ${m('2r')} by ${m('h')}. A cylinder whose
      axial section is a square has ${m('h = 2r')} — the shape that minimises the surface area for a
      fixed volume, as Lesson 23–25 of Quarter I showed.</div>`
    }
  ],
  examples: [
    {
      q: 'A cylinder has radius 5 cm and height 12 cm. Find its volume and total surface area.',
      steps: [
        [m('V = π × 25 × 12 = 300π'), m('≈ 942.5') + ' cm³'],
        [m('S = 2π(25) + 2π(5)(12)'), ''],
        [m('= 50π + 120π = 170π'), m('≈ 534.1') + ' cm²']
      ],
      ans: m('300π') + ' ≈ ' + m('942') + ' cm³; ' + m('170π') + ' ≈ ' + m('534') + ' cm²'
    },
    {
      q: 'A cylindrical tin holds ' + m('500') + ' ml and is ' + m('12') + ' cm tall. Find its radius.',
      steps: [
        [m('500 = πr² × 12'), '1 ml = 1 cm³.'],
        [m('r² = ' + f('500', '12π') + ' ≈ 13.26'), ''],
        [m('r ≈ 3.64'), '']
      ],
      ans: m('≈ 3.64') + ' cm'
    },
    {
      q: 'A pipe is 2 m long with outer radius 8 cm and inner radius 6 cm. Find the volume of metal.',
      steps: [
        [m('V = π(64 − 36) × 200'), 'Length in cm.'],
        [m('= π × 28 × 200'), ''],
        [m('= 5600π ≈ 17 593'), '']
      ],
      ans: m('5600π') + ' ≈ ' + m('17 600') + ' cm³'
    }
  ],
  modelNote: 'Unroll a tin label and measure the rectangle — its width is the circumference.',
  interactive: {
    type: 'solidVolume',
    title: 'The cylinder',
    hint: 'Change the radius and the height and compare S with V.',
    kind: 'cylinder'
  },
  quiz: [
    { q: 'The volume of a cylinder is:', a: [m('2πrh'), m('πr²h'), m('πrh'), m(f('1', '3') + 'πr²h')], c: 1, why: 'Base area times height.' },
    { q: 'The curved surface area is:', a: [m('πr²'), m('2πrh'), m('2πr²'), m('πr²h')], c: 1, why: 'Circumference times height.' },
    { q: 'The total surface area is:', a: [m('2πrh'), m('2πr(r + h)'), m('πr(r + h)'), m('πr²h')], c: 1, why: 'Two circles plus the rectangle.' },
    { q: 'A pipe’s cross-section area is:', a: [m('π(R − r)²'), m('π(R² − r²)'), m('πR²'), m('2πR')], c: 1, why: 'A difference of circles.' },
    { q: 'A cylinder with a square axial section has:', a: [m('h = r'), m('h = 2r'), m('h = 4r'), m('r = 2h')], c: 1, why: 'The section is ' + m('2r') + ' by ' + m('h') + '.' }
  ],
  practice: {
    easy: [
      ['Volume, ' + m('r = 3, h = 10'), m('90π') + ' ≈ ' + m('283')],
      ['Volume, ' + m('r = 2, h = 7'), m('28π') + ' ≈ ' + m('88')],
      ['Curved area, ' + m('r = 5, h = 4'), m('40π')],
      ['Total area, ' + m('r = 1, h = 3'), m('8π')],
      ['A tin of ' + m('r = 4, h = 10') + ': volume in litres', m('≈ 0.503')],
      ['Volume, ' + m('r = 10, h = 10'), m('1000π')],
      ['Curved area, ' + m('r = 7, h = 2'), m('28π')]
    ],
    med: [
      [m('r = 5, h = 12') + ': volume and total area', m('300π') + '; ' + m('170π')],
      ['A tin holds 500 ml and is 12 cm tall: its radius', m('≈ 3.64') + ' cm'],
      ['A cylinder of volume ' + m('1000π') + ' and radius 10: its height', m('10')],
      ['Pipe, 2 m long, ' + m('R = 8, r = 6') + ': metal volume', m('5600π') + ' ≈ ' + m('17 600') + ' cm³'],
      ['A cylinder with a square axial section and ' + m('r = 6') + ': its volume', m('432π')],
      ['A cup (no lid), ' + m('r = 4, h = 9') + ': surface area', m('88π')],
      ['A cylinder of total area ' + m('100π') + ' and ' + m('r = 5') + ': its height', m('5')]
    ],
    hard: [
      ['A closed cylinder of volume ' + m('1000') + ' cm³ with least surface area: find ' + m('r'), m('≈ 5.42') + ' cm'],
      ['A silo: cylinder ' + m('r = 3, h = 10') + ' with a hemisphere on top. Volume', m('108π') + ' ≈ ' + m('339')],
      ['Same silo: external surface area (no base)', m('78π')],
      ['A cylinder is inscribed in a cube of edge 10. Its volume', m('250π')],
      ['A cylinder of height 15 has curved area ' + m('120π') + '. Find ' + m('r') + ' and ' + m('V'), m('r = 4') + ', ' + m('V = 240π')],
      ['A pipe of length ' + m('L') + ', outer ' + m('R') + ', wall thickness ' + m('t') + ': metal volume', m('πL(2Rt − t²)')],
      ['Two similar cylinders of volumes ' + m('27') + ' and ' + m('64') + ': the area ratio', m('9 : 16')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Say whether the solid is closed, open or hollow before choosing the formula.',
  homework: [
    'A cylinder has radius 6 cm and height 15 cm. Find its volume and total surface area.',
    'A cylindrical can holds ' + m('750') + ' ml and has radius ' + m('5') + ' cm. Find its height.',
    'A pipe is 3 m long with outer radius 10 cm and inner radius 8 cm. Find the volume of metal in cm³.',
    'A cylinder has a square axial section and radius 7 cm. Find its volume and total surface area.',
    'A silo is a cylinder of radius 4 m and height 12 m with a hemispherical top. Find its capacity in m³.'
  ]
});

/* ============================== 18 ============================== */
G11_GEO.push({
  id: 'g11-18', stream: 'geo', grade: 11, quarter: 2, lessons: '30', hours: 1,
  title: 'Units of volume and capacity, and converting between them',
  subtitle: 'Cambridge insert: the cube of the length factor, and the litre that sits between the two systems.',
  uz: 'Geometry 11, §14 (extension)', uzPage: 'pp. 153–156',
  cam: 'IGCSE E13.1–13.4', camPage: 'Core & Extended, pp. 40–44', wb: 'IGCSE Exercise 13.1',
  objectives: [
    'Convert between mm³, cm³ and m³.',
    'Convert between millilitres, litres and cubic units.',
    'Choose an appropriate unit for a given object.',
    'Use density to link volume and mass.'
  ],
  terms: [
    ['Cubic centimetre', 'Kub santimetr', 'Кубический сантиметр'],
    ['Cubic metre', 'Kub metr', 'Кубический метр'],
    ['Millilitre', 'Millilitr', 'Миллилитр'],
    ['Litre', 'Litr', 'Литр'],
    ['Capacity', 'Sig‘im', 'Вместимость'],
    ['Conversion factor', 'O‘tkazish koeffitsienti', 'Коэффициент перевода'],
    ['Density', 'Zichlik', 'Плотность'],
    ['Mass', 'Massa', 'Масса'],
    ['Appropriate unit', 'Mos birlik', 'Подходящая единица']
  ],
  timing: [[10, 'Cubing the factor'], [12, 'Litres'], [12, 'Choosing a unit'], [8, 'Density'], [3, 'Homework']],
  sections: [
    {
      h: 'Cube the length factor',
      html: `<div class="keybox"><div class="klabel">The one rule</div>
      If lengths convert by ${m('k')}, volumes convert by ${m('k³')}. ${m('1')} m ${m('= 100')} cm, so
      ${m('1')} m³ ${m('= 100³ = 1 000 000')} cm³.</div>
      <div class="tablewrap"><table>
      <thead><tr><th>Conversion</th><th>Length factor</th><th>Volume factor</th></tr></thead>
      <tbody>
        <tr><td>cm → mm</td><td class="m">10</td><td class="m">1000</td></tr>
        <tr><td>m → cm</td><td class="m">100</td><td class="m">1 000 000</td></tr>
        <tr><td>km → m</td><td class="m">1000</td><td class="m">10⁹</td></tr>
        <tr><td>m → mm</td><td class="m">1000</td><td class="m">10⁹</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The commonest conversion error in the syllabus</span>
      Writing ${m('1')} m³ ${m('= 100')} cm³. Areas need ${m('k²')} and volumes ${m('k³')}; only lengths
      use ${m('k')} itself.</div>`
    },
    {
      h: 'Litres',
      html: `${eq(m('1 ml = 1 cm³') + '     ' + m('1 litre = 1000 cm³') + '     ' + m('1 m³ = 1000 litres'), true)}
      <p>The litre is defined as a cubic decimetre — a cube of side ${m('10')} cm. That single fact
      generates every line above, and it is why a ${m('1')} m³ tank holds exactly a tonne of water.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Object</th><th>Typical capacity</th></tr></thead>
      <tbody>
        <tr><td>a teaspoon</td><td class="m">5 ml</td></tr>
        <tr><td>a can of drink</td><td class="m">330 ml</td></tr>
        <tr><td>a bucket</td><td class="m">10 litres</td></tr>
        <tr><td>a bath</td><td class="m">150 litres</td></tr>
        <tr><td>a small water tank</td><td class="m">1 m³ = 1000 litres</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'Choosing a unit, and density',
      html: `<p>An answer of ${m('0.0000034')} m³ or ${m('34 000 000')} mm³ is correct and useless.
      Choose the unit that makes the number sit between about ${m('0.1')} and ${m('1000')}.</p>
      ${eq('density ' + m('ρ = ' + f('m', 'V')) + '     so     ' + m('m = ρV'), true)}
      <p>Water has ${m('ρ = 1')} g/cm³, which is why ${m('1')} litre of water weighs ${m('1')} kg and
      ${m('1')} m³ weighs ${m('1')} tonne. Steel is about ${m('7.8')} g/cm³, pine about
      ${m('0.5')}.</p>
      <p><b>Example.</b> A steel bar is a cylinder ${m('r = 2')} cm, ${m('h = 50')} cm. Its volume is
      ${m('200π ≈ 628')} cm³, so its mass is about ${m('628 × 7.8 ≈ 4900')} g ${m('≈ 4.9')} kg.</p>`
    }
  ],
  examples: [
    {
      q: 'Convert ' + m('2.5') + ' m³ to cm³ and to litres.',
      steps: [
        [m('1') + ' m³ ' + m('= 1 000 000') + ' cm³.', ''],
        [m('2 500 000') + ' cm³.', ''],
        [m('÷ 1000') + ' gives ' + m('2500') + ' litres.', '']
      ],
      ans: m('2 500 000') + ' cm³ = ' + m('2500') + ' litres'
    },
    {
      q: 'A tank is ' + m('1.2 × 0.8 × 0.5') + ' m. How many litres does it hold?',
      steps: [
        [m('V = 0.48') + ' m³.', ''],
        [m('× 1000'), ''],
        [m('= 480') + ' litres.', '']
      ],
      ans: m('480') + ' litres'
    },
    {
      q: 'A steel cylinder has ' + m('r = 2') + ' cm and ' + m('h = 50') + ' cm. Find its mass at ' + m('7.8') + ' g/cm³.',
      steps: [
        [m('V = π × 4 × 50 = 200π ≈ 628.3'), ''],
        [m('m = 628.3 × 7.8'), ''],
        [m('≈ 4901') + ' g.', '']
      ],
      ans: m('≈ 4.9') + ' kg'
    }
  ],
  modelNote: 'Show a litre bottle beside a 10 cm cube — they hold the same.',
  interactive: {
    type: 'quiz',
    title: 'Converting volume',
    hint: 'Cube the length factor.',
    items: [
      { q: m('1') + ' m³ in cm³:', a: [m('100'), m('10 000'), m('1 000 000'), m('1000')], c: 2, why: m('100³') + '.' },
      { q: m('1') + ' cm³ in mm³:', a: [m('10'), m('100'), m('1000'), m('10 000')], c: 2, why: m('10³') + '.' },
      { q: m('1') + ' litre in cm³:', a: [m('100'), m('1000'), m('10 000'), m('1')], c: 1, why: 'A 10 cm cube.' },
      { q: m('1') + ' m³ in litres:', a: [m('100'), m('1000'), m('10 000'), m('1 000 000')], c: 1, why: m(f('1 000 000', '1000')) + '.' },
      { q: m('0.5') + ' m³ in litres:', a: [m('50'), m('500'), m('5000'), m('5')], c: 1, why: m('0.5 × 1000') + '.' },
      { q: '1 litre of water weighs:', a: [m('100') + ' g', m('1') + ' kg', m('10') + ' kg', m('1') + ' g'], c: 1, why: m('ρ = 1') + ' g/cm³.' }
    ]
  },
  quiz: [
    { q: 'Volumes convert by:', a: [m('k'), m('k²'), m('k³'), m('3k')], c: 2, why: 'Three dimensions.' },
    { q: m('1') + ' ml equals:', a: [m('1') + ' mm³', m('1') + ' cm³', m('10') + ' cm³', m('1') + ' litre'], c: 1, why: 'By definition.' },
    { q: m('3') + ' m³ in litres:', a: [m('300'), m('3000'), m('30 000'), m('3')], c: 1, why: m('× 1000') + '.' },
    { q: 'Density is:', a: [m('mV'), m(f('m', 'V')), m(f('V', 'm')), m('m + V')], c: 1, why: 'Mass per unit volume.' }
  ],
  practice: {
    easy: [
      [m('1') + ' m³ in cm³', m('1 000 000')],
      [m('1') + ' cm³ in mm³', m('1000')],
      [m('2') + ' litres in cm³', m('2000')],
      [m('5000') + ' cm³ in litres', m('5')],
      [m('0.25') + ' m³ in litres', m('250')],
      [m('750') + ' ml in cm³', m('750')],
      [m('1') + ' litre of water in kg', m('1')]
    ],
    med: [
      [m('2.5') + ' m³ in cm³ and litres', m('2 500 000') + ' cm³, ' + m('2500') + ' L'],
      ['Tank ' + m('1.2 × 0.8 × 0.5') + ' m in litres', m('480')],
      ['A cylinder ' + m('r = 5, h = 20') + ' cm in litres', m('≈ 1.57')],
      ['A steel cylinder ' + m('r = 2, h = 50') + ' cm at ' + m('7.8') + ' g/cm³: mass', m('≈ 4.9') + ' kg'],
      [m('3 500 000') + ' mm³ in litres', m('3.5')],
      ['A bath of ' + m('150') + ' litres in m³', m('0.15')],
      ['A block of pine ' + m('20 × 10 × 5') + ' cm at ' + m('0.5') + ' g/cm³: mass', m('500') + ' g']
    ],
    hard: [
      ['A pool ' + m('25 × 10 × 1.8') + ' m: capacity in litres', m('450 000')],
      ['A pipe of length 5 m, ' + m('R = 6, r = 5') + ' cm: metal mass at ' + m('7.8') + ' g/cm³', m('≈ 135') + ' kg'],
      ['A raindrop of radius ' + m('2') + ' mm: volume in ml', m('≈ 0.0335')],
      ['A tonne of water occupies how many m³?', m('1')],
      ['A gold bar ' + m('10 × 5 × 3') + ' cm at ' + m('19.3') + ' g/cm³: mass', m('≈ 2.9') + ' kg'],
      ['Explain why ' + m('1') + ' m³ is not ' + m('100') + ' cm³', 'Volumes need the cube of the length factor'],
      ['A tank holds ' + m('2400') + ' litres and is ' + m('2 × 1.5') + ' m in base. Find its depth', m('0.8') + ' m']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Choose the unit that keeps the number readable, and say why.',
  homework: [
    'Convert ' + m('4.2') + ' m³ to cm³ and to litres, and ' + m('6500') + ' mm³ to cm³.',
    'A tank measures ' + m('2 × 1.5 × 0.9') + ' m. Find its capacity in litres.',
    'A steel pipe 4 m long has outer radius 7 cm and inner radius 6 cm. Find the mass of metal at ' + m('7.8') + ' g/cm³.',
    'Explain in three sentences why volumes convert with the cube of the length factor, with one worked example.'
  ]
});

/* ============================== 19 ============================== */
G11_GEO.push({
  id: 'g11-19', stream: 'geo', grade: 11, quarter: 2, lessons: '31–32', hours: 2,
  title: 'Control work 2, and the quarter review',
  subtitle: 'Prisms and cylinders — area, volume and bounds — in one paper, then the map.',
  uz: 'Geometry 11, Nazorat ishi 2', uzPage: 'pp. 157–160',
  cam: 'IGCSE E13 review', camPage: 'Core & Extended, pp. 319–322', wb: 'Control paper G2',
  objectives: [
    'Apply every formula of Quarter II in one assessment.',
    'Choose between curved, total and open-solid surface areas.',
    'Classify each lost mark and rewrite the solution.',
    'Build a concept map of mensuration so far.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Concept map', 'Tushunchalar xaritasi', 'Карта понятий'],
    ['Surface area', 'Sirt yuzasi', 'Площадь поверхности'],
    ['Volume', 'Hajm', 'Объём'],
    ['Bounds', 'Chegaralar', 'Границы'],
    ['Compound solid', 'Murakkab jism', 'Составное тело'],
    ['Self-assessment', 'O‘z-o‘zini baholash', 'Самооценка'],
    ['Target', 'Maqsad', 'Цель']
  ],
  timing: [[3, 'Instructions'], [42, 'The paper'], [12, 'Answers'], [20, 'Rewrite'], [10, 'Concept map'], [3, 'Targets']],
  sections: [
    {
      h: 'The paper — 30 marks, 42 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Space diagonal of a ${m('4 × 6 × 12')} cuboid, and the angle it makes with the base</td><td class="m">5</td><td>L21–22</td></tr>
        <tr><td>2</td><td>Total surface area of a regular hexagonal prism, edge 5, height 11</td><td class="m">5</td><td>L23</td></tr>
        <tr><td>3</td><td>Volume of a trough with trapezium section 30/50 cm, depth 20 cm, 2.5 m long, in litres</td><td class="m">5</td><td>L26–27</td></tr>
        <tr><td>4</td><td>A cylinder holds 800 ml and is 10 cm tall: find ${m('r')} and the curved surface area</td><td class="m">5</td><td>L28–29</td></tr>
        <tr><td>5</td><td>A pipe 2 m long, ${m('R = 9')}, ${m('r = 7')} cm: metal volume, then mass at ${m('7.8')} g/cm³</td><td class="m">5</td><td>L28–30</td></tr>
        <tr><td>6</td><td>A cuboid measures ${m('5 × 7 × 9')} cm to the nearest cm. Find the bounds of its volume</td><td class="m">5</td><td>L24</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Units and formula choice</div>
      Q3 and Q5 each carry a mark for the conversion alone; Q4 carries one for choosing <b>curved</b>
      rather than total. Five of the thirty marks are for reading the question.</div>`
    },
    {
      h: 'The concept map',
      html: `<p>Six boxes, links as sentences:</p>
      <ul>
        <li><b>polyhedral angle</b> → <b>only five regular solids</b> — “the angles must total under ${m('360°')}”</li>
        <li><b>prism</b> → <b>uniform cross-section</b> — “${m('V = Bh')}, always”</li>
        <li><b>net</b> → <b>surface area</b> — “${m('S = 2B + Ph')}”</li>
        <li><b>cylinder</b> → <b>the same two formulas</b> — “with ${m('B = πr²')} and ${m('P = 2πr')}”</li>
        <li><b>Cavalieri</b> → <b>oblique = right</b> — “equal slices, equal volume”</li>
        <li><b>measurement</b> → <b>bounds</b> — “three lengths, three uncertainties, one wide answer”</li>
      </ul>
      {{fig:cylinderNet:The picture behind two of the six boxes.}}`
    },
    {
      h: 'Looking forward',
      html: `<p>Quarter III is the pyramid, the cone and the sphere — the solids whose volume formulas
      carry a ${m(f('1', '3'))} or a ${m(f('4', '3'))}. Every one is proved by comparison with the prism
      and cylinder of this quarter, so those two formulas must be secure.</p>
      <div class="keybox"><div class="klabel">One habit to carry forward</div>
      Write the base area on its own line before anything else. Every volume in the next quarter starts
      from ${m('B')}, and every error starts from having computed it wrong.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q3: trough, trapezium 30/50 cm, depth 20 cm, 2.5 m long.',
      steps: [
        [m('B = ' + f('30 + 50', '2') + ' × 20 = 800') + ' cm².', ''],
        ['Length ' + m('250') + ' cm.', 'Convert first.'],
        [m('V = 800 × 250 = 200 000') + ' cm³.', ''],
        [m('= 200') + ' litres.', '']
      ],
      ans: m('200') + ' litres'
    },
    {
      q: 'Model answer, Q4: a cylinder holds 800 ml and is 10 cm tall.',
      steps: [
        [m('800 = πr² × 10'), ''],
        [m('r² = ' + f('80', 'π') + ' ≈ 25.46'), ''],
        [m('r ≈ 5.05') + ' cm.', ''],
        [m('S_curved = 2πrh ≈ 317') + ' cm².', 'Curved, not total.']
      ],
      ans: m('r ≈ 5.05') + ' cm; ' + m('≈ 317') + ' cm²'
    },
    {
      q: 'Model answer, Q6: bounds for a ' + m('5 × 7 × 9') + ' cuboid to the nearest cm.',
      steps: [
        [m('4.5–5.5') + ', ' + m('6.5–7.5') + ', ' + m('8.5–9.5') + '.', ''],
        [m('V_min = 4.5 × 6.5 × 8.5 = 248.625'), ''],
        [m('V_max = 5.5 × 7.5 × 9.5 = 391.875'), ''],
        ['Stated volume ' + m('315') + '.', 'The range is nearly ' + m('150') + '.']
      ],
      ans: m('248.6') + ' to ' + m('391.9') + ' cm³'
    }
  ],
  modelNote: 'Work Q3 and Q4 on the board, converting units before any arithmetic.',
  interactive: {
    type: 'quiz',
    title: 'The quarter in ten questions',
    hint: 'One from each block.',
    items: [
      { q: 'Plane angles at a vertex sum to:', a: [m('360°'), 'less than ' + m('360°'), 'more', m('180°')], c: 1, why: 'Or it lies flat.' },
      { q: 'Space diagonal of a ' + m('4 × 6 × 12') + ' cuboid:', a: [m('12'), m('14'), m('22'), m('' + sr('196'))], c: 1, why: m(sr('16 + 36 + 144')) + '.' },
      { q: m('S_total') + ' of a right prism:', a: [m('Ph'), m('2B + Ph'), m('Bh'), m('2Ph')], c: 1, why: 'Two bases plus the sides.' },
      { q: 'Volume of any prism:', a: [m('Ph'), m('Bh'), m(f('1', '3') + 'Bh'), m('2Bh')], c: 1, why: 'Uniform cross-section.' },
      { q: 'Volume of a cylinder:', a: [m('2πrh'), m('πr²h'), m('πrh'), m('2πr(r+h)')], c: 1, why: m('B = πr²') + '.' },
      { q: 'Curved area of a cylinder:', a: [m('πr²'), m('2πrh'), m('2πr²'), m('2πr(r+h)')], c: 1, why: 'Circumference times height.' },
      { q: m('1') + ' m³ in litres:', a: [m('100'), m('1000'), m('10 000'), m('1 000 000')], c: 1, why: 'By definition.' },
      { q: 'A pipe’s cross-section area:', a: [m('π(R−r)²'), m('π(R²−r²)'), m('πR²'), m('2πR')], c: 1, why: 'A difference of circles.' },
      { q: m('5') + ' cm to the nearest cm has bounds:', a: [m('4–6'), m('4.5–5.5'), m('4.9–5.1'), m('4.95–5.05')], c: 1, why: 'Half a unit.' },
      { q: 'Cavalieri’s principle compares:', a: ['bases', 'slice areas at every height', 'perimeters', 'diagonals'], c: 1, why: 'Equal slices, equal volumes.' }
    ]
  },
  quiz: [
    { q: 'Q4 asks for the curved area because:', a: ['it is easier', 'the question describes an open shape', 'it is always curved', 'no reason'], c: 1, why: 'Read the object first.' },
    { q: 'A conversion mark is lost by:', a: ['using cm', 'mixing m and cm in one formula', 'using π', 'rounding'], c: 1, why: 'Convert before computing.' },
    { q: 'The volume bounds of a cuboid come from:', a: ['the stated values', 'all three extremes together', 'the largest edge', 'the average'], c: 1, why: 'Each length has its own bound.' },
    { q: 'Quarter III begins with:', a: ['vectors', 'the pyramid', 'probability', 'the cylinder'], c: 1, why: 'Then the cone and the sphere.' }
  ],
  practice: {
    easy: [
      ['Space diagonal of a ' + m('4 × 6 × 12') + ' cuboid', m('14')],
      ['Surface area of a cube of edge 5', m('150')],
      ['Volume of a prism, ' + m('B = 20, h = 9'), m('180')],
      ['Volume of a cylinder, ' + m('r = 3, h = 8'), m('72π')],
      [m('1') + ' m³ in litres', m('1000')],
      ['Bounds of ' + m('7') + ' cm to the nearest cm', m('6.5') + ' and ' + m('7.5')],
      ['Curved area, ' + m('r = 4, h = 10'), m('80π')]
    ],
    med: [
      ['Angle of the ' + m('4 × 6 × 12') + ' space diagonal with the base', m('≈ 59.0°')],
      ['Regular hexagonal prism, edge 5, height 11: total area', m('75' + sr('3') + ' + 330') + ' ≈ ' + m('460')],
      ['Trough 30/50 by 20 cm, 2.5 m long: litres', m('200')],
      ['Cylinder holding 800 ml, height 10: radius', m('≈ 5.05') + ' cm'],
      ['Same: curved surface area', m('≈ 317') + ' cm²'],
      ['Pipe 2 m, ' + m('R = 9, r = 7') + ': metal volume', m('6400π') + ' ≈ ' + m('20 100') + ' cm³'],
      ['Cuboid ' + m('5 × 7 × 9') + ' (nearest cm): volume bounds', m('248.6') + ' to ' + m('391.9')]
    ],
    hard: [
      ['Same pipe: mass at ' + m('7.8') + ' g/cm³', m('≈ 157') + ' kg'],
      ['A silo, cylinder ' + m('r = 4, h = 12') + ' m with a hemisphere: volume', m('192π + ' + f('128π', '3')) + ' ≈ ' + m('737') + ' m³'],
      ['A cylinder inscribed in a cube of edge 12: the ratio of volumes', m('π : 4')],
      ['A regular hexagonal prism of volume ' + m('540' + sr('3')) + ' and edge 6: its height', m('10')],
      ['A cuboid ' + m('3 × 4 × 5') + ' m to the nearest 0.1 m: volume bounds', m('≈ 58.4') + ' to ' + m('≈ 61.7') + ' m³'],
      ['Two similar prisms with volumes ' + m('8') + ' and ' + m('125') + ': the area ratio', m('4 : 25')],
      ['A closed cylinder of volume ' + m('2000') + ' cm³ with least surface area: find ' + m('r') + ' and ' + m('h'), m('r ≈ 6.83') + ', ' + m('h ≈ 13.66')]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Bring the concept map to the first lesson of Quarter III.',
  homework: [
    'Rewrite in full every control-work question that lost a mark.',
    'Finish the concept map with all six links written as sentences.',
    'A cylindrical tank of radius 1.5 m and height 4 m: find its capacity in litres and its curved surface area.',
    'Write your target for Quarter III in one checkable sentence, and date it.'
  ]
});

/* ===================== QUARTER III (20 hours) ===================== */

/* ============================== 20 ============================== */
G11_GEO.push({
  id: 'g11-20', stream: 'geo', grade: 11, quarter: 3, lessons: '33–34', hours: 2,
  title: 'The pyramid — height, apothem and surface area',
  subtitle: 'Three lengths, one right triangle, and every pyramid question follows.',
  uz: 'Geometry 11, §15', uzPage: 'pp. 161–172',
  cam: 'IGCSE E13.x', camPage: 'Core & Extended, pp. 323–330', wb: 'Exercise 15.1',
  objectives: [
    'Name the elements of a pyramid and of a regular pyramid.',
    'Relate the height, apothem, slant height and lateral edge.',
    'Compute the lateral and total surface area.',
    'Solve for a missing element from a given area.'
  ],
  terms: [
    ['Pyramid', 'Piramida', 'Пирамида'],
    ['Apex', 'Uchi', 'Вершина'],
    ['Regular pyramid', 'Muntazam piramida', 'Правильная пирамида'],
    ['Height of a pyramid', 'Piramida balandligi', 'Высота пирамиды'],
    ['Apothem of the base', 'Asos apofemasi', 'Апофема основания'],
    ['Slant height', 'Yon apofema', 'Апофема'],
    ['Lateral edge', 'Yon qirra', 'Боковое ребро'],
    ['Lateral surface area', 'Yon sirt yuzasi', 'Площадь боковой поверхности'],
    ['Base perimeter', 'Asos perimetri', 'Периметр основания']
  ],
  timing: [[14, 'The elements'], [24, 'The two right triangles'], [24, 'Surface area'], [20, 'Working backwards'], [16, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'The elements',
      html: `<div class="keybox"><div class="klabel">Regular pyramid</div>
      Its base is a <b>regular polygon</b> and its apex lies directly above the base <b>centre</b>. Then
      all the lateral edges are equal, and all the lateral faces are congruent isosceles triangles.</div>
      {{fig:pyramidParts:The height to the centre, the apothem across the base, the slant height up the face.}}
      <p>Why the lateral edges are equal: their projections are all radii of the circumcircle of the
      base, hence equal — and equal projections give equal obliques, by Grade 10 Quarter III.</p>`
    },
    {
      h: 'The two right triangles',
      html: `<p>Every pyramid calculation lives in one of two right triangles, both with the height
      ${m('h')} as a leg:</p>
      ${eq(m('l² = h² + a²') + '   (slant height, apothem)     ' + m('e² = h² + R²') + '   (lateral edge, circumradius)', true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Square base, side ${m('s')}</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td>apothem ${m('a')}</td><td class="m">${f('s', '2')}</td></tr>
        <tr><td>circumradius ${m('R')}</td><td class="m">${f('s' + sr('2'), '2')}</td></tr>
        <tr><td>slant height ${m('l')}</td><td class="m">${sr('h² + (s/2)²')}</td></tr>
        <tr><td>lateral edge ${m('e')}</td><td class="m">${sr('h² + s²/2')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The apothem is not the circumradius</span>
      For a square of side ${m('10')}: apothem ${m('5')}, circumradius ${m('5' + sr('2') + ' ≈ 7.07')}.
      Using the wrong one is the standard error, and it makes the slant height and the lateral edge
      swap places.</div>`
    },
    {
      h: 'Surface area',
      html: `${eq(m('S_lat = ' + f('1', '2') + 'P · l') + '     ' + m('S_total = B + ' + f('1', '2') + 'Pl'), true)}
      <p>Each lateral face is a triangle of base one side and height ${m('l')}; there are as many as the
      base has sides, so the total is ${m(f('1', '2'))} of the perimeter times ${m('l')}.</p>
      <p><b>Example.</b> Square base ${m('10')}, height ${m('12')}: ${m('a = 5')}, ${m('l = 13')},
      ${m('P = 40')}, ${m('B = 100')}. So ${m('S_lat = 260')} and ${m('S = 360')}.</p>
      <div class="keybox"><div class="klabel">Only for a regular pyramid</div>
      ${m(f('1', '2') + 'Pl')} assumes every lateral face has the same slant height. For an irregular
      pyramid the faces must be computed one at a time.</div>`
    },
    {
      h: 'Working backwards',
      html: `<p>Given the area, recover a length by reversing the formula:</p>
      ${eq(m('l = ' + f('2S_lat', 'P')) + '     ' + m('h = ' + sr('l² − a²')), true)}
      <p><b>Example.</b> A square pyramid with base ${m('12')} has lateral area ${m('240')}. Then
      ${m('l = ' + f('480', '48') + ' = 10')}, ${m('a = 6')}, so ${m('h = ' + sr('100 − 36') + ' = 8')}.</p>`
    }
  ],
  examples: [
    {
      q: 'A regular square pyramid has base edge ' + m('10') + ' and height ' + m('12') + '. Find the slant height, the lateral edge and the total surface area.',
      steps: [
        [m('a = 5') + ', so ' + m('l = ' + sr('144 + 25') + ' = 13') + '.', ''],
        [m('R = 5' + sr('2')) + ', so ' + m('e = ' + sr('144 + 50') + ' = ' + sr('194') + ' ≈ 13.9') + '.', ''],
        [m('S_lat = ' + f('1', '2') + ' × 40 × 13 = 260'), ''],
        [m('S = 100 + 260 = 360'), '']
      ],
      ans: m('l = 13') + ', ' + m('e ≈ 13.9') + ', ' + m('S = 360')
    },
    {
      q: 'A regular hexagonal pyramid has base edge ' + m('6') + ' and slant height ' + m('10') + '. Find the lateral surface area and the height.',
      steps: [
        [m('P = 36') + ', so ' + m('S_lat = ' + f('1', '2') + ' × 36 × 10 = 180') + '.', ''],
        ['Apothem of a regular hexagon of side 6: ' + m('3' + sr('3') + ' ≈ 5.196') + '.', ''],
        [m('h = ' + sr('100 − 27') + ' = ' + sr('73') + ' ≈ 8.54'), '']
      ],
      ans: m('S_lat = 180') + '; ' + m('h ≈ 8.54')
    },
    {
      q: 'A square pyramid with base ' + m('12') + ' has lateral surface area ' + m('240') + '. Find its height.',
      steps: [
        [m('l = ' + f('2 × 240', '48') + ' = 10'), ''],
        [m('a = 6'), ''],
        [m('h = ' + sr('100 − 36') + ' = 8'), '']
      ],
      ans: m('8')
    }
  ],
  modelNote: 'Build the pyramid net from Quarter I and measure the slant height directly.',
  interactive: {
    type: 'space3d',
    title: 'Inside a pyramid',
    hint: 'Move the apex and watch the slant height and the lateral edge change.'
  },
  quiz: [
    { q: 'In a regular pyramid the apex is above:', a: ['a vertex', 'the base centre', 'the midpoint of an edge', 'anywhere'], c: 1, why: 'That is the definition.' },
    { q: m('l² ') + ' equals:', a: [m('h² + R²'), m('h² + a²'), m('h² − a²'), m('a² + R²')], c: 1, why: 'Slant height, height, apothem.' },
    { q: m('S_lat') + ' of a regular pyramid:', a: [m('Pl'), m(f('1', '2') + 'Pl'), m('Bh'), m(f('1', '3') + 'Bh')], c: 1, why: 'Triangular faces.' },
    { q: 'For a square base of side 10 the apothem is:', a: [m('5'), m('10'), m('5' + sr('2')), m('20')], c: 0, why: 'Half the side.' },
    { q: 'And the circumradius is:', a: [m('5'), m('10'), m('5' + sr('2')), m('' + sr('5'))], c: 2, why: 'Half the diagonal.' }
  ],
  practice: {
    easy: [
      ['Square base 10, height 12: the slant height', m('13')],
      ['Square base 8, height 3: the slant height', m('5')],
      ['Square base 6, apothem', m('3')],
      ['Square base 6, circumradius', m('3' + sr('2'))],
      [m('S_lat') + ' with ' + m('P = 24, l = 10'), m('120')],
      [m('S_total') + ' with ' + m('B = 36, P = 24, l = 10'), m('156')],
      ['Square base 10, height 12: the lateral area', m('260')]
    ],
    med: [
      ['Square base 10, height 12: total area', m('360')],
      ['Square base 10, height 12: the lateral edge', m(sr('194')) + ' ≈ ' + m('13.9')],
      ['Hexagonal base 6, slant height 10: lateral area', m('180')],
      ['Same: the height', m(sr('73')) + ' ≈ ' + m('8.54')],
      ['Square base 12, lateral area 240: the height', m('8')],
      ['Square base 16, height 6: total area', m('576')],
      ['Square base 14, lateral edge 25: the height', m('24')]
    ],
    hard: [
      ['A regular triangular pyramid, base edge 6, height 4: the total area', m('9' + sr('3') + ' + 3' + sr('57')) + ' ≈ ' + m('38.2')],
      ['Square base ' + m('s') + ', height ' + m('h') + ': prove ' + m('e² = h² + ' + f('s²', '2')), m('R = ' + f('s' + sr('2'), '2'))],
      ['A square pyramid of total area 384 with base 12: the height', m('8')],
      ['A regular hexagonal pyramid, edge 4, height 6: the volume', m('48' + sr('3')) + ' ≈ ' + m('83.1')],
      ['A pyramid’s lateral faces make ' + m('60°') + ' with the base, base edge 10: the height', m('5' + sr('3'))],
      ['Show that ' + m('e > l > h') + ' in every regular pyramid', 'Each is the hypotenuse of the previous'],
      ['A square pyramid with all edges equal to ' + m('a') + ': its height', m(f('a', sr('2'))) + ' ≈ ' + m('0.707a')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Say which triangle you are using — apothem or circumradius — on every line.',
  homework: [
    'A regular square pyramid has base edge ' + m('16') + ' and height ' + m('15') + '. Find the slant height, the lateral edge and the total surface area.',
    'A regular hexagonal pyramid has base edge ' + m('5') + ' and slant height ' + m('12') + '. Find the lateral area and the height.',
    'A square pyramid with base ' + m('20') + ' has lateral area ' + m('520') + '. Find the slant height and the height.',
    'A regular triangular pyramid has base edge ' + m('8') + ' and height ' + m('6') + '. Find the slant height and the total surface area.',
    'Prove that in a regular pyramid the lateral edges are equal.'
  ]
});

/* ============================== 21 ============================== */
G11_GEO.push({
  id: 'g11-21', stream: 'geo', grade: 11, quarter: 3, lessons: '35', hours: 1,
  title: 'The frustum of a pyramid',
  subtitle: 'A pyramid with its top cut off — and the trapezium faces that result.',
  uz: 'Geometry 11, §16', uzPage: 'pp. 173–178',
  cam: 'Extension', camPage: 'Core & Extended, pp. 331–334', wb: 'Exercise 16.1',
  objectives: [
    'Describe the elements of a frustum of a pyramid.',
    'Compute its lateral and total surface area.',
    'Compute its volume.',
    'Recover the original pyramid from the frustum.'
  ],
  terms: [
    ['Frustum', 'Kesik piramida', 'Усечённая пирамида'],
    ['Upper base', 'Yuqori asos', 'Верхнее основание'],
    ['Lower base', 'Quyi asos', 'Нижнее основание'],
    ['Slant height of a frustum', 'Kesik piramida apofemasi', 'Апофема усечённой пирамиды'],
    ['Lateral face', 'Yon yoq', 'Боковая грань'],
    ['Similar bases', 'O‘xshash asoslar', 'Подобные основания'],
    ['Scale factor', 'O‘xshashlik koeffitsienti', 'Коэффициент подобия'],
    ['Complementary cone', 'To‘ldiruvchi piramida', 'Дополняющая пирамида']
  ],
  timing: [[8, 'What a frustum is'], [14, 'Surface area'], [14, 'Volume'], [6, 'Recovering the pyramid'], [3, 'Homework']],
  sections: [
    {
      h: 'What a frustum is',
      html: `<p>Cut a pyramid with a plane parallel to its base and remove the small pyramid on top. What
      is left is a <b>frustum</b>. Its two bases are <b>similar</b> polygons in parallel planes, and its
      lateral faces are trapezia.</p>
      <div class="keybox"><div class="klabel">The key ratio</div>
      If the cut is at height ${m('k')} of the way up, the small pyramid is similar to the whole with
      scale factor ${m('k')} — so its base edges are ${m('k')} times, its area ${m('k²')} times, and its
      volume ${m('k³')} times.</div>`
    },
    {
      h: 'Surface area',
      html: `${eq(m('S_lat = ' + f('1', '2') + '(P₁ + P₂) · l'), true)}
      <p>where ${m('P₁, P₂')} are the two base perimeters and ${m('l')} is the slant height of the
      frustum — the height of one trapezium face. This is the trapezium area formula, once per face,
      collected.</p>
      ${eq(m('S_total = B₁ + B₂ + ' + f('1', '2') + '(P₁ + P₂)l'), false)}
      <p><b>Example.</b> A frustum of a square pyramid with bases ${m('10')} and ${m('4')}, slant height
      ${m('5')}: ${m('S_lat = ' + f('1', '2') + '(40 + 16)(5) = 140')}; ${m('S = 100 + 16 + 140 = 256')}.</p>`
    },
    {
      h: 'Volume',
      html: `${eq(m('V = ' + f('h', '3') + '(B₁ + B₂ + ' + sr('B₁B₂') + ')'), true)}
      <p>It is the big pyramid minus the small one, simplified. The middle term ${m(sr('B₁B₂'))} is the
      geometric mean of the two bases, and it is what makes the formula more than an average.</p>
      <p><b>Example.</b> Bases ${m('10')} and ${m('4')} (so ${m('B₁ = 100')}, ${m('B₂ = 16')}), height
      ${m('4')}:</p>
      ${eq(m('V = ' + f('4', '3') + '(100 + 16 + 40) = ' + f('4', '3') + '(156) = 208'), true)}
      <div class="warn"><span class="wl">Not the average of the two bases</span>
      ${m(f('h', '2') + '(B₁ + B₂)')} would give ${m('232')} — too big. The frustum tapers, and the
      geometric mean is what accounts for it.</div>`
    },
    {
      h: 'Recovering the pyramid',
      html: `<p>If the bases are ${m('a')} and ${m('b')} with ${m('b < a')}, the scale factor is
      ${m('k = ' + f('b', 'a'))}. The full pyramid's height ${m('H')} satisfies</p>
      ${eq(m('H − h = kH   ⇒   H = ' + f('h', '1 − k')), true)}
      <p>For bases ${m('10')} and ${m('4')} with ${m('h = 4')}: ${m('k = 0.4')}, so
      ${m('H = ' + f('4', '0.6') + ' ≈ 6.67')}. Check the volume:
      ${m(f('1', '3') + '(100)(6.67) − ' + f('1', '3') + '(16)(2.67) = 222 − 14.2 ≈ 208')} ✓.</p>`
    }
  ],
  examples: [
    {
      q: 'A frustum of a square pyramid has bases ' + m('10') + ' and ' + m('4') + ' and slant height ' + m('5') + '. Find its total surface area.',
      steps: [
        [m('P₁ = 40, P₂ = 16'), ''],
        [m('S_lat = ' + f('1', '2') + '(56)(5) = 140'), ''],
        [m('B₁ = 100, B₂ = 16'), ''],
        [m('S = 256'), '']
      ],
      ans: m('256')
    },
    {
      q: 'The same frustum has height ' + m('4') + '. Find its volume.',
      steps: [
        [m(sr('B₁B₂') + ' = ' + sr('1600') + ' = 40'), ''],
        [m('V = ' + f('4', '3') + '(100 + 16 + 40)'), ''],
        [m('= ' + f('4', '3') + ' × 156 = 208'), '']
      ],
      ans: m('208')
    },
    {
      q: 'Find the height of the original pyramid.',
      steps: [
        [m('k = ' + f('4', '10') + ' = 0.4'), ''],
        [m('H = ' + f('h', '1 − k') + ' = ' + f('4', '0.6')), ''],
        [m('≈ 6.67'), '']
      ],
      ans: m('≈ 6.67')
    }
  ],
  modelNote: 'Cut a card pyramid parallel to its base and hold up both pieces.',
  interactive: {
    type: 'scaleSolid',
    title: 'Cutting a pyramid',
    hint: 'The small pyramid is similar to the whole — lengths ' + m('k') + ', volume ' + m('k³') + '.'
  },
  quiz: [
    { q: 'The lateral faces of a frustum are:', a: ['triangles', 'trapezia', 'rectangles', 'parallelograms'], c: 1, why: 'One side of each is cut off.' },
    { q: 'The two bases of a frustum are:', a: ['congruent', 'similar', 'unrelated', 'perpendicular'], c: 1, why: 'The cut is parallel to the base.' },
    { q: m('S_lat') + ' of a frustum:', a: [m(f('1', '2') + 'Pl'), m(f('1', '2') + '(P₁ + P₂)l'), m('(P₁ + P₂)l'), m('Pl')], c: 1, why: 'Trapezium faces.' },
    { q: m('V') + ' of a frustum:', a: [m(f('h', '2') + '(B₁ + B₂)'), m(f('h', '3') + '(B₁ + B₂ + ' + sr('B₁B₂') + ')'), m(f('1', '3') + 'Bh'), m('Bh')], c: 1, why: 'The geometric mean is needed.' },
    { q: 'The average-of-bases formula gives an answer that is:', a: ['correct', 'too big', 'too small', 'zero'], c: 1, why: 'It ignores the taper.' }
  ],
  practice: {
    easy: [
      [m('S_lat') + ' with ' + m('P₁ = 40, P₂ = 16, l = 5'), m('140')],
      [m('S_lat') + ' with ' + m('P₁ = 24, P₂ = 12, l = 4'), m('72')],
      [m(sr('B₁B₂')) + ' for ' + m('B₁ = 100, B₂ = 16'), m('40')],
      [m(sr('B₁B₂')) + ' for ' + m('B₁ = 36, B₂ = 9'), m('18')],
      ['The lateral faces of a frustum are', 'trapezia'],
      ['The bases of a frustum are', 'similar'],
      ['Scale factor for bases 4 and 10', m('0.4')]
    ],
    med: [
      ['Bases 10 and 4, slant height 5: total area', m('256')],
      ['Bases 10 and 4, height 4: the volume', m('208')],
      ['Height of the original pyramid there', m('≈ 6.67')],
      ['Bases 6 and 3, height 4: the volume', m('84')],
      ['Bases 12 and 6, slant height 8: lateral area', m('288')],
      ['Bases 8 and 4, height 6: the volume', m('224')],
      ['A frustum cut halfway up: the volume ratio to the whole', m('7 : 8')]
    ],
    hard: [
      ['Bases 9 and 6, slant height 5: total area and volume with ' + m('h = 4'), m('S = 267') + '; ' + m('V ≈ 254')],
      ['A frustum of volume 208 with bases 100 and 16: its height', m('4')],
      ['Prove ' + m('V = ' + f('h', '3') + '(B₁ + B₂ + ' + sr('B₁B₂') + ')'), 'Subtract the small pyramid from the whole'],
      ['A frustum has bases in ratio ' + m('1 : 2') + '. The volume ratio of the frustum to the whole pyramid', m('7 : 8')],
      ['A bucket: bases 24 and 18 cm, depth 20 cm. Capacity in litres', m('≈ 6.9') + ' litres'],
      ['A frustum with equal bases is what solid?', 'a prism'],
      ['Show the average formula overestimates', m(f('B₁+B₂', '2') + ' > ' + f('B₁+B₂+' + sr('B₁B₂'), '3')) + ' by AM–GM']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Never average the two bases — use the geometric-mean formula.',
  homework: [
    'A frustum of a square pyramid has bases ' + m('12') + ' and ' + m('6') + ' and slant height ' + m('7') + '. Find its total surface area.',
    'The same frustum has height ' + m('6') + '. Find its volume.',
    'Find the height of the pyramid it was cut from.',
    'Explain in three sentences why the volume is not ' + m(f('h', '2') + '(B₁ + B₂)') + '.'
  ]
});

/* ============================== 22 ============================== */
G11_GEO.push({
  id: 'g11-22', stream: 'geo', grade: 11, quarter: 3, lessons: '36–37', hours: 2,
  title: 'The cone — surface area and volume',
  subtitle: 'A pyramid whose base is a circle: the same two formulas, with π and a slant height.',
  uz: 'Geometry 11, §17', uzPage: 'pp. 179–190',
  cam: 'IGCSE E13.x', camPage: 'Core & Extended, pp. 335–342', wb: 'Exercise 17.1',
  objectives: [
    'Name the base, axis, height and slant height of a cone.',
    'Derive the curved surface area from the net.',
    'Compute the volume of a cone.',
    'Solve for a missing dimension.'
  ],
  terms: [
    ['Cone', 'Konus', 'Конус'],
    ['Apex', 'Uchi', 'Вершина'],
    ['Axis of a cone', 'Konus o‘qi', 'Ось конуса'],
    ['Slant height', 'Yasovchi', 'Образующая'],
    ['Curved surface area', 'Yon sirt yuzasi', 'Площадь боковой поверхности'],
    ['Net of a cone', 'Konus yoymasi', 'Развёртка конуса'],
    ['Axial section', 'O‘qli kesim', 'Осевое сечение'],
    ['Right circular cone', 'To‘g‘ri doiraviy konus', 'Прямой круговой конус'],
    ['Solid of revolution', 'Aylanish jismi', 'Тело вращения']
  ],
  timing: [[14, 'The elements'], [24, 'The net and the curved area'], [24, 'The volume'], [22, 'Working backwards'], [20, 'Practice'], [6, 'Homework']],
  sections: [
    {
      h: 'The elements',
      html: `<p>A <b>right circular cone</b> is swept out when a right triangle turns about one of its
      legs. Its <b>axis</b> joins the apex to the centre of the base circle and is perpendicular to it.</p>
      {{fig:coneNet:The height, the radius and the slant height form a right triangle. Cut down the slant and it unrolls into a sector.}}
      ${eq(m('l² = h² + r²'), true)}
      <p>The <b>axial section</b> — the cut through the axis — is an isosceles triangle of base ${m('2r')}
      and height ${m('h')}, with equal sides ${m('l')}. Every cone question can be reduced to that
      triangle.</p>`
    },
    {
      h: 'The net and the curved area',
      html: `<p>Cut the cone down one slant line and unroll it. The curved surface becomes a
      <b>sector</b> of radius ${m('l')} whose arc is the base circumference ${m('2πr')}. The sector is
      the fraction ${m(f('2πr', '2πl') + ' = ' + f('r', 'l'))} of the full circle of radius ${m('l')}:</p>
      ${eq(m('S_curved = ' + f('r', 'l') + ' × πl² = πrl'), true)}
      ${eq(m('S_total = πr² + πrl = πr(r + l)'), true)}
      <div class="warn"><span class="wl">${m('l')}, not ${m('h')}</span>
      The curved surface uses the <b>slant</b> height. Using ${m('h')} understates it, and the two are
      equal only for a flat disc. Compute ${m('l = ' + sr('h² + r²'))} first, every time.</div>`
    },
    {
      h: 'The volume',
      html: `${eq(m('V = ' + f('1', '3') + 'πr²h'), true)}
      <p>A cone is exactly one third of the cylinder on the same base with the same height — the same
      ${m(f('1', '3'))} as a pyramid against its prism. Both come from the same integral,
      ${m('∫x² dx')}, as Quarter III algebra showed.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Solid</th><th>Volume</th><th>Curved / lateral area</th></tr></thead>
      <tbody>
        <tr><td>cylinder</td><td class="m">πr²h</td><td class="m">2πrh</td></tr>
        <tr><td>cone</td><td class="m">${f('1', '3')}πr²h</td><td class="m">πrl</td></tr>
        <tr><td>prism</td><td class="m">Bh</td><td class="m">Ph</td></tr>
        <tr><td>pyramid</td><td class="m">${f('1', '3')}Bh</td><td class="m">${f('1', '2')}Pl</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'Working backwards',
      html: `${eq(m('h = ' + f('3V', 'πr²')) + '     ' + m('r = ' + sr(f('3V', 'πh'))) + '     ' + m('l = ' + f('S_curved', 'πr')), true)}
      <p><b>Example.</b> A cone of volume ${m('100π')} cm³ and radius ${m('5')} cm has
      ${m('h = ' + f('300π', '25π') + ' = 12')} cm, and then ${m('l = 13')} and
      ${m('S_curved = 65π ≈ 204')} cm².</p>
      <p>Given the <b>total</b> area, the equation is quadratic in ${m('r')} — expand
      ${m('πr(r + l)')} and solve, rejecting the negative root.</p>`
    }
  ],
  examples: [
    {
      q: 'A cone has radius ' + m('6') + ' cm and height ' + m('8') + ' cm. Find its slant height, total surface area and volume.',
      steps: [
        [m('l = ' + sr('64 + 36') + ' = 10'), ''],
        [m('S = π(6)(6 + 10) = 96π ≈ 301.6'), ''],
        [m('V = ' + f('1', '3') + 'π(36)(8) = 96π ≈ 301.6'), 'A coincidence of these numbers.']
      ],
      ans: m('l = 10') + '; ' + m('S = 96π') + '; ' + m('V = 96π')
    },
    {
      q: 'A cone has volume ' + m('100π') + ' cm³ and radius ' + m('5') + ' cm. Find its height and curved surface area.',
      steps: [
        [m('100π = ' + f('1', '3') + 'π(25)h'), ''],
        [m('h = 12'), ''],
        [m('l = 13'), ''],
        [m('S_curved = π(5)(13) = 65π ≈ 204'), '']
      ],
      ans: m('h = 12') + '; ' + m('65π') + ' ≈ ' + m('204') + ' cm²'
    },
    {
      q: 'A sector of radius ' + m('12') + ' and angle ' + m('120°') + ' is rolled into a cone. Find its radius and height.',
      steps: [
        [m('l = 12') + '; arc ' + m('= ' + f('120', '360') + ' × 24π = 8π') + '.', ''],
        [m('2πr = 8π ⇒ r = 4'), ''],
        [m('h = ' + sr('144 − 16') + ' = ' + sr('128') + ' ≈ 11.3'), '']
      ],
      ans: m('r = 4') + ', ' + m('h ≈ 11.3')
    }
  ],
  modelNote: 'Roll a paper sector into a cone and measure the base radius against the arc length.',
  interactive: {
    type: 'solidVolume',
    title: 'The cone against the cylinder',
    hint: 'A cone is one third of the cylinder on the same base.',
    kind: 'cylinder'
  },
  quiz: [
    { q: 'The curved surface area of a cone is:', a: [m('πr²'), m('πrl'), m('πrh'), m('2πrl')], c: 1, why: 'The sector of radius ' + m('l') + '.' },
    { q: 'The volume of a cone is:', a: [m('πr²h'), m(f('1', '3') + 'πr²h'), m(f('1', '2') + 'πr²h'), m('πrl')], c: 1, why: 'One third of the cylinder.' },
    { q: m('l') + ' equals:', a: [m('h + r'), m(sr('h² + r²')), m(sr('h² − r²')), m('hr')], c: 1, why: 'The axial right triangle.' },
    { q: 'The net of a cone is:', a: ['a rectangle and two circles', 'a sector and a circle', 'two sectors', 'a triangle'], c: 1, why: 'The curved surface unrolls to a sector.' },
    { q: 'The axial section of a cone is:', a: ['a circle', 'an isosceles triangle', 'a rectangle', 'a trapezium'], c: 1, why: 'Base ' + m('2r') + ', sides ' + m('l') + '.' }
  ],
  practice: {
    easy: [
      [m('l') + ' with ' + m('r = 3, h = 4'), m('5')],
      [m('l') + ' with ' + m('r = 5, h = 12'), m('13')],
      ['Volume with ' + m('r = 3, h = 4'), m('12π')],
      ['Curved area with ' + m('r = 3, l = 5'), m('15π')],
      ['Total area with ' + m('r = 3, l = 5'), m('24π')],
      ['Volume with ' + m('r = 6, h = 10'), m('120π')],
      ['A cone is what fraction of its cylinder?', m(f('1', '3'))]
    ],
    med: [
      [m('r = 6, h = 8') + ': total area and volume', m('96π') + ' each'],
      ['Volume ' + m('100π') + ', radius 5: the height', m('12')],
      ['Same: the curved area', m('65π')],
      ['Sector radius 12, angle ' + m('120°') + ' rolled up: ' + m('r'), m('4')],
      ['Same: the height', m(sr('128')) + ' ≈ ' + m('11.3')],
      ['A cone of ' + m('r = 7, l = 25') + ': the height', m('24')],
      ['A cone of curved area ' + m('60π') + ' and ' + m('r = 5') + ': ' + m('l'), m('12')]
    ],
    hard: [
      ['A cone of total area ' + m('90π') + ' and slant height ' + m('12') + ': the radius', m('r = 5')],
      ['A cone of volume ' + m('96π') + ' and slant height ' + m('10') + ': ' + m('r') + ' and ' + m('h'), m('r = 6, h = 8')],
      ['The sector angle for a cone with ' + m('r = 4, l = 12'), m('120°')],
      ['A cone whose axial section is equilateral, ' + m('r = 5') + ': its volume', m(f('125π' + sr('3'), '3')) + ' ≈ ' + m('226.7')],
      ['A cone of maximum volume from a sector of radius 12: the angle', m('≈ 294°')],
      ['Two similar cones with volumes ' + m('8') + ' and ' + m('27') + ': the area ratio', m('4 : 9')],
      ['A cone is inscribed in a cube of edge 12: its volume', m('144π')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Compute ' + m('l') + ' before any surface-area formula.',
  homework: [
    'A cone has radius ' + m('9') + ' cm and height ' + m('12') + ' cm. Find its slant height, total surface area and volume.',
    'A cone has volume ' + m('147π') + ' cm³ and radius ' + m('7') + ' cm. Find its height and curved surface area.',
    'A sector of radius ' + m('15') + ' and angle ' + m('144°') + ' is rolled into a cone. Find its radius, height and volume.',
    'A cone has total surface area ' + m('144π') + ' and slant height ' + m('15') + '. Find its radius.',
    'Explain in three sentences why the curved surface area uses ' + m('l') + ' and not ' + m('h') + '.'
  ]
});

/* ============================== 23 ============================== */
G11_GEO.push({
  id: 'g11-23', stream: 'geo', grade: 11, quarter: 3, lessons: '38', hours: 1,
  title: 'Arc, sector and the net of a cone',
  subtitle: 'Cambridge insert: the radian formulas of Grade 10, used to build a cone from a flat sheet.',
  uz: 'Geometry 11, §17 (extension)', uzPage: 'pp. 191–194',
  cam: 'P1 · 4.2–4.3', camPage: 'Pure Mathematics 1, pp. 86–95', wb: 'P1 Exercise 4B',
  objectives: [
    'Use s = rθ and A = ½r²θ in a practical construction.',
    'Find the sector angle needed to build a cone of given dimensions.',
    'Compute the wasted material when a sector is cut from a sheet.',
    'Design a cone to a specification.'
  ],
  terms: [
    ['Sector', 'Sektor', 'Сектор'],
    ['Arc length', 'Yoy uzunligi', 'Длина дуги'],
    ['Sector angle', 'Sektor burchagi', 'Угол сектора'],
    ['Radian', 'Radian', 'Радиан'],
    ['Net', 'Yoyma', 'Развёртка'],
    ['Waste material', 'Chiqindi material', 'Отходы материала'],
    ['Circumference', 'Aylana uzunligi', 'Длина окружности'],
    ['Design specification', 'Loyiha talabi', 'Техническое задание']
  ],
  timing: [[10, 'The link between the two circles'], [14, 'Finding the angle'], [12, 'Waste'], [6, 'A design task'], [3, 'Homework']],
  sections: [
    {
      h: 'The link between the two circles',
      html: `<div class="keybox"><div class="klabel">The one equation</div>
      The arc of the sector becomes the circumference of the base:
      ${eq(m('lθ = 2πr'), true)}
      with ${m('θ')} in radians, ${m('l')} the sector radius (the cone’s slant height) and ${m('r')} the
      cone’s base radius.</div>
      {{fig:radianSector:s = rθ. Here the arc s becomes the base circle of the cone.}}
      <p>Everything else follows: ${m('θ = ' + f('2πr', 'l'))} in radians, or
      ${m(f('360r', 'l'))} degrees.</p>`
    },
    {
      h: 'Finding the angle',
      html: `<div class="tablewrap"><table>
      <thead><tr><th class="m">l</th><th class="m">r</th><th class="m">θ</th><th>In degrees</th></tr></thead>
      <tbody>
        <tr><td class="m">12</td><td class="m">4</td><td class="m">${f('2π', '3')}</td><td class="m">120°</td></tr>
        <tr><td class="m">10</td><td class="m">5</td><td class="m">π</td><td class="m">180°</td></tr>
        <tr><td class="m">15</td><td class="m">6</td><td class="m">${f('4π', '5')}</td><td class="m">144°</td></tr>
        <tr><td class="m">l</td><td class="m">l</td><td class="m">2π</td><td class="m">360°</td></tr>
      </tbody></table></div>
      <p>The last row is the flat disc: when ${m('r = l')} the cone has no height at all.</p>
      <p>Check the areas agree: the sector area ${m(f('1', '2') + 'l²θ = ' + f('1', '2') + 'l² · ' + f('2πr', 'l') + ' = πrl')} —
      the curved surface area of the last lesson, derived a second way.</p>`
    },
    {
      h: 'Waste, and a design task',
      html: `<p>A sector is cut from a square or a circular sheet; the rest is waste. The proportion
      wasted is a real design consideration:</p>
      ${eq('waste fraction from a full disc ' + m('= 1 − ' + f('θ', '2π') + ' = 1 − ' + f('r', 'l')), true)}
      <p><b>Example.</b> A cone with ${m('r = 4')}, ${m('l = 12')} uses ${m(f('1', '3'))} of the disc of
      radius ${m('12')}, so two thirds of the material is wasted. A shallower cone — ${m('r')} closer to
      ${m('l')} — wastes far less.</p>
      <div class="keybox"><div class="klabel">The design task, in pairs</div>
      Design a paper cone to hold exactly ${m('200')} ml (${m('200')} cm³). Choose ${m('r')} and
      ${m('h')}, compute ${m('l')} and ${m('θ')}, draw the sector, cut and build it. Then measure what
      it actually holds and explain the difference.</div>`
    }
  ],
  examples: [
    {
      q: 'A cone has ' + m('r = 5') + ' and ' + m('l = 15') + '. Find the sector angle in degrees.',
      steps: [
        [m('θ = ' + f('2πr', 'l') + ' = ' + f('10π', '15') + ' = ' + f('2π', '3')), ''],
        ['In degrees: ' + m(f('360 × 5', '15')), ''],
        [m('= 120°'), '']
      ],
      ans: m('120°')
    },
    {
      q: 'A sector of radius ' + m('20') + ' and angle ' + m('216°') + ' is rolled up. Find the cone’s radius and volume.',
      steps: [
        [m('r = ' + f('216', '360') + ' × 20 = 12'), ''],
        [m('h = ' + sr('400 − 144') + ' = 16'), ''],
        [m('V = ' + f('1', '3') + 'π(144)(16)'), ''],
        [m('= 768π ≈ 2413'), '']
      ],
      ans: m('r = 12') + ', ' + m('V = 768π') + ' ≈ ' + m('2413')
    },
    {
      q: 'Design a cone of volume ' + m('200') + ' cm³ with ' + m('r = 5') + '. Find ' + m('h') + ', ' + m('l') + ' and ' + m('θ') + '.',
      steps: [
        [m('200 = ' + f('1', '3') + 'π(25)h ⇒ h = ' + f('24', 'π') + ' ≈ 7.64'), ''],
        [m('l = ' + sr('25 + 58.3') + ' ≈ 9.13'), ''],
        [m('θ = ' + f('360 × 5', '9.13') + ' ≈ 197°'), '']
      ],
      ans: m('h ≈ 7.6') + ', ' + m('l ≈ 9.1') + ', ' + m('θ ≈ 197°')
    }
  ],
  modelNote: 'Cut two sectors of the same radius but different angles and compare the cones.',
  interactive: {
    type: 'circleAngles',
    title: 'Sector to cone',
    hint: 'The arc becomes the base circle.'
  },
  quiz: [
    { q: 'The arc of the sector becomes:', a: ['the slant height', 'the base circumference', 'the height', 'the axis'], c: 1, why: 'It wraps round the base.' },
    { q: m('θ') + ' in radians is:', a: [m(f('r', 'l')), m(f('2πr', 'l')), m(f('l', 'r')), m('2πl')], c: 1, why: m('lθ = 2πr') + '.' },
    { q: m('l = 12, r = 4') + ' gives ' + m('θ') + ':', a: [m('60°'), m('120°'), m('180°'), m('240°')], c: 1, why: m(f('360 × 4', '12')) + '.' },
    { q: 'When ' + m('r = l') + ' the cone is:', a: ['very tall', 'a flat disc', 'a sphere', 'impossible'], c: 1, why: 'The height is zero.' },
    { q: 'The sector area equals:', a: [m('πr²'), m('πrl'), m('2πrl'), m('πl²')], c: 1, why: 'The curved surface area.' }
  ],
  practice: {
    easy: [
      [m('θ') + ' for ' + m('l = 10, r = 5'), m('180°')],
      [m('θ') + ' for ' + m('l = 12, r = 4'), m('120°')],
      [m('θ') + ' for ' + m('l = 15, r = 6'), m('144°')],
      [m('r') + ' from ' + m('l = 20, θ = 90°'), m('5')],
      [m('r') + ' from ' + m('l = 18, θ = 180°'), m('9')],
      ['The arc becomes', 'the base circumference'],
      ['Sector area equals', m('πrl')]
    ],
    med: [
      ['Sector radius 20, angle ' + m('216°') + ': the cone’s radius', m('12')],
      ['Same: the height and volume', m('16') + ', ' + m('768π')],
      ['Cone of ' + m('r = 5, l = 15') + ': the angle', m('120°')],
      ['Waste fraction for ' + m('r = 4, l = 12'), m(f('2', '3'))],
      ['Waste fraction for ' + m('r = 9, l = 10'), m('0.1')],
      ['Cone of volume 200 with ' + m('r = 5') + ': ' + m('h'), m('≈ 7.64')],
      ['Same: the sector angle', m('≈ 197°')]
    ],
    hard: [
      ['A cone of maximum volume from a disc of radius ' + m('R') + ': the sector angle', m('≈ 294°')],
      ['That maximum volume for ' + m('R = 12'), m('≈ 836')],
      ['A cone with ' + m('θ = 90°') + ' and volume ' + m('200') + ': find ' + m('l'), m('≈ 11.7')],
      ['Two cones from one disc of radius 10, no waste: their radii', m('5') + ' each if the disc is halved'],
      ['A cone of ' + m('r = 6, h = 8') + ': the sector angle and the waste from a disc of radius ' + m('l'), m('216°') + ', ' + m('40%')],
      ['Design a cone of volume 500 and ' + m('θ = 180°'), m('r ≈ 6.2, l ≈ 12.4')],
      ['Why does a shallower cone waste less material?', m('r') + ' is nearer ' + m('l') + ', so the sector is nearer the full disc']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Bring the built paper cone and its measured capacity.',
  homework: [
    'A cone has ' + m('r = 8') + ' and ' + m('l = 20') + '. Find the sector angle in degrees and in radians.',
    'A sector of radius ' + m('24') + ' and angle ' + m('150°') + ' is rolled up. Find the cone’s radius, height and volume.',
    'Design and build a paper cone of volume ' + m('200') + ' cm³, giving ' + m('r') + ', ' + m('h') + ', ' + m('l') + ' and ' + m('θ') + '.',
    'Measure what your cone actually holds and explain in two sentences why it differs from ' + m('200') + ' ml.'
  ]
});

/* ============================== 24 ============================== */
G11_GEO.push({
  id: 'g11-24', stream: 'geo', grade: 11, quarter: 3, lessons: '39', hours: 1,
  title: 'The frustum of a cone',
  subtitle: 'The bucket, the lampshade and the flowerpot — and the two formulas that measure them.',
  uz: 'Geometry 11, §18', uzPage: 'pp. 195–200',
  cam: 'Extension', camPage: 'Core & Extended, pp. 343–346', wb: 'Exercise 18.1',
  objectives: [
    'Describe the elements of a frustum of a cone.',
    'Compute its curved and total surface area.',
    'Compute its volume.',
    'Solve a practical problem about a bucket or a lampshade.'
  ],
  terms: [
    ['Frustum of a cone', 'Kesik konus', 'Усечённый конус'],
    ['Upper radius', 'Yuqori radius', 'Верхний радиус'],
    ['Lower radius', 'Quyi radius', 'Нижний радиус'],
    ['Slant height', 'Yasovchi', 'Образующая'],
    ['Curved surface', 'Yon sirt', 'Боковая поверхность'],
    ['Capacity', 'Sig‘im', 'Вместимость'],
    ['Complementary cone', 'To‘ldiruvchi konus', 'Дополняющий конус'],
    ['Axial section', 'O‘qli kesim', 'Осевое сечение']
  ],
  timing: [[8, 'The solid'], [14, 'Surface area'], [14, 'Volume'], [6, 'Practical problems'], [3, 'Homework']],
  sections: [
    {
      h: 'The solid',
      html: `<p>Cut a cone with a plane parallel to the base and remove the small cone. What remains is a
      <b>frustum of a cone</b> — the shape of every bucket, lampshade and flowerpot.</p>
      {{fig:frustum:The removed cone shown dashed. R and r are the two radii; l is the slant height of the frustum.}}
      ${eq(m('l² = h² + (R − r)²'), true)}
      <p>The axial section is a trapezium with parallel sides ${m('2R')} and ${m('2r')}, height ${m('h')}
      and slanting sides ${m('l')}. The ${m('R − r')} in the formula is the horizontal step from one
      radius to the other.</p>`
    },
    {
      h: 'Surface area',
      html: `${eq(m('S_curved = πl(R + r)') + '     ' + m('S_total = πl(R + r) + πR² + πr²'), true)}
      <p>It is the big cone's curved area minus the small one's, simplified — the same construction as
      the pyramid frustum, with ${m(f('1', '2') + '(P₁ + P₂)l')} becoming ${m('π(R + r)l')}.</p>
      <div class="warn"><span class="wl">A bucket has one end, not two</span>
      A bucket needs ${m('πl(R + r) + πr²')} — the curved surface and the <b>base</b> only. Read the
      object before choosing which circles to include.</div>`
    },
    {
      h: 'Volume',
      html: `${eq(m('V = ' + f('πh', '3') + '(R² + Rr + r²)'), true)}
      <p>The same shape of formula as the pyramid frustum, with ${m(sr('B₁B₂'))} becoming
      ${m('πRr')}. With ${m('r = R')} it gives the cylinder ${m('πR²h')}; with ${m('r = 0')} it gives
      the cone ${m(f('1', '3') + 'πR²h')}. Both checks are worth doing once.</p>
      <p><b>Example.</b> A bucket of radii ${m('12')} and ${m('9')} cm and depth ${m('20')} cm:</p>
      ${eq(m('V = ' + f('20π', '3') + '(144 + 108 + 81) = ' + f('20π', '3') + '(333) = 2220π ≈ 6975') + ' cm³', true)}
      <p>That is about ${m('7')} litres — a realistic bucket.</p>`
    },
    {
      h: 'Practical problems',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Object</th><th>What is wanted</th><th>Which formula</th></tr></thead>
      <tbody>
        <tr><td>a bucket</td><td>capacity</td><td class="m">${f('πh', '3')}(R² + Rr + r²)</td></tr>
        <tr><td>a lampshade</td><td>material</td><td class="m">πl(R + r)</td></tr>
        <tr><td>a flowerpot</td><td>capacity and the material for the sides and base</td><td>both</td></tr>
        <tr><td>a paper cup</td><td>the flat sector-ring to cut</td><td>the net</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The check that catches errors</div>
      Put ${m('r = R')} into any frustum formula: it must give the cylinder. Put ${m('r = 0')}: it must
      give the cone. A formula that fails either check has been mis-copied.</div>`
    }
  ],
  examples: [
    {
      q: 'A bucket has radii ' + m('12') + ' and ' + m('9') + ' cm and depth ' + m('20') + ' cm. Find its capacity in litres.',
      steps: [
        [m('V = ' + f('20π', '3') + '(144 + 108 + 81)'), ''],
        [m('= ' + f('20π', '3') + ' × 333 = 2220π'), ''],
        [m('≈ 6975') + ' cm³', ''],
        [m('≈ 7.0') + ' litres.', '']
      ],
      ans: m('≈ 7.0') + ' litres'
    },
    {
      q: 'The same bucket: find the area of metal needed (curved surface and base).',
      steps: [
        [m('l = ' + sr('400 + 9') + ' = ' + sr('409') + ' ≈ 20.2'), ''],
        [m('S_curved = π(20.2)(21) ≈ 1333'), ''],
        [m('base = π(81) ≈ 254'), ''],
        [m('≈ 1587') + ' cm².', '']
      ],
      ans: m('≈ 1590') + ' cm²'
    },
    {
      q: 'A frustum has radii ' + m('6') + ' and ' + m('3') + ' and slant height ' + m('5') + '. Find its height and volume.',
      steps: [
        [m('h = ' + sr('25 − 9') + ' = 4'), ''],
        [m('V = ' + f('4π', '3') + '(36 + 18 + 9)'), ''],
        [m('= ' + f('4π', '3') + ' × 63 = 84π'), '']
      ],
      ans: m('h = 4') + ', ' + m('V = 84π') + ' ≈ ' + m('264')
    }
  ],
  modelNote: 'Bring a real bucket and measure its two radii and depth.',
  interactive: {
    type: 'scaleSolid',
    title: 'Cutting a cone',
    hint: 'The removed cone is similar to the whole.'
  },
  quiz: [
    { q: m('l²') + ' for a frustum equals:', a: [m('h² + R²'), m('h² + (R − r)²'), m('h² + (R + r)²'), m('R² − r²')], c: 1, why: 'The horizontal step is ' + m('R − r') + '.' },
    { q: m('S_curved') + ' of a frustum:', a: [m('πrl'), m('πl(R + r)'), m('πl(R − r)'), m('2πrl')], c: 1, why: 'Big cone minus small.' },
    { q: m('V') + ' of a frustum:', a: [m(f('πh', '2') + '(R² + r²)'), m(f('πh', '3') + '(R² + Rr + r²)'), m(f('1', '3') + 'πR²h'), m('πR²h')], c: 1, why: 'The ' + m('Rr') + ' term is essential.' },
    { q: 'Setting ' + m('r = R') + ' gives:', a: ['a cone', 'a cylinder', 'a sphere', 'nothing'], c: 1, why: m('πR²h') + '.' },
    { q: 'Setting ' + m('r = 0') + ' gives:', a: ['a cone', 'a cylinder', 'a sphere', 'nothing'], c: 0, why: m(f('1', '3') + 'πR²h') + '.' }
  ],
  practice: {
    easy: [
      [m('l') + ' with ' + m('h = 4, R = 6, r = 3'), m('5')],
      [m('l') + ' with ' + m('h = 12, R = 10, r = 5'), m('13')],
      [m('S_curved') + ' with ' + m('l = 5, R = 6, r = 3'), m('45π')],
      [m('V') + ' with ' + m('h = 4, R = 6, r = 3'), m('84π')],
      ['Setting ' + m('r = R') + ' gives', 'a cylinder'],
      ['Setting ' + m('r = 0') + ' gives', 'a cone'],
      ['Axial section of a frustum', 'a trapezium']
    ],
    med: [
      ['Bucket ' + m('R = 12, r = 9, h = 20') + ': capacity in litres', m('≈ 7.0')],
      ['Same: metal for the sides and base', m('≈ 1590') + ' cm²'],
      [m('R = 10, r = 4, h = 8') + ': the volume', m(f('8π', '3') + ' × 156') + ' = ' + m('416π')],
      ['Same: the slant height', m('10')],
      ['Same: the curved area', m('140π')],
      ['A lampshade ' + m('R = 20, r = 12, h = 15') + ': material', m('l = 17') + ', curved area ' + m('544π')],
      ['A flowerpot ' + m('R = 15, r = 10, h = 18') + ': capacity in litres', m('≈ 8.9')]
    ],
    hard: [
      ['A frustum of volume ' + m('84π') + ' with ' + m('R = 6, r = 3') + ': its height', m('4')],
      ['A bucket holds 10 litres with ' + m('R = 14, r = 11') + ': its depth', m('≈ 20.6') + ' cm'],
      ['Show ' + m('V') + ' reduces to the cone when ' + m('r = 0'), 'The other two terms vanish'],
      ['A frustum cut halfway up a cone: the volume ratio frustum : whole', m('7 : 8')],
      ['A frustum with ' + m('R = 2r') + ' and height ' + m('h') + ': its volume in terms of ' + m('r, h'), m(f('7πr²h', '3'))],
      ['A paper cup ' + m('R = 4, r = 2.5, h = 9') + ': capacity in ml', m('≈ 313')],
      ['Two similar frustums with heights ' + m('3') + ' and ' + m('5') + ': the volume ratio', m('27 : 125')]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Check every formula by setting ' + m('r = R') + ' and ' + m('r = 0') + '.',
  homework: [
    'A bucket has radii ' + m('14') + ' and ' + m('10') + ' cm and depth ' + m('24') + ' cm. Find its capacity in litres.',
    'The same bucket: find the area of metal for the curved surface and the base.',
    'A frustum has radii ' + m('8') + ' and ' + m('5') + ' and slant height ' + m('5') + '. Find its height, curved area and volume.',
    'Show that the frustum volume formula gives the cylinder when ' + m('r = R') + ' and the cone when ' + m('r = 0') + '.'
  ]
});

/* ============================== 25 ============================== */
G11_GEO.push({
  id: 'g11-25', stream: 'geo', grade: 11, quarter: 3, lessons: '40', hours: 1,
  title: 'Similar solids and the volume scale factor',
  subtitle: 'Cambridge insert: one length ratio, three consequences — used on real models and real costs.',
  uz: 'Geometry 11, §18 (extension)', uzPage: 'pp. 201–204',
  cam: 'IGCSE E21.1–21.2', camPage: 'Core & Extended, pp. 226–234', wb: 'IGCSE Exercise 21.2',
  objectives: [
    'Apply the k, k² and k³ rules to similar solids.',
    'Recover the scale factor from an area or a volume ratio.',
    'Solve problems on models, packaging and costs.',
    'Explain why large animals are proportionally thicker.'
  ],
  terms: [
    ['Similar solids', 'O‘xshash jismlar', 'Подобные тела'],
    ['Scale factor', 'O‘xshashlik koeffitsienti', 'Коэффициент подобия'],
    ['Area factor', 'Yuza koeffitsienti', 'Коэффициент площади'],
    ['Volume factor', 'Hajm koeffitsienti', 'Коэффициент объёма'],
    ['Model', 'Model', 'Модель'],
    ['Corresponding lengths', 'Mos uzunliklar', 'Соответственные длины'],
    ['Cube root', 'Kub ildiz', 'Кубический корень'],
    ['Surface-area-to-volume ratio', 'Sirt va hajm nisbati', 'Отношение поверхности к объёму']
  ],
  timing: [[8, 'The three rules'], [14, 'Working backwards'], [12, 'Applications'], [8, 'Why size matters'], [3, 'Homework']],
  sections: [
    {
      h: 'The three rules',
      html: `${eq(m(f('L₂', 'L₁') + ' = k') + '   ·   ' + m(f('S₂', 'S₁') + ' = k²') + '   ·   ' + m(f('V₂', 'V₁') + ' = k³'), true)}
      {{fig:similarSolids:Double every length: four times the surface, eight times the volume.}}
      <p>Two solids are similar when one is an enlargement of the other. All cubes are similar; all
      spheres are similar; two cones are similar exactly when ${m(f('r', 'h'))} is the same for both.</p>`
    },
    {
      h: 'Working backwards',
      html: `${eq(m('k = ' + sr(f('S₂', 'S₁'))) + '     ' + m('k = ∛' + f('V₂', 'V₁')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th class="m">k</th><th>Other factors</th></tr></thead>
      <tbody>
        <tr><td>volumes ${m('8 : 27')}</td><td class="m">${f('2', '3')}</td><td>areas ${m('4 : 9')}</td></tr>
        <tr><td>areas ${m('16 : 25')}</td><td class="m">${f('4', '5')}</td><td>volumes ${m('64 : 125')}</td></tr>
        <tr><td>lengths ${m('1 : 50')}</td><td class="m">${f('1', '50')}</td><td>areas ${m('1 : 2500')}, volumes ${m('1 : 125 000')}</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'Applications',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>Which factor</th></tr></thead>
      <tbody>
        <tr><td>how much paint?</td><td class="m">k²</td></tr>
        <tr><td>how much liquid?</td><td class="m">k³</td></tr>
        <tr><td>how much wire round the edge?</td><td class="m">k</td></tr>
        <tr><td>how much does it weigh?</td><td class="m">k³</td></tr>
        <tr><td>how much fabric to cover it?</td><td class="m">k²</td></tr>
      </tbody></table></div>
      <p><b>Example.</b> A model at ${m('1 : 20')} needs ${m('0.15')} litres of paint. The real object
      needs ${m('0.15 × 400 = 60')} litres — not ${m('3')}.</p>
      <div class="warn"><span class="wl">Paint is an area, not a volume</span>
      A coat of paint is a thin layer over a surface, so it scales with ${m('k²')}. Filling a tank
      scales with ${m('k³')}. Reading which is asked is the whole question.</div>`
    },
    {
      h: 'Why size matters',
      html: `<p>As a solid grows, its volume outruns its surface:</p>
      ${eq(m(f('S', 'V') + ' scales as ' + f('k²', 'k³') + ' = ' + f('1', 'k')), true)}
      <div class="keybox"><div class="klabel">Three consequences</div>
      A large animal has proportionally <b>less</b> skin per kilogram, so it loses heat more slowly —
      which is why elephants have big ears and mice do not.<br>
      Its mass grows as ${m('k³')} but its bone cross-section only as ${m('k²')}, so it needs
      proportionally thicker legs.<br>
      Small objects cool, dry and dissolve faster — the reason for chopping food and grinding ore.</div>
      <p>Doubling an animal's height multiplies its weight by ${m('8')} and its bone strength by only
      ${m('4')}. The scaled-up animal would break its own legs — a real constraint, first noticed by
      Galileo.</p>`
    }
  ],
  examples: [
    {
      q: 'Two similar cones have volumes ' + m('54') + ' and ' + m('128') + ' cm³. Find the ratio of their surface areas.',
      steps: [
        [m('k³ = ' + f('128', '54') + ' = ' + f('64', '27')), ''],
        [m('k = ' + f('4', '3')), ''],
        [m('k² = ' + f('16', '9')), '']
      ],
      ans: m('9 : 16')
    },
    {
      q: 'A model car is ' + m('1 : 24') + '. It needs ' + m('12') + ' cm² of paint. The real car needs?',
      steps: [
        [m('k = 24') + ', so ' + m('k² = 576') + '.', ''],
        [m('12 × 576 = 6912') + ' cm².', ''],
        [m('= 0.69') + ' m².', '']
      ],
      ans: m('≈ 0.69') + ' m²'
    },
    {
      q: 'Two similar jugs hold ' + m('0.5') + ' and ' + m('1.5') + ' litres. Their heights are in what ratio?',
      steps: [
        [m('k³ = 3'), ''],
        [m('k = ∛3 ≈ 1.442'), '']
      ],
      ans: m('1 : 1.44')
    }
  ],
  modelNote: 'Compare two similar containers and predict, then measure, the capacity ratio.',
  interactive: {
    type: 'scaleSolid',
    title: 'Scaling a solid',
    hint: 'Watch how differently the three bars grow.'
  },
  quiz: [
    { q: 'Doubling all lengths multiplies the volume by:', a: [m('2'), m('4'), m('6'), m('8')], c: 3, why: m('k³') + '.' },
    { q: 'And the surface area by:', a: [m('2'), m('4'), m('8'), m('16')], c: 1, why: m('k²') + '.' },
    { q: 'Volumes ' + m('8 : 27') + ' gives lengths:', a: [m('8 : 27'), m('2 : 3'), m('4 : 9'), m('1 : 3')], c: 1, why: 'Cube roots.' },
    { q: 'Paint scales with:', a: [m('k'), m('k²'), m('k³'), 'nothing'], c: 1, why: 'It covers an area.' },
    { q: m(f('S', 'V')) + ' scales as:', a: [m('k'), m(f('1', 'k')), m('k²'), m('k³')], c: 1, why: m(f('k²', 'k³')) + '.' }
  ],
  practice: {
    easy: [
      [m('k = 3') + ': area factor', m('9')],
      [m('k = 3') + ': volume factor', m('27')],
      [m('k = 0.5') + ': volume factor', m('0.125')],
      ['Volumes ' + m('27 : 64') + ': lengths', m('3 : 4')],
      ['Areas ' + m('9 : 25') + ': lengths', m('3 : 5')],
      ['Paint scales with', m('k²')],
      ['Liquid scales with', m('k³')]
    ],
    med: [
      ['Volumes ' + m('54') + ' and ' + m('128') + ': the area ratio', m('9 : 16')],
      ['Model ' + m('1 : 24') + ' needing ' + m('12') + ' cm² of paint: the real area', m('≈ 0.69') + ' m²'],
      ['Jugs of ' + m('0.5') + ' and ' + m('1.5') + ' litres: the height ratio', m('1 : 1.44')],
      ['Model ' + m('1 : 50') + ': the volume ratio', m('1 : 125 000')],
      ['A statue ' + m('1 : 6') + ' needs ' + m('0.5') + ' litres of paint. The real one', m('18') + ' litres'],
      ['Two similar tins, heights ' + m('8') + ' and ' + m('12') + '; smaller holds ' + m('320') + ' ml', m('1080') + ' ml'],
      ['Areas ' + m('49 : 81') + ': the volume ratio', m('343 : 729')]
    ],
    hard: [
      ['Two similar solids differ in volume by ' + m('111') + ' with ' + m('k = ' + f('4', '3')), m('81') + ' and ' + m('192')],
      ['A cone cut halfway up: the volume ratio of the parts', m('1 : 7')],
      ['A ' + m('1 : 200') + ' model bridge with deck area ' + m('80') + ' cm²: the real area', m('320') + ' m²'],
      ['Why can a mouse survive a fall an elephant cannot?', 'Its surface-to-mass ratio is far larger'],
      ['A doubled animal: weight and bone strength factors', m('8') + ' and ' + m('4')],
      ['Two similar containers hold 2 and 6.75 litres. The height ratio', m('2 : 3')],
      ['A sugar cube dissolves faster when crushed. Why?', 'Crushing multiplies the surface area at the same volume']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'State ' + m('k') + ' explicitly before using ' + m('k²') + ' or ' + m('k³') + '.',
  homework: [
    'Two similar cones have volumes ' + m('40') + ' and ' + m('135') + ' cm³. Find the ratio of their heights and of their surface areas.',
    'A model aeroplane is ' + m('1 : 72') + '. Its wing area is ' + m('60') + ' cm². Find the real wing area in m².',
    'Two similar bottles hold ' + m('330') + ' and ' + m('1000') + ' ml. Find the ratio of their heights.',
    'Explain, using ' + m('k²') + ' and ' + m('k³') + ', why a doubled animal could not stand.'
  ]
});

/* ============================== 26 ============================== */
G11_GEO.push({
  id: 'g11-26', stream: 'geo', grade: 11, quarter: 3, lessons: '41–42', hours: 2,
  title: 'The sphere and its sections; inscribed and circumscribed solids',
  subtitle: 'Every plane section is a circle — and that single fact settles every sphere problem.',
  uz: 'Geometry 11, §19', uzPage: 'pp. 205–216',
  cam: 'IGCSE E13.x', camPage: 'Core & Extended, pp. 347–354', wb: 'Exercise 19.1',
  objectives: [
    'Define a sphere and a ball, and name their elements.',
    'Compute the radius of a plane section from its distance to the centre.',
    'Recognise great and small circles.',
    'Solve problems on solids inscribed in or circumscribed about a sphere.'
  ],
  terms: [
    ['Sphere', 'Sfera', 'Сфера'],
    ['Ball', 'Shar', 'Шар'],
    ['Great circle', 'Katta aylana', 'Большая окружность'],
    ['Small circle', 'Kichik aylana', 'Малая окружность'],
    ['Section of a sphere', 'Sfera kesimi', 'Сечение сферы'],
    ['Tangent plane', 'Urinma tekislik', 'Касательная плоскость'],
    ['Inscribed sphere', 'Ichki chizilgan sfera', 'Вписанная сфера'],
    ['Circumscribed sphere', 'Tashqi chizilgan sfera', 'Описанная сфера'],
    ['Diameter', 'Diametr', 'Диаметр']
  ],
  timing: [[12, 'Sphere and ball'], [24, 'Plane sections'], [24, 'Tangent planes'], [24, 'Inscribed and circumscribed'], [20, 'Practice'], [6, 'Homework']],
  sections: [
    {
      h: 'Sphere and ball',
      html: `<div class="keybox"><div class="klabel">Two different objects</div>
      A <b>sphere</b> is the <b>surface</b> — all points at distance ${m('R')} from the centre. A
      <b>ball</b> is the solid — all points at distance ${m('≤ R')}. Surface area belongs to the sphere;
      volume belongs to the ball.</div>
      <p>In coordinates (Quarter I) the sphere of centre ${m('(a, b, c)')} and radius ${m('R')} is</p>
      ${eq(m('(x − a)² + (y − b)² + (z − c)² = R²'), true)}
      <p>The sphere has infinitely many planes and axes of symmetry, and one centre — the most symmetric
      solid there is.</p>`
    },
    {
      h: 'Plane sections',
      html: `{{fig:sphereSection:A plane at distance d from the centre cuts a circle of radius ρ, with ρ² = R² − d².}}
      ${eq(m('ρ² = R² − d²'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">d</th><th>Section</th><th>Name</th></tr></thead>
      <tbody>
        <tr><td class="m">0</td><td>a circle of radius ${m('R')}</td><td>a <b>great</b> circle</td></tr>
        <tr><td class="m">0 &lt; d &lt; R</td><td>a circle of radius ${m(sr('R² − d²'))}</td><td>a <b>small</b> circle</td></tr>
        <tr><td class="m">d = R</td><td>a single point</td><td>a tangent plane</td></tr>
        <tr><td class="m">d &gt; R</td><td>nothing</td><td>the plane misses the sphere</td></tr>
      </tbody></table></div>
      <p>The great circles are the largest sections, and the shortest path between two points on a
      sphere runs along one — which is why aircraft routes look curved on a flat map.</p>`
    },
    {
      h: 'Tangent planes',
      html: `<div class="keybox"><div class="klabel">Tangent plane</div>
      A plane at distance exactly ${m('R')} from the centre touches the sphere at one point, and is
      <b>perpendicular</b> to the radius drawn to that point.</div>
      <p>That perpendicularity is the space version of the circle theorem of Grade 8, and it is proved
      the same way: any other point of the plane is further from the centre than the foot of the
      perpendicular, so it lies outside the sphere.</p>`
    },
    {
      h: 'Inscribed and circumscribed',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Situation</th><th>Relation</th></tr></thead>
      <tbody>
        <tr><td>sphere inscribed in a cube of edge ${m('a')}</td><td class="m">R = ${f('a', '2')}</td></tr>
        <tr><td>sphere circumscribed about a cube of edge ${m('a')}</td><td class="m">R = ${f('a' + sr('3'), '2')}</td></tr>
        <tr><td>sphere inscribed in a cylinder of radius ${m('r')}, height ${m('2r')}</td><td class="m">R = r</td></tr>
        <tr><td>sphere circumscribed about a cuboid ${m('a × b × c')}</td><td class="m">R = ${f(sr('a² + b² + c²'), '2')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The two questions to ask</div>
      <b>Inscribed:</b> the sphere touches the faces, so its diameter is the smallest dimension.
      <b>Circumscribed:</b> the sphere passes through the vertices, so its diameter is the space
      diagonal.</div>
      <p><b>Archimedes’ result.</b> A sphere inscribed in a cylinder of the same radius and height
      ${m('2r')} has exactly ${m(f('2', '3'))} of the cylinder's volume — and exactly ${m(f('2', '3'))}
      of its total surface area. Archimedes had it carved on his tomb.</p>`
    }
  ],
  examples: [
    {
      q: 'A plane is ' + m('8') + ' cm from the centre of a sphere of radius ' + m('17') + ' cm. Find the radius of the section.',
      steps: [
        [m('ρ² = 289 − 64 = 225'), ''],
        [m('ρ = 15'), '']
      ],
      ans: m('15') + ' cm'
    },
    {
      q: 'A sphere is inscribed in a cube of edge ' + m('12') + '. Find its radius. Then find the radius of the sphere through the cube’s vertices.',
      steps: [
        ['Inscribed: touches the faces, ' + m('2R = 12') + '.', m('R = 6')],
        ['Circumscribed: passes through the vertices.', m('2R = 12' + sr('3'))],
        [m('R = 6' + sr('3') + ' ≈ 10.4'), '']
      ],
      ans: m('6') + ' and ' + m('6' + sr('3'))
    },
    {
      q: 'A section of a sphere has radius ' + m('12') + ' and is ' + m('9') + ' from the centre. Find the sphere’s radius and its surface area.',
      steps: [
        [m('R² = 144 + 81 = 225'), ''],
        [m('R = 15'), ''],
        [m('S = 4π(225) = 900π ≈ 2827'), '']
      ],
      ans: m('R = 15') + '; ' + m('900π') + ' ≈ ' + m('2830')
    }
  ],
  modelNote: 'Cut an orange at different heights and compare the circles.',
  interactive: {
    type: 'space3d',
    title: 'Cutting a sphere',
    hint: 'Move the plane and watch the section shrink to a point.'
  },
  quiz: [
    { q: 'Every plane section of a sphere is:', a: ['an ellipse', 'a circle', 'a parabola', 'a point'], c: 1, why: 'Whatever the angle.' },
    { q: m('ρ²') + ' equals:', a: [m('R² + d²'), m('R² − d²'), m('d² − R²'), m('Rd')], c: 1, why: 'Pythagoras from the centre.' },
    { q: 'A great circle has ' + m('d') + ' equal to:', a: [m('R'), m('0'), m(f('R', '2')), m('2R')], c: 1, why: 'Through the centre.' },
    { q: 'A sphere inscribed in a cube of edge ' + m('a') + ' has radius:', a: [m('a'), m(f('a', '2')), m(f('a' + sr('3'), '2')), m('a' + sr('2'))], c: 1, why: 'It touches the faces.' },
    { q: 'A sphere through a cube’s vertices has radius:', a: [m(f('a', '2')), m(f('a' + sr('2'), '2')), m(f('a' + sr('3'), '2')), m('a')], c: 2, why: 'Half the space diagonal.' }
  ],
  practice: {
    easy: [
      [m('ρ') + ' with ' + m('R = 5, d = 3'), m('4')],
      [m('ρ') + ' with ' + m('R = 13, d = 5'), m('12')],
      [m('ρ') + ' with ' + m('R = 17, d = 8'), m('15')],
      ['Section at ' + m('d = 0') + ' is called', 'a great circle'],
      ['Section at ' + m('d = R') + ' is', 'a single point'],
      ['Sphere inscribed in a cube of edge 10: ' + m('R'), m('5')],
      ['Sphere round a cube of edge 10: ' + m('R'), m('5' + sr('3'))]
    ],
    med: [
      ['Section radius 12 at ' + m('d = 9') + ': the sphere’s radius', m('15')],
      ['Same: the surface area', m('900π')],
      ['Sphere round a cuboid ' + m('3 × 4 × 12') + ': its radius', m('6.5')],
      ['Sphere inscribed in a cylinder ' + m('r = 6, h = 12') + ': ' + m('R'), m('6')],
      ['A plane 10 from the centre of a sphere of radius 26: the section radius', m('24')],
      ['A section of radius 8 in a sphere of radius 10: its distance', m('6')],
      ['A plane 15 from a sphere of radius 12 cuts', 'nothing']
    ],
    hard: [
      ['A sphere of radius 25; two parallel planes on the same side at ' + m('7') + ' and ' + m('20') + '. The section radii', m('24') + ' and ' + m('15')],
      ['A cone of base radius 6 and height 8 inscribed in a sphere: the sphere’s radius', m('6.25')],
      ['Archimedes: the sphere’s volume as a fraction of its cylinder', m(f('2', '3'))],
      ['And the surface areas', m(f('2', '3')) + ' as well'],
      ['A sphere touches all 12 edges of a cube of edge ' + m('a') + ': its radius', m(f('a' + sr('2'), '2'))],
      ['Two spheres of radii 5 and 3 with centres 6 apart: the radius of the common circle', m('≈ 2.99')],
      ['Prove a tangent plane is perpendicular to the radius at the point of contact', 'Any other point is further from the centre']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw the right triangle with legs ' + m('d') + ' and ' + m('ρ') + ' and hypotenuse ' + m('R') + ' every time.',
  homework: [
    'A plane is ' + m('9') + ' cm from the centre of a sphere of radius ' + m('41') + ' cm. Find the section radius.',
    'A section of radius ' + m('20') + ' lies ' + m('21') + ' from the centre. Find the sphere’s radius and surface area.',
    'Find the radius of the sphere inscribed in, and of the sphere circumscribed about, a cube of edge ' + m('8') + '.',
    'Find the radius of the sphere through the vertices of a ' + m('6 × 8 × 24') + ' cuboid.',
    'Explain in three sentences the difference between a sphere and a ball.'
  ]
});

/* ============================== 27 ============================== */
G11_GEO.push({
  id: 'g11-27', stream: 'geo', grade: 11, quarter: 3, lessons: '43–44', hours: 2,
  title: 'Trigonometry applied to solids of revolution',
  subtitle: 'Cambridge insert: the axial section is a plane triangle, and every cone problem lives inside it.',
  uz: 'Geometry 11, §19 (extension)', uzPage: 'pp. 217–222',
  cam: 'IGCSE E6.6', camPage: 'Core & Extended, pp. 300–312', wb: 'IGCSE Exercise 6.6',
  objectives: [
    'Extract the axial section of a cone or a frustum and solve it.',
    'Find the semi-vertical angle of a cone.',
    'Use the sine and cosine rules inside a solid of revolution.',
    'Combine a trigonometric result with a volume formula.'
  ],
  terms: [
    ['Axial section', 'O‘qli kesim', 'Осевое сечение'],
    ['Semi-vertical angle', 'Yarim uch burchagi', 'Половина угла при вершине'],
    ['Slant height', 'Yasovchi', 'Образующая'],
    ['Solid of revolution', 'Aylanish jismi', 'Тело вращения'],
    ['Angle of the slant with the base', 'Yasovchi va asos burchagi', 'Угол образующей с основанием'],
    ['Inscribed cone', 'Ichki chizilgan konus', 'Вписанный конус'],
    ['Extracted triangle', 'Ajratilgan uchburchak', 'Выделенный треугольник'],
    ['Sine rule', 'Sinuslar teoremasi', 'Теорема синусов'],
    ['Cosine rule', 'Kosinuslar teoremasi', 'Теорема косинусов']
  ],
  timing: [[14, 'The axial section'], [24, 'The semi-vertical angle'], [24, 'Frustums and inscribed solids'], [22, 'Combined problems'], [20, 'Practice'], [6, 'Homework']],
  sections: [
    {
      h: 'The axial section',
      html: `<div class="keybox"><div class="klabel">The one move</div>
      Cut the solid through its axis. A cone gives an isosceles triangle of base ${m('2r')} and height
      ${m('h')}; a cylinder gives a rectangle ${m('2r')} by ${m('h')}; a frustum gives a trapezium.
      Draw that flat figure separately and solve it as a plane problem.</div>
      {{fig:coneNet:The right triangle inside the cone: r, h and l.}}
      <p>Every 3-D question about a solid of revolution reduces to this figure, exactly as every cuboid
      question in Grade 10 reduced to one extracted triangle.</p>`
    },
    {
      h: 'The semi-vertical angle',
      html: `<p>The angle ${m('α')} between the axis and a slant line is the <b>semi-vertical angle</b>;
      the full angle at the apex is ${m('2α')}.</p>
      ${eq(m('tan α = ' + f('r', 'h')) + '     ' + m('sin α = ' + f('r', 'l')) + '     ' + m('cos α = ' + f('h', 'l')), true)}
      <p>The angle ${m('β')} the slant makes with the <b>base</b> is the complement: ${m('β = 90° − α')},
      with ${m('tan β = ' + f('h', 'r'))}.</p>
      <div class="warn"><span class="wl">Two different angles</span>
      A question asking for “the angle at the vertex” wants ${m('2α')}; one asking for “the angle of the
      slant with the base” wants ${m('β')}. Read which, and mark it on the extracted triangle.</div>`
    },
    {
      h: 'Frustums and inscribed solids',
      html: `<p>The axial section of a frustum is a trapezium; drop a perpendicular from the top corner
      to make a right triangle with legs ${m('h')} and ${m('R − r')} and hypotenuse ${m('l')}. Then</p>
      ${eq(m('tan β = ' + f('h', 'R − r')), true)}
      <p><b>Inscribed cone in a sphere.</b> The axial section is an isosceles triangle inscribed in a
      circle. With base radius ${m('r')} and height ${m('h')} in a sphere of radius ${m('R')}:</p>
      ${eq(m('r² = h(2R − h)') + '   (the intersecting-chord theorem)', true)}
      <p><b>Cylinder in a cone.</b> Similar triangles in the axial section relate the cylinder's radius
      to its height, and the optimisation of Grade 11 Quarter I then finds the largest one.</p>`
    },
    {
      h: 'Combined problems',
      html: `<p>A full problem chains three steps:</p>
      <ol>
        <li>Extract and label the axial section.</li>
        <li>Solve it with right-angle trigonometry, or the sine or cosine rule.</li>
        <li>Feed the length found into the volume or surface-area formula.</li>
      </ol>
      <p><b>Example.</b> A cone has slant height ${m('20')} and semi-vertical angle ${m('35°')}. Then
      ${m('r = 20 sin 35° ≈ 11.47')} and ${m('h = 20 cos 35° ≈ 16.38')}, so
      ${m('V = ' + f('1', '3') + 'π(131.6)(16.38) ≈ 2258')} and
      ${m('S = πr(r + l) ≈ 1134')}.</p>`
    }
  ],
  examples: [
    {
      q: 'A cone has radius ' + m('9') + ' and height ' + m('12') + '. Find the semi-vertical angle and the angle of the slant with the base.',
      steps: [
        [m('tan α = ' + f('9', '12') + ' = 0.75'), ''],
        [m('α ≈ 36.9°'), 'Semi-vertical.'],
        [m('β = 90 − 36.9 = 53.1°'), 'With the base.']
      ],
      ans: m('α ≈ 36.9°') + ', ' + m('β ≈ 53.1°')
    },
    {
      q: 'A cone has slant height ' + m('20') + ' and semi-vertical angle ' + m('35°') + '. Find its volume.',
      steps: [
        [m('r = 20 sin 35° ≈ 11.47'), ''],
        [m('h = 20 cos 35° ≈ 16.38'), ''],
        [m('V = ' + f('1', '3') + 'π(131.6)(16.38)'), ''],
        [m('≈ 2258'), '']
      ],
      ans: m('≈ 2260') + ' cubic units'
    },
    {
      q: 'A frustum has radii ' + m('10') + ' and ' + m('4') + ' and height ' + m('8') + '. Find the angle the slant makes with the base.',
      steps: [
        [m('R − r = 6'), ''],
        [m('tan β = ' + f('8', '6')), ''],
        [m('β ≈ 53.1°'), '']
      ],
      ans: m('≈ 53.1°')
    }
  ],
  modelNote: 'Cut a cone of plasticine through its axis and hold up the triangle.',
  interactive: {
    type: 'solveTriangle',
    title: 'The axial triangle',
    hint: 'Change the sides and watch the angles.'
  },
  quiz: [
    { q: 'The axial section of a cone is:', a: ['a circle', 'an isosceles triangle', 'a rectangle', 'a trapezium'], c: 1, why: 'Base ' + m('2r') + ', sides ' + m('l') + '.' },
    { q: 'The axial section of a frustum is:', a: ['a triangle', 'a trapezium', 'a rectangle', 'a circle'], c: 1, why: 'Two parallel sides.' },
    { q: m('tan α') + ' for the semi-vertical angle:', a: [m(f('h', 'r')), m(f('r', 'h')), m(f('r', 'l')), m(f('h', 'l'))], c: 1, why: 'Opposite over adjacent from the axis.' },
    { q: 'The angle at the apex is:', a: [m('α'), m('2α'), m('90 − α'), m('180 − α')], c: 1, why: 'Two semi-vertical angles.' },
    { q: 'A cone inscribed in a sphere satisfies:', a: [m('r² = h(2R − h)'), m('r = R'), m('h = R'), m('r² = R² + h²')], c: 0, why: 'The intersecting-chord theorem.' }
  ],
  practice: {
    easy: [
      ['Semi-vertical angle with ' + m('r = 3, h = 4'), m('≈ 36.9°')],
      ['Semi-vertical angle with ' + m('r = 5, h = 12'), m('≈ 22.6°')],
      ['Angle with the base for ' + m('r = 3, h = 4'), m('≈ 53.1°')],
      [m('r') + ' from ' + m('l = 10, α = 30°'), m('5')],
      [m('h') + ' from ' + m('l = 10, α = 30°'), m('5' + sr('3'))],
      ['Axial section of a cylinder', 'a rectangle'],
      ['Axial section of a frustum', 'a trapezium']
    ],
    med: [
      [m('r = 9, h = 12') + ': both angles', m('36.9°') + ' and ' + m('53.1°')],
      [m('l = 20, α = 35°') + ': the volume', m('≈ 2260')],
      ['Same: the total surface area', m('≈ 1130')],
      ['Frustum ' + m('R = 10, r = 4, h = 8') + ': the slant angle with the base', m('≈ 53.1°')],
      ['Same: the slant height', m('10')],
      ['A cone with apex angle ' + m('60°') + ' and ' + m('h = 12') + ': its radius', m('4' + sr('3')) + ' ≈ ' + m('6.93')],
      ['A cone of ' + m('r = 6, h = 8') + ' inscribed in a sphere: the sphere’s radius', m('6.25')]
    ],
    hard: [
      ['A cone with semi-vertical angle ' + m('30°') + ' and volume ' + m('1000') + ': its height', m('≈ 13.1')],
      ['A cylinder of greatest volume inscribed in a cone of ' + m('r = 6, h = 12') + ': its dimensions', m('r = 4, h = 4')],
      ['A cone inscribed in a sphere of radius 10 with height 16: its base radius', m('8')],
      ['A frustum of slant height 13 and radii 12 and 7: its height and volume', m('12') + ', ' + m('≈ 3630')],
      ['A cone of maximum volume in a sphere of radius ' + m('R') + ': its height', m(f('4R', '3'))],
      ['Two cones with the same slant height 15 and angles ' + m('20°, 40°') + ': the volume ratio', m('≈ 1 : 3.5')],
      ['Prove ' + m('r² = h(2R − h)') + ' for a cone in a sphere', 'Intersecting chords through the axis']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw the axial section separately, and mark the angle asked for.',
  homework: [
    'A cone has radius ' + m('7') + ' and height ' + m('24') + '. Find the semi-vertical angle, the apex angle and the angle of the slant with the base.',
    'A cone has slant height ' + m('26') + ' and semi-vertical angle ' + m('40°') + '. Find its radius, height and volume.',
    'A frustum has radii ' + m('15') + ' and ' + m('9') + ' and height ' + m('8') + '. Find its slant height and the angle with the base.',
    'A cone of base radius ' + m('9') + ' and height ' + m('12') + ' is inscribed in a sphere. Find the sphere’s radius.',
    'Explain in three sentences why the axial section reduces a 3-D problem to a 2-D one.'
  ]
});

/* ============================== 28 ============================== */
G11_GEO.push({
  id: 'g11-28', stream: 'geo', grade: 11, quarter: 3, lessons: '45–46', hours: 2,
  title: 'The volume of a sphere and of its parts',
  subtitle: 'Four thirds pi r cubed — where it comes from, and how to measure a cap, a segment and a sector.',
  uz: 'Geometry 11, §20', uzPage: 'pp. 223–234',
  cam: 'IGCSE E13.x', camPage: 'Core & Extended, pp. 355–360', wb: 'Exercise 20.1',
  objectives: [
    'State and use the volume of a ball.',
    'Derive the formula by Cavalieri or by integration.',
    'Compute the volume of a spherical cap and of a hemisphere.',
    'Solve problems on floating, displacement and compound solids.'
  ],
  terms: [
    ['Ball', 'Shar', 'Шар'],
    ['Hemisphere', 'Yarim shar', 'Полушар'],
    ['Spherical cap', 'Sharsimon segment', 'Шаровой сегмент'],
    ['Spherical sector', 'Sharsimon sektor', 'Шаровой сектор'],
    ['Spherical layer', 'Sharsimon qatlam', 'Шаровой слой'],
    ['Displacement', 'Siqib chiqarish', 'Вытеснение'],
    ['Cavalieri’s principle', 'Kavaleri prinsipi', 'Принцип Кавальери'],
    ['Height of a cap', 'Segment balandligi', 'Высота сегмента'],
    ['Archimedes’ theorem', 'Arximed teoremasi', 'Теорема Архимеда']
  ],
  timing: [[14, 'The formula'], [24, 'Where it comes from'], [24, 'Caps and hemispheres'], [22, 'Displacement'], [20, 'Practice'], [6, 'Homework']],
  sections: [
    {
      h: 'The formula',
      html: `${eq(m('V = ' + f('4', '3') + 'πR³'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">R</th><th class="m">V</th><th>Approximately</th></tr></thead>
      <tbody>
        <tr><td class="m">1</td><td class="m">${f('4π', '3')}</td><td class="m">4.19</td></tr>
        <tr><td class="m">3</td><td class="m">36π</td><td class="m">113</td></tr>
        <tr><td class="m">6</td><td class="m">288π</td><td class="m">905</td></tr>
        <tr><td class="m">10</td><td class="m">${f('4000π', '3')}</td><td class="m">4189</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Cube the radius, not the diameter</span>
      A ball of <b>diameter</b> ${m('6')} has ${m('R = 3')} and volume ${m('36π')}, not ${m('288π')}.
      Halving first is the commonest error, and it is a factor of eight.</div>`
    },
    {
      h: 'Where the formula comes from',
      html: `<p><b>By Cavalieri.</b> Compare a hemisphere of radius ${m('R')} with a cylinder of radius
      and height ${m('R')} from which a cone has been removed. At height ${m('y')}:</p>
      ${eq('hemisphere slice ' + m('= π(R² − y²)') + ' ;  cylinder-minus-cone slice ' + m('= πR² − πy²'), true)}
      <p>The slices are equal at every height, so the volumes are equal:</p>
      ${eq(m('V_hemi = πR³ − ' + f('1', '3') + 'πR³ = ' + f('2', '3') + 'πR³') + '  ⇒  ' + m('V_ball = ' + f('4', '3') + 'πR³'), true)}
      <p><b>By integration.</b> Rotating ${m('y = ' + sr('R² − x²'))} about ${m('Ox')} on
      ${m('[−R, R]')} gives ${m('π∫(R² − x²)dx = ' + f('4', '3') + 'πR³')} — the same answer, from
      Quarter III algebra.</p>`
    },
    {
      h: 'Caps, hemispheres and sectors',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Part</th><th>Volume</th></tr></thead>
      <tbody>
        <tr><td>hemisphere</td><td class="m">${f('2', '3')}πR³</td></tr>
        <tr><td>cap of height ${m('h')}</td><td class="m">${f('πh²', '3')}(3R − h)</td></tr>
        <tr><td>spherical sector (cap + cone to the centre)</td><td class="m">${f('2', '3')}πR²h</td></tr>
        <tr><td>layer between two parallel planes</td><td>difference of two caps</td></tr>
      </tbody></table></div>
      {{fig:sphereSection:The cap sits above the cutting plane; its height h is measured from the plane to the top.}}
      <p><b>Check the cap formula.</b> Put ${m('h = R')}: ${m(f('πR²', '3') + '(3R − R) = ' + f('2', '3') + 'πR³')} — the
      hemisphere ✓. Put ${m('h = 2R')}: ${m(f('4πR²', '3') + '(R) = ' + f('4', '3') + 'πR³')} — the whole ball ✓.</p>`
    },
    {
      h: 'Displacement',
      html: `<div class="keybox"><div class="klabel">Archimedes</div>
      A solid fully submerged displaces its own volume of liquid. A floating solid displaces its own
      <b>weight</b> of liquid.</div>
      <p><b>Example.</b> A ball of radius ${m('3')} cm is dropped into a cylinder of radius ${m('5')} cm
      containing water. By how much does the level rise?</p>
      ${eq(m('36π = π(25)Δh   ⇒   Δh = ' + f('36', '25') + ' = 1.44') + ' cm', true)}
      <p>This is how an irregular solid's volume is measured, and it is the practical purpose of the
      formula.</p>`
    }
  ],
  examples: [
    {
      q: 'Find the volume of a ball of diameter ' + m('12') + ' cm.',
      steps: [
        [m('R = 6'), 'Halve the diameter first.'],
        [m('V = ' + f('4', '3') + 'π(216)'), ''],
        [m('= 288π ≈ 905') + ' cm³.', '']
      ],
      ans: m('288π') + ' ≈ ' + m('905') + ' cm³'
    },
    {
      q: 'A cap of height ' + m('4') + ' is cut from a sphere of radius ' + m('10') + '. Find its volume.',
      steps: [
        [m('V = ' + f('π(16)', '3') + '(30 − 4)'), ''],
        [m('= ' + f('16π', '3') + ' × 26'), ''],
        [m('= ' + f('416π', '3') + ' ≈ 436'), '']
      ],
      ans: m(f('416π', '3')) + ' ≈ ' + m('436')
    },
    {
      q: 'A ball of radius ' + m('3') + ' is dropped into a cylinder of radius ' + m('5') + '. Find the rise in the water level.',
      steps: [
        ['Ball volume ' + m('36π') + '.', ''],
        [m('π(25)Δh = 36π'), ''],
        [m('Δh = 1.44') + ' cm.', '']
      ],
      ans: m('1.44') + ' cm'
    }
  ],
  modelNote: 'Drop a ball into a measuring cylinder and read the rise before computing it.',
  interactive: {
    type: 'solidVolume',
    title: 'The sphere against its cylinder',
    hint: 'A sphere is two thirds of the cylinder that just contains it.',
    kind: 'cylinder'
  },
  quiz: [
    { q: 'The volume of a ball is:', a: [m('4πR²'), m(f('4', '3') + 'πR³'), m(f('2', '3') + 'πR³'), m('πR³')], c: 1, why: 'Four thirds pi r cubed.' },
    { q: 'A ball of diameter 6 has volume:', a: [m('36π'), m('288π'), m('72π'), m('108π')], c: 0, why: m('R = 3') + '.' },
    { q: 'A hemisphere of radius ' + m('R') + ':', a: [m(f('4', '3') + 'πR³'), m(f('2', '3') + 'πR³'), m(f('1', '3') + 'πR³'), m('2πR³')], c: 1, why: 'Half the ball.' },
    { q: 'A sphere is what fraction of its enclosing cylinder?', a: [m(f('1', '2')), m(f('2', '3')), m(f('3', '4')), m(f('1', '3'))], c: 1, why: 'Archimedes’ result.' },
    { q: 'A submerged solid displaces:', a: ['its weight', 'its volume', 'half its volume', 'nothing'], c: 1, why: 'When fully submerged.' }
  ],
  practice: {
    easy: [
      ['Volume, ' + m('R = 3'), m('36π')],
      ['Volume, ' + m('R = 6'), m('288π')],
      ['Volume, ' + m('R = 1'), m(f('4π', '3'))],
      ['Volume of a ball of diameter 10', m(f('500π', '3'))],
      ['Hemisphere, ' + m('R = 3'), m('18π')],
      ['A ball is what fraction of its cylinder?', m(f('2', '3'))],
      ['Volume, ' + m('R = 10'), m(f('4000π', '3'))]
    ],
    med: [
      ['Ball of diameter 12: its volume', m('288π')],
      ['Cap of height 4 in a sphere of radius 10', m(f('416π', '3'))],
      ['Ball ' + m('R = 3') + ' in a cylinder ' + m('r = 5') + ': the rise', m('1.44') + ' cm'],
      ['A ball of volume ' + m('972π') + ': its radius', m('9')],
      ['A hemisphere of radius 6: volume and curved area', m('144π') + ', ' + m('72π')],
      ['A cap of height 2 in a sphere of radius 5', m(f('52π', '3'))],
      ['Two balls of radii 3 and 6: the volume ratio', m('1 : 8')]
    ],
    hard: [
      ['A sphere of radius 10 cut by planes at ' + m('4') + ' and ' + m('7') + ' from the centre: the layer volume', m('≈ 314')],
      ['A ball just fits in a cube of edge 12: the unused volume', m('1728 − 288π ≈ 823')],
      ['Derive ' + m('V = ' + f('4', '3') + 'πR³') + ' by integration', m('π∫(R² − x²)dx') + ' over ' + m('[−R, R]')],
      ['A spherical cap of volume ' + m(f('16π', '3')) + ' in a sphere of radius 4: its height', m('2')],
      ['A ball of radius ' + m('r') + ' floats with half submerged. Its density relative to water', m('0.5')],
      ['A hemisphere of radius 6 filled with water is poured into a cone ' + m('r = 6') + '. The depth', m('12')],
      ['Three balls of radius 2 in a cylinder ' + m('r = 2, h = 12') + ': the empty fraction', m(f('1', '3'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Halve the diameter before cubing, every time.',
  homework: [
    'Find the volume of a ball of radius ' + m('7') + ' cm and of one of diameter ' + m('9') + ' cm.',
    'A cap of height ' + m('3') + ' is cut from a sphere of radius ' + m('12') + '. Find its volume.',
    'A ball of radius ' + m('4') + ' is dropped into a cylinder of radius ' + m('6') + '. Find the rise in the level.',
    'A ball has volume ' + m(f('2048π', '3')) + '. Find its radius and its surface area.',
    'Explain in three sentences why a sphere is exactly two thirds of its enclosing cylinder.'
  ]
});

/* ============================== 29 ============================== */
G11_GEO.push({
  id: 'g11-29', stream: 'geo', grade: 11, quarter: 3, lessons: '47', hours: 1,
  title: 'The surface area of a sphere',
  subtitle: 'Four times the area of a great circle — the second half of Archimedes’ result.',
  uz: 'Geometry 11, §21', uzPage: 'pp. 235–240',
  cam: 'IGCSE E13.x', camPage: 'Core & Extended, pp. 361–364', wb: 'Exercise 21.1',
  objectives: [
    'State and use S = 4πR².',
    'Relate the sphere’s area to that of its enclosing cylinder.',
    'Compute the curved area of a hemisphere and of a cap.',
    'Solve problems combining area and volume.'
  ],
  terms: [
    ['Surface area of a sphere', 'Sfera sirti', 'Площадь сферы'],
    ['Great circle', 'Katta aylana', 'Большая окружность'],
    ['Hemisphere', 'Yarim shar', 'Полушар'],
    ['Curved surface', 'Yon sirt', 'Боковая поверхность'],
    ['Zone (spherical belt)', 'Sharsimon belbog‘', 'Шаровой пояс'],
    ['Archimedes’ theorem', 'Arximed teoremasi', 'Теорема Архимеда'],
    ['Enclosing cylinder', 'Tashqi silindr', 'Описанный цилиндр'],
    ['Cap', 'Segment', 'Сегмент']
  ],
  timing: [[10, 'The formula'], [12, 'Archimedes’ theorem'], [12, 'Hemispheres and caps'], [8, 'Combined problems'], [3, 'Homework']],
  sections: [
    {
      h: 'The formula',
      html: `${eq(m('S = 4πR²'), true)}
      <p>Four times the area of a great circle. A useful mental check: unroll a sphere and it covers
      exactly four of its own silhouettes.</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">R</th><th class="m">S</th><th class="m">V</th></tr></thead>
      <tbody>
        <tr><td class="m">1</td><td class="m">4π</td><td class="m">${f('4π', '3')}</td></tr>
        <tr><td class="m">3</td><td class="m">36π</td><td class="m">36π</td></tr>
        <tr><td class="m">6</td><td class="m">144π</td><td class="m">288π</td></tr>
      </tbody></table></div>
      <p>At ${m('R = 3')} the two numbers coincide — a coincidence of units, not a theorem. It happens
      because ${m('4πR² = ' + f('4', '3') + 'πR³')} exactly when ${m('R = 3')}.</p>`
    },
    {
      h: 'Archimedes’ theorem',
      html: `<div class="keybox"><div class="klabel">The sphere and its cylinder</div>
      For a sphere inscribed in a cylinder of radius ${m('R')} and height ${m('2R')}:
      ${eq('sphere : cylinder ' + m('= 2 : 3') + '   for <b>both</b> volume and total surface area', true)}</div>
      <p>Volumes: ${m(f('4', '3') + 'πR³')} against ${m('2πR³')}. Areas: ${m('4πR²')} against
      ${m('2πR² + 4πR² = 6πR²')}. Both give ${m(f('2', '3'))}.</p>
      <p>More sharply still: the sphere's surface area equals the cylinder's <b>curved</b> area exactly.
      Any horizontal band of the sphere has the same area as the corresponding band of the cylinder —
      the projection stretches horizontally exactly as much as it squashes vertically. That is the
      theorem Archimedes asked to have carved on his tomb.</p>`
    },
    {
      h: 'Hemispheres and caps',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Part</th><th>Curved area</th><th>Total area</th></tr></thead>
      <tbody>
        <tr><td>sphere</td><td class="m">4πR²</td><td class="m">4πR²</td></tr>
        <tr><td>hemisphere</td><td class="m">2πR²</td><td class="m">3πR²</td></tr>
        <tr><td>cap of height ${m('h')}</td><td class="m">2πRh</td><td class="m">2πRh + πρ²</td></tr>
        <tr><td>zone between two planes ${m('h')} apart</td><td class="m">2πRh</td><td>—</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A solid hemisphere has a flat face</span>
      Its <b>curved</b> area is ${m('2πR²')}, but a solid hemisphere also has the flat circle
      ${m('πR²')}, giving ${m('3πR²')}. Read whether the object is a bowl or a solid dome.</div>
      <p><b>The zone result is remarkable.</b> The area of a band depends only on its height ${m('h')},
      not on where it sits. A band near the equator and one near the pole, of equal height, have equal
      area.</p>`
    },
    {
      h: 'Combined problems',
      html: `<p>Given one of ${m('S')} or ${m('V')}, the other follows through ${m('R')}:</p>
      ${eq(m('R = ' + sr(f('S', '4π'))) + '     ' + m('R = ∛' + f('3V', '4π')), true)}
      <p><b>Example.</b> A ball has surface area ${m('100π')}. Then ${m('R = 5')} and
      ${m('V = ' + f('500π', '3') + ' ≈ 524')}.</p>
      <p><b>Useful relation.</b> ${m(f('V', 'S') + ' = ' + f('R', '3'))} for every sphere — so a bigger
      ball has proportionally less surface per unit volume, which is the ${m(f('1', 'k'))} rule of
      Lesson 40 again.</p>`
    }
  ],
  examples: [
    {
      q: 'Find the surface area of a ball of radius ' + m('7') + ' cm.',
      steps: [
        [m('S = 4π(49)'), ''],
        [m('= 196π'), ''],
        [m('≈ 616') + ' cm².', '']
      ],
      ans: m('196π') + ' ≈ ' + m('616') + ' cm²'
    },
    {
      q: 'A ball has surface area ' + m('144π') + '. Find its radius and volume.',
      steps: [
        [m('4πR² = 144π ⇒ R² = 36'), ''],
        [m('R = 6'), ''],
        [m('V = ' + f('4', '3') + 'π(216) = 288π ≈ 905'), '']
      ],
      ans: m('R = 6') + ', ' + m('V = 288π')
    },
    {
      q: 'A solid hemisphere has radius ' + m('5') + '. Find its total surface area.',
      steps: [
        ['Curved ' + m('2π(25) = 50π') + '.', ''],
        ['Flat face ' + m('π(25) = 25π') + '.', ''],
        [m('75π ≈ 236') + '.', '']
      ],
      ans: m('75π') + ' ≈ ' + m('236')
    }
  ],
  modelNote: 'Wrap string round a ball and compare with four traced great circles.',
  interactive: {
    type: 'solidVolume',
    title: 'Area against volume',
    hint: 'Watch the two grow at different rates.',
    kind: 'cylinder'
  },
  quiz: [
    { q: 'The surface area of a sphere is:', a: [m('πR²'), m('2πR²'), m('4πR²'), m(f('4', '3') + 'πR³')], c: 2, why: 'Four great circles.' },
    { q: 'A hemisphere’s curved area:', a: [m('πR²'), m('2πR²'), m('3πR²'), m('4πR²')], c: 1, why: 'Half the sphere.' },
    { q: 'A solid hemisphere’s total area:', a: [m('2πR²'), m('3πR²'), m('4πR²'), m('πR²')], c: 1, why: 'Plus the flat face.' },
    { q: 'A cap of height ' + m('h') + ' has curved area:', a: [m('πRh'), m('2πRh'), m('4πRh'), m('πh²')], c: 1, why: 'It depends only on ' + m('h') + '.' },
    { q: 'Sphere : cylinder for area is:', a: [m('1 : 2'), m('2 : 3'), m('1 : 3'), m('3 : 4')], c: 1, why: 'Archimedes.' }
  ],
  practice: {
    easy: [
      ['Area, ' + m('R = 3'), m('36π')],
      ['Area, ' + m('R = 5'), m('100π')],
      ['Area, ' + m('R = 7'), m('196π')],
      ['Area of a ball of diameter 10', m('100π')],
      ['Hemisphere curved area, ' + m('R = 4'), m('32π')],
      ['Solid hemisphere total area, ' + m('R = 4'), m('48π')],
      ['Cap curved area, ' + m('R = 10, h = 3'), m('60π')]
    ],
    med: [
      ['Area ' + m('144π') + ': the radius and volume', m('6') + ', ' + m('288π')],
      ['Solid hemisphere ' + m('R = 5') + ': total area', m('75π')],
      ['A ball of volume ' + m('972π') + ': its surface area', m('324π')],
      ['A zone of height 4 on a sphere of radius 9', m('72π')],
      ['Sphere : cylinder area ratio', m('2 : 3')],
      [m(f('V', 'S')) + ' for a sphere of radius 12', m('4')],
      ['Two balls of radii 2 and 6: the area ratio', m('1 : 9')]
    ],
    hard: [
      ['A ball of area ' + m('S') + ': its volume in terms of ' + m('S'), m(f('S', '3') + sr(f('S', '4π')))],
      ['A hemispherical bowl of inner radius 9 and outer 10: the material volume', m(f('2π', '3') + '(1000 − 729)') + ' ≈ ' + m('568')],
      ['A sphere and a cube have equal surface areas. Which has the greater volume?', 'The sphere'],
      ['A cap of curved area ' + m('60π') + ' on a sphere of radius 10: its height', m('3')],
      ['Prove the zone area depends only on ' + m('h'), 'Archimedes’ projection is area-preserving'],
      ['A ball is painted at 2 so‘m per cm². Cost for ' + m('R = 20'), m('3200π') + ' ≈ ' + m('10 050') + ' so‘m'],
      ['A sphere of radius ' + m('R') + ' inside a cube of edge ' + m('2R') + ': the area ratio', m('π : 6')]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Say whether the object is hollow or solid before choosing the formula.',
  homework: [
    'Find the surface area of a ball of radius ' + m('11') + ' cm and of one of diameter ' + m('14') + ' cm.',
    'A ball has surface area ' + m('324π') + ' cm². Find its radius and volume.',
    'Find the total surface area of a solid hemisphere of radius ' + m('8') + ' cm.',
    'State Archimedes’ theorem and verify both ratios for ' + m('R = 5') + '.'
  ]
});

/* ============================== 30 ============================== */
G11_GEO.push({
  id: 'g11-30', stream: 'geo', grade: 11, quarter: 3, lessons: '48–50', hours: 3,
  title: 'Compound solids and real measurement [Cambridge insert]',
  subtitle: 'Cut a real object into named solids, add or subtract, and carry the bounds through.',
  uz: 'Geometry 11, amaliy mashg‘ulot', uzPage: 'pp. 241–248',
  cam: 'IGCSE E13.x compound solids · E13.3 bounds', camPage: 'Core & Extended, pp. 365–374', wb: 'Exercise 13.5',
  objectives: [
    'Decompose a real object into prisms, cylinders, cones, pyramids and spheres.',
    'Add and subtract volumes, and decide which faces survive into the surface area.',
    'Carry upper and lower bounds through a compound calculation.',
    'Report a measured answer to a sensible degree of accuracy.'
  ],
  terms: [
    ['Compound solid', 'Murakkab jism', 'Составное тело'],
    ['Decomposition', 'Qismlarga ajratish', 'Разбиение'],
    ['Hollowed solid', 'Bo‘shliqli jism', 'Полое тело'],
    ['Capacity', 'Sig‘im', 'Вместимость'],
    ['Density', 'Zichlik', 'Плотность'],
    ['Upper bound', 'Yuqori chegara', 'Верхняя граница'],
    ['Lower bound', 'Quyi chegara', 'Нижняя граница'],
    ['Degree of accuracy', 'Aniqlik darajasi', 'Степень точности'],
    ['Wetted surface', 'Ho‘llanadigan sirt', 'Смачиваемая поверхность'],
    ['Silo', 'Silos minorasi', 'Силосная башня']
  ],
  timing: [[12, 'Reading an object as solids'], [25, 'Adding and subtracting volume'], [25, 'Which faces survive'], [30, 'Bounds through a compound'], [30, 'Measuring the classroom'], [13, 'Homework']],
  sections: [
    {
      h: 'Reading an object as solids',
      html: `<p>Nothing new is needed for the next three lessons — only the seven formulas already proved.
      The whole skill is <b>reading</b>: seeing a grain silo as a cylinder with a hemisphere on top, a
      pencil as a cylinder with a cone, a water tower as a sphere on a thin cylinder.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Object</th><th>Read as</th><th>Volume</th></tr></thead>
      <tbody>
        <tr><td>grain silo</td><td>cylinder + hemisphere</td><td class="m">πr²h + ${f('2', '3')}πr³</td></tr>
        <tr><td>pencil</td><td>cylinder + cone</td><td class="m">πr²h + ${f('1', '3')}πr²k</td></tr>
        <tr><td>ice-cream</td><td>cone + hemisphere</td><td class="m">${f('1', '3')}πr²h + ${f('2', '3')}πr³</td></tr>
        <tr><td>a bead</td><td>sphere − cylinder</td><td class="m">${f('4', '3')}πR³ − πr²·2R</td></tr>
        <tr><td>a pipe</td><td>cylinder − cylinder</td><td class="m">π(R² − r²)L</td></tr>
        <tr><td>a mosque dome</td><td>hemisphere − hemisphere</td><td class="m">${f('2', '3')}π(R³ − r³)</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The one rule for the cut</div>
      Cut along a plane where two named solids meet, and the cut face is always a <b>circle</b> or a
      <b>polygon</b> shared by both. If your cut leaves a face that is neither, you have cut in the
      wrong place.</div>
      {{fig:sphereSection:A plane cut through a solid of revolution leaves a circle — the shared face of the two parts.}}`
    },
    {
      h: 'Adding and subtracting volume',
      html: `<p>Volume is easy: add the parts, or subtract the hollow. Nothing is shared, nothing is
      double-counted, because two solids that meet along a plane have no common interior.</p>
      ${eq(m('V_compound = V₁ + V₂ + … ')  + '   or   ' + m('V_solid − V_hole'), true)}
      <p><b>Worked case — the silo.</b> Cylinder ${m('r = 4')} m, ${m('h = 12')} m, with a hemispherical
      cap of the same radius:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Part</th><th>Formula</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td>cylinder</td><td class="m">πr²h</td><td class="m">192π</td></tr>
        <tr><td>hemisphere</td><td class="m">${f('2', '3')}πr³</td><td class="m">${f('128π', '3')}</td></tr>
        <tr><td><b>total</b></td><td>—</td><td class="m">${f('704π', '3')} ≈ 737 m³</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Keep π to the last line</span>
      ${m('192π + ' + f('128π', '3'))} is exact; ${m('603.2 + 134.0')} is not. Round once, at the end, and
      never feed a rounded number into the next part.</div>`
    },
    {
      h: 'Which faces survive',
      html: `<p>Surface area is where the marks go. When two solids are joined, the two faces that meet
      <b>disappear</b> — they are now inside. The surface area of the compound is <i>not</i> the sum of
      the two surface areas.</p>
      ${eq(m('S_compound = S₁ + S₂ − 2 × (shared face)'), true)}
      <p><b>The silo again.</b> The cylinder's top circle and the hemisphere's flat face are the same
      circle, and both are now internal:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Face</th><th>Area</th><th>Counts?</th></tr></thead>
      <tbody>
        <tr><td>cylinder base</td><td class="m">π(16) = 16π</td><td>yes — it stands on the ground</td></tr>
        <tr><td>cylinder curved</td><td class="m">2π(4)(12) = 96π</td><td>yes</td></tr>
        <tr><td>cylinder top</td><td class="m">16π</td><td><b>no</b> — covered</td></tr>
        <tr><td>hemisphere flat</td><td class="m">16π</td><td><b>no</b> — covered</td></tr>
        <tr><td>hemisphere curved</td><td class="m">2π(16) = 32π</td><td>yes</td></tr>
      </tbody></table></div>
      <p>So ${m('S = 16π + 96π + 32π = 144π ≈ 452')} m². If the silo is painted only on the outside above
      the ground, drop the base too: ${m('128π ≈ 402')} m².</p>
      <div class="keybox"><div class="klabel">Three questions before writing a number</div>
      <ul>
        <li>Is the object <b>solid or hollow</b>? A bowl has an inside surface as well.</li>
        <li>Does it <b>stand on</b> something? Then its base may not be painted, wetted or covered.</li>
        <li>Which faces are <b>joined</b>? Those never count.</li>
      </ul></div>`
    },
    {
      h: 'Bounds through a compound',
      html: `<p>Every measurement is a range. A silo measured as ${m('r = 4')} m and ${m('h = 12')} m
      <i>to the nearest metre</i> means ${m('3.5 ≤ r < 4.5')} and ${m('11.5 ≤ h < 12.5')}.</p>
      <p>Volume grows with both, so the extremes pair up directly:</p>
      <div class="tablewrap"><table>
      <thead><tr><th></th><th class="m">r</th><th class="m">h</th><th class="m">V</th></tr></thead>
      <tbody>
        <tr><td>lower</td><td class="m">3.5</td><td class="m">11.5</td><td class="m">≈ 532 m³</td></tr>
        <tr><td>stated</td><td class="m">4</td><td class="m">12</td><td class="m">≈ 737 m³</td></tr>
        <tr><td>upper</td><td class="m">4.5</td><td class="m">12.5</td><td class="m">≈ 986 m³</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A subtraction reverses one bound</span>
      For a pipe, ${m('V = π(R² − r²)L')}. The <b>largest</b> metal volume needs the largest ${m('R')}
      and the <b>smallest</b> ${m('r')}. Whenever a quantity is subtracted, swap its two bounds.</div>
      <p><b>Reporting.</b> The silo's volume lies between ${m('532')} and ${m('986')} m³ — the two bounds
      do not agree even to one significant figure, so ${m('700')} m³ is the honest answer, not
      ${m('737.4')}. Report to the accuracy the bounds support.</p>
      {{fig:errorBounds:One measurement, one interval — and every compound inherits all of them.}}`
    },
    {
      h: 'Measuring the classroom',
      html: `<p>Lesson 50 is practical. In pairs, choose one object in the school, measure it, and produce
      a single A4 sheet:</p>
      <ol>
        <li>a sketch, decomposed into named solids, with every measurement marked;</li>
        <li>the instrument used and its precision (“tape, nearest 0.5 cm”);</li>
        <li>the volume, exact then rounded;</li>
        <li>the surface area, saying which faces you excluded and why;</li>
        <li>upper and lower bounds, and the accuracy you can honestly claim.</li>
      </ol>
      <div class="tablewrap"><table>
      <thead><tr><th>Object</th><th>Decomposition</th><th>Watch for</th></tr></thead>
      <tbody>
        <tr><td>a waste bin</td><td>frustum of a cone</td><td>open top — no lid area</td></tr>
        <tr><td>a football</td><td>sphere</td><td>measure the circumference, not the radius</td></tr>
        <tr><td>a chalk stick</td><td>cylinder, or a frustum</td><td>the taper is real</td></tr>
        <tr><td>the door frame</td><td>three cuboids</td><td>the corners are shared</td></tr>
        <tr><td>a water bottle</td><td>cylinder + frustum + cylinder</td><td>capacity ≠ outer volume</td></tr>
        <tr><td>a lamp shade</td><td>frustum, curved surface only</td><td>two circles missing</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Capacity is not volume</div>
      A bottle's <b>capacity</b> uses inner dimensions; its <b>volume</b> as a solid object uses outer
      ones. The difference is the glass, and in an exam the word chosen tells you which one is wanted.</div>`
    }
  ],
  examples: [
    {
      q: 'An ice-cream is a cone of radius ' + m('3') + ' cm and height ' + m('10') + ' cm topped by a hemisphere of the same radius. Find its volume.',
      steps: [
        ['Cone ' + m(f('1', '3') + 'π(9)(10) = 30π') + '.', ''],
        ['Hemisphere ' + m(f('2', '3') + 'π(27) = 18π') + '.', ''],
        [m('V = 48π'), 'Add — nothing overlaps.'],
        [m('≈ 151') + ' cm³.', '']
      ],
      ans: m('48π') + ' ≈ ' + m('151') + ' cm³'
    },
    {
      q: 'Find the surface area of the same ice-cream (the cone is open at the top, under the hemisphere).',
      steps: [
        ['Slant ' + m('l = ' + sr('9 + 100') + ' = ' + sr('109') + ' ≈ 10.44') + '.', ''],
        ['Cone curved ' + m('πrl = 3π' + sr('109') + ' ≈ 98.4') + '.', 'No base circle — it is joined.'],
        ['Hemisphere curved ' + m('2π(9) = 18π ≈ 56.5') + '.', 'Its flat face is joined too.'],
        [m('S ≈ 155') + ' cm².', '']
      ],
      ans: m('≈ 155') + ' cm²'
    },
    {
      q: 'A wooden bead is a sphere of radius ' + m('5') + ' mm drilled through the centre by a hole of radius ' + m('2') + ' mm. Find the volume of wood.',
      steps: [
        ['Sphere ' + m(f('4', '3') + 'π(125) = ' + f('500π', '3')) + '.', ''],
        ['The hole is a cylinder of length ' + m('10') + ' mm: ' + m('π(4)(10) = 40π') + '.', 'An approximation — the true hole has spherical ends.'],
        [m('V ≈ ' + f('500π', '3') + ' − 40π = ' + f('380π', '3')), ''],
        [m('≈ 398') + ' mm³.', '']
      ],
      ans: m(f('380π', '3')) + ' ≈ ' + m('398') + ' mm³'
    },
    {
      q: 'A cylindrical tank has radius ' + m('2.0') + ' m and height ' + m('5.0') + ' m, both to the nearest ' + m('0.1') + ' m. Find the bounds of its capacity in litres.',
      steps: [
        [m('1.95 ≤ r < 2.05') + ', ' + m('4.95 ≤ h < 5.05') + '.', ''],
        [m('V_min = π(1.95²)(4.95) ≈ 59.13') + ' m³.', ''],
        [m('V_max = π(2.05²)(5.05) ≈ 66.68') + ' m³.', ''],
        ['Between ' + m('59 100') + ' and ' + m('66 700') + ' litres.', 'So “about ' + m('60 000') + ' litres”.']
      ],
      ans: m('≈ 59 100') + ' to ' + m('66 700') + ' litres'
    }
  ],
  modelNote: 'Bring a real bottle, a real ball and a tape measure. Measure in front of the class, then argue about the last digit.',
  interactive: {
    type: 'solidVolume',
    title: 'A cylinder, and what a cap adds',
    hint: 'Change the height and watch how much of the total the curved surface carries.',
    kind: 'cylinder'
  },
  quiz: [
    { q: 'When two solids are joined, the shared face:', a: ['counts twice', 'counts once', 'does not count at all', 'is halved'], c: 2, why: 'It is now interior.' },
    { q: 'Volumes of joined solids are:', a: ['added', 'multiplied', 'averaged', 'subtracted'], c: 0, why: 'They share no interior.' },
    { q: 'For the largest metal volume in a pipe take:', a: ['both bounds large', 'largest ' + m('R') + ', smallest ' + m('r'), 'both small', 'the stated values'], c: 1, why: 'A subtracted quantity flips.' },
    { q: 'A silo is a cylinder plus:', a: ['a cone', 'a hemisphere', 'a prism', 'a frustum'], c: 1, why: 'The usual reading.' },
    { q: 'Capacity uses:', a: ['outer dimensions', 'inner dimensions', 'either', 'the mean'], c: 1, why: 'It is what fits inside.' },
    { q: 'Rounding should happen:', a: ['at each step', 'only at the end', 'never', 'twice'], c: 1, why: 'Errors compound.' }
  ],
  practice: {
    easy: [
      ['Cylinder ' + m('r = 2, h = 5') + ' plus hemisphere ' + m('r = 2') + ': volume', m('20π + ' + f('16π', '3')) + ' ≈ ' + m('79.6')],
      ['Cone ' + m('r = 3, h = 4') + ' plus hemisphere ' + m('r = 3') + ': volume', m('12π + 18π = 30π')],
      ['Pipe ' + m('R = 5, r = 3, L = 20') + ': metal volume', m('320π')],
      ['Cube edge 6 with a cylindrical hole ' + m('r = 1') + ' through it: volume', m('216 − 6π') + ' ≈ ' + m('197')],
      ['Cylinder ' + m('r = 3, h = 10') + ' with a cone cap ' + m('h = 4') + ': volume', m('90π + 12π = 102π')],
      ['Bounds of ' + m('8.0') + ' cm to the nearest ' + m('0.1') + ' cm', m('7.95') + ' and ' + m('8.05')],
      ['Surface area of a solid hemisphere on a cylinder base ' + m('r = 2, h = 3') + ' (closed bottom)', m('4π + 12π + 8π = 24π')]
    ],
    med: [
      ['Silo: cylinder ' + m('r = 4, h = 12') + ' plus hemisphere. Volume', m(f('704π', '3')) + ' ≈ ' + m('737') + ' m³'],
      ['Same silo: painted outside, base excluded', m('128π') + ' ≈ ' + m('402') + ' m²'],
      ['Ice-cream: cone ' + m('r = 3, h = 10') + ' plus hemisphere. Surface area', m('≈ 155') + ' cm²'],
      ['A bead: sphere ' + m('R = 5') + ' drilled by ' + m('r = 2') + ' (straight hole). Wood volume', m(f('380π', '3')) + ' ≈ ' + m('398')],
      ['Tank ' + m('r = 2.0, h = 5.0') + ' m to ' + m('0.1') + ' m: capacity bounds in litres', m('≈ 59 100') + ' to ' + m('66 700')],
      ['A dome: hemisphere ' + m('R = 6') + ' hollowed to ' + m('r = 5') + '. Material volume', m(f('2π', '3') + '(216 − 125)') + ' ≈ ' + m('191')],
      ['A pencil: cylinder ' + m('r = 0.4, h = 15') + ' plus cone ' + m('h = 2') + ' cm. Volume', m('2.4π + 0.107π') + ' ≈ ' + m('7.87') + ' cm³']
    ],
    hard: [
      ['A silo of the same shape must hold ' + m('1000') + ' m³ with ' + m('r = 4') + '. Find ' + m('h'), m('h ≈ 17.2') + ' m'],
      ['Pipe ' + m('R = 9, r = 7') + ' cm, ' + m('L = 200') + ' cm, all to the nearest cm: bounds of the metal volume', m('≈ 18 200') + ' to ' + m('≈ 22 200') + ' cm³'],
      ['A cone of radius ' + m('r') + ' is capped by a hemisphere of radius ' + m('r') + '. For what ' + m('h') + ' are the two volumes equal?', m('h = 2r')],
      ['An open lamp shade is a frustum, radii ' + m('10') + ' and ' + m('20') + ', slant ' + m('26') + '. Find the material area', m('780π') + ' ≈ ' + m('2450') + ' cm²'],
      ['A bottle: cylinder ' + m('r = 3, h = 12') + ', frustum ' + m('3 → 1.5, h = 4') + ', neck ' + m('r = 1.5, h = 3') + '. Capacity in ml', m('≈ 421') + ' ml'],
      ['A hemispherical bowl of inner radius ' + m('9') + ' cm is filled to a depth of ' + m('4') + ' cm. Find the volume of water', m(f('π', '3') + '(4²)(27 − 4)') + ' ≈ ' + m('385') + ' cm³'],
      ['A solid is a cube of edge ' + m('2R') + ' with the inscribed sphere removed. Find the fraction of the cube remaining', m('1 − ' + f('π', '6')) + ' ≈ ' + m('0.476')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Task 5 is the measured object; bring the A4 sheet and the object itself if you can.',
  homework: [
    'A grain silo is a cylinder of radius ' + m('3') + ' m and height ' + m('10') + ' m with a hemispherical top. Find its volume and its outside surface area, excluding the base.',
    'A pipe has outer radius ' + m('8') + ' cm, inner radius ' + m('6') + ' cm and length ' + m('1.5') + ' m. Find the volume of metal and its mass at ' + m('7.8') + ' g/cm³.',
    'A tank measures ' + m('r = 1.5') + ' m and ' + m('h = 4.0') + ' m, each to the nearest ' + m('0.1') + ' m. Find the bounds of its capacity in litres, and state the answer to a sensible accuracy.',
    'An ice-cream cone of radius ' + m('3.5') + ' cm and height ' + m('12') + ' cm carries a hemisphere of the same radius. Find the total volume, and explain which two faces you did not include in the surface area.',
    'Measure one object in your home. Produce the A4 sheet: sketch, decomposition, instrument and precision, volume, surface area, bounds.'
  ]
});

/* ============================== 31 ============================== */
G11_GEO.push({
  id: 'g11-31', stream: 'geo', grade: 11, quarter: 3, lessons: '51–52', hours: 2,
  title: 'Control work 3, and work on the mistakes',
  subtitle: 'Pyramids, cones and spheres in one paper, then the quarter drawn as a single map.',
  uz: 'Geometry 11, Nazorat ishi 3', uzPage: 'pp. 249–252',
  cam: 'IGCSE E13 review', camPage: 'Core & Extended, pp. 375–378', wb: 'Control paper G3',
  objectives: [
    'Apply the formulas of Quarter III in one assessment.',
    'Choose correctly between slant height, height and lateral edge.',
    'Classify each lost mark and rewrite the solution in full.',
    'Draw the quarter as one map, from the pyramid to the sphere.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Slant height', 'Apofema', 'Апофема'],
    ['Lateral edge', 'Yon qirra', 'Боковое ребро'],
    ['Frustum', 'Kesik jism', 'Усечённое тело'],
    ['Sphere', 'Sfera', 'Сфера'],
    ['Similar solids', 'O‘xshash jismlar', 'Подобные тела'],
    ['Concept map', 'Tushunchalar xaritasi', 'Карта понятий'],
    ['Target', 'Maqsad', 'Цель']
  ],
  timing: [[3, 'Instructions'], [42, 'The paper'], [12, 'Answers'], [20, 'Rewrite'], [10, 'The map'], [3, 'Targets']],
  sections: [
    {
      h: 'The paper — 35 marks, 42 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Regular square pyramid, base edge ${m('10')}, height ${m('12')}: apothem, lateral area, total area</td><td class="m">6</td><td>L33–34</td></tr>
        <tr><td>2</td><td>The same pyramid: its volume, and the angle its lateral edge makes with the base</td><td class="m">6</td><td>L33–34, L43–44</td></tr>
        <tr><td>3</td><td>A cone of radius ${m('5')} and slant ${m('13')}: height, curved area, volume, and the sector angle of its net</td><td class="m">7</td><td>L36–38</td></tr>
        <tr><td>4</td><td>A frustum of a cone, radii ${m('6')} and ${m('3')}, height ${m('4')}: volume and curved area</td><td class="m">6</td><td>L39</td></tr>
        <tr><td>5</td><td>A ball of surface area ${m('144π')}: its radius and volume; then the volume of a cap of height ${m('2')}</td><td class="m">5</td><td>L41–42, L45–47</td></tr>
        <tr><td>6</td><td>Two similar cones have volumes ${m('27')} and ${m('125')}: the ratios of heights and of surface areas</td><td class="m">5</td><td>L40</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks are actually lost</div>
      Q1 and Q3 each carry a mark for using the <b>slant height</b> in an area and the <b>vertical
      height</b> in a volume. Q4 carries one for not treating the frustum as a prism. Q5 carries one for
      reading “surface area” rather than “volume”. Four of the thirty-five marks are for reading.</div>`
    },
    {
      h: 'Mark by mark',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>slant for height</td><td class="m">V = ${f('1', '3')}Bl</td><td>volume always uses ${m('h')}, the perpendicular</td></tr>
        <tr><td>height for slant</td><td class="m">S = ${f('1', '2')}Ph</td><td>area always uses ${m('m')}, the apothem</td></tr>
        <tr><td>frustum by subtraction only</td><td>finding the whole cone first, then failing</td><td>use ${m(f('πh', '3') + '(R² + Rr + r²)')} directly</td></tr>
        <tr><td>the missing ${m(f('1', '3'))}</td><td class="m">V = Bh</td><td>pyramids and cones are a third of the prism</td></tr>
        <tr><td>sphere formulas swapped</td><td class="m">S = ${f('4', '3')}πR³</td><td>area has ${m('R²')}, volume has ${m('R³')}</td></tr>
        <tr><td>ratios not cubed</td><td class="m">V₁ : V₂ = k</td><td class="m">k, k², k³</td></tr>
      </tbody></table></div>
      <p>For every mark lost, write the slip's name in the margin and then rewrite the whole question —
      not the line that went wrong. A rewritten line is forgotten by Friday; a rewritten solution is not.</p>`
    },
    {
      h: 'The quarter as one map',
      html: `<p>Six boxes and the links as sentences:</p>
      <ul>
        <li><b>prism</b> → <b>pyramid</b> — “a third of it, on the same base and height”</li>
        <li><b>cylinder</b> → <b>cone</b> — “the same third, with ${m('B = πr²')}”</li>
        <li><b>cone</b> → <b>frustum</b> — “cut off the top, or use ${m('R² + Rr + r²')}”</li>
        <li><b>net</b> → <b>curved area</b> — “the cone unrolls into a sector, ${m('S = πrl')}”</li>
        <li><b>sphere</b> → <b>its cylinder</b> — “${m('2 : 3')} for both volume and area”</li>
        <li><b>scale ${m('k')}</b> → <b>${m('k, k², k³')}</b> — “length, area, volume”</li>
      </ul>
      {{fig:pyramidParts:The three lengths of the first lesson — still the whole of Q1 and Q2.}}
      <div class="keybox"><div class="klabel">Seven formulas, one page</div>
      ${eq(m('V_pyr = ' + f('1', '3') + 'Bh') + '   ' + m('S_lat = ' + f('1', '2') + 'Pm') + '   ' + m('V_cone = ' + f('1', '3') + 'πr²h') + '   ' + m('S_cone = πrl'), true)}
      ${eq(m('V_frus = ' + f('πh', '3') + '(R² + Rr + r²)') + '   ' + m('V_sph = ' + f('4', '3') + 'πR³') + '   ' + m('S_sph = 4πR²'), true)}
      If these seven sit on one page in your own handwriting, Quarter IV needs nothing new.</div>`
    },
    {
      h: 'Looking forward',
      html: `<p>Quarter IV adds no new solid. It is application: containers, costs, optimisation and the
      entrance paper, where a question rarely says which formula it wants. The reading skill of Lesson
      48–50 becomes the whole of the work.</p>
      <div class="keybox"><div class="klabel">One habit to carry forward</div>
      Before any arithmetic, write down the object, its decomposition and the letter of every length you
      know. Almost every mark lost this quarter was lost before the first calculation.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q1: a regular square pyramid, base edge ' + m('10') + ', height ' + m('12') + '.',
      steps: [
        ['Apothem of the base ' + m('5') + '; so ' + m('m = ' + sr('144 + 25') + ' = 13') + '.', 'The first right triangle.'],
        [m('S_lat = ' + f('1', '2') + '(40)(13) = 260') + '.', 'Perimeter times apothem, halved.'],
        [m('B = 100') + '.', ''],
        [m('S_total = 360') + '.', '']
      ],
      ans: m('m = 13') + ', ' + m('S_lat = 260') + ', ' + m('S_total = 360')
    },
    {
      q: 'Model answer, Q3: a cone of radius ' + m('5') + ' and slant ' + m('13') + '.',
      steps: [
        [m('h = ' + sr('169 − 25') + ' = 12') + '.', ''],
        [m('S_curved = π(5)(13) = 65π') + '.', 'Slant, not height.'],
        [m('V = ' + f('1', '3') + 'π(25)(12) = 100π') + '.', 'Height, not slant.'],
        ['Sector angle ' + m('θ = 360° × ' + f('5', '13') + ' ≈ 138.5°') + '.', m('θ = 360°' + f('r', 'l')) + '.']
      ],
      ans: m('h = 12') + ', ' + m('65π') + ', ' + m('100π') + ', ' + m('≈ 138.5°')
    },
    {
      q: 'Model answer, Q4: a frustum, radii ' + m('6') + ' and ' + m('3') + ', height ' + m('4') + '.',
      steps: [
        [m('V = ' + f('π(4)', '3') + '(36 + 18 + 9) = 84π') + '.', 'Use the formula directly.'],
        ['Slant ' + m('l = ' + sr('16 + 9') + ' = 5') + '.', 'From the difference of radii.'],
        [m('S_curved = π(6 + 3)(5) = 45π') + '.', ''],
        [m('V ≈ 264') + ', ' + m('S ≈ 141') + '.', '']
      ],
      ans: m('84π') + ' and ' + m('45π')
    },
    {
      q: 'Model answer, Q6: two similar cones of volumes ' + m('27') + ' and ' + m('125') + '.',
      steps: [
        [m('k³ = ' + f('125', '27')), ''],
        [m('k = ' + f('5', '3')), 'Heights are in ' + m('3 : 5') + '.'],
        [m('k² = ' + f('25', '9')), ''],
        ['Surface areas are in ' + m('9 : 25') + '.', '']
      ],
      ans: m('3 : 5') + ' and ' + m('9 : 25')
    }
  ],
  modelNote: 'Work Q3 on the board twice — once correctly, once with slant and height swapped — and let the class find the difference.',
  interactive: {
    type: 'quiz',
    title: 'The quarter in ten questions',
    hint: 'One from each block of Quarter III.',
    items: [
      { q: 'Volume of a pyramid:', a: [m('Bh'), m(f('1', '3') + 'Bh'), m(f('1', '2') + 'Bh'), m('3Bh')], c: 1, why: 'A third of the prism.' },
      { q: 'Lateral area of a regular pyramid:', a: [m(f('1', '2') + 'Ph'), m(f('1', '2') + 'Pm'), m('Pm'), m('Bm')], c: 1, why: 'The apothem, not the height.' },
      { q: 'Curved area of a cone:', a: [m('πr²'), m('πrl'), m('πrh'), m('2πrl')], c: 1, why: 'The unrolled sector.' },
      { q: 'Volume of a cone:', a: [m('πr²h'), m(f('1', '3') + 'πr²h'), m(f('1', '3') + 'πr²l'), m('πrl')], c: 1, why: 'Height, not slant.' },
      { q: 'The sector angle of a cone’s net:', a: [m('360°' + f('r', 'l')), m('360°' + f('l', 'r')), m('180°' + f('r', 'l')), m('90°')], c: 0, why: 'Arc equals circumference.' },
      { q: 'Volume of a frustum of a cone:', a: [m(f('πh', '3') + '(R² + r²)'), m(f('πh', '3') + '(R² + Rr + r²)'), m('πh(R² − r²)'), m(f('πh', '2') + '(R + r)')], c: 1, why: 'Three terms.' },
      { q: 'Volume of a sphere:', a: [m('4πR²'), m(f('4', '3') + 'πR³'), m(f('2', '3') + 'πR³'), m('πR³')], c: 1, why: 'Cubed.' },
      { q: 'Surface area of a sphere:', a: [m('4πR²'), m(f('4', '3') + 'πR³'), m('2πR²'), m('πR²')], c: 0, why: 'Four great circles.' },
      { q: 'A plane section of a sphere is:', a: ['an ellipse', 'a circle', 'a parabola', 'a point'], c: 1, why: 'Always a circle.' },
      { q: 'Scale factor ' + m('k') + ' multiplies volume by:', a: [m('k'), m('k²'), m('k³'), m('3k')], c: 2, why: 'Three dimensions.' }
    ]
  },
  quiz: [
    { q: 'Q1 needs the apothem because:', a: ['it is easier', 'lateral area uses the slant height', 'volume uses it', 'no reason'], c: 1, why: m('S_lat = ' + f('1', '2') + 'Pm') + '.' },
    { q: 'Q3’s volume uses:', a: ['the slant ' + m('13'), 'the height ' + m('12'), 'the radius only', 'the sector angle'], c: 1, why: 'Perpendicular height.' },
    { q: 'The frustum formula has:', a: ['two terms', 'three terms', 'one term', 'four terms'], c: 1, why: m('R² + Rr + r²') + '.' },
    { q: 'Volumes ' + m('27 : 125') + ' give heights in:', a: [m('27 : 125'), m('3 : 5'), m('9 : 25'), m('1 : 5')], c: 1, why: 'Cube root.' },
    { q: 'Quarter IV begins with:', a: ['new solids', 'applying these formulas in context', 'vectors', 'probability'], c: 1, why: 'Nothing new is added.' }
  ],
  practice: {
    easy: [
      ['Square pyramid, base 10, height 12: the apothem', m('13')],
      ['Same: lateral area', m('260')],
      ['Same: total area', m('360')],
      ['Same: volume', m('400')],
      ['Cone ' + m('r = 5, l = 13') + ': height', m('12')],
      ['Same cone: curved area', m('65π')],
      ['Ball of area ' + m('144π') + ': radius', m('6')]
    ],
    med: [
      ['Cone ' + m('r = 5, l = 13') + ': volume', m('100π')],
      ['Same cone: the sector angle of its net', m('≈ 138.5°')],
      ['Frustum ' + m('R = 6, r = 3, h = 4') + ': volume', m('84π')],
      ['Same frustum: curved area', m('45π')],
      ['Ball of area ' + m('144π') + ': volume', m('288π')],
      ['Two similar cones, volumes ' + m('27') + ' and ' + m('125') + ': the height ratio', m('3 : 5')],
      ['Same pair: the surface area ratio', m('9 : 25')]
    ],
    hard: [
      ['Square pyramid, base 10, height 12: the angle of a lateral edge with the base', m('≈ 59.5°')],
      ['Same pyramid: the dihedral angle along a base edge', m('≈ 67.4°')],
      ['A cap of height ' + m('2') + ' on a ball of radius ' + m('6') + ': its volume', m(f('π', '3') + '(4)(18 − 2)') + ' = ' + m(f('64π', '3')) + ' ≈ ' + m('67.0')],
      ['A cone and a hemisphere on the same circle have equal volumes. Find ' + m(f('h', 'r')), m('2')],
      ['A frustum has radii ' + m('R') + ' and ' + m(f('R', '2')) + ' and height ' + m('h') + '. Find the fraction of the full cone it holds', m(f('7', '8'))],
      ['A sphere is inscribed in a cone of radius ' + m('6') + ' and height ' + m('8') + '. Find its radius', m('r = ' + f('48', '16') + ' = 3')],
      ['A ball is cut by two parallel planes ' + m('3') + ' apart on a sphere of radius ' + m('10') + ': the zone area', m('60π')]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Bring the seven-formula page and the concept map to the first lesson of Quarter IV.',
  homework: [
    'Rewrite in full every control-work question that lost a mark, naming the slip in the margin.',
    'Write the seven formulas of Quarter III on one page in your own hand, each with a small sketch.',
    'A cone of radius ' + m('9') + ' cm and height ' + m('12') + ' cm is cut halfway up by a plane parallel to the base. Find the volume and the curved area of the frustum that remains.',
    'Write your target for Quarter IV in one checkable sentence, and date it.'
  ]
});

/* ===================== QUARTER IV (16 hours) ===================== */

/* ============================== 32 ============================== */
G11_GEO.push({
  id: 'g11-32', stream: 'geo', grade: 11, quarter: 4, lessons: '53–54', hours: 2,
  title: 'Practical problems — surface area and volume in context',
  subtitle: 'The formulas are known; the whole skill is reading which one the situation wants.',
  uz: 'Geometry 11, amaliy masalalar', uzPage: 'pp. 281–290',
  cam: 'IGX 13.x in context', camPage: 'Core & Extended, pp. 379–388', wb: 'Exercise 13.6',
  objectives: [
    'Choose between capacity, volume, curved area and total area from the wording.',
    'Convert between cm³, litres and m³ correctly in a single calculation.',
    'Use density and rate to turn a volume into a mass or a time.',
    'Report an answer to an accuracy the data supports.'
  ],
  terms: [
    ['Capacity', 'Sig‘im', 'Вместимость'],
    ['Volume', 'Hajm', 'Объём'],
    ['Density', 'Zichlik', 'Плотность'],
    ['Flow rate', 'Oqim tezligi', 'Скорость потока'],
    ['Wetted surface', 'Ho‘llanadigan sirt', 'Смачиваемая поверхность'],
    ['Coverage', 'Sarf', 'Расход'],
    ['Open solid', 'Ochiq jism', 'Открытое тело'],
    ['Litre', 'Litr', 'Литр'],
    ['Unit conversion', 'Birliklarni almashtirish', 'Перевод единиц'],
    ['Degree of accuracy', 'Aniqlik darajasi', 'Степень точности']
  ],
  timing: [[15, 'Reading the question'], [25, 'Units'], [25, 'Density and rate'], [25, 'Which faces'], [10, 'Homework']],
  sections: [
    {
      h: 'Reading the question',
      html: `<p>Nothing in Quarter IV is new. The whole difficulty is that the question no longer says
      which formula it wants — it describes a situation, and you must decide.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>The question says</th><th>It wants</th><th>Watch for</th></tr></thead>
      <tbody>
        <tr><td>“how much will it hold”</td><td>capacity — volume from <b>inner</b> dimensions</td><td>litres, not cm³</td></tr>
        <tr><td>“how much metal”</td><td>volume of material — a difference</td><td>outer minus inner</td></tr>
        <tr><td>“how much paint”</td><td>surface area</td><td>which faces are painted</td></tr>
        <tr><td>“how much label”</td><td>curved surface only</td><td>no circles</td></tr>
        <tr><td>“how heavy”</td><td>volume × density</td><td>units of density</td></tr>
        <tr><td>“how long to fill”</td><td>volume ÷ rate</td><td>rate units</td></tr>
      </tbody></table></div>
      {{fig:cylinderNet:A cylinder unrolled — the label is the rectangle, the lid and base the two circles.}}
      <div class="keybox"><div class="klabel">Three questions before any arithmetic</div>
      <ul>
        <li>Am I asked for a <b>volume</b> or an <b>area</b>?</li>
        <li>Is the object <b>open or closed</b>, <b>solid or hollow</b>?</li>
        <li>What <b>units</b> does the answer want?</li>
      </ul>
      Answer all three in writing and the calculation itself is Grade 11 Quarter II work.</div>`
    },
    {
      h: 'Units',
      html: `${eq(m('1 litre = 1000 cm³') + '     ' + m('1 m³ = 1000 litres = 1 000 000 cm³'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Given in</th><th>Answer wanted in</th><th>Multiply by</th></tr></thead>
      <tbody>
        <tr><td class="m">cm³</td><td class="m">litres</td><td class="m">÷ 1000</td></tr>
        <tr><td class="m">m³</td><td class="m">litres</td><td class="m">× 1000</td></tr>
        <tr><td class="m">m³</td><td class="m">cm³</td><td class="m">× 10⁶</td></tr>
        <tr><td class="m">m²</td><td class="m">cm²</td><td class="m">× 10⁴</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Convert the lengths first, not the answer</span>
      A trough ${m('2.5')} m long with a cross-section in cm has two different units in one formula.
      Convert ${m('2.5')} m to ${m('250')} cm <b>before</b> multiplying; converting the volume afterwards
      needs ${m('10⁶')}, and that is where the factor-of-a-thousand errors come from.</div>
      <p>The squared and cubed conversion factors are the ones that catch people:
      ${m('1 m² = 10 000 cm²')} and ${m('1 m³ = 1 000 000 cm³')}, not ${m('100')} and ${m('100')}.</p>`
    },
    {
      h: 'Density and rate',
      html: `${eq(m('mass = volume × density') + '     ' + m('time = ' + f('volume', 'rate')) + '     ' + m('paint = ' + f('area', 'coverage')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Quantity</th><th>Typical units</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>density</td><td class="m">g/cm³</td><td>steel ${m('7.8')}, water ${m('1.0')}, aluminium ${m('2.7')}</td></tr>
        <tr><td>flow rate</td><td class="m">litres/min</td><td>a tap ${m('12')} l/min</td></tr>
        <tr><td>coverage</td><td class="m">m²/litre</td><td>paint ${m('10')} m²/l</td></tr>
      </tbody></table></div>
      <p><b>Worked chain.</b> A steel pipe, outer radius ${m('9')} cm, inner ${m('7')} cm, length
      ${m('2')} m:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Working</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td>length in cm</td><td class="m">2 m = 200 cm</td><td class="m">200</td></tr>
        <tr><td>cross-section</td><td class="m">π(81 − 49)</td><td class="m">32π cm²</td></tr>
        <tr><td>volume</td><td class="m">32π × 200</td><td class="m">6400π ≈ 20 106 cm³</td></tr>
        <tr><td>mass</td><td class="m">× 7.8 g/cm³</td><td class="m">≈ 157 kg</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Keep ${m('π')} until the last line</div>
      ${m('6400π')} is exact; ${m('20 106')} is not. Rounding at the volume stage and again at the mass
      stage compounds the error. One rounding, at the end.</div>`
    },
    {
      h: 'Which faces',
      html: `<p>Surface-area questions turn on which faces exist and which are wanted.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Object</th><th>Area wanted</th><th>Formula</th></tr></thead>
      <tbody>
        <tr><td>a label round a tin</td><td>curved only</td><td class="m">2πrh</td></tr>
        <tr><td>a closed tin</td><td>total</td><td class="m">2πr² + 2πrh</td></tr>
        <tr><td>an open cylindrical tank</td><td>base + curved</td><td class="m">πr² + 2πrh</td></tr>
        <tr><td>a silo painted above ground</td><td>curved + dome</td><td class="m">2πrh + 2πr²</td></tr>
        <tr><td>a bowl, inside and out</td><td>both curved surfaces</td><td class="m">2π(R² + r²) + rim</td></tr>
        <tr><td>a conical tent with a floor</td><td>curved + base</td><td class="m">πrl + πr²</td></tr>
      </tbody></table></div>
      {{fig:coneNet:A cone unrolled — the sector is the curved surface, the circle the base.}}
      <div class="warn"><span class="wl">The commonest single error in the whole quarter</span>
      Using ${m('2πr² + 2πrh')} for an open tank. If the question says <b>open</b>, <b>tank</b>,
      <b>trough</b>, <b>bowl</b> or <b>tent without a floor</b>, at least one circle is missing. Read the
      noun, not just the numbers.</div>`
    }
  ],
  examples: [
    {
      q: 'A cylindrical tank of radius ' + m('1.5') + ' m and height ' + m('4') + ' m is open at the top. Find its capacity in litres and the area to be painted inside and out (not the base).',
      steps: [
        [m('V = π(2.25)(4) = 9π ≈ 28.27') + ' m³.', ''],
        [m('= 28 270') + ' litres.', m('× 1000') + '.'],
        ['Curved area ' + m('2π(1.5)(4) = 12π ≈ 37.7') + ' m², twice for inside and out.', ''],
        [m('≈ 75.4') + ' m².', '']
      ],
      ans: m('≈ 28 300') + ' litres; ' + m('≈ 75.4') + ' m²'
    },
    {
      q: 'A steel pipe has outer radius ' + m('9') + ' cm, inner ' + m('7') + ' cm and length ' + m('2') + ' m. Find its mass at ' + m('7.8') + ' g/cm³.',
      steps: [
        ['Length ' + m('200') + ' cm.', 'Convert first.'],
        [m('V = π(81 − 49)(200) = 6400π'), ''],
        [m('≈ 20 106') + ' cm³.', ''],
        [m('m ≈ 156 800') + ' g ' + m('≈ 157') + ' kg.', '']
      ],
      ans: m('≈ 157') + ' kg'
    },
    {
      q: 'A tap delivering ' + m('12') + ' litres a minute fills a cuboid tank ' + m('1.2 × 0.8 × 0.9') + ' m. How long does it take?',
      steps: [
        [m('V = 0.864') + ' m³.', ''],
        [m('= 864') + ' litres.', ''],
        [m('t = ' + f('864', '12') + ' = 72') + ' minutes.', ''],
        ['That is ' + m('1') + ' h ' + m('12') + ' min.', '']
      ],
      ans: m('72') + ' minutes'
    },
    {
      q: 'A conical tent has base radius ' + m('3') + ' m and slant height ' + m('5') + ' m, with a groundsheet. Find the canvas needed and the air space inside.',
      steps: [
        ['Curved ' + m('πrl = 15π ≈ 47.1') + ' m².', ''],
        ['Groundsheet ' + m('πr² = 9π ≈ 28.3') + ' m².', ''],
        ['Total ' + m('24π ≈ 75.4') + ' m².', ''],
        ['Height ' + m(sr('25 − 9') + ' = 4') + '; ' + m('V = ' + f('1', '3') + 'π(9)(4) = 12π ≈ 37.7') + ' m³.', '']
      ],
      ans: m('≈ 75.4') + ' m² of material; ' + m('≈ 37.7') + ' m³'
    }
  ],
  modelNote: 'Bring a tin, a bottle and a funnel; the class decides for each which formula the label, the contents and the metal need.',
  interactive: {
    type: 'solidVolume',
    title: 'A cylinder, and what it holds',
    hint: 'Change r and h and watch the volume and the areas separately.',
    kind: 'cylinder'
  },
  quiz: [
    { q: '“How much will it hold” asks for:', a: ['surface area', 'capacity', 'mass', 'the curved area'], c: 1, why: 'Inner volume.' },
    { q: m('1') + ' m³ in litres:', a: [m('100'), m('1000'), m('10 000'), m('1 000 000')], c: 1, why: 'By definition.' },
    { q: m('1') + ' m² in cm²:', a: [m('100'), m('1000'), m('10 000'), m('1 000 000')], c: 2, why: 'Squared factor.' },
    { q: 'An open cylindrical tank has area:', a: [m('2πr² + 2πrh'), m('πr² + 2πrh'), m('2πrh'), m('πr²')], c: 1, why: 'One circle only.' },
    { q: 'A label on a tin needs:', a: [m('2πrh'), m('2πr² + 2πrh'), m('πr²'), m('πrl')], c: 0, why: 'Curved only.' },
    { q: 'Mass equals:', a: ['volume ÷ density', 'volume × density', 'area × density', 'density ÷ volume'], c: 1, why: 'The definition.' },
    { q: 'Rounding should happen:', a: ['at each step', 'once, at the end', 'never', 'twice'], c: 1, why: 'Errors compound.' }
  ],
  practice: {
    easy: [
      ['Capacity of a cylinder ' + m('r = 2, h = 5') + ' cm, in cm³', m('20π') + ' ≈ ' + m('62.8')],
      ['Same, in litres', m('≈ 0.0628')],
      [m('1') + ' m³ in litres', m('1000')],
      [m('2.5') + ' m in cm', m('250')],
      ['Label area for ' + m('r = 3, h = 10'), m('60π') + ' ≈ ' + m('188')],
      ['Closed tin total area, ' + m('r = 3, h = 10'), m('78π') + ' ≈ ' + m('245')],
      ['Mass of ' + m('1000') + ' cm³ of steel at ' + m('7.8') + ' g/cm³', m('7.8') + ' kg']
    ],
    med: [
      ['Open tank ' + m('r = 1.5, h = 4') + ' m: capacity in litres', m('≈ 28 300')],
      ['Same tank: area painted inside and out, base excluded', m('≈ 75.4') + ' m²'],
      ['Pipe ' + m('R = 9, r = 7') + ' cm, ' + m('L = 2') + ' m: volume of metal', m('6400π') + ' ≈ ' + m('20 100') + ' cm³'],
      ['Same pipe: mass at ' + m('7.8') + ' g/cm³', m('≈ 157') + ' kg'],
      ['Tank ' + m('1.2 × 0.8 × 0.9') + ' m at ' + m('12') + ' l/min: filling time', m('72') + ' min'],
      ['Conical tent ' + m('r = 3, l = 5') + ' with floor: material', m('24π') + ' ≈ ' + m('75.4') + ' m²'],
      ['Same tent: air space', m('12π') + ' ≈ ' + m('37.7') + ' m³']
    ],
    hard: [
      ['A silo, cylinder ' + m('r = 4, h = 10') + ' m with a hemispherical top: volume and painted area above ground', m(f('608π', '3')) + ' ≈ ' + m('637') + ' m³; ' + m('112π') + ' ≈ ' + m('352') + ' m²'],
      ['Paint at ' + m('10') + ' m²/litre for that silo: litres needed', m('≈ 36') + ' litres'],
      ['A hemispherical bowl of inner radius ' + m('12') + ' cm: capacity in litres', m('≈ 3.62') + ' litres'],
      ['A trough with trapezium section ' + m('40/60') + ' cm, depth ' + m('30') + ' cm, length ' + m('3') + ' m: capacity in litres', m('450') + ' litres'],
      ['A gutter is half a cylinder of radius ' + m('8') + ' cm and length ' + m('6') + ' m: material area', m('4800π') + ' cm² ≈ ' + m('1.51') + ' m²'],
      ['A tank of ' + m('2000') + ' litres is a cylinder with ' + m('h = 2r') + ': find ' + m('r'), m('r = ' + rt('3', f('1', 'π'))) + ' ≈ ' + m('0.683') + ' m'],
      ['A ball of radius ' + m('20') + ' cm is painted at ' + m('2') + ' so‘m per cm²: the cost', m('3200π') + ' ≈ ' + m('10 050') + ' so‘m']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Answer the three reading questions in writing before every calculation.',
  homework: [
    'A cylindrical water tank is open at the top, radius ' + m('1.2') + ' m, height ' + m('3') + ' m. Find its capacity in litres and the area of metal used.',
    'A copper pipe has outer radius ' + m('5') + ' cm, inner ' + m('4') + ' cm and length ' + m('3') + ' m. Find the mass of copper at ' + m('8.9') + ' g/cm³.',
    'A tap delivers ' + m('15') + ' litres a minute into a tank ' + m('1.5 × 1.0 × 1.2') + ' m. Find the time to fill it.',
    'A conical tent of base radius ' + m('2.5') + ' m and height ' + m('6') + ' m has no groundsheet. Find the canvas needed and the volume inside.',
    'For each of a tin label, an open trough and a solid steel ball, say which formula is needed and why, in one sentence each.'
  ]
});

/* ============================== 33 ============================== */
G11_GEO.push({
  id: 'g11-33', stream: 'geo', grade: 11, quarter: 4, lessons: '55–56', hours: 2,
  title: 'Optimisation of a container [Cambridge insert]',
  subtitle: 'One constraint, one variable, one derivative — and the cheapest tin in the shop.',
  uz: 'Geometry 11, amaliy masalalar', uzPage: 'pp. 291–300',
  cam: 'P1 9.3', camPage: 'Pure Mathematics 1, pp. 196–204', wb: 'Exercise 9C',
  objectives: [
    'Form an expression for the quantity to be optimised.',
    'Use the constraint to reduce it to one variable.',
    'Differentiate, solve f′ = 0 and verify the nature of the stationary point.',
    'Interpret the answer, including any practical restriction.'
  ],
  terms: [
    ['Optimisation', 'Optimallashtirish', 'Оптимизация'],
    ['Constraint', 'Cheklov', 'Ограничение'],
    ['Objective function', 'Maqsad funksiyasi', 'Целевая функция'],
    ['Stationary point', 'Statsionar nuqta', 'Стационарная точка'],
    ['Minimum', 'Minimum', 'Минимум'],
    ['Maximum', 'Maksimum', 'Максимум'],
    ['Second derivative', 'Ikkinchi hosila', 'Вторая производная'],
    ['Feasible range', 'Mumkin bo‘lgan oraliq', 'Допустимый интервал'],
    ['Cost function', 'Narx funksiyasi', 'Функция стоимости'],
    ['Aspect ratio', 'Nisbat', 'Отношение']
  ],
  timing: [[15, 'The four steps'], [30, 'The closed cylinder'], [25, 'Open containers'], [25, 'Cost, not area'], [10, 'Homework']],
  sections: [
    {
      h: 'The four steps',
      html: `<div class="keybox"><div class="klabel">Every optimisation question, in four steps</div>
      <ol>
        <li>Write the quantity to be optimised (the <b>objective</b>) in terms of the dimensions.</li>
        <li>Write the <b>constraint</b>, and use it to eliminate one variable.</li>
        <li>Differentiate, set ${m('= 0')}, solve.</li>
        <li>Verify it is a minimum (or maximum) and answer the question asked.</li>
      </ol></div>
      {{fig:optimBox:The classic box — one constraint, one variable, one derivative.}}
      <div class="warn"><span class="wl">Step 4 is a real mark</span>
      Finding ${m('r')} is not the answer if the question asked for the <b>area</b>, or for ${m('h')}, or
      for the ratio ${m(f('h', 'r'))}. And a stationary point must be shown to be a minimum, by
      ${m('f″ > 0')} or a sign change of ${m('f′')}.</div>`
    },
    {
      h: 'The closed cylinder',
      html: `<p>The standard question: a closed cylindrical tin of fixed volume ${m('V')} — what shape uses
      least metal?</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td>objective</td><td class="m">S = 2πr² + 2πrh</td></tr>
        <tr><td>constraint</td><td class="m">V = πr²h ⇒ h = ${f('V', 'πr²')}</td></tr>
        <tr><td>eliminate</td><td class="m">S = 2πr² + ${f('2V', 'r')}</td></tr>
        <tr><td>differentiate</td><td class="m">${f('dS', 'dr')} = 4πr − ${f('2V', 'r²')}</td></tr>
        <tr><td>solve</td><td class="m">4πr³ = 2V ⇒ r = ∛${f('V', '2π')}</td></tr>
        <tr><td>verify</td><td class="m">${f('d²S', 'dr²')} = 4π + ${f('4V', 'r³')} > 0 — a minimum</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The answer in one sentence</div>
      Substituting back gives ${m('h = 2r')}: <b>the least-metal closed tin is as tall as it is wide</b>.
      Its height equals its diameter, and it fits exactly inside a cube. The result does not depend on
      ${m('V')} at all.</div>
      <p><b>Example.</b> ${m('V = 2000')} cm³ gives ${m('r = ∛' + f('2000', '2π') + ' ≈ 6.83')} cm and
      ${m('h ≈ 13.66')} cm, with ${m('S ≈ 879')} cm². A tin of the same volume with ${m('r = 4')} needs
      ${m('S ≈ 1101')} cm² — a quarter more metal for the same contents.</p>`
    },
    {
      h: 'Open containers',
      html: `<p>Remove a face and the objective changes, so the answer does too.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Container</th><th>Objective</th><th>Optimal shape</th></tr></thead>
      <tbody>
        <tr><td>closed cylinder</td><td class="m">2πr² + 2πrh</td><td class="m">h = 2r</td></tr>
        <tr><td>open cylinder (no lid)</td><td class="m">πr² + 2πrh</td><td class="m">h = r</td></tr>
        <tr><td>closed cuboid, square base</td><td class="m">2x² + 4xh</td><td class="m">h = x</td></tr>
        <tr><td>open cuboid, square base</td><td class="m">x² + 4xh</td><td class="m">h = ${f('x', '2')}</td></tr>
      </tbody></table></div>
      <p>Every one is the same four steps. Note the pattern: removing the lid makes the optimal container
      <b>shallower</b>, because height is now relatively more expensive than base.</p>
      <div class="warn"><span class="wl">A cube is optimal only when the box is closed</span>
      The closed cuboid of least area for a given volume is a cube. The open one is <b>not</b> — it is
      half as tall as it is wide. Assuming a cube without checking is a common and costly shortcut.</div>`
    },
    {
      h: 'Cost, not area',
      html: `<p>When materials differ in price, minimise the <b>cost</b>, not the area — the four steps are
      unchanged, but the objective carries the prices.</p>
      <p><b>Example.</b> An open tank with a square base of side ${m('x')} and height ${m('h')} holds
      ${m('32')} m³. The base costs ${m('10')} units per m², the sides ${m('5')}:</p>
      ${eq(m('C = 10x² + 5(4xh) = 10x² + 20xh') + ',   ' + m('h = ' + f('32', 'x²')), true)}
      ${eq(m('C = 10x² + ' + f('640', 'x')) + ',   ' + m(f('dC', 'dx') + ' = 20x − ' + f('640', 'x²') + ' = 0'), true)}
      <p>So ${m('x³ = 32')}, ${m('x ≈ 3.17')} m, ${m('h ≈ 3.17')} m — and here ${m('h = x')}, not
      ${m(f('x', '2'))}, because the base is twice as expensive and the design compensates by making it
      smaller.</p>
      <div class="keybox"><div class="klabel">Check the feasible range</div>
      A dimension must be positive, and often has an upper bound from the physical situation (a sheet of
      given size, a shelf of given height). If the stationary point lies outside that range, the optimum
      is at an <b>endpoint</b> — and the derivative never finds it. State the range before
      differentiating.</div>`
    }
  ],
  examples: [
    {
      q: 'A closed cylindrical tin holds ' + m('2000') + ' cm³. Find the radius and height that use least metal.',
      steps: [
        [m('S = 2πr² + ' + f('4000', 'r')), 'After eliminating ' + m('h') + '.'],
        [m(f('dS', 'dr') + ' = 4πr − ' + f('4000', 'r²') + ' = 0'), ''],
        [m('r³ = ' + f('1000', 'π') + ' ⇒ r ≈ 6.83'), ''],
        [m('h = ' + f('2000', 'π(46.6)') + ' ≈ 13.66 = 2r'), m('S″ > 0') + ', so a minimum.']
      ],
      ans: m('r ≈ 6.83') + ' cm, ' + m('h ≈ 13.66') + ' cm'
    },
    {
      q: 'An open cylindrical tank holds ' + m('54π') + ' cm³. Find the radius that uses least metal.',
      steps: [
        [m('S = πr² + 2πrh') + ', ' + m('h = ' + f('54', 'r²')), ''],
        [m('S = πr² + ' + f('108π', 'r')), ''],
        [m(f('dS', 'dr') + ' = 2πr − ' + f('108π', 'r²') + ' = 0 ⇒ r³ = 54'), ''],
        [m('r ≈ 3.78') + ', ' + m('h ≈ 3.78 = r') + '.', '']
      ],
      ans: m('r = ∛54 ≈ 3.78') + ' cm, with ' + m('h = r')
    },
    {
      q: 'An open tank with a square base holds ' + m('32') + ' m³. The base costs ' + m('10') + ' and the sides ' + m('5') + ' units per m². Find the cheapest dimensions.',
      steps: [
        [m('C = 10x² + 20xh') + ', ' + m('h = ' + f('32', 'x²')), ''],
        [m('C = 10x² + ' + f('640', 'x')), ''],
        [m(f('dC', 'dx') + ' = 20x − ' + f('640', 'x²') + ' = 0 ⇒ x³ = 32'), ''],
        [m('x ≈ 3.17') + ' m, ' + m('h ≈ 3.17') + ' m; ' + m('C ≈ 302') + ' units.', '']
      ],
      ans: m('x = h ≈ 3.17') + ' m'
    },
    {
      q: 'A rectangular sheet ' + m('40 × 40') + ' cm has equal squares of side ' + m('x') + ' cut from the corners; the flaps fold up. Find ' + m('x') + ' for the greatest volume.',
      steps: [
        [m('V = x(40 − 2x)²') + ', with ' + m('0 < x < 20') + '.', 'State the range.'],
        [m(f('dV', 'dx') + ' = (40 − 2x)² − 4x(40 − 2x)'), ''],
        [m('(40 − 2x)(40 − 6x) = 0 ⇒ x = 20') + ' (rejected) or ' + m('x = ' + f('20', '3')), ''],
        [m('x ≈ 6.67') + ' cm, ' + m('V ≈ 4741') + ' cm³.', '']
      ],
      ans: m('x = ' + f('20', '3')) + ' ≈ ' + m('6.67') + ' cm'
    }
  ],
  modelNote: 'Bring three tins of the same volume but different shapes; the class predicts which uses least metal, then measures.',
  interactive: {
    type: 'optimise',
    title: 'The cheapest container',
    hint: 'Move the dimension and watch the objective bottom out.'
  },
  quiz: [
    { q: 'The constraint is used to:', a: ['check the answer', 'eliminate a variable', 'differentiate', 'nothing'], c: 1, why: 'One variable is needed.' },
    { q: 'A minimum is confirmed by:', a: [m('f′ = 0'), m('f″ > 0'), m('f″ < 0'), m('f = 0')], c: 1, why: 'The curve bends up.' },
    { q: 'A closed cylinder of least area has:', a: [m('h = r'), m('h = 2r'), m('h = ' + f('r', '2')), m('h = 4r')], c: 1, why: 'Height equals diameter.' },
    { q: 'An open cylinder of least area has:', a: [m('h = r'), m('h = 2r'), m('h = ' + f('r', '2')), m('h = 3r')], c: 0, why: 'No lid.' },
    { q: 'A closed cuboid of least area is:', a: ['a cube', 'twice as tall as wide', 'half as tall as wide', 'any shape'], c: 0, why: m('h = x') + '.' },
    { q: 'An open cuboid of least area has:', a: [m('h = x'), m('h = ' + f('x', '2')), m('h = 2x'), m('h = 4x')], c: 1, why: 'Shallower without a lid.' },
    { q: 'If the stationary point is outside the feasible range:', a: ['there is no answer', 'the optimum is at an endpoint', 'differentiate again', 'ignore the range'], c: 1, why: 'State the range first.' }
  ],
  practice: {
    easy: [
      ['Objective for a closed cylinder', m('2πr² + 2πrh')],
      ['Objective for an open cylinder', m('πr² + 2πrh')],
      ['Constraint for a cylinder of volume ' + m('V'), m('h = ' + f('V', 'πr²'))],
      ['Optimal shape of a closed cylinder', m('h = 2r')],
      ['Optimal shape of an open cylinder', m('h = r')],
      ['Optimal closed cuboid with square base', m('h = x') + ' — a cube'],
      ['Test for a minimum', m('f″ > 0')]
    ],
    med: [
      ['Closed tin of ' + m('2000') + ' cm³: the radius', m('≈ 6.83') + ' cm'],
      ['Same tin: the height', m('≈ 13.66') + ' cm'],
      ['Same tin: the least area', m('≈ 879') + ' cm²'],
      ['Open tank of ' + m('54π') + ' cm³: the radius', m('∛54') + ' ≈ ' + m('3.78')],
      ['Open cuboid, square base, volume ' + m('108') + ': the base edge', m('x = 6')],
      ['Box from a ' + m('40 × 40') + ' sheet: the cut ' + m('x'), m(f('20', '3')) + ' ≈ ' + m('6.67')],
      ['Same box: the greatest volume', m('≈ 4741') + ' cm³']
    ],
    hard: [
      ['Open tank, ' + m('32') + ' m³, base ' + m('10') + ' and sides ' + m('5') + ' per m²: the base edge', m('≈ 3.17') + ' m'],
      ['Same: the least cost', m('≈ 302') + ' units'],
      ['A cylinder inscribed in a sphere of radius ' + m('R') + ': the greatest volume', m(f('4πR³', '3' + sr('3')))],
      ['A cone of slant ' + m('l') + ': the greatest volume', m('h = ' + f('l', sr('3')))],
      ['A closed cylinder where the ends cost twice the side: the optimal ' + m(f('h', 'r')), m('4')],
      ['A box from a ' + m('30 × 50') + ' sheet: the cut ' + m('x') + ' for greatest volume', m('≈ 6.07') + ' cm'],
      ['A cylinder of volume ' + m('V') + ' inscribed in a cone of radius ' + m('R') + ' and height ' + m('H') + ': the greatest ' + m('V'), m(f('4πR²H', '27'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write the four steps as headings and fill them in; the structure carries the method marks.',
  homework: [
    'A closed cylindrical tin holds ' + m('1000') + ' cm³. Find the radius and height that use least metal, and verify the minimum.',
    'An open cylindrical tank holds ' + m('16π') + ' m³. Find the radius that uses least material.',
    'An open box with a square base holds ' + m('500') + ' cm³. Find the dimensions of least surface area.',
    'Squares of side ' + m('x') + ' are cut from the corners of a ' + m('24 × 36') + ' cm sheet and the flaps folded up. Find ' + m('x') + ' for the greatest volume, stating the feasible range.',
    'An open tank of ' + m('18') + ' m³ has a square base costing ' + m('8') + ' and sides costing ' + m('4') + ' units per m². Find the cheapest dimensions.'
  ]
});

/* ============================== 34 ============================== */
G11_GEO.push({
  id: 'g11-34', stream: 'geo', grade: 11, quarter: 4, lessons: '57–58', hours: 2,
  title: 'Test practice — the state final attestation format',
  subtitle: 'Thirty questions, forty minutes, no working shown — a different skill from the one practised all year.',
  uz: 'Geometry 11, DTM formati', uzPage: 'pp. 301–310',
  cam: 'Examination technique', camPage: 'Core & Extended, pp. 389–392', wb: 'Test paper G1',
  objectives: [
    'Work a multiple-choice geometry question in under 80 seconds.',
    'Use elimination, estimation and special cases when a full solution is too slow.',
    'Recognise the distractors that mark schemes deliberately include.',
    'Manage the whole paper: order, timing and the last five minutes.'
  ],
  terms: [
    ['Attestation (final test)', 'Yakuniy attestatsiya', 'Итоговая аттестация'],
    ['Multiple choice', 'Test savoli', 'Тестовый вопрос'],
    ['Distractor', 'Chalg‘ituvchi javob', 'Отвлекающий ответ'],
    ['Elimination', 'Chiqarib tashlash', 'Исключение'],
    ['Estimation', 'Baholash', 'Оценка'],
    ['Special case', 'Xususiy hol', 'Частный случай'],
    ['Time per question', 'Savolga vaqt', 'Время на вопрос'],
    ['Answer sheet', 'Javoblar varaqasi', 'Бланк ответов']
  ],
  timing: [[10, 'The format'], [40, 'A practice block of 20'], [20, 'Marking and analysis'], [20, 'The four fast techniques'], [10, 'Homework']],
  sections: [
    {
      h: 'The format',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Feature</th><th>What it means for you</th></tr></thead>
      <tbody>
        <tr><td>30 questions, 40 minutes</td><td>${m('80')} seconds each, on average</td></tr>
        <tr><td>four options, one correct</td><td>elimination is a legitimate method</td></tr>
        <tr><td>no working marked</td><td>a correct guess scores the same as a proof</td></tr>
        <tr><td>no negative marking</td><td><b>never</b> leave a question blank</td></tr>
        <tr><td>calculator usually not allowed</td><td>answers are designed to be exact</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The order to work in</div>
      <ol>
        <li><b>First pass</b> (20 min): every question you can do in under a minute. Mark the rest.</li>
        <li><b>Second pass</b> (15 min): the marked ones, hardest last.</li>
        <li><b>Last 5 minutes</b>: transfer everything to the answer sheet, and fill every blank with
        your best elimination.</li>
      </ol>
      A question you cannot do in ${m('80')} seconds costs you two you could have done. Leaving it is not
      giving up; it is arithmetic.</div>`
    },
    {
      h: 'The four fast techniques',
      html: `<p><b>1. Elimination by size.</b> A volume must be positive, a probability at most ${m('1')},
      an angle in a triangle under ${m('180°')}, a surface area larger than any one face. Two of four
      options usually fail one of these tests.</p>
      <p><b>2. Estimation.</b> ${m('π ≈ 3')}, ${m(sr('2') + ' ≈ 1.4')}, ${m(sr('3') + ' ≈ 1.7')}. A cone
      of radius ${m('5')} and height ${m('12')} has volume about ${m(f('1', '3') + '(3)(25)(12) = 300')} —
      enough to pick between ${m('100π')} and ${m('300π')}.</p>
      <p><b>3. Special cases.</b> If the answer must hold for every triangle, test the equilateral one.
      If for every ${m('n')}, test ${m('n = 1')} and ${m('n = 2')}. An option that fails a special case is
      out.</p>
      <p><b>4. Work backwards from the options.</b> Substituting four given answers is often faster than
      solving. If the options for a radius are ${m('2, 3, 4, 6')}, computing ${m('V')} for each takes
      less time than solving a cubic.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>Fast route</th><th>Time</th></tr></thead>
      <tbody>
        <tr><td>volume of a cone, ${m('r = 5, h = 12')}</td><td>estimate ${m('≈ 314')}</td><td class="m">10 s</td></tr>
        <tr><td>surface area of a sphere of radius ${m('3')}</td><td class="m">4π(9) = 36π</td><td class="m">5 s</td></tr>
        <tr><td>a ratio of similar solids ${m('8 : 27')}</td><td>cube roots ${m('2 : 3')}</td><td class="m">10 s</td></tr>
        <tr><td>which solid has ${m('V = ' + f('1', '3') + 'Bh')}</td><td>recall</td><td class="m">3 s</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'The distractors',
      html: `<p>Wrong options are not random. Each one is the answer to a specific mistake, which means you
      can recognise your own error in the list.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>The distractor is</th><th>The mistake it catches</th></tr></thead>
      <tbody>
        <tr><td>three times the right answer</td><td>the missing ${m(f('1', '3'))} in a cone or pyramid</td></tr>
        <tr><td>half or double</td><td>radius used for diameter</td></tr>
        <tr><td>the curved area when total was asked</td><td>reading</td></tr>
        <tr><td>${m('k')} instead of ${m('k²')} or ${m('k³')}</td><td>similar-solids ratios</td></tr>
        <tr><td>the slant instead of the height</td><td>a cone volume</td></tr>
        <tr><td>an answer in cm³ when litres were asked</td><td>units</td></tr>
      </tbody></table></div>
      {{fig:similarSolids:k, k², k³ — three of the four options in every similarity question.}}
      <div class="warn"><span class="wl">If your answer is exactly one of the options, check anyway</span>
      Finding your answer in the list is <b>not</b> confirmation — the distractors were built from the
      likely errors, so a wrong answer is more likely to appear than a random number would be. Spend the
      last five seconds on the reading check: total or curved? radius or diameter? cm³ or litres?</div>`
    },
    {
      h: 'A practice block',
      html: `<p>Twenty questions, twenty-five minutes. Work them in the order given, marking anything that
      takes longer than a minute.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>№</th><th>Question</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">1</td><td>Volume of a cube of edge ${m('5')}</td><td class="m">125</td></tr>
        <tr><td class="m">2</td><td>Space diagonal of that cube</td><td class="m">5${sr('3')}</td></tr>
        <tr><td class="m">3</td><td>Surface area of a sphere of radius ${m('3')}</td><td class="m">36π</td></tr>
        <tr><td class="m">4</td><td>Volume of a cone, ${m('r = 3, h = 4')}</td><td class="m">12π</td></tr>
        <tr><td class="m">5</td><td>Slant height of that cone</td><td class="m">5</td></tr>
        <tr><td class="m">6</td><td>Curved area of that cone</td><td class="m">15π</td></tr>
        <tr><td class="m">7</td><td>Volume of a sphere of radius ${m('6')}</td><td class="m">288π</td></tr>
        <tr><td class="m">8</td><td>Volume of a pyramid, ${m('B = 36, h = 5')}</td><td class="m">60</td></tr>
        <tr><td class="m">9</td><td>Two similar solids, volumes ${m('8 : 27')}: length ratio</td><td class="m">2 : 3</td></tr>
        <tr><td class="m">10</td><td>Same pair: area ratio</td><td class="m">4 : 9</td></tr>
        <tr><td class="m">11</td><td>Volume of a cylinder, ${m('r = 2, h = 7')}</td><td class="m">28π</td></tr>
        <tr><td class="m">12</td><td>Total area of that cylinder</td><td class="m">36π</td></tr>
        <tr><td class="m">13</td><td>Angle of a cube’s space diagonal with the base</td><td class="m">≈ 35.3°</td></tr>
        <tr><td class="m">14</td><td>Frustum volume, ${m('R = 4, r = 2, h = 3')}</td><td class="m">28π</td></tr>
        <tr><td class="m">15</td><td>Sector angle of the net of a cone, ${m('r = 3, l = 9')}</td><td class="m">120°</td></tr>
        <tr><td class="m">16</td><td>Capacity in litres of ${m('2000')} cm³</td><td class="m">2</td></tr>
        <tr><td class="m">17</td><td>Curved area of a hemisphere of radius ${m('5')}</td><td class="m">50π</td></tr>
        <tr><td class="m">18</td><td>Volume of a prism, ${m('B = 15, h = 8')}</td><td class="m">120</td></tr>
        <tr><td class="m">19</td><td>A cap of height ${m('2')} on a sphere of radius ${m('5')}: its curved area</td><td class="m">20π</td></tr>
        <tr><td class="m">20</td><td>Closed cylinder of least area for a given ${m('V')}: ${m(f('h', 'r'))}</td><td class="m">2</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Mark it, then count the types</div>
      Do not count the score. Count how many were lost to <b>reading</b>, how many to <b>a formula</b>,
      and how many to <b>arithmetic</b>. Those three numbers say what to practise; the score says
      nothing.</div>`
    }
  ],
  examples: [
    {
      q: 'A cone has ' + m('r = 5') + ' and ' + m('h = 12') + '. Which is its volume: ' + m('100π') + ', ' + m('300π') + ', ' + m('60π') + ' or ' + m('900π') + '?',
      steps: [
        [m('V = ' + f('1', '3') + 'π(25)(12)'), ''],
        [m('= 100π'), ''],
        ['Note the distractor ' + m('300π') + ' — the missing ' + m(f('1', '3')) + '.', '']
      ],
      ans: m('100π')
    },
    {
      q: 'Two similar cones have volumes in the ratio ' + m('8 : 27') + '. What is the ratio of their curved areas?',
      steps: [
        [m('k³ = ' + f('27', '8') + ' ⇒ k = ' + f('3', '2')), 'Cube root.'],
        [m('k² = ' + f('9', '4')), ''],
        [m('4 : 9'), 'The distractors would be ' + m('2 : 3') + ' and ' + m('8 : 27') + '.']
      ],
      ans: m('4 : 9')
    },
    {
      q: 'A sphere has surface area ' + m('100π') + '. Its volume is: ' + m(f('500π', '3')) + ', ' + m('500π') + ', ' + m(f('250π', '3')) + ' or ' + m('100π') + '?',
      steps: [
        [m('4πR² = 100π ⇒ R = 5'), ''],
        [m('V = ' + f('4', '3') + 'π(125) = ' + f('500π', '3')), ''],
        [m('500π') + ' is the missing ' + m(f('4', '3')) + ' distractor.', '']
      ],
      ans: m(f('500π', '3'))
    },
    {
      q: 'Without computing exactly, decide whether a cylinder with ' + m('r = 7') + ' and ' + m('h = 10') + ' holds more or less than ' + m('1.5') + ' m³.',
      steps: [
        ['Units: ' + m('r') + ' and ' + m('h') + ' in cm — read again.', ''],
        ['If in cm: ' + m('V ≈ 3(49)(10) ≈ 1470') + ' cm³.', ''],
        ['That is ' + m('1.47') + ' litres, not m³.', 'The unit trap, caught by estimation.']
      ],
      ans: 'About ' + m('1.5') + ' litres — the units matter more than the arithmetic'
    }
  ],
  modelNote: 'Time the class strictly on the twenty questions; the discussion afterwards is about pace, not about geometry.',
  interactive: {
    type: 'quiz',
    title: 'Twenty questions against the clock',
    hint: 'Eighty seconds each — move on if it takes longer.',
    items: [
      { q: 'Volume of a cube of edge ' + m('5') + ':', a: [m('25'), m('125'), m('150'), m('75')], c: 1, why: m('5³') + '.' },
      { q: 'Space diagonal of that cube:', a: [m('5' + sr('2')), m('5' + sr('3')), m('5'), m('15')], c: 1, why: m('a' + sr('3')) + '.' },
      { q: 'Surface area of a sphere, ' + m('R = 3') + ':', a: [m('9π'), m('36π'), m('12π'), m('27π')], c: 1, why: m('4πR²') + '.' },
      { q: 'Volume of a cone, ' + m('r = 3, h = 4') + ':', a: [m('12π'), m('36π'), m('4π'), m('16π')], c: 0, why: 'The ' + m(f('1', '3')) + ' matters.' },
      { q: 'Curved area of that cone:', a: [m('12π'), m('15π'), m('9π'), m('24π')], c: 1, why: m('πrl') + ' with ' + m('l = 5') + '.' },
      { q: 'Volume of a sphere, ' + m('R = 6') + ':', a: [m('144π'), m('288π'), m('216π'), m('72π')], c: 1, why: m(f('4', '3') + 'πR³') + '.' },
      { q: 'Similar solids, volumes ' + m('8 : 27') + ': length ratio', a: [m('8 : 27'), m('2 : 3'), m('4 : 9'), m('1 : 3')], c: 1, why: 'Cube root.' },
      { q: 'Same pair: area ratio', a: [m('2 : 3'), m('4 : 9'), m('8 : 27'), m('16 : 81')], c: 1, why: m('k²') + '.' },
      { q: 'Total area of a cylinder, ' + m('r = 2, h = 7') + ':', a: [m('28π'), m('36π'), m('32π'), m('44π')], c: 1, why: m('2πr² + 2πrh') + '.' },
      { q: m('2000') + ' cm³ in litres:', a: [m('0.2'), m('2'), m('20'), m('200')], c: 1, why: m('÷ 1000') + '.' },
      { q: 'Sector angle of a cone’s net, ' + m('r = 3, l = 9') + ':', a: [m('90°'), m('120°'), m('180°'), m('60°')], c: 1, why: m('360° × ' + f('3', '9')) + '.' },
      { q: 'Least-area closed cylinder has ' + m(f('h', 'r')) + ':', a: [m('1'), m('2'), m('3'), m(f('1', '2'))], c: 1, why: 'Height equals diameter.' }
    ]
  },
  quiz: [
    { q: 'With no negative marking you should:', a: ['leave hard questions blank', 'answer every question', 'guess only at the end', 'skip the last five'], c: 1, why: 'A blank scores zero for certain.' },
    { q: 'A question taking over 80 seconds should be:', a: ['finished anyway', 'marked and left for the second pass', 'guessed at once', 'skipped for ever'], c: 1, why: 'It costs two easier ones.' },
    { q: 'A distractor three times the right answer catches:', a: ['a unit error', 'the missing ' + m(f('1', '3')), 'a reading error', 'nothing'], c: 1, why: 'Cones and pyramids.' },
    { q: 'Finding your answer among the options means:', a: ['it is right', 'nothing on its own', 'check nothing', 'move on'], c: 1, why: 'Distractors are built from errors.' },
    { q: 'After marking a practice block, count:', a: ['the score', 'reading, formula and arithmetic errors', 'the time', 'the blanks'], c: 1, why: 'That is what says what to practise.' }
  ],
  practice: {
    easy: [
      ['Volume of a cube of edge ' + m('5'), m('125')],
      ['Space diagonal of that cube', m('5' + sr('3'))],
      ['Surface area of a sphere, ' + m('R = 3'), m('36π')],
      ['Volume of a cone, ' + m('r = 3, h = 4'), m('12π')],
      ['Slant height of that cone', m('5')],
      ['Volume of a prism, ' + m('B = 15, h = 8'), m('120')],
      [m('2000') + ' cm³ in litres', m('2')]
    ],
    med: [
      ['Curved area of a cone, ' + m('r = 3, h = 4'), m('15π')],
      ['Volume of a sphere, ' + m('R = 6'), m('288π')],
      ['Total area of a cylinder, ' + m('r = 2, h = 7'), m('36π')],
      ['Frustum volume, ' + m('R = 4, r = 2, h = 3'), m('28π')],
      ['Sector angle of a cone net, ' + m('r = 3, l = 9'), m('120°')],
      ['Curved area of a hemisphere, ' + m('R = 5'), m('50π')],
      ['Cap of height ' + m('2') + ' on a sphere of radius ' + m('5') + ': curved area', m('20π')]
    ],
    hard: [
      ['Angle of a cube’s space diagonal with the base', m('≈ 35.3°')],
      ['Sphere of area ' + m('100π') + ': its volume', m(f('500π', '3'))],
      ['Similar solids of volumes ' + m('8 : 27') + ': the area ratio', m('4 : 9')],
      ['Least-area closed cylinder: ' + m(f('h', 'r')), m('2')],
      ['A cone of radius ' + m('5') + ' and height ' + m('12') + ': total surface area', m('90π')],
      ['A hemisphere and a cone on the same base of radius ' + m('r') + ' have equal volumes: find ' + m('h'), m('h = 2r')],
      ['A cube and a sphere have equal surface areas: the ratio of their volumes (cube : sphere)', m('1 : ' + sr(f('6', 'π'))) + ' ≈ ' + m('1 : 1.38')]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Time yourself honestly; the timing is the point of the exercise, not the answers.',
  homework: [
    'Work the twenty-question block again under timed conditions and record how many took more than 80 seconds.',
    'For each question you got wrong, say whether the error was in reading, in the formula, or in the arithmetic.',
    'Write out the six distractor types with one example of each from the block.',
    'Write your plan for the 40 minutes of the real paper in three sentences: first pass, second pass, last five minutes.'
  ]
});

/* ============================== 35 ============================== */
G11_GEO.push({
  id: 'g11-35', stream: 'geo', grade: 11, quarter: 4, lessons: '59–60', hours: 2,
  title: 'Control work 4, and work on the mistakes',
  subtitle: 'Every solid of the year in one paper, then a named diagnosis of each slip.',
  uz: 'Geometry 11, Nazorat ishi 4', uzPage: 'pp. 311–314',
  cam: 'IGX 13 review', camPage: 'Core & Extended, pp. 393–396', wb: 'Control paper G4',
  objectives: [
    'Apply the surface-area and volume formulas of the whole year in one assessment.',
    'Handle compound solids, bounds and context correctly.',
    'Classify each lost mark and rewrite the solution in full.',
    'Draw the year’s mensuration as a single map.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Prism', 'Prizma', 'Призма'],
    ['Pyramid', 'Piramida', 'Пирамида'],
    ['Cylinder', 'Silindr', 'Цилиндр'],
    ['Cone', 'Konus', 'Конус'],
    ['Sphere', 'Sfera', 'Сфера'],
    ['Compound solid', 'Murakkab jism', 'Составное тело'],
    ['Optimisation', 'Optimallashtirish', 'Оптимизация']
  ],
  timing: [[3, 'Instructions'], [45, 'The paper'], [12, 'Answers'], [20, 'Diagnosis and rewrite'], [5, 'The map']],
  sections: [
    {
      h: 'The paper — 40 marks, 45 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>A regular hexagonal prism, edge ${m('4')}, height ${m('9')}: total area and volume</td><td class="m">6</td><td>Q II</td></tr>
        <tr><td>2</td><td>A square pyramid, base edge ${m('12')}, height ${m('8')}: apothem, lateral area, volume</td><td class="m">7</td><td>Q III</td></tr>
        <tr><td>3</td><td>A cone of radius ${m('6')} and height ${m('8')}: slant, curved area, volume, sector angle of the net</td><td class="m">7</td><td>Q III</td></tr>
        <tr><td>4</td><td>A ball of volume ${m('972π')}: radius and surface area; then a cap of height ${m('3')}</td><td class="m">6</td><td>Q III</td></tr>
        <tr><td>5</td><td>A silo — cylinder ${m('r = 3, h = 8')} m plus a hemisphere: volume and painted area, base excluded</td><td class="m">7</td><td>Q III–IV</td></tr>
        <tr><td>6</td><td>A closed cylindrical tin of ${m('500')} cm³: the radius of least metal, verified</td><td class="m">7</td><td>Q IV</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks actually go</div>
      Q2 carries one mark for using the apothem in the area and the height in the volume; Q3 one for the
      sector angle; Q5 one for excluding the covered circles; Q6 one for verifying the minimum. Four of
      the forty marks are for one decision each.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>slant for height</td><td class="m">V = ${f('1', '3')}Bl</td><td>volume uses the perpendicular</td></tr>
        <tr><td>height for slant</td><td class="m">S = ${f('1', '2')}Ph</td><td>area uses the apothem</td></tr>
        <tr><td>missing ${m(f('1', '3'))}</td><td class="m">V = Bh</td><td>pyramids and cones are a third</td></tr>
        <tr><td>sphere formulas swapped</td><td class="m">S = ${f('4', '3')}πR³</td><td class="m">S has R², V has R³</td></tr>
        <tr><td>joined faces counted</td><td>adding two whole surface areas</td><td>subtract twice the shared face</td></tr>
        <tr><td>ratios not cubed</td><td class="m">V₁ : V₂ = k</td><td class="m">k, k², k³</td></tr>
        <tr><td>minimum not verified</td><td class="m">f′ = 0</td><td>add ${m('f″ > 0')}</td></tr>
      </tbody></table></div>
      <p>Write the slip's name in the margin of every question that lost a mark, then rewrite the whole
      solution — not the wrong line.</p>`
    },
    {
      h: 'The year as one map',
      html: `<p>Eight boxes, links written as sentences:</p>
      <ul>
        <li><b>coordinates in space</b> → <b>vectors</b> — “a point becomes three numbers”</li>
        <li><b>vectors</b> → <b>the scalar product</b> — “angles without a picture”</li>
        <li><b>prism</b> → <b>${m('V = Bh')}</b> — “uniform cross-section”</li>
        <li><b>cylinder</b> → <b>the same, with ${m('B = πr²')}</b></li>
        <li><b>pyramid and cone</b> → <b>a third of it</b> — “the same base, the same height”</li>
        <li><b>sphere</b> → <b>${m('2 : 3')} with its cylinder</b> — “Archimedes, for both”</li>
        <li><b>compound</b> → <b>add or subtract, and drop the joined faces</b></li>
        <li><b>scale ${m('k')}</b> → <b>${m('k, k², k³')}</b> — “length, area, volume”</li>
      </ul>
      {{fig:cavalieri:Equal slices, equal volumes — the principle under half the boxes above.}}
      <div class="keybox"><div class="klabel">Nine formulas, one page</div>
      ${eq(m('V_prism = Bh') + '  ' + m('V_cyl = πr²h') + '  ' + m('V_pyr = ' + f('1', '3') + 'Bh') + '  ' + m('V_cone = ' + f('1', '3') + 'πr²h') + '  ' + m('V_sph = ' + f('4', '3') + 'πR³'), true)}
      ${eq(m('S_cyl = 2πr(r + h)') + '  ' + m('S_cone = πr(r + l)') + '  ' + m('S_sph = 4πR²') + '  ' + m('V_frus = ' + f('πh', '3') + '(R² + Rr + r²)'), true)}
      If these nine sit on one page in your own handwriting, the annual review needs nothing new.</div>`
    },
    {
      h: 'Looking forward',
      html: `<p>Lessons 61–68 are pure revision: coordinates and vectors, parallelism and perpendicularity,
      all the surfaces and volumes, then the entrance paper and the annual review. Nothing is added; the
      work is to make what exists fast and certain.</p>
      <div class="keybox"><div class="klabel">One habit to carry forward</div>
      The whole year rewarded writing ${m('B')}, ${m('h')} and the shape's name before any arithmetic.
      Keep that habit into the entrance paper, where the question rarely says which solid it is describing
      and the first line of the answer has to.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q2: a square pyramid, base edge ' + m('12') + ', height ' + m('8') + '.',
      steps: [
        ['Base apothem ' + m('6') + '; ' + m('m = ' + sr('64 + 36') + ' = 10') + '.', 'The first right triangle.'],
        [m('S_lat = ' + f('1', '2') + '(48)(10) = 240'), 'Apothem, not height.'],
        [m('B = 144') + ', so ' + m('S_total = 384') + '.', ''],
        [m('V = ' + f('1', '3') + '(144)(8) = 384'), 'Height, not apothem.']
      ],
      ans: m('m = 10') + ', ' + m('S_lat = 240') + ', ' + m('V = 384')
    },
    {
      q: 'Model answer, Q3: a cone of radius ' + m('6') + ' and height ' + m('8') + '.',
      steps: [
        [m('l = ' + sr('36 + 64') + ' = 10'), ''],
        [m('S_curved = π(6)(10) = 60π'), ''],
        [m('V = ' + f('1', '3') + 'π(36)(8) = 96π'), ''],
        [m('θ = 360° × ' + f('6', '10') + ' = 216°'), '']
      ],
      ans: m('l = 10') + ', ' + m('60π') + ', ' + m('96π') + ', ' + m('216°')
    },
    {
      q: 'Model answer, Q5: a silo, cylinder ' + m('r = 3, h = 8') + ' m with a hemisphere, painted above ground.',
      steps: [
        [m('V = π(9)(8) + ' + f('2', '3') + 'π(27) = 72π + 18π = 90π'), m('≈ 283') + ' m³.'],
        ['Curved cylinder ' + m('2π(3)(8) = 48π') + '.', ''],
        ['Hemisphere ' + m('2π(9) = 18π') + '.', 'The two joined circles do not count.'],
        [m('S = 66π ≈ 207') + ' m².', 'Base excluded.']
      ],
      ans: m('90π') + ' ≈ ' + m('283') + ' m³; ' + m('66π') + ' ≈ ' + m('207') + ' m²'
    },
    {
      q: 'Model answer, Q6: a closed tin of ' + m('500') + ' cm³ using least metal.',
      steps: [
        [m('S = 2πr² + ' + f('1000', 'r')), ''],
        [m(f('dS', 'dr') + ' = 4πr − ' + f('1000', 'r²') + ' = 0'), ''],
        [m('r³ = ' + f('250', 'π') + ' ⇒ r ≈ 4.30'), ''],
        [m('S″ > 0') + ', so a minimum; ' + m('h ≈ 8.60 = 2r') + '.', '']
      ],
      ans: m('r ≈ 4.30') + ' cm, ' + m('h ≈ 8.60') + ' cm'
    }
  ],
  modelNote: 'Work Q5 twice — once counting all the faces, once dropping the joined ones — and let the class name the difference.',
  interactive: {
    type: 'quiz',
    title: 'The year in twelve questions',
    hint: 'Three from each quarter.',
    items: [
      { q: 'Volume of a prism:', a: [m('Ph'), m('Bh'), m(f('1', '3') + 'Bh'), m('2Bh')], c: 1, why: 'Uniform cross-section.' },
      { q: 'Volume of a cylinder:', a: [m('2πrh'), m('πr²h'), m('πrh'), m(f('1', '3') + 'πr²h')], c: 1, why: m('B = πr²') + '.' },
      { q: 'Volume of a pyramid:', a: [m('Bh'), m(f('1', '3') + 'Bh'), m(f('1', '2') + 'Bh'), m('3Bh')], c: 1, why: 'A third of the prism.' },
      { q: 'Volume of a cone:', a: [m('πr²h'), m(f('1', '3') + 'πr²h'), m('πrl'), m(f('1', '3') + 'πr²l')], c: 1, why: 'Height, not slant.' },
      { q: 'Lateral area of a regular pyramid:', a: [m(f('1', '2') + 'Ph'), m(f('1', '2') + 'Pm'), m('Pm'), m('Bm')], c: 1, why: 'The apothem.' },
      { q: 'Curved area of a cone:', a: [m('πr²'), m('πrl'), m('πrh'), m('2πrl')], c: 1, why: 'The unrolled sector.' },
      { q: 'Volume of a sphere:', a: [m('4πR²'), m(f('4', '3') + 'πR³'), m(f('2', '3') + 'πR³'), m('πR³')], c: 1, why: 'Cubed.' },
      { q: 'Surface area of a sphere:', a: [m('4πR²'), m(f('4', '3') + 'πR³'), m('2πR²'), m('πR²')], c: 0, why: 'Four great circles.' },
      { q: 'Volume of a frustum of a cone:', a: [m(f('πh', '3') + '(R² + r²)'), m(f('πh', '3') + '(R² + Rr + r²)'), m('πh(R² − r²)'), m(f('πh', '2') + '(R + r)')], c: 1, why: 'Three terms.' },
      { q: 'Joined faces of a compound solid:', a: ['count twice', 'count once', 'do not count', 'are halved'], c: 2, why: 'They are interior.' },
      { q: 'Scale factor ' + m('k') + ' multiplies area by:', a: [m('k'), m('k²'), m('k³'), m('2k')], c: 1, why: 'Two dimensions.' },
      { q: 'Least-metal closed cylinder:', a: [m('h = r'), m('h = 2r'), m('h = ' + f('r', '2')), m('h = 3r')], c: 1, why: 'Height equals diameter.' }
    ]
  },
  quiz: [
    { q: 'Q2 needs the apothem for:', a: ['the volume', 'the lateral area', 'the base', 'nothing'], c: 1, why: m('S_lat = ' + f('1', '2') + 'Pm') + '.' },
    { q: 'Q5 excludes:', a: ['the curved surfaces', 'the two joined circles and the base', 'nothing', 'the hemisphere'], c: 1, why: 'They are covered or on the ground.' },
    { q: 'Q6 needs, beyond ' + m('f′ = 0') + ':', a: ['nothing', 'a check that it is a minimum', 'a second constraint', 'a sketch'], c: 1, why: m('f″ > 0') + '.' },
    { q: 'Lessons 61–68 are:', a: ['new material', 'revision and the entrance paper', 'a project', 'a test only'], c: 1, why: 'Making what exists fast.' }
  ],
  practice: {
    easy: [
      ['Volume of a prism, ' + m('B = 15, h = 8'), m('120')],
      ['Volume of a cylinder, ' + m('r = 2, h = 7'), m('28π')],
      ['Volume of a pyramid, ' + m('B = 144, h = 8'), m('384')],
      ['Volume of a cone, ' + m('r = 6, h = 8'), m('96π')],
      ['Slant of that cone', m('10')],
      ['Radius of a ball of volume ' + m('972π'), m('9')],
      ['Surface area of that ball', m('324π')]
    ],
    med: [
      ['Hexagonal prism, edge ' + m('4') + ', height ' + m('9') + ': volume', m('216' + sr('3')) + ' ≈ ' + m('374')],
      ['Same prism: total area', m('48' + sr('3') + ' + 216') + ' ≈ ' + m('299')],
      ['Square pyramid, base ' + m('12') + ', height ' + m('8') + ': apothem and lateral area', m('10') + ', ' + m('240')],
      ['Same pyramid: volume', m('384')],
      ['Cone ' + m('r = 6, h = 8') + ': curved area and sector angle', m('60π') + ', ' + m('216°')],
      ['Cap of height ' + m('3') + ' on a ball of radius ' + m('9') + ': curved area', m('54π')],
      ['Silo, cylinder ' + m('r = 3, h = 8') + ' plus hemisphere: volume', m('90π') + ' ≈ ' + m('283')]
    ],
    hard: [
      ['Same silo: painted area, base excluded', m('66π') + ' ≈ ' + m('207') + ' m²'],
      ['Closed tin of ' + m('500') + ' cm³: the radius of least metal', m('≈ 4.30') + ' cm'],
      ['Same tin: the least area', m('≈ 349') + ' cm²'],
      ['Cap of height ' + m('3') + ' on a ball of radius ' + m('9') + ': its volume', m(f('π', '3') + '(9)(27 − 3)') + ' = ' + m('72π')],
      ['Two similar cones of volumes ' + m('27') + ' and ' + m('64') + ': the area ratio', m('9 : 16')],
      ['A cone and a hemisphere on the same base of radius ' + m('r') + ' have equal volumes: find ' + m('h'), m('h = 2r')],
      ['A frustum of radii ' + m('R') + ' and ' + m(f('R', '2')) + ': the fraction of the full cone', m(f('7', '8'))]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Bring the nine-formula page and the concept map to Lesson 61.',
  homework: [
    'Rewrite in full every control-work question that lost a mark, naming the slip in the margin.',
    'Write the nine formulas of the year on one page in your own hand, each with a small sketch.',
    'A grain silo is a cylinder of radius ' + m('2.5') + ' m and height ' + m('9') + ' m with a hemispherical top. Find its volume and the area painted above ground.',
    'A closed cylindrical tin holds ' + m('750') + ' cm³. Find the radius that uses least metal, and verify that it is a minimum.'
  ]
});

/* ============================== 36 ============================== */
G11_GEO.push({
  id: 'g11-36', stream: 'geo', grade: 11, quarter: 4, lessons: '61–62', hours: 2,
  title: 'Revision — coordinates and vectors in space [Cambridge revision]',
  subtitle: 'Three numbers for a point, one product for every angle.',
  uz: 'Geometry 11, Chapter I review', uzPage: 'pp. 315–324',
  cam: 'P2/P3 9.1–9.7', camPage: 'Pure Mathematics 2 & 3, pp. 190–223', wb: 'Exercise 9A–9G',
  objectives: [
    'Compute distances, midpoints and vectors in three dimensions.',
    'Use the scalar product to find an angle and to test perpendicularity.',
    'Write the vector equation of a line and decide whether two lines meet.',
    'Find the angle between a line and a plane using the normal.'
  ],
  terms: [
    ['Coordinates in space', 'Fazoviy koordinatalar', 'Координаты в пространстве'],
    ['Position vector', 'Radius-vektor', 'Радиус-вектор'],
    ['Unit vector', 'Birlik vektor', 'Единичный вектор'],
    ['Scalar (dot) product', 'Skalyar ko‘paytma', 'Скалярное произведение'],
    ['Perpendicular vectors', 'Perpendikulyar vektorlar', 'Перпендикулярные векторы'],
    ['Vector equation of a line', 'To‘g‘ri chiziqning vektor tenglamasi', 'Векторное уравнение прямой'],
    ['Direction vector', 'Yo‘naltiruvchi vektor', 'Направляющий вектор'],
    ['Normal vector', 'Normal vektor', 'Вектор нормали'],
    ['Skew lines', 'Ayqash chiziqlar', 'Скрещивающиеся прямые'],
    ['Parameter', 'Parametr', 'Параметр']
  ],
  timing: [[15, 'Points and distances'], [25, 'The scalar product'], [25, 'Lines in space'], [20, 'Planes and normals'], [15, 'Homework']],
  sections: [
    {
      h: 'Points and distances',
      html: `<p>Every plane formula gains a third term, and nothing else changes.</p>
      ${eq(m('AB = ' + sr('(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²')) + '     ' + m('M = (' + f('x₁+x₂', '2') + ', ' + f('y₁+y₂', '2') + ', ' + f('z₁+z₂', '2') + ')'), true)}
      {{fig:dist3d:The space diagonal of a box — two applications of Pythagoras, one after the other.}}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">A</th><th class="m">B</th><th class="m">AB</th><th class="m">M</th></tr></thead>
      <tbody>
        <tr><td class="m">(0,0,0)</td><td class="m">(2,3,6)</td><td class="m">7</td><td class="m">(1, 1.5, 3)</td></tr>
        <tr><td class="m">(1,2,3)</td><td class="m">(4,6,15)</td><td class="m">13</td><td class="m">(2.5, 4, 9)</td></tr>
        <tr><td class="m">(2,−1,4)</td><td class="m">(6,2,8)</td><td class="m">${sr('41')}</td><td class="m">(4, 0.5, 6)</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A box of edges ${m('a, b, c')}</div>
      Its space diagonal is ${m(sr('a² + b² + c²'))} — the distance formula with the origin at one
      corner. Every three-dimensional distance question is this box, drawn somewhere.</div>`
    },
    {
      h: 'The scalar product',
      html: `${eq(m('u·v = x₁x₂ + y₁y₂ + z₁z₂ = |u||v| cos θ'), true)}
      {{fig:scalarAngle:Two vectors and the angle between them — one product answers it.}}
      ${eq(m('cos θ = ' + f('u·v', '|u||v|')) + '     ' + m('u ⟂ v ⇔ u·v = 0'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">u</th><th class="m">v</th><th class="m">u·v</th><th class="m">θ</th></tr></thead>
      <tbody>
        <tr><td class="m">(1,2,2)</td><td class="m">(2,−1,2)</td><td class="m">4</td><td class="m">≈ 63.6°</td></tr>
        <tr><td class="m">(1,0,0)</td><td class="m">(0,1,0)</td><td class="m">0</td><td class="m">90°</td></tr>
        <tr><td class="m">(3,4,0)</td><td class="m">(6,8,0)</td><td class="m">50</td><td class="m">0°</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Why this replaces the whole of Grade 10’s angle work</div>
      In Grade 10, an angle in space needed a projection, a right triangle and a careful drawing. Here it
      needs one dot product and one division. The picture is still worth drawing — but it is no longer
      the method.</div>
      <div class="warn"><span class="wl">${m('u·v')} is a number, not a vector</span>
      Writing ${m('u·v = (2, 4, 4)')} confuses the scalar product with a scaling. The result of a dot
      product is always a single number, and its <b>sign</b> alone tells you whether the angle is acute
      (${m('> 0')}), right (${m('= 0')}) or obtuse (${m('< 0')}).</div>`
    },
    {
      h: 'Lines in space',
      html: `${eq(m('r = a + t d') + '   — through the point ' + m('a') + ', in the direction ' + m('d'), true)}
      {{fig:lineVectorEq:A point and a direction — every other point of the line is a + t d.}}
      <p>Two lines in space may be parallel, may meet, or may be <b>skew</b>. The test is a system:</p>
      <ol>
        <li>if ${m('d₁')} is a multiple of ${m('d₂')}, the lines are <b>parallel</b>;</li>
        <li>otherwise set ${m('a₁ + t d₁ = a₂ + s d₂')} — three equations in ${m('t')} and ${m('s')};</li>
        <li>solve two of them; if the third is satisfied the lines <b>meet</b>, and if not they are
        <b>skew</b>.</li>
      </ol>
      <div class="keybox"><div class="klabel">The third equation is the whole test</div>
      Two equations in two unknowns almost always have a solution. It is the <b>third</b> that decides,
      and forgetting to check it is why skew lines get reported as intersecting. Always substitute
      back.</div>
      <p>The angle between two lines is the angle between their direction vectors — taken as the acute
      one, so use ${m('|d₁·d₂|')}.</p>`
    },
    {
      h: 'Planes and normals',
      html: `${eq(m('n·r = n·a') + ',  that is  ' + m('ax + by + cz = d') + '  with normal ' + m('n = (a, b, c)'), true)}
      {{fig:perpLinePlane:The normal — perpendicular to every line of the plane.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Quantity</th><th>Formula</th></tr></thead>
      <tbody>
        <tr><td>angle between two planes</td><td class="m">cos θ = ${f('|n₁·n₂|', '|n₁||n₂|')}</td></tr>
        <tr><td>angle between a line and a plane</td><td class="m">sin θ = ${f('|d·n|', '|d||n|')}</td></tr>
        <tr><td>distance from a point to a plane</td><td class="m">${f('|n·p − d|', '|n|')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Line and plane uses <b>sine</b>, not cosine</span>
      The dot product gives the angle to the <b>normal</b>; the angle to the plane is its complement. So
      the formula carries ${m('sin')}, not ${m('cos')}. Using cosine gives the complement of the right
      answer — and ${m('90° − θ')} is rarely one of the options.</div>
      <p><b>Example.</b> The angle between ${m('d = (1, 2, 2)')} and the plane ${m('2x − y + 2z = 5')}:
      ${m('n = (2, −1, 2)')}, ${m('d·n = 2 − 2 + 4 = 4')}, ${m('|d| = |n| = 3')}, so
      ${m('sin θ = ' + f('4', '9'))} and ${m('θ ≈ 26.4°')}.</p>`
    }
  ],
  examples: [
    {
      q: 'Find ' + m('|AB|') + ' and the midpoint for ' + m('A(1, 2, 3)') + ' and ' + m('B(4, 6, 15)') + '.',
      steps: [
        [m('AB = (3, 4, 12)'), ''],
        [m('|AB| = ' + sr('9 + 16 + 144') + ' = 13'), ''],
        [m('M = (2.5, 4, 9)'), '']
      ],
      ans: m('13') + ' and ' + m('(2.5, 4, 9)')
    },
    {
      q: 'Find the angle between ' + m('u = (1, 2, 2)') + ' and ' + m('v = (2, −1, 2)') + '.',
      steps: [
        [m('u·v = 2 − 2 + 4 = 4'), ''],
        [m('|u| = |v| = 3'), ''],
        [m('cos θ = ' + f('4', '9')), ''],
        [m('θ ≈ 63.6°'), '']
      ],
      ans: m('≈ 63.6°')
    },
    {
      q: 'Do the lines ' + m('r = (1,0,1) + t(2,1,1)') + ' and ' + m('r = (0,1,2) + s(1,−1,0)') + ' meet?',
      steps: [
        [m('1 + 2t = s') + ', ' + m('t = 1 − s') + ', ' + m('1 + t = 2'), ''],
        ['From the third, ' + m('t = 1') + '; from the second, ' + m('s = 0') + '.', ''],
        ['Check the first: ' + m('1 + 2 = 3 ≠ 0') + '.', 'It fails.'],
        ['The lines are skew.', '']
      ],
      ans: 'Skew — the third equation is not satisfied'
    },
    {
      q: 'Find the angle between the line ' + m('r = a + t(1, 2, 2)') + ' and the plane ' + m('2x − y + 2z = 5') + '.',
      steps: [
        [m('n = (2, −1, 2)'), ''],
        [m('d·n = 2 − 2 + 4 = 4'), ''],
        [m('sin θ = ' + f('4', '3 × 3') + ' = ' + f('4', '9')), 'Sine, because ' + m('n') + ' is the normal.'],
        [m('θ ≈ 26.4°'), '']
      ],
      ans: m('≈ 26.4°')
    }
  ],
  modelNote: 'Use three metre rules taped at a corner of the room as the axes; every coordinate becomes a physical position.',
  interactive: {
    type: 'vectors',
    title: 'Vectors and the angle between them',
    hint: 'Drag either vector and watch the dot product change sign.'
  },
  quiz: [
    { q: m('|AB|') + ' in space is:', a: [m(sr('Δx² + Δy²')), m(sr('Δx² + Δy² + Δz²')), m('Δx + Δy + Δz'), m('ΔxΔyΔz')], c: 1, why: 'Pythagoras twice.' },
    { q: m('u·v') + ' is:', a: ['a vector', 'a number', 'an angle', 'a length'], c: 1, why: 'A scalar.' },
    { q: m('u ⟂ v') + ' when:', a: [m('u·v = 1'), m('u·v = 0'), m('u = v'), m('|u| = |v|')], c: 1, why: m('cos 90° = 0') + '.' },
    { q: 'A negative dot product means the angle is:', a: ['acute', 'right', 'obtuse', 'zero'], c: 2, why: m('cos θ < 0') + '.' },
    { q: 'A line in space is written:', a: [m('y = mx + c'), m('r = a + t d'), m('ax + by = c'), m('n·r = d')], c: 1, why: 'Point plus direction.' },
    { q: 'Two lines are skew when:', a: ['they are parallel', 'two of three equations hold but not the third', 'they meet', 'they coincide'], c: 1, why: 'No common point.' },
    { q: 'The angle between a line and a plane uses:', a: [m('cos'), m('sin'), m('tan'), m('cot')], c: 1, why: 'The normal is perpendicular to the plane.' }
  ],
  practice: {
    easy: [
      [m('|AB|') + ' for ' + m('A(0,0,0), B(2,3,6)'), m('7')],
      ['Midpoint of ' + m('(1,2,3)') + ' and ' + m('(4,6,15)'), m('(2.5, 4, 9)')],
      [m('(1,2,2)·(2,−1,2)'), m('4')],
      [m('|(3,4,12)|'), m('13')],
      ['Are ' + m('(1,0,0)') + ' and ' + m('(0,1,0)') + ' perpendicular?', 'Yes — dot product ' + m('0')],
      ['Space diagonal of a ' + m('3 × 4 × 12') + ' box', m('13')],
      ['Direction vector of ' + m('r = (1,0,1) + t(2,1,1)'), m('(2, 1, 1)')]
    ],
    med: [
      ['Angle between ' + m('(1,2,2)') + ' and ' + m('(2,−1,2)'), m('≈ 63.6°')],
      [m('|AB|') + ' for ' + m('A(2,−1,4), B(6,2,8)'), m(sr('41')) + ' ≈ ' + m('6.40')],
      ['Unit vector along ' + m('(2,3,6)'), m(f('1', '7') + '(2,3,6)')],
      ['Do ' + m('r = (1,0,1) + t(2,1,1)') + ' and ' + m('r = (0,1,2) + s(1,−1,0)') + ' meet?', 'No — skew'],
      ['Angle between the line ' + m('d = (1,2,2)') + ' and the plane ' + m('2x − y + 2z = 5'), m('≈ 26.4°')],
      ['Normal of the plane ' + m('3x + 4y − 12z = 7'), m('(3, 4, −12)')],
      ['Distance from ' + m('(1, 1, 1)') + ' to ' + m('2x − y + 2z = 5'), m(f('2', '3')) + ' ≈ ' + m('0.667')]
    ],
    hard: [
      ['Angle between the planes ' + m('x + y = 1') + ' and ' + m('y + z = 1'), m('60°')],
      ['Shortest distance between the two skew lines above', m(f('3', sr('11'))) + ' ≈ ' + m('0.905')],
      ['A cube of edge ' + m('a') + ' with a vertex at the origin: the angle between two space diagonals', m('≈ 70.5°')],
      ['Find ' + m('k') + ' so that ' + m('(1, k, 2)') + ' is perpendicular to ' + m('(3, −1, 1)'), m('k = 5')],
      ['The plane through ' + m('(1,0,0), (0,1,0), (0,0,1)'), m('x + y + z = 1')],
      ['Angle between the line ' + m('r = t(1,1,1)') + ' and that plane', m('90°')],
      ['Show that ' + m('(1,2,2)') + ', ' + m('(2,1,−2)') + ' and ' + m('(2,−2,1)') + ' are mutually perpendicular', 'All three dot products vanish']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Sketch the box for every distance question; the third coordinate is easy to lose.',
  homework: [
    'Find ' + m('|AB|') + ' and the midpoint for ' + m('A(−1, 3, 2)') + ' and ' + m('B(5, −1, 10)') + '.',
    'Find the angle between ' + m('(2, 1, 2)') + ' and ' + m('(1, −2, 2)') + ', and say whether it is acute or obtuse.',
    'Decide whether the lines ' + m('r = (1,1,0) + t(1,2,1)') + ' and ' + m('r = (2,0,1) + s(2,1,−1)') + ' meet, are parallel or are skew.',
    'Find the angle between the line with direction ' + m('(2, 2, 1)') + ' and the plane ' + m('x + 2y + 2z = 9') + '.',
    'Find ' + m('k') + ' so that ' + m('(3, k, −2)') + ' is perpendicular to ' + m('(1, 4, 5)') + ', and check with the dot product.'
  ]
});

/* ============================== 37 ============================== */
G11_GEO.push({
  id: 'g11-37', stream: 'geo', grade: 11, quarter: 4, lessons: '63–64', hours: 2,
  title: 'Revision — parallelism and perpendicularity in space',
  subtitle: 'The Grade 10 statements, revisited with a year of solids behind them.',
  uz: 'Geometry 10–11 review', uzPage: 'pp. 325–334',
  cam: 'Spatial review', camPage: 'Pure Mathematics 2 & 3, pp. 281–284', wb: 'Revision set G3',
  objectives: [
    'State the positions of lines and planes, and the criteria for parallelism and perpendicularity.',
    'Use the three-perpendiculars theorem to reduce a space problem to a plane one.',
    'Compute angles between lines, between a line and a plane, and between planes.',
    'Choose between the synthetic and the vector method for each question.'
  ],
  terms: [
    ['Skew lines', 'Ayqash to‘g‘ri chiziqlar', 'Скрещивающиеся прямые'],
    ['Parallel planes', 'Parallel tekisliklar', 'Параллельные плоскости'],
    ['Perpendicular to a plane', 'Tekislikka perpendikulyar', 'Перпендикулярная плоскости'],
    ['Three perpendiculars theorem', 'Uch perpendikulyar teoremasi', 'Теорема о трёх перпендикулярах'],
    ['Dihedral angle', 'Ikki yoqli burchak', 'Двугранный угол'],
    ['Linear angle', 'Chiziqli burchak', 'Линейный угол'],
    ['Orthogonal projection', 'Ortogonal proyeksiya', 'Ортогональная проекция'],
    ['Synthetic method', 'Sintetik usul', 'Синтетический метод'],
    ['Vector method', 'Vektor usuli', 'Векторный метод'],
    ['Common perpendicular', 'Umumiy perpendikulyar', 'Общий перпендикуляр']
  ],
  timing: [[15, 'The statements'], [25, 'Angles, both ways'], [25, 'Distances'], [20, 'Choosing a method'], [15, 'Homework']],
  sections: [
    {
      h: 'The statements',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>Condition</th></tr></thead>
      <tbody>
        <tr><td>a line is parallel to a plane</td><td>it is parallel to some line <b>in</b> the plane</td></tr>
        <tr><td>two planes are parallel</td><td>two <b>intersecting</b> lines of one are parallel to two of the other</td></tr>
        <tr><td>a line is perpendicular to a plane</td><td>it is perpendicular to two <b>intersecting</b> lines of it</td></tr>
        <tr><td>two planes are perpendicular</td><td>one contains a line perpendicular to the other</td></tr>
        <tr><td>three perpendiculars</td><td>a line in a plane ⟂ an oblique ⇔ ⟂ its projection</td></tr>
      </tbody></table></div>
      {{fig:threePerp:The theorem that turns a space problem into a plane one.}}
      <div class="warn"><span class="wl">“Intersecting” appears twice, and is essential both times</span>
      Two <i>parallel</i> lines of one plane parallel to two of another prove nothing — a line and a plane
      through it satisfy that with no parallelism at all. The same word carries the same weight in the
      perpendicularity criterion.</div>`
    },
    {
      h: 'Angles, both ways',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Angle</th><th>Synthetic method</th><th>Vector method</th></tr></thead>
      <tbody>
        <tr><td>two lines</td><td>translate one to meet the other</td><td class="m">cos θ = ${f('|d₁·d₂|', '|d₁||d₂|')}</td></tr>
        <tr><td>line and plane</td><td>angle with the projection</td><td class="m">sin θ = ${f('|d·n|', '|d||n|')}</td></tr>
        <tr><td>two planes</td><td>the linear angle at the edge</td><td class="m">cos θ = ${f('|n₁·n₂|', '|n₁||n₂|')}</td></tr>
      </tbody></table></div>
      {{fig:dihedralAngle:The linear angle — both rays perpendicular to the edge.}}
      <p><b>The same question, both ways.</b> In a cube ${m('ABCDA₁B₁C₁D₁')} of edge ${m('1')}, the angle
      between ${m('AC₁')} and the base:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Synthetic</th><th>Vector</th></tr></thead>
      <tbody>
        <tr><td>projection ${m('AC = ' + sr('2'))}, height ${m('1')}, ${m('tan θ = ' + f('1', sr('2')))}</td><td>${m('d = (1,1,1)')}, ${m('n = (0,0,1)')}, ${m('sin θ = ' + f('1', sr('3')))}</td></tr>
        <tr><td class="m">θ ≈ 35.3°</td><td class="m">θ ≈ 35.3°</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Both give the same number, and both are worth full marks</div>
      The synthetic method needs a good drawing; the vector method needs good coordinates. Choose by which
      you can set up faster — but check the vector answer against a rough sketch, because a sign error in
      ${m('n')} is invisible in the algebra and obvious in the picture.</div>`
    },
    {
      h: 'Distances',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Distance</th><th>How</th></tr></thead>
      <tbody>
        <tr><td>point to plane</td><td>the perpendicular; or ${m(f('|n·p − d|', '|n|'))}</td></tr>
        <tr><td>point to line</td><td>the perpendicular in the plane containing both</td></tr>
        <tr><td>parallel planes</td><td>any point of one to the other</td></tr>
        <tr><td>skew lines</td><td>the common perpendicular</td></tr>
      </tbody></table></div>
      {{fig:orthoProjection:Every distance in space is the length of one perpendicular.}}
      <p><b>Standard results in a cube of edge ${m('a')}.</b></p>
      <div class="tablewrap"><table>
      <thead><tr><th>Distance</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td>between two opposite faces</td><td class="m">a</td></tr>
        <tr><td>between two skew edges</td><td class="m">a</td></tr>
        <tr><td>from a vertex to the far space diagonal</td><td class="m">${f('a' + sr('6'), '3')}</td></tr>
        <tr><td>from the centre to a face</td><td class="m">${f('a', '2')}</td></tr>
        <tr><td>from a vertex to the plane ${m('A₁BD')}</td><td class="m">${f('a' + sr('3'), '3')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The volume trick for a point-to-plane distance</div>
      For a tetrahedron, ${m('V = ' + f('1', '3') + 'Bh')} gives ${m('h = ' + f('3V', 'B'))}. Computing the
      volume two ways — once with an easy base, once with the awkward one — finds the distance without any
      construction at all. It is the fastest route in almost every cube question.</div>`
    },
    {
      h: 'Choosing a method',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>The question gives</th><th>Prefer</th><th>Because</th></tr></thead>
      <tbody>
        <tr><td>a cube or a box</td><td>vectors</td><td>the coordinates write themselves</td></tr>
        <tr><td>a proof, no numbers</td><td>synthetic</td><td>the criteria are the argument</td></tr>
        <tr><td>a regular pyramid</td><td>synthetic</td><td>one right triangle answers it</td></tr>
        <tr><td>a plane by an equation</td><td>vectors</td><td>the normal is already there</td></tr>
        <tr><td>skew lines</td><td>vectors</td><td>the common perpendicular is hard to draw</td></tr>
        <tr><td>a distance in a cube</td><td>the volume trick</td><td>no construction needed</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">One sentence to remember the whole revision by</div>
      Every three-dimensional problem is solved by finding the one right triangle it contains — or, in
      vector form, the one dot product it depends on. Two methods, one idea: reduce the space question
      to something two-dimensional.</div>`
    }
  ],
  examples: [
    {
      q: 'In a cube of edge ' + m('1') + ', find the angle between ' + m('AC₁') + ' and the base, both ways.',
      steps: [
        ['Synthetic: projection ' + m('AC = ' + sr('2')) + ', height ' + m('1') + '.', m('tan θ = ' + f('1', sr('2')))],
        ['Vector: ' + m('d = (1,1,1)') + ', ' + m('n = (0,0,1)') + '.', ''],
        [m('sin θ = ' + f('1', sr('3'))), ''],
        [m('θ ≈ 35.3°'), 'Both agree.']
      ],
      ans: m('≈ 35.3°')
    },
    {
      q: 'In a cube of edge ' + m('a') + ', find the distance from ' + m('A') + ' to the plane ' + m('A₁BD') + '.',
      steps: [
        ['Tetrahedron ' + m('AA₁BD') + ': ' + m('V = ' + f('1', '6') + 'a³') + '.', 'Three mutually perpendicular edges.'],
        ['Face ' + m('A₁BD') + ' is equilateral of side ' + m('a' + sr('2')) + '.', ''],
        [m('B = ' + f(sr('3'), '4') + '(2a²) = ' + f('a²' + sr('3'), '2')), ''],
        [m('h = ' + f('3V', 'B') + ' = ' + f('a', sr('3')) + ' = ' + f('a' + sr('3'), '3')), 'The volume trick.']
      ],
      ans: m(f('a' + sr('3'), '3')) + ' ≈ ' + m('0.577a')
    },
    {
      q: 'Find the angle between the planes ' + m('x + y = 1') + ' and ' + m('y + z = 1') + '.',
      steps: [
        [m('n₁ = (1,1,0)') + ', ' + m('n₂ = (0,1,1)'), ''],
        [m('n₁·n₂ = 1'), ''],
        [m('cos θ = ' + f('1', '2')), ''],
        [m('θ = 60°'), '']
      ],
      ans: m('60°')
    },
    {
      q: 'A point is ' + m('12') + ' cm from a plane. Two obliques of ' + m('13') + ' and ' + m('20') + ' cm are drawn. Compare their projections and the angles they make with the plane.',
      steps: [
        ['Projections ' + m('5') + ' and ' + m('16') + '.', m(sr('169 − 144')) + ' and ' + m(sr('400 − 144')) + '.'],
        [m('sin θ₁ = ' + f('12', '13') + ' ⇒ θ₁ ≈ 67.4°'), ''],
        [m('sin θ₂ = ' + f('12', '20') + ' ⇒ θ₂ ≈ 36.9°'), ''],
        ['The longer oblique makes the smaller angle.', '']
      ],
      ans: m('5') + ' and ' + m('16') + ' cm; ' + m('≈ 67.4°') + ' and ' + m('≈ 36.9°')
    }
  ],
  modelNote: 'Set up the cube with coordinates on the board and solve one question twice; the class times both methods.',
  interactive: {
    type: 'space3d',
    title: 'The cube, its diagonals and its planes',
    hint: 'Turn it and read each angle off the projection.'
  },
  quiz: [
    { q: 'A line ⟂ to a plane is ⟂ to:', a: ['one line of it', 'two intersecting lines of it, and then all', 'two parallel lines', 'the normal'], c: 1, why: 'The criterion.' },
    { q: 'The angle to a plane uses the vector formula with:', a: [m('cos'), m('sin'), m('tan'), m('cot')], c: 1, why: 'The normal is perpendicular to the plane.' },
    { q: 'The distance from a vertex of a cube of edge ' + m('a') + ' to the plane ' + m('A₁BD') + ':', a: [m(f('a', '2')), m(f('a' + sr('3'), '3')), m(f('a' + sr('2'), '2')), m('a')], c: 1, why: 'The volume trick.' },
    { q: 'For a cube question, the faster method is usually:', a: ['synthetic', 'vectors', 'trial', 'neither'], c: 1, why: 'The coordinates write themselves.' },
    { q: 'For a proof with no numbers, prefer:', a: ['vectors', 'the synthetic criteria', 'coordinates', 'estimation'], c: 1, why: 'The criteria are the argument.' },
    { q: 'The longer oblique from a point makes:', a: ['the larger angle', 'the smaller angle', 'the same angle', 'a right angle'], c: 1, why: 'Its projection is longer.' }
  ],
  practice: {
    easy: [
      ['Three positions of two lines in space', 'Intersecting, parallel, skew'],
      ['A line ⟂ to two intersecting lines of a plane is:', 'Perpendicular to the plane'],
      ['Space diagonal of a cube of edge ' + m('a'), m('a' + sr('3'))],
      ['Face diagonal of the same', m('a' + sr('2'))],
      ['Projection of a ' + m('13') + ' oblique from a point ' + m('12') + ' away', m('5')],
      ['Distance between two opposite faces of a cube of edge ' + m('a'), m('a')],
      ['Normal of ' + m('x + y = 1'), m('(1, 1, 0)')]
    ],
    med: [
      ['Angle between ' + m('AC₁') + ' and the base of a cube', m('≈ 35.3°')],
      ['Angle between the planes ' + m('x + y = 1') + ' and ' + m('y + z = 1'), m('60°')],
      ['Distance from a vertex of a cube of edge ' + m('a') + ' to the plane ' + m('A₁BD'), m(f('a' + sr('3'), '3'))],
      ['Angles of obliques ' + m('13') + ' and ' + m('20') + ' from a point ' + m('12') + ' from a plane', m('≈ 67.4°') + ', ' + m('≈ 36.9°')],
      ['Angle between two space diagonals of a cube', m('≈ 70.5°')],
      ['Distance between two skew edges of a cube of edge ' + m('a'), m('a')],
      ['Dihedral angle ' + m('ABC₁') + ' with the base of a cube', m('45°')]
    ],
    hard: [
      ['Distance from a vertex of a cube of edge ' + m('a') + ' to the far space diagonal', m(f('a' + sr('6'), '3'))],
      ['A regular tetrahedron of edge ' + m('a') + ': the angle between a face and the base', m('≈ 70.5°')],
      ['Same tetrahedron: the distance from a vertex to the opposite face', m(f('a' + sr('6'), '3'))],
      ['A regular square pyramid, base ' + m('12') + ', height ' + m('8') + ': the dihedral angle along a base edge', m('≈ 53.1°')],
      ['Same pyramid: the angle of a lateral edge with the base', m('≈ 43.3°')],
      ['Shortest distance between ' + m('r = t(1,0,0)') + ' and ' + m('r = (0,1,1) + s(0,1,0)'), m('1')],
      ['Prove that the three face diagonals from one vertex of a cube are not coplanar', 'Their scalar triple product is ' + m('−2a³ ≠ 0')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Solve at least two questions by both methods and record which was faster.',
  homework: [
    'State the five criteria of the first table, each with a sketch.',
    'In a cube of edge ' + m('6') + ' cm, find the angle between the space diagonal and the base by both methods.',
    'Find the angle between the planes ' + m('2x − y + z = 3') + ' and ' + m('x + y + 2z = 1') + '.',
    'A point is ' + m('9') + ' cm from a plane; obliques of ' + m('15') + ' and ' + m('41') + ' cm are drawn. Find both projections and both angles.',
    'Find the distance from a vertex of a cube of edge ' + m('4') + ' cm to the plane through the three adjacent vertices, using the volume trick.'
  ]
});

/* ============================== 38 ============================== */
G11_GEO.push({
  id: 'g11-38', stream: 'geo', grade: 11, quarter: 4, lessons: '65–66', hours: 2,
  title: 'Revision — surface areas and volumes of all the solids',
  subtitle: 'Nine formulas, one page, and the three questions that decide which of them a problem wants.',
  uz: 'Geometry 11, full mensuration review', uzPage: 'pp. 335–344',
  cam: 'IGX 13.x full review', camPage: 'Core & Extended, pp. 397–404', wb: 'Revision set G4',
  objectives: [
    'Recall and apply every surface-area and volume formula of the two-year course.',
    'Decide from the wording which measure a problem wants.',
    'Handle compound and hollow solids, and scale factors.',
    'Work a mixed set at examination pace.'
  ],
  terms: [
    ['Prism', 'Prizma', 'Призма'],
    ['Cylinder', 'Silindr', 'Цилиндр'],
    ['Pyramid', 'Piramida', 'Пирамида'],
    ['Cone', 'Konus', 'Конус'],
    ['Frustum', 'Kesik jism', 'Усечённое тело'],
    ['Sphere', 'Sfera', 'Сфера'],
    ['Lateral surface', 'Yon sirt', 'Боковая поверхность'],
    ['Total surface', 'To‘la sirt', 'Полная поверхность'],
    ['Scale factor', 'O‘xshashlik koeffitsiyenti', 'Коэффициент подобия'],
    ['Compound solid', 'Murakkab jism', 'Составное тело']
  ],
  timing: [[15, 'The nine formulas'], [20, 'The three questions'], [25, 'Compound and hollow'], [25, 'Scale factors'], [15, 'A mixed set']],
  sections: [
    {
      h: 'The nine formulas',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Solid</th><th>Volume</th><th>Lateral / curved</th><th>Total</th></tr></thead>
      <tbody>
        <tr><td>prism</td><td class="m">Bh</td><td class="m">Ph</td><td class="m">2B + Ph</td></tr>
        <tr><td>cylinder</td><td class="m">πr²h</td><td class="m">2πrh</td><td class="m">2πr(r + h)</td></tr>
        <tr><td>pyramid (regular)</td><td class="m">${f('1', '3')}Bh</td><td class="m">${f('1', '2')}Pm</td><td class="m">B + ${f('1', '2')}Pm</td></tr>
        <tr><td>cone</td><td class="m">${f('1', '3')}πr²h</td><td class="m">πrl</td><td class="m">πr(r + l)</td></tr>
        <tr><td>frustum of a cone</td><td class="m">${f('πh', '3')}(R² + Rr + r²)</td><td class="m">πl(R + r)</td><td>+ two circles</td></tr>
        <tr><td>sphere</td><td class="m">${f('4', '3')}πR³</td><td class="m">4πR²</td><td class="m">4πR²</td></tr>
        <tr><td>hemisphere</td><td class="m">${f('2', '3')}πR³</td><td class="m">2πR²</td><td class="m">3πR²</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Three patterns worth more than the nine lines</div>
      <ul>
        <li>Every <b>pointed</b> solid is a third of the matching flat-topped one: ${m(f('1', '3'))} for
        pyramid and cone.</li>
        <li>Every <b>lateral</b> area is “perimeter times a length, halved if pointed”:
        ${m('Ph')} and ${m(f('1', '2') + 'Pm')}; ${m('2πrh')} and ${m('πrl')}.</li>
        <li>Every <b>curved</b> area of a cone or pyramid uses the <b>slant</b>; every volume uses the
        <b>height</b>.</li>
      </ul>
      Learn the three patterns and the nine formulas rebuild themselves.</div>`
    },
    {
      h: 'The three questions',
      html: `<div class="keybox"><div class="klabel">Before choosing a formula</div>
      <ol>
        <li><b>Volume or area?</b> The words are “hold”, “fill”, “weigh” against “paint”, “cover”,
        “label”.</li>
        <li><b>Which faces?</b> Open or closed, solid or hollow, standing on the ground or not.</li>
        <li><b>Which length?</b> Height for volume, slant for curved area, radius not diameter.</li>
      </ol></div>
      <div class="tablewrap"><table>
      <thead><tr><th>Wording</th><th>Formula</th></tr></thead>
      <tbody>
        <tr><td>“a label around a tin”</td><td class="m">2πrh</td></tr>
        <tr><td>“a lid for a tin”</td><td class="m">πr²</td></tr>
        <tr><td>“the canvas of a conical tent, no floor”</td><td class="m">πrl</td></tr>
        <tr><td>“the concrete in a solid pyramid”</td><td class="m">${f('1', '3')}Bh</td></tr>
        <tr><td>“the water in a hemispherical bowl”</td><td class="m">${f('2', '3')}πR³</td></tr>
        <tr><td>“the glass in a hollow sphere”</td><td class="m">${f('4', '3')}π(R³ − r³)</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'Compound and hollow',
      html: `${eq(m('V_compound = V₁ + V₂') + '     ' + m('S_compound = S₁ + S₂ − 2 × (shared face)'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Object</th><th>Volume</th><th>Outside area</th></tr></thead>
      <tbody>
        <tr><td>silo: cylinder + hemisphere</td><td class="m">πr²h + ${f('2', '3')}πr³</td><td class="m">2πrh + 2πr² (+ base?)</td></tr>
        <tr><td>ice-cream: cone + hemisphere</td><td class="m">${f('1', '3')}πr²h + ${f('2', '3')}πr³</td><td class="m">πrl + 2πr²</td></tr>
        <tr><td>pipe: cylinder − cylinder</td><td class="m">π(R² − r²)L</td><td class="m">2π(R + r)L + 2 rings</td></tr>
        <tr><td>hollow sphere</td><td class="m">${f('4', '3')}π(R³ − r³)</td><td class="m">4π(R² + r²)</td></tr>
      </tbody></table></div>
      {{fig:sphereSection:A plane cut through a solid of revolution — the shared face is always a circle.}}
      <div class="warn"><span class="wl">The two shared circles vanish, not one</span>
      When a hemisphere sits on a cylinder, the cylinder's top circle and the hemisphere's flat face are
      both internal. Subtracting only one of them leaves ${m('πr²')} too much every time.</div>`
    },
    {
      h: 'Scale factors, and a mixed set',
      html: `${eq(m('length × k') + '     ' + m('area × k²') + '     ' + m('volume × k³'), true)}
      {{fig:similarSolids:One scale factor, three different powers.}}
      <p>Read backwards this is just as useful: from a volume ratio take the cube root to get ${m('k')},
      then square it for areas.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>№</th><th>Question</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">1</td><td>Volume of a cone, ${m('r = 6, h = 8')}</td><td class="m">96π</td></tr>
        <tr><td class="m">2</td><td>Total area of that cone</td><td class="m">96π</td></tr>
        <tr><td class="m">3</td><td>Volume of a sphere of radius ${m('9')}</td><td class="m">972π</td></tr>
        <tr><td class="m">4</td><td>Surface area of that sphere</td><td class="m">324π</td></tr>
        <tr><td class="m">5</td><td>Volume of a square pyramid, base ${m('10')}, height ${m('12')}</td><td class="m">400</td></tr>
        <tr><td class="m">6</td><td>Its lateral area</td><td class="m">260</td></tr>
        <tr><td class="m">7</td><td>Frustum, ${m('R = 5, r = 3, h = 6')}</td><td class="m">98π</td></tr>
        <tr><td class="m">8</td><td>Two similar solids, areas ${m('9 : 25')}: volume ratio</td><td class="m">27 : 125</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Question 2 is the trap</div>
      A cone with ${m('r = 6')} and ${m('h = 8')} has ${m('l = 10')}, so its total area is
      ${m('πr(r + l) = 96π')} — numerically equal to its volume, purely by coincidence of these numbers.
      Recognising that the two answers <b>should</b> differ in units is the check that catches a formula
      used in the wrong place.</div>`
    }
  ],
  examples: [
    {
      q: 'A cone has ' + m('r = 6') + ' and ' + m('h = 8') + '. Find its volume and total surface area.',
      steps: [
        [m('l = ' + sr('36 + 64') + ' = 10'), ''],
        [m('V = ' + f('1', '3') + 'π(36)(8) = 96π'), 'Height.'],
        [m('S = π(6)(6 + 10) = 96π'), 'Slant.'],
        ['Equal numbers, different units — cm³ against cm².', '']
      ],
      ans: m('96π') + ' cm³ and ' + m('96π') + ' cm²'
    },
    {
      q: 'A hollow glass sphere has outer radius ' + m('10') + ' cm and inner ' + m('9') + ' cm. Find the volume of glass.',
      steps: [
        [m('V = ' + f('4', '3') + 'π(1000 − 729)'), ''],
        [m('= ' + f('4', '3') + 'π(271)'), ''],
        [m('≈ 1135') + ' cm³.', '']
      ],
      ans: m(f('1084π', '3')) + ' ≈ ' + m('1135') + ' cm³'
    },
    {
      q: 'Two similar cones have surface areas in the ratio ' + m('9 : 25') + '. Find the ratio of their volumes.',
      steps: [
        [m('k² = ' + f('25', '9') + ' ⇒ k = ' + f('5', '3')), 'Square root first.'],
        [m('k³ = ' + f('125', '27')), ''],
        [m('27 : 125'), '']
      ],
      ans: m('27 : 125')
    },
    {
      q: 'An ice-cream is a cone of radius ' + m('3') + ' and height ' + m('4') + ' with a hemisphere on top. Find its volume and outside surface area.',
      steps: [
        [m('V = ' + f('1', '3') + 'π(9)(4) + ' + f('2', '3') + 'π(27) = 12π + 18π = 30π'), ''],
        [m('l = 5') + ', so cone curved ' + m('π(3)(5) = 15π') + '.', 'No base circle — it is joined.'],
        ['Hemisphere curved ' + m('2π(9) = 18π') + '.', 'Its flat face is joined too.'],
        [m('S = 33π ≈ 104') + ' cm².', '']
      ],
      ans: m('30π') + ' ≈ ' + m('94.2') + ' cm³; ' + m('33π') + ' ≈ ' + m('104') + ' cm²'
    }
  ],
  modelNote: 'Put the nine formulas on the board, then rub out three at random and have the class rebuild them from the three patterns.',
  interactive: {
    type: 'scaleSolid',
    title: 'One factor, three powers',
    hint: 'Move k and watch the three bars separate.'
  },
  quiz: [
    { q: 'Volume of a pyramid:', a: [m('Bh'), m(f('1', '3') + 'Bh'), m(f('1', '2') + 'Bh'), m('3Bh')], c: 1, why: 'A third of the prism.' },
    { q: 'Curved area of a cone:', a: [m('πr²'), m('πrl'), m('πrh'), m('2πrl')], c: 1, why: 'The slant.' },
    { q: 'Volume of a cone:', a: [m('πr²h'), m(f('1', '3') + 'πr²h'), m(f('1', '3') + 'πr²l'), m('πrl')], c: 1, why: 'The height.' },
    { q: 'Total area of a hemisphere (solid):', a: [m('2πR²'), m('3πR²'), m('4πR²'), m('πR²')], c: 1, why: 'Curved plus the flat face.' },
    { q: 'Volume of a frustum of a cone:', a: [m(f('πh', '3') + '(R² + r²)'), m(f('πh', '3') + '(R² + Rr + r²)'), m('πh(R² − r²)'), m(f('πh', '2') + '(R + r)')], c: 1, why: 'Three terms.' },
    { q: 'Areas in the ratio ' + m('9 : 25') + ' give volumes in:', a: [m('9 : 25'), m('27 : 125'), m('3 : 5'), m('81 : 625')], c: 1, why: m('k = ' + f('5', '3')) + '.' },
    { q: 'Two joined faces of a compound solid:', a: ['both count', 'one counts', 'neither counts', 'they are halved'], c: 2, why: 'Both are interior.' }
  ],
  practice: {
    easy: [
      ['Volume of a prism, ' + m('B = 20, h = 7'), m('140')],
      ['Volume of a cylinder, ' + m('r = 3, h = 5'), m('45π')],
      ['Volume of a cone, ' + m('r = 6, h = 8'), m('96π')],
      ['Slant of that cone', m('10')],
      ['Volume of a sphere, ' + m('R = 9'), m('972π')],
      ['Surface area of that sphere', m('324π')],
      ['Volume of a pyramid, ' + m('B = 100, h = 12'), m('400')]
    ],
    med: [
      ['Total area of a cone, ' + m('r = 6, h = 8'), m('96π')],
      ['Lateral area of a square pyramid, base ' + m('10') + ', height ' + m('12'), m('260')],
      ['Frustum volume, ' + m('R = 5, r = 3, h = 6'), m('98π')],
      ['Total area of a cylinder, ' + m('r = 3, h = 5'), m('48π')],
      ['Total area of a solid hemisphere, ' + m('R = 4'), m('48π')],
      ['Areas ' + m('9 : 25') + ': the volume ratio', m('27 : 125')],
      ['Volumes ' + m('8 : 27') + ': the area ratio', m('4 : 9')]
    ],
    hard: [
      ['Hollow glass sphere, ' + m('R = 10, r = 9') + ': volume of glass', m('≈ 1135') + ' cm³'],
      ['Ice-cream, cone ' + m('r = 3, h = 4') + ' plus hemisphere: volume and outside area', m('30π') + '; ' + m('33π')],
      ['Silo, cylinder ' + m('r = 4, h = 12') + ' plus hemisphere: volume', m(f('704π', '3')) + ' ≈ ' + m('737')],
      ['Pipe ' + m('R = 6, r = 4, L = 150') + ': volume of metal', m('3000π') + ' ≈ ' + m('9425')],
      ['A cone of radius ' + m('9') + ' cut halfway up: volume of the frustum as a fraction', m(f('7', '8'))],
      ['A sphere inscribed in a cylinder: the ratio of total areas', m('2 : 3')],
      ['A cube and a sphere of equal volume: the ratio of surface areas (cube : sphere)', m('6 : ' + rt('3', '36π')) + ' ≈ ' + m('1 : 0.806')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Answer the three questions in writing before each calculation; that is the whole revision.',
  homework: [
    'Write the nine formulas from memory, then check them and mark any you got wrong.',
    'A cone has radius ' + m('5') + ' cm and height ' + m('12') + ' cm. Find its volume, curved area and total area.',
    'A hollow metal sphere has outer radius ' + m('8') + ' cm and inner ' + m('7') + ' cm. Find the volume of metal and its mass at ' + m('7.8') + ' g/cm³.',
    'Two similar solids have volumes ' + m('64') + ' and ' + m('125') + ' cm³. Find the ratio of their heights and of their surface areas.',
    'A grain hopper is a cylinder of radius ' + m('2') + ' m and height ' + m('5') + ' m with a cone of height ' + m('3') + ' m below it. Find its capacity in litres.'
  ]
});

/* ============================== 39 ============================== */
G11_GEO.push({
  id: 'g11-39', stream: 'geo', grade: 11, quarter: 4, lessons: '67–68', hours: 2,
  title: 'Geometry in the entrance paper, and the annual review',
  subtitle: 'What the examination actually asks, and what two years of geometry come to.',
  uz: 'Geometry 11, yakuniy takrorlash', uzPage: 'pp. 345–352',
  cam: 'Examination technique', camPage: 'Core & Extended, pp. 405–408', wb: 'Revision set G5',
  objectives: [
    'Recognise the geometry question types of the entrance paper.',
    'Choose the fastest of the synthetic, coordinate and vector methods.',
    'Work a mixed timed set and diagnose the errors by type.',
    'Leave the course with a usable summary and a plan.'
  ],
  terms: [
    ['Entrance examination', 'Kirish imtihoni', 'Вступительный экзамен'],
    ['Question type', 'Savol turi', 'Тип задачи'],
    ['Synthetic method', 'Sintetik usul', 'Синтетический метод'],
    ['Coordinate method', 'Koordinatalar usuli', 'Координатный метод'],
    ['Vector method', 'Vektor usuli', 'Векторный метод'],
    ['Time management', 'Vaqtni taqsimlash', 'Распределение времени'],
    ['Error type', 'Xato turi', 'Тип ошибки'],
    ['Summary sheet', 'Xulosa varaqasi', 'Итоговый лист']
  ],
  timing: [[15, 'The seven types'], [30, 'A timed mixed set'], [20, 'Diagnosis by type'], [20, 'The two years in one page'], [15, 'The plan']],
  sections: [
    {
      h: 'The seven types',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Type</th><th>Typical question</th><th>Fastest method</th></tr></thead>
      <tbody>
        <tr><td>plane figure</td><td>a triangle’s area or an angle</td><td>synthetic, with a sketch</td></tr>
        <tr><td>circle</td><td>a tangent, a chord, an inscribed angle</td><td>coordinates if an equation is given</td></tr>
        <tr><td>coordinate</td><td>a line, a circle, an intersection</td><td>algebra straight through</td></tr>
        <tr><td>solid: measurement</td><td>a volume or an area</td><td>the nine formulas</td></tr>
        <tr><td>solid: angle</td><td>a line and a plane, or a dihedral</td><td>vectors in a box, synthetic elsewhere</td></tr>
        <tr><td>solid: section</td><td>name and measure a cut</td><td>synthetic, three rules</td></tr>
        <tr><td>similarity</td><td>a ratio of lengths, areas or volumes</td><td class="m">k, k², k³</td></tr>
      </tbody></table></div>
      {{fig:trig3dBox:One box, and five of the seven types measured inside it.}}
      <div class="keybox"><div class="klabel">The first line of every answer</div>
      Name the solid or the figure, and write down what you know: ${m('B')}, ${m('h')}, ${m('r')}, the
      coordinates, the vectors. The question rarely names them for you, and the mark scheme rarely gives
      anything before that line.</div>`
    },
    {
      h: 'A timed mixed set',
      html: `<p>Twelve questions, twenty minutes. Mark anything that takes over ninety seconds and come
      back to it.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>№</th><th>Question</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">1</td><td>Area of a triangle with sides ${m('13, 14, 15')}</td><td class="m">84</td></tr>
        <tr><td class="m">2</td><td>Tangent to ${m('x² + y² = 25')} at ${m('(3, 4)')}</td><td class="m">3x + 4y = 25</td></tr>
        <tr><td class="m">3</td><td>Distance from ${m('(1, 8)')} to ${m('y = 2x')}</td><td class="m">${f('6', sr('5'))} ≈ 2.68</td></tr>
        <tr><td class="m">4</td><td>Volume of a cone, ${m('r = 5, h = 12')}</td><td class="m">100π</td></tr>
        <tr><td class="m">5</td><td>Curved area of that cone</td><td class="m">65π</td></tr>
        <tr><td class="m">6</td><td>Space diagonal of a ${m('3 × 4 × 12')} box</td><td class="m">13</td></tr>
        <tr><td class="m">7</td><td>Angle of that diagonal with the base</td><td class="m">≈ 67.4°</td></tr>
        <tr><td class="m">8</td><td>Section of a cube through six edge-midpoints</td><td>regular hexagon</td></tr>
        <tr><td class="m">9</td><td>Volume of a sphere of surface area ${m('144π')}</td><td class="m">288π</td></tr>
        <tr><td class="m">10</td><td>Two similar solids, volumes ${m('27 : 64')}: area ratio</td><td class="m">9 : 16</td></tr>
        <tr><td class="m">11</td><td>Angle between ${m('(1,2,2)')} and ${m('(2,2,1)')}</td><td class="m">≈ 27.3°</td></tr>
        <tr><td class="m">12</td><td>Least-metal closed cylinder: ${m(f('h', 'r'))}</td><td class="m">2</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'Diagnosis by type',
      html: `<p>Do not count the score. Sort the errors.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Error type</th><th>Looks like</th><th>What to practise</th></tr></thead>
      <tbody>
        <tr><td><b>reading</b></td><td>curved when total was asked</td><td>the three questions, written out</td></tr>
        <tr><td><b>formula</b></td><td>a missing ${m(f('1', '3'))} or ${m(f('4', '3'))}</td><td>the nine-formula page, daily</td></tr>
        <tr><td><b>method</b></td><td>the long route to a short answer</td><td>the method table above</td></tr>
        <tr><td><b>arithmetic</b></td><td>a right method, a wrong number</td><td>slow down on the last line</td></tr>
        <tr><td><b>units</b></td><td>cm³ where litres were wanted</td><td>convert lengths first</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The number that predicts the exam score</div>
      Not the practice score — the number of errors of the <b>same type</b> repeated across two papers.
      One repeated type is worth four or five marks in the real examination, and each one takes about
      twenty minutes of targeted practice to remove.</div>`
    },
    {
      h: 'The two years in one page, and the plan',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Grade 10</th><th>Grade 11</th></tr></thead>
      <tbody>
        <tr><td>axioms; three points determine a plane</td><td>coordinates; a point is three numbers</td></tr>
        <tr><td>parallelism: parallel to a line <b>in</b> it</td><td>vectors; parallel means a scalar multiple</td></tr>
        <tr><td>perpendicularity: two <b>intersecting</b> lines</td><td>the scalar product; ${m('u·v = 0')}</td></tr>
        <tr><td>angles by projection</td><td>angles by dot product</td></tr>
        <tr><td>sections of polyhedra</td><td>prisms, pyramids, cones, spheres</td></tr>
        <tr><td>the plane coordinate method</td><td>mensuration in context, and optimisation</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">One sentence for the whole of school geometry</div>
      Every problem is solved by finding the one right triangle it contains — or, with vectors, the one
      dot product it depends on. Two years, one idea: reduce what is in front of you to something you can
      already measure.</div>
      <p><b>The plan.</b> Between now and the examination: the nine formulas rewritten from memory once a
      week; one timed mixed set a week, sorted by error type; and the list of repeated types kept on a
      single sheet. Not more mathematics — the same mathematics, faster and with fewer repeated
      slips.</p>
      <p>That is the end of the geometry course. The formulas will fade; the habit of drawing the figure
      before writing anything will not, and it is the more useful of the two.</p>`
    }
  ],
  examples: [
    {
      q: 'Model answer, №1: the area of a triangle with sides ' + m('13, 14, 15') + '.',
      steps: [
        [m('s = 21'), 'Heron.'],
        [m('S = ' + sr('21 × 8 × 7 × 6')), ''],
        [m('= ' + sr('7056') + ' = 84'), 'A standard triangle worth remembering.']
      ],
      ans: m('84')
    },
    {
      q: 'Model answer, №7: the angle of the space diagonal of a ' + m('3 × 4 × 12') + ' box with the base.',
      steps: [
        ['Base diagonal ' + m(sr('9 + 16') + ' = 5') + '.', ''],
        ['Space diagonal ' + m(sr('25 + 144') + ' = 13') + '.', ''],
        [m('tan θ = ' + f('12', '5')), ''],
        [m('θ ≈ 67.4°'), '']
      ],
      ans: m('≈ 67.4°')
    },
    {
      q: 'Model answer, №11: the angle between ' + m('(1,2,2)') + ' and ' + m('(2,2,1)') + '.',
      steps: [
        [m('u·v = 2 + 4 + 2 = 8'), ''],
        [m('|u| = |v| = 3'), ''],
        [m('cos θ = ' + f('8', '9')), ''],
        [m('θ ≈ 27.3°'), '']
      ],
      ans: m('≈ 27.3°')
    },
    {
      q: 'Model answer, №9: the volume of a sphere of surface area ' + m('144π') + '.',
      steps: [
        [m('4πR² = 144π ⇒ R = 6'), ''],
        [m('V = ' + f('4', '3') + 'π(216)'), ''],
        [m('= 288π ≈ 905'), 'Not ' + m('144π') + ' — area and volume are different powers.']
      ],
      ans: m('288π')
    }
  ],
  modelNote: 'Run the twelve questions strictly to time, then spend the rest of the lesson only on the error-type table.',
  interactive: {
    type: 'quiz',
    title: 'The two years in twelve questions',
    hint: 'One from each type, both grades.',
    items: [
      { q: 'A plane is determined by:', a: ['two points', 'three non-collinear points', 'one line', 'four points'], c: 1, why: 'The first axiom.' },
      { q: 'Two lines that never meet are:', a: ['parallel', 'parallel or skew', 'skew', 'intersecting'], c: 1, why: 'Space has both.' },
      { q: 'A line ⟂ to a plane is ⟂ to:', a: ['one line', 'two intersecting lines, then all', 'two parallel lines', 'the normal'], c: 1, why: 'The criterion.' },
      { q: 'The angle to a plane is measured to:', a: ['the normal', 'the projection', 'any line', 'the edge'], c: 1, why: 'The smallest angle.' },
      { q: 'Volume of a prism:', a: [m('Ph'), m('Bh'), m(f('1', '3') + 'Bh'), m('2Bh')], c: 1, why: 'Uniform cross-section.' },
      { q: 'Volume of a cone:', a: [m('πr²h'), m(f('1', '3') + 'πr²h'), m('πrl'), m(f('1', '3') + 'πr²l')], c: 1, why: 'Height, not slant.' },
      { q: 'Curved area of a cone:', a: [m('πr²'), m('πrl'), m('πrh'), m('2πrl')], c: 1, why: 'The slant.' },
      { q: 'Surface area of a sphere:', a: [m('4πR²'), m(f('4', '3') + 'πR³'), m('2πR²'), m('πR²')], c: 0, why: 'Four great circles.' },
      { q: 'Volumes ' + m('27 : 64') + ' give areas in:', a: [m('27 : 64'), m('9 : 16'), m('3 : 4'), m('81 : 256')], c: 1, why: m('k = ' + f('4', '3')) + '.' },
      { q: 'A section of a cube has at most:', a: [m('4'), m('5'), m('6'), m('8')], c: 2, why: 'Six faces.' },
      { q: m('u ⟂ v') + ' when:', a: [m('u·v = 1'), m('u·v = 0'), m('u = v'), m('|u| = |v|')], c: 1, why: m('cos 90° = 0') + '.' },
      { q: 'Least-metal closed cylinder:', a: [m('h = r'), m('h = 2r'), m('h = ' + f('r', '2')), m('h = 3r')], c: 1, why: 'Height equals diameter.' }
    ]
  },
  quiz: [
    { q: 'The first line of an entrance answer should be:', a: ['the formula', 'the named figure and what is known', 'the answer', 'a guess'], c: 1, why: 'The mark scheme starts there.' },
    { q: 'For an angle inside a box, prefer:', a: ['synthetic', 'vectors', 'estimation', 'trial'], c: 1, why: 'The coordinates write themselves.' },
    { q: 'After a practice paper, count:', a: ['the score', 'the repeated error types', 'the time', 'the blanks'], c: 1, why: 'That is what predicts the real score.' },
    { q: 'The one idea of two years of geometry:', a: ['memorise formulas', 'reduce to a right triangle or a dot product', 'draw neatly', 'work fast'], c: 1, why: 'Everything else follows.' }
  ],
  practice: {
    easy: [
      ['Area of a triangle with sides ' + m('13, 14, 15'), m('84')],
      ['Tangent to ' + m('x² + y² = 25') + ' at ' + m('(3, 4)'), m('3x + 4y = 25')],
      ['Volume of a cone, ' + m('r = 5, h = 12'), m('100π')],
      ['Curved area of that cone', m('65π')],
      ['Space diagonal of a ' + m('3 × 4 × 12') + ' box', m('13')],
      ['Radius of a sphere of area ' + m('144π'), m('6')],
      ['Volumes ' + m('27 : 64') + ': area ratio', m('9 : 16')]
    ],
    med: [
      ['Angle of the ' + m('3 × 4 × 12') + ' space diagonal with the base', m('≈ 67.4°')],
      ['Distance from ' + m('(1, 8)') + ' to ' + m('y = 2x'), m(f('6', sr('5'))) + ' ≈ ' + m('2.68')],
      ['Section of a cube through six edge-midpoints', 'A regular hexagon'],
      ['Volume of a sphere of area ' + m('144π'), m('288π')],
      ['Angle between ' + m('(1,2,2)') + ' and ' + m('(2,2,1)'), m('≈ 27.3°')],
      ['Least-metal closed cylinder: ' + m(f('h', 'r')), m('2')],
      ['Total area of a cone, ' + m('r = 5, h = 12'), m('90π')]
    ],
    hard: [
      ['A cube of edge ' + m('a') + ': the distance from a vertex to the plane of the three adjacent vertices', m(f('a' + sr('3'), '3'))],
      ['A regular tetrahedron of edge ' + m('a') + ': its volume', m(f('a³' + sr('2'), '12'))],
      ['A sphere inscribed in a cone of radius ' + m('6') + ' and height ' + m('8'), m('r = 3')],
      ['A cone of radius ' + m('9') + ' cut halfway up: the frustum as a fraction of the cone', m(f('7', '8'))],
      ['The regular hexagonal section of a cube of edge ' + m('a') + ': its area', m(f('3a²' + sr('3'), '4'))],
      ['Two spheres of radii ' + m('3') + ' and ' + m('5') + ' touch externally: the distance between the centres', m('8')],
      ['A closed cylinder of volume ' + m('V') + ' with least area: express that area in terms of ' + m('V'), m('3' + rt('3', '2πV²'))]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'This is the last geometry lesson of the school course. The summary page is the thing to keep.',
  homework: [
    'Work the twelve-question set again under timed conditions and sort every error by type.',
    'Write the two years in one page: six lines for Grade 10, six for Grade 11, with a sketch for each.',
    'Write the nine formulas from memory, check them, and note which you got wrong.',
    'Write your revision plan for the weeks before the examination in three sentences, and date it.'
  ]
});
