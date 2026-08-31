/* Grade 8 · Algebra · Quarter I (27 hours)
   National backbone: Alimov, "Algebra 8" (O'qituvchi 2019), Chapter I.
   Cambridge references: Lower Secondary Mathematics Stage 9. */
var G8_ALG = [];

/* ============================== 1 ============================== */
G8_ALG.push({
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
  timing: [[15, 'Warm-up'], [36, 'Explanation'], [18, 'Interactive'], [45, 'Practice'], [6, 'Homework']],
  terms: [
    ['Power', 'Daraja', 'Степень'],
    ['Base of a power', 'Daraja asosi', 'Основание степени'],
    ['Index (exponent)', 'Daraja ko‘rsatkichi', 'Показатель степени'],
    ['Expand the brackets', 'Qavslarni ochish', 'Раскрыть скобки'],
    ['Factorise', 'Ko‘paytuvchilarga ajratish', 'Разложить на множители'],
    ['Common factor', 'Umumiy ko‘paytuvchi', 'Общий множитель'],
    ['Difference of two squares', 'Kvadratlar ayirmasi', 'Разность квадратов'],
    ['Perfect square', 'To‘la kvadrat', 'Полный квадрат'],
    ['Linear equation', 'Chiziqli tenglama', 'Линейное уравнение'],
    ['Subject of a formula', 'Formuladan izlanayotgan kattalik', 'Выражаемая величина'],
  ],
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
      [m('Factorise: x<sup>2</sup> − 5x + 6'), m('(x − 2)(x − 3)')]
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
G8_ALG.push({
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
  terms: [
    ['Algebraic expression', 'Algebraik ifoda', 'Алгебраическое выражение'],
    ['Whole (integer) expression', 'Butun ifoda', 'Целое выражение'],
    ['Fractional expression', 'Kasr ifoda', 'Дробное выражение'],
    ['Variable', 'O‘zgaruvchi', 'Переменная'],
    ['Permissible values', 'Mumkin bo‘lgan qiymatlar', 'Допустимые значения'],
    ['Numerator', 'Surat', 'Числитель'],
    ['Denominator', 'Maxraj', 'Знаменатель'],
    ['Value of an expression', 'Ifodaning qiymati', 'Значение выражения'],
    ['Undefined', 'Aniqlanmagan', 'Не определено'],
    ['Reciprocal', 'Teskari son', 'Обратное число'],
  ],
  timing: [[10, 'Warm-up'], [24, 'Explanation'], [16, 'Interactive'], [26, 'Practice'], [4, 'Homework']],
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
      [m('Permissible values of ' + f('5', 'x<sup>2</sup> − 7x + 10')), m('x ≠ 2, x ≠ 5')],
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
G8_ALG.push({
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
  terms: [
    ['Algebraic fraction', 'Algebraik kasr', 'Алгебраическая дробь'],
    ['Fundamental property of a fraction', 'Kasrning asosiy xossasi', 'Основное свойство дроби'],
    ['Cancel (reduce) a fraction', 'Kasrni qisqartirish', 'Сокращение дроби'],
    ['Factor', 'Ko‘paytuvchi', 'Множитель'],
    ['Term', 'Had', 'Слагаемое'],
    ['Polynomial', 'Ko‘phad', 'Многочлен'],
    ['Identical transformation', 'Ayniy almashtirish', 'Тождественное преобразование'],
    ['Sign', 'Ishora', 'Знак'],
    ['Bracket', 'Qavs', 'Скобка'],
    ['Simplify', 'Soddalashtirish', 'Упростить'],
  ],
  timing: [[15, 'Warm-up'], [36, 'Explanation'], [24, 'Interactive'], [39, 'Practice'], [6, 'Homework']],
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
      [m('Cancel: ' + f('x<sup>2</sup> − 2x', 'x<sup>2</sup> − 4')), m(f('x', 'x + 2')) + ', ' + m('x ≠ ±2')],
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
G8_ALG.push({
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
  terms: [
    ['Common denominator', 'Umumiy maxraj', 'Общий знаменатель'],
    ['Lowest common denominator', 'Eng kichik umumiy maxraj', 'Наименьший общий знаменатель'],
    ['Additional factor', 'Qo‘shimcha ko‘paytuvchi', 'Дополнительный множитель'],
    ['Lowest common multiple', 'EKUK', 'НОК'],
    ['Highest power', 'Eng yuqori daraja', 'Наивысшая степень'],
    ['Bring to a common denominator', 'Umumiy maxrajga keltirish', 'Привести к общему знаменателю'],
    ['Factorised form', 'Ko‘paytma ko‘rinishi', 'Разложенный вид'],
    ['Reversed bracket', 'Teskari qavs', 'Перевёрнутая скобка'],
  ],
  timing: [[15, 'Warm-up'], [36, 'Explanation'], [24, 'Interactive'], [39, 'Practice'], [6, 'Homework']],
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
      [m('LCD of ' + f('1', 'x<sup>2</sup> − 4x') + ' and ' + f('1', 'x − 4')), m('x(x − 4)')]
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
G8_ALG.push({
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
  terms: [
    ['Add', 'Qo‘shish', 'Сложение'],
    ['Subtract', 'Ayirish', 'Вычитание'],
    ['Like fractions', 'Bir xil maxrajli kasrlar', 'Дроби с одинаковыми знаменателями'],
    ['Unlike fractions', 'Har xil maxrajli kasrlar', 'Дроби с разными знаменателями'],
    ['Combine', 'Birlashtirish', 'Объединить'],
    ['Numerator', 'Surat', 'Числитель'],
    ['Whole expression', 'Butun ifoda', 'Целое выражение'],
    ['Simplify the result', 'Natijani soddalashtirish', 'Упростить результат'],
  ],
  timing: [[15, 'Warm-up'], [36, 'Explanation'], [24, 'Interactive'], [39, 'Practice'], [6, 'Homework']],
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
      [m(f('1', 'x − 3') + ' + ' + f('1', 'x + 3')), m(f('2x', 'x<sup>2</sup> − 9'))],
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
G8_ALG.push({
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
  timing: [[4, 'Setting up'], [72, 'The paper'], [4, 'Collect in']],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Work on mistakes', 'Xatolar ustida ishlash', 'Работа над ошибками'],
    ['Variant', 'Variant', 'Вариант'],
    ['Mark', 'Ball', 'Балл'],
    ['Check the answer', 'Javobni tekshirish', 'Проверить ответ'],
    ['Error', 'Xato', 'Ошибка'],
    ['Correct', 'To‘g‘ri', 'Верно'],
    ['Counter-example', 'Qarshi misol', 'Контрпример'],
  ],
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
G8_ALG.push({
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
  terms: [
    ['Multiply', 'Ko‘paytirish', 'Умножение'],
    ['Divide', 'Bo‘lish', 'Деление'],
    ['Product', 'Ko‘paytma', 'Произведение'],
    ['Quotient', 'Bo‘linma', 'Частное'],
    ['Reciprocal fraction', 'Teskari kasr', 'Обратная дробь'],
    ['Power of a fraction', 'Kasrning darajasi', 'Степень дроби'],
    ['Cancel across', 'Krest bo‘ylab qisqartirish', 'Сократить накрест'],
    ['Divisor', 'Bo‘luvchi', 'Делитель'],
  ],
  timing: [[15, 'Warm-up'], [36, 'Explanation'], [24, 'Interactive'], [39, 'Practice'], [6, 'Homework']],
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
G8_ALG.push({
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
  terms: [
    ['Rational expression', 'Ratsional ifoda', 'Рациональное выражение'],
    ['Fractional-rational expression', 'Kasr-ratsional ifoda', 'Дробно-рациональное выражение'],
    ['Compound fraction', 'Murakkab kasr', 'Многоэтажная дробь'],
    ['Identity', 'Ayniyat', 'Тождество'],
    ['Identically equal', 'Ayniy teng', 'Тождественно равны'],
    ['Prove', 'Isbotlash', 'Доказать'],
    ['Order of operations', 'Amallar tartibi', 'Порядок действий'],
    ['Transform', 'Almashtirish', 'Преобразовать'],
  ],
  timing: [[15, 'Warm-up'], [36, 'Explanation'], [24, 'Interactive'], [39, 'Practice'], [6, 'Homework']],
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
      [m('(' + f('1', 'x') + ' + ' + f('1', 'y') + ') · ' + f('xy', 'x + y')), m('1')],
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
G8_ALG.push({
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
  timing: [[4, 'Setting up'], [72, 'The paper'], [4, 'Collect in']],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Work on mistakes', 'Xatolar ustida ishlash', 'Работа над ошибками'],
    ['Reciprocal', 'Teskari', 'Обратный'],
    ['Coefficient', 'Koeffitsiyent', 'Коэффициент'],
    ['Expand', 'Ochish (yoyish)', 'Раскрыть'],
    ['Diagnose', 'Aniqlash', 'Определить (диагностировать)'],
    ['Justify', 'Asoslash', 'Обосновать'],
    ['Identity', 'Ayniyat', 'Тождество'],
  ],
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
G8_ALG.push({
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
  terms: [
    ['Function', 'Funksiya', 'Функция'],
    ['Inverse proportion', 'Teskari proporsionallik', 'Обратная пропорциональность'],
    ['Coefficient k', 'k koeffitsiyenti', 'Коэффициент k'],
    ['Graph', 'Grafik', 'График'],
    ['Hyperbola', 'Giperbola', 'Гипербола'],
    ['Branch', 'Tarmoq', 'Ветвь'],
    ['Domain', 'Aniqlanish sohasi', 'Область определения'],
    ['Asymptote', 'Asimptota', 'Асимптота'],
    ['Quadrant', 'Koordinata choragi', 'Координатная четверть'],
    ['Symmetry', 'Simmetriya', 'Симметрия'],
  ],
  timing: [[15, 'Warm-up'], [36, 'Explanation'], [24, 'Interactive'], [39, 'Practice'], [6, 'Homework']],
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

/* ==================================================================
   QUARTER II · 21 hours
   Algebra 8 §§8–10 (roots and rational exponents) and Chapter II §§11–14
   ================================================================== */

/* ============================== 11 ============================== */
G8_ALG.push({
  id: 'alg-11', stream: 'alg', grade: 8, quarter: 2, lessons: '28–29', hours: 2,
  title: 'The arithmetic root of degree n',
  subtitle: 'Undoing a power: what the n-th root means, when it exists, and the four properties that let you work with it.',
  uz: 'Algebra 8, §8', uzPage: '§8, pp. 39–41',
  cam: 'Stage 9 · 1.1', camPage: 'Learner’s Book pp. 10–14', wb: 'Workbook 1.1',
  objectives: [
    'Define the arithmetic root of degree ' + m('n') + ' and say when it exists.',
    'Use the four properties of roots to simplify.',
    'Take a factor out of a root and put one back in.',
    'Rationalise a simple denominator.'
  ],
  terms: [
    ['Root of degree n', 'n-darajali ildiz', 'Корень n-й степени'],
    ['Arithmetic root', 'Arifmetik ildiz', 'Арифметический корень'],
    ['Radicand (under the root)', 'Ildiz ostidagi ifoda', 'Подкоренное выражение'],
    ['Index of the root', 'Ildiz ko‘rsatkichi', 'Показатель корня'],
    ['Square root', 'Kvadrat ildiz', 'Квадратный корень'],
    ['Cube root', 'Kub ildiz', 'Кубический корень'],
    ['Irrational number', 'Irratsional son', 'Иррациональное число'],
    ['Rationalise the denominator', 'Maxrajni irratsionallikdan qutqarish', 'Освободиться от иррациональности в знаменателе'],
    ['Take a factor out', 'Ko‘paytuvchini ildiz oldiga chiqarish', 'Вынести множитель из-под корня'],
    ['Simplify', 'Soddalashtirish', 'Упростить']
  ],
  timing: [[10, 'Warm-up'], [24, 'Explanation'], [16, 'Interactive'], [26, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'The definition',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      For ${m('a ≥ 0')} and a natural number ${m('n ≥ 2')}, the <b>arithmetic root of degree n</b> of
      ${m('a')} is the <b>non-negative</b> number whose ${m('n')}-th power is ${m('a')}:
      ${eq(m(rt('n', 'a') + ' = b') + ' &nbsp;means&nbsp; ' + m('b ≥ 0') + ' and ' + m('b<sup>n</sup> = a'))}</div>
      <p>So ${m(sr('16') + ' = 4')} — and only 4. The number ${m('−4')} also squares to 16, but the
      <em>arithmetic</em> root is the non-negative one by definition.</p>
      <div class="warn"><span class="wl">When does it exist?</span>
      For <b>even</b> ${m('n')} the radicand must satisfy ${m('a ≥ 0')} — you cannot take
      ${m(sr('−9'))}. For <b>odd</b> ${m('n')} any ${m('a')} is allowed:
      ${m(rt('3', '−8') + ' = −2')}.</div>`
    },
    {
      h: 'The four properties',
      html: `<p>For ${m('a ≥ 0, b ≥ 0')}:</p>
      ${eq(m(rt('n', 'ab') + ' = ' + rt('n', 'a') + ' · ' + rt('n', 'b')) + ' &nbsp;&nbsp;&nbsp; ' +
           m(rt('n', f('a', 'b')) + ' = ' + f(rt('n', 'a'), rt('n', 'b')) + ',&nbsp; b > 0'), true)}
      ${eq(m('(' + rt('n', 'a') + ')<sup>k</sup> = ' + rt('n', 'a<sup>k</sup>')) + ' &nbsp;&nbsp;&nbsp; ' +
           m(rt('m', rt('n', 'a')) + ' = ' + rt('mn', 'a')), true)}
      <p>Read the first one right to left and you can multiply roots together; read it left to right and
      you can <b>take a factor out</b>:</p>
      ${eq(m(sr('50') + ' = ' + sr('25 · 2') + ' = ' + sr('25') + ' · ' + sr('2') + ' = 5' + sr('2')))}
      <div class="warn"><span class="wl">There is no rule for a sum</span>
      ${m(sr('a + b'))} is <b>not</b> ${m(sr('a') + ' + ' + sr('b'))}. Check it: ${m(sr('9 + 16') + ' = 5')},
      but ${m(sr('9') + ' + ' + sr('16') + ' = 7')}.</div>`
    },
    {
      h: 'Rationalising the denominator',
      html: `<p>A root in the denominator is untidy. Multiply top and bottom by the same root:</p>
      ${eq(m(f('1', sr('3')) + ' = ' + f('1 · ' + sr('3'), sr('3') + ' · ' + sr('3')) + ' = ' + f(sr('3'), '3')), true)}
      <p>This is the fundamental property of a fraction again — the same tool as in Quarter I.</p>
      {{fig:rootLadder:Every root can be written as a power, which is the bridge to the next lesson.}}`
    }
  ],
  examples: [
    {
      q: m('Simplify ' + sr('72')),
      steps: [
        [m('72 = 36 · 2'), 'Look for the largest square factor.'],
        [m(sr('72') + ' = ' + sr('36') + ' · ' + sr('2')), 'Property 1.'],
        [m('= 6' + sr('2')), '']
      ],
      ans: m('6' + sr('2'))
    },
    {
      q: m('Simplify ' + sr('12') + ' · ' + sr('3')),
      steps: [
        [m(sr('12') + ' · ' + sr('3') + ' = ' + sr('36')), 'Property 1, read right to left.'],
        [m('= 6'), 'A whole number — worth checking for every time.']
      ],
      ans: m('6')
    },
    {
      q: m('Write ' + f('6', sr('2')) + ' without a root in the denominator'),
      steps: [
        [m(f('6 · ' + sr('2'), sr('2') + ' · ' + sr('2'))), 'Multiply top and bottom by ' + m(sr('2')) + '.'],
        [m('= ' + f('6' + sr('2'), '2')), m(sr('2') + ' · ' + sr('2') + ' = 2')],
        [m('= 3' + sr('2')), 'Cancel the 2.']
      ],
      ans: m('3' + sr('2'))
    }
  ],
  modelNote: 'Move the index n and watch the same number appear as a root and as a power.',
  interactive: { type: 'rootPower' },
  quiz: [
    { q: m(sr('49')) + ' equals:', a: [m('7'), m('±7'), m('−7'), m('24.5')], c: 0, why: 'The arithmetic root is the non-negative one.' },
    { q: m(rt('3', '−27')) + ' equals:', a: ['it does not exist', m('−3'), m('3'), m('−9')], c: 1, why: 'An odd-degree root accepts a negative radicand.' },
    { q: m(sr('8') + ' · ' + sr('2')) + ' equals:', a: [m('4'), m(sr('10')), m('16'), m('2' + sr('2'))], c: 0, why: '√8 · √2 = √16 = 4.' },
    { q: m(sr('9 + 16')) + ' equals:', a: [m('7'), m('5'), m('25'), m('3 + 4')], c: 1, why: '√25 = 5. Roots do not split over a sum.' }
  ],
  practice: {
    easy: [
      [m('Find ' + sr('36')), m('6')],
      [m('Find ' + sr('81')), m('9')],
      [m('Find ' + rt('3', '8')), m('2')],
      [m('Find ' + rt('3', '27')), m('3')],
      [m('Find ' + sr('100') + ' + ' + sr('25')), m('15')],
      [m('Does ' + sr('−4') + ' exist?'), 'No — an even root needs ' + m('a ≥ 0') + '.'],
      [m('Find ' + rt('3', '−8')), m('−2')]
    ],
    med: [
      [m('Simplify ' + sr('72')), m('6' + sr('2'))],
      [m('Simplify ' + sr('50')), m('5' + sr('2'))],
      [m('Simplify ' + sr('12') + ' · ' + sr('3')), m('6')],
      [m('Simplify ' + f(sr('18'), sr('2'))), m('3')],
      [m('Simplify ' + sr('45')), m('3' + sr('5'))],
      [m('Write ' + f('6', sr('2')) + ' without a root below'), m('3' + sr('2'))],
      [m('Simplify 2' + sr('3') + ' + 5' + sr('3')), m('7' + sr('3'))]
    ],
    hard: [
      [m('Simplify ' + sr('98') + ' − ' + sr('50')), m('7' + sr('2') + ' − 5' + sr('2') + ' = 2' + sr('2'))],
      [m('Simplify ' + rt('4', '16')), m('2')],
      [m('Simplify (' + sr('5') + ')<sup>2</sup> + ' + sr('16')), m('5 + 4 = 9')],
      [m('Write ' + f('10', sr('5')) + ' without a root below'), m('2' + sr('5'))],
      [m('Simplify ' + sr('2') + ' · ' + sr('8') + ' − 1'), m(sr('16') + ' − 1 = 3')],
      [m('Show that ' + sr('9 + 16') + ' ≠ ' + sr('9') + ' + ' + sr('16')), m('5 ≠ 7')],
      [m('Simplify ' + sr('a<sup>2</sup>') + ' for a ≥ 0, and for a < 0'), m('a') + ' when ' + m('a ≥ 0') + '; ' + m('−a') + ' when ' + m('a < 0') + '.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Algebra 8, §8, pp. 39–41.',
  homework: [
    m('Find ' + sr('144') + ', ' + rt('3', '64') + ' and ' + rt('3', '−125')),
    m('Simplify ' + sr('32')),
    m('Simplify ' + sr('20') + ' · ' + sr('5')),
    m('Write ' + f('8', sr('2')) + ' without a root in the denominator'),
    m('Simplify 3' + sr('7') + ' − ' + sr('7'))
  ]
});

/* ============================== 12 ============================== */
G8_ALG.push({
  id: 'alg-12', stream: 'alg', grade: 8, quarter: 2, lessons: '30–31', hours: 2,
  title: 'Powers with a rational exponent',
  subtitle: 'One definition joins roots and powers into a single system — and all the old index laws keep working.',
  uz: 'Algebra 8, §9', uzPage: '§9, pp. 42–48',
  cam: 'Stage 9 · 1.3', camPage: 'Learner’s Book pp. 16–20', wb: 'Workbook 1.3',
  objectives: [
    'Define ' + m('a<sup>1/n</sup>') + ' and ' + m('a<sup>m/n</sup>') + '.',
    'Convert freely between root notation and index notation.',
    'Use the index laws with fractional and negative exponents.',
    'Evaluate powers with a rational exponent without a calculator.'
  ],
  terms: [
    ['Rational exponent', 'Ratsional ko‘rsatkich', 'Рациональный показатель'],
    ['Power', 'Daraja', 'Степень'],
    ['Base', 'Asos', 'Основание'],
    ['Negative index', 'Manfiy ko‘rsatkich', 'Отрицательный показатель'],
    ['Zero index', 'Nol ko‘rsatkich', 'Нулевой показатель'],
    ['Index law', 'Daraja xossasi', 'Свойство степени'],
    ['Reciprocal', 'Teskari son', 'Обратное число'],
    ['Equivalent form', 'Ekvivalent ko‘rinish', 'Равносильная форма'],
    ['Evaluate', 'Qiymatini topish', 'Вычислить']
  ],
  timing: [[10, 'Warm-up'], [24, 'Explanation'], [16, 'Interactive'], [26, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'The definition',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      For ${m('a > 0')} and natural ${m('m, n')} with ${m('n ≥ 2')}:
      ${eq(m('a<sup>1/n</sup> = ' + rt('n', 'a')) + ' &nbsp;&nbsp;and&nbsp;&nbsp; ' +
           m('a<sup>m/n</sup> = ' + rt('n', 'a<sup>m</sup>') + ' = (' + rt('n', 'a') + ')<sup>m</sup>'))}
      and, as before, ${m('a<sup>0</sup> = 1')} and ${m('a<sup>−k</sup> = ' + f('1', 'a<sup>k</sup>'))}.</div>
      <p>Why this definition and no other? Because it is the only one that keeps the index laws true.
      If ${m('(a<sup>1/2</sup>)<sup>2</sup> = a<sup>1</sup> = a')} then ${m('a<sup>1/2</sup>')} must be
      the number that squares to ${m('a')} — that is ${m(sr('a'))}.</p>
      <p>The <b>denominator of the index is the root</b>, the <b>numerator is the power</b>. Say it out
      loud once and the whole topic becomes bookkeeping.</p>`
    },
    {
      h: 'The index laws, unchanged',
      html: `${eq(m('a<sup>p</sup> · a<sup>q</sup> = a<sup>p+q</sup>') + '&nbsp;&nbsp;·&nbsp;&nbsp;' +
        m('a<sup>p</sup> : a<sup>q</sup> = a<sup>p−q</sup>') + '&nbsp;&nbsp;·&nbsp;&nbsp;' +
        m('(a<sup>p</sup>)<sup>q</sup> = a<sup>pq</sup>'), true)}
      ${eq(m('(ab)<sup>p</sup> = a<sup>p</sup>b<sup>p</sup>') + '&nbsp;&nbsp;·&nbsp;&nbsp;' +
        m('(' + f('a', 'b') + ')<sup>p</sup> = ' + f('a<sup>p</sup>', 'b<sup>p</sup>')), true)}
      <p>The letters ${m('p')} and ${m('q')} are now any rational numbers, positive or negative. Nothing
      else changes.</p>`
    },
    {
      h: 'Evaluating without a calculator',
      html: `<p>Take the <b>root first</b>, then the power — the numbers stay small.</p>
      ${eq(m('8<sup>2/3</sup> = (' + rt('3', '8') + ')<sup>2</sup> = 2<sup>2</sup> = 4'), true)}
      <p>Going the other way, ${m(rt('3', '8<sup>2</sup>') + ' = ' + rt('3', '64') + ' = 4')} —
      same answer, bigger arithmetic.</p>
      <div class="warn"><span class="wl">Negative index</span>
      ${m('a<sup>−p</sup>')} means <b>one over</b> ${m('a<sup>p</sup>')}; it does not make the answer
      negative. ${m('4<sup>−1/2</sup> = ' + f('1', '4<sup>1/2</sup>') + ' = ' + f('1', '2'))}.</div>`
    }
  ],
  examples: [
    {
      q: m('Evaluate 27<sup>2/3</sup>'),
      steps: [
        ['Denominator 3 → cube root; numerator 2 → square.', 'Root first.'],
        [m(rt('3', '27') + ' = 3'), ''],
        [m('3<sup>2</sup> = 9'), '']
      ],
      ans: m('9')
    },
    {
      q: m('Evaluate 16<sup>−3/4</sup>'),
      steps: [
        [m('16<sup>−3/4</sup> = ' + f('1', '16<sup>3/4</sup>')), 'A negative index means a reciprocal.'],
        [m(rt('4', '16') + ' = 2'), 'Root first.'],
        [m('2<sup>3</sup> = 8'), ''],
        [m('= ' + f('1', '8')), '']
      ],
      ans: m(f('1', '8'))
    },
    {
      q: m('Simplify a<sup>1/2</sup> · a<sup>1/3</sup>'),
      steps: [
        [m('a<sup>1/2</sup> · a<sup>1/3</sup> = a<sup>1/2 + 1/3</sup>'), 'Add the indices.'],
        [m(f('1', '2') + ' + ' + f('1', '3') + ' = ' + f('5', '6')), 'Common denominator 6.'],
        [m('= a<sup>5/6</sup>'), ' or ' + m(rt('6', 'a<sup>5</sup>'))]
      ],
      ans: m('a<sup>5/6</sup>')
    }
  ],
  modelNote: 'Set n = 3, m = 2, a = 8 and read both notations giving 4.',
  interactive: { type: 'rootPower', title: 'Root notation and index notation' },
  quiz: [
    { q: m('9<sup>1/2</sup>') + ' equals:', a: [m('4.5'), m('3'), m('81'), m('18')], c: 1, why: 'An index of ½ is a square root.' },
    { q: m('8<sup>2/3</sup>') + ' equals:', a: [m('4'), m('16'), m(f('16', '3')), m('6')], c: 0, why: 'Cube root of 8 is 2; then 2² = 4.' },
    { q: m('a<sup>−1/2</sup>') + ' equals:', a: [m('−' + sr('a')), m(f('1', sr('a'))), m(sr('−a')), m('a<sup>2</sup>')], c: 1, why: 'A negative index gives the reciprocal, not a negative value.' },
    { q: m('a<sup>1/2</sup> · a<sup>1/2</sup>') + ' equals:', a: [m('a<sup>1/4</sup>'), m('a'), m('2a<sup>1/2</sup>'), m('a<sup>2</sup>')], c: 1, why: '½ + ½ = 1.' }
  ],
  practice: {
    easy: [
      [m('Write ' + sr('a') + ' as a power'), m('a<sup>1/2</sup>')],
      [m('Write ' + rt('3', 'a') + ' as a power'), m('a<sup>1/3</sup>')],
      [m('Write a<sup>1/4</sup> as a root'), m(rt('4', 'a'))],
      [m('Evaluate 9<sup>1/2</sup>'), m('3')],
      [m('Evaluate 8<sup>1/3</sup>'), m('2')],
      [m('Evaluate 16<sup>1/2</sup>'), m('4')],
      [m('Evaluate 5<sup>0</sup>'), m('1')]
    ],
    med: [
      [m('Evaluate 27<sup>2/3</sup>'), m('9')],
      [m('Evaluate 16<sup>3/4</sup>'), m('8')],
      [m('Evaluate 4<sup>−1/2</sup>'), m(f('1', '2'))],
      [m('Simplify a<sup>1/2</sup> · a<sup>1/3</sup>'), m('a<sup>5/6</sup>')],
      [m('Simplify a<sup>3/4</sup> : a<sup>1/4</sup>'), m('a<sup>1/2</sup>')],
      [m('Simplify (a<sup>2/3</sup>)<sup>3</sup>'), m('a<sup>2</sup>')],
      [m('Evaluate 25<sup>3/2</sup>'), m('125')]
    ],
    hard: [
      [m('Evaluate 16<sup>−3/4</sup>'), m(f('1', '8'))],
      [m('Evaluate 32<sup>2/5</sup>'), m('4')],
      [m('Simplify (a<sup>1/2</sup>b<sup>1/3</sup>)<sup>6</sup>'), m('a<sup>3</sup>b<sup>2</sup>')],
      [m('Simplify ' + f('a<sup>5/6</sup>', 'a<sup>1/3</sup>')), m('a<sup>1/2</sup>')],
      [m('Evaluate (' + f('1', '8') + ')<sup>−2/3</sup>'), m('4')],
      [m('Write ' + sr('a') + ' · ' + rt('3', 'a') + ' as one power'), m('a<sup>5/6</sup>')],
      [m('Evaluate 81<sup>0.75</sup>'), m('81<sup>3/4</sup> = 27')]
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, §9, pp. 42–48. Take the root first, then the power.',
  homework: [
    m('Evaluate 64<sup>1/3</sup> and 64<sup>2/3</sup>'),
    m('Evaluate 100<sup>1/2</sup> and 100<sup>−1/2</sup>'),
    m('Simplify a<sup>2/5</sup> · a<sup>3/5</sup>'),
    m('Simplify (b<sup>3/4</sup>)<sup>8</sup>'),
    m('Evaluate 125<sup>2/3</sup>'),
    m('Write ' + rt('4', 'a<sup>3</sup>') + ' as a power with a rational index')
  ]
});

/* ============================== 13 ============================== */
G8_ALG.push({
  id: 'alg-13', stream: 'alg', grade: 8, quarter: 2, lessons: '32–33', hours: 2,
  title: 'Simplifying expressions with rational exponents',
  subtitle: 'The index laws applied to letters — and the factorising tricks that work just as well with fractional powers.',
  uz: 'Algebra 8, §10', uzPage: '§10, pp. 49–52',
  cam: 'Stage 9 · 2.3', camPage: 'Learner’s Book pp. 30–33', wb: 'Workbook 2.3',
  objectives: [
    'Simplify products and quotients of powers with rational exponents.',
    'Take a common power out as a factor.',
    'Recognise a difference of squares in ' + m('a − b = (' + sr('a') + ')<sup>2</sup> − (' + sr('b') + ')<sup>2</sup>') + '.',
    'Write an answer in root form when asked.'
  ],
  terms: [
    ['Simplify', 'Soddalashtirish', 'Упростить'],
    ['Common power', 'Umumiy daraja', 'Общая степень'],
    ['Substitution', 'Almashtirish', 'Замена'],
    ['Difference of squares', 'Kvadratlar ayirmasi', 'Разность квадратов'],
    ['Factor out', 'Qavsdan chiqarish', 'Вынести за скобку'],
    ['Root form', 'Ildiz ko‘rinishi', 'Форма с корнем'],
    ['Index form', 'Daraja ko‘rinishi', 'Степенная форма'],
    ['Expression', 'Ifoda', 'Выражение']
  ],
  timing: [[10, 'Warm-up'], [24, 'Explanation'], [16, 'Interactive'], [26, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'The routine',
      html: `<ol>
        <li>Turn every root into a power. Fractions of indices are easier than nested radicals.</li>
        <li>Apply the index laws.</li>
        <li>Collect, factorise or cancel.</li>
        <li>Convert back to root form only if the question asks for it.</li>
      </ol>
      ${eq(m(f(sr('a') + ' · ' + rt('3', 'a'), rt('6', 'a')) + ' = ' + f('a<sup>1/2</sup> · a<sup>1/3</sup>', 'a<sup>1/6</sup>') + ' = a<sup>1/2 + 1/3 − 1/6</sup> = a<sup>2/3</sup>'), true)}`
    },
    {
      h: 'Taking out a common power',
      html: `<p>The smallest index is the one to take out — exactly as with whole-number powers:</p>
      ${eq(m('a<sup>3/2</sup> + a<sup>1/2</sup> = a<sup>1/2</sup>(a + 1)'), true)}
      <p>Check by multiplying back: ${m('a<sup>1/2</sup> · a = a<sup>3/2</sup>')} ✓ and
      ${m('a<sup>1/2</sup> · 1 = a<sup>1/2</sup>')} ✓.</p>`
    },
    {
      h: 'The difference-of-squares trick',
      html: `<p>Since ${m('a = (' + sr('a') + ')<sup>2</sup>')} for ${m('a ≥ 0')}, any difference of two
      non-negative numbers is a difference of squares:</p>
      ${eq(m('a − b = (' + sr('a') + ' − ' + sr('b') + ')(' + sr('a') + ' + ' + sr('b') + ')'), true)}
      <p>That is the single most useful move in this section. It cancels fractions such as</p>
      ${eq(m(f('a − b', sr('a') + ' − ' + sr('b')) + ' = ' + sr('a') + ' + ' + sr('b')))}
      <p>and it also rationalises a two-term denominator, by multiplying by the <b>conjugate</b>:</p>
      ${eq(m(f('1', sr('5') + ' − ' + sr('3')) + ' = ' + f(sr('5') + ' + ' + sr('3'), '(' + sr('5') + ')<sup>2</sup> − (' + sr('3') + ')<sup>2</sup>') + ' = ' + f(sr('5') + ' + ' + sr('3'), '2')))}`
    }
  ],
  examples: [
    {
      q: m('Simplify ' + f('a<sup>3/4</sup> · a<sup>1/2</sup>', 'a<sup>1/4</sup>')),
      steps: [
        [m(f('3', '4') + ' + ' + f('1', '2') + ' = ' + f('5', '4')), 'Multiply on top: add the indices.'],
        [m(f('5', '4') + ' − ' + f('1', '4') + ' = 1'), 'Divide: subtract the index.'],
        [m('= a'), '']
      ],
      ans: m('a')
    },
    {
      q: m('Factorise a<sup>3/2</sup> − a<sup>1/2</sup>'),
      steps: [
        [m('smallest index is ' + f('1', '2')), 'That is the common factor.'],
        [m('a<sup>1/2</sup>(a<sup>1</sup> − 1)'), 'Subtract ½ from each index.'],
        [m('= a<sup>1/2</sup>(a − 1)'), ' or ' + m(sr('a') + '(a − 1)')]
      ],
      ans: m(sr('a') + '(a − 1)')
    },
    {
      q: m('Simplify ' + f('x − 9', sr('x') + ' − 3') + ',&nbsp; x ≥ 0, x ≠ 9'),
      steps: [
        [m('x = (' + sr('x') + ')<sup>2</sup>') + ' and ' + m('9 = 3<sup>2</sup>'), 'A difference of squares in disguise.'],
        [m('x − 9 = (' + sr('x') + ' − 3)(' + sr('x') + ' + 3)'), ''],
        [m('= ' + sr('x') + ' + 3'), 'Cancel the bracket.']
      ],
      ans: m(sr('x') + ' + 3')
    }
  ],
  modelNote: 'Use the model to check any answer numerically: put a value in and compare both forms.',
  interactive: { type: 'rootPower', title: 'Check an index answer numerically' },
  quiz: [
    { q: m('a<sup>1/2</sup> · a<sup>1/2</sup> · a<sup>1/2</sup>') + ' equals:', a: [m('a<sup>1/8</sup>'), m('a<sup>3/2</sup>'), m('3a<sup>1/2</sup>'), m('a<sup>1/6</sup>')], c: 1, why: 'Add the indices: ½ + ½ + ½ = 3/2.' },
    { q: m('a<sup>3/2</sup> + a<sup>1/2</sup>') + ' factorises to:', a: [m('a<sup>1/2</sup>(a + 1)'), m('a(a<sup>1/2</sup> + 1)'), m('a<sup>2</sup>(a + 1)'), 'it does not factorise'], c: 0, why: 'Take out the smallest power.' },
    { q: m(f('x − 4', sr('x') + ' − 2')) + ' equals:', a: [m(sr('x') + ' − 2'), m(sr('x') + ' + 2'), m('x + 2'), m('2')], c: 1, why: 'x − 4 = (√x − 2)(√x + 2); cancel the first bracket.' },
    { q: 'To rationalise ' + m(f('1', sr('5') + ' − ' + sr('3'))) + ' multiply by:', a: [m(sr('5'))
      , m(sr('5') + ' + ' + sr('3')), m(sr('5') + ' − ' + sr('3')), m('2')], c: 1, why: 'The conjugate turns the denominator into a difference of squares.' }
  ],
  practice: {
    easy: [
      [m('Simplify a<sup>1/2</sup> · a<sup>1/2</sup>'), m('a')],
      [m('Simplify a<sup>3/4</sup> : a<sup>1/4</sup>'), m('a<sup>1/2</sup>')],
      [m('Simplify (a<sup>1/3</sup>)<sup>3</sup>'), m('a')],
      [m('Simplify a<sup>1/2</sup> · a'), m('a<sup>3/2</sup>')],
      [m('Write ' + sr('a') + ' · ' + sr('a') + ' more simply'), m('a')],
      [m('Simplify (4a<sup>2</sup>)<sup>1/2</sup>, a ≥ 0'), m('2a')],
      [m('Simplify a<sup>1/2</sup> + 3a<sup>1/2</sup>'), m('4a<sup>1/2</sup>')]
    ],
    med: [
      [m('Simplify ' + f('a<sup>3/4</sup> · a<sup>1/2</sup>', 'a<sup>1/4</sup>')), m('a')],
      [m('Factorise a<sup>3/2</sup> − a<sup>1/2</sup>'), m(sr('a') + '(a − 1)')],
      [m('Simplify ' + f('x − 9', sr('x') + ' − 3')), m(sr('x') + ' + 3')],
      [m('Simplify (a<sup>1/2</sup>b<sup>1/2</sup>)<sup>4</sup>'), m('a<sup>2</sup>b<sup>2</sup>')],
      [m('Simplify ' + sr('a') + ' · ' + rt('3', 'a')), m('a<sup>5/6</sup>')],
      [m('Simplify ' + f('a', sr('a')) + ',&nbsp; a > 0'), m(sr('a'))],
      [m('Factorise a + a<sup>1/2</sup>'), m('a<sup>1/2</sup>(a<sup>1/2</sup> + 1)')]
    ],
    hard: [
      [m('Simplify ' + f(sr('a') + ' · ' + rt('3', 'a'), rt('6', 'a'))), m('a<sup>2/3</sup>')],
      [m('Simplify ' + f('x − 1', sr('x') + ' − 1') + ',&nbsp; x ≥ 0, x ≠ 1'), m(sr('x') + ' + 1')],
      [m('Rationalise ' + f('1', sr('5') + ' − ' + sr('3'))), m(f(sr('5') + ' + ' + sr('3'), '2'))],
      [m('Simplify (a<sup>2/3</sup> − b<sup>2/3</sup>) : (a<sup>1/3</sup> − b<sup>1/3</sup>)'), m('a<sup>1/3</sup> + b<sup>1/3</sup>')],
      [m('Simplify ' + f('a<sup>3/2</sup> − a<sup>1/2</sup>', 'a − 1') + ',&nbsp; a > 0, a ≠ 1'), m('a<sup>1/2</sup>')],
      [m('Evaluate (' + sr('7') + ' + ' + sr('3') + ')(' + sr('7') + ' − ' + sr('3') + ')'), m('7 − 3 = 4')],
      [m('Simplify (a<sup>1/2</sup> + 1)<sup>2</sup> − (a<sup>1/2</sup> − 1)<sup>2</sup>'), m('4a<sup>1/2</sup>')]
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Algebra 8, §10, pp. 49–52.',
  homework: [
    m('Simplify a<sup>2/3</sup> · a<sup>1/3</sup>'),
    m('Simplify ' + f('b<sup>7/4</sup>', 'b<sup>3/4</sup>')),
    m('Factorise x<sup>3/2</sup> + x<sup>1/2</sup>'),
    m('Simplify ' + f('x − 16', sr('x') + ' − 4')),
    m('Rationalise ' + f('2', sr('7') + ' − ' + sr('5')))
  ]
});

/* ============================== 14 ============================== */
G8_ALG.push({
  id: 'alg-14', stream: 'alg', grade: 8, quarter: 2, lessons: '34–35', hours: 2,
  title: 'Standard form, and fractions as decimals',
  subtitle: 'The national plan’s “practical and interdisciplinary” lessons, carrying two Cambridge Stage 9 topics the programme does not otherwise reach.',
  uz: 'Algebra 8, Chapter I practical', uzPage: 'pp. 62–67',
  cam: 'Stage 9 · 1.2, 8.1  [Cambridge insert]', camPage: 'Learner’s Book pp. 14–16, 162–166', wb: 'Workbook 1.2, 8.1',
  objectives: [
    'Write large and small numbers in standard form ' + m('a × 10<sup>n</sup>') + ', ' + m('1 ≤ a < 10') + '.',
    'Multiply and divide numbers written in standard form.',
    'Convert a fraction to a terminating or recurring decimal, and back.',
    'Tell a rational number from an irrational one by its decimal.'
  ],
  terms: [
    ['Standard form', 'Standart ko‘rinish', 'Стандартный вид'],
    ['Power of ten', 'O‘nning darajasi', 'Степень десяти'],
    ['Significant figures', 'Ahamiyatli raqamlar', 'Значащие цифры'],
    ['Terminating decimal', 'Chekli o‘nli kasr', 'Конечная десятичная дробь'],
    ['Recurring decimal', 'Davriy o‘nli kasr', 'Периодическая десятичная дробь'],
    ['Period', 'Davr', 'Период'],
    ['Rational number', 'Ratsional son', 'Рациональное число'],
    ['Irrational number', 'Irratsional son', 'Иррациональное число'],
    ['Convert', 'Aylantirish', 'Преобразовать']
  ],
  timing: [[10, 'Warm-up'], [24, 'Explanation'], [16, 'Interactive'], [26, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'Standard form',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      A number is in <b>standard form</b> when it is written as ${m('a × 10<sup>n</sup>')} with
      ${m('1 ≤ a < 10')} and ${m('n')} a whole number.</div>
      <ul>
        <li>${m('4 500 000 = 4.5 × 10<sup>6</sup>')} — the point moves 6 places left, so ${m('n')} is positive.</li>
        <li>${m('0.00032 = 3.2 × 10<sup>−4</sup>')} — the point moves 4 places right, so ${m('n')} is negative.</li>
      </ul>
      <p>To calculate, handle the numbers and the powers of ten separately:</p>
      ${eq(m('(3 × 10<sup>5</sup>) · (2 × 10<sup>3</sup>) = 6 × 10<sup>8</sup>'))}
      ${eq(m('(6 × 10<sup>5</sup>) : (3 × 10<sup>2</sup>) = 2 × 10<sup>3</sup>'))}
      <div class="warn"><span class="wl">Tidy the answer</span>
      ${m('40 × 10<sup>4</sup>')} is not in standard form. Rewrite it as ${m('4 × 10<sup>5</sup>')}.</div>`
    },
    {
      h: 'Fractions as decimals',
      html: `<p>Divide the numerator by the denominator. Exactly one of two things happens:</p>
      <ul>
        <li>the division <b>stops</b> — a <b>terminating</b> decimal, e.g. ${m(f('3', '8') + ' = 0.375')};</li>
        <li>a block of digits <b>repeats for ever</b> — a <b>recurring</b> decimal, e.g.
        ${m(f('1', '3') + ' = 0.333… = 0.(3)')} and ${m(f('5', '11') + ' = 0.454545… = 0.(45)')}.</li>
      </ul>
      <div class="keybox"><div class="klabel">Which one?</div>
      Cancel the fraction first. If the denominator's only prime factors are 2 and 5, the decimal
      terminates; otherwise it recurs. ${m(f('7', '40'))} terminates (${m('40 = 2<sup>3</sup> · 5')});
      ${m(f('7', '30'))} recurs (${m('30 = 2 · 3 · 5')}).</div>
      <p>Every fraction gives a terminating or recurring decimal, and every terminating or recurring
      decimal comes from a fraction. A decimal that never stops <em>and</em> never repeats belongs to an
      <b>irrational</b> number — ${m(sr('2') + ' = 1.41421356…')}, ${m('π = 3.14159…')}.</p>`
    },
    {
      h: 'Turning a recurring decimal back into a fraction',
      html: `<p>Multiply by a power of ten so that one whole period shifts past the point, then subtract.</p>
      ${eq(m('x = 0.(7) ⟹ 10x = 7.(7) ⟹ 9x = 7 ⟹ x = ' + f('7', '9')), true)}
      <p>For a two-digit period multiply by 100: ${m('x = 0.(45) ⟹ 100x − x = 45 ⟹ x = ' + f('45', '99') + ' = ' + f('5', '11'))}.</p>`
    }
  ],
  examples: [
    {
      q: 'Write 0.00047 and 92 000 in standard form.',
      steps: [
        [m('0.00047 → 4.7'), 'The point moves 4 places right.'],
        [m('= 4.7 × 10<sup>−4</sup>'), 'Moving right gives a negative index.'],
        [m('92 000 → 9.2'), 'The point moves 4 places left.'],
        [m('= 9.2 × 10<sup>4</sup>'), '']
      ],
      ans: m('4.7 × 10<sup>−4</sup>') + ' and ' + m('9.2 × 10<sup>4</sup>')
    },
    {
      q: m('Work out (8 × 10<sup>6</sup>) : (4 × 10<sup>2</sup>)'),
      steps: [
        [m('8 : 4 = 2'), 'The numbers.'],
        [m('10<sup>6</sup> : 10<sup>2</sup> = 10<sup>4</sup>'), 'Subtract the indices.'],
        [m('= 2 × 10<sup>4</sup>'), 'Already in standard form.']
      ],
      ans: m('2 × 10<sup>4</sup> = 20 000')
    },
    {
      q: m('Write 0.(6) as a fraction'),
      steps: [
        [m('x = 0.666…'), 'Name the number.'],
        [m('10x = 6.666…'), 'One period is one digit, so multiply by 10.'],
        [m('10x − x = 6'), 'The tails cancel exactly.'],
        [m('9x = 6, x = ' + f('6', '9') + ' = ' + f('2', '3')), 'Cancel.']
      ],
      ans: m(f('2', '3'))
    }
  ],
  modelNote: 'Ask for an estimate in standard form before any calculation — it catches most place-value slips.',
  interactive: {
    type: 'fractionCancel',
    title: 'Standard form and recurring decimals',
    hint: 'Pick a task and reveal the steps.',
    items: [
      {
        title: '0.00058 in standard form',
        start: m('0.00058'),
        steps: [
          ['Move the point until one non-zero digit is in front: ' + m('5.8') + '.', 'That is the value of a.'],
          ['The point moved <b>4 places right</b>.', 'Right ⟹ negative index.'],
          [m('5.8 × 10<sup>−4</sup>'), 'Check: 5.8 ÷ 10 000 = 0.00058 ✓']
        ],
        answer: m('5.8 × 10<sup>−4</sup>')
      },
      {
        title: '(3 × 10⁵) · (4 × 10⁴)',
        start: m('(3 × 10<sup>5</sup>) · (4 × 10<sup>4</sup>)'),
        steps: [
          [m('3 · 4 = 12'), 'Numbers first.'],
          [m('10<sup>5</sup> · 10<sup>4</sup> = 10<sup>9</sup>'), 'Add the indices.'],
          [m('12 × 10<sup>9</sup>'), 'Not standard form — 12 is too big.'],
          [m('= 1.2 × 10<sup>10</sup>'), 'Tidy it.']
        ],
        answer: m('1.2 × 10<sup>10</sup>')
      },
      {
        title: 'Does 7/40 terminate?',
        start: m(f('7', '40')),
        steps: [
          ['The fraction is already in lowest terms.', 'Always cancel first.'],
          [m('40 = 2<sup>3</sup> · 5'), 'Only the primes 2 and 5.'],
          ['So the decimal terminates.', ''],
          [m('7 : 40 = 0.175'), '']
        ],
        answer: m('0.175') + ' — terminating.'
      },
      {
        title: '0.(45) as a fraction',
        start: m('x = 0.454545…'),
        steps: [
          ['The period has two digits, so multiply by 100.', ''],
          [m('100x = 45.4545…'), ''],
          [m('100x − x = 45 ⟹ 99x = 45'), 'The infinite tails cancel.'],
          [m('x = ' + f('45', '99') + ' = ' + f('5', '11')), 'Cancel by 9.']
        ],
        answer: m(f('5', '11'))
      }
    ]
  },
  quiz: [
    { q: m('0.00062') + ' in standard form is:', a: [m('6.2 × 10<sup>−4</sup>'), m('6.2 × 10<sup>4</sup>'), m('62 × 10<sup>−5</sup>'), m('0.62 × 10<sup>−3</sup>')], c: 0, why: 'a must satisfy 1 ≤ a < 10, and the point moved 4 places right.' },
    { q: m('(2 × 10<sup>3</sup>) · (5 × 10<sup>4</sup>)') + ' equals:', a: [m('10 × 10<sup>7</sup>'), m('1 × 10<sup>8</sup>'), m('7 × 10<sup>7</sup>'), m('10<sup>12</sup>')], c: 1, why: '10 × 10⁷ is not standard form; tidy it to 1 × 10⁸.' },
    { q: 'Which fraction gives a recurring decimal?', a: [m(f('3', '8')), m(f('7', '20')), m(f('5', '6')), m(f('9', '25'))], c: 2, why: '6 = 2 · 3 has a prime factor other than 2 and 5.' },
    { q: m('0.(3)') + ' as a fraction is:', a: [m(f('3', '10')), m(f('1', '3')), m(f('3', '99')), m(f('1', '30'))], c: 1, why: '10x − x = 3, so 9x = 3 and x = 1/3.' }
  ],
  practice: {
    easy: [
      [m('Write 5 000 in standard form'), m('5 × 10<sup>3</sup>')],
      [m('Write 0.007 in standard form'), m('7 × 10<sup>−3</sup>')],
      [m('Write 3.2 × 10<sup>4</sup> as an ordinary number'), m('32 000')],
      [m('Write 6 × 10<sup>−2</sup> as an ordinary number'), m('0.06')],
      [m('Write ' + f('1', '4') + ' as a decimal'), m('0.25')],
      [m('Write ' + f('1', '3') + ' as a decimal'), m('0.(3)')],
      [m('Write 0.5 as a fraction in lowest terms'), m(f('1', '2'))]
    ],
    med: [
      [m('Write 0.00047 in standard form'), m('4.7 × 10<sup>−4</sup>')],
      [m('Write 92 000 in standard form'), m('9.2 × 10<sup>4</sup>')],
      [m('Work out (3 × 10<sup>5</sup>) · (2 × 10<sup>3</sup>)'), m('6 × 10<sup>8</sup>')],
      [m('Work out (8 × 10<sup>6</sup>) : (4 × 10<sup>2</sup>)'), m('2 × 10<sup>4</sup>')],
      [m('Does ' + f('7', '40') + ' terminate? Give the decimal.'), 'Yes — ' + m('0.175')],
      [m('Write ' + f('5', '11') + ' as a decimal'), m('0.(45)')],
      [m('Write 0.(6) as a fraction'), m(f('2', '3'))]
    ],
    hard: [
      [m('Work out (4 × 10<sup>5</sup>) · (5 × 10<sup>4</sup>) in standard form'), m('2 × 10<sup>10</sup>')],
      [m('Work out (1.2 × 10<sup>7</sup>) : (4 × 10<sup>3</sup>)'), m('3 × 10<sup>3</sup>')],
      [m('Write 0.(45) as a fraction in lowest terms'), m(f('5', '11'))],
      [m('Write 0.1(6) as a fraction'), m(f('1', '6')) + ' — multiply by 10 and by 100, then subtract.'],
      [m('Without dividing, say whether ' + f('9', '48') + ' terminates'), 'Cancel to ' + m(f('3', '16')) + '; ' + m('16 = 2<sup>4</sup>') + ', so yes.'],
      [m('The mass of a grain of sand is about 6.6 × 10<sup>−5</sup> kg. Find the mass of 2 × 10<sup>6</sup> grains.'), m('1.32 × 10<sup>2</sup> = 132 kg')],
      [m('Is 0.101001000100001… rational? Explain.'), 'No — it never stops and never repeats, so it is irrational.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, pp. 62–67 (practical problems) and Cambridge Workbook 1.2.',
  homework: [
    m('Write 0.000091 and 340 000 in standard form'),
    m('Work out (5 × 10<sup>4</sup>) · (6 × 10<sup>3</sup>) in standard form'),
    m('Work out (9 × 10<sup>8</sup>) : (3 × 10<sup>5</sup>)'),
    m('Write ' + f('7', '8') + ' and ' + f('4', '9') + ' as decimals'),
    m('Write 0.(8) as a fraction'),
    m('Without dividing, decide whether ' + f('11', '50') + ' terminates')
  ]
});

/* ============================== 15 ============================== */
G8_ALG.push({
  id: 'alg-15', stream: 'alg', grade: 8, quarter: 2, lessons: '36–37', hours: 2,
  title: 'Control work 3 · Roots and rational exponents',
  subtitle: 'The Chapter I assessment, followed by a work-on-mistakes lesson sorted by error type.',
  uz: 'Algebra 8, §§8–10', uzPage: 'Revision of §§8–10',
  cam: 'Stage 9 · Unit 1 check', camPage: 'Learner’s Book pp. 9–20', wb: 'Workbook Unit 1',
  objectives: [
    'Assess roots, rational exponents, standard form and decimals.',
    'Sort the errors by type rather than by question.',
    'Re-solve every task that was lost.'
  ],
  timing: [[4, 'Setting up'], [72, 'The paper'], [4, 'Collect in']],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Work on mistakes', 'Xatolar ustida ishlash', 'Работа над ошибками'],
    ['Root', 'Ildiz', 'Корень'],
    ['Exponent', 'Ko‘rsatkich', 'Показатель'],
    ['Standard form', 'Standart ko‘rinish', 'Стандартный вид'],
    ['Evaluate', 'Hisoblash', 'Вычислить'],
    ['Justify', 'Asoslash', 'Обосновать']
  ],
  sections: [
    {
      h: 'Lesson 36 — the paper (40 minutes)',
      html: `<p>Two variants of seven tasks, 2 marks each, 14 in total:</p>
      <ul>
        <li>tasks 1–2 · simplify a root (§8)</li>
        <li>task 3 · rationalise a denominator (§8)</li>
        <li>tasks 4–5 · evaluate a power with a rational exponent (§9)</li>
        <li>task 6 · simplify a letter expression (§10)</li>
        <li>task 7 · standard form or a recurring decimal (Cambridge insert)</li>
      </ul>`
    },
    {
      h: 'Lesson 37 — work on mistakes (40 minutes)',
      html: `<div class="keybox"><div class="klabel">The four errors this paper produces</div>
      <ol style="margin:0">
        <li><b>Splitting a root over a sum</b> — writing ${m(sr('a + b') + ' = ' + sr('a') + ' + ' + sr('b'))}.</li>
        <li><b>Numerator and denominator of the index swapped</b> —
        reading ${m('8<sup>2/3</sup>')} as ${m('(8<sup>3</sup>)<sup>2</sup>')}.</li>
        <li><b>A negative index treated as a negative answer</b> —
        ${m('4<sup>−1/2</sup>')} given as ${m('−2')}.</li>
        <li><b>Standard form not tidied</b> — leaving ${m('12 × 10<sup>9</sup>')}.</li>
      </ol></div>
      <p>The Hard set below is seven pieces of wrong working built from these four.</p>`
    }
  ],
  examples: [
    {
      q: 'Find the error: ' + m(sr('16 + 9') + ' = 4 + 3 = 7'),
      steps: [
        ['A root does not split over a sum.', 'Only over a product or a quotient.'],
        [m('16 + 9 = 25'), 'Do the addition first.'],
        [m(sr('25') + ' = 5'), '']
      ],
      ans: m('5')
    },
    {
      q: 'Find the error: ' + m('4<sup>−1/2</sup> = −2'),
      steps: [
        ['A negative index means a reciprocal, not a negative number.', ''],
        [m('4<sup>−1/2</sup> = ' + f('1', '4<sup>1/2</sup>')), ''],
        [m('= ' + f('1', '2')), '']
      ],
      ans: m(f('1', '2'))
    }
  ],
  modelNote: 'Show each piece of wrong working, take a vote on the error type, then reveal.',
  interactive: {
    type: 'fractionCancel',
    title: 'Diagnose the error',
    hint: 'Which of the four errors is this?',
    items: [
      {
        title: 'Error 1 — a root split over a sum',
        start: '<b>Claimed:</b> ' + m(sr('16 + 9') + ' = 7'),
        steps: [
          ['The product rule is ' + m(sr('ab') + ' = ' + sr('a') + ' · ' + sr('b')) + '. There is no sum rule.', ''],
          [m('16 + 9 = 25') + ', so the root is ' + m(sr('25')) + '.', ''],
          [m('= 5') + ', not 7.', 'One counter-example is enough to kill the false rule.']
        ],
        answer: m('5')
      },
      {
        title: 'Error 2 — index upside down',
        start: '<b>Claimed:</b> ' + m('8<sup>2/3</sup> = (8<sup>3</sup>)<sup>2</sup> = 262144'),
        steps: [
          ['The <b>denominator</b> of the index is the root; the numerator is the power.', ''],
          [m('8<sup>2/3</sup> = (' + rt('3', '8') + ')<sup>2</sup>'), ''],
          [m('= 2<sup>2</sup> = 4'), 'Root first keeps the numbers small.']
        ],
        answer: m('4')
      },
      {
        title: 'Error 3 — negative index, negative answer',
        start: '<b>Claimed:</b> ' + m('9<sup>−1/2</sup> = −3'),
        steps: [
          [m('a<sup>−p</sup> = ' + f('1', 'a<sup>p</sup>')), 'The minus lives in the exponent, not in the value.'],
          [m('9<sup>1/2</sup> = 3'), ''],
          [m('9<sup>−1/2</sup> = ' + f('1', '3')), 'A positive number, less than 1.']
        ],
        answer: m(f('1', '3'))
      },
      {
        title: 'Error 4 — standard form not tidied',
        start: '<b>Claimed:</b> ' + m('(4 × 10<sup>5</sup>)(5 × 10<sup>4</sup>) = 20 × 10<sup>9</sup>'),
        steps: [
          ['The arithmetic is right: ' + m('4 · 5 = 20') + ' and ' + m('10<sup>5</sup> · 10<sup>4</sup> = 10<sup>9</sup>') + '.', ''],
          ['But standard form needs ' + m('1 ≤ a < 10') + ', and 20 is too big.', ''],
          [m('20 × 10<sup>9</sup> = 2 × 10<sup>10</sup>'), 'Move one factor of ten across.']
        ],
        answer: m('2 × 10<sup>10</sup>')
      }
    ]
  },
  quiz: [
    { q: m(sr('25 + 144')) + ' equals:', a: [m('17'), m('13'), m('169'), m('5 + 12')], c: 1, why: '√169 = 13; roots do not split over a sum.' },
    { q: m('8<sup>2/3</sup>') + ' equals:', a: [m('4'), m('64'), m('16'), m('262144')], c: 0, why: 'Cube root first: 2, then squared.' },
    { q: m('9<sup>−1/2</sup>') + ' equals:', a: [m('−3'), m(f('1', '3')), m('3'), m('−' + f('1', '3'))], c: 1, why: 'A negative index gives a reciprocal.' },
    { q: m('20 × 10<sup>9</sup>') + ' in standard form is:', a: [m('20 × 10<sup>9</sup>'), m('2 × 10<sup>10</sup>'), m('2 × 10<sup>8</sup>'), m('0.2 × 10<sup>11</sup>')], c: 1, why: 'a must be at least 1 and less than 10.' }
  ],
  practice: {
    easy: [
      [m('<b>Variant 1, task 1.</b> Simplify ' + sr('48')), m('4' + sr('3'))],
      [m('<b>Task 2.</b> Simplify ' + sr('6') + ' · ' + sr('24')), m('12')],
      [m('<b>Task 3.</b> Rationalise ' + f('4', sr('2'))), m('2' + sr('2'))],
      [m('<b>Task 4.</b> Evaluate 16<sup>1/2</sup>'), m('4')],
      [m('<b>Task 5.</b> Evaluate 27<sup>2/3</sup>'), m('9')],
      [m('<b>Task 6.</b> Simplify a<sup>1/2</sup> · a<sup>3/2</sup>'), m('a<sup>2</sup>')],
      [m('<b>Task 7.</b> Write 0.0035 in standard form'), m('3.5 × 10<sup>−3</sup>')]
    ],
    med: [
      [m('<b>Variant 2, task 1.</b> Simplify ' + sr('75')), m('5' + sr('3'))],
      [m('<b>Task 2.</b> Simplify ' + sr('8') + ' · ' + sr('18')), m('12')],
      [m('<b>Task 3.</b> Rationalise ' + f('9', sr('3'))), m('3' + sr('3'))],
      [m('<b>Task 4.</b> Evaluate 64<sup>1/3</sup>'), m('4')],
      [m('<b>Task 5.</b> Evaluate 25<sup>−1/2</sup>'), m(f('1', '5'))],
      [m('<b>Task 6.</b> Simplify ' + f('b<sup>5/4</sup>', 'b<sup>1/4</sup>')), m('b')],
      [m('<b>Task 7.</b> Write ' + f('2', '3') + ' as a decimal'), m('0.(6)')]
    ],
    hard: [
      [m('Find the error: ' + sr('16 + 9') + ' = 7'), 'Roots do not split over a sum. Correct: ' + m('5') + '.'],
      [m('Find the error: 8<sup>2/3</sup> = (8<sup>3</sup>)<sup>2</sup>'), 'Index upside down. Correct: ' + m('4') + '.'],
      [m('Find the error: 4<sup>−1/2</sup> = −2'), 'A negative index gives a reciprocal. Correct: ' + m(f('1', '2')) + '.'],
      [m('Find the error: (4 × 10<sup>5</sup>)(5 × 10<sup>4</sup>) = 20 × 10<sup>9</sup>'), 'Not tidied. Correct: ' + m('2 × 10<sup>10</sup>') + '.'],
      [m('Find the error: ' + sr('a<sup>2</sup>') + ' = a for every a'), 'True only for ' + m('a ≥ 0') + '; for ' + m('a < 0') + ' it is ' + m('−a') + '.'],
      [m('Find the error: ' + f('1', sr('2')) + ' = ' + sr('2')), 'Rationalising gives ' + m(f(sr('2'), '2')) + ', which is about ' + m('0.71') + ', not ' + m('1.41') + '.'],
      [m('Find the error: 0.(3) = ' + f('3', '10')), m(f('3', '10') + ' = 0.3') + ' exactly, not recurring. Correct: ' + m(f('1', '3')) + '.']
    ]
  },
  hwTitle: 'After the work-on-mistakes lesson',
  hwNote: 'Re-solve every task you lost marks on, then these three.',
  homework: [
    m('Simplify ' + sr('147') + ' and rationalise ' + f('5', sr('5'))),
    m('Evaluate 32<sup>3/5</sup> and 49<sup>−1/2</sup>'),
    'Write out the four errors from this lesson in your own words with one example each.'
  ]
});

/* ============================== 16 ============================== */
G8_ALG.push({
  id: 'alg-16', stream: 'alg', grade: 8, quarter: 2, lessons: '38–39', hours: 2,
  title: 'Numerical inequalities',
  subtitle: 'What “greater than” really means — one definition by subtraction that settles every comparison, however awkward the numbers.',
  uz: 'Algebra 8, §11', uzPage: '§11, pp. 68–70',
  cam: 'Stage 9 · 4.3', camPage: 'Learner’s Book pp. 96–102', wb: 'Workbook 4.3',
  objectives: [
    'State the definition of ' + m('a > b') + ' by means of the difference.',
    'Compare two numbers or expressions using the difference method.',
    'Read and write strict and non-strict inequalities.',
    'Place numbers correctly on a number line.'
  ],
  terms: [
    ['Inequality', 'Tengsizlik', 'Неравенство'],
    ['Greater than', 'Katta', 'Больше'],
    ['Less than', 'Kichik', 'Меньше'],
    ['Strict inequality', 'Qat’iy tengsizlik', 'Строгое неравенство'],
    ['Non-strict inequality', 'Qat’iy bo‘lmagan tengsizlik', 'Нестрогое неравенство'],
    ['Difference', 'Ayirma', 'Разность'],
    ['Positive', 'Musbat', 'Положительный'],
    ['Negative', 'Manfiy', 'Отрицательный'],
    ['Number line', 'Sonlar o‘qi', 'Числовая прямая'],
    ['Compare', 'Taqqoslash', 'Сравнить']
  ],
  timing: [[10, 'Warm-up'], [24, 'Explanation'], [16, 'Interactive'], [26, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'The definition',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      ${eq(m('a > b') + ' &nbsp;means&nbsp; ' + m('a − b > 0'))}
      ${eq(m('a < b') + ' &nbsp;means&nbsp; ' + m('a − b < 0'))}
      and ${m('a = b')} means ${m('a − b = 0')}.</div>
      <p>That is the whole of this lesson. Comparing two numbers is not a matter of looking at them —
      it is a matter of <b>subtracting and checking the sign</b>. For ordinary numbers this feels like
      overkill; for expressions with letters it is the only method that works.</p>
      <p>On the number line, ${m('a > b')} means ${m('a')} lies to the <b>right</b> of ${m('b')}.</p>`
    },
    {
      h: 'Strict and non-strict',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Symbol</th><th>Read as</th><th>Type</th><th>On the line</th></tr></thead>
      <tbody>
        <tr><td>${m('a > b')}</td><td>a is greater than b</td><td>strict</td><td>open circle</td></tr>
        <tr><td>${m('a < b')}</td><td>a is less than b</td><td>strict</td><td>open circle</td></tr>
        <tr><td>${m('a ≥ b')}</td><td>a is greater than or equal to b</td><td>non-strict</td><td>filled circle</td></tr>
        <tr><td>${m('a ≤ b')}</td><td>a is less than or equal to b</td><td>non-strict</td><td>filled circle</td></tr>
      </tbody></table></div>
      {{fig:numberLineInterval:An open circle excludes the boundary; a filled circle includes it.}}
      <p>Note that ${m('5 ≥ 5')} is <b>true</b> — “or equal to” only has to hold on one side.</p>`
    },
    {
      h: 'The difference method in action',
      html: `<p>Compare ${m(f('3', '7'))} and ${m(f('4', '9'))} without decimals:</p>
      ${eq(m(f('3', '7') + ' − ' + f('4', '9') + ' = ' + f('27 − 28', '63') + ' = −' + f('1', '63') + ' < 0'), true)}
      <p>The difference is negative, so ${m(f('3', '7') + ' < ' + f('4', '9'))}. No decimals, no calculator,
      no rounding to argue about.</p>
      <p>With letters it is the only route. To show that ${m('a<sup>2</sup> + 1 > 2a')} for every
      ${m('a')}, subtract:</p>
      ${eq(m('a<sup>2</sup> + 1 − 2a = (a − 1)<sup>2</sup> ≥ 0'), true)}
      <p>A square is never negative, so the difference is never negative — the inequality holds, with
      equality only when ${m('a = 1')}.</p>
      <div class="warn"><span class="wl">Two useful facts</span>
      ${m('a<sup>2</sup> ≥ 0')} for every ${m('a')}, and ${m('a<sup>2</sup> > 0')} unless ${m('a = 0')}.
      Almost every proof in this chapter ends by spotting a square.</div>`
    }
  ],
  examples: [
    {
      q: m('Compare ' + f('5', '8') + ' and ' + f('7', '11')),
      steps: [
        [m(f('5', '8') + ' − ' + f('7', '11')), 'Subtract.'],
        [m('= ' + f('55 − 56', '88') + ' = −' + f('1', '88')), 'Common denominator 88.'],
        ['The difference is negative.', ''],
        [m(f('5', '8') + ' < ' + f('7', '11')), '']
      ],
      ans: m(f('5', '8') + ' < ' + f('7', '11'))
    },
    {
      q: m('Prove that a<sup>2</sup> + 4 ≥ 4a for every a'),
      steps: [
        [m('a<sup>2</sup> + 4 − 4a'), 'Take the difference.'],
        [m('= a<sup>2</sup> − 4a + 4'), 'Rearrange.'],
        [m('= (a − 2)<sup>2</sup>'), 'A perfect square.'],
        [m('(a − 2)<sup>2</sup> ≥ 0') + ' always.', 'So the difference is never negative.']
      ],
      ans: 'True for every ' + m('a') + ', with equality at ' + m('a = 2') + '.'
    },
    {
      q: m('Which is greater: 2<sup>10</sup> or 10<sup>3</sup>?'),
      steps: [
        [m('2<sup>10</sup> = 1024'), ''],
        [m('10<sup>3</sup> = 1000'), ''],
        [m('1024 − 1000 = 24 > 0'), 'The difference is positive.'],
        [m('2<sup>10</sup> > 10<sup>3</sup>'), '']
      ],
      ans: m('2<sup>10</sup> > 10<sup>3</sup>')
    }
  ],
  modelNote: 'Move the boundary and flip the symbol — the open and filled circles are the whole story.',
  interactive: { type: 'inequalityLine' },
  quiz: [
    { q: m('a > b') + ' means:', a: [m('a − b > 0'), m('b − a > 0'), m('a + b > 0'), m('ab > 0')], c: 0, why: 'That is the definition — the difference is positive.' },
    { q: 'Which statement is true?', a: [m('5 > 5'), m('5 ≥ 5'), m('5 < 5'), 'none of them'], c: 1, why: '“Or equal to” is satisfied by the equal case.' },
    { q: m('a<sup>2</sup>') + ' is:', a: ['always positive', 'never negative', 'always negative', 'sometimes negative'], c: 1, why: 'It is 0 when a = 0 and positive otherwise.' },
    { q: 'On the number line, a filled circle means:', a: ['the value is excluded', 'the value is included', 'the inequality is strict', 'nothing in particular'], c: 1, why: 'Filled = included, so the symbol is ≤ or ≥.' }
  ],
  practice: {
    easy: [
      [m('Compare 7 and 4 using the difference'), m('7 − 4 = 3 > 0') + ', so ' + m('7 > 4')],
      [m('Compare −3 and −5'), m('−3 − (−5) = 2 > 0') + ', so ' + m('−3 > −5')],
      [m('Is 6 ≥ 6 true?'), 'Yes.'],
      [m('Is 6 > 6 true?'), 'No.'],
      [m('Write “x is at least 5” as an inequality'), m('x ≥ 5')],
      [m('Write “x is less than −2” as an inequality'), m('x < −2')],
      [m('Compare ' + f('1', '2') + ' and ' + f('2', '5')), m(f('1', '2') + ' > ' + f('2', '5'))]
    ],
    med: [
      [m('Compare ' + f('3', '7') + ' and ' + f('4', '9')), m(f('3', '7') + ' < ' + f('4', '9'))],
      [m('Compare ' + f('5', '8') + ' and ' + f('7', '11')), m(f('5', '8') + ' < ' + f('7', '11'))],
      [m('Which is greater: 2<sup>10</sup> or 10<sup>3</sup>?'), m('2<sup>10</sup> = 1024 > 1000')],
      [m('Compare 3' + sr('2') + ' and 4'), m('3' + sr('2') + ' ≈ 4.24 > 4')],
      [m('Prove a<sup>2</sup> + 1 ≥ 2a'), 'The difference is ' + m('(a − 1)<sup>2</sup> ≥ 0') + '.'],
      [m('Prove a<sup>2</sup> + 4 ≥ 4a'), 'The difference is ' + m('(a − 2)<sup>2</sup> ≥ 0') + '.'],
      [m('Compare −' + f('2', '3') + ' and −' + f('3', '4')), m('−' + f('2', '3') + ' > −' + f('3', '4'))]
    ],
    hard: [
      [m('Prove that a<sup>2</sup> + b<sup>2</sup> ≥ 2ab for all a, b'), 'The difference is ' + m('(a − b)<sup>2</sup> ≥ 0') + '.'],
      [m('Prove that a + ' + f('1', 'a') + ' ≥ 2 for a > 0'), 'The difference is ' + m(f('(a − 1)<sup>2</sup>', 'a') + ' ≥ 0') + ' because ' + m('a > 0') + '.'],
      [m('Compare ' + f('a', 'b') + ' and ' + f('a + 1', 'b + 1') + ' for a > b > 0'), 'The difference is ' + m(f('a − b', 'b(b + 1)') + ' > 0') + ', so ' + m(f('a', 'b') + ' > ' + f('a + 1', 'b + 1')) + '.'],
      [m('Prove that (a + b)<sup>2</sup> ≥ 4ab'), 'The difference is ' + m('(a − b)<sup>2</sup> ≥ 0') + '.'],
      [m('Which is greater: ' + sr('10') + ' or 3.2?'), m('10 < 10.24 = 3.2<sup>2</sup>') + ', so ' + m(sr('10') + ' < 3.2')],
      [m('Show that a<sup>2</sup> + b<sup>2</sup> + 2 ≥ 2a + 2b'), 'The difference is ' + m('(a − 1)<sup>2</sup> + (b − 1)<sup>2</sup> ≥ 0') + '.'],
      [m('For which a is a<sup>2</sup> > a?'), m('a<sup>2</sup> − a = a(a − 1) > 0') + ' when ' + m('a < 0') + ' or ' + m('a > 1') + '.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Algebra 8, §11, pp. 68–70. Show the difference in every comparison.',
  homework: [
    m('Compare ' + f('4', '9') + ' and ' + f('5', '11') + ' by the difference method'),
    m('Compare −' + f('3', '5') + ' and −' + f('5', '8')),
    m('Prove that a<sup>2</sup> + 9 ≥ 6a for every a'),
    m('Which is greater: 3<sup>5</sup> or 5<sup>3</sup>?'),
    m('Write as inequalities: “x is at most 7” and “y is greater than −1”')
  ]
});

/* ============================== 17 ============================== */
G8_ALG.push({
  id: 'alg-17', stream: 'alg', grade: 8, quarter: 2, lessons: '40–41', hours: 2,
  title: 'Basic properties of numerical inequalities',
  subtitle: 'What you may do to both sides — and the one operation that turns the sign around.',
  uz: 'Algebra 8, §12', uzPage: '§12, pp. 71–74',
  cam: 'Stage 9 · 4.3', camPage: 'Learner’s Book pp. 96–102', wb: 'Workbook 4.3',
  objectives: [
    'State the four basic properties of inequalities.',
    'Multiply or divide by a negative number and reverse the sign.',
    'Use transitivity to chain comparisons.',
    'Decide which operations preserve an inequality and which do not.'
  ],
  terms: [
    ['Property of an inequality', 'Tengsizlik xossasi', 'Свойство неравенства'],
    ['Transitivity', 'Tranzitivlik', 'Транзитивность'],
    ['Reverse the sign', 'Ishorani almashtirish', 'Изменить знак на противоположный'],
    ['Both sides', 'Ikkala tomon', 'Обе части'],
    ['Multiply by', 'Ko‘paytirish', 'Умножить на'],
    ['Divide by', 'Bo‘lish', 'Разделить на'],
    ['Preserve', 'Saqlanadi', 'Сохраняется'],
    ['Equivalent inequality', 'Teng kuchli tengsizlik', 'Равносильное неравенство']
  ],
  timing: [[10, 'Warm-up'], [24, 'Explanation'], [16, 'Interactive'], [26, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'The four properties',
      html: `<div class="keybox"><div class="klabel">For any numbers a, b, c</div>
      <ol style="margin:0">
        <li><b>Transitivity.</b> If ${m('a > b')} and ${m('b > c')} then ${m('a > c')}.</li>
        <li><b>Adding.</b> If ${m('a > b')} then ${m('a + c > b + c')} — for <b>any</b> ${m('c')},
        positive or negative.</li>
        <li><b>Multiplying by a positive number.</b> If ${m('a > b')} and ${m('c > 0')} then
        ${m('ac > bc')}.</li>
        <li><b>Multiplying by a negative number.</b> If ${m('a > b')} and ${m('c < 0')} then
        ${m('ac < bc')} — <b>the sign reverses</b>.</li>
      </ol></div>
      <p>Property 2 is why you may move a term from one side to the other, changing its sign, exactly as
      in an equation. Property 4 is the one thing an inequality does that an equation does not.</p>`
    },
    {
      h: 'Why the sign reverses',
      html: `<p>Take ${m('3 > 2')}, which is certainly true, and multiply both sides by ${m('−1')}:</p>
      ${eq(m('−3') + ' &nbsp;and&nbsp; ' + m('−2'))}
      <p>On the number line ${m('−3')} sits to the <b>left</b> of ${m('−2')}, so ${m('−3 < −2')}. The
      order has turned round. Multiplying by a negative number reflects both numbers through 0, and
      reflection swaps left and right.</p>
      <div class="warn"><span class="wl">The rule that costs the most marks all year</span>
      From ${m('−2x > 6')} you get ${m('x < −3')}, not ${m('x > −3')}. Dividing by ${m('−2')} reverses
      the sign. Write the new sign <b>first</b>, then do the arithmetic.</div>`
    },
    {
      h: 'Two consequences worth knowing',
      html: `<ul>
        <li><b>Reciprocals.</b> If ${m('a > b > 0')} then ${m(f('1', 'a') + ' < ' + f('1', 'b'))}.
        Bigger denominator, smaller fraction.</li>
        <li><b>Squares.</b> If ${m('a > b > 0')} then ${m('a<sup>2</sup> > b<sup>2</sup>')}. But this
        needs both numbers positive: ${m('−5 > −7')} while ${m('25 < 49')}.</li>
      </ul>
      <div class="keybox"><div class="klabel">A quick test to build the habit</div>
      Before applying any step, ask: “am I multiplying or dividing by something negative?” If yes, the
      sign turns. If no, it stays.</div>`
    }
  ],
  examples: [
    {
      q: m('Given a > b, compare 3a − 5 and 3b − 5'),
      steps: [
        [m('a > b'), 'Given.'],
        [m('3a > 3b'), 'Multiply by 3, which is positive — sign unchanged.'],
        [m('3a − 5 > 3b − 5'), 'Subtract 5 from both sides — sign unchanged.']
      ],
      ans: m('3a − 5 > 3b − 5')
    },
    {
      q: m('Given a > b, compare −2a and −2b'),
      steps: [
        [m('a > b'), 'Given.'],
        ['Multiplying by ' + m('−2') + ', a negative number.', 'Property 4 applies.'],
        [m('−2a < −2b'), 'The sign reverses.']
      ],
      ans: m('−2a < −2b')
    },
    {
      q: m('Given 2 < x < 5, find the range of 3 − 2x'),
      steps: [
        [m('2 < x < 5'), 'Given.'],
        [m('−4 > −2x > −10'), 'Multiply throughout by ' + m('−2') + ' — both signs reverse.'],
        [m('−10 < −2x < −4'), 'Rewrite the smaller number on the left.'],
        [m('−7 < 3 − 2x < −1'), 'Add 3 throughout — signs unchanged.']
      ],
      ans: m('−7 < 3 − 2x < −1')
    }
  ],
  modelNote: 'Use the flip button to show that the same boundary gives two different solution sets.',
  interactive: { type: 'inequalityLine', title: 'Which side, and is the end included?' },
  quiz: [
    { q: 'From ' + m('a > b') + ' it follows that:', a: [m('a + 5 > b + 5'), m('a + 5 < b + 5'), m('a − 5 < b − 5'), 'nothing'], c: 0, why: 'Adding the same number to both sides never changes the sign.' },
    { q: 'From ' + m('a > b') + ' and ' + m('c < 0') + ' it follows that:', a: [m('ac > bc'), m('ac < bc'), m('ac = bc'), 'nothing'], c: 1, why: 'Multiplying by a negative number reverses the inequality.' },
    { q: m('−3x > 12') + ' gives:', a: [m('x > −4'), m('x < −4'), m('x > 4'), m('x < 4')], c: 1, why: 'Divide by −3 and reverse: x < −4.' },
    { q: 'If ' + m('a > b > 0') + ' then:', a: [m(f('1', 'a') + ' > ' + f('1', 'b')), m(f('1', 'a') + ' < ' + f('1', 'b')), m(f('1', 'a') + ' = ' + f('1', 'b')), 'it depends'], c: 1, why: 'A bigger positive denominator gives a smaller fraction.' }
  ],
  practice: {
    easy: [
      [m('a > b. Compare a + 4 and b + 4'), m('a + 4 > b + 4')],
      [m('a > b. Compare a − 7 and b − 7'), m('a − 7 > b − 7')],
      [m('a > b. Compare 5a and 5b'), m('5a > 5b')],
      [m('a > b. Compare −a and −b'), m('−a < −b')],
      [m('Solve −x > 3'), m('x < −3')],
      [m('Solve 2x > 8'), m('x > 4')],
      [m('Solve −2x ≥ 10'), m('x ≤ −5')]
    ],
    med: [
      [m('a > b. Compare 3a − 5 and 3b − 5'), m('3a − 5 > 3b − 5')],
      [m('a > b. Compare −2a + 1 and −2b + 1'), m('−2a + 1 < −2b + 1')],
      [m('a > b > 0. Compare ' + f('1', 'a') + ' and ' + f('1', 'b')), m(f('1', 'a') + ' < ' + f('1', 'b'))],
      [m('a > b > 0. Compare a<sup>2</sup> and b<sup>2</sup>'), m('a<sup>2</sup> > b<sup>2</sup>')],
      [m('Solve −4x + 3 < 11'), m('x > −2')],
      [m('2 < x < 5. Find the range of 2x + 1'), m('5 < 2x + 1 < 11')],
      [m('Solve ' + f('x', '−3') + ' > 2'), m('x < −6')]
    ],
    hard: [
      [m('2 < x < 5. Find the range of 3 − 2x'), m('−7 < 3 − 2x < −1')],
      [m('−1 < x < 4. Find the range of 5 − x'), m('1 < 5 − x < 6')],
      [m('a > b. Is it always true that a<sup>2</sup> > b<sup>2</sup>? Give a counter-example.'), 'No — ' + m('−5 > −7') + ' but ' + m('25 < 49') + '. It needs ' + m('a > b > 0') + '.'],
      [m('a > b and c > d. Prove a + c > b + d'), m('a + c > b + c') + ' and ' + m('b + c > b + d') + ', then transitivity.'],
      [m('3 < x < 7 and 1 < y < 2. Find the range of x − y'), m('1 < x − y < 6')],
      [m('a > b > 0. Compare ' + f('a', 'b') + ' and 1'), m(f('a', 'b') + ' > 1') + ' — divide ' + m('a > b') + ' by the positive number ' + m('b') + '.'],
      [m('Solve 5 − 3x ≤ 2x − 10'), m('15 ≤ 5x') + ', so ' + m('x ≥ 3')]
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, §12, pp. 71–74. Say out loud whether the sign turns before you write each line.',
  homework: [
    m('a > b. Compare 4a + 3 and 4b + 3'),
    m('a > b. Compare −5a and −5b'),
    m('Solve −3x + 2 > 14'),
    m('1 < x < 6. Find the range of 4 − x'),
    m('a > b > 0. Compare ' + f('2', 'a') + ' and ' + f('2', 'b')),
    m('Give a counter-example to “a > b implies a<sup>2</sup> > b<sup>2</sup>”')
  ]
});

/* ============================== 18 ============================== */
G8_ALG.push({
  id: 'alg-18', stream: 'alg', grade: 8, quarter: 2, lessons: '42–43', hours: 2,
  title: 'Adding and multiplying inequalities',
  subtitle: 'Two inequalities pointing the same way can be added — and, when everything is positive, multiplied.',
  uz: 'Algebra 8, §13', uzPage: '§13, pp. 75–79',
  cam: 'Stage 9 · beyond', camPage: 'Extension beyond Stage 9', wb: '—',
  objectives: [
    'Add two inequalities of the same direction.',
    'Multiply two inequalities of the same direction when all terms are positive.',
    'Estimate the range of a sum, difference, product or quotient.',
    'Explain why inequalities may not be subtracted or divided term by term.'
  ],
  terms: [
    ['Add inequalities', 'Tengsizliklarni qo‘shish', 'Сложение неравенств'],
    ['Multiply inequalities', 'Tengsizliklarni ko‘paytirish', 'Умножение неравенств'],
    ['Same direction', 'Bir xil yo‘nalish', 'Одинаковый знак'],
    ['Estimate', 'Baholash', 'Оценить'],
    ['Range', 'Oraliq', 'Промежуток'],
    ['Lower bound', 'Quyi chegara', 'Нижняя граница'],
    ['Upper bound', 'Yuqori chegara', 'Верхняя граница'],
    ['Term by term', 'Hadma-had', 'Почленно']
  ],
  timing: [[10, 'Warm-up'], [24, 'Explanation'], [16, 'Interactive'], [26, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'Adding',
      html: `<div class="keybox"><div class="klabel">Rule</div>
      If ${m('a > b')} and ${m('c > d')} then ${m('a + c > b + d')}.</div>
      <p>Inequalities pointing the <b>same way</b> may be added term by term. The proof is two steps of
      the last lesson: ${m('a + c > b + c')} (add ${m('c')}) and ${m('b + c > b + d')} (add ${m('b')}),
      then transitivity.</p>
      <div class="warn"><span class="wl">You may not subtract them</span>
      From ${m('5 > 3')} and ${m('10 > 1')} subtracting term by term would give ${m('−5 > 2')}, which is
      false. To handle a difference, reverse the second inequality first and then add:
      ${m('c > d')} becomes ${m('−c < −d')}.</div>`
    },
    {
      h: 'Multiplying',
      html: `<div class="keybox"><div class="klabel">Rule</div>
      If ${m('a > b > 0')} and ${m('c > d > 0')} then ${m('ac > bd')}.</div>
      <p>All four numbers must be <b>positive</b>. Drop that condition and the rule collapses:
      ${m('2 > −5')} and ${m('3 > −4')}, but ${m('6')} is not greater than ${m('20')}.</p>
      <p>Nor may you divide term by term — invert the second inequality and multiply instead.</p>`
    },
    {
      h: 'Estimating a range',
      html: `<p>This is what the rules are for. Given ${m('3 < a < 5')} and ${m('2 < b < 4')}:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Working</th><th>Range</th></tr></thead>
      <tbody>
        <tr><td>${m('a + b')}</td><td>add the two ranges</td><td>${m('5 < a + b < 9')}</td></tr>
        <tr><td>${m('a − b')}</td><td>reverse b: ${m('−4 < −b < −2')}, then add</td><td>${m('−1 < a − b < 3')}</td></tr>
        <tr><td>${m('ab')}</td><td>multiply (all positive)</td><td>${m('6 < ab < 20')}</td></tr>
        <tr><td>${m(f('a', 'b'))}</td><td>reverse b: ${m(f('1', '4') + ' < ' + f('1', 'b') + ' < ' + f('1', '2'))}, then multiply</td><td>${m(f('3', '4') + ' < ' + f('a', 'b') + ' < ' + f('5', '2'))}</td></tr>
      </tbody></table></div>
      <p>The pattern for a difference or a quotient is always the same: <b>turn the second range round
      first</b>, then use the rule you are allowed to use.</p>`
    }
  ],
  examples: [
    {
      q: m('Given 3 < a < 5 and 2 < b < 4, find the range of a + b'),
      steps: [
        [m('3 < a < 5'), 'First range.'],
        [m('2 < b < 4'), 'Second range, same direction.'],
        [m('3 + 2 < a + b < 5 + 4'), 'Add the ends.'],
        [m('5 < a + b < 9'), '']
      ],
      ans: m('5 < a + b < 9')
    },
    {
      q: m('Given 3 < a < 5 and 2 < b < 4, find the range of a − b'),
      steps: [
        [m('2 < b < 4'), 'Start from b.'],
        [m('−4 < −b < −2'), 'Multiply by ' + m('−1') + ' — both signs reverse.'],
        [m('3 − 4 < a − b < 5 − 2'), 'Now add.'],
        [m('−1 < a − b < 3'), '']
      ],
      ans: m('−1 < a − b < 3')
    },
    {
      q: m('Given 2 < x < 6 and 1 < y < 3, find the range of ' + f('x', 'y')),
      steps: [
        [m('1 < y < 3'), ''],
        [m(f('1', '3') + ' < ' + f('1', 'y') + ' < 1'), 'Take reciprocals — the direction reverses.'],
        [m('2 · ' + f('1', '3') + ' < ' + f('x', 'y') + ' < 6 · 1'), 'Multiply, all terms positive.'],
        [m(f('2', '3') + ' < ' + f('x', 'y') + ' < 6'), '']
      ],
      ans: m(f('2', '3') + ' < ' + f('x', 'y') + ' < 6')
    }
  ],
  modelNote: 'Set two boundaries and let the class predict the range of the sum before you show it.',
  interactive: {
    type: 'fractionCancel',
    title: 'Estimating a range',
    hint: 'Given two ranges, which rule applies — and does anything need reversing?',
    items: [
      {
        title: 'a + b, given 3 < a < 5 and 2 < b < 4',
        start: m('3 < a < 5') + ' and ' + m('2 < b < 4'),
        steps: [
          ['Both point the same way, so they may simply be added.', ''],
          [m('3 + 2 = 5') + ' and ' + m('5 + 4 = 9'), 'Add matching ends.'],
          [m('5 < a + b < 9'), '']
        ],
        answer: m('5 < a + b < 9')
      },
      {
        title: 'a − b, same ranges',
        start: m('3 < a < 5') + ' and ' + m('2 < b < 4'),
        steps: [
          ['A difference is not allowed directly — reverse b first.', ''],
          [m('−4 < −b < −2'), 'Multiply by ' + m('−1') + '; both ends swap and change sign.'],
          [m('3 − 4 < a − b < 5 − 2'), 'Now it is an addition.'],
          [m('−1 < a − b < 3'), 'Note the range can now include negatives.']
        ],
        answer: m('−1 < a − b < 3')
      },
      {
        title: 'ab, same ranges',
        start: m('3 < a < 5') + ' and ' + m('2 < b < 4'),
        steps: [
          ['All four numbers are positive, so multiplication is allowed.', 'Check this first, every time.'],
          [m('3 · 2 = 6') + ' and ' + m('5 · 4 = 20'), ''],
          [m('6 < ab < 20'), '']
        ],
        answer: m('6 < ab < 20')
      },
      {
        title: 'a / b, same ranges',
        start: m('3 < a < 5') + ' and ' + m('2 < b < 4'),
        steps: [
          ['A quotient is not allowed directly — take reciprocals of b.', ''],
          [m(f('1', '4') + ' < ' + f('1', 'b') + ' < ' + f('1', '2')), 'Reciprocals of positives reverse the direction.'],
          [m('3 · ' + f('1', '4') + ' < ' + f('a', 'b') + ' < 5 · ' + f('1', '2')), 'Now multiply.'],
          [m(f('3', '4') + ' < ' + f('a', 'b') + ' < ' + f('5', '2')), '']
        ],
        answer: m(f('3', '4') + ' < ' + f('a', 'b') + ' < ' + f('5', '2'))
      }
    ]
  },
  quiz: [
    { q: 'From ' + m('a > b') + ' and ' + m('c > d') + ' it follows that:', a: [m('a + c > b + d'), m('a − c > b − d'), m('ac > bd'), 'nothing'], c: 0, why: 'Adding is always allowed for inequalities of the same direction.' },
    { q: 'Multiplying two inequalities term by term needs:', a: ['nothing extra', 'all terms positive', 'all terms whole numbers', 'the same direction only'], c: 1, why: '2 > −5 and 3 > −4, yet 6 < 20.' },
    { q: 'If ' + m('2 < a < 6') + ' then ' + m('−a') + ' satisfies:', a: [m('−2 < −a < −6'), m('−6 < −a < −2'), m('2 < −a < 6'), m('−6 < −a < 6')], c: 1, why: 'Both ends change sign and swap places.' },
    { q: 'If ' + m('1 < b < 4') + ' then ' + m(f('1', 'b')) + ' satisfies:', a: [m(f('1', '4') + ' < ' + f('1', 'b') + ' < 1'), m('1 < ' + f('1', 'b') + ' < 4'), m(f('1', '4') + ' < ' + f('1', 'b') + ' < ' + f('1', '4')), 'it cannot be found'], c: 0, why: 'Reciprocals of positive numbers reverse the order.' }
  ],
  practice: {
    easy: [
      [m('1 < a < 3 and 2 < b < 5. Find the range of a + b'), m('3 < a + b < 8')],
      [m('0 < a < 2 and 1 < b < 4. Find the range of a + b'), m('1 < a + b < 6')],
      [m('2 < a < 4. Find the range of −a'), m('−4 < −a < −2')],
      [m('1 < a < 5. Find the range of 2a'), m('2 < 2a < 10')],
      [m('1 < a < 3 and 2 < b < 4. Find the range of ab'), m('2 < ab < 12')],
      [m('3 < a < 6. Find the range of a + 10'), m('13 < a + 10 < 16')],
      [m('May two inequalities of the same direction be added?'), 'Yes.']
    ],
    med: [
      [m('3 < a < 5 and 2 < b < 4. Find the range of a + b'), m('5 < a + b < 9')],
      [m('3 < a < 5 and 2 < b < 4. Find the range of a − b'), m('−1 < a − b < 3')],
      [m('3 < a < 5 and 2 < b < 4. Find the range of ab'), m('6 < ab < 20')],
      [m('1 < b < 4. Find the range of ' + f('1', 'b')), m(f('1', '4') + ' < ' + f('1', 'b') + ' < 1')],
      [m('2 < x < 6 and 1 < y < 3. Find the range of ' + f('x', 'y')), m(f('2', '3') + ' < ' + f('x', 'y') + ' < 6')],
      [m('Show that 5 > 3 and 10 > 1 cannot be subtracted term by term'), 'It would give ' + m('−5 > 2') + ', which is false.'],
      [m('1 < a < 2 and 3 < b < 5. Find the range of 2a + b'), m('5 < 2a + b < 9')]
    ],
    hard: [
      [m('2 < a < 4 and 1 < b < 3. Find the range of a<sup>2</sup> − b'), m('4 < a<sup>2</sup> < 16') + ' and ' + m('−3 < −b < −1') + ', so ' + m('1 < a<sup>2</sup> − b < 15')],
      [m('The sides of a rectangle satisfy 3 < a < 5 and 4 < b < 6. Estimate the perimeter.'), m('14 < P < 22')],
      [m('The same rectangle: estimate the area.'), m('12 < S < 30')],
      [m('Give a counter-example to “a > b and c > d implies ac > bd”.'), m('2 > −5') + ' and ' + m('3 > −4') + ', but ' + m('6 < 20') + '.'],
      [m('1 < x < 3. Find the range of ' + f('1', 'x + 1')), m('2 < x + 1 < 4') + ', so ' + m(f('1', '4') + ' < ' + f('1', 'x + 1') + ' < ' + f('1', '2'))],
      [m('2 < a < 3 and 4 < b < 5. Find the range of ' + f('b', 'a')), m(f('1', '3') + ' < ' + f('1', 'a') + ' < ' + f('1', '2')) + ', so ' + m(f('4', '3') + ' < ' + f('b', 'a') + ' < ' + f('5', '2'))],
      [m('0 < a < 1. Compare a<sup>2</sup> with a.'), m('a<sup>2</sup> < a') + ' — multiplying ' + m('a < 1') + ' by the positive number ' + m('a') + '.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Algebra 8, §13, pp. 75–79. Reverse the second range before any difference or quotient.',
  homework: [
    m('4 < a < 7 and 1 < b < 3. Find the range of a + b'),
    m('4 < a < 7 and 1 < b < 3. Find the range of a − b'),
    m('4 < a < 7 and 1 < b < 3. Find the range of ab'),
    m('4 < a < 7 and 1 < b < 3. Find the range of ' + f('a', 'b')),
    m('A rectangle has 2 < a < 4 and 5 < b < 7. Estimate its perimeter and its area.')
  ]
});

/* ============================== 19 ============================== */
G8_ALG.push({
  id: 'alg-19', stream: 'alg', grade: 8, quarter: 2, lessons: '44–46', hours: 3,
  title: 'Raising a numerical inequality to a power',
  subtitle: 'Squaring, cubing and taking roots — safe when both sides are positive, and full of traps when they are not.',
  uz: 'Algebra 8, §14', uzPage: '§14, pp. 80–84',
  cam: 'Stage 9 · beyond', camPage: 'Extension beyond Stage 9', wb: '—',
  objectives: [
    'Raise both sides of an inequality to a natural power correctly.',
    'Take roots of both sides of an inequality.',
    'Use these rules to estimate the range of a square or a root.',
    'Give counter-examples when the positivity condition is dropped.'
  ],
  terms: [
    ['Raise to a power', 'Darajaga ko‘tarish', 'Возведение в степень'],
    ['Take the root', 'Ildiz chiqarish', 'Извлечь корень'],
    ['Even power', 'Juft daraja', 'Чётная степень'],
    ['Odd power', 'Toq daraja', 'Нечётная степень'],
    ['Positive numbers', 'Musbat sonlar', 'Положительные числа'],
    ['Condition', 'Shart', 'Условие'],
    ['Counter-example', 'Qarshi misol', 'Контрпример'],
    ['Monotonic', 'Monoton', 'Монотонный']
  ],
  timing: [[15, 'Warm-up'], [36, 'Explanation'], [24, 'Interactive'], [39, 'Practice'], [6, 'Homework']],
  sections: [
    {
      h: 'The two rules',
      html: `<div class="keybox"><div class="klabel">For positive numbers</div>
      If ${m('a > b > 0')} and ${m('n')} is a natural number, then
      ${eq(m('a<sup>n</sup> > b<sup>n</sup>') + ' &nbsp;&nbsp;and&nbsp;&nbsp; ' +
           m(rt('n', 'a') + ' > ' + rt('n', 'b')))}</div>
      <p>Both operations preserve the order — as long as both sides are positive. Squaring
      ${m('5 > 3')} gives ${m('25 > 9')} ✓; taking square roots of ${m('16 > 9')} gives ${m('4 > 3')} ✓.</p>`
    },
    {
      h: 'What goes wrong without the condition',
      html: `<div class="warn"><span class="wl">An even power destroys the order</span>
      ${m('−2 > −5')} is true, but ${m('(−2)<sup>2</sup> = 4')} and ${m('(−5)<sup>2</sup> = 25')}, so
      ${m('4 < 25')}. Squaring turned the inequality round.</div>
      <p>The reason is that an even power throws away the sign. An <b>odd</b> power keeps it, so cubing
      is safe for all numbers: ${m('−2 > −5')} gives ${m('−8 > −125')} ✓.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Operation</th><th>Safe when</th><th>Example of failure</th></tr></thead>
      <tbody>
        <tr><td>square, 4th power…</td><td>both sides positive</td><td>${m('−2 > −5')} but ${m('4 < 25')}</td></tr>
        <tr><td>cube, 5th power…</td><td>always</td><td>—</td></tr>
        <tr><td>square root</td><td>both sides ≥ 0</td><td>root of a negative does not exist</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'Using the rules to estimate',
      html: `<p>Given ${m('3 < a < 5')}, all positive, so squaring is safe:</p>
      ${eq(m('9 < a<sup>2</sup> < 25'), true)}
      <p>But given ${m('−3 < a < 2')} you cannot square the ends. Think about what ${m('a<sup>2</sup>')}
      actually does on that interval: it is 0 at ${m('a = 0')} and largest at the end furthest from 0,
      which is ${m('−3')}. So ${m('0 ≤ a<sup>2</sup> < 9')}.</p>
      <div class="keybox"><div class="klabel">The habit to build</div>
      Before squaring an interval, ask whether it contains 0. If it does, the smallest value of
      ${m('a<sup>2</sup>')} is 0 — not the square of either end.</div>`
    }
  ],
  examples: [
    {
      q: m('Given 2 < a < 6, find the range of a<sup>2</sup>'),
      steps: [
        ['Both ends are positive, so squaring keeps the order.', 'Check this first.'],
        [m('2<sup>2</sup> = 4') + ' and ' + m('6<sup>2</sup> = 36'), ''],
        [m('4 < a<sup>2</sup> < 36'), '']
      ],
      ans: m('4 < a<sup>2</sup> < 36')
    },
    {
      q: m('Given −4 < a < 3, find the range of a<sup>2</sup>'),
      steps: [
        ['The interval contains 0, so the ends may not simply be squared.', ''],
        [m('a<sup>2</sup> = 0') + ' at ' + m('a = 0'), 'That is the smallest value.'],
        ['The end furthest from 0 is ' + m('−4') + ', giving ' + m('16') + '.', 'That is the largest — but not attained.'],
        [m('0 ≤ a<sup>2</sup> < 16'), 'Note the ≤ on the left.']
      ],
      ans: m('0 ≤ a<sup>2</sup> < 16')
    },
    {
      q: m('Given 4 < a < 9, find the range of ' + sr('a')),
      steps: [
        ['Both ends positive, so the root keeps the order.', ''],
        [m(sr('4') + ' = 2') + ' and ' + m(sr('9') + ' = 3'), ''],
        [m('2 < ' + sr('a') + ' < 3'), '']
      ],
      ans: m('2 < ' + sr('a') + ' < 3')
    }
  ],
  modelNote: 'Set the boundary either side of zero and ask what happens to the square of the interval.',
  interactive: { type: 'inequalityLine', title: 'Does the interval contain zero?' },
  quiz: [
    { q: 'From ' + m('a > b > 0') + ' it follows that:', a: [m('a<sup>2</sup> > b<sup>2</sup>'), m('a<sup>2</sup> < b<sup>2</sup>'), m('a<sup>2</sup> = b<sup>2</sup>'), 'nothing'], c: 0, why: 'Both sides positive, so an even power is safe.' },
    { q: m('−2 > −5') + '. Squaring gives:', a: [m('4 > 25'), m('4 < 25'), m('4 = 25'), 'the same inequality'], c: 1, why: 'An even power destroys the sign and can reverse the order.' },
    { q: 'Cubing an inequality is safe:', a: ['only for positives', 'for all numbers', 'never', 'only for whole numbers'], c: 1, why: 'An odd power keeps the sign, so the order survives.' },
    { q: 'If ' + m('−3 < a < 2') + ' then ' + m('a<sup>2</sup>') + ' satisfies:', a: [m('9 < a<sup>2</sup> < 4'), m('0 ≤ a<sup>2</sup> < 9'), m('4 < a<sup>2</sup> < 9'), m('−9 < a<sup>2</sup> < 4')], c: 1, why: 'The interval contains 0, so the smallest square is 0.' }
  ],
  practice: {
    easy: [
      [m('5 > 3. Square both sides.'), m('25 > 9')],
      [m('7 > 2. Cube both sides.'), m('343 > 8')],
      [m('16 > 9. Take square roots.'), m('4 > 3')],
      [m('1 < a < 4. Find the range of a<sup>2</sup>'), m('1 < a<sup>2</sup> < 16')],
      [m('9 < a < 25. Find the range of ' + sr('a')), m('3 < ' + sr('a') + ' < 5')],
      [m('Is squaring safe for a > b > 0?'), 'Yes.'],
      [m('Is cubing safe for negative numbers?'), 'Yes — an odd power keeps the sign.']
    ],
    med: [
      [m('2 < a < 6. Find the range of a<sup>2</sup>'), m('4 < a<sup>2</sup> < 36')],
      [m('4 < a < 9. Find the range of ' + sr('a')), m('2 < ' + sr('a') + ' < 3')],
      [m('1 < a < 2. Find the range of a<sup>3</sup>'), m('1 < a<sup>3</sup> < 8')],
      [m('−5 < a < −2. Find the range of a<sup>2</sup>'), m('4 < a<sup>2</sup> < 25')],
      [m('−5 < a < −2. Find the range of a<sup>3</sup>'), m('−125 < a<sup>3</sup> < −8')],
      [m('Show that −2 > −5 but (−2)<sup>2</sup> < (−5)<sup>2</sup>'), m('4 < 25') + ' — squaring reversed it.'],
      [m('3 < a < 4. Find the range of ' + f('1', 'a<sup>2</sup>')), m(f('1', '16') + ' < ' + f('1', 'a<sup>2</sup>') + ' < ' + f('1', '9'))]
    ],
    hard: [
      [m('−4 < a < 3. Find the range of a<sup>2</sup>'), m('0 ≤ a<sup>2</sup> < 16')],
      [m('−1 < a < 5. Find the range of a<sup>2</sup>'), m('0 ≤ a<sup>2</sup> < 25')],
      [m('2 < a < 3. Find the range of a<sup>2</sup> + a'), m('4 < a<sup>2</sup> < 9') + ', so ' + m('6 < a<sup>2</sup> + a < 12')],
      [m('The side of a square satisfies 4 < a < 6. Estimate its area and perimeter.'), m('16 < S < 36') + ', ' + m('16 < P < 24')],
      [m('Compare ' + sr('5') + ' and 2.3 without a calculator.'), m('2.3<sup>2</sup> = 5.29 > 5') + ', so ' + m(sr('5') + ' < 2.3')],
      [m('0 < a < 1. Compare a<sup>3</sup>, a<sup>2</sup> and a.'), m('a<sup>3</sup> < a<sup>2</sup> < a') + ' — each multiplication by ' + m('a < 1') + ' makes it smaller.'],
      [m('Given 1 < a < 4, find the range of ' + sr('a') + ' + a'), m('1 < ' + sr('a') + ' < 2') + ', so ' + m('2 < ' + sr('a') + ' + a < 6')]
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, §14, pp. 80–84. Check for zero inside the interval before squaring.',
  homework: [
    m('3 < a < 7. Find the range of a<sup>2</sup>'),
    m('1 < a < 8. Find the range of ' + rt('3', 'a')),
    m('−6 < a < 2. Find the range of a<sup>2</sup>'),
    m('−3 < a < −1. Find the range of a<sup>3</sup>'),
    m('Compare ' + sr('7') + ' and 2.6 without a calculator'),
    m('The side of a square satisfies 5 < a < 8. Estimate its area.')
  ]
});

/* ============================== 20 ============================== */
G8_ALG.push({
  id: 'alg-20', stream: 'alg', grade: 8, quarter: 2, lessons: '47–48', hours: 2,
  title: 'Control work 4 · Numerical inequalities',
  subtitle: 'The Chapter II assessment on properties, adding, multiplying and powers — and the mistakes lesson that follows.',
  uz: 'Algebra 8, §§11–14', uzPage: 'Revision of §§11–14',
  cam: 'Stage 9 · 4.3', camPage: 'Learner’s Book pp. 96–102', wb: 'Workbook 4.3',
  objectives: [
    'Assess the definition, the four properties, adding, multiplying and powers.',
    'Sort every lost mark into one of four error types.',
    'Re-solve every task that was lost.'
  ],
  timing: [[4, 'Setting up'], [72, 'The paper'], [4, 'Collect in']],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Work on mistakes', 'Xatolar ustida ishlash', 'Работа над ошибками'],
    ['Estimate a range', 'Oraliqni baholash', 'Оценить промежуток'],
    ['Reverse the sign', 'Ishorani almashtirish', 'Изменить знак неравенства'],
    ['Counter-example', 'Qarshi misol', 'Контрпример'],
    ['Prove', 'Isbotlash', 'Доказать'],
    ['Condition', 'Shart', 'Условие']
  ],
  sections: [
    {
      h: 'Lesson 47 — the paper (40 minutes)',
      html: `<p>Two variants of seven tasks, 2 marks each:</p>
      <ul>
        <li>task 1 · compare two numbers by the difference (§11)</li>
        <li>task 2 · a property applied to ${m('a > b')} (§12)</li>
        <li>task 3 · solve a one-step inequality with a negative coefficient (§12)</li>
        <li>tasks 4–5 · estimate a sum, difference, product or quotient (§13)</li>
        <li>task 6 · estimate a square or a root (§14)</li>
        <li>task 7 · prove an inequality using a square (§11)</li>
      </ul>`
    },
    {
      h: 'Lesson 48 — work on mistakes (40 minutes)',
      html: `<div class="keybox"><div class="klabel">The four errors this paper produces</div>
      <ol style="margin:0">
        <li><b>The sign not reversed</b> after dividing by a negative number.</li>
        <li><b>Inequalities subtracted or divided term by term.</b></li>
        <li><b>An interval containing zero squared end to end</b>, losing the value 0.</li>
        <li><b>The positivity condition ignored</b> when multiplying or squaring.</li>
      </ol></div>
      <p>The Hard set below is seven pieces of wrong working drawn from these four.</p>`
    }
  ],
  examples: [
    {
      q: 'Find the error: ' + m('−2x > 8, so x > −4'),
      steps: [
        ['Dividing by ' + m('−2') + ' — a negative number.', 'Property 4 applies.'],
        ['The sign must reverse.', ''],
        [m('x < −4'), 'Check: ' + m('x = −5') + ' gives ' + m('10 > 8') + ' ✓']
      ],
      ans: m('x < −4')
    },
    {
      q: 'Find the error: ' + m('−3 < a < 2, so 9 < a² < 4'),
      steps: [
        ['The written range is impossible — 9 is not less than 4.', 'That alone signals an error.'],
        ['The interval contains 0, so the ends may not be squared directly.', ''],
        [m('a<sup>2</sup> = 0') + ' at ' + m('a = 0') + '; the largest comes from ' + m('−3') + '.', ''],
        [m('0 ≤ a<sup>2</sup> < 9'), '']
      ],
      ans: m('0 ≤ a<sup>2</sup> < 9')
    }
  ],
  modelNote: 'Lesson 48: show each piece of wrong working, vote on the error type, then reveal.',
  interactive: {
    type: 'fractionCancel',
    title: 'Diagnose the error',
    hint: 'Which of the four errors is this?',
    items: [
      {
        title: 'Error 1 — the sign not reversed',
        start: '<b>Claimed:</b> ' + m('−2x > 8 ⟹ x > −4'),
        steps: [
          ['Dividing by ' + m('−2') + ' is dividing by a negative number.', ''],
          ['So the inequality sign turns: ' + m('x < −4') + '.', ''],
          ['Test ' + m('x = −5') + ': ' + m('−2(−5) = 10 > 8') + ' ✓, and ' + m('−5 < −4') + ' ✓.', 'The test settles it.']
        ],
        answer: m('x < −4')
      },
      {
        title: 'Error 2 — inequalities subtracted',
        start: '<b>Claimed:</b> from ' + m('5 > 3') + ' and ' + m('10 > 1') + ', ' + m('5 − 10 > 3 − 1'),
        steps: [
          ['That would say ' + m('−5 > 2') + ', which is false.', ''],
          ['Only <b>addition</b> works term by term.', ''],
          ['To handle a difference, reverse the second: ' + m('10 > 1') + ' becomes ' + m('−10 < −1') + '.', ''],
          ['Then add: ' + m('5 − 10 < 3 − 1') + ', i.e. ' + m('−5 < 2') + ' ✓.', '']
        ],
        answer: 'Reverse the second inequality, then add.'
      },
      {
        title: 'Error 3 — squaring across zero',
        start: '<b>Claimed:</b> ' + m('−3 < a < 2 ⟹ 9 < a<sup>2</sup> < 4'),
        steps: [
          ['The answer is self-contradictory — 9 is not below 4.', 'A useful alarm bell.'],
          ['The interval contains 0, where ' + m('a<sup>2</sup> = 0') + '.', 'That is the minimum.'],
          ['The maximum comes from the end furthest from 0, ' + m('a = −3') + '.', ''],
          [m('0 ≤ a<sup>2</sup> < 9'), '']
        ],
        answer: m('0 ≤ a<sup>2</sup> < 9')
      },
      {
        title: 'Error 4 — positivity ignored',
        start: '<b>Claimed:</b> from ' + m('2 > −5') + ' and ' + m('3 > −4') + ', ' + m('2 · 3 > (−5)(−4)'),
        steps: [
          ['Multiplying term by term needs <b>all four numbers positive</b>.', ''],
          ['Here two of them are negative.', ''],
          [m('6') + ' and ' + m('20') + ': in fact ' + m('6 < 20') + '.', 'The claim is false.']
        ],
        answer: 'The rule does not apply — all terms must be positive.'
      }
    ]
  },
  quiz: [
    { q: m('−5x ≥ 20') + ' gives:', a: [m('x ≥ −4'), m('x ≤ −4'), m('x ≥ 4'), m('x ≤ 4')], c: 1, why: 'Divide by −5 and reverse the sign.' },
    { q: 'From ' + m('a > b') + ' and ' + m('c > d') + ', which is guaranteed?', a: [m('a − c > b − d'), m('a + c > b + d'), m('ac > bd'), m(f('a', 'c') + ' > ' + f('b', 'd'))], c: 1, why: 'Only addition is unconditional.' },
    { q: 'If ' + m('−2 < a < 5') + ' then:', a: [m('4 < a<sup>2</sup> < 25'), m('0 ≤ a<sup>2</sup> < 25'), m('−4 < a<sup>2</sup> < 25'), m('0 < a<sup>2</sup> < 4')], c: 1, why: 'Zero is inside the interval, so the minimum square is 0.' },
    { q: 'To prove ' + m('a<sup>2</sup> + 1 ≥ 2a') + ' you should:', a: ['try a = 3', 'take the difference and factorise', 'divide both sides by a', 'square both sides'], c: 1, why: 'The difference is (a − 1)², which is never negative.' }
  ],
  practice: {
    easy: [
      [m('<b>Variant 1, task 1.</b> Compare ' + f('2', '5') + ' and ' + f('3', '8') + ' by the difference'), m(f('2', '5') + ' > ' + f('3', '8'))],
      [m('<b>Task 2.</b> a > b. Compare a + 6 and b + 6'), m('a + 6 > b + 6')],
      [m('<b>Task 3.</b> Solve −2x > 8'), m('x < −4')],
      [m('<b>Task 4.</b> 1 < a < 4 and 2 < b < 5. Find the range of a + b'), m('3 < a + b < 9')],
      [m('<b>Task 5.</b> Same ranges: find the range of ab'), m('2 < ab < 20')],
      [m('<b>Task 6.</b> 2 < a < 5. Find the range of a<sup>2</sup>'), m('4 < a<sup>2</sup> < 25')],
      [m('<b>Task 7.</b> Prove a<sup>2</sup> + 1 ≥ 2a'), 'The difference is ' + m('(a − 1)<sup>2</sup> ≥ 0') + '.']
    ],
    med: [
      [m('<b>Variant 2, task 1.</b> Compare ' + f('4', '7') + ' and ' + f('5', '9') + ' by the difference'), m(f('4', '7') + ' > ' + f('5', '9'))],
      [m('<b>Task 2.</b> a > b. Compare −3a and −3b'), m('−3a < −3b')],
      [m('<b>Task 3.</b> Solve −5x + 1 ≤ 11'), m('x ≥ −2')],
      [m('<b>Task 4.</b> 2 < a < 5 and 1 < b < 3. Find the range of a − b'), m('−1 < a − b < 4')],
      [m('<b>Task 5.</b> Same ranges: find the range of ' + f('a', 'b')), m(f('2', '3') + ' < ' + f('a', 'b') + ' < 5')],
      [m('<b>Task 6.</b> 9 < a < 36. Find the range of ' + sr('a')), m('3 < ' + sr('a') + ' < 6')],
      [m('<b>Task 7.</b> Prove a<sup>2</sup> + b<sup>2</sup> ≥ 2ab'), 'The difference is ' + m('(a − b)<sup>2</sup> ≥ 0') + '.']
    ],
    hard: [
      [m('Find the error: −2x > 8, so x > −4'), 'The sign was not reversed. Correct: ' + m('x < −4') + '.'],
      [m('Find the error: from 5 > 3 and 10 > 1, 5 − 10 > 3 − 1'), 'Inequalities cannot be subtracted. Reverse the second, then add.'],
      [m('Find the error: −3 < a < 2, so 9 < a<sup>2</sup> < 4'), 'The interval contains 0. Correct: ' + m('0 ≤ a<sup>2</sup> < 9') + '.'],
      [m('Find the error: from 2 > −5 and 3 > −4, 6 > 20'), 'Multiplication needs all terms positive; here ' + m('6 < 20') + '.'],
      [m('Find the error: a > b, so a<sup>2</sup> > b<sup>2</sup>'), 'Needs ' + m('a > b > 0') + '. Counter-example ' + m('−2 > −5') + ' but ' + m('4 < 25') + '.'],
      [m('Find the error: 1 < b < 4, so 1 < ' + f('1', 'b') + ' < 4'), 'Reciprocals reverse the order. Correct: ' + m(f('1', '4') + ' < ' + f('1', 'b') + ' < 1') + '.'],
      [m('Find the error: “a<sup>2</sup> ≥ 2a is true for all a because (a − 1)<sup>2</sup> ≥ 0”'), 'The difference of ' + m('a<sup>2</sup>') + ' and ' + m('2a') + ' is ' + m('a<sup>2</sup> − 2a = a(a − 2)') + ', not a square; the claim is false for ' + m('a = 1') + '.']
    ]
  },
  hwTitle: 'After the work-on-mistakes lesson',
  hwNote: 'Re-solve every task you lost marks on. Quarter III opens with inequalities in one unknown.',
  homework: [
    m('Solve −4x + 5 > 21'),
    m('3 < a < 8 and 2 < b < 4. Find the ranges of a + b, a − b, ab and ' + f('a', 'b')),
    m('−5 < a < 1. Find the range of a<sup>2</sup>'),
    'Write out the four errors from this lesson in your own words with an example each.'
  ]
});

/* ==================================================================
   QUARTER III · 30 hours
   Algebra 8, Chapter II §§15–19 and Chapter III (quadratic equations)
   ================================================================== */

/* ============================== 21 ============================== */
G8_ALG.push({
  id: 'alg-21', stream: 'alg', grade: 8, quarter: 3, lessons: '49–50', hours: 2,
  title: 'Inequalities with one unknown',
  subtitle: 'Solving an inequality is solving an equation with one extra rule — and an answer that is a whole interval, not a single number.',
  uz: 'Algebra 8, §15', uzPage: '§15, pp. 85–93',
  cam: 'Stage 9 · 4.3', camPage: 'Learner’s Book pp. 96–102', wb: 'Workbook 4.3',
  objectives: [
    'Solve a linear inequality in one unknown.',
    'Show the solution on a number line and write it as an interval.',
    'Reverse the sign when multiplying or dividing by a negative number.',
    'Recognise an inequality with no solutions or with every number as a solution.'
  ],
  terms: [
    ['Inequality with one unknown', 'Bir noma’lumli tengsizlik', 'Неравенство с одним неизвестным'],
    ['Solution of an inequality', 'Tengsizlikning yechimi', 'Решение неравенства'],
    ['Solution set', 'Yechimlar to‘plami', 'Множество решений'],
    ['Interval', 'Oraliq', 'Промежуток'],
    ['Number line', 'Sonlar o‘qi', 'Числовая прямая'],
    ['Equivalent inequalities', 'Teng kuchli tengsizliklar', 'Равносильные неравенства'],
    ['Reverse the sign', 'Ishorani almashtirish', 'Изменить знак неравенства'],
    ['No solutions', 'Yechimga ega emas', 'Нет решений'],
    ['Every number', 'Har qanday son', 'Любое число']
  ],
  timing: [[10, 'Warm-up'], [24, 'Explanation'], [16, 'Interactive'], [26, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'What a solution is',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      A <b>solution</b> of an inequality with one unknown is any value of the unknown that makes the
      inequality a true statement. To <b>solve</b> the inequality is to find <em>all</em> of them.</div>
      <p>An equation such as ${m('2x = 6')} has one answer. The inequality ${m('2x > 6')} has infinitely
      many — every number bigger than 3. So the answer is written as an <b>interval</b>, not a number.</p>`
    },
    {
      h: 'The method',
      html: `<p>Exactly the steps you use for an equation, with one addition:</p>
      <ol>
        <li>Clear fractions and open brackets.</li>
        <li>Collect the unknowns on one side, the numbers on the other.</li>
        <li>Divide by the coefficient of ${m('x')} — and if that coefficient is <b>negative</b>,
        <b>reverse the sign</b>.</li>
        <li>Draw the answer on a number line and write the interval.</li>
      </ol>
      ${eq(m('3x − 7 < x + 5') + ' ⟹ ' + m('2x < 12') + ' ⟹ ' + m('x < 6'), true)}
      <div class="warn"><span class="wl">The only real trap</span>
      From ${m('−4x ≥ 12')} you get ${m('x ≤ −3')}. Write the reversed sign <b>first</b>, then do the
      division — that way you cannot forget it.</div>`
    },
    {
      h: 'Drawing and writing the answer',
      html: `{{fig:numberLineInterval:An open circle for a strict inequality, a filled circle when the endpoint is included.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Inequality</th><th>On the line</th><th>Interval</th></tr></thead>
      <tbody>
        <tr><td>${m('x > 3')}</td><td>open circle at 3, shaded right</td><td>${m('(3; +∞)')}</td></tr>
        <tr><td>${m('x ≥ 3')}</td><td>filled circle at 3, shaded right</td><td>${m('[3; +∞)')}</td></tr>
        <tr><td>${m('x < 3')}</td><td>open circle at 3, shaded left</td><td>${m('(−∞; 3)')}</td></tr>
        <tr><td>${m('x ≤ 3')}</td><td>filled circle at 3, shaded left</td><td>${m('(−∞; 3]')}</td></tr>
      </tbody></table></div>
      <p>An infinity end is always written with a round bracket — you never reach it.</p>`
    },
    {
      h: 'Two special answers',
      html: `<p>Sometimes the unknown disappears. Then read what is left:</p>
      ${eq(m('2x + 5 > 2x + 1 ⟹ 5 > 1'))}
      <p>That is true whatever ${m('x')} is, so <b>every number</b> is a solution: the answer is
      ${m('(−∞; +∞)')}.</p>
      ${eq(m('3x + 2 < 3x − 4 ⟹ 2 < −4'))}
      <p>That is false whatever ${m('x')} is, so the inequality has <b>no solutions</b>.</p>`
    }
  ],
  examples: [
    {
      q: m('Solve 5x − 3 ≤ 2x + 9'),
      steps: [
        [m('5x − 2x ≤ 9 + 3'), 'Collect x on the left, numbers on the right.'],
        [m('3x ≤ 12'), ''],
        [m('x ≤ 4'), 'Dividing by 3, a positive number — the sign stays.'],
        [m('(−∞; 4]'), 'Filled circle at 4, shaded to the left.']
      ],
      ans: m('x ≤ 4') + ', that is ' + m('(−∞; 4]')
    },
    {
      q: m('Solve 4 − 3x > 19'),
      steps: [
        [m('−3x > 15'), 'Subtract 4 from both sides.'],
        ['Dividing by ' + m('−3') + ' — the sign must reverse.', 'Write the new sign first.'],
        [m('x < −5'), ''],
        [m('(−∞; −5)'), 'Open circle at −5.']
      ],
      ans: m('x < −5')
    },
    {
      q: m('Solve ' + f('x − 1', '2') + ' + ' + f('x', '3') + ' ≥ 1'),
      steps: [
        [m('multiply by 6'), 'The LCD of 2 and 3 — 6 is positive, so the sign stays.'],
        [m('3(x − 1) + 2x ≥ 6'), ''],
        [m('3x − 3 + 2x ≥ 6'), ''],
        [m('5x ≥ 9, so x ≥ 1.8'), '']
      ],
      ans: m('x ≥ 1.8') + ', that is ' + m('[1.8; +∞)')
    }
  ],
  modelNote: 'Move the boundary, flip the sign, and toggle strict — three controls cover every answer in this lesson.',
  interactive: { type: 'inequalityLine' },
  quiz: [
    { q: m('−2x > 10') + ' gives:', a: [m('x > −5'), m('x < −5'), m('x > 5'), m('x < 5')], c: 1, why: 'Divide by −2 and reverse the sign.' },
    { q: m('x ≥ 3') + ' as an interval is:', a: [m('(3; +∞)'), m('[3; +∞)'), m('(−∞; 3]'), m('[3; +∞]')], c: 1, why: 'The 3 is included, so a square bracket; infinity always takes a round one.' },
    { q: m('2x + 5 > 2x + 1') + ' has:', a: ['no solutions', 'one solution', 'every number as a solution', m('x > 0')], c: 2, why: 'The x cancels and 5 > 1 is always true.' },
    { q: m('3x + 2 < 3x − 4') + ' has:', a: ['no solutions', 'one solution', 'every number', m('x < 0')], c: 0, why: 'The x cancels and 2 < −4 is never true.' }
  ],
  practice: {
    easy: [
      [m('Solve 2x > 8'), m('x > 4')],
      [m('Solve x + 3 ≤ 7'), m('x ≤ 4')],
      [m('Solve x − 5 > 1'), m('x > 6')],
      [m('Solve −x < 2'), m('x > −2')],
      [m('Solve 3x ≥ −9'), m('x ≥ −3')],
      [m('Solve −2x ≥ 6'), m('x ≤ −3')],
      [m('Write x < 5 as an interval'), m('(−∞; 5)')]
    ],
    med: [
      [m('Solve 5x − 3 ≤ 2x + 9'), m('x ≤ 4')],
      [m('Solve 4 − 3x > 19'), m('x < −5')],
      [m('Solve 2(x − 1) < x + 4'), m('x < 6')],
      [m('Solve ' + f('x', '3') + ' + 2 ≥ 5'), m('x ≥ 9')],
      [m('Solve 7 − x ≤ 2x + 1'), m('x ≥ 2')],
      [m('Write x ≥ −4 as an interval'), m('[−4; +∞)')],
      [m('Solve −5x + 2 < 17'), m('x > −3')]
    ],
    hard: [
      [m('Solve ' + f('x − 1', '2') + ' + ' + f('x', '3') + ' ≥ 1'), m('x ≥ 1.8')],
      [m('Solve 3(2x − 1) − 2(x + 4) < 5'), m('6x − 3 − 2x − 8 < 5') + ', so ' + m('x < 4')],
      [m('Solve 2x + 5 > 2(x + 1)'), 'Every number — ' + m('5 > 2') + ' is always true.'],
      [m('Solve 3(x − 2) < 3x − 4'), m('3x − 6 < 3x − 4') + ' reduces to ' + m('−6 < −4') + ', which is always true — every number is a solution.'],
      [m('Find the smallest whole number satisfying 4x − 7 > 9'), m('x > 4') + ', so ' + m('x = 5')],
      [m('Find the largest whole number satisfying 5 − 2x ≥ −3'), m('x ≤ 4') + ', so ' + m('x = 4')],
      [m('For which x is ' + f('2x − 1', '3') + ' − ' + f('x', '2') + ' ≤ 0?'), 'Multiply by 6: ' + m('4x − 2 − 3x ≤ 0') + ', so ' + m('x ≤ 2') + '.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, §15, pp. 85–93. Draw the number line for every answer.',
  homework: [
    m('Solve 4x − 5 ≥ x + 7'),
    m('Solve 6 − 5x > 21'),
    m('Solve 3(x + 2) ≤ 2x + 10'),
    m('Solve ' + f('x', '4') + ' − 1 < 2'),
    m('Find the smallest whole number with 7x − 3 > 25'),
    m('Solve 2(x − 3) > 2x − 5 and explain your answer')
  ]
});

/* ============================== 22 ============================== */
G8_ALG.push({
  id: 'alg-22', stream: 'alg', grade: 8, quarter: 3, lessons: '51–52', hours: 2,
  title: 'Systems of inequalities. Number intervals',
  subtitle: 'Two conditions at once — the answer is where the two solution sets overlap.',
  uz: 'Algebra 8, §16', uzPage: '§16, pp. 94–104',
  cam: 'Stage 9 · 4.3', camPage: 'Learner’s Book pp. 96–102', wb: 'Workbook 4.3',
  objectives: [
    'Solve a system of two linear inequalities.',
    'Find the intersection of two intervals on the number line.',
    'Use the standard names and notation for intervals.',
    'Solve a double inequality such as ' + m('−2 < 3x + 1 ≤ 10') + '.'
  ],
  terms: [
    ['System of inequalities', 'Tengsizliklar sistemasi', 'Система неравенств'],
    ['Intersection', 'Kesishma', 'Пересечение'],
    ['Number interval', 'Sonli oraliq', 'Числовой промежуток'],
    ['Segment (closed interval)', 'Kesma', 'Отрезок'],
    ['Open interval', 'Ochiq oraliq', 'Интервал'],
    ['Half-open interval', 'Yarim ochiq oraliq', 'Полуинтервал'],
    ['Ray (half-line)', 'Nur', 'Луч'],
    ['Double inequality', 'Qo‘sh tengsizlik', 'Двойное неравенство'],
    ['Empty set', 'Bo‘sh to‘plam', 'Пустое множество']
  ],
  timing: [[10, 'Warm-up'], [24, 'Explanation'], [16, 'Interactive'], [26, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'The names of the intervals',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Condition</th><th>Notation</th><th>Name</th></tr></thead>
      <tbody>
        <tr><td>${m('a ≤ x ≤ b')}</td><td>${m('[a; b]')}</td><td>segment (closed interval)</td></tr>
        <tr><td>${m('a < x < b')}</td><td>${m('(a; b)')}</td><td>open interval</td></tr>
        <tr><td>${m('a ≤ x < b')}</td><td>${m('[a; b)')}</td><td>half-open interval</td></tr>
        <tr><td>${m('x ≥ a')}</td><td>${m('[a; +∞)')}</td><td>closed ray</td></tr>
        <tr><td>${m('x < a')}</td><td>${m('(−∞; a)')}</td><td>open ray</td></tr>
      </tbody></table></div>
      <p>Square bracket = the end belongs to the set (filled circle). Round bracket = it does not
      (open circle). Infinity is always round.</p>`
    },
    {
      h: 'Solving a system',
      html: `<div class="keybox"><div class="klabel">Method</div>
      <ol style="margin:0">
        <li>Solve each inequality on its own.</li>
        <li>Draw both solution sets on the <b>same</b> number line.</li>
        <li>The answer is the part shaded <b>twice</b> — the intersection.</li>
      </ol></div>
      {{fig:systemIntervals:Each inequality shades part of the line; the system is satisfied only where both shadings overlap.}}
      <p>The word to say in class is <b>“and”</b>. A system asks for the values satisfying the first
      inequality <em>and</em> the second, so only the overlap counts.</p>
      <div class="warn"><span class="wl">Sometimes there is no overlap</span>
      The system ${m('x > 5')} and ${m('x < 2')} has <b>no solutions</b> — the empty set. Say so; do not
      write a nonsense interval like ${m('(5; 2)')}.</div>`
    },
    {
      h: 'Double inequalities',
      html: `<p>${m('−2 < 3x + 1 ≤ 10')} is a system written compactly. Work on all three parts at once:</p>
      ${eq(m('−2 < 3x + 1 ≤ 10'))}
      ${eq(m('−3 < 3x ≤ 9') + '&nbsp;&nbsp;(subtract 1 throughout)')}
      ${eq(m('−1 < x ≤ 3') + '&nbsp;&nbsp;(divide by 3 throughout)')}
      <p>The answer is the half-open interval ${m('(−1; 3]')}.</p>
      <div class="warn"><span class="wl">If you divide by a negative</span>
      <b>Both</b> signs reverse and the two ends swap places, so rewrite the smaller number on the left.</div>`
    }
  ],
  examples: [
    {
      q: m('Solve the system: 2x − 1 > 3 and x + 4 < 9'),
      steps: [
        [m('2x > 4, so x > 2'), 'The first inequality.'],
        [m('x < 5'), 'The second.'],
        ['Draw both: shaded right of 2, and left of 5.', ''],
        [m('2 < x < 5'), 'The overlap.']
      ],
      ans: m('(2; 5)')
    },
    {
      q: m('Solve −2 < 3x + 1 ≤ 10'),
      steps: [
        [m('−3 < 3x ≤ 9'), 'Subtract 1 from all three parts.'],
        [m('−1 < x ≤ 3'), 'Divide all three by 3.'],
        [m('(−1; 3]'), 'Open at −1, closed at 3.']
      ],
      ans: m('(−1; 3]')
    },
    {
      q: m('Solve the system: x ≥ 4 and 2x < 6'),
      steps: [
        [m('x ≥ 4'), 'The first.'],
        [m('x < 3'), 'The second.'],
        ['Nothing is both at least 4 and less than 3.', ''],
        ['No solutions — the empty set.', '']
      ],
      ans: 'No solutions.'
    }
  ],
  modelNote: 'Set each boundary in turn and ask the class which part of the line survives both.',
  interactive: { type: 'inequalityLine', title: 'One inequality at a time' },
  quiz: [
    { q: m('[2; 7)') + ' means:', a: [m('2 < x < 7'), m('2 ≤ x < 7'), m('2 < x ≤ 7'), m('2 ≤ x ≤ 7')], c: 1, why: 'Square bracket includes, round bracket excludes.' },
    { q: 'The system ' + m('x > 1') + ' and ' + m('x < 6') + ' gives:', a: [m('(1; 6)'), m('(−∞; 6)'), m('(1; +∞)'), 'no solutions'], c: 0, why: 'The overlap of the two rays.' },
    { q: 'The system ' + m('x > 5') + ' and ' + m('x < 2') + ' gives:', a: [m('(2; 5)'), m('(5; 2)'), 'no solutions', 'every number'], c: 2, why: 'The two sets do not overlap.' },
    { q: m('−4 ≤ 2x < 6') + ' gives:', a: [m('[−2; 3)'), m('(−2; 3]'), m('[−4; 6)'), m('[−2; 3]')], c: 0, why: 'Divide throughout by 2, keeping each bracket type.' }
  ],
  practice: {
    easy: [
      [m('Write 3 ≤ x ≤ 8 as an interval'), m('[3; 8]')],
      [m('Write 0 < x < 5 as an interval'), m('(0; 5)')],
      [m('Write x ≥ 2 as an interval'), m('[2; +∞)')],
      [m('What does (−1; 4] mean?'), m('−1 < x ≤ 4')],
      [m('Solve the system x > 1 and x < 6'), m('(1; 6)')],
      [m('Solve the system x ≥ 0 and x ≤ 3'), m('[0; 3]')],
      [m('Solve the system x > 4 and x > 7'), m('(7; +∞)')]
    ],
    med: [
      [m('Solve: 2x − 1 > 3 and x + 4 < 9'), m('(2; 5)')],
      [m('Solve: 3x ≤ 12 and x + 1 > 0'), m('(−1; 4]')],
      [m('Solve −2 < 3x + 1 ≤ 10'), m('(−1; 3]')],
      [m('Solve −4 ≤ 2x < 6'), m('[−2; 3)')],
      [m('Solve: x ≥ 4 and 2x < 6'), 'No solutions.'],
      [m('Solve 1 ≤ x − 3 ≤ 5'), m('[4; 8]')],
      [m('Solve: 5 − x > 1 and x + 2 ≥ 0'), m('[−2; 4)')]
    ],
    hard: [
      [m('Solve −5 < 2 − 3x ≤ 8'), m('−7 < −3x ≤ 6') + ' ⟹ ' + m('−2 ≤ x < ' + f('7', '3'))],
      [m('Solve: 2(x − 1) ≥ x and 3x < x + 8'), m('x ≥ 2') + ' and ' + m('x < 4') + ': ' + m('[2; 4)')],
      [m('How many whole numbers satisfy −3 < 2x + 1 ≤ 9?'), m('−2 < x ≤ 4') + ': the numbers ' + m('−1, 0, 1, 2, 3, 4') + ' — six of them.'],
      [m('Solve: ' + f('x', '2') + ' > 1 and ' + f('x', '3') + ' < 2'), m('x > 2') + ' and ' + m('x < 6') + ': ' + m('(2; 6)')],
      [m('For which a does the system x > 3 and x < a have solutions?'), m('a > 3')],
      [m('Solve 0 ≤ ' + f('2x − 1', '3') + ' ≤ 3'), m('0 ≤ 2x − 1 ≤ 9') + ' ⟹ ' + m('[0.5; 5]')],
      [m('Find all whole numbers satisfying both 4x > 6 and 3x ≤ 15'), m('x > 1.5') + ' and ' + m('x ≤ 5') + ': ' + m('2, 3, 4, 5')]
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, §16, pp. 94–104. Draw both sets on one line before writing the answer.',
  homework: [
    m('Solve: 3x − 2 > 7 and x − 1 < 6'),
    m('Solve −6 ≤ 4x + 2 < 10'),
    m('Solve: x + 5 ≥ 2 and 2x ≤ 8'),
    m('Solve: x > 6 and x < 3, and explain the answer'),
    m('How many whole numbers satisfy −4 < 3x − 1 ≤ 11?'),
    m('Write [−3; 5) in words and draw it on a number line')
  ]
});

/* ============================== 23 ============================== */
G8_ALG.push({
  id: 'alg-23', stream: 'alg', grade: 8, quarter: 3, lessons: '53–54', hours: 2,
  title: 'The modulus of a number',
  subtitle: 'Distance from zero — one idea that turns every modulus equation and inequality into something you can already solve.',
  uz: 'Algebra 8, §17', uzPage: '§17, pp. 105–110',
  cam: 'Stage 9 · beyond', camPage: 'Extension beyond Stage 9', wb: '—',
  objectives: [
    'Define ' + m('| a |') + ' and evaluate it.',
    'Read ' + m('| x |') + ' as the distance from ' + m('x') + ' to 0 on the number line.',
    'Solve equations of the form ' + m('| x − a | = b') + '.',
    'Solve inequalities ' + m('| x | < b') + ' and ' + m('| x | > b') + '.'
  ],
  terms: [
    ['Modulus (absolute value)', 'Modul (absolyut qiymat)', 'Модуль (абсолютная величина)'],
    ['Distance from zero', 'Noldan uzoqlik', 'Расстояние от нуля'],
    ['Non-negative', 'Manfiy bo‘lmagan', 'Неотрицательный'],
    ['Two cases', 'Ikki hol', 'Два случая'],
    ['Opposite numbers', 'Qarama-qarshi sonlar', 'Противоположные числа'],
    ['Equation with a modulus', 'Modulli tenglama', 'Уравнение с модулем'],
    ['Inequality with a modulus', 'Modulli tengsizlik', 'Неравенство с модулем'],
    ['Solution set', 'Yechimlar to‘plami', 'Множество решений']
  ],
  timing: [[10, 'Warm-up'], [24, 'Explanation'], [16, 'Interactive'], [26, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'The definition',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      ${eq(m('| a | = a') + ' if ' + m('a ≥ 0') + ', &nbsp;&nbsp; ' + m('| a | = −a') + ' if ' + m('a < 0'))}</div>
      <p>So ${m('| 5 | = 5')}, ${m('| −5 | = 5')}, ${m('| 0 | = 0')}. The modulus is <b>never negative</b>.</p>
      <div class="warn"><span class="wl">−a is not a negative number</span>
      If ${m('a = −5')} then ${m('−a = 5')}. The second line of the definition <em>removes</em> the minus
      sign; it does not add one.</div>
      <p>Two facts worth stating at once: ${m('| a | ≥ 0')} always, and ${m('| a | = | −a |')} — opposite
      numbers have the same modulus.</p>`
    },
    {
      h: 'The picture: distance from zero',
      html: `<p>${m('| a |')} is the <b>distance</b> from the point ${m('a')} to the origin. That single
      sentence solves the whole topic.</p>
      {{fig:modulusLine:Every point within 3 of the origin satisfies | x | ≤ 3 — the segment from −3 to 3.}}
      <p>More generally, ${m('| x − a |')} is the distance from ${m('x')} to ${m('a')}. So
      ${m('| x − 4 | = 3')} asks: which points are exactly 3 away from 4? Answer: ${m('1')} and
      ${m('7')}.</p>`
    },
    {
      h: 'Equations',
      html: `<div class="keybox"><div class="klabel">Rule</div>
      For ${m('b > 0')}: &nbsp; ${m('| A | = b')} &nbsp;means&nbsp; ${m('A = b')} <b>or</b> ${m('A = −b')}.<br>
      ${m('| A | = 0')} means ${m('A = 0')}. &nbsp; ${m('| A | = b')} with ${m('b < 0')} has
      <b>no solutions</b>.</div>
      ${eq(m('| x − 4 | = 3 ⟹ x − 4 = 3 or x − 4 = −3 ⟹ x = 7 or x = 1'), true)}
      <p>Always check the sign of the right-hand side first. ${m('| x + 2 | = −5')} needs no working at
      all — a modulus cannot be negative.</p>`
    },
    {
      h: 'Inequalities',
      html: `<div class="keybox"><div class="klabel">Two shapes, two answers</div>
      ${eq(m('| x | < b') + ' &nbsp;means&nbsp; ' + m('−b < x < b') + ' &nbsp;— one interval, in the middle')}
      ${eq(m('| x | > b') + ' &nbsp;means&nbsp; ' + m('x < −b') + ' <b>or</b> ' + m('x > b') + ' &nbsp;— two rays, outside')}</div>
      <p>The picture makes it obvious: “less than ${m('b')} from zero” is the middle piece; “more than
      ${m('b')} from zero” is everything outside.</p>
      <p>Same with a shift: ${m('| x − 5 | ≤ 2')} means the distance from 5 is at most 2, so
      ${m('3 ≤ x ≤ 7')}.</p>`
    }
  ],
  examples: [
    {
      q: m('Solve | 2x − 1 | = 7'),
      steps: [
        [m('2x − 1 = 7') + ' or ' + m('2x − 1 = −7'), 'Two cases.'],
        [m('2x = 8, so x = 4'), 'First case.'],
        [m('2x = −6, so x = −3'), 'Second case.'],
        [m('check: | 7 | = 7 ✓ and | −7 | = 7 ✓'), '']
      ],
      ans: m('x = 4') + ' or ' + m('x = −3')
    },
    {
      q: m('Solve | x − 3 | < 5'),
      steps: [
        ['The distance from 3 is less than 5.', 'Read it as distance.'],
        [m('−5 < x − 3 < 5'), 'The middle-piece form.'],
        [m('−2 < x < 8'), 'Add 3 throughout.']
      ],
      ans: m('(−2; 8)')
    },
    {
      q: m('Solve | x + 1 | ≥ 4'),
      steps: [
        ['The distance from ' + m('−1') + ' is at least 4.', 'This is the “outside” shape.'],
        [m('x + 1 ≤ −4') + ' or ' + m('x + 1 ≥ 4'), 'Two rays.'],
        [m('x ≤ −5') + ' or ' + m('x ≥ 3'), '']
      ],
      ans: m('(−∞; −5] ∪ [3; +∞)')
    }
  ],
  modelNote: 'Set the boundary at 3 and switch between < and > — the two answer shapes appear side by side.',
  interactive: { type: 'inequalityLine', title: 'Inside or outside?' },
  quiz: [
    { q: m('| −7 |') + ' equals:', a: [m('−7'), m('7'), m('0'), m('±7')], c: 1, why: 'The modulus is the distance from 0, never negative.' },
    { q: m('| x | = 5') + ' gives:', a: [m('x = 5'), m('x = −5'), m('x = 5 or x = −5'), 'no solutions'], c: 2, why: 'Two points lie 5 away from zero.' },
    { q: m('| x | < 4') + ' means:', a: [m('x < 4'), m('−4 < x < 4'), m('x > 4'), m('x < −4 or x > 4')], c: 1, why: 'Less than 4 from zero is the middle piece.' },
    { q: m('| x + 2 | = −3') + ' has:', a: ['one solution', 'two solutions', 'no solutions', 'every number'], c: 2, why: 'A modulus can never equal a negative number.' }
  ],
  practice: {
    easy: [
      [m('Find | 9 |'), m('9')],
      [m('Find | −9 |'), m('9')],
      [m('Find | 0 |'), m('0')],
      [m('Find | −3 | + | 4 |'), m('7')],
      [m('Solve | x | = 6'), m('x = 6') + ' or ' + m('x = −6')],
      [m('Solve | x | = 0'), m('x = 0')],
      [m('Solve | x | < 2'), m('−2 < x < 2')]
    ],
    med: [
      [m('Solve | x − 4 | = 3'), m('x = 7') + ' or ' + m('x = 1')],
      [m('Solve | 2x − 1 | = 7'), m('x = 4') + ' or ' + m('x = −3')],
      [m('Solve | x + 2 | = 5'), m('x = 3') + ' or ' + m('x = −7')],
      [m('Solve | x − 3 | < 5'), m('(−2; 8)')],
      [m('Solve | x | ≥ 3'), m('x ≤ −3') + ' or ' + m('x ≥ 3')],
      [m('Solve | x + 1 | ≥ 4'), m('x ≤ −5') + ' or ' + m('x ≥ 3')],
      [m('Solve | x + 2 | = −5'), 'No solutions.']
    ],
    hard: [
      [m('Solve | 3x + 6 | = 12'), m('x = 2') + ' or ' + m('x = −6')],
      [m('Solve | x − 5 | ≤ 2'), m('[3; 7]')],
      [m('Solve | 2x − 3 | < 5'), m('−1 < x < 4')],
      [m('Solve | 1 − x | = 4'), m('x = −3') + ' or ' + m('x = 5')],
      [m('How many whole numbers satisfy | x | ≤ 4?'), 'Nine: ' + m('−4') + ' to ' + m('4') + '.'],
      [m('Solve | x − 2 | > 0'), 'Every ' + m('x') + ' except ' + m('x = 2') + '.'],
      [m('Find the distance between the points x = −3 and x = 8 using a modulus'), m('| 8 − (−3) | = 11')]
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, §17, pp. 105–110. Draw the number line for the inequalities.',
  homework: [
    m('Find | −12 |, | 12 | and | −12 | − | 5 |'),
    m('Solve | x − 6 | = 4'),
    m('Solve | 3x + 1 | = 10'),
    m('Solve | x | ≤ 7'),
    m('Solve | x − 1 | > 3'),
    m('Explain why | x + 3 | = −2 has no solutions')
  ]
});

/* ============================== 24 ============================== */
G8_ALG.push({
  id: 'alg-24', stream: 'alg', grade: 8, quarter: 3, lessons: '55–57', hours: 3,
  title: 'Approximate values and error',
  subtitle: 'Every measurement is approximate — this lesson says by how much, and how to write it honestly.',
  uz: 'Algebra 8, §§18–19', uzPage: '§18 pp. 111–113, §19 pp. 114–117',
  cam: 'Stage 9 · 3.4', camPage: 'Learner’s Book pp. 74–81', wb: 'Workbook 3.4',
  objectives: [
    'Distinguish an exact value from an approximate one.',
    'Calculate the absolute error and the relative error.',
    'Round to a given number of decimal places or significant figures.',
    'Say which of two measurements is the more accurate.'
  ],
  terms: [
    ['Exact value', 'Aniq qiymat', 'Точное значение'],
    ['Approximate value', 'Taqribiy qiymat', 'Приближённое значение'],
    ['Absolute error', 'Absolyut xatolik', 'Абсолютная погрешность'],
    ['Relative error', 'Nisbiy xatolik', 'Относительная погрешность'],
    ['Round', 'Yaxlitlash', 'Округление'],
    ['Decimal place', 'O‘nli xona', 'Десятичный знак'],
    ['Significant figures', 'Ahamiyatli raqamlar', 'Значащие цифры'],
    ['Accuracy', 'Aniqlik', 'Точность'],
    ['Measurement', 'O‘lchash', 'Измерение']
  ],
  timing: [[15, 'Warm-up'], [36, 'Explanation'], [24, 'Interactive'], [39, 'Practice'], [6, 'Homework']],
  sections: [
    {
      h: 'Exact and approximate',
      html: `<p>A count is exact: there are exactly 27 learners in the class. A measurement is not: a
      table is “1.2 m long” only to the accuracy of the tape. Every measured number is an
      <b>approximate value</b> of some exact value we shall never know.</p>
      <div class="keybox"><div class="klabel">Definition</div>
      If ${m('a')} is the exact value and ${m('x')} an approximation of it, the
      <b>absolute error</b> is ${m('Δ = | a − x |')}.</div>
      <p>We rarely know ${m('Δ')} exactly — we know a <b>bound</b> for it. Writing
      ${m('x = 4.8 ± 0.05')} says the true value lies between ${m('4.75')} and ${m('4.85')}.</p>
      {{fig:errorBounds:A measurement of 4.8 rounded to one decimal place: the true value lies anywhere in the bar.}}`
    },
    {
      h: 'Relative error',
      html: `<p>An error of 1 cm matters enormously on a pencil and not at all on a road. What decides is
      the error <b>compared with the size</b> of the thing measured.</p>
      <div class="keybox"><div class="klabel">Definition</div>
      ${eq(m('relative error = ' + f('Δ', '| x |')) + ', usually written as a percentage')}</div>
      <p>1 cm on a 20 cm pencil is ${m(f('1', '20') + ' = 5%')}; 1 cm on a 1000 cm road is
      ${m('0.1%')}. The second measurement is a hundred times more accurate, even though the absolute
      error is the same.</p>
      <div class="keybox"><div class="klabel">To compare two measurements</div>
      Compare the <b>relative</b> errors. The smaller relative error is the more accurate measurement.</div>`
    },
    {
      h: 'Rounding',
      html: `<p><b>To a decimal place.</b> Look at the first digit you are dropping: 5 or more, round up;
      less than 5, leave it. ${m('3.147 → 3.15')} to 2 d.p.</p>
      <p><b>To significant figures.</b> Count from the first non-zero digit.
      ${m('0.004736 → 0.0047')} to 2 s.f.; ${m('52 800 → 53 000')} to 2 s.f.</p>
      <div class="keybox"><div class="klabel">The error a rounding creates</div>
      Rounding to the nearest ${m('0.1')} gives an absolute error of at most ${m('0.05')} — half the
      last unit. To the nearest whole number, at most ${m('0.5')}.</div>
      <div class="warn"><span class="wl">Round once, at the end</span>
      Rounding part-way through a calculation and then again at the end makes the error grow. Keep the
      full figures until the last line.</div>`
    }
  ],
  examples: [
    {
      q: m('The exact value is a = 3.14159 and the approximation is x = 3.14. Find both errors.'),
      steps: [
        [m('Δ = | 3.14159 − 3.14 | = 0.00159'), 'Absolute error.'],
        [m(f('0.00159', '3.14') + ' ≈ 0.00051'), 'Divide by the approximation.'],
        [m('≈ 0.05%'), 'As a percentage.']
      ],
      ans: m('Δ ≈ 0.0016') + ', relative error ' + m('≈ 0.05%')
    },
    {
      q: 'A length is measured as 4.8 m to one decimal place. Between which values does the true length lie?',
      steps: [
        ['One decimal place means the nearest ' + m('0.1') + '.', ''],
        ['The error is at most half of that: ' + m('0.05') + '.', ''],
        [m('4.8 − 0.05 = 4.75') + ' and ' + m('4.8 + 0.05 = 4.85'), ''],
        [m('4.75 ≤ length < 4.85'), 'The lower bound is included, the upper is not.']
      ],
      ans: m('4.75 m ≤ ℓ < 4.85 m')
    },
    {
      q: 'Which is more accurate: 12 cm measured to the nearest cm, or 250 cm measured to the nearest cm?',
      steps: [
        ['Both have the same absolute error, at most ' + m('0.5 cm') + '.', ''],
        [m(f('0.5', '12') + ' ≈ 4.2%'), 'First relative error.'],
        [m(f('0.5', '250') + ' = 0.2%'), 'Second relative error.'],
        ['The second is far more accurate.', 'The same error on a bigger quantity matters less.']
      ],
      ans: 'The 250 cm measurement.'
    }
  ],
  modelNote: 'Ask for a bound before any calculation — “the answer is somewhere between …”.',
  interactive: {
    type: 'fractionCancel',
    title: 'Errors and rounding',
    hint: 'Pick a task, then reveal the steps.',
    items: [
      {
        title: 'Absolute and relative error',
        start: 'Exact ' + m('a = 3.14159') + ', approximation ' + m('x = 3.14') + '.',
        steps: [
          [m('Δ = | a − x | = 0.00159'), 'Absolute error — just the difference, without a sign.'],
          [m(f('Δ', 'x') + ' = ' + f('0.00159', '3.14') + ' ≈ 0.00051'), 'Relative error.'],
          [m('≈ 0.05%'), 'Multiply by 100 to state it as a percentage.']
        ],
        answer: m('Δ ≈ 0.0016') + ', relative error ' + m('≈ 0.05%')
      },
      {
        title: 'Bounds from a rounded measurement',
        start: 'A length reads ' + m('4.8 m') + ' to one decimal place.',
        steps: [
          ['One decimal place = the nearest ' + m('0.1 m') + '.', ''],
          ['So the true value is within ' + m('0.05 m') + '.', 'Half of the last unit.'],
          [m('4.75 ≤ ℓ < 4.85'), 'Lower bound included, upper bound not.']
        ],
        answer: m('4.75 m ≤ ℓ < 4.85 m')
      },
      {
        title: 'Which measurement is better?',
        start: m('12 cm') + ' and ' + m('250 cm') + ', both to the nearest cm.',
        steps: [
          ['Absolute error is ' + m('0.5 cm') + ' for both.', 'So absolute error cannot decide it.'],
          [m(f('0.5', '12') + ' ≈ 4.2%'), ''],
          [m(f('0.5', '250') + ' = 0.2%'), ''],
          ['The smaller relative error wins.', '']
        ],
        answer: 'The ' + m('250 cm') + ' measurement is about 20 times more accurate.'
      },
      {
        title: 'Rounding to significant figures',
        start: m('0.004736') + ' to 2 significant figures.',
        steps: [
          ['Significant figures start at the first non-zero digit — here the 4.', 'The leading zeros do not count.'],
          ['Two figures: ' + m('4') + ' and ' + m('7') + '; the next digit is ' + m('3') + '.', ''],
          [m('3 < 5') + ', so leave the 7 alone.', ''],
          [m('0.0047'), '']
        ],
        answer: m('0.0047')
      }
    ]
  },
  quiz: [
    { q: 'The absolute error of an approximation is:', a: [m('a − x'), m('| a − x |'), m(f('a', 'x')), m('a + x')], c: 1, why: 'A distance, so it has no sign.' },
    { q: 'A length rounded to 4.8 m (1 d.p.) lies between:', a: [m('4.7') + ' and ' + m('4.9'), m('4.75') + ' and ' + m('4.85'), m('4.79') + ' and ' + m('4.81'), m('4.8') + ' exactly'], c: 1, why: 'The error is at most half of 0.1.' },
    { q: m('0.004736') + ' to 2 s.f. is:', a: [m('0.00'), m('0.0047'), m('0.0048'), m('0.004')], c: 1, why: 'Count from the 4; the next digit is 3, so round down.' },
    { q: 'To compare the accuracy of two measurements you use:', a: ['the absolute error', 'the relative error', 'the larger value', 'the number of digits'], c: 1, why: 'The same absolute error means very different things at different sizes.' }
  ],
  practice: {
    easy: [
      [m('Round 3.847 to 1 d.p.'), m('3.8')],
      [m('Round 3.847 to 2 d.p.'), m('3.85')],
      [m('Round 5629 to 2 s.f.'), m('5600')],
      [m('Round 0.00382 to 2 s.f.'), m('0.0038')],
      [m('Exact 7, approximation 6.9. Find the absolute error.'), m('0.1')],
      [m('Exact 50, approximation 49. Find the absolute error.'), m('1')],
      [m('A length is 6 m to the nearest metre. Find the largest possible error.'), m('0.5 m')]
    ],
    med: [
      [m('Exact 3.14159, approximation 3.14. Find the absolute error.'), m('≈ 0.0016')],
      [m('The same numbers: find the relative error as a percentage.'), m('≈ 0.05%')],
      [m('A length reads 4.8 m to 1 d.p. Give the bounds.'), m('4.75 ≤ ℓ < 4.85')],
      [m('A mass reads 250 g to the nearest 10 g. Give the bounds.'), m('245 ≤ m < 255')],
      [m('Exact 20, approximation 19.5. Find the relative error.'), m('2.5%')],
      [m('Which is more accurate: 12 cm or 250 cm, both to the nearest cm?'), m('250 cm') + ' — relative error ' + m('0.2%') + ' against ' + m('4.2%') + '.'],
      [m('Round 0.0004736 to 3 s.f.'), m('0.000474')]
    ],
    hard: [
      [m('A rectangle is 4.2 m by 3.5 m, both to 1 d.p. Find the bounds of its perimeter.'), m('4.15 ≤ a < 4.25') + ', ' + m('3.45 ≤ b < 3.55') + ', so ' + m('15.2 ≤ P < 15.6')],
      [m('The same rectangle: find the bounds of its area.'), m('14.3175 ≤ S < 15.0875')],
      [m('A measurement has absolute error at most 0.02 and relative error 0.5%. Estimate the value.'), m(f('0.02', 'x') + ' = 0.005') + ', so ' + m('x = 4')],
      [m('Two masses: 3.5 kg ± 0.05 and 480 g ± 5 g. Which is more accurate?'), m('1.43%') + ' against ' + m('1.04%') + ' — the 480 g measurement.'],
      [m('Explain why rounding twice can be worse than rounding once.'), 'Each rounding adds its own error, and the errors accumulate: ' + m('2.46 → 2.5 → 3') + ' but ' + m('2.46 → 2') + ' directly.'],
      [m('A number rounds to 7.30 to 2 d.p. Give its bounds.'), m('7.295 ≤ x < 7.305')],
      [m('A speed of 60 km/h is measured to the nearest 5 km/h. Find the relative error at most.'), m(f('2.5', '60') + ' ≈ 4.2%')]
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, §§18–19, pp. 111–117.',
  homework: [
    m('Round 2.7182 to 1, 2 and 3 decimal places.'),
    m('Round 34 782 to 2 and to 3 significant figures.'),
    m('Exact 8, approximation 7.6. Find the absolute and relative errors.'),
    m('A length reads 12.3 cm to 1 d.p. Give the bounds.'),
    m('Which is more accurate: 5 m to the nearest metre, or 500 m to the nearest metre?'),
    m('A square has side 6.4 cm to 1 d.p. Find the bounds of its perimeter.')
  ]
});

/* ============================== 25 ============================== */
G8_ALG.push({
  id: 'alg-25', stream: 'alg', grade: 8, quarter: 3, lessons: '58–59', hours: 2,
  title: 'Upper and lower bounds',
  subtitle: 'The national revision and practical lessons, carrying the Cambridge Stage 9 treatment of bounds in calculations.',
  uz: 'Algebra 8, Chapter II revision', uzPage: 'pp. 118–121',
  cam: 'Stage 9 · 3.4  [Cambridge insert]', camPage: 'Learner’s Book pp. 76–81', wb: 'Workbook 3.4',
  objectives: [
    'Write the upper and lower bound of a rounded measurement.',
    'Find the bounds of a sum and of a difference.',
    'Find the bounds of a product and of a quotient.',
    'Decide how many figures an answer may honestly be given to.'
  ],
  terms: [
    ['Upper bound', 'Yuqori chegara', 'Верхняя граница'],
    ['Lower bound', 'Quyi chegara', 'Нижняя граница'],
    ['Rounded to', 'Yaxlitlangan', 'Округлено до'],
    ['Nearest', 'Eng yaqin', 'Ближайший'],
    ['Half a unit', 'Birlikning yarmi', 'Половина единицы'],
    ['Sum', 'Yig‘indi', 'Сумма'],
    ['Difference', 'Ayirma', 'Разность'],
    ['Product', 'Ko‘paytma', 'Произведение'],
    ['Quotient', 'Bo‘linma', 'Частное']
  ],
  timing: [[10, 'Warm-up'], [24, 'Explanation'], [16, 'Interactive'], [26, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'The bounds of a rounded number',
      html: `<div class="keybox"><div class="klabel">Rule</div>
      A value rounded to the nearest ${m('u')} lies within ${m(f('u', '2'))} of the stated figure:
      ${eq(m('x − ' + f('u', '2') + ' ≤ true value < x + ' + f('u', '2')))}</div>
      <div class="tablewrap"><table>
      <thead><tr><th>Stated</th><th>Rounded to</th><th>Lower bound</th><th>Upper bound</th></tr></thead>
      <tbody>
        <tr><td>${m('7 cm')}</td><td>nearest cm</td><td>${m('6.5')}</td><td>${m('7.5')}</td></tr>
        <tr><td>${m('4.8 m')}</td><td>1 d.p.</td><td>${m('4.75')}</td><td>${m('4.85')}</td></tr>
        <tr><td>${m('250 g')}</td><td>nearest 10 g</td><td>${m('245')}</td><td>${m('255')}</td></tr>
        <tr><td>${m('3.60 s')}</td><td>2 d.p.</td><td>${m('3.595')}</td><td>${m('3.605')}</td></tr>
      </tbody></table></div>
      <p>The lower bound is reached; the upper bound is not. That is why it is written with ${m('≤')} on
      the left and ${m('<')} on the right.</p>`
    },
    {
      h: 'Bounds of a sum, difference, product, quotient',
      html: `<div class="keybox"><div class="klabel">Which bound with which</div>
      <div class="tablewrap" style="margin-top:8px"><table>
      <thead><tr><th></th><th>Largest answer</th><th>Smallest answer</th></tr></thead>
      <tbody>
        <tr><td>${m('a + b')}</td><td>${m('UB(a) + UB(b)')}</td><td>${m('LB(a) + LB(b)')}</td></tr>
        <tr><td>${m('a − b')}</td><td>${m('UB(a) − LB(b)')}</td><td>${m('LB(a) − UB(b)')}</td></tr>
        <tr><td>${m('a × b')}</td><td>${m('UB(a) × UB(b)')}</td><td>${m('LB(a) × LB(b)')}</td></tr>
        <tr><td>${m('a ÷ b')}</td><td>${m('UB(a) ÷ LB(b)')}</td><td>${m('LB(a) ÷ UB(b)')}</td></tr>
      </tbody></table></div>
      (for positive quantities)</div>
      <p>The pattern is worth saying aloud: for a <b>sum</b> or a <b>product</b>, both go the same way;
      for a <b>difference</b> or a <b>quotient</b>, they go opposite ways — to make a difference as large
      as possible, take the most you can and subtract the least you can.</p>`
    },
    {
      h: 'How many figures may the answer have?',
      html: `<p>Work out both bounds, then keep only the digits on which they agree.</p>
      <p>If the bounds of an area come out as ${m('14.3175')} and ${m('15.0875')}, the two do not even
      agree on the units digit — so the honest answer is “about 15”, not ${m('14.7 m²')}. Reporting more
      figures than the bounds support is the commonest fault in practical work.</p>`
    }
  ],
  examples: [
    {
      q: 'A rectangle measures 4.2 m by 3.5 m, each to 1 d.p. Find the bounds of the perimeter.',
      steps: [
        [m('4.15 ≤ a < 4.25') + ' and ' + m('3.45 ≤ b < 3.55'), 'Half of 0.1 either way.'],
        [m('P = 2(a + b)'), ''],
        [m('LB = 2(4.15 + 3.45) = 15.2'), 'Both lower bounds.'],
        [m('UB = 2(4.25 + 3.55) = 15.6'), 'Both upper bounds.']
      ],
      ans: m('15.2 m ≤ P < 15.6 m')
    },
    {
      q: 'The same rectangle: find the bounds of the area.',
      steps: [
        [m('LB = 4.15 × 3.45 = 14.3175'), 'Both lower bounds.'],
        [m('UB = 4.25 × 3.55 = 15.0875'), 'Both upper bounds.'],
        ['The bounds disagree already in the units digit.', ''],
        ['So the area is “about 15 m²” — one significant figure is all that is justified.', '']
      ],
      ans: m('14.32 m² ≤ S < 15.09 m²') + ', so ' + m('≈ 15 m²')
    },
    {
      q: 'A car travels 120 km (to the nearest km) in 2.0 hours (to 1 d.p.). Find the greatest possible average speed.',
      steps: [
        [m('119.5 ≤ d < 120.5'), 'Distance bounds.'],
        [m('1.95 ≤ t < 2.05'), 'Time bounds.'],
        ['For the greatest speed: most distance, least time.', 'A quotient — opposite bounds.'],
        [m('v < ' + f('120.5', '1.95') + ' ≈ 61.8 km/h'), '']
      ],
      ans: m('≈ 61.8 km/h')
    }
  ],
  modelNote: 'Ask for the two extreme cases before any arithmetic — the rule then writes itself.',
  interactive: {
    type: 'fractionCancel',
    title: 'Which bound goes with which?',
    hint: 'Decide before revealing — largest answer, or smallest?',
    items: [
      {
        title: 'Largest possible sum',
        start: m('a = 7 ± 0.5') + ', ' + m('b = 4 ± 0.5') + '. Largest ' + m('a + b') + '?',
        steps: [
          ['A sum grows when either part grows.', 'So both go up.'],
          [m('UB(a) = 7.5') + ', ' + m('UB(b) = 4.5'), ''],
          [m('a + b < 12'), '']
        ],
        answer: m('a + b < 12')
      },
      {
        title: 'Largest possible difference',
        start: 'Same numbers. Largest ' + m('a − b') + '?',
        steps: [
          ['To make a difference big: take as much as possible, subtract as little as possible.', ''],
          [m('UB(a) = 7.5') + ', ' + m('LB(b) = 3.5'), 'Opposite bounds.'],
          [m('a − b < 4'), '']
        ],
        answer: m('a − b < 4')
      },
      {
        title: 'Smallest possible product',
        start: m('a = 4.2 ± 0.05') + ', ' + m('b = 3.5 ± 0.05') + '. Smallest ' + m('ab') + '?',
        steps: [
          ['A product of positives grows when either factor grows.', 'So both go down.'],
          [m('LB(a) = 4.15') + ', ' + m('LB(b) = 3.45'), ''],
          [m('ab ≥ 14.3175'), '']
        ],
        answer: m('ab ≥ 14.3175')
      },
      {
        title: 'Largest possible speed',
        start: m('d = 120 ± 0.5 km') + ', ' + m('t = 2.0 ± 0.05 h') + '. Largest ' + m('v = d ÷ t') + '?',
        steps: [
          ['A quotient grows when the top grows or the bottom shrinks.', 'Opposite bounds.'],
          [m('UB(d) = 120.5') + ', ' + m('LB(t) = 1.95'), ''],
          [m('v < ' + f('120.5', '1.95') + ' ≈ 61.8'), '']
        ],
        answer: m('v < 61.8 km/h')
      }
    ]
  },
  quiz: [
    { q: m('7 cm') + ' to the nearest cm has bounds:', a: [m('6.9') + ' and ' + m('7.1'), m('6.5') + ' and ' + m('7.5'), m('6') + ' and ' + m('8'), m('6.95') + ' and ' + m('7.05')], c: 1, why: 'Half a unit either side.' },
    { q: 'For the largest value of ' + m('a − b') + ' you take:', a: ['both upper bounds', 'both lower bounds', 'UB(a) and LB(b)', 'LB(a) and UB(b)'], c: 2, why: 'Take as much as possible, subtract as little as possible.' },
    { q: 'For the largest value of ' + m('a ÷ b') + ' you take:', a: ['UB(a) ÷ UB(b)', 'UB(a) ÷ LB(b)', 'LB(a) ÷ LB(b)', 'LB(a) ÷ UB(b)'], c: 1, why: 'Biggest top, smallest bottom.' },
    { q: m('250 g') + ' to the nearest 10 g has lower bound:', a: [m('249.5'), m('245'), m('240'), m('249')], c: 1, why: 'Half of 10 is 5.' }
  ],
  practice: {
    easy: [
      [m('9 cm to the nearest cm. Give the bounds.'), m('8.5 ≤ ℓ < 9.5')],
      [m('3.2 m to 1 d.p. Give the bounds.'), m('3.15 ≤ ℓ < 3.25')],
      [m('80 kg to the nearest 10 kg. Give the bounds.'), m('75 ≤ m < 85')],
      [m('2.50 s to 2 d.p. Give the bounds.'), m('2.495 ≤ t < 2.505')],
      [m('a = 5 ± 0.5, b = 3 ± 0.5. Largest a + b.'), m('9')],
      [m('Same values: smallest a + b.'), m('7')],
      [m('600 m to the nearest 100 m. Give the bounds.'), m('550 ≤ d < 650')]
    ],
    med: [
      [m('a = 7 ± 0.5, b = 4 ± 0.5. Largest a − b.'), m('4')],
      [m('Same values: smallest a − b.'), m('2')],
      [m('A rectangle 4.2 m by 3.5 m (1 d.p.). Bounds of the perimeter.'), m('15.2 ≤ P < 15.6')],
      [m('The same rectangle: bounds of the area.'), m('14.3175 ≤ S < 15.0875')],
      [m('d = 120 km ± 0.5, t = 2.0 h ± 0.05. Largest speed.'), m('≈ 61.8 km/h')],
      [m('The same values: smallest speed.'), m('≈ 58.3 km/h')],
      [m('A square has side 8 cm to the nearest cm. Bounds of the area.'), m('56.25 ≤ S < 72.25')]
    ],
    hard: [
      [m('A cube has edge 5 cm to the nearest cm. Bounds of its volume.'), m('91.125 ≤ V < 166.375')],
      [m('To how many significant figures may that volume be given?'), 'None safely — the bounds do not even share the first digit; report “between 91 and 167 cm³”.'],
      [m('a = 12.4 ± 0.05, b = 3.1 ± 0.05. Bounds of ' + f('a', 'b')), m(f('12.35', '3.15') + ' ≈ 3.92') + ' to ' + m(f('12.45', '3.05') + ' ≈ 4.08')],
      [m('A triangle has base 9 cm and height 6 cm, both to the nearest cm. Bounds of its area.'), m('½ · 8.5 · 5.5 = 23.375') + ' to ' + m('½ · 9.5 · 6.5 = 30.875')],
      [m('A runner covers 400 m (nearest m) in 52 s (nearest s). Bounds of the average speed.'), m(f('399.5', '52.5') + ' ≈ 7.61') + ' to ' + m(f('400.5', '51.5') + ' ≈ 7.78 m/s')],
      [m('Explain why the upper bound uses < and the lower bound uses ≤.'), 'A value exactly on the lower bound rounds up to the stated figure; one exactly on the upper bound rounds up to the next figure instead.'],
      [m('Two lengths are 5.0 cm and 5.00 cm. Which is stated more precisely, and why?'), m('5.00 cm') + ' — it claims the nearest ' + m('0.01') + ', so bounds ' + m('4.995') + ' to ' + m('5.005') + ', ten times tighter.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, pp. 118–121, and Cambridge Learner’s Book 3.4.',
  homework: [
    m('15 cm to the nearest cm. Give the bounds.'),
    m('6.70 kg to 2 d.p. Give the bounds.'),
    m('a = 20 ± 0.5, b = 8 ± 0.5. Find the bounds of a − b.'),
    m('A rectangle is 7.5 cm by 4.2 cm, both to 1 d.p. Find the bounds of the area.'),
    m('A car covers 250 km (nearest km) in 4.0 h (1 d.p.). Find the bounds of the average speed.'),
    m('A square has side 12 cm to the nearest cm. Find the bounds of the perimeter.')
  ]
});

/* ============================== 26 ============================== */
G8_ALG.push({
  id: 'alg-26', stream: 'alg', grade: 8, quarter: 3, lessons: '60–61', hours: 2,
  title: 'Control work 5 · Inequalities, modulus and accuracy',
  subtitle: 'The Chapter II assessment, then a work-on-mistakes lesson sorted by error type.',
  uz: 'Algebra 8, §§15–19', uzPage: 'Revision of §§15–19',
  cam: 'Stage 9 · 3.4, 4.3', camPage: 'Learner’s Book pp. 74–81, 96–102', wb: 'Workbook 3.4, 4.3',
  objectives: [
    'Assess inequalities in one unknown, systems, modulus, error and bounds.',
    'Sort every lost mark into one of four error types.',
    'Re-solve every task that was lost.'
  ],
  timing: [[4, 'Setting up'], [72, 'The paper'], [4, 'Collect in']],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Work on mistakes', 'Xatolar ustida ishlash', 'Работа над ошибками'],
    ['Solution set', 'Yechimlar to‘plami', 'Множество решений'],
    ['Interval', 'Oraliq', 'Промежуток'],
    ['Modulus', 'Modul', 'Модуль'],
    ['Bound', 'Chegara', 'Граница'],
    ['Error', 'Xato', 'Ошибка']
  ],
  sections: [
    {
      h: 'Lesson 60 — the paper (40 minutes)',
      html: `<p>Two variants of seven tasks, 2 marks each:</p>
      <ul>
        <li>tasks 1–2 · solve a linear inequality, one with a negative coefficient (§15)</li>
        <li>task 3 · solve a system and write the interval (§16)</li>
        <li>task 4 · a double inequality (§16)</li>
        <li>task 5 · a modulus equation (§17)</li>
        <li>task 6 · a modulus inequality (§17)</li>
        <li>task 7 · bounds or relative error (§§18–19)</li>
      </ul>`
    },
    {
      h: 'Lesson 61 — work on mistakes (40 minutes)',
      html: `<div class="keybox"><div class="klabel">The four errors this paper produces</div>
      <ol style="margin:0">
        <li><b>The sign not reversed</b> after dividing by a negative number.</li>
        <li><b>Only one case taken</b> for a modulus equation — the negative case forgotten.</li>
        <li><b>The two modulus inequality shapes confused</b> — writing two rays where one interval
        belongs, or the reverse.</li>
        <li><b>Bracket types mixed up</b> when writing an interval, or ${m('∞')} given a square bracket.</li>
      </ol></div>`
    }
  ],
  examples: [
    {
      q: 'Find the error: ' + m('| x − 2 | = 5, so x = 7'),
      steps: [
        ['Only the positive case was taken.', 'This is error 2.'],
        [m('x − 2 = 5') + ' or ' + m('x − 2 = −5'), 'Both cases.'],
        [m('x = 7') + ' or ' + m('x = −3'), '']
      ],
      ans: m('x = 7') + ' or ' + m('x = −3')
    },
    {
      q: 'Find the error: ' + m('| x | > 3, so −3 < x < 3'),
      steps: [
        ['That is the answer for ' + m('| x | < 3') + ', not for ' + m('>') + '.', 'The two shapes are swapped.'],
        ['“More than 3 from zero” is everything <b>outside</b>.', ''],
        [m('x < −3') + ' or ' + m('x > 3'), '']
      ],
      ans: m('(−∞; −3) ∪ (3; +∞)')
    }
  ],
  modelNote: 'Show the wrong working, take a vote on the error type, then reveal.',
  interactive: {
    type: 'fractionCancel',
    title: 'Diagnose the error',
    hint: 'Which of the four errors is this?',
    items: [
      {
        title: 'Error 1 — sign not reversed',
        start: '<b>Claimed:</b> ' + m('−3x < 12 ⟹ x < −4'),
        steps: [
          ['Dividing by ' + m('−3') + ' — a negative number.', ''],
          ['The sign turns: ' + m('x > −4') + '.', ''],
          ['Test ' + m('x = 0') + ': ' + m('0 < 12') + ' ✓, and ' + m('0 > −4') + ' ✓.', 'One test settles it.']
        ],
        answer: m('x > −4')
      },
      {
        title: 'Error 2 — one case only',
        start: '<b>Claimed:</b> ' + m('| x − 2 | = 5 ⟹ x = 7'),
        steps: [
          ['A modulus equation always has two cases when the right side is positive.', ''],
          [m('x − 2 = 5') + ' gives ' + m('x = 7') + '.', ''],
          [m('x − 2 = −5') + ' gives ' + m('x = −3') + '.', 'Check: ' + m('| −5 | = 5') + ' ✓']
        ],
        answer: m('x = 7') + ' or ' + m('x = −3')
      },
      {
        title: 'Error 3 — the wrong shape',
        start: '<b>Claimed:</b> ' + m('| x | > 3 ⟹ −3 < x < 3'),
        steps: [
          ['“Less than 3 from zero” is the middle piece.', 'That is ' + m('| x | < 3') + '.'],
          ['“More than 3 from zero” is everything outside.', ''],
          [m('x < −3') + ' or ' + m('x > 3'), 'Two rays, not one interval.']
        ],
        answer: m('(−∞; −3) ∪ (3; +∞)')
      },
      {
        title: 'Error 4 — bracket types',
        start: '<b>Claimed:</b> ' + m('x ≥ 2') + ' is written ' + m('(2; +∞]'),
        steps: [
          [m('2') + ' is included, so it needs a square bracket.', ''],
          ['Infinity is never reached, so it always takes a round bracket.', ''],
          [m('[2; +∞)'), '']
        ],
        answer: m('[2; +∞)')
      }
    ]
  },
  quiz: [
    { q: m('−3x < 12') + ' gives:', a: [m('x < −4'), m('x > −4'), m('x < 4'), m('x > 4')], c: 1, why: 'Divide by −3 and reverse.' },
    { q: m('| x − 2 | = 5') + ' gives:', a: [m('x = 7'), m('x = −3'), m('x = 7 or x = −3'), 'no solutions'], c: 2, why: 'Both cases must be taken.' },
    { q: m('| x | > 3') + ' gives:', a: [m('−3 < x < 3'), m('x < −3 or x > 3'), m('x > 3'), m('x < 3')], c: 1, why: 'More than 3 from zero is the outside.' },
    { q: m('x ≥ 2') + ' as an interval is:', a: [m('(2; +∞)'), m('[2; +∞)'), m('(2; +∞]'), m('[2; +∞]')], c: 1, why: 'Square where included, round at infinity.' }
  ],
  practice: {
    easy: [
      [m('<b>Variant 1, task 1.</b> Solve 4x − 5 > 7'), m('x > 3')],
      [m('<b>Task 2.</b> Solve −2x + 1 ≥ 9'), m('x ≤ −4')],
      [m('<b>Task 3.</b> Solve: x > 2 and x ≤ 6'), m('(2; 6]')],
      [m('<b>Task 4.</b> Solve −3 < 2x + 1 ≤ 7'), m('(−2; 3]')],
      [m('<b>Task 5.</b> Solve | x − 1 | = 4'), m('x = 5') + ' or ' + m('x = −3')],
      [m('<b>Task 6.</b> Solve | x | ≤ 5'), m('[−5; 5]')],
      [m('<b>Task 7.</b> 8 m to the nearest metre. Give the bounds.'), m('7.5 ≤ ℓ < 8.5')]
    ],
    med: [
      [m('<b>Variant 2, task 1.</b> Solve 5x + 2 ≤ 17'), m('x ≤ 3')],
      [m('<b>Task 2.</b> Solve 3 − 4x > 15'), m('x < −3')],
      [m('<b>Task 3.</b> Solve: x ≥ −1 and x < 4'), m('[−1; 4)')],
      [m('<b>Task 4.</b> Solve −6 ≤ 3x < 9'), m('[−2; 3)')],
      [m('<b>Task 5.</b> Solve | 2x + 1 | = 9'), m('x = 4') + ' or ' + m('x = −5')],
      [m('<b>Task 6.</b> Solve | x − 2 | > 3'), m('x < −1') + ' or ' + m('x > 5')],
      [m('<b>Task 7.</b> Exact 40, approximation 39. Find the relative error.'), m('2.5%')]
    ],
    hard: [
      [m('Find the error: −3x < 12, so x < −4'), 'The sign was not reversed. Correct: ' + m('x > −4') + '.'],
      [m('Find the error: | x − 2 | = 5, so x = 7'), 'Only one case. Correct: ' + m('x = 7') + ' or ' + m('x = −3') + '.'],
      [m('Find the error: | x | > 3, so −3 < x < 3'), 'The shapes are swapped. Correct: ' + m('x < −3') + ' or ' + m('x > 3') + '.'],
      [m('Find the error: x ≥ 2 written as (2; +∞]'), 'Correct: ' + m('[2; +∞)') + '.'],
      [m('Find the error: | x + 4 | = −1, so x = −5 or x = −3'), 'A modulus is never negative — there are no solutions.'],
      [m('Find the error: “7 cm to the nearest cm lies between 6.9 and 7.1”'), 'The bounds are ' + m('6.5') + ' and ' + m('7.5') + ' — half a unit, not a tenth.'],
      [m('Find the error: “x > 5 and x < 2 gives (5; 2)”'), 'The sets do not overlap; there are no solutions.']
    ]
  },
  hwTitle: 'After the work-on-mistakes lesson',
  hwNote: 'Re-solve every task you lost marks on. Quadratic equations begin next lesson.',
  homework: [
    m('Solve −5x + 3 ≥ 18'),
    m('Solve | 3x − 2 | = 10'),
    m('Solve | x + 1 | < 6'),
    m('A length reads 9.4 cm to 1 d.p. Give the bounds.'),
    'Write out the four errors from this lesson in your own words with an example each.'
  ]
});

/* ============================== 27 ============================== */
G8_ALG.push({
  id: 'alg-27', stream: 'alg', grade: 8, quarter: 3, lessons: '62–63', hours: 2,
  title: 'The quadratic equation and its roots',
  subtitle: 'The first equation of the course whose graph is not a line — and the first that can have two answers, one, or none at all.',
  uz: 'Algebra 8, Chapter III §20', uzPage: 'Chapter III, pp. 122–128',
  cam: 'Stage 9 · beyond', camPage: 'Extension beyond Stage 9', wb: '—',
  objectives: [
    'Recognise a quadratic equation and name its coefficients.',
    'Check whether a given number is a root.',
    'Solve a quadratic by factorising.',
    'Read the number of roots off the graph.'
  ],
  terms: [
    ['Quadratic equation', 'Kvadrat tenglama', 'Квадратное уравнение'],
    ['Root of an equation', 'Tenglamaning ildizi', 'Корень уравнения'],
    ['Coefficient', 'Koeffitsiyent', 'Коэффициент'],
    ['Leading coefficient', 'Bosh koeffitsiyent', 'Старший коэффициент'],
    ['Free term (constant)', 'Ozod had', 'Свободный член'],
    ['Factorise', 'Ko‘paytuvchilarga ajratish', 'Разложить на множители'],
    ['Zero product rule', 'Ko‘paytmaning nolga tengligi', 'Произведение равно нулю'],
    ['Parabola', 'Parabola', 'Парабола'],
    ['Substitute and check', 'O‘rniga qo‘yib tekshirish', 'Подставить и проверить']
  ],
  timing: [[10, 'Warm-up'], [24, 'Explanation'], [16, 'Interactive'], [26, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'What a quadratic equation is',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      An equation of the form
      ${eq(m('ax<sup>2</sup> + bx + c = 0') + ',&nbsp;&nbsp; ' + m('a ≠ 0'))}
      is a <b>quadratic equation</b>. Here ${m('a')} is the <b>leading coefficient</b>, ${m('b')} the
      second coefficient and ${m('c')} the <b>free term</b>.</div>
      <p>The condition ${m('a ≠ 0')} matters: without it the ${m('x<sup>2</sup>')} disappears and the
      equation is linear.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Equation</th><th>a</th><th>b</th><th>c</th></tr></thead>
      <tbody>
        <tr><td>${m('x<sup>2</sup> − 5x + 6 = 0')}</td><td>1</td><td>−5</td><td>6</td></tr>
        <tr><td>${m('3x<sup>2</sup> + 2x − 8 = 0')}</td><td>3</td><td>2</td><td>−8</td></tr>
        <tr><td>${m('2x<sup>2</sup> − 7 = 0')}</td><td>2</td><td>0</td><td>−7</td></tr>
        <tr><td>${m('x<sup>2</sup> + 4x = 0')}</td><td>1</td><td>4</td><td>0</td></tr>
      </tbody></table></div>
      <p>Write the equation in this standard order <b>before</b> reading off the coefficients — and mind
      the signs: in ${m('x<sup>2</sup> − 5x + 6')} the coefficient ${m('b')} is ${m('−5')}, not ${m('5')}.</p>`
    },
    {
      h: 'Roots',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      A <b>root</b> of the equation is a value of ${m('x')} that makes it true.</div>
      <p>To check, substitute. Is ${m('3')} a root of ${m('x<sup>2</sup> − 5x + 6 = 0')}?
      ${m('9 − 15 + 6 = 0')} ✓ — yes.</p>
      <p>Graphically, the roots are where the parabola ${m('y = ax<sup>2</sup> + bx + c')} crosses the
      ${m('x')}-axis.</p>
      {{fig:parabola:The graph of y = x² − 2x − 3 crosses the x-axis at −1 and 3 — the two roots of x² − 2x − 3 = 0.}}
      <p>A parabola can cross the axis twice, touch it once, or miss it entirely — so a quadratic
      equation has <b>two roots, one root, or none</b>. That is the single biggest difference from the
      linear equations of Grade 7.</p>`
    },
    {
      h: 'Solving by factorising',
      html: `<div class="keybox"><div class="klabel">The zero product rule</div>
      If ${m('A · B = 0')} then ${m('A = 0')} or ${m('B = 0')}. Nothing else can happen — this is the
      only reason factorising solves equations.</div>
      <p>So write the quadratic as a product equal to zero, then set each bracket to zero in turn:</p>
      ${eq(m('x<sup>2</sup> − 5x + 6 = 0'))}
      ${eq(m('(x − 2)(x − 3) = 0'))}
      ${eq(m('x − 2 = 0 or x − 3 = 0 ⟹ x = 2 or x = 3'))}
      <p>To factorise ${m('x<sup>2</sup> + px + q')}, find two numbers with <b>product ${m('q')}</b> and
      <b>sum ${m('p')}</b>. For ${m('x<sup>2</sup> − 5x + 6')}: product 6, sum ${m('−5')} → ${m('−2')} and
      ${m('−3')}.</p>
      <div class="warn"><span class="wl">The rule needs a zero on the right</span>
      From ${m('(x − 1)(x − 4) = 6')} you may <b>not</b> write ${m('x − 1 = 6')}. Expand, move everything
      to one side, and factorise again.</div>`
    }
  ],
  examples: [
    {
      q: m('Solve x<sup>2</sup> − 7x + 12 = 0'),
      steps: [
        ['Two numbers with product 12 and sum ' + m('−7') + '.', 'Both negative, since the product is positive and the sum negative.'],
        [m('−3') + ' and ' + m('−4'), ''],
        [m('(x − 3)(x − 4) = 0'), ''],
        [m('x = 3') + ' or ' + m('x = 4'), 'Check: ' + m('9 − 21 + 12 = 0') + ' ✓']
      ],
      ans: m('x = 3, x = 4')
    },
    {
      q: m('Solve x<sup>2</sup> + 2x − 15 = 0'),
      steps: [
        ['Product ' + m('−15') + ', sum ' + m('2') + '.', 'Opposite signs, since the product is negative.'],
        [m('5') + ' and ' + m('−3'), ''],
        [m('(x + 5)(x − 3) = 0'), ''],
        [m('x = −5') + ' or ' + m('x = 3'), '']
      ],
      ans: m('x = −5, x = 3')
    },
    {
      q: m('Is x = −2 a root of 2x<sup>2</sup> + 3x − 2 = 0?'),
      steps: [
        [m('2(−2)<sup>2</sup> + 3(−2) − 2'), 'Substitute.'],
        [m('= 8 − 6 − 2'), 'Mind the sign: ' + m('(−2)<sup>2</sup> = 4') + ', not ' + m('−4') + '.'],
        [m('= 0'), 'It works.']
      ],
      ans: 'Yes, ' + m('x = −2') + ' is a root.'
    }
  ],
  modelNote: 'Set a = 1, b = −2, c = −3 and read the roots off the graph before doing any algebra.',
  interactive: { type: 'quadratic' },
  quiz: [
    { q: 'In ' + m('3x<sup>2</sup> − 5x + 2 = 0') + ', the coefficient b is:', a: [m('3'), m('5'), m('−5'), m('2')], c: 2, why: 'The sign belongs to the coefficient.' },
    { q: 'A quadratic equation can have:', a: ['exactly one root', 'exactly two roots', 'two, one or no roots', 'always two roots'], c: 2, why: 'It depends on whether the parabola crosses, touches or misses the axis.' },
    { q: m('(x − 2)(x + 5) = 0') + ' gives:', a: [m('x = 2, x = 5'), m('x = −2, x = 5'), m('x = 2, x = −5'), m('x = −2, x = −5')], c: 2, why: 'Set each bracket to zero and solve.' },
    { q: m('x<sup>2</sup> − 5x + 6 = 0') + ' factorises to:', a: [m('(x − 2)(x − 3)'), m('(x + 2)(x + 3)'), m('(x − 1)(x − 6)'), m('(x − 2)(x + 3)')], c: 0, why: 'Product 6, sum −5 → −2 and −3.' }
  ],
  practice: {
    easy: [
      [m('Name a, b, c in x<sup>2</sup> + 3x − 4 = 0'), m('1, 3, −4')],
      [m('Name a, b, c in 2x<sup>2</sup> − 5 = 0'), m('2, 0, −5')],
      [m('Is x = 2 a root of x<sup>2</sup> − 4 = 0?'), 'Yes.'],
      [m('Is x = 1 a root of x<sup>2</sup> + x − 2 = 0?'), 'Yes.'],
      [m('Solve (x − 3)(x + 1) = 0'), m('x = 3, x = −1')],
      [m('Solve (x + 4)(x + 2) = 0'), m('x = −4, x = −2')],
      [m('Solve x(x − 5) = 0'), m('x = 0, x = 5')]
    ],
    med: [
      [m('Solve x<sup>2</sup> − 7x + 12 = 0'), m('x = 3, x = 4')],
      [m('Solve x<sup>2</sup> + 2x − 15 = 0'), m('x = −5, x = 3')],
      [m('Solve x<sup>2</sup> − x − 6 = 0'), m('x = 3, x = −2')],
      [m('Solve x<sup>2</sup> + 7x + 10 = 0'), m('x = −2, x = −5')],
      [m('Solve x<sup>2</sup> − 9x + 20 = 0'), m('x = 4, x = 5')],
      [m('Is x = −2 a root of 2x<sup>2</sup> + 3x − 2 = 0?'), 'Yes.'],
      [m('Solve x<sup>2</sup> − 2x − 8 = 0'), m('x = 4, x = −2')]
    ],
    hard: [
      [m('Solve 2x<sup>2</sup> − 5x + 3 = 0 by factorising'), m('(2x − 3)(x − 1) = 0') + ', so ' + m('x = 1.5, x = 1')],
      [m('Solve 3x<sup>2</sup> + 5x − 2 = 0'), m('(3x − 1)(x + 2) = 0') + ', so ' + m('x = ' + f('1', '3') + ', x = −2')],
      [m('Solve (x − 1)(x − 4) = 6'), m('x<sup>2</sup> − 5x − 2 = 0') + ' — does not factorise nicely; the roots come from the formula next lesson.'],
      [m('One root of x<sup>2</sup> + bx − 6 = 0 is 2. Find b and the other root.'), m('4 + 2b − 6 = 0') + ' gives ' + m('b = 1') + '; the other root is ' + m('−3') + '.'],
      [m('For which c does x<sup>2</sup> − 6x + c = 0 have x = 2 as a root?'), m('4 − 12 + c = 0') + ', so ' + m('c = 8')],
      [m('Solve x<sup>2</sup> = 5x'), m('x(x − 5) = 0') + ': ' + m('x = 0') + ' or ' + m('x = 5') + '. Never divide by ' + m('x') + ' — you would lose the root 0.'],
      [m('Write a quadratic equation whose roots are 3 and −7.'), m('(x − 3)(x + 7) = 0') + ', i.e. ' + m('x<sup>2</sup> + 4x − 21 = 0')]
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, Chapter III, pp. 122–128. Check every root by substituting.',
  homework: [
    m('Name a, b, c in 4x<sup>2</sup> − 7x + 1 = 0'),
    m('Solve x<sup>2</sup> − 8x + 15 = 0'),
    m('Solve x<sup>2</sup> + 5x − 14 = 0'),
    m('Solve x<sup>2</sup> = 7x'),
    m('Is x = −3 a root of x<sup>2</sup> + x − 6 = 0?'),
    m('Write a quadratic equation with roots 2 and −5')
  ]
});

/* ============================== 28 ============================== */
G8_ALG.push({
  id: 'alg-28', stream: 'alg', grade: 8, quarter: 3, lessons: '64–65', hours: 2,
  title: 'Incomplete quadratic equations',
  subtitle: 'When b or c is zero the formula is unnecessary — three short methods that are quicker and safer.',
  uz: 'Algebra 8, Chapter III §21', uzPage: 'Chapter III, pp. 129–133',
  cam: 'Stage 9 · beyond', camPage: 'Extension beyond Stage 9', wb: '—',
  objectives: [
    'Recognise the three incomplete forms.',
    'Solve ' + m('ax<sup>2</sup> + c = 0') + ' by taking roots.',
    'Solve ' + m('ax<sup>2</sup> + bx = 0') + ' by taking out a common factor.',
    'Explain why you must never divide an equation by ' + m('x') + '.'
  ],
  terms: [
    ['Incomplete quadratic equation', 'Chala kvadrat tenglama', 'Неполное квадратное уравнение'],
    ['Common factor', 'Umumiy ko‘paytuvchi', 'Общий множитель'],
    ['Take the square root', 'Kvadrat ildiz chiqarish', 'Извлечь квадратный корень'],
    ['Two opposite roots', 'Qarama-qarshi ildizlar', 'Противоположные корни'],
    ['Lose a root', 'Ildizni yo‘qotish', 'Потерять корень'],
    ['No real roots', 'Haqiqiy ildizga ega emas', 'Нет действительных корней'],
    ['Zero root', 'Nol ildiz', 'Нулевой корень']
  ],
  timing: [[10, 'Warm-up'], [24, 'Explanation'], [16, 'Interactive'], [26, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'The three forms',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Form</th><th>Missing</th><th>Method</th><th>Roots</th></tr></thead>
      <tbody>
        <tr><td>${m('ax<sup>2</sup> = 0')}</td><td>b and c</td><td>divide by a</td><td>${m('x = 0')} only</td></tr>
        <tr><td>${m('ax<sup>2</sup> + bx = 0')}</td><td>c</td><td>common factor x</td><td>${m('x = 0')} and ${m('x = −' + f('b', 'a'))}</td></tr>
        <tr><td>${m('ax<sup>2</sup> + c = 0')}</td><td>b</td><td>make ${m('x<sup>2</sup>')} the subject</td><td>two, or none</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'Form 1 — no b',
      html: `${eq(m('ax<sup>2</sup> + c = 0 ⟹ x<sup>2</sup> = −' + f('c', 'a')), true)}
      <ul>
        <li>If ${m('−' + f('c', 'a') + ' > 0')} there are <b>two roots</b>, ${m('x = ±' + sr('−c/a'))}.</li>
        <li>If it is ${m('0')}, one root, ${m('x = 0')}.</li>
        <li>If it is <b>negative</b>, there are <b>no roots</b> — no real number squares to a negative.</li>
      </ul>
      ${eq(m('2x<sup>2</sup> − 18 = 0 ⟹ x<sup>2</sup> = 9 ⟹ x = ±3'))}
      ${eq(m('x<sup>2</sup> + 4 = 0 ⟹ x<sup>2</sup> = −4 ⟹ no roots'))}
      <div class="warn"><span class="wl">Do not lose the minus root</span>
      ${m('x<sup>2</sup> = 9')} has <b>two</b> answers, ${m('3')} and ${m('−3')}. The symbol
      ${m(sr('9'))} means only ${m('3')} — that is why the ${m('±')} has to be written by hand.</div>`
    },
    {
      h: 'Form 2 — no c',
      html: `${eq(m('ax<sup>2</sup> + bx = 0 ⟹ x(ax + b) = 0 ⟹ x = 0') + ' or ' + m('x = −' + f('b', 'a')), true)}
      ${eq(m('3x<sup>2</sup> − 12x = 0 ⟹ 3x(x − 4) = 0 ⟹ x = 0') + ' or ' + m('x = 4'))}
      <div class="warn"><span class="wl">Never divide by x</span>
      Dividing ${m('3x<sup>2</sup> = 12x')} by ${m('x')} gives ${m('3x = 12')}, so ${m('x = 4')} — and the
      root ${m('x = 0')} has vanished. You may only divide by something you know is not zero, and
      ${m('x')} might be. Always move everything to one side and factorise instead.</div>
      <p>An equation of this form <b>always</b> has ${m('x = 0')} as a root, because the free term is
      zero.</p>`
    }
  ],
  examples: [
    {
      q: m('Solve 5x<sup>2</sup> − 45 = 0'),
      steps: [
        [m('5x<sup>2</sup> = 45'), ''],
        [m('x<sup>2</sup> = 9'), 'Divide by 5.'],
        [m('x = 3') + ' or ' + m('x = −3'), 'Both square roots.']
      ],
      ans: m('x = ±3')
    },
    {
      q: m('Solve 4x<sup>2</sup> + 7x = 0'),
      steps: [
        [m('x(4x + 7) = 0'), 'Common factor x.'],
        [m('x = 0') + ' or ' + m('4x + 7 = 0'), 'Zero product rule.'],
        [m('x = 0') + ' or ' + m('x = −1.75'), '']
      ],
      ans: m('x = 0, x = −1.75')
    },
    {
      q: m('Solve 3x<sup>2</sup> + 12 = 0'),
      steps: [
        [m('3x<sup>2</sup> = −12'), ''],
        [m('x<sup>2</sup> = −4'), ''],
        ['A square is never negative.', ''],
        ['No real roots.', '']
      ],
      ans: 'No roots.'
    }
  ],
  modelNote: 'Set b = 0 and vary c, then set c = 0 and vary b — the two incomplete shapes appear on the graph.',
  interactive: { type: 'quadratic', title: 'Set b or c to zero' },
  quiz: [
    { q: m('x<sup>2</sup> = 16') + ' gives:', a: [m('x = 4'), m('x = −4'), m('x = ±4'), m('x = 8')], c: 2, why: 'Both 4 and −4 square to 16.' },
    { q: m('x<sup>2</sup> + 9 = 0') + ' has:', a: [m('x = ±3'), m('x = 3'), 'no roots', m('x = 0')], c: 2, why: 'x² = −9 is impossible for a real number.' },
    { q: m('x<sup>2</sup> − 6x = 0') + ' gives:', a: [m('x = 6'), m('x = 0, x = 6'), m('x = ±6'), m('x = 0')], c: 1, why: 'Factor out x: x(x − 6) = 0.' },
    { q: 'Dividing ' + m('x<sup>2</sup> = 5x') + ' by ' + m('x') + ' is wrong because:', a: ['it is too slow', 'it loses the root x = 0', 'x² is not divisible by x', 'the answer becomes negative'], c: 1, why: 'You may only divide by something known to be non-zero.' }
  ],
  practice: {
    easy: [
      [m('Solve x<sup>2</sup> = 25'), m('x = ±5')],
      [m('Solve x<sup>2</sup> − 49 = 0'), m('x = ±7')],
      [m('Solve x<sup>2</sup> + 1 = 0'), 'No roots.'],
      [m('Solve x<sup>2</sup> = 0'), m('x = 0')],
      [m('Solve x<sup>2</sup> − 3x = 0'), m('x = 0, x = 3')],
      [m('Solve x<sup>2</sup> + 5x = 0'), m('x = 0, x = −5')],
      [m('Solve 2x<sup>2</sup> = 8'), m('x = ±2')]
    ],
    med: [
      [m('Solve 5x<sup>2</sup> − 45 = 0'), m('x = ±3')],
      [m('Solve 4x<sup>2</sup> + 7x = 0'), m('x = 0, x = −1.75')],
      [m('Solve 3x<sup>2</sup> + 12 = 0'), 'No roots.'],
      [m('Solve 3x<sup>2</sup> − 12x = 0'), m('x = 0, x = 4')],
      [m('Solve 9x<sup>2</sup> − 4 = 0'), m('x = ±' + f('2', '3'))],
      [m('Solve x<sup>2</sup> = 7x'), m('x = 0, x = 7')],
      [m('Solve 2x<sup>2</sup> − 50 = 0'), m('x = ±5')]
    ],
    hard: [
      [m('Solve (x − 2)<sup>2</sup> = 9'), m('x − 2 = ±3') + ': ' + m('x = 5') + ' or ' + m('x = −1')],
      [m('Solve 4x<sup>2</sup> = 3x'), m('x(4x − 3) = 0') + ': ' + m('x = 0') + ' or ' + m('x = 0.75')],
      [m('For which c does x<sup>2</sup> + c = 0 have two roots?'), m('c < 0')],
      [m('Solve 2x<sup>2</sup> − 6 = 0 and give the answer exactly.'), m('x<sup>2</sup> = 3') + ', so ' + m('x = ±' + sr('3'))],
      [m('Solve x(x + 3) = 4x'), m('x<sup>2</sup> + 3x − 4x = 0') + ' ⟹ ' + m('x(x − 1) = 0') + ': ' + m('x = 0, x = 1')],
      [m('The area of a square is 121 cm². Find its side, and say why only one answer makes sense.'), m('x<sup>2</sup> = 121') + ' gives ' + m('x = ±11') + '; a length cannot be negative, so ' + m('11 cm') + '.'],
      [m('Solve (2x − 1)<sup>2</sup> = 0'), m('2x − 1 = 0') + ', so ' + m('x = 0.5') + ' — one root only.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, Chapter III, pp. 129–133. Never divide by x.',
  homework: [
    m('Solve x<sup>2</sup> − 64 = 0'),
    m('Solve 3x<sup>2</sup> − 27 = 0'),
    m('Solve x<sup>2</sup> + 16 = 0'),
    m('Solve 5x<sup>2</sup> + 20x = 0'),
    m('Solve x<sup>2</sup> = 9x'),
    m('Solve (x + 1)<sup>2</sup> = 16')
  ]
});

/* ============================== 29 ============================== */
G8_ALG.push({
  id: 'alg-29', stream: 'alg', grade: 8, quarter: 3, lessons: '66–67', hours: 2,
  title: 'The quadratic formula and the discriminant',
  subtitle: 'One formula that solves every quadratic — and one number inside it that says in advance how many roots there will be.',
  uz: 'Algebra 8, Chapter III §22', uzPage: 'Chapter III, pp. 134–140',
  cam: 'Stage 9 · beyond', camPage: 'Extension beyond Stage 9', wb: '—',
  objectives: [
    'Calculate the discriminant ' + m('D = b<sup>2</sup> − 4ac') + '.',
    'Say how many roots an equation has from the sign of ' + m('D') + '.',
    'Use the quadratic formula correctly, including with negative coefficients.',
    'Choose between factorising and the formula.'
  ],
  terms: [
    ['Discriminant', 'Diskriminant', 'Дискриминант'],
    ['Quadratic formula', 'Kvadrat tenglama formulasi', 'Формула корней квадратного уравнения'],
    ['Two distinct roots', 'Ikkita har xil ildiz', 'Два различных корня'],
    ['Repeated root', 'Karrali ildiz', 'Кратный корень'],
    ['No real roots', 'Haqiqiy ildiz yo‘q', 'Нет действительных корней'],
    ['Substitute', 'O‘rniga qo‘yish', 'Подставить'],
    ['Simplify the surd', 'Ildizni soddalashtirish', 'Упростить корень'],
    ['Exact answer', 'Aniq javob', 'Точный ответ']
  ],
  timing: [[10, 'Warm-up'], [24, 'Explanation'], [16, 'Interactive'], [26, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'The discriminant',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      For ${m('ax<sup>2</sup> + bx + c = 0')} the <b>discriminant</b> is
      ${eq(m('D = b<sup>2</sup> − 4ac'))}</div>
      <div class="tablewrap"><table>
      <thead><tr><th>D</th><th>Roots</th><th>The parabola</th></tr></thead>
      <tbody>
        <tr><td>${m('D > 0')}</td><td>two different roots</td><td>crosses the x-axis twice</td></tr>
        <tr><td>${m('D = 0')}</td><td>one root (repeated)</td><td>touches the axis</td></tr>
        <tr><td>${m('D < 0')}</td><td>no real roots</td><td>misses the axis</td></tr>
      </tbody></table></div>
      {{fig:discriminantCases:The sign of the discriminant decides whether the parabola crosses, touches or misses the x-axis.}}
      <p>Work out ${m('D')} <b>first</b>, every time. If it is negative you can stop — there is nothing
      to find, and you have saved yourself a page of arithmetic.</p>`
    },
    {
      h: 'The formula',
      html: `<div class="keybox"><div class="klabel">The quadratic formula</div>
      ${eq(m('x = ' + f('−b ± ' + sr('D'), '2a')) + ',&nbsp;&nbsp; where ' + m('D = b<sup>2</sup> − 4ac'))}</div>
      <p>It comes from completing the square on the general equation, and it works for every quadratic
      whatever the coefficients.</p>
      <div class="warn"><span class="wl">Three places where marks are lost</span>
      <ol style="margin:.4em 0 0">
        <li>${m('−b')} when ${m('b')} is already negative: for ${m('b = −5')}, ${m('−b = +5')}.</li>
        <li>${m('−4ac')} when ${m('c')} is negative: ${m('−4 · 1 · (−3) = +12')}.</li>
        <li>The whole of ${m('−b ± ' + sr('D'))} is divided by ${m('2a')} — not just the root.</li>
      </ol></div>`
    },
    {
      h: 'Which method?',
      html: `<ul>
        <li><b>Incomplete</b> (${m('b = 0')} or ${m('c = 0')}) → the short methods of the last lesson.</li>
        <li><b>Factorises easily</b> (small whole-number roots) → factorise; it is quicker.</li>
        <li><b>Anything else</b> → the formula.</li>
      </ul>
      <p>A useful check: if ${m('D')} is a perfect square, the equation would have factorised. If it is
      not, the roots are irrational and the formula was the only route.</p>`
    }
  ],
  examples: [
    {
      q: m('Solve 2x<sup>2</sup> − 7x + 3 = 0'),
      steps: [
        [m('a = 2, b = −7, c = 3'), 'Read off the coefficients with their signs.'],
        [m('D = (−7)<sup>2</sup> − 4 · 2 · 3 = 49 − 24 = 25'), m('D > 0') + ', so two roots.'],
        [m('x = ' + f('7 ± ' + sr('25'), '4') + ' = ' + f('7 ± 5', '4')), m('−b = +7')],
        [m('x = 3') + ' or ' + m('x = 0.5'), m(f('12', '4')) + ' and ' + m(f('2', '4'))]
      ],
      ans: m('x = 3, x = 0.5')
    },
    {
      q: m('Solve x<sup>2</sup> + 4x + 4 = 0'),
      steps: [
        [m('a = 1, b = 4, c = 4'), ''],
        [m('D = 16 − 16 = 0'), 'One repeated root.'],
        [m('x = ' + f('−4', '2') + ' = −2'), ''],
        [m('(x + 2)<sup>2</sup> = 0'), 'The same answer by factorising.']
      ],
      ans: m('x = −2')
    },
    {
      q: m('Solve x<sup>2</sup> − 2x + 5 = 0'),
      steps: [
        [m('a = 1, b = −2, c = 5'), ''],
        [m('D = 4 − 20 = −16'), m('D < 0') + '.'],
        ['No real roots — stop here.', 'The parabola lies entirely above the x-axis.']
      ],
      ans: 'No real roots.'
    }
  ],
  modelNote: 'Move c downwards and watch D pass through zero as the parabola touches then crosses the axis.',
  interactive: { type: 'quadratic', title: 'D decides everything' },
  quiz: [
    { q: 'For ' + m('x<sup>2</sup> − 5x + 6 = 0') + ', D is:', a: [m('1'), m('49'), m('−1'), m('25')], c: 0, why: '25 − 24 = 1.' },
    { q: m('D = 0') + ' means:', a: ['no roots', 'one root', 'two roots', 'infinitely many'], c: 1, why: 'The parabola touches the axis at one point.' },
    { q: 'For ' + m('2x<sup>2</sup> + 3x + 5 = 0') + ', D is:', a: [m('49'), m('−31'), m('9'), m('31')], c: 1, why: '9 − 40 = −31, so there are no real roots.' },
    { q: 'In the formula, when ' + m('b = −6') + ' the numerator starts with:', a: [m('−6'), m('+6'), m('6<sup>2</sup>'), m('−36')], c: 1, why: '−b = −(−6) = +6.' }
  ],
  practice: {
    easy: [
      [m('Find D for x<sup>2</sup> + 3x + 2 = 0'), m('1')],
      [m('Find D for x<sup>2</sup> − 4x + 4 = 0'), m('0')],
      [m('Find D for x<sup>2</sup> + x + 1 = 0'), m('−3')],
      [m('How many roots when D = 9?'), 'Two.'],
      [m('How many roots when D = 0?'), 'One.'],
      [m('How many roots when D = −5?'), 'None.'],
      [m('Solve x<sup>2</sup> + 3x + 2 = 0'), m('x = −1, x = −2')]
    ],
    med: [
      [m('Solve 2x<sup>2</sup> − 7x + 3 = 0'), m('x = 3, x = 0.5')],
      [m('Solve x<sup>2</sup> + 4x + 4 = 0'), m('x = −2')],
      [m('Solve x<sup>2</sup> − 2x + 5 = 0'), 'No real roots.'],
      [m('Solve 3x<sup>2</sup> − 5x − 2 = 0'), m('D = 49') + ': ' + m('x = 2, x = −' + f('1', '3'))],
      [m('Solve x<sup>2</sup> − 6x + 9 = 0'), m('x = 3')],
      [m('Solve 2x<sup>2</sup> + 5x − 3 = 0'), m('D = 49') + ': ' + m('x = 0.5, x = −3')],
      [m('Solve x<sup>2</sup> + 2x − 8 = 0'), m('x = 2, x = −4')]
    ],
    hard: [
      [m('Solve x<sup>2</sup> − 4x + 1 = 0 exactly'), m('D = 12') + ': ' + m('x = 2 ± ' + sr('3'))],
      [m('Solve 2x<sup>2</sup> − 4x − 1 = 0 exactly'), m('D = 24') + ': ' + m('x = ' + f('2 ± ' + sr('6'), '2'))],
      [m('For which k does x<sup>2</sup> + kx + 9 = 0 have exactly one root?'), m('k<sup>2</sup> = 36') + ', so ' + m('k = ±6')],
      [m('For which k does x<sup>2</sup> − 6x + k = 0 have two roots?'), m('36 − 4k > 0') + ', so ' + m('k < 9')],
      [m('For which k does x<sup>2</sup> + 4x + k = 0 have no roots?'), m('16 − 4k < 0') + ', so ' + m('k > 4')],
      [m('Solve 5x<sup>2</sup> − 2x − 3 = 0'), m('D = 64') + ': ' + m('x = 1, x = −0.6')],
      [m('Show that x<sup>2</sup> + x + 1 = 0 has no real roots, without the formula.'), m('x<sup>2</sup> + x + 1 = (x + 0.5)<sup>2</sup> + 0.75 ≥ 0.75 > 0') + ' for every ' + m('x') + '.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, Chapter III, pp. 134–140. Find D before anything else.',
  homework: [
    m('Find D and solve x<sup>2</sup> − 7x + 10 = 0'),
    m('Find D and solve 3x<sup>2</sup> + 2x − 1 = 0'),
    m('Find D and solve x<sup>2</sup> + 2x + 5 = 0'),
    m('Solve x<sup>2</sup> − 8x + 16 = 0'),
    m('Solve x<sup>2</sup> − 6x + 2 = 0 exactly'),
    m('For which k does x<sup>2</sup> + kx + 4 = 0 have exactly one root?')
  ]
});

/* ============================== 30 ============================== */
G8_ALG.push({
  id: 'alg-30', stream: 'alg', grade: 8, quarter: 3, lessons: '68–69', hours: 2,
  title: 'Vieta’s theorem and factorising a quadratic trinomial',
  subtitle: 'The sum and the product of the roots, read straight off the coefficients — a check, a shortcut and a factorising method in one.',
  uz: 'Algebra 8, Chapter III §23', uzPage: 'Chapter III, pp. 141–146',
  cam: 'Stage 9 · 2.4', camPage: 'Learner’s Book pp. 36–39', wb: 'Workbook 2.4',
  objectives: [
    'State and use Vieta’s theorem.',
    'Check a pair of roots without substituting.',
    'Find roots by inspection for a reduced quadratic.',
    'Factorise ' + m('ax<sup>2</sup> + bx + c') + ' using its roots.'
  ],
  terms: [
    ['Vieta’s theorem', 'Viyet teoremasi', 'Теорема Виета'],
    ['Sum of the roots', 'Ildizlar yig‘indisi', 'Сумма корней'],
    ['Product of the roots', 'Ildizlar ko‘paytmasi', 'Произведение корней'],
    ['Reduced quadratic equation', 'Keltirilgan kvadrat tenglama', 'Приведённое квадратное уравнение'],
    ['Quadratic trinomial', 'Kvadrat uchhad', 'Квадратный трёхчлен'],
    ['By inspection', 'Tanlash yo‘li bilan', 'Подбором'],
    ['Linear factors', 'Chiziqli ko‘paytuvchilar', 'Линейные множители'],
    ['Converse theorem', 'Teskari teorema', 'Обратная теорема']
  ],
  timing: [[10, 'Warm-up'], [24, 'Explanation'], [16, 'Interactive'], [26, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'The theorem',
      html: `<div class="keybox"><div class="klabel">Vieta’s theorem</div>
      If ${m('x₁')} and ${m('x₂')} are the roots of ${m('ax<sup>2</sup> + bx + c = 0')}, then
      ${eq(m('x₁ + x₂ = −' + f('b', 'a')) + ' &nbsp;&nbsp;and&nbsp;&nbsp; ' + m('x₁ · x₂ = ' + f('c', 'a')))}</div>
      <p>For a <b>reduced</b> equation ${m('x<sup>2</sup> + px + q = 0')} (with ${m('a = 1')}) it is even
      simpler:</p>
      ${eq(m('x₁ + x₂ = −p') + ' &nbsp;&nbsp;and&nbsp;&nbsp; ' + m('x₁ · x₂ = q'), true)}
      <p>Check it on ${m('x<sup>2</sup> − 5x + 6 = 0')}, whose roots are 2 and 3:
      ${m('2 + 3 = 5 = −(−5)')} ✓ and ${m('2 · 3 = 6')} ✓.</p>`
    },
    {
      h: 'Three uses',
      html: `<p><b>1 · As a check.</b> After solving, add and multiply your two roots. If they do not give
      ${m('−' + f('b', 'a'))} and ${m(f('c', 'a'))}, go back — this takes five seconds and catches almost
      every arithmetic slip.</p>
      <p><b>2 · To find roots by inspection.</b> For ${m('x<sup>2</sup> − 7x + 12 = 0')}, look for two
      numbers with sum 7 and product 12: 3 and 4. No formula needed.</p>
      <p><b>3 · To find an unknown coefficient.</b> If one root of
      ${m('x<sup>2</sup> + bx − 10 = 0')} is 5, then the product of the roots is ${m('−10')}, so the other
      root is ${m('−2')}, and the sum ${m('5 + (−2) = 3 = −b')} gives ${m('b = −3')}.</p>`
    },
    {
      h: 'Factorising the trinomial',
      html: `<div class="keybox"><div class="klabel">Theorem</div>
      If ${m('x₁')} and ${m('x₂')} are the roots of ${m('ax<sup>2</sup> + bx + c = 0')}, then
      ${eq(m('ax<sup>2</sup> + bx + c = a(x − x₁)(x − x₂)'))}</div>
      <p>So factorising a quadratic trinomial and solving the equation are the same job. Find the roots,
      then write the brackets:</p>
      ${eq(m('2x<sup>2</sup> − 7x + 3') + ': roots ' + m('3') + ' and ' + m('0.5') + ', so ' +
           m('= 2(x − 3)(x − 0.5) = (x − 3)(2x − 1)'), true)}
      <div class="warn"><span class="wl">Do not forget the a</span>
      ${m('2x<sup>2</sup> − 7x + 3')} is not ${m('(x − 3)(x − 0.5)')} — that expands to
      ${m('x<sup>2</sup> − 3.5x + 1.5')}. The leading coefficient must be carried through.</div>
      <p>If ${m('D < 0')} there are no roots, and the trinomial <b>cannot</b> be factorised over the real
      numbers.</p>`
    }
  ],
  examples: [
    {
      q: m('Solve x<sup>2</sup> − 9x + 20 = 0 by inspection.'),
      steps: [
        ['Sum of roots ' + m('= 9') + ', product ' + m('= 20') + '.', 'Vieta for a reduced equation.'],
        ['Two numbers with product 20: 1·20, 2·10, 4·5.', ''],
        [m('4 + 5 = 9') + ' ✓', ''],
        [m('x = 4') + ' and ' + m('x = 5'), '']
      ],
      ans: m('x = 4, x = 5')
    },
    {
      q: m('One root of x<sup>2</sup> + bx − 21 = 0 is 7. Find the other root and b.'),
      steps: [
        [m('x₁ · x₂ = −21'), 'The product equals the free term.'],
        [m('7 · x₂ = −21, so x₂ = −3'), ''],
        [m('x₁ + x₂ = 7 + (−3) = 4'), ''],
        [m('−b = 4, so b = −4'), '']
      ],
      ans: m('x₂ = −3, b = −4')
    },
    {
      q: m('Factorise 3x<sup>2</sup> − 5x − 2'),
      steps: [
        [m('D = 25 + 24 = 49'), ''],
        [m('x = ' + f('5 ± 7', '6')), 'The formula.'],
        [m('x₁ = 2, x₂ = −' + f('1', '3')), ''],
        [m('3(x − 2)(x + ' + f('1', '3') + ') = (x − 2)(3x + 1)'), 'Multiply the 3 into the second bracket.']
      ],
      ans: m('(x − 2)(3x + 1)')
    }
  ],
  modelNote: 'Read x₁ + x₂ and x₁ · x₂ from the model and compare with −b/a and c/a.',
  interactive: { type: 'quadratic', title: 'Sum and product of the roots' },
  quiz: [
    { q: 'For ' + m('x<sup>2</sup> − 7x + 12 = 0') + ', the sum of the roots is:', a: [m('−7'), m('7'), m('12'), m('−12')], c: 1, why: 'Sum = −p = 7.' },
    { q: 'For the same equation, the product is:', a: [m('7'), m('12'), m('−12'), m('−7')], c: 1, why: 'Product = q = 12.' },
    { q: 'For ' + m('2x<sup>2</sup> + 6x − 8 = 0') + ', the sum of the roots is:', a: [m('−6'), m('−3'), m('3'), m('6')], c: 1, why: 'Sum = −b/a = −6/2 = −3.' },
    { q: m('x<sup>2</sup> − 5x + 6') + ' factorises to:', a: [m('(x − 2)(x − 3)'), m('(x + 2)(x + 3)'), m('(x − 1)(x − 6)'), 'it does not factorise'], c: 0, why: 'Its roots are 2 and 3.' }
  ],
  practice: {
    easy: [
      [m('Find the sum of the roots of x<sup>2</sup> − 4x + 3 = 0'), m('4')],
      [m('Find the product of the roots of x<sup>2</sup> − 4x + 3 = 0'), m('3')],
      [m('Solve x<sup>2</sup> − 5x + 6 = 0 by inspection'), m('x = 2, x = 3')],
      [m('Solve x<sup>2</sup> − 7x + 12 = 0 by inspection'), m('x = 3, x = 4')],
      [m('Solve x<sup>2</sup> + 5x + 6 = 0 by inspection'), m('x = −2, x = −3')],
      [m('Factorise x<sup>2</sup> − 3x + 2'), m('(x − 1)(x − 2)')],
      [m('Factorise x<sup>2</sup> − 16'), m('(x − 4)(x + 4)')]
    ],
    med: [
      [m('Solve x<sup>2</sup> − 9x + 20 = 0 by inspection'), m('x = 4, x = 5')],
      [m('Solve x<sup>2</sup> + x − 12 = 0 by inspection'), m('x = 3, x = −4')],
      [m('One root of x<sup>2</sup> + bx − 21 = 0 is 7. Find the other root and b.'), m('x₂ = −3, b = −4')],
      [m('For 2x<sup>2</sup> + 6x − 8 = 0, find the sum and product of the roots.'), m('−3') + ' and ' + m('−4')],
      [m('Factorise x<sup>2</sup> − 2x − 15'), m('(x − 5)(x + 3)')],
      [m('Factorise 3x<sup>2</sup> − 5x − 2'), m('(x − 2)(3x + 1)')],
      [m('Write a reduced quadratic whose roots are 6 and −2.'), m('x<sup>2</sup> − 4x − 12 = 0')]
    ],
    hard: [
      [m('The roots of x<sup>2</sup> + px + q = 0 are 3 and −5. Find p and q.'), m('p = 2, q = −15')],
      [m('One root of 2x<sup>2</sup> − 9x + c = 0 is 4. Find c and the other root.'), 'Sum ' + m('= 4.5') + ', so the other root is ' + m('0.5') + ' and ' + m('c = 2 · 4 · 0.5 = 4') + '.'],
      [m('Factorise 2x<sup>2</sup> + 5x − 12'), m('(x + 4)(2x − 3)')],
      [m('The roots of x<sup>2</sup> − 6x + q = 0 are equal. Find q and the root.'), m('D = 0') + ' gives ' + m('q = 9') + ' and ' + m('x = 3') + '.'],
      [m('For x<sup>2</sup> − 5x + 6 = 0, find x₁<sup>2</sup> + x₂<sup>2</sup> without solving.'), m('(x₁ + x₂)<sup>2</sup> − 2x₁x₂ = 25 − 12 = 13')],
      [m('For x<sup>2</sup> + 3x − 10 = 0, find ' + f('1', 'x₁') + ' + ' + f('1', 'x₂') + ' without solving.'), m(f('x₁ + x₂', 'x₁x₂') + ' = ' + f('−3', '−10') + ' = 0.3')],
      [m('Can x<sup>2</sup> + x + 3 be factorised into linear factors? Explain.'), 'No — ' + m('D = 1 − 12 = −11 < 0') + ', so there are no real roots.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, Chapter III, pp. 141–146. Use Vieta as a check on every answer.',
  homework: [
    m('Find the sum and product of the roots of x<sup>2</sup> − 11x + 30 = 0'),
    m('Solve x<sup>2</sup> − 8x + 15 = 0 by inspection'),
    m('One root of x<sup>2</sup> + bx − 24 = 0 is 6. Find the other root and b.'),
    m('Factorise x<sup>2</sup> + 4x − 21'),
    m('Factorise 2x<sup>2</sup> − 7x + 3'),
    m('Write a reduced quadratic equation with roots −1 and 8')
  ]
});

/* ============================== 31 ============================== */
G8_ALG.push({
  id: 'alg-31', stream: 'alg', grade: 8, quarter: 3, lessons: '70–71', hours: 2,
  title: 'Biquadratic equations and equations reducible to quadratics',
  subtitle: 'One substitution turns a degree-four equation, or a fractional one, into a quadratic you can already solve.',
  uz: 'Algebra 8, Chapter III §24', uzPage: 'Chapter III, pp. 147–152',
  cam: 'Stage 9 · beyond', camPage: 'Extension beyond Stage 9', wb: '—',
  objectives: [
    'Solve a biquadratic equation by the substitution ' + m('t = x<sup>2</sup>') + '.',
    'Reject negative values of ' + m('t') + ' and explain why.',
    'Solve a fractional-rational equation that reduces to a quadratic.',
    'Check for values excluded by the denominator.'
  ],
  terms: [
    ['Biquadratic equation', 'Bikvadrat tenglama', 'Биквадратное уравнение'],
    ['Substitution', 'Almashtirish', 'Замена переменной'],
    ['New variable', 'Yangi o‘zgaruvchi', 'Новая переменная'],
    ['Reject a value', 'Qiymatni rad etish', 'Отбросить значение'],
    ['Fractional-rational equation', 'Kasr-ratsional tenglama', 'Дробно-рациональное уравнение'],
    ['Extraneous root', 'Chet ildiz', 'Посторонний корень'],
    ['Return to x', 'x ga qaytish', 'Вернуться к x'],
    ['Degree of an equation', 'Tenglamaning darajasi', 'Степень уравнения']
  ],
  timing: [[10, 'Warm-up'], [24, 'Explanation'], [16, 'Interactive'], [26, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'Biquadratic equations',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      An equation of the form ${m('ax<sup>4</sup> + bx<sup>2</sup> + c = 0')} is called
      <b>biquadratic</b>. Only even powers appear.</div>
      <p>Put ${m('t = x<sup>2</sup>')}. Since ${m('x<sup>4</sup> = (x<sup>2</sup>)<sup>2</sup> = t<sup>2</sup>')},
      the equation becomes</p>
      ${eq(m('at<sup>2</sup> + bt + c = 0'), true)}
      <p>— an ordinary quadratic. Solve it, then <b>return to ${m('x')}</b> by solving
      ${m('x<sup>2</sup> = t')} for each value of ${m('t')} found.</p>
      <div class="warn"><span class="wl">The step everyone forgets</span>
      ${m('t = x<sup>2</sup>')} is a square, so ${m('t ≥ 0')}. Any <b>negative</b> value of ${m('t')} must
      be <b>rejected</b> — it gives no real ${m('x')}. And every positive ${m('t')} gives <b>two</b>
      values of ${m('x')}, namely ${m('±' + sr('t'))}.</div>
      <p>So a biquadratic equation can have 4, 3, 2, 1 or 0 real roots — count carefully.</p>`
    },
    {
      h: 'A worked pattern',
      html: `${eq(m('x<sup>4</sup> − 13x<sup>2</sup> + 36 = 0'))}
      ${eq(m('t<sup>2</sup> − 13t + 36 = 0') + '&nbsp;&nbsp;(with ' + m('t = x<sup>2</sup>') + ')')}
      ${eq(m('t = 4') + ' or ' + m('t = 9') + '&nbsp;&nbsp;(sum 13, product 36)')}
      ${eq(m('x<sup>2</sup> = 4 ⟹ x = ±2') + ' &nbsp;&nbsp; ' + m('x<sup>2</sup> = 9 ⟹ x = ±3'))}
      <p>Four roots: ${m('−3, −2, 2, 3')}.</p>`
    },
    {
      h: 'Fractional equations that reduce to quadratics',
      html: `<p>Multiply through by the common denominator, then solve the quadratic that appears —
      but list the excluded values <b>first</b>.</p>
      ${eq(m(f('x', 'x − 2') + ' + ' + f('4', 'x') + ' = 3') + ',&nbsp;&nbsp; ' + m('x ≠ 0, x ≠ 2'), true)}
      <p>Multiplying by ${m('x(x − 2)')}:</p>
      ${eq(m('x<sup>2</sup> + 4(x − 2) = 3x(x − 2)'))}
      ${eq(m('x<sup>2</sup> + 4x − 8 = 3x<sup>2</sup> − 6x ⟹ 2x<sup>2</sup> − 10x + 8 = 0 ⟹ x<sup>2</sup> − 5x + 4 = 0'))}
      ${eq(m('x = 1') + ' or ' + m('x = 4') + ' — both permissible ✓')}
      <div class="warn"><span class="wl">Check against the excluded list</span>
      If a root turns out to be an excluded value it is an <b>extraneous root</b> and must be thrown
      away. Multiplying by an expression that could be zero is exactly what creates them.</div>`
    }
  ],
  examples: [
    {
      q: m('Solve x<sup>4</sup> − 5x<sup>2</sup> + 4 = 0'),
      steps: [
        [m('t = x<sup>2</sup>: t<sup>2</sup> − 5t + 4 = 0'), 'The substitution.'],
        [m('t = 1') + ' or ' + m('t = 4'), 'Sum 5, product 4.'],
        [m('x<sup>2</sup> = 1 ⟹ x = ±1'), ''],
        [m('x<sup>2</sup> = 4 ⟹ x = ±2'), 'Four roots in all.']
      ],
      ans: m('x = ±1, x = ±2')
    },
    {
      q: m('Solve x<sup>4</sup> + 3x<sup>2</sup> − 4 = 0'),
      steps: [
        [m('t<sup>2</sup> + 3t − 4 = 0'), ''],
        [m('t = 1') + ' or ' + m('t = −4'), ''],
        [m('t = −4') + ' is rejected — a square cannot be negative.', 'This is the key step.'],
        [m('x<sup>2</sup> = 1 ⟹ x = ±1'), 'Only two roots.']
      ],
      ans: m('x = ±1')
    },
    {
      q: m('Solve ' + f('6', 'x') + ' = x − 1'),
      steps: [
        [m('x ≠ 0'), 'Note the exclusion first.'],
        [m('6 = x(x − 1)'), 'Multiply by x.'],
        [m('x<sup>2</sup> − x − 6 = 0'), ''],
        [m('x = 3') + ' or ' + m('x = −2'), 'Neither is 0, so both stand.']
      ],
      ans: m('x = 3, x = −2')
    }
  ],
  modelNote: 'Use the model on the quadratic in t, then ask the class how many x-values each t produces.',
  interactive: { type: 'quadratic', title: 'The quadratic in t' },
  quiz: [
    { q: 'For a biquadratic the substitution is:', a: [m('t = x'), m('t = x<sup>2</sup>'), m('t = x<sup>4</sup>'), m('t = ' + sr('x'))], c: 1, why: 'Then x⁴ becomes t².' },
    { q: 'If ' + m('t = −9') + ' comes out of the substitution, you should:', a: [m('take x = ±3'), 'reject it', m('take x = −3'), 'start again'], c: 1, why: 'x² is never negative, so that t gives no real root.' },
    { q: m('x<sup>4</sup> − 13x<sup>2</sup> + 36 = 0') + ' has how many real roots?', a: [m('2'), m('3'), m('4'), m('0')], c: 2, why: 't = 4 and t = 9 each give two values of x.' },
    { q: 'Before multiplying a fractional equation by its denominator you must:', a: ['square both sides', 'list the excluded values', 'factorise the numerator', 'nothing'], c: 1, why: 'Otherwise an extraneous root can slip through unnoticed.' }
  ],
  practice: {
    easy: [
      [m('Solve x<sup>4</sup> − 5x<sup>2</sup> + 4 = 0'), m('x = ±1, ±2')],
      [m('Solve x<sup>4</sup> − 10x<sup>2</sup> + 9 = 0'), m('x = ±1, ±3')],
      [m('Solve x<sup>4</sup> − 16 = 0'), m('x = ±2')],
      [m('Solve x<sup>4</sup> − 9x<sup>2</sup> = 0'), m('x = 0, ±3')],
      [m('If t = x<sup>2</sup> and t = 25, find x.'), m('x = ±5')],
      [m('If t = x<sup>2</sup> and t = −1, find x.'), 'No real x.'],
      [m('Solve ' + f('4', 'x') + ' = 2'), m('x = 2')]
    ],
    med: [
      [m('Solve x<sup>4</sup> + 3x<sup>2</sup> − 4 = 0'), m('x = ±1')],
      [m('Solve x<sup>4</sup> − 13x<sup>2</sup> + 36 = 0'), m('x = ±2, ±3')],
      [m('Solve x<sup>4</sup> + 5x<sup>2</sup> + 4 = 0'), 'No real roots — both t values are negative.'],
      [m('Solve ' + f('6', 'x') + ' = x − 1'), m('x = 3, x = −2')],
      [m('Solve ' + f('12', 'x') + ' + x = 7'), m('x = 3, x = 4')],
      [m('Solve x<sup>4</sup> − 8x<sup>2</sup> + 16 = 0'), m('t = 4') + ' twice, so ' + m('x = ±2')],
      [m('Solve ' + f('1', 'x') + ' + ' + f('1', 'x + 1') + ' = ' + f('5', '6')), m('x = 2') + ' or ' + m('x = −3')]
    ],
    hard: [
      [m('Solve 4x<sup>4</sup> − 17x<sup>2</sup> + 4 = 0'), m('t = 4') + ' or ' + m('t = 0.25') + ': ' + m('x = ±2, ±0.5')],
      [m('Solve ' + f('x', 'x − 2') + ' + ' + f('4', 'x') + ' = 3'), m('x = 1, x = 4')],
      [m('Solve ' + f('x + 1', 'x − 1') + ' − ' + f('x − 1', 'x + 1') + ' = 1'), m('4x = x<sup>2</sup> − 1') + ': ' + m('x = 2 ± ' + sr('5'))],
      [m('Solve (x<sup>2</sup> − 1)<sup>2</sup> − 5(x<sup>2</sup> − 1) + 4 = 0'), 'Let ' + m('t = x<sup>2</sup> − 1') + ': ' + m('t = 1') + ' or ' + m('4') + ', so ' + m('x = ±' + sr('2') + ', ±' + sr('5'))],
      [m('For which k does x<sup>4</sup> + kx<sup>2</sup> + 4 = 0 have four real roots?'), 'Need two positive t-roots: ' + m('k<sup>2</sup> > 16') + ' and ' + m('−k > 0') + ', so ' + m('k < −4') + '.'],
      [m('Solve ' + f('2', 'x − 3') + ' = ' + f('x', 'x − 3') + ' − 1'), m('x ≠ 3') + '; ' + m('2 = x − (x − 3) = 3') + ' — false, so no solutions.'],
      [m('Solve ' + f('x<sup>2</sup> − 4', 'x − 2') + ' = 5'), m('x ≠ 2') + '; ' + m('x + 2 = 5') + ', so ' + m('x = 3') + '.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, Chapter III, pp. 147–152. Reject negative t values and say so in writing.',
  homework: [
    m('Solve x<sup>4</sup> − 26x<sup>2</sup> + 25 = 0'),
    m('Solve x<sup>4</sup> + 2x<sup>2</sup> − 3 = 0'),
    m('Solve x<sup>4</sup> + 4x<sup>2</sup> + 3 = 0'),
    m('Solve ' + f('8', 'x') + ' = x + 2'),
    m('Solve ' + f('20', 'x') + ' − x = 1'),
    m('Solve x<sup>4</sup> − 4x<sup>2</sup> = 0')
  ]
});

/* ============================== 32 ============================== */
G8_ALG.push({
  id: 'alg-32', stream: 'alg', grade: 8, quarter: 3, lessons: '72–73', hours: 2,
  title: 'Solving problems with quadratic equations',
  subtitle: 'Turning words into a quadratic — and deciding which of the two roots the problem actually allows.',
  uz: 'Algebra 8, Chapter III §25', uzPage: 'Chapter III, pp. 153–158',
  cam: 'Stage 9 · 4.1', camPage: 'Learner’s Book pp. 84–90', wb: 'Workbook 4.1',
  objectives: [
    'Choose the unknown and write the equation.',
    'Solve and interpret both roots in the context.',
    'Reject a root that has no meaning in the problem.',
    'Handle the standard types: area, consecutive numbers, speed and work.'
  ],
  terms: [
    ['Word problem', 'Matnli masala', 'Текстовая задача'],
    ['Let x be…', 'x deb belgilaymiz', 'Пусть x —'],
    ['Set up an equation', 'Tenglama tuzish', 'Составить уравнение'],
    ['Reject a root', 'Ildizni rad etish', 'Отбросить корень'],
    ['Consecutive numbers', 'Ketma-ket sonlar', 'Последовательные числа'],
    ['Average speed', 'O‘rtacha tezlik', 'Средняя скорость'],
    ['Dimensions', 'O‘lchamlar', 'Размеры'],
    ['Interpret the answer', 'Javobni izohlash', 'Истолковать ответ']
  ],
  timing: [[10, 'Warm-up'], [24, 'Explanation'], [16, 'Interactive'], [26, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'The method',
      html: `<ol>
        <li><b>Name the unknown.</b> Write “Let ${m('x')} be …” and say what unit it is in.</li>
        <li><b>Express everything else</b> in terms of ${m('x')}.</li>
        <li><b>Write the equation</b> from the sentence that has not been used yet.</li>
        <li><b>Solve</b> it.</li>
        <li><b>Check both roots against the problem</b> and reject any that make no sense.</li>
        <li><b>Answer in words</b>, with units.</li>
      </ol>
      <div class="keybox"><div class="klabel">Step 5 is the one that is new</div>
      A quadratic gives two roots, but a length, a speed, a time or a number of people cannot be
      negative. Say explicitly which root you are rejecting and why — it carries a mark.</div>`
    },
    {
      h: 'The four standard types',
      html: `<p><b>Area.</b> A rectangle is 3 m longer than it is wide and has area 40 m². Let the width
      be ${m('x')}; then ${m('x(x + 3) = 40')}, giving ${m('x = 5')} or ${m('x = −8')}. A width cannot be
      negative, so the rectangle is ${m('5 m')} by ${m('8 m')}.</p>
      <p><b>Consecutive numbers.</b> Two consecutive whole numbers have product 156. Let them be
      ${m('x')} and ${m('x + 1')}: ${m('x<sup>2</sup> + x − 156 = 0')}, so ${m('x = 12')} or
      ${m('x = −13')}. Both are valid here — 12 and 13, or ${m('−13')} and ${m('−12')}.</p>
      <p><b>Speed.</b> Distance is ${m('s = vt')}, so a change of speed on a fixed distance gives a
      fractional equation that clears to a quadratic.</p>
      <p><b>Pythagoras.</b> A right triangle with one leg ${m('x')} and the other ${m('x + 7')} and
      hypotenuse 13: ${m('x<sup>2</sup> + (x + 7)<sup>2</sup> = 169')}.</p>`
    },
    {
      h: 'A worked speed problem',
      html: `<p>A cyclist covers 60 km. If the speed were 5 km/h greater, the journey would take one hour
      less. Find the speed.</p>
      <p>Let the speed be ${m('x')} km/h, ${m('x > 0')}. The times are ${m(f('60', 'x'))} and
      ${m(f('60', 'x + 5'))}, and the first is one hour longer:</p>
      ${eq(m(f('60', 'x') + ' − ' + f('60', 'x + 5') + ' = 1'), true)}
      ${eq(m('60(x + 5) − 60x = x(x + 5)'))}
      ${eq(m('300 = x<sup>2</sup> + 5x ⟹ x<sup>2</sup> + 5x − 300 = 0'))}
      ${eq(m('x = 15') + ' or ' + m('x = −20') + ' — a speed cannot be negative')}
      <p>The speed is ${m('15 km/h')}.</p>`
    }
  ],
  examples: [
    {
      q: 'A rectangle is 3 m longer than it is wide and has area 40 m². Find its dimensions.',
      steps: [
        ['Let the width be ' + m('x') + ' m; the length is ' + m('x + 3') + ' m.', ''],
        [m('x(x + 3) = 40'), 'Area.'],
        [m('x<sup>2</sup> + 3x − 40 = 0'), ''],
        [m('x = 5') + ' or ' + m('x = −8'), ''],
        ['A width cannot be negative, so ' + m('x = 5') + '.', 'Reject the other root.']
      ],
      ans: m('5 m') + ' by ' + m('8 m')
    },
    {
      q: 'The product of two consecutive whole numbers is 156. Find them.',
      steps: [
        ['Let them be ' + m('x') + ' and ' + m('x + 1') + '.', ''],
        [m('x(x + 1) = 156'), ''],
        [m('x<sup>2</sup> + x − 156 = 0'), ''],
        [m('x = 12') + ' or ' + m('x = −13'), 'Both give whole numbers here.']
      ],
      ans: m('12') + ' and ' + m('13') + ', or ' + m('−13') + ' and ' + m('−12')
    },
    {
      q: 'A cyclist covers 60 km. Riding 5 km/h faster would save an hour. Find the speed.',
      steps: [
        ['Let the speed be ' + m('x') + ' km/h.', ''],
        [m(f('60', 'x') + ' − ' + f('60', 'x + 5') + ' = 1'), 'The time saved.'],
        [m('x<sup>2</sup> + 5x − 300 = 0'), 'Multiply by ' + m('x(x + 5)') + '.'],
        [m('x = 15') + ' or ' + m('x = −20'), 'Reject the negative speed.']
      ],
      ans: m('15 km/h')
    }
  ],
  modelNote: 'Write the equation on the board and let the model show which root the graph gives.',
  interactive: { type: 'quadratic', title: 'The equation behind the problem' },
  quiz: [
    { q: 'A rectangle has width ' + m('x') + ' and length ' + m('x + 4') + ' and area 45. The equation is:', a: [m('2x + 4 = 45'), m('x(x + 4) = 45'), m('x + 4 = 45'), m('x<sup>2</sup> = 45')], c: 1, why: 'Area is width × length.' },
    { q: 'A length comes out as ' + m('x = −6') + ' or ' + m('x = 4') + '. You should:', a: ['take both', 'take −6', 'take 4 and reject −6', 'start again'], c: 2, why: 'A length cannot be negative.' },
    { q: 'Two consecutive numbers are written as:', a: [m('x') + ' and ' + m('2x'), m('x') + ' and ' + m('x + 1'), m('x') + ' and ' + m('x + 2'), m('x') + ' and ' + m('x<sup>2</sup>')], c: 1, why: 'Consecutive whole numbers differ by 1.' },
    { q: 'Time equals:', a: [m('distance × speed'), m(f('distance', 'speed')), m(f('speed', 'distance')), m('distance + speed')], c: 1, why: 'From s = vt, rearranged.' }
  ],
  practice: {
    easy: [
      [m('A square has area 81 cm². Find its side.'), m('9 cm')],
      [m('A number squared is 49. Find it, given it is positive.'), m('7')],
      [m('Two consecutive numbers have product 20. Find them.'), m('4') + ' and ' + m('5') + ' (or ' + m('−5') + ' and ' + m('−4') + ')'],
      [m('A rectangle is 2 m longer than wide, area 24 m². Write the equation.'), m('x(x + 2) = 24')],
      [m('Solve that equation.'), m('x = 4') + ', so ' + m('4 m × 6 m')],
      [m('A number added to its square gives 12. Find the positive number.'), m('3')],
      [m('The area of a square is 144. Find the perimeter.'), m('48')]
    ],
    med: [
      [m('A rectangle is 3 m longer than wide and has area 40 m². Find its dimensions.'), m('5 m × 8 m')],
      [m('The product of two consecutive whole numbers is 156. Find them.'), m('12') + ' and ' + m('13')],
      [m('A right triangle has legs x and x + 7 and hypotenuse 13. Find the legs.'), m('5') + ' and ' + m('12')],
      [m('A number is 3 less than its square. Find both values.'), m('x<sup>2</sup> − x − 3 = 0') + ': ' + m('x = ' + f('1 ± ' + sr('13'), '2'))],
      [m('The sum of a number and its reciprocal is 2.5. Find the number.'), m('x = 2') + ' or ' + m('x = 0.5')],
      [m('A rectangle has perimeter 26 cm and area 40 cm². Find its sides.'), m('5 cm') + ' and ' + m('8 cm')],
      [m('Two consecutive even numbers have product 168. Find them.'), m('12') + ' and ' + m('14')]
    ],
    hard: [
      [m('A cyclist covers 60 km. Riding 5 km/h faster would save an hour. Find the speed.'), m('15 km/h')],
      [m('A train covers 240 km. Going 20 km/h faster would save one hour. Find the speed.'), m('x<sup>2</sup> + 20x − 4800 = 0') + ': ' + m('60 km/h')],
      [m('A rectangular garden 20 m by 15 m has a path of uniform width around it, doubling the area. Find the width.'), m('(20 + 2w)(15 + 2w) = 600') + ': ' + m('w = 2.5 m')],
      [m('The sum of the squares of two consecutive whole numbers is 313. Find them.'), m('x<sup>2</sup> + (x + 1)<sup>2</sup> = 313') + ': ' + m('12') + ' and ' + m('13')],
      [m('A stone is thrown up and its height is h = 20t − 5t². When is it 15 m high?'), m('5t<sup>2</sup> − 20t + 15 = 0') + ': at ' + m('t = 1 s') + ' going up and ' + m('t = 3 s') + ' coming down.'],
      [m('Two workers together finish a job in 6 days. Alone, one takes 5 days longer than the other. Find both times.'), m(f('1', 'x') + ' + ' + f('1', 'x + 5') + ' = ' + f('1', '6')) + ': ' + m('10') + ' and ' + m('15') + ' days.'],
      [m('The area of a triangle is 30 cm² and its height is 7 cm more than its base. Find the base.'), m('½x(x + 7) = 30') + ': ' + m('x = 5 cm')]
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, Chapter III, pp. 153–158. Always say which root you reject and why.',
  homework: [
    m('A rectangle is 5 cm longer than wide and has area 84 cm². Find its dimensions.'),
    m('Two consecutive whole numbers have product 342. Find them.'),
    m('A right triangle has legs x and x + 2 and hypotenuse 10. Find the legs.'),
    m('A car covers 180 km. Going 10 km/h faster would save half an hour. Find the speed.'),
    m('The sum of a number and its square is 56. Find both values.'),
    m('A rectangle has perimeter 34 m and area 60 m². Find its sides.')
  ]
});

/* ============================== 33 ============================== */
G8_ALG.push({
  id: 'alg-33', stream: 'alg', grade: 8, quarter: 3, lessons: '74–76', hours: 3,
  title: 'Compound percentages, simultaneous equations and quadratic graphs',
  subtitle: 'The national “practical and interdisciplinary” lessons, carrying three Cambridge Stage 9 topics the programme does not otherwise reach.',
  uz: 'Algebra 8, practical problems', uzPage: 'pp. 159–164',
  cam: 'Stage 9 · 3.3, 4.2, 10.2  [Cambridge insert]', camPage: 'Learner’s Book pp. 66–73, 91–95, 218–224', wb: 'Workbook 3.3, 4.2, 10.2',
  objectives: [
    'Calculate repeated percentage change with a multiplier.',
    'Solve a pair of simultaneous linear equations by substitution and by elimination.',
    'Plot the graph of a quadratic and read its roots and vertex.',
    'Apply all three to practical situations.'
  ],
  terms: [
    ['Compound percentage', 'Murakkab foiz', 'Сложный процент'],
    ['Multiplier', 'Ko‘paytiruvchi', 'Множитель'],
    ['Increase / decrease', 'Ortish / kamayish', 'Увеличение / уменьшение'],
    ['Simultaneous equations', 'Tenglamalar sistemasi', 'Система уравнений'],
    ['Substitution method', 'O‘rniga qo‘yish usuli', 'Метод подстановки'],
    ['Elimination method', 'Qo‘shish usuli', 'Метод сложения'],
    ['Table of values', 'Qiymatlar jadvali', 'Таблица значений'],
    ['Vertex of a parabola', 'Parabola uchi', 'Вершина параболы'],
    ['Axis of symmetry', 'Simmetriya o‘qi', 'Ось симметрии']
  ],
  timing: [[15, 'Warm-up'], [36, 'Explanation'], [24, 'Interactive'], [39, 'Practice'], [6, 'Homework']],
  sections: [
    {
      h: 'Lesson 74 — compound percentage change',
      html: `<div class="keybox"><div class="klabel">The multiplier</div>
      An increase of ${m('p%')} multiplies by ${m('1 + ' + f('p', '100'))}; a decrease multiplies by
      ${m('1 − ' + f('p', '100'))}. For ${m('n')} repetitions, raise the multiplier to the power
      ${m('n')}:
      ${eq(m('final = initial × (multiplier)<sup>n</sup>'))}</div>
      <p>A salary of 2 000 000 so‘m rising 8% a year for 3 years:
      ${m('2 000 000 × 1.08<sup>3</sup> ≈ 2 519 424')}.</p>
      <div class="warn"><span class="wl">Not the same as adding the percentages</span>
      Three years at 8% is <b>not</b> 24%. It is ${m('1.08<sup>3</sup> ≈ 1.2597')}, that is
      ${m('25.97%')} — the extra comes from the growth compounding on itself.</div>
      <p>A 20% rise followed by a 20% fall is ${m('1.2 × 0.8 = 0.96')} — a 4% <b>loss</b>, not a return to
      the start. This is the single most useful fact in the topic.</p>`
    },
    {
      h: 'Lesson 75 — simultaneous equations',
      html: `<p><b>Substitution.</b> Make one unknown the subject of one equation and put it into the
      other.</p>
      ${eq(m('y = 2x + 1') + ' and ' + m('3x + y = 11') + ' ⟹ ' + m('3x + 2x + 1 = 11') + ' ⟹ ' + m('x = 2, y = 5'), true)}
      <p><b>Elimination.</b> Add or subtract the equations so that one unknown disappears — multiplying
      one or both first if you need matching coefficients.</p>
      ${eq(m('2x + 3y = 12') + ' and ' + m('2x − y = 4') + ': subtract ⟹ ' + m('4y = 8') + ' ⟹ ' + m('y = 2, x = 3'), true)}
      <p><b>Graphically</b> the solution is where the two lines cross. Parallel lines mean no solution;
      the same line twice means infinitely many.</p>
      <p>Always <b>check in both equations</b> — a pair that satisfies only one is not a solution.</p>`
    },
    {
      h: 'Lesson 76 — the graph of a quadratic',
      html: `<p>To draw ${m('y = ax<sup>2</sup> + bx + c')}, build a table of values, plot, and join with a
      smooth curve — never with straight segments.</p>
      {{fig:parabola:The parabola crosses the x-axis at the roots and turns at the vertex.}}
      <div class="keybox"><div class="klabel">What to read off the graph</div>
      <ul style="margin:0">
        <li><b>Roots</b> — where the curve meets the ${m('x')}-axis.</li>
        <li><b>y-intercept</b> — the value ${m('c')}.</li>
        <li><b>Axis of symmetry</b> — the vertical line ${m('x = −' + f('b', '2a'))}.</li>
        <li><b>Vertex</b> — on that line; the lowest point if ${m('a > 0')}, the highest if ${m('a < 0')}.</li>
      </ul></div>
      <p>${m('a > 0')} gives a curve opening upwards (a “valley”); ${m('a < 0')} opens downwards (a
      “hill”). The graph is a picture of everything the discriminant told you.</p>`
    }
  ],
  examples: [
    {
      q: 'A population of 50 000 grows 3% a year. Find it after 4 years.',
      steps: [
        [m('multiplier = 1.03'), 'A 3% increase.'],
        [m('50 000 × 1.03<sup>4</sup>'), 'Four years.'],
        [m('= 50 000 × 1.1255'), ''],
        [m('≈ 56 275'), '']
      ],
      ans: m('≈ 56 300') + ' people'
    },
    {
      q: m('Solve 3x + 2y = 16 and x − y = 3'),
      steps: [
        [m('x = y + 3'), 'Make x the subject of the second.'],
        [m('3(y + 3) + 2y = 16'), 'Substitute.'],
        [m('5y = 7, y = 1.4'), ''],
        [m('x = 4.4'), 'Check: ' + m('3(4.4) + 2(1.4) = 16') + ' ✓']
      ],
      ans: m('x = 4.4, y = 1.4')
    },
    {
      q: m('For y = x<sup>2</sup> − 2x − 3, find the roots, the y-intercept and the vertex.'),
      steps: [
        [m('x<sup>2</sup> − 2x − 3 = 0 ⟹ (x − 3)(x + 1) = 0'), 'Roots ' + m('3') + ' and ' + m('−1') + '.'],
        [m('y-intercept: c = −3'), 'Put ' + m('x = 0') + '.'],
        [m('axis: x = −' + f('−2', '2') + ' = 1'), ''],
        [m('y = 1 − 2 − 3 = −4'), 'Vertex ' + m('(1; −4)') + '.']
      ],
      ans: 'Roots ' + m('−1, 3') + '; intercept ' + m('−3') + '; vertex ' + m('(1; −4)')
    }
  ],
  modelNote: 'Change a, b and c and let the class predict the vertex before the readout shows it.',
  interactive: { type: 'quadratic', title: 'Reading a parabola' },
  quiz: [
    { q: 'A 10% rise then a 10% fall leaves you with:', a: ['the same', '1% more', '1% less', '10% less'], c: 2, why: '1.1 × 0.9 = 0.99.' },
    { q: 'Three years at 5% multiplies by:', a: [m('1.15'), m('1.05<sup>3</sup>'), m('3 × 1.05'), m('0.95<sup>3</sup>')], c: 1, why: 'Each year multiplies again.' },
    { q: 'The axis of symmetry of ' + m('y = x<sup>2</sup> − 6x + 5') + ' is:', a: [m('x = 3'), m('x = −3'), m('x = 6'), m('x = 5')], c: 0, why: 'x = −b/2a = 6/2 = 3.' },
    { q: 'Two simultaneous equations whose lines are parallel have:', a: ['one solution', 'no solution', 'two solutions', 'infinitely many'], c: 1, why: 'Parallel lines never cross.' }
  ],
  practice: {
    easy: [
      [m('Increase 200 by 10%'), m('220')],
      [m('Decrease 200 by 10%'), m('180')],
      [m('Write the multiplier for a 7% increase'), m('1.07')],
      [m('Write the multiplier for a 15% decrease'), m('0.85')],
      [m('Solve x + y = 7 and x − y = 1'), m('x = 4, y = 3')],
      [m('Solve y = 2x and x + y = 9'), m('x = 3, y = 6')],
      [m('Find the y-intercept of y = x<sup>2</sup> + 3x − 4'), m('−4')]
    ],
    med: [
      [m('A population of 50 000 grows 3% a year. Find it after 4 years.'), m('≈ 56 300')],
      [m('A car worth 30 000 000 so‘m loses 12% a year. Find its value after 3 years.'), m('≈ 20 440 000')],
      [m('A 20% rise is followed by a 20% fall. Find the overall change.'), m('4%') + ' decrease'],
      [m('Solve 3x + 2y = 16 and x − y = 3'), m('x = 4.4, y = 1.4')],
      [m('Solve 2x + 3y = 12 and 2x − y = 4'), m('x = 3, y = 2')],
      [m('Find the roots and vertex of y = x<sup>2</sup> − 2x − 3'), 'Roots ' + m('−1, 3') + '; vertex ' + m('(1; −4)')],
      [m('Find the axis of symmetry of y = 2x<sup>2</sup> − 8x + 1'), m('x = 2')]
    ],
    hard: [
      [m('A sum grows to 1.331 times its value in 3 years at a constant rate. Find the rate.'), m('r<sup>3</sup> = 1.331') + ', so ' + m('r = 1.1') + ' — 10% a year.'],
      [m('A price falls 25% then rises 25%. Find the overall change.'), m('0.75 × 1.25 = 0.9375') + ' — a 6.25% loss.'],
      [m('Solve 4x − 3y = 11 and 3x + 2y = 4'), m('x = 2, y = −1')],
      [m('Two numbers add to 30 and differ by 8. Find them, using simultaneous equations.'), m('19') + ' and ' + m('11')],
      [m('Sketch y = −x<sup>2</sup> + 4x and give its roots and vertex.'), 'Roots ' + m('0') + ' and ' + m('4') + '; vertex ' + m('(2; 4)') + '; opens downwards.'],
      [m('For which values of c does y = x<sup>2</sup> − 4x + c touch the x-axis?'), m('D = 0') + ' gives ' + m('c = 4') + '.'],
      [m('A shop raises a price by 10% each year for 2 years, then cuts it by 21%. Show the price returns to the start.'), m('1.1<sup>2</sup> × 0.79 = 1.21 × 0.79 ≈ 0.956') + ' — close, but a 4.4% loss; an exact return needs a cut of ' + m('17.36%') + '.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, pp. 159–164, and Cambridge Learner’s Book 3.3, 4.2, 10.2.',
  homework: [
    m('A town of 80 000 grows 2% a year. Find its population after 5 years.'),
    m('A machine worth 12 000 000 so‘m loses 15% a year. Find its value after 4 years.'),
    m('Solve 5x + 2y = 21 and 3x − y = 4'),
    m('Solve 2x + y = 10 and x − 3y = −9'),
    m('Draw the graph of y = x<sup>2</sup> − 4x + 3 for x from −1 to 5, and read off the roots.'),
    m('Find the vertex and the axis of symmetry of y = x<sup>2</sup> + 6x + 5')
  ]
});

/* ============================== 34 ============================== */
G8_ALG.push({
  id: 'alg-34', stream: 'alg', grade: 8, quarter: 3, lessons: '77–78', hours: 2,
  title: 'Control work 6 · Quadratic equations',
  subtitle: 'The Chapter III assessment, and the four errors it produces every year.',
  uz: 'Algebra 8, Chapter III', uzPage: 'Revision of Chapter III',
  cam: 'Stage 9 · 4.1', camPage: 'Learner’s Book pp. 84–95', wb: 'Workbook 4.1',
  objectives: [
    'Assess incomplete equations, the discriminant, the formula, Vieta and word problems.',
    'Diagnose each lost mark by error type.',
    'Re-solve every task that was lost.'
  ],
  timing: [[4, 'Setting up'], [72, 'The paper'], [4, 'Collect in']],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Work on mistakes', 'Xatolar ustida ishlash', 'Работа над ошибками'],
    ['Discriminant', 'Diskriminant', 'Дискриминант'],
    ['Root', 'Ildiz', 'Корень'],
    ['Reject', 'Rad etish', 'Отбросить'],
    ['Check by substitution', 'O‘rniga qo‘yib tekshirish', 'Проверка подстановкой'],
    ['Word problem', 'Matnli masala', 'Текстовая задача']
  ],
  sections: [
    {
      h: 'Lesson 77 — the paper (40 minutes)',
      html: `<p>Two variants of seven tasks, 2 marks each:</p>
      <ul>
        <li>task 1 · an incomplete quadratic</li>
        <li>task 2 · solve by factorising</li>
        <li>task 3 · find D and say how many roots</li>
        <li>task 4 · solve with the formula</li>
        <li>task 5 · Vieta — find a missing coefficient or root</li>
        <li>task 6 · a biquadratic equation</li>
        <li>task 7 · a word problem</li>
      </ul>
      <p><b>Marking note:</b> task 7 loses a mark if the impossible root is not rejected in writing.</p>`
    },
    {
      h: 'Lesson 78 — work on mistakes (40 minutes)',
      html: `<div class="keybox"><div class="klabel">The four errors this paper produces</div>
      <ol style="margin:0">
        <li><b>Sign slips in D</b> — writing ${m('−4ac')} as negative when ${m('c')} is already negative.</li>
        <li><b>Dividing by x</b>, losing the root ${m('x = 0')}.</li>
        <li><b>Negative t kept</b> in a biquadratic, producing imaginary “roots”.</li>
        <li><b>The impossible root not rejected</b> in a word problem.</li>
      </ol></div>`
    }
  ],
  examples: [
    {
      q: 'Find the error: for ' + m('x<sup>2</sup> − 2x − 3 = 0') + ', ' + m('D = 4 − 12 = −8'),
      steps: [
        [m('c = −3') + ', so ' + m('−4ac = −4 · 1 · (−3) = +12') + '.', 'Two minus signs make a plus.'],
        [m('D = 4 + 12 = 16'), ''],
        [m('x = ' + f('2 ± 4', '2') + ' = 3') + ' or ' + m('−1'), '']
      ],
      ans: m('D = 16') + ', roots ' + m('3') + ' and ' + m('−1')
    },
    {
      q: 'Find the error: ' + m('x<sup>2</sup> = 4x') + ', so ' + m('x = 4'),
      steps: [
        ['Both sides were divided by ' + m('x') + ' — which may be zero.', ''],
        [m('x<sup>2</sup> − 4x = 0 ⟹ x(x − 4) = 0'), 'Factorise instead.'],
        [m('x = 0') + ' or ' + m('x = 4'), 'The root 0 was lost.']
      ],
      ans: m('x = 0, x = 4')
    }
  ],
  modelNote: 'Show the wrong working, take a vote on the error type, then reveal.',
  interactive: {
    type: 'fractionCancel',
    title: 'Diagnose the error',
    hint: 'Which of the four errors is this?',
    items: [
      {
        title: 'Error 1 — sign slip in D',
        start: '<b>Claimed:</b> for ' + m('x<sup>2</sup> − 2x − 3 = 0') + ', ' + m('D = 4 − 12 = −8'),
        steps: [
          [m('a = 1, b = −2, c = −3'), 'Read the signs off carefully.'],
          [m('−4ac = −4 · 1 · (−3) = +12'), 'The two minus signs cancel.'],
          [m('D = 4 + 12 = 16 > 0'), 'Two roots, not none.'],
          [m('x = 3') + ' or ' + m('x = −1'), '']
        ],
        answer: m('D = 16') + ', roots ' + m('3') + ' and ' + m('−1')
      },
      {
        title: 'Error 2 — divided by x',
        start: '<b>Claimed:</b> ' + m('x<sup>2</sup> = 4x ⟹ x = 4'),
        steps: [
          ['You may divide only by something known to be non-zero.', m('x') + ' might be 0.'],
          [m('x<sup>2</sup> − 4x = 0'), 'Move everything to one side.'],
          [m('x(x − 4) = 0'), ''],
          [m('x = 0') + ' or ' + m('x = 4'), 'Two roots.']
        ],
        answer: m('x = 0, x = 4')
      },
      {
        title: 'Error 3 — negative t kept',
        start: '<b>Claimed:</b> ' + m('x<sup>4</sup> + 3x<sup>2</sup> − 4 = 0') + ' gives ' + m('x = ±1, ±2'),
        steps: [
          [m('t<sup>2</sup> + 3t − 4 = 0') + ' gives ' + m('t = 1') + ' or ' + m('t = −4') + '.', ''],
          [m('t = x<sup>2</sup> ≥ 0') + ', so ' + m('t = −4') + ' must be rejected.', 'That is where the ±2 came from.'],
          [m('x<sup>2</sup> = 1 ⟹ x = ±1'), 'Two roots only.']
        ],
        answer: m('x = ±1')
      },
      {
        title: 'Error 4 — impossible root kept',
        start: '<b>Claimed:</b> a rectangle of area 40 with length 3 more than width has width ' + m('5') + ' or ' + m('−8'),
        steps: [
          ['The algebra is right: ' + m('x<sup>2</sup> + 3x − 40 = 0') + ' gives both.', ''],
          ['But a width cannot be negative.', ''],
          ['State the rejection: “' + m('x = −8') + ' is impossible as a length”.', 'That sentence carries a mark.'],
          ['Width ' + m('5 m') + ', length ' + m('8 m') + '.', '']
        ],
        answer: m('5 m') + ' by ' + m('8 m')
      }
    ]
  },
  quiz: [
    { q: 'For ' + m('x<sup>2</sup> − 2x − 3 = 0') + ', D is:', a: [m('−8'), m('16'), m('4'), m('−4')], c: 1, why: '4 − 4(1)(−3) = 4 + 12 = 16.' },
    { q: m('x<sup>2</sup> = 4x') + ' has roots:', a: [m('x = 4'), m('x = 0, 4'), m('x = ±2'), m('x = 0')], c: 1, why: 'Factorise; never divide by x.' },
    { q: 'In a biquadratic, ' + m('t = −4') + ' gives:', a: [m('x = ±2'), 'no real x', m('x = 2'), m('x = −2')], c: 1, why: 'A square is never negative.' },
    { q: 'A width comes out as ' + m('5') + ' or ' + m('−8') + '. The answer is:', a: ['both', m('−8'), m('5') + ', rejecting ' + m('−8'), 'neither'], c: 2, why: 'A length must be positive, and the rejection must be stated.' }
  ],
  practice: {
    easy: [
      [m('<b>Variant 1, task 1.</b> Solve x<sup>2</sup> − 36 = 0'), m('x = ±6')],
      [m('<b>Task 2.</b> Solve x<sup>2</sup> − 6x + 8 = 0'), m('x = 2, x = 4')],
      [m('<b>Task 3.</b> Find D for x<sup>2</sup> + 2x + 5 = 0 and say how many roots.'), m('D = −16') + ', none'],
      [m('<b>Task 4.</b> Solve 2x<sup>2</sup> − 5x + 2 = 0'), m('x = 2, x = 0.5')],
      [m('<b>Task 5.</b> One root of x<sup>2</sup> + bx − 12 = 0 is 4. Find b.'), 'other root ' + m('−3') + ', ' + m('b = −1')],
      [m('<b>Task 6.</b> Solve x<sup>4</sup> − 5x<sup>2</sup> + 4 = 0'), m('x = ±1, ±2')],
      [m('<b>Task 7.</b> A rectangle is 2 m longer than wide, area 35 m². Find its sides.'), m('5 m × 7 m')]
    ],
    med: [
      [m('<b>Variant 2, task 1.</b> Solve 3x<sup>2</sup> − 12x = 0'), m('x = 0, x = 4')],
      [m('<b>Task 2.</b> Solve x<sup>2</sup> + x − 20 = 0'), m('x = 4, x = −5')],
      [m('<b>Task 3.</b> Find D for 2x<sup>2</sup> − 4x + 2 = 0 and say how many roots.'), m('D = 0') + ', one'],
      [m('<b>Task 4.</b> Solve 3x<sup>2</sup> + 5x − 2 = 0'), m('x = ' + f('1', '3') + ', x = −2')],
      [m('<b>Task 5.</b> The roots of x<sup>2</sup> + px + q = 0 are 2 and −7. Find p and q.'), m('p = 5, q = −14')],
      [m('<b>Task 6.</b> Solve x<sup>4</sup> − 10x<sup>2</sup> + 9 = 0'), m('x = ±1, ±3')],
      [m('<b>Task 7.</b> Two consecutive whole numbers have product 210. Find them.'), m('14') + ' and ' + m('15')]
    ],
    hard: [
      [m('Find the error: for x<sup>2</sup> − 2x − 3 = 0, D = 4 − 12 = −8'), m('−4ac = +12') + '; correct ' + m('D = 16') + ', roots ' + m('3, −1') + '.'],
      [m('Find the error: x<sup>2</sup> = 4x, so x = 4'), 'Dividing by ' + m('x') + ' lost the root ' + m('0') + '.'],
      [m('Find the error: x<sup>4</sup> + 3x<sup>2</sup> − 4 = 0 gives x = ±1, ±2'), m('t = −4') + ' must be rejected; only ' + m('x = ±1') + '.'],
      [m('Find the error: a width comes out 5 or −8, answer “5 and −8”'), 'A length cannot be negative — the rejection must be stated.'],
      [m('Find the error: “x<sup>2</sup> = 16, so x = 4”'), 'The negative root was lost: ' + m('x = ±4') + '.'],
      [m('Find the error: “(x − 1)(x − 4) = 6, so x − 1 = 6 or x − 4 = 6”'), 'The zero product rule needs a zero on the right; expand and re-solve.'],
      [m('Find the error: “D = 25, so x = ' + f('−b ± 25', '2a') + '”'), 'The formula uses ' + m(sr('D') + ' = 5') + ', not ' + m('D') + ' itself.']
    ]
  },
  hwTitle: 'After the work-on-mistakes lesson',
  hwNote: 'Re-solve every task you lost marks on. Quarter IV opens with statistics.',
  homework: [
    m('Solve 2x<sup>2</sup> − 7x − 4 = 0'),
    m('Solve x<sup>4</sup> − 13x<sup>2</sup> + 36 = 0'),
    m('One root of x<sup>2</sup> + bx + 15 = 0 is 5. Find b and the other root.'),
    m('A rectangle is 4 cm longer than wide and has area 96 cm². Find its sides.'),
    'Write out the four errors from this lesson with one example each.'
  ]
});

/* ==================================================================
   QUARTER IV · 24 hours
   Algebra 8, Chapter IV (data and combinatorics) + Cambridge revision block
   ================================================================== */

/* ============================== 35 ============================== */
G8_ALG.push({
  id: 'alg-35', stream: 'alg', grade: 8, quarter: 4, lessons: '79–80', hours: 2,
  title: 'Data analysis and the representation of data',
  subtitle: 'Collecting numbers is the easy part — this lesson is about turning them into a picture that tells the truth.',
  uz: 'Algebra 8, Chapter IV §26', uzPage: 'Chapter IV, pp. 165–172',
  cam: 'Stage 9 · 6.1, 15.1, 15.5', camPage: 'Learner’s Book pp. 129–137, 318–330', wb: 'Workbook 6.1, 15.1',
  objectives: [
    'Collect data and organise it in a frequency table.',
    'Choose a suitable chart for a given kind of data.',
    'Draw and read a frequency polygon.',
    'Recognise a misleading graph.'
  ],
  terms: [
    ['Data', 'Ma’lumotlar', 'Данные'],
    ['Frequency', 'Chastota', 'Частота'],
    ['Frequency table', 'Chastotalar jadvali', 'Таблица частот'],
    ['Class (interval)', 'Sinf (oraliq)', 'Класс (интервал)'],
    ['Bar chart', 'Ustunli diagramma', 'Столбчатая диаграмма'],
    ['Pie chart', 'Doiraviy diagramma', 'Круговая диаграмма'],
    ['Frequency polygon', 'Chastotalar ko‘pburchagi', 'Полигон частот'],
    ['Sample', 'Tanlanma', 'Выборка'],
    ['Bias', 'Nomutanosiblik', 'Смещение (необъективность)'],
    ['Misleading graph', 'Chalg‘ituvchi grafik', 'Вводящий в заблуждение график']
  ],
  timing: [[10, 'Warm-up'], [24, 'Explanation'], [16, 'Interactive'], [26, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'From raw numbers to a table',
      html: `<p>A list of 40 test marks tells you nothing at a glance. A <b>frequency table</b> does.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Mark</th><th>0–10</th><th>10–20</th><th>20–30</th><th>30–40</th><th>40–50</th></tr></thead>
      <tbody><tr><td><b>Frequency</b></td><td>2</td><td>5</td><td>8</td><td>6</td><td>3</td></tr></tbody>
      </table></div>
      <p>The groups are <b>classes</b>. Keep them equal in width, and say clearly which end belongs where
      — “10–20” usually means ${m('10 ≤ x < 20')}.</p>
      <div class="keybox"><div class="klabel">Sampling</div>
      When you cannot ask everybody, you ask a <b>sample</b>. A good sample is large enough and chosen
      at random. Asking only your friends, or only people outside a sports hall, produces <b>bias</b> —
      the answer is wrong before any arithmetic starts.</div>`
    },
    {
      h: 'Which chart?',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Chart</th><th>Use it for</th><th>Watch out for</th></tr></thead>
      <tbody>
        <tr><td>Bar chart</td><td>comparing separate categories</td><td>bars must be equal width</td></tr>
        <tr><td>Pie chart</td><td>showing parts of one whole</td><td>useless for comparing two different totals</td></tr>
        <tr><td>Line graph</td><td>change over time</td><td>only for continuous data</td></tr>
        <tr><td>Frequency polygon</td><td>the shape of a grouped distribution</td><td>plot at the class midpoint</td></tr>
      </tbody></table></div>
      {{fig:frequencyPolygon:A frequency polygon: plot each frequency above the midpoint of its class, then join the points with straight lines.}}
      <p>The polygon shows the <b>shape</b> of the distribution — where the bulk of the data sits, and
      whether it leans to one side.</p>`
    },
    {
      h: 'Misleading graphs',
      html: `<div class="warn"><span class="wl">Three tricks to look for</span>
      <ol style="margin:.4em 0 0">
        <li><b>A vertical axis that does not start at zero</b> — small differences look enormous.</li>
        <li><b>Unequal class widths</b> drawn as equal bars.</li>
        <li><b>Pictures scaled in two directions</b> — doubling the height and the width multiplies the
        apparent size by four, not two.</li>
      </ol></div>
      <p>Ask of every graph: what is on each axis, where does the scale start, and does the picture
      match the numbers?</p>`
    }
  ],
  examples: [
    {
      q: 'Twenty marks are: 5, 12, 18, 23, 25, 27, 29, 31, 33, 34, 36, 38, 41, 44, 8, 15, 22, 26, 30, 35. Make a frequency table with classes of width 10.',
      steps: [
        [m('0–10: 5, 8 → 2'), 'Tally each value into its class.'],
        [m('10–20: 12, 18, 15 → 3'), ''],
        [m('20–30: 23, 25, 27, 29, 22, 26 → 6'), ''],
        [m('30–40: 31, 33, 34, 36, 38, 30, 35 → 7'), ''],
        [m('40–50: 41, 44 → 2'), 'Total ' + m('2 + 3 + 6 + 7 + 2 = 20') + ' ✓']
      ],
      ans: m('2, 3, 6, 7, 2')
    },
    {
      q: 'Which chart suits “the number of learners choosing each of four sports”?',
      steps: [
        ['Four separate categories, not a time series.', ''],
        ['A bar chart compares categories directly.', ''],
        ['A pie chart also works if you want the share of the whole class.', 'But it hides the actual numbers.']
      ],
      ans: 'A bar chart (or a pie chart for proportions).'
    },
    {
      q: 'A graph shows sales rising from 98 to 102 with the axis starting at 96. Why is it misleading?',
      steps: [
        ['The rise is ' + m('4') + ' out of ' + m('98') + ' — about ' + m('4%') + '.', ''],
        ['With the axis starting at 96, the bar for 102 looks three times the bar for 98.', ''],
        ['Redrawing from zero shows the two bars almost equal.', '']
      ],
      ans: 'The truncated axis exaggerates a small change.'
    }
  ],
  modelNote: 'Change one value and watch which average moves — the mean always, the median sometimes, the mode rarely.',
  interactive: { type: 'averages', title: 'What the data looks like' },
  quiz: [
    { q: 'A frequency polygon is plotted at:', a: ['the class boundaries', 'the class midpoints', 'the largest value', 'zero'], c: 1, why: 'The midpoint represents the class.' },
    { q: 'A pie chart is best for:', a: ['change over time', 'parts of one whole', 'comparing two different totals', 'raw data'], c: 1, why: 'The whole circle is 100% of one thing.' },
    { q: 'Asking only your friends creates:', a: ['a large sample', 'bias', 'a frequency table', 'a fair sample'], c: 1, why: 'The sample is not representative of everyone.' },
    { q: 'A vertical axis starting at 96 instead of 0:', a: ['is always wrong', 'exaggerates small differences', 'hides large differences', 'makes no difference'], c: 1, why: 'It stretches the visible part of the scale.' }
  ],
  practice: {
    easy: [
      [m('What is the frequency of a value?'), 'How many times it occurs.'],
      [m('Marks 2, 5, 5, 7, 5. Find the frequency of 5.'), m('3')],
      [m('Which chart shows parts of a whole?'), 'A pie chart.'],
      [m('Which chart shows change over time?'), 'A line graph.'],
      [m('A class has 8, 12, 15, 5 learners in four groups. Find the total.'), m('40')],
      [m('In a frequency polygon, where is each point plotted?'), 'Above the midpoint of the class.'],
      [m('Class 20–30. Find its midpoint.'), m('25')]
    ],
    med: [
      [m('Marks 5, 12, 18, 23, 25, 27, 29, 31. Make classes of width 10 and give the frequencies.'), m('0–10: 1, 10–20: 2, 20–30: 4, 30–40: 1')],
      [m('Frequencies 3, 7, 10, 6, 4. Find the total and the modal class.'), m('30') + '; the third class'],
      [m('Which chart for “learners choosing each of four sports”?'), 'A bar chart.'],
      [m('A pie chart has 360°. What angle represents 25%?'), m('90°')],
      [m('A pie chart has 40 learners. What angle represents 10 of them?'), m('90°')],
      [m('Why is asking people outside a gym about exercise biased?'), 'They are far more likely to exercise than the general population.'],
      [m('Class midpoints 5, 15, 25, 35 with frequencies 2, 5, 8, 3. Which class is modal?'), m('20–30')]
    ],
    hard: [
      [m('A graph shows sales rising 98 → 102 with the axis from 96. Explain why it misleads.'), 'A 4% rise is drawn to look like a threefold one; the axis should start at 0.'],
      [m('A pie chart of 90 learners: one sector is 120°. How many learners is that?'), m(f('120', '360') + ' × 90 = 30')],
      [m('Frequencies 4, 9, 12, 7, 3 for classes of width 5 starting at 0. Draw the frequency polygon points.'), m('(2.5; 4), (7.5; 9), (12.5; 12), (17.5; 7), (22.5; 3)')],
      [m('A survey of 20 people finds 15 like a product. Is that enough to claim 75% of the town does?'), 'No — the sample is small and may not be random; the margin of uncertainty is large.'],
      [m('Two pie charts show 60% for one school of 100 and 60% for another of 1000. Are the sectors comparable?'), 'The angles are equal, but they represent 60 and 600 people — a pie chart hides the totals.'],
      [m('Explain why doubling both the width and the height of a picture symbol misleads.'), 'The area becomes four times as large, so the eye reads a fourfold increase.'],
      [m('Design a fair way to sample 50 learners from a school of 800.'), 'Number everyone 1–800 and choose 50 at random, or take a proportional number from each year group.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Algebra 8, Chapter IV, pp. 165–172, and Cambridge Learner’s Book 6.1.',
  homework: [
    m('Marks 3, 9, 14, 16, 21, 24, 25, 28, 31, 37. Make a frequency table with classes of width 10.'),
    m('Draw the frequency polygon for that table.'),
    m('A pie chart of 72 learners has a sector of 150°. How many learners is that?'),
    'Name a suitable chart for each: monthly temperature; favourite subject; share of a budget.',
    'Describe one way a graph in a newspaper could mislead, and how to check for it.'
  ]
});

/* ============================== 36 ============================== */
G8_ALG.push({
  id: 'alg-36', stream: 'alg', grade: 8, quarter: 4, lessons: '81–82', hours: 2,
  title: 'Mean, mode and median',
  subtitle: 'Three different answers to “what is a typical value?” — and the reason a country can have a rising average income and a falling typical one.',
  uz: 'Algebra 8, Chapter IV §27', uzPage: 'Chapter IV, pp. 173–180',
  cam: 'Stage 9 · 15.4', camPage: 'Learner’s Book pp. 331–338', wb: 'Workbook 15.4',
  objectives: [
    'Calculate the mean, the mode and the median of a list.',
    'Find the range.',
    'Estimate the mean of grouped data using midpoints.',
    'Choose the most suitable average for a given set.'
  ],
  terms: [
    ['Mean (average)', 'O‘rtacha arifmetik', 'Среднее арифметическое'],
    ['Mode', 'Moda', 'Мода'],
    ['Median', 'Mediana', 'Медиана'],
    ['Range', 'Kenglik (farq)', 'Размах'],
    ['Sorted order', 'O‘sish tartibida', 'В порядке возрастания'],
    ['Outlier', 'Chetlangan qiymat', 'Выброс'],
    ['Grouped data', 'Guruhlangan ma’lumotlar', 'Сгруппированные данные'],
    ['Midpoint of a class', 'Sinf o‘rtasi', 'Середина интервала'],
    ['Estimate', 'Baholash', 'Оценить']
  ],
  timing: [[10, 'Warm-up'], [24, 'Explanation'], [16, 'Interactive'], [26, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'The three averages',
      html: `<div class="keybox"><div class="klabel">Definitions</div>
      <ul style="margin:0">
        <li><b>Mean</b> — add everything and divide by how many:
        ${m('x̄ = ' + f('sum of values', 'number of values'))}.</li>
        <li><b>Mode</b> — the value that occurs most often. There may be none, or several.</li>
        <li><b>Median</b> — sort the values; the middle one. With an even count, the mean of the two
        middle ones.</li>
      </ul></div>
      <p>And the <b>range</b> = largest − smallest. It is not an average; it measures <b>spread</b>.</p>
      <p>For ${m('3, 5, 5, 6, 8, 9, 12')}: mean ${m(f('48', '7') + ' ≈ 6.9')}, mode ${m('5')},
      median ${m('6')}, range ${m('9')}.</p>
      <div class="warn"><span class="wl">Sort first, every time</span>
      The median of ${m('7, 2, 9')} is ${m('7')}, not ${m('2')}. Writing the list in order takes five
      seconds and prevents the commonest error in the topic.</div>`
    },
    {
      h: 'Which average to use',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Average</th><th>Good because</th><th>Bad because</th></tr></thead>
      <tbody>
        <tr><td>Mean</td><td>uses every value</td><td>one extreme value drags it a long way</td></tr>
        <tr><td>Median</td><td>ignores extremes</td><td>ignores most of the data</td></tr>
        <tr><td>Mode</td><td>the only one for categories</td><td>may not exist, or may be at one end</td></tr>
      </tbody></table></div>
      <p>Nine people earn 2 million and one earns 100 million. The <b>mean</b> is 11.8 million — a figure
      nobody earns. The <b>median</b> is 2 million, which describes the group honestly. A single
      <b>outlier</b> is exactly what the median is for.</p>`
    },
    {
      h: 'Grouped data',
      html: `<p>Once the raw values are lost in classes, the mean can only be <b>estimated</b>. Assume
      everything in a class sits at its <b>midpoint</b>:</p>
      ${eq(m('estimated mean = ' + f('Σ (midpoint × frequency)', 'Σ frequency')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Class</th><th>Midpoint</th><th>f</th><th>midpoint × f</th></tr></thead>
      <tbody>
        <tr><td>0–10</td><td>5</td><td>2</td><td>10</td></tr>
        <tr><td>10–20</td><td>15</td><td>5</td><td>75</td></tr>
        <tr><td>20–30</td><td>25</td><td>8</td><td>200</td></tr>
        <tr><td>30–40</td><td>35</td><td>6</td><td>210</td></tr>
        <tr><td>40–50</td><td>45</td><td>3</td><td>135</td></tr>
        <tr><td><b>Total</b></td><td></td><td><b>24</b></td><td><b>630</b></td></tr>
      </tbody></table></div>
      ${eq(m('estimated mean = ' + f('630', '24') + ' = 26.25'))}
      <p>The <b>modal class</b> is the one with the highest frequency — here 20–30.</p>`
    }
  ],
  examples: [
    {
      q: m('Find the mean, mode, median and range of 4, 7, 3, 7, 9, 2, 7.'),
      steps: [
        [m('sorted: 2, 3, 4, 7, 7, 7, 9'), 'Sort first.'],
        [m('mean = ' + f('39', '7') + ' ≈ 5.6'), ''],
        [m('mode = 7'), 'It appears three times.'],
        [m('median = 7'), 'The fourth of seven values.'],
        [m('range = 9 − 2 = 7'), '']
      ],
      ans: m('mean ≈ 5.6, mode 7, median 7, range 7')
    },
    {
      q: m('Find the median of 12, 5, 8, 20, 3, 11.'),
      steps: [
        [m('sorted: 3, 5, 8, 11, 12, 20'), 'Six values — even.'],
        ['The two middle ones are ' + m('8') + ' and ' + m('11') + '.', ''],
        [m('median = ' + f('8 + 11', '2') + ' = 9.5'), 'Their mean.']
      ],
      ans: m('9.5')
    },
    {
      q: 'Estimate the mean for classes 0–10, 10–20, 20–30 with frequencies 4, 10, 6.',
      steps: [
        [m('midpoints 5, 15, 25'), ''],
        [m('5·4 + 15·10 + 25·6 = 20 + 150 + 150 = 320'), ''],
        [m('total frequency = 20'), ''],
        [m(f('320', '20') + ' = 16'), '']
      ],
      ans: m('≈ 16')
    }
  ],
  modelNote: 'Push one value up to 14 and watch the mean move while the median stays still.',
  interactive: { type: 'averages' },
  quiz: [
    { q: 'The median of ' + m('7, 2, 9') + ' is:', a: [m('7'), m('2'), m('9'), m('6')], c: 0, why: 'Sorted: 2, 7, 9 — the middle one is 7.' },
    { q: 'One very large value most affects the:', a: ['mode', 'median', 'mean', 'range only'], c: 2, why: 'The mean uses every value, so an outlier drags it.' },
    { q: 'For grouped data the mean is estimated using:', a: ['the class boundaries', 'the class midpoints', 'the largest value', 'the frequencies alone'], c: 1, why: 'Each class is represented by its midpoint.' },
    { q: 'The range of ' + m('3, 5, 5, 12') + ' is:', a: [m('5'), m('9'), m('12'), m('6.25')], c: 1, why: '12 − 3 = 9.' }
  ],
  practice: {
    easy: [
      [m('Find the mean of 4, 6, 8'), m('6')],
      [m('Find the mode of 2, 3, 3, 5'), m('3')],
      [m('Find the median of 1, 4, 9'), m('4')],
      [m('Find the range of 2, 7, 11'), m('9')],
      [m('Find the mean of 10, 20, 30, 40'), m('25')],
      [m('Find the median of 3, 5, 7, 9'), m('6')],
      [m('Find the mode of 1, 2, 3, 4'), 'None.']
    ],
    med: [
      [m('Find the mean, mode, median and range of 4, 7, 3, 7, 9, 2, 7'), m('≈ 5.6, 7, 7, 7')],
      [m('Find the median of 12, 5, 8, 20, 3, 11'), m('9.5')],
      [m('The mean of five numbers is 12. Find their total.'), m('60')],
      [m('Four numbers have mean 9. A fifth is added and the mean becomes 10. Find it.'), m('50 − 36 = 14')],
      [m('Estimate the mean for classes 0–10, 10–20, 20–30 with frequencies 4, 10, 6.'), m('16')],
      [m('Find the modal class for frequencies 3, 9, 12, 5.'), 'The third class.'],
      [m('Nine people earn 2 and one earns 100 (millions). Find the mean and median.'), m('mean = 11.8') + ', ' + m('median = 2')]
    ],
    hard: [
      [m('The mean of 6 numbers is 15. One number, 20, is removed. Find the new mean.'), m(f('90 − 20', '5') + ' = 14')],
      [m('A set of 5 numbers has mean 8, median 7 and mode 6. Give a possible set.'), m('6, 6, 7, 10, 13') + ' — mean 8.4; adjust to ' + m('6, 6, 7, 9, 12') + ' (mean 8) ✓'],
      [m('Estimate the mean for classes 0–20, 20–40, 40–60 with frequencies 5, 12, 3.'), m(f('10·5 + 30·12 + 50·3', '20') + ' = ' + f('560', '20') + ' = 28')],
      [m('Why is the median better than the mean for house prices?'), 'A few very expensive houses drag the mean far above what a typical house costs.'],
      [m('The mean of 10 numbers is 6. Adding an eleventh makes the mean 6.5. Find it.'), m('71.5 − 60 = 11.5')],
      [m('A test has mean 60 for 20 boys and 70 for 30 girls. Find the mean for all 50.'), m(f('1200 + 2100', '50') + ' = 66')],
      [m('Can the mean, median and mode all be different? Give an example.'), 'Yes — ' + m('1, 2, 2, 5, 10') + ': mean 4, median 2, mode 2. Try ' + m('1, 2, 2, 6, 14') + ': mean 5, median 2, mode 2.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, Chapter IV, pp. 173–180. Sort before finding a median.',
  homework: [
    m('Find the mean, mode, median and range of 8, 3, 5, 8, 11, 8, 2'),
    m('Find the median of 14, 9, 21, 6, 17, 11'),
    m('The mean of seven numbers is 11. Find their total.'),
    m('Estimate the mean for classes 0–10, 10–20, 20–30, 30–40 with frequencies 3, 8, 6, 3.'),
    m('Six numbers have mean 14. A seventh makes the mean 15. Find it.'),
    'Explain in two sentences when the median is a better average than the mean.'
  ]
});

G8_ALG.push({
  id: 'alg-37', stream: 'alg', grade: 8, quarter: 4, lessons: '83–85', hours: 3,
  title: 'Elements of combinatorics — counting by listing',
  subtitle: 'Before any formula, learn to list without repeating and without missing anything.',
  uz: 'Algebra 8, Chapter IV §27', uzPage: 'Chapter IV, pp. 181–188',
  cam: 'Stage 9 · 12.1', camPage: 'Learner’s Book pp. 255–260', wb: 'Workbook 12.1',
  objectives: [
    'List every outcome of a small experiment in a systematic order.',
    'Use a table of outcomes for two stages.',
    'Draw a tree diagram and read the outcomes off its branches.',
    'Decide whether order matters in a given counting question.'
  ],
  terms: [
    ['Combinatorics', 'Kombinatorika', 'Комбинаторика'],
    ['Outcome', 'Natija', 'Исход'],
    ['Sample space', 'Elementar natijalar fazosi', 'Пространство исходов'],
    ['Systematic listing', 'Tartibli sanab chiqish', 'Систематический перебор'],
    ['Tree diagram', 'Daraxt diagrammasi', 'Дерево вариантов'],
    ['Table of outcomes', 'Natijalar jadvali', 'Таблица исходов'],
    ['Arrangement (order matters)', 'O‘rin almashtirish', 'Размещение (порядок важен)'],
    ['Selection (order does not matter)', 'Tanlash', 'Сочетание (порядок не важен)'],
    ['Repetition allowed', 'Takrorlanish bilan', 'С повторением'],
    ['Exhaustive list', 'To‘liq ro‘yxat', 'Полный перечень']
  ],
  timing: [[18, 'Warm-up: how many two-digit numbers use only 1, 2, 3?'], [36, 'Systematic listing'], [30, 'Tables of outcomes'], [24, 'Tree diagrams'], [12, 'Homework']],
  sections: [
    {
      h: 'Listing in an order you can trust',
      html: `<p><b>Combinatorics</b> is the art of counting without counting one by one. But every method
      starts from the same discipline: <b>list in a fixed order</b>, so that nothing is written twice and
      nothing is forgotten.</p>
      <p>How many two-digit numbers can be made from the digits ${m('1, 2, 3')} if a digit may repeat?
      Fix the first digit, then run through the second:</p>
      ${eq(m('11, 12, 13 &nbsp;|&nbsp; 21, 22, 23 &nbsp;|&nbsp; 31, 32, 33'), true)}
      <p>Nine numbers — three blocks of three. The blocks are what make the list trustworthy: as soon as
      you are working alphabetically, or from smallest to largest, a missing item is visible.</p>
      <div class="keybox"><div class="klabel">The rule of the list</div>
      Choose one thing to vary <b>last</b>. Hold everything else still while it runs through all its
      values, then step the next thing on by one.</div>`
    },
    {
      h: 'Does order matter?',
      html: `<p>Two questions that sound the same are not the same:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>Order?</th><th>From {A, B, C} choose 2</th><th>How many</th></tr></thead>
      <tbody>
        <tr><td>Who is captain and who is vice-captain?</td><td>matters</td><td class="m">AB, BA, AC, CA, BC, CB</td><td class="m">6</td></tr>
        <tr><td>Which two go on the trip?</td><td>does not matter</td><td class="m">AB, AC, BC</td><td class="m">3</td></tr>
      </tbody></table></div>
      <p>When order does not matter, ${m('AB')} and ${m('BA')} are one and the same choice, so the count
      is halved. Always ask the question in words before you start listing.</p>
      <div class="warn"><span class="wl">Also ask: may things repeat?</span>
      Two dice can both show 4 (repetition allowed). Two different pupils cannot be the same pupil
      (repetition not allowed). The answer changes the list.</div>`
    },
    {
      h: 'Tables and tree diagrams',
      html: `<p>For an experiment in <b>two</b> stages, a table lists every outcome at once. Two dice:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>+</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead>
      <tbody>
        <tr><td><b>1</b></td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>
        <tr><td><b>2</b></td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
        <tr><td><b>3</b></td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr>
        <tr><td><b>4</b></td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr>
        <tr><td><b>5</b></td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td></tr>
        <tr><td><b>6</b></td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td></tr>
      </tbody></table></div>
      <p>Thirty-six squares, so thirty-six equally likely outcomes. A sum of 7 fills a whole diagonal —
      six squares — which is why 7 is the commonest total.</p>
      {{fig:treeDiagram:A tree diagram. Each path from the root to a tip is one outcome; count the tips to count the outcomes.}}
      <p>A <b>tree diagram</b> handles three stages and more, and it keeps the order visible. Read one
      outcome by walking a single path from left to right.</p>`
    }
  ],
  examples: [
    {
      q: 'A café offers 3 soups and 4 main dishes. List, systematically, the ways to choose one soup and one main.',
      steps: [
        [m('S₁M₁, S₁M₂, S₁M₃, S₁M₄'), 'Hold the soup still; run the main through all four values.'],
        [m('S₂M₁, S₂M₂, S₂M₃, S₂M₄'), 'Step the soup on by one.'],
        [m('S₃M₁, S₃M₂, S₃M₃, S₃M₄'), 'And again.'],
        [m('3 blocks × 4 = 12'), 'The blocks are equal, so the total is a product.']
      ],
      ans: m('12 meals')
    },
    {
      q: 'From the letters A, B, C, D, how many two-letter “words” can be made with no letter repeated?',
      steps: [
        [m('AB, AC, AD'), 'First letter A — three choices left.'],
        [m('BA, BC, BD'), 'First letter B.'],
        [m('CA, CB, CD, DA, DB, DC'), 'C and D likewise.'],
        [m('4 × 3 = 12'), 'Four first letters, three second letters each.']
      ],
      ans: m('12 words')
    },
    {
      q: 'A coin is tossed three times. List all the outcomes and count those with exactly two heads.',
      steps: [
        [m('HHH, HHT, HTH, HTT'), 'First toss H; the other two run through all four possibilities.'],
        [m('THH, THT, TTH, TTT'), 'First toss T.'],
        [m('8 outcomes in total'), m('2 × 2 × 2 = 8') + ' — three stages, two ways each.'],
        [m('HHT, HTH, THH'), 'Pick out the ones with exactly two H.']
      ],
      ans: m('8 outcomes; 3 of them have exactly two heads')
    }
  ],
  modelNote: 'Reveal one counting task at a time and let the class finish the list before you show the next step.',
  interactive: {
    type: 'fractionCancel',
    title: 'Count it by listing',
    hint: 'Choose a task, then reveal the list one block at a time.',
    items: [
      {
        title: 'Two-digit numbers from 1, 2, 3, 4 (no repeats)',
        start: 'Digits <span class="m">1, 2, 3, 4</span>. Two-digit numbers, digits <b>different</b>.',
        steps: [
          ['<span class="m">12, 13, 14</span>', 'First digit 1.'],
          ['<span class="m">21, 23, 24</span>', 'First digit 2.'],
          ['<span class="m">31, 32, 34</span>', 'First digit 3.'],
          ['<span class="m">41, 42, 43</span>', 'First digit 4 — four blocks of three.']
        ],
        answer: '<span class="m">4 × 3 = 12</span> numbers.'
      },
      {
        title: 'Two-digit numbers from 1, 2, 3, 4 (repeats allowed)',
        start: 'Same digits, but now <span class="m">33</span> is allowed.',
        steps: [
          ['<span class="m">11, 12, 13, 14</span>', 'Four choices for the second digit now, not three.'],
          ['<span class="m">21, 22, 23, 24</span>', ''],
          ['<span class="m">31, 32, 33, 34 &nbsp; 41, 42, 43, 44</span>', 'Four blocks of four.']
        ],
        answer: '<span class="m">4 × 4 = 16</span> numbers — repetition adds the four “doubles”.'
      },
      {
        title: 'Choosing 2 pupils from 4 for a trip',
        start: 'Pupils <span class="m">A, B, C, D</span>. Order does <b>not</b> matter.',
        steps: [
          ['<span class="m">AB, AC, AD</span>', 'Start each pair with its earlier letter — that stops AB and BA both appearing.'],
          ['<span class="m">BC, BD</span>', 'Pairs starting with B, excluding BA (already listed as AB).'],
          ['<span class="m">CD</span>', 'And the last one.'],
          ['<span class="m">3 + 2 + 1 = 6</span>', 'Half of the 12 ordered arrangements.']
        ],
        answer: '<span class="m">6</span> selections.'
      },
      {
        title: 'Three coins',
        start: 'Toss a coin three times. How many outcomes have <b>at least</b> two heads?',
        steps: [
          ['<span class="m">HHH, HHT, HTH, HTT, THH, THT, TTH, TTT</span>', 'All 8 outcomes, listed in a fixed order.'],
          ['Exactly three heads: <span class="m">HHH</span>', '1 outcome.'],
          ['Exactly two heads: <span class="m">HHT, HTH, THH</span>', '3 outcomes.'],
          ['<span class="m">1 + 3 = 4</span>', '“At least two” means two <b>or</b> three.']
        ],
        answer: '<span class="m">4</span> of the <span class="m">8</span> outcomes — exactly half.'
      }
    ]
  },
  quiz: [
    { q: 'How many two-digit numbers use only the digits 5, 6, 7, repeats allowed?', a: [m('6'), m('9'), m('3'), m('12')], c: 1, why: m('3 × 3 = 9') + '.' },
    { q: 'From 5 people, how many ways can a captain and a vice-captain be chosen?', a: [m('10'), m('25'), m('20'), m('120')], c: 2, why: m('5 × 4 = 20') + ' — order matters here.' },
    { q: 'Two dice are thrown. How many outcomes are there altogether?', a: [m('12'), m('36'), m('21'), m('30')], c: 1, why: 'A 6 by 6 table has 36 squares.' },
    { q: 'In which question does order NOT matter?', a: ['Who wins gold and who wins silver?', 'Which two books do I borrow?', 'What is the PIN code?', 'Who sits first and who sits second?'], c: 1, why: 'Borrowing books A and B is the same as borrowing B and A.' },
    { q: 'A tree diagram for three stages with 2 branches each has how many tips?', a: [m('6'), m('8'), m('9'), m('12')], c: 1, why: m('2 × 2 × 2 = 8') + '.' }
  ],
  practice: {
    easy: [
      [m('List all two-digit numbers formed from 1, 2 with repeats allowed.'), m('11, 12, 21, 22')],
      [m('List all two-letter words from A, B, C with no repeats.'), m('AB, AC, BA, BC, CA, CB')],
      [m('How many outcomes when a coin is tossed twice?'), m('4')],
      [m('List the ways to choose 2 fruits from apple, pear, plum.'), 'apple–pear, apple–plum, pear–plum'],
      [m('How many outcomes when a die is thrown and a coin tossed?'), m('12')],
      [m('List all three-digit numbers using each of 1, 2, 3 once.'), m('123, 132, 213, 231, 312, 321')],
      [m('Does order matter in “choose 3 pupils for the choir”?'), 'No.']
    ],
    med: [
      [m('How many two-digit numbers from 0, 1, 2, 3 (no repeats, no leading 0)?'), m('3 × 3 = 9')],
      [m('A menu has 2 starters, 3 mains, 2 desserts. How many meals?'), m('12')],
      [m('Two dice are thrown. How many outcomes give a total of 8?'), m('5') + ' — ' + m('(2,6),(3,5),(4,4),(5,3),(6,2)')],
      [m('From 6 people, how many ways to pick a president and a secretary?'), m('6 × 5 = 30')],
      [m('From 6 people, how many ways to pick a committee of 2?'), m('30 ÷ 2 = 15')],
      [m('A coin is tossed four times. How many outcomes?'), m('2⁴ = 16')],
      [m('How many outcomes of two dice have both numbers the same?'), m('6')]
    ],
    hard: [
      [m('How many three-digit numbers use only 1, 2, 3 and contain at least one 3?'), m('27 − 8 = 19')],
      [m('How many two-digit even numbers can be made from 1, 2, 3, 4, 5 with no repeats?'), m('2 × 4 = 8')],
      [m('Two dice are thrown. In how many outcomes is the total a prime number?'), m('15') + ' — totals 2, 3, 5, 7, 11 give ' + m('1 + 2 + 4 + 6 + 2')],
      [m('From 5 pupils, how many ways to seat 3 of them in a row?'), m('5 × 4 × 3 = 60')],
      [m('How many four-letter “words” from A, B with repeats, having exactly two A’s?'), m('6') + ' — ' + m('AABB, ABAB, ABBA, BAAB, BABA, BBAA')],
      [m('A PIN uses 4 digits from 0–9, repeats allowed. How many begin with an odd digit?'), m('5 × 10³ = 5000')],
      [m('Explain why choosing 2 from n gives half of n(n − 1).'), 'Each unordered pair is counted twice among the ' + m('n(n − 1)') + ' ordered pairs — once as ' + m('XY') + ' and once as ' + m('YX') + '.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, Chapter IV, pp. 181–188. Show your list, not just the number.',
  homework: [
    m('List all two-digit numbers made from 2, 4, 6 with repeats allowed.'),
    m('From A, B, C, D choose 2 with order mattering — list them all.'),
    m('A shop sells 4 shirts and 3 ties. How many shirt-and-tie sets?'),
    m('Two dice are thrown. List the outcomes with a total of 9.'),
    m('A coin is tossed three times. List the outcomes with at most one head.'),
    'Write one counting question where order matters and one where it does not.'
  ]
});

G8_ALG.push({
  id: 'alg-38', stream: 'alg', grade: 8, quarter: 4, lessons: '86–88', hours: 3,
  title: 'The basic principle of counting',
  subtitle: 'When each stage is independent, multiply. That single sentence replaces a page of listing.',
  uz: 'Algebra 8, Chapter IV §28', uzPage: 'Chapter IV, pp. 189–197',
  cam: 'Stage 9 · 12.2–12.3', camPage: 'Learner’s Book pp. 261–270', wb: 'Workbook 12.2–12.3',
  objectives: [
    'State and apply the multiplication principle of counting.',
    'Count arrangements of n different objects.',
    'Use the addition principle for cases that cannot happen together.',
    'Count by subtracting from the total when “at least one” appears.'
  ],
  terms: [
    ['Counting principle', 'Sanashning asosiy qoidasi', 'Основной принцип счёта'],
    ['Multiplication rule', 'Ko‘paytirish qoidasi', 'Правило умножения'],
    ['Addition rule', 'Qo‘shish qoidasi', 'Правило сложения'],
    ['Independent choices', 'Bog‘liq bo‘lmagan tanlovlar', 'Независимые выборы'],
    ['Factorial', 'Faktorial', 'Факториал'],
    ['Permutation', 'O‘rin almashtirish', 'Перестановка'],
    ['Complementary counting', 'To‘ldiruvchi hisoblash', 'Подсчёт через дополнение'],
    ['Stage (step)', 'Bosqich', 'Этап'],
    ['At least one', 'Kamida bitta', 'Хотя бы один'],
    ['Total number of ways', 'Usullar soni', 'Число способов']
  ],
  timing: [[18, 'Recall yesterday’s lists'], [36, 'The multiplication rule'], [24, 'Arrangements and factorials'], [30, 'Addition rule and “at least one”'], [12, 'Homework']],
  sections: [
    {
      h: 'The multiplication rule',
      html: `<div class="keybox"><div class="klabel">Basic principle of counting</div>
      If a task is done in ${m('k')} stages, the first in ${m('n₁')} ways, the second in ${m('n₂')} ways
      and so on — <b>whatever was chosen before</b> — then the whole task can be done in
      ${eq(m('n₁ · n₂ · … · n' + '<sub>k</sub>'), true)}
      ways.</div>
      <p>Yesterday’s café gave ${m('3 × 4 = 12')} meals, and the reason is now visible in the list: three
      equal blocks of four. The rule only replaces the listing — it does not change the answer.</p>
      <div class="warn"><span class="wl">The condition that matters</span>
      The number of ways at each stage must not depend on <i>which</i> choice was made earlier. “Four
      shirts, three ties” multiplies. “Four shirts, and the number of matching ties depends on the shirt”
      does not.</div>`
    },
    {
      h: 'Arrangements and the factorial',
      html: `<p>In how many orders can 5 different books stand on a shelf? Five choices for the first
      place, then four books remain, then three, two, one:</p>
      ${eq(m('5 · 4 · 3 · 2 · 1 = 120'), true)}
      <p>This product has a name: ${m('5! = 120')}, read “five factorial”. In general</p>
      ${eq(m('n! = n · (n − 1) · (n − 2) · … · 2 · 1') + ',&nbsp; and by agreement ' + m('0! = 1'))}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">n</th><th class="m">1</th><th class="m">2</th><th class="m">3</th><th class="m">4</th><th class="m">5</th><th class="m">6</th><th class="m">7</th></tr></thead>
      <tbody><tr><td class="m"><b>n!</b></td><td class="m">1</td><td class="m">2</td><td class="m">6</td><td class="m">24</td><td class="m">120</td><td class="m">720</td><td class="m">5040</td></tr></tbody>
      </table></div>
      <p>Factorials grow terrifyingly fast — ${m('10! = 3 628 800')}. That is exactly why counting by
      listing stops being practical and the rule takes over.</p>
      <p>If only ${m('r')} of the ${m('n')} objects are placed, stop the product after ${m('r')} factors:
      seating 3 of 5 pupils gives ${m('5 · 4 · 3 = 60')}.</p>`
    },
    {
      h: 'Adding, and counting the opposite',
      html: `<div class="keybox"><div class="klabel">Addition rule</div>
      If two cases <b>cannot happen together</b>, count each and add. Going to Samarkand by one of
      3 trains <b>or</b> one of 5 buses gives ${m('3 + 5 = 8')} ways — not ${m('15')}, because you take
      one vehicle, not both.</div>
      <p><b>Multiply</b> for “and then”; <b>add</b> for “or”. Reading the word in the question is half
      the work.</p>
      <p>“At least one” is almost always easier <b>backwards</b>. How many three-digit codes from
      ${m('1, 2, 3')} contain at least one 3?</p>
      ${eq('all codes ' + m('3³ = 27') + ' &nbsp;−&nbsp; codes with no 3 ' + m('2³ = 8') + ' &nbsp;=&nbsp; ' + m('19'), true)}
      <p>Counting the opposite and subtracting is called <b>complementary counting</b>. Use it whenever
      the direct count splits into many cases.</p>`
    }
  ],
  examples: [
    {
      q: 'A car number plate has 2 letters (from 26) followed by 3 digits. How many plates are possible?',
      steps: [
        [m('26 ways for the first letter'), 'Letters may repeat unless the question forbids it.'],
        [m('26 ways for the second'), ''],
        [m('10 · 10 · 10') + ' for the digits', 'Three independent stages.'],
        [m('26 · 26 · 10³ = 676 000'), 'Multiply every stage together.']
      ],
      ans: m('676 000')
    },
    {
      q: 'In how many ways can 6 pupils stand in a queue, if two particular pupils must stand together?',
      steps: [
        [m('Treat the pair as one block'), 'Now there are 5 items to arrange.'],
        [m('5! = 120'), 'Arrangements of the block and the other four.'],
        [m('× 2'), 'The two inside the block can swap.'],
        [m('120 · 2 = 240'), '']
      ],
      ans: m('240 ways')
    },
    {
      q: 'How many four-digit numbers have all digits different and are odd?',
      steps: [
        [m('last digit: 5 ways'), 'It must be one of ' + m('1, 3, 5, 7, 9') + ' — deal with the strictest condition first.'],
        [m('first digit: 8 ways'), 'Not 0, and not the digit already used at the end.'],
        [m('second digit: 8 ways'), 'Ten digits less the two used.'],
        [m('third digit: 7 ways'), ''],
        [m('5 · 8 · 8 · 7 = 2240'), '']
      ],
      ans: m('2240 numbers')
    }
  ],
  modelNote: 'Work through the counting tasks one stage at a time; ask the class for the next factor before revealing it.',
  interactive: {
    type: 'fractionCancel',
    title: 'Multiply, add, or subtract?',
    hint: 'Decide the method before revealing the steps.',
    items: [
      {
        title: 'A password: 3 letters then 2 digits',
        start: '26 letters, 10 digits, repetition allowed. How many passwords?',
        steps: [
          ['<span class="m">26 · 26 · 26</span>', 'Three letter stages, independent.'],
          ['<span class="m">× 10 · 10</span>', 'Two digit stages.'],
          ['<span class="m">17 576 · 100</span>', '']
        ],
        answer: '<span class="m">1 757 600</span> passwords.'
      },
      {
        title: 'Travel by train or by bus',
        start: '3 trains and 5 buses run to Bukhara. In how many ways can you travel?',
        steps: [
          ['The word is <b>or</b>', 'You take a train <i>or</i> a bus, never both — the cases cannot happen together.'],
          ['<span class="m">3 + 5</span>', 'Addition rule, not multiplication.']
        ],
        answer: '<span class="m">8</span> ways. (If you went out by train and back by bus, that would be <span class="m">3 · 5 = 15</span>.)'
      },
      {
        title: 'Seating 4 people in a row',
        start: 'How many orders are possible?',
        steps: [
          ['<span class="m">4</span> choices for the first seat', ''],
          ['<span class="m">3</span> for the second, <span class="m">2</span> for the third', 'One person fewer each time.'],
          ['<span class="m">1</span> for the last', ''],
          ['<span class="m">4! = 24</span>', '']
        ],
        answer: '<span class="m">24</span> orders.'
      },
      {
        title: 'At least one 5',
        start: 'How many three-digit codes from <span class="m">1…6</span> contain at least one 5?',
        steps: [
          ['All codes: <span class="m">6³ = 216</span>', 'Repetition allowed.'],
          ['Codes with <b>no</b> 5: <span class="m">5³ = 125</span>', 'Five digits are now available at each stage.'],
          ['<span class="m">216 − 125</span>', 'Complementary counting.']
        ],
        answer: '<span class="m">91</span> codes.'
      }
    ]
  },
  quiz: [
    { q: 'A shop has 5 jackets and 4 hats. How many jacket-and-hat outfits?', a: [m('9'), m('20'), m('45'), m('54')], c: 1, why: '“And” — multiply: ' + m('5 · 4 = 20') + '.' },
    { q: 'What is ' + m('6!') + '?', a: [m('36'), m('120'), m('720'), m('360')], c: 2, why: m('6 · 5 · 4 · 3 · 2 · 1 = 720') + '.' },
    { q: 'You may travel by one of 4 trains or one of 6 buses. How many ways?', a: [m('24'), m('10'), m('12'), m('46')], c: 1, why: '“Or” with cases that exclude each other — add.' },
    { q: 'How many three-digit codes from 1, 2, 3, 4 have no digit repeated?', a: [m('64'), m('24'), m('12'), m('48')], c: 1, why: m('4 · 3 · 2 = 24') + '.' },
    { q: 'How many of the ' + m('2⁵ = 32') + ' outcomes of five coin tosses have at least one head?', a: [m('31'), m('16'), m('32'), m('30')], c: 0, why: 'All 32 less the single all-tails outcome.' }
  ],
  practice: {
    easy: [
      [m('Find 4!'), m('24')],
      [m('3 shirts, 5 ties — how many sets?'), m('15')],
      [m('How many two-digit codes from 0–9, repeats allowed?'), m('100')],
      [m('In how many orders can 3 books stand on a shelf?'), m('6')],
      [m('2 roads from A to B and 3 from B to C. How many routes A to C?'), m('6')],
      [m('A menu has 4 mains or 3 salads. Choose one dish — how many ways?'), m('7')],
      [m('Find 5! ÷ 3!'), m('20')]
    ],
    med: [
      [m('How many three-digit numbers have all digits different?'), m('9 · 9 · 8 = 648')],
      [m('In how many ways can 5 pupils be seated in a row?'), m('120')],
      [m('A code is 2 letters (26) then 4 digits. How many codes?'), m('26² · 10⁴ = 6 760 000')],
      [m('How many four-digit even numbers use digits 1–5 with repeats?'), m('5³ · 2 = 250')],
      [m('From 7 pupils, how many ways to choose a captain, then a vice-captain?'), m('42')],
      [m('How many three-letter words from A–E have no repeated letter?'), m('60')],
      [m('How many of the 36 two-dice outcomes contain at least one 6?'), m('36 − 25 = 11')]
    ],
    hard: [
      [m('In how many ways can 5 people sit in a row if two of them must sit together?'), m('4! · 2 = 48')],
      [m('In how many ways can 5 people sit in a row if two of them must NOT sit together?'), m('120 − 48 = 72')],
      [m('How many four-digit numbers with distinct digits are divisible by 5?'), m('952') + ' — ending 0: ' + m('9 · 8 · 7 = 504') + '; ending 5: ' + m('8 · 8 · 7 = 448')],
      [m('How many three-digit numbers from 1–6 (repeats allowed) contain at least two 3s?'), m('16') + ' — exactly two: ' + m('3 · 5 = 15') + ', all three: ' + m('1')],
      [m('In how many ways can the letters of MATH be arranged so that M comes first?'), m('3! = 6')],
      [m('A committee of a chair and 2 ordinary members is chosen from 6 people. How many ways?'), m('6 · 10 = 60') + ' — chair 6 ways, then 2 from 5 gives 10'],
      [m('Show that the number of subsets of a set with n elements is 2ⁿ.'), 'Each element is either in or out — ' + m('n') + ' independent two-way choices, so ' + m('2ⁿ') + ' by the multiplication rule.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Algebra 8, Chapter IV, pp. 189–197. Say which rule you used in each answer.',
  homework: [
    m('Find 6! and 7!'),
    m('A café has 3 soups, 5 mains and 2 desserts. How many three-course meals?'),
    m('How many three-digit numbers have all digits different?'),
    m('In how many orders can 4 photographs be hung in a row?'),
    m('How many three-digit codes from 1–5 contain at least one 1?'),
    'In one sentence, explain when you multiply and when you add.'
  ]
});

G8_ALG.push({
  id: 'alg-39', stream: 'alg', grade: 8, quarter: 4, lessons: '89–90', hours: 2,
  title: 'Control work 7 · Data and counting',
  subtitle: 'The Chapter IV assessment, and the four errors it produces every year.',
  uz: 'Algebra 8, Chapter IV', uzPage: 'Revision of Chapter IV',
  cam: 'Stage 9 · 12.1–12.3, 15.1', camPage: 'Learner’s Book pp. 255–270, 318–324', wb: 'Workbook 12.1–12.3',
  objectives: [
    'Assess averages, grouped data, charts, listing and the counting principle.',
    'Diagnose each lost mark by error type.',
    'Re-solve every task that was lost.'
  ],
  timing: [[4, 'Setting up'], [72, 'The paper'], [4, 'Collect in']],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Work on mistakes', 'Xatolar ustida ishlash', 'Работа над ошибками'],
    ['Mean', 'O‘rta arifmetik', 'Среднее арифметическое'],
    ['Median', 'Mediana', 'Медиана'],
    ['Modal class', 'Moda sinfi', 'Модальный класс'],
    ['Estimated mean', 'Taxminiy o‘rta', 'Оценка среднего'],
    ['Counting principle', 'Sanashning asosiy qoidasi', 'Основной принцип счёта'],
    ['Complementary counting', 'To‘ldiruvchi hisoblash', 'Подсчёт через дополнение']
  ],
  sections: [
    {
      h: 'Lesson 89 — the paper (40 minutes)',
      html: `<p>Two variants of seven tasks, 2 marks each:</p>
      <ul>
        <li>task 1 · mean, mode, median and range of a small list</li>
        <li>task 2 · read a value from a frequency table</li>
        <li>task 3 · estimate the mean of grouped data</li>
        <li>task 4 · choose and justify a suitable chart</li>
        <li>task 5 · list all outcomes systematically</li>
        <li>task 6 · the multiplication rule</li>
        <li>task 7 · an “at least one” count</li>
      </ul>
      <p><b>Marking note:</b> task 1 loses a mark if the list is not sorted before the median is read.</p>`
    },
    {
      h: 'Lesson 90 — work on mistakes (40 minutes)',
      html: `<div class="keybox"><div class="klabel">The four errors this paper produces</div>
      <ol style="margin:0">
        <li><b>Median read from an unsorted list.</b> Sorting is part of the method, not a nicety.</li>
        <li><b>Grouped mean without midpoints</b> — adding the class boundaries, or the frequencies alone.</li>
        <li><b>Adding when the question says “and then”</b> — the counting rules swapped over.</li>
        <li><b>“At least one” counted directly</b>, producing double-counted cases instead of
        ${m('total − none')}.</li>
      </ol></div>
      <p>Each pupil writes the error number beside every lost mark, then re-solves that task in full.</p>`
    }
  ],
  examples: [
    {
      q: 'Find the error: the median of ' + m('7, 2, 9, 4, 5') + ' is ' + m('9'),
      steps: [
        ['The list was never sorted.', 'The middle <b>of the sorted list</b> is what the median means.'],
        [m('2, 4, 5, 7, 9'), 'Sort first.'],
        [m('median = 5'), 'The third of five values.']
      ],
      ans: m('5')
    },
    {
      q: 'Find the error: classes 0–10, 10–20 with frequencies 4, 6 give a mean of ' + m('(10 + 20) ÷ 2 = 15'),
      steps: [
        ['Class <b>midpoints</b> are needed, weighted by frequency.', ''],
        [m('midpoints 5 and 15'), ''],
        [m(f('5 · 4 + 15 · 6', '10') + ' = ' + f('110', '10') + ' = 11'), '']
      ],
      ans: m('11')
    }
  ],
  modelNote: 'Show the wrong working, take a vote on the error type, then reveal.',
  interactive: {
    type: 'fractionCancel',
    title: 'Diagnose the error',
    hint: 'Which of the four errors is this? Decide, then reveal.',
    items: [
      {
        title: 'Error 1 — median from an unsorted list',
        start: '<b>Claimed:</b> the median of <span class="m">12, 5, 8, 3, 20, 7</span> is <span class="m">8 and 3</span> → <span class="m">5.5</span>',
        steps: [
          ['<span class="m">3, 5, 7, 8, 12, 20</span>', 'Sort the list first — always.'],
          ['Six values, so the median is the mean of the 3rd and 4th.', ''],
          ['<span class="m">(7 + 8) ÷ 2</span>', '']
        ],
        answer: 'Median <span class="m">= 7.5</span>.'
      },
      {
        title: 'Error 2 — grouped mean without midpoints',
        start: '<b>Claimed:</b> classes 0–20, 20–40, 40–60 with frequencies 5, 12, 3 have mean <span class="m">(5 + 12 + 3) ÷ 3 = 6.67</span>',
        steps: [
          ['That is the mean of the <i>frequencies</i>, not of the data.', ''],
          ['Midpoints <span class="m">10, 30, 50</span>', 'Halfway across each class.'],
          ['<span class="m">10·5 + 30·12 + 50·3 = 560</span>', 'Weight each midpoint by its frequency.'],
          ['<span class="m">560 ÷ 20</span>', '20 values altogether.']
        ],
        answer: 'Estimated mean <span class="m">= 28</span>.'
      },
      {
        title: 'Error 3 — added instead of multiplied',
        start: '<b>Claimed:</b> 4 shirts and 3 ties give <span class="m">4 + 3 = 7</span> outfits',
        steps: [
          ['You choose a shirt <b>and then</b> a tie — two stages.', 'Adding is for “or”, when the cases exclude each other.'],
          ['<span class="m">4 · 3</span>', 'Multiplication rule.']
        ],
        answer: '<span class="m">12</span> outfits.'
      },
      {
        title: 'Error 4 — “at least one” counted directly',
        start: '<b>Claimed:</b> three-digit codes from <span class="m">1…4</span> with at least one 4 number <span class="m">3 · 16 = 48</span>',
        steps: [
          ['That counts “4 in the first place”, “4 in the second”, “4 in the third” — and double-counts <span class="m">441</span>, <span class="m">444</span> and the rest.', ''],
          ['All codes: <span class="m">4³ = 64</span>', ''],
          ['Codes with <b>no</b> 4: <span class="m">3³ = 27</span>', ''],
          ['<span class="m">64 − 27</span>', 'Count the opposite and subtract.']
        ],
        answer: '<span class="m">37</span> codes.'
      }
    ]
  },
  quiz: [
    { q: 'The median of ' + m('7, 2, 9, 4, 5') + ' is:', a: [m('9'), m('5'), m('4'), m('5.4')], c: 1, why: 'Sorted: 2, 4, 5, 7, 9 — the middle is 5.' },
    { q: 'For grouped data the estimated mean uses:', a: ['class boundaries', 'class midpoints', 'the frequencies alone', 'the largest value'], c: 1, why: 'Each midpoint is weighted by its frequency.' },
    { q: '3 starters and 4 mains give how many two-course meals?', a: [m('7'), m('12'), m('34'), m('9')], c: 1, why: '“And then” — multiply.' },
    { q: 'The best way to count “at least one 6 in two dice throws” is:', a: ['add the cases', m('36 − 25'), m('6 + 6'), m('2 · 6')], c: 1, why: 'Total less the outcomes with no 6.' }
  ],
  practice: {
    easy: [
      [m('<b>Variant 1, task 1.</b> Find the mean, mode, median and range of 4, 7, 4, 9, 6'), m('mean 6, mode 4, median 6, range 5')],
      [m('<b>Task 2.</b> Marks 1–5 have frequencies 2, 5, 8, 3, 2. How many pupils?'), m('20')],
      [m('<b>Task 3.</b> Estimate the mean for 0–10, 10–20, 20–30 with frequencies 3, 5, 2.'), m('14')],
      [m('<b>Task 4.</b> Which chart shows parts of one whole?'), 'A pie chart.'],
      [m('<b>Task 5.</b> List all two-digit numbers from 1, 2, 3 with repeats.'), m('11, 12, 13, 21, 22, 23, 31, 32, 33')],
      [m('<b>Task 6.</b> 5 hats and 3 scarves — how many sets?'), m('15')],
      [m('<b>Task 7.</b> How many of the 8 outcomes of three coin tosses have at least one head?'), m('7')]
    ],
    med: [
      [m('<b>Variant 2, task 1.</b> Find the mean, mode, median and range of 12, 5, 12, 8, 3'), m('mean 8, mode 12, median 8, range 9')],
      [m('<b>Task 2.</b> Frequencies 4, 6, 7, 3 for scores 1–4. Find the modal score.'), m('3')],
      [m('<b>Task 3.</b> Estimate the mean for 0–20, 20–40, 40–60 with frequencies 6, 10, 4.'), m('26')],
      [m('<b>Task 4.</b> Why can a graph starting at 90 rather than 0 mislead?'), 'Small differences are stretched so they look large.'],
      [m('<b>Task 5.</b> List the ways to choose 2 pupils from A, B, C, D.'), m('AB, AC, AD, BC, BD, CD')],
      [m('<b>Task 6.</b> A code has 2 letters (26) then 2 digits. How many codes?'), m('26² · 100 = 67 600')],
      [m('<b>Task 7.</b> How many three-digit codes from 1–5 contain at least one 2?'), m('125 − 64 = 61')]
    ],
    hard: [
      [m('The mean of 8 numbers is 12. Two numbers, 5 and 19, are removed. Find the new mean.'), m(f('96 − 24', '6') + ' = 12')],
      [m('A set of five whole numbers has mean 7, median 6 and mode 5. Find one such set.'), m('5, 5, 6, 9, 10')],
      [m('Estimate the mean for 0–5, 5–10, 10–15, 15–20 with frequencies 2, 7, 8, 3.'), m(f('5 + 52.5 + 100 + 52.5', '20') + ' = 10.5')],
      [m('How many four-digit numbers have all digits different and start with an odd digit?'), m('5 · 9 · 8 · 7 = 2520')],
      [m('From 8 people, how many ways to pick a chair and a secretary?'), m('56')],
      [m('How many three-digit codes from 1–6 have at least two equal digits?'), m('216 − 120 = 96')],
      [m('Explain why the mean of a grouped table is only an estimate.'), 'Every value in a class is replaced by the midpoint, so the individual values are lost and the total is only approximated.']
    ]
  },
  hwTitle: 'Homework — 5 problems',
  hwNote: 'Re-solve every task you lost marks on, with the error number written beside it.',
  homework: [
    'Re-solve, in full, each task you lost a mark on.',
    'Beside each, write the error number (1–4) that caused it.',
    m('Find the mean, mode, median and range of 6, 9, 6, 14, 5'),
    m('Estimate the mean for 0–10, 10–20, 20–30, 30–40 with frequencies 2, 7, 8, 3.'),
    m('How many three-digit codes from 1–4 contain at least one 1?')
  ]
});

G8_ALG.push({
  id: 'alg-40', stream: 'alg', grade: 8, quarter: 4, lessons: '91–93', hours: 3,
  title: 'Revision · Sequences, the nth term and functions',
  subtitle: 'Cambridge insert: the rule behind a pattern, written once and used for every term.',
  uz: 'Algebra 8 — revision', uzPage: 'Annual revision',
  cam: 'Stage 9 · 9.1–9.3', camPage: 'Learner’s Book pp. 194–210', wb: 'Workbook 9.1–9.3',
  objectives: [
    'Continue a sequence and describe its term-to-term rule.',
    'Find the nth term of a linear sequence.',
    'Recognise square, cube and simple quadratic sequences.',
    'Use function notation and complete a table of values.'
  ],
  terms: [
    ['Sequence', 'Ketma-ketlik', 'Последовательность'],
    ['Term', 'Had', 'Член (последовательности)'],
    ['Term-to-term rule', 'Hadlar orasidagi qoida', 'Рекуррентное правило'],
    ['Position-to-term rule', 'O‘rin bo‘yicha qoida', 'Формула n-го члена'],
    ['nth term', 'n-had', 'n-й член'],
    ['Common difference', 'Ayirma', 'Разность'],
    ['Linear sequence', 'Chiziqli ketma-ketlik', 'Линейная последовательность'],
    ['Function', 'Funksiya', 'Функция'],
    ['Input / output', 'Kirish / chiqish', 'Вход / выход'],
    ['Table of values', 'Qiymatlar jadvali', 'Таблица значений']
  ],
  timing: [[18, 'Continue three patterns'], [36, 'The nth term'], [30, 'Quadratic and special sequences'], [24, 'Function notation'], [12, 'Homework']],
  sections: [
    {
      h: 'Two ways to describe a sequence',
      html: `<p>Look at ${m('5, 8, 11, 14, 17, …')}</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Rule</th><th>Says</th><th>Good for</th></tr></thead>
      <tbody>
        <tr><td>term-to-term</td><td>“add 3 to the term before”</td><td>the next term</td></tr>
        <tr><td>position-to-term (nth term)</td><td>${m('3n + 2')}</td><td>the 100th term, straight away</td></tr>
      </tbody></table></div>
      {{fig:linearSequence:A linear sequence grows by the same amount each step. The common difference is the coefficient of n in the nth term.}}
      <div class="keybox"><div class="klabel">nth term of a linear sequence</div>
      ${eq(m('nth term = dn + (a₁ − d)'), true)}
      where ${m('d')} is the common difference and ${m('a₁')} the first term. In practice: write
      ${m('d · n')}, then adjust by whatever is needed to make ${m('n = 1')} come out right.</div>
      <p>For ${m('5, 8, 11, …')} the difference is 3, so start with ${m('3n')}: that gives
      ${m('3, 6, 9, …')} — every term is 2 too small. The rule is ${m('3n + 2')}. Check at
      ${m('n = 4')}: ${m('12 + 2 = 14')} ✓.</p>`
    },
    {
      h: 'Sequences that are not linear',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Sequence</th><th>Pattern</th><th class="m">nth term</th></tr></thead>
      <tbody>
        <tr><td class="m">1, 4, 9, 16, 25</td><td>squares</td><td class="m">n²</td></tr>
        <tr><td class="m">1, 8, 27, 64</td><td>cubes</td><td class="m">n³</td></tr>
        <tr><td class="m">2, 4, 8, 16, 32</td><td>doubling</td><td class="m">2<sup>n</sup></td></tr>
        <tr><td class="m">3, 6, 11, 18, 27</td><td>squares shifted</td><td class="m">n² + 2</td></tr>
        <tr><td class="m">1, 3, 6, 10, 15</td><td>triangular</td><td class="m">½n(n + 1)</td></tr>
      </tbody></table></div>
      <p>The test is the <b>second difference</b>. If the differences themselves change by a constant,
      the sequence is quadratic:</p>
      ${eq(m('3, 6, 11, 18, 27') + '&nbsp;→ first differences ' + m('3, 5, 7, 9') + '&nbsp;→ second differences ' + m('2, 2, 2'))}
      <p>A constant second difference of ${m('2')} means an ${m('n²')} sits at the heart of the rule.</p>`
    },
    {
      h: 'Function notation',
      html: `<p>A <b>function</b> is a machine: one input goes in, exactly one output comes out. Writing
      ${m('f(x) = 3x + 2')} says the machine multiplies by 3 and then adds 2.</p>
      ${eq(m('f(0) = 2') + ',&nbsp;&nbsp;' + m('f(4) = 14') + ',&nbsp;&nbsp;' + m('f(−1) = −1'), true)}
      <p>A table of values collects several inputs at once, which is exactly what you need before drawing
      a graph:</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">x</th><th class="m">−2</th><th class="m">−1</th><th class="m">0</th><th class="m">1</th><th class="m">2</th><th class="m">3</th></tr></thead>
      <tbody><tr><td class="m"><b>3x + 2</b></td><td class="m">−4</td><td class="m">−1</td><td class="m">2</td><td class="m">5</td><td class="m">8</td><td class="m">11</td></tr></tbody>
      </table></div>
      <div class="warn"><span class="wl">Sequence or function?</span>
      A sequence takes only whole-number positions ${m('n = 1, 2, 3, …')} — its graph is a row of dots.
      A function like ${m('f(x) = 3x + 2')} accepts any ${m('x')}, so its graph is an unbroken line.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the nth term of ' + m('7, 12, 17, 22, …') + ' and use it to find the 30th term.',
      steps: [
        [m('d = 5'), 'Each term is 5 more than the one before.'],
        [m('5n') + ' gives ' + m('5, 10, 15, …'), 'Every term is 2 too small.'],
        [m('nth term = 5n + 2'), 'Check ' + m('n = 3: 15 + 2 = 17') + ' ✓'],
        [m('a₃₀ = 150 + 2 = 152'), '']
      ],
      ans: m('5n + 2') + ', 30th term ' + m('152')
    },
    {
      q: 'Find the nth term of ' + m('4, 7, 12, 19, 28, …'),
      steps: [
        [m('first differences 3, 5, 7, 9'), 'Not constant, so not linear.'],
        [m('second differences 2, 2, 2'), 'Constant — quadratic, with ' + m('n²') + ' inside.'],
        [m('n² gives 1, 4, 9, 16, 25'), 'Compare term by term.'],
        [m('difference is 3 every time'), ''],
        [m('nth term = n² + 3'), 'Check ' + m('n = 5: 25 + 3 = 28') + ' ✓']
      ],
      ans: m('n² + 3')
    },
    {
      q: 'If ' + m('f(x) = 2x − 5') + ', find ' + m('f(3)') + ', ' + m('f(−2)') + ' and the x for which ' + m('f(x) = 11') + '.',
      steps: [
        [m('f(3) = 6 − 5 = 1'), 'Substitute.'],
        [m('f(−2) = −4 − 5 = −9'), ''],
        [m('2x − 5 = 11'), 'Now run the machine backwards.'],
        [m('2x = 16, x = 8'), '']
      ],
      ans: m('f(3) = 1, f(−2) = −9, x = 8')
    }
  ],
  modelNote: 'Drag the points to see how the common difference controls the steepness of a linear pattern.',
  interactive: { type: 'coordPlane', title: 'A sequence plotted as points' },
  quiz: [
    { q: 'The nth term of ' + m('4, 9, 14, 19, …') + ' is:', a: [m('5n'), m('5n − 1'), m('4n + 1'), m('n + 5')], c: 1, why: m('d = 5') + '; ' + m('5n') + ' is 1 too big, so subtract 1.' },
    { q: 'The 20th term of ' + m('3n − 2') + ' is:', a: [m('58'), m('60'), m('55'), m('62')], c: 0, why: m('60 − 2 = 58') + '.' },
    { q: 'A constant second difference means the sequence is:', a: ['linear', 'quadratic', 'geometric', 'not a sequence'], c: 1, why: 'A quadratic rule always gives a constant second difference.' },
    { q: 'If ' + m('f(x) = 5 − 2x') + ' then ' + m('f(−3)') + ' is:', a: [m('−1'), m('11'), m('−11'), m('1')], c: 1, why: m('5 − 2(−3) = 5 + 6 = 11') + '.' },
    { q: 'Which sequence has nth term ' + m('n²  + 1') + '?', a: [m('1, 4, 9, 16'), m('2, 5, 10, 17'), m('2, 4, 6, 8'), m('1, 3, 5, 7')], c: 1, why: m('1 + 1, 4 + 1, 9 + 1, 16 + 1') + '.' }
  ],
  practice: {
    easy: [
      [m('Write the next two terms of 3, 7, 11, 15, …'), m('19, 23')],
      [m('Find the nth term of 2, 4, 6, 8, …'), m('2n')],
      [m('Find the nth term of 5, 10, 15, 20, …'), m('5n')],
      [m('Find the 10th term of 4n − 1.'), m('39')],
      [m('If f(x) = x + 7, find f(3).'), m('10')],
      [m('If f(x) = 3x, find f(−2).'), m('−6')],
      [m('Write the first four terms of n² .'), m('1, 4, 9, 16')]
    ],
    med: [
      [m('Find the nth term of 6, 11, 16, 21, …'), m('5n + 1')],
      [m('Find the nth term of 20, 17, 14, 11, …'), m('23 − 3n')],
      [m('Find the 50th term of 7n − 3.'), m('347')],
      [m('Find the nth term of 2, 5, 10, 17, 26, …'), m('n² + 1')],
      [m('If f(x) = 4x − 3, solve f(x) = 17.'), m('x = 5')],
      [m('Make a table of 2x + 1 for x = −2, −1, 0, 1, 2.'), m('−3, −1, 1, 3, 5')],
      [m('Is 61 a term of 4n + 1? Justify.'), 'Yes — ' + m('4n = 60, n = 15') + ', a whole number.']
    ],
    hard: [
      [m('Find the nth term of 3, 8, 15, 24, 35, …'), m('n² + 2n') + ' (i.e. ' + m('n(n + 2)') + ')'],
      [m('Is 100 a term of 3n + 2? Justify.'), 'No — ' + m('3n = 98') + ' is not a multiple of 3.'],
      [m('The 4th term of a linear sequence is 17 and the 9th is 37. Find the nth term.'), m('d = 4, nth term = 4n + 1')],
      [m('Find the nth term of 1, 3, 6, 10, 15, …'), m(f('n(n + 1)', '2'))],
      [m('If f(x) = x² − 4x, find all x with f(x) = 0.'), m('x = 0') + ' or ' + m('x = 4')],
      [m('A sequence starts 2, 6, 12, 20, 30. Find the 20th term.'), m('n(n + 1)') + ', so ' + m('420')],
      [m('Explain why a linear sequence can never contain both 7 and 8 if its common difference is 3.'), 'Consecutive terms differ by 3, so no two terms differ by 1; every term leaves the same remainder on division by 3, and 7 and 8 do not.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Cambridge Stage 9, Unit 9. Always check your nth term at ' + m('n = 1') + ' and ' + m('n = 3') + '.',
  homework: [
    m('Find the nth term of 8, 13, 18, 23, …'),
    m('Find the 40th term of 6n − 5.'),
    m('Find the nth term of 3, 6, 11, 18, 27, …'),
    m('If f(x) = 5x − 4, find f(0), f(3) and the x with f(x) = 26.'),
    m('Make a table of 3 − 2x for x = −2 … 2.'),
    m('Is 73 a term of 5n + 3? Explain.')
  ]
});

G8_ALG.push({
  id: 'alg-41', stream: 'alg', grade: 8, quarter: 4, lessons: '94–96', hours: 3,
  title: 'Revision · Graphs, gradient and intercept',
  subtitle: 'Cambridge insert: reading a straight line — and reading a story off one.',
  uz: 'Algebra 8 — revision', uzPage: 'Annual revision',
  cam: 'Stage 9 · 10.1–10.4', camPage: 'Learner’s Book pp. 214–234', wb: 'Workbook 10.1–10.4',
  objectives: [
    'Find the gradient and y-intercept of a straight line from its equation or its graph.',
    'Draw a line from ' + m('y = mx + c') + ' without a full table of values.',
    'Recognise parallel and perpendicular lines from their gradients.',
    'Interpret real-life graphs, including distance–time and conversion graphs.'
  ],
  terms: [
    ['Gradient (slope)', 'Burchak koeffitsienti', 'Угловой коэффициент'],
    ['y-intercept', 'Ordinatalar o‘qi bilan kesishuv', 'Точка пересечения с осью Oy'],
    ['x-intercept', 'Abssissalar o‘qi bilan kesishuv', 'Точка пересечения с осью Ox'],
    ['Rise over run', 'Ko‘tarilish / siljish', 'Приращение по y / по x'],
    ['Parallel lines', 'Parallel to‘g‘ri chiziqlar', 'Параллельные прямые'],
    ['Perpendicular lines', 'Perpendikulyar to‘g‘ri chiziqlar', 'Перпендикулярные прямые'],
    ['Linear equation', 'Chiziqli tenglama', 'Линейное уравнение'],
    ['Distance–time graph', 'Masofa–vaqt grafigi', 'График «путь — время»'],
    ['Rate of change', 'O‘zgarish tezligi', 'Скорость изменения'],
    ['Conversion graph', 'Almashtirish grafigi', 'График перевода единиц']
  ],
  timing: [[18, 'Sketch three lines from memory'], [36, 'Gradient and intercept'], [30, 'Parallel and perpendicular'], [24, 'Real-life graphs'], [12, 'Homework']],
  sections: [
    {
      h: 'y = mx + c, read straight off',
      html: `${eq(m('y = mx + c') + ' — ' + m('m') + ' is the gradient, ' + m('c') + ' is where the line cuts the ' + m('y') + '-axis', true)}
      {{fig:gradientIntercept:The gradient is rise ÷ run; c is the height at which the line crosses the y-axis.}}
      <p>${m('y = 2x − 3')} climbs 2 for every 1 across and passes through ${m('(0, −3)')}. That is enough
      to draw it: mark ${m('(0, −3)')}, then step 1 right and 2 up, and join.</p>
      <div class="keybox"><div class="klabel">Gradient from two points</div>
      ${eq(m('m = ' + f('y₂ − y₁', 'x₂ − x₁')), true)}
      Take the differences in the <b>same order</b> top and bottom, or the sign comes out wrong.</div>
      <p>A positive gradient rises left to right, a negative one falls, and a gradient of 0 is a
      horizontal line ${m('y = c')}. A vertical line ${m('x = k')} has <b>no</b> gradient — the run is
      zero and you cannot divide by it.</p>`
    },
    {
      h: 'Parallel and perpendicular',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Relationship</th><th>Gradients</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>parallel</td><td class="m">m₁ = m₂</td><td class="m">y = 3x + 1 ∥ y = 3x − 4</td></tr>
        <tr><td>perpendicular</td><td class="m">m₁ · m₂ = −1</td><td class="m">y = 3x + 1 ⟂ y = −⅓x + 2</td></tr>
      </tbody></table></div>
      <p>To find the perpendicular gradient: turn the fraction upside down and change its sign. For
      ${m('m = ' + f('2', '5'))} the perpendicular gradient is ${m('−' + f('5', '2'))}.</p>
      <p>An equation given as ${m('2x + 3y = 12')} hides its gradient. Rearrange into
      ${m('y = mx + c')} form first:</p>
      ${eq(m('3y = −2x + 12') + '&nbsp;⟹&nbsp;' + m('y = −' + f('2', '3') + 'x + 4'))}
      <p>Gradient ${m('−' + f('2', '3'))}, intercept ${m('4')}.</p>`
    },
    {
      h: 'Graphs that tell a story',
      html: `<p>On a <b>distance–time</b> graph the gradient <i>is</i> the speed:</p>
      <ul>
        <li>a steep line — moving fast;</li>
        <li>a gentle line — moving slowly;</li>
        <li>a horizontal line — stopped;</li>
        <li>a line coming back down — returning towards the start.</li>
      </ul>
      <p>Always read the axes before the shape. The same rising line means “getting faster” on a
      speed–time graph but “moving at a steady speed” on a distance–time graph.</p>
      {{fig:scatterGraph:A scatter graph shows the relationship between two quantities; a line of best fit summarises the trend.}}
      <p>On a <b>scatter graph</b> the trend can be positive, negative or absent. A line of best fit
      passes through the middle of the cloud with roughly as many points above as below — and it is only
      trustworthy <b>inside</b> the range of the data.</p>
      <div class="warn"><span class="wl">Correlation is not cause</span>
      Ice-cream sales and swimming accidents rise together. Neither causes the other; hot weather causes
      both.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the gradient and y-intercept of ' + m('4x + 2y = 10') + ', and state a parallel line.',
      steps: [
        [m('2y = −4x + 10'), 'Get the ' + m('y') + ' term alone.'],
        [m('y = −2x + 5'), 'Divide everything by 2.'],
        [m('m = −2, c = 5'), ''],
        [m('y = −2x + 1'), 'Any line with the same gradient and a different intercept is parallel.']
      ],
      ans: m('m = −2, c = 5')
    },
    {
      q: 'Find the equation of the line through ' + m('(1, 5)') + ' and ' + m('(4, 14)') + '.',
      steps: [
        [m('m = ' + f('14 − 5', '4 − 1') + ' = ' + f('9', '3') + ' = 3'), 'Same order top and bottom.'],
        [m('y = 3x + c'), ''],
        [m('5 = 3 · 1 + c'), 'Substitute one of the points.'],
        [m('c = 2'), ''],
        [m('y = 3x + 2'), 'Check with ' + m('(4, 14): 12 + 2 = 14') + ' ✓']
      ],
      ans: m('y = 3x + 2')
    },
    {
      q: 'A car travels 120 km in 1.5 h, stops for 0.5 h, then returns in 2 h. Describe the distance–time graph.',
      steps: [
        [m('0 → 1.5 h'), 'A straight rise to 120 km; gradient ' + m('80 km/h') + '.'],
        [m('1.5 → 2 h'), 'Horizontal at 120 km — stopped.'],
        [m('2 → 4 h'), 'Falls back to 0; gradient ' + m('−60 km/h') + ', so a speed of ' + m('60 km/h') + ' homeward.'],
        ['Total journey 4 h, 240 km travelled.', 'The <b>displacement</b> at the end is 0.']
      ],
      ans: 'Rise (80 km/h), flat (stopped), fall (60 km/h)'
    }
  ],
  modelNote: 'Drag the two points and read the gradient off the change in x and the change in y.',
  interactive: { type: 'coordPlane', title: 'Gradient between two points' },
  quiz: [
    { q: 'The gradient of ' + m('y = 5 − 3x') + ' is:', a: [m('5'), m('3'), m('−3'), m('−5')], c: 2, why: 'Rewrite as ' + m('y = −3x + 5') + '.' },
    { q: 'A line perpendicular to ' + m('y = 4x − 1') + ' has gradient:', a: [m('4'), m('−4'), m('−' + f('1', '4')), m(f('1', '4'))], c: 2, why: m('4 · (−¼) = −1') + '.' },
    { q: 'The line through ' + m('(0, 3)') + ' and ' + m('(2, 9)') + ' is:', a: [m('y = 3x + 3'), m('y = 2x + 3'), m('y = 6x'), m('y = 3x + 2')], c: 0, why: m('m = ' + f('6', '2') + ' = 3') + ', intercept 3.' },
    { q: 'On a distance–time graph a horizontal segment means:', a: ['constant speed', 'stopped', 'going backwards', 'accelerating'], c: 1, why: 'No change in distance over time.' },
    { q: 'Rearranged, ' + m('3x − y = 7') + ' is:', a: [m('y = 3x − 7'), m('y = 7 − 3x'), m('y = 3x + 7'), m('y = −3x − 7')], c: 0, why: m('−y = −3x + 7') + ', then multiply by ' + m('−1') + '.' }
  ],
  practice: {
    easy: [
      [m('State the gradient and intercept of y = 4x − 1.'), m('m = 4, c = −1')],
      [m('State the gradient and intercept of y = −x + 6.'), m('m = −1, c = 6')],
      [m('Find the gradient through (0, 0) and (2, 6).'), m('3')],
      [m('Does (2, 7) lie on y = 3x + 1?'), 'Yes — ' + m('6 + 1 = 7')],
      [m('Where does y = 2x − 8 cut the y-axis?'), m('(0, −8)')],
      [m('Write a line parallel to y = 5x + 2.'), m('y = 5x − 3') + ' (any different intercept)'],
      [m('What is the gradient of y = 7?'), m('0')]
    ],
    med: [
      [m('Rearrange 2x + y = 9 into y = mx + c.'), m('y = −2x + 9')],
      [m('Find the gradient through (1, 2) and (5, 14).'), m('3')],
      [m('Find the equation through (0, −4) with gradient 2.'), m('y = 2x − 4')],
      [m('Where does y = 3x − 12 cut the x-axis?'), m('(4, 0)')],
      [m('Write a line perpendicular to y = 2x + 1 through the origin.'), m('y = −' + f('1', '2') + 'x')],
      [m('A walker covers 6 km in 1.5 h. Find the gradient of the distance–time graph.'), m('4 km/h')],
      [m('Rearrange 5x − 2y = 8 and state the gradient.'), m('y = ' + f('5', '2') + 'x − 4') + ', ' + m('m = ' + f('5', '2'))]
    ],
    hard: [
      [m('Find the equation through (2, 1) and (6, −7).'), m('y = −2x + 5')],
      [m('Are 3x + 2y = 6 and y = ' + f('2', '3') + 'x − 1 perpendicular?'), 'Yes — gradients ' + m('−' + f('3', '2')) + ' and ' + m(f('2', '3')) + ' multiply to ' + m('−1') + '.'],
      [m('Find where y = 2x + 1 meets y = 8 − x.'), m('(' + f('7', '3') + ', ' + f('17', '3') + ')')],
      [m('A line has gradient 3 and passes through (−2, 1). Find its x-intercept.'), m('y = 3x + 7') + ', so ' + m('(−' + f('7', '3') + ', 0)')],
      [m('The line y = mx + 4 passes through (3, −2). Find m.'), m('m = −2')],
      [m('Show that (1, 3), (3, 7) and (6, 13) are collinear.'), 'All three pairs give gradient 2, and each point satisfies ' + m('y = 2x + 1') + '.'],
      [m('A taxi charges 5000 so‘m plus 2000 so‘m per km. Write the cost as a function of distance and interpret m and c.'), m('C = 2000d + 5000') + ' — ' + m('m') + ' is the price per km, ' + m('c') + ' the fixed hire charge.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Cambridge Stage 9, Unit 10. Draw axes from ' + m('−6') + ' to ' + m('6') + ' unless told otherwise.',
  homework: [
    m('State the gradient and intercept of y = −3x + 5, and draw it.'),
    m('Rearrange 4x + 2y = 10 and state its gradient.'),
    m('Find the equation of the line through (0, 2) and (4, 10).'),
    m('Write a line parallel to, and a line perpendicular to, y = ' + f('1', '2') + 'x + 3.'),
    m('A cyclist rides 24 km in 2 h, rests 0.5 h, then rides 12 km in 1 h. Sketch the distance–time graph.'),
    'In one sentence, explain why correlation does not prove cause.'
  ]
});

G8_ALG.push({
  id: 'alg-42', stream: 'alg', grade: 8, quarter: 4, lessons: '97–98', hours: 2,
  title: 'Revision · Ratio, proportion and rates',
  subtitle: 'Cambridge insert: sharing, scaling and comparing — the quiet workhorse of every exam paper.',
  uz: 'Algebra 8 — revision', uzPage: 'Annual revision',
  cam: 'Stage 9 · 11.1–11.2', camPage: 'Learner’s Book pp. 238–252', wb: 'Workbook 11.1–11.2',
  objectives: [
    'Simplify a ratio and share a quantity in a given ratio.',
    'Use direct proportion, including the unitary method.',
    'Recognise and use inverse proportion.',
    'Work with rates, including speed and best value.'
  ],
  terms: [
    ['Ratio', 'Nisbat', 'Отношение'],
    ['Proportion', 'Proporsiya', 'Пропорция'],
    ['Direct proportion', 'To‘g‘ri proporsionallik', 'Прямая пропорциональность'],
    ['Inverse proportion', 'Teskari proporsionallik', 'Обратная пропорциональность'],
    ['Unitary method', 'Birlikka keltirish usuli', 'Метод приведения к единице'],
    ['Scale factor', 'O‘xshashlik koeffitsienti', 'Коэффициент подобия'],
    ['Rate', 'Tezlik (o‘lchov)', 'Скорость (величина)'],
    ['Best value', 'Eng foydali narx', 'Наиболее выгодная покупка'],
    ['Share in a ratio', 'Nisbatda taqsimlash', 'Разделить в отношении'],
    ['Constant of proportionality', 'Proporsionallik koeffitsienti', 'Коэффициент пропорциональности']
  ],
  timing: [[12, 'Simplify five ratios'], [20, 'Sharing in a ratio'], [20, 'Direct proportion'], [20, 'Inverse proportion and rates'], [8, 'Homework']],
  sections: [
    {
      h: 'Ratio and sharing',
      html: `<p>A ratio compares parts. Simplify it exactly as you would a fraction, by dividing every
      term by the same number:</p>
      ${eq(m('18 : 24 : 30 = 3 : 4 : 5'), true)}
      <div class="keybox"><div class="klabel">Sharing in a ratio</div>
      <ol style="margin:0">
        <li>Add the parts — that is how many equal shares there are.</li>
        <li>Divide the total by the number of parts to get <b>one part</b>.</li>
        <li>Multiply back up for each share.</li>
      </ol></div>
      <p>Share ${m('600 000')} so‘m in the ratio ${m('2 : 3 : 5')}: there are ${m('10')} parts, so one
      part is ${m('60 000')}, giving ${m('120 000')}, ${m('180 000')} and ${m('300 000')}. Check the sum
      — it must return the original total.</p>
      <div class="warn"><span class="wl">Ratio ≠ fraction</span>
      In ${m('2 : 3')} the first quantity is ${m(f('2', '5'))} of the total, not ${m(f('2', '3'))}.
      ${m(f('2', '3'))} is how it compares with the <i>other part</i>.</div>`
    },
    {
      h: 'Direct and inverse proportion',
      html: `<div class="tablewrap"><table>
      <thead><tr><th></th><th>Direct</th><th>Inverse</th></tr></thead>
      <tbody>
        <tr><td>In words</td><td>double one, double the other</td><td>double one, halve the other</td></tr>
        <tr><td>Rule</td><td class="m">y = kx</td><td class="m">xy = k</td></tr>
        <tr><td>Graph</td><td>straight line through ${m('(0, 0)')}</td><td>a hyperbola</td></tr>
        <tr><td>Example</td><td>cost of petrol vs litres</td><td>workers vs days to finish</td></tr>
      </tbody></table></div>
      {{fig:hyperbola:Inverse proportion: as one quantity grows the other shrinks, and their product stays the same.}}
      <p>The <b>unitary method</b> settles almost every direct-proportion question: find the value of
      one, then multiply. If 7 books cost ${m('84 000')} so‘m, one costs ${m('12 000')}, so 11 cost
      ${m('132 000')}.</p>
      <p>For inverse proportion, find the <b>product</b> instead. If 4 workers need 18 days, the job is
      ${m('4 · 18 = 72')} worker-days; 6 workers need ${m('72 ÷ 6 = 12')} days.</p>`
    },
    {
      h: 'Rates and best value',
      html: `<p>A <b>rate</b> compares two different units — km/h, so‘m per kg, litres per 100 km.</p>
      ${eq(m('speed = ' + f('distance', 'time')) + ',&nbsp;&nbsp;' + m('distance = speed · time') + ',&nbsp;&nbsp;' + m('time = ' + f('distance', 'speed')), true)}
      <p>For <b>best value</b>, reduce every offer to the same unit and compare:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Pack</th><th>Price</th><th>Price per kg</th></tr></thead>
      <tbody>
        <tr><td>2 kg</td><td class="m">36 000</td><td class="m">18 000</td></tr>
        <tr><td>3 kg</td><td class="m">51 000</td><td class="m">17 000</td></tr>
        <tr><td>5 kg</td><td class="m">87 500</td><td class="m">17 500</td></tr>
      </tbody></table></div>
      <p>The 3 kg pack is the best value — bigger is not automatically cheaper, which is exactly what the
      question is testing.</p>
      <div class="warn"><span class="wl">Units first</span>
      45 minutes is ${m('0.75')} hours, not ${m('0.45')}. Convert before dividing, or the speed is
      nonsense.</div>`
    }
  ],
  examples: [
    {
      q: 'Share 84 sweets between A, B and C in the ratio ' + m('3 : 4 : 5') + '.',
      steps: [
        [m('3 + 4 + 5 = 12'), 'Twelve equal parts.'],
        [m('84 ÷ 12 = 7'), 'One part.'],
        [m('A = 21, B = 28, C = 35'), 'Multiply back up.'],
        [m('21 + 28 + 35 = 84'), 'Check ✓']
      ],
      ans: m('21, 28, 35')
    },
    {
      q: '5 workers build a wall in 12 days. How long would 8 workers take?',
      steps: [
        ['More workers, fewer days — <b>inverse</b> proportion.', 'Do not multiply by ' + m(f('8', '5')) + '.'],
        [m('5 · 12 = 60') + ' worker-days', 'The size of the job.'],
        [m('60 ÷ 8 = 7.5'), ''],
        ['7½ days.', 'Fewer than 12, as expected.']
      ],
      ans: m('7.5 days')
    },
    {
      q: 'A train covers 210 km in 2 h 30 min. Find its average speed, and how far it goes in 40 minutes.',
      steps: [
        [m('2 h 30 min = 2.5 h'), 'Convert first.'],
        [m('v = ' + f('210', '2.5') + ' = 84 km/h'), ''],
        [m('40 min = ' + f('2', '3') + ' h'), ''],
        [m('84 · ' + f('2', '3') + ' = 56 km'), '']
      ],
      ans: m('84 km/h; 56 km')
    }
  ],
  modelNote: 'Slide the value and watch the product stay constant — that is what inverse proportion means.',
  interactive: { type: 'hyperbola', title: 'Inverse proportion: xy stays constant' },
  quiz: [
    { q: m('12 : 18') + ' in its simplest form is:', a: [m('6 : 9'), m('2 : 3'), m('3 : 2'), m('4 : 6')], c: 1, why: 'Divide both by 6.' },
    { q: m('90') + ' shared in the ratio ' + m('2 : 3') + ' gives:', a: [m('30 and 60'), m('36 and 54'), m('45 and 45'), m('20 and 70')], c: 1, why: 'Five parts of 18.' },
    { q: '6 pipes fill a tank in 10 h. Four pipes take:', a: [m('15 h'), m('6.7 h'), m('20 h'), m('8 h')], c: 0, why: m('6 · 10 = 60') + ', then ' + m('60 ÷ 4 = 15') + '.' },
    { q: '3 kg costs ' + m('45 000') + '. What do 7 kg cost?', a: [m('90 000'), m('105 000'), m('115 000'), m('135 000')], c: 1, why: 'One kg is ' + m('15 000') + '.' },
    { q: '150 km in 1 h 15 min is a speed of:', a: [m('100 km/h'), m('120 km/h'), m('125 km/h'), m('115 km/h')], c: 1, why: m('150 ÷ 1.25 = 120') + '.' }
  ],
  practice: {
    easy: [
      [m('Simplify 20 : 35.'), m('4 : 7')],
      [m('Share 60 in the ratio 1 : 2 : 3.'), m('10, 20, 30')],
      [m('4 pens cost 20 000 so‘m. Find the cost of 7.'), m('35 000 so‘m')],
      [m('A car travels 180 km in 3 h. Find its speed.'), m('60 km/h')],
      [m('Simplify 0.5 : 2.'), m('1 : 4')],
      [m('If y = 4x, find y when x = 7.'), m('28')],
      [m('2 kg of rice costs 24 000. Find the price per kg.'), m('12 000 so‘m')]
    ],
    med: [
      [m('Share 720 000 so‘m in the ratio 4 : 5 : 7.'), m('180 000, 225 000, 315 000')],
      [m('9 workers finish in 20 days. How long for 12 workers?'), m('15 days')],
      [m('5 books cost 87 500. Find the cost of 8.'), m('140 000 so‘m')],
      [m('A journey of 240 km takes 3 h 20 min. Find the speed.'), m('72 km/h')],
      [m('y is directly proportional to x, and y = 18 when x = 6. Find y when x = 11.'), m('k = 3, y = 33')],
      [m('Which is better value: 4 kg for 62 000 or 6 kg for 90 000?'), m('6 kg') + ' — ' + m('15 000/kg') + ' against ' + m('15 500/kg')],
      [m('The ratio of boys to girls is 5 : 4 and there are 20 boys. Find the class size.'), m('36')]
    ],
    hard: [
      [m('A and B share money in the ratio 3 : 7. B gets 60 000 more than A. Find the total.'), m('150 000 so‘m')],
      [m('y is inversely proportional to x, and y = 8 when x = 3. Find y when x = 12.'), m('k = 24, y = 2')],
      [m('Three people share 500 000 in the ratio 2 : 3 : 5. How much more does the last get than the first?'), m('150 000 so‘m')],
      [m('A car does 90 km at 60 km/h and 90 km at 90 km/h. Find the average speed for the whole trip.'), m('72 km/h') + ' — ' + m('180 ÷ 2.5') + ', not the mean of 60 and 90'],
      [m('The ratio a : b is 2 : 3 and b : c is 4 : 5. Find a : b : c.'), m('8 : 12 : 15')],
      [m('6 machines make 480 parts in 4 h. How many parts do 9 machines make in 5 h?'), m('900')],
      [m('Explain why doubling the workers does not always halve the time in practice.'), 'The model assumes every worker is equally productive and never gets in another’s way; real jobs have tasks that cannot be split and workers who must wait for each other.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Cambridge Stage 9, Unit 11. Say “direct” or “inverse” before you calculate.',
  homework: [
    m('Simplify 45 : 60 : 75.'),
    m('Share 480 000 so‘m in the ratio 3 : 5.'),
    m('7 kg costs 91 000. Find the cost of 12 kg.'),
    m('8 workers take 15 days. How long do 10 workers take?'),
    m('A bus covers 156 km in 2 h 36 min. Find its speed.'),
    m('Which is better value: 3 for 21 000 or 5 for 34 000?')
  ]
});

G8_ALG.push({
  id: 'alg-43', stream: 'alg', grade: 8, quarter: 4, lessons: '99–100', hours: 2,
  title: 'Revision · Probability',
  subtitle: 'Cambridge insert: putting a number on “how likely”, and combining two events.',
  uz: 'Algebra 8 — revision', uzPage: 'Annual revision',
  cam: 'Stage 9 · 12.1–12.4', camPage: 'Learner’s Book pp. 255–278', wb: 'Workbook 12.1–12.4',
  objectives: [
    'Calculate the probability of an event from equally likely outcomes.',
    'Use the fact that probabilities of an event and its complement add to 1.',
    'Use a table or tree diagram for two events.',
    'Compare experimental with theoretical probability.'
  ],
  terms: [
    ['Probability', 'Ehtimollik', 'Вероятность'],
    ['Event', 'Hodisa', 'Событие'],
    ['Equally likely', 'Teng imkoniyatli', 'Равновозможные'],
    ['Favourable outcome', 'Qulay natija', 'Благоприятный исход'],
    ['Complement', 'Qarama-qarshi hodisa', 'Противоположное событие'],
    ['Mutually exclusive', 'Birgalikda bo‘lmaydigan', 'Несовместные'],
    ['Independent events', 'Bog‘liq bo‘lmagan hodisalar', 'Независимые события'],
    ['Tree diagram', 'Daraxt diagrammasi', 'Дерево вероятностей'],
    ['Experimental probability', 'Tajribaviy ehtimollik', 'Опытная (частотная) вероятность'],
    ['Expected frequency', 'Kutilayotgan chastota', 'Ожидаемая частота']
  ],
  timing: [[12, 'Order five events by likelihood'], [20, 'The basic formula'], [20, 'Complement and mutually exclusive events'], [20, 'Two events'], [8, 'Homework']],
  sections: [
    {
      h: 'Putting a number on chance',
      html: `<div class="keybox"><div class="klabel">For equally likely outcomes</div>
      ${eq(m('P(A) = ' + f('number of favourable outcomes', 'total number of outcomes')), true)}
      Every probability lies between ${m('0')} (impossible) and ${m('1')} (certain).</div>
      <p>One die: ${m('P(even) = ' + f('3', '6') + ' = ' + f('1', '2'))}, ${m('P(7) = 0')},
      ${m('P(less than 7) = 1')}. Give the answer as a fraction in its simplest form unless a decimal or
      percentage is asked for.</p>
      <p>The word “equally likely” is doing real work. A drawing pin can land point-up or point-down, but
      not with probability ${m(f('1', '2'))} each — only an experiment can tell you.</p>`
    },
    {
      h: 'Complement, and events that exclude each other',
      html: `${eq(m('P(not A) = 1 − P(A)'), true)}
      <p>If the probability of rain is ${m('0.3')}, the probability of no rain is ${m('0.7')}. This one
      line turns many “at least one” questions into a single subtraction — exactly as in the counting
      lesson.</p>
      <div class="keybox"><div class="klabel">Mutually exclusive events</div>
      If ${m('A')} and ${m('B')} cannot happen together, ${m('P(A or B) = P(A) + P(B)')}.<br>
      A die shows a 2 or a 5: ${m(f('1', '6') + ' + ' + f('1', '6') + ' = ' + f('1', '3'))}.</div>
      <div class="warn"><span class="wl">Only when they exclude each other</span>
      “Even” and “greater than 3” are not mutually exclusive — 4 and 6 belong to both — so adding the
      probabilities double-counts them.</div>`
    },
    {
      h: 'Two events, and what experiments show',
      html: `<p>For two <b>independent</b> events, multiply along the branches of a tree:</p>
      ${eq(m('P(A and B) = P(A) · P(B)'), true)}
      {{fig:treeDiagram:Multiply along a branch to get the probability of that path; add the paths that satisfy the event.}}
      <p>Two coins: ${m('P(two heads) = ' + f('1', '2') + ' · ' + f('1', '2') + ' = ' + f('1', '4'))}.
      For “exactly one head” there are two successful paths, HT and TH, so add:
      ${m(f('1', '4') + ' + ' + f('1', '4') + ' = ' + f('1', '2'))}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th></th><th>Theoretical</th><th>Experimental</th></tr></thead>
      <tbody>
        <tr><td>Comes from</td><td>counting outcomes</td><td>actually doing the trials</td></tr>
        <tr><td>Formula</td><td class="m">${f('favourable', 'total')}</td><td class="m">${f('times it happened', 'times tried')}</td></tr>
        <tr><td>Behaviour</td><td>fixed</td><td>settles towards the theoretical value as trials increase</td></tr>
      </tbody></table></div>
      <p><b>Expected frequency</b> = probability × number of trials. In 300 throws of a die you expect
      about ${m('300 · ' + f('1', '6') + ' = 50')} sixes — “about”, never exactly.</p>`
    }
  ],
  examples: [
    {
      q: 'A bag holds 5 red, 3 blue and 4 green counters. One is taken at random. Find ' + m('P(red)') + ' and ' + m('P(not green)') + '.',
      steps: [
        [m('5 + 3 + 4 = 12'), 'Total outcomes.'],
        [m('P(red) = ' + f('5', '12')), ''],
        [m('P(green) = ' + f('4', '12') + ' = ' + f('1', '3')), ''],
        [m('P(not green) = 1 − ' + f('1', '3') + ' = ' + f('2', '3')), 'Use the complement.']
      ],
      ans: m('P(red) = ' + f('5', '12') + ', P(not green) = ' + f('2', '3'))
    },
    {
      q: 'Two dice are thrown. Find the probability that the total is 9.',
      steps: [
        [m('36') + ' equally likely outcomes', 'A 6 by 6 table.'],
        [m('(3,6), (4,5), (5,4), (6,3)'), 'Four ways to make 9.'],
        [m('P = ' + f('4', '36') + ' = ' + f('1', '9')), '']
      ],
      ans: m(f('1', '9'))
    },
    {
      q: 'The probability that a bus is late is ' + m('0.2') + '. Find the probability that it is late on both of two days, and that it is late on exactly one.',
      steps: [
        [m('P(late, late) = 0.2 · 0.2 = 0.04'), 'Independent days — multiply.'],
        [m('P(late, on time) = 0.2 · 0.8 = 0.16'), 'First branch.'],
        [m('P(on time, late) = 0.8 · 0.2 = 0.16'), 'Second branch.'],
        [m('0.16 + 0.16 = 0.32'), 'Add the two successful paths.']
      ],
      ans: m('0.04') + ' and ' + m('0.32')
    }
  ],
  modelNote: 'Work through one probability question at a time; ask for the answer before revealing each step.',
  interactive: {
    type: 'fractionCancel',
    title: 'Probability, step by step',
    hint: 'Pick a question and reveal the reasoning one line at a time.',
    items: [
      {
        title: 'One card from 1–20',
        start: 'A card numbered <span class="m">1</span> to <span class="m">20</span> is drawn. Find <span class="m">P(multiple of 3)</span>.',
        steps: [
          ['<span class="m">3, 6, 9, 12, 15, 18</span>', 'List the favourable outcomes.'],
          ['<span class="m">6</span> favourable out of <span class="m">20</span>', ''],
          ['<span class="m">' + f('6', '20') + ' = ' + f('3', '10') + '</span>', 'Simplify.']
        ],
        answer: '<span class="m">P = ' + f('3', '10') + ' = 0.3</span>'
      },
      {
        title: 'At least one head in three tosses',
        start: 'A coin is tossed three times. Find <span class="m">P(at least one head)</span>.',
        steps: [
          ['Direct counting needs three cases — one, two or three heads.', 'Slow, and easy to double-count.'],
          ['<span class="m">P(no heads) = P(TTT) = ' + f('1', '8') + '</span>', 'Only one path gives no head at all.'],
          ['<span class="m">1 − ' + f('1', '8') + '</span>', 'The complement.']
        ],
        answer: '<span class="m">P = ' + f('7', '8') + '</span>'
      },
      {
        title: 'Two counters, without replacement',
        start: 'A bag holds 4 red and 6 blue. Two are taken <b>without replacement</b>. Find <span class="m">P(both red)</span>.',
        steps: [
          ['<span class="m">P(first red) = ' + f('4', '10') + '</span>', ''],
          ['<span class="m">P(second red) = ' + f('3', '9') + '</span>', 'One red is gone, and one counter fewer in total.'],
          ['<span class="m">' + f('4', '10') + ' · ' + f('3', '9') + ' = ' + f('12', '90') + '</span>', 'Multiply along the branch.']
        ],
        answer: '<span class="m">P = ' + f('2', '15') + '</span>'
      },
      {
        title: 'Expected frequency',
        start: 'A spinner has <span class="m">P(red) = 0.35</span>. It is spun 200 times. How many reds are expected?',
        steps: [
          ['Expected frequency <span class="m">= P × number of trials</span>', ''],
          ['<span class="m">0.35 · 200</span>', ''],
          ['<span class="m">= 70</span>', 'Expect <i>about</i> 70 — an experiment will not land exactly there.']
        ],
        answer: 'About <span class="m">70</span> reds.'
      }
    ]
  },
  quiz: [
    { q: 'A die is thrown. ' + m('P(more than 4)') + ' is:', a: [m(f('1', '6')), m(f('1', '3')), m(f('1', '2')), m(f('2', '3'))], c: 1, why: '5 and 6 — two outcomes out of six.' },
    { q: 'If ' + m('P(A) = 0.42') + ' then ' + m('P(not A)') + ' is:', a: [m('0.42'), m('0.58'), m('0.68'), m('1.42')], c: 1, why: m('1 − 0.42') + '.' },
    { q: 'Two coins are tossed. ' + m('P(exactly one head)') + ' is:', a: [m(f('1', '4')), m(f('1', '2')), m(f('1', '3')), m(f('3', '4'))], c: 1, why: 'HT and TH out of four outcomes.' },
    { q: 'A spinner has ' + m('P(blue) = 0.25') + '. In 80 spins expect about:', a: [m('16'), m('20'), m('25'), m('40')], c: 1, why: m('0.25 · 80 = 20') + '.' },
    { q: 'Which pair is NOT mutually exclusive for one die?', a: ['“2” and “5”', '“even” and “odd”', '“even” and “more than 3”', '“1” and “6”'], c: 2, why: '4 and 6 satisfy both.' }
  ],
  practice: {
    easy: [
      [m('A die is thrown. Find P(3).'), m(f('1', '6'))],
      [m('A die is thrown. Find P(odd).'), m(f('1', '2'))],
      [m('A bag has 3 red and 7 blue. Find P(red).'), m(f('3', '10'))],
      [m('If P(win) = 0.4, find P(not win).'), m('0.6')],
      [m('A coin is tossed twice. Find P(two tails).'), m(f('1', '4'))],
      [m('A card is drawn from 1–10. Find P(more than 7).'), m(f('3', '10'))],
      [m('A spinner has P(red) = 0.5. In 60 spins, expect how many reds?'), m('30')]
    ],
    med: [
      [m('Two dice are thrown. Find P(total 7).'), m(f('1', '6'))],
      [m('A bag has 4 red, 5 blue, 6 green. Find P(not blue).'), m(f('2', '3'))],
      [m('P(late) = 0.15. Find P(late on both of two days).'), m('0.0225')],
      [m('A coin is tossed three times. Find P(exactly two heads).'), m(f('3', '8'))],
      [m('A card is drawn from 1–20. Find P(prime).'), m(f('8', '20') + ' = ' + f('2', '5'))],
      [m('P(A) = 0.3, P(B) = 0.5 and A, B are mutually exclusive. Find P(A or B).'), m('0.8')],
      [m('A spinner has P(green) = 0.35. In 400 spins, expect how many greens?'), m('140')]
    ],
    hard: [
      [m('A bag has 5 red and 4 blue. Two are taken without replacement. Find P(both red).'), m(f('5', '9') + ' · ' + f('4', '8') + ' = ' + f('5', '18'))],
      [m('Two dice are thrown. Find P(at least one 6).'), m(f('11', '36'))],
      [m('P(rain) = 0.4 on each of three days. Find P(no rain at all).'), m('0.6³ = 0.216')],
      [m('P(rain) = 0.4 on each of three days. Find P(at least one wet day).'), m('1 − 0.216 = 0.784')],
      [m('A bag has 6 red and 4 blue. One is taken and replaced, then another. Find P(different colours).'), m('2 · 0.6 · 0.4 = 0.48')],
      [m('A die is thrown 120 times and gives 32 sixes. Compare experimental and theoretical probability.'), m(f('32', '120') + ' ≈ 0.27') + ' against ' + m(f('1', '6') + ' ≈ 0.17') + ' — noticeably high; either chance, or the die is biased'],
      [m('Explain why P(A or B) = P(A) + P(B) can fail.'), 'If A and B can happen together, the outcomes in both are counted twice; the correct rule subtracts ' + m('P(A and B)') + '.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'Cambridge Stage 9, Unit 12. Simplify every fraction.',
  homework: [
    m('A bag has 7 red and 5 blue. Find P(blue) and P(not blue).'),
    m('Two dice are thrown. Find P(total 5).'),
    m('A coin is tossed three times. Find P(at least one tail).'),
    m('P(faulty) = 0.05. In 600 items, how many faulty ones are expected?'),
    m('A card is drawn from 1–15. Find P(multiple of 4).'),
    'Explain the difference between experimental and theoretical probability in two sentences.'
  ]
});

G8_ALG.push({
  id: 'alg-44', stream: 'alg', grade: 8, quarter: 4, lessons: '101–102', hours: 2,
  title: 'Control work 8 · Annual review',
  subtitle: 'The whole of Grade 8 algebra in one paper — and the four habits that decide the grade.',
  uz: 'Algebra 8 — annual review', uzPage: 'Chapters I–IV',
  cam: 'Stage 9 · units 1–15', camPage: 'Learner’s Book, whole course', wb: 'Workbook, whole course',
  objectives: [
    'Assess the year: fractions, roots, quadratics, inequalities, data and counting.',
    'Diagnose each lost mark by error type.',
    'Set out the summer work that follows from the result.'
  ],
  timing: [[4, 'Setting up'], [72, 'The paper'], [4, 'Collect in']],
  terms: [
    ['Annual review', 'Yillik takrorlash', 'Годовое повторение'],
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Domain (allowed values)', 'Aniqlanish sohasi', 'Область допустимых значений'],
    ['Discriminant', 'Diskriminant', 'Дискриминант'],
    ['Inequality', 'Tengsizlik', 'Неравенство'],
    ['Modulus', 'Modul', 'Модуль'],
    ['Estimated mean', 'Taxminiy o‘rta', 'Оценка среднего'],
    ['Counting principle', 'Sanashning asosiy qoidasi', 'Основной принцип счёта'],
    ['Check by substitution', 'O‘rniga qo‘yib tekshirish', 'Проверка подстановкой']
  ],
  sections: [
    {
      h: 'Lesson 101 — the paper (40 minutes)',
      html: `<p>Two variants of ten tasks. Tasks 1–6 are worth 1 mark, tasks 7–10 are worth 2:</p>
      <ul>
        <li>task 1 · simplify an algebraic fraction</li>
        <li>task 2 · add two fractions with different denominators</li>
        <li>task 3 · simplify a square root</li>
        <li>task 4 · solve a quadratic equation</li>
        <li>task 5 · solve a linear inequality and show it on a number line</li>
        <li>task 6 · find the mean, median and mode of a small list</li>
        <li>task 7 · a word problem leading to a quadratic</li>
        <li>task 8 · a system of two inequalities</li>
        <li>task 9 · the nth term or the gradient of a line</li>
        <li>task 10 · a counting or probability question</li>
      </ul>
      <p><b>Marking note:</b> in task 1 the excluded values must be stated; in task 7 the impossible root
      must be rejected in writing.</p>`
    },
    {
      h: 'Lesson 102 — work on mistakes and the summer plan (40 minutes)',
      html: `<div class="keybox"><div class="klabel">The four habits that decide this paper</div>
      <ol style="margin:0">
        <li><b>Write the domain</b> before touching an algebraic fraction.</li>
        <li><b>Never divide by an unknown</b> — factorise, so that ${m('x = 0')} is not lost.</li>
        <li><b>Reverse the inequality sign</b> whenever you multiply or divide by a negative number.</li>
        <li><b>Check the answer against the question</b>, not just against your own working — a
        length cannot be negative, a probability cannot exceed 1.</li>
      </ol></div>
      <p>Each pupil writes the habit number beside every lost mark. The topics that appear twice in that
      list become the summer plan: five problems a week from that section, no more.</p>
      <div class="warn"><span class="wl">Looking ahead to Grade 9</span>
      Everything next year rests on three things from this one: factorising confidently, solving a
      quadratic without hesitation, and reading a graph. If any of those is shaky, that is where the
      summer goes.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the error: ' + m(f('x<sup>2</sup> − 9', 'x − 3') + ' = x + 3') + ' for every x',
      steps: [
        ['The cancelling is right, but the domain is not.', m('x − 3') + ' is in the denominator.'],
        [m('x ≠ 3'), 'At ' + m('x = 3') + ' the original fraction has no value at all.'],
        [m(f('x<sup>2</sup> − 9', 'x − 3') + ' = x + 3') + ', ' + m('x ≠ 3'), 'The restriction is part of the answer.']
      ],
      ans: m('x + 3, x ≠ 3')
    },
    {
      q: 'Find the error: ' + m('−2x > 6') + ' so ' + m('x > −3'),
      steps: [
        ['Both sides were divided by ' + m('−2') + '.', 'That reverses the order.'],
        [m('x < −3'), 'The sign turns round.'],
        [m('x = −5') + ': ' + m('−2 · (−5) = 10 > 6') + ' ✓', 'Test a value to be sure.']
      ],
      ans: m('x < −3')
    }
  ],
  modelNote: 'Show each piece of wrong working, take a vote on the habit that was missing, then reveal.',
  interactive: {
    type: 'fractionCancel',
    title: 'Which habit was missing?',
    hint: 'Decide before you reveal.',
    items: [
      {
        title: 'Habit 1 — no domain written',
        start: '<b>Claimed:</b> <span class="m">' + f('x<sup>2</sup> − 4', 'x − 2') + ' = x + 2</span> for every <span class="m">x</span>',
        steps: [
          ['<span class="m">x<sup>2</sup> − 4 = (x − 2)(x + 2)</span>', 'The factorising is correct.'],
          ['The denominator vanishes at <span class="m">x = 2</span>.', 'There the original expression is undefined.'],
          ['Write <span class="m">x ≠ 2</span> beside the answer.', 'A mark hangs on that line.']
        ],
        answer: '<span class="m">x + 2</span>, <span class="m">x ≠ 2</span>'
      },
      {
        title: 'Habit 2 — divided by the unknown',
        start: '<b>Claimed:</b> <span class="m">3x<sup>2</sup> = 12x</span> gives <span class="m">x = 4</span>',
        steps: [
          ['<span class="m">3x<sup>2</sup> − 12x = 0</span>', 'Bring everything to one side instead of dividing.'],
          ['<span class="m">3x(x − 4) = 0</span>', ''],
          ['<span class="m">x = 0</span> or <span class="m">x = 4</span>', 'The root 0 was thrown away.']
        ],
        answer: '<span class="m">x = 0, x = 4</span>'
      },
      {
        title: 'Habit 3 — sign not reversed',
        start: '<b>Claimed:</b> <span class="m">5 − 3x ≥ 14</span> gives <span class="m">x ≥ −3</span>',
        steps: [
          ['<span class="m">−3x ≥ 9</span>', 'Subtract 5 from both sides.'],
          ['Dividing by <span class="m">−3</span> reverses <span class="m">≥</span> into <span class="m">≤</span>.', ''],
          ['<span class="m">x ≤ −3</span>', 'Test <span class="m">x = −4</span>: <span class="m">5 + 12 = 17 ≥ 14</span> ✓']
        ],
        answer: '<span class="m">x ≤ −3</span>'
      },
      {
        title: 'Habit 4 — answer not checked against the question',
        start: '<b>Claimed:</b> a rectangle 3 cm longer than it is wide with area 54 cm² has width <span class="m">6</span> or <span class="m">−9</span>',
        steps: [
          ['<span class="m">x<sup>2</sup> + 3x − 54 = 0</span> does give both.', 'The algebra is faultless.'],
          ['A width cannot be negative.', ''],
          ['Write: “<span class="m">x = −9</span> is rejected as a length”.', 'Then state the sides.']
        ],
        answer: 'Width <span class="m">6 cm</span>, length <span class="m">9 cm</span>.'
      }
    ]
  },
  quiz: [
    { q: m(f('x<sup>2</sup> − 25', 'x − 5')) + ' simplifies to:', a: [m('x + 5'), m('x + 5, x ≠ 5'), m('x − 5'), m('x<sup>2</sup> − 5')], c: 1, why: 'The excluded value is part of the answer.' },
    { q: m('−4x < 20') + ' gives:', a: [m('x < −5'), m('x > −5'), m('x < 5'), m('x > 5')], c: 1, why: 'Dividing by a negative reverses the sign.' },
    { q: m('2x<sup>2</sup> = 10x') + ' has roots:', a: [m('x = 5'), m('x = 0, 5'), m('x = ±5'), m('x = 0')], c: 1, why: 'Factorise; never divide by ' + m('x') + '.' },
    { q: 'A probability comes out as ' + m('1.2') + '. This means:', a: ['the event is certain', 'there is an error', 'the event is very likely', 'multiply by 100'], c: 1, why: 'No probability can exceed 1.' },
    { q: m(sr('50')) + ' in simplest form is:', a: [m('5' + sr('2')), m('2' + sr('5')), m('25' + sr('2')), m('10' + sr('5'))], c: 0, why: m('50 = 25 · 2') + '.' }
  ],
  practice: {
    easy: [
      [m('<b>Variant 1, task 1.</b> Simplify ' + f('x<sup>2</sup> − 16', 'x + 4') + ' and state the excluded value.'), m('x − 4, x ≠ −4')],
      [m('<b>Task 2.</b> Simplify ' + f('1', 'x') + ' + ' + f('1', '2x')), m(f('3', '2x') + ', x ≠ 0')],
      [m('<b>Task 3.</b> Simplify ' + sr('72')), m('6' + sr('2'))],
      [m('<b>Task 4.</b> Solve x<sup>2</sup> − 7x + 10 = 0'), m('x = 2, x = 5')],
      [m('<b>Task 5.</b> Solve 3x − 4 < 11'), m('x < 5')],
      [m('<b>Task 6.</b> Find the mean, median and mode of 4, 8, 4, 6, 8, 4'), m('mean 5.67, median 5, mode 4')],
      [m('<b>Task 9.</b> Find the nth term of 5, 9, 13, 17, …'), m('4n + 1')]
    ],
    med: [
      [m('<b>Variant 2, task 1.</b> Simplify ' + f('3x + 12', 'x<sup>2</sup> − 16')), m(f('3', 'x − 4') + ', x ≠ ±4')],
      [m('<b>Task 2.</b> Simplify ' + f('2', 'x − 1') + ' − ' + f('1', 'x')), m(f('x + 1', 'x(x − 1)') + ', x ≠ 0, 1')],
      [m('<b>Task 4.</b> Solve 2x<sup>2</sup> − 7x + 3 = 0'), m('x = 3, x = 0.5')],
      [m('<b>Task 5.</b> Solve 5 − 2x ≥ 1 and show it on a number line.'), m('x ≤ 2')],
      [m('<b>Task 8.</b> Solve the system x + 1 > 0 and 2x − 6 < 0.'), m('−1 < x < 3')],
      [m('<b>Task 9.</b> Find the gradient of the line through (1, 4) and (5, 16).'), m('3')],
      [m('<b>Task 10.</b> Two dice are thrown. Find P(total 6).'), m(f('5', '36'))]
    ],
    hard: [
      [m('<b>Task 7.</b> A rectangle is 4 cm longer than wide and has area 96 cm². Find its sides.'), m('8 cm × 12 cm') + ' (reject ' + m('−12') + ')'],
      [m('<b>Task 7, variant 2.</b> A number and its square add to 56. Find the positive value.'), m('7')],
      [m('Solve |x − 3| < 5'), m('−2 < x < 8')],
      [m('Solve x<sup>2</sup> − 5x + 6 > 0'), m('x < 2') + ' or ' + m('x > 3')],
      [m('A code of 3 digits from 1–5 must contain at least one 5. How many codes?'), m('125 − 64 = 61')],
      [m('Simplify ' + f('x<sup>2</sup> − 5x + 6', 'x<sup>2</sup> − 9') + ' and state the excluded values.'), m(f('x − 2', 'x + 3') + ', x ≠ ±3')],
      [m('One root of x<sup>2</sup> + bx + 21 = 0 is 3. Find b and the other root.'), m('b = −10') + ', other root ' + m('7')]
    ]
  },
  hwTitle: 'Summer work — 5 tasks',
  hwNote: 'Not a punishment: twenty minutes a week keeps Grade 9 easy.',
  homework: [
    'Re-solve, in full, each task you lost a mark on, with the habit number (1–4) beside it.',
    'List the two topics that appear most often in that list — those are your summer topics.',
    'Five problems a week from each of those two topics. No more.',
    m('Practise until you can factorise x<sup>2</sup> + bx + c and solve any quadratic without hesitating.'),
    m('Practise reading the gradient and intercept off any straight-line graph.')
  ]
});
