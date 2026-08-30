/* Grade 9 · Algebra · 102 hours (27 / 21 / 30 / 24)
   National KTP 2025–2026, following Algebra 9 §§1–38.
   Cambridge layer: IGCSE Core & Extended, chapters 1–12. */
var G9_ALG = [];

/* ===================== QUARTER I (27 hours) ===================== */

/* ============================== 01 ============================== */
G9_ALG.push({
  id: 'a9-01', stream: 'alg', grade: 9, quarter: 1, lessons: '1–2', hours: 2,
  title: 'Revision of the Grade 8 course, and the entry diagnostic',
  subtitle: 'Four things from last year decide this one: factorising, the discriminant, roots and fractions.',
  uz: 'Algebra 9, Povtorenie', uzPage: 'pp. 3–4',
  cam: 'IGX 1–6 review', camPage: 'Core & Extended, pp. 1–130', wb: 'Diagnostic paper',
  objectives: [
    'Factorise a quadratic trinomial and solve a quadratic equation.',
    'Simplify an algebraic fraction and an expression with roots.',
    'Recognise which Grade 8 skill a Grade 9 question is really testing.',
    'Set a personal target from the diagnostic result.'
  ],
  terms: [
    ['Quadratic equation', 'Kvadrat tenglama', 'Квадратное уравнение'],
    ['Discriminant', 'Diskriminant', 'Дискриминант'],
    ['Factorising', 'Ko‘paytuvchilarga ajratish', 'Разложение на множители'],
    ['Algebraic fraction', 'Algebraik kasr', 'Алгебраическая дробь'],
    ['Arithmetic root', 'Arifmetik ildiz', 'Арифметический корень'],
    ['Vieta’s theorem', 'Viyet teoremasi', 'Теорема Виета'],
    ['Diagnostic test', 'Tashxis testi', 'Диагностический тест'],
    ['Target', 'Maqsad', 'Цель']
  ],
  timing: [[8, 'Why these four'], [20, 'Quadratic equations'], [20, 'Fractions and roots'], [25, 'The diagnostic'], [7, 'Targets']],
  sections: [
    {
      h: 'Why these four',
      html: `<p>Grade 9 opens with the quadratic <b>function</b>, and everything in the first chapter
      rests on four Grade 8 skills. If any one of them is shaky, the whole quarter is harder than it
      needs to be.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Grade 8 skill</th><th>Where it returns</th></tr></thead>
      <tbody>
        <tr><td>factorising ${m('ax² + bx + c')}</td><td>the roots, and where the parabola cuts ${m('Ox')}</td></tr>
        <tr><td>the discriminant</td><td>how many times it cuts ${m('Ox')} at all</td></tr>
        <tr><td>completing the square</td><td>the vertex, and the graph's position</td></tr>
        <tr><td>algebraic fractions</td><td>the method of intervals, and the domain</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">One equation, three readings</div>
      ${m('x² − 5x + 6 = 0')} is a question about <b>numbers</b> (${m('x = 2')} or ${m('3')}), about a
      <b>picture</b> (a parabola crossing ${m('Ox')} at ${m('2')} and ${m('3')}) and about a
      <b>product</b> (${m('(x − 2)(x − 3) = 0')}). Grade 9 uses all three at once, and the whole of
      this quarter is easier once you read them as the same thing.</div>`
    },
    {
      h: 'Quadratic equations',
      html: `${eq(m('ax² + bx + c = 0') + ',   ' + m('D = b² − 4ac') + ',   ' + m('x = ' + f('−b ± ' + sr('D'), '2a')), true)}
      {{fig:discriminantCases:Three signs of D, three pictures.}}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">D</th><th>Roots</th><th>The parabola</th></tr></thead>
      <tbody>
        <tr><td class="m">D > 0</td><td>two different</td><td>cuts ${m('Ox')} twice</td></tr>
        <tr><td class="m">D = 0</td><td>one repeated</td><td>touches ${m('Ox')}</td></tr>
        <tr><td class="m">D &lt; 0</td><td>none real</td><td>misses ${m('Ox')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Vieta first, formula second</div>
      For ${m('x² + px + q = 0')}: ${m('x₁ + x₂ = −p')} and ${m('x₁x₂ = q')}. Two whole numbers whose
      sum is ${m('−p')} and whose product is ${m('q')} are usually visible in a second — and when they
      are, the formula is a waste of a minute.</div>`
    },
    {
      h: 'Fractions and roots',
      html: `<p><b>Cancel only factors.</b> ${m(f('x² − 9', 'x + 3') + ' = ' + f('(x − 3)(x + 3)', 'x + 3') + ' = x − 3')},
      but only where ${m('x ≠ −3')} — cancelling changes the domain, and Grade 9 will make that
      matter.</p>
      ${eq(m(sr('ab') + ' = ' + sr('a') + '·' + sr('b')) + '     ' + m(sr(f('a', 'b')) + ' = ' + f(sr('a'), sr('b'))) + '     ' + m(sr('a²') + ' = |a|'), true)}
      <div class="warn"><span class="wl">${m(sr('a²'))} is ${m('|a|')}, not ${m('a')}</span>
      ${m(sr('(−5)²') + ' = ' + sr('25') + ' = 5')}, not ${m('−5')}. The arithmetic root is never
      negative, and this single fact is behind half the sign errors of the year.</div>`
    },
    {
      h: 'The diagnostic',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>№</th><th>Question</th><th>Skill</th></tr></thead>
      <tbody>
        <tr><td class="m">1</td><td>Factorise ${m('x² − 7x + 12')}</td><td>factorising</td></tr>
        <tr><td class="m">2</td><td>Solve ${m('2x² − 5x − 3 = 0')}</td><td>the formula</td></tr>
        <tr><td class="m">3</td><td>Solve ${m('x² + 4x + 7 = 0')}</td><td>reading ${m('D < 0')}</td></tr>
        <tr><td class="m">4</td><td>Simplify ${m(f('x² − 4', 'x² + 4x + 4'))}</td><td>fractions</td></tr>
        <tr><td class="m">5</td><td>Simplify ${m(sr('50') + ' − ' + sr('18'))}</td><td>roots</td></tr>
        <tr><td class="m">6</td><td>Write ${m('x² − 6x + 5')} as ${m('(x − m)² + n')}</td><td>completing the square</td></tr>
        <tr><td class="m">7</td><td>Find ${m('x₁ + x₂')} and ${m('x₁x₂')} for ${m('x² − 8x + 15 = 0')}</td><td>Vieta</td></tr>
        <tr><td class="m">8</td><td>Solve ${m(f('1', 'x') + ' + ' + f('1', 'x + 1') + ' = ' + f('3', '2'))}</td><td>fractional equations</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">What the score means</div>
      Do not count the total. Count how many of the four skills you lost a mark on. One weak skill is
      about twenty minutes of practice; three weak skills is why Chapter I will feel impossible, and
      is worth fixing this week rather than in December.</div>`
    }
  ],
  examples: [
    {
      q: 'Solve ' + m('2x² − 5x − 3 = 0') + '.',
      steps: [
        [m('D = 25 + 24 = 49'), ''],
        [m(sr('D') + ' = 7'), ''],
        [m('x = ' + f('5 ± 7', '4')), ''],
        [m('x = 3') + ' or ' + m('x = −0.5'), '']
      ],
      ans: m('x = 3') + ' and ' + m('x = −0.5')
    },
    {
      q: 'Simplify ' + m(f('x² − 4', 'x² + 4x + 4')) + '.',
      steps: [
        [m(f('(x − 2)(x + 2)', '(x + 2)²')), 'Factorise both.'],
        [m('= ' + f('x − 2', 'x + 2')), ''],
        [m('x ≠ −2'), 'Say so — the domain did not change.']
      ],
      ans: m(f('x − 2', 'x + 2')) + ', ' + m('x ≠ −2')
    },
    {
      q: 'Write ' + m('x² − 6x + 5') + ' in the form ' + m('(x − m)² + n') + '.',
      steps: [
        [m('x² − 6x = (x − 3)² − 9'), 'Half of ' + m('6') + ', squared.'],
        [m('(x − 3)² − 9 + 5'), ''],
        [m('= (x − 3)² − 4'), 'The vertex will be ' + m('(3, −4)') + '.']
      ],
      ans: m('(x − 3)² − 4')
    }
  ],
  modelNote: 'Put the four skills on the board as four columns and let each pupil tick the ones they are sure of before the test, then compare with the result.',
  interactive: {
    type: 'quadratic',
    title: 'The discriminant in action',
    hint: 'Move a, b and c and watch D decide how many roots there are.'
  },
  quiz: [
    { q: m('D = b² − 4ac') + ' is negative. The equation has:', a: ['two roots', 'one root', 'no real roots', 'infinitely many'], c: 2, why: 'The parabola misses ' + m('Ox') + '.' },
    { q: 'For ' + m('x² + px + q = 0') + ', ' + m('x₁x₂') + ' equals:', a: [m('p'), m('−p'), m('q'), m('−q')], c: 2, why: 'Vieta’s theorem.' },
    { q: m(sr('(−7)²')) + ' equals:', a: [m('−7'), m('7'), m('±7'), m('49')], c: 1, why: 'The arithmetic root is never negative.' },
    { q: 'Cancelling ' + m('x + 3') + ' from ' + m(f('x² − 9', 'x + 3')) + ' requires:', a: ['nothing', m('x ≠ −3'), m('x ≠ 3'), m('x > 0')], c: 1, why: 'The denominator was never zero.' },
    { q: m('x² − 6x + 5') + ' completed is:', a: [m('(x − 3)² − 4'), m('(x − 3)² + 4'), m('(x − 6)² − 31'), m('(x + 3)² − 4')], c: 0, why: 'Half of ' + m('6') + ', squared.' }
  ],
  practice: {
    easy: [
      ['Factorise ' + m('x² − 7x + 12'), m('(x − 3)(x − 4)')],
      ['Factorise ' + m('x² − 25'), m('(x − 5)(x + 5)')],
      ['Solve ' + m('x² − 5x + 6 = 0'), m('x = 2, 3')],
      [m('D') + ' of ' + m('2x² − 5x − 3'), m('49')],
      ['Solve ' + m('2x² − 5x − 3 = 0'), m('x = 3, −0.5')],
      [m(sr('50')) + ' in simplest form', m('5' + sr('2'))],
      [m(sr('(−7)²')), m('7')]
    ],
    med: [
      ['Solve ' + m('x² + 4x + 7 = 0'), 'No real roots — ' + m('D = −12')],
      ['Simplify ' + m(f('x² − 4', 'x² + 4x + 4')), m(f('x − 2', 'x + 2')) + ', ' + m('x ≠ −2')],
      [m(sr('50') + ' − ' + sr('18')), m('2' + sr('2'))],
      ['Complete the square: ' + m('x² − 6x + 5'), m('(x − 3)² − 4')],
      [m('x₁ + x₂') + ' and ' + m('x₁x₂') + ' for ' + m('x² − 8x + 15 = 0'), m('8') + ' and ' + m('15')],
      ['Solve ' + m('x² − 8x + 15 = 0') + ' by Vieta', m('x = 3, 5')],
      ['Factorise ' + m('2x² + 7x + 3'), m('(2x + 1)(x + 3)')]
    ],
    hard: [
      ['Solve ' + m(f('1', 'x') + ' + ' + f('1', 'x + 1') + ' = ' + f('3', '2')), m('x = 2') + ' or ' + m('x = −' + f('1', '3'))],
      ['For which ' + m('k') + ' has ' + m('x² + kx + 9 = 0') + ' one repeated root?', m('k = ±6')],
      ['Simplify ' + m(f('x² − 9', 'x² − 6x + 9') + ' · ' + f('x − 3', 'x + 3')), m('1') + ', ' + m('x ≠ ±3')],
      ['If ' + m('x₁, x₂') + ' are the roots of ' + m('x² − 5x + 3 = 0') + ', find ' + m('x₁² + x₂²'), m('19')],
      ['Solve ' + m('x⁴ − 5x² + 4 = 0'), m('x = ±1, ±2')],
      ['Complete the square: ' + m('2x² − 8x + 3'), m('2(x − 2)² − 5')],
      ['For which ' + m('m') + ' has ' + m('x² − 4x + m = 0') + ' no real roots?', m('m > 4')]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Bring the diagnostic back with the four skills ticked or crossed; the first chapter assumes all four.',
  homework: [
    'Solve ' + m('3x² − 7x + 2 = 0') + ' by the formula and check the roots with Vieta’s theorem.',
    'Simplify ' + m(f('x² − 16', 'x² − 8x + 16')) + ' and state the value of ' + m('x') + ' that must be excluded.',
    'Write ' + m('x² + 10x + 7') + ' in the form ' + m('(x + m)² + n') + '.',
    'Name the one Grade 8 skill you are least sure of, and write in one sentence how you will practise it this week.'
  ]
});

/* ============================== 02 ============================== */
G9_ALG.push({
  id: 'a9-02', stream: 'alg', grade: 9, quarter: 1, lessons: '3–4', hours: 2,
  title: 'The quadratic function, and the graph of y = x²',
  subtitle: 'One curve, and every quadratic graph of the year is a moved and stretched copy of it.',
  uz: 'Algebra 9, §§1–2', uzPage: 'pp. 5–9',
  cam: 'IGX 10.2', camPage: 'Core & Extended, pp. 216–225', wb: 'Exercise 10.2',
  objectives: [
    'State what makes a function quadratic.',
    'Draw y = x² from a table of values and name its parts.',
    'Use the symmetry of the parabola to halve the work.',
    'Read values and solve simple equations from the graph.'
  ],
  terms: [
    ['Quadratic function', 'Kvadratik funksiya', 'Квадратичная функция'],
    ['Parabola', 'Parabola', 'Парабола'],
    ['Vertex', 'Uchi', 'Вершина'],
    ['Axis of symmetry', 'Simmetriya o‘qi', 'Ось симметрии'],
    ['Branch', 'Tarmoq', 'Ветвь'],
    ['Leading coefficient', 'Bosh koeffitsiyent', 'Старший коэффициент'],
    ['Table of values', 'Qiymatlar jadvali', 'Таблица значений'],
    ['Argument', 'Argument', 'Аргумент']
  ],
  timing: [[12, 'What makes a function quadratic'], [22, 'Building the graph'], [20, 'Symmetry'], [20, 'Reading the graph'], [6, 'Homework']],
  sections: [
    {
      h: 'What makes a function quadratic',
      html: `${eq(m('y = ax² + bx + c') + ',   ' + m('a ≠ 0'), true)}
      <p>The condition ${m('a ≠ 0')} is the whole definition. Lose the ${m('x²')} term and the function
      is linear; keep it and the graph is a parabola, whatever ${m('b')} and ${m('c')} do.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Function</th><th>Quadratic?</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td class="m">y = x²</td><td>yes</td><td class="m">a = 1, b = c = 0</td></tr>
        <tr><td class="m">y = −3x² + ${f('1', '2')}x</td><td>yes</td><td class="m">a = −3</td></tr>
        <tr><td class="m">y = x² − 5x + 6</td><td>yes</td><td>the usual form</td></tr>
        <tr><td class="m">y = 2x + 7</td><td>no</td><td>no ${m('x²')} term</td></tr>
        <tr><td class="m">y = ${f('1', 'x²')}</td><td>no</td><td>${m('x²')} is downstairs</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where they come from</div>
      The area of a square of side ${m('x')} is ${m('x²')}. A stone thrown upwards at ${m('v')} m/s from
      height ${m('s₀')} is at ${m('s = −' + f('gt²', '2') + ' + vt + s₀')} after ${m('t')} seconds —
      a quadratic in ${m('t')}. The same curve describes a shape and a motion.</div>`
    },
    {
      h: 'Building the graph',
      html: `<div class="tablewrap"><table>
      <thead><tr><th class="m">x</th><th class="m">−3</th><th class="m">−2</th><th class="m">−1</th><th class="m">0</th><th class="m">1</th><th class="m">2</th><th class="m">3</th></tr></thead>
      <tbody><tr><td class="m">y = x²</td><td class="m">9</td><td class="m">4</td><td class="m">1</td><td class="m">0</td><td class="m">1</td><td class="m">4</td><td class="m">9</td></tr></tbody></table></div>
      {{fig:parabola:y = x² — the vertex at the origin, the axis Oy, and both branches upward.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Part</th><th>Where</th></tr></thead>
      <tbody>
        <tr><td>vertex</td><td class="m">(0, 0)</td></tr>
        <tr><td>axis of symmetry</td><td>${m('x = 0')}, the ${m('Oy')} axis</td></tr>
        <tr><td>branches</td><td>upward, because ${m('a = 1 > 0')}</td></tr>
        <tr><td>least value</td><td>${m('y = 0')}, at the vertex</td></tr>
        <tr><td>range</td><td class="m">y ≥ 0</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Plot enough points, and join with a curve</span>
      Three points are not a parabola — they are a guess. Take seven, and join them with one smooth
      sweep, not with straight segments. The vertex is a <b>turn</b>, never a corner.</div>`
    },
    {
      h: 'Symmetry',
      html: `<p>${m('(−x)² = x²')}, so the two branches are mirror images in ${m('Oy')}. That halves the
      work: compute ${m('y')} for ${m('x = 1, 2, 3')} and the negative side is free.</p>
      ${eq(m('f(−x) = f(x)') + '   — the parabola ' + m('y = x²') + ' is an <b>even</b> function', true)}
      <div class="keybox"><div class="klabel">Two points at the same height</div>
      If ${m('y = 9')} then ${m('x = 3')} or ${m('x = −3')}: every horizontal line above the vertex
      meets the parabola <b>twice</b>, at points equidistant from the axis. Lesson 9 turns that single
      observation into the whole method for quadratic inequalities.</div>`
    },
    {
      h: 'Reading the graph',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>Read off</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>the value of ${m('1.5²')}</td><td>up from ${m('x = 1.5')}</td><td class="m">≈ 2.25</td></tr>
        <tr><td>${m(sr('5'))}</td><td>across from ${m('y = 5')}</td><td class="m">≈ 2.2</td></tr>
        <tr><td>solve ${m('x² = 4')}</td><td>the line ${m('y = 4')}</td><td class="m">x = ±2</td></tr>
        <tr><td>solve ${m('x² = −1')}</td><td>the line ${m('y = −1')}</td><td>no solution</td></tr>
      </tbody></table></div>
      <p>The last row is worth pausing on. The line ${m('y = −1')} passes below the vertex and never
      meets the curve, so ${m('x² = −1')} has no real solution — the same fact as ${m('D < 0')}, read
      from a picture instead of a formula.</p>`
    }
  ],
  examples: [
    {
      q: 'Which of ' + m('y = 5x²') + ', ' + m('y = 5x') + ', ' + m('y = 5 − x²') + ' are quadratic?',
      steps: [
        [m('y = 5x²') + ': ' + m('a = 5 ≠ 0') + ' — yes.', ''],
        [m('y = 5x') + ': no ' + m('x²') + ' term — no.', ''],
        [m('y = 5 − x²') + ': ' + m('a = −1 ≠ 0') + ' — yes.', '']
      ],
      ans: 'The first and the third'
    },
    {
      q: 'Use the graph of ' + m('y = x²') + ' to solve ' + m('x² = 6.25') + '.',
      steps: [
        ['Draw the line ' + m('y = 6.25') + '.', ''],
        ['It meets the curve twice, symmetrically.', ''],
        [m('x = ±2.5'), 'Check: ' + m('2.5² = 6.25') + '.']
      ],
      ans: m('x = 2.5') + ' and ' + m('x = −2.5')
    },
    {
      q: 'The point ' + m('(a, 49)') + ' lies on ' + m('y = x²') + '. Find ' + m('a') + '.',
      steps: [
        [m('a² = 49'), ''],
        [m('a = ±7'), 'Two points, by symmetry.']
      ],
      ans: m('a = 7') + ' or ' + m('a = −7')
    }
  ],
  modelNote: 'Hang a light chain from two points — the class sees a curve that looks parabolic, then checks whether it really is by measuring.',
  interactive: {
    type: 'graphTransform',
    title: 'The parabola, moved and stretched',
    hint: 'Leave a at 1 and b, c at 0 to see y = x² itself.'
  },
  quiz: [
    { q: m('y = ax² + bx + c') + ' is quadratic when:', a: [m('a ≠ 0'), m('b ≠ 0'), m('c ≠ 0'), 'always'], c: 0, why: 'Otherwise it is linear.' },
    { q: 'The vertex of ' + m('y = x²') + ' is:', a: [m('(1, 1)'), m('(0, 0)'), m('(0, 1)'), m('(−1, 1)')], c: 1, why: 'Its least point.' },
    { q: 'Its axis of symmetry is:', a: [m('y = 0'), m('x = 0'), m('y = x'), 'none'], c: 1, why: 'The ' + m('Oy') + ' axis.' },
    { q: m('x² = 9') + ' has:', a: ['one solution', 'two solutions', 'no solution', 'three'], c: 1, why: m('x = ±3') + '.' },
    { q: m('x² = −4') + ' has:', a: ['one solution', 'two solutions', 'no real solution', m('x = −2')], c: 2, why: 'The line is below the vertex.' },
    { q: m('y = x²') + ' is an even function because:', a: [m('x²') + ' is positive', m('f(−x) = f(x)'), 'it is a curve', 'of the vertex'], c: 1, why: 'Symmetric in ' + m('Oy') + '.' }
  ],
  practice: {
    easy: [
      [m('y') + ' at ' + m('x = 4') + ' on ' + m('y = x²'), m('16')],
      [m('y') + ' at ' + m('x = −4'), m('16')],
      ['Vertex of ' + m('y = x²'), m('(0, 0)')],
      ['Axis of symmetry of ' + m('y = x²'), m('x = 0')],
      ['Solve ' + m('x² = 25'), m('x = ±5')],
      ['Is ' + m('y = 3x²') + ' quadratic?', 'Yes'],
      ['Is ' + m('y = 3x + 1') + ' quadratic?', 'No']
    ],
    med: [
      ['Solve ' + m('x² = 6.25'), m('x = ±2.5')],
      ['Solve ' + m('x² = −4'), 'No real solution'],
      [m('a') + ' if ' + m('(a, 49)') + ' lies on ' + m('y = x²'), m('a = ±7')],
      ['Range of ' + m('y = x²'), m('y ≥ 0')],
      ['Least value of ' + m('y = x²'), m('0') + ', at ' + m('x = 0')],
      ['Which is quadratic: ' + m('y = 5x²') + ', ' + m('y = 5x') + ', ' + m('y = 5 − x²') + '?', 'The first and the third'],
      ['Estimate ' + m(sr('5')) + ' from the graph', m('≈ 2.2')]
    ],
    hard: [
      ['For which ' + m('c') + ' does ' + m('y = x²') + ' meet ' + m('y = c') + ' exactly once?', m('c = 0')],
      ['The chord of ' + m('y = x²') + ' at height ' + m('h > 0') + ': its length', m('2' + sr('h'))],
      ['Points of ' + m('y = x²') + ' at distance ' + m('5') + ' from the origin', m('(±2, 4)')],
      ['Where does ' + m('y = x²') + ' meet ' + m('y = x') + '?', m('(0, 0)') + ' and ' + m('(1, 1)')],
      ['Where does ' + m('y = x²') + ' meet ' + m('y = 2x + 3') + '?', m('(−1, 1)') + ' and ' + m('(3, 9)')],
      ['Show that ' + m('y = x²') + ' lies above ' + m('y = x') + ' for ' + m('x > 1'), m('x² − x = x(x − 1) > 0')],
      ['A square of side ' + m('x') + ' has area ' + m('30') + ': estimate ' + m('x') + ' from the graph', m('≈ 5.5')]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Draw the graph on squared paper with seven points; keep it — the next four lessons all use it.',
  homework: [
    'Make a table of ' + m('y = x²') + ' for ' + m('x') + ' from ' + m('−4') + ' to ' + m('4') + ' and draw the graph.',
    'From your graph, estimate ' + m('2.5²') + ', ' + m(sr('7')) + ' and the solutions of ' + m('x² = 10') + '.',
    'Find both points of ' + m('y = x²') + ' whose ' + m('y') + '-coordinate is ' + m('64') + '.',
    'Explain in two sentences why ' + m('x² = −9') + ' has no solution, using the graph rather than the discriminant.'
  ]
});

/* ============================== 03 ============================== */
G9_ALG.push({
  id: 'a9-03', stream: 'alg', grade: 9, quarter: 1, lessons: '5–6', hours: 2,
  title: 'The graphs of y = ax² and y = ax² + bx + c',
  subtitle: 'a decides the shape, and completing the square moves the whole curve without changing it.',
  uz: 'Algebra 9, §§3–4', uzPage: 'pp. 10–17',
  cam: 'IGX 10.2', camPage: 'Core & Extended, pp. 216–225', wb: 'Exercise 10.2',
  objectives: [
    'Describe the effect of a on the shape and direction of the parabola.',
    'Recognise y = a(x − m)² + n as y = ax² translated.',
    'Convert y = ax² + bx + c to vertex form by completing the square.',
    'Read the vertex, the axis and the least or greatest value from either form.'
  ],
  terms: [
    ['Leading coefficient', 'Bosh koeffitsiyent', 'Старший коэффициент'],
    ['Stretch', 'Cho‘zish', 'Растяжение'],
    ['Translation', 'Parallel ko‘chirish', 'Параллельный перенос'],
    ['Vertex form', 'Uchi ko‘rinishi', 'Вершинная форма'],
    ['Completing the square', 'To‘la kvadratga keltirish', 'Выделение полного квадрата'],
    ['Greatest value', 'Eng katta qiymat', 'Наибольшее значение'],
    ['Least value', 'Eng kichik qiymat', 'Наименьшее значение'],
    ['Axis of symmetry', 'Simmetriya o‘qi', 'Ось симметрии']
  ],
  timing: [[18, 'What a does'], [22, 'Moving the parabola'], [25, 'Completing the square'], [20, 'Reading either form'], [15, 'Homework']],
  sections: [
    {
      h: 'What a does',
      html: `<p>${m('y = ax²')} is ${m('y = x²')} with every height multiplied by ${m('a')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">a</th><th>Branches</th><th>Shape</th></tr></thead>
      <tbody>
        <tr><td class="m">a > 1</td><td>upward</td><td>narrower than ${m('y = x²')}</td></tr>
        <tr><td class="m">0 &lt; a &lt; 1</td><td>upward</td><td>wider</td></tr>
        <tr><td class="m">a &lt; 0</td><td>downward</td><td>reflected in ${m('Ox')}</td></tr>
      </tbody></table></div>
      {{fig:transformStretch:The same parabola stretched — a changes the height of every point.}}
      <div class="keybox"><div class="klabel">The sign of ${m('a')} answers half the question</div>
      ${m('a > 0')}: the vertex is the <b>lowest</b> point, and the function has a least value and no
      greatest. ${m('a < 0')}: the vertex is the <b>highest</b> point, and it is the other way round.
      Decide the sign before anything else and the rest follows.</div>`
    },
    {
      h: 'Moving the parabola',
      html: `${eq(m('y = a(x − m)² + n') + '   — the vertex is at ' + m('(m, n)'), true)}
      {{fig:transformShift:Along by m, up by n — the curve itself never changes.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Equation</th><th>Vertex</th><th>Axis</th><th>Least or greatest</th></tr></thead>
      <tbody>
        <tr><td class="m">y = x²</td><td class="m">(0, 0)</td><td class="m">x = 0</td><td>least ${m('0')}</td></tr>
        <tr><td class="m">y = (x − 3)²</td><td class="m">(3, 0)</td><td class="m">x = 3</td><td>least ${m('0')}</td></tr>
        <tr><td class="m">y = (x − 3)² − 4</td><td class="m">(3, −4)</td><td class="m">x = 3</td><td>least ${m('−4')}</td></tr>
        <tr><td class="m">y = −2(x + 1)² + 5</td><td class="m">(−1, 5)</td><td class="m">x = −1</td><td>greatest ${m('5')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The bracket sign is reversed</span>
      ${m('(x − 3)²')} moves the curve <b>right</b> by ${m('3')}; ${m('(x + 1)²')} moves it
      <b>left</b> by ${m('1')}. Read ${m('(x + 1)')} as ${m('(x − (−1))')} and the trap disappears.</div>`
    },
    {
      h: 'Completing the square',
      html: `<p>Any ${m('y = ax² + bx + c')} becomes ${m('y = a(x − m)² + n')} in three lines.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th class="m">y = 2x² − 12x + 13</th></tr></thead>
      <tbody>
        <tr><td>take out ${m('a')}</td><td class="m">2(x² − 6x) + 13</td></tr>
        <tr><td>complete inside</td><td class="m">2[(x − 3)² − 9] + 13</td></tr>
        <tr><td>expand and tidy</td><td class="m">2(x − 3)² − 18 + 13 = 2(x − 3)² − 5</td></tr>
      </tbody></table></div>
      {{fig:completeSquare:The square completed — the constant that had to be added, and taken away again.}}
      <div class="keybox"><div class="klabel">Or use the formula for the axis</div>
      ${eq(m('x_vertex = −' + f('b', '2a')) + ',   then ' + m('y_vertex = f(x_vertex)'), true)}
      For ${m('2x² − 12x + 13')}: ${m('x = ' + f('12', '4') + ' = 3')}, ${m('y = f(3) = −5')} — the same
      vertex ${m('(3, −5)')} in one line. Completing the square is worth learning anyway, because it is
      how the quadratic formula itself is proved.</div>`
    },
    {
      h: 'Reading either form',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Wanted</th><th>From ${m('a(x − m)² + n')}</th><th>From ${m('ax² + bx + c')}</th></tr></thead>
      <tbody>
        <tr><td>vertex</td><td class="m">(m, n)</td><td class="m">(−${f('b', '2a')}, f(−${f('b', '2a')}))</td></tr>
        <tr><td>axis</td><td class="m">x = m</td><td class="m">x = −${f('b', '2a')}</td></tr>
        <tr><td>${m('y')}-intercept</td><td class="m">am² + n</td><td class="m">c</td></tr>
        <tr><td>roots</td><td class="m">m ± ${sr('−' + f('n', 'a'))}</td><td class="m">${f('−b ± ' + sr('D'), '2a')}</td></tr>
      </tbody></table></div>
      <p>Each form answers one question instantly and the other with a little work. The vertex form gives
      the turning point; the expanded form gives the ${m('y')}-intercept. Convert whichever way the
      question points.</p>`
    }
  ],
  examples: [
    {
      q: 'Write ' + m('y = 2x² − 12x + 13') + ' in vertex form and state the least value.',
      steps: [
        [m('2(x² − 6x) + 13'), ''],
        [m('2[(x − 3)² − 9] + 13'), ''],
        [m('2(x − 3)² − 5'), ''],
        ['Least value ' + m('−5') + ' at ' + m('x = 3') + '.', m('a > 0') + ', so the vertex is lowest.']
      ],
      ans: m('y = 2(x − 3)² − 5') + '; least value ' + m('−5')
    },
    {
      q: 'Find the vertex of ' + m('y = −x² + 6x − 5') + ' and say whether it is a maximum.',
      steps: [
        [m('x = −' + f('6', '−2') + ' = 3'), ''],
        [m('y = −9 + 18 − 5 = 4'), ''],
        [m('a = −1 < 0'), ''],
        ['Vertex ' + m('(3, 4)') + ' — a maximum.', '']
      ],
      ans: m('(3, 4)') + ', a greatest value of ' + m('4')
    },
    {
      q: 'A parabola has vertex ' + m('(−2, 1)') + ' and passes through ' + m('(0, 9)') + '. Find its equation.',
      steps: [
        [m('y = a(x + 2)² + 1'), ''],
        [m('9 = a(4) + 1'), 'Substitute ' + m('(0, 9)') + '.'],
        [m('a = 2'), ''],
        [m('y = 2(x + 2)² + 1'), '']
      ],
      ans: m('y = 2(x + 2)² + 1')
    }
  ],
  modelNote: 'Draw y = x² once on the board and then slide a tracing-paper copy of it — every equation of the lesson is that one curve in a new place.',
  interactive: {
    type: 'graphTransform',
    title: 'a, m and n on one parabola',
    hint: 'Move each slider alone and name what it changed.'
  },
  quiz: [
    { q: m('a < 0') + ' means the branches point:', a: ['up', 'down', 'sideways', 'either way'], c: 1, why: 'Reflected in ' + m('Ox') + '.' },
    { q: 'The vertex of ' + m('y = (x − 4)² + 3') + ' is:', a: [m('(4, 3)'), m('(−4, 3)'), m('(4, −3)'), m('(3, 4)')], c: 0, why: 'Reverse the bracket sign.' },
    { q: 'The vertex of ' + m('y = (x + 1)² − 2') + ' is:', a: [m('(1, −2)'), m('(−1, −2)'), m('(−1, 2)'), m('(1, 2)')], c: 1, why: m('(x − (−1))²') + '.' },
    { q: 'The axis of ' + m('y = ax² + bx + c') + ' is:', a: [m('x = ' + f('b', '2a')), m('x = −' + f('b', '2a')), m('x = ' + f('b', 'a')), m('x = c')], c: 1, why: 'Halfway between the roots.' },
    { q: 'For ' + m('a > 0') + ' the vertex gives:', a: ['a greatest value', 'a least value', 'neither', 'both'], c: 1, why: 'The lowest point.' },
    { q: m('y = 2(x − 3)² − 5') + ' has ' + m('y') + '-intercept:', a: [m('−5'), m('13'), m('3'), m('2')], c: 1, why: 'Put ' + m('x = 0') + '.' }
  ],
  practice: {
    easy: [
      ['Vertex of ' + m('y = (x − 2)²'), m('(2, 0)')],
      ['Vertex of ' + m('y = x² + 5'), m('(0, 5)')],
      ['Vertex of ' + m('y = (x + 3)² − 1'), m('(−3, −1)')],
      ['Branches of ' + m('y = −4x²'), 'Downward'],
      ['Which is narrower, ' + m('y = 3x²') + ' or ' + m('y = ' + f('1', '3') + 'x²') + '?', m('y = 3x²')],
      ['Axis of ' + m('y = x² − 6x + 1'), m('x = 3')],
      [m('y') + '-intercept of ' + m('y = 2x² − 5x + 7'), m('7')]
    ],
    med: [
      ['Vertex form of ' + m('y = x² − 6x + 5'), m('(x − 3)² − 4')],
      ['Vertex form of ' + m('y = 2x² − 12x + 13'), m('2(x − 3)² − 5')],
      ['Vertex of ' + m('y = −x² + 6x − 5'), m('(3, 4)') + ', a maximum'],
      ['Least value of ' + m('y = x² + 4x + 9'), m('5') + ' at ' + m('x = −2')],
      ['Greatest value of ' + m('y = −2x² + 8x − 3'), m('5') + ' at ' + m('x = 2')],
      ['Equation with vertex ' + m('(−2, 1)') + ' through ' + m('(0, 9)'), m('y = 2(x + 2)² + 1')],
      ['Vertex form of ' + m('y = 3x² + 6x'), m('3(x + 1)² − 3')]
    ],
    hard: [
      ['For which ' + m('k') + ' is the least value of ' + m('y = x² − 4x + k') + ' equal to ' + m('3') + '?', m('k = 7')],
      ['A parabola through ' + m('(0, 3), (1, 0), (4, 3)') + ': find its equation', m('y = x² − 4x + 3')],
      ['The vertex of ' + m('y = x² + bx + 7') + ' lies on ' + m('Ox') + ': find ' + m('b'), m('b = ±2' + sr('7'))],
      ['Range of ' + m('y = −3(x − 1)² + 12'), m('y ≤ 12')],
      ['Show that ' + m('y = x² + px + q') + ' has least value ' + m('q − ' + f('p²', '4')), 'Complete the square'],
      ['A ball follows ' + m('h = −5t² + 20t') + ': its greatest height and when', m('20') + ' m at ' + m('t = 2') + ' s'],
      ['Two parabolas ' + m('y = x²') + ' and ' + m('y = −x² + 8') + ': where do they meet?', m('(±2, 4)')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write the vertex on its own line before drawing anything.',
  homework: [
    'Write ' + m('y = x² − 8x + 11') + ' in vertex form and state the vertex and the least value.',
    'Write ' + m('y = −2x² + 4x + 1') + ' in vertex form and state the greatest value.',
    'Find the equation of the parabola with vertex ' + m('(1, −3)') + ' passing through ' + m('(3, 5)') + '.',
    'Sketch ' + m('y = (x − 2)² − 9') + ', marking the vertex, the axis and both roots.',
    'Explain in two sentences why ' + m('(x + 4)²') + ' moves the graph left and not right.'
  ]
});

/* ============================== 04 ============================== */
G9_ALG.push({
  id: 'a9-04', stream: 'alg', grade: 9, quarter: 1, lessons: '7–8', hours: 2,
  title: 'Drawing the graph of a quadratic function',
  subtitle: 'Five marks on the paper — vertex, axis, two roots and the intercept — and the curve draws itself.',
  uz: 'Algebra 9, §5', uzPage: 'pp. 18–23',
  cam: 'IGX 10.2', camPage: 'Core & Extended, pp. 216–225', wb: 'Exercise 10.2',
  objectives: [
    'Sketch a parabola from its vertex, roots and y-intercept.',
    'Use the discriminant to decide whether the roots exist before looking for them.',
    'Read the range, and the intervals where the function is positive or negative.',
    'Match an equation to a graph and a graph to an equation.'
  ],
  terms: [
    ['Sketch', 'Eskiz', 'Эскиз'],
    ['Root (zero)', 'Nol', 'Нуль функции'],
    ['Intercept', 'Kesish nuqtasi', 'Точка пересечения'],
    ['Range', 'Qiymatlar sohasi', 'Область значений'],
    ['Discriminant', 'Diskriminant', 'Дискриминант'],
    ['Positive interval', 'Musbat oraliq', 'Промежуток положительности'],
    ['Symmetry', 'Simmetriya', 'Симметрия'],
    ['Turning point', 'Burilish nuqtasi', 'Точка поворота']
  ],
  timing: [[15, 'The five marks'], [25, 'A worked sketch'], [20, 'Reading the sketch'], [20, 'Matching graphs'], [10, 'Homework']],
  sections: [
    {
      h: 'The five marks',
      html: `<div class="keybox"><div class="klabel">Every sketch, in the same order</div>
      <ol>
        <li>The <b>sign of ${m('a')}</b> — up or down. Decide first, draw last.</li>
        <li>The <b>${m('y')}-intercept</b>: put ${m('x = 0')}, giving ${m('c')}. Free.</li>
        <li>The <b>roots</b>: solve ${m('ax² + bx + c = 0')}, if ${m('D ≥ 0')}.</li>
        <li>The <b>axis</b>: ${m('x = −' + f('b', '2a'))}, or halfway between the roots.</li>
        <li>The <b>vertex</b>: on the axis, at ${m('y = f(−' + f('b', '2a') + ')')}.</li>
      </ol>
      Mark all five, then join them with one smooth curve.</div>
      {{fig:quadGraph:The five marks, and the curve through them.}}`
    },
    {
      h: 'A worked sketch',
      html: `<p><b>Sketch ${m('y = x² − 2x − 3')}.</b></p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Working</th><th>Mark</th></tr></thead>
      <tbody>
        <tr><td>direction</td><td class="m">a = 1 > 0</td><td>opens upward</td></tr>
        <tr><td>${m('y')}-intercept</td><td class="m">c = −3</td><td class="m">(0, −3)</td></tr>
        <tr><td>roots</td><td class="m">(x − 3)(x + 1) = 0</td><td class="m">(3, 0), (−1, 0)</td></tr>
        <tr><td>axis</td><td class="m">x = ${f('3 + (−1)', '2')} = 1</td><td class="m">x = 1</td></tr>
        <tr><td>vertex</td><td class="m">f(1) = 1 − 2 − 3 = −4</td><td class="m">(1, −4)</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The axis is halfway between the roots, always</span>
      ${m(f('x₁ + x₂', '2'))} is the same number as ${m('−' + f('b', '2a'))} — Vieta guarantees it. If
      your two answers disagree, one of them is wrong, and the check costs five seconds.</div>`
    },
    {
      h: 'Reading the sketch',
      html: `<p>Once the picture exists, four more questions are free.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>For ${m('y = x² − 2x − 3')}</th></tr></thead>
      <tbody>
        <tr><td>range</td><td class="m">y ≥ −4</td></tr>
        <tr><td>where ${m('y > 0')}</td><td class="m">x &lt; −1 or x > 3</td></tr>
        <tr><td>where ${m('y < 0')}</td><td class="m">−1 &lt; x &lt; 3</td></tr>
        <tr><td>decreasing on</td><td class="m">x ≤ 1</td></tr>
        <tr><td>increasing on</td><td class="m">x ≥ 1</td></tr>
      </tbody></table></div>
      {{fig:quadSignChart:Positive outside the roots, negative between them — for an upward parabola.}}
      <div class="keybox"><div class="klabel">Outside and between</div>
      For ${m('a > 0')}: <b>positive outside</b> the roots, <b>negative between</b> them. For
      ${m('a < 0')} it is the other way round. Lessons 9–12 are this one sentence, applied.</div>`
    },
    {
      h: 'Matching graphs',
      html: `<p>Given four graphs and four equations, three checks decide every pairing.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Look at</th><th>It tells you</th></tr></thead>
      <tbody>
        <tr><td>the direction of the branches</td><td>the sign of ${m('a')}</td></tr>
        <tr><td>where the curve cuts ${m('Oy')}</td><td class="m">c</td></tr>
        <tr><td>how many times it cuts ${m('Ox')}</td><td>the sign of ${m('D')}</td></tr>
      </tbody></table></div>
      <p><b>Example.</b> A downward parabola cutting ${m('Oy')} at ${m('4')} and missing ${m('Ox')}
      needs ${m('a < 0')}, ${m('c = 4')} and ${m('D < 0')}. Among
      ${m('y = −x² + 4')}, ${m('y = −x² + x − 4')}, ${m('y = −x² − x + 4')} and ${m('y = x² + 4')},
      only the second has ${m('c = −4')}, so it is out on the intercept; the first and third cut
      ${m('Ox')}; so it is none of them — and a fourth equation is needed. Checking all three, and
      saying when none fits, is the skill.</p>`
    }
  ],
  examples: [
    {
      q: 'Sketch ' + m('y = x² − 2x − 3') + ', marking all five features.',
      steps: [
        [m('a = 1 > 0') + ' — upward.', ''],
        [m('(0, −3)') + '; roots ' + m('x = −1, 3') + '.', ''],
        ['Axis ' + m('x = 1') + '.', 'Halfway between the roots.'],
        ['Vertex ' + m('(1, −4)') + '.', '']
      ],
      ans: 'Vertex ' + m('(1, −4)') + ', roots ' + m('−1') + ' and ' + m('3')
    },
    {
      q: 'Sketch ' + m('y = −x² + 4x') + ' and state its range.',
      steps: [
        [m('a = −1 < 0') + ' — downward.', ''],
        [m('−x(x − 4) = 0') + ', so roots ' + m('0') + ' and ' + m('4') + '.', ''],
        ['Axis ' + m('x = 2') + '; vertex ' + m('(2, 4)') + '.', ''],
        ['Range ' + m('y ≤ 4') + '.', 'The vertex is highest.']
      ],
      ans: 'Vertex ' + m('(2, 4)') + '; range ' + m('y ≤ 4')
    },
    {
      q: 'A parabola opens upward, cuts ' + m('Oy') + ' at ' + m('6') + ' and touches ' + m('Ox') + '. What can be said about it?',
      steps: [
        [m('a > 0') + ' and ' + m('c = 6') + '.', ''],
        ['Touching means ' + m('D = 0') + ', so ' + m('b² = 4ac = 24a') + '.', ''],
        ['With ' + m('a = 1') + ': ' + m('b = ±2' + sr('6')) + '.', ''],
        ['The repeated root is ' + m('−' + f('b', '2') + ' = ∓' + sr('6')) + '.', '']
      ],
      ans: m('y = x² ± 2' + sr('6') + 'x + 6') + ' is one such parabola'
    }
  ],
  modelNote: 'Give each pupil one equation and one blank grid; pin the finished sketches side by side and let the class find the two that disagree.',
  interactive: {
    type: 'quadratic',
    title: 'Five marks, one curve',
    hint: 'Change c and watch only the intercept move.'
  },
  quiz: [
    { q: 'The axis of symmetry lies:', a: ['at the ' + m('y') + '-intercept', 'halfway between the roots', 'at ' + m('x = 0'), 'at the larger root'], c: 1, why: 'And equals ' + m('−' + f('b', '2a')) + '.' },
    { q: 'For ' + m('a > 0') + ', ' + m('y > 0') + ':', a: ['between the roots', 'outside the roots', 'everywhere', 'nowhere'], c: 1, why: 'The middle dips below.' },
    { q: 'The ' + m('y') + '-intercept of ' + m('y = ax² + bx + c') + ' is:', a: [m('a'), m('b'), m('c'), m('0')], c: 2, why: 'Put ' + m('x = 0') + '.' },
    { q: 'A parabola touching ' + m('Ox') + ' has:', a: [m('D > 0'), m('D = 0'), m('D < 0'), m('a = 0')], c: 1, why: 'One repeated root.' },
    { q: 'The range of ' + m('y = −x² + 4x') + ' is:', a: [m('y ≥ 4'), m('y ≤ 4'), m('y ≥ 0'), 'all ' + m('y')], c: 1, why: 'The vertex is highest.' },
    { q: m('y = x² − 2x − 3') + ' decreases on:', a: [m('x ≤ 1'), m('x ≥ 1'), 'all ' + m('x'), m('x ≤ 0')], c: 0, why: 'Left of the axis.' }
  ],
  practice: {
    easy: [
      ['Roots of ' + m('y = x² − 2x − 3'), m('−1') + ' and ' + m('3')],
      ['Axis of the same', m('x = 1')],
      ['Vertex of the same', m('(1, −4)')],
      [m('y') + '-intercept of the same', m('−3')],
      ['Direction of ' + m('y = −2x² + x'), 'Downward'],
      ['Roots of ' + m('y = x² − 9'), m('±3')],
      ['Vertex of ' + m('y = x² − 9'), m('(0, −9)')]
    ],
    med: [
      ['Sketch data for ' + m('y = −x² + 4x'), 'Roots ' + m('0, 4') + '; vertex ' + m('(2, 4)')],
      ['Range of ' + m('y = x² − 2x − 3'), m('y ≥ −4')],
      ['Where is ' + m('x² − 2x − 3 > 0') + '?', m('x < −1') + ' or ' + m('x > 3')],
      ['Where is ' + m('x² − 2x − 3 < 0') + '?', m('−1 < x < 3')],
      ['Sketch data for ' + m('y = x² − 6x + 9'), 'Touches ' + m('Ox') + ' at ' + m('(3, 0)')],
      ['Sketch data for ' + m('y = x² + 2x + 5'), 'No roots; vertex ' + m('(−1, 4)')],
      ['Increasing interval of ' + m('y = −x² + 4x'), m('x ≤ 2')]
    ],
    hard: [
      ['A parabola with roots ' + m('−2') + ' and ' + m('5') + ' through ' + m('(0, −10)'), m('y = x² − 3x − 10')],
      ['A parabola with vertex ' + m('(2, −1)') + ' and ' + m('y') + '-intercept ' + m('3'), m('y = (x − 2)² − 1')],
      ['For which ' + m('k') + ' does ' + m('y = x² + kx + 4') + ' touch ' + m('Ox') + '?', m('k = ±4')],
      ['For which ' + m('k') + ' does ' + m('y = x² + kx + 4') + ' miss ' + m('Ox') + '?', m('−4 < k < 4')],
      ['Where is ' + m('−x² + 4x > 0') + '?', m('0 < x < 4')],
      ['A parabola opens upward, touches ' + m('Ox') + ' and cuts ' + m('Oy') + ' at ' + m('6') + ': give one equation', m('y = x² − 2' + sr('6') + 'x + 6')],
      ['Two parabolas ' + m('y = x² − 4') + ' and ' + m('y = 4 − x²') + ': the area they enclose is bounded by which roots?', m('x = ±2')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Mark the five features on every sketch, with their coordinates written beside them.',
  homework: [
    'Sketch ' + m('y = x² − 4x + 3') + ', marking the vertex, the axis, both roots and the intercept.',
    'Sketch ' + m('y = −x² − 2x + 3') + ' and state its range.',
    'Sketch ' + m('y = x² + 2x + 3') + ' and explain why it has no roots.',
    'Find the equation of the parabola with roots ' + m('−3') + ' and ' + m('1') + ' passing through ' + m('(0, −6)') + '.',
    'For ' + m('y = x² − 4x + 3') + ', write down the intervals where the function is positive and where it is negative.'
  ]
});

/* ============================== 05 ============================== */
G9_ALG.push({
  id: 'a9-05', stream: 'alg', grade: 9, quarter: 1, lessons: '9–10', hours: 2,
  title: 'The quadratic inequality and its solution',
  subtitle: 'Solve the equation, then decide which side of the roots the question wants.',
  uz: 'Algebra 9, §6', uzPage: 'pp. 24–27',
  cam: 'Extension beyond IGX', camPage: 'Core & Extended, pp. 216–225', wb: 'Exercise 10.2',
  objectives: [
    'Recognise a quadratic inequality and write it in standard form.',
    'Find the roots, then choose the correct interval.',
    'Handle the three cases D > 0, D = 0 and D < 0.',
    'Write the answer as an interval or a union of intervals.'
  ],
  terms: [
    ['Quadratic inequality', 'Kvadrat tengsizlik', 'Квадратное неравенство'],
    ['Standard form', 'Standart ko‘rinish', 'Стандартный вид'],
    ['Interval', 'Oraliq', 'Промежуток'],
    ['Union', 'Birlashma', 'Объединение'],
    ['Strict inequality', 'Qat’iy tengsizlik', 'Строгое неравенство'],
    ['Root of the trinomial', 'Uchhadning ildizi', 'Корень трёхчлена'],
    ['Sign of the trinomial', 'Uchhadning ishorasi', 'Знак трёхчлена'],
    ['Empty set', 'Bo‘sh to‘plam', 'Пустое множество']
  ],
  timing: [[12, 'Standard form first'], [25, 'Outside and between'], [25, 'The three cases'], [20, 'Writing the answer'], [8, 'Homework']],
  sections: [
    {
      h: 'Standard form first',
      html: `<p>Every quadratic inequality is first pushed to one side, so that it compares a trinomial
      with zero:</p>
      ${eq(m('ax² + bx + c > 0') + ',   ' + m('< 0') + ',   ' + m('≥ 0') + '   or   ' + m('≤ 0'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>As written</th><th>In standard form</th></tr></thead>
      <tbody>
        <tr><td class="m">x² > 3x + 4</td><td class="m">x² − 3x − 4 > 0</td></tr>
        <tr><td class="m">2x² ≤ 5x</td><td class="m">2x² − 5x ≤ 0</td></tr>
        <tr><td class="m">(x − 1)(x + 3) &lt; 5</td><td class="m">x² + 2x − 8 &lt; 0</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Never divide an inequality by ${m('x')}</span>
      From ${m('2x² ≤ 5x')} you may <b>not</b> divide by ${m('x')} to get ${m('2x ≤ 5')} — the sign of
      ${m('x')} is unknown, and ${m('x = 0')} is lost. Move everything to one side and factorise
      instead: ${m('x(2x − 5) ≤ 0')}.</div>`
    },
    {
      h: 'Outside and between',
      html: `<p>Once the roots ${m('x₁ < x₂')} are known, the picture decides everything.</p>
      {{fig:quadSignChart:An upward parabola: positive outside the roots, negative between them.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Inequality</th><th class="m">a > 0</th><th class="m">a &lt; 0</th></tr></thead>
      <tbody>
        <tr><td class="m">ax² + bx + c > 0</td><td class="m">x &lt; x₁ or x > x₂</td><td class="m">x₁ &lt; x &lt; x₂</td></tr>
        <tr><td class="m">ax² + bx + c &lt; 0</td><td class="m">x₁ &lt; x &lt; x₂</td><td class="m">x &lt; x₁ or x > x₂</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">One sentence for all four rows</div>
      The trinomial takes the <b>sign of ${m('a')}</b> outside the roots and the <b>opposite sign</b>
      between them. Sketch the parabola, mark the roots, and read the answer off — no table needed.</div>`
    },
    {
      h: 'The three cases',
      html: `<div class="tablewrap"><table>
      <thead><tr><th class="m">D</th><th>Picture (${m('a > 0')})</th><th class="m">> 0</th><th class="m">&lt; 0</th></tr></thead>
      <tbody>
        <tr><td class="m">D > 0</td><td>cuts ${m('Ox')} twice</td><td>outside</td><td>between</td></tr>
        <tr><td class="m">D = 0</td><td>touches at ${m('x₀')}</td><td>all ${m('x ≠ x₀')}</td><td>no solution</td></tr>
        <tr><td class="m">D &lt; 0</td><td>entirely above ${m('Ox')}</td><td>all ${m('x')}</td><td>no solution</td></tr>
      </tbody></table></div>
      {{fig:discriminantCases:The three positions, and the answers that follow from each.}}
      <p><b>The two degenerate cases are the ones examiners like.</b> ${m('x² + 2x + 5 > 0')} has
      ${m('D = −16 < 0')} and ${m('a > 0')}, so the parabola never touches the axis: the answer is
      <b>every</b> real ${m('x')}. And ${m('x² + 2x + 5 < 0')} has <b>no</b> solution at all. Neither
      needs a single root to be found.</p>`
    },
    {
      h: 'Writing the answer',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>In words</th><th>In intervals</th><th>On the line</th></tr></thead>
      <tbody>
        <tr><td>between ${m('−1')} and ${m('4')}</td><td class="m">(−1, 4)</td><td>open circles</td></tr>
        <tr><td>between, inclusive</td><td class="m">[−1, 4]</td><td>filled circles</td></tr>
        <tr><td>outside</td><td class="m">(−∞, −1) ∪ (4, +∞)</td><td>two rays</td></tr>
        <tr><td>everything but ${m('3')}</td><td class="m">(−∞, 3) ∪ (3, +∞)</td><td>one hole</td></tr>
      </tbody></table></div>
      {{fig:numberLineInterval:The interval drawn — open circles for a strict inequality, filled for a weak one.}}
      <div class="warn"><span class="wl">${m('∞')} always takes a round bracket</span>
      ${m('[4, +∞)')}, never ${m('[4, +∞]')}. Infinity is not a number the variable can equal, so the
      bracket beside it is round whatever the inequality sign is.</div>`
    }
  ],
  examples: [
    {
      q: 'Solve ' + m('x² − 3x − 4 > 0') + '.',
      steps: [
        [m('x² − 3x − 4 = 0 ⇒ (x − 4)(x + 1) = 0'), ''],
        [m('x₁ = −1') + ', ' + m('x₂ = 4') + '.', ''],
        [m('a = 1 > 0') + ' and we want ' + m('> 0') + ' — outside.', ''],
        [m('x < −1') + ' or ' + m('x > 4') + '.', '']
      ],
      ans: m('(−∞, −1) ∪ (4, +∞)')
    },
    {
      q: 'Solve ' + m('2x² ≤ 5x') + '.',
      steps: [
        [m('2x² − 5x ≤ 0'), 'Standard form.'],
        [m('x(2x − 5) ≤ 0'), 'Factor — do not divide.'],
        ['Roots ' + m('0') + ' and ' + m('2.5') + '; ' + m('a > 0') + ', want ' + m('≤ 0') + ' — between.', ''],
        [m('0 ≤ x ≤ 2.5'), '']
      ],
      ans: m('[0, 2.5]')
    },
    {
      q: 'Solve ' + m('x² + 2x + 5 > 0') + '.',
      steps: [
        [m('D = 4 − 20 = −16 < 0'), ''],
        [m('a = 1 > 0') + ', so the parabola lies entirely above ' + m('Ox') + '.', ''],
        ['The trinomial is positive for every ' + m('x') + '.', '']
      ],
      ans: 'All real ' + m('x')
    },
    {
      q: 'Solve ' + m('−x² + 4x − 3 ≥ 0') + '.',
      steps: [
        [m('x² − 4x + 3 ≤ 0'), 'Multiply by ' + m('−1') + ' and flip the sign.'],
        [m('(x − 1)(x − 3) ≤ 0'), ''],
        ['Roots ' + m('1') + ' and ' + m('3') + '; between.', ''],
        [m('1 ≤ x ≤ 3'), '']
      ],
      ans: m('[1, 3]')
    }
  ],
  modelNote: 'Draw one parabola on the board and shade above the axis in one colour, below in another; every question of the lesson is a reading of that one picture.',
  interactive: {
    type: 'inequalityLine',
    title: 'Where is the expression positive?',
    hint: 'Move the roots and watch the shaded set change.'
  },
  quiz: [
    { q: 'For ' + m('a > 0') + ', the trinomial is negative:', a: ['outside the roots', 'between the roots', 'everywhere', 'nowhere'], c: 1, why: 'The middle dips below.' },
    { q: m('x² + 2x + 5 > 0') + ' has solution:', a: ['no ' + m('x'), 'all ' + m('x'), m('x > 0'), 'two intervals'], c: 1, why: m('D < 0') + ' and ' + m('a > 0') + '.' },
    { q: m('x² + 2x + 5 < 0') + ' has solution:', a: ['all ' + m('x'), 'no ' + m('x'), m('x < 0'), 'one interval'], c: 1, why: 'The curve never goes below.' },
    { q: 'From ' + m('2x² ≤ 5x') + ' you should:', a: ['divide by ' + m('x'), 'move to one side and factorise', 'square', 'take roots'], c: 1, why: m('x = 0') + ' would be lost.' },
    { q: 'Multiplying an inequality by ' + m('−1') + ':', a: ['changes nothing', 'flips the sign', 'squares it', 'is not allowed'], c: 1, why: 'Both sides reverse.' },
    { q: 'The bracket beside ' + m('+∞') + ' is:', a: ['square', 'round', 'either', 'curly'], c: 1, why: 'It is not a value.' }
  ],
  practice: {
    easy: [
      ['Standard form of ' + m('x² > 3x + 4'), m('x² − 3x − 4 > 0')],
      ['Roots of ' + m('x² − 3x − 4'), m('−1') + ' and ' + m('4')],
      ['Solve ' + m('(x − 2)(x − 5) < 0'), m('(2, 5)')],
      ['Solve ' + m('(x − 2)(x − 5) > 0'), m('(−∞, 2) ∪ (5, +∞)')],
      ['Solve ' + m('x² < 9'), m('(−3, 3)')],
      ['Solve ' + m('x² > 9'), m('(−∞, −3) ∪ (3, +∞)')],
      ['Solve ' + m('x² ≥ 0'), 'All ' + m('x')]
    ],
    med: [
      ['Solve ' + m('x² − 3x − 4 > 0'), m('(−∞, −1) ∪ (4, +∞)')],
      ['Solve ' + m('2x² ≤ 5x'), m('[0, 2.5]')],
      ['Solve ' + m('x² + 2x + 5 > 0'), 'All ' + m('x')],
      ['Solve ' + m('x² + 2x + 5 < 0'), 'No solution'],
      ['Solve ' + m('−x² + 4x − 3 ≥ 0'), m('[1, 3]')],
      ['Solve ' + m('x² − 6x + 9 > 0'), 'All ' + m('x ≠ 3')],
      ['Solve ' + m('x² − 6x + 9 ≤ 0'), m('x = 3')]
    ],
    hard: [
      ['Solve ' + m('(x − 1)(x + 3) < 5'), m('(−4, 2)')],
      ['Solve ' + m('3x² − 2x − 1 ≥ 0'), m('(−∞, −' + f('1', '3') + '] ∪ [1, +∞)')],
      ['For which ' + m('k') + ' is ' + m('x² + kx + 4 > 0') + ' for every ' + m('x') + '?', m('−4 < k < 4')],
      ['For which ' + m('m') + ' has ' + m('x² − 2x + m < 0') + ' no solution?', m('m ≥ 1')],
      ['Solve ' + m('x² ≤ 2x + 8') + ' and give the integer solutions', m('[−2, 4]') + '; ' + m('−2, …, 4')],
      ['Solve ' + m('(2x − 1)² > 9'), m('(−∞, −1) ∪ (2, +∞)')],
      ['The domain of ' + m(sr('x² − 4x + 3')), m('(−∞, 1] ∪ [3, +∞)')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Sketch the parabola for every question; the sketch is the method, not decoration.',
  homework: [
    'Solve ' + m('x² − 5x + 6 < 0') + ' and draw the answer on a number line.',
    'Solve ' + m('x² + x − 12 ≥ 0') + '.',
    'Solve ' + m('3x² < 12x') + ', taking care not to divide by ' + m('x') + '.',
    'Solve ' + m('x² − 4x + 7 > 0') + ' and explain the answer from the discriminant alone.',
    'Find the domain of ' + m(sr('9 − x²')) + '.'
  ]
});

/* ============================== 06 ============================== */
G9_ALG.push({
  id: 'a9-06', stream: 'alg', grade: 9, quarter: 1, lessons: '11–12', hours: 2,
  title: 'Solving a quadratic inequality from the graph',
  subtitle: 'The sketch is not an illustration of the method — it is the method.',
  uz: 'Algebra 9, §7', uzPage: 'pp. 28–31',
  cam: 'IGX 10.2', camPage: 'Core & Extended, pp. 216–225', wb: 'Exercise 10.2',
  objectives: [
    'Read the solution of an inequality directly from a sketched parabola.',
    'Solve an inequality where one side is a line rather than zero.',
    'Find the values of a parameter for which an inequality always holds.',
    'Use the graph to check an algebraic answer.'
  ],
  terms: [
    ['Graphical method', 'Grafik usul', 'Графический способ'],
    ['Above the axis', 'O‘q ustida', 'Выше оси'],
    ['Below the axis', 'O‘q ostida', 'Ниже оси'],
    ['Point of intersection', 'Kesishish nuqtasi', 'Точка пересечения'],
    ['Parameter', 'Parametr', 'Параметр'],
    ['Always true', 'Doimo o‘rinli', 'Всегда верно'],
    ['Sketch', 'Eskiz', 'Эскиз'],
    ['Solution set', 'Yechimlar to‘plami', 'Множество решений']
  ],
  timing: [[15, 'Reading the sketch'], [22, 'A curve against a line'], [25, 'Always true, never true'], [23, 'Checking an answer'], [5, 'Homework']],
  sections: [
    {
      h: 'Reading the sketch',
      html: `<p>${m('f(x) > 0')} asks where the curve is <b>above</b> the axis; ${m('f(x) < 0')} asks
      where it is <b>below</b>. Nothing else is needed.</p>
      {{fig:quadGraph:Above the axis on the outside, below it between the roots.}}
      <div class="keybox"><div class="klabel">Three marks, then read</div>
      <ol>
        <li>Mark the roots on the ${m('x')}-axis.</li>
        <li>Sketch the parabola through them, opening the way ${m('a')} says.</li>
        <li>Trace the part above (or below) the axis and read off the ${m('x')} values.</li>
      </ol>
      A sketch takes fifteen seconds and removes every sign error at once.</div>`
    },
    {
      h: 'A curve against a line',
      html: `<p>${m('x² < 2x + 3')} can be read two ways, and both are useful.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Reading</th><th>Question</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td>one curve</td><td>where is ${m('x² − 2x − 3')} below zero?</td><td>roots ${m('−1, 3')}; between</td></tr>
        <tr><td>two graphs</td><td>where is the parabola below the line?</td><td>same roots; between</td></tr>
      </tbody></table></div>
      <p>The second reading is the one to use when the question is already drawn — a parabola and a line
      on the same axes, and “for which ${m('x')} is the curve below the line?”. The meeting points are
      the roots of the difference, and the answer is the interval between or outside them.</p>
      <div class="keybox"><div class="klabel">The meeting points are always the roots of the difference</div>
      Curve ${m('y = f(x)')} meets line ${m('y = g(x)')} where ${m('f(x) − g(x) = 0')}. So the graphical
      question and the algebraic one have exactly the same answer — which is why the sketch is a
      legitimate solution and not just a check.</div>`
    },
    {
      h: 'Always true, never true',
      html: `<p>Some questions ask for no ${m('x')} at all, but for the values of a letter.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Condition</th><th>Means</th><th>Requires</th></tr></thead>
      <tbody>
        <tr><td class="m">ax² + bx + c > 0</td><td>for every ${m('x')}</td><td class="m">a > 0 and D &lt; 0</td></tr>
        <tr><td class="m">ax² + bx + c &lt; 0</td><td>for every ${m('x')}</td><td class="m">a &lt; 0 and D &lt; 0</td></tr>
        <tr><td class="m">ax² + bx + c ≥ 0</td><td>for every ${m('x')}</td><td class="m">a > 0 and D ≤ 0</td></tr>
      </tbody></table></div>
      <p><b>Example.</b> For which ${m('k')} is ${m('x² + kx + 9 > 0')} for every ${m('x')}? Here
      ${m('a = 1 > 0')} already, so the condition is ${m('D < 0')}: ${m('k² − 36 < 0')}, that is
      ${m('−6 < k < 6')}.</p>
      <div class="warn"><span class="wl">Two conditions, not one</span>
      ${m('D < 0')} alone says the curve misses the axis — but it could be entirely <b>below</b> it. The
      sign of ${m('a')} is what says which. Write both, always.</div>`
    },
    {
      h: 'Checking an answer',
      html: `<p>Every inequality answer can be tested in ten seconds: pick one number from the claimed
      set and one from outside it, and substitute.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Claim</th><th>Test inside</th><th>Test outside</th><th>Verdict</th></tr></thead>
      <tbody>
        <tr><td class="m">x² − 3x − 4 > 0 on (4, ∞)</td><td class="m">x = 5: 6 > 0 ✓</td><td class="m">x = 0: −4 > 0 ✗</td><td>consistent</td></tr>
        <tr><td class="m">x² < 9 on (−3, 3)</td><td class="m">x = 0: 0 &lt; 9 ✓</td><td class="m">x = 4: 16 &lt; 9 ✗</td><td>consistent</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Test the endpoints too</div>
      For a weak inequality, substitute the endpoint itself: ${m('x = 4')} in ${m('x² − 3x − 4 ≥ 0')}
      gives ${m('0 ≥ 0')} ✓, so ${m('4')} belongs and the bracket is square. That single substitution
      settles every open-or-closed question.</div>`
    }
  ],
  examples: [
    {
      q: 'Solve ' + m('x² < 2x + 3') + ' graphically.',
      steps: [
        ['Sketch ' + m('y = x²') + ' and ' + m('y = 2x + 3') + '.', ''],
        ['They meet where ' + m('x² − 2x − 3 = 0') + ', so at ' + m('x = −1') + ' and ' + m('x = 3') + '.', ''],
        ['The parabola is below the line between them.', ''],
        [m('−1 < x < 3'), '']
      ],
      ans: m('(−1, 3)')
    },
    {
      q: 'For which ' + m('k') + ' is ' + m('x² + kx + 9 > 0') + ' for every ' + m('x') + '?',
      steps: [
        [m('a = 1 > 0') + ' ✓', 'First condition already met.'],
        [m('D = k² − 36 < 0'), ''],
        [m('k² < 36'), ''],
        [m('−6 < k < 6'), '']
      ],
      ans: m('−6 < k < 6')
    },
    {
      q: 'For which ' + m('m') + ' is ' + m('−x² + mx − 4 < 0') + ' for every ' + m('x') + '?',
      steps: [
        [m('a = −1 < 0') + ' ✓', ''],
        [m('D = m² − 16 < 0'), ''],
        [m('−4 < m < 4'), '']
      ],
      ans: m('−4 < m < 4')
    }
  ],
  modelNote: 'Draw a parabola and a movable line on the board; slide the line and ask each time which x satisfy “curve below line”.',
  interactive: {
    type: 'quadratic',
    title: 'The curve, the axis and the shaded set',
    hint: 'Watch where the curve crosses as you change c.'
  },
  quiz: [
    { q: m('f(x) > 0') + ' asks where the curve is:', a: ['above the axis', 'below the axis', 'steepest', 'at its vertex'], c: 0, why: 'Positive means above.' },
    { q: 'A curve meets a line where:', a: [m('f(x) = 0'), m('f(x) − g(x) = 0'), m('g(x) = 0'), 'never'], c: 1, why: 'Their difference vanishes.' },
    { q: m('ax² + bx + c > 0') + ' for all ' + m('x') + ' needs:', a: [m('D < 0'), m('a > 0'), 'both', 'neither'], c: 2, why: 'Miss the axis, and from above.' },
    { q: m('x² + kx + 9 > 0') + ' always, when:', a: [m('k > 6'), m('−6 < k < 6'), m('k < −6'), 'any ' + m('k')], c: 1, why: m('D < 0') + '.' },
    { q: 'To test an interval answer:', a: ['re-solve it', 'substitute one point inside and one outside', 'draw it again', 'nothing'], c: 1, why: 'Ten seconds, and conclusive.' },
    { q: 'A weak inequality includes an endpoint when:', a: ['always', 'substituting it gives a true statement', 'never', 'the root is an integer'], c: 1, why: 'Test it.' }
  ],
  practice: {
    easy: [
      ['Where is ' + m('y = x² − 4') + ' above ' + m('Ox') + '?', m('(−∞, −2) ∪ (2, +∞)')],
      ['Where is ' + m('y = x² − 4') + ' below ' + m('Ox') + '?', m('(−2, 2)')],
      ['Where do ' + m('y = x²') + ' and ' + m('y = 4') + ' meet?', m('x = ±2')],
      ['Where do ' + m('y = x²') + ' and ' + m('y = 2x + 3') + ' meet?', m('x = −1, 3')],
      ['Solve ' + m('x² < 4'), m('(−2, 2)')],
      ['Solve ' + m('x² ≥ 4'), m('(−∞, −2] ∪ [2, +∞)')],
      ['Does ' + m('x = 4') + ' satisfy ' + m('x² − 3x − 4 ≥ 0') + '?', 'Yes — ' + m('0 ≥ 0')]
    ],
    med: [
      ['Solve ' + m('x² < 2x + 3'), m('(−1, 3)')],
      ['Solve ' + m('x² ≥ 4x − 3'), m('(−∞, 1] ∪ [3, +∞)')],
      ['For which ' + m('k') + ' is ' + m('x² + kx + 9 > 0') + ' always?', m('−6 < k < 6')],
      ['For which ' + m('m') + ' is ' + m('−x² + mx − 4 < 0') + ' always?', m('−4 < m < 4')],
      ['Where is ' + m('y = −x² + 4') + ' above ' + m('Ox') + '?', m('(−2, 2)')],
      ['Where is the parabola ' + m('y = x²') + ' below ' + m('y = x + 6') + '?', m('(−2, 3)')],
      ['Solve ' + m('x² + 4 > 0'), 'All ' + m('x')]
    ],
    hard: [
      ['For which ' + m('a') + ' is ' + m('ax² + 4x + 1 > 0') + ' for every ' + m('x') + '?', m('a > 4')],
      ['For which ' + m('k') + ' does ' + m('y = x² + k') + ' lie entirely above ' + m('y = 2x') + '?', m('k > 1')],
      ['Solve ' + m('(x − 1)² ≥ 4'), m('(−∞, −1] ∪ [3, +∞)')],
      ['For which ' + m('m') + ' has ' + m('x² − mx + m = 0') + ' two distinct roots?', m('m < 0') + ' or ' + m('m > 4')],
      ['Solve ' + m('x² − 5|x| + 6 < 0'), m('(−3, −2) ∪ (2, 3)')],
      ['The parabola ' + m('y = x² − 6x + c') + ' lies entirely above ' + m('Ox') + ': find ' + m('c'), m('c > 9')],
      ['Solve ' + m(f('1', 'x') + ' < x') + ' for ' + m('x > 0'), m('x > 1')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every answer must be tested with one number inside and one outside the claimed set.',
  homework: [
    'Solve ' + m('x² ≤ 3x + 10') + ' graphically, drawing both the parabola and the line.',
    'Solve ' + m('x² − 2x − 8 > 0') + ' and test your answer at two points.',
    'For which ' + m('k') + ' is ' + m('x² + kx + 16 > 0') + ' for every ' + m('x') + '?',
    'For which ' + m('c') + ' does ' + m('y = x² − 4x + c') + ' lie entirely above the ' + m('x') + '-axis?',
    'Explain in two sentences why ' + m('D < 0') + ' alone is not enough for ' + m('f(x) > 0') + ' to hold everywhere.'
  ]
});

/* ============================== 07 ============================== */
G9_ALG.push({
  id: 'a9-07', stream: 'alg', grade: 9, quarter: 1, lessons: '13–14', hours: 2,
  title: 'The method of intervals',
  subtitle: 'One number line, one sign at the right-hand end, and the rest alternate.',
  uz: 'Algebra 9, §8', uzPage: 'pp. 32–36',
  cam: 'Extension beyond IGX', camPage: 'Core & Extended, pp. 216–225', wb: 'Exercise 10.2',
  objectives: [
    'Factorise a polynomial or rational expression completely.',
    'Mark the zeros and the breaks on a number line.',
    'Determine the sign on each interval and read off the answer.',
    'Handle a repeated factor, where the sign does not change.'
  ],
  terms: [
    ['Method of intervals', 'Oraliqlar usuli', 'Метод интервалов'],
    ['Zero of a factor', 'Ko‘paytuvchi noli', 'Нуль множителя'],
    ['Break point', 'Uzilish nuqtasi', 'Точка разрыва'],
    ['Repeated factor', 'Takrorlanuvchi ko‘paytuvchi', 'Кратный множитель'],
    ['Multiplicity', 'Karralilik', 'Кратность'],
    ['Sign chart', 'Ishoralar chizmasi', 'Схема знаков'],
    ['Rational inequality', 'Ratsional tengsizlik', 'Рациональное неравенство'],
    ['Excluded value', 'Chetlangan qiymat', 'Исключённое значение']
  ],
  timing: [[15, 'Why it works'], [25, 'The four steps'], [22, 'Repeated factors'], [23, 'Rational inequalities'], [5, 'Homework']],
  sections: [
    {
      h: 'Why it works',
      html: `<p>A product of factors can only change sign where one of the factors is zero. Between two
      consecutive zeros, every factor keeps its sign, so the product does too.</p>
      ${eq('the sign is constant on each interval between consecutive zeros', true)}
      <p>So the whole number line splits into a few intervals, and one test point in each settles it.
      Better still: crossing a <b>single</b> zero flips exactly one factor, so the sign <b>alternates</b>
      — and one test point settles them all.</p>
      {{fig:systemIntervals:Zeros marked, and the sign alternating between them.}}
      <div class="keybox"><div class="klabel">This replaces the parabola sketch, and goes further</div>
      For a quadratic, the method of intervals and the sketch give the same answer. For a cubic, a
      quartic or a fraction, the sketch is hard and the number line is not — which is why this method is
      the one that survives into Grade 10 and 11.</div>`
    },
    {
      h: 'The four steps',
      html: `<div class="keybox"><div class="klabel">Every question, the same four steps</div>
      <ol>
        <li><b>Zero on one side</b>, and factorise completely.</li>
        <li><b>Mark</b> every zero on a number line — filled for ${m('≤, ≥')}, open for ${m('<, >')}.</li>
        <li><b>Sign at the far right</b>: substitute a large ${m('x')}, or read the leading coefficient.</li>
        <li><b>Alternate</b> leftwards through the simple zeros, and read off the intervals wanted.</li>
      </ol></div>
      <p><b>Example.</b> ${m('(x + 2)(x − 1)(x − 4) > 0')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Interval</th><th class="m">x < −2</th><th class="m">−2 … 1</th><th class="m">1 … 4</th><th class="m">x > 4</th></tr></thead>
      <tbody><tr><td>sign</td><td class="m">−</td><td class="m">+</td><td class="m">−</td><td class="m">+</td></tr></tbody></table></div>
      <p>The far right is ${m('+')} (three positive factors), and the signs alternate leftwards. We want
      ${m('> 0')}, so the answer is ${m('(−2, 1) ∪ (4, +∞)')}.</p>`
    },
    {
      h: 'Repeated factors',
      html: `<p>A factor to an <b>even</b> power does not change sign as ${m('x')} passes its zero —
      ${m('(x − 3)²')} is positive on both sides. An <b>odd</b> power behaves like a single factor.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Factor</th><th>At its zero</th><th>Sign</th></tr></thead>
      <tbody>
        <tr><td class="m">(x − 3)</td><td>crosses</td><td>changes</td></tr>
        <tr><td class="m">(x − 3)²</td><td>touches</td><td><b>does not change</b></td></tr>
        <tr><td class="m">(x − 3)³</td><td>crosses</td><td>changes</td></tr>
        <tr><td class="m">(x − 3)⁴</td><td>touches</td><td>does not change</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Do not cancel a square — mark it and skip the flip</span>
      In ${m('(x − 1)(x − 3)² > 0')} the point ${m('x = 3')} is still excluded (the product is zero
      there), but the sign is ${m('+')} on both sides of it. The answer is ${m('(1, 3) ∪ (3, +∞)')} —
      one interval with a hole in it, not two separate regions.</div>`
    },
    {
      h: 'Rational inequalities',
      html: `<p>A fraction changes sign at the zeros of its <b>numerator</b> and at the zeros of its
      <b>denominator</b>. Mark both — but the denominator's zeros are always excluded, whatever the
      inequality sign.</p>
      ${eq(m(f('P(x)', 'Q(x)') + ' > 0') + '   has the same solution as   ' + m('P(x)·Q(x) > 0') + ',   with ' + m('Q(x) ≠ 0'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Point</th><th>Circle</th><th>Because</th></tr></thead>
      <tbody>
        <tr><td>zero of the numerator, strict</td><td>open</td><td>the fraction is ${m('0')}, not ${m('> 0')}</td></tr>
        <tr><td>zero of the numerator, weak</td><td>filled</td><td class="m">0 ≥ 0</td></tr>
        <tr><td>zero of the denominator</td><td><b>always open</b></td><td>the fraction is undefined</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Never multiply up by the denominator</span>
      From ${m(f('x − 1', 'x + 2') + ' > 0')} you may <b>not</b> multiply by ${m('x + 2')} — its sign is
      unknown. Bring everything to one fraction, factorise, and use the number line.</div>`
    }
  ],
  examples: [
    {
      q: 'Solve ' + m('(x + 2)(x − 1)(x − 4) > 0') + '.',
      steps: [
        ['Zeros ' + m('−2, 1, 4') + ', all simple.', ''],
        ['Far right: ' + m('+') + '.', 'Three positive factors.'],
        ['Signs, right to left: ' + m('+, −, +, −') + '.', ''],
        [m('(−2, 1) ∪ (4, +∞)'), '']
      ],
      ans: m('(−2, 1) ∪ (4, +∞)')
    },
    {
      q: 'Solve ' + m('(x − 1)(x − 3)² > 0') + '.',
      steps: [
        ['Zeros ' + m('1') + ' (simple) and ' + m('3') + ' (double).', ''],
        ['Far right ' + m('+') + '; no flip at ' + m('3') + '; flip at ' + m('1') + '.', ''],
        ['Signs: ' + m('−') + ' then ' + m('+') + ' then ' + m('+') + '.', ''],
        [m('(1, 3) ∪ (3, +∞)'), m('x = 3') + ' makes the product zero.']
      ],
      ans: m('(1, 3) ∪ (3, +∞)')
    },
    {
      q: 'Solve ' + m(f('x − 1', 'x + 2') + ' ≥ 0') + '.',
      steps: [
        ['Zeros: numerator at ' + m('1') + ', denominator at ' + m('−2') + '.', ''],
        [m('x = 1') + ' filled; ' + m('x = −2') + ' always open.', ''],
        ['Far right ' + m('+') + '; alternate leftwards.', ''],
        [m('(−∞, −2) ∪ [1, +∞)'), '']
      ],
      ans: m('(−∞, −2) ∪ [1, +∞)')
    },
    {
      q: 'Solve ' + m(f('1', 'x') + ' < 3') + '.',
      steps: [
        [m(f('1', 'x') + ' − 3 < 0'), 'Never multiply up.'],
        [m(f('1 − 3x', 'x') + ' < 0'), ''],
        ['Zeros ' + m(f('1', '3')) + ' (open) and ' + m('0') + ' (open).', ''],
        [m('(−∞, 0) ∪ (' + f('1', '3') + ', +∞)'), '']
      ],
      ans: m('(−∞, 0) ∪ (' + f('1', '3') + ', +∞)')
    }
  ],
  modelNote: 'Draw one long number line on the board and let a pupil place the circles before anyone writes a sign.',
  interactive: {
    type: 'inequalityLine',
    title: 'Zeros, signs and the answer',
    hint: 'Move the zeros and watch the alternation.'
  },
  quiz: [
    { q: 'A product can change sign only:', a: ['at a zero of a factor', 'anywhere', 'at the origin', 'never'], c: 0, why: 'Elsewhere every factor keeps its sign.' },
    { q: 'Crossing a simple zero, the sign:', a: ['stays', 'flips', 'doubles', 'vanishes'], c: 1, why: 'One factor changes sign.' },
    { q: 'Crossing a double zero, the sign:', a: ['stays', 'flips', 'is undefined', 'is zero'], c: 0, why: 'The square is positive both sides.' },
    { q: 'A zero of the denominator is drawn:', a: ['filled', 'always open', 'either', 'not at all'], c: 1, why: 'The fraction is undefined there.' },
    { q: 'From ' + m(f('x − 1', 'x + 2') + ' > 0') + ' you may:', a: ['multiply by ' + m('x + 2'), 'use a number line', 'square', 'cross-multiply'], c: 1, why: 'The denominator’s sign is unknown.' },
    { q: 'The sign at the far right of ' + m('(x+2)(x−1)(x−4)') + ' is:', a: [m('+'), m('−'), 'zero', 'unknown'], c: 0, why: 'All three factors positive.' }
  ],
  practice: {
    easy: [
      ['Zeros of ' + m('(x + 2)(x − 1)(x − 4)'), m('−2, 1, 4')],
      ['Sign of that product at ' + m('x = 10'), m('+')],
      ['Solve ' + m('(x − 1)(x − 5) < 0'), m('(1, 5)')],
      ['Solve ' + m('(x − 1)(x − 5) > 0'), m('(−∞, 1) ∪ (5, +∞)')],
      ['Solve ' + m('x(x − 3) ≤ 0'), m('[0, 3]')],
      ['Excluded value of ' + m(f('1', 'x − 4')), m('x = 4')],
      ['Does ' + m('(x − 3)²') + ' change sign at ' + m('3') + '?', 'No']
    ],
    med: [
      ['Solve ' + m('(x + 2)(x − 1)(x − 4) > 0'), m('(−2, 1) ∪ (4, +∞)')],
      ['Solve ' + m('(x + 2)(x − 1)(x − 4) < 0'), m('(−∞, −2) ∪ (1, 4)')],
      ['Solve ' + m('(x − 1)(x − 3)² > 0'), m('(1, 3) ∪ (3, +∞)')],
      ['Solve ' + m(f('x − 1', 'x + 2') + ' ≥ 0'), m('(−∞, −2) ∪ [1, +∞)')],
      ['Solve ' + m(f('x + 3', 'x − 1') + ' < 0'), m('(−3, 1)')],
      ['Solve ' + m('x³ − 4x > 0'), m('(−2, 0) ∪ (2, +∞)')],
      ['Solve ' + m(f('1', 'x') + ' < 3'), m('(−∞, 0) ∪ (' + f('1', '3') + ', +∞)')]
    ],
    hard: [
      ['Solve ' + m(f('(x − 1)(x + 3)', 'x − 2') + ' ≤ 0'), m('(−∞, −3] ∪ [1, 2)')],
      ['Solve ' + m('(x − 1)²(x + 2)(x − 5) < 0'), m('(−2, 1) ∪ (1, 5)')],
      ['Solve ' + m(f('x² − 4', 'x² − 9') + ' > 0'), m('(−∞, −3) ∪ (−2, 2) ∪ (3, +∞)')],
      ['Solve ' + m(f('2', 'x − 1') + ' ≥ ' + f('3', 'x')), m('(0, 1) ∪ [3, +∞)') + ' — check the ends'],
      ['Solve ' + m('x⁴ − 5x² + 4 ≤ 0'), m('[−2, −1] ∪ [1, 2]')],
      ['The domain of ' + m(sr(f('x − 1', 'x + 2'))), m('(−∞, −2) ∪ [1, +∞)')],
      ['Solve ' + m('(x − 2)³(x + 1) > 0'), m('(−∞, −1) ∪ (2, +∞)')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw the number line for every question, with the circles filled or open correctly.',
  homework: [
    'Solve ' + m('(x + 1)(x − 2)(x − 5) < 0') + '.',
    'Solve ' + m('(x + 4)(x − 2)² ≥ 0') + ', explaining what happens at ' + m('x = 2') + '.',
    'Solve ' + m(f('x − 3', 'x + 1') + ' > 0') + '.',
    'Solve ' + m(f('2', 'x') + ' ≤ 1') + ' without multiplying up.',
    'Find the domain of ' + m(sr('x² − x − 6')) + '.'
  ]
});

/* ============================== 08 ============================== */
G9_ALG.push({
  id: 'a9-08', stream: 'alg', grade: 9, quarter: 1, lessons: '15–16', hours: 2,
  title: 'Control work 1, and work on the mistakes',
  subtitle: 'The quadratic function and its inequalities in one paper, then a named diagnosis of each slip.',
  uz: 'Algebra 9, Nazorat ishi 1', uzPage: 'pp. 56–62',
  cam: 'IGX 10 review', camPage: 'Core & Extended, pp. 226–228', wb: 'Control paper A1',
  objectives: [
    'Sketch a quadratic and read its features under time.',
    'Solve a quadratic inequality and a simple rational one.',
    'Classify each lost mark and rewrite the solution in full.',
    'Draw the chapter so far as one map.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Vertex', 'Uchi', 'Вершина'],
    ['Discriminant', 'Diskriminant', 'Дискриминант'],
    ['Method of intervals', 'Oraliqlar usuli', 'Метод интервалов'],
    ['Sign chart', 'Ishoralar chizmasi', 'Схема знаков'],
    ['Diagnosis', 'Tashxis', 'Диагностика'],
    ['Concept map', 'Tushunchalar xaritasi', 'Карта понятий'],
    ['Target', 'Maqsad', 'Цель']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [12, 'Answers'], [20, 'Diagnosis and rewrite'], [5, 'The map']],
  sections: [
    {
      h: 'The paper — 30 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Write ${m('y = x² − 8x + 11')} in vertex form; state the vertex and the least value</td><td class="m">5</td><td>L5–6</td></tr>
        <tr><td>2</td><td>Sketch ${m('y = x² − 2x − 8')}: vertex, axis, both roots and the intercept</td><td class="m">6</td><td>L7–8</td></tr>
        <tr><td>3</td><td>Solve ${m('x² − 2x − 8 ≥ 0')} and write the answer as intervals</td><td class="m">5</td><td>L9–10</td></tr>
        <tr><td>4</td><td>Solve ${m('x² + 3x + 7 > 0')}, justifying the answer from ${m('D')}</td><td class="m">4</td><td>L11–12</td></tr>
        <tr><td>5</td><td>Solve ${m('(x + 1)(x − 2)(x − 4) < 0')} by the method of intervals</td><td class="m">5</td><td>L13–14</td></tr>
        <tr><td>6</td><td>Solve ${m(f('x − 2', 'x + 3') + ' ≤ 0')}</td><td class="m">5</td><td>L13–14</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks actually go</div>
      Q2 carries one mark for the axis being halfway between the roots; Q3 one for the square brackets;
      Q4 one for naming <b>both</b> conditions, not just ${m('D < 0')}; Q6 one for the open circle at
      ${m('x = −3')}. Four of the thirty marks are for a habit rather than a calculation.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>bracket sign reversed</td><td class="m">(x − 3)² ⇒ vertex at −3</td><td>read as ${m('(x − (+3))²')}</td></tr>
        <tr><td>outside for between</td><td>the wrong side of the roots</td><td>sketch, then read</td></tr>
        <tr><td>open for closed</td><td class="m">(1, 4) for x² − 5x + 4 ≤ 0</td><td>substitute the endpoint</td></tr>
        <tr><td>${m('D < 0')} alone</td><td>“no roots, so always positive”</td><td>the sign of ${m('a')} decides which side</td></tr>
        <tr><td>denominator filled</td><td class="m">[−3, 2]</td><td>it is never allowed</td></tr>
        <tr><td>multiplied up</td><td class="m">x − 2 ≤ 0</td><td>one fraction, then intervals</td></tr>
        <tr><td>divided by ${m('x')}</td><td class="m">2x² ≤ 5x ⇒ 2x ≤ 5</td><td>factorise instead</td></tr>
      </tbody></table></div>
      <p>Write the slip's name in the margin of every question that lost a mark, then rewrite the whole
      solution — not the line that went wrong.</p>`
    },
    {
      h: 'The chapter so far, as one map',
      html: `<p>Five boxes, and the links written as sentences:</p>
      <ul>
        <li><b>${m('a')}</b> → <b>the direction</b> — “up when positive, down when negative”</li>
        <li><b>completing the square</b> → <b>the vertex</b> — “${m('a(x − m)² + n')} puts it at ${m('(m, n)')}”</li>
        <li><b>${m('D')}</b> → <b>how many roots</b> — “two, one, or none”</li>
        <li><b>the roots</b> → <b>the sign</b> — “${m('a')}'s sign outside, the opposite between”</li>
        <li><b>factors</b> → <b>the number line</b> — “mark, alternate, read”</li>
      </ul>
      {{fig:quadSignChart:The one picture that answers Q3, Q4 and Q5 alike.}}
      <div class="keybox"><div class="klabel">Looking forward</div>
      Lessons 17–23 leave the graph and study the <b>function</b> itself — its domain, where it rises and
      falls, and whether it is even or odd. Everything drawn this fortnight becomes the evidence for
      those statements.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q2: sketch ' + m('y = x² − 2x − 8') + '.',
      steps: [
        [m('a = 1 > 0') + '; intercept ' + m('(0, −8)') + '.', ''],
        [m('(x − 4)(x + 2) = 0') + ', so roots ' + m('−2') + ' and ' + m('4') + '.', ''],
        ['Axis ' + m('x = 1') + '.', 'Halfway between the roots.'],
        ['Vertex ' + m('(1, −9)') + '.', '']
      ],
      ans: 'Vertex ' + m('(1, −9)') + ', roots ' + m('−2') + ' and ' + m('4')
    },
    {
      q: 'Model answer, Q4: solve ' + m('x² + 3x + 7 > 0') + '.',
      steps: [
        [m('D = 9 − 28 = −19 < 0'), 'No roots.'],
        [m('a = 1 > 0'), 'So the curve is entirely above ' + m('Ox') + '.'],
        ['Both conditions are needed.', ''],
        ['The inequality holds for every real ' + m('x') + '.', '']
      ],
      ans: 'All real ' + m('x')
    },
    {
      q: 'Model answer, Q6: solve ' + m(f('x − 2', 'x + 3') + ' ≤ 0') + '.',
      steps: [
        ['Zeros: ' + m('2') + ' from the top, ' + m('−3') + ' from the bottom.', ''],
        [m('x = 2') + ' filled; ' + m('x = −3') + ' open, always.', ''],
        ['Far right ' + m('+') + '; alternate leftwards.', ''],
        [m('(−3, 2]'), '']
      ],
      ans: m('(−3, 2]')
    }
  ],
  modelNote: 'Work Q6 twice on the board — once with the −3 filled, once open — and let the class say which is a solution of the original fraction.',
  interactive: {
    type: 'quiz',
    title: 'The chapter in ten questions',
    hint: 'One from each idea of Lessons 3–14.',
    items: [
      { q: m('y = ax² + bx + c') + ' is quadratic when:', a: [m('a ≠ 0'), m('b ≠ 0'), m('c ≠ 0'), 'always'], c: 0, why: 'Otherwise linear.' },
      { q: 'The vertex of ' + m('y = (x − 5)² + 2') + ':', a: [m('(5, 2)'), m('(−5, 2)'), m('(5, −2)'), m('(2, 5)')], c: 0, why: 'Reverse the bracket.' },
      { q: 'The axis of ' + m('y = ax² + bx + c') + ':', a: [m('x = ' + f('b', '2a')), m('x = −' + f('b', '2a')), m('x = c'), m('x = 0')], c: 1, why: 'Halfway between the roots.' },
      { q: m('D = 0') + ' means the parabola:', a: ['cuts twice', 'touches', 'misses', 'is a line'], c: 1, why: 'One repeated root.' },
      { q: 'For ' + m('a > 0') + ', the trinomial is negative:', a: ['outside the roots', 'between them', 'everywhere', 'nowhere'], c: 1, why: 'The dip.' },
      { q: m('x² + 4 > 0') + ' holds for:', a: ['no ' + m('x'), 'all ' + m('x'), m('x > 0'), m('x > 2')], c: 1, why: m('D < 0') + ', ' + m('a > 0') + '.' },
      { q: 'A double zero makes the sign:', a: ['flip', 'stay', 'vanish', 'double'], c: 1, why: 'A square is never negative.' },
      { q: 'A zero of the denominator is:', a: ['filled', 'open', 'ignored', 'doubled'], c: 1, why: 'Undefined there.' },
      { q: 'From ' + m(f('1', 'x') + ' < 3') + ' you should:', a: ['multiply by ' + m('x'), 'bring to one fraction', 'square', 'take reciprocals'], c: 1, why: 'The sign of ' + m('x') + ' is unknown.' },
      { q: 'The bracket beside ' + m('+∞') + ':', a: ['square', 'round', 'either', 'none'], c: 1, why: 'Not a value.' }
    ]
  },
  quiz: [
    { q: 'Q3’s answer uses which brackets?', a: ['round', 'square at the roots', 'curly', 'none'], c: 1, why: m('≥') + ' includes them.' },
    { q: 'Q4 needs, beyond ' + m('D < 0') + ':', a: ['nothing', 'the sign of ' + m('a'), 'the roots', 'a sketch'], c: 1, why: 'Above or below.' },
    { q: 'Q6’s left endpoint is:', a: ['filled', 'open', 'either', 'excluded from the answer entirely'], c: 1, why: 'A denominator zero.' },
    { q: 'Lessons 17–23 turn to:', a: ['trigonometry', 'the properties of functions', 'progressions', 'probability'], c: 1, why: 'Domain, monotonicity, parity.' }
  ],
  practice: {
    easy: [
      ['Vertex form of ' + m('y = x² − 8x + 11'), m('(x − 4)² − 5')],
      ['Vertex of the same', m('(4, −5)')],
      ['Roots of ' + m('x² − 2x − 8'), m('−2') + ' and ' + m('4')],
      ['Axis of ' + m('y = x² − 2x − 8'), m('x = 1')],
      ['Vertex of ' + m('y = x² − 2x − 8'), m('(1, −9)')],
      [m('D') + ' of ' + m('x² + 3x + 7'), m('−19')],
      ['Zeros of ' + m('(x + 1)(x − 2)(x − 4)'), m('−1, 2, 4')]
    ],
    med: [
      ['Solve ' + m('x² − 2x − 8 ≥ 0'), m('(−∞, −2] ∪ [4, +∞)')],
      ['Solve ' + m('x² − 2x − 8 < 0'), m('(−2, 4)')],
      ['Solve ' + m('x² + 3x + 7 > 0'), 'All ' + m('x')],
      ['Solve ' + m('x² + 3x + 7 < 0'), 'No solution'],
      ['Solve ' + m('(x + 1)(x − 2)(x − 4) < 0'), m('(−∞, −1) ∪ (2, 4)')],
      ['Solve ' + m(f('x − 2', 'x + 3') + ' ≤ 0'), m('(−3, 2]')],
      ['Least value of ' + m('y = x² − 8x + 11'), m('−5')]
    ],
    hard: [
      ['Solve ' + m('(x + 1)(x − 2)²(x − 4) ≤ 0'), m('[−1, 4]')],
      ['Solve ' + m(f('x² − 4', 'x − 1') + ' ≥ 0'), m('[−2, 1) ∪ [2, +∞)')],
      ['For which ' + m('k') + ' is ' + m('x² + kx + 7 > 0') + ' always?', m('−2' + sr('7') + ' < k < 2' + sr('7'))],
      ['Solve ' + m('x⁴ − 10x² + 9 < 0'), m('(−3, −1) ∪ (1, 3)')],
      ['The domain of ' + m(sr('x² − 2x − 8')), m('(−∞, −2] ∪ [4, +∞)')],
      ['Solve ' + m(f('3', 'x + 1') + ' > ' + f('2', 'x')), m('(−1, 0) ∪ (2, +∞)')],
      ['A parabola with least value ' + m('−9') + ' and roots ' + m('−2, 4'), m('y = x² − 2x − 8')]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Bring the concept map to Lesson 17; the properties of functions are read off it.',
  homework: [
    'Rewrite in full every control-work question that lost a mark, naming the slip in the margin.',
    'Complete the five-box concept map with each link written as a sentence.',
    'Solve ' + m(f('x + 4', 'x − 1') + ' ≥ 0') + ' and draw the answer on a number line.',
    'Write your target for the rest of Chapter I in one checkable sentence, and date it.'
  ]
});

/* ============================== 09 ============================== */
G9_ALG.push({
  id: 'a9-09', stream: 'alg', grade: 9, quarter: 1, lessons: '17–18', hours: 2,
  title: 'The domain of a function',
  subtitle: 'Three things forbid a value: a zero denominator, a negative under a square root, and both at once.',
  uz: 'Algebra 9, §9', uzPage: 'pp. 37–40',
  cam: 'IGX 10.1', camPage: 'Core & Extended, pp. 198–215', wb: 'Exercise 10.1',
  objectives: [
    'State what the domain of a function means.',
    'Find the domain of a rational, a root and a mixed expression.',
    'Write a domain as an interval or a union of intervals.',
    'Recognise when a domain question is really a quadratic inequality.'
  ],
  terms: [
    ['Domain', 'Aniqlanish sohasi', 'Область определения'],
    ['Range', 'Qiymatlar sohasi', 'Область значений'],
    ['Denominator', 'Maxraj', 'Знаменатель'],
    ['Radicand', 'Ildiz ostidagi ifoda', 'Подкоренное выражение'],
    ['Admissible value', 'Mumkin bo‘lgan qiymat', 'Допустимое значение'],
    ['Excluded value', 'Chetlangan qiymat', 'Исключённое значение'],
    ['Union of intervals', 'Oraliqlar birlashmasi', 'Объединение промежутков'],
    ['Natural domain', 'Tabiiy soha', 'Естественная область']
  ],
  timing: [[12, 'What a domain is'], [22, 'The two forbidden things'], [25, 'Roots and quadratics'], [23, 'Both at once'], [8, 'Homework']],
  sections: [
    {
      h: 'What a domain is',
      html: `<p>The <b>domain</b> ${m('D(f)')} is the set of ${m('x')} for which the formula makes sense.
      Unless a problem says otherwise, it is the largest such set — the <b>natural</b> domain.</p>
      {{fig:mapping:Every x of the domain sends one y to the range; a forbidden x has no arrow at all.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Function</th><th>Domain</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td class="m">y = 3x − 7</td><td>all ${m('x')}</td><td>nothing forbids anything</td></tr>
        <tr><td class="m">y = x² + 1</td><td>all ${m('x')}</td><td>polynomials are always defined</td></tr>
        <tr><td class="m">y = ${f('1', 'x')}</td><td class="m">x ≠ 0</td><td>no division by zero</td></tr>
        <tr><td class="m">y = ${sr('x')}</td><td class="m">x ≥ 0</td><td>no root of a negative</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Polynomials are free</div>
      Any expression built only from ${m('+, −, ×')} and whole-number powers is defined everywhere. Only
      a <b>division</b> or a <b>square root</b> can forbid a value — so look for those two and nothing
      else.</div>`
    },
    {
      h: 'The two forbidden things',
      html: `${eq('denominator ' + m('≠ 0') + '     ·     radicand ' + m('≥ 0'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Function</th><th>Condition</th><th>Domain</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('1', 'x − 3')}</td><td class="m">x − 3 ≠ 0</td><td class="m">x ≠ 3</td></tr>
        <tr><td class="m">${f('x', 'x² − 4')}</td><td class="m">x² − 4 ≠ 0</td><td class="m">x ≠ ±2</td></tr>
        <tr><td class="m">${sr('x − 5')}</td><td class="m">x − 5 ≥ 0</td><td class="m">[5, +∞)</td></tr>
        <tr><td class="m">${sr('7 − x')}</td><td class="m">7 − x ≥ 0</td><td class="m">(−∞, 7]</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A root in the <b>denominator</b> obeys both rules at once</span>
      For ${m(f('1', sr('x − 5')))} the radicand must be non-negative <b>and</b> the denominator
      non-zero, so ${m('x − 5 > 0')} — strictly. The domain is ${m('(5, +∞)')}, not ${m('[5, +∞)')}.</div>`
    },
    {
      h: 'Roots and quadratics',
      html: `<p>When the radicand is a quadratic, the domain question <b>is</b> a quadratic inequality —
      exactly the work of Lessons 9–14.</p>
      <p><b>Example.</b> ${m('y = ' + sr('x² − 5x + 6'))}. Need ${m('x² − 5x + 6 ≥ 0')}, that is
      ${m('(x − 2)(x − 3) ≥ 0')}: outside the roots, inclusive.</p>
      ${eq(m('D(f) = (−∞, 2] ∪ [3, +∞)'), true)}
      {{fig:quadSignChart:The same sign chart, now answering a domain question.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Function</th><th>Inequality</th><th>Domain</th></tr></thead>
      <tbody>
        <tr><td class="m">${sr('9 − x²')}</td><td class="m">9 − x² ≥ 0</td><td class="m">[−3, 3]</td></tr>
        <tr><td class="m">${sr('x² + 1')}</td><td class="m">x² + 1 ≥ 0</td><td>all ${m('x')}</td></tr>
        <tr><td class="m">${sr('−x² − 1')}</td><td class="m">−x² − 1 ≥ 0</td><td class="m">∅</td></tr>
      </tbody></table></div>
      <p>The last two are the degenerate cases again: ${m('x² + 1')} is never negative, so nothing is
      forbidden; ${m('−x² − 1')} is never positive, so <b>everything</b> is.</p>`
    },
    {
      h: 'Both at once',
      html: `<p>When several conditions appear, find each and take the <b>intersection</b> — the values
      that satisfy all of them.</p>
      <p><b>Example.</b> ${m('y = ' + f(sr('x − 1'), 'x − 4'))}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Source</th><th>Condition</th><th>Set</th></tr></thead>
      <tbody>
        <tr><td>the root</td><td class="m">x − 1 ≥ 0</td><td class="m">[1, +∞)</td></tr>
        <tr><td>the denominator</td><td class="m">x − 4 ≠ 0</td><td class="m">x ≠ 4</td></tr>
        <tr><td><b>together</b></td><td>both</td><td class="m">[1, 4) ∪ (4, +∞)</td></tr>
      </tbody></table></div>
      {{fig:systemIntervals:Two conditions on one line; the domain is where both hold.}}
      <div class="keybox"><div class="klabel">Draw both on the same line</div>
      Mark the first condition above the line and the second below it. The domain is the part where both
      marks agree — which is far quicker, and far safer, than trying to intersect the intervals in your
      head.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the domain of ' + m('y = ' + f('x + 1', 'x² − 9')) + '.',
      steps: [
        [m('x² − 9 ≠ 0'), 'Only the denominator can forbid.'],
        [m('(x − 3)(x + 3) ≠ 0'), ''],
        [m('x ≠ 3') + ' and ' + m('x ≠ −3'), ''],
        [m('(−∞, −3) ∪ (−3, 3) ∪ (3, +∞)'), '']
      ],
      ans: 'All ' + m('x') + ' except ' + m('±3')
    },
    {
      q: 'Find the domain of ' + m('y = ' + sr('x² − 5x + 6')) + '.',
      steps: [
        [m('x² − 5x + 6 ≥ 0'), ''],
        [m('(x − 2)(x − 3) ≥ 0'), ''],
        [m('a > 0') + ', want ' + m('≥ 0') + ' — outside, inclusive.', ''],
        [m('(−∞, 2] ∪ [3, +∞)'), '']
      ],
      ans: m('(−∞, 2] ∪ [3, +∞)')
    },
    {
      q: 'Find the domain of ' + m('y = ' + f(sr('x − 1'), 'x − 4')) + '.',
      steps: [
        [m('x − 1 ≥ 0 ⇒ x ≥ 1'), ''],
        [m('x − 4 ≠ 0 ⇒ x ≠ 4'), ''],
        ['Intersect the two.', ''],
        [m('[1, 4) ∪ (4, +∞)'), '']
      ],
      ans: m('[1, 4) ∪ (4, +∞)')
    },
    {
      q: 'Find the domain of ' + m('y = ' + f('1', sr('4 − x²'))) + '.',
      steps: [
        ['A root downstairs: ' + m('4 − x² > 0') + ', strictly.', ''],
        [m('x² < 4'), ''],
        [m('−2 < x < 2'), '']
      ],
      ans: m('(−2, 2)')
    }
  ],
  modelNote: 'Write five formulas on the board and ask only “what could possibly go wrong here?” before anyone computes.',
  interactive: {
    type: 'inequalityLine',
    title: 'Where is the expression defined?',
    hint: 'The domain is a set on the line, like any other.'
  },
  quiz: [
    { q: 'The domain of a polynomial is:', a: [m('x ≥ 0'), 'all ' + m('x'), m('x ≠ 0'), 'an interval'], c: 1, why: 'Nothing forbids anything.' },
    { q: 'Only two things forbid a value:', a: ['addition and subtraction', 'a zero denominator and a negative radicand', 'squares and cubes', 'brackets'], c: 1, why: 'Look for those.' },
    { q: 'The domain of ' + m(sr('x − 5')) + ' is:', a: [m('x > 5'), m('x ≥ 5'), m('x ≤ 5'), 'all ' + m('x')], c: 1, why: 'Zero is allowed under a root.' },
    { q: 'The domain of ' + m(f('1', sr('x − 5'))) + ' is:', a: [m('x ≥ 5'), m('x > 5'), m('x ≠ 5'), 'all ' + m('x')], c: 1, why: 'Both rules at once.' },
    { q: 'The domain of ' + m(sr('x² + 1')) + ' is:', a: [m('x ≥ 0'), 'all ' + m('x'), m('∅'), m('x ≥ −1')], c: 1, why: 'Never negative.' },
    { q: 'Several conditions are combined by:', a: ['union', 'intersection', 'addition', 'the first one only'], c: 1, why: 'All must hold.' }
  ],
  practice: {
    easy: [
      ['Domain of ' + m('y = 3x − 7'), 'All ' + m('x')],
      ['Domain of ' + m('y = ' + f('1', 'x')), m('x ≠ 0')],
      ['Domain of ' + m('y = ' + f('1', 'x − 3')), m('x ≠ 3')],
      ['Domain of ' + m('y = ' + sr('x')), m('[0, +∞)')],
      ['Domain of ' + m('y = ' + sr('x − 5')), m('[5, +∞)')],
      ['Domain of ' + m('y = ' + sr('7 − x')), m('(−∞, 7]')],
      ['Domain of ' + m('y = x² + 1'), 'All ' + m('x')]
    ],
    med: [
      ['Domain of ' + m('y = ' + f('x + 1', 'x² − 9')), 'All ' + m('x') + ' except ' + m('±3')],
      ['Domain of ' + m('y = ' + sr('x² − 5x + 6')), m('(−∞, 2] ∪ [3, +∞)')],
      ['Domain of ' + m('y = ' + sr('9 − x²')), m('[−3, 3]')],
      ['Domain of ' + m('y = ' + f('1', sr('x − 5'))), m('(5, +∞)')],
      ['Domain of ' + m('y = ' + f(sr('x − 1'), 'x − 4')), m('[1, 4) ∪ (4, +∞)')],
      ['Domain of ' + m('y = ' + f('1', sr('4 − x²'))), m('(−2, 2)')],
      ['Domain of ' + m('y = ' + sr('−x² − 1')), m('∅')]
    ],
    hard: [
      ['Domain of ' + m('y = ' + sr('x') + ' + ' + sr('6 − x')), m('[0, 6]')],
      ['Domain of ' + m('y = ' + f(sr('x + 2'), 'x² − x − 6')), m('[−2, 3) ∪ (3, +∞)')],
      ['Domain of ' + m('y = ' + sr(f('x − 1', 'x + 2'))), m('(−∞, −2) ∪ [1, +∞)')],
      ['Domain of ' + m('y = ' + f('1', 'x² − 5x + 6')), 'All ' + m('x') + ' except ' + m('2') + ' and ' + m('3')],
      ['Domain of ' + m('y = ' + sr('x² − 4') + ' + ' + f('1', 'x')), m('(−∞, −2] ∪ [2, +∞)')],
      ['For which ' + m('k') + ' is the domain of ' + m(sr('x² + kx + 4')) + ' all of ' + m('ℝ') + '?', m('−4 ≤ k ≤ 4')],
      ['Domain of ' + m('y = ' + f(sr('4 − x'), sr('x − 1'))), m('(1, 4]')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write the condition before the answer; the mark is for the condition.',
  homework: [
    'Find the domain of ' + m('y = ' + f('2x', 'x² − 16')) + '.',
    'Find the domain of ' + m('y = ' + sr('x² − x − 12')) + '.',
    'Find the domain of ' + m('y = ' + f(sr('x + 3'), 'x − 2')) + '.',
    'Find the domain of ' + m('y = ' + f('1', sr('16 − x²'))) + '.',
    'Explain in two sentences why the domain of ' + m(f('1', sr('x')))+ ' is ' + m('(0, +∞)') + ' and not ' + m('[0, +∞)') + '.'
  ]
});

/* ============================== 10 ============================== */
G9_ALG.push({
  id: 'a9-10', stream: 'alg', grade: 9, quarter: 1, lessons: '19', hours: 1,
  title: 'Increasing and decreasing functions',
  subtitle: 'Read the graph left to right: uphill is increasing, downhill is decreasing.',
  uz: 'Algebra 9, §10', uzPage: 'pp. 41–44',
  cam: 'IGX 10.1', camPage: 'Core & Extended, pp. 198–215', wb: 'Exercise 10.1',
  objectives: [
    'Define increasing and decreasing on an interval.',
    'Read the intervals of monotonicity from a graph.',
    'Find them for a quadratic from its vertex.',
    'Prove a simple case from the definition.'
  ],
  terms: [
    ['Increasing', 'O‘suvchi', 'Возрастающая'],
    ['Decreasing', 'Kamayuvchi', 'Убывающая'],
    ['Monotonic', 'Monoton', 'Монотонная'],
    ['Interval of increase', 'O‘sish oralig‘i', 'Промежуток возрастания'],
    ['Turning point', 'Burilish nuqtasi', 'Точка поворота'],
    ['Constant function', 'O‘zgarmas funksiya', 'Постоянная функция'],
    ['On an interval', 'Oraliqda', 'На промежутке'],
    ['Definition', 'Ta’rif', 'Определение']
  ],
  timing: [[8, 'The definition'], [12, 'Reading a graph'], [12, 'Quadratics'], [8, 'A short proof']],
  sections: [
    {
      h: 'The definition',
      html: `${eq(m('f') + ' <b>increases</b> on ' + m('I') + ' if ' + m('x₁ < x₂ ⇒ f(x₁) < f(x₂)') + ' for all ' + m('x₁, x₂ ∈ I'), true)}
      ${eq(m('f') + ' <b>decreases</b> on ' + m('I') + ' if ' + m('x₁ < x₂ ⇒ f(x₁) > f(x₂)'), true)}
      {{fig:monotonic:Uphill on one interval, downhill on another — read left to right, always.}}
      <div class="warn"><span class="wl">Always “on an interval”, never “at a point”</span>
      A function is not increasing <i>at</i> ${m('x = 2')}; it increases <i>on</i> ${m('[2, 5]')} or on
      ${m('(−∞, 1]')}. Naming the interval is half the answer, and an answer without one earns no
      mark.</div>`
    },
    {
      h: 'Reading a graph',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>The curve</th><th>Reading left to right</th><th>Name</th></tr></thead>
      <tbody>
        <tr><td>rises</td><td>${m('y')} grows</td><td>increasing</td></tr>
        <tr><td>falls</td><td>${m('y')} shrinks</td><td>decreasing</td></tr>
        <tr><td>flat</td><td>${m('y')} unchanged</td><td>constant</td></tr>
      </tbody></table></div>
      <p>The intervals change only at a <b>turning point</b> or where the function is undefined. So find
      those first, and the intervals are what lies between them.</p>`
    },
    {
      h: 'Quadratics',
      html: `<p>A parabola has exactly one turning point — the vertex — so it has exactly two intervals of
      monotonicity.</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">a</th><th>Left of the vertex</th><th>Right of the vertex</th></tr></thead>
      <tbody>
        <tr><td class="m">a > 0</td><td>decreasing</td><td>increasing</td></tr>
        <tr><td class="m">a &lt; 0</td><td>increasing</td><td>decreasing</td></tr>
      </tbody></table></div>
      <p><b>Example.</b> ${m('y = x² − 6x + 5')} has vertex at ${m('x = 3')} and ${m('a > 0')}, so it
      decreases on ${m('(−∞, 3]')} and increases on ${m('[3, +∞)')}.</p>
      <div class="keybox"><div class="klabel">The vertex is the only place it can turn</div>
      Find ${m('x = −' + f('b', '2a'))}, look at the sign of ${m('a')}, and both intervals are written.
      No table of values is needed at all.</div>`
    },
    {
      h: 'A short proof',
      html: `<p>Take ${m('f(x) = 3x + 1')} and any ${m('x₁ < x₂')}:</p>
      ${eq(m('f(x₂) − f(x₁) = 3(x₂ − x₁) > 0'), true)}
      <p>Since ${m('x₂ − x₁ > 0')}, the difference is positive, so ${m('f(x₂) > f(x₁)')}: the function
      increases on the whole of ${m('ℝ')}.</p>
      <div class="keybox"><div class="klabel">The pattern of every such proof</div>
      Form ${m('f(x₂) − f(x₁)')}, factor out ${m('(x₂ − x₁)')}, and decide the sign of what is left.
      For ${m('y = kx + b')} the answer is just the sign of ${m('k')} — which is why a line is
      increasing exactly when its gradient is positive.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the intervals of monotonicity of ' + m('y = x² − 6x + 5') + '.',
      steps: [
        [m('x = ' + f('6', '2') + ' = 3'), 'The vertex.'],
        [m('a = 1 > 0'), ''],
        ['Decreasing on ' + m('(−∞, 3]') + '.', ''],
        ['Increasing on ' + m('[3, +∞)') + '.', '']
      ],
      ans: 'Decreasing on ' + m('(−∞, 3]') + ', increasing on ' + m('[3, +∞)')
    },
    {
      q: 'Find them for ' + m('y = −2x² + 8x − 1') + '.',
      steps: [
        [m('x = −' + f('8', '−4') + ' = 2'), ''],
        [m('a = −2 < 0'), ''],
        ['Increasing on ' + m('(−∞, 2]') + ', decreasing on ' + m('[2, +∞)') + '.', '']
      ],
      ans: 'Increasing on ' + m('(−∞, 2]') + ', decreasing on ' + m('[2, +∞)')
    },
    {
      q: 'Prove that ' + m('f(x) = 3x + 1') + ' increases on ' + m('ℝ') + '.',
      steps: [
        ['Take any ' + m('x₁ < x₂') + '.', ''],
        [m('f(x₂) − f(x₁) = 3x₂ + 1 − 3x₁ − 1'), ''],
        [m('= 3(x₂ − x₁) > 0'), ''],
        ['So ' + m('f(x₂) > f(x₁)') + ' — increasing.', '']
      ],
      ans: 'Increasing everywhere, since ' + m('k = 3 > 0')
    }
  ],
  modelNote: 'Trace a finger along a drawn curve from left to right and let the class call out “up” or “down” — the definition follows the finger.',
  interactive: {
    type: 'graphTransform',
    title: 'Where does it rise?',
    hint: 'Move the vertex and watch both intervals move with it.'
  },
  quiz: [
    { q: 'Increasing means:', a: [m('x₁ < x₂ ⇒ f(x₁) < f(x₂)'), m('f(x) > 0'), 'the graph is above ' + m('Ox'), m('a > 0')], c: 0, why: 'Bigger input, bigger output.' },
    { q: 'Monotonicity is stated:', a: ['at a point', 'on an interval', 'for one value', 'never'], c: 1, why: 'Always an interval.' },
    { q: m('y = x² − 6x + 5') + ' decreases on:', a: [m('(−∞, 3]'), m('[3, +∞)'), 'all ' + m('x'), m('[0, 3]')], c: 0, why: 'Left of the vertex, ' + m('a > 0') + '.' },
    { q: 'For ' + m('a < 0') + ', right of the vertex the function:', a: ['increases', 'decreases', 'is constant', 'is undefined'], c: 1, why: 'Downhill after the peak.' },
    { q: m('y = kx + b') + ' increases exactly when:', a: [m('b > 0'), m('k > 0'), m('k < 0'), 'always'], c: 1, why: 'The gradient.' }
  ],
  practice: {
    easy: [
      ['Is ' + m('y = 5x + 2') + ' increasing?', 'Yes — ' + m('k = 5 > 0')],
      ['Is ' + m('y = −3x + 1') + ' increasing?', 'No — decreasing'],
      ['Vertex of ' + m('y = x² − 6x + 5'), m('x = 3')],
      ['Vertex of ' + m('y = −2x² + 8x − 1'), m('x = 2')],
      [m('y = x²') + ' decreases on:', m('(−∞, 0]')],
      [m('y = x²') + ' increases on:', m('[0, +∞)')],
      ['Is ' + m('y = 7') + ' increasing?', 'No — constant']
    ],
    med: [
      ['Monotonicity of ' + m('y = x² − 6x + 5'), 'Down on ' + m('(−∞, 3]') + ', up on ' + m('[3, +∞)')],
      ['Monotonicity of ' + m('y = −2x² + 8x − 1'), 'Up on ' + m('(−∞, 2]') + ', down on ' + m('[2, +∞)')],
      ['Monotonicity of ' + m('y = (x + 4)² − 1'), 'Down on ' + m('(−∞, −4]') + ', up after'],
      ['Monotonicity of ' + m('y = 3 − x²'), 'Up on ' + m('(−∞, 0]') + ', down after'],
      ['Prove ' + m('f(x) = 3x + 1') + ' increases', m('f(x₂) − f(x₁) = 3(x₂ − x₁) > 0')],
      ['Prove ' + m('f(x) = −x + 5') + ' decreases', m('f(x₂) − f(x₁) = −(x₂ − x₁) < 0')],
      ['How many turning points has a parabola?', 'One']
    ],
    hard: [
      ['Monotonicity of ' + m('y = ' + f('1', 'x')) + ' on ' + m('(0, +∞)'), 'Decreasing'],
      ['Monotonicity of ' + m('y = ' + sr('x')), 'Increasing on ' + m('[0, +∞)')],
      ['Monotonicity of ' + m('y = |x|'), 'Down on ' + m('(−∞, 0]') + ', up on ' + m('[0, +∞)')],
      ['For which ' + m('k') + ' is ' + m('y = (k − 2)x + 1') + ' decreasing?', m('k < 2')],
      ['Prove ' + m('f(x) = x²') + ' increases on ' + m('[0, +∞)'), m('x₂² − x₁² = (x₂ − x₁)(x₂ + x₁) > 0')],
      ['On which interval is ' + m('y = x² − 4x') + ' decreasing and negative?', m('(0, 2]')],
      ['Monotonicity of ' + m('y = −' + f('2', 'x')) + ' on ' + m('(0, +∞)'), 'Increasing']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Every answer names an interval; a bare “increasing” earns nothing.',
  homework: [
    'Find the intervals of monotonicity of ' + m('y = x² − 10x + 3') + '.',
    'Find them for ' + m('y = −x² − 4x + 1') + '.',
    'Prove from the definition that ' + m('f(x) = 4x − 9') + ' increases on ' + m('ℝ') + '.',
    'Sketch any function that increases on ' + m('(−∞, −1]') + ', decreases on ' + m('[−1, 2]') + ' and increases on ' + m('[2, +∞)') + '.'
  ]
});

/* ============================== 11 ============================== */
G9_ALG.push({
  id: 'a9-11', stream: 'alg', grade: 9, quarter: 1, lessons: '20–21', hours: 2,
  title: 'Even and odd functions',
  subtitle: 'Two symmetries: one in the axis Oy, one about the origin — and most functions have neither.',
  uz: 'Algebra 9, §11', uzPage: 'pp. 45–50',
  cam: 'Extension beyond IGX', camPage: 'Core & Extended, pp. 198–215', wb: 'Exercise 10.1',
  objectives: [
    'Test a function for evenness and oddness from f(−x).',
    'Recognise the two symmetries on a graph.',
    'Check the domain for symmetry before testing anything else.',
    'Use parity to halve the work of sketching.'
  ],
  terms: [
    ['Even function', 'Juft funksiya', 'Чётная функция'],
    ['Odd function', 'Toq funksiya', 'Нечётная функция'],
    ['Parity', 'Juft-toqlik', 'Чётность'],
    ['Symmetric domain', 'Simmetrik soha', 'Симметричная область'],
    ['Symmetry in Oy', 'Oy ga nisbatan simmetriya', 'Симметрия относительно Oy'],
    ['Symmetry about O', 'O ga nisbatan simmetriya', 'Симметрия относительно начала'],
    ['Neither', 'Na juft, na toq', 'Ни чётная, ни нечётная'],
    ['Substitution', 'O‘rniga qo‘yish', 'Подстановка']
  ],
  timing: [[12, 'The two definitions'], [20, 'The domain comes first'], [25, 'Testing'], [23, 'On the graph'], [10, 'Homework']],
  sections: [
    {
      h: 'The two definitions',
      html: `${eq(m('f') + ' is <b>even</b> if ' + m('f(−x) = f(x)') + ' for every ' + m('x') + ' of the domain', true)}
      ${eq(m('f') + ' is <b>odd</b> if ' + m('f(−x) = −f(x)') + ' for every ' + m('x') + ' of the domain', true)}
      {{fig:evenOdd:Even — a mirror in Oy. Odd — a half-turn about the origin.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Function</th><th class="m">f(−x)</th><th>Verdict</th></tr></thead>
      <tbody>
        <tr><td class="m">x²</td><td class="m">x²</td><td>even</td></tr>
        <tr><td class="m">x³</td><td class="m">−x³</td><td>odd</td></tr>
        <tr><td class="m">x² + 1</td><td class="m">x² + 1</td><td>even</td></tr>
        <tr><td class="m">x + 1</td><td class="m">−x + 1</td><td>neither</td></tr>
        <tr><td class="m">|x|</td><td class="m">|x|</td><td>even</td></tr>
        <tr><td class="m">${f('1', 'x')}</td><td class="m">−${f('1', 'x')}</td><td>odd</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the names come from</div>
      ${m('xⁿ')} is even exactly when ${m('n')} is an even number, and odd exactly when ${m('n')} is odd.
      That is the whole origin of the two words — and a quick way to guess the answer before testing
      it.</div>`
    },
    {
      h: 'The domain comes first',
      html: `<p>Both definitions say “for every ${m('x')} of the domain”, and they use ${m('−x')}. So
      ${m('−x')} must itself be in the domain, or the question cannot even be asked.</p>
      ${eq('a function can be even or odd only if its domain is <b>symmetric about ' + m('0') + '</b>', true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Function</th><th>Domain</th><th>Symmetric?</th><th>Verdict</th></tr></thead>
      <tbody>
        <tr><td class="m">x²</td><td>all ${m('x')}</td><td>yes</td><td>test it</td></tr>
        <tr><td class="m">${f('1', 'x')}</td><td class="m">x ≠ 0</td><td>yes</td><td>test it</td></tr>
        <tr><td class="m">${sr('x')}</td><td class="m">[0, +∞)</td><td><b>no</b></td><td>neither, at once</td></tr>
        <tr><td class="m">${sr('x − 1')}</td><td class="m">[1, +∞)</td><td><b>no</b></td><td>neither, at once</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Check the domain before substituting</span>
      ${m(sr('x'))} is neither even nor odd — not because ${m(sr('−x'))} comes out wrong, but because
      ${m(sr('−x'))} does not exist. Saying so is the whole answer, and it takes one line.</div>`
    },
    {
      h: 'Testing',
      html: `<div class="keybox"><div class="klabel">The three steps, every time</div>
      <ol>
        <li>Is the domain symmetric about ${m('0')}? If not, stop: <b>neither</b>.</li>
        <li>Compute ${m('f(−x)')} and simplify.</li>
        <li>Compare with ${m('f(x)')} and with ${m('−f(x)')}.</li>
      </ol></div>
      <p><b>Example.</b> ${m('f(x) = x⁴ − 3x² + 2')}. The domain is all of ${m('ℝ')} ✓.</p>
      ${eq(m('f(−x) = (−x)⁴ − 3(−x)² + 2 = x⁴ − 3x² + 2 = f(x)'), true)}
      <p>So it is even. <b>Example.</b> ${m('g(x) = x³ − 4x')}:</p>
      ${eq(m('g(−x) = −x³ + 4x = −(x³ − 4x) = −g(x)'), true)}
      <p>So it is odd. <b>Example.</b> ${m('h(x) = x² + x')}: ${m('h(−x) = x² − x')}, which is neither
      ${m('h(x)')} nor ${m('−h(x)')} — neither.</p>
      <div class="keybox"><div class="klabel">A polynomial is easy to read off</div>
      All powers even (counting a constant as ${m('x⁰')}) → even. All powers odd → odd. A mixture →
      neither. ${m('x⁴ − 3x² + 2')} is even by inspection; ${m('x³ − 4x')} is odd; ${m('x² + x')} is
      neither.</div>`
    },
    {
      h: 'On the graph',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Parity</th><th>Symmetry</th><th>What it saves you</th></tr></thead>
      <tbody>
        <tr><td>even</td><td>mirror in ${m('Oy')}</td><td>plot ${m('x ≥ 0')}, then reflect</td></tr>
        <tr><td>odd</td><td>half-turn about ${m('O')}</td><td>plot ${m('x ≥ 0')}, then rotate ${m('180°')}</td></tr>
        <tr><td>neither</td><td>none</td><td>nothing</td></tr>
      </tbody></table></div>
      <p>An <b>odd</b> function whose domain contains ${m('0')} must have ${m('f(0) = 0')}: putting
      ${m('x = 0')} in ${m('f(−x) = −f(x)')} gives ${m('f(0) = −f(0)')}, so ${m('2f(0) = 0')}. That
      single check rules out many candidates instantly.</p>
      <div class="keybox"><div class="klabel">Only one function is both</div>
      ${m('f(x) = 0')} satisfies both definitions at once. Every other function is even, odd, or
      neither — never two of them.</div>`
    }
  ],
  examples: [
    {
      q: 'Test ' + m('f(x) = x⁴ − 3x² + 2') + ' for parity.',
      steps: [
        ['Domain ' + m('ℝ') + ' — symmetric ✓', ''],
        [m('f(−x) = x⁴ − 3x² + 2'), 'Even powers only.'],
        [m('= f(x)'), ''],
        ['Even.', '']
      ],
      ans: 'Even'
    },
    {
      q: 'Test ' + m('g(x) = x³ − 4x') + '.',
      steps: [
        ['Domain ' + m('ℝ') + ' ✓', ''],
        [m('g(−x) = −x³ + 4x'), ''],
        [m('= −(x³ − 4x) = −g(x)'), ''],
        ['Odd.', 'Check: ' + m('g(0) = 0') + ' ✓']
      ],
      ans: 'Odd'
    },
    {
      q: 'Test ' + m('h(x) = ' + sr('x') + ' + 1') + '.',
      steps: [
        ['Domain ' + m('[0, +∞)') + '.', ''],
        [m('−1') + ' is not in the domain although ' + m('1') + ' is.', 'Not symmetric.'],
        ['Neither, and no substitution is needed.', '']
      ],
      ans: 'Neither — the domain is not symmetric'
    },
    {
      q: 'Test ' + m('p(x) = ' + f('x', 'x² − 1')) + '.',
      steps: [
        ['Domain ' + m('x ≠ ±1') + ' — symmetric ✓', ''],
        [m('p(−x) = ' + f('−x', 'x² − 1')), ''],
        [m('= −p(x)'), ''],
        ['Odd.', '']
      ],
      ans: 'Odd'
    }
  ],
  modelNote: 'Fold a printed graph along Oy for even, and turn it upside down for odd — the class sees the two symmetries physically.',
  interactive: {
    type: 'graphTransform',
    title: 'Two kinds of symmetry',
    hint: 'Compare the curve with its mirror and with its half-turn.'
  },
  quiz: [
    { q: 'Even means:', a: [m('f(−x) = f(x)'), m('f(−x) = −f(x)'), m('f(x) > 0'), m('f(0) = 0')], c: 0, why: 'Mirror in ' + m('Oy') + '.' },
    { q: 'Odd means:', a: [m('f(−x) = f(x)'), m('f(−x) = −f(x)'), m('f(x) < 0'), 'the powers are odd'], c: 1, why: 'Half-turn about ' + m('O') + '.' },
    { q: 'Before testing you must check:', a: ['the range', 'that the domain is symmetric about ' + m('0'), 'the roots', 'the vertex'], c: 1, why: 'Or ' + m('−x') + ' may not exist.' },
    { q: m(sr('x')) + ' is:', a: ['even', 'odd', 'neither', 'both'], c: 2, why: 'Its domain is not symmetric.' },
    { q: m('x³ − 4x') + ' is:', a: ['even', 'odd', 'neither', 'both'], c: 1, why: 'All powers odd.' },
    { q: 'An odd function with ' + m('0') + ' in its domain has:', a: [m('f(0) = 1'), m('f(0) = 0'), m('f(0) > 0'), 'no value at ' + m('0')], c: 1, why: m('f(0) = −f(0)') + '.' },
    { q: 'Which function is both even and odd?', a: [m('x'), m('x²'), m('f(x) = 0'), 'none'], c: 2, why: 'The zero function only.' }
  ],
  practice: {
    easy: [
      ['Parity of ' + m('y = x²'), 'Even'],
      ['Parity of ' + m('y = x³'), 'Odd'],
      ['Parity of ' + m('y = x + 1'), 'Neither'],
      ['Parity of ' + m('y = |x|'), 'Even'],
      ['Parity of ' + m('y = ' + f('1', 'x')), 'Odd'],
      ['Parity of ' + m('y = 5'), 'Even'],
      ['Is the domain of ' + m(sr('x')) + ' symmetric?', 'No']
    ],
    med: [
      ['Parity of ' + m('y = x⁴ − 3x² + 2'), 'Even'],
      ['Parity of ' + m('y = x³ − 4x'), 'Odd'],
      ['Parity of ' + m('y = x² + x'), 'Neither'],
      ['Parity of ' + m('y = ' + f('x', 'x² − 1')), 'Odd'],
      ['Parity of ' + m('y = ' + sr('x') + ' + 1'), 'Neither — domain'],
      ['Parity of ' + m('y = x|x|'), 'Odd'],
      ['Parity of ' + m('y = x⁵ + x³ + x'), 'Odd']
    ],
    hard: [
      ['Parity of ' + m('y = ' + f('x² + 1', 'x² − 4')), 'Even'],
      ['Parity of ' + m('y = ' + sr('4 − x²')), 'Even'],
      ['Parity of ' + m('y = x³ + x²'), 'Neither'],
      ['For which ' + m('a') + ' is ' + m('y = x³ + ax²') + ' odd?', m('a = 0')],
      ['Show that the product of two odd functions is even', m('(−f)(−g) = fg')],
      ['Show that the sum of an even and an odd function is usually neither', m('f(−x) + g(−x) = f(x) − g(x)')],
      ['Parity of ' + m('y = ' + f('1', 'x³') + ' − x'), 'Odd']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Begin every answer with the domain; parity questions are lost there more often than anywhere else.',
  homework: [
    'Test ' + m('y = x⁶ − x²') + ' for parity.',
    'Test ' + m('y = x⁵ − 2x') + ' for parity.',
    'Test ' + m('y = ' + sr('x + 2')) + ' for parity, giving the reason in one sentence.',
    'Test ' + m('y = ' + f('x³', 'x² + 1')) + ' for parity.',
    'Explain in two sentences why an odd function defined at ' + m('0') + ' must pass through the origin.'
  ]
});

/* ============================== 12 ============================== */
G9_ALG.push({
  id: 'a9-12', stream: 'alg', grade: 9, quarter: 1, lessons: '22–23', hours: 2,
  title: 'Equations and inequalities containing a power',
  subtitle: 'Even powers lose the sign and need ±; odd powers keep it and need nothing.',
  uz: 'Algebra 9, §12', uzPage: 'pp. 51–55',
  cam: 'IGX 2.5', camPage: 'Core & Extended, pp. 35–43', wb: 'Exercise 2.5',
  objectives: [
    'Solve xⁿ = a for even and for odd n.',
    'Solve inequalities of the form xⁿ > a and xⁿ < a.',
    'Use substitution on a biquadratic equation.',
    'Reject the roots that the substitution forbids.'
  ],
  terms: [
    ['Power', 'Daraja', 'Степень'],
    ['Even exponent', 'Juft ko‘rsatkich', 'Чётный показатель'],
    ['Odd exponent', 'Toq ko‘rsatkich', 'Нечётный показатель'],
    ['Biquadratic equation', 'Bikvadrat tenglama', 'Биквадратное уравнение'],
    ['Substitution', 'O‘rniga qo‘yish', 'Подстановка'],
    ['Root of degree n', 'n-darajali ildiz', 'Корень n-й степени'],
    ['Extraneous root', 'Chet ildiz', 'Посторонний корень'],
    ['Modulus', 'Modul', 'Модуль']
  ],
  timing: [[15, 'Even against odd'], [22, 'Equations'], [25, 'Inequalities'], [23, 'Biquadratics'], [5, 'Homework']],
  sections: [
    {
      h: 'Even against odd',
      html: `<p>The whole lesson turns on one fact: an even power destroys the sign, an odd power keeps
      it.</p>
      <div class="tablewrap"><table>
      <thead><tr><th></th><th>Even ${m('n')}</th><th>Odd ${m('n')}</th></tr></thead>
      <tbody>
        <tr><td class="m">(−2)ⁿ</td><td>positive</td><td>negative</td></tr>
        <tr><td>range of ${m('xⁿ')}</td><td class="m">[0, +∞)</td><td class="m">ℝ</td></tr>
        <tr><td>graph</td><td>parabola-like, symmetric in ${m('Oy')}</td><td>rising, symmetric about ${m('O')}</td></tr>
        <tr><td class="m">xⁿ = a</td><td>two roots, one, or none</td><td>always exactly one</td></tr>
      </tbody></table></div>
      {{fig:evenOdd:The two shapes — even powers fold, odd powers pass through.}}
      <div class="keybox"><div class="klabel">The consequence for solving</div>
      ${m('x⁴ = 16')} has two solutions ${m('±2')}; ${m('x³ = 8')} has exactly one, ${m('2')};
      ${m('x⁴ = −16')} has none, and ${m('x³ = −8')} has one, ${m('−2')}. Read the parity of the
      exponent before anything else.</div>`
    },
    {
      h: 'Equations',
      html: `${eq(m('x^{2k} = a') + ':   ' + m('x = ±' + rt('2k', 'a')) + ' if ' + m('a > 0') + ';   ' + m('x = 0') + ' if ' + m('a = 0') + ';   none if ' + m('a < 0'), true)}
      ${eq(m('x^{2k+1} = a') + ':   ' + m('x = ' + rt('2k+1', 'a')) + ',   always exactly one', true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Equation</th><th>Solutions</th></tr></thead>
      <tbody>
        <tr><td class="m">x² = 49</td><td class="m">±7</td></tr>
        <tr><td class="m">x⁴ = 81</td><td class="m">±3</td></tr>
        <tr><td class="m">x⁴ = −81</td><td>none</td></tr>
        <tr><td class="m">x³ = 27</td><td class="m">3</td></tr>
        <tr><td class="m">x⁵ = −32</td><td class="m">−2</td></tr>
        <tr><td class="m">(x − 1)⁴ = 16</td><td class="m">x = 3, −1</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Do not lose the negative root</span>
      ${m('x⁴ = 81')} gives ${m('x = ±3')}, not ${m('x = 3')}. And ${m('(x − 1)⁴ = 16')} gives
      ${m('x − 1 = ±2')}, so <b>both</b> ${m('x = 3')} and ${m('x = −1')}.</div>`
    },
    {
      h: 'Inequalities',
      html: `<p>For an even power the solution set is symmetric; for an odd power it is a single ray.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Inequality</th><th>Solution</th></tr></thead>
      <tbody>
        <tr><td class="m">x² &lt; 9</td><td class="m">(−3, 3)</td></tr>
        <tr><td class="m">x² > 9</td><td class="m">(−∞, −3) ∪ (3, +∞)</td></tr>
        <tr><td class="m">x⁴ ≤ 16</td><td class="m">[−2, 2]</td></tr>
        <tr><td class="m">x² &lt; −4</td><td class="m">∅</td></tr>
        <tr><td class="m">x² > −4</td><td>all ${m('x')}</td></tr>
        <tr><td class="m">x³ &lt; 27</td><td class="m">(−∞, 3)</td></tr>
        <tr><td class="m">x³ > −8</td><td class="m">(−2, +∞)</td></tr>
      </tbody></table></div>
      {{fig:numberLineInterval:Even powers give an interval about the origin or its complement; odd powers give one ray.}}
      <div class="keybox"><div class="klabel">${m('x² < a')} is a modulus statement</div>
      ${m('x² < 9')} says ${m('|x| < 3')}, and ${m('x² > 9')} says ${m('|x| > 3')}. Reading it that way
      makes the symmetry obvious and the brackets automatic.</div>`
    },
    {
      h: 'Biquadratics',
      html: `<p>An equation ${m('ax⁴ + bx² + c = 0')} contains only even powers, so ${m('t = x²')} turns
      it into a quadratic.</p>
      ${eq(m('t = x² ≥ 0') + '   — every negative root of the quadratic is rejected', true)}
      <p><b>Example.</b> ${m('x⁴ − 5x² + 4 = 0')}. With ${m('t = x²')}: ${m('t² − 5t + 4 = 0')}, so
      ${m('t = 1')} or ${m('t = 4')}. Both are non-negative, so ${m('x² = 1')} gives ${m('x = ±1')} and
      ${m('x² = 4')} gives ${m('x = ±2')} — four roots.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Equation</th><th>In ${m('t')}</th><th>Kept</th><th>Roots</th></tr></thead>
      <tbody>
        <tr><td class="m">x⁴ − 5x² + 4 = 0</td><td class="m">t = 1, 4</td><td>both</td><td class="m">±1, ±2</td></tr>
        <tr><td class="m">x⁴ − 3x² − 4 = 0</td><td class="m">t = 4, −1</td><td class="m">t = 4</td><td class="m">±2</td></tr>
        <tr><td class="m">x⁴ + 5x² + 4 = 0</td><td class="m">t = −1, −4</td><td>neither</td><td>none</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Undo the substitution, and reject before you do</span>
      Stopping at ${m('t = 4')} answers a different question. And carrying ${m('t = −1')} forward gives
      ${m('x² = −1')}, which has no real solution — say so rather than writing an imaginary answer in
      Grade 9.</div>`
    }
  ],
  examples: [
    {
      q: 'Solve ' + m('x⁴ = 81') + ' and ' + m('x³ = −64') + '.',
      steps: [
        [m('x⁴ = 81') + ': even power, ' + m('81 > 0') + '.', ''],
        [m('x = ±3'), ''],
        [m('x³ = −64') + ': odd power.', ''],
        [m('x = −4'), 'Exactly one root.']
      ],
      ans: m('x = ±3') + ' and ' + m('x = −4')
    },
    {
      q: 'Solve ' + m('x⁴ − 5x² + 4 = 0') + '.',
      steps: [
        ['Let ' + m('t = x² ≥ 0') + '.', ''],
        [m('t² − 5t + 4 = 0 ⇒ t = 1, 4'), ''],
        ['Both are non-negative — keep both.', ''],
        [m('x = ±1') + ' and ' + m('x = ±2') + '.', '']
      ],
      ans: m('x = ±1, ±2')
    },
    {
      q: 'Solve ' + m('x⁴ − 3x² − 4 = 0') + '.',
      steps: [
        [m('t² − 3t − 4 = 0 ⇒ t = 4') + ' or ' + m('t = −1'), ''],
        [m('t = −1') + ' is rejected: ' + m('x² ≥ 0') + '.', ''],
        [m('x² = 4'), ''],
        [m('x = ±2'), '']
      ],
      ans: m('x = ±2')
    },
    {
      q: 'Solve ' + m('(x − 1)⁴ ≤ 16') + '.',
      steps: [
        [m('|x − 1| ≤ 2'), 'Even power, so a modulus.'],
        [m('−2 ≤ x − 1 ≤ 2'), ''],
        [m('−1 ≤ x ≤ 3'), '']
      ],
      ans: m('[−1, 3]')
    }
  ],
  modelNote: 'Put y = x² and y = x³ on the same axes and let the class say, for each horizontal line, how many times it cuts each curve.',
  interactive: {
    type: 'rootPower',
    title: 'Powers and their roots',
    hint: 'Change the exponent and watch the number of solutions change.'
  },
  quiz: [
    { q: m('x⁴ = 16') + ' has:', a: ['one root', 'two roots', 'four roots', 'none'], c: 1, why: m('±2') + '.' },
    { q: m('x³ = 8') + ' has:', a: ['one root', 'two roots', 'three roots', 'none'], c: 0, why: 'Odd powers are one-to-one.' },
    { q: m('x⁴ = −16') + ' has:', a: ['two roots', 'one root', 'no real root', 'four roots'], c: 2, why: 'An even power is never negative.' },
    { q: m('x² < 9') + ' means:', a: [m('x < 3'), m('|x| < 3'), m('x > −3'), m('|x| > 3')], c: 1, why: 'Symmetric about ' + m('0') + '.' },
    { q: 'In ' + m('x⁴ + bx² + c = 0') + ' the substitution needs:', a: [m('t ≥ 0'), m('t > 0'), m('t ≠ 0'), 'no condition'], c: 0, why: m('t = x²') + '.' },
    { q: m('t = −1') + ' in a biquadratic gives:', a: [m('x = ±1'), 'no real root', m('x = −1'), m('x = 1')], c: 1, why: m('x² = −1') + ' is impossible.' },
    { q: m('x³ < 27') + ' gives:', a: [m('(−3, 3)'), m('(−∞, 3)'), m('(3, +∞)'), 'all ' + m('x')], c: 1, why: 'One ray.' }
  ],
  practice: {
    easy: [
      ['Solve ' + m('x² = 49'), m('±7')],
      ['Solve ' + m('x³ = 27'), m('3')],
      ['Solve ' + m('x⁴ = 81'), m('±3')],
      ['Solve ' + m('x⁵ = −32'), m('−2')],
      ['Solve ' + m('x⁴ = −81'), 'No real root'],
      ['Solve ' + m('x² < 9'), m('(−3, 3)')],
      ['Solve ' + m('x³ < 27'), m('(−∞, 3)')]
    ],
    med: [
      ['Solve ' + m('x⁴ − 5x² + 4 = 0'), m('±1, ±2')],
      ['Solve ' + m('x⁴ − 3x² − 4 = 0'), m('±2')],
      ['Solve ' + m('x⁴ + 5x² + 4 = 0'), 'No real root'],
      ['Solve ' + m('(x − 1)⁴ = 16'), m('x = 3, −1')],
      ['Solve ' + m('x⁴ ≤ 16'), m('[−2, 2]')],
      ['Solve ' + m('x² > −4'), 'All ' + m('x')],
      ['Solve ' + m('x³ > −8'), m('(−2, +∞)')]
    ],
    hard: [
      ['Solve ' + m('(x − 1)⁴ ≤ 16'), m('[−1, 3]')],
      ['Solve ' + m('x⁶ − 9x³ + 8 = 0'), m('x = 1, 2')],
      ['Solve ' + m('x⁴ − 10x² + 9 < 0'), m('(−3, −1) ∪ (1, 3)')],
      ['Solve ' + m('(2x + 1)³ = −27'), m('x = −2')],
      ['For which ' + m('a') + ' has ' + m('x⁴ + a = 0') + ' a real root?', m('a ≤ 0')],
      ['Solve ' + m('x⁴ − 2x² − 8 ≥ 0'), m('(−∞, −2] ∪ [2, +∞)')],
      ['How many real roots has ' + m('x⁴ − 4x² + 4 = 0') + '?', 'Two — ' + m('x = ±' + sr('2'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'For every biquadratic, write the condition ' + m('t ≥ 0') + ' before solving.',
  homework: [
    'Solve ' + m('x⁴ = 625') + ' and ' + m('x³ = −125') + '.',
    'Solve ' + m('x⁴ − 13x² + 36 = 0') + '.',
    'Solve ' + m('x⁴ + 3x² − 4 = 0') + ', saying which root of the quadratic you rejected and why.',
    'Solve ' + m('(x + 2)⁴ < 81') + '.',
    'Explain in two sentences why ' + m('x⁵ = a') + ' always has exactly one real solution.'
  ]
});

/* ============================== 13 ============================== */
G9_ALG.push({
  id: 'a9-13', stream: 'alg', grade: 9, quarter: 1, lessons: '24–25', hours: 2,
  title: 'Chapter exercises — rational and irrational numbers [Cambridge insert]',
  subtitle: 'Which numbers can be written as a fraction, and which provably cannot.',
  uz: 'Algebra 9, Upraжнения k glave I', uzPage: 'pp. 56–62',
  cam: 'IGX 9.2', camPage: 'Core & Extended, pp. 176–182', wb: 'Exercise 9.2',
  objectives: [
    'Classify a number as natural, integer, rational or irrational.',
    'Convert a recurring decimal to a fraction.',
    'Simplify surds and rationalise a denominator.',
    'Follow the proof that √2 is irrational.'
  ],
  terms: [
    ['Natural number', 'Natural son', 'Натуральное число'],
    ['Integer', 'Butun son', 'Целое число'],
    ['Rational number', 'Ratsional son', 'Рациональное число'],
    ['Irrational number', 'Irratsional son', 'Иррациональное число'],
    ['Real number', 'Haqiqiy son', 'Действительное число'],
    ['Recurring decimal', 'Davriy o‘nli kasr', 'Периодическая дробь'],
    ['Surd', 'Irratsional ildiz', 'Радикал'],
    ['Rationalising', 'Maxrajni ratsionallashtirish', 'Освобождение от иррациональности'],
    ['Proof by contradiction', 'Teskarisini faraz qilish', 'Доказательство от противного'],
    ['Set notation', 'To‘plam belgisi', 'Обозначение множеств']
  ],
  timing: [[15, 'The number sets'], [22, 'Recurring decimals'], [25, 'Surds'], [23, 'Why √2 is irrational'], [5, 'Homework']],
  sections: [
    {
      h: 'The number sets',
      html: `${eq(m('ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Set</th><th>Symbol</th><th>Contains</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>natural</td><td class="m">ℕ</td><td>counting numbers</td><td class="m">1, 2, 3, …</td></tr>
        <tr><td>integers</td><td class="m">ℤ</td><td>with zero and negatives</td><td class="m">…, −1, 0, 1, …</td></tr>
        <tr><td>rational</td><td class="m">ℚ</td><td>${m(f('p', 'q'))} with ${m('q ≠ 0')}</td><td class="m">${f('3', '4')}, −2, 0.7, 0.333…</td></tr>
        <tr><td>irrational</td><td>—</td><td>everything else real</td><td class="m">${sr('2')}, π, ${sr('3')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The decimal test</div>
      A number is <b>rational</b> exactly when its decimal expansion terminates or recurs. ${m('0.25')}
      terminates; ${m('0.333…')} recurs; ${m(sr('2') + ' = 1.41421356…')} does neither, and never
      will.</div>`
    },
    {
      h: 'Recurring decimals',
      html: `<p>Every recurring decimal is a fraction, and the conversion is three lines.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th class="m">0.272727…</th></tr></thead>
      <tbody>
        <tr><td>let</td><td class="m">x = 0.272727…</td></tr>
        <tr><td>multiply by ${m('100')}</td><td class="m">100x = 27.272727…</td></tr>
        <tr><td>subtract</td><td class="m">99x = 27</td></tr>
        <tr><td>solve</td><td class="m">x = ${f('27', '99')} = ${f('3', '11')}</td></tr>
      </tbody></table></div>
      <p>The multiplier is ${m('10')} to the power of the <b>length of the repeating block</b>: ${m('10')}
      for one digit, ${m('100')} for two, ${m('1000')} for three.</p>
      <div class="keybox"><div class="klabel">${m('0.999… = 1')}</div>
      Let ${m('x = 0.999…')}; then ${m('10x = 9.999…')} and ${m('9x = 9')}, so ${m('x = 1')}. It is not
      an approximation — the two decimals are two names for the same number.</div>`
    },
    {
      h: 'Surds',
      html: `${eq(m(sr('ab') + ' = ' + sr('a') + '·' + sr('b')) + '     ' + m(sr(f('a', 'b')) + ' = ' + f(sr('a'), sr('b'))) + '     ' + m('(' + sr('a') + ')² = a') + ' for ' + m('a ≥ 0'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Simplified</th></tr></thead>
      <tbody>
        <tr><td class="m">${sr('50')}</td><td class="m">5${sr('2')}</td></tr>
        <tr><td class="m">${sr('12')} + ${sr('27')}</td><td class="m">5${sr('3')}</td></tr>
        <tr><td class="m">${sr('8')} × ${sr('2')}</td><td class="m">4</td></tr>
        <tr><td class="m">${f('1', sr('3'))}</td><td class="m">${f(sr('3'), '3')}</td></tr>
        <tr><td class="m">${f('2', '1 + ' + sr('3'))}</td><td class="m">${sr('3')} − 1</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Rationalising uses the conjugate</div>
      Multiply top and bottom by ${m('1 − ' + sr('3'))}: the bottom becomes
      ${m('(1 + ' + sr('3') + ')(1 − ' + sr('3') + ') = 1 − 3 = −2')}, a whole number. It is the same
      difference-of-squares trick as everywhere else.</div>
      <div class="warn"><span class="wl">${m(sr('a') + ' + ' + sr('b'))} is not ${m(sr('a + b'))}</span>
      ${m(sr('9') + ' + ' + sr('16') + ' = 3 + 4 = 7')}, but ${m(sr('25') + ' = 5')}. The root of a sum is
      never the sum of the roots.</div>`
    },
    {
      h: 'Why √2 is irrational',
      html: `<p>Suppose it were rational. Then ${m(sr('2') + ' = ' + f('p', 'q'))} for whole numbers with
      no common factor.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Reason</th></tr></thead>
      <tbody>
        <tr><td class="m">p² = 2q²</td><td>square both sides</td></tr>
        <tr><td>${m('p²')} is even</td><td>it equals ${m('2q²')}</td></tr>
        <tr><td>${m('p')} is even</td><td>an odd square is odd</td></tr>
        <tr><td>${m('p = 2k')}, so ${m('4k² = 2q²')}</td><td>substitute</td></tr>
        <tr><td>${m('q² = 2k²')}, so ${m('q')} is even</td><td>the same argument</td></tr>
        <tr><td>both even — contradiction</td><td>they had no common factor</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">What the proof really shows</div>
      Not that ${m(sr('2'))} is hard to compute, but that <b>no</b> fraction can equal it — however many
      decimal places you take. The same argument works for ${m(sr('3'))}, ${m(sr('5'))} and
      ${m(sr('p'))} for any prime, and it is the oldest proof of its kind in mathematics.</div>`
    }
  ],
  examples: [
    {
      q: 'Write ' + m('0.272727…') + ' as a fraction.',
      steps: [
        [m('x = 0.272727…'), ''],
        [m('100x = 27.272727…'), 'Two repeating digits.'],
        [m('99x = 27'), ''],
        [m('x = ' + f('27', '99') + ' = ' + f('3', '11')), '']
      ],
      ans: m(f('3', '11'))
    },
    {
      q: 'Simplify ' + m(sr('12') + ' + ' + sr('27')) + '.',
      steps: [
        [m(sr('12') + ' = 2' + sr('3')), ''],
        [m(sr('27') + ' = 3' + sr('3')), ''],
        [m('2' + sr('3') + ' + 3' + sr('3') + ' = 5' + sr('3')), '']
      ],
      ans: m('5' + sr('3'))
    },
    {
      q: 'Rationalise ' + m(f('2', '1 + ' + sr('3'))) + '.',
      steps: [
        ['Multiply by ' + m(f('1 − ' + sr('3'), '1 − ' + sr('3'))) + '.', ''],
        [m('bottom = 1 − 3 = −2'), ''],
        [m(f('2(1 − ' + sr('3') + ')', '−2')), ''],
        [m('= ' + sr('3') + ' − 1'), '']
      ],
      ans: m(sr('3') + ' − 1')
    },
    {
      q: 'Is ' + m(sr('2') + ' + ' + sr('8')) + ' rational or irrational?',
      steps: [
        [m(sr('8') + ' = 2' + sr('2')), ''],
        [m(sr('2') + ' + 2' + sr('2') + ' = 3' + sr('2')), ''],
        [m('3' + sr('2')) + ' is a rational multiple of an irrational number.', ''],
        ['Irrational.', '']
      ],
      ans: 'Irrational — it equals ' + m('3' + sr('2'))
    }
  ],
  modelNote: 'Ask the class to find a fraction equal to √2 on a calculator; every attempt fails, and the proof explains why it must.',
  interactive: {
    type: 'rootPower',
    title: 'Roots, exact and approximate',
    hint: 'The decimal never settles for an irrational root.'
  },
  quiz: [
    { q: 'A rational number is one that:', a: ['has a decimal', 'can be written as ' + m(f('p', 'q')), 'is positive', 'is whole'], c: 1, why: 'With ' + m('q ≠ 0') + '.' },
    { q: 'A number is rational exactly when its decimal:', a: ['is short', 'terminates or recurs', 'has no zeros', 'is infinite'], c: 1, why: 'The decimal test.' },
    { q: m('0.999…') + ' equals:', a: [m('0.99'), 'just under ' + m('1'), m('1'), m(f('9', '10'))], c: 2, why: m('9x = 9') + '.' },
    { q: m(sr('50')) + ' simplifies to:', a: [m('5' + sr('2')), m('2' + sr('5')), m('25' + sr('2')), m('10' + sr('5'))], c: 0, why: m(sr('25 × 2')) + '.' },
    { q: m(sr('9') + ' + ' + sr('16')) + ' equals:', a: [m('5'), m('7'), m('25'), m(sr('25'))], c: 1, why: 'Not the root of the sum.' },
    { q: 'To rationalise ' + m(f('2', '1 + ' + sr('3'))) + ' multiply by:', a: [m('1 + ' + sr('3')), m('1 − ' + sr('3')), m(sr('3')), m('2')], c: 1, why: 'The conjugate.' },
    { q: 'The proof that ' + m(sr('2')) + ' is irrational works by:', a: ['computing decimals', 'contradiction', 'induction', 'a graph'], c: 1, why: 'Assume a fraction, and fail.' }
  ],
  practice: {
    easy: [
      ['Is ' + m('−3') + ' an integer?', 'Yes'],
      ['Is ' + m('0.25') + ' rational?', 'Yes'],
      ['Is ' + m(sr('2')) + ' rational?', 'No'],
      ['Is ' + m(sr('9')) + ' rational?', 'Yes — it is ' + m('3')],
      [m('0.333…') + ' as a fraction', m(f('1', '3'))],
      [m(sr('50')) + ' simplified', m('5' + sr('2'))],
      [m(sr('8')) + ' × ' + m(sr('2')), m('4')]
    ],
    med: [
      [m('0.272727…') + ' as a fraction', m(f('3', '11'))],
      [m('0.4545…') + ' as a fraction', m(f('5', '11'))],
      [m(sr('12') + ' + ' + sr('27')), m('5' + sr('3'))],
      [m(sr('18') + ' − ' + sr('8')), m(sr('2'))],
      ['Rationalise ' + m(f('1', sr('3'))), m(f(sr('3'), '3'))],
      ['Rationalise ' + m(f('2', '1 + ' + sr('3'))), m(sr('3') + ' − 1')],
      ['Is ' + m(sr('2') + ' + ' + sr('8')) + ' rational?', 'No — ' + m('3' + sr('2'))]
    ],
    hard: [
      [m('0.1666…') + ' as a fraction', m(f('1', '6'))],
      ['Rationalise ' + m(f(sr('5'), sr('5') + ' − 1')), m(f('5 + ' + sr('5'), '4'))],
      ['Is ' + m('(' + sr('2') + ' + 1)(' + sr('2') + ' − 1)') + ' rational?', 'Yes — it is ' + m('1')],
      ['Simplify ' + m('(' + sr('3') + ' + ' + sr('2') + ')²'), m('5 + 2' + sr('6'))],
      ['Prove that ' + m(sr('3')) + ' is irrational', 'The same contradiction, with ' + m('3')],
      ['Give an irrational number between ' + m('2') + ' and ' + m('3'), m(sr('5')) + ' ≈ ' + m('2.236')],
      ['Is the sum of two irrationals always irrational?', 'No — ' + m(sr('2') + ' + (−' + sr('2') + ') = 0')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Give exact answers; a decimal is not a simplification of a surd.',
  homework: [
    'Write ' + m('0.636363…') + ' and ' + m('0.8333…') + ' as fractions.',
    'Simplify ' + m(sr('75') + ' − ' + sr('12')) + '.',
    'Rationalise ' + m(f('3', '2 − ' + sr('2'))) + '.',
    'Decide, with a reason, whether ' + m('(' + sr('5') + ' + 2)(' + sr('5') + ' − 2)') + ' is rational.',
    'Write out the proof that ' + m(sr('2')) + ' is irrational in your own words.'
  ]
});

/* ============================== 14 ============================== */
G9_ALG.push({
  id: 'a9-14', stream: 'alg', grade: 9, quarter: 1, lessons: '26–27', hours: 2,
  title: 'Control work 2, and work on the mistakes',
  subtitle: 'The properties of functions in one paper, and the whole of Chapter I as a single map.',
  uz: 'Algebra 9, Nazorat ishi 2', uzPage: 'pp. 60–67',
  cam: 'IGX 9–10 review', camPage: 'Core & Extended, pp. 176–228', wb: 'Control paper A2',
  objectives: [
    'Find a domain, a monotonicity interval and a parity under time.',
    'Solve an equation and an inequality containing a power.',
    'Classify each lost mark and rewrite the solution in full.',
    'Draw Chapter I as one map before the next chapter begins.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Domain', 'Aniqlanish sohasi', 'Область определения'],
    ['Monotonicity', 'Monotonlik', 'Монотонность'],
    ['Parity', 'Juft-toqlik', 'Чётность'],
    ['Biquadratic', 'Bikvadrat', 'Биквадратное'],
    ['Surd', 'Irratsional ildiz', 'Радикал'],
    ['Concept map', 'Tushunchalar xaritasi', 'Карта понятий'],
    ['Target', 'Maqsad', 'Цель']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [12, 'Answers'], [20, 'Diagnosis and rewrite'], [5, 'The map']],
  sections: [
    {
      h: 'The paper — 30 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Find the domain of ${m('y = ' + f(sr('x + 2'), 'x − 3'))}</td><td class="m">5</td><td>L17–18</td></tr>
        <tr><td>2</td><td>Find the domain of ${m('y = ' + sr('x² − x − 6'))}</td><td class="m">5</td><td>L17–18</td></tr>
        <tr><td>3</td><td>Give the intervals of monotonicity of ${m('y = x² + 6x − 1')}</td><td class="m">4</td><td>L19</td></tr>
        <tr><td>4</td><td>Test ${m('y = x⁴ − x²')} and ${m('y = x³ + x')} for parity</td><td class="m">6</td><td>L20–21</td></tr>
        <tr><td>5</td><td>Solve ${m('x⁴ − 13x² + 36 = 0')}</td><td class="m">6</td><td>L22–23</td></tr>
        <tr><td>6</td><td>Simplify ${m(sr('32') + ' − ' + sr('8'))} and rationalise ${m(f('1', '2 + ' + sr('3')))}</td><td class="m">4</td><td>L24–25</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks actually go</div>
      Q1 carries one mark for combining <b>both</b> conditions; Q2 one for the square brackets; Q3 one
      for naming the intervals rather than saying “increasing”; Q4 one for checking the domain first;
      Q5 one for undoing the substitution. Five of the thirty marks are habits.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>one condition only</td><td class="m">[−2, +∞)</td><td>the denominator forbids ${m('3')} too</td></tr>
        <tr><td>wrong side of the roots</td><td class="m">[−2, 3]</td><td>outside for ${m('≥ 0')}, ${m('a > 0')}</td></tr>
        <tr><td>no interval named</td><td>“increasing”</td><td>on ${m('[−3, +∞)')}</td></tr>
        <tr><td>parity without the domain</td><td>substituting into ${m(sr('x'))}</td><td>check symmetry first</td></tr>
        <tr><td>substitution not undone</td><td class="m">t = 4, 9</td><td class="m">x = ±2, ±3</td></tr>
        <tr><td>negative ${m('t')} kept</td><td class="m">x² = −1</td><td>reject it and say so</td></tr>
        <tr><td>surd left unsimplified</td><td class="m">${sr('32')}</td><td class="m">4${sr('2')}</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'Chapter I as one map',
      html: `<p>Six boxes, and the links written as sentences:</p>
      <ul>
        <li><b>${m('a')} and ${m('D')}</b> → <b>the picture</b> — “direction, and how many roots”</li>
        <li><b>completing the square</b> → <b>the vertex</b> — “and therefore the least or greatest value”</li>
        <li><b>the roots</b> → <b>the sign</b> — “${m('a')}'s sign outside, the opposite between”</li>
        <li><b>factors</b> → <b>the number line</b> — “mark, alternate, read”</li>
        <li><b>denominators and roots</b> → <b>the domain</b> — “the only two things that forbid”</li>
        <li><b>${m('f(−x)')}</b> → <b>parity</b> — “but only if the domain is symmetric”</li>
      </ul>
      {{fig:quadGraph:One picture, and five of the six boxes read off it.}}
      <div class="keybox"><div class="klabel">Looking forward</div>
      Chapter II takes the same quadratic and puts <b>two</b> of them together: systems of second-degree
      equations, systems of second-degree inequalities, and the proof of simple inequalities. Nothing new
      is needed — only what is on this map, used twice at once.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q1: the domain of ' + m('y = ' + f(sr('x + 2'), 'x − 3')) + '.',
      steps: [
        [m('x + 2 ≥ 0 ⇒ x ≥ −2'), 'The root.'],
        [m('x − 3 ≠ 0 ⇒ x ≠ 3'), 'The denominator.'],
        ['Both must hold.', ''],
        [m('[−2, 3) ∪ (3, +∞)'), '']
      ],
      ans: m('[−2, 3) ∪ (3, +∞)')
    },
    {
      q: 'Model answer, Q4: test ' + m('y = x⁴ − x²') + ' and ' + m('y = x³ + x') + '.',
      steps: [
        ['Both domains are ' + m('ℝ') + ' — symmetric ✓', ''],
        [m('(−x)⁴ − (−x)² = x⁴ − x²') + ' — even.', 'All powers even.'],
        [m('(−x)³ + (−x) = −x³ − x = −(x³ + x)') + ' — odd.', 'All powers odd.'],
        ['Even, and odd, respectively.', '']
      ],
      ans: 'The first is even, the second odd'
    },
    {
      q: 'Model answer, Q5: solve ' + m('x⁴ − 13x² + 36 = 0') + '.',
      steps: [
        ['Let ' + m('t = x² ≥ 0') + '.', ''],
        [m('t² − 13t + 36 = 0 ⇒ t = 4, 9'), ''],
        ['Both non-negative — keep both.', ''],
        [m('x = ±2') + ' and ' + m('x = ±3') + '.', 'Four roots.']
      ],
      ans: m('x = ±2, ±3')
    }
  ],
  modelNote: 'Work Q1 twice on the board — once with only the root condition — and let the class find the value that was wrongly admitted.',
  interactive: {
    type: 'quiz',
    title: 'Chapter I in twelve questions',
    hint: 'Two from each block of lessons.',
    items: [
      { q: m('y = ax² + bx + c') + ' is quadratic when:', a: [m('a ≠ 0'), m('b ≠ 0'), m('c ≠ 0'), 'always'], c: 0, why: 'Otherwise linear.' },
      { q: 'The vertex of ' + m('y = (x − 4)² − 1') + ':', a: [m('(4, −1)'), m('(−4, −1)'), m('(4, 1)'), m('(1, 4)')], c: 0, why: 'Reverse the bracket.' },
      { q: m('D < 0') + ' and ' + m('a > 0') + ' mean the trinomial is:', a: ['always negative', 'always positive', 'sometimes zero', 'undefined'], c: 1, why: 'Entirely above ' + m('Ox') + '.' },
      { q: 'For ' + m('a > 0') + ', negative values occur:', a: ['outside the roots', 'between them', 'nowhere', 'everywhere'], c: 1, why: 'The dip.' },
      { q: 'A double zero makes the sign:', a: ['flip', 'stay', 'vanish', 'invert'], c: 1, why: 'A square is non-negative.' },
      { q: 'A denominator zero is drawn:', a: ['filled', 'open', 'either', 'not at all'], c: 1, why: 'Undefined there.' },
      { q: 'The domain of ' + m(sr('x − 4')) + ':', a: [m('x > 4'), m('x ≥ 4'), m('x ≤ 4'), 'all ' + m('x')], c: 1, why: 'Zero is allowed.' },
      { q: 'The domain of ' + m(f('1', sr('x − 4'))) + ':', a: [m('x ≥ 4'), m('x > 4'), m('x ≠ 4'), 'all ' + m('x')], c: 1, why: 'Both rules.' },
      { q: 'Monotonicity is stated:', a: ['at a point', 'on an interval', 'for one value', 'never'], c: 1, why: 'Always an interval.' },
      { q: m('x³ − 4x') + ' is:', a: ['even', 'odd', 'neither', 'both'], c: 1, why: 'All powers odd.' },
      { q: m('x⁴ = 16') + ' has:', a: ['one root', 'two roots', 'four', 'none'], c: 1, why: m('±2') + '.' },
      { q: m(sr('32')) + ' simplifies to:', a: [m('2' + sr('8')), m('4' + sr('2')), m('16' + sr('2')), m('8' + sr('2'))], c: 1, why: m(sr('16 × 2')) + '.' }
    ]
  },
  quiz: [
    { q: 'Q1 needs how many conditions?', a: ['one', 'two', 'three', 'none'], c: 1, why: 'A root and a denominator.' },
    { q: 'Q3’s answer must include:', a: ['the vertex only', 'the named intervals', 'the roots', 'a sketch'], c: 1, why: 'Monotonicity is on an interval.' },
    { q: 'Q4 begins by checking:', a: [m('f(0)'), 'that the domain is symmetric', 'the roots', 'the range'], c: 1, why: 'Or the test is meaningless.' },
    { q: 'Chapter II puts together:', a: ['one quadratic', 'two at once — systems', 'trigonometry', 'progressions'], c: 1, why: 'Systems of second degree.' }
  ],
  practice: {
    easy: [
      ['Domain of ' + m('y = ' + sr('x + 2')), m('[−2, +∞)')],
      ['Domain of ' + m('y = ' + f('1', 'x − 3')), m('x ≠ 3')],
      ['Vertex of ' + m('y = x² + 6x − 1'), m('(−3, −10)')],
      ['Parity of ' + m('y = x⁴ − x²'), 'Even'],
      ['Parity of ' + m('y = x³ + x'), 'Odd'],
      [m(sr('32')) + ' simplified', m('4' + sr('2'))],
      [m(sr('8')) + ' simplified', m('2' + sr('2'))]
    ],
    med: [
      ['Domain of ' + m('y = ' + f(sr('x + 2'), 'x − 3')), m('[−2, 3) ∪ (3, +∞)')],
      ['Domain of ' + m('y = ' + sr('x² − x − 6')), m('(−∞, −2] ∪ [3, +∞)')],
      ['Monotonicity of ' + m('y = x² + 6x − 1'), 'Down on ' + m('(−∞, −3]') + ', up after'],
      ['Solve ' + m('x⁴ − 13x² + 36 = 0'), m('±2, ±3')],
      [m(sr('32') + ' − ' + sr('8')), m('2' + sr('2'))],
      ['Rationalise ' + m(f('1', '2 + ' + sr('3'))), m('2 − ' + sr('3'))],
      ['Solve ' + m('x⁴ = 16'), m('±2')]
    ],
    hard: [
      ['Domain of ' + m('y = ' + f(sr('x² − 4'), 'x − 3')), m('(−∞, −2] ∪ [2, 3) ∪ (3, +∞)')],
      ['Parity of ' + m('y = ' + f('x⁴ + 1', 'x²')), 'Even'],
      ['Solve ' + m('x⁴ − 5x² − 36 = 0'), m('±3')],
      ['Monotonicity of ' + m('y = −x² + 8x'), 'Up on ' + m('(−∞, 4]') + ', down after'],
      ['Simplify ' + m('(2 + ' + sr('3') + ')(2 − ' + sr('3') + ')'), m('1')],
      ['Domain of ' + m('y = ' + f('1', sr('x² − x − 6'))), m('(−∞, −2) ∪ (3, +∞)')],
      ['For which ' + m('k') + ' is ' + m('y = x² + kx + 1') + ' decreasing on ' + m('(−∞, 2]') + '?', m('k = −4')]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Bring the six-box map to the first lesson of Chapter II.',
  homework: [
    'Rewrite in full every control-work question that lost a mark, naming the slip in the margin.',
    'Complete the six-box concept map with every link written as a sentence.',
    'Find the domain of ' + m('y = ' + f(sr('5 − x'), 'x + 1')) + '.',
    'Write your target for Chapter II in one checkable sentence, and date it.'
  ]
});

/* ===================== QUARTER II (21 hours) ===================== */

/* ============================== 15 ============================== */
G9_ALG.push({
  id: 'a9-15', stream: 'alg', grade: 9, quarter: 2, lessons: '28–29', hours: 2,
  title: 'The simplest systems containing a second-degree equation',
  subtitle: 'One equation is linear — so make one unknown the subject and substitute.',
  uz: 'Algebra 9, §13', uzPage: 'pp. 68–71',
  cam: 'IGX 10.2', camPage: 'Core & Extended, pp. 216–225', wb: 'Exercise 10.2',
  objectives: [
    'Solve a linear-and-quadratic system by substitution.',
    'Interpret the solutions as the meeting points of a line and a curve.',
    'Use the discriminant to say how many solutions there are.',
    'Give every solution as an ordered pair.'
  ],
  terms: [
    ['System of equations', 'Tenglamalar sistemasi', 'Система уравнений'],
    ['Substitution method', 'O‘rniga qo‘yish usuli', 'Способ подстановки'],
    ['Second-degree equation', 'Ikkinchi darajali tenglama', 'Уравнение второй степени'],
    ['Ordered pair', 'Tartiblangan juftlik', 'Упорядоченная пара'],
    ['Point of intersection', 'Kesishish nuqtasi', 'Точка пересечения'],
    ['Consistent system', 'Birgalikdagi sistema', 'Совместная система'],
    ['No solution', 'Yechimga ega emas', 'Не имеет решений'],
    ['Check', 'Tekshirish', 'Проверка']
  ],
  timing: [[12, 'What a solution is'], [25, 'Substitution'], [22, 'How many solutions'], [23, 'Reading the picture'], [8, 'Homework']],
  sections: [
    {
      h: 'What a solution is',
      html: `<p>A solution of a system in two unknowns is an <b>ordered pair</b> ${m('(x, y)')} that
      satisfies <b>both</b> equations at once.</p>
      ${eq(m('{ y = x + 1 ;  x² + y² = 25 }') + '   has solutions   ' + m('(3, 4)') + '  and  ' + m('(−4, −3)'), true)}
      <div class="warn"><span class="wl">Two numbers, paired — not two separate answers</span>
      Writing “${m('x = 3, −4')} and ${m('y = 4, −3')}” is ambiguous: it seems to allow ${m('(3, −3)')},
      which satisfies neither equation. Always write the pairs.</div>
      {{fig:coordPoint:A solution is one point of the plane, lying on both graphs at once.}}`
    },
    {
      h: 'Substitution',
      html: `<div class="keybox"><div class="klabel">The method, when one equation is linear</div>
      <ol>
        <li>From the <b>linear</b> equation, make the easier unknown the subject.</li>
        <li>Substitute into the second-degree equation.</li>
        <li>Solve the resulting quadratic in one unknown.</li>
        <li>Substitute each root back into the <b>linear</b> equation for the partner.</li>
      </ol>
      Step 4 uses the linear equation, never the quadratic — it is simpler and cannot introduce a
      false pair.</div>
      <p><b>Example.</b> ${m('{ x + y = 5 ; xy = 6 }')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td>make the subject</td><td class="m">y = 5 − x</td></tr>
        <tr><td>substitute</td><td class="m">x(5 − x) = 6</td></tr>
        <tr><td>tidy</td><td class="m">x² − 5x + 6 = 0</td></tr>
        <tr><td>solve</td><td class="m">x = 2, 3</td></tr>
        <tr><td>partners</td><td class="m">(2, 3) and (3, 2)</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'How many solutions',
      html: `<p>After substitution the system becomes one quadratic, so the discriminant answers the
      counting question directly.</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">D</th><th>Solutions</th><th>Geometrically</th></tr></thead>
      <tbody>
        <tr><td class="m">D > 0</td><td>two pairs</td><td>the line cuts the curve twice</td></tr>
        <tr><td class="m">D = 0</td><td>one pair</td><td>the line is a tangent</td></tr>
        <tr><td class="m">D &lt; 0</td><td>none</td><td>they miss each other</td></tr>
      </tbody></table></div>
      {{fig:lineCircleCases:Two points, one, or none — decided by D alone.}}
      <p><b>Example.</b> For which ${m('c')} is ${m('y = x + c')} a tangent to ${m('x² + y² = 8')}?
      Substituting: ${m('2x² + 2cx + c² − 8 = 0')}, so ${m('D = 4c² − 8(c² − 8) = 64 − 4c²')}. Setting
      ${m('D = 0')} gives ${m('c = ±4')}.</p>`
    },
    {
      h: 'Reading the picture',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>System</th><th>The two graphs</th><th>Solutions</th></tr></thead>
      <tbody>
        <tr><td class="m">y = x + 1 ; x² + y² = 25</td><td>line and circle</td><td class="m">(3, 4), (−4, −3)</td></tr>
        <tr><td class="m">y = 2x ; y = x²</td><td>line and parabola</td><td class="m">(0, 0), (2, 4)</td></tr>
        <tr><td class="m">x + y = 5 ; xy = 6</td><td>line and hyperbola</td><td class="m">(2, 3), (3, 2)</td></tr>
        <tr><td class="m">y = x + 5 ; y = x²</td><td>line and parabola</td><td>two irrational pairs</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Always check one pair</div>
      Substituting ${m('(3, 4)')} into both equations of the first system takes ten seconds and catches
      every arithmetic slip. The check is part of the answer, not an optional extra.</div>`
    }
  ],
  examples: [
    {
      q: 'Solve ' + m('{ x + y = 5 ; xy = 6 }') + '.',
      steps: [
        [m('y = 5 − x'), 'From the linear equation.'],
        [m('x(5 − x) = 6 ⇒ x² − 5x + 6 = 0'), ''],
        [m('x = 2') + ' or ' + m('x = 3'), ''],
        [m('(2, 3)') + ' and ' + m('(3, 2)') + '.', 'Check: ' + m('2 + 3 = 5') + ', ' + m('2 × 3 = 6') + ' ✓']
      ],
      ans: m('(2, 3)') + ' and ' + m('(3, 2)')
    },
    {
      q: 'Solve ' + m('{ y = x + 1 ; x² + y² = 25 }') + '.',
      steps: [
        [m('x² + (x + 1)² = 25'), ''],
        [m('2x² + 2x − 24 = 0 ⇒ x² + x − 12 = 0'), ''],
        [m('x = 3') + ' or ' + m('x = −4'), ''],
        [m('(3, 4)') + ' and ' + m('(−4, −3)') + '.', 'Partners from the line.']
      ],
      ans: m('(3, 4)') + ' and ' + m('(−4, −3)')
    },
    {
      q: 'For which ' + m('c') + ' is ' + m('y = x + c') + ' a tangent to ' + m('x² + y² = 8') + '?',
      steps: [
        [m('x² + (x + c)² = 8'), ''],
        [m('2x² + 2cx + c² − 8 = 0'), ''],
        [m('D = 4c² − 8(c² − 8) = 64 − 4c²'), ''],
        [m('D = 0 ⇒ c = ±4'), '']
      ],
      ans: m('c = 4') + ' or ' + m('c = −4')
    }
  ],
  modelNote: 'Draw the line and the circle on the board and move the line; the class calls out two, one or none before any algebra.',
  interactive: {
    type: 'coordPlane',
    title: 'Where two graphs meet',
    hint: 'Move the line and count the crossings.'
  },
  quiz: [
    { q: 'A solution of a system in two unknowns is:', a: ['a number', 'an ordered pair', 'two separate numbers', 'an interval'], c: 1, why: 'Both equations at once.' },
    { q: 'With one linear equation, use:', a: ['elimination', 'substitution', 'squaring', 'a graph only'], c: 1, why: 'Make one unknown the subject.' },
    { q: 'Substitute the roots back into:', a: ['the quadratic', 'the linear equation', 'either', 'neither'], c: 1, why: 'Simpler and safer.' },
    { q: m('D = 0') + ' after substitution means:', a: ['two points', 'a tangent', 'no meeting', 'an error'], c: 1, why: 'One repeated solution.' },
    { q: m('{ x + y = 5 ; xy = 6 }') + ' has:', a: ['one solution', 'two solutions', 'none', 'infinitely many'], c: 1, why: m('(2,3)') + ' and ' + m('(3,2)') + '.' },
    { q: 'The check is:', a: ['optional', 'part of the answer', 'only for hard questions', 'impossible'], c: 1, why: 'Ten seconds, and conclusive.' }
  ],
  practice: {
    easy: [
      ['Make ' + m('y') + ' the subject of ' + m('x + y = 5'), m('y = 5 − x')],
      ['Solve ' + m('{ y = x ; y = x² }'), m('(0, 0)') + ', ' + m('(1, 1)')],
      ['Solve ' + m('{ y = 2x ; y = x² }'), m('(0, 0)') + ', ' + m('(2, 4)')],
      ['Solve ' + m('{ y = 4 ; y = x² }'), m('(±2, 4)')],
      ['Does ' + m('(3, 4)') + ' satisfy ' + m('x² + y² = 25') + '?', 'Yes'],
      ['Does ' + m('(3, 4)') + ' satisfy ' + m('y = x + 1') + '?', 'Yes'],
      ['Solve ' + m('{ x = 2 ; x² + y² = 13 }'), m('(2, ±3)')]
    ],
    med: [
      ['Solve ' + m('{ x + y = 5 ; xy = 6 }'), m('(2, 3)') + ', ' + m('(3, 2)')],
      ['Solve ' + m('{ y = x + 1 ; x² + y² = 25 }'), m('(3, 4)') + ', ' + m('(−4, −3)')],
      ['Solve ' + m('{ x − y = 1 ; xy = 12 }'), m('(4, 3)') + ', ' + m('(−3, −4)')],
      ['Solve ' + m('{ y = x + 5 ; y = x² + 3 }'), m('(2, 7)') + ', ' + m('(−1, 4)')],
      ['Solve ' + m('{ x + y = 7 ; x² + y² = 25 }'), m('(3, 4)') + ', ' + m('(4, 3)')],
      ['How many solutions has ' + m('{ y = x + 6 ; y = x² }') + '?', 'Two'],
      ['How many solutions has ' + m('{ y = x − 3 ; y = x² }') + '?', 'None']
    ],
    hard: [
      ['For which ' + m('c') + ' is ' + m('y = x + c') + ' a tangent to ' + m('x² + y² = 8') + '?', m('c = ±4')],
      ['Solve ' + m('{ x + y = 6 ; x² + y² = 20 }'), m('(2, 4)') + ', ' + m('(4, 2)')],
      ['Solve ' + m('{ ' + f('1', 'x') + ' + ' + f('1', 'y') + ' = ' + f('5', '6') + ' ; x + y = 5 }'), m('(2, 3)') + ', ' + m('(3, 2)')],
      ['Two numbers have sum ' + m('12') + ' and product ' + m('35') + ': find them', m('5') + ' and ' + m('7')],
      ['A rectangle has perimeter ' + m('26') + ' and area ' + m('40') + ': find its sides', m('5') + ' and ' + m('8')],
      ['For which ' + m('k') + ' has ' + m('{ y = kx ; y = x² + 1 }') + ' exactly one solution?', m('k = ±2')],
      ['Solve ' + m('{ x² + y² = 10 ; x² − y² = 6 }'), m('(±2' + sr('2') + ', ±' + sr('2') + ')')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every answer is a list of ordered pairs, and every pair is checked in both equations.',
  homework: [
    'Solve ' + m('{ x + y = 8 ; xy = 15 }') + '.',
    'Solve ' + m('{ y = 2x − 1 ; x² + y² = 25 }') + '.',
    'Solve ' + m('{ y = x + 2 ; y = x² }') + ' and say what the answer means on a graph.',
    'For which ' + m('c') + ' is ' + m('y = 2x + c') + ' a tangent to ' + m('y = x²') + '?',
    'Two numbers have sum ' + m('9') + ' and sum of squares ' + m('45') + '. Find them.'
  ]
});

/* ============================== 16 ============================== */
G9_ALG.push({
  id: 'a9-16', stream: 'alg', grade: 9, quarter: 2, lessons: '30–31', hours: 2,
  title: 'Methods of solving systems of equations',
  subtitle: 'Substitution, addition, and the symmetric trick — one of the three fits every system.',
  uz: 'Algebra 9, §14', uzPage: 'pp. 72–76',
  cam: 'IGX 6.2', camPage: 'Core & Extended, pp. 124–128', wb: 'Exercise 6.2',
  objectives: [
    'Choose between substitution and addition from the shape of the system.',
    'Solve a system of two second-degree equations by adding or subtracting.',
    'Use the substitution u = x + y, v = xy on a symmetric system.',
    'Reject pairs that fail the original equations.'
  ],
  terms: [
    ['Method of addition', 'Qo‘shish usuli', 'Способ сложения'],
    ['Elimination', 'Yo‘qotish', 'Исключение'],
    ['Symmetric system', 'Simmetrik sistema', 'Симметричная система'],
    ['Auxiliary unknown', 'Yordamchi noma’lum', 'Вспомогательная переменная'],
    ['Homogeneous system', 'Bir jinsli sistema', 'Однородная система'],
    ['Equivalent systems', 'Teng kuchli sistemalar', 'Равносильные системы'],
    ['Extraneous pair', 'Chet juftlik', 'Посторонняя пара'],
    ['Verification', 'Tekshirish', 'Проверка']
  ],
  timing: [[15, 'Choosing a method'], [25, 'Addition'], [25, 'Symmetric systems'], [20, 'Checking'], [5, 'Homework']],
  sections: [
    {
      h: 'Choosing a method',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>The system looks like</th><th>Use</th><th>Because</th></tr></thead>
      <tbody>
        <tr><td>one equation linear</td><td>substitution</td><td>one unknown is easy to isolate</td></tr>
        <tr><td>both have ${m('x²')} and ${m('y²')}</td><td>addition or subtraction</td><td>a whole square cancels</td></tr>
        <tr><td>unchanged when ${m('x')} and ${m('y')} swap</td><td class="m">u = x + y, v = xy</td><td>it becomes linear in ${m('u, v')}</td></tr>
        <tr><td>every term of the same degree</td><td>divide by ${m('y²')}</td><td>it becomes a quadratic in ${m(f('x', 'y'))}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Look before you compute</div>
      Ten seconds spent naming the shape saves a page of algebra. The four rows above cover almost every
      system in the Grade 9 course, and the wrong choice is what makes a question take twenty minutes
      instead of four.</div>`
    },
    {
      h: 'Addition',
      html: `<p>When both equations contain ${m('x²')} and ${m('y²')}, adding or subtracting removes
      one of them entirely.</p>
      <p><b>Example.</b> ${m('{ x² + y² = 25 ; x² − y² = 7 }')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td>add</td><td class="m">2x² = 32 ⇒ x² = 16</td></tr>
        <tr><td>subtract</td><td class="m">2y² = 18 ⇒ y² = 9</td></tr>
        <tr><td>solve</td><td class="m">x = ±4, y = ±3</td></tr>
        <tr><td>pair them</td><td class="m">(4,3), (4,−3), (−4,3), (−4,−3)</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Four sign choices means four solutions — unless a third condition cuts them down</span>
      Here both equations involve only squares, so all four pairs work. If the system had contained
      ${m('xy = 12')} instead, only the two with matching signs would survive. Always test the pairs
      against every equation.</div>`
    },
    {
      h: 'Symmetric systems',
      html: `<p>A system is <b>symmetric</b> if swapping ${m('x')} and ${m('y')} leaves it unchanged. Then
      ${m('u = x + y')} and ${m('v = xy')} turn it into something much smaller.</p>
      ${eq(m('x² + y² = u² − 2v') + '     ' + m('x³ + y³ = u³ − 3uv') + '     ' + m(f('1', 'x') + ' + ' + f('1', 'y') + ' = ' + f('v', 'u') + '^{-1}') + ' … i.e. ' + m(f('u', 'v')), true)}
      <p><b>Example.</b> ${m('{ x + y = 5 ; x² + y² = 13 }')}. Here ${m('u = 5')} and
      ${m('u² − 2v = 13')}, so ${m('25 − 2v = 13')} and ${m('v = 6')}.</p>
      <p>Then ${m('x')} and ${m('y')} are the roots of ${m('t² − ut + v = 0')}, that is
      ${m('t² − 5t + 6 = 0')}: ${m('t = 2, 3')}. The solutions are ${m('(2, 3)')} and ${m('(3, 2)')}.</p>
      <div class="keybox"><div class="klabel">Vieta, running backwards</div>
      Two numbers with sum ${m('u')} and product ${m('v')} are exactly the roots of
      ${m('t² − ut + v = 0')}. That single fact is what makes the substitution work, and it is worth
      knowing on its own — it answers every “two numbers whose sum and product are…” question in one
      line.</div>`
    },
    {
      h: 'Checking',
      html: `<p>Squaring, multiplying by an unknown, or dividing can all introduce pairs that solve the
      new system but not the old one.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Operation</th><th>Risk</th><th>Guard</th></tr></thead>
      <tbody>
        <tr><td>squaring both sides</td><td>false pairs appear</td><td>substitute back</td></tr>
        <tr><td>dividing by ${m('y')}</td><td>${m('y = 0')} is lost</td><td>treat ${m('y = 0')} separately</td></tr>
        <tr><td>multiplying by ${m('x')}</td><td>${m('x = 0')} may appear</td><td>substitute back</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Substituting into one equation is not a check</span>
      A false pair usually satisfies one of the two. Test every candidate in <b>both</b> original
      equations, or the check proves nothing.</div>`
    }
  ],
  examples: [
    {
      q: 'Solve ' + m('{ x² + y² = 25 ; x² − y² = 7 }') + '.',
      steps: [
        ['Add: ' + m('2x² = 32 ⇒ x = ±4') + '.', ''],
        ['Subtract: ' + m('2y² = 18 ⇒ y = ±3') + '.', ''],
        ['All four sign combinations satisfy both.', 'Only squares appear.'],
        [m('(±4, ±3)') + ' — four pairs.', '']
      ],
      ans: m('(4,3), (4,−3), (−4,3), (−4,−3)')
    },
    {
      q: 'Solve ' + m('{ x + y = 5 ; x² + y² = 13 }') + '.',
      steps: [
        [m('u = 5') + ', and ' + m('x² + y² = u² − 2v') + '.', ''],
        [m('25 − 2v = 13 ⇒ v = 6'), ''],
        [m('t² − 5t + 6 = 0 ⇒ t = 2, 3'), ''],
        [m('(2, 3)') + ' and ' + m('(3, 2)') + '.', '']
      ],
      ans: m('(2, 3)') + ' and ' + m('(3, 2)')
    },
    {
      q: 'Solve ' + m('{ x² + xy = 12 ; xy + y² = 24 }') + '.',
      steps: [
        ['Add: ' + m('x² + 2xy + y² = 36') + '.', ''],
        [m('(x + y)² = 36 ⇒ x + y = ±6'), ''],
        ['With ' + m('x + y = 6') + ': ' + m('x(x + y) = 12 ⇒ 6x = 12 ⇒ x = 2, y = 4') + '.', ''],
        ['With ' + m('x + y = −6') + ': ' + m('x = −2, y = −4') + '.', '']
      ],
      ans: m('(2, 4)') + ' and ' + m('(−2, −4)')
    }
  ],
  modelNote: 'Write four systems on the board and ask only which method each needs — no solving — until every pupil names all four correctly.',
  interactive: {
    type: 'coordPlane',
    title: 'Two curves, and where they meet',
    hint: 'A system is a question about intersection.'
  },
  quiz: [
    { q: 'Both equations have ' + m('x²') + ' and ' + m('y²') + '. Use:', a: ['substitution', 'addition or subtraction', 'squaring', 'a graph'], c: 1, why: 'A square cancels.' },
    { q: 'A symmetric system is best handled by:', a: [m('u = x + y, v = xy'), 'squaring', 'dividing', 'guessing'], c: 0, why: 'It becomes small.' },
    { q: m('x² + y²') + ' in terms of ' + m('u') + ' and ' + m('v') + ':', a: [m('u² − v'), m('u² − 2v'), m('u² + 2v'), m('u − 2v')], c: 1, why: m('(x+y)² − 2xy') + '.' },
    { q: 'Numbers with sum ' + m('u') + ' and product ' + m('v') + ' are roots of:', a: [m('t² + ut + v = 0'), m('t² − ut + v = 0'), m('t² − ut − v = 0'), m('t² + v = 0')], c: 1, why: 'Vieta, backwards.' },
    { q: 'Dividing by ' + m('y') + ' risks losing:', a: [m('y = 1'), m('y = 0'), m('x = 0'), 'nothing'], c: 1, why: 'Treat it separately.' },
    { q: 'A candidate pair must be tested in:', a: ['one equation', 'both equations', 'neither', 'the simpler one'], c: 1, why: 'Or the check proves nothing.' }
  ],
  practice: {
    easy: [
      ['Which method for ' + m('{ y = 2x ; x² + y² = 20 }') + '?', 'Substitution'],
      ['Which method for ' + m('{ x² + y² = 25 ; x² − y² = 7 }') + '?', 'Addition'],
      ['Which method for ' + m('{ x + y = 5 ; xy = 6 }') + '?', 'Symmetric — ' + m('u, v')],
      [m('x² + y²') + ' in terms of ' + m('u, v'), m('u² − 2v')],
      ['Roots of ' + m('t² − 5t + 6 = 0'), m('2') + ' and ' + m('3')],
      ['Solve ' + m('{ x² = 16 ; y² = 9 }'), m('(±4, ±3)')],
      ['Solve ' + m('{ x + y = 7 ; x − y = 1 }'), m('(4, 3)')]
    ],
    med: [
      ['Solve ' + m('{ x² + y² = 25 ; x² − y² = 7 }'), m('(±4, ±3)') + ' — four pairs'],
      ['Solve ' + m('{ x + y = 5 ; x² + y² = 13 }'), m('(2, 3)') + ', ' + m('(3, 2)')],
      ['Solve ' + m('{ x + y = 6 ; xy = 8 }'), m('(2, 4)') + ', ' + m('(4, 2)')],
      ['Solve ' + m('{ x² + y² = 10 ; xy = 3 }'), m('(1, 3), (3, 1), (−1, −3), (−3, −1)')],
      ['Solve ' + m('{ x² + xy = 12 ; xy + y² = 24 }'), m('(2, 4)') + ', ' + m('(−2, −4)')],
      ['Solve ' + m('{ x − y = 2 ; x² − y² = 16 }'), m('(5, 3)')],
      ['Two numbers: sum ' + m('10') + ', product ' + m('21'), m('3') + ' and ' + m('7')]
    ],
    hard: [
      ['Solve ' + m('{ x + y = 4 ; x³ + y³ = 28 }'), m('(1, 3)') + ', ' + m('(3, 1)')],
      ['Solve ' + m('{ ' + f('1', 'x') + ' + ' + f('1', 'y') + ' = ' + f('3', '4') + ' ; xy = 8 }'), m('(2, 4)') + ', ' + m('(4, 2)')],
      ['Solve ' + m('{ x² − 3xy + 2y² = 0 ; x + y = 6 }'), m('(3, 3)') + ', ' + m('(4, 2)')],
      ['Solve ' + m('{ x² + y² = 5 ; x² − xy = 0 }'), m('(0, ±' + sr('5') + ')') + ' and ' + m('(±' + f(sr('10'), '2') + ', ±' + f(sr('10'), '2') + ')')],
      ['Two numbers: sum ' + m('6') + ', sum of squares ' + m('26'), m('1') + ' and ' + m('5')],
      ['A rectangle: perimeter ' + m('34') + ', diagonal ' + m('13'), m('5') + ' by ' + m('12')],
      ['Solve ' + m('{ x + y + xy = 11 ; x + y − xy = −1 }'), m('(2, 3)') + ', ' + m('(3, 2)')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Name the method before solving; the name is worth a mark on its own.',
  homework: [
    'Solve ' + m('{ x² + y² = 34 ; x² − y² = 16 }') + '.',
    'Solve ' + m('{ x + y = 7 ; x² + y² = 29 }') + ' using ' + m('u') + ' and ' + m('v') + '.',
    'Solve ' + m('{ x + y = 9 ; xy = 20 }') + '.',
    'Two numbers have sum ' + m('11') + ' and sum of squares ' + m('65') + '. Find them.',
    'Explain in two sentences why dividing a system by ' + m('y') + ' can lose a solution.'
  ]
});

/* ============================== 17 ============================== */
G9_ALG.push({
  id: 'a9-17', stream: 'alg', grade: 9, quarter: 2, lessons: '32–33', hours: 2,
  title: 'Systems of second-degree inequalities with one unknown',
  subtitle: 'Solve each line on its own number line, then keep only what every line agrees on.',
  uz: 'Algebra 9, §15', uzPage: 'pp. 77–81',
  cam: 'IGX 14.3', camPage: 'Core & Extended, pp. 292–296', wb: 'Exercise 14.3',
  objectives: [
    'Solve each inequality of a system separately by the sign of the parabola.',
    'Draw the solution sets on one number line and read off the intersection.',
    'Distinguish a system (and) from a collection (or).',
    'Write the answer in interval notation, with the right kind of bracket.'
  ],
  terms: [
    ['System of inequalities', 'Tengsizliklar sistemasi', 'Система неравенств'],
    ['Collection of inequalities', 'Tengsizliklar majmuasi', 'Совокупность неравенств'],
    ['Intersection', 'Kesishma', 'Пересечение'],
    ['Union', 'Birlashma', 'Объединение'],
    ['Number line', 'Sonlar o‘qi', 'Числовая прямая'],
    ['Interval', 'Oraliq', 'Промежуток'],
    ['Closed bracket', 'Yopiq qavs', 'Закрытая скобка'],
    ['Empty set', 'Bo‘sh to‘plam', 'Пустое множество']
  ],
  timing: [[12, 'One line at a time'], [25, 'Two inequalities together'], [22, 'Systems and collections'], [26, 'Harder shapes'], [5, 'Homework']],
  sections: [
    {
      h: 'One line at a time',
      html: `<p>A <b>system</b> of inequalities asks for the values of ${m('x')} that satisfy
      <b>every</b> line at once. There is no clever combined method: solve each line separately,
      then intersect.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>What you do</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>bring each line to ${m('… > 0')} form</td><td>the sign rule needs one side zero</td></tr>
        <tr><td>2</td><td>find the roots of each</td><td>they are the only places a sign can change</td></tr>
        <tr><td>3</td><td>read the sign from ${m('a')} and the roots</td><td>outside for ${m('a')}'s sign, between for the other</td></tr>
        <tr><td>4</td><td>draw all the solution sets on one axis</td><td>the intersection becomes visible</td></tr>
        <tr><td>5</td><td>write the overlap</td><td>that is the answer</td></tr>
      </tbody></table></div>
      {{fig:systemIntervals:Two solution sets on one axis — the answer is the strip where both are shaded.}}
      <div class="keybox"><div class="klabel">Draw, do not reason in words</div>
      Almost every mark lost on this topic is lost by trying to combine ${m('x < 5')} and ${m('x > −2')}
      in the head. Two short strokes on a number line and the answer reads itself.</div>`
    },
    {
      h: 'Two inequalities together',
      html: `<p><b>Example.</b> ${m('{ x² − 4 > 0 ; x² − 9 < 0 }')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Line</th><th>Roots</th><th>Solution</th></tr></thead>
      <tbody>
        <tr><td class="m">x² − 4 > 0</td><td class="m">−2, 2</td><td class="m">(−∞, −2) ∪ (2, +∞)</td></tr>
        <tr><td class="m">x² − 9 < 0</td><td class="m">−3, 3</td><td class="m">(−3, 3)</td></tr>
        <tr><td>both</td><td>—</td><td class="m">(−3, −2) ∪ (2, 3)</td></tr>
      </tbody></table></div>
      <p>The first is satisfied outside ${m('±2')} because ${m('a > 0')}; the second inside ${m('±3')}
      for the same reason read the other way. The overlap is two short intervals, not one.</p>
      <div class="warn"><span class="wl">An answer may be two intervals</span>
      Learners often assume the intersection of two sets is a single interval. It is whatever the picture
      shows — here two pieces, and sometimes ${m('∅')}. Never force the answer into one bracket.</div>`
    },
    {
      h: 'Systems and collections',
      html: `<p>Uzbek textbooks distinguish the two carefully, and so should the answer.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Written</th><th>Name</th><th>Means</th><th>Answer is</th></tr></thead>
      <tbody>
        <tr><td class="m">{ … ; … }</td><td>system</td><td>both hold</td><td>the intersection</td></tr>
        <tr><td class="m">[ … ; … ]</td><td>collection</td><td>at least one holds</td><td>the union</td></tr>
      </tbody></table></div>
      <p>So ${m('{ x > 1 ; x > 4 }')} gives ${m('x > 4')}, while ${m('[ x > 1 ; x > 4 ]')} gives
      ${m('x > 1')}. The same two lines, opposite answers.</p>
      <div class="keybox"><div class="klabel">A double inequality is a system in disguise</div>
      ${m('−3 < x² − 4 < 5')} is exactly the system ${m('{ x² − 4 > −3 ; x² − 4 < 5 }')}. Split it,
      solve both, intersect. Trying to work on all three parts at once is where sign errors breed.</div>`
    },
    {
      h: 'Harder shapes',
      html: `<p>Three cases worth practising before the control work:</p>
      <ul>
        <li><b>No solution.</b> ${m('{ x² + 1 < 0 ; x > 0 }')} — the first line is never true, so the
        answer is ${m('∅')}. Say so; do not leave the page blank.</li>
        <li><b>One point.</b> ${m('{ x² ≤ 0 ; x ≥ 0 }')} gives ${m('x = 0')} alone — a single number is
        a perfectly good answer set.</li>
        <li><b>A fraction.</b> ${m(f('x − 1', 'x + 2') + ' ≥ 0')} is not a system, but it is solved the
        same way: mark ${m('1')} filled, ${m('−2')} open, alternate the signs.</li>
      </ul>
      {{fig:numberLineExcluded:A filled dot is admitted, an open dot is not — the bracket follows the dot.}}
      <div class="warn"><span class="wl">The bracket follows the dot, always</span>
      ${m('≥')} on a numerator gives a square bracket; a zero of a <b>denominator</b> is always a round
      bracket, whatever the sign in the inequality. Mixing these up is the single most common slip in
      this chapter.</div>`
    }
  ],
  examples: [
    {
      q: 'Solve ' + m('{ x² − 4 > 0 ; x² − 9 < 0 }') + '.',
      steps: [
        [m('x² − 4 > 0 ⇒ x < −2') + ' or ' + m('x > 2') + '.', 'Outside the roots.'],
        [m('x² − 9 < 0 ⇒ −3 < x < 3') + '.', 'Between the roots.'],
        ['Draw both on one axis.', ''],
        ['Overlap: ' + m('(−3, −2) ∪ (2, 3)') + '.', 'Two pieces.']
      ],
      ans: m('(−3, −2) ∪ (2, 3)')
    },
    {
      q: 'Solve ' + m('{ x² − 5x + 6 ≤ 0 ; x − 1 > 0 }') + '.',
      steps: [
        [m('(x − 2)(x − 3) ≤ 0 ⇒ 2 ≤ x ≤ 3') + '.', ''],
        [m('x > 1') + '.', ''],
        ['The whole of ' + m('[2, 3]') + ' lies beyond ' + m('1') + '.', ''],
        [m('[2, 3]') + '.', '']
      ],
      ans: m('[2, 3]')
    },
    {
      q: 'Solve ' + m(f('x − 1', 'x + 2') + ' ≥ 0') + '.',
      steps: [
        ['Zeros: ' + m('x = 1') + ' (filled), ' + m('x = −2') + ' (open).', 'Denominator never filled.'],
        ['Three intervals; test one point in each.', ''],
        [m('x = −3: +') + ', ' + m('x = 0: −') + ', ' + m('x = 2: +') + '.', ''],
        [m('(−∞, −2) ∪ [1, +∞)') + '.', '']
      ],
      ans: m('(−∞, −2) ∪ [1, +∞)')
    }
  ],
  modelNote: 'Give the class the same two lines twice — once as a system, once as a collection — and let them discover that the answers differ.',
  interactive: {
    type: 'inequalityLine',
    title: 'Two sets on one axis',
    hint: 'Drag the endpoints and watch the overlap.'
  },
  quiz: [
    { q: 'A system of inequalities asks for:', a: ['the union', 'the intersection', 'either', 'neither'], c: 1, why: 'Every line must hold.' },
    { q: m('{ x > 1 ; x > 4 }') + ' gives:', a: [m('x > 1'), m('x > 4'), m('1 < x < 4'), m('∅')], c: 1, why: 'The stricter one wins.' },
    { q: m('[ x > 1 ; x > 4 ]') + ' gives:', a: [m('x > 1'), m('x > 4'), m('1 < x < 4'), m('∅')], c: 0, why: 'A collection is a union.' },
    { q: m('x² − 9 < 0') + ' solves to:', a: [m('x < −3') + ' or ' + m('x > 3'), m('−3 < x < 3'), m('x < 3'), m('∅')], c: 1, why: 'Between the roots.' },
    { q: 'A zero of a denominator is drawn:', a: ['filled', 'open', 'either', 'twice'], c: 1, why: 'Undefined there.' },
    { q: m('{ x² + 1 < 0 ; x > 0 }') + ' has:', a: ['one solution', 'no solution', 'all ' + m('x'), m('x > 0')], c: 1, why: m('x² + 1') + ' is always positive.' }
  ],
  practice: {
    easy: [
      ['Solve ' + m('x² − 4 > 0'), m('(−∞, −2) ∪ (2, +∞)')],
      ['Solve ' + m('x² − 9 < 0'), m('(−3, 3)')],
      ['Solve ' + m('{ x > 2 ; x > 5 }'), m('x > 5')],
      ['Solve ' + m('{ x < 3 ; x > 0 }'), m('(0, 3)')],
      ['Solve ' + m('[ x < 0 ; x > 4 ]'), m('(−∞, 0) ∪ (4, +∞)')],
      ['Solve ' + m('x² ≤ 0'), m('x = 0')],
      ['Solve ' + m('x² + 4 > 0'), 'all ' + m('x')]
    ],
    med: [
      ['Solve ' + m('{ x² − 4 > 0 ; x² − 9 < 0 }'), m('(−3, −2) ∪ (2, 3)')],
      ['Solve ' + m('{ x² − 5x + 6 ≤ 0 ; x > 1 }'), m('[2, 3]')],
      ['Solve ' + m('{ x² − x − 6 < 0 ; x ≥ 0 }'), m('[0, 3)')],
      ['Solve ' + m('−3 < x² − 4 < 5'), m('(−3, −1) ∪ (1, 3)')],
      ['Solve ' + m(f('x − 1', 'x + 2') + ' ≥ 0'), m('(−∞, −2) ∪ [1, +∞)')],
      ['Solve ' + m('{ x² > 1 ; x < 0 }'), m('(−∞, −1)')],
      ['Solve ' + m('{ x² − 2x ≤ 0 ; x ≠ 1 }'), m('[0, 1) ∪ (1, 2]')]
    ],
    hard: [
      ['Solve ' + m('{ x² − 7x + 10 < 0 ; x² − 4x + 3 > 0 }'), m('(3, 5)')],
      ['Solve ' + m(f('x² − 4', 'x − 1') + ' ≤ 0'), m('(−∞, −2] ∪ (1, 2]')],
      ['Solve ' + m('{ x² + x − 2 > 0 ; x² − 4x < 0 }'), m('(1, 4)')],
      ['For which ' + m('a') + ' has ' + m('{ x² < 4 ; x > a }') + ' no solution?', m('a ≥ 2')],
      ['Solve ' + m('1 ≤ x² ≤ 4'), m('[−2, −1] ∪ [1, 2]')],
      ['Solve ' + m('{ x² − 6x + 9 ≤ 0 ; x < 5 }'), m('x = 3')],
      ['Solve ' + m('{ (x − 1)² > 0 ; x² − 4 ≤ 0 }'), m('[−2, 1) ∪ (1, 2]')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw the number line for every task, even the ones you can see at once.',
  homework: [
    'Solve ' + m('{ x² − 1 > 0 ; x² − 16 < 0 }') + '.',
    'Solve ' + m('{ x² − 3x ≤ 0 ; x > 1 }') + '.',
    'Solve ' + m('−1 < x² − 5 < 4') + '.',
    'Solve ' + m(f('x + 3', 'x − 2') + ' < 0') + '.',
    'For which ' + m('a') + ' does ' + m('{ x² ≤ 9 ; x ≥ a }') + ' have exactly one solution?'
  ]
});

/* ============================== 18 ============================== */
G9_ALG.push({
  id: 'a9-18', stream: 'alg', grade: 9, quarter: 2, lessons: '34–35', hours: 2,
  title: 'Proving the simplest inequalities',
  subtitle: 'A square is never negative — nearly every proof in this section is that one fact, arranged.',
  uz: 'Algebra 9, §16', uzPage: 'pp. 82–86',
  cam: 'IGX 14.4', camPage: 'Core & Extended, pp. 297–300', wb: 'Exercise 14.4',
  objectives: [
    'Prove an inequality by moving everything to one side and completing a square.',
    'State and use the arithmetic–geometric mean inequality for two numbers.',
    'Say where equality holds, and prove that it holds only there.',
    'Distinguish proving an inequality from solving one.'
  ],
  terms: [
    ['To prove', 'Isbotlash', 'Доказать'],
    ['Identity', 'Ayniyat', 'Тождество'],
    ['Non-negative', 'Manfiy emas', 'Неотрицательный'],
    ['Perfect square', 'To‘la kvadrat', 'Полный квадрат'],
    ['Arithmetic mean', 'O‘rta arifmetik', 'Среднее арифметическое'],
    ['Geometric mean', 'O‘rta geometrik', 'Среднее геометрическое'],
    ['Equality case', 'Tenglik holati', 'Случай равенства'],
    ['Counter-example', 'Qarama-qarshi misol', 'Контрпример']
  ],
  timing: [[10, 'Proving is not solving'], [25, 'The square method'], [25, 'The mean inequality'], [25, 'Equality, and counter-examples'], [5, 'Homework']],
  sections: [
    {
      h: 'Proving is not solving',
      html: `<div class="tablewrap"><table>
      <thead><tr><th></th><th>Solving</th><th>Proving</th></tr></thead>
      <tbody>
        <tr><td>the question</td><td>for which ${m('x')}?</td><td>for <b>all</b> ${m('x')}?</td></tr>
        <tr><td>the answer</td><td>a set</td><td>a chain of true statements</td></tr>
        <tr><td>one value is</td><td>a solution</td><td>not a proof</td></tr>
        <tr><td>one failing value is</td><td>nothing</td><td>a complete disproof</td></tr>
      </tbody></table></div>
      <p>The asymmetry in the last row is worth dwelling on. To prove ${m('x² + 1 ≥ 2x')} you must argue
      for every ${m('x')} at once; to disprove ${m('x² ≥ x')} you need only exhibit ${m('x = ' + f('1', '2'))}.</p>
      <div class="keybox"><div class="klabel">The standard opening</div>
      Move everything to one side. The inequality ${m('A ≥ B')} becomes ${m('A − B ≥ 0')}, and now there
      is only one thing to do: show that the expression on the left cannot be negative.</div>`
    },
    {
      h: 'The square method',
      html: `<p>The whole method rests on ${m('t² ≥ 0')} for every real ${m('t')}. Everything else is
      rearrangement.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>To prove</th><th>Difference</th><th>Why it is ${m('≥ 0')}</th></tr></thead>
      <tbody>
        <tr><td class="m">x² + 1 ≥ 2x</td><td class="m">(x − 1)²</td><td>a square</td></tr>
        <tr><td class="m">a² + b² ≥ 2ab</td><td class="m">(a − b)²</td><td>a square</td></tr>
        <tr><td class="m">x² + x + 1 > 0</td><td class="m">(x + ½)² + ¾</td><td>square plus a positive</td></tr>
        <tr><td class="m">a² + b² + c² ≥ ab + bc + ca</td><td class="m">½[(a−b)² + (b−c)² + (c−a)²]</td><td>three squares</td></tr>
      </tbody></table></div>
      {{fig:completeSquare:Completing the square is what turns an unclear sign into an obvious one.}}
      <div class="warn"><span class="wl">Write the square, do not describe it</span>
      “The left side is bigger because of the square” earns nothing. The proof is the line
      ${m('x² + 1 − 2x = (x − 1)² ≥ 0')} — the identity, then the reason, then the conclusion.</div>`
    },
    {
      h: 'The mean inequality',
      html: `<p>For ${m('a ≥ 0')} and ${m('b ≥ 0')}:</p>
      ${eq(m(f('a + b', '2') + ' ≥ ' + sr('ab')), true)}
      <p>The proof is one line of the previous section. Since ${m('(' + sr('a') + ' − ' + sr('b') + ')² ≥ 0')},
      expanding gives ${m('a − 2' + sr('ab') + ' + b ≥ 0')}, that is ${m('a + b ≥ 2' + sr('ab'))}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Form</th><th>Says</th></tr></thead>
      <tbody>
        <tr><td class="m">a + b ≥ 2${sr('ab')}</td><td>the sum is at least twice the geometric mean</td></tr>
        <tr><td class="m">x + ${f('1', 'x')} ≥ 2 &nbsp;(x > 0)</td><td>the classic special case, ${m('b = ' + f('1', 'a'))}</td></tr>
        <tr><td class="m">(a + b)(${f('1', 'a')} + ${f('1', 'b')}) ≥ 4</td><td>two applications, multiplied</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The rectangle behind it</div>
      Of all rectangles with a given area, the square has the smallest perimeter. That is exactly
      ${m('a + b ≥ 2' + sr('ab'))}, with ${m('ab')} the area — and it is why the equality case is
      ${m('a = b')}.</div>`
    },
    {
      h: 'Equality, and counter-examples',
      html: `<p>A complete answer names the equality case, and a complete disproof names a value.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>Equality when</th></tr></thead>
      <tbody>
        <tr><td class="m">x² + 1 ≥ 2x</td><td class="m">x = 1</td></tr>
        <tr><td class="m">a + b ≥ 2${sr('ab')}</td><td class="m">a = b</td></tr>
        <tr><td class="m">x + ${f('1', 'x')} ≥ 2</td><td class="m">x = 1</td></tr>
        <tr><td class="m">a² + b² + c² ≥ ab + bc + ca</td><td class="m">a = b = c</td></tr>
      </tbody></table></div>
      <p>And two statements that are simply false, with the value that kills them:</p>
      <ul>
        <li>“${m('x² ≥ x')} for all ${m('x')}” — take ${m('x = ' + f('1', '2'))}: ${m(f('1', '4') + ' < ' + f('1', '2'))}.</li>
        <li>“${m('x + ' + f('1', 'x') + ' ≥ 2')} for all ${m('x ≠ 0')}” — take ${m('x = −1')}: the sum is ${m('−2')}.</li>
      </ul>
      <div class="warn"><span class="wl">The condition ${m('x > 0')} is part of the statement</span>
      The second bullet is the reason. Dropping a condition because it looks decorative turns a theorem
      into a false claim — and in a proof, a dropped condition is a lost proof.</div>`
    }
  ],
  examples: [
    {
      q: 'Prove ' + m('x² + 1 ≥ 2x') + ' for all real ' + m('x') + '.',
      steps: [
        ['Move everything left: ' + m('x² − 2x + 1 ≥ 0') + '.', ''],
        ['Factorise: ' + m('(x − 1)² ≥ 0') + '.', 'An identity.'],
        ['A square is never negative — true for every ' + m('x') + '.', ''],
        ['Equality only when ' + m('x = 1') + '.', '']
      ],
      ans: 'Proved; equality at ' + m('x = 1')
    },
    {
      q: 'Prove ' + m('a + b ≥ 2' + sr('ab')) + ' for ' + m('a, b ≥ 0') + '.',
      steps: [
        ['Both roots exist because ' + m('a, b ≥ 0') + '.', ''],
        [m('(' + sr('a') + ' − ' + sr('b') + ')² ≥ 0'), ''],
        ['Expand: ' + m('a − 2' + sr('ab') + ' + b ≥ 0') + '.', ''],
        ['Rearrange: ' + m('a + b ≥ 2' + sr('ab')) + ', equality at ' + m('a = b') + '.', '']
      ],
      ans: 'Proved; equality at ' + m('a = b')
    },
    {
      q: 'Prove ' + m('a² + b² + c² ≥ ab + bc + ca') + '.',
      steps: [
        ['Double both sides: ' + m('2a² + 2b² + 2c² ≥ 2ab + 2bc + 2ca') + '.', 'Easier to split.'],
        ['Difference ' + m('= (a−b)² + (b−c)² + (c−a)²') + '.', ''],
        ['A sum of squares is non-negative.', ''],
        ['Equality only when ' + m('a = b = c') + '.', '']
      ],
      ans: 'Proved; equality at ' + m('a = b = c')
    }
  ],
  modelNote: 'Ask the class to disprove “x² ≥ x for all x” before proving anything — one fraction settles it, and the difference between proving and disproving lands immediately.',
  interactive: {
    type: 'substitute',
    title: 'Test a claim, then prove it',
    hint: 'Testing values can only disprove; the algebra proves.'
  },
  quiz: [
    { q: 'To prove ' + m('A ≥ B') + ' you show:', a: [m('A − B ≥ 0'), m('A > 0'), m('B < 0'), 'one value works'], c: 0, why: 'One side, one sign.' },
    { q: 'The engine of nearly every proof here is:', a: [m('t² ≥ 0'), m('t > 0'), m('t ≠ 0'), m('t = 0')], c: 0, why: 'A square is never negative.' },
    { q: 'Equality in ' + m('x² + 1 ≥ 2x') + ' holds at:', a: [m('x = 0'), m('x = 1'), m('x = −1'), 'never'], c: 1, why: m('(x − 1)² = 0') + '.' },
    { q: m('a + b ≥ 2' + sr('ab')) + ' needs:', a: ['nothing', m('a, b ≥ 0'), m('a > b'), m('a = b')], c: 1, why: 'The roots must exist.' },
    { q: 'One value that fails a claim is:', a: ['nothing', 'a full disproof', 'a partial proof', 'a proof'], c: 1, why: '“For all” dies to one exception.' },
    { q: m('x + ' + f('1', 'x') + ' ≥ 2') + ' requires:', a: [m('x ≠ 0'), m('x > 0'), m('x < 0'), 'nothing'], c: 1, why: m('x = −1') + ' gives ' + m('−2') + '.' }
  ],
  practice: {
    easy: [
      ['Prove ' + m('x² ≥ 0'), 'A square is non-negative'],
      ['Prove ' + m('x² + 4 > 0'), m('x² ≥ 0') + ', add ' + m('4')],
      ['Prove ' + m('(x − 3)² ≥ 0'), 'A square'],
      ['Prove ' + m('a² + b² ≥ 2ab'), m('(a − b)² ≥ 0')],
      ['Prove ' + m('x² + 1 ≥ 2x'), m('(x − 1)² ≥ 0')],
      ['Disprove “' + m('x² ≥ x') + ' for all ' + m('x') + '”', m('x = ' + f('1', '2'))],
      ['Equality in ' + m('a + b ≥ 2' + sr('ab')), m('a = b')]
    ],
    med: [
      ['Prove ' + m('x² + x + 1 > 0'), m('(x + ½)² + ¾ > 0')],
      ['Prove ' + m('x + ' + f('1', 'x') + ' ≥ 2') + ' for ' + m('x > 0'), m('(' + sr('x') + ' − ' + f('1', sr('x')) + ')² ≥ 0')],
      ['Prove ' + m('a² + b² + c² ≥ ab + bc + ca'), 'Three squares, halved'],
      ['Prove ' + m('(a + b)² ≥ 4ab'), m('(a − b)² ≥ 0')],
      ['Prove ' + m('a⁴ + b⁴ ≥ a³b + ab³'), m('(a − b)²(a² + ab + b²) ≥ 0')],
      ['Prove ' + m('x⁴ + 1 ≥ x³ + x') + ' for ' + m('x > 0'), m('(x³ − 1)(x − 1) ≥ 0')],
      ['Disprove “' + m('a + b ≥ 2' + sr('ab')) + ' for all reals”', m('a = b = −1')]
    ],
    hard: [
      ['Prove ' + m('(a + b)(' + f('1', 'a') + ' + ' + f('1', 'b') + ') ≥ 4') + ' for ' + m('a, b > 0'), 'Multiply two mean inequalities'],
      ['Prove ' + m('a² + b² + 1 ≥ ab + a + b'), 'Half a sum of three squares'],
      ['Least value of ' + m('x + ' + f('4', 'x')) + ' for ' + m('x > 0'), m('4') + ', at ' + m('x = 2')],
      ['Prove ' + m(f('a', 'b') + ' + ' + f('b', 'a') + ' ≥ 2') + ' for ' + m('ab > 0'), m('(a − b)² ≥ 0') + ', divided by ' + m('ab')],
      ['Prove ' + m('a³ + b³ ≥ ab(a + b)') + ' for ' + m('a, b > 0'), m('(a + b)(a − b)² ≥ 0')],
      ['Greatest area of a rectangle of perimeter ' + m('20'), m('25') + ' — the square'],
      ['Prove ' + m('(1 + a)(1 + b) ≥ (1 + ' + sr('ab') + ')²') + ' for ' + m('a, b ≥ 0'), 'Expand; reduces to ' + m('(' + sr('a') + ' − ' + sr('b') + ')² ≥ 0')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every proof ends with the equality case named; a proof without it is incomplete.',
  homework: [
    'Prove ' + m('x² + 9 ≥ 6x') + ' and say when equality holds.',
    'Prove ' + m('a² + b² ≥ 2ab') + ' and interpret it as a statement about rectangles.',
    'Prove ' + m('x + ' + f('9', 'x') + ' ≥ 6') + ' for ' + m('x > 0') + '.',
    'Disprove “' + m('x³ ≥ x²') + ' for all ' + m('x') + '”.',
    'Prove ' + m('a² + b² + c² ≥ ab + bc + ca') + ' and name the equality case.'
  ]
});

/* ============================== 19 ============================== */
G9_ALG.push({
  id: 'a9-19', stream: 'alg', grade: 9, quarter: 2, lessons: '36', hours: 1,
  title: 'Chapter exercises — sets, Venn diagrams and notation',
  subtitle: 'Cambridge writes solution sets in the language of sets; this hour makes both notations one.',
  uz: 'Algebra 9, II bob mashqlari', uzPage: 'pp. 87–90',
  cam: 'IGX 1.1–1.2, 14.1', camPage: 'Core & Extended, pp. 2–14', wb: 'Exercise 1.1–1.2',
  objectives: [
    'Read and write the set notation ∈, ⊂, ∩, ∪, ∅ and ξ.',
    'Show two or three sets on a Venn diagram and shade a described region.',
    'Translate an interval answer into set-builder notation and back.',
    'Recognise a system as an intersection and a collection as a union.'
  ],
  terms: [
    ['Set', 'To‘plam', 'Множество'],
    ['Element', 'Element', 'Элемент'],
    ['Subset', 'Qism to‘plam', 'Подмножество'],
    ['Universal set', 'Universal to‘plam', 'Универсальное множество'],
    ['Complement', 'To‘ldiruvchi', 'Дополнение'],
    ['Venn diagram', 'Venn diagrammasi', 'Диаграмма Венна'],
    ['Set-builder notation', 'To‘plamni yozish usuli', 'Способ задания множества'],
    ['Disjoint', 'Kesishmaydigan', 'Непересекающиеся']
  ],
  timing: [[8, 'The symbols'], [12, 'Venn diagrams'], [12, 'Sets and intervals'], [6, 'Mixed exercises'], [2, 'Homework']],
  sections: [
    {
      h: 'The symbols',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Symbol</th><th>Read as</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td class="m">∈</td><td>is an element of</td><td class="m">3 ∈ ℕ</td></tr>
        <tr><td class="m">∉</td><td>is not an element of</td><td class="m">${sr('2')} ∉ ℚ</td></tr>
        <tr><td class="m">⊂</td><td>is a subset of</td><td class="m">ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</td></tr>
        <tr><td class="m">∩</td><td>intersection — “and”</td><td class="m">A ∩ B</td></tr>
        <tr><td class="m">∪</td><td>union — “or”</td><td class="m">A ∪ B</td></tr>
        <tr><td class="m">∅</td><td>the empty set</td><td class="m">{x : x² < 0} = ∅</td></tr>
        <tr><td class="m">ξ</td><td>the universal set</td><td>everything under discussion</td></tr>
        <tr><td class="m">A′</td><td>the complement of ${m('A')}</td><td>everything in ${m('ξ')} not in ${m('A')}</td></tr>
        <tr><td class="m">n(A)</td><td>the number of elements</td><td class="m">n({2,4,6}) = 3</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">One idea, two alphabets</div>
      A <b>system</b> of inequalities is an ${m('∩')}; a <b>collection</b> is a ${m('∪')}. The Uzbek
      textbook writes the braces, Cambridge writes the symbols. Nothing mathematical separates them.</div>`
    },
    {
      h: 'Venn diagrams',
      html: `<p>Two sets divide the universal set into four regions; three sets into eight.</p>
      {{fig:vennTwo:Two sets, four regions — both, only A, only B, neither.}}
      {{fig:vennThree:Three sets, eight regions — the centre belongs to all three.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Region</th><th>Notation</th></tr></thead>
      <tbody>
        <tr><td>in both</td><td class="m">A ∩ B</td></tr>
        <tr><td>in ${m('A')} only</td><td class="m">A ∩ B′</td></tr>
        <tr><td>in at least one</td><td class="m">A ∪ B</td></tr>
        <tr><td>in neither</td><td class="m">(A ∪ B)′</td></tr>
      </tbody></table></div>
      <p>Counting follows the picture: ${m('n(A ∪ B) = n(A) + n(B) − n(A ∩ B)')}, because the overlap
      would otherwise be counted twice.</p>`
    },
    {
      h: 'Sets and intervals',
      html: `<p>Every answer from the last two lessons can be written either way.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Interval</th><th>Set-builder</th></tr></thead>
      <tbody>
        <tr><td class="m">(−3, 3)</td><td class="m">{x ∈ ℝ : −3 &lt; x &lt; 3}</td></tr>
        <tr><td class="m">[2, 3]</td><td class="m">{x ∈ ℝ : 2 ≤ x ≤ 3}</td></tr>
        <tr><td class="m">(−∞, −2) ∪ (2, +∞)</td><td class="m">{x ∈ ℝ : x² &gt; 4}</td></tr>
        <tr><td class="m">∅</td><td class="m">{x ∈ ℝ : x² + 1 &lt; 0}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Cambridge marks the notation, not only the answer</span>
      A correct set written with the wrong brackets loses a mark in an IGCSE paper. Round for excluded,
      square for included, and the colon inside set-builder braces reads “such that”.</div>`
    }
  ],
  examples: [
    {
      q: 'With ' + m('ξ = {1,…,10}') + ', ' + m('A = {even}') + ', ' + m('B = {multiples of 3}') + ', list ' + m('A ∩ B') + ' and ' + m('A ∪ B') + '.',
      steps: [
        [m('A = {2,4,6,8,10}'), ''],
        [m('B = {3,6,9}'), ''],
        [m('A ∩ B = {6}'), 'In both.'],
        [m('A ∪ B = {2,3,4,6,8,9,10}'), 'Eight elements.']
      ],
      ans: m('{6}') + ' and ' + m('{2,3,4,6,8,9,10}')
    },
    {
      q: 'In a class of ' + m('30') + ', ' + m('18') + ' play football, ' + m('14') + ' play chess, ' + m('6') + ' play both. How many play neither?',
      steps: [
        [m('n(F ∪ C) = 18 + 14 − 6 = 26'), 'Overlap counted once.'],
        [m('30 − 26 = 4'), ''],
        ['Check the four regions: ' + m('12 + 6 + 8 + 4 = 30') + ' ✓', ''],
        [m('4') + ' pupils.', '']
      ],
      ans: m('4')
    },
    {
      q: 'Write the solution of ' + m('{ x² − 4 > 0 ; x² − 9 < 0 }') + ' in set notation.',
      steps: [
        ['First set: ' + m('{x : x < −2} ∪ {x : x > 2}') + '.', ''],
        ['Second set: ' + m('{x : −3 < x < 3}') + '.', ''],
        ['A system is an intersection.', ''],
        [m('{x ∈ ℝ : −3 < x < −2} ∪ {x ∈ ℝ : 2 < x < 3}'), '']
      ],
      ans: m('(−3, −2) ∪ (2, 3)')
    }
  ],
  modelNote: 'Shade the four regions of a two-set Venn diagram on the board and let the class name each one in symbols before any counting begins.',
  interactive: {
    type: 'quiz',
    title: 'Set notation at speed',
    hint: 'Symbols to words, and back.'
  },
  quiz: [
    { q: m('∩') + ' means:', a: ['or', 'and', 'not', 'all'], c: 1, why: 'Intersection.' },
    { q: 'A system of inequalities corresponds to:', a: [m('∪'), m('∩'), m('∅'), m('⊂')], c: 1, why: 'Both must hold.' },
    { q: m('n(A ∪ B)') + ' equals:', a: [m('n(A) + n(B)'), m('n(A) + n(B) − n(A ∩ B)'), m('n(A) − n(B)'), m('n(A ∩ B)')], c: 1, why: 'The overlap once.' },
    { q: m('A′') + ' is:', a: ['everything in ' + m('A'), 'everything not in ' + m('A'), m('A ∩ B'), m('∅')], c: 1, why: 'The complement.' },
    { q: m('{x : x² + 1 < 0}') + ' is:', a: [m('ℝ'), m('∅'), m('{0}'), m('{−1}')], c: 1, why: 'Never negative.' },
    { q: 'Three sets divide ' + m('ξ') + ' into:', a: ['six regions', 'eight regions', 'four regions', 'nine regions'], c: 1, why: m('2³') + '.' }
  ],
  practice: {
    easy: [
      ['Is ' + m('5 ∈ ℕ') + '?', 'Yes'],
      ['Is ' + m(sr('2') + ' ∈ ℚ') + '?', 'No'],
      [m('{1,2,3} ∩ {3,4}'), m('{3}')],
      [m('{1,2} ∪ {2,3}'), m('{1,2,3}')],
      [m('n({2,4,6,8})'), m('4')],
      ['Write ' + m('(1, 5)') + ' in set-builder form', m('{x : 1 < x < 5}')],
      ['Write ' + m('{x : x ≥ 0}') + ' as an interval', m('[0, +∞)')]
    ],
    med: [
      [m('ξ = {1..10}') + ', ' + m('A') + ' = even, ' + m('B') + ' = multiples of 3: ' + m('A ∩ B'), m('{6}')],
      ['Same sets: ' + m('A ∪ B'), m('{2,3,4,6,8,9,10}')],
      ['Same sets: ' + m('A′'), m('{1,3,5,7,9}')],
      [m('n(A) = 18, n(B) = 14, n(A ∩ B) = 6') + ': ' + m('n(A ∪ B)'), m('26')],
      ['Of ' + m('30') + ', how many in neither?', m('4')],
      ['Write ' + m('(−∞, −2) ∪ (2, ∞)') + ' as one condition', m('{x : x² > 4}')],
      ['Shade “in ' + m('A') + ' only”', m('A ∩ B′')]
    ],
    hard: [
      ['Solve ' + m('{ x² < 9 ; x > 0 }') + ' in set notation', m('{x ∈ ℝ : 0 < x < 3}')],
      [m('n(ξ) = 40, n(A) = 25, n(B) = 20, n((A ∪ B)′) = 5') + ': ' + m('n(A ∩ B)'), m('10')],
      ['How many subsets has ' + m('{a, b, c}') + '?', m('8')],
      ['Describe the shaded centre of three circles', m('A ∩ B ∩ C')],
      [m('A ⊂ B') + ' — simplify ' + m('A ∩ B'), m('A')],
      [m('A ⊂ B') + ' — simplify ' + m('A ∪ B'), m('B')],
      ['Of ' + m('50') + ': ' + m('30') + ' study French, ' + m('25') + ' German, ' + m('8') + ' neither. Both?', m('13')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Answer every task twice: once in interval notation, once in set-builder notation.',
  homework: [
    'With ' + m('ξ = {1,…,12}') + ', list ' + m('A ∩ B') + ' for ' + m('A') + ' = multiples of 3 and ' + m('B') + ' = even.',
    'In a group of ' + m('40') + ', ' + m('22') + ' play tennis, ' + m('18') + ' swim, ' + m('7') + ' do both. How many do neither?',
    'Write the solution of ' + m('x² − 16 ≤ 0') + ' in both notations.',
    'Draw a three-set Venn diagram and shade ' + m('A ∩ B ∩ C′') + '.',
    'How many subsets does a set of ' + m('5') + ' elements have?'
  ]
});

/* ============================== 20 ============================== */
G9_ALG.push({
  id: 'a9-20', stream: 'alg', grade: 9, quarter: 2, lessons: '37–38', hours: 2,
  title: 'Control work 3, and work on the mistakes',
  subtitle: 'Systems and proofs in one paper, and Chapter II closed before trigonometry opens.',
  uz: 'Algebra 9, Nazorat ishi 3', uzPage: 'pp. 68–90',
  cam: 'IGX 6, 14 review', camPage: 'Core & Extended, pp. 118–300', wb: 'Control paper A3',
  objectives: [
    'Solve a system of two equations by the method the system asks for.',
    'Solve a system of second-degree inequalities and write the answer as intervals.',
    'Prove one inequality in full, with the equality case named.',
    'Classify each lost mark and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['System', 'Sistema', 'Система'],
    ['Collection', 'Majmua', 'Совокупность'],
    ['Substitution', 'O‘rniga qo‘yish', 'Подстановка'],
    ['Method of addition', 'Qo‘shish usuli', 'Способ сложения'],
    ['Proof', 'Isbot', 'Доказательство'],
    ['Equality case', 'Tenglik holati', 'Случай равенства'],
    ['Interval notation', 'Oraliq belgisi', 'Обозначение промежутка']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [12, 'Answers'], [20, 'Diagnosis and rewrite'], [5, 'The map']],
  sections: [
    {
      h: 'The paper — 30 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Solve ${m('{ x + y = 7 ; xy = 12 }')}</td><td class="m">5</td><td>L28–29</td></tr>
        <tr><td>2</td><td>Solve ${m('{ x² + y² = 20 ; x² − y² = 12 }')}</td><td class="m">5</td><td>L30–31</td></tr>
        <tr><td>3</td><td>Solve ${m('{ x² − 1 > 0 ; x² − 25 < 0 }')}</td><td class="m">5</td><td>L32–33</td></tr>
        <tr><td>4</td><td>Solve ${m(f('x − 2', 'x + 1') + ' ≤ 0')}</td><td class="m">5</td><td>L32–33</td></tr>
        <tr><td>5</td><td>Prove ${m('x² + 4 ≥ 4x')}, naming the equality case</td><td class="m">5</td><td>L34–35</td></tr>
        <tr><td>6</td><td>Write the answer to Q3 in set-builder notation</td><td class="m">5</td><td>L36</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks actually go</div>
      Q1 carries one mark for checking the pair in <b>both</b> equations; Q2 one for pairing the signs
      correctly; Q3 one for a drawn number line; Q4 one for the round bracket at ${m('−1')}; Q5 one for
      the equality case. Five of the thirty marks are habits, again.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>one pair only</td><td class="m">(3, 4)</td><td>the system is symmetric — ${m('(4, 3)')} too</td></tr>
        <tr><td>signs mispaired</td><td class="m">(4, 2)</td><td>test in the second equation</td></tr>
        <tr><td>intersection forced into one interval</td><td class="m">(−5, 5)</td><td>the picture shows two pieces</td></tr>
        <tr><td>square bracket on a denominator</td><td class="m">[−1, 2]</td><td class="m">(−1, 2]</td></tr>
        <tr><td>proof by example</td><td>“try ${m('x = 3')}: true”</td><td>move to one side and factorise</td></tr>
        <tr><td>equality case missing</td><td class="m">(x − 2)² ≥ 0</td><td>“…with equality at ${m('x = 2')}”</td></tr>
        <tr><td>system read as collection</td><td class="m">∪ instead of ∩</td><td>braces mean “and”</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'Chapter II as one map',
      html: `<p>Five boxes, and the links written as sentences:</p>
      <ul>
        <li><b>a linear equation present</b> → <b>substitute</b> — “isolate, replace, solve one unknown”</li>
        <li><b>two squares present</b> → <b>add or subtract</b> — “one square disappears”</li>
        <li><b>symmetric</b> → <b>${m('u = x + y, v = xy')}</b> — “and then Vieta backwards”</li>
        <li><b>a system of inequalities</b> → <b>one number line</b> — “solve separately, intersect”</li>
        <li><b>an inequality to prove</b> → <b>one side, a square</b> — “and name the equality case”</li>
      </ul>
      {{fig:systemIntervals:Two sets, one axis — the whole of the inequality half of this chapter.}}
      <div class="keybox"><div class="klabel">Looking forward</div>
      Chapter III leaves algebra for a while: the angle escapes the triangle, the radian arrives, and
      sine and cosine become functions of any angle at all. Nothing in it needs Chapter II — but the
      equations it produces will be solved by exactly the methods just tested.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q1: solve ' + m('{ x + y = 7 ; xy = 12 }') + '.',
      steps: [
        ['Symmetric: ' + m('u = 7') + ', ' + m('v = 12') + '.', ''],
        [m('t² − 7t + 12 = 0'), 'Vieta backwards.'],
        [m('t = 3, 4'), ''],
        [m('(3, 4)') + ' and ' + m('(4, 3)') + ' — both checked.', '']
      ],
      ans: m('(3, 4)') + ' and ' + m('(4, 3)')
    },
    {
      q: 'Model answer, Q3: solve ' + m('{ x² − 1 > 0 ; x² − 25 < 0 }') + '.',
      steps: [
        [m('x < −1') + ' or ' + m('x > 1') + '.', 'Outside ' + m('±1') + '.'],
        [m('−5 < x < 5') + '.', 'Inside ' + m('±5') + '.'],
        ['One number line, both sets drawn.', ''],
        [m('(−5, −1) ∪ (1, 5)') + '.', 'Two pieces.']
      ],
      ans: m('(−5, −1) ∪ (1, 5)')
    },
    {
      q: 'Model answer, Q5: prove ' + m('x² + 4 ≥ 4x') + '.',
      steps: [
        [m('x² − 4x + 4 ≥ 0'), 'Everything to one side.'],
        [m('(x − 2)² ≥ 0'), 'An identity.'],
        ['A square is never negative — true for all ' + m('x') + '.', ''],
        ['Equality only at ' + m('x = 2') + '.', '']
      ],
      ans: 'Proved; equality at ' + m('x = 2')
    }
  ],
  modelNote: 'Mark Q5 in front of the class: read out a “proof” that only tests three values, and let them say what is missing.',
  interactive: {
    type: 'quiz',
    title: 'Chapter II in twelve questions',
    hint: 'Two from each block of lessons.',
    items: [
      { q: 'A system with one linear equation is best solved by:', a: ['substitution', 'addition', 'squaring', 'a graph'], c: 0, why: 'Isolate and replace.' },
      { q: 'Both equations have ' + m('x²') + ' and ' + m('y²') + ': use', a: ['substitution', 'addition', 'Vieta', 'guessing'], c: 1, why: 'One square cancels.' },
      { q: m('x² + y²') + ' in terms of ' + m('u, v') + ':', a: [m('u² − v'), m('u² − 2v'), m('u² + 2v'), m('u + v')], c: 1, why: m('(x+y)² − 2xy') + '.' },
      { q: 'Numbers with sum ' + m('u') + ', product ' + m('v') + ' are roots of:', a: [m('t² + ut + v = 0'), m('t² − ut + v = 0'), m('t² − v = 0'), m('t² + v = 0')], c: 1, why: 'Vieta backwards.' },
      { q: 'A candidate pair must be tested in:', a: ['one equation', 'both', 'neither', 'the easier one'], c: 1, why: 'Or the check proves nothing.' },
      { q: 'A system of inequalities gives:', a: ['a union', 'an intersection', 'either', 'always one interval'], c: 1, why: 'Every line holds.' },
      { q: m('x² − 25 < 0') + ' solves to:', a: [m('x < −5') + ' or ' + m('x > 5'), m('−5 < x < 5'), m('x < 5'), m('∅')], c: 1, why: 'Between the roots.' },
      { q: 'A zero of a denominator gets:', a: ['a square bracket', 'a round bracket', 'either', 'no bracket'], c: 1, why: 'Undefined there.' },
      { q: 'To prove ' + m('A ≥ B') + ':', a: ['test values', 'show ' + m('A − B ≥ 0'), 'draw a graph', 'show ' + m('A > 0')], c: 1, why: 'One side, one sign.' },
      { q: 'The engine of these proofs is:', a: [m('t² ≥ 0'), m('t > 0'), m('t ≠ 0'), m('t = 1')], c: 0, why: 'A square is non-negative.' },
      { q: 'One failing value is:', a: ['nothing', 'a disproof', 'a proof', 'a special case'], c: 1, why: '“For all” dies to one exception.' },
      { q: m('∩') + ' corresponds to:', a: ['a collection', 'a system', 'a complement', 'the empty set'], c: 1, why: 'Braces mean “and”.' }
    ]
  },
  quiz: [
    { q: 'Q1 is worth full marks only if you give:', a: ['one pair', 'both pairs', 'the sum', 'the product'], c: 1, why: 'Symmetric systems come in pairs.' },
    { q: 'Q3’s answer has:', a: ['one interval', 'two intervals', 'no solution', 'one point'], c: 1, why: 'The overlap is two strips.' },
    { q: 'The bracket at ' + m('−1') + ' in Q4 is:', a: ['square', 'round', 'either', 'omitted'], c: 1, why: 'A denominator zero.' },
    { q: 'Q5 needs, besides the square:', a: ['a graph', 'the equality case', 'three test values', 'nothing'], c: 1, why: 'A proof without it is incomplete.' },
    { q: 'Q6 tests:', a: ['algebra', 'notation', 'speed', 'proof'], c: 1, why: 'Cambridge marks notation.' },
    { q: 'Work on the mistakes means:', a: ['fix the wrong line', 'rewrite the solution', 'copy the answer', 'skip it'], c: 1, why: 'The whole solution, again.' }
  ],
  practice: {
    easy: [
      ['Solve ' + m('{ x + y = 7 ; xy = 12 }'), m('(3, 4), (4, 3)')],
      ['Solve ' + m('{ x² = 9 ; y² = 4 }'), m('(±3, ±2)')],
      ['Solve ' + m('x² − 1 > 0'), m('(−∞, −1) ∪ (1, +∞)')],
      ['Solve ' + m('x² − 25 < 0'), m('(−5, 5)')],
      ['Prove ' + m('x² + 4 ≥ 4x'), m('(x − 2)² ≥ 0')],
      ['Equality in ' + m('x² + 4 ≥ 4x'), m('x = 2')],
      ['Write ' + m('(1, 5)') + ' in set-builder form', m('{x : 1 < x < 5}')]
    ],
    med: [
      ['Solve ' + m('{ x² + y² = 20 ; x² − y² = 12 }'), m('(±4, ±2)')],
      ['Solve ' + m('{ x² − 1 > 0 ; x² − 25 < 0 }'), m('(−5, −1) ∪ (1, 5)')],
      ['Solve ' + m(f('x − 2', 'x + 1') + ' ≤ 0'), m('(−1, 2]')],
      ['Solve ' + m('{ y = x + 1 ; x² + y² = 25 }'), m('(3, 4)') + ', ' + m('(−4, −3)')],
      ['Prove ' + m('a² + 9 ≥ 6a'), m('(a − 3)² ≥ 0')],
      ['Solve ' + m('{ x + y = 6 ; x² + y² = 20 }'), m('(2, 4), (4, 2)')],
      ['Write the answer to ' + m('x² ≤ 4') + ' in set notation', m('{x ∈ ℝ : −2 ≤ x ≤ 2}')]
    ],
    hard: [
      ['Solve ' + m('{ x² + xy = 10 ; xy + y² = 15 }'), m('(2, 3)') + ', ' + m('(−2, −3)')],
      ['Solve ' + m('{ x² − 4x + 3 < 0 ; x² − 9 > 0 }'), m('∅')],
      ['Prove ' + m('a + ' + f('1', 'a') + ' ≥ 2') + ' for ' + m('a > 0'), m('(' + sr('a') + ' − ' + f('1', sr('a')) + ')² ≥ 0')],
      ['For which ' + m('k') + ' is ' + m('y = x + k') + ' tangent to ' + m('x² + y² = 8') + '?', m('k = ±4')],
      ['Solve ' + m('2 ≤ x² − 2 ≤ 7'), m('[−3, −2] ∪ [2, 3]')],
      ['Two numbers: sum ' + m('8') + ', sum of squares ' + m('34'), m('3') + ' and ' + m('5')],
      ['Prove ' + m('(a + b)² ≥ 4ab') + ' and name the equality case', m('(a − b)² ≥ 0') + '; ' + m('a = b')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite every question you lost a mark on, in full, before starting the new chapter.',
  homework: [
    'Solve ' + m('{ x + y = 9 ; xy = 20 }') + '.',
    'Solve ' + m('{ x² + y² = 34 ; x² − y² = 16 }') + '.',
    'Solve ' + m('{ x² − 4 > 0 ; x² − 36 < 0 }') + ' and write the answer in set notation.',
    'Solve ' + m(f('x + 4', 'x − 3') + ' ≥ 0') + '.',
    'Prove ' + m('x² + 25 ≥ 10x') + ' and name the equality case.'
  ]
});
