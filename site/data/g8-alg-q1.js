/* Grade 8 · Algebra · Quarter I (27 hours)
   National backbone: Alimov, "Algebra 8" (O'qituvchi 2019), Chapter I.
   Cambridge references: Lower Secondary Mathematics Stage 9. */
var G8_ALG_Q1 = [];

/* ============================== 1 ============================== */
G8_ALG_Q1.push({
  id: 'alg-01', stream: 'alg', grade: 8, quarter: 1, lessons: '1–3', hours: 3,
  title: 'Revision of the Grade 7 course',
  subtitle: 'Powers, brackets, factorising and linear equations — the four tools every fraction question in this chapter will need.',
  uz: 'Algebra 8, p. 3', uzPage: 'pp. 3–6',
  cam: 'Stage 8 review', camPage: 'Stage 9, Unit 2 (pre-work)', wb: '—',
  objectives: [
    'Apply the laws of indices to simplify products and quotients of powers.',
    'Expand brackets, including the product of two binomials.',
    'Factorise using a common factor, grouping, and the three standard identities.',
    'Solve a linear equation and rearrange a simple formula.'
  ],
  timing: [[5, 'Warm-up'], [12, 'Explanation'], [6, 'Interactive'], [15, 'Practice'], [2, 'Homework']],
  sections: [
    {
      h: 'Why we start here',
      html: `<p>Everything in Chapter I — cancelling fractions, common denominators, adding and
      multiplying them — is really <em>factorising in disguise</em>. A fraction such as
      ${m(f('x² − 9', 'x + 3'))} only simplifies once you see ${m('x² − 9')} as ${m('(x − 3)(x + 3)')}.
      So three lessons on the Grade 7 toolkit is not lost time; it is the whole quarter's foundation.</p>`
    },
    {
      h: '1 · The laws of indices',
      html: `<p>For any ${m('a ≠ 0')} and whole numbers ${m('m, n')}:</p>
      ${eq(m('a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup>') + ' &nbsp;&nbsp;·&nbsp;&nbsp; ' +
        m('a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup>') + ' &nbsp;&nbsp;·&nbsp;&nbsp; ' +
        m('(a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>') + ' &nbsp;&nbsp;·&nbsp;&nbsp; ' +
        m('(ab)<sup>n</sup> = a<sup>n</sup>b<sup>n</sup>'), true)}
      <p>Multiply powers of the same base — <b>add</b> the indices. Divide — <b>subtract</b>.
      A power of a power — <b>multiply</b>. Nothing else is allowed:
      ${m('a<sup>3</sup> + a<sup>3</sup>')} is ${m('2a<sup>3</sup>')}, never ${m('a<sup>6</sup>')}.</p>
      <div class="warn"><span class="wl">The classic slip</span>
      ${m('(2a)<sup>3</sup> = 8a<sup>3</sup>')}, not ${m('2a<sup>3</sup>')} — the index reaches the 2 as well.</div>`
    },
    {
      h: '2 · Expanding brackets',
      html: `<p>Every term inside meets every term outside:</p>
      ${eq(m('a(b + c) = ab + ac') + ' &nbsp;&nbsp;·&nbsp;&nbsp; ' + m('(a + b)(c + d) = ac + ad + bc + bd'), true)}
      <p>Three products are worth knowing by heart, because you will need to read them
      <em>backwards</em> all quarter:</p>
      ${eq(m('(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup>'))}
      ${eq(m('(a − b)<sup>2</sup> = a<sup>2</sup> − 2ab + b<sup>2</sup>'))}
      ${eq(m('(a − b)(a + b) = a<sup>2</sup> − b<sup>2</sup>'))}`
    },
    {
      h: '3 · Factorising — the four moves',
      html: `<ol>
        <li><b>Common factor.</b> ${m('6x<sup>2</sup> − 9x = 3x(2x − 3)')}</li>
        <li><b>Difference of two squares.</b> ${m('4x<sup>2</sup> − 25 = (2x − 5)(2x + 5)')}</li>
        <li><b>Perfect square.</b> ${m('x<sup>2</sup> − 10x + 25 = (x − 5)<sup>2</sup>')}</li>
        <li><b>Grouping.</b> ${m('ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y)')}</li>
      </ol>
      <p>Always try the common factor first. It is the move learners forget, and it makes the other
      three easier.</p>`
    },
    {
      h: '4 · Linear equations and formulae',
      html: `<p>Clear the fractions, open the brackets, collect the unknowns on one side, divide.</p>
      <p>Rearranging a formula is the same process with letters instead of numbers: to make
      ${m('h')} the subject of ${m('S = 2πrh')}, divide both sides by ${m('2πr')} to get
      ${m('h = ' + f('S', '2πr'))}.</p>`
    }
  ],
  examples: [
    {
      q: m('Simplify (3x<sup>2</sup>y)<sup>2</sup> · 2xy<sup>3</sup> ÷ 6x<sup>3</sup>y<sup>4</sup>'),
      steps: [
        [m('(3x<sup>2</sup>y)<sup>2</sup> = 9x<sup>4</sup>y<sup>2</sup>'), 'The index 2 reaches the 3, the x² and the y.'],
        [m('9x<sup>4</sup>y<sup>2</sup> · 2xy<sup>3</sup> = 18x<sup>5</sup>y<sup>5</sup>'), 'Multiply the numbers, add the indices.'],
        [m('18x<sup>5</sup>y<sup>5</sup> ÷ 6x<sup>3</sup>y<sup>4</sup> = 3x<sup>2</sup>y'), 'Divide the numbers, subtract the indices.']
      ],
      ans: m('3x<sup>2</sup>y')
    },
    {
      q: m('Factorise 2x<sup>2</sup> + 7x + 3'),
      steps: [
        [m('2 · 3 = 6'), 'Multiply the first and last coefficients.'],
        [m('6 = 1 · 6') + ', and ' + m('1 + 6 = 7'), 'Find two numbers with product 6 and sum 7.'],
        [m('2x<sup>2</sup> + x + 6x + 3'), 'Split the middle term using those numbers.'],
        [m('x(2x + 1) + 3(2x + 1)'), 'Group in pairs and take out the common factor of each pair.'],
        [m('(2x + 1)(x + 3)'), 'The bracket (2x + 1) is now itself a common factor.']
      ],
      ans: m('(2x + 1)(x + 3)')
    },
    {
      q: m('Solve ' + f('x − 2', '3') + ' = ' + f('x + 4', '5')),
      steps: [
        [m('5(x − 2) = 3(x + 4)'), 'Cross-multiply — legal because 3 and 5 are never zero.'],
        [m('5x − 10 = 3x + 12'), 'Open both brackets.'],
        [m('2x = 22'), 'Collect x on the left, numbers on the right.'],
        [m('x = 11'), 'Divide by 2.']
      ],
      ans: m('x = 11')
    }
  ],
  modelNote: 'Run through one factorisation together, then hand the mouse to a learner for the next.',
  interactive: {
    type: 'fractionCancel',
    title: 'Factorising, one step at a time',
    hint: 'Choose an expression, then reveal the steps as the class calls them out.',
    items: [
      {
        title: 'x² − 10x + 25',
        start: m('x<sup>2</sup> − 10x + 25'),
        steps: [
          [m('x<sup>2</sup>') + ' is ' + m('(x)<sup>2</sup>') + ', and ' + m('25') + ' is ' + m('5<sup>2</sup>'), 'Look for two perfect squares.'],
          ['Check the middle term: ' + m('2 · x · 5 = 10x') + ' ✓', 'It matches, and the sign is minus.'],
          [m('(x − 5)<sup>2</sup>'), 'So this is a perfect square, not a difference of squares.']
        ],
        answer: m('(x − 5)<sup>2</sup>')
      },
      {
        title: '4x² − 9y²',
        start: m('4x<sup>2</sup> − 9y<sup>2</sup>'),
        steps: [
          ['No common factor, and there is a minus between two squares.', 'That points at a² − b².'],
          [m('4x<sup>2</sup> = (2x)<sup>2</sup>') + ' and ' + m('9y<sup>2</sup> = (3y)<sup>2</sup>'), 'Identify a and b.'],
          [m('(2x − 3y)(2x + 3y)'), 'Apply a² − b² = (a − b)(a + b).']
        ],
        answer: m('(2x − 3y)(2x + 3y)')
      },
      {
        title: 'x³ − x',
        start: m('x<sup>3</sup> − x'),
        steps: [
          [m('x(x<sup>2</sup> − 1)'), 'Common factor first — always.'],
          [m('x<sup>2</sup> − 1 = (x − 1)(x + 1)'), 'What is left is a difference of squares.'],
          [m('x(x − 1)(x + 1)'), 'Three factors. Stopping at x(x² − 1) is the usual half-answer.']
        ],
        answer: m('x(x − 1)(x + 1)')
      },
      {
        title: 'ax + ay + bx + by',
        start: m('ax + ay + bx + by'),
        steps: [
          [m('a(x + y) + b(x + y)'), 'Group the first two and the last two terms.'],
          [m('(x + y)') + ' is now common to both parts.', 'This is why the grouping was chosen that way.'],
          [m('(a + b)(x + y)'), 'Take it out.']
        ],
        answer: m('(a + b)(x + y)')
      }
    ]
  },
  quiz: [
    { q: m('a<sup>5</sup> · a<sup>3</sup>') + ' equals:', a: [m('a<sup>8</sup>'), m('a<sup>15</sup>'), m('2a<sup>8</sup>'), m('a<sup>2</sup>')], c: 0, why: 'Multiplying powers of the same base adds the indices.' },
    { q: m('(3x)<sup>2</sup>') + ' equals:', a: [m('3x<sup>2</sup>'), m('9x<sup>2</sup>'), m('6x<sup>2</sup>'), m('9x')], c: 1, why: 'The index applies to the 3 as well as to the x.' },
    { q: 'Which is a difference of two squares?', a: [m('x<sup>2</sup> + 9'), m('x<sup>2</sup> − 9'), m('x<sup>2</sup> − 9x'), m('x<sup>2</sup> + 6x + 9')], c: 1, why: 'x² − 9 = (x − 3)(x + 3). A sum of squares does not factorise.' },
    { q: m('x<sup>2</sup> − 6x + 9') + ' factorises to:', a: [m('(x − 3)(x + 3)'), m('(x − 9)(x + 1)'), m('(x − 3)<sup>2</sup>'), m('x(x − 6) + 9')], c: 2, why: 'Two squares with 2 · x · 3 = 6x in the middle — a perfect square.' }
  ],
  practice: {
    easy: [
      [m('Simplify: x<sup>5</sup> · x<sup>3</sup>'), m('x<sup>8</sup>')],
      [m('Simplify: (a<sup>3</sup>)<sup>4</sup>'), m('a<sup>12</sup>')],
      [m('Expand: 3(2x − 5)'), m('6x − 15')],
      [m('Expand: (x + 4)(x − 4)'), m('x<sup>2</sup> − 16')],
      [m('Factorise: 6a + 9'), m('3(2a + 3)')],
      [m('Find the value of 2x<sup>2</sup> − 3x when x = −2'), m('14')],
      [m('Solve: 5x − 7 = 3x + 9'), m('x = 8')]
    ],
    med: [
      [m('Simplify: (2a<sup>2</sup>b)<sup>3</sup>'), m('8a<sup>6</sup>b<sup>3</sup>')],
      [m('Expand and simplify: (x + 3)<sup>2</sup> − (x − 3)<sup>2</sup>'), m('12x')],
      [m('Factorise: x<sup>2</sup> − 10x + 25'), m('(x − 5)<sup>2</sup>')],
      [m('Factorise: 4x<sup>2</sup> − 9y<sup>2</sup>'), m('(2x − 3y)(2x + 3y)')],
      [m('Factorise: ax + ay + bx + by'), m('(a + b)(x + y)')],
      [m('Solve: ' + f('x − 2', '3') + ' = ' + f('x + 4', '5')), m('x = 11')],
      [m('Simplify: a<sup>7</sup> ÷ a<sup>3</sup> · a<sup>2</sup>'), m('a<sup>6</sup>')]
    ],
    hard: [
      [m('Factorise completely: x<sup>3</sup> − x'), m('x(x − 1)(x + 1)')],
      [m('Factorise: 2x<sup>2</sup> + 7x + 3'), m('(2x + 1)(x + 3)')],
      [m('Simplify: (3x<sup>2</sup>y)<sup>2</sup> · 2xy<sup>3</sup> ÷ 6x<sup>3</sup>y<sup>4</sup>'), m('3x<sup>2</sup>y')],
      [m('Factorise completely: x<sup>4</sup> − 16'), m('(x − 2)(x + 2)(x<sup>2</sup> + 4)')],
      [m('Expand: (a + b)(a<sup>2</sup> − ab + b<sup>2</sup>)'), m('a<sup>3</sup> + b<sup>3</sup>')],
      [m('Make x the subject: a(x − 1) = b(x + 1), where a ≠ b'), m('x = ' + f('a + b', 'a − b'))],
      [m('Show that n<sup>2</sup> + n is even for every whole number n'), m('n<sup>2</sup> + n = n(n + 1)') + ' — two consecutive whole numbers, so one of them is even.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Algebra 8, pp. 3–6 (revision exercises). Written work, about 20 minutes.',
  homework: [
    m('Simplify: (2x<sup>3</sup>)<sup>2</sup> · 3x ÷ 4x<sup>4</sup>') + ' &nbsp;<span class="small">(answer: 3x<sup>3</sup>)</span>',
    m('Expand and simplify: (2x − 1)(x + 5) − 2x<sup>2</sup>') + ' &nbsp;<span class="small">(answer: 9x − 5)</span>',
    m('Factorise: 3x<sup>2</sup> − 12'),
    m('Factorise: x<sup>2</sup> + 8x + 16'),
    m('Solve: ' + f('2x + 1', '4') + ' − ' + f('x', '3') + ' = 1')
  ]
});

/* ============================== 2 ============================== */
G8_ALG_Q1.push({
  id: 'alg-02', stream: 'alg', grade: 8, quarter: 1, lessons: '4–5', hours: 2,
  title: 'Algebraic expressions',
  subtitle: 'Whole expressions, fractional expressions, and the values of the variable that are simply not allowed.',
  uz: 'Algebra 8, §1', uzPage: '§1, pp. 7–11',
  cam: 'Stage 9 · 2.1–2.2', camPage: 'Learner’s Book pp. 22–29', wb: 'Workbook 2.1–2.2',
  objectives: [
    'Tell a whole (integer) expression from a fractional one.',
    'Find the permissible values of the variable — the domain of an expression.',
    'Evaluate an algebraic expression for given values of its letters.',
    'Write a described quantity as an algebraic expression.'
  ],
  sections: [
    {
      h: 'Two kinds of expression',
      html: `<p>An expression built from numbers and letters using addition, subtraction,
      multiplication and raising to a whole power — but <b>never dividing by a letter</b> — is called a
      <b>whole</b> or <b>integer expression</b>.</p>
      ${eq(m('3x<sup>2</sup> − 5x + 1') + ' &nbsp;&nbsp; ' + m(f('2a', '7')) + ' &nbsp;&nbsp; ' + m('(x − y)<sup>3</sup>'), true)}
      <p>If the expression divides by something containing a letter, it is a
      <b>fractional expression</b>.</p>
      ${eq(m(f('5', 'x')) + ' &nbsp;&nbsp; ' + m(f('x + 1', 'x − 3')) + ' &nbsp;&nbsp; ' + m('2 + ' + f('1', 'a')), true)}
      <p>Note the difference between ${m(f('2a', '7'))} and ${m(f('7', '2a'))}. The first divides by the
      <em>number</em> 7 and is whole; the second divides by ${m('2a')} and is fractional. It is the letter
      in the denominator that changes everything.</p>`
    },
    {
      h: 'Permissible values of the variable',
      html: `<p>A whole expression has a value for <em>every</em> value of its letters. A fractional
      expression does not: division by zero has no meaning.</p>
      <div class="keybox"><div class="klabel">Definition</div>
      The <b>permissible values</b> of the variable are all the values for which the expression has a
      value — that is, all values that do not make any denominator zero.</div>
      <p>So for ${m(f('x + 1', 'x − 3'))} we must exclude ${m('x = 3')}, and we write ${m('x ≠ 3')}.</p>
      <p>To find them: set every denominator equal to zero, solve, and exclude those answers.</p>
      ${eq(m('x<sup>2</sup> − 9 = 0 ⟹ x = 3 or x = −3, so x ≠ ±3'))}
      {{fig:numberLineExcluded:The two excluded points are drawn as open circles — the line has holes there.}}
      <div class="warn"><span class="wl">Careful</span>
      Some denominators never vanish. ${m('x<sup>2</sup> + 4')} is at least 4 for every real ${m('x')},
      so ${m(f('3', 'x<sup>2</sup> + 4'))} is defined for <b>all</b> values of ${m('x')}.</div>`
    },
    {
      h: 'The value of an expression',
      html: `<p>To evaluate, substitute and calculate — but check the value is permissible first.</p>
      <p>${m(f('a<sup>2</sup> − b<sup>2</sup>', 'a − b'))} at ${m('a = 7, b = 3')}: the denominator is
      ${m('7 − 3 = 4 ≠ 0')}, so the value is ${m(f('49 − 9', '4') + ' = 10')}.</p>
      <p>At ${m('a = 3, b = 3')} the denominator is 0 — the expression has no value there at all.</p>`
    },
    {
      h: 'Writing expressions from words',
      html: `<ul>
        <li>“a number 5 more than three times ${m('x')}” → ${m('3x + 5')}</li>
        <li>“the reciprocal of ${m('x − 5')}” → ${m(f('1', 'x − 5'))}, with ${m('x ≠ 5')}</li>
        <li>“the average speed for ${m('s')} km covered in ${m('t')} hours” → ${m(f('s', 't'))}, with ${m('t ≠ 0')}</li>
      </ul>`
    }
  ],
  examples: [
    {
      q: m('Find the permissible values of ' + f('x + 1', 'x² − 5x + 6')),
      steps: [
        [m('x<sup>2</sup> − 5x + 6 = 0'), 'Set the denominator to zero.'],
        [m('(x − 2)(x − 3) = 0'), 'Factorise.'],
        [m('x = 2 or x = 3'), 'These are the forbidden values.'],
        [m('x ≠ 2, x ≠ 3'), 'Everything else is permitted.']
      ],
      ans: m('x ≠ 2 and x ≠ 3')
    },
    {
      q: m('For which x is ' + f('x − 2', 'x + 3') + ' equal to zero?'),
      steps: [
        ['A fraction is zero exactly when its <b>numerator</b> is zero and its denominator is not.', 'Both conditions matter.'],
        [m('x − 2 = 0 ⟹ x = 2'), 'Numerator condition.'],
        [m('at x = 2 the denominator is 5 ≠ 0 ✓'), 'Check the value is permissible.']
      ],
      ans: m('x = 2')
    }
  ],
  modelNote: 'Slide x across the excluded value and let the class watch the fraction break.',
  interactive: {
    type: 'substitute',
    expr: m(f('x + 1', 'x<sup>2</sup> − 4')),
    f: function (x) { return (x + 1) / (x * x - 4); },
    den: function (x) { return x * x - 4; },
    bad: ['2', '−2'], min: -6, max: 6, start: 3
  },
  quiz: [
    { q: 'Which of these is a <b>fractional</b> expression?', a: [m(f('3x', '5')), m(f('5', '3x')), m('3x − 5'), m('(3x)<sup>2</sup>')], c: 1, why: 'Only the second divides by an expression containing a letter.' },
    { q: 'The permissible values of ' + m(f('7', 'x + 2')) + ' are:', a: [m('x ≠ 2'), m('x ≠ −2'), m('x ≠ 0'), 'all values of x'], c: 1, why: 'x + 2 = 0 gives x = −2, so that single value is excluded.' },
    { q: 'For which x is ' + m(f('4', 'x² + 1')) + ' undefined?', a: [m('x = 1'), m('x = −1'), m('x = ±1'), 'never — it is defined for all x'], c: 3, why: 'x² + 1 ≥ 1 for every real x, so the denominator is never zero.' },
    { q: 'The value of ' + m(f('x² − 4', 'x + 2')) + ' at ' + m('x = 3') + ' is:', a: [m('1'), m('5'), m('0'), 'undefined'], c: 0, why: '(9 − 4)/(3 + 2) = 5/5 = 1.' }
  ],
  practice: {
    easy: [
      [m('Which of 3x/5, 5/x, x/2 + 1, 7/(x − 1) are fractional expressions?'), m('5/x') + ' and ' + m('7/(x − 1)')],
      [m('Permissible values of ' + f('1', 'x')), m('x ≠ 0')],
      [m('Permissible values of ' + f('1', 'x − 4')), m('x ≠ 4')],
      [m('Permissible values of ' + f('1', 'x + 7')), m('x ≠ −7')],
      [m('Value of ' + f('x + 3', 'x − 1') + ' when x = 5'), m('2')],
      [m('Value of ' + f('2a', 'a + 2') + ' when a = 4'), m(f('4', '3'))],
      [m('Permissible values of ' + f('3', '2x')), m('x ≠ 0')]
    ],
    med: [
      [m('Permissible values of ' + f('x + 1', 'x<sup>2</sup> − 9')), m('x ≠ 3, x ≠ −3')],
      [m('Permissible values of ' + f('2x', 'x<sup>2</sup> + 1')), 'All values of ' + m('x') + ' — the denominator is never 0.'],
      [m('Permissible values of ' + f('5', 'x<sup>2</sup> − 4x')), m('x ≠ 0, x ≠ 4')],
      [m('Value of ' + f('a<sup>2</sup> − b<sup>2</sup>', 'a − b') + ' when a = 7, b = 3'), m('10')],
      [m('Value of ' + f('x<sup>2</sup> − 4', 'x + 2') + ' when x = 3'), m('1')],
      [m('Write the reciprocal of x − 5 and state its permissible values'), m(f('1', 'x − 5')) + ', ' + m('x ≠ 5')],
      [m('For which x is ' + f('x − 2', 'x + 3') + ' = 0?'), m('x = 2')]
    ],
    hard: [
      [m('Permissible values of ' + f('x − 1', 'x<sup>2</sup> − 5x + 6')), m('x ≠ 2, x ≠ 3')],
      [m('Permissible values of ' + f('1', 'x<sup>2</sup> + x')), m('x ≠ 0, x ≠ −1')],
      [m('Solve ' + f('x<sup>2</sup> − 9', 'x − 3') + ' = 0'), m('x = −3') + ' only — ' + m('x = 3') + ' is not permissible.'],
      [m('Simplify, then evaluate ' + f('x<sup>2</sup> − 6x + 9', 'x − 3') + ' at x = 10'), m('x − 3 = 7')],
      [m('Permissible values of ' + f('3', '|x| − 2')), m('x ≠ 2, x ≠ −2')],
      [m('Explain why ' + f('a<sup>2</sup> + 1', 'a<sup>2</sup> + 2') + ' can never equal 1'), 'Equality would force ' + m('a<sup>2</sup> + 1 = a<sup>2</sup> + 2') + ', i.e. ' + m('1 = 2') + '.'],
      [m('For which x is ' + f('x + 4', 'x<sup>2</sup> + 4') + ' undefined?'), 'For no value — ' + m('x<sup>2</sup> + 4 ≥ 4') + ' always.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Algebra 8, §1, pp. 7–11. Cambridge Workbook 2.1 for the substitution practice.',
  homework: [
    m('State the permissible values of ' + f('x + 5', 'x<sup>2</sup> − 16')),
    m('State the permissible values of ' + f('2', 'x<sup>2</sup> + 3x')),
    m('Find the value of ' + f('a + b', 'a − b') + ' when a = 9, b = 4'),
    m('For which x is ' + f('x + 6', 'x − 1') + ' equal to zero?'),
    'A car covers ' + m('s') + ' km in ' + m('t') + ' hours. Write its average speed as an algebraic expression and state the permissible values of ' + m('t') + '.'
  ]
});

/* ============================== 3 ============================== */
G8_ALG_Q1.push({
  id: 'alg-03', stream: 'alg', grade: 8, quarter: 1, lessons: '6–8', hours: 3,
  title: 'Algebraic fraction. Cancelling fractions',
  subtitle: 'The fundamental property of a fraction, and the single rule that governs every simplification in this chapter: factorise first, cancel second.',
  uz: 'Algebra 8, §2', uzPage: '§2, pp. 12–17',
  cam: 'Stage 9 · 2.5', camPage: 'Learner’s Book pp. 40–44', wb: 'Workbook 2.5',
  objectives: [
    'State what an algebraic fraction is and give its permissible values.',
    'Use the fundamental property of a fraction in both directions.',
    'Cancel a fraction by factorising the numerator and the denominator.',
    'Handle the sign rules, including the swap ' + m('b − a = −(a − b)') + '.'
  ],
  sections: [
    {
      h: 'What an algebraic fraction is',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      An expression of the form ${m(f('A', 'B'))}, where ${m('A')} and ${m('B')} are polynomials and
      ${m('B')} is not the zero polynomial, is called an <b>algebraic fraction</b>.
      ${m('A')} is the numerator, ${m('B')} the denominator.</div>
      <p>It is defined only for values that keep ${m('B ≠ 0')}. Every answer in this chapter carries that
      condition, whether or not the question asks for it.</p>`
    },
    {
      h: 'The fundamental property',
      html: `<div class="keybox"><div class="klabel">The rule everything rests on</div>
      ${eq(m(f('A', 'B') + ' = ' + f('A · C', 'B · C')) + ',&nbsp;&nbsp; where ' + m('C ≠ 0'))}
      Multiplying — or dividing — the numerator and the denominator by the same non-zero expression
      does not change the fraction.</div>
      <p>Read left to right it lets you <b>build up</b> a fraction to a required denominator, which is
      what you need for addition. Read right to left it lets you <b>cancel</b>, which is what you need
      now. It is the same rule both ways.</p>`
    },
    {
      h: 'Cancelling — the method',
      html: `<ol>
        <li><b>Factorise</b> the numerator completely.</li>
        <li><b>Factorise</b> the denominator completely.</li>
        <li>Cancel every factor common to both.</li>
        <li>State the permissible values.</li>
      </ol>
      ${eq(m(f('x<sup>2</sup> − 9', 'x + 3') + ' = ' + f('(x − 3)(x + 3)', 'x + 3') + ' = x − 3') + ',&nbsp;&nbsp;' + m('x ≠ −3'), true)}
      <div class="warn"><span class="wl">The one mistake that costs the most marks</span>
      You may cancel <b>factors</b>, never <b>terms</b>.
      ${m(f('x + 3', '3'))} is <b>not</b> ${m('x')} — the 3 in the numerator is added, not multiplied.
      If you cannot see a bracket around the whole numerator, you cannot cancel.</div>`
    },
    {
      h: 'Signs, and the swap that saves you',
      html: `<p>A minus sign may sit in three places, and all three mean the same thing:</p>
      ${eq(m('−' + f('a', 'b') + ' = ' + f('−a', 'b') + ' = ' + f('a', '−b')), true)}
      <p>The move you will use constantly:</p>
      ${eq(m('b − a = −(a − b)'), true)}
      <p>So ${m(f('3a − 3b', 'b − a') + ' = ' + f('3(a − b)', '−(a − b)') + ' = −3')}. Whenever a bracket
      appears reversed, pull out a minus sign and the factors match.</p>`
    }
  ],
  examples: [
    {
      q: m('Cancel ' + f('x² − 6x + 9', 'x² − 9')),
      steps: [
        [m('x<sup>2</sup> − 6x + 9 = (x − 3)<sup>2</sup>'), 'Numerator: perfect square.'],
        [m('x<sup>2</sup> − 9 = (x − 3)(x + 3)'), 'Denominator: difference of two squares.'],
        [m(f('(x − 3)(x − 3)', '(x − 3)(x + 3)')), 'Now the common factor is visible.'],
        [m(f('x − 3', 'x + 3')), 'Cancel one (x − 3) from top and bottom.'],
        [m('x ≠ 3, x ≠ −3'), 'Both zeros of the original denominator stay excluded.']
      ],
      ans: m(f('x − 3', 'x + 3')) + ', &nbsp;' + m('x ≠ ±3')
    },
    {
      q: m('Cancel ' + f('2x² + 7x + 3', 'x² − 9')),
      steps: [
        [m('2 · 3 = 6, and 1 + 6 = 7'), 'Split the middle term of the numerator.'],
        [m('2x<sup>2</sup> + x + 6x + 3 = x(2x + 1) + 3(2x + 1) = (2x + 1)(x + 3)'), 'Group and factor.'],
        [m('x<sup>2</sup> − 9 = (x − 3)(x + 3)'), 'Denominator.'],
        [m(f('(2x + 1)(x + 3)', '(x − 3)(x + 3)') + ' = ' + f('2x + 1', 'x − 3')), 'Cancel (x + 3).']
      ],
      ans: m(f('2x + 1', 'x − 3')) + ', &nbsp;' + m('x ≠ ±3')
    },
    {
      q: m('Cancel ' + f('m² − mn', 'n² − mn')),
      steps: [
        [m('m<sup>2</sup> − mn = m(m − n)'), 'Common factor m.'],
        [m('n<sup>2</sup> − mn = n(n − m)'), 'Common factor n.'],
        [m('n − m = −(m − n)'), 'Reverse the bracket so it matches the numerator.'],
        [m(f('m(m − n)', '−n(m − n)') + ' = −' + f('m', 'n')), 'Cancel (m − n); the minus sign stays.']
      ],
      ans: m('−' + f('m', 'n')) + ', &nbsp;' + m('n ≠ 0, m ≠ n')
    }
  ],
  modelNote: 'Do the first one with the class; let a learner predict each next step before you reveal it.',
  interactive: {
    type: 'fractionCancel',
    items: [
      {
        title: '(x² − 9) / (x + 3)',
        start: m(f('x<sup>2</sup> − 9', 'x + 3')),
        steps: [
          [m('x<sup>2</sup> − 9 = (x − 3)(x + 3)'), 'Difference of two squares.'],
          [m(f('(x − 3)(x + 3)', 'x + 3')), 'The denominator is already a single factor.'],
          [m('x − 3'), 'Cancel (x + 3) — but remember x ≠ −3.']
        ],
        answer: m('x − 3') + ', &nbsp;' + m('x ≠ −3')
      },
      {
        title: '(2x + 6) / (x² − 9)',
        start: m(f('2x + 6', 'x<sup>2</sup> − 9')),
        steps: [
          [m('2x + 6 = 2(x + 3)'), 'Common factor 2.'],
          [m('x<sup>2</sup> − 9 = (x − 3)(x + 3)'), 'Difference of two squares.'],
          [m(f('2(x + 3)', '(x − 3)(x + 3)') + ' = ' + f('2', 'x − 3')), 'Cancel (x + 3).']
        ],
        answer: m(f('2', 'x − 3')) + ', &nbsp;' + m('x ≠ ±3')
      },
      {
        title: '(a² − b²) / (a² + 2ab + b²)',
        start: m(f('a<sup>2</sup> − b<sup>2</sup>', 'a<sup>2</sup> + 2ab + b<sup>2</sup>')),
        steps: [
          [m('a<sup>2</sup> − b<sup>2</sup> = (a − b)(a + b)'), 'Difference of squares.'],
          [m('a<sup>2</sup> + 2ab + b<sup>2</sup> = (a + b)<sup>2</sup>'), 'Perfect square.'],
          [m(f('(a − b)(a + b)', '(a + b)(a + b)') + ' = ' + f('a − b', 'a + b')), 'Cancel one (a + b).']
        ],
        answer: m(f('a − b', 'a + b')) + ', &nbsp;' + m('a ≠ −b')
      },
      {
        title: '(3a − 3b) / (b − a)  — the sign trap',
        start: m(f('3a − 3b', 'b − a')),
        steps: [
          [m('3a − 3b = 3(a − b)'), 'Common factor 3.'],
          [m('b − a = −(a − b)'), 'Reverse the bracket and take the minus outside.'],
          [m(f('3(a − b)', '−(a − b)') + ' = −3'), 'Cancel (a − b). The answer is a plain number.']
        ],
        answer: m('−3') + ', &nbsp;' + m('a ≠ b')
      }
    ]
  },
  quiz: [
    { q: m(f('x + 3', '3')) + ' simplifies to:', a: [m('x'), m('x + 1'), 'it does not simplify', m(f('x', '3'))], c: 2, why: 'The 3 on top is a term, not a factor. Only factors cancel.' },
    { q: m(f('6a', '9a')) + ' equals:', a: [m(f('2', '3')), m(f('2a', '3')), m(f('6', '9a')), m('3')], c: 0, why: 'Cancel 3 and a: 6a/9a = 2/3, provided a ≠ 0.' },
    { q: m(f('x² − 4x', 'x − 4')) + ' equals:', a: [m('x − 4'), m('x'), m('4x'), m(f('x', '4'))], c: 1, why: 'x² − 4x = x(x − 4), then cancel (x − 4).' },
    { q: m('b − a') + ' is the same as:', a: [m('a − b'), m('−(a − b)'), m('−(b − a)'), m('(a − b)<sup>2</sup>')], c: 1, why: 'Taking out −1 reverses the bracket — the move that rescues most sign problems.' }
  ],
  practice: {
    easy: [
      [m('Cancel: ' + f('6a', '9a')), m(f('2', '3')) + ', ' + m('a ≠ 0')],
      [m('Cancel: ' + f('12x<sup>2</sup>', '4x')), m('3x') + ', ' + m('x ≠ 0')],
      [m('Cancel: ' + f('5ab', '10a')), m(f('b', '2')) + ', ' + m('a ≠ 0')],
      [m('Cancel: ' + f('x<sup>2</sup>', 'x<sup>5</sup>')), m(f('1', 'x<sup>3</sup>')) + ', ' + m('x ≠ 0')],
      [m('Cancel: ' + f('3(x + 1)', '6(x + 1)')), m(f('1', '2')) + ', ' + m('x ≠ −1')],
      [m('Cancel: ' + f('a + b', '2(a + b)')), m(f('1', '2')) + ', ' + m('a ≠ −b')],
      [m('Cancel: ' + f('−4x', '8x')), m('−' + f('1', '2')) + ', ' + m('x ≠ 0')]
    ],
    med: [
      [m('Cancel: ' + f('x<sup>2</sup> − 9', 'x + 3')), m('x − 3') + ', ' + m('x ≠ −3')],
      [m('Cancel: ' + f('x<sup>2</sup> − 4x', 'x − 4')), m('x') + ', ' + m('x ≠ 4')],
      [m('Cancel: ' + f('2x + 6', 'x<sup>2</sup> − 9')), m(f('2', 'x − 3')) + ', ' + m('x ≠ ±3')],
      [m('Cancel: ' + f('a<sup>2</sup> − b<sup>2</sup>', 'a<sup>2</sup> + 2ab + b<sup>2</sup>')), m(f('a − b', 'a + b')) + ', ' + m('a ≠ −b')],
      [m('Cancel: ' + f('x<sup>2</sup> − 6x + 9', 'x<sup>2</sup> − 9')), m(f('x − 3', 'x + 3')) + ', ' + m('x ≠ ±3')],
      [m('Cancel: ' + f('5x − 5y', 'x<sup>2</sup> − y<sup>2</sup>')), m(f('5', 'x + y')) + ', ' + m('x ≠ ±y')],
      [m('Cancel: ' + f('3a − 3b', 'b − a')), m('−3') + ', ' + m('a ≠ b')]
    ],
    hard: [
      [m('Cancel: ' + f('x<sup>3</sup> − x', 'x<sup>2</sup> + x')), m('x − 1') + ', ' + m('x ≠ 0, −1')],
      [m('Cancel: ' + f('x<sup>2</sup> − 5x + 6', 'x<sup>2</sup> − 4')), m(f('x − 3', 'x + 2')) + ', ' + m('x ≠ ±2')],
      [m('Cancel: ' + f('2x<sup>2</sup> + 7x + 3', 'x<sup>2</sup> − 9')), m(f('2x + 1', 'x − 3')) + ', ' + m('x ≠ ±3')],
      [m('Cancel: ' + f('a<sup>3</sup> − b<sup>3</sup>', 'a<sup>2</sup> − b<sup>2</sup>')), m(f('a<sup>2</sup> + ab + b<sup>2</sup>', 'a + b')) + ', ' + m('a ≠ ±b')],
      [m('Cancel: ' + f('x<sup>4</sup> − 16', 'x<sup>2</sup> + 4')), m('x<sup>2</sup> − 4')],
      [m('Cancel: ' + f('m<sup>2</sup> − mn', 'n<sup>2</sup> − mn')), m('−' + f('m', 'n')) + ', ' + m('n ≠ 0, m ≠ n')],
      [m('Cancel: ' + f('x<sup>2</sup> + x − 6', 'x<sup>2</sup> − 4x + 4')), m(f('x + 3', 'x − 2')) + ', ' + m('x ≠ 2')]
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, §2, pp. 12–17. State the permissible values with every answer.',
  homework: [
    m('Cancel: ' + f('8xy', '12x')),
    m('Cancel: ' + f('x<sup>2</sup> − 25', 'x − 5')),
    m('Cancel: ' + f('3x + 12', 'x<sup>2</sup> − 16')),
    m('Cancel: ' + f('x<sup>2</sup> + 4x + 4', 'x<sup>2</sup> − 4')),
    m('Cancel: ' + f('7a − 7b', 'b − a')),
    'Explain in one sentence why ' + m(f('x + 5', '5')) + ' cannot be cancelled.'
  ]
});

/* ============================== 4 ============================== */
G8_ALG_Q1.push({
  id: 'alg-04', stream: 'alg', grade: 8, quarter: 1, lessons: '9–11', hours: 3,
  title: 'Reducing fractions to a common denominator',
  subtitle: 'Building fractions up instead of cutting them down — the fundamental property read from left to right.',
  uz: 'Algebra 8, §3', uzPage: '§3, pp. 18–21',
  cam: 'Stage 9 · 2.5', camPage: 'Learner’s Book pp. 40–44', wb: 'Workbook 2.5',
  objectives: [
    'Factorise denominators and build the lowest common denominator from the factors.',
    'Find the additional factor for each fraction.',
    'Rewrite two or three fractions with the same denominator.',
    'Recognise the reversed-bracket case ' + m('a − b') + ' and ' + m('b − a') + '.'
  ],
  sections: [
    {
      h: 'Why a common denominator at all',
      html: `<p>You cannot add ${m(f('1', '2'))} and ${m(f('1', '3'))} directly because the pieces are
      different sizes. Cut both into sixths and the addition becomes counting. Algebraic fractions
      behave exactly the same way — only the “sixths” are now expressions.</p>`
    },
    {
      h: 'The lowest common denominator',
      html: `<div class="keybox"><div class="klabel">Method</div>
      <ol style="margin:0">
        <li>Factorise every denominator completely.</li>
        <li>Take <b>every factor that appears anywhere</b>, each to its <b>highest</b> power.</li>
        <li>The product of these is the lowest common denominator (LCD).</li>
        <li>Divide the LCD by each denominator — that quotient is the fraction's <b>additional factor</b>.</li>
        <li>Multiply the numerator and denominator of each fraction by its additional factor.</li>
      </ol></div>
      <p>Numbers work the same way. For ${m(f('1', '4x'))} and ${m(f('1', '6y'))}: the numerical LCM of
      4 and 6 is 12, the letters give ${m('xy')}, so the LCD is ${m('12xy')}.</p>`
    },
    {
      h: 'A worked pattern',
      html: `<p>Bring ${m(f('3', 'x<sup>2</sup> − 9'))} and ${m(f('1', 'x − 3'))} to a common denominator.</p>
      ${eq(m('x<sup>2</sup> − 9 = (x − 3)(x + 3)') + ',&nbsp;&nbsp;' + m('x − 3 = (x − 3)'))}
      <p>Every factor that appears: ${m('(x − 3)')} and ${m('(x + 3)')}, each to the first power. So</p>
      ${eq(m('LCD = (x − 3)(x + 3)'), true)}
      <p>The first fraction already has it — additional factor 1. The second needs ${m('(x + 3)')}:</p>
      ${eq(m(f('3', '(x − 3)(x + 3)')) + '&nbsp;&nbsp; and &nbsp;&nbsp;' + m(f('x + 3', '(x − 3)(x + 3)')))}
      <div class="warn"><span class="wl">Do not multiply blindly</span>
      Multiplying the denominators together always <em>works</em>, but it can give
      ${m('(x − 3)(x + 3)(x − 3)')} where ${m('(x − 3)(x + 3)')} was enough — and then you are cancelling
      it back down at the end. Factorise first, and the lowest denominator appears by itself.</div>`
    },
    {
      h: 'When one denominator is the reverse of the other',
      html: `<p>${m('x − y')} and ${m('y − x')} are not different denominators — they differ by a sign.
      Multiply the second fraction's numerator and denominator by ${m('−1')}:</p>
      ${eq(m(f('y', 'y − x') + ' = ' + f('−y', 'x − y')), true)}
      <p>Now both fractions share the denominator ${m('x − y')} and no extra factors are needed.</p>`
    }
  ],
  examples: [
    {
      q: m('Bring ' + f('1', 'x² − 4') + ' and ' + f('1', 'x² − 4x + 4') + ' to a common denominator'),
      steps: [
        [m('x<sup>2</sup> − 4 = (x − 2)(x + 2)'), 'First denominator.'],
        [m('x<sup>2</sup> − 4x + 4 = (x − 2)<sup>2</sup>'), 'Second denominator — note the square.'],
        [m('LCD = (x − 2)<sup>2</sup>(x + 2)'), '(x − 2) appears to the power 2, so take it squared.'],
        [m('additional factors: (x − 2) and (x + 2)'), 'LCD ÷ each denominator.'],
        [m(f('x − 2', '(x − 2)<sup>2</sup>(x + 2)')) + ' &nbsp;and&nbsp; ' + m(f('x + 2', '(x − 2)<sup>2</sup>(x + 2)')), 'Multiply top and bottom by them.']
      ],
      ans: m('LCD = (x − 2)<sup>2</sup>(x + 2)') + ', &nbsp;' + m('x ≠ ±2')
    },
    {
      q: m('Find the LCD of ' + f('2', '3a²b') + ' and ' + f('5', '6ab³')),
      steps: [
        [m('LCM(3, 6) = 6'), 'The numbers first.'],
        [m('a: highest power a<sup>2</sup>'), 'a² beats a.'],
        [m('b: highest power b<sup>3</sup>'), 'b³ beats b.'],
        [m('LCD = 6a<sup>2</sup>b<sup>3</sup>'), 'Multiply what you collected.']
      ],
      ans: m('6a<sup>2</sup>b<sup>3</sup>')
    }
  ],
  modelNote: 'Ask the class for the LCD before you open the table — then check their answer against it.',
  interactive: {
    type: 'lcdBuilder',
    items: [
      {
        label: '1/(x²−1) and 1/(x+1)',
        rows: [
          [m('x<sup>2</sup> − 1'), m('(x − 1)(x + 1)'), m('1')],
          [m('x + 1'), m('(x + 1)'), m('(x − 1)')]
        ],
        lcd: m('(x − 1)(x + 1) = x<sup>2</sup> − 1'),
        note: 'The first denominator already <em>is</em> the LCD — only the second has to be built up.'
      },
      {
        label: '1/(x²−4) and 1/(x²−4x+4)',
        rows: [
          [m('x<sup>2</sup> − 4'), m('(x − 2)(x + 2)'), m('(x − 2)')],
          [m('x<sup>2</sup> − 4x + 4'), m('(x − 2)<sup>2</sup>'), m('(x + 2)')]
        ],
        lcd: m('(x − 2)<sup>2</sup>(x + 2)'),
        note: '(x − 2) appears squared in the second denominator, so the LCD carries it squared.'
      },
      {
        label: '1/(x²+x) and 1/(x²−x)',
        rows: [
          [m('x<sup>2</sup> + x'), m('x(x + 1)'), m('(x − 1)')],
          [m('x<sup>2</sup> − x'), m('x(x − 1)'), m('(x + 1)')]
        ],
        lcd: m('x(x − 1)(x + 1)'),
        note: 'The common factor x is taken once, not twice — that is what makes the denominator <em>lowest</em>.'
      },
      {
        label: '2/(3a²b) and 5/(6ab³)',
        rows: [
          [m('3a<sup>2</sup>b'), m('3 · a<sup>2</sup> · b'), m('2b<sup>2</sup>')],
          [m('6ab<sup>3</sup>'), m('2 · 3 · a · b<sup>3</sup>'), m('a')]
        ],
        lcd: m('6a<sup>2</sup>b<sup>3</sup>'),
        note: 'Numbers by LCM, letters by highest power — the same rule applied twice.'
      }
    ]
  },
  quiz: [
    { q: 'The LCD of ' + m(f('1', 'x')) + ' and ' + m(f('1', 'x²')) + ' is:', a: [m('x'), m('x<sup>2</sup>'), m('x<sup>3</sup>'), m('2x')], c: 1, why: 'Take x to its highest power — x², which x already divides.' },
    { q: 'The LCD of ' + m(f('1', 'x − 1')) + ' and ' + m(f('1', 'x + 1')) + ' is:', a: [m('x<sup>2</sup> − 1'), m('x<sup>2</sup> + 1'), m('x'), m('(x − 1)<sup>2</sup>')], c: 0, why: 'The factors are different, so multiply them: (x − 1)(x + 1) = x² − 1.' },
    { q: 'To write ' + m(f('3', 'x')) + ' with denominator ' + m('x²') + ', the numerator becomes:', a: [m('3'), m('3x'), m('3x<sup>2</sup>'), m('x')], c: 1, why: 'The additional factor is x, so multiply the numerator by x too.' },
    { q: m(f('y', 'y − x')) + ' written with denominator ' + m('x − y') + ' is:', a: [m(f('y', 'x − y')), m(f('−y', 'x − y')), m(f('x', 'x − y')), 'impossible'], c: 1, why: 'Multiply top and bottom by −1: the denominator reverses and the numerator changes sign.' }
  ],
  practice: {
    easy: [
      [m('LCD of ' + f('1', '2') + ' and ' + f('1', '3')), m('6')],
      [m('LCD of ' + f('1', 'x') + ' and ' + f('1', 'y')), m('xy')],
      [m('LCD of ' + f('1', '2a') + ' and ' + f('1', '3a')), m('6a')],
      [m('LCD of ' + f('1', 'x') + ' and ' + f('1', 'x<sup>2</sup>')), m('x<sup>2</sup>')],
      [m('LCD of ' + f('1', 'x − 1') + ' and ' + f('1', 'x + 1')), m('(x − 1)(x + 1)')],
      [m('Write ' + f('3', 'x') + ' with denominator x<sup>2</sup>'), m(f('3x', 'x<sup>2</sup>'))],
      [m('Write ' + f('2', 'a') + ' with denominator ab'), m(f('2b', 'ab'))]
    ],
    med: [
      [m('LCD of ' + f('1', 'x<sup>2</sup> − 1') + ' and ' + f('1', 'x + 1')), m('(x − 1)(x + 1)')],
      [m('LCD of ' + f('1', '2x') + ' and ' + f('1', '3x<sup>2</sup>')), m('6x<sup>2</sup>')],
      [m('Bring ' + f('1', 'x − 2') + ' and ' + f('1', 'x + 2') + ' to a common denominator'), m(f('x + 2', 'x<sup>2</sup> − 4')) + ' and ' + m(f('x − 2', 'x<sup>2</sup> − 4'))],
      [m('LCD of ' + f('1', 'x<sup>2</sup> + 2x') + ' and ' + f('1', 'x + 2')), m('x(x + 2)')],
      [m('LCD of ' + f('1', 'a<sup>2</sup> − b<sup>2</sup>') + ' and ' + f('1', 'a − b')), m('(a − b)(a + b)')],
      [m('Bring ' + f('3', 'x<sup>2</sup> − 9') + ' and ' + f('1', 'x − 3') + ' to a common denominator'), m(f('3', 'x<sup>2</sup> − 9')) + ' and ' + m(f('x + 3', 'x<sup>2</sup> − 9'))],
      [m('LCD of ' + f('1', '4x') + ' and ' + f('1', '6y')), m('12xy')]
    ],
    hard: [
      [m('LCD of ' + f('1', 'x<sup>2</sup> − 4') + ' and ' + f('1', 'x<sup>2</sup> − 4x + 4')), m('(x − 2)<sup>2</sup>(x + 2)')],
      [m('LCD of ' + f('1', 'x<sup>2</sup> + x') + ' and ' + f('1', 'x<sup>2</sup> − x')), m('x(x − 1)(x + 1)')],
      [m('LCD of ' + f('1', 'x<sup>2</sup> + 5x + 6') + ' and ' + f('1', 'x<sup>2</sup> + 4x + 4')), m('(x + 2)<sup>2</sup>(x + 3)')],
      [m('Bring ' + f('1', 'x<sup>2</sup> − 1') + ' and ' + f('1', 'x<sup>2</sup> + 2x + 1') + ' to a common denominator'), 'LCD ' + m('(x − 1)(x + 1)<sup>2</sup>') + ': ' + m(f('x + 1', '(x − 1)(x + 1)<sup>2</sup>')) + ' and ' + m(f('x − 1', '(x − 1)(x + 1)<sup>2</sup>'))],
      [m('LCD of ' + f('2', '3a<sup>2</sup>b') + ' and ' + f('5', '6ab<sup>3</sup>')), m('6a<sup>2</sup>b<sup>3</sup>')],
      [m('Bring ' + f('x', 'x − y') + ' and ' + f('y', 'y − x') + ' to a common denominator'), m(f('x', 'x − y')) + ' and ' + m(f('−y', 'x − y'))],
      [m('LCD of ' + f('1', 'x<sup>3</sup> − x') + ' and ' + f('1', 'x<sup>2</sup> − 2x + 1')), m('x(x − 1)<sup>2</sup>(x + 1)')]
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Algebra 8, §3, pp. 18–21. Factorise every denominator before you write the LCD.',
  homework: [
    m('Find the LCD of ' + f('1', 'x<sup>2</sup> − 25') + ' and ' + f('1', 'x + 5')),
    m('Find the LCD of ' + f('1', '6ab') + ' and ' + f('1', '9b<sup>2</sup>')),
    m('Bring ' + f('2', 'x − 3') + ' and ' + f('5', 'x + 3') + ' to a common denominator'),
    m('Bring ' + f('1', 'x<sup>2</sup> + x') + ' and ' + f('1', 'x') + ' to a common denominator'),
    m('Write ' + f('a', 'a − b') + ' and ' + f('b', 'b − a') + ' with the same denominator')
  ]
});

/* ============================== 5 ============================== */
G8_ALG_Q1.push({
  id: 'alg-05', stream: 'alg', grade: 8, quarter: 1, lessons: '12–14', hours: 3,
  title: 'Addition and subtraction of algebraic fractions',
  subtitle: 'Same denominator — add the numerators. Different denominators — build them the same first, then add.',
  uz: 'Algebra 8, §4', uzPage: '§4, pp. 22–26',
  cam: 'Stage 9 · 2.5', camPage: 'Learner’s Book pp. 40–44', wb: 'Workbook 2.5',
  objectives: [
    'Add and subtract fractions with the same denominator.',
    'Add and subtract fractions with different denominators using the LCD.',
    'Handle subtraction correctly — bracket the whole numerator being subtracted.',
    'Simplify the result and state the permissible values.'
  ],
  sections: [
    {
      h: 'Same denominator',
      html: `${eq(m(f('A', 'C') + ' ± ' + f('B', 'C') + ' = ' + f('A ± B', 'C')), true)}
      <p>Keep the denominator, combine the numerators, then <b>always try to cancel the result</b> —
      the answer is often much simpler than the working suggests.</p>
      ${eq(m(f('x', 'x + 3') + ' + ' + f('3', 'x + 3') + ' = ' + f('x + 3', 'x + 3') + ' = 1'))}`
    },
    {
      h: 'Different denominators',
      html: `<div class="keybox"><div class="klabel">Four steps, every time</div>
      <ol style="margin:0">
        <li>Factorise the denominators and find the LCD.</li>
        <li>Find each additional factor and build both fractions up.</li>
        <li>Combine the numerators over the single denominator.</li>
        <li>Simplify the numerator, cancel if you can, state the permissible values.</li>
      </ol></div>
      ${eq(m(f('1', 'x − 1') + ' + ' + f('1', 'x + 1') + ' = ' + f('(x + 1) + (x − 1)', '(x − 1)(x + 1)') + ' = ' + f('2x', 'x<sup>2</sup> − 1')), true)}`
    },
    {
      h: 'The bracket that everyone forgets',
      html: `<div class="warn"><span class="wl">Subtraction</span>
      When you subtract a fraction, the minus sign belongs to the <b>whole</b> numerator, so put it in
      a bracket before you open it.
      ${eq(m(f('2x', 'x<sup>2</sup> − 4') + ' − ' + f('1', 'x − 2') + ' = ' + f('2x − (x + 2)', '(x − 2)(x + 2)') + ' = ' + f('x − 2', '(x − 2)(x + 2)') + ' = ' + f('1', 'x + 2')))}
      Writing ${m('2x − x + 2')} instead of ${m('2x − (x + 2)')} changes the answer completely.</div>`
    },
    {
      h: 'A whole expression is a fraction too',
      html: `<p>Any expression can be written over the denominator 1, so it can join the sum:</p>
      ${eq(m('1 − ' + f('1', 'x + 1') + ' = ' + f('(x + 1) − 1', 'x + 1') + ' = ' + f('x', 'x + 1')), true)}`
    }
  ],
  examples: [
    {
      q: m('Simplify ' + f('5', 'x² − 9') + ' + ' + f('1', 'x + 3')),
      steps: [
        [m('x<sup>2</sup> − 9 = (x − 3)(x + 3)'), 'Factorise.'],
        [m('LCD = (x − 3)(x + 3)'), 'The second denominator is one of its factors.'],
        [m(f('5', '(x − 3)(x + 3)') + ' + ' + f('x − 3', '(x − 3)(x + 3)')), 'Additional factor (x − 3) for the second fraction.'],
        [m(f('5 + x − 3', '(x − 3)(x + 3)') + ' = ' + f('x + 2', 'x<sup>2</sup> − 9')), 'Combine and tidy the numerator.']
      ],
      ans: m(f('x + 2', 'x<sup>2</sup> − 9')) + ', &nbsp;' + m('x ≠ ±3')
    },
    {
      q: m('Simplify ' + f('1', 'x − 1') + ' − ' + f('2', 'x² − 1')),
      steps: [
        [m('x<sup>2</sup> − 1 = (x − 1)(x + 1)'), 'Factorise.'],
        [m('LCD = (x − 1)(x + 1)'), 'The first denominator needs the factor (x + 1).'],
        [m(f('x + 1', '(x − 1)(x + 1)') + ' − ' + f('2', '(x − 1)(x + 1)')), 'Build the first fraction up.'],
        [m(f('(x + 1) − 2', '(x − 1)(x + 1)') + ' = ' + f('x − 1', '(x − 1)(x + 1)')), 'Combine — keep the bracket.'],
        [m(f('1', 'x + 1')), 'Cancel (x − 1). Always look for this last step.']
      ],
      ans: m(f('1', 'x + 1')) + ', &nbsp;' + m('x ≠ ±1')
    },
    {
      q: m('Simplify ' + f('1', 'x(x + 1)') + ' + ' + f('1', '(x + 1)(x + 2)')),
      steps: [
        [m('LCD = x(x + 1)(x + 2)'), '(x + 1) is shared, so it is taken once.'],
        [m(f('x + 2', 'x(x + 1)(x + 2)') + ' + ' + f('x', 'x(x + 1)(x + 2)')), 'Additional factors (x + 2) and x.'],
        [m(f('2x + 2', 'x(x + 1)(x + 2)')), 'Combine the numerators.'],
        [m(f('2(x + 1)', 'x(x + 1)(x + 2)') + ' = ' + f('2', 'x(x + 2)')), 'Factorise the numerator and cancel (x + 1).']
      ],
      ans: m(f('2', 'x(x + 2)')) + ', &nbsp;' + m('x ≠ 0, −1, −2')
    }
  ],
  modelNote: 'Reveal the four steps one at a time and ask which step the class thinks comes next.',
  interactive: {
    type: 'fractionCancel',
    title: 'Adding and subtracting, step by step',
    hint: 'Pick a sum, then walk through the four steps with the class.',
    items: [
      {
        title: '1/(x−1) + 1/(x+1)',
        start: m(f('1', 'x − 1') + ' + ' + f('1', 'x + 1')),
        steps: [
          [m('LCD = (x − 1)(x + 1)'), 'Different factors, so multiply them.'],
          [m('additional factors: (x + 1) and (x − 1)'), 'LCD ÷ each denominator.'],
          [m(f('(x + 1) + (x − 1)', '(x − 1)(x + 1)')), 'Build both up and combine.'],
          [m(f('2x', 'x<sup>2</sup> − 1')), 'Tidy the numerator. Nothing cancels here.']
        ],
        answer: m(f('2x', 'x<sup>2</sup> − 1')) + ', &nbsp;' + m('x ≠ ±1')
      },
      {
        title: '2x/(x²−4) − 1/(x−2)   — mind the bracket',
        start: m(f('2x', 'x<sup>2</sup> − 4') + ' − ' + f('1', 'x − 2')),
        steps: [
          [m('x<sup>2</sup> − 4 = (x − 2)(x + 2), so LCD = (x − 2)(x + 2)'), 'Factorise first.'],
          [m(f('2x', '(x − 2)(x + 2)') + ' − ' + f('x + 2', '(x − 2)(x + 2)')), 'Additional factor (x + 2) for the second fraction.'],
          [m(f('2x − (x + 2)', '(x − 2)(x + 2)')), 'The bracket is compulsory — the minus hits both terms.'],
          [m(f('x − 2', '(x − 2)(x + 2)') + ' = ' + f('1', 'x + 2')), 'Simplify, then cancel (x − 2).']
        ],
        answer: m(f('1', 'x + 2')) + ', &nbsp;' + m('x ≠ ±2')
      },
      {
        title: '1/(a−b) + 1/(b−a)',
        start: m(f('1', 'a − b') + ' + ' + f('1', 'b − a')),
        steps: [
          [m('b − a = −(a − b)'), 'The denominators are the same up to a sign.'],
          [m(f('1', 'a − b') + ' − ' + f('1', 'a − b')), 'Rewrite the second fraction.'],
          [m('0'), 'They cancel exactly.']
        ],
        answer: m('0') + ', &nbsp;' + m('a ≠ b')
      },
      {
        title: '1 − 1/(x+1)',
        start: m('1 − ' + f('1', 'x + 1')),
        steps: [
          [m('1 = ' + f('x + 1', 'x + 1')), 'Write the whole number as a fraction with the same denominator.'],
          [m(f('(x + 1) − 1', 'x + 1')), 'Combine.'],
          [m(f('x', 'x + 1')), 'Tidy the numerator.']
        ],
        answer: m(f('x', 'x + 1')) + ', &nbsp;' + m('x ≠ −1')
      }
    ]
  },
  quiz: [
    { q: m(f('3', 'x') + ' + ' + f('5', 'x')) + ' equals:', a: [m(f('8', '2x')), m(f('8', 'x')), m(f('15', 'x')), m(f('8', 'x<sup>2</sup>'))], c: 1, why: 'Same denominator: add the numerators, keep the denominator.' },
    { q: m(f('2x', 'x² − 4') + ' − ' + f('1', 'x − 2')) + ' equals:', a: [m(f('1', 'x + 2')), m(f('2x − 1', 'x<sup>2</sup> − 4')), m(f('x + 2', 'x<sup>2</sup> − 4')), m(f('3x + 2', 'x<sup>2</sup> − 4'))], c: 0, why: 'Numerator 2x − (x + 2) = x − 2, which cancels with the factor (x − 2).' },
    { q: m(f('1', 'a − b') + ' + ' + f('1', 'b − a')) + ' equals:', a: [m(f('2', 'a − b')), m('0'), m(f('2', 'b − a')), 'it cannot be combined'], c: 1, why: 'b − a = −(a − b), so the two fractions are exact opposites.' },
    { q: m(f('x', 'x + 3') + ' + ' + f('3', 'x + 3')) + ' equals:', a: [m(f('x + 3', '2x + 6')), m('1'), m(f('3x', 'x + 3')), m('x')], c: 1, why: 'The numerator becomes x + 3, which cancels with the denominator.' }
  ],
  practice: {
    easy: [
      [m(f('3', 'x') + ' + ' + f('5', 'x')), m(f('8', 'x'))],
      [m(f('7', 'a') + ' − ' + f('2', 'a')), m(f('5', 'a'))],
      [m(f('x', '4') + ' + ' + f('x', '4')), m(f('x', '2'))],
      [m(f('2a', 'b') + ' + ' + f('3a', 'b')), m(f('5a', 'b'))],
      [m(f('1', '2') + ' + ' + f('1', 'x')), m(f('x + 2', '2x'))],
      [m(f('1', 'x') + ' − ' + f('1', 'y')), m(f('y − x', 'xy'))],
      [m(f('3', 'x + 1') + ' + ' + f('2', 'x + 1')), m(f('5', 'x + 1'))]
    ],
    med: [
      [m(f('1', 'x − 1') + ' + ' + f('1', 'x + 1')), m(f('2x', 'x<sup>2</sup> − 1'))],
      [m(f('1', 'x − 2') + ' − ' + f('1', 'x + 2')), m(f('4', 'x<sup>2</sup> − 4'))],
      [m(f('x', 'x + 3') + ' + ' + f('3', 'x + 3')), m('1') + ', ' + m('x ≠ −3')],
      [m(f('2', 'x') + ' + ' + f('3', 'x<sup>2</sup>')), m(f('2x + 3', 'x<sup>2</sup>'))],
      [m(f('a', 'a − b') + ' − ' + f('b', 'a − b')), m('1') + ', ' + m('a ≠ b')],
      [m(f('1', 'a') + ' + ' + f('1', 'b') + ' + ' + f('1', 'c')), m(f('bc + ac + ab', 'abc'))],
      [m(f('5', 'x<sup>2</sup> − 9') + ' + ' + f('1', 'x + 3')), m(f('x + 2', 'x<sup>2</sup> − 9'))]
    ],
    hard: [
      [m(f('1', 'x<sup>2</sup> − x') + ' + ' + f('1', 'x<sup>2</sup> + x')), m(f('2', 'x<sup>2</sup> − 1'))],
      [m(f('x', 'x − y') + ' − ' + f('y', 'x + y')), m(f('x<sup>2</sup> + y<sup>2</sup>', 'x<sup>2</sup> − y<sup>2</sup>'))],
      [m(f('1', 'a − b') + ' + ' + f('1', 'b − a')), m('0') + ', ' + m('a ≠ b')],
      [m(f('2x', 'x<sup>2</sup> − 4') + ' − ' + f('1', 'x − 2')), m(f('1', 'x + 2'))],
      [m('1 − ' + f('1', 'x + 1')), m(f('x', 'x + 1'))],
      [m(f('1', 'x − 1') + ' − ' + f('2', 'x<sup>2</sup> − 1')), m(f('1', 'x + 1'))],
      [m(f('1', 'x(x + 1)') + ' + ' + f('1', '(x + 1)(x + 2)')), m(f('2', 'x(x + 2)'))]
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, §4, pp. 22–26. Cancel the answer wherever you can.',
  homework: [
    m(f('4', 'x') + ' + ' + f('9', 'x')),
    m(f('1', 'x + 2') + ' + ' + f('1', 'x − 2')),
    m(f('3', 'x − 4') + ' − ' + f('3', 'x + 4')),
    m(f('x', 'x − 5') + ' − ' + f('5', 'x − 5')),
    m(f('1', 'x') + ' + ' + f('1', 'x<sup>2</sup>') + ' + ' + f('1', 'x<sup>3</sup>')),
    m('2 − ' + f('3', 'x − 1'))
  ]
});

/* ============================== 6 ============================== */
G8_ALG_Q1.push({
  id: 'alg-06', stream: 'alg', grade: 8, quarter: 1, lessons: '15–16', hours: 2,
  title: 'Control work 1 · Algebraic fractions',
  subtitle: 'The first assessment of the quarter, followed by a full lesson on the mistakes it produced.',
  uz: 'Algebra 8, §§1–4', uzPage: 'Revision of §§1–4',
  cam: 'Stage 9 · Unit 2 check', camPage: 'Learner’s Book pp. 21–54', wb: 'Workbook Unit 2',
  objectives: [
    'Assess: permissible values, cancelling, common denominators, addition and subtraction.',
    'Work through the errors the paper reveals, by type rather than by question.',
    'Re-solve every task that was lost, correctly and in full.'
  ],
  timing: [[2, 'Setting up'], [36, 'The paper'], [2, 'Collect in']],
  sections: [
    {
      h: 'Lesson 15 — the paper (40 minutes)',
      html: `<p>Two variants of seven tasks, printed below as the Easy and Medium practice sets. Both
      variants carry the same marks and cover the same four skills:</p>
      <ul>
        <li>tasks 1–2 · permissible values (§1)</li>
        <li>tasks 3–4 · cancelling a fraction (§2)</li>
        <li>task 5 · the lowest common denominator (§3)</li>
        <li>tasks 6–7 · addition and subtraction (§4)</li>
      </ul>
      <p>Marking: 2 marks per task, 14 in total. A mark is lost for a missing permissible-value
      condition even when the algebra is right — say this before the paper starts, not after.</p>`
    },
    {
      h: 'Lesson 16 — work on mistakes (40 minutes)',
      html: `<p>Do not go through the paper question by question. Sort the errors into the four types
      below, deal with each type once, then have every learner re-solve only their own lost tasks.</p>
      <div class="keybox"><div class="klabel">The four errors that account for almost everything</div>
      <ol style="margin:0">
        <li><b>Cancelling a term instead of a factor</b> — ${m(f('x + 5', '5'))} written as ${m('x')}.</li>
        <li><b>The missing bracket in a subtraction</b> — ${m('2x − x + 2')} instead of ${m('2x − (x + 2)')}.</li>
        <li><b>The permissible values dropped</b>, or taken from the <em>simplified</em> denominator
        instead of the original one.</li>
        <li><b>Multiplying the denominators together</b> without factorising, then failing to cancel back.</li>
      </ol></div>
      <p>The Hard set below is built entirely from these four errors: each task is a piece of wrong
      working to be found and repaired. That is a better use of the hour than a second full paper.</p>`
    }
  ],
  examples: [
    {
      q: 'Find and repair the error: ' + m(f('x + 4', '4') + ' = x'),
      steps: [
        ['The 4 on top is a <b>term</b> — it is added to x, not multiplied by it.', 'Only factors cancel.'],
        ['Write the numerator as a product to test it: ' + m('x + 4') + ' has no factor 4.', 'So there is nothing to cancel.'],
        [m(f('x + 4', '4') + ' = ' + f('x', '4') + ' + 1'), 'You may split it, but you may not cancel it.']
      ],
      ans: 'The expression does not simplify to ' + m('x') + '. A correct alternative form is ' + m(f('x', '4') + ' + 1') + '.'
    },
    {
      q: 'Find and repair the error: ' + m(f('3x', 'x² − 1') + ' − ' + f('1', 'x − 1') + ' = ' + f('3x − 1', 'x² − 1')),
      steps: [
        ['The second fraction was not built up to the LCD.', 'Its denominator is (x − 1), not (x − 1)(x + 1).'],
        [m('additional factor (x + 1)'), 'So the numerator becomes (x + 1), not 1.'],
        [m(f('3x − (x + 1)', '(x − 1)(x + 1)') + ' = ' + f('2x − 1', 'x<sup>2</sup> − 1')), 'Both errors — the factor and the bracket — corrected.']
      ],
      ans: m(f('2x − 1', 'x<sup>2</sup> − 1')) + ', &nbsp;' + m('x ≠ ±1')
    }
  ],
  modelNote: 'Use this in lesson 16: put a piece of wrong working on the board and let the class find the error before you reveal it.',
  interactive: {
    type: 'fractionCancel',
    title: 'Find the mistake',
    hint: 'Choose a piece of wrong working. Ask the class where it breaks, then reveal.',
    items: [
      {
        title: 'Error 1 — cancelling a term',
        start: '<b>Claimed:</b> ' + m(f('x + 5', '5') + ' = x'),
        steps: [
          ['The 5 in the numerator is added, not multiplied.', 'Cancelling needs a common <em>factor</em>.'],
          ['Test it with a number: at ' + m('x = 5') + ', the left side is ' + m(f('10', '5') + ' = 2') + ', the right side is 5.', 'One counter-example settles it.'],
          ['Correct: the fraction does not simplify. It may be split as ' + m(f('x', '5') + ' + 1') + '.', '']
        ],
        answer: 'No cancellation is possible. ' + m(f('x + 5', '5') + ' = ' + f('x', '5') + ' + 1')
      },
      {
        title: 'Error 2 — the missing bracket',
        start: '<b>Claimed:</b> ' + m(f('5x', 'x<sup>2</sup> − 9') + ' − ' + f('2', 'x − 3') + ' = ' + f('5x − 2x − 6', 'x<sup>2</sup> − 9')),
        steps: [
          ['The additional factor is right: ' + m('2(x + 3) = 2x + 6') + '.', 'So far so good.'],
          ['But the minus applies to the <b>whole</b> numerator: ' + m('5x − (2x + 6)') + '.', 'The written version subtracted only 2x and then added 6.'],
          [m(f('5x − 2x − 6', 'x<sup>2</sup> − 9') + ' = ' + f('3x − 6', 'x<sup>2</sup> − 9') + ' = ' + f('3(x − 2)', 'x<sup>2</sup> − 9')), 'Here the sign happened to be handled correctly — check yours by expanding the bracket first, every time.']
        ],
        answer: m(f('3x − 6', 'x<sup>2</sup> − 9')) + ', &nbsp;' + m('x ≠ ±3')
      },
      {
        title: 'Error 3 — permissible values from the wrong denominator',
        start: '<b>Claimed:</b> ' + m(f('x<sup>2</sup> − 9', 'x + 3') + ' = x − 3') + ', for all ' + m('x'),
        steps: [
          ['The algebra is correct: ' + m('(x − 3)(x + 3) ÷ (x + 3) = x − 3') + '.', ''],
          ['But the condition must come from the <b>original</b> denominator, ' + m('x + 3') + '.', 'The simplified form hides the hole.'],
          ['At ' + m('x = −3') + ' the original expression has no value at all.', 'So the two sides are not equal there.']
        ],
        answer: m('x − 3') + ', but only for ' + m('x ≠ −3')
      },
      {
        title: 'Error 4 — not factorising first',
        start: '<b>Claimed:</b> LCD of ' + m(f('1', 'x<sup>2</sup> − 1')) + ' and ' + m(f('1', 'x + 1')) + ' is ' + m('(x<sup>2</sup> − 1)(x + 1)'),
        steps: [
          ['Multiplying the denominators always gives <em>a</em> common denominator.', 'It is just not the lowest one.'],
          [m('x<sup>2</sup> − 1 = (x − 1)(x + 1)'), 'Now (x + 1) is visible in both.'],
          [m('LCD = (x − 1)(x + 1) = x<sup>2</sup> − 1'), 'One factor of (x + 1), not two.']
        ],
        answer: m('LCD = x<sup>2</sup> − 1')
      }
    ]
  },
  quiz: [
    { q: 'A learner writes ' + m(f('x + 7', '7') + ' = x') + '. The error is:', a: ['an arithmetic slip', 'cancelling a term instead of a factor', 'the permissible values', 'nothing — it is correct'], c: 1, why: 'The 7 on top is added. Substituting x = 7 gives 2 on the left and 7 on the right.' },
    { q: 'In ' + m(f('4x', 'x² − 1') + ' − ' + f('1', 'x − 1')) + ' the numerator after combining is:', a: [m('4x − 1'), m('4x − x − 1'), m('4x − (x + 1)'), m('4x + x + 1')], c: 2, why: 'The additional factor is (x + 1), and the whole of it is subtracted.' },
    { q: 'After simplifying ' + m(f('x² − 4', 'x − 2')) + ' to ' + m('x + 2') + ', the condition is:', a: [m('x ≠ −2'), m('x ≠ 2'), 'no condition', m('x ≠ 0')], c: 1, why: 'The condition comes from the original denominator x − 2.' },
    { q: 'The lowest common denominator of ' + m(f('1', 'x² − 4')) + ' and ' + m(f('1', 'x + 2')) + ' is:', a: [m('(x<sup>2</sup> − 4)(x + 2)'), m('x<sup>2</sup> − 4'), m('(x + 2)<sup>2</sup>'), m('x − 2')], c: 1, why: 'x² − 4 = (x − 2)(x + 2) already contains (x + 2).' }
  ],
  practice: {
    easy: [
      [m('<b>Variant 1, task 1.</b> State the permissible values of ' + f('x + 2', 'x − 6')), m('x ≠ 6')],
      [m('<b>Task 2.</b> State the permissible values of ' + f('4', 'x<sup>2</sup> − 16')), m('x ≠ ±4')],
      [m('<b>Task 3.</b> Cancel ' + f('15ab', '20a')), m(f('3b', '4')) + ', ' + m('a ≠ 0')],
      [m('<b>Task 4.</b> Cancel ' + f('x<sup>2</sup> − 16', 'x + 4')), m('x − 4') + ', ' + m('x ≠ −4')],
      [m('<b>Task 5.</b> Find the LCD of ' + f('1', 'x<sup>2</sup> − 4') + ' and ' + f('1', 'x − 2')), m('(x − 2)(x + 2)')],
      [m('<b>Task 6.</b> ' + f('5', 'x') + ' + ' + f('2', 'x')), m(f('7', 'x'))],
      [m('<b>Task 7.</b> ' + f('1', 'x − 3') + ' + ' + f('1', 'x + 3')), m(f('2x', 'x<sup>2</sup> − 9'))]
    ],
    med: [
      [m('<b>Variant 2, task 1.</b> State the permissible values of ' + f('x − 1', 'x + 5')), m('x ≠ −5')],
      [m('<b>Task 2.</b> State the permissible values of ' + f('3', 'x<sup>2</sup> − 5x')), m('x ≠ 0, x ≠ 5')],
      [m('<b>Task 3.</b> Cancel ' + f('18xy', '24y')), m(f('3x', '4')) + ', ' + m('y ≠ 0')],
      [m('<b>Task 4.</b> Cancel ' + f('x<sup>2</sup> − 8x + 16', 'x<sup>2</sup> − 16')), m(f('x − 4', 'x + 4')) + ', ' + m('x ≠ ±4')],
      [m('<b>Task 5.</b> Find the LCD of ' + f('1', 'x<sup>2</sup> + 3x') + ' and ' + f('1', 'x + 3')), m('x(x + 3)')],
      [m('<b>Task 6.</b> ' + f('9', '2a') + ' − ' + f('3', '2a')), m(f('3', 'a'))],
      [m('<b>Task 7.</b> ' + f('3x', 'x<sup>2</sup> − 1') + ' − ' + f('1', 'x − 1')), m(f('2x − 1', 'x<sup>2</sup> − 1'))]
    ],
    hard: [
      [m('Find the error: ' + f('x + 6', '6') + ' = x'), 'A term was cancelled. The expression equals ' + m(f('x', '6') + ' + 1') + '; test with ' + m('x = 6') + '.'],
      [m('Find the error: ' + f('2x', 'x<sup>2</sup> − 4') + ' − ' + f('1', 'x − 2') + ' = ' + f('2x − 1', 'x<sup>2</sup> − 4')), 'The second fraction was not built up. Correct answer ' + m(f('1', 'x + 2')) + '.'],
      [m('Find the error: ' + f('x<sup>2</sup> − 25', 'x − 5') + ' = x + 5 for every x'), 'True only for ' + m('x ≠ 5') + '; the condition comes from the original denominator.'],
      [m('Find the error: LCD of ' + f('1', 'x<sup>2</sup> − 9') + ' and ' + f('1', 'x − 3') + ' is (x<sup>2</sup> − 9)(x − 3)'), 'Not lowest. ' + m('LCD = x<sup>2</sup> − 9') + '.'],
      [m('Find the error: ' + f('1', 'x') + ' + ' + f('1', 'y') + ' = ' + f('1', 'x + y')), 'Denominators are never added. Correct: ' + m(f('x + y', 'xy')) + '; check with ' + m('x = y = 2') + '.'],
      [m('Find the error: ' + f('a − b', 'b − a') + ' = 1'), 'The brackets are reversed: ' + m('b − a = −(a − b)') + ', so the value is ' + m('−1') + '.'],
      [m('Find the error: ' + f('3', 'x − 2') + ' − ' + f('3', 'x + 2') + ' = 0'), 'Different denominators cannot cancel. Correct: ' + m(f('12', 'x<sup>2</sup> − 4')) + '.']
    ]
  },
  hwTitle: 'Homework after the work-on-mistakes lesson',
  hwNote: 'Re-solve, in full, every task you lost marks on. Then these three.',
  homework: [
    m('Cancel ' + f('x<sup>2</sup> − 7x + 12', 'x<sup>2</sup> − 9') + ' and state the permissible values'),
    m(f('2', 'x − 4') + ' − ' + f('2', 'x + 4')),
    'Write out, in your own words, the four errors listed in this lesson and one example of each.'
  ]
});

/* ============================== 7 ============================== */
G8_ALG_Q1.push({
  id: 'alg-07', stream: 'alg', grade: 8, quarter: 1, lessons: '17–19', hours: 3,
  title: 'Multiplication and division of algebraic fractions',
  subtitle: 'No common denominator needed — but factorise before you multiply, or you will multiply out work you are about to cancel.',
  uz: 'Algebra 8, §5', uzPage: '§5, pp. 27–29',
  cam: 'Stage 9 · 8.3–8.4', camPage: 'Learner’s Book pp. 175–184', wb: 'Workbook 8.3–8.4',
  objectives: [
    'Multiply algebraic fractions and simplify the result.',
    'Divide by multiplying by the reciprocal.',
    'Cancel across the multiplication sign before multiplying out.',
    'Raise an algebraic fraction to a power.'
  ],
  sections: [
    {
      h: 'The two rules',
      html: `${eq(m(f('A', 'B') + ' · ' + f('C', 'D') + ' = ' + f('A · C', 'B · D')) + ' &nbsp;&nbsp;&nbsp;&nbsp; ' + m(f('A', 'B') + ' : ' + f('C', 'D') + ' = ' + f('A', 'B') + ' · ' + f('D', 'C') + ' = ' + f('A · D', 'B · C')), true)}
      <p>Multiply straight across. To divide, <b>turn the second fraction upside down and multiply</b>.
      Nothing else changes.</p>
      <p>For division you need ${m('C ≠ 0')} as well as ${m('B ≠ 0')} and ${m('D ≠ 0')} — you cannot
      divide by a fraction whose numerator is zero.</p>`
    },
    {
      h: 'Cancel first, multiply last',
      html: `<div class="keybox"><div class="klabel">The habit that makes this topic easy</div>
      Factorise every numerator and denominator, cancel <b>anything on top against anything on the
      bottom</b>, and only then write down what is left. If you multiply out first you create a
      degree-4 polynomial that you must then factorise again.</div>
      ${eq(m(f('x<sup>2</sup> − 9', 'x') + ' · ' + f('x<sup>2</sup>', 'x + 3') + ' = ' + f('(x − 3)(x + 3)', 'x') + ' · ' + f('x · x', 'x + 3') + ' = x(x − 3)'))}
      <p>The ${m('(x + 3)')} cancels diagonally, and one ${m('x')} cancels with the other denominator.
      Two cancellations, no expansion.</p>`
    },
    {
      h: 'Powers of a fraction',
      html: `${eq(m('(' + f('A', 'B') + ')<sup>n</sup> = ' + f('A<sup>n</sup>', 'B<sup>n</sup>')), true)}
      <p>${m('(' + f('2x', '3y') + ')<sup>3</sup> = ' + f('8x<sup>3</sup>', '27y<sup>3</sup>'))} — the index
      reaches the numbers as well as the letters.</p>`
    },
    {
      h: 'Dividing by a whole expression',
      html: `<p>A whole expression is a fraction with denominator 1, so dividing by ${m('x + 1')} means
      multiplying by ${m(f('1', 'x + 1'))}:</p>
      ${eq(m(f('x<sup>2</sup> − 1', 'x') + ' : (x + 1) = ' + f('(x − 1)(x + 1)', 'x') + ' · ' + f('1', 'x + 1') + ' = ' + f('x − 1', 'x')), true)}`
    }
  ],
  examples: [
    {
      q: m('Simplify ' + f('2a', 'a + b') + ' : ' + f('4a²', 'a² − b²')),
      steps: [
        [m(f('2a', 'a + b') + ' · ' + f('a<sup>2</sup> − b<sup>2</sup>', '4a<sup>2</sup>')), 'Turn the second fraction over.'],
        [m('a<sup>2</sup> − b<sup>2</sup> = (a − b)(a + b)'), 'Factorise before multiplying.'],
        [m(f('2a · (a − b)(a + b)', '(a + b) · 4a<sup>2</sup>')), 'Now every factor is visible.'],
        [m(f('a − b', '2a')), 'Cancel (a + b), and cancel 2a against 4a².']
      ],
      ans: m(f('a − b', '2a')) + ', &nbsp;' + m('a ≠ 0, a ≠ ±b')
    },
    {
      q: m('Simplify ' + f('x² − 5x + 6', 'x² − 4') + ' · ' + f('x² + 2x', 'x − 3')),
      steps: [
        [m('x<sup>2</sup> − 5x + 6 = (x − 2)(x − 3)'), 'First numerator.'],
        [m('x<sup>2</sup> − 4 = (x − 2)(x + 2)'), 'First denominator.'],
        [m('x<sup>2</sup> + 2x = x(x + 2)'), 'Second numerator — common factor.'],
        [m(f('(x − 2)(x − 3)', '(x − 2)(x + 2)') + ' · ' + f('x(x + 2)', 'x − 3')), 'Everything factorised.'],
        [m('cancel (x − 2), (x + 2) and (x − 3)'), 'Three cancellations, all diagonal.']
      ],
      ans: m('x') + ', &nbsp;' + m('x ≠ ±2, x ≠ 3')
    },
    {
      q: m('Simplify (1 − ' + f('1', 'x') + ') : ' + f('x − 1', 'x²')),
      steps: [
        [m('1 − ' + f('1', 'x') + ' = ' + f('x − 1', 'x')), 'Combine the bracket first.'],
        [m(f('x − 1', 'x') + ' · ' + f('x<sup>2</sup>', 'x − 1')), 'Turn the divisor over.'],
        [m('cancel (x − 1), and x against x<sup>2</sup>'), 'Two cancellations.'],
        [m('x'), 'A surprisingly simple answer — typical of this topic.']
      ],
      ans: m('x') + ', &nbsp;' + m('x ≠ 0, x ≠ 1')
    }
  ],
  interactive: {
    type: 'fractionCancel',
    title: 'Multiplying and dividing, step by step',
    hint: 'Ask the class what to cancel before you reveal the next step.',
    items: [
      {
        title: '(x²−9)/x · x²/(x+3)',
        start: m(f('x<sup>2</sup> − 9', 'x') + ' · ' + f('x<sup>2</sup>', 'x + 3')),
        steps: [
          [m('x<sup>2</sup> − 9 = (x − 3)(x + 3)'), 'Factorise before anything else.'],
          [m(f('(x − 3)(x + 3)', 'x') + ' · ' + f('x · x', 'x + 3')), 'Split x² so the cancelling is visible.'],
          [m('cancel (x + 3) and one x'), 'Both cancellations go diagonally.'],
          [m('x(x − 3) = x<sup>2</sup> − 3x'), 'Multiply what is left.']
        ],
        answer: m('x(x − 3)') + ', &nbsp;' + m('x ≠ 0, x ≠ −3')
      },
      {
        title: '(2a)/(a+b) : (4a²)/(a²−b²)',
        start: m(f('2a', 'a + b') + ' : ' + f('4a<sup>2</sup>', 'a<sup>2</sup> − b<sup>2</sup>')),
        steps: [
          [m(f('2a', 'a + b') + ' · ' + f('a<sup>2</sup> − b<sup>2</sup>', '4a<sup>2</sup>')), 'Division becomes multiplication by the reciprocal.'],
          [m('a<sup>2</sup> − b<sup>2</sup> = (a − b)(a + b)'), 'Factorise.'],
          [m('cancel (a + b); 2a against 4a<sup>2</sup> leaves 2a below'), 'Two cancellations.'],
          [m(f('a − b', '2a')), '']
        ],
        answer: m(f('a − b', '2a')) + ', &nbsp;' + m('a ≠ 0, a ≠ ±b')
      },
      {
        title: '(x²−4)/(x²+4x+4) · (x+2)/(x−2)',
        start: m(f('x<sup>2</sup> − 4', 'x<sup>2</sup> + 4x + 4') + ' · ' + f('x + 2', 'x − 2')),
        steps: [
          [m('x<sup>2</sup> − 4 = (x − 2)(x + 2)'), 'Difference of squares.'],
          [m('x<sup>2</sup> + 4x + 4 = (x + 2)<sup>2</sup>'), 'Perfect square.'],
          [m(f('(x − 2)(x + 2)', '(x + 2)(x + 2)') + ' · ' + f('x + 2', 'x − 2')), 'Everything is a product now.'],
          [m('cancel (x − 2) and both (x + 2)'), 'Everything cancels.'],
          [m('1'), 'The answer is 1 — for every permissible x.']
        ],
        answer: m('1') + ', &nbsp;' + m('x ≠ ±2')
      },
      {
        title: '(1 − 1/x) : (x−1)/x²',
        start: m('(1 − ' + f('1', 'x') + ') : ' + f('x − 1', 'x<sup>2</sup>')),
        steps: [
          [m('1 − ' + f('1', 'x') + ' = ' + f('x − 1', 'x')), 'Always tidy a bracket before dividing.'],
          [m(f('x − 1', 'x') + ' · ' + f('x<sup>2</sup>', 'x − 1')), 'Reciprocal.'],
          [m('cancel (x − 1); x<sup>2</sup> ÷ x = x'), ''],
          [m('x'), '']
        ],
        answer: m('x') + ', &nbsp;' + m('x ≠ 0, x ≠ 1')
      }
    ]
  },
  quiz: [
    { q: m(f('a', 'b') + ' : ' + f('c', 'd')) + ' equals:', a: [m(f('ac', 'bd')), m(f('ad', 'bc')), m(f('bc', 'ad')), m(f('a + d', 'b + c'))], c: 1, why: 'Turn the second fraction over and multiply.' },
    { q: m(f('x', '2') + ' : ' + f('x', '4')) + ' equals:', a: [m(f('1', '2')), m('2'), m(f('x<sup>2</sup>', '8')), m('8')], c: 1, why: '(x/2)·(4/x) = 4/2 = 2, provided x ≠ 0.' },
    { q: m('(' + f('3x', '2y') + ')<sup>2</sup>') + ' equals:', a: [m(f('3x<sup>2</sup>', '2y<sup>2</sup>')), m(f('9x<sup>2</sup>', '4y<sup>2</sup>')), m(f('6x<sup>2</sup>', '4y<sup>2</sup>')), m(f('9x', '4y'))], c: 1, why: 'The index reaches the numbers as well: 3² = 9 and 2² = 4.' },
    { q: 'Before multiplying two algebraic fractions you should first:', a: ['multiply out both numerators', 'find a common denominator', 'factorise everything and cancel', 'add the denominators'], c: 2, why: 'Cancelling first avoids creating a large polynomial you would only have to factorise again.' }
  ],
  practice: {
    easy: [
      [m(f('2', 'x') + ' · ' + f('x', '3')), m(f('2', '3'))],
      [m(f('a', 'b') + ' · ' + f('b', 'a')), m('1')],
      [m(f('3', 'x') + ' · ' + f('x<sup>2</sup>', '6')), m(f('x', '2'))],
      [m(f('x', '2') + ' : ' + f('x', '4')), m('2')],
      [m(f('a', '3') + ' : ' + f('a', '6')), m('2')],
      [m(f('2x', 'y') + ' · ' + f('y', '4')), m(f('x', '2'))],
      [m(f('5', 'a') + ' : ' + f('10', 'a<sup>2</sup>')), m(f('a', '2'))]
    ],
    med: [
      [m(f('x + 1', 'x') + ' · ' + f('x', 'x + 1')), m('1')],
      [m(f('x<sup>2</sup> − 1', 'x') + ' · ' + f('x', 'x − 1')), m('x + 1')],
      [m(f('a<sup>2</sup>', 'b') + ' : ' + f('a', 'b<sup>2</sup>')), m('ab')],
      [m(f('x − 2', '3') + ' · ' + f('6', 'x − 2')), m('2')],
      [m(f('x<sup>2</sup> − 9', 'x') + ' · ' + f('x<sup>2</sup>', 'x + 3')), m('x(x − 3)')],
      [m(f('2a', 'a + b') + ' : ' + f('4a<sup>2</sup>', 'a<sup>2</sup> − b<sup>2</sup>')), m(f('a − b', '2a'))],
      [m(f('x<sup>2</sup> + 2x', 'x − 3') + ' : ' + f('x + 2', 'x<sup>2</sup> − 9')), m('x(x + 3)')]
    ],
    hard: [
      [m(f('x<sup>2</sup> − 4', 'x<sup>2</sup> + 4x + 4') + ' · ' + f('x + 2', 'x − 2')), m('1') + ', ' + m('x ≠ ±2')],
      [m(f('a<sup>3</sup> − b<sup>3</sup>', 'a<sup>2</sup> − b<sup>2</sup>') + ' : ' + f('a<sup>2</sup> + ab + b<sup>2</sup>', 'a + b')), m('1') + ', ' + m('a ≠ ±b')],
      [m(f('x<sup>2</sup> − 5x + 6', 'x<sup>2</sup> − 4') + ' · ' + f('x<sup>2</sup> + 2x', 'x − 3')), m('x')],
      [m(f('2x<sup>2</sup> + x − 1', 'x<sup>2</sup> − 1') + ' · ' + f('x + 1', '2x − 1')), m(f('x + 1', 'x − 1'))],
      [m('(1 − ' + f('1', 'x') + ') : ' + f('x − 1', 'x<sup>2</sup>')), m('x')],
      [m(f('m<sup>2</sup> − n<sup>2</sup>', 'm<sup>2</sup> + mn') + ' : ' + f('m − n', 'm')), m('1') + ', ' + m('m ≠ 0, m ≠ ±n')],
      [m(f('x<sup>2</sup> − 9', 'x<sup>2</sup> − 6x + 9') + ' : ' + f('x + 3', 'x − 3')), m('1') + ', ' + m('x ≠ 3, x ≠ −3')]
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, §5, pp. 27–29. Factorise before multiplying, every time.',
  homework: [
    m(f('4', 'x') + ' · ' + f('x<sup>2</sup>', '8')),
    m(f('a', '5') + ' : ' + f('a<sup>2</sup>', '10')),
    m(f('x<sup>2</sup> − 25', 'x') + ' · ' + f('x', 'x − 5')),
    m(f('x + 4', 'x<sup>2</sup> − 16') + ' · (x − 4)'),
    m(f('3a', 'a − b') + ' : ' + f('9a<sup>2</sup>', 'a<sup>2</sup> − b<sup>2</sup>')),
    m('(' + f('2x', '3y') + ')<sup>3</sup>')
  ]
});

/* ============================== 8 ============================== */
G8_ALG_Q1.push({
  id: 'alg-08', stream: 'alg', grade: 8, quarter: 1, lessons: '20–22', hours: 3,
  title: 'Identical transformation of fractional-rational expressions',
  subtitle: 'Everything from §§2–5 in one question: the long chains where order of operations decides whether the work takes three lines or thirteen.',
  uz: 'Algebra 8, §6', uzPage: '§6, pp. 30–33',
  cam: 'Stage 9 · 2.3, 2.6', camPage: 'Learner’s Book pp. 30–39, 45–53', wb: 'Workbook 2.6',
  objectives: [
    'Simplify a fractional-rational expression that mixes all four operations.',
    'Deal with a compound (“stacked”) fraction.',
    'Choose an order of work that keeps the expressions small.',
    'Prove a given identity by transforming one side into the other.'
  ],
  sections: [
    {
      h: 'What “identical transformation” means',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      Two expressions are <b>identically equal</b> if they take the same value for every permissible
      value of the variables. Replacing an expression by an identically equal one is an
      <b>identical transformation</b>.</div>
      <p>Cancelling, building up to a common denominator, adding, multiplying — each of these is an
      identical transformation. That is exactly why the permissible values must be stated: outside
      them the two expressions are <em>not</em> the same, because one of them does not exist.</p>`
    },
    {
      h: 'Order of operations',
      html: `<p>The order is the ordinary one — brackets, then multiplication and division, then
      addition and subtraction — but with fractions it pays to look ahead:</p>
      <ol>
        <li><b>Tidy every bracket first</b> into a single fraction.</li>
        <li>Do the multiplications and divisions, cancelling as you go.</li>
        <li>Do the additions and subtractions last, over the LCD.</li>
        <li>Cancel the final answer. Check the permissible values against the <em>original</em>.</li>
      </ol>
      <div class="warn"><span class="wl">The long way round</span>
      Multiplying everything out at the start turns a two-line problem into a page of algebra. Almost
      every expression in this section is designed to collapse — if your working is growing, you have
      taken the wrong route.</div>`
    },
    {
      h: 'Compound fractions',
      html: `<p>A fraction whose numerator or denominator is itself a fraction is a
      <b>compound fraction</b>. The main fraction bar means “divide”:</p>
      ${eq(m(f(f('1', 'x') + ' − ' + f('1', 'y'), f('1', 'x') + ' + ' + f('1', 'y')) + ' = (' + f('1', 'x') + ' − ' + f('1', 'y') + ') : (' + f('1', 'x') + ' + ' + f('1', 'y') + ')'), true)}
      <p>Combine the top into one fraction, combine the bottom into one fraction, then divide:</p>
      ${eq(m(f('y − x', 'xy') + ' : ' + f('y + x', 'xy') + ' = ' + f('y − x', 'xy') + ' · ' + f('xy', 'y + x') + ' = ' + f('y − x', 'y + x')))}`
    },
    {
      h: 'Proving an identity',
      html: `<p>To prove ${m('A = B')}, transform the <b>more complicated</b> side until it becomes the
      simpler one. Never move terms across the equals sign as if it were an equation — you are not
      solving, you are simplifying.</p>`
    }
  ],
  examples: [
    {
      q: m('Simplify ' + f('a + b', 'a − b') + ' − ' + f('a − b', 'a + b')),
      steps: [
        [m('LCD = (a − b)(a + b) = a<sup>2</sup> − b<sup>2</sup>'), 'Different factors, so multiply them.'],
        [m(f('(a + b)<sup>2</sup> − (a − b)<sup>2</sup>', 'a<sup>2</sup> − b<sup>2</sup>')), 'Build both up. Keep the bracket on the subtracted square.'],
        [m('(a + b)<sup>2</sup> − (a − b)<sup>2</sup> = (a<sup>2</sup> + 2ab + b<sup>2</sup>) − (a<sup>2</sup> − 2ab + b<sup>2</sup>) = 4ab'), 'The squares cancel; only the middle terms survive.'],
        [m(f('4ab', 'a<sup>2</sup> − b<sup>2</sup>')), 'Nothing left to cancel.']
      ],
      ans: m(f('4ab', 'a<sup>2</sup> − b<sup>2</sup>')) + ', &nbsp;' + m('a ≠ ±b')
    },
    {
      q: m('Simplify ' + f('1 − ' + fs('1', 'x'), '1 − ' + fs('1', 'x²'))),
      steps: [
        [m('1 − ' + f('1', 'x') + ' = ' + f('x − 1', 'x')), 'Top, as one fraction.'],
        [m('1 − ' + f('1', 'x<sup>2</sup>') + ' = ' + f('x<sup>2</sup> − 1', 'x<sup>2</sup>')), 'Bottom, as one fraction.'],
        [m(f('x − 1', 'x') + ' : ' + f('x<sup>2</sup> − 1', 'x<sup>2</sup>') + ' = ' + f('x − 1', 'x') + ' · ' + f('x<sup>2</sup>', '(x − 1)(x + 1)')), 'Divide, and factorise x² − 1.'],
        [m('cancel (x − 1) and one x'), ''],
        [m(f('x', 'x + 1')), '']
      ],
      ans: m(f('x', 'x + 1')) + ', &nbsp;' + m('x ≠ 0, x ≠ ±1')
    },
    {
      q: m('Prove that (x + ' + f('1', 'x') + ')² − (x − ' + f('1', 'x') + ')² = 4'),
      steps: [
        ['Use ' + m('A<sup>2</sup> − B<sup>2</sup> = (A − B)(A + B)') + ' with ' + m('A = x + ' + f('1', 'x')) + ' and ' + m('B = x − ' + f('1', 'x')) + '.', 'Far quicker than expanding both squares.'],
        [m('A − B = ' + f('2', 'x')), 'The x terms cancel.'],
        [m('A + B = 2x'), 'The 1/x terms cancel.'],
        [m(f('2', 'x') + ' · 2x = 4'), 'The x cancels — a constant, for every permissible x.']
      ],
      ans: m('4') + ', &nbsp;' + m('x ≠ 0')
    }
  ],
  modelNote: 'These four are the pattern the control work will use. Walk the class through the choice of route, not just the algebra.',
  interactive: {
    type: 'fractionCancel',
    title: 'Long chains, one step at a time',
    hint: 'Watch how each expression collapses — the working never grows.',
    items: [
      {
        title: '(1/x − 1/y) : (1/x + 1/y)',
        start: m('(' + f('1', 'x') + ' − ' + f('1', 'y') + ') : (' + f('1', 'x') + ' + ' + f('1', 'y') + ')'),
        steps: [
          [m(f('1', 'x') + ' − ' + f('1', 'y') + ' = ' + f('y − x', 'xy')), 'Combine the first bracket.'],
          [m(f('1', 'x') + ' + ' + f('1', 'y') + ' = ' + f('y + x', 'xy')), 'Combine the second.'],
          [m(f('y − x', 'xy') + ' · ' + f('xy', 'y + x')), 'Division becomes multiplication by the reciprocal.'],
          [m(f('y − x', 'y + x')), 'The whole of xy cancels.']
        ],
        answer: m(f('y − x', 'y + x')) + ', &nbsp;' + m('x, y ≠ 0, x ≠ −y')
      },
      {
        title: '(a+b)/(a−b) − (a−b)/(a+b)',
        start: m(f('a + b', 'a − b') + ' − ' + f('a − b', 'a + b')),
        steps: [
          [m('LCD = a<sup>2</sup> − b<sup>2</sup>'), ''],
          [m(f('(a + b)<sup>2</sup> − (a − b)<sup>2</sup>', 'a<sup>2</sup> − b<sup>2</sup>')), 'Bracket the subtracted square.'],
          [m('numerator = 4ab'), 'The a² and b² terms cancel in pairs.'],
          [m(f('4ab', 'a<sup>2</sup> − b<sup>2</sup>')), '']
        ],
        answer: m(f('4ab', 'a<sup>2</sup> − b<sup>2</sup>')) + ', &nbsp;' + m('a ≠ ±b')
      },
      {
        title: '(1 − 1/x) / (1 − 1/x²)',
        start: m(f('1 − ' + fs('1', 'x'), '1 − ' + fs('1', 'x<sup>2</sup>'))),
        steps: [
          [m('top = ' + f('x − 1', 'x')), 'One fraction.'],
          [m('bottom = ' + f('x<sup>2</sup> − 1', 'x<sup>2</sup>') + ' = ' + f('(x − 1)(x + 1)', 'x<sup>2</sup>')), 'One fraction, factorised.'],
          [m(f('x − 1', 'x') + ' · ' + f('x<sup>2</sup>', '(x − 1)(x + 1)')), 'Divide.'],
          [m(f('x', 'x + 1')), 'Cancel (x − 1) and one x.']
        ],
        answer: m(f('x', 'x + 1')) + ', &nbsp;' + m('x ≠ 0, ±1')
      },
      {
        title: 'a/(a−b) + b/(b−a)',
        start: m(f('a', 'a − b') + ' + ' + f('b', 'b − a')),
        steps: [
          [m('b − a = −(a − b)'), 'Reverse the second denominator.'],
          [m(f('a', 'a − b') + ' − ' + f('b', 'a − b')), 'Now the denominators agree.'],
          [m(f('a − b', 'a − b') + ' = 1'), 'The numerator is the denominator.']
        ],
        answer: m('1') + ', &nbsp;' + m('a ≠ b')
      }
    ]
  },
  quiz: [
    { q: m(f('a', 'a − b') + ' + ' + f('b', 'b − a')) + ' equals:', a: [m('0'), m('1'), m(f('a + b', 'a − b')), m('−1')], c: 1, why: 'b − a = −(a − b), so the sum becomes (a − b)/(a − b) = 1.' },
    { q: 'To simplify a compound fraction you should:', a: ['cancel the small fractions first', 'combine the top and the bottom, then divide', 'multiply everything out', 'add the numerators'], c: 1, why: 'The main bar means divide — so make the top one fraction and the bottom one fraction first.' },
    { q: m('(x + ' + f('1', 'x') + ')<sup>2</sup> − (x − ' + f('1', 'x') + ')<sup>2</sup>') + ' equals:', a: [m('0'), m('2'), m('4'), m('4x<sup>2</sup>')], c: 2, why: 'Use A² − B² = (A − B)(A + B): (2/x)(2x) = 4.' },
    { q: 'Proving an identity means:', a: ['solving for x', 'transforming one side into the other', 'moving terms across the equals sign', 'substituting one value of x'], c: 1, why: 'One value proves nothing; you must show the two sides agree for every permissible value.' }
  ],
  practice: {
    easy: [
      [m('(' + f('1', 'x') + ' + ' + f('1', 'y') + ') · xy'), m('y + x')],
      [m('1 + ' + f('1', 'x')), m(f('x + 1', 'x'))],
      [m(f('a', 'b') + ' + 1'), m(f('a + b', 'b'))],
      [m(f('x', '2') + ' + ' + f('x', '3')), m(f('5x', '6'))],
      [m('1 − ' + f('1', '2x')), m(f('2x − 1', '2x'))],
      [m(f('x + 1', '2') + ' · ' + f('4', 'x + 1')), m('2')],
      [m(f('2', 'x') + ' : ' + f('4', 'x<sup>2</sup>')), m(f('x', '2'))]
    ],
    med: [
      [m('(' + f('1', 'x') + ' − ' + f('1', 'y') + ') : (' + f('1', 'x') + ' + ' + f('1', 'y') + ')'), m(f('y − x', 'y + x'))],
      [m('(1 + ' + f('1', 'x') + ') · ' + f('x', 'x + 1')), m('1')],
      [m('x − ' + f('1', 'x')), m(f('x<sup>2</sup> − 1', 'x'))],
      [m(f('a + b', 'a − b') + ' − ' + f('a − b', 'a + b')), m(f('4ab', 'a<sup>2</sup> − b<sup>2</sup>'))],
      [m('(' + f('1', 'x − 1') + ' + ' + f('1', 'x + 1') + ') · ' + f('x<sup>2</sup> − 1', '2')), m('x')],
      [m(f('x<sup>2</sup> − 1', 'x') + ' : (x + 1)'), m(f('x − 1', 'x'))],
      [m('(' + f('1', 'a') + ' + ' + f('1', 'b') + ') : ' + f('1', 'ab')), m('a + b')]
    ],
    hard: [
      [m('(' + f('1', 'x − 1') + ' − ' + f('1', 'x + 1') + ') : ' + f('2', 'x<sup>2</sup> − 1')), m('1') + ', ' + m('x ≠ ±1')],
      [m('(x + ' + f('1', 'x') + ')<sup>2</sup> − (x − ' + f('1', 'x') + ')<sup>2</sup>'), m('4')],
      [m(f('a', 'a − b') + ' + ' + f('b', 'b − a')), m('1') + ', ' + m('a ≠ b')],
      [m(f('1 − ' + fs('1', 'x'), '1 − ' + fs('1', 'x<sup>2</sup>'))), m(f('x', 'x + 1'))],
      [m(f('x<sup>2</sup> − y<sup>2</sup>', 'xy') + ' · ' + f('xy', 'x + y') + ' − x'), m('−y')],
      [m('Prove that ' + f('1', 'n') + ' − ' + f('1', 'n + 1') + ' = ' + f('1', 'n(n + 1)')), 'LCD ' + m('n(n + 1)') + ': the numerator is ' + m('(n + 1) − n = 1') + '.'],
      [m(f('1', 'x<sup>2</sup> − x') + ' + ' + f('1', 'x<sup>2</sup> − 1')), m(f('2x + 1', 'x(x<sup>2</sup> − 1)'))]
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Algebra 8, §6, pp. 30–33. Choose your route before you start writing.',
  homework: [
    m('(' + f('1', 'x') + ' − ' + f('1', 'x + 1') + ') · x(x + 1)'),
    m(f('x + y', 'x − y') + ' + ' + f('x − y', 'x + y')),
    m(f('1 + ' + fs('1', 'x'), '1 − ' + fs('1', 'x'))),
    m('(' + f('a', 'b') + ' − ' + f('b', 'a') + ') : ' + f('a<sup>2</sup> − b<sup>2</sup>', 'ab')),
    m('Prove that ' + f('1', 'x − 1') + ' − ' + f('1', 'x + 1') + ' = ' + f('2', 'x<sup>2</sup> − 1'))
  ]
});

/* ============================== 9 ============================== */
G8_ALG_Q1.push({
  id: 'alg-09', stream: 'alg', grade: 8, quarter: 1, lessons: '23–24', hours: 2,
  title: 'Control work 2 · Rational expressions',
  subtitle: 'Multiplication, division and long chains, then the work-on-mistakes lesson that turns the paper into teaching.',
  uz: 'Algebra 8, §§5–6', uzPage: 'Revision of §§5–6',
  cam: 'Stage 9 · Units 2, 8', camPage: 'Learner’s Book pp. 21–54, 161–189', wb: 'Workbook Units 2, 8',
  objectives: [
    'Assess multiplication, division, powers and combined transformations.',
    'Identify which of the four standard errors each lost mark belongs to.',
    'Re-solve every lost task in full.'
  ],
  timing: [[2, 'Setting up'], [36, 'The paper'], [2, 'Collect in']],
  sections: [
    {
      h: 'Lesson 23 — the paper (40 minutes)',
      html: `<p>Two variants of seven tasks. The balance of the paper:</p>
      <ul>
        <li>tasks 1–2 · multiplication and division of fractions (§5)</li>
        <li>task 3 · a power of a fraction (§5)</li>
        <li>tasks 4–5 · a combined expression with brackets (§6)</li>
        <li>task 6 · a compound fraction (§6)</li>
        <li>task 7 · prove an identity (§6)</li>
      </ul>
      <p>Marking: 2 marks per task, 14 in total. Task 7 earns nothing for substituting a single value —
      an identity has to be proved for all permissible values.</p>`
    },
    {
      h: 'Lesson 24 — work on mistakes (40 minutes)',
      html: `<p>The errors in this paper fall into four groups, and they are not the same four as in
      Control work 1:</p>
      <div class="keybox"><div class="klabel">What goes wrong in §§5–6</div>
      <ol style="margin:0">
        <li><b>Not turning the divisor over</b> — multiplying by ${m(f('C', 'D'))} instead of ${m(f('D', 'C'))}.</li>
        <li><b>Expanding before cancelling</b>, producing a page of algebra and then an arithmetic slip.</li>
        <li><b>The index not reaching the coefficient</b> — ${m('(' + f('3x', '2') + ')<sup>2</sup>')} written as ${m(f('3x<sup>2</sup>', '2'))}.</li>
        <li><b>Treating an identity as an equation</b> and moving terms across the equals sign.</li>
      </ol></div>
      <p>The Hard set below is seven pieces of wrong working drawn from these four. Diagnose, then repair.</p>`
    }
  ],
  examples: [
    {
      q: 'Find and repair the error: ' + m(f('x', '3') + ' : ' + f('x', '6') + ' = ' + f('x²', '18')),
      steps: [
        ['The divisor was multiplied, not inverted.', 'This is error 1.'],
        [m(f('x', '3') + ' · ' + f('6', 'x')), 'Turn the second fraction over.'],
        [m(f('6', '3') + ' = 2'), 'The x cancels.']
      ],
      ans: m('2') + ', &nbsp;' + m('x ≠ 0')
    },
    {
      q: 'Find and repair the error: ' + m('(' + f('3x', '2') + ')² = ' + f('3x²', '2')),
      steps: [
        ['The index must reach every factor, above and below.', 'This is error 3.'],
        [m('(' + f('3x', '2') + ')<sup>2</sup> = ' + f('(3x)<sup>2</sup>', '2<sup>2</sup>')), 'Square the whole numerator and the whole denominator.'],
        [m(f('9x<sup>2</sup>', '4')), '3² = 9 and 2² = 4.']
      ],
      ans: m(f('9x<sup>2</sup>', '4'))
    }
  ],
  modelNote: 'Lesson 24: show a piece of wrong working, take a vote on which of the four errors it is, then reveal.',
  interactive: {
    type: 'fractionCancel',
    title: 'Diagnose the error',
    hint: 'Which of the four errors is this? Decide first, then reveal the steps.',
    items: [
      {
        title: 'Error 1 — divisor not inverted',
        start: '<b>Claimed:</b> ' + m(f('a', 'b') + ' : ' + f('c', 'd') + ' = ' + f('ac', 'bd')),
        steps: [
          ['Dividing by a fraction means multiplying by its reciprocal.', ''],
          [m(f('a', 'b') + ' · ' + f('d', 'c')), 'The second fraction turns over.'],
          [m(f('ad', 'bc')), 'Compare with the claim — the c and d are the wrong way round.']
        ],
        answer: m(f('ad', 'bc')) + ', &nbsp;' + m('b, c, d ≠ 0')
      },
      {
        title: 'Error 2 — expanded before cancelling',
        start: '<b>Claimed route:</b> ' + m(f('x<sup>2</sup> − 9', 'x + 3') + ' · ' + f('x + 3', 'x − 3')) + ' → multiply out both numerators first',
        steps: [
          ['Multiplying out gives a cubic in the numerator and a quadratic below.', 'Then you have to factorise it all again.'],
          [m(f('(x − 3)(x + 3)', 'x + 3') + ' · ' + f('x + 3', 'x − 3')), 'Factorise instead — three factors are already visible.'],
          [m('cancel (x + 3) twice and (x − 3) once'), ''],
          [m('1'), 'Three lines instead of a page.']
        ],
        answer: m('1') + ', &nbsp;' + m('x ≠ ±3')
      },
      {
        title: 'Error 3 — the index missed the coefficient',
        start: '<b>Claimed:</b> ' + m('(' + f('3x', '2') + ')<sup>2</sup> = ' + f('3x<sup>2</sup>', '2')),
        steps: [
          [m('(' + f('A', 'B') + ')<sup>n</sup> = ' + f('A<sup>n</sup>', 'B<sup>n</sup>')), 'Both numerator and denominator are raised.'],
          [m(f('(3x)<sup>2</sup>', '2<sup>2</sup>')), 'And inside, the index reaches the 3 as well as the x.'],
          [m(f('9x<sup>2</sup>', '4')), '']
        ],
        answer: m(f('9x<sup>2</sup>', '4'))
      },
      {
        title: 'Error 4 — an identity treated as an equation',
        start: '<b>Claimed proof of</b> ' + m(f('1', 'x − 1') + ' − ' + f('1', 'x + 1') + ' = ' + f('2', 'x<sup>2</sup> − 1')) + ': “multiply both sides by ' + m('x<sup>2</sup> − 1') + '…”',
        steps: [
          ['You may do that when <em>solving</em> an equation, where the two sides are equal for some x.', 'Here you are asked to show they are equal for <em>all</em> permissible x.'],
          ['Work on the left side alone: ' + m('LCD = (x − 1)(x + 1)'), ''],
          [m(f('(x + 1) − (x − 1)', 'x<sup>2</sup> − 1') + ' = ' + f('2', 'x<sup>2</sup> − 1')), 'The left side has become the right side. That is the proof.']
        ],
        answer: 'Transform one side into the other; never move terms across the equals sign.'
      }
    ]
  },
  quiz: [
    { q: m(f('x', '3') + ' : ' + f('x', '6')) + ' equals:', a: [m(f('x<sup>2</sup>', '18')), m('2'), m(f('1', '2')), m(f('x', '18'))], c: 1, why: '(x/3)·(6/x) = 2, provided x ≠ 0.' },
    { q: m('(' + f('2a', '5') + ')<sup>3</sup>') + ' equals:', a: [m(f('8a<sup>3</sup>', '125')), m(f('2a<sup>3</sup>', '125')), m(f('6a<sup>3</sup>', '15')), m(f('8a<sup>3</sup>', '5'))], c: 0, why: '2³ = 8 and 5³ = 125 — the index reaches every factor.' },
    { q: 'The fastest first move on ' + m(f('x² − 4', 'x + 2') + ' · ' + f('x + 2', 'x − 2')) + ' is:', a: ['multiply out the numerators', 'factorise and cancel', 'find a common denominator', 'substitute a value of x'], c: 1, why: 'x² − 4 = (x − 2)(x + 2); then everything cancels and the answer is 1.' },
    { q: 'To prove an identity you may:', a: ['multiply both sides by the LCD', 'move a term across the equals sign', 'transform one side into the other', 'test one value of x'], c: 2, why: 'An identity must hold for every permissible value, so only transformation of one side counts.' }
  ],
  practice: {
    easy: [
      [m('<b>Variant 1, task 1.</b> ' + f('3', 'x') + ' · ' + f('x<sup>2</sup>', '9')), m(f('x', '3'))],
      [m('<b>Task 2.</b> ' + f('a', '4') + ' : ' + f('a', '8')), m('2')],
      [m('<b>Task 3.</b> (' + f('2x', '3') + ')<sup>2</sup>'), m(f('4x<sup>2</sup>', '9'))],
      [m('<b>Task 4.</b> ' + f('x<sup>2</sup> − 1', 'x') + ' · ' + f('x', 'x + 1')), m('x − 1')],
      [m('<b>Task 5.</b> 1 + ' + f('2', 'x')), m(f('x + 2', 'x'))],
      [m('<b>Task 6.</b> ' + f('1 + ' + fs('1', 'x'), 'x + 1')), m(f('1', 'x')) + ', ' + m('x ≠ 0, −1')],
      [m('<b>Task 7.</b> Prove ' + f('1', 'x') + ' − ' + f('1', 'x + 1') + ' = ' + f('1', 'x(x + 1)')), 'LCD ' + m('x(x + 1)') + '; numerator ' + m('(x + 1) − x = 1') + '.']
    ],
    med: [
      [m('<b>Variant 2, task 1.</b> ' + f('5', 'a') + ' · ' + f('a<sup>2</sup>', '10')), m(f('a', '2'))],
      [m('<b>Task 2.</b> ' + f('x', '6') + ' : ' + f('x', '3')), m(f('1', '2'))],
      [m('<b>Task 3.</b> (' + f('3a', '4b') + ')<sup>2</sup>'), m(f('9a<sup>2</sup>', '16b<sup>2</sup>'))],
      [m('<b>Task 4.</b> ' + f('x<sup>2</sup> − 9', 'x + 3') + ' · ' + f('x', 'x − 3')), m('x') + ', ' + m('x ≠ ±3')],
      [m('<b>Task 5.</b> ' + f('a', 'a + b') + ' + ' + f('b', 'a + b')), m('1') + ', ' + m('a ≠ −b')],
      [m('<b>Task 6.</b> ' + f(fs('1', 'x') + ' − ' + fs('1', 'y'), fs('1', 'x') + ' + ' + fs('1', 'y'))), m(f('y − x', 'y + x'))],
      [m('<b>Task 7.</b> Prove ' + f('a', 'a − b') + ' + ' + f('b', 'b − a') + ' = 1'), m('b − a = −(a − b)') + ', so the sum is ' + m(f('a − b', 'a − b') + ' = 1') + '.']
    ],
    hard: [
      [m('Find the error: ' + f('a', 'b') + ' : ' + f('c', 'd') + ' = ' + f('ac', 'bd')), 'The divisor was not inverted. Correct: ' + m(f('ad', 'bc')) + '.'],
      [m('Find the error: (' + f('3x', '2') + ')<sup>2</sup> = ' + f('3x<sup>2</sup>', '2')), 'The index missed the 3 and the 2. Correct: ' + m(f('9x<sup>2</sup>', '4')) + '.'],
      [m('Find the error: ' + f('x<sup>2</sup> − 4', 'x + 2') + ' · ' + f('x + 2', 'x − 2') + ' = x<sup>2</sup> − 4'), 'Nothing was cancelled. Correct: ' + m('1') + ', for ' + m('x ≠ ±2') + '.'],
      [m('Find the error: to prove ' + f('1', 'x − 1') + ' − ' + f('1', 'x + 1') + ' = ' + f('2', 'x<sup>2</sup> − 1') + ', “multiply both sides by x<sup>2</sup> − 1”'), 'An identity is proved by transforming one side, not by operating on both.'],
      [m('Find the error: ' + f('x', '2') + ' : 2 = x'), 'Dividing by 2 means multiplying by ' + m(f('1', '2')) + '. Correct: ' + m(f('x', '4')) + '.'],
      [m('Find the error: (' + f('1', 'x') + ' + ' + f('1', 'y') + ')<sup>−1</sup> = x + y'), 'The reciprocal of a sum is not the sum of reciprocals. Correct: ' + m(f('xy', 'x + y')) + '.'],
      [m('Find the error: ' + f('x<sup>2</sup>', 'x') + ' : x = x'), m(f('x<sup>2</sup>', 'x') + ' = x') + ', and ' + m('x : x = 1') + '. Correct answer ' + m('1') + ', for ' + m('x ≠ 0') + '.']
    ]
  },
  hwTitle: 'Homework after the work-on-mistakes lesson',
  hwNote: 'Re-solve every task you lost marks on, then these three.',
  homework: [
    m(f('x<sup>2</sup> − 16', 'x') + ' : ' + f('x + 4', 'x<sup>2</sup>')),
    m('(' + f('1', 'a') + ' − ' + f('1', 'b') + ') : ' + f('b − a', 'ab')),
    'Write out the four errors listed in this lesson with one example of each, in your own words.'
  ]
});

/* ============================== 10 ============================== */
G8_ALG_Q1.push({
  id: 'alg-10', stream: 'alg', grade: 8, quarter: 1, lessons: '25–27', hours: 3,
  title: 'The function y = k / x — properties and graph',
  subtitle: 'Inverse proportion: the first function of the course whose graph is not a straight line, and whose defining feature is a product that never changes.',
  uz: 'Algebra 8, §7', uzPage: '§7, pp. 34–38',
  cam: 'Stage 9 · 10.1–10.2, 11.2', camPage: 'Learner’s Book pp. 213–224, 242–249', wb: 'Workbook 10.1, 11.2',
  objectives: [
    'Recognise inverse proportion and find k from one point.',
    'Draw the graph of ' + m('y = ' + f('k', 'x')) + ' by table of values.',
    'State the properties: domain, the two branches, quadrants, symmetry, asymptotes.',
    'Solve practical problems in which a product is constant.'
  ],
  sections: [
    {
      h: 'Inverse proportion',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      Two quantities are <b>inversely proportional</b> if their product is constant. Writing that
      constant as ${m('k')}, we get ${m('xy = k')}, that is
      ${eq(m('y = ' + f('k', 'x')) + ',&nbsp;&nbsp;' + m('k ≠ 0, x ≠ 0'))}</div>
      <p>Everyday examples: a fixed distance covered at different speeds
      (${m('t = ' + f('s', 'v'))}); a fixed amount of work shared between different numbers of workers;
      a rectangle of fixed area (${m('h = ' + f('S', 'b'))}).</p>
      <p>If ${m('x')} doubles, ${m('y')} halves. If ${m('x')} is multiplied by 3, ${m('y')} is divided
      by 3. The product stays put.</p>`
    },
    {
      h: 'The graph — a hyperbola',
      html: `<p>Take ${m('k = 6')} and build a table:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>x</th><th>1</th><th>2</th><th>3</th><th>6</th><th>−1</th><th>−2</th><th>−3</th><th>−6</th></tr></thead>
      <tbody><tr><td><b>y</b></td><td>6</td><td>3</td><td>2</td><td>1</td><td>−6</td><td>−3</td><td>−2</td><td>−1</td></tr></tbody>
      </table></div>
      {{fig:hyperbola:The graph of y = 6/x. Two separate branches — never one connected curve.}}
      <p>The curve is called a <b>hyperbola</b>, and each half is a <b>branch</b>.</p>`
    },
    {
      h: 'The properties',
      html: `<ul>
        <li><b>Domain:</b> every ${m('x')} except ${m('0')}. The value ${m('x = 0')} is not merely
        awkward — there is no point of the graph above or below the origin at all.</li>
        <li><b>Range:</b> every ${m('y')} except ${m('0')}. The curve never touches either axis.</li>
        <li><b>Quadrants:</b> if ${m('k > 0')} the branches lie in quadrants <b>I and III</b>;
        if ${m('k < 0')}, in <b>II and IV</b>.</li>
        <li><b>Behaviour:</b> for ${m('k > 0')} the function is decreasing on each branch separately —
        but <em>not</em> on the whole domain, because the two branches are not joined.</li>
        <li><b>Asymptotes:</b> the curve comes arbitrarily close to both axes and never meets them.</li>
        <li><b>Symmetry:</b> the graph is symmetric about the origin, and about the line ${m('y = x')}
        (or ${m('y = −x')} when ${m('k < 0')}).</li>
      </ul>
      <div class="warn"><span class="wl">Say this out loud in class</span>
      “Decreasing on each branch” is not the same as “decreasing”. Take ${m('y = ' + f('6', 'x'))}:
      at ${m('x = −1')}, ${m('y = −6')}; at ${m('x = 1')}, ${m('y = 6')}. The value went <em>up</em> as
      ${m('x')} went up — because we crossed the gap at ${m('x = 0')}.</div>`
    },
    {
      h: 'Finding k',
      html: `<p>One point is enough. If the graph passes through ${m('(3, 4)')} then
      ${m('k = 3 · 4 = 12')}, so ${m('y = ' + f('12', 'x'))}.</p>
      <p>And the test for whether a point lies on the graph is just as quick: multiply its coordinates
      and compare with ${m('k')}.</p>`
    }
  ],
  examples: [
    {
      q: m('The graph of y = k/x passes through (−2, 5). Find k and describe the graph.'),
      steps: [
        [m('k = xy = (−2)(5) = −10'), 'The product of the coordinates is k.'],
        [m('y = −' + f('10', 'x')), 'The rule.'],
        [m('k < 0'), 'so the branches lie in quadrants II and IV.'],
        ['Domain ' + m('x ≠ 0') + ', range ' + m('y ≠ 0') + '.', 'The axes are asymptotes.']
      ],
      ans: m('k = −10') + '; a hyperbola in quadrants II and IV.'
    },
    {
      q: m('Find where y = 8/x meets y = 2x'),
      steps: [
        [m(f('8', 'x') + ' = 2x'), 'Set the two rules equal.'],
        [m('8 = 2x<sup>2</sup>'), 'Multiply both sides by x — legal, since x ≠ 0.'],
        [m('x<sup>2</sup> = 4, so x = 2 or x = −2'), 'Both roots are permissible.'],
        [m('x = 2 ⟹ y = 4;  x = −2 ⟹ y = −4'), 'Substitute back.']
      ],
      ans: m('(2, 4)') + ' and ' + m('(−2, −4)')
    },
    {
      q: 'A rectangle has area 36 cm². Express its height in terms of its base and name the graph.',
      steps: [
        [m('b · h = 36'), 'Area of a rectangle.'],
        [m('h = ' + f('36', 'b')), 'Make h the subject.'],
        [m('k = 36 > 0') + ', and lengths are positive.', 'So only the branch in quadrant I has meaning here.'],
        ['A hyperbola — but only the part with ' + m('b > 0') + ' is drawn.', 'Context can cut a graph down.']
      ],
      ans: m('h = ' + f('36', 'b')) + '; one branch of a hyperbola, ' + m('b > 0')
    }
  ],
  modelNote: 'Drag k through zero and ask the class to predict which quadrants the branches jump to.',
  interactive: { type: 'hyperbola' },
  quiz: [
    { q: 'The graph of ' + m('y = ' + f('7', 'x')) + ' lies in quadrants:', a: ['I and II', 'I and III', 'II and IV', 'all four'], c: 1, why: 'k > 0, so x and y always have the same sign.' },
    { q: 'If ' + m('y = ' + f('k', 'x')) + ' passes through ' + m('(3, 4)') + ' then k is:', a: [m('12'), m(f('3', '4')), m('7'), m(f('4', '3'))], c: 0, why: 'k is the product of the coordinates: 3 × 4 = 12.' },
    { q: 'For ' + m('y = ' + f('k', 'x')) + ', if x is multiplied by 4 then y is:', a: ['multiplied by 4', 'divided by 4', 'unchanged', 'multiplied by 16'], c: 1, why: 'The product xy must stay equal to k.' },
    { q: 'The graph of ' + m('y = ' + f('k', 'x')) + ' meets the x-axis:', a: ['at one point', 'at two points', 'at the origin', 'never'], c: 3, why: 'y = k/x is never 0, since k ≠ 0. The x-axis is an asymptote.' }
  ],
  practice: {
    easy: [
      [m('y = ' + f('12', 'x') + '. Find y when x = 4'), m('y = 3')],
      [m('y = ' + f('6', 'x') + '. Find y when x = −2'), m('y = −3')],
      [m('Does the point (2, 5) lie on y = ' + f('10', 'x') + '?'), 'Yes — ' + m('2 · 5 = 10') + '.'],
      [m('In which quadrants does y = ' + f('7', 'x') + ' lie?'), 'I and III'],
      [m('In which quadrants does y = −' + f('5', 'x') + ' lie?'), 'II and IV'],
      [m('y = ' + f('8', 'x') + '. Find x when y = 2'), m('x = 4')],
      [m('Is y = ' + f('3', 'x') + ' defined at x = 0?'), 'No — ' + m('x = 0') + ' is not in the domain.']
    ],
    med: [
      [m('(3, 4) lies on y = k/x. Find k.'), m('k = 12')],
      [m('(−2, 5) lies on y = k/x. Find k.'), m('k = −10')],
      [m('For y = k/x, what happens to y when x doubles?'), m('y') + ' halves — the product ' + m('xy') + ' is constant.'],
      [m('Find k so that y = k/x passes through (0.5, 8)'), m('k = 4')],
      [m('Complete the table for y = ' + f('12', 'x') + ' at x = 1, 2, 3, 4, 6, 12'), m('12, 6, 4, 3, 2, 1')],
      [m('(2, 9) and (a, 6) both lie on y = k/x. Find a.'), m('k = 18') + ', so ' + m('a = 3')],
      [m('For y = ' + f('24', 'x') + ', list the positive integers x giving an integer y'), m('1, 2, 3, 4, 6, 8, 12, 24')]
    ],
    hard: [
      [m('Show that for y = k/x the product xy is the same at every point'), m('xy = x · ' + f('k', 'x') + ' = k') + ' for every permissible ' + m('x') + '.'],
      [m('y = k/x passes through (−3, −4). Find k and the quadrants.'), m('k = 12') + '; quadrants I and III.'],
      [m('A rectangle has area 36. Write h in terms of b and name the graph.'), m('h = ' + f('36', 'b')) + '; a hyperbola, ' + m('b > 0') + ' only.'],
      [m('(m, n) lies on y = k/x. Show that (n, m) does too.'), m('nm = mn = k') + ', so the second point satisfies the same rule.'],
      [m('Solve ' + f('6', 'x') + ' = x'), m('x<sup>2</sup> = 6') + ', so ' + m('x = ±' + sr('6'))],
      [m('Find where y = ' + f('8', 'x') + ' meets y = 2x'), m('(2, 4)') + ' and ' + m('(−2, −4)')],
      [m('Sketch y = ' + f('4', 'x') + ' and y = −' + f('4', 'x') + ' together and describe the symmetry'), 'Each is the reflection of the other in either coordinate axis.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, §7, pp. 34–38. Draw the graph of question 4 on squared paper.',
  homework: [
    m('y = ' + f('15', 'x') + '. Find y when x = 3, x = 5 and x = −15'),
    m('(4, 6) lies on y = k/x. Find k and write the rule.'),
    m('In which quadrants does y = −' + f('9', 'x') + ' lie? Explain in one sentence.'),
    m('Draw the graph of y = ' + f('4', 'x') + ' for x from −4 to 4, using a table of values.'),
    'A journey of 120 km takes ' + m('t') + ' hours at speed ' + m('v') + ' km/h. Write ' + m('t') + ' in terms of ' + m('v') + ' and find ' + m('t') + ' when ' + m('v = 60') + '.',
    m('Solve ' + f('10', 'x') + ' = ' + f('x', '10'))
  ]
});
