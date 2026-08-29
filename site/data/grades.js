/* The grade index, and the per-grade copy the grade page renders itself from.
   `streams` drives the cards at the top; `quarters` the tab strip. A grade is
   'live' when at least one topic exists for it in the data files. */
var GRADES = [
  { g: 5,  name: 'Mathematics',        meta: 'Natural numbers · fractions · geometry of the plane', status: 'soon' },
  { g: 6,  name: 'Mathematics',        meta: 'Rational numbers · ratio · percentage · coordinates', status: 'soon' },
  { g: 7,  name: 'Algebra + Geometry', meta: 'Linear equations · polynomials · triangles',          status: 'soon' },
  { g: 8,  name: 'Algebra + Geometry', meta: 'Full year — 95 topics, 1995 practice problems',       status: 'live' },
  { g: 9,  name: 'Algebra + Geometry', meta: 'Quadratic functions · progressions · circles',        status: 'soon' },
  { g: 10, name: 'Algebra + Geometry', meta: 'Quarter I — functions, and an introduction to solid geometry', status: 'live' },
  { g: 11, name: 'Algebra + Geometry', meta: 'Quarter I — the derivative, and vectors in space',    status: 'live' }
];

var GRADE_INFO = {
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
    lede: 'Quarter I is written — functions and the graphs of functions in algebra, the entry into solid geometry in geometry.',
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
        alg: 'Trigonometric equations and inequalities, then probability.',
        geo: 'Coordinate geometry and the revision block.' }
    ]
  },
  11: {
    title: 'Grade 11 · Algebra and Geometry',
    lede: 'Quarter I is written — the derivative and its applications in algebra, coordinates and vectors in space in geometry.',
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
        alg: 'Probability, distributions and the annual revision.',
        geo: 'Practical work and the final revision.' }
    ]
  }
};
