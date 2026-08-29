/* G10_ALG — Quarter I. Topic objects, one per lesson page. */
var G10_ALG = [];

G10_ALG.push({
  id: 'a10-01', stream: 'alg', grade: 10, quarter: 1, lessons: '1', hours: 1,
  title: 'Entry diagnostic — the Grade 9 toolkit',
  subtitle: 'One lesson to find out exactly what each learner still owns from Grade 9, before anything new is built on it.',
  uz: 'Algebra 10, Revision', uzPage: 'Повторение, pp. 6–23',
  cam: 'P1 · 1.1–1.8', camPage: 'Pure Mathematics 1, pp. 1–23', wb: 'Diagnostic paper',
  objectives: [
    'Factorise a quadratic and solve it.',
    'Use the formula and the discriminant.',
    'Simplify surds and index expressions.',
    'Read a learner’s gaps from the diagnostic and record them.'
  ],
  terms: [
    ['Diagnostic test', 'Diagnostik test', 'Диагностический тест'],
    ['Prior knowledge', 'Oldingi bilim', 'Ранее изученное'],
    ['Factorise', 'Ko‘paytuvchilarga ajratish', 'Разложить на множители'],
    ['Quadratic equation', 'Kvadrat tenglama', 'Квадратное уравнение'],
    ['Discriminant', 'Diskriminant', 'Дискриминант'],
    ['Surd', 'Irratsional ifoda', 'Иррациональное выражение'],
    ['Index (exponent)', 'Daraja ko‘rsatkichi', 'Показатель степени'],
    ['Gap', 'Bo‘shliq', 'Пробел'],
    ['Baseline', 'Boshlang‘ich daraja', 'Исходный уровень']
  ],
  timing: [[3, 'Explain the purpose — this is not for a mark'], [30, 'The paper'], [5, 'Self-mark against the answers'], [2, 'Record the two weakest sections']],
  sections: [
    {
      h: 'Why the year starts here',
      html: `<p>Grade 10 algebra spends its whole first quarter on <b>functions</b>. Almost every example
      is a quadratic, a linear expression or a surd. A learner who cannot factorise ${m('x² − 5x + 6')}
      quickly will not be thinking about domain and range — they will still be thinking about factorising.</p>
      <div class="keybox"><div class="klabel">What this lesson is for</div>
      Not a mark. A map. By the end of the lesson every learner should be able to name the <b>two</b>
      sections they were weakest in, and those two become their private revision list for the quarter.</div>
      <p>Mark it together in the last five minutes, out of 20, in six sections of roughly equal weight.</p>`
    },
    {
      h: 'The six sections',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>§</th><th>Skill</th><th>Marks</th><th>Where it is needed this quarter</th></tr></thead>
      <tbody>
        <tr><td>A</td><td>factorising a quadratic</td><td class="m">4</td><td>roots, domain of a fraction</td></tr>
        <tr><td>B</td><td>the quadratic formula and ${m('D')}</td><td class="m">4</td><td>range, number of roots</td></tr>
        <tr><td>C</td><td>surds and indices</td><td class="m">3</td><td>domain of a root function</td></tr>
        <tr><td>D</td><td>straight-line graphs</td><td class="m">3</td><td>linear modelling</td></tr>
        <tr><td>E</td><td>sketching a parabola</td><td class="m">3</td><td>quadratic modelling</td></tr>
        <tr><td>F</td><td>inequalities on a number line</td><td class="m">3</td><td>writing a range</td></tr>
      </tbody></table></div>
      {{fig:quadGraph:Everything in section E: the roots, the axis of symmetry, the vertex and the y-intercept of one parabola.}}
      <div class="warn"><span class="wl">Say this out loud</span>
      A low score today predicts nothing about the year. It only says which twenty minutes of revision
      will pay for themselves fastest.</div>`
    }
  ],
  examples: [
    {
      q: 'Solve ' + m('x² − 5x + 6 = 0') + ' by factorising.',
      steps: [
        ['Two numbers multiplying to ' + m('6') + ' and adding to ' + m('−5') + '.', 'They are ' + m('−2') + ' and ' + m('−3') + '.'],
        [m('(x − 2)(x − 3) = 0'), ''],
        [m('x = 2') + ' or ' + m('x = 3'), '']
      ],
      ans: m('x = 2, x = 3')
    },
    {
      q: 'Find ' + m('D') + ' for ' + m('2x² − 4x + 5 = 0') + ' and say how many real roots there are.',
      steps: [
        [m('a = 2, b = −4, c = 5'), 'Read the signs carefully.'],
        [m('D = 16 − 4 · 2 · 5 = 16 − 40'), ''],
        [m('D = −24 < 0'), 'No real roots.']
      ],
      ans: m('D = −24') + ', no real roots'
    },
    {
      q: 'Simplify ' + m(sr('50') + ' + ' + sr('18')) + '.',
      steps: [
        [m(sr('50') + ' = 5' + sr('2')), m('50 = 25 · 2') + '.'],
        [m(sr('18') + ' = 3' + sr('2')), m('18 = 9 · 2') + '.'],
        [m('5' + sr('2') + ' + 3' + sr('2') + ' = 8' + sr('2')), 'Like terms.']
      ],
      ans: m('8' + sr('2'))
    }
  ],
  modelNote: 'Work one question from each section on the board while the class self-marks.',
  interactive: {
    type: 'quiz',
    title: 'Six questions, one from each section',
    hint: 'A quick self-check before the written paper.',
    items: [
      { q: m('x² + 2x − 15') + ' factorises to:', a: [m('(x + 5)(x − 3)'), m('(x − 5)(x + 3)'), m('(x + 5)(x + 3)'), m('(x − 5)(x − 3)')], c: 0, why: m('5 · (−3) = −15') + ' and ' + m('5 + (−3) = 2') + '.' },
      { q: 'For ' + m('x² − 6x + 9 = 0') + ', ' + m('D') + ' is:', a: [m('0'), m('36'), m('−72'), m('72')], c: 0, why: m('36 − 36 = 0') + ' — one repeated root.' },
      { q: m(sr('27')) + ' in simplest form is:', a: [m('9' + sr('3')), m('3' + sr('3')), m('3' + sr('9')), m('27')], c: 1, why: m('27 = 9 · 3') + '.' },
      { q: 'The gradient of ' + m('2x + y = 6') + ' is:', a: [m('2'), m('−2'), m('6'), m(f('1', '2'))], c: 1, why: 'Rearranged, ' + m('y = −2x + 6') + '.' },
      { q: 'The vertex of ' + m('y = (x − 3)² + 1') + ' is:', a: [m('(3, 1)'), m('(−3, 1)'), m('(3, −1)'), m('(1, 3)')], c: 0, why: 'Completed-square form reads off directly.' },
      { q: m('−2x > 8') + ' gives:', a: [m('x > −4'), m('x < −4'), m('x > 4'), m('x < 4')], c: 1, why: 'Dividing by a negative reverses the sign.' }
    ]
  },
  quiz: [
    { q: m('x² − 9') + ' factorises to:', a: [m('(x − 3)²'), m('(x − 3)(x + 3)'), m('(x − 9)(x + 1)'), 'it does not factorise'], c: 1, why: 'A difference of two squares.' },
    { q: 'If ' + m('D > 0') + ' a quadratic has:', a: ['no real roots', 'one root', 'two distinct roots', 'three roots'], c: 2, why: m('±' + sr('D')) + ' gives two different values.' },
    { q: m(sr('8') + ' · ' + sr('2')) + ' equals:', a: [m('4'), m(sr('10')), m('16'), m('2' + sr('4'))], c: 0, why: m(sr('16') + ' = 4') + '.' },
    { q: 'The line through ' + m('(0, 3)') + ' with gradient ' + m('2') + ' is:', a: [m('y = 2x + 3'), m('y = 3x + 2'), m('y = 2x − 3'), m('y = 3x')], c: 0, why: m('y = mx + c') + '.' }
  ],
  practice: {
    easy: [
      [m('Solve x² − 7x + 12 = 0'), m('x = 3, x = 4')],
      [m('Solve x² − 16 = 0'), m('x = ±4')],
      [m('Find D for x² + 4x + 4 = 0'), m('0')],
      [m('Simplify ' + sr('12')), m('2' + sr('3'))],
      [m('Find the gradient of y = 5 − 3x'), m('−3')],
      [m('Where does y = x² − 4 cut the x-axis?'), m('(±2, 0)')],
      [m('Solve 3x + 2 < 11'), m('x < 3')]
    ],
    med: [
      [m('Solve 2x² − 5x − 3 = 0'), m('x = 3, x = −0.5')],
      [m('Solve x² + x − 12 = 0'), m('x = 3, x = −4')],
      [m('Find D for 3x² − 2x + 1 = 0 and say how many roots.'), m('D = −8') + ', none'],
      [m('Simplify ' + sr('75') + ' − ' + sr('27')), m('2' + sr('3'))],
      [m('Find the equation of the line through (1, 5) and (3, 11).'), m('y = 3x + 2')],
      [m('Write y = x² − 6x + 5 in completed-square form.'), m('(x − 3)² − 4')],
      [m('Solve 4 − 2x ≥ 10'), m('x ≤ −3')]
    ],
    hard: [
      [m('Solve 6x² + x − 2 = 0'), m('x = ' + f('1', '2') + ', x = −' + f('2', '3'))],
      [m('For what k does x² + kx + 9 = 0 have exactly one root?'), m('k = ±6')],
      [m('Simplify ' + f('6', sr('3'))), m('2' + sr('3'))],
      [m('Find the vertex and roots of y = x² − 4x + 3.'), 'vertex ' + m('(2, −1)') + ', roots ' + m('1') + ' and ' + m('3')],
      [m('Solve x² − 5x + 6 > 0'), m('x < 2') + ' or ' + m('x > 3')],
      [m('The line y = 2x + k is a tangent to y = x². Find k.'), m('x² − 2x − k = 0') + ', ' + m('D = 4 + 4k = 0') + ', so ' + m('k = −1')],
      [m('Two numbers add to 12 and multiply to 35. Find them without trial.'), 'Roots of ' + m('t² − 12t + 35 = 0') + ': ' + m('5') + ' and ' + m('7')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Only the two sections you were weakest in. Nothing else.',
  homework: [
    'Write down the two sections you scored lowest in.',
    'Five problems from the first of those two sections.',
    'Five problems from the second.',
    m('Solve x² − 3x − 10 = 0 and check both roots by substitution.'),
    m('Simplify ' + sr('98') + ' + ' + sr('50') + '.')
  ]
});

G10_ALG.push({
  id: 'a10-02', stream: 'alg', grade: 10, quarter: 1, lessons: '2–3', hours: 2,
  title: 'Quadratic equations — factorising and the formula',
  subtitle: 'Cambridge insert: the two methods, and knowing within five seconds which one this equation wants.',
  uz: 'Algebra 10, Revision', uzPage: 'Повторение, pp. 6–13',
  cam: 'P1 · 1.1, 1.4–1.5', camPage: 'Pure Mathematics 1, pp. 2–14', wb: 'P1 Exercise 1A, 1D',
  objectives: [
    'Factorise a quadratic with leading coefficient 1 and with a ≠ 1.',
    'Use the quadratic formula accurately.',
    'Choose between the two methods quickly.',
    'Solve equations that become quadratic after a substitution.'
  ],
  terms: [
    ['Quadratic equation', 'Kvadrat tenglama', 'Квадратное уравнение'],
    ['Coefficient', 'Koeffitsient', 'Коэффициент'],
    ['Factorise', 'Ko‘paytuvchilarga ajratish', 'Разложить на множители'],
    ['Root', 'Ildiz', 'Корень'],
    ['Quadratic formula', 'Kvadrat tenglama formulasi', 'Формула корней'],
    ['Zero product rule', 'Nolga ko‘paytma qoidasi', 'Правило нулевого произведения'],
    ['Substitution', 'O‘rniga qo‘yish', 'Подстановка'],
    ['Disguised quadratic', 'Yashirin kvadrat tenglama', 'Уравнение, сводящееся к квадратному'],
    ['Exact value', 'Aniq qiymat', 'Точное значение']
  ],
  timing: [[6, 'Five equations — which method?'], [14, 'Factorising, including a ≠ 1'], [12, 'The formula'], [6, 'Disguised quadratics'], [4, 'Homework']],
  sections: [
    {
      h: 'Two methods, one decision',
      html: `<div class="keybox"><div class="klabel">The zero product rule</div>
      If ${m('A · B = 0')} then ${m('A = 0')} or ${m('B = 0')}. That is the whole reason factorising
      solves equations — and the reason the equation must be written with <b>zero on one side first</b>.</div>
      <div class="tablewrap"><table>
      <thead><tr><th>The equation looks like</th><th>Use</th></tr></thead>
      <tbody>
        <tr><td>${m('x² + bx + c')} with small whole ${m('b, c')}</td><td>factorising — try it for five seconds</td></tr>
        <tr><td>${m('ax² + bx + c')} with ${m('a ≠ 1')}</td><td>factorising by splitting the middle term</td></tr>
        <tr><td>ugly numbers, or the answer is asked for in surd form</td><td>the formula</td></tr>
        <tr><td>no constant term</td><td>take out ${m('x')} — never divide by it</td></tr>
      </tbody></table></div>
      <p>Factorising ${m('2x² + 7x + 3')}: find two numbers multiplying to ${m('2 · 3 = 6')} and adding
      to ${m('7')} — they are ${m('1')} and ${m('6')}. Split the middle term and group:</p>
      ${eq(m('2x² + x + 6x + 3 = x(2x + 1) + 3(2x + 1) = (2x + 1)(x + 3)'), true)}`
    },
    {
      h: 'The formula',
      html: `${eq(m('x = ' + f('−b ± ' + sr('b² − 4ac'), '2a')), true)}
      <p>It never fails, and it is slower. Use it when factorising has not worked in five seconds, or when
      the question asks for an exact answer.</p>
      <div class="warn"><span class="wl">Three places marks are lost</span>
      <ol style="margin:.4em 0 0">
        <li>The whole of ${m('−b')} is over the ${m('2a')}, not just the root.</li>
        <li>${m('−b')} where ${m('b')} is already negative gives a <b>plus</b>.</li>
        <li>${m('2a')}, not ${m('2')}, when ${m('a ≠ 1')}.</li>
      </ol></div>`
    },
    {
      h: 'Equations that become quadratic',
      html: `<p>Many equations are quadratics wearing a disguise. Substitute a letter for the repeated
      block and the disguise falls off:</p>
      ${eq(m('x⁴ − 5x² + 4 = 0') + '&nbsp; let ' + m('t = x²') + ' &nbsp;⟹&nbsp; ' + m('t² − 5t + 4 = 0'))}
      <p>Solve for ${m('t')}, then go back: ${m('t = 1')} gives ${m('x = ±1')}, ${m('t = 4')} gives
      ${m('x = ±2')}. Four roots.</p>
      <p>The same trick handles ${m('2ˣ')}, ${m(sr('x'))} and ${m(f('1', 'x'))} as the repeated block —
      and each time, <b>check the substitution allows the value</b> before converting back.</p>`
    }
  ],
  examples: [
    {
      q: 'Solve ' + m('3x² − 10x + 8 = 0') + ' by factorising.',
      steps: [
        [m('3 · 8 = 24') + ', and ' + m('−4 + (−6) = −10'), 'Two numbers multiplying to 24, adding to −10.'],
        [m('3x² − 4x − 6x + 8 = 0'), 'Split the middle term.'],
        [m('x(3x − 4) − 2(3x − 4) = 0'), 'Group.'],
        [m('(3x − 4)(x − 2) = 0'), ''],
        [m('x = ' + f('4', '3')) + ' or ' + m('x = 2'), '']
      ],
      ans: m('x = ' + f('4', '3') + ', x = 2')
    },
    {
      q: 'Solve ' + m('2x² − 6x + 1 = 0') + ', giving exact answers.',
      steps: [
        [m('a = 2, b = −6, c = 1'), ''],
        [m('D = 36 − 8 = 28'), ''],
        [m('x = ' + f('6 ± ' + sr('28'), '4')), 'Note ' + m('−b = +6') + '.'],
        [m(sr('28') + ' = 2' + sr('7')), ''],
        [m('x = ' + f('6 ± 2' + sr('7'), '4') + ' = ' + f('3 ± ' + sr('7'), '2')), 'Cancel the 2.']
      ],
      ans: m('x = ' + f('3 ± ' + sr('7'), '2'))
    },
    {
      q: 'Solve ' + m('x⁴ − 13x² + 36 = 0') + '.',
      steps: [
        [m('t = x²'), 'and ' + m('t ≥ 0') + '.'],
        [m('t² − 13t + 36 = 0'), ''],
        [m('(t − 4)(t − 9) = 0'), ''],
        [m('t = 4') + ' or ' + m('t = 9'), 'Both are ' + m('≥ 0') + ' ✓'],
        [m('x = ±2') + ' or ' + m('x = ±3'), '']
      ],
      ans: m('x = ±2, ±3')
    }
  ],
  modelNote: 'Slide the coefficients and watch the roots appear and disappear as the parabola lifts off the axis.',
  interactive: { type: 'quadratic', title: 'The roots of a quadratic' },
  quiz: [
    { q: m('x² − x − 6 = 0') + ' has roots:', a: [m('2, −3'), m('3, −2'), m('6, −1'), m('1, −6')], c: 1, why: m('(x − 3)(x + 2) = 0') + '.' },
    { q: 'For ' + m('2x² + 3x − 2 = 0') + ' the formula gives ' + m('2a') + ' equal to:', a: [m('2'), m('4'), m('3'), m('−2')], c: 1, why: m('a = 2') + ', so ' + m('2a = 4') + '.' },
    { q: m('x² = 7x') + ' has roots:', a: [m('7'), m('0, 7'), m('±' + sr('7')), m('0')], c: 1, why: 'Factorise; never divide by ' + m('x') + '.' },
    { q: 'In ' + m('x⁴ − 5x² + 4 = 0') + ', substituting ' + m('t = x²') + ' gives how many values of x?', a: [m('2'), m('3'), m('4'), m('1')], c: 2, why: 'Both ' + m('t') + ' values are positive, so each gives two ' + m('x') + '.' },
    { q: 'Which method suits ' + m('x² − 4x + 1 = 0') + '?', a: ['factorising', 'the formula', 'take out x', 'no method works'], c: 1, why: 'No whole numbers multiply to 1 and add to −4.' }
  ],
  practice: {
    easy: [
      [m('Solve x² − 5x + 4 = 0'), m('x = 1, x = 4')],
      [m('Solve x² + 7x + 10 = 0'), m('x = −2, x = −5')],
      [m('Solve x² − 25 = 0'), m('x = ±5')],
      [m('Solve x² + 3x = 0'), m('x = 0, x = −3')],
      [m('Solve 2x² − 8 = 0'), m('x = ±2')],
      [m('Solve x² − 2x + 1 = 0'), m('x = 1') + ' (repeated)'],
      [m('Solve x² + x − 20 = 0'), m('x = 4, x = −5')]
    ],
    med: [
      [m('Solve 2x² + 5x + 2 = 0'), m('x = −' + f('1', '2') + ', x = −2')],
      [m('Solve 3x² − 7x + 2 = 0'), m('x = 2, x = ' + f('1', '3'))],
      [m('Solve x² − 4x + 2 = 0 exactly.'), m('x = 2 ± ' + sr('2'))],
      [m('Solve 5x² − 3x = 0'), m('x = 0, x = 0.6')],
      [m('Solve x⁴ − 10x² + 9 = 0'), m('x = ±1, ±3')],
      [m('Solve 4x² − 12x + 9 = 0'), m('x = 1.5') + ' (repeated)'],
      [m('Solve 6x² − 5x − 6 = 0'), m('x = ' + f('3', '2') + ', x = −' + f('2', '3'))]
    ],
    hard: [
      [m('Solve 3x² + 2x − 4 = 0 exactly.'), m('x = ' + f('−1 ± ' + sr('13'), '3'))],
      [m('Solve x⁴ − 3x² − 4 = 0'), m('t = 4') + ' only (reject ' + m('t = −1') + '), so ' + m('x = ±2')],
      [m('Solve 2²ˣ − 6 · 2ˣ + 8 = 0'), m('2ˣ = 2') + ' or ' + m('4') + ', so ' + m('x = 1, 2')],
      [m('Solve x − 5' + sr('x') + ' + 6 = 0'), m(sr('x') + ' = 2') + ' or ' + m('3') + ', so ' + m('x = 4, 9')],
      [m('The roots of x² + px + 12 = 0 differ by 1. Find p.'), m('p = ±7')],
      [m('Solve ' + f('1', 'x²') + ' − ' + f('5', 'x') + ' + 6 = 0'), m('t = ' + f('1', 'x')) + ': ' + m('t = 2, 3') + ', so ' + m('x = ' + f('1', '2') + ', ' + f('1', '3'))],
      [m('Show that x² + x + 1 = 0 has no real root, without the formula.'), m('(x + ' + f('1', '2') + ')² + ' + f('3', '4')) + ' is a square plus a positive number, so never zero.']
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'P1 Exercise 1A and 1D. Say which method you chose and why.',
  homework: [
    m('Solve x² − 8x + 15 = 0'),
    m('Solve 2x² − 7x + 3 = 0'),
    m('Solve x² − 6x + 4 = 0 exactly.'),
    m('Solve 3x² + 5x = 0'),
    m('Solve x⁴ − 5x² + 4 = 0'),
    m('Solve x − 7' + sr('x') + ' + 12 = 0')
  ]
});

G10_ALG.push({
  id: 'a10-03', stream: 'alg', grade: 10, quarter: 1, lessons: '4–5', hours: 2,
  title: 'Completing the square and the discriminant',
  subtitle: 'Cambridge insert: the form that hands you the vertex, and the number that counts the roots before you find them.',
  uz: 'Algebra 10, Revision', uzPage: 'Повторение, pp. 6–13',
  cam: 'P1 · 1.3, 1.6', camPage: 'Pure Mathematics 1, pp. 7–16', wb: 'P1 Exercise 1B, 1F',
  objectives: [
    'Write ' + m('x² + bx + c') + ' in the form ' + m('(x + p)² + q') + '.',
    'Read the vertex and the least value off that form.',
    'Use ' + m('D') + ' to say how many real roots there are.',
    'Find the values of a parameter that make a quadratic touch the axis.'
  ],
  terms: [
    ['Completing the square', 'To‘la kvadratga keltirish', 'Выделение полного квадрата'],
    ['Perfect square', 'To‘la kvadrat', 'Полный квадрат'],
    ['Vertex', 'Uchi', 'Вершина'],
    ['Minimum value', 'Eng kichik qiymat', 'Наименьшее значение'],
    ['Maximum value', 'Eng katta qiymat', 'Наибольшее значение'],
    ['Discriminant', 'Diskriminant', 'Дискриминант'],
    ['Repeated root', 'Karrali ildiz', 'Кратный корень'],
    ['Tangent to the axis', 'O‘qqa urinma', 'Касается оси'],
    ['Axis of symmetry', 'Simmetriya o‘qi', 'Ось симметрии']
  ],
  timing: [[5, 'Expand three squares to see the pattern backwards'], [14, 'Completing the square'], [12, 'What the form tells you'], [5, 'The discriminant'], [4, 'Homework']],
  sections: [
    {
      h: 'Completing the square',
      html: `<p>Expanding ${m('(x + 3)² = x² + 6x + 9')} shows the pattern: the number inside is
      <b>half</b> the coefficient of ${m('x')}, and the constant is its square. Run it backwards and you
      can turn any ${m('x² + bx')} into a square, at the cost of one correction:</p>
      {{fig:completeSquare:x² + 6x is one small square short of (x + 3)². Add the missing 9 — and take it away again.}}
      ${eq(m('x² + bx = (x + ' + f('b', '2') + ')² − (' + f('b', '2') + ')²'), true)}
      <p>So ${m('x² + 6x + 1 = (x + 3)² − 9 + 1 = (x + 3)² − 8')}.</p>
      <div class="warn"><span class="wl">When a ≠ 1</span>
      Take ${m('a')} out of the first two terms first: ${m('2x² + 8x + 3 = 2(x² + 4x) + 3 = 2[(x + 2)² − 4] + 3 = 2(x + 2)² − 5')}. The bracket must be multiplied back out.</div>`
    },
    {
      h: 'What the completed form gives you free',
      html: `<p>From ${m('y = (x + p)² + q')} you can read, without any further work:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>the vertex</td><td class="m">(−p, q)</td></tr>
        <tr><td>the axis of symmetry</td><td class="m">x = −p</td></tr>
        <tr><td>the least value of ${m('y')}</td><td class="m">q</td>, at ${m('x = −p')}</tr>
        <tr><td>the range</td><td class="m">y ≥ q</td></tr>
        <tr><td>the roots</td><td class="m">(x + p)² = −q</td> — real only if ${m('q ≤ 0')}</tr>
      </tbody></table></div>
      <p>A square is never negative, so ${m('(x + p)² ≥ 0')} and therefore ${m('y ≥ q')} always. That one
      line answers every "find the minimum value" question in the quarter.</p>`
    },
    {
      h: 'The discriminant',
      html: `${eq(m('D = b² − 4ac'), true)}
      {{fig:discriminantCases:D > 0 cuts the axis twice, D = 0 touches it, D < 0 misses it entirely.}}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">D</th><th>Roots</th><th>The parabola</th></tr></thead>
      <tbody>
        <tr><td class="m">D &gt; 0</td><td>two different real roots</td><td>cuts the ${m('x')}-axis twice</td></tr>
        <tr><td class="m">D = 0</td><td>one repeated root</td><td>touches the axis — it is a tangent</td></tr>
        <tr><td class="m">D &lt; 0</td><td>no real roots</td><td>misses the axis completely</td></tr>
      </tbody></table></div>
      <p>“Touches the axis”, “has a repeated root”, “is a tangent to the ${m('x')}-axis” and
      “has exactly one solution” are four ways of writing ${m('D = 0')}. Recognising them is most of the
      marks in this topic.</p>`
    }
  ],
  examples: [
    {
      q: 'Write ' + m('x² − 8x + 21') + ' in completed-square form and state its least value.',
      steps: [
        [m('half of −8 is −4'), ''],
        [m('x² − 8x = (x − 4)² − 16'), ''],
        [m('(x − 4)² − 16 + 21 = (x − 4)² + 5'), ''],
        ['Least value ' + m('5') + ', at ' + m('x = 4') + '.', 'A square is at least 0.']
      ],
      ans: m('(x − 4)² + 5') + '; least value ' + m('5')
    },
    {
      q: 'Write ' + m('3x² + 12x + 7') + ' in the form ' + m('a(x + p)² + q') + '.',
      steps: [
        [m('3(x² + 4x) + 7'), 'Take the 3 out of the first two terms only.'],
        [m('x² + 4x = (x + 2)² − 4'), ''],
        [m('3[(x + 2)² − 4] + 7'), ''],
        [m('3(x + 2)² − 12 + 7 = 3(x + 2)² − 5'), 'Multiply the 3 through.']
      ],
      ans: m('3(x + 2)² − 5')
    },
    {
      q: 'Find the values of ' + m('k') + ' for which ' + m('x² + kx + 9 = 0') + ' has a repeated root.',
      steps: [
        ['A repeated root means ' + m('D = 0') + '.', ''],
        [m('D = k² − 4 · 1 · 9 = k² − 36'), ''],
        [m('k² − 36 = 0'), ''],
        [m('k = ±6'), 'Both work: ' + m('(x ± 3)²') + '.']
      ],
      ans: m('k = 6') + ' or ' + m('k = −6')
    }
  ],
  modelNote: 'Move the coefficients and watch D change sign as the parabola lifts off the axis.',
  interactive: { type: 'quadratic', title: 'The discriminant in action' },
  quiz: [
    { q: m('x² + 10x') + ' completed is:', a: [m('(x + 5)² − 25'), m('(x + 5)² + 25'), m('(x + 10)² − 100'), m('(x + 5)²')], c: 0, why: 'Half of 10 is 5; subtract ' + m('5²') + '.' },
    { q: 'The least value of ' + m('(x − 2)² + 7') + ' is:', a: [m('2'), m('7'), m('−7'), m('9')], c: 1, why: 'The square is at least 0.' },
    { q: 'If ' + m('D = 0') + ' the parabola:', a: ['misses the axis', 'touches the axis', 'cuts it twice', 'is a straight line'], c: 1, why: 'One repeated root.' },
    { q: 'The vertex of ' + m('y = (x + 4)² − 3') + ' is:', a: [m('(4, −3)'), m('(−4, −3)'), m('(−4, 3)'), m('(4, 3)')], c: 1, why: 'Change the sign of what is added to ' + m('x') + '.' },
    { q: m('x² + 2x + 5 = 0') + ' has:', a: ['two roots', 'one root', 'no real roots', 'infinitely many'], c: 2, why: m('D = 4 − 20 = −16 < 0') + '.' }
  ],
  practice: {
    easy: [
      [m('Complete the square: x² + 4x'), m('(x + 2)² − 4')],
      [m('Complete the square: x² − 6x'), m('(x − 3)² − 9')],
      [m('Complete the square: x² + 2x + 5'), m('(x + 1)² + 4')],
      [m('State the vertex of y = (x − 1)² + 2'), m('(1, 2)')],
      [m('Find D for x² + 6x + 9 = 0'), m('0')],
      [m('Find D for x² + x + 1 = 0'), m('−3')],
      [m('State the least value of (x + 3)² − 1'), m('−1')]
    ],
    med: [
      [m('Complete the square: x² − 10x + 30'), m('(x − 5)² + 5')],
      [m('Complete the square: 2x² + 8x + 1'), m('2(x + 2)² − 7')],
      [m('Find the vertex of y = x² − 4x + 7'), m('(2, 3)')],
      [m('Find k so that x² + kx + 25 = 0 has one root.'), m('k = ±10')],
      [m('For what k does x² + 4x + k = 0 have two roots?'), m('k < 4')],
      [m('Find the least value of 3x² − 12x + 5'), m('3(x − 2)² − 7') + ', least ' + m('−7')],
      [m('Show x² − 2x + 6 is always positive.'), m('(x − 1)² + 5 ≥ 5 > 0')]
    ],
    hard: [
      [m('Complete the square: 5 − 4x − x²'), m('9 − (x + 2)²') + ', greatest value ' + m('9')],
      [m('For what k is y = x² + kx + k + 3 a tangent to the x-axis?'), m('k² − 4k − 12 = 0') + ', so ' + m('k = 6') + ' or ' + m('k = −2')],
      [m('Find the range of y = 2x² − 8x + 11'), m('2(x − 2)² + 3') + ', so ' + m('y ≥ 3')],
      [m('The line y = mx + 1 is a tangent to y = x² + 3. Find m.'), m('x² − mx + 2 = 0') + ', ' + m('D = m² − 8 = 0') + ', ' + m('m = ±2' + sr('2'))],
      [m('For what values of k does kx² + 4x + 1 = 0 have no real root?'), m('16 − 4k < 0') + ', so ' + m('k > 4')],
      [m('Prove x² + bx + c has a least value of c − b²/4.'), m('(x + ' + f('b', '2') + ')² + c − ' + f('b²', '4')) + '; the square is at least 0.'],
      [m('Find the greatest value of ' + f('1', 'x² − 4x + 8')), 'the denominator is least at ' + m('4') + ', so the greatest value is ' + m(f('1', '4'))]
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'P1 Exercise 1B and 1F. Always state the vertex once you have the completed form.',
  homework: [
    m('Complete the square: x² + 12x + 40'),
    m('Complete the square: 2x² − 12x + 5'),
    m('Find the vertex and least value of y = x² − 6x + 11'),
    m('Find k so that x² + kx + 16 = 0 has a repeated root.'),
    m('For what k does x² + 6x + k = 0 have no real root?'),
    m('Show that x² + 4x + 9 is positive for every x.')
  ]
});

G10_ALG.push({
  id: 'a10-04', stream: 'alg', grade: 10, quarter: 1, lessons: '6–7', hours: 2,
  title: 'Quadratic inequalities and simultaneous equations',
  subtitle: 'Cambridge insert: solving with a sketch rather than a rule, and the substitution that handles a curve meeting a line.',
  uz: 'Algebra 10, Revision', uzPage: 'Повторение, pp. 9–13',
  cam: 'P1 · 1.2, 1.7', camPage: 'Pure Mathematics 1, pp. 6, 16–17', wb: 'P1 Exercise 1C, 1G',
  objectives: [
    'Solve a quadratic inequality by sketching the parabola.',
    'Write the answer with the right connective — “and” or “or”.',
    'Solve one linear and one quadratic equation together.',
    'Use the discriminant to decide whether a line meets a curve.'
  ],
  terms: [
    ['Quadratic inequality', 'Kvadrat tengsizlik', 'Квадратное неравенство'],
    ['Critical value', 'Kritik qiymat', 'Критическое значение'],
    ['Sign chart', 'Ishoralar jadvali', 'Схема знаков'],
    ['Sketch', 'Eskiz', 'Эскиз'],
    ['Simultaneous equations', 'Tenglamalar sistemasi', 'Система уравнений'],
    ['Substitution method', 'O‘rniga qo‘yish usuli', 'Метод подстановки'],
    ['Point of intersection', 'Kesishish nuqtasi', 'Точка пересечения'],
    ['Tangent', 'Urinma', 'Касательная'],
    ['Interval', 'Oraliq', 'Промежуток']
  ],
  timing: [[6, 'Sketch three parabolas and shade where y > 0'], [14, 'Quadratic inequalities'], [12, 'Simultaneous equations'], [4, 'When does the line miss?'], [4, 'Homework']],
  sections: [
    {
      h: 'Inequalities: sketch, do not memorise',
      html: `<p>To solve ${m('x² − 2x − 3 > 0')}: find where the expression is <b>zero</b>, sketch the
      parabola, then read off where it is above the axis.</p>
      {{fig:quadSignChart:The critical values split the line into three. A parabola opening upwards is negative only between its roots.}}
      <div class="keybox"><div class="klabel">The method, in three steps</div>
      <ol style="margin:0">
        <li>Make one side zero and factorise: ${m('(x + 1)(x − 3) > 0')}.</li>
        <li>Mark the critical values ${m('−1')} and ${m('3')} on a sketch of the parabola.</li>
        <li>Read the answer off: above the axis <b>outside</b> the roots, so ${m('x < −1')} or ${m('x > 3')}.</li>
      </ol></div>
      <div class="warn"><span class="wl">The connective carries a mark</span>
      Between the roots the answer is <b>one</b> interval and takes “and”: ${m('−1 < x < 3')}.
      Outside the roots it is <b>two</b> intervals and takes “or”: ${m('x < −1')} or ${m('x > 3')}.
      Writing ${m('3 < x < −1')} says nothing exists.</div>`
    },
    {
      h: 'One linear and one quadratic',
      html: `<p>Always substitute from the <b>linear</b> equation into the quadratic — never the other
      way round. Solve ${m('y = x + 1')} with ${m('x² + y² = 25')}:</p>
      ${eq(m('x² + (x + 1)² = 25') + '&nbsp;⟹&nbsp;' + m('2x² + 2x − 24 = 0') + '&nbsp;⟹&nbsp;' + m('x² + x − 12 = 0'))}
      <p>So ${m('x = 3')} or ${m('x = −4')}, and the line ${m('y = x + 1')} gives ${m('y = 4')} and
      ${m('y = −3')}. Two intersection points: ${m('(3, 4)')} and ${m('(−4, −3)')}.</p>
      <div class="keybox"><div class="klabel">Pair the answers up</div>
      Each ${m('x')} belongs with <b>its own</b> ${m('y')}. Listing ${m('x = 3, −4')} and
      ${m('y = 4, −3')} separately loses the pairing, and the mark.</div>`
    },
    {
      h: 'Does the line meet the curve at all?',
      html: `<p>After the substitution you have a quadratic. Its discriminant answers the geometry:</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">D</th><th>The line and the curve</th></tr></thead>
      <tbody>
        <tr><td class="m">D &gt; 0</td><td>meet at two points</td></tr>
        <tr><td class="m">D = 0</td><td>touch — the line is a <b>tangent</b></td></tr>
        <tr><td class="m">D &lt; 0</td><td>never meet</td></tr>
      </tbody></table></div>
      <p>So “find ${m('m')} so that ${m('y = mx + 3')} is a tangent to ${m('y = x²')}” is not a geometry
      question at all. Substitute, set ${m('D = 0')}, solve.</p>`
    }
  ],
  examples: [
    {
      q: 'Solve ' + m('x² − x − 6 ≤ 0') + '.',
      steps: [
        [m('(x − 3)(x + 2) ≤ 0'), 'Factorise.'],
        [m('critical values −2 and 3'), ''],
        ['The parabola opens upwards, so it is at or below the axis <b>between</b> the roots.', ''],
        [m('−2 ≤ x ≤ 3'), 'Closed circles: ' + m('≤') + ' includes the ends.']
      ],
      ans: m('−2 ≤ x ≤ 3')
    },
    {
      q: 'Solve ' + m('y = 2x − 1') + ' together with ' + m('y = x² − 4') + '.',
      steps: [
        [m('2x − 1 = x² − 4'), 'Both equal ' + m('y') + '.'],
        [m('x² − 2x − 3 = 0'), ''],
        [m('(x − 3)(x + 1) = 0'), ''],
        [m('x = 3 ⟹ y = 5') + '; ' + m('x = −1 ⟹ y = −3'), 'Pair them.']
      ],
      ans: m('(3, 5)') + ' and ' + m('(−1, −3)')
    },
    {
      q: 'Find ' + m('c') + ' so that ' + m('y = 3x + c') + ' is a tangent to ' + m('y = x² + 5') + '.',
      steps: [
        [m('3x + c = x² + 5'), ''],
        [m('x² − 3x + 5 − c = 0'), ''],
        [m('D = 9 − 4(5 − c) = 0'), 'Tangent means one repeated root.'],
        [m('9 − 20 + 4c = 0'), ''],
        [m('c = ' + f('11', '4')), '']
      ],
      ans: m('c = ' + f('11', '4'))
    }
  ],
  modelNote: 'Move the coefficients; watch which region of the number line makes the parabola positive.',
  interactive: { type: 'inequalityLine', title: 'Where is the expression positive?' },
  quiz: [
    { q: m('(x − 1)(x − 4) < 0') + ' gives:', a: [m('x < 1') + ' or ' + m('x > 4'), m('1 < x < 4'), m('x > 4'), m('x < 1')], c: 1, why: 'Negative between the roots.' },
    { q: m('x² > 9') + ' gives:', a: [m('−3 < x < 3'), m('x > 3'), m('x < −3') + ' or ' + m('x > 3'), m('x > 9')], c: 2, why: 'Positive outside the roots.' },
    { q: 'Substituting a line into a curve gives ' + m('D < 0') + '. They:', a: ['touch', 'meet twice', 'never meet', 'are the same'], c: 2, why: 'No real solution means no common point.' },
    { q: 'Solving ' + m('y = x') + ' with ' + m('y = x²') + ' gives:', a: [m('(0,0)') + ' only', m('(1,1)') + ' only', m('(0,0)') + ' and ' + m('(1,1)'), 'no points'], c: 2, why: m('x² − x = 0') + ' has roots 0 and 1.' },
    { q: 'Which is impossible?', a: [m('2 < x < 5'), m('x < 2') + ' or ' + m('x > 5'), m('5 < x < 2'), m('x ≥ 5')], c: 2, why: 'No number is both above 5 and below 2.' }
  ],
  practice: {
    easy: [
      [m('Solve (x − 2)(x − 5) < 0'), m('2 < x < 5')],
      [m('Solve (x + 1)(x − 3) > 0'), m('x < −1') + ' or ' + m('x > 3')],
      [m('Solve x² < 16'), m('−4 < x < 4')],
      [m('Solve x² ≥ 25'), m('x ≤ −5') + ' or ' + m('x ≥ 5')],
      [m('Solve x² − 4x ≤ 0'), m('0 ≤ x ≤ 4')],
      [m('Solve y = x + 2 and y = 2x'), m('(2, 4)')],
      [m('Solve y = x² and y = 4'), m('(±2, 4)')]
    ],
    med: [
      [m('Solve x² − 5x + 6 > 0'), m('x < 2') + ' or ' + m('x > 3')],
      [m('Solve 2x² + x − 6 ≤ 0'), m('−2 ≤ x ≤ 1.5')],
      [m('Solve 6 − x − x² > 0'), m('−3 < x < 2')],
      [m('Solve y = x − 1 and y = x² − 3'), m('(2, 1)') + ' and ' + m('(−1, −2)')],
      [m('Solve y = 2x and x² + y² = 20'), m('(2, 4)') + ' and ' + m('(−2, −4)')],
      [m('Find c so y = 4x + c is a tangent to y = x².'), m('c = −4')],
      [m('Solve x² + 3x ≥ 10'), m('x ≤ −5') + ' or ' + m('x ≥ 2')]
    ],
    hard: [
      [m('Solve x² − 2x + 5 > 0'), 'every ' + m('x') + ' — ' + m('D < 0') + ' and the parabola opens upwards'],
      [m('Solve x² + 4x + 4 ≤ 0'), m('x = −2') + ' only'],
      [m('Solve ' + f('x − 1', 'x + 2') + ' > 0'), m('x < −2') + ' or ' + m('x > 1')],
      [m('Find m so y = mx − 2 is a tangent to y = x² + 2.'), m('x² − mx + 4 = 0') + ', ' + m('m² = 16') + ', ' + m('m = ±4')],
      [m('Solve y = 3 − x and x² + y² = 5'), m('(1, 2)') + ' and ' + m('(2, 1)')],
      [m('For what k does y = x + k never meet y = x²?'), m('x² − x − k = 0') + ', ' + m('1 + 4k < 0') + ', so ' + m('k < −' + f('1', '4'))],
      [m('Solve x⁴ − 5x² + 4 < 0'), m('t = x²') + ': ' + m('1 < t < 4') + ', so ' + m('1 < |x| < 2') + ' — that is ' + m('−2 < x < −1') + ' or ' + m('1 < x < 2')]
    ]
  },
  hwTitle: 'Homework — 6 problems',
  hwNote: 'P1 Exercise 1C and 1G. Sketch the parabola for every inequality.',
  homework: [
    m('Solve (x − 1)(x + 4) < 0'),
    m('Solve x² − 7x + 10 ≥ 0'),
    m('Solve 3 + 2x − x² > 0'),
    m('Solve y = 2x + 1 and y = x² − 2'),
    m('Solve y = x − 2 and x² + y² = 10'),
    m('Find c so that y = 2x + c is a tangent to y = x² + 1.')
  ]
});

/* ============================== 5 ============================== */
G10_ALG.push({
  id: 'a10-05', stream: 'alg', grade: 10, quarter: 1, lessons: '8', hours: 1,
  title: 'Mappings — project lesson',
  subtitle: 'One hour, worked in pairs: build a mapping, decide whether it is a function, and defend the decision.',
  uz: 'Algebra 10, §1.1', uzPage: 'pp. 24–27',
  cam: 'P1 · 2.1', camPage: 'Pure Mathematics 1, pp. 26–29', wb: 'Project sheet M1',
  objectives: [
    'Describe a mapping by an arrow diagram, a rule and a set of ordered pairs.',
    'Classify a mapping as one-to-one, many-to-one, one-to-many or many-to-many.',
    'Decide whether a mapping is a function and justify the decision.',
    'Present a mapping the pair invented and answer questions about it.'
  ],
  terms: [
    ['Mapping', 'Akslantirish', 'Отображение'],
    ['Object (input)', 'Argument', 'Аргумент'],
    ['Image (output)', 'Tasvir', 'Образ'],
    ['One-to-one', 'Biror-birga', 'Взаимно однозначное'],
    ['Many-to-one', 'Ko‘pdan-birga', 'Многие в одно'],
    ['One-to-many', 'Birdan-ko‘pga', 'Одно во многие'],
    ['Arrow diagram', 'Strelkali diagramma', 'Стрелочная диаграмма'],
    ['Ordered pair', 'Tartiblangan juftlik', 'Упорядоченная пара'],
    ['Function', 'Funksiya', 'Функция']
  ],
  timing: [[5, 'What a mapping is'], [8, 'The four kinds'], [20, 'Pair work — build and classify'], [10, 'Two pairs present'], [2, 'Homework']],
  sections: [
    {
      h: 'A mapping is a rule with a direction',
      html: `<p>Take a set of inputs and a rule. Apply the rule to each input and you get an output.
      That is a <b>mapping</b>. Nothing more is required — the rule does not have to be a formula, and
      the sets do not have to be numbers.</p>
      {{fig:mapping:Four mappings. Read each one left to right and count the arrows leaving, then arriving at, every dot.}}
      <div class="keybox"><div class="klabel">Only two questions matter</div>
      <b>How many arrows leave</b> each input? <b>How many arrive</b> at each output? The first answer
      decides whether the mapping is a function. The second decides whether it can be undone.</div>`
    },
    {
      h: 'The four kinds',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Kind</th><th>Arrows out of each input</th><th>Arrows into an output</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>one-to-one</td><td>exactly one</td><td>at most one</td><td class="m">x ↦ 2x + 1</td></tr>
        <tr><td>many-to-one</td><td>exactly one</td><td>more than one, somewhere</td><td class="m">x ↦ x²</td></tr>
        <tr><td>one-to-many</td><td>more than one, somewhere</td><td>at most one</td><td class="m">x ↦ ±√x</td></tr>
        <tr><td>many-to-many</td><td>more than one</td><td>more than one</td><td>student ↦ subject studied</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The definition of a function</div>
      A mapping is a <b>function</b> when every input has <b>exactly one</b> output. So the first two rows
      are functions and the last two are not.</div>
      <div class="warn"><span class="wl">The commonest error</span>
      ${m('x ↦ x²')} sends ${m('3')} and ${m('−3')} both to ${m('9')}. Two arrows arrive at ${m('9')} —
      but only one leaves each input, so it <b>is</b> a function. Arrows arriving never break the definition.</div>`
    },
    {
      h: 'The project',
      html: `<p>In pairs, twenty minutes. Produce one A4 sheet carrying all four of these:</p>
      <ol>
        <li>A mapping of your own, on a set of at least six inputs, that is <b>not</b> numerical.</li>
        <li>The same mapping as an arrow diagram <b>and</b> as a set of ordered pairs.</li>
        <li>Its classification, with one sentence of justification for each half of the name.</li>
        <li>One small change to the mapping that turns it into a different kind, and the new name.</li>
      </ol>
      <div class="keybox"><div class="klabel">Marking, out of 8</div>
      2 for the mapping being genuinely your own · 2 for both representations agreeing ·
      2 for a correct classification · 2 for the change in part 4 actually working.</div>
      <p>Two pairs present in the last ten minutes. The class asks one question each: <i>“Is it a function,
      and how do you know from your diagram alone?”</i></p>`
    }
  ],
  examples: [
    {
      q: 'Classify the mapping ' + m('x ↦ x³') + ' on the real numbers.',
      steps: [
        ['Each ' + m('x') + ' has one cube.', 'One arrow leaves each input.'],
        ['Can two inputs share a cube?', m('a³ = b³ ⇒ a = b') + ' for real numbers — no.'],
        ['So at most one arrow arrives anywhere.', '']
      ],
      ans: 'One-to-one, and therefore a function'
    },
    {
      q: 'Is ' + m('x ↦ ' + sr('x')) + ' with output “any square root of x” a function?',
      steps: [
        [m('x = 9') + ' maps to ' + m('3') + ' and to ' + m('−3') + '.', 'Two arrows leave one input.'],
        ['The definition demands exactly one.', '']
      ],
      ans: 'No — it is one-to-many, not a function'
    },
    {
      q: 'The mapping “capital city of” on {Uzbekistan, France, Japan}. Classify it.',
      steps: [
        ['Each country has exactly one capital.', 'A function.'],
        ['No two of these countries share a capital.', 'At most one arrow arrives.']
      ],
      ans: 'One-to-one'
    }
  ],
  modelNote: 'Drag the inputs to see when a mapping stops being a function.',
  interactive: {
    type: 'quiz',
    title: 'Function or not?',
    hint: 'Ask only: does every input have exactly one output?',
    items: [
      { q: m('x ↦ 2x − 7') + ' is:', a: ['one-to-one', 'many-to-one', 'one-to-many', 'not a mapping'], c: 0, why: 'Different inputs give different outputs.' },
      { q: m('x ↦ |x|') + ' is:', a: ['one-to-one', 'many-to-one', 'one-to-many', 'many-to-many'], c: 1, why: m('|3| = |−3| = 3') + ' — two arrows arrive at 3.' },
      { q: 'Which of these is <b>not</b> a function?', a: [m('x ↦ x²'), m('x ↦ x³'), m('x² + y² = 25'), m('x ↦ 5')], c: 2, why: m('x = 3') + ' gives ' + m('y = ±4') + '.' },
      { q: m('x ↦ 5') + ' for every ' + m('x') + ' is:', a: ['not a function', 'one-to-one', 'many-to-one', 'one-to-many'], c: 2, why: 'Every input has one output; every output is shared.' },
      { q: 'A mapping can be undone by a mapping when it is:', a: ['many-to-one', 'one-to-one', 'one-to-many', 'any function'], c: 1, why: 'Only then does each output identify its input.' }
    ]
  },
  quiz: [
    { q: 'A function is a mapping in which every input has:', a: ['at least one output', 'exactly one output', 'at most one output', 'exactly one input'], c: 1, why: 'Exactly one — no more, no fewer.' },
    { q: m('x ↦ x²') + ' on the reals is:', a: ['one-to-one', 'many-to-one', 'one-to-many', 'not a function'], c: 1, why: m('±a') + ' share an image.' },
    { q: 'Ordered pairs ' + m('{(1,2), (2,4), (1,5)}') + ' describe:', a: ['a function', 'not a function', 'a one-to-one function', 'an empty mapping'], c: 1, why: m('1') + ' has two images.' },
    { q: 'The set of all first coordinates is the:', a: ['range', 'domain', 'image', 'codomain'], c: 1, why: 'Inputs form the domain.' }
  ],
  practice: {
    easy: [
      ['Classify ' + m('x ↦ x + 4'), 'one-to-one'],
      ['Classify ' + m('x ↦ 3'), 'many-to-one'],
      ['Classify ' + m('x ↦ ±x'), 'one-to-many'],
      ['Is ' + m('{(1,1), (2,4), (3,9)}') + ' a function?', 'yes'],
      ['Is ' + m('{(1,1), (1,2)}') + ' a function?', 'no'],
      ['Classify ' + m('x ↦ x⁴') + ' on the reals', 'many-to-one'],
      ['Name the domain of ' + m('{(0,5), (2,7)}'), m('{0, 2}')]
    ],
    med: [
      ['Classify ' + m('x ↦ 2ˣ'), 'one-to-one'],
      ['Classify ' + m('x ↦ sin x') + ' on the reals', 'many-to-one'],
      ['Is ' + m('x² + y² = 9') + ' a function of ' + m('x') + '?', 'no'],
      ['Give a mapping on {a, b, c} that is many-to-one', 'e.g. all three ↦ 1'],
      ['Write ' + m('x ↦ 3x − 1') + ' on ' + m('{0, 1, 2}') + ' as ordered pairs', m('{(0,−1), (1,2), (2,5)}')],
      ['Classify “mother of” on a set of people', 'many-to-one'],
      ['Classify “sibling of”', 'many-to-many']
    ],
    hard: [
      ['Restrict ' + m('x ↦ x²') + ' to make it one-to-one', m('x ≥ 0') + ' (or ' + m('x ≤ 0') + ')'],
      ['Explain why one-to-many mappings can never be functions', 'One input would need two images'],
      ['Is ' + m('x ↦ ' + f('1', 'x')) + ' one-to-one on ' + m('x ≠ 0') + '?', 'yes'],
      ['Find all ' + m('k') + ' making ' + m('x ↦ x² + kx') + ' one-to-one on ' + m('x ≥ 0'), m('k ≥ 0')],
      ['How many functions map ' + m('{1, 2}') + ' to ' + m('{a, b}') + '?', m('4')],
      ['How many of those are one-to-one?', m('2')],
      ['A mapping on a finite set is one-to-one exactly when it is what?', 'onto — it uses every output']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Finish the project sheet if your pair did not.',
  homework: [
    'Complete the four parts of the project sheet.',
    'Classify: ' + m('x ↦ x⁵') + ', ' + m('x ↦ x⁶') + ', ' + m('x ↦ |x| + 1') + '.',
    'Write a mapping from your own life that is many-to-many.',
    'Explain in two sentences why every one-to-one mapping is a function but not every function is one-to-one.'
  ]
});

/* ============================== 6 ============================== */
G10_ALG.push({
  id: 'a10-06', stream: 'alg', grade: 10, quarter: 1, lessons: '9–10', hours: 2,
  title: 'The function and the ways of defining it',
  subtitle: 'The same function written five ways — formula, table, graph, words and a machine — and why a question sometimes wants one rather than another.',
  uz: 'Algebra 10, §1.2', uzPage: 'pp. 28–34',
  cam: 'P1 · 2.1–2.2', camPage: 'Pure Mathematics 1, pp. 26–33', wb: 'P1 Exercise 2A',
  objectives: [
    'State the definition of a function in terms of domain, rule and image.',
    'Move between formula, table, graph and verbal description of the same function.',
    'Use function notation f(x) and evaluate f at a number and at an expression.',
    'Apply the vertical line test to a graph.'
  ],
  terms: [
    ['Function', 'Funksiya', 'Функция'],
    ['Function notation', 'Funksional belgilash', 'Функциональное обозначение'],
    ['Independent variable', 'Erkli o‘zgaruvchi', 'Независимая переменная'],
    ['Dependent variable', 'Erksiz o‘zgaruvchi', 'Зависимая переменная'],
    ['Rule', 'Qoida', 'Правило'],
    ['Table of values', 'Qiymatlar jadvali', 'Таблица значений'],
    ['Graph of a function', 'Funksiya grafigi', 'График функции'],
    ['Vertical line test', 'Vertikal chiziq sinovi', 'Тест вертикальной прямой'],
    ['Piecewise definition', 'Bo‘lakli berilish', 'Кусочное задание']
  ],
  timing: [[6, 'Recall — exactly one output'], [12, 'Five ways of writing one function'], [8, 'Function notation'], [12, 'The vertical line test'], [7, 'Practice'], [5, 'Homework']],
  sections: [
    {
      h: 'What has to be given',
      html: `<div class="keybox"><div class="klabel">A function needs three things</div>
      A <b>domain</b> — the set of allowed inputs. A <b>rule</b> — what to do to an input.
      And the guarantee that the rule gives <b>exactly one</b> output for each input.</div>
      <p>Change the domain and you change the function, even if the rule is unchanged.
      ${m('f(x) = x²')} on ${m('ℝ')} is many-to-one; the same rule on ${m('x ≥ 0')} is one-to-one.
      They are different functions.</p>
      {{fig:funcMachine:The machine picture: one input in, the rule applied, exactly one output out.}}`
    },
    {
      h: 'Five ways to write the same function',
      html: `<p>The doubling-and-adding-one function, five ways:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Way</th><th>How it looks</th><th>Best when</th></tr></thead>
      <tbody>
        <tr><td>formula</td><td class="m">f(x) = 2x + 1</td><td>you must compute or manipulate</td></tr>
        <tr><td>table</td><td class="m">0↦1, 1↦3, 2↦5</td><td>the domain is small or the data is measured</td></tr>
        <tr><td>graph</td><td>a straight line, gradient 2</td><td>you want shape, roots, behaviour</td></tr>
        <tr><td>words</td><td>“double the number, then add one”</td><td>explaining, or modelling a real situation</td></tr>
        <tr><td>ordered pairs</td><td class="m">{(0,1), (1,3), (2,5)}</td><td>the definition must be checked exactly</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A table is not always enough</span>
      Three points do not determine a function. ${m('f(x) = 2x + 1')} and a cubic through the same three
      points agree on the table and disagree everywhere else. A table defines a function only when the
      domain is exactly the listed inputs.</div>`
    },
    {
      h: 'Function notation',
      html: `<p>${m('f(3)')} means “the output when the input is 3”. It is not multiplication.
      The letter inside is a placeholder, so it can be replaced by anything — a number, another
      letter, a whole expression.</p>
      ${eq(m('f(x) = x² − 3x  ⇒  f(2) = −2,  f(a) = a² − 3a,  f(x + 1) = (x + 1)² − 3(x + 1)'), true)}
      <div class="warn"><span class="wl">Substitute the whole thing</span>
      ${m('f(x + 1)')} is <b>not</b> ${m('f(x) + 1')}. Put brackets round the substituted expression every
      time, then expand. Most lost marks in this topic live in that one missing bracket.</div>`
    },
    {
      h: 'The vertical line test',
      html: `<p>A graph shows a function exactly when no vertical line meets it more than once —
      that is the picture of “exactly one output per input”.</p>
      {{fig:quadGraph:Every vertical line meets this parabola once. It is a function — many-to-one, but a function.}}
      <p>A circle fails: the line ${m('x = 0')} meets ${m('x² + y² = 25')} at ${m('(0, 5)')} and
      ${m('(0, −5)')}. So a circle is a relation, not a function of ${m('x')}.</p>`
    }
  ],
  examples: [
    {
      q: 'For ' + m('f(x) = x² − 4x + 1') + ', find ' + m('f(0)') + ', ' + m('f(−2)') + ' and ' + m('f(a + 1)') + '.',
      steps: [
        [m('f(0) = 0 − 0 + 1 = 1'), ''],
        [m('f(−2) = 4 + 8 + 1 = 13'), 'Watch ' + m('−4 · (−2) = +8') + '.'],
        [m('f(a + 1) = (a + 1)² − 4(a + 1) + 1'), 'Brackets first.'],
        [m('= a² + 2a + 1 − 4a − 4 + 1 = a² − 2a − 2'), '']
      ],
      ans: m('1') + ', ' + m('13') + ', ' + m('a² − 2a − 2')
    },
    {
      q: 'If ' + m('g(x) = 3x − 5') + ' and ' + m('g(k) = 7') + ', find ' + m('k') + '.',
      steps: [
        [m('3k − 5 = 7'), 'Read the notation as an equation.'],
        [m('3k = 12'), ''],
        [m('k = 4'), '']
      ],
      ans: m('k = 4')
    },
    {
      q: 'A taxi charges 8000 so‘m plus 2500 so‘m a kilometre. Write the cost as a function and find the cost of 12 km.',
      steps: [
        ['Words to formula.', m('C(d) = 8000 + 2500d')],
        ['State the domain.', m('d ≥ 0')],
        [m('C(12) = 8000 + 30000 = 38000'), '']
      ],
      ans: m('C(d) = 8000 + 2500d') + '; 38 000 so‘m'
    }
  ],
  modelNote: 'Change the rule and watch the table, the graph and the machine all update together.',
  interactive: {
    type: 'quiz',
    title: 'Reading function notation',
    hint: 'Substitute in brackets, then simplify.',
    items: [
      { q: 'If ' + m('f(x) = 5 − 2x') + ' then ' + m('f(4)') + ' is:', a: [m('−3'), m('3'), m('13'), m('−13')], c: 0, why: m('5 − 8 = −3') + '.' },
      { q: 'If ' + m('f(x) = x²') + ' then ' + m('f(x + 2)') + ' is:', a: [m('x² + 2'), m('x² + 4'), m('x² + 4x + 4'), m('2x²')], c: 2, why: 'Expand ' + m('(x + 2)²') + '.' },
      { q: 'A vertical line cutting a graph twice means:', a: ['not a function', 'many-to-one', 'one-to-one', 'the domain is empty'], c: 0, why: 'One input, two outputs.' },
      { q: 'If ' + m('h(x) = ' + f('1', 'x − 3')) + ' then ' + m('h(3)') + ' is:', a: [m('0'), m('1'), 'undefined', m('3')], c: 2, why: 'The denominator is zero.' },
      { q: m('f(x) = 4') + ' for all ' + m('x') + ' has a graph that is:', a: ['a vertical line', 'a horizontal line', 'a parabola', 'not a graph'], c: 1, why: 'Every input gives 4.' }
    ]
  },
  quiz: [
    { q: m('f(x) = 2x + 3') + ', so ' + m('f(−1)') + ' is:', a: [m('1'), m('5'), m('−1'), m('2')], c: 0, why: m('−2 + 3 = 1') + '.' },
    { q: 'The independent variable in ' + m('y = f(x)') + ' is:', a: [m('y'), m('x'), m('f'), 'both'], c: 1, why: m('x') + ' is chosen freely.' },
    { q: 'Which cannot be the graph of a function?', a: ['a straight line', 'a parabola', 'a circle', 'a cubic'], c: 2, why: 'It fails the vertical line test.' },
    { q: 'If ' + m('f(x) = x²') + ', then ' + m('f(a) = f(b)') + ' means:', a: [m('a = b'), m('a = ±b'), m('a = −b'), 'nothing'], c: 1, why: 'Squares agree for ' + m('±') + ' pairs.' }
  ],
  practice: {
    easy: [
      [m('f(x) = 3x + 1') + '; find ' + m('f(2)'), m('7')],
      [m('f(x) = 3x + 1') + '; find ' + m('f(0)'), m('1')],
      [m('f(x) = x² − 1') + '; find ' + m('f(−3)'), m('8')],
      [m('g(x) = 10 − x') + '; find ' + m('g(10)'), m('0')],
      ['Is a circle the graph of a function?', 'no'],
      [m('f(x) = 7') + '; find ' + m('f(100)'), m('7')],
      ['Write “treble it, then subtract 2” as a formula', m('f(x) = 3x − 2')]
    ],
    med: [
      [m('f(x) = x² − 2x') + '; find ' + m('f(a + 1)'), m('a² − 1')],
      [m('f(x) = 4x − 9') + '; solve ' + m('f(x) = 0'), m('x = 2.25')],
      [m('f(x) = ' + f('x', 'x + 2')) + '; find ' + m('f(2)'), m('0.5')],
      [m('f(x) = ' + f('x', 'x + 2')) + '; which input is forbidden?', m('x = −2')],
      [m('f(x) = x³') + '; solve ' + m('f(x) = 8'), m('x = 2')],
      ['A phone plan costs 30 000 plus 200 a minute. Write ' + m('C(t)'), m('C(t) = 30000 + 200t')],
      [m('f(x) = 2x') + '; show ' + m('f(a + b) = f(a) + f(b)'), m('2(a + b) = 2a + 2b') + ' ✓']
    ],
    hard: [
      [m('f(x) = x² + 1') + '; simplify ' + m(f('f(x + h) − f(x)', 'h')), m('2x + h')],
      [m('f(x) = ' + f('1', 'x')) + '; simplify ' + m('f(a) − f(b)'), m(f('b − a', 'ab'))],
      [m('f(x) = 2x + 3') + '; find ' + m('x') + ' with ' + m('f(x) = f(2x)'), m('x = 0')],
      [m('f(x) = x²') + '; find all ' + m('a') + ' with ' + m('f(a) = f(a + 2)'), m('a = −1')],
      ['Give a rule whose graph fails the vertical line test', m('x = y²')],
      [m('f(x) = ax + b') + ', ' + m('f(1) = 5') + ', ' + m('f(3) = 11') + '. Find ' + m('a, b'), m('a = 3, b = 2')],
      ['Explain why ' + m('f(x + 1) ≠ f(x) + 1') + ' in general', 'Only additive rules satisfy it — e.g. ' + m('f(x) = x²') + ' fails']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Task 5 needs the vertical line test drawn, not just named.',
  homework: [
    m('f(x) = x² − 5x + 6') + '. Find ' + m('f(0), f(2), f(−1)') + '.',
    m('f(x) = 3 − 4x') + '. Solve ' + m('f(x) = 15') + '.',
    m('f(x) = x² + x') + '. Simplify ' + m('f(x + 1) − f(x)') + '.',
    'Write the same function four ways: formula, table on ' + m('{0,1,2,3}') + ', words and ordered pairs.',
    'Sketch a curve that is a function and one that is not, and mark the vertical line that decides each.'
  ]
});

/* ============================== 7 ============================== */
G10_ALG.push({
  id: 'a10-07', stream: 'alg', grade: 10, quarter: 1, lessons: '11–12', hours: 2,
  title: 'Domain and range',
  subtitle: 'Two questions, asked in a fixed order: what may go in, and what then comes out.',
  uz: 'Algebra 10, §1.3', uzPage: 'pp. 35–41',
  cam: 'P1 · 2.2', camPage: 'Pure Mathematics 1, pp. 30–36', wb: 'P1 Exercise 2B',
  objectives: [
    'Find the natural domain of a rational, root and polynomial function.',
    'Find the range of a linear, quadratic and simple rational function.',
    'Write domain and range in set notation and in interval notation.',
    'Explain the effect of a restricted domain on the range.'
  ],
  terms: [
    ['Domain', 'Aniqlanish sohasi', 'Область определения'],
    ['Range', 'Qiymatlar sohasi', 'Область значений'],
    ['Natural domain', 'Tabiiy aniqlanish sohasi', 'Естественная область определения'],
    ['Interval notation', 'Oraliq belgilanishi', 'Интервальная запись'],
    ['Excluded value', 'Chetlatilgan qiymat', 'Исключённое значение'],
    ['Restriction', 'Cheklash', 'Ограничение'],
    ['Asymptote', 'Asimptota', 'Асимптота'],
    ['Minimum value', 'Eng kichik qiymat', 'Наименьшее значение'],
    ['Set notation', 'To‘plam belgilanishi', 'Обозначение множеств']
  ],
  timing: [[6, 'The two questions'], [14, 'Finding a domain — three traps'], [14, 'Finding a range'], [12, 'Restricted domains'], [8, 'Practice'], [6, 'Homework']],
  sections: [
    {
      h: 'Domain first, always',
      html: `<div class="keybox"><div class="klabel">The order is not optional</div>
      The <b>domain</b> is the set of inputs the rule accepts. The <b>range</b> is the set of outputs it
      then produces. You cannot know the range until you know which inputs were allowed — so find the
      domain first, every time.</div>
      <p>When a function is given by a formula and nothing else, its domain is the largest set of real
      numbers the formula makes sense on. That is the <b>natural domain</b>.</p>`
    },
    {
      h: 'Three things a formula can refuse',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Refusal</th><th>Condition to impose</th><th>Example</th><th>Domain</th></tr></thead>
      <tbody>
        <tr><td>division by zero</td><td>denominator ≠ 0</td><td class="m">${f('1', 'x − 3')}</td><td class="m">x ≠ 3</td></tr>
        <tr><td>even root of a negative</td><td>radicand ≥ 0</td><td class="m">${sr('x − 2')}</td><td class="m">x ≥ 2</td></tr>
        <tr><td>both at once</td><td>radicand &gt; 0</td><td class="m">${f('1', sr('x − 2'))}</td><td class="m">x &gt; 2</td></tr>
      </tbody></table></div>
      <p>A polynomial refuses nothing: its natural domain is always ${m('ℝ')}.</p>
      <div class="warn"><span class="wl">Cancel <i>after</i> the domain, not before</span>
      ${m('f(x) = ' + f('x² − 9', 'x − 3'))} simplifies to ${m('x + 3')}, but the domain is still
      ${m('x ≠ 3')}. The graph is the line with a hole punched at ${m('(3, 6)')}. Cancelling never
      restores a forbidden input.</div>`
    },
    {
      h: 'Finding the range',
      html: `<p>Four reliable methods, in the order you should try them:</p>
      <ol>
        <li><b>Linear</b> — the range is all of ${m('ℝ')} unless the domain is restricted.</li>
        <li><b>Quadratic</b> — complete the square; the vertex gives the least (or greatest) value.</li>
        <li><b>Rational</b> — look for the value the output can never take: the horizontal asymptote.</li>
        <li><b>Anything</b> — sketch it and read the ${m('y')}-values the curve covers.</li>
      </ol>
      {{fig:quadGraph:The range of a parabola starts at the vertex. Read it off the y-axis, not the x-axis.}}
      ${eq(m('y = x² − 6x + 11 = (x − 3)² + 2  ⇒  range  y ≥ 2'), true)}
      <p>For ${m('f(x) = ' + f('1', 'x'))} the output ${m('0')} is impossible, because
      ${m('1 ÷ anything')} is never ${m('0')}. So the range is ${m('y ≠ 0')} — the same shape of answer
      as the domain, one value removed.</p>`
    },
    {
      h: 'Restricting the domain',
      html: `<p>Give a function a smaller domain and the range shrinks with it. For ${m('f(x) = x²')}:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Domain</th><th>Range</th><th>Kind</th></tr></thead>
      <tbody>
        <tr><td class="m">ℝ</td><td class="m">y ≥ 0</td><td>many-to-one</td></tr>
        <tr><td class="m">x ≥ 0</td><td class="m">y ≥ 0</td><td>one-to-one</td></tr>
        <tr><td class="m">1 ≤ x ≤ 3</td><td class="m">1 ≤ y ≤ 9</td><td>one-to-one</td></tr>
        <tr><td class="m">−1 ≤ x ≤ 3</td><td class="m">0 ≤ y ≤ 9</td><td>many-to-one</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The last row is the trap</span>
      On ${m('−1 ≤ x ≤ 3')} the smallest output is <b>not</b> ${m('f(−1) = 1')}. The vertex
      ${m('x = 0')} lies inside the interval, so the least value is ${m('0')}. Always check whether
      the vertex is inside the restricted domain before reading the endpoints.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the domain and range of ' + m('f(x) = ' + sr('x + 4')) + '.',
      steps: [
        ['Radicand ≥ 0.', m('x + 4 ≥ 0 ⇒ x ≥ −4')],
        ['A square root gives non-negative outputs.', m('f(x) ≥ 0')],
        ['At ' + m('x = −4') + ' the output is ' + m('0') + ' and it grows without bound.', '']
      ],
      ans: 'domain ' + m('x ≥ −4') + ', range ' + m('y ≥ 0')
    },
    {
      q: 'Find the domain and range of ' + m('f(x) = ' + f('2x', 'x − 1')) + '.',
      steps: [
        ['Denominator ≠ 0.', m('x ≠ 1')],
        ['Rearrange for ' + m('x') + ': ' + m('y(x − 1) = 2x'), m('yx − y = 2x')],
        [m('x(y − 2) = y ⇒ x = ' + f('y', 'y − 2')), 'This fails when ' + m('y = 2') + '.'],
        ['So ' + m('2') + ' is the one unreachable output.', '']
      ],
      ans: 'domain ' + m('x ≠ 1') + ', range ' + m('y ≠ 2')
    },
    {
      q: 'Find the range of ' + m('f(x) = x² − 4x + 7') + ' on ' + m('0 ≤ x ≤ 3') + '.',
      steps: [
        ['Complete the square.', m('(x − 2)² + 3')],
        ['The vertex ' + m('x = 2') + ' lies inside ' + m('[0, 3]') + '.', 'Least value ' + m('3') + '.'],
        ['Test both ends.', m('f(0) = 7') + ', ' + m('f(3) = 4')],
        ['Greatest is ' + m('7') + '.', '']
      ],
      ans: m('3 ≤ y ≤ 7')
    }
  ],
  modelNote: 'Drag the ends of the domain and watch the range respond.',
  interactive: {
    type: 'graphTransform',
    title: 'Domain in, range out',
    hint: 'Move the sliders and read the y-values the curve actually covers.'
  },
  quiz: [
    { q: 'The natural domain of ' + m(f('1', 'x + 5')) + ' is:', a: [m('x ≠ 5'), m('x ≠ −5'), m('x ≥ −5'), m('ℝ')], c: 1, why: 'The denominator vanishes at ' + m('−5') + '.' },
    { q: 'The range of ' + m('y = x² + 3') + ' is:', a: [m('y ≥ 0'), m('y ≥ 3'), m('y > 3'), m('ℝ')], c: 1, why: m('x² ≥ 0') + ' so ' + m('y ≥ 3') + '.' },
    { q: 'The domain of ' + m(sr('5 − x')) + ' is:', a: [m('x ≥ 5'), m('x ≤ 5'), m('x ≠ 5'), m('ℝ')], c: 1, why: m('5 − x ≥ 0') + '.' },
    { q: 'The range of any non-constant linear function on ' + m('ℝ') + ' is:', a: [m('y ≥ 0'), m('ℝ'), m('y ≠ 0'), 'one value'], c: 1, why: 'A line covers every height.' }
  ],
  practice: {
    easy: [
      ['Domain of ' + m('f(x) = 3x − 1'), m('ℝ')],
      ['Domain of ' + m(f('1', 'x')), m('x ≠ 0')],
      ['Domain of ' + m(sr('x')), m('x ≥ 0')],
      ['Range of ' + m('y = x²'), m('y ≥ 0')],
      ['Range of ' + m('y = x² + 5'), m('y ≥ 5')],
      ['Domain of ' + m(f('1', 'x − 7')), m('x ≠ 7')],
      ['Range of ' + m('y = 4'), m('{4}')]
    ],
    med: [
      ['Domain of ' + m(sr('2x − 6')), m('x ≥ 3')],
      ['Domain of ' + m(f('x', 'x² − 4')), m('x ≠ ±2')],
      ['Range of ' + m('y = (x − 1)² − 6'), m('y ≥ −6')],
      ['Range of ' + m('y = 7 − x²'), m('y ≤ 7')],
      ['Range of ' + m('y = ' + f('1', 'x') + ' + 3'), m('y ≠ 3')],
      ['Range of ' + m('y = 2x + 1') + ' on ' + m('0 ≤ x ≤ 4'), m('1 ≤ y ≤ 9')],
      ['Domain of ' + m(f('1', sr('x − 1'))), m('x > 1')]
    ],
    hard: [
      ['Range of ' + m('y = x² − 6x + 5') + ' on ' + m('0 ≤ x ≤ 2'), m('−3 ≤ y ≤ 5')],
      ['Range of ' + m('y = x² − 6x + 5') + ' on ' + m('1 ≤ x ≤ 5'), m('−4 ≤ y ≤ 0')],
      ['Range of ' + m('y = ' + f('3x + 1', 'x − 2')), m('y ≠ 3')],
      ['Domain of ' + m(sr('x² − 9')), m('x ≤ −3') + ' or ' + m('x ≥ 3')],
      ['Domain of ' + m(sr('6 + x − x²')), m('−2 ≤ x ≤ 3')],
      ['Find ' + m('k') + ' so ' + m('y = x² + kx + 10') + ' has range ' + m('y ≥ 1'), m('k = ±6')],
      ['Why does ' + m(f('x² − 1', 'x − 1')) + ' have range ' + m('y ≠ 2') + '?', 'It is ' + m('x + 1') + ' with the point at ' + m('x = 1') + ' removed']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every answer must say <i>domain</i> and <i>range</i> separately, in that order.',
  homework: [
    'Domain and range of ' + m('f(x) = ' + sr('x − 3')) + '.',
    'Domain and range of ' + m('f(x) = ' + f('5', 'x + 2')) + '.',
    'Range of ' + m('f(x) = x² − 8x + 20') + ' on ' + m('ℝ') + ', then on ' + m('0 ≤ x ≤ 3') + '.',
    'Explain why ' + m(f('x² − 4', 'x + 2')) + ' does not have domain ' + m('ℝ') + '.',
    'Invent a function with domain ' + m('x > 1') + ' and range ' + m('y > 0') + '.'
  ]
});

/* ============================== 8 ============================== */
G10_ALG.push({
  id: 'a10-08', stream: 'alg', grade: 10, quarter: 1, lessons: '13–14', hours: 2,
  title: 'Arithmetic operations on functions',
  subtitle: 'Adding, subtracting, multiplying and dividing functions — and the one rule about the domain that decides every answer.',
  uz: 'Algebra 10, §1.4', uzPage: 'pp. 42–47',
  cam: 'P1 · 2.3', camPage: 'Pure Mathematics 1, pp. 37–41', wb: 'P1 Exercise 2C',
  objectives: [
    'Form f + g, f − g, f · g and f/g from two given functions.',
    'Find the domain of a combined function as the intersection of the domains.',
    'Exclude the zeros of the denominator when dividing.',
    'Evaluate a combined function at a point.'
  ],
  terms: [
    ['Sum of functions', 'Funksiyalar yig‘indisi', 'Сумма функций'],
    ['Difference of functions', 'Funksiyalar ayirmasi', 'Разность функций'],
    ['Product of functions', 'Funksiyalar ko‘paytmasi', 'Произведение функций'],
    ['Quotient of functions', 'Funksiyalar bo‘linmasi', 'Частное функций'],
    ['Intersection of sets', 'To‘plamlar kesishmasi', 'Пересечение множеств'],
    ['Common domain', 'Umumiy aniqlanish sohasi', 'Общая область определения'],
    ['Zero of a function', 'Funksiya nuli', 'Нуль функции'],
    ['Closed under', 'Yopiq', 'Замкнуто относительно']
  ],
  timing: [[6, 'Four new functions from two old ones'], [12, 'The domain rule'], [10, 'Division — the extra condition'], [14, 'Worked practice'], [8, 'Consolidation'], [5, 'Homework']],
  sections: [
    {
      h: 'Four new functions from two',
      html: `<p>Given ${m('f')} and ${m('g')}, four new functions are defined pointwise — apply both
      rules to the same input, then combine the two outputs:</p>
      ${eq(m('(f + g)(x) = f(x) + g(x)') + '  ·  ' + m('(f − g)(x) = f(x) − g(x)'), false)}
      ${eq(m('(f · g)(x) = f(x) · g(x)') + '  ·  ' + m('(' + f('f', 'g') + ')(x) = ' + f('f(x)', 'g(x)')), true)}
      <p>Nothing new is happening to the arithmetic. Everything new is happening to the domain.</p>`
    },
    {
      h: 'The domain rule',
      html: `<div class="keybox"><div class="klabel">Both rules must accept the input</div>
      An input is allowed in ${m('f + g')} only if it is allowed in ${m('f')} <b>and</b> in ${m('g')}.
      So the domain of the combination is the <b>intersection</b> of the two domains.</div>
      <p>With ${m('f(x) = ' + sr('x'))} (domain ${m('x ≥ 0')}) and ${m('g(x) = ' + f('1', 'x − 4'))}
      (domain ${m('x ≠ 4')}), the sum has domain ${m('x ≥ 0')} and ${m('x ≠ 4')}.</p>
      <div class="warn"><span class="wl">Simplifying does not widen a domain</span>
      ${m('f(x) = ' + sr('x'))} and ${m('g(x) = −' + sr('x'))} give ${m('(f + g)(x) = 0')} — but only for
      ${m('x ≥ 0')}. The zero function on ${m('ℝ')} is a different function.</div>`
    },
    {
      h: 'Division needs one more exclusion',
      html: `<p>For ${m(f('f', 'g'))} the input must be in both domains <b>and</b> must not make ${m('g')}
      zero. Finding those zeros is usually the real work of the question.</p>
      ${eq('domain of  ' + m(f('f', 'g')) + '  =  (dom ' + m('f') + ')  ∩  (dom ' + m('g') + ')  minus  ' + m('{x : g(x) = 0}'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">f(x)</th><th class="m">g(x)</th><th class="m">(f/g)(x)</th><th>Domain</th></tr></thead>
      <tbody>
        <tr><td class="m">x + 1</td><td class="m">x − 2</td><td class="m">${f('x + 1', 'x − 2')}</td><td class="m">x ≠ 2</td></tr>
        <tr><td class="m">x²</td><td class="m">x² − 1</td><td class="m">${f('x²', 'x² − 1')}</td><td class="m">x ≠ ±1</td></tr>
        <tr><td class="m">${sr('x')}</td><td class="m">x − 3</td><td class="m">${f(sr('x'), 'x − 3')}</td><td class="m">x ≥ 0, x ≠ 3</td></tr>
      </tbody></table></div>`
    }
  ],
  examples: [
    {
      q: m('f(x) = x + 2') + ', ' + m('g(x) = x² − 4') + '. Find ' + m('(f + g)(3)') + ' and ' + m('(f · g)(x)') + '.',
      steps: [
        [m('f(3) = 5') + ', ' + m('g(3) = 5'), ''],
        [m('(f + g)(3) = 10'), ''],
        [m('(f · g)(x) = (x + 2)(x² − 4)'), ''],
        [m('= (x + 2)²(x − 2) = x³ + 2x² − 4x − 8'), '']
      ],
      ans: m('10') + ' and ' + m('x³ + 2x² − 4x − 8')
    },
    {
      q: m('f(x) = ' + sr('x − 1')) + ', ' + m('g(x) = x − 5') + '. Find the domain of ' + m(f('f', 'g')) + '.',
      steps: [
        ['Domain of ' + m('f') + ': ' + m('x ≥ 1'), ''],
        ['Domain of ' + m('g') + ': ' + m('ℝ'), ''],
        ['Intersection: ' + m('x ≥ 1'), ''],
        ['Remove the zero of ' + m('g') + ': ' + m('x = 5'), '']
      ],
      ans: m('x ≥ 1') + ', ' + m('x ≠ 5')
    },
    {
      q: m('f(x) = 3x') + ', ' + m('g(x) = x − 1') + '. Solve ' + m('(f − g)(x) = 9') + '.',
      steps: [
        [m('(f − g)(x) = 3x − (x − 1)'), 'Bracket the whole of ' + m('g') + '.'],
        [m('= 2x + 1'), ''],
        [m('2x + 1 = 9 ⇒ x = 4'), '']
      ],
      ans: m('x = 4')
    }
  ],
  modelNote: 'Pick two functions and see the four combinations plotted together.',
  interactive: {
    type: 'quiz',
    title: 'Combining functions',
    hint: 'Combine the outputs; intersect the domains.',
    items: [
      { q: m('f(x) = 2x, g(x) = x + 5') + '. Then ' + m('(f + g)(1)') + ' is:', a: [m('8'), m('12'), m('7'), m('2')], c: 0, why: m('2 + 6 = 8') + '.' },
      { q: m('(f − g)(x)') + ' for the same pair is:', a: [m('x − 5'), m('3x + 5'), m('x + 5'), m('2x − 5')], c: 0, why: m('2x − x − 5 = x − 5') + '.' },
      { q: 'Domain of ' + m('f + g') + ' is the ___ of the domains:', a: ['union', 'intersection', 'difference', 'sum'], c: 1, why: 'Both rules must accept the input.' },
      { q: m('f(x) = 1, g(x) = x − 3') + '. Domain of ' + m(f('f', 'g')) + ':', a: [m('ℝ'), m('x ≠ 3'), m('x > 3'), m('x ≠ 0')], c: 1, why: m('g(3) = 0') + '.' },
      { q: m('f(x) = ' + sr('x') + ', g(x) = ' + sr('4 − x')) + '. Domain of ' + m('f · g') + ':', a: [m('x ≥ 0'), m('x ≤ 4'), m('0 ≤ x ≤ 4'), m('ℝ')], c: 2, why: 'Both radicands must be non-negative.' }
    ]
  },
  quiz: [
    { q: m('(f · g)(2)') + ' means:', a: [m('f(2) · g(2)'), m('f(g(2))'), m('g(f(2))'), m('f(2) + g(2)')], c: 0, why: 'Multiply the two outputs.' },
    { q: 'Dividing functions forbids inputs where:', a: [m('f(x) = 0'), m('g(x) = 0'), m('x = 0'), 'never'], c: 1, why: 'The denominator must not vanish.' },
    { q: 'If both domains are ' + m('ℝ') + ', the domain of ' + m('f − g') + ' is:', a: [m('ℝ'), 'empty', m('x ≠ 0'), 'cannot say'], c: 0, why: m('ℝ ∩ ℝ = ℝ') + '.' },
    { q: m('f(x) = x², g(x) = −x²') + '. Then ' + m('f + g') + ' is:', a: ['the zero function', m('2x²'), m('x⁴'), 'undefined'], c: 0, why: 'The outputs cancel at every input.' }
  ],
  practice: {
    easy: [
      [m('f = 3x, g = x + 1') + '; find ' + m('(f + g)(2)'), m('9')],
      ['Same pair; ' + m('(f − g)(2)'), m('3')],
      ['Same pair; ' + m('(f · g)(2)'), m('18')],
      ['Same pair; ' + m('(f/g)(2)'), m('2')],
      [m('f = x², g = 4') + '; find ' + m('(f + g)(x)'), m('x² + 4')],
      ['Same pair; find ' + m('(f · g)(x)'), m('4x²')],
      ['Domain of ' + m('f + g') + ' when both are polynomials', m('ℝ')]
    ],
    med: [
      [m('f = x + 3, g = x − 3') + '; find ' + m('(f · g)(x)'), m('x² − 9')],
      [m('f = 2x, g = x²') + '; solve ' + m('(f + g)(x) = 0'), m('x = 0') + ' or ' + m('x = −2')],
      [m('f = ' + sr('x') + ', g = x') + '; domain of ' + m('f/g'), m('x > 0')],
      [m('f = ' + f('1', 'x') + ', g = x − 2') + '; domain of ' + m('f + g'), m('x ≠ 0')],
      [m('f = x − 1, g = x² − 1') + '; simplify ' + m('f/g'), m(f('1', 'x + 1')) + ', ' + m('x ≠ ±1')],
      [m('f = 5, g = x') + '; find ' + m('(f − g)(−3)'), m('8')],
      [m('f = x², g = x') + '; solve ' + m('(f/g)(x) = 4'), m('x = 4')]
    ],
    hard: [
      [m('f = ' + sr('x − 2') + ', g = ' + sr('8 − x')) + '; domain of ' + m('f + g'), m('2 ≤ x ≤ 8')],
      ['Same pair; domain of ' + m('f/g'), m('2 ≤ x < 8')],
      [m('f = x² − 4, g = x + 2') + '; simplify ' + m('f/g') + ' with its domain', m('x − 2') + ', ' + m('x ≠ −2')],
      ['Find ' + m('f, g') + ' with ' + m('(f + g)(x) = x²') + ' and ' + m('(f − g)(x) = 2x'), m('f = ' + f('x² + 2x', '2')) + ', ' + m('g = ' + f('x² − 2x', '2'))],
      [m('f = ' + f('1', 'x − 1') + ', g = ' + f('1', 'x + 1')) + '; simplify ' + m('f − g'), m(f('2', 'x² − 1'))],
      ['Show the sum of two even functions is even', m('(f+g)(−x) = f(−x)+g(−x) = f(x)+g(x)')],
      ['Is the product of two odd functions odd or even?', 'even']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'State the domain with every combined function, even when it is ' + m('ℝ') + '.',
  homework: [
    m('f(x) = x + 4') + ', ' + m('g(x) = x² − 16') + '. Find all four combinations.',
    'Give the domain of each of those four.',
    m('f(x) = ' + sr('x + 1')) + ', ' + m('g(x) = x − 3') + '. Find the domain of ' + m(f('f', 'g')) + '.',
    'Solve ' + m('(f + g)(x) = 0') + ' for ' + m('f(x) = 2x − 1') + ', ' + m('g(x) = x + 7') + '.',
    'Explain why ' + m(f('x² − 1', 'x − 1')) + ' and ' + m('x + 1') + ' are not the same function.'
  ]
});

/* ============================== 9 ============================== */
G10_ALG.push({
  id: 'a10-09', stream: 'alg', grade: 10, quarter: 1, lessons: '15–16', hours: 2,
  title: 'Control work 1, and work on the mistakes',
  subtitle: 'One hour of written assessment on the revision block and the definition of a function; one hour putting right what it exposes.',
  uz: 'Algebra 10, Nazorat ishi 1', uzPage: 'pp. 48–49',
  cam: 'P1 · Chapter 1–2 review', camPage: 'Pure Mathematics 1, pp. 24, 42', wb: 'Control paper A',
  objectives: [
    'Work accurately and independently under time.',
    'Show the reasoning, not only the answer.',
    'Classify each mistake as careless, method or knowledge.',
    'Rewrite every wrong solution correctly.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Assessment criteria', 'Baholash mezoni', 'Критерии оценивания'],
    ['Careless error', 'E’tiborsizlik xatosi', 'Ошибка по невнимательности'],
    ['Method error', 'Usul xatosi', 'Ошибка в методе'],
    ['Knowledge gap', 'Bilim bo‘shlig‘i', 'Пробел в знаниях'],
    ['Working (shown)', 'Yechim yozuvi', 'Ход решения'],
    ['Mark scheme', 'Baholash sxemasi', 'Схема оценивания'],
    ['Correction', 'Tuzatish', 'Исправление'],
    ['Resit task', 'Qayta topshiriq', 'Повторное задание']
  ],
  timing: [[3, 'Instructions'], [37, 'The paper'], [10, 'Self-mark and classify'], [25, 'Rewrite the wrong ones'], [5, 'Set the resit list']],
  sections: [
    {
      h: 'The paper — 20 marks, 37 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Solve ${m('x² − 7x + 10 = 0')} by factorising</td><td class="m">2</td><td>L2–3</td></tr>
        <tr><td>2</td><td>Solve ${m('3x² − 5x − 2 = 0')} by formula, exact answers</td><td class="m">3</td><td>L2–3</td></tr>
        <tr><td>3</td><td>Write ${m('x² − 8x + 21')} in completed-square form and give the vertex</td><td class="m">3</td><td>L4–5</td></tr>
        <tr><td>4</td><td>Classify three mappings and say which are functions</td><td class="m">3</td><td>L8</td></tr>
        <tr><td>5</td><td>${m('f(x) = x² − 3x')}: find ${m('f(−2)')} and ${m('f(a + 1)')}</td><td class="m">3</td><td>L9–10</td></tr>
        <tr><td>6</td><td>Domain and range of ${m('f(x) = ' + sr('x − 5'))}</td><td class="m">3</td><td>L11–12</td></tr>
        <tr><td>7</td><td>${m('f = 2x, g = x − 4')}: find ${m('(f/g)(x)')} and its domain</td><td class="m">3</td><td>L13–14</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Marking</div>
      A correct answer with no working scores half. A wrong answer reached by correct method scores
      most of the marks. Write the method.</div>`
    },
    {
      h: 'Classifying your own mistakes',
      html: `<p>In the second hour, every learner rules three columns and puts each lost mark in one:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Kind</th><th>Looks like</th><th>What fixes it</th></tr></thead>
      <tbody>
        <tr><td>careless</td><td>a sign, a copied digit, an unfinished last line</td><td>checking, not revision</td></tr>
        <tr><td>method</td><td>the right idea applied in the wrong order</td><td>one more worked example</td></tr>
        <tr><td>knowledge</td><td>you did not know the fact or the rule</td><td>re-read the section, then five problems</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The point of the exercise</span>
      A learner with six careless marks and a learner with six knowledge marks scored the same and
      need completely different homework. That is why the column matters more than the total.</div>`
    },
    {
      h: 'The rewrite',
      html: `<p>Every question that lost a mark is rewritten in full — not corrected in the margin.
      Under each rewrite, one sentence: <i>“I lost this because …”</i>.</p>
      {{fig:completeSquare:Question 3 in one picture — the square, the correction, the vertex.}}
      <p>Learners with more than four knowledge marks in one section get that section's problem set
      as their homework instead of the standard list.</p>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q3: write ' + m('x² − 8x + 21') + ' in completed-square form.',
      steps: [
        ['Half of ' + m('−8') + ' is ' + m('−4') + '.', m('(x − 4)² = x² − 8x + 16')],
        ['We need ' + m('+21') + ', we have ' + m('+16') + '.', 'Add ' + m('5') + '.'],
        [m('x² − 8x + 21 = (x − 4)² + 5'), 'Vertex ' + m('(4, 5)') + '.']
      ],
      ans: m('(x − 4)² + 5') + ', vertex ' + m('(4, 5)')
    },
    {
      q: 'Model answer, Q7: ' + m('f = 2x') + ', ' + m('g = x − 4') + '. Find ' + m('(f/g)(x)') + ' and its domain.',
      steps: [
        [m('(f/g)(x) = ' + f('2x', 'x − 4')), ''],
        ['Both domains are ' + m('ℝ') + '.', ''],
        ['Remove the zero of ' + m('g') + ': ' + m('x = 4') + '.', '']
      ],
      ans: m(f('2x', 'x − 4')) + ', domain ' + m('x ≠ 4')
    },
    {
      q: 'A learner wrote ' + m('f(a + 1) = f(a) + 1 = a² − 3a + 1') + '. Name the mistake.',
      steps: [
        ['They added 1 to the output instead of the input.', 'A method error, not carelessness.'],
        ['Correct: ' + m('(a + 1)² − 3(a + 1)'), ''],
        [m('= a² + 2a + 1 − 3a − 3 = a² − a − 2'), '']
      ],
      ans: 'Method error; the answer is ' + m('a² − a − 2')
    }
  ],
  modelNote: 'Re-do the two questions the class lost most marks on before the rewrite starts.',
  interactive: {
    type: 'quiz',
    title: 'Mark these six answers',
    hint: 'Decide whether each is right, and if not, which kind of mistake it is.',
    items: [
      { q: m('x² − 7x + 10 = (x − 2)(x − 5)') + ' — is it right?', a: ['yes', 'no, sign error', 'no, wrong numbers', 'no, it does not factorise'], c: 0, why: m('−2 · −5 = 10') + ', ' + m('−2 − 5 = −7') + '.' },
      { q: 'For ' + m('3x² − 5x − 2') + ', ' + m('D = 25 − 24 = 1') + '. Right?', a: ['yes', 'no — ' + m('D = 49'), 'no — ' + m('D = 1') + ' but sign wrong', 'no — ' + m('D = −49')], c: 1, why: m('D = 25 − 4·3·(−2) = 25 + 24 = 49') + '.' },
      { q: m('x² − 8x + 21 = (x − 4)² + 21'), a: ['right', 'careless', 'method error — forgot to subtract 16', 'knowledge gap'], c: 2, why: 'The correction ' + m('−16') + ' was dropped.' },
      { q: 'Domain of ' + m(sr('x − 5')) + ' given as ' + m('x > 5'), a: ['right', 'careless — should be ' + m('x ≥ 5'), 'method error', 'right, both work'], c: 1, why: m('' + sr('0') + ' = 0') + ' is defined.' },
      { q: m('(f/g)(x) = ' + f('2x', 'x − 4')) + ' with domain ' + m('ℝ'), a: ['right', 'careless', 'method — forgot ' + m('x ≠ 4'), 'knowledge gap'], c: 2, why: 'The zero of the denominator was not excluded.' },
      { q: m('x ↦ ±' + sr('x')) + ' called a function', a: ['right', 'knowledge gap', 'careless', 'method error'], c: 1, why: 'One input, two outputs — the definition was not known.' }
    ]
  },
  quiz: [
    { q: 'A correct answer with no working scores:', a: ['full marks', 'half', 'nothing', 'one mark'], c: 1, why: 'Method carries most of the credit.' },
    { q: 'A dropped minus sign is best classed as:', a: ['careless', 'method', 'knowledge', 'unavoidable'], c: 0, why: 'The idea was right.' },
    { q: 'Not knowing what a discriminant is, is:', a: ['careless', 'method', 'knowledge', 'careless'], c: 2, why: 'The fact itself is missing.' },
    { q: 'The most useful number from a control work is:', a: ['the total', 'the class average', 'the column your losses fell in', 'the rank'], c: 2, why: 'It decides what to do next.' }
  ],
  practice: {
    easy: [
      ['Solve ' + m('x² − 7x + 10 = 0'), m('x = 2, 5')],
      ['Solve ' + m('x² − 9 = 0'), m('x = ±3')],
      ['Complete the square: ' + m('x² + 2x'), m('(x + 1)² − 1')],
      [m('f(x) = x² − 3x') + '; find ' + m('f(−2)'), m('10')],
      ['Domain of ' + m(sr('x − 5')), m('x ≥ 5')],
      ['Is ' + m('x ↦ x²') + ' a function?', 'yes'],
      [m('f = 2x, g = x − 4') + '; find ' + m('(f + g)(5)'), m('11')]
    ],
    med: [
      ['Solve ' + m('3x² − 5x − 2 = 0'), m('x = 2, −' + f('1', '3'))],
      ['Complete the square: ' + m('x² − 8x + 21'), m('(x − 4)² + 5')],
      [m('f(x) = x² − 3x') + '; find ' + m('f(a + 1)'), m('a² − a − 2')],
      ['Range of ' + m('y = (x − 4)² + 5'), m('y ≥ 5')],
      ['Domain of ' + m(f('2x', 'x − 4')), m('x ≠ 4')],
      ['Classify ' + m('x ↦ x² + 1') + ' on ' + m('ℝ'), 'many-to-one'],
      ['Solve ' + m('2x² + 7x + 3 = 0'), m('x = −3, −0.5')]
    ],
    hard: [
      ['For what ' + m('k') + ' does ' + m('x² + kx + 16 = 0') + ' have one root?', m('k = ±8')],
      ['Range of ' + m('y = x² − 8x + 21') + ' on ' + m('2 ≤ x ≤ 5'), m('5 ≤ y ≤ 9')],
      [m('f(x) = x²') + '; simplify ' + m(f('f(x + h) − f(x)', 'h')), m('2x + h')],
      ['Domain of ' + m(f(sr('x − 1'), 'x − 3')), m('x ≥ 1') + ', ' + m('x ≠ 3')],
      ['Solve ' + m('x⁴ − 5x² + 4 = 0'), m('x = ±1, ±2')],
      ['Find ' + m('a, b') + ' with ' + m('x² + ax + b = (x − 3)² − 4'), m('a = −6, b = 5')],
      ['Explain why ' + m('D < 0') + ' means no ' + m('x') + '-intercepts', 'The parabola never reaches the axis']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Task 1 is the rewrite. It is not optional.',
  homework: [
    'Rewrite in full every question that lost a mark, with the “I lost this because …” sentence.',
    'Five problems from the section your knowledge column was heaviest in.',
    'Solve ' + m('2x² − 9x + 4 = 0') + ' twice — factorising and by formula — and check they agree.',
    'Find the domain and range of ' + m('f(x) = ' + f('3', 'x + 1')) + '.'
  ]
});

/* ============================== 10 ============================== */
G10_ALG.push({
  id: 'a10-10', stream: 'alg', grade: 10, quarter: 1, lessons: '17–18', hours: 2,
  title: 'Composite, inverse and periodic functions',
  subtitle: 'Three ways one function can be built from another — chaining it, undoing it, and repeating it.',
  uz: 'Algebra 10, §1.5', uzPage: 'pp. 50–58',
  cam: 'P1 · 2.4–2.6', camPage: 'Pure Mathematics 1, pp. 42–55', wb: 'P1 Exercise 2D, 2E',
  objectives: [
    'Form and evaluate the composite functions fg and gf.',
    'Show that fg ≠ gf in general.',
    'Find the inverse of a one-to-one function and state its domain and range.',
    'Recognise a periodic function and state its period.'
  ],
  terms: [
    ['Composite function', 'Murakkab funksiya', 'Сложная функция'],
    ['Inner function', 'Ichki funksiya', 'Внутренняя функция'],
    ['Outer function', 'Tashqi funksiya', 'Внешняя функция'],
    ['Inverse function', 'Teskari funksiya', 'Обратная функция'],
    ['Identity function', 'Ayniy funksiya', 'Тождественная функция'],
    ['Periodic function', 'Davriy funksiya', 'Периодическая функция'],
    ['Period', 'Davr', 'Период'],
    ['One-to-one', 'Biror-birga', 'Взаимно однозначное'],
    ['Reflection in y = x', 'y = x ga nisbatan simmetriya', 'Симметрия относительно y = x']
  ],
  timing: [[10, 'Composition — inner first'], [12, 'fg is not gf'], [16, 'Inverses'], [14, 'Periodic functions'], [8, 'Practice'], [5, 'Homework']],
  sections: [
    {
      h: 'Composition — the inner function goes first',
      html: `<p>${m('fg(x)')} means ${m('f(g(x))')}: apply ${m('g')}, then feed the result into ${m('f')}.
      The function written <b>closest to the x</b> acts first.</p>
      {{fig:composite:Two machines in a line. The output of g becomes the input of f.}}
      ${eq(m('f(x) = x², g(x) = x + 3  ⇒  fg(x) = (x + 3)²  but  gf(x) = x² + 3'), true)}
      <div class="warn"><span class="wl">Order matters</span>
      ${m('fg')} and ${m('gf')} are different functions. They agree only for special pairs — and finding
      the ${m('x')} where they happen to be equal is a standard exam question.</div>
      <p>The domain of ${m('fg')} is the set of ${m('x')} in the domain of ${m('g')} whose image
      ${m('g(x)')} lies in the domain of ${m('f')}.</p>`
    },
    {
      h: 'Inverses — undoing the machine',
      html: `<div class="keybox"><div class="klabel">Only one-to-one functions have inverses</div>
      If two inputs share an output, the reverse arrow does not know where to go. That is why
      ${m('f(x) = x²')} on ${m('ℝ')} has no inverse, but on ${m('x ≥ 0')} it has one.</div>
      <p>The method is always the same three steps:</p>
      <ol>
        <li>Write ${m('y = f(x)')}.</li>
        <li>Make ${m('x')} the subject.</li>
        <li>Swap the letters — and swap domain with range.</li>
      </ol>
      {{fig:inverseGraph:The inverse is the mirror image in the line y = x. Domain and range swap places.}}
      ${eq(m('f(x) = 3x − 5  ⇒  y = 3x − 5  ⇒  x = ' + f('y + 5', '3') + '  ⇒  f⁻¹(x) = ' + f('x + 5', '3')), true)}
      <div class="warn"><span class="wl">${m('f⁻¹')} is not ${m(f('1', 'f'))}</span>
      The ${m('−1')} is notation for “inverse”, not an index. ${m('f⁻¹(x)')} and ${m('[f(x)]⁻¹')} are
      different things.</div>
      <p>The defining property: ${m('f⁻¹f(x) = x')} and ${m('ff⁻¹(x) = x')}. Composing a function with its
      inverse gives the identity — that is the check to run on every answer.</p>`
    },
    {
      h: 'Periodic functions',
      html: `<p>A function is <b>periodic</b> when its whole graph repeats after a fixed horizontal shift:</p>
      ${eq(m('f(x + T) = f(x)  for every x, with the smallest such T > 0 called the period'), true)}
      {{fig:periodicGraph:One block of the graph, repeated forever. The period is the width of the block.}}
      <p>Trigonometric functions are the standard examples — ${m('sin x')} and ${m('cos x')} have period
      ${m('360°')}, ${m('tan x')} has period ${m('180°')}. So do many real quantities: hours of daylight,
      tides, the current in an alternating circuit.</p>
      <div class="warn"><span class="wl">Smallest</span>
      ${m('sin(x + 720°) = sin x')} too — but ${m('720°')} is not the period, because ${m('360°')} works
      and is smaller.</div>`
    }
  ],
  examples: [
    {
      q: m('f(x) = 2x + 1') + ', ' + m('g(x) = x²') + '. Find ' + m('fg(3)') + ' and ' + m('gf(3)') + '.',
      steps: [
        [m('g(3) = 9'), 'Inner first.'],
        [m('fg(3) = f(9) = 19'), ''],
        [m('f(3) = 7'), ''],
        [m('gf(3) = g(7) = 49'), 'Different, as expected.']
      ],
      ans: m('fg(3) = 19') + ', ' + m('gf(3) = 49')
    },
    {
      q: 'Find ' + m('f⁻¹') + ' for ' + m('f(x) = ' + f('x + 2', 'x − 1')) + ', ' + m('x ≠ 1') + '.',
      steps: [
        [m('y = ' + f('x + 2', 'x − 1')), ''],
        [m('y(x − 1) = x + 2 ⇒ yx − y = x + 2'), ''],
        [m('x(y − 1) = y + 2 ⇒ x = ' + f('y + 2', 'y − 1')), ''],
        ['Swap letters.', 'This function is its own inverse.']
      ],
      ans: m('f⁻¹(x) = ' + f('x + 2', 'x − 1')) + ', ' + m('x ≠ 1')
    },
    {
      q: m('f(x) = x + 4') + ', ' + m('g(x) = 3x') + '. Solve ' + m('fg(x) = gf(x)') + '.',
      steps: [
        [m('fg(x) = 3x + 4'), ''],
        [m('gf(x) = 3(x + 4) = 3x + 12'), ''],
        [m('3x + 4 = 3x + 12 ⇒ 4 = 12'), 'A contradiction.']
      ],
      ans: 'No solution — they are never equal'
    }
  ],
  modelNote: 'Feed a value through both orders and watch the two answers separate.',
  interactive: {
    type: 'quiz',
    title: 'Inner first, outer second',
    hint: 'Read fg as “f of g of x”.',
    items: [
      { q: m('f(x) = x + 1, g(x) = 2x') + '. Then ' + m('fg(3)') + ' is:', a: [m('7'), m('8'), m('6'), m('4')], c: 0, why: m('g(3) = 6') + ', then ' + m('f(6) = 7') + '.' },
      { q: 'Same pair; ' + m('gf(3)') + ' is:', a: [m('7'), m('8'), m('6'), m('9')], c: 1, why: m('f(3) = 4') + ', then ' + m('g(4) = 8') + '.' },
      { q: 'The inverse of ' + m('f(x) = 5x') + ' is:', a: [m('5x'), m(f('x', '5')), m('−5x'), m(f('1', '5x'))], c: 1, why: 'Divide instead of multiply.' },
      { q: m('f(x) = x²') + ' on ' + m('ℝ') + ' has an inverse because:', a: ['it does not', 'it is one-to-one', 'it is continuous', 'it is even'], c: 0, why: 'It is many-to-one — restrict the domain first.' },
      { q: 'The graph of ' + m('f⁻¹') + ' is the graph of ' + m('f') + ' reflected in:', a: [m('the x-axis'), m('the y-axis'), m('y = x'), 'the origin'], c: 2, why: 'Swapping coordinates is exactly that reflection.' },
      { q: 'If ' + m('f(x + 6) = f(x)') + ' for all ' + m('x') + ', the period could be:', a: [m('6'), m('12'), m('3'), 'any of these'], c: 3, why: 'The period is the smallest such value — 3 would also force 6.' }
    ]
  },
  quiz: [
    { q: m('fg(x)') + ' means:', a: [m('f(x) · g(x)'), m('f(g(x))'), m('g(f(x))'), m('f(x) + g(x)')], c: 1, why: 'Inner function acts first.' },
    { q: m('ff⁻¹(x)') + ' equals:', a: [m('1'), m('x'), m('0'), m('f(x)²')], c: 1, why: 'Inverse undoes the function.' },
    { q: 'A function has an inverse when it is:', a: ['even', 'one-to-one', 'periodic', 'continuous'], c: 1, why: 'Each output must identify its input.' },
    { q: 'The period of ' + m('cos x') + ' is:', a: [m('90°'), m('180°'), m('360°'), m('720°')], c: 2, why: 'One full turn.' }
  ],
  practice: {
    easy: [
      [m('f = x + 2, g = 3x') + '; find ' + m('fg(1)'), m('5')],
      ['Same pair; ' + m('gf(1)'), m('9')],
      ['Inverse of ' + m('f(x) = x + 7'), m('x − 7')],
      ['Inverse of ' + m('f(x) = 4x'), m(f('x', '4'))],
      ['Period of ' + m('sin x'), m('360°')],
      ['Period of ' + m('tan x'), m('180°')],
      [m('f⁻¹f(5)') + ' equals', m('5')]
    ],
    med: [
      [m('f = x², g = x − 1') + '; find ' + m('fg(x)'), m('(x − 1)²')],
      ['Same pair; ' + m('gf(x)'), m('x² − 1')],
      ['Inverse of ' + m('f(x) = 2x − 9'), m(f('x + 9', '2'))],
      ['Inverse of ' + m('f(x) = ' + f('1', 'x')), m(f('1', 'x'))],
      [m('f = 3x, g = x + 4') + '; solve ' + m('fg(x) = 0'), m('x = −4')],
      ['Inverse of ' + m('f(x) = x³ + 1'), m('∛(x − 1)')],
      ['If ' + m('f(x + 5) = f(x)') + ' and no smaller shift works, the period is', m('5')]
    ],
    hard: [
      [m('f = ' + sr('x') + ', g = x − 4') + '; domain of ' + m('fg'), m('x ≥ 4')],
      ['Same pair; domain of ' + m('gf'), m('x ≥ 0')],
      ['Inverse of ' + m('f(x) = ' + f('2x + 1', 'x − 3')), m(f('3x + 1', 'x − 2'))],
      [m('f = x + 3, g = x²') + '; solve ' + m('fg(x) = gf(x)'), m('x = −1')],
      ['Restrict ' + m('f(x) = x² − 4x') + ' so that it has an inverse', m('x ≥ 2') + ' (or ' + m('x ≤ 2') + ')'],
      ['Find ' + m('f⁻¹') + ' for that restriction', m('2 + ' + sr('x + 4'))],
      ['Show that if ' + m('f') + ' has period ' + m('T') + ' then so does ' + m('f(x) + 5'), 'Adding a constant does not change the repeat']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Check every inverse by composing it with the original.',
  homework: [
    m('f(x) = 3x − 2') + ', ' + m('g(x) = x²') + '. Find ' + m('fg(x)') + ' and ' + m('gf(x)') + '.',
    'Find ' + m('f⁻¹') + ' for ' + m('f(x) = 5 − 2x') + ' and check ' + m('f⁻¹f(4) = 4') + '.',
    'Find ' + m('f⁻¹') + ' for ' + m('f(x) = ' + f('x', 'x + 1')) + ', ' + m('x ≠ −1') + '.',
    'Explain why ' + m('f(x) = x⁴') + ' has no inverse on ' + m('ℝ') + ', and give a domain where it does.',
    'Sketch a periodic function with period ' + m('4') + ' that is not trigonometric.'
  ]
});

/* ============================== 11 ============================== */
G10_ALG.push({
  id: 'a10-11', stream: 'alg', grade: 10, quarter: 1, lessons: '19–21', hours: 3,
  title: 'Properties of a function',
  subtitle: 'Zeros, sign, monotonicity, parity and boundedness — the five questions asked of every function for the rest of the course.',
  uz: 'Algebra 10, §1.6', uzPage: 'pp. 59–70',
  cam: 'P1 · 2.2, 3.1', camPage: 'Pure Mathematics 1, pp. 30–36, 58–62', wb: 'P1 Exercise 2B, 3A',
  objectives: [
    'Find the zeros of a function and the intervals where it is positive or negative.',
    'Decide whether a function is increasing or decreasing on an interval.',
    'Test a function for even and odd symmetry algebraically.',
    'Say whether a function is bounded above, below, or neither.'
  ],
  terms: [
    ['Zero of a function', 'Funksiya nuli', 'Нуль функции'],
    ['Sign of a function', 'Funksiya ishorasi', 'Знак функции'],
    ['Increasing function', 'O‘suvchi funksiya', 'Возрастающая функция'],
    ['Decreasing function', 'Kamayuvchi funksiya', 'Убывающая функция'],
    ['Monotonic', 'Monoton', 'Монотонная'],
    ['Even function', 'Juft funksiya', 'Чётная функция'],
    ['Odd function', 'Toq funksiya', 'Нечётная функция'],
    ['Bounded above', 'Yuqoridan chegaralangan', 'Ограничена сверху'],
    ['Bounded below', 'Quyidan chegaralangan', 'Ограничена снизу'],
    ['Interval of constant sign', 'Ishora saqlanish oralig‘i', 'Промежуток знакопостоянства']
  ],
  timing: [[12, 'Zeros and the sign chart'], [20, 'Increasing and decreasing'], [20, 'Even and odd'], [14, 'Boundedness'], [55, 'Practice across all five'], [14, 'Homework']],
  sections: [
    {
      h: 'Zeros and the sign chart',
      html: `<p>A <b>zero</b> of ${m('f')} is an input with ${m('f(x) = 0')} — where the graph meets the
      ${m('x')}-axis. Between consecutive zeros a continuous function cannot change sign, so the zeros
      cut the domain into intervals on which the sign is constant.</p>
      {{fig:quadSignChart:The zeros split the line into three intervals. Test one point in each and the whole interval follows.}}
      <div class="keybox"><div class="klabel">The method, in four steps</div>
      Find the zeros · mark them on a number line, together with any excluded points ·
      test one convenient point in each interval · write the answer as intervals.</div>
      <p>For ${m('f(x) = x² − x − 6 = (x − 3)(x + 2)')} the zeros are ${m('−2')} and ${m('3')}. Testing
      ${m('x = 0')} gives ${m('−6')}, so ${m('f < 0')} on ${m('(−2, 3)')} and ${m('f > 0')} outside it.</p>`
    },
    {
      h: 'Increasing and decreasing',
      html: `<div class="keybox"><div class="klabel">The definitions</div>
      ${m('f')} is <b>increasing</b> on an interval when ${m('x₁ < x₂ ⇒ f(x₁) < f(x₂)')} for every pair in it,
      and <b>decreasing</b> when ${m('x₁ < x₂ ⇒ f(x₁) > f(x₂)')}. A function that is one or the other on
      the whole domain is <b>monotonic</b>.</div>
      {{fig:monotonic:Decreasing to the left of the vertex, increasing to the right. Neither word describes the whole domain.}}
      <div class="warn"><span class="wl">Always name the interval</span>
      “${m('y = x²')} is increasing” is false. “${m('y = x²')} is increasing on ${m('x ≥ 0')}” is true.
      Monotonicity is a property of a function <b>on an interval</b>, never of a function alone.</div>
      <p>A monotonic function is automatically one-to-one, and therefore has an inverse — which is why
      this property matters so much in the next chapter.</p>`
    },
    {
      h: 'Even and odd',
      html: `<p>Two symmetries are worth naming, because they halve the work of sketching:</p>
      ${eq(m('even:  f(−x) = f(x)      odd:  f(−x) = −f(x)'), true)}
      {{fig:evenOdd:An even graph folds onto itself in the y-axis. An odd graph maps onto itself under a half-turn about the origin.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Function</th><th class="m">f(−x)</th><th>Verdict</th></tr></thead>
      <tbody>
        <tr><td class="m">x²</td><td class="m">x²</td><td>even</td></tr>
        <tr><td class="m">x³</td><td class="m">−x³</td><td>odd</td></tr>
        <tr><td class="m">x² + x</td><td class="m">x² − x</td><td>neither</td></tr>
        <tr><td class="m">|x|</td><td class="m">|x|</td><td>even</td></tr>
        <tr><td class="m">${f('1', 'x')}</td><td class="m">−${f('1', 'x')}</td><td>odd</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">“Neither” is a real answer</span>
      Most functions are neither even nor odd. The only function that is both is ${m('f(x) = 0')}.
      Also: the domain must itself be symmetric about ${m('0')}, or the question cannot even be asked.</div>`
    },
    {
      h: 'Boundedness',
      html: `<p>${m('f')} is <b>bounded above</b> if there is a number ${m('M')} with ${m('f(x) ≤ M')} for
      every ${m('x')} in the domain, and <b>bounded below</b> if some ${m('m')} has ${m('f(x) ≥ m')}.
      Bounded on both sides is simply <b>bounded</b>.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Function</th><th>Below</th><th>Above</th></tr></thead>
      <tbody>
        <tr><td class="m">x²</td><td>yes, by 0</td><td>no</td></tr>
        <tr><td class="m">−x² + 5</td><td>no</td><td>yes, by 5</td></tr>
        <tr><td class="m">sin x</td><td>yes, by −1</td><td>yes, by 1</td></tr>
        <tr><td class="m">2x + 1</td><td>no</td><td>no</td></tr>
        <tr><td class="m">${f('1', '1 + x²')}</td><td>yes, by 0</td><td>yes, by 1</td></tr>
      </tbody></table></div>
      <p>Boundedness is exactly a statement about the <b>range</b>: bounded above means the range has
      a ceiling. So finding the range answers this property for free.</p>`
    }
  ],
  examples: [
    {
      q: 'Find the zeros and the sign intervals of ' + m('f(x) = x³ − 4x') + '.',
      steps: [
        [m('x(x² − 4) = x(x − 2)(x + 2)'), 'Factorise fully.'],
        ['Zeros ' + m('−2, 0, 2') + '.', 'Four intervals.'],
        ['Test ' + m('−3, −1, 1, 3') + ': ' + m('−15, 3, −3, 15') + '.', ''],
        ['Signs alternate.', '']
      ],
      ans: m('f > 0') + ' on ' + m('(−2, 0) ∪ (2, ∞)') + '; ' + m('f < 0') + ' on ' + m('(−∞, −2) ∪ (0, 2)')
    },
    {
      q: 'Decide whether ' + m('f(x) = x³ − 3x') + ' is even, odd or neither.',
      steps: [
        [m('f(−x) = (−x)³ − 3(−x)'), 'Substitute, do not guess.'],
        [m('= −x³ + 3x'), ''],
        [m('= −(x³ − 3x) = −f(x)'), '']
      ],
      ans: 'Odd'
    },
    {
      q: 'On which intervals is ' + m('f(x) = x² − 6x + 5') + ' decreasing, and is it bounded?',
      steps: [
        ['Complete the square: ' + m('(x − 3)² − 4') + '.', 'Vertex ' + m('(3, −4)') + '.'],
        ['A positive parabola falls to the left of its vertex.', 'Decreasing on ' + m('x ≤ 3') + '.'],
        ['Range ' + m('y ≥ −4') + '.', 'Bounded below only.']
      ],
      ans: 'Decreasing on ' + m('(−∞, 3]') + '; bounded below by ' + m('−4') + ', not above'
    }
  ],
  modelNote: 'Move the point along the curve and watch the sign, the direction and the symmetry all reported at once.',
  interactive: {
    type: 'graphTransform',
    title: 'Five properties on one curve',
    hint: 'Change the coefficients and watch which properties survive.'
  },
  quiz: [
    { q: m('f(−x) = f(x)') + ' means the function is:', a: ['odd', 'even', 'periodic', 'monotonic'], c: 1, why: 'Symmetric in the ' + m('y') + '-axis.' },
    { q: m('y = x²') + ' is increasing on:', a: [m('ℝ'), m('x ≥ 0'), m('x ≤ 0'), 'nowhere'], c: 1, why: 'To the right of the vertex.' },
    { q: 'The zeros of ' + m('f(x) = (x − 1)(x + 4)') + ' are:', a: [m('1, 4'), m('−1, 4'), m('1, −4'), m('−1, −4')], c: 2, why: 'Each bracket set to zero.' },
    { q: m('f(x) = sin x') + ' is:', a: ['bounded', 'bounded below only', 'bounded above only', 'unbounded'], c: 0, why: 'Its range is ' + m('[−1, 1]') + '.' },
    { q: 'A monotonic function is always:', a: ['even', 'periodic', 'one-to-one', 'bounded'], c: 2, why: 'It never repeats an output.' }
  ],
  practice: {
    easy: [
      ['Zeros of ' + m('f(x) = x − 5'), m('x = 5')],
      ['Zeros of ' + m('f(x) = x² − 16'), m('x = ±4')],
      ['Is ' + m('x⁴') + ' even or odd?', 'even'],
      ['Is ' + m('x⁵') + ' even or odd?', 'odd'],
      ['Is ' + m('y = 3x + 1') + ' increasing or decreasing?', 'increasing'],
      ['Is ' + m('y = 7 − 2x') + ' increasing or decreasing?', 'decreasing'],
      ['Is ' + m('y = x²') + ' bounded below?', 'yes, by ' + m('0')]
    ],
    med: [
      ['Sign intervals of ' + m('(x − 1)(x − 4)'), m('> 0') + ' outside ' + m('[1, 4]') + ', ' + m('< 0') + ' inside'],
      ['Is ' + m('f(x) = x² + x⁴') + ' even, odd or neither?', 'even'],
      ['Is ' + m('f(x) = x³ + x') + ' even, odd or neither?', 'odd'],
      ['Is ' + m('f(x) = x² + x') + ' even, odd or neither?', 'neither'],
      ['Where is ' + m('y = (x + 2)² − 1') + ' increasing?', m('x ≥ −2')],
      ['Range and boundedness of ' + m('y = 4 − x²'), m('y ≤ 4') + ', bounded above only'],
      ['Zeros of ' + m('f(x) = x³ − x'), m('x = 0, ±1')]
    ],
    hard: [
      ['Sign intervals of ' + m(f('x − 1', 'x + 2')), m('> 0') + ' on ' + m('(−∞,−2) ∪ (1,∞)')],
      ['Show ' + m('f(x) = ' + f('1', 'x')) + ' is odd', m('f(−x) = −' + f('1', 'x') + ' = −f(x)')],
      ['Is ' + m('f(x) = ' + sr('x')) + ' even, odd or neither? Why?', 'Neither — the domain is not symmetric'],
      ['Prove the sum of two odd functions is odd', m('(f+g)(−x) = −f(x)−g(x) = −(f+g)(x)')],
      ['Prove the product of an even and an odd function is odd', m('f(−x)g(−x) = f(x)·(−g(x))')],
      ['Find all ' + m('k') + ' making ' + m('y = x² + kx') + ' increasing on ' + m('x ≥ 0'), m('k ≥ 0')],
      ['Show ' + m(f('1', '1 + x²')) + ' is bounded, and give both bounds', m('0 < y ≤ 1')]
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Every parity answer must show ' + m('f(−x)') + ' worked out, not just the verdict.',
  homework: [
    'Zeros and sign intervals of ' + m('f(x) = x² − 3x − 10') + '.',
    'Test ' + m('f(x) = x⁴ − 3x²') + ' and ' + m('g(x) = x⁵ − x') + ' for parity.',
    'State the intervals on which ' + m('y = −x² + 8x') + ' increases and decreases.',
    'Say whether each of ' + m('x³') + ', ' + m('|x|') + ' and ' + m(f('1', 'x²')) + ' is bounded, and how.',
    'Give a function that is increasing on ' + m('ℝ') + ' and odd.',
    'Explain why an even function can never be one-to-one on a symmetric domain containing more than one point.'
  ]
});

/* ============================== 12 ============================== */
G10_ALG.push({
  id: 'a10-12', stream: 'alg', grade: 10, quarter: 1, lessons: '22–23', hours: 2,
  title: 'Transformations of the graph of a function',
  subtitle: 'Four moves — shift, shift, stretch, reflect — and the rule that inside the bracket everything works backwards.',
  uz: 'Algebra 10, §1.7', uzPage: 'pp. 71–80',
  cam: 'P1 · 3.1–3.4', camPage: 'Pure Mathematics 1, pp. 58–74', wb: 'P1 Exercise 3A–3C',
  objectives: [
    'Sketch y = f(x) + a and y = f(x − a) from the graph of f.',
    'Sketch y = a·f(x) and y = f(ax).',
    'Sketch y = −f(x) and y = f(−x).',
    'Combine two transformations and give them in the correct order.'
  ],
  terms: [
    ['Transformation', 'Almashtirish', 'Преобразование'],
    ['Translation', 'Parallel ko‘chirish', 'Параллельный перенос'],
    ['Vertical shift', 'Vertikal siljish', 'Вертикальный сдвиг'],
    ['Horizontal shift', 'Gorizontal siljish', 'Горизонтальный сдвиг'],
    ['Stretch', 'Cho‘zish', 'Растяжение'],
    ['Compression', 'Siqish', 'Сжатие'],
    ['Scale factor', 'Cho‘zish koeffitsienti', 'Коэффициент растяжения'],
    ['Reflection', 'Simmetriya', 'Отражение'],
    ['Invariant point', 'O‘zgarmas nuqta', 'Неподвижная точка'],
    ['Image of a point', 'Nuqta tasviri', 'Образ точки']
  ],
  timing: [[10, 'Outside the bracket — what you expect'], [16, 'Inside the bracket — backwards'], [16, 'Stretches'], [16, 'Reflections and combinations'], [22, 'Practice'], [10, 'Homework']],
  sections: [
    {
      h: 'Outside the bracket behaves',
      html: `<p>Everything done to ${m('f(x)')} <b>after</b> the function has acted moves the graph
      vertically, in the direction you would guess:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Equation</th><th>Effect</th><th>A point ${m('(p, q)')} goes to</th></tr></thead>
      <tbody>
        <tr><td class="m">y = f(x) + a</td><td>up by ${m('a')}</td><td class="m">(p, q + a)</td></tr>
        <tr><td class="m">y = a·f(x)</td><td>stretch, factor ${m('a')}, from the ${m('x')}-axis</td><td class="m">(p, aq)</td></tr>
        <tr><td class="m">y = −f(x)</td><td>reflect in the ${m('x')}-axis</td><td class="m">(p, −q)</td></tr>
      </tbody></table></div>
      {{fig:transformShift:The same curve, shifted. Only the y-coordinates changed.}}`
    },
    {
      h: 'Inside the bracket works backwards',
      html: `<div class="keybox"><div class="klabel">The one rule to memorise</div>
      Anything done to ${m('x')} <b>before</b> the function acts moves the graph horizontally and does the
      <b>opposite</b> of what it looks like. ${m('f(x − 3)')} moves the graph <b>right</b> 3, not left.</div>
      <p>Why: the new graph at ${m('x = 3')} shows the old value at ${m('0')}. To see the old picture you
      must travel further along, so the whole graph slides right.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Equation</th><th>Effect</th><th>A point ${m('(p, q)')} goes to</th></tr></thead>
      <tbody>
        <tr><td class="m">y = f(x − a)</td><td>right by ${m('a')}</td><td class="m">(p + a, q)</td></tr>
        <tr><td class="m">y = f(ax)</td><td>compress, factor ${m(f('1', 'a'))}, towards the ${m('y')}-axis</td><td class="m">(${f('p', 'a')}, q)</td></tr>
        <tr><td class="m">y = f(−x)</td><td>reflect in the ${m('y')}-axis</td><td class="m">(−p, q)</td></tr>
      </tbody></table></div>
      {{fig:transformStretch:A stretch of factor 2 from the x-axis, and a compression of factor ½ towards the y-axis. Different curves.}}
      <div class="warn"><span class="wl">${m('f(2x)')} is not a stretch by 2</span>
      It is a compression: every ${m('x')}-coordinate is <b>halved</b>. ${m('f(' + f('x', '2') + ')')} is
      the one that stretches by 2.</div>`
    },
    {
      h: 'Combining, and the order',
      html: `<p>${m('y = 3f(x − 2) + 1')} is three transformations. Outside-the-bracket operations are
      applied in ordinary BIDMAS order — stretch first, then shift:</p>
      <ol>
        <li>${m('f(x − 2)')}: right 2.</li>
        <li>${m('3f(x − 2)')}: stretch factor 3 from the ${m('x')}-axis.</li>
        <li>${m('3f(x − 2) + 1')}: up 1.</li>
      </ol>
      <div class="warn"><span class="wl">Order changes the answer</span>
      Stretch-then-shift and shift-then-stretch give different curves. ${m('3f(x) + 1')} and
      ${m('3[f(x) + 1]')} are not the same: the second is ${m('3f(x) + 3')}.</div>
      <p>Completed-square form is exactly this idea for quadratics: ${m('y = (x − 3)² + 2')} says
      “take ${m('y = x²')}, move it right 3 and up 2” — which is why the vertex is ${m('(3, 2)')}.</p>`
    }
  ],
  examples: [
    {
      q: 'The point ' + m('(2, 5)') + ' is on ' + m('y = f(x)') + '. Where is it on ' + m('y = 2f(x + 1) − 3') + '?',
      steps: [
        [m('x + 1') + ' inside: move left 1.', m('x') + '-coordinate ' + m('2 − 1 = 1') + '.'],
        ['Stretch by 2: ' + m('5 · 2 = 10') + '.', ''],
        ['Down 3: ' + m('10 − 3 = 7') + '.', '']
      ],
      ans: m('(1, 7)')
    },
    {
      q: 'Describe the transformation taking ' + m('y = x²') + ' to ' + m('y = (x + 4)² − 9') + '.',
      steps: [
        [m('(x + 4)') + ' inside: left 4.', 'Backwards, as always.'],
        [m('− 9') + ' outside: down 9.', ''],
        ['Vertex moves from ' + m('(0,0)') + ' to ' + m('(−4, −9)') + '.', '']
      ],
      ans: 'Translation left 4 and down 9'
    },
    {
      q: 'Write ' + m('y = x² − 10x + 18') + ' as a transformation of ' + m('y = x²') + '.',
      steps: [
        ['Complete the square.', m('(x − 5)² − 25 + 18')],
        [m('= (x − 5)² − 7'), ''],
        ['Read off the two moves.', '']
      ],
      ans: 'Right 5, down 7 — vertex ' + m('(5, −7)')
    }
  ],
  modelNote: 'Drag a, b and c and watch which coordinates move.',
  interactive: {
    type: 'graphTransform',
    title: 'y = a·f(x − b) + c',
    hint: 'Change one slider at a time. Notice that b moves the curve the way the sign does not suggest.'
  },
  quiz: [
    { q: m('y = f(x) + 5') + ' moves the graph:', a: ['up 5', 'down 5', 'left 5', 'right 5'], c: 0, why: 'Outside the bracket, as expected.' },
    { q: m('y = f(x − 5)') + ' moves the graph:', a: ['left 5', 'right 5', 'up 5', 'down 5'], c: 1, why: 'Inside the bracket, backwards.' },
    { q: m('y = f(3x)') + ' is a:', a: ['stretch factor 3', 'compression factor ' + m(f('1', '3')), 'shift right 3', 'reflection'], c: 1, why: m('x') + '-coordinates are divided by 3.' },
    { q: m('y = −f(x)') + ' reflects in:', a: [m('the y-axis'), m('the x-axis'), m('y = x'), 'the origin'], c: 1, why: 'The outputs change sign.' },
    { q: 'The vertex of ' + m('y = (x + 1)² + 6') + ' is:', a: [m('(1, 6)'), m('(−1, 6)'), m('(−1, −6)'), m('(1, −6)')], c: 1, why: 'Left 1, up 6.' }
  ],
  practice: {
    easy: [
      ['Describe ' + m('y = f(x) + 3'), 'up 3'],
      ['Describe ' + m('y = f(x) − 7'), 'down 7'],
      ['Describe ' + m('y = f(x − 2)'), 'right 2'],
      ['Describe ' + m('y = f(x + 6)'), 'left 6'],
      ['Describe ' + m('y = 4f(x)'), 'stretch factor 4 from the ' + m('x') + '-axis'],
      ['Describe ' + m('y = −f(x)'), 'reflect in the ' + m('x') + '-axis'],
      ['Vertex of ' + m('y = (x − 1)²'), m('(1, 0)')]
    ],
    med: [
      ['Vertex of ' + m('y = (x + 3)² − 5'), m('(−3, −5)')],
      [m('(4, 2)') + ' on ' + m('y = f(x)') + '; find it on ' + m('y = f(x) + 6'), m('(4, 8)')],
      ['Same point on ' + m('y = f(x − 1)'), m('(5, 2)')],
      ['Same point on ' + m('y = 3f(x)'), m('(4, 6)')],
      ['Same point on ' + m('y = f(2x)'), m('(2, 2)')],
      ['Write ' + m('y = x² + 6x + 4') + ' as a transformation of ' + m('y = x²'), 'left 3, down 5'],
      ['Describe ' + m('y = f(−x)'), 'reflect in the ' + m('y') + '-axis']
    ],
    hard: [
      [m('(3, −1)') + ' on ' + m('y = f(x)') + '; find it on ' + m('y = 2f(x + 3) − 4'), m('(0, −6)')],
      ['Describe ' + m('y = −2f(x) + 1') + ' in order', 'stretch 2, reflect in ' + m('x') + '-axis, up 1'],
      ['Write ' + m('y = 2x² − 12x + 20') + ' in the form ' + m('a(x − h)² + k'), m('2(x − 3)² + 2')],
      ['What single transformation maps ' + m('y = x²') + ' to ' + m('y = 4x²') + '?', 'stretch factor 4 from the ' + m('x') + '-axis (or compression ' + m(f('1', '2')) + ' towards the ' + m('y') + '-axis)'],
      ['Find ' + m('a, b') + ' with ' + m('f(x) = (x − a)² + b') + ' passing through ' + m('(0, 10)') + ' and vertex on ' + m('x = 3'), m('a = 3, b = 1')],
      ['Which points of ' + m('y = f(x)') + ' are unmoved by ' + m('y = −f(x)') + '?', 'those with ' + m('y = 0')],
      ['Which points are unmoved by ' + m('y = f(−x)') + '?', 'those with ' + m('x = 0')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Sketch, do not only describe. One axis set per question is enough.',
  homework: [
    'Sketch ' + m('y = x²') + ', ' + m('y = (x − 2)²') + ' and ' + m('y = (x − 2)² + 3') + ' on one set of axes.',
    'Describe the transformation from ' + m('y = x²') + ' to ' + m('y = x² − 4x + 1') + '.',
    m('(−2, 7)') + ' is on ' + m('y = f(x)') + '. Find its image on ' + m('y = 3f(x + 2) − 1') + '.',
    'Explain in your own words why ' + m('f(x − 3)') + ' moves the graph right.',
    'Sketch ' + m('y = −f(x)') + ' and ' + m('y = f(−x)') + ' for a curve of your choice and say how they differ.'
  ]
});

/* ============================== 13 ============================== */
G10_ALG.push({
  id: 'a10-13', stream: 'alg', grade: 10, quarter: 1, lessons: '24–25', hours: 2,
  title: 'Modelling with linear and quadratic functions',
  subtitle: 'Turning a paragraph of Uzbek life into a function, solving it, and then checking the answer means something.',
  uz: 'Algebra 10, §1.8', uzPage: 'pp. 81–88',
  cam: 'P1 · 1.7, 3.5', camPage: 'Pure Mathematics 1, pp. 18–23, 75–79', wb: 'P1 Exercise 1F, 3D',
  objectives: [
    'Define variables clearly and write a function from a described situation.',
    'State the domain that the context — not the algebra — allows.',
    'Solve the model and interpret the solution in the original words.',
    'Judge whether a model is reasonable and name one of its limitations.'
  ],
  terms: [
    ['Mathematical model', 'Matematik model', 'Математическая модель'],
    ['Variable', 'O‘zgaruvchi', 'Переменная'],
    ['Constraint', 'Cheklov', 'Ограничение'],
    ['Constant term', 'O‘zgarmas had', 'Свободный член'],
    ['Rate of change', 'O‘zgarish tezligi', 'Скорость изменения'],
    ['Maximum value', 'Eng katta qiymat', 'Наибольшее значение'],
    ['Optimal value', 'Optimal qiymat', 'Оптимальное значение'],
    ['Interpretation', 'Talqin', 'Интерпретация'],
    ['Assumption', 'Faraz', 'Допущение'],
    ['Limitation of a model', 'Model cheklovi', 'Ограниченность модели']
  ],
  timing: [[8, 'The four-step cycle'], [16, 'Linear models'], [22, 'Quadratic models and the vertex'], [16, 'Judging a model'], [20, 'Practice'], [8, 'Homework']],
  sections: [
    {
      h: 'The four-step cycle',
      html: `<div class="keybox"><div class="klabel">Never skip step 1</div>
      <b>1 Define</b> — “let ${m('x')} be the width <b>in metres</b>”. <b>2 Translate</b> — build the
      function and state the domain the situation allows. <b>3 Solve</b> — ordinary algebra.
      <b>4 Interpret</b> — answer in the words of the question, with units.</div>
      <p>Most lost marks in modelling questions are lost at step 1 and step 4, not step 3. A number
      with no units is not an answer, and “${m('x = 4')}” does not tell a reader what is 4 metres long.</p>`
    },
    {
      h: 'Linear models — a fixed part and a rate',
      html: `<p>Any situation with a starting amount and a constant rate of change is linear:</p>
      ${eq(m('y = (starting amount) + (rate) × (number of units)'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Situation</th><th>Model</th><th>What ${m('c')} and ${m('m')} mean</th></tr></thead>
      <tbody>
        <tr><td>taxi: 8 000 so‘m plus 2 500 a km</td><td class="m">C = 8000 + 2500d</td><td>flag fall; price per km</td></tr>
        <tr><td>a 40 000 so‘m card losing 300 a minute</td><td class="m">B = 40000 − 300t</td><td>credit; cost per minute</td></tr>
        <tr><td>a tank filling at 12 litres a minute from 50 litres</td><td class="m">V = 50 + 12t</td><td>start volume; flow rate</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The domain comes from the world</span>
      ${m('B = 40000 − 300t')} is algebraically fine at ${m('t = 500')}, but the card empties at
      ${m('t = 133' + f('1', '3'))}. The domain is ${m('0 ≤ t ≤ 133.3')}, and saying so is worth a mark.</div>`
    },
    {
      h: 'Quadratic models — where the vertex is the answer',
      html: `<p>A quadratic appears whenever two quantities that vary must be multiplied — an area from
      two lengths, a revenue from price times quantity, a height under gravity.</p>
      {{fig:quadGraph:For a negative parabola the vertex is the maximum. Its x tells you what to choose; its y tells you what you get.}}
      <p><b>Fencing.</b> 60 m of fence, a rectangular pen against a wall (three sides fenced).
      Let the two equal sides be ${m('x')}. Then the third is ${m('60 − 2x')} and</p>
      ${eq(m('A(x) = x(60 − 2x) = 60x − 2x² = −2(x − 15)² + 450'), true)}
      <p>so the greatest area is ${m('450 m²')} when ${m('x = 15')} — and the domain is
      ${m('0 < x < 30')}, because outside it a side would be negative.</p>
      <div class="warn"><span class="wl">Which coordinate answers the question?</span>
      “What width gives the largest area?” wants the ${m('x')} of the vertex. “What is the largest area?”
      wants the ${m('y')}. Read the question twice before writing the number.</div>`
    },
    {
      h: 'Judging the model',
      html: `<p>Every model makes assumptions. Naming one is part of a complete answer:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Model</th><th>An assumption</th><th>Where it fails</th></tr></thead>
      <tbody>
        <tr><td>taxi fare</td><td>the rate never changes</td><td>night tariff, waiting time</td></tr>
        <tr><td>ball thrown up</td><td>no air resistance</td><td>light or fast objects</td></tr>
        <tr><td>revenue = price × sales</td><td>sales fall linearly with price</td><td>very high or very low prices</td></tr>
      </tbody></table></div>
      <p>A model is not right or wrong. It is useful over some range of inputs, and the honest answer
      says which range.</p>`
    }
  ],
  examples: [
    {
      q: 'A rectangle has perimeter 40 cm. Find the greatest possible area.',
      steps: [
        ['Let the width be ' + m('x') + ' cm.', 'Length ' + m('20 − x') + '.'],
        [m('A(x) = x(20 − x) = 20x − x²'), 'Domain ' + m('0 < x < 20') + '.'],
        [m('= −(x − 10)² + 100'), 'Vertex at ' + m('x = 10') + '.'],
        ['A square, side 10 cm.', '']
      ],
      ans: m('100 cm²') + ', when the rectangle is a 10 cm square'
    },
    {
      q: 'A shop sells 200 notebooks a week at 12 000 so‘m. Each 1 000 so‘m rise loses 10 sales. What price maximises revenue?',
      steps: [
        ['Let there be ' + m('x') + ' rises of 1 000.', 'Price ' + m('12000 + 1000x') + ', sales ' + m('200 − 10x') + '.'],
        [m('R(x) = (12000 + 1000x)(200 − 10x)'), ''],
        [m('= 2400000 + 80000x − 10000x²'), ''],
        [m('= −10000(x − 4)² + 2560000'), m('x = 4') + '.']
      ],
      ans: 'Price 16 000 so‘m; revenue 2 560 000 so‘m'
    },
    {
      q: 'A ball is thrown up: ' + m('h(t) = 20t − 5t²') + ' metres after ' + m('t') + ' seconds. Find the greatest height and when it lands.',
      steps: [
        [m('h(t) = −5(t − 2)² + 20'), 'Complete the square.'],
        ['Greatest height ' + m('20 m') + ' at ' + m('t = 2 s') + '.', ''],
        [m('20t − 5t² = 0 ⇒ 5t(4 − t) = 0'), ''],
        [m('t = 0') + ' or ' + m('t = 4') + '.', 'Domain ' + m('0 ≤ t ≤ 4') + '.']
      ],
      ans: m('20 m') + ' at ' + m('t = 2') + '; lands at ' + m('t = 4 s')
    }
  ],
  modelNote: 'Change the total length of fence and watch the optimum width move with it.',
  interactive: {
    type: 'optimise',
    title: 'The largest box',
    hint: 'Slide x and read the volume. The maximum is marked.'
  },
  quiz: [
    { q: 'In ' + m('C = 8000 + 2500d') + ', the number ' + m('2500') + ' is:', a: ['the fixed charge', 'the rate per km', 'the total', 'the domain'], c: 1, why: 'It multiplies the distance.' },
    { q: 'For a negative quadratic, the vertex gives:', a: ['the minimum', 'the maximum', 'a root', 'the intercept'], c: 1, why: 'The parabola opens downwards.' },
    { q: 'A rectangle of fixed perimeter has greatest area when it is:', a: ['long and thin', 'a square', 'a golden rectangle', 'it has no maximum'], c: 1, why: 'The vertex sits at equal sides.' },
    { q: 'The domain of a length variable is normally:', a: [m('ℝ'), m('x > 0'), m('x ≠ 0'), m('x ≤ 0')], c: 1, why: 'Lengths are positive.' }
  ],
  practice: {
    easy: [
      ['A taxi charges 9 000 plus 3 000 a km. Write ' + m('C(d)'), m('C = 9000 + 3000d')],
      ['Cost of 7 km on that model', m('30 000') + ' so‘m'],
      ['A rectangle is ' + m('x') + ' by ' + m('10 − x') + '. Write the area', m('A = 10x − x²')],
      ['Domain of that area function', m('0 < x < 10')],
      [m('h(t) = 10t − 5t²') + '; when is ' + m('h = 0') + '?', m('t = 0, 2')],
      ['Greatest value of ' + m('A = −(x − 6)² + 36'), m('36')],
      ['Where does it occur?', m('x = 6')]
    ],
    med: [
      ['Perimeter 24 cm; maximise the area', m('36 cm²') + ', a 6 cm square'],
      ['A card holds 25 000 and loses 400 a minute. When is it empty?', m('62.5') + ' minutes'],
      [m('h(t) = 30t − 5t²') + '; greatest height', m('45 m') + ' at ' + m('t = 3')],
      ['Two numbers add to 20. Maximise their product', m('100') + ', at ' + m('10') + ' and ' + m('10')],
      ['Fence 100 m, pen against a wall. Maximise the area', m('1250 m²') + ' with ' + m('x = 25')],
      ['A firm sells ' + m('100 − 2p') + ' items at price ' + m('p') + '. Write the revenue', m('R = 100p − 2p²')],
      ['Maximise it', m('p = 25') + ', ' + m('R = 1250')]
    ],
    hard: [
      ['Fence 80 m against a wall, but a 4 m gate is free. Maximise the area', m('x = 21') + ', area ' + m('882 m²')],
      ['Cost ' + m('C = x² − 40x + 500') + '. Find the least cost and the ' + m('x'), m('100') + ' at ' + m('x = 20')],
      [m('h(t) = 1.5 + 12t − 5t²') + '. When does the ball reach 8 m?', m('t ≈ 0.71') + ' and ' + m('t ≈ 1.69') + ' s'],
      ['Two numbers differ by 6. Minimise the sum of their squares', m('18') + ', at ' + m('3') + ' and ' + m('−3')],
      ['A 20 cm wire is cut in two and each part bent into a square. Minimise the total area', 'cut in half; ' + m('12.5 cm²')],
      ['Sales fall by 5 for every 500 so‘m rise from 10 000 where 300 sell. Maximise revenue', 'price ' + m('20 000') + ', revenue ' + m('3 000 000')],
      ['Name one assumption in the previous model and where it fails', 'Sales fall linearly — false at very high prices, where they hit zero']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every answer needs units and a sentence, not just a number.',
  homework: [
    'A plumber charges 50 000 so‘m plus 30 000 an hour. Write the model, find the cost of a 3½ hour job, and state the domain.',
    'A rectangular garden has perimeter 36 m. Find the dimensions giving the greatest area.',
    m('h(t) = 25t − 5t²') + '. Find the greatest height, the time it occurs and when the ball lands.',
    'A stall sells 80 samsa a day at 8 000 so‘m. Each 500 so‘m rise loses 4 sales. Find the revenue-maximising price.',
    'Name one assumption in task 4 and say where it would break down.'
  ]
});

/* ============================== 14 ============================== */
G10_ALG.push({
  id: 'a10-14', stream: 'alg', grade: 10, quarter: 1, lessons: '26–27', hours: 2,
  title: 'Control work 2, and the quarter review',
  subtitle: 'The whole of Chapter 1 in one paper, then an hour drawing the quarter together into a single map.',
  uz: 'Algebra 10, Nazorat ishi 2', uzPage: 'pp. 89–92',
  cam: 'P1 · Chapters 2–3 review', camPage: 'Pure Mathematics 1, pp. 56, 80', wb: 'Control paper B',
  objectives: [
    'Apply every idea of the quarter in one assessment.',
    'Choose the right tool without being told which section a question comes from.',
    'Build a concept map linking function, domain, range, property and transformation.',
    'Set a personal target for Quarter II.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Revision', 'Takrorlash', 'Повторение'],
    ['Concept map', 'Tushunchalar xaritasi', 'Карта понятий'],
    ['Summative assessment', 'Yakuniy baholash', 'Итоговое оценивание'],
    ['Criterion', 'Mezon', 'Критерий'],
    ['Target', 'Maqsad', 'Цель'],
    ['Self-assessment', 'O‘z-o‘zini baholash', 'Самооценка'],
    ['Command word', 'Topshiriq so‘zi', 'Командное слово'],
    ['Quarter', 'Chorak', 'Четверть']
  ],
  timing: [[3, 'Instructions'], [42, 'The paper'], [10, 'Answers on the board'], [20, 'Concept map in pairs'], [10, 'Targets for Quarter II'], [5, 'Homework']],
  sections: [
    {
      h: 'The paper — 30 marks, 42 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Domain and range of ${m('f(x) = ' + f('3', 'x − 2'))}</td><td class="m">3</td></tr>
        <tr><td>2</td><td>${m('f = 2x − 1, g = x²')}: find ${m('fg(x)')}, ${m('gf(x)')} and solve ${m('fg(x) = gf(x)')}</td><td class="m">5</td></tr>
        <tr><td>3</td><td>Find ${m('f⁻¹')} for ${m('f(x) = ' + f('x + 1', 'x − 2'))} and state its domain</td><td class="m">4</td></tr>
        <tr><td>4</td><td>Test ${m('x⁴ − x²')} and ${m('x³ + x')} for parity, showing ${m('f(−x)')}</td><td class="m">4</td></tr>
        <tr><td>5</td><td>Sign intervals of ${m('f(x) = x³ − 9x')}</td><td class="m">4</td></tr>
        <tr><td>6</td><td>Describe the transformation from ${m('y = x²')} to ${m('y = 2(x + 1)² − 5')}</td><td class="m">4</td></tr>
        <tr><td>7</td><td>A 48 m fence against a wall: find the greatest area, with the domain stated</td><td class="m">6</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Command words</div>
      <b>State</b> — no working needed. <b>Show that</b> — every line must be there.
      <b>Find</b> — working plus answer. <b>Hence</b> — you must use the previous part.</div>`
    },
    {
      h: 'The concept map',
      html: `<p>In pairs, one A3 sheet. Six boxes, and every link labelled with a sentence:</p>
      <ul>
        <li><b>mapping</b> → <b>function</b> — “exactly one output per input”</li>
        <li><b>function</b> → <b>domain and range</b> — “what may go in, what comes out”</li>
        <li><b>domain</b> → <b>one-to-one</b> — “restrict it and the function can be inverted”</li>
        <li><b>one-to-one</b> → <b>inverse</b> — “reflect in ${m('y = x')}”</li>
        <li><b>function</b> → <b>properties</b> — “zeros, sign, monotonic, parity, bounds”</li>
        <li><b>function</b> → <b>transformations</b> — “inside the bracket works backwards”</li>
      </ul>
      {{fig:inverseGraph:The single picture that ties four boxes of the map together.}}
      <p>Two links must be the pair's own, not from this list.</p>`
    },
    {
      h: 'Looking forward',
      html: `<p>Quarter II opens with rational and irrational equations. Everything in it depends on
      one habit built this quarter: <b>state the domain before you solve</b>. An irrational equation
      manufactures false roots precisely when the domain is ignored.</p>
      <div class="keybox"><div class="klabel">Write one target</div>
      One sentence, in the exercise book, dated. Not “work harder” — something checkable, such as
      “state the domain in every question, in writing, before I start solving”.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q3: find ' + m('f⁻¹') + ' for ' + m('f(x) = ' + f('x + 1', 'x − 2')) + '.',
      steps: [
        [m('y(x − 2) = x + 1'), 'Clear the fraction.'],
        [m('yx − 2y = x + 1'), ''],
        [m('x(y − 1) = 2y + 1'), 'Collect the ' + m('x') + ' terms.'],
        [m('x = ' + f('2y + 1', 'y − 1')), 'Swap the letters.']
      ],
      ans: m('f⁻¹(x) = ' + f('2x + 1', 'x − 1')) + ', domain ' + m('x ≠ 1')
    },
    {
      q: 'Model answer, Q7: 48 m of fence, three sides of a rectangle against a wall.',
      steps: [
        ['Let each of the two equal sides be ' + m('x') + ' m.', 'Third side ' + m('48 − 2x') + '.'],
        [m('A(x) = x(48 − 2x) = 48x − 2x²'), 'Domain ' + m('0 < x < 24') + '.'],
        [m('= −2(x − 12)² + 288'), ''],
        [m('x = 12') + ', other side ' + m('24') + '.', '']
      ],
      ans: m('288 m²') + ', a 12 m by 24 m pen'
    },
    {
      q: 'Model answer, Q5: sign intervals of ' + m('f(x) = x³ − 9x') + '.',
      steps: [
        [m('x(x − 3)(x + 3)'), ''],
        ['Zeros ' + m('−3, 0, 3') + '.', 'Four intervals.'],
        ['Test ' + m('−4, −1, 1, 4') + ': ' + m('−28, 8, −8, 28') + '.', '']
      ],
      ans: m('f > 0') + ' on ' + m('(−3, 0) ∪ (3, ∞)') + '; ' + m('f < 0') + ' on ' + m('(−∞, −3) ∪ (0, 3)')
    }
  ],
  modelNote: 'Run through the six boxes of the map with the class before the pairs start.',
  interactive: {
    type: 'quiz',
    title: 'The quarter in ten questions',
    hint: 'One question from each lesson block.',
    items: [
      { q: 'Domain of ' + m(f('3', 'x − 2')) + ':', a: [m('x ≠ 2'), m('x > 2'), m('x ≠ 3'), m('ℝ')], c: 0, why: 'The denominator vanishes at 2.' },
      { q: 'Range of ' + m(f('3', 'x − 2')) + ':', a: [m('y ≠ 0'), m('y ≠ 2'), m('y ≠ 3'), m('ℝ')], c: 0, why: 'A non-zero numerator over anything is never 0.' },
      { q: m('f = 2x − 1, g = x²') + '; ' + m('fg(x)') + ' is:', a: [m('2x² − 1'), m('(2x − 1)²'), m('4x² − 1'), m('2x² + 1')], c: 0, why: 'Square first, then double and subtract 1.' },
      { q: m('x⁴ − x²') + ' is:', a: ['even', 'odd', 'neither', 'both'], c: 0, why: 'Only even powers.' },
      { q: m('x³ + x') + ' is:', a: ['even', 'odd', 'neither', 'both'], c: 1, why: 'Only odd powers.' },
      { q: m('y = 2(x + 1)² − 5') + ' is ' + m('y = x²') + ':', a: ['left 1, stretch 2, down 5', 'right 1, stretch 2, down 5', 'left 1, stretch 2, up 5', 'left 2, stretch 1, down 5'], c: 0, why: 'Inside the bracket goes backwards.' },
      { q: 'The greatest area from 48 m against a wall is:', a: [m('144 m²'), m('288 m²'), m('576 m²'), m('192 m²')], c: 1, why: m('x = 12') + ' gives ' + m('12 × 24') + '.' },
      { q: 'A function has an inverse exactly when it is:', a: ['even', 'bounded', 'one-to-one', 'continuous'], c: 2, why: 'Each output must identify its input.' },
      { q: 'The zeros of ' + m('x³ − 9x') + ' are:', a: [m('0, 9'), m('0, ±3'), m('±9'), m('±3')], c: 1, why: m('x(x−3)(x+3)') + '.' },
      { q: m('f(x) = x²') + ' is decreasing on:', a: [m('x ≥ 0'), m('x ≤ 0'), m('ℝ'), 'nowhere'], c: 1, why: 'Left of the vertex.' }
    ]
  },
  quiz: [
    { q: '“Show that” means:', a: ['answer only', 'every line of working', 'a sketch', 'use a calculator'], c: 1, why: 'The reasoning is the mark.' },
    { q: 'Before solving an equation with a fraction you should:', a: ['multiply out', 'state the domain', 'square both sides', 'guess'], c: 1, why: 'Otherwise false roots survive.' },
    { q: 'The vertex of ' + m('y = 2(x + 1)² − 5') + ' is:', a: [m('(1, −5)'), m('(−1, −5)'), m('(−1, 5)'), m('(2, −5)')], c: 1, why: 'Left 1, down 5.' },
    { q: 'A useful personal target is:', a: ['“work harder”', '“be better at algebra”', '“state the domain in writing every time”', '“get 100%”'], c: 2, why: 'It is checkable.' }
  ],
  practice: {
    easy: [
      ['Domain of ' + m(f('3', 'x − 2')), m('x ≠ 2')],
      ['Zeros of ' + m('x³ − 9x'), m('0, ±3')],
      ['Is ' + m('x⁴') + ' even or odd?', 'even'],
      ['Inverse of ' + m('f(x) = x + 9'), m('x − 9')],
      ['Vertex of ' + m('y = (x + 1)² − 5'), m('(−1, −5)')],
      [m('f = 2x, g = x + 1') + '; ' + m('fg(2)'), m('6')],
      ['Range of ' + m('y = x² + 2'), m('y ≥ 2')]
    ],
    med: [
      [m('f = 2x − 1, g = x²') + '; solve ' + m('fg(x) = gf(x)'), m('x = 0') + ' or ' + m('x = 1')],
      ['Inverse of ' + m(f('x + 1', 'x − 2')), m(f('2x + 1', 'x − 1'))],
      ['Sign intervals of ' + m('x³ − 9x'), m('> 0') + ' on ' + m('(−3,0) ∪ (3,∞)')],
      ['Describe ' + m('y = 2(x + 1)² − 5') + ' from ' + m('y = x²'), 'left 1, stretch 2, down 5'],
      ['48 m against a wall — greatest area', m('288 m²')],
      ['Range of ' + m(f('3', 'x − 2')), m('y ≠ 0')],
      ['Parity of ' + m('x³ + x'), 'odd']
    ],
    hard: [
      ['Domain of ' + m(f(sr('x + 2'), 'x² − 9')), m('x ≥ −2') + ', ' + m('x ≠ 3')],
      [m('f = ' + sr('x') + ', g = x − 4') + '; find ' + m('fg') + ' and ' + m('gf') + ' with domains', m(sr('x − 4')) + ' on ' + m('x ≥ 4') + '; ' + m(sr('x') + ' − 4') + ' on ' + m('x ≥ 0')],
      ['Restrict ' + m('f(x) = x² + 6x') + ' to invert it, then find ' + m('f⁻¹'), m('x ≥ −3') + '; ' + m('f⁻¹(x) = −3 + ' + sr('x + 9'))],
      ['Show that ' + m('f(x) = ' + f('x', 'x² + 1')) + ' is odd and bounded', m('f(−x) = −f(x)') + '; ' + m('|f| ≤ 0.5')],
      ['60 m of fence, two equal pens side by side against a wall. Maximise the total area', m('x = 10') + ', area ' + m('300 m²')],
      ['Find ' + m('a, b') + ' with ' + m('y = a(x − 2)² + b') + ' through ' + m('(0, 7)') + ' and ' + m('(2, −1)'), m('a = 2, b = −1')],
      ['Explain why ' + m('f⁻¹') + ' has the domain of the range of ' + m('f'), 'Inputs and outputs exchange roles']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Bring the concept map to the first lesson of Quarter II.',
  homework: [
    'Rewrite every control-work question that lost a mark, in full.',
    'Finish the concept map, including the two links your pair invented.',
    'Write your target for Quarter II in one checkable sentence, and date it.',
    'Domain and range of ' + m('f(x) = ' + sr('9 − x²')) + ', with a sketch.'
  ]
});

/* ===================== QUARTER II (21 hours) ===================== */

/* ============================== 15 ============================== */
G10_ALG.push({
  id: 'a10-15', stream: 'alg', grade: 10, quarter: 2, lessons: '28–29', hours: 2,
  title: 'Rational equations',
  subtitle: 'Clear the denominators, solve, then throw away the roots the original equation never allowed.',
  uz: 'Algebra 10, §2.1', uzPage: 'pp. 94–103',
  cam: 'P1 · 1.7 (extension)', camPage: 'Pure Mathematics 1, pp. 18–23', wb: 'P1 Exercise 1F',
  objectives: [
    'State the domain of a rational equation before solving it.',
    'Solve an equation by finding the lowest common denominator.',
    'Identify and reject extraneous roots.',
    'Solve equations that become quadratic after a substitution.'
  ],
  terms: [
    ['Rational equation', 'Ratsional tenglama', 'Рациональное уравнение'],
    ['Denominator', 'Maxraj', 'Знаменатель'],
    ['Lowest common denominator', 'Eng kichik umumiy maxraj', 'Наименьший общий знаменатель'],
    ['Extraneous root', 'Chet ildiz', 'Посторонний корень'],
    ['Domain restriction', 'Aniqlanish sohasi cheklovi', 'Ограничение области определения'],
    ['Clearing fractions', 'Kasrlardan qutulish', 'Освобождение от дробей'],
    ['Equivalent equations', 'Teng kuchli tenglamalar', 'Равносильные уравнения'],
    ['Check (substitution)', 'Tekshirish', 'Проверка'],
    ['Substitution variable', 'Yordamchi o‘zgaruvchi', 'Вспомогательная переменная']
  ],
  timing: [[8, 'Why a check is compulsory here'], [16, 'The method'], [16, 'Extraneous roots'], [18, 'Disguised quadratics'], [22, 'Practice'], [10, 'Homework']],
  sections: [
    {
      h: 'The domain comes first',
      html: `<div class="keybox"><div class="klabel">Write it before you solve</div>
      Every denominator gives a forbidden value. Write ${m('x ≠ …')} on the first line, before any
      algebra. It is not a formality: it is the only thing that will tell you which of your final
      answers is real.</div>
      <p>For ${m(f('3', 'x − 2') + ' + ' + f('1', 'x') + ' = 2')} the domain is ${m('x ≠ 0')} and
      ${m('x ≠ 2')}.</p>
      {{fig:numberLineExcluded:The two excluded points, marked as open circles before any solving begins.}}`
    },
    {
      h: 'The method',
      html: `<ol>
        <li>State the domain.</li>
        <li>Factorise every denominator, and find the lowest common denominator.</li>
        <li>Multiply every term by the LCD, and cancel.</li>
        <li>Solve the polynomial equation that results.</li>
        <li>Reject any root that is outside the domain.</li>
      </ol>
      ${eq(m(f('3', 'x − 2') + ' + ' + f('1', 'x') + ' = 2  ⇒  3x + (x − 2) = 2x(x − 2)'), true)}
      ${eq(m('4x − 2 = 2x² − 4x  ⇒  2x² − 8x + 2 = 0  ⇒  x² − 4x + 1 = 0  ⇒  x = 2 ± ' + sr('3')), false)}
      <p>Both roots are allowed, so both are answers.</p>
      <div class="warn"><span class="wl">Multiply <b>every</b> term</span>
      A term with no fraction is multiplied by the LCD too. Forgetting the right-hand side is the
      commonest arithmetic error in the topic.</div>`
    },
    {
      h: 'Extraneous roots — where they come from',
      html: `<p>Multiplying by ${m('x − 3')} is only reversible when ${m('x ≠ 3')}. If it happens to be
      zero, you have multiplied both sides by zero, and the new equation is <b>not equivalent</b> to the
      old one — it has extra solutions the original never had.</p>
      ${eq(m(f('x²', 'x − 3') + ' = ' + f('9', 'x − 3') + '  ⇒  x² = 9  ⇒  x = ±3'), true)}
      <p>But ${m('x = 3')} is outside the domain. The only solution is ${m('x = −3')}.</p>
      <div class="keybox"><div class="klabel">The check is part of the answer</div>
      Never write a final answer without testing it against the domain line you wrote at the start.
      Examiners award a mark for the rejection, and take one for its absence.</div>`
    },
    {
      h: 'Disguised quadratics',
      html: `<p>When the same expression appears twice, name it and the equation becomes quadratic:</p>
      ${eq(m('x² + ' + f('1', 'x²') + ' = 2.5  ,  let  t = x + ' + f('1', 'x')), true)}
      <p>Then ${m('t² = x² + 2 + ' + f('1', 'x²'))}, so the equation reads ${m('t² − 2 = 2.5')},
      giving ${m('t = ±1.5')} — two much easier equations to finish.</p>
      <p>The other standard shape is ${m('' + f('x', 'x + 1') + ' + ' + f('x + 1', 'x') + ' = 2.5')}:
      set ${m('t = ' + f('x', 'x + 1'))} and it becomes ${m('t + ' + f('1', 't') + ' = 2.5')}.</p>`
    }
  ],
  examples: [
    {
      q: 'Solve ' + m(f('2', 'x') + ' + ' + f('3', 'x + 1') + ' = 2') + '.',
      steps: [
        ['Domain ' + m('x ≠ 0, −1') + '.', ''],
        ['LCD ' + m('x(x + 1)') + '.', m('2(x + 1) + 3x = 2x(x + 1)')],
        [m('5x + 2 = 2x² + 2x'), ''],
        [m('2x² − 3x − 2 = 0 ⇒ (2x + 1)(x − 2) = 0'), 'Both allowed.']
      ],
      ans: m('x = 2') + ' or ' + m('x = −0.5')
    },
    {
      q: 'Solve ' + m(f('x', 'x − 1') + ' − ' + f('1', 'x − 1') + ' = 3') + '.',
      steps: [
        ['Domain ' + m('x ≠ 1') + '.', ''],
        ['Same denominator: ' + m(f('x − 1', 'x − 1') + ' = 1') + '.', 'For every allowed ' + m('x') + '.'],
        [m('1 = 3'), 'A contradiction.']
      ],
      ans: 'No solution'
    },
    {
      q: 'Solve ' + m(f('x²', 'x − 2') + ' = ' + f('4', 'x − 2')) + '.',
      steps: [
        ['Domain ' + m('x ≠ 2') + '.', ''],
        [m('x² = 4 ⇒ x = ±2'), ''],
        [m('x = 2') + ' is excluded.', '']
      ],
      ans: m('x = −2') + ' only'
    }
  ],
  modelNote: 'Show the graph of each side and let the class see where the removed point sits.',
  interactive: {
    type: 'quiz',
    title: 'Domain first',
    hint: 'Look at the denominators before anything else.',
    items: [
      { q: 'Domain of ' + m(f('1', 'x − 5') + ' = 2') + ':', a: [m('x ≠ 0'), m('x ≠ 5'), m('x > 5'), m('ℝ')], c: 1, why: 'The denominator vanishes at 5.' },
      { q: 'Solving ' + m(f('x²', 'x − 3') + ' = ' + f('9', 'x − 3')) + ' gives:', a: [m('x = ±3'), m('x = 3'), m('x = −3'), 'no solution'], c: 2, why: m('x = 3') + ' is excluded.' },
      { q: 'An extraneous root appears because:', a: ['of arithmetic error', 'we multiplied by something that can be zero', 'the equation is wrong', 'it never does'], c: 1, why: 'That step is not reversible.' },
      { q: 'Solve ' + m(f('2', 'x') + ' = 1') + ':', a: [m('x = 2'), m('x = 0.5'), m('x = 0'), 'no solution'], c: 0, why: m('2 = x') + '.' },
      { q: 'For ' + m(f('1', 'x') + ' + ' + f('1', 'x − 1') + ' = 5') + ' the LCD is:', a: [m('x'), m('x − 1'), m('x(x − 1)'), m('x²')], c: 2, why: 'The product of the distinct factors.' }
    ]
  },
  quiz: [
    { q: 'The first line of a rational equation should be:', a: ['the LCD', 'the domain', 'the answer', 'a graph'], c: 1, why: 'It decides which roots survive.' },
    { q: 'Multiplying by the LCD may introduce:', a: ['lost roots', 'extraneous roots', 'nothing', 'fractions'], c: 1, why: 'The step is not always reversible.' },
    { q: m(f('x − 1', 'x − 1')) + ' equals ' + m('1') + ':', a: ['always', 'for ' + m('x ≠ 1'), 'never', 'only at ' + m('x = 1')], c: 1, why: 'It is undefined at 1.' },
    { q: 'For ' + m('x² + ' + f('1', 'x²') + ' = 2.5') + ' a good substitution is:', a: [m('t = x²'), m('t = x + ' + f('1', 'x')), m('t = x − 1'), 'none'], c: 1, why: m('t² = x² + 2 + ' + f('1', 'x²')) + '.' }
  ],
  practice: {
    easy: [
      ['Domain of ' + m(f('1', 'x − 4') + ' = 3'), m('x ≠ 4')],
      ['Solve ' + m(f('6', 'x') + ' = 2'), m('x = 3')],
      ['Solve ' + m(f('1', 'x + 1') + ' = 1'), m('x = 0')],
      ['Solve ' + m(f('x', '2') + ' = ' + f('3', 'x')), m('x = ±' + sr('6'))],
      ['Domain of ' + m(f('1', 'x') + ' + ' + f('1', 'x − 2')), m('x ≠ 0, 2')],
      ['LCD of ' + m(f('1', 'x') + ' and ' + f('1', 'x + 3')), m('x(x + 3)')],
      ['Solve ' + m(f('4', 'x − 1') + ' = 2'), m('x = 3')]
    ],
    med: [
      ['Solve ' + m(f('2', 'x') + ' + ' + f('3', 'x + 1') + ' = 2'), m('x = 2, −0.5')],
      ['Solve ' + m(f('x', 'x + 2') + ' = ' + f('3', 'x')), m('x = 6') + ' or ' + m('x = −1')],
      ['Solve ' + m(f('1', 'x − 1') + ' + ' + f('1', 'x + 1') + ' = 1'), m('x = 1 ± ' + sr('3'))],
      ['Solve ' + m(f('x²', 'x − 2') + ' = ' + f('4', 'x − 2')), m('x = −2')],
      ['Solve ' + m(f('3', 'x') + ' − ' + f('2', 'x²') + ' = 1'), m('x = 1, 2')],
      ['Solve ' + m(f('x + 1', 'x − 1') + ' = ' + f('x − 1', 'x + 1')), m('x = 0')],
      ['Solve ' + m(f('x', 'x − 3') + ' − ' + f('3', 'x − 3') + ' = 2'), 'no solution']
    ],
    hard: [
      ['Solve ' + m('x² + ' + f('1', 'x²') + ' = 2.5'), m('x = ±2, ±0.5')],
      ['Solve ' + m(f('x', 'x + 1') + ' + ' + f('x + 1', 'x') + ' = 2.5'), m('x = 1, −2')],
      ['Solve ' + m(f('1', 'x² − 1') + ' + ' + f('1', 'x − 1') + ' = 1'), m('x = 2') + ' or ' + m('x = −1') + ' rejected'],
      ['Solve ' + m(f('2x', 'x² − 4') + ' + ' + f('1', 'x − 2') + ' = ' + f('3', 'x + 2')), m('x = −8')],
      ['Find ' + m('k') + ' so ' + m(f('x', 'x − 2') + ' = k') + ' has no solution', m('k = 1')],
      ['Solve ' + m(f('x² − 4', 'x² − 2x') + ' = 1'), 'no solution'],
      ['Solve ' + m('(x + ' + f('1', 'x') + ')² − 4(x + ' + f('1', 'x') + ') + 3 = 0'), m('x = 1') + ' (from ' + m('t = 3') + ': ' + m(f('3 ± ' + sr('5'), '2')) + ')']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every solution must open with the domain and close with the check.',
  homework: [
    'Solve ' + m(f('3', 'x') + ' + ' + f('2', 'x − 1') + ' = 3') + '.',
    'Solve ' + m(f('x', 'x − 4') + ' = ' + f('2', 'x + 1')) + '.',
    'Solve ' + m(f('x²', 'x + 3') + ' = ' + f('9', 'x + 3')) + ' and say which root is rejected and why.',
    'Solve ' + m(f('1', 'x') + ' + ' + f('1', 'x + 2') + ' = ' + f('3', '4')) + '.',
    'Solve ' + m('x² + ' + f('4', 'x²') + ' = 5') + ' using a substitution.'
  ]
});

/* ============================== 16 ============================== */
G10_ALG.push({
  id: 'a10-16', stream: 'alg', grade: 10, quarter: 2, lessons: '30–31', hours: 2,
  title: 'Systems of rational equations',
  subtitle: 'Two rational equations at once — substitution, symmetric sums, and the domain that must survive both.',
  uz: 'Algebra 10, §2.2', uzPage: 'pp. 104–113',
  cam: 'P1 · 1.7', camPage: 'Pure Mathematics 1, pp. 18–23', wb: 'P1 Exercise 1F',
  objectives: [
    'Solve a system containing rational equations by substitution.',
    'Use the sum-and-product substitution for symmetric systems.',
    'State the combined domain of a system.',
    'Interpret the solutions as points of intersection.'
  ],
  terms: [
    ['System of equations', 'Tenglamalar sistemasi', 'Система уравнений'],
    ['Substitution method', 'O‘rniga qo‘yish usuli', 'Метод подстановки'],
    ['Symmetric system', 'Simmetrik sistema', 'Симметричная система'],
    ['Sum and product', 'Yig‘indi va ko‘paytma', 'Сумма и произведение'],
    ['Combined domain', 'Umumiy aniqlanish sohasi', 'Общая область определения'],
    ['Point of intersection', 'Kesishish nuqtasi', 'Точка пересечения'],
    ['Consistent system', 'Birgalikdagi sistema', 'Совместная система'],
    ['Inconsistent system', 'Birgalikda bo‘lmagan sistema', 'Несовместная система']
  ],
  timing: [[8, 'What is new'], [20, 'Substitution'], [22, 'Symmetric systems'], [16, 'Graphical meaning'], [20, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'The combined domain',
      html: `<div class="keybox"><div class="klabel">Both equations must accept the answer</div>
      A pair ${m('(x, y)')} solves the system only if it lies in the domain of <b>both</b> equations.
      So the excluded values of each are excluded from the whole system.</div>
      <p>Everything else is the ordinary technique of Grade 9 — eliminate a variable, solve, substitute
      back — with the extra step of clearing denominators first.</p>`
    },
    {
      h: 'Substitution',
      html: `<p>When one equation gives a variable cheaply, use it:</p>
      ${eq(m('x + y = 5   and   ' + f('1', 'x') + ' + ' + f('1', 'y') + ' = ' + f('5', '6')), true)}
      <p>The second equation is ${m(f('x + y', 'xy') + ' = ' + f('5', '6'))}, so ${m(f('5', 'xy') + ' = ' + f('5', '6'))}
      and ${m('xy = 6')}. With ${m('x + y = 5')} the numbers are the roots of ${m('t² − 5t + 6 = 0')}.</p>
      ${eq(m('(x, y) = (2, 3)  or  (3, 2)'), false)}
      <div class="warn"><span class="wl">Two ordered pairs, not one</span>
      A symmetric system almost always gives both orders. Writing only one loses half the answer.</div>`
    },
    {
      h: 'Symmetric systems',
      html: `<p>A system is <b>symmetric</b> when swapping ${m('x')} and ${m('y')} leaves it unchanged.
      Every such system can be rewritten in ${m('s = x + y')} and ${m('p = xy')}:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>In ${m('s')} and ${m('p')}</th></tr></thead>
      <tbody>
        <tr><td class="m">x² + y²</td><td class="m">s² − 2p</td></tr>
        <tr><td class="m">${f('1', 'x')} + ${f('1', 'y')}</td><td class="m">${f('s', 'p')}</td></tr>
        <tr><td class="m">x³ + y³</td><td class="m">s³ − 3ps</td></tr>
        <tr><td class="m">(x − y)²</td><td class="m">s² − 4p</td></tr>
      </tbody></table></div>
      <p>Solve for ${m('s')} and ${m('p')}, then recover ${m('x')} and ${m('y')} as the roots of
      ${m('t² − st + p = 0')}.</p>`
    },
    {
      h: 'What the solutions mean',
      html: `<p>Each equation is a curve. The solutions of the system are the points where the curves
      cross — so the number of solutions is the number of intersections.</p>
      {{fig:hyperbola:xy = 6 is a hyperbola; x + y = 5 is a line. Two crossings, two solutions.}}
      <p>A system with no solution is a line missing its curve entirely; a system with one solution is
      a tangency.</p>`
    }
  ],
  examples: [
    {
      q: 'Solve ' + m('x + y = 7') + ', ' + m(f('1', 'x') + ' + ' + f('1', 'y') + ' = ' + f('7', '12')) + '.',
      steps: [
        [m(f('x + y', 'xy') + ' = ' + f('7', '12')), ''],
        [m(f('7', 'xy') + ' = ' + f('7', '12') + ' ⇒ xy = 12'), ''],
        [m('t² − 7t + 12 = 0'), ''],
        [m('t = 3, 4'), '']
      ],
      ans: m('(3, 4)') + ' and ' + m('(4, 3)')
    },
    {
      q: 'Solve ' + m('xy = 12') + ', ' + m('x² + y² = 25') + '.',
      steps: [
        [m('s² − 2p = 25') + ' with ' + m('p = 12') + '.', m('s² = 49')],
        [m('s = ±7'), ''],
        [m('s = 7') + ': ' + m('t² − 7t + 12 = 0 ⇒ 3, 4') + '.', ''],
        [m('s = −7') + ': ' + m('t² + 7t + 12 = 0 ⇒ −3, −4') + '.', '']
      ],
      ans: m('(3,4), (4,3), (−3,−4), (−4,−3)')
    },
    {
      q: 'Solve ' + m(f('2', 'x') + ' − ' + f('1', 'y') + ' = 1') + ', ' + m(f('1', 'x') + ' + ' + f('2', 'y') + ' = 3') + '.',
      steps: [
        ['Let ' + m('u = ' + f('1', 'x')) + ', ' + m('v = ' + f('1', 'y')) + '.', m('2u − v = 1, u + 2v = 3')],
        ['Solve: ' + m('u = 1, v = 1') + '.', ''],
        [m('x = 1, y = 1'), '']
      ],
      ans: m('(1, 1)')
    }
  ],
  modelNote: 'Plot both curves and count the crossings before solving.',
  interactive: {
    type: 'hyperbola',
    title: 'A line meeting a hyperbola',
    hint: 'Move the line and count the intersections.'
  },
  quiz: [
    { q: 'A symmetric system usually gives:', a: ['one pair', 'two ordered pairs', 'no pairs', 'infinitely many'], c: 1, why: 'Swapping ' + m('x') + ' and ' + m('y') + ' gives another solution.' },
    { q: m('x² + y²') + ' in terms of ' + m('s, p') + ' is:', a: [m('s² + 2p'), m('s² − 2p'), m('s² − p'), m('2s − p')], c: 1, why: 'Expand ' + m('(x + y)²') + '.' },
    { q: 'For ' + m(f('1', 'x') + ' + ' + f('1', 'y')) + ' a good substitution is:', a: [m('u = x, v = y'), m('u = ' + f('1', 'x') + ', v = ' + f('1', 'y')), m('u = xy'), 'none'], c: 1, why: 'It linearises the system.' },
    { q: 'The solutions of a system are:', a: ['the roots of one equation', 'the points where the curves meet', 'the domains', 'the asymptotes'], c: 1, why: 'Both equations hold there.' }
  ],
  practice: {
    easy: [
      ['Solve ' + m('x + y = 5, xy = 6'), m('(2,3), (3,2)')],
      ['Solve ' + m('x + y = 8, xy = 15'), m('(3,5), (5,3)')],
      ['Solve ' + m('x − y = 1, xy = 6'), m('(3,2), (−2,−3)')],
      ['Write ' + m('x² + y²') + ' with ' + m('s, p'), m('s² − 2p')],
      ['Write ' + m(f('1', 'x') + ' + ' + f('1', 'y')) + ' with ' + m('s, p'), m(f('s', 'p'))],
      ['Domain of ' + m(f('1', 'x') + ' + ' + f('1', 'y') + ' = 1'), m('x ≠ 0, y ≠ 0')],
      ['Solve ' + m('xy = 4, x = y'), m('(2,2), (−2,−2)')]
    ],
    med: [
      ['Solve ' + m('x + y = 7, ' + f('1', 'x') + ' + ' + f('1', 'y') + ' = ' + f('7', '12')), m('(3,4), (4,3)')],
      ['Solve ' + m('xy = 12, x² + y² = 25'), m('(±3,±4)') + ' matching signs'],
      ['Solve ' + m(f('2', 'x') + ' − ' + f('1', 'y') + ' = 1, ' + f('1', 'x') + ' + ' + f('2', 'y') + ' = 3'), m('(1, 1)')],
      ['Solve ' + m('x + y = 6, x² + y² = 20'), m('(2,4), (4,2)')],
      ['Solve ' + m('x − y = 2, ' + f('1', 'x') + ' − ' + f('1', 'y') + ' = −' + f('1', '4')), m('(4,2)') + ' or ' + m('(−2,−4)')],
      ['Solve ' + m('xy = 6, x + y = −5'), m('(−2,−3), (−3,−2)')],
      ['How many solutions has ' + m('x + y = 1, xy = 1') + '?', 'none — ' + m('D < 0')]
    ],
    hard: [
      ['Solve ' + m('x + y = 4, x³ + y³ = 28'), m('(1,3), (3,1)')],
      ['Solve ' + m('x² + y² = 13, ' + f('1', 'x') + ' + ' + f('1', 'y') + ' = ' + f('5', '6')), m('(2,3), (3,2)')],
      ['Solve ' + m(f('x', 'y') + ' + ' + f('y', 'x') + ' = ' + f('5', '2') + ', x + y = 6'), m('(2,4), (4,2)')],
      ['Solve ' + m('x + y + xy = 11, x² y + x y² = 30'), m('(2,3), (3,2)') + ' or ' + m('s = 6, p = 5')],
      ['Find ' + m('k') + ' so ' + m('x + y = 4, xy = k') + ' has exactly one solution', m('k = 4')],
      ['Solve ' + m(f('1', 'x') + ' + ' + f('1', 'y') + ' = ' + f('1', '2') + ', ' + f('1', 'x²') + ' + ' + f('1', 'y²') + ' = ' + f('5', '36')), m('(6,3), (3,6)')],
      ['Interpret ' + m('x + y = 5, xy = 6') + ' graphically', 'A line meeting a hyperbola in two points']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write both ordered pairs whenever the system is symmetric.',
  homework: [
    'Solve ' + m('x + y = 9') + ', ' + m('xy = 20') + '.',
    'Solve ' + m('x + y = 5') + ', ' + m(f('1', 'x') + ' + ' + f('1', 'y') + ' = ' + f('5', '6')) + '.',
    'Solve ' + m('x² + y² = 41') + ', ' + m('xy = 20') + '.',
    'Solve ' + m(f('3', 'x') + ' + ' + f('2', 'y') + ' = 4') + ', ' + m(f('1', 'x') + ' − ' + f('1', 'y') + ' = 1') + '.',
    'Explain, with a sketch, why ' + m('x + y = 1') + ' and ' + m('xy = 1') + ' have no common solution.'
  ]
});

/* ============================== 17 ============================== */
G10_ALG.push({
  id: 'a10-17', stream: 'alg', grade: 10, quarter: 2, lessons: '32–34', hours: 3,
  title: 'Rational inequalities',
  subtitle: 'Never cross-multiply. Move everything to one side, combine into one fraction, and let the sign chart do the work.',
  uz: 'Algebra 10, §2.3', uzPage: 'pp. 114–128',
  cam: 'P1 · 1.2 (extension)', camPage: 'Pure Mathematics 1, pp. 6–11', wb: 'P1 Exercise 1C',
  objectives: [
    'Explain why multiplying an inequality by a variable expression is forbidden.',
    'Reduce a rational inequality to a single fraction compared with zero.',
    'Build and read a sign chart, including the excluded points.',
    'Write the answer in interval notation.'
  ],
  terms: [
    ['Rational inequality', 'Ratsional tengsizlik', 'Рациональное неравенство'],
    ['Sign chart (interval method)', 'Oraliqlar usuli', 'Метод интервалов'],
    ['Critical value', 'Kritik qiymat', 'Критическое значение'],
    ['Excluded point', 'Chetlatilgan nuqta', 'Выколотая точка'],
    ['Closed circle', 'To‘ldirilgan nuqta', 'Закрашенная точка'],
    ['Open circle', 'Bo‘sh nuqta', 'Выколотая точка'],
    ['Interval notation', 'Oraliq belgilanishi', 'Интервальная запись'],
    ['Union of intervals', 'Oraliqlar birlashmasi', 'Объединение промежутков'],
    ['Sign of a factor', 'Ko‘paytuvchi ishorasi', 'Знак множителя'],
    ['Multiplicity', 'Karralilik', 'Кратность']
  ],
  timing: [[14, 'The forbidden step'], [22, 'One fraction, compared with zero'], [26, 'The sign chart'], [22, 'Repeated factors'], [40, 'Practice'], [11, 'Homework']],
  sections: [
    {
      h: 'The one thing you may not do',
      html: `<div class="warn"><span class="wl">Never multiply an inequality by ${m('x − 3')}</span>
      You do not know its sign. If it is negative the inequality reverses; if it is zero it collapses.
      ${m(f('1', 'x') + ' > 1')} does <b>not</b> give ${m('1 > x')} — try ${m('x = −1')}:
      ${m('−1 > 1')} is false, but ${m('1 > −1')} is true.</div>
      <p>Multiplying by a <b>positive number</b> is safe. Multiplying by an expression whose sign you do
      not know is not, and there is no way to repair it afterwards.</p>`
    },
    {
      h: 'The method',
      html: `<div class="keybox"><div class="klabel">Four steps, always</div>
      <b>1</b> Move everything to one side, so the other side is ${m('0')}.
      <b>2</b> Combine into a single fraction and factorise top and bottom.
      <b>3</b> Mark every zero of the numerator and of the denominator on a number line.
      <b>4</b> Test the sign in each interval and read the answer off.</div>
      ${eq(m(f('1', 'x') + ' > 1  ⇒  ' + f('1', 'x') + ' − 1 > 0  ⇒  ' + f('1 − x', 'x') + ' > 0'), true)}
      <p>Critical values ${m('0')} and ${m('1')}. Testing ${m('−1, 0.5, 2')} gives ${m('−, +, −')},
      so the answer is ${m('0 < x < 1')}.</p>
      {{fig:quadSignChart:The critical values cut the line into intervals. One test point settles each.}}`
    },
    {
      h: 'Open or closed?',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Critical value from</th><th>Inequality</th><th>Endpoint</th></tr></thead>
      <tbody>
        <tr><td>numerator</td><td class="m">≤ or ≥</td><td>included — closed circle</td></tr>
        <tr><td>numerator</td><td class="m">&lt; or &gt;</td><td>excluded — open circle</td></tr>
        <tr><td>denominator</td><td>any</td><td><b>always</b> excluded</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A denominator zero is never included</span>
      Even with ${m('≥')}. The expression has no value there at all, so it cannot satisfy anything.</div>`
    },
    {
      h: 'Repeated factors',
      html: `<p>The sign alternates as you cross a simple zero. It does <b>not</b> alternate at a
      repeated factor of even order — the graph touches the axis and turns back.</p>
      ${eq(m(f('(x − 1)²(x + 2)', 'x − 3') + ' ≥ 0'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">x</th><th class="m">&lt; −2</th><th class="m">−2</th><th class="m">(−2,1)</th><th class="m">1</th><th class="m">(1,3)</th><th class="m">3</th><th class="m">&gt; 3</th></tr></thead>
      <tbody>
        <tr><td>sign</td><td class="m">+</td><td class="m">0</td><td class="m">−</td><td class="m">0</td><td class="m">−</td><td>×</td><td class="m">+</td></tr>
      </tbody></table></div>
      <p>Answer: ${m('x ≤ −2')}, or ${m('x = 1')}, or ${m('x > 3')}. The isolated point ${m('1')} is part
      of the solution because the numerator is zero there and ${m('≥')} allows it.</p>
      <div class="keybox"><div class="klabel">A quick rule</div>
      Start at the far right, where every factor is positive, and count the sign changes leftwards.
      A factor of odd power changes the sign; a factor of even power does not.</div>`
    }
  ],
  examples: [
    {
      q: 'Solve ' + m(f('x − 2', 'x + 3') + ' < 0') + '.',
      steps: [
        ['Already one fraction against zero.', ''],
        ['Critical values ' + m('2') + ' and ' + m('−3') + '.', ''],
        ['Test ' + m('−4, 0, 3') + ': ' + m('+, −, +') + '.', ''],
        ['Both ends open.', '']
      ],
      ans: m('−3 < x < 2')
    },
    {
      q: 'Solve ' + m(f('2', 'x − 1') + ' ≤ 3') + '.',
      steps: [
        [m(f('2', 'x − 1') + ' − 3 ≤ 0'), ''],
        [m(f('2 − 3(x − 1)', 'x − 1') + ' = ' + f('5 − 3x', 'x − 1') + ' ≤ 0'), ''],
        ['Critical ' + m('x = ' + f('5', '3')) + ' (closed), ' + m('x = 1') + ' (open).', ''],
        ['Test ' + m('0, 1.2, 2') + ': ' + m('−, +, −') + '.', '']
      ],
      ans: m('x < 1') + ' or ' + m('x ≥ ' + f('5', '3'))
    },
    {
      q: 'Solve ' + m(f('(x + 1)(x − 4)', 'x²') + ' > 0') + '.',
      steps: [
        ['Critical ' + m('−1, 0, 4') + '.', m('x = 0') + ' is a double root of the denominator.'],
        ['Signs: ' + m('+, −, −, +') + ' across the four intervals.', m('x²') + ' never changes sign.'],
        ['Ends all open.', '']
      ],
      ans: m('x < −1') + ' or ' + m('x > 4')
    }
  ],
  modelNote: 'Draw the number line first, then fill in the signs interval by interval.',
  interactive: {
    type: 'inequalityLine',
    title: 'Reading a sign chart',
    hint: 'Move the critical values and watch the solution set change.'
  },
  quiz: [
    { q: m(f('1', 'x') + ' > 1') + ' gives:', a: [m('x < 1'), m('0 < x < 1'), m('x > 1'), m('x > 0')], c: 1, why: 'Cross-multiplying is forbidden.' },
    { q: 'A zero of the denominator is:', a: ['always included', 'always excluded', 'included if ' + m('≥'), 'sometimes'], c: 1, why: 'The expression is undefined there.' },
    { q: 'Crossing a factor of even power the sign:', a: ['changes', 'does not change', 'becomes zero', 'is undefined'], c: 1, why: 'The graph touches and turns.' },
    { q: m(f('x − 2', 'x + 3') + ' < 0') + ' gives:', a: [m('x < −3'), m('−3 < x < 2'), m('x > 2'), m('x < 2')], c: 1, why: 'Between the critical values.' },
    { q: 'The first step of a rational inequality is:', a: ['cross-multiply', 'get zero on one side', 'square it', 'take reciprocals'], c: 1, why: 'Then a single fraction can be signed.' }
  ],
  practice: {
    easy: [
      ['Solve ' + m(f('1', 'x') + ' > 0'), m('x > 0')],
      ['Solve ' + m(f('1', 'x') + ' < 0'), m('x < 0')],
      ['Solve ' + m(f('x', 'x − 1') + ' > 0'), m('x < 0') + ' or ' + m('x > 1')],
      ['Solve ' + m(f('x − 3', 'x + 1') + ' < 0'), m('−1 < x < 3')],
      ['Solve ' + m('(x − 1)(x + 2) > 0'), m('x < −2') + ' or ' + m('x > 1')],
      ['Is ' + m('x = 2') + ' allowed in ' + m(f('1', 'x − 2') + ' ≥ 0') + '?', 'no'],
      ['Solve ' + m(f('2', 'x') + ' ≥ 0'), m('x > 0')]
    ],
    med: [
      ['Solve ' + m(f('1', 'x') + ' > 1'), m('0 < x < 1')],
      ['Solve ' + m(f('2', 'x − 1') + ' ≤ 3'), m('x < 1') + ' or ' + m('x ≥ ' + f('5', '3'))],
      ['Solve ' + m(f('x + 2', 'x − 3') + ' ≥ 0'), m('x ≤ −2') + ' or ' + m('x > 3')],
      ['Solve ' + m(f('x', 'x² − 4') + ' > 0'), m('−2 < x < 0') + ' or ' + m('x > 2')],
      ['Solve ' + m(f('(x + 1)(x − 4)', 'x²') + ' > 0'), m('x < −1') + ' or ' + m('x > 4')],
      ['Solve ' + m(f('3', 'x + 2') + ' < 1'), m('x < −2') + ' or ' + m('x > 1')],
      ['Solve ' + m(f('x − 1', 'x + 1') + ' ≤ 2'), m('x < −1') + ' or ' + m('x ≥ −3') + ' → ' + m('x ≤ −3') + ' or ' + m('x > −1')]
    ],
    hard: [
      ['Solve ' + m(f('(x − 1)²(x + 2)', 'x − 3') + ' ≥ 0'), m('x ≤ −2') + ', ' + m('x = 1') + ', or ' + m('x > 3')],
      ['Solve ' + m(f('x² − 5x + 6', 'x² − 4') + ' ≤ 0'), m('−2 < x ≤ 2') + ' excluding 2 → ' + m('−2 < x < 2') + ' or ' + m('x = 3')],
      ['Solve ' + m(f('1', 'x − 1') + ' > ' + f('1', 'x + 1')), m('x > 1') + ' or ' + m('−1 < x') + ' → ' + m('−1 < x < 1') + ' fails; ' + m('x > 1') + ' or ' + m('x < −1')],
      ['Solve ' + m(f('x', 'x − 2') + ' ≥ ' + f('3', 'x − 2')), m('x > 2')],
      ['Solve ' + m(f('x³ − x', 'x + 3') + ' < 0'), m('x < −3') + ' or ' + m('−1 < x < 0') + ' or ' + m('x > 1') + ' — check signs'],
      ['Find all ' + m('k') + ' with ' + m(f('x² + k', 'x') + ' > 0') + ' for every ' + m('x > 0'), m('k ≥ 0')],
      ['Explain why ' + m(f('(x − 2)²', 'x − 2')) + ' and ' + m('x − 2') + ' give different solution sets', 'The first excludes ' + m('x = 2')]
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Every answer needs the number line drawn, with open and closed circles marked.',
  homework: [
    'Solve ' + m(f('x − 5', 'x + 2') + ' < 0') + '.',
    'Solve ' + m(f('3', 'x − 2') + ' ≥ 1') + '.',
    'Solve ' + m(f('x', 'x² − 9') + ' ≤ 0') + '.',
    'Solve ' + m(f('(x − 2)²(x + 1)', 'x − 5') + ' ≥ 0') + '.',
    'Explain in three sentences why ' + m(f('1', 'x') + ' > 1') + ' is not ' + m('1 > x') + '.',
    'Solve ' + m(f('2', 'x + 1') + ' < ' + f('1', 'x')) + '.'
  ]
});

/* ============================== 18 ============================== */
G10_ALG.push({
  id: 'a10-18', stream: 'alg', grade: 10, quarter: 2, lessons: '35–37', hours: 3,
  title: 'Systems of rational inequalities',
  subtitle: 'Solve each one alone, draw them on the same line, and keep only the overlap.',
  uz: 'Algebra 10, §2.4', uzPage: 'pp. 129–142',
  cam: 'P1 · 1.2 (extension)', camPage: 'Pure Mathematics 1, pp. 6–11', wb: 'P1 Exercise 1C',
  objectives: [
    'Solve each inequality of a system separately.',
    'Represent the solution sets on one number line and read the intersection.',
    'Distinguish a system (“and”) from a collection (“or”).',
    'Handle systems whose solution set is empty.'
  ],
  terms: [
    ['System of inequalities', 'Tengsizliklar sistemasi', 'Система неравенств'],
    ['Collection of inequalities', 'Tengsizliklar majmuasi', 'Совокупность неравенств'],
    ['Intersection of sets', 'To‘plamlar kesishmasi', 'Пересечение множеств'],
    ['Union of sets', 'To‘plamlar birlashmasi', 'Объединение множеств'],
    ['Empty solution set', 'Bo‘sh yechimlar to‘plami', 'Пустое множество решений'],
    ['Number line', 'Sonlar o‘qi', 'Числовая прямая'],
    ['Common part', 'Umumiy qism', 'Общая часть'],
    ['Double inequality', 'Qo‘sh tengsizlik', 'Двойное неравенство'],
    ['Bounded interval', 'Chegaralangan oraliq', 'Ограниченный промежуток']
  ],
  timing: [[10, 'And versus or'], [22, 'The method'], [26, 'Worked systems'], [24, 'Empty and unbounded answers'], [38, 'Practice'], [15, 'Homework']],
  sections: [
    {
      h: '“And” or “or”',
      html: `<div class="keybox"><div class="klabel">Two different questions</div>
      A <b>system</b> — written with a brace — asks for the values satisfying <b>every</b> inequality:
      the <b>intersection</b>. A <b>collection</b> asks for those satisfying <b>at least one</b>:
      the <b>union</b>.</div>
      <p>${m('x > 1')} and ${m('x < 4')} gives ${m('1 < x < 4')}. The same two as a collection give
      all of ${m('ℝ')}. The brace matters.</p>`
    },
    {
      h: 'The method',
      html: `<ol>
        <li>Solve each inequality on its own, by the sign-chart method of the last lesson.</li>
        <li>Draw all the solution sets on <b>one</b> number line, one above another.</li>
        <li>Shade the part covered by every line.</li>
        <li>Read the answer as an interval or a union of intervals.</li>
      </ol>
      {{fig:systemIntervals:Three solution sets drawn above one another. The answer is the strip covered by all three.}}
      <div class="warn"><span class="wl">Do not try to solve them simultaneously</span>
      Inequalities are not equations: adding or subtracting them loses information. Solve each
      separately, then intersect on the picture.</div>`
    },
    {
      h: 'Worked systems',
      html: `<p><b>Example.</b> ${m(f('1', 'x') + ' > 0')} and ${m(f('x − 2', 'x + 1') + ' ≤ 0')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Inequality</th><th>Solution</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('1', 'x')} &gt; 0</td><td class="m">x &gt; 0</td></tr>
        <tr><td class="m">${f('x − 2', 'x + 1')} ≤ 0</td><td class="m">−1 &lt; x ≤ 2</td></tr>
        <tr><td><b>intersection</b></td><td class="m">0 &lt; x ≤ 2</td></tr>
      </tbody></table></div>
      <p>A double inequality such as ${m('−3 < ' + f('2', 'x') + ' < 1')} is a system in disguise:
      break it into ${m(f('2', 'x') + ' > −3')} and ${m(f('2', 'x') + ' < 1')}, solve both, intersect.
      It cannot be solved “all at once” because the middle contains ${m('x')}.</p>`
    },
    {
      h: 'When the answer is empty',
      html: `<p>${m('x > 5')} and ${m('x < 2')} have no common value. That is a legitimate answer, written
      ${m('∅')} or “no solution”, and it must be justified by the picture — not left blank.</p>
      <div class="keybox"><div class="klabel">Three shapes of answer</div>
      a single interval · a union of intervals · the empty set. Anything else means an error in one of
      the individual solutions.</div>
      <p>Systems are the natural home of the <b>domain</b> conditions from Quarter I. “Find the domain
      of ${m(f(sr('x − 1'), 'x − 4'))}” is exactly the system ${m('x − 1 ≥ 0')} and ${m('x ≠ 4')}.</p>`
    }
  ],
  examples: [
    {
      q: 'Solve the system ' + m('2x − 1 > 3') + ' and ' + m(f('1', 'x − 5') + ' < 0') + '.',
      steps: [
        ['First: ' + m('x > 2') + '.', ''],
        ['Second: ' + m('x < 5') + '.', 'The numerator is positive.'],
        ['Intersect.', '']
      ],
      ans: m('2 < x < 5')
    },
    {
      q: 'Solve ' + m(f('x', 'x − 3') + ' ≥ 0') + ' and ' + m('x² − 16 < 0') + '.',
      steps: [
        ['First: ' + m('x ≤ 0') + ' or ' + m('x > 3') + '.', ''],
        ['Second: ' + m('−4 < x < 4') + '.', ''],
        ['Intersect both pieces.', '']
      ],
      ans: m('−4 < x ≤ 0') + ' or ' + m('3 < x < 4')
    },
    {
      q: 'Find the domain of ' + m('f(x) = ' + f(sr('x + 2'), 'x² − 9')) + '.',
      steps: [
        ['Radicand ' + m('≥ 0') + ': ' + m('x ≥ −2') + '.', ''],
        ['Denominator ' + m('≠ 0') + ': ' + m('x ≠ ±3') + '.', ''],
        [m('x = −3') + ' is already excluded by the first.', '']
      ],
      ans: m('x ≥ −2') + ', ' + m('x ≠ 3')
    }
  ],
  modelNote: 'Draw both sets on the board one above the other; the answer is visible before it is written.',
  interactive: {
    type: 'inequalityLine',
    title: 'Intersecting two solution sets',
    hint: 'Move each interval and watch the overlap.'
  },
  quiz: [
    { q: 'A system of inequalities asks for:', a: ['the union', 'the intersection', 'either one', 'the difference'], c: 1, why: 'Every inequality must hold.' },
    { q: m('x > 1') + ' and ' + m('x < 4') + ' gives:', a: [m('1 < x < 4'), m('ℝ'), m('x > 4'), '∅'], c: 0, why: 'The overlap.' },
    { q: m('x > 5') + ' and ' + m('x < 2') + ' gives:', a: [m('2 < x < 5'), 'all reals', '∅', m('x > 5')], c: 2, why: 'No overlap.' },
    { q: m('−3 < ' + f('2', 'x') + ' < 1') + ' should be:', a: ['solved at once', 'split into two inequalities', 'cross-multiplied', 'squared'], c: 1, why: 'The middle contains ' + m('x') + '.' },
    { q: 'The domain of ' + m(f(sr('x'), 'x − 1')) + ' is:', a: [m('x ≥ 0'), m('x ≥ 0, x ≠ 1'), m('x > 1'), m('ℝ')], c: 1, why: 'Two conditions at once.' }
  ],
  practice: {
    easy: [
      ['Solve ' + m('x > 2') + ' and ' + m('x < 7'), m('2 < x < 7')],
      ['Solve ' + m('x ≥ 0') + ' and ' + m('x ≤ 5'), m('0 ≤ x ≤ 5')],
      ['Solve ' + m('x > 4') + ' and ' + m('x < 1'), '∅'],
      ['Solve ' + m('2x > 6') + ' and ' + m('x − 1 < 4'), m('3 < x < 5')],
      ['Domain of ' + m(f(sr('x'), 'x − 2')), m('x ≥ 0, x ≠ 2')],
      ['Solve ' + m('x² < 9'), m('−3 < x < 3')],
      ['Solve ' + m('x > 0') + ' and ' + m('x² < 4'), m('0 < x < 2')]
    ],
    med: [
      ['Solve ' + m('2x − 1 > 3') + ' and ' + m(f('1', 'x − 5') + ' < 0'), m('2 < x < 5')],
      ['Solve ' + m(f('x', 'x − 3') + ' ≥ 0') + ' and ' + m('x² − 16 < 0'), m('−4 < x ≤ 0') + ' or ' + m('3 < x < 4')],
      ['Solve ' + m('−3 < ' + f('2', 'x') + ' < 1'), m('x < −' + f('2', '3')) + ' or ' + m('x > 2')],
      ['Domain of ' + m(f(sr('x + 2'), 'x² − 9')), m('x ≥ −2, x ≠ 3')],
      ['Solve ' + m(f('1', 'x') + ' > 1') + ' and ' + m('x > 0.5'), m('0.5 < x < 1')],
      ['Solve ' + m('x² − 5x + 6 ≤ 0') + ' and ' + m('x ≠ 2'), m('2 < x ≤ 3')],
      ['Solve ' + m(f('x − 1', 'x + 2') + ' > 0') + ' and ' + m('x < 3'), m('x < −2') + ' or ' + m('1 < x < 3')]
    ],
    hard: [
      ['Solve ' + m(f('1', 'x − 1') + ' > 2') + ' and ' + m(f('1', 'x') + ' < 3'), m(f('1', '3') + ' < x < 1.5') + ' — check ends'],
      ['Solve ' + m('x² − 4x < 0') + ' and ' + m(f('x − 3', 'x') + ' ≥ 0'), m('3 ≤ x < 4')],
      ['Domain of ' + m(f(sr('4 − x²'), 'x − 1')), m('−2 ≤ x ≤ 2, x ≠ 1')],
      ['Domain of ' + m(sr(f('x − 1', 'x + 2'))), m('x < −2') + ' or ' + m('x ≥ 1')],
      ['Find all ' + m('k') + ' for which ' + m('x > k') + ' and ' + m('x < 2k') + ' is non-empty', m('k > 0')],
      ['Solve ' + m('|x − 2| < 3') + ' and ' + m(f('1', 'x') + ' > 0'), m('0 < x < 5')],
      ['Solve ' + m(f('x²  − 1', 'x') + ' ≥ 0') + ' and ' + m('x ≤ 2'), m('−1 ≤ x < 0') + ' or ' + m('1 ≤ x ≤ 2')]
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Draw one number line per system, with every solution set on it.',
  homework: [
    'Solve ' + m('3x + 1 > 7') + ' and ' + m(f('1', 'x − 6') + ' < 0') + '.',
    'Solve ' + m(f('x + 1', 'x − 2') + ' ≤ 0') + ' and ' + m('x > −3') + '.',
    'Solve ' + m('−2 < ' + f('3', 'x') + ' < 1') + '.',
    'Find the domain of ' + m(f(sr('x − 1'), 'x² − 16')) + '.',
    'Find the domain of ' + m(sr(f('x + 3', 'x − 1'))) + '.',
    'Give a system of two inequalities whose solution set is empty, and prove it with a number line.'
  ]
});

/* ============================== 19 ============================== */
G10_ALG.push({
  id: 'a10-19', stream: 'alg', grade: 10, quarter: 2, lessons: '38–39', hours: 2,
  title: 'Control work 3, and work on the mistakes',
  subtitle: 'Rational equations, systems and inequalities in one paper — then the hour that turns the marks into a plan.',
  uz: 'Algebra 10, Nazorat ishi 3', uzPage: 'pp. 143–146',
  cam: 'P1 · Chapter 1 review', camPage: 'Pure Mathematics 1, pp. 24–25', wb: 'Control paper C',
  objectives: [
    'Apply the rational-equation and rational-inequality methods under time.',
    'State a domain and reject an extraneous root without being prompted.',
    'Classify each lost mark as careless, method or knowledge.',
    'Rewrite every wrong solution correctly.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Extraneous root', 'Chet ildiz', 'Посторонний корень'],
    ['Sign chart', 'Ishoralar jadvali', 'Таблица знаков'],
    ['Careless error', 'E’tiborsizlik xatosi', 'Ошибка по невнимательности'],
    ['Method error', 'Usul xatosi', 'Ошибка в методе'],
    ['Knowledge gap', 'Bilim bo‘shlig‘i', 'Пробел в знаниях'],
    ['Mark scheme', 'Baholash sxemasi', 'Схема оценивания'],
    ['Correction', 'Tuzatish', 'Исправление']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [10, 'Self-mark'], [25, 'Rewrite'], [12, 'Common-error drill']],
  sections: [
    {
      h: 'The paper — 25 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Solve ${m(f('3', 'x') + ' + ' + f('2', 'x + 1') + ' = 3')}, stating the domain</td><td class="m">4</td><td>L28–29</td></tr>
        <tr><td>2</td><td>Solve ${m(f('x²', 'x − 5') + ' = ' + f('25', 'x − 5'))} and justify the rejection</td><td class="m">3</td><td>L28–29</td></tr>
        <tr><td>3</td><td>Solve the system ${m('x + y = 8')}, ${m(f('1', 'x') + ' + ' + f('1', 'y') + ' = ' + f('8', '15'))}</td><td class="m">4</td><td>L30–31</td></tr>
        <tr><td>4</td><td>Solve ${m(f('x − 4', 'x + 2') + ' ≤ 0')} with a sign chart</td><td class="m">4</td><td>L32–34</td></tr>
        <tr><td>5</td><td>Solve ${m(f('2', 'x − 3') + ' > 1')}</td><td class="m">4</td><td>L32–34</td></tr>
        <tr><td>6</td><td>Solve the system ${m(f('x', 'x − 1') + ' ≥ 0')} and ${m('x² < 9')}</td><td class="m">4</td><td>L35–37</td></tr>
        <tr><td>7</td><td>Find the domain of ${m(f(sr('x + 1'), 'x² − 4'))}</td><td class="m">2</td><td>L35–37</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the method marks are</div>
      Q1 and Q2 each give one mark for the domain line alone. Q4 and Q5 give two marks for the sign
      chart, whatever the final interval says. Working, not answers.</div>`
    },
    {
      h: 'The four errors this topic produces',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Error</th><th>Looks like</th><th>Kind</th></tr></thead>
      <tbody>
        <tr><td>no domain stated</td><td>an extraneous root kept</td><td>method</td></tr>
        <tr><td>cross-multiplying an inequality</td><td>${m(f('1', 'x') + ' > 1 ⇒ 1 > x')}</td><td>knowledge</td></tr>
        <tr><td>denominator zero included</td><td>${m('x ≤ 3')} where ${m('3')} kills the fraction</td><td>method</td></tr>
        <tr><td>only one ordered pair</td><td>${m('(3, 5)')} without ${m('(5, 3)')}</td><td>careless</td></tr>
      </tbody></table></div>
      {{fig:quadSignChart:Questions 4, 5 and 6 in one picture. Two of the marks are for drawing it.}}`
    },
    {
      h: 'The rewrite',
      html: `<p>Every question that lost a mark is rewritten in full, with the domain on the first line
      and the check on the last. Under each rewrite, one sentence beginning
      <i>“I lost this because …”</i>.</p>
      <div class="keybox"><div class="klabel">The drill before the rewrite</div>
      Ten expressions on the board. For each, the class calls out only <b>the domain</b>, in three
      seconds. Nothing improves this topic faster.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q2: solve ' + m(f('x²', 'x − 5') + ' = ' + f('25', 'x − 5')) + '.',
      steps: [
        ['Domain ' + m('x ≠ 5') + '.', 'One mark for this line.'],
        [m('x² = 25 ⇒ x = ±5'), ''],
        [m('x = 5') + ' is excluded by the domain.', ''],
        ['Only ' + m('x = −5') + ' survives.', '']
      ],
      ans: m('x = −5')
    },
    {
      q: 'Model answer, Q5: solve ' + m(f('2', 'x − 3') + ' > 1') + '.',
      steps: [
        [m(f('2', 'x − 3') + ' − 1 > 0'), 'Never cross-multiply.'],
        [m(f('2 − (x − 3)', 'x − 3') + ' = ' + f('5 − x', 'x − 3') + ' > 0'), ''],
        ['Critical ' + m('3') + ' and ' + m('5') + ', both open.', ''],
        ['Test ' + m('0, 4, 6') + ': ' + m('−, +, −') + '.', '']
      ],
      ans: m('3 < x < 5')
    },
    {
      q: 'A learner wrote ' + m(f('x − 4', 'x + 2') + ' ≤ 0 ⇒ −2 ≤ x ≤ 4') + '. Name the mistake.',
      steps: [
        [m('x = −2') + ' makes the denominator zero.', ''],
        ['A denominator zero is never included.', 'Method error.'],
        ['Correct: ' + m('−2 < x ≤ 4') + '.', '']
      ],
      ans: 'Method error — the excluded endpoint was closed'
    }
  ],
  modelNote: 'Run the domain drill before the rewrite, not after.',
  interactive: {
    type: 'quiz',
    title: 'Mark these six answers',
    hint: 'Look for the domain and the endpoints.',
    items: [
      { q: 'Domain of ' + m(f('3', 'x') + ' + ' + f('2', 'x + 1')) + ':', a: [m('x ≠ 0'), m('x ≠ −1'), m('x ≠ 0, −1'), m('ℝ')], c: 2, why: 'Both denominators.' },
      { q: m(f('x²', 'x − 5') + ' = ' + f('25', 'x − 5')) + ' gives:', a: [m('x = ±5'), m('x = 5'), m('x = −5'), 'no solution'], c: 2, why: m('x = 5') + ' is excluded.' },
      { q: m(f('x − 4', 'x + 2') + ' ≤ 0') + ' gives:', a: [m('−2 ≤ x ≤ 4'), m('−2 < x ≤ 4'), m('−2 < x < 4'), m('x ≤ 4')], c: 1, why: 'The denominator zero stays open.' },
      { q: m(f('2', 'x − 3') + ' > 1') + ' gives:', a: [m('x > 3'), m('x < 5'), m('3 < x < 5'), m('x > 5')], c: 2, why: 'Sign chart on ' + m(f('5 − x', 'x − 3')) + '.' },
      { q: 'The system ' + m('x + y = 8, ' + f('1', 'x') + ' + ' + f('1', 'y') + ' = ' + f('8', '15')) + ' gives:', a: [m('(3,5)'), m('(3,5), (5,3)'), m('(2,6)'), 'none'], c: 1, why: m('xy = 15') + '.' },
      { q: 'Domain of ' + m(f(sr('x + 1'), 'x² − 4')) + ':', a: [m('x ≥ −1'), m('x ≥ −1, x ≠ 2'), m('x ≠ ±2'), m('x > −1')], c: 1, why: m('x = −2') + ' is already excluded.' }
    ]
  },
  quiz: [
    { q: 'The domain line is worth:', a: ['nothing', 'a mark on its own', 'the whole question', 'half'], c: 1, why: 'It is explicitly credited.' },
    { q: 'Cross-multiplying an inequality is:', a: ['fine', 'fine if positive', 'never allowed with an unknown sign', 'always wrong'], c: 2, why: 'The sign decides the direction.' },
    { q: 'A denominator zero in a ' + m('≤') + ' answer is:', a: ['included', 'excluded', 'sometimes included', 'the answer'], c: 1, why: 'The expression has no value there.' },
    { q: 'A symmetric system is finished when you have:', a: ['one pair', 'both ordered pairs', 'the sum', 'the product'], c: 1, why: 'Both orders solve it.' }
  ],
  practice: {
    easy: [
      ['Domain of ' + m(f('3', 'x') + ' + ' + f('2', 'x + 1')), m('x ≠ 0, −1')],
      ['Solve ' + m(f('4', 'x') + ' = 2'), m('x = 2')],
      ['Solve ' + m(f('x − 4', 'x + 2') + ' ≤ 0'), m('−2 < x ≤ 4')],
      ['Solve ' + m('x² < 9'), m('−3 < x < 3')],
      ['Solve ' + m('x + y = 8, xy = 15'), m('(3,5), (5,3)')],
      ['Domain of ' + m(sr('x + 1')), m('x ≥ −1')],
      ['Solve ' + m(f('1', 'x − 3') + ' > 0'), m('x > 3')]
    ],
    med: [
      ['Solve ' + m(f('3', 'x') + ' + ' + f('2', 'x + 1') + ' = 3'), m('x = ' + f('3 ± ' + sr('45'), '6')) + ' — i.e. ' + m('x ≈ 1.62, −0.62')],
      ['Solve ' + m(f('x²', 'x − 5') + ' = ' + f('25', 'x − 5')), m('x = −5')],
      ['Solve ' + m(f('2', 'x − 3') + ' > 1'), m('3 < x < 5')],
      ['Solve ' + m(f('x', 'x − 1') + ' ≥ 0') + ' and ' + m('x² < 9'), m('−3 < x ≤ 0') + ' or ' + m('1 < x < 3')],
      ['Domain of ' + m(f(sr('x + 1'), 'x² − 4')), m('x ≥ −1, x ≠ 2')],
      ['Solve ' + m('x + y = 8, ' + f('1', 'x') + ' + ' + f('1', 'y') + ' = ' + f('8', '15')), m('(3,5), (5,3)')],
      ['Solve ' + m(f('x + 3', 'x − 1') + ' < 2'), m('x < 1') + ' or ' + m('x > 5')]
    ],
    hard: [
      ['Solve ' + m(f('1', 'x − 2') + ' + ' + f('1', 'x + 2') + ' = ' + f('4', 'x² − 4')), 'no solution — ' + m('x = 2') + ' rejected'],
      ['Solve ' + m(f('x² − 9', 'x² − 4x + 3') + ' ≥ 0'), m('x < 1') + ' or ' + m('x ≥ 3') + ', excluding ' + m('x = 3') + ' → ' + m('x < 1') + ' or ' + m('x > 3')],
      ['Solve ' + m('x + y = 10, x² + y² = 58'), m('(3,7), (7,3)')],
      ['Domain of ' + m(sr(f('x − 2', 'x + 1'))), m('x < −1') + ' or ' + m('x ≥ 2')],
      ['Find ' + m('k') + ' so ' + m(f('x', 'x − k') + ' = 2') + ' has no solution', m('k = 0')],
      ['Solve ' + m(f('1', 'x') + ' > ' + f('1', 'x − 1')), m('0 < x < 1') + ' fails; ' + m('x < 0') + ' or ' + m('x > 1')],
      ['Explain why the answer to Q4 is ' + m('−2 < x ≤ 4') + ' and not ' + m('−2 ≤ x ≤ 4'), 'The fraction is undefined at ' + m('−2')]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Task 1 is the rewrite. It is not optional.',
  homework: [
    'Rewrite in full every question that lost a mark, with the domain first and the check last.',
    'Five problems from the section your knowledge column was heaviest in.',
    'Solve ' + m(f('5', 'x + 2') + ' ≥ 1') + ' with a sign chart.',
    'Solve ' + m('x + y = 12') + ', ' + m('xy = 32') + ', giving both ordered pairs.'
  ]
});

/* ============================== 20 ============================== */
G10_ALG.push({
  id: 'a10-20', stream: 'alg', grade: 10, quarter: 2, lessons: '40–42', hours: 3,
  title: 'Irrational equations',
  subtitle: 'Squaring is the only way forward and the only source of false roots — so the check is not optional, it is the method.',
  uz: 'Algebra 10, §2.5', uzPage: 'pp. 147–162',
  cam: 'P1 · 1.5 (extension)', camPage: 'Pure Mathematics 1, pp. 12–17', wb: 'P1 Exercise 1E',
  objectives: [
    'State the two conditions an irrational equation imposes before squaring.',
    'Solve an equation with one radical by isolating and squaring.',
    'Solve an equation with two radicals by squaring twice.',
    'Check every candidate root in the original equation.'
  ],
  terms: [
    ['Irrational equation', 'Irratsional tenglama', 'Иррациональное уравнение'],
    ['Radical', 'Radikal', 'Радикал'],
    ['Radicand', 'Ildiz ostidagi ifoda', 'Подкоренное выражение'],
    ['Isolate the radical', 'Radikalni ajratish', 'Уединить радикал'],
    ['Squaring both sides', 'Kvadratga ko‘tarish', 'Возведение в квадрат'],
    ['False (extraneous) root', 'Chet ildiz', 'Посторонний корень'],
    ['Necessary condition', 'Zaruriy shart', 'Необходимое условие'],
    ['Equivalent transformation', 'Teng kuchli almashtirish', 'Равносильное преобразование'],
    ['Verification', 'Tekshirish', 'Проверка']
  ],
  timing: [[14, 'Two conditions, not one'], [24, 'One radical'], [30, 'Two radicals'], [24, 'Substitutions'], [36, 'Practice'], [7, 'Homework']],
  sections: [
    {
      h: 'Two conditions before you start',
      html: `<div class="keybox"><div class="klabel">${m(sr('A') + ' = B')} requires both</div>
      <b>1</b> ${m('A ≥ 0')} — the radicand cannot be negative.
      <b>2</b> ${m('B ≥ 0')} — a square root is never negative, so the other side cannot be either.
      Condition 2 is the one that is forgotten, and it is the one that creates false roots.</div>
      <p>${m(sr('x + 3') + ' = −2')} has no solution at all — the left side is never negative — but
      squaring gives ${m('x + 3 = 4')} and the plausible-looking ${m('x = 1')}. Squaring destroys sign
      information, permanently.</p>
      {{fig:rootLadder:The graph of a square root lives entirely above the axis. Nothing below it can be an answer.}}`
    },
    {
      h: 'One radical',
      html: `<ol>
        <li><b>Isolate</b> the radical on one side, alone.</li>
        <li>Square both sides.</li>
        <li>Solve the polynomial equation.</li>
        <li><b>Check every root</b> in the <i>original</i> equation.</li>
      </ol>
      ${eq(m(sr('2x + 3') + ' = x  ⇒  2x + 3 = x²  ⇒  x² − 2x − 3 = 0  ⇒  x = 3, −1'), true)}
      <p>Check: ${m('x = 3')} gives ${m(sr('9') + ' = 3')} ✓. ${m('x = −1')} gives ${m(sr('1') + ' = −1')} ✗.
      Only ${m('x = 3')}.</p>
      <div class="warn"><span class="wl">Isolate first, square second</span>
      Squaring ${m(sr('x') + ' + 1 = 4')} directly gives ${m('x + 2' + sr('x') + ' + 1 = 16')} — a
      new radical, and more work. Move the ${m('1')} across first.</div>`
    },
    {
      h: 'Two radicals',
      html: `<p>Arrange one radical on each side, square, then isolate whatever radical survives and
      square again:</p>
      ${eq(m(sr('x + 5') + ' − ' + sr('x') + ' = 1  ⇒  ' + sr('x + 5') + ' = 1 + ' + sr('x')), false)}
      ${eq(m('x + 5 = 1 + 2' + sr('x') + ' + x  ⇒  4 = 2' + sr('x') + '  ⇒  ' + sr('x') + ' = 2  ⇒  x = 4'), true)}
      <p>Check: ${m(sr('9') + ' − ' + sr('4') + ' = 3 − 2 = 1')} ✓.</p>
      <div class="keybox"><div class="klabel">Why one on each side</div>
      ${m('(a − b)²')} still contains a cross term with both radicals; ${m('(1 + ' + sr('x') + ')²')}
      contains only one. Arranging the equation before squaring halves the work.</div>`
    },
    {
      h: 'Substitutions',
      html: `<p>When the same radical appears more than once, name it:</p>
      ${eq(m('x + ' + sr('x') + ' − 6 = 0 ,  let  t = ' + sr('x') + ' ≥ 0'), true)}
      <p>Then ${m('t² + t − 6 = 0')}, so ${m('t = 2')} or ${m('t = −3')}. The second is impossible
      because ${m('t ≥ 0')}, so ${m(sr('x') + ' = 2')} and ${m('x = 4')}.</p>
      <p>The condition ${m('t ≥ 0')} is written down with the substitution, not remembered later.
      It is what removes the false root before any checking is needed.</p>`
    }
  ],
  examples: [
    {
      q: 'Solve ' + m(sr('3x + 1') + ' = x − 1') + '.',
      steps: [
        ['Conditions: ' + m('3x + 1 ≥ 0') + ' and ' + m('x − 1 ≥ 0') + ', so ' + m('x ≥ 1') + '.', ''],
        [m('3x + 1 = x² − 2x + 1'), ''],
        [m('x² − 5x = 0 ⇒ x = 0, 5'), ''],
        [m('x = 0') + ' fails ' + m('x ≥ 1') + '.', '']
      ],
      ans: m('x = 5')
    },
    {
      q: 'Solve ' + m(sr('x + 7') + ' − ' + sr('x') + ' = 1') + '.',
      steps: [
        [m(sr('x + 7') + ' = 1 + ' + sr('x')), 'One on each side.'],
        [m('x + 7 = 1 + 2' + sr('x') + ' + x'), ''],
        [m('6 = 2' + sr('x') + ' ⇒ ' + sr('x') + ' = 3'), ''],
        [m('x = 9') + '. Check: ' + m('4 − 3 = 1') + ' ✓', '']
      ],
      ans: m('x = 9')
    },
    {
      q: 'Solve ' + m('x − 5' + sr('x') + ' + 6 = 0') + '.',
      steps: [
        ['Let ' + m('t = ' + sr('x') + ' ≥ 0') + '.', m('t² − 5t + 6 = 0')],
        [m('t = 2') + ' or ' + m('t = 3') + ', both allowed.', ''],
        [m(sr('x') + ' = 2 ⇒ x = 4'), ''],
        [m(sr('x') + ' = 3 ⇒ x = 9'), '']
      ],
      ans: m('x = 4') + ' and ' + m('x = 9')
    }
  ],
  modelNote: 'Sketch both sides as graphs — the intersections are the true roots, and false roots are visibly absent.',
  interactive: {
    type: 'rootPower',
    title: 'Roots and powers',
    hint: 'See where squaring gains solutions the original never had.'
  },
  quiz: [
    { q: m(sr('A') + ' = B') + ' requires:', a: [m('A ≥ 0'), m('B ≥ 0'), 'both', 'neither'], c: 2, why: 'A root is non-negative, and so must its equal be.' },
    { q: m(sr('x + 3') + ' = −2') + ' has:', a: [m('x = 1'), m('x = −7'), 'no solution', 'two solutions'], c: 2, why: 'The left side is never negative.' },
    { q: 'The first step with ' + m(sr('x') + ' + 1 = 4') + ' is:', a: ['square', 'isolate the radical', 'substitute', 'cube'], c: 1, why: 'Squaring now creates a cross term.' },
    { q: 'For ' + m('x + ' + sr('x') + ' − 6 = 0') + ' set:', a: [m('t = x'), m('t = ' + sr('x')), m('t = x²'), 'nothing'], c: 1, why: 'It becomes quadratic in ' + m('t') + '.' },
    { q: 'After squaring you must:', a: ['stop', 'check each root in the original', 'square again', 'factorise'], c: 1, why: 'Squaring can add roots.' }
  ],
  practice: {
    easy: [
      ['Solve ' + m(sr('x') + ' = 3'), m('x = 9')],
      ['Solve ' + m(sr('x + 1') + ' = 2'), m('x = 3')],
      ['Solve ' + m(sr('2x') + ' = 4'), m('x = 8')],
      ['Solve ' + m(sr('x') + ' = −1'), 'no solution'],
      ['Solve ' + m(sr('x − 3') + ' = 0'), m('x = 3')],
      ['Solve ' + m(sr('5 − x') + ' = 1'), m('x = 4')],
      ['Condition on ' + m('x') + ' in ' + m(sr('x − 2')), m('x ≥ 2')]
    ],
    med: [
      ['Solve ' + m(sr('2x + 3') + ' = x'), m('x = 3')],
      ['Solve ' + m(sr('3x + 1') + ' = x − 1'), m('x = 5')],
      ['Solve ' + m(sr('x + 7') + ' − ' + sr('x') + ' = 1'), m('x = 9')],
      ['Solve ' + m('x − 5' + sr('x') + ' + 6 = 0'), m('x = 4, 9')],
      ['Solve ' + m(sr('x + 4') + ' = x − 2'), m('x = 5')],
      ['Solve ' + m(sr('x² − 3') + ' = 1'), m('x = ±2')],
      ['Solve ' + m(sr('x') + ' + 1 = 4'), m('x = 9')]
    ],
    hard: [
      ['Solve ' + m(sr('x + 5') + ' + ' + sr('x') + ' = 5'), m('x = 4')],
      ['Solve ' + m(sr('2x + 5') + ' − ' + sr('x − 1') + ' = 2'), m('x = 10') + ' or ' + m('x = 2')],
      ['Solve ' + m('x + ' + sr('x + 5') + ' = 7'), m('x = 4')],
      ['Solve ' + m(sr('x² + 3x') + ' = x + 1'), m('x = 1')],
      ['Solve ' + m('2x − 7' + sr('x') + ' + 3 = 0'), m('x = 9') + ' or ' + m('x = 0.25')],
      ['Solve ' + m(sr(sr('x')) + ' = 2'), m('x = 16')],
      ['Find all ' + m('k') + ' for which ' + m(sr('x') + ' = x + k') + ' has exactly one solution', m('k = 0.25') + ' or ' + m('k ≤ 0')]
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Every answer must show the check written out in full.',
  homework: [
    'Solve ' + m(sr('4x + 1') + ' = x − 1') + '.',
    'Solve ' + m(sr('x + 9') + ' − ' + sr('x') + ' = 1') + '.',
    'Solve ' + m('x − 7' + sr('x') + ' + 12 = 0') + '.',
    'Solve ' + m(sr('2x − 1') + ' = x − 2') + '.',
    'Explain, in three sentences, why squaring can create a root the original equation never had.',
    'Show that ' + m(sr('x + 2') + ' = −3') + ' has no solution without squaring.'
  ]
});

/* ============================== 21 ============================== */
G10_ALG.push({
  id: 'a10-21', stream: 'alg', grade: 10, quarter: 2, lessons: '43–46', hours: 4,
  title: 'Systems of irrational equations',
  subtitle: 'Four lessons on the systems that hide a quadratic — sum and difference of roots, substitution, and the conditions that must survive to the end.',
  uz: 'Algebra 10, §2.6', uzPage: 'pp. 163–180',
  cam: 'P1 · 1.5–1.7 (extension)', camPage: 'Pure Mathematics 1, pp. 12–23', wb: 'P1 Exercise 1E, 1F',
  objectives: [
    'Solve a system of irrational equations by substitution.',
    'Use u = √x, v = √y to turn a system into a polynomial one.',
    'Track the non-negativity conditions through every step.',
    'Check every candidate pair in the original system.'
  ],
  terms: [
    ['System of irrational equations', 'Irratsional tenglamalar sistemasi', 'Система иррациональных уравнений'],
    ['Non-negativity condition', 'Manfiy emaslik sharti', 'Условие неотрицательности'],
    ['Auxiliary variable', 'Yordamchi o‘zgaruvchi', 'Вспомогательная переменная'],
    ['Sum of roots', 'Ildizlar yig‘indisi', 'Сумма корней'],
    ['Product of roots', 'Ildizlar ko‘paytmasi', 'Произведение корней'],
    ['Back-substitution', 'Teskari almashtirish', 'Обратная подстановка'],
    ['Rejected pair', 'Rad etilgan juftlik', 'Отброшенная пара'],
    ['Symmetric system', 'Simmetrik sistema', 'Симметричная система'],
    ['Verification', 'Tekshirish', 'Проверка']
  ],
  timing: [[16, 'Where the difficulty is'], [30, 'u = √x, v = √y'], [30, 'Sum and product of roots'], [30, 'Mixed systems'], [50, 'Practice'], [24, 'Homework and consolidation']],
  sections: [
    {
      h: 'Where the difficulty is',
      html: `<p>Nothing new is being asked. A system of irrational equations combines two techniques you
      already have — the substitution of the last lesson and the elimination of Lesson 30–31. What is
      new is the <b>bookkeeping</b>: two non-negativity conditions instead of one, and they must survive
      every step.</p>
      <div class="keybox"><div class="klabel">Write the conditions once, at the top</div>
      ${m('x ≥ 0')}, ${m('y ≥ 0')}, and any others the radicands impose. Then substitute
      ${m('u = ' + sr('x') + ' ≥ 0')} and ${m('v = ' + sr('y') + ' ≥ 0')} — and every rejection later
      is decided by those two inequalities alone.</div>`
    },
    {
      h: 'The standard substitution',
      html: `${eq(m(sr('x') + ' + ' + sr('y') + ' = 5   and   x + y = 13'), true)}
      <p>Put ${m('u = ' + sr('x'))}, ${m('v = ' + sr('y'))}, both ${m('≥ 0')}. Then ${m('x = u²')} and
      ${m('y = v²')}, and the system becomes polynomial:</p>
      ${eq(m('u + v = 5   and   u² + v² = 13'), false)}
      <p>So ${m('uv = ' + f('25 − 13', '2') + ' = 6')}, and ${m('u, v')} are the roots of
      ${m('t² − 5t + 6 = 0')}: ${m('2')} and ${m('3')}. Both are non-negative, so both are kept.</p>
      ${eq(m('(x, y) = (4, 9)  or  (9, 4)'), true)}
      <div class="warn"><span class="wl">Square the substitution back carefully</span>
      ${m('u = 2')} gives ${m('x = 4')}, not ${m('x = 2')}. Half the errors in this lesson are made in
      the last line.</div>`
    },
    {
      h: 'Sum and product of the roots',
      html: `<p>Many systems are stated directly in ${m(sr('x') + ' + ' + sr('y'))} and
      ${m(sr('xy'))}. Since ${m(sr('xy') + ' = ' + sr('x') + ' · ' + sr('y'))} for non-negative
      ${m('x, y')}, these are exactly ${m('u + v')} and ${m('uv')}:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>In ${m('u, v')}</th></tr></thead>
      <tbody>
        <tr><td class="m">${sr('x')} + ${sr('y')}</td><td class="m">u + v = s</td></tr>
        <tr><td class="m">${sr('xy')}</td><td class="m">uv = p</td></tr>
        <tr><td class="m">x + y</td><td class="m">s² − 2p</td></tr>
        <tr><td class="m">x − y</td><td class="m">(u − v)(u + v)</td></tr>
      </tbody></table></div>
      <p>Then ${m('u')} and ${m('v')} are the roots of ${m('t² − st + p = 0')}, and both must come out
      non-negative or the pair is rejected.</p>`
    },
    {
      h: 'Mixed systems',
      html: `<p>When only one equation carries a radical, isolate and substitute in the ordinary way:</p>
      ${eq(m(sr('x + y') + ' = 3   and   x − y = 1'), true)}
      <p>The first gives ${m('x + y = 9')} (and requires ${m('x + y ≥ 0')}, which it now is), so the
      system is linear: ${m('x = 5')}, ${m('y = 4')}. Check: ${m(sr('9') + ' = 3')} ✓.</p>
      <div class="keybox"><div class="klabel">The final check is on the original system</div>
      Not on the substituted one. A pair that satisfies ${m('u + v = 5')} may still fail
      ${m(sr('x') + ' + ' + sr('y') + ' = 5')} if a sign was lost. Substitute the numbers back into the
      equations as first written.</div>`
    }
  ],
  examples: [
    {
      q: 'Solve ' + m(sr('x') + ' + ' + sr('y') + ' = 7') + ', ' + m('x + y = 25') + '.',
      steps: [
        [m('u + v = 7') + ', ' + m('u² + v² = 25') + ', both ' + m('≥ 0') + '.', ''],
        [m('uv = ' + f('49 − 25', '2') + ' = 12'), ''],
        [m('t² − 7t + 12 = 0 ⇒ t = 3, 4'), ''],
        [m('x = 9, y = 16') + ' or the reverse.', '']
      ],
      ans: m('(9, 16)') + ' and ' + m('(16, 9)')
    },
    {
      q: 'Solve ' + m(sr('x') + ' − ' + sr('y') + ' = 1') + ', ' + m('x + y = 25') + '.',
      steps: [
        [m('u − v = 1') + ', ' + m('u² + v² = 25') + '.', ''],
        [m('u = v + 1 ⇒ (v+1)² + v² = 25'), ''],
        [m('2v² + 2v − 24 = 0 ⇒ v² + v − 12 = 0'), m('v = 3') + ' or ' + m('v = −4') + ' (rejected)'],
        [m('v = 3, u = 4'), '']
      ],
      ans: m('(16, 9)')
    },
    {
      q: 'Solve ' + m(sr('x + y') + ' = 4') + ', ' + m('x − y = 2') + '.',
      steps: [
        [m('x + y = 16'), 'Condition satisfied.'],
        [m('x − y = 2'), ''],
        ['Add: ' + m('2x = 18 ⇒ x = 9') + '.', ''],
        [m('y = 7') + '. Check ' + m(sr('16') + ' = 4') + ' ✓', '']
      ],
      ans: m('(9, 7)')
    }
  ],
  modelNote: 'Write the two conditions on the board and keep them visible for the whole solution.',
  interactive: {
    type: 'rootPower',
    title: 'Substituting a root',
    hint: 'Watch how ' + m('u = ' + sr('x')) + ' turns an irrational system into a polynomial one.'
  },
  quiz: [
    { q: 'In ' + m('u = ' + sr('x')) + ' the condition is:', a: [m('u > 0'), m('u ≥ 0'), m('u ≤ 0'), 'none'], c: 1, why: 'A square root is non-negative.' },
    { q: 'If ' + m('u = 3') + ' then ' + m('x') + ' is:', a: [m('3'), m('9'), m(sr('3')), m('1.5')], c: 1, why: m('x = u²') + '.' },
    { q: m(sr('x') + ' + ' + sr('y') + ' = 5') + ', ' + m('x + y = 13') + ' gives ' + m('uv') + ':', a: [m('6'), m('12'), m('13'), m('25')], c: 0, why: m(f('25 − 13', '2')) + '.' },
    { q: 'A negative value of ' + m('v') + ' means:', a: ['a second answer', 'the pair is rejected', 'square it', 'nothing'], c: 1, why: m('v = ' + sr('y') + ' ≥ 0') + '.' },
    { q: 'The final check is done on:', a: ['the substituted system', 'the original system', 'neither', 'the quadratic'], c: 1, why: 'That is what must be satisfied.' }
  ],
  practice: {
    easy: [
      ['Solve ' + m(sr('x') + ' = 2') + ', ' + m('y = x + 1'), m('(4, 5)')],
      ['Solve ' + m(sr('x + y') + ' = 3') + ', ' + m('x = y'), m('(4.5, 4.5)')],
      ['If ' + m('u = ' + sr('x') + ' = 5') + ', find ' + m('x'), m('25')],
      ['Condition on ' + m('u = ' + sr('x')), m('u ≥ 0')],
      ['Solve ' + m(sr('x') + ' + ' + sr('y') + ' = 0'), m('(0, 0)')],
      ['Solve ' + m(sr('x') + ' = 3') + ', ' + m(sr('y') + ' = 4'), m('(9, 16)')],
      ['Write ' + m('x + y') + ' in terms of ' + m('u, v'), m('u² + v²')]
    ],
    med: [
      ['Solve ' + m(sr('x') + ' + ' + sr('y') + ' = 5') + ', ' + m('x + y = 13'), m('(4,9), (9,4)')],
      ['Solve ' + m(sr('x') + ' + ' + sr('y') + ' = 7') + ', ' + m('x + y = 25'), m('(9,16), (16,9)')],
      ['Solve ' + m(sr('x') + ' − ' + sr('y') + ' = 1') + ', ' + m('x + y = 25'), m('(16, 9)')],
      ['Solve ' + m(sr('x + y') + ' = 4') + ', ' + m('x − y = 2'), m('(9, 7)')],
      ['Solve ' + m(sr('x') + ' + ' + sr('y') + ' = 6') + ', ' + m(sr('xy') + ' = 8'), m('(4,16), (16,4)')],
      ['Solve ' + m(sr('x') + '·' + sr('y') + ' = 6') + ', ' + m('x + y = 13'), m('(4,9), (9,4)')],
      ['Solve ' + m(sr('x − 1') + ' = 2') + ', ' + m('x + y = 10'), m('(5, 5)')]
    ],
    hard: [
      ['Solve ' + m(sr('x') + ' + ' + sr('y') + ' = 4') + ', ' + m('x + y = 10'), m('(3 ± 2' + sr('2') + ')²') + ' — i.e. ' + m('u, v = 2 ± ' + sr('2'))],
      ['Solve ' + m('x + y = 20') + ', ' + m(sr('x') + ' − ' + sr('y') + ' = 2'), m('(16, 4)')],
      ['Solve ' + m(sr('x + y') + ' + ' + sr('x − y') + ' = 4') + ', ' + m('x² − y² = 9'), m('(5, 4)')],
      ['Solve ' + m(f('1', sr('x')) + ' + ' + f('1', sr('y')) + ' = ' + f('5', '6')) + ', ' + m('xy = 36'), m('(4,9), (9,4)')],
      ['Solve ' + m(sr('x') + ' + ' + sr('y') + ' = ' + sr('x + y')), m('x = 0') + ' or ' + m('y = 0')],
      ['Explain why ' + m(sr('x') + ' + ' + sr('y') + ' = 3') + ', ' + m('x + y = 10') + ' has no solution', m('uv = −0.5 < 0') + ' is impossible for ' + m('u, v ≥ 0')],
      ['Solve ' + m(sr('x') + ' + ' + sr('y') + ' = 5') + ', ' + m('x − y = 5'), m('(9, 4)')]
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Write ' + m('u ≥ 0') + ' and ' + m('v ≥ 0') + ' on the first line of every solution.',
  homework: [
    'Solve ' + m(sr('x') + ' + ' + sr('y') + ' = 9') + ', ' + m('x + y = 45') + '.',
    'Solve ' + m(sr('x') + ' − ' + sr('y') + ' = 2') + ', ' + m('x + y = 20') + '.',
    'Solve ' + m(sr('x + y') + ' = 5') + ', ' + m('x − y = 3') + '.',
    'Solve ' + m(sr('x') + ' + ' + sr('y') + ' = 8') + ', ' + m(sr('xy') + ' = 15') + '.',
    'Explain why ' + m(sr('x') + ' + ' + sr('y') + ' = 2') + ', ' + m('x + y = 10') + ' has no solution.',
    'Check both answers of task 1 by substituting into the original system.'
  ]
});

/* ============================== 22 ============================== */
G10_ALG.push({
  id: 'a10-22', stream: 'alg', grade: 10, quarter: 2, lessons: '47–48', hours: 2,
  title: 'Control work 4, and the quarter review',
  subtitle: 'Irrational equations and systems in one paper, then the map that links a domain to a check to an answer.',
  uz: 'Algebra 10, Nazorat ishi 4', uzPage: 'pp. 181–184',
  cam: 'P1 · Chapter 1 review', camPage: 'Pure Mathematics 1, pp. 24–25', wb: 'Control paper D',
  objectives: [
    'Apply every method of Quarter II in one assessment.',
    'Decide which technique a question wants without being told.',
    'Build a concept map linking domain, transformation and check.',
    'Set a personal target for Quarter III.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Concept map', 'Tushunchalar xaritasi', 'Карта понятий'],
    ['Equivalent transformation', 'Teng kuchli almashtirish', 'Равносильное преобразование'],
    ['Non-equivalent step', 'Teng kuchli bo‘lmagan qadam', 'Неравносильный переход'],
    ['Extraneous root', 'Chet ildiz', 'Посторонний корень'],
    ['Sign chart', 'Ishoralar jadvali', 'Таблица знаков'],
    ['Target', 'Maqsad', 'Цель'],
    ['Self-assessment', 'O‘z-o‘zini baholash', 'Самооценка']
  ],
  timing: [[3, 'Instructions'], [42, 'The paper'], [10, 'Answers'], [20, 'Rewrite'], [10, 'Concept map'], [5, 'Targets']],
  sections: [
    {
      h: 'The paper — 30 marks, 42 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Solve ${m(sr('2x + 7') + ' = x + 2')}, with the conditions stated</td><td class="m">5</td><td>L40–42</td></tr>
        <tr><td>2</td><td>Solve ${m(sr('x + 5') + ' − ' + sr('x') + ' = 1')}</td><td class="m">5</td><td>L40–42</td></tr>
        <tr><td>3</td><td>Solve ${m('x − 6' + sr('x') + ' + 8 = 0')} by substitution</td><td class="m">4</td><td>L40–42</td></tr>
        <tr><td>4</td><td>Solve ${m(sr('x') + ' + ' + sr('y') + ' = 6')}, ${m('x + y = 20')}</td><td class="m">6</td><td>L43–46</td></tr>
        <tr><td>5</td><td>Solve ${m(f('2', 'x − 1') + ' ≥ 1')} with a sign chart</td><td class="m">5</td><td>L32–34</td></tr>
        <tr><td>6</td><td>Find the domain of ${m(f(sr('x − 2'), 'x² − 25'))}</td><td class="m">5</td><td>L35–37</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Two marks are for conditions</div>
      Q1 gives one for ${m('x + 2 ≥ 0')} and one for the rejection that follows from it. A correct
      answer with neither scores three of five.</div>`
    },
    {
      h: 'The concept map',
      html: `<p>Six boxes, links as sentences:</p>
      <ul>
        <li><b>rational equation</b> → <b>domain</b> — “each denominator forbids one value”</li>
        <li><b>domain</b> → <b>extraneous root</b> — “multiplying by zero is not reversible”</li>
        <li><b>rational inequality</b> → <b>sign chart</b> — “never cross-multiply”</li>
        <li><b>system</b> → <b>intersection</b> — “draw them on one line”</li>
        <li><b>irrational equation</b> → <b>two conditions</b> — “radicand ${m('≥ 0')} and the other side ${m('≥ 0')}”</li>
        <li><b>squaring</b> → <b>check</b> — “sign information is destroyed, so it must be restored”</li>
      </ul>
      {{fig:rootLadder:The single picture behind the whole quarter: a root never goes below the axis.}}`
    },
    {
      h: 'Looking forward',
      html: `<p>Quarter III opens with the exponential and logarithmic functions. Their equations are
      solved by exactly the technique of this quarter: state the domain, transform, check. A logarithm
      demands ${m('argument > 0')} before anything else — the same first line as
      ${m(sr('A'))} demands ${m('A ≥ 0')}.</p>
      <div class="keybox"><div class="klabel">One habit to carry forward</div>
      The first line of every solution states what the unknown is allowed to be. Learners who built
      that habit this quarter will find Quarter III half-solved before they start.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q1: solve ' + m(sr('2x + 7') + ' = x + 2') + '.',
      steps: [
        ['Conditions ' + m('2x + 7 ≥ 0') + ' and ' + m('x + 2 ≥ 0') + ', so ' + m('x ≥ −2') + '.', ''],
        [m('2x + 7 = x² + 4x + 4'), ''],
        [m('x² + 2x − 3 = 0 ⇒ x = 1, −3'), ''],
        [m('x = −3') + ' fails ' + m('x ≥ −2') + '.', '']
      ],
      ans: m('x = 1')
    },
    {
      q: 'Model answer, Q4: ' + m(sr('x') + ' + ' + sr('y') + ' = 6') + ', ' + m('x + y = 20') + '.',
      steps: [
        [m('u + v = 6') + ', ' + m('u² + v² = 20') + ', both ' + m('≥ 0') + '.', ''],
        [m('uv = ' + f('36 − 20', '2') + ' = 8'), ''],
        [m('t² − 6t + 8 = 0 ⇒ t = 2, 4'), ''],
        [m('x = 4, y = 16') + ' or the reverse.', '']
      ],
      ans: m('(4, 16)') + ' and ' + m('(16, 4)')
    },
    {
      q: 'Model answer, Q6: domain of ' + m(f(sr('x − 2'), 'x² − 25')) + '.',
      steps: [
        [m('x − 2 ≥ 0 ⇒ x ≥ 2'), ''],
        [m('x² − 25 ≠ 0 ⇒ x ≠ ±5'), ''],
        [m('x = −5') + ' is already excluded.', '']
      ],
      ans: m('x ≥ 2') + ', ' + m('x ≠ 5')
    }
  ],
  modelNote: 'Work Q1 and Q4 on the board with the conditions written in a box at the top.',
  interactive: {
    type: 'quiz',
    title: 'The quarter in ten questions',
    hint: 'One from each block.',
    items: [
      { q: 'Domain of ' + m(f('1', 'x − 4') + ' + ' + f('1', 'x')) + ':', a: [m('x ≠ 4'), m('x ≠ 0'), m('x ≠ 0, 4'), m('ℝ')], c: 2, why: 'Both denominators.' },
      { q: m(f('x²', 'x − 3') + ' = ' + f('9', 'x − 3')) + ' gives:', a: [m('±3'), m('3'), m('−3'), 'none'], c: 2, why: m('x = 3') + ' is excluded.' },
      { q: m(f('1', 'x') + ' > 2') + ' gives:', a: [m('x < 0.5'), m('0 < x < 0.5'), m('x > 0.5'), m('x > 2')], c: 1, why: 'Sign chart on ' + m(f('1 − 2x', 'x')) + '.' },
      { q: m(f('x − 4', 'x + 2') + ' ≤ 0') + ' gives:', a: [m('−2 ≤ x ≤ 4'), m('−2 < x ≤ 4'), m('−2 < x < 4'), m('x ≤ 4')], c: 1, why: 'Denominator zero excluded.' },
      { q: m(sr('2x + 7') + ' = x + 2') + ' gives:', a: [m('x = 1'), m('x = 1, −3'), m('x = −3'), 'none'], c: 0, why: m('x ≥ −2') + ' rejects ' + m('−3') + '.' },
      { q: m(sr('x + 5') + ' − ' + sr('x') + ' = 1') + ' gives:', a: [m('x = 4'), m('x = 5'), m('x = 9'), m('x = 1')], c: 0, why: m(sr('9') + ' − ' + sr('4') + ' = 1') + '.' },
      { q: m('x − 6' + sr('x') + ' + 8 = 0') + ' gives:', a: [m('x = 2, 4'), m('x = 4, 16'), m('x = 16'), m('x = 8')], c: 1, why: m('t = 2, 4') + ' then square.' },
      { q: m(sr('x') + ' + ' + sr('y') + ' = 6, x + y = 20') + ' gives:', a: [m('(4,16)') + ' only', m('(4,16), (16,4)'), m('(2,4)'), 'none'], c: 1, why: 'Symmetric — both orders.' },
      { q: m(f('2', 'x − 1') + ' ≥ 1') + ' gives:', a: [m('x ≥ 3'), m('1 < x ≤ 3'), m('x ≤ 3'), m('x > 1')], c: 1, why: 'Sign chart on ' + m(f('3 − x', 'x − 1')) + '.' },
      { q: 'Domain of ' + m(f(sr('x − 2'), 'x² − 25')) + ':', a: [m('x ≥ 2'), m('x ≥ 2, x ≠ 5'), m('x ≠ ±5'), m('x > 2')], c: 1, why: m('−5') + ' is already out.' }
    ]
  },
  quiz: [
    { q: 'The first line of any solution this quarter states:', a: ['the answer', 'what the unknown may be', 'the method', 'the check'], c: 1, why: 'Domain or conditions.' },
    { q: 'Squaring is:', a: ['always equivalent', 'equivalent only when both sides are ' + m('≥ 0'), 'never allowed', 'reversible'], c: 1, why: 'Otherwise it adds roots.' },
    { q: 'Quarter III begins with:', a: ['trigonometry', 'the exponential function', 'probability', 'vectors'], c: 1, why: 'Then logarithms.' },
    { q: 'A logarithm will demand:', a: ['argument ' + m('≥ 0'), 'argument ' + m('> 0'), 'base ' + m('= 10'), 'nothing'], c: 1, why: 'Strictly positive.' }
  ],
  practice: {
    easy: [
      ['Solve ' + m(sr('x') + ' = 6'), m('x = 36')],
      ['Domain of ' + m(f('1', 'x − 4')), m('x ≠ 4')],
      ['Solve ' + m(f('3', 'x') + ' = 1'), m('x = 3')],
      ['Solve ' + m(f('x − 4', 'x + 2') + ' ≤ 0'), m('−2 < x ≤ 4')],
      ['Solve ' + m('x + y = 6, xy = 8'), m('(2,4), (4,2)')],
      ['Domain of ' + m(sr('x − 2')), m('x ≥ 2')],
      ['Solve ' + m(sr('x + 1') + ' = 3'), m('x = 8')]
    ],
    med: [
      ['Solve ' + m(sr('2x + 7') + ' = x + 2'), m('x = 1')],
      ['Solve ' + m(sr('x + 5') + ' − ' + sr('x') + ' = 1'), m('x = 4')],
      ['Solve ' + m('x − 6' + sr('x') + ' + 8 = 0'), m('x = 4, 16')],
      ['Solve ' + m(sr('x') + ' + ' + sr('y') + ' = 6, x + y = 20'), m('(4,16), (16,4)')],
      ['Solve ' + m(f('2', 'x − 1') + ' ≥ 1'), m('1 < x ≤ 3')],
      ['Domain of ' + m(f(sr('x − 2'), 'x² − 25')), m('x ≥ 2, x ≠ 5')],
      ['Solve ' + m(f('x', 'x + 3') + ' = ' + f('2', 'x')), m('x = 6, −1')]
    ],
    hard: [
      ['Solve ' + m(sr('3x + 4') + ' − ' + sr('x + 1') + ' = 1'), m('x = 0') + ' or ' + m('x = 8')],
      ['Solve ' + m(f('x² − 1', 'x² − 4') + ' ≤ 0'), m('−2 < x ≤ −1') + ' or ' + m('1 ≤ x < 2')],
      ['Solve ' + m(sr('x') + ' + ' + sr('y') + ' = 5, xy = 36'), m('(4,9), (9,4)')],
      ['Domain of ' + m(sr(f('x − 3', 'x + 2'))), m('x < −2') + ' or ' + m('x ≥ 3')],
      ['Solve ' + m('2x + ' + sr('x') + ' − 1 = 0'), m('x = 0.25')],
      ['Find ' + m('k') + ' so ' + m(sr('x') + ' = x − k') + ' has exactly two solutions', m('0 < k < 0.25')],
      ['Solve ' + m(f('1', sr('x')) + ' + ' + sr('x') + ' = 2.5'), m('x = 4') + ' or ' + m('x = 0.25')]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Bring the concept map to the first lesson of Quarter III.',
  homework: [
    'Rewrite in full every control-work question that lost a mark.',
    'Finish the concept map with all six links written as sentences.',
    'Solve ' + m(sr('4x + 5') + ' = x + 2') + ' and ' + m(sr('x + 3') + ' + ' + sr('x') + ' = 3') + '.',
    'Write your target for Quarter III in one checkable sentence, and date it.'
  ]
});

/* ===================== QUARTER III (30 hours) ===================== */

/* ============================== 23 ============================== */
G10_ALG.push({
  id: 'a10-23', stream: 'alg', grade: 10, quarter: 3, lessons: '49–50', hours: 2,
  title: 'The exponential function, its properties and graph',
  subtitle: 'The variable moves into the index — and everything about the shape follows from whether the base is bigger or smaller than 1.',
  uz: 'Algebra 10, §3.1', uzPage: 'pp. 185–196',
  cam: 'P2 · 2.1', camPage: 'Pure Mathematics 2 & 3, pp. 26–32', wb: 'P2 Exercise 2A',
  objectives: [
    'State the definition and conditions on the base of an exponential function.',
    'Sketch y = aˣ for a > 1 and for 0 < a < 1.',
    'State the domain, range, monotonicity and asymptote.',
    'Model exponential growth and decay.'
  ],
  terms: [
    ['Exponential function', 'Ko‘rsatkichli funksiya', 'Показательная функция'],
    ['Base', 'Asos', 'Основание'],
    ['Index (exponent)', 'Ko‘rsatkich', 'Показатель'],
    ['Growth', 'O‘sish', 'Рост'],
    ['Decay', 'Kamayish', 'Убывание'],
    ['Horizontal asymptote', 'Gorizontal asimptota', 'Горизонтальная асимптота'],
    ['Monotonic', 'Monoton', 'Монотонная'],
    ['Doubling time', 'Ikkilanish vaqti', 'Время удвоения'],
    ['Half-life', 'Yarim yemirilish davri', 'Период полураспада']
  ],
  timing: [[10, 'The definition'], [22, 'Two shapes'], [20, 'The properties'], [22, 'Growth and decay'], [16, 'Practice'], [10, 'Homework']],
  sections: [
    {
      h: 'The definition',
      html: `${eq(m('y = aˣ ,   a > 0 ,  a ≠ 1'), true)}
      <div class="keybox"><div class="klabel">Why the base is restricted</div>
      ${m('a > 0')}: otherwise ${m('(−4)^(1/2)')} has no real value, and the function has holes.
      ${m('a ≠ 1')}: ${m('1ˣ = 1')} for every ${m('x')} — a constant, not an exponential.</div>
      <p>The variable is in the <b>index</b>. That is the whole difference from a power function
      ${m('y = xⁿ')}, and it changes everything: ${m('2ˣ')} eventually overtakes ${m('x¹⁰⁰')}.</p>`
    },
    {
      h: 'Two shapes',
      html: `{{fig:expGraph:Growth when the base exceeds 1, decay when it is between 0 and 1. Both pass through (0, 1).}}
      <div class="tablewrap"><table>
      <thead><tr><th>Property</th><th class="m">a > 1</th><th class="m">0 < a < 1</th></tr></thead>
      <tbody>
        <tr><td>domain</td><td class="m">ℝ</td><td class="m">ℝ</td></tr>
        <tr><td>range</td><td class="m">y > 0</td><td class="m">y > 0</td></tr>
        <tr><td>behaviour</td><td>increasing</td><td>decreasing</td></tr>
        <tr><td>passes through</td><td class="m">(0, 1)</td><td class="m">(0, 1)</td></tr>
        <tr><td>asymptote</td><td class="m">y = 0</td><td class="m">y = 0</td></tr>
        <tr><td>as ${m('x → +∞')}</td><td class="m">y → ∞</td><td class="m">y → 0</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The graph never touches the ${m('x')}-axis</span>
      ${m('aˣ')} is positive for every real ${m('x')}. The range is ${m('y > 0')}, not ${m('y ≥ 0')} —
      and that is why every exponential equation can be divided by ${m('aˣ')} safely.</div>`
    },
    {
      h: 'The properties, and why they matter',
      html: `<p>Every one of these is used in the next four lessons:</p>
      <ol>
        <li><b>Monotonic</b>, so <b>one-to-one</b> — hence ${m('aᵐ = aⁿ ⇒ m = n')}, the whole method of
        solving exponential equations.</li>
        <li><b>Positive</b>, so ${m('aˣ = −3')} has no solution and ${m('aˣ > 0')} is always true.</li>
        <li><b>Increasing for ${m('a > 1')}</b>, so ${m('aᵐ > aⁿ ⇔ m > n')}; but for ${m('0 < a < 1')}
        the inequality <b>reverses</b>.</li>
        <li><b>Invertible</b>, and its inverse is the logarithm of Lesson 57–58.</li>
      </ol>
      ${eq(m('a^(m+n) = aᵐaⁿ') + '  ·  ' + m('a^(m−n) = ' + f('aᵐ', 'aⁿ')) + '  ·  ' + m('(aᵐ)ⁿ = a^(mn)') + '  ·  ' + m('a⁰ = 1'), true)}`
    },
    {
      h: 'Growth and decay',
      html: `${eq(m('N(t) = N₀ · aᵗ') + '     ' + m('a > 1') + ' growth, ' + m('0 < a < 1') + ' decay', true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Situation</th><th>Model</th><th>Meaning of the base</th></tr></thead>
      <tbody>
        <tr><td>bacteria doubling hourly</td><td class="m">N = N₀·2ᵗ</td><td>doubling time 1 hour</td></tr>
        <tr><td>a 12% annual rise</td><td class="m">N = N₀·1.12ᵗ</td><td>${m('1 + ' + f('12', '100'))}</td></tr>
        <tr><td>a 7% annual fall</td><td class="m">N = N₀·0.93ᵗ</td><td>${m('1 − ' + f('7', '100'))}</td></tr>
        <tr><td>half-life ${m('h')}</td><td class="m">N = N₀·(½)^(t/h)</td><td>halving every ${m('h')}</td></tr>
      </tbody></table></div>
      <p><b>Example.</b> Uzbekistan's population grows about ${m('1.7%')} a year. From ${m('36')}
      million, after 10 years: ${m('36 × 1.017¹⁰ ≈ 42.6')} million.</p>`
    }
  ],
  examples: [
    {
      q: 'Sketch ' + m('y = 3ˣ') + ' and state its domain, range and asymptote.',
      steps: [
        [m('a = 3 > 1') + ', so increasing.', ''],
        ['Through ' + m('(0, 1)') + ' and ' + m('(1, 3)') + '.', ''],
        ['Domain ' + m('ℝ') + ', range ' + m('y > 0') + '.', ''],
        ['Asymptote ' + m('y = 0') + '.', '']
      ],
      ans: 'Increasing; domain ' + m('ℝ') + ', range ' + m('y > 0') + ', asymptote ' + m('y = 0')
    },
    {
      q: 'A colony of 500 bacteria doubles every 3 hours. Find the number after 12 hours.',
      steps: [
        [m('N = 500 × 2^(t/3)'), ''],
        [m('t = 12 ⇒ 2⁴ = 16'), ''],
        [m('500 × 16 = 8000'), '']
      ],
      ans: m('8000')
    },
    {
      q: 'A radioactive sample has half-life 5 days. What fraction remains after 20 days?',
      steps: [
        [m('20 ÷ 5 = 4') + ' half-lives.', ''],
        [m('(½)⁴'), ''],
        [m('= ' + f('1', '16')), '']
      ],
      ans: m(f('1', '16')) + ' — about 6.25%'
    }
  ],
  modelNote: 'Change the base through 1 and watch the graph flip from growth to decay.',
  interactive: {
    type: 'graphTransform',
    title: 'The exponential curve',
    hint: 'Shift and stretch it, and watch the asymptote move with it.'
  },
  quiz: [
    { q: 'The range of ' + m('y = aˣ') + ' is:', a: [m('ℝ'), m('y > 0'), m('y ≥ 0'), m('y ≠ 0')], c: 1, why: 'It never reaches zero.' },
    { q: m('y = aˣ') + ' always passes through:', a: [m('(0, 0)'), m('(0, 1)'), m('(1, 0)'), m('(1, 1)')], c: 1, why: m('a⁰ = 1') + '.' },
    { q: m('y = 0.4ˣ') + ' is:', a: ['increasing', 'decreasing', 'constant', 'undefined'], c: 1, why: 'The base is below 1.' },
    { q: 'The base of an exponential must satisfy:', a: [m('a > 0'), m('a ≠ 1'), 'both', 'neither'], c: 2, why: 'Both conditions.' },
    { q: 'A 5% annual fall gives base:', a: [m('0.5'), m('0.95'), m('1.05'), m('5')], c: 1, why: m('1 − 0.05') + '.' }
  ],
  practice: {
    easy: [
      ['Domain of ' + m('y = 2ˣ'), m('ℝ')],
      ['Range of ' + m('y = 2ˣ'), m('y > 0')],
      ['Is ' + m('y = 5ˣ') + ' increasing?', 'yes'],
      ['Is ' + m('y = 0.3ˣ') + ' increasing?', 'no'],
      [m('3⁰'), m('1')],
      [m('2⁵'), m('32')],
      [m('(½)³'), m(f('1', '8'))]
    ],
    med: [
      ['Base for a 12% annual rise', m('1.12')],
      ['Base for a 7% annual fall', m('0.93')],
      ['500 bacteria doubling every 3 h: number after 12 h', m('8000')],
      ['Half-life 5 days: fraction left after 20 days', m(f('1', '16'))],
      [m('36') + ' million growing 1.7% a year: after 10 years', m('≈ 42.6') + ' million'],
      ['Asymptote of ' + m('y = 2ˣ + 3'), m('y = 3')],
      ['Range of ' + m('y = 2ˣ + 3'), m('y > 3')]
    ],
    hard: [
      ['Sketch ' + m('y = 2^(x−1) − 4') + ': asymptote and intercepts', 'asymptote ' + m('y = −4') + ', ' + m('x') + '-intercept ' + m('3')],
      ['A car worth 200 million so‘m falls 15% a year. Value after 4 years', m('≈ 104.4') + ' million'],
      ['When does ' + m('N = 1000 × 1.05ᵗ') + ' first exceed ' + m('2000') + '?', m('t ≈ 14.2') + ' years'],
      ['A half-life of 8 days: what percentage remains after 12 days?', m('≈ 35.4%')],
      ['Show ' + m('2ˣ') + ' eventually exceeds ' + m('x¹⁰'), 'Exponential growth beats any power'],
      ['Solve ' + m('2ˣ = 8') + ' by inspection', m('x = 3')],
      ['Explain why ' + m('aˣ = −2') + ' has no solution', 'The range is ' + m('y > 0')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every sketch must show the asymptote as a dashed line.',
  homework: [
    'Sketch ' + m('y = 4ˣ') + ' and ' + m('y = (¼)ˣ') + ' on one set of axes, with domain, range and asymptote.',
    'Sketch ' + m('y = 3ˣ − 9') + ' and give its asymptote and both intercepts.',
    'A town of ' + m('40 000') + ' grows 2.5% a year. Find its population after 8 years.',
    'A sample has half-life 6 hours. What fraction remains after 24 hours?',
    'Explain in three sentences why the base of an exponential function may not be ' + m('1') + '.'
  ]
});

/* ============================== 24 ============================== */
G10_ALG.push({
  id: 'a10-24', stream: 'alg', grade: 10, quarter: 3, lessons: '51–52', hours: 2,
  title: 'Exponential equations',
  subtitle: 'Get the same base on both sides, then equate the indices — and know the three tricks for when you cannot.',
  uz: 'Algebra 10, §3.2', uzPage: 'pp. 197–208',
  cam: 'P2 · 2.3', camPage: 'Pure Mathematics 2 & 3, pp. 33–38', wb: 'P2 Exercise 2B',
  objectives: [
    'Solve aᶠ⁽ˣ⁾ = aᵍ⁽ˣ⁾ by equating indices.',
    'Rewrite both sides to a common base.',
    'Solve equations that become quadratic after a substitution.',
    'Solve homogeneous equations by dividing through.'
  ],
  terms: [
    ['Exponential equation', 'Ko‘rsatkichli tenglama', 'Показательное уравнение'],
    ['Common base', 'Umumiy asos', 'Общее основание'],
    ['Equating indices', 'Ko‘rsatkichlarni tenglashtirish', 'Приравнивание показателей'],
    ['Substitution', 'Almashtirish', 'Замена'],
    ['Homogeneous equation', 'Bir jinsli tenglama', 'Однородное уравнение'],
    ['Auxiliary variable', 'Yordamchi o‘zgaruvchi', 'Вспомогательная переменная'],
    ['Positivity condition', 'Musbatlik sharti', 'Условие положительности'],
    ['Rejected root', 'Rad etilgan ildiz', 'Отброшенный корень']
  ],
  timing: [[10, 'The one-to-one property'], [22, 'A common base'], [24, 'Substitution'], [22, 'Homogeneous equations'], [20, 'Practice'], [12, 'Homework']],
  sections: [
    {
      h: 'The method rests on one property',
      html: `<div class="keybox"><div class="klabel">${m('aˣ')} is one-to-one</div>
      Because ${m('y = aˣ')} is strictly monotonic, ${m('a^m = a^n')} forces ${m('m = n')}
      (for ${m('a > 0')}, ${m('a ≠ 1')}). That single fact solves most exponential equations.</div>
      ${eq(m('2^(3x−1) = 2^(x+5)  ⇒  3x − 1 = x + 5  ⇒  x = 3'), true)}
      <p>So the whole task is: <b>make the bases the same</b>.</p>`
    },
    {
      h: 'Getting a common base',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Equation</th><th>Rewrite as</th><th>Solution</th></tr></thead>
      <tbody>
        <tr><td class="m">2ˣ = 32</td><td class="m">2ˣ = 2⁵</td><td class="m">x = 5</td></tr>
        <tr><td class="m">3^(2x) = 81</td><td class="m">3^(2x) = 3⁴</td><td class="m">x = 2</td></tr>
        <tr><td class="m">4ˣ = 8</td><td class="m">2^(2x) = 2³</td><td class="m">x = 1.5</td></tr>
        <tr><td class="m">(⅓)ˣ = 9</td><td class="m">3^(−x) = 3²</td><td class="m">x = −2</td></tr>
        <tr><td class="m">5^(x²−3x) = 1</td><td class="m">5^(x²−3x) = 5⁰</td><td class="m">x = 0, 3</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Every number is a power of something</span>
      ${m('32 = 2⁵')}, ${m('81 = 3⁴')}, ${m('8 = 2³')}, ${m('0.25 = 2⁻²')}, ${m('1 = a⁰')}.
      Learning the powers of 2, 3, 5 up to a few hundred removes most of the difficulty in this topic.</div>`
    },
    {
      h: 'Substitution',
      html: `<p>When ${m('a^(2x)')} and ${m('aˣ')} both appear, set ${m('t = aˣ')} — and remember
      ${m('t > 0')}:</p>
      ${eq(m('4ˣ − 5·2ˣ + 4 = 0 ,  t = 2ˣ > 0  ⇒  t² − 5t + 4 = 0'), true)}
      <p>${m('t = 1')} or ${m('t = 4')}; both positive, so ${m('2ˣ = 1')} gives ${m('x = 0')} and
      ${m('2ˣ = 4')} gives ${m('x = 2')}.</p>
      <div class="warn"><span class="wl">Write ${m('t > 0')} with the substitution</span>
      A negative ${m('t')} is rejected immediately, because ${m('aˣ')} is never negative. That single
      line saves the whole check at the end — and it is the mark the examiner is looking for.</div>
      <p>Note ${m('4ˣ = (2²)ˣ = (2ˣ)² = t²')}: recognising that is the step, not the algebra after it.</p>`
    },
    {
      h: 'Homogeneous equations',
      html: `<p>When every term has the same total degree in two bases, divide through by one of them:</p>
      ${eq(m('9ˣ − 4·6ˣ + 3·4ˣ = 0'), true)}
      <p>Divide by ${m('4ˣ')} (never zero) to get, with ${m('t = (' + f('3', '2') + ')ˣ > 0')}:</p>
      ${eq(m('t² − 4t + 3 = 0  ⇒  t = 1, 3  ⇒  x = 0,  x = log_(1.5) 3'), false)}
      <p>The pattern to spot: ${m('9ˣ = (3²)ˣ')}, ${m('6ˣ = (2·3)ˣ')}, ${m('4ˣ = (2²)ˣ')} — the bases
      ${m('9, 6, 4')} are ${m('3², 3·2, 2²')}, a perfect quadratic pattern.</p>`
    }
  ],
  examples: [
    {
      q: 'Solve ' + m('2^(x+3) = 32') + '.',
      steps: [
        [m('32 = 2⁵'), ''],
        [m('x + 3 = 5'), ''],
        [m('x = 2'), '']
      ],
      ans: m('x = 2')
    },
    {
      q: 'Solve ' + m('9ˣ − 10·3ˣ + 9 = 0') + '.',
      steps: [
        ['Let ' + m('t = 3ˣ > 0') + '; ' + m('9ˣ = t²') + '.', ''],
        [m('t² − 10t + 9 = 0'), ''],
        [m('t = 1') + ' or ' + m('t = 9') + ', both positive.', ''],
        [m('3ˣ = 1 ⇒ x = 0') + '; ' + m('3ˣ = 9 ⇒ x = 2') + '.', '']
      ],
      ans: m('x = 0') + ' and ' + m('x = 2')
    },
    {
      q: 'Solve ' + m('2^(x+1) + 2^(x−1) = 20') + '.',
      steps: [
        [m('2·2ˣ + ' + f('2ˣ', '2') + ' = 20'), 'Factor out ' + m('2ˣ') + '.'],
        [m('2ˣ(2 + 0.5) = 20'), ''],
        [m('2ˣ = 8'), ''],
        [m('x = 3'), '']
      ],
      ans: m('x = 3')
    }
  ],
  modelNote: 'Write the powers of 2 and 3 on the board and leave them there for the whole lesson.',
  interactive: {
    type: 'rootPower',
    title: 'Powers and their bases',
    hint: 'Rewrite each number as a power before solving.'
  },
  quiz: [
    { q: m('2ˣ = 64') + ' gives:', a: [m('x = 5'), m('x = 6'), m('x = 32'), m('x = 8')], c: 1, why: m('64 = 2⁶') + '.' },
    { q: m('a^m = a^n') + ' implies ' + m('m = n') + ' because ' + m('aˣ') + ' is:', a: ['positive', 'one-to-one', 'continuous', 'even'], c: 1, why: 'It never repeats a value.' },
    { q: 'For ' + m('4ˣ − 5·2ˣ + 4 = 0') + ' substitute:', a: [m('t = 4ˣ'), m('t = 2ˣ'), m('t = x²'), m('t = 2x')], c: 1, why: m('4ˣ = (2ˣ)²') + '.' },
    { q: 'The condition on that ' + m('t') + ' is:', a: [m('t ≥ 0'), m('t > 0'), m('t ≠ 0'), 'none'], c: 1, why: m('2ˣ') + ' is strictly positive.' },
    { q: m('5^(x²−4) = 1') + ' gives:', a: [m('x = 4'), m('x = ±2'), m('x = 0'), 'no solution'], c: 1, why: m('5⁰ = 1') + '.' }
  ],
  practice: {
    easy: [
      ['Solve ' + m('2ˣ = 16'), m('x = 4')],
      ['Solve ' + m('3ˣ = 27'), m('x = 3')],
      ['Solve ' + m('5ˣ = 1'), m('x = 0')],
      ['Solve ' + m('2^(x+1) = 8'), m('x = 2')],
      ['Solve ' + m('10ˣ = 0.01'), m('x = −2')],
      ['Solve ' + m('4ˣ = 2'), m('x = 0.5')],
      ['Solve ' + m('(½)ˣ = 8'), m('x = −3')]
    ],
    med: [
      ['Solve ' + m('2^(3x−1) = 2^(x+5)'), m('x = 3')],
      ['Solve ' + m('9ˣ = 27'), m('x = 1.5')],
      ['Solve ' + m('5^(x²−3x) = 1'), m('x = 0, 3')],
      ['Solve ' + m('4ˣ − 5·2ˣ + 4 = 0'), m('x = 0, 2')],
      ['Solve ' + m('9ˣ − 10·3ˣ + 9 = 0'), m('x = 0, 2')],
      ['Solve ' + m('2^(x+1) + 2^(x−1) = 20'), m('x = 3')],
      ['Solve ' + m('3^(x+2) = 9^(x−1)'), m('x = 4')]
    ],
    hard: [
      ['Solve ' + m('4ˣ − 3·2ˣ − 4 = 0'), m('x = 2')],
      ['Solve ' + m('9ˣ − 4·6ˣ + 3·4ˣ = 0'), m('x = 0') + ' and ' + m('x = log_1.5 3')],
      ['Solve ' + m('2^(2x) − 6·2ˣ + 8 = 0'), m('x = 1, 2')],
      ['Solve ' + m('3^(x+1) + 3^(x−1) = 30'), m('x = 2')],
      ['Solve ' + m('25ˣ − 6·5ˣ + 5 = 0'), m('x = 0, 1')],
      ['Solve ' + m('2^(x²) = 4^x'), m('x = 0, 2')],
      ['Explain why ' + m('4ˣ + 2ˣ + 1 = 0') + ' has no solution', 'Every term is positive']
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Write ' + m('t > 0') + ' with every substitution.',
  homework: [
    'Solve ' + m('3^(2x−1) = 81') + ' and ' + m('8ˣ = 32') + '.',
    'Solve ' + m('2^(x²−5x) = 1') + '.',
    'Solve ' + m('9ˣ − 4·3ˣ + 3 = 0') + '.',
    'Solve ' + m('5^(x+1) + 5^(x−1) = 130') + '.',
    'Solve ' + m('4ˣ − 6·2ˣ + 8 = 0') + '.',
    'Explain in three sentences why the substitution ' + m('t = aˣ') + ' must carry the condition ' + m('t > 0') + '.'
  ]
});

/* ============================== 25 ============================== */
G10_ALG.push({
  id: 'a10-25', stream: 'alg', grade: 10, quarter: 3, lessons: '53–54', hours: 2,
  title: 'Exponential inequalities',
  subtitle: 'The same method as the equations, with one extra question that decides the direction of the answer.',
  uz: 'Algebra 10, §3.3', uzPage: 'pp. 209–220',
  cam: 'P2 · 2.4', camPage: 'Pure Mathematics 2 & 3, pp. 39–44', wb: 'P2 Exercise 2C',
  objectives: [
    'Use monotonicity to convert an exponential inequality into one about the indices.',
    'Reverse the inequality when the base is less than 1.',
    'Solve inequalities that become quadratic after a substitution.',
    'Write the solution in interval notation.'
  ],
  terms: [
    ['Exponential inequality', 'Ko‘rsatkichli tengsizlik', 'Показательное неравенство'],
    ['Monotonicity', 'Monotonlik', 'Монотонность'],
    ['Reversing the sign', 'Ishorani almashtirish', 'Смена знака неравенства'],
    ['Base greater than 1', 'Birdan katta asos', 'Основание больше единицы'],
    ['Base between 0 and 1', 'Birdan kichik asos', 'Основание меньше единицы'],
    ['Interval notation', 'Oraliq belgilanishi', 'Интервальная запись'],
    ['Substitution', 'Almashtirish', 'Замена'],
    ['Solution set', 'Yechimlar to‘plami', 'Множество решений']
  ],
  timing: [[10, 'The one extra question'], [22, 'Base greater than 1'], [22, 'Base less than 1'], [24, 'Substitution'], [20, 'Practice'], [12, 'Homework']],
  sections: [
    {
      h: 'The one extra question',
      html: `<div class="keybox"><div class="klabel">Ask it before anything else</div>
      <b>Is the base bigger or smaller than 1?</b> For ${m('a > 1')} the function increases, so the
      inequality between the indices points the <b>same</b> way. For ${m('0 < a < 1')} it decreases, so
      the inequality <b>reverses</b>.</div>
      ${eq(m('a > 1:   a^m > a^n  ⇔  m > n') + '     ' + m('0 < a < 1:   a^m > a^n  ⇔  m < n'), true)}
      {{fig:expGraph:Read it off the picture: the rising curve preserves order, the falling curve reverses it.}}`
    },
    {
      h: 'Base greater than 1',
      html: `${eq(m('2^(x+1) > 8  ⇒  2^(x+1) > 2³  ⇒  x + 1 > 3  ⇒  x > 2'), true)}
      <p>The sign is untouched. Every step is the technique of the last lesson, with ${m('>')} in place
      of ${m('=')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Inequality</th><th>Same base</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">3ˣ &gt; 27</td><td class="m">3ˣ &gt; 3³</td><td class="m">x &gt; 3</td></tr>
        <tr><td class="m">2ˣ ≤ 16</td><td class="m">2ˣ ≤ 2⁴</td><td class="m">x ≤ 4</td></tr>
        <tr><td class="m">5^(2x) &lt; 125</td><td class="m">5^(2x) &lt; 5³</td><td class="m">x &lt; 1.5</td></tr>
        <tr><td class="m">4ˣ ≥ 1</td><td class="m">4ˣ ≥ 4⁰</td><td class="m">x ≥ 0</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'Base less than 1',
      html: `${eq(m('(½)ˣ > 8  ⇒  (½)ˣ > (½)^(−3)  ⇒  x < −3'), true)}
      <div class="warn"><span class="wl">This is the mark everyone loses</span>
      The sign flipped, and nothing on the page says so except the base. Circle the base first; write
      “base ${m('< 1')}, so reverse” on its own line; then flip.</div>
      <p>An alternative that avoids the trap: rewrite ${m('(½)ˣ')} as ${m('2^(−x)')} so the base is
      greater than 1, and let the minus sign do the reversing where you can see it.</p>`
    },
    {
      h: 'Substitution',
      html: `<p>With ${m('t = aˣ > 0')} the inequality becomes an ordinary one in ${m('t')}, solved by
      the sign chart of Quarter II — but the answer must be translated back:</p>
      ${eq(m('4ˣ − 5·2ˣ + 4 < 0 ,  t = 2ˣ > 0  ⇒  t² − 5t + 4 < 0  ⇒  1 < t < 4'), true)}
      ${eq(m('1 < 2ˣ < 4  ⇒  0 < x < 2'), false)}
      <div class="keybox"><div class="klabel">Translate carefully</div>
      ${m('1 < t < 4')} becomes ${m('2⁰ < 2ˣ < 2²')}. Because the base exceeds 1, the order survives and
      the answer is ${m('0 < x < 2')}. With a base under 1 the whole double inequality would reverse.</div>`
    }
  ],
  examples: [
    {
      q: 'Solve ' + m('3^(2x−1) ≥ 27') + '.',
      steps: [
        [m('27 = 3³') + '; base ' + m('3 > 1') + '.', 'Sign unchanged.'],
        [m('2x − 1 ≥ 3'), ''],
        [m('x ≥ 2'), '']
      ],
      ans: m('x ≥ 2')
    },
    {
      q: 'Solve ' + m('(⅓)^(x+2) > 9') + '.',
      steps: [
        [m('9 = (⅓)^(−2)') + '; base ' + m('< 1') + '.', 'Reverse.'],
        [m('x + 2 < −2'), ''],
        [m('x < −4'), '']
      ],
      ans: m('x < −4')
    },
    {
      q: 'Solve ' + m('9ˣ − 4·3ˣ + 3 ≤ 0') + '.',
      steps: [
        ['Let ' + m('t = 3ˣ > 0') + '.', m('t² − 4t + 3 ≤ 0')],
        [m('(t − 1)(t − 3) ≤ 0 ⇒ 1 ≤ t ≤ 3'), ''],
        [m('3⁰ ≤ 3ˣ ≤ 3¹'), 'Base ' + m('> 1') + '.'],
        [m('0 ≤ x ≤ 1'), '']
      ],
      ans: m('0 ≤ x ≤ 1')
    }
  ],
  modelNote: 'Draw the rising and falling curves side by side before solving anything.',
  interactive: {
    type: 'inequalityLine',
    title: 'Reading the solution set',
    hint: 'Translate the interval in ' + m('t') + ' back into one in ' + m('x') + '.'
  },
  quiz: [
    { q: m('2ˣ > 8') + ' gives:', a: [m('x > 3'), m('x < 3'), m('x > 8'), m('x < 8')], c: 0, why: 'Base ' + m('> 1') + '.' },
    { q: m('(½)ˣ > 8') + ' gives:', a: [m('x > 3'), m('x < −3'), m('x > −3'), m('x < 3')], c: 1, why: 'Base ' + m('< 1') + ' — reverse.' },
    { q: 'The sign reverses when:', a: ['always', 'the base exceeds 1', 'the base is between 0 and 1', 'never'], c: 2, why: 'The function decreases.' },
    { q: m('1 < 2ˣ < 4') + ' gives:', a: [m('0 < x < 2'), m('1 < x < 4'), m('x > 2'), m('0 < x < 4')], c: 0, why: m('2⁰') + ' and ' + m('2²') + '.' },
    { q: m('4ˣ ≥ 1') + ' gives:', a: [m('x ≥ 1'), m('x ≥ 0'), m('x > 0'), m('x ≤ 0')], c: 1, why: m('4⁰ = 1') + '.' }
  ],
  practice: {
    easy: [
      ['Solve ' + m('2ˣ > 16'), m('x > 4')],
      ['Solve ' + m('3ˣ ≤ 9'), m('x ≤ 2')],
      ['Solve ' + m('5ˣ > 1'), m('x > 0')],
      ['Solve ' + m('(½)ˣ > 4'), m('x < −2')],
      ['Solve ' + m('(⅓)ˣ < 27'), m('x > −3')],
      ['Solve ' + m('10ˣ ≥ 100'), m('x ≥ 2')],
      ['Solve ' + m('2ˣ < 1'), m('x < 0')]
    ],
    med: [
      ['Solve ' + m('3^(2x−1) ≥ 27'), m('x ≥ 2')],
      ['Solve ' + m('(⅓)^(x+2) > 9'), m('x < −4')],
      ['Solve ' + m('2^(x+1) ≤ 32'), m('x ≤ 4')],
      ['Solve ' + m('4ˣ > 8'), m('x > 1.5')],
      ['Solve ' + m('9ˣ ≤ 3^(x+2)'), m('x ≤ 2')],
      ['Solve ' + m('(0.2)ˣ ≥ 25'), m('x ≤ −2')],
      ['Solve ' + m('2^(x²−4) < 1'), m('−2 < x < 2')]
    ],
    hard: [
      ['Solve ' + m('9ˣ − 4·3ˣ + 3 ≤ 0'), m('0 ≤ x ≤ 1')],
      ['Solve ' + m('4ˣ − 5·2ˣ + 4 < 0'), m('0 < x < 2')],
      ['Solve ' + m('25ˣ − 6·5ˣ + 5 > 0'), m('x < 0') + ' or ' + m('x > 1')],
      ['Solve ' + m('2^(x+1) + 2^(x−1) > 20'), m('x > 3')],
      ['Solve ' + m('(½)^(x²) ≥ ' + f('1', '16')), m('−2 ≤ x ≤ 2')],
      ['Solve ' + m('3^(x+1) < 9^(x−1)'), m('x > 3')],
      ['Explain why ' + m('2ˣ > −1') + ' has solution ' + m('ℝ'), 'Every power of 2 is positive']
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Write “base ' + m('> 1') + '” or “base ' + m('< 1') + '” on its own line before flipping anything.',
  homework: [
    'Solve ' + m('2^(3x−2) ≥ 64') + '.',
    'Solve ' + m('(¼)^(x−1) > 16') + '.',
    'Solve ' + m('9ˣ ≤ 3^(x+6)') + '.',
    'Solve ' + m('4ˣ − 10·2ˣ + 16 ≤ 0') + '.',
    'Solve ' + m('3^(x²−9) < 1') + '.',
    'Explain in three sentences why the base decides the direction of the answer.'
  ]
});

/* ============================== 26 ============================== */
G10_ALG.push({
  id: 'a10-26', stream: 'alg', grade: 10, quarter: 3, lessons: '55–56', hours: 2,
  title: 'Control work 5, and work on the mistakes',
  subtitle: 'The exponential block in one paper — and the drill that fixes the base-under-one trap for good.',
  uz: 'Algebra 10, Nazorat ishi 5', uzPage: 'pp. 221–224',
  cam: 'P2 · Chapter 2 review', camPage: 'Pure Mathematics 2 & 3, pp. 45–46', wb: 'Control paper E',
  objectives: [
    'Apply the exponential methods under time.',
    'Decide the direction of an inequality from the base without prompting.',
    'Classify each lost mark as careless, method or knowledge.',
    'Rewrite every wrong solution correctly.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Common base', 'Umumiy asos', 'Общее основание'],
    ['Reversing the sign', 'Ishorani almashtirish', 'Смена знака'],
    ['Substitution', 'Almashtirish', 'Замена'],
    ['Careless error', 'E’tiborsizlik xatosi', 'Ошибка по невнимательности'],
    ['Method error', 'Usul xatosi', 'Ошибка в методе'],
    ['Knowledge gap', 'Bilim bo‘shlig‘i', 'Пробел в знаниях'],
    ['Correction', 'Tuzatish', 'Исправление']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [10, 'Self-mark'], [25, 'Rewrite'], [12, 'The base drill']],
  sections: [
    {
      h: 'The paper — 25 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Sketch ${m('y = 2ˣ − 4')}, with asymptote, range and both intercepts</td><td class="m">4</td><td>L49–50</td></tr>
        <tr><td>2</td><td>Solve ${m('3^(2x+1) = 27')} and ${m('8ˣ = 4')}</td><td class="m">4</td><td>L51–52</td></tr>
        <tr><td>3</td><td>Solve ${m('4ˣ − 6·2ˣ + 8 = 0')}</td><td class="m">4</td><td>L51–52</td></tr>
        <tr><td>4</td><td>Solve ${m('2^(x−1) > 32')} and ${m('(⅕)ˣ ≥ 25')}</td><td class="m">5</td><td>L53–54</td></tr>
        <tr><td>5</td><td>Solve ${m('9ˣ − 10·3ˣ + 9 < 0')}</td><td class="m">4</td><td>L53–54</td></tr>
        <tr><td>6</td><td>A sample of 80 g has half-life 4 days. Find the mass after 12 days, and when 5 g remain</td><td class="m">4</td><td>L49–50</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Q4 carries the whole topic in five marks</div>
      Two for the first part, three for the second — of which one is for stating that the base is less
      than 1 and the sign must reverse.</div>`
    },
    {
      h: 'The three errors',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Error</th><th>Looks like</th><th>Kind</th></tr></thead>
      <tbody>
        <tr><td>sign not reversed</td><td>${m('(½)ˣ > 8 ⇒ x > −3')}</td><td>knowledge</td></tr>
        <tr><td>${m('t > 0')} omitted</td><td>a negative ${m('t')} kept and turned into a false root</td><td>method</td></tr>
        <tr><td>bases not matched</td><td>${m('8ˣ = 4')} attacked without writing ${m('2^(3x) = 2²')}</td><td>method</td></tr>
        <tr><td>power miscopied</td><td>${m('27 = 3³')} written as ${m('3⁴')}</td><td>careless</td></tr>
      </tbody></table></div>
      {{fig:expGraph:The picture that settles every direction question in this paper.}}`
    },
    {
      h: 'The base drill',
      html: `<p>Twelve inequalities on the board. For each, the class calls out only <b>“same”</b> or
      <b>“reverse”</b>, in two seconds:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Inequality</th><th>Call</th></tr></thead>
      <tbody>
        <tr><td class="m">3ˣ &gt; 9</td><td>same</td></tr>
        <tr><td class="m">(⅓)ˣ &gt; 9</td><td>reverse</td></tr>
        <tr><td class="m">0.7ˣ &lt; 0.49</td><td>reverse</td></tr>
        <tr><td class="m">1.5ˣ ≥ 2.25</td><td>same</td></tr>
        <tr><td class="m">(0.2)ˣ ≤ 5</td><td>reverse</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Row 5 is the one they miss</span>
      ${m('5 = (0.2)^(−1)')}. Writing the right-hand side as a power of the <b>same</b> base is what
      makes the comparison possible at all.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q4b: solve ' + m('(⅕)ˣ ≥ 25') + '.',
      steps: [
        ['Base ' + m('⅕ < 1') + ' — the sign will reverse.', 'One mark for this line.'],
        [m('25 = (⅕)^(−2)'), ''],
        [m('x ≤ −2'), '']
      ],
      ans: m('x ≤ −2')
    },
    {
      q: 'Model answer, Q5: solve ' + m('9ˣ − 10·3ˣ + 9 < 0') + '.',
      steps: [
        ['Let ' + m('t = 3ˣ > 0') + '.', m('t² − 10t + 9 < 0')],
        [m('(t − 1)(t − 9) < 0 ⇒ 1 < t < 9'), ''],
        [m('3⁰ < 3ˣ < 3²'), 'Base ' + m('> 1') + ', order preserved.'],
        [m('0 < x < 2'), '']
      ],
      ans: m('0 < x < 2')
    },
    {
      q: 'A learner wrote ' + m('(½)ˣ > 8 ⇒ x > −3') + '. Name the mistake.',
      steps: [
        ['The base is under 1.', ''],
        ['The function decreases, so the inequality reverses.', 'A knowledge gap.'],
        ['Correct: ' + m('x < −3') + '.', '']
      ],
      ans: 'Knowledge gap — the reversal rule'
    }
  ],
  modelNote: 'Run the base drill before the rewrite, and again at the end of the lesson.',
  interactive: {
    type: 'quiz',
    title: 'Same or reverse?',
    hint: 'Only the base decides.',
    items: [
      { q: m('3ˣ > 9') + ':', a: [m('x > 2'), m('x < 2'), m('x > 9'), m('x < 9')], c: 0, why: 'Base ' + m('> 1') + '.' },
      { q: m('(⅓)ˣ > 9') + ':', a: [m('x > 2'), m('x < −2'), m('x > −2'), m('x < 2')], c: 1, why: 'Base ' + m('< 1') + ', and ' + m('9 = (⅓)^(−2)') + '.' },
      { q: m('8ˣ = 4') + ':', a: [m('x = 2'), m('x = ' + f('2', '3')), m('x = 0.5'), m('x = ' + f('3', '2'))], c: 1, why: m('2^(3x) = 2²') + '.' },
      { q: m('4ˣ − 6·2ˣ + 8 = 0') + ':', a: [m('x = 1, 2'), m('x = 2, 4'), m('x = 0, 3'), m('x = 2')], c: 0, why: m('t = 2, 4') + '.' },
      { q: m('2^(x−1) > 32') + ':', a: [m('x > 5'), m('x > 6'), m('x < 6'), m('x > 4')], c: 1, why: m('x − 1 > 5') + '.' },
      { q: '80 g, half-life 4 days, after 12 days:', a: [m('20') + ' g', m('10') + ' g', m('40') + ' g', m('5') + ' g'], c: 1, why: 'Three half-lives.' }
    ]
  },
  quiz: [
    { q: 'The direction of an exponential inequality is decided by:', a: ['the index', 'the base', 'the constant', 'the sign of ' + m('x')], c: 1, why: 'Increasing or decreasing.' },
    { q: 'A substitution must always carry:', a: [m('t ≥ 0'), m('t > 0'), m('t ≠ 0'), 'nothing'], c: 1, why: m('aˣ') + ' is strictly positive.' },
    { q: m('8ˣ = 4') + ' is best done by:', a: ['guessing', 'writing both as powers of 2', 'dividing', 'squaring'], c: 1, why: 'A common base.' },
    { q: 'Three half-lives leave:', a: [m(f('1', '2')), m(f('1', '4')), m(f('1', '8')), m(f('1', '3'))], c: 2, why: m('(½)³') + '.' }
  ],
  practice: {
    easy: [
      ['Solve ' + m('3^(2x+1) = 27'), m('x = 1')],
      ['Solve ' + m('8ˣ = 4'), m('x = ' + f('2', '3'))],
      ['Solve ' + m('2^(x−1) > 32'), m('x > 6')],
      ['Solve ' + m('(⅕)ˣ ≥ 25'), m('x ≤ −2')],
      ['Asymptote of ' + m('y = 2ˣ − 4'), m('y = −4')],
      [m('x') + '-intercept of ' + m('y = 2ˣ − 4'), m('x = 2')],
      ['80 g, half-life 4 days, after 12 days', m('10') + ' g']
    ],
    med: [
      ['Solve ' + m('4ˣ − 6·2ˣ + 8 = 0'), m('x = 1, 2')],
      ['Solve ' + m('9ˣ − 10·3ˣ + 9 < 0'), m('0 < x < 2')],
      ['Range of ' + m('y = 2ˣ − 4'), m('y > −4')],
      ['When do 5 g remain of 80 g with half-life 4 days?', m('16') + ' days'],
      ['Solve ' + m('25ˣ = 5^(x+3)'), m('x = 3')],
      ['Solve ' + m('(0.2)ˣ ≤ 5'), m('x ≥ −1')],
      ['Solve ' + m('2^(x²−1) = 8'), m('x = ±2')]
    ],
    hard: [
      ['Solve ' + m('4ˣ − 2^(x+3) + 12 = 0'), m('x = 1') + ' and ' + m('x = log₂6')],
      ['Solve ' + m('9ˣ − 3^(x+2) + 8 ≥ 0'), m('x ≤ 0') + ' or ' + m('x ≥ log₃8')],
      ['Solve ' + m('2^(2x+1) − 5·2ˣ + 2 = 0'), m('x = −1, 1')],
      ['Sketch ' + m('y = 3^(x−2) + 1') + ': asymptote and ' + m('y') + '-intercept', m('y = 1') + '; ' + m(f('10', '9'))],
      ['A population trebles every 5 years. From 2000, when does it pass 50 000?', m('≈ 14.6') + ' years'],
      ['Solve ' + m('(√2)ˣ = 8'), m('x = 6')],
      ['Solve ' + m('3^(2x) − 12·3ˣ + 27 < 0'), m('1 < x < log₃9') + ' — i.e. ' + m('1 < x < 2')]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Task 1 is the rewrite. State the base rule on every inequality.',
  homework: [
    'Rewrite in full every question that lost a mark, with the base rule stated.',
    'Five problems from the section your knowledge column was heaviest in.',
    'Solve ' + m('16ˣ − 10·4ˣ + 16 = 0') + ' and ' + m('(⅐)^(x+1) > 49') + '.',
    'A sample of ' + m('120') + ' g has half-life 3 hours. Find the mass after 15 hours and the time until ' + m('7.5') + ' g remain.'
  ]
});
