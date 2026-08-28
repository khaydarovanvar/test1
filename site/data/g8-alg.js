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
  timing: [[5, 'Warm-up'], [12, 'Explanation'], [6, 'Interactive'], [15, 'Practice'], [2, 'Homework']],
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
  timing: [[2, 'Setting up'], [36, 'The paper'], [2, 'Collect in']],
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
  timing: [[2, 'Setting up'], [36, 'The paper'], [2, 'Collect in']],
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
  sections: [
    {
      h: 'The definition',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      For ${m('a ≥ 0')} and a natural number ${m('n ≥ 2')}, the <b>arithmetic root of degree n</b> of
      ${m('a')} is the <b>non-negative</b> number whose ${m('n')}-th power is ${m('a')}:
      ${eq(m(sr('<sup>n</sup>&nbsp;a') + ' = b') + ' &nbsp;means&nbsp; ' + m('b ≥ 0') + ' and ' + m('b<sup>n</sup> = a'))}</div>
      <p>So ${m(sr('16') + ' = 4')} — and only 4. The number ${m('−4')} also squares to 16, but the
      <em>arithmetic</em> root is the non-negative one by definition.</p>
      <div class="warn"><span class="wl">When does it exist?</span>
      For <b>even</b> ${m('n')} the radicand must satisfy ${m('a ≥ 0')} — you cannot take
      ${m(sr('−9'))}. For <b>odd</b> ${m('n')} any ${m('a')} is allowed:
      ${m(sr('<sup>3</sup>&nbsp;−8') + ' = −2')}.</div>`
    },
    {
      h: 'The four properties',
      html: `<p>For ${m('a ≥ 0, b ≥ 0')}:</p>
      ${eq(m(sr('<sup>n</sup>&nbsp;ab') + ' = ' + sr('<sup>n</sup>&nbsp;a') + ' · ' + sr('<sup>n</sup>&nbsp;b')) + ' &nbsp;&nbsp;&nbsp; ' +
           m(sr('<sup>n</sup>&nbsp;' + f('a', 'b')) + ' = ' + f(sr('<sup>n</sup>&nbsp;a'), sr('<sup>n</sup>&nbsp;b')) + ',&nbsp; b > 0'), true)}
      ${eq(m('(' + sr('<sup>n</sup>&nbsp;a') + ')<sup>k</sup> = ' + sr('<sup>n</sup>&nbsp;a<sup>k</sup>')) + ' &nbsp;&nbsp;&nbsp; ' +
           m(sr('<sup>m</sup>&nbsp;' + sr('<sup>n</sup>&nbsp;a')) + ' = ' + sr('<sup>mn</sup>&nbsp;a')), true)}
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
    { q: m(sr('<sup>3</sup>&nbsp;−27')) + ' equals:', a: ['it does not exist', m('−3'), m('3'), m('−9')], c: 1, why: 'An odd-degree root accepts a negative radicand.' },
    { q: m(sr('8') + ' · ' + sr('2')) + ' equals:', a: [m('4'), m(sr('10')), m('16'), m('2' + sr('2'))], c: 0, why: '√8 · √2 = √16 = 4.' },
    { q: m(sr('9 + 16')) + ' equals:', a: [m('7'), m('5'), m('25'), m('3 + 4')], c: 1, why: '√25 = 5. Roots do not split over a sum.' }
  ],
  practice: {
    easy: [
      [m('Find ' + sr('36')), m('6')],
      [m('Find ' + sr('81')), m('9')],
      [m('Find ' + sr('<sup>3</sup>&nbsp;8')), m('2')],
      [m('Find ' + sr('<sup>3</sup>&nbsp;27')), m('3')],
      [m('Find ' + sr('100') + ' + ' + sr('25')), m('15')],
      [m('Does ' + sr('−4') + ' exist?'), 'No — an even root needs ' + m('a ≥ 0') + '.'],
      [m('Find ' + sr('<sup>3</sup>&nbsp;−8')), m('−2')]
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
      [m('Simplify ' + sr('<sup>4</sup>&nbsp;16')), m('2')],
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
    m('Find ' + sr('144') + ', ' + sr('<sup>3</sup>&nbsp;64') + ' and ' + sr('<sup>3</sup>&nbsp;−125')),
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
  sections: [
    {
      h: 'The definition',
      html: `<div class="keybox"><div class="klabel">Definition</div>
      For ${m('a > 0')} and natural ${m('m, n')} with ${m('n ≥ 2')}:
      ${eq(m('a<sup>1/n</sup> = ' + sr('<sup>n</sup>&nbsp;a')) + ' &nbsp;&nbsp;and&nbsp;&nbsp; ' +
           m('a<sup>m/n</sup> = ' + sr('<sup>n</sup>&nbsp;a<sup>m</sup>') + ' = (' + sr('<sup>n</sup>&nbsp;a') + ')<sup>m</sup>'))}
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
      ${eq(m('8<sup>2/3</sup> = (' + sr('<sup>3</sup>&nbsp;8') + ')<sup>2</sup> = 2<sup>2</sup> = 4'), true)}
      <p>Going the other way, ${m(sr('<sup>3</sup>&nbsp;8<sup>2</sup>') + ' = ' + sr('<sup>3</sup>&nbsp;64') + ' = 4')} —
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
        [m(sr('<sup>3</sup>&nbsp;27') + ' = 3'), ''],
        [m('3<sup>2</sup> = 9'), '']
      ],
      ans: m('9')
    },
    {
      q: m('Evaluate 16<sup>−3/4</sup>'),
      steps: [
        [m('16<sup>−3/4</sup> = ' + f('1', '16<sup>3/4</sup>')), 'A negative index means a reciprocal.'],
        [m(sr('<sup>4</sup>&nbsp;16') + ' = 2'), 'Root first.'],
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
        [m('= a<sup>5/6</sup>'), ' or ' + m(sr('<sup>6</sup>&nbsp;a<sup>5</sup>'))]
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
      [m('Write ' + sr('<sup>3</sup>&nbsp;a') + ' as a power'), m('a<sup>1/3</sup>')],
      [m('Write a<sup>1/4</sup> as a root'), m(sr('<sup>4</sup>&nbsp;a'))],
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
      [m('Write ' + sr('a') + ' · ' + sr('<sup>3</sup>&nbsp;a') + ' as one power'), m('a<sup>5/6</sup>')],
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
    m('Write ' + sr('<sup>4</sup>&nbsp;a<sup>3</sup>') + ' as a power with a rational index')
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
  sections: [
    {
      h: 'The routine',
      html: `<ol>
        <li>Turn every root into a power. Fractions of indices are easier than nested radicals.</li>
        <li>Apply the index laws.</li>
        <li>Collect, factorise or cancel.</li>
        <li>Convert back to root form only if the question asks for it.</li>
      </ol>
      ${eq(m(f(sr('a') + ' · ' + sr('<sup>3</sup>&nbsp;a'), sr('<sup>6</sup>&nbsp;a')) + ' = ' + f('a<sup>1/2</sup> · a<sup>1/3</sup>', 'a<sup>1/6</sup>') + ' = a<sup>1/2 + 1/3 − 1/6</sup> = a<sup>2/3</sup>'), true)}`
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
      [m('Simplify ' + sr('a') + ' · ' + sr('<sup>3</sup>&nbsp;a')), m('a<sup>5/6</sup>')],
      [m('Simplify ' + f('a', sr('a')) + ',&nbsp; a > 0'), m(sr('a'))],
      [m('Factorise a + a<sup>1/2</sup>'), m('a<sup>1/2</sup>(a<sup>1/2</sup> + 1)')]
    ],
    hard: [
      [m('Simplify ' + f(sr('a') + ' · ' + sr('<sup>3</sup>&nbsp;a'), sr('<sup>6</sup>&nbsp;a'))), m('a<sup>2/3</sup>')],
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
  timing: [[2, 'Setting up'], [36, 'The paper'], [2, 'Collect in']],
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
          [m('8<sup>2/3</sup> = (' + sr('<sup>3</sup>&nbsp;8') + ')<sup>2</sup>'), ''],
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
  sections: [
    {
      h: 'The two rules',
      html: `<div class="keybox"><div class="klabel">For positive numbers</div>
      If ${m('a > b > 0')} and ${m('n')} is a natural number, then
      ${eq(m('a<sup>n</sup> > b<sup>n</sup>') + ' &nbsp;&nbsp;and&nbsp;&nbsp; ' +
           m(sr('<sup>n</sup>&nbsp;a') + ' > ' + sr('<sup>n</sup>&nbsp;b')))}</div>
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
    m('1 < a < 8. Find the range of ' + sr('<sup>3</sup>&nbsp;a')),
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
  timing: [[2, 'Setting up'], [36, 'The paper'], [2, 'Collect in']],
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
