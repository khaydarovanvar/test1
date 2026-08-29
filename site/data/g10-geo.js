/* G10_GEO — Quarter I (18 hours). National backbone: Xaydarov, "Geometry 10",
   Chapters I–II. Cambridge inserts marked in the subtitle. */
var G10_GEO = [];

/* ============================== 1 ============================== */
G10_GEO.push({
  id: 'g10-01', stream: 'geo', grade: 10, quarter: 1, lessons: '1', hours: 1,
  title: 'The logical construction of geometry',
  subtitle: 'Why a geometry course begins with words it refuses to define, and how everything else is built on top of them.',
  uz: 'Geometry 10, §1', uzPage: 'pp. 3–8',
  cam: 'IGCSE E4.1', camPage: 'Core & Extended, pp. 246–248', wb: 'Discussion sheet L1',
  objectives: [
    'Name the undefined terms of geometry and say why they cannot be defined.',
    'Distinguish an axiom, a definition and a theorem.',
    'Describe the structure of a deductive proof.',
    'Give an example of a statement whose converse is false.'
  ],
  terms: [
    ['Axiom (postulate)', 'Aksioma', 'Аксиома'],
    ['Undefined term', 'Ta’riflanmaydigan tushuncha', 'Неопределяемое понятие'],
    ['Definition', 'Ta’rif', 'Определение'],
    ['Theorem', 'Teorema', 'Теорема'],
    ['Proof', 'Isbot', 'Доказательство'],
    ['Converse', 'Teskari teorema', 'Обратная теорема'],
    ['Corollary', 'Natija', 'Следствие'],
    ['Deduction', 'Deduksiya', 'Дедукция'],
    ['Consistent system', 'Zid bo‘lmagan sistema', 'Непротиворечивая система'],
    ['Euclidean geometry', 'Evklid geometriyasi', 'Евклидова геометрия']
  ],
  timing: [[8, 'The three undefined terms'], [12, 'Axiom, definition, theorem'], [12, 'How a proof is built'], [8, 'Converses'], [5, 'Homework']],
  sections: [
    {
      h: 'Three words we refuse to define',
      html: `<p>Every definition explains a new word using older words. Follow the chain back far enough
      and it must stop somewhere, or it runs in a circle. Geometry stops at three:</p>
      <div class="keybox"><div class="klabel">The undefined terms</div>
      <b>point</b> · <b>line</b> · <b>plane</b>. They are not explained. They are described by how they
      behave, and that behaviour is set out by the axioms.</div>
      <p>“A point is that which has no part” — Euclid's own attempt — defines “point” using “part”,
      which he never defines either. Modern geometry is honest about the stopping place.</p>`
    },
    {
      h: 'Three kinds of statement',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Kind</th><th>Status</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>axiom</td><td>accepted without proof</td><td>Through any two points passes exactly one line</td></tr>
        <tr><td>definition</td><td>a name given to a described object</td><td>A trapezium is a quadrilateral with exactly one pair of parallel sides</td></tr>
        <tr><td>theorem</td><td>proved from axioms, definitions and earlier theorems</td><td>The angles of a triangle sum to ${m('180°')}</td></tr>
      </tbody></table></div>
      {{fig:planeAxioms:Three axioms in one picture: two points fix a line, three non-collinear points fix a plane, a line with two points in a plane lies in it.}}
      <div class="warn"><span class="wl">A definition is never true or false</span>
      It is a naming convention. Arguing whether “a square is a rectangle” is <i>true</i> is arguing
      about a definition — and the answer is simply whichever the textbook chose. In this course
      a square <b>is</b> a rectangle.</div>`
    },
    {
      h: 'The shape of a proof, and the converse trap',
      html: `<p>A proof is a chain: <b>Given</b> → statements, each justified by an axiom, a definition or
      an earlier theorem → <b>therefore</b> the conclusion. Every line needs a reason written beside it.</p>
      <p>The <b>converse</b> swaps the given and the conclusion. It is a different statement and needs
      its own proof — sometimes it is false:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>Converse</th><th>Converse true?</th></tr></thead>
      <tbody>
        <tr><td>A square has four equal sides</td><td>A shape with four equal sides is a square</td><td>no — a rhombus</td></tr>
        <tr><td>Vertical angles are equal</td><td>Equal angles are vertical</td><td>no</td></tr>
        <tr><td>${m('a² + b² = c² ⇒')} right angle</td><td>right angle ${m('⇒ a² + b² = c²')}</td><td>yes — both are theorems</td></tr>
      </tbody></table></div>`
    }
  ],
  examples: [
    {
      q: 'Classify: “Through a point not on a line there is exactly one parallel to it.”',
      steps: [
        ['Can it be proved from the others?', 'For two thousand years people tried and failed.'],
        ['It is assumed.', 'Euclid’s fifth postulate.'],
        ['Denying it gives a different, consistent geometry.', '']
      ],
      ans: 'An axiom'
    },
    {
      q: 'Write the converse of “If a quadrilateral is a parallelogram then its diagonals bisect each other”, and say whether it is true.',
      steps: [
        ['Swap given and conclusion.', 'If the diagonals bisect each other then it is a parallelogram.'],
        ['Is it provable?', 'Yes — a standard Grade 8 theorem.']
      ],
      ans: 'True; it is the standard test for a parallelogram'
    },
    {
      q: 'Why can “line” not be defined as “the shortest path between two points”?',
      steps: [
        ['“Shortest” needs distance.', 'Distance is defined using lines.'],
        ['The definition is circular.', '']
      ],
      ans: 'It defines a line in terms of something already defined by lines'
    }
  ],
  modelNote: 'Ask the class for a definition of “point”, then keep asking what each new word means.',
  interactive: {
    type: 'quiz',
    title: 'Axiom, definition or theorem?',
    hint: 'Ask: is it assumed, is it a name, or is it proved?',
    items: [
      { q: '“Through two points passes exactly one line.”', a: ['axiom', 'definition', 'theorem', 'corollary'], c: 0, why: 'Assumed without proof.' },
      { q: '“A rhombus is a parallelogram with four equal sides.”', a: ['axiom', 'definition', 'theorem', 'converse'], c: 1, why: 'It names an object.' },
      { q: '“The angles of a triangle sum to ' + m('180°') + '.”', a: ['axiom', 'definition', 'theorem', 'undefined term'], c: 2, why: 'It is proved from the parallel axiom.' },
      { q: 'The undefined terms of geometry are:', a: ['point, line, plane', 'point, angle, area', 'line, circle, square', 'length, angle, area'], c: 0, why: 'Everything else is built from these.' },
      { q: 'The converse of a true theorem is:', a: ['always true', 'always false', 'sometimes true', 'meaningless'], c: 2, why: 'It needs its own proof.' }
    ]
  },
  quiz: [
    { q: 'An axiom is:', a: ['proved', 'assumed', 'a name', 'a guess'], c: 1, why: 'It is the starting point.' },
    { q: 'A theorem must have:', a: ['a diagram', 'a proof', 'a converse', 'a number'], c: 1, why: 'That is what makes it a theorem.' },
    { q: 'Which is <b>not</b> undefined in geometry?', a: ['point', 'line', 'plane', 'triangle'], c: 3, why: 'A triangle is defined from points and lines.' },
    { q: 'Swapping the given and the conclusion gives the:', a: ['corollary', 'converse', 'axiom', 'proof'], c: 1, why: 'By definition.' }
  ],
  practice: {
    easy: [
      ['Name the three undefined terms', 'point, line, plane'],
      ['Is “through two points passes one line” an axiom or theorem?', 'axiom'],
      ['Is “the angles of a triangle sum to 180°” an axiom or theorem?', 'theorem'],
      ['What is a corollary?', 'A result following immediately from a theorem'],
      ['Give the converse of “if it is a square it has four right angles”', 'If it has four right angles it is a square'],
      ['Is that converse true?', 'no — a rectangle'],
      ['Can a definition be false?', 'no — it is a naming convention']
    ],
    med: [
      ['Classify “vertically opposite angles are equal”', 'theorem'],
      ['Classify “a trapezium has one pair of parallel sides”', 'definition'],
      ['Write the converse of Pythagoras and say whether it is true', 'If ' + m('a²+b²=c²') + ' the angle is right — true'],
      ['Why must some terms be undefined?', 'To stop the chain of definitions running in a circle'],
      ['Give a false converse of your own', 'e.g. “equal areas ⇒ congruent”'],
      ['What does “consistent” mean of an axiom system?', 'No contradiction can be derived from it'],
      ['Name a geometry where the parallel axiom fails', 'Spherical or hyperbolic geometry']
    ],
    hard: [
      ['Explain why the parallel postulate cannot be proved from the others', 'Consistent geometries exist in which it is false'],
      ['Give a statement, its converse, and show exactly one is true', 'e.g. “square ⇒ rhombus” true; converse false'],
      ['Is “a square is a rectangle” true?', 'Yes under our definition — a naming choice'],
      ['Prove: if two lines meet, they meet in exactly one point', 'Two common points would force one line, by the first axiom'],
      ['What would happen if we assumed two parallels through a point?', 'Hyperbolic geometry — consistent, but not Euclidean'],
      ['Distinguish “proof by contradiction” from a direct proof', 'It assumes the negation and derives an impossibility'],
      ['Why is a diagram not a proof?', 'It shows one case; a proof must cover all']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Task 4 should be no more than five lines.',
  homework: [
    'Classify five statements from Chapter I as axiom, definition or theorem.',
    'Write the converse of three theorems you know and say which are true.',
    'Explain, in your own words, why “point” is not defined.',
    'Find one statement in everyday life whose converse is false, and write both.'
  ]
});

/* ============================== 2 ============================== */
G10_GEO.push({
  id: 'g10-02', stream: 'geo', grade: 10, quarter: 1, lessons: '2', hours: 1,
  title: 'Geometric problems and the methods of solving them',
  subtitle: 'Four standard methods, and a way of choosing between them before you have drawn anything.',
  uz: 'Geometry 10, §2', uzPage: 'pp. 9–14',
  cam: 'IGCSE E4.2', camPage: 'Core & Extended, pp. 249–256', wb: 'Method sheet L2',
  objectives: [
    'Name the synthetic, coordinate, vector and trigonometric methods.',
    'Choose a method from the wording of a problem.',
    'Draw a clear labelled diagram before starting.',
    'Present a solution with reasons at every line.'
  ],
  terms: [
    ['Synthetic method', 'Sintetik usul', 'Синтетический метод'],
    ['Coordinate method', 'Koordinatalar usuli', 'Координатный метод'],
    ['Vector method', 'Vektor usuli', 'Векторный метод'],
    ['Trigonometric method', 'Trigonometrik usul', 'Тригонометрический метод'],
    ['Auxiliary line', 'Yordamchi chiziq', 'Вспомогательная линия'],
    ['Construction', 'Yasash', 'Построение'],
    ['Analysis of a problem', 'Masalani tahlil qilish', 'Анализ задачи'],
    ['Given and required', 'Berilgan va topilishi kerak', 'Дано и найти'],
    ['Diagram', 'Chizma', 'Чертёж']
  ],
  timing: [[6, 'Four methods'], [14, 'Choosing between them'], [16, 'One problem, three methods'], [6, 'Setting out'], [3, 'Homework']],
  sections: [
    {
      h: 'Four methods',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Method</th><th>Tools</th><th>Reach for it when</th></tr></thead>
      <tbody>
        <tr><td>synthetic</td><td>congruence, similarity, circle theorems</td><td>the problem is about equal or parallel things</td></tr>
        <tr><td>coordinate</td><td>axes, distance, gradient, equations</td><td>perpendicularity, midpoints, or a right angle is convenient</td></tr>
        <tr><td>vector</td><td>position vectors, scalar product</td><td>collinearity, ratios along a line, angles in space</td></tr>
        <tr><td>trigonometric</td><td>sine and cosine rules, areas</td><td>lengths and angles are mixed in the same problem</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The choosing rule</div>
      Look at what the problem <b>gives</b>, not at what it asks. Given angles and lengths — trigonometry.
      Given a rectangle or a right angle — coordinates. Given ratios along segments — vectors.
      Given equal sides or parallels — synthetic.</div>`
    },
    {
      h: 'One problem, three ways',
      html: `<p><b>Problem.</b> ${m('ABCD')} is a square. ${m('M')} is the midpoint of ${m('BC')}.
      Prove ${m('AM')} and ${m('DM')} are not perpendicular, and find the angle ${m('∠AMD')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Method</th><th>First line</th></tr></thead>
      <tbody>
        <tr><td>coordinate</td><td>${m('A(0,0), B(2,0), C(2,2), D(0,2), M(2,1)')}</td></tr>
        <tr><td>vector</td><td>${m('AM = 2i + j')}, ${m('DM = 2i − j')}</td></tr>
        <tr><td>trigonometric</td><td>${m('AM = DM = ' + sr('5'))}, ${m('AD = 2')}, then the cosine rule</td></tr>
      </tbody></table></div>
      ${eq(m('cos ∠AMD = ' + f('5 + 5 − 4', '2 · 5') + ' = 0.6  ⇒  ∠AMD ≈ 53.1°'), true)}
      <p>All three agree. The coordinate method is shortest here because the square hands you the axes.</p>`
    },
    {
      h: 'Setting out',
      html: `<div class="keybox"><div class="klabel">Five headings, every time</div>
      <b>Given</b> · <b>Required</b> · <b>Diagram</b> · <b>Solution</b>, with a reason on every line ·
      <b>Answer</b>, in a sentence with units.</div>
      <div class="warn"><span class="wl">Draw it big</span>
      A diagram smaller than a matchbox hides the very relationship you are looking for. Half a page,
      labelled, with the given data marked on it — that is where most solutions are actually found.</div>`
    }
  ],
  examples: [
    {
      q: 'Which method: “In triangle ' + m('ABC') + ', ' + m('a = 7') + ', ' + m('b = 9') + ', ' + m('∠C = 40°') + '. Find ' + m('c') + '.”',
      steps: [
        ['Two sides and the included angle.', 'Lengths mixed with an angle.'],
        ['Cosine rule.', '']
      ],
      ans: 'Trigonometric method'
    },
    {
      q: 'Which method: “Prove the diagonals of a rhombus are perpendicular.”',
      steps: [
        ['Equal sides given.', 'Congruent triangles available.'],
        ['Coordinates also work, but need setting up.', '']
      ],
      ans: 'Synthetic (coordinates a close second)'
    },
    {
      q: 'Which method: “' + m('P') + ' divides ' + m('AB') + ' in the ratio ' + m('2 : 3') + '. Show ' + m('P, Q, R') + ' are collinear.”',
      steps: [
        ['Ratios along segments, collinearity.', ''],
        ['Position vectors handle both directly.', '']
      ],
      ans: 'Vector method'
    }
  ],
  modelNote: 'Solve the square problem on the board by two methods and let the class time each.',
  interactive: {
    type: 'quiz',
    title: 'Pick the method',
    hint: 'Look at what is given, not what is asked.',
    items: [
      { q: 'Two sides and the included angle, find the third side:', a: ['synthetic', 'coordinate', 'vector', 'trigonometric'], c: 3, why: 'Cosine rule.' },
      { q: 'Prove the midpoints of a quadrilateral form a parallelogram:', a: ['vector', 'trigonometric', 'none', 'measurement'], c: 0, why: 'Midpoint vectors make it two lines.' },
      { q: 'Find the perpendicular distance from a point to a line:', a: ['synthetic', 'coordinate', 'guessing', 'drawing'], c: 1, why: 'A formula exists in coordinates.' },
      { q: 'Prove base angles of an isosceles triangle are equal:', a: ['synthetic', 'coordinate', 'vector', 'trigonometric'], c: 0, why: 'Congruent triangles.' },
      { q: 'The first thing to do with any geometry problem:', a: ['write the formula', 'draw a large labelled diagram', 'guess the answer', 'measure'], c: 1, why: 'The diagram shows the relationship.' }
    ]
  },
  quiz: [
    { q: 'The coordinate method is best when the figure has:', a: ['equal sides', 'right angles', 'circles only', 'no data'], c: 1, why: 'Axes fall naturally along them.' },
    { q: 'Collinearity is most directly proved with:', a: ['vectors', 'the sine rule', 'congruence', 'measurement'], c: 0, why: 'Parallel position vectors through a common point.' },
    { q: 'A reason must be written:', a: ['at the end', 'on every line', 'only in proofs', 'never'], c: 1, why: 'That is what makes it a solution.' },
    { q: 'An auxiliary line is:', a: ['given', 'added by you to help', 'always wrong', 'a mistake'], c: 1, why: 'It creates a usable triangle.' }
  ],
  practice: {
    easy: [
      ['Name the four methods', 'synthetic, coordinate, vector, trigonometric'],
      ['Best method for the cosine rule situation', 'trigonometric'],
      ['Best method for collinearity', 'vector'],
      ['Best method for “prove the diagonals bisect”', 'synthetic or vector'],
      ['What are the five headings of a solution?', 'given, required, diagram, solution, answer'],
      ['How large should a diagram be?', 'about half a page'],
      ['What is an auxiliary line?', 'A line you add to create a usable figure']
    ],
    med: [
      ['Square side 2, ' + m('M') + ' midpoint of ' + m('BC') + '. Find ' + m('AM'), m(sr('5'))],
      ['Same square; find ' + m('∠AMD'), m('≈ 53.1°')],
      ['Choose a method: find the angle between two space diagonals of a cube', 'vector'],
      ['Choose a method: prove a midline is half the base', 'vector or synthetic'],
      ['Choose a method: a triangle with sides 5, 6, 7 — find its largest angle', 'trigonometric'],
      ['Set up coordinates for a rectangle ' + m('6 × 4'), m('(0,0), (6,0), (6,4), (0,4)')],
      ['Why is a big diagram worth the time?', 'It reveals the relationship you must use']
    ],
    hard: [
      ['Solve the square-and-midpoint problem by all three methods and compare lengths of solution', 'Coordinate is shortest'],
      ['Prove the medians of a triangle are concurrent, by vectors', 'Show ' + m(f('a + b + c', '3')) + ' lies on each median'],
      ['Prove the midpoints of any quadrilateral form a parallelogram', 'Each midline is ' + m(f('1', '2')) + ' of a diagonal'],
      ['A cube of side 1: find the angle between a face diagonal and a space diagonal', m('≈ 35.26°')],
      ['When would the coordinate method be a bad choice?', 'When the figure has no right angles or convenient symmetry'],
      ['Give a problem where two methods take about the same time', 'Diagonals of a rhombus'],
      ['Explain why the vector method extends to space but the plane coordinate method must be extended first', 'Vectors already carry three components']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Task 2 needs the diagram, not only the answer.',
  homework: [
    'For five problems from the exercise, write only the method you would choose and one sentence of why.',
    'Solve the square-and-midpoint problem by the coordinate method, setting out all five headings.',
    'Solve it again by the cosine rule and check the two answers agree.',
    'Find a problem in the textbook where the vector method is clearly best, and say why.'
  ]
});

/* ============================== 3 ============================== */
G10_GEO.push({
  id: 'g10-03', stream: 'geo', grade: 10, quarter: 1, lessons: '3', hours: 1,
  title: 'Symmetry in three dimensions',
  subtitle: 'Cambridge insert: planes of symmetry and axes of rotational symmetry, on the solids the rest of the year is built from.',
  uz: 'Geometry 10, §2 (extension)', uzPage: 'pp. 15–18',
  cam: 'IGCSE E4.6', camPage: 'Core & Extended, pp. 268–273', wb: 'IGCSE Exercise 4.6',
  objectives: [
    'Find the planes of symmetry of a cuboid, prism, pyramid, cylinder and cone.',
    'Find the axes of rotational symmetry and state each order.',
    'Distinguish a plane of symmetry from an axis of symmetry.',
    'Use symmetry to shorten a calculation.'
  ],
  terms: [
    ['Plane of symmetry', 'Simmetriya tekisligi', 'Плоскость симметрии'],
    ['Axis of symmetry', 'Simmetriya o‘qi', 'Ось симметрии'],
    ['Rotational symmetry', 'Aylanma simmetriya', 'Вращательная симметрия'],
    ['Order of symmetry', 'Simmetriya tartibi', 'Порядок симметрии'],
    ['Reflection', 'Akslantirish', 'Отражение'],
    ['Mirror image', 'Ko‘zgu tasviri', 'Зеркальное изображение'],
    ['Cuboid', 'Parallelepiped', 'Прямоугольный параллелепипед'],
    ['Cross-section', 'Kesim', 'Сечение'],
    ['Regular solid', 'Muntazam jism', 'Правильное тело']
  ],
  timing: [[8, 'Plane versus axis'], [14, 'Counting the planes of a cuboid'], [12, 'Rotational axes and their order'], [8, 'Using symmetry to save work'], [3, 'Homework']],
  sections: [
    {
      h: 'Two different things',
      html: `<div class="keybox"><div class="klabel">Plane and axis</div>
      A <b>plane of symmetry</b> slices the solid into two mirror halves. An <b>axis of rotational
      symmetry</b> is a line about which the solid can be turned by less than a full turn and look
      unchanged; the number of positions is the <b>order</b>.</div>
      {{fig:symmetry3D:A cuboid cut by one of its three planes of symmetry, and turned about one of its axes.}}
      <p>A solid can have many of each, and the two counts are independent — a cone has infinitely many
      planes but exactly one axis.</p>`
    },
    {
      h: 'Counting them',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Solid</th><th>Planes</th><th>Axes (with order)</th></tr></thead>
      <tbody>
        <tr><td>cuboid, all edges different</td><td class="m">3</td><td>3, each of order 2</td></tr>
        <tr><td>square-based cuboid</td><td class="m">5</td><td>1 of order 4, 4 of order 2</td></tr>
        <tr><td>cube</td><td class="m">9</td><td>3 of order 4, 4 of order 3, 6 of order 2</td></tr>
        <tr><td>triangular prism (equilateral)</td><td class="m">4</td><td>1 of order 3, 3 of order 2</td></tr>
        <tr><td>square-based pyramid</td><td class="m">4</td><td>1 of order 4</td></tr>
        <tr><td>cylinder</td><td>infinitely many, plus 1 horizontal</td><td>1 of infinite order</td></tr>
        <tr><td>cone</td><td>infinitely many</td><td>1 of infinite order</td></tr>
        <tr><td>sphere</td><td>infinitely many</td><td>infinitely many</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The cuboid trap</span>
      A cuboid has <b>3</b> planes of symmetry, not 6. The two halves either side of a plane must be
      mirror images — a diagonal cut through a rectangular face does not give that.</div>`
    },
    {
      h: 'Symmetry as a shortcut',
      html: `<p>Symmetry is not decoration. It halves work:</p>
      <ul>
        <li>The centre of mass lies on every plane of symmetry — so on their intersection.</li>
        <li>A section perpendicular to an axis of order ${m('n')} repeats ${m('n')} times.</li>
        <li>Two lengths symmetric about a plane are equal, with no calculation.</li>
      </ul>
      <p>In a cube of side ${m('a')}, the two space diagonals from one face meet on the vertical axis,
      so their intersection is at height ${m(f('a', '2'))} — read straight from symmetry.</p>`
    }
  ],
  examples: [
    {
      q: 'How many planes of symmetry has a cuboid ' + m('3 × 4 × 5') + '?',
      steps: [
        ['All three edge lengths differ.', 'No diagonal plane works.'],
        ['One plane parallel to each pair of opposite faces.', '']
      ],
      ans: m('3')
    },
    {
      q: 'A prism has a regular hexagonal cross-section. How many planes of symmetry?',
      steps: [
        ['The hexagon has 6 lines of symmetry.', '6 vertical planes.'],
        ['One horizontal plane halfway up.', '']
      ],
      ans: m('7')
    },
    {
      q: 'State the order of rotational symmetry of a square-based pyramid about its vertical axis.',
      steps: [
        ['Turning by ' + m('90°') + ' maps the square base to itself.', ''],
        ['Four positions in a full turn.', '']
      ],
      ans: 'Order 4'
    }
  ],
  modelNote: 'Hold a cuboid box and slice it with a sheet of card to show each plane.',
  interactive: {
    type: 'quiz',
    title: 'Counting symmetry',
    hint: 'Planes cut into mirror halves; axes are lines to turn about.',
    items: [
      { q: 'A cuboid with all edges different has how many planes of symmetry?', a: [m('2'), m('3'), m('6'), m('9')], c: 1, why: 'One for each pair of opposite faces.' },
      { q: 'A cube has how many planes of symmetry?', a: [m('3'), m('6'), m('9'), m('12')], c: 2, why: '3 through faces, 6 through opposite edges.' },
      { q: 'A cone has how many axes of rotational symmetry?', a: [m('0'), m('1'), m('2'), 'infinitely many'], c: 1, why: 'Only its vertical axis.' },
      { q: 'A square-based pyramid has rotational order:', a: [m('1'), m('2'), m('4'), m('8')], c: 2, why: 'Quarter turns.' },
      { q: 'A regular triangular prism has how many planes?', a: [m('3'), m('4'), m('5'), m('6')], c: 1, why: '3 vertical, 1 horizontal.' }
    ]
  },
  quiz: [
    { q: 'A plane of symmetry produces:', a: ['two mirror halves', 'two equal volumes only', 'a rotation', 'a shadow'], c: 0, why: 'Mirror halves, not merely equal volumes.' },
    { q: 'The order of rotational symmetry of a cylinder about its axis is:', a: [m('1'), m('2'), m('4'), 'infinite'], c: 3, why: 'Any angle works.' },
    { q: 'A sphere has how many planes of symmetry?', a: [m('1'), m('3'), m('9'), 'infinitely many'], c: 3, why: 'Every plane through the centre.' },
    { q: 'A cube has axes of order 3 through:', a: ['face centres', 'opposite vertices', 'edge midpoints', 'it has none'], c: 1, why: 'The space diagonals.' }
  ],
  practice: {
    easy: [
      ['Planes of symmetry of a cube', m('9')],
      ['Planes of symmetry of a ' + m('2 × 3 × 4') + ' cuboid', m('3')],
      ['Planes of symmetry of a sphere', 'infinitely many'],
      ['Rotational order of a cube about a face axis', m('4')],
      ['Axes of a cone', m('1')],
      ['Planes of a square-based pyramid', m('4')],
      ['Rotational order of a cylinder', 'infinite']
    ],
    med: [
      ['Planes of a regular hexagonal prism', m('7')],
      ['Planes of a regular pentagonal pyramid', m('5')],
      ['Rotational order of a regular hexagonal prism about its long axis', m('6')],
      ['Planes of a cuboid with a square base ' + m('3 × 3 × 5'), m('5')],
      ['Axes of order 2 in a cube', m('6')],
      ['Axes of order 3 in a cube', m('4')],
      ['Total rotational axes of a cube', m('13')]
    ],
    hard: [
      ['Explain why a cuboid ' + m('a × a × b') + ' with ' + m('a ≠ b') + ' has 5 planes', '3 face planes plus 2 diagonal planes of the square cross-section'],
      ['A regular tetrahedron: count its planes', m('6')],
      ['A regular tetrahedron: count its rotational axes and orders', '4 of order 3, 3 of order 2'],
      ['Why has a cone infinitely many planes but only one axis?', 'Every plane through the axis is a mirror; only that line is fixed'],
      ['A solid has 1 plane only. Sketch one', 'e.g. a scalene-triangle prism cut asymmetrically'],
      ['Use symmetry to find the centre of a cube of side ' + m('6') + ' from a corner', m('(3, 3, 3)')],
      ['A cuboid ' + m('a × a × a') + ' — why does the count jump from 5 to 9?', 'The three square cross-sections each contribute two diagonal planes']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Sketch each solid once and draw the planes on the sketch.',
  homework: [
    'Count the planes of symmetry of a cube, a ' + m('2 × 2 × 5') + ' cuboid and a regular hexagonal prism.',
    'State every rotational axis of a cube with its order, and check the total is 13.',
    'Find a solid with exactly two planes of symmetry and sketch it.',
    'Explain why a plane of symmetry always divides a solid into equal volumes, but equal volumes do not imply a plane of symmetry.'
  ]
});

/* ============================== 4 ============================== */
G10_GEO.push({
  id: 'g10-04', stream: 'geo', grade: 10, quarter: 1, lessons: '4–5', hours: 2,
  title: 'Basic concepts and axioms of solid geometry',
  subtitle: 'Three axioms about planes, and the two consequences that every later proof in the course will quote.',
  uz: 'Geometry 10, §3', uzPage: 'pp. 19–28',
  cam: 'P1 · 3-D context', camPage: 'Core & Extended, pp. 274–276', wb: 'Exercise 3.1',
  objectives: [
    'State the three axioms that extend plane geometry into space.',
    'Prove that a line and a point not on it determine a plane.',
    'Prove that two intersecting lines determine a plane.',
    'Decide how many planes a given set of points determines.'
  ],
  terms: [
    ['Solid geometry (stereometry)', 'Stereometriya', 'Стереометрия'],
    ['Plane', 'Tekislik', 'Плоскость'],
    ['Space', 'Fazo', 'Пространство'],
    ['Collinear points', 'Bir to‘g‘ri chiziqdagi nuqtalar', 'Коллинеарные точки'],
    ['Coplanar points', 'Bir tekislikdagi nuqtalar', 'Компланарные точки'],
    ['Determine a plane', 'Tekislikni aniqlash', 'Определять плоскость'],
    ['Line of intersection', 'Kesishish chizig‘i', 'Линия пересечения'],
    ['Half-space', 'Yarim fazo', 'Полупространство'],
    ['Belongs to a plane', 'Tekislikka tegishli', 'Принадлежит плоскости']
  ],
  timing: [[10, 'From plane to space'], [18, 'The three axioms'], [22, 'Two theorems proved from them'], [24, 'How many planes?'], [12, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'What changes when you leave the plane',
      html: `<p>In the plane, two lines either meet or are parallel. In space a third case appears:
      they may be <b>skew</b> — neither meeting nor parallel, because they do not lie in a common plane.
      Every difficulty of solid geometry comes from that one extra case.</p>
      <div class="keybox"><div class="klabel">The new undefined term</div>
      Plane geometry needed <b>point</b> and <b>line</b>. Space adds <b>plane</b> — flat, unbounded,
      with no thickness. It is described only by how it behaves.</div>`
    },
    {
      h: 'The three axioms of space',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>№</th><th>Axiom</th><th>What it forbids</th></tr></thead>
      <tbody>
        <tr><td>S1</td><td>Through any three non-collinear points passes exactly one plane</td><td>a tripod wobbling</td></tr>
        <tr><td>S2</td><td>If two points of a line lie in a plane, the whole line lies in it</td><td>a straight ruler lifting off a flat table</td></tr>
        <tr><td>S3</td><td>If two distinct planes have a common point, they meet in a line through it</td><td>two walls meeting at a single point</td></tr>
      </tbody></table></div>
      {{fig:planeAxioms:S1, S2 and S3 in one diagram. Three points fix the plane; the line stays in it; two planes share a whole line.}}
      <div class="warn"><span class="wl">Why three points, not two</span>
      Two points leave a plane free to spin about the line through them — infinitely many planes contain
      any given line. The third point, off that line, stops the spin. This is why a three-legged stool
      never rocks and a four-legged one does.</div>`
    },
    {
      h: 'Two theorems, proved immediately',
      html: `<p><b>Theorem 1.</b> A line and a point not on it determine exactly one plane.</p>
      <p><i>Proof.</i> Take two points ${m('A, B')} on the line and the outside point ${m('C')}.
      They are non-collinear, so by S1 exactly one plane ${m('α')} contains them. By S2 the whole line
      lies in ${m('α')}. Any plane containing the line and ${m('C')} contains ${m('A, B, C')}, so equals
      ${m('α')} by S1. ∎</p>
      <p><b>Theorem 2.</b> Two intersecting lines determine exactly one plane.</p>
      <p><i>Proof.</i> Let them meet at ${m('P')}. Choose ${m('A')} on the first and ${m('B')} on the
      second, both different from ${m('P')}. ${m('A, B, P')} are non-collinear, so S1 gives a unique
      plane; S2 puts both whole lines inside it. ∎</p>
      <div class="keybox"><div class="klabel">Four ways to fix a plane</div>
      three non-collinear points · a line and a point off it · two intersecting lines ·
      two parallel lines. Every one of them reduces to S1.</div>`
    },
    {
      h: 'Counting planes',
      html: `<p>How many planes are determined by ${m('n')} points, no four coplanar and no three
      collinear? Every choice of 3 gives one plane:</p>
      ${eq(m('number of planes = C(n, 3) = ' + f('n(n − 1)(n − 2)', '6')), true)}
      <p>Four points give ${m('4')} planes — the four faces of a tetrahedron. Five give ${m('10')}.</p>
      <div class="warn"><span class="wl">The conditions matter</span>
      If three of the points are collinear they determine no plane by themselves. If all four are
      coplanar, the four triples give the <b>same</b> plane, so the count is 1, not 4.</div>`
    }
  ],
  examples: [
    {
      q: 'How many planes are determined by four points of which exactly three are collinear?',
      steps: [
        ['The three collinear points determine a line, not a plane.', ''],
        ['That line and the fourth point determine one plane.', 'Theorem 1.'],
        ['No other triple is non-collinear off it.', '']
      ],
      ans: m('1')
    },
    {
      q: 'Two planes meet. Can they share exactly two points?',
      steps: [
        ['S3: sharing one point forces a whole common line.', ''],
        ['A line has infinitely many points.', '']
      ],
      ans: 'No — they share either nothing, a line, or everything'
    },
    {
      q: 'A cube ' + m('ABCDA₁B₁C₁D₁') + '. How many planes are determined by its 8 vertices, taken as faces and diagonal planes?',
      steps: [
        ['6 faces.', ''],
        ['6 diagonal planes through opposite edges.', 'e.g. ' + m('ABC₁D₁') + '.'],
        ['Total for these two families.', '']
      ],
      ans: m('12') + ' (6 faces + 6 diagonal planes)'
    }
  ],
  modelNote: 'Stand three pencils in plasticine to show a plane fixed, then add a fourth to show it must be adjusted.',
  interactive: {
    type: 'space3d',
    title: 'A point in space',
    hint: 'Move the point and watch which planes contain it.'
  },
  quiz: [
    { q: 'Three non-collinear points determine:', a: ['no plane', 'one plane', 'two planes', 'infinitely many'], c: 1, why: 'Axiom S1.' },
    { q: 'Two points determine how many planes?', a: [m('1'), m('2'), m('0'), 'infinitely many'], c: 3, why: 'The plane can spin about the line.' },
    { q: 'If two planes share a point they share:', a: ['only that point', 'a line', 'everything', 'nothing else'], c: 1, why: 'Axiom S3.' },
    { q: 'Two lines in space that neither meet nor are parallel are:', a: ['perpendicular', 'skew', 'coplanar', 'impossible'], c: 1, why: 'The case that does not exist in the plane.' }
  ],
  practice: {
    easy: [
      ['How many planes through 3 non-collinear points?', m('1')],
      ['How many planes through 1 line?', 'infinitely many'],
      ['How many planes through 2 intersecting lines?', m('1')],
      ['State axiom S2', 'Two points of a line in a plane put the whole line in it'],
      ['Can two planes meet in one point only?', 'no'],
      ['How many planes through 4 points of a tetrahedron?', m('4')],
      ['What is a skew pair of lines?', 'Neither meeting nor parallel']
    ],
    med: [
      ['How many planes from 5 points, no 4 coplanar, no 3 collinear?', m('10')],
      ['How many planes from 6 such points?', m('20')],
      ['Four coplanar points determine how many planes?', m('1')],
      ['Four points, three collinear — how many planes?', m('1')],
      ['Two parallel lines determine how many planes?', m('1')],
      ['Faces of a cube determine how many planes?', m('6')],
      ['Prove two intersecting lines are coplanar', 'Take a point on each plus the meeting point; apply S1 and S2']
    ],
    hard: [
      ['How many planes are determined by the 8 vertices of a cube in total?', m('20')],
      ['Explain why a four-legged table can rock but a three-legged one cannot', 'Three points always determine a plane; four need not be coplanar'],
      ['Prove: if a line meets a plane in two points it lies in the plane', 'Directly by S2'],
      ['Three planes pairwise intersecting: how many lines can they give?', m('1') + ' or ' + m('3')],
      ['Can three planes have exactly one common point?', 'Yes — like the corner of a room'],
      ['How many planes from ' + m('n') + ' points in general position?', m(f('n(n−1)(n−2)', '6'))],
      ['Give a configuration of 5 points determining exactly 5 planes', 'Four coplanar plus one off the plane']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every proof must quote S1, S2 or S3 by name on the line that uses it.',
  homework: [
    'State the three axioms of solid geometry from memory.',
    'Prove that two parallel lines determine exactly one plane.',
    'How many planes do 7 points in general position determine?',
    'Explain, with a sketch, why two planes cannot meet in exactly one point.',
    'List the four ways of determining a plane and show each reduces to S1.'
  ]
});

/* ============================== 5 ============================== */
G10_GEO.push({
  id: 'g10-05', stream: 'geo', grade: 10, quarter: 1, lessons: '6–7', hours: 2,
  title: 'The mutual positions of lines and planes in space',
  subtitle: 'Every possible arrangement of two lines, of a line and a plane, and of two planes — nine cases in all.',
  uz: 'Geometry 10, §4', uzPage: 'pp. 29–40',
  cam: 'IGCSE E4.7', camPage: 'Core & Extended, pp. 277–281', wb: 'Exercise 4.1',
  objectives: [
    'List the three possible positions of two lines in space.',
    'List the three positions of a line and a plane, and the three of two planes.',
    'Recognise skew lines in a cuboid and name pairs of them.',
    'Find the angle between two skew lines by translating one of them.'
  ],
  terms: [
    ['Skew lines', 'Ayqash to‘g‘ri chiziqlar', 'Скрещивающиеся прямые'],
    ['Intersecting lines', 'Kesishuvchi to‘g‘ri chiziqlar', 'Пересекающиеся прямые'],
    ['Parallel lines', 'Parallel to‘g‘ri chiziqlar', 'Параллельные прямые'],
    ['Line parallel to a plane', 'Tekislikka parallel chiziq', 'Прямая, параллельная плоскости'],
    ['Line in a plane', 'Tekislikdagi chiziq', 'Прямая, лежащая в плоскости'],
    ['Intersecting planes', 'Kesishuvchi tekisliklar', 'Пересекающиеся плоскости'],
    ['Parallel planes', 'Parallel tekisliklar', 'Параллельные плоскости'],
    ['Angle between skew lines', 'Ayqash chiziqlar orasidagi burchak', 'Угол между скрещивающимися прямыми'],
    ['Common perpendicular', 'Umumiy perpendikulyar', 'Общий перпендикуляр']
  ],
  timing: [[8, 'Two lines — three cases'], [16, 'Line and plane; plane and plane'], [20, 'Finding skew pairs in a cuboid'], [24, 'The angle between skew lines'], [14, 'Practice'], [8, 'Homework']],
  sections: [
    {
      h: 'Two lines: three cases, not two',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Case</th><th>Common points</th><th>Coplanar?</th></tr></thead>
      <tbody>
        <tr><td>intersecting</td><td class="m">1</td><td>yes</td></tr>
        <tr><td>parallel</td><td class="m">0</td><td>yes</td></tr>
        <tr><td>skew</td><td class="m">0</td><td>no</td></tr>
      </tbody></table></div>
      {{fig:skewLines:An edge of the top face and a non-touching edge of the bottom face. They never meet, and no plane holds both.}}
      <div class="warn"><span class="wl">Zero common points is not enough</span>
      Parallel and skew lines both fail to meet. What separates them is whether a single plane can hold
      both. Always check for a common plane before writing “parallel”.</div>`
    },
    {
      h: 'A line and a plane, and two planes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Objects</th><th>Case</th><th>Common points</th></tr></thead>
      <tbody>
        <tr><td rowspan="3">line and plane</td><td>line lies in the plane</td><td>infinitely many</td></tr>
        <tr><td>line meets the plane</td><td class="m">1</td></tr>
        <tr><td>line parallel to the plane</td><td class="m">0</td></tr>
        <tr><td rowspan="3">two planes</td><td>coincident</td><td>infinitely many</td></tr>
        <tr><td>intersecting</td><td>a whole line</td></tr>
        <tr><td>parallel</td><td class="m">0</td></tr>
      </tbody></table></div>
      {{fig:linePlanePos:In the plane, meeting the plane at a point, and parallel to it.}}
      <div class="keybox"><div class="klabel">The test for a line parallel to a plane</div>
      A line not in a plane is parallel to it exactly when it is parallel to <b>some</b> line lying in
      that plane. Finding that one line is the whole of most proofs.</div>`
    },
    {
      h: 'Skew pairs in a cuboid',
      html: `<p>The cuboid ${m('ABCDA₁B₁C₁D₁')} is the standard laboratory. Take edge ${m('AB')}:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Relation to ${m('AB')}</th><th>Edges</th></tr></thead>
      <tbody>
        <tr><td>meets it</td><td class="m">AD, BC, AA₁, BB₁</td></tr>
        <tr><td>parallel to it</td><td class="m">DC, A₁B₁, D₁C₁</td></tr>
        <tr><td>skew to it</td><td class="m">CC₁, DD₁, A₁D₁, B₁C₁</td></tr>
      </tbody></table></div>
      {{fig:cubeLabelled:The standard labelling. Every question about a cube uses these eight letters.}}
      <p>Four skew, four meeting, three parallel — eleven other edges, and every one accounted for.</p>`
    },
    {
      h: 'The angle between skew lines',
      html: `<div class="keybox"><div class="klabel">The method</div>
      Skew lines never meet, so there is no angle to measure directly. <b>Translate one of them</b> until
      it passes through a point of the other; the angle between the resulting intersecting lines is
      defined to be the angle between the skew pair. It does not depend on the point chosen.</div>
      <p>In a cube of side ${m('a')}, find the angle between ${m('AB')} and ${m('B₁C₁')}. Translate
      ${m('B₁C₁')} down to ${m('BC')}. Now ${m('AB ⊥ BC')}, so the answer is ${m('90°')} — skew lines can
      be perpendicular without ever meeting.</p>
      ${eq(m('angle between AB and DC₁:  translate DC₁ to AB₁,  then tan θ = ' + f('a', 'a') + ' = 1  ⇒  θ = 45°'), true)}`
    }
  ],
  examples: [
    {
      q: 'In cube ' + m('ABCDA₁B₁C₁D₁') + ', name all edges skew to ' + m('AA₁') + '.',
      steps: [
        ['Edges meeting ' + m('AA₁') + ': ' + m('AB, AD, A₁B₁, A₁D₁') + '.', ''],
        ['Edges parallel: ' + m('BB₁, CC₁, DD₁') + '.', ''],
        ['The rest are skew.', '']
      ],
      ans: m('BC, CD, B₁C₁, C₁D₁')
    },
    {
      q: 'Cube of side ' + m('a') + '. Find the angle between ' + m('AB₁') + ' and ' + m('BC₁') + '.',
      steps: [
        ['Both are face diagonals, length ' + m('a' + sr('2')) + '.', ''],
        ['Translate ' + m('BC₁') + ' to ' + m('AD₁') + ' — now they meet at ' + m('A') + '.', ''],
        [m('B₁D₁ = a' + sr('2')), 'Triangle ' + m('AB₁D₁') + ' is equilateral.'],
        ['All sides ' + m('a' + sr('2')) + '.', '']
      ],
      ans: m('60°')
    },
    {
      q: 'Two planes are each parallel to a line ' + m('ℓ') + '. Must they be parallel to each other?',
      steps: [
        ['Consider two walls of a room and the vertical line where the floor meets nothing.', ''],
        ['Both can be parallel to a vertical line and still meet.', '']
      ],
      ans: 'No — they may intersect in a line parallel to ' + m('ℓ')
    }
  ],
  modelNote: 'Hold two pencils as skew lines, then slide one until they meet, keeping its direction.',
  interactive: {
    type: 'space3d',
    title: 'Lines in a box',
    hint: 'Move the point and see which edges are skew to the highlighted one.'
  },
  quiz: [
    { q: 'Skew lines are:', a: ['parallel', 'intersecting', 'non-coplanar and non-intersecting', 'perpendicular'], c: 2, why: 'No common plane exists.' },
    { q: 'A line and a plane can share:', a: ['0, 1 or infinitely many points', 'only 0 or 1', 'only 1', 'exactly 2'], c: 0, why: 'Parallel, meeting, or contained.' },
    { q: 'Two distinct planes can share:', a: ['a point', 'a line', 'two points only', 'nothing but a point'], c: 1, why: 'Axiom S3.' },
    { q: 'The angle between skew lines is found by:', a: ['measuring the gap', 'translating one to meet the other', 'projecting onto the floor', 'it is undefined'], c: 1, why: 'The translated angle is well defined.' },
    { q: 'In a cube, how many edges are skew to a given edge?', a: [m('2'), m('3'), m('4'), m('6')], c: 2, why: '4 meet, 3 are parallel, 4 are skew.' }
  ],
  practice: {
    easy: [
      ['Name the three positions of two lines in space', 'intersecting, parallel, skew'],
      ['Name the three positions of a line and a plane', 'in it, meeting it, parallel to it'],
      ['Name the three positions of two planes', 'coincident, intersecting, parallel'],
      ['In a cube, is ' + m('AB') + ' parallel to ' + m('D₁C₁') + '?', 'yes'],
      ['In a cube, is ' + m('AB') + ' skew to ' + m('CC₁') + '?', 'yes'],
      ['How many edges of a cube meet ' + m('AB') + '?', m('4')],
      ['Can skew lines be perpendicular?', 'yes']
    ],
    med: [
      ['List all edges skew to ' + m('BC') + ' in a cube', m('AA₁, DD₁, A₁B₁, C₁D₁')],
      ['Angle between ' + m('AB') + ' and ' + m('B₁C₁') + ' in a cube', m('90°')],
      ['Angle between ' + m('AB') + ' and ' + m('DC₁') + ' in a cube', m('45°')],
      ['Angle between ' + m('AB₁') + ' and ' + m('BC₁') + ' in a cube', m('60°')],
      ['Two planes parallel to the same line — must they be parallel?', 'no'],
      ['Two lines parallel to the same plane — must they be parallel?', 'no'],
      ['Two planes parallel to the same plane — must they be parallel?', 'yes']
    ],
    hard: [
      ['Cuboid ' + m('4 × 3 × 12') + '. Angle between ' + m('AB') + ' and ' + m('DB₁'), m('≈ 71.9°')],
      ['Prove that if ' + m('a ∥ b') + ' and ' + m('b ∥ c') + ' in space then ' + m('a ∥ c'), 'Transitivity of direction'],
      ['Give two skew lines that are perpendicular in a cube', m('AB') + ' and ' + m('B₁C₁')],
      ['How many pairs of skew edges has a cube?', m('24')],
      ['Prove a line parallel to two intersecting planes is parallel to their line of intersection', 'It is parallel to a line in each; the common direction is the intersection'],
      ['Find the common perpendicular of ' + m('AB') + ' and ' + m('CC₁') + ' in a unit cube', m('BC') + ', length ' + m('1')],
      ['Explain why the angle between skew lines does not depend on where you translate', 'Translation preserves direction']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw the cube once and answer tasks 1–3 from that one drawing.',
  homework: [
    'For cube ' + m('ABCDA₁B₁C₁D₁') + ', list the edges meeting, parallel to and skew to ' + m('CD') + '.',
    'Find the angle between ' + m('AD') + ' and ' + m('BC₁') + '.',
    'Find the angle between the face diagonals ' + m('AC') + ' and ' + m('BD₁') + '.',
    'Give an example showing two planes parallel to the same line need not be parallel.',
    'Explain in three sentences the difference between parallel and skew.'
  ]
});

/* ============================== 6 ============================== */
G10_GEO.push({
  id: 'g10-06', stream: 'geo', grade: 10, quarter: 1, lessons: '8–9', hours: 2,
  title: 'Spatial figures. Polyhedra',
  subtitle: 'The vocabulary of solids — face, edge, vertex — and the one formula that ties all three together.',
  uz: 'Geometry 10, §5', uzPage: 'pp. 41–52',
  cam: 'IGCSE E4.8', camPage: 'Core & Extended, pp. 282–288', wb: 'Exercise 5.1',
  objectives: [
    'Name the faces, edges and vertices of a polyhedron and count them.',
    'Verify Euler’s formula for a range of solids.',
    'Distinguish convex from non-convex polyhedra.',
    'Name the five regular polyhedra and their face shapes.'
  ],
  terms: [
    ['Polyhedron', 'Ko‘pyoq', 'Многогранник'],
    ['Face', 'Yoq', 'Грань'],
    ['Edge', 'Qirra', 'Ребро'],
    ['Vertex', 'Uchi', 'Вершина'],
    ['Convex polyhedron', 'Qavariq ko‘pyoq', 'Выпуклый многогранник'],
    ['Prism', 'Prizma', 'Призма'],
    ['Pyramid', 'Piramida', 'Пирамида'],
    ['Regular polyhedron', 'Muntazam ko‘pyoq', 'Правильный многогранник'],
    ['Euler’s formula', 'Eyler formulasi', 'Формула Эйлера'],
    ['Lateral face', 'Yon yoq', 'Боковая грань'],
    ['Base', 'Asos', 'Основание']
  ],
  timing: [[10, 'The three words'], [18, 'Prisms and pyramids'], [22, 'Euler’s formula'], [18, 'The five regular solids'], [20, 'Practice'], [12, 'Homework']],
  sections: [
    {
      h: 'Face, edge, vertex',
      html: `<p>A <b>polyhedron</b> is a solid bounded by flat polygons. Those polygons are its
      <b>faces</b>; where two faces meet is an <b>edge</b>; where edges meet is a <b>vertex</b>.</p>
      {{fig:prismPyramid:A prism and a pyramid, with one face, one edge and one vertex marked on each.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Solid</th><th class="m">F</th><th class="m">V</th><th class="m">E</th></tr></thead>
      <tbody>
        <tr><td>cube</td><td class="m">6</td><td class="m">8</td><td class="m">12</td></tr>
        <tr><td>triangular prism</td><td class="m">5</td><td class="m">6</td><td class="m">9</td></tr>
        <tr><td>square pyramid</td><td class="m">5</td><td class="m">5</td><td class="m">8</td></tr>
        <tr><td>tetrahedron</td><td class="m">4</td><td class="m">4</td><td class="m">6</td></tr>
        <tr><td>hexagonal prism</td><td class="m">8</td><td class="m">12</td><td class="m">18</td></tr>
        <tr><td>octahedron</td><td class="m">8</td><td class="m">6</td><td class="m">12</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'Prisms and pyramids',
      html: `<div class="keybox"><div class="klabel">Two families</div>
      A <b>prism</b> has two identical parallel bases joined by parallelograms. A <b>pyramid</b> has one
      base and all lateral edges meeting at a single apex.</div>
      <p>For an ${m('n')}-gonal solid the counts follow from the base:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Solid</th><th class="m">F</th><th class="m">V</th><th class="m">E</th></tr></thead>
      <tbody>
        <tr><td>${m('n')}-gonal prism</td><td class="m">n + 2</td><td class="m">2n</td><td class="m">3n</td></tr>
        <tr><td>${m('n')}-gonal pyramid</td><td class="m">n + 1</td><td class="m">n + 1</td><td class="m">2n</td></tr>
      </tbody></table></div>
      <p>A prism is <b>right</b> when the lateral edges are perpendicular to the bases, otherwise
      <b>oblique</b>. A pyramid is <b>regular</b> when its base is a regular polygon and the apex sits
      above the base centre.</p>`
    },
    {
      h: 'Euler’s formula',
      html: `<div class="keybox"><div class="klabel">For every convex polyhedron</div>
      ${eq(m('F + V − E = 2'), true)}
      Faces plus vertices, minus edges, is always two — whatever the solid, however many faces.</div>
      <p>Check the table above: ${m('6 + 8 − 12 = 2')}, ${m('5 + 6 − 9 = 2')}, ${m('4 + 4 − 6 = 2')}.
      It never fails for a convex solid.</p>
      <p>The formula is a <b>tool</b>, not a curiosity: it finds a missing count. A solid with 12
      pentagonal faces has ${m('E = ' + f('12 × 5', '2') + ' = 30')} edges, so
      ${m('V = 2 − F + E = 2 − 12 + 30 = 20')}.</p>
      <div class="warn"><span class="wl">Convex only</span>
      A polyhedron with a hole through it — a picture frame, say — gives ${m('F + V − E = 0')}.
      Euler’s formula assumes the surface can be deformed onto a sphere.</div>`
    },
    {
      h: 'The five regular polyhedra',
      html: `<p>A polyhedron is <b>regular</b> when all faces are congruent regular polygons and the same
      number of them meet at every vertex. There are exactly five — a fact known to the Greeks:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Name</th><th>Faces</th><th class="m">F</th><th class="m">V</th><th class="m">E</th></tr></thead>
      <tbody>
        <tr><td>tetrahedron</td><td>4 triangles</td><td class="m">4</td><td class="m">4</td><td class="m">6</td></tr>
        <tr><td>cube (hexahedron)</td><td>6 squares</td><td class="m">6</td><td class="m">8</td><td class="m">12</td></tr>
        <tr><td>octahedron</td><td>8 triangles</td><td class="m">8</td><td class="m">6</td><td class="m">12</td></tr>
        <tr><td>dodecahedron</td><td>12 pentagons</td><td class="m">12</td><td class="m">20</td><td class="m">30</td></tr>
        <tr><td>icosahedron</td><td>20 triangles</td><td class="m">20</td><td class="m">12</td><td class="m">30</td></tr>
      </tbody></table></div>
      <p>Why only five: at a vertex at least three faces must meet and their angles must total less than
      ${m('360°')}. Triangles (${m('60°')}) allow 3, 4 or 5; squares (${m('90°')}) allow only 3;
      pentagons (${m('108°')}) only 3; hexagons (${m('120°')}) give exactly ${m('360°')} and lie flat.
      Three plus one plus one — five solids, and no more are possible.</p>`
    }
  ],
  examples: [
    {
      q: 'A polyhedron has 9 faces and 14 vertices. How many edges?',
      steps: [
        [m('F + V − E = 2'), ''],
        [m('9 + 14 − E = 2'), ''],
        [m('E = 21'), '']
      ],
      ans: m('21')
    },
    {
      q: 'A pentagonal prism: find ' + m('F, V, E') + ' and check Euler.',
      steps: [
        [m('n = 5') + ': ' + m('F = 7, V = 10, E = 15') + '.', ''],
        [m('7 + 10 − 15 = 2') + ' ✓', '']
      ],
      ans: m('F = 7, V = 10, E = 15')
    },
    {
      q: 'A solid has only triangular faces and 12 vertices, with 5 faces at each vertex. Find ' + m('F') + ' and ' + m('E') + '.',
      steps: [
        ['Each vertex has 5 edges; each edge has 2 ends.', m('E = ' + f('12 × 5', '2') + ' = 30')],
        [m('F = 2 − V + E = 2 − 12 + 30 = 20'), ''],
        ['This is the icosahedron.', '']
      ],
      ans: m('F = 20, E = 30')
    }
  ],
  modelNote: 'Count F, V and E on a real box, then on a pyramid net, and check Euler each time.',
  interactive: {
    type: 'quiz',
    title: 'Counting a polyhedron',
    hint: 'Use ' + m('F + V − E = 2') + ' whenever one count is missing.',
    items: [
      { q: 'A cube has how many edges?', a: [m('6'), m('8'), m('12'), m('16')], c: 2, why: '4 top, 4 bottom, 4 vertical.' },
      { q: 'A hexagonal pyramid has how many faces?', a: [m('6'), m('7'), m('8'), m('12')], c: 1, why: '6 lateral plus 1 base.' },
      { q: m('F = 8, E = 12') + ' gives ' + m('V') + ' equal to:', a: [m('4'), m('6'), m('8'), m('10')], c: 1, why: m('V = 2 − 8 + 12 = 6') + '.' },
      { q: 'How many regular polyhedra are there?', a: [m('3'), m('4'), m('5'), 'infinitely many'], c: 2, why: 'The angle condition allows only five.' },
      { q: 'A dodecahedron has faces that are:', a: ['triangles', 'squares', 'pentagons', 'hexagons'], c: 2, why: '12 regular pentagons.' },
      { q: 'Why is there no regular solid with hexagonal faces?', a: ['angles sum to ' + m('360°'), 'hexagons are not regular', 'too many edges', 'there is one'], c: 0, why: 'Three hexagons lie flat.' }
    ]
  },
  quiz: [
    { q: 'Euler’s formula is:', a: [m('F + V + E = 2'), m('F + V − E = 2'), m('F − V + E = 2'), m('F · V = E')], c: 1, why: 'Faces plus vertices minus edges.' },
    { q: 'A triangular prism has:', a: [m('F=5, V=6, E=9'), m('F=6, V=5, E=9'), m('F=5, V=9, E=6'), m('F=4, V=4, E=6')], c: 0, why: '2 bases plus 3 sides.' },
    { q: 'A pyramid on an ' + m('n') + '-gon has how many edges?', a: [m('n'), m('n + 1'), m('2n'), m('3n')], c: 2, why: m('n') + ' base plus ' + m('n') + ' lateral.' },
    { q: 'Where two faces meet is:', a: ['a vertex', 'an edge', 'a face', 'a base'], c: 1, why: 'By definition.' }
  ],
  practice: {
    easy: [
      [m('F, V, E') + ' of a cube', m('6, 8, 12')],
      [m('F, V, E') + ' of a tetrahedron', m('4, 4, 6')],
      [m('F, V, E') + ' of a square pyramid', m('5, 5, 8')],
      ['Check Euler for a cube', m('6 + 8 − 12 = 2')],
      ['Faces of an octahedron', m('8') + ' triangles'],
      ['Faces of a hexagonal prism', m('8')],
      ['How many regular polyhedra?', m('5')]
    ],
    med: [
      [m('F = 10, V = 16') + '; find ' + m('E'), m('24')],
      [m('V = 12, E = 18') + '; find ' + m('F'), m('8')],
      [m('F, V, E') + ' of a heptagonal prism', m('9, 14, 21')],
      [m('F, V, E') + ' of a decagonal pyramid', m('11, 11, 20')],
      ['A solid has 20 triangular faces. How many edges?', m('30')],
      ['And how many vertices?', m('12')],
      ['Which regular solid is that?', 'icosahedron']
    ],
    hard: [
      ['A solid has 12 pentagonal and 20 hexagonal faces, 3 at each vertex. Find ' + m('V') + ' and ' + m('E'), m('V = 60, E = 90')],
      ['Show a polyhedron cannot have exactly 7 edges', m('F + V = 9') + ' forces an impossible face count'],
      ['Prove ' + m('2E ≥ 3F') + ' for any polyhedron', 'Every face has at least 3 edges, each shared by 2 faces'],
      ['Prove ' + m('2E ≥ 3V'), 'Every vertex meets at least 3 edges'],
      ['Use both to show ' + m('F ≤ 2V − 4'), 'Substitute into Euler'],
      ['A prism and a pyramid have the same number of edges. Relate their bases', m('3n = 2k') + ' — e.g. a hexagonal pyramid and a quadrilateral prism'],
      ['Explain why a picture-frame solid fails Euler', 'Its surface is a torus, not a sphere']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Task 5 needs the angle argument, not just the number five.',
  homework: [
    'Complete a table of ' + m('F, V, E') + ' for a cube, a triangular prism, a pentagonal pyramid and an octahedron, and check Euler on each row.',
    'A polyhedron has 15 faces and 25 edges. Find its number of vertices.',
    'Write the formulas for ' + m('F, V, E') + ' of an ' + m('n') + '-gonal prism and pyramid.',
    'Name the five regular polyhedra with their face shapes and counts.',
    'Explain why no regular polyhedron can have hexagonal faces.'
  ]
});

/* ============================== 7 ============================== */
G10_GEO.push({
  id: 'g10-07', stream: 'geo', grade: 10, quarter: 1, lessons: '10–11', hours: 2,
  title: 'Making models of polyhedra',
  subtitle: 'A practical pair of lessons: from net to solid, and what a badly folded model teaches that a correct one does not.',
  uz: 'Geometry 10, §6', uzPage: 'pp. 53–60',
  cam: 'IGCSE E4.8', camPage: 'Core & Extended, pp. 289–293', wb: 'Net templates N1–N5',
  objectives: [
    'Draw an accurate net of a prism, a pyramid and a tetrahedron.',
    'Build the solid from the net and check its face, edge and vertex counts.',
    'Explain why some arrangements of squares do not fold into a cube.',
    'Compute the surface area from the net.'
  ],
  terms: [
    ['Net', 'Yoyma', 'Развёртка'],
    ['Fold line', 'Buklash chizig‘i', 'Линия сгиба'],
    ['Tab (flap)', 'Yopishtirish qismi', 'Клапан'],
    ['Surface area', 'To‘la sirt yuzasi', 'Площадь полной поверхности'],
    ['Lateral surface area', 'Yon sirt yuzasi', 'Площадь боковой поверхности'],
    ['Slant height', 'Apofema', 'Апофема'],
    ['Scale of a model', 'Model masshtabi', 'Масштаб модели'],
    ['Template', 'Andoza', 'Шаблон'],
    ['Accuracy', 'Aniqlik', 'Точность']
  ],
  timing: [[8, 'What a net must satisfy'], [16, 'The eleven nets of a cube'], [30, 'Building — prism, pyramid, tetrahedron'], [16, 'Surface area from the net'], [14, 'Checking the models'], [6, 'Homework']],
  sections: [
    {
      h: 'What a net has to satisfy',
      html: `<p>A <b>net</b> is the surface of a solid cut along some edges and laid flat. To fold back it
      must satisfy three conditions:</p>
      <ol>
        <li>Exactly the right faces, each the right size.</li>
        <li>Edges that will be joined must be equal in length.</li>
        <li>The arrangement must not force two faces to overlap.</li>
      </ol>
      {{fig:surfaceNet:A net and the solid it folds to. Matching edges are the same length.}}
      <div class="warn"><span class="wl">Condition 3 is the one people forget</span>
      Six squares in a row have the right faces and the right edge lengths and still do not make a cube —
      the ends meet before the sides close.</div>`
    },
    {
      h: 'The eleven nets of a cube',
      html: `<p>Of the 35 ways to join six squares edge to edge, exactly <b>eleven</b> fold into a cube.
      They divide by the length of their longest row:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Longest row</th><th>How many</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td>4</td><td class="m">6</td><td>a row of four, one square above and one below</td></tr>
        <tr><td>3</td><td class="m">4</td><td>two rows, of three and three, offset</td></tr>
        <tr><td>2</td><td class="m">1</td><td>a staircase of three pairs</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A quick test</div>
      In a cube net, no ${m('2 × 2')} block of squares can appear — such a block would fold two faces
      onto each other. Any arrangement containing one is not a cube net.</div>`
    },
    {
      h: 'Building, and computing area from the net',
      html: `<p>Three models, in pairs. Card, ruler, compasses, 5 mm tabs on alternate edges.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Model</th><th>Net</th><th>Surface area</th></tr></thead>
      <tbody>
        <tr><td>cube, side ${m('a')}</td><td>6 squares</td><td class="m">6a²</td></tr>
        <tr><td>${m('n')}-gonal prism</td><td>2 bases + a rectangle ${m('P × h')}</td><td class="m">2B + Ph</td></tr>
        <tr><td>regular pyramid</td><td>base + ${m('n')} triangles</td><td class="m">B + ${f('1', '2')}Pl</td></tr>
        <tr><td>regular tetrahedron, edge ${m('a')}</td><td>4 equilateral triangles</td><td class="m">${sr('3')}a²</td></tr>
      </tbody></table></div>
      <p>Here ${m('B')} is the base area, ${m('P')} the base perimeter, ${m('h')} the height and
      ${m('l')} the slant height. The net makes each formula obvious: the lateral surface of a prism is
      literally one rectangle.</p>
      <div class="warn"><span class="wl">Slant height is not height</span>
      For a pyramid the triangles use ${m('l')}, the distance from the apex to the midpoint of a base
      edge — not the vertical height ${m('h')}. They are related by
      ${m('l² = h² + (' + f('base edge', '2') + ')²')} for a square base.</div>`
    }
  ],
  examples: [
    {
      q: 'A square-based pyramid has base 10 cm and height 12 cm. Find its surface area.',
      steps: [
        [m('l² = 12² + 5² = 169'), 'Slant height.'],
        [m('l = 13'), ''],
        ['Base ' + m('100') + '; four triangles ' + m('4 × ' + f('1', '2') + ' × 10 × 13 = 260') + '.', ''],
        [m('100 + 260 = 360'), '']
      ],
      ans: m('360 cm²')
    },
    {
      q: 'A triangular prism has an equilateral base of side 6 cm and length 15 cm. Find its surface area.',
      steps: [
        ['Base area ' + m(f(sr('3'), '4') + ' × 36 = 9' + sr('3') + ' ≈ 15.59'), ''],
        ['Two bases ' + m('≈ 31.18') + '.', ''],
        ['Lateral: perimeter ' + m('18') + ' × ' + m('15') + ' = ' + m('270') + '.', ''],
        ['Total ' + m('≈ 301.2') + '.', '']
      ],
      ans: m('≈ 301 cm²')
    },
    {
      q: 'Explain why six squares in a single row cannot fold into a cube.',
      steps: [
        ['Folding the row wraps four squares round the sides.', ''],
        ['The fifth returns to the first face’s position.', 'Overlap.'],
        ['Two faces are left uncovered.', '']
      ],
      ans: 'It violates condition 3 — faces overlap and two are missing'
    }
  ],
  modelNote: 'Have each pair test one candidate cube net on squared paper before cutting card.',
  interactive: {
    type: 'quiz',
    title: 'Will it fold?',
    hint: 'Look for a ' + m('2 × 2') + ' block — if there is one, it will not.',
    items: [
      { q: 'How many nets of a cube are there?', a: [m('6'), m('8'), m('11'), m('35')], c: 2, why: 'Eleven of the 35 arrangements work.' },
      { q: 'A net containing a ' + m('2 × 2') + ' block of squares:', a: ['folds fine', 'never folds to a cube', 'makes a cuboid', 'makes a pyramid'], c: 1, why: 'Two faces would coincide.' },
      { q: 'Surface area of a cube of side 5 cm:', a: [m('25 cm²'), m('125 cm²'), m('150 cm²'), m('100 cm²')], c: 2, why: m('6 × 25') + '.' },
      { q: 'The lateral surface of a prism unfolds to:', a: ['a triangle', 'one rectangle', 'a circle', 'a trapezium'], c: 1, why: 'Perimeter by height.' },
      { q: 'A regular tetrahedron’s net is:', a: ['3 triangles', '4 triangles', '4 squares', '6 triangles'], c: 1, why: 'One per face.' }
    ]
  },
  quiz: [
    { q: 'A net is:', a: ['the volume', 'the flattened surface', 'a cross-section', 'a projection'], c: 1, why: 'Cut along edges and laid flat.' },
    { q: 'The slant height of a pyramid is measured to:', a: ['the base centre', 'the midpoint of a base edge', 'a base vertex', 'the apex'], c: 1, why: 'It is the height of a lateral triangle.' },
    { q: 'Surface area of an ' + m('n') + '-gonal prism:', a: [m('Ph'), m('2B + Ph'), m('B + ' + f('1', '2') + 'Pl'), m('Bh')], c: 1, why: 'Two bases plus the lateral rectangle.' },
    { q: 'Six squares in a row fold into:', a: ['a cube', 'nothing — they overlap', 'a cuboid', 'an open box'], c: 1, why: 'Faces coincide.' }
  ],
  practice: {
    easy: [
      ['Surface area of a cube of side 4 cm', m('96 cm²')],
      ['Surface area of a cube of side 10 cm', m('600 cm²')],
      ['How many faces in a cube net?', m('6')],
      ['How many nets of a cube?', m('11')],
      ['Net of a tetrahedron consists of', m('4') + ' equilateral triangles'],
      ['A prism’s lateral net is', 'one rectangle'],
      ['Slant height of a pyramid with ' + m('h = 4') + ', base edge ' + m('6'), m('5')]
    ],
    med: [
      ['Square pyramid, base 8, height 3. Surface area', m('144 cm²')],
      ['Cuboid ' + m('3 × 4 × 5') + '. Surface area', m('94 cm²')],
      ['Triangular prism, right base 3-4-5, length 10. Surface area', m('132 cm²')],
      ['Regular tetrahedron edge 6. Surface area', m('36' + sr('3')) + ' ≈ ' + m('62.35 cm²')],
      ['Hexagonal prism, side 2, height 9. Lateral area', m('108')],
      ['Cube surface area is 216 cm². Find the edge', m('6 cm')],
      ['Square pyramid, base 12, slant height 10. Surface area', m('384 cm²')]
    ],
    hard: [
      ['A cube net has a ' + m('2 × 2') + ' block. Prove it cannot fold', 'Two of the four would land on the same face'],
      ['Square pyramid, base 14, surface area 896. Find the height', m('24')],
      ['A cuboid has surface area 208 and edges in the ratio ' + m('1:2:3'), m('4 × 8 × 12') + '? check: ' + m('S = 352') + ' — so ratio gives ' + m('x ≈ 3.1')],
      ['Regular tetrahedron of surface area ' + m('16' + sr('3')) + '. Find the edge', m('4')],
      ['How many nets has a regular tetrahedron?', m('2')],
      ['A prism has surface area ' + m('2B + Ph') + '. What happens as ' + m('h → 0') + '?', 'It flattens to twice the base'],
      ['Design a net for an oblique prism and say why it is harder', 'The lateral faces are parallelograms of differing shapes']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Bring the three finished models to the next lesson — they are used for sections.',
  homework: [
    'Draw and cut two different nets of a cube, and fold both.',
    'Draw the net of a square pyramid with base 8 cm and height 3 cm, and find its surface area.',
    'Draw the net of a regular tetrahedron of edge 6 cm and find its surface area.',
    'Find an arrangement of six squares that is not a cube net and explain in one sentence why it fails.'
  ]
});

/* ============================== 8 ============================== */
G10_GEO.push({
  id: 'g10-08', stream: 'geo', grade: 10, quarter: 1, lessons: '12–13', hours: 2,
  title: 'Simple sections of polyhedra',
  subtitle: 'Cutting a solid with a plane — the three rules that make the cut, and what shape appears.',
  uz: 'Geometry 10, §7', uzPage: 'pp. 61–70',
  cam: 'IGCSE E4.8', camPage: 'Core & Extended, pp. 294–298', wb: 'Exercise 7.1',
  objectives: [
    'Construct the section of a cube or prism through three given points.',
    'Apply the rule that a plane cuts two parallel faces in parallel lines.',
    'Name the polygon obtained and justify the number of sides.',
    'Compute the area of a simple section.'
  ],
  terms: [
    ['Section (cross-section)', 'Kesim', 'Сечение'],
    ['Cutting plane', 'Kesuvchi tekislik', 'Секущая плоскость'],
    ['Trace of a plane', 'Tekislik izi', 'След плоскости'],
    ['Diagonal section', 'Diagonal kesim', 'Диагональное сечение'],
    ['Parallel faces', 'Parallel yoqlar', 'Параллельные грани'],
    ['Hexagonal section', 'Olti burchakli kesim', 'Шестиугольное сечение'],
    ['Construction of a section', 'Kesim yasash', 'Построение сечения'],
    ['Midpoint of an edge', 'Qirra o‘rtasi', 'Середина ребра'],
    ['Regular hexagon', 'Muntazam olti burchak', 'Правильный шестиугольник']
  ],
  timing: [[10, 'What a section is'], [20, 'The three construction rules'], [24, 'Sections of a cube'], [18, 'Areas of sections'], [16, 'Practice'], [12, 'Homework']],
  sections: [
    {
      h: 'The three rules',
      html: `<div class="keybox"><div class="klabel">Everything follows from these</div>
      <b>R1</b> Two points of the cutting plane on the same face join by a straight segment in that face.
      <b>R2</b> A plane cuts two parallel faces in two <b>parallel</b> lines.
      <b>R3</b> The section is a closed polygon; every side lies in a face of the solid.</div>
      {{fig:cubeSection:A plane through three points of a cube. R2 forces the top and bottom cuts to be parallel.}}
      <p>R2 does most of the work. Once one side of the section is drawn on a face, the side on the
      opposite face is fixed in direction — only its position remains to be found.</p>`
    },
    {
      h: 'Sections of a cube',
      html: `<p>A plane can cut a cube in a triangle, a quadrilateral, a pentagon or a hexagon — but never
      in a heptagon, because a cube has only six faces and each contributes at most one side.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Section</th><th>Through</th><th>Area for side ${m('a')}</th></tr></thead>
      <tbody>
        <tr><td>square</td><td>parallel to a face</td><td class="m">a²</td></tr>
        <tr><td>rectangle</td><td>a diagonal plane ${m('ABC₁D₁')}</td><td class="m">a²${sr('2')}</td></tr>
        <tr><td>equilateral triangle</td><td>three vertices next to one corner</td><td class="m">${f(sr('3'), '2')}a²</td></tr>
        <tr><td>regular hexagon</td><td>midpoints of six edges</td><td class="m">${f('3' + sr('3'), '4')}a²</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The hexagon is the beautiful one</span>
      Cut a cube through the midpoints of six edges, perpendicular to a space diagonal, and the section
      is a <b>regular</b> hexagon of side ${m(f('a' + sr('2'), '2'))}. It is worth building once in card.</div>`
    },
    {
      h: 'Constructing a section, step by step',
      html: `<p><b>Problem.</b> Cube ${m('ABCDA₁B₁C₁D₁')}. Construct the section through
      ${m('A')}, ${m('C')} and ${m('B₁')}.</p>
      <ol>
        <li>${m('A')} and ${m('C')} are both on the bottom face: draw ${m('AC')} (R1).</li>
        <li>${m('A')} and ${m('B₁')} are both on face ${m('ABB₁A₁')}: draw ${m('AB₁')} (R1).</li>
        <li>${m('C')} and ${m('B₁')} are both on face ${m('BCC₁B₁')}: draw ${m('CB₁')} (R1).</li>
        <li>The polygon closes.</li>
      </ol>
      <p>All three segments are face diagonals of length ${m('a' + sr('2'))}, so the section is an
      <b>equilateral triangle</b> of area ${m(f(sr('3'), '4') + ' · 2a² = ' + f(sr('3'), '2') + 'a²')}.</p>
      <div class="keybox"><div class="klabel">When two points are not on one face</div>
      Extend an existing edge of the section until it meets the plane of a face, producing a new point
      you can use. That extended line is the <b>trace</b> of the cutting plane on that face.</div>`
    }
  ],
  examples: [
    {
      q: 'Cube of side 6. Find the area of the diagonal section ' + m('ABC₁D₁') + '.',
      steps: [
        [m('AB = 6'), 'An edge.'],
        [m('BC₁ = 6' + sr('2')), 'A face diagonal.'],
        ['The section is a rectangle.', ''],
        [m('6 × 6' + sr('2') + ' = 36' + sr('2') + ' ≈ 50.9'), '']
      ],
      ans: m('36' + sr('2')) + ' ≈ ' + m('50.9') + ' square units'
    },
    {
      q: 'Cube of side ' + m('a') + '. Find the area of the hexagonal section through six edge midpoints.',
      steps: [
        ['Each side joins midpoints of adjacent edges.', 'Side ' + m(f('a' + sr('2'), '2')) + '.'],
        ['The hexagon is regular.', m('S = ' + f('3' + sr('3'), '2') + 's²')],
        [m('s² = ' + f('a²', '2')), ''],
        [m('S = ' + f('3' + sr('3'), '2') + ' · ' + f('a²', '2') + ' = ' + f('3' + sr('3'), '4') + 'a²'), '']
      ],
      ans: m(f('3' + sr('3'), '4') + 'a²') + ' ≈ ' + m('1.30a²')
    },
    {
      q: 'What is the maximum number of sides a section of a cube can have, and why?',
      steps: [
        ['Each side lies in one face.', 'A cube has six faces.'],
        ['A plane meets each face in at most one segment.', ''],
        ['Six is attained by the midpoint hexagon.', '']
      ],
      ans: m('6')
    }
  ],
  modelNote: 'Slice a plasticine cube with a wire to show the triangle, the rectangle and the hexagon.',
  interactive: {
    type: 'quiz',
    title: 'Naming a section',
    hint: 'Count the faces the plane passes through.',
    items: [
      { q: 'A plane parallel to a face of a cube cuts a:', a: ['triangle', 'square', 'hexagon', 'pentagon'], c: 1, why: 'It is a copy of the face.' },
      { q: 'The section ' + m('ABC₁D₁') + ' of a cube is a:', a: ['square', 'rectangle', 'rhombus', 'trapezium'], c: 1, why: 'Sides ' + m('a') + ' and ' + m('a' + sr('2')) + '.' },
      { q: 'The maximum number of sides of a section of a cube:', a: [m('4'), m('5'), m('6'), m('8')], c: 2, why: 'One per face.' },
      { q: 'Two parallel faces are cut by a plane in:', a: ['perpendicular lines', 'parallel lines', 'a point', 'nothing'], c: 1, why: 'Rule R2.' },
      { q: 'The section through three vertices adjacent to one corner is:', a: ['a right triangle', 'an equilateral triangle', 'a square', 'a hexagon'], c: 1, why: 'Three equal face diagonals.' }
    ]
  },
  quiz: [
    { q: 'A section is:', a: ['a shadow', 'the figure where a plane cuts a solid', 'a net', 'a projection'], c: 1, why: 'By definition.' },
    { q: 'Rule R2 says a plane cuts parallel faces in:', a: ['equal lines', 'parallel lines', 'perpendicular lines', 'points'], c: 1, why: 'The key construction rule.' },
    { q: 'The area of the diagonal section of a cube of side ' + m('a') + ' is:', a: [m('a²'), m('a²' + sr('2')), m('2a²'), m('a²' + sr('3'))], c: 1, why: m('a × a' + sr('2')) + '.' },
    { q: 'A cube section can never be a:', a: ['triangle', 'pentagon', 'hexagon', 'heptagon'], c: 3, why: 'Only six faces are available.' }
  ],
  practice: {
    easy: [
      ['Section of a cube parallel to a face', 'a square'],
      ['Area of that section, side 5', m('25')],
      ['Diagonal section of a cube of side 4 — its area', m('16' + sr('2'))],
      ['Maximum sides of a cube section', m('6')],
      ['Section through ' + m('A, C, B₁') + ' is', 'an equilateral triangle'],
      ['What does R2 say?', 'Parallel faces give parallel cuts'],
      ['Can a cube section be a regular pentagon?', 'no']
    ],
    med: [
      ['Cube side 6; area of the section through ' + m('A, C, B₁'), m('18' + sr('3')) + ' ≈ ' + m('31.2')],
      ['Cube side ' + m('a') + '; area of the midpoint hexagon', m(f('3' + sr('3'), '4') + 'a²')],
      ['Cube side 4; area of the midpoint hexagon', m('12' + sr('3')) + ' ≈ ' + m('20.8')],
      ['Section of a triangular prism parallel to the base', 'a congruent triangle'],
      ['Section of a square pyramid parallel to the base', 'a smaller square'],
      ['Cube side 10; diagonal section area', m('100' + sr('2')) + ' ≈ ' + m('141.4')],
      ['Section of a cube through 5 faces is a', 'pentagon']
    ],
    hard: [
      ['Cube ' + m('ABCDA₁B₁C₁D₁') + ' side 6. Construct and find the area of the section through ' + m('A') + ', midpoint of ' + m('BB₁') + ', and ' + m('C'), 'A rhombus of area ' + m('18' + sr('5')) + ' ≈ ' + m('40.2')],
      ['Prove the midpoint section of a cube is a regular hexagon', 'All six sides equal ' + m(f('a' + sr('2'), '2')) + ' by symmetry about the space diagonal'],
      ['Why is that hexagon perpendicular to a space diagonal?', 'The diagonal is an axis of order 3 through the hexagon centre'],
      ['Cube side ' + m('a') + '. Find the largest possible area of a plane section', m('a²' + sr('2')) + ' — the diagonal rectangle'],
      ['Section of a regular tetrahedron through the midpoints of four edges', 'a square'],
      ['Prove that section is a square', 'Each side is a midline, half an opposite edge, and the pairs are perpendicular'],
      ['A plane cuts a cube in a pentagon. How many faces does it miss?', m('1')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Constructions must show the rule used at each step (R1, R2 or R3).',
  homework: [
    'Construct the section of a cube through ' + m('A') + ', ' + m('C') + ' and ' + m('D₁') + ' and name the shape.',
    'Cube of side 8: find the area of the diagonal section.',
    'Construct the regular hexagonal section and find its area for side 8.',
    'Explain why a section of a cube cannot have seven sides.',
    'Construct the section of a square pyramid through the midpoints of two base edges and the apex.'
  ]
});

/* ============================== 9 ============================== */
G10_GEO.push({
  id: 'g10-09', stream: 'geo', grade: 10, quarter: 1, lessons: '14–16', hours: 3,
  title: 'The sine and cosine rules in three dimensions',
  subtitle: 'Cambridge insert: choosing a triangle inside a solid, drawing it flat, and solving it.',
  uz: 'Geometry 10, §7 (extension)', uzPage: 'pp. 71–78',
  cam: 'IGCSE E6.5 · P1 · 5.5', camPage: 'Core & Extended, pp. 300–312', wb: 'IGCSE Exercise 6.5'  ,
  objectives: [
    'Identify a triangle inside a solid that contains the required length or angle.',
    'Redraw that triangle flat, with all known data marked.',
    'Apply the sine rule, the cosine rule and the area formula in a 3-D context.',
    'Find the angle between a line and a plane and between two planes.'
  ],
  terms: [
    ['Sine rule', 'Sinuslar teoremasi', 'Теорема синусов'],
    ['Cosine rule', 'Kosinuslar teoremasi', 'Теорема косинусов'],
    ['Included angle', 'Ichki burchak', 'Угол между сторонами'],
    ['Angle between a line and a plane', 'To‘g‘ri chiziq va tekislik orasidagi burchak', 'Угол между прямой и плоскостью'],
    ['Angle between two planes', 'Ikki tekislik orasidagi burchak', 'Угол между плоскостями'],
    ['Projection', 'Proyeksiya', 'Проекция'],
    ['Foot of the perpendicular', 'Perpendikulyar asosi', 'Основание перпендикуляра'],
    ['Space diagonal', 'Fazoviy diagonal', 'Пространственная диагональ'],
    ['Ambiguous case', 'Ikki yechimli hol', 'Неоднозначный случай']
  ],
  timing: [[10, 'Recall the two rules'], [20, 'Choosing the right triangle'], [26, 'Angle between a line and a plane'], [26, 'Angle between two planes'], [40, 'Practice'], [13, 'Homework']],
  sections: [
    {
      h: 'The two rules, recalled',
      html: `${eq(m(f('a', 'sin A') + ' = ' + f('b', 'sin B') + ' = ' + f('c', 'sin C')) + '     ' + m('a² = b² + c² − 2bc·cos A'), true)}
      {{fig:sineCosRule:The labelling convention: side a opposite angle A. Every rule assumes it.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Use</th></tr></thead>
      <tbody>
        <tr><td>two angles and a side</td><td>sine rule</td></tr>
        <tr><td>two sides and a non-included angle</td><td>sine rule (watch the ambiguous case)</td></tr>
        <tr><td>two sides and the included angle</td><td>cosine rule</td></tr>
        <tr><td>three sides</td><td>cosine rule, rearranged for ${m('cos A')}</td></tr>
      </tbody></table></div>
      <p>Area: ${m('S = ' + f('1', '2') + 'ab·sin C')} — two sides and the angle between them.</p>`
    },
    {
      h: 'The method in three dimensions',
      html: `<div class="keybox"><div class="klabel">Four steps, always the same</div>
      <b>1</b> Find a triangle containing what you want. <b>2</b> Redraw it flat, large, on its own.
      <b>3</b> Mark every length and angle you already know. <b>4</b> Solve it as an ordinary plane
      triangle.</div>
      {{fig:trig3dBox:The box, and beside it the single triangle pulled out and drawn flat.}}
      <p>Almost every 3-D trigonometry question is a plane question hiding inside a solid. The hard part
      is step 1, and it is made easier by drawing the solid large and marking the right angles first —
      a vertical edge is perpendicular to <b>every</b> line in the base.</p>`
    },
    {
      h: 'The angle between a line and a plane',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      Drop a perpendicular from a point of the line to the plane. Join the foot to the point where the
      line meets the plane. The angle between the line and that <b>projection</b> is the angle required —
      and it is the smallest angle the line makes with any line of the plane.</div>
      <p>In a cuboid ${m('a × b × c')}, the angle ${m('θ')} between the space diagonal and the base:</p>
      ${eq(m('tan θ = ' + f('c', sr('a² + b²'))), true)}
      <p>For a ${m('3 × 4 × 12')} box: the base diagonal is ${m('5')}, so
      ${m('tan θ = ' + f('12', '5'))} and ${m('θ ≈ 67.4°')}.</p>`
    },
    {
      h: 'The angle between two planes',
      html: `<p>Find the line where the planes meet. From a point on it, draw a line in each plane
      <b>perpendicular to that line of intersection</b>. The angle between those two lines is the
      dihedral angle.</p>
      <div class="warn"><span class="wl">Both lines must be perpendicular to the edge</span>
      Any other pair gives the wrong angle. Choosing the edge and then the two perpendiculars is the
      whole of the technique.</div>
      <p>Square pyramid, base ${m('10')}, height ${m('12')}: the angle between a lateral face and the
      base uses the slant height ${m('13')} against the apothem ${m('5')}, giving
      ${m('cos θ = ' + f('5', '13'))}, so ${m('θ ≈ 67.4°')}.</p>`
    }
  ],
  examples: [
    {
      q: 'Cuboid ' + m('6 × 8 × 10') + '. Find the length of the space diagonal and its angle with the base.',
      steps: [
        ['Base diagonal ' + m(sr('36 + 64') + ' = 10'), ''],
        ['Space diagonal ' + m(sr('100 + 100') + ' = 10' + sr('2') + ' ≈ 14.14'), ''],
        [m('tan θ = ' + f('10', '10') + ' = 1'), ''],
        [m('θ = 45°'), '']
      ],
      ans: m('10' + sr('2')) + ' ≈ ' + m('14.1') + '; ' + m('45°')
    },
    {
      q: 'A pyramid has a square base of side 8 and lateral edge 10. Find the angle between a lateral edge and the base.',
      steps: [
        ['Half the base diagonal: ' + m(f('8' + sr('2'), '2') + ' = 4' + sr('2') + ' ≈ 5.657'), ''],
        ['Right triangle: hypotenuse ' + m('10') + ', adjacent ' + m('5.657') + '.', ''],
        [m('cos θ = ' + f('5.657', '10') + ' = 0.5657'), ''],
        [m('θ ≈ 55.5°'), '']
      ],
      ans: m('≈ 55.5°')
    },
    {
      q: 'In triangle ' + m('ABC') + ' inside a solid, ' + m('AB = 7') + ', ' + m('AC = 9') + ', ' + m('∠BAC = 52°') + '. Find ' + m('BC') + ' and the area.',
      steps: [
        [m('BC² = 49 + 81 − 2·7·9·cos 52°'), 'Cosine rule.'],
        [m('= 130 − 126 × 0.6157 = 52.42'), ''],
        [m('BC ≈ 7.24'), ''],
        [m('S = ' + f('1', '2') + ' · 7 · 9 · sin 52° ≈ 24.8'), '']
      ],
      ans: m('BC ≈ 7.24') + ', area ' + m('≈ 24.8')
    }
  ],
  modelNote: 'Hold a box and point at the triangle before any calculation begins.',
  interactive: {
    type: 'solveTriangle',
    title: 'Sine and cosine rules',
    hint: 'Change two sides and the included angle and watch which rule applies.'
  },
  quiz: [
    { q: 'Two sides and the included angle calls for:', a: ['the sine rule', 'the cosine rule', 'Pythagoras', 'the area formula'], c: 1, why: 'The cosine rule handles SAS.' },
    { q: 'Three sides given, find an angle — use:', a: ['the sine rule', 'the cosine rule rearranged', 'Pythagoras', 'a protractor'], c: 1, why: m('cos A = ' + f('b² + c² − a²', '2bc')) + '.' },
    { q: 'The angle between a line and a plane is measured to:', a: ['any line in the plane', 'its projection on the plane', 'the normal', 'the edge'], c: 1, why: 'The projection gives the smallest angle.' },
    { q: 'The space diagonal of an ' + m('a × b × c') + ' cuboid is:', a: [m('a + b + c'), m(sr('a² + b² + c²')), m(sr('a² + b²')), m('abc')], c: 1, why: 'Pythagoras twice.' },
    { q: 'For a dihedral angle both lines must be perpendicular to:', a: ['each other', 'the line of intersection', 'the base', 'the normal'], c: 1, why: 'Otherwise the angle is wrong.' }
  ],
  practice: {
    easy: [
      ['Space diagonal of a ' + m('3 × 4 × 12') + ' box', m('13')],
      ['Space diagonal of a cube of side 5', m('5' + sr('3')) + ' ≈ ' + m('8.66')],
      ['Base diagonal of a ' + m('6 × 8') + ' rectangle', m('10')],
      ['Triangle with ' + m('a = 5, b = 7, C = 60°') + '. Find ' + m('c'), m(sr('39')) + ' ≈ ' + m('6.24')],
      ['Area with ' + m('a = 6, b = 8, C = 30°'), m('12')],
      ['Sine rule: ' + m('A = 40°, B = 60°, a = 10') + '. Find ' + m('b'), m('≈ 13.5')],
      ['Angle of a cube’s space diagonal with the base', m('≈ 35.26°')]
    ],
    med: [
      ['Cuboid ' + m('4 × 4 × 7') + '. Angle of the space diagonal with the base', m('≈ 51.1°')],
      ['Square pyramid, base 6, height 4. Angle of a lateral face with the base', m('≈ 53.1°')],
      ['Same pyramid: angle of a lateral edge with the base', m('≈ 43.3°')],
      ['Triangle ' + m('a = 8, b = 5, c = 7') + '. Find the largest angle', m('≈ 81.8°')],
      ['Triangle ' + m('A = 35°, a = 9, b = 12') + '. Find ' + m('B'), m('≈ 49.9°') + ' or ' + m('130.1°')],
      ['Area of a triangle with sides 6, 7 and included angle ' + m('75°'), m('≈ 20.3')],
      ['Cube side 4: angle between a face diagonal and a space diagonal', m('≈ 35.26°')]
    ],
    hard: [
      ['Cuboid ' + m('5 × 12 × 9') + '. Angle between the space diagonal and the ' + m('12') + ' edge', m('≈ 44.1°')],
      ['Square pyramid base 10, lateral edge 13. Find the height', m('' + sr('119')) + ' ≈ ' + m('10.9')],
      ['Same pyramid: dihedral angle between two adjacent faces', m('≈ 84.8°')],
      ['A mast stands at a corner of a ' + m('20 × 30') + ' field; from the opposite corner its angle of elevation is ' + m('12°') + '. Find its height', m('≈ 7.66 m')],
      ['Regular tetrahedron edge 6: angle between a face and the base', m('≈ 70.5°')],
      ['Regular tetrahedron edge 6: angle between two edges at a vertex', m('60°')],
      ['Cube: prove the space diagonal makes ' + m('arctan ' + f('1', sr('2'))) + ' with the base', m('tan θ = ' + f('a', 'a' + sr('2')))]
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Draw the extracted triangle separately for every 3-D question.',
  homework: [
    'Cuboid ' + m('8 × 6 × 10') + '. Find the space diagonal and its angle with the base.',
    'Square pyramid, base 12, height 8. Find the slant height and the angle between a lateral face and the base.',
    'Same pyramid: find the angle between a lateral edge and the base.',
    'Triangle with ' + m('a = 11, b = 9, C = 48°') + '. Find ' + m('c') + ' and the area.',
    'Triangle with sides 7, 8, 12. Find all three angles.',
    'Explain, in three sentences, how to find the angle between two planes.'
  ]
});

/* ============================== 10 ============================== */
G10_GEO.push({
  id: 'g10-10', stream: 'geo', grade: 10, quarter: 1, lessons: '17–18', hours: 2,
  title: 'Control work, and the quarter review',
  subtitle: 'The axioms, the positions, the polyhedra, the sections and the trigonometry — all in one paper, then the map that ties them together.',
  uz: 'Geometry 10, Nazorat ishi 1', uzPage: 'pp. 79–82',
  cam: 'IGCSE E4 review', camPage: 'Core & Extended, pp. 313–316', wb: 'Control paper G1',
  objectives: [
    'Apply the whole quarter in one assessment.',
    'Present a construction with the rule quoted at each step.',
    'Classify each lost mark and rewrite the solution.',
    'Build a concept map of solid geometry so far.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Assessment', 'Baholash', 'Оценивание'],
    ['Justification', 'Asoslash', 'Обоснование'],
    ['Construction step', 'Yasash bosqichi', 'Шаг построения'],
    ['Concept map', 'Tushunchalar xaritasi', 'Карта понятий'],
    ['Revision', 'Takrorlash', 'Повторение'],
    ['Target', 'Maqsad', 'Цель'],
    ['Self-assessment', 'O‘z-o‘zini baholash', 'Самооценка']
  ],
  timing: [[3, 'Instructions'], [42, 'The paper'], [12, 'Answers and self-marking'], [20, 'Rewrite and classify'], [10, 'Concept map'], [3, 'Homework']],
  sections: [
    {
      h: 'The paper — 30 marks, 42 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>State the three axioms of space and say what each forbids</td><td class="m">3</td><td>L4–5</td></tr>
        <tr><td>2</td><td>In a cube, list all edges skew to ${m('CD')}</td><td class="m">3</td><td>L6–7</td></tr>
        <tr><td>3</td><td>A polyhedron has ${m('F = 12')} and ${m('E = 30')}. Find ${m('V')}, and name it if regular</td><td class="m">3</td><td>L8–9</td></tr>
        <tr><td>4</td><td>Construct the section of a cube through ${m('A')}, ${m('C')} and ${m('B₁')}; name the shape and find its area for side 6</td><td class="m">6</td><td>L12–13</td></tr>
        <tr><td>5</td><td>Cuboid ${m('6 × 8 × 10')}: space diagonal and its angle with the base</td><td class="m">5</td><td>L14–16</td></tr>
        <tr><td>6</td><td>Square pyramid base 10, height 12: the angle between a lateral face and the base</td><td class="m">5</td><td>L14–16</td></tr>
        <tr><td>7</td><td>Count the planes of symmetry of a cube and of a ${m('3 × 3 × 7')} cuboid</td><td class="m">5</td><td>L3</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Constructions are marked on reasons</div>
      Q4 gives 2 marks for the correct figure and 4 for the justification. A section drawn without
      R1/R2/R3 quoted scores a third of the question.</div>`
    },
    {
      h: 'The concept map',
      html: `<p>Six boxes, and the links between them written as sentences:</p>
      <ul>
        <li><b>axioms</b> → <b>positions of lines and planes</b> — “S3 is why two planes meet in a line”</li>
        <li><b>positions</b> → <b>skew lines</b> — “the case the plane does not have”</li>
        <li><b>polyhedra</b> → <b>Euler</b> — “${m('F + V − E = 2')} for every convex solid”</li>
        <li><b>polyhedra</b> → <b>nets</b> → <b>surface area</b></li>
        <li><b>sections</b> → <b>R1, R2, R3</b> — “parallel faces give parallel cuts”</li>
        <li><b>3-D trigonometry</b> → <b>extract a triangle</b> — “every 3-D question is a plane question”</li>
      </ul>
      {{fig:cubeSection:One cube carries four of the six boxes: positions, sections, symmetry and 3-D trigonometry.}}`
    },
    {
      h: 'Looking forward',
      html: `<p>Quarter II is parallelism of lines and planes — every proof will quote the three axioms of
      Lesson 4–5 by name, and every construction will use the section rules of Lesson 12–13. Neither
      set is ever re-taught; they are simply used.</p>
      <div class="keybox"><div class="klabel">One habit to carry forward</div>
      Draw the solid large, mark the right angles first, then extract the triangle. Almost every mark
      lost in Q5 and Q6 was lost by working from a diagram three centimetres wide.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q4: section of a cube through ' + m('A, C, B₁') + ', side 6.',
      steps: [
        [m('AC') + ' in the base face', 'R1'],
        [m('AB₁') + ' in face ' + m('ABB₁A₁') + ', ' + m('CB₁') + ' in face ' + m('BCC₁B₁'), 'R1 twice'],
        ['All three are face diagonals, ' + m('6' + sr('2')), 'Equilateral triangle'],
        [m('S = ' + f(sr('3'), '4') + ' × 72 = 18' + sr('3')), '']
      ],
      ans: 'Equilateral triangle, area ' + m('18' + sr('3')) + ' ≈ ' + m('31.2')
    },
    {
      q: 'Model answer, Q6: square pyramid base 10, height 12.',
      steps: [
        ['Apothem of the base ' + m('5') + '.', ''],
        ['Slant height ' + m(sr('144 + 25') + ' = 13') + '.', ''],
        [m('cos θ = ' + f('5', '13')), 'Both lines ⊥ to the base edge.'],
        [m('θ ≈ 67.4°'), '']
      ],
      ans: m('≈ 67.4°')
    },
    {
      q: 'Model answer, Q3: ' + m('F = 12, E = 30') + '.',
      steps: [
        [m('V = 2 − F + E = 2 − 12 + 30'), ''],
        [m('V = 20'), ''],
        ['12 faces, 20 vertices, 30 edges.', 'The dodecahedron.']
      ],
      ans: m('V = 20') + ' — the regular dodecahedron'
    }
  ],
  modelNote: 'Work Q4 and Q6 on the board before the rewrite hour begins.',
  interactive: {
    type: 'quiz',
    title: 'The quarter in ten questions',
    hint: 'One from each block of lessons.',
    items: [
      { q: 'Three non-collinear points determine:', a: ['no plane', 'one plane', 'two', 'infinitely many'], c: 1, why: 'Axiom S1.' },
      { q: 'Edges of a cube skew to a given edge:', a: [m('2'), m('3'), m('4'), m('6')], c: 2, why: '4 meet, 3 parallel, 4 skew.' },
      { q: m('F = 12, E = 30') + ' gives ' + m('V') + ':', a: [m('12'), m('16'), m('20'), m('24')], c: 2, why: 'Euler.' },
      { q: 'Section through ' + m('A, C, B₁') + ' of a cube:', a: ['square', 'rectangle', 'equilateral triangle', 'hexagon'], c: 2, why: 'Three equal face diagonals.' },
      { q: 'Space diagonal of a ' + m('6 × 8 × 10') + ' cuboid:', a: [m('10' + sr('2')), m('24'), m('14'), m('20')], c: 0, why: m(sr('36 + 64 + 100')) + '.' },
      { q: 'Planes of symmetry of a cube:', a: [m('3'), m('6'), m('9'), m('12')], c: 2, why: '3 face, 6 edge.' },
      { q: 'Planes of symmetry of a ' + m('3 × 3 × 7') + ' cuboid:', a: [m('3'), m('4'), m('5'), m('9')], c: 2, why: '3 face planes plus 2 diagonal.' },
      { q: 'A plane cuts two parallel faces in:', a: ['equal lines', 'parallel lines', 'perpendicular lines', 'points'], c: 1, why: 'Rule R2.' },
      { q: 'The maximum sides of a cube section:', a: [m('4'), m('5'), m('6'), m('8')], c: 2, why: 'One per face.' },
      { q: 'The angle between a line and a plane uses:', a: ['the normal', 'the projection', 'any line in the plane', 'the edge'], c: 1, why: 'It gives the smallest angle.' }
    ]
  },
  quiz: [
    { q: 'A construction scores most of its marks for:', a: ['neatness', 'the justification', 'colour', 'speed'], c: 1, why: 'The reasoning is the mathematics.' },
    { q: 'Euler’s formula fails for:', a: ['a cube', 'a prism', 'a solid with a hole', 'a pyramid'], c: 2, why: 'Its surface is not spherical.' },
    { q: 'Before any 3-D trigonometry you should:', a: ['guess', 'extract and redraw the triangle', 'measure', 'use a calculator'], c: 1, why: 'It turns 3-D into 2-D.' },
    { q: 'Skew lines differ from parallel lines because:', a: ['they meet', 'no plane contains both', 'they are equal', 'they are perpendicular'], c: 1, why: 'That is the definition.' }
  ],
  practice: {
    easy: [
      ['State axiom S1', 'Three non-collinear points determine exactly one plane'],
      ['Edges skew to ' + m('CD') + ' in a cube', m('AA₁, BB₁, A₁D₁, B₁C₁')],
      [m('F = 12, E = 30') + '; find ' + m('V'), m('20')],
      ['Space diagonal of a ' + m('6 × 8 × 10') + ' cuboid', m('10' + sr('2'))],
      ['Planes of symmetry of a cube', m('9')],
      ['Section through ' + m('A, C, B₁'), 'equilateral triangle'],
      ['Slant height of a pyramid, base 10, height 12', m('13')]
    ],
    med: [
      ['Area of the section through ' + m('A, C, B₁') + ' for side 6', m('18' + sr('3'))],
      ['Angle of a ' + m('6 × 8 × 10') + ' space diagonal with the base', m('45°')],
      ['Angle between a lateral face and the base, pyramid 10/12', m('≈ 67.4°')],
      ['Planes of symmetry of a ' + m('3 × 3 × 7') + ' cuboid', m('5')],
      [m('F, V, E') + ' of an octagonal prism', m('10, 16, 24')],
      ['Diagonal section area, cube side 6', m('36' + sr('2'))],
      ['Angle of a lateral edge with the base, pyramid base 10 height 12', m('≈ 59.5°')]
    ],
    hard: [
      ['Cube side 6: area of the midpoint hexagonal section', m('27' + sr('3')) + ' ≈ ' + m('46.8')],
      ['Prove no cube section is a heptagon', 'Six faces give at most six sides'],
      ['A solid has 32 faces, 12 pentagons and 20 hexagons, 3 at each vertex. Find ' + m('V, E'), m('V = 60, E = 90')],
      ['Cuboid ' + m('a × a × b') + ': find the angle between the space diagonal and a base edge', m('arccos ' + f('a', sr('2a² + b²')))],
      ['Regular tetrahedron edge ' + m('a') + ': find the angle between two faces', m('≈ 70.53°')],
      ['Construct the section of a cube through the midpoints of ' + m('AB, BC') + ' and ' + m('CC₁'), 'A pentagon'],
      ['Explain why a plane cannot meet a face of a convex solid in two separate segments', 'Convexity makes the intersection connected']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Bring the concept map to the first lesson of Quarter II.',
  homework: [
    'Rewrite in full every control-work question that lost a mark, with reasons.',
    'Finish the concept map with all six links written as sentences.',
    'Cuboid ' + m('5 × 12 × 9') + ': find the space diagonal, its angle with the base and its angle with the longest edge.',
    'Write your target for Quarter II in one checkable sentence.'
  ]
});

/* ===================== QUARTER II (14 hours) ===================== */

/* ============================== 11 ============================== */
G10_GEO.push({
  id: 'g10-11', stream: 'geo', grade: 10, quarter: 2, lessons: '19–20', hours: 2,
  title: 'The relative position of lines in space',
  subtitle: 'Parallelism revisited where a third case exists — and the two theorems that make it usable.',
  uz: 'Geometry 10, §9', uzPage: 'pp. 83–92',
  cam: 'Extension', camPage: 'Core & Extended, pp. 277–281', wb: 'Exercise 9.1',
  objectives: [
    'State the definition of parallel lines in space.',
    'Prove that through a point not on a line there is exactly one parallel to it.',
    'Apply the transitivity of parallelism in space.',
    'Prove the theorem on the angle between lines with respectively parallel sides.'
  ],
  terms: [
    ['Parallel lines in space', 'Fazoda parallel chiziqlar', 'Параллельные прямые в пространстве'],
    ['Coplanar lines', 'Bir tekislikdagi chiziqlar', 'Компланарные прямые'],
    ['Transitivity', 'Tranzitivlik', 'Транзитивность'],
    ['Respectively parallel sides', 'Mos parallel tomonlar', 'Соответственно параллельные стороны'],
    ['Unique parallel', 'Yagona parallel', 'Единственная параллельная'],
    ['Direction of a line', 'Chiziq yo‘nalishi', 'Направление прямой'],
    ['Angle between lines', 'Chiziqlar orasidagi burchak', 'Угол между прямыми'],
    ['Auxiliary plane', 'Yordamchi tekislik', 'Вспомогательная плоскость']
  ],
  timing: [[10, 'The definition, restated'], [20, 'One parallel through a point'], [22, 'Transitivity'], [20, 'Respectively parallel sides'], [16, 'Practice'], [2, 'Homework']],
  sections: [
    {
      h: 'The definition needs one more word',
      html: `<div class="keybox"><div class="klabel">Parallel in space</div>
      Two lines are <b>parallel</b> when they lie in <b>one plane</b> and do not meet. Without the first
      condition the definition would also admit skew lines, which never meet either.</div>
      {{fig:skewLines:Skew lines never meet — and no plane holds both. That is exactly what parallelism excludes.}}
      <p>Everything else about parallel lines carries over from the plane unchanged. What must be
      re-proved is that they still <b>exist and are unique</b> once the extra dimension is available.</p>`
    },
    {
      h: 'One parallel through a point',
      html: `<p><b>Theorem.</b> Through a point ${m('M')} not on a line ${m('a')} there passes exactly one
      line parallel to ${m('a')}.</p>
      <p><i>Proof.</i> The line ${m('a')} and the point ${m('M')} determine a unique plane ${m('α')}
      (Theorem 1 of Lesson 4–5). Inside ${m('α')} the plane axiom gives exactly one parallel through
      ${m('M')}. Any parallel to ${m('a')} through ${m('M')} must be coplanar with ${m('a')} by the
      definition, and that plane contains ${m('a')} and ${m('M')}, so it is ${m('α')}. Hence there is no
      other. ∎</p>
      <div class="keybox"><div class="klabel">The pattern of every proof in this chapter</div>
      Reduce the space problem to a plane problem by naming the right plane, then use plane geometry.
      Naming the plane is the whole of the work.</div>`
    },
    {
      h: 'Transitivity',
      html: `<p><b>Theorem.</b> If ${m('a ∥ b')} and ${m('b ∥ c')} then ${m('a ∥ c')}.</p>
      <p>In the plane this is obvious. In space it is not, because ${m('a')} and ${m('c')} need not
      obviously share a plane — and until that is proved, they might be skew. The proof constructs the
      plane and shows they cannot meet.</p>
      <div class="warn"><span class="wl">Perpendicularity is not transitive</span>
      In space, ${m('a ⊥ b')} and ${m('b ⊥ c')} does <b>not</b> give ${m('a ⊥ c')}. Take three edges of
      a cube meeting at one vertex: any two are perpendicular, so the conclusion would be false.
      Parallelism is transitive; perpendicularity is not.</div>`
    },
    {
      h: 'Respectively parallel sides',
      html: `<p><b>Theorem.</b> If two angles in space have respectively parallel sides, they are either
      equal or supplementary.</p>
      <p>This is what allows the angle between skew lines to be well defined: translating a line does
      not change the angle it makes with anything, because the translated line is parallel to the
      original and its sides are respectively parallel.</p>
      ${eq('translate ' + m('b') + ' to meet ' + m('a') + '  ⟹  the angle is unchanged', true)}
      <p>Which of “equal” or “supplementary” occurs depends on the directions chosen; the convention is
      to take the acute one.</p>`
    }
  ],
  examples: [
    {
      q: 'In cube ' + m('ABCDA₁B₁C₁D₁') + ', prove ' + m('AB ∥ D₁C₁') + '.',
      steps: [
        [m('AB ∥ DC'), 'Opposite sides of a square face.'],
        [m('DC ∥ D₁C₁'), 'Opposite sides of face ' + m('DCC₁D₁') + '.'],
        ['By transitivity.', '']
      ],
      ans: m('AB ∥ D₁C₁')
    },
    {
      q: 'Give three lines in a cube with ' + m('a ⊥ b') + ' and ' + m('b ⊥ c') + ' but ' + m('a') + ' not perpendicular to ' + m('c') + '.',
      steps: [
        ['Take ' + m('a = AB') + ', ' + m('b = AA₁') + ', ' + m('c = D₁C₁') + '.', ''],
        [m('AB ⊥ AA₁'), 'Adjacent edges of a face.'],
        [m('AA₁ ⊥ D₁C₁'), 'A vertical edge against a horizontal one.'],
        ['But ' + m('AB ∥ D₁C₁') + ', so the angle between them is ' + m('0°') + '.', 'Not perpendicular.']
      ],
      ans: m('AB, AA₁, D₁C₁') + ' — the first and last are parallel'
    },
    {
      q: m('M') + ' is a point not on line ' + m('a') + '. How many lines through ' + m('M') + ' are skew to ' + m('a') + '?',
      steps: [
        ['Only one is parallel.', ''],
        ['Those in the plane ' + m('α') + ' meet ' + m('a') + ' or are that parallel.', ''],
        ['Every other line through ' + m('M') + ' leaves ' + m('α') + '.', '']
      ],
      ans: 'Infinitely many'
    }
  ],
  modelNote: 'Hold two pencils parallel, then move one out of the plane to show what the definition excludes.',
  interactive: {
    type: 'space3d',
    title: 'Lines through a point',
    hint: 'Move the point and see which lines stay coplanar with the given one.'
  },
  quiz: [
    { q: 'Parallel lines in space must:', a: ['not meet', 'lie in one plane and not meet', 'be equal', 'be perpendicular to a third'], c: 1, why: 'Otherwise skew lines would qualify.' },
    { q: 'Through a point off a line the number of parallels is:', a: [m('0'), m('1'), m('2'), 'infinitely many'], c: 1, why: 'The plane is unique.' },
    { q: 'Parallelism in space is:', a: ['not transitive', 'transitive', 'symmetric only', 'undefined'], c: 1, why: m('a ∥ b, b ∥ c ⇒ a ∥ c') + '.' },
    { q: 'Perpendicularity in space is:', a: ['transitive', 'not transitive', 'the same as parallelism', 'undefined'], c: 1, why: 'Cube edges give the counterexample.' },
    { q: 'Angles with respectively parallel sides are:', a: ['always equal', 'equal or supplementary', 'always supplementary', 'unrelated'], c: 1, why: 'It depends on the directions.' }
  ],
  practice: {
    easy: [
      ['Define parallel lines in space', 'coplanar and never meeting'],
      ['How many parallels through a point off a line?', m('1')],
      ['Is ' + m('AB ∥ D₁C₁') + ' in a cube?', 'yes'],
      ['Is parallelism transitive in space?', 'yes'],
      ['Is perpendicularity transitive in space?', 'no'],
      ['Name a line skew to ' + m('AB') + ' in a cube', m('CC₁') + ' (or ' + m('DD₁') + ')'],
      ['Two lines that never meet are parallel?', 'not necessarily — they may be skew']
    ],
    med: [
      ['Prove ' + m('AB ∥ D₁C₁') + ' in a cube', 'Transitivity through ' + m('DC')],
      ['How many lines through a point are skew to a given line?', 'infinitely many'],
      ['If ' + m('a ∥ b') + ' and ' + m('b') + ' meets ' + m('c') + ', what can ' + m('a') + ' and ' + m('c') + ' be?', 'meeting or skew'],
      ['Angle between ' + m('AB') + ' and ' + m('C₁D₁') + ' in a cube', m('0°') + ' — they are parallel'],
      ['Angle between ' + m('AB') + ' and ' + m('B₁C₁'), m('90°')],
      ['Give two lines perpendicular to the same line but not parallel', 'Two edges of a cube meeting a third at one vertex'],
      ['Why is the angle between skew lines well defined?', 'Respectively parallel sides give the same angle']
    ],
    hard: [
      ['Prove transitivity of parallelism in space', 'Construct the plane through ' + m('a') + ' and a point of ' + m('c') + ', then argue in it'],
      ['Prove: if ' + m('a ∥ b') + ' and a plane meets ' + m('a') + ', it meets ' + m('b') + ' or contains it', 'Otherwise ' + m('b ∥ α') + ' forces ' + m('a ∥ α')],
      ['In a cube, count the pairs of parallel edges', m('18') + ' — three directions, ' + m('C(4,2) = 6') + ' each'],
      ['In a cube, count the pairs of intersecting edges', m('24') + ' — ' + m('C(3,2) = 3') + ' at each of 8 vertices'],
      ['In a cube, count the pairs of skew edges', m('24')],
      ['Check the three counts against ' + m('C(12,2)'), m('18 + 24 + 24 = 66') + ' ✓'],
      ['Prove the theorem on respectively parallel sides', 'Translate one angle onto the other; the triangles are congruent']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Every proof must name the plane it works in.',
  homework: [
    'Prove that through a point not on a line there is exactly one parallel to it.',
    'In cube ' + m('ABCDA₁B₁C₁D₁') + ', prove ' + m('AD ∥ B₁C₁') + '.',
    'Give a counterexample showing perpendicularity in space is not transitive.',
    'Explain in three sentences why the definition of parallel lines needs the words “in one plane”.'
  ]
});

/* ============================== 12 ============================== */
G10_GEO.push({
  id: 'g10-12', stream: 'geo', grade: 10, quarter: 2, lessons: '21–22', hours: 2,
  title: 'Skew lines',
  subtitle: 'The case the plane does not have — its test, its angle, and the common perpendicular that measures the distance between two lines that never meet.',
  uz: 'Geometry 10, §10', uzPage: 'pp. 93–102',
  cam: 'Extension', camPage: 'Core & Extended, pp. 277–281', wb: 'Exercise 10.1',
  objectives: [
    'State and apply the test for skew lines.',
    'Find the angle between two skew lines by translation.',
    'Describe the common perpendicular of two skew lines.',
    'Compute the distance between skew edges of a cuboid.'
  ],
  terms: [
    ['Skew lines', 'Ayqash to‘g‘ri chiziqlar', 'Скрещивающиеся прямые'],
    ['Test for skew lines', 'Ayqashlik alomati', 'Признак скрещивающихся прямых'],
    ['Common perpendicular', 'Umumiy perpendikulyar', 'Общий перпендикуляр'],
    ['Distance between skew lines', 'Ayqash chiziqlar orasidagi masofa', 'Расстояние между скрещивающимися прямыми'],
    ['Angle between skew lines', 'Ayqash chiziqlar burchagi', 'Угол между скрещивающимися прямыми'],
    ['Translation of a line', 'Chiziqni ko‘chirish', 'Перенос прямой'],
    ['Shortest segment', 'Eng qisqa kesma', 'Кратчайший отрезок'],
    ['Non-coplanar', 'Bir tekislikda yotmaydigan', 'Не лежащие в одной плоскости']
  ],
  timing: [[10, 'The test'], [22, 'The angle, by translation'], [24, 'The common perpendicular'], [20, 'Distances in a cuboid'], [20, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'The test',
      html: `<div class="keybox"><div class="klabel">Test for skew lines</div>
      If one line lies in a plane and the other meets that plane at a point <b>not on</b> the first
      line, then the two lines are skew.</div>
      <p>This is the practical test. Checking the definition directly — “no plane contains both” —
      requires ruling out infinitely many planes; the test requires exhibiting one.</p>
      {{fig:skewLines:AB lies in the base; CC₁ meets the base at C, which is not on AB. Skew.}}
      <p>In cube ${m('ABCDA₁B₁C₁D₁')}: ${m('AB')} lies in the plane ${m('ABCD')}, and ${m('CC₁')} meets
      that plane at ${m('C')}, which is not on ${m('AB')}. So ${m('AB')} and ${m('CC₁')} are skew.</p>`
    },
    {
      h: 'The angle',
      html: `<p>Translate either line until it meets the other, and measure the angle between the
      resulting intersecting lines. By the theorem on respectively parallel sides, the answer does not
      depend on which line is moved or where it is moved to.</p>
      ${eq(m('angle(a, b) = angle(a′, b)  whenever  a′ ∥ a'), true)}
      <p>In a cube, ${m('AB')} and ${m('B₁C₁')}: translate ${m('B₁C₁')} down to ${m('BC')}. Since
      ${m('AB ⊥ BC')}, the angle is ${m('90°')}. Two lines can be perpendicular without ever meeting.</p>
      <div class="warn"><span class="wl">Translate, do not rotate</span>
      Only a translation preserves direction. Sliding a line along itself, or turning it, changes the
      answer.</div>`
    },
    {
      h: 'The common perpendicular',
      html: `<div class="keybox"><div class="klabel">Theorem</div>
      Two skew lines have exactly one <b>common perpendicular</b> — a segment meeting both and
      perpendicular to both. Its length is the <b>distance</b> between the lines, and it is the shortest
      segment joining a point of one to a point of the other.</div>
      <p>In a cube of side ${m('a')}, the common perpendicular of ${m('AB')} and ${m('CC₁')} is
      ${m('BC')}, of length ${m('a')}. It meets ${m('AB')} at ${m('B')} and ${m('CC₁')} at ${m('C')},
      and is perpendicular to both.</p>
      <p><b>A second method.</b> Take the plane through one line parallel to the other. The distance
      between the skew lines equals the distance from the second line to that plane — a construction
      that generalises to cases where the common perpendicular is hard to see.</p>`
    },
    {
      h: 'Distances in a cuboid',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Pair in cuboid ${m('a × b × c')}</th><th>Common perpendicular</th><th>Distance</th></tr></thead>
      <tbody>
        <tr><td class="m">AB and CC₁</td><td class="m">BC</td><td class="m">b</td></tr>
        <tr><td class="m">AB and DD₁</td><td class="m">AD</td><td class="m">b</td></tr>
        <tr><td class="m">AA₁ and BC</td><td class="m">AB</td><td class="m">a</td></tr>
        <tr><td class="m">AB and D₁C₁</td><td>they are parallel</td><td>—</td></tr>
      </tbody></table></div>
      <p>In a cube every edge has four skew partners, and in each case the common perpendicular is
      another edge. The picture is easier than the algebra, which is why the diagram is drawn first.</p>`
    }
  ],
  examples: [
    {
      q: 'In cube ' + m('ABCDA₁B₁C₁D₁') + ' of side 6, find the distance between ' + m('AB') + ' and ' + m('CC₁') + '.',
      steps: [
        [m('BC') + ' meets ' + m('AB') + ' at ' + m('B') + ' and ' + m('CC₁') + ' at ' + m('C') + '.', ''],
        [m('BC ⊥ AB') + ' and ' + m('BC ⊥ CC₁') + '.', 'It is the common perpendicular.'],
        [m('|BC| = 6'), '']
      ],
      ans: m('6')
    },
    {
      q: 'Are ' + m('AD') + ' and ' + m('B₁C₁') + ' skew in a cube?',
      steps: [
        [m('B₁C₁ ∥ BC'), 'Opposite sides of face ' + m('BCC₁B₁') + '.'],
        [m('BC ∥ AD'), 'Opposite sides of the base.'],
        ['By transitivity ' + m('B₁C₁ ∥ AD') + '.', ''],
        ['Parallel lines are coplanar, so they are not skew.', 'Always test for parallelism first.']
      ],
      ans: 'No — they are parallel'
    },
    {
      q: 'Cuboid ' + m('4 × 6 × 8') + '. Find the angle between ' + m('AB') + ' and ' + m('DB₁') + '.',
      steps: [
        [m('AB = 4') + ' along ' + m('x') + '; ' + m('DB₁') + ' from ' + m('D(0,6,0)') + ' to ' + m('B₁(4,0,8)') + '.', ''],
        ['Translate ' + m('AB') + ' to ' + m('DC') + ', which meets ' + m('DB₁') + ' at ' + m('D') + '.', ''],
        [m('DC = 4') + ', ' + m('DB₁ = ' + sr('16 + 36 + 64') + ' = ' + sr('116')), ''],
        [m('cos θ = ' + f('4', sr('116')) + ' ≈ 0.3714'), '']
      ],
      ans: m('≈ 68.2°')
    }
  ],
  modelNote: 'Hold two pencils skew, then slide one parallel until they cross — the angle is unchanged.',
  interactive: {
    type: 'space3d',
    title: 'Skew edges of a box',
    hint: 'Move the point and see which edges are skew to the highlighted one.'
  },
  quiz: [
    { q: 'The test for skew lines needs:', a: ['two planes', 'one line in a plane and the other meeting it off that line', 'a common point', 'equal lengths'], c: 1, why: 'It exhibits the obstruction.' },
    { q: 'Two skew lines have how many common perpendiculars?', a: [m('0'), m('1'), m('2'), 'infinitely many'], c: 1, why: 'Exactly one.' },
    { q: 'The distance between skew lines is:', a: ['zero', 'the common perpendicular’s length', 'infinite', 'undefined'], c: 1, why: 'It is the shortest joining segment.' },
    { q: 'To find the angle between skew lines you:', a: ['rotate one', 'translate one', 'project both', 'measure directly'], c: 1, why: 'Translation preserves direction.' },
    { q: 'Skew lines can be perpendicular:', a: ['never', 'always', 'sometimes', 'only in a cube'], c: 2, why: m('AB') + ' and ' + m('B₁C₁') + ' in a cube are.' }
  ],
  practice: {
    easy: [
      ['State the test for skew lines', 'One line in a plane, the other meeting it off that line'],
      ['Are ' + m('AB') + ' and ' + m('CC₁') + ' skew in a cube?', 'yes'],
      ['Are ' + m('AB') + ' and ' + m('D₁C₁') + ' skew?', 'no — parallel'],
      ['Common perpendicular of ' + m('AB') + ' and ' + m('CC₁'), m('BC')],
      ['Distance between them in a cube of side 5', m('5')],
      ['Angle between ' + m('AB') + ' and ' + m('B₁C₁'), m('90°')],
      ['How many edges are skew to a given edge of a cube?', m('4')]
    ],
    med: [
      ['Cube of side 6: distance between ' + m('AB') + ' and ' + m('CC₁'), m('6')],
      ['Cube of side 6: distance between ' + m('AA₁') + ' and ' + m('BC'), m('6')],
      ['Angle between ' + m('AB') + ' and ' + m('DC₁') + ' in a cube', m('45°')],
      ['Angle between ' + m('AB₁') + ' and ' + m('BC₁') + ' in a cube', m('60°')],
      ['Cuboid ' + m('4 × 6 × 8') + ': angle between ' + m('AB') + ' and ' + m('DB₁'), m('≈ 68.2°')],
      ['Common perpendicular of ' + m('AA₁') + ' and ' + m('CD') + ' in a cube', m('AD')],
      ['List the four edges skew to ' + m('AD'), m('BB₁, CC₁, A₁B₁, D₁C₁')]
    ],
    hard: [
      ['Cube of side ' + m('a') + ': distance between ' + m('AB') + ' and ' + m('B₁D₁'), m(f('a', sr('2'))) + ' ≈ ' + m('0.707a')],
      ['Cube of side ' + m('a') + ': distance between the diagonals ' + m('AC') + ' and ' + m('B₁D₁'), m('a')],
      ['Cube of side ' + m('a') + ': distance between ' + m('AB') + ' and ' + m('A₁C₁'), m('a')],
      ['Prove the common perpendicular is unique', 'Two would force the lines to be coplanar'],
      ['Prove the common perpendicular is the shortest joining segment', 'Any other joins via a right triangle with it as a leg'],
      ['Cuboid ' + m('3 × 4 × 12') + ': distance between ' + m('AB') + ' and ' + m('CC₁'), m('4')],
      ['Explain the plane method for the distance between skew lines', 'Take the plane through one parallel to the other; the distance is from the second to it']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw the cube once, large, and answer tasks 1–3 from it.',
  homework: [
    'In cube ' + m('ABCDA₁B₁C₁D₁') + ', list every edge skew to ' + m('CD') + '.',
    'Find the common perpendicular and the distance between ' + m('AD') + ' and ' + m('CC₁') + ' for side 8.',
    'Find the angle between ' + m('AD') + ' and ' + m('BC₁') + '.',
    'Cuboid ' + m('5 × 12 × 9') + ': find the angle between ' + m('AB') + ' and ' + m('DB₁') + '.',
    'Explain in three sentences why the common perpendicular is the shortest segment joining the two lines.'
  ]
});

/* ============================== 13 ============================== */
G10_GEO.push({
  id: 'g10-13', stream: 'geo', grade: 10, quarter: 2, lessons: '23–24', hours: 2,
  title: 'The relative position of a line and a plane',
  subtitle: 'Three cases, one test — and the theorem that turns a hard space question into an easy plane one.',
  uz: 'Geometry 10, §11', uzPage: 'pp. 103–112',
  cam: 'Extension', camPage: 'Core & Extended, pp. 277–281', wb: 'Exercise 11.1',
  objectives: [
    'List the three positions of a line and a plane.',
    'State and apply the test for a line parallel to a plane.',
    'Prove that a plane through a line parallel to another meets it in a parallel line.',
    'Use the results in a cube or prism.'
  ],
  terms: [
    ['Line parallel to a plane', 'Tekislikka parallel chiziq', 'Прямая, параллельная плоскости'],
    ['Test for parallelism', 'Parallellik alomati', 'Признак параллельности'],
    ['Line lying in a plane', 'Tekislikda yotuvchi chiziq', 'Прямая, лежащая в плоскости'],
    ['Point of intersection', 'Kesishish nuqtasi', 'Точка пересечения'],
    ['Auxiliary plane', 'Yordamchi tekislik', 'Вспомогательная плоскость'],
    ['Trace', 'Iz', 'След'],
    ['Distance from a line to a plane', 'Chiziqdan tekislikkacha masofa', 'Расстояние от прямой до плоскости'],
    ['Section', 'Kesim', 'Сечение']
  ],
  timing: [[8, 'The three cases'], [22, 'The test'], [24, 'The converse theorem'], [22, 'Applications in a cube'], [18, 'Practice'], [6, 'Homework']],
  sections: [
    {
      h: 'The three cases',
      html: `{{fig:linePlanePos:In the plane, meeting it at a point, parallel to it. There is no fourth case.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Case</th><th>Common points</th><th>Notation</th></tr></thead>
      <tbody>
        <tr><td>the line lies in the plane</td><td>infinitely many</td><td class="m">a ⊂ α</td></tr>
        <tr><td>the line meets the plane</td><td class="m">1</td><td class="m">a ∩ α = M</td></tr>
        <tr><td>the line is parallel to the plane</td><td class="m">0</td><td class="m">a ∥ α</td></tr>
      </tbody></table></div>
      <p>Two common points would put the whole line in the plane, by axiom S2 — which is why there is no
      case with exactly two.</p>`
    },
    {
      h: 'The test',
      html: `<div class="keybox"><div class="klabel">Test for a line parallel to a plane</div>
      If a line ${m('ℓ')} not lying in a plane ${m('α')} is parallel to <b>some</b> line ${m('m')} lying
      in ${m('α')}, then ${m('ℓ ∥ α')}.</div>
      {{fig:lineParallelPlane:ℓ is parallel to m, and m lies in α. That is enough.}}
      <p><i>Proof.</i> ${m('ℓ')} and ${m('m')} are parallel, so they lie in one plane ${m('β')}. If
      ${m('ℓ')} met ${m('α')}, the meeting point would lie in ${m('β ∩ α = m')} — so it would be on
      ${m('m')}, contradicting ${m('ℓ ∥ m')}. ∎</p>
      <div class="warn"><span class="wl">“Some”, not “every”</span>
      You need to exhibit <b>one</b> line of the plane parallel to ${m('ℓ')}. Finding it is the whole
      exercise; in a cube it is almost always the opposite edge of a face.</div>`
    },
    {
      h: 'The converse',
      html: `<p><b>Theorem.</b> If ${m('ℓ ∥ α')} and a plane ${m('β')} contains ${m('ℓ')} and meets
      ${m('α')} in a line ${m('m')}, then ${m('ℓ ∥ m')}.</p>
      <p><i>Proof.</i> ${m('ℓ')} and ${m('m')} both lie in ${m('β')}, so they are coplanar. If they met,
      the meeting point would be on ${m('ℓ')} and in ${m('α')} — impossible, since ${m('ℓ ∥ α')}. ∎</p>
      <div class="keybox"><div class="klabel">This is the section rule R2, proved</div>
      It is why a cutting plane meets two parallel faces in parallel lines: each face is parallel to
      the other, and the cutting plane contains a line of each.</div>`
    },
    {
      h: 'In a cube',
      html: `<p>In ${m('ABCDA₁B₁C₁D₁')}, is ${m('A₁B₁')} parallel to the plane ${m('ABCD')}?</p>
      <ol>
        <li>${m('A₁B₁')} does not lie in ${m('ABCD')}.</li>
        <li>${m('A₁B₁ ∥ AB')}, opposite sides of the square face ${m('ABB₁A₁')}.</li>
        <li>${m('AB ⊂ ABCD')}.</li>
        <li>By the test, ${m('A₁B₁ ∥ ABCD')}. ∎</li>
      </ol>
      <p>The <b>distance</b> from a line parallel to a plane to that plane is the same at every point —
      here it is the height of the cube. That constancy is what makes the distance well defined.</p>`
    }
  ],
  examples: [
    {
      q: 'Prove that ' + m('B₁C₁') + ' is parallel to the plane ' + m('ABCD') + ' in a cube.',
      steps: [
        [m('B₁C₁ ⊄ ABCD'), 'It is on the top face.'],
        [m('B₁C₁ ∥ BC'), 'Opposite sides of face ' + m('BCC₁B₁') + '.'],
        [m('BC ⊂ ABCD'), ''],
        ['Test applies.', '']
      ],
      ans: m('B₁C₁ ∥ ABCD')
    },
    {
      q: 'A plane through ' + m('A₁B₁') + ' meets the base ' + m('ABCD') + ' in a line ' + m('m') + '. What can be said about ' + m('m') + '?',
      steps: [
        [m('A₁B₁ ∥ ABCD'), 'By the previous example.'],
        ['The cutting plane contains ' + m('A₁B₁') + ' and meets the base in ' + m('m') + '.', ''],
        ['By the converse theorem, ' + m('m ∥ A₁B₁') + '.', '']
      ],
      ans: m('m ∥ A₁B₁') + ', so also ' + m('m ∥ AB')
    },
    {
      q: 'Is the diagonal ' + m('AC₁') + ' of a cube parallel to any face?',
      steps: [
        ['It meets the base at ' + m('A') + ' and the top at ' + m('C₁') + '.', ''],
        ['So it is not parallel to those two.', ''],
        ['It meets each of the other four faces too.', 'It is a space diagonal.']
      ],
      ans: 'No — a space diagonal meets every face'
    }
  ],
  modelNote: 'Hold a pencil parallel to the table and ask which line on the table it is parallel to.',
  interactive: {
    type: 'space3d',
    title: 'Line and plane',
    hint: 'Move the line and watch which of the three cases holds.'
  },
  quiz: [
    { q: 'A line and a plane can share:', a: ['0, 1 or infinitely many points', 'exactly 2', 'only 0', 'only 1'], c: 0, why: 'Two would force the whole line in.' },
    { q: 'The test for ' + m('ℓ ∥ α') + ' needs:', a: ['every line of ' + m('α'), 'one line of ' + m('α') + ' parallel to ' + m('ℓ'), 'a perpendicular', 'a point'], c: 1, why: 'One is enough.' },
    { q: 'If ' + m('ℓ ∥ α') + ' and ' + m('β ⊃ ℓ') + ' cuts ' + m('α') + ' in ' + m('m') + ', then:', a: [m('ℓ ⊥ m'), m('ℓ ∥ m'), m('ℓ = m'), 'nothing'], c: 1, why: 'The converse theorem.' },
    { q: m('A₁B₁') + ' and the plane ' + m('ABCD') + ' in a cube are:', a: ['meeting', 'parallel', 'coincident', 'perpendicular'], c: 1, why: m('A₁B₁ ∥ AB ⊂ ABCD') + '.' },
    { q: 'A space diagonal of a cube is parallel to:', a: ['the base', 'a side face', 'no face', 'every face'], c: 2, why: 'It meets them all.' }
  ],
  practice: {
    easy: [
      ['Name the three positions of a line and a plane', 'in it, meeting it, parallel'],
      ['Can a line and a plane share exactly 2 points?', 'no'],
      ['State the test for ' + m('ℓ ∥ α'), m('ℓ ∥ m') + ' for some ' + m('m ⊂ α')],
      ['Is ' + m('A₁B₁ ∥ ABCD') + ' in a cube?', 'yes'],
      ['Is ' + m('AA₁ ∥ ABCD') + '?', 'no — it meets it at ' + m('A')],
      ['Is ' + m('AC₁') + ' parallel to any face?', 'no'],
      ['Distance from a parallel line to a plane is:', 'constant']
    ],
    med: [
      ['Prove ' + m('B₁C₁ ∥ ABCD'), 'It is parallel to ' + m('BC') + ', which lies in the base'],
      ['Prove ' + m('A₁C₁ ∥ ABCD'), m('A₁C₁ ∥ AC ⊂ ABCD')],
      ['Which faces is ' + m('AB') + ' parallel to?', m('A₁B₁C₁D₁') + ' and ' + m('DCC₁D₁')],
      ['Which faces does ' + m('AB') + ' lie in?', m('ABCD') + ' and ' + m('ABB₁A₁')],
      ['Which faces does ' + m('AB') + ' meet at a point?', m('ADD₁A₁') + ' and ' + m('BCC₁B₁')],
      ['A plane through ' + m('AB') + ' meets the top face in ' + m('m') + '. Then ' + m('m'), m('∥ AB')],
      ['Distance from ' + m('A₁B₁') + ' to the base in a cube of side 7', m('7')]
    ],
    hard: [
      ['Prove the test for a line parallel to a plane', 'A meeting point would lie on the line of intersection'],
      ['Prove the converse theorem', m('ℓ') + ' and ' + m('m') + ' are coplanar in ' + m('β') + ' and cannot meet'],
      ['Through a point off a plane, how many lines are parallel to the plane?', 'infinitely many — a whole plane of them'],
      ['Prove: if ' + m('ℓ ∥ α') + ' and ' + m('ℓ ∥ β') + ' with ' + m('α ∩ β = m') + ', then ' + m('ℓ ∥ m'), 'Apply the converse in each plane'],
      ['In a cube, find a plane parallel to ' + m('AC') + ' but not containing it', m('A₁B₁C₁D₁')],
      ['Give a line parallel to two intersecting planes', 'One parallel to their line of intersection'],
      ['Why can a line parallel to a plane never meet a line of that plane?', 'The meeting point would be common to line and plane']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Each proof must name the line of the plane it uses.',
  homework: [
    'Prove that ' + m('D₁C₁') + ' is parallel to the plane ' + m('ABCD') + '.',
    'List every face of a cube that ' + m('AD') + ' is parallel to.',
    'A plane through ' + m('B₁C₁') + ' meets the base in a line ' + m('m') + '. What is ' + m('m') + ' parallel to, and why?',
    'Prove that a line parallel to two intersecting planes is parallel to their line of intersection.',
    'Explain in three sentences why a line and a plane can never share exactly two points.'
  ]
});

/* ============================== 14 ============================== */
G10_GEO.push({
  id: 'g10-14', stream: 'geo', grade: 10, quarter: 2, lessons: '25–26', hours: 2,
  title: 'The relative position of planes in space',
  subtitle: 'Parallel planes, the test that establishes them, and the four properties that follow immediately.',
  uz: 'Geometry 10, §12', uzPage: 'pp. 113–124',
  cam: 'Extension', camPage: 'Core & Extended, pp. 277–281', wb: 'Exercise 12.1',
  objectives: [
    'List the three positions of two planes.',
    'State and apply the test for parallel planes.',
    'Prove that a third plane cuts two parallel planes in parallel lines.',
    'Use parallel planes to prove segments equal.'
  ],
  terms: [
    ['Parallel planes', 'Parallel tekisliklar', 'Параллельные плоскости'],
    ['Coincident planes', 'Ustma-ust tushuvchi tekisliklar', 'Совпадающие плоскости'],
    ['Test for parallel planes', 'Tekisliklar parallelligi alomati', 'Признак параллельности плоскостей'],
    ['Intersecting planes', 'Kesishuvchi tekisliklar', 'Пересекающиеся плоскости'],
    ['Line of intersection', 'Kesishish chizig‘i', 'Линия пересечения'],
    ['Distance between planes', 'Tekisliklar orasidagi masofa', 'Расстояние между плоскостями'],
    ['Equal segments', 'Teng kesmalar', 'Равные отрезки'],
    ['Transversal plane', 'Kesuvchi tekislik', 'Секущая плоскость']
  ],
  timing: [[8, 'The three cases'], [22, 'The test'], [26, 'Four properties'], [20, 'Applications'], [18, 'Practice'], [6, 'Homework']],
  sections: [
    {
      h: 'The three cases',
      html: `{{fig:planePlanePos:Parallel, meeting in a line, or coincident. There is no case with a single common point.}}
      <p>Two planes with a common point share a whole line, by axiom S3. So either they have no common
      point (parallel), a common line (intersecting), or they are the same plane.</p>`
    },
    {
      h: 'The test',
      html: `<div class="keybox"><div class="klabel">Test for parallel planes</div>
      If <b>two intersecting</b> lines of one plane are respectively parallel to two lines of another
      plane, the planes are parallel.</div>
      <div class="warn"><span class="wl">Two <i>intersecting</i> lines</span>
      One is not enough, and two parallel ones are not enough. A plane containing a single line parallel
      to ${m('β')} can still cut ${m('β')} — think of a page turning about that line. The two directions
      must be genuinely different to pin the plane down.</div>
      <p><i>Proof sketch.</i> If the planes met in a line ${m('c')}, then ${m('c')} would lie in
      ${m('α')} and be parallel to both of the given lines of ${m('α')} — impossible, since they
      intersect and a line cannot be parallel to two different directions in the same plane. ∎</p>`
    },
    {
      h: 'Four properties',
      html: `{{fig:parallelPlanes:A third plane cuts two parallel planes. The two lines of intersection are parallel.}}
      <ol>
        <li>A third plane cutting two parallel planes cuts them in <b>parallel lines</b>.</li>
        <li>Segments of parallel lines cut off between two parallel planes are <b>equal</b>.</li>
        <li>Through a point off a plane there is <b>exactly one</b> plane parallel to it.</li>
        <li>If ${m('α ∥ β')} and ${m('β ∥ γ')} then ${m('α ∥ γ')} — parallelism of planes is transitive.</li>
      </ol>
      <p>Property 2 is the workhorse: it is why the lateral edges of a prism are all equal, and why the
      cross-sections of a prism parallel to the base are all congruent.</p>`
    },
    {
      h: 'Applications',
      html: `<p><b>The prism.</b> Its two bases lie in parallel planes. Property 1 makes corresponding
      base edges parallel; property 2 makes the lateral edges equal. Both facts are usually assumed —
      they are theorems, and this is their proof.</p>
      <p><b>The midline of a tetrahedron.</b> A plane through the midpoints of three edges is parallel
      to a face, because two of its intersecting lines are midlines, each parallel to an edge of that
      face.</p>
      <p><b>Distance.</b> Between two parallel planes the distance is the same everywhere — the length
      of any common perpendicular segment.</p>`
    }
  ],
  examples: [
    {
      q: 'Prove that in a cube the planes ' + m('ABCD') + ' and ' + m('A₁B₁C₁D₁') + ' are parallel.',
      steps: [
        [m('AB ∥ A₁B₁') + ' and ' + m('AD ∥ A₁D₁') + '.', 'Opposite sides of square faces.'],
        [m('AB') + ' and ' + m('AD') + ' intersect at ' + m('A') + '.', 'Two different directions.'],
        ['Test applies.', '']
      ],
      ans: m('ABCD ∥ A₁B₁C₁D₁')
    },
    {
      q: 'Two parallel planes are cut by a third in lines ' + m('a') + ' and ' + m('b') + '. If ' + m('a') + ' makes ' + m('35°') + ' with the line of intersection of the cutting plane and a fourth plane, what does ' + m('b') + ' make?',
      steps: [
        [m('a ∥ b'), 'Property 1.'],
        ['Angles with respectively parallel sides.', ''],
        ['Equal or supplementary; here equal.', '']
      ],
      ans: m('35°')
    },
    {
      q: 'A tetrahedron ' + m('ABCD') + '. ' + m('M, N, P') + ' are the midpoints of ' + m('AB, AC, AD') + '. Prove ' + m('MNP ∥ BCD') + '.',
      steps: [
        [m('MN') + ' is a midline of ' + m('△ABC') + ', so ' + m('MN ∥ BC') + '.', ''],
        [m('MP') + ' is a midline of ' + m('△ABD') + ', so ' + m('MP ∥ BD') + '.', ''],
        [m('MN') + ' and ' + m('MP') + ' intersect at ' + m('M') + '.', ''],
        [m('BC') + ' and ' + m('BD') + ' lie in ' + m('BCD') + '.', 'Test applies.']
      ],
      ans: m('MNP ∥ BCD')
    }
  ],
  modelNote: 'Two sheets of card held parallel, cut by a third — the two cut lines are visibly parallel.',
  interactive: {
    type: 'space3d',
    title: 'Two planes',
    hint: 'Move the second plane and watch the three cases appear.'
  },
  quiz: [
    { q: 'Two distinct planes can share:', a: ['a point only', 'a line', 'two points only', 'nothing but a point'], c: 1, why: 'Axiom S3.' },
    { q: 'The test for parallel planes needs:', a: ['one parallel line', 'two intersecting parallel lines', 'three points', 'a perpendicular'], c: 1, why: 'Two directions pin the plane down.' },
    { q: 'A third plane cuts two parallel planes in:', a: ['perpendicular lines', 'parallel lines', 'one line', 'points'], c: 1, why: 'Property 1.' },
    { q: 'Segments of parallel lines between parallel planes are:', a: ['equal', 'proportional', 'perpendicular', 'unrelated'], c: 0, why: 'They bound a parallelogram.' },
    { q: 'Through a point off a plane the number of parallel planes is:', a: [m('0'), m('1'), m('2'), 'infinitely many'], c: 1, why: 'Exactly one.' }
  ],
  practice: {
    easy: [
      ['Name the three positions of two planes', 'parallel, intersecting, coincident'],
      ['Can two planes meet in exactly one point?', 'no'],
      ['State the test for parallel planes', 'Two intersecting lines of one parallel to two of the other'],
      ['Are ' + m('ABCD') + ' and ' + m('A₁B₁C₁D₁') + ' parallel in a cube?', 'yes'],
      ['Are ' + m('ABCD') + ' and ' + m('ABB₁A₁') + ' parallel?', 'no — they meet in ' + m('AB')],
      ['How many planes through a point are parallel to a given plane?', m('1')],
      ['Is parallelism of planes transitive?', 'yes']
    ],
    med: [
      ['Prove ' + m('ABCD ∥ A₁B₁C₁D₁') + ' in a cube', m('AB ∥ A₁B₁') + ' and ' + m('AD ∥ A₁D₁') + ', intersecting'],
      ['Name a pair of parallel faces of a hexagonal prism', 'the two hexagonal bases'],
      ['Why is one parallel line not enough for the test?', 'The plane can still turn about it'],
      ['Distance between the base and the top of a cube of side 9', m('9')],
      ['Tetrahedron: prove the midpoint plane ' + m('MNP ∥ BCD'), 'Two midlines parallel to two edges of ' + m('BCD')],
      ['Two parallel planes cut by a third: the lines are', 'parallel'],
      ['Why are the lateral edges of a prism equal?', 'Parallel segments between parallel planes']
    ],
    hard: [
      ['Prove the test for parallel planes', 'A common line would be parallel to two intersecting directions'],
      ['Prove property 2 — segments between parallel planes are equal', 'They form a parallelogram'],
      ['Prove that if ' + m('α ∥ β') + ' and a line meets ' + m('α') + ', it meets ' + m('β'), 'Otherwise it would be parallel to both'],
      ['A plane cuts a cube parallel to a face. Describe the section', 'A square congruent to the face'],
      ['A plane cuts a tetrahedron parallel to a face. Describe the section', 'A triangle similar to that face'],
      ['Prove: three parallel planes cut two transversals in proportional segments', 'Reduce to the plane through the two transversals'],
      ['Give two planes each parallel to the same line that are not parallel to each other', 'Two walls of a room and a vertical line']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'The test needs two <i>intersecting</i> lines. Say so in every proof that uses it.',
  homework: [
    'Prove that in a cube the planes ' + m('ABB₁A₁') + ' and ' + m('DCC₁D₁') + ' are parallel.',
    'Tetrahedron ' + m('ABCD') + ': prove the plane through the midpoints of ' + m('AB, AC, AD') + ' is parallel to ' + m('BCD') + '.',
    'Explain in three sentences why one parallel line is not enough for the test.',
    'Prove that segments of parallel lines cut off between two parallel planes are equal.',
    'Give an example of two planes parallel to the same line that intersect each other.'
  ]
});

/* ============================== 15 ============================== */
G10_GEO.push({
  id: 'g10-15', stream: 'geo', grade: 10, quarter: 2, lessons: '27–28', hours: 2,
  title: 'Parallel projection in space',
  subtitle: 'How a three-dimensional figure is drawn on a flat page — what survives the projection and what does not.',
  uz: 'Geometry 10, §13', uzPage: 'pp. 125–136',
  cam: 'IGCSE E14.x', camPage: 'Core & Extended, pp. 210–216', wb: 'Exercise 13.1',
  objectives: [
    'Construct the parallel projection of a point, segment and figure onto a plane.',
    'State the properties preserved by parallel projection.',
    'Explain why a circle projects to an ellipse and a square to a parallelogram.',
    'Draw a correct picture of a cube, prism and pyramid.'
  ],
  terms: [
    ['Parallel projection', 'Parallel proyeksiya', 'Параллельное проектирование'],
    ['Direction of projection', 'Proyeksiyalash yo‘nalishi', 'Направление проектирования'],
    ['Projecting line', 'Proyeksiyalovchi chiziq', 'Проектирующая прямая'],
    ['Image (projection)', 'Proyeksiya', 'Проекция'],
    ['Plane of projection', 'Proyeksiya tekisligi', 'Плоскость проекции'],
    ['Preserved property', 'Saqlanuvchi xossa', 'Сохраняющееся свойство'],
    ['Ratio of division', 'Bo‘linish nisbati', 'Отношение деления'],
    ['Visible and hidden edges', 'Ko‘rinadigan va ko‘rinmaydigan qirralar', 'Видимые и невидимые рёбра'],
    ['Correct picture', 'To‘g‘ri tasvir', 'Правильное изображение']
  ],
  timing: [[10, 'The construction'], [22, 'What is preserved'], [22, 'What is not'], [24, 'Drawing solids correctly'], [16, 'Practice'], [6, 'Homework']],
  sections: [
    {
      h: 'The construction',
      html: `<p>Fix a plane ${m('α')} and a direction ${m('ℓ')} not parallel to it. Through each point
      ${m('A')} of the figure draw the line through ${m('A')} parallel to ${m('ℓ')}; where it meets
      ${m('α')} is the <b>projection</b> ${m("A′")}.</p>
      {{fig:parallelProjection:Every point drops along the same direction. The midpoint lands on the midpoint.}}
      <div class="keybox"><div class="klabel">Why it matters</div>
      Every picture of a solid on paper — every diagram in this book — is a parallel projection.
      Knowing what it preserves is knowing what you may legitimately read off a drawing.</div>`
    },
    {
      h: 'What is preserved',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Property</th><th>Preserved?</th></tr></thead>
      <tbody>
        <tr><td>a straight line projects to a straight line (or a point)</td><td>yes</td></tr>
        <tr><td>parallel lines project to parallel lines</td><td>yes</td></tr>
        <tr><td>the ratio in which a point divides a segment</td><td>yes</td></tr>
        <tr><td>the midpoint of a segment</td><td>yes</td></tr>
        <tr><td>the ratio of lengths on <b>parallel</b> lines</td><td>yes</td></tr>
        <tr><td>lengths</td><td><b>no</b></td></tr>
        <tr><td>angles</td><td><b>no</b></td></tr>
        <tr><td>the ratio of lengths on non-parallel lines</td><td><b>no</b></td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Never measure a drawing</span>
      A right angle in the solid may appear as ${m('60°')} on the page, and two equal edges may appear
      to differ. A drawing is a guide to structure, never to size.</div>`
    },
    {
      h: 'What the images look like',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Figure</th><th>Its parallel projection</th></tr></thead>
      <tbody>
        <tr><td>square, rectangle, rhombus</td><td>a parallelogram (any one)</td></tr>
        <tr><td>parallelogram</td><td>a parallelogram</td></tr>
        <tr><td>triangle</td><td>a triangle (any one)</td></tr>
        <tr><td>circle</td><td>an ellipse</td></tr>
        <tr><td>trapezium</td><td>a trapezium — the parallel pair stays parallel</td></tr>
      </tbody></table></div>
      <p>Because <b>any</b> triangle can be the image of <b>any</b> triangle, and any parallelogram the
      image of any square, a picture of a cube may be drawn with the base as any convenient
      parallelogram. That freedom is what makes cabinet projection — the drawing convention of this
      book — legitimate.</p>`
    },
    {
      h: 'Drawing solids correctly',
      html: `<div class="keybox"><div class="klabel">The rules of a correct picture</div>
      <b>1</b> Parallel edges are drawn parallel. <b>2</b> Midpoints are drawn at midpoints.
      <b>3</b> Hidden edges are dashed. <b>4</b> The base is drawn as a parallelogram, not as a
      rectangle. <b>5</b> Vertical edges stay vertical.</div>
      <p>The standard convention here is <b>cabinet projection</b>: the depth axis is drawn at ${m('45°')}
      and at half scale, so a unit cube appears with a receding edge of length ${m('0.5')}. It is not
      what the eye sees, but it makes every parallel edge parallel on the page, which is what a
      geometry diagram needs.</p>
      {{fig:cubeLabelled:A correct cube: parallel edges parallel, hidden edges dashed, base a parallelogram.}}`
    }
  ],
  examples: [
    {
      q: m('M') + ' is the midpoint of ' + m('AB') + '. Where is ' + m("M′") + ' on ' + m("A′B′") + '?',
      steps: [
        ['Parallel projection preserves the ratio of division.', ''],
        [m('AM : MB = 1 : 1'), ''],
        ['So ' + m("A′M′ : M′B′ = 1 : 1") + '.', '']
      ],
      ans: 'At the midpoint of ' + m("A′B′")
    },
    {
      q: 'A square is projected. Can its image be a rhombus that is not a square?',
      steps: [
        ['A square is a parallelogram.', ''],
        ['Any parallelogram can be the image of a square.', ''],
        ['A rhombus is a parallelogram.', '']
      ],
      ans: 'Yes'
    },
    {
      q: 'Can the projection of a triangle be a segment?',
      steps: [
        ['If the plane of the triangle is parallel to the direction of projection…', ''],
        ['…every point drops onto one line.', '']
      ],
      ans: 'Yes — when the triangle’s plane contains the direction of projection'
    }
  ],
  modelNote: 'Hold a wire square in sunlight and turn it — the shadow runs through every parallelogram.',
  interactive: {
    type: 'transform',
    title: 'What a projection preserves',
    hint: 'Watch which features survive and which do not.'
  },
  quiz: [
    { q: 'Parallel projection preserves:', a: ['lengths', 'angles', 'the midpoint', 'areas'], c: 2, why: 'Ratios along a line survive.' },
    { q: 'The image of a circle is:', a: ['a circle', 'an ellipse', 'a parabola', 'a line'], c: 1, why: 'Or a circle as a special case.' },
    { q: 'The image of a square can be:', a: ['only a square', 'any parallelogram', 'any quadrilateral', 'only a rhombus'], c: 1, why: 'Parallelism is preserved, lengths are not.' },
    { q: 'Angles under parallel projection are:', a: ['preserved', 'doubled', 'not preserved', 'halved'], c: 2, why: 'A right angle may appear oblique.' },
    { q: 'Hidden edges in a correct picture are:', a: ['omitted', 'dashed', 'thickened', 'coloured'], c: 1, why: 'The convention of technical drawing.' }
  ],
  practice: {
    easy: [
      ['Image of a straight line', 'a line (or a point)'],
      ['Image of parallel lines', 'parallel lines'],
      ['Image of a midpoint', 'the midpoint'],
      ['Image of a circle', 'an ellipse'],
      ['Image of a square', 'a parallelogram'],
      ['Are lengths preserved?', 'no'],
      ['Are angles preserved?', 'no']
    ],
    med: [
      ['Can a square project to a rhombus?', 'yes'],
      ['Can a rectangle project to a trapezium?', 'no — parallel stays parallel'],
      ['Can a triangle project to a segment?', 'yes'],
      ['Is the ratio ' + m('AM : MB') + ' preserved?', 'yes'],
      ['Is the ratio of two perpendicular edges preserved?', 'no'],
      ['In cabinet projection the depth axis is drawn at', m('45°') + ' and half scale'],
      ['Why is the base of a cube drawn as a parallelogram?', 'A square projects to a parallelogram']
    ],
    hard: [
      ['Prove that parallel projection preserves the midpoint', 'The projecting lines cut two parallels proportionally'],
      ['Prove that parallel lines project to parallel lines', 'Their projecting planes are parallel'],
      ['Can two perpendicular lines project to parallel lines?', 'Yes — if their common plane contains the direction'],
      ['A cube of side 1 in cabinet projection: length of the receding edge on paper', m('0.5')],
      ['Why can any triangle be the image of any triangle?', 'An affine map takes any triangle to any other'],
      ['Which is preserved: the ratio of areas, or the ratio of lengths on non-parallel lines?', 'the ratio of areas'],
      ['Explain why a drawing must never be measured', 'Lengths and angles are not preserved']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Task 5 must be drawn, with hidden edges dashed.',
  homework: [
    'List four properties preserved by parallel projection and three that are not.',
    'Explain why a square can project to any parallelogram.',
    'Can the projection of a rectangle be a trapezium? Justify your answer.',
    'A point divides a segment in the ratio ' + m('2 : 3') + '. What is the ratio on the image?',
    'Draw a correct picture of a cube and of a hexagonal prism, with hidden edges dashed.'
  ]
});

/* ============================== 16 ============================== */
G10_GEO.push({
  id: 'g10-16', stream: 'geo', grade: 10, quarter: 2, lessons: '29–30', hours: 2,
  title: 'The area of a triangle, and trigonometry in three dimensions',
  subtitle: 'Cambridge insert: one area formula for every triangle, applied inside solids.',
  uz: 'Geometry 10, §13 (extension)', uzPage: 'pp. 137–142',
  cam: 'IGCSE E6.5 · E6.6', camPage: 'Core & Extended, pp. 300–312', wb: 'IGCSE Exercise 6.5',
  objectives: [
    'Use S = ½ab sin C for any triangle.',
    'Use Heron’s formula when three sides are known.',
    'Find the area of a triangular section of a solid.',
    'Combine the area formula with the sine and cosine rules in a 3-D problem.'
  ],
  terms: [
    ['Area of a triangle', 'Uchburchak yuzasi', 'Площадь треугольника'],
    ['Included angle', 'Ichki burchak', 'Угол между сторонами'],
    ['Heron’s formula', 'Geron formulasi', 'Формула Герона'],
    ['Semi-perimeter', 'Yarim perimetr', 'Полупериметр'],
    ['Triangular section', 'Uchburchakli kesim', 'Треугольное сечение'],
    ['Sine rule', 'Sinuslar teoremasi', 'Теорема синусов'],
    ['Cosine rule', 'Kosinuslar teoremasi', 'Теорема косинусов'],
    ['Three-dimensional problem', 'Fazoviy masala', 'Пространственная задача'],
    ['Extracted triangle', 'Ajratilgan uchburchak', 'Выделенный треугольник']
  ],
  timing: [[10, 'The area formula'], [16, 'Heron'], [26, 'Sections of solids'], [24, 'Mixed 3-D problems'], [20, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'One formula for every triangle',
      html: `${eq(m('S = ' + f('1', '2') + 'ab · sin C'), true)}
      <p>Two sides and the angle <b>between them</b>. It reduces to ${m(f('1', '2') + 'bh')} when
      ${m('C = 90°')}, because ${m('sin 90° = 1')} — the familiar formula is the special case.</p>
      {{fig:sineCosRule:The labelling convention: side a opposite angle A. The area uses the angle between the two named sides.}}
      <div class="warn"><span class="wl">The angle must be the included one</span>
      ${m(f('1', '2') + 'ab · sin A')} is wrong: ${m('A')} is not between ${m('a')} and ${m('b')}.
      Name the two sides first, then take the angle they enclose.</div>`
    },
    {
      h: 'Heron’s formula',
      html: `<p>When all three sides are known and no angle is:</p>
      ${eq(m('S = ' + sr('s(s − a)(s − b)(s − c)') + ' ,  where  s = ' + f('a + b + c', '2')), true)}
      <p>For ${m('5, 6, 7')}: ${m('s = 9')} and ${m('S = ' + sr('9 · 4 · 3 · 2') + ' = ' + sr('216') + ' ≈ 14.7')}.</p>
      <div class="keybox"><div class="klabel">Which to use</div>
      Two sides and the included angle → the sine formula. Three sides → Heron, or find an angle by the
      cosine rule and then use the sine formula. Both give the same number.</div>`
    },
    {
      h: 'Areas of sections',
      html: `<p>The sections of Lesson 12–13 are polygons in space; their areas are computed by splitting
      into triangles and applying the formula to each.</p>
      <p><b>Example.</b> Cube of side ${m('6')}. The section through ${m('A, C, B₁')} is an equilateral
      triangle of side ${m('6' + sr('2'))}. Using the formula with ${m('C = 60°')}:</p>
      ${eq(m('S = ' + f('1', '2') + ' · 72 · sin 60° = 36 · ' + f(sr('3'), '2') + ' = 18' + sr('3') + ' ≈ 31.2'), true)}
      {{fig:cubeSection:The triangular section, and the triangle drawn flat beside it.}}`
    },
    {
      h: 'Mixed problems',
      html: `<p>A full 3-D problem chains the three tools:</p>
      <ol>
        <li>Find the lengths of the section's sides by Pythagoras in the solid.</li>
        <li>Find an angle by the cosine rule in the extracted triangle.</li>
        <li>Find the area by ${m(f('1', '2') + 'ab sin C')}.</li>
      </ol>
      <p><b>Example.</b> Cuboid ${m('4 × 6 × 12')}. Section through ${m('A(0,0,0)')}, ${m('B(4,0,0)')}
      and ${m('C₁(4,6,12)')}: ${m('AB = 4')}, ${m('BC₁ = ' + sr('36 + 144') + ' ≈ 13.42')}, and
      ${m('AB ⊥ BC₁')} because ${m('AB')} is perpendicular to the whole face ${m('BCC₁B₁')}. So the area
      is ${m(f('1', '2') + ' · 4 · 13.42 ≈ 26.8')}.</p>`
    }
  ],
  examples: [
    {
      q: 'Find the area of a triangle with ' + m('a = 7') + ', ' + m('b = 9') + ', ' + m('C = 40°') + '.',
      steps: [
        [m('S = ' + f('1', '2') + ' · 7 · 9 · sin 40°'), ''],
        [m('= 31.5 × 0.6428'), ''],
        [m('≈ 20.2'), '']
      ],
      ans: m('≈ 20.2') + ' square units'
    },
    {
      q: 'Find the area of a triangle with sides 8, 11 and 13.',
      steps: [
        [m('s = 16'), ''],
        [m('S = ' + sr('16 · 8 · 5 · 3')), ''],
        [m('= ' + sr('1920') + ' ≈ 43.8'), '']
      ],
      ans: m('≈ 43.8')
    },
    {
      q: 'Cube of side 6. Find the area of the section through ' + m('A, C, B₁') + '.',
      steps: [
        ['All three sides are face diagonals, ' + m('6' + sr('2')) + '.', 'Equilateral.'],
        [m('S = ' + f('1', '2') + ' · 72 · sin 60°'), ''],
        [m('= 18' + sr('3') + ' ≈ 31.2'), '']
      ],
      ans: m('18' + sr('3')) + ' ≈ ' + m('31.2')
    }
  ],
  modelNote: 'Extract the triangle from the solid and draw it flat before any calculation.',
  interactive: {
    type: 'solveTriangle',
    title: 'Two sides and the included angle',
    hint: 'Change the sides and the angle, and watch the area.'
  },
  quiz: [
    { q: 'The area formula ' + m(f('1', '2') + 'ab sin C') + ' needs:', a: ['any angle', 'the angle between ' + m('a') + ' and ' + m('b'), 'the largest angle', 'a right angle'], c: 1, why: 'The included angle.' },
    { q: 'Heron’s formula needs:', a: ['two sides and an angle', 'three sides', 'two angles', 'the height'], c: 1, why: 'Sides only.' },
    { q: m('s') + ' in Heron’s formula is:', a: ['the perimeter', 'half the perimeter', 'the longest side', 'the area'], c: 1, why: m(f('a + b + c', '2')) + '.' },
    { q: 'Area of a triangle with ' + m('a = 6, b = 8, C = 30°') + ':', a: [m('12'), m('24'), m('48'), m('6')], c: 0, why: m(f('1', '2') + ' · 48 · 0.5') + '.' },
    { q: 'The section of a cube through ' + m('A, C, B₁') + ' is:', a: ['right-angled', 'equilateral', 'isosceles only', 'scalene'], c: 1, why: 'Three equal face diagonals.' }
  ],
  practice: {
    easy: [
      ['Area with ' + m('a = 4, b = 5, C = 90°'), m('10')],
      ['Area with ' + m('a = 6, b = 8, C = 30°'), m('12')],
      ['Area with ' + m('a = 10, b = 10, C = 60°'), m('25' + sr('3'))],
      ['Heron: sides 3, 4, 5', m('6')],
      ['Heron: sides 5, 6, 7', m(sr('216')) + ' ≈ ' + m('14.7')],
      [m('s') + ' for sides 8, 11, 13', m('16')],
      ['Area with ' + m('a = 12, b = 5, C = 90°'), m('30')]
    ],
    med: [
      ['Area with ' + m('a = 7, b = 9, C = 40°'), m('≈ 20.2')],
      ['Heron: sides 8, 11, 13', m('≈ 43.8')],
      ['Cube side 6: area of section ' + m('ACB₁'), m('18' + sr('3'))],
      ['Cube side 4: area of the diagonal section ' + m('ABC₁D₁'), m('16' + sr('2'))],
      ['Triangle 9, 12, 15: area', m('54')],
      ['Two sides 10 and 14 enclose ' + m('120°') + '. Area', m('35' + sr('3')) + ' ≈ ' + m('60.6')],
      ['Cuboid ' + m('4 × 6 × 12') + ': area of section ' + m('ABC₁'), m('≈ 26.8')]
    ],
    hard: [
      ['Cube side ' + m('a') + ': area of the regular hexagonal section', m(f('3' + sr('3'), '4') + 'a²')],
      ['Square pyramid, base 10, height 12: area of one lateral face', m('65')],
      ['Same pyramid: total lateral surface area', m('260')],
      ['Triangle with sides 13, 14, 15: area and the height on the 14-side', m('84') + ', height ' + m('12')],
      ['Find the angle when ' + m('a = 8, b = 10') + ' and the area is ' + m('20'), m('30°') + ' or ' + m('150°')],
      ['Regular tetrahedron edge 6: total surface area', m('36' + sr('3'))],
      ['Prove ' + m('S = ' + f('1', '2') + 'ab sin C') + ' from ' + m(f('1', '2') + 'bh'), m('h = a sin C')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw the extracted triangle for every 3-D question.',
  homework: [
    'Find the area of a triangle with ' + m('a = 11') + ', ' + m('b = 6') + ', ' + m('C = 55°') + '.',
    'Find the area of a triangle with sides 7, 9 and 12 by Heron’s formula.',
    'Cube of side 8: find the area of the section through ' + m('A, C, B₁') + '.',
    'Square pyramid, base 12, height 8: find the area of one lateral face and the total lateral area.',
    'Two sides 9 and 12 enclose an angle whose sine is ' + m('0.6') + '. Find the area and both possible angles.'
  ]
});

/* ============================== 17 ============================== */
G10_GEO.push({
  id: 'g10-17', stream: 'geo', grade: 10, quarter: 2, lessons: '31–32', hours: 2,
  title: 'Control work 2, and the quarter review',
  subtitle: 'Parallelism in space — lines, planes, projection and area — in one paper, then the map.',
  uz: 'Geometry 10, Nazorat ishi 2', uzPage: 'pp. 143–146',
  cam: 'IGCSE E4 review', camPage: 'Core & Extended, pp. 313–316', wb: 'Control paper G2',
  objectives: [
    'Apply the whole quarter in one assessment.',
    'Quote a test or a theorem by name in every proof.',
    'Classify each lost mark and rewrite the solution.',
    'Build a concept map of parallelism in space.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Test (criterion)', 'Alomat', 'Признак'],
    ['Justification', 'Asoslash', 'Обоснование'],
    ['Concept map', 'Tushunchalar xaritasi', 'Карта понятий'],
    ['Revision', 'Takrorlash', 'Повторение'],
    ['Self-assessment', 'O‘z-o‘zini baholash', 'Самооценка'],
    ['Target', 'Maqsad', 'Цель'],
    ['Counterexample', 'Qarshi misol', 'Контрпример']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [12, 'Answers'], [22, 'Rewrite'], [10, 'Concept map'], [3, 'Targets']],
  sections: [
    {
      h: 'The paper — 25 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>List every edge of a cube skew to ${m('CD')}, and name one common perpendicular</td><td class="m">4</td><td>L21–22</td></tr>
        <tr><td>2</td><td>Prove ${m('B₁C₁ ∥ ABCD')}, quoting the test</td><td class="m">4</td><td>L23–24</td></tr>
        <tr><td>3</td><td>Prove ${m('ABB₁A₁ ∥ DCC₁D₁')}, quoting the test</td><td class="m">4</td><td>L25–26</td></tr>
        <tr><td>4</td><td>Give a counterexample showing perpendicularity in space is not transitive</td><td class="m">3</td><td>L19–20</td></tr>
        <tr><td>5</td><td>List four properties preserved by parallel projection and two that are not</td><td class="m">4</td><td>L27–28</td></tr>
        <tr><td>6</td><td>Cube of side 6: find the area of the section through ${m('A, C, B₁')}</td><td class="m">6</td><td>L29–30</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Proofs are marked on the reason</div>
      Q2 and Q3 each give 3 of their 4 marks for naming the test and verifying its conditions.
      A correct conclusion with no reason scores one.</div>`
    },
    {
      h: 'The concept map',
      html: `<p>Six boxes, links as sentences:</p>
      <ul>
        <li><b>two lines</b> → <b>three cases</b> — “parallel, meeting, or skew”</li>
        <li><b>skew</b> → <b>common perpendicular</b> — “exactly one, and it is the distance”</li>
        <li><b>line and plane</b> → <b>the test</b> — “parallel to <i>some</i> line of the plane”</li>
        <li><b>two planes</b> → <b>the test</b> — “two <i>intersecting</i> lines, respectively parallel”</li>
        <li><b>parallel planes</b> → <b>equal segments</b> — “why a prism’s lateral edges are equal”</li>
        <li><b>projection</b> → <b>what a drawing may be trusted for</b> — “structure, never size”</li>
      </ul>
      {{fig:parallelPlanes:The picture behind two of the six boxes.}}`
    },
    {
      h: 'Looking forward',
      html: `<p>Quarter III is perpendicularity — the theorem of the three perpendiculars, the distance
      from a point to a plane, and the dihedral angle. Every proof will use a parallelism result from
      this quarter, and every construction the projection rules of Lesson 27–28.</p>
      <div class="keybox"><div class="klabel">One habit to carry forward</div>
      Name the test, then verify each of its conditions in turn. Two of the four marks in every proof
      question this quarter were for exactly that.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q2: prove ' + m('B₁C₁ ∥ ABCD') + '.',
      steps: [
        [m('B₁C₁ ⊄ ABCD'), 'Condition 1 of the test.'],
        [m('B₁C₁ ∥ BC'), 'Opposite sides of square ' + m('BCC₁B₁') + '.'],
        [m('BC ⊂ ABCD'), 'Condition 2.'],
        ['By the test for a line parallel to a plane.', '']
      ],
      ans: m('B₁C₁ ∥ ABCD')
    },
    {
      q: 'Model answer, Q3: prove ' + m('ABB₁A₁ ∥ DCC₁D₁') + '.',
      steps: [
        [m('AB ∥ DC') + ' and ' + m('AA₁ ∥ DD₁') + '.', ''],
        [m('AB') + ' and ' + m('AA₁') + ' meet at ' + m('A') + '.', 'Two intersecting lines.'],
        [m('DC') + ' and ' + m('DD₁') + ' lie in ' + m('DCC₁D₁') + '.', ''],
        ['By the test for parallel planes.', '']
      ],
      ans: m('ABB₁A₁ ∥ DCC₁D₁')
    },
    {
      q: 'Model answer, Q6: cube of side 6, section through ' + m('A, C, B₁') + '.',
      steps: [
        ['Each side is a face diagonal, ' + m('6' + sr('2')) + '.', 'By rule R1 three times.'],
        ['Equilateral, so every angle is ' + m('60°') + '.', ''],
        [m('S = ' + f('1', '2') + ' · 72 · sin 60°'), ''],
        [m('= 18' + sr('3') + ' ≈ 31.2'), '']
      ],
      ans: m('18' + sr('3')) + ' ≈ ' + m('31.2')
    }
  ],
  modelNote: 'Work Q2 and Q3 on the board, writing the test out in full before applying it.',
  interactive: {
    type: 'quiz',
    title: 'The quarter in ten questions',
    hint: 'One from each block.',
    items: [
      { q: 'Parallel lines in space must be:', a: ['non-meeting', 'coplanar and non-meeting', 'perpendicular', 'equal'], c: 1, why: 'Otherwise skew lines qualify.' },
      { q: 'Perpendicularity in space is:', a: ['transitive', 'not transitive', 'symmetric only', 'undefined'], c: 1, why: 'Cube edges give a counterexample.' },
      { q: 'How many edges of a cube are skew to a given edge?', a: [m('2'), m('3'), m('4'), m('6')], c: 2, why: '4 meet, 3 parallel, 4 skew.' },
      { q: 'Two skew lines have how many common perpendiculars?', a: [m('0'), m('1'), m('2'), '∞'], c: 1, why: 'Exactly one.' },
      { q: 'The test for ' + m('ℓ ∥ α') + ' needs:', a: ['every line of ' + m('α'), 'one line of ' + m('α'), 'a perpendicular', 'two planes'], c: 1, why: 'One parallel line inside is enough.' },
      { q: 'The test for parallel planes needs:', a: ['one parallel line', 'two intersecting parallel lines', 'three points', 'a common point'], c: 1, why: 'Two directions.' },
      { q: 'A third plane cuts two parallel planes in:', a: ['parallel lines', 'perpendicular lines', 'a point', 'nothing'], c: 0, why: 'Property 1.' },
      { q: 'Parallel projection preserves:', a: ['lengths', 'angles', 'midpoints', 'areas'], c: 2, why: 'Ratios along a line survive.' },
      { q: 'The image of a circle is:', a: ['a circle', 'an ellipse', 'a line', 'a parabola'], c: 1, why: 'Or a circle as a special case.' },
      { q: 'Cube side 6: area of the section ' + m('ACB₁') + ':', a: [m('18'), m('18' + sr('3')), m('36'), m('36' + sr('2'))], c: 1, why: 'Equilateral of side ' + m('6' + sr('2')) + '.' }
    ]
  },
  quiz: [
    { q: 'A proof scores most of its marks for:', a: ['the conclusion', 'naming and checking the test', 'neatness', 'speed'], c: 1, why: 'The reasoning is the mathematics.' },
    { q: 'The test for parallel planes fails with:', a: ['two intersecting lines', 'one line only', 'three lines', 'a perpendicular'], c: 1, why: 'The plane can still turn about it.' },
    { q: 'A drawing may be trusted for:', a: ['lengths', 'angles', 'structure', 'areas'], c: 2, why: 'Only what projection preserves.' },
    { q: 'Quarter III begins with:', a: ['volume', 'perpendicularity in space', 'vectors', 'probability'], c: 1, why: 'Then the three perpendiculars.' }
  ],
  practice: {
    easy: [
      ['Edges skew to ' + m('CD') + ' in a cube', m('AA₁, BB₁, A₁D₁, B₁C₁')],
      ['Is ' + m('B₁C₁ ∥ ABCD') + '?', 'yes'],
      ['Is ' + m('ABB₁A₁ ∥ DCC₁D₁') + '?', 'yes'],
      ['Is perpendicularity transitive in space?', 'no'],
      ['Does projection preserve midpoints?', 'yes'],
      ['Does projection preserve angles?', 'no'],
      ['Area with ' + m('a = 6, b = 8, C = 30°'), m('12')]
    ],
    med: [
      ['Prove ' + m('B₁C₁ ∥ ABCD'), 'Test: ' + m('B₁C₁ ∥ BC ⊂ ABCD')],
      ['Prove ' + m('ABB₁A₁ ∥ DCC₁D₁'), 'Two intersecting parallel pairs'],
      ['Common perpendicular of ' + m('CD') + ' and ' + m('AA₁'), m('AD')],
      ['Cube side 6: area of section ' + m('ACB₁'), m('18' + sr('3'))],
      ['Cube side 6: distance between ' + m('AB') + ' and ' + m('CC₁'), m('6')],
      ['Image of a square under projection', 'a parallelogram'],
      ['Angle between ' + m('AB') + ' and ' + m('DC₁') + ' in a cube', m('45°')]
    ],
    hard: [
      ['Cube side ' + m('a') + ': distance between ' + m('AB') + ' and ' + m('B₁D₁'), m(f('a', sr('2')))],
      ['Prove segments of parallel lines between parallel planes are equal', 'They bound a parallelogram'],
      ['Cube side 6: area of the midpoint hexagonal section', m('27' + sr('3')) + ' ≈ ' + m('46.8')],
      ['Prove: if ' + m('ℓ ∥ α') + ' and ' + m('ℓ ∥ β') + ' with ' + m('α ∩ β = m') + ' then ' + m('ℓ ∥ m'), 'Converse theorem in each plane'],
      ['Tetrahedron: prove the midpoint plane is parallel to a face', 'Two midlines, two directions'],
      ['Give two planes parallel to the same line that intersect', 'Two walls and a vertical line'],
      ['Heron: sides 8, 11, 13', m('≈ 43.8')]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Bring the concept map to the first lesson of Quarter III.',
  homework: [
    'Rewrite in full every control-work question that lost a mark, naming the test used.',
    'Finish the concept map with all six links written as sentences.',
    'Cube of side 10: find the area of the section through ' + m('A, C, B₁') + ' and the distance between ' + m('AB') + ' and ' + m('CC₁') + '.',
    'Write your target for Quarter III in one checkable sentence, and date it.'
  ]
});

/* ===================== QUARTER III (20 hours) ===================== */

/* ============================== 18 ============================== */
G10_GEO.push({
  id: 'g10-18', stream: 'geo', grade: 10, quarter: 3, lessons: '33–34', hours: 2,
  title: 'Perpendicular lines and planes in space',
  subtitle: 'Two lines is enough — the test that turns an infinite condition into a finite check.',
  uz: 'Geometry 10, §14', uzPage: 'pp. 147–158',
  cam: 'Extension', camPage: 'Core & Extended, pp. 323–328', wb: 'Exercise 14.1',
  objectives: [
    'Define a line perpendicular to a plane.',
    'State and apply the test for perpendicularity of a line and a plane.',
    'Prove the two lemmas on parallel lines and perpendicular planes.',
    'Construct the perpendicular from a point to a plane.'
  ],
  terms: [
    ['Perpendicular to a plane', 'Tekislikka perpendikulyar', 'Перпендикуляр к плоскости'],
    ['Test for perpendicularity', 'Perpendikulyarlik alomati', 'Признак перпендикулярности'],
    ['Two intersecting lines', 'Kesishuvchi ikki chiziq', 'Две пересекающиеся прямые'],
    ['Foot of the perpendicular', 'Perpendikulyar asosi', 'Основание перпендикуляра'],
    ['Normal to a plane', 'Tekislik normali', 'Нормаль к плоскости'],
    ['Unique perpendicular', 'Yagona perpendikulyar', 'Единственный перпендикуляр'],
    ['Lemma', 'Lemma', 'Лемма'],
    ['Construction', 'Yasash', 'Построение']
  ],
  timing: [[12, 'The definition'], [24, 'The test'], [22, 'Two lemmas'], [20, 'Construction and uniqueness'], [16, 'Practice'], [6, 'Homework']],
  sections: [
    {
      h: 'The definition',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      A line is <b>perpendicular to a plane</b> when it is perpendicular to <b>every</b> line lying in
      that plane.</div>
      <p>As a definition that is unusable — there are infinitely many lines to check. The value of the
      next theorem is that it reduces “every” to “two”.</p>
      <p>The line is also called a <b>normal</b> to the plane, and the point where it meets the plane is
      the <b>foot</b> of the perpendicular.</p>`
    },
    {
      h: 'The test',
      html: `<div class="keybox"><div class="klabel">Test for a line perpendicular to a plane</div>
      If a line is perpendicular to <b>two intersecting</b> lines of a plane, it is perpendicular to the
      whole plane.</div>
      {{fig:perpLinePlane:Two intersecting lines are enough. A third would be redundant; one would not be enough.}}
      <div class="warn"><span class="wl">Intersecting, not parallel</span>
      A line perpendicular to two <b>parallel</b> lines of a plane need not be perpendicular to the
      plane: a pencil laid across two rails of a railway is perpendicular to both, and lies flat in the
      plane. The two directions must be genuinely different.</div>
      <p>In a cube, ${m('AA₁ ⊥ AB')} and ${m('AA₁ ⊥ AD')}, and ${m('AB')} and ${m('AD')} intersect at
      ${m('A')}. So ${m('AA₁ ⊥ ABCD')}, and therefore ${m('AA₁ ⊥ AC')} and ${m('AA₁ ⊥ BD')} as well —
      results that would otherwise each need their own proof.</p>`
    },
    {
      h: 'Two lemmas',
      html: `<p><b>Lemma 1.</b> If one of two parallel lines is perpendicular to a plane, so is the
      other.</p>
      <p><b>Lemma 2.</b> If two lines are perpendicular to the same plane, they are parallel.</p>
      <p>Together these say: <b>all the normals of a plane are parallel to one another</b>, and any line
      parallel to a normal is itself a normal. The direction perpendicular to a plane is unique.</p>
      ${eq(m('a ⊥ α  and  b ⊥ α   ⇒   a ∥ b'), true)}
      <div class="keybox"><div class="klabel">Compare with the plane case</div>
      In the plane, two lines perpendicular to the same line are parallel — the same statement, one
      dimension down. Lemma 2 is its space version, and it is proved the same way.</div>`
    },
    {
      h: 'Construction and uniqueness',
      html: `<p><b>Theorem.</b> Through any point there passes exactly one line perpendicular to a given
      plane, and exactly one plane perpendicular to a given line.</p>
      <p>The distance from a point to a plane is the length of that perpendicular segment — and by the
      argument of the next lesson, it is the shortest of all segments from the point to the plane.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>In a cube ${m('ABCDA₁B₁C₁D₁')}</th><th>Perpendicular to</th></tr></thead>
      <tbody>
        <tr><td class="m">AA₁</td><td>${m('ABCD')} and ${m('A₁B₁C₁D₁')}</td></tr>
        <tr><td class="m">AB</td><td>${m('ADD₁A₁')} and ${m('BCC₁B₁')}</td></tr>
        <tr><td class="m">AD</td><td>${m('ABB₁A₁')} and ${m('DCC₁D₁')}</td></tr>
      </tbody></table></div>`
    }
  ],
  examples: [
    {
      q: 'In a cube, prove ' + m('AA₁ ⊥ AC') + '.',
      steps: [
        [m('AA₁ ⊥ AB') + ' and ' + m('AA₁ ⊥ AD') + '.', 'Adjacent edges of square faces.'],
        [m('AB') + ' and ' + m('AD') + ' intersect at ' + m('A') + ' and lie in ' + m('ABCD') + '.', ''],
        ['By the test, ' + m('AA₁ ⊥ ABCD') + '.', ''],
        [m('AC ⊂ ABCD') + '.', 'By the definition.']
      ],
      ans: m('AA₁ ⊥ AC')
    },
    {
      q: 'A line is perpendicular to two parallel lines of a plane. Must it be perpendicular to the plane?',
      steps: [
        ['The test demands two <b>intersecting</b> lines.', ''],
        ['A line inside the plane, crossing both, is perpendicular to both.', ''],
        ['It is not perpendicular to the plane.', '']
      ],
      ans: 'No'
    },
    {
      q: 'Two lines ' + m('a') + ' and ' + m('b') + ' are perpendicular to the plane ' + m('α') + '. What can be said?',
      steps: [
        ['Lemma 2 applies.', ''],
        [m('a ∥ b'), ''],
        ['They determine a plane, perpendicular to ' + m('α') + '.', '']
      ],
      ans: m('a ∥ b')
    }
  ],
  modelNote: 'Stand a pencil on the desk and check it against two rulers laid across it.',
  interactive: {
    type: 'space3d',
    title: 'A normal to a plane',
    hint: 'Move the line and see when it becomes perpendicular.'
  },
  quiz: [
    { q: 'A line ⊥ to a plane is ⊥ to:', a: ['one line of it', 'two lines of it', 'every line of it', 'no line of it'], c: 2, why: 'That is the definition.' },
    { q: 'The test needs:', a: ['one line', 'two intersecting lines', 'two parallel lines', 'three lines'], c: 1, why: 'Two directions fix the plane.' },
    { q: 'Two lines ⊥ to the same plane are:', a: ['perpendicular', 'parallel', 'skew', 'equal'], c: 1, why: 'Lemma 2.' },
    { q: 'If ' + m('a ∥ b') + ' and ' + m('a ⊥ α') + ' then:', a: [m('b ∥ α'), m('b ⊥ α'), m('b ⊂ α'), 'nothing'], c: 1, why: 'Lemma 1.' },
    { q: 'In a cube ' + m('AA₁') + ' is perpendicular to:', a: [m('ABB₁A₁'), m('ABCD'), m('ADD₁A₁'), 'all of them'], c: 1, why: 'It is a vertical edge.' }
  ],
  practice: {
    easy: [
      ['Define a line perpendicular to a plane', '⊥ to every line of the plane'],
      ['State the test', '⊥ to two intersecting lines of the plane'],
      ['Is ' + m('AA₁ ⊥ ABCD') + ' in a cube?', 'yes'],
      ['Is ' + m('AA₁ ⊥ AC') + '?', 'yes'],
      ['Two lines ⊥ to the same plane are', 'parallel'],
      ['Is one line enough for the test?', 'no'],
      ['Are two parallel lines enough?', 'no']
    ],
    med: [
      ['Prove ' + m('AA₁ ⊥ BD') + ' in a cube', m('AA₁ ⊥ ABCD') + ' and ' + m('BD ⊂ ABCD')],
      ['Which faces is ' + m('AB') + ' perpendicular to?', m('ADD₁A₁') + ' and ' + m('BCC₁B₁')],
      ['If ' + m('a ⊥ α') + ' and ' + m('b ⊥ α') + ', what is the angle between ' + m('a') + ' and ' + m('b') + '?', m('0°') + ' — parallel'],
      ['How many perpendiculars to a plane through a point?', m('1')],
      ['How many planes ⊥ to a line through a point?', m('1')],
      ['Give a counterexample to "two parallel lines suffice"', 'A line inside the plane crossing two rails'],
      ['In a cube, is ' + m('AC ⊥ BD') + '?', 'yes — diagonals of a square']
    ],
    hard: [
      ['Prove Lemma 1', 'Translate the perpendicularity along the parallel'],
      ['Prove Lemma 2', 'Otherwise two planes through one point would be perpendicular to one line'],
      ['In a cube, prove ' + m('BD ⊥ AA₁C₁C'), m('BD ⊥ AC') + ' and ' + m('BD ⊥ AA₁')],
      ['In a cube, prove ' + m('AC₁ ⊥ BD'), m('BD ⊥ AA₁C₁C') + ' contains ' + m('AC₁')],
      ['A regular pyramid: prove the axis is ⊥ to the base', 'It is ⊥ to two base diagonals'],
      ['If ' + m('a ⊥ α') + ' and ' + m('α ∥ β') + ', is ' + m('a ⊥ β') + '?', 'yes'],
      ['Can a line be perpendicular to two intersecting planes?', 'no — the normals would be parallel']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every proof must name the two intersecting lines used in the test.',
  homework: [
    'In cube ' + m('ABCDA₁B₁C₁D₁') + ', prove ' + m('DD₁ ⊥ AC') + '.',
    'List every face of a cube that ' + m('BC') + ' is perpendicular to.',
    'Prove that if two lines are perpendicular to the same plane they are parallel.',
    'Give a counterexample showing that two parallel lines are not enough for the test.',
    'In a cube, prove ' + m('BD ⊥ AA₁C₁C') + ' and deduce ' + m('BD ⊥ AC₁') + '.'
  ]
});

/* ============================== 19 ============================== */
G10_GEO.push({
  id: 'g10-19', stream: 'geo', grade: 10, quarter: 3, lessons: '35–37', hours: 3,
  title: 'The perpendicular, the oblique line and distance in space',
  subtitle: 'Three lessons on the shortest segment — and the three theorems that compare obliques with it.',
  uz: 'Geometry 10, §15', uzPage: 'pp. 159–176',
  cam: 'Extension', camPage: 'Core & Extended, pp. 329–334', wb: 'Exercise 15.1',
  objectives: [
    'Distinguish the perpendicular, an oblique line and its projection.',
    'Prove that the perpendicular is the shortest segment to a plane.',
    'Compare obliques by their projections.',
    'Compute distances from a point to a plane and between parallel planes.'
  ],
  terms: [
    ['Perpendicular', 'Perpendikulyar', 'Перпендикуляр'],
    ['Oblique line', 'Og‘ma', 'Наклонная'],
    ['Projection of an oblique', 'Og‘ma proyeksiyasi', 'Проекция наклонной'],
    ['Foot of the perpendicular', 'Perpendikulyar asosi', 'Основание перпендикуляра'],
    ['Distance from a point to a plane', 'Nuqtadan tekislikkacha masofa', 'Расстояние от точки до плоскости'],
    ['Distance between parallel planes', 'Parallel tekisliklar orasidagi masofa', 'Расстояние между плоскостями'],
    ['Shortest segment', 'Eng qisqa kesma', 'Кратчайший отрезок'],
    ['Equal obliques', 'Teng og‘malar', 'Равные наклонные'],
    ['Angle with the plane', 'Tekislik bilan burchak', 'Угол с плоскостью']
  ],
  timing: [[16, 'Three objects, one picture'], [26, 'The shortest segment'], [26, 'Comparing obliques'], [30, 'Distances'], [30, 'Practice'], [12, 'Homework']],
  sections: [
    {
      h: 'Three objects, one picture',
      html: `<p>From a point ${m('A')} not in a plane ${m('α')}, drop the <b>perpendicular</b> ${m('AO')}.
      Any other segment ${m('AB')} from ${m('A')} to the plane is an <b>oblique</b>, and ${m('OB')} is
      its <b>projection</b>.</p>
      {{fig:threePerp:The perpendicular, the oblique and the projection form a right triangle in a vertical plane.}}
      <div class="keybox"><div class="klabel">The right triangle</div>
      ${m('△AOB')} always has its right angle at ${m('O')}, because ${m('AO ⊥ α')} and ${m('OB ⊂ α')}.
      So ${m('AB² = AO² + OB²')} — Pythagoras — and every theorem below is a consequence.</div>`
    },
    {
      h: 'The shortest segment',
      html: `<p><b>Theorem 1.</b> The perpendicular is shorter than any oblique from the same point.</p>
      <p><i>Proof.</i> ${m('AB² = AO² + OB² > AO²')} whenever ${m('OB > 0')}. ∎</p>
      <div class="keybox"><div class="klabel">Definition of distance</div>
      The <b>distance from a point to a plane</b> is the length of the perpendicular. Theorem 1 is what
      makes that definition sensible: it is genuinely the shortest.</div>
      <p>The same argument, one dimension down, is why the distance from a point to a line in the plane
      is measured along the perpendicular. Nothing new is being asserted — only extended.</p>`
    },
    {
      h: 'Comparing obliques',
      html: `<p><b>Theorem 2.</b> Equal obliques have equal projections, and equal projections give equal
      obliques.</p>
      <p><b>Theorem 3.</b> Of two obliques, the one with the longer projection is longer.</p>
      ${eq(m('OB₁ > OB₂  ⇔  AB₁ > AB₂'), true)}
      <p>Both follow immediately from ${m('AB² = AO² + OB²')}: with ${m('AO')} fixed, ${m('AB')} grows
      exactly as ${m('OB')} does.</p>
      <div class="keybox"><div class="klabel">A useful corollary</div>
      All the obliques of a given length from ${m('A')} land on a <b>circle</b> centred at ${m('O')} —
      because they all have the same projection length. That circle is how a cone meets a plane, and it
      is the reason a regular pyramid's lateral edges are equal.</div>
      <p>The <b>angle between the oblique and the plane</b> is ${m('∠ABO')}, the angle with its own
      projection — and it is the smallest angle ${m('AB')} makes with any line of the plane.</p>`
    },
    {
      h: 'Distances',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Distance</th><th>How it is measured</th></tr></thead>
      <tbody>
        <tr><td>point to plane</td><td>the perpendicular from the point</td></tr>
        <tr><td>line parallel to a plane, to that plane</td><td>from any point of the line — it is constant</td></tr>
        <tr><td>between parallel planes</td><td>from any point of one to the other</td></tr>
        <tr><td>between skew lines</td><td>the common perpendicular (Quarter II)</td></tr>
      </tbody></table></div>
      <p><b>Example.</b> In a cube of edge ${m('a')}, the distance from ${m('A')} to the plane
      ${m('A₁B₁C₁D₁')} is ${m('a')}; from ${m('A')} to the plane ${m('BDD₁B₁')} is half the diagonal
      ${m('AC')}, that is ${m(f('a' + sr('2'), '2'))}.</p>`
    }
  ],
  examples: [
    {
      q: 'From a point ' + m('10') + ' cm above a plane, two obliques have projections ' + m('6') + ' and ' + m('8') + ' cm. Find their lengths.',
      steps: [
        [m('AB₁ = ' + sr('100 + 36') + ' = ' + sr('136') + ' ≈ 11.66'), ''],
        [m('AB₂ = ' + sr('100 + 64') + ' = ' + sr('164') + ' ≈ 12.81'), ''],
        ['The longer projection gives the longer oblique ✓', '']
      ],
      ans: m('≈ 11.7') + ' and ' + m('≈ 12.8') + ' cm'
    },
    {
      q: 'An oblique of length ' + m('13') + ' makes ' + m('30°') + ' with the plane. Find the perpendicular and the projection.',
      steps: [
        ['The angle is ' + m('∠ABO') + '.', ''],
        [m('AO = 13 sin 30° = 6.5'), ''],
        [m('OB = 13 cos 30° ≈ 11.26'), '']
      ],
      ans: m('AO = 6.5') + ', ' + m('OB ≈ 11.3')
    },
    {
      q: 'Cube of edge ' + m('6') + '. Find the distance from ' + m('A') + ' to the plane ' + m('BDD₁B₁') + '.',
      steps: [
        [m('AC ⊥ BD') + ' and ' + m('AC ⊥ BB₁') + '.', 'So ' + m('AC ⊥ BDD₁B₁') + '.'],
        ['The foot is the centre of the base.', ''],
        [m('AC = 6' + sr('2')) + ', half is ' + m('3' + sr('2')) + '.', '']
      ],
      ans: m('3' + sr('2')) + ' ≈ ' + m('4.24')
    }
  ],
  modelNote: 'Hold a stick to the table and rotate it — the shadow lengthens exactly as the stick does.',
  interactive: {
    type: 'space3d',
    title: 'Perpendicular and oblique',
    hint: 'Move the foot and watch the oblique lengthen with its projection.'
  },
  quiz: [
    { q: 'The distance from a point to a plane is measured along:', a: ['any segment', 'the perpendicular', 'the oblique', 'the projection'], c: 1, why: 'It is the shortest.' },
    { q: m('AB² ') + ' equals:', a: [m('AO² − OB²'), m('AO² + OB²'), m('AO · OB'), m('AO + OB')], c: 1, why: 'The right angle is at ' + m('O') + '.' },
    { q: 'Equal obliques have:', a: ['equal projections', 'unequal projections', 'no projection', 'equal angles only'], c: 0, why: 'Theorem 2.' },
    { q: 'The longer projection belongs to:', a: ['the shorter oblique', 'the longer oblique', 'the perpendicular', 'neither'], c: 1, why: 'Theorem 3.' },
    { q: 'The angle between an oblique and a plane is measured to:', a: ['any line of the plane', 'its projection', 'the normal', 'the edge'], c: 1, why: 'That is the smallest such angle.' }
  ],
  practice: {
    easy: [
      ['Perpendicular 3, projection 4: the oblique', m('5')],
      ['Perpendicular 5, projection 12: the oblique', m('13')],
      ['Oblique 10, perpendicular 6: the projection', m('8')],
      ['Oblique 25, projection 24: the perpendicular', m('7')],
      ['Distance from a point to a plane is measured along', 'the perpendicular'],
      ['Equal projections give', 'equal obliques'],
      ['Distance from ' + m('A') + ' to ' + m('A₁B₁C₁D₁') + ' in a cube of edge 6', m('6')]
    ],
    med: [
      ['Point 10 above; projections 6 and 8: the obliques', m(sr('136')) + ' and ' + m(sr('164'))],
      ['Oblique 13 at ' + m('30°') + ': perpendicular and projection', m('6.5') + ', ' + m('≈ 11.3')],
      ['Oblique 20 at ' + m('60°') + ': perpendicular', m('10' + sr('3')) + ' ≈ ' + m('17.3')],
      ['Cube edge 6: distance from ' + m('A') + ' to ' + m('BDD₁B₁'), m('3' + sr('2'))],
      ['Perpendicular 8, oblique 17: the projection', m('15')],
      ['Two obliques 15 and 17 with perpendicular 9: the projections', m('12') + ' and ' + m(sr('208'))],
      ['Angle of an oblique with perpendicular 6 and projection 8', m('≈ 36.9°')]
    ],
    hard: [
      ['Cube edge ' + m('a') + ': distance from ' + m('A') + ' to the plane ' + m('A₁BD'), m(f('a' + sr('3'), '3'))],
      ['Cube edge 6: distance from ' + m('B') + ' to the plane ' + m('ACC₁A₁'), m('3' + sr('2'))],
      ['A point is 12 from a plane; an oblique makes ' + m('40°') + '. Find it', m('≈ 18.7')],
      ['Three equal obliques from ' + m('A') + ': what is the foot of the perpendicular?', 'The circumcentre of the three feet'],
      ['A regular pyramid: prove the lateral edges are equal', 'Equal projections — the base circumradius'],
      ['Distance between the parallel planes ' + m('ABCD') + ' and ' + m('A₁B₁C₁D₁') + ' in a cube of edge 9', m('9')],
      ['Prove that the angle with the projection is the smallest angle with any line of the plane', 'Compare cosines in the right triangles']
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Draw the right triangle ' + m('AOB') + ' separately for every question.',
  homework: [
    'From a point ' + m('8') + ' cm above a plane, two obliques have projections ' + m('6') + ' and ' + m('15') + ' cm. Find both lengths.',
    'An oblique of ' + m('26') + ' cm makes ' + m('30°') + ' with a plane. Find the perpendicular and the projection.',
    'Cube of edge ' + m('8') + ': find the distance from ' + m('A') + ' to the plane ' + m('BDD₁B₁') + '.',
    'A perpendicular is ' + m('9') + ' and an oblique is ' + m('41') + '. Find the projection and the angle with the plane.',
    'Prove that the perpendicular is shorter than every oblique from the same point.',
    'Explain why the lateral edges of a regular pyramid are equal.'
  ]
});

/* ============================== 20 ============================== */
G10_GEO.push({
  id: 'g10-20', stream: 'geo', grade: 10, quarter: 3, lessons: '38–39', hours: 2,
  title: 'The theorem of the three perpendiculars',
  subtitle: 'One theorem that turns every “is this angle right?” question in space into a question about a shadow.',
  uz: 'Geometry 10, §16', uzPage: 'pp. 177–188',
  cam: 'Extension', camPage: 'Core & Extended, pp. 335–338', wb: 'Exercise 16.1',
  objectives: [
    'State the theorem of the three perpendiculars and its converse.',
    'Apply it to prove perpendicularity in a solid.',
    'Use it to find the distance from a point to a line in space.',
    'Recognise the three perpendiculars in a given figure.'
  ],
  terms: [
    ['Theorem of the three perpendiculars', 'Uch perpendikulyar haqidagi teorema', 'Теорема о трёх перпендикулярах'],
    ['Oblique line', 'Og‘ma', 'Наклонная'],
    ['Projection', 'Proyeksiya', 'Проекция'],
    ['Converse theorem', 'Teskari teorema', 'Обратная теорема'],
    ['Line in the plane', 'Tekislikdagi chiziq', 'Прямая в плоскости'],
    ['Foot of the perpendicular', 'Perpendikulyar asosi', 'Основание перпендикуляра'],
    ['Distance to a line', 'Chiziqqacha masofa', 'Расстояние до прямой'],
    ['Necessary and sufficient', 'Zarur va yetarli', 'Необходимо и достаточно']
  ],
  timing: [[14, 'The statement'], [22, 'The proof'], [24, 'Applications'], [22, 'Distance to a line'], [16, 'Practice'], [8, 'Homework']],
  sections: [
    {
      h: 'The statement',
      html: `<div class="keybox"><div class="klabel">Theorem of the three perpendiculars</div>
      Let ${m('AO ⊥ α')} with foot ${m('O')}, let ${m('AB')} be an oblique with projection ${m('OB')},
      and let ${m('c')} be a line in ${m('α')} passing through ${m('B')}. Then
      ${eq(m('c ⊥ AB   ⇔   c ⊥ OB'), true)}</div>
      {{fig:threePerp:AO is the perpendicular, AB the oblique, OB its projection. A line of the plane is ⊥ to one exactly when it is ⊥ to the other.}}
      <p>The three perpendiculars of the name are ${m('AO ⊥ α')}, ${m('c ⊥ OB')} and ${m('c ⊥ AB')} —
      any two give the third.</p>`
    },
    {
      h: 'The proof',
      html: `<p><i>Forward direction.</i> Suppose ${m('c ⊥ OB')}. Since ${m('AO ⊥ α')} and
      ${m('c ⊂ α')}, also ${m('c ⊥ AO')}. So ${m('c')} is perpendicular to two intersecting lines
      ${m('OB')} and ${m('AO')} of the plane ${m('AOB')}. By the test of Lesson 33–34,
      ${m('c ⊥ AOB')}, and therefore ${m('c ⊥ AB')}, since ${m('AB ⊂ AOB')}. ∎</p>
      <p><i>Converse.</i> The same argument with ${m('AB')} and ${m('AO')} in place of ${m('OB')} and
      ${m('AO')}. ∎</p>
      <div class="keybox"><div class="klabel">The pattern to remember</div>
      Prove perpendicularity to a <b>plane</b>, then read off perpendicularity to any line in it. Almost
      every space perpendicularity proof in this course has that shape.</div>`
    },
    {
      h: 'Applications',
      html: `<p><b>In a cube.</b> Is ${m('AC₁ ⊥ BD')}? Project ${m('AC₁')} onto the base: its projection
      is ${m('AC')}. Since ${m('BD ⊥ AC')} (diagonals of a square) and ${m('BD ⊂ ABCD')}, the theorem
      gives ${m('BD ⊥ AC₁')} at once — no coordinates, no vectors, two lines of work.</p>
      <p><b>In a pyramid.</b> A regular square pyramid ${m('SABCD')} with centre ${m('O')}. Is
      ${m('SM ⊥ AB')}, where ${m('M')} is the midpoint of ${m('AB')}? The projection of ${m('SM')} is
      ${m('OM')}, which is perpendicular to ${m('AB')} by symmetry. So yes — and ${m('SM')} is the slant
      height.</p>
      <div class="warn"><span class="wl">The line must lie in the plane and pass through the foot</span>
      ${m('c')} must be in ${m('α')} and meet ${m('OB')} at ${m('B')}. A line of the plane not through
      ${m('B')} is not covered by the theorem — translate it first.</div>`
    },
    {
      h: 'The distance from a point to a line in space',
      html: `<p>To find the distance from ${m('A')} to a line ${m('c')} lying in a plane ${m('α')},
      when ${m('AO ⊥ α')}:</p>
      <ol>
        <li>Drop ${m('OB ⊥ c')} inside the plane — an ordinary plane construction.</li>
        <li>By the theorem, ${m('AB ⊥ c')} too.</li>
        <li>So ${m('AB')} is the required distance, and ${m('AB = ' + sr('AO² + OB²'))}.</li>
      </ol>
      <p><b>Example.</b> ${m('A')} is ${m('12')} above the plane; the foot ${m('O')} is ${m('5')} from the
      line ${m('c')}. Then the distance from ${m('A')} to ${m('c')} is ${m(sr('144 + 25') + ' = 13')}.</p>`
    }
  ],
  examples: [
    {
      q: 'In a cube, prove ' + m('AC₁ ⊥ BD') + '.',
      steps: [
        [m('CC₁ ⊥ ABCD') + ', so ' + m('AC') + ' is the projection of ' + m('AC₁') + '.', ''],
        [m('BD ⊥ AC'), 'Diagonals of a square.'],
        [m('BD ⊂ ABCD') + ' and passes through the foot.', ''],
        ['By the theorem of the three perpendiculars.', '']
      ],
      ans: m('AC₁ ⊥ BD')
    },
    {
      q: m('A') + ' is ' + m('12') + ' cm above a plane, and its foot ' + m('O') + ' is ' + m('5') + ' cm from a line ' + m('c') + ' in the plane. Find the distance from ' + m('A') + ' to ' + m('c') + '.',
      steps: [
        ['Drop ' + m('OB ⊥ c') + ' in the plane; ' + m('OB = 5') + '.', ''],
        ['By the theorem, ' + m('AB ⊥ c') + '.', ''],
        [m('AB = ' + sr('144 + 25') + ' = 13'), '']
      ],
      ans: m('13') + ' cm'
    },
    {
      q: 'A regular square pyramid has base edge ' + m('10') + ' and height ' + m('12') + '. Find the slant height.',
      steps: [
        [m('OM = 5') + ', the apothem of the base.', ''],
        [m('SO ⊥ ABCD') + ', so ' + m('OM') + ' is the projection of ' + m('SM') + '.', ''],
        [m('OM ⊥ AB') + ', so ' + m('SM ⊥ AB') + '.', 'It is the slant height.'],
        [m('SM = ' + sr('144 + 25') + ' = 13'), '']
      ],
      ans: m('13')
    }
  ],
  modelNote: 'Point at the three perpendiculars on a real box before any calculation.',
  interactive: {
    type: 'space3d',
    title: 'The three perpendiculars',
    hint: 'Move the foot and watch which perpendicularities survive.'
  },
  quiz: [
    { q: 'The theorem relates:', a: ['two obliques', 'an oblique and its projection', 'two planes', 'two normals'], c: 1, why: 'Through a line of the plane.' },
    { q: 'The line ' + m('c') + ' must:', a: ['be anywhere', 'lie in the plane through the foot of the oblique', 'be perpendicular to the plane', 'be parallel to ' + m('AO')], c: 1, why: 'Both conditions matter.' },
    { q: 'In a cube ' + m('AC₁ ⊥ BD') + ' because:', a: [m('AC ⊥ BD'), m('AA₁ ⊥ BD'), 'both', 'neither'], c: 2, why: 'The projection is ' + m('AC') + '.' },
    { q: 'If ' + m('AO = 12') + ' and ' + m('OB = 5') + ' then ' + m('AB') + ':', a: [m('7'), m('13'), m('17'), m('60')], c: 1, why: 'Pythagoras.' },
    { q: 'The theorem lets you replace a 3-D question with:', a: ['a 2-D question in the plane', 'a calculation', 'a guess', 'nothing'], c: 0, why: 'Perpendicularity to the projection.' }
  ],
  practice: {
    easy: [
      ['State the theorem of the three perpendiculars', m('c ⊥ AB ⇔ c ⊥ OB')],
      [m('AO = 3, OB = 4') + '; find ' + m('AB'), m('5')],
      [m('AO = 12, OB = 5') + '; find ' + m('AB'), m('13')],
      [m('AB = 25, OB = 24') + '; find ' + m('AO'), m('7')],
      ['Is ' + m('AC₁ ⊥ BD') + ' in a cube?', 'yes'],
      ['The projection of ' + m('AC₁') + ' on the base', m('AC')],
      ['Where must ' + m('c') + ' lie?', 'in the plane, through ' + m('B')]
    ],
    med: [
      ['Prove ' + m('AC₁ ⊥ BD') + ' in a cube', 'Three perpendiculars, with projection ' + m('AC')],
      [m('A') + ' is 12 above; ' + m('O') + ' is 5 from ' + m('c') + '. Distance to ' + m('c'), m('13')],
      ['Regular pyramid, base 10, height 12: slant height', m('13')],
      ['Regular pyramid, base 16, height 6: slant height', m('10')],
      [m('A') + ' is 8 above; distance to a line 15 from ' + m('O'), m('17')],
      ['In a cube, is ' + m('BD₁ ⊥ AC') + '?', 'yes'],
      ['Prove ' + m('SM ⊥ AB') + ' in a regular pyramid', m('OM ⊥ AB') + ' and the theorem']
    ],
    hard: [
      ['Cube edge ' + m('a') + ': prove ' + m('AC₁ ⊥ BDA₁'), 'Three perpendiculars twice'],
      ['Regular pyramid, base 12, lateral edge 10: the slant height', m('8')],
      ['Same pyramid: the height', m(sr('82')) + ' ≈ ' + m('9.06')],
      ['A point 15 above a plane; two lines in the plane at distances 8 and 20 from ' + m('O') + '. Distances from ' + m('A'), m('17') + ' and ' + m('25')],
      ['Prove the converse of the theorem', 'Same argument with ' + m('AB') + ' in place of ' + m('OB')],
      ['In a cube, find the distance from ' + m('A') + ' to the line ' + m('B₁C₁') + ' for edge 6', m('6' + sr('2'))],
      ['Why must ' + m('c') + ' pass through ' + m('B') + '?', 'Otherwise it is not in the plane ' + m('AOB')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Name the perpendicular, the oblique and the projection in every solution.',
  homework: [
    'State the theorem of the three perpendiculars and prove the forward direction.',
    'In a cube, prove ' + m('BD₁ ⊥ AC') + '.',
    m('A') + ' is ' + m('9') + ' cm above a plane and its foot is ' + m('12') + ' cm from a line ' + m('c') + '. Find the distance from ' + m('A') + ' to ' + m('c') + '.',
    'A regular square pyramid has base edge ' + m('14') + ' and height ' + m('24') + '. Find the slant height and the lateral edge.',
    'Explain in three sentences why the theorem reduces a space question to a plane one.'
  ]
});

/* ============================== 21 ============================== */
G10_GEO.push({
  id: 'g10-21', stream: 'geo', grade: 10, quarter: 3, lessons: '40–42', hours: 3,
  title: 'Perpendicularity of planes',
  subtitle: 'The dihedral angle, its linear angle, and the test that makes two planes perpendicular.',
  uz: 'Geometry 10, §17', uzPage: 'pp. 189–206',
  cam: 'Extension', camPage: 'Core & Extended, pp. 339–344', wb: 'Exercise 17.1',
  objectives: [
    'Define a dihedral angle and construct its linear angle.',
    'State and apply the test for perpendicularity of two planes.',
    'Compute a dihedral angle in a cube and in a pyramid.',
    'Use the properties of perpendicular planes in proofs.'
  ],
  terms: [
    ['Dihedral angle', 'Ikki yoqli burchak', 'Двугранный угол'],
    ['Edge of a dihedral angle', 'Ikki yoqli burchak qirrasi', 'Ребро двугранного угла'],
    ['Face (half-plane)', 'Yoq', 'Грань'],
    ['Linear angle', 'Chiziqli burchak', 'Линейный угол'],
    ['Perpendicular planes', 'Perpendikulyar tekisliklar', 'Перпендикулярные плоскости'],
    ['Test for perpendicular planes', 'Tekisliklar perpendikulyarligi alomati', 'Признак перпендикулярности плоскостей'],
    ['Right dihedral angle', 'To‘g‘ri ikki yoqli burchak', 'Прямой двугранный угол'],
    ['Bisector plane', 'Bissektor tekislik', 'Биссекторная плоскость']
  ],
  timing: [[16, 'The dihedral angle'], [26, 'The linear angle'], [26, 'The test'], [30, 'Computing dihedral angles'], [30, 'Practice'], [12, 'Homework']],
  sections: [
    {
      h: 'The dihedral angle',
      html: `<p>Two half-planes with a common edge divide space; the figure they form is a <b>dihedral
      angle</b>. Its <b>edge</b> is the common line; its <b>faces</b> are the two half-planes.</p>
      {{fig:dihedralAngle:The edge, the two faces, and the linear angle measured between arms perpendicular to the edge.}}
      <div class="keybox"><div class="klabel">The linear angle</div>
      Take any point of the edge and draw, in each face, the ray perpendicular to the edge. The angle
      between those two rays is the <b>linear angle</b>, and it is what the size of the dihedral angle
      means.</div>
      <div class="warn"><span class="wl">Both arms perpendicular to the edge</span>
      Any other pair of rays gives a different, wrong angle. The linear angle does not depend on which
      point of the edge is chosen — but it does depend on both arms being perpendicular to the edge.</div>`
    },
    {
      h: 'The test for perpendicular planes',
      html: `<div class="keybox"><div class="klabel">Definition and test</div>
      Two planes are <b>perpendicular</b> when their dihedral angle is right.
      <b>Test:</b> if a plane contains a line perpendicular to another plane, the two planes are
      perpendicular.</div>
      ${eq(m('ℓ ⊂ β  and  ℓ ⊥ α   ⇒   β ⊥ α'), true)}
      <p>In a cube, ${m('AA₁ ⊥ ABCD')} and ${m('AA₁ ⊂ ABB₁A₁')}, so ${m('ABB₁A₁ ⊥ ABCD')}. Every vertical
      face of a cube is perpendicular to the base, and one line proves it.</p>
      <p>Two useful properties follow:</p>
      <ul>
        <li>If ${m('α ⊥ β')} and a line of ${m('α')} is perpendicular to their common edge, it is
        perpendicular to ${m('β')}.</li>
        <li>If two intersecting planes are each perpendicular to a third, their line of intersection is
        perpendicular to that third plane.</li>
      </ul>`
    },
    {
      h: 'Computing dihedral angles',
      html: `<p>The whole difficulty is the construction of the linear angle. Three reliable routes:</p>
      <ol>
        <li><b>Drop a perpendicular</b> from a point of one face to the other plane, and join its foot to
        a point on the edge.</li>
        <li><b>Use the three perpendiculars theorem</b> to prove the arm you draw really is
        perpendicular to the edge.</li>
        <li><b>Choose the point on the edge conveniently</b> — usually a midpoint, so symmetry gives the
        arms for free.</li>
      </ol>
      <p><b>Example.</b> Cube of edge ${m('a')}: the dihedral angle along ${m('AB')} between the base
      ${m('ABCD')} and the diagonal plane ${m('ABC₁D₁')}. The arms are ${m('AD')} in the base and
      ${m('AD₁')} in the other face, both perpendicular to ${m('AB')}. The angle is
      ${m('∠DAD₁ = 45°')}, since ${m('ADD₁')} is an isosceles right triangle.</p>`
    },
    {
      h: 'In a pyramid',
      html: `<p>For a regular square pyramid with base edge ${m('2b')} and height ${m('h')}, two dihedral
      angles are usually wanted:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Angle</th><th>Arms</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td>lateral face to base</td><td>${m('OM')} and ${m('SM')}</td><td class="m">tan θ = ${f('h', 'b')}</td></tr>
        <tr><td>lateral edge to base</td><td>${m('OA')} and ${m('SA')}</td><td class="m">tan θ = ${f('h', 'b' + sr('2'))}</td></tr>
      </tbody></table></div>
      <p>Base ${m('10')}, height ${m('12')}: the face angle has ${m('tan θ = ' + f('12', '5'))}, so
      ${m('θ ≈ 67.4°')}; the edge angle has ${m('tan θ = ' + f('12', '5' + sr('2')))}, so
      ${m('θ ≈ 59.5°')}. The face is steeper than the edge — as the picture shows.</p>`
    }
  ],
  examples: [
    {
      q: 'Cube of edge ' + m('a') + '. Find the dihedral angle along ' + m('AB') + ' between ' + m('ABCD') + ' and ' + m('ABC₁D₁') + '.',
      steps: [
        [m('AD ⊥ AB') + ' in the base.', ''],
        [m('AD₁ ⊥ AB') + ' in the other face.', m('AB ⊥ ADD₁A₁') + '.'],
        ['The linear angle is ' + m('∠DAD₁') + '.', ''],
        [m('AD = DD₁ = a') + ', so it is ' + m('45°') + '.', '']
      ],
      ans: m('45°')
    },
    {
      q: 'A regular square pyramid has base ' + m('10') + ' and height ' + m('12') + '. Find the dihedral angle between a lateral face and the base.',
      steps: [
        [m('OM = 5') + ', the base apothem.', ''],
        [m('SO = 12') + '.', ''],
        [m('tan θ = ' + f('12', '5') + ' = 2.4'), ''],
        [m('θ ≈ 67.4°'), '']
      ],
      ans: m('≈ 67.4°')
    },
    {
      q: 'Prove that ' + m('ABB₁A₁ ⊥ ABCD') + ' in a cube.',
      steps: [
        [m('AA₁ ⊥ ABCD'), 'By the test of Lesson 33–34.'],
        [m('AA₁ ⊂ ABB₁A₁'), ''],
        ['By the test for perpendicular planes.', '']
      ],
      ans: m('ABB₁A₁ ⊥ ABCD')
    }
  ],
  modelNote: 'Open a book on the desk: the spine is the edge, the pages the faces, and two pencils give the linear angle.',
  interactive: {
    type: 'space3d',
    title: 'A dihedral angle',
    hint: 'Move the point along the edge — the linear angle does not change.'
  },
  quiz: [
    { q: 'A dihedral angle is measured by:', a: ['any angle between the faces', 'its linear angle', 'the edge', 'the normal'], c: 1, why: 'Both arms perpendicular to the edge.' },
    { q: 'The test for perpendicular planes: one contains:', a: ['a parallel line', 'a line perpendicular to the other', 'two points', 'the edge'], c: 1, why: 'One line is enough.' },
    { q: 'In a cube, ' + m('ABB₁A₁') + ' and ' + m('ABCD') + ' are:', a: ['parallel', 'perpendicular', 'at ' + m('45°'), 'skew'], c: 1, why: m('AA₁ ⊥ ABCD') + '.' },
    { q: 'The dihedral angle along ' + m('AB') + ' between ' + m('ABCD') + ' and ' + m('ABC₁D₁') + ' is:', a: [m('30°'), m('45°'), m('60°'), m('90°')], c: 1, why: 'An isosceles right triangle.' },
    { q: 'Pyramid base 10, height 12: face-to-base angle:', a: [m('50.2°'), m('59.5°'), m('67.4°'), m('45°')], c: 2, why: m('tan θ = 2.4') + '.' }
  ],
  practice: {
    easy: [
      ['What is the edge of a dihedral angle?', 'the common line of the two faces'],
      ['How is a dihedral angle measured?', 'by its linear angle'],
      ['Both arms must be ⊥ to', 'the edge'],
      ['State the test for perpendicular planes', 'one contains a line ⊥ to the other'],
      ['Is ' + m('ABB₁A₁ ⊥ ABCD') + ' in a cube?', 'yes'],
      ['Is ' + m('ABCD ⊥ A₁B₁C₁D₁') + '?', 'no — they are parallel'],
      ['Dihedral angle along ' + m('AB') + ' to ' + m('ABC₁D₁'), m('45°')]
    ],
    med: [
      ['Pyramid base 10, height 12: face-to-base angle', m('≈ 67.4°')],
      ['Same: edge-to-base angle', m('≈ 59.5°')],
      ['Pyramid base 8, height 3: face-to-base angle', m('≈ 36.9°')],
      ['Cube: dihedral angle along ' + m('AB') + ' between ' + m('ABCD') + ' and ' + m('ABB₁A₁'), m('90°')],
      ['Cube: dihedral angle between ' + m('ABCD') + ' and ' + m('ACC₁A₁'), m('90°')],
      ['Prove ' + m('BCC₁B₁ ⊥ ABCD'), m('BB₁ ⊥ ABCD') + ' and lies in it'],
      ['Regular tetrahedron: angle between a face and the base', m('≈ 70.5°')]
    ],
    hard: [
      ['Cube edge ' + m('a') + ': dihedral angle along ' + m('AC') + ' between ' + m('ABCD') + ' and ' + m('ACD₁'), m('≈ 54.7°')],
      ['Pyramid base 12, lateral edge 10: dihedral angle of a face with the base', m('≈ 43.3°')],
      ['Prove: if two planes are each ⊥ to a third, their line of intersection is ⊥ to it', 'It is ⊥ to both edges'],
      ['A regular tetrahedron of edge ' + m('a') + ': the dihedral angle between two faces', m('arccos ' + f('1', '3')) + ' ≈ ' + m('70.5°')],
      ['Cube: the angle between the planes ' + m('ABC₁D₁') + ' and ' + m('A₁B₁CD'), m('90°')],
      ['A prism whose base is a rhombus with a ' + m('60°') + ' angle: the dihedral angles along the base edges', m('90°') + ' for a right prism'],
      ['Prove that a plane ⊥ to the edge of a dihedral angle cuts it in its linear angle', 'Both cuts are ⊥ to the edge']
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Every dihedral answer must name the two arms and say why each is perpendicular to the edge.',
  homework: [
    'Define a dihedral angle and explain how its linear angle is constructed.',
    'Prove that ' + m('DCC₁D₁ ⊥ ABCD') + ' in a cube.',
    'Cube of edge ' + m('a') + ': find the dihedral angle along ' + m('AB') + ' between ' + m('ABCD') + ' and ' + m('ABC₁D₁') + '.',
    'A regular square pyramid has base edge ' + m('16') + ' and height ' + m('6') + '. Find the dihedral angle between a lateral face and the base.',
    'The same pyramid: find the angle between a lateral edge and the base.',
    'Prove that if two intersecting planes are each perpendicular to a third, their line of intersection is perpendicular to it.'
  ]
});

/* ============================== 22 ============================== */
G10_GEO.push({
  id: 'g10-22', stream: 'geo', grade: 10, quarter: 3, lessons: '43–44', hours: 2,
  title: 'Control work 3, and work on the mistakes',
  subtitle: 'Perpendicularity in space in one paper — where naming the two intersecting lines is worth as much as the answer.',
  uz: 'Geometry 10, Nazorat ishi 3', uzPage: 'pp. 207–210',
  cam: 'IGCSE review', camPage: 'Core & Extended, pp. 345–346', wb: 'Control paper G3',
  objectives: [
    'Apply the perpendicularity theorems under time.',
    'Quote a test by name and verify its conditions.',
    'Classify each lost mark and rewrite the solution.',
    'Consolidate the three perpendiculars theorem.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Test (criterion)', 'Alomat', 'Признак'],
    ['Three perpendiculars', 'Uch perpendikulyar', 'Три перпендикуляра'],
    ['Dihedral angle', 'Ikki yoqli burchak', 'Двугранный угол'],
    ['Linear angle', 'Chiziqli burchak', 'Линейный угол'],
    ['Justification', 'Asoslash', 'Обоснование'],
    ['Careless error', 'E’tiborsizlik xatosi', 'Ошибка по невнимательности'],
    ['Correction', 'Tuzatish', 'Исправление']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [12, 'Answers'], [23, 'Rewrite'], [12, 'The test drill']],
  sections: [
    {
      h: 'The paper — 25 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Prove ${m('DD₁ ⊥ AC')} in a cube, quoting the test</td><td class="m">4</td><td>L33–34</td></tr>
        <tr><td>2</td><td>A point is ${m('9')} above a plane; two obliques have projections ${m('12')} and ${m('40')}. Find both</td><td class="m">4</td><td>L35–37</td></tr>
        <tr><td>3</td><td>An oblique of ${m('20')} makes ${m('30°')} with the plane. Find the perpendicular and the projection</td><td class="m">4</td><td>L35–37</td></tr>
        <tr><td>4</td><td>Prove ${m('AC₁ ⊥ BD')} in a cube by the three perpendiculars</td><td class="m">5</td><td>L38–39</td></tr>
        <tr><td>5</td><td>A regular pyramid, base ${m('10')}, height ${m('12')}: find the slant height and the face-to-base dihedral angle</td><td class="m">5</td><td>L38–42</td></tr>
        <tr><td>6</td><td>Cube of edge ${m('6')}: find the distance from ${m('A')} to the plane ${m('BDD₁B₁')}</td><td class="m">3</td><td>L35–37</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Three marks for naming</div>
      Q1 gives one mark for naming the two intersecting lines, Q4 one for identifying the projection,
      Q5 one for saying why the arm is perpendicular to the edge. Three of twenty-five.</div>`
    },
    {
      h: 'The three errors',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Error</th><th>Looks like</th><th>Kind</th></tr></thead>
      <tbody>
        <tr><td>parallel lines used in the test</td><td>“${m('AA₁ ⊥ AB')} and ${m('AA₁ ⊥ D₁C₁')}, so ${m('AA₁ ⊥ ABCD')}”</td><td>knowledge</td></tr>
        <tr><td>wrong projection</td><td>the projection of ${m('AC₁')} given as ${m('AB')}</td><td>method</td></tr>
        <tr><td>arm not ⊥ to the edge</td><td>a dihedral angle measured between any two rays</td><td>method</td></tr>
        <tr><td>slant height and lateral edge confused</td><td>${m('OM')} used where ${m('OA')} was needed</td><td>careless</td></tr>
      </tbody></table></div>
      {{fig:threePerp:Questions 4 and 5 in one picture.}}`
    },
    {
      h: 'The test drill',
      html: `<p>Eight statements on the board. For each, the class names the <b>test or theorem</b> that
      settles it, in three seconds:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>Tool</th></tr></thead>
      <tbody>
        <tr><td class="m">AA₁ ⊥ ABCD</td><td>test for line ⊥ plane</td></tr>
        <tr><td class="m">AC₁ ⊥ BD</td><td>three perpendiculars</td></tr>
        <tr><td class="m">ABB₁A₁ ⊥ ABCD</td><td>test for perpendicular planes</td></tr>
        <tr><td>${m('SM ⊥ AB')} in a pyramid</td><td>three perpendiculars</td></tr>
        <tr><td>the shortest segment to a plane</td><td>the perpendicular</td></tr>
      </tbody></table></div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q4: prove ' + m('AC₁ ⊥ BD') + ' in a cube.',
      steps: [
        [m('CC₁ ⊥ ABCD'), 'So ' + m('AC') + ' is the projection of ' + m('AC₁') + '.'],
        [m('BD ⊥ AC'), 'Diagonals of a square.'],
        [m('BD ⊂ ABCD') + ' through the foot ' + m('C') + '.', ''],
        ['Three perpendiculars.', '']
      ],
      ans: m('AC₁ ⊥ BD')
    },
    {
      q: 'Model answer, Q5: pyramid base ' + m('10') + ', height ' + m('12') + '.',
      steps: [
        [m('OM = 5'), 'Half the base edge.'],
        [m('SM = ' + sr('144 + 25') + ' = 13'), 'The slant height.'],
        [m('OM ⊥ AB') + ', and ' + m('SM ⊥ AB') + ' by the theorem.', 'The linear angle is ' + m('∠SMO') + '.'],
        [m('tan θ = ' + f('12', '5') + ' ⇒ θ ≈ 67.4°'), '']
      ],
      ans: m('SM = 13') + '; ' + m('θ ≈ 67.4°')
    },
    {
      q: 'A learner used ' + m('AA₁ ⊥ AB') + ' and ' + m('AA₁ ⊥ D₁C₁') + ' to conclude ' + m('AA₁ ⊥ ABCD') + '. Name the mistake.',
      steps: [
        [m('D₁C₁') + ' does not lie in ' + m('ABCD') + '.', ''],
        ['And it is parallel to ' + m('AB') + ', not intersecting.', 'Two failures at once.'],
        ['Correct: use ' + m('AB') + ' and ' + m('AD') + '.', '']
      ],
      ans: 'The two lines must lie in the plane and intersect'
    }
  ],
  modelNote: 'Run the test drill before the rewrite, holding a real box.',
  interactive: {
    type: 'quiz',
    title: 'Name the tool',
    hint: 'Test, theorem, or definition?',
    items: [
      { q: 'To prove ' + m('AA₁ ⊥ ABCD') + ' use:', a: ['three perpendiculars', 'the test for line ⊥ plane', 'the definition', 'Pythagoras'], c: 1, why: 'Two intersecting lines.' },
      { q: 'To prove ' + m('AC₁ ⊥ BD') + ' use:', a: ['three perpendiculars', 'the test for planes', 'the definition', 'measurement'], c: 0, why: 'The projection is ' + m('AC') + '.' },
      { q: 'Perpendicular 9, projection 12: the oblique is:', a: [m('15'), m('21'), m('3'), m('108')], c: 0, why: 'Pythagoras.' },
      { q: 'Oblique 20 at ' + m('30°') + ': the perpendicular is:', a: [m('10'), m('10' + sr('3')), m('20'), m('40')], c: 0, why: m('20 sin 30°') + '.' },
      { q: 'Pyramid base 10, height 12: the slant height is:', a: [m('12'), m('13'), m('15'), m('5')], c: 1, why: m(sr('144 + 25')) + '.' },
      { q: 'Cube edge 6: distance from ' + m('A') + ' to ' + m('BDD₁B₁') + ':', a: [m('6'), m('3' + sr('2')), m('6' + sr('2')), m('3')], c: 1, why: 'Half the base diagonal.' }
    ]
  },
  quiz: [
    { q: 'The test for a line ⊥ a plane needs:', a: ['one line', 'two intersecting lines of the plane', 'two parallel lines', 'three points'], c: 1, why: 'Two directions.' },
    { q: 'The three perpendiculars theorem relates:', a: ['two planes', 'an oblique and its projection', 'two obliques', 'two normals'], c: 1, why: 'Through a line of the plane.' },
    { q: 'A dihedral angle’s arms must be ⊥ to:', a: ['each other', 'the edge', 'the base', 'the normal'], c: 1, why: 'That defines the linear angle.' },
    { q: 'The shortest segment from a point to a plane is:', a: ['any oblique', 'the perpendicular', 'the projection', 'the diagonal'], c: 1, why: 'By Pythagoras.' }
  ],
  practice: {
    easy: [
      ['Prove ' + m('DD₁ ⊥ AC'), m('DD₁ ⊥ ABCD') + ' and ' + m('AC ⊂ ABCD')],
      ['Perpendicular 9, projection 12: the oblique', m('15')],
      ['Perpendicular 9, projection 40: the oblique', m('41')],
      ['Oblique 20 at ' + m('30°') + ': the perpendicular', m('10')],
      ['Same: the projection', m('10' + sr('3'))],
      ['Pyramid base 10, height 12: slant height', m('13')],
      ['Cube edge 6: distance from ' + m('A') + ' to ' + m('BDD₁B₁'), m('3' + sr('2'))]
    ],
    med: [
      ['Prove ' + m('AC₁ ⊥ BD') + ' by the three perpendiculars', 'Projection ' + m('AC') + ', and ' + m('BD ⊥ AC')],
      ['Pyramid base 10, height 12: face-to-base angle', m('≈ 67.4°')],
      ['Pyramid base 10, height 12: lateral edge', m(sr('194')) + ' ≈ ' + m('13.9')],
      ['Cube edge 6: distance from ' + m('A') + ' to ' + m('A₁BD'), m('2' + sr('3'))],
      ['Oblique 25, projection 24: the perpendicular', m('7')],
      ['Prove ' + m('BCC₁B₁ ⊥ ABCD'), m('BB₁ ⊥ ABCD') + ' lies in it'],
      ['Cube: angle of ' + m('AC₁') + ' with the base', m('≈ 35.26°')]
    ],
    hard: [
      ['Cube edge ' + m('a') + ': distance from ' + m('A') + ' to the plane ' + m('A₁BD'), m(f('a' + sr('3'), '3'))],
      ['Pyramid base 12, lateral edge 10: height and both dihedral angles', m(sr('82'))+', ' + m('≈ 56.4°') + ' and ' + m('≈ 46.9°')],
      ['Regular tetrahedron edge ' + m('a') + ': the dihedral angle between faces', m('≈ 70.5°')],
      ['Cube edge 8: distance from ' + m('B') + ' to the line ' + m('A₁D₁'), m('8' + sr('2'))],
      ['A point 15 above a plane, two obliques at ' + m('30°') + ' and ' + m('45°') + ': their lengths', m('30') + ' and ' + m('15' + sr('2'))],
      ['Prove the linear angle is independent of the point chosen on the edge', 'Respectively parallel arms'],
      ['Cube: prove ' + m('AC₁ ⊥ A₁BD'), 'Two of its lines are ⊥ to ' + m('AC₁')]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Task 1 is the rewrite. Name the test on every proof.',
  homework: [
    'Rewrite in full every question that lost a mark, naming the test used.',
    'Five problems from the section your knowledge column was heaviest in.',
    'A regular square pyramid has base edge ' + m('16') + ' and height ' + m('15') + '. Find the slant height, the lateral edge and both dihedral angles.',
    'Cube of edge ' + m('10') + ': find the distance from ' + m('A') + ' to the plane ' + m('A₁BD') + '.'
  ]
});

/* ============================== 23 ============================== */
G10_GEO.push({
  id: 'g10-23', stream: 'geo', grade: 10, quarter: 3, lessons: '45–47', hours: 3,
  title: 'Orthogonal projection and its technical applications',
  subtitle: 'The drawing convention every engineer in the world uses — three views, and the object they determine.',
  uz: 'Geometry 10, §18', uzPage: 'pp. 211–228',
  cam: 'IGCSE E14.1', camPage: 'Core & Extended, pp. 210–216', wb: 'Exercise 18.1',
  objectives: [
    'Distinguish orthogonal from general parallel projection.',
    'Draw the plan, front and side elevations of a solid.',
    'Reconstruct a solid from its three views.',
    'Use the area formula for the orthogonal projection of a plane figure.'
  ],
  terms: [
    ['Orthogonal projection', 'Ortogonal proyeksiya', 'Ортогональная проекция'],
    ['Plan (top view)', 'Yuqoridan ko‘rinish', 'Вид сверху'],
    ['Front elevation', 'Old ko‘rinish', 'Вид спереди'],
    ['Side elevation', 'Yon ko‘rinish', 'Вид сбоку'],
    ['Technical drawing', 'Chizmachilik', 'Черчение'],
    ['Hidden line', 'Ko‘rinmas chiziq', 'Невидимая линия'],
    ['Projection of an area', 'Yuza proyeksiyasi', 'Проекция площади'],
    ['Scale', 'Masshtab', 'Масштаб'],
    ['Isometric drawing', 'Izometrik chizma', 'Изометрия']
  ],
  timing: [[14, 'Orthogonal versus general'], [26, 'The three views'], [30, 'Reconstructing a solid'], [26, 'The area formula'], [30, 'Practice'], [14, 'Homework']],
  sections: [
    {
      h: 'Orthogonal versus general',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      <b>Orthogonal projection</b> is parallel projection in which the direction of projection is
      <b>perpendicular</b> to the plane of projection. Every point drops straight down onto the plane.</div>
      <p>It is the special case that engineers use, because it preserves one thing a general parallel
      projection does not: <b>lengths parallel to the plane of projection are unchanged</b>. A drawing in
      orthogonal projection can therefore be measured — in that direction.</p>
      <p>The projection of a point is the foot of the perpendicular; the projection of a segment is the
      segment between the feet; the projection of an oblique is what Lesson 35–37 called its
      projection.</p>`
    },
    {
      h: 'The three views',
      html: `{{fig:orthoProjection:The plan from above, the front elevation from the front, the side elevation from the side.}}
      <div class="tablewrap"><table>
      <thead><tr><th>View</th><th>Looking</th><th>Shows</th></tr></thead>
      <tbody>
        <tr><td>plan</td><td>from above</td><td>length and width</td></tr>
        <tr><td>front elevation</td><td>from the front</td><td>length and height</td></tr>
        <tr><td>side elevation</td><td>from the side</td><td>width and height</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The conventions</div>
      Views are aligned: the plan sits directly below the front elevation, and the side elevation
      directly beside it, so that matching dimensions line up. Hidden edges are drawn dashed. Every
      view is drawn to the same scale.</div>`
    },
    {
      h: 'Reconstructing a solid',
      html: `<p>Three views normally determine the solid — but not always. Two different solids can share
      all three views if the ambiguity is hidden inside.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Plan</th><th>Front</th><th>Side</th><th>Solid</th></tr></thead>
      <tbody>
        <tr><td>circle</td><td>rectangle</td><td>rectangle</td><td>cylinder, upright</td></tr>
        <tr><td>circle</td><td>triangle</td><td>triangle</td><td>cone</td></tr>
        <tr><td>circle</td><td>circle</td><td>circle</td><td>sphere</td></tr>
        <tr><td>square</td><td>square</td><td>square</td><td>cube</td></tr>
        <tr><td>square</td><td>triangle</td><td>triangle</td><td>square-based pyramid</td></tr>
      </tbody></table></div>
      <p>Reading a set of views is the everyday skill of a workshop; drawing them is the everyday skill
      of a design office. Both are the same theorem applied twice.</p>`
    },
    {
      h: 'The area of a projection',
      html: `<div class="keybox"><div class="klabel">Theorem</div>
      If a plane figure of area ${m('S')} lies in a plane making a dihedral angle ${m('φ')} with the
      plane of projection, its orthogonal projection has area
      ${eq(m("S′ = S · cos φ"), true)}</div>
      <p>Because lengths along the edge are unchanged and lengths perpendicular to it are multiplied by
      ${m('cos φ')}, the area is scaled once.</p>
      <p><b>Example.</b> A square of side ${m('10')} lies in a plane at ${m('60°')} to the horizontal.
      Its shadow on the horizontal has area ${m('100 cos 60° = 50')}.</p>
      <div class="warn"><span class="wl">The angle is the dihedral angle</span>
      Not the angle of a line, and not the angle to the normal. If the figure's plane is at ${m('φ')} to
      the projection plane, the factor is ${m('cos φ')} — and ${m('φ = 90°')} collapses the figure to a
      segment, as it should.</div>`
    }
  ],
  examples: [
    {
      q: 'A solid has a circular plan and rectangular front and side elevations. Name it.',
      steps: [
        ['Circular from above.', ''],
        ['Rectangular from the front and side.', ''],
        ['Constant circular cross-section.', '']
      ],
      ans: 'An upright cylinder'
    },
    {
      q: 'A triangle of area ' + m('48') + ' cm² lies in a plane at ' + m('30°') + ' to the horizontal. Find the area of its plan.',
      steps: [
        [m("S′ = S cos φ"), ''],
        [m('= 48 cos 30°'), ''],
        [m('= 48 × 0.866 ≈ 41.6'), '']
      ],
      ans: m('24' + sr('3')) + ' ≈ ' + m('41.6') + ' cm²'
    },
    {
      q: 'Cube of edge ' + m('6') + '. Find the area of the orthogonal projection of the section ' + m('ABC₁D₁') + ' onto the base.',
      steps: [
        ['The section is a rectangle ' + m('6 × 6' + sr('2')) + ', area ' + m('36' + sr('2')) + '.', ''],
        ['It makes ' + m('45°') + ' with the base.', 'From Lesson 40–42.'],
        [m('36' + sr('2') + ' × cos 45° = 36'), 'The base square itself.']
      ],
      ans: m('36') + ' — the whole base'
    }
  ],
  modelNote: 'Shine a torch straight down on a tilted card and measure the shadow.',
  interactive: {
    type: 'transform',
    title: 'A projection',
    hint: 'Tilt the figure and watch its shadow shrink by ' + m('cos φ') + '.'
  },
  quiz: [
    { q: 'Orthogonal projection has the direction:', a: ['at any angle', 'perpendicular to the plane', 'along the plane', 'at ' + m('45°')], c: 1, why: 'That is the definition.' },
    { q: 'The plan of a solid is the view from:', a: ['the front', 'the side', 'above', 'below'], c: 2, why: 'Looking down.' },
    { q: 'Circle, rectangle, rectangle is:', a: ['a cone', 'a cylinder', 'a sphere', 'a cube'], c: 1, why: 'Constant circular section.' },
    { q: 'A figure of area ' + m('S') + ' at ' + m('φ') + ' projects to:', a: [m('S sin φ'), m('S cos φ'), m('S tan φ'), m('S')], c: 1, why: 'One direction is scaled.' },
    { q: 'A square of side 10 at ' + m('60°') + ' projects to area:', a: [m('50'), m('86.6'), m('100'), m('25')], c: 0, why: m('100 cos 60°') + '.' }
  ],
  practice: {
    easy: [
      ['The plan is the view from', 'above'],
      ['The front elevation shows', 'length and height'],
      ['Hidden edges are drawn', 'dashed'],
      ['Circle, circle, circle is', 'a sphere'],
      ['Square, square, square is', 'a cube'],
      ['Circle, triangle, triangle is', 'a cone'],
      [m("S′") + ' for ' + m('S = 20, φ = 60°'), m('10')]
    ],
    med: [
      ['Circle, rectangle, rectangle is', 'an upright cylinder'],
      ['Square, triangle, triangle is', 'a square pyramid'],
      ['Triangle of area 48 at ' + m('30°') + ': its plan', m('24' + sr('3'))],
      ['Square of side 10 at ' + m('45°') + ': its plan area', m('50' + sr('2')) + ' ≈ ' + m('70.7')],
      ['A figure projects to half its area: the angle', m('60°')],
      ['A figure projects to nothing: the angle', m('90°')],
      ['Draw the three views of a cuboid ' + m('4 × 3 × 2'), 'three rectangles: ' + m('4×3, 4×2, 3×2')]
    ],
    hard: [
      ['Cube edge 6: projection of the section ' + m('ABC₁D₁') + ' on the base', m('36')],
      ['Cube edge ' + m('a') + ': projection of the hexagonal midpoint section on the base', m(f('3', '4') + 'a²')],
      ['A circle of radius 5 at ' + m('60°') + ': its plan', 'an ellipse of area ' + m('12.5π')],
      ['A regular hexagon of side 4 at ' + m('45°') + ': its plan area', m('12' + sr('3') + ' × ' + f(sr('2'), '2')) + ' ≈ ' + m('29.4')],
      ['Two different solids with the same three views: give an example', 'A cube, and a cube with an internal cavity'],
      ['Prove ' + m("S′ = S cos φ") + ' for a triangle with a side on the edge', 'The height is scaled by ' + m('cos φ')],
      ['A roof face of ' + m('60') + ' m² at ' + m('35°') + ': its plan area', m('≈ 49.1') + ' m²']
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Draw the three views aligned, to one scale, with hidden edges dashed.',
  homework: [
    'Draw the plan, front and side elevations of a cuboid ' + m('5 × 3 × 2') + '.',
    'Draw the three views of a square-based pyramid and of an upright cylinder.',
    'Name the solid with plan a circle, front a triangle and side a triangle.',
    'A rectangle of area ' + m('72') + ' cm² lies at ' + m('40°') + ' to the horizontal. Find the area of its plan.',
    'Cube of edge ' + m('8') + ': find the area of the projection of the section ' + m('ABC₁D₁') + ' on the base.',
    'Explain in three sentences why an orthogonal projection can be measured but a general parallel projection cannot.'
  ]
});

/* ============================== 24 ============================== */
G10_GEO.push({
  id: 'g10-24', stream: 'geo', grade: 10, quarter: 3, lessons: '48–49', hours: 2,
  title: 'Bearings and angles of elevation in three dimensions',
  subtitle: 'Cambridge insert: navigation and surveying, where the plan view and the vertical triangle are solved separately.',
  uz: 'Geometry 10, §18 (extension)', uzPage: 'pp. 229–234',
  cam: 'IGCSE E14.2 · E6.6', camPage: 'Core & Extended, pp. 217–222, 305–312', wb: 'IGCSE Exercise 14.2',
  objectives: [
    'Measure and use a three-figure bearing.',
    'Find the angle of elevation and depression in a 3-D setting.',
    'Solve a navigation problem by working in the plan first.',
    'Combine the plan triangle with the vertical triangle.'
  ],
  terms: [
    ['Bearing', 'Azimut', 'Азимут'],
    ['Three-figure bearing', 'Uch xonali azimut', 'Трёхзначный азимут'],
    ['Angle of elevation', 'Ko‘tarilish burchagi', 'Угол возвышения'],
    ['Angle of depression', 'Pasayish burchagi', 'Угол понижения'],
    ['Plan view', 'Yuqoridan ko‘rinish', 'Вид сверху'],
    ['Due north', 'Shimolga', 'На север'],
    ['Back bearing', 'Teskari azimut', 'Обратный азимут'],
    ['Line of sight', 'Ko‘rish chizig‘i', 'Линия визирования'],
    ['Surveying', 'Geodeziya', 'Геодезия']
  ],
  timing: [[12, 'Bearings'], [22, 'Elevation and depression'], [26, 'Working in the plan first'], [22, 'Combined problems'], [20, 'Practice'], [8, 'Homework']],
  sections: [
    {
      h: 'Bearings',
      html: `<div class="keybox"><div class="klabel">The convention</div>
      A <b>bearing</b> is measured <b>from north</b>, <b>clockwise</b>, and written with <b>three
      figures</b>: ${m('045°')}, ${m('120°')}, ${m('300°')}. Due east is ${m('090°')}, south
      ${m('180°')}, west ${m('270°')}.</div>
      {{fig:bearings:North at the top, clockwise, always three figures.}}
      <p>The <b>back bearing</b> — the bearing of ${m('A')} from ${m('B')} when the bearing of ${m('B')}
      from ${m('A')} is ${m('θ')} — is ${m('θ + 180°')}, reduced by ${m('360°')} if it exceeds it.</p>
      <div class="warn"><span class="wl">Three figures, always</span>
      ${m('45°')} is written ${m('045°')}. It is not decoration: on a chart a missing leading zero has
      caused real navigational error.</div>`
    },
    {
      h: 'Elevation and depression',
      html: `<p>The <b>angle of elevation</b> of a point is the angle its line of sight makes with the
      horizontal, measured upwards; the <b>angle of depression</b> is the same measured downwards.</p>
      ${eq('angle of depression from ' + m('A') + ' to ' + m('B') + ' = angle of elevation from ' + m('B') + ' to ' + m('A'), true)}
      <p>They are alternate angles between two horizontals — which is why a question may give either
      and expect the other.</p>`
    },
    {
      h: 'Working in the plan first',
      html: `<div class="keybox"><div class="klabel">The method for every 3-D navigation problem</div>
      <b>1</b> Draw the <b>plan</b> — a flat map — and solve it with the sine or cosine rule to find the
      horizontal distance. <b>2</b> Draw the <b>vertical triangle</b> containing that horizontal distance
      and the height. <b>3</b> Solve it with ordinary right-angle trigonometry.</div>
      <p><b>Example.</b> From ${m('A')}, a tower is on a bearing of ${m('070°')} at ${m('300')} m; from
      ${m('B')}, ${m('400')} m due east of ${m('A')}, its bearing is ${m('340°')}. The angle of elevation
      of the top from ${m('A')} is ${m('9°')}. Find its height.</p>
      <p>The plan gives the horizontal distance ${m('AT = 300')} m directly, so the vertical triangle
      gives ${m('h = 300 tan 9° ≈ 47.5')} m. The second bearing is a check.</p>`
    },
    {
      h: 'Combined problems',
      html: `<p>A full surveying problem chains three steps:</p>
      <ol>
        <li>bearings → a plan triangle → the cosine or sine rule → the horizontal distance;</li>
        <li>horizontal distance + angle of elevation → the height;</li>
        <li>height + a second horizontal distance → a second angle.</li>
      </ol>
      <p><b>Example.</b> A mast stands at ${m('C')}. From ${m('A')} its elevation is ${m('12°')}; from
      ${m('B')}, ${m('200')} m from ${m('A')} on a bearing making ${m('50°')} at ${m('C')} with
      ${m('AC')}, its elevation is ${m('18°')}. With ${m('h')} the height,
      ${m('AC = h cot 12°')} and ${m('BC = h cot 18°')}; the cosine rule in the plan then gives one
      equation in ${m('h')} alone.</p>
      <div class="warn"><span class="wl">Never mix the plan and the vertical triangle</span>
      Bearings live in the plan; elevations live in the vertical. Solve one, carry the single number
      across, and solve the other. Trying to do both at once is where every mark is lost.</div>`
    }
  ],
  examples: [
    {
      q: 'The bearing of ' + m('B') + ' from ' + m('A') + ' is ' + m('062°') + '. Find the bearing of ' + m('A') + ' from ' + m('B') + '.',
      steps: [
        [m('62 + 180 = 242'), ''],
        ['Less than ' + m('360°') + ', so no reduction.', '']
      ],
      ans: m('242°')
    },
    {
      q: 'A tower is ' + m('300') + ' m away horizontally; its top has elevation ' + m('9°') + '. Find its height.',
      steps: [
        [m('tan 9° = ' + f('h', '300')), ''],
        [m('h = 300 × 0.1584'), ''],
        [m('≈ 47.5') + ' m.', '']
      ],
      ans: m('≈ 47.5') + ' m'
    },
    {
      q: 'From a cliff ' + m('80') + ' m high, a boat has an angle of depression of ' + m('23°') + '. Find its distance from the foot.',
      steps: [
        ['The angle of elevation from the boat is also ' + m('23°') + '.', ''],
        [m('tan 23° = ' + f('80', 'd')), ''],
        [m('d = ' + f('80', '0.4245') + ' ≈ 188.4') + ' m.', '']
      ],
      ans: m('≈ 188') + ' m'
    }
  ],
  modelNote: 'Draw the plan on one half of the board and the vertical triangle on the other.',
  interactive: {
    type: 'solveTriangle',
    title: 'The plan triangle',
    hint: 'Solve the plan for the horizontal distance first.'
  },
  quiz: [
    { q: 'A bearing is measured from:', a: ['east, anticlockwise', 'north, clockwise', 'north, anticlockwise', 'south, clockwise'], c: 1, why: 'The universal convention.' },
    { q: 'Due west is:', a: [m('090°'), m('180°'), m('270°'), m('360°')], c: 2, why: 'Three quarters clockwise.' },
    { q: 'The back bearing of ' + m('062°') + ' is:', a: [m('118°'), m('242°'), m('298°'), m('062°')], c: 1, why: 'Add ' + m('180°') + '.' },
    { q: 'The angle of depression from ' + m('A') + ' to ' + m('B') + ' equals:', a: ['the elevation from ' + m('B') + ' to ' + m('A'), 'its complement', 'nothing', 'twice it'], c: 0, why: 'Alternate angles.' },
    { q: 'In a 3-D navigation problem, solve first:', a: ['the vertical triangle', 'the plan', 'both at once', 'neither'], c: 1, why: 'It gives the horizontal distance.' }
  ],
  practice: {
    easy: [
      ['Bearing of due east', m('090°')],
      ['Bearing of due south', m('180°')],
      ['Bearing of due west', m('270°')],
      ['Back bearing of ' + m('045°'), m('225°')],
      ['Back bearing of ' + m('300°'), m('120°')],
      ['Height with distance 100, elevation ' + m('30°'), m('≈ 57.7')],
      ['Distance with height 50, depression ' + m('45°'), m('50')]
    ],
    med: [
      ['Back bearing of ' + m('062°'), m('242°')],
      ['Tower 300 m away, elevation ' + m('9°') + ': its height', m('≈ 47.5') + ' m'],
      ['Cliff 80 m, depression ' + m('23°') + ': the distance', m('≈ 188') + ' m'],
      ['A mast of 40 m at 120 m: the angle of elevation', m('≈ 18.4°')],
      ['A plane at 3000 m, depression to the airport ' + m('12°') + ': the ground distance', m('≈ 14 100') + ' m'],
      ['Bearing ' + m('130°') + ' for 5 km: how far east and how far south?', m('3.83') + ' km east, ' + m('3.21') + ' km south'],
      ['From ' + m('A') + ', ' + m('B') + ' is at ' + m('070°') + ' 4 km; ' + m('C') + ' at ' + m('160°') + ' 3 km. Find ' + m('BC'), m('5') + ' km']
    ],
    hard: [
      ['A tower: elevations ' + m('12°') + ' and ' + m('18°') + ' from two points 200 m apart in line with it. Find its height', m('≈ 79.9') + ' m'],
      ['Same, with the two points and the tower forming a plan angle of ' + m('50°'), 'Cosine rule in ' + m('h cot 12°') + ' and ' + m('h cot 18°')],
      ['A ship sails ' + m('070°') + ' for 8 km then ' + m('160°') + ' for 6 km. Find its distance and bearing from the start', m('10') + ' km on ' + m('≈ 107°')],
      ['From a hill 120 m high, two boats have depressions ' + m('15°') + ' and ' + m('25°') + ' on the same bearing. Distance apart', m('≈ 190') + ' m'],
      ['A mountain has elevation ' + m('8°') + ' from 20 km and ' + m('11°') + ' from a nearer point. Find the height and the second distance', m('≈ 2.81') + ' km; ' + m('≈ 14.5') + ' km'],
      ['A pylon is at ' + m('040°') + ', 500 m from ' + m('A') + ' and at ' + m('310°') + ' from ' + m('B') + ' due east of ' + m('A') + '. Find ' + m('AB'), m('≈ 780') + ' m'],
      ['Explain why the plan is solved first', 'It supplies the single horizontal distance the vertical triangle needs']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw the plan and the vertical triangle as two separate diagrams.',
  homework: [
    'Give the back bearings of ' + m('035°') + ', ' + m('145°') + ' and ' + m('290°') + '.',
    'A tower is ' + m('450') + ' m away and its top has elevation ' + m('11°') + '. Find its height.',
    'From a cliff ' + m('95') + ' m high a boat has depression ' + m('19°') + '. Find its distance from the foot.',
    'A ship sails ' + m('060°') + ' for ' + m('12') + ' km, then ' + m('150°') + ' for ' + m('9') + ' km. Find its distance and bearing from the start.',
    'A mast: from two points ' + m('150') + ' m apart in line with it the elevations are ' + m('14°') + ' and ' + m('22°') + '. Find its height.'
  ]
});

/* ============================== 25 ============================== */
G10_GEO.push({
  id: 'g10-25', stream: 'geo', grade: 10, quarter: 3, lessons: '50', hours: 1,
  title: 'Revision of the chapter',
  subtitle: 'One hour to draw the whole of perpendicularity into a single map before the projects.',
  uz: 'Geometry 10, Takrorlash', uzPage: 'pp. 235–238',
  cam: 'IGCSE review', camPage: 'Core & Extended, pp. 345–346', wb: 'Revision sheet R3',
  objectives: [
    'Recall every test and theorem of the chapter without notes.',
    'Choose the right tool for a given statement.',
    'Build a concept map of perpendicularity in space.',
    'Identify the two weakest areas for the project week.'
  ],
  terms: [
    ['Revision', 'Takrorlash', 'Повторение'],
    ['Concept map', 'Tushunchalar xaritasi', 'Карта понятий'],
    ['Test (criterion)', 'Alomat', 'Признак'],
    ['Theorem', 'Teorema', 'Теорема'],
    ['Dihedral angle', 'Ikki yoqli burchak', 'Двугранный угол'],
    ['Projection', 'Proyeksiya', 'Проекция'],
    ['Distance', 'Masofa', 'Расстояние'],
    ['Self-assessment', 'O‘z-o‘zini baholash', 'Самооценка']
  ],
  timing: [[12, 'The tools, listed'], [14, 'Choosing a tool'], [12, 'The concept map'], [7, 'Setting the project']],
  sections: [
    {
      h: 'The tools, listed',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Tool</th><th>Statement</th><th>Lesson</th></tr></thead>
      <tbody>
        <tr><td>test for ${m('ℓ ⊥ α')}</td><td>⊥ to two intersecting lines of ${m('α')}</td><td>33–34</td></tr>
        <tr><td>Lemma 1</td><td>${m('a ∥ b')}, ${m('a ⊥ α')} ⟹ ${m('b ⊥ α')}</td><td>33–34</td></tr>
        <tr><td>Lemma 2</td><td>${m('a ⊥ α')}, ${m('b ⊥ α')} ⟹ ${m('a ∥ b')}</td><td>33–34</td></tr>
        <tr><td>shortest segment</td><td>the perpendicular beats every oblique</td><td>35–37</td></tr>
        <tr><td>comparing obliques</td><td>longer projection ⟺ longer oblique</td><td>35–37</td></tr>
        <tr><td>three perpendiculars</td><td>${m('c ⊥ AB ⟺ c ⊥ OB')}</td><td>38–39</td></tr>
        <tr><td>test for ${m('β ⊥ α')}</td><td>${m('β')} contains a line ⊥ to ${m('α')}</td><td>40–42</td></tr>
        <tr><td>area of a projection</td><td>${m("S′ = S cos φ")}</td><td>45–47</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'Choosing a tool',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>You are asked to…</th><th>Reach for…</th></tr></thead>
      <tbody>
        <tr><td>prove a line ⊥ a plane</td><td>the test — two intersecting lines</td></tr>
        <tr><td>prove two lines ⊥ in space</td><td>three perpendiculars, or ⊥ to a plane</td></tr>
        <tr><td>prove two planes ⊥</td><td>the test — one line ⊥ to the other plane</td></tr>
        <tr><td>find a distance to a plane</td><td>the perpendicular, then Pythagoras</td></tr>
        <tr><td>find a distance to a line in space</td><td>three perpendiculars, then Pythagoras</td></tr>
        <tr><td>find a dihedral angle</td><td>construct the linear angle</td></tr>
        <tr><td>find a shadow’s area</td><td>${m("S′ = S cos φ")}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The one habit</div>
      Almost every proof goes: <b>establish perpendicularity to a plane</b>, then read off
      perpendicularity to any line in it. If you are stuck, ask which plane you should be proving
      something about.</div>`
    },
    {
      h: 'The concept map, and the project',
      html: `<p>Six boxes, links as sentences:</p>
      <ul>
        <li><b>test</b> → <b>${m('ℓ ⊥ α')}</b> — “two intersecting lines are enough”</li>
        <li><b>${m('ℓ ⊥ α')}</b> → <b>every line of ${m('α')}</b> — “that is the definition”</li>
        <li><b>perpendicular</b> → <b>distance</b> — “the shortest segment”</li>
        <li><b>oblique + projection</b> → <b>three perpendiculars</b> — “one right angle gives the other”</li>
        <li><b>line ⊥ plane</b> → <b>plane ⊥ plane</b> — “contain the normal”</li>
        <li><b>orthogonal projection</b> → <b>${m("S′ = S cos φ")}</b> — “one direction is scaled”</li>
      </ul>
      {{fig:dihedralAngle:The picture behind two of the six boxes.}}
      <div class="keybox"><div class="klabel">Setting the project</div>
      Each pair chooses one of: a scale model of a building with its three orthogonal views; a surveying
      exercise measuring a real height by two elevations; or a physical demonstration of the three
      perpendiculars theorem. Two lessons to prepare, presented next lesson.</div>`
    }
  ],
  examples: [
    {
      q: 'Which tool proves ' + m('AC₁ ⊥ BD') + ' in a cube?',
      steps: [
        ['Two lines in space, one oblique to the base.', ''],
        ['Its projection is ' + m('AC') + '.', ''],
        [m('BD ⊥ AC') + ' in the base.', '']
      ],
      ans: 'The theorem of the three perpendiculars'
    },
    {
      q: 'Which tool finds the distance from ' + m('A') + ' to the plane ' + m('BDD₁B₁') + '?',
      steps: [
        ['A distance to a plane is a perpendicular.', ''],
        [m('AC ⊥ BDD₁B₁') + ' by the test.', ''],
        ['Half of ' + m('AC') + '.', '']
      ],
      ans: 'The test for a line ⊥ a plane, then Pythagoras'
    },
    {
      q: 'Which tool finds the shadow of a tilted square?',
      steps: [
        ['An area under orthogonal projection.', ''],
        [m("S′ = S cos φ") + '.', '']
      ],
      ans: 'The projection-area formula'
    }
  ],
  modelNote: 'Ask for the tool, not the answer, on ten statements in ten minutes.',
  interactive: {
    type: 'quiz',
    title: 'The chapter in ten questions',
    hint: 'One from each lesson block.',
    items: [
      { q: 'The test for ' + m('ℓ ⊥ α') + ' needs:', a: ['one line', 'two intersecting lines', 'two parallel lines', 'three'], c: 1, why: 'Two directions.' },
      { q: 'Two lines ⊥ to one plane are:', a: ['perpendicular', 'parallel', 'skew', 'equal'], c: 1, why: 'Lemma 2.' },
      { q: 'The shortest segment to a plane is:', a: ['an oblique', 'the perpendicular', 'the projection', 'the diagonal'], c: 1, why: 'Pythagoras.' },
      { q: 'Longer projection means:', a: ['shorter oblique', 'longer oblique', 'the same', 'nothing'], c: 1, why: m('AB² = AO² + OB²') + '.' },
      { q: 'Three perpendiculars relates:', a: ['two planes', 'an oblique and its projection', 'two obliques', 'two normals'], c: 1, why: 'Through a line of the plane.' },
      { q: 'To prove ' + m('β ⊥ α') + ':', a: ['find a parallel line', 'find in ' + m('β') + ' a line ⊥ ' + m('α'), 'measure', 'use the definition'], c: 1, why: 'The test.' },
      { q: 'A dihedral angle’s arms must be ⊥ to:', a: ['each other', 'the edge', 'the base', 'the normal'], c: 1, why: 'The linear angle.' },
      { q: 'Area under orthogonal projection:', a: [m('S sin φ'), m('S cos φ'), m('S tan φ'), m('S')], c: 1, why: 'One direction scaled.' },
      { q: 'Perpendicular 9, projection 12: the oblique:', a: [m('15'), m('21'), m('3'), m('108')], c: 0, why: 'Pythagoras.' },
      { q: 'Pyramid base 10, height 12: slant height:', a: [m('12'), m('13'), m('15'), m('5')], c: 1, why: m(sr('144 + 25')) + '.' }
    ]
  },
  quiz: [
    { q: 'The commonest proof shape in this chapter is:', a: ['measure and compare', 'prove ⊥ to a plane, then read off', 'use coordinates', 'guess'], c: 1, why: 'Almost every proof.' },
    { q: 'A distance in space is always:', a: ['any segment', 'a perpendicular', 'the longest segment', 'a projection'], c: 1, why: 'By definition.' },
    { q: 'The linear angle of a dihedral angle is:', a: ['unique', 'independent of the point on the edge', 'both', 'neither'], c: 2, why: 'Respectively parallel arms.' },
    { q: 'The project options are:', a: ['one', 'two', 'three', 'four'], c: 2, why: 'Model, survey, or demonstration.' }
  ],
  practice: {
    easy: [
      ['Tool for “prove ' + m('AA₁ ⊥ ABCD') + '”', 'the test for line ⊥ plane'],
      ['Tool for “prove ' + m('AC₁ ⊥ BD') + '”', 'three perpendiculars'],
      ['Tool for “prove ' + m('ABB₁A₁ ⊥ ABCD') + '”', 'the test for perpendicular planes'],
      ['Tool for a shadow’s area', m("S′ = S cos φ")],
      ['Perpendicular 3, projection 4: the oblique', m('5')],
      ['Two lines ⊥ to one plane are', 'parallel'],
      ['The arms of a linear angle are ⊥ to', 'the edge']
    ],
    med: [
      ['Perpendicular 9, projection 40: the oblique', m('41')],
      ['Pyramid base 10, height 12: the slant height', m('13')],
      ['Same: the face-to-base dihedral angle', m('≈ 67.4°')],
      ['Cube edge 6: distance from ' + m('A') + ' to ' + m('BDD₁B₁'), m('3' + sr('2'))],
      ['Cube: the dihedral angle along ' + m('AB') + ' to ' + m('ABC₁D₁'), m('45°')],
      ['A square of side 8 at ' + m('60°') + ': its shadow area', m('32')],
      ['Oblique 26 at ' + m('30°') + ': the perpendicular', m('13')]
    ],
    hard: [
      ['Cube edge ' + m('a') + ': distance from ' + m('A') + ' to ' + m('A₁BD'), m(f('a' + sr('3'), '3'))],
      ['Regular tetrahedron edge ' + m('a') + ': the dihedral angle between faces', m('≈ 70.5°')],
      ['Cube edge 6: shadow of the hexagonal midpoint section on the base', m('27')],
      ['A mast: elevations ' + m('14°') + ' and ' + m('22°') + ' from points 150 m apart in line. Its height', m('≈ 88.4') + ' m'],
      ['Pyramid base 12, lateral edge 10: both dihedral angles', m('≈ 56.4°') + ' and ' + m('≈ 46.9°')],
      ['Prove ' + m('AC₁ ⊥ A₁BD') + ' in a cube', 'Two of its lines are ⊥ to ' + m('AC₁')],
      ['Explain why the linear angle does not depend on the point chosen', 'Respectively parallel arms give equal angles']
    ]
  },
  hwTitle: 'Homework — 3 tasks',
  hwNote: 'The project sheet is due at the presentation lesson.',
  homework: [
    'Write the eight tools of the chapter from memory, with their statements.',
    'Finish the concept map with all six links written as sentences.',
    'Prepare the project: a scale model with three views, a surveying measurement, or a demonstration of the three perpendiculars.'
  ]
});

/* ============================== 26 ============================== */
G10_GEO.push({
  id: 'g10-26', stream: 'geo', grade: 10, quarter: 3, lessons: '51–52', hours: 2,
  title: 'Presentation of project work',
  subtitle: 'Two lessons in which the class does the teaching — and every mathematical claim is defended.',
  uz: 'Geometry 10, Loyiha ishi', uzPage: 'pp. 239–242',
  cam: 'IGCSE E14.x', camPage: 'Core & Extended, pp. 210–222', wb: 'Project sheet P3',
  objectives: [
    'Present a piece of mathematical work clearly to an audience.',
    'Defend each measurement and each calculation under questioning.',
    'Assess another pair’s work against stated criteria.',
    'Identify one thing to do differently next time.'
  ],
  terms: [
    ['Project work', 'Loyiha ishi', 'Проектная работа'],
    ['Presentation', 'Taqdimot', 'Презентация'],
    ['Criteria', 'Mezonlar', 'Критерии'],
    ['Peer assessment', 'O‘zaro baholash', 'Взаимооценка'],
    ['Justification', 'Asoslash', 'Обоснование'],
    ['Measurement', 'O‘lchash', 'Измерение'],
    ['Scale model', 'Masshtabli model', 'Масштабная модель'],
    ['Survey', 'O‘lchov ishi', 'Съёмка'],
    ['Conclusion', 'Xulosa', 'Заключение']
  ],
  timing: [[6, 'The criteria'], [50, 'Presentations, five minutes each'], [16, 'Peer assessment'], [12, 'Whole-class review'], [6, 'The single lesson learned']],
  sections: [
    {
      h: 'The criteria',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Criterion</th><th>Marks</th><th>What earns them</th></tr></thead>
      <tbody>
        <tr><td>the mathematics</td><td class="m">6</td><td>correct theorems, correctly applied and named</td></tr>
        <tr><td>the measurement or construction</td><td class="m">4</td><td>done carefully, with the method described</td></tr>
        <tr><td>the presentation</td><td class="m">4</td><td>clear, audible, in five minutes, with a diagram</td></tr>
        <tr><td>answering questions</td><td class="m">4</td><td>defending a claim rather than repeating it</td></tr>
        <tr><td>accuracy discussed</td><td class="m">2</td><td>one honest sentence about the error</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The rule for questions</div>
      Every pair is asked at least two questions: one from the class and one from the teacher. At least
      one must be “<i>why is that angle a right angle?</i>” or “<i>how do you know that is the
      projection?</i>”</div>`
    },
    {
      h: 'The three project types',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Type</th><th>What is produced</th><th>The mathematics to defend</th></tr></thead>
      <tbody>
        <tr><td>scale model</td><td>a card building and its three orthogonal views</td><td>which lengths are preserved, and why</td></tr>
        <tr><td>survey</td><td>a measured height from two angles of elevation</td><td>the plan triangle and the vertical triangle</td></tr>
        <tr><td>demonstration</td><td>a physical model of the three perpendiculars</td><td>the statement, both directions</td></tr>
      </tbody></table></div>
      {{fig:orthoProjection:What a scale-model project has to produce, and get right.}}`
    },
    {
      h: 'Peer assessment, and the review',
      html: `<p>Each learner scores two other pairs on the five criteria and writes <b>one sentence</b> of
      specific praise and <b>one</b> specific suggestion. “Good work” scores nothing; “your plan view was
      aligned correctly under the elevation, which made it easy to read” scores full marks for the
      assessor.</p>
      <div class="keybox"><div class="klabel">The whole-class review</div>
      Three questions, answered by the class together:<br>
      Which theorem was used most often across all the projects?<br>
      Which measurement was hardest to make accurately, and why?<br>
      Which presentation made its mathematics clearest, and what did it do?</div>
      <p>Every learner then writes one line in the exercise book: <i>“Next time I will …”</i>. Dated.
      It is read again at the end of Quarter IV.</p>`
    }
  ],
  examples: [
    {
      q: 'A pair measured a tower as ' + m('47.5') + ' m from ' + m('300') + ' m and ' + m('9°') + '. What should the accuracy sentence say?',
      steps: [
        ['The angle was measured to about ' + m('±0.5°') + '.', ''],
        [m('300 tan 8.5° ≈ 44.8') + ', ' + m('300 tan 9.5° ≈ 50.2') + '.', ''],
        ['So the height is between about 45 and 50 m.', '']
      ],
      ans: '“The height is 45–50 m; the angle dominates the error”'
    },
    {
      q: 'A pair claims their front elevation shows the true length of a sloping edge. Is that right?',
      steps: [
        ['Orthogonal projection preserves lengths <b>parallel</b> to the plane.', ''],
        ['A sloping edge is not parallel to the front plane.', ''],
        ['It appears foreshortened.', '']
      ],
      ans: 'No — only lengths parallel to the plane of projection are preserved'
    },
    {
      q: 'A demonstration shows ' + m('c ⊥ OB') + ' and claims ' + m('c ⊥ AB') + '. What must be checked first?',
      steps: [
        ['That ' + m('AO') + ' really is perpendicular to the plane.', ''],
        ['That ' + m('c') + ' lies in the plane and passes through ' + m('B') + '.', ''],
        ['Only then does the theorem apply.', '']
      ],
      ans: 'The two hypotheses of the theorem'
    }
  ],
  modelNote: 'Time each presentation strictly at five minutes; the discipline is part of the mark.',
  interactive: {
    type: 'quiz',
    title: 'Assessing a project',
    hint: 'Ask what a claim rests on.',
    items: [
      { q: 'Most marks are given for:', a: ['the model’s appearance', 'the mathematics', 'the length of the talk', 'neatness'], c: 1, why: 'Six of twenty.' },
      { q: 'Orthogonal projection preserves lengths:', a: ['always', 'parallel to the plane', 'perpendicular to the plane', 'never'], c: 1, why: 'Others are foreshortened.' },
      { q: 'A survey needs:', a: ['one angle', 'two angles or one angle and a distance', 'three angles', 'no measurement'], c: 1, why: 'One triangle must be determined.' },
      { q: 'A useful peer comment is:', a: ['“good work”', 'specific about one thing', '“I agree”', 'a mark only'], c: 1, why: 'Specificity is what is credited.' },
      { q: 'An accuracy sentence should mention:', a: ['the answer', 'which measurement dominates the error', 'the weather', 'nothing'], c: 1, why: 'That is the honest statement.' }
    ]
  },
  quiz: [
    { q: 'How many questions must each pair answer?', a: ['none', 'at least two', 'exactly one', 'ten'], c: 1, why: 'One from the class, one from the teacher.' },
    { q: 'The accuracy criterion is worth:', a: [m('0'), m('2'), m('6'), m('10')], c: 1, why: 'Two of twenty.' },
    { q: 'Peer assessment requires:', a: ['a mark only', 'one praise and one suggestion', 'nothing written', 'a full essay'], c: 1, why: 'Both specific.' },
    { q: 'The lesson ends with:', a: ['a test', 'one dated sentence in the exercise book', 'homework', 'nothing'], c: 1, why: 'Read again at the end of Quarter IV.' }
  ],
  practice: {
    easy: [
      ['How long is each presentation?', 'five minutes'],
      ['How many criteria are there?', m('5')],
      ['Total marks', m('20')],
      ['Marks for the mathematics', m('6')],
      ['Marks for accuracy discussed', m('2')],
      ['Are questions part of the mark?', 'yes, ' + m('4')],
      ['What is written at the end?', 'one dated “next time I will …” sentence']
    ],
    med: [
      ['A tower from 300 m at ' + m('9° ± 0.5°') + ': the range of heights', m('≈ 45') + ' to ' + m('50') + ' m'],
      ['Does the front elevation show a sloping edge’s true length?', 'no'],
      ['Which lengths does orthogonal projection preserve?', 'those parallel to the plane'],
      ['What must be checked before the three perpendiculars theorem?', m('AO ⊥ α') + ', and ' + m('c ⊂ α') + ' through ' + m('B')],
      ['A scale model at ' + m('1:50') + ': a 12 m wall is how long?', m('24') + ' cm'],
      ['Same model: a 60 m² wall has what model area?', m('240') + ' cm²'],
      ['Which theorem is used most across the projects?', 'the three perpendiculars']
    ],
    hard: [
      ['A survey gives ' + m('h = d tan θ') + '. Which of ' + m('d') + ' or ' + m('θ') + ' usually dominates the error?', m('θ') + ' — the tangent is sensitive near steep angles'],
      ['A model at ' + m('1:50') + ' uses ' + m('0.2') + ' litres of paint. The real building needs?', m('500') + ' litres'],
      ['Show that a ' + m('0.5°') + ' error at ' + m('9°') + ' changes the height by about 6%', m(f('Δh', 'h') + ' ≈ ' + f('Δθ', 'sin θ cos θ'))],
      ['Why is a demonstration of the converse harder to build than the forward direction?', 'It must start from a right angle you cannot see'],
      ['Design a check that a measured height is right', 'Measure from a second point and compare'],
      ['A projection of a ' + m('60') + ' m² roof at ' + m('35°') + ': the plan area', m('≈ 49') + ' m²'],
      ['Give one specific peer comment on a set of three views', 'e.g. “your plan is aligned under the elevation, so the widths match”']
    ]
  },
  hwTitle: 'Homework — 3 tasks',
  hwNote: 'The dated sentence is read again at the end of Quarter IV.',
  homework: [
    'Write your peer assessment of two projects: the five scores, one specific praise and one specific suggestion each.',
    'Write your own “next time I will …” sentence, dated.',
    'Answer the three whole-class review questions in your own words.'
  ]
});

/* ===================== QUARTER IV (16 hours) ===================== */

/* ============================== 27 ============================== */
G10_GEO.push({
  id: 'g10-27', stream: 'geo', grade: 10, quarter: 4, lessons: '53–54', hours: 2,
  title: 'The equation of a straight line [Cambridge revision]',
  subtitle: 'Gradient, midpoint and length — three formulas that answer almost every coordinate question.',
  uz: 'Revision of Grade 8–9 coordinates', uzPage: 'Geometry 9, pp. 96–118',
  cam: 'P1 3.1–3.3', camPage: 'Pure Mathematics 1, pp. 44–56', wb: 'Exercise 3A–3C',
  objectives: [
    'Find the length, midpoint and gradient of a line segment.',
    'Write the equation of a line through a point with a given gradient.',
    'Use the conditions for parallel and perpendicular lines.',
    'Find the perpendicular bisector of a segment and the foot of a perpendicular.'
  ],
  terms: [
    ['Coordinate plane', 'Koordinata tekisligi', 'Координатная плоскость'],
    ['Gradient (slope)', 'Burchak koeffitsiyenti', 'Угловой коэффициент'],
    ['Midpoint', 'O‘rta nuqta', 'Середина'],
    ['Distance formula', 'Masofa formulasi', 'Формула расстояния'],
    ['Parallel lines', 'Parallel to‘g‘ri chiziqlar', 'Параллельные прямые'],
    ['Perpendicular lines', 'Perpendikulyar to‘g‘ri chiziqlar', 'Перпендикулярные прямые'],
    ['Perpendicular bisector', 'O‘rta perpendikulyar', 'Серединный перпендикуляр'],
    ['Intercept', 'Kesma', 'Отрезок на оси'],
    ['Collinear', 'Bir to‘g‘ri chiziqda', 'Коллинеарные'],
    ['Foot of the perpendicular', 'Perpendikulyar asosi', 'Основание перпендикуляра']
  ],
  timing: [[15, 'The three formulas'], [25, 'Forms of the equation'], [25, 'Parallel and perpendicular'], [20, 'The perpendicular bisector'], [10, 'Homework']],
  sections: [
    {
      h: 'The three formulas',
      html: `<p>For ${m('A(x₁, y₁)')} and ${m('B(x₂, y₂)')}:</p>
      ${eq(m('AB = ' + sr('(x₂ − x₁)² + (y₂ − y₁)²')) + '   ' + m('M = (' + f('x₁ + x₂', '2') + ', ' + f('y₁ + y₂', '2') + ')') + '   ' + m('m = ' + f('y₂ − y₁', 'x₂ − x₁')), true)}
      {{fig:distanceFormula:The distance is the hypotenuse of a right triangle with legs Δx and Δy.}}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">A</th><th class="m">B</th><th class="m">AB</th><th class="m">M</th><th class="m">m</th></tr></thead>
      <tbody>
        <tr><td class="m">(1, 2)</td><td class="m">(4, 6)</td><td class="m">5</td><td class="m">(2.5, 4)</td><td class="m">${f('4', '3')}</td></tr>
        <tr><td class="m">(−2, 3)</td><td class="m">(4, −5)</td><td class="m">10</td><td class="m">(1, −1)</td><td class="m">−${f('4', '3')}</td></tr>
        <tr><td class="m">(0, 0)</td><td class="m">(6, 8)</td><td class="m">10</td><td class="m">(3, 4)</td><td class="m">${f('4', '3')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Subtract in the same order, twice</span>
      Gradient is ${m(f('y₂ − y₁', 'x₂ − x₁'))}, not ${m(f('y₂ − y₁', 'x₁ − x₂'))}. Reversing one
      subtraction and not the other flips the sign — and a positive gradient reported as negative loses
      every mark that follows.</div>`
    },
    {
      h: 'Forms of the equation',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Form</th><th>Equation</th><th>Use it when</th></tr></thead>
      <tbody>
        <tr><td>gradient–intercept</td><td class="m">y = mx + c</td><td>the intercept is known or wanted</td></tr>
        <tr><td>point–gradient</td><td class="m">y − y₁ = m(x − x₁)</td><td>a point and a gradient are given</td></tr>
        <tr><td>two points</td><td class="m">${f('y − y₁', 'y₂ − y₁')} = ${f('x − x₁', 'x₂ − x₁')}</td><td>two points are given</td></tr>
        <tr><td>general</td><td class="m">ax + by + c = 0</td><td>an answer must be tidy, or the line is vertical</td></tr>
      </tbody></table></div>
      {{fig:gradientIntercept:m is the rise over the run; c is where the line crosses Oy.}}
      <div class="keybox"><div class="klabel">The vertical line has no gradient</div>
      ${m('x = 3')} cannot be written as ${m('y = mx + c')} — its gradient is undefined, not infinite and
      not zero. A horizontal line, by contrast, has gradient ${m('0')} and the perfectly ordinary
      equation ${m('y = 4')}.</div>`
    },
    {
      h: 'Parallel and perpendicular',
      html: `${eq('parallel: ' + m('m₁ = m₂') + '     perpendicular: ' + m('m₁ m₂ = −1'), true)}
      <p>The second condition says the gradients are <b>negative reciprocals</b>: ${m(f('2', '3'))} pairs
      with ${m('−' + f('3', '2'))}, and ${m('4')} with ${m('−' + f('1', '4'))}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Line</th><th>Parallel through ${m('(1, 5)')}</th><th>Perpendicular through ${m('(1, 5)')}</th></tr></thead>
      <tbody>
        <tr><td class="m">y = 2x + 1</td><td class="m">y = 2x + 3</td><td class="m">y = −${f('1', '2')}x + ${f('11', '2')}</td></tr>
        <tr><td class="m">y = −${f('3', '4')}x</td><td class="m">y = −${f('3', '4')}x + ${f('23', '4')}</td><td class="m">y = ${f('4', '3')}x + ${f('11', '3')}</td></tr>
        <tr><td class="m">3x + 2y = 7</td><td class="m">3x + 2y = 13</td><td class="m">2x − 3y + 13 = 0</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The shortcut for the general form</div>
      A line parallel to ${m('ax + by = c')} is ${m('ax + by = k')}; one perpendicular to it is
      ${m('bx − ay = k')}. Swap the coefficients and change one sign — no gradient needed at all.</div>`
    },
    {
      h: 'The perpendicular bisector',
      html: `<p>The perpendicular bisector of ${m('AB')} is the set of points equidistant from ${m('A')}
      and ${m('B')}. Two steps build it:</p>
      <ol>
        <li>the midpoint ${m('M')} of ${m('AB')} — it passes through this;</li>
        <li>the negative reciprocal of the gradient of ${m('AB')} — this is its gradient.</li>
      </ol>
      {{fig:perpBisector:Every point of the bisector is the same distance from A as from B.}}
      <p><b>Example.</b> ${m('A(1, 2)')}, ${m('B(5, 8)')}. Then ${m('M(3, 5)')} and
      ${m('m_{AB} = ' + f('3', '2'))}, so the bisector has gradient ${m('−' + f('2', '3'))}:</p>
      ${eq(m('y − 5 = −' + f('2', '3') + '(x − 3)') + ',  that is  ' + m('2x + 3y = 21'), true)}
      <div class="warn"><span class="wl">Two conditions, both needed</span>
      A line through ${m('M')} that is not perpendicular is not the bisector; a perpendicular line that
      misses ${m('M')} is not either. Check both before writing the answer.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the length, midpoint and gradient of ' + m('AB') + ' for ' + m('A(−2, 3)') + ' and ' + m('B(4, −5)') + '.',
      steps: [
        [m('Δx = 6') + ', ' + m('Δy = −8'), ''],
        [m('AB = ' + sr('36 + 64') + ' = 10'), ''],
        [m('M = (1, −1)'), ''],
        [m('m = ' + f('−8', '6') + ' = −' + f('4', '3')), '']
      ],
      ans: m('10') + ', ' + m('(1, −1)') + ', ' + m('−' + f('4', '3'))
    },
    {
      q: 'Find the equation of the line through ' + m('(2, −1)') + ' perpendicular to ' + m('y = ' + f('3', '4') + 'x + 2') + '.',
      steps: [
        [m('m₁ = ' + f('3', '4') + ' ⇒ m₂ = −' + f('4', '3')), 'Negative reciprocal.'],
        [m('y + 1 = −' + f('4', '3') + '(x − 2)'), ''],
        [m('3y + 3 = −4x + 8'), ''],
        [m('4x + 3y − 5 = 0'), '']
      ],
      ans: m('4x + 3y − 5 = 0')
    },
    {
      q: 'Find the perpendicular bisector of ' + m('A(1, 2)') + ' and ' + m('B(5, 8)') + '.',
      steps: [
        [m('M = (3, 5)'), ''],
        [m('m_{AB} = ' + f('6', '4') + ' = ' + f('3', '2')), ''],
        [m('m = −' + f('2', '3')), ''],
        [m('2x + 3y = 21'), '']
      ],
      ans: m('2x + 3y = 21')
    },
    {
      q: 'Show that ' + m('A(1, 1)') + ', ' + m('B(3, 5)') + ' and ' + m('C(6, 11)') + ' are collinear.',
      steps: [
        [m('m_{AB} = ' + f('4', '2') + ' = 2'), ''],
        [m('m_{BC} = ' + f('6', '3') + ' = 2'), ''],
        ['Equal gradients and a common point ' + m('B') + '.', 'So one line.']
      ],
      ans: 'Collinear — both gradients are ' + m('2')
    }
  ],
  modelNote: 'Plot the three points of the collinearity example on squared paper before computing anything.',
  interactive: {
    type: 'coordPlane',
    title: 'Gradient, midpoint and length',
    hint: 'Drag a point and watch all three change.'
  },
  quiz: [
    { q: 'The gradient of the line through ' + m('(1, 2)') + ' and ' + m('(4, 8)') + ' is:', a: [m('2'), m(f('1', '2')), m('6'), m('3')], c: 0, why: m(f('6', '3')) + '.' },
    { q: 'Perpendicular gradients satisfy:', a: [m('m₁ = m₂'), m('m₁m₂ = −1'), m('m₁ + m₂ = 0'), m('m₁m₂ = 1')], c: 1, why: 'Negative reciprocals.' },
    { q: 'The line ' + m('x = 3') + ' has gradient:', a: [m('0'), m('3'), 'undefined', m('∞')], c: 2, why: 'No run.' },
    { q: 'The midpoint of ' + m('(−2, 3)') + ' and ' + m('(4, −5)') + ' is:', a: [m('(1, −1)'), m('(3, −4)'), m('(2, −2)'), m('(1, 4)')], c: 0, why: 'Average each coordinate.' },
    { q: 'A line parallel to ' + m('3x + 2y = 7') + ' is:', a: [m('2x − 3y = 1'), m('3x + 2y = 13'), m('3x − 2y = 7'), m('2x + 3y = 7')], c: 1, why: 'Same coefficients.' },
    { q: 'The perpendicular bisector passes through:', a: [m('A'), m('B'), 'the midpoint', 'the origin'], c: 2, why: 'And is perpendicular.' }
  ],
  practice: {
    easy: [
      ['Length from ' + m('(0, 0)') + ' to ' + m('(3, 4)'), m('5')],
      ['Midpoint of ' + m('(1, 2)') + ' and ' + m('(5, 8)'), m('(3, 5)')],
      ['Gradient through ' + m('(1, 2)') + ' and ' + m('(4, 8)'), m('2')],
      ['Gradient of ' + m('y = −3x + 1'), m('−3')],
      ['Gradient perpendicular to ' + m('2'), m('−' + f('1', '2'))],
      ['Equation through ' + m('(0, 4)') + ' with gradient ' + m('3'), m('y = 3x + 4')],
      ['Gradient of ' + m('y = 5'), m('0')]
    ],
    med: [
      ['Length from ' + m('(−2, 3)') + ' to ' + m('(4, −5)'), m('10')],
      ['Equation through ' + m('(2, −1)') + ' with gradient ' + m(f('3', '4')), m('3x − 4y − 10 = 0')],
      ['Equation through ' + m('(2, −1)') + ' perpendicular to ' + m('y = ' + f('3', '4') + 'x'), m('4x + 3y − 5 = 0')],
      ['Line through ' + m('(1, 3)') + ' and ' + m('(5, 11)'), m('y = 2x + 1')],
      ['Perpendicular bisector of ' + m('(1, 2)') + ' and ' + m('(5, 8)'), m('2x + 3y = 21')],
      ['Are ' + m('(1,1), (3,5), (6,11)') + ' collinear?', 'Yes, gradient ' + m('2')],
      ['Line parallel to ' + m('3x + 2y = 7') + ' through ' + m('(1, 5)'), m('3x + 2y = 13')]
    ],
    hard: [
      ['Foot of the perpendicular from ' + m('(1, 8)') + ' to ' + m('y = 2x'), m('(3.4, 6.8)')],
      ['Distance from ' + m('(1, 8)') + ' to the line ' + m('y = 2x'), m(f('6', sr('5'))) + ' ≈ ' + m('2.68')],
      ['Area of the triangle with vertices ' + m('(0,0), (4,0), (2,6)'), m('12')],
      ['Find ' + m('k') + ' so that ' + m('(1, 2), (3, k), (7, 14)') + ' are collinear', m('k = 6')],
      ['The vertices ' + m('A(0,0), B(4,2), C(2,6)') + ': show the triangle is right-angled', m('m_{AB} m_{BC} = ' + f('1', '2') + ' × (−2) = −1')],
      ['Circumcentre of ' + m('(0,0), (6,0), (0,8)'), m('(3, 4)')],
      ['The line ' + m('y = mx') + ' is equidistant from ' + m('(0, 4)') + ' and ' + m('(6, 0)') + ': find ' + m('m'), m('m = ' + f('2', '3'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Sketch the points before every calculation; a wrong sign shows up in the picture at once.',
  homework: [
    'Find the length, midpoint and gradient of ' + m('AB') + ' for ' + m('A(−3, 1)') + ' and ' + m('B(5, 7)') + '.',
    'Find the equation of the line through ' + m('(3, −2)') + ' parallel to ' + m('2x − 5y = 4') + '.',
    'Find the equation of the perpendicular bisector of ' + m('(−1, 4)') + ' and ' + m('(5, −2)') + '.',
    'Show that ' + m('A(1, 0)') + ', ' + m('B(4, 6)') + ' and ' + m('C(6, 10)') + ' are collinear.',
    'Find the foot of the perpendicular from ' + m('(2, 9)') + ' to the line ' + m('y = 3x + 1') + '.'
  ]
});

/* ============================== 28 ============================== */
G10_GEO.push({
  id: 'g10-28', stream: 'geo', grade: 10, quarter: 4, lessons: '55–56', hours: 2,
  title: 'The equation of a circle [Cambridge revision]',
  subtitle: 'Centre and radius from the equation, and the equation from the centre and radius.',
  uz: 'Revision of Grade 9', uzPage: 'Geometry 9, pp. 119–132',
  cam: 'P1 3.4', camPage: 'Pure Mathematics 1, pp. 57–64', wb: 'Exercise 3D',
  objectives: [
    'Write the equation of a circle from its centre and radius.',
    'Complete the square to read the centre and radius from a general equation.',
    'Decide whether a point lies inside, on or outside a circle.',
    'Use the property that the tangent is perpendicular to the radius.'
  ],
  terms: [
    ['Circle', 'Aylana', 'Окружность'],
    ['Centre', 'Markaz', 'Центр'],
    ['Radius', 'Radius', 'Радиус'],
    ['Standard form', 'Kanonik ko‘rinish', 'Каноническое уравнение'],
    ['General form', 'Umumiy ko‘rinish', 'Общее уравнение'],
    ['Completing the square', 'To‘la kvadratga keltirish', 'Выделение полного квадрата'],
    ['Tangent', 'Urinma', 'Касательная'],
    ['Chord', 'Vatar', 'Хорда'],
    ['Diameter', 'Diametr', 'Диаметр'],
    ['Concentric', 'Konsentrik', 'Концентрические']
  ],
  timing: [[15, 'The standard form'], [25, 'Completing the square'], [20, 'Inside, on or outside'], [25, 'Tangents'], [15, 'Homework']],
  sections: [
    {
      h: 'The standard form',
      html: `<p>A circle is the set of points at a fixed distance from a fixed point. Apply the distance
      formula and square:</p>
      ${eq(m('(x − a)² + (y − b)² = r²'), true)}
      {{fig:circleEquation:Centre (a, b), radius r — the distance formula with the square roots removed.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Centre</th><th class="m">r</th><th>Equation</th></tr></thead>
      <tbody>
        <tr><td class="m">(0, 0)</td><td class="m">5</td><td class="m">x² + y² = 25</td></tr>
        <tr><td class="m">(3, −2)</td><td class="m">4</td><td class="m">(x − 3)² + (y + 2)² = 16</td></tr>
        <tr><td class="m">(−1, 0)</td><td class="m">${sr('7')}</td><td class="m">(x + 1)² + y² = 7</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The signs inside the brackets are reversed</span>
      A centre at ${m('(3, −2)')} gives ${m('(x − 3)²')} and ${m('(y + 2)²')}. Reading the centre
      straight off the brackets without changing the sign is the standard error in this topic.</div>`
    },
    {
      h: 'Completing the square',
      html: `<p>Expanded, the equation looks unlike a circle:</p>
      ${eq(m('x² + y² + 2gx + 2fy + c = 0'), true)}
      <p>Complete the square in ${m('x')} and in ${m('y')} separately to recover the standard form.</p>
      <p><b>Example.</b> ${m('x² + y² − 6x + 4y − 12 = 0')}:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td>group</td><td class="m">(x² − 6x) + (y² + 4y) = 12</td></tr>
        <tr><td>complete</td><td class="m">(x − 3)² − 9 + (y + 2)² − 4 = 12</td></tr>
        <tr><td>tidy</td><td class="m">(x − 3)² + (y + 2)² = 25</td></tr>
        <tr><td>read</td><td>centre ${m('(3, −2)')}, radius ${m('5')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">When it is not a circle</div>
      If the right-hand side comes out <b>negative</b>, no point satisfies the equation; if it is
      <b>zero</b>, the “circle” is the single point at the centre. Both appear in examinations, and both
      want a sentence, not a radius.</div>`
    },
    {
      h: 'Inside, on or outside',
      html: `<p>Compute the distance from the point to the centre and compare with ${m('r')}.</p>
      ${eq(m('d < r') + ' inside,   ' + m('d = r') + ' on,   ' + m('d > r') + ' outside', true)}
      <p>Faster still: substitute the point into ${m('(x − a)² + (y − b)² − r²')} and read the sign —
      negative inside, zero on, positive outside. No square root is needed.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Point</th><th>Substituted into ${m('(x−3)² + (y+2)² − 25')}</th><th>Where</th></tr></thead>
      <tbody>
        <tr><td class="m">(3, 3)</td><td class="m">0 + 25 − 25 = 0</td><td>on</td></tr>
        <tr><td class="m">(5, 0)</td><td class="m">4 + 4 − 25 = −17</td><td>inside</td></tr>
        <tr><td class="m">(10, 2)</td><td class="m">49 + 16 − 25 = 40</td><td>outside</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'Tangents',
      html: `<div class="keybox"><div class="klabel">The one circle property this topic needs</div>
      The tangent at a point is <b>perpendicular to the radius</b> drawn to that point.</div>
      {{fig:tangentProperty:Radius and tangent meet at a right angle — the whole of the tangent method.}}
      <p>So the tangent at ${m('P')} on a circle with centre ${m('C')} is found in two steps: compute
      ${m('m_{CP})')}, then use ${m('−' + f('1', 'm_{CP}'))} through ${m('P')}.</p>
      <p><b>Example.</b> The tangent to ${m('x² + y² = 25')} at ${m('(3, 4)')}. Here
      ${m('m_{CP} = ' + f('4', '3'))}, so the tangent has gradient ${m('−' + f('3', '4'))}:</p>
      ${eq(m('y − 4 = −' + f('3', '4') + '(x − 3)') + ',  that is  ' + m('3x + 4y = 25'), true)}
      <div class="keybox"><div class="klabel">A pattern worth remembering</div>
      For the circle ${m('x² + y² = r²')} the tangent at ${m('(x₀, y₀)')} is simply
      ${m('x₀x + y₀y = r²')}. Check: at ${m('(3, 4)')} on ${m('x² + y² = 25')} it gives
      ${m('3x + 4y = 25')} at once.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the centre and radius of ' + m('x² + y² − 6x + 4y − 12 = 0') + '.',
      steps: [
        [m('(x² − 6x) + (y² + 4y) = 12'), ''],
        [m('(x − 3)² − 9 + (y + 2)² − 4 = 12'), ''],
        [m('(x − 3)² + (y + 2)² = 25'), ''],
        ['Centre ' + m('(3, −2)') + ', radius ' + m('5') + '.', '']
      ],
      ans: 'Centre ' + m('(3, −2)') + ', radius ' + m('5')
    },
    {
      q: 'Find the equation of the circle with ' + m('A(1, 2)') + ' and ' + m('B(7, 10)') + ' as ends of a diameter.',
      steps: [
        ['Centre = midpoint = ' + m('(4, 6)') + '.', ''],
        [m('AB = ' + sr('36 + 64') + ' = 10 ⇒ r = 5'), ''],
        [m('(x − 4)² + (y − 6)² = 25'), '']
      ],
      ans: m('(x − 4)² + (y − 6)² = 25')
    },
    {
      q: 'Where does ' + m('(6, 1)') + ' lie relative to ' + m('(x − 3)² + (y + 2)² = 25') + '?',
      steps: [
        [m('(6 − 3)² + (1 + 2)² = 9 + 9 = 18'), ''],
        [m('18 < 25'), ''],
        ['Inside.', 'No square root needed.']
      ],
      ans: 'Inside the circle'
    },
    {
      q: 'Find the tangent to ' + m('x² + y² = 25') + ' at ' + m('(−4, 3)') + '.',
      steps: [
        [m('m_{CP} = −' + f('3', '4')), ''],
        [m('m_{tangent} = ' + f('4', '3')), ''],
        [m('y − 3 = ' + f('4', '3') + '(x + 4)'), ''],
        [m('4x − 3y + 25 = 0'), 'Or use ' + m('x₀x + y₀y = 25') + ' directly.']
      ],
      ans: m('4x − 3y + 25 = 0')
    }
  ],
  modelNote: 'Complete the square on the board twice — once with a positive and once with a negative constant — and let the class say what the second one is.',
  interactive: {
    type: 'circleAngles',
    title: 'The circle and its lines',
    hint: 'Move the points and watch the right angle at the tangent.'
  },
  quiz: [
    { q: 'The circle ' + m('(x − 3)² + (y + 2)² = 16') + ' has centre:', a: [m('(3, 2)'), m('(3, −2)'), m('(−3, 2)'), m('(−3, −2)')], c: 1, why: 'Reverse the signs.' },
    { q: 'Its radius is:', a: [m('16'), m('4'), m('8'), m(sr('16') + '²')], c: 1, why: m('r² = 16') + '.' },
    { q: 'To find the centre from the general form you:', a: ['factorise', 'complete the square', 'differentiate', 'substitute'], c: 1, why: 'Twice — in ' + m('x') + ' and ' + m('y') + '.' },
    { q: 'If the right side comes out negative, the equation gives:', a: ['a small circle', 'no points at all', 'a point', 'a line'], c: 1, why: 'A sum of squares cannot be negative.' },
    { q: 'A tangent meets the radius at:', a: [m('45°'), m('90°'), m('60°'), 'any angle'], c: 1, why: 'The tangent property.' },
    { q: 'The tangent to ' + m('x² + y² = 25') + ' at ' + m('(3, 4)') + ' is:', a: [m('3x + 4y = 25'), m('4x + 3y = 25'), m('3x − 4y = 25'), m('x + y = 7')], c: 0, why: m('x₀x + y₀y = r²') + '.' }
  ],
  practice: {
    easy: [
      ['Equation of the circle, centre ' + m('(0, 0)') + ', radius ' + m('5'), m('x² + y² = 25')],
      ['Equation, centre ' + m('(3, −2)') + ', radius ' + m('4'), m('(x − 3)² + (y + 2)² = 16')],
      ['Centre of ' + m('(x + 1)² + (y − 5)² = 9'), m('(−1, 5)')],
      ['Radius of ' + m('(x + 1)² + (y − 5)² = 9'), m('3')],
      ['Radius of ' + m('x² + y² = 20'), m('2' + sr('5'))],
      ['Does ' + m('(3, 4)') + ' lie on ' + m('x² + y² = 25') + '?', 'Yes'],
      ['Centre of ' + m('x² + y² = 49'), m('(0, 0)')]
    ],
    med: [
      ['Centre and radius of ' + m('x² + y² − 6x + 4y − 12 = 0'), m('(3, −2)') + ', ' + m('5')],
      ['Centre and radius of ' + m('x² + y² + 8x − 2y + 8 = 0'), m('(−4, 1)') + ', ' + m('3')],
      ['Circle on the diameter ' + m('(1, 2)') + ' to ' + m('(7, 10)'), m('(x − 4)² + (y − 6)² = 25')],
      ['Is ' + m('(6, 1)') + ' inside ' + m('(x − 3)² + (y + 2)² = 25') + '?', 'Yes — ' + m('18 < 25')],
      ['Tangent to ' + m('x² + y² = 25') + ' at ' + m('(3, 4)'), m('3x + 4y = 25')],
      ['Tangent to ' + m('x² + y² = 25') + ' at ' + m('(−4, 3)'), m('4x − 3y + 25 = 0')],
      ['Circle with centre ' + m('(2, 3)') + ' passing through ' + m('(5, 7)'), m('(x − 2)² + (y − 3)² = 25')]
    ],
    hard: [
      ['Show that ' + m('x² + y² − 4x + 6y + 20 = 0') + ' has no points', m('r² = −7')],
      ['Circle through ' + m('(0,0), (6,0), (0,8)'), m('(x − 3)² + (y − 4)² = 25')],
      ['Length of the tangent from ' + m('(10, 2)') + ' to ' + m('(x − 3)² + (y + 2)² = 25'), m(sr('40')) + ' ≈ ' + m('6.32')],
      ['The circles ' + m('x² + y² = 4') + ' and ' + m('(x − 5)² + y² = 9') + ': do they touch?', 'Yes, externally — ' + m('5 = 2 + 3')],
      ['Shortest distance from ' + m('(10, 2)') + ' to that circle', m(sr('65') + ' − 5') + ' ≈ ' + m('3.06')],
      ['Circle with centre on ' + m('y = x') + ', radius ' + m('5') + ', through ' + m('(1, 1)'), m('(x − a)² + (y − a)² = 25') + ' with ' + m('a = 1 ± ' + f('5', sr('2')))],
      ['Equation of the circle inscribed in the square with vertices ' + m('(0,0), (6,0), (6,6), (0,6)'), m('(x − 3)² + (y − 3)² = 9')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Show the completing-the-square step in full; the answer alone earns half the marks.',
  homework: [
    'Find the centre and radius of ' + m('x² + y² − 10x + 6y + 9 = 0') + '.',
    'Find the equation of the circle with ' + m('(−2, 1)') + ' and ' + m('(6, 7)') + ' as ends of a diameter.',
    'Decide whether ' + m('(1, 1)') + ', ' + m('(5, −3)') + ' and ' + m('(9, 4)') + ' lie inside, on or outside ' + m('(x − 5)² + (y + 3)² = 16') + '.',
    'Find the tangent to ' + m('x² + y² = 100') + ' at ' + m('(6, 8)') + ', and check it with ' + m('x₀x + y₀y = r²') + '.',
    'Explain in two sentences why ' + m('x² + y² + 2x + 2y + 5 = 0') + ' has no solutions.'
  ]
});

/* ============================== 29 ============================== */
G10_GEO.push({
  id: 'g10-29', stream: 'geo', grade: 10, quarter: 4, lessons: '57–58', hours: 2,
  title: 'Points of intersection of lines and circles [Cambridge revision]',
  subtitle: 'Substitute, solve the quadratic, and let the discriminant say how many points there are.',
  uz: 'Revision of Grade 9', uzPage: 'Geometry 9, pp. 133–146',
  cam: 'P1 3.5', camPage: 'Pure Mathematics 1, pp. 65–72', wb: 'Exercise 3E'
  ,
  objectives: [
    'Find where two lines meet by solving their equations simultaneously.',
    'Find where a line meets a circle by substitution.',
    'Use the discriminant to count intersections without solving.',
    'Find the condition for a line to be a tangent to a circle.'
  ],
  terms: [
    ['Point of intersection', 'Kesishish nuqtasi', 'Точка пересечения'],
    ['Simultaneous equations', 'Tenglamalar sistemasi', 'Система уравнений'],
    ['Substitution', 'O‘rniga qo‘yish', 'Подстановка'],
    ['Discriminant', 'Diskriminant', 'Дискриминант'],
    ['Tangent condition', 'Urinma sharti', 'Условие касания'],
    ['Secant', 'Kesuvchi', 'Секущая'],
    ['Chord length', 'Vatar uzunligi', 'Длина хорды'],
    ['Distance from a point to a line', 'Nuqtadan chiziqqa masofa', 'Расстояние от точки до прямой']
  ],
  timing: [[15, 'Two lines'], [25, 'A line and a circle'], [25, 'The discriminant decides'], [20, 'The tangent condition'], [15, 'Homework']],
  sections: [
    {
      h: 'Two lines',
      html: `<p>Two lines meet where both equations hold. Solve simultaneously — by substitution when one
      equation is already ${m('y = …')}, by elimination otherwise.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Pair</th><th>Relation</th><th>Meeting points</th></tr></thead>
      <tbody>
        <tr><td class="m">y = 2x + 1, y = −x + 7</td><td>different gradients</td><td class="m">(2, 5)</td></tr>
        <tr><td class="m">y = 2x + 1, y = 2x + 5</td><td>parallel</td><td>none</td></tr>
        <tr><td class="m">y = 2x + 1, 4x − 2y + 2 = 0</td><td>the same line</td><td>infinitely many</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Three outcomes, and what each looks like algebraically</div>
      A unique solution, no solution (a contradiction such as ${m('0 = 4')}), or infinitely many (an
      identity such as ${m('0 = 0')}). The algebra always tells you which before the picture does.</div>`
    },
    {
      h: 'A line and a circle',
      html: `<p>Make ${m('y')} the subject of the line, substitute into the circle, and a quadratic in
      ${m('x')} appears. Its roots are the ${m('x')}-coordinates of the meeting points.</p>
      <p><b>Example.</b> ${m('y = x + 1')} and ${m('x² + y² = 25')}:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td>substitute</td><td class="m">x² + (x + 1)² = 25</td></tr>
        <tr><td>expand</td><td class="m">2x² + 2x − 24 = 0</td></tr>
        <tr><td>simplify</td><td class="m">x² + x − 12 = 0</td></tr>
        <tr><td>solve</td><td class="m">x = 3, x = −4</td></tr>
        <tr><td>back-substitute</td><td class="m">(3, 4) and (−4, −3)</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Finish the job — find ${m('y')} too</span>
      A point has two coordinates. Stopping at ${m('x = 3, x = −4')} answers half the question and
      earns half the marks. Substitute back into the <b>line</b>, which is easier than the circle.</div>`
    },
    {
      h: 'The discriminant decides',
      html: `<p>The number of meeting points is the number of roots of that quadratic — so it is decided by
      ${m('D = b² − 4ac')} alone.</p>
      ${eq(m('D > 0') + ' two points   ' + m('D = 0') + ' tangent   ' + m('D < 0') + ' no points', true)}
      {{fig:lineCircleCases:Three positions, three signs of the discriminant.}}
      <p>This lets you answer “how many times does the line meet the circle?” without solving anything —
      form the quadratic, compute ${m('D')}, stop.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Line with ${m('x² + y² = 25')}</th><th>Quadratic</th><th class="m">D</th><th>Points</th></tr></thead>
      <tbody>
        <tr><td class="m">y = x + 1</td><td class="m">x² + x − 12 = 0</td><td class="m">49</td><td class="m">2</td></tr>
        <tr><td class="m">y = x + 5${sr('2')}</td><td class="m">2x² + 10${sr('2')}x + 25 = 0</td><td class="m">0</td><td class="m">1</td></tr>
        <tr><td class="m">y = x + 10</td><td class="m">2x² + 20x + 75 = 0</td><td class="m">−200</td><td class="m">0</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'The tangent condition',
      html: `<p>A line is a tangent exactly when ${m('D = 0')}. Setting ${m('D = 0')} and solving for the
      unknown in the line gives every tangent of that family.</p>
      <p><b>Example.</b> For which ${m('c')} is ${m('y = x + c')} a tangent to ${m('x² + y² = 25')}?</p>
      ${eq(m('2x² + 2cx + c² − 25 = 0') + ',   ' + m('D = 4c² − 8(c² − 25) = 200 − 4c²'), true)}
      <p>So ${m('D = 0')} when ${m('c² = 50')}, that is ${m('c = ±5' + sr('2'))} — the two tangents
      parallel to ${m('y = x')}, one on each side.</p>
      <div class="keybox"><div class="klabel">The geometric route, often faster</div>
      A line is a tangent when the distance from the centre to the line equals ${m('r')}:
      ${eq(m('d = ' + f('|ax₀ + by₀ + c|', sr('a² + b²'))) + ' = r', true)}
      For ${m('y = x + c')} and the centre ${m('(0, 0)')}: ${m(f('|c|', sr('2')) + ' = 5')}, giving
      ${m('c = ±5' + sr('2'))} in one line.</div>
      <p><b>Chord length.</b> If ${m('d < r')}, the half-chord, ${m('d')} and ${m('r')} form a right
      triangle, so the chord is ${m('2' + sr('r² − d²'))} — no quadratic needed.</p>`
    }
  ],
  examples: [
    {
      q: 'Find where ' + m('y = x + 1') + ' meets ' + m('x² + y² = 25') + '.',
      steps: [
        [m('x² + (x + 1)² = 25'), ''],
        [m('2x² + 2x − 24 = 0 ⇒ x² + x − 12 = 0'), ''],
        [m('x = 3') + ' or ' + m('x = −4'), ''],
        [m('(3, 4)') + ' and ' + m('(−4, −3)'), 'Back into the line.']
      ],
      ans: m('(3, 4)') + ' and ' + m('(−4, −3)')
    },
    {
      q: 'How many times does ' + m('y = 2x + 8') + ' meet ' + m('x² + y² = 9') + '?',
      steps: [
        [m('x² + (2x + 8)² = 9'), ''],
        [m('5x² + 32x + 55 = 0'), ''],
        [m('D = 1024 − 1100 = −76'), ''],
        ['Negative — the line misses the circle.', '']
      ],
      ans: 'No points of intersection'
    },
    {
      q: 'For which ' + m('c') + ' is ' + m('y = 2x + c') + ' a tangent to ' + m('x² + y² = 20') + '?',
      steps: [
        ['Distance from ' + m('(0,0)') + ': ' + m(f('|c|', sr('5'))), ''],
        [m(f('|c|', sr('5')) + ' = ' + sr('20') + ' = 2' + sr('5')), ''],
        [m('|c| = 10'), ''],
        [m('c = ±10'), '']
      ],
      ans: m('c = 10') + ' or ' + m('c = −10')
    },
    {
      q: 'Find the length of the chord cut on ' + m('x² + y² = 25') + ' by ' + m('y = 3') + '.',
      steps: [
        [m('d = 3') + ' from the centre.', ''],
        ['Half-chord ' + m(sr('25 − 9') + ' = 4'), 'Right triangle.'],
        ['Chord ' + m('= 8'), '']
      ],
      ans: m('8')
    }
  ],
  modelNote: 'Draw one circle and slide a ruler across it, stopping at each of the three positions; name the sign of D each time.',
  interactive: {
    type: 'quadratic',
    title: 'The discriminant, and how many points',
    hint: 'Two roots, one root, none — the same three cases.'
  },
  quiz: [
    { q: 'A line meets a circle in at most:', a: ['one point', 'two points', 'three', 'four'], c: 1, why: 'A quadratic has at most two roots.' },
    { q: m('D = 0') + ' means the line is:', a: ['a secant', 'a tangent', 'missing the circle', 'a diameter'], c: 1, why: 'One repeated root.' },
    { q: 'After finding ' + m('x') + ' you must:', a: ['stop', 'find ' + m('y') + ' from the line', 'find ' + m('y') + ' from the circle', 'square it'], c: 1, why: 'The line is easier.' },
    { q: 'Two parallel lines give:', a: ['one point', 'no solution', 'infinitely many', 'two points'], c: 1, why: 'A contradiction such as ' + m('0 = 4') + '.' },
    { q: 'A line is a tangent when its distance from the centre is:', a: ['zero', 'equal to ' + m('r'), 'less than ' + m('r'), 'greater than ' + m('r')], c: 1, why: 'Exactly touching.' },
    { q: 'The chord at distance ' + m('d') + ' from the centre has length:', a: [m(sr('r² − d²')), m('2' + sr('r² − d²')), m('2d'), m('r − d')], c: 1, why: 'Twice the half-chord.' }
  ],
  practice: {
    easy: [
      ['Where do ' + m('y = 2x + 1') + ' and ' + m('y = −x + 7') + ' meet?', m('(2, 5)')],
      ['Where do ' + m('y = 3x') + ' and ' + m('y = 3x + 2') + ' meet?', 'Nowhere — parallel'],
      ['Does ' + m('(3, 4)') + ' lie on ' + m('x² + y² = 25') + '?', 'Yes'],
      [m('D') + ' of ' + m('x² + x − 12 = 0'), m('49')],
      ['Chord of ' + m('x² + y² = 25') + ' along ' + m('y = 3'), m('8')],
      ['Chord of ' + m('x² + y² = 25') + ' along ' + m('y = 0'), m('10')],
      ['Distance from ' + m('(0,0)') + ' to ' + m('y = x + 4'), m(f('4', sr('2'))) + ' = ' + m('2' + sr('2'))]
    ],
    med: [
      ['Where does ' + m('y = x + 1') + ' meet ' + m('x² + y² = 25') + '?', m('(3, 4)') + ', ' + m('(−4, −3)')],
      ['How many points has ' + m('y = 2x + 8') + ' with ' + m('x² + y² = 9') + '?', 'None — ' + m('D = −76')],
      ['For which ' + m('c') + ' is ' + m('y = 2x + c') + ' a tangent to ' + m('x² + y² = 20') + '?', m('c = ±10')],
      ['For which ' + m('c') + ' is ' + m('y = x + c') + ' a tangent to ' + m('x² + y² = 25') + '?', m('c = ±5' + sr('2'))],
      ['Where does ' + m('x = 4') + ' meet ' + m('x² + y² = 25') + '?', m('(4, 3)') + ', ' + m('(4, −3)')],
      ['Chord of ' + m('x² + y² = 100') + ' along ' + m('y = 6'), m('16')],
      ['Where does ' + m('y = 2x') + ' meet ' + m('(x − 5)² + y² = 5') + '?', m('(1, 2)') + ', ' + m('(4, 8)')]
    ],
    hard: [
      ['Length of the chord of ' + m('x² + y² = 25') + ' on ' + m('y = x + 1'), m('7' + sr('2')) + ' ≈ ' + m('9.90')],
      ['The tangents from ' + m('(0, 10)') + ' to ' + m('x² + y² = 25'), m('y = ±' + sr('3') + 'x + 10')],
      ['For which ' + m('k') + ' does ' + m('y = kx') + ' touch ' + m('(x − 5)² + y² = 9') + '?', m('k = ±' + f('3', '4'))],
      ['Where do ' + m('x² + y² = 25') + ' and ' + m('(x − 8)² + y² = 25') + ' meet?', m('(4, 3)') + ', ' + m('(4, −3)')],
      ['Shortest distance from ' + m('(8, 6)') + ' to ' + m('x² + y² = 25'), m('5')],
      ['The line ' + m('3x + 4y = 25') + ' and the circle ' + m('x² + y² = 25') + ': how many points?', 'One — it is the tangent at ' + m('(3, 4)')],
      ['For which ' + m('r') + ' does ' + m('y = x + 6') + ' touch ' + m('x² + y² = r²') + '?', m('r = 3' + sr('2'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Always give both coordinates of every point you find.',
  homework: [
    'Find where ' + m('y = 2x − 5') + ' meets ' + m('x² + y² = 25') + '.',
    'Show that ' + m('y = x + 8') + ' does not meet ' + m('x² + y² = 25') + ', using the discriminant.',
    'Find the values of ' + m('c') + ' for which ' + m('y = 3x + c') + ' is a tangent to ' + m('x² + y² = 40') + '.',
    'Find the length of the chord cut on ' + m('x² + y² = 169') + ' by the line ' + m('y = 5') + '.',
    'Find where the circles ' + m('x² + y² = 25') + ' and ' + m('(x − 6)² + y² = 25') + ' intersect.'
  ]
});

/* ============================== 30 ============================== */
G10_GEO.push({
  id: 'g10-30', stream: 'geo', grade: 10, quarter: 4, lessons: '59–60', hours: 2,
  title: 'Vectors in the plane and transformations [Cambridge revision]',
  subtitle: 'A vector is a journey, not a place — and every transformation is one rule applied to all of them.',
  uz: 'Revision of Grade 8–9 vectors', uzPage: 'Geometry 9, pp. 147–170',
  cam: 'IGX 23.1–23.3', camPage: 'Core & Extended, pp. 590–612', wb: 'Exercise 23.1–23.3',
  objectives: [
    'Add, subtract and scale vectors in column form and geometrically.',
    'Compute the magnitude of a vector and the position vector of a point.',
    'Use vectors to prove that lines are parallel or that points are collinear.',
    'Describe fully a translation, reflection, rotation and enlargement.'
  ],
  terms: [
    ['Vector', 'Vektor', 'Вектор'],
    ['Column vector', 'Ustun vektor', 'Вектор-столбец'],
    ['Magnitude', 'Modul', 'Модуль'],
    ['Position vector', 'Radius-vektor', 'Радиус-вектор'],
    ['Resultant', 'Teng ta’sir etuvchi', 'Равнодействующая'],
    ['Scalar multiple', 'Skalyarga ko‘paytma', 'Умножение на число'],
    ['Translation', 'Parallel ko‘chirish', 'Параллельный перенос'],
    ['Reflection', 'Simmetriya', 'Отражение'],
    ['Rotation', 'Burish', 'Поворот'],
    ['Enlargement', 'Gomotetiya', 'Гомотетия'],
    ['Scale factor', 'O‘xshashlik koeffitsiyenti', 'Коэффициент подобия'],
    ['Invariant point', 'O‘zgarmas nuqta', 'Неподвижная точка']
  ],
  timing: [[20, 'Vectors as journeys'], [25, 'Arithmetic of vectors'], [20, 'Proving with vectors'], [25, 'The four transformations'], [10, 'Homework']],
  sections: [
    {
      h: 'Vectors as journeys',
      html: `<p>A vector has <b>magnitude</b> and <b>direction</b> but no position. The arrow from
      ${m('(1, 1)')} to ${m('(4, 5)')} and the arrow from ${m('(0, 0)')} to ${m('(3, 4)')} are the
      <b>same vector</b> ${m(col('3', '4'))}.</p>
      {{fig:vectorBasic:One vector, drawn twice — same length, same direction, different place.}}
      ${eq(m('|' + col('a', 'b') + '| = ' + sr('a² + b²')), true)}
      <div class="keybox"><div class="klabel">The position vector fixes it in place</div>
      The position vector of ${m('A')} is ${m('OA')}, drawn from the origin. Then for any two points
      ${eq(m('AB = OB − OA') + '   (“to minus from”)', true)}
      Getting this the wrong way round reverses every vector in the question, so learn it as a
      sentence.</div>`
    },
    {
      h: 'Arithmetic of vectors',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Operation</th><th>In columns</th><th>Geometrically</th></tr></thead>
      <tbody>
        <tr><td>add</td><td class="m">${col('a', 'b')} + ${col('c', 'd')} = ${col('a+c', 'b+d')}</td><td>nose to tail</td></tr>
        <tr><td>subtract</td><td class="m">${col('a', 'b')} − ${col('c', 'd')} = ${col('a−c', 'b−d')}</td><td>add the reverse</td></tr>
        <tr><td>scale</td><td class="m">k${col('a', 'b')} = ${col('ka', 'kb')}</td><td>same line, ${m('k')} times as long</td></tr>
      </tbody></table></div>
      {{fig:vectorAdd:Nose to tail — the resultant closes the triangle.}}
      <div class="keybox"><div class="klabel">Parallel means a scalar multiple</div>
      ${m('u')} and ${m('v')} are parallel exactly when ${m('v = ku')} for some number ${m('k')}. So
      ${m(col('3', '4'))} and ${m(col('9', '12'))} are parallel (${m('k = 3')});
      ${m(col('3', '4'))} and ${m(col('4', '3'))} are not.</div>
      <p><b>Unit vector.</b> Divide by the magnitude: the unit vector along
      ${m(col('3', '4'))} is ${m(f('1', '5') + col('3', '4'))}.</p>`
    },
    {
      h: 'Proving with vectors',
      html: `<p>Two standard proofs cover most questions.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>To prove</th><th>Show</th></tr></thead>
      <tbody>
        <tr><td>${m('AB')} is parallel to ${m('CD')}</td><td class="m">AB = k·CD</td></tr>
        <tr><td>${m('A')}, ${m('B')}, ${m('C')} are collinear</td><td class="m">AB = k·BC</td>
        </tr>
        <tr><td>${m('ABCD')} is a parallelogram</td><td class="m">AB = DC</td></tr>
        <tr><td>${m('M')} is the midpoint of ${m('AB')}</td><td class="m">OM = ${f('1', '2')}(OA + OB)</td></tr>
      </tbody></table></div>
      <p>The collinearity test differs from the parallel test only in that the two vectors share a
      <b>point</b>. Parallel plus a common point means one line — that is the whole argument, and it
      should be written in the answer.</p>
      <div class="warn"><span class="wl">A vector proof needs a concluding sentence</span>
      “${m('AB = 2·BC')}, and ${m('B')} is common to both, so ${m('A')}, ${m('B')} and ${m('C')} are
      collinear.” Without the second half the algebra proves only parallelism.</div>`
    },
    {
      h: 'The four transformations',
      html: `{{fig:transformations:Reflection, rotation and translation — each carries the shape to a congruent copy.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Transformation</th><th>Fully described by</th><th>Preserves</th></tr></thead>
      <tbody>
        <tr><td>translation</td><td>a column vector</td><td>size, shape, direction</td></tr>
        <tr><td>reflection</td><td>the mirror line</td><td>size and shape; reverses sense</td></tr>
        <tr><td>rotation</td><td>centre, angle and sense</td><td>size and shape</td></tr>
        <tr><td>enlargement</td><td>centre and scale factor ${m('k')}</td><td>shape only</td></tr>
      </tbody></table></div>
      {{fig:enlargement:An enlargement from a centre — lengths scale by k, areas by k².}}
      <div class="keybox"><div class="klabel">“Fully describe” is a mark scheme instruction</div>
      A rotation needs <b>three</b> pieces of information; giving two earns part marks. An enlargement
      needs the centre as well as ${m('k')}. And a negative ${m('k')} puts the image on the other side of
      the centre, inverted.</div>
      <p>Under an enlargement of factor ${m('k')}: lengths ${m('× k')}, areas ${m('× k²')}. Under the
      other three, lengths and areas are unchanged — they are <b>congruences</b>.</p>`
    }
  ],
  examples: [
    {
      q: 'With ' + m('A(1, 2)') + ' and ' + m('B(5, 9)') + ', find ' + m('AB') + ' and ' + m('|AB|') + '.',
      steps: [
        [m('AB = OB − OA'), '“to minus from”.'],
        [m('= ' + col('5', '9') + ' − ' + col('1', '2') + ' = ' + col('4', '7') + ''), ''],
        [m('|AB| = ' + sr('16 + 49') + ' = ' + sr('65') + ' ≈ 8.06'), '']
      ],
      ans: m(col('4', '7')) + ', ' + m(sr('65'))
    },
    {
      q: 'Show that ' + m('A(1, 1)') + ', ' + m('B(3, 4)') + ' and ' + m('C(7, 10)') + ' are collinear.',
      steps: [
        [m('AB = ' + col('2', '3') + ''), ''],
        [m('BC = ' + col('4', '6') + ''), ''],
        [m('BC = 2·AB'), 'Parallel.'],
        [m('B') + ' lies on both, so the three are collinear.', 'The concluding sentence.']
      ],
      ans: 'Collinear, since ' + m('BC = 2·AB') + ' and ' + m('B') + ' is common'
    },
    {
      q: 'Find the unit vector in the direction of ' + m(col('−6', '8')) + '.',
      steps: [
        [m('|v| = ' + sr('36 + 64') + ' = 10'), ''],
        [m(f('1', '10') + col('−6', '8')), ''],
        [m('= ' + col('−0.6', '0.8') + ''), 'Check: ' + m('0.36 + 0.64 = 1') + '.']
      ],
      ans: m(col('−0.6', '0.8'))
    },
    {
      q: 'A triangle of area ' + m('12') + ' is enlarged by factor ' + m('−2') + ' about ' + m('(1, 1)') + '. Describe the image.',
      steps: [
        ['Lengths double.', ''],
        ['Area ' + m('× k² = 4') + ', so ' + m('48') + '.', m('k²') + ' is positive either way.'],
        ['The image is on the opposite side of ' + m('(1, 1)') + ', inverted.', '']
      ],
      ans: 'Area ' + m('48') + ', inverted, on the far side of the centre'
    }
  ],
  modelNote: 'Cut a triangle from card and physically translate, reflect, rotate and enlarge it on squared paper.',
  interactive: {
    type: 'vectors',
    title: 'Adding vectors nose to tail',
    hint: 'Drag either arrow and watch the resultant.'
  },
  quiz: [
    { q: m('AB') + ' equals:', a: [m('OA − OB'), m('OB − OA'), m('OA + OB'), m('|OB|')], c: 1, why: '“To minus from”.' },
    { q: m('|' + col('3', '4') + '|') + ' is:', a: [m('7'), m('5'), m('12'), m('25')], c: 1, why: m(sr('9 + 16')) + '.' },
    { q: 'Two vectors are parallel when:', a: ['they are equal', 'one is a scalar multiple of the other', 'they have equal magnitude', 'they meet'], c: 1, why: m('v = ku') + '.' },
    { q: 'Collinearity needs, beyond parallel vectors:', a: ['equal length', 'a common point', 'the origin', 'nothing'], c: 1, why: 'Otherwise two parallel lines.' },
    { q: 'A rotation is fully described by:', a: ['the angle', 'the centre and angle', 'centre, angle and sense', 'the centre'], c: 2, why: 'Three pieces.' },
    { q: 'Under an enlargement of factor ' + m('3') + ', areas multiply by:', a: [m('3'), m('6'), m('9'), m('27')], c: 2, why: m('k²') + '.' }
  ],
  practice: {
    easy: [
      [m(col('2', '3')) + ' + ' + m(col('4', '1')), m(col('6', '4'))],
      [m(col('5', '2')) + ' − ' + m(col('1', '6')), m(col('4', '−4'))],
      [m('3' + col('2', '−1') + ''), m(col('6', '−3'))],
      [m('|' + col('3', '4') + '|'), m('5')],
      [m('|' + col('5', '12') + '|'), m('13')],
      [m('AB') + ' for ' + m('A(1, 2), B(5, 9)'), m(col('4', '7'))],
      ['Area factor of an enlargement with ' + m('k = 4'), m('16')]
    ],
    med: [
      [m('|AB|') + ' for ' + m('A(1, 2), B(5, 9)'), m(sr('65')) + ' ≈ ' + m('8.06')],
      ['Unit vector along ' + m(col('−6', '8')), m(col('−0.6', '0.8'))],
      ['Are ' + m(col('3', '4')) + ' and ' + m(col('9', '12')) + ' parallel?', 'Yes, ' + m('k = 3')],
      ['Are ' + m('A(1,1), B(3,4), C(7,10)') + ' collinear?', 'Yes — ' + m('BC = 2·AB')],
      ['Midpoint of ' + m('A(2, 3)') + ' and ' + m('B(8, 11)') + ' as a position vector', m(col('5', '7'))],
      ['Describe fully: ' + m('(1,1) → (4,3)') + ' for every point', 'Translation by ' + m(col('3', '2'))],
      ['A shape of area ' + m('12') + ' enlarged by ' + m('k = −2') + ': new area', m('48')]
    ],
    hard: [
      ['Find ' + m('k') + ' so that ' + m(col('k', '6')) + ' is parallel to ' + m(col('2', '3')), m('k = 4')],
      [m('OP = ' + col('1', '2') + '') + ', ' + m('OQ = ' + col('7', '5') + '') + ': find the point dividing ' + m('PQ') + ' in ' + m('1 : 2'), m('(3, 3)')],
      ['Prove that the diagonals of a parallelogram bisect each other, using vectors', 'Both midpoints are ' + m(f('1', '2') + '(OA + OC))')],
      ['A rotation of ' + m('90°') + ' anticlockwise about ' + m('O') + ' sends ' + m('(3, 1)') + ' to:', m('(−1, 3)')],
      ['A reflection in ' + m('y = x') + ' sends ' + m('(4, −2)') + ' to:', m('(−2, 4)')],
      ['An enlargement centre ' + m('(1, 1)') + ', factor ' + m('3') + ' sends ' + m('(3, 2)') + ' to:', m('(7, 4)')],
      ['Show that ' + m('ABCD') + ' with ' + m('A(0,0), B(4,1), C(6,5), D(2,4)') + ' is a parallelogram', m('AB = DC = ' + col('4', '1') + '')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every transformation answer must be a full description, not a name.',
  homework: [
    'With ' + m('A(−1, 3)') + ' and ' + m('B(5, −5)') + ', find ' + m('AB') + ', ' + m('|AB|') + ' and the unit vector along ' + m('AB') + '.',
    'Show that ' + m('P(2, 1)') + ', ' + m('Q(5, 7)') + ' and ' + m('R(9, 15)') + ' are collinear, and write the concluding sentence in full.',
    'Find ' + m('k') + ' so that ' + m(col('6', 'k')) + ' is parallel to ' + m(col('4', '10')) + '.',
    'Describe fully the transformation that sends ' + m('(1, 2)') + ' to ' + m('(−2, 1)') + ' and ' + m('(3, 2)') + ' to ' + m('(−2, 3)') + '.',
    'A triangle of area ' + m('9') + ' is enlarged by factor ' + m('' + f('2', '3')) + ' about the origin. Find the area of the image.'
  ]
});

/* ============================== 31 ============================== */
G10_GEO.push({
  id: 'g10-31', stream: 'geo', grade: 10, quarter: 4, lessons: '61–62', hours: 2,
  title: 'Control work 4, and work on the mistakes',
  subtitle: 'Coordinate geometry in one paper, then the plane methods drawn as a single map.',
  uz: 'Geometry 10, Nazorat ishi 4', uzPage: 'pp. 253–256',
  cam: 'P1 3 review', camPage: 'Pure Mathematics 1, pp. 73–76', wb: 'Control paper G4',
  objectives: [
    'Apply the line, circle and vector methods of Lessons 53–60 under time.',
    'Choose between the algebraic and the geometric route to a tangent.',
    'Classify each lost mark and rewrite the solution in full.',
    'Draw the coordinate block as one map.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Coordinate method', 'Koordinatalar usuli', 'Координатный метод'],
    ['Perpendicular bisector', 'O‘rta perpendikulyar', 'Серединный перпендикуляр'],
    ['Discriminant', 'Diskriminant', 'Дискриминант'],
    ['Tangent', 'Urinma', 'Касательная'],
    ['Position vector', 'Radius-vektor', 'Радиус-вектор'],
    ['Concept map', 'Tushunchalar xaritasi', 'Карта понятий'],
    ['Target', 'Maqsad', 'Цель']
  ],
  timing: [[3, 'Instructions'], [42, 'The paper'], [12, 'Answers'], [23, 'Diagnosis and rewrite'], [10, 'The map']],
  sections: [
    {
      h: 'The paper — 35 marks, 42 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>${m('A(−1, 2)')}, ${m('B(7, 8)')}: find ${m('|AB|')}, the midpoint and the gradient</td><td class="m">5</td><td>L53–54</td></tr>
        <tr><td>2</td><td>The same points: find the perpendicular bisector of ${m('AB')}</td><td class="m">5</td><td>L53–54</td></tr>
        <tr><td>3</td><td>Find the centre and radius of ${m('x² + y² − 8x + 2y − 8 = 0')}</td><td class="m">5</td><td>L55–56</td></tr>
        <tr><td>4</td><td>Find where ${m('y = x − 1')} meets that circle, and the length of the chord</td><td class="m">7</td><td>L57–58</td></tr>
        <tr><td>5</td><td>Find the values of ${m('c')} for which ${m('y = 2x + c')} is a tangent to ${m('x² + y² = 45')}</td><td class="m">6</td><td>L57–58</td></tr>
        <tr><td>6</td><td>Show that ${m('P(1, 2)')}, ${m('Q(4, 8)')} and ${m('R(7, 14)')} are collinear, using vectors</td><td class="m">7</td><td>L59–60</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks actually go</div>
      Q2 carries one mark for the negative reciprocal and one for using the midpoint; Q3 one for the
      sign of the centre; Q4 one for giving both coordinates of each point; Q6 one for the concluding
      sentence. Five of the thirty-five marks are for a habit, not a calculation.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>gradient inverted</td><td class="m">${f('x₂ − x₁', 'y₂ − y₁')}</td><td>rise over run, in that order</td></tr>
        <tr><td>centre sign</td><td class="m">(x − 3)² ⇒ centre −3</td><td>reverse the bracket sign</td></tr>
        <tr><td>half a point</td><td class="m">x = 3, x = −4</td><td>substitute back for ${m('y')}</td></tr>
        <tr><td>bisector not through ${m('M')}</td><td>right gradient, wrong line</td><td>two conditions, both needed</td></tr>
        <tr><td>tangent by guessing</td><td>no ${m('D')} and no distance</td><td>either route, but write one</td></tr>
        <tr><td>vector proof unfinished</td><td class="m">QR = 2·PQ</td><td>add “and ${m('Q')} is common”</td></tr>
        <tr><td>${m('AB')} reversed</td><td class="m">OA − OB</td><td>“to minus from”</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole question. A rewritten line is forgotten by
      Friday; a rewritten solution is not.</p>`
    },
    {
      h: 'The coordinate block as one map',
      html: `<p>Six boxes, links written as sentences:</p>
      <ul>
        <li><b>two points</b> → <b>length, midpoint, gradient</b> — “three formulas, one subtraction each”</li>
        <li><b>gradient</b> → <b>parallel and perpendicular</b> — “equal, or negative reciprocal”</li>
        <li><b>midpoint + perpendicular</b> → <b>perpendicular bisector</b> — “equidistant from both”</li>
        <li><b>centre and radius</b> → <b>circle equation</b> — “the distance formula, squared”</li>
        <li><b>substitute</b> → <b>quadratic</b> → <b>discriminant</b> — “two, one or no points”</li>
        <li><b>vector</b> → <b>parallel + common point</b> — “collinear”</li>
      </ul>
      {{fig:circleEquation:The centre-and-radius picture that half the paper rests on.}}
      <div class="keybox"><div class="klabel">Two routes to a tangent, and when to use each</div>
      The <b>discriminant</b> route always works but is longer. The <b>distance</b> route,
      ${m(f('|ax₀ + by₀ + c|', sr('a² + b²')) + ' = r')}, is one line — use it whenever the circle's
      centre is easy to write down.</div>`
    },
    {
      h: 'Looking forward',
      html: `<p>Lessons 63–68 leave the plane and return to space: parallelism and perpendicularity,
      sections of polyhedra and orthogonal projection, then the annual paper. Nothing new is introduced —
      it is Quarters I to III, revisited with a year's practice behind them.</p>
      <div class="keybox"><div class="klabel">One habit to carry forward</div>
      Coordinate geometry rewarded drawing the points before calculating. Solid geometry rewards drawing
      the solid before naming the angle. In both, the sketch is where the marks are decided.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q2: the perpendicular bisector of ' + m('A(−1, 2)') + ' and ' + m('B(7, 8)') + '.',
      steps: [
        [m('M = (3, 5)'), ''],
        [m('m_{AB} = ' + f('6', '8') + ' = ' + f('3', '4')), ''],
        [m('m = −' + f('4', '3')), 'Negative reciprocal.'],
        [m('y − 5 = −' + f('4', '3') + '(x − 3) ⇒ 4x + 3y = 27'), '']
      ],
      ans: m('4x + 3y = 27')
    },
    {
      q: 'Model answer, Q4: where ' + m('y = x − 1') + ' meets ' + m('x² + y² − 8x + 2y − 8 = 0') + ', and the chord length.',
      steps: [
        ['Centre ' + m('(4, −1)') + ', ' + m('r = 5') + '.', 'From Q3.'],
        [m('x² + (x − 1)² − 8x + 2(x − 1) − 8 = 0 ⇒ 2x² − 10x − 9 = 0'), ''],
        [m('x = ' + f('10 ± ' + sr('172'), '4')) + ', so ' + m('x ≈ 5.78') + ' and ' + m('x ≈ −0.78') + '.', ''],
        ['Distance from the centre to the line ' + m(f('|4 − (−1) − 1|', sr('2')) + ' = ' + f('4', sr('2'))) + '; chord ' + m('2' + sr('25 − 8') + ' = 2' + sr('17') + ' ≈ 8.25') + '.', 'The faster route.']
      ],
      ans: 'Chord ' + m('2' + sr('17')) + ' ≈ ' + m('8.25')
    },
    {
      q: 'Model answer, Q5: for which ' + m('c') + ' is ' + m('y = 2x + c') + ' a tangent to ' + m('x² + y² = 45') + '?',
      steps: [
        [m('r = ' + sr('45') + ' = 3' + sr('5')), ''],
        ['Distance from ' + m('(0, 0)') + ' to ' + m('2x − y + c = 0') + ' is ' + m(f('|c|', sr('5'))) + '.', ''],
        [m(f('|c|', sr('5')) + ' = 3' + sr('5') + ' ⇒ |c| = 15'), ''],
        [m('c = ±15'), '']
      ],
      ans: m('c = 15') + ' or ' + m('c = −15')
    }
  ],
  modelNote: 'Work Q5 both ways on the board — discriminant and distance — and time each; the class will not use the long one again.',
  interactive: {
    type: 'quiz',
    title: 'Ten questions on the coordinate block',
    hint: 'One from each idea of Lessons 53–60.',
    items: [
      { q: 'Gradient through ' + m('(1, 2)') + ' and ' + m('(5, 10)') + ':', a: [m('2'), m(f('1', '2')), m('8'), m('4')], c: 0, why: m(f('8', '4')) + '.' },
      { q: 'Perpendicular to gradient ' + m(f('3', '4')) + ':', a: [m(f('4', '3')), m('−' + f('4', '3')), m('−' + f('3', '4')), m(f('3', '4'))], c: 1, why: 'Negative reciprocal.' },
      { q: 'Centre of ' + m('(x + 2)² + (y − 5)² = 9') + ':', a: [m('(2, −5)'), m('(−2, 5)'), m('(2, 5)'), m('(−2, −5)')], c: 1, why: 'Reverse the signs.' },
      { q: 'Its radius:', a: [m('9'), m('3'), m('81'), m(sr('3'))], c: 1, why: m('r² = 9') + '.' },
      { q: 'A line meets a circle in at most:', a: [m('1'), m('2'), m('3'), m('4')], c: 1, why: 'A quadratic.' },
      { q: m('D = 0') + ' means:', a: ['a secant', 'a tangent', 'no meeting', 'a diameter'], c: 1, why: 'One repeated root.' },
      { q: 'The chord at distance ' + m('d') + ':', a: [m(sr('r² − d²')), m('2' + sr('r² − d²')), m('2d'), m('r + d')], c: 1, why: 'Twice the half-chord.' },
      { q: m('AB') + ' equals:', a: [m('OA − OB'), m('OB − OA'), m('OA + OB'), m('|AB|')], c: 1, why: '“To minus from”.' },
      { q: 'Collinear needs, beyond parallel:', a: ['equal length', 'a common point', 'the origin', 'nothing'], c: 1, why: 'Or two parallel lines.' },
      { q: 'An enlargement of factor ' + m('k') + ' multiplies areas by:', a: [m('k'), m('k²'), m('k³'), m('2k')], c: 1, why: 'Two dimensions.' }
    ]
  },
  quiz: [
    { q: 'Q2 needs two things:', a: ['two points', 'the midpoint and the perpendicular gradient', 'the length', 'the radius'], c: 1, why: 'Both conditions.' },
    { q: 'The faster route in Q5 is:', a: ['the discriminant', 'the distance from the centre', 'guessing', 'a sketch'], c: 1, why: 'One line.' },
    { q: 'A vector proof of collinearity ends with:', a: ['the ratio', 'a sentence naming the common point', 'the magnitude', 'nothing'], c: 1, why: 'Otherwise only parallel.' },
    { q: 'Lessons 63–68 return to:', a: ['circles', 'solid geometry', 'probability', 'vectors in the plane'], c: 1, why: 'Space, and the annual paper.' }
  ],
  practice: {
    easy: [
      [m('|AB|') + ' for ' + m('A(−1, 2), B(7, 8)'), m('10')],
      ['Midpoint of the same', m('(3, 5)')],
      ['Gradient of the same', m(f('3', '4'))],
      ['Centre of ' + m('x² + y² − 8x + 2y − 8 = 0'), m('(4, −1)')],
      ['Radius of the same', m('5')],
      ['Gradient perpendicular to ' + m(f('3', '4')), m('−' + f('4', '3'))],
      [m('PQ') + ' for ' + m('P(1, 2), Q(4, 8)'), m(col('3', '6'))]
    ],
    med: [
      ['Perpendicular bisector of ' + m('A(−1, 2)') + ' and ' + m('B(7, 8)'), m('4x + 3y = 27')],
      ['Chord of ' + m('x² + y² − 8x + 2y − 8 = 0') + ' on ' + m('y = x − 1'), m('2' + sr('17')) + ' ≈ ' + m('8.25')],
      ['Tangency values of ' + m('c') + ' for ' + m('y = 2x + c') + ' and ' + m('x² + y² = 45'), m('c = ±15')],
      ['Are ' + m('P(1,2), Q(4,8), R(7,14)') + ' collinear?', 'Yes — ' + m('QR = PQ') + ', ' + m('Q') + ' common'],
      ['Line through ' + m('(2, 3)') + ' parallel to ' + m('4x + 3y = 1'), m('4x + 3y = 17')],
      ['Distance from ' + m('(4, −1)') + ' to ' + m('y = x − 1'), m(f('4', sr('2'))) + ' = ' + m('2' + sr('2'))],
      ['Circle centre ' + m('(4, −1)') + ' radius ' + m('5') + ', in expanded form', m('x² + y² − 8x + 2y − 8 = 0')]
    ],
    hard: [
      ['Tangent to ' + m('x² + y² = 45') + ' at ' + m('(6, 3)'), m('6x + 3y = 45') + ', i.e. ' + m('2x + y = 15')],
      ['Circumcentre of ' + m('(−1, 2), (7, 8), (7, 2)'), m('(3, 5)')],
      ['The line ' + m('4x + 3y = 27') + ' and the circle ' + m('x² + y² = 25') + ': how many points?', 'None — ' + m('d = 5.4 > 5')],
      ['Area of the triangle ' + m('(0, 0), (8, 0), (3, 6)'), m('24')],
      ['Find ' + m('k') + ' so that ' + m(col('k', '9')) + ' is parallel to ' + m(col('2', '6')), m('k = 3')],
      ['Shortest distance from ' + m('(10, 5)') + ' to the circle ' + m('(x − 4)² + (y + 1)² = 25'), m(sr('72') + ' − 5') + ' ≈ ' + m('3.49')],
      ['Show that the perpendicular bisectors of the sides of ' + m('(0,0), (6,0), (0,8)') + ' meet at ' + m('(3, 4)'), 'All three pass through it']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Bring the concept map to Lesson 63; the solid-geometry revision assumes the plane work is secure.',
  homework: [
    'Rewrite in full every control-work question that lost a mark, naming the slip in the margin.',
    'Complete the concept map with all six links written as sentences.',
    'Find the values of ' + m('c') + ' for which ' + m('y = x + c') + ' is a tangent to ' + m('x² + y² = 18') + ', by both routes.',
    'Write your target for the revision block in one checkable sentence, and date it.'
  ]
});

/* ============================== 32 ============================== */
G10_GEO.push({
  id: 'g10-32', stream: 'geo', grade: 10, quarter: 4, lessons: '63–64', hours: 2,
  title: 'Revision — parallelism and perpendicularity in space',
  subtitle: 'The whole year of solid geometry, reduced to eight statements and one picture each.',
  uz: 'Geometry 10, Chapters II–IV review', uzPage: 'pp. 257–266',
  cam: 'P1 spatial review', camPage: 'Pure Mathematics 1, pp. 77–80', wb: 'Revision set G1',
  objectives: [
    'State the positions of two lines, a line and a plane, and two planes.',
    'Use the criteria for a line parallel to a plane and for two parallel planes.',
    'Use the criterion for a line perpendicular to a plane, and the three-perpendiculars theorem.',
    'Compute the angle between a line and a plane and between two planes.'
  ],
  terms: [
    ['Skew lines', 'Ayqash to‘g‘ri chiziqlar', 'Скрещивающиеся прямые'],
    ['Parallel to a plane', 'Tekislikka parallel', 'Параллельная плоскости'],
    ['Parallel planes', 'Parallel tekisliklar', 'Параллельные плоскости'],
    ['Perpendicular to a plane', 'Tekislikka perpendikulyar', 'Перпендикулярная плоскости'],
    ['Three perpendiculars theorem', 'Uch perpendikulyar teoremasi', 'Теорема о трёх перпендикулярах'],
    ['Angle between a line and a plane', 'To‘g‘ri chiziq va tekislik orasidagi burchak', 'Угол между прямой и плоскостью'],
    ['Dihedral angle', 'Ikki yoqli burchak', 'Двугранный угол'],
    ['Orthogonal projection', 'Ortogonal proyeksiya', 'Ортогональная проекция'],
    ['Oblique', 'Og‘ma', 'Наклонная'],
    ['Foot of the perpendicular', 'Perpendikulyar asosi', 'Основание перпендикуляра']
  ],
  timing: [[15, 'Positions'], [25, 'Parallelism'], [25, 'Perpendicularity'], [20, 'Angles'], [15, 'Homework']],
  sections: [
    {
      h: 'Positions',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Pair</th><th>Possible positions</th></tr></thead>
      <tbody>
        <tr><td>two lines</td><td>intersecting · parallel · <b>skew</b></td></tr>
        <tr><td>a line and a plane</td><td>the line lies in it · parallel · meets it in one point</td></tr>
        <tr><td>two planes</td><td>coincident · parallel · meeting in a line</td></tr>
      </tbody></table></div>
      {{fig:skewLines:Skew lines — not parallel, and never meeting. The case that has no analogue in the plane.}}
      <div class="warn"><span class="wl">Skew is the case that only space has</span>
      Two lines that do not meet need not be parallel — they may simply lie in different planes. In a
      cube the twelve edges give ${m('18')} parallel pairs, ${m('24')} intersecting pairs and ${m('24')}
      skew pairs, and ${m('18 + 24 + 24 = 66 = C(12, 2)')}.</div>`
    },
    {
      h: 'Parallelism',
      html: `<div class="keybox"><div class="klabel">The two criteria</div>
      <ul>
        <li>A line is <b>parallel to a plane</b> if it is parallel to some line lying in that plane.</li>
        <li>Two planes are <b>parallel</b> if two intersecting lines of one are parallel to two
        intersecting lines of the other.</li>
      </ul>
      In both, the word <b>intersecting</b> is essential: two parallel lines of one plane parallel to two
      of the other prove nothing.</div>
      {{fig:lineParallelPlane:A line parallel to a plane — it is parallel to a line drawn in the plane.}}
      {{fig:parallelPlanes:Two intersecting lines of each, in parallel pairs — that is the criterion.}}
      <p>Two consequences used constantly:</p>
      <ul>
        <li>If ${m('α ∥ β')} and a third plane cuts both, the two lines of intersection are parallel.</li>
        <li>Segments of parallel lines between parallel planes are equal.</li>
      </ul>`
    },
    {
      h: 'Perpendicularity',
      html: `<div class="keybox"><div class="klabel">The criterion, and the theorem</div>
      A line is <b>perpendicular to a plane</b> if it is perpendicular to two <b>intersecting</b> lines
      of that plane. It is then perpendicular to <b>every</b> line of the plane.
      ${eq('<b>Three perpendiculars.</b> A line in a plane is perpendicular to an oblique if and only if it is perpendicular to the oblique’s projection.', true)}</div>
      {{fig:perpLinePlane:Perpendicular to two intersecting lines — and therefore to all of them.}}
      {{fig:threePerp:The oblique, its projection, and the line in the plane — perpendicular to one iff to the other.}}
      <p>The three-perpendiculars theorem is what turns a space problem into a plane one: it lets you
      drop from a slanted segment to its shadow and work entirely in the base.</p>`
    },
    {
      h: 'Angles',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Angle</th><th>How to construct it</th></tr></thead>
      <tbody>
        <tr><td>line and plane</td><td>between the line and its <b>orthogonal projection</b></td></tr>
        <tr><td>two planes (dihedral)</td><td>between two rays perpendicular to the edge, one in each face</td></tr>
        <tr><td>two skew lines</td><td>translate one until they meet; the angle between the translates</td></tr>
      </tbody></table></div>
      {{fig:dihedralAngle:The linear angle of a dihedral — both rays perpendicular to the edge.}}
      {{fig:orthoProjection:The projection is the shadow cast straight down; the angle is measured to it.}}
      <div class="keybox"><div class="klabel">Every angle question becomes one right triangle</div>
      Find the foot of the perpendicular, name the projection, and a right triangle appears with the
      slant as hypotenuse. Then ${m('cos θ = ' + f('projection', 'slant'))} or
      ${m('tan θ = ' + f('height', 'projection'))} — plane trigonometry from that point on.</div>`
    }
  ],
  examples: [
    {
      q: 'In a cube ' + m('ABCDA₁B₁C₁D₁') + ' of edge ' + m('a') + ', find the angle between ' + m('AC₁') + ' and the base.',
      steps: [
        ['The projection of ' + m('AC₁') + ' on the base is ' + m('AC') + '.', ''],
        [m('AC = a' + sr('2')) + ', ' + m('CC₁ = a'), ''],
        [m('tan θ = ' + f('a', 'a' + sr('2')) + ' = ' + f('1', sr('2'))), ''],
        [m('θ ≈ 35.3°'), '']
      ],
      ans: m('≈ 35.3°')
    },
    {
      q: 'In the same cube, find the angle between the planes ' + m('ABC₁D₁') + ' and the base.',
      steps: [
        ['The edge of the dihedral is ' + m('AB') + '.', ''],
        [m('BC ⟂ AB') + ' in the base; ' + m('BC₁ ⟂ AB') + ' in the upper face.', 'Both perpendicular to the edge.'],
        [m('tan θ = ' + f('CC₁', 'BC') + ' = 1'), ''],
        [m('θ = 45°'), '']
      ],
      ans: m('45°')
    },
    {
      q: 'Prove that a line perpendicular to two intersecting lines of a plane is perpendicular to a third line of that plane.',
      steps: [
        ['Let ' + m('l ⟂ a') + ' and ' + m('l ⟂ b') + ', with ' + m('a ∩ b = O') + '.', ''],
        ['Any line ' + m('c') + ' of the plane through ' + m('O') + ' is a combination of directions of ' + m('a') + ' and ' + m('b') + '.', ''],
        ['So ' + m('l ⟂ c') + ' as well.', 'This is the criterion, and its point.']
      ],
      ans: 'Perpendicular to two intersecting lines means perpendicular to all'
    },
    {
      q: 'A point is ' + m('12') + ' cm from a plane. Two obliques of lengths ' + m('13') + ' and ' + m('15') + ' cm are drawn. Find their projections.',
      steps: [
        [m(sr('169 − 144') + ' = 5'), ''],
        [m(sr('225 − 144') + ' = 9'), ''],
        ['Projections ' + m('5') + ' cm and ' + m('9') + ' cm.', 'The longer oblique has the longer projection.']
      ],
      ans: m('5') + ' cm and ' + m('9') + ' cm'
    }
  ],
  modelNote: 'Use a wire cube and a torch: the shadow on the desk is the orthogonal projection, and every angle question becomes visible.',
  interactive: {
    type: 'space3d',
    title: 'Lines and planes in a box',
    hint: 'Turn the box and find the projection of each diagonal.'
  },
  quiz: [
    { q: 'Two lines that never meet are:', a: ['always parallel', 'parallel or skew', 'always skew', 'intersecting'], c: 1, why: 'Space has both.' },
    { q: 'A line is perpendicular to a plane if it is perpendicular to:', a: ['one line of it', 'two intersecting lines of it', 'two parallel lines of it', 'the edge'], c: 1, why: 'Intersecting is essential.' },
    { q: 'The angle between a line and a plane is measured to:', a: ['any line of the plane', 'its orthogonal projection', 'the normal', 'the edge'], c: 1, why: 'It is the smallest such angle.' },
    { q: 'A dihedral angle is measured by:', a: ['any two rays', 'two rays perpendicular to the edge', 'the edge itself', 'the projection'], c: 1, why: 'The linear angle.' },
    { q: 'The three-perpendiculars theorem connects:', a: ['two planes', 'an oblique and its projection', 'two skew lines', 'two obliques'], c: 1, why: 'Perpendicular to one iff to the other.' },
    { q: 'In a cube, the number of skew edge pairs is:', a: [m('18'), m('24'), m('12'), m('66')], c: 1, why: m('66 − 18 − 24') + '.' }
  ],
  practice: {
    easy: [
      ['Three positions of two lines in space', 'Intersecting, parallel, skew'],
      ['Three positions of a line and a plane', 'In it, parallel, meeting in a point'],
      ['A line ⟂ to two intersecting lines of a plane is:', 'Perpendicular to the plane'],
      ['The angle between a line and a plane is measured to:', 'Its projection'],
      ['Space diagonal of a cube of edge ' + m('a'), m('a' + sr('3'))],
      ['Face diagonal of a cube of edge ' + m('a'), m('a' + sr('2'))],
      ['Projection of an oblique ' + m('13') + ' from a point ' + m('12') + ' from the plane', m('5')]
    ],
    med: [
      ['Angle between ' + m('AC₁') + ' and the base in a cube', m('≈ 35.3°')],
      ['Angle between ' + m('ABC₁D₁') + ' and the base in a cube', m('45°')],
      ['Angle between two space diagonals of a cube', m('≈ 70.5°') + ' or ' + m('≈ 109.5°')],
      ['Number of parallel edge pairs in a cube', m('18')],
      ['Number of intersecting edge pairs in a cube', m('24')],
      ['Number of skew edge pairs in a cube', m('24')],
      ['Two obliques of ' + m('15') + ' and ' + m('20') + ' from a point ' + m('12') + ' from a plane: projections', m('9') + ' and ' + m('16')]
    ],
    hard: [
      ['Distance from a vertex of a cube of edge ' + m('a') + ' to the diagonal of the opposite face', m(f('a' + sr('6'), '3'))],
      ['Angle between ' + m('AB₁') + ' and ' + m('BC₁') + ' in a cube', m('60°')],
      ['Distance between two skew edges of a cube of edge ' + m('a'), m('a')],
      ['A rectangular box ' + m('3 × 4 × 12') + ': the angle of the space diagonal with the base', m('≈ 67.4°')],
      ['Prove that if ' + m('α ∥ β') + ' and ' + m('γ') + ' cuts both, the lines of intersection are parallel', 'They lie in ' + m('γ') + ' and cannot meet'],
      ['A point ' + m('6') + ' from a plane: the locus of feet of obliques of length ' + m('10'), 'A circle of radius ' + m('8')],
      ['A regular tetrahedron of edge ' + m('a') + ': the angle between a lateral edge and the base', m('≈ 54.7°')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw the cube for every question; the marks live in the picture.',
  homework: [
    'List the three positions of two lines, of a line and a plane, and of two planes, with one sketch each.',
    'In a cube of edge ' + m('6') + ' cm, find the angle between the space diagonal and the base.',
    'In the same cube, find the dihedral angle between the plane through ' + m('A') + ', ' + m('B') + ', ' + m('C₁') + ' and the base.',
    'A point is ' + m('8') + ' cm from a plane; an oblique from it is ' + m('17') + ' cm long. Find the projection.',
    'State the three-perpendiculars theorem and draw the picture that goes with it.'
  ]
});

/* ============================== 33 ============================== */
G10_GEO.push({
  id: 'g10-33', stream: 'geo', grade: 10, quarter: 4, lessons: '65–66', hours: 2,
  title: 'Revision — sections of polyhedra and orthogonal projection',
  subtitle: 'Three rules build any section; one shadow measures any angle.',
  uz: 'Geometry 10, Chapter IV review', uzPage: 'pp. 267–276',
  cam: 'P1 spatial review', camPage: 'Pure Mathematics 1, pp. 81–84', wb: 'Revision set G2',
  objectives: [
    'Construct the section of a cube or prism by a plane through three points.',
    'Use the trace of a cutting plane on a face of the solid.',
    'Compute the area of a section by projecting it onto the base.',
    'Use orthogonal projection to find lengths and angles.'
  ],
  terms: [
    ['Section (cross-section)', 'Kesim', 'Сечение'],
    ['Cutting plane', 'Kesuvchi tekislik', 'Секущая плоскость'],
    ['Trace', 'Iz', 'След'],
    ['Polyhedron', 'Ko‘pyoq', 'Многогранник'],
    ['Face', 'Yoq', 'Грань'],
    ['Edge', 'Qirra', 'Ребро'],
    ['Orthogonal projection', 'Ortogonal proyeksiya', 'Ортогональная проекция'],
    ['Projection of an area', 'Yuza proyeksiyasi', 'Проекция площади'],
    ['Diagonal section', 'Diagonal kesim', 'Диагональное сечение'],
    ['Midpoint section', 'O‘rta kesim', 'Среднее сечение']
  ],
  timing: [[15, 'Three rules'], [30, 'Building a section'], [20, 'Naming the shape'], [20, 'Areas by projection'], [15, 'Homework']],
  sections: [
    {
      h: 'Three rules',
      html: `<div class="keybox"><div class="klabel">Everything a section needs</div>
      <ol>
        <li>Two points of the cutting plane on the <b>same face</b> join up — the segment between them
        is part of the section.</li>
        <li>The cutting plane meets two <b>parallel faces</b> in <b>parallel</b> lines.</li>
        <li>Where the cutting plane meets the plane of a face outside the solid, that point is on the
        <b>trace</b>, and can be used to reach a further face.</li>
      </ol></div>
      {{fig:cubeSection:A plane through three points of a cube — each segment lies in one face.}}
      <div class="warn"><span class="wl">A section is a polygon, and its sides lie in faces</span>
      Every side of a section is the intersection of the cutting plane with <b>one face</b>. A drawn line
      that crosses from one face to another is not a side of anything — it is a mistake.</div>`
    },
    {
      h: 'Building a section',
      html: `<p>The method, for a plane through three given points of a cube:</p>
      <ol>
        <li>join any two points that lie on the same face — rule 1;</li>
        <li>extend that line to meet the plane of an adjacent face outside the solid — rule 3;</li>
        <li>join the new point to the third given point, and take the part inside the solid;</li>
        <li>use rule 2 on parallel faces to finish, and check every side lies in exactly one face.</li>
      </ol>
      {{fig:prismSection:The same three rules on a prism — a plane cut across the lateral faces.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Cut of a cube</th><th>Shape</th><th>Note</th></tr></thead>
      <tbody>
        <tr><td>parallel to a face</td><td>square</td><td>congruent to the face</td></tr>
        <tr><td>through two opposite edges</td><td>rectangle</td><td>a diagonal section</td></tr>
        <tr><td>through three face-diagonals</td><td>equilateral triangle</td><td>side ${m('a' + sr('2'))}</td></tr>
        <tr><td>through six edge-midpoints</td><td>regular hexagon</td><td>side ${m(f('a' + sr('2'), '2'))}</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'Naming the shape',
      html: `<p>The shape of the section is decided by how many faces the plane crosses — one side per face
      crossed.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Faces crossed</th><th>Section</th><th>Example in a cube</th></tr></thead>
      <tbody>
        <tr><td class="m">3</td><td>triangle</td><td>a corner cut off</td></tr>
        <tr><td class="m">4</td><td>quadrilateral</td><td>a plane parallel to an edge</td></tr>
        <tr><td class="m">5</td><td>pentagon</td><td>an oblique cut</td></tr>
        <tr><td class="m">6</td><td>hexagon</td><td>through six edge-midpoints</td></tr>
      </tbody></table></div>
      <p>A cube has six faces, so its sections have at most six sides. A tetrahedron has four, so its
      sections are triangles or quadrilaterals — never more.</p>
      <div class="keybox"><div class="klabel">Parallel faces force parallel sides</div>
      In a cube the faces come in three parallel pairs, so a hexagonal section has its opposite sides
      parallel — and the regular one, through the six edge-midpoints, has all six sides equal as
      well.</div>`
    },
    {
      h: 'Areas by projection',
      html: `<p>When a section is awkward to measure directly, project it onto the base.</p>
      ${eq(m('S_projection = S_section · cos θ'), true)}
      <p>where ${m('θ')} is the dihedral angle between the two planes. Read backwards, this finds the
      section from a shape that is easy to measure:</p>
      ${eq(m('S_section = ' + f('S_projection', 'cos θ')), true)}
      {{fig:orthoProjection:The shadow is shorter than the object by exactly the factor cos θ.}}
      <p><b>Example.</b> A plane cuts a cube of edge ${m('6')} through ${m('A')}, ${m('B')} and
      ${m('C₁')}. Its projection on the base is the triangle ${m('ABC')}, of area ${m('18')}; the
      dihedral angle is ${m('45°')}; so the section has area
      ${m(f('18', 'cos 45°') + ' = 18' + sr('2') + ' ≈ 25.5')}.</p>
      <div class="warn"><span class="wl">The projection is always the smaller</span>
      Since ${m('cos θ ≤ 1')}, a shadow is never larger than what casts it. If your section comes out
      <i>smaller</i> than its projection, the formula has been used upside down.</div>`
    }
  ],
  examples: [
    {
      q: 'A plane passes through the midpoints of six edges of a cube of edge ' + m('a') + '. Name the section and find its perimeter.',
      steps: [
        ['Six faces crossed, so a hexagon.', ''],
        ['Each side joins two midpoints of one face: ' + m(f('a' + sr('2'), '2')) + '.', ''],
        ['All six equal — a regular hexagon.', ''],
        ['Perimeter ' + m('3a' + sr('2')), '']
      ],
      ans: 'A regular hexagon of perimeter ' + m('3a' + sr('2'))
    },
    {
      q: 'Find the area of the diagonal section of a cube of edge ' + m('6') + '.',
      steps: [
        ['It is the rectangle through two opposite edges.', ''],
        ['Sides ' + m('6') + ' and ' + m('6' + sr('2')) + '.', ''],
        [m('S = 36' + sr('2') + ' ≈ 50.9'), '']
      ],
      ans: m('36' + sr('2')) + ' ≈ ' + m('50.9')
    },
    {
      q: 'A section of area ' + m('S') + ' makes ' + m('60°') + ' with the base. Find its projection.',
      steps: [
        [m('S_proj = S cos 60°'), ''],
        [m('= 0.5 S'), ''],
        ['Half the section.', '']
      ],
      ans: m('0.5 S')
    },
    {
      q: 'A plane through ' + m('A') + ', ' + m('B') + ' and ' + m('C₁') + ' cuts a cube of edge ' + m('6') + '. Find the area of the section.',
      steps: [
        ['Projection on the base: triangle ' + m('ABC') + ', area ' + m('18') + '.', ''],
        ['Dihedral angle along ' + m('AB') + ' is ' + m('45°') + '.', ''],
        [m('S = ' + f('18', 'cos 45°')), ''],
        [m('= 18' + sr('2') + ' ≈ 25.5'), '']
      ],
      ans: m('18' + sr('2')) + ' ≈ ' + m('25.5')
    }
  ],
  modelNote: 'Cut a potato or a block of foam along a plane through three marked points; the class predicts the polygon before the cut.',
  interactive: {
    type: 'space3d',
    title: 'Cutting the box',
    hint: 'Turn the solid and count the faces the plane crosses.'
  },
  quiz: [
    { q: 'Each side of a section lies in:', a: ['two faces', 'exactly one face', 'the base', 'no face'], c: 1, why: 'It is one intersection.' },
    { q: 'A cutting plane meets two parallel faces in:', a: ['perpendicular lines', 'parallel lines', 'one point', 'nothing'], c: 1, why: 'Rule 2.' },
    { q: 'A cube’s section has at most:', a: [m('4') + ' sides', m('5') + ' sides', m('6') + ' sides', m('8') + ' sides'], c: 2, why: 'Six faces.' },
    { q: 'A tetrahedron’s section has at most:', a: [m('3'), m('4'), m('5'), m('6')], c: 1, why: 'Four faces.' },
    { q: m('S_projection') + ' equals:', a: [m('S cos θ'), m(f('S', 'cos θ')), m('S sin θ'), m('S')], c: 0, why: 'The shadow is smaller.' },
    { q: 'A section through six edge-midpoints of a cube is:', a: ['a square', 'a regular hexagon', 'a triangle', 'a pentagon'], c: 1, why: 'All six sides equal.' }
  ],
  practice: {
    easy: [
      ['A plane parallel to a face of a cube cuts:', 'A square'],
      ['A corner cut off a cube gives:', 'A triangle'],
      ['Maximum number of sides of a cube section', m('6')],
      ['Maximum number of sides of a tetrahedron section', m('4')],
      ['Side of the equilateral section through three face-diagonals of a cube of edge ' + m('a'), m('a' + sr('2'))],
      ['Diagonal section of a cube of edge ' + m('6'), m('36' + sr('2'))],
      [m('S_projection') + ' when ' + m('S = 20, θ = 60°'), m('10')]
    ],
    med: [
      ['Perimeter of the regular hexagonal section of a cube of edge ' + m('a'), m('3a' + sr('2'))],
      ['Area of that hexagon for ' + m('a = 4'), m('12' + sr('3')) + ' ≈ ' + m('20.8')],
      ['Area of the equilateral section through three face-diagonals, ' + m('a = 6'), m('18' + sr('3')) + ' ≈ ' + m('31.2')],
      ['Section through ' + m('A, B, C₁') + ' of a cube of edge ' + m('6'), m('18' + sr('2')) + ' ≈ ' + m('25.5')],
      [m('S_section') + ' when ' + m('S_proj = 12, θ = 45°'), m('12' + sr('2')) + ' ≈ ' + m('17.0')],
      ['How many faces does a pentagonal section cross?', m('5')],
      ['A plane parallel to two opposite edges of a cube cuts:', 'A rectangle']
    ],
    hard: [
      ['Prove that the hexagonal section through the six edge-midpoints of a cube is regular', 'Each side is ' + m(f('a' + sr('2'), '2')) + ', angles ' + m('120°')],
      ['Area of the section of a cube of edge ' + m('a') + ' through one edge and the midpoint of the opposite edge', m(f('a²' + sr('5'), '2'))],
      ['A plane cuts a cube of edge ' + m('4') + ' through three vertices of one face and one of the opposite: name the section', 'A quadrilateral (a trapezium)'],
      ['A section of a cube has area ' + m('12' + sr('2')) + ' and projects to ' + m('12') + ': find ' + m('θ'), m('45°')],
      ['A regular tetrahedron of edge ' + m('a') + ': the area of the section through one edge and the midpoint of the opposite', m(f('a²' + sr('2'), '4'))],
      ['A plane parallel to the base cuts a pyramid halfway up: the ratio of the areas', m('1 : 4')],
      ['Show that the section of a cube through three face-diagonals meeting at a vertex is equilateral', 'All three sides are ' + m('a' + sr('2'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw each cube large, and mark the three given points before drawing any line.',
  homework: [
    'State the three rules for constructing a section, with a sketch for each.',
    'Construct the section of a cube by the plane through the midpoints of six edges, and name it.',
    'Find the area of the diagonal section of a cube of edge ' + m('8') + ' cm.',
    'A section makes ' + m('30°') + ' with the base and its projection has area ' + m('9') + ' cm². Find the area of the section.',
    'Explain in two sentences why the section of a tetrahedron can never be a pentagon.'
  ]
});

/* ============================== 34 ============================== */
G10_GEO.push({
  id: 'g10-34', stream: 'geo', grade: 10, quarter: 4, lessons: '67–68', hours: 2,
  title: 'Annual control work, and the Grade 11 preview',
  subtitle: 'The whole year in one paper, then a look at the road that leads out of it.',
  uz: 'Geometry 10, Yillik nazorat ishi', uzPage: 'pp. 277–280',
  cam: 'Annual review', camPage: 'Pure Mathematics 1, pp. 85–88', wb: 'Annual paper G',
  objectives: [
    'Apply the axiomatic, parallel, perpendicular and coordinate methods of the whole year.',
    'Choose the shortest route to each answer under time pressure.',
    'Classify each lost mark and rewrite the solution.',
    'See how Grade 11 continues each strand of Grade 10.'
  ],
  terms: [
    ['Annual control work', 'Yillik nazorat ishi', 'Годовая контрольная работа'],
    ['Axiom', 'Aksioma', 'Аксиома'],
    ['Parallelism', 'Parallellik', 'Параллельность'],
    ['Perpendicularity', 'Perpendikulyarlik', 'Перпендикулярность'],
    ['Section', 'Kesim', 'Сечение'],
    ['Coordinate method', 'Koordinatalar usuli', 'Координатный метод'],
    ['Solid of revolution', 'Aylanish jismi', 'Тело вращения'],
    ['Volume', 'Hajm', 'Объём']
  ],
  timing: [[3, 'Instructions'], [45, 'The paper'], [12, 'Answers'], [12, 'Diagnosis'], [8, 'The Grade 11 preview']],
  sections: [
    {
      h: 'The paper — 40 marks, 45 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>State the three positions of two lines in space, with a sketch of each</td><td class="m">4</td><td>Q I</td></tr>
        <tr><td>2</td><td>Prove that a line parallel to a line of a plane is parallel to the plane, or lies in it</td><td class="m">6</td><td>Q II</td></tr>
        <tr><td>3</td><td>A cube of edge ${m('8')}: the angle between the space diagonal and the base, and between the plane ${m('ABC₁')} and the base</td><td class="m">7</td><td>Q III</td></tr>
        <tr><td>4</td><td>Construct and name the section of a cube through three given vertices; find its area</td><td class="m">7</td><td>Q III–IV</td></tr>
        <tr><td>5</td><td>${m('A(2, −1)')}, ${m('B(8, 7)')}: the length, the midpoint and the perpendicular bisector</td><td class="m">6</td><td>Q IV</td></tr>
        <tr><td>6</td><td>Find where ${m('y = 2x − 4')} meets ${m('x² + y² = 16')}, and the chord length</td><td class="m">6</td><td>Q IV</td></tr>
        <tr><td>7</td><td>A point ${m('9')} cm from a plane; obliques of ${m('15')} and ${m('41')} cm: the projections</td><td class="m">4</td><td>Q III</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">How to spend 45 minutes</div>
      Questions 1, 5 and 7 are quick — about ${m('12')} minutes for ${m('14')} marks. Do them first, then
      3 and 6, and leave 2 and 4 last: a proof and a construction reward the time that is left, and
      punish the time that is not.</div>`
    },
    {
      h: 'The year in one page',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Quarter</th><th>The one idea</th><th>The picture</th></tr></thead>
      <tbody>
        <tr><td>I — axioms and entry to space</td><td>three points determine a plane</td><td>the plane through three dots</td></tr>
        <tr><td>II — parallelism</td><td>parallel to a line <b>in</b> the plane</td><td>a line and its parallel below</td></tr>
        <tr><td>III — perpendicularity</td><td>perpendicular to two <b>intersecting</b> lines</td><td>the vertical mast</td></tr>
        <tr><td>IV — coordinates</td><td>geometry becomes algebra</td><td>the circle and its chord</td></tr>
      </tbody></table></div>
      {{fig:trig3dBox:One box, and every angle of the year measured inside it.}}
      <div class="keybox"><div class="klabel">The four habits worth keeping</div>
      <ul>
        <li>draw the solid before naming anything;</li>
        <li>find the projection, and a right triangle appears;</li>
        <li>in coordinates, plot before you calculate;</li>
        <li>finish a proof with the sentence that states the conclusion.</li>
      </ul></div>`
    },
    {
      h: 'The Grade 11 preview',
      html: `<p>Grade 11 geometry continues each of the four strands, and adds measurement.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Grade 10</th><th>becomes, in Grade 11</th></tr></thead>
      <tbody>
        <tr><td>points and lines in space</td><td>coordinates ${m('(x, y, z)')} and vectors in space</td></tr>
        <tr><td>angles by projection</td><td>the scalar product, and angles without a picture</td></tr>
        <tr><td>polyhedra and their sections</td><td>prisms and pyramids — surface area and volume</td></tr>
        <tr><td>the circle in the plane</td><td>the cylinder, the cone and the sphere</td></tr>
      </tbody></table></div>
      {{fig:point3d:The next step — a third coordinate, and every plane method carries over.}}
      <p><b>What to do over the summer.</b> Nothing large. Keep the seven plane-geometry formulas and the
      four positions-in-space pictures somewhere you will see them, and in September the first lesson —
      the coordinate system in space — will read as an easy extension rather than a new subject.</p>
      <div class="keybox"><div class="klabel">One sentence to carry into Grade 11</div>
      Every three-dimensional problem is solved by finding the one right triangle it contains. That was
      true in every lesson this year, and it stays true in every lesson of the next.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q3: a cube of edge ' + m('8') + ' — the angle between the space diagonal and the base.',
      steps: [
        ['Projection of ' + m('AC₁') + ' is ' + m('AC = 8' + sr('2')) + '.', ''],
        [m('CC₁ = 8'), ''],
        [m('tan θ = ' + f('8', '8' + sr('2')) + ' = ' + f('1', sr('2'))), ''],
        [m('θ ≈ 35.3°'), '']
      ],
      ans: m('≈ 35.3°')
    },
    {
      q: 'Model answer, Q6: where ' + m('y = 2x − 4') + ' meets ' + m('x² + y² = 16') + '.',
      steps: [
        [m('x² + (2x − 4)² = 16'), ''],
        [m('5x² − 16x = 0 ⇒ x(5x − 16) = 0'), ''],
        [m('x = 0') + ' or ' + m('x = 3.2'), ''],
        [m('(0, −4)') + ' and ' + m('(3.2, 2.4)') + '; chord ' + m(sr('10.24 + 40.96') + ' ≈ 7.16') + '.', '']
      ],
      ans: m('(0, −4)') + ', ' + m('(3.2, 2.4)') + '; chord ' + m('≈ 7.16')
    },
    {
      q: 'Model answer, Q7: a point ' + m('9') + ' cm from a plane, obliques ' + m('15') + ' and ' + m('41') + ' cm.',
      steps: [
        [m(sr('225 − 81') + ' = 12'), ''],
        [m(sr('1681 − 81') + ' = 40'), ''],
        ['Projections ' + m('12') + ' cm and ' + m('40') + ' cm.', 'Both are Pythagorean triples.']
      ],
      ans: m('12') + ' cm and ' + m('40') + ' cm'
    }
  ],
  modelNote: 'Give the class the paper’s mark allocation before they start; ten seconds of planning is worth five marks.',
  interactive: {
    type: 'quiz',
    title: 'The year in twelve questions',
    hint: 'Three from each quarter.',
    items: [
      { q: 'A plane is determined by:', a: ['two points', 'three non-collinear points', 'one line', 'four points'], c: 1, why: 'The first axiom.' },
      { q: 'Two lines that never meet are:', a: ['parallel', 'parallel or skew', 'skew', 'intersecting'], c: 1, why: 'Space has both.' },
      { q: 'A line ∥ to a plane is ∥ to:', a: ['every line of it', 'some line of it', 'the normal', 'nothing'], c: 1, why: 'The criterion.' },
      { q: 'Two planes are parallel if:', a: ['one line of each is parallel', 'two intersecting lines of each are parallel', 'they do not meet at one point', 'they look parallel'], c: 1, why: 'Intersecting is essential.' },
      { q: '⟂ to a plane means ⟂ to:', a: ['one line', 'two intersecting lines', 'two parallel lines', 'the edge'], c: 1, why: 'And then to all.' },
      { q: 'The angle to a plane is measured to:', a: ['the normal', 'the projection', 'any line', 'the edge'], c: 1, why: 'The smallest angle.' },
      { q: 'A dihedral angle is measured:', a: ['anywhere', 'by rays ⟂ to the edge', 'along the edge', 'by projection'], c: 1, why: 'The linear angle.' },
      { q: 'Each side of a section lies in:', a: ['one face', 'two faces', 'the base', 'none'], c: 0, why: 'One intersection.' },
      { q: m('S_proj') + ' equals:', a: [m('S cos θ'), m(f('S', 'cos θ')), m('S sin θ'), m('S')], c: 0, why: 'The shadow is smaller.' },
      { q: 'Perpendicular gradients satisfy:', a: [m('m₁ = m₂'), m('m₁m₂ = −1'), m('m₁ + m₂ = 0'), m('m₁m₂ = 1')], c: 1, why: 'Negative reciprocal.' },
      { q: 'Centre of ' + m('(x − 4)² + (y + 1)² = 25') + ':', a: [m('(4, 1)'), m('(4, −1)'), m('(−4, 1)'), m('(−4, −1)')], c: 1, why: 'Reverse the signs.' },
      { q: 'A tangent line meets the radius at:', a: [m('45°'), m('90°'), m('60°'), 'any angle'], c: 1, why: 'The tangent property.' }
    ]
  },
  quiz: [
    { q: 'Which questions should be attempted first?', a: ['the proof', 'the quick ones — 1, 5 and 7', 'the construction', 'in order'], c: 1, why: m('14') + ' marks in ' + m('12') + ' minutes.' },
    { q: 'Grade 11 begins geometry with:', a: ['the sphere', 'coordinates and vectors in space', 'sections', 'the circle'], c: 1, why: 'A third coordinate.' },
    { q: 'The one habit worth keeping is:', a: ['memorising formulas', 'finding the right triangle', 'working fast', 'skipping proofs'], c: 1, why: 'Every solid problem contains one.' },
    { q: 'The scalar product will replace:', a: ['the section method', 'angles found by projection', 'the axioms', 'coordinates'], c: 1, why: 'Angles without a picture.' }
  ],
  practice: {
    easy: [
      ['Three positions of two lines in space', 'Intersecting, parallel, skew'],
      ['A plane is determined by', 'Three non-collinear points'],
      ['Space diagonal of a cube of edge ' + m('8'), m('8' + sr('3'))],
      ['Face diagonal of the same cube', m('8' + sr('2'))],
      ['Projection of a ' + m('15') + ' oblique from a point ' + m('9') + ' from the plane', m('12')],
      ['Midpoint of ' + m('(2, −1)') + ' and ' + m('(8, 7)'), m('(5, 3)')],
      ['Length of that segment', m('10')]
    ],
    med: [
      ['Angle of the space diagonal of a cube with the base', m('≈ 35.3°')],
      ['Dihedral angle of the plane ' + m('ABC₁') + ' with the base of a cube', m('45°')],
      ['Perpendicular bisector of ' + m('(2, −1)') + ' and ' + m('(8, 7)'), m('3x + 4y = 27')],
      ['Where ' + m('y = 2x − 4') + ' meets ' + m('x² + y² = 16'), m('(0, −4)') + ', ' + m('(3.2, 2.4)')],
      ['Chord length there', m('≈ 7.16')],
      ['Projection of a ' + m('41') + ' oblique from a point ' + m('9') + ' from a plane', m('40')],
      ['Diagonal section of a cube of edge ' + m('8'), m('64' + sr('2'))]
    ],
    hard: [
      ['Area of the section of a cube of edge ' + m('8') + ' through ' + m('A, B, C₁'), m('32' + sr('2')) + ' ≈ ' + m('45.3')],
      ['Angle between two space diagonals of a cube', m('≈ 70.5°')],
      ['Distance from a vertex of a cube of edge ' + m('8') + ' to the opposite space diagonal', m(f('8' + sr('6'), '3')) + ' ≈ ' + m('6.53')],
      ['A tangent to ' + m('x² + y² = 16') + ' parallel to ' + m('y = 2x'), m('y = 2x ± 4' + sr('5'))],
      ['The regular hexagonal section of a cube of edge ' + m('8') + ': its area', m('48' + sr('3')) + ' ≈ ' + m('83.1')],
      ['A rectangular box ' + m('9 × 12 × 20') + ': the angle of the space diagonal with the base', m('≈ 53.1°')],
      ['Prove that the four space diagonals of a cube meet at one point and bisect each other', 'All pass through the centre']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'This is the last geometry lesson of Grade 10. Keep the year-in-one-page sheet for September.',
  homework: [
    'Rewrite in full every annual-paper question that lost a mark, naming the slip in the margin.',
    'Write the year in one page: the four quarter ideas with one sketch each.',
    'In a cube of edge ' + m('10') + ' cm, find the angle between the space diagonal and the base, and the area of the diagonal section.',
    'Write one sentence saying what you will keep from this year’s geometry, and one saying what you will practise before September.'
  ]
});
