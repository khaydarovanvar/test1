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
