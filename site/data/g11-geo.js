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
