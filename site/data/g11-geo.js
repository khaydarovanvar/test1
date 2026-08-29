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
