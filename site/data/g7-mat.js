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

/* ============================== 32 ============================== */
G7_MAT.push({
  id: 'g7-32', stream: 'mat', grade: 7, quarter: 2, lessons: '59', hours: 1,
  title: 'Rules for removing brackets, and the coefficient',
  subtitle: 'A plus leaves the signs alone; a minus changes every one of them.',
  uz: 'Matematika 7, §25', uzPage: 'pp. 156–159',
  cam: 'S8 2.2', camPage: 'Stage 8, pp. 16–20', wb: 'Exercise 2.2',
  objectives: [
    'Remove brackets preceded by a plus and by a minus sign.',
    'Multiply a bracket by a number using the distributive law.',
    'Identify and use the coefficient of a term.',
    'Simplify an expression by removing brackets and collecting terms.'
  ],
  terms: [
    ['Bracket', 'Qavs', 'Скобка'],
    ['To remove brackets', 'Qavslarni ochish', 'Раскрыть скобки'],
    ['Distributive law', 'Taqsimot qonuni', 'Распределительный закон'],
    ['Coefficient', 'Koeffitsiyent', 'Коэффициент'],
    ['Like terms', 'O‘xshash hadlar', 'Подобные члены'],
    ['To simplify', 'Soddalashtirish', 'Упростить'],
    ['Sign change', 'Ishora o‘zgarishi', 'Изменение знака'],
    ['Nested brackets', 'Ichma-ich qavslar', 'Вложенные скобки']
  ],
  timing: [[10, 'Plus and minus before a bracket'], [12, 'A number before a bracket'], [12, 'The coefficient'], [6, 'Homework']],
  sections: [
    {
      h: 'Plus and minus before a bracket',
      html: `${eq(m('a + (b − c) = a + b − c') + '     ' + m('a − (b − c) = a − b + c'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Brackets removed</th></tr></thead>
      <tbody>
        <tr><td class="m">5 + (x − 3)</td><td class="m">5 + x − 3</td></tr>
        <tr><td class="m">5 − (x − 3)</td><td class="m">5 − x + 3</td></tr>
        <tr><td class="m">−(2a − b + 4)</td><td class="m">−2a + b − 4</td></tr>
        <tr><td class="m">7 − (−x + 2)</td><td class="m">7 + x − 2</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A minus changes <b>every</b> sign inside</span>
      ${m('−(2a − b + 4) = −2a + b − 4')} — all three. Changing only the first is the error this lesson
      exists to prevent, and it recurs all year.</div>`
    },
    {
      h: 'A number before a bracket',
      html: `${eq(m('k(a + b) = ka + kb'), true)}
      <p>Every term inside is multiplied — including the last one, and including the signs.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Expanded</th></tr></thead>
      <tbody>
        <tr><td class="m">3(x + 4)</td><td class="m">3x + 12</td></tr>
        <tr><td class="m">3(x − 4)</td><td class="m">3x − 12</td></tr>
        <tr><td class="m">−3(x − 4)</td><td class="m">−3x + 12</td></tr>
        <tr><td class="m">−2(3a − b + 5)</td><td class="m">−6a + 2b − 10</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">${m('−(…)')} is ${m('−1(…)')}</div>
      The two rules of this lesson are one rule: a minus in front is multiplication by ${m('−1')}, and
      the distributive law does the rest.</div>`
    },
    {
      h: 'The coefficient',
      html: `<p>The <b>coefficient</b> is the numerical factor of a term, taken with its sign.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Term</th><th>Coefficient</th><th>Letters</th></tr></thead>
      <tbody>
        <tr><td class="m">7ab</td><td class="m">7</td><td class="m">ab</td></tr>
        <tr><td class="m">−3x²y</td><td class="m">−3</td><td class="m">x²y</td></tr>
        <tr><td class="m">a</td><td class="m">1</td><td class="m">a</td></tr>
        <tr><td class="m">−b</td><td class="m">−1</td><td class="m">b</td></tr>
        <tr><td class="m">${f('2x', '3')}</td><td class="m">${f('2', '3')}</td><td class="m">x</td></tr>
      </tbody></table></div>
      <p>Terms with the <b>same letters to the same powers</b> are <b>like terms</b>, and only like terms
      can be collected: ${m('3x + 5x = 8x')}, but ${m('3x + 5y')} cannot be simplified.</p>
      <div class="warn"><span class="wl">${m('3x')} and ${m('3x²')} are not like terms</span>
      The powers must match too. Adding them gives ${m('3x + 3x²')}, which is already as simple as it
      gets.</div>`
    }
  ],
  examples: [
    {
      q: 'Remove the brackets: ' + m('5 − (x − 3)') + ' and ' + m('−(2a − b + 4)') + '.',
      steps: [
        ['A minus before the bracket changes every sign.', ''],
        [m('5 − x + 3 = 8 − x'), ''],
        [m('−2a + b − 4'), 'All three signs.'],
        ['Nothing further to collect in the second.', '']
      ],
      ans: m('8 − x') + ' and ' + m('−2a + b − 4')
    },
    {
      q: 'Expand ' + m('−2(3a − b + 5)') + '.',
      steps: [
        ['Multiply every term by ' + m('−2') + '.', ''],
        [m('−2 × 3a = −6a'), ''],
        [m('−2 × (−b) = +2b'), ''],
        [m('−2 × 5 = −10') + ', giving ' + m('−6a + 2b − 10') + '.', '']
      ],
      ans: m('−6a + 2b − 10')
    },
    {
      q: 'Simplify ' + m('4(x + 2) − 3(x − 1)') + '.',
      steps: [
        [m('4x + 8'), ''],
        [m('−3x + 3'), 'Both signs change.'],
        [m('4x + 8 − 3x + 3'), ''],
        [m('= x + 11'), '']
      ],
      ans: m('x + 11')
    }
  ],
  modelNote: 'Write −(a − b) on the board and ask for its value at a = 5, b = 2 before removing the brackets; the numerical check settles the sign rule.',
  interactive: {
    type: 'substitute',
    title: 'Removing brackets',
    hint: 'Check your answer numerically.'
  },
  quiz: [
    { q: m('5 − (x − 3)') + ' equals:', a: [m('5 − x − 3'), m('5 − x + 3'), m('5 + x − 3'), m('5 + x + 3')], c: 1, why: 'Every sign changes.' },
    { q: m('−(2a − b + 4)') + ' equals:', a: [m('−2a − b + 4'), m('−2a + b − 4'), m('2a − b + 4'), m('−2a + b + 4')], c: 1, why: 'All three signs.' },
    { q: m('−3(x − 4)') + ' equals:', a: [m('−3x − 12'), m('−3x + 12'), m('3x − 12'), m('3x + 12')], c: 1, why: m('−3 × (−4) = +12') + '.' },
    { q: 'The coefficient of ' + m('−3x²y') + ':', a: [m('3'), m('−3'), m('x²y'), m('1')], c: 1, why: 'With its sign.' },
    { q: 'The coefficient of ' + m('−b') + ':', a: [m('0'), m('1'), m('−1'), m('b')], c: 2, why: 'It is ' + m('−1b') + '.' },
    { q: 'Are ' + m('3x') + ' and ' + m('3x²') + ' like terms?', a: ['yes', 'no', 'sometimes', 'only if ' + m('x = 1')], c: 1, why: 'The powers differ.' }
  ],
  practice: {
    easy: [
      [m('5 + (x − 3)'), m('x + 2')],
      [m('5 − (x − 3)'), m('8 − x')],
      [m('3(x + 4)'), m('3x + 12')],
      [m('3(x − 4)'), m('3x − 12')],
      [m('−3(x − 4)'), m('−3x + 12')],
      ['Coefficient of ' + m('7ab'), m('7')],
      ['Coefficient of ' + m('−b'), m('−1')]
    ],
    med: [
      [m('−(2a − b + 4)'), m('−2a + b − 4')],
      [m('−2(3a − b + 5)'), m('−6a + 2b − 10')],
      [m('7 − (−x + 2)'), m('x + 5')],
      [m('4(x + 2) − 3(x − 1)'), m('x + 11')],
      [m('2(a − 3) + 5(a + 1)'), m('7a − 1')],
      ['Collect ' + m('3x + 5x − 2x'), m('6x')],
      ['Collect ' + m('3x + 5y'), 'Already simplest']
    ],
    hard: [
      [m('3(2x − 1) − 2(3x − 4)'), m('5')],
      [m('−[2 − (3 − x)]'), m('1 − x')],
      [m('5 − 2(x − 3(x + 1))'), m('4x + 11')],
      [m('a − (b − (c − d))'), m('a − b + c − d')],
      ['Simplify ' + m('4(x + y) − 4(x − y)'), m('8y')],
      ['Evaluate ' + m('−(a − b)') + ' at ' + m('a = 5, b = 2'), m('−3')],
      ['Coefficient of ' + m(f('3x', '4')), m(f('3', '4'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Check every expansion by substituting one easy pair of values.',
  homework: [
    'Remove the brackets: ' + m('8 − (y − 5)') + ' and ' + m('−(3m − 2n + 1)') + '.',
    'Expand ' + m('−4(2a − 3b + 1)') + '.',
    'Simplify ' + m('5(x − 2) − 2(x + 3)') + '.',
    'Give the coefficients in ' + m('−5a + b − ' + f('c', '2')) + '.',
    'Simplify ' + m('3(a + b) − 3(a − b)') + '.'
  ]
});

/* ============================== 33 ============================== */
G7_MAT.push({
  id: 'g7-33', stream: 'mat', grade: 7, quarter: 2, lessons: '60', hours: 1,
  title: 'Properties of the arithmetic operations',
  subtitle: 'The five laws that make algebra possible, written for letters instead of numbers.',
  uz: 'Matematika 7, §26', uzPage: 'pp. 160–163',
  cam: 'S8 2.1', camPage: 'Stage 8, pp. 12–18', wb: 'Exercise 2.1',
  objectives: [
    'State the commutative, associative and distributive laws.',
    'Use them to reorder and regroup a calculation.',
    'Recognise that subtraction and division are not commutative.',
    'Use the laws to simplify an expression quickly.'
  ],
  terms: [
    ['Commutative law', 'O‘rin almashtirish qonuni', 'Переместительный закон'],
    ['Associative law', 'Guruhlash qonuni', 'Сочетательный закон'],
    ['Distributive law', 'Taqsimot qonuni', 'Распределительный закон'],
    ['Identity element', 'Neytral element', 'Нейтральный элемент'],
    ['To reorder', 'Tartibini o‘zgartirish', 'Переставить'],
    ['To regroup', 'Guruhlarni o‘zgartirish', 'Перегруппировать'],
    ['Not commutative', 'Kommutativ emas', 'Не коммутативно'],
    ['Counter-example', 'Qarama-qarshi misol', 'Контрпример']
  ],
  timing: [[10, 'The five laws'], [12, 'What is not a law'], [12, 'Using them'], [6, 'Homework']],
  sections: [
    {
      h: 'The five laws',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Law</th><th>Statement</th><th>Says</th></tr></thead>
      <tbody>
        <tr><td>commutative (+)</td><td class="m">a + b = b + a</td><td>order does not matter</td></tr>
        <tr><td>commutative (×)</td><td class="m">ab = ba</td><td>order does not matter</td></tr>
        <tr><td>associative (+)</td><td class="m">(a + b) + c = a + (b + c)</td><td>grouping does not matter</td></tr>
        <tr><td>associative (×)</td><td class="m">(ab)c = a(bc)</td><td>grouping does not matter</td></tr>
        <tr><td>distributive</td><td class="m">a(b + c) = ab + ac</td><td>the two operations connect</td></tr>
      </tbody></table></div>
      <p>Two more, about the special numbers ${m('0')} and ${m('1')}:</p>
      ${eq(m('a + 0 = a') + '     ' + m('a × 1 = a') + '     ' + m('a × 0 = 0'), true)}
      <div class="keybox"><div class="klabel">The distributive law is the only one that mixes ${m('+')} and ${m('×')}</div>
      Everything in algebra that turns a sum into a product, or a product into a sum, is that one law —
      expanding brackets, factorising, and collecting like terms alike.</div>`
    },
    {
      h: 'What is not a law',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Claim</th><th>True?</th><th>Counter-example</th></tr></thead>
      <tbody>
        <tr><td class="m">a − b = b − a</td><td>no</td><td class="m">5 − 3 ≠ 3 − 5</td></tr>
        <tr><td class="m">a ÷ b = b ÷ a</td><td>no</td><td class="m">6 ÷ 2 ≠ 2 ÷ 6</td></tr>
        <tr><td class="m">(a − b) − c = a − (b − c)</td><td>no</td><td class="m">(9 − 4) − 2 ≠ 9 − (4 − 2)</td></tr>
        <tr><td class="m">a + (b × c) = (a + b)(a + c)</td><td>no</td><td class="m">2 + 3 × 4 ≠ 5 × 6</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">One counter-example is a complete disproof</span>
      A rule that fails once is not a rule. Testing a suspicious claim with small numbers is the fastest
      check in all of algebra.</div>`
    },
    {
      h: 'Using them',
      html: `<p>The laws are used to make a calculation easier, not to make it longer.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Calculation</th><th>Law used</th><th>Easy route</th></tr></thead>
      <tbody>
        <tr><td class="m">25 × 17 × 4</td><td>commutative and associative</td><td class="m">(25 × 4) × 17 = 1700</td></tr>
        <tr><td class="m">7 × 98</td><td>distributive</td><td class="m">7(100 − 2) = 686</td></tr>
        <tr><td class="m">36 + 47 + 64</td><td>commutative</td><td class="m">(36 + 64) + 47 = 147</td></tr>
        <tr><td class="m">4a + 7b − a + 2b</td><td>commutative</td><td class="m">3a + 9b</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Look for pairs that make round numbers</div>
      ${m('25')} with ${m('4')}, ${m('36')} with ${m('64')}, ${m('98')} with ${m('100')}. Spotting them
      before starting turns a hard calculation into an easy one.</div>`
    }
  ],
  examples: [
    {
      q: 'Compute ' + m('25 × 17 × 4') + ' in the easiest way.',
      steps: [
        ['Reorder: ' + m('25 × 4 × 17') + '.', 'Commutative.'],
        ['Regroup: ' + m('(25 × 4) × 17') + '.', 'Associative.'],
        [m('= 100 × 17'), ''],
        [m('= 1700'), '']
      ],
      ans: m('1700')
    },
    {
      q: 'Compute ' + m('7 × 98') + ' without a calculator.',
      steps: [
        [m('98 = 100 − 2'), ''],
        [m('7(100 − 2)'), 'Distributive.'],
        [m('= 700 − 14'), ''],
        [m('= 686'), '']
      ],
      ans: m('686')
    },
    {
      q: 'Show that subtraction is not associative.',
      steps: [
        ['Test ' + m('(9 − 4) − 2') + ' and ' + m('9 − (4 − 2)') + '.', ''],
        [m('5 − 2 = 3'), ''],
        [m('9 − 2 = 7'), ''],
        [m('3 ≠ 7') + ' — one counter-example is enough.', '']
      ],
      ans: 'Disproved'
    }
  ],
  modelNote: 'Ask for 25 × 17 × 4 with no calculator; the class that reorders finishes in five seconds and the rest do not.',
  interactive: {
    type: 'areaModel',
    title: 'The distributive law as an area',
    hint: 'One rectangle, cut into two.'
  },
  quiz: [
    { q: m('a + b = b + a') + ' is:', a: ['associative', 'commutative', 'distributive', 'not a law'], c: 1, why: 'Order.' },
    { q: m('(ab)c = a(bc)') + ' is:', a: ['associative', 'commutative', 'distributive', 'not a law'], c: 0, why: 'Grouping.' },
    { q: m('a(b + c) = ab + ac') + ' is:', a: ['associative', 'commutative', 'distributive', 'not a law'], c: 2, why: 'It mixes the two operations.' },
    { q: 'Is subtraction commutative?', a: ['yes', 'no', 'sometimes', 'only for positives'], c: 1, why: m('5 − 3 ≠ 3 − 5') + '.' },
    { q: 'The easiest route to ' + m('25 × 17 × 4') + ':', a: ['left to right', 'pair ' + m('25') + ' with ' + m('4'), 'pair ' + m('17') + ' with ' + m('4'), 'a calculator'], c: 1, why: m('100 × 17') + '.' },
    { q: 'One counter-example:', a: ['weakens a rule', 'disproves it', 'proves it', 'means nothing'], c: 1, why: '“For all” fails.' }
  ],
  practice: {
    easy: [
      ['Name the law: ' + m('a + b = b + a'), 'Commutative'],
      ['Name the law: ' + m('(ab)c = a(bc)'), 'Associative'],
      ['Name the law: ' + m('a(b + c) = ab + ac'), 'Distributive'],
      ['Is ' + m('a − b = b − a') + '?', 'No'],
      ['Is ' + m('a ÷ b = b ÷ a') + '?', 'No'],
      [m('a + 0'), m('a')],
      [m('a × 1'), m('a')]
    ],
    med: [
      [m('25 × 17 × 4'), m('1700')],
      [m('7 × 98'), m('686')],
      [m('36 + 47 + 64'), m('147')],
      [m('8 × 125 × 6'), m('6000')],
      [m('12 × 101'), m('1212')],
      ['Simplify ' + m('4a + 7b − a + 2b'), m('3a + 9b')],
      ['Simplify ' + m('5x − 2y + 3y − x'), m('4x + y')]
    ],
    hard: [
      [m('99 × 99 + 99'), m('9900')],
      [m('37 × 25 × 4'), m('3700')],
      [m('16 × 47 + 16 × 53'), m('1600')],
      ['Show that ' + m('(a − b) − c ≠ a − (b − c)'), m('(9−4)−2 = 3') + ', ' + m('9−(4−2) = 7')],
      ['Simplify ' + m('2(3a − b) − 3(a − 2b)'), m('3a + 4b')],
      [m('101 × 99'), m('9999')],
      ['Why is the distributive law special?', 'It is the only one linking ' + m('+') + ' and ' + m('×')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Look for the easy pairing before computing anything.',
  homework: [
    'Compute ' + m('4 × 37 × 25') + ' using the laws.',
    'Compute ' + m('9 × 102') + ' using the distributive law.',
    'Compute ' + m('58 + 79 + 42') + ' by reordering.',
    'Show with an example that division is not commutative.',
    'Simplify ' + m('6a − 2b + 3b − 4a') + '.'
  ]
});

/* ============================== 34 ============================== */
G7_MAT.push({
  id: 'g7-34', stream: 'mat', grade: 7, quarter: 2, lessons: '61–62', hours: 2,
  title: 'Powers with a natural exponent',
  subtitle: 'Repeated multiplication, written short — and the vocabulary that goes with it.',
  uz: 'Matematika 7, §27', uzPage: 'pp. 164–170',
  cam: 'S8 6.1', camPage: 'Stage 8, pp. 58–62', wb: 'Exercise 6.1',
  objectives: [
    'Define aⁿ for a natural exponent and name the base and the exponent.',
    'Compute powers of positive, negative and fractional bases.',
    'Use the correct order of operations with powers.',
    'Recognise squares and cubes of the small numbers.'
  ],
  terms: [
    ['Power', 'Daraja', 'Степень'],
    ['Base', 'Asos', 'Основание'],
    ['Exponent', 'Ko‘rsatkich', 'Показатель'],
    ['Square', 'Kvadrat', 'Квадрат'],
    ['Cube', 'Kub', 'Куб'],
    ['To raise to a power', 'Darajaga ko‘tarish', 'Возвести в степень'],
    ['Repeated multiplication', 'Takroriy ko‘paytirish', 'Повторное умножение'],
    ['Order of operations', 'Amallar tartibi', 'Порядок действий']
  ],
  timing: [[15, 'The definition'], [25, 'Signs and fractions'], [25, 'Order of operations'], [20, 'Squares and cubes'], [5, 'Homework']],
  sections: [
    {
      h: 'The definition',
      html: `${eq(m('aⁿ = a × a × … × a') + '   (' + m('n') + ' factors),   ' + m('n ∈ ℕ'), true)}
      <p>${m('a')} is the <b>base</b>, ${m('n')} the <b>exponent</b>. ${m('a¹ = a')}, and ${m('a²')} is
      read “${m('a')} squared”, ${m('a³')} “${m('a')} cubed”.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Power</th><th>Means</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td class="m">2⁵</td><td class="m">2 × 2 × 2 × 2 × 2</td><td class="m">32</td></tr>
        <tr><td class="m">3⁴</td><td class="m">3 × 3 × 3 × 3</td><td class="m">81</td></tr>
        <tr><td class="m">10³</td><td class="m">10 × 10 × 10</td><td class="m">1000</td></tr>
        <tr><td class="m">7¹</td><td class="m">7</td><td class="m">7</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('2⁵')} is not ${m('2 × 5')}</span>
      It is ${m('32')}, not ${m('10')}. The exponent counts the factors; it is not a multiplier. Reading
      the power aloud as “two multiplied by itself five times over” prevents the confusion.</div>`
    },
    {
      h: 'Signs and fractions',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Power</th><th>Value</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td class="m">(−2)³</td><td class="m">−8</td><td>three negative factors</td></tr>
        <tr><td class="m">(−2)⁴</td><td class="m">16</td><td>four negative factors</td></tr>
        <tr><td class="m">−2⁴</td><td class="m">−16</td><td>only the ${m('2')} is raised</td></tr>
        <tr><td class="m">(${f('2', '3')})³</td><td class="m">${f('8', '27')}</td><td>numerator and denominator both</td></tr>
        <tr><td class="m">(0.1)²</td><td class="m">0.01</td><td class="m">0.1 × 0.1</td></tr>
      </tbody></table></div>
      ${eq(m('(−a)ⁿ = aⁿ') + ' for even ' + m('n') + ',   ' + m('(−a)ⁿ = −aⁿ') + ' for odd ' + m('n'), true)}
      <div class="warn"><span class="wl">The brackets decide what is raised</span>
      ${m('(−2)⁴ = 16')} but ${m('−2⁴ = −16')}. This distinction is tested every year from now to Grade
      11.</div>`
    },
    {
      h: 'Order of operations',
      html: `<p>Powers come after brackets and before multiplication.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Working</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td class="m">3 × 2³</td><td class="m">3 × 8</td><td class="m">24</td></tr>
        <tr><td class="m">(3 × 2)³</td><td class="m">6³</td><td class="m">216</td></tr>
        <tr><td class="m">2 + 3²</td><td class="m">2 + 9</td><td class="m">11</td></tr>
        <tr><td class="m">(2 + 3)²</td><td class="m">5²</td><td class="m">25</td></tr>
        <tr><td class="m">5² − 3 × 2²</td><td class="m">25 − 12</td><td class="m">13</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A bracket is the only way to raise a sum</div>
      ${m('(2 + 3)²')} is ${m('25')}; ${m('2 + 3²')} is ${m('11')}; and ${m('2² + 3²')} is ${m('13')}.
      Three different expressions, and the brackets are what distinguish them.</div>`
    },
    {
      h: 'Squares and cubes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th class="m">n</th><th class="m">1</th><th class="m">2</th><th class="m">3</th><th class="m">4</th><th class="m">5</th><th class="m">6</th><th class="m">7</th><th class="m">8</th><th class="m">9</th><th class="m">10</th></tr></thead>
      <tbody>
        <tr><td class="m">n²</td><td class="m">1</td><td class="m">4</td><td class="m">9</td><td class="m">16</td><td class="m">25</td><td class="m">36</td><td class="m">49</td><td class="m">64</td><td class="m">81</td><td class="m">100</td></tr>
        <tr><td class="m">n³</td><td class="m">1</td><td class="m">8</td><td class="m">27</td><td class="m">64</td><td class="m">125</td><td class="m">216</td><td class="m">343</td><td class="m">512</td><td class="m">729</td><td class="m">1000</td></tr>
      </tbody></table></div>
      <p>Worth adding: ${m('2⁵ = 32')}, ${m('2⁶ = 64')}, ${m('2⁷ = 128')}, ${m('2⁸ = 256')}, ${m('2¹⁰ = 1024')},
      and ${m('3⁴ = 81')}, ${m('5⁴ = 625')}.</p>
      <div class="keybox"><div class="klabel">These two rows save more time than any rule</div>
      They are used in factorising, in simplifying surds, in Pythagoras and in every prime
      factorisation. Learning them once repays the effort for five years.</div>`
    }
  ],
  examples: [
    {
      q: 'Compute ' + m('(−2)⁴') + ', ' + m('−2⁴') + ' and ' + m('(−2)⁵') + '.',
      steps: [
        [m('(−2)⁴') + ': four negative factors — positive.', ''],
        [m('= 16'), ''],
        [m('−2⁴') + ' means ' + m('−(2⁴)') + ' — only the ' + m('2') + ' is raised.', ''],
        [m('= −16') + '; and ' + m('(−2)⁵ = −32') + '.', 'Five factors — odd.']
      ],
      ans: m('16, −16, −32')
    },
    {
      q: 'Compute ' + m('5² − 3 × 2²') + '.',
      steps: [
        ['Powers first: ' + m('25') + ' and ' + m('4') + '.', ''],
        ['Then multiplication: ' + m('3 × 4 = 12') + '.', ''],
        ['Then subtraction.', ''],
        [m('25 − 12 = 13'), '']
      ],
      ans: m('13')
    },
    {
      q: 'Compute ' + m('(' + f('2', '3') + ')³') + ' and ' + m('(0.1)²') + '.',
      steps: [
        ['Raise the numerator and the denominator.', ''],
        [m(f('2³', '3³') + ' = ' + f('8', '27')), ''],
        [m('0.1 × 0.1'), ''],
        [m('= 0.01'), '']
      ],
      ans: m(f('8', '27')) + ' and ' + m('0.01')
    }
  ],
  modelNote: 'Fold a sheet of paper in half repeatedly and count the layers; the class reaches 2⁷ before the paper stops folding, and the growth is felt rather than stated.',
  interactive: {
    type: 'rootPower',
    title: 'Powers of a number',
    hint: 'Change the exponent by one and watch the value.'
  },
  quiz: [
    { q: m('2⁵') + ' equals:', a: [m('10'), m('25'), m('32'), m('16')], c: 2, why: 'Five factors of ' + m('2') + '.' },
    { q: 'In ' + m('aⁿ') + ', ' + m('n') + ' is the:', a: ['base', 'exponent', 'coefficient', 'term'], c: 1, why: 'It counts the factors.' },
    { q: m('(−2)⁴') + ' equals:', a: [m('16'), m('−16'), m('8'), m('−8')], c: 0, why: 'An even exponent.' },
    { q: m('−2⁴') + ' equals:', a: [m('16'), m('−16'), m('8'), m('−8')], c: 1, why: 'Only the ' + m('2') + ' is raised.' },
    { q: m('(2 + 3)²') + ' equals:', a: [m('11'), m('13'), m('25'), m('36')], c: 2, why: 'Bracket first.' },
    { q: m('(' + f('2', '3') + ')³') + ' equals:', a: [m(f('2', '27')), m(f('8', '27')), m(f('6', '9')), m(f('8', '3'))], c: 1, why: 'Both parts are cubed.' }
  ],
  practice: {
    easy: [
      [m('2⁵'), m('32')],
      [m('3⁴'), m('81')],
      [m('10³'), m('1000')],
      [m('7²'), m('49')],
      [m('5³'), m('125')],
      [m('(−2)³'), m('−8')],
      [m('(−2)⁴'), m('16')]
    ],
    med: [
      [m('−2⁴'), m('−16')],
      [m('(' + f('2', '3') + ')³'), m(f('8', '27'))],
      [m('(0.1)²'), m('0.01')],
      [m('3 × 2³'), m('24')],
      [m('(3 × 2)³'), m('216')],
      [m('2 + 3²'), m('11')],
      [m('5² − 3 × 2²'), m('13')]
    ],
    hard: [
      [m('(2 + 3)² − 2² − 3²'), m('12')],
      [m('(−3)² + (−3)³'), m('−18')],
      [m('2⁸ ÷ 2⁵'), m('8')],
      [m('(0.2)³'), m('0.008')],
      [m('(−' + f('1', '2') + ')⁴'), m(f('1', '16'))],
      ['Which is larger, ' + m('2¹⁰') + ' or ' + m('10³') + '?', m('2¹⁰ = 1024')],
      [m('3² × 3³'), m('243')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write out the factors for any power you are unsure of.',
  homework: [
    'Compute ' + m('2⁶') + ', ' + m('3⁵') + ' and ' + m('10⁴') + '.',
    'Compute ' + m('(−3)³') + ', ' + m('(−3)⁴') + ' and ' + m('−3⁴') + '.',
    'Compute ' + m('(' + f('3', '4') + ')²') + ' and ' + m('(0.3)²') + '.',
    'Compute ' + m('4² + 2 × 3²') + '.',
    'Learn the squares to ' + m('12') + ' and the cubes to ' + m('6') + ', and write them out from memory.'
  ]
});

/* ============================== 35 ============================== */
G7_MAT.push({
  id: 'g7-35', stream: 'mat', grade: 7, quarter: 2, lessons: '63–64', hours: 2,
  title: 'Properties of powers with a natural exponent',
  subtitle: 'Five laws — and every one of them is just counting the factors.',
  uz: 'Matematika 7, §28', uzPage: 'pp. 171–177',
  cam: 'S8 6.2', camPage: 'Stage 8, pp. 60–65', wb: 'Exercise 6.2',
  objectives: [
    'State and prove the laws of indices for natural exponents.',
    'Multiply and divide powers with the same base.',
    'Raise a power, a product and a quotient to a power.',
    'Simplify an expression containing several powers.'
  ],
  terms: [
    ['Law of indices', 'Daraja qonuni', 'Свойство степени'],
    ['Same base', 'Bir xil asos', 'Одинаковое основание'],
    ['To multiply powers', 'Darajalarni ko‘paytirish', 'Умножение степеней'],
    ['To divide powers', 'Darajalarni bo‘lish', 'Деление степеней'],
    ['Power of a power', 'Daraja darajasi', 'Степень степени'],
    ['Power of a product', 'Ko‘paytma darajasi', 'Степень произведения'],
    ['Exponent zero', 'Nolinchi daraja', 'Нулевая степень'],
    ['Simplify', 'Soddalashtirish', 'Упростить']
  ],
  timing: [[15, 'Multiplying and dividing'], [25, 'Powers of powers'], [25, 'Products and quotients'], [20, 'Putting them together'], [5, 'Homework']],
  sections: [
    {
      h: 'Multiplying and dividing',
      html: `${eq(m('aᵐ · aⁿ = a') + p('', 'm+n') + '     ' + m('aᵐ ÷ aⁿ = a') + p('', 'm−n') + '   (' + m('m > n') + ')', true)}
      <p><b>Why.</b> ${m('a³ · a² = (aaa)(aa) = a⁵')}: the exponents count the factors, and multiplying
      puts the two lists end to end.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">2³ · 2⁴</td><td class="m">2³⁺⁴</td><td class="m">2⁷ = 128</td></tr>
        <tr><td class="m">x⁵ · x</td><td class="m">x⁵⁺¹</td><td class="m">x⁶</td></tr>
        <tr><td class="m">3⁷ ÷ 3⁴</td><td class="m">3⁷⁻⁴</td><td class="m">3³ = 27</td></tr>
        <tr><td class="m">a⁶ ÷ a⁶</td><td class="m">a⁰</td><td class="m">1</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The bases must be the same</span>
      ${m('2³ · 3²')} cannot be combined — the laws say nothing about it. Only ${m('2³ · 2²')} becomes
      ${m('2⁵')}.</div>`
    },
    {
      h: 'Powers of powers',
      html: `${eq(m('(aᵐ)ⁿ = a') + p('', 'mn'), true)}
      <p><b>Why.</b> ${m('(a³)² = a³ · a³ = a⁶')}: ${m('n')} copies of ${m('m')} factors is ${m('mn')}
      factors.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">(2³)²</td><td class="m">2⁶ = 64</td></tr>
        <tr><td class="m">(x⁴)³</td><td class="m">x¹²</td></tr>
        <tr><td class="m">(a²)⁵</td><td class="m">a¹⁰</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('(a³)² ')} and ${m('a³ · a²')} are different</span>
      The first is ${m('a⁶')}, the second ${m('a⁵')}. Multiply the exponents for a power of a power; add
      them for a product.</div>`
    },
    {
      h: 'Products and quotients',
      html: `${eq(m('(ab)ⁿ = aⁿbⁿ') + '     ' + m('(' + f('a', 'b') + ')ⁿ = ' + f('aⁿ', 'bⁿ')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">(2x)³</td><td class="m">8x³</td></tr>
        <tr><td class="m">(−3a)²</td><td class="m">9a²</td></tr>
        <tr><td class="m">(${f('x', '2')})⁴</td><td class="m">${f('x⁴', '16')}</td></tr>
        <tr><td class="m">(2 × 5)³</td><td class="m">1000</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">There is no such law for a sum</span>
      ${m('(a + b)² ≠ a² + b²')}. Try ${m('a = b = 1')}: ${m('4 ≠ 2')}. The correct expansion is the
      subject of Quarter III.</div>`
    },
    {
      h: 'Putting them together',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">(2x²)³</td><td class="m">2³(x²)³</td><td class="m">8x⁶</td></tr>
        <tr><td class="m">x⁵ · x³ ÷ x⁶</td><td class="m">x⁸⁻⁶</td><td class="m">x²</td></tr>
        <tr><td class="m">(a³b)² · a</td><td class="m">a⁶b² · a</td><td class="m">a⁷b²</td></tr>
        <tr><td class="m">${f('(3a²)³', '9a⁴')}</td><td class="m">${f('27a⁶', '9a⁴')}</td><td class="m">3a²</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Deal with each base separately</div>
      Collect the numbers, then the ${m('a')}s, then the ${m('b')}s. Trying to do all three at once is
      where the errors come from.</div>`
    }
  ],
  examples: [
    {
      q: 'Simplify ' + m('2³ · 2⁴') + ', ' + m('3⁷ ÷ 3⁴') + ' and ' + m('(2³)²') + '.',
      steps: [
        ['Same base, multiply: add the exponents.', ''],
        [m('2⁷ = 128'), ''],
        ['Same base, divide: subtract.', m('3³ = 27') + '.'],
        ['Power of a power: multiply. ' + m('2⁶ = 64') + '.', '']
      ],
      ans: m('128, 27, 64')
    },
    {
      q: 'Simplify ' + m('(2x²)³') + '.',
      steps: [
        ['Raise each factor: ' + m('2³ · (x²)³') + '.', ''],
        [m('2³ = 8'), ''],
        [m('(x²)³ = x⁶'), 'Multiply the exponents.'],
        [m('= 8x⁶'), '']
      ],
      ans: m('8x⁶')
    },
    {
      q: 'Simplify ' + m(f('(3a²)³', '9a⁴')) + '.',
      steps: [
        ['Numerator: ' + m('27a⁶') + '.', ''],
        ['Numbers: ' + m(f('27', '9') + ' = 3') + '.', ''],
        ['Letters: ' + m('a⁶ ÷ a⁴ = a²') + '.', ''],
        [m('= 3a²'), '']
      ],
      ans: m('3a²')
    }
  ],
  modelNote: 'Write a³ · a² out in full as aaaaa before stating the law; the class sees that the rule is only counting.',
  interactive: {
    type: 'rootPower',
    title: 'Combining powers',
    hint: 'Add for a product, multiply for a power of a power.'
  },
  quiz: [
    { q: m('aᵐ · aⁿ') + ' equals:', a: [m('a') + p('', 'mn'), m('a') + p('', 'm+n'), m('a') + p('', 'm−n'), m('2a') + p('', 'm')], c: 1, why: 'The factor lists join.' },
    { q: m('(aᵐ)ⁿ') + ' equals:', a: [m('a') + p('', 'm+n'), m('a') + p('', 'mn'), m('a') + p('', 'm−n'), m('aᵐ')], c: 1, why: m('n') + ' copies of ' + m('m') + ' factors.' },
    { q: m('3⁷ ÷ 3⁴') + ' equals:', a: [m('3³'), m('3¹¹'), m('3²⁸'), m('1')], c: 0, why: 'Subtract the exponents.' },
    { q: m('(2x)³') + ' equals:', a: [m('2x³'), m('6x³'), m('8x³'), m('8x')], c: 2, why: 'Both factors are cubed.' },
    { q: m('(a + b)²') + ' equals:', a: [m('a² + b²'), m('a² + 2ab + b²'), m('2a + 2b'), m('ab')], c: 1, why: 'There is no simple law for sums.' },
    { q: m('a⁶ ÷ a⁶') + ' equals:', a: [m('0'), m('1'), m('a'), m('a¹²')], c: 1, why: 'Anything over itself.' }
  ],
  practice: {
    easy: [
      [m('2³ · 2⁴'), m('2⁷')],
      [m('x⁵ · x'), m('x⁶')],
      [m('3⁷ ÷ 3⁴'), m('3³')],
      [m('(2³)²'), m('2⁶')],
      [m('(x⁴)³'), m('x¹²')],
      [m('(2x)³'), m('8x³')],
      [m('a⁶ ÷ a⁶'), m('1')]
    ],
    med: [
      [m('(2x²)³'), m('8x⁶')],
      [m('(−3a)²'), m('9a²')],
      [m('(' + f('x', '2') + ')⁴'), m(f('x⁴', '16'))],
      [m('x⁵ · x³ ÷ x⁶'), m('x²')],
      [m('(a³b)² · a'), m('a⁷b²')],
      [m(f('(3a²)³', '9a⁴')), m('3a²')],
      [m('2³ · 3²'), m('72') + ' — bases differ']
    ],
    hard: [
      [m(f('(2a²b)³', '4a³b')), m('2a³b²')],
      [m('(x²y³)² · (xy)³'), m('x⁷y⁹')],
      [m(f('5ⁿ⁺¹', '5ⁿ')), m('5')],
      [m('(−2a²)³ ÷ (4a³)'), m('−2a³')],
      ['Is ' + m('(a + b)² = a² + b²') + '?', 'No — try ' + m('a = b = 1')],
      [m('2¹⁰ ÷ 2⁷'), m('8')],
      [m('(3x)² · (2x)³'), m('72x⁵')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Deal with the numbers first, then each letter separately.',
  homework: [
    'Simplify ' + m('5² · 5³') + ', ' + m('7⁶ ÷ 7⁴') + ' and ' + m('(4²)³') + '.',
    'Simplify ' + m('(3x³)²') + ' and ' + m('(−2a)⁴') + '.',
    'Simplify ' + m('y⁷ · y² ÷ y⁵') + '.',
    'Simplify ' + m(f('(2a³)⁴', '8a⁵')) + '.',
    'Show with numbers that ' + m('(a + b)² ≠ a² + b²') + '.'
  ]
});

/* ============================== 36 ============================== */
G7_MAT.push({
  id: 'g7-36', stream: 'mat', grade: 7, quarter: 2, lessons: '65', hours: 1,
  title: 'The monomial and its standard form',
  subtitle: 'A number times some letters — the simplest object in algebra.',
  uz: 'Matematika 7, §29', uzPage: 'pp. 178–181',
  cam: 'S8 2.1', camPage: 'Stage 8, pp. 12–18', wb: 'Exercise 2.1',
  objectives: [
    'Define a monomial and recognise one.',
    'Write a monomial in standard form.',
    'Find the coefficient and the degree of a monomial.',
    'Recognise similar monomials.'
  ],
  terms: [
    ['Monomial', 'Bir had', 'Одночлен'],
    ['Standard form', 'Standart ko‘rinish', 'Стандартный вид'],
    ['Coefficient', 'Koeffitsiyent', 'Коэффициент'],
    ['Degree of a monomial', 'Bir hadning darajasi', 'Степень одночлена'],
    ['Similar monomials', 'O‘xshash bir hadlar', 'Подобные одночлены'],
    ['Letter part', 'Harfiy qism', 'Буквенная часть'],
    ['Alphabetical order', 'Alifbo tartibi', 'Алфавитный порядок'],
    ['Zero monomial', 'Nol bir had', 'Нулевой одночлен']
  ],
  timing: [[10, 'What a monomial is'], [12, 'Standard form'], [12, 'Degree and similarity'], [6, 'Homework']],
  sections: [
    {
      h: 'What a monomial is',
      html: `<p>A <b>monomial</b> is a product of numbers and letters, with natural-number exponents. No
      addition, no subtraction and no division by a letter.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>A monomial?</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td class="m">7a²b</td><td>yes</td><td>a product</td></tr>
        <tr><td class="m">−x</td><td>yes</td><td class="m">−1 × x</td></tr>
        <tr><td class="m">5</td><td>yes</td><td>a number alone</td></tr>
        <tr><td class="m">a + b</td><td>no</td><td>a sum</td></tr>
        <tr><td class="m">${f('3', 'x')}</td><td>no</td><td>division by a letter</td></tr>
        <tr><td class="m">${f('x', '3')}</td><td>yes</td><td class="m">${f('1', '3')}x</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Dividing by a number is allowed; dividing by a letter is not</span>
      ${m(f('x', '3'))} is the monomial ${m(f('1', '3') + 'x')}; ${m(f('3', 'x'))} is not a monomial at
      all. The difference matters for everything that follows.</div>`
    },
    {
      h: 'Standard form',
      html: `<p>A monomial is in <b>standard form</b> when it is written as one number followed by each
      letter once, in alphabetical order, with its exponent.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>As written</th><th>Standard form</th></tr></thead>
      <tbody>
        <tr><td class="m">3a · 4b</td><td class="m">12ab</td></tr>
        <tr><td class="m">x · 5 · x · y</td><td class="m">5x²y</td></tr>
        <tr><td class="m">2b · 3a · a</td><td class="m">6a²b</td></tr>
        <tr><td class="m">−a · a · a · 2</td><td class="m">−2a³</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Multiply the numbers, collect each letter</div>
      Two steps, always in that order. The alphabetical order is only a convention, but it makes two
      monomials easy to compare.</div>`
    },
    {
      h: 'Degree and similarity',
      html: `<p>The <b>degree</b> of a monomial is the sum of the exponents of its letters. A number
      alone has degree ${m('0')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Monomial</th><th>Coefficient</th><th>Degree</th></tr></thead>
      <tbody>
        <tr><td class="m">7a²b</td><td class="m">7</td><td class="m">3</td></tr>
        <tr><td class="m">−5x³y²</td><td class="m">−5</td><td class="m">5</td></tr>
        <tr><td class="m">4</td><td class="m">4</td><td class="m">0</td></tr>
        <tr><td class="m">x</td><td class="m">1</td><td class="m">1</td></tr>
      </tbody></table></div>
      <p>Two monomials are <b>similar</b> if their letter parts are identical — same letters, same
      exponents. Only similar monomials can be added.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Pair</th><th>Similar?</th></tr></thead>
      <tbody>
        <tr><td class="m">3a²b and −7a²b</td><td>yes</td></tr>
        <tr><td class="m">3a²b and 3ab²</td><td>no</td></tr>
        <tr><td class="m">5x and 5x²</td><td>no</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('a²b')} and ${m('ab²')} are not similar</span>
      Both have degree ${m('3')}, but the letters carry different exponents. Similarity is about the
      letter part, not about the degree.</div>`
    }
  ],
  examples: [
    {
      q: 'Write ' + m('2b · 3a · a') + ' in standard form, and give its coefficient and degree.',
      steps: [
        ['Numbers: ' + m('2 × 3 = 6') + '.', ''],
        ['Letters: ' + m('a · a = a²') + ', and one ' + m('b') + '.', ''],
        [m('6a²b'), 'Alphabetical order.'],
        ['Coefficient ' + m('6') + ', degree ' + m('2 + 1 = 3') + '.', '']
      ],
      ans: m('6a²b') + '; ' + m('6') + ' and ' + m('3')
    },
    {
      q: 'Which of ' + m('7a²b, a + b, ' + f('3', 'x') + ', ' + f('x', '3') + ', 5') + ' are monomials?',
      steps: [
        [m('7a²b') + ' — a product ✓', ''],
        [m('a + b') + ' — a sum ✗', ''],
        [m(f('3', 'x')) + ' — division by a letter ✗', ''],
        [m(f('x', '3')) + ' and ' + m('5') + ' ✓', '']
      ],
      ans: m('7a²b, ' + f('x', '3') + ', 5')
    },
    {
      q: 'Are ' + m('3a²b') + ' and ' + m('3ab²') + ' similar? And ' + m('3a²b') + ' and ' + m('−7a²b') + '?',
      steps: [
        ['Compare the letter parts.', ''],
        [m('a²b') + ' and ' + m('ab²') + ' differ.', 'Not similar.'],
        [m('a²b') + ' and ' + m('a²b') + ' agree.', ''],
        ['Similar — only the coefficients differ.', '']
      ],
      ans: 'No; yes'
    }
  ],
  modelNote: 'Write the same monomial six different ways on the board and ask which is “tidiest”; the class defines standard form before it is named.',
  interactive: {
    type: 'substitute',
    title: 'Monomials in standard form',
    hint: 'Numbers first, then each letter once.'
  },
  quiz: [
    { q: 'Which is a monomial?', a: [m('a + b'), m('7a²b'), m(f('3', 'x')), m('a − 1')], c: 1, why: 'A product only.' },
    { q: 'Is ' + m(f('x', '3')) + ' a monomial?', a: ['yes', 'no', 'sometimes', 'only if ' + m('x > 0')], c: 0, why: 'It is ' + m(f('1', '3') + 'x') + '.' },
    { q: 'Standard form of ' + m('2b · 3a · a') + ':', a: [m('6ab²'), m('6a²b'), m('5a²b'), m('6a³')], c: 1, why: 'Multiply, then collect.' },
    { q: 'The degree of ' + m('−5x³y²') + ':', a: [m('3'), m('2'), m('5'), m('6')], c: 2, why: m('3 + 2') + '.' },
    { q: 'The degree of ' + m('4') + ':', a: [m('0'), m('1'), m('4'), 'undefined'], c: 0, why: 'No letters.' },
    { q: 'Are ' + m('3a²b') + ' and ' + m('3ab²') + ' similar?', a: ['yes', 'no', 'sometimes', 'only in degree'], c: 1, why: 'Different letter parts.' }
  ],
  practice: {
    easy: [
      ['Is ' + m('7a²b') + ' a monomial?', 'Yes'],
      ['Is ' + m('a + b') + ' a monomial?', 'No'],
      ['Is ' + m(f('3', 'x')) + ' a monomial?', 'No'],
      ['Is ' + m('5') + ' a monomial?', 'Yes'],
      ['Coefficient of ' + m('7a²b'), m('7')],
      ['Degree of ' + m('7a²b'), m('3')],
      ['Degree of ' + m('4'), m('0')]
    ],
    med: [
      ['Standard form of ' + m('3a · 4b'), m('12ab')],
      ['Standard form of ' + m('x · 5 · x · y'), m('5x²y')],
      ['Standard form of ' + m('2b · 3a · a'), m('6a²b')],
      ['Coefficient and degree of ' + m('−5x³y²'), m('−5') + ' and ' + m('5')],
      ['Are ' + m('3a²b') + ' and ' + m('−7a²b') + ' similar?', 'Yes'],
      ['Are ' + m('5x') + ' and ' + m('5x²') + ' similar?', 'No'],
      ['Standard form of ' + m('−a · a · a · 2'), m('−2a³')]
    ],
    hard: [
      ['Standard form of ' + m('(2a)³ · 3b'), m('24a³b')],
      ['Degree of ' + m('(3x²y)²'), m('6')],
      ['Standard form of ' + m(f('1', '2') + 'x · 4x²y'), m('2x³y')],
      ['Two similar monomials of degree ' + m('4'), m('3a²b²') + ' and ' + m('−a²b²')],
      ['Is ' + m('x') + p('', '−1') + ' a monomial?', 'No — the exponent is not natural'],
      ['Degree of ' + m('7a²b · 3ab³'), m('7')],
      ['Coefficient of ' + m('−' + f('2x³', '5')), m('−' + f('2', '5'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write every monomial in standard form before giving its coefficient or degree.',
  homework: [
    'Which of ' + m('4xy, x + 3, ' + f('5', 'y') + ', −2a³, 7') + ' are monomials?',
    'Write ' + m('5a · 2b · a') + ' in standard form.',
    'Give the coefficient and degree of ' + m('−3x²y⁴') + '.',
    'Are ' + m('4ab²') + ' and ' + m('−ab²') + ' similar? And ' + m('4ab²') + ' and ' + m('4a²b') + '?',
    'Write ' + m('(3x)² · 2y') + ' in standard form and give its degree.'
  ]
});

/* ============================== 37 ============================== */
G7_MAT.push({
  id: 'g7-37', stream: 'mat', grade: 7, quarter: 2, lessons: '66–67', hours: 2,
  title: 'Multiplication and division of monomials',
  subtitle: 'Numbers with numbers, letters with letters — and the laws of indices do the rest.',
  uz: 'Matematika 7, §30', uzPage: 'pp. 182–188',
  cam: 'S8 2.1', camPage: 'Stage 8, pp. 12–18', wb: 'Exercise 2.1',
  objectives: [
    'Multiply two or more monomials and give the answer in standard form.',
    'Divide one monomial by another when the division is exact.',
    'Raise a monomial to a power.',
    'Use the operations in area and volume problems.'
  ],
  terms: [
    ['To multiply', 'Ko‘paytirish', 'Умножить'],
    ['To divide', 'Bo‘lish', 'Разделить'],
    ['Standard form', 'Standart ko‘rinish', 'Стандартный вид'],
    ['Exactly divisible', 'Butun bo‘linadi', 'Делится нацело'],
    ['Power of a monomial', 'Bir had darajasi', 'Степень одночлена'],
    ['Area', 'Yuza', 'Площадь'],
    ['Volume', 'Hajm', 'Объём'],
    ['Cancel', 'Qisqartirish', 'Сократить']
  ],
  timing: [[15, 'Multiplying'], [25, 'Raising to a power'], [25, 'Dividing'], [20, 'Areas and volumes'], [5, 'Homework']],
  sections: [
    {
      h: 'Multiplying',
      html: `<p>Multiply the coefficients; then, for each letter, add the exponents.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Product</th><th>Numbers</th><th>Letters</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">3a · 4b</td><td class="m">12</td><td class="m">ab</td><td class="m">12ab</td></tr>
        <tr><td class="m">2x² · 5x³</td><td class="m">10</td><td class="m">x⁵</td><td class="m">10x⁵</td></tr>
        <tr><td class="m">(−3a²b)(4ab³)</td><td class="m">−12</td><td class="m">a³b⁴</td><td class="m">−12a³b⁴</td></tr>
        <tr><td class="m">(${f('1', '2')}xy)(6x²)</td><td class="m">3</td><td class="m">x³y</td><td class="m">3x³y</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The product of two monomials is always a monomial</div>
      Its degree is the sum of the two degrees. That is worth checking as you go: ${m('(−3a²b)')} has
      degree ${m('3')}, ${m('(4ab³)')} degree ${m('4')}, and the answer degree ${m('7')} ✓</div>`
    },
    {
      h: 'Raising to a power',
      html: `${eq(m('(ka^m b^n)^p = k^p a^{mp} b^{np}'), true)}
      <p>Every factor is raised — the coefficient included.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">(2x)³</td><td class="m">8x³</td></tr>
        <tr><td class="m">(3a²b)²</td><td class="m">9a⁴b²</td></tr>
        <tr><td class="m">(−2x³)³</td><td class="m">−8x⁹</td></tr>
        <tr><td class="m">(−2x³)²</td><td class="m">4x⁶</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The coefficient is raised too</span>
      ${m('(3a²b)² = 9a⁴b²')}, not ${m('3a⁴b²')}. Forgetting to square the ${m('3')} is the standard
      slip.</div>`
    },
    {
      h: 'Dividing',
      html: `<p>Divide the coefficients; then, for each letter, subtract the exponents.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Quotient</th><th>Numbers</th><th>Letters</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">12a⁵ ÷ 4a²</td><td class="m">3</td><td class="m">a³</td><td class="m">3a³</td></tr>
        <tr><td class="m">−15x³y² ÷ 5xy</td><td class="m">−3</td><td class="m">x²y</td><td class="m">−3x²y</td></tr>
        <tr><td class="m">8a⁴b³ ÷ (−2a⁴b)</td><td class="m">−4</td><td class="m">b²</td><td class="m">−4b²</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The quotient is a monomial only if every exponent stays natural</span>
      ${m('a² ÷ a⁵')} is not a monomial. In Grade 7 the divisions set are always exact, but the condition
      is worth knowing.</div>`
    },
    {
      h: 'Areas and volumes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Figure</th><th>Dimensions</th><th>Area or volume</th></tr></thead>
      <tbody>
        <tr><td>rectangle</td><td class="m">3a</td><td class="m">12ab</td></tr>
        <tr><td>square</td><td class="m">2x</td><td class="m">4x²</td></tr>
        <tr><td>cuboid</td><td class="m">a, 2a, 3a</td><td class="m">6a³</td></tr>
        <tr><td>cube</td><td class="m">2x</td><td class="m">8x³</td></tr>
      </tbody></table></div>
      <p>The first row assumes a rectangle ${m('3a')} by ${m('4b')}. Notice that the units follow the
      degree: a length is degree ${m('1')}, an area degree ${m('2')}, a volume degree ${m('3')}.</p>
      <div class="keybox"><div class="klabel">The degree is a dimension check</div>
      An answer of degree ${m('2')} for a volume is wrong before any arithmetic is examined. This is the
      algebraic version of checking the units.</div>`
    }
  ],
  examples: [
    {
      q: 'Simplify ' + m('(−3a²b)(4ab³)') + '.',
      steps: [
        ['Numbers: ' + m('−3 × 4 = −12') + '.', ''],
        [m('a') + ': ' + m('a² · a = a³') + '.', ''],
        [m('b') + ': ' + m('b · b³ = b⁴') + '.', ''],
        [m('= −12a³b⁴'), 'Degree ' + m('7') + ' ✓']
      ],
      ans: m('−12a³b⁴')
    },
    {
      q: 'Simplify ' + m('(3a²b)²') + ' and ' + m('(−2x³)³') + '.',
      steps: [
        ['Square every factor: ' + m('3² = 9') + ', ' + m('(a²)² = a⁴') + ', ' + m('b² ') + '.', ''],
        [m('= 9a⁴b²'), ''],
        ['Cube every factor: ' + m('(−2)³ = −8') + ', ' + m('(x³)³ = x⁹') + '.', ''],
        [m('= −8x⁹'), '']
      ],
      ans: m('9a⁴b²') + ' and ' + m('−8x⁹')
    },
    {
      q: 'Simplify ' + m('−15x³y² ÷ 5xy') + '.',
      steps: [
        ['Numbers: ' + m('−15 ÷ 5 = −3') + '.', ''],
        [m('x') + ': ' + m('x³ ÷ x = x²') + '.', ''],
        [m('y') + ': ' + m('y² ÷ y = y') + '.', ''],
        [m('= −3x²y'), '']
      ],
      ans: m('−3x²y')
    }
  ],
  modelNote: 'Draw a rectangle 3a by 4b on the board and ask for its area before any rule is stated; the class multiplies numbers and letters separately without being told to.',
  interactive: {
    type: 'areaModel',
    title: 'A rectangle with algebraic sides',
    hint: 'Area is the product of the two sides.'
  },
  quiz: [
    { q: m('2x² · 5x³') + ' equals:', a: [m('10x⁵'), m('10x⁶'), m('7x⁵'), m('10x')], c: 0, why: 'Multiply, then add exponents.' },
    { q: m('(3a²b)²') + ' equals:', a: [m('3a⁴b²'), m('9a⁴b²'), m('9a⁴b'), m('6a⁴b²')], c: 1, why: 'The coefficient is squared too.' },
    { q: m('(−2x³)³') + ' equals:', a: [m('−8x⁹'), m('8x⁹'), m('−6x⁹'), m('−8x⁶')], c: 0, why: 'An odd exponent.' },
    { q: m('12a⁵ ÷ 4a²') + ' equals:', a: [m('3a³'), m('3a⁷'), m('8a³'), m('3a²')], c: 0, why: 'Subtract the exponents.' },
    { q: 'The degree of a product of monomials is:', a: ['the larger degree', 'the sum of the degrees', 'the product of them', 'unchanged'], c: 1, why: 'The exponents add.' },
    { q: 'A cube of side ' + m('2x') + ' has volume:', a: [m('2x³'), m('6x³'), m('8x³'), m('8x²')], c: 2, why: m('(2x)³') + '.' }
  ],
  practice: {
    easy: [
      [m('3a · 4b'), m('12ab')],
      [m('2x² · 5x³'), m('10x⁵')],
      [m('(2x)³'), m('8x³')],
      [m('(3a²b)²'), m('9a⁴b²')],
      [m('12a⁵ ÷ 4a²'), m('3a³')],
      [m('(−2x³)²'), m('4x⁶')],
      [m('(−2x³)³'), m('−8x⁹')]
    ],
    med: [
      [m('(−3a²b)(4ab³)'), m('−12a³b⁴')],
      [m('(' + f('1', '2') + 'xy)(6x²)'), m('3x³y')],
      [m('−15x³y² ÷ 5xy'), m('−3x²y')],
      [m('8a⁴b³ ÷ (−2a⁴b)'), m('−4b²')],
      ['Area of a rectangle ' + m('3a') + ' by ' + m('4b'), m('12ab')],
      ['Volume of a cuboid ' + m('a, 2a, 3a'), m('6a³')],
      ['Degree of ' + m('(−3a²b)(4ab³)'), m('7')]
    ],
    hard: [
      [m('(2a²b)³ · 3ab'), m('24a⁷b⁴')],
      [m(f('(3xy²)³', '9x²y⁴')), m('3xy²')],
      [m('(−a²b)⁴ ÷ (a³b²)'), m('a⁵b²')],
      ['A cube of volume ' + m('27x⁶') + ': its edge', m('3x²')],
      ['A square of area ' + m('49a⁴') + ': its side', m('7a²')],
      [m('(2x)² · (3x)³'), m('108x⁵')],
      ['Why is ' + m('a² ÷ a⁵') + ' not a monomial?', 'The exponent would be negative']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Check the degree of every answer against the degrees you started with.',
  homework: [
    'Simplify ' + m('(−2a³b)(5ab²)') + '.',
    'Simplify ' + m('(4x²y)²') + ' and ' + m('(−3a)³') + '.',
    'Simplify ' + m('20a⁶b³ ÷ 5a²b') + '.',
    'Find the volume of a cuboid with edges ' + m('2a') + ', ' + m('3a') + ' and ' + m('4b') + '.',
    'A cube has volume ' + m('64x³') + '. Find its edge.'
  ]
});

/* ============================== 38 ============================== */
G7_MAT.push({
  id: 'g7-38', stream: 'mat', grade: 7, quarter: 2, lessons: '68', hours: 1,
  title: 'Polynomials',
  subtitle: 'A sum of monomials — and the object that the rest of algebra is about.',
  uz: 'Matematika 7, §31', uzPage: 'pp. 189–192',
  cam: 'S8 2.2', camPage: 'Stage 8, pp. 16–20', wb: 'Exercise 2.2',
  objectives: [
    'Define a polynomial and name its terms.',
    'Write a polynomial in standard form and give its degree.',
    'Name a binomial and a trinomial.',
    'Evaluate a polynomial for given values.'
  ],
  terms: [
    ['Polynomial', 'Ko‘phad', 'Многочлен'],
    ['Binomial', 'Ikki had', 'Двучлен'],
    ['Trinomial', 'Uch had', 'Трёхчлен'],
    ['Term of a polynomial', 'Ko‘phad hadi', 'Член многочлена'],
    ['Degree of a polynomial', 'Ko‘phad darajasi', 'Степень многочлена'],
    ['Standard form', 'Standart ko‘rinish', 'Стандартный вид'],
    ['Leading term', 'Bosh had', 'Старший член'],
    ['Constant term', 'Ozod had', 'Свободный член']
  ],
  timing: [[10, 'The definition'], [12, 'Standard form and degree'], [12, 'Evaluating'], [6, 'Homework']],
  sections: [
    {
      h: 'The definition',
      html: `<p>A <b>polynomial</b> is a sum of monomials. Each monomial is a <b>term</b>.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Polynomial</th><th>Terms</th><th>Name</th></tr></thead>
      <tbody>
        <tr><td class="m">3x</td><td class="m">1</td><td>monomial</td></tr>
        <tr><td class="m">3x + 5</td><td class="m">2</td><td>binomial</td></tr>
        <tr><td class="m">x² − 4x + 3</td><td class="m">3</td><td>trinomial</td></tr>
        <tr><td class="m">a³ + a² − a + 7</td><td class="m">4</td><td>polynomial</td></tr>
      </tbody></table></div>
      <p>Subtraction counts as addition of a negative, so ${m('x² − 4x')} is the sum of ${m('x²')} and
      ${m('−4x')}.</p>
      <div class="keybox"><div class="klabel">Every monomial is a polynomial</div>
      With one term. The names simply record how many terms there are, and only the first three have
      special names.</div>`
    },
    {
      h: 'Standard form and degree',
      html: `<p>A polynomial is in <b>standard form</b> when every term is a monomial in standard form, no
      two terms are similar, and the terms are written in decreasing degree.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>As written</th><th>Standard form</th><th>Degree</th></tr></thead>
      <tbody>
        <tr><td class="m">5 + x² − 3x</td><td class="m">x² − 3x + 5</td><td class="m">2</td></tr>
        <tr><td class="m">2x + 3x</td><td class="m">5x</td><td class="m">1</td></tr>
        <tr><td class="m">a³ + 2a³ − 4</td><td class="m">3a³ − 4</td><td class="m">3</td></tr>
        <tr><td class="m">x²y + xy² + 1</td><td>already standard</td><td class="m">3</td></tr>
      </tbody></table></div>
      <p>The <b>degree of a polynomial</b> is the greatest of the degrees of its terms. The term of that
      degree is the <b>leading term</b>; a term with no letters is the <b>constant term</b>.</p>
      <div class="warn"><span class="wl">Collect similar terms before reading the degree</span>
      In ${m('a³ + 2a³ − 4')} the first two terms combine. Reading the degree from an uncollected
      expression can give the wrong answer when terms cancel.</div>`
    },
    {
      h: 'Evaluating',
      html: `<p>Substitute and compute, with every negative value in brackets.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Polynomial</th><th class="m">x = 2</th><th class="m">x = −1</th></tr></thead>
      <tbody>
        <tr><td class="m">x² − 4x + 3</td><td class="m">4 − 8 + 3 = −1</td><td class="m">1 + 4 + 3 = 8</td></tr>
        <tr><td class="m">2x³ − x</td><td class="m">16 − 2 = 14</td><td class="m">−2 + 1 = −1</td></tr>
        <tr><td class="m">5 − x²</td><td class="m">5 − 4 = 1</td><td class="m">5 − 1 = 4</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A value that makes the polynomial zero is a root</div>
      ${m('x² − 4x + 3')} is zero at ${m('x = 1')} and at ${m('x = 3')}. Finding roots is what the whole
      of the equation work later this year is about.</div>`
    }
  ],
  examples: [
    {
      q: 'Write ' + m('5 + x² − 3x') + ' in standard form and give its degree and constant term.',
      steps: [
        ['Order by decreasing degree.', ''],
        [m('x² − 3x + 5'), ''],
        ['Degree ' + m('2') + ' — the greatest term degree.', ''],
        ['Constant term ' + m('5') + '.', '']
      ],
      ans: m('x² − 3x + 5') + '; degree ' + m('2') + ', constant ' + m('5')
    },
    {
      q: 'Simplify ' + m('a³ + 2a³ − 4') + ' and give its degree.',
      steps: [
        ['Collect the similar terms.', ''],
        [m('3a³ − 4'), ''],
        ['Two terms — a binomial.', ''],
        ['Degree ' + m('3') + '.', '']
      ],
      ans: m('3a³ − 4') + ', degree ' + m('3')
    },
    {
      q: 'Evaluate ' + m('x² − 4x + 3') + ' at ' + m('x = 2') + ' and at ' + m('x = −1') + '.',
      steps: [
        [m('4 − 8 + 3'), ''],
        [m('= −1'), ''],
        [m('(−1)² − 4(−1) + 3 = 1 + 4 + 3'), 'Brackets round the negative.'],
        [m('= 8'), '']
      ],
      ans: m('−1') + ' and ' + m('8')
    }
  ],
  modelNote: 'Ask for the value of x² − 4x + 3 at x = 1 and x = 3; both give zero, and the idea of a root arrives before any equation is written.',
  interactive: {
    type: 'substitute',
    title: 'Evaluating a polynomial',
    hint: 'Try values that make it zero.'
  },
  quiz: [
    { q: 'A polynomial is:', a: ['a product of monomials', 'a sum of monomials', 'a fraction', 'an equation'], c: 1, why: 'Terms added.' },
    { q: m('3x + 5') + ' is a:', a: ['monomial', 'binomial', 'trinomial', 'constant'], c: 1, why: 'Two terms.' },
    { q: 'The degree of ' + m('x² − 3x + 5') + ':', a: [m('1'), m('2'), m('3'), m('5')], c: 1, why: 'The greatest term degree.' },
    { q: 'The constant term of ' + m('x² − 3x + 5') + ':', a: [m('1'), m('−3'), m('5'), m('0')], c: 2, why: 'No letters.' },
    { q: m('a³ + 2a³ − 4') + ' simplifies to:', a: [m('2a³ − 4'), m('3a³ − 4'), m('3a⁶ − 4'), m('a³ − 4')], c: 1, why: 'Collect similar terms.' },
    { q: m('x² − 4x + 3') + ' at ' + m('x = −1') + ':', a: [m('0'), m('−1'), m('8'), m('2')], c: 2, why: m('1 + 4 + 3') + '.' }
  ],
  practice: {
    easy: [
      ['How many terms in ' + m('3x + 5') + '?', m('2')],
      ['Its name', 'Binomial'],
      ['How many terms in ' + m('x² − 4x + 3') + '?', m('3')],
      ['Its name', 'Trinomial'],
      ['Degree of ' + m('x² − 3x + 5'), m('2')],
      ['Constant term of ' + m('x² − 3x + 5'), m('5')],
      ['Degree of ' + m('7'), m('0')]
    ],
    med: [
      ['Standard form of ' + m('5 + x² − 3x'), m('x² − 3x + 5')],
      ['Simplify ' + m('2x + 3x'), m('5x')],
      ['Simplify ' + m('a³ + 2a³ − 4'), m('3a³ − 4')],
      ['Degree of ' + m('x²y + xy² + 1'), m('3')],
      [m('x² − 4x + 3') + ' at ' + m('x = 2'), m('−1')],
      [m('x² − 4x + 3') + ' at ' + m('x = −1'), m('8')],
      [m('2x³ − x') + ' at ' + m('x = 2'), m('14')]
    ],
    hard: [
      ['For which ' + m('x') + ' is ' + m('x² − 4x + 3 = 0') + '?', m('x = 1') + ' and ' + m('x = 3')],
      ['Simplify ' + m('3x² − 5x + 2 − x² + 5x − 7'), m('2x² − 5')],
      ['Its degree', m('2')],
      ['Degree of ' + m('(x + 1)(x − 1)'), m('2')],
      [m('5 − x²') + ' at ' + m('x = −3'), m('−4')],
      ['A polynomial of degree ' + m('0'), 'A non-zero constant'],
      ['Simplify ' + m('a² + a² + a²'), m('3a²')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Collect similar terms before naming the degree.',
  homework: [
    'Write ' + m('7 − 2x + x³') + ' in standard form and give its degree.',
    'Simplify ' + m('4y² + 3y² − 5') + ' and name the result.',
    'Give the constant term of ' + m('2x² − x + 9') + '.',
    'Evaluate ' + m('x² + 2x − 5') + ' at ' + m('x = 3') + ' and at ' + m('x = −2') + '.',
    'Find the value of ' + m('x') + ' for which ' + m('3x − 6 = 0') + '.'
  ]
});

/* ============================== 39 ============================== */
G7_MAT.push({
  id: 'g7-39', stream: 'mat', grade: 7, quarter: 2, lessons: '69–70', hours: 2,
  title: 'Like terms and their collection',
  subtitle: 'Only terms with the same letters can be added — and that one rule tidies every expression.',
  uz: 'Matematika 7, §32', uzPage: 'pp. 193–198',
  cam: 'S8 2.2', camPage: 'Stage 8, pp. 16–20', wb: 'Exercise 2.2',
  objectives: [
    'Recognise like terms.',
    'Collect like terms, including with negative coefficients.',
    'Simplify an expression after removing brackets.',
    'Use collection to shorten a perimeter or a cost calculation.'
  ],
  terms: [
    ['Like terms', 'O‘xshash hadlar', 'Подобные члены'],
    ['To collect', 'Ixchamlash', 'Приведение подобных'],
    ['Unlike terms', 'O‘xshash bo‘lmagan hadlar', 'Неподобные члены'],
    ['Coefficient', 'Koeffitsiyent', 'Коэффициент'],
    ['Letter part', 'Harfiy qism', 'Буквенная часть'],
    ['To simplify', 'Soddalashtirish', 'Упростить'],
    ['Perimeter', 'Perimetr', 'Периметр'],
    ['Cost', 'Narx', 'Стоимость']
  ],
  timing: [[15, 'Which terms are alike'], [25, 'Collecting'], [25, 'After brackets'], [20, 'In problems'], [5, 'Homework']],
  sections: [
    {
      h: 'Which terms are alike',
      html: `<p>Two terms are <b>like</b> if their letter parts are identical — the same letters with the
      same exponents. The coefficients may be anything.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Pair</th><th>Like?</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td class="m">3x, −7x</td><td>yes</td><td>same letter part ${m('x')}</td></tr>
        <tr><td class="m">4a²b, a²b</td><td>yes</td><td>same letter part</td></tr>
        <tr><td class="m">4a²b, 4ab²</td><td>no</td><td>different exponents</td></tr>
        <tr><td class="m">5x, 5y</td><td>no</td><td>different letters</td></tr>
        <tr><td class="m">7, −2</td><td>yes</td><td>both constants</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Think of the letter part as a unit</div>
      Three apples plus five apples is eight apples; three apples plus five pears is neither. That is the
      whole rule, and it explains why unlike terms simply stay as they are.</div>`
    },
    {
      h: 'Collecting',
      html: `${eq(m('ka + la = (k + l)a'), true)}
      <p>Add the coefficients and keep the letter part.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Collected</th></tr></thead>
      <tbody>
        <tr><td class="m">3x + 5x</td><td class="m">8x</td></tr>
        <tr><td class="m">7a − 10a</td><td class="m">−3a</td></tr>
        <tr><td class="m">4x + 3y − x + 5y</td><td class="m">3x + 8y</td></tr>
        <tr><td class="m">2a² + 3a − a² + a</td><td class="m">a² + 4a</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Take the sign with the term</span>
      In ${m('4x + 3y − x + 5y')} the third term is ${m('−x')}, so the ${m('x')} terms give
      ${m('4 − 1 = 3')}. Copying a term without its sign is the commonest error here.</div>`
    },
    {
      h: 'After brackets',
      html: `<p>Remove the brackets first, then collect.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Brackets removed</th><th>Collected</th></tr></thead>
      <tbody>
        <tr><td class="m">2(x + 3) + 3(x − 1)</td><td class="m">2x + 6 + 3x − 3</td><td class="m">5x + 3</td></tr>
        <tr><td class="m">5(a − 2) − 2(a − 5)</td><td class="m">5a − 10 − 2a + 10</td><td class="m">3a</td></tr>
        <tr><td class="m">x − (3x − 4)</td><td class="m">x − 3x + 4</td><td class="m">−2x + 4</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Two passes, never one</div>
      Removing brackets and collecting at the same time is where the signs go wrong. Write the expanded
      line in full before touching the collection.</div>`
    },
    {
      h: 'In problems',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Situation</th><th>Expression</th><th>Simplified</th></tr></thead>
      <tbody>
        <tr><td>perimeter of a rectangle ${m('a')} by ${m('b')}</td><td class="m">a + b + a + b</td><td class="m">2a + 2b</td></tr>
        <tr><td>perimeter of a triangle ${m('x, x, 2x − 1')}</td><td class="m">x + x + 2x − 1</td><td class="m">4x − 1</td></tr>
        <tr><td>${m('3')} pens at ${m('p')} and ${m('4')} books at ${m('b')}, twice over</td><td class="m">2(3p + 4b)</td><td class="m">6p + 8b</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Simplifying is what makes a formula usable</div>
      ${m('2a + 2b')} can be evaluated in two operations; ${m('a + b + a + b')} needs three. Over a whole
      calculation the saving is large, and the shorter form is also easier to read.</div>`
    }
  ],
  examples: [
    {
      q: 'Collect ' + m('4x + 3y − x + 5y') + '.',
      steps: [
        [m('x') + ' terms: ' + m('4x − x = 3x') + '.', 'The sign belongs to the term.'],
        [m('y') + ' terms: ' + m('3y + 5y = 8y') + '.', ''],
        ['They cannot be combined further.', ''],
        [m('3x + 8y'), '']
      ],
      ans: m('3x + 8y')
    },
    {
      q: 'Simplify ' + m('5(a − 2) − 2(a − 5)') + '.',
      steps: [
        [m('5a − 10') + ' and ' + m('−2a + 10') + '.', 'Both signs change in the second.'],
        [m('5a − 10 − 2a + 10'), ''],
        [m('a') + ' terms: ' + m('3a') + '; constants: ' + m('0') + '.', ''],
        [m('= 3a'), '']
      ],
      ans: m('3a')
    },
    {
      q: 'Find and simplify the perimeter of a triangle with sides ' + m('x') + ', ' + m('x') + ' and ' + m('2x − 1') + '.',
      steps: [
        [m('P = x + x + (2x − 1)'), ''],
        [m('= x + x + 2x − 1'), ''],
        ['Collect: ' + m('4x − 1') + '.', ''],
        ['Check at ' + m('x = 3') + ': ' + m('3 + 3 + 5 = 11 = 4(3) − 1') + ' ✓', '']
      ],
      ans: m('4x − 1')
    }
  ],
  modelNote: 'Ask for the perimeter of a rectangle twice — once unsimplified and once collected — and have the class evaluate both at a = 7, b = 4; the answers agree and one is far quicker.',
  interactive: {
    type: 'areaModel',
    title: 'Collecting like terms',
    hint: 'Group the same shapes together.'
  },
  quiz: [
    { q: 'Are ' + m('4a²b') + ' and ' + m('4ab²') + ' like terms?', a: ['yes', 'no', 'sometimes', 'only if ' + m('a = b')], c: 1, why: 'Different exponents.' },
    { q: m('3x + 5x') + ' equals:', a: [m('8x'), m('8x²'), m('15x'), m('8')], c: 0, why: 'Add the coefficients.' },
    { q: m('7a − 10a') + ' equals:', a: [m('3a'), m('−3a'), m('17a'), m('−17a')], c: 1, why: 'The second is larger.' },
    { q: m('4x + 3y − x + 5y') + ' equals:', a: [m('3x + 8y'), m('5x + 8y'), m('3x + 2y'), m('11xy')], c: 0, why: 'Two groups.' },
    { q: m('5(a − 2) − 2(a − 5)') + ' equals:', a: [m('3a − 20'), m('3a'), m('7a − 20'), m('3a + 20')], c: 1, why: 'The constants cancel.' },
    { q: 'Can ' + m('3x') + ' and ' + m('5y') + ' be collected?', a: ['yes', 'no', 'as ' + m('8xy'), 'as ' + m('15xy')], c: 1, why: 'Different letters.' }
  ],
  practice: {
    easy: [
      [m('3x + 5x'), m('8x')],
      [m('7a − 10a'), m('−3a')],
      [m('2b + b'), m('3b')],
      [m('5x − 5x'), m('0')],
      [m('4a² + 3a²'), m('7a²')],
      ['Can ' + m('3x') + ' and ' + m('5y') + ' be collected?', 'No'],
      ['Are ' + m('7') + ' and ' + m('−2') + ' like terms?', 'Yes']
    ],
    med: [
      [m('4x + 3y − x + 5y'), m('3x + 8y')],
      [m('2a² + 3a − a² + a'), m('a² + 4a')],
      [m('2(x + 3) + 3(x − 1)'), m('5x + 3')],
      [m('5(a − 2) − 2(a − 5)'), m('3a')],
      [m('x − (3x − 4)'), m('4 − 2x')],
      ['Perimeter of a rectangle ' + m('a') + ' by ' + m('b'), m('2a + 2b')],
      ['Perimeter of a triangle ' + m('x, x, 2x − 1'), m('4x − 1')]
    ],
    hard: [
      [m('3(2a − b) − 2(3a − 2b)'), m('b')],
      [m('4x² − 3x + 1 − (x² − 3x + 5)'), m('3x² − 4')],
      [m('a − [2a − (3a − b)]'), m('2a − b')],
      [m('2(x + y) − 3(x − y) + x'), m('5y')],
      ['Perimeter of a square of side ' + m('3x − 2'), m('12x − 8')],
      ['A rectangle ' + m('x + 3') + ' by ' + m('x − 3') + ': its perimeter', m('4x')],
      ['Simplify ' + m('5ab − 2ba'), m('3ab')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write the expanded line in full before collecting anything.',
  homework: [
    'Collect ' + m('6a + 2b − 4a + 7b') + '.',
    'Simplify ' + m('3(x + 4) − 2(x − 1)') + '.',
    'Simplify ' + m('y − (4y − 7)') + '.',
    'Find and simplify the perimeter of a rectangle ' + m('2x + 1') + ' by ' + m('x − 2') + '.',
    'Simplify ' + m('5m² + 2m − 3m² − 6m') + '.'
  ]
});

/* ============================== 40 ============================== */
G7_MAT.push({
  id: 'g7-40', stream: 'mat', grade: 7, quarter: 2, lessons: '71–72', hours: 2,
  title: 'Addition and subtraction of polynomials',
  subtitle: 'Remove the brackets, collect the like terms — two steps and nothing more.',
  uz: 'Matematika 7, §33', uzPage: 'pp. 199–204',
  cam: 'S8 2.2', camPage: 'Stage 8, pp. 16–20', wb: 'Exercise 2.2',
  objectives: [
    'Add two polynomials.',
    'Subtract one polynomial from another, changing every sign.',
    'Simplify an expression containing several polynomials.',
    'Check an answer by substituting a value.'
  ],
  terms: [
    ['Sum of polynomials', 'Ko‘phadlar yig‘indisi', 'Сумма многочленов'],
    ['Difference', 'Ayirma', 'Разность'],
    ['To remove brackets', 'Qavslarni ochish', 'Раскрыть скобки'],
    ['Like terms', 'O‘xshash hadlar', 'Подобные члены'],
    ['Opposite polynomial', 'Qarama-qarshi ko‘phad', 'Противоположный многочлен'],
    ['Check by substitution', 'O‘rniga qo‘yib tekshirish', 'Проверка подстановкой'],
    ['Standard form', 'Standart ko‘rinish', 'Стандартный вид'],
    ['Degree', 'Daraja', 'Степень']
  ],
  timing: [[15, 'Adding'], [25, 'Subtracting'], [25, 'Longer expressions'], [20, 'Checking'], [5, 'Homework']],
  sections: [
    {
      h: 'Adding',
      html: `<p>A plus before a bracket leaves every sign as it is.</p>
      ${eq(m('(3x² − 2x + 5) + (x² + 4x − 1) = 4x² + 2x + 4'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Line</th></tr></thead>
      <tbody>
        <tr><td>remove brackets</td><td class="m">3x² − 2x + 5 + x² + 4x − 1</td></tr>
        <tr><td class="m">x²</td><td class="m">3x² + x² = 4x²</td></tr>
        <tr><td class="m">x</td><td class="m">−2x + 4x = 2x</td></tr>
        <tr><td>constants</td><td class="m">5 − 1 = 4</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Work one degree at a time</div>
      All the ${m('x²')} terms, then all the ${m('x')} terms, then the constants. Doing them in a fixed
      order means nothing is missed.</div>`
    },
    {
      h: 'Subtracting',
      html: `<p>A minus before a bracket changes <b>every</b> sign inside it.</p>
      ${eq(m('(3x² − 2x + 5) − (x² + 4x − 1) = 2x² − 6x + 6'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Line</th></tr></thead>
      <tbody>
        <tr><td>remove brackets</td><td class="m">3x² − 2x + 5 − x² − 4x + 1</td></tr>
        <tr><td class="m">x²</td><td class="m">3x² − x² = 2x²</td></tr>
        <tr><td class="m">x</td><td class="m">−2x − 4x = −6x</td></tr>
        <tr><td>constants</td><td class="m">5 + 1 = 6</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">All three signs change, not just the first</span>
      ${m('−(x² + 4x − 1)')} is ${m('−x² − 4x + 1')}. Writing that line out in full, before collecting,
      is the single most useful habit in this topic.</div>`
    },
    {
      h: 'Longer expressions',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">(a + b) + (a − b)</td><td class="m">2a</td></tr>
        <tr><td class="m">(a + b) − (a − b)</td><td class="m">2b</td></tr>
        <tr><td class="m">(2x − 3) + (x + 1) − (x − 4)</td><td class="m">2x + 2</td></tr>
        <tr><td class="m">2(x² − x) − 3(x² + x)</td><td class="m">−x² − 5x</td></tr>
      </tbody></table></div>
      <p>The last row combines this lesson with the distributive law: expand first, then collect.</p>
      <div class="keybox"><div class="klabel">The degree never rises</div>
      Adding or subtracting polynomials of degree ${m('2')} gives a polynomial of degree at most
      ${m('2')} — and sometimes less, if the leading terms cancel.</div>`
    },
    {
      h: 'Checking',
      html: `<p>Substitute one convenient value into the original and into the answer. If they differ, the
      simplification is wrong.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Check</th><th>Original at ${m('x = 1')}</th><th>Answer at ${m('x = 1')}</th></tr></thead>
      <tbody>
        <tr><td class="m">(3x² − 2x + 5) + (x² + 4x − 1)</td><td class="m">6 + 4 = 10</td><td class="m">4 + 2 + 4 = 10 ✓</td></tr>
        <tr><td class="m">(3x² − 2x + 5) − (x² + 4x − 1)</td><td class="m">6 − 4 = 2</td><td class="m">2 − 6 + 6 = 2 ✓</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Use ${m('x = 1')}, or ${m('x = 2')} if terms cancel</div>
      At ${m('x = 1')} every power is ${m('1')}, so the check is a sum of the coefficients — the quickest
      arithmetic there is. If it happens to give ${m('0')} on both sides by accident, try ${m('x = 2')}
      as well.</div>`
    }
  ],
  examples: [
    {
      q: 'Compute ' + m('(3x² − 2x + 5) + (x² + 4x − 1)') + '.',
      steps: [
        ['A plus: signs unchanged.', ''],
        [m('3x² − 2x + 5 + x² + 4x − 1'), ''],
        ['Collect by degree.', ''],
        [m('= 4x² + 2x + 4'), 'Check at ' + m('x = 1') + ': ' + m('10 = 10') + ' ✓']
      ],
      ans: m('4x² + 2x + 4')
    },
    {
      q: 'Compute ' + m('(3x² − 2x + 5) − (x² + 4x − 1)') + '.',
      steps: [
        ['A minus: every sign in the second bracket changes.', ''],
        [m('3x² − 2x + 5 − x² − 4x + 1'), ''],
        ['Collect by degree.', ''],
        [m('= 2x² − 6x + 6'), 'Check at ' + m('x = 1') + ': ' + m('2 = 2') + ' ✓']
      ],
      ans: m('2x² − 6x + 6')
    },
    {
      q: 'Simplify ' + m('2(x² − x) − 3(x² + x)') + '.',
      steps: [
        ['Expand: ' + m('2x² − 2x') + ' and ' + m('−3x² − 3x') + '.', ''],
        [m('2x² − 2x − 3x² − 3x'), ''],
        [m('x²') + ': ' + m('−x²') + '; ' + m('x') + ': ' + m('−5x') + '.', ''],
        [m('= −x² − 5x'), '']
      ],
      ans: m('−x² − 5x')
    }
  ],
  modelNote: 'Do one subtraction wrongly on purpose — changing only the first sign — and check it at x = 1; the check fails, and the class sees why the habit matters.',
  interactive: {
    type: 'substitute',
    title: 'Checking a simplification',
    hint: 'Substitute x = 1 into both forms.'
  },
  quiz: [
    { q: 'A plus before a bracket:', a: ['changes all signs', 'changes none', 'changes the first', 'removes the terms'], c: 1, why: 'Nothing happens.' },
    { q: 'A minus before a bracket:', a: ['changes all signs', 'changes none', 'changes the first', 'doubles the terms'], c: 0, why: 'Every one.' },
    { q: m('(a + b) − (a − b)') + ' equals:', a: [m('2a'), m('2b'), m('0'), m('2a + 2b')], c: 1, why: 'The ' + m('a') + ' terms cancel.' },
    { q: m('(3x² − 2x + 5) − (x² + 4x − 1)') + ' equals:', a: [m('2x² + 2x + 4'), m('2x² − 6x + 6'), m('4x² + 2x + 4'), m('2x² − 6x + 4')], c: 1, why: 'All three signs change.' },
    { q: 'The best value for a quick check:', a: [m('x = 0'), m('x = 1'), m('x = 10'), m('x = −1')], c: 1, why: 'Every power is ' + m('1') + '.' },
    { q: 'Adding two polynomials of degree ' + m('2') + ' gives degree:', a: ['exactly ' + m('2'), 'at most ' + m('2'), 'exactly ' + m('4'), 'at least ' + m('2')], c: 1, why: 'Leading terms may cancel.' }
  ],
  practice: {
    easy: [
      [m('(a + b) + (a − b)'), m('2a')],
      [m('(a + b) − (a − b)'), m('2b')],
      [m('(x + 2) + (x + 3)'), m('2x + 5')],
      [m('(x + 2) − (x + 3)'), m('−1')],
      [m('(2x − 1) + (3x + 4)'), m('5x + 3')],
      [m('(2x − 1) − (3x + 4)'), m('−x − 5')],
      ['A minus before a bracket', 'Changes every sign']
    ],
    med: [
      [m('(3x² − 2x + 5) + (x² + 4x − 1)'), m('4x² + 2x + 4')],
      [m('(3x² − 2x + 5) − (x² + 4x − 1)'), m('2x² − 6x + 6')],
      [m('(2x − 3) + (x + 1) − (x − 4)'), m('2x + 2')],
      [m('2(x² − x) − 3(x² + x)'), m('−x² − 5x')],
      [m('(a² + ab) − (ab − b²)'), m('a² + b²')],
      [m('(5m − 2n) − (3m − 7n)'), m('2m + 5n')],
      ['Check ' + m('4x² + 2x + 4') + ' at ' + m('x = 1'), m('10')]
    ],
    hard: [
      [m('(x³ − 2x² + x) − (x³ + x² − 3x)'), m('−3x² + 4x')],
      [m('3(2a − b) − 2(a − 3b) + (a − b)'), m('5a + 2b')],
      ['Subtract ' + m('x² − 3x + 2') + ' from ' + m('2x² + x − 5'), m('x² + 4x − 7')],
      ['What must be added to ' + m('3x − 4') + ' to give ' + m('5x + 1') + '?', m('2x + 5')],
      [m('(a + b + c) − (a − b + c)'), m('2b')],
      ['The degree of ' + m('(x² + x) − (x² − x)'), m('1')],
      ['Simplify ' + m('(2x² − 3) + (3 − 2x²)'), m('0')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write the bracket-free line in full, then collect, then check at ' + m('x = 1') + '.',
  homework: [
    'Compute ' + m('(4x² + x − 3) + (2x² − 5x + 7)') + '.',
    'Compute ' + m('(4x² + x − 3) − (2x² − 5x + 7)') + '.',
    'Simplify ' + m('3(a − 2b) − 2(2a − b)') + '.',
    'Subtract ' + m('2y² − y + 4') + ' from ' + m('5y² + 3y − 1') + '.',
    'What must be added to ' + m('7m − 2') + ' to give ' + m('4m + 5') + '?'
  ]
});

/* ============================== 41 ============================== */
G7_MAT.push({
  id: 'g7-41', stream: 'mat', grade: 7, quarter: 2, lessons: '73–74', hours: 2,
  title: 'Multiplication of polynomials',
  subtitle: 'Every term of the first times every term of the second — and a rectangle explains why.',
  uz: 'Matematika 7, §34', uzPage: 'pp. 205–211',
  cam: 'S8 2.3', camPage: 'Stage 8, pp. 18–24', wb: 'Exercise 2.3',
  objectives: [
    'Multiply a polynomial by a monomial.',
    'Multiply two binomials and collect the result.',
    'Multiply a binomial by a trinomial.',
    'Use an area diagram to justify the expansion.'
  ],
  terms: [
    ['To multiply out', 'Ko‘paytirish', 'Умножение'],
    ['To expand', 'Yoyish', 'Раскрыть'],
    ['Binomial', 'Ikki had', 'Двучлен'],
    ['Trinomial', 'Uch had', 'Трёхчлен'],
    ['Every term', 'Har bir had', 'Каждый член'],
    ['Area diagram', 'Yuza chizmasi', 'Схема площадей'],
    ['To collect', 'Ixchamlash', 'Приведение подобных'],
    ['Product', 'Ko‘paytma', 'Произведение']
  ],
  timing: [[15, 'By a monomial'], [25, 'Two binomials'], [25, 'The area picture'], [20, 'Longer products'], [5, 'Homework']],
  sections: [
    {
      h: 'By a monomial',
      html: `${eq(m('k(a + b + c) = ka + kb + kc'), true)}
      <p>Multiply every term — including the last, and including the signs.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Product</th><th>Expanded</th></tr></thead>
      <tbody>
        <tr><td class="m">3x(x − 4)</td><td class="m">3x² − 12x</td></tr>
        <tr><td class="m">−2a(a² − 3a + 1)</td><td class="m">−2a³ + 6a² − 2a</td></tr>
        <tr><td class="m">xy(x + y)</td><td class="m">x²y + xy²</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The last term is the one most often forgotten</span>
      In ${m('−2a(a² − 3a + 1)')} the third term gives ${m('−2a')}. Counting the terms before and after
      expanding catches the omission.</div>`
    },
    {
      h: 'Two binomials',
      html: `${eq(m('(a + b)(c + d) = ac + ad + bc + bd'), true)}
      <p>Four products, one for each pair. Then collect any like terms.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Product</th><th>Four terms</th><th>Collected</th></tr></thead>
      <tbody>
        <tr><td class="m">(x + 2)(x + 3)</td><td class="m">x² + 3x + 2x + 6</td><td class="m">x² + 5x + 6</td></tr>
        <tr><td class="m">(x − 2)(x + 5)</td><td class="m">x² + 5x − 2x − 10</td><td class="m">x² + 3x − 10</td></tr>
        <tr><td class="m">(2a − 1)(a + 4)</td><td class="m">2a² + 8a − a − 4</td><td class="m">2a² + 7a − 4</td></tr>
        <tr><td class="m">(x − 3)(x + 3)</td><td class="m">x² + 3x − 3x − 9</td><td class="m">x² − 9</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The last row is worth remembering</div>
      The middle terms cancel and only ${m('x² − 9')} survives. That pattern — the difference of two
      squares — is the subject of a whole lesson in Quarter III.</div>`
    },
    {
      h: 'The area picture',
      html: `<p>A rectangle of sides ${m('a + b')} and ${m('c + d')} splits into four smaller
      rectangles.</p>
      {{fig:areaParallelogram:A rectangle cut into four — the four products of the expansion.}}
      <div class="tablewrap"><table>
      <thead><tr><th></th><th class="m">c</th><th class="m">d</th></tr></thead>
      <tbody>
        <tr><td class="m">a</td><td class="m">ac</td><td class="m">ad</td></tr>
        <tr><td class="m">b</td><td class="m">bc</td><td class="m">bd</td></tr>
      </tbody></table></div>
      <p>The whole area is the sum of the four parts — which is exactly the expansion. The grid also
      makes it impossible to miss a product.</p>
      <div class="keybox"><div class="klabel">Use the grid when there are more than four products</div>
      For a binomial times a trinomial there are six, and a ${m('2 × 3')} grid keeps them all in
      view.</div>`
    },
    {
      h: 'Longer products',
      html: `<p><b>Example.</b> ${m('(x + 2)(x² − 3x + 1)')}. Six products:</p>
      <div class="tablewrap"><table>
      <thead><tr><th></th><th class="m">x²</th><th class="m">−3x</th><th class="m">+1</th></tr></thead>
      <tbody>
        <tr><td class="m">x</td><td class="m">x³</td><td class="m">−3x²</td><td class="m">x</td></tr>
        <tr><td class="m">+2</td><td class="m">2x²</td><td class="m">−6x</td><td class="m">2</td></tr>
      </tbody></table></div>
      ${eq(m('x³ − 3x² + 2x² + x − 6x + 2 = x³ − x² − 5x + 2'), true)}
      <div class="keybox"><div class="klabel">The degree of a product is the sum of the degrees</div>
      Here ${m('1 + 2 = 3')}, and the answer is cubic. Checking the degree first tells you what to
      expect before any arithmetic.</div>`
    }
  ],
  examples: [
    {
      q: 'Expand ' + m('−2a(a² − 3a + 1)') + '.',
      steps: [
        [m('−2a × a² = −2a³'), ''],
        [m('−2a × (−3a) = 6a²'), 'Two minuses.'],
        [m('−2a × 1 = −2a'), ''],
        [m('= −2a³ + 6a² − 2a'), 'Three terms in, three out.']
      ],
      ans: m('−2a³ + 6a² − 2a')
    },
    {
      q: 'Expand ' + m('(x − 2)(x + 5)') + '.',
      steps: [
        [m('x · x = x²') + ', ' + m('x · 5 = 5x') + '.', ''],
        [m('−2 · x = −2x') + ', ' + m('−2 · 5 = −10') + '.', ''],
        [m('x² + 5x − 2x − 10'), ''],
        [m('= x² + 3x − 10'), '']
      ],
      ans: m('x² + 3x − 10')
    },
    {
      q: 'Expand ' + m('(x + 2)(x² − 3x + 1)') + '.',
      steps: [
        [m('x') + ' row: ' + m('x³ − 3x² + x') + '.', ''],
        [m('+2') + ' row: ' + m('2x² − 6x + 2') + '.', ''],
        ['Add and collect.', ''],
        [m('= x³ − x² − 5x + 2'), 'Degree ' + m('3') + ' ✓']
      ],
      ans: m('x³ − x² − 5x + 2')
    }
  ],
  modelNote: 'Draw the rectangle for (x + 2)(x + 3) with its four parts labelled; the expansion is read off the picture before any rule is stated.',
  interactive: {
    type: 'areaModel',
    title: 'Expanding as an area',
    hint: 'Four rectangles, four products.'
  },
  quiz: [
    { q: m('3x(x − 4)') + ' equals:', a: [m('3x² − 4'), m('3x² − 12x'), m('3x − 12x'), m('3x² − 12')], c: 1, why: 'Both terms are multiplied.' },
    { q: m('(a + b)(c + d)') + ' gives how many products?', a: [m('2'), m('3'), m('4'), m('6')], c: 2, why: 'One for each pair.' },
    { q: m('(x + 2)(x + 3)') + ' equals:', a: [m('x² + 6'), m('x² + 5x + 6'), m('x² + 6x + 5'), m('2x + 5')], c: 1, why: 'Collect the middle terms.' },
    { q: m('(x − 3)(x + 3)') + ' equals:', a: [m('x² − 9'), m('x² + 9'), m('x² − 6x − 9'), m('x² − 6x + 9')], c: 0, why: 'The middle terms cancel.' },
    { q: 'A binomial times a trinomial gives:', a: [m('4') + ' products', m('5') + ' products', m('6') + ' products', m('3') + ' products'], c: 2, why: m('2 × 3') + '.' },
    { q: 'The degree of a product is:', a: ['the larger degree', 'the sum of the degrees', 'always ' + m('2'), 'unchanged'], c: 1, why: 'The exponents add.' }
  ],
  practice: {
    easy: [
      [m('3x(x − 4)'), m('3x² − 12x')],
      [m('2a(a + 5)'), m('2a² + 10a')],
      [m('xy(x + y)'), m('x²y + xy²')],
      [m('(x + 2)(x + 3)'), m('x² + 5x + 6')],
      [m('(x + 1)(x + 4)'), m('x² + 5x + 4')],
      [m('(x − 3)(x + 3)'), m('x² − 9')],
      [m('(x + 5)(x − 5)'), m('x² − 25')]
    ],
    med: [
      [m('−2a(a² − 3a + 1)'), m('−2a³ + 6a² − 2a')],
      [m('(x − 2)(x + 5)'), m('x² + 3x − 10')],
      [m('(2a − 1)(a + 4)'), m('2a² + 7a − 4')],
      [m('(3x + 2)(x − 1)'), m('3x² − x − 2')],
      [m('(x + 2)(x² − 3x + 1)'), m('x³ − x² − 5x + 2')],
      [m('(a − b)(a + b)'), m('a² − b²')],
      [m('(2x − 3)(2x + 3)'), m('4x² − 9')]
    ],
    hard: [
      [m('(x + 1)(x + 2)(x + 3)'), m('x³ + 6x² + 11x + 6')],
      [m('(a + b)²'), m('a² + 2ab + b²')],
      [m('(a − b)²'), m('a² − 2ab + b²')],
      [m('(2x − 1)(x² + x − 3)'), m('2x³ + x² − 7x + 3')],
      ['A rectangle ' + m('(x + 3)') + ' by ' + m('(x + 5)') + ': its area', m('x² + 8x + 15')],
      ['Its perimeter', m('4x + 16')],
      [m('(x + a)(x + b)') + ' in general', m('x² + (a + b)x + ab')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Count the products you expect before expanding, and again afterwards.',
  homework: [
    'Expand ' + m('4x(2x − 3)') + ' and ' + m('−3a(a² + 2a − 5)') + '.',
    'Expand ' + m('(x + 4)(x + 6)') + ' and ' + m('(x − 4)(x + 6)') + '.',
    'Expand ' + m('(3a + 2)(2a − 5)') + '.',
    'Expand ' + m('(x − 1)(x² + 2x + 3)') + '.',
    'A rectangle has sides ' + m('x + 2') + ' and ' + m('x + 7') + '. Find its area and perimeter.'
  ]
});

/* ============================== 42 ============================== */
G7_MAT.push({
  id: 'g7-42', stream: 'mat', grade: 7, quarter: 2, lessons: '75–76', hours: 2,
  title: 'Division of polynomials',
  subtitle: 'Dividing by a monomial — term by term, and only when it goes exactly.',
  uz: 'Matematika 7, §35', uzPage: 'pp. 212–217',
  cam: 'S8 2.3', camPage: 'Stage 8, pp. 18–24', wb: 'Exercise 2.3',
  objectives: [
    'Divide a polynomial by a monomial, term by term.',
    'Decide when the quotient is again a polynomial.',
    'Use division to reverse a multiplication.',
    'Simplify an algebraic fraction whose denominator is a monomial.'
  ],
  terms: [
    ['Division', 'Bo‘lish', 'Деление'],
    ['Quotient', 'Bo‘linma', 'Частное'],
    ['Term by term', 'Hadma-had', 'Почленно'],
    ['Exactly divisible', 'Butun bo‘linadi', 'Делится нацело'],
    ['Common factor', 'Umumiy ko‘paytuvchi', 'Общий множитель'],
    ['To reverse', 'Teskari amal', 'Обратное действие'],
    ['Algebraic fraction', 'Algebraik kasr', 'Алгебраическая дробь'],
    ['Check', 'Tekshirish', 'Проверка']
  ],
  timing: [[15, 'Term by term'], [25, 'When it works'], [25, 'Reversing a multiplication'], [20, 'Simplifying fractions'], [5, 'Homework']],
  sections: [
    {
      h: 'Term by term',
      html: `${eq(m(f('a + b + c', 'k') + ' = ' + f('a', 'k') + ' + ' + f('b', 'k') + ' + ' + f('c', 'k')), true)}
      <p>Divide each term of the polynomial by the monomial.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Quotient</th><th>Term by term</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">(6x² + 9x) ÷ 3x</td><td class="m">${f('6x²', '3x')} + ${f('9x', '3x')}</td><td class="m">2x + 3</td></tr>
        <tr><td class="m">(8a³ − 4a²) ÷ 4a²</td><td class="m">2a − 1</td><td class="m">2a − 1</td></tr>
        <tr><td class="m">(10x³y − 15x²y²) ÷ 5x²y</td><td class="m">2x − 3y</td><td class="m">2x − 3y</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Every term is divided, including the last</span>
      ${m('(8a³ − 4a²) ÷ 4a²')} is ${m('2a − 1')}, not ${m('2a')}. The second term gives ${m('−1')}, and
      dropping it is the standard slip.</div>`
    },
    {
      h: 'When it works',
      html: `<p>The quotient is a polynomial only if the monomial divides <b>every</b> term exactly — the
      coefficients and each letter.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Division</th><th>Polynomial?</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td class="m">(6x² + 9x) ÷ 3x</td><td>yes</td><td>${m('3x')} divides both terms</td></tr>
        <tr><td class="m">(6x² + 9x) ÷ 3x²</td><td>no</td><td>${m('3x²')} does not divide ${m('9x')}</td></tr>
        <tr><td class="m">(4a + 6b) ÷ 2</td><td>yes</td><td>${m('2')} divides both terms</td></tr>
        <tr><td class="m">(4a + 5b) ÷ 2</td><td>no</td><td>${m('2')} does not divide ${m('5b')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The divisor must be a common factor</div>
      Finding the highest common factor of all the terms tells you at once what the polynomial can be
      divided by — and that is exactly what factorising will use two lessons from now.</div>`
    },
    {
      h: 'Reversing a multiplication',
      html: `<p>Division undoes multiplication, so every division can be checked by multiplying back.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Division</th><th>Answer</th><th>Check</th></tr></thead>
      <tbody>
        <tr><td class="m">(6x² + 9x) ÷ 3x</td><td class="m">2x + 3</td><td class="m">3x(2x + 3) = 6x² + 9x ✓</td></tr>
        <tr><td class="m">(10a² − 5a) ÷ 5a</td><td class="m">2a − 1</td><td class="m">5a(2a − 1) = 10a² − 5a ✓</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">One multiplication checks the whole division</div>
      It takes ten seconds and catches every slip, including the dropped last term. There is no faster
      check in algebra.</div>`
    },
    {
      h: 'Simplifying fractions',
      html: `<p>An algebraic fraction is simplified by cancelling the common factors of numerator and
      denominator.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Fraction</th><th>Simplified</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('12a³', '4a')}</td><td class="m">3a²</td></tr>
        <tr><td class="m">${f('6x² + 9x', '3x')}</td><td class="m">2x + 3</td></tr>
        <tr><td class="m">${f('5ab', '10a²')}</td><td class="m">${f('b', '2a')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Cancel factors, never terms</span>
      In ${m(f('6x² + 9x', '3x'))} the whole numerator is divided. Cancelling the ${m('x')} of ${m('9x')}
      against the denominator alone, and leaving the ${m('6x²')} untouched, is wrong — the division
      applies to every term or to none.</div>`
    }
  ],
  examples: [
    {
      q: 'Compute ' + m('(6x² + 9x) ÷ 3x') + '.',
      steps: [
        [m(f('6x²', '3x') + ' = 2x'), ''],
        [m(f('9x', '3x') + ' = 3'), ''],
        [m('= 2x + 3'), ''],
        ['Check: ' + m('3x(2x + 3) = 6x² + 9x') + ' ✓', '']
      ],
      ans: m('2x + 3')
    },
    {
      q: 'Compute ' + m('(10x³y − 15x²y²) ÷ 5x²y') + '.',
      steps: [
        ['First term: ' + m(f('10x³y', '5x²y') + ' = 2x') + '.', ''],
        ['Second: ' + m(f('−15x²y²', '5x²y') + ' = −3y') + '.', ''],
        [m('= 2x − 3y'), ''],
        ['Check: ' + m('5x²y(2x − 3y) = 10x³y − 15x²y²') + ' ✓', '']
      ],
      ans: m('2x − 3y')
    },
    {
      q: 'Is ' + m('(6x² + 9x) ÷ 3x²') + ' a polynomial?',
      steps: [
        ['First term: ' + m(f('6x²', '3x²') + ' = 2') + ' ✓', ''],
        ['Second: ' + m(f('9x', '3x²') + ' = ' + f('3', 'x')) + '.', ''],
        ['That is not a monomial.', ''],
        ['No — the quotient is not a polynomial.', '']
      ],
      ans: 'No'
    }
  ],
  modelNote: 'Ask the class to check every division by multiplying back, and mark only the checks for one lesson; the accuracy of the divisions rises immediately.',
  interactive: {
    type: 'fractionCancel',
    title: 'Cancelling common factors',
    hint: 'Every term of the numerator is divided.'
  },
  quiz: [
    { q: 'To divide a polynomial by a monomial:', a: ['divide the first term', 'divide every term', 'multiply', 'cancel one letter'], c: 1, why: 'Term by term.' },
    { q: m('(8a³ − 4a²) ÷ 4a²') + ' equals:', a: [m('2a'), m('2a − 1'), m('2a³'), m('2a − 4')], c: 1, why: 'The second term gives ' + m('−1') + '.' },
    { q: m('(6x² + 9x) ÷ 3x') + ' equals:', a: [m('2x'), m('2x + 3'), m('2x + 9'), m('2x² + 3')], c: 1, why: 'Both terms divided.' },
    { q: m('(6x² + 9x) ÷ 3x²') + ' is:', a: ['a polynomial', 'not a polynomial', 'a monomial', 'zero'], c: 1, why: m(f('3', 'x')) + ' appears.' },
    { q: 'A division is checked by:', a: ['dividing again', 'multiplying back', 'estimating', 'nothing'], c: 1, why: 'It undoes the division.' },
    { q: 'In an algebraic fraction you may cancel:', a: ['terms', 'factors', 'anything', 'signs'], c: 1, why: 'Only common factors.' }
  ],
  practice: {
    easy: [
      [m('(6x² + 9x) ÷ 3x'), m('2x + 3')],
      [m('(8a³ − 4a²) ÷ 4a²'), m('2a − 1')],
      [m('(4a + 6b) ÷ 2'), m('2a + 3b')],
      [m(f('12a³', '4a')), m('3a²')],
      [m('(10a² − 5a) ÷ 5a'), m('2a − 1')],
      [m('(x² + x) ÷ x'), m('x + 1')],
      [m('(9y³ + 3y) ÷ 3y'), m('3y² + 1')]
    ],
    med: [
      [m('(10x³y − 15x²y²) ÷ 5x²y'), m('2x − 3y')],
      [m('(12a²b + 8ab²) ÷ 4ab'), m('3a + 2b')],
      [m(f('5ab', '10a²')), m(f('b', '2a'))],
      ['Is ' + m('(6x² + 9x) ÷ 3x²') + ' a polynomial?', 'No'],
      ['Is ' + m('(4a + 5b) ÷ 2') + ' a polynomial?', 'No'],
      ['Check ' + m('2x + 3') + ' by multiplying by ' + m('3x'), m('6x² + 9x')],
      [m('(a³ − a²) ÷ a²'), m('a − 1')]
    ],
    hard: [
      [m('(15x⁴y² − 10x³y³ + 5x²y) ÷ 5x²y'), m('3x²y − 2xy² + 1')],
      [m(f('4a²b − 6ab²', '2ab')), m('2a − 3b')],
      ['What must ' + m('3x') + ' be multiplied by to give ' + m('12x³ − 9x²') + '?', m('4x² − 3x')],
      [m(f('x² − x', 'x')), m('x − 1')],
      ['The HCF of ' + m('6x²') + ' and ' + m('9x'), m('3x')],
      ['Divide ' + m('8a³b − 12a²b² + 4ab') + ' by its HCF', m('2a² − 3ab + 1')],
      ['Why must the divisor be a common factor?', 'Otherwise some term gives a fraction']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Check every division by multiplying the answer by the divisor.',
  homework: [
    'Compute ' + m('(12x² − 8x) ÷ 4x') + '.',
    'Compute ' + m('(9a³b − 6a²b²) ÷ 3a²b') + '.',
    'Simplify ' + m(f('20m³', '5m')) + '.',
    'Is ' + m('(10x² + 4x) ÷ 4x²') + ' a polynomial? Explain.',
    'Find the HCF of ' + m('8a²b') + ' and ' + m('12ab²') + ', and divide their sum by it.'
  ]
});

/* ============================== 43 ============================== */
G7_MAT.push({
  id: 'g7-43', stream: 'mat', grade: 7, quarter: 2, lessons: '77–78', hours: 2,
  title: 'Factorising a polynomial',
  subtitle: 'Taking out the common factor, and grouping when there is no single one.',
  uz: 'Matematika 7, §36', uzPage: 'pp. 218–224',
  cam: 'S8 2.4', camPage: 'Stage 8, pp. 25–30', wb: 'Exercise 2.4',
  objectives: [
    'Find the highest common factor of the terms of a polynomial.',
    'Take that factor outside a bracket, and check by expanding.',
    'Factorise a four-term polynomial by grouping.',
    'Use a factorised form to evaluate an expression quickly.'
  ],
  terms: [
    ['To factorise', 'Ko‘paytuvchilarga ajratish', 'Разложить на множители'],
    ['Factor', 'Ko‘paytuvchi', 'Множитель'],
    ['Highest common factor', 'Eng katta umumiy bo‘luvchi', 'Наибольший общий делитель'],
    ['To take outside the bracket', 'Qavsdan tashqariga chiqarish', 'Вынести за скобку'],
    ['Grouping', 'Guruhlash', 'Группировка'],
    ['Product', 'Ko‘paytma', 'Произведение'],
    ['Sum', 'Yig‘indi', 'Сумма'],
    ['Check by expanding', 'Qavsni ochib tekshirish', 'Проверка раскрытием']
  ],
  timing: [[10, 'The idea'], [25, 'The common factor'], [25, 'Grouping'], [25, 'What it is for'], [5, 'Homework']],
  sections: [
    {
      h: 'The idea',
      html: `<p>Expanding turns a product into a sum. <b>Factorising</b> is the same road travelled
      backwards: it turns a sum into a product.</p>
      ${eq(m('3x(2x + 3) = 6x² + 9x') + '   →   ' + m('6x² + 9x = 3x(2x + 3)'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Direction</th><th>Start</th><th>Finish</th></tr></thead>
      <tbody>
        <tr><td>expanding</td><td class="m">3x(2x + 3)</td><td class="m">6x² + 9x</td></tr>
        <tr><td>factorising</td><td class="m">6x² + 9x</td><td class="m">3x(2x + 3)</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The check is free</div>
      Every factorisation can be checked by expanding it again. If the expansion does not return the
      original polynomial exactly, the factorisation is wrong — there is nothing to argue about.</div>`
    },
    {
      h: 'The common factor',
      html: `<p>Take the highest common factor of <b>all</b> the terms outside the bracket. For the
      numbers that is their HCF; for each letter it is the lowest power that appears in every term.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Polynomial</th><th>HCF</th><th>Factorised</th></tr></thead>
      <tbody>
        <tr><td class="m">6x² + 9x</td><td class="m">3x</td><td class="m">3x(2x + 3)</td></tr>
        <tr><td class="m">8a³ − 4a²</td><td class="m">4a²</td><td class="m">4a²(2a − 1)</td></tr>
        <tr><td class="m">10x³y − 15x²y²</td><td class="m">5x²y</td><td class="m">5x²y(2x − 3y)</td></tr>
        <tr><td class="m">12a²b + 8ab² − 4ab</td><td class="m">4ab</td><td class="m">4ab(3a + 2b − 1)</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A term that is entirely the factor leaves a 1</span>
      In ${m('12a²b + 8ab² − 4ab')} the last term is ${m('−4ab')}, which is the factor itself; inside the
      bracket it becomes ${m('−1')}, not nothing. Losing that ${m('1')} is the commonest error of the
      whole topic, and expanding back catches it at once.</div>`
    },
    {
      h: 'Grouping',
      html: `<p>When the four terms have no common factor between all of them, split them into two pairs
      that do, and a common bracket appears.</p>
      ${eq(m('ax + ay + bx + by = a(x + y) + b(x + y) = (x + y)(a + b)'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td>the polynomial</td><td class="m">2x² + 6x + ax + 3a</td></tr>
        <tr><td>pair them</td><td class="m">(2x² + 6x) + (ax + 3a)</td></tr>
        <tr><td>factorise each pair</td><td class="m">2x(x + 3) + a(x + 3)</td></tr>
        <tr><td>the bracket is common</td><td class="m">(x + 3)(2x + a)</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A minus in front of the second pair changes both signs</span>
      ${m('x² − 3x − 2x + 6')} pairs as ${m('x(x − 3) − 2(x − 3)')}, giving ${m('(x − 3)(x − 2)')}. Writing
      ${m('− 2(x + 3)')} there is a sign slip, and the two brackets then fail to match.</div>`
    },
    {
      h: 'What it is for',
      html: `<p>A product is easier to evaluate, easier to cancel and — next year — the only way to solve
      an equation.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Use</th><th>Example</th><th>Why the product helps</th></tr></thead>
      <tbody>
        <tr><td>evaluating</td><td class="m">37 · 24 + 37 · 76</td><td class="m">37(24 + 76) = 3700</td></tr>
        <tr><td>cancelling</td><td class="m">${f('6x² + 9x', '3x')}</td><td class="m">${f('3x(2x + 3)', '3x')} = 2x + 3</td></tr>
        <tr><td>divisibility</td><td class="m">n² + n</td><td class="m">n(n + 1)</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Why ${m('n² + n')} is always even</div>
      Factorised it is ${m('n(n + 1)')} — the product of two consecutive whole numbers, one of which must
      be even. In the unfactorised form the fact is invisible; that is the whole value of a product.</div>`
    }
  ],
  examples: [
    {
      q: 'Factorise ' + m('12a²b + 8ab² − 4ab') + '.',
      steps: [
        ['HCF of ' + m('12, 8, 4') + ' is ' + m('4') + '.', ''],
        ['Every term has ' + m('a') + ' and ' + m('b') + ', so the HCF is ' + m('4ab') + '.', ''],
        [m('= 4ab(3a + 2b − 1)'), 'The last term leaves ' + m('−1') + '.'],
        ['Check: ' + m('4ab(3a + 2b − 1) = 12a²b + 8ab² − 4ab') + ' ✓', '']
      ],
      ans: m('4ab(3a + 2b − 1)')
    },
    {
      q: 'Factorise ' + m('2x² + 6x + ax + 3a') + ' by grouping.',
      steps: [
        [m('(2x² + 6x) + (ax + 3a)'), ''],
        [m('2x(x + 3) + a(x + 3)'), 'The same bracket in both.'],
        [m('= (x + 3)(2x + a)'), ''],
        ['Check: ' + m('(x + 3)(2x + a) = 2x² + ax + 6x + 3a') + ' ✓', '']
      ],
      ans: m('(x + 3)(2x + a)')
    },
    {
      q: 'Evaluate ' + m('37 · 24 + 37 · 76') + ' without a calculator.',
      steps: [
        ['Both terms contain ' + m('37') + '.', ''],
        [m('= 37(24 + 76)'), ''],
        [m('= 37 · 100'), ''],
        [m('= 3700'), '']
      ],
      ans: m('3700')
    }
  ],
  modelNote: 'Give the class the factorised answers first and ask them to expand; when they then meet the sums, the factor is already familiar and the missing 1 stops appearing.',
  interactive: {
    type: 'areaModel',
    title: 'A common factor as one side of a rectangle',
    hint: 'The factor is the width; the bracket is the length.'
  },
  quiz: [
    { q: 'Factorising turns a sum into:', a: ['a difference', 'a product', 'a quotient', 'a power'], c: 1, why: 'The reverse of expanding.' },
    { q: m('6x² + 9x') + ' factorises to:', a: [m('3x(2x + 3)'), m('3x(2x + 9)'), m('x(6x + 9)'), m('3(2x² + 3x)')], c: 0, why: 'The HCF is ' + m('3x') + '.' },
    { q: 'In ' + m('12a²b + 8ab² − 4ab') + ' the last term leaves:', a: [m('0'), m('−1'), m('−4ab'), m('1')], c: 1, why: 'It is the factor itself.' },
    { q: 'Grouping is used when:', a: ['there are two terms', 'no factor is common to all', 'the terms are like', 'there is a power'], c: 1, why: 'Pair them instead.' },
    { q: m('ax + ay + bx + by') + ' equals:', a: [m('(x + y)(a + b)'), m('(a + x)(b + y)'), m('ab(x + y)'), m('(a + b)²')], c: 0, why: 'Group in pairs.' },
    { q: 'A factorisation is checked by:', a: ['dividing', 'expanding', 'substituting 0', 'nothing'], c: 1, why: 'It must return the original.' }
  ],
  practice: {
    easy: [
      [m('4x + 8'), m('4(x + 2)')],
      [m('6x² + 9x'), m('3x(2x + 3)')],
      [m('8a³ − 4a²'), m('4a²(2a − 1)')],
      [m('5x − 15'), m('5(x − 3)')],
      [m('x² + x'), m('x(x + 1)')],
      [m('9y³ + 3y'), m('3y(3y² + 1)')],
      [m('10ab − 5a'), m('5a(2b − 1)')]
    ],
    med: [
      [m('10x³y − 15x²y²'), m('5x²y(2x − 3y)')],
      [m('12a²b + 8ab² − 4ab'), m('4ab(3a + 2b − 1)')],
      [m('ax + ay + bx + by'), m('(x + y)(a + b)')],
      [m('2x² + 6x + ax + 3a'), m('(x + 3)(2x + a)')],
      [m('x² − 3x − 2x + 6'), m('(x − 3)(x − 2)')],
      [m('37 · 24 + 37 · 76'), m('3700')],
      [m('14m²n − 21mn²'), m('7mn(2m − 3n)')]
    ],
    hard: [
      [m('15x⁴y² − 10x³y³ + 5x²y'), m('5x²y(3x²y − 2xy² + 1)')],
      [m('3a(x − 2) + 5(x − 2)'), m('(x − 2)(3a + 5)')],
      [m('x(a − b) − y(b − a)'), m('(a − b)(x + y)')],
      ['Show that ' + m('n² + n') + ' is always even', m('n(n + 1)') + ' — one of them is even'],
      [m('56 · 19 + 56 · 81'), m('5600')],
      ['Simplify ' + m(f('4a²b − 6ab²', '2ab')) + ' by factorising first', m('2a − 3b')],
      ['Factorise ' + m('x³ + x² + x + 1'), m('(x + 1)(x² + 1)')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Expand every answer back; a factorisation that does not return the original is not an answer.',
  homework: [
    'Factorise ' + m('12x² − 8x') + ' and ' + m('9a³b − 6a²b²') + '.',
    'Factorise ' + m('6m²n + 9mn² − 3mn') + ', and say what the last term leaves.',
    'Factorise ' + m('3x² + 12x + ax + 4a') + ' by grouping.',
    'Evaluate ' + m('48 · 37 + 48 · 63') + ' by factorising.',
    'Explain, using a factorisation, why ' + m('n² − n') + ' is always even.'
  ]
});

/* ============================== 44 ============================== */
G7_MAT.push({
  id: 'g7-44', stream: 'mat', grade: 7, quarter: 2, lessons: '79–80', hours: 2,
  title: 'Control work 5, and work on the mistakes',
  subtitle: 'Expressions, powers, monomials and polynomials in one paper — Quarter II closed.',
  uz: 'Matematika 7, Nazorat ishi 5', uzPage: 'pp. 152–224',
  cam: 'S8 2 review', camPage: 'Stage 8, pp. 12–30', wb: 'Control paper M5',
  objectives: [
    'Apply the laws of indices without confusing them with the laws of arithmetic.',
    'Add, subtract, multiply and divide polynomials accurately under time.',
    'Factorise by the common factor and by grouping.',
    'Classify each lost mark and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Power', 'Daraja', 'Степень'],
    ['Monomial', 'Bir had', 'Одночлен'],
    ['Polynomial', 'Ko‘phad', 'Многочлен'],
    ['Like terms', 'O‘xshash hadlar', 'Подобные члены'],
    ['To expand', 'Qavsni ochish', 'Раскрыть скобки'],
    ['To factorise', 'Ko‘paytuvchilarga ajratish', 'Разложить на множители'],
    ['Diagnosis', 'Tashxis', 'Диагностика']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [12, 'Answers'], [20, 'Diagnosis and rewrite'], [5, 'The map']],
  sections: [
    {
      h: 'The paper — 25 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Simplify ${m('a⁵ · a³')}, ${m('a⁸ ÷ a³')}, ${m('(a²)⁴')} and ${m('a⁰')}</td><td class="m">4</td><td>L63–64</td></tr>
        <tr><td>2</td><td>Multiply the monomials ${m('3x²y')} and ${m('−4xy³')}</td><td class="m">3</td><td>L66–67</td></tr>
        <tr><td>3</td><td>Collect ${m('5a² − 3a + 2 − 2a² + 7a − 5')}</td><td class="m">4</td><td>L69–70</td></tr>
        <tr><td>4</td><td>Expand ${m('(x + 4)(x − 3)')} and ${m('−3a(a² + 2a − 5)')}</td><td class="m">5</td><td>L73–74</td></tr>
        <tr><td>5</td><td>Divide ${m('(10x³y − 15x²y²) ÷ 5x²y')}</td><td class="m">4</td><td>L75–76</td></tr>
        <tr><td>6</td><td>Factorise ${m('12a²b + 8ab² − 4ab')} and ${m('2x² + 6x + ax + 3a')}</td><td class="m">5</td><td>L77–78</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks actually go</div>
      Q1 carries one mark for ${m('a⁰ = 1')} alone; Q2 one for the sign; Q4 two for the four products of
      the binomial pair and one for the sign of the last term; Q6 one for the ${m('−1')} left by the third
      term and two for the common bracket in the grouping.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>indices multiplied</td><td class="m">a⁵ · a³ = a¹⁵</td><td class="m">a⁸ — add them</td></tr>
        <tr><td>zero index misread</td><td class="m">a⁰ = 0</td><td class="m">a⁰ = 1</td></tr>
        <tr><td>sign of a product</td><td class="m">3x²y · (−4xy³) = 12x³y⁴</td><td class="m">−12x³y⁴</td></tr>
        <tr><td>unlike terms collected</td><td class="m">5a² − 3a = 2a</td><td>they are not like</td></tr>
        <tr><td>only two products</td><td class="m">(x + 4)(x − 3) = x² − 12</td><td>all four, then collect</td></tr>
        <tr><td>last term of a division dropped</td><td class="m">2x</td><td class="m">2x − 3y</td></tr>
        <tr><td>the ${m('1')} lost when factorising</td><td class="m">4ab(3a + 2b)</td><td class="m">4ab(3a + 2b − 1)</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'Quarter II as one map',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Block</th><th>The sentence</th></tr></thead>
      <tbody>
        <tr><td>expressions</td><td>a letter stands for a number, so the laws of arithmetic still hold</td></tr>
        <tr><td>powers</td><td>an index counts the factors, so multiplying adds the indices</td></tr>
        <tr><td>monomials</td><td>one product of numbers and letters, with a degree</td></tr>
        <tr><td>polynomials</td><td>a sum of monomials; only like terms may be collected</td></tr>
        <tr><td>multiplication</td><td>every term of the first by every term of the second</td></tr>
        <tr><td>division</td><td>term by term, and only when the divisor is a common factor</td></tr>
        <tr><td>factorising</td><td>the common factor outside, or grouping in pairs</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Looking forward</div>
      Quarter III opens with geometry again — parallel lines, the angle sum of a triangle and
      right-angled triangles — and returns to algebra with the abridged multiplication formulae, which
      are the products of Q4 learned by heart.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q1: the four index tasks.',
      steps: [
        [m('a⁵ · a³ = a⁸'), 'Add the indices.'],
        [m('a⁸ ÷ a³ = a⁵'), 'Subtract them.'],
        [m('(a²)⁴ = a⁸'), 'Multiply them.'],
        [m('a⁰ = 1'), 'For every ' + m('a ≠ 0') + '.']
      ],
      ans: m('a⁸, a⁵, a⁸, 1')
    },
    {
      q: 'Model answer, Q4: expand ' + m('(x + 4)(x − 3)') + '.',
      steps: [
        [m('x · x = x²'), ''],
        [m('x · (−3) = −3x') + ' and ' + m('4 · x = 4x') + '.', ''],
        [m('4 · (−3) = −12'), 'The sign is the mark.'],
        [m('= x² + x − 12'), '']
      ],
      ans: m('x² + x − 12')
    },
    {
      q: 'Model answer, Q6: factorise ' + m('2x² + 6x + ax + 3a') + '.',
      steps: [
        [m('(2x² + 6x) + (ax + 3a)'), ''],
        [m('2x(x + 3) + a(x + 3)'), ''],
        [m('= (x + 3)(2x + a)'), ''],
        ['Check by expanding: ' + m('2x² + ax + 6x + 3a') + ' ✓', '']
      ],
      ans: m('(x + 3)(2x + a)')
    }
  ],
  modelNote: 'Hand back Q4 and Q6 together and ask which is which: expanding and factorising are one skill in two directions, and seeing them side by side fixes it.',
  interactive: {
    type: 'quiz',
    title: 'Quarter II in twelve questions',
    hint: 'Two from each block.',
    items: [
      { q: m('a⁵ · a³') + ' equals:', a: [m('a¹⁵'), m('a⁸'), m('a²'), m('2a⁸')], c: 1, why: 'Add the indices.' },
      { q: m('a⁸ ÷ a³') + ' equals:', a: [m('a⁵'), m('a¹¹'), m('a²'), m('a²⁴')], c: 0, why: 'Subtract them.' },
      { q: m('(a²)⁴') + ' equals:', a: [m('a⁶'), m('a⁸'), m('a¹⁶'), m('2a⁴')], c: 1, why: 'Multiply them.' },
      { q: m('a⁰') + ' equals:', a: [m('0'), m('1'), m('a'), 'undefined'], c: 1, why: 'For ' + m('a ≠ 0') + '.' },
      { q: 'The degree of ' + m('3x²y') + ' is:', a: [m('2'), m('3'), m('5'), m('1')], c: 1, why: m('2 + 1') + '.' },
      { q: m('3x²y · (−4xy³)') + ' equals:', a: [m('12x³y⁴'), m('−12x³y⁴'), m('−12x²y³'), m('−7x³y⁴')], c: 1, why: 'One minus sign.' },
      { q: 'Like terms differ only in:', a: ['the letters', 'the coefficient', 'the degree', 'the sign of the letter'], c: 1, why: 'The letter parts match.' },
      { q: m('5a² − 3a + 2 − 2a² + 7a − 5') + ' equals:', a: [m('3a² + 4a − 3'), m('7a² + 4a − 3'), m('3a² − 4a + 3'), m('3a² + 10a − 3')], c: 0, why: 'Collect each kind.' },
      { q: m('(x + 4)(x − 3)') + ' equals:', a: [m('x² − 12'), m('x² + x − 12'), m('x² + 7x − 12'), m('x² − x − 12')], c: 1, why: 'Four products.' },
      { q: m('(8a³ − 4a²) ÷ 4a²') + ' equals:', a: [m('2a'), m('2a − 1'), m('2a − 4'), m('2a³')], c: 1, why: 'Every term.' },
      { q: m('12a²b + 8ab² − 4ab') + ' factorises to:', a: [m('4ab(3a + 2b)'), m('4ab(3a + 2b − 1)'), m('ab(12a + 8b − 4)'), m('4(3a²b + 2ab² − ab)')], c: 1, why: 'The last term leaves ' + m('−1') + '.' },
      { q: 'A factorisation is checked by:', a: ['dividing', 'expanding', 'substituting', 'nothing'], c: 1, why: 'It must return the original.' }
    ]
  },
  quiz: [
    { q: 'Q1 is answered with:', a: ['the laws of arithmetic', 'the laws of indices', 'a calculator', 'estimation'], c: 1, why: 'Add, subtract, multiply the indices.' },
    { q: 'The sign in Q2 comes from:', a: ['the letters', 'one negative factor', 'the degree', 'the coefficients only'], c: 1, why: m('+ · − = −') + '.' },
    { q: 'In Q3 the terms ' + m('5a²') + ' and ' + m('−3a') + ' are:', a: ['like', 'not like', 'equal', 'opposite'], c: 1, why: 'Different powers.' },
    { q: 'Q4 needs how many products for the binomial pair?', a: [m('2'), m('3'), m('4'), m('6')], c: 2, why: 'Each by each.' },
    { q: 'Q5 is wrong if:', a: ['the first term is divided', 'the last term is dropped', 'the check is done', 'the answer is a polynomial'], c: 1, why: 'Every term is divided.' },
    { q: 'The commonest slip in Q6 is:', a: ['the wrong HCF', 'the lost ' + m('1'), 'too many brackets', 'expanding'], c: 1, why: 'The third term is the factor itself.' }
  ],
  practice: {
    easy: [
      [m('a⁵ · a³'), m('a⁸')],
      [m('a⁸ ÷ a³'), m('a⁵')],
      [m('(a²)⁴'), m('a⁸')],
      [m('a⁰') + ', for ' + m('a ≠ 0'), m('1')],
      [m('3x²y · (−4xy³)'), m('−12x³y⁴')],
      [m('5a² − 2a²'), m('3a²')],
      [m('(x² + x) ÷ x'), m('x + 1')]
    ],
    med: [
      [m('5a² − 3a + 2 − 2a² + 7a − 5'), m('3a² + 4a − 3')],
      [m('(x + 4)(x − 3)'), m('x² + x − 12')],
      [m('−3a(a² + 2a − 5)'), m('−3a³ − 6a² + 15a')],
      [m('(10x³y − 15x²y²) ÷ 5x²y'), m('2x − 3y')],
      [m('12a²b + 8ab² − 4ab'), m('4ab(3a + 2b − 1)')],
      [m('2x² + 6x + ax + 3a'), m('(x + 3)(2x + a)')],
      ['The degree of ' + m('3x²y'), m('3')]
    ],
    hard: [
      [m('(2x − 1)(x² + x − 3)'), m('2x³ + x² − 7x + 3')],
      [m('(15x⁴y² − 10x³y³ + 5x²y) ÷ 5x²y'), m('3x²y − 2xy² + 1')],
      [m('x(a − b) − y(b − a)'), m('(a − b)(x + y)')],
      ['Simplify ' + m(f('6x² + 9x', '3x')), m('2x + 3')],
      ['Expand and collect ' + m('(a + b)² − (a − b)²'), m('4ab')],
      [m('48 · 37 + 48 · 63'), m('4800')],
      ['Why is ' + m('n² + n') + ' always even?', m('n(n + 1)') + ' — one factor is even']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite every question you lost a mark on in full, from the first line.',
  homework: [
    'Rewrite in full every question on which you lost a mark.',
    'Write out the four laws of indices with one example each.',
    'Expand ' + m('(2x − 5)(x + 3)') + ' and check by substituting ' + m('x = 1') + '.',
    'Factorise ' + m('9m²n + 12mn² − 3mn') + ' and expand your answer back.',
    'Write one sentence for each of the seven blocks on the Quarter II map.'
  ]
});

/* ============================== 45 ============================== */
G7_MAT.push({
  id: 'g7-45', stream: 'mat', grade: 7, quarter: 3, lessons: '81', hours: 1,
  title: 'Parallel lines',
  subtitle: 'Two lines in a plane that never meet — and how you can tell without following them.',
  uz: 'Matematika 7, §37', uzPage: 'pp. 226–230',
  cam: 'S8 5.1', camPage: 'Stage 8, pp. 44–47', wb: 'Exercise 5.1',
  objectives: [
    'Define parallel lines and use the symbol ' + m('∥') + '.',
    'Distinguish parallel lines from lines that merely look apart.',
    'State the axiom of parallels and what it guarantees.',
    'Recognise parallel lines in the figures and objects around the room.'
  ],
  terms: [
    ['Parallel lines', 'Parallel to‘g‘ri chiziqlar', 'Параллельные прямые'],
    ['To intersect', 'Kesishmoq', 'Пересекаться'],
    ['Plane', 'Tekislik', 'Плоскость'],
    ['Axiom', 'Aksioma', 'Аксиома'],
    ['Distance', 'Masofa', 'Расстояние'],
    ['Direction', 'Yo‘nalish', 'Направление'],
    ['Unique', 'Yagona', 'Единственный'],
    ['Symbol', 'Belgi', 'Обозначение']
  ],
  timing: [[8, 'The definition'], [12, 'The axiom of parallels'], [12, 'Always the same distance'], [6, 'Around the room'], [2, 'Homework']],
  sections: [
    {
      h: 'The definition',
      html: `<p>Two lines in the same plane are <b>parallel</b> if they have no common point, however far
      they are produced in either direction. We write ${m('a ∥ b')}.</p>
      {{fig:parallelLines:Two parallel lines and a transversal}}
      <div class="tablewrap"><table>
      <thead><tr><th>Two lines in a plane</th><th>Common points</th><th>Name</th></tr></thead>
      <tbody>
        <tr><td>they cross</td><td class="m">1</td><td>intersecting</td></tr>
        <tr><td>they never meet</td><td class="m">0</td><td>parallel</td></tr>
        <tr><td>every point is shared</td><td>all</td><td>the same line</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">“They do not meet on my page” proves nothing</span>
      A line has no end. Two lines drawn a little apart may cross far outside the page, so parallelism
      can never be checked by looking — it has to be established from angles, which is the next
      lesson.</div>`
    },
    {
      h: 'The axiom of parallels',
      html: `${eq('Through a point not on a line there passes exactly one line parallel to it.', true)}
      <p>“At least one” can be proved; “exactly one” cannot, and is taken as an <b>axiom</b>. It is the
      most famous statement in geometry — mathematicians tried for two thousand years to derive it, and
      the failure produced the non-Euclidean geometries.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Claim</th><th>Status</th></tr></thead>
      <tbody>
        <tr><td>at least one parallel exists</td><td>a theorem</td></tr>
        <tr><td>there is no more than one</td><td>the axiom</td></tr>
        <tr><td>parallels stay the same distance apart</td><td>follows from the axiom</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Why the axiom is needed</div>
      Without it a triangle's angles need not add to ${m('180°')}. Every result of the next three lessons
      rests on it, which is why it is stated openly rather than assumed silently.</div>`
    },
    {
      h: 'Always the same distance',
      html: `<p>The distance from a point to a line is measured along the perpendicular. If ${m('a ∥ b')},
      that distance is the same wherever the point is taken on ${m('a')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Lines</th><th>Distance between them</th></tr></thead>
      <tbody>
        <tr><td>parallel</td><td>constant</td></tr>
        <tr><td>intersecting</td><td>falls to zero at the crossing</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">This is how rails and ruled paper work</div>
      A railway is built to a constant gauge precisely so that the rails are parallel; if the distance
      changed anywhere, the wheels would jam or drop. Constant distance and parallelism are the same
      fact stated two ways.</div>`
    },
    {
      h: 'Around the room',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Object</th><th>Parallel pair</th><th>Why it matters</th></tr></thead>
      <tbody>
        <tr><td>ruled paper</td><td>the lines</td><td>writing stays level</td></tr>
        <tr><td>a railway</td><td>the rails</td><td>constant gauge</td></tr>
        <tr><td>a ladder</td><td>the two side rails</td><td>the rungs stay square</td></tr>
        <tr><td>a window frame</td><td>opposite edges</td><td>the pane fits</td></tr>
        <tr><td>a book's opposite edges</td><td>top and bottom</td><td>the pages stack</td></tr>
      </tbody></table></div>
      <p>In each case the parallelism is not decoration: it is what makes the object work.</p>`
    }
  ],
  examples: [
    {
      q: 'How many lines through a point ' + m('M') + ' outside a line ' + m('a') + ' are parallel to ' + m('a') + '?',
      steps: [
        ['At least one exists — this can be constructed.', ''],
        ['The axiom says there is no second.', ''],
        ['So the number is exactly one.', '']
      ],
      ans: m('1')
    },
    {
      q: 'Two lines in a plane are drawn ' + m('3 cm') + ' apart at one point and ' + m('3.4 cm') + ' apart at another. Are they parallel?',
      steps: [
        ['Parallel lines keep a constant distance.', ''],
        ['Here the distance changes.', ''],
        ['So they are not parallel — they meet somewhere.', '']
      ],
      ans: 'No'
    },
    {
      q: 'If ' + m('a ∥ b') + ' and ' + m('b ∥ c') + ', what can be said about ' + m('a') + ' and ' + m('c') + '?',
      steps: [
        ['Suppose ' + m('a') + ' met ' + m('c') + ' at a point ' + m('P') + '.', ''],
        ['Then through ' + m('P') + ' there would be two lines parallel to ' + m('b') + '.', ''],
        ['That contradicts the axiom.', ''],
        ['So ' + m('a ∥ c') + '.', '']
      ],
      ans: m('a ∥ c')
    }
  ],
  modelNote: 'Ask the class to draw two lines that “look parallel” and then measure the gap at both ends of the page; the ones that fail are the lesson.',
  interactive: {
    type: 'transform',
    title: 'A translated line is parallel to the original',
    hint: 'Translation keeps direction, so the image never meets the object.'
  },
  quiz: [
    { q: 'Parallel lines have how many common points?', a: [m('0'), m('1'), m('2'), 'infinitely many'], c: 0, why: 'They never meet.' },
    { q: 'The symbol for parallel is:', a: [m('⊥'), m('∥'), m('≡'), m('≈')], c: 1, why: 'Two strokes.' },
    { q: 'Through a point off a line, parallels number:', a: [m('0'), 'exactly one', 'two', 'many'], c: 1, why: 'The axiom.' },
    { q: 'The distance between parallel lines is:', a: ['increasing', 'constant', 'decreasing', 'zero'], c: 1, why: 'Everywhere the same.' },
    { q: 'Distance from a point to a line is measured:', a: ['any way', 'along the perpendicular', 'along the line', 'diagonally'], c: 1, why: 'The shortest path.' },
    { q: 'If ' + m('a ∥ b') + ' and ' + m('b ∥ c') + ' then:', a: [m('a ⊥ c'), m('a ∥ c'), m('a = c'), 'nothing follows'], c: 1, why: 'By the axiom.' }
  ],
  practice: {
    easy: [
      ['Two lines with no common point are', 'parallel'],
      ['Write “' + m('a') + ' is parallel to ' + m('b') + '” in symbols', m('a ∥ b')],
      ['Two lines crossing at one point are', 'intersecting'],
      ['Parallels through a point off a line', m('1')],
      ['The distance between parallels is', 'constant'],
      ['Distance to a line is measured along the', 'perpendicular'],
      ['Name one parallel pair in the classroom', 'e.g. the opposite edges of the board']
    ],
    med: [
      ['Gaps of ' + m('3') + ' and ' + m('3.4 cm') + ': parallel?', 'No'],
      [m('a ∥ b') + ', ' + m('b ∥ c') + ': is ' + m('a ∥ c') + '?', 'Yes'],
      ['Can two parallel lines lie in different planes?', 'Not by this definition — the same plane is required'],
      ['Is “exactly one parallel” a theorem or an axiom?', 'An axiom'],
      ['Is “at least one parallel” a theorem or an axiom?', 'A theorem'],
      ['Two rails ' + m('1520 mm') + ' apart everywhere are', 'parallel'],
      ['Why is looking at a drawing not a proof?', 'The lines may meet beyond the page']
    ],
    hard: [
      ['Prove that ' + m('a ∥ b') + ' and ' + m('b ∥ c') + ' force ' + m('a ∥ c'), 'Two parallels to ' + m('b') + ' through one point contradict the axiom'],
      ['If ' + m('a ⊥ c') + ' and ' + m('b ⊥ c') + ' in a plane, then', m('a ∥ b')],
      ['How many lines are parallel to ' + m('a') + ' in the whole plane?', 'Infinitely many — one through each point off it'],
      ['A quadrilateral with both pairs of opposite sides parallel is a', 'parallelogram'],
      ['Explain why the axiom cannot be checked by measurement', 'Measurement covers a finite part of an endless line'],
      ['What fails without the axiom of parallels?', 'The angle sum of a triangle is no longer ' + m('180°')],
      ['Two lines are ' + m('0') + ' apart at one point: what are they?', 'Intersecting there, or the same line']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Measure, do not eyeball: take the gap at both ends of the page.',
  homework: [
    'Draw a line ' + m('a') + ' and a point ' + m('M') + ' off it, and construct the parallel through ' + m('M') + '.',
    'Find five parallel pairs at home and say what each is for.',
    'State the axiom of parallels in your own words.',
    'Two lines are ' + m('4 cm') + ' apart at the left edge and ' + m('4 cm') + ' apart at the right. Are they parallel? What else would you check?',
    'Explain why ' + m('a ∥ b') + ' and ' + m('b ∥ c') + ' give ' + m('a ∥ c') + '.'
  ]
});

/* ============================== 46 ============================== */
G7_MAT.push({
  id: 'g7-46', stream: 'mat', grade: 7, quarter: 3, lessons: '82–83', hours: 2,
  title: 'The criterion for two lines to be parallel',
  subtitle: 'One pair of equal alternate angles is enough — parallelism becomes something you can check.',
  uz: 'Matematika 7, §38', uzPage: 'pp. 231–237',
  cam: 'S8 5.1', camPage: 'Stage 8, pp. 44–47', wb: 'Exercise 5.1',
  objectives: [
    'Name the alternate, corresponding and co-interior angles at a transversal.',
    'State and use the three criteria for two lines to be parallel.',
    'Prove that two lines are parallel from an angle equality.',
    'Deduce that two perpendiculars to the same line are parallel.'
  ],
  terms: [
    ['Transversal', 'Kesuvchi', 'Секущая'],
    ['Alternate angles', 'Ichki almashinuvchi burchaklar', 'Накрест лежащие углы'],
    ['Corresponding angles', 'Mos burchaklar', 'Соответственные углы'],
    ['Co-interior angles', 'Ichki bir tomonli burchaklar', 'Односторонние углы'],
    ['Criterion', 'Alomat', 'Признак'],
    ['To conclude', 'Xulosa chiqarmoq', 'Сделать вывод'],
    ['Perpendicular', 'Perpendikulyar', 'Перпендикуляр'],
    ['Proof', 'Isbot', 'Доказательство']
  ],
  timing: [[15, 'The transversal and its eight angles'], [25, 'The three criteria'], [25, 'Using a criterion'], [20, 'Perpendiculars to one line'], [5, 'Homework']],
  sections: [
    {
      h: 'The transversal and its eight angles',
      html: `<p>A line that cuts two others is a <b>transversal</b>. It makes eight angles, and three pairs
      of them have names.</p>
      {{fig:parallelLines:The transversal and the named pairs}}
      <div class="tablewrap"><table>
      <thead><tr><th>Pair</th><th>Where they sit</th><th>When the lines are parallel</th></tr></thead>
      <tbody>
        <tr><td>alternate</td><td>between the lines, opposite sides of the transversal</td><td>equal</td></tr>
        <tr><td>corresponding</td><td>same side, one above and one below</td><td>equal</td></tr>
        <tr><td>co-interior</td><td>between the lines, same side</td><td>add to ${m('180°')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Names first, facts second</div>
      Half the errors in this chapter are naming errors, not reasoning errors. Point at a pair and say
      its name aloud before quoting any rule about it.</div>`
    },
    {
      h: 'The three criteria',
      html: `<p>Each pair gives a criterion. Every one of them is a one-way street read this way: the
      angle fact comes first, and parallelism is the conclusion.</p>
      ${eq('alternate equal  ⟹  ' + m('a ∥ b') + '     corresponding equal  ⟹  ' + m('a ∥ b') + '     co-interior sum ' + m('180°') + '  ⟹  ' + m('a ∥ b'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Conclusion</th></tr></thead>
      <tbody>
        <tr><td class="m">∠1 = ∠2</td><td>alternate — the lines are parallel</td></tr>
        <tr><td class="m">∠1 = ∠3</td><td>corresponding — the lines are parallel</td></tr>
        <tr><td class="m">∠1 + ∠4 = 180°</td><td>co-interior — the lines are parallel</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">One correct pair is enough — but it must be a named pair</span>
      Two angles that happen to be equal prove nothing unless they are alternate or corresponding. Check
      the position first; the equality alone is not a criterion.</div>`
    },
    {
      h: 'Using a criterion',
      html: `<p>The written proof is three lines: name the pair, quote the criterion, state the
      conclusion.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>Reason</th></tr></thead>
      <tbody>
        <tr><td class="m">∠1 = 70°, ∠2 = 70°</td><td>given</td></tr>
        <tr><td>they are alternate angles</td><td>position at the transversal</td></tr>
        <tr><td class="m">a ∥ b</td><td>the alternate-angle criterion</td></tr>
      </tbody></table></div>
      <div class="tablewrap"><table>
      <thead><tr><th>Data</th><th>Pair</th><th>Parallel?</th></tr></thead>
      <tbody>
        <tr><td class="m">∠1 = 70°, ∠2 = 70°</td><td>alternate</td><td>yes</td></tr>
        <tr><td class="m">∠1 = 110°, ∠4 = 70°</td><td>co-interior</td><td>yes</td></tr>
        <tr><td class="m">∠1 = 70°, ∠4 = 80°</td><td>co-interior</td><td>no</td></tr>
        <tr><td class="m">∠1 = 70°, ∠3 = 70°</td><td>corresponding</td><td>yes</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'Perpendiculars to one line',
      html: `<p>The neatest consequence: if two lines are both perpendicular to a third, they are
      parallel.</p>
      ${eq(m('a ⊥ c') + ' and ' + m('b ⊥ c') + '  ⟹  ' + m('a ∥ b'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>Reason</th></tr></thead>
      <tbody>
        <tr><td class="m">a ⊥ c, b ⊥ c</td><td>given</td></tr>
        <tr><td>the two angles at ${m('c')} are ${m('90°')} each</td><td>definition of perpendicular</td></tr>
        <tr><td>they are corresponding and equal</td><td>position at the transversal</td></tr>
        <tr><td class="m">a ∥ b</td><td>the corresponding-angle criterion</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">This is what a set square does</div>
      Sliding a set square along a ruler draws parallel lines because every line it draws is
      perpendicular to the ruler. The tool is the theorem made of plastic.</div>`
    }
  ],
  examples: [
    {
      q: 'A transversal makes ' + m('∠1 = 64°') + ' and its alternate ' + m('∠2 = 64°') + '. Are the lines parallel?',
      steps: [
        ['The pair is alternate — check the position.', ''],
        ['They are equal.', ''],
        ['By the alternate-angle criterion, ' + m('a ∥ b') + '.', '']
      ],
      ans: 'Yes'
    },
    {
      q: 'Co-interior angles measure ' + m('115°') + ' and ' + m('65°') + '. Are the lines parallel?',
      steps: [
        [m('115° + 65° = 180°'), ''],
        ['Co-interior angles adding to ' + m('180°') + ' is the criterion.', ''],
        ['So the lines are parallel.', '']
      ],
      ans: 'Yes'
    },
    {
      q: 'Prove that ' + m('a ⊥ c') + ' and ' + m('b ⊥ c') + ' give ' + m('a ∥ b') + '.',
      steps: [
        ['Both lines meet ' + m('c') + ' at ' + m('90°') + '.', ''],
        ['Those two right angles are corresponding.', ''],
        ['They are equal.', ''],
        ['By the corresponding-angle criterion, ' + m('a ∥ b') + '.', '']
      ],
      ans: m('a ∥ b')
    }
  ],
  modelNote: 'Draw one transversal on the board and have the class colour the three named pairs in three colours before any rule is stated; the naming errors disappear.',
  interactive: {
    type: 'quiz',
    title: 'Name the pair, then decide',
    hint: 'Position first, equality second.',
    items: [
      { q: 'Angles between the lines, opposite sides of the transversal:', a: ['corresponding', 'alternate', 'co-interior', 'vertical'], c: 1, why: 'Across the transversal.' },
      { q: 'Angles on the same side, one above and one below:', a: ['corresponding', 'alternate', 'co-interior', 'adjacent'], c: 0, why: 'They match in position.' },
      { q: 'Angles between the lines on the same side:', a: ['corresponding', 'alternate', 'co-interior', 'vertical'], c: 2, why: 'One side only.' },
      { q: 'Equal alternate angles give:', a: ['perpendicular lines', 'parallel lines', 'nothing', 'a triangle'], c: 1, why: 'The criterion.' },
      { q: 'Co-interior angles that add to ' + m('180°') + ' give:', a: ['parallel lines', 'intersecting lines', 'nothing', 'equal lines'], c: 0, why: 'The criterion.' },
      { q: m('∠1 = 70°') + ' and co-interior ' + m('∠4 = 80°') + ':', a: ['parallel', 'not parallel', 'perpendicular', 'cannot say'], c: 1, why: 'The sum is ' + m('150°') + '.' },
      { q: 'Two lines perpendicular to a third are:', a: ['perpendicular', 'parallel', 'skew', 'equal'], c: 1, why: 'Equal corresponding angles.' },
      { q: 'Two equal angles that are not a named pair prove:', a: ['parallelism', 'nothing', 'perpendicularity', 'congruence'], c: 1, why: 'Position matters.' }
    ]
  },
  quiz: [
    { q: 'A line cutting two others is a:', a: ['bisector', 'transversal', 'median', 'chord'], c: 1, why: 'It crosses both.' },
    { q: 'A transversal makes how many angles?', a: [m('4'), m('6'), m('8'), m('12')], c: 2, why: 'Four at each crossing.' },
    { q: 'Alternate angles equal ⟹', a: ['the lines meet', 'the lines are parallel', 'nothing', 'a right angle'], c: 1, why: 'The criterion.' },
    { q: 'Co-interior angles of parallel lines add to:', a: [m('90°'), m('180°'), m('270°'), m('360°')], c: 1, why: 'A straight angle.' },
    { q: 'Corresponding angles of ' + m('64°') + ' and ' + m('64°') + ' give:', a: ['parallel lines', 'perpendicular lines', 'nothing', 'a triangle'], c: 0, why: 'The criterion.' },
    { q: m('a ⊥ c') + ' and ' + m('b ⊥ c') + ' give:', a: [m('a ⊥ b'), m('a ∥ b'), m('a = b'), 'nothing'], c: 1, why: 'Right angles correspond.' }
  ],
  practice: {
    easy: [
      ['Name the pair between the lines, opposite sides', 'alternate'],
      ['Name the pair on the same side, one above one below', 'corresponding'],
      ['Name the pair between the lines, same side', 'co-interior'],
      ['Alternate angles ' + m('70°') + ' and ' + m('70°') + ': parallel?', 'Yes'],
      ['Corresponding angles ' + m('50°') + ' and ' + m('60°') + ': parallel?', 'No'],
      ['Co-interior ' + m('100°') + ' and ' + m('80°') + ': parallel?', 'Yes'],
      ['A transversal makes how many angles?', m('8')]
    ],
    med: [
      ['Co-interior ' + m('115°') + ' and ' + m('65°'), 'Parallel'],
      ['Co-interior ' + m('70°') + ' and ' + m('80°'), 'Not parallel'],
      ['Alternate ' + m('3x') + ' and ' + m('75°') + ' with the lines parallel: find ' + m('x'), m('x = 25')],
      ['Corresponding ' + m('2x + 10') + ' and ' + m('80°') + ' with the lines parallel', m('x = 35')],
      [m('a ⊥ c') + ', ' + m('b ⊥ c') + ': what follows?', m('a ∥ b')],
      ['Write the three-line proof for equal alternate angles', 'given; alternate; criterion'],
      ['Two equal angles that are vertical prove parallelism?', 'No — not a named pair']
    ],
    hard: [
      ['Co-interior angles are ' + m('x') + ' and ' + m('2x') + ' with the lines parallel: find both', m('60°') + ' and ' + m('120°')],
      ['Alternate angles are ' + m('4x − 10') + ' and ' + m('3x + 20') + ': find ' + m('x') + ' for parallelism', m('x = 30')],
      ['Co-interior ' + m('5x') + ' and ' + m('4x') + ': find ' + m('x'), m('x = 20')],
      ['Why is each criterion stated as an implication, not an equality?', 'The angle fact is the evidence; parallelism is the conclusion'],
      ['A set square slid along a ruler draws parallels — why?', 'Every line drawn is perpendicular to the ruler'],
      ['Corresponding angles ' + m('x + 30') + ' and ' + m('2x − 10') + ': find ' + m('x'), m('x = 40')],
      ['Given ' + m('∠1 = 108°') + ', find the co-interior angle that makes the lines parallel', m('72°')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Name the pair in words before you write a single number.',
  homework: [
    'Draw a transversal across two lines and label all three named pairs.',
    'Alternate angles are ' + m('5x') + ' and ' + m('65°') + '. Find ' + m('x') + ' if the lines are parallel.',
    'Co-interior angles are ' + m('3x') + ' and ' + m('2x') + '. Find both.',
    'Write the three-line proof that ' + m('a ⊥ c') + ' and ' + m('b ⊥ c') + ' give ' + m('a ∥ b') + '.',
    'Explain why two equal vertical angles do not prove that two lines are parallel.'
  ]
});

/* ============================== 47 ============================== */
G7_MAT.push({
  id: 'g7-47', stream: 'mat', grade: 7, quarter: 3, lessons: '84–85', hours: 2,
  title: 'Angles formed when two parallel lines are cut by a transversal',
  subtitle: 'The criteria read backwards: now parallelism is given, and the angles are the conclusion.',
  uz: 'Matematika 7, §39', uzPage: 'pp. 238–245',
  cam: 'S8 5.1', camPage: 'Stage 8, pp. 44–47', wb: 'Exercise 5.1'
  ,
  objectives: [
    'State the three properties of angles on parallel lines.',
    'Find every one of the eight angles from a single given one.',
    'Distinguish a property from a criterion, and use each in its own direction.',
    'Solve angle problems in which parallel lines are given.'
  ],
  terms: [
    ['Property', 'Xossa', 'Свойство'],
    ['Criterion', 'Alomat', 'Признак'],
    ['Converse', 'Teskari teorema', 'Обратная теорема'],
    ['Alternate angles', 'Ichki almashinuvchi burchaklar', 'Накрест лежащие углы'],
    ['Corresponding angles', 'Mos burchaklar', 'Соответственные углы'],
    ['Co-interior angles', 'Ichki bir tomonli burchaklar', 'Односторонние углы'],
    ['Vertical angles', 'Vertikal burchaklar', 'Вертикальные углы'],
    ['Supplementary', 'Qo‘shni (yig‘indisi 180°)', 'Смежные'],
    ['Angle', 'Burchak', 'Угол']
  ],
  timing: [[15, 'The properties'], [25, 'All eight from one'], [25, 'Property or criterion?'], [20, 'Problems'], [5, 'Homework']],
  sections: [
    {
      h: 'The properties',
      html: `<p>If the lines <b>are</b> parallel, the same three pairs behave as follows.</p>
      ${eq(m('a ∥ b') + '  ⟹  alternate equal,  corresponding equal,  co-interior add to ' + m('180°'), true)}
      {{fig:parallelLines:One angle decides all eight}}
      <div class="tablewrap"><table>
      <thead><tr><th>Pair</th><th>Property</th></tr></thead>
      <tbody>
        <tr><td>alternate</td><td>equal</td></tr>
        <tr><td>corresponding</td><td>equal</td></tr>
        <tr><td>co-interior</td><td>sum ${m('180°')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Two theorems, one picture</div>
      Last lesson the angle fact was the evidence and parallelism the conclusion. This lesson the arrow
      is reversed. The picture is identical; only the direction of the reasoning changes.</div>`
    },
    {
      h: 'All eight from one',
      html: `<p>Given one angle at a transversal cutting parallel lines, every other angle follows. With
      ${m('∠1 = 70°')}:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Angle</th><th>Relation to ${m('∠1')}</th><th>Size</th></tr></thead>
      <tbody>
        <tr><td class="m">∠2</td><td>supplementary</td><td class="m">110°</td></tr>
        <tr><td class="m">∠3</td><td>vertical</td><td class="m">70°</td></tr>
        <tr><td class="m">∠4</td><td>supplementary</td><td class="m">110°</td></tr>
        <tr><td class="m">∠5</td><td>corresponding</td><td class="m">70°</td></tr>
        <tr><td class="m">∠6</td><td>co-interior</td><td class="m">110°</td></tr>
        <tr><td class="m">∠7</td><td>alternate</td><td class="m">70°</td></tr>
        <tr><td class="m">∠8</td><td>supplementary to ${m('∠7')}</td><td class="m">110°</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Only two sizes appear</div>
      Every angle is either ${m('70°')} or ${m('110°')}, and the two add to ${m('180°')}. Once you see
      that, the eight angles collapse into one question: which of the two is this?</div>`
    },
    {
      h: 'Property or criterion?',
      html: `<p>Which one you may use depends entirely on what you were given.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Wanted</th><th>Use</th></tr></thead>
      <tbody>
        <tr><td class="m">a ∥ b</td><td>an angle</td><td>the property</td></tr>
        <tr><td>an angle equality</td><td class="m">a ∥ b</td><td>the criterion</td></tr>
        <tr><td class="m">a ∥ b</td><td class="m">a ∥ b</td><td>nothing to prove</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Using the property to prove parallelism is circular</span>
      Writing “the angles are alternate, so they are equal, so the lines are parallel” assumes what it
      sets out to prove. If parallelism is the goal, the angle equality must be given, not
      deduced.</div>`
    },
    {
      h: 'Problems',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Reasoning</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>${m('a ∥ b')}, one co-interior angle is ${m('3x')}, the other ${m('2x')}</td><td class="m">5x = 180</td><td class="m">36° and 144°</td></tr>
        <tr><td>${m('a ∥ b')}, corresponding angles ${m('4x − 20')} and ${m('2x + 40')}</td><td class="m">2x = 60</td><td class="m">x = 30</td></tr>
        <tr><td>${m('a ∥ b')}, alternate angles are equal and one is ${m('5x')}, the other ${m('105°')}</td><td class="m">5x = 105</td><td class="m">x = 21</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A parallel drawn in is often the whole solution</div>
      Where a figure gives no transversal, drawing a line through a vertex parallel to a given side
      creates alternate angles out of nothing. The next lesson proves the angle sum of a triangle in
      exactly this way.</div>`
    }
  ],
  examples: [
    {
      q: m('a ∥ b') + ' and one angle at the transversal is ' + m('70°') + '. Find the co-interior angle and the alternate angle.',
      steps: [
        ['Alternate angles are equal: ' + m('70°') + '.', ''],
        ['Co-interior angles add to ' + m('180°') + '.', ''],
        [m('180° − 70° = 110°'), '']
      ],
      ans: 'Alternate ' + m('70°') + ', co-interior ' + m('110°')
    },
    {
      q: m('a ∥ b') + '. Co-interior angles are ' + m('3x') + ' and ' + m('2x') + '. Find them.',
      steps: [
        [m('3x + 2x = 180°'), 'The co-interior property.'],
        [m('5x = 180°'), ''],
        [m('x = 36°'), ''],
        ['The angles are ' + m('108°') + ' and ' + m('72°') + '.', '']
      ],
      ans: m('108°') + ' and ' + m('72°')
    },
    {
      q: m('a ∥ b') + '. Corresponding angles are ' + m('4x − 20') + ' and ' + m('2x + 40') + '. Find ' + m('x') + '.',
      steps: [
        ['Corresponding angles are equal.', ''],
        [m('4x − 20 = 2x + 40'), ''],
        [m('2x = 60'), ''],
        [m('x = 30'), '']
      ],
      ans: m('x = 30')
    }
  ],
  modelNote: 'Mark one angle on the board and ask the class to fill in the other seven in silence; the eight-angle picture is learnt in a single minute this way.',
  interactive: {
    type: 'quiz',
    title: 'Which of the two sizes is it?',
    hint: 'Every angle is the given one or its supplement.',
    items: [
      { q: m('a ∥ b') + ', ' + m('∠1 = 70°') + '. Its vertical angle:', a: [m('70°'), m('110°'), m('90°'), m('35°')], c: 0, why: 'Vertical angles are equal.' },
      { q: 'Its corresponding angle:', a: [m('70°'), m('110°'), m('20°'), m('180°')], c: 0, why: 'Equal on parallel lines.' },
      { q: 'Its co-interior angle:', a: [m('70°'), m('110°'), m('90°'), m('140°')], c: 1, why: m('180° − 70°') + '.' },
      { q: 'Its alternate angle:', a: [m('70°'), m('110°'), m('35°'), m('180°')], c: 0, why: 'Equal on parallel lines.' },
      { q: 'How many distinct sizes appear among the eight?', a: [m('1'), m('2'), m('4'), m('8')], c: 1, why: 'The angle and its supplement.' },
      { q: 'Given ' + m('a ∥ b') + ' and asked for an angle, you use:', a: ['the criterion', 'the property', 'either', 'neither'], c: 1, why: 'Parallelism is the given.' },
      { q: 'Given equal alternate angles and asked to prove ' + m('a ∥ b') + ':', a: ['the criterion', 'the property', 'either', 'neither'], c: 0, why: 'The angle fact is the given.' },
      { q: 'Co-interior angles ' + m('3x') + ' and ' + m('2x') + ' on parallel lines:', a: [m('x = 30'), m('x = 36'), m('x = 45'), m('x = 60')], c: 1, why: m('5x = 180') + '.' }
    ]
  },
  quiz: [
    { q: 'On parallel lines, alternate angles are:', a: ['equal', 'supplementary', 'complementary', 'unrelated'], c: 0, why: 'The property.' },
    { q: 'On parallel lines, co-interior angles:', a: ['are equal', 'add to ' + m('180°'), 'add to ' + m('90°'), 'are right'], c: 1, why: 'The property.' },
    { q: 'If one angle is ' + m('70°') + ', the others are:', a: [m('70°') + ' only', m('70°') + ' or ' + m('110°'), m('110°') + ' only', 'all different'], c: 1, why: 'Two sizes.' },
    { q: 'The property is used when the given is:', a: ['an angle equality', 'parallelism', 'a length', 'nothing'], c: 1, why: 'Parallel ⟹ angles.' },
    { q: 'Corresponding angles ' + m('4x − 20') + ' and ' + m('2x + 40') + ' give:', a: [m('x = 10'), m('x = 30'), m('x = 20'), m('x = 60')], c: 1, why: m('2x = 60') + '.' },
    { q: 'Proving parallelism from the property is:', a: ['valid', 'circular', 'quicker', 'the same thing'], c: 1, why: 'It assumes the conclusion.' }
  ],
  practice: {
    easy: [
      [m('a ∥ b') + ', alternate to ' + m('70°'), m('70°')],
      [m('a ∥ b') + ', corresponding to ' + m('70°'), m('70°')],
      [m('a ∥ b') + ', co-interior with ' + m('70°'), m('110°')],
      ['The vertical angle of ' + m('70°'), m('70°')],
      ['The supplement of ' + m('70°'), m('110°')],
      ['How many distinct sizes among the eight?', m('2')],
      [m('a ∥ b') + ', co-interior with ' + m('90°'), m('90°')]
    ],
    med: [
      ['Co-interior ' + m('3x') + ' and ' + m('2x'), m('108°') + ' and ' + m('72°')],
      ['Corresponding ' + m('4x − 20') + ' and ' + m('2x + 40'), m('x = 30')],
      ['Alternate ' + m('5x') + ' and ' + m('105°'), m('x = 21')],
      ['One angle is ' + m('130°') + ': its co-interior angle', m('50°')],
      ['One angle is ' + m('130°') + ': its alternate angle', m('130°')],
      ['Co-interior angles are equal: how big is each?', m('90°')],
      ['Given ' + m('a ∥ b') + ', which do you use, property or criterion?', 'The property']
    ],
    hard: [
      ['Co-interior ' + m('x + 40') + ' and ' + m('2x − 10') + ' on parallel lines', m('x = 50')],
      ['Alternate ' + m('7x − 15') + ' and ' + m('5x + 9'), m('x = 12')],
      ['A transversal cuts three parallel lines; one angle is ' + m('64°') + ': how many angles equal ' + m('64°') + '?', m('6') + ' — three crossings, two each'],
      ['Why does a proof of parallelism need the criterion, not the property?', 'The property starts from parallelism, which is what is being proved'],
      [m('a ∥ b') + ' and a transversal is perpendicular to ' + m('a') + ': what are all eight angles?', 'All ' + m('90°')],
      ['Co-interior ' + m('4x') + ' and ' + m('5x'), m('80°') + ' and ' + m('100°')],
      ['One angle is ' + m('α') + ': write every other angle in terms of ' + m('α'), m('α') + ' or ' + m('180° − α')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write the name of the pair beside every number you find.',
  homework: [
    'Mark one angle of ' + m('55°') + ' at a transversal cutting parallel lines and find the other seven.',
    'Co-interior angles are ' + m('5x') + ' and ' + m('4x') + '. Find both.',
    'Alternate angles are ' + m('3x + 12') + ' and ' + m('4x − 8') + '. Find ' + m('x') + '.',
    'Explain in two sentences the difference between the property and the criterion.',
    'A transversal is perpendicular to one of two parallel lines. What can you say about the other?'
  ]
});

/* ============================== 48 ============================== */
G7_MAT.push({
  id: 'g7-48', stream: 'mat', grade: 7, quarter: 3, lessons: '86–87', hours: 2,
  title: 'The sum of the interior angles of a triangle',
  subtitle: m('180°') + ' for every triangle, proved with one line drawn parallel to a side — and the exterior angle that follows.',
  uz: 'Matematika 7, §40', uzPage: 'pp. 246–253',
  cam: 'S8 5.2', camPage: 'Stage 8, pp. 48–51', wb: 'Exercise 5.2',
  objectives: [
    'Prove that the angles of a triangle add to ' + m('180°') + '.',
    'Find a missing angle of a triangle.',
    'State and use the exterior-angle theorem.',
    'Deduce that a triangle has at most one right or obtuse angle.'
  ],
  terms: [
    ['Interior angle', 'Ichki burchak', 'Внутренний угол'],
    ['Exterior angle', 'Tashqi burchak', 'Внешний угол'],
    ['Angle sum', 'Burchaklar yig‘indisi', 'Сумма углов'],
    ['Auxiliary line', 'Yordamchi chiziq', 'Вспомогательная линия'],
    ['Theorem', 'Teorema', 'Теорема'],
    ['Acute-angled', 'O‘tkir burchakli', 'Остроугольный'],
    ['Obtuse-angled', 'O‘tmas burchakli', 'Тупоугольный'],
    ['Equiangular', 'Teng burchakli', 'Равноугольный']
  ],
  timing: [[10, 'The experiment'], [25, 'The proof'], [20, 'Finding a missing angle'], [25, 'The exterior angle'], [5, 'Homework']],
  sections: [
    {
      h: 'The experiment',
      html: `<p>Tear the three corners off a paper triangle and lay them side by side: they form a
      straight angle. Every triangle in the class gives the same result, whatever its shape.</p>
      {{fig:triangleAngleSum:The three angles laid along a straight line}}
      <div class="tablewrap"><table>
      <thead><tr><th>Triangle</th><th>Angles</th><th>Sum</th></tr></thead>
      <tbody>
        <tr><td>equilateral</td><td class="m">60°, 60°, 60°</td><td class="m">180°</td></tr>
        <tr><td>right</td><td class="m">90°, 55°, 35°</td><td class="m">180°</td></tr>
        <tr><td>obtuse</td><td class="m">120°, 40°, 20°</td><td class="m">180°</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The experiment is not the proof</span>
      Tearing paper checks three triangles; the theorem claims it for all of them. That gap is exactly
      what a proof closes, and here the proof needs the parallel lines of the last two lessons.</div>`
    },
    {
      h: 'The proof',
      html: `<p>Through the vertex ${m('A')} draw the line parallel to ${m('BC')}. Now ${m('AB')} and
      ${m('AC')} are transversals of a pair of parallel lines.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>Reason</th></tr></thead>
      <tbody>
        <tr><td>draw ${m('ℓ ∥ BC')} through ${m('A')}</td><td>the axiom of parallels</td></tr>
        <tr><td class="m">∠1 = ∠B</td><td>alternate angles, ${m('AB')} a transversal</td></tr>
        <tr><td class="m">∠2 = ∠C</td><td>alternate angles, ${m('AC')} a transversal</td></tr>
        <tr><td class="m">∠1 + ∠A + ∠2 = 180°</td><td>angles on a straight line at ${m('A')}</td></tr>
        <tr><td class="m">∠A + ∠B + ∠C = 180°</td><td>substituting the first two lines</td></tr>
      </tbody></table></div>
      ${eq(m('∠A + ∠B + ∠C = 180°'), true)}
      <div class="keybox"><div class="klabel">Where the axiom hides</div>
      The proof used the parallel through ${m('A')} — and needed it to be the only one. This theorem is
      therefore a consequence of the axiom of parallels, not an independent fact.</div>`
    },
    {
      h: 'Finding a missing angle',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Working</th><th>Third angle</th></tr></thead>
      <tbody>
        <tr><td class="m">50°, 60°</td><td class="m">180 − 110</td><td class="m">70°</td></tr>
        <tr><td class="m">90°, 35°</td><td class="m">180 − 125</td><td class="m">55°</td></tr>
        <tr><td>isosceles, apex ${m('40°')}</td><td class="m">(180 − 40) ÷ 2</td><td class="m">70° each</td></tr>
        <tr><td>angles in ratio ${m('2 : 3 : 4')}</td><td class="m">9x = 180</td><td class="m">40°, 60°, 80°</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Three consequences, free of charge</div>
      A triangle has at most one right angle and at most one obtuse angle, since two of them already
      reach ${m('180°')}; and an equiangular triangle has three angles of ${m('60°')}.</div>`
    },
    {
      h: 'The exterior angle',
      html: `<p>Produce one side. The angle outside the triangle beside ${m('∠C')} is an <b>exterior
      angle</b>, and it equals the sum of the two interior angles not next to it.</p>
      {{fig:exteriorAngles:An exterior angle equals the two remote interior angles}}
      ${eq(m('∠ext = ∠A + ∠B'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>Reason</th></tr></thead>
      <tbody>
        <tr><td class="m">∠ext + ∠C = 180°</td><td>angles on a straight line</td></tr>
        <tr><td class="m">∠A + ∠B + ∠C = 180°</td><td>the angle sum</td></tr>
        <tr><td class="m">∠ext = ∠A + ∠B</td><td>comparing the two lines</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The two <i>remote</i> angles, not all three</span>
      An exterior angle equals the sum of the two interior angles at the other vertices. Adding
      ${m('∠C')} as well is the standard slip, and it always gives an answer over ${m('180°')}.</div>`
    }
  ],
  examples: [
    {
      q: 'Two angles of a triangle are ' + m('50°') + ' and ' + m('60°') + '. Find the third.',
      steps: [
        [m('50° + 60° = 110°'), ''],
        [m('180° − 110° = 70°'), '']
      ],
      ans: m('70°')
    },
    {
      q: 'The angles of a triangle are in the ratio ' + m('2 : 3 : 4') + '. Find them.',
      steps: [
        ['Let them be ' + m('2x, 3x, 4x') + '.', ''],
        [m('2x + 3x + 4x = 180°'), ''],
        [m('9x = 180°') + ', so ' + m('x = 20°') + '.', ''],
        ['The angles are ' + m('40°, 60°, 80°') + '.', '']
      ],
      ans: m('40°, 60°, 80°')
    },
    {
      q: 'An exterior angle of a triangle is ' + m('120°') + ' and one remote interior angle is ' + m('45°') + '. Find the other two interior angles.',
      steps: [
        ['The remote pair sums to the exterior angle.', ''],
        [m('120° − 45° = 75°'), 'The second remote angle.'],
        ['The adjacent angle is ' + m('180° − 120° = 60°') + '.', ''],
        ['Check: ' + m('45° + 75° + 60° = 180°') + ' ✓', '']
      ],
      ans: m('75°') + ' and ' + m('60°')
    }
  ],
  modelNote: 'Have the class tear the corners first and only then draw the parallel through the vertex; the proof lands as the explanation of something they have already seen happen.',
  interactive: {
    type: 'triangleAngles',
    title: 'Drag a vertex — the sum never moves',
    hint: 'Watch the three angles change while the total stays at ' + m('180°') + '.'
  },
  quiz: [
    { q: 'The angles of any triangle add to:', a: [m('90°'), m('180°'), m('270°'), m('360°')], c: 1, why: 'The theorem.' },
    { q: 'The proof draws through a vertex a line:', a: ['perpendicular to a side', 'parallel to a side', 'bisecting an angle', 'to the midpoint'], c: 1, why: 'To make alternate angles.' },
    { q: 'Two angles are ' + m('90°') + ' and ' + m('35°') + '; the third is:', a: [m('45°'), m('55°'), m('65°'), m('125°')], c: 1, why: m('180 − 125') + '.' },
    { q: 'A triangle can have at most how many right angles?', a: [m('1'), m('2'), m('3'), 'any number'], c: 0, why: 'Two make ' + m('180°') + ' already.' },
    { q: 'An exterior angle equals:', a: ['the adjacent angle', 'the sum of the two remote angles', 'the sum of all three', m('180°')], c: 1, why: 'The exterior-angle theorem.' },
    { q: 'An equiangular triangle has angles of:', a: [m('45°'), m('60°'), m('90°'), m('30°')], c: 1, why: m('180 ÷ 3') + '.' }
  ],
  practice: {
    easy: [
      [m('50°') + ' and ' + m('60°') + ': the third angle', m('70°')],
      [m('90°') + ' and ' + m('35°'), m('55°')],
      [m('120°') + ' and ' + m('40°'), m('20°')],
      ['Each angle of an equiangular triangle', m('60°')],
      ['Isosceles, apex ' + m('40°') + ': the base angles', m('70°') + ' each'],
      ['Isosceles, base angle ' + m('50°') + ': the apex', m('80°')],
      ['Exterior ' + m('110°') + ': the adjacent interior angle', m('70°')]
    ],
    med: [
      ['Angles in the ratio ' + m('2 : 3 : 4'), m('40°, 60°, 80°')],
      ['Angles in the ratio ' + m('1 : 2 : 3'), m('30°, 60°, 90°')],
      ['Exterior ' + m('120°') + ', one remote angle ' + m('45°') + ': the other', m('75°')],
      ['A right triangle with one angle ' + m('37°') + ': the third', m('53°')],
      ['Can a triangle have two obtuse angles?', 'No — they already exceed ' + m('180°')],
      ['The angles are ' + m('x, 2x, 3x') + ': find ' + m('x'), m('x = 30°')],
      ['Exterior angles of a triangle add to', m('360°')]
    ],
    hard: [
      ['One angle is ' + m('20°') + ' more than the second and ' + m('40°') + ' more than the third: find all three', m('80°, 60°, 40°')],
      ['An exterior angle is ' + m('3') + ' times its adjacent interior angle: find both', m('135°') + ' and ' + m('45°')],
      ['An isosceles triangle has an exterior angle of ' + m('100°') + ' at the apex: find all angles', 'Apex ' + m('80°') + ', base angles ' + m('50°') + ' each'],
      ['The bisectors of ' + m('∠B') + ' and ' + m('∠C') + ' meet at ' + m('I') + ': find ' + m('∠BIC') + ' if ' + m('∠A = 60°'), m('120°')],
      ['Prove that a triangle has at most one obtuse angle', 'Two obtuse angles exceed ' + m('180°') + ' on their own'],
      ['Angles ' + m('2x − 10, x + 30, 3x + 10') + ': find ' + m('x'), m('x = 25')],
      ['Why does the proof need the axiom of parallels?', 'It uses the unique parallel through the vertex']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Check every answer by adding your three angles back to ' + m('180°') + '.',
  homework: [
    'Two angles are ' + m('72°') + ' and ' + m('43°') + '. Find the third.',
    'The angles are in the ratio ' + m('3 : 4 : 5') + '. Find them.',
    'Write out the proof of the angle sum in statement-and-reason form.',
    'An exterior angle is ' + m('115°') + ' and one remote interior angle is ' + m('52°') + '. Find the other two interior angles.',
    'Explain why a triangle cannot have two right angles.'
  ]
});

/* ============================== 49 ============================== */
G7_MAT.push({
  id: 'g7-49', stream: 'mat', grade: 7, quarter: 3, lessons: '88–89', hours: 2,
  title: 'Right-angled triangles',
  subtitle: 'Acute angles that add to ' + m('90°') + ', the hypotenuse as the longest side, and the ' + m('30°') + ' half-side rule.',
  uz: 'Matematika 7, §41', uzPage: 'pp. 254–261',
  cam: 'S8 5.2', camPage: 'Stage 8, pp. 48–51', wb: 'Exercise 5.2',
  objectives: [
    'Name the legs and the hypotenuse and show that the hypotenuse is longest.',
    'Use the fact that the two acute angles add to ' + m('90°') + '.',
    'Prove and apply the ' + m('30°') + ' rule: the leg opposite ' + m('30°') + ' is half the hypotenuse.',
    'Use the congruence tests special to right-angled triangles.'
  ],
  terms: [
    ['Right-angled triangle', 'To‘g‘ri burchakli uchburchak', 'Прямоугольный треугольник'],
    ['Hypotenuse', 'Gipotenuza', 'Гипотенуза'],
    ['Leg', 'Katet', 'Катет'],
    ['Acute angle', 'O‘tkir burchak', 'Острый угол'],
    ['Complementary', 'Yig‘indisi 90° bo‘lgan', 'Дополнительные до 90°'],
    ['Opposite', 'Qarshi', 'Противолежащий'],
    ['Half', 'Yarim', 'Половина'],
    ['Congruence test', 'Tenglik alomati', 'Признак равенства']
  ],
  timing: [[10, 'Legs and hypotenuse'], [20, 'The acute angles'], [25, 'The 30° rule'], [25, 'Congruence tests'], [5, 'Homework']],
  sections: [
    {
      h: 'Legs and hypotenuse',
      html: `<p>In a right-angled triangle the side opposite the right angle is the <b>hypotenuse</b>; the
      other two are the <b>legs</b>.</p>
      {{fig:rightTriangle:The legs and the hypotenuse}}
      <div class="tablewrap"><table>
      <thead><tr><th>Side</th><th>Opposite</th><th>Length</th></tr></thead>
      <tbody>
        <tr><td>hypotenuse</td><td class="m">90°</td><td>the longest</td></tr>
        <tr><td>each leg</td><td>an acute angle</td><td>shorter than the hypotenuse</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Why the hypotenuse must be longest</div>
      The larger angle faces the longer side, and the right angle is the largest of the three. The
      hypotenuse therefore beats both legs — before any calculation is done.</div>`
    },
    {
      h: 'The acute angles',
      html: `<p>The three angles add to ${m('180°')} and one of them is ${m('90°')}, so the other two add
      to ${m('90°')}: they are <b>complementary</b>.</p>
      ${eq(m('∠A + ∠B = 90°') + '  when  ' + m('∠C = 90°'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>One acute angle</th><th>The other</th></tr></thead>
      <tbody>
        <tr><td class="m">30°</td><td class="m">60°</td></tr>
        <tr><td class="m">45°</td><td class="m">45°</td></tr>
        <tr><td class="m">37°</td><td class="m">53°</td></tr>
        <tr><td class="m">72°</td><td class="m">18°</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Complementary, not supplementary</span>
      The two acute angles add to ${m('90°')}, not ${m('180°')}. Subtracting from ${m('180°')} here is the
      commonest slip of the topic and always gives an impossible answer.</div>`
    },
    {
      h: 'The ' + m('30°') + ' rule',
      html: `<p>In a right-angled triangle with an angle of ${m('30°')}, the leg opposite it is exactly
      half the hypotenuse — and the statement runs backwards too.</p>
      ${eq(m('∠A = 30°') + '  ⟺  ' + m('BC = ' + f('1', '2') + ' · AB'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>Reason</th></tr></thead>
      <tbody>
        <tr><td>reflect the triangle in the leg ${m('AC')}</td><td>construction</td></tr>
        <tr><td>the two copies form a triangle with three ${m('60°')} angles</td><td class="m">30° + 30° = 60°</td></tr>
        <tr><td>that triangle is equilateral</td><td>equiangular ⟹ equilateral</td></tr>
        <tr><td>the doubled leg equals the hypotenuse</td><td>equal sides</td></tr>
        <tr><td class="m">BC = ${f('1', '2')} · AB</td><td>halving</td></tr>
      </tbody></table></div>
      <div class="tablewrap"><table>
      <thead><tr><th>Hypotenuse</th><th>Leg opposite ${m('30°')}</th></tr></thead>
      <tbody>
        <tr><td class="m">10 cm</td><td class="m">5 cm</td></tr>
        <tr><td class="m">7 cm</td><td class="m">3.5 cm</td></tr>
        <tr><td class="m">24 cm</td><td class="m">12 cm</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">This is where a ramp's rule comes from</div>
      A ramp at ${m('30°')} rises one metre for every two metres of ramp. Builders quote it as a ratio;
      it is this theorem.</div>`
    },
    {
      h: 'Congruence tests',
      html: `<p>Because one angle is already known to be equal, right-angled triangles need less data
      than others.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Test</th><th>What must match</th><th>Which general criterion it is</th></tr></thead>
      <tbody>
        <tr><td>two legs</td><td>both legs</td><td>the first — the right angle is included</td></tr>
        <tr><td>a leg and an acute angle</td><td>one leg, one acute angle</td><td>the second</td></tr>
        <tr><td>hypotenuse and an acute angle</td><td>hypotenuse, one acute angle</td><td>the second</td></tr>
        <tr><td>hypotenuse and a leg</td><td>hypotenuse, one leg</td><td>special to right triangles</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Two angles are never enough</span>
      Knowing the right angle and one acute angle fixes the shape but not the size: the triangles are the
      same shape at any scale. At least one side must be given.</div>`
    }
  ],
  examples: [
    {
      q: 'One acute angle of a right-angled triangle is ' + m('37°') + '. Find the other.',
      steps: [
        ['The acute angles are complementary.', ''],
        [m('90° − 37° = 53°'), '']
      ],
      ans: m('53°')
    },
    {
      q: 'The hypotenuse is ' + m('16 cm') + ' and one angle is ' + m('30°') + '. Find the leg opposite it.',
      steps: [
        ['The leg opposite ' + m('30°') + ' is half the hypotenuse.', ''],
        [m('16 ÷ 2 = 8'), ''],
        ['The leg is ' + m('8 cm') + '.', '']
      ],
      ans: m('8 cm')
    },
    {
      q: 'A leg is ' + m('6 cm') + ' and the hypotenuse is ' + m('12 cm') + '. Find all three angles.',
      steps: [
        ['The leg is half the hypotenuse.', ''],
        ['By the converse of the ' + m('30°') + ' rule, the angle opposite it is ' + m('30°') + '.', ''],
        ['The other acute angle is ' + m('90° − 30° = 60°') + '.', ''],
        ['The angles are ' + m('30°, 60°, 90°') + '.', '']
      ],
      ans: m('30°, 60°, 90°')
    }
  ],
  modelNote: 'Give each pair a triangle with hypotenuse 10 cm and an angle of 30° and ask them to measure the short leg; every group reports 5 cm, and the theorem is already believed before it is proved.',
  interactive: {
    type: 'rightTriangle',
    title: 'The two acute angles always add to ' + m('90°'),
    hint: 'Move the angle and watch the sides respond.'
  },
  quiz: [
    { q: 'The side opposite the right angle is the:', a: ['leg', 'hypotenuse', 'median', 'base'], c: 1, why: 'By definition.' },
    { q: 'The hypotenuse is:', a: ['the shortest side', 'the longest side', 'equal to a leg', 'any side'], c: 1, why: 'It faces the largest angle.' },
    { q: 'The two acute angles add to:', a: [m('45°'), m('90°'), m('180°'), m('360°')], c: 1, why: m('180° − 90°') + '.' },
    { q: 'One acute angle is ' + m('72°') + '; the other is:', a: [m('18°'), m('28°'), m('108°'), m('118°')], c: 0, why: m('90 − 72') + '.' },
    { q: 'The leg opposite ' + m('30°') + ' is:', a: ['the hypotenuse', 'half the hypotenuse', 'twice the hypotenuse', 'equal to the other leg'], c: 1, why: 'The ' + m('30°') + ' rule.' },
    { q: 'Two right-angled triangles with two equal angles are:', a: ['congruent', 'not necessarily congruent', 'equal in area', 'impossible'], c: 1, why: 'No side is fixed.' }
  ],
  practice: {
    easy: [
      ['One acute angle ' + m('37°') + ': the other', m('53°')],
      ['One acute angle ' + m('45°') + ': the other', m('45°')],
      ['One acute angle ' + m('72°') + ': the other', m('18°')],
      ['Hypotenuse ' + m('10 cm') + ', angle ' + m('30°') + ': the opposite leg', m('5 cm')],
      ['Hypotenuse ' + m('7 cm') + ', angle ' + m('30°') + ': the opposite leg', m('3.5 cm')],
      ['The longest side of a right-angled triangle', 'the hypotenuse'],
      ['Name the sides beside the right angle', 'the legs']
    ],
    med: [
      ['Leg ' + m('6') + ', hypotenuse ' + m('12') + ': the angles', m('30°, 60°, 90°')],
      ['Hypotenuse ' + m('24 cm') + ', angle ' + m('60°') + ': the shorter leg', m('12 cm')],
      ['One acute angle is twice the other: find both', m('30°') + ' and ' + m('60°')],
      ['One acute angle is ' + m('10°') + ' more than the other', m('40°') + ' and ' + m('50°')],
      ['Can a right-angled triangle be obtuse-angled?', 'No'],
      ['Can a right-angled triangle be isosceles?', 'Yes — the acute angles are ' + m('45°') + ' each'],
      ['A ramp at ' + m('30°') + ' is ' + m('6 m') + ' long: its rise', m('3 m')]
    ],
    hard: [
      ['One acute angle is ' + m('4') + ' times the other: find both', m('18°') + ' and ' + m('72°')],
      ['The hypotenuse is ' + m('2') + ' times a leg: find the angles', m('30°, 60°, 90°')],
      ['A leg is ' + m('9 cm') + ' and it faces ' + m('30°') + ': find the hypotenuse', m('18 cm')],
      ['Which test lets two right triangles be congruent from a hypotenuse and a leg?', 'The test special to right-angled triangles'],
      ['Prove the ' + m('30°') + ' rule by reflection', 'The two copies form an equilateral triangle'],
      ['The acute angles are ' + m('2x') + ' and ' + m('3x') + ': find them', m('36°') + ' and ' + m('54°')],
      ['Why are two equal angles not enough for congruence here?', 'The size is not fixed — only the shape']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Subtract from ' + m('90°') + ', never from ' + m('180°') + ', when finding the second acute angle.',
  homework: [
    'One acute angle is ' + m('28°') + '. Find the other.',
    'The hypotenuse is ' + m('18 cm') + ' and one angle is ' + m('30°') + '. Find the opposite leg.',
    'A leg is ' + m('7 cm') + ' and the hypotenuse ' + m('14 cm') + '. Find all three angles.',
    'The acute angles are in the ratio ' + m('1 : 5') + '. Find them.',
    'List the four congruence tests for right-angled triangles and say which general criterion each is.'
  ]
});

/* ============================== 50 ============================== */
G7_MAT.push({
  id: 'g7-50', stream: 'mat', grade: 7, quarter: 3, lessons: '90–91', hours: 2,
  title: 'The property of the bisector of an angle',
  subtitle: 'Every point of a bisector is the same distance from the two arms — and only those points are.',
  uz: 'Matematika 7, §42', uzPage: 'pp. 262–268',
  cam: 'S8 5.3', camPage: 'Stage 8, pp. 52–56', wb: 'Exercise 5.3',
  objectives: [
    'State the bisector property and its converse.',
    'Prove the property using congruent right-angled triangles.',
    'Construct the bisector of an angle with compasses.',
    'Use the property to find the point equidistant from two lines.'
  ],
  terms: [
    ['Bisector', 'Bissektrisa', 'Биссектриса'],
    ['Arm of an angle', 'Burchak tomoni', 'Сторона угла'],
    ['Equidistant', 'Teng uzoqlikda', 'Равноудалённый'],
    ['Distance to a line', 'Nuqtadan chiziqqa masofa', 'Расстояние до прямой'],
    ['Converse', 'Teskari teorema', 'Обратная теорема'],
    ['Locus', 'Geometrik o‘rin', 'Геометрическое место точек'],
    ['Compasses', 'Sirkul', 'Циркуль'],
    ['Incentre', 'Ichki markaz', 'Центр вписанной окружности']
  ],
  timing: [[10, 'What distance means here'], [25, 'The property'], [20, 'The converse'], [25, 'The construction and its use'], [5, 'Homework']],
  sections: [
    {
      h: 'What distance means here',
      html: `<p>The distance from a point to a line is the length of the perpendicular dropped from the
      point to the line — not any slanting segment.</p>
      {{fig:bisectorConstruction:Dropping perpendiculars to both arms}}
      <div class="tablewrap"><table>
      <thead><tr><th>Segment from ${m('M')} to the line</th><th>Is it the distance?</th></tr></thead>
      <tbody>
        <tr><td>perpendicular</td><td>yes — and it is the shortest</td></tr>
        <tr><td>slanting</td><td>no — it is longer</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Measure to the arm, not to the vertex</span>
      The distance from a point on the bisector to the vertex is not what the theorem is about. Every
      statement below concerns the perpendiculars to the two arms.</div>`
    },
    {
      h: 'The property',
      html: `<p>Let ${m('M')} lie on the bisector of ${m('∠AOB')}, and drop perpendiculars ${m('MP')} and
      ${m('MQ')} to the arms.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>Reason</th></tr></thead>
      <tbody>
        <tr><td class="m">∠MOP = ∠MOQ</td><td>${m('OM')} is the bisector</td></tr>
        <tr><td class="m">∠MPO = ∠MQO = 90°</td><td>construction</td></tr>
        <tr><td class="m">OM = OM</td><td>common hypotenuse</td></tr>
        <tr><td class="m">△MPO ≡ △MQO</td><td>hypotenuse and an acute angle</td></tr>
        <tr><td class="m">MP = MQ</td><td>corresponding sides of congruent triangles</td></tr>
      </tbody></table></div>
      ${eq(m('M') + ' on the bisector  ⟹  ' + m('MP = MQ'), true)}
      <div class="keybox"><div class="klabel">The right-angle congruence test earns its keep</div>
      The proof needs exactly the test met last lesson: a common hypotenuse and one equal acute angle.
      That is why the two topics stand next to each other in the plan.</div>`
    },
    {
      h: 'The converse',
      html: `<p>The statement also runs backwards: a point inside the angle that is equidistant from both
      arms lies on the bisector.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Direction</th><th>Given</th><th>Conclusion</th></tr></thead>
      <tbody>
        <tr><td>property</td><td class="m">M</td><td class="m">MP = MQ</td></tr>
        <tr><td>converse</td><td class="m">MP = MQ</td><td class="m">M</td></tr>
      </tbody></table></div>
      <p>Taken together the two say: the bisector is <b>exactly</b> the set of points inside the angle
      equidistant from the arms — a locus, not merely a line with a nice property.</p>
      <div class="keybox"><div class="klabel">Where the three bisectors meet</div>
      Each bisector of a triangle is the locus of points equidistant from two sides, so the point common
      to two of them is equidistant from all three — and therefore lies on the third. That point is the
      incentre, the centre of the inscribed circle.</div>`
    },
    {
      h: 'The construction and its use',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>What to do</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>with centre ${m('O')}, cut both arms at ${m('A')} and ${m('B')}</td></tr>
        <tr><td>2</td><td>with the same radius and centres ${m('A')} and ${m('B')}, draw two arcs</td></tr>
        <tr><td>3</td><td>call their intersection ${m('M')}</td></tr>
        <tr><td>4</td><td>draw ${m('OM')} — it bisects the angle</td></tr>
      </tbody></table></div>
      <p>Why it works: ${m('OA = OB')} and ${m('AM = BM')} by construction, and ${m('OM')} is common, so
      ${m('△OAM ≡ △OBM')} by the third criterion and the two angles at ${m('O')} are equal.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>The point wanted</th></tr></thead>
      <tbody>
        <tr><td>a well equidistant from two straight roads</td><td>on the bisector of the angle between them</td></tr>
        <tr><td>a lamp lighting two walls equally</td><td>on the bisector of the corner</td></tr>
        <tr><td>the centre of a circle touching both arms</td><td>on the bisector</td></tr>
      </tbody></table></div>`
    }
  ],
  examples: [
    {
      q: m('M') + ' lies on the bisector of ' + m('∠AOB') + ' and its distance to one arm is ' + m('3.5 cm') + '. Find its distance to the other.',
      steps: [
        ['The bisector property applies.', ''],
        ['Both perpendiculars are equal.', ''],
        ['So the distance is ' + m('3.5 cm') + '.', '']
      ],
      ans: m('3.5 cm')
    },
    {
      q: 'A point inside an angle is ' + m('4 cm') + ' from each arm. What can be said about it?',
      steps: [
        ['It is equidistant from both arms.', ''],
        ['By the converse, it lies on the bisector.', '']
      ],
      ans: 'It lies on the bisector'
    },
    {
      q: 'Prove that the compass construction really bisects the angle.',
      steps: [
        [m('OA = OB'), 'Same radius from ' + m('O') + '.'],
        [m('AM = BM'), 'Same radius from ' + m('A') + ' and ' + m('B') + '.'],
        [m('OM = OM'), 'Common side.'],
        [m('△OAM ≡ △OBM') + ' by the third criterion, so ' + m('∠AOM = ∠BOM') + '.', '']
      ],
      ans: 'Proved by SSS'
    }
  ],
  modelNote: 'Ask where to dig a well equidistant from two roads before any theory; the class reaches for the bisector on its own, and the proof then explains a choice they have already made.',
  interactive: {
    type: 'quiz',
    title: 'Distance, bisector, locus',
    hint: 'Perpendiculars only.',
    items: [
      { q: 'The distance from a point to a line is measured:', a: ['any way', 'along the perpendicular', 'to the nearest end', 'to the vertex'], c: 1, why: 'The shortest segment.' },
      { q: 'A point on a bisector is equidistant from:', a: ['the two arms', 'the vertex and an arm', 'two vertices', 'nothing'], c: 0, why: 'The property.' },
      { q: 'The proof of the property uses:', a: ['the third criterion', 'hypotenuse and an acute angle', 'the angle sum', 'the axiom of parallels'], c: 1, why: 'Two right triangles.' },
      { q: 'A point equidistant from both arms lies:', a: ['at the vertex', 'on the bisector', 'anywhere inside', 'outside'], c: 1, why: 'The converse.' },
      { q: 'The bisector is the set of such points — that makes it a:', a: ['locus', 'median', 'transversal', 'tangent'], c: 0, why: 'A defined set of points.' },
      { q: 'The three bisectors of a triangle meet at the:', a: ['centroid', 'incentre', 'circumcentre', 'orthocentre'], c: 1, why: 'Equidistant from all three sides.' },
      { q: 'The compass construction is proved by:', a: ['SSS', 'SAS', 'ASA', 'measuring'], c: 0, why: 'Three pairs of equal sides.' },
      { q: 'A well equidistant from two roads should be:', a: ['at the crossing', 'on the bisector', 'on either road', 'anywhere'], c: 1, why: 'The locus.' }
    ]
  },
  quiz: [
    { q: 'A bisector divides an angle into:', a: ['two equal parts', 'two unequal parts', 'three parts', 'a right angle'], c: 0, why: 'By definition.' },
    { q: 'Distance to a line is measured along the:', a: ['bisector', 'perpendicular', 'arm', 'diagonal'], c: 1, why: 'The shortest path.' },
    { q: 'On a bisector, the two perpendicular distances are:', a: ['equal', 'in ratio ' + m('2 : 1'), 'unrelated', 'zero'], c: 0, why: 'The property.' },
    { q: 'The converse concludes that the point:', a: ['is the vertex', 'lies on the bisector', 'is outside', 'is the midpoint'], c: 1, why: 'Equidistant ⟹ on the bisector.' },
    { q: 'The proof uses which congruence test?', a: ['two legs', 'hypotenuse and an acute angle', 'three angles', 'two angles only'], c: 1, why: m('OM') + ' is common.' },
    { q: 'The incentre is equidistant from:', a: ['the vertices', 'the three sides', 'two sides', 'the midpoints'], c: 1, why: 'It is on all three bisectors.' }
  ],
  practice: {
    easy: [
      ['A bisector divides an angle into', 'two equal angles'],
      ['Distance from a point to a line is measured along the', 'perpendicular'],
      [m('M') + ' on the bisector, one distance ' + m('3.5 cm') + ': the other', m('3.5 cm')],
      ['A point ' + m('4 cm') + ' from each arm lies on the', 'bisector'],
      ['The bisector of ' + m('80°') + ' makes two angles of', m('40°')],
      ['The three bisectors of a triangle meet at the', 'incentre'],
      ['The incentre is the centre of the', 'inscribed circle']
    ],
    med: [
      ['The bisector of ' + m('∠AOB = 116°') + ': each half', m('58°')],
      ['Two bisectors of adjacent supplementary angles meet at', m('90°')],
      ['Name the congruence test used in the proof', 'Hypotenuse and an acute angle'],
      ['Name the congruence test used for the construction', 'The third criterion (SSS)'],
      ['Where should a well equidistant from two roads be dug?', 'On the bisector of the angle between them'],
      ['Is the vertex equidistant from both arms?', 'Yes — both distances are zero'],
      ['A point is ' + m('3 cm') + ' from one arm and ' + m('5 cm') + ' from the other: is it on the bisector?', 'No']
    ],
    hard: [
      ['Prove that the bisector property and its converse together define a locus', 'Every point on it qualifies and every point that qualifies is on it'],
      ['Why do the three bisectors of a triangle meet at one point?', 'Two give a point equidistant from all three sides, so the third passes through it'],
      ['In a triangle with ' + m('∠A = 60°') + ', the bisectors of ' + m('∠B') + ' and ' + m('∠C') + ' meet at ' + m('I') + ': find ' + m('∠BIC'), m('120°')],
      ['The bisector of the apex of an isosceles triangle is also its', 'median and altitude'],
      ['A circle of radius ' + m('2 cm') + ' touches both arms: where is its centre?', 'On the bisector, ' + m('2 cm') + ' from each arm'],
      ['Explain why the compass construction cannot fail for an angle under ' + m('180°'), 'The two equal arcs always meet inside the angle'],
      ['The bisectors of two vertical angles form', 'one straight line']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Leave your construction arcs on the page — they are the working.',
  homework: [
    'Construct the bisector of an angle of ' + m('70°') + ' with compasses and check it with a protractor.',
    'Write the proof of the bisector property in statement-and-reason form.',
    'A point inside an angle is ' + m('2.5 cm') + ' from each arm. Where does it lie, and why?',
    'Construct the three bisectors of a triangle and mark the incentre.',
    'Explain why the bisector is called the locus of points equidistant from the arms.'
  ]
});

/* ============================== 51 ============================== */
G7_MAT.push({
  id: 'g7-51', stream: 'mat', grade: 7, quarter: 3, lessons: '92–93', hours: 2,
  title: 'Relations between the sides and the angles of a triangle',
  subtitle: 'The longer side faces the larger angle — and the triangle inequality follows from the same idea.',
  uz: 'Matematika 7, §43', uzPage: 'pp. 269–276',
  cam: 'S8 5', camPage: 'Stage 8, pp. 44–56', wb: 'Exercise 5.4',
  objectives: [
    'State that the larger angle faces the longer side, and its converse.',
    'Order the sides of a triangle from its angles, and the angles from its sides.',
    'Use the triangle inequality to decide whether three lengths make a triangle.',
    'Show that the perpendicular is the shortest segment from a point to a line.'
  ],
  terms: [
    ['Opposite side', 'Qarshi tomon', 'Противолежащая сторона'],
    ['The larger', 'Kattaroq', 'Больший'],
    ['The smaller', 'Kichikroq', 'Меньший'],
    ['To order', 'Tartiblash', 'Упорядочить'],
    ['Triangle inequality', 'Uchburchak tengsizligi', 'Неравенство треугольника'],
    ['Perpendicular', 'Perpendikulyar', 'Перпендикуляр'],
    ['Slant segment', 'Og‘ma', 'Наклонная'],
    ['Shortest', 'Eng qisqa', 'Кратчайший']
  ],
  timing: [[15, 'The larger angle faces the longer side'], [20, 'Reading the order both ways'], [25, 'The triangle inequality'], [20, 'The shortest path to a line'], [5, 'Homework']],
  sections: [
    {
      h: 'The larger angle faces the longer side',
      html: `<p>In any triangle, the longer of two sides is opposite the larger of two angles — and the
      statement runs backwards as well.</p>
      ${eq(m('AB > AC') + '  ⟺  ' + m('∠C > ∠B'), true)}
      {{fig:triangleAngleSum:Each side faces the angle of matching rank}}
      <div class="tablewrap"><table>
      <thead><tr><th>Triangle</th><th>Largest angle</th><th>Longest side</th></tr></thead>
      <tbody>
        <tr><td class="m">∠A = 90°, ∠B = 60°, ∠C = 30°</td><td class="m">∠A</td><td class="m">BC</td></tr>
        <tr><td class="m">∠A = 40°, ∠B = 40°, ∠C = 100°</td><td class="m">∠C</td><td class="m">AB</td></tr>
        <tr><td>equilateral</td><td>all equal</td><td>all equal</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A side and the angle at its own end are not partners</span>
      The side ${m('BC')} is matched with ${m('∠A')}, the angle it faces, not with ${m('∠B')} or
      ${m('∠C')}. Reading the label off the wrong vertex reverses every answer.</div>`
    },
    {
      h: 'Reading the order both ways',
      html: `<p>Ranking the angles ranks the sides in exactly the same order, and the other way round.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Order of angles</th><th>Order of sides</th></tr></thead>
      <tbody>
        <tr><td class="m">∠A = 80°, ∠B = 60°, ∠C = 40°</td><td class="m">∠A > ∠B > ∠C</td><td class="m">BC > AC > AB</td></tr>
        <tr><td class="m">a = 5, b = 7, c = 9</td><td class="m">∠C > ∠B > ∠A</td><td class="m">c > b > a</td></tr>
        <tr><td>isosceles with ${m('AB = AC')}</td><td class="m">∠B = ∠C</td><td class="m">AC = AB</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The isosceles theorem is this theorem</div>
      Equal sides ⟺ equal base angles is the borderline case of the same statement: when neither side is
      longer, neither angle is larger.</div>`
    },
    {
      h: 'The triangle inequality',
      html: `<p>Each side of a triangle is shorter than the sum of the other two — the straight path from
      one vertex to another beats any detour through a third.</p>
      ${eq(m('a < b + c') + ',   ' + m('b < a + c') + ',   ' + m('c < a + b'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Lengths</th><th>Check the longest</th><th>A triangle?</th></tr></thead>
      <tbody>
        <tr><td class="m">3, 4, 5</td><td class="m">3 + 4 > 5</td><td>yes</td></tr>
        <tr><td class="m">5, 8, 14</td><td class="m">5 + 8 < 14</td><td>no</td></tr>
        <tr><td class="m">6, 9, 13</td><td class="m">6 + 9 > 13</td><td>yes</td></tr>
        <tr><td class="m">2, 3, 5</td><td class="m">2 + 3 = 5</td><td>no — the three points are in a line</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Only the longest side needs checking</div>
      If the longest side is beaten by the sum of the other two, the other two inequalities hold
      automatically. One line of working settles the question.</div>`
    },
    {
      h: 'The shortest path to a line',
      html: `<p>Drop a perpendicular ${m('MP')} from a point ${m('M')} to a line, and take any other
      segment ${m('MQ')} to that line.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>Reason</th></tr></thead>
      <tbody>
        <tr><td class="m">∠MPQ = 90°</td><td>construction</td></tr>
        <tr><td class="m">∠MPQ</td><td>the largest angle of ${m('△MPQ')}</td></tr>
        <tr><td class="m">MQ > MP</td><td>the longer side faces the larger angle</td></tr>
      </tbody></table></div>
      <p>So the perpendicular is shorter than every slant segment — which is exactly why distance to a
      line was defined along the perpendicular two lessons ago.</p>
      <div class="keybox"><div class="klabel">A definition justified after the event</div>
      Calling the perpendicular “the distance” was a choice; this theorem shows it was the only sensible
      one, since it is the minimum.</div>`
    }
  ],
  examples: [
    {
      q: 'In ' + m('△ABC') + ', ' + m('∠A = 80°') + ', ' + m('∠B = 60°') + '. Order the sides.',
      steps: [
        [m('∠C = 180° − 140° = 40°'), ''],
        [m('∠A > ∠B > ∠C'), ''],
        ['Each side faces the angle of matching rank.', ''],
        [m('BC > AC > AB'), '']
      ],
      ans: m('BC > AC > AB')
    },
    {
      q: 'Can ' + m('5, 8, 14') + ' be the sides of a triangle? And ' + m('6, 9, 13') + '?',
      steps: [
        ['Longest of the first is ' + m('14') + '.', ''],
        [m('5 + 8 = 13 < 14') + ' — no.', ''],
        ['Longest of the second is ' + m('13') + '.', ''],
        [m('6 + 9 = 15 > 13') + ' — yes.', '']
      ],
      ans: 'No; yes'
    },
    {
      q: 'Two sides of a triangle are ' + m('7') + ' and ' + m('10') + '. Between what values must the third lie?',
      steps: [
        ['It must beat the difference: ' + m('x > 10 − 7 = 3') + '.', ''],
        ['It must be beaten by the sum: ' + m('x < 10 + 7 = 17') + '.', ''],
        [m('3 < x < 17'), '']
      ],
      ans: m('3 < x < 17')
    }
  ],
  modelNote: 'Hand out strips of 5, 8 and 14 cm and ask the class to build the triangle; the failure is visible and the inequality is never forgotten.',
  interactive: {
    type: 'triangleAngles',
    title: 'Watch the longest side and the largest angle move together',
    hint: 'The readout names both — they always agree.'
  },
  quiz: [
    { q: 'The longest side faces:', a: ['the smallest angle', 'the largest angle', 'the right angle only', 'any angle'], c: 1, why: 'The theorem.' },
    { q: 'In a right-angled triangle the longest side is:', a: ['a leg', 'the hypotenuse', 'either', 'undetermined'], c: 1, why: 'It faces ' + m('90°') + '.' },
    { q: m('∠A = 80°, ∠B = 60°, ∠C = 40°') + ' gives:', a: [m('AB > BC > AC'), m('BC > AC > AB'), m('AC > AB > BC'), 'all equal'], c: 1, why: 'Matching ranks.' },
    { q: 'Sides ' + m('5, 8, 14') + ' make:', a: ['a triangle', 'no triangle', 'a right triangle', 'an isosceles triangle'], c: 1, why: m('5 + 8 < 14') + '.' },
    { q: 'To test three lengths you need to check:', a: ['all three sums', 'the longest side only', 'the shortest side', 'the perimeter'], c: 1, why: 'The rest follow.' },
    { q: 'The shortest segment from a point to a line is:', a: ['any slant', 'the perpendicular', 'the bisector', 'the median'], c: 1, why: 'It faces the right angle.' }
  ],
  practice: {
    easy: [
      ['The longest side faces the', 'largest angle'],
      ['The shortest side faces the', 'smallest angle'],
      [m('3, 4, 5') + ': a triangle?', 'Yes'],
      [m('5, 8, 14') + ': a triangle?', 'No'],
      [m('2, 3, 5') + ': a triangle?', 'No'],
      ['In a right triangle the longest side is the', 'hypotenuse'],
      ['The shortest segment to a line is the', 'perpendicular']
    ],
    med: [
      [m('∠A = 80°, ∠B = 60°') + ': order the sides', m('BC > AC > AB')],
      [m('a = 5, b = 7, c = 9') + ': order the angles', m('∠C > ∠B > ∠A')],
      ['Sides ' + m('7') + ' and ' + m('10') + ': the range of the third', m('3 < x < 17')],
      ['Sides ' + m('4') + ' and ' + m('9') + ': the range of the third', m('5 < x < 13')],
      ['An obtuse triangle: which side is longest?', 'The one facing the obtuse angle'],
      ['Isosceles with ' + m('AB = AC') + ': which angles are equal?', m('∠B = ∠C')],
      [m('6, 9, 13') + ': a triangle?', 'Yes']
    ],
    hard: [
      ['The perimeter of a triangle with sides ' + m('7, 10, x') + ' is a whole number: how many values of ' + m('x') + ' are whole?', m('13') + ' — from ' + m('4') + ' to ' + m('16')],
      ['Prove that the perpendicular is shorter than any slant segment', 'It faces the largest angle of the right triangle'],
      ['In ' + m('△ABC') + ', ' + m('∠A = 90°') + ': prove ' + m('BC') + ' is the longest side', 'It faces the largest angle'],
      ['Two sides are ' + m('8') + ' and ' + m('15') + ' and the third is a whole number: the smallest possible', m('8')],
      ['Can a triangle have sides ' + m('1, 2, 3') + '?', 'No — ' + m('1 + 2 = 3')],
      ['If ' + m('∠A > ∠B') + ' and ' + m('∠B > ∠C') + ', order the sides', m('a > b > c')],
      ['Why is checking the longest side enough?', 'The other two inequalities then hold automatically']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'For a triangle test, find the longest side first and check only that one.',
  homework: [
    'In ' + m('△ABC') + ', ' + m('∠A = 95°') + ' and ' + m('∠B = 45°') + '. Order the three sides.',
    'Decide whether ' + m('4, 6, 11') + ' and ' + m('4, 6, 9') + ' make triangles.',
    'Two sides are ' + m('9') + ' and ' + m('12') + '. Find the range of the third.',
    'Explain in two lines why the perpendicular is the shortest path to a line.',
    'A triangle has ' + m('a = 6, b = 6, c = 10') + '. Order its angles.'
  ]
});

/* ============================== 52 ============================== */
G7_MAT.push({
  id: 'g7-52', stream: 'mat', grade: 7, quarter: 3, lessons: '94–95', hours: 2,
  title: 'Practical exercises — area of triangles and quadrilaterals',
  subtitle: 'A Cambridge insert: one height, one base, and a compound shape cut into pieces you already know.',
  uz: 'Matematika 7, amaliy mashqlar', uzPage: 'pp. 277–281',
  cam: 'S8 15', camPage: 'Stage 8, pp. 148–156', wb: 'Exercise 15.2',
  objectives: [
    'Use the area formulae for a rectangle, a triangle, a parallelogram and a trapezium.',
    'Identify the height that belongs to a chosen base.',
    'Find the area of a compound shape by cutting or by subtracting.',
    'Work with the units of area and convert between them.'
  ],
  terms: [
    ['Area', 'Yuza', 'Площадь'],
    ['Base', 'Asos', 'Основание'],
    ['Height', 'Balandlik', 'Высота'],
    ['Perpendicular height', 'Perpendikulyar balandlik', 'Перпендикулярная высота'],
    ['Compound shape', 'Murakkab shakl', 'Составная фигура'],
    ['Trapezium', 'Trapetsiya', 'Трапеция'],
    ['Square centimetre', 'Kvadrat santimetr', 'Квадратный сантиметр'],
    ['Hectare', 'Gektar', 'Гектар']
  ],
  timing: [[10, 'The four formulae'], [25, 'Choosing the right height'], [25, 'Compound shapes'], [20, 'Units and estimation'], [5, 'Homework']],
  sections: [
    {
      h: 'The four formulae',
      html: `${eq(m('S = ab') + '     ' + m('S = ' + f('1', '2') + 'ah') + '     ' + m('S = ah') + '     ' + m('S = ' + f('a + b', '2') + ' · h'), true)}
      {{fig:areaTriangle:Base and perpendicular height}}
      <div class="tablewrap"><table>
      <thead><tr><th>Shape</th><th>Formula</th><th>What ${m('h')} means</th></tr></thead>
      <tbody>
        <tr><td>rectangle</td><td class="m">ab</td><td>the second side</td></tr>
        <tr><td>triangle</td><td class="m">${f('1', '2')}ah</td><td>perpendicular from the base to the opposite vertex</td></tr>
        <tr><td>parallelogram</td><td class="m">ah</td><td>perpendicular between the two parallel sides</td></tr>
        <tr><td>trapezium</td><td class="m">${f('a + b', '2')} · h</td><td>perpendicular between the parallel sides</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Three formulae, one idea</div>
      A parallelogram is two copies of a triangle, and a trapezium is a parallelogram whose two parallel
      sides have been averaged. Learning ${m('S = ' + f('1', '2') + 'ah')} and the reason for it makes the
      other two memorable rather than memorised.</div>`
    },
    {
      h: 'Choosing the right height',
      html: `<p>The height must be perpendicular to <b>the base you chose</b>. A slanting side is never a
      height, and in an obtuse triangle the height may fall outside the figure.</p>
      {{fig:areaParallelogram:The height is perpendicular, not slanting}}
      <div class="tablewrap"><table>
      <thead><tr><th>Figure</th><th>Base</th><th>Height</th><th>Area</th></tr></thead>
      <tbody>
        <tr><td>triangle</td><td class="m">10 cm</td><td class="m">6 cm</td><td class="m">30 cm²</td></tr>
        <tr><td>parallelogram</td><td class="m">8 cm</td><td class="m">5 cm</td><td class="m">40 cm²</td></tr>
        <tr><td>trapezium</td><td class="m">6 cm and 10 cm</td><td class="m">4 cm</td><td class="m">32 cm²</td></tr>
        <tr><td>rectangle</td><td class="m">7 cm</td><td class="m">3 cm</td><td class="m">21 cm²</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The slanting side is not the height</span>
      A parallelogram with sides ${m('8')} and ${m('6')} and height ${m('5')} has area ${m('40')}, not
      ${m('48')}. Using the second side instead of the perpendicular is the single commonest area error
      in the paper.</div>`
    },
    {
      h: 'Compound shapes',
      html: `<p>Two routes work for any compound figure: cut it into known pieces and add, or enclose it
      in a rectangle and subtract what is not wanted.</p>
      {{fig:polygonDecompose:Cutting a compound shape into known pieces}}
      <div class="tablewrap"><table>
      <thead><tr><th>Shape</th><th>Method</th><th>Working</th><th>Area</th></tr></thead>
      <tbody>
        <tr><td>an L-shape ${m('10 × 8')} with a ${m('4 × 3')} corner removed</td><td>subtract</td><td class="m">80 − 12</td><td class="m">68 cm²</td></tr>
        <tr><td>a house outline: ${m('6 × 4')} rectangle under a triangle of height ${m('3')}</td><td>add</td><td class="m">24 + 9</td><td class="m">33 cm²</td></tr>
        <tr><td>a path ${m('1 m')} wide round a ${m('5 × 4')} plot</td><td>subtract</td><td class="m">42 − 20</td><td class="m">22 m²</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Label the pieces before you calculate</div>
      Write the area of each piece next to it on the sketch. Nearly every lost mark on a compound shape
      is a piece counted twice or left out, not an arithmetic slip.</div>`
    },
    {
      h: 'Units and estimation',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Conversion</th><th>Factor</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td class="m">1 cm² = 100 mm²</td><td class="m">10²</td><td>both sides scaled by ${m('10')}</td></tr>
        <tr><td class="m">1 m² = 10 000 cm²</td><td class="m">100²</td><td>both sides scaled by ${m('100')}</td></tr>
        <tr><td class="m">1 ha = 10 000 m²</td><td class="m">100 × 100</td><td>a square ${m('100 m')} on a side</td></tr>
        <tr><td class="m">1 km² = 100 ha</td><td class="m">1000²</td><td>a square ${m('1 km')} on a side</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Lengths scale by ${m('k')}, areas by ${m('k²')}</span>
      A metre is ${m('100')} centimetres, but a square metre is ${m('10 000')} square centimetres. Using
      ${m('100')} for the area conversion is wrong by a factor of a hundred.</div>`
    }
  ],
  examples: [
    {
      q: 'A triangle has base ' + m('10 cm') + ' and height ' + m('6 cm') + '. Find its area.',
      steps: [
        [m('S = ' + f('1', '2') + 'ah'), ''],
        [m('S = ' + f('1', '2') + ' · 10 · 6'), ''],
        [m('S = 30 cm²'), '']
      ],
      ans: m('30 cm²')
    },
    {
      q: 'A trapezium has parallel sides ' + m('6 cm') + ' and ' + m('10 cm') + ' and height ' + m('4 cm') + '. Find its area.',
      steps: [
        [m('S = ' + f('a + b', '2') + ' · h'), ''],
        [m('S = ' + f('6 + 10', '2') + ' · 4'), ''],
        [m('S = 8 · 4'), ''],
        [m('S = 32 cm²'), '']
      ],
      ans: m('32 cm²')
    },
    {
      q: 'A rectangular plot ' + m('5 m') + ' by ' + m('4 m') + ' has a path ' + m('1 m') + ' wide all round it. Find the area of the path.',
      steps: [
        ['The outer rectangle is ' + m('7 m') + ' by ' + m('6 m') + '.', 'One metre on each side.'],
        [m('7 · 6 = 42 m²'), ''],
        [m('5 · 4 = 20 m²'), ''],
        [m('42 − 20 = 22 m²'), '']
      ],
      ans: m('22 m²')
    }
  ],
  modelNote: 'Give one parallelogram with all three lengths marked — base, slanting side and height — and ask for the area; the marks separate those who read the figure from those who multiply the first two numbers.',
  interactive: {
    type: 'areaModel',
    title: 'Slide the apex — the area does not move',
    hint: 'The base and the perpendicular height decide everything.'
  },
  quiz: [
    { q: 'The area of a triangle is:', a: [m('ah'), m(f('1', '2') + 'ah'), m('a + h'), m('2ah')], c: 1, why: 'Half a parallelogram.' },
    { q: 'The area of a parallelogram is:', a: [m('ah'), m(f('1', '2') + 'ah'), m('ab'), m('a + h')], c: 0, why: 'Base times perpendicular height.' },
    { q: 'In the formulae, ' + m('h') + ' must be:', a: ['a side', 'perpendicular to the base', 'the longest length', 'the diagonal'], c: 1, why: 'Always perpendicular.' },
    { q: 'A trapezium with parallel sides ' + m('6') + ' and ' + m('10') + ' and height ' + m('4') + ' has area:', a: [m('24'), m('32'), m('40'), m('64')], c: 1, why: m(f('16', '2') + ' · 4') + '.' },
    { q: m('1 m²') + ' equals:', a: [m('100 cm²'), m('1000 cm²'), m('10 000 cm²'), m('100 000 cm²')], c: 2, why: m('100²') + '.' },
    { q: m('1 ha') + ' equals:', a: [m('100 m²'), m('1000 m²'), m('10 000 m²'), m('100 000 m²')], c: 2, why: 'A ' + m('100 m') + ' square.' }
  ],
  practice: {
    easy: [
      ['Triangle, base ' + m('10') + ', height ' + m('6'), m('30 cm²')],
      ['Rectangle ' + m('7 × 3'), m('21 cm²')],
      ['Parallelogram, base ' + m('8') + ', height ' + m('5'), m('40 cm²')],
      ['Trapezium ' + m('6') + ' and ' + m('10') + ', height ' + m('4'), m('32 cm²')],
      ['Triangle, base ' + m('12') + ', height ' + m('5'), m('30 cm²')],
      [m('1 cm²') + ' in ' + m('mm²'), m('100')],
      [m('1 m²') + ' in ' + m('cm²'), m('10 000')]
    ],
    med: [
      ['Parallelogram with sides ' + m('8') + ' and ' + m('6') + ' and height ' + m('5'), m('40 cm²')],
      ['A triangle of area ' + m('24') + ' has base ' + m('8') + ': find the height', m('6')],
      ['A trapezium of area ' + m('45') + ', parallel sides ' + m('6') + ' and ' + m('9') + ': find the height', m('6')],
      ['L-shape: ' + m('10 × 8') + ' with a ' + m('4 × 3') + ' corner removed', m('68 cm²')],
      ['House outline: ' + m('6 × 4') + ' rectangle plus a triangle of height ' + m('3'), m('33 cm²')],
      ['A ' + m('1 m') + ' path round a ' + m('5 × 4') + ' plot', m('22 m²')],
      [m('3 ha') + ' in ' + m('m²'), m('30 000')]
    ],
    hard: [
      ['A rhombus with diagonals ' + m('10') + ' and ' + m('12'), m('60 cm²')],
      ['A triangle with base ' + m('a') + ' and height ' + m('h') + ' has its base doubled: the new area', m('twice the old')],
      ['Both dimensions of a rectangle are trebled: the area is multiplied by', m('9')],
      ['A field of ' + m('2.5 ha') + ' in ' + m('m²'), m('25 000')],
      ['A trapezium has parallel sides ' + m('x') + ' and ' + m('x + 6') + ' and height ' + m('4') + ': its area', m('4x + 12')],
      ['Two triangles have the same base and lie between the same parallels: their areas are', 'equal'],
      ['A ' + m('12 × 9') + ' rectangle contains a triangle on the ' + m('12') + ' side with apex on the opposite side: its area', m('54 cm²')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Sketch every shape and write the area of each piece beside it.',
  homework: [
    'Find the area of a triangle with base ' + m('14 cm') + ' and height ' + m('9 cm') + '.',
    'A parallelogram has sides ' + m('12') + ' and ' + m('7') + ' and height ' + m('5') + '. Find its area and say which number is not used.',
    'Find the area of a trapezium with parallel sides ' + m('8') + ' and ' + m('14') + ' and height ' + m('6') + '.',
    'A ' + m('2 m') + ' path runs round a ' + m('10 m') + ' by ' + m('6 m') + ' garden. Find the area of the path.',
    'Convert ' + m('4.5 ha') + ' to square metres and ' + m('250 000 cm²') + ' to square metres.'
  ]
});

/* ============================== 53 ============================== */
G7_MAT.push({
  id: 'g7-53', stream: 'mat', grade: 7, quarter: 3, lessons: '96–97', hours: 2,
  title: 'Control work 6, and work on the mistakes',
  subtitle: 'Parallel lines, the angle sum and right-angled triangles in one paper.',
  uz: 'Matematika 7, Nazorat ishi 6', uzPage: 'pp. 226–281',
  cam: 'S8 5 review', camPage: 'Stage 8, pp. 44–56', wb: 'Control paper M6',
  objectives: [
    'Name a pair of angles at a transversal before quoting any rule about it.',
    'Use the property when parallelism is given and the criterion when it is wanted.',
    'Find angles of triangles, including from an exterior angle.',
    'Classify each lost mark and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Transversal', 'Kesuvchi', 'Секущая'],
    ['Alternate angles', 'Ichki almashinuvchi burchaklar', 'Накрест лежащие углы'],
    ['Co-interior angles', 'Ichki bir tomonli burchaklar', 'Односторонние углы'],
    ['Angle sum', 'Burchaklar yig‘indisi', 'Сумма углов'],
    ['Exterior angle', 'Tashqi burchak', 'Внешний угол'],
    ['Hypotenuse', 'Gipotenuza', 'Гипотенуза'],
    ['Diagnosis', 'Tashxis', 'Диагностика']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [12, 'Answers'], [20, 'Diagnosis and rewrite'], [5, 'The map']],
  sections: [
    {
      h: 'The paper — 25 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Name the three pairs of angles at a transversal and say what each does when the lines are parallel</td><td class="m">3</td><td>L82–85</td></tr>
        <tr><td>2</td><td>${m('a ∥ b')} and one angle is ${m('112°')}: find all eight angles</td><td class="m">4</td><td>L84–85</td></tr>
        <tr><td>3</td><td>Co-interior angles are ${m('4x')} and ${m('5x')}: find both</td><td class="m">4</td><td>L84–85</td></tr>
        <tr><td>4</td><td>The angles of a triangle are in the ratio ${m('2 : 3 : 4')}: find them</td><td class="m">4</td><td>L86–87</td></tr>
        <tr><td>5</td><td>An exterior angle is ${m('125°')} and one remote interior angle is ${m('47°')}: find the other two interior angles</td><td class="m">5</td><td>L86–87</td></tr>
        <tr><td>6</td><td>Hypotenuse ${m('16 cm')}, one angle ${m('30°')}: find the opposite leg and the third angle</td><td class="m">5</td><td>L88–89</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks actually go</div>
      Q1 carries one mark for the word “co-interior” alone; Q2 one for noticing that only two sizes
      appear; Q5 two for using the <i>remote</i> pair and one for the check against ${m('180°')}; Q6 one
      for the ${m('30°')} rule being quoted by name.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>pair misnamed</td><td>“alternate” for two angles on the same side</td><td>check the position first</td></tr>
        <tr><td>co-interior treated as equal</td><td class="m">4x = 5x</td><td class="m">4x + 5x = 180°</td></tr>
        <tr><td>criterion used as a property</td><td>“alternate, so parallel, so equal”</td><td>parallelism was given — use the property</td></tr>
        <tr><td>all three angles added to the exterior angle</td><td class="m">125° = 47° + b + c</td><td>the two <i>remote</i> angles only</td></tr>
        <tr><td>acute angles subtracted from ${m('180°')}</td><td class="m">180° − 30° = 150°</td><td class="m">90° − 30° = 60°</td></tr>
        <tr><td>${m('30°')} rule inverted</td><td>the leg is twice the hypotenuse</td><td>it is half</td></tr>
        <tr><td>no check</td><td>three angles that do not total ${m('180°')}</td><td>add them back</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'The chapter as one map',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Block</th><th>The sentence</th></tr></thead>
      <tbody>
        <tr><td>parallel lines</td><td>no common point, and exactly one parallel through an outside point</td></tr>
        <tr><td>the criteria</td><td>an angle fact proves parallelism</td></tr>
        <tr><td>the properties</td><td>parallelism proves an angle fact</td></tr>
        <tr><td>the angle sum</td><td class="m">180°</td></tr>
        <tr><td>the exterior angle</td><td>equal to the two remote interior angles</td></tr>
        <tr><td>right-angled triangles</td><td>the acute angles add to ${m('90°')}</td></tr>
        <tr><td>the ${m('30°')} rule</td><td>that leg is half the hypotenuse</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Looking forward</div>
      The rest of Quarter III is algebra: the abridged multiplication formulae, algebraic fractions and
      linear equations. Geometry returns in Quarter IV with construction problems.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q3: co-interior angles ' + m('4x') + ' and ' + m('5x') + '.',
      steps: [
        ['Co-interior angles on parallel lines add to ' + m('180°') + '.', ''],
        [m('4x + 5x = 180°'), ''],
        [m('9x = 180°') + ', so ' + m('x = 20°') + '.', ''],
        ['The angles are ' + m('80°') + ' and ' + m('100°') + '.', '']
      ],
      ans: m('80°') + ' and ' + m('100°')
    },
    {
      q: 'Model answer, Q5: exterior ' + m('125°') + ', one remote interior angle ' + m('47°') + '.',
      steps: [
        ['The exterior angle equals the sum of the two remote angles.', ''],
        [m('125° − 47° = 78°'), 'The second remote angle.'],
        ['The adjacent interior angle is ' + m('180° − 125° = 55°') + '.', ''],
        ['Check: ' + m('47° + 78° + 55° = 180°') + ' ✓', '']
      ],
      ans: m('78°') + ' and ' + m('55°')
    },
    {
      q: 'Model answer, Q6: hypotenuse ' + m('16 cm') + ', one angle ' + m('30°') + '.',
      steps: [
        ['The leg opposite ' + m('30°') + ' is half the hypotenuse.', ''],
        [m('16 ÷ 2 = 8 cm'), ''],
        ['The acute angles add to ' + m('90°') + '.', ''],
        [m('90° − 30° = 60°'), '']
      ],
      ans: m('8 cm') + ' and ' + m('60°')
    }
  ],
  modelNote: 'Return Q1 first and have the class read the three names aloud; most of the lost marks in Q2 and Q3 turn out to be naming errors carried forward.',
  interactive: {
    type: 'quiz',
    title: 'The chapter in twelve questions',
    hint: 'Position first, rule second.',
    items: [
      { q: 'Parallel lines have how many common points?', a: [m('0'), m('1'), m('2'), 'many'], c: 0, why: 'They never meet.' },
      { q: 'Parallels through a point off a line:', a: [m('0'), 'exactly one', 'two', 'many'], c: 1, why: 'The axiom.' },
      { q: 'Equal alternate angles prove:', a: ['perpendicularity', 'parallelism', 'congruence', 'nothing'], c: 1, why: 'The criterion.' },
      { q: 'On parallel lines, co-interior angles:', a: ['are equal', 'add to ' + m('90°'), 'add to ' + m('180°'), 'add to ' + m('360°')], c: 2, why: 'The property.' },
      { q: 'With one angle of ' + m('112°') + ', the eight angles take:', a: ['one size', 'two sizes', 'four sizes', 'eight sizes'], c: 1, why: m('112°') + ' and ' + m('68°') + '.' },
      { q: 'Co-interior ' + m('4x') + ' and ' + m('5x') + ' give ' + m('x') + ' equal to:', a: [m('10'), m('20'), m('36'), m('45')], c: 1, why: m('9x = 180') + '.' },
      { q: 'The angles of a triangle add to:', a: [m('90°'), m('180°'), m('270°'), m('360°')], c: 1, why: 'The theorem.' },
      { q: 'Ratio ' + m('2 : 3 : 4') + ' gives:', a: [m('40°, 60°, 80°'), m('30°, 60°, 90°'), m('45°, 60°, 75°'), m('20°, 30°, 40°')], c: 0, why: m('9x = 180') + '.' },
      { q: 'An exterior angle equals:', a: ['the adjacent angle', 'the two remote angles', 'all three', m('90°')], c: 1, why: 'The theorem.' },
      { q: 'The acute angles of a right triangle add to:', a: [m('45°'), m('90°'), m('180°'), m('270°')], c: 1, why: m('180 − 90') + '.' },
      { q: 'Hypotenuse ' + m('16') + ', angle ' + m('30°') + ': the opposite leg is:', a: [m('4'), m('8'), m('16'), m('32')], c: 1, why: 'Half.' },
      { q: 'The longest side of any triangle faces:', a: ['the smallest angle', 'the largest angle', 'the right angle only', 'any angle'], c: 1, why: 'The ordering theorem.' }
    ]
  },
  quiz: [
    { q: 'Q1 asks first for:', a: ['a calculation', 'the names of the pairs', 'a construction', 'a proof'], c: 1, why: 'Naming is a mark.' },
    { q: 'In Q2 the eight angles take:', a: ['one size', 'two sizes', 'four sizes', 'eight sizes'], c: 1, why: 'An angle and its supplement.' },
    { q: 'Q3 uses:', a: ['equal co-interior angles', 'co-interior angles adding to ' + m('180°'), 'the angle sum', 'the exterior angle'], c: 1, why: 'The property.' },
    { q: 'Q4 sets up:', a: [m('9x = 180'), m('9x = 360'), m('x = 180'), m('3x = 180')], c: 0, why: m('2 + 3 + 4 = 9') + '.' },
    { q: 'Q5 uses:', a: ['all three interior angles', 'the two remote angles', 'the adjacent angle only', 'the angle sum alone'], c: 1, why: 'The exterior-angle theorem.' },
    { q: 'Q6 quotes:', a: ['the angle sum', 'the ' + m('30°') + ' rule', 'the criterion', 'the triangle inequality'], c: 1, why: 'Half the hypotenuse.' }
  ],
  practice: {
    easy: [
      ['On parallel lines, alternate angles are', 'equal'],
      ['On parallel lines, co-interior angles add to', m('180°')],
      ['One angle is ' + m('112°') + ': its supplement', m('68°')],
      ['Angles of a triangle add to', m('180°')],
      ['Acute angles of a right triangle add to', m('90°')],
      ['Hypotenuse ' + m('16') + ', angle ' + m('30°') + ': the opposite leg', m('8')],
      ['Exterior ' + m('125°') + ': the adjacent interior angle', m('55°')]
    ],
    med: [
      ['Co-interior ' + m('4x') + ' and ' + m('5x'), m('80°') + ' and ' + m('100°')],
      ['Ratio ' + m('2 : 3 : 4'), m('40°, 60°, 80°')],
      ['Exterior ' + m('125°') + ', one remote angle ' + m('47°') + ': the other', m('78°')],
      [m('a ∥ b') + ' and one angle ' + m('112°') + ': the alternate angle', m('112°')],
      [m('a ∥ b') + ' and one angle ' + m('112°') + ': the co-interior angle', m('68°')],
      ['Right triangle with an angle of ' + m('58°') + ': the third angle', m('32°')],
      ['Sides ' + m('4, 6, 11') + ': a triangle?', 'No']
    ],
    hard: [
      ['Alternate angles ' + m('6x − 5') + ' and ' + m('4x + 25') + ' on parallel lines', m('x = 15')],
      ['An exterior angle is ' + m('4') + ' times its adjacent interior angle', m('144°') + ' and ' + m('36°')],
      ['A right triangle has acute angles in the ratio ' + m('2 : 7'), m('20°') + ' and ' + m('70°')],
      ['Co-interior ' + m('2x + 30') + ' and ' + m('x + 60'), m('x = 30')],
      ['One angle of a triangle is the sum of the other two: what kind of triangle is it?', 'Right-angled'],
      ['A transversal cuts two parallel lines at ' + m('90°') + ': all eight angles are', m('90°')],
      ['Angles ' + m('x, x + 20, x + 40'), m('40°, 60°, 80°')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite every question you lost a mark on in full, from the first line.',
  homework: [
    'Rewrite in full every question on which you lost a mark.',
    'Draw a transversal across two parallel lines, mark ' + m('118°') + ' and label all eight angles.',
    'Co-interior angles are ' + m('7x') + ' and ' + m('2x') + '. Find both.',
    'An exterior angle is ' + m('132°') + ' and one remote interior angle is ' + m('61°') + '. Find the other two.',
    'Write one sentence for each of the seven blocks on the chapter map.'
  ]
});

/* ============================== 54 ============================== */
G7_MAT.push({
  id: 'g7-54', stream: 'mat', grade: 7, quarter: 3, lessons: '98–99', hours: 2,
  title: 'The square of a sum and of a difference',
  subtitle: 'Two formulae worth knowing by heart — and the middle term that everybody forgets.',
  uz: 'Matematika 7, §44', uzPage: 'pp. 282–289',
  cam: 'S8 2.3', camPage: 'Stage 8, pp. 18–24', wb: 'Exercise 2.3',
  objectives: [
    'Derive ' + m('(a + b)²') + ' and ' + m('(a − b)²') + ' by multiplying out.',
    'Apply both formulae in either direction.',
    'Explain the middle term with a square picture.',
    'Use the formulae to square numbers mentally.'
  ],
  terms: [
    ['Square of a sum', 'Yig‘indining kvadrati', 'Квадрат суммы'],
    ['Square of a difference', 'Ayirmaning kvadrati', 'Квадрат разности'],
    ['Abridged multiplication', 'Qisqa ko‘paytirish', 'Сокращённое умножение'],
    ['Middle term', 'O‘rta had', 'Средний член'],
    ['Double product', 'Ikkilangan ko‘paytma', 'Удвоенное произведение'],
    ['Identity', 'Ayniyat', 'Тождество'],
    ['Perfect square', 'To‘la kvadrat', 'Полный квадрат'],
    ['Mental arithmetic', 'Og‘zaki hisoblash', 'Устный счёт']
  ],
  timing: [[15, 'Where the formulae come from'], [20, 'The square picture'], [25, 'Using them both ways'], [20, 'Squaring numbers in the head'], [5, 'Homework']],
  sections: [
    {
      h: 'Where the formulae come from',
      html: `<p>Nothing new is being claimed: both formulae are ordinary multiplications, done once and
      then remembered.</p>
      ${eq(m('(a + b)² = a² + 2ab + b²'), true)}
      ${eq(m('(a − b)² = a² − 2ab + b²'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td>write it out</td><td class="m">(a + b)(a + b)</td></tr>
        <tr><td>four products</td><td class="m">a² + ab + ba + b²</td></tr>
        <tr><td>collect</td><td class="m">a² + 2ab + b²</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('(a + b)²')} is not ${m('a² + b²')}</span>
      Try ${m('a = 3, b = 4')}: the left side is ${m('49')}, the right ${m('25')}. The missing
      ${m('2ab = 24')} is the whole difference, and it is missing from more answers than any other term
      in the course.</div>`
    },
    {
      h: 'The square picture',
      html: `<p>A square of side ${m('a + b')} splits into four pieces: two squares and two equal
      rectangles.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Piece</th><th>Dimensions</th><th>Area</th></tr></thead>
      <tbody>
        <tr><td>large square</td><td class="m">a × a</td><td class="m">a²</td></tr>
        <tr><td>rectangle</td><td class="m">a × b</td><td class="m">ab</td></tr>
        <tr><td>rectangle</td><td class="m">b × a</td><td class="m">ab</td></tr>
        <tr><td>small square</td><td class="m">b × b</td><td class="m">b²</td></tr>
      </tbody></table></div>
      <p>Total: ${m('a² + 2ab + b²')}. The two rectangles are the middle term, and they are impossible to
      overlook once the picture has been drawn.</p>
      <div class="keybox"><div class="klabel">The sign is the only difference</div>
      In ${m('(a − b)²')} the middle term is subtracted, but ${m('b²')} is still added: a square is never
      negative. Both formulae end in ${m('+ b²')}.</div>`
    },
    {
      h: 'Using them both ways',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Expand</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">(x + 5)²</td><td class="m">x² + 10x + 25</td></tr>
        <tr><td class="m">(x − 7)²</td><td class="m">x² − 14x + 49</td></tr>
        <tr><td class="m">(3a + 2)²</td><td class="m">9a² + 12a + 4</td></tr>
        <tr><td class="m">(2x − 5y)²</td><td class="m">4x² − 20xy + 25y²</td></tr>
      </tbody></table></div>
      <div class="tablewrap"><table>
      <thead><tr><th>Recognise a perfect square</th><th>As a square</th></tr></thead>
      <tbody>
        <tr><td class="m">x² + 10x + 25</td><td class="m">(x + 5)²</td></tr>
        <tr><td class="m">x² − 14x + 49</td><td class="m">(x − 7)²</td></tr>
        <tr><td class="m">9a² + 12a + 4</td><td class="m">(3a + 2)²</td></tr>
        <tr><td class="m">x² + 6x + 10</td><td>not a perfect square</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The test for a perfect square</div>
      Take the square roots of the first and last terms, double their product, and compare with the
      middle term. For ${m('x² + 6x + 10')} that gives ${m('2 · x · √10')}, which is not ${m('6x')} — so
      it is not one.</div>`
    },
    {
      h: 'Squaring numbers in the head',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Number</th><th>Split</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">51²</td><td class="m">(50 + 1)²</td><td class="m">2500 + 100 + 1</td><td class="m">2601</td></tr>
        <tr><td class="m">49²</td><td class="m">(50 − 1)²</td><td class="m">2500 − 100 + 1</td><td class="m">2401</td></tr>
        <tr><td class="m">102²</td><td class="m">(100 + 2)²</td><td class="m">10000 + 400 + 4</td><td class="m">10404</td></tr>
        <tr><td class="m">98²</td><td class="m">(100 − 2)²</td><td class="m">10000 − 400 + 4</td><td class="m">9604</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Split at the nearest round number</div>
      Choose ${m('a')} to be the ten or hundred nearest to the number; then ${m('b')} is small, ${m('b²')}
      is tiny, and the whole calculation fits in the head.</div>`
    }
  ],
  examples: [
    {
      q: 'Expand ' + m('(2x − 5y)²') + '.',
      steps: [
        [m('a = 2x') + ', ' + m('b = 5y') + '.', ''],
        [m('a² = 4x²'), ''],
        [m('2ab = 2 · 2x · 5y = 20xy'), 'Subtracted, because of the minus.'],
        [m('b² = 25y²') + ', so the answer is ' + m('4x² − 20xy + 25y²') + '.', '']
      ],
      ans: m('4x² − 20xy + 25y²')
    },
    {
      q: 'Is ' + m('9a² + 12a + 4') + ' a perfect square?',
      steps: [
        [m('√(9a²) = 3a') + ' and ' + m('√4 = 2') + '.', ''],
        [m('2 · 3a · 2 = 12a'), 'It matches the middle term.'],
        ['So it is ' + m('(3a + 2)²') + '.', '']
      ],
      ans: m('(3a + 2)²')
    },
    {
      q: 'Find ' + m('49²') + ' mentally.',
      steps: [
        [m('49 = 50 − 1'), ''],
        [m('50² = 2500'), ''],
        [m('2 · 50 · 1 = 100') + ', subtracted.', ''],
        [m('2500 − 100 + 1 = 2401'), '']
      ],
      ans: m('2401')
    }
  ],
  modelNote: 'Ask the class for (a + b)² before teaching anything; collect the wrong a² + b² answers on the board, then draw the square picture beside them.',
  interactive: {
    type: 'areaModel',
    title: 'The square cut into four pieces',
    hint: 'The two rectangles are the middle term.'
  },
  quiz: [
    { q: m('(a + b)²') + ' equals:', a: [m('a² + b²'), m('a² + 2ab + b²'), m('a² − 2ab + b²'), m('2a + 2b')], c: 1, why: 'Four products, collected.' },
    { q: m('(a − b)²') + ' equals:', a: [m('a² − b²'), m('a² − 2ab + b²'), m('a² + 2ab − b²'), m('a² − 2ab − b²')], c: 1, why: m('+ b²') + ' either way.' },
    { q: m('(x + 5)²') + ' equals:', a: [m('x² + 25'), m('x² + 10x + 25'), m('x² + 5x + 25'), m('x² + 10x + 10')], c: 1, why: m('2 · x · 5') + '.' },
    { q: 'The middle term of ' + m('(3a + 2)²') + ' is:', a: [m('6a'), m('12a'), m('5a'), m('9a')], c: 1, why: m('2 · 3a · 2') + '.' },
    { q: m('x² + 6x + 10') + ' is:', a: ['a perfect square', 'not a perfect square', m('(x + 3)²'), m('(x + 5)²')], c: 1, why: m('2 · x · √10 ≠ 6x') + '.' },
    { q: m('49²') + ' by the formula is:', a: [m('2401'), m('2409'), m('2601'), m('2500')], c: 0, why: m('2500 − 100 + 1') + '.' }
  ],
  practice: {
    easy: [
      [m('(x + 3)²'), m('x² + 6x + 9')],
      [m('(x − 4)²'), m('x² − 8x + 16')],
      [m('(x + 5)²'), m('x² + 10x + 25')],
      [m('(a + 1)²'), m('a² + 2a + 1')],
      [m('(2x + 1)²'), m('4x² + 4x + 1')],
      [m('(y − 6)²'), m('y² − 12y + 36')],
      [m('51²'), m('2601')]
    ],
    med: [
      [m('(3a + 2)²'), m('9a² + 12a + 4')],
      [m('(2x − 5y)²'), m('4x² − 20xy + 25y²')],
      [m('(4m − 3n)²'), m('16m² − 24mn + 9n²')],
      [m('x² + 10x + 25') + ' as a square', m('(x + 5)²')],
      [m('x² − 14x + 49') + ' as a square', m('(x − 7)²')],
      [m('98²'), m('9604')],
      [m('102²'), m('10404')]
    ],
    hard: [
      [m('(a + b)² − (a − b)²'), m('4ab')],
      [m('(a + b)² + (a − b)²'), m('2a² + 2b²')],
      ['If ' + m('a + b = 7') + ' and ' + m('ab = 12') + ', find ' + m('a² + b²'), m('25')],
      ['If ' + m('a − b = 3') + ' and ' + m('ab = 10') + ', find ' + m('a² + b²'), m('29')],
      [m('(x + ' + f('1', 'x') + ')²'), m('x² + 2 + ' + f('1', 'x²'))],
      ['For which ' + m('k') + ' is ' + m('x² + kx + 36') + ' a perfect square?', m('k = ±12')],
      [m('(2a − 3)² − (2a + 3)²'), m('−24a')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write the middle term before the last one; it is the term that gets forgotten.',
  homework: [
    'Expand ' + m('(x + 8)²') + ', ' + m('(x − 9)²') + ' and ' + m('(5a + 2)²') + '.',
    'Expand ' + m('(3x − 4y)²') + '.',
    'Write ' + m('x² + 12x + 36') + ' and ' + m('4a² − 20a + 25') + ' as squares.',
    'Find ' + m('52²') + ' and ' + m('97²') + ' mentally, showing the split.',
    'If ' + m('a + b = 9') + ' and ' + m('ab = 20') + ', find ' + m('a² + b²') + '.'
  ]
});

/* ============================== 55 ============================== */
G7_MAT.push({
  id: 'g7-55', stream: 'mat', grade: 7, quarter: 3, lessons: '100–101', hours: 2,
  title: 'The difference of two squares',
  subtitle: 'The one product whose middle term cancels — and the fastest factorisation in algebra.',
  uz: 'Matematika 7, §45', uzPage: 'pp. 290–296',
  cam: 'S8 2.4', camPage: 'Stage 8, pp. 25–30', wb: 'Exercise 2.4',
  objectives: [
    'Derive ' + m('(a − b)(a + b) = a² − b²') + ' and explain why the middle term vanishes.',
    'Factorise a difference of two squares in one step.',
    'Recognise that a sum of two squares does not factorise this way.',
    'Use the formula for mental arithmetic and for cancelling fractions.'
  ],
  terms: [
    ['Difference of two squares', 'Kvadratlar ayirmasi', 'Разность квадратов'],
    ['Sum of two squares', 'Kvadratlar yig‘indisi', 'Сумма квадратов'],
    ['Conjugate pair', 'Qo‘shma ifodalar', 'Сопряжённые выражения'],
    ['To cancel', 'Qisqartirish', 'Сокращать'],
    ['Factorisation', 'Ko‘paytuvchilarga ajratish', 'Разложение на множители'],
    ['Square root', 'Kvadrat ildiz', 'Квадратный корень'],
    ['One step', 'Bir qadamda', 'В один шаг'],
    ['Identity', 'Ayniyat', 'Тождество']
  ],
  timing: [[15, 'The vanishing middle term'], [25, 'Factorising in one step'], [20, 'What does not work'], [25, 'Two uses'], [5, 'Homework']],
  sections: [
    {
      h: 'The vanishing middle term',
      html: `${eq(m('(a − b)(a + b) = a² − b²'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td>four products</td><td class="m">a² + ab − ba − b²</td></tr>
        <tr><td class="m">+ab</td><td>cancels ${m('−ba')}</td></tr>
        <tr><td>what is left</td><td class="m">a² − b²</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Why this pair and no other</div>
      The two middle products are equal and opposite only because one bracket has ${m('+b')} and the
      other ${m('−b')}. Change either sign and the middle term returns.</div>`
    },
    {
      h: 'Factorising in one step',
      html: `<p>Read the identity from right to left: any difference of two squares factorises
      immediately.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th class="m">a</th><th class="m">b</th><th>Factorised</th></tr></thead>
      <tbody>
        <tr><td class="m">x² − 9</td><td class="m">x</td><td class="m">3</td><td class="m">(x − 3)(x + 3)</td></tr>
        <tr><td class="m">4a² − 25</td><td class="m">2a</td><td class="m">5</td><td class="m">(2a − 5)(2a + 5)</td></tr>
        <tr><td class="m">49 − y²</td><td class="m">7</td><td class="m">y</td><td class="m">(7 − y)(7 + y)</td></tr>
        <tr><td class="m">16x² − 81y²</td><td class="m">4x</td><td class="m">9y</td><td class="m">(4x − 9y)(4x + 9y)</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Take the common factor out first</span>
      ${m('2x² − 18')} is not a difference of two squares as it stands. Take out the ${m('2')} first:
      ${m('2(x² − 9) = 2(x − 3)(x + 3)')}. Factorising is always finished, never stopped halfway.</div>`
    },
    {
      h: 'What does not work',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Factorises like this?</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td class="m">x² − 9</td><td>yes</td><td>a difference of squares</td></tr>
        <tr><td class="m">x² + 9</td><td>no</td><td>a sum of squares</td></tr>
        <tr><td class="m">x² − 5</td><td>not over whole numbers</td><td class="m">√5</td></tr>
        <tr><td class="m">x³ − 8</td><td>not by this formula</td><td>cubes, not squares</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('a² + b²')} does not factorise</span>
      Writing ${m('x² + 9 = (x + 3)(x + 3)')} is wrong twice over: that product is ${m('x² + 6x + 9')}. A
      sum of two squares has no factorisation with real numbers at all.</div>`
    },
    {
      h: 'Two uses',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Product</th><th>As a difference</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">51 · 49</td><td class="m">50² − 1²</td><td class="m">2499</td></tr>
        <tr><td class="m">102 · 98</td><td class="m">100² − 2²</td><td class="m">9996</td></tr>
        <tr><td class="m">37 · 43</td><td class="m">40² − 3²</td><td class="m">1591</td></tr>
      </tbody></table></div>
      <p>And in a fraction the factorisation is what makes the cancelling possible:</p>
      ${eq(m(f('x² − 9', 'x + 3') + ' = ' + f('(x − 3)(x + 3)', 'x + 3') + ' = x − 3'), true)}
      <div class="keybox"><div class="klabel">This is why factorising comes before fractions</div>
      Nothing can be cancelled from ${m('x² − 9')} as it stands, because cancelling needs factors. Three
      lessons from now every algebraic fraction will begin with exactly this step.</div>`
    }
  ],
  examples: [
    {
      q: 'Factorise ' + m('16x² − 81y²') + '.',
      steps: [
        [m('√(16x²) = 4x'), ''],
        [m('√(81y²) = 9y'), ''],
        [m('= (4x − 9y)(4x + 9y)'), ''],
        ['Check: the middle terms cancel ✓', '']
      ],
      ans: m('(4x − 9y)(4x + 9y)')
    },
    {
      q: 'Factorise ' + m('2x² − 18') + ' completely.',
      steps: [
        ['Common factor first: ' + m('2(x² − 9)') + '.', ''],
        [m('x² − 9 = (x − 3)(x + 3)'), ''],
        [m('= 2(x − 3)(x + 3)'), '']
      ],
      ans: m('2(x − 3)(x + 3)')
    },
    {
      q: 'Find ' + m('37 · 43') + ' mentally.',
      steps: [
        ['Both are ' + m('3') + ' from ' + m('40') + '.', ''],
        [m('37 · 43 = (40 − 3)(40 + 3)'), ''],
        [m('= 1600 − 9'), ''],
        [m('= 1591'), '']
      ],
      ans: m('1591')
    }
  ],
  modelNote: 'Put 51 · 49 and 50 · 50 side by side on the board and ask which is bigger; the difference of exactly 1 is the formula arriving before its name.',
  interactive: {
    type: 'fractionCancel',
    title: 'Factorise, then cancel',
    hint: 'Only factors cancel — that is what the formula provides.'
  },
  quiz: [
    { q: m('(a − b)(a + b)') + ' equals:', a: [m('a² + b²'), m('a² − b²'), m('a² − 2ab + b²'), m('a² + 2ab + b²')], c: 1, why: 'The middle terms cancel.' },
    { q: m('x² − 9') + ' factorises to:', a: [m('(x − 3)²'), m('(x − 3)(x + 3)'), m('(x − 9)(x + 1)'), 'it does not'], c: 1, why: m('b = 3') + '.' },
    { q: m('x² + 9') + ' factorises to:', a: [m('(x + 3)²'), m('(x − 3)(x + 3)'), m('(x + 3)(x + 3)'), 'it does not'], c: 3, why: 'A sum of squares.' },
    { q: m('4a² − 25') + ' factorises to:', a: [m('(2a − 5)(2a + 5)'), m('(4a − 5)(a + 5)'), m('(2a − 5)²'), m('(4a − 25)(a + 1)')], c: 0, why: m('a = 2a, b = 5') + '.' },
    { q: m('2x² − 18') + ' factorises completely to:', a: [m('2(x² − 9)'), m('2(x − 3)(x + 3)'), m('(2x − 3)(x + 6)'), m('(x − 3)(x + 3)')], c: 1, why: 'Finish the job.' },
    { q: m('51 · 49') + ' equals:', a: [m('2499'), m('2500'), m('2501'), m('2401')], c: 0, why: m('2500 − 1') + '.' }
  ],
  practice: {
    easy: [
      [m('x² − 9'), m('(x − 3)(x + 3)')],
      [m('x² − 16'), m('(x − 4)(x + 4)')],
      [m('a² − 1'), m('(a − 1)(a + 1)')],
      [m('49 − y²'), m('(7 − y)(7 + y)')],
      [m('4a² − 25'), m('(2a − 5)(2a + 5)')],
      [m('(x − 2)(x + 2)'), m('x² − 4')],
      [m('51 · 49'), m('2499')]
    ],
    med: [
      [m('16x² − 81y²'), m('(4x − 9y)(4x + 9y)')],
      [m('2x² − 18'), m('2(x − 3)(x + 3)')],
      [m('x⁴ − 16'), m('(x² − 4)(x² + 4) = (x − 2)(x + 2)(x² + 4)')],
      [m('102 · 98'), m('9996')],
      [m('37 · 43'), m('1591')],
      [m(f('x² − 9', 'x + 3')), m('x − 3')],
      ['Does ' + m('x² + 25') + ' factorise?', 'No']
    ],
    hard: [
      [m('9a² − 4b²'), m('(3a − 2b)(3a + 2b)')],
      [m('(x + 1)² − 4'), m('(x − 1)(x + 3)')],
      [m('a⁴ − b⁴'), m('(a − b)(a + b)(a² + b²)')],
      [m(f('4x² − 25', '2x + 5')), m('2x − 5')],
      [m('123² − 122²'), m('245')],
      ['Factorise ' + m('50² − 49²') + ' and evaluate', m('99')],
      [m('x² − ' + f('1', '4')), m('(x − ' + f('1', '2') + ')(x + ' + f('1', '2') + ')')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Always take out the common factor before looking for a difference of squares.',
  homework: [
    'Factorise ' + m('x² − 36') + ', ' + m('9a² − 16') + ' and ' + m('25 − 4y²') + '.',
    'Factorise ' + m('3x² − 27') + ' completely.',
    'Find ' + m('61 · 59') + ' and ' + m('104 · 96') + ' by the formula.',
    'Simplify ' + m(f('x² − 25', 'x − 5')) + '.',
    'Explain in one sentence why ' + m('x² + 16') + ' does not factorise.'
  ]
});

/* ============================== 56 ============================== */
G7_MAT.push({
  id: 'g7-56', stream: 'mat', grade: 7, quarter: 3, lessons: '102–103', hours: 2,
  title: 'The cube of a sum. The cube of a difference',
  subtitle: 'Four terms, coefficients ' + m('1, 3, 3, 1') + ', and the signs that alternate in the second formula.',
  uz: 'Matematika 7, §46', uzPage: 'pp. 297–303',
  cam: 'Beyond Stage 8', camPage: 'Stage 8 extension', wb: 'Extension sheet 2A',
  objectives: [
    'Derive ' + m('(a + b)³') + ' from ' + m('(a + b)²') + ' by one more multiplication.',
    'Write both cube formulae from memory, with the right signs.',
    'Expand cubes of binomials with coefficients and two letters.',
    'Recognise a perfect cube and cube numbers mentally.'
  ],
  terms: [
    ['Cube of a sum', 'Yig‘indining kubi', 'Куб суммы'],
    ['Cube of a difference', 'Ayirmaning kubi', 'Куб разности'],
    ['Cube', 'Kub', 'Куб'],
    ['Coefficient', 'Koeffitsiyent', 'Коэффициент'],
    ['Alternating signs', 'Almashinuvchi ishoralar', 'Чередующиеся знаки'],
    ['Perfect cube', 'To‘la kub', 'Полный куб'],
    ['Expansion', 'Yoyilma', 'Разложение'],
    ['Pattern', 'Qonuniyat', 'Закономерность']
  ],
  timing: [[15, 'From the square to the cube'], [20, 'The two formulae'], [25, 'Expanding with coefficients'], [20, 'Reading a cube backwards'], [5, 'Homework']],
  sections: [
    {
      h: 'From the square to the cube',
      html: `<p>${m('(a + b)³')} is ${m('(a + b)²')} multiplied by one more bracket — nothing more
      mysterious than that.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td>the square</td><td class="m">a² + 2ab + b²</td></tr>
        <tr><td>times ${m('a')}</td><td class="m">a³ + 2a²b + ab²</td></tr>
        <tr><td>times ${m('b')}</td><td class="m">a²b + 2ab² + b³</td></tr>
        <tr><td>collect</td><td class="m">a³ + 3a²b + 3ab² + b³</td></tr>
      </tbody></table></div>
      ${eq(m('(a + b)³ = a³ + 3a²b + 3ab² + b³'), true)}
      <div class="keybox"><div class="klabel">The coefficients are ${m('1, 3, 3, 1')}</div>
      The square had ${m('1, 2, 1')} and the cube has ${m('1, 3, 3, 1')}. Each row of this triangle of
      numbers is built from the one above it — a pattern you will meet again in Grade 11 under the name
      of the binomial theorem.</div>`
    },
    {
      h: 'The two formulae',
      html: `${eq(m('(a + b)³ = a³ + 3a²b + 3ab² + b³'), true)}
      ${eq(m('(a − b)³ = a³ − 3a²b + 3ab² − b³'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Term</th><th>In ${m('(a + b)³')}</th><th>In ${m('(a − b)³')}</th></tr></thead>
      <tbody>
        <tr><td class="m">a³</td><td class="m">+</td><td class="m">+</td></tr>
        <tr><td class="m">3a²b</td><td class="m">+</td><td class="m">−</td></tr>
        <tr><td class="m">3ab²</td><td class="m">+</td><td class="m">+</td></tr>
        <tr><td class="m">b³</td><td class="m">+</td><td class="m">−</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">In the difference the signs alternate, and the last one is minus</span>
      Unlike ${m('(a − b)²')}, which ends in ${m('+ b²')}, the cube ends in ${m('− b³')} — because an odd
      power of a negative number stays negative. Ending a cube with a plus is the standard slip.</div>`
    },
    {
      h: 'Expanding with coefficients',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th class="m">a</th><th class="m">b</th><th>Expansion</th></tr></thead>
      <tbody>
        <tr><td class="m">(x + 2)³</td><td class="m">x</td><td class="m">2</td><td class="m">x³ + 6x² + 12x + 8</td></tr>
        <tr><td class="m">(x − 1)³</td><td class="m">x</td><td class="m">1</td><td class="m">x³ − 3x² + 3x − 1</td></tr>
        <tr><td class="m">(2x + 1)³</td><td class="m">2x</td><td class="m">1</td><td class="m">8x³ + 12x² + 6x + 1</td></tr>
        <tr><td class="m">(a − 2b)³</td><td class="m">a</td><td class="m">2b</td><td class="m">a³ − 6a²b + 12ab² − 8b³</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The whole term is cubed, coefficient included</span>
      In ${m('(2x + 1)³')} the first term is ${m('(2x)³ = 8x³')}, not ${m('2x³')}. Every power in the
      expansion applies to the bracketed term as a whole.</div>`
    },
    {
      h: 'Reading a cube backwards',
      html: `<p>Four terms with coefficients in the ratio ${m('1 : 3 : 3 : 1')} and matching cube roots
      make a perfect cube.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>As a cube</th></tr></thead>
      <tbody>
        <tr><td class="m">x³ + 6x² + 12x + 8</td><td class="m">(x + 2)³</td></tr>
        <tr><td class="m">x³ − 3x² + 3x − 1</td><td class="m">(x − 1)³</td></tr>
        <tr><td class="m">8x³ + 12x² + 6x + 1</td><td class="m">(2x + 1)³</td></tr>
        <tr><td class="m">x³ + 3x² + 3x + 2</td><td>not a cube — the last term should be ${m('1')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Cubing numbers in the head</div>
      ${m('21³ = (20 + 1)³ = 8000 + 1200 + 60 + 1 = 9261')}, and ${m('19³ = (20 − 1)³ = 8000 − 1200 + 60 − 1 = 6859')}.
      The alternating signs are easiest to see in exactly these calculations.</div>`
    }
  ],
  examples: [
    {
      q: 'Expand ' + m('(2x + 1)³') + '.',
      steps: [
        [m('a = 2x') + ', ' + m('b = 1') + '.', ''],
        [m('a³ = 8x³'), 'The coefficient is cubed too.'],
        [m('3a²b = 3 · 4x² · 1 = 12x²'), ''],
        [m('3ab² = 3 · 2x · 1 = 6x') + ', and ' + m('b³ = 1') + '.', '']
      ],
      ans: m('8x³ + 12x² + 6x + 1')
    },
    {
      q: 'Expand ' + m('(a − 2b)³') + '.',
      steps: [
        [m('a³'), ''],
        [m('−3a²(2b) = −6a²b'), ''],
        [m('+3a(2b)² = 12ab²'), ''],
        [m('−(2b)³ = −8b³'), '']
      ],
      ans: m('a³ − 6a²b + 12ab² − 8b³')
    },
    {
      q: 'Find ' + m('19³') + ' mentally.',
      steps: [
        [m('19 = 20 − 1'), ''],
        [m('20³ = 8000'), ''],
        [m('−3 · 400 · 1 = −1200') + ' and ' + m('+3 · 20 · 1 = +60') + '.', ''],
        [m('8000 − 1200 + 60 − 1 = 6859'), '']
      ],
      ans: m('6859')
    }
  ],
  modelNote: 'Build the row 1, 3, 3, 1 from 1, 2, 1 on the board by adding neighbours; the class then predicts 1, 4, 6, 4, 1 without being told, and the pattern is theirs.',
  interactive: {
    type: 'quiz',
    title: 'Signs and coefficients of a cube',
    hint: 'Four terms every time.',
    items: [
      { q: 'The coefficients of ' + m('(a + b)³') + ' are:', a: [m('1, 2, 1'), m('1, 3, 3, 1'), m('1, 1, 1, 1'), m('1, 4, 6, 4, 1')], c: 1, why: 'One row below the square.' },
      { q: 'How many terms does a cube of a binomial have?', a: [m('2'), m('3'), m('4'), m('6')], c: 2, why: m('a³, 3a²b, 3ab², b³') + '.' },
      { q: 'The last term of ' + m('(a − b)³') + ' is:', a: [m('+ b³'), m('− b³'), m('+ b²'), m('− b²')], c: 1, why: 'An odd power of a negative.' },
      { q: 'The last term of ' + m('(a − b)²') + ' is:', a: [m('+ b²'), m('− b²'), m('+ b³'), m('− 2b')], c: 0, why: 'A square is never negative.' },
      { q: 'The first term of ' + m('(2x + 1)³') + ' is:', a: [m('2x³'), m('4x³'), m('6x³'), m('8x³')], c: 3, why: m('(2x)³') + '.' },
      { q: m('(x − 1)³') + ' equals:', a: [m('x³ − 1'), m('x³ − 3x² + 3x − 1'), m('x³ + 3x² + 3x + 1'), m('x³ − 3x + 1')], c: 1, why: 'Alternating signs.' },
      { q: m('19³') + ' equals:', a: [m('6859'), m('6959'), m('5832'), m('6561')], c: 0, why: m('8000 − 1200 + 60 − 1') + '.' },
      { q: 'The row after ' + m('1, 3, 3, 1') + ' is:', a: [m('1, 4, 4, 1'), m('1, 4, 6, 4, 1'), m('1, 3, 4, 3, 1'), m('1, 5, 10, 5, 1')], c: 1, why: 'Add neighbouring pairs.' }
    ]
  },
  quiz: [
    { q: 'The coefficients in ' + m('(a + b)³') + ' are:', a: [m('1, 2, 1'), m('1, 3, 3, 1'), m('1, 1, 1, 1'), m('1, 4, 6, 4, 1')], c: 1, why: 'One row down from the square.' },
    { q: m('(a − b)³') + ' ends in:', a: [m('+ b³'), m('− b³'), m('+ b²'), m('− b²')], c: 1, why: 'An odd power of a negative.' },
    { q: m('(x − 1)³') + ' equals:', a: [m('x³ − 1'), m('x³ − 3x² + 3x − 1'), m('x³ + 3x² + 3x + 1'), m('x³ − 3x + 1')], c: 1, why: 'Alternating signs.' },
    { q: 'The first term of ' + m('(2x + 1)³') + ' is:', a: [m('2x³'), m('6x³'), m('8x³'), m('4x³')], c: 2, why: m('(2x)³') + '.' },
    { q: 'The middle terms of ' + m('(x + 2)³') + ' are:', a: [m('6x²') + ' and ' + m('12x'), m('4x²') + ' and ' + m('4x'), m('2x²') + ' and ' + m('8x'), m('3x²') + ' and ' + m('3x')], c: 0, why: m('3 · 2') + ' and ' + m('3 · 4') + '.' },
    { q: m('21³') + ' equals:', a: [m('9261'), m('8000'), m('9241'), m('9361')], c: 0, why: m('8000 + 1200 + 60 + 1') + '.' }
  ],
  practice: {
    easy: [
      [m('(x + 1)³'), m('x³ + 3x² + 3x + 1')],
      [m('(x − 1)³'), m('x³ − 3x² + 3x − 1')],
      [m('(x + 2)³'), m('x³ + 6x² + 12x + 8')],
      [m('(x − 2)³'), m('x³ − 6x² + 12x − 8')],
      [m('(a + 3)³'), m('a³ + 9a² + 27a + 27')],
      ['The coefficients of a cube', m('1, 3, 3, 1')],
      [m('11³'), m('1331')]
    ],
    med: [
      [m('(2x + 1)³'), m('8x³ + 12x² + 6x + 1')],
      [m('(3a − 1)³'), m('27a³ − 27a² + 9a − 1')],
      [m('(a − 2b)³'), m('a³ − 6a²b + 12ab² − 8b³')],
      [m('x³ + 6x² + 12x + 8') + ' as a cube', m('(x + 2)³')],
      [m('8x³ + 12x² + 6x + 1') + ' as a cube', m('(2x + 1)³')],
      [m('21³'), m('9261')],
      [m('19³'), m('6859')]
    ],
    hard: [
      [m('(x + ' + f('1', 'x') + ')³'), m('x³ + 3x + ' + f('3', 'x') + ' + ' + f('1', 'x³'))],
      [m('(a + b)³ − (a − b)³'), m('6a²b + 2b³')],
      [m('(a + b)³ + (a − b)³'), m('2a³ + 6ab²')],
      ['If ' + m('a + b = 5') + ' and ' + m('ab = 6') + ', find ' + m('a³ + b³'), m('35')],
      [m('(2a − 3b)³'), m('8a³ − 36a²b + 54ab² − 27b³')],
      ['Is ' + m('x³ + 3x² + 3x + 2') + ' a perfect cube?', 'No — the last term should be ' + m('1')],
      ['The next row after ' + m('1, 3, 3, 1'), m('1, 4, 6, 4, 1')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write the four signs before you write any numbers.',
  homework: [
    'Expand ' + m('(x + 4)³') + ' and ' + m('(x − 3)³') + '.',
    'Expand ' + m('(3x + 2)³') + '.',
    'Expand ' + m('(2a − b)³') + '.',
    'Write ' + m('x³ − 9x² + 27x − 27') + ' as a cube.',
    'Find ' + m('31³') + ' and ' + m('29³') + ' by the formulae.'
  ]
});

/* ============================== 57 ============================== */
G7_MAT.push({
  id: 'g7-57', stream: 'mat', grade: 7, quarter: 3, lessons: '104–105', hours: 2,
  title: 'The difference and the sum of two cubes',
  subtitle: 'Two factorisations that a sum of squares never had — and the trinomial that will not factorise further.',
  uz: 'Matematika 7, §47', uzPage: 'pp. 304–310',
  cam: 'Beyond Stage 8', camPage: 'Stage 8 extension', wb: 'Extension sheet 2B',
  objectives: [
    'Verify ' + m('a³ − b³ = (a − b)(a² + ab + b²)') + ' by expanding.',
    'Factorise sums and differences of cubes.',
    'Distinguish the incomplete square ' + m('a² + ab + b²') + ' from ' + m('(a + b)²') + '.',
    'Use the formulae in numerical work and in cancelling fractions.'
  ],
  terms: [
    ['Difference of two cubes', 'Kublar ayirmasi', 'Разность кубов'],
    ['Sum of two cubes', 'Kublar yig‘indisi', 'Сумма кубов'],
    ['Incomplete square', 'To‘liqsiz kvadrat', 'Неполный квадрат'],
    ['Cube root', 'Kub ildiz', 'Кубический корень'],
    ['Trinomial', 'Uch had', 'Трёхчлен'],
    ['Opposite signs', 'Qarama-qarshi ishoralar', 'Противоположные знаки'],
    ['To verify', 'Tekshirmoq', 'Проверить'],
    ['Factorisation', 'Ko‘paytuvchilarga ajratish', 'Разложение на множители']
  ],
  timing: [[15, 'The two formulae'], [20, 'Why the middle terms vanish'], [25, 'Factorising'], [20, 'Where they are used'], [5, 'Homework']],
  sections: [
    {
      h: 'The two formulae',
      html: `${eq(m('a³ − b³ = (a − b)(a² + ab + b²)'), true)}
      ${eq(m('a³ + b³ = (a + b)(a² − ab + b²)'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Formula</th><th>Sign in the bracket of two</th><th>Sign of the middle term</th></tr></thead>
      <tbody>
        <tr><td class="m">a³ − b³</td><td class="m">−</td><td class="m">+ab</td></tr>
        <tr><td class="m">a³ + b³</td><td class="m">+</td><td class="m">−ab</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The signs are always opposite</div>
      Whatever sign stands between ${m('a')} and ${m('b')} in the short bracket, the middle term of the
      long bracket takes the other one. Getting these two the same way round is the only real difficulty
      in the topic.</div>`
    },
    {
      h: 'Why the middle terms vanish',
      html: `<p>Expand ${m('(a − b)(a² + ab + b²)')} in full and watch four of the six terms cancel.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Product</th><th>Terms</th></tr></thead>
      <tbody>
        <tr><td class="m">a · (a² + ab + b²)</td><td class="m">a³ + a²b + ab²</td></tr>
        <tr><td class="m">−b · (a² + ab + b²)</td><td class="m">−a²b − ab² − b³</td></tr>
        <tr><td>sum</td><td class="m">a³ − b³</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('a² + ab + b²')} is not ${m('(a + b)²')}</span>
      The square has ${m('2ab')} in the middle; this trinomial has just ${m('ab')}. It is called the
      <b>incomplete square</b> for exactly that reason, and it does not factorise any further.</div>`
    },
    {
      h: 'Factorising',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th class="m">a</th><th class="m">b</th><th>Factorised</th></tr></thead>
      <tbody>
        <tr><td class="m">x³ − 8</td><td class="m">x</td><td class="m">2</td><td class="m">(x − 2)(x² + 2x + 4)</td></tr>
        <tr><td class="m">x³ + 27</td><td class="m">x</td><td class="m">3</td><td class="m">(x + 3)(x² − 3x + 9)</td></tr>
        <tr><td class="m">8a³ − 1</td><td class="m">2a</td><td class="m">1</td><td class="m">(2a − 1)(4a² + 2a + 1)</td></tr>
        <tr><td class="m">27x³ + 64y³</td><td class="m">3x</td><td class="m">4y</td><td class="m">(3x + 4y)(9x² − 12xy + 16y²)</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A sum of cubes does factorise</div>
      ${m('a² + b²')} was a dead end, but ${m('a³ + b³')} is not — the odd power makes all the difference.
      That is worth saying out loud, because the two look alike on the page.</div>`
    },
    {
      h: 'Where they are used',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Task</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('x³ − 8', 'x − 2')}</td><td class="m">${f('(x − 2)(x² + 2x + 4)', 'x − 2')}</td><td class="m">x² + 2x + 4</td></tr>
        <tr><td class="m">${f('x³ + 27', 'x + 3')}</td><td>cancel ${m('x + 3')}</td><td class="m">x² − 3x + 9</td></tr>
        <tr><td class="m">10³ − 1</td><td class="m">9 · (100 + 10 + 1)</td><td class="m">999</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Why ${m('n³ − 1')} is always divisible by ${m('n − 1')}</div>
      The factorisation shows it directly: one factor is ${m('n − 1')}. The same argument explains why
      ${m('999')}, ${m('9999')} and every repunit-like number of that shape has an obvious divisor.</div>`
    }
  ],
  examples: [
    {
      q: 'Factorise ' + m('8a³ − 1') + '.',
      steps: [
        [m('a = 2a') + ' and ' + m('b = 1') + ' — the cube roots.', ''],
        ['Short bracket: ' + m('(2a − 1)') + '.', ''],
        ['Long bracket: ' + m('(2a)² + 2a · 1 + 1² = 4a² + 2a + 1') + '.', 'Middle sign is the opposite.'],
        [m('= (2a − 1)(4a² + 2a + 1)'), '']
      ],
      ans: m('(2a − 1)(4a² + 2a + 1)')
    },
    {
      q: 'Factorise ' + m('27x³ + 64y³') + '.',
      steps: [
        [m('a = 3x') + ', ' + m('b = 4y') + '.', ''],
        ['Short bracket: ' + m('(3x + 4y)') + '.', ''],
        ['Long bracket: ' + m('9x² − 12xy + 16y²') + '.', 'Plus outside, minus inside.'],
        [m('= (3x + 4y)(9x² − 12xy + 16y²)'), '']
      ],
      ans: m('(3x + 4y)(9x² − 12xy + 16y²)')
    },
    {
      q: 'Simplify ' + m(f('x³ − 8', 'x − 2')) + '.',
      steps: [
        [m('x³ − 8 = (x − 2)(x² + 2x + 4)'), ''],
        ['The factor ' + m('x − 2') + ' cancels.', ''],
        [m('= x² + 2x + 4'), 'For ' + m('x ≠ 2') + '.']
      ],
      ans: m('x² + 2x + 4')
    }
  ],
  modelNote: 'Ask the class to expand (a − b)(a² + ab + b²) themselves before the formula is given; the six terms collapsing to two is more convincing than any statement of the rule.',
  interactive: {
    type: 'fractionCancel',
    title: 'A cube factorised, then cancelled',
    hint: 'The short bracket is what cancels.'
  },
  quiz: [
    { q: m('a³ − b³') + ' equals:', a: [m('(a − b)(a² + ab + b²)'), m('(a − b)³'), m('(a − b)(a² − ab + b²)'), m('(a − b)(a + b)²')], c: 0, why: 'Opposite signs.' },
    { q: m('a³ + b³') + ' equals:', a: [m('(a + b)³'), m('(a + b)(a² − ab + b²)'), m('(a + b)(a² + ab + b²)'), 'it does not factorise'], c: 1, why: 'Opposite signs.' },
    { q: m('x³ − 8') + ' factorises to:', a: [m('(x − 2)(x² + 2x + 4)'), m('(x − 2)³'), m('(x − 2)(x² − 2x + 4)'), m('(x − 8)(x² + 1)')], c: 0, why: m('b = 2') + '.' },
    { q: m('a² + ab + b²') + ' is:', a: [m('(a + b)²'), 'the incomplete square', m('(a − b)²'), 'a difference of squares'], c: 1, why: 'It has ' + m('ab') + ', not ' + m('2ab') + '.' },
    { q: m('x³ + 27') + ' factorises to:', a: [m('(x + 3)(x² − 3x + 9)'), m('(x + 3)³'), m('(x + 3)(x² + 3x + 9)'), 'it does not'], c: 0, why: 'Plus outside, minus inside.' },
    { q: 'Compared with ' + m('a² + b²') + ', a sum of cubes:', a: ['also fails to factorise', 'does factorise', 'is a square', 'is negative'], c: 1, why: 'The odd power.' }
  ],
  practice: {
    easy: [
      [m('x³ − 8'), m('(x − 2)(x² + 2x + 4)')],
      [m('x³ + 8'), m('(x + 2)(x² − 2x + 4)')],
      [m('x³ − 1'), m('(x − 1)(x² + x + 1)')],
      [m('x³ + 1'), m('(x + 1)(x² − x + 1)')],
      [m('x³ + 27'), m('(x + 3)(x² − 3x + 9)')],
      [m('x³ − 64'), m('(x − 4)(x² + 4x + 16)')],
      ['The name of ' + m('a² + ab + b²'), 'the incomplete square']
    ],
    med: [
      [m('8a³ − 1'), m('(2a − 1)(4a² + 2a + 1)')],
      [m('27x³ + 64y³'), m('(3x + 4y)(9x² − 12xy + 16y²)')],
      [m('125 − a³'), m('(5 − a)(25 + 5a + a²)')],
      [m(f('x³ − 8', 'x − 2')), m('x² + 2x + 4')],
      [m(f('x³ + 27', 'x + 3')), m('x² − 3x + 9')],
      [m('10³ − 1') + ' factorised', m('9 · 111 = 999')],
      ['Does ' + m('a³ + b³') + ' factorise?', 'Yes']
    ],
    hard: [
      [m('64x³ − 27y³'), m('(4x − 3y)(16x² + 12xy + 9y²)')],
      [m('2x³ + 16'), m('2(x + 2)(x² − 2x + 4)')],
      [m('a⁶ − b⁶') + ' as a product of four factors', m('(a − b)(a + b)(a² + ab + b²)(a² − ab + b²)')],
      ['Why is ' + m('n³ − 1') + ' always divisible by ' + m('n − 1') + '?', 'It is one of the factors'],
      [m('x³ − ' + f('1', '8')), m('(x − ' + f('1', '2') + ')(x² + ' + f('x', '2') + ' + ' + f('1', '4') + ')')],
      ['If ' + m('a + b = 5') + ' and ' + m('ab = 6') + ', find ' + m('a³ + b³') + ' using the formula', m('35')],
      ['Factorise ' + m('x⁶ − 64') + ' as a difference of squares first', m('(x³ − 8)(x³ + 8)')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write the short bracket first; its sign decides the middle sign of the long one.',
  homework: [
    'Factorise ' + m('x³ − 125') + ' and ' + m('x³ + 64') + '.',
    'Factorise ' + m('27a³ − 8b³') + '.',
    'Simplify ' + m(f('x³ + 1', 'x + 1')) + '.',
    'Factorise ' + m('5x³ − 40') + ' completely.',
    'Explain in one sentence the difference between ' + m('a² + ab + b²') + ' and ' + m('(a + b)²') + '.'
  ]
});

/* ============================== 58 ============================== */
G7_MAT.push({
  id: 'g7-58', stream: 'mat', grade: 7, quarter: 3, lessons: '106–107', hours: 2,
  title: 'Methods of factorising',
  subtitle: 'Four methods in a fixed order — common factor, formula, grouping, and the trinomial split.',
  uz: 'Matematika 7, §48', uzPage: 'pp. 311–318',
  cam: 'S8 2.4', camPage: 'Stage 8, pp. 25–30', wb: 'Exercise 2.4',
  objectives: [
    'Apply the four methods of factorising in the right order.',
    'Split the middle term of a quadratic trinomial into two.',
    'Combine methods where one alone is not enough.',
    'Recognise when a polynomial is already fully factorised.'
  ],
  terms: [
    ['Method', 'Usul', 'Способ'],
    ['Common factor', 'Umumiy ko‘paytuvchi', 'Общий множитель'],
    ['Abridged formula', 'Qisqa ko‘paytirish formulasi', 'Формула сокращённого умножения'],
    ['Grouping', 'Guruhlash', 'Группировка'],
    ['Trinomial', 'Uch had', 'Трёхчлен'],
    ['To split a term', 'Hadni ajratish', 'Разбить член'],
    ['Completely factorised', 'To‘liq ajratilgan', 'Полностью разложен'],
    ['Order of steps', 'Qadamlar tartibi', 'Порядок действий']
  ],
  timing: [[10, 'The order of the methods'], [25, 'Splitting the middle term'], [25, 'Combining methods'], [20, 'When to stop'], [5, 'Homework']],
  sections: [
    {
      h: 'The order of the methods',
      html: `<p>Always work down this list. Taking the steps out of order is what makes a factorisation
      look impossible.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Method</th><th>Look for</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>common factor</td><td>something in every term</td></tr>
        <tr><td>2</td><td>an abridged formula</td><td>two terms, or a perfect square</td></tr>
        <tr><td>3</td><td>grouping</td><td>four terms</td></tr>
        <tr><td>4</td><td>splitting the middle term</td><td>a quadratic trinomial</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Step 1 is never skipped</div>
      ${m('2x² − 18')} looks like nothing until the ${m('2')} comes out; ${m('3x² + 12x + 12')} becomes
      ${m('3(x + 2)²')} the same way. Take the common factor first, every single time.</div>`
    },
    {
      h: 'Splitting the middle term',
      html: `<p>For ${m('x² + px + q')}, find two numbers whose <b>product</b> is ${m('q')} and whose
      <b>sum</b> is ${m('p')}. Split the middle term into those two and group.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Trinomial</th><th>Product</th><th>Sum</th><th>The two numbers</th><th>Factorised</th></tr></thead>
      <tbody>
        <tr><td class="m">x² + 7x + 12</td><td class="m">12</td><td class="m">7</td><td class="m">3, 4</td><td class="m">(x + 3)(x + 4)</td></tr>
        <tr><td class="m">x² − 5x + 6</td><td class="m">6</td><td class="m">−5</td><td class="m">−2, −3</td><td class="m">(x − 2)(x − 3)</td></tr>
        <tr><td class="m">x² + x − 12</td><td class="m">−12</td><td class="m">1</td><td class="m">4, −3</td><td class="m">(x + 4)(x − 3)</td></tr>
        <tr><td class="m">x² − 2x − 15</td><td class="m">−15</td><td class="m">−2</td><td class="m">−5, 3</td><td class="m">(x − 5)(x + 3)</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The sign of the product comes first</div>
      A negative product means the two numbers have opposite signs; a positive product means they match,
      and then the sign of the middle term tells you which sign both take. Deciding the signs before
      hunting for the numbers halves the work.</div>`
    },
    {
      h: 'Combining methods',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Steps</th><th>Result</th></tr></thead>
      <tbody>
        <tr><td class="m">2x² − 18</td><td>common factor, then difference of squares</td><td class="m">2(x − 3)(x + 3)</td></tr>
        <tr><td class="m">3x² + 12x + 12</td><td>common factor, then a perfect square</td><td class="m">3(x + 2)²</td></tr>
        <tr><td class="m">x³ − x</td><td>common factor, then difference of squares</td><td class="m">x(x − 1)(x + 1)</td></tr>
        <tr><td class="m">2x² + 10x + 12</td><td>common factor, then split the middle term</td><td class="m">2(x + 2)(x + 3)</td></tr>
        <tr><td class="m">a³ + a² − a − 1</td><td>grouping, then difference of squares</td><td class="m">(a − 1)(a + 1)²</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">One method is rarely the whole answer</span>
      Stopping at ${m('2(x² − 9)')} loses the marks that the second step carries. Ask after every step
      whether any bracket can still be broken down.</div>`
    },
    {
      h: 'When to stop',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Fully factorised?</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td class="m">2(x − 3)(x + 3)</td><td>yes</td><td>each bracket is linear</td></tr>
        <tr><td class="m">2(x² − 9)</td><td>no</td><td class="m">x² − 9</td></tr>
        <tr><td class="m">(x + 1)(x² + 1)</td><td>yes</td><td>a sum of squares does not factorise</td></tr>
        <tr><td class="m">(x − 2)(x² + 2x + 4)</td><td>yes</td><td>the incomplete square does not factorise</td></tr>
        <tr><td class="m">x² + x + 1</td><td>yes — it is prime</td><td>no two whole numbers give the product and the sum</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Check by expanding, always</div>
      A factorisation is finished when no bracket can be broken further, and it is correct when
      expanding it returns the original polynomial exactly. Both checks take seconds.</div>`
    }
  ],
  examples: [
    {
      q: 'Factorise ' + m('x² + x − 12') + '.',
      steps: [
        ['Product ' + m('−12') + ', sum ' + m('1') + '.', 'A negative product: opposite signs.'],
        ['The numbers are ' + m('4') + ' and ' + m('−3') + '.', ''],
        [m('x² + 4x − 3x − 12'), ''],
        [m('x(x + 4) − 3(x + 4) = (x + 4)(x − 3)'), '']
      ],
      ans: m('(x + 4)(x − 3)')
    },
    {
      q: 'Factorise ' + m('2x² + 10x + 12') + ' completely.',
      steps: [
        ['Common factor ' + m('2') + ': ' + m('2(x² + 5x + 6)') + '.', ''],
        ['Product ' + m('6') + ', sum ' + m('5') + ': the numbers are ' + m('2') + ' and ' + m('3') + '.', ''],
        [m('= 2(x + 2)(x + 3)'), ''],
        ['Check by expanding ✓', '']
      ],
      ans: m('2(x + 2)(x + 3)')
    },
    {
      q: 'Factorise ' + m('a³ + a² − a − 1') + '.',
      steps: [
        ['Group: ' + m('a²(a + 1) − (a + 1)') + '.', ''],
        [m('= (a + 1)(a² − 1)'), ''],
        [m('a² − 1 = (a − 1)(a + 1)'), 'Do not stop here.'],
        [m('= (a − 1)(a + 1)²'), '']
      ],
      ans: m('(a − 1)(a + 1)²')
    }
  ],
  modelNote: 'Put five mixed expressions on the board and ask only which method each needs, without factorising; choosing the method is the skill, and it can be practised on its own.',
  interactive: {
    type: 'quiz',
    title: 'Which method does this one need?',
    hint: 'Common factor first, always.',
    items: [
      { q: m('6x² + 9x') + ' needs:', a: ['a common factor', 'a formula', 'grouping', 'splitting'], c: 0, why: m('3x') + ' is in both terms.' },
      { q: m('x² − 25') + ' needs:', a: ['a common factor', 'a formula', 'grouping', 'splitting'], c: 1, why: 'A difference of squares.' },
      { q: m('ax + ay + bx + by') + ' needs:', a: ['a common factor', 'a formula', 'grouping', 'splitting'], c: 2, why: 'Four terms.' },
      { q: m('x² + 7x + 12') + ' needs:', a: ['a common factor', 'a formula', 'grouping', 'splitting'], c: 3, why: 'A quadratic trinomial.' },
      { q: m('2x² − 18') + ' needs:', a: ['a common factor only', 'a formula only', 'a common factor then a formula', 'grouping'], c: 2, why: 'Both steps.' },
      { q: 'For ' + m('x² − 5x + 6') + ' the two numbers are:', a: [m('2, 3'), m('−2, −3'), m('−1, −6'), m('1, 6')], c: 1, why: 'Product ' + m('6') + ', sum ' + m('−5') + '.' },
      { q: 'A negative product means the numbers:', a: ['are both positive', 'are both negative', 'have opposite signs', 'are equal'], c: 2, why: 'One of each.' },
      { q: m('2(x² − 9)') + ' is:', a: ['fully factorised', 'not fully factorised', 'wrong', 'prime'], c: 1, why: m('x² − 9') + ' still factorises.' }
    ]
  },
  quiz: [
    { q: 'The first method to try is always:', a: ['a formula', 'the common factor', 'grouping', 'splitting'], c: 1, why: 'It simplifies everything after it.' },
    { q: 'Grouping is used when there are:', a: ['two terms', 'three terms', 'four terms', 'one term'], c: 2, why: 'Two pairs.' },
    { q: 'For ' + m('x² + px + q') + ' the two numbers have product:', a: [m('p'), m('q'), m('p + q'), m('pq')], c: 1, why: 'And sum ' + m('p') + '.' },
    { q: m('x² + x − 12') + ' factorises to:', a: [m('(x + 4)(x − 3)'), m('(x − 4)(x + 3)'), m('(x + 6)(x − 2)'), m('(x + 12)(x − 1)')], c: 0, why: m('4 − 3 = 1') + '.' },
    { q: m('x³ − x') + ' factorises to:', a: [m('x(x² − 1)'), m('x(x − 1)(x + 1)'), m('(x − 1)(x + 1)'), m('x³(1 − x)')], c: 1, why: 'Finish the job.' },
    { q: 'A factorisation is checked by:', a: ['dividing', 'expanding', 'substituting ' + m('0'), 'nothing'], c: 1, why: 'It must return the original.' }
  ],
  practice: {
    easy: [
      [m('x² + 7x + 12'), m('(x + 3)(x + 4)')],
      [m('x² − 5x + 6'), m('(x − 2)(x − 3)')],
      [m('x² + x − 12'), m('(x + 4)(x − 3)')],
      [m('x² − 2x − 15'), m('(x − 5)(x + 3)')],
      [m('x² − 9'), m('(x − 3)(x + 3)')],
      [m('6x² + 9x'), m('3x(2x + 3)')],
      [m('x² + 6x + 9'), m('(x + 3)²')]
    ],
    med: [
      [m('2x² − 18'), m('2(x − 3)(x + 3)')],
      [m('3x² + 12x + 12'), m('3(x + 2)²')],
      [m('x³ − x'), m('x(x − 1)(x + 1)')],
      [m('2x² + 10x + 12'), m('2(x + 2)(x + 3)')],
      [m('x² − 8x + 15'), m('(x − 3)(x − 5)')],
      [m('x² + 2x − 8'), m('(x + 4)(x − 2)')],
      [m('ax + ay + bx + by'), m('(x + y)(a + b)')]
    ],
    hard: [
      [m('a³ + a² − a − 1'), m('(a − 1)(a + 1)²')],
      [m('x⁴ − 5x² + 4'), m('(x − 1)(x + 1)(x − 2)(x + 2)')],
      [m('3x³ − 27x'), m('3x(x − 3)(x + 3)')],
      [m('x² + x + 1'), 'Prime — it does not factorise'],
      [m('2x³ + 16'), m('2(x + 2)(x² − 2x + 4)')],
      [m('x² − 10x + 25 − y²'), m('(x − 5 − y)(x − 5 + y)')],
      [m('4x² − 12x + 9'), m('(2x − 3)²')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Take the common factor out first, and expand your answer back at the end.',
  homework: [
    'Factorise ' + m('x² + 9x + 20') + ' and ' + m('x² − 7x + 10') + '.',
    'Factorise ' + m('x² − 3x − 10') + '.',
    'Factorise ' + m('5x² − 45') + ' completely.',
    'Factorise ' + m('x³ + 2x² − x − 2') + ' by grouping.',
    'Say which method each of ' + m('4a² − 9') + ', ' + m('6ab + 9a') + ' and ' + m('x² − x − 6') + ' needs.'
  ]
});

/* ============================== 59 ============================== */
G7_MAT.push({
  id: 'g7-59', stream: 'mat', grade: 7, quarter: 3, lessons: '108–109', hours: 2,
  title: 'Applying the abridged multiplication formulae',
  subtitle: 'The five formulae at work — mental arithmetic, simplification, proofs and identities.',
  uz: 'Matematika 7, §49', uzPage: 'pp. 319–326',
  cam: 'S8 2.4', camPage: 'Stage 8, pp. 25–30', wb: 'Exercise 2.4',
  objectives: [
    'Choose the right formula from the shape of an expression.',
    'Use the formulae to calculate quickly without a calculator.',
    'Simplify expressions in which several formulae appear together.',
    'Prove a simple divisibility statement by factorising.'
  ],
  terms: [
    ['Abridged multiplication', 'Qisqa ko‘paytirish', 'Сокращённое умножение'],
    ['To apply', 'Qo‘llash', 'Применять'],
    ['To simplify', 'Soddalashtirish', 'Упростить'],
    ['Identity', 'Ayniyat', 'Тождество'],
    ['Divisible', 'Bo‘linadi', 'Делится'],
    ['Consecutive', 'Ketma-ket', 'Последовательные'],
    ['Even number', 'Juft son', 'Чётное число'],
    ['Proof', 'Isbot', 'Доказательство']
  ],
  timing: [[10, 'The five formulae in one table'], [20, 'Mental arithmetic'], [25, 'Simplifying'], [25, 'Proving something'], [5, 'Homework']],
  sections: [
    {
      h: 'The five formulae in one table',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Name</th><th>Formula</th><th>Recognise it by</th></tr></thead>
      <tbody>
        <tr><td>square of a sum</td><td class="m">(a + b)² = a² + 2ab + b²</td><td>three terms, middle ${m('2ab')}</td></tr>
        <tr><td>square of a difference</td><td class="m">(a − b)² = a² − 2ab + b²</td><td>three terms, middle ${m('−2ab')}</td></tr>
        <tr><td>difference of squares</td><td class="m">a² − b² = (a − b)(a + b)</td><td>two square terms, a minus</td></tr>
        <tr><td>cube of a sum or difference</td><td class="m">(a ± b)³</td><td>four terms, ${m('1, 3, 3, 1')}</td></tr>
        <tr><td>sum or difference of cubes</td><td class="m">a³ ± b³</td><td>two cube terms</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Count the terms first</div>
      Two terms point to a difference of squares or a sum of cubes; three to a square; four to a cube or
      to grouping. Counting decides the formula before any algebra is attempted.</div>`
    },
    {
      h: 'Mental arithmetic',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Task</th><th>Formula</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">103²</td><td class="m">(a + b)²</td><td class="m">10000 + 600 + 9</td><td class="m">10609</td></tr>
        <tr><td class="m">97²</td><td class="m">(a − b)²</td><td class="m">10000 − 600 + 9</td><td class="m">9409</td></tr>
        <tr><td class="m">63 · 57</td><td class="m">a² − b²</td><td class="m">3600 − 9</td><td class="m">3591</td></tr>
        <tr><td class="m">75² − 25²</td><td class="m">a² − b²</td><td class="m">50 · 100</td><td class="m">5000</td></tr>
        <tr><td class="m">31³</td><td class="m">(a + b)³</td><td class="m">27000 + 2700 + 90 + 1</td><td class="m">29791</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">${m('75² − 25²')} in one line</div>
      Factorised it is ${m('(75 − 25)(75 + 25) = 50 · 100')}. Squaring both numbers first takes four times
      as long and invites an arithmetic slip.</div>`
    },
    {
      h: 'Simplifying',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Simplified</th></tr></thead>
      <tbody>
        <tr><td class="m">(a + b)² − (a − b)²</td><td class="m">4ab</td></tr>
        <tr><td class="m">(a + b)² + (a − b)²</td><td class="m">2a² + 2b²</td></tr>
        <tr><td class="m">(x + 3)² − (x − 3)²</td><td class="m">12x</td></tr>
        <tr><td class="m">(x + 2)(x − 2) − x²</td><td class="m">−4</td></tr>
        <tr><td class="m">${f('x² − 16', 'x + 4')}</td><td class="m">x − 4</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Expand both brackets before subtracting</span>
      ${m('(a + b)² − (a − b)²')} is not ${m('(2b)²')}. Subtracting the brackets as if they were single
      numbers is the standard slip; expand each one and then subtract term by term.</div>`
    },
    {
      h: 'Proving something',
      html: `<p>A factorised form can prove a statement that the expanded form hides completely.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Claim</th><th>Factorised</th><th>Why it follows</th></tr></thead>
      <tbody>
        <tr><td class="m">n² + n</td><td class="m">n(n + 1)</td><td>consecutive numbers — one is even</td></tr>
        <tr><td class="m">n² − 1</td><td class="m">(n − 1)(n + 1)</td><td>for odd ${m('n')}, both factors are even</td></tr>
        <tr><td class="m">(n + 1)² − n²</td><td class="m">2n + 1</td><td>always odd</td></tr>
        <tr><td class="m">n³ − n</td><td class="m">(n − 1)n(n + 1)</td><td>three consecutive numbers</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Why the difference of two consecutive squares is odd</div>
      ${m('(n + 1)² − n² = 2n + 1')}, which is odd for every whole ${m('n')}. It also explains why every
      odd number is a difference of two squares — ${m('9 = 5² − 4²')}, ${m('11 = 6² − 5²')}, and so
      on.</div>`
    }
  ],
  examples: [
    {
      q: 'Find ' + m('75² − 25²') + ' without a calculator.',
      steps: [
        ['A difference of squares.', ''],
        [m('= (75 − 25)(75 + 25)'), ''],
        [m('= 50 · 100'), ''],
        [m('= 5000'), '']
      ],
      ans: m('5000')
    },
    {
      q: 'Simplify ' + m('(x + 3)² − (x − 3)²') + '.',
      steps: [
        [m('(x + 3)² = x² + 6x + 9'), ''],
        [m('(x − 3)² = x² − 6x + 9'), ''],
        ['Subtract: ' + m('12x') + '.', 'The squares and the ' + m('9') + 's cancel.']
      ],
      ans: m('12x')
    },
    {
      q: 'Prove that ' + m('n² − 1') + ' is divisible by ' + m('8') + ' for every odd ' + m('n') + '.',
      steps: [
        [m('n² − 1 = (n − 1)(n + 1)'), ''],
        ['For odd ' + m('n') + ' both factors are even.', ''],
        ['They are consecutive even numbers, so one is a multiple of ' + m('4') + '.', ''],
        ['The product is therefore a multiple of ' + m('2 · 4 = 8') + '.', '']
      ],
      ans: 'Divisible by ' + m('8')
    }
  ],
  modelNote: 'Give the class 25 · 35, 51 · 49 and 98² as a race against the calculators; the formulae win, and the point needs no further argument.',
  interactive: {
    type: 'quiz',
    title: 'Which formula fits?',
    hint: 'Count the terms first.',
    items: [
      { q: m('x² − 49') + ' fits:', a: ['square of a sum', 'difference of squares', 'sum of cubes', 'none'], c: 1, why: 'Two square terms.' },
      { q: m('x² + 10x + 25') + ' fits:', a: ['square of a sum', 'difference of squares', 'cube of a sum', 'none'], c: 0, why: m('2 · x · 5') + '.' },
      { q: m('x³ − 27') + ' fits:', a: ['difference of squares', 'difference of cubes', 'cube of a difference', 'none'], c: 1, why: 'Two cube terms.' },
      { q: m('x³ − 6x² + 12x − 8') + ' fits:', a: ['difference of cubes', 'cube of a difference', 'square of a difference', 'none'], c: 1, why: 'Four terms, ' + m('1, 3, 3, 1') + '.' },
      { q: m('97²') + ' is easiest as:', a: [m('(100 − 3)²'), m('(90 + 7)²'), m('97 · 97'), m('(100 + 3)²')], c: 0, why: 'The nearest hundred.' },
      { q: m('63 · 57') + ' equals:', a: [m('3591'), m('3600'), m('3609'), m('3549')], c: 0, why: m('3600 − 9') + '.' },
      { q: m('(a + b)² − (a − b)²') + ' equals:', a: [m('2b²'), m('4ab'), m('2a²'), m('0')], c: 1, why: 'The squares cancel.' },
      { q: m('(n + 1)² − n²') + ' is:', a: ['always even', 'always odd', 'always prime', 'sometimes zero'], c: 1, why: m('2n + 1') + '.' }
    ]
  },
  quiz: [
    { q: 'Three terms with a middle of ' + m('2ab') + ' point to:', a: ['a square', 'a difference of squares', 'a cube', 'grouping'], c: 0, why: 'A perfect square.' },
    { q: 'Two square terms with a minus point to:', a: ['a square of a sum', 'a difference of squares', 'a sum of cubes', 'nothing'], c: 1, why: m('a² − b²') + '.' },
    { q: m('75² − 25²') + ' equals:', a: [m('2500'), m('5000'), m('5625'), m('10000')], c: 1, why: m('50 · 100') + '.' },
    { q: m('(x + 3)² − (x − 3)²') + ' equals:', a: [m('12x'), m('18'), m('6x'), m('0')], c: 0, why: 'Expand both.' },
    { q: m('n² + n') + ' is always:', a: ['odd', 'even', 'prime', 'square'], c: 1, why: m('n(n + 1)') + '.' },
    { q: m('103²') + ' equals:', a: [m('10609'), m('10309'), m('10906'), m('10009')], c: 0, why: m('10000 + 600 + 9') + '.' }
  ],
  practice: {
    easy: [
      [m('103²'), m('10609')],
      [m('97²'), m('9409')],
      [m('63 · 57'), m('3591')],
      [m('75² − 25²'), m('5000')],
      [m('(x + 3)² − (x − 3)²'), m('12x')],
      [m('(x + 2)(x − 2) − x²'), m('−4')],
      [m(f('x² − 16', 'x + 4')), m('x − 4')]
    ],
    med: [
      [m('(a + b)² − (a − b)²'), m('4ab')],
      [m('(a + b)² + (a − b)²'), m('2a² + 2b²')],
      [m('31³'), m('29791')],
      [m('45² − 35²'), m('800')],
      [m('(2x + 1)² − (2x − 1)²'), m('8x')],
      ['Prove ' + m('n² + n') + ' is even', m('n(n + 1)') + ' — one factor is even'],
      [m('(n + 1)² − n²'), m('2n + 1')]
    ],
    hard: [
      ['Prove ' + m('n² − 1') + ' is divisible by ' + m('8') + ' for odd ' + m('n'), 'Two consecutive even factors, one a multiple of ' + m('4')],
      [m('n³ − n') + ' factorised', m('(n − 1)n(n + 1)')],
      ['Write ' + m('11') + ' as a difference of two squares', m('6² − 5²')],
      [m('(a + b)³ − (a − b)³'), m('6a²b + 2b³')],
      ['If ' + m('a + b = 10') + ' and ' + m('a − b = 4') + ', find ' + m('a² − b²'), m('40')],
      [m('1000² − 999²'), m('1999')],
      ['Simplify ' + m(f('x³ − 27', 'x − 3')), m('x² + 3x + 9')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Count the terms, name the formula, then calculate.',
  homework: [
    'Find ' + m('104²') + ', ' + m('96²') + ' and ' + m('72 · 68') + ' by the formulae.',
    'Find ' + m('85² − 15²') + ' in one line.',
    'Simplify ' + m('(x + 5)² − (x − 5)²') + ' and ' + m('(3a + 1)² − (3a − 1)²') + '.',
    'Prove that ' + m('n³ − n') + ' is divisible by ' + m('6') + ' for every whole ' + m('n') + '.',
    'Write ' + m('15') + ' and ' + m('21') + ' each as a difference of two squares.'
  ]
});

/* ============================== 60 ============================== */
G7_MAT.push({
  id: 'g7-60', stream: 'mat', grade: 7, quarter: 3, lessons: '110–111', hours: 2,
  title: 'Control work 7, and work on the mistakes',
  subtitle: 'The five abridged multiplication formulae, in both directions, in one paper.',
  uz: 'Matematika 7, Nazorat ishi 7', uzPage: 'pp. 282–326',
  cam: 'S8 2 review', camPage: 'Stage 8, pp. 18–30', wb: 'Control paper M7',
  objectives: [
    'Expand squares and cubes of binomials accurately under time.',
    'Factorise by common factor, formula, grouping and splitting.',
    'Use the formulae for mental calculation.',
    'Classify each lost mark and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Square of a sum', 'Yig‘indining kvadrati', 'Квадрат суммы'],
    ['Difference of two squares', 'Kvadratlar ayirmasi', 'Разность квадратов'],
    ['Cube of a difference', 'Ayirmaning kubi', 'Куб разности'],
    ['Sum of two cubes', 'Kublar yig‘indisi', 'Сумма кубов'],
    ['To factorise', 'Ko‘paytuvchilarga ajratish', 'Разложить на множители'],
    ['Completely', 'To‘liq', 'Полностью'],
    ['Diagnosis', 'Tashxis', 'Диагностика']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [12, 'Answers'], [20, 'Diagnosis and rewrite'], [5, 'The map']],
  sections: [
    {
      h: 'The paper — 25 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Expand ${m('(x + 6)²')}, ${m('(2a − 5)²')} and ${m('(x − 1)³')}</td><td class="m">5</td><td>L98–103</td></tr>
        <tr><td>2</td><td>Factorise ${m('x² − 49')} and ${m('9a² − 16b²')}</td><td class="m">4</td><td>L100–101</td></tr>
        <tr><td>3</td><td>Factorise ${m('2x² − 50')} completely</td><td class="m">4</td><td>L106–107</td></tr>
        <tr><td>4</td><td>Factorise ${m('x² + 2x − 15')} and ${m('x³ + 8')}</td><td class="m">5</td><td>L104–107</td></tr>
        <tr><td>5</td><td>Find ${m('98²')} and ${m('64 · 56')} without a calculator</td><td class="m">4</td><td>L108–109</td></tr>
        <tr><td>6</td><td>Simplify ${m('(a + b)² − (a − b)²')}</td><td class="m">3</td><td>L108–109</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks actually go</div>
      Q1 carries one mark for the middle term of each square and one for the four signs of the cube;
      Q3 two for taking the ${m('2')} out before anything else; Q5 one for naming the formula used; Q6
      two for expanding both brackets rather than subtracting them whole.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>middle term dropped</td><td class="m">(x + 6)² = x² + 36</td><td class="m">x² + 12x + 36</td></tr>
        <tr><td>coefficient not squared</td><td class="m">(2a − 5)² = 2a² − 20a + 25</td><td class="m">4a² − 20a + 25</td></tr>
        <tr><td>cube ended with a plus</td><td class="m">(x − 1)³ = x³ − 3x² + 3x + 1</td><td class="m">… − 1</td></tr>
        <tr><td>sum of squares “factorised”</td><td class="m">x² + 49 = (x + 7)²</td><td>it does not factorise</td></tr>
        <tr><td>common factor left in</td><td class="m">2(x² − 25)</td><td class="m">2(x − 5)(x + 5)</td></tr>
        <tr><td>cube formula signs matched</td><td class="m">x³ + 8 = (x + 2)(x² + 2x + 4)</td><td class="m">(x + 2)(x² − 2x + 4)</td></tr>
        <tr><td>brackets subtracted whole</td><td class="m">(a + b)² − (a − b)² = (2b)²</td><td>expand both first</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'The chapter as one map',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Formula</th><th>Read left to right</th><th>Read right to left</th></tr></thead>
      <tbody>
        <tr><td class="m">(a ± b)²</td><td>expanding</td><td>recognising a perfect square</td></tr>
        <tr><td class="m">a² − b²</td><td>a quick product</td><td>the fastest factorisation</td></tr>
        <tr><td class="m">(a ± b)³</td><td>expanding</td><td>recognising a perfect cube</td></tr>
        <tr><td class="m">a³ ± b³</td><td>checking</td><td>factorising</td></tr>
        <tr><td>splitting the middle term</td><td>—</td><td>factorising a trinomial</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Looking forward</div>
      Every one of these formulae is about to earn its keep: algebraic fractions cancel only when
      numerator and denominator are factorised, and that is the next four lessons.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q1: expand ' + m('(2a − 5)²') + '.',
      steps: [
        [m('a = 2a') + ', ' + m('b = 5') + '.', ''],
        [m('(2a)² = 4a²'), 'The coefficient is squared too.'],
        [m('−2 · 2a · 5 = −20a'), ''],
        [m('+25') + ', so the answer is ' + m('4a² − 20a + 25') + '.', '']
      ],
      ans: m('4a² − 20a + 25')
    },
    {
      q: 'Model answer, Q3: factorise ' + m('2x² − 50') + ' completely.',
      steps: [
        ['Common factor ' + m('2') + ': ' + m('2(x² − 25)') + '.', ''],
        [m('x² − 25 = (x − 5)(x + 5)'), 'Do not stop at the previous line.'],
        [m('= 2(x − 5)(x + 5)'), '']
      ],
      ans: m('2(x − 5)(x + 5)')
    },
    {
      q: 'Model answer, Q5: find ' + m('64 · 56') + '.',
      steps: [
        ['Both are ' + m('4') + ' from ' + m('60') + '.', ''],
        [m('= (60 + 4)(60 − 4)'), 'A difference of squares.'],
        [m('= 3600 − 16'), ''],
        [m('= 3584'), '']
      ],
      ans: m('3584')
    }
  ],
  modelNote: 'Hand back Q1 and Q2 together: expanding and factorising are the same five formulae read in opposite directions, and the paper is easier to learn from that way.',
  interactive: {
    type: 'quiz',
    title: 'The chapter in twelve questions',
    hint: 'Count the terms, name the formula.',
    items: [
      { q: m('(a + b)²') + ' equals:', a: [m('a² + b²'), m('a² + 2ab + b²'), m('a² − 2ab + b²'), m('2a + 2b')], c: 1, why: 'The middle term.' },
      { q: m('(a − b)²') + ' ends in:', a: [m('+ b²'), m('− b²'), m('+ b³'), m('− b')], c: 0, why: 'A square is never negative.' },
      { q: m('(x + 6)²') + ' equals:', a: [m('x² + 36'), m('x² + 12x + 36'), m('x² + 6x + 36'), m('x² + 12x + 6')], c: 1, why: m('2 · x · 6') + '.' },
      { q: m('(2a − 5)²') + ' begins with:', a: [m('2a²'), m('4a²'), m('10a²'), m('a²')], c: 1, why: m('(2a)²') + '.' },
      { q: m('(x − 1)³') + ' ends in:', a: [m('+ 1'), m('− 1'), m('+ 3'), m('− 3')], c: 1, why: 'An odd power.' },
      { q: m('x² − 49') + ' factorises to:', a: [m('(x − 7)²'), m('(x − 7)(x + 7)'), m('(x − 49)(x + 1)'), 'it does not'], c: 1, why: 'A difference of squares.' },
      { q: m('x² + 49') + ' factorises to:', a: [m('(x + 7)²'), m('(x − 7)(x + 7)'), m('(x + 7)(x + 7)'), 'it does not'], c: 3, why: 'A sum of squares.' },
      { q: m('2x² − 50') + ' factorises completely to:', a: [m('2(x² − 25)'), m('2(x − 5)(x + 5)'), m('(2x − 5)(x + 10)'), m('(x − 5)(x + 5)')], c: 1, why: 'Two steps.' },
      { q: m('x² + 2x − 15') + ' factorises to:', a: [m('(x + 5)(x − 3)'), m('(x − 5)(x + 3)'), m('(x + 15)(x − 1)'), m('(x + 5)(x + 3)')], c: 0, why: 'Product ' + m('−15') + ', sum ' + m('2') + '.' },
      { q: m('x³ + 8') + ' factorises to:', a: [m('(x + 2)(x² + 2x + 4)'), m('(x + 2)(x² − 2x + 4)'), m('(x + 2)³'), 'it does not'], c: 1, why: 'Opposite signs.' },
      { q: m('98²') + ' equals:', a: [m('9604'), m('9704'), m('9404'), m('9600')], c: 0, why: m('10000 − 400 + 4') + '.' },
      { q: m('(a + b)² − (a − b)²') + ' equals:', a: [m('4ab'), m('2b²'), m('4b²'), m('0')], c: 0, why: 'Expand both.' }
    ]
  },
  quiz: [
    { q: 'Q1 loses a mark most often through:', a: ['the first term', 'the middle term', 'the sign of ' + m('b²'), 'the brackets'], c: 1, why: 'It gets dropped.' },
    { q: 'Q2 needs:', a: ['a common factor', 'a difference of squares', 'grouping', 'splitting'], c: 1, why: 'Two square terms.' },
    { q: 'Q3 begins with:', a: ['the formula', 'the common factor', 'grouping', 'splitting'], c: 1, why: 'Always step 1.' },
    { q: 'In Q4, ' + m('x³ + 8') + ' has middle sign:', a: ['plus', 'minus', 'either', 'none'], c: 1, why: 'Opposite to the short bracket.' },
    { q: 'Q5 uses ' + m('64 · 56') + ' as:', a: [m('(60 + 4)(60 − 4)'), m('(64 − 8)²'), m('60 · 60'), m('(60 + 4)²')], c: 0, why: 'A difference of squares.' },
    { q: 'Q6 must begin by:', a: ['subtracting the brackets', 'expanding both brackets', 'factorising', 'substituting'], c: 1, why: 'Then subtract term by term.' }
  ],
  practice: {
    easy: [
      [m('(x + 6)²'), m('x² + 12x + 36')],
      [m('(2a − 5)²'), m('4a² − 20a + 25')],
      [m('(x − 1)³'), m('x³ − 3x² + 3x − 1')],
      [m('x² − 49'), m('(x − 7)(x + 7)')],
      [m('9a² − 16b²'), m('(3a − 4b)(3a + 4b)')],
      [m('98²'), m('9604')],
      [m('64 · 56'), m('3584')]
    ],
    med: [
      [m('2x² − 50'), m('2(x − 5)(x + 5)')],
      [m('x² + 2x − 15'), m('(x + 5)(x − 3)')],
      [m('x³ + 8'), m('(x + 2)(x² − 2x + 4)')],
      [m('(a + b)² − (a − b)²'), m('4ab')],
      [m('3x² + 18x + 27'), m('3(x + 3)²')],
      [m('x² − 7x + 12'), m('(x − 3)(x − 4)')],
      ['Does ' + m('x² + 49') + ' factorise?', 'No']
    ],
    hard: [
      [m('x⁴ − 81'), m('(x − 3)(x + 3)(x² + 9)')],
      [m('2x³ − 54'), m('2(x − 3)(x² + 3x + 9)')],
      [m('(3a + 1)² − (3a − 1)²'), m('12a')],
      [m('x² + 6x + 9 − y²'), m('(x + 3 − y)(x + 3 + y)')],
      [m('125² − 75²'), m('10000')],
      [m('a³ − a'), m('a(a − 1)(a + 1)')],
      ['Simplify ' + m(f('x² − 36', 'x − 6')), m('x + 6')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite every question you lost a mark on in full, from the first line.',
  homework: [
    'Rewrite in full every question on which you lost a mark.',
    'Write out the five formulae with one worked example of each.',
    'Factorise ' + m('3x² − 75') + ' and ' + m('x³ − 27') + ' completely.',
    'Find ' + m('106²') + ' and ' + m('73 · 67') + ' by the formulae.',
    'Simplify ' + m('(x + 4)² − (x − 4)²') + ' and say which slip you were avoiding.'
  ]
});
