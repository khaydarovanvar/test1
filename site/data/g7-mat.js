/* Grade 7 · Mathematics · 170 hours (45 / 35 / 50 / 40)
   National KTP 2025–2026 — one subject, algebra and geometry alternating.
   Cambridge layer: Lower Secondary Stage 8. */
var G7_MAT = [];

/* ============================== 1 ============================== */
G7_MAT.push({
  id: 'g7-01', stream: 'mat', grade: 7, quarter: 1, lessons: '1–2', hours: 2,
  title: 'The simplest geometric figures',
  subtitle: 'Point, line and plane — the three words that are never defined, and everything built from them.',
  uz: 'Matematika 7, §1', uzPage: 'pp. 3–8',
  cam: 'S8 5', camPage: 'Stage 8, pp. 48–56', wb: 'Exercise 5.1',
  objectives: [
    'Name the point, the line and the plane as the undefined basic objects.',
    'Use the notation for points, lines, rays and segments correctly.',
    'State the axiom that two points determine exactly one line.',
    'Decide how many lines pass through a given set of points.'
  ],
  terms: [
    ['Point', 'Nuqta', 'Точка'],
    ['Line', 'To‘g‘ri chiziq', 'Прямая'],
    ['Plane', 'Tekislik', 'Плоскость'],
    ['Ray', 'Nur', 'Луч'],
    ['Segment', 'Kesma', 'Отрезок'],
    ['Axiom', 'Aksioma', 'Аксиома'],
    ['To belong to', 'Tegishli bo‘lmoq', 'Принадлежать'],
    ['Intersection', 'Kesishish', 'Пересечение']
  ],
  timing: [[15, 'Three undefined words'], [25, 'Notation'], [25, 'The axioms'], [20, 'Counting lines'], [5, 'Homework']],
  sections: [
    {
      h: 'Three undefined words',
      html: `<p>Geometry begins with three ideas that are <b>not</b> defined: the <b>point</b>, the
      <b>line</b> and the <b>plane</b>. Everything else is defined in terms of them.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Object</th><th>Written</th><th>Drawn as</th></tr></thead>
      <tbody>
        <tr><td>point</td><td class="m">A, B, C</td><td>a dot</td></tr>
        <tr><td>line</td><td>${m('a, b')} or ${m('AB')}</td><td>a stroke with no ends</td></tr>
        <tr><td>plane</td><td class="m">α, β</td><td>a parallelogram</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Why not define them?</div>
      Every definition uses simpler words. Somewhere the chain has to stop, and mathematics chooses to
      stop at these three. Instead of definitions they are given <b>axioms</b> — statements accepted
      without proof that say how they behave.</div>`
    },
    {
      h: 'Notation',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Figure</th><th>Written</th><th>Has</th></tr></thead>
      <tbody>
        <tr><td>line ${m('AB')}</td><td class="m">AB</td><td>no ends — it continues both ways</td></tr>
        <tr><td>ray ${m('AB')}</td><td class="m">[AB)</td><td>one end, at ${m('A')}</td></tr>
        <tr><td>segment ${m('AB')}</td><td class="m">[AB]</td><td>two ends</td></tr>
        <tr><td>${m('A')} lies on ${m('a')}</td><td class="m">A ∈ a</td><td>—</td></tr>
        <tr><td>${m('A')} does not lie on ${m('a')}</td><td class="m">A ∉ a</td><td>—</td></tr>
      </tbody></table></div>
      <p>A <b>ray</b> is half a line: it starts at a point and runs on forever in one direction. Two rays
      ${m('[AB)')} and ${m('[BA)')} on the same line point in opposite directions.</p>
      <div class="warn"><span class="wl">A line has no ends and no length</span>
      Only a segment has a length. Asking for “the length of the line ${m('AB')}” is asking for
      something that does not exist — the phrase must be “the length of the segment ${m('AB')}”.</div>`
    },
    {
      h: 'The axioms',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Axiom</th><th>Statement</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>through any two points there passes exactly one line</td></tr>
        <tr><td>2</td><td>two different lines meet in at most one point</td></tr>
        <tr><td>3</td><td>on every line there are at least two points</td></tr>
        <tr><td>4</td><td>a line divides the plane into two half-planes</td></tr>
      </tbody></table></div>
      <p>Axiom 1 is the one used constantly. It is why a ruler needs only two marks to draw a line, and
      why two nails hold a plank rigid.</p>
      <div class="keybox"><div class="klabel">Axiom 2 follows from Axiom 1</div>
      If two lines met in two points, then two points would have two lines through them — which Axiom 1
      forbids. Deriving one statement from another is the whole activity of geometry, and it starts
      here.</div>`
    },
    {
      h: 'Counting lines',
      html: `<p>How many lines pass through ${m('n')} points, no three of them on one line?</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">n</th><th>Lines</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td class="m">2</td><td class="m">1</td><td>Axiom 1</td></tr>
        <tr><td class="m">3</td><td class="m">3</td><td>each pair</td></tr>
        <tr><td class="m">4</td><td class="m">6</td><td class="m">${f('4 × 3', '2')}</td></tr>
        <tr><td class="m">5</td><td class="m">10</td><td class="m">${f('5 × 4', '2')}</td></tr>
        <tr><td class="m">n</td><td class="m">${f('n(n − 1)', '2')}</td><td>each pair, counted once</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">“No three on one line” is essential</span>
      If all ${m('n')} points lie on one line, there is exactly <b>one</b> line, not ${m(f('n(n−1)', '2'))}.
      The condition is what makes the counting work.</div>`
    }
  ],
  examples: [
    {
      q: 'How many lines pass through ' + m('5') + ' points, no three on one line?',
      steps: [
        ['Each pair of points gives one line.', 'Axiom 1.'],
        ['Pairs from ' + m('5') + ': ' + m(f('5 × 4', '2')) + '.', 'Each counted once.'],
        [m('= 10'), ''],
        ['All ten are different, since no three points are collinear.', '']
      ],
      ans: m('10')
    },
    {
      q: 'Four points lie on a plane with exactly three of them on one line. How many lines are there?',
      steps: [
        ['The three collinear points give ' + m('1') + ' line.', 'Not ' + m('3') + '.'],
        ['The fourth point joins each of the three: ' + m('3') + ' more.', ''],
        [m('1 + 3'), ''],
        [m('= 4') + ' lines.', '']
      ],
      ans: m('4')
    },
    {
      q: 'Name all the rays and segments determined by three points ' + m('A, B, C') + ' on one line, in that order.',
      steps: [
        ['Segments: ' + m('[AB], [BC], [AC]') + '.', 'Three.'],
        ['Rays from ' + m('A') + ': ' + m('[AB)') + ' — one direction only.', ''],
        ['From ' + m('B') + ': ' + m('[BA)') + ' and ' + m('[BC)') + '.', ''],
        ['From ' + m('C') + ': ' + m('[CB)') + '. Four rays in all.', '']
      ],
      ans: m('3') + ' segments, ' + m('4') + ' rays'
    }
  ],
  modelNote: 'Stretch a thread between two drawing pins and ask whether a second thread could take a different route; Axiom 1 is demonstrated before it is stated.',
  interactive: {
    type: 'coordPlane',
    title: 'Points and the lines through them',
    hint: 'Add a point and count the new lines.'
  },
  quiz: [
    { q: 'Which are undefined in geometry?', a: ['segment, ray, angle', 'point, line, plane', 'triangle, circle, square', 'none'], c: 1, why: 'The chain of definitions must stop.' },
    { q: 'Through two points there passes:', a: ['no line', 'exactly one line', 'two lines', 'many lines'], c: 1, why: 'Axiom 1.' },
    { q: 'A ray has:', a: ['no ends', 'one end', 'two ends', 'a length'], c: 1, why: 'Half a line.' },
    { q: 'Which has a length?', a: ['a line', 'a ray', 'a segment', 'a plane'], c: 2, why: 'Only a segment is bounded.' },
    { q: m('5') + ' points, no three collinear: how many lines?', a: [m('5'), m('10'), m('20'), m('25')], c: 1, why: m(f('5 × 4', '2')) + '.' },
    { q: 'Two different lines meet in:', a: ['no point', 'at most one point', 'two points', 'many points'], c: 1, why: 'Axiom 2.' }
  ],
  practice: {
    easy: [
      ['How many lines through ' + m('2') + ' points?', m('1')],
      ['How many through ' + m('3') + ' points, no three collinear?', m('3')],
      ['How many through ' + m('4') + '?', m('6')],
      ['How many through ' + m('5') + '?', m('10')],
      ['Which figure has two ends?', 'A segment'],
      ['Which has one end?', 'A ray'],
      ['Which has none?', 'A line']
    ],
    med: [
      ['How many through ' + m('6') + ' points, no three collinear?', m('15')],
      ['How many through ' + m('10') + '?', m('45')],
      ['Four points, three of them collinear', m('4') + ' lines'],
      ['Five points all on one line', m('1') + ' line'],
      ['Segments determined by ' + m('4') + ' points on a line', m('6')],
      ['Rays determined by ' + m('3') + ' points on a line', m('4')],
      ['Two lines meet in at most', 'One point']
    ],
    hard: [
      ['For which ' + m('n') + ' do ' + m('n') + ' points give ' + m('28') + ' lines?', m('n = 8')],
      ['Five points with exactly four collinear', m('5') + ' lines'],
      ['Six points, three collinear and three collinear on another line', m('11') + ' lines'],
      ['How many segments have ' + m('n') + ' points on a line as ends?', m(f('n(n − 1)', '2'))],
      ['How many rays?', m('2(n − 1)')],
      ['Why can two lines not meet twice?', 'Axiom 1 would be broken'],
      ['A plane is divided by ' + m('3') + ' lines into at most', m('7') + ' parts']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw a figure for every counting question; the picture is the proof.',
  homework: [
    'How many lines pass through ' + m('7') + ' points, no three of them collinear?',
    'Four points lie in a plane, with exactly three on one line. How many lines do they determine?',
    'Name all the segments determined by four points on one line.',
    'State the four axioms of this lesson in your own words.',
    'Explain why a line has no length but a segment does.'
  ]
});

/* ============================== 2 ============================== */
G7_MAT.push({
  id: 'g7-02', stream: 'mat', grade: 7, quarter: 1, lessons: '3–4', hours: 2,
  title: 'The segment: comparing and measuring',
  subtitle: 'Two ends, one number — and the one property that makes measurement possible.',
  uz: 'Matematika 7, §2', uzPage: 'pp. 9–14',
  cam: 'S8 5', camPage: 'Stage 8, pp. 48–56', wb: 'Exercise 5.1',
  objectives: [
    'Compare two segments by superposition and by measurement.',
    'Use the additive property AB = AC + CB when C lies between A and B.',
    'Find the midpoint of a segment and use it.',
    'Convert between the units of length and solve simple problems.'
  ],
  terms: [
    ['Segment', 'Kesma', 'Отрезок'],
    ['Length', 'Uzunlik', 'Длина'],
    ['Midpoint', 'O‘rta nuqta', 'Середина'],
    ['Between', 'Orasida', 'Между'],
    ['To superpose', 'Ustma-ust qo‘ymoq', 'Наложить'],
    ['Equal segments', 'Teng kesmalar', 'Равные отрезки'],
    ['Unit of length', 'Uzunlik birligi', 'Единица длины'],
    ['Additive property', 'Additivlik xossasi', 'Свойство аддитивности']
  ],
  timing: [[15, 'Comparing'], [25, 'Measuring'], [25, 'Adding segments'], [20, 'The midpoint'], [5, 'Homework']],
  sections: [
    {
      h: 'Comparing',
      html: `<p>Two segments are <b>equal</b> if one can be laid exactly on the other. In practice they
      are compared with compasses: open the compasses to ${m('AB')} and see whether the opening reaches
      from ${m('C')} to ${m('D')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Result</th><th>Written</th></tr></thead>
      <tbody>
        <tr><td>the opening fits exactly</td><td class="m">AB = CD</td></tr>
        <tr><td>the opening falls short</td><td class="m">AB < CD</td></tr>
        <tr><td>the opening overshoots</td><td class="m">AB > CD</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Comparison comes before measurement</div>
      Two segments can be compared without any ruler at all. Measurement is comparison with one chosen
      segment — the unit — repeated. That is the whole idea of a length.</div>`
    },
    {
      h: 'Measuring',
      html: `<p>Choose a <b>unit segment</b>. The length of ${m('AB')} is the number of units it
      contains.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Unit</th><th>Symbol</th><th>In metres</th></tr></thead>
      <tbody>
        <tr><td>millimetre</td><td class="m">mm</td><td class="m">0.001</td></tr>
        <tr><td>centimetre</td><td class="m">cm</td><td class="m">0.01</td></tr>
        <tr><td>decimetre</td><td class="m">dm</td><td class="m">0.1</td></tr>
        <tr><td>metre</td><td class="m">m</td><td class="m">1</td></tr>
        <tr><td>kilometre</td><td class="m">km</td><td class="m">1000</td></tr>
      </tbody></table></div>
      <p>Each step up the table is a factor of ${m('10')}, except metre to kilometre, which is
      ${m('1000')}.</p>
      <div class="warn"><span class="wl">A length is a number <i>and</i> a unit</span>
      “The segment is ${m('7')}” means nothing until the unit is said. Every answer in this chapter
      carries its unit, and a missing unit costs a mark.</div>`
    },
    {
      h: 'Adding segments',
      html: `<p>If ${m('C')} lies <b>between</b> ${m('A')} and ${m('B')}, then</p>
      ${eq(m('AB = AC + CB'), true)}
      {{fig:numberLineInterval:A point between the ends splits the segment into two, and the lengths add.}}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">AC</th><th class="m">CB</th><th class="m">AB</th></tr></thead>
      <tbody>
        <tr><td class="m">3 cm</td><td class="m">5 cm</td><td class="m">8 cm</td></tr>
        <tr><td class="m">4.5 cm</td><td class="m">2.5 cm</td><td class="m">7 cm</td></tr>
        <tr><td class="m">12 mm</td><td class="m">?</td><td class="m">30 mm ⇒ 18 mm</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">“Between” is a condition, not a decoration</span>
      If ${m('C')} is not between ${m('A')} and ${m('B')} the equation is false. With ${m('A, B, C')} in
      that order, ${m('AC = AB + BC')} instead — so the order of the points must be established from the
      figure first.</div>`
    },
    {
      h: 'The midpoint',
      html: `<p>The <b>midpoint</b> ${m('M')} of ${m('AB')} is the point between ${m('A')} and ${m('B')}
      with ${m('AM = MB')}. Then</p>
      ${eq(m('AM = MB = ' + f('AB', '2')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Find</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td class="m">AB = 14 cm</td><td class="m">AM</td><td class="m">7 cm</td></tr>
        <tr><td class="m">AM = 6.5 cm</td><td class="m">AB</td><td class="m">13 cm</td></tr>
        <tr><td>${m('M')} and ${m('N')} midpoints of ${m('AC')} and ${m('CB')}</td><td class="m">MN</td><td class="m">${f('AB', '2')}</td></tr>
      </tbody></table></div>
      <p>The third row is a small surprise worth checking: whatever the position of ${m('C')} between
      ${m('A')} and ${m('B')}, the distance between the two midpoints is always half of ${m('AB')}.</p>
      <div class="keybox"><div class="klabel">A segment has exactly one midpoint</div>
      Not two, and never none. The construction with compasses — equal arcs from both ends — produces it
      exactly, and it is the first construction of the course.</div>`
    }
  ],
  examples: [
    {
      q: m('C') + ' lies between ' + m('A') + ' and ' + m('B') + '. If ' + m('AC = 12 mm') + ' and ' + m('AB = 30 mm') + ', find ' + m('CB') + '.',
      steps: [
        [m('AB = AC + CB'), ''],
        [m('30 = 12 + CB'), ''],
        [m('CB = 18 mm'), ''],
        ['Check: ' + m('12 + 18 = 30') + ' ✓', '']
      ],
      ans: m('18 mm')
    },
    {
      q: m('AB = 14 cm') + ' and ' + m('M') + ' is its midpoint. ' + m('N') + ' is the midpoint of ' + m('AM') + '. Find ' + m('NB') + '.',
      steps: [
        [m('AM = 7 cm'), ''],
        [m('AN = 3.5 cm'), ''],
        [m('NB = AB − AN = 14 − 3.5'), ''],
        [m('= 10.5 cm'), '']
      ],
      ans: m('10.5 cm')
    },
    {
      q: 'Convert ' + m('2.4 m') + ' to centimetres and ' + m('35 mm') + ' to metres.',
      steps: [
        [m('1 m = 100 cm'), ''],
        [m('2.4 × 100 = 240 cm'), ''],
        [m('1 mm = 0.001 m'), ''],
        [m('35 × 0.001 = 0.035 m'), '']
      ],
      ans: m('240 cm') + ' and ' + m('0.035 m')
    }
  ],
  modelNote: 'Compare two segments drawn on the board with compasses only, then measure both; the class sees that comparison needs no numbers and measurement needs a unit.',
  interactive: {
    type: 'inequalityLine',
    title: 'Points on a segment',
    hint: 'Drag C and watch AC + CB stay equal to AB.'
  },
  quiz: [
    { q: 'Two segments are equal when:', a: ['they look alike', 'one lays exactly on the other', 'they are near', 'they are drawn together'], c: 1, why: 'Superposition.' },
    { q: m('AB = AC + CB') + ' requires:', a: [m('C') + ' anywhere', m('C') + ' between ' + m('A') + ' and ' + m('B'), m('C') + ' outside', 'nothing'], c: 1, why: 'Otherwise it is false.' },
    { q: m('AM = MB') + ' makes ' + m('M') + ':', a: ['an end', 'the midpoint', 'outside', 'a ray'], c: 1, why: 'By definition.' },
    { q: m('AB = 14 cm') + ': ' + m('AM') + ' =', a: [m('7 cm'), m('14 cm'), m('28 cm'), m('3.5 cm')], c: 0, why: 'Half.' },
    { q: m('1 m') + ' equals:', a: [m('10 cm'), m('100 cm'), m('1000 cm'), m('10 mm')], c: 1, why: 'Two steps of ' + m('10') + '.' },
    { q: 'A length must have:', a: ['a number only', 'a unit only', 'both', 'neither'], c: 2, why: 'Or it means nothing.' }
  ],
  practice: {
    easy: [
      [m('AC = 3, CB = 5') + ': ' + m('AB'), m('8')],
      [m('AC = 12, AB = 30') + ': ' + m('CB'), m('18')],
      [m('AB = 14') + ': ' + m('AM'), m('7')],
      [m('AM = 6.5') + ': ' + m('AB'), m('13')],
      [m('2.4 m') + ' in cm', m('240')],
      [m('35 mm') + ' in m', m('0.035')],
      [m('3 km') + ' in m', m('3000')]
    ],
    med: [
      [m('AB = 14, M') + ' midpoint, ' + m('N') + ' midpoint of ' + m('AM') + ': ' + m('NB'), m('10.5')],
      [m('AC = 4.5, CB = 2.5') + ': ' + m('AB'), m('7')],
      [m('AB = 25, AC = 9') + ': ' + m('CB'), m('16')],
      [m('850 cm') + ' in m', m('8.5')],
      [m('0.6 km') + ' in cm', m('60 000')],
      ['A segment of ' + m('18 cm') + ' divided in ' + m('2 : 1'), m('12') + ' and ' + m('6')],
      ['Midpoints of ' + m('AC') + ' and ' + m('CB') + ' with ' + m('AB = 20') + ': ' + m('MN'), m('10')]
    ],
    hard: [
      [m('AB = 24') + ', ' + m('C') + ' with ' + m('AC : CB = 3 : 5') + ': ' + m('AC'), m('9')],
      ['Three points ' + m('A, B, C') + ' with ' + m('AB = 5, BC = 3') + ': possible ' + m('AC'), m('8') + ' or ' + m('2')],
      [m('M') + ' is the midpoint of ' + m('AB') + ' and ' + m('AM = 3x − 1') + ', ' + m('MB = x + 7') + ': ' + m('AB'), m('22')],
      ['A segment is divided into ' + m('4') + ' equal parts; the distance between the 1st and 3rd division points, if ' + m('AB = 32'), m('16')],
      [m('AB = 30') + ' with ' + m('C') + ' between; ' + m('AC') + ' exceeds ' + m('CB') + ' by ' + m('6') + ': ' + m('AC'), m('18')],
      ['A ruler of ' + m('30 cm') + ' measures a table ' + m('7') + ' times exactly: the table', m('2.1 m')],
      ['Why is the midpoint unique?', 'Two midpoints would give two different halves']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every answer carries a unit, and every figure carries its labels.',
  homework: [
    m('C') + ' lies between ' + m('A') + ' and ' + m('B') + ' with ' + m('AC = 17 mm') + ' and ' + m('AB = 42 mm') + '. Find ' + m('CB') + '.',
    m('AB = 18 cm') + ' and ' + m('M') + ' is its midpoint. Find ' + m('AM') + ' and ' + m('MB') + '.',
    'Convert ' + m('4.7 m') + ' to millimetres and ' + m('2500 cm') + ' to kilometres.',
    'A segment of ' + m('45 cm') + ' is divided in the ratio ' + m('2 : 3') + '. Find the two parts.',
    'Three points lie on a line with ' + m('AB = 7') + ' and ' + m('BC = 4') + '. Give both possible values of ' + m('AC') + '.'
  ]
});

/* ============================== 3 ============================== */
G7_MAT.push({
  id: 'g7-03', stream: 'mat', grade: 7, quarter: 1, lessons: '5–6', hours: 2,
  title: 'The angle: comparing and measuring',
  subtitle: 'Two rays from one point — and the protractor that turns them into a number.',
  uz: 'Matematika 7, §3', uzPage: 'pp. 15–21',
  cam: 'S8 5', camPage: 'Stage 8, pp. 48–56', wb: 'Exercise 5.1',
  objectives: [
    'Define an angle, its vertex and its arms, and use the three-letter notation.',
    'Measure and draw angles with a protractor.',
    'Classify angles as acute, right, obtuse, straight or reflex.',
    'Use the additive property and the bisector of an angle.'
  ],
  terms: [
    ['Angle', 'Burchak', 'Угол'],
    ['Vertex', 'Uchi', 'Вершина'],
    ['Arm of an angle', 'Burchak tomoni', 'Сторона угла'],
    ['Protractor', 'Transportir', 'Транспортир'],
    ['Acute angle', 'O‘tkir burchak', 'Острый угол'],
    ['Obtuse angle', 'O‘tmas burchak', 'Тупой угол'],
    ['Straight angle', 'Yoyiq burchak', 'Развёрнутый угол'],
    ['Bisector', 'Bissektrisa', 'Биссектриса']
  ],
  timing: [[15, 'What an angle is'], [25, 'Measuring'], [25, 'The five kinds'], [20, 'Adding angles'], [5, 'Homework']],
  sections: [
    {
      h: 'What an angle is',
      html: `<p>An <b>angle</b> is the figure formed by two rays with a common origin. The origin is the
      <b>vertex</b> and the rays are the <b>arms</b>.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Notation</th><th>Means</th></tr></thead>
      <tbody>
        <tr><td class="m">∠ABC</td><td>vertex ${m('B')}, arms through ${m('A')} and ${m('C')}</td></tr>
        <tr><td class="m">∠B</td><td>the same, when no confusion is possible</td></tr>
        <tr><td class="m">∠1, ∠α</td><td>a label written inside the angle</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The vertex letter goes in the middle</span>
      ${m('∠ABC')} and ${m('∠CBA')} are the same angle; ${m('∠BAC')} is a different one. Reading the
      middle letter first is the habit to build.</div>`
    },
    {
      h: 'Measuring',
      html: `<p>The unit is the <b>degree</b>: a full turn is divided into ${m('360')} equal parts. A
      protractor is a half-turn of ${m('180')} of them.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>What to do</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>put the centre of the protractor on the vertex</td></tr>
        <tr><td>2</td><td>lay the zero line along one arm</td></tr>
        <tr><td>3</td><td>read where the other arm crosses the scale</td></tr>
        <tr><td>4</td><td>choose the scale that starts at ${m('0')} on your arm</td></tr>
      </tbody></table></div>
      <p>Smaller units exist: ${m('1° = 60′')} (minutes) and ${m('1′ = 60″')} (seconds), used in
      astronomy and surveying.</p>
      <div class="warn"><span class="wl">A protractor has two scales</span>
      One runs ${m('0')} to ${m('180')} left to right, the other right to left. Reading ${m('130°')}
      when the angle is plainly acute means the wrong scale was used — and a glance at the figure
      catches it.</div>`
    },
    {
      h: 'The five kinds',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Name</th><th>Size</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>acute</td><td class="m">0° < α < 90°</td><td class="m">45°</td></tr>
        <tr><td>right</td><td class="m">α = 90°</td><td>a corner of a page</td></tr>
        <tr><td>obtuse</td><td class="m">90° < α < 180°</td><td class="m">130°</td></tr>
        <tr><td>straight</td><td class="m">α = 180°</td><td>a line through the vertex</td></tr>
        <tr><td>reflex</td><td class="m">180° < α < 360°</td><td class="m">250°</td></tr>
      </tbody></table></div>
      <p>Two angles are <b>complementary</b> if they add to ${m('90°')} and <b>supplementary</b> if they
      add to ${m('180°')}.</p>
      <div class="keybox"><div class="klabel">Complementary is the smaller pair</div>
      C comes before S in the alphabet, and ${m('90')} before ${m('180')}. That is the whole mnemonic,
      and it prevents the one confusion this vocabulary causes.</div>`
    },
    {
      h: 'Adding angles',
      html: `<p>If the ray ${m('[BD)')} lies inside ${m('∠ABC')}, then</p>
      ${eq(m('∠ABC = ∠ABD + ∠DBC'), true)}
      <p>The <b>bisector</b> of an angle is the ray from the vertex that divides it into two equal
      angles:</p>
      ${eq(m('∠ABD = ∠DBC = ' + f('∠ABC', '2')), true)}
      {{fig:bisectorConstruction:The bisector divides the angle into two equal parts.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Find</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td class="m">∠ABC = 80°</td><td>half</td><td class="m">40°</td></tr>
        <tr><td class="m">∠ABD = 35°, ∠DBC = 48°</td><td class="m">∠ABC</td><td class="m">83°</td></tr>
        <tr><td class="m">∠ABC = 140°, ∠ABD = 55°</td><td class="m">∠DBC</td><td class="m">85°</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The same additive law as for segments</div>
      A point between the ends splits a segment; a ray inside the angle splits the angle. One idea, two
      settings — which is why the two lessons sit side by side.</div>`
    }
  ],
  examples: [
    {
      q: m('∠ABD = 35°') + ' and ' + m('∠DBC = 48°') + ', with ' + m('[BD)') + ' inside ' + m('∠ABC') + '. Find ' + m('∠ABC') + '.',
      steps: [
        [m('∠ABC = ∠ABD + ∠DBC'), ''],
        [m('= 35° + 48°'), ''],
        [m('= 83°'), ''],
        ['Acute, since ' + m('83° < 90°') + '.', '']
      ],
      ans: m('83°')
    },
    {
      q: 'The bisector of ' + m('∠ABC = 140°') + ' is ' + m('[BD)') + '. Find ' + m('∠ABD') + ', and classify both angles.',
      steps: [
        [m('∠ABD = ' + f('140°', '2')), ''],
        [m('= 70°'), ''],
        [m('∠ABC = 140°') + ' is obtuse.', ''],
        [m('∠ABD = 70°') + ' is acute.', '']
      ],
      ans: m('70°') + '; obtuse and acute'
    },
    {
      q: 'Find the complement and the supplement of ' + m('37°') + '.',
      steps: [
        ['Complement: ' + m('90° − 37°') + '.', ''],
        [m('= 53°'), ''],
        ['Supplement: ' + m('180° − 37°') + '.', ''],
        [m('= 143°'), '']
      ],
      ans: m('53°') + ' and ' + m('143°')
    }
  ],
  modelNote: 'Open a pair of scissors slowly and ask the class to call out “acute”, “right”, “obtuse”, “straight”; the classification becomes a reflex before it is a table.',
  interactive: {
    type: 'triangleAngles',
    title: 'Measuring and classifying',
    hint: 'Open the angle and watch the name change.'
  },
  quiz: [
    { q: 'In ' + m('∠ABC') + ' the vertex is:', a: [m('A'), m('B'), m('C'), 'all three'], c: 1, why: 'The middle letter.' },
    { q: 'A right angle is:', a: [m('45°'), m('90°'), m('180°'), m('360°')], c: 1, why: 'A quarter turn.' },
    { q: m('130°') + ' is:', a: ['acute', 'right', 'obtuse', 'reflex'], c: 2, why: 'Between ' + m('90°') + ' and ' + m('180°') + '.' },
    { q: 'Complementary angles add to:', a: [m('90°'), m('180°'), m('270°'), m('360°')], c: 0, why: 'The smaller pair.' },
    { q: 'The supplement of ' + m('37°') + ':', a: [m('53°'), m('143°'), m('323°'), m('37°')], c: 1, why: m('180 − 37') + '.' },
    { q: 'A bisector divides an angle into:', a: ['two equal parts', 'three parts', 'two unequal parts', 'nothing'], c: 0, why: 'By definition.' }
  ],
  practice: {
    easy: [
      ['Classify ' + m('45°'), 'Acute'],
      ['Classify ' + m('90°'), 'Right'],
      ['Classify ' + m('130°'), 'Obtuse'],
      ['Classify ' + m('180°'), 'Straight'],
      ['Classify ' + m('250°'), 'Reflex'],
      ['Complement of ' + m('37°'), m('53°')],
      ['Supplement of ' + m('37°'), m('143°')]
    ],
    med: [
      [m('∠ABD = 35°, ∠DBC = 48°') + ': ' + m('∠ABC'), m('83°')],
      [m('∠ABC = 140°, ∠ABD = 55°') + ': ' + m('∠DBC'), m('85°')],
      ['Bisector of ' + m('140°'), m('70°') + ' each'],
      ['Bisector of ' + m('96°'), m('48°') + ' each'],
      ['Complement of ' + m('64°'), m('26°')],
      ['Supplement of ' + m('118°'), m('62°')],
      ['An angle equal to its own supplement', m('90°')]
    ],
    hard: [
      ['An angle is ' + m('3') + ' times its complement', m('67.5°')],
      ['An angle is ' + m('4') + ' times its supplement', m('144°')],
      ['An angle exceeds its complement by ' + m('20°'), m('55°')],
      ['Two supplementary angles in the ratio ' + m('4 : 5'), m('80°') + ' and ' + m('100°')],
      ['The angle between the bisectors of two adjacent supplementary angles', m('90°')],
      ['The angle between the hands of a clock at ' + m('3:30'), m('75°')],
      ['At ' + m('9:20'), m('160°')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Measure every drawn angle with a protractor and write the reading beside it.',
  homework: [
    'Classify ' + m('28°') + ', ' + m('90°') + ', ' + m('155°') + ' and ' + m('300°') + '.',
    'Find the complement and the supplement of ' + m('54°') + '.',
    m('[BD)') + ' lies inside ' + m('∠ABC = 118°') + ' with ' + m('∠ABD = 47°') + '. Find ' + m('∠DBC') + '.',
    'An angle is twice its complement. Find it.',
    'Find the angle between the hands of a clock at ' + m('4:00') + ' and at ' + m('7:30') + '.'
  ]
});

/* ============================== 4 ============================== */
G7_MAT.push({
  id: 'g7-04', stream: 'mat', grade: 7, quarter: 1, lessons: '7–8', hours: 2,
  title: 'Practical exercises — multiplying and dividing by 0.1 and 0.01, and rounding',
  subtitle: 'A Cambridge insert: the decimal arithmetic that every later measurement depends on.',
  uz: 'Matematika 7, amaliy mashqlar', uzPage: 'pp. 22–25',
  cam: 'S8 3.1–3.2', camPage: 'Stage 8, pp. 26–34', wb: 'Exercise 3.1–3.2',
  objectives: [
    'Multiply and divide by 0.1, 0.01 and 0.001 by moving the decimal point.',
    'Explain why dividing by 0.1 makes a number larger.',
    'Round to a given number of decimal places and of significant figures.',
    'Estimate an answer before computing it.'
  ],
  terms: [
    ['Decimal point', 'O‘nli nuqta', 'Десятичная запятая'],
    ['Decimal place', 'O‘nli xona', 'Десятичный знак'],
    ['Significant figure', 'Ma’noli raqam', 'Значащая цифра'],
    ['To round', 'Yaxlitlash', 'Округлить'],
    ['Estimate', 'Baholash', 'Оценка'],
    ['Tenth', 'O‘ndan bir', 'Десятая'],
    ['Hundredth', 'Yuzdan bir', 'Сотая'],
    ['Approximation', 'Taqribiy qiymat', 'Приближение']
  ],
  timing: [[15, 'Moving the point'], [25, 'Dividing by a small number'], [25, 'Rounding'], [20, 'Estimating'], [5, 'Homework']],
  sections: [
    {
      h: 'Moving the point',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Operation</th><th>Effect</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>× ${m('10')}</td><td>point moves ${m('1')} right</td><td class="m">3.7 → 37</td></tr>
        <tr><td>× ${m('0.1')}</td><td>point moves ${m('1')} left</td><td class="m">3.7 → 0.37</td></tr>
        <tr><td>× ${m('0.01')}</td><td>point moves ${m('2')} left</td><td class="m">3.7 → 0.037</td></tr>
        <tr><td>÷ ${m('0.1')}</td><td>point moves ${m('1')} right</td><td class="m">3.7 → 37</td></tr>
        <tr><td>÷ ${m('0.01')}</td><td>point moves ${m('2')} right</td><td class="m">3.7 → 370</td></tr>
      </tbody></table></div>
      <p>Multiplying by ${m('0.1')} is the same as dividing by ${m('10')}; dividing by ${m('0.1')} is
      the same as multiplying by ${m('10')}.</p>
      <div class="keybox"><div class="klabel">${m('0.1 = ' + f('1', '10'))}, and that explains everything</div>
      Dividing by ${m(f('1', '10'))} asks “how many tenths are there in it?” — and there are ten times as
      many tenths as there are wholes.</div>`
    },
    {
      h: 'Dividing by a small number',
      html: `<p>The result of dividing by a number less than ${m('1')} is <b>larger</b> than what you
      started with. This surprises almost everyone at first.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>In words</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">6 ÷ 2</td><td>how many ${m('2')}s in ${m('6')}?</td><td class="m">3</td></tr>
        <tr><td class="m">6 ÷ 1</td><td>how many ${m('1')}s?</td><td class="m">6</td></tr>
        <tr><td class="m">6 ÷ 0.5</td><td>how many halves?</td><td class="m">12</td></tr>
        <tr><td class="m">6 ÷ 0.1</td><td>how many tenths?</td><td class="m">60</td></tr>
        <tr><td class="m">6 ÷ 0.01</td><td>how many hundredths?</td><td class="m">600</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">“Dividing makes it smaller” is false</span>
      It is true only when dividing by a number greater than ${m('1')}. This is one of the most
      persistent wrong beliefs in school arithmetic, and reading the division as “how many … in …?”
      cures it.</div>`
    },
    {
      h: 'Rounding',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Rule</th><th>Statement</th></tr></thead>
      <tbody>
        <tr><td>look at</td><td>the first digit you are discarding</td></tr>
        <tr><td>if it is ${m('0–4')}</td><td>leave the kept digit alone</td></tr>
        <tr><td>if it is ${m('5–9')}</td><td>add ${m('1')} to the kept digit</td></tr>
      </tbody></table></div>
      <p><b>Decimal places</b> count from the point; <b>significant figures</b> count from the first
      non-zero digit.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Number</th><th>2 d.p.</th><th>2 s.f.</th></tr></thead>
      <tbody>
        <tr><td class="m">3.4567</td><td class="m">3.46</td><td class="m">3.5</td></tr>
        <tr><td class="m">0.004829</td><td class="m">0.00</td><td class="m">0.0048</td></tr>
        <tr><td class="m">1954</td><td class="m">1954.00</td><td class="m">2000</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Leading zeros are not significant</span>
      In ${m('0.004829')} the first significant figure is the ${m('4')}. That is why the two columns above
      differ so sharply for that row.</div>`
    },
    {
      h: 'Estimating',
      html: `<p>Round every number to ${m('1')} significant figure, compute, and compare with the exact
      answer.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Calculation</th><th>Estimate</th><th>Exact</th></tr></thead>
      <tbody>
        <tr><td class="m">4.8 × 21.3</td><td class="m">5 × 20 = 100</td><td class="m">102.24</td></tr>
        <tr><td class="m">39.6 ÷ 0.21</td><td class="m">40 ÷ 0.2 = 200</td><td class="m">188.6</td></tr>
        <tr><td class="m">6.9 × 0.48</td><td class="m">7 × 0.5 = 3.5</td><td class="m">3.312</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Estimate first, then compute</div>
      An estimate that is ten times out from the answer means a decimal point was misplaced. Thirty
      seconds of estimating catches errors no amount of re-checking the digits will find.</div>`
    }
  ],
  examples: [
    {
      q: 'Compute ' + m('4.7 × 0.01') + ' and ' + m('4.7 ÷ 0.01') + '.',
      steps: [
        [m('× 0.01') + ' moves the point ' + m('2') + ' places left.', ''],
        [m('4.7 × 0.01 = 0.047'), ''],
        [m('÷ 0.01') + ' moves it ' + m('2') + ' places right.', ''],
        [m('4.7 ÷ 0.01 = 470'), '']
      ],
      ans: m('0.047') + ' and ' + m('470')
    },
    {
      q: 'Round ' + m('3.4567') + ' to two decimal places and to two significant figures.',
      steps: [
        ['2 d.p.: keep ' + m('3.45') + ', next digit ' + m('6') + '.', ''],
        [m('≈ 3.46'), ''],
        ['2 s.f.: keep ' + m('3.4') + ', next digit ' + m('5') + '.', ''],
        [m('≈ 3.5'), '']
      ],
      ans: m('3.46') + ' and ' + m('3.5')
    },
    {
      q: 'Estimate ' + m('39.6 ÷ 0.21') + ', then say whether ' + m('18.86') + ' is a plausible answer.',
      steps: [
        [m('40 ÷ 0.2'), 'One significant figure each.'],
        [m('= 200'), ''],
        [m('18.86') + ' is ten times too small.', ''],
        ['The true answer is about ' + m('189') + '.', 'A misplaced point.']
      ],
      ans: 'No — about ' + m('189')
    }
  ],
  modelNote: 'Ask how many 10-tiyin coins make a sum before doing any division by 0.1; the arithmetic follows from the question, not from a rule.',
  interactive: {
    type: 'substitute',
    title: 'Moving the decimal point',
    hint: 'Multiply and divide by the same small number and watch it return.'
  },
  quiz: [
    { q: m('× 0.1') + ' moves the point:', a: ['one right', 'one left', 'two right', 'two left'], c: 1, why: 'Same as ' + m('÷ 10') + '.' },
    { q: m('÷ 0.01') + ' moves the point:', a: ['two left', 'two right', 'one right', 'not at all'], c: 1, why: 'Same as ' + m('× 100') + '.' },
    { q: m('6 ÷ 0.1') + ' equals:', a: [m('0.6'), m('6'), m('60'), m('0.06')], c: 2, why: 'Sixty tenths.' },
    { q: 'Dividing by a number less than ' + m('1') + ':', a: ['makes it smaller', 'makes it larger', 'leaves it', 'is impossible'], c: 1, why: 'There are more small parts.' },
    { q: m('3.4567') + ' to 2 s.f.:', a: [m('3.45'), m('3.46'), m('3.5'), m('3.4')], c: 2, why: 'Next digit is ' + m('5') + '.' },
    { q: 'In ' + m('0.00482') + ' the first significant figure is:', a: [m('0'), m('4'), m('8'), m('2')], c: 1, why: 'Leading zeros do not count.' }
  ],
  practice: {
    easy: [
      [m('3.7 × 0.1'), m('0.37')],
      [m('3.7 × 0.01'), m('0.037')],
      [m('3.7 ÷ 0.1'), m('37')],
      [m('3.7 ÷ 0.01'), m('370')],
      [m('6 ÷ 0.5'), m('12')],
      [m('6 ÷ 0.1'), m('60')],
      [m('4.7 × 0.01'), m('0.047')]
    ],
    med: [
      [m('3.4567') + ' to 2 d.p.', m('3.46')],
      [m('3.4567') + ' to 2 s.f.', m('3.5')],
      [m('0.004829') + ' to 2 s.f.', m('0.0048')],
      [m('1954') + ' to 2 s.f.', m('2000')],
      ['Estimate ' + m('4.8 × 21.3'), m('100')],
      ['Estimate ' + m('39.6 ÷ 0.21'), m('200')],
      [m('0.42 ÷ 0.01'), m('42')]
    ],
    hard: [
      [m('0.6 × 0.4 ÷ 0.02'), m('12')],
      [m('(0.3)² ÷ 0.09'), m('1')],
      ['Estimate ' + m(f('58.7 × 0.51', '0.19')), m('≈ 150')],
      [m('12.345') + ' to 3 s.f.', m('12.3')],
      [m('0.09995') + ' to 3 d.p.', m('0.100')],
      ['A rope of ' + m('8.4 m') + ' cut into ' + m('0.35 m') + ' pieces', m('24') + ' pieces'],
      ['Why does ' + m('÷ 0.1') + ' multiply by ' + m('10') + '?', 'There are ten tenths in one whole']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Estimate every calculation to one significant figure before doing it exactly.',
  homework: [
    'Compute ' + m('5.6 × 0.1') + ', ' + m('5.6 × 0.001') + ', ' + m('5.6 ÷ 0.1') + ' and ' + m('5.6 ÷ 0.001') + '.',
    'Round ' + m('27.4863') + ' to 1, 2 and 3 decimal places.',
    'Round ' + m('0.0035729') + ' to 2 and 3 significant figures.',
    'Estimate ' + m('7.8 × 0.49') + ' and then compute it exactly.',
    'A ribbon of ' + m('6.3 m') + ' is cut into pieces of ' + m('0.45 m') + '. How many pieces?'
  ]
});

/* ============================== 5 ============================== */
G7_MAT.push({
  id: 'g7-05', stream: 'mat', grade: 7, quarter: 1, lessons: '9–10', hours: 2,
  title: 'Perpendicular lines',
  subtitle: 'The right angle, made and used — and the shortest distance from a point to a line.',
  uz: 'Matematika 7, §4', uzPage: 'pp. 26–31',
  cam: 'S8 5.3', camPage: 'Stage 8, pp. 53–56', wb: 'Exercise 5.3',
  objectives: [
    'Define perpendicular lines and use the symbol ⊥.',
    'Construct a perpendicular through a point on a line and off it.',
    'Know that the perpendicular is the shortest distance from a point to a line.',
    'Use vertical and adjacent angles at an intersection.'
  ],
  terms: [
    ['Perpendicular', 'Perpendikulyar', 'Перпендикуляр'],
    ['Right angle', 'To‘g‘ri burchak', 'Прямой угол'],
    ['Foot of a perpendicular', 'Perpendikulyar asosi', 'Основание перпендикуляра'],
    ['Distance to a line', 'Chiziqqa masofa', 'Расстояние до прямой'],
    ['Adjacent angles', 'Qo‘shni burchaklar', 'Смежные углы'],
    ['Vertical angles', 'Vertikal burchaklar', 'Вертикальные углы'],
    ['Oblique', 'Og‘ma', 'Наклонная'],
    ['Set square', 'Gonio', 'Угольник']
  ],
  timing: [[15, 'Perpendicularity'], [25, 'Angles at a crossing'], [25, 'The construction'], [20, 'The shortest distance'], [5, 'Homework']],
  sections: [
    {
      h: 'Perpendicularity',
      html: `<p>Two lines are <b>perpendicular</b> if they meet at a right angle. Written ${m('a ⊥ b')}.</p>
      <p>When two lines cross, four angles are formed. If one of them is ${m('90°')}, all four are — so
      one right angle at a crossing makes the lines perpendicular.</p>
      {{fig:perpBisector:Perpendicular lines meet at a right angle; the symbol is a small square.}}
      <div class="keybox"><div class="klabel">Through a point there is exactly one perpendicular to a line</div>
      Whether the point is on the line or off it. This uniqueness is what makes “the distance from a
      point to a line” a well-defined quantity.</div>`
    },
    {
      h: 'Angles at a crossing',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Pair</th><th>Position</th><th>Relation</th></tr></thead>
      <tbody>
        <tr><td>adjacent</td><td>share an arm, together make a straight line</td><td>add to ${m('180°')}</td></tr>
        <tr><td>vertical</td><td>opposite each other</td><td>equal</td></tr>
      </tbody></table></div>
      <p><b>Proof that vertical angles are equal.</b> ${m('∠1 + ∠2 = 180°')} and ${m('∠2 + ∠3 = 180°')},
      because each pair is adjacent. Subtracting, ${m('∠1 = ∠3')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>The other three</th></tr></thead>
      <tbody>
        <tr><td class="m">∠1 = 40°</td><td class="m">140°, 40°, 140°</td></tr>
        <tr><td class="m">∠1 = 90°</td><td class="m">90°, 90°, 90°</td></tr>
        <tr><td class="m">∠1 = 115°</td><td class="m">65°, 115°, 65°</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Adjacent means sharing an arm <i>and</i> making a straight line</span>
      Two angles that merely touch are not adjacent in this sense. The definition matters, because only
      genuinely adjacent angles are supplementary.</div>`
    },
    {
      h: 'The construction',
      html: `<p><b>Through a point ${m('A')} on the line ${m('a')}:</b></p>
      <ol>
        <li>with centre ${m('A')}, cut the line at ${m('P')} and ${m('Q')} with one arc;</li>
        <li>with a larger radius, draw arcs from ${m('P')} and ${m('Q')} meeting at ${m('R')};</li>
        <li>${m('AR ⊥ a')}.</li>
      </ol>
      <p><b>Through a point ${m('B')} not on the line:</b></p>
      <ol>
        <li>with centre ${m('B')}, draw an arc cutting the line at ${m('P')} and ${m('Q')};</li>
        <li>from ${m('P')} and ${m('Q')}, equal arcs meeting at ${m('S')} on the far side;</li>
        <li>${m('BS ⊥ a')}.</li>
      </ol>
      {{fig:bisectorConstruction:Equal arcs from two points give the perpendicular — the same idea in both cases.}}
      <div class="keybox"><div class="klabel">Both constructions are the perpendicular bisector</div>
      In each case ${m('P')} and ${m('Q')} are equidistant from the new point, so the line through it is
      the perpendicular bisector of ${m('PQ')}. One construction, learnt once.</div>`
    },
    {
      h: 'The shortest distance',
      html: `<p>From a point ${m('B')} off a line, the perpendicular ${m('BH')} is shorter than every
      <b>oblique</b> ${m('BC')} to the line.</p>
      ${eq(m('BH < BC') + '   for every ' + m('C ≠ H') + ' on the line', true)}
      <p><b>Why.</b> In the right triangle ${m('BHC')}, ${m('BC')} is the hypotenuse and ${m('BH')} a
      leg — and the hypotenuse is always the longest side.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Term</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td>the foot ${m('H')}</td><td>where the perpendicular meets the line</td></tr>
        <tr><td>the distance from ${m('B')} to ${m('a')}</td><td class="m">BH</td></tr>
        <tr><td>the projection of ${m('BC')}</td><td class="m">HC</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">“Distance to a line” always means the perpendicular distance</span>
      Not the distance to a convenient point on it. This convention is used in every later chapter — in
      the height of a triangle, in the distance to a plane, in the radius of an inscribed circle.</div>`
    }
  ],
  examples: [
    {
      q: 'Two lines cross and one angle is ' + m('40°') + '. Find the other three.',
      steps: [
        ['Its adjacent angle: ' + m('180° − 40° = 140°') + '.', ''],
        ['Its vertical angle: ' + m('40°') + '.', 'Vertical angles are equal.'],
        ['The fourth: ' + m('140°') + '.', ''],
        ['Check: ' + m('40 + 140 + 40 + 140 = 360') + ' ✓', '']
      ],
      ans: m('140°, 40°, 140°')
    },
    {
      q: 'Two adjacent angles are in the ratio ' + m('2 : 7') + '. Find both.',
      steps: [
        ['They add to ' + m('180°') + '.', ''],
        ['Total parts ' + m('9') + '.', ''],
        ['One part ' + m('= 20°') + '.', ''],
        [m('40°') + ' and ' + m('140°') + '.', '']
      ],
      ans: m('40°') + ' and ' + m('140°')
    },
    {
      q: 'A point ' + m('B') + ' is ' + m('5 cm') + ' from a line, and ' + m('C') + ' on the line is ' + m('12 cm') + ' from the foot. Find ' + m('BC') + '.',
      steps: [
        [m('△BHC') + ' is right-angled at ' + m('H') + '.', ''],
        [m('BC² = 5² + 12²'), 'Pythagoras.'],
        [m('= 169'), ''],
        [m('BC = 13 cm') + ' — longer than ' + m('5 cm') + ' ✓', '']
      ],
      ans: m('13 cm')
    }
  ],
  modelNote: 'Ask a pupil to walk from a desk to the wall by the shortest route; they walk perpendicular without being told, and the theorem is confirmed before it is proved.',
  interactive: {
    type: 'rightTriangle',
    title: 'Perpendicular and oblique',
    hint: 'Slide C along the line and watch BC grow.'
  },
  quiz: [
    { q: m('a ⊥ b') + ' means they meet at:', a: [m('45°'), m('90°'), m('180°'), 'any angle'], c: 1, why: 'A right angle.' },
    { q: 'Vertical angles are:', a: ['supplementary', 'equal', 'complementary', 'unrelated'], c: 1, why: 'Both supplement the same angle.' },
    { q: 'Adjacent angles add to:', a: [m('90°'), m('180°'), m('270°'), m('360°')], c: 1, why: 'They make a straight line.' },
    { q: 'One angle at a crossing is ' + m('115°') + '. The vertical one is:', a: [m('65°'), m('115°'), m('245°'), m('90°')], c: 1, why: 'Equal.' },
    { q: 'The distance from a point to a line is:', a: ['any segment to it', 'the perpendicular', 'the longest segment', 'undefined'], c: 1, why: 'The shortest one.' },
    { q: 'Through a point there is:', a: ['no perpendicular', 'exactly one', 'two', 'many'], c: 1, why: 'Uniqueness.' }
  ],
  practice: {
    easy: [
      ['One angle ' + m('40°') + ': its adjacent', m('140°')],
      ['One angle ' + m('40°') + ': its vertical', m('40°')],
      ['One angle ' + m('115°') + ': its adjacent', m('65°')],
      ['One angle ' + m('90°') + ': all four', m('90°')],
      ['Adjacent angles add to', m('180°')],
      ['Vertical angles are', 'Equal'],
      ['Symbol for perpendicular', m('⊥')]
    ],
    med: [
      ['Adjacent angles in the ratio ' + m('2 : 7'), m('40°') + ' and ' + m('140°')],
      ['Adjacent angles in the ratio ' + m('1 : 5'), m('30°') + ' and ' + m('150°')],
      ['One adjacent angle exceeds the other by ' + m('40°'), m('70°') + ' and ' + m('110°')],
      [m('B') + ' is ' + m('5') + ' from a line, ' + m('HC = 12') + ': ' + m('BC'), m('13')],
      [m('B') + ' is ' + m('9') + ' from a line, ' + m('HC = 12') + ': ' + m('BC'), m('15')],
      ['Two crossing lines make four angles totalling', m('360°')],
      ['One angle is three times its adjacent', m('45°') + ' and ' + m('135°')]
    ],
    hard: [
      ['The bisectors of two adjacent angles meet at', m('90°')],
      ['Three lines through one point make how many pairs of vertical angles?', m('3')],
      [m('BC = 20') + ' and ' + m('BH = 16') + ': ' + m('HC'), m('12')],
      ['A point ' + m('8') + ' from a line: the least possible ' + m('BC'), m('8')],
      ['Two adjacent angles with bisectors ' + m('90°') + ' apart: always true?', 'Yes'],
      ['Four angles at a point in the ratio ' + m('1 : 2 : 3 : 4'), m('36°, 72°, 108°, 144°')],
      ['Why is the hypotenuse the longest side?', 'It faces the largest angle']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Mark every right angle with a small square, and leave construction arcs visible.',
  homework: [
    'Two lines cross and one angle is ' + m('63°') + '. Find the other three.',
    'Two adjacent angles are in the ratio ' + m('3 : 7') + '. Find both.',
    'Construct the perpendicular to a line through a point not on it.',
    'A point is ' + m('6 cm') + ' from a line; a point on the line is ' + m('8 cm') + ' from the foot. Find the distance between them.',
    'Explain why the distance from a point to a line is measured along the perpendicular.'
  ]
});

/* ============================== 6 ============================== */
G7_MAT.push({
  id: 'g7-06', stream: 'mat', grade: 7, quarter: 1, lessons: '11–12', hours: 2,
  title: 'Practical exercises — ordering and multiplying decimals',
  subtitle: 'A Cambridge insert: putting decimals in order, and multiplying them without a calculator.',
  uz: 'Matematika 7, amaliy mashqlar', uzPage: 'pp. 32–35',
  cam: 'S8 4.1–4.2', camPage: 'Stage 8, pp. 36–44', wb: 'Exercise 4.1–4.2',
  objectives: [
    'Order decimals by comparing place value, digit by digit.',
    'Multiply two decimals and place the point by counting decimal places.',
    'Divide a decimal by a decimal by making the divisor whole.',
    'Check every answer by estimation.'
  ],
  terms: [
    ['To order', 'Tartiblash', 'Упорядочить'],
    ['Ascending order', 'O‘sish tartibi', 'По возрастанию'],
    ['Descending order', 'Kamayish tartibi', 'По убыванию'],
    ['Place value', 'Xona qiymati', 'Разрядное значение'],
    ['Divisor', 'Bo‘luvchi', 'Делитель'],
    ['Dividend', 'Bo‘linuvchi', 'Делимое'],
    ['Trailing zero', 'Oxirgi nol', 'Конечный ноль'],
    ['Product', 'Ko‘paytma', 'Произведение']
  ],
  timing: [[15, 'Ordering'], [25, 'Multiplying'], [25, 'Dividing'], [20, 'Checking'], [5, 'Homework']],
  sections: [
    {
      h: 'Ordering',
      html: `<p>Compare decimals digit by digit from the left, not by counting digits.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Pair</th><th>Larger</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td class="m">0.7 and 0.65</td><td class="m">0.7</td><td>${m('7 > 6')} in the tenths</td></tr>
        <tr><td class="m">3.09 and 3.1</td><td class="m">3.1</td><td>${m('1 > 0')} in the tenths</td></tr>
        <tr><td class="m">0.4 and 0.400</td><td>equal</td><td>trailing zeros change nothing</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">More digits does not mean larger</span>
      ${m('0.65')} has more digits than ${m('0.7')} and is smaller. Writing both with the same number of
      decimal places — ${m('0.70')} and ${m('0.65')} — removes the illusion entirely.</div>`
    },
    {
      h: 'Multiplying',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>What to do</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>ignore the points and multiply as whole numbers</td></tr>
        <tr><td>2</td><td>count the decimal places in both factors</td></tr>
        <tr><td>3</td><td>put that many decimal places in the answer</td></tr>
      </tbody></table></div>
      <p><b>Example.</b> ${m('0.34 × 0.6')}. Whole numbers: ${m('34 × 6 = 204')}. Places:
      ${m('2 + 1 = 3')}. Answer: ${m('0.204')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Product</th><th>Whole numbers</th><th>Places</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">0.3 × 0.4</td><td class="m">12</td><td class="m">2</td><td class="m">0.12</td></tr>
        <tr><td class="m">1.2 × 0.05</td><td class="m">60</td><td class="m">3</td><td class="m">0.060</td></tr>
        <tr><td class="m">2.5 × 0.4</td><td class="m">100</td><td class="m">2</td><td class="m">1.00</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Multiplying two decimals below ${m('1')} gives a smaller answer</div>
      ${m('0.3 × 0.4 = 0.12')} — smaller than both. It is the same surprise as division by ${m('0.1')},
      seen from the other side, and the estimate catches it every time.</div>`
    },
    {
      h: 'Dividing',
      html: `<p>Make the <b>divisor</b> a whole number by multiplying both numbers by the same power of
      ten. The quotient is unchanged.</p>
      ${eq(m(f('4.8', '0.06') + ' = ' + f('480', '6') + ' = 80'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Division</th><th>Rewritten</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">7.2 ÷ 0.9</td><td class="m">72 ÷ 9</td><td class="m">8</td></tr>
        <tr><td class="m">0.35 ÷ 0.7</td><td class="m">3.5 ÷ 7</td><td class="m">0.5</td></tr>
        <tr><td class="m">1.44 ÷ 0.12</td><td class="m">144 ÷ 12</td><td class="m">12</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Both numbers must be multiplied</span>
      Multiplying only the divisor changes the answer. Writing the division as a fraction makes it
      obvious: a fraction is unchanged only when top and bottom are treated alike.</div>`
    },
    {
      h: 'Checking',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Check</th><th>Question to ask</th></tr></thead>
      <tbody>
        <tr><td>size</td><td>is the answer roughly what the estimate said?</td></tr>
        <tr><td>direction</td><td>should multiplying have made it bigger or smaller?</td></tr>
        <tr><td>last digit</td><td>does ${m('0.34 × 0.6')} end in the last digit of ${m('4 × 6')}?</td></tr>
        <tr><td>reverse</td><td>does the answer times the divisor give the dividend back?</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The estimate is the check</div>
      Every answer in this lesson can be verified in ten seconds by rounding to one significant figure.
      Doing so consistently is worth more than any amount of careful digit-copying.</div>`
    }
  ],
  examples: [
    {
      q: 'Put in ascending order: ' + m('0.7, 0.65, 0.702, 0.6') + '.',
      steps: [
        ['Write with three decimal places: ' + m('0.700, 0.650, 0.702, 0.600') + '.', ''],
        ['Compare as whole numbers: ' + m('600, 650, 700, 702') + '.', ''],
        [m('0.6 < 0.65 < 0.7 < 0.702'), ''],
        ['Equalising the places is the whole method.', '']
      ],
      ans: m('0.6, 0.65, 0.7, 0.702')
    },
    {
      q: 'Compute ' + m('0.34 × 0.6') + '.',
      steps: [
        [m('34 × 6 = 204'), 'Whole numbers.'],
        ['Decimal places: ' + m('2 + 1 = 3') + '.', ''],
        [m('0.204'), ''],
        ['Estimate: ' + m('0.3 × 0.6 = 0.18') + ' ✓', '']
      ],
      ans: m('0.204')
    },
    {
      q: 'Compute ' + m('4.8 ÷ 0.06') + '.',
      steps: [
        ['Multiply both by ' + m('100') + '.', ''],
        [m('480 ÷ 6'), ''],
        [m('= 80'), ''],
        ['Check: ' + m('80 × 0.06 = 4.8') + ' ✓', '']
      ],
      ans: m('80')
    }
  ],
  modelNote: 'Write 0.7 and 0.65 on the board and ask which is larger; collect the wrong answer, then write 0.70 and 0.65 and let the class correct itself.',
  interactive: {
    type: 'substitute',
    title: 'Decimal products',
    hint: 'Count the places in both factors.'
  },
  quiz: [
    { q: 'Which is larger, ' + m('0.7') + ' or ' + m('0.65') + '?', a: [m('0.7'), m('0.65'), 'equal', 'cannot tell'], c: 0, why: 'Tenths first.' },
    { q: m('0.4') + ' and ' + m('0.400') + ' are:', a: [m('0.4') + ' larger', m('0.400') + ' larger', 'equal', 'different'], c: 2, why: 'Trailing zeros change nothing.' },
    { q: m('0.3 × 0.4') + ' equals:', a: [m('1.2'), m('0.12'), m('0.012'), m('12')], c: 1, why: 'Two decimal places.' },
    { q: m('0.34 × 0.6') + ' has how many decimal places?', a: [m('1'), m('2'), m('3'), m('4')], c: 2, why: m('2 + 1') + '.' },
    { q: m('4.8 ÷ 0.06') + ' equals:', a: [m('0.8'), m('8'), m('80'), m('800')], c: 2, why: m('480 ÷ 6') + '.' },
    { q: 'In a division, you may multiply:', a: ['only the divisor', 'only the dividend', 'both by the same number', 'neither'], c: 2, why: 'The quotient is then unchanged.' }
  ],
  practice: {
    easy: [
      ['Larger: ' + m('0.7') + ' or ' + m('0.65'), m('0.7')],
      ['Larger: ' + m('3.09') + ' or ' + m('3.1'), m('3.1')],
      [m('0.3 × 0.4'), m('0.12')],
      [m('0.2 × 0.5'), m('0.1')],
      [m('7.2 ÷ 0.9'), m('8')],
      [m('0.35 ÷ 0.7'), m('0.5')],
      [m('1.44 ÷ 0.12'), m('12')]
    ],
    med: [
      ['Ascending: ' + m('0.7, 0.65, 0.702, 0.6'), m('0.6, 0.65, 0.7, 0.702')],
      [m('0.34 × 0.6'), m('0.204')],
      [m('1.2 × 0.05'), m('0.06')],
      [m('2.5 × 0.4'), m('1')],
      [m('4.8 ÷ 0.06'), m('80')],
      [m('0.048 ÷ 0.8'), m('0.06')],
      [m('1.25 × 0.08'), m('0.1')]
    ],
    hard: [
      [m('0.25 × 0.4 × 0.5'), m('0.05')],
      [m('(0.2)³'), m('0.008')],
      [m('6.25 ÷ 0.025'), m('250')],
      ['Descending: ' + m('0.09, 0.1, 0.089, 0.091'), m('0.1, 0.091, 0.09, 0.089')],
      [m('0.6 × 0.6 − 0.4 × 0.9'), m('0')],
      ['A cloth of ' + m('0.85 m') + ' costs ' + m('34 000') + ' so‘m: the price per metre', m('40 000')],
      [m('12.5 × 0.008 ÷ 0.05'), m('2')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Estimate every product and quotient before computing it.',
  homework: [
    'Put in ascending order: ' + m('0.45, 0.5, 0.409, 0.451') + '.',
    'Compute ' + m('0.28 × 0.7') + ' and ' + m('1.5 × 0.06') + '.',
    'Compute ' + m('9.6 ÷ 0.08') + ' and ' + m('0.56 ÷ 0.7') + '.',
    'Compute ' + m('(0.3)²') + ' and ' + m('(0.1)³') + '.',
    m('1.2 kg') + ' of rice costs ' + m('18 000') + ' so‘m. Find the price of ' + m('1 kg') + '.'
  ]
});

/* ============================== 7 ============================== */
G7_MAT.push({
  id: 'g7-07', stream: 'mat', grade: 7, quarter: 1, lessons: '13–14', hours: 2,
  title: 'Control work 1, and work on the mistakes',
  subtitle: 'The basic geometric figures, tested — and the first chapter closed.',
  uz: 'Matematika 7, Nazorat ishi 1', uzPage: 'pp. 3–35',
  cam: 'S8 5 review', camPage: 'Stage 8, pp. 48–56', wb: 'Control paper M1',
  objectives: [
    'Use the additive properties of segments and angles under time.',
    'Classify angles and find complements and supplements.',
    'Use vertical and adjacent angles at a crossing.',
    'Classify each lost mark and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Segment', 'Kesma', 'Отрезок'],
    ['Angle', 'Burchak', 'Угол'],
    ['Midpoint', 'O‘rta nuqta', 'Середина'],
    ['Bisector', 'Bissektrisa', 'Биссектриса'],
    ['Adjacent angles', 'Qo‘shni burchaklar', 'Смежные углы'],
    ['Vertical angles', 'Vertikal burchaklar', 'Вертикальные углы'],
    ['Diagnosis', 'Tashxis', 'Диагностика']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [12, 'Answers'], [20, 'Diagnosis and rewrite'], [5, 'The map']],
  sections: [
    {
      h: 'The paper — 25 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>${m('C')} lies between ${m('A')} and ${m('B')}; ${m('AC = 14')}, ${m('AB = 37')}: find ${m('CB')}</td><td class="m">4</td><td>L3–4</td></tr>
        <tr><td>2</td><td>${m('AB = 26 cm')}: find ${m('AM')} for the midpoint ${m('M')}</td><td class="m">3</td><td>L3–4</td></tr>
        <tr><td>3</td><td>Classify ${m('35°')}, ${m('90°')}, ${m('142°')}, ${m('200°')}</td><td class="m">4</td><td>L5–6</td></tr>
        <tr><td>4</td><td>Find the complement and supplement of ${m('48°')}</td><td class="m">4</td><td>L5–6</td></tr>
        <tr><td>5</td><td>Two lines cross; one angle is ${m('71°')}: find the other three</td><td class="m">5</td><td>L9–10</td></tr>
        <tr><td>6</td><td>Compute ${m('0.42 × 0.5')} and ${m('3.6 ÷ 0.04')}</td><td class="m">5</td><td>L7–8, 11–12</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks actually go</div>
      Q1 carries one mark for writing ${m('AB = AC + CB')} before substituting; Q3 one for the reflex
      angle; Q5 two for saying which pairs are vertical; Q6 two for the decimal places.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>subtraction reversed</td><td class="m">CB = 37 + 14</td><td class="m">CB = 37 − 14</td></tr>
        <tr><td>unit missing</td><td class="m">13</td><td class="m">13 cm</td></tr>
        <tr><td class="m">200°</td><td>“obtuse”</td><td>reflex</td></tr>
        <tr><td>complement and supplement swapped</td><td class="m">132°</td><td>${m('42°')} and ${m('132°')}, named correctly</td></tr>
        <tr><td>vertical taken as supplementary</td><td class="m">109°</td><td class="m">71°</td></tr>
        <tr><td>decimal places miscounted</td><td class="m">0.42 × 0.5 = 2.1</td><td class="m">0.21</td></tr>
        <tr><td>only the divisor multiplied</td><td class="m">3.6 ÷ 4 = 0.9</td><td class="m">360 ÷ 4 = 90</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'Chapter I as one map',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Block</th><th>The sentence</th></tr></thead>
      <tbody>
        <tr><td>the basic figures</td><td>point, line and plane are undefined; everything else follows</td></tr>
        <tr><td>the segment</td><td>${m('AB = AC + CB')} when ${m('C')} is between</td></tr>
        <tr><td>the midpoint</td><td class="m">AM = MB = ${f('AB', '2')}</td></tr>
        <tr><td>the angle</td><td>two rays from one vertex, measured in degrees</td></tr>
        <tr><td>the five kinds</td><td>acute, right, obtuse, straight, reflex</td></tr>
        <tr><td>at a crossing</td><td>adjacent add to ${m('180°')}, vertical are equal</td></tr>
        <tr><td>perpendicular</td><td>the shortest distance from a point to a line</td></tr>
        <tr><td>decimals</td><td>count the places when multiplying; make the divisor whole when dividing</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Looking forward</div>
      The next chapter leaves geometry for a while and introduces <b>negative numbers</b> — the first
      real widening of the number system since fractions. The four operations all have to be learnt
      again, with signs.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q1: ' + m('AC = 14') + ', ' + m('AB = 37') + '.',
      steps: [
        [m('AB = AC + CB'), 'The formula first.'],
        [m('37 = 14 + CB'), ''],
        [m('CB = 23'), ''],
        ['With the unit: ' + m('23 cm') + '.', '']
      ],
      ans: m('CB = 23 cm')
    },
    {
      q: 'Model answer, Q5: one angle at a crossing is ' + m('71°') + '.',
      steps: [
        ['Adjacent: ' + m('180° − 71° = 109°') + '.', ''],
        ['Vertical to the first: ' + m('71°') + '.', 'Equal.'],
        ['The fourth: ' + m('109°') + '.', ''],
        ['Total ' + m('360°') + ' ✓', '']
      ],
      ans: m('109°, 71°, 109°')
    },
    {
      q: 'Model answer, Q6: ' + m('0.42 × 0.5') + ' and ' + m('3.6 ÷ 0.04') + '.',
      steps: [
        [m('42 × 5 = 210') + '; places ' + m('2 + 1 = 3') + '.', ''],
        [m('= 0.210 = 0.21'), ''],
        [m('3.6 ÷ 0.04 = 360 ÷ 4'), 'Both × ' + m('100') + '.'],
        [m('= 90'), '']
      ],
      ans: m('0.21') + ' and ' + m('90')
    }
  ],
  modelNote: 'Return the papers with Q3 unmarked and let the class decide together whether 200° is obtuse or reflex; the vocabulary sticks when it is argued over.',
  interactive: {
    type: 'quiz',
    title: 'Chapter I in twelve questions',
    hint: 'Two from each block.',
    items: [
      { q: 'Which is undefined?', a: ['segment', 'point', 'angle', 'triangle'], c: 1, why: 'The chain must stop.' },
      { q: 'Through two points there passes:', a: ['no line', 'one line', 'two lines', 'many'], c: 1, why: 'Axiom 1.' },
      { q: 'Which has two ends?', a: ['a line', 'a ray', 'a segment', 'a plane'], c: 2, why: 'Only a segment.' },
      { q: m('AB = AC + CB') + ' needs ' + m('C') + ':', a: ['anywhere', 'between ' + m('A') + ' and ' + m('B'), 'outside', 'on a ray'], c: 1, why: 'Otherwise false.' },
      { q: 'A right angle is:', a: [m('45°'), m('90°'), m('180°'), m('360°')], c: 1, why: 'A quarter turn.' },
      { q: m('200°') + ' is:', a: ['obtuse', 'straight', 'reflex', 'acute'], c: 2, why: 'Beyond ' + m('180°') + '.' },
      { q: 'Complementary angles add to:', a: [m('90°'), m('180°'), m('270°'), m('360°')], c: 0, why: 'The smaller pair.' },
      { q: 'Vertical angles are:', a: ['supplementary', 'equal', 'complementary', 'unrelated'], c: 1, why: 'Same supplement.' },
      { q: 'The distance to a line is measured:', a: ['any way', 'along the perpendicular', 'to the nearest point drawn', 'in degrees'], c: 1, why: 'The shortest route.' },
      { q: m('0.3 × 0.4') + ' equals:', a: [m('1.2'), m('0.12'), m('0.012'), m('12')], c: 1, why: 'Two places.' },
      { q: m('6 ÷ 0.1') + ' equals:', a: [m('0.6'), m('6'), m('60'), m('600')], c: 2, why: 'Sixty tenths.' },
      { q: m('0.7') + ' and ' + m('0.65') + ':', a: [m('0.65') + ' larger', m('0.7') + ' larger', 'equal', 'cannot tell'], c: 1, why: 'Compare the tenths.' }
    ]
  },
  quiz: [
    { q: 'Q1 begins with:', a: ['the answer', 'the formula', 'a guess', 'a measurement'], c: 1, why: m('AB = AC + CB') + '.' },
    { q: 'Q3 includes which unusual kind?', a: ['acute', 'right', 'reflex', 'straight'], c: 2, why: m('200°') + '.' },
    { q: 'In Q5 the vertical angle is:', a: [m('71°'), m('109°'), m('90°'), m('289°')], c: 0, why: 'Equal, not supplementary.' },
    { q: 'Q6 needs, for the product:', a: ['an estimate only', 'the count of decimal places', 'a calculator', 'rounding'], c: 1, why: m('2 + 1 = 3') + '.' },
    { q: 'For the division in Q6, multiply:', a: ['only the divisor', 'only the dividend', 'both by ' + m('100'), 'neither'], c: 2, why: 'The quotient is unchanged.' },
    { q: 'Work on the mistakes means:', a: ['fix the wrong line', 'rewrite the solution', 'copy the answer', 'skip it'], c: 1, why: 'The whole solution, again.' }
  ],
  practice: {
    easy: [
      [m('AC = 14, AB = 37') + ': ' + m('CB'), m('23')],
      [m('AB = 26') + ': ' + m('AM'), m('13')],
      ['Classify ' + m('35°'), 'Acute'],
      ['Classify ' + m('142°'), 'Obtuse'],
      ['Classify ' + m('200°'), 'Reflex'],
      ['Complement of ' + m('48°'), m('42°')],
      ['Supplement of ' + m('48°'), m('132°')]
    ],
    med: [
      ['One angle ' + m('71°') + ': the other three', m('109°, 71°, 109°')],
      [m('0.42 × 0.5'), m('0.21')],
      [m('3.6 ÷ 0.04'), m('90')],
      [m('AB = 40') + ' with ' + m('AC : CB = 3 : 5') + ': ' + m('AC'), m('15')],
      ['Adjacent angles in the ratio ' + m('1 : 3'), m('45°') + ' and ' + m('135°')],
      ['Bisector of ' + m('126°'), m('63°') + ' each'],
      ['Ascending: ' + m('0.5, 0.45, 0.505'), m('0.45, 0.5, 0.505')]
    ],
    hard: [
      ['An angle is ' + m('5') + ' times its complement', m('75°')],
      [m('AB = 36') + ', ' + m('M') + ' the midpoint of ' + m('AB') + ', ' + m('N') + ' of ' + m('MB') + ': ' + m('AN'), m('27')],
      ['Four angles at a point in the ratio ' + m('2 : 3 : 4 : 3'), m('60°, 90°, 120°, 90°')],
      [m('0.125 × 0.8'), m('0.1')],
      [m('2.4 ÷ 0.015'), m('160')],
      ['A point ' + m('7') + ' from a line and ' + m('24') + ' along it from the foot', m('25')],
      ['Two adjacent angles whose bisectors are ' + m('90°') + ' apart: always?', 'Yes']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite in full every question that lost a mark before the next chapter begins.',
  homework: [
    m('C') + ' lies between ' + m('A') + ' and ' + m('B') + ' with ' + m('AC = 19') + ' and ' + m('AB = 45') + '. Find ' + m('CB') + '.',
    'Find the complement and the supplement of ' + m('27°') + '.',
    'Two lines cross and one angle is ' + m('124°') + '. Find the other three.',
    'Compute ' + m('0.36 × 0.5') + ' and ' + m('4.5 ÷ 0.09') + '.',
    'Classify ' + m('89°') + ', ' + m('90°') + ', ' + m('91°') + ' and ' + m('181°') + '.'
  ]
});

/* ============================== 8 ============================== */
G7_MAT.push({
  id: 'g7-08', stream: 'mat', grade: 7, quarter: 1, lessons: '15–16', hours: 2,
  title: 'The idea of positive and negative numbers',
  subtitle: 'Numbers below zero — invented so that every subtraction has an answer.',
  uz: 'Matematika 7, §5', uzPage: 'pp. 36–41',
  cam: 'S8 1', camPage: 'Stage 8, pp. 2–10', wb: 'Exercise 1.1',
  objectives: [
    'Explain why negative numbers are needed.',
    'Read and write negative numbers, and use them in context.',
    'Interpret a negative number as a direction as well as a size.',
    'Solve simple problems involving temperature, debt and height.'
  ],
  terms: [
    ['Positive number', 'Musbat son', 'Положительное число'],
    ['Negative number', 'Manfiy son', 'Отрицательное число'],
    ['Zero', 'Nol', 'Ноль'],
    ['Sign', 'Ishora', 'Знак'],
    ['Below zero', 'Noldan past', 'Ниже нуля'],
    ['Debt', 'Qarz', 'Долг'],
    ['Sea level', 'Dengiz sathi', 'Уровень моря'],
    ['Rise and fall', 'Ko‘tarilish va pasayish', 'Подъём и спад']
  ],
  timing: [[15, 'Why they are needed'], [25, 'Reading and writing'], [25, 'Direction as well as size'], [20, 'In practice'], [5, 'Homework']],
  sections: [
    {
      h: 'Why they are needed',
      html: `<p>Among the numbers known so far, ${m('3 − 5')} has no answer. Every other operation always
      works; only subtraction can fail.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Operation</th><th>Always possible in ℕ?</th></tr></thead>
      <tbody>
        <tr><td>addition</td><td>yes</td></tr>
        <tr><td>multiplication</td><td>yes</td></tr>
        <tr><td>subtraction</td><td><b>no</b> — ${m('3 − 5')}</td></tr>
        <tr><td>division</td><td>no — ${m('3 ÷ 5')} (that gave fractions)</td></tr>
      </tbody></table></div>
      <p>Fractions were invented so that division always works; <b>negative numbers</b> are invented so
      that subtraction always works. The pattern is the same.</p>
      <div class="keybox"><div class="klabel">The number system grows to fill a gap</div>
      Naturals, then fractions, then negatives, then irrationals in Grade 8, then complex numbers in
      Grade 11 — each new kind of number exists because some ordinary operation had no answer without
      it.</div>`
    },
    {
      h: 'Reading and writing',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Written</th><th>Read</th><th>Means</th></tr></thead>
      <tbody>
        <tr><td class="m">−5</td><td>minus five</td><td>five below zero</td></tr>
        <tr><td class="m">+5</td><td>plus five</td><td>five above zero</td></tr>
        <tr><td class="m">0</td><td>zero</td><td>neither positive nor negative</td></tr>
        <tr><td class="m">−0.4</td><td>minus nought point four</td><td>a negative fraction</td></tr>
      </tbody></table></div>
      <p>The ${m('+')} sign is usually left off: ${m('5')} and ${m('+5')} are the same number. The
      ${m('−')} sign is never left off.</p>
      <div class="warn"><span class="wl">Zero is neither positive nor negative</span>
      It is the boundary between them, and it belongs to neither side. Statements such as “all numbers
      are positive or negative” are false because of zero.</div>`
    },
    {
      h: 'Direction as well as size',
      html: `<p>A negative number carries two pieces of information: a <b>size</b> and a
      <b>direction</b>.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Situation</th><th class="m">+</th><th class="m">−</th></tr></thead>
      <tbody>
        <tr><td>temperature</td><td>above zero</td><td>below zero</td></tr>
        <tr><td>money</td><td>owned</td><td>owed</td></tr>
        <tr><td>height</td><td>above sea level</td><td>below it</td></tr>
        <tr><td>time</td><td>after an event</td><td>before it</td></tr>
        <tr><td>movement</td><td>forwards</td><td>backwards</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Which direction is positive is a choice</div>
      Nothing makes “above sea level” positive; it is a convention. What matters is that once chosen it
      is kept — and that the two directions are opposite.</div>`
    },
    {
      h: 'In practice',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>As a number</th></tr></thead>
      <tbody>
        <tr><td>${m('12')} degrees of frost</td><td class="m">−12°C</td></tr>
        <tr><td>a debt of ${m('50 000')} so‘m</td><td class="m">−50 000</td></tr>
        <tr><td>the Dead Sea shore, ${m('430 m')} below sea level</td><td class="m">−430 m</td></tr>
        <tr><td>a lift going down ${m('3')} floors</td><td class="m">−3</td></tr>
        <tr><td>a loss of ${m('7')} points</td><td class="m">−7</td></tr>
      </tbody></table></div>
      <p><b>Example.</b> The temperature is ${m('−8°C')} and rises by ${m('5')} degrees. It becomes
      ${m('−3°C')} — still below zero. It would need to rise by more than ${m('8')} degrees to reach the
      positive side.</p>
      <div class="warn"><span class="wl">${m('−12')} is colder than ${m('−5')}</span>
      With negatives the bigger-looking number is the smaller one. Reading them on a thermometer, where
      ${m('−12')} is plainly lower down, prevents the mistake.</div>`
    }
  ],
  examples: [
    {
      q: 'Write as numbers: ' + m('7') + ' degrees of frost; a debt of ' + m('30 000') + '; ' + m('250 m') + ' below sea level.',
      steps: [
        ['Frost means below zero: ' + m('−7°C') + '.', ''],
        ['A debt is money owed: ' + m('−30 000') + '.', ''],
        ['Below sea level: ' + m('−250 m') + '.', ''],
        ['Each carries a direction as well as a size.', '']
      ],
      ans: m('−7, −30 000, −250')
    },
    {
      q: 'The temperature is ' + m('−8°C') + ' and rises by ' + m('5') + ' degrees. Then it falls by ' + m('4') + '. Find the final temperature.',
      steps: [
        ['A rise of ' + m('5') + ': ' + m('−8 + 5 = −3') + '.', 'Still below zero.'],
        ['A fall of ' + m('4') + ': ' + m('−3 − 4') + '.', ''],
        [m('= −7°C'), ''],
        ['Colder than it began.', '']
      ],
      ans: m('−7°C')
    },
    {
      q: 'A lift starts on floor ' + m('5') + ', goes down ' + m('8') + ' floors, then up ' + m('2') + '. Where does it stop?',
      steps: [
        [m('5 − 8 = −3'), 'Three floors below the ground.'],
        [m('−3 + 2'), ''],
        [m('= −1'), ''],
        ['The first basement.', '']
      ],
      ans: m('−1') + ' — the first basement'
    }
  ],
  modelNote: 'Draw a thermometer up the side of the board and mark the day’s temperatures; negative numbers arrive as readings, not as an abstraction.',
  interactive: {
    type: 'inequalityLine',
    title: 'Above and below zero',
    hint: 'Slide the marker through zero.'
  },
  quiz: [
    { q: 'Negative numbers were invented so that:', a: ['addition works', 'subtraction always works', 'division works', 'nothing'], c: 1, why: m('3 − 5') + ' needed an answer.' },
    { q: 'Zero is:', a: ['positive', 'negative', 'neither', 'both'], c: 2, why: 'It is the boundary.' },
    { q: m('7') + ' degrees of frost is:', a: [m('7°C'), m('−7°C'), m('70°C'), m('0°C')], c: 1, why: 'Below zero.' },
    { q: 'A debt of ' + m('30 000') + ' is:', a: [m('30 000'), m('−30 000'), m('0'), 'not a number'], c: 1, why: 'Money owed.' },
    { q: m('−8 + 5') + ' equals:', a: [m('−13'), m('−3'), m('3'), m('13')], c: 1, why: 'A rise of five from eight below.' },
    { q: 'Which is colder?', a: [m('−5°C'), m('−12°C'), 'equal', 'cannot tell'], c: 1, why: 'Further below zero.' }
  ],
  practice: {
    easy: [
      [m('9') + ' degrees of frost', m('−9')],
      ['A debt of ' + m('20 000'), m('−20 000')],
      [m('150 m') + ' below sea level', m('−150')],
      ['A gain of ' + m('6') + ' points', m('+6')],
      ['Is ' + m('0') + ' positive?', 'No'],
      ['Is ' + m('0') + ' negative?', 'No'],
      ['Colder: ' + m('−3') + ' or ' + m('−9'), m('−9')]
    ],
    med: [
      [m('−8') + ' rises by ' + m('5'), m('−3')],
      [m('−3') + ' falls by ' + m('4'), m('−7')],
      ['Lift: floor ' + m('5') + ', down ' + m('8') + ', up ' + m('2'), m('−1')],
      ['Temperature ' + m('−15') + ' rises by ' + m('20'), m('+5')],
      ['A balance of ' + m('40 000') + ' after spending ' + m('55 000'), m('−15 000')],
      ['Higher: ' + m('−200 m') + ' or ' + m('−50 m'), m('−50 m')],
      ['A submarine at ' + m('−80 m') + ' rises ' + m('35 m'), m('−45 m')]
    ],
    hard: [
      ['The temperature falls from ' + m('4°C') + ' to ' + m('−11°C') + ': the fall', m('15') + ' degrees'],
      ['A mountain ' + m('3200 m') + ' above a lake ' + m('−150 m') + ': the difference', m('3350 m')],
      ['Five readings ' + m('−3, 0, 2, −5, 1') + ': the coldest and the warmest', m('−5') + ' and ' + m('2')],
      ['Their range', m('7')],
      ['A lift from ' + m('−2') + ' to ' + m('7') + ': floors travelled', m('9')],
      ['A debt of ' + m('80 000') + ' reduced by ' + m('95 000'), m('+15 000')],
      ['Why is zero neither positive nor negative?', 'It is the boundary between them']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Give every answer with its sign and, where there is one, its unit.',
  homework: [
    'Write as numbers: ' + m('14') + ' degrees of frost; a debt of ' + m('45 000') + '; ' + m('60 m') + ' below sea level.',
    'The temperature is ' + m('−6°C') + ' and rises by ' + m('9') + ' degrees. Find it now.',
    'A lift starts on floor ' + m('3') + ', goes down ' + m('7') + ', then up ' + m('5') + '. Where does it stop?',
    'Which is higher: ' + m('−120 m') + ' or ' + m('−45 m') + '?',
    'The temperature falls from ' + m('2°C') + ' to ' + m('−13°C') + '. By how many degrees?'
  ]
});

/* ============================== 9 ============================== */
G7_MAT.push({
  id: 'g7-09', stream: 'mat', grade: 7, quarter: 1, lessons: '17–18', hours: 2,
  title: 'The idea of the integers',
  subtitle: 'The naturals, their opposites and zero — one set closed under subtraction.',
  uz: 'Matematika 7, §6', uzPage: 'pp. 42–46',
  cam: 'S8 1.1', camPage: 'Stage 8, pp. 2–6', wb: 'Exercise 1.1',
  objectives: [
    'Define the set of integers and use the symbol ℤ.',
    'Distinguish natural numbers, whole numbers and integers.',
    'Recall factors, multiples and primes among the naturals.',
    'Decide whether a given number is an integer.'
  ],
  terms: [
    ['Integer', 'Butun son', 'Целое число'],
    ['Natural number', 'Natural son', 'Натуральное число'],
    ['Set', 'To‘plam', 'Множество'],
    ['Factor', 'Bo‘luvchi', 'Делитель'],
    ['Multiple', 'Karrali', 'Кратное'],
    ['Prime number', 'Tub son', 'Простое число'],
    ['Composite number', 'Murakkab son', 'Составное число'],
    ['Closed under', 'Yopiq', 'Замкнутое относительно']
  ],
  timing: [[15, 'The three sets'], [25, 'Closure'], [25, 'Factors, multiples, primes'], [20, 'Recognising integers'], [5, 'Homework']],
  sections: [
    {
      h: 'The three sets',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Set</th><th>Symbol</th><th>Members</th></tr></thead>
      <tbody>
        <tr><td>natural numbers</td><td class="m">ℕ</td><td class="m">1, 2, 3, …</td></tr>
        <tr><td>whole numbers</td><td>—</td><td class="m">0, 1, 2, 3, …</td></tr>
        <tr><td>integers</td><td class="m">ℤ</td><td class="m">…, −2, −1, 0, 1, 2, …</td></tr>
      </tbody></table></div>
      <p>Every natural number is an integer, and every integer is a rational number (the next chapter).
      Written with the subset symbol: ${m('ℕ ⊂ ℤ ⊂ ℚ')}.</p>
      <div class="keybox"><div class="klabel">${m('ℤ')} comes from the German <i>Zahlen</i></div>
      Meaning “numbers”. ${m('ℕ')} is for <i>naturalis</i> and ${m('ℚ')} for <i>quoziente</i>. The
      letters are international, and they will be used for the rest of school mathematics.</div>`
    },
    {
      h: 'Closure',
      html: `<p>A set is <b>closed</b> under an operation if the answer always stays inside the set.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Operation</th><th class="m">ℕ</th><th class="m">ℤ</th></tr></thead>
      <tbody>
        <tr><td>addition</td><td>closed</td><td>closed</td></tr>
        <tr><td>multiplication</td><td>closed</td><td>closed</td></tr>
        <tr><td>subtraction</td><td><b>not</b> closed</td><td>closed</td></tr>
        <tr><td>division</td><td>not closed</td><td>not closed</td></tr>
      </tbody></table></div>
      <p>The third row is the whole reason for the chapter: ${m('3 − 5')} leaves ${m('ℕ')} but stays
      inside ${m('ℤ')}. The fourth row is why ${m('ℚ')} will be needed.</p>
      <div class="warn"><span class="wl">${m('6 ÷ 3 = 2')} does not make ${m('ℤ')} closed under division</span>
      Closure requires <b>every</b> case to work. One counter-example — ${m('3 ÷ 2')} — settles it, just
      as one counter-example disproved a claim in the algebra course.</div>`
    },
    {
      h: 'Factors, multiples, primes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Word</th><th>Means</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>factor of ${m('n')}</td><td>divides ${m('n')} exactly</td><td class="m">1, 2, 3, 4, 6, 12</td></tr>
        <tr><td>multiple of ${m('n')}</td><td>${m('n')} times a whole number</td><td class="m">12, 24, 36, …</td></tr>
        <tr><td>prime</td><td>exactly two factors</td><td class="m">2, 3, 5, 7, 11, 13</td></tr>
        <tr><td>composite</td><td>more than two factors</td><td class="m">4, 6, 8, 9, 10</td></tr>
      </tbody></table></div>
      <p>${m('1')} is neither prime nor composite: it has only one factor. ${m('2')} is the only even
      prime.</p>
      <div class="keybox"><div class="klabel">Every whole number greater than ${m('1')} is a product of primes, in one way only</div>
      ${m('60 = 2² × 3 × 5')}, and no other set of primes gives ${m('60')}. This is the fundamental
      theorem of arithmetic, and it underlies HCF, LCM and every fraction calculation.</div>`
    },
    {
      h: 'Recognising integers',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Number</th><th>An integer?</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td class="m">−7</td><td>yes</td><td>a negative whole number</td></tr>
        <tr><td class="m">0</td><td>yes</td><td>—</td></tr>
        <tr><td class="m">${f('6', '3')}</td><td>yes</td><td>it equals ${m('2')}</td></tr>
        <tr><td class="m">${f('7', '2')}</td><td>no</td><td class="m">3.5</td></tr>
        <tr><td class="m">−4.0</td><td>yes</td><td>it equals ${m('−4')}</td></tr>
        <tr><td class="m">0.333…</td><td>no</td><td class="m">${f('1', '3')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Look at the value, not at the way it is written</span>
      ${m(f('6', '3'))} is written as a fraction but <b>is</b> the integer ${m('2')}. A number is an
      integer if it equals one, however it happens to be written.</div>`
    }
  ],
  examples: [
    {
      q: 'Which of ' + m('−7, 0, ' + f('6', '3') + ', ' + f('7', '2') + ', −4.0, 0.333…') + ' are integers?',
      steps: [
        [m('−7') + ' and ' + m('0') + ' plainly are.', ''],
        [m(f('6', '3') + ' = 2') + ' — an integer.', 'Look at the value.'],
        [m(f('7', '2') + ' = 3.5') + ' — not.', ''],
        [m('−4.0 = −4') + ' — yes; ' + m('0.333… = ' + f('1', '3')) + ' — no.', '']
      ],
      ans: m('−7, 0, ' + f('6', '3') + ', −4.0')
    },
    {
      q: 'List all the factors of ' + m('36') + ', and say whether it is prime.',
      steps: [
        ['Pair them: ' + m('1 × 36, 2 × 18, 3 × 12, 4 × 9, 6 × 6') + '.', ''],
        [m('1, 2, 3, 4, 6, 9, 12, 18, 36'), 'Nine factors.'],
        ['More than two factors.', ''],
        ['Composite.', '']
      ],
      ans: 'Nine factors; composite'
    },
    {
      q: 'Is ' + m('ℤ') + ' closed under subtraction? Under division?',
      steps: [
        ['Subtraction: ' + m('a − b') + ' is always an integer.', 'Closed.'],
        ['Division: ' + m('3 ÷ 2 = 1.5') + '.', ''],
        ['Not an integer.', ''],
        ['Closed under subtraction, not under division.', '']
      ],
      ans: 'Yes; no'
    }
  ],
  modelNote: 'Ask the class to find a subtraction of naturals with no natural answer, then to find one of integers with no integer answer; the second search fails, and closure is understood.',
  interactive: {
    type: 'quiz',
    title: 'Which set does it belong to?',
    hint: 'Look at the value, not the notation.'
  },
  quiz: [
    { q: m('ℤ') + ' denotes:', a: ['the naturals', 'the integers', 'the rationals', 'the reals'], c: 1, why: 'From German <i>Zahlen</i>.' },
    { q: 'Is ' + m('0') + ' a natural number in this course?', a: ['yes', 'no', 'sometimes', 'undefined'], c: 1, why: m('ℕ') + ' starts at ' + m('1') + '.' },
    { q: m('ℤ') + ' is closed under:', a: ['division', 'subtraction', 'both', 'neither'], c: 1, why: m('3 ÷ 2') + ' fails.' },
    { q: 'Is ' + m(f('6', '3')) + ' an integer?', a: ['yes', 'no', 'sometimes', 'undefined'], c: 0, why: 'It equals ' + m('2') + '.' },
    { q: 'How many factors has a prime?', a: [m('1'), m('2'), m('3'), 'many'], c: 1, why: m('1') + ' and itself.' },
    { q: 'Is ' + m('1') + ' prime?', a: ['yes', 'no', 'sometimes', 'undefined'], c: 1, why: 'It has only one factor.' }
  ],
  practice: {
    easy: [
      ['Is ' + m('−7') + ' an integer?', 'Yes'],
      ['Is ' + m('3.5') + ' an integer?', 'No'],
      ['Is ' + m(f('8', '4')) + ' an integer?', 'Yes'],
      ['Is ' + m('0') + ' an integer?', 'Yes'],
      ['Factors of ' + m('12'), m('1, 2, 3, 4, 6, 12')],
      ['The first five primes', m('2, 3, 5, 7, 11')],
      ['Is ' + m('1') + ' prime?', 'No']
    ],
    med: [
      ['Factors of ' + m('36'), m('1,2,3,4,6,9,12,18,36')],
      ['Is ' + m('36') + ' prime or composite?', 'Composite'],
      ['Prime factorisation of ' + m('60'), m('2² × 3 × 5')],
      ['Prime factorisation of ' + m('84'), m('2² × 3 × 7')],
      ['Is ' + m('ℕ') + ' closed under subtraction?', 'No'],
      ['Is ' + m('ℤ') + ' closed under subtraction?', 'Yes'],
      ['Is ' + m('ℤ') + ' closed under division?', 'No']
    ],
    hard: [
      ['HCF of ' + m('36') + ' and ' + m('60'), m('12')],
      ['LCM of ' + m('36') + ' and ' + m('60'), m('180')],
      ['How many factors has ' + m('60') + '?', m('12')],
      ['How many factors has ' + m('2⁴ × 3²') + '?', m('15')],
      ['The only even prime', m('2')],
      ['Every integer is rational: true?', 'Yes — ' + m('n = ' + f('n', '1'))],
      ['Is the set of odd numbers closed under addition?', 'No — the sum is even']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Justify every “no” with a counter-example.',
  homework: [
    'Which of ' + m('−3, 2.5, ' + f('9', '3') + ', 0, −1.5') + ' are integers?',
    'List all the factors of ' + m('48') + ' and say whether it is prime.',
    'Write the prime factorisation of ' + m('90') + '.',
    'Find the HCF and the LCM of ' + m('24') + ' and ' + m('36') + '.',
    'Is the set of even numbers closed under addition? Under division?'
  ]
});

/* ============================== 10 ============================== */
G7_MAT.push({
  id: 'g7-10', stream: 'mat', grade: 7, quarter: 1, lessons: '19–20', hours: 2,
  title: 'Positive and negative numbers on the coordinate line',
  subtitle: 'One line, one origin, one unit — and every integer has its own place.',
  uz: 'Matematika 7, §7', uzPage: 'pp. 47–52',
  cam: 'S8 1', camPage: 'Stage 8, pp. 2–10', wb: 'Exercise 1.1',
  objectives: [
    'Draw a coordinate line with an origin, a direction and a unit.',
    'Mark integers and simple fractions on it.',
    'Read the coordinate of a marked point.',
    'Use the line to compare numbers and to find distances.'
  ],
  terms: [
    ['Coordinate line', 'Koordinata to‘g‘ri chizig‘i', 'Координатная прямая'],
    ['Origin', 'Boshlanish nuqtasi', 'Начало отсчёта'],
    ['Unit segment', 'Birlik kesma', 'Единичный отрезок'],
    ['Coordinate', 'Koordinata', 'Координата'],
    ['Positive direction', 'Musbat yo‘nalish', 'Положительное направление'],
    ['To the right', 'O‘ngda', 'Справа'],
    ['To the left', 'Chapda', 'Слева'],
    ['Distance', 'Masofa', 'Расстояние']
  ],
  timing: [[15, 'Building the line'], [25, 'Marking and reading'], [25, 'Comparing'], [20, 'Distance'], [5, 'Homework']],
  sections: [
    {
      h: 'Building the line',
      html: `<p>A <b>coordinate line</b> needs three things:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Ingredient</th><th>What it fixes</th></tr></thead>
      <tbody>
        <tr><td>an origin ${m('O')}</td><td>where ${m('0')} is</td></tr>
        <tr><td>a positive direction</td><td>which way the numbers grow</td></tr>
        <tr><td>a unit segment</td><td>how far apart consecutive integers are</td></tr>
      </tbody></table></div>
      {{fig:numberLineInterval:An origin, a direction and a unit — and every number has a place.}}
      <p>The number attached to a point is its <b>coordinate</b>, written ${m('A(−3)')}.</p>
      <div class="keybox"><div class="klabel">Every point has exactly one coordinate, and every number exactly one point</div>
      That one-to-one correspondence is what makes the line useful: a question about numbers becomes a
      question about positions, and the other way round.</div>`
    },
    {
      h: 'Marking and reading',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Number</th><th>Position</th></tr></thead>
      <tbody>
        <tr><td class="m">3</td><td>${m('3')} units right of ${m('O')}</td></tr>
        <tr><td class="m">−3</td><td>${m('3')} units left of ${m('O')}</td></tr>
        <tr><td class="m">0</td><td>at ${m('O')}</td></tr>
        <tr><td class="m">2.5</td><td>halfway between ${m('2')} and ${m('3')}</td></tr>
        <tr><td class="m">−1.5</td><td>halfway between ${m('−1')} and ${m('−2')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('−1.5')} lies between ${m('−1')} and ${m('−2')}</span>
      Moving left from ${m('−1')} the numbers become more negative. Reading the negative half as if it
      were the positive half reversed is the commonest error at this stage.</div>`
    },
    {
      h: 'Comparing',
      html: `${eq('Of two numbers, the one further to the right is the greater', true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Comparison</th><th>True statement</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td class="m">3 and 5</td><td class="m">3 < 5</td><td>${m('5')} is further right</td></tr>
        <tr><td class="m">−3 and 5</td><td class="m">−3 < 5</td><td>any negative is less than any positive</td></tr>
        <tr><td class="m">−3 and −5</td><td class="m">−5 < −3</td><td>${m('−5')} is further left</td></tr>
        <tr><td class="m">0 and −2</td><td class="m">−2 < 0</td><td>zero beats every negative</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Among negatives, the order is reversed</div>
      ${m('5 > 3')} but ${m('−5 < −3')}. The picture makes it obvious; the arithmetic alone does not.
      Sketching the line before comparing is worth the four seconds it costs.</div>`
    },
    {
      h: 'Distance',
      html: `<p>The distance between two points is the number of units between them — always
      positive.</p>
      ${eq(m('AB = |a − b|'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Points</th><th>Distance</th></tr></thead>
      <tbody>
        <tr><td class="m">3 and 7</td><td class="m">4</td></tr>
        <tr><td class="m">−3 and 5</td><td class="m">8</td></tr>
        <tr><td class="m">−7 and −2</td><td class="m">5</td></tr>
        <tr><td class="m">−4 and 0</td><td class="m">4</td></tr>
      </tbody></table></div>
      <p>The second row is worth checking on a sketch: from ${m('−3')} to ${m('0')} is ${m('3')} units,
      and from ${m('0')} to ${m('5')} is ${m('5')} more — ${m('8')} in all.</p>
      <div class="warn"><span class="wl">Subtract, then take the size</span>
      ${m('3 − 7 = −4')}, but the distance is ${m('4')}. A distance is never negative, whichever way the
      subtraction is done.</div>`
    }
  ],
  examples: [
    {
      q: 'Mark ' + m('−4, −1.5, 0, 2, 3.5') + ' on a coordinate line and list them in ascending order.',
      steps: [
        ['Draw the origin, the direction and the unit.', ''],
        [m('−4') + ' is four units left; ' + m('−1.5') + ' is between ' + m('−1') + ' and ' + m('−2') + '.', ''],
        ['Reading left to right gives the order.', ''],
        [m('−4 < −1.5 < 0 < 2 < 3.5'), '']
      ],
      ans: m('−4, −1.5, 0, 2, 3.5')
    },
    {
      q: 'Find the distance between the points with coordinates ' + m('−3') + ' and ' + m('5') + '.',
      steps: [
        [m('|−3 − 5| = |−8|'), ''],
        [m('= 8'), ''],
        ['Check on the line: ' + m('3') + ' units to zero, ' + m('5') + ' more.', ''],
        [m('8') + ' units.', '']
      ],
      ans: m('8')
    },
    {
      q: 'Which is greater, ' + m('−7') + ' or ' + m('−2') + '? And ' + m('−7') + ' or ' + m('0.5') + '?',
      steps: [
        [m('−2') + ' is further right than ' + m('−7') + '.', ''],
        [m('−7 < −2'), ''],
        ['Any negative is less than any positive.', ''],
        [m('−7 < 0.5'), '']
      ],
      ans: m('−2') + ' and ' + m('0.5')
    }
  ],
  modelNote: 'Chalk a number line along the floor and have pupils stand on given coordinates; comparing and distance become physical before they are symbolic.',
  interactive: {
    type: 'inequalityLine',
    title: 'The coordinate line',
    hint: 'Drag a point and read its coordinate.'
  },
  quiz: [
    { q: 'A coordinate line needs:', a: ['an origin only', 'an origin, a direction and a unit', 'a unit only', 'two points'], c: 1, why: 'All three.' },
    { q: m('−1.5') + ' lies between:', a: [m('−1') + ' and ' + m('0'), m('−1') + ' and ' + m('−2'), m('1') + ' and ' + m('2'), m('0') + ' and ' + m('1')], c: 1, why: 'Further left than ' + m('−1') + '.' },
    { q: 'The greater of ' + m('−3') + ' and ' + m('−5') + ':', a: [m('−3'), m('−5'), 'equal', 'cannot tell'], c: 0, why: 'Further right.' },
    { q: 'Any negative number is:', a: ['greater than every positive', 'less than every positive', 'equal to zero', 'undefined'], c: 1, why: 'It lies left of zero.' },
    { q: 'The distance between ' + m('−3') + ' and ' + m('5') + ':', a: [m('2'), m('8'), m('−8'), m('15')], c: 1, why: m('|−3 − 5|') + '.' },
    { q: 'A distance is:', a: ['sometimes negative', 'never negative', 'always zero', 'a coordinate'], c: 1, why: 'It is a length.' }
  ],
  practice: {
    easy: [
      ['Greater: ' + m('3') + ' or ' + m('5'), m('5')],
      ['Greater: ' + m('−3') + ' or ' + m('5'), m('5')],
      ['Greater: ' + m('−3') + ' or ' + m('−5'), m('−3')],
      ['Greater: ' + m('0') + ' or ' + m('−2'), m('0')],
      ['Distance from ' + m('3') + ' to ' + m('7'), m('4')],
      ['Distance from ' + m('−7') + ' to ' + m('−2'), m('5')],
      ['Distance from ' + m('−4') + ' to ' + m('0'), m('4')]
    ],
    med: [
      ['Ascending: ' + m('−4, −1.5, 0, 2, 3.5'), 'As written'],
      ['Ascending: ' + m('2, −7, 0, −1, 5'), m('−7, −1, 0, 2, 5')],
      ['Distance from ' + m('−3') + ' to ' + m('5'), m('8')],
      ['Distance from ' + m('−12') + ' to ' + m('4'), m('16')],
      ['The point halfway between ' + m('−6') + ' and ' + m('2'), m('−2')],
      ['The point halfway between ' + m('−9') + ' and ' + m('−1'), m('−5')],
      ['Descending: ' + m('−2, −8, 3, 0'), m('3, 0, −2, −8')]
    ],
    hard: [
      ['All integers ' + m('x') + ' with ' + m('−4 < x ≤ 2'), m('−3, −2, −1, 0, 1, 2')],
      ['How many integers between ' + m('−15') + ' and ' + m('9') + '?', m('23')],
      ['Points ' + m('5') + ' units from ' + m('−2'), m('3') + ' and ' + m('−7')],
      ['A point twice as far from ' + m('0') + ' as ' + m('−4') + ', on the same side', m('−8')],
      ['The midpoint of ' + m('a') + ' and ' + m('b'), m(f('a + b', '2'))],
      ['Distance between ' + m('a') + ' and ' + m('−a'), m('2|a|')],
      ['All ' + m('x') + ' with distance ' + m('3') + ' from ' + m('7'), m('4') + ' and ' + m('10')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Sketch the line for every comparison; the picture is the argument.',
  homework: [
    'Mark ' + m('−5, −2.5, 0, 1, 4') + ' on a coordinate line.',
    'Put in ascending order: ' + m('3, −6, 0, −1, 2') + '.',
    'Find the distance between ' + m('−8') + ' and ' + m('3') + '.',
    'Find the point halfway between ' + m('−10') + ' and ' + m('4') + '.',
    'List all integers ' + m('x') + ' with ' + m('−5 ≤ x < 3') + '.'
  ]
});

/* ============================== 11 ============================== */
G7_MAT.push({
  id: 'g7-11', stream: 'mat', grade: 7, quarter: 1, lessons: '21–22', hours: 2,
  title: 'Opposite numbers, and the modulus of a number',
  subtitle: 'The same distance from zero, on the two sides — and the number that forgets the side.',
  uz: 'Matematika 7, §8', uzPage: 'pp. 53–58',
  cam: 'S8 1', camPage: 'Stage 8, pp. 2–10', wb: 'Exercise 1.1',
  objectives: [
    'Define opposite numbers and use −(−a) = a.',
    'Define the modulus and compute it for any number.',
    'Solve simple equations of the form |x| = a.',
    'Use the modulus to express a distance on the coordinate line.'
  ],
  terms: [
    ['Opposite number', 'Qarama-qarshi son', 'Противоположное число'],
    ['Modulus', 'Modul', 'Модуль'],
    ['Absolute value', 'Absolyut qiymat', 'Абсолютная величина'],
    ['Distance from zero', 'Noldan masofa', 'Расстояние от нуля'],
    ['Non-negative', 'Manfiy emas', 'Неотрицательный'],
    ['Two solutions', 'Ikkita yechim', 'Два решения'],
    ['Sign', 'Ishora', 'Знак'],
    ['Symmetric', 'Simmetrik', 'Симметричный']
  ],
  timing: [[15, 'Opposite numbers'], [25, 'The modulus'], [25, 'Equations with a modulus'], [20, 'Modulus and distance'], [5, 'Homework']],
  sections: [
    {
      h: 'Opposite numbers',
      html: `<p>Two numbers are <b>opposite</b> if they lie the same distance from ${m('0')} on opposite
      sides. The opposite of ${m('a')} is written ${m('−a')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Number</th><th>Its opposite</th></tr></thead>
      <tbody>
        <tr><td class="m">7</td><td class="m">−7</td></tr>
        <tr><td class="m">−7</td><td class="m">7</td></tr>
        <tr><td class="m">0</td><td class="m">0</td></tr>
        <tr><td class="m">−2.5</td><td class="m">2.5</td></tr>
      </tbody></table></div>
      ${eq(m('−(−a) = a') + '     ' + m('a + (−a) = 0'), true)}
      <div class="warn"><span class="wl">${m('−a')} is not always a negative number</span>
      If ${m('a = −7')} then ${m('−a = 7')}, which is positive. The minus sign means “the opposite of”,
      not “a negative number”. This is one of the hardest points of the whole chapter.</div>`
    },
    {
      h: 'The modulus',
      html: `<p>The <b>modulus</b> ${m('|a|')} is the distance from ${m('a')} to ${m('0')} on the
      coordinate line. Distance is never negative, so:</p>
      ${eq(m('|a| = a') + ' if ' + m('a ≥ 0') + ',    ' + m('|a| = −a') + ' if ' + m('a < 0'), true)}
      {{fig:modulusLine:The modulus is the distance to the origin — the same for a number and its opposite.}}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">a</th><th class="m">|a|</th></tr></thead>
      <tbody>
        <tr><td class="m">7</td><td class="m">7</td></tr>
        <tr><td class="m">−7</td><td class="m">7</td></tr>
        <tr><td class="m">0</td><td class="m">0</td></tr>
        <tr><td class="m">−2.5</td><td class="m">2.5</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The modulus forgets the sign, and keeps the size</div>
      Opposite numbers have the same modulus, which is exactly what “same distance from zero” means. So
      ${m('|a| = |−a|')} for every ${m('a')}.</div>`
    },
    {
      h: 'Equations with a modulus',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Equation</th><th>Solutions</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td class="m">|x| = 5</td><td>${m('x = 5')} or ${m('x = −5')}</td><td>two points at distance ${m('5')}</td></tr>
        <tr><td class="m">|x| = 0</td><td class="m">x = 0</td><td>only the origin</td></tr>
        <tr><td class="m">|x| = −3</td><td>none</td><td>a distance is never negative</td></tr>
        <tr><td class="m">|x| < 3</td><td class="m">−3 < x < 3</td><td>nearer than ${m('3')} to zero</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('|x| = 5')} has two answers, not one</span>
      Giving only ${m('x = 5')} loses half the marks. Asking “which points are ${m('5')} units from
      zero?” makes both visible immediately.</div>`
    },
    {
      h: 'Modulus and distance',
      html: `<p>The distance between the points with coordinates ${m('a')} and ${m('b')} is</p>
      ${eq(m('d = |a − b| = |b − a|'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Points</th><th>Working</th><th>Distance</th></tr></thead>
      <tbody>
        <tr><td class="m">3, 10</td><td class="m">|3 − 10| = |−7|</td><td class="m">7</td></tr>
        <tr><td class="m">−4, 6</td><td class="m">|−4 − 6| = |−10|</td><td class="m">10</td></tr>
        <tr><td class="m">−9, −2</td><td class="m">|−9 + 2| = |−7|</td><td class="m">7</td></tr>
      </tbody></table></div>
      <p>The order of subtraction does not matter, because ${m('|a − b|')} and ${m('|b − a|')} are
      opposites and therefore have the same modulus.</p>
      <div class="keybox"><div class="klabel">Two useful properties</div>
      ${m('|ab| = |a| · |b|')} and ${m('|a| ≥ 0')} always, with equality only for ${m('a = 0')}. Both
      follow at once from the definition, and both will be used in every later year.</div>`
    }
  ],
  examples: [
    {
      q: 'Find ' + m('|−7|') + ', ' + m('|3.5|') + ', ' + m('|0|') + ' and ' + m('−(−4)') + '.',
      steps: [
        [m('|−7| = 7'), 'Seven units from zero.'],
        [m('|3.5| = 3.5'), ''],
        [m('|0| = 0'), ''],
        [m('−(−4) = 4'), 'The opposite of the opposite.']
      ],
      ans: m('7, 3.5, 0, 4')
    },
    {
      q: 'Solve ' + m('|x| = 6') + ' and ' + m('|x| = −2') + '.',
      steps: [
        ['Which points are ' + m('6') + ' from zero?', ''],
        [m('x = 6') + ' or ' + m('x = −6') + '.', 'Two answers.'],
        ['A distance is never negative.', ''],
        [m('|x| = −2') + ' has no solution.', '']
      ],
      ans: m('x = ±6') + '; no solution'
    },
    {
      q: 'Find the distance between the points ' + m('−4') + ' and ' + m('6') + ' on the coordinate line.',
      steps: [
        [m('d = |−4 − 6|'), ''],
        [m('= |−10|'), ''],
        [m('= 10'), ''],
        ['Check: ' + m('4') + ' units to zero, then ' + m('6') + ' more.', '']
      ],
      ans: m('10')
    }
  ],
  modelNote: 'Ask two pupils to stand equally far from a chalk zero on opposite sides; they have opposite coordinates and the same modulus, and the definition needs no more.',
  interactive: {
    type: 'inequalityLine',
    title: 'Distance from zero',
    hint: 'Move the point and watch |x| stay positive.'
  },
  quiz: [
    { q: 'The opposite of ' + m('−7') + ':', a: [m('−7'), m('7'), m('0'), m(f('1', '7'))], c: 1, why: 'The same distance, other side.' },
    { q: m('−(−a)') + ' equals:', a: [m('−a'), m('a'), m('0'), m('|a|')], c: 1, why: 'The opposite of the opposite.' },
    { q: m('|−7|') + ' equals:', a: [m('−7'), m('7'), m('0'), m('49')], c: 1, why: 'A distance.' },
    { q: m('|x| = 5') + ' has:', a: ['one solution', 'two solutions', 'no solution', 'many'], c: 1, why: m('±5') + '.' },
    { q: m('|x| = −3') + ' has:', a: ['one solution', 'two solutions', 'no solution', m('x = 3')], c: 2, why: 'Distance is non-negative.' },
    { q: 'The distance between ' + m('a') + ' and ' + m('b') + ':', a: [m('a − b'), m('|a − b|'), m('a + b'), m('|a| − |b|')], c: 1, why: 'Never negative.' }
  ],
  practice: {
    easy: [
      ['Opposite of ' + m('7'), m('−7')],
      ['Opposite of ' + m('−7'), m('7')],
      ['Opposite of ' + m('0'), m('0')],
      [m('|−7|'), m('7')],
      [m('|3.5|'), m('3.5')],
      [m('|0|'), m('0')],
      [m('−(−4)'), m('4')]
    ],
    med: [
      ['Solve ' + m('|x| = 6'), m('x = ±6')],
      ['Solve ' + m('|x| = 0'), m('x = 0')],
      ['Solve ' + m('|x| = −2'), 'No solution'],
      ['Distance between ' + m('−4') + ' and ' + m('6'), m('10')],
      ['Distance between ' + m('−9') + ' and ' + m('−2'), m('7')],
      [m('|−3| + |5|'), m('8')],
      [m('|−3 + 5|'), m('2')]
    ],
    hard: [
      ['Solve ' + m('|x| < 3') + ' in integers', m('−2, −1, 0, 1, 2')],
      ['Solve ' + m('|x| ≥ 4') + ' in integers from ' + m('−6') + ' to ' + m('6'), m('±4, ±5, ±6')],
      [m('|−2| · |−5|'), m('10')],
      [m('|(−2)(−5)|'), m('10')],
      ['For which ' + m('a') + ' is ' + m('|a| = a') + '?', m('a ≥ 0')],
      ['For which ' + m('a') + ' is ' + m('|a| = −a') + '?', m('a ≤ 0')],
      ['Solve ' + m('|x − 3| = 5'), m('x = 8') + ' or ' + m('x = −2')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every modulus question has a picture: mark the point and measure to zero.',
  homework: [
    'Find ' + m('|−12|') + ', ' + m('|4.8|') + ', ' + m('−(−9)') + ' and the opposite of ' + m('−15') + '.',
    'Solve ' + m('|x| = 9') + ' and ' + m('|x| = −1') + '.',
    'Find the distance between ' + m('−11') + ' and ' + m('5') + '.',
    'List all integers with ' + m('|x| ≤ 3') + '.',
    'Explain why ' + m('−a') + ' need not be a negative number.'
  ]
});

/* ============================== 12 ============================== */
G7_MAT.push({
  id: 'g7-12', stream: 'mat', grade: 7, quarter: 1, lessons: '23–24', hours: 2,
  title: 'Comparing integers',
  subtitle: 'Two rules, both read off the coordinate line — and one trap with negatives.',
  uz: 'Matematika 7, §9', uzPage: 'pp. 59–63',
  cam: 'S8 1', camPage: 'Stage 8, pp. 2–10', wb: 'Exercise 1.1',
  objectives: [
    'Compare any two integers using their positions on the line.',
    'Compare two negatives by comparing their moduli, in reverse.',
    'Order a list of integers, ascending and descending.',
    'Use the symbols <, >, ≤, ≥ correctly.'
  ],
  terms: [
    ['To compare', 'Taqqoslash', 'Сравнить'],
    ['Greater than', 'Katta', 'Больше'],
    ['Less than', 'Kichik', 'Меньше'],
    ['Ascending order', 'O‘sish tartibi', 'По возрастанию'],
    ['Descending order', 'Kamayish tartibi', 'По убыванию'],
    ['Inequality sign', 'Tengsizlik belgisi', 'Знак неравенства'],
    ['Between', 'Orasida', 'Между'],
    ['Consecutive', 'Ketma-ket', 'Последовательные']
  ],
  timing: [[15, 'The rules'], [25, 'Two negatives'], [25, 'Ordering'], [20, 'The symbols'], [5, 'Homework']],
  sections: [
    {
      h: 'The rules',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Case</th><th>Rule</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>both positive</td><td>as usual</td><td class="m">3 < 8</td></tr>
        <tr><td>one of each</td><td>the negative is smaller</td><td class="m">−3 < 8</td></tr>
        <tr><td>a negative and zero</td><td>the negative is smaller</td><td class="m">−3 < 0</td></tr>
        <tr><td>zero and a positive</td><td>zero is smaller</td><td class="m">0 < 8</td></tr>
        <tr><td>both negative</td><td>the one with the larger modulus is smaller</td><td class="m">−8 < −3</td></tr>
      </tbody></table></div>
      <p>Every row is the same statement about the line: further right means greater.</p>
      <div class="keybox"><div class="klabel">One picture replaces five rules</div>
      Sketch the line, mark both numbers, read left to right. The table above is only a record of what
      the picture shows.</div>`
    },
    {
      h: 'Two negatives',
      html: `<p>This is the only case that catches people out.</p>
      ${eq('For negatives: the bigger the modulus, the smaller the number', true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Pair</th><th>Moduli</th><th>Comparison</th></tr></thead>
      <tbody>
        <tr><td class="m">−3, −8</td><td class="m">3, 8</td><td class="m">−8 < −3</td></tr>
        <tr><td class="m">−15, −2</td><td class="m">15, 2</td><td class="m">−15 < −2</td></tr>
        <tr><td class="m">−1, −100</td><td class="m">1, 100</td><td class="m">−100 < −1</td></tr>
      </tbody></table></div>
      <p>A debt of ${m('100')} is a worse position than a debt of ${m('1')}; a temperature of
      ${m('−100°')} is colder than ${m('−1°')}. The rule matches every real situation.</p>
      <div class="warn"><span class="wl">${m('−8 > −3')} is false</span>
      Comparing the moduli and forgetting to reverse is the standard mistake. Saying the numbers aloud
      as temperatures settles it in a second.</div>`
    },
    {
      h: 'Ordering',
      html: `<p><b>Ascending</b> means smallest first; <b>descending</b> means largest first.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>List</th><th>Ascending</th></tr></thead>
      <tbody>
        <tr><td class="m">3, −7, 0, −1, 5</td><td class="m">−7, −1, 0, 3, 5</td></tr>
        <tr><td class="m">−2, −9, −5</td><td class="m">−9, −5, −2</td></tr>
        <tr><td class="m">10, −10, 1, −1</td><td class="m">−10, −1, 1, 10</td></tr>
      </tbody></table></div>
      <p>A method that never fails: put the negatives first, ordered by decreasing modulus, then zero,
      then the positives ordered as usual.</p>
      <div class="keybox"><div class="klabel">Say the list as temperatures</div>
      “Minus nine, minus five, minus two, zero, three, five” is plainly a list of increasing warmth. The
      language does the ordering for you.</div>`
    },
    {
      h: 'The symbols',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Symbol</th><th>Read</th><th>True example</th></tr></thead>
      <tbody>
        <tr><td class="m">&lt;</td><td>is less than</td><td class="m">−5 &lt; −2</td></tr>
        <tr><td class="m">&gt;</td><td>is greater than</td><td class="m">3 &gt; −7</td></tr>
        <tr><td class="m">≤</td><td>is less than or equal to</td><td class="m">4 ≤ 4</td></tr>
        <tr><td class="m">≥</td><td>is greater than or equal to</td><td class="m">−2 ≥ −2</td></tr>
        <tr><td class="m">≠</td><td>is not equal to</td><td class="m">3 ≠ −3</td></tr>
      </tbody></table></div>
      <p>A double inequality such as ${m('−3 < x ≤ 2')} says two things at once, and is read as a
      stretch of the line between two marks.</p>
      <div class="warn"><span class="wl">The point of the symbol faces the smaller number</span>
      ${m('−5 < −2')}: the narrow end is at ${m('−5')}. Reading the symbol as a mouth that eats the
      larger number is a reliable check.</div>`
    }
  ],
  examples: [
    {
      q: 'Compare ' + m('−8') + ' and ' + m('−3') + ', and ' + m('−8') + ' and ' + m('3') + '.',
      steps: [
        ['Both negative: compare moduli ' + m('8') + ' and ' + m('3') + '.', ''],
        ['Larger modulus, smaller number: ' + m('−8 < −3') + '.', ''],
        ['A negative is always less than a positive.', ''],
        [m('−8 < 3'), '']
      ],
      ans: m('−8 < −3') + ' and ' + m('−8 < 3')
    },
    {
      q: 'Put ' + m('3, −7, 0, −1, 5') + ' in ascending order.',
      steps: [
        ['Negatives first, by decreasing modulus: ' + m('−7, −1') + '.', ''],
        ['Then zero.', ''],
        ['Then the positives: ' + m('3, 5') + '.', ''],
        [m('−7, −1, 0, 3, 5'), '']
      ],
      ans: m('−7, −1, 0, 3, 5')
    },
    {
      q: 'List all integers ' + m('x') + ' with ' + m('−4 ≤ x < 2') + '.',
      steps: [
        [m('≤') + ' includes ' + m('−4') + '.', ''],
        [m('<') + ' excludes ' + m('2') + '.', ''],
        ['Count from ' + m('−4') + ' up to ' + m('1') + '.', ''],
        [m('−4, −3, −2, −1, 0, 1'), 'Six integers.']
      ],
      ans: m('−4, −3, −2, −1, 0, 1')
    }
  ],
  modelNote: 'Read a week of winter temperatures aloud and ask which day was coldest; the ordering of negatives is settled by experience before it is a rule.',
  interactive: {
    type: 'inequalityLine',
    title: 'Ordering on the line',
    hint: 'Drag two points and read the inequality.'
  },
  quiz: [
    { q: 'Which is greater, ' + m('−8') + ' or ' + m('−3') + '?', a: [m('−8'), m('−3'), 'equal', 'cannot tell'], c: 1, why: 'Further right.' },
    { q: 'A negative number compared with a positive is:', a: ['greater', 'less', 'equal', 'it depends'], c: 1, why: 'It lies left of zero.' },
    { q: 'For negatives, a larger modulus means:', a: ['a larger number', 'a smaller number', 'the same', 'nothing'], c: 1, why: 'Further left.' },
    { q: 'Ascending order of ' + m('−2, −9, −5') + ':', a: [m('−2, −5, −9'), m('−9, −5, −2'), m('−5, −2, −9'), m('−9, −2, −5')], c: 1, why: 'Most negative first.' },
    { q: m('−2 ≥ −2') + ' is:', a: ['true', 'false', 'meaningless', 'sometimes'], c: 0, why: 'Equality is allowed.' },
    { q: 'Integers with ' + m('−4 ≤ x < 2') + ' number:', a: [m('5'), m('6'), m('7'), m('4')], c: 1, why: m('−4') + ' to ' + m('1') + '.' }
  ],
  practice: {
    easy: [
      ['Greater: ' + m('−8') + ' or ' + m('−3'), m('−3')],
      ['Greater: ' + m('−8') + ' or ' + m('3'), m('3')],
      ['Greater: ' + m('0') + ' or ' + m('−1'), m('0')],
      ['Greater: ' + m('−100') + ' or ' + m('−1'), m('−1')],
      ['Is ' + m('−5 < −2') + '?', 'True'],
      ['Is ' + m('−5 > −2') + '?', 'False'],
      ['Is ' + m('4 ≤ 4') + '?', 'True']
    ],
    med: [
      ['Ascending: ' + m('3, −7, 0, −1, 5'), m('−7, −1, 0, 3, 5')],
      ['Ascending: ' + m('−2, −9, −5'), m('−9, −5, −2')],
      ['Descending: ' + m('10, −10, 1, −1'), m('10, 1, −1, −10')],
      ['Integers with ' + m('−4 ≤ x < 2'), m('−4, −3, −2, −1, 0, 1')],
      ['Integers with ' + m('−2 < x ≤ 3'), m('−1, 0, 1, 2, 3')],
      ['The greatest integer less than ' + m('−3'), m('−4')],
      ['The least integer greater than ' + m('−3'), m('−2')]
    ],
    hard: [
      ['How many integers satisfy ' + m('−20 < x < 15') + '?', m('34')],
      ['The greatest negative integer', m('−1')],
      ['The least positive integer', m('1')],
      ['Order ' + m('−|−4|, |−3|, −(−2), 0'), m('−4, 0, 2, 3')],
      ['If ' + m('a < 0') + ' and ' + m('b > 0') + ', compare ' + m('a') + ' and ' + m('−b'), 'Cannot tell without more'],
      ['Between which two consecutive integers does ' + m('−3.7') + ' lie?', m('−4') + ' and ' + m('−3')],
      ['The smallest three-digit negative integer', m('−999')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Sketch the line for every comparison, and say each list aloud as temperatures.',
  homework: [
    'Compare ' + m('−11') + ' and ' + m('−4') + ', and ' + m('−11') + ' and ' + m('4') + '.',
    'Put in ascending order: ' + m('−6, 2, 0, −13, 7') + '.',
    'Put in descending order: ' + m('−1, −8, 5, 0') + '.',
    'List all integers ' + m('x') + ' with ' + m('−5 < x ≤ 1') + '.',
    'Name the greatest negative integer and the least positive integer.'
  ]
});

/* ============================== 13 ============================== */
G7_MAT.push({
  id: 'g7-13', stream: 'mat', grade: 7, quarter: 1, lessons: '25–26', hours: 2,
  title: 'Addition of integers',
  subtitle: 'Two rules — same signs and different signs — and a number line that explains both.',
  uz: 'Matematika 7, §10', uzPage: 'pp. 64–70',
  cam: 'S8 1.2', camPage: 'Stage 8, pp. 6–10', wb: 'Exercise 1.2',
  objectives: [
    'Add two integers with the same sign and with different signs.',
    'Use the coordinate line as a model for addition.',
    'Use the commutative and associative laws to add several integers.',
    'Solve word problems involving gains and losses.'
  ],
  terms: [
    ['Addition', 'Qo‘shish', 'Сложение'],
    ['Sum', 'Yig‘indi', 'Сумма'],
    ['Same sign', 'Bir xil ishorali', 'Одинаковые знаки'],
    ['Different signs', 'Turli ishorali', 'Разные знаки'],
    ['Commutative law', 'O‘rin almashtirish qonuni', 'Переместительный закон'],
    ['Associative law', 'Guruhlash qonuni', 'Сочетательный закон'],
    ['Term', 'Qo‘shiluvchi', 'Слагаемое'],
    ['Gain and loss', 'Foyda va zarar', 'Прибыль и убыток']
  ],
  timing: [[15, 'On the line'], [25, 'Same signs'], [25, 'Different signs'], [20, 'Several terms'], [5, 'Homework']],
  sections: [
    {
      h: 'On the line',
      html: `<p>To add ${m('b')} to ${m('a')}: start at ${m('a')} and move ${m('|b|')} units — right if
      ${m('b')} is positive, left if it is negative.</p>
      {{fig:numberLineInterval:Adding a positive number moves right; adding a negative one moves left.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Sum</th><th>Start</th><th>Move</th><th>End</th></tr></thead>
      <tbody>
        <tr><td class="m">3 + 4</td><td class="m">3</td><td>${m('4')} right</td><td class="m">7</td></tr>
        <tr><td class="m">3 + (−4)</td><td class="m">3</td><td>${m('4')} left</td><td class="m">−1</td></tr>
        <tr><td class="m">−3 + 4</td><td class="m">−3</td><td>${m('4')} right</td><td class="m">1</td></tr>
        <tr><td class="m">−3 + (−4)</td><td class="m">−3</td><td>${m('4')} left</td><td class="m">−7</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The line is the definition, the rules are the shortcut</div>
      Anyone who forgets a rule can rebuild it in five seconds on a sketch. That is why the picture comes
      first in this lesson and the rules second.</div>`
    },
    {
      h: 'Same signs',
      html: `${eq('Add the moduli and keep the common sign', true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Sum</th><th>Moduli</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">5 + 8</td><td class="m">5 + 8 = 13</td><td class="m">13</td></tr>
        <tr><td class="m">(−5) + (−8)</td><td class="m">5 + 8 = 13</td><td class="m">−13</td></tr>
        <tr><td class="m">(−12) + (−7)</td><td class="m">12 + 7 = 19</td><td class="m">−19</td></tr>
      </tbody></table></div>
      <p>Two debts make a bigger debt; two falls in temperature make a bigger fall. The rule matches
      every situation.</p>`
    },
    {
      h: 'Different signs',
      html: `${eq('Subtract the smaller modulus from the larger, and keep the sign of the larger modulus', true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Sum</th><th>Moduli</th><th>Larger</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">9 + (−4)</td><td class="m">9, 4</td><td class="m">9</td><td class="m">5</td></tr>
        <tr><td class="m">4 + (−9)</td><td class="m">4, 9</td><td class="m">9</td><td class="m">−5</td></tr>
        <tr><td class="m">(−12) + 7</td><td class="m">12, 7</td><td class="m">12</td><td class="m">−5</td></tr>
        <tr><td class="m">6 + (−6)</td><td class="m">6, 6</td><td>equal</td><td class="m">0</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The sign comes from the larger modulus, not from the first number</span>
      ${m('4 + (−9) = −5')}, even though the sum starts with a positive. Deciding the sign first, then
      the size, keeps the two steps separate.</div>`
    },
    {
      h: 'Several terms',
      html: `<p>Addition is <b>commutative</b> and <b>associative</b>, so the terms may be reordered and
      regrouped freely.</p>
      ${eq(m('a + b = b + a') + '     ' + m('(a + b) + c = a + (b + c)'), true)}
      <p><b>Method.</b> Add all the positives, add all the negatives, then combine the two results.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Sum</th><th>Positives</th><th>Negatives</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">7 − 3 + 5 − 12</td><td class="m">12</td><td class="m">−15</td><td class="m">−3</td></tr>
        <tr><td class="m">−4 + 9 − 6 + 1</td><td class="m">10</td><td class="m">−10</td><td class="m">0</td></tr>
        <tr><td class="m">−2 − 5 − 8</td><td class="m">0</td><td class="m">−15</td><td class="m">−15</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Two piles, one subtraction</div>
      Grouping like signs turns a long chain into a single easy step. It is the same idea as collecting
      like terms in algebra, which arrives later this year.</div>`
    }
  ],
  examples: [
    {
      q: 'Compute ' + m('(−5) + (−8)') + ', ' + m('9 + (−4)') + ' and ' + m('4 + (−9)') + '.',
      steps: [
        ['Same signs: add moduli, keep the sign — ' + m('−13') + '.', ''],
        ['Different signs: ' + m('9 − 4 = 5') + ', sign of ' + m('9') + ' — ' + m('5') + '.', ''],
        ['Different signs: ' + m('9 − 4 = 5') + ', sign of ' + m('−9') + ' — ' + m('−5') + '.', ''],
        ['Sign first, then size.', '']
      ],
      ans: m('−13, 5, −5')
    },
    {
      q: 'Compute ' + m('7 − 3 + 5 − 12') + '.',
      steps: [
        ['Positives: ' + m('7 + 5 = 12') + '.', ''],
        ['Negatives: ' + m('−3 − 12 = −15') + '.', ''],
        [m('12 + (−15)'), ''],
        [m('= −3'), '']
      ],
      ans: m('−3')
    },
    {
      q: 'A shop makes a profit of ' + m('45 000') + ', then a loss of ' + m('70 000') + ', then a profit of ' + m('30 000') + '. Find the net result.',
      steps: [
        ['Profits: ' + m('45 000 + 30 000 = 75 000') + '.', ''],
        ['Loss: ' + m('−70 000') + '.', ''],
        [m('75 000 + (−70 000)'), ''],
        [m('= +5000') + ' — a small profit.', '']
      ],
      ans: 'A profit of ' + m('5000')
    }
  ],
  modelNote: 'Do every first example twice — once by the rule and once by walking the line on the floor; the two answers agreeing is what makes the rule trustworthy.',
  interactive: {
    type: 'inequalityLine',
    title: 'Adding on the line',
    hint: 'Positive moves right, negative moves left.'
  },
  quiz: [
    { q: m('(−5) + (−8)') + ' equals:', a: [m('13'), m('−13'), m('3'), m('−3')], c: 1, why: 'Same signs: add and keep.' },
    { q: m('9 + (−4)') + ' equals:', a: [m('13'), m('−13'), m('5'), m('−5')], c: 2, why: 'Sign of the larger modulus.' },
    { q: m('4 + (−9)') + ' equals:', a: [m('5'), m('−5'), m('13'), m('−13')], c: 1, why: m('9') + ' has the larger modulus.' },
    { q: m('6 + (−6)') + ' equals:', a: [m('12'), m('−12'), m('0'), m('6')], c: 2, why: 'Opposites.' },
    { q: 'For different signs you:', a: ['add the moduli', 'subtract the moduli', 'multiply them', 'ignore them'], c: 1, why: 'Then take the larger sign.' },
    { q: 'Addition is:', a: ['commutative only', 'associative only', 'both', 'neither'], c: 2, why: 'Order and grouping are free.' }
  ],
  practice: {
    easy: [
      [m('3 + 4'), m('7')],
      [m('3 + (−4)'), m('−1')],
      [m('−3 + 4'), m('1')],
      [m('−3 + (−4)'), m('−7')],
      [m('(−5) + (−8)'), m('−13')],
      [m('9 + (−4)'), m('5')],
      [m('6 + (−6)'), m('0')]
    ],
    med: [
      [m('(−12) + 7'), m('−5')],
      [m('4 + (−9)'), m('−5')],
      [m('7 − 3 + 5 − 12'), m('−3')],
      [m('−4 + 9 − 6 + 1'), m('0')],
      [m('−2 − 5 − 8'), m('−15')],
      [m('15 + (−15) + 8'), m('8')],
      ['Profit ' + m('45') + ', loss ' + m('70') + ', profit ' + m('30'), m('+5')]
    ],
    hard: [
      [m('−17 + 25 − 8 + 3 − 11'), m('−8')],
      [m('(−3) + (−3) + (−3) + (−3)'), m('−12')],
      ['A temperature of ' + m('−6°') + ' rises ' + m('4') + ', falls ' + m('9') + ', rises ' + m('12'), m('+1°')],
      ['Find ' + m('x') + ': ' + m('x + (−7) = 3'), m('10')],
      ['Find ' + m('x') + ': ' + m('−5 + x = −12'), m('−7')],
      ['The sum of all integers from ' + m('−10') + ' to ' + m('10'), m('0')],
      ['The sum of all integers from ' + m('−10') + ' to ' + m('12'), m('23')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Decide the sign of the answer before computing its size.',
  homework: [
    'Compute ' + m('(−7) + (−6)') + ', ' + m('11 + (−4)') + ' and ' + m('5 + (−13)') + '.',
    'Compute ' + m('9 − 4 + 7 − 15') + '.',
    'Compute ' + m('−3 − 8 + 20 − 6') + '.',
    'A bank balance of ' + m('60 000') + ' has ' + m('85 000') + ' withdrawn and ' + m('40 000') + ' paid in. Find the balance.',
    'Find ' + m('x') + ' if ' + m('x + (−9) = −2') + '.'
  ]
});

/* ============================== 14 ============================== */
G7_MAT.push({
  id: 'g7-14', stream: 'mat', grade: 7, quarter: 1, lessons: '27–28', hours: 2,
  title: 'Subtraction of integers',
  subtitle: 'Subtracting is adding the opposite — one rule that replaces the whole operation.',
  uz: 'Matematika 7, §11', uzPage: 'pp. 71–76',
  cam: 'S8 1.2', camPage: 'Stage 8, pp. 6–10', wb: 'Exercise 1.2',
  objectives: [
    'State and use a − b = a + (−b).',
    'Simplify expressions containing two signs in a row.',
    'Compute chains of additions and subtractions.',
    'Use subtraction to find a difference or a change.'
  ],
  terms: [
    ['Subtraction', 'Ayirish', 'Вычитание'],
    ['Difference', 'Ayirma', 'Разность'],
    ['Minuend', 'Kamayuvchi', 'Уменьшаемое'],
    ['Subtrahend', 'Ayiriluvchi', 'Вычитаемое'],
    ['Opposite', 'Qarama-qarshi', 'Противоположное'],
    ['Two signs in a row', 'Ketma-ket ikki ishora', 'Два знака подряд'],
    ['Change', 'O‘zgarish', 'Изменение'],
    ['Rise and fall', 'Ko‘tarilish va pasayish', 'Подъём и спад']
  ],
  timing: [[15, 'One rule'], [25, 'Two signs in a row'], [25, 'Chains'], [20, 'Differences'], [5, 'Homework']],
  sections: [
    {
      h: 'One rule',
      html: `${eq(m('a − b = a + (−b)'), true)}
      <p>To subtract a number, add its opposite. Subtraction is not a new operation at all — it is
      addition, once the opposite is taken.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Subtraction</th><th>As an addition</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">7 − 3</td><td class="m">7 + (−3)</td><td class="m">4</td></tr>
        <tr><td class="m">3 − 7</td><td class="m">3 + (−7)</td><td class="m">−4</td></tr>
        <tr><td class="m">−3 − 7</td><td class="m">−3 + (−7)</td><td class="m">−10</td></tr>
        <tr><td class="m">−3 − (−7)</td><td class="m">−3 + 7</td><td class="m">4</td></tr>
        <tr><td class="m">3 − (−7)</td><td class="m">3 + 7</td><td class="m">10</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Nothing new has to be learnt</div>
      Every subtraction becomes an addition, and addition was the last lesson. That is why the rule for
      subtraction is a single line while the rule for addition took two cases.</div>`
    },
    {
      h: 'Two signs in a row',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Written</th><th>Means</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td class="m">+(+a)</td><td class="m">+a</td><td class="m">5 + (+3) = 8</td></tr>
        <tr><td class="m">+(−a)</td><td class="m">−a</td><td class="m">5 + (−3) = 2</td></tr>
        <tr><td class="m">−(+a)</td><td class="m">−a</td><td class="m">5 − (+3) = 2</td></tr>
        <tr><td class="m">−(−a)</td><td class="m">+a</td><td class="m">5 − (−3) = 8</td></tr>
      </tbody></table></div>
      <p>Two like signs give a plus; two unlike signs give a minus.</p>
      <div class="warn"><span class="wl">${m('5 − (−3)')} is ${m('8')}, not ${m('2')}</span>
      Taking away a debt leaves you better off. The everyday sentence explains the arithmetic, and it is
      worth saying aloud each time until the rule is automatic.</div>`
    },
    {
      h: 'Chains',
      html: `<p>Rewrite every subtraction as an addition first, then use the two-pile method.</p>
      <p><b>Example.</b> ${m('−4 − (−9) + (−6) − 2')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Expression</th></tr></thead>
      <tbody>
        <tr><td>rewrite</td><td class="m">−4 + 9 − 6 − 2</td></tr>
        <tr><td>positives</td><td class="m">9</td></tr>
        <tr><td>negatives</td><td class="m">−4 − 6 − 2 = −12</td></tr>
        <tr><td>combine</td><td class="m">9 − 12 = −3</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Rewrite the whole chain before computing anything</div>
      Doing the sign work and the arithmetic at the same time is where errors come from. Two separate
      passes are quicker in the end.</div>`
    },
    {
      h: 'Differences',
      html: `<p>The <b>change</b> from ${m('a')} to ${m('b')} is ${m('b − a')}: the new value minus the
      old one. A positive answer is a rise, a negative one a fall.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>From</th><th>To</th><th>Change</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td class="m">4°</td><td class="m">11°</td><td class="m">+7</td><td>a rise of ${m('7')}</td></tr>
        <tr><td class="m">4°</td><td class="m">−3°</td><td class="m">−7</td><td>a fall of ${m('7')}</td></tr>
        <tr><td class="m">−9°</td><td class="m">−2°</td><td class="m">+7</td><td>a rise of ${m('7')}</td></tr>
        <tr><td class="m">−2°</td><td class="m">−9°</td><td class="m">−7</td><td>a fall of ${m('7')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">“New minus old”, in that order</span>
      Reversing the subtraction reverses the sign and turns a rise into a fall. Writing the words “new −
      old” at the top of the working prevents it.</div>`
    }
  ],
  examples: [
    {
      q: 'Compute ' + m('3 − (−7)') + ', ' + m('−3 − 7') + ' and ' + m('−3 − (−7)') + '.',
      steps: [
        [m('3 − (−7) = 3 + 7 = 10'), 'Two minuses give a plus.'],
        [m('−3 − 7 = −3 + (−7) = −10'), ''],
        [m('−3 − (−7) = −3 + 7 = 4'), ''],
        ['Rewrite first, compute second.', '']
      ],
      ans: m('10, −10, 4')
    },
    {
      q: 'Compute ' + m('−4 − (−9) + (−6) − 2') + '.',
      steps: [
        ['Rewrite: ' + m('−4 + 9 − 6 − 2') + '.', ''],
        ['Positives: ' + m('9') + '.', ''],
        ['Negatives: ' + m('−12') + '.', ''],
        [m('9 − 12 = −3'), '']
      ],
      ans: m('−3')
    },
    {
      q: 'The temperature falls from ' + m('4°C') + ' to ' + m('−9°C') + '. Find the change and the size of the fall.',
      steps: [
        ['Change ' + m('= new − old = −9 − 4') + '.', ''],
        [m('= −13'), ''],
        ['Negative, so it is a fall.', ''],
        ['A fall of ' + m('13') + ' degrees.', '']
      ],
      ans: m('−13') + ' — a fall of ' + m('13°')
    }
  ],
  modelNote: 'Say “taking away a debt makes you richer” once, and then let the class supply it themselves every time a −(−) appears; the rule sticks as a sentence, not a symbol.',
  interactive: {
    type: 'inequalityLine',
    title: 'Subtracting on the line',
    hint: 'Subtracting a negative moves right.'
  },
  quiz: [
    { q: m('a − b') + ' equals:', a: [m('a + b'), m('a + (−b)'), m('−a + b'), m('b − a')], c: 1, why: 'Add the opposite.' },
    { q: m('5 − (−3)') + ' equals:', a: [m('2'), m('8'), m('−2'), m('−8')], c: 1, why: 'Two minuses give a plus.' },
    { q: m('−3 − 7') + ' equals:', a: [m('4'), m('−4'), m('10'), m('−10')], c: 3, why: 'Both negative.' },
    { q: m('−(−a)') + ' equals:', a: [m('−a'), m('a'), m('0'), m('|a|')], c: 1, why: 'The opposite of the opposite.' },
    { q: 'The change from ' + m('4') + ' to ' + m('−3') + ':', a: [m('7'), m('−7'), m('1'), m('−1')], c: 1, why: 'New minus old.' },
    { q: 'A negative change means:', a: ['a rise', 'a fall', 'no change', 'an error'], c: 1, why: 'The value went down.' }
  ],
  practice: {
    easy: [
      [m('7 − 3'), m('4')],
      [m('3 − 7'), m('−4')],
      [m('−3 − 7'), m('−10')],
      [m('3 − (−7)'), m('10')],
      [m('−3 − (−7)'), m('4')],
      [m('5 − (+3)'), m('2')],
      [m('5 + (−3)'), m('2')]
    ],
    med: [
      [m('−4 − (−9) + (−6) − 2'), m('−3')],
      [m('12 − 20 + 5 − (−3)'), m('0')],
      [m('−15 − (−15)'), m('0')],
      [m('0 − (−8)'), m('8')],
      ['Change from ' + m('4°') + ' to ' + m('−9°'), m('−13')],
      ['Change from ' + m('−9°') + ' to ' + m('−2°'), m('+7')],
      [m('−7 − (−2) − 5'), m('−10')]
    ],
    hard: [
      [m('−3 − (−5) − (−7) − 9'), m('0')],
      ['Find ' + m('x') + ': ' + m('x − (−4) = 1'), m('−3')],
      ['Find ' + m('x') + ': ' + m('−6 − x = 2'), m('−8')],
      ['The difference between the highest and lowest of ' + m('−12, 5, −3, 8'), m('20')],
      ['A lift from ' + m('−3') + ' to ' + m('9') + ': floors travelled', m('12')],
      ['On a day the temperature goes ' + m('−7 → 3 → −5'), 'A rise of ' + m('10') + ', a fall of ' + m('8')],
      ['Simplify ' + m('a − (−b) − (−c)'), m('a + b + c')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite every subtraction as an addition before computing anything.',
  homework: [
    'Compute ' + m('8 − (−5)') + ', ' + m('−8 − 5') + ' and ' + m('−8 − (−5)') + '.',
    'Compute ' + m('−6 − (−11) + (−4) − 3') + '.',
    'The temperature falls from ' + m('7°C') + ' to ' + m('−6°C') + '. Find the change.',
    'Find the difference between the highest and lowest of ' + m('−15, 4, −8, 11') + '.',
    'Find ' + m('x') + ' if ' + m('x − (−6) = −1') + '.'
  ]
});

/* ============================== 15 ============================== */
G7_MAT.push({
  id: 'g7-15', stream: 'mat', grade: 7, quarter: 1, lessons: '29–30', hours: 2,
  title: 'Multiplication of integers',
  subtitle: 'Multiply the moduli, then decide the sign — and two minuses really do make a plus.',
  uz: 'Matematika 7, §12', uzPage: 'pp. 77–82',
  cam: 'S8 1.2', camPage: 'Stage 8, pp. 6–10', wb: 'Exercise 1.2',
  objectives: [
    'State and use the sign rules for multiplication.',
    'Explain why (−a)(−b) = ab.',
    'Find the sign of a product of several factors.',
    'Compute powers of negative numbers.'
  ],
  terms: [
    ['Multiplication', 'Ko‘paytirish', 'Умножение'],
    ['Product', 'Ko‘paytma', 'Произведение'],
    ['Factor', 'Ko‘paytuvchi', 'Множитель'],
    ['Sign rule', 'Ishoralar qoidasi', 'Правило знаков'],
    ['Power', 'Daraja', 'Степень'],
    ['Even number of factors', 'Juft sondagi ko‘paytuvchilar', 'Чётное число множителей'],
    ['Square', 'Kvadrat', 'Квадрат'],
    ['Cube', 'Kub', 'Куб']
  ],
  timing: [[15, 'The sign rules'], [25, 'Why two minuses make a plus'], [25, 'Several factors'], [20, 'Powers'], [5, 'Homework']],
  sections: [
    {
      h: 'The sign rules',
      html: `${eq('Multiply the moduli; the product is positive if the signs are alike and negative if they differ', true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Signs</th><th>Product</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td class="m">(+)(+)</td><td class="m">+</td><td class="m">4 × 5 = 20</td></tr>
        <tr><td class="m">(+)(−)</td><td class="m">−</td><td class="m">4 × (−5) = −20</td></tr>
        <tr><td class="m">(−)(+)</td><td class="m">−</td><td class="m">(−4) × 5 = −20</td></tr>
        <tr><td class="m">(−)(−)</td><td class="m">+</td><td class="m">(−4) × (−5) = 20</td></tr>
        <tr><td>anything ${m('× 0')}</td><td class="m">0</td><td class="m">(−4) × 0 = 0</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Sign first, then size</div>
      Decide the sign from the two signs alone, write it down, then multiply the moduli. Two separate
      decisions are far more reliable than one combined one.</div>`
    },
    {
      h: 'Why two minuses make a plus',
      html: `<p>Look at a pattern in which one factor decreases by ${m('1')} each time:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Product</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td class="m">(−4) × 3</td><td class="m">−12</td></tr>
        <tr><td class="m">(−4) × 2</td><td class="m">−8</td></tr>
        <tr><td class="m">(−4) × 1</td><td class="m">−4</td></tr>
        <tr><td class="m">(−4) × 0</td><td class="m">0</td></tr>
        <tr><td class="m">(−4) × (−1)</td><td class="m">4</td></tr>
        <tr><td class="m">(−4) × (−2)</td><td class="m">8</td></tr>
      </tbody></table></div>
      <p>Each step adds ${m('4')}. Continuing the pattern past zero forces the products to become
      positive — there is no other way to keep the arithmetic consistent.</p>
      <div class="keybox"><div class="klabel">The rule is not a convention, it is forced</div>
      If ${m('(−4)(−1)')} were ${m('−4')}, then the distributive law would fail. Mathematics chooses the
      only definition under which all the old laws keep working.</div>`
    },
    {
      h: 'Several factors',
      html: `${eq('The product is negative when the number of negative factors is odd, and positive when it is even', true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Product</th><th>Negative factors</th><th>Sign</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td class="m">(−2)(−3)(−4)</td><td class="m">3</td><td class="m">−</td><td class="m">−24</td></tr>
        <tr><td class="m">(−2)(−3)(4)</td><td class="m">2</td><td class="m">+</td><td class="m">24</td></tr>
        <tr><td class="m">(−1)(−1)(−1)(−1)</td><td class="m">4</td><td class="m">+</td><td class="m">1</td></tr>
        <tr><td class="m">(−5)(2)(−3)(−1)</td><td class="m">3</td><td class="m">−</td><td class="m">−30</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">One zero factor makes the whole product zero</span>
      However many negatives there are. Scanning for a zero before counting signs saves the whole
      calculation.</div>`
    },
    {
      h: 'Powers',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Power</th><th>Meaning</th><th>Sign</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td class="m">(−3)²</td><td class="m">(−3)(−3)</td><td class="m">+</td><td class="m">9</td></tr>
        <tr><td class="m">(−3)³</td><td class="m">(−3)(−3)(−3)</td><td class="m">−</td><td class="m">−27</td></tr>
        <tr><td class="m">(−2)⁴</td><td>four factors</td><td class="m">+</td><td class="m">16</td></tr>
        <tr><td class="m">−3²</td><td class="m">−(3 × 3)</td><td class="m">−</td><td class="m">−9</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('(−3)²')} and ${m('−3²')} are different</span>
      The brackets decide what is squared. Without them only the ${m('3')} is squared and the minus stays
      outside: ${m('−3² = −9')}. This distinction is tested in every year from now on.</div>`
    }
  ],
  examples: [
    {
      q: 'Compute ' + m('(−4) × (−5)') + ', ' + m('4 × (−5)') + ' and ' + m('(−2)(−3)(−4)') + '.',
      steps: [
        ['Alike signs: positive. ' + m('4 × 5 = 20') + '.', ''],
        ['Different signs: negative. ' + m('−20') + '.', ''],
        ['Three negatives — odd, so negative.', ''],
        [m('2 × 3 × 4 = 24') + ', so ' + m('−24') + '.', '']
      ],
      ans: m('20, −20, −24')
    },
    {
      q: 'Compute ' + m('(−3)²') + ', ' + m('(−3)³') + ' and ' + m('−3²') + '.',
      steps: [
        [m('(−3)² = (−3)(−3) = 9'), 'Two negatives.'],
        [m('(−3)³ = 9 × (−3) = −27'), 'Three negatives.'],
        [m('−3²') + ' means ' + m('−(3²)') + '.', 'No brackets.'],
        [m('= −9'), '']
      ],
      ans: m('9, −27, −9')
    },
    {
      q: 'Find the sign of ' + m('(−5)(2)(−3)(−1)(4)') + ' without computing it.',
      steps: [
        ['Count the negative factors: ' + m('−5, −3, −1') + '.', ''],
        ['Three of them — an odd number.', ''],
        ['The product is negative.', ''],
        ['Its value is ' + m('−120') + '.', '']
      ],
      ans: 'Negative; ' + m('−120')
    }
  ],
  modelNote: 'Write the descending pattern (−4)×3, (−4)×2, … on the board and let the class continue it past zero; they produce the rule themselves.',
  interactive: {
    type: 'substitute',
    title: 'Signs in a product',
    hint: 'Count the negative factors.'
  },
  quiz: [
    { q: m('(−4)(−5)') + ' equals:', a: [m('20'), m('−20'), m('9'), m('−9')], c: 0, why: 'Alike signs.' },
    { q: m('4 × (−5)') + ' equals:', a: [m('20'), m('−20'), m('−1'), m('1')], c: 1, why: 'Different signs.' },
    { q: 'A product of three negatives is:', a: ['positive', 'negative', 'zero', 'undefined'], c: 1, why: 'An odd count.' },
    { q: m('(−3)²') + ' equals:', a: [m('9'), m('−9'), m('6'), m('−6')], c: 0, why: 'Two negative factors.' },
    { q: m('−3²') + ' equals:', a: [m('9'), m('−9'), m('6'), m('−6')], c: 1, why: 'Only the ' + m('3') + ' is squared.' },
    { q: 'A product containing a zero is:', a: ['positive', 'negative', 'zero', 'it depends'], c: 2, why: 'Whatever else is there.' }
  ],
  practice: {
    easy: [
      [m('4 × 5'), m('20')],
      [m('4 × (−5)'), m('−20')],
      [m('(−4) × 5'), m('−20')],
      [m('(−4) × (−5)'), m('20')],
      [m('(−7) × 0'), m('0')],
      [m('(−3)²'), m('9')],
      [m('(−3)³'), m('−27')]
    ],
    med: [
      [m('(−2)(−3)(−4)'), m('−24')],
      [m('(−2)(−3)(4)'), m('24')],
      [m('(−1)⁴'), m('1')],
      [m('(−1)⁵'), m('−1')],
      [m('−3²'), m('−9')],
      [m('(−2)⁴'), m('16')],
      [m('(−5)(2)(−3)(−1)'), m('−30')]
    ],
    hard: [
      [m('(−2)³ × (−3)²'), m('−72')],
      [m('(−1)¹⁰⁰'), m('1')],
      [m('(−1)¹⁰¹'), m('−1')],
      [m('(−2)² − (−2)³'), m('12')],
      ['The sign of ' + m('(−1)(−2)(−3)…(−9)'), 'Negative'],
      ['Find ' + m('x') + ': ' + m('−3x = 21'), m('−7')],
      [m('(−4)² ÷ (−2)³'), m('−2')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write the sign of every answer before computing its size.',
  homework: [
    'Compute ' + m('(−6)(−7)') + ', ' + m('6 × (−7)') + ' and ' + m('(−6)(7)') + '.',
    'Compute ' + m('(−2)(−5)(−3)') + ' and ' + m('(−2)(−5)(3)') + '.',
    'Compute ' + m('(−4)²') + ', ' + m('(−4)³') + ' and ' + m('−4²') + '.',
    'Find the sign of ' + m('(−1)(2)(−3)(4)(−5)') + ' without computing it.',
    'Find ' + m('x') + ' if ' + m('−5x = 35') + '.'
  ]
});

/* ============================== 16 ============================== */
G7_MAT.push({
  id: 'g7-16', stream: 'mat', grade: 7, quarter: 1, lessons: '31–32', hours: 2,
  title: 'Division of integers',
  subtitle: 'The same sign rules as multiplication — and the one thing that is never allowed.',
  uz: 'Matematika 7, §13', uzPage: 'pp. 83–88',
  cam: 'S8 1.2', camPage: 'Stage 8, pp. 6–10', wb: 'Exercise 1.2',
  objectives: [
    'Divide integers using the sign rules.',
    'Explain why division by zero is undefined.',
    'Decide whether a quotient of two integers is an integer.',
    'Use the order of operations with signed numbers.'
  ],
  terms: [
    ['Division', 'Bo‘lish', 'Деление'],
    ['Quotient', 'Bo‘linma', 'Частное'],
    ['Dividend', 'Bo‘linuvchi', 'Делимое'],
    ['Divisor', 'Bo‘luvchi', 'Делитель'],
    ['Undefined', 'Aniqlanmagan', 'Не определено'],
    ['Order of operations', 'Amallar tartibi', 'Порядок действий'],
    ['Exactly divisible', 'Butun bo‘linadi', 'Делится нацело'],
    ['Remainder', 'Qoldiq', 'Остаток']
  ],
  timing: [[15, 'The sign rules'], [25, 'Division by zero'], [25, 'Order of operations'], [20, 'When is it an integer?'], [5, 'Homework']],
  sections: [
    {
      h: 'The sign rules',
      html: `<p>Division is the reverse of multiplication, so the signs behave in exactly the same way.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Signs</th><th>Quotient</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td class="m">(+) ÷ (+)</td><td class="m">+</td><td class="m">20 ÷ 5 = 4</td></tr>
        <tr><td class="m">(+) ÷ (−)</td><td class="m">−</td><td class="m">20 ÷ (−5) = −4</td></tr>
        <tr><td class="m">(−) ÷ (+)</td><td class="m">−</td><td class="m">(−20) ÷ 5 = −4</td></tr>
        <tr><td class="m">(−) ÷ (−)</td><td class="m">+</td><td class="m">(−20) ÷ (−5) = 4</td></tr>
      </tbody></table></div>
      <p><b>Why.</b> ${m('(−20) ÷ (−5) = 4')} because ${m('4 × (−5) = −20')}. Every division is checked by
      the multiplication that undoes it.</p>
      <div class="keybox"><div class="klabel">Check every division by multiplying back</div>
      It takes two seconds and catches both a wrong size and a wrong sign. It is the only check that
      needs nothing but the answer you already have.</div>`
    },
    {
      h: 'Division by zero',
      html: `${eq(m('a ÷ 0') + ' is undefined for every ' + m('a'), true)}
      <p><b>Why.</b> ${m('20 ÷ 0')} would be a number ${m('q')} with ${m('q × 0 = 20')} — but every
      product with zero is zero, so no such ${m('q')} exists.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td class="m">0 ÷ 7</td><td class="m">0</td></tr>
        <tr><td class="m">7 ÷ 0</td><td>undefined</td></tr>
        <tr><td class="m">0 ÷ 0</td><td>undefined</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('0 ÷ 7')} and ${m('7 ÷ 0')} are completely different</span>
      The first is ${m('0')}; the second does not exist. Zero on the top is fine, zero on the bottom
      never is — a rule that will matter in every algebra lesson from now on.</div>`
    },
    {
      h: 'Order of operations',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Order</th><th>Operation</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>brackets</td></tr>
        <tr><td>2</td><td>powers</td></tr>
        <tr><td>3</td><td>multiplication and division, left to right</td></tr>
        <tr><td>4</td><td>addition and subtraction, left to right</td></tr>
      </tbody></table></div>
      <p><b>Example.</b> ${m('−12 ÷ 4 + (−3) × 2')}. Divide and multiply first:
      ${m('−3 + (−6)')}. Then add: ${m('−9')}.</p>
      <div class="warn"><span class="wl">Left to right within the same level</span>
      ${m('24 ÷ 4 × 2')} is ${m('12')}, not ${m('3')}: division and multiplication have equal rank, so
      they are done in the order written.</div>`
    },
    {
      h: 'When is it an integer?',
      html: `<p>A quotient of integers is an integer only when the divisor is a factor of the
      dividend.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Division</th><th>Integer?</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td class="m">(−36) ÷ 9</td><td>yes</td><td class="m">−4</td></tr>
        <tr><td class="m">(−36) ÷ (−12)</td><td>yes</td><td class="m">3</td></tr>
        <tr><td class="m">(−36) ÷ 5</td><td>no</td><td class="m">−7.2</td></tr>
        <tr><td class="m">7 ÷ (−2)</td><td>no</td><td class="m">−3.5</td></tr>
      </tbody></table></div>
      <p>This is why ${m('ℤ')} is not closed under division, and why the next chapter introduces the
      rational numbers.</p>
      <div class="keybox"><div class="klabel">The sign has nothing to do with it</div>
      Whether the answer is a whole number depends only on the moduli. The sign is decided separately,
      and never affects divisibility.</div>`
    }
  ],
  examples: [
    {
      q: 'Compute ' + m('(−20) ÷ (−5)') + ', ' + m('20 ÷ (−5)') + ' and ' + m('(−36) ÷ 9') + '.',
      steps: [
        ['Alike signs: positive. ' + m('20 ÷ 5 = 4') + '.', ''],
        ['Different signs: negative. ' + m('−4') + '.', ''],
        ['Different signs: ' + m('36 ÷ 9 = 4') + ', so ' + m('−4') + '.', ''],
        ['Check: ' + m('(−4) × 9 = −36') + ' ✓', '']
      ],
      ans: m('4, −4, −4')
    },
    {
      q: 'Compute ' + m('−12 ÷ 4 + (−3) × 2') + '.',
      steps: [
        ['Division and multiplication first.', ''],
        [m('−12 ÷ 4 = −3') + ' and ' + m('(−3) × 2 = −6') + '.', ''],
        [m('−3 + (−6)'), ''],
        [m('= −9'), '']
      ],
      ans: m('−9')
    },
    {
      q: 'Explain why ' + m('7 ÷ 0') + ' has no value, while ' + m('0 ÷ 7 = 0') + '.',
      steps: [
        [m('7 ÷ 0 = q') + ' would mean ' + m('q × 0 = 7') + '.', ''],
        ['Every product with zero is zero, never ' + m('7') + '.', 'So no ' + m('q') + ' exists.'],
        [m('0 ÷ 7 = q') + ' means ' + m('q × 7 = 0') + '.', ''],
        [m('q = 0') + ' works — and only that.', '']
      ],
      ans: 'Undefined; and ' + m('0')
    }
  ],
  modelNote: 'Ask how many times zero fits into seven; the class runs out of patience before the answer, which is exactly the point.',
  interactive: {
    type: 'substitute',
    title: 'Signs in a quotient',
    hint: 'Same rules as multiplication.'
  },
  quiz: [
    { q: m('(−20) ÷ (−5)') + ' equals:', a: [m('4'), m('−4'), m('100'), m('−100')], c: 0, why: 'Alike signs.' },
    { q: m('20 ÷ (−5)') + ' equals:', a: [m('4'), m('−4'), m('15'), m('−15')], c: 1, why: 'Different signs.' },
    { q: m('0 ÷ 7') + ' equals:', a: [m('0'), m('7'), 'undefined', m('1')], c: 0, why: 'Zero on the top is fine.' },
    { q: m('7 ÷ 0') + ' is:', a: [m('0'), m('7'), 'undefined', m('∞')], c: 2, why: 'No such number exists.' },
    { q: m('24 ÷ 4 × 2') + ' equals:', a: [m('3'), m('12'), m('48'), m('192')], c: 1, why: 'Left to right.' },
    { q: m('(−36) ÷ 5') + ' is:', a: ['an integer', 'not an integer', 'zero', 'undefined'], c: 1, why: m('−7.2') + '.' }
  ],
  practice: {
    easy: [
      [m('20 ÷ 5'), m('4')],
      [m('20 ÷ (−5)'), m('−4')],
      [m('(−20) ÷ 5'), m('−4')],
      [m('(−20) ÷ (−5)'), m('4')],
      [m('0 ÷ 9'), m('0')],
      [m('9 ÷ 0'), 'Undefined'],
      [m('(−36) ÷ 9'), m('−4')]
    ],
    med: [
      [m('(−36) ÷ (−12)'), m('3')],
      [m('(−45) ÷ 9'), m('−5')],
      [m('−12 ÷ 4 + (−3) × 2'), m('−9')],
      [m('24 ÷ 4 × 2'), m('12')],
      [m('(−18) ÷ (−3) − 4'), m('2')],
      [m('(−2)³ ÷ 4'), m('−2')],
      ['Is ' + m('(−36) ÷ 5') + ' an integer?', 'No']
    ],
    hard: [
      [m('(−48) ÷ (−6) ÷ (−2)'), m('−4')],
      [m('(−3)² × 2 − 30 ÷ (−5)'), m('24')],
      [m('(−60) ÷ (2 − 5)'), m('20')],
      ['Find ' + m('x') + ': ' + m(f('x', '−4') + ' = 7'), m('−28')],
      ['Find ' + m('x') + ': ' + m(f('−36', 'x') + ' = −9'), m('4')],
      ['For which integers ' + m('n') + ' is ' + m(f('12', 'n')) + ' an integer?', m('±1, ±2, ±3, ±4, ±6, ±12')],
      ['Why is ' + m('0 ÷ 0') + ' undefined?', 'Every number would satisfy it']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Check every division by multiplying the answer back.',
  homework: [
    'Compute ' + m('(−42) ÷ 7') + ', ' + m('42 ÷ (−7)') + ' and ' + m('(−42) ÷ (−7)') + '.',
    'Compute ' + m('−20 ÷ 5 + (−4) × 3') + '.',
    'Compute ' + m('(−2)⁴ ÷ (−8)') + '.',
    'Explain why ' + m('5 ÷ 0') + ' is undefined.',
    'List all integers ' + m('n') + ' for which ' + m(f('18', 'n')) + ' is an integer.'
  ]
});

/* ============================== 17 ============================== */
G7_MAT.push({
  id: 'g7-17', stream: 'mat', grade: 7, quarter: 1, lessons: '33–34', hours: 2,
  title: 'Problems on the four operations with integers',
  subtitle: 'Mixed calculations and word problems — where the sign rules meet the real world.',
  uz: 'Matematika 7, §14', uzPage: 'pp. 89–94',
  cam: 'S8 1', camPage: 'Stage 8, pp. 2–10', wb: 'Exercise 1 review',
  objectives: [
    'Evaluate expressions containing all four operations and brackets.',
    'Translate a worded situation into an expression with signs.',
    'Use the distributive law with negative numbers.',
    'Check an answer for plausibility as well as for arithmetic.'
  ],
  terms: [
    ['Expression', 'Ifoda', 'Выражение'],
    ['Brackets', 'Qavslar', 'Скобки'],
    ['Distributive law', 'Taqsimot qonuni', 'Распределительный закон'],
    ['To evaluate', 'Qiymatini topmoq', 'Вычислить'],
    ['Word problem', 'Matnli masala', 'Текстовая задача'],
    ['Average', 'O‘rta qiymat', 'Среднее'],
    ['Net change', 'Sof o‘zgarish', 'Чистое изменение'],
    ['Plausible', 'Ishonarli', 'Правдоподобный']
  ],
  timing: [[15, 'Mixed expressions'], [25, 'The distributive law'], [25, 'Word problems'], [20, 'Averages'], [5, 'Homework']],
  sections: [
    {
      h: 'Mixed expressions',
      html: `<p>Work brackets first, then powers, then × and ÷, then + and −.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Working</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td class="m">−5 + 3 × (−4)</td><td class="m">−5 + (−12)</td><td class="m">−17</td></tr>
        <tr><td class="m">(−5 + 3) × (−4)</td><td class="m">(−2)(−4)</td><td class="m">8</td></tr>
        <tr><td class="m">−20 ÷ (−4) − 6</td><td class="m">5 − 6</td><td class="m">−1</td></tr>
        <tr><td class="m">(−3)² − 4 × (−2)</td><td class="m">9 + 8</td><td class="m">17</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The brackets change everything</span>
      The first two rows use the same three numbers and give ${m('−17')} and ${m('8')}. Copying an
      expression without its brackets is the most expensive mistake in this topic.</div>`
    },
    {
      h: 'The distributive law',
      html: `${eq(m('a(b + c) = ab + ac'), true)}
      <p>It holds for negative numbers exactly as for positive ones, and it is how brackets are removed.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Expanded</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td class="m">−3(4 + 5)</td><td class="m">−12 − 15</td><td class="m">−27</td></tr>
        <tr><td class="m">−3(4 − 5)</td><td class="m">−12 + 15</td><td class="m">3</td></tr>
        <tr><td class="m">−(x − 7)</td><td class="m">−x + 7</td><td>—</td></tr>
        <tr><td class="m">5 − (3 − 8)</td><td class="m">5 − 3 + 8</td><td class="m">10</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A minus in front of a bracket changes <b>every</b> sign inside</span>
      ${m('−(x − 7) = −x + 7')}, not ${m('−x − 7')}. Missing the second sign is the classic slip, and it
      will recur in every algebra lesson this year.</div>`
    },
    {
      h: 'Word problems',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Situation</th><th>Expression</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>${m('−7°')}, rising ${m('3°')} an hour for ${m('4')} hours</td><td class="m">−7 + 3 × 4</td><td class="m">5°</td></tr>
        <tr><td>a debt of ${m('20 000')}, paid off at ${m('6000')} a month for ${m('3')} months</td><td class="m">−20 000 + 3 × 6000</td><td class="m">−2000</td></tr>
        <tr><td>a diver at ${m('−18 m')} descending ${m('4 m')} a minute for ${m('5')} minutes</td><td class="m">−18 − 4 × 5</td><td class="m">−38 m</td></tr>
        <tr><td>a lift on floor ${m('12')} going down ${m('3')} floors ${m('4')} times</td><td class="m">12 − 3 × 4</td><td class="m">0</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Write the expression before computing anything</div>
      The mathematics of these problems is easy; the translation is not. Getting the expression on paper
      first separates the two difficulties.</div>`
    },
    {
      h: 'Averages',
      html: `<p>The <b>average</b> (arithmetic mean) of a list is the sum divided by how many there are.
      With negatives it works exactly the same way.</p>
      ${eq(m('mean = ' + f('sum of the values', 'how many values')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>List</th><th>Sum</th><th>Count</th><th>Mean</th></tr></thead>
      <tbody>
        <tr><td class="m">−3, 0, 2, −5, 1</td><td class="m">−5</td><td class="m">5</td><td class="m">−1</td></tr>
        <tr><td class="m">−8, −4, 0, 4</td><td class="m">−8</td><td class="m">4</td><td class="m">−2</td></tr>
        <tr><td class="m">−6, 6</td><td class="m">0</td><td class="m">2</td><td class="m">0</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The mean always lies between the least and the greatest</div>
      A mean of ${m('−1')} for a list running from ${m('−5')} to ${m('2')} is plausible; a mean of
      ${m('3')} would not be. That single check catches most arithmetic slips.</div>`
    }
  ],
  examples: [
    {
      q: 'Evaluate ' + m('−5 + 3 × (−4)') + ' and ' + m('(−5 + 3) × (−4)') + '.',
      steps: [
        ['First: multiply before adding.', ''],
        [m('−5 + (−12) = −17'), ''],
        ['Second: bracket first.', ''],
        [m('(−2)(−4) = 8'), 'Same numbers, different answers.']
      ],
      ans: m('−17') + ' and ' + m('8')
    },
    {
      q: 'The temperature is ' + m('−7°C') + ' and rises by ' + m('3') + ' degrees each hour for ' + m('4') + ' hours. Find it then.',
      steps: [
        ['Expression: ' + m('−7 + 3 × 4') + '.', ''],
        [m('3 × 4 = 12'), ''],
        [m('−7 + 12'), ''],
        [m('= 5°C'), 'Now above zero.']
      ],
      ans: m('5°C')
    },
    {
      q: 'Find the mean of ' + m('−3, 0, 2, −5, 1') + '.',
      steps: [
        ['Sum: ' + m('−3 + 0 + 2 − 5 + 1') + '.', ''],
        [m('= −5'), ''],
        ['Five values: ' + m('−5 ÷ 5') + '.', ''],
        [m('= −1') + ' — between ' + m('−5') + ' and ' + m('2') + ' ✓', '']
      ],
      ans: m('−1')
    }
  ],
  modelNote: 'Give the same three numbers with and without brackets and let the class compute both; the difference makes the order of operations matter rather than merely exist.',
  interactive: {
    type: 'substitute',
    title: 'Order of operations with signs',
    hint: 'Brackets, powers, × ÷, then + −.'
  },
  quiz: [
    { q: m('−5 + 3 × (−4)') + ' equals:', a: [m('8'), m('−17'), m('−32'), m('32')], c: 1, why: 'Multiply first.' },
    { q: m('(−5 + 3) × (−4)') + ' equals:', a: [m('8'), m('−17'), m('−8'), m('2')], c: 0, why: 'Bracket first.' },
    { q: m('−(x − 7)') + ' equals:', a: [m('−x − 7'), m('−x + 7'), m('x − 7'), m('x + 7')], c: 1, why: 'Every sign changes.' },
    { q: m('5 − (3 − 8)') + ' equals:', a: [m('0'), m('10'), m('−6'), m('16')], c: 1, why: m('5 − 3 + 8') + '.' },
    { q: 'The mean of ' + m('−8, −4, 0, 4') + ':', a: [m('−2'), m('−8'), m('0'), m('2')], c: 0, why: m('−8 ÷ 4') + '.' },
    { q: 'A mean always lies:', a: ['above the greatest', 'below the least', 'between them', 'at zero'], c: 2, why: 'A useful check.' }
  ],
  practice: {
    easy: [
      [m('−5 + 3 × (−4)'), m('−17')],
      [m('(−5 + 3) × (−4)'), m('8')],
      [m('−20 ÷ (−4) − 6'), m('−1')],
      [m('(−3)² − 4 × (−2)'), m('17')],
      [m('−3(4 + 5)'), m('−27')],
      [m('−3(4 − 5)'), m('3')],
      [m('5 − (3 − 8)'), m('10')]
    ],
    med: [
      ['Mean of ' + m('−3, 0, 2, −5, 1'), m('−1')],
      ['Mean of ' + m('−8, −4, 0, 4'), m('−2')],
      [m('−7 + 3 × 4'), m('5')],
      [m('−18 − 4 × 5'), m('−38')],
      [m('−20 000 + 3 × 6000'), m('−2000')],
      ['Simplify ' + m('−(a − b + c)'), m('−a + b − c')],
      [m('(−2)(−3) − (−4)(5)'), m('26')]
    ],
    hard: [
      [m('(−4)² − (−4)² ÷ (−2)³'), m('18')],
      [m('−2[3 − (−5 + 1)]'), m('−14')],
      ['Mean of ' + m('−12, −5, 0, 3, 9'), m('−1')],
      ['A diver at ' + m('−12 m') + ' rises ' + m('2 m') + ' a minute for ' + m('8') + ' minutes', m('+4 m')],
      ['Five days at ' + m('−4, −1, 2, −7, 5') + ': the mean temperature', m('−1°')],
      ['Find ' + m('x') + ': ' + m('3x − (−6) = 0'), m('−2')],
      ['Evaluate ' + m('a² − 2ab') + ' at ' + m('a = −3, b = 4'), m('33')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write the expression before the arithmetic, and check the answer for plausibility.',
  homework: [
    'Evaluate ' + m('−6 + 4 × (−3)') + ' and ' + m('(−6 + 4) × (−3)') + '.',
    'Evaluate ' + m('(−2)³ + 5 × (−4) ÷ 2') + '.',
    'Simplify ' + m('−(2x − 5 + y)') + '.',
    'The temperature is ' + m('−9°C') + ' and rises ' + m('4') + ' degrees each hour for ' + m('3') + ' hours. Find it then.',
    'Find the mean of ' + m('−10, −2, 0, 4, 8') + '.'
  ]
});

/* ============================== 18 ============================== */
G7_MAT.push({
  id: 'g7-18', stream: 'mat', grade: 7, quarter: 1, lessons: '35–36', hours: 2,
  title: 'Control work 2, and work on the mistakes',
  subtitle: 'The integers in one paper — the four operations, the signs and the order.',
  uz: 'Matematika 7, Nazorat ishi 2', uzPage: 'pp. 36–94',
  cam: 'S8 1 review', camPage: 'Stage 8, pp. 2–10', wb: 'Control paper M2',
  objectives: [
    'Use the sign rules for all four operations under time.',
    'Apply the order of operations to a mixed expression.',
    'Compare and order integers, and use the modulus.',
    'Classify each lost mark and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Integer', 'Butun son', 'Целое число'],
    ['Modulus', 'Modul', 'Модуль'],
    ['Sign rule', 'Ishoralar qoidasi', 'Правило знаков'],
    ['Order of operations', 'Amallar tartibi', 'Порядок действий'],
    ['Ascending order', 'O‘sish tartibi', 'По возрастанию'],
    ['Opposite number', 'Qarama-qarshi son', 'Противоположное число'],
    ['Diagnosis', 'Tashxis', 'Диагностика']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [12, 'Answers'], [20, 'Diagnosis and rewrite'], [5, 'The map']],
  sections: [
    {
      h: 'The paper — 30 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Put in ascending order: ${m('−7, 3, 0, −12, 5')}</td><td class="m">4</td><td>L23–24</td></tr>
        <tr><td>2</td><td>Find ${m('|−9|')}, ${m('−(−6)')} and the opposite of ${m('11')}</td><td class="m">4</td><td>L21–22</td></tr>
        <tr><td>3</td><td>Compute ${m('(−8) + (−5)')}, ${m('12 + (−17)')}, ${m('−4 − (−9)')}</td><td class="m">6</td><td>L25–28</td></tr>
        <tr><td>4</td><td>Compute ${m('(−6)(−7)')}, ${m('(−45) ÷ 9')}, ${m('(−2)⁴')}</td><td class="m">6</td><td>L29–32</td></tr>
        <tr><td>5</td><td>Evaluate ${m('−15 ÷ 3 + (−2) × 4')}</td><td class="m">5</td><td>L33–34</td></tr>
        <tr><td>6</td><td>Solve ${m('|x| = 7')} and find the mean of ${m('−5, 1, −2, 6')}</td><td class="m">5</td><td>L21–22, 33–34</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks actually go</div>
      Q1 carries one mark for putting the negatives in the right order among themselves; Q4 two for the
      even power; Q5 two for doing ÷ and × before + ; Q6 two for giving <b>both</b> solutions.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>negatives ordered forwards</td><td class="m">−7, −12</td><td class="m">−12, −7</td></tr>
        <tr><td>modulus left negative</td><td class="m">|−9| = −9</td><td class="m">9</td></tr>
        <tr><td>same signs subtracted</td><td class="m">(−8) + (−5) = −3</td><td class="m">−13</td></tr>
        <tr><td>sign taken from the first number</td><td class="m">12 + (−17) = 5</td><td class="m">−5</td></tr>
        <tr><td>double minus missed</td><td class="m">−4 − (−9) = −13</td><td class="m">5</td></tr>
        <tr><td>even power made negative</td><td class="m">(−2)⁴ = −16</td><td class="m">16</td></tr>
        <tr><td>left to right regardless</td><td class="m">−15 ÷ 3 + (−2) × 4 = −28</td><td class="m">−13</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'Chapter II as one map',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Block</th><th>The sentence</th></tr></thead>
      <tbody>
        <tr><td>why negatives exist</td><td>so that every subtraction has an answer</td></tr>
        <tr><td>the coordinate line</td><td>further right means greater</td></tr>
        <tr><td>the modulus</td><td>the distance from zero — never negative</td></tr>
        <tr><td>addition</td><td>same signs add and keep; different signs subtract and take the larger sign</td></tr>
        <tr><td>subtraction</td><td class="m">a − b = a + (−b)</td></tr>
        <tr><td>multiplication and division</td><td>alike gives ${m('+')}, unlike gives ${m('−')}</td></tr>
        <tr><td>powers</td><td>even exponent positive, odd exponent keeps the sign</td></tr>
        <tr><td>order</td><td>brackets, powers, ×÷, +−</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Looking forward</div>
      The next chapter fills the last gap in the number system for this year: the <b>rational</b>
      numbers, where division always works too. The sign rules carry over unchanged — only the
      arithmetic of fractions is added.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q3: ' + m('(−8) + (−5)') + ', ' + m('12 + (−17)') + ', ' + m('−4 − (−9)') + '.',
      steps: [
        ['Same signs: ' + m('8 + 5 = 13') + ', keep the minus — ' + m('−13') + '.', ''],
        ['Different signs: ' + m('17 − 12 = 5') + ', sign of ' + m('−17') + ' — ' + m('−5') + '.', ''],
        ['Rewrite: ' + m('−4 + 9') + '.', 'Two minuses.'],
        [m('= 5'), '']
      ],
      ans: m('−13, −5, 5')
    },
    {
      q: 'Model answer, Q5: ' + m('−15 ÷ 3 + (−2) × 4') + '.',
      steps: [
        ['Division and multiplication first.', ''],
        [m('−15 ÷ 3 = −5'), ''],
        [m('(−2) × 4 = −8'), ''],
        [m('−5 + (−8) = −13'), '']
      ],
      ans: m('−13')
    },
    {
      q: 'Model answer, Q6: solve ' + m('|x| = 7') + ' and find the mean of ' + m('−5, 1, −2, 6') + '.',
      steps: [
        ['Two points are ' + m('7') + ' from zero.', ''],
        [m('x = 7') + ' or ' + m('x = −7') + '.', 'Both needed.'],
        ['Sum: ' + m('−5 + 1 − 2 + 6 = 0') + '.', ''],
        ['Mean ' + m('= 0 ÷ 4 = 0') + '.', '']
      ],
      ans: m('x = ±7') + '; mean ' + m('0')
    }
  ],
  modelNote: 'Mark Q3 aloud, reading each sum as a sentence about money; every wrong sign becomes obviously wrong before any rule is quoted.',
  interactive: {
    type: 'quiz',
    title: 'Chapter II in twelve questions',
    hint: 'Two from each block.',
    items: [
      { q: 'Negatives exist so that:', a: ['addition works', 'subtraction always works', 'division works', 'nothing'], c: 1, why: m('3 − 5') + '.' },
      { q: 'Zero is:', a: ['positive', 'negative', 'neither', 'both'], c: 2, why: 'The boundary.' },
      { q: 'Greater: ' + m('−8') + ' or ' + m('−3') + '?', a: [m('−8'), m('−3'), 'equal', 'cannot tell'], c: 1, why: 'Further right.' },
      { q: m('|−9|') + ' equals:', a: [m('−9'), m('9'), m('0'), m('81')], c: 1, why: 'A distance.' },
      { q: m('(−8) + (−5)') + ' equals:', a: [m('−3'), m('−13'), m('3'), m('13')], c: 1, why: 'Same signs: add and keep.' },
      { q: m('12 + (−17)') + ' equals:', a: [m('5'), m('−5'), m('29'), m('−29')], c: 1, why: 'Sign of the larger modulus.' },
      { q: m('a − b') + ' equals:', a: [m('a + b'), m('a + (−b)'), m('b − a'), m('−a − b')], c: 1, why: 'Add the opposite.' },
      { q: m('−4 − (−9)') + ' equals:', a: [m('−13'), m('5'), m('−5'), m('13')], c: 1, why: 'Two minuses give a plus.' },
      { q: m('(−6)(−7)') + ' equals:', a: [m('42'), m('−42'), m('13'), m('−13')], c: 0, why: 'Alike signs.' },
      { q: m('(−45) ÷ 9') + ' equals:', a: [m('5'), m('−5'), m('−405'), m('405')], c: 1, why: 'Unlike signs.' },
      { q: m('(−2)⁴') + ' equals:', a: [m('16'), m('−16'), m('8'), m('−8')], c: 0, why: 'An even exponent.' },
      { q: 'Order of operations:', a: ['left to right always', 'brackets, powers, ×÷, +−', '+− first', 'no rule'], c: 1, why: 'Four levels.' }
    ]
  },
  quiz: [
    { q: 'Q1 tests mainly:', a: ['arithmetic', 'ordering negatives', 'speed', 'the modulus'], c: 1, why: 'The reversal among negatives.' },
    { q: 'In Q3 the third part needs:', a: ['the addition rule', 'the double-minus rule', 'a power', 'a modulus'], c: 1, why: m('−4 + 9') + '.' },
    { q: m('(−2)⁴') + ' is positive because:', a: ['the base is even', 'the exponent is even', 'the base is negative', 'no reason'], c: 1, why: 'Four negative factors.' },
    { q: 'Q5 requires:', a: ['left to right', '× and ÷ first', '+ and − first', 'brackets'], c: 1, why: 'They rank higher.' },
    { q: 'Q6’s equation has:', a: ['one answer', 'two answers', 'no answer', 'many'], c: 1, why: m('±7') + '.' },
    { q: 'Work on the mistakes means:', a: ['fix the wrong line', 'rewrite the solution', 'copy the answer', 'skip it'], c: 1, why: 'The whole solution, again.' }
  ],
  practice: {
    easy: [
      ['Ascending: ' + m('−7, 3, 0, −12, 5'), m('−12, −7, 0, 3, 5')],
      [m('|−9|'), m('9')],
      [m('−(−6)'), m('6')],
      ['Opposite of ' + m('11'), m('−11')],
      [m('(−8) + (−5)'), m('−13')],
      [m('12 + (−17)'), m('−5')],
      [m('−4 − (−9)'), m('5')]
    ],
    med: [
      [m('(−6)(−7)'), m('42')],
      [m('(−45) ÷ 9'), m('−5')],
      [m('(−2)⁴'), m('16')],
      [m('−15 ÷ 3 + (−2) × 4'), m('−13')],
      ['Solve ' + m('|x| = 7'), m('±7')],
      ['Mean of ' + m('−5, 1, −2, 6'), m('0')],
      [m('(−3)³'), m('−27')]
    ],
    hard: [
      [m('(−2)³ + (−3)² − (−4)'), m('5')],
      [m('−24 ÷ (−6) × (−2)'), m('−8')],
      [m('(−5)(3) − (−2)(−6)'), m('−27')],
      ['Mean of ' + m('−9, −3, 0, 6, 11'), m('1')],
      ['Solve ' + m('|x| ≤ 2') + ' in integers', m('−2, −1, 0, 1, 2')],
      ['Find ' + m('x') + ': ' + m('−4x + 3 = 19'), m('−4')],
      ['Evaluate ' + m('2a − b²') + ' at ' + m('a = −5, b = −3'), m('−19')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite in full every question that lost a mark before the next chapter begins.',
  homework: [
    'Put in ascending order: ' + m('−4, 8, 0, −15, 2') + '.',
    'Compute ' + m('(−9) + (−6)') + ', ' + m('14 + (−21)') + ' and ' + m('−7 − (−12)') + '.',
    'Compute ' + m('(−8)(−4)') + ', ' + m('(−56) ÷ 7') + ' and ' + m('(−3)⁴') + '.',
    'Evaluate ' + m('−18 ÷ 6 + (−3) × 5') + '.',
    'Solve ' + m('|x| = 12') + ' and find the mean of ' + m('−7, 2, −4, 9') + '.'
  ]
});

/* ============================== 19 ============================== */
G7_MAT.push({
  id: 'g7-19', stream: 'mat', grade: 7, quarter: 1, lessons: '37–38', hours: 2,
  title: 'The idea of the rational numbers',
  subtitle: 'Every fraction, positive or negative — the set in which all four operations work.',
  uz: 'Matematika 7, §15', uzPage: 'pp. 95–100',
  cam: 'S8 7.1', camPage: 'Stage 8, pp. 66–72', wb: 'Exercise 7.1',
  objectives: [
    'Define a rational number and use the symbol ℚ.',
    'Write an integer, a decimal and a mixed number as a fraction.',
    'Convert between fractions and decimals, including recurring ones.',
    'Place rational numbers on the coordinate line.'
  ],
  terms: [
    ['Rational number', 'Ratsional son', 'Рациональное число'],
    ['Fraction', 'Kasr', 'Дробь'],
    ['Numerator', 'Surat', 'Числитель'],
    ['Denominator', 'Maxraj', 'Знаменатель'],
    ['Terminating decimal', 'Chekli o‘nli kasr', 'Конечная десятичная дробь'],
    ['Recurring decimal', 'Davriy o‘nli kasr', 'Периодическая дробь'],
    ['Mixed number', 'Aralash son', 'Смешанное число'],
    ['Equivalent fractions', 'Teng kasrlar', 'Равные дроби']
  ],
  timing: [[15, 'The definition'], [25, 'Everything is a fraction'], [25, 'Fractions and decimals'], [20, 'On the line'], [5, 'Homework']],
  sections: [
    {
      h: 'The definition',
      html: `${eq('A number is rational if it can be written as ' + m(f('p', 'q')) + ' with ' + m('p, q ∈ ℤ') + ' and ' + m('q ≠ 0'), true)}
      <p>The set of them is ${m('ℚ')}. It contains every integer, every fraction, every terminating
      decimal and every recurring decimal — positive and negative alike.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Operation</th><th class="m">ℕ</th><th class="m">ℤ</th><th class="m">ℚ</th></tr></thead>
      <tbody>
        <tr><td>addition</td><td>✓</td><td>✓</td><td>✓</td></tr>
        <tr><td>subtraction</td><td>✗</td><td>✓</td><td>✓</td></tr>
        <tr><td>multiplication</td><td>✓</td><td>✓</td><td>✓</td></tr>
        <tr><td>division (not by ${m('0')})</td><td>✗</td><td>✗</td><td>✓</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">${m('ℚ')} is the first set in which all four operations work</div>
      That is the whole reason for the chapter. Grade 8 will find that ${m(sr('2'))} is <b>not</b>
      rational, and the system will have to grow once more.</div>`
    },
    {
      h: 'Everything is a fraction',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Number</th><th>As ${m(f('p', 'q'))}</th></tr></thead>
      <tbody>
        <tr><td class="m">7</td><td class="m">${f('7', '1')}</td></tr>
        <tr><td class="m">−4</td><td class="m">${f('−4', '1')}</td></tr>
        <tr><td class="m">0.75</td><td class="m">${f('3', '4')}</td></tr>
        <tr><td class="m">2${f('1', '3')}</td><td class="m">${f('7', '3')}</td></tr>
        <tr><td class="m">−1.6</td><td class="m">−${f('8', '5')}</td></tr>
        <tr><td class="m">0</td><td class="m">${f('0', '1')}</td></tr>
      </tbody></table></div>
      <p>A fraction may be written in many equivalent ways: ${m(f('3', '4') + ' = ' + f('6', '8') + ' = ' + f('75', '100'))}.
      The <b>simplest form</b> has no common factor above ${m('1')} in numerator and denominator.</p>
      <div class="warn"><span class="wl">The denominator may never be zero</span>
      ${m(f('5', '0'))} is not a rational number; it is not a number at all. The condition ${m('q ≠ 0')}
      is part of the definition, not an afterthought.</div>`
    },
    {
      h: 'Fractions and decimals',
      html: `<p>Divide the numerator by the denominator. The result is either terminating or
      recurring — never anything else.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Fraction</th><th>Decimal</th><th>Kind</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('3', '4')}</td><td class="m">0.75</td><td>terminating</td></tr>
        <tr><td class="m">${f('1', '8')}</td><td class="m">0.125</td><td>terminating</td></tr>
        <tr><td class="m">${f('1', '3')}</td><td class="m">0.333…</td><td>recurring</td></tr>
        <tr><td class="m">${f('2', '11')}</td><td class="m">0.1818…</td><td>recurring</td></tr>
        <tr><td class="m">${f('5', '6')}</td><td class="m">0.8333…</td><td>recurring</td></tr>
      </tbody></table></div>
      <p>A fraction in simplest form terminates exactly when its denominator has no prime factors other
      than ${m('2')} and ${m('5')} — because ${m('10 = 2 × 5')}.</p>
      <div class="keybox"><div class="klabel">Rational ⟺ terminating or recurring</div>
      A decimal that neither stops nor repeats — such as ${m('0.101001000100001…')} — is not rational.
      Grade 8 will meet a famous one: ${m(sr('2'))}.</div>`
    },
    {
      h: 'On the line',
      html: `<p>Every rational number has a place. To mark ${m(f('3', '4'))}, divide the unit into
      ${m('4')} parts and take ${m('3')}; to mark ${m('−' + f('3', '4'))}, do the same to the left.</p>
      {{fig:numberLineInterval:Dividing the unit segment places any fraction exactly.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Number</th><th>Lies between</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('3', '4')}</td><td class="m">0 and 1</td></tr>
        <tr><td class="m">−${f('3', '4')}</td><td class="m">−1 and 0</td></tr>
        <tr><td class="m">${f('7', '3')}</td><td class="m">2 and 3</td></tr>
        <tr><td class="m">−${f('7', '3')}</td><td class="m">−3 and −2</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Between any two rationals there is another</div>
      Their average. So the rationals leave no gaps a ruler can see — and yet Grade 8 will show that
      gaps remain.</div>`
    }
  ],
  examples: [
    {
      q: 'Write ' + m('7') + ', ' + m('−1.6') + ' and ' + m('2' + f('1', '3')) + ' as fractions ' + m(f('p', 'q')) + '.',
      steps: [
        [m('7 = ' + f('7', '1')), 'Every integer is a fraction.'],
        [m('−1.6 = −' + f('16', '10') + ' = −' + f('8', '5')), 'Simplify.'],
        [m('2' + f('1', '3') + ' = ' + f('6 + 1', '3')), ''],
        [m('= ' + f('7', '3')), '']
      ],
      ans: m(f('7', '1') + ', −' + f('8', '5') + ', ' + f('7', '3'))
    },
    {
      q: 'Convert ' + m(f('3', '8')) + ' and ' + m(f('5', '6')) + ' to decimals, and say which recurs.',
      steps: [
        [m('3 ÷ 8 = 0.375'), 'Terminating.'],
        [m('8 = 2³') + ' — only twos.', ''],
        [m('5 ÷ 6 = 0.8333…'), 'Recurring.'],
        [m('6 = 2 × 3') + ' — the ' + m('3') + ' causes it.', '']
      ],
      ans: m('0.375') + ' and ' + m('0.8333…')
    },
    {
      q: 'Between which two integers does ' + m('−' + f('7', '3')) + ' lie?',
      steps: [
        [m(f('7', '3') + ' = 2' + f('1', '3')), ''],
        ['So ' + m('−' + f('7', '3') + ' = −2' + f('1', '3')) + '.', ''],
        ['That is further left than ' + m('−2') + '.', ''],
        ['Between ' + m('−3') + ' and ' + m('−2') + '.', '']
      ],
      ans: m('−3') + ' and ' + m('−2')
    }
  ],
  modelNote: 'Ask for a number between 0.33 and 0.34, then between that and 0.34; the class discovers that the process never ends, which is what “dense” means.',
  interactive: {
    type: 'fractionCancel',
    title: 'Fractions and their simplest form',
    hint: 'Cancel the common factors.'
  },
  quiz: [
    { q: 'A rational number is:', a: ['any decimal', m(f('p', 'q')) + ' with integers, ' + m('q ≠ 0'), 'an integer', 'a fraction below ' + m('1')], c: 1, why: 'The definition.' },
    { q: 'Is ' + m('7') + ' rational?', a: ['yes', 'no', 'sometimes', 'undefined'], c: 0, why: m(f('7', '1')) + '.' },
    { q: m('ℚ') + ' is closed under:', a: ['addition only', 'all four operations (not ÷0)', 'subtraction only', 'none'], c: 1, why: 'That is why it exists.' },
    { q: m(f('3', '8')) + ' as a decimal:', a: [m('0.38'), m('0.375'), m('0.83'), m('0.125')], c: 1, why: m('3 ÷ 8') + '.' },
    { q: 'A fraction terminates when its denominator has only:', a: [m('2') + ' and ' + m('3'), m('2') + ' and ' + m('5'), m('3') + ' and ' + m('5'), 'primes'], c: 1, why: m('10 = 2 × 5') + '.' },
    { q: m('−' + f('7', '3')) + ' lies between:', a: [m('−2') + ' and ' + m('−1'), m('−3') + ' and ' + m('−2'), m('2') + ' and ' + m('3'), m('−1') + ' and ' + m('0')], c: 1, why: m('−2' + f('1', '3')) + '.' }
  ],
  practice: {
    easy: [
      [m('7') + ' as a fraction', m(f('7', '1'))],
      [m('−4') + ' as a fraction', m('−' + f('4', '1'))],
      [m('0.75') + ' as a fraction', m(f('3', '4'))],
      [m('2' + f('1', '3')) + ' as a fraction', m(f('7', '3'))],
      [m(f('1', '4')) + ' as a decimal', m('0.25')],
      [m(f('1', '3')) + ' as a decimal', m('0.333…')],
      ['Is ' + m(f('5', '0')) + ' a number?', 'No']
    ],
    med: [
      [m('−1.6') + ' as a fraction', m('−' + f('8', '5'))],
      [m(f('3', '8')) + ' as a decimal', m('0.375')],
      [m(f('5', '6')) + ' as a decimal', m('0.8333…')],
      [m(f('2', '11')) + ' as a decimal', m('0.1818…')],
      ['Does ' + m(f('7', '20')) + ' terminate?', 'Yes'],
      ['Does ' + m(f('7', '30')) + ' terminate?', 'No'],
      [m('−' + f('7', '3')) + ' lies between', m('−3') + ' and ' + m('−2')]
    ],
    hard: [
      ['Simplify ' + m(f('84', '126')), m(f('2', '3'))],
      [m('0.375') + ' as a fraction in lowest terms', m(f('3', '8'))],
      ['A number between ' + m(f('1', '3')) + ' and ' + m(f('1', '2')), m(f('5', '12'))],
      ['Order ' + m(f('2', '3') + ', ' + f('3', '5') + ', ' + f('5', '8')), m(f('3', '5') + ' < ' + f('5', '8') + ' < ' + f('2', '3'))],
      ['Which of ' + m(f('1', '6') + ', ' + f('3', '16') + ', ' + f('9', '25')) + ' terminate?', m(f('3', '16')) + ' and ' + m(f('9', '25'))],
      ['Is every integer rational?', 'Yes'],
      ['Is every rational an integer?', 'No']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Give every fraction in its simplest form.',
  homework: [
    'Write ' + m('9') + ', ' + m('−2.4') + ' and ' + m('3' + f('2', '5')) + ' as fractions.',
    'Convert ' + m(f('5', '8')) + ', ' + m(f('4', '9')) + ' and ' + m(f('7', '20')) + ' to decimals.',
    'Say which of them terminate, and why.',
    'Simplify ' + m(f('72', '108')) + '.',
    'Find a rational number between ' + m(f('2', '5')) + ' and ' + m(f('1', '2')) + '.'
  ]
});

/* ============================== 20 ============================== */
G7_MAT.push({
  id: 'g7-20', stream: 'mat', grade: 7, quarter: 1, lessons: '39–40', hours: 2,
  title: 'Addition of rational numbers',
  subtitle: 'A common denominator, then the integer sign rules — nothing else is new.',
  uz: 'Matematika 7, §16', uzPage: 'pp. 101–107',
  cam: 'S8 7.2', camPage: 'Stage 8, pp. 70–76', wb: 'Exercise 7.2',
  objectives: [
    'Add fractions with the same and with different denominators.',
    'Add positive and negative fractions using the sign rules.',
    'Add mixed numbers and decimals.',
    'Use the commutative and associative laws to simplify a sum.'
  ],
  terms: [
    ['Common denominator', 'Umumiy maxraj', 'Общий знаменатель'],
    ['Lowest common denominator', 'Eng kichik umumiy maxraj', 'Наименьший общий знаменатель'],
    ['To simplify', 'Qisqartirish', 'Сократить'],
    ['Mixed number', 'Aralash son', 'Смешанное число'],
    ['Improper fraction', 'Noto‘g‘ri kasr', 'Неправильная дробь'],
    ['Sum', 'Yig‘indi', 'Сумма'],
    ['Like denominators', 'Bir xil maxrajlar', 'Одинаковые знаменатели'],
    ['LCM', 'EKUK', 'НОК']
  ],
  timing: [[15, 'Same denominator'], [25, 'Different denominators'], [25, 'With signs'], [20, 'Mixed numbers'], [5, 'Homework']],
  sections: [
    {
      h: 'Same denominator',
      html: `${eq(m(f('a', 'c') + ' + ' + f('b', 'c') + ' = ' + f('a + b', 'c')), true)}
      <p>Add the numerators and keep the denominator; then simplify.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Sum</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('2', '7')} + ${f('3', '7')}</td><td class="m">${f('5', '7')}</td><td class="m">${f('5', '7')}</td></tr>
        <tr><td class="m">${f('3', '8')} + ${f('1', '8')}</td><td class="m">${f('4', '8')}</td><td class="m">${f('1', '2')}</td></tr>
        <tr><td class="m">−${f('5', '9')} + ${f('2', '9')}</td><td class="m">${f('−3', '9')}</td><td class="m">−${f('1', '3')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Denominators are not added</span>
      ${m(f('2', '7') + ' + ' + f('3', '7'))} is ${m(f('5', '7'))}, not ${m(f('5', '14'))}. Thinking of
      sevenths as a unit — two sevenths plus three sevenths — makes the rule obvious.</div>`
    },
    {
      h: 'Different denominators',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>What to do</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>find the LCM of the denominators</td></tr>
        <tr><td>2</td><td>rewrite each fraction with that denominator</td></tr>
        <tr><td>3</td><td>add the numerators</td></tr>
        <tr><td>4</td><td>simplify</td></tr>
      </tbody></table></div>
      <p><b>Example.</b> ${m(f('3', '4') + ' + ' + f('5', '6'))}. LCM of ${m('4')} and ${m('6')} is
      ${m('12')}:</p>
      ${eq(m(f('9', '12') + ' + ' + f('10', '12') + ' = ' + f('19', '12') + ' = 1' + f('7', '12')), true)}
      <div class="keybox"><div class="klabel">Use the LCM, not the product</div>
      ${m('4 × 6 = 24')} also works, but leaves ${m(f('38', '24'))} to simplify. The LCM gives the
      shortest route and the least cancelling.</div>`
    },
    {
      h: 'With signs',
      html: `<p>Once the denominators agree, the numerators are added exactly as integers were in the
      last chapter.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Sum</th><th>Common denominator</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">−${f('1', '2')} + ${f('1', '3')}</td><td class="m">−${f('3', '6')} + ${f('2', '6')}</td><td class="m">−${f('1', '6')}</td></tr>
        <tr><td class="m">−${f('3', '4')} + (−${f('1', '6')})</td><td class="m">−${f('9', '12')} − ${f('2', '12')}</td><td class="m">−${f('11', '12')}</td></tr>
        <tr><td class="m">${f('5', '8')} + (−${f('5', '8')})</td><td class="m">${f('0', '8')}</td><td class="m">0</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Two chapters, one calculation</div>
      Chapter II supplied the sign rules; this chapter supplies the common denominator. Every question
      here is one of each, done in that order.</div>`
    },
    {
      h: 'Mixed numbers',
      html: `<p>Two routes: convert to improper fractions, or add whole parts and fractional parts
      separately.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Sum</th><th>Route A</th><th>Route B</th></tr></thead>
      <tbody>
        <tr><td class="m">2${f('1', '3')} + 1${f('1', '2')}</td><td class="m">${f('7', '3')} + ${f('3', '2')} = ${f('23', '6')}</td><td class="m">3 + ${f('5', '6')}</td></tr>
      </tbody></table></div>
      <p>Both give ${m('3' + f('5', '6'))}. Route B is quicker when the whole parts are large; Route A is
      safer when signs are involved.</p>
      <div class="warn"><span class="wl">With negative mixed numbers, convert first</span>
      ${m('−2' + f('1', '3'))} means ${m('−(2 + ' + f('1', '3') + ') = −' + f('7', '3'))}, not
      ${m('−2 + ' + f('1', '3'))}. Route A removes the ambiguity entirely.</div>`
    }
  ],
  examples: [
    {
      q: 'Compute ' + m(f('3', '4') + ' + ' + f('5', '6')) + '.',
      steps: [
        ['LCM of ' + m('4') + ' and ' + m('6') + ' is ' + m('12') + '.', ''],
        [m(f('9', '12') + ' + ' + f('10', '12')), ''],
        [m('= ' + f('19', '12')), ''],
        [m('= 1' + f('7', '12')), '']
      ],
      ans: m('1' + f('7', '12'))
    },
    {
      q: 'Compute ' + m('−' + f('1', '2') + ' + ' + f('1', '3')) + ' and ' + m('−' + f('3', '4') + ' + (−' + f('1', '6') + ')') + '.',
      steps: [
        [m('−' + f('3', '6') + ' + ' + f('2', '6') + ' = −' + f('1', '6')), 'Different signs.'],
        ['LCM of ' + m('4') + ' and ' + m('6') + ' is ' + m('12') + '.', ''],
        [m('−' + f('9', '12') + ' − ' + f('2', '12')), 'Same signs.'],
        [m('= −' + f('11', '12')), '']
      ],
      ans: m('−' + f('1', '6')) + ' and ' + m('−' + f('11', '12'))
    },
    {
      q: 'Compute ' + m('2' + f('1', '3') + ' + 1' + f('1', '2')) + '.',
      steps: [
        ['Whole parts: ' + m('2 + 1 = 3') + '.', 'Route B.'],
        ['Fractions: ' + m(f('2', '6') + ' + ' + f('3', '6') + ' = ' + f('5', '6')), ''],
        [m('3 + ' + f('5', '6')), ''],
        [m('= 3' + f('5', '6')), '']
      ],
      ans: m('3' + f('5', '6'))
    }
  ],
  modelNote: 'Cut two paper strips into quarters and sixths; the class sees that twelfths are the smallest pieces both can be made from, and the LCM stops being a rule.',
  interactive: {
    type: 'lcdBuilder',
    title: 'Finding the common denominator',
    hint: 'The LCM gives the least work.'
  },
  quiz: [
    { q: m(f('2', '7') + ' + ' + f('3', '7')) + ' equals:', a: [m(f('5', '14')), m(f('5', '7')), m(f('6', '7')), m(f('6', '49'))], c: 1, why: 'Keep the denominator.' },
    { q: 'For different denominators, first find:', a: ['the product', 'the LCM', 'the HCF', 'the sum'], c: 1, why: 'It gives the least work.' },
    { q: m(f('3', '4') + ' + ' + f('5', '6')) + ' equals:', a: [m(f('8', '10')), m('1' + f('7', '12')), m(f('19', '24')), m('2')], c: 1, why: 'Twelfths.' },
    { q: m('−' + f('1', '2') + ' + ' + f('1', '3')) + ' equals:', a: [m(f('1', '6')), m('−' + f('1', '6')), m('−' + f('5', '6')), m(f('5', '6'))], c: 1, why: 'The half is bigger.' },
    { q: m('−2' + f('1', '3')) + ' as an improper fraction:', a: [m('−' + f('7', '3')), m('−' + f('5', '3')), m(f('7', '3')), m('−' + f('1', '3'))], c: 0, why: 'The minus covers both parts.' },
    { q: m(f('5', '8') + ' + (−' + f('5', '8') + ')') + ' equals:', a: [m(f('10', '8')), m('0'), m(f('5', '4')), m('−' + f('5', '8'))], c: 1, why: 'Opposites.' }
  ],
  practice: {
    easy: [
      [m(f('2', '7') + ' + ' + f('3', '7')), m(f('5', '7'))],
      [m(f('3', '8') + ' + ' + f('1', '8')), m(f('1', '2'))],
      [m(f('1', '2') + ' + ' + f('1', '4')), m(f('3', '4'))],
      [m(f('1', '3') + ' + ' + f('1', '6')), m(f('1', '2'))],
      [m('−' + f('5', '9') + ' + ' + f('2', '9')), m('−' + f('1', '3'))],
      [m(f('5', '8') + ' + (−' + f('5', '8') + ')'), m('0')],
      [m('0.4 + 0.35'), m('0.75')]
    ],
    med: [
      [m(f('3', '4') + ' + ' + f('5', '6')), m('1' + f('7', '12'))],
      [m('−' + f('1', '2') + ' + ' + f('1', '3')), m('−' + f('1', '6'))],
      [m('−' + f('3', '4') + ' + (−' + f('1', '6') + ')'), m('−' + f('11', '12'))],
      [m('2' + f('1', '3') + ' + 1' + f('1', '2')), m('3' + f('5', '6'))],
      [m(f('2', '3') + ' + ' + f('3', '5')), m('1' + f('4', '15'))],
      [m('−' + f('5', '6') + ' + ' + f('3', '4')), m('−' + f('1', '12'))],
      [m('1' + f('1', '4') + ' + (−' + f('1', '2') + ')'), m(f('3', '4'))]
    ],
    hard: [
      [m(f('1', '2') + ' + ' + f('1', '3') + ' + ' + f('1', '6')), m('1')],
      [m('−' + f('2', '3') + ' + ' + f('3', '4') + ' − ' + f('1', '2')), m('−' + f('5', '12'))],
      [m('−1' + f('2', '5') + ' + 2' + f('3', '10')), m(f('9', '10'))],
      [m(f('1', '2') + ' + ' + f('1', '4') + ' + ' + f('1', '8') + ' + ' + f('1', '16')), m(f('15', '16'))],
      ['Find ' + m('x') + ': ' + m('x + ' + f('2', '3') + ' = ' + f('1', '6')), m('−' + f('1', '2'))],
      [m('0.25 + ' + f('1', '3')), m(f('7', '12'))],
      ['The mean of ' + m(f('1', '2')) + ' and ' + m('−' + f('1', '6')), m(f('1', '6'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Find the LCM before writing anything, and simplify every answer.',
  homework: [
    'Compute ' + m(f('2', '5') + ' + ' + f('1', '3')) + ' and ' + m(f('5', '6') + ' + ' + f('3', '8')) + '.',
    'Compute ' + m('−' + f('2', '3') + ' + ' + f('1', '4')) + '.',
    'Compute ' + m('−' + f('1', '5') + ' + (−' + f('3', '10') + ')') + '.',
    'Compute ' + m('3' + f('1', '4') + ' + 2' + f('2', '3')) + '.',
    'Find ' + m('x') + ' if ' + m('x + ' + f('3', '4') + ' = ' + f('1', '2')) + '.'
  ]
});

/* ============================== 21 ============================== */
G7_MAT.push({
  id: 'g7-21', stream: 'mat', grade: 7, quarter: 1, lessons: '41–42', hours: 2,
  title: 'Subtraction of rational numbers',
  subtitle: 'Add the opposite, exactly as with integers — the fractions change nothing.',
  uz: 'Matematika 7, §17', uzPage: 'pp. 108–113',
  cam: 'S8 7.2', camPage: 'Stage 8, pp. 70–76', wb: 'Exercise 7.2',
  objectives: [
    'Subtract fractions with the same and with different denominators.',
    'Use a − b = a + (−b) for rational numbers.',
    'Subtract mixed numbers, including with borrowing.',
    'Find the difference between two rational numbers on the line.'
  ],
  terms: [
    ['Subtraction', 'Ayirish', 'Вычитание'],
    ['Difference', 'Ayirma', 'Разность'],
    ['Common denominator', 'Umumiy maxraj', 'Общий знаменатель'],
    ['To borrow', 'Qarz olish', 'Занять'],
    ['Improper fraction', 'Noto‘g‘ri kasr', 'Неправильная дробь'],
    ['Opposite', 'Qarama-qarshi', 'Противоположное'],
    ['Simplify', 'Soddalashtirish', 'Упростить'],
    ['Compare', 'Taqqoslash', 'Сравнить']
  ],
  timing: [[15, 'The rule'], [25, 'Different denominators'], [25, 'Mixed numbers'], [20, 'Differences on the line'], [5, 'Homework']],
  sections: [
    {
      h: 'The rule',
      html: `${eq(m('a − b = a + (−b)'), true)}
      <p>Exactly as for integers. With like denominators, subtract the numerators:</p>
      ${eq(m(f('a', 'c') + ' − ' + f('b', 'c') + ' = ' + f('a − b', 'c')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Difference</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('5', '7')} − ${f('2', '7')}</td><td class="m">${f('3', '7')}</td><td class="m">${f('3', '7')}</td></tr>
        <tr><td class="m">${f('2', '7')} − ${f('5', '7')}</td><td class="m">${f('−3', '7')}</td><td class="m">−${f('3', '7')}</td></tr>
        <tr><td class="m">${f('1', '4')} − (−${f('1', '4')})</td><td class="m">${f('1', '4')} + ${f('1', '4')}</td><td class="m">${f('1', '2')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Two minuses give a plus here too</span>
      ${m(f('1', '4') + ' − (−' + f('1', '4') + ')')} is ${m(f('1', '2'))}. The rules of Chapter II apply
      to every rational number, not only to integers.</div>`
    },
    {
      h: 'Different denominators',
      html: `<p>Same four steps as for addition: LCM, rewrite, subtract, simplify.</p>
      <p><b>Example.</b> ${m(f('5', '6') + ' − ' + f('3', '4'))}. LCM is ${m('12')}:</p>
      ${eq(m(f('10', '12') + ' − ' + f('9', '12') + ' = ' + f('1', '12')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Difference</th><th>Common denominator</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('3', '4')} − ${f('1', '6')}</td><td class="m">${f('9', '12')} − ${f('2', '12')}</td><td class="m">${f('7', '12')}</td></tr>
        <tr><td class="m">${f('1', '3')} − ${f('1', '2')}</td><td class="m">${f('2', '6')} − ${f('3', '6')}</td><td class="m">−${f('1', '6')}</td></tr>
        <tr><td class="m">−${f('2', '5')} − ${f('3', '10')}</td><td class="m">−${f('4', '10')} − ${f('3', '10')}</td><td class="m">−${f('7', '10')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A negative answer is not a mistake</div>
      ${m(f('1', '3') + ' − ' + f('1', '2') + ' = −' + f('1', '6'))} because a third is less than a half.
      Estimating which is bigger before subtracting tells you the sign in advance.</div>`
    },
    {
      h: 'Mixed numbers',
      html: `<p>Two routes, as for addition. Route A — convert to improper fractions — never fails.</p>
      <p><b>Example.</b> ${m('4' + f('1', '5') + ' − 1' + f('3', '5'))}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Route</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td>A</td><td class="m">${f('21', '5')} − ${f('8', '5')} = ${f('13', '5')} = 2${f('3', '5')}</td></tr>
        <tr><td>B</td><td class="m">4${f('1', '5')} = 3${f('6', '5')}</td></tr>
      </tbody></table></div>
      <p>Route B needs <b>borrowing</b>: since ${m(f('1', '5'))} is smaller than ${m(f('3', '5'))}, one
      whole is exchanged for ${m(f('5', '5'))}. Both routes give ${m('2' + f('3', '5'))}.</p>
      <div class="warn"><span class="wl">Borrowing is where the errors are</span>
      ${m('4' + f('1', '5'))} becomes ${m('3' + f('6', '5'))}, not ${m('3' + f('11', '5'))}. Converting to
      improper fractions avoids the step entirely, and is worth the extra line.</div>`
    },
    {
      h: 'Differences on the line',
      html: `<p>The distance between two rational numbers is ${m('|a − b|')}, exactly as for integers.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Points</th><th>Difference</th><th>Distance</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('3', '4')}, ${f('1', '4')}</td><td class="m">${f('1', '2')}</td><td class="m">${f('1', '2')}</td></tr>
        <tr><td class="m">−${f('1', '2')}, ${f('1', '3')}</td><td class="m">−${f('5', '6')}</td><td class="m">${f('5', '6')}</td></tr>
        <tr><td class="m">−${f('3', '4')}, −${f('1', '4')}</td><td class="m">−${f('1', '2')}</td><td class="m">${f('1', '2')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Which is larger? Subtract and look at the sign</div>
      A positive difference means the first is larger; a negative one means the second is. That is often
      quicker than finding a common denominator twice.</div>`
    }
  ],
  examples: [
    {
      q: 'Compute ' + m(f('5', '6') + ' − ' + f('3', '4')) + '.',
      steps: [
        ['LCM of ' + m('6') + ' and ' + m('4') + ' is ' + m('12') + '.', ''],
        [m(f('10', '12') + ' − ' + f('9', '12')), ''],
        [m('= ' + f('1', '12')), ''],
        ['Positive, so ' + m(f('5', '6')) + ' is the larger.', '']
      ],
      ans: m(f('1', '12'))
    },
    {
      q: 'Compute ' + m('4' + f('1', '5') + ' − 1' + f('3', '5')) + '.',
      steps: [
        ['Convert: ' + m(f('21', '5') + ' − ' + f('8', '5')) + '.', 'Route A.'],
        [m('= ' + f('13', '5')), ''],
        [m('= 2' + f('3', '5')), ''],
        ['Check: ' + m('2' + f('3', '5') + ' + 1' + f('3', '5') + ' = 4' + f('1', '5')) + ' ✓', '']
      ],
      ans: m('2' + f('3', '5'))
    },
    {
      q: 'Find the distance between ' + m('−' + f('1', '2')) + ' and ' + m(f('1', '3')) + ' on the line.',
      steps: [
        [m('−' + f('1', '2') + ' − ' + f('1', '3')), ''],
        [m('= −' + f('3', '6') + ' − ' + f('2', '6') + ' = −' + f('5', '6')), ''],
        ['Take the modulus.', ''],
        [m(f('5', '6')), '']
      ],
      ans: m(f('5', '6'))
    }
  ],
  modelNote: 'Ask which is larger, two thirds or three quarters, before any calculation; the class guesses, then subtracts, and the sign settles it.',
  interactive: {
    type: 'lcdBuilder',
    title: 'Subtracting fractions',
    hint: 'The same denominator, then the numerators.'
  },
  quiz: [
    { q: m(f('2', '7') + ' − ' + f('5', '7')) + ' equals:', a: [m(f('3', '7')), m('−' + f('3', '7')), m(f('7', '7')), m('−' + f('7', '7'))], c: 1, why: 'The second is larger.' },
    { q: m(f('1', '4') + ' − (−' + f('1', '4') + ')') + ' equals:', a: [m('0'), m(f('1', '2')), m('−' + f('1', '2')), m(f('1', '4'))], c: 1, why: 'Two minuses.' },
    { q: m(f('1', '3') + ' − ' + f('1', '2')) + ' equals:', a: [m(f('1', '6')), m('−' + f('1', '6')), m(f('1', '5')), m('−' + f('1', '5'))], c: 1, why: 'A third is smaller.' },
    { q: m('4' + f('1', '5')) + ' with one whole borrowed:', a: [m('3' + f('6', '5')), m('3' + f('11', '5')), m('3' + f('1', '5')), m('5' + f('1', '5'))], c: 0, why: 'One whole is ' + m(f('5', '5')) + '.' },
    { q: 'The distance between ' + m('−' + f('1', '2')) + ' and ' + m(f('1', '3')) + ':', a: [m(f('1', '6')), m(f('5', '6')), m('−' + f('5', '6')), m(f('2', '5'))], c: 1, why: 'A modulus.' },
    { q: 'A negative difference means:', a: ['an error', 'the second is larger', 'the first is larger', 'they are equal'], c: 1, why: 'New minus old.' }
  ],
  practice: {
    easy: [
      [m(f('5', '7') + ' − ' + f('2', '7')), m(f('3', '7'))],
      [m(f('2', '7') + ' − ' + f('5', '7')), m('−' + f('3', '7'))],
      [m(f('3', '4') + ' − ' + f('1', '4')), m(f('1', '2'))],
      [m(f('1', '4') + ' − (−' + f('1', '4') + ')'), m(f('1', '2'))],
      [m(f('1', '2') + ' − ' + f('1', '4')), m(f('1', '4'))],
      [m('0.8 − 0.35'), m('0.45')],
      [m(f('5', '8') + ' − ' + f('1', '8')), m(f('1', '2'))]
    ],
    med: [
      [m(f('5', '6') + ' − ' + f('3', '4')), m(f('1', '12'))],
      [m(f('3', '4') + ' − ' + f('1', '6')), m(f('7', '12'))],
      [m(f('1', '3') + ' − ' + f('1', '2')), m('−' + f('1', '6'))],
      [m('−' + f('2', '5') + ' − ' + f('3', '10')), m('−' + f('7', '10'))],
      [m('4' + f('1', '5') + ' − 1' + f('3', '5')), m('2' + f('3', '5'))],
      [m('3' + f('1', '4') + ' − 1' + f('1', '2')), m('1' + f('3', '4'))],
      ['Distance between ' + m('−' + f('1', '2')) + ' and ' + m(f('1', '3')), m(f('5', '6'))]
    ],
    hard: [
      [m(f('7', '8') + ' − ' + f('2', '3') + ' − ' + f('1', '6')), m(f('1', '24'))],
      [m('−1' + f('1', '3') + ' − (−2' + f('1', '2') + ')'), m('1' + f('1', '6'))],
      [m('5 − 2' + f('3', '7')), m('2' + f('4', '7'))],
      ['Find ' + m('x') + ': ' + m(f('3', '4') + ' − x = ' + f('1', '3')), m(f('5', '12'))],
      ['Which is larger, ' + m(f('5', '8')) + ' or ' + m(f('7', '11')) + '?', m(f('7', '11'))],
      ['The difference between the largest and smallest of ' + m(f('1', '2') + ', −' + f('2', '3') + ', ' + f('3', '4')), m(f('17', '12'))],
      [m('0.6 − ' + f('1', '4')), m(f('7', '20'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Predict the sign of every answer before computing it.',
  homework: [
    'Compute ' + m(f('7', '9') + ' − ' + f('2', '3')) + ' and ' + m(f('2', '5') + ' − ' + f('3', '4')) + '.',
    'Compute ' + m('−' + f('1', '2') + ' − ' + f('2', '3')) + '.',
    'Compute ' + m('5' + f('1', '4') + ' − 2' + f('2', '3')) + '.',
    'Find the distance between ' + m('−' + f('3', '4')) + ' and ' + m(f('1', '2')) + '.',
    'Find ' + m('x') + ' if ' + m(f('2', '3') + ' − x = ' + f('1', '6')) + '.'
  ]
});

/* ============================== 22 ============================== */
G7_MAT.push({
  id: 'g7-22', stream: 'mat', grade: 7, quarter: 1, lessons: '43', hours: 1,
  title: 'Addition and subtraction of rational numbers together',
  subtitle: 'Long chains of fractions — one common denominator, one pass.',
  uz: 'Matematika 7, §18', uzPage: 'pp. 114–117',
  cam: 'S8 7.2', camPage: 'Stage 8, pp. 70–76', wb: 'Exercise 7.2',
  objectives: [
    'Evaluate a chain of additions and subtractions of rational numbers.',
    'Use one common denominator for the whole chain.',
    'Combine fractions and decimals in one calculation.',
    'Solve a simple equation of the form x + a = b in ℚ.'
  ],
  terms: [
    ['Chain of operations', 'Amallar zanjiri', 'Цепочка действий'],
    ['Common denominator', 'Umumiy maxraj', 'Общий знаменатель'],
    ['To combine', 'Birlashtirish', 'Объединить'],
    ['Equation', 'Tenglama', 'Уравнение'],
    ['Unknown', 'Noma’lum', 'Неизвестное'],
    ['Check', 'Tekshirish', 'Проверка'],
    ['Decimal form', 'O‘nli ko‘rinish', 'Десятичная форма'],
    ['Simplest form', 'Eng sodda ko‘rinish', 'Несократимый вид']
  ],
  timing: [[10, 'One denominator for all'], [12, 'Mixing forms'], [12, 'Simple equations'], [6, 'Homework']],
  sections: [
    {
      h: 'One denominator for all',
      html: `<p>For a chain such as ${m(f('1', '2') + ' − ' + f('2', '3') + ' + ' + f('3', '4'))}, find the
      LCM of <b>all</b> the denominators at once and rewrite everything.</p>
      ${eq(m(f('6', '12') + ' − ' + f('8', '12') + ' + ' + f('9', '12') + ' = ' + f('7', '12')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Chain</th><th>LCM</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('1', '2')} − ${f('2', '3')} + ${f('3', '4')}</td><td class="m">12</td><td class="m">${f('7', '12')}</td></tr>
        <tr><td class="m">${f('2', '5')} + ${f('1', '2')} − ${f('7', '10')}</td><td class="m">10</td><td class="m">${f('1', '5')}</td></tr>
        <tr><td class="m">−${f('1', '3')} − ${f('1', '4')} + ${f('5', '6')}</td><td class="m">12</td><td class="m">${f('1', '4')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">One conversion, not two</div>
      Working pairwise means converting twice and simplifying twice. Converting the whole chain once is
      shorter and far less error-prone.</div>`
    },
    {
      h: 'Mixing forms',
      html: `<p>When fractions and decimals appear together, convert to whichever form is easier.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Best form</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">0.5 + ${f('1', '4')}</td><td>fractions</td><td class="m">${f('3', '4')}</td></tr>
        <tr><td class="m">0.25 − ${f('1', '3')}</td><td>fractions</td><td class="m">−${f('1', '12')}</td></tr>
        <tr><td class="m">${f('1', '2')} + 0.3</td><td>decimals</td><td class="m">0.8</td></tr>
        <tr><td class="m">${f('1', '3')} + 0.2</td><td>fractions</td><td class="m">${f('8', '15')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Use fractions whenever a third is involved</span>
      ${m(f('1', '3'))} has no exact decimal form, so any decimal working is an approximation. Fractions
      keep the answer exact.</div>`
    },
    {
      h: 'Simple equations',
      html: `<p>${m('x + a = b')} is solved by subtracting ${m('a')} from both sides:</p>
      ${eq(m('x = b − a'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Equation</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">x + ${f('1', '3')} = ${f('5', '6')}</td><td class="m">${f('5', '6')} − ${f('2', '6')}</td><td class="m">${f('1', '2')}</td></tr>
        <tr><td class="m">x − ${f('2', '5')} = ${f('1', '10')}</td><td class="m">${f('1', '10')} + ${f('4', '10')}</td><td class="m">${f('1', '2')}</td></tr>
        <tr><td class="m">x + ${f('3', '4')} = ${f('1', '4')}</td><td class="m">${f('1', '4')} − ${f('3', '4')}</td><td class="m">−${f('1', '2')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Always substitute the answer back</div>
      One line of checking catches every sign error and every denominator slip, and the check is quicker
      than the solution.</div>`
    }
  ],
  examples: [
    {
      q: 'Compute ' + m(f('1', '2') + ' − ' + f('2', '3') + ' + ' + f('3', '4')) + '.',
      steps: [
        ['LCM of ' + m('2, 3, 4') + ' is ' + m('12') + '.', ''],
        [m(f('6', '12') + ' − ' + f('8', '12') + ' + ' + f('9', '12')), ''],
        [m('= ' + f('6 − 8 + 9', '12')), ''],
        [m('= ' + f('7', '12')), '']
      ],
      ans: m(f('7', '12'))
    },
    {
      q: 'Compute ' + m('0.25 − ' + f('1', '3')) + '.',
      steps: [
        [m('0.25 = ' + f('1', '4')), 'Fractions are exact.'],
        ['LCM of ' + m('4') + ' and ' + m('3') + ' is ' + m('12') + '.', ''],
        [m(f('3', '12') + ' − ' + f('4', '12')), ''],
        [m('= −' + f('1', '12')), '']
      ],
      ans: m('−' + f('1', '12'))
    },
    {
      q: 'Solve ' + m('x + ' + f('3', '4') + ' = ' + f('1', '4')) + '.',
      steps: [
        [m('x = ' + f('1', '4') + ' − ' + f('3', '4')), ''],
        [m('= −' + f('2', '4')), ''],
        [m('= −' + f('1', '2')), ''],
        ['Check: ' + m('−' + f('1', '2') + ' + ' + f('3', '4') + ' = ' + f('1', '4')) + ' ✓', '']
      ],
      ans: m('x = −' + f('1', '2'))
    }
  ],
  modelNote: 'Do one chain twice on the board — pairwise and all at once — and let the class time both; the single conversion wins visibly.',
  interactive: {
    type: 'lcdBuilder',
    title: 'One denominator for the whole chain',
    hint: 'Take the LCM of all of them at once.'
  },
  quiz: [
    { q: 'For a chain, use the LCM of:', a: ['the first two', 'all the denominators', 'the largest', 'the smallest'], c: 1, why: 'One conversion only.' },
    { q: m(f('1', '2') + ' − ' + f('2', '3') + ' + ' + f('3', '4')) + ' equals:', a: [m(f('7', '12')), m(f('5', '12')), m(f('11', '12')), m('−' + f('7', '12'))], c: 0, why: m(f('6 − 8 + 9', '12')) + '.' },
    { q: m('0.25 − ' + f('1', '3')) + ' equals:', a: [m(f('1', '12')), m('−' + f('1', '12')), m('−0.08'), m(f('7', '12'))], c: 1, why: 'A third is larger.' },
    { q: 'When a third is involved, prefer:', a: ['decimals', 'fractions', 'either', 'percentages'], c: 1, why: 'Decimals would be approximate.' },
    { q: m('x + ' + f('3', '4') + ' = ' + f('1', '4')) + ' gives:', a: [m('1'), m(f('1', '2')), m('−' + f('1', '2')), m('−1')], c: 2, why: 'Subtract from both sides.' },
    { q: 'After solving you should:', a: ['stop', 'substitute back', 'round', 'draw a graph'], c: 1, why: 'The quickest check there is.' }
  ],
  practice: {
    easy: [
      [m(f('1', '2') + ' + ' + f('1', '3')), m(f('5', '6'))],
      [m(f('1', '2') + ' − ' + f('1', '3')), m(f('1', '6'))],
      [m('0.5 + ' + f('1', '4')), m(f('3', '4'))],
      [m(f('1', '2') + ' + 0.3'), m('0.8')],
      ['Solve ' + m('x + ' + f('1', '3') + ' = ' + f('5', '6')), m(f('1', '2'))],
      ['Solve ' + m('x − ' + f('2', '5') + ' = ' + f('1', '10')), m(f('1', '2'))],
      [m(f('3', '8') + ' + ' + f('1', '8') + ' − ' + f('1', '4')), m(f('1', '4'))]
    ],
    med: [
      [m(f('1', '2') + ' − ' + f('2', '3') + ' + ' + f('3', '4')), m(f('7', '12'))],
      [m(f('2', '5') + ' + ' + f('1', '2') + ' − ' + f('7', '10')), m(f('1', '5'))],
      [m('−' + f('1', '3') + ' − ' + f('1', '4') + ' + ' + f('5', '6')), m(f('1', '4'))],
      [m('0.25 − ' + f('1', '3')), m('−' + f('1', '12'))],
      [m(f('1', '3') + ' + 0.2'), m(f('8', '15'))],
      ['Solve ' + m('x + ' + f('3', '4') + ' = ' + f('1', '4')), m('−' + f('1', '2'))],
      [m('1 − ' + f('1', '2') + ' − ' + f('1', '3')), m(f('1', '6'))]
    ],
    hard: [
      [m(f('1', '2') + ' − ' + f('1', '3') + ' + ' + f('1', '4') + ' − ' + f('1', '6')), m(f('1', '4'))],
      [m('−' + f('3', '5') + ' + 0.25 − ' + f('1', '4')), m('−' + f('3', '5'))],
      [m('2' + f('1', '3') + ' − 1' + f('1', '2') + ' + ' + f('5', '6')), m('1' + f('2', '3'))],
      ['Solve ' + m(f('2', '3') + ' − x = −' + f('1', '6')), m(f('5', '6'))],
      ['Three pieces of a rod are ' + m(f('1', '4') + ', ' + f('1', '3') + ', ' + f('1', '6')) + ' of it: the rest', m(f('1', '4'))],
      [m('0.75 − ' + f('2', '3') + ' + ' + f('1', '12')), m(f('1', '6'))],
      ['The mean of ' + m(f('1', '2') + ', ' + f('1', '3') + ', ' + f('1', '6')), m(f('1', '3'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Use one common denominator for each whole chain, and check every equation.',
  homework: [
    'Compute ' + m(f('2', '3') + ' − ' + f('1', '2') + ' + ' + f('1', '6')) + '.',
    'Compute ' + m('−' + f('1', '4') + ' + ' + f('2', '5') + ' − ' + f('1', '10')) + '.',
    'Compute ' + m('0.4 + ' + f('1', '3')) + '.',
    'Solve ' + m('x + ' + f('5', '6') + ' = ' + f('1', '3')) + '.',
    'Solve ' + m(f('3', '4') + ' − x = ' + f('1', '8')) + '.'
  ]
});

/* ============================== 23 ============================== */
G7_MAT.push({
  id: 'g7-23', stream: 'mat', grade: 7, quarter: 1, lessons: '44–45', hours: 2,
  title: 'Control work 3, and work on the mistakes',
  subtitle: 'Rational numbers in one paper, and the first quarter closed.',
  uz: 'Matematika 7, Nazorat ishi 3', uzPage: 'pp. 95–117',
  cam: 'S8 7 review', camPage: 'Stage 8, pp. 66–76', wb: 'Control paper M3',
  objectives: [
    'Convert between fractions, decimals and mixed numbers under time.',
    'Add and subtract rational numbers with signs.',
    'Solve a simple equation in ℚ.',
    'Classify each lost mark and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Rational number', 'Ratsional son', 'Рациональное число'],
    ['Common denominator', 'Umumiy maxraj', 'Общий знаменатель'],
    ['Mixed number', 'Aralash son', 'Смешанное число'],
    ['Recurring decimal', 'Davriy o‘nli kasr', 'Периодическая дробь'],
    ['Simplest form', 'Eng sodda ko‘rinish', 'Несократимый вид'],
    ['Equation', 'Tenglama', 'Уравнение'],
    ['Diagnosis', 'Tashxis', 'Диагностика']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [12, 'Answers'], [20, 'Diagnosis and rewrite'], [5, 'The quarter']],
  sections: [
    {
      h: 'The paper — 30 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Write ${m('−2.4')} and ${m('3' + f('1', '4'))} as fractions ${m(f('p', 'q'))}</td><td class="m">4</td><td>L37–38</td></tr>
        <tr><td>2</td><td>Convert ${m(f('7', '8'))} and ${m(f('5', '12'))} to decimals</td><td class="m">4</td><td>L37–38</td></tr>
        <tr><td>3</td><td>Compute ${m(f('2', '3') + ' + ' + f('3', '4'))} and ${m('−' + f('1', '2') + ' + ' + f('1', '5'))}</td><td class="m">6</td><td>L39–40</td></tr>
        <tr><td>4</td><td>Compute ${m(f('5', '6') + ' − ' + f('3', '8'))} and ${m('−' + f('2', '5') + ' − ' + f('1', '2'))}</td><td class="m">6</td><td>L41–42</td></tr>
        <tr><td>5</td><td>Compute ${m('3' + f('1', '3') + ' − 1' + f('3', '4'))}</td><td class="m">5</td><td>L41–42</td></tr>
        <tr><td>6</td><td>Solve ${m('x + ' + f('2', '3') + ' = ' + f('1', '6'))}</td><td class="m">5</td><td>L43</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks actually go</div>
      Q1 carries one mark for simplifying; Q2 one for showing the recurrence; Q3 two for the LCM;
      Q5 two for converting to improper fractions; Q6 one for the check.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>fraction not simplified</td><td class="m">−${f('24', '10')}</td><td class="m">−${f('12', '5')}</td></tr>
        <tr><td>recurrence not shown</td><td class="m">0.41</td><td class="m">0.41666…</td></tr>
        <tr><td>denominators added</td><td class="m">${f('2', '3')} + ${f('3', '4')} = ${f('5', '7')}</td><td class="m">${f('17', '12')}</td></tr>
        <tr><td>wrong sign kept</td><td class="m">−${f('1', '2')} + ${f('1', '5')} = ${f('3', '10')}</td><td class="m">−${f('3', '10')}</td></tr>
        <tr><td>mixed number sign</td><td class="m">−2${f('1', '3')} = −2 + ${f('1', '3')}</td><td class="m">−${f('7', '3')}</td></tr>
        <tr><td>borrowing wrong</td><td class="m">3${f('1', '3')} = 2${f('11', '3')}</td><td class="m">2${f('4', '3')}</td></tr>
        <tr><td>equation solved by adding</td><td class="m">x = ${f('1', '6')} + ${f('2', '3')}</td><td class="m">x = ${f('1', '6')} − ${f('2', '3')}</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'The quarter in one page',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Block</th><th>The sentence</th></tr></thead>
      <tbody>
        <tr><td>the basic figures</td><td>point, line and plane, and the axioms that govern them</td></tr>
        <tr><td>segments and angles</td><td>both add when a point or a ray lies inside</td></tr>
        <tr><td>perpendicular lines</td><td>adjacent add to ${m('180°')}, vertical are equal</td></tr>
        <tr><td>the integers</td><td>invented so that subtraction always works</td></tr>
        <tr><td>the sign rules</td><td>alike gives ${m('+')}, unlike gives ${m('−')}</td></tr>
        <tr><td>the rationals</td><td>invented so that division always works</td></tr>
        <tr><td>fractions</td><td>a common denominator, then the numerators</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Looking forward</div>
      Quarter II returns to geometry for the congruence of triangles, then opens algebra proper with
      powers, monomials and polynomials. The sign rules of this quarter are used in every line of
      it.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q3: ' + m(f('2', '3') + ' + ' + f('3', '4')) + ' and ' + m('−' + f('1', '2') + ' + ' + f('1', '5')) + '.',
      steps: [
        ['LCM of ' + m('3') + ' and ' + m('4') + ' is ' + m('12') + '.', ''],
        [m(f('8', '12') + ' + ' + f('9', '12') + ' = ' + f('17', '12') + ' = 1' + f('5', '12')), ''],
        ['LCM of ' + m('2') + ' and ' + m('5') + ' is ' + m('10') + '.', ''],
        [m('−' + f('5', '10') + ' + ' + f('2', '10') + ' = −' + f('3', '10')), 'The half is bigger.']
      ],
      ans: m('1' + f('5', '12')) + ' and ' + m('−' + f('3', '10'))
    },
    {
      q: 'Model answer, Q5: ' + m('3' + f('1', '3') + ' − 1' + f('3', '4')) + '.',
      steps: [
        ['Convert: ' + m(f('10', '3') + ' − ' + f('7', '4')) + '.', ''],
        ['LCM ' + m('12') + ': ' + m(f('40', '12') + ' − ' + f('21', '12')) + '.', ''],
        [m('= ' + f('19', '12')), ''],
        [m('= 1' + f('7', '12')), '']
      ],
      ans: m('1' + f('7', '12'))
    },
    {
      q: 'Model answer, Q6: solve ' + m('x + ' + f('2', '3') + ' = ' + f('1', '6')) + '.',
      steps: [
        [m('x = ' + f('1', '6') + ' − ' + f('2', '3')), 'Subtract, do not add.'],
        [m('= ' + f('1', '6') + ' − ' + f('4', '6')), ''],
        [m('= −' + f('3', '6') + ' = −' + f('1', '2')), ''],
        ['Check: ' + m('−' + f('1', '2') + ' + ' + f('2', '3') + ' = ' + f('1', '6')) + ' ✓', '']
      ],
      ans: m('x = −' + f('1', '2'))
    }
  ],
  modelNote: 'Mark Q3 aloud with a paper strip folded into twelfths; the wrong answer of five sevenths becomes visibly impossible.',
  interactive: {
    type: 'quiz',
    title: 'Chapter III in twelve questions',
    hint: 'Two from each block.',
    items: [
      { q: 'A rational number is:', a: ['any decimal', m(f('p', 'q')) + ' with ' + m('q ≠ 0'), 'an integer', 'a fraction below ' + m('1')], c: 1, why: 'The definition.' },
      { q: 'Is ' + m('−4') + ' rational?', a: ['yes', 'no', 'sometimes', 'undefined'], c: 0, why: m('−' + f('4', '1')) + '.' },
      { q: m(f('3', '8')) + ' as a decimal:', a: [m('0.38'), m('0.375'), m('0.83'), m('0.125')], c: 1, why: m('3 ÷ 8') + '.' },
      { q: 'A fraction terminates when the denominator has only:', a: [m('2') + ' and ' + m('3'), m('2') + ' and ' + m('5'), 'primes', 'odd factors'], c: 1, why: m('10 = 2 × 5') + '.' },
      { q: m(f('2', '7') + ' + ' + f('3', '7')) + ' equals:', a: [m(f('5', '14')), m(f('5', '7')), m(f('6', '7')), m(f('6', '49'))], c: 1, why: 'Keep the denominator.' },
      { q: 'For unlike denominators, use:', a: ['the product', 'the LCM', 'the HCF', 'the sum'], c: 1, why: 'Least work.' },
      { q: m('−' + f('1', '2') + ' + ' + f('1', '3')) + ' equals:', a: [m(f('1', '6')), m('−' + f('1', '6')), m(f('5', '6')), m('−' + f('5', '6'))], c: 1, why: 'The half is bigger.' },
      { q: m('a − b') + ' equals:', a: [m('a + b'), m('a + (−b)'), m('b − a'), m('−a + b')], c: 1, why: 'Add the opposite.' },
      { q: m('−2' + f('1', '3')) + ' as an improper fraction:', a: [m('−' + f('7', '3')), m('−' + f('5', '3')), m(f('7', '3')), m('−' + f('1', '3'))], c: 0, why: 'The minus covers both parts.' },
      { q: m('4' + f('1', '5')) + ' with one whole borrowed:', a: [m('3' + f('6', '5')), m('3' + f('11', '5')), m('3' + f('1', '5')), m('5' + f('1', '5'))], c: 0, why: 'One whole is ' + m(f('5', '5')) + '.' },
      { q: 'For a chain, take the LCM of:', a: ['the first two', 'all of them', 'the largest', 'the smallest'], c: 1, why: 'One conversion.' },
      { q: m('x + a = b') + ' gives:', a: [m('x = a + b'), m('x = b − a'), m('x = a − b'), m('x = ab')], c: 1, why: 'Subtract from both sides.' }
    ]
  },
  quiz: [
    { q: 'Q1 loses a mark most often for:', a: ['a wrong sign', 'not simplifying', 'a decimal', 'no units'], c: 1, why: m('−' + f('24', '10')) + ' is unfinished.' },
    { q: 'Q2 must show:', a: ['a fraction', 'the recurrence', 'a percentage', 'rounding'], c: 1, why: m('0.41666…') + '.' },
    { q: 'Q3 begins with:', a: ['the numerators', 'the LCM', 'the answer', 'a sketch'], c: 1, why: 'One denominator first.' },
    { q: 'In Q5, converting to improper fractions avoids:', a: ['the LCM', 'borrowing', 'signs', 'checking'], c: 1, why: 'The riskiest step.' },
    { q: 'Q6 is solved by:', a: ['adding ' + m(f('2', '3')), 'subtracting ' + m(f('2', '3')), 'multiplying', 'dividing'], c: 1, why: 'Undo the addition.' },
    { q: 'Work on the mistakes means:', a: ['fix the wrong line', 'rewrite the solution', 'copy the answer', 'skip it'], c: 1, why: 'The whole solution, again.' }
  ],
  practice: {
    easy: [
      [m('−2.4') + ' as a fraction', m('−' + f('12', '5'))],
      [m('3' + f('1', '4')) + ' as a fraction', m(f('13', '4'))],
      [m(f('7', '8')) + ' as a decimal', m('0.875')],
      [m(f('5', '12')) + ' as a decimal', m('0.41666…')],
      [m(f('2', '3') + ' + ' + f('3', '4')), m('1' + f('5', '12'))],
      [m('−' + f('1', '2') + ' + ' + f('1', '5')), m('−' + f('3', '10'))],
      [m(f('5', '6') + ' − ' + f('3', '8')), m(f('11', '24'))]
    ],
    med: [
      [m('−' + f('2', '5') + ' − ' + f('1', '2')), m('−' + f('9', '10'))],
      [m('3' + f('1', '3') + ' − 1' + f('3', '4')), m('1' + f('7', '12'))],
      ['Solve ' + m('x + ' + f('2', '3') + ' = ' + f('1', '6')), m('−' + f('1', '2'))],
      [m(f('1', '2') + ' + ' + f('1', '3') + ' − ' + f('1', '4')), m(f('7', '12'))],
      [m('0.6 + ' + f('1', '5')), m(f('4', '5'))],
      ['Simplify ' + m(f('45', '75')), m(f('3', '5'))],
      ['Solve ' + m('x − ' + f('1', '4') + ' = ' + f('1', '2')), m(f('3', '4'))]
    ],
    hard: [
      [m('2' + f('1', '6') + ' − 3' + f('1', '2')), m('−1' + f('1', '3'))],
      [m('−' + f('3', '4') + ' + ' + f('5', '6') + ' − ' + f('1', '12')), m('0')],
      ['Which is larger, ' + m(f('7', '12')) + ' or ' + m('0.6') + '?', m('0.6')],
      ['Solve ' + m(f('5', '6') + ' − x = −' + f('1', '3')), m(f('7', '6'))],
      ['The mean of ' + m(f('1', '4') + ', ' + f('1', '2') + ', ' + f('3', '4')), m(f('1', '2'))],
      ['A tank ' + m(f('2', '3')) + ' full loses ' + m(f('1', '4')) + ' of the tank', m(f('5', '12')) + ' full'],
      ['Order ' + m(f('3', '5') + ', ' + f('5', '8') + ', ' + f('7', '12')), m(f('7', '12') + ' < ' + f('3', '5') + ' < ' + f('5', '8'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite in full every question that lost a mark before the second quarter begins.',
  homework: [
    'Write ' + m('−1.8') + ' and ' + m('2' + f('3', '5')) + ' as fractions.',
    'Convert ' + m(f('9', '16')) + ' and ' + m(f('7', '15')) + ' to decimals.',
    'Compute ' + m(f('3', '5') + ' + ' + f('1', '4')) + ' and ' + m('−' + f('2', '3') + ' + ' + f('1', '6')) + '.',
    'Compute ' + m('4' + f('1', '4') + ' − 2' + f('2', '3')) + '.',
    'Solve ' + m('x + ' + f('3', '5') + ' = ' + f('1', '10')) + '.'
  ]
});

/* ============================== 24 ============================== */
G7_MAT.push({
  id: 'g7-24', stream: 'mat', grade: 7, quarter: 2, lessons: '46', hours: 1,
  title: 'Triangles: their kinds and their elements',
  subtitle: 'Three sides, three angles, and the two ways of classifying every triangle there is.',
  uz: 'Matematika 7, §19', uzPage: 'pp. 118–122',
  cam: 'S8 8.1', camPage: 'Stage 8, pp. 78–84', wb: 'Exercise 8.1',
  objectives: [
    'Name the elements of a triangle and use the standard notation.',
    'Classify triangles by their sides and by their angles.',
    'Use the triangle inequality to decide whether three lengths can form a triangle.',
    'Identify the median, the altitude and the bisector of a triangle.'
  ],
  terms: [
    ['Triangle', 'Uchburchak', 'Треугольник'],
    ['Vertex', 'Uchi', 'Вершина'],
    ['Side', 'Tomon', 'Сторона'],
    ['Scalene', 'Turli tomonli', 'Разносторонний'],
    ['Isosceles', 'Teng yonli', 'Равнобедренный'],
    ['Equilateral', 'Teng tomonli', 'Равносторонний'],
    ['Median', 'Mediana', 'Медиана'],
    ['Altitude', 'Balandlik', 'Высота']
  ],
  timing: [[10, 'Elements and notation'], [12, 'Two classifications'], [12, 'The triangle inequality'], [6, 'Homework']],
  sections: [
    {
      h: 'Elements and notation',
      html: `<p>A triangle has three <b>vertices</b>, three <b>sides</b> and three <b>angles</b>. The
      standard notation names the side by the small letter of the opposite vertex.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Element</th><th>Written</th></tr></thead>
      <tbody>
        <tr><td>vertices</td><td class="m">A, B, C</td></tr>
        <tr><td>sides</td><td class="m">a = BC, b = CA, c = AB</td></tr>
        <tr><td>angles</td><td class="m">∠A, ∠B, ∠C</td></tr>
        <tr><td>perimeter</td><td class="m">P = a + b + c</td></tr>
      </tbody></table></div>
      <p>Three special segments from a vertex:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Segment</th><th>Goes to</th></tr></thead>
      <tbody>
        <tr><td>median</td><td>the midpoint of the opposite side</td></tr>
        <tr><td>altitude</td><td>the opposite side, at a right angle</td></tr>
        <tr><td>bisector</td><td>the opposite side, halving the angle</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Side ${m('a')} faces angle ${m('A')}</div>
      That single convention makes every later formula readable — the sine rule, the cosine rule, the
      area formula. It is worth fixing now.</div>`
    },
    {
      h: 'Two classifications',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>By sides</th><th>Means</th><th>By angles</th><th>Means</th></tr></thead>
      <tbody>
        <tr><td>scalene</td><td>all sides different</td><td>acute</td><td>all angles acute</td></tr>
        <tr><td>isosceles</td><td>two sides equal</td><td>right</td><td>one angle ${m('90°')}</td></tr>
        <tr><td>equilateral</td><td>all three equal</td><td>obtuse</td><td>one angle obtuse</td></tr>
      </tbody></table></div>
      <p>The two classifications are independent: a triangle may be isosceles and right, or scalene and
      obtuse, and so on. An equilateral triangle is always acute, with all angles ${m('60°')}.</p>
      {{fig:isoscelesTriangle:An isosceles triangle — two equal sides and two equal base angles.}}
      <div class="warn"><span class="wl">Every equilateral triangle is isosceles</span>
      “Two sides equal” does not mean “exactly two”. The equilateral triangle is the special case in
      which all three are.</div>`
    },
    {
      h: 'The triangle inequality',
      html: `${eq('Each side is less than the sum of the other two', true)}
      ${eq(m('a < b + c') + ',   ' + m('b < c + a') + ',   ' + m('c < a + b'), true)}
      <p>It is enough to check the <b>longest</b> side: if the longest is less than the sum of the other
      two, all three inequalities hold.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Lengths</th><th>Check</th><th>Triangle?</th></tr></thead>
      <tbody>
        <tr><td class="m">3, 4, 5</td><td class="m">5 < 3 + 4</td><td>yes</td></tr>
        <tr><td class="m">2, 3, 6</td><td class="m">6 > 2 + 3</td><td>no</td></tr>
        <tr><td class="m">4, 4, 8</td><td class="m">8 = 4 + 4</td><td>no — flat</td></tr>
        <tr><td class="m">7, 10, 15</td><td class="m">15 < 7 + 10</td><td>yes</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Equality gives no triangle</span>
      ${m('4, 4, 8')} lays the two short sides flat along the long one. The inequality must be strict.</div>`
    }
  ],
  examples: [
    {
      q: 'Can a triangle have sides ' + m('2, 3, 6') + '? And ' + m('7, 10, 15') + '?',
      steps: [
        ['Longest of the first: ' + m('6') + '.', ''],
        [m('2 + 3 = 5 < 6') + ' — no triangle.', ''],
        ['Longest of the second: ' + m('15') + '.', ''],
        [m('7 + 10 = 17 > 15') + ' — yes.', '']
      ],
      ans: 'No; yes'
    },
    {
      q: 'A triangle has ' + m('a = 5') + ' and ' + m('b = 9') + '. Between which values must ' + m('c') + ' lie?',
      steps: [
        [m('c < 5 + 9 = 14'), ''],
        [m('9 < 5 + c ⇒ c > 4'), ''],
        ['Combine.', ''],
        [m('4 < c < 14'), '']
      ],
      ans: m('4 < c < 14')
    },
    {
      q: 'Classify a triangle with sides ' + m('5, 5, 8') + ' and one angle of ' + m('106°') + '.',
      steps: [
        ['Two sides equal: isosceles.', 'By sides.'],
        ['One angle above ' + m('90°') + ': obtuse.', 'By angles.'],
        ['Both classifications apply at once.', ''],
        ['An obtuse isosceles triangle.', '']
      ],
      ans: 'Obtuse isosceles'
    }
  ],
  modelNote: 'Give out three strips of card of lengths 2, 3 and 6 cm and ask the class to make a triangle; the failure is more convincing than the inequality.',
  interactive: {
    type: 'triangleAngles',
    title: 'Kinds of triangle',
    hint: 'Drag a vertex and watch the classification change.'
  },
  quiz: [
    { q: 'Side ' + m('a') + ' is opposite:', a: [m('∠A'), m('∠B'), m('∠C'), 'no angle'], c: 0, why: 'The standard convention.' },
    { q: 'A triangle with two equal sides is:', a: ['scalene', 'isosceles', 'equilateral', 'right'], c: 1, why: 'By sides.' },
    { q: 'An equilateral triangle has angles:', a: [m('45°'), m('60°'), m('90°'), 'various'], c: 1, why: m('180 ÷ 3') + '.' },
    { q: 'Can ' + m('2, 3, 6') + ' form a triangle?', a: ['yes', 'no', 'sometimes', 'only if right'], c: 1, why: m('2 + 3 < 6') + '.' },
    { q: 'A median goes to:', a: ['the midpoint', 'at a right angle', 'the bisected angle', 'the vertex'], c: 0, why: 'By definition.' },
    { q: 'With ' + m('a = 5, b = 9') + ', ' + m('c') + ' satisfies:', a: [m('c < 14'), m('c > 4'), m('4 < c < 14'), m('c = 14')], c: 2, why: 'Both inequalities.' }
  ],
  practice: {
    easy: [
      ['Side opposite ' + m('∠B'), m('b')],
      ['A triangle with all sides different', 'Scalene'],
      ['A triangle with all sides equal', 'Equilateral'],
      ['Angles of an equilateral triangle', m('60°') + ' each'],
      ['Can ' + m('3, 4, 5') + ' be a triangle?', 'Yes'],
      ['Can ' + m('2, 3, 6') + ' be a triangle?', 'No'],
      ['Can ' + m('4, 4, 8') + ' be a triangle?', 'No']
    ],
    med: [
      ['Can ' + m('7, 10, 15') + ' be a triangle?', 'Yes'],
      [m('a = 5, b = 9') + ': range of ' + m('c'), m('4 < c < 14')],
      [m('a = 6, b = 6') + ': range of ' + m('c'), m('0 < c < 12')],
      ['Classify ' + m('5, 5, 8') + ' with a ' + m('106°') + ' angle', 'Obtuse isosceles'],
      ['Classify ' + m('3, 4, 5'), 'Right scalene'],
      ['Perimeter of a triangle ' + m('7, 9, 12'), m('28')],
      ['A median goes to', 'The midpoint']
    ],
    hard: [
      ['An isosceles triangle with perimeter ' + m('20') + ' and base ' + m('8'), 'Sides ' + m('6, 6, 8')],
      ['The possible integer values of ' + m('c') + ' with ' + m('a = 5, b = 9'), m('5') + ' to ' + m('13')],
      ['How many of them?', m('9')],
      ['An isosceles triangle with sides ' + m('3') + ' and ' + m('7'), 'Only ' + m('3, 7, 7')],
      ['Why not ' + m('3, 3, 7') + '?', m('3 + 3 < 7')],
      ['A triangle with perimeter ' + m('12') + ' and integer sides: how many?', m('3')],
      ['Name them', m('2,5,5; 3,4,5; 4,4,4')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Check the longest side against the sum of the other two, every time.',
  homework: [
    'Can a triangle have sides ' + m('4, 6, 11') + '? And ' + m('8, 9, 16') + '?',
    'A triangle has ' + m('a = 7') + ' and ' + m('b = 11') + '. Give the range of ' + m('c') + '.',
    'Classify a triangle with sides ' + m('6, 6, 6') + '.',
    'Classify a triangle with a ' + m('90°') + ' angle and two equal sides.',
    'An isosceles triangle has perimeter ' + m('26') + ' and base ' + m('10') + '. Find the equal sides.'
  ]
});

/* ============================== 25 ============================== */
G7_MAT.push({
  id: 'g7-25', stream: 'mat', grade: 7, quarter: 2, lessons: '47–48', hours: 2,
  title: 'The first criterion of congruence of triangles',
  subtitle: 'Two sides and the angle between them fix a triangle completely.',
  uz: 'Matematika 7, §20', uzPage: 'pp. 123–129',
  cam: 'S8 5', camPage: 'Stage 8, pp. 48–56', wb: 'Exercise 5.1',
  objectives: [
    'Define congruent triangles and use the symbol ≡.',
    'State and apply the SAS criterion.',
    'Write a proof of congruence in statement-and-reason form.',
    'Deduce equal sides and angles from a congruence.'
  ],
  terms: [
    ['Congruent', 'Teng', 'Равный'],
    ['Criterion', 'Alomat', 'Признак'],
    ['Corresponding elements', 'Mos elementlar', 'Соответственные элементы'],
    ['Included angle', 'Orasidagi burchak', 'Угол между сторонами'],
    ['Superposition', 'Ustma-ust qo‘yish', 'Наложение'],
    ['To follow', 'Kelib chiqmoq', 'Следовать'],
    ['Common side', 'Umumiy tomon', 'Общая сторона'],
    ['Proof', 'Isbot', 'Доказательство']
  ],
  timing: [[15, 'What congruence means'], [25, 'The criterion'], [25, 'Writing a proof'], [20, 'Consequences'], [5, 'Homework']],
  sections: [
    {
      h: 'What congruence means',
      html: `<p>Two triangles are <b>congruent</b> if one can be laid exactly on the other. Written
      ${m('△ABC ≡ △A₁B₁C₁')}, with the vertices in matching order.</p>
      <p>Congruent triangles have <b>six</b> pairs of equal elements: three sides and three angles.</p>
      {{fig:congruence:Congruent triangles — same shape and same size, in any position.}}
      <div class="warn"><span class="wl">The order of the letters is part of the statement</span>
      ${m('△ABC ≡ △A₁B₁C₁')} says ${m('A')} matches ${m('A₁')}, ${m('B')} matches ${m('B₁')} and
      ${m('C')} matches ${m('C₁')}. Writing them in the wrong order claims something false.</div>`
    },
    {
      h: 'The criterion',
      html: `${eq('If two sides of one triangle and the angle between them are equal to two sides and the angle between them of another, the triangles are congruent', true)}
      ${eq(m('AB = A₁B₁') + ',   ' + m('AC = A₁C₁') + ',   ' + m('∠A = ∠A₁') + '   ⟹   ' + m('△ABC ≡ △A₁B₁C₁'), true)}
      <p>Three of the six pairs are enough — provided they are the <b>right</b> three.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Congruent?</th></tr></thead>
      <tbody>
        <tr><td>two sides and the included angle</td><td>yes — the first criterion</td></tr>
        <tr><td>two sides and a non-included angle</td><td>not necessarily</td></tr>
        <tr><td>three angles</td><td>no — only similar</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Why the angle must be included</div>
      Two sides fixed at a hinge open and close: the third side changes with the angle. Fixing that angle
      fixes the triangle. With a non-included angle the hinge is not fixed and two shapes remain
      possible.</div>`
    },
    {
      h: 'Writing a proof',
      html: `<p><b>Problem.</b> ${m('AB = AD')} and ${m('∠BAC = ∠DAC')}. Prove ${m('△ABC ≡ △ADC')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>Reason</th></tr></thead>
      <tbody>
        <tr><td class="m">AB = AD</td><td>given</td></tr>
        <tr><td class="m">∠BAC = ∠DAC</td><td>given</td></tr>
        <tr><td class="m">AC = AC</td><td>common side</td></tr>
        <tr><td class="m">△ABC ≡ △ADC</td><td>first criterion (SAS)</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The common side is the mark most often missed</div>
      Almost every proof of this kind needs it, and it is always available. Looking for a shared side or
      a shared angle is the first thing to do in any congruence question.</div>`
    },
    {
      h: 'Consequences',
      html: `<p>Once a congruence is proved, <b>all six</b> pairs of elements are equal. That is what makes
      the criteria useful: three facts are given, and three more follow free.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Proved</th><th>Then also</th></tr></thead>
      <tbody>
        <tr><td class="m">△ABC ≡ △ADC</td><td class="m">BC = DC</td></tr>
        <tr><td>same</td><td class="m">∠B = ∠D</td></tr>
        <tr><td>same</td><td class="m">∠BCA = ∠DCA</td></tr>
      </tbody></table></div>
      <p>The abbreviation used in proofs is ${m('CPCT')} — corresponding parts of congruent triangles.</p>
      <div class="warn"><span class="wl">Match the elements by position, not by appearance</span>
      In ${m('△ABC ≡ △ADC')}, ${m('BC')} corresponds to ${m('DC')} because ${m('B')} matches ${m('D')}
      and ${m('C')} matches ${m('C')}. Reading the correspondence off the letters is always safe; reading
      it off the drawing is not.</div>`
    }
  ],
  examples: [
    {
      q: m('AB = AD') + ' and ' + m('∠BAC = ∠DAC') + '. Prove ' + m('△ABC ≡ △ADC') + '.',
      steps: [
        [m('AB = AD') + ' — given.', ''],
        [m('∠BAC = ∠DAC') + ' — given.', 'The included angle.'],
        [m('AC') + ' is common to both.', 'The extra fact.'],
        ['By the first criterion, ' + m('△ABC ≡ △ADC') + '.', '']
      ],
      ans: 'Proved by SAS'
    },
    {
      q: 'In the same figure, what else follows?',
      steps: [
        ['All six pairs of elements are equal.', 'CPCT.'],
        [m('BC = DC'), ''],
        [m('∠B = ∠D'), ''],
        [m('∠BCA = ∠DCA'), '']
      ],
      ans: m('BC = DC') + ', ' + m('∠B = ∠D') + ', ' + m('∠BCA = ∠DCA')
    },
    {
      q: 'Two triangles have sides ' + m('6') + ' and ' + m('8') + ' with an angle of ' + m('40°') + '. Must they be congruent?',
      steps: [
        ['If the ' + m('40°') + ' lies between the ' + m('6') + ' and the ' + m('8') + ': yes.', 'SAS.'],
        ['If it lies elsewhere: not necessarily.', ''],
        ['The position of the angle decides.', ''],
        ['Only when it is the included angle.', '']
      ],
      ans: 'Only if the angle is included'
    }
  ],
  modelNote: 'Hinge two rulers at a fixed angle and mark the third side; changing the angle changes it, and the criterion becomes a physical fact.',
  interactive: {
    type: 'triangleAngles',
    title: 'Two sides and the angle between',
    hint: 'Fix the angle and the triangle is fixed.'
  },
  quiz: [
    { q: 'Congruent triangles have how many pairs of equal elements?', a: [m('3'), m('4'), m('6'), m('2')], c: 2, why: 'Three sides and three angles.' },
    { q: 'The first criterion needs:', a: ['three sides', 'two angles', 'two sides and the included angle', 'three angles'], c: 2, why: 'SAS.' },
    { q: 'Three equal angles give:', a: ['congruence', 'similarity only', 'nothing', 'equal areas'], c: 1, why: 'The size is not fixed.' },
    { q: 'A shared side in a figure is:', a: ['irrelevant', 'a usable equality', 'a mistake', 'an angle'], c: 1, why: m('AC = AC') + '.' },
    { q: m('CPCT') + ' means:', a: ['a criterion', 'corresponding parts of congruent triangles', 'a construction', 'a theorem name'], c: 1, why: 'The standard abbreviation.' },
    { q: 'A non-included equal angle gives:', a: ['congruence', 'not necessarily congruence', 'similarity only', 'nothing'], c: 1, why: 'Two shapes remain possible.' }
  ],
  practice: {
    easy: [
      ['Congruent triangles have how many equal pairs?', m('6')],
      ['The symbol for congruence', m('≡')],
      ['The first criterion in letters', m('SAS')],
      ['A common side gives', 'An equality for free'],
      ['Three equal angles give', 'Similarity only'],
      ['In ' + m('△ABC ≡ △DEF') + ', ' + m('AB') + ' matches', m('DE')],
      ['In the same, ' + m('∠C') + ' matches', m('∠F')]
    ],
    med: [
      [m('AB = AD, ∠BAC = ∠DAC') + ': the third fact', m('AC') + ' common'],
      ['What follows about ' + m('BC') + '?', m('BC = DC')],
      ['What follows about ' + m('∠B') + '?', m('∠B = ∠D')],
      ['Sides ' + m('6, 8') + ' with ' + m('40°') + ' included: congruent?', 'Yes'],
      ['Sides ' + m('6, 8') + ' with ' + m('40°') + ' not included: congruent?', 'Not necessarily'],
      ['Two triangles with ' + m('5, 7') + ' and ' + m('60°') + ' included', 'Congruent'],
      ['Are congruent triangles similar?', 'Yes, with ' + m('k = 1')]
    ],
    hard: [
      ['In a parallelogram, prove the two triangles cut by a diagonal are congruent', 'SAS with the common diagonal'],
      ['Prove that the diagonals of a parallelogram bisect each other', 'Congruent triangles at the centre'],
      ['An isosceles triangle: prove the bisector from the apex is a median', 'SAS'],
      ['Two triangles with ' + m('AB = DE, AC = DF, ∠A = ∠D') + ': name the criterion', 'The first'],
      ['Why is ' + m('AAA') + ' not enough?', 'Any enlargement has the same angles'],
      ['In ' + m('△ABC ≡ △DEF') + ' with ' + m('AB = 5, ∠B = 40°') + ': find ' + m('DE') + ' and ' + m('∠E'), m('5') + ' and ' + m('40°')],
      ['Prove that a kite has two pairs of congruent triangles', 'SAS on each diagonal']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Look for a common side or a common angle in every figure before starting.',
  homework: [
    'In a figure with ' + m('AB = AC') + ' and ' + m('∠BAD = ∠CAD') + ', prove ' + m('△ABD ≡ △ACD') + '.',
    'State what else follows from that congruence.',
    'Explain why the equal angle must lie between the two equal sides.',
    'Two triangles have sides ' + m('7') + ' and ' + m('9') + ' with an included angle of ' + m('55°') + '. Are they congruent?',
    'Prove that a diagonal of a parallelogram divides it into two congruent triangles.'
  ]
});

/* ============================== 26 ============================== */
G7_MAT.push({
  id: 'g7-26', stream: 'mat', grade: 7, quarter: 2, lessons: '49–50', hours: 2,
  title: 'Properties of isosceles triangles',
  subtitle: 'Two equal sides force two equal angles — and one line does the work of three.',
  uz: 'Matematika 7, §21', uzPage: 'pp. 130–136',
  cam: 'S8 5.2', camPage: 'Stage 8, pp. 50–53', wb: 'Exercise 5.2',
  objectives: [
    'State and prove that the base angles of an isosceles triangle are equal.',
    'State and use the converse.',
    'Know that the bisector from the apex is also the median and the altitude.',
    'Solve numerical problems on isosceles and equilateral triangles.'
  ],
  terms: [
    ['Isosceles triangle', 'Teng yonli uchburchak', 'Равнобедренный треугольник'],
    ['Lateral side', 'Yon tomon', 'Боковая сторона'],
    ['Base', 'Asos', 'Основание'],
    ['Base angle', 'Asosdagi burchak', 'Угол при основании'],
    ['Apex angle', 'Uchidagi burchak', 'Угол при вершине'],
    ['Converse', 'Teskari teorema', 'Обратная теорема'],
    ['Axis of symmetry', 'Simmetriya o‘qi', 'Ось симметрии'],
    ['Property', 'Xossa', 'Свойство']
  ],
  timing: [[15, 'The base angles'], [25, 'The proof'], [25, 'The converse'], [20, 'One line, three roles'], [5, 'Homework']],
  sections: [
    {
      h: 'The base angles',
      html: `${eq('In an isosceles triangle the angles at the base are equal', true)}
      {{fig:isoscelesTriangle:Two equal sides, two equal base angles — and one axis of symmetry.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Name</th><th>In ${m('△ABC')} with ${m('AB = AC')}</th></tr></thead>
      <tbody>
        <tr><td>lateral sides</td><td class="m">AB, AC</td></tr>
        <tr><td>base</td><td class="m">BC</td></tr>
        <tr><td>base angles</td><td class="m">∠B, ∠C</td></tr>
        <tr><td>apex angle</td><td class="m">∠A</td></tr>
      </tbody></table></div>
      <p>Since the angles add to ${m('180°')}: ${m('∠B = ∠C = ' + f('180° − ∠A', '2'))}, and
      ${m('∠A = 180° − 2∠B')}.</p>
      <div class="keybox"><div class="klabel">One angle determines all three</div>
      Give any one angle of an isosceles triangle — apex or base — and the other two follow at once. That
      is what makes these questions quick.</div>`
    },
    {
      h: 'The proof',
      html: `<p>Draw the bisector ${m('AD')} of the apex angle.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>Reason</th></tr></thead>
      <tbody>
        <tr><td class="m">AB = AC</td><td>given</td></tr>
        <tr><td class="m">∠BAD = ∠CAD</td><td>${m('AD')} bisects ${m('∠A')}</td></tr>
        <tr><td class="m">AD = AD</td><td>common</td></tr>
        <tr><td class="m">△ABD ≡ △ACD</td><td>first criterion</td></tr>
        <tr><td class="m">∠B = ∠C</td><td>CPCT</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The auxiliary line is the whole proof</div>
      Without ${m('AD')} there are no triangles to compare. Drawing the right extra line is the skill
      this proof teaches, and it recurs throughout the year.</div>`
    },
    {
      h: 'The converse',
      html: `${eq('If two angles of a triangle are equal, the sides opposite them are equal', true)}
      <p>So a triangle is isosceles <b>if and only if</b> two of its angles are equal. Either fact may be
      used to prove the other.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Conclude</th></tr></thead>
      <tbody>
        <tr><td class="m">AB = AC</td><td class="m">∠B = ∠C</td></tr>
        <tr><td class="m">∠B = ∠C</td><td class="m">AB = AC</td></tr>
        <tr><td>all three sides equal</td><td>all three angles ${m('60°')}</td></tr>
        <tr><td>all three angles equal</td><td>all three sides equal</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A converse must be proved separately</span>
      That a statement is true does not make its converse true. Here both directions happen to hold, but
      each needs its own proof — and in general they can differ.</div>`
    },
    {
      h: 'One line, three roles',
      html: `${eq('In an isosceles triangle the bisector from the apex is also the median and the altitude to the base', true)}
      <p>It is also the axis of symmetry of the triangle. Four descriptions of one segment.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>The segment ${m('AD')}</th><th>Because</th></tr></thead>
      <tbody>
        <tr><td>bisects ${m('∠A')}</td><td>by construction</td></tr>
        <tr><td class="m">BD = DC</td><td>CPCT — it is a median</td></tr>
        <tr><td class="m">AD ⊥ BC</td><td class="m">∠ADB = ∠ADC = 90°</td></tr>
        <tr><td>is the axis of symmetry</td><td>the two halves are congruent</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Only from the apex</span>
      The bisector from a <b>base</b> angle is not a median and not an altitude. The property belongs to
      the apex alone.</div>`
    }
  ],
  examples: [
    {
      q: 'An isosceles triangle has apex angle ' + m('40°') + '. Find the base angles.',
      steps: [
        ['The three angles add to ' + m('180°') + '.', ''],
        [m('180° − 40° = 140°') + ' for the two base angles.', ''],
        ['They are equal.', ''],
        [m('70°') + ' each.', '']
      ],
      ans: m('70°') + ' each'
    },
    {
      q: 'An isosceles triangle has a base angle of ' + m('72°') + '. Find the apex angle.',
      steps: [
        ['Both base angles are ' + m('72°') + '.', ''],
        [m('72 + 72 = 144'), ''],
        [m('180 − 144'), ''],
        [m('= 36°'), '']
      ],
      ans: m('36°')
    },
    {
      q: 'In ' + m('△ABC') + ', ' + m('∠B = ∠C = 55°') + ' and ' + m('BC = 12') + '. What can be said about the sides, and about the altitude from ' + m('A') + '?',
      steps: [
        ['Equal angles ⇒ equal opposite sides: ' + m('AB = AC') + '.', 'The converse.'],
        ['So the triangle is isosceles with base ' + m('BC') + '.', ''],
        ['The altitude from ' + m('A') + ' is also the median.', ''],
        ['It meets ' + m('BC') + ' at its midpoint, ' + m('6') + ' from each end.', '']
      ],
      ans: m('AB = AC') + '; the altitude bisects ' + m('BC')
    }
  ],
  modelNote: 'Fold a paper isosceles triangle along the line from the apex; the two halves coincide, and all four properties of that line appear at once.',
  interactive: {
    type: 'triangleAngles',
    title: 'Isosceles angles',
    hint: 'Change the apex angle and watch the base angles follow.'
  },
  quiz: [
    { q: 'In an isosceles triangle the equal angles are:', a: ['at the apex', 'at the base', 'all three', 'none'], c: 1, why: 'Opposite the equal sides.' },
    { q: 'Apex ' + m('40°') + ' gives base angles:', a: [m('40°'), m('70°'), m('140°'), m('100°')], c: 1, why: m(f('140', '2')) + '.' },
    { q: 'Base angle ' + m('72°') + ' gives apex:', a: [m('36°'), m('72°'), m('108°'), m('144°')], c: 0, why: m('180 − 144') + '.' },
    { q: 'Two equal angles imply:', a: ['nothing', 'two equal sides', 'a right angle', 'equal areas'], c: 1, why: 'The converse.' },
    { q: 'The bisector from the apex is also:', a: ['a median only', 'an altitude only', 'both', 'neither'], c: 2, why: 'And the axis of symmetry.' },
    { q: 'An equilateral triangle has angles:', a: [m('45°'), m('60°'), m('90°'), 'various'], c: 1, why: 'All three equal.' }
  ],
  practice: {
    easy: [
      ['Apex ' + m('40°') + ': base angles', m('70°')],
      ['Apex ' + m('90°') + ': base angles', m('45°')],
      ['Base angle ' + m('72°') + ': apex', m('36°')],
      ['Base angle ' + m('50°') + ': apex', m('80°')],
      ['Angles of an equilateral triangle', m('60°')],
      ['Two equal angles imply', 'Two equal sides'],
      ['The bisector from the apex is also', 'A median and an altitude']
    ],
    med: [
      ['Apex ' + m('100°') + ': base angles', m('40°')],
      ['Base angle ' + m('35°') + ': apex', m('110°')],
      ['An isosceles triangle with a ' + m('90°') + ' apex: base angles', m('45°')],
      ['An isosceles triangle with a ' + m('90°') + ' base angle: possible?', 'No'],
      [m('∠B = ∠C = 55°') + ': ' + m('∠A'), m('70°')],
      ['Perimeter ' + m('26') + ', base ' + m('10') + ': the lateral sides', m('8') + ' each'],
      ['Perimeter ' + m('30') + ', lateral side ' + m('11') + ': the base', m('8')]
    ],
    hard: [
      ['An isosceles triangle with base ' + m('10') + ' and lateral side ' + m('13') + ': its height', m('12')],
      ['Its area', m('60')],
      ['An isosceles triangle in which the apex is twice a base angle', m('90°, 45°, 45°')],
      ['An isosceles triangle in which a base angle is twice the apex', m('36°, 72°, 72°')],
      ['An exterior angle at the base of an isosceles triangle is ' + m('130°') + ': the apex', m('80°')],
      ['Why can an isosceles triangle not have two obtuse angles?', 'The sum would exceed ' + m('180°')],
      ['A triangle with angles ' + m('x, x, 4x'), m('30°, 30°, 120°')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Say which angle is the apex and which are the base angles before computing.',
  homework: [
    'An isosceles triangle has apex angle ' + m('64°') + '. Find the base angles.',
    'An isosceles triangle has a base angle of ' + m('43°') + '. Find the apex angle.',
    'An isosceles triangle has perimeter ' + m('34') + ' and base ' + m('12') + '. Find the lateral sides.',
    'Prove that the base angles of an isosceles triangle are equal.',
    'An isosceles triangle has base ' + m('16') + ' and lateral side ' + m('17') + '. Find its height and area.'
  ]
});

/* ============================== 27 ============================== */
G7_MAT.push({
  id: 'g7-27', stream: 'mat', grade: 7, quarter: 2, lessons: '51–52', hours: 2,
  title: 'The second criterion of congruence of triangles',
  subtitle: 'A side and the two angles on it — the criterion that surveyors use.',
  uz: 'Matematika 7, §22', uzPage: 'pp. 137–142',
  cam: 'S8 5', camPage: 'Stage 8, pp. 48–56', wb: 'Exercise 5.1',
  objectives: [
    'State and apply the ASA criterion.',
    'Recognise when the given side is between the two angles.',
    'Use the criterion in proofs involving parallel lines.',
    'Apply it to measuring an inaccessible distance.'
  ],
  terms: [
    ['Second criterion', 'Ikkinchi alomat', 'Второй признак'],
    ['Two angles and a side', 'Ikki burchak va tomon', 'Два угла и сторона'],
    ['Adjacent side', 'Yondosh tomon', 'Прилежащая сторона'],
    ['Angle sum', 'Burchaklar yig‘indisi', 'Сумма углов'],
    ['Surveying', 'Yer o‘lchash', 'Съёмка местности'],
    ['Inaccessible', 'Yetib bo‘lmaydigan', 'Недоступный'],
    ['Alternate angles', 'Ichki almashinuvchi burchaklar', 'Накрест лежащие углы'],
    ['Proof', 'Isbot', 'Доказательство']
  ],
  timing: [[15, 'The criterion'], [25, 'Which side counts'], [25, 'In proofs'], [20, 'Measuring a distance'], [5, 'Homework']],
  sections: [
    {
      h: 'The criterion',
      html: `${eq('If a side and the two angles on it in one triangle equal a side and the two angles on it in another, the triangles are congruent', true)}
      ${eq(m('BC = B₁C₁') + ',   ' + m('∠B = ∠B₁') + ',   ' + m('∠C = ∠C₁') + '   ⟹   ' + m('△ABC ≡ △A₁B₁C₁'), true)}
      <p>The third angle is then equal too, since the angles of a triangle add to ${m('180°')}.</p>
      <div class="keybox"><div class="klabel">Two angles and <i>any</i> side are enough</div>
      Because the third angle follows from the angle sum, a side and any two angles determine the
      triangle — whether the side lies between them or not. That is why the criterion is sometimes
      written ASA and sometimes AAS.</div>`
    },
    {
      h: 'Which side counts',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Enough?</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td class="m">a, ∠B, ∠C</td><td>yes</td><td>the side is between them</td></tr>
        <tr><td class="m">a, ∠A, ∠B</td><td>yes</td><td>${m('∠C')} follows from the sum</td></tr>
        <tr><td class="m">∠A, ∠B, ∠C</td><td><b>no</b></td><td>no side fixes the size</td></tr>
      </tbody></table></div>
      <p>The middle row is the one that surprises: the side need not be included, because the missing
      angle is never really missing.</p>
      <div class="warn"><span class="wl">Three angles fix the shape, never the size</span>
      Any enlargement of a triangle has the same three angles. At least one length is always
      needed.</div>`
    },
    {
      h: 'In proofs',
      html: `<p><b>Problem.</b> ${m('AB ∥ CD')} and ${m('AB = CD')}. Prove ${m('△ABO ≡ △DCO')}, where
      ${m('O')} is the intersection of ${m('AD')} and ${m('BC')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>Reason</th></tr></thead>
      <tbody>
        <tr><td class="m">AB = CD</td><td>given</td></tr>
        <tr><td class="m">∠ABO = ∠DCO</td><td>alternate angles, ${m('AB ∥ CD')}</td></tr>
        <tr><td class="m">∠BAO = ∠CDO</td><td>alternate angles</td></tr>
        <tr><td class="m">△ABO ≡ △DCO</td><td>second criterion</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Parallel lines are a supply of equal angles</div>
      Almost every use of the second criterion begins with a pair of parallels. Spotting them turns a
      hard figure into an easy proof.</div>`
    },
    {
      h: 'Measuring a distance',
      html: `<p>To measure the width of a river without crossing it:</p>
      <ol>
        <li>mark ${m('A')} on one bank and a landmark ${m('B')} on the other;</li>
        <li>walk along the bank to ${m('C')} and measure ${m('AC')};</li>
        <li>measure ${m('∠BAC')} and ${m('∠BCA')};</li>
        <li>construct a triangle with the same side and two angles on level ground, and measure its
        third side.</li>
      </ol>
      <p>By the second criterion the constructed triangle is congruent to the real one, so the measured
      side <b>is</b> the width of the river.</p>
      <div class="keybox"><div class="klabel">This is what surveying was, before trigonometry</div>
      A tape and a protractor, a criterion of congruence, and a drawing on level ground. The method is
      ancient, exact, and still taught for exactly that reason.</div>`
    }
  ],
  examples: [
    {
      q: 'Two triangles have a side of ' + m('7') + ' with angles ' + m('50°') + ' and ' + m('60°') + ' on it. Are they congruent?',
      steps: [
        ['A side and the two angles on it.', ''],
        ['The second criterion applies.', ''],
        ['The third angle is ' + m('70°') + ' in both.', ''],
        ['Congruent.', '']
      ],
      ans: 'Yes, by ASA'
    },
    {
      q: 'Two triangles have a side of ' + m('7') + ', an angle of ' + m('50°') + ' on it and an angle of ' + m('70°') + ' opposite it. Congruent?',
      steps: [
        ['The third angle is ' + m('180 − 50 − 70 = 60°') + '.', ''],
        ['So all three angles are known in both.', ''],
        ['With the side of ' + m('7') + ' in the same position, ASA applies.', ''],
        ['Congruent.', 'The side need not be included.']
      ],
      ans: 'Yes'
    },
    {
      q: m('AB ∥ CD') + ' and ' + m('AB = CD') + '. Prove that ' + m('AD') + ' and ' + m('BC') + ' bisect each other.',
      steps: [
        ['Alternate angles give ' + m('∠ABO = ∠DCO') + ' and ' + m('∠BAO = ∠CDO') + '.', ''],
        ['With ' + m('AB = CD') + ', the second criterion gives ' + m('△ABO ≡ △DCO') + '.', ''],
        ['CPCT: ' + m('AO = DO') + ' and ' + m('BO = CO') + '.', ''],
        ['So each diagonal is bisected.', '']
      ],
      ans: 'Proved'
    }
  ],
  modelNote: 'Measure the width of the corridor from inside the classroom using a tape and a protractor; the construction on paper gives an answer that can then be checked directly.',
  interactive: {
    type: 'triangleAngles',
    title: 'A side and two angles',
    hint: 'Fix one side and two angles — the triangle is fixed.'
  },
  quiz: [
    { q: 'The second criterion needs:', a: ['three sides', 'a side and two angles', 'two sides and an angle', 'three angles'], c: 1, why: 'ASA.' },
    { q: 'The third angle:', a: ['must be given', 'follows from the sum', 'is irrelevant', 'is always ' + m('90°')], c: 1, why: m('180°') + ' in total.' },
    { q: 'Must the side lie between the angles?', a: ['yes', 'no', 'only sometimes', 'it depends on the size'], c: 1, why: 'The third angle is known anyway.' },
    { q: 'Three angles alone give:', a: ['congruence', 'similarity', 'nothing', 'equal areas'], c: 1, why: 'No size is fixed.' },
    { q: 'Parallel lines supply:', a: ['equal sides', 'equal angles', 'right angles', 'nothing'], c: 1, why: 'Alternate and corresponding angles.' },
    { q: 'Surveying a river width uses:', a: ['the first criterion', 'the second criterion', 'the triangle inequality', 'Pythagoras'], c: 1, why: 'A side and two angles.' }
  ],
  practice: {
    easy: [
      ['The second criterion in letters', m('ASA')],
      ['A side of ' + m('7') + ' with ' + m('50°') + ' and ' + m('60°') + ' on it: third angle', m('70°')],
      ['Two triangles with that data', 'Congruent'],
      ['Three equal angles give', 'Similarity only'],
      ['Alternate angles come from', 'Parallel lines'],
      ['Angles ' + m('50°, 70°') + ': the third', m('60°')],
      ['Is a side always needed?', 'Yes']
    ],
    med: [
      ['A side of ' + m('7') + ', ' + m('50°') + ' on it and ' + m('70°') + ' opposite: congruent?', 'Yes'],
      [m('AB ∥ CD, AB = CD') + ': which criterion?', 'The second'],
      ['What follows about ' + m('AO') + ' and ' + m('DO') + '?', 'They are equal'],
      ['Two triangles with ' + m('∠A = ∠D, ∠B = ∠E, AB = DE'), 'Congruent'],
      ['Two triangles with ' + m('∠A = ∠D, ∠B = ∠E') + ' only', 'Similar only'],
      ['Angles ' + m('40°, 40°') + ' with the included side ' + m('9'), 'Congruent to any such triangle'],
      ['The third angle there', m('100°')]
    ],
    hard: [
      ['Prove that the diagonals of a parallelogram bisect each other', 'ASA with alternate angles'],
      ['Prove that a point on the bisector of an angle is equidistant from the arms', 'ASA, then CPCT'],
      ['Prove that the base angles of an isosceles triangle are equal, using ASA', 'Compare the triangle with itself, reversed'],
      ['A triangle with ' + m('∠A = 3x, ∠B = 2x, ∠C = x'), m('90°, 60°, 30°')],
      ['Why is ASA enough but SSA not?', 'The third angle is forced; the third side is not'],
      ['Two triangles share a side and have two pairs of equal angles', 'Congruent'],
      ['How many measurements are needed to fix a triangle?', 'Three, including at least one length']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Mark the equal angles and the equal side on the figure before writing the proof.',
  homework: [
    'Two triangles have a side of ' + m('9') + ' with angles ' + m('45°') + ' and ' + m('65°') + ' on it. Are they congruent?',
    'Find the third angle in that triangle.',
    'Prove that the diagonals of a parallelogram bisect each other.',
    'Explain why three angles alone do not prove congruence.',
    'Describe how to measure the width of a river using the second criterion.'
  ]
});

/* ============================== 28 ============================== */
G7_MAT.push({
  id: 'g7-28', stream: 'mat', grade: 7, quarter: 2, lessons: '53–54', hours: 2,
  title: 'The third criterion of congruence of triangles',
  subtitle: 'Three sides and nothing else — the criterion that makes a triangle rigid.',
  uz: 'Matematika 7, §23', uzPage: 'pp. 143–148',
  cam: 'S8 5', camPage: 'Stage 8, pp. 48–56', wb: 'Exercise 5.1',
  objectives: [
    'State and apply the SSS criterion.',
    'Use it to prove properties of the rhombus and the kite.',
    'Explain why a triangle is rigid and a quadrilateral is not.',
    'Choose between the three criteria from the given data.'
  ],
  terms: [
    ['Third criterion', 'Uchinchi alomat', 'Третий признак'],
    ['Three sides', 'Uchta tomon', 'Три стороны'],
    ['Rigid', 'Qattiq', 'Жёсткий'],
    ['Rhombus', 'Romb', 'Ромб'],
    ['Kite', 'Deltoid', 'Дельтоид'],
    ['Diagonal', 'Diagonal', 'Диагональ'],
    ['Framework', 'Karkas', 'Каркас'],
    ['To choose', 'Tanlash', 'Выбрать']
  ],
  timing: [[15, 'The criterion'], [25, 'Rigidity'], [25, 'Using it'], [20, 'Choosing a criterion'], [5, 'Homework']],
  sections: [
    {
      h: 'The criterion',
      html: `${eq('If the three sides of one triangle are equal to the three sides of another, the triangles are congruent', true)}
      ${eq(m('AB = A₁B₁') + ',   ' + m('BC = B₁C₁') + ',   ' + m('CA = C₁A₁') + '   ⟹   ' + m('△ABC ≡ △A₁B₁C₁'), true)}
      <p>No angle is mentioned at all, and yet all three angles turn out equal. Three lengths determine a
      triangle completely.</p>
      <div class="keybox"><div class="klabel">This is the criterion a computer would use</div>
      It needs no reasoning about the figure — only three comparisons. Every question that supplies six
      lengths and no angles is answered by it.</div>`
    },
    {
      h: 'Rigidity',
      html: `<p>A framework of three rods joined at their ends cannot change shape; one of four rods
      can.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Framework</th><th>Rigid?</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td>triangle</td><td>yes</td><td>three sides fix it — the third criterion</td></tr>
        <tr><td>quadrilateral</td><td>no</td><td>it can be pushed into a parallelogram</td></tr>
        <tr><td>quadrilateral with one diagonal</td><td>yes</td><td>it becomes two triangles</td></tr>
      </tbody></table></div>
      <p>This is why bridges, roof trusses and pylons are built from triangles, and why a garden gate is
      braced with a diagonal.</p>
      <div class="keybox"><div class="klabel">The third criterion is an engineering fact</div>
      Every triangulated structure in the world depends on it. The theorem and the brace on a gate are
      the same statement.</div>`
    },
    {
      h: 'Using it',
      html: `<p><b>Problem.</b> In a rhombus ${m('ABCD')}, prove that the diagonal ${m('AC')} bisects the
      angles at ${m('A')} and ${m('C')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>Reason</th></tr></thead>
      <tbody>
        <tr><td class="m">AB = AD</td><td>a rhombus has four equal sides</td></tr>
        <tr><td class="m">CB = CD</td><td>the same</td></tr>
        <tr><td class="m">AC = AC</td><td>common</td></tr>
        <tr><td class="m">△ABC ≡ △ADC</td><td>third criterion</td></tr>
        <tr><td class="m">∠BAC = ∠DAC</td><td>CPCT</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The common side again</div>
      As in the first criterion, the shared side supplies the third equality without being given. Look
      for it first in every figure.</div>`
    },
    {
      h: 'Choosing a criterion',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Criterion</th></tr></thead>
      <tbody>
        <tr><td>two sides and the angle between them</td><td>the first (SAS)</td></tr>
        <tr><td>a side and two angles</td><td>the second (ASA)</td></tr>
        <tr><td>three sides</td><td>the third (SSS)</td></tr>
        <tr><td>two sides and a non-included angle</td><td>none — not enough</td></tr>
        <tr><td>three angles</td><td>none — similarity only</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Name the criterion in every proof</span>
      A proof that reaches the right conclusion without naming which criterion was used is incomplete,
      and is marked as such in both the national and the Cambridge papers.</div>`
    }
  ],
  examples: [
    {
      q: 'Two triangles have sides ' + m('5, 6, 7') + ' and ' + m('7, 5, 6') + '. Are they congruent?',
      steps: [
        ['Sort both lists: ' + m('5, 6, 7') + ' and ' + m('5, 6, 7') + '.', ''],
        ['All three pairs are equal.', ''],
        ['By the third criterion, congruent.', ''],
        ['The order in which they were written does not matter.', '']
      ],
      ans: 'Yes, by SSS'
    },
    {
      q: 'In rhombus ' + m('ABCD') + ', prove ' + m('△ABC ≡ △ADC') + '.',
      steps: [
        [m('AB = AD') + ' — all sides of a rhombus are equal.', ''],
        [m('CB = CD') + ' — the same.', ''],
        [m('AC') + ' is common.', ''],
        ['Third criterion.', '']
      ],
      ans: 'Proved by SSS'
    },
    {
      q: 'Why is a four-rod framework not rigid, and how is it braced?',
      steps: [
        ['Four sides do not determine the angles.', ''],
        ['The frame can be pushed out of square.', ''],
        ['Adding one diagonal makes two triangles.', ''],
        ['Each is rigid by SSS, so the whole frame is.', '']
      ],
      ans: 'Add a diagonal'
    }
  ],
  modelNote: 'Pin three strips of card into a triangle and four into a quadrilateral; the class pushes both, and the third criterion becomes visible in ten seconds.',
  interactive: {
    type: 'triangleAngles',
    title: 'Three sides fix the triangle',
    hint: 'Change a side and every angle changes.'
  },
  quiz: [
    { q: 'The third criterion needs:', a: ['three angles', 'three sides', 'two sides and an angle', 'a side and two angles'], c: 1, why: 'SSS.' },
    { q: 'A triangular framework is:', a: ['flexible', 'rigid', 'unstable', 'impossible'], c: 1, why: 'Three sides fix it.' },
    { q: 'A quadrilateral framework is made rigid by:', a: ['a fifth rod along a side', 'a diagonal', 'nothing', 'a shorter rod'], c: 1, why: 'It becomes two triangles.' },
    { q: 'Sides ' + m('5, 6, 7') + ' and ' + m('7, 5, 6') + ' give:', a: ['congruence', 'similarity only', 'nothing', 'an error'], c: 0, why: 'The same three lengths.' },
    { q: 'Two sides and a non-included angle give:', a: ['congruence', 'not necessarily', 'similarity', 'nothing at all'], c: 1, why: 'Two shapes may fit.' },
    { q: 'A complete proof must:', a: ['give the answer', 'name the criterion', 'include measurements', 'be short'], c: 1, why: 'That is where the mark is.' }
  ],
  practice: {
    easy: [
      ['The third criterion in letters', m('SSS')],
      ['Sides ' + m('5, 6, 7') + ' and ' + m('5, 6, 7'), 'Congruent'],
      ['Sides ' + m('5, 6, 7') + ' and ' + m('5, 6, 8'), 'Not congruent'],
      ['Is a triangle rigid?', 'Yes'],
      ['Is a quadrilateral rigid?', 'No'],
      ['How is it braced?', 'With a diagonal'],
      ['A shared side gives', 'An equality for free']
    ],
    med: [
      ['Sides ' + m('5, 6, 7') + ' and ' + m('7, 5, 6'), 'Congruent'],
      ['Which criterion for six lengths?', 'The third'],
      ['Which for a side and two angles?', 'The second'],
      ['Which for two sides and the included angle?', 'The first'],
      ['Which for three angles?', 'None'],
      ['In a rhombus, ' + m('△ABC') + ' and ' + m('△ADC'), 'Congruent by SSS'],
      ['What follows about ' + m('∠BAC') + ' and ' + m('∠DAC') + '?', 'They are equal']
    ],
    hard: [
      ['Prove that a diagonal of a rhombus bisects its angles', 'SSS, then CPCT'],
      ['Prove that the diagonals of a rhombus are perpendicular', 'Congruent triangles at the centre'],
      ['Prove that a kite has one diagonal as an axis of symmetry', 'SSS on the two triangles'],
      ['Why is a bridge built of triangles?', 'Only triangles are rigid'],
      ['Two triangles with sides ' + m('a, b, c') + ' and ' + m('c, b, a'), 'Congruent'],
      ['Can two triangles have five equal elements and not be congruent?', 'Yes — similar triangles can'],
      ['How many rods brace a quadrilateral?', 'One diagonal']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Sort both lists of sides before comparing, and name the criterion in every proof.',
  homework: [
    'Are triangles with sides ' + m('8, 9, 10') + ' and ' + m('10, 8, 9') + ' congruent?',
    'Prove that a diagonal of a rhombus bisects two of its angles.',
    'Explain why a triangle is rigid and a quadrilateral is not.',
    'State which criterion applies to each of the five cases in the table.',
    'Prove that the diagonals of a rhombus are perpendicular.'
  ]
});

/* ============================== 29 ============================== */
G7_MAT.push({
  id: 'g7-29', stream: 'mat', grade: 7, quarter: 2, lessons: '55', hours: 1,
  title: 'Practical exercises — constructions with compasses and a straightedge',
  subtitle: 'A Cambridge insert: the four constructions every later proof depends on.',
  uz: 'Matematika 7, amaliy mashqlar', uzPage: 'pp. 149–151',
  cam: 'S8 5.3', camPage: 'Stage 8, pp. 53–56', wb: 'Exercise 5.3',
  objectives: [
    'Copy a segment and an angle with compasses.',
    'Construct the perpendicular bisector of a segment.',
    'Construct the bisector of an angle.',
    'Construct a triangle from three given sides.'
  ],
  terms: [
    ['Construction', 'Yasash', 'Построение'],
    ['Compasses', 'Sirkul', 'Циркуль'],
    ['Straightedge', 'Chizg‘ich', 'Линейка'],
    ['Arc', 'Yoy', 'Дуга'],
    ['To copy', 'Ko‘chirish', 'Перенести'],
    ['Perpendicular bisector', 'O‘rta perpendikulyar', 'Серединный перпендикуляр'],
    ['Bisector', 'Bissektrisa', 'Биссектриса'],
    ['Equidistant', 'Teng uzoqlikda', 'Равноудалённый']
  ],
  timing: [[8, 'The tools'], [14, 'The four constructions'], [12, 'Building a triangle'], [6, 'Homework']],
  sections: [
    {
      h: 'The tools',
      html: `<p>A <b>construction</b> uses only two tools: compasses to draw circles and to carry lengths,
      and a straightedge to draw lines. The straightedge is <b>not</b> a ruler — no measuring is
      allowed.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Tool</th><th>May be used to</th><th>May not</th></tr></thead>
      <tbody>
        <tr><td>compasses</td><td>draw an arc, carry a length</td><td>measure in centimetres</td></tr>
        <tr><td>straightedge</td><td>join two points</td><td>measure</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Leave every arc visible</span>
      The arcs are the working. A finished construction with the arcs rubbed out cannot be marked, and
      scores less than an untidy one that shows them.</div>`
    },
    {
      h: 'The four constructions',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Construction</th><th>Method</th></tr></thead>
      <tbody>
        <tr><td>copy a segment</td><td>open the compasses to it and step it off on a ray</td></tr>
        <tr><td>copy an angle</td><td>one arc across both arms of the original and of the copy, then transfer the chord</td></tr>
        <tr><td>perpendicular bisector of ${m('AB')}</td><td>equal arcs from ${m('A')} and from ${m('B')}, both sides; join the crossings</td></tr>
        <tr><td>bisector of an angle</td><td>one arc across both arms, then equal arcs from the two points; join to the vertex</td></tr>
      </tbody></table></div>
      {{fig:perpBisector:Equal arcs from both ends give the perpendicular bisector.}}
      {{fig:bisectorConstruction:One arc across the arms, then two equal arcs, gives the bisector.}}
      <div class="keybox"><div class="klabel">All four are the same idea</div>
      Two points equidistant from the same pair of points determine a line of symmetry. Every one of the
      four constructions is that statement applied somewhere.</div>`
    },
    {
      h: 'Building a triangle',
      html: `<p><b>Given three sides ${m('a, b, c')}:</b></p>
      <ol>
        <li>draw a segment ${m('BC = a')};</li>
        <li>from ${m('B')}, an arc of radius ${m('c')};</li>
        <li>from ${m('C')}, an arc of radius ${m('b')};</li>
        <li>the crossing is ${m('A')}; join ${m('AB')} and ${m('AC')}.</li>
      </ol>
      <p>By the third criterion, every triangle built this way from the same three lengths is congruent
      to every other — so the construction gives <b>the</b> triangle, not <b>a</b> triangle.</p>
      <div class="warn"><span class="wl">The arcs must actually cross</span>
      If the two short sides together are less than the long one, the arcs miss and no triangle exists.
      The construction fails exactly when the triangle inequality fails.</div>`
    }
  ],
  examples: [
    {
      q: 'Describe the construction of the perpendicular bisector of a segment ' + m('AB') + '.',
      steps: [
        ['Open the compasses to more than half of ' + m('AB') + '.', ''],
        ['Draw arcs from ' + m('A') + ' above and below the segment.', ''],
        ['Draw the same arcs from ' + m('B') + '.', 'Same radius.'],
        ['Join the two crossings — that line is the perpendicular bisector.', '']
      ],
      ans: 'Equal arcs from both ends, joined'
    },
    {
      q: 'Construct a triangle with sides ' + m('4 cm') + ', ' + m('5 cm') + ' and ' + m('6 cm') + '.',
      steps: [
        ['Draw ' + m('BC = 6 cm') + '.', 'The longest side is easiest.'],
        ['Arc of ' + m('4 cm') + ' from ' + m('B') + '.', ''],
        ['Arc of ' + m('5 cm') + ' from ' + m('C') + '.', ''],
        ['Join the crossing to both ends.', 'The arcs cross since ' + m('4 + 5 > 6') + '.']
      ],
      ans: 'A unique triangle'
    },
    {
      q: 'Why does no triangle exist with sides ' + m('3, 4, 9') + '?',
      steps: [
        ['Draw the ' + m('9 cm') + ' side.', ''],
        ['Arcs of ' + m('3') + ' and ' + m('4') + ' from its ends.', ''],
        [m('3 + 4 = 7 < 9') + ' — the arcs fall short.', ''],
        ['They never meet, so there is no third vertex.', '']
      ],
      ans: 'The arcs do not cross'
    }
  ],
  modelNote: 'Have the class construct the same triangle from the same three lengths and then lay the sheets on top of one another; every triangle coincides, and the third criterion is confirmed.',
  interactive: {
    type: 'triangleAngles',
    title: 'Building from three sides',
    hint: 'The two arcs cross in exactly one place above the line.'
  },
  quiz: [
    { q: 'A construction uses:', a: ['a ruler and a protractor', 'compasses and a straightedge', 'a calculator', 'a set square only'], c: 1, why: 'No measuring.' },
    { q: 'Construction arcs should be:', a: ['rubbed out', 'left visible', 'drawn in pen', 'omitted'], c: 1, why: 'They are the working.' },
    { q: 'The perpendicular bisector is found by:', a: ['measuring the midpoint', 'equal arcs from both ends', 'a protractor', 'folding only'], c: 1, why: 'Two equidistant points.' },
    { q: 'A triangle from three sides is:', a: ['not always possible', 'always possible', 'possible in two ways', 'never unique'], c: 0, why: 'The inequality may fail.' },
    { q: 'Sides ' + m('3, 4, 9') + ':', a: ['one triangle', 'two triangles', 'no triangle', 'infinitely many'], c: 2, why: m('3 + 4 < 9') + '.' },
    { q: 'All triangles built from the same three sides are:', a: ['similar only', 'congruent', 'different', 'right-angled'], c: 1, why: 'The third criterion.' }
  ],
  practice: {
    easy: [
      ['Tools allowed', 'Compasses and a straightedge'],
      ['May the straightedge measure?', 'No'],
      ['Should arcs be left?', 'Yes'],
      ['Sides ' + m('4, 5, 6') + ': constructible?', 'Yes'],
      ['Sides ' + m('3, 4, 9') + ': constructible?', 'No'],
      ['Sides ' + m('5, 5, 5') + ': what triangle?', 'Equilateral'],
      ['Sides ' + m('3, 4, 5') + ': what triangle?', 'Right-angled']
    ],
    med: [
      ['Which construction gives the midpoint?', 'The perpendicular bisector'],
      ['Which gives two equal angles?', 'The angle bisector'],
      ['How many arcs for a perpendicular bisector?', 'Four — two from each end'],
      ['Construct ' + m('60°') + ': method', 'An equilateral triangle'],
      ['Construct ' + m('30°') + ': method', 'Bisect ' + m('60°')],
      ['Construct ' + m('90°') + ': method', 'A perpendicular'],
      ['Construct ' + m('45°') + ': method', 'Bisect ' + m('90°')]
    ],
    hard: [
      ['Construct ' + m('15°'), 'Bisect ' + m('30°')],
      ['Construct ' + m('75°'), m('60° + 15°')],
      ['Construct an isosceles triangle with base ' + m('5') + ' and lateral side ' + m('7'), 'Two arcs of ' + m('7')],
      ['Why must the compasses open beyond half of ' + m('AB') + '?', 'Otherwise the arcs do not meet'],
      ['Construct the centre of a given circle', 'Two chords and their perpendicular bisectors'],
      ['Construct a triangle from two sides and the included angle', 'Copy the angle, step off the sides'],
      ['Which construction cannot be done with these tools?', 'Trisecting a general angle']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Leave every arc on the page; the arcs are the answer.',
  homework: [
    'Construct the perpendicular bisector of a segment of ' + m('8 cm') + '.',
    'Construct the bisector of an angle of ' + m('80°') + '.',
    'Construct a triangle with sides ' + m('5 cm') + ', ' + m('6 cm') + ' and ' + m('7 cm') + '.',
    'Construct an angle of ' + m('30°') + ' using only compasses and a straightedge.',
    'Explain why no triangle can be constructed with sides ' + m('2, 3, 8') + '.'
  ]
});

/* ============================== 30 ============================== */
G7_MAT.push({
  id: 'g7-30', stream: 'mat', grade: 7, quarter: 2, lessons: '56–57', hours: 2,
  title: 'Control work 4, and work on the mistakes',
  subtitle: 'The congruence of triangles in one paper, and the geometry chapter closed.',
  uz: 'Matematika 7, Nazorat ishi 4', uzPage: 'pp. 118–151',
  cam: 'S8 5 review', camPage: 'Stage 8, pp. 48–56', wb: 'Control paper M4',
  objectives: [
    'Choose the right criterion from the given data.',
    'Write a proof in statement-and-reason form under time.',
    'Use the properties of isosceles triangles and the triangle inequality.',
    'Classify each lost mark and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Congruence', 'Tenglik', 'Равенство'],
    ['Criterion', 'Alomat', 'Признак'],
    ['Isosceles', 'Teng yonli', 'Равнобедренный'],
    ['Triangle inequality', 'Uchburchak tengsizligi', 'Неравенство треугольника'],
    ['Common side', 'Umumiy tomon', 'Общая сторона'],
    ['Reason', 'Asos', 'Обоснование'],
    ['Diagnosis', 'Tashxis', 'Диагностика']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [12, 'Answers'], [20, 'Diagnosis and rewrite'], [5, 'The map']],
  sections: [
    {
      h: 'The paper — 25 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Can a triangle have sides ${m('5, 8, 14')}? And ${m('6, 9, 13')}?</td><td class="m">4</td><td>L46</td></tr>
        <tr><td>2</td><td>An isosceles triangle has apex ${m('44°')}: find the base angles</td><td class="m">4</td><td>L49–50</td></tr>
        <tr><td>3</td><td>${m('AB = AD')}, ${m('∠BAC = ∠DAC')}: prove ${m('△ABC ≡ △ADC')}</td><td class="m">6</td><td>L47–48</td></tr>
        <tr><td>4</td><td>Name the criterion for: three sides; a side and two angles; two sides and the angle between</td><td class="m">3</td><td>L47–54</td></tr>
        <tr><td>5</td><td>In a rhombus, prove that a diagonal bisects two angles</td><td class="m">5</td><td>L53–54</td></tr>
        <tr><td>6</td><td>Describe the construction of an angle bisector</td><td class="m">3</td><td>L55</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks actually go</div>
      Q1 carries one mark for checking the longest side only; Q3 two for the common side and the named
      criterion; Q5 two for stating that all four sides of a rhombus are equal; Q6 one for “leave the
      arcs”.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>only two sides checked</td><td class="m">5 + 14 > 8 ✓</td><td>check the longest: ${m('5 + 8 < 14')}</td></tr>
        <tr><td>apex used as a base angle</td><td class="m">44°, 44°, 92°</td><td class="m">44°, 68°, 68°</td></tr>
        <tr><td>common side omitted</td><td>two facts only</td><td class="m">AC = AC</td></tr>
        <tr><td>criterion not named</td><td>“so they are congruent”</td><td>“by the first criterion”</td></tr>
        <tr><td>rhombus sides assumed unequal</td><td>“given ${m('AB = AD')}”</td><td>state that all four are equal</td></tr>
        <tr><td>reasons missing</td><td>a list of true statements</td><td>a reason beside each</td></tr>
        <tr><td>arcs rubbed out</td><td>a clean bisector</td><td>leave the construction visible</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'Chapter IV as one map',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Block</th><th>The sentence</th></tr></thead>
      <tbody>
        <tr><td>triangles</td><td>classified by sides and by angles, independently</td></tr>
        <tr><td>the triangle inequality</td><td>the longest side is less than the sum of the other two</td></tr>
        <tr><td>the first criterion</td><td>two sides and the angle between them</td></tr>
        <tr><td>isosceles triangles</td><td>equal sides ⟺ equal base angles</td></tr>
        <tr><td>the second criterion</td><td>a side and two angles</td></tr>
        <tr><td>the third criterion</td><td>three sides — and rigidity</td></tr>
        <tr><td>constructions</td><td>compasses and a straightedge, arcs left visible</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Looking forward</div>
      The rest of Quarter II is algebra: expressions, powers, monomials and polynomials. Geometry returns
      in Quarter III with parallel lines and the angle sum of a triangle.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q1: sides ' + m('5, 8, 14') + ' and ' + m('6, 9, 13') + '.',
      steps: [
        ['Longest of the first is ' + m('14') + '.', ''],
        [m('5 + 8 = 13 < 14') + ' — no triangle.', ''],
        ['Longest of the second is ' + m('13') + '.', ''],
        [m('6 + 9 = 15 > 13') + ' — yes.', '']
      ],
      ans: 'No; yes'
    },
    {
      q: 'Model answer, Q3: ' + m('AB = AD') + ', ' + m('∠BAC = ∠DAC') + '.',
      steps: [
        [m('AB = AD') + ' — given.', ''],
        [m('∠BAC = ∠DAC') + ' — given, and it is the included angle.', ''],
        [m('AC = AC') + ' — common side.', 'The mark most often missed.'],
        [m('△ABC ≡ △ADC') + ' by the first criterion.', '']
      ],
      ans: 'Proved by SAS'
    },
    {
      q: 'Model answer, Q5: a diagonal of a rhombus bisects two angles.',
      steps: [
        ['All four sides of a rhombus are equal: ' + m('AB = AD') + ' and ' + m('CB = CD') + '.', ''],
        [m('AC') + ' is common.', ''],
        [m('△ABC ≡ △ADC') + ' by the third criterion.', ''],
        ['CPCT gives ' + m('∠BAC = ∠DAC') + ' and ' + m('∠BCA = ∠DCA') + '.', '']
      ],
      ans: 'Proved by SSS'
    }
  ],
  modelNote: 'Return Q3 with the reasons column blank and have the class fill it in; they discover that the reasons carry most of the marks.',
  interactive: {
    type: 'quiz',
    title: 'Chapter IV in twelve questions',
    hint: 'Two from each block.',
    items: [
      { q: 'A triangle with two equal sides is:', a: ['scalene', 'isosceles', 'equilateral only', 'right'], c: 1, why: 'By sides.' },
      { q: 'Can ' + m('2, 3, 6') + ' be a triangle?', a: ['yes', 'no', 'sometimes', 'only if right'], c: 1, why: m('2 + 3 < 6') + '.' },
      { q: 'Congruent triangles have how many equal pairs?', a: [m('3'), m('4'), m('6'), m('2')], c: 2, why: 'Three sides, three angles.' },
      { q: 'The first criterion needs:', a: ['three sides', 'two sides and the included angle', 'a side and two angles', 'three angles'], c: 1, why: 'SAS.' },
      { q: 'Base angles of an isosceles triangle are:', a: ['unequal', 'equal', 'right', 'obtuse'], c: 1, why: 'Opposite the equal sides.' },
      { q: 'Apex ' + m('40°') + ' gives base angles:', a: [m('40°'), m('70°'), m('100°'), m('140°')], c: 1, why: m(f('140', '2')) + '.' },
      { q: 'The second criterion needs:', a: ['three sides', 'a side and two angles', 'three angles', 'two sides'], c: 1, why: 'ASA.' },
      { q: 'The third criterion needs:', a: ['three sides', 'three angles', 'two sides', 'a side and an angle'], c: 0, why: 'SSS.' },
      { q: 'A triangular framework is:', a: ['flexible', 'rigid', 'unstable', 'impossible'], c: 1, why: 'Three sides fix it.' },
      { q: 'A common side in a figure gives:', a: ['nothing', 'an equality', 'an angle', 'a contradiction'], c: 1, why: m('AC = AC') + '.' },
      { q: 'Three equal angles give:', a: ['congruence', 'similarity only', 'nothing', 'rigidity'], c: 1, why: 'Size is not fixed.' },
      { q: 'Construction arcs should be:', a: ['rubbed out', 'left visible', 'in pen', 'omitted'], c: 1, why: 'They are the working.' }
    ]
  },
  quiz: [
    { q: 'For Q1 it is enough to check:', a: ['all three sums', 'the longest side', 'the shortest side', 'the perimeter'], c: 1, why: 'The others follow.' },
    { q: 'Q2 needs the angles to add to:', a: [m('90°'), m('180°'), m('270°'), m('360°')], c: 1, why: 'Every triangle.' },
    { q: 'The missing fact in Q3 is:', a: ['an angle', 'the common side', 'a third side', 'nothing'], c: 1, why: m('AC = AC') + '.' },
    { q: 'Q5 uses:', a: ['SAS', 'ASA', 'SSS', 'none'], c: 2, why: 'All four sides equal.' },
    { q: 'Q6 must mention:', a: ['a protractor', 'leaving the arcs', 'measuring', 'a ruler'], c: 1, why: 'The arcs are the working.' },
    { q: 'Work on the mistakes means:', a: ['fix the wrong line', 'rewrite the solution', 'copy the answer', 'skip it'], c: 1, why: 'The whole solution, again.' }
  ],
  practice: {
    easy: [
      ['Can ' + m('5, 8, 14') + ' be a triangle?', 'No'],
      ['Can ' + m('6, 9, 13') + ' be a triangle?', 'Yes'],
      ['Apex ' + m('44°') + ': base angles', m('68°')],
      ['Three sides: which criterion?', 'The third'],
      ['A side and two angles: which?', 'The second'],
      ['Two sides and the included angle: which?', 'The first'],
      ['Three angles: which?', 'None']
    ],
    med: [
      [m('AB = AD, ∠BAC = ∠DAC') + ': the third fact', m('AC') + ' common'],
      ['That proof uses', 'The first criterion'],
      ['A rhombus diagonal proof uses', 'The third criterion'],
      ['Base angle ' + m('68°') + ': apex', m('44°')],
      ['An isosceles triangle with perimeter ' + m('28') + ' and base ' + m('8'), 'Sides ' + m('10, 10, 8')],
      ['Sides ' + m('7, 7, 7') + ': angles', m('60°') + ' each'],
      ['Which framework is rigid?', 'The triangle']
    ],
    hard: [
      ['Range of ' + m('c') + ' with ' + m('a = 6, b = 11'), m('5 < c < 17')],
      ['Integer values of ' + m('c') + ' there', m('6') + ' to ' + m('16')],
      ['An isosceles triangle with an exterior base angle of ' + m('115°') + ': the apex', m('50°')],
      ['Prove the base angles equal, using the bisector from the apex', 'SAS then CPCT'],
      ['Prove the diagonals of a rhombus are perpendicular', 'SSS then equal adjacent angles'],
      ['Two triangles with ' + m('AB = DE, ∠A = ∠D, ∠B = ∠E'), 'Congruent by ASA'],
      ['Two triangles with ' + m('AB = DE, BC = EF, ∠A = ∠D'), 'Not necessarily congruent']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite in full every proof that lost a mark, with a reason beside every statement.',
  homework: [
    'Can a triangle have sides ' + m('4, 7, 12') + '? And ' + m('5, 7, 11') + '?',
    'An isosceles triangle has apex angle ' + m('52°') + '. Find the base angles.',
    'Prove that a diagonal of a rhombus bisects two of its angles.',
    'Name the criterion that applies to each of the three standard sets of data.',
    'Describe the construction of the bisector of an angle.'
  ]
});

/* ============================== 31 ============================== */
G7_MAT.push({
  id: 'g7-31', stream: 'mat', grade: 7, quarter: 2, lessons: '58', hours: 1,
  title: 'Algebraic expressions',
  subtitle: 'Letters standing for numbers — and the vocabulary the rest of the year needs.',
  uz: 'Matematika 7, §24', uzPage: 'pp. 152–155',
  cam: 'S8 2.1', camPage: 'Stage 8, pp. 12–18', wb: 'Exercise 2.1',
  objectives: [
    'Write a worded statement as an algebraic expression.',
    'Name the terms, factors and coefficients of an expression.',
    'Evaluate an expression for given values of the letters.',
    'Distinguish an expression from an equation.'
  ],
  terms: [
    ['Algebraic expression', 'Algebraik ifoda', 'Алгебраическое выражение'],
    ['Variable', 'O‘zgaruvchi', 'Переменная'],
    ['Term', 'Had', 'Член'],
    ['Coefficient', 'Koeffitsiyent', 'Коэффициент'],
    ['Constant', 'O‘zgarmas', 'Постоянная'],
    ['To evaluate', 'Qiymatini topmoq', 'Вычислить значение'],
    ['To substitute', 'O‘rniga qo‘ymoq', 'Подставить'],
    ['Equation', 'Tenglama', 'Уравнение']
  ],
  timing: [[10, 'Words into symbols'], [12, 'The parts of an expression'], [12, 'Evaluating'], [6, 'Homework']],
  sections: [
    {
      h: 'Words into symbols',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Words</th><th>Expression</th></tr></thead>
      <tbody>
        <tr><td>five more than ${m('x')}</td><td class="m">x + 5</td></tr>
        <tr><td>five less than ${m('x')}</td><td class="m">x − 5</td></tr>
        <tr><td>five times ${m('x')}</td><td class="m">5x</td></tr>
        <tr><td>${m('x')} divided by five</td><td class="m">${f('x', '5')}</td></tr>
        <tr><td>the square of ${m('x')}, less three</td><td class="m">x² − 3</td></tr>
        <tr><td>twice the sum of ${m('x')} and ${m('y')}</td><td class="m">2(x + y)</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">“Twice the sum” needs brackets</span>
      ${m('2(x + y)')} and ${m('2x + y')} are different expressions. The bracket is what makes the
      doubling apply to the whole sum.</div>`
    },
    {
      h: 'The parts of an expression',
      html: `<p>An expression is built from <b>terms</b> separated by ${m('+')} and ${m('−')}. Each term is
      a product of a number and some letters.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Terms</th><th>Coefficients</th></tr></thead>
      <tbody>
        <tr><td class="m">3x + 5y − 7</td><td class="m">3x, 5y, −7</td><td class="m">3, 5</td></tr>
        <tr><td class="m">−4a² + a</td><td class="m">−4a², a</td><td class="m">−4, 1</td></tr>
        <tr><td class="m">x − ${f('y', '2')}</td><td class="m">x, −${f('y', '2')}</td><td class="m">1, −${f('1', '2')}</td></tr>
      </tbody></table></div>
      <p>A term with no letter is a <b>constant</b>. A coefficient of ${m('1')} or ${m('−1')} is not
      written: ${m('a')} means ${m('1a')} and ${m('−a')} means ${m('−1a')}.</p>
      <div class="warn"><span class="wl">The sign belongs to the term</span>
      In ${m('3x − 7y')} the second term is ${m('−7y')}, with coefficient ${m('−7')}. Reading the
      coefficient as ${m('7')} loses the sign in every later calculation.</div>`
    },
    {
      h: 'Evaluating',
      html: `<p>To <b>evaluate</b> an expression, substitute the given numbers and compute, respecting the
      order of operations.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th class="m">x = 3, y = −2</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td class="m">2x + y</td><td class="m">6 + (−2)</td><td class="m">4</td></tr>
        <tr><td class="m">x² − y</td><td class="m">9 − (−2)</td><td class="m">11</td></tr>
        <tr><td class="m">xy</td><td class="m">3 × (−2)</td><td class="m">−6</td></tr>
        <tr><td class="m">2(x + y)</td><td class="m">2(1)</td><td class="m">2</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Put negative values in brackets</div>
      Writing ${m('x² − y')} as ${m('9 − −2')} invites an error; ${m('9 − (−2)')} does not. The brackets
      cost nothing and prevent the commonest slip in substitution.</div>`
    }
  ],
  examples: [
    {
      q: 'Write as expressions: seven more than twice ' + m('x') + '; the square of the sum of ' + m('a') + ' and ' + m('b') + '.',
      steps: [
        ['Twice ' + m('x') + ' is ' + m('2x') + '.', ''],
        ['Seven more: ' + m('2x + 7') + '.', ''],
        ['The sum is ' + m('a + b') + '.', ''],
        ['Its square: ' + m('(a + b)²') + '.', 'Brackets are essential.']
      ],
      ans: m('2x + 7') + ' and ' + m('(a + b)²')
    },
    {
      q: 'Name the terms and coefficients of ' + m('3x + 5y − 7') + '.',
      steps: [
        ['Terms are separated by ' + m('+') + ' and ' + m('−') + '.', ''],
        [m('3x') + ', ' + m('5y') + ', ' + m('−7') + '.', ''],
        ['Coefficients: ' + m('3') + ' and ' + m('5') + '.', ''],
        [m('−7') + ' is a constant term.', '']
      ],
      ans: 'Three terms; coefficients ' + m('3') + ' and ' + m('5')
    },
    {
      q: 'Evaluate ' + m('x² − y') + ' and ' + m('2(x + y)') + ' at ' + m('x = 3') + ', ' + m('y = −2') + '.',
      steps: [
        [m('3² − (−2) = 9 + 2'), 'Brackets round the negative.'],
        [m('= 11'), ''],
        [m('2(3 + (−2)) = 2(1)'), ''],
        [m('= 2'), '']
      ],
      ans: m('11') + ' and ' + m('2')
    }
  ],
  modelNote: 'Read six phrases aloud and have the class write the expressions before any of them is discussed; the errors that appear are exactly the ones to teach.',
  interactive: {
    type: 'substitute',
    title: 'Substituting values',
    hint: 'Put every negative value in brackets.'
  },
  quiz: [
    { q: '“Five less than ' + m('x') + '” is:', a: [m('5 − x'), m('x − 5'), m('5x'), m(f('x', '5'))], c: 1, why: 'Start from ' + m('x') + '.' },
    { q: '“Twice the sum of ' + m('x') + ' and ' + m('y') + '” is:', a: [m('2x + y'), m('2(x + y)'), m('x + 2y'), m('2xy')], c: 1, why: 'The bracket is needed.' },
    { q: 'How many terms in ' + m('3x + 5y − 7') + '?', a: [m('1'), m('2'), m('3'), m('4')], c: 2, why: 'Separated by ' + m('+') + ' and ' + m('−') + '.' },
    { q: 'The coefficient of ' + m('y') + ' in ' + m('3x − 7y') + ':', a: [m('7'), m('−7'), m('3'), m('1')], c: 1, why: 'The sign belongs to the term.' },
    { q: m('x² − y') + ' at ' + m('x = 3, y = −2') + ':', a: [m('7'), m('11'), m('−11'), m('5')], c: 1, why: m('9 + 2') + '.' },
    { q: 'A term with no letter is:', a: ['a coefficient', 'a constant', 'a variable', 'an equation'], c: 1, why: 'It never changes.' }
  ],
  practice: {
    easy: [
      ['Five more than ' + m('x'), m('x + 5')],
      ['Five less than ' + m('x'), m('x − 5')],
      ['Five times ' + m('x'), m('5x')],
      [m('x') + ' divided by five', m(f('x', '5'))],
      ['Terms in ' + m('3x + 5y − 7'), m('3')],
      ['Coefficient of ' + m('x') + ' in ' + m('3x'), m('3')],
      ['Coefficient of ' + m('a') + ' in ' + m('−a'), m('−1')]
    ],
    med: [
      ['Twice the sum of ' + m('x') + ' and ' + m('y'), m('2(x + y)')],
      ['Seven more than twice ' + m('x'), m('2x + 7')],
      ['The square of the sum of ' + m('a') + ' and ' + m('b'), m('(a + b)²')],
      ['Coefficient of ' + m('y') + ' in ' + m('3x − 7y'), m('−7')],
      [m('2x + y') + ' at ' + m('x = 3, y = −2'), m('4')],
      [m('x² − y') + ' at the same', m('11')],
      [m('xy') + ' at the same', m('−6')]
    ],
    hard: [
      [m('x² + 2xy + y²') + ' at ' + m('x = 3, y = −2'), m('1')],
      [m(f('x + y', 'x − y')) + ' at ' + m('x = 3, y = −2'), m(f('1', '5'))],
      [m('−a²') + ' at ' + m('a = −4'), m('−16')],
      [m('(−a)²') + ' at ' + m('a = −4'), m('16')],
      ['Write: the sum of the squares of ' + m('a') + ' and ' + m('b'), m('a² + b²')],
      ['Write: the square of the sum of ' + m('a') + ' and ' + m('b'), m('(a + b)²')],
      ['Are they the same?', 'No — try ' + m('a = b = 1')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Put every substituted negative value in brackets.',
  homework: [
    'Write as expressions: four less than three times ' + m('x') + '; half the sum of ' + m('a') + ' and ' + m('b') + '.',
    'Name the terms and coefficients of ' + m('5a − 2b + 9') + '.',
    'Evaluate ' + m('3x − 2y') + ' at ' + m('x = −1') + ', ' + m('y = 4') + '.',
    'Evaluate ' + m('(x + y)²') + ' at the same values.',
    'Explain the difference between ' + m('a² + b²') + ' and ' + m('(a + b)²') + '.'
  ]
});
