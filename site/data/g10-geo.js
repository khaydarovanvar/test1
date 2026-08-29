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
