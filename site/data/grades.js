/* The grade index, and the per-grade copy the grade page renders itself from.
   `streams` drives the cards at the top; `quarters` the tab strip. A grade is
   'live' when at least one topic exists for it in the data files. */
/* Written topics per grade. The homepage and the grade page read these instead of
   loading every data file; check-content.js verifies them against the data. */
var TOPIC_COUNTS = { 6: 92, 7: 90, 8: 95, 9: 95, 10: 80, 11: 76 };

var GRADES = [
  { g: 5,  name: 'Mathematics',        meta: 'Natural numbers · fractions · geometry of the plane', status: 'soon' },
  { g: 6,  name: 'Mathematics',        meta: 'Full year — 92 topics, 1932 practice problems',       status: 'live' },
  { g: 7,  name: 'Mathematics',        meta: 'Full year — 90 topics, 1890 practice problems',       status: 'live' },
  { g: 8,  name: 'Algebra + Geometry', meta: 'Full year — 95 topics, 1995 practice problems',       status: 'live' },
  { g: 9,  name: 'Algebra + Geometry', meta: 'Full year — 95 topics, 1995 practice problems',       status: 'live' },
  { g: 10, name: 'Algebra + Geometry', meta: 'Full year — 80 topics, 1680 practice problems',       status: 'live' },
  { g: 11, name: 'Algebra + Geometry', meta: 'Full year — 76 topics, 1596 practice problems',       status: 'live' }
];

var GRADE_INFO = {
  6: {
    title: 'Grade 6 · Mathematics',
    lede: 'All four quarters are written — 92 topics, one subject at six hours a week, the national plan with a Cambridge Stage 7 layer on top.',
    single: true,
    streams: [
      ['cam', 'Cambridge class', 'Mathematics · 6 h a week', '204 hours. Quarters 54 · 42 · 60 · 48.', '<em>Matematika 6</em> (Ismailov and others)'],
      ['uz',  'National backbone', '170 hours of the KTP', 'Every national lesson, in the national order.', 'Ministry calendar-thematic plan'],
      ['cam', 'Cambridge layer', '34 added lessons', 'Directed numbers, decimals, data and probability.', 'Cambridge Lower Secondary Stage 7']
    ],
    quarters: [
      { q: 1, label: 'Quarter I',
        mat: 'Directed numbers, algebraic expressions and equations, the division of fractions, then ratio and proportion.' },
      { q: 2, label: 'Quarter II',
        mat: 'Percentages, place value and decimals, unknown angles, and the circumference of a circle.' },
      { q: 3, label: 'Quarter III',
        mat: 'The area of a circle and of compound figures, speed and motion, then the volume and surface of cuboids.' },
      { q: 4, label: 'Quarter IV',
        mat: 'Pie charts and data handling, probability, three-dimensional shapes and nets, then the annual revision.' }
    ]
  },
  7: {
    title: 'Grade 7 · Mathematics',
    lede: 'All four quarters are written — 90 topics, algebra and geometry as one subject at five hours a week, mapped onto Cambridge Stage 8.',
    single: true,
    streams: [
      ['uz',  'Special class', 'Mathematics · 5 h a week', '170 hours. Quarters 45 · 35 · 50 · 40.', '<em>Algebra 7</em> · <em>Geometry 7</em>'],
      ['cam', 'Cambridge layer', 'Lower Secondary Stage 8', 'Mapped lesson by lesson, with 16 inserts.', 'Cambridge Lower Secondary Mathematics 8'],
      ['uz',  'Geometry inside', 'One plan, both subjects', 'The national plan alternates algebra and geometry blocks.', 'Ministry calendar-thematic plan']
    ],
    quarters: [
      { q: 1, label: 'Quarter I',
        mat: 'The simplest geometric figures, segments, angles and perpendicular lines; then the integers and the rational numbers.' },
      { q: 2, label: 'Quarter II',
        mat: 'Triangles and the three criteria of congruence; then powers, monomials and polynomials.' },
      { q: 3, label: 'Quarter III',
        mat: 'Parallel lines and the angles of a triangle; the abridged multiplication formulae; algebraic fractions; linear equations.' },
      { q: 4, label: 'Quarter IV',
        mat: 'Constructions, the coordinate plane and the linear function, systems of linear equations, and combinatorics.' }
    ]
  },
  9: {
    title: 'Grade 9 · Algebra and Geometry',
    lede: 'All four quarters are written — 95 topics. The quadratic function, trigonometry and the progressions in algebra; similarity, solving triangles and the circle in geometry.',
    streams: [
      ['uz',  'Special class', 'Algebra · 3 h a week',  '102 hours. Quarters 27 · 21 · 30 · 24.', '<em>Algebra 9</em>, §§1–38'],
      ['uz',  'Special class', 'Geometry · 2 h a week', '68 hours. Quarters 18 · 14 · 20 · 16.',  '<em>Geometry 9</em>'],
      ['cam', 'Cambridge layer', 'IGCSE Core &amp; Extended', 'Chapters 1–12; grades 10–11 take 13–24.', 'Morrison &amp; Hamshaw, <em>IGCSE Mathematics</em>']
    ],
    quarters: [
      { q: 1, label: 'Quarter I',
        alg: 'Chapter I of <em>Algebra 9</em> — the quadratic function, its graph, quadratic inequalities and the method of intervals.',
        geo: 'Similarity of polygons and triangles, the transformations of the plane, and homothety.' },
      { q: 2, label: 'Quarter II',
        alg: 'Systems of second-degree equations and inequalities, then the radian and the entry into trigonometry.',
        geo: 'Trigonometry of the general angle, the sine and cosine rules, the scalar product and solving triangles.' },
      { q: 3, label: 'Quarter III',
        alg: 'Trigonometric identities, the addition and double-angle formulae, then sequences and the arithmetic progression.',
        geo: 'Inscribed and circumscribed polygons, regular polygons, the circumference, arc length and the area of a disc.' },
      { q: 4, label: 'Quarter IV',
        alg: 'The geometric progression, events and probability, random variables, and the annual revision.',
        geo: 'Proportional segments in a triangle and in a circle, the mean proportional, and the annual revision.' }
    ]
  },
  8: {
    title: 'Grade 8 · Algebra and Geometry',
    lede: 'All four quarters are written — 95 lessons across algebra and geometry. Pick a quarter, then a topic.',
    streams: [
      ['uz',  'Special class', 'Algebra · 3 h a week',     '102 hours. Quarters 27 · 21 · 30 · 24.', 'Alimov, <em>Algebra 8</em>'],
      ['uz',  'Special class', 'Geometry · 2 h a week',    '68 hours. Quarters 18 · 14 · 20 · 16.',  'Rahimkariev, <em>Geometry 8</em>'],
      ['cam', 'Cambridge class', 'Mathematics · 6 h a week', '204 hours. Stage 9 with national depth topics.', 'Cambridge Stage 9 Learner’s Book']
    ],
    quarters: [
      { q: 1, label: 'Quarter I',
        alg: 'Chapter I of <em>Algebra 8</em> — algebraic fractions and the function y = k/x.',
        geo: 'Chapter I of <em>Geometry 8</em> — quadrilaterals, Thales’ theorem and midlines.' },
      { q: 2, label: 'Quarter II',
        alg: 'Chapter I §§8–10 and Chapter II of <em>Algebra 8</em> — roots, rational exponents and numerical inequalities.',
        geo: 'Chapter II of <em>Geometry 8</em> — Pythagoras’ theorem and the trigonometry of the right triangle.' },
      { q: 3, label: 'Quarter III',
        alg: 'Inequalities with one unknown, modulus, approximation and quadratic equations.',
        geo: 'The coordinate method, vectors and the areas of polygons.' },
      { q: 4, label: 'Quarter IV',
        alg: 'Statistics, combinatorics and the Cambridge revision block.',
        geo: 'Circle theorems, transformations and solids.' }
    ]
  },
  10: {
    title: 'Grade 10 · Algebra and Geometry',
    lede: 'All four quarters are written — 80 lessons across algebra and geometry. Pick a quarter, then a topic.',
    streams: [
      ['uz',  'Special class', 'Algebra · 3 h a week',  '102 hours. Quarters 27 · 21 · 30 · 24.', 'Zaitov, <em>Algebra and Calculus 10</em>'],
      ['uz',  'Special class', 'Geometry · 2 h a week', '68 hours. Quarters 18 · 14 · 20 · 16.',  'Xaydarov, <em>Geometry 10</em>'],
      ['cam', 'Cambridge layer', 'IGCSE Extended · AS Pure 1', 'Mapped lesson by lesson, with 13 + 16 inserts.', 'IGCSE Core &amp; Extended · Pure Mathematics 1']
    ],
    quarters: [
      { q: 1, label: 'Quarter I',
        alg: 'The Grade 9 quadratics toolkit, then Chapter 1 of <em>Algebra 10</em> — functions, their properties and their graphs.',
        geo: 'Chapters I–II of <em>Geometry 10</em> — the axiomatic method, then the entry into solid geometry.' },
      { q: 2, label: 'Quarter II',
        alg: 'Rational and irrational equations, inequalities and their systems.',
        geo: 'Parallelism of lines and planes in space.' },
      { q: 3, label: 'Quarter III',
        alg: 'Exponential and logarithmic functions, equations and inequalities.',
        geo: 'Perpendicularity in space and orthogonal projection.' },
      { q: 4, label: 'Quarter IV',
        alg: 'Trigonometric equations and inequalities, probability, then the Cambridge revision of progressions and the binomial expansion.',
        geo: 'Coordinate geometry revisited, then the revision of the year and the annual paper.' }
    ]
  },
  11: {
    title: 'Grade 11 · Algebra and Geometry',
    lede: 'All four quarters are written — 76 lessons across algebra and geometry. Pick a quarter, then a topic.',
    streams: [
      ['uz',  'Special class', 'Algebra · 3 h a week',  '102 hours. Quarters 27 · 21 · 30 · 24.', '<em>Algebra and Calculus 11</em>'],
      ['uz',  'Special class', 'Geometry · 2 h a week', '68 hours. Quarters 18 · 14 · 20 · 16.',  '<em>Geometry 11</em>'],
      ['cam', 'Cambridge layer', 'AS &amp; A Level Pure 1–2', 'Mapped lesson by lesson, with 17 + 16 inserts.', 'Pure Mathematics 1 · Pure Mathematics 2 &amp; 3']
    ],
    quarters: [
      { q: 1, label: 'Quarter I',
        alg: 'Chapter 1 — the limit, the derivative, the rules of differentiation and the applications of the derivative.',
        geo: 'Chapter 1 — the coordinate system in space, vectors, the scalar product and transformations.' },
      { q: 2, label: 'Quarter II',
        alg: 'Approximation, modelling with the derivative, and the indefinite integral.',
        geo: 'Polyhedra, prisms and cylinders — surface area and volume.' },
      { q: 3, label: 'Quarter III',
        alg: 'The definite integral, combinatorics and statistics.',
        geo: 'Pyramids, cones and the sphere.' },
      { q: 4, label: 'Quarter IV',
        alg: 'Probability and distributions, then complex numbers and differential equations, and the annual paper.',
        geo: 'Mensuration in context, optimisation, test practice and the final revision.' }
    ]
  }
};
