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
  timing: [[14, 'What a does'], [18, 'Moving the parabola'], [20, 'Completing the square'], [16, 'Reading either form'], [12, 'Homework']],
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
  timing: [[13, 'The five marks'], [22, 'A worked sketch'], [18, 'Reading the sketch'], [18, 'Matching graphs'], [9, 'Homework']],
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
  timing: [[11, 'Standard form first'], [22, 'Outside and between'], [22, 'The three cases'], [18, 'Writing the answer'], [7, 'Homework']],
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
  timing: [[13, 'Reading the sketch'], [20, 'A curve against a line'], [23, 'Always true, never true'], [20, 'Checking an answer'], [4, 'Homework']],
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
  timing: [[13, 'Why it works'], [23, 'The four steps'], [20, 'Repeated factors'], [20, 'Rational inequalities'], [4, 'Homework']],
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
  timing: [[11, 'What a domain is'], [20, 'The two forbidden things'], [22, 'Roots and quadratics'], [20, 'Both at once'], [7, 'Homework']],
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
  timing: [[11, 'The two definitions'], [18, 'The domain comes first'], [22, 'Testing'], [20, 'On the graph'], [9, 'Homework']],
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
  timing: [[13, 'Even against odd'], [20, 'Equations'], [23, 'Inequalities'], [20, 'Biquadratics'], [4, 'Homework']],
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
  timing: [[13, 'The number sets'], [20, 'Recurring decimals'], [23, 'Surds'], [20, 'Why √2 is irrational'], [4, 'Homework']],
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
  timing: [[11, 'What a solution is'], [22, 'Substitution'], [20, 'How many solutions'], [20, 'Reading the picture'], [7, 'Homework']],
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
  timing: [[13, 'Choosing a method'], [23, 'Addition'], [22, 'Symmetric systems'], [18, 'Checking'], [4, 'Homework']],
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
  timing: [[11, 'One line at a time'], [22, 'Two inequalities together'], [20, 'Systems and collections'], [23, 'Harder shapes'], [4, 'Homework']],
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
  timing: [[9, 'Proving is not solving'], [23, 'The square method'], [22, 'The mean inequality'], [22, 'Equality, and counter-examples'], [4, 'Homework']],
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
    hint: 'Symbols to words, and back.',
    items: [
      { q: m('3 ∈ A') + ' means:', a: [m('3') + ' is an element of ' + m('A'), m('A') + ' is a subset of ' + m('3'), m('3') + ' equals ' + m('A'), m('3') + ' is not in ' + m('A')], c: 0, why: 'Membership.' },
      { q: m('A ⊂ B') + ' means:', a: ['every element of ' + m('A') + ' is in ' + m('B'), 'they share one element', 'they are equal', m('B') + ' is inside ' + m('A')], c: 0, why: 'A subset.' },
      { q: m('A ∩ B') + ' is:', a: ['everything in both', 'everything in either', 'what is only in ' + m('A'), 'the empty set'], c: 0, why: 'The intersection.' },
      { q: m('A ∪ B') + ' is:', a: ['everything in both', 'everything in either or both', 'what is in neither', 'the difference'], c: 1, why: 'The union.' },
      { q: 'If ' + m('A = {1, 2, 3}') + ' and ' + m('B = {3, 4}') + ' then ' + m('A ∩ B') + ' is:', a: [m('{3}'), m('{1, 2, 3, 4}'), m('∅'), m('{1, 2}')], c: 0, why: 'Only ' + m('3') + ' is in both.' },
      { q: 'With the same sets, ' + m('n(A ∪ B)') + ' is:', a: [m('4'), m('5'), m('6'), m('7')], c: 0, why: m('3 + 2 − 1') + '.' },
      { q: 'The empty set is written:', a: [m('{0}'), m('∅'), m('0'), m('{∅}')], c: 1, why: 'It has no elements at all.' },
      { q: m('A′') + ' means:', a: ['the subsets of ' + m('A'), 'everything in the universal set not in ' + m('A'), m('A') + ' doubled', 'the empty set'], c: 1, why: 'The complement.' }
    ]
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

/* ============================== 21 ============================== */
G9_ALG.push({
  id: 'a9-21', stream: 'alg', grade: 9, quarter: 2, lessons: '39–40', hours: 2,
  title: 'The radian measure of an angle',
  subtitle: 'A second unit for angle — one that measures the arc rather than counting Babylonian steps.',
  uz: 'Algebra 9, §17', uzPage: 'pp. 91–96',
  cam: 'IGX 15.1', camPage: 'Core & Extended, pp. 304–309', wb: 'Exercise 15.1',
  objectives: [
    'Define one radian as the angle subtending an arc equal to the radius.',
    'Convert between degrees and radians in both directions.',
    'Know the common angles in both units without a table.',
    'Use l = rα and S = ½r²α for an arc and a sector.'
  ],
  terms: [
    ['Radian', 'Radian', 'Радиан'],
    ['Degree', 'Gradus', 'Градус'],
    ['Arc', 'Yoy', 'Дуга'],
    ['Arc length', 'Yoy uzunligi', 'Длина дуги'],
    ['Sector', 'Sektor', 'Сектор'],
    ['Central angle', 'Markaziy burchak', 'Центральный угол'],
    ['Circumference', 'Aylana uzunligi', 'Длина окружности'],
    ['Conversion', 'O‘tkazish', 'Перевод']
  ],
  timing: [[13, 'What a radian is'], [20, 'Converting'], [20, 'The angles worth knowing'], [23, 'Arcs and sectors'], [4, 'Homework']],
  sections: [
    {
      h: 'What a radian is',
      html: `<p>Take a circle of radius ${m('r')} and lay an arc of length ${m('r')} along it. The central
      angle you have made is <b>one radian</b>.</p>
      {{fig:radianSector:An arc equal to the radius subtends one radian — about 57°.}}
      <p>Nothing in that definition mentions the size of the circle, which is the point: a radian is a
      ratio of two lengths, so it is the same angle in every circle.</p>
      ${eq(m('α = ' + f('l', 'r')) + '     — the angle, in radians, is arc ÷ radius', true)}
      <p>Going all the way round gives an arc of ${m('2πr')}, so a full turn is ${m('2π')} radians.
      A straight angle is ${m('π')}, a right angle ${m(f('π', '2'))}.</p>
      <div class="keybox"><div class="klabel">Why bother with a second unit</div>
      The 360 degrees of a full turn are a Babylonian convention — a good one, since 360 has many
      divisors, but arbitrary. The radian is not chosen; it falls out of the circle itself. Every
      formula in later mathematics that involves angles is simpler in radians, and from Grade 10
      onwards degrees appear only in geometry questions.</div>`
    },
    {
      h: 'Converting',
      html: `<p>One equation carries everything:</p>
      ${eq(m('180° = π rad'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Direction</th><th>Multiply by</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>degrees → radians</td><td class="m">${f('π', '180°')}</td><td class="m">60° = 60 · ${f('π', '180')} = ${f('π', '3')}</td></tr>
        <tr><td>radians → degrees</td><td class="m">${f('180°', 'π')}</td><td class="m">${f('3π', '4')} = ${f('3', '4')} · 180° = 135°</td></tr>
      </tbody></table></div>
      <p>Radians are usually written as multiples of ${m('π')} and the word “rad” is left off:
      ${m('x = ' + f('π', '6'))} means an angle, not a number of degrees. A radian measure without
      ${m('π')} in it is a plain real number — ${m('1 rad ≈ 57.3°')}.</p>
      <div class="warn"><span class="wl">Set the calculator, or every answer is wrong</span>
      ${m('sin 30 = 0.5')} in degree mode and ${m('≈ −0.988')} in radian mode. Neither is a mistake by
      the calculator. Check the DEG/RAD indicator before the first line of any trigonometry paper.</div>`
    },
    {
      h: 'The angles worth knowing',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Degrees</th><th class="m">0°</th><th class="m">30°</th><th class="m">45°</th><th class="m">60°</th><th class="m">90°</th><th class="m">180°</th><th class="m">270°</th><th class="m">360°</th></tr></thead>
      <tbody>
        <tr><td>Radians</td><td class="m">0</td><td class="m">${f('π', '6')}</td><td class="m">${f('π', '4')}</td><td class="m">${f('π', '3')}</td><td class="m">${f('π', '2')}</td><td class="m">π</td><td class="m">${f('3π', '2')}</td><td class="m">2π</td></tr>
      </tbody></table></div>
      {{fig:unitCircle:The circle marked in both units — the eight angles that must be automatic.}}
      <div class="keybox"><div class="klabel">Learn the row, not the rule</div>
      Converting ${m('45°')} from first principles takes fifteen seconds; recognising ${m(f('π', '4'))}
      takes none. Every question in the next four lessons uses these eight values, so the table above
      is worth memorising outright — read it left to right, then right to left, until both directions
      are instant.</div>`
    },
    {
      h: 'Arcs and sectors',
      html: `<p>With ${m('α')} in <b>radians</b>, the two formulae are as short as they can be:</p>
      ${eq(m('l = rα') + '     ' + m('S = ' + f('1', '2') + 'r²α'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Quantity</th><th>Radians</th><th>Degrees</th></tr></thead>
      <tbody>
        <tr><td>arc length</td><td class="m">l = rα</td><td class="m">l = ${f('θ', '360')} · 2πr</td></tr>
        <tr><td>sector area</td><td class="m">S = ½r²α</td><td class="m">S = ${f('θ', '360')} · πr²</td></tr>
      </tbody></table></div>
      <p><b>Example.</b> ${m('r = 6 cm')}, ${m('α = ' + f('π', '3'))}. Then ${m('l = 6 · ' + f('π', '3') + ' = 2π cm')}
      and ${m('S = ' + f('1', '2') + ' · 36 · ' + f('π', '3') + ' = 6π cm²')}.</p>
      <div class="warn"><span class="wl">${m('l = rα')} is false in degrees</span>
      The compact formulae are the reward for using radians, and they are only true in radians. If the
      angle is given in degrees, convert first — or use the ${m(f('θ', '360'))} versions instead.</div>`
    }
  ],
  examples: [
    {
      q: 'Convert ' + m('135°') + ' to radians and ' + m(f('5π', '6')) + ' to degrees.',
      steps: [
        [m('135 · ' + f('π', '180') + ' = ' + f('135π', '180')), ''],
        ['Cancel by ' + m('45') + ': ' + m(f('3π', '4')) + '.', ''],
        [m(f('5π', '6') + ' · ' + f('180', 'π') + ' = ' + f('5 · 180', '6')), ''],
        [m('= 150°'), '']
      ],
      ans: m(f('3π', '4')) + ' and ' + m('150°')
    },
    {
      q: 'A circle has ' + m('r = 6 cm') + '. Find the arc and sector for ' + m('α = ' + f('π', '3')) + '.',
      steps: [
        [m('l = rα = 6 · ' + f('π', '3')), ''],
        [m('l = 2π ≈ 6.28 cm'), ''],
        [m('S = ½ · 6² · ' + f('π', '3') + ' = ½ · 36 · ' + f('π', '3')), ''],
        [m('S = 6π ≈ 18.85 cm²'), '']
      ],
      ans: m('l = 2π cm') + ', ' + m('S = 6π cm²')
    },
    {
      q: 'An arc of ' + m('10 cm') + ' subtends ' + m('2 rad') + '. Find the radius and the sector area.',
      steps: [
        [m('α = ' + f('l', 'r') + ' ⇒ r = ' + f('l', 'α')), ''],
        [m('r = ' + f('10', '2') + ' = 5 cm'), ''],
        [m('S = ½ · 25 · 2'), ''],
        [m('S = 25 cm²'), '']
      ],
      ans: m('r = 5 cm') + ', ' + m('S = 25 cm²')
    }
  ],
  modelNote: 'Cut a length of string equal to the radius of a large circle drawn on the board and bend it round the rim — one radian becomes a physical object, not a definition.',
  interactive: {
    type: 'circleAngles',
    title: 'Degrees and radians on one circle',
    hint: 'Drag the radius and watch both readings.'
  },
  quiz: [
    { q: 'One radian is the angle whose arc equals:', a: ['the diameter', 'the radius', 'the circumference', m('π')], c: 1, why: 'That is the definition.' },
    { q: m('180°') + ' in radians:', a: [m(f('π', '2')), m('π'), m('2π'), m(f('π', '4'))], c: 1, why: 'Half a turn.' },
    { q: m('60°') + ' in radians:', a: [m(f('π', '6')), m(f('π', '4')), m(f('π', '3')), m(f('π', '2'))], c: 2, why: m('60 · ' + f('π', '180')) + '.' },
    { q: m(f('3π', '4')) + ' in degrees:', a: [m('120°'), m('135°'), m('150°'), m('45°')], c: 1, why: m(f('3', '4') + ' · 180') + '.' },
    { q: 'Arc length, ' + m('α') + ' in radians:', a: [m('l = rα'), m('l = r²α'), m('l = ' + f('α', 'r')), m('l = 2πrα')], c: 0, why: 'From ' + m('α = ' + f('l', 'r')) + '.' },
    { q: 'Sector area, ' + m('α') + ' in radians:', a: [m('r²α'), m('½r²α'), m('½rα'), m('πr²α')], c: 1, why: 'Half the radius squared, times the angle.' }
  ],
  practice: {
    easy: [
      [m('90°') + ' in radians', m(f('π', '2'))],
      [m('45°') + ' in radians', m(f('π', '4'))],
      [m('30°') + ' in radians', m(f('π', '6'))],
      [m('π') + ' in degrees', m('180°')],
      [m(f('π', '3')) + ' in degrees', m('60°')],
      [m('r = 4') + ', ' + m('α = 2') + ': arc', m('8')],
      [m('r = 2') + ', ' + m('α = 3') + ': sector area', m('6')]
    ],
    med: [
      [m('135°') + ' in radians', m(f('3π', '4'))],
      [m('210°') + ' in radians', m(f('7π', '6'))],
      [m(f('5π', '6')) + ' in degrees', m('150°')],
      [m(f('7π', '4')) + ' in degrees', m('315°')],
      [m('r = 6') + ', ' + m('α = ' + f('π', '3')) + ': arc', m('2π')],
      [m('r = 6') + ', ' + m('α = ' + f('π', '3')) + ': sector area', m('6π')],
      ['Arc ' + m('10') + ', ' + m('α = 2') + ': radius', m('5')]
    ],
    hard: [
      [m('1 rad') + ' in degrees, to 1 d.p.', m('57.3°')],
      ['Arc ' + m('12') + ', radius ' + m('8') + ': the angle in degrees', m('≈ 85.9°')],
      ['A sector of area ' + m('18') + ' and radius ' + m('6') + ': the angle', m('1 rad')],
      ['Perimeter of a sector, ' + m('r = 5') + ', ' + m('α = ' + f('π', '2')), m('10 + ' + f('5π', '2'))],
      ['A sector of angle ' + m(f('2π', '3')) + ' has area ' + m('12π') + ': the radius', m('6')],
      ['The minute hand is ' + m('9 cm') + '; the arc its tip sweeps in ' + m('20') + ' minutes', m('6π cm')],
      ['Area swept by that hand in ' + m('20') + ' minutes', m('27π cm²')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Give every radian answer as an exact multiple of ' + m('π') + ', not as a decimal.',
  homework: [
    'Convert ' + m('120°') + ', ' + m('225°') + ' and ' + m('300°') + ' to radians.',
    'Convert ' + m(f('π', '5')) + ', ' + m(f('4π', '3')) + ' and ' + m(f('11π', '6')) + ' to degrees.',
    'A circle of radius ' + m('10 cm') + ': find the arc and sector for ' + m('α = ' + f('π', '4')) + '.',
    'An arc of ' + m('15 cm') + ' subtends ' + m('1.5 rad') + '. Find the radius.',
    'Find the perimeter of a sector with ' + m('r = 8') + ' and ' + m('α = ' + f('π', '3')) + '.'
  ]
});

/* ============================== 22 ============================== */
G9_ALG.push({
  id: 'a9-22', stream: 'alg', grade: 9, quarter: 2, lessons: '41–42', hours: 2,
  title: 'Rotation of a point about the origin',
  subtitle: 'The angle leaves the triangle: a point turning on the unit circle can turn as far as it likes.',
  uz: 'Algebra 9, §18', uzPage: 'pp. 97–102',
  cam: 'IGX 15.2', camPage: 'Core & Extended, pp. 310–314', wb: 'Exercise 15.2',
  objectives: [
    'Describe an angle as a rotation of the point P(1, 0) about the origin.',
    'Give a rotation a sign — anticlockwise positive, clockwise negative.',
    'Find every angle that lands a point in the same position: α + 2πk.',
    'Name the quadrant in which a given rotation ends.'
  ],
  terms: [
    ['Rotation', 'Aylanish', 'Поворот'],
    ['Unit circle', 'Birlik aylana', 'Единичная окружность'],
    ['Initial side', 'Boshlang‘ich tomon', 'Начальная сторона'],
    ['Terminal side', 'Yakuniy tomon', 'Конечная сторона'],
    ['Anticlockwise', 'Soat strelkasiga teskari', 'Против часовой стрелки'],
    ['Quadrant', 'Chorak', 'Четверть'],
    ['Coterminal angles', 'Ustma-ust tushuvchi burchaklar', 'Совпадающие углы'],
    ['Full turn', 'To‘liq aylanish', 'Полный оборот']
  ],
  timing: [[13, 'An angle as a turn'], [20, 'Sign and size'], [23, 'Angles that land together'], [20, 'Quadrants'], [4, 'Homework']],
  sections: [
    {
      h: 'An angle as a turn',
      html: `<p>In Grade 8 an angle lived inside a triangle, so it was between ${m('0°')} and ${m('180°')}.
      That restriction is now dropped.</p>
      <p>Draw the <b>unit circle</b> ${m('x² + y² = 1')} and start at ${m('P₀(1, 0)')}. Turn the point
      about the origin. The angle of the turn is the angle; the ray ${m('OP₀')} is the <b>initial
      side</b> and the ray to the new position the <b>terminal side</b>.</p>
      {{fig:unitCircle:Every angle is a position reached by turning P(1, 0) about the origin.}}
      <div class="keybox"><div class="klabel">Nothing is lost, and a great deal is gained</div>
      For ${m('0 < α < ' + f('π', '2'))} the new definition agrees exactly with the triangle one — the
      old sine and cosine are the coordinates of the turned point. But now ${m('α = 400°')} and
      ${m('α = −30°')} also mean something, and that is what makes trigonometry into a subject about
      functions rather than triangles.</div>`
    },
    {
      h: 'Sign and size',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Turn</th><th>Sign</th><th>Example</th><th>Ends at</th></tr></thead>
      <tbody>
        <tr><td>anticlockwise</td><td>positive</td><td class="m">+90°</td><td class="m">(0, 1)</td></tr>
        <tr><td>clockwise</td><td>negative</td><td class="m">−90°</td><td class="m">(0, −1)</td></tr>
        <tr><td>more than one turn</td><td>positive</td><td class="m">450°</td><td class="m">(0, 1)</td></tr>
        <tr><td>no turn</td><td>zero</td><td class="m">0</td><td class="m">(1, 0)</td></tr>
      </tbody></table></div>
      <p>The convention is universal and never varies: anticlockwise is the positive direction, in every
      country and every textbook. It matches the direction in which the first quadrant is entered.</p>
      <div class="warn"><span class="wl">A negative angle is not a negative number of degrees “backwards along the axis”</span>
      ${m('−30°')} means turn thirty degrees the other way — clockwise, into the fourth quadrant. It is
      a direction, not a subtraction.</div>`
    },
    {
      h: 'Angles that land together',
      html: `<p>A full turn is ${m('2π')}, so adding or subtracting ${m('2π')} changes the angle without
      moving the point.</p>
      ${eq(m('α') + ' and ' + m('α + 2πk') + ', ' + m('k ∈ ℤ') + ', end at the same place', true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Angle</th><th>Same position as</th><th>Because</th></tr></thead>
      <tbody>
        <tr><td class="m">400°</td><td class="m">40°</td><td class="m">400 − 360</td></tr>
        <tr><td class="m">−30°</td><td class="m">330°</td><td class="m">−30 + 360</td></tr>
        <tr><td class="m">${f('9π', '4')}</td><td class="m">${f('π', '4')}</td><td class="m">${f('9π', '4')} − 2π</td></tr>
        <tr><td class="m">−${f('π', '3')}</td><td class="m">${f('5π', '3')}</td><td class="m">−${f('π', '3')} + 2π</td></tr>
        <tr><td class="m">1080°</td><td class="m">0°</td><td>three whole turns</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">This is where periodicity comes from</div>
      Because the position repeats every ${m('2π')}, so does every quantity read off the position. That
      single observation is the reason sine and cosine are periodic with period ${m('2π')} — a fact the
      next lesson will use constantly.</div>`
    },
    {
      h: 'Quadrants',
      html: `<p>The two axes cut the circle into four quadrants, numbered anticlockwise from the top
      right.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Quadrant</th><th>Degrees</th><th>Radians</th><th>Signs of ${m('(x, y)')}</th></tr></thead>
      <tbody>
        <tr><td>I</td><td class="m">0°–90°</td><td class="m">0–${f('π', '2')}</td><td class="m">(+, +)</td></tr>
        <tr><td>II</td><td class="m">90°–180°</td><td class="m">${f('π', '2')}–π</td><td class="m">(−, +)</td></tr>
        <tr><td>III</td><td class="m">180°–270°</td><td class="m">π–${f('3π', '2')}</td><td class="m">(−, −)</td></tr>
        <tr><td>IV</td><td class="m">270°–360°</td><td class="m">${f('3π', '2')}–2π</td><td class="m">(+, −)</td></tr>
      </tbody></table></div>
      <p>To find the quadrant of any angle, first reduce it to ${m('[0, 2π)')} by adding or subtracting
      whole turns, then read the table.</p>
      <div class="warn"><span class="wl">The axes belong to no quadrant</span>
      ${m('90°')}, ${m('180°')}, ${m('270°')} and ${m('0°')} are boundary angles. Asked for “the
      quadrant of ${m('180°')}”, the answer is that there is none — it lies on the negative
      ${m('x')}-axis.</div>`
    }
  ],
  examples: [
    {
      q: 'Where does a rotation of ' + m('400°') + ' end, and in which quadrant?',
      steps: [
        [m('400 − 360 = 40'), 'One full turn removed.'],
        ['So it ends where ' + m('40°') + ' ends.', ''],
        [m('0° < 40° < 90°'), ''],
        ['Quadrant I.', '']
      ],
      ans: 'Same as ' + m('40°') + ' — quadrant I'
    },
    {
      q: 'In which quadrant does ' + m('−' + f('2π', '3')) + ' end?',
      steps: [
        ['Add a full turn: ' + m('−' + f('2π', '3') + ' + 2π'), ''],
        [m('= ' + f('4π', '3')), ''],
        [m('π < ' + f('4π', '3') + ' < ' + f('3π', '2')), ''],
        ['Quadrant III.', '']
      ],
      ans: 'Quadrant III'
    },
    {
      q: 'Write every angle that ends where ' + m('50°') + ' ends.',
      steps: [
        ['Adding whole turns changes nothing.', ''],
        [m('50° + 360°k') + ', ' + m('k ∈ ℤ') + '.', ''],
        ['In radians: ' + m(f('5π', '18') + ' + 2πk') + '.', ''],
        [m('k = −1') + ' gives ' + m('−310°') + ' — the same place.', '']
      ],
      ans: m('50° + 360°k, k ∈ ℤ')
    }
  ],
  modelNote: 'Pin a paper arrow at the origin of a circle drawn on the board; turn it 400° and then −310° and let the class see both stop in the same place.',
  interactive: {
    type: 'circleAngles',
    title: 'Turn the point',
    hint: 'Positive is anticlockwise. Pass 360° and start again.'
  },
  quiz: [
    { q: 'The positive direction of rotation is:', a: ['clockwise', 'anticlockwise', 'either', 'downwards'], c: 1, why: 'Universal convention.' },
    { q: 'Rotation starts from the point:', a: [m('(0, 0)'), m('(1, 0)'), m('(0, 1)'), m('(−1, 0)')], c: 1, why: 'The initial side is along ' + m('Ox') + '.' },
    { q: m('400°') + ' ends where:', a: [m('40°'), m('60°'), m('400°'), m('−40°')], c: 0, why: 'One turn removed.' },
    { q: m('−30°') + ' ends where:', a: [m('30°'), m('150°'), m('330°'), m('210°')], c: 2, why: 'Add ' + m('360°') + '.' },
    { q: 'Angles ending together differ by:', a: [m('π k'), m('2π k'), m(f('π', '2') + 'k'), m('πk²')], c: 1, why: 'Whole turns.' },
    { q: m(f('4π', '3')) + ' lies in quadrant:', a: ['I', 'II', 'III', 'IV'], c: 2, why: 'Between ' + m('π') + ' and ' + m(f('3π', '2')) + '.' }
  ],
  practice: {
    easy: [
      ['Quadrant of ' + m('50°'), 'I'],
      ['Quadrant of ' + m('120°'), 'II'],
      ['Quadrant of ' + m('200°'), 'III'],
      ['Quadrant of ' + m('300°'), 'IV'],
      [m('370°') + ' ends where?', m('10°')],
      [m('−90°') + ' ends where?', m('270°')],
      ['Sign of an anticlockwise turn', 'Positive']
    ],
    med: [
      ['Reduce ' + m('400°') + ' to ' + m('[0°, 360°)'), m('40°')],
      ['Reduce ' + m('−200°') + ' to ' + m('[0°, 360°)'), m('160°')],
      ['Reduce ' + m(f('9π', '4')) + ' to ' + m('[0, 2π)'), m(f('π', '4'))],
      ['Reduce ' + m('−' + f('π', '3')) + ' to ' + m('[0, 2π)'), m(f('5π', '3'))],
      ['Quadrant of ' + m(f('4π', '3')), 'III'],
      ['Quadrant of ' + m('−' + f('2π', '3')), 'III'],
      ['All angles ending where ' + m('50°') + ' ends', m('50° + 360°k')]
    ],
    hard: [
      ['Reduce ' + m('1000°') + ' to ' + m('[0°, 360°)'), m('280°')],
      ['Reduce ' + m('−' + f('17π', '6')) + ' to ' + m('[0, 2π)'), m(f('7π', '6'))],
      ['Quadrant of ' + m('−1000°'), 'I — it reduces to ' + m('80°')],
      ['How many full turns in ' + m('2000°') + '?', m('5') + ', with ' + m('200°') + ' left'],
      ['Two angles end together and differ by ' + m('1440°') + '. How many turns?', m('4')],
      ['For which ' + m('k') + ' does ' + m('30° + 360°k') + ' lie in ' + m('[700°, 1100°)') + '?', m('k = 2') + ' — that is ' + m('750°')],
      ['A wheel turns ' + m('7.25') + ' times. The final position, in degrees', m('90°')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'For every angle give the reduced angle, the quadrant, and one negative angle ending in the same place.',
  homework: [
    'Reduce ' + m('520°') + ', ' + m('−140°') + ' and ' + m('900°') + ' to ' + m('[0°, 360°)') + '.',
    'Reduce ' + m(f('11π', '4')) + ' and ' + m('−' + f('5π', '3')) + ' to ' + m('[0, 2π)') + '.',
    'Name the quadrant of ' + m('160°') + ', ' + m(f('7π', '6')) + ' and ' + m('−80°') + '.',
    'Write every angle that ends where ' + m(f('π', '6')) + ' ends.',
    'A wheel makes ' + m('3.75') + ' turns. Where does the marked point finish?'
  ]
});

/* ============================== 23 ============================== */
G9_ALG.push({
  id: 'a9-23', stream: 'alg', grade: 9, quarter: 2, lessons: '43–44', hours: 2,
  title: 'Sine, cosine, tangent and cotangent of any angle',
  subtitle: 'Four numbers read off one turned point — and the definitions no longer need a triangle.',
  uz: 'Algebra 9, §19', uzPage: 'pp. 103–108',
  cam: 'IGX 15.3', camPage: 'Core & Extended, pp. 315–321', wb: 'Exercise 15.3',
  objectives: [
    'Define sin α and cos α as the coordinates of the point turned through α on the unit circle.',
    'Define tan α and cot α as the ratios y/x and x/y, and say where they fail to exist.',
    'Give the exact values at 0, π/6, π/4, π/3, π/2 and the axis angles.',
    'State and use sin²α + cos²α = 1.'
  ],
  terms: [
    ['Sine', 'Sinus', 'Синус'],
    ['Cosine', 'Kosinus', 'Косинус'],
    ['Tangent', 'Tangens', 'Тангенс'],
    ['Cotangent', 'Kotangens', 'Котангенс'],
    ['Ordinate', 'Ordinata', 'Ордината'],
    ['Abscissa', 'Abssissa', 'Абсцисса'],
    ['Undefined', 'Aniqlanmagan', 'Не определён'],
    ['Fundamental identity', 'Asosiy ayniyat', 'Основное тождество']
  ],
  timing: [[16, 'The definitions'], [20, 'The exact values'], [20, 'Where tangent and cotangent fail'], [20, 'The fundamental identity'], [4, 'Homework']],
  sections: [
    {
      h: 'The definitions',
      html: `<p>Turn ${m('P₀(1, 0)')} through ${m('α')} and let it arrive at ${m('P(x, y)')}. The four
      quantities are read straight off that point.</p>
      ${eq(m('cos α = x') + '     ' + m('sin α = y') + '     ' + m('tan α = ' + f('y', 'x')) + '     ' + m('cot α = ' + f('x', 'y')), true)}
      {{fig:trigCircle:cos is the abscissa, sin the ordinate — the two coordinates of the turned point.}}
      <p>For an acute angle the point lies in the first quadrant and the right triangle ${m('OPQ')} has
      hypotenuse ${m('1')}, so ${m('sin α = ' + f('opposite', 'hypotenuse') + ' = y')} exactly as before.
      Nothing that was true in Grade 8 has changed; the definition has only been widened.</p>
      <div class="keybox"><div class="klabel">Two coordinates, four functions</div>
      Only ${m('sin')} and ${m('cos')} are genuinely new definitions. Tangent and cotangent are
      quotients of them: ${m('tan α = ' + f('sin α', 'cos α'))} and ${m('cot α = ' + f('cos α', 'sin α'))}.
      Every identity in the next chapter follows from that.</div>`
    },
    {
      h: 'The exact values',
      html: `<div class="tablewrap"><table>
      <thead><tr><th class="m">α</th><th class="m">0</th><th class="m">${f('π', '6')}</th><th class="m">${f('π', '4')}</th><th class="m">${f('π', '3')}</th><th class="m">${f('π', '2')}</th><th class="m">π</th><th class="m">${f('3π', '2')}</th></tr></thead>
      <tbody>
        <tr><td class="m">sin α</td><td class="m">0</td><td class="m">${f('1', '2')}</td><td class="m">${f(sr('2'), '2')}</td><td class="m">${f(sr('3'), '2')}</td><td class="m">1</td><td class="m">0</td><td class="m">−1</td></tr>
        <tr><td class="m">cos α</td><td class="m">1</td><td class="m">${f(sr('3'), '2')}</td><td class="m">${f(sr('2'), '2')}</td><td class="m">${f('1', '2')}</td><td class="m">0</td><td class="m">−1</td><td class="m">0</td></tr>
        <tr><td class="m">tan α</td><td class="m">0</td><td class="m">${f(sr('3'), '3')}</td><td class="m">1</td><td class="m">${sr('3')}</td><td>—</td><td class="m">0</td><td>—</td></tr>
        <tr><td class="m">cot α</td><td>—</td><td class="m">${sr('3')}</td><td class="m">1</td><td class="m">${f(sr('3'), '3')}</td><td class="m">0</td><td>—</td><td class="m">0</td></tr>
      </tbody></table></div>
      {{fig:specialAngles:The half-square and the half-equilateral triangle — where every exact value comes from.}}
      <div class="keybox"><div class="klabel">Read the sine row, not the whole table</div>
      The sine row for ${m('0, ' + f('π', '6') + ', ' + f('π', '4') + ', ' + f('π', '3') + ', ' + f('π', '2'))}
      is ${m(f(sr('0'), '2') + ', ' + f(sr('1'), '2') + ', ' + f(sr('2'), '2') + ', ' + f(sr('3'), '2') + ', ' + f(sr('4'), '2'))}
      — the roots of ${m('0, 1, 2, 3, 4')} over two. The cosine row is the same read backwards, and the
      tangent row is one divided by the other.</div>`
    },
    {
      h: 'Where tangent and cotangent fail',
      html: `<p>A quotient needs a non-zero denominator, so two of the four functions have gaps.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Function</th><th>Undefined when</th><th>That is</th><th>Because the point is at</th></tr></thead>
      <tbody>
        <tr><td class="m">tan α</td><td class="m">cos α = 0</td><td class="m">α = ${f('π', '2')} + πk</td><td class="m">(0, ±1)</td></tr>
        <tr><td class="m">cot α</td><td class="m">sin α = 0</td><td class="m">α = πk</td><td class="m">(±1, 0)</td></tr>
      </tbody></table></div>
      <p>Sine and cosine, by contrast, exist for every angle: they are coordinates, and a point on the
      circle always has both.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Function</th><th>Domain</th><th>Range</th></tr></thead>
      <tbody>
        <tr><td class="m">sin α, cos α</td><td class="m">ℝ</td><td class="m">[−1, 1]</td></tr>
        <tr><td class="m">tan α</td><td class="m">α ≠ ${f('π', '2')} + πk</td><td class="m">ℝ</td></tr>
        <tr><td class="m">cot α</td><td class="m">α ≠ πk</td><td class="m">ℝ</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('sin α = 2')} is not a hard equation — it is an impossible one</span>
      Both coordinates of a point on the unit circle lie between ${m('−1')} and ${m('1')}. An equation
      asking for a sine or cosine outside that range has no solution at all, and saying so is the
      complete answer.</div>`
    },
    {
      h: 'The fundamental identity',
      html: `<p>The point ${m('P(x, y)')} lies on ${m('x² + y² = 1')}. Substituting the definitions gives
      the identity everything else is built on:</p>
      ${eq(m('sin²α + cos²α = 1') + '     for every angle ' + m('α'), true)}
      <p>It is Pythagoras' theorem, written for a triangle with hypotenuse ${m('1')} — and because it
      came from the circle rather than from a triangle, it holds for angles of any size and sign.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Then</th><th>Sign chosen by</th></tr></thead>
      <tbody>
        <tr><td class="m">sin α = ${f('3', '5')}</td><td class="m">cos α = ±${f('4', '5')}</td><td>the quadrant</td></tr>
        <tr><td class="m">cos α = −${f('5', '13')}</td><td class="m">sin α = ±${f('12', '13')}</td><td>the quadrant</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The identity gives the size, the quadrant gives the sign</span>
      ${m('sin²α + cos²α = 1')} always produces ${m('±')}. It cannot tell you which — only the quadrant
      can, and that is exactly what the next lesson is about. An answer left as ${m('±')} when the
      quadrant was given is an incomplete answer.</div>`
    }
  ],
  examples: [
    {
      q: 'Find ' + m('sin, cos, tan, cot') + ' of ' + m(f('π', '4')) + '.',
      steps: [
        ['The point is ' + m('(' + f(sr('2'), '2') + ', ' + f(sr('2'), '2') + ')') + '.', 'Half a square.'],
        [m('cos = ' + f(sr('2'), '2')) + ', ' + m('sin = ' + f(sr('2'), '2')) + '.', ''],
        [m('tan = ' + f('y', 'x') + ' = 1'), ''],
        [m('cot = 1'), 'Equal coordinates.']
      ],
      ans: m(f(sr('2'), '2') + ', ' + f(sr('2'), '2') + ', 1, 1')
    },
    {
      q: 'Given ' + m('sin α = ' + f('3', '5')) + ' and ' + m('α') + ' in quadrant II, find the other three.',
      steps: [
        [m('cos²α = 1 − ' + f('9', '25') + ' = ' + f('16', '25')), ''],
        ['Quadrant II: ' + m('cos α < 0') + ', so ' + m('cos α = −' + f('4', '5')) + '.', 'The sign comes from the quadrant.'],
        [m('tan α = ' + f('3/5', '−4/5') + ' = −' + f('3', '4')), ''],
        [m('cot α = −' + f('4', '3')), '']
      ],
      ans: m('cos = −' + f('4', '5') + ', tan = −' + f('3', '4') + ', cot = −' + f('4', '3'))
    },
    {
      q: 'Evaluate ' + m('sin ' + f('π', '2') + ' + cos π − tan 0') + '.',
      steps: [
        [m('sin ' + f('π', '2') + ' = 1'), 'The point ' + m('(0, 1)') + '.'],
        [m('cos π = −1'), 'The point ' + m('(−1, 0)') + '.'],
        [m('tan 0 = 0'), ''],
        [m('1 + (−1) − 0 = 0'), '']
      ],
      ans: m('0')
    }
  ],
  modelNote: 'Draw the unit circle once and label only the point; ask the class to read each of the four values off it, so the definitions stay attached to a picture rather than to a table.',
  interactive: {
    type: 'circleAngles',
    title: 'Read the four values off the point',
    hint: 'cos is across, sin is up.'
  },
  quiz: [
    { q: m('cos α') + ' is the point’s:', a: ['ordinate', 'abscissa', 'radius', 'arc'], c: 1, why: 'The ' + m('x') + '-coordinate.' },
    { q: m('tan α') + ' equals:', a: [m(f('x', 'y')), m(f('y', 'x')), m('xy'), m('x + y')], c: 1, why: m(f('sin', 'cos')) + '.' },
    { q: m('sin ' + f('π', '3')) + ' is:', a: [m(f('1', '2')), m(f(sr('2'), '2')), m(f(sr('3'), '2')), m('1')], c: 2, why: 'The half-equilateral triangle.' },
    { q: m('tan α') + ' is undefined when:', a: [m('sin α = 0'), m('cos α = 0'), m('α = 0'), 'never'], c: 1, why: 'A zero denominator.' },
    { q: 'The range of ' + m('cos α') + ':', a: [m('ℝ'), m('[−1, 1]'), m('[0, 1]'), m('(0, ∞)')], c: 1, why: 'It is a coordinate on the unit circle.' },
    { q: m('sin²α + cos²α') + ' equals:', a: [m('0'), m('1'), m('2'), 'it depends'], c: 1, why: 'Pythagoras on the unit circle.' }
  ],
  practice: {
    easy: [
      [m('sin 0'), m('0')],
      [m('cos 0'), m('1')],
      [m('sin ' + f('π', '2')), m('1')],
      [m('cos π'), m('−1')],
      [m('tan ' + f('π', '4')), m('1')],
      [m('sin ' + f('π', '6')), m(f('1', '2'))],
      [m('cos ' + f('π', '3')), m(f('1', '2'))]
    ],
    med: [
      [m('cos ' + f('π', '6')), m(f(sr('3'), '2'))],
      [m('tan ' + f('π', '3')), m(sr('3'))],
      [m('cot ' + f('π', '6')), m(sr('3'))],
      [m('sin ' + f('3π', '2')), m('−1')],
      [m('tan ' + f('π', '2')), 'Undefined'],
      [m('sin²' + f('π', '4') + ' + cos²' + f('π', '4')), m('1')],
      [m('sin ' + f('π', '2') + ' + cos π − tan 0'), m('0')]
    ],
    hard: [
      [m('sin α = ' + f('3', '5')) + ', quadrant II: ' + m('cos α'), m('−' + f('4', '5'))],
      [m('cos α = −' + f('5', '13')) + ', quadrant III: ' + m('sin α'), m('−' + f('12', '13'))],
      [m('tan α = ' + f('3', '4')) + ', quadrant III: ' + m('sin α'), m('−' + f('3', '5'))],
      ['Simplify ' + m('sin⁴α − cos⁴α'), m('sin²α − cos²α')],
      ['Simplify ' + m('(1 − cos²α)(1 + cot²α)'), m('1')],
      ['Solve ' + m('sin α = 2'), 'No solution'],
      [m('sin α + cos α = ' + f('1', '5')) + ': find ' + m('sin α cos α'), m('−' + f('12', '25'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every exact value must be written as a fraction or a surd — no decimals in this homework.',
  homework: [
    'Complete the table of ' + m('sin, cos, tan, cot') + ' for ' + m('0, ' + f('π', '6') + ', ' + f('π', '4') + ', ' + f('π', '3') + ', ' + f('π', '2')) + '.',
    'Given ' + m('cos α = ' + f('8', '17')) + ' and ' + m('α') + ' in quadrant IV, find the other three.',
    'Evaluate ' + m('cos ' + f('π', '3') + ' + sin ' + f('π', '6') + ' − tan ' + f('π', '4')) + '.',
    'Say why ' + m('cos α = 1.2') + ' has no solution.',
    'Simplify ' + m('(1 − sin²α)(1 + tan²α)') + '.'
  ]
});

/* ============================== 24 ============================== */
G9_ALG.push({
  id: 'a9-24', stream: 'alg', grade: 9, quarter: 2, lessons: '45–46',
  hours: 2,
  title: 'The signs of the trigonometric functions in the quadrants',
  subtitle: 'Which of the four are positive where — decided by two coordinates, not by a rhyme.',
  uz: 'Algebra 9, §20', uzPage: 'pp. 109–113',
  cam: 'IGX 15.4', camPage: 'Core & Extended, pp. 322–327', wb: 'Exercise 15.4',
  objectives: [
    'Give the sign of each of the four functions in each of the four quadrants.',
    'Derive the sign table from the signs of x and y rather than memorising it.',
    'Choose the correct sign after using the fundamental identity.',
    'Find the quadrant of an angle from the signs of two of its functions.'
  ],
  terms: [
    ['Sign', 'Ishora', 'Знак'],
    ['Quadrant', 'Chorak', 'Четверть'],
    ['Positive', 'Musbat', 'Положительный'],
    ['Negative', 'Manfiy', 'Отрицательный'],
    ['Coordinate', 'Koordinata', 'Координата'],
    ['Quotient', 'Bo‘linma', 'Частное'],
    ['Boundary angle', 'Chegaraviy burchak', 'Граничный угол'],
    ['Determine', 'Aniqlash', 'Определить']
  ],
  timing: [[13, 'Where the signs come from'], [20, 'The table'], [23, 'Choosing the sign'], [20, 'Working backwards'], [4, 'Homework']],
  sections: [
    {
      h: 'Where the signs come from',
      html: `<p>There is nothing to learn here that is not already known: ${m('cos α = x')} and
      ${m('sin α = y')}, so their signs are simply the signs of the coordinates.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Quadrant</th><th class="m">x</th><th class="m">y</th><th class="m">cos</th><th class="m">sin</th></tr></thead>
      <tbody>
        <tr><td>I</td><td class="m">+</td><td class="m">+</td><td class="m">+</td><td class="m">+</td></tr>
        <tr><td>II</td><td class="m">−</td><td class="m">+</td><td class="m">−</td><td class="m">+</td></tr>
        <tr><td>III</td><td class="m">−</td><td class="m">−</td><td class="m">−</td><td class="m">−</td></tr>
        <tr><td>IV</td><td class="m">+</td><td class="m">−</td><td class="m">+</td><td class="m">−</td></tr>
      </tbody></table></div>
      <p>Tangent and cotangent are quotients of the two, so they are positive exactly where the
      coordinates share a sign — quadrants I and III.</p>
      <div class="keybox"><div class="klabel">Do not memorise a mnemonic you cannot rebuild</div>
      Rhymes for this table exist in every language and they all fail under pressure, because a rhyme
      cannot be checked. Sketching the circle and asking “is ${m('x')} left or right of the axis?” takes
      four seconds and is never wrong.</div>`
    },
    {
      h: 'The table',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Function</th><th>I</th><th>II</th><th>III</th><th>IV</th><th>Positive in</th></tr></thead>
      <tbody>
        <tr><td class="m">sin α</td><td class="m">+</td><td class="m">+</td><td class="m">−</td><td class="m">−</td><td>the upper half</td></tr>
        <tr><td class="m">cos α</td><td class="m">+</td><td class="m">−</td><td class="m">−</td><td class="m">+</td><td>the right half</td></tr>
        <tr><td class="m">tan α</td><td class="m">+</td><td class="m">−</td><td class="m">+</td><td class="m">−</td><td>I and III</td></tr>
        <tr><td class="m">cot α</td><td class="m">+</td><td class="m">−</td><td class="m">+</td><td class="m">−</td><td>I and III</td></tr>
      </tbody></table></div>
      {{fig:unitCircle:sine is positive above the axis, cosine to the right of it — the two halves that decide everything.}}
      <p>Two sentences replace the whole table: <b>sine is positive above the ${m('x')}-axis; cosine is
      positive to the right of the ${m('y')}-axis.</b> Tangent and cotangent follow by division.</p>`
    },
    {
      h: 'Choosing the sign',
      html: `<p>This is the working use of the table. The identity ${m('sin²α + cos²α = 1')} always leaves
      a ${m('±')}; the quadrant removes it.</p>
      <p><b>Example.</b> ${m('cos α = −' + f('5', '13'))} and ${m('α')} is in quadrant III. Then
      ${m('sin²α = 1 − ' + f('25', '169') + ' = ' + f('144', '169'))}, so ${m('sin α = ±' + f('12', '13'))} —
      and quadrant III makes it negative: ${m('sin α = −' + f('12', '13'))}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Gives</th></tr></thead>
      <tbody>
        <tr><td>the identity</td><td>the size</td></tr>
        <tr><td>the quadrant</td><td>the sign</td></tr>
        <tr><td>the quotient</td><td class="m">tan, cot</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Two answers where the question expected one</span>
      If the quadrant is <b>not</b> given, ${m('±')} is the correct answer and both cases must be
      written out. If it <b>is</b> given and you still write ${m('±')}, the mark is lost — the whole
      point of the quadrant was to decide.</div>`
    },
    {
      h: 'Working backwards',
      html: `<p>Two signs pin down the quadrant, because each function splits the circle into two halves
      and two halves intersect in one quarter.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Quadrant</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td class="m">sin α > 0, cos α < 0</td><td>II</td><td>upper half, left half</td></tr>
        <tr><td class="m">sin α < 0, cos α > 0</td><td>IV</td><td>lower half, right half</td></tr>
        <tr><td class="m">tan α > 0, sin α < 0</td><td>III</td><td>matching signs, lower half</td></tr>
        <tr><td class="m">cos α > 0, tan α < 0</td><td>IV</td><td>right half, mismatched signs</td></tr>
      </tbody></table></div>
      <p>One sign alone is never enough: ${m('sin α > 0')} leaves quadrants I and II both open.</p>
      <div class="warn"><span class="wl">On an axis there is no quadrant</span>
      At ${m('α = π')} the point is ${m('(−1, 0)')}: ${m('sin α = 0')}, which is neither positive nor
      negative, and ${m('cot α')} does not exist. Boundary angles are handled by reading the point, not
      by the sign table.</div>`
    }
  ],
  examples: [
    {
      q: 'Give the sign of ' + m('sin 200°') + ', ' + m('cos 200°') + ' and ' + m('tan 200°') + '.',
      steps: [
        [m('180° < 200° < 270°') + ' — quadrant III.', ''],
        ['Both coordinates negative.', ''],
        [m('sin < 0') + ', ' + m('cos < 0') + '.', ''],
        [m('tan > 0') + ' — matching signs.', '']
      ],
      ans: m('−, −, +')
    },
    {
      q: 'Given ' + m('cos α = −' + f('5', '13')) + ' with ' + m('α') + ' in quadrant III, find ' + m('sin α') + ' and ' + m('tan α') + '.',
      steps: [
        [m('sin²α = 1 − ' + f('25', '169') + ' = ' + f('144', '169')), ''],
        [m('sin α = ±' + f('12', '13')), 'The size.'],
        ['Quadrant III ⇒ negative: ' + m('sin α = −' + f('12', '13')) + '.', 'The sign.'],
        [m('tan α = ' + f('−12/13', '−5/13') + ' = ' + f('12', '5')), 'Positive, as III demands.']
      ],
      ans: m('sin α = −' + f('12', '13')) + ', ' + m('tan α = ' + f('12', '5'))
    },
    {
      q: 'In which quadrant is ' + m('α') + ' if ' + m('tan α > 0') + ' and ' + m('cos α < 0') + '?',
      steps: [
        [m('tan α > 0') + ' ⇒ quadrant I or III.', 'Matching signs.'],
        [m('cos α < 0') + ' ⇒ quadrant II or III.', 'Left half.'],
        ['The only quadrant in both lists is III.', ''],
        ['Quadrant III.', '']
      ],
      ans: 'Quadrant III'
    }
  ],
  modelNote: 'Ask for the sign of sin 200° before any algebra: the class should point at the lower-left of a sketched circle, not recite a rule.',
  interactive: {
    type: 'circleAngles',
    title: 'Signs around the circle',
    hint: 'Watch which coordinate changes sign as you cross each axis.'
  },
  quiz: [
    { q: m('sin α') + ' is positive in quadrants:', a: ['I and II', 'I and III', 'III and IV', 'II and III'], c: 0, why: 'The upper half.' },
    { q: m('cos α') + ' is positive in quadrants:', a: ['I and II', 'I and IV', 'II and III', 'III and IV'], c: 1, why: 'The right half.' },
    { q: m('tan α') + ' is positive in quadrants:', a: ['I and II', 'I and III', 'II and IV', 'III and IV'], c: 1, why: 'Matching coordinate signs.' },
    { q: 'Sign of ' + m('cos 200°') + ':', a: ['positive', 'negative', 'zero', 'undefined'], c: 1, why: 'Quadrant III.' },
    { q: m('sin α > 0') + ' and ' + m('cos α < 0') + ' means quadrant:', a: ['I', 'II', 'III', 'IV'], c: 1, why: 'Upper left.' },
    { q: 'The identity gives the size; the sign comes from:', a: ['the identity', 'the quadrant', 'the calculator', 'the radius'], c: 1, why: 'Only the quadrant can decide.' }
  ],
  practice: {
    easy: [
      ['Sign of ' + m('sin 100°'), m('+')],
      ['Sign of ' + m('cos 100°'), m('−')],
      ['Sign of ' + m('sin 250°'), m('−')],
      ['Sign of ' + m('cos 300°'), m('+')],
      ['Sign of ' + m('tan 200°'), m('+')],
      ['Sign of ' + m('tan 150°'), m('−')],
      ['Quadrant of ' + m('α') + ' if both are positive', 'I']
    ],
    med: [
      ['Signs of ' + m('sin, cos, tan') + ' at ' + m('200°'), m('−, −, +')],
      ['Signs at ' + m(f('3π', '4')), m('+, −, −')],
      ['Signs at ' + m('−' + f('π', '4')), m('−, +, −')],
      [m('sin α > 0, tan α < 0') + ': quadrant', 'II'],
      [m('cos α > 0, sin α < 0') + ': quadrant', 'IV'],
      [m('cos α = −' + f('5', '13')) + ', III: ' + m('sin α'), m('−' + f('12', '13'))],
      [m('sin α = ' + f('4', '5')) + ', II: ' + m('tan α'), m('−' + f('4', '3'))]
    ],
    hard: [
      [m('tan α = ' + f('3', '4')) + ', III: ' + m('sin α') + ' and ' + m('cos α'), m('−' + f('3', '5')) + ', ' + m('−' + f('4', '5'))],
      [m('cos α = 0.6') + ', IV: ' + m('cot α'), m('−' + f('3', '4'))],
      [m('sin α cos α < 0') + ': which quadrants?', 'II and IV'],
      [m('sin α + cos α') + ' at ' + m(f('5π', '4')), m('−' + sr('2'))],
      ['Sign of ' + m('sin 400° · cos 400°'), m('+') + ' — quadrant I'],
      [m('sin α = −' + f('7', '25')) + ', IV: ' + m('cos α'), m(f('24', '25'))],
      ['For which quadrants is ' + m('sin α + cos α') + ' certainly negative?', 'III only']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Sketch the circle for every task; a sign written without a picture is a guess.',
  homework: [
    'Give the signs of the four functions at ' + m('130°') + ', ' + m('220°') + ' and ' + m('310°') + '.',
    'Given ' + m('sin α = −' + f('8', '17')) + ' with ' + m('α') + ' in quadrant III, find ' + m('cos α') + ' and ' + m('tan α') + '.',
    'In which quadrant is ' + m('α') + ' if ' + m('cot α > 0') + ' and ' + m('sin α < 0') + '?',
    'Explain why one sign alone never determines the quadrant.',
    'Find ' + m('sin α + cos α') + ' at ' + m(f('7π', '4')) + '.'
  ]
});

/* ============================== 25 ============================== */
G9_ALG.push({
  id: 'a9-25', stream: 'alg', grade: 9, quarter: 2, lessons: '47–48', hours: 2,
  title: 'Control work 4, and the quarter reviewed',
  subtitle: 'The radian, the turned point and the four functions — the opening of trigonometry, tested.',
  uz: 'Algebra 9, Nazorat ishi 4', uzPage: 'pp. 91–113',
  cam: 'IGX 15 review', camPage: 'Core & Extended, pp. 304–330', wb: 'Control paper A4',
  objectives: [
    'Convert between degrees and radians and use l = rα, S = ½r²α under time.',
    'Reduce an angle to [0, 2π) and name its quadrant.',
    'Use the fundamental identity together with the quadrant to fix a sign.',
    'Classify each lost mark and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Radian', 'Radian', 'Радиан'],
    ['Sector', 'Sektor', 'Сектор'],
    ['Rotation', 'Aylanish', 'Поворот'],
    ['Quadrant', 'Chorak', 'Четверть'],
    ['Fundamental identity', 'Asosiy ayniyat', 'Основное тождество'],
    ['Exact value', 'Aniq qiymat', 'Точное значение'],
    ['Revision', 'Takrorlash', 'Повторение']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [12, 'Answers'], [20, 'Diagnosis and rewrite'], [5, 'The quarter']],
  sections: [
    {
      h: 'The paper — 30 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Convert ${m('150°')} to radians and ${m(f('7π', '6'))} to degrees</td><td class="m">4</td><td>L39–40</td></tr>
        <tr><td>2</td><td>${m('r = 9')}, ${m('α = ' + f('π', '3'))}: find the arc and the sector area</td><td class="m">6</td><td>L39–40</td></tr>
        <tr><td>3</td><td>Reduce ${m('−480°')} to ${m('[0°, 360°)')} and name the quadrant</td><td class="m">5</td><td>L41–42</td></tr>
        <tr><td>4</td><td>Evaluate ${m('sin ' + f('π', '6') + ' + cos ' + f('π', '3') + ' − tan ' + f('π', '4'))}</td><td class="m">5</td><td>L43–44</td></tr>
        <tr><td>5</td><td>${m('sin α = ' + f('12', '13'))}, quadrant II: find ${m('cos α')} and ${m('tan α')}</td><td class="m">6</td><td>L45–46</td></tr>
        <tr><td>6</td><td>In which quadrant is ${m('α')} if ${m('tan α < 0')} and ${m('sin α > 0')}?</td><td class="m">4</td><td>L45–46</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks actually go</div>
      Q1 carries one mark for cancelling the fraction; Q2 one for using radians rather than
      ${m(f('θ', '360'))}; Q3 one for adding <b>two</b> full turns; Q5 two marks for the sign, not the
      size; Q6 one for naming both halves before intersecting them.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>fraction not cancelled</td><td class="m">${f('150π', '180')}</td><td class="m">${f('5π', '6')}</td></tr>
        <tr><td>degrees in ${m('l = rα')}</td><td class="m">l = 9 · 60</td><td>convert first</td></tr>
        <tr><td>one turn only</td><td class="m">−480 + 360 = −120</td><td>add ${m('720°')}</td></tr>
        <tr><td>exact value guessed</td><td class="m">sin ${f('π', '6')} = ${f(sr('3'), '2')}</td><td class="m">${f('1', '2')} — sine of the smaller angle is smaller</td></tr>
        <tr><td>sign left as ${m('±')}</td><td class="m">cos α = ±${f('5', '13')}</td><td>quadrant II ⇒ negative</td></tr>
        <tr><td>one condition used</td><td>“${m('tan α < 0')} ⇒ II”</td><td>II or IV; the second condition decides</td></tr>
        <tr><td>calculator in the wrong mode</td><td class="m">sin ${f('π', '6')} = 0.0091</td><td>set RAD</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'The quarter in one page',
      html: `<p>Quarter II covered two chapters, and each reduces to a single sentence.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Block</th><th>The sentence</th></tr></thead>
      <tbody>
        <tr><td>systems of equations</td><td>substitute, add, or use ${m('u = x + y, v = xy')} — the shape chooses</td></tr>
        <tr><td>systems of inequalities</td><td>solve separately, draw one number line, intersect</td></tr>
        <tr><td>proving inequalities</td><td>everything to one side, then a square</td></tr>
        <tr><td>the radian</td><td>angle = arc ÷ radius, and ${m('180° = π')}</td></tr>
        <tr><td>rotation</td><td>an angle is a turn of ${m('P(1, 0)')}; ${m('+2πk')} changes nothing</td></tr>
        <tr><td>the four functions</td><td>${m('cos = x')}, ${m('sin = y')}, and the other two are quotients</td></tr>
        <tr><td>the signs</td><td>sine above the axis, cosine to the right of it</td></tr>
      </tbody></table></div>
      {{fig:unitCircle:The picture that carries the whole of the second half of this quarter.}}
      <div class="keybox"><div class="klabel">Looking forward</div>
      Quarter III takes the four functions and finds the relations between them: the identities, what
      happens to ${m('−α')}, the addition formulae, the double angle, and the reduction formulae. Every
      one of them is proved on the circle drawn above, so the picture is worth keeping in the front of
      the exercise book.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q2: ' + m('r = 9') + ', ' + m('α = ' + f('π', '3')) + '.',
      steps: [
        [m('l = rα = 9 · ' + f('π', '3')), 'The angle is already in radians.'],
        [m('l = 3π ≈ 9.42'), ''],
        [m('S = ½ · 81 · ' + f('π', '3')), ''],
        [m('S = ' + f('27π', '2') + ' ≈ 42.41'), '']
      ],
      ans: m('l = 3π') + ', ' + m('S = ' + f('27π', '2'))
    },
    {
      q: 'Model answer, Q3: reduce ' + m('−480°') + ' and name the quadrant.',
      steps: [
        [m('−480 + 360 = −120') + ' — still negative.', 'One turn is not enough.'],
        [m('−120 + 360 = 240'), 'A second turn.'],
        [m('180° < 240° < 270°'), ''],
        ['Quadrant III.', '']
      ],
      ans: m('240°') + ' — quadrant III'
    },
    {
      q: 'Model answer, Q5: ' + m('sin α = ' + f('12', '13')) + ', quadrant II.',
      steps: [
        [m('cos²α = 1 − ' + f('144', '169') + ' = ' + f('25', '169')), ''],
        [m('cos α = ±' + f('5', '13')), 'The size.'],
        ['Quadrant II ⇒ ' + m('cos α = −' + f('5', '13')) + '.', 'The sign.'],
        [m('tan α = −' + f('12', '5')), 'Negative, as II demands.']
      ],
      ans: m('cos α = −' + f('5', '13')) + ', ' + m('tan α = −' + f('12', '5'))
    }
  ],
  modelNote: 'Put Q5 on the board with the answer left as ±, and ask the class what is still missing — the sign, and the sentence that justifies it.',
  interactive: {
    type: 'quiz',
    title: 'Quarter II in twelve questions',
    hint: 'Two from each block.',
    items: [
      { q: 'A symmetric system suggests:', a: [m('u = x + y, v = xy'), 'squaring', 'a graph', 'addition'], c: 0, why: 'It becomes linear.' },
      { q: 'A candidate pair is tested in:', a: ['one equation', 'both', 'neither', 'the simpler one'], c: 1, why: 'Or the check proves nothing.' },
      { q: 'A system of inequalities gives:', a: ['a union', 'an intersection', 'one interval always', 'the empty set'], c: 1, why: 'Every line must hold.' },
      { q: 'A denominator zero is drawn:', a: ['filled', 'open', 'either', 'twice'], c: 1, why: 'Undefined there.' },
      { q: 'To prove ' + m('A ≥ B') + ':', a: ['test values', 'show ' + m('A − B ≥ 0'), 'draw it', 'show ' + m('A > 0')], c: 1, why: 'One side, one sign.' },
      { q: 'Equality in ' + m('a + b ≥ 2' + sr('ab')) + ':', a: [m('a = 0'), m('a = b'), m('b = 1'), 'never'], c: 1, why: 'The square vanishes.' },
      { q: m('180°') + ' in radians:', a: [m(f('π', '2')), m('π'), m('2π'), m('90')], c: 1, why: 'Half a turn.' },
      { q: 'Arc length in radians:', a: [m('l = rα'), m('l = r²α'), m('l = 2πrα'), m('l = ' + f('r', 'α'))], c: 0, why: 'From ' + m('α = ' + f('l', 'r')) + '.' },
      { q: m('400°') + ' ends where:', a: [m('40°'), m('60°'), m('−40°'), m('340°')], c: 0, why: 'One turn removed.' },
      { q: m('cos α') + ' is the:', a: ['ordinate', 'abscissa', 'radius', 'arc'], c: 1, why: m('x') + '-coordinate.' },
      { q: m('tan α') + ' is undefined when:', a: [m('sin α = 0'), m('cos α = 0'), m('α = 0'), 'never'], c: 1, why: 'Zero denominator.' },
      { q: m('sin α > 0, cos α < 0') + ' means quadrant:', a: ['I', 'II', 'III', 'IV'], c: 1, why: 'Upper left.' }
    ]
  },
  quiz: [
    { q: 'Q1 loses a mark most often for:', a: ['a wrong formula', 'an uncancelled fraction', 'no units', 'a decimal'], c: 1, why: m(f('150π', '180')) + ' is not finished.' },
    { q: m('l = rα') + ' requires ' + m('α') + ' in:', a: ['degrees', 'radians', 'either', 'turns'], c: 1, why: 'The compact formula is a radian formula.' },
    { q: m('−480°') + ' needs:', a: ['one turn', 'two turns', 'three turns', 'none'], c: 1, why: 'One leaves it negative.' },
    { q: 'In Q5 the quadrant supplies:', a: ['the size', 'the sign', 'both', 'neither'], c: 1, why: 'The identity gave the size.' },
    { q: 'One sign condition determines:', a: ['one quadrant', 'two quadrants', 'all four', 'none'], c: 1, why: 'It splits the circle in half.' },
    { q: 'Work on the mistakes means:', a: ['fix the wrong line', 'rewrite the solution', 'copy the answer', 'skip it'], c: 1, why: 'The whole solution, again.' }
  ],
  practice: {
    easy: [
      [m('150°') + ' in radians', m(f('5π', '6'))],
      [m(f('7π', '6')) + ' in degrees', m('210°')],
      [m('r = 9, α = ' + f('π', '3')) + ': arc', m('3π')],
      [m('r = 9, α = ' + f('π', '3')) + ': sector area', m(f('27π', '2'))],
      ['Reduce ' + m('−480°'), m('240°')],
      [m('sin ' + f('π', '6') + ' + cos ' + f('π', '3')), m('1')],
      ['Sign of ' + m('cos 130°'), m('−')]
    ],
    med: [
      [m('sin ' + f('π', '6') + ' + cos ' + f('π', '3') + ' − tan ' + f('π', '4')), m('0')],
      [m('sin α = ' + f('12', '13')) + ', II: ' + m('cos α'), m('−' + f('5', '13'))],
      [m('sin α = ' + f('12', '13')) + ', II: ' + m('tan α'), m('−' + f('12', '5'))],
      [m('tan α < 0, sin α > 0') + ': quadrant', 'II'],
      ['Quadrant of ' + m('−480°'), 'III'],
      ['Solve ' + m('{ x + y = 5 ; xy = 6 }'), m('(2, 3), (3, 2)')],
      ['Solve ' + m('{ x² − 1 > 0 ; x² − 9 < 0 }'), m('(−3, −1) ∪ (1, 3)')]
    ],
    hard: [
      ['A sector of radius ' + m('12') + ' has area ' + m('24π') + ': the angle', m(f('π', '3'))],
      ['Perimeter of that sector', m('24 + 4π')],
      [m('cos α = −' + f('3', '5')) + ', III: ' + m('sin α + cos α'), m('−' + f('7', '5'))],
      ['Prove ' + m('x² + 16 ≥ 8x') + ' and name the equality case', m('(x − 4)² ≥ 0') + '; ' + m('x = 4')],
      ['Solve ' + m('{ x² + y² = 25 ; x² − y² = 7 }'), m('(±4, ±3)')],
      ['Reduce ' + m('−' + f('19π', '6')) + ' to ' + m('[0, 2π)'), m(f('5π', '6'))],
      ['A wheel of radius ' + m('30 cm') + ' rolls ' + m('6 m') + '. The angle turned, in radians', m('20')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite in full every question that lost a mark; the holiday is not the place to leave them.',
  homework: [
    'Convert ' + m('240°') + ' to radians and ' + m(f('5π', '4')) + ' to degrees.',
    'A sector has ' + m('r = 12') + ' and ' + m('α = ' + f('π', '4')) + '. Find its arc, area and perimeter.',
    'Reduce ' + m('−750°') + ' to ' + m('[0°, 360°)') + ' and name the quadrant.',
    'Given ' + m('cos α = −' + f('4', '5')) + ' with ' + m('α') + ' in quadrant II, find ' + m('sin α') + ' and ' + m('cot α') + '.',
    'Evaluate ' + m('sin ' + f('π', '3') + ' · cos ' + f('π', '6') + ' + cos ' + f('π', '3') + ' · sin ' + f('π', '6')) + '.'
  ]
});

/* ============================== 26 ============================== */
G9_ALG.push({
  id: 'a9-26', stream: 'alg', grade: 9, quarter: 3, lessons: '49–50', hours: 2,
  title: 'Relations between the functions of one angle',
  subtitle: 'Know one of the four and you know them all — up to a sign the quadrant supplies.',
  uz: 'Algebra 9, §21', uzPage: 'pp. 114–119',
  cam: 'IGX 15.5', camPage: 'Core & Extended, pp. 328–333', wb: 'Exercise 15.5',
  objectives: [
    'State the three Pythagorean relations and derive the second and third from the first.',
    'Use tan α · cot α = 1 and the quotient definitions fluently.',
    'Find all four functions from any one of them plus a quadrant.',
    'Express one function in terms of another with the correct sign.'
  ],
  terms: [
    ['Relation', 'Munosabat', 'Соотношение'],
    ['Identity', 'Ayniyat', 'Тождество'],
    ['Reciprocal', 'Teskari son', 'Обратное число'],
    ['Quotient', 'Bo‘linma', 'Частное'],
    ['To divide through', 'Bo‘lib chiqish', 'Разделить почленно'],
    ['Valid for', 'O‘rinli', 'Справедливо для'],
    ['Restriction', 'Cheklov', 'Ограничение'],
    ['Derive', 'Keltirib chiqarish', 'Вывести']
  ],
  timing: [[13, 'The three relations'], [20, 'Deriving the second and third'], [23, 'From one to all four'], [20, 'Expressing one by another'], [4, 'Homework']],
  sections: [
    {
      h: 'The three relations',
      html: `${eq(m('sin²α + cos²α = 1') + '     ' + m('1 + tan²α = ' + f('1', 'cos²α')) + '     ' + m('1 + cot²α = ' + f('1', 'sin²α')), true)}
      <p>Together with ${m('tan α = ' + f('sin α', 'cos α'))}, ${m('cot α = ' + f('cos α', 'sin α'))} and
      ${m('tan α · cot α = 1')}, these are the whole of this lesson.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Relation</th><th>Valid for</th></tr></thead>
      <tbody>
        <tr><td class="m">sin²α + cos²α = 1</td><td>every ${m('α')}</td></tr>
        <tr><td class="m">1 + tan²α = ${f('1', 'cos²α')}</td><td class="m">cos α ≠ 0</td></tr>
        <tr><td class="m">1 + cot²α = ${f('1', 'sin²α')}</td><td class="m">sin α ≠ 0</td></tr>
        <tr><td class="m">tan α · cot α = 1</td><td>both defined</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Only the first is new</div>
      The second and third are the first, divided. That is worth knowing, because a formula you can
      rebuild in ten seconds never has to be trusted to memory — and in an examination it never has to
      be looked up.</div>`
    },
    {
      h: 'Deriving the second and third',
      html: `<p>Start from ${m('sin²α + cos²α = 1')} and divide every term by ${m('cos²α')}:</p>
      ${eq(m(f('sin²α', 'cos²α') + ' + ' + f('cos²α', 'cos²α') + ' = ' + f('1', 'cos²α')) + '  ⟹  ' + m('tan²α + 1 = ' + f('1', 'cos²α')), true)}
      <p>Divide instead by ${m('sin²α')} and the third relation appears the same way:</p>
      ${eq(m('1 + cot²α = ' + f('1', 'sin²α')), true)}
      <div class="warn"><span class="wl">Dividing by something that may be zero costs the identity a condition</span>
      The first relation holds everywhere. The second is meaningless when ${m('cos α = 0')} — at
      ${m('α = ' + f('π', '2'))}, ${m('tan α')} does not exist and neither does ${m(f('1', 'cos²α'))}.
      Writing the condition beside the formula is part of the formula.</div>`
    },
    {
      h: 'From one to all four',
      html: `<p>The standard question: one value, one quadrant, find the rest.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Using</th></tr></thead>
      <tbody>
        <tr><td>find the partner of ${m('sin')} or ${m('cos')}</td><td class="m">sin²α + cos²α = 1</td></tr>
        <tr><td>fix its sign</td><td>the quadrant</td></tr>
        <tr><td>form ${m('tan α')}</td><td class="m">${f('sin α', 'cos α')}</td></tr>
        <tr><td>form ${m('cot α')}</td><td class="m">${f('1', 'tan α')}</td></tr>
      </tbody></table></div>
      <p><b>Example.</b> ${m('tan α = ' + f('4', '3'))}, quadrant III. Then
      ${m(f('1', 'cos²α') + ' = 1 + ' + f('16', '9') + ' = ' + f('25', '9'))}, so
      ${m('cos²α = ' + f('9', '25'))} and, in quadrant III, ${m('cos α = −' + f('3', '5'))}. Hence
      ${m('sin α = tan α · cos α = −' + f('4', '5'))} and ${m('cot α = ' + f('3', '4'))}.</p>
      <div class="keybox"><div class="klabel">The 3–4–5 triangle in disguise</div>
      Almost every textbook question of this kind uses ${m('3, 4, 5')} or ${m('5, 12, 13')}. Recognising
      the triple lets you write the three magnitudes down at sight, and leaves the only real work —
      the signs — properly visible.</div>`
    },
    {
      h: 'Expressing one by another',
      html: `<p>Sometimes the question asks not for a number but for a formula.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Wanted</th><th>In terms of</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">cos α</td><td class="m">sin α</td><td class="m">±${sr('1 − sin²α')}</td></tr>
        <tr><td class="m">tan α</td><td class="m">cos α</td><td class="m">±${f(sr('1 − cos²α'), 'cos α')}</td></tr>
        <tr><td class="m">sin α</td><td class="m">tan α</td><td class="m">±${f('tan α', sr('1 + tan²α'))}</td></tr>
      </tbody></table></div>
      <p>The ${m('±')} is not laziness — without a quadrant it is the honest answer, and both branches
      really occur.</p>
      <div class="warn"><span class="wl">A simplification that loses a sign is wrong, not merely untidy</span>
      ${m(sr('sin²α') + ' = |sin α|')}, not ${m('sin α')}. In quadrant III the two differ by a minus
      sign, and a question that supplies a quadrant is usually testing exactly that.</div>`
    }
  ],
  examples: [
    {
      q: 'Given ' + m('tan α = ' + f('4', '3')) + ' in quadrant III, find the other three.',
      steps: [
        [m(f('1', 'cos²α') + ' = 1 + ' + f('16', '9') + ' = ' + f('25', '9')), ''],
        [m('cos²α = ' + f('9', '25') + ' ⇒ cos α = −' + f('3', '5')), 'Quadrant III.'],
        [m('sin α = tan α · cos α = ' + f('4', '3') + ' · (−' + f('3', '5') + ') = −' + f('4', '5')), ''],
        [m('cot α = ' + f('3', '4')), '']
      ],
      ans: m('sin = −' + f('4', '5') + ', cos = −' + f('3', '5') + ', cot = ' + f('3', '4'))
    },
    {
      q: 'Simplify ' + m(f('1', '1 + tan²α') + ' + ' + f('1', '1 + cot²α')) + '.',
      steps: [
        [m(f('1', '1 + tan²α') + ' = cos²α'), 'The second relation.'],
        [m(f('1', '1 + cot²α') + ' = sin²α'), 'The third.'],
        [m('cos²α + sin²α'), ''],
        [m('= 1'), 'For every ' + m('α') + ' where both exist.']
      ],
      ans: m('1')
    },
    {
      q: 'Given ' + m('sin α − cos α = ' + f('1', '2')) + ', find ' + m('sin α cos α') + '.',
      steps: [
        ['Square both sides.', ''],
        [m('sin²α − 2 sin α cos α + cos²α = ' + f('1', '4')), ''],
        [m('1 − 2 sin α cos α = ' + f('1', '4')), 'The first relation.'],
        [m('sin α cos α = ' + f('3', '8')), '']
      ],
      ans: m(f('3', '8'))
    }
  ],
  modelNote: 'Derive the second relation on the board by dividing the first — and then rub it out and ask a pupil to do it again, so that nobody leaves believing it must be memorised.',
  interactive: {
    type: 'circleAngles',
    title: 'One value fixes the rest',
    hint: 'Set the angle and watch all four readings move together.'
  },
  quiz: [
    { q: m('1 + tan²α') + ' equals:', a: [m(f('1', 'sin²α')), m(f('1', 'cos²α')), m('sin²α'), m('cos²α')], c: 1, why: 'Divide the first relation by ' + m('cos²α') + '.' },
    { q: m('tan α · cot α') + ' equals:', a: [m('0'), m('1'), m('sin α'), m('α')], c: 1, why: 'They are reciprocals.' },
    { q: m('1 + cot²α') + ' is undefined when:', a: [m('cos α = 0'), m('sin α = 0'), m('α = 0') + ' only', 'never'], c: 1, why: 'Zero denominator.' },
    { q: m(sr('sin²α')) + ' equals:', a: [m('sin α'), m('|sin α|'), m('−sin α'), m('sin²α')], c: 1, why: 'A root is non-negative.' },
    { q: m(f('1', '1 + tan²α')) + ' equals:', a: [m('sin²α'), m('cos²α'), m('tan²α'), m('1')], c: 1, why: 'The second relation, inverted.' },
    { q: 'To fix the sign of ' + m('cos α') + ' you need:', a: ['the identity', 'the quadrant', 'a calculator', 'nothing'], c: 1, why: 'The identity gives only the size.' }
  ],
  practice: {
    easy: [
      [m('sin²α + cos²α'), m('1')],
      [m('tan α · cot α'), m('1')],
      [m('1 + tan²α'), m(f('1', 'cos²α'))],
      [m('1 + cot²α'), m(f('1', 'sin²α'))],
      [m('tan α') + ' in terms of ' + m('sin, cos'), m(f('sin α', 'cos α'))],
      [m('sin α = ' + f('3', '5')) + ', I: ' + m('cos α'), m(f('4', '5'))],
      [m('cos α = ' + f('12', '13')) + ', IV: ' + m('sin α'), m('−' + f('5', '13'))]
    ],
    med: [
      [m('tan α = ' + f('4', '3')) + ', III: ' + m('cos α'), m('−' + f('3', '5'))],
      [m('tan α = ' + f('4', '3')) + ', III: ' + m('sin α'), m('−' + f('4', '5'))],
      [m('cot α = ' + f('5', '12')) + ', I: ' + m('sin α'), m(f('12', '13'))],
      ['Simplify ' + m('sin²α + sin²α tan²α'), m('tan²α')],
      ['Simplify ' + m(f('1', '1 + tan²α') + ' + ' + f('1', '1 + cot²α')), m('1')],
      ['Simplify ' + m('(1 + tan²α) cos²α'), m('1')],
      ['Simplify ' + m('cot α · sin α'), m('cos α')]
    ],
    hard: [
      [m('sin α − cos α = ' + f('1', '2')) + ': ' + m('sin α cos α'), m(f('3', '8'))],
      [m('sin α + cos α = ' + f('7', '5')) + ': ' + m('sin α cos α'), m(f('12', '25'))],
      ['Simplify ' + m('sin⁴α + cos⁴α + 2 sin²α cos²α'), m('1')],
      ['Simplify ' + m(f('1 − cos²α', 'sin α cos α')), m('tan α')],
      ['Prove ' + m('tan²α − sin²α = tan²α sin²α'), 'Factor ' + m('sin²α') + ' out of the left side'],
      [m('tan α + cot α = 3') + ': ' + m('sin α cos α'), m(f('1', '3'))],
      ['Express ' + m('sin α') + ' by ' + m('tan α'), m('±' + f('tan α', sr('1 + tan²α')))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Derive the second and third relations from the first at the top of the page before starting.',
  homework: [
    'Given ' + m('sin α = −' + f('8', '17')) + ' in quadrant III, find the other three.',
    'Given ' + m('cot α = −' + f('3', '4')) + ' in quadrant II, find the other three.',
    'Simplify ' + m('(1 + cot²α) sin²α') + '.',
    'Given ' + m('sin α + cos α = ' + f('1', '3')) + ', find ' + m('sin α cos α') + '.',
    'Prove ' + m('cot²α − cos²α = cot²α cos²α') + '.'
  ]
});

/* ============================== 27 ============================== */
G9_ALG.push({
  id: 'a9-27', stream: 'alg', grade: 9, quarter: 3, lessons: '51–52', hours: 2,
  title: 'Proving trigonometric identities',
  subtitle: 'Work on one side only, head for sines and cosines, and stop when the two sides agree.',
  uz: 'Algebra 9, §22', uzPage: 'pp. 120–125',
  cam: 'IGX 15.6', camPage: 'Core & Extended, pp. 334–338', wb: 'Exercise 15.6',
  objectives: [
    'Prove an identity by transforming one side into the other.',
    'Convert every function to sine and cosine as a default strategy.',
    'Use the difference of two squares and common denominators on trigonometric expressions.',
    'State the values of α for which an identity is not defined.'
  ],
  terms: [
    ['Identity', 'Ayniyat', 'Тождество'],
    ['Left-hand side', 'Chap tomon', 'Левая часть'],
    ['Right-hand side', 'O‘ng tomon', 'Правая часть'],
    ['Common denominator', 'Umumiy maxraj', 'Общий знаменатель'],
    ['To transform', 'Almashtirish', 'Преобразовать'],
    ['Permissible values', 'Joiz qiymatlar', 'Допустимые значения'],
    ['Equivalent', 'Teng kuchli', 'Равносильный'],
    ['Q.E.D.', 'Isbot tamom', 'Что и требовалось доказать']
  ],
  timing: [[11, 'What an identity asks'], [23, 'The default strategy'], [22, 'The standard moves'], [20, 'Permissible values'], [4, 'Homework']],
  sections: [
    {
      h: 'What an identity asks',
      html: `<p>An <b>identity</b> is a statement that two expressions are equal for every permissible
      value of the variable. Proving one is not solving one.</p>
      <div class="tablewrap"><table>
      <thead><tr><th></th><th>Equation</th><th>Identity</th></tr></thead>
      <tbody>
        <tr><td>true for</td><td>some ${m('α')}</td><td>all permissible ${m('α')}</td></tr>
        <tr><td>you must</td><td>find them</td><td>transform</td></tr>
        <tr><td>you may</td><td>operate on both sides</td><td>work on one side only</td></tr>
        <tr><td>the answer is</td><td>a set</td><td>a chain of equalities</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Never cross-multiply an identity you have not yet proved</span>
      Starting from what you are trying to prove and manipulating both sides assumes the very thing in
      question. Take one side, and travel to the other; that argument is valid in one direction and
      cannot be criticised.</div>`
    },
    {
      h: 'The default strategy',
      html: `<p>When nothing else suggests itself, do this:</p>
      <ol>
        <li>Choose the more complicated side — there is more to simplify there.</li>
        <li>Write every ${m('tan')} and ${m('cot')} as ${m(f('sin', 'cos'))} and ${m(f('cos', 'sin'))}.</li>
        <li>Put fractions over a common denominator.</li>
        <li>Look for ${m('sin²α + cos²α')} and replace it by ${m('1')}.</li>
        <li>Cancel, and compare with the other side.</li>
      </ol>
      <p><b>Example.</b> Prove ${m('tan α + cot α = ' + f('1', 'sin α cos α'))}.</p>
      ${eq(m('tan α + cot α = ' + f('sin α', 'cos α') + ' + ' + f('cos α', 'sin α') + ' = ' + f('sin²α + cos²α', 'sin α cos α') + ' = ' + f('1', 'sin α cos α')), true)}
      <div class="keybox"><div class="klabel">Sines and cosines are the common language</div>
      Four functions can be combined in many ways; two can be combined in few. Converting everything to
      ${m('sin')} and ${m('cos')} removes the choices, and the proof usually falls out in two lines.</div>`
    },
    {
      h: 'The standard moves',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Seeing</th><th>Do</th><th>Because</th></tr></thead>
      <tbody>
        <tr><td class="m">1 − sin²α</td><td>write ${m('cos²α')}</td><td>the first relation</td></tr>
        <tr><td class="m">1 − cos⁴α</td><td>factor as ${m('(1 − cos²α)(1 + cos²α)')}</td><td>difference of squares</td></tr>
        <tr><td class="m">${f('1', '1 − sin α')}</td><td>multiply by ${m(f('1 + sin α', '1 + sin α'))}</td><td>it creates ${m('cos²α')}</td></tr>
        <tr><td>two fractions</td><td>common denominator</td><td>the numerator often becomes ${m('1')}</td></tr>
        <tr><td class="m">tan α sin α + cos α</td><td>convert and combine</td><td>it equals ${m(f('1', 'cos α'))}</td></tr>
      </tbody></table></div>
      <p>The third row is worth practising on its own: multiplying by the conjugate is exactly the
      rationalising trick from Chapter I, applied to a trigonometric denominator.</p>`
    },
    {
      h: 'Permissible values',
      html: `<p>An identity is only claimed where both sides exist. Naming those values is part of the
      statement.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Identity</th><th>Excluded</th></tr></thead>
      <tbody>
        <tr><td class="m">tan α + cot α = ${f('1', 'sin α cos α')}</td><td class="m">α = ${f('πk', '2')}</td></tr>
        <tr><td class="m">${f('1 − cos²α', 'sin α')} = sin α</td><td class="m">α = πk</td></tr>
        <tr><td class="m">1 + tan²α = ${f('1', 'cos²α')}</td><td class="m">α = ${f('π', '2')} + πk</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A cancelled denominator does not remove its restriction</span>
      ${m(f('1 − cos²α', 'sin α'))} simplifies to ${m('sin α')}, which is defined everywhere — but the
      original expression is not, and the identity therefore still excludes ${m('α = πk')}. The
      restriction belongs to the statement, not to the final form.</div>`
    }
  ],
  examples: [
    {
      q: 'Prove ' + m('tan α + cot α = ' + f('1', 'sin α cos α')) + '.',
      steps: [
        ['Convert: ' + m(f('sin α', 'cos α') + ' + ' + f('cos α', 'sin α')) + '.', 'Left side.'],
        ['Common denominator ' + m('sin α cos α') + '.', ''],
        ['Numerator ' + m('sin²α + cos²α = 1') + '.', ''],
        [m('= ' + f('1', 'sin α cos α')) + ' — Q.E.D., for ' + m('α ≠ ' + f('πk', '2')) + '.', '']
      ],
      ans: 'Proved'
    },
    {
      q: 'Prove ' + m(f('1', '1 − sin α') + ' + ' + f('1', '1 + sin α') + ' = ' + f('2', 'cos²α')) + '.',
      steps: [
        ['Common denominator ' + m('(1 − sin α)(1 + sin α)') + '.', ''],
        ['Numerator: ' + m('(1 + sin α) + (1 − sin α) = 2') + '.', ''],
        ['Denominator: ' + m('1 − sin²α = cos²α') + '.', 'Difference of squares.'],
        [m('= ' + f('2', 'cos²α')) + ' — Q.E.D., for ' + m('cos α ≠ 0') + '.', '']
      ],
      ans: 'Proved'
    },
    {
      q: 'Prove ' + m('sin⁴α − cos⁴α = sin²α − cos²α') + '.',
      steps: [
        ['Difference of two squares on the left.', ''],
        [m('(sin²α − cos²α)(sin²α + cos²α)'), ''],
        ['The second bracket is ' + m('1') + '.', ''],
        [m('= sin²α − cos²α') + ' — Q.E.D., for every ' + m('α') + '.', '']
      ],
      ans: 'Proved'
    }
  ],
  modelNote: 'Prove one identity correctly and then “prove” it again by cross-multiplying from the statement itself; ask the class which argument they would accept, and why.',
  interactive: {
    type: 'substitute',
    title: 'Test, then prove',
    hint: 'A value that works is evidence; the algebra is the proof.'
  },
  quiz: [
    { q: 'To prove an identity you work:', a: ['on both sides', 'on one side', 'by cross-multiplying', 'by testing values'], c: 1, why: 'A one-way chain is valid.' },
    { q: 'The default first move is:', a: ['square both sides', 'convert to ' + m('sin') + ' and ' + m('cos'), 'differentiate', 'substitute ' + m('α = 0')], c: 1, why: 'Two functions, fewer choices.' },
    { q: m('1 − sin²α') + ' is:', a: [m('cos²α'), m('tan²α'), m('cot²α'), m('1')], c: 0, why: 'The first relation.' },
    { q: m('tan α + cot α') + ' equals:', a: [m('1'), m(f('1', 'sin α cos α')), m('sin α cos α'), m('2')], c: 1, why: 'Common denominator.' },
    { q: m(f('1', '1 − sin α')) + ' is multiplied by the conjugate to create:', a: [m('sin²α'), m('cos²α'), m('1'), m('tan α')], c: 1, why: m('1 − sin²α') + '.' },
    { q: 'A cancelled denominator:', a: ['removes its restriction', 'keeps its restriction', 'creates a new one', 'is ignored'], c: 1, why: 'The domain is fixed by the original.' }
  ],
  practice: {
    easy: [
      ['Simplify ' + m('1 − sin²α'), m('cos²α')],
      ['Simplify ' + m('1 − cos²α'), m('sin²α')],
      ['Simplify ' + m('cot α sin α'), m('cos α')],
      ['Simplify ' + m('tan α cos α'), m('sin α')],
      ['Simplify ' + m('sin²α + cos²α + 1'), m('2')],
      ['Simplify ' + m(f('sin α', 'cos α') + ' cot α'), m('1')],
      ['Simplify ' + m('(1 − sin α)(1 + sin α)'), m('cos²α')]
    ],
    med: [
      ['Prove ' + m('tan α + cot α = ' + f('1', 'sin α cos α')), 'Common denominator'],
      ['Prove ' + m('sin⁴α − cos⁴α = sin²α − cos²α'), 'Difference of squares'],
      ['Prove ' + m(f('1', '1 − sin α') + ' + ' + f('1', '1 + sin α') + ' = ' + f('2', 'cos²α')), 'Conjugate denominator'],
      ['Simplify ' + m('tan α sin α + cos α'), m(f('1', 'cos α'))],
      ['Simplify ' + m(f('1 − cos²α', 'sin α cos α')), m('tan α')],
      ['Prove ' + m('(1 + tan²α) cos²α = 1'), 'The second relation'],
      ['Simplify ' + m('sin²α cot²α + sin²α'), m('1')]
    ],
    hard: [
      ['Prove ' + m('tan²α − sin²α = tan²α sin²α'), 'Factor ' + m('sin²α')],
      ['Prove ' + m(f('cos α', '1 − sin α') + ' = ' + f('1 + sin α', 'cos α')), 'Cross-check by the conjugate'],
      ['Prove ' + m('sin⁶α + cos⁶α = 1 − 3 sin²α cos²α'), 'Sum of cubes, then the first relation'],
      ['Prove ' + m(f('1 + cos α', 'sin α') + ' + ' + f('sin α', '1 + cos α') + ' = ' + f('2', 'sin α')), 'Common denominator'],
      ['Simplify ' + m('(tan α + cot α) sin α cos α'), m('1')],
      ['Prove ' + m(f('tan α', '1 + tan²α') + ' = sin α cos α'), 'Use the second relation'],
      ['Excluded values of ' + m('tan α + cot α = ' + f('1', 'sin α cos α')), m('α = ' + f('πk', '2'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'End every proof with the values of ' + m('α') + ' that had to be excluded.',
  homework: [
    'Prove ' + m('(1 + cot²α) sin²α = 1') + '.',
    'Prove ' + m(f('1', '1 − cos α') + ' + ' + f('1', '1 + cos α') + ' = ' + f('2', 'sin²α')) + '.',
    'Prove ' + m('cot²α − cos²α = cot²α cos²α') + '.',
    'Simplify ' + m('cot α cos α + sin α') + '.',
    'Prove ' + m('sin⁴α + cos⁴α = 1 − 2 sin²α cos²α') + '.'
  ]
});

/* ============================== 28 ============================== */
G9_ALG.push({
  id: 'a9-28', stream: 'alg', grade: 9, quarter: 3, lessons: '53–54', hours: 2,
  title: 'The functions of −α, and periodicity',
  subtitle: 'Turning backwards reflects the point in the x-axis — and that one picture gives four formulae.',
  uz: 'Algebra 9, §23', uzPage: 'pp. 126–130',
  cam: 'IGX 15.7', camPage: 'Core & Extended, pp. 339–343', wb: 'Exercise 15.7',
  objectives: [
    'Derive sin(−α) = −sin α and cos(−α) = cos α from the unit circle.',
    'Classify the four functions as even or odd.',
    'State the period of each function and use it to reduce an angle.',
    'Evaluate a function at a large or negative angle in one line.'
  ],
  terms: [
    ['Even function', 'Juft funksiya', 'Чётная функция'],
    ['Odd function', 'Toq funksiya', 'Нечётная функция'],
    ['Reflection', 'Simmetriya', 'Отражение'],
    ['Period', 'Davr', 'Период'],
    ['Periodic', 'Davriy', 'Периодический'],
    ['Least period', 'Eng kichik davr', 'Наименьший период'],
    ['Reduce', 'Keltirish', 'Привести'],
    ['Symmetric', 'Simmetrik', 'Симметричный']
  ],
  timing: [[13, 'Turning the other way'], [20, 'Even and odd'], [23, 'Period'], [20, 'Reducing an angle'], [4, 'Homework']],
  sections: [
    {
      h: 'Turning the other way',
      html: `<p>Turn ${m('P(1, 0)')} through ${m('α')} to reach ${m('(x, y)')}. Turning through
      ${m('−α')} — the same amount, clockwise — reaches ${m('(x, −y)')}: the mirror image in the
      ${m('x')}-axis.</p>
      {{fig:trigCircle:α and −α land at points that are mirror images in the horizontal axis.}}
      <p>The abscissa is unchanged and the ordinate has changed sign, so:</p>
      ${eq(m('cos(−α) = cos α') + '     ' + m('sin(−α) = −sin α'), true)}
      <p>Dividing gives the other two: ${m('tan(−α) = −tan α')} and ${m('cot(−α) = −cot α')}.</p>
      <div class="keybox"><div class="klabel">One picture, four formulae</div>
      There is nothing here to memorise separately. Reflecting a point in the ${m('x')}-axis keeps
      ${m('x')} and flips ${m('y')} — and cosine <b>is</b> ${m('x')}, sine <b>is</b> ${m('y')}. Anyone
      who can draw the reflection can rebuild all four in seconds.</div>`
    },
    {
      h: 'Even and odd',
      html: `<p>This is exactly the parity of Chapter I, applied to the new functions.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Function</th><th class="m">f(−α)</th><th>Parity</th><th>Graph symmetric about</th></tr></thead>
      <tbody>
        <tr><td class="m">cos α</td><td class="m">cos α</td><td>even</td><td>the ${m('y')}-axis</td></tr>
        <tr><td class="m">sin α</td><td class="m">−sin α</td><td>odd</td><td>the origin</td></tr>
        <tr><td class="m">tan α</td><td class="m">−tan α</td><td>odd</td><td>the origin</td></tr>
        <tr><td class="m">cot α</td><td class="m">−cot α</td><td>odd</td><td>the origin</td></tr>
      </tbody></table></div>
      {{fig:sinCosGraph:The cosine curve is symmetric in the vertical axis; the sine curve is symmetric about the origin.}}
      <p>Cosine is the only even one of the four, which is why it appears so often as the “safe” function
      in symmetric problems.</p>`
    },
    {
      h: 'Period',
      html: `<p>A full turn returns the point to where it started, so adding ${m('2π')} changes nothing:</p>
      ${eq(m('sin(α + 2πk) = sin α') + '     ' + m('cos(α + 2πk) = cos α') + ', ' + m('k ∈ ℤ'), true)}
      <p>Tangent and cotangent repeat sooner. A turn of ${m('π')} sends ${m('(x, y)')} to
      ${m('(−x, −y)')}, and a quotient of two numbers is unchanged when both change sign:</p>
      ${eq(m('tan(α + πk) = tan α') + '     ' + m('cot(α + πk) = cot α'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Function</th><th>Least period</th></tr></thead>
      <tbody>
        <tr><td class="m">sin α, cos α</td><td class="m">2π</td></tr>
        <tr><td class="m">tan α, cot α</td><td class="m">π</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('4π')} is a period of sine; it is not <i>the</i> period</span>
      Any multiple of a period is again a period. “The period” always means the <b>least</b> positive
      one, and for sine that is ${m('2π')}.</div>`
    },
    {
      h: 'Reducing an angle',
      html: `<p>Parity and period together evaluate any angle at all.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Step</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td class="m">sin(−${f('π', '6')})</td><td>odd</td><td class="m">−${f('1', '2')}</td></tr>
        <tr><td class="m">cos(−${f('π', '3')})</td><td>even</td><td class="m">${f('1', '2')}</td></tr>
        <tr><td class="m">sin ${f('13π', '6')}</td><td class="m">−2π</td><td class="m">${f('1', '2')}</td></tr>
        <tr><td class="m">tan ${f('9π', '4')}</td><td class="m">−2π</td><td class="m">1</td></tr>
        <tr><td class="m">cos 750°</td><td class="m">−720°</td><td class="m">${f(sr('3'), '2')}</td></tr>
      </tbody></table></div>
      <p>The order is always the same: strip whole periods first, then use parity if what remains is
      negative.</p>
      <div class="warn"><span class="wl">Strip ${m('2π')} from sine and cosine, but ${m('π')} is enough for tangent</span>
      ${m('tan ' + f('9π', '4'))} can be reduced by ${m('2π')} to ${m('tan ' + f('π', '4'))}, but also
      by ${m('π')} twice. Using the wrong period for the wrong function is the commonest error in this
      lesson.</div>`
    }
  ],
  examples: [
    {
      q: 'Evaluate ' + m('sin(−' + f('π', '6') + ') + cos(−' + f('π', '3') + ')') + '.',
      steps: [
        ['Sine is odd: ' + m('sin(−' + f('π', '6') + ') = −' + f('1', '2')) + '.', ''],
        ['Cosine is even: ' + m('cos(−' + f('π', '3') + ') = ' + f('1', '2')) + '.', ''],
        [m('−' + f('1', '2') + ' + ' + f('1', '2')), ''],
        [m('= 0'), '']
      ],
      ans: m('0')
    },
    {
      q: 'Evaluate ' + m('cos 750°') + '.',
      steps: [
        [m('750 − 720 = 30'), 'Two full turns.'],
        [m('cos 750° = cos 30°'), ''],
        ['Read the table.', ''],
        [m('= ' + f(sr('3'), '2')), '']
      ],
      ans: m(f(sr('3'), '2'))
    },
    {
      q: 'Simplify ' + m(f('sin(−α) + cos(−α)', 'cos α')) + '.',
      steps: [
        ['Numerator: ' + m('−sin α + cos α') + '.', 'Odd, then even.'],
        [m('= ' + f('cos α − sin α', 'cos α')), ''],
        ['Split the fraction.', ''],
        [m('= 1 − tan α'), '']
      ],
      ans: m('1 − tan α')
    }
  ],
  modelNote: 'Fold a sheet with the unit circle drawn on it along the x-axis; the two angles land on each other and the four parity formulae become one physical fact.',
  interactive: {
    type: 'circleAngles',
    title: 'α and −α together',
    hint: 'Watch which of the two coordinates changes sign.'
  },
  quiz: [
    { q: m('cos(−α)') + ' equals:', a: [m('cos α'), m('−cos α'), m('sin α'), m('−sin α')], c: 0, why: 'The abscissa is unchanged.' },
    { q: m('sin(−α)') + ' equals:', a: [m('sin α'), m('−sin α'), m('cos α'), m('0')], c: 1, why: 'The ordinate flips.' },
    { q: 'The only even function of the four is:', a: [m('sin'), m('cos'), m('tan'), m('cot')], c: 1, why: 'It is the ' + m('x') + '-coordinate.' },
    { q: 'The least period of ' + m('tan α') + ':', a: [m(f('π', '2')), m('π'), m('2π'), m('4π')], c: 1, why: 'A half turn flips both signs.' },
    { q: m('sin ' + f('13π', '6')) + ' equals:', a: [m(f('1', '2')), m('−' + f('1', '2')), m(f(sr('3'), '2')), m('1')], c: 0, why: 'Strip ' + m('2π') + '.' },
    { q: m('4π') + ' for sine is:', a: ['the period', 'a period', 'not a period', 'the least period'], c: 1, why: 'Any multiple works; the least is ' + m('2π') + '.' }
  ],
  practice: {
    easy: [
      [m('sin(−' + f('π', '6') + ')'), m('−' + f('1', '2'))],
      [m('cos(−' + f('π', '3') + ')'), m(f('1', '2'))],
      [m('tan(−' + f('π', '4') + ')'), m('−1')],
      [m('cos(−π)'), m('−1')],
      [m('sin(−' + f('π', '2') + ')'), m('−1')],
      ['Period of ' + m('cos α'), m('2π')],
      ['Period of ' + m('cot α'), m('π')]
    ],
    med: [
      [m('sin ' + f('13π', '6')), m(f('1', '2'))],
      [m('cos ' + f('9π', '4')), m(f(sr('2'), '2'))],
      [m('tan ' + f('9π', '4')), m('1')],
      [m('cos 750°'), m(f(sr('3'), '2'))],
      [m('sin(−390°)'), m('−' + f('1', '2'))],
      ['Simplify ' + m('sin(−α) cos(−α)'), m('−sin α cos α')],
      ['Simplify ' + m(f('sin(−α) + cos(−α)', 'cos α')), m('1 − tan α')]
    ],
    hard: [
      ['Simplify ' + m('sin(−α) + sin(α + 2π)'), m('0')],
      ['Simplify ' + m('tan(−α) cot(α + π)'), m('−1')],
      [m('cos(−' + f('17π', '3') + ')'), m(f('1', '2'))],
      [m('sin(−1110°)'), m('−' + f('1', '2'))],
      ['Is ' + m('y = sin α cos α') + ' even or odd?', 'Odd'],
      ['Is ' + m('y = sin²α') + ' even or odd?', 'Even'],
      ['Least period of ' + m('y = sin 2α'), m('π')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Strip the whole periods first; only then use parity.',
  homework: [
    'Evaluate ' + m('sin(−' + f('π', '3') + ') + cos(−' + f('π', '6') + ')') + '.',
    'Evaluate ' + m('cos 840°') + ' and ' + m('tan 405°') + '.',
    'Simplify ' + m(f('cos(−α) − sin(−α)', 'sin α')) + '.',
    'Say whether ' + m('y = cos α tan α') + ' is even or odd, and prove it.',
    'Give the least period of ' + m('y = cos 3α') + '.'
  ]
});

/* ============================== 29 ============================== */
G9_ALG.push({
  id: 'a9-29', stream: 'alg', grade: 9, quarter: 3, lessons: '55–56', hours: 2,
  title: 'The addition formulae for sine and cosine',
  subtitle: 'The formulae that decide, once and for all, that sin(α + β) is not sin α + sin β.',
  uz: 'Algebra 9, §24', uzPage: 'pp. 131–137',
  cam: 'IGX 15.8', camPage: 'Core & Extended, pp. 344–350', wb: 'Exercise 15.8',
  objectives: [
    'State the four addition formulae for sine and cosine accurately.',
    'Use them to find exact values at 15°, 75° and similar angles.',
    'Recognise the formulae read backwards, in order to compress an expression.',
    'Show by a counter-example that sine is not additive.'
  ],
  terms: [
    ['Addition formula', 'Qo‘shish formulasi', 'Формула сложения'],
    ['Sum of angles', 'Burchaklar yig‘indisi', 'Сумма углов'],
    ['Difference of angles', 'Burchaklar ayirmasi', 'Разность углов'],
    ['Expand', 'Yoyish', 'Раскрыть'],
    ['Compress', 'Yig‘ish', 'Свернуть'],
    ['Counter-example', 'Qarama-qarshi misol', 'Контрпример'],
    ['Exact value', 'Aniq qiymat', 'Точное значение'],
    ['Substitution', 'O‘rniga qo‘yish', 'Подстановка']
  ],
  timing: [[11, 'A warning first'], [23, 'The four formulae'], [22, 'New exact values'], [20, 'Reading them backwards'], [4, 'Homework']],
  sections: [
    {
      h: 'A warning first',
      html: `<p>Before the formulae, the mistake they exist to prevent.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Claim</th><th>Test at ${m('α = β = ' + f('π', '2'))}</th><th>Verdict</th></tr></thead>
      <tbody>
        <tr><td class="m">sin(α + β) = sin α + sin β</td><td class="m">sin π = 0</td><td class="m">1 + 1 = 2 ✗</td></tr>
        <tr><td class="m">cos(α + β) = cos α + cos β</td><td class="m">cos π = −1</td><td class="m">0 + 0 = 0 ✗</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Sine is a function, not a multiplier</span>
      ${m('sin')} written in front of a bracket is not a coefficient and cannot be distributed over the
      bracket. One substitution disposes of the idea permanently — and it is worth doing once, by hand,
      rather than being told.</div>`
    },
    {
      h: 'The four formulae',
      html: `${eq(m('sin(α + β) = sin α cos β + cos α sin β'), true)}
      ${eq(m('sin(α − β) = sin α cos β − cos α sin β'), true)}
      ${eq(m('cos(α + β) = cos α cos β − sin α sin β'), true)}
      ${eq(m('cos(α − β) = cos α cos β + sin α sin β'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Pattern</th><th>Sine</th><th>Cosine</th></tr></thead>
      <tbody>
        <tr><td>the products</td><td>mixed: ${m('sc')} and ${m('cs')}</td><td>alike: ${m('cc')} and ${m('ss')}</td></tr>
        <tr><td>the sign</td><td>the same as in the bracket</td><td>the opposite</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Two sentences instead of four formulae</div>
      <b>Sine mixes and keeps the sign; cosine matches and flips it.</b> Learn those two sentences and
      all four formulae can be written out correctly, in either order, without hesitation.</div>`
    },
    {
      h: 'New exact values',
      html: `<p>Any angle that is a sum or difference of two known angles now has an exact value.</p>
      <p><b>Example.</b> ${m('15° = 45° − 30°')}, so</p>
      ${eq(m('sin 15° = sin 45° cos 30° − cos 45° sin 30° = ' + f(sr('2'), '2') + ' · ' + f(sr('3'), '2') + ' − ' + f(sr('2'), '2') + ' · ' + f('1', '2') + ' = ' + f(sr('6') + ' − ' + sr('2'), '4')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Angle</th><th>As</th><th class="m">sin</th><th class="m">cos</th></tr></thead>
      <tbody>
        <tr><td class="m">15°</td><td class="m">45° − 30°</td><td class="m">${f(sr('6') + ' − ' + sr('2'), '4')}</td><td class="m">${f(sr('6') + ' + ' + sr('2'), '4')}</td></tr>
        <tr><td class="m">75°</td><td class="m">45° + 30°</td><td class="m">${f(sr('6') + ' + ' + sr('2'), '4')}</td><td class="m">${f(sr('6') + ' − ' + sr('2'), '4')}</td></tr>
      </tbody></table></div>
      <p>Notice that ${m('sin 75° = cos 15°')}: the two angles add to ${m('90°')}, and complementary
      angles always swap sine and cosine.</p>`
    },
    {
      h: 'Reading them backwards',
      html: `<p>Half the examination questions on this topic use the formulae from right to left.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Seeing</th><th>Write</th></tr></thead>
      <tbody>
        <tr><td class="m">sin 40° cos 20° + cos 40° sin 20°</td><td class="m">sin 60° = ${f(sr('3'), '2')}</td></tr>
        <tr><td class="m">cos 70° cos 10° + sin 70° sin 10°</td><td class="m">cos 60° = ${f('1', '2')}</td></tr>
        <tr><td class="m">sin 3α cos α − cos 3α sin α</td><td class="m">sin 2α</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Look for the pattern before you compute</div>
      An expression with four trigonometric factors and one plus sign is almost never meant to be
      evaluated term by term. Match it against the four formulae first; the whole question usually
      collapses to a single known value.</div>`
    }
  ],
  examples: [
    {
      q: 'Find ' + m('sin 15°') + ' exactly.',
      steps: [
        [m('15° = 45° − 30°'), ''],
        [m('sin 45° cos 30° − cos 45° sin 30°'), 'Mix, keep the sign.'],
        [m(f(sr('2'), '2') + ' · ' + f(sr('3'), '2') + ' − ' + f(sr('2'), '2') + ' · ' + f('1', '2')), ''],
        [m('= ' + f(sr('6') + ' − ' + sr('2'), '4')), '']
      ],
      ans: m(f(sr('6') + ' − ' + sr('2'), '4'))
    },
    {
      q: 'Simplify ' + m('sin 40° cos 20° + cos 40° sin 20°') + '.',
      steps: [
        ['Mixed products, plus sign — this is ' + m('sin(α + β)') + '.', ''],
        [m('= sin(40° + 20°)'), ''],
        [m('= sin 60°'), ''],
        [m('= ' + f(sr('3'), '2')), '']
      ],
      ans: m(f(sr('3'), '2'))
    },
    {
      q: 'Given ' + m('sin α = ' + f('3', '5')) + ' (I) and ' + m('cos β = ' + f('5', '13')) + ' (I), find ' + m('sin(α + β)') + '.',
      steps: [
        [m('cos α = ' + f('4', '5')) + ', ' + m('sin β = ' + f('12', '13')) + '.', 'Both in quadrant I.'],
        [m('sin α cos β + cos α sin β'), ''],
        [m(f('3', '5') + ' · ' + f('5', '13') + ' + ' + f('4', '5') + ' · ' + f('12', '13')), ''],
        [m('= ' + f('15', '65') + ' + ' + f('48', '65') + ' = ' + f('63', '65')), '']
      ],
      ans: m(f('63', '65'))
    }
  ],
  modelNote: 'Open the lesson by asking the class to evaluate sin 90° two ways — directly, and as sin 45° + sin 45°; the contradiction motivates everything that follows.',
  interactive: {
    type: 'circleAngles',
    title: 'Adding two angles',
    hint: 'The turn of α + β is not the sum of the two heights.'
  },
  quiz: [
    { q: m('sin(α + β)') + ' equals:', a: [m('sin α + sin β'), m('sin α cos β + cos α sin β'), m('cos α cos β − sin α sin β'), m('2 sin α sin β')], c: 1, why: 'Mix, keep the sign.' },
    { q: m('cos(α + β)') + ' equals:', a: [m('cos α cos β + sin α sin β'), m('cos α cos β − sin α sin β'), m('cos α + cos β'), m('sin α cos β')], c: 1, why: 'Match, flip the sign.' },
    { q: m('cos(α − β)') + ' equals:', a: [m('cc − ss'), m('cc + ss'), m('sc − cs'), m('sc + cs')], c: 1, why: 'Match, flip: minus becomes plus.' },
    { q: m('sin 40° cos 20° + cos 40° sin 20°') + ' equals:', a: [m('sin 20°'), m('sin 60°'), m('cos 60°'), m('sin 800°')], c: 1, why: 'Read the formula backwards.' },
    { q: m('sin 15°') + ' equals:', a: [m(f(sr('6') + ' − ' + sr('2'), '4')), m(f(sr('6') + ' + ' + sr('2'), '4')), m(f('1', '4')), m(f(sr('3'), '2'))], c: 0, why: m('45° − 30°') + '.' },
    { q: m('sin(α + β) = sin α + sin β') + ' is:', a: ['always true', 'never true', 'true for some ' + m('α, β'), 'an identity'], c: 2, why: 'True at ' + m('α = β = 0') + ', false in general.' }
  ],
  practice: {
    easy: [
      [m('sin(α + β)'), m('sin α cos β + cos α sin β')],
      [m('cos(α + β)'), m('cos α cos β − sin α sin β')],
      [m('sin(α − β)'), m('sin α cos β − cos α sin β')],
      [m('cos(α − β)'), m('cos α cos β + sin α sin β')],
      [m('sin 40° cos 20° + cos 40° sin 20°'), m(f(sr('3'), '2'))],
      [m('cos 70° cos 10° + sin 70° sin 10°'), m(f('1', '2'))],
      ['Is ' + m('sin(α + β) = sin α + sin β') + '?', 'No']
    ],
    med: [
      [m('sin 15°'), m(f(sr('6') + ' − ' + sr('2'), '4'))],
      [m('cos 15°'), m(f(sr('6') + ' + ' + sr('2'), '4'))],
      [m('sin 75°'), m(f(sr('6') + ' + ' + sr('2'), '4'))],
      [m('cos 75°'), m(f(sr('6') + ' − ' + sr('2'), '4'))],
      ['Simplify ' + m('sin 3α cos α − cos 3α sin α'), m('sin 2α')],
      ['Simplify ' + m('cos 5α cos 3α + sin 5α sin 3α'), m('cos 2α')],
      [m('sin α = ' + f('3', '5')) + ', ' + m('cos β = ' + f('5', '13')) + ', both I: ' + m('sin(α + β)'), m(f('63', '65'))]
    ],
    hard: [
      [m('sin α = ' + f('3', '5')) + ', ' + m('cos β = ' + f('5', '13')) + ', both I: ' + m('cos(α + β)'), m('−' + f('16', '65'))],
      [m('sin α = ' + f('4', '5')) + ' (II), ' + m('cos β = ' + f('3', '5')) + ' (I): ' + m('sin(α − β)'), m(f('24', '25'))],
      ['Prove ' + m('sin(α + β) sin(α − β) = sin²α − sin²β'), 'Expand both brackets'],
      ['Simplify ' + m('cos(60° + α) + cos(60° − α)'), m('cos α')],
      ['Simplify ' + m('sin(45° + α) − sin(45° − α)'), m(sr('2') + ' sin α')],
      [m('tan 15°') + ' from ' + m('sin 15°') + ' and ' + m('cos 15°'), m('2 − ' + sr('3'))],
      ['Prove ' + m('cos(α + β) cos(α − β) = cos²α − sin²β'), 'Expand both brackets']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write out the formula you are using before substituting; the mark is for the formula.',
  homework: [
    'Find ' + m('cos 15°') + ' and ' + m('sin 75°') + ' exactly.',
    'Simplify ' + m('sin 50° cos 10° − cos 50° sin 10°') + '.',
    'Given ' + m('sin α = ' + f('8', '17')) + ' (I) and ' + m('cos β = ' + f('4', '5')) + ' (I), find ' + m('cos(α − β)') + '.',
    'Prove ' + m('sin(α + β) + sin(α − β) = 2 sin α cos β') + '.',
    'Show that ' + m('cos(α + β) = cos α + cos β') + ' is false, with one substitution.'
  ]
});

/* ============================== 30 ============================== */
G9_ALG.push({
  id: 'a9-30', stream: 'alg', grade: 9, quarter: 3, lessons: '57–58', hours: 2,
  title: 'The tangent of a sum and of a difference',
  subtitle: 'Divide one addition formula by the other and the tangent formula falls out.',
  uz: 'Algebra 9, §25', uzPage: 'pp. 138–142',
  cam: 'IGX 15.9', camPage: 'Core & Extended, pp. 351–355', wb: 'Exercise 15.9',
  objectives: [
    'Derive tan(α ± β) from the sine and cosine addition formulae.',
    'State the values of α and β for which the formula is not defined.',
    'Find exact values such as tan 15° and tan 75°.',
    'Use the formula backwards to compress an expression.'
  ],
  terms: [
    ['Tangent of a sum', 'Yig‘indi tangensi', 'Тангенс суммы'],
    ['Derivation', 'Keltirib chiqarish', 'Вывод'],
    ['Denominator', 'Maxraj', 'Знаменатель'],
    ['Divide through', 'Bo‘lib chiqish', 'Разделить почленно'],
    ['Condition', 'Shart', 'Условие'],
    ['Undefined', 'Aniqlanmagan', 'Не определён'],
    ['Rationalise', 'Irratsionallikdan qutulish', 'Избавиться от иррациональности'],
    ['Compress', 'Yig‘ish', 'Свернуть']
  ],
  timing: [[16, 'The derivation'], [18, 'The conditions'], [22, 'Exact values'], [20, 'Backwards'], [4, 'Homework']],
  sections: [
    {
      h: 'The derivation',
      html: `<p>Start from the definition and use the two formulae already proved:</p>
      ${eq(m('tan(α + β) = ' + f('sin(α + β)', 'cos(α + β)') + ' = ' + f('sin α cos β + cos α sin β', 'cos α cos β − sin α sin β')), true)}
      <p>Now divide numerator and denominator by ${m('cos α cos β')}. Every term becomes a tangent:</p>
      ${eq(m('tan(α + β) = ' + f('tan α + tan β', '1 − tan α tan β')), true)}
      ${eq(m('tan(α − β) = ' + f('tan α − tan β', '1 + tan α tan β')), true)}
      <div class="keybox"><div class="klabel">The signs are crossed</div>
      A plus in the bracket puts a plus on top and a <b>minus</b> underneath. Getting this the wrong way
      round is the one error this formula is prone to, and checking it against
      ${m('tan(45° + 45°)')} — which must be undefined — catches it instantly.</div>`
    },
    {
      h: 'The conditions',
      html: `<p>The derivation divided by ${m('cos α cos β')}, so the formula carries conditions the
      original sine and cosine formulae did not.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Requirement</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td class="m">tan α, tan β</td><td>must exist: ${m('α, β ≠ ' + f('π', '2') + ' + πk')}</td></tr>
        <tr><td class="m">tan(α + β)</td><td>must exist: ${m('α + β ≠ ' + f('π', '2') + ' + πk')}</td></tr>
        <tr><td class="m">1 − tan α tan β ≠ 0</td><td>it is a denominator</td></tr>
      </tbody></table></div>
      <p>The last two are the same condition seen from two sides: ${m('tan α tan β = 1')} happens exactly
      when ${m('α + β')} is an odd multiple of ${m(f('π', '2'))}.</p>
      <div class="warn"><span class="wl">${m('tan 90°')} is not “infinity”</span>
      It does not exist. When a calculation produces ${m('1 − tan α tan β = 0')} the correct statement
      is that ${m('tan(α + β)')} is undefined — and often the intended answer is precisely that.</div>`
    },
    {
      h: 'Exact values',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Angle</th><th>As</th><th>Working</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td class="m">tan 15°</td><td class="m">45° − 30°</td><td class="m">${f('1 − ' + f(sr('3'), '3'), '1 + ' + f(sr('3'), '3'))}</td><td class="m">2 − ${sr('3')}</td></tr>
        <tr><td class="m">tan 75°</td><td class="m">45° + 30°</td><td class="m">${f('1 + ' + f(sr('3'), '3'), '1 − ' + f(sr('3'), '3'))}</td><td class="m">2 + ${sr('3')}</td></tr>
        <tr><td class="m">tan 105°</td><td class="m">60° + 45°</td><td class="m">${f(sr('3') + ' + 1', '1 − ' + sr('3'))}</td><td class="m">−(2 + ${sr('3')})</td></tr>
      </tbody></table></div>
      <p>Each answer needs rationalising at the end — multiply above and below by the conjugate of the
      denominator, exactly as in Chapter I.</p>
      <p>Notice that ${m('tan 15° · tan 75° = 1')}: the angles are complementary, so the tangents are
      reciprocals.</p>`
    },
    {
      h: 'Backwards',
      html: `<p>An expression of the shape ${m(f('a + b', '1 − ab'))} where ${m('a')} and ${m('b')} are
      tangents is a compressed sum of angles.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Seeing</th><th>Write</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('tan 25° + tan 20°', '1 − tan 25° tan 20°')}</td><td class="m">tan 45° = 1</td></tr>
        <tr><td class="m">${f('tan 70° − tan 10°', '1 + tan 70° tan 10°')}</td><td class="m">tan 60° = ${sr('3')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The ‘1’ in the denominator is the clue</div>
      Nothing else in trigonometry produces a bare ${m('1')} added to or subtracted from a product of
      two tangents. When you see it, the whole expression is one tangent of one angle.</div>`
    }
  ],
  examples: [
    {
      q: 'Find ' + m('tan 15°') + ' exactly.',
      steps: [
        [m('15° = 45° − 30°'), ''],
        [m(f('tan 45° − tan 30°', '1 + tan 45° tan 30°') + ' = ' + f('1 − ' + f(sr('3'), '3'), '1 + ' + f(sr('3'), '3'))), ''],
        ['Multiply above and below by ' + m('3') + ': ' + m(f('3 − ' + sr('3'), '3 + ' + sr('3'))) + '.', ''],
        ['Rationalise: ' + m('= 2 − ' + sr('3') + ' ≈ 0.268') + '.', '']
      ],
      ans: m('2 − ' + sr('3'))
    },
    {
      q: 'Simplify ' + m(f('tan 25° + tan 20°', '1 − tan 25° tan 20°')) + '.',
      steps: [
        ['This is ' + m('tan(α + β)') + ' with ' + m('α = 25°, β = 20°') + '.', ''],
        [m('= tan 45°'), ''],
        [m('= 1'), ''],
        ['No decimal work was needed at all.', '']
      ],
      ans: m('1')
    },
    {
      q: 'Given ' + m('tan α = 2') + ' and ' + m('tan β = 3') + ', find ' + m('tan(α + β)') + '.',
      steps: [
        [m(f('2 + 3', '1 − 2 · 3')), ''],
        [m('= ' + f('5', '−5')), ''],
        [m('= −1'), ''],
        ['So ' + m('α + β') + ' is an obtuse angle with tangent ' + m('−1') + ' — that is ' + m('135°') + '.', '']
      ],
      ans: m('−1')
    }
  ],
  modelNote: 'Ask for tan(45° + 45°) from the formula; the denominator vanishes, and the class discovers the condition instead of being handed it.',
  interactive: {
    type: 'substitute',
    title: 'Two tangents, one angle',
    hint: 'Watch the denominator as the two angles approach 90° together.'
  },
  quiz: [
    { q: m('tan(α + β)') + ' equals:', a: [m(f('tan α + tan β', '1 + tan α tan β')), m(f('tan α + tan β', '1 − tan α tan β')), m('tan α + tan β'), m(f('1', 'tan α tan β'))], c: 1, why: 'Signs are crossed.' },
    { q: m('tan(α − β)') + ' has denominator:', a: [m('1 − tan α tan β'), m('1 + tan α tan β'), m('tan α tan β'), m('1')], c: 1, why: 'Crossed again.' },
    { q: m('tan 15°') + ' equals:', a: [m('2 − ' + sr('3')), m('2 + ' + sr('3')), m(f(sr('3'), '3')), m(sr('3'))], c: 0, why: m('45° − 30°') + '.' },
    { q: m(f('tan 25° + tan 20°', '1 − tan 25° tan 20°')) + ' equals:', a: [m('0'), m('1'), m(sr('3')), 'undefined'], c: 1, why: m('tan 45°') + '.' },
    { q: 'The formula fails when:', a: [m('tan α tan β = 0'), m('tan α tan β = 1'), m('α = β'), 'never'], c: 1, why: 'Zero denominator.' },
    { q: m('tan 90°') + ' is:', a: [m('∞'), 'undefined', m('0'), m('1')], c: 1, why: 'It does not exist.' }
  ],
  practice: {
    easy: [
      [m('tan(α + β)'), m(f('tan α + tan β', '1 − tan α tan β'))],
      [m('tan(α − β)'), m(f('tan α − tan β', '1 + tan α tan β'))],
      [m('tan α = 1, tan β = 1') + ': ' + m('tan(α + β)'), 'Undefined'],
      [m('tan α = 2, tan β = 3') + ': ' + m('tan(α + β)'), m('−1')],
      [m(f('tan 25° + tan 20°', '1 − tan 25° tan 20°')), m('1')],
      [m('tan 45°'), m('1')],
      [m('tan 60°'), m(sr('3'))]
    ],
    med: [
      [m('tan 15°'), m('2 − ' + sr('3'))],
      [m('tan 75°'), m('2 + ' + sr('3'))],
      [m(f('tan 70° − tan 10°', '1 + tan 70° tan 10°')), m(sr('3'))],
      [m('tan α = ' + f('1', '2') + ', tan β = ' + f('1', '3')) + ': ' + m('tan(α + β)'), m('1')],
      [m('tan α = 3, tan β = ' + f('1', '2')) + ': ' + m('tan(α − β)'), m('1')],
      [m('tan 15° · tan 75°'), m('1')],
      [m('tan 105°'), m('−(2 + ' + sr('3') + ')')]
    ],
    hard: [
      ['Prove ' + m('tan 15° tan 75° = 1'), 'Complementary angles'],
      [m('tan α = ' + f('3', '4')) + ': ' + m('tan(α + 45°)'), m('7')],
      [m('tan α = ' + f('3', '4')) + ': ' + m('tan(α − 45°)'), m('−' + f('1', '7'))],
      ['Prove ' + m('tan(α + β)(1 − tan α tan β) = tan α + tan β'), 'Multiply the formula out'],
      ['If ' + m('α + β = 45°') + ', show ' + m('(1 + tan α)(1 + tan β) = 2'), 'Expand and use the formula'],
      [m('tan α = 1, tan β = 2, tan γ = 3') + ': show ' + m('α + β + γ = π'), 'Add in two steps'],
      ['Simplify ' + m(f('1 + tan α', '1 − tan α')), m('tan(45° + α)')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rationalise every surd answer; ' + m(f('1 − ' + f(sr('3'), '3'), '1 + ' + f(sr('3'), '3'))) + ' is not a finished answer.',
  homework: [
    'Find ' + m('tan 75°') + ' exactly.',
    'Simplify ' + m(f('tan 50° + tan 10°', '1 − tan 50° tan 10°')) + '.',
    'Given ' + m('tan α = ' + f('2', '3')) + ' and ' + m('tan β = ' + f('1', '5')) + ', find ' + m('tan(α + β)') + '.',
    'Say for which ' + m('α') + ' and ' + m('β') + ' the formula for ' + m('tan(α + β)') + ' cannot be used.',
    'Show that ' + m(f('1 + tan α', '1 − tan α') + ' = tan(45° + α)') + '.'
  ]
});

/* ============================== 31 ============================== */
G9_ALG.push({
  id: 'a9-31', stream: 'alg', grade: 9, quarter: 3, lessons: '59–60', hours: 2,
  title: 'The double-angle formulae',
  subtitle: 'Set β = α in the addition formulae and three of the most-used identities appear at once.',
  uz: 'Algebra 9, §26', uzPage: 'pp. 143–148',
  cam: 'IGX 15.10', camPage: 'Core & Extended, pp. 356–361', wb: 'Exercise 15.10',
  objectives: [
    'Derive sin 2α, cos 2α and tan 2α by putting β = α in the addition formulae.',
    'Give all three forms of cos 2α and choose the useful one.',
    'Use the half-angle consequences 2sin²α = 1 − cos 2α and 2cos²α = 1 + cos 2α.',
    'Apply the formulae in both directions.'
  ],
  terms: [
    ['Double angle', 'Ikkilangan burchak', 'Двойной угол'],
    ['Half angle', 'Yarim burchak', 'Половинный угол'],
    ['Degree lowering', 'Darajani pasaytirish', 'Понижение степени'],
    ['Equivalent form', 'Teng kuchli ko‘rinish', 'Равносильная форма'],
    ['Substitute', 'O‘rniga qo‘ymoq', 'Подставить'],
    ['Consequence', 'Natija', 'Следствие'],
    ['Triple angle', 'Uchlangan burchak', 'Тройной угол'],
    ['Verify', 'Tekshirmoq', 'Проверить']
  ],
  timing: [[13, 'Setting β = α'], [21, 'Three faces of cos 2α'], [22, 'Lowering the degree'], [20, 'Both directions'], [4, 'Homework']],
  sections: [
    {
      h: 'Setting β = α',
      html: `<p>Nothing new has to be proved. Put ${m('β = α')} in each addition formula.</p>
      ${eq(m('sin 2α = 2 sin α cos α'), true)}
      ${eq(m('cos 2α = cos²α − sin²α'), true)}
      ${eq(m('tan 2α = ' + f('2 tan α', '1 − tan²α')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>From</th><th>Putting ${m('β = α')}</th><th>Gives</th></tr></thead>
      <tbody>
        <tr><td class="m">sin α cos β + cos α sin β</td><td class="m">sin α cos α + cos α sin α</td><td class="m">2 sin α cos α</td></tr>
        <tr><td class="m">cos α cos β − sin α sin β</td><td class="m">cos²α − sin²α</td><td class="m">cos 2α</td></tr>
        <tr><td class="m">${f('tan α + tan β', '1 − tan α tan β')}</td><td class="m">${f('2 tan α', '1 − tan²α')}</td><td class="m">tan 2α</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('sin 2α')} is not ${m('2 sin α')}</span>
      Test it at ${m('α = ' + f('π', '2'))}: the left side is ${m('sin π = 0')}, the right is ${m('2')}.
      The ${m('2')} multiplies the angle, not the function.</div>`
    },
    {
      h: 'Three faces of cos 2α',
      html: `<p>Using ${m('sin²α + cos²α = 1')}, the cosine formula can be written three ways — and the
      choice of which to use is most of the skill.</p>
      ${eq(m('cos 2α = cos²α − sin²α = 2cos²α − 1 = 1 − 2sin²α'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Form</th><th>Use it when</th></tr></thead>
      <tbody>
        <tr><td class="m">cos²α − sin²α</td><td>both are known</td></tr>
        <tr><td class="m">2cos²α − 1</td><td>only ${m('cos α')} is known</td></tr>
        <tr><td class="m">1 − 2sin²α</td><td>only ${m('sin α')} is known</td></tr>
      </tbody></table></div>
      <p><b>Example.</b> ${m('sin α = ' + f('3', '5'))}. Then ${m('cos 2α = 1 − 2 · ' + f('9', '25') + ' = ' + f('7', '25'))}
      — and the quadrant of ${m('α')} was never needed, because only ${m('sin²α')} appears.</p>
      <div class="keybox"><div class="klabel">Sometimes the sign question disappears</div>
      Any expression involving only even powers of sine and cosine is blind to the quadrant. Spotting
      that saves the whole sign discussion, and it is why the third form is so often the right one.</div>`
    },
    {
      h: 'Lowering the degree',
      html: `<p>Read the last two forms backwards and the squares become linear in ${m('cos 2α')}:</p>
      ${eq(m('sin²α = ' + f('1 − cos 2α', '2')) + '     ' + m('cos²α = ' + f('1 + cos 2α', '2')), true)}
      <p>These are the <b>degree-lowering</b> formulae, and they matter far beyond Grade 9 — every
      integral of ${m('sin²x')} in Grade 11 begins with them.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Becomes</th></tr></thead>
      <tbody>
        <tr><td class="m">sin²15°</td><td class="m">${f('1 − cos 30°', '2')} = ${f('2 − ' + sr('3'), '4')}</td></tr>
        <tr><td class="m">cos²${f('π', '8')}</td><td class="m">${f('1 + cos ' + f('π', '4'), '2')} = ${f('2 + ' + sr('2'), '4')}</td></tr>
        <tr><td class="m">2 sin²α − 1</td><td class="m">−cos 2α</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'Both directions',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Seeing</th><th>Write</th></tr></thead>
      <tbody>
        <tr><td class="m">2 sin 15° cos 15°</td><td class="m">sin 30° = ${f('1', '2')}</td></tr>
        <tr><td class="m">cos²22.5° − sin²22.5°</td><td class="m">cos 45° = ${f(sr('2'), '2')}</td></tr>
        <tr><td class="m">${f('2 tan 15°', '1 − tan²15°')}</td><td class="m">tan 30° = ${f(sr('3'), '3')}</td></tr>
        <tr><td class="m">sin α cos α</td><td class="m">${f('1', '2')} sin 2α</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A product of a sine and a cosine of the same angle is always half a double angle</div>
      That single observation solves a large fraction of the questions in this section — including
      every “find the greatest value of ${m('sin α cos α')}” question, whose answer is
      ${m(f('1', '2'))}.</div>`
    }
  ],
  examples: [
    {
      q: 'Given ' + m('sin α = ' + f('3', '5')) + ' in quadrant I, find ' + m('sin 2α') + ' and ' + m('cos 2α') + '.',
      steps: [
        [m('cos α = ' + f('4', '5')), 'Quadrant I.'],
        [m('sin 2α = 2 · ' + f('3', '5') + ' · ' + f('4', '5') + ' = ' + f('24', '25')), ''],
        [m('cos 2α = 1 − 2 · ' + f('9', '25')), 'Only ' + m('sin α') + ' needed.'],
        [m('= ' + f('7', '25')), '']
      ],
      ans: m('sin 2α = ' + f('24', '25') + ', cos 2α = ' + f('7', '25'))
    },
    {
      q: 'Simplify ' + m('2 sin 15° cos 15°') + ' and ' + m('cos²22.5° − sin²22.5°') + '.',
      steps: [
        ['The first is ' + m('sin(2 · 15°)') + '.', ''],
        [m('= sin 30° = ' + f('1', '2')), ''],
        ['The second is ' + m('cos(2 · 22.5°)') + '.', ''],
        [m('= cos 45° = ' + f(sr('2'), '2')), '']
      ],
      ans: m(f('1', '2')) + ' and ' + m(f(sr('2'), '2'))
    },
    {
      q: 'Prove ' + m(f('sin 2α', '1 + cos 2α') + ' = tan α') + '.',
      steps: [
        ['Numerator: ' + m('2 sin α cos α') + '.', ''],
        ['Denominator: ' + m('1 + 2cos²α − 1 = 2cos²α') + '.', 'The second form.'],
        [m('= ' + f('2 sin α cos α', '2cos²α')), ''],
        [m('= tan α') + ', for ' + m('cos α ≠ 0') + '.', '']
      ],
      ans: 'Proved'
    }
  ],
  modelNote: 'Ask the class to evaluate sin 2α at α = 90° both by the formula and by “2 sin α”; the contradiction settles the commonest misconception in one minute.',
  interactive: {
    type: 'graphTransform',
    title: 'One angle, twice',
    hint: 'Compare the graph of sin 2α with 2 sin α.'
  },
  quiz: [
    { q: m('sin 2α') + ' equals:', a: [m('2 sin α'), m('2 sin α cos α'), m('sin²α'), m('sin α + cos α')], c: 1, why: 'Set ' + m('β = α') + '.' },
    { q: m('cos 2α') + ' equals:', a: [m('cos²α + sin²α'), m('cos²α − sin²α'), m('2 cos α'), m('1')], c: 1, why: 'Match, flip.' },
    { q: 'Given only ' + m('sin α') + ', use:', a: [m('cos²α − sin²α'), m('1 − 2sin²α'), m('2cos²α − 1'), 'none'], c: 1, why: 'It needs sine alone.' },
    { q: m('sin²α') + ' equals:', a: [m(f('1 − cos 2α', '2')), m(f('1 + cos 2α', '2')), m(f('cos 2α', '2')), m('1 − cos 2α')], c: 0, why: 'Degree lowering.' },
    { q: m('2 sin 15° cos 15°') + ' equals:', a: [m(f('1', '2')), m(f(sr('3'), '2')), m('1'), m(f(sr('2'), '2'))], c: 0, why: m('sin 30°') + '.' },
    { q: m('tan 2α') + ' equals:', a: [m('2 tan α'), m(f('2 tan α', '1 − tan²α')), m(f('2 tan α', '1 + tan²α')), m('tan²α')], c: 1, why: 'Set ' + m('β = α') + ' in the tangent formula.' }
  ],
  practice: {
    easy: [
      [m('sin 2α'), m('2 sin α cos α')],
      [m('cos 2α') + ' (basic form)', m('cos²α − sin²α')],
      [m('tan 2α'), m(f('2 tan α', '1 − tan²α'))],
      [m('2 sin 15° cos 15°'), m(f('1', '2'))],
      [m('cos²22.5° − sin²22.5°'), m(f(sr('2'), '2'))],
      [m('sin α cos α') + ' as a double angle', m(f('1', '2') + ' sin 2α')],
      ['Is ' + m('sin 2α = 2 sin α') + '?', 'No']
    ],
    med: [
      [m('sin α = ' + f('3', '5')) + ' (I): ' + m('sin 2α'), m(f('24', '25'))],
      ['Same: ' + m('cos 2α'), m(f('7', '25'))],
      [m('cos α = ' + f('4', '5')) + ' (IV): ' + m('sin 2α'), m('−' + f('24', '25'))],
      [m('tan α = ' + f('1', '3')) + ': ' + m('tan 2α'), m(f('3', '4'))],
      [m('sin²15°'), m(f('2 − ' + sr('3'), '4'))],
      [m('cos²' + f('π', '8')), m(f('2 + ' + sr('2'), '4'))],
      ['Simplify ' + m('1 − 2 sin²α'), m('cos 2α')]
    ],
    hard: [
      ['Prove ' + m(f('sin 2α', '1 + cos 2α') + ' = tan α'), 'Use ' + m('2cos²α')],
      ['Prove ' + m(f('1 − cos 2α', 'sin 2α') + ' = tan α'), 'Use ' + m('2sin²α')],
      ['Greatest value of ' + m('sin α cos α'), m(f('1', '2'))],
      ['Prove ' + m('sin 3α = 3 sin α − 4 sin³α'), 'Write ' + m('3α = 2α + α')],
      [m('sin α + cos α = ' + f('1', '2')) + ': ' + m('sin 2α'), m('−' + f('3', '4'))],
      ['Simplify ' + m('cos⁴α − sin⁴α'), m('cos 2α')],
      ['Prove ' + m('cot α − tan α = 2 cot 2α'), 'Common denominator, then ' + m('sin 2α')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'For every ' + m('cos 2α') + ' choose the form that avoids finding a second function.',
  homework: [
    'Given ' + m('cos α = ' + f('5', '13')) + ' in quadrant IV, find ' + m('sin 2α') + ' and ' + m('cos 2α') + '.',
    'Simplify ' + m('2 sin 22.5° cos 22.5°') + ' and ' + m('1 − 2 sin²15°') + '.',
    'Evaluate ' + m('cos²' + f('π', '12')) + ' by lowering the degree.',
    'Prove ' + m(f('1 − cos 2α', 'sin 2α') + ' = tan α') + '.',
    'Given ' + m('sin α − cos α = ' + f('1', '3')) + ', find ' + m('sin 2α') + '.'
  ]
});

/* ============================== 32 ============================== */
G9_ALG.push({
  id: 'a9-32', stream: 'alg', grade: 9, quarter: 3, lessons: '61–62', hours: 2,
  title: 'The reduction formulae',
  subtitle: 'Every angle brought back to the first quadrant by two questions: does the name change, and what is the sign?',
  uz: 'Algebra 9, §27', uzPage: 'pp. 149–154',
  cam: 'IGX 15.11', camPage: 'Core & Extended, pp. 362–367', wb: 'Exercise 15.11',
  objectives: [
    'Reduce sin, cos, tan and cot of π/2 ± α, π ± α, 3π/2 ± α and 2π − α to a first-quadrant function.',
    'Use the two-question rule instead of memorising a table of sixteen entries.',
    'Evaluate any trigonometric function of any angle exactly.',
    'Simplify expressions containing several shifted angles.'
  ],
  terms: [
    ['Reduction formula', 'Keltirish formulasi', 'Формула приведения'],
    ['Co-function', 'Ko-funksiya', 'Кофункция'],
    ['Shift', 'Siljish', 'Сдвиг'],
    ['Vertical axis', 'Vertikal o‘q', 'Вертикальная ось'],
    ['Horizontal axis', 'Gorizontal o‘q', 'Горизонтальная ось'],
    ['Acute angle', 'O‘tkir burchak', 'Острый угол'],
    ['Name changes', 'Nomi o‘zgaradi', 'Название меняется'],
    ['Rule', 'Qoida', 'Правило']
  ],
  timing: [[13, 'The two questions'], [21, 'Working the rule'], [22, 'The table it produces'], [20, 'Evaluating anything'], [4, 'Homework']],
  sections: [
    {
      h: 'The two questions',
      html: `<p>An expression such as ${m('sin(π − α)')} or ${m('cos(' + f('3π', '2') + ' + α)')} can always
      be rewritten as ${m('±')} a function of ${m('α')} alone. Two questions decide it.</p>
      <ol>
        <li><b>Does the name change?</b> Yes if the shift is ${m(f('π', '2'))} or ${m(f('3π', '2'))} —
        an <b>odd</b> multiple of ${m(f('π', '2'))}, measured from the vertical axis. No if it is
        ${m('π')} or ${m('2π')}.</li>
        <li><b>What is the sign?</b> Treat ${m('α')} as a small acute angle, find the quadrant of the
        whole angle, and take the sign the <b>original</b> function has there.</li>
      </ol>
      <div class="keybox"><div class="klabel">Sixteen formulae, or two questions</div>
      Textbooks print a table of sixteen entries and pupils memorise it for a week. The two questions
      above reproduce every entry in about five seconds, cannot be half-remembered, and still work in
      Grade 11. Learn the questions, not the table.</div>`
    },
    {
      h: 'Working the rule',
      html: `<p><b>Example 1.</b> ${m('sin(π − α)')}. The shift is ${m('π')} — horizontal — so the name
      stays ${m('sin')}. With ${m('α')} small, ${m('π − α')} is in quadrant II, where sine is positive.
      Hence ${m('sin(π − α) = sin α')}.</p>
      <p><b>Example 2.</b> ${m('cos(' + f('π', '2') + ' + α)')}. The shift is ${m(f('π', '2'))} —
      vertical — so cosine becomes sine. With ${m('α')} small, ${m(f('π', '2') + ' + α')} is in quadrant
      II, where <b>cosine</b> is negative. Hence ${m('cos(' + f('π', '2') + ' + α) = −sin α')}.</p>
      <div class="warn"><span class="wl">The sign belongs to the original function, not to the new one</span>
      In Example 2 the answer contains a sine, but the sign was decided by asking about <b>cosine</b>
      in quadrant II. Reversing that is the one mistake this rule is prone to.</div>`
    },
    {
      h: 'The table it produces',
      html: `<div class="tablewrap"><table>
      <thead><tr><th></th><th class="m">${f('π', '2')} − α</th><th class="m">${f('π', '2')} + α</th><th class="m">π − α</th><th class="m">π + α</th><th class="m">${f('3π', '2')} + α</th><th class="m">2π − α</th></tr></thead>
      <tbody>
        <tr><td class="m">sin</td><td class="m">cos α</td><td class="m">cos α</td><td class="m">sin α</td><td class="m">−sin α</td><td class="m">−cos α</td><td class="m">−sin α</td></tr>
        <tr><td class="m">cos</td><td class="m">sin α</td><td class="m">−sin α</td><td class="m">−cos α</td><td class="m">−cos α</td><td class="m">sin α</td><td class="m">cos α</td></tr>
        <tr><td class="m">tan</td><td class="m">cot α</td><td class="m">−cot α</td><td class="m">−tan α</td><td class="m">tan α</td><td class="m">−cot α</td><td class="m">−tan α</td></tr>
        <tr><td class="m">cot</td><td class="m">tan α</td><td class="m">−tan α</td><td class="m">−cot α</td><td class="m">cot α</td><td class="m">−tan α</td><td class="m">−cot α</td></tr>
      </tbody></table></div>
      <p>The first column is the familiar complementary-angle rule from Grade 8:
      ${m('sin(90° − α) = cos α')}. Everything else in the table is the same idea, moved round the
      circle.</p>
      {{fig:unitCircle:Each shift moves the point to a new quadrant; the name and the sign follow from where it lands.}}`
    },
    {
      h: 'Evaluating anything',
      html: `<p>Combined with periodicity and parity, the reduction formulae evaluate every angle exactly.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Angle</th><th>Step 1 — period</th><th>Step 2 — reduce</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td class="m">sin 150°</td><td>—</td><td class="m">sin(180° − 30°)</td><td class="m">${f('1', '2')}</td></tr>
        <tr><td class="m">cos 210°</td><td>—</td><td class="m">cos(180° + 30°)</td><td class="m">−${f(sr('3'), '2')}</td></tr>
        <tr><td class="m">tan 300°</td><td>—</td><td class="m">tan(360° − 60°)</td><td class="m">−${sr('3')}</td></tr>
        <tr><td class="m">sin 840°</td><td class="m">−720° → 120°</td><td class="m">sin(180° − 60°)</td><td class="m">${f(sr('3'), '2')}</td></tr>
        <tr><td class="m">cos(−405°)</td><td>even → ${m('405°')} → ${m('45°')}</td><td>—</td><td class="m">${f(sr('2'), '2')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The order that always works</div>
      Strip whole turns, then use parity if the angle is negative, then reduce to the first quadrant,
      then read the exact-value table. Four steps, in that order, and no angle can resist them.</div>`
    }
  ],
  examples: [
    {
      q: 'Simplify ' + m('cos(' + f('π', '2') + ' + α)') + '.',
      steps: [
        ['Shift ' + m(f('π', '2')) + ' — vertical, so the name changes to sine.', 'Question 1.'],
        ['Take ' + m('α') + ' small: the angle is in quadrant II.', 'Question 2.'],
        ['Cosine is negative in quadrant II.', 'The original function.'],
        [m('= −sin α'), '']
      ],
      ans: m('−sin α')
    },
    {
      q: 'Evaluate ' + m('sin 840°') + '.',
      steps: [
        [m('840 − 720 = 120'), 'Two full turns.'],
        [m('sin 120° = sin(180° − 60°)'), ''],
        ['Name stays; quadrant II; sine positive.', ''],
        [m('= sin 60° = ' + f(sr('3'), '2')), '']
      ],
      ans: m(f(sr('3'), '2'))
    },
    {
      q: 'Simplify ' + m(f('sin(π − α) cos(' + f('π', '2') + ' + α)', 'tan(π + α)')) + '.',
      steps: [
        [m('sin(π − α) = sin α'), ''],
        [m('cos(' + f('π', '2') + ' + α) = −sin α'), ''],
        [m('tan(π + α) = tan α'), ''],
        [m('= ' + f('sin α · (−sin α)', 'tan α') + ' = −sin α cos α'), '']
      ],
      ans: m('−sin α cos α')
    }
  ],
  modelNote: 'Do not hand out the table. Give six expressions and have the class produce the table themselves by asking the two questions; the table they write is the one they will remember.',
  interactive: {
    type: 'circleAngles',
    title: 'Shift the angle',
    hint: 'Watch which axis the point crosses — that decides the name.'
  },
  quiz: [
    { q: 'The name changes for a shift of:', a: [m('π'), m(f('π', '2')), m('2π'), 'never'], c: 1, why: 'An odd multiple of ' + m(f('π', '2')) + '.' },
    { q: m('sin(π − α)') + ' equals:', a: [m('sin α'), m('−sin α'), m('cos α'), m('−cos α')], c: 0, why: 'Name stays; quadrant II.' },
    { q: m('cos(' + f('π', '2') + ' + α)') + ' equals:', a: [m('sin α'), m('−sin α'), m('cos α'), m('−cos α')], c: 1, why: 'Name changes; cosine negative in II.' },
    { q: m('tan(π + α)') + ' equals:', a: [m('tan α'), m('−tan α'), m('cot α'), m('−cot α')], c: 0, why: 'Period ' + m('π') + '.' },
    { q: m('cos 210°') + ' equals:', a: [m(f(sr('3'), '2')), m('−' + f(sr('3'), '2')), m(f('1', '2')), m('−' + f('1', '2'))], c: 1, why: m('180° + 30°') + ', quadrant III.' },
    { q: 'The sign is decided by:', a: ['the new function', 'the original function', 'the quadrant of ' + m('α'), 'the period'], c: 1, why: 'Ask about the function you started with.' }
  ],
  practice: {
    easy: [
      [m('sin(π − α)'), m('sin α')],
      [m('cos(π − α)'), m('−cos α')],
      [m('sin(π + α)'), m('−sin α')],
      [m('cos(2π − α)'), m('cos α')],
      [m('sin(' + f('π', '2') + ' − α)'), m('cos α')],
      [m('tan(π + α)'), m('tan α')],
      [m('cos(' + f('π', '2') + ' − α)'), m('sin α')]
    ],
    med: [
      [m('cos(' + f('π', '2') + ' + α)'), m('−sin α')],
      [m('tan(' + f('π', '2') + ' − α)'), m('cot α')],
      [m('cot(' + f('3π', '2') + ' + α)'), m('−tan α')],
      [m('sin 150°'), m(f('1', '2'))],
      [m('cos 210°'), m('−' + f(sr('3'), '2'))],
      [m('tan 300°'), m('−' + sr('3'))],
      [m('sin 840°'), m(f(sr('3'), '2'))]
    ],
    hard: [
      ['Simplify ' + m(f('sin(π − α) cos(' + f('π', '2') + ' + α)', 'tan(π + α)')), m('−sin α cos α')],
      ['Simplify ' + m('sin(' + f('π', '2') + ' + α) + cos(π + α)'), m('0')],
      ['Simplify ' + m('tan(π − α) cot(' + f('π', '2') + ' + α)'), m('tan²α')],
      [m('cos(−405°)'), m(f(sr('2'), '2'))],
      [m('sin 1230°'), m(f('1', '2'))],
      ['Simplify ' + m('sin²(π − α) + cos²(' + f('π', '2') + ' + α)'), m('2 sin²α')],
      ['Simplify ' + m(f('cos(2π − α)', 'sin(' + f('π', '2') + ' − α)')), m('1')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write the two questions and their answers beside every reduction; the working is the mark.',
  homework: [
    'Simplify ' + m('sin(' + f('3π', '2') + ' − α)') + ' and ' + m('cos(' + f('3π', '2') + ' − α)') + '.',
    'Evaluate ' + m('sin 225°') + ', ' + m('cos 315°') + ' and ' + m('tan 240°') + '.',
    'Evaluate ' + m('cos 1110°') + '.',
    'Simplify ' + m(f('sin(π + α) cos(2π − α)', 'sin(' + f('π', '2') + ' + α)')) + '.',
    'Prove ' + m('sin(π − α) + sin(π + α) = 0') + '.'
  ]
});

/* ============================== 33 ============================== */
G9_ALG.push({
  id: 'a9-33', stream: 'alg', grade: 9, quarter: 3, lessons: '63–64', hours: 2,
  title: 'Sums and differences of sines and cosines',
  subtitle: 'Turning a sum into a product — the step that makes a trigonometric equation factorisable.',
  uz: 'Algebra 9, §28', uzPage: 'pp. 155–160',
  cam: 'IGX 15.12', camPage: 'Core & Extended, pp. 368–372', wb: 'Exercise 15.12',
  objectives: [
    'State the four sum-to-product formulae.',
    'Derive them by adding and subtracting the addition formulae.',
    'Use them to factorise and hence to solve simple equations.',
    'Convert a product back into a sum when that is the simpler direction.'
  ],
  terms: [
    ['Sum to product', 'Yig‘indini ko‘paytmaga', 'Сумма в произведение'],
    ['Half sum', 'Yarim yig‘indi', 'Полусумма'],
    ['Half difference', 'Yarim ayirma', 'Полуразность'],
    ['Factorise', 'Ko‘paytuvchilarga ajratish', 'Разложить на множители'],
    ['Product', 'Ko‘paytma', 'Произведение'],
    ['Coefficient', 'Koeffitsiyent', 'Коэффициент'],
    ['Auxiliary angle', 'Yordamchi burchak', 'Вспомогательный угол'],
    ['Zero product', 'Nol ko‘paytma', 'Нулевое произведение']
  ],
  timing: [[13, 'Why a product is better'], [20, 'The four formulae'], [23, 'The derivation'], [20, 'Using them'], [4, 'Homework']],
  sections: [
    {
      h: 'Why a product is better',
      html: `<p>An equation such as ${m('sin 3x + sin x = 0')} cannot be attacked directly: there is no
      rule that lets a sum of two sines be zero term by term. Written as a product it becomes trivial —
      a product is zero exactly when one factor is.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Form</th><th>What you can do</th></tr></thead>
      <tbody>
        <tr><td>a sum</td><td>very little</td></tr>
        <tr><td>a product ${m('= 0')}</td><td>set each factor to zero</td></tr>
        <tr><td>a product ${m('≠ 0')}</td><td>estimate, bound, differentiate</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The same move as in Chapter I</div>
      Factorising to solve is exactly what was done with quadratics and with the method of intervals.
      Trigonometry does not introduce a new strategy here; it introduces the tool that makes the old
      strategy available.</div>`
    },
    {
      h: 'The four formulae',
      html: `${eq(m('sin α + sin β = 2 sin ' + f('α + β', '2') + ' cos ' + f('α − β', '2')), true)}
      ${eq(m('sin α − sin β = 2 cos ' + f('α + β', '2') + ' sin ' + f('α − β', '2')), true)}
      ${eq(m('cos α + cos β = 2 cos ' + f('α + β', '2') + ' cos ' + f('α − β', '2')), true)}
      ${eq(m('cos α − cos β = −2 sin ' + f('α + β', '2') + ' sin ' + f('α − β', '2')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Notice</th><th>Detail</th></tr></thead>
      <tbody>
        <tr><td>every right side</td><td>has the factor ${m('2')} and the half-sum and half-difference</td></tr>
        <tr><td>the sine formulae</td><td>are mixed: one sine, one cosine</td></tr>
        <tr><td>the cosine formulae</td><td>are alike: both cosines, or both sines</td></tr>
        <tr><td>the last one</td><td>carries a minus sign — the only one that does</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The minus in ${m('cos α − cos β')} is not optional</span>
      It is the single most-forgotten sign in the whole of Grade 9 trigonometry. A useful check:
      ${m('cos 0 − cos π = 2')}, and the formula gives ${m('−2 sin ' + f('π', '2') + ' sin(−' + f('π', '2') + ') = 2')} ✓.</div>`
    },
    {
      h: 'The derivation',
      html: `<p>Write ${m('α = u + v')} and ${m('β = u − v')}, so that ${m('u = ' + f('α + β', '2'))} and
      ${m('v = ' + f('α − β', '2'))}. Then</p>
      ${eq(m('sin α + sin β = sin(u + v) + sin(u − v)'), true)}
      <p>Expanding both by the addition formulae, the ${m('cos u sin v')} terms cancel and the
      ${m('sin u cos v')} terms double:</p>
      ${eq(m('= 2 sin u cos v = 2 sin ' + f('α + β', '2') + ' cos ' + f('α − β', '2')), true)}
      <p>The other three come out the same way, by subtracting instead of adding, or by starting from
      the cosine formulae.</p>`
    },
    {
      h: 'Using them',
      html: `<p><b>Example.</b> Solve ${m('sin 3x + sin x = 0')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td>sum to product</td><td class="m">2 sin 2x cos x = 0</td></tr>
        <tr><td>first factor</td><td class="m">sin 2x = 0 ⇒ x = ${f('πk', '2')}</td></tr>
        <tr><td>second factor</td><td class="m">cos x = 0 ⇒ x = ${f('π', '2')} + πk</td></tr>
        <tr><td>combine</td><td class="m">x = ${f('πk', '2')}</td></tr>
      </tbody></table></div>
      <p>The second family is contained in the first, so one expression covers everything.</p>
      <p>The reverse direction is also useful: ${m('2 sin α cos β = sin(α + β) + sin(α − β)')} turns a
      product into a sum, which is what an integral in Grade 11 will want.</p>
      <div class="keybox"><div class="klabel">Which direction?</div>
      Going to a product helps when you must <b>solve</b>; going to a sum helps when you must
      <b>estimate or integrate</b>. Deciding which of the two you need before starting saves most of
      the work.</div>`
    }
  ],
  examples: [
    {
      q: 'Simplify ' + m('sin 75° + sin 15°') + '.',
      steps: [
        ['Half sum ' + m('45°') + ', half difference ' + m('30°') + '.', ''],
        [m('2 sin 45° cos 30°'), ''],
        [m('2 · ' + f(sr('2'), '2') + ' · ' + f(sr('3'), '2')), ''],
        [m('= ' + f(sr('6'), '2')), '']
      ],
      ans: m(f(sr('6'), '2'))
    },
    {
      q: 'Solve ' + m('sin 3x + sin x = 0') + '.',
      steps: [
        [m('2 sin 2x cos x = 0'), 'Half sum ' + m('2x') + ', half difference ' + m('x') + '.'],
        [m('sin 2x = 0 ⇒ x = ' + f('πk', '2')), ''],
        [m('cos x = 0 ⇒ x = ' + f('π', '2') + ' + πk'), 'Already included.'],
        [m('x = ' + f('πk', '2') + ', k ∈ ℤ'), '']
      ],
      ans: m('x = ' + f('πk', '2'))
    },
    {
      q: 'Prove ' + m(f('sin α + sin β', 'cos α + cos β') + ' = tan ' + f('α + β', '2')) + '.',
      steps: [
        ['Numerator: ' + m('2 sin ' + f('α + β', '2') + ' cos ' + f('α − β', '2')) + '.', ''],
        ['Denominator: ' + m('2 cos ' + f('α + β', '2') + ' cos ' + f('α − β', '2')) + '.', ''],
        ['The common factors cancel.', ''],
        [m('= tan ' + f('α + β', '2')), '']
      ],
      ans: 'Proved'
    }
  ],
  modelNote: 'Check the minus sign in cos α − cos β on the board with α = 0, β = π; a formula verified once in front of the class is remembered with its sign.',
  interactive: {
    type: 'graphTransform',
    title: 'A sum of two waves',
    hint: 'The sum of two sines is a product — the envelope is visible.'
  },
  quiz: [
    { q: m('sin α + sin β') + ' equals:', a: [m('2 sin ' + f('α + β', '2') + ' cos ' + f('α − β', '2')), m('2 cos ' + f('α + β', '2') + ' sin ' + f('α − β', '2')), m('sin(α + β)'), m('2 sin α sin β')], c: 0, why: 'Sine of the half-sum, cosine of the half-difference.' },
    { q: m('cos α − cos β') + ' equals:', a: [m('2 sin ' + f('α + β', '2') + ' sin ' + f('α − β', '2')), m('−2 sin ' + f('α + β', '2') + ' sin ' + f('α − β', '2')), m('2 cos ' + f('α + β', '2') + ' cos ' + f('α − β', '2')), m('cos(α − β)')], c: 1, why: 'The only formula with a minus.' },
    { q: m('sin 75° + sin 15°') + ' equals:', a: [m(f(sr('6'), '2')), m(f(sr('2'), '2')), m('1'), m(f(sr('3'), '2'))], c: 0, why: m('2 sin 45° cos 30°') + '.' },
    { q: m('sin 3x + sin x') + ' factorises to:', a: [m('2 sin 2x cos x'), m('2 sin x cos 2x'), m('sin 4x'), m('2 sin 4x')], c: 0, why: 'Half sum ' + m('2x') + '.' },
    { q: 'A product is zero when:', a: ['both factors are', 'at least one factor is', 'neither is', 'always'], c: 1, why: 'That is why we factorise.' },
    { q: m(f('sin α + sin β', 'cos α + cos β')) + ' equals:', a: [m('tan ' + f('α + β', '2')), m('tan ' + f('α − β', '2')), m('cot ' + f('α + β', '2')), m('1')], c: 0, why: 'The half-difference cancels.' }
  ],
  practice: {
    easy: [
      [m('sin α + sin β'), m('2 sin ' + f('α + β', '2') + ' cos ' + f('α − β', '2'))],
      [m('sin α − sin β'), m('2 cos ' + f('α + β', '2') + ' sin ' + f('α − β', '2'))],
      [m('cos α + cos β'), m('2 cos ' + f('α + β', '2') + ' cos ' + f('α − β', '2'))],
      [m('cos α − cos β'), m('−2 sin ' + f('α + β', '2') + ' sin ' + f('α − β', '2'))],
      ['Factorise ' + m('sin 3x + sin x'), m('2 sin 2x cos x')],
      ['Factorise ' + m('cos 3x + cos x'), m('2 cos 2x cos x')],
      [m('sin 75° + sin 15°'), m(f(sr('6'), '2'))]
    ],
    med: [
      [m('cos 75° + cos 15°'), m(f(sr('6'), '2'))],
      [m('sin 75° − sin 15°'), m(f(sr('2'), '2'))],
      [m('cos 15° − cos 75°'), m(f(sr('2'), '2'))],
      ['Factorise ' + m('sin 5x − sin x'), m('2 cos 3x sin 2x')],
      ['Factorise ' + m('cos 5x − cos x'), m('−2 sin 3x sin 2x')],
      ['Solve ' + m('sin 3x + sin x = 0'), m('x = ' + f('πk', '2'))],
      ['Simplify ' + m(f('sin α + sin β', 'cos α + cos β')), m('tan ' + f('α + β', '2'))]
    ],
    hard: [
      ['Solve ' + m('cos 3x − cos x = 0'), m('x = ' + f('πk', '2'))],
      ['Simplify ' + m(f('sin α − sin β', 'cos α + cos β')), m('tan ' + f('α − β', '2'))],
      ['Simplify ' + m(f('cos α − cos β', 'sin α + sin β')), m('−tan ' + f('α − β', '2'))],
      ['Prove ' + m('sin α + sin 3α + sin 5α = sin 3α(1 + 2 cos 2α)'), 'Pair the outer two first'],
      ['Solve ' + m('sin 5x = sin x'), m('x = ' + f('πk', '2')) + ' or ' + m('x = ' + f('π', '6') + ' + ' + f('πk', '3'))],
      ['Write ' + m('2 sin 3α cos α') + ' as a sum', m('sin 4α + sin 2α')],
      ['Greatest value of ' + m('sin α + sin(60° − α)'), m('1') + ', at ' + m('α = 30°')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write the half-sum and the half-difference explicitly before applying any formula.',
  homework: [
    'Simplify ' + m('cos 75° + cos 15°') + ' and ' + m('sin 105° − sin 15°') + '.',
    'Factorise ' + m('sin 7x + sin 3x') + ' and ' + m('cos 7x − cos 3x') + '.',
    'Solve ' + m('cos 3x + cos x = 0') + '.',
    'Prove ' + m(f('sin α − sin β', 'cos α + cos β') + ' = tan ' + f('α − β', '2')) + '.',
    'Write ' + m('2 cos 5α cos 3α') + ' as a sum.'
  ]
});

/* ============================== 34 ============================== */
G9_ALG.push({
  id: 'a9-34', stream: 'alg', grade: 9, quarter: 3, lessons: '65–66', hours: 2,
  title: 'Chapter exercises — the graphs of the trigonometric functions',
  subtitle: 'Cambridge draws the three curves and reads the answers off them; the algebra and the picture must agree.',
  uz: 'Algebra 9, III bob mashqlari', uzPage: 'pp. 161–166',
  cam: 'IGX 15.13–15.14', camPage: 'Core & Extended, pp. 373–382', wb: 'Exercise 15.13',
  objectives: [
    'Sketch y = sin x, y = cos x and y = tan x over 0° ≤ x ≤ 360°.',
    'Read amplitude, period and asymptotes from a sketch.',
    'Find all solutions of a simple equation in a given interval from the graph.',
    'Describe the effect of y = a sin bx on the curve.'
  ],
  terms: [
    ['Amplitude', 'Amplituda', 'Амплитуда'],
    ['Period', 'Davr', 'Период'],
    ['Asymptote', 'Asimptota', 'Асимптота'],
    ['Maximum', 'Maksimum', 'Максимум'],
    ['Minimum', 'Minimum', 'Минимум'],
    ['Symmetry of the curve', 'Egri chiziq simmetriyasi', 'Симметрия кривой'],
    ['Interval', 'Oraliq', 'Промежуток'],
    ['Sketch', 'Chizma', 'Эскиз']
  ],
  timing: [[16, 'The three curves'], [20, 'What to read off'], [22, 'Solutions from a graph'], [18, 'Stretching the curve'], [4, 'Homework']],
  sections: [
    {
      h: 'The three curves',
      html: `{{fig:sinCosGraph:y = sin x and y = cos x — the same wave, a quarter turn apart.}}
      <div class="tablewrap"><table>
      <thead><tr><th></th><th class="m">y = sin x</th><th class="m">y = cos x</th><th class="m">y = tan x</th></tr></thead>
      <tbody>
        <tr><td>period</td><td class="m">360°</td><td class="m">360°</td><td class="m">180°</td></tr>
        <tr><td>range</td><td class="m">[−1, 1]</td><td class="m">[−1, 1]</td><td class="m">ℝ</td></tr>
        <tr><td>at ${m('x = 0')}</td><td class="m">0</td><td class="m">1</td><td class="m">0</td></tr>
        <tr><td>zeros</td><td class="m">180°k</td><td class="m">90° + 180°k</td><td class="m">180°k</td></tr>
        <tr><td>asymptotes</td><td>none</td><td>none</td><td class="m">x = 90° + 180°k</td></tr>
        <tr><td>symmetry</td><td>odd</td><td>even</td><td>odd</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The cosine curve is the sine curve, shifted</div>
      ${m('cos x = sin(x + 90°)')} — which is one of the reduction formulae from the last lesson, read
      as a statement about graphs. Anyone who can draw one curve can draw the other by sliding it
      ${m('90°')} to the left.</div>`
    },
    {
      h: 'What to read off',
      html: `<p>A Cambridge question rarely says “find the period”; it says “write down the coordinates of
      the maximum point” or “state the value of ${m('k')}”. Both mean the same reading.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Asked for</th><th>Read from the graph</th></tr></thead>
      <tbody>
        <tr><td>amplitude</td><td>half the vertical distance between the highest and lowest points</td></tr>
        <tr><td>period</td><td>the horizontal distance between two consecutive maxima</td></tr>
        <tr><td>maximum point</td><td>coordinates, not just the height</td></tr>
        <tr><td>number of solutions</td><td>count the crossings of the horizontal line</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">“Amplitude” is a height, “maximum point” is a pair of numbers</span>
      For ${m('y = 3 sin x')} the amplitude is ${m('3')} and the first maximum point is ${m('(90°, 3)')}.
      Answering with the wrong kind of object loses the mark even when the number is right.</div>`
    },
    {
      h: 'Solutions from a graph',
      html: `<p>To solve ${m('sin x = 0.5')} for ${m('0° ≤ x ≤ 360°')}, draw the line ${m('y = 0.5')} across
      the sine curve and count the crossings.</p>
      {{fig:trigSolutions:One horizontal line, two crossings — a calculator gives only the first.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Equation</th><th>Crossings in ${m('[0°, 360°]')}</th><th>Solutions</th></tr></thead>
      <tbody>
        <tr><td class="m">sin x = 0.5</td><td class="m">2</td><td class="m">30°, 150°</td></tr>
        <tr><td class="m">cos x = 0.5</td><td class="m">2</td><td class="m">60°, 300°</td></tr>
        <tr><td class="m">tan x = 1</td><td class="m">2</td><td class="m">45°, 225°</td></tr>
        <tr><td class="m">sin x = −0.5</td><td class="m">2</td><td class="m">210°, 330°</td></tr>
        <tr><td class="m">sin x = 1</td><td class="m">1</td><td class="m">90°</td></tr>
        <tr><td class="m">sin x = 2</td><td class="m">0</td><td>none</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The calculator gives one solution; the graph gives all of them</span>
      ${m('sin⁻¹0.5 = 30°')} and the machine stops there. The second solution, ${m('150°')}, exists
      because the curve comes back down — and a question that asks for “all solutions in the interval”
      is testing exactly whether you drew the picture.</div>`
    },
    {
      h: 'Stretching the curve',
      html: `<p>This is the graph transformation work of Chapter I applied to a wave.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Curve</th><th>Amplitude</th><th>Period</th><th>Effect</th></tr></thead>
      <tbody>
        <tr><td class="m">y = sin x</td><td class="m">1</td><td class="m">360°</td><td>—</td></tr>
        <tr><td class="m">y = 3 sin x</td><td class="m">3</td><td class="m">360°</td><td>three times as tall</td></tr>
        <tr><td class="m">y = sin 2x</td><td class="m">1</td><td class="m">180°</td><td>twice as fast</td></tr>
        <tr><td class="m">y = 2 cos 3x</td><td class="m">2</td><td class="m">120°</td><td>both at once</td></tr>
        <tr><td class="m">y = sin x + 2</td><td class="m">1</td><td class="m">360°</td><td>lifted by ${m('2')}</td></tr>
      </tbody></table></div>
      <p>In general ${m('y = a sin bx')} has amplitude ${m('|a|')} and period ${m(f('360°', '|b|'))}. The
      coefficient outside stretches vertically; the coefficient inside squeezes horizontally — the
      reverse of what most learners first expect.</p>`
    }
  ],
  examples: [
    {
      q: 'Solve ' + m('sin x = 0.5') + ' for ' + m('0° ≤ x ≤ 360°') + '.',
      steps: [
        [m('sin⁻¹0.5 = 30°'), 'The calculator value.'],
        ['Sine is positive in quadrants I and II.', ''],
        ['The second solution is ' + m('180° − 30° = 150°') + '.', ''],
        [m('x = 30°') + ' or ' + m('x = 150°') + '.', '']
      ],
      ans: m('30°, 150°')
    },
    {
      q: 'State the amplitude and period of ' + m('y = 4 sin 3x') + ', and its first maximum point.',
      steps: [
        ['Amplitude ' + m('= |4| = 4') + '.', 'The outside coefficient.'],
        ['Period ' + m('= ' + f('360°', '3') + ' = 120°') + '.', 'The inside coefficient.'],
        ['The first maximum is a quarter of a period in: ' + m('x = 30°') + '.', ''],
        ['Maximum point ' + m('(30°, 4)') + '.', '']
      ],
      ans: 'Amplitude ' + m('4') + ', period ' + m('120°') + ', maximum ' + m('(30°, 4)')
    },
    {
      q: 'How many solutions has ' + m('cos x = 0.3') + ' for ' + m('0° ≤ x ≤ 720°') + '?',
      steps: [
        ['The period is ' + m('360°') + '.', ''],
        ['In one period the line ' + m('y = 0.3') + ' crosses twice.', ''],
        ['The interval is two periods long.', ''],
        [m('4') + ' solutions.', '']
      ],
      ans: m('4')
    }
  ],
  modelNote: 'Ask for all solutions of sin x = 0.5 before mentioning the graph; let the class produce only 30°, then draw the curve and let them find what they missed.',
  interactive: {
    type: 'graphTransform',
    title: 'a sin bx',
    hint: 'Change a and b and watch amplitude and period separately.'
  },
  quiz: [
    { q: 'The period of ' + m('y = tan x') + ':', a: [m('90°'), m('180°'), m('360°'), m('720°')], c: 1, why: 'It repeats twice as often as sine.' },
    { q: 'The amplitude of ' + m('y = 3 sin x') + ':', a: [m('1'), m('3'), m('6'), m('360°')], c: 1, why: 'The outside coefficient.' },
    { q: 'The period of ' + m('y = sin 2x') + ':', a: [m('90°'), m('180°'), m('360°'), m('720°')], c: 1, why: m(f('360°', '2')) + '.' },
    { q: m('sin x = 0.5') + ' in ' + m('[0°, 360°]') + ' has:', a: ['one solution', 'two solutions', 'three', 'none'], c: 1, why: 'The line crosses twice.' },
    { q: m('sin x = 2') + ' has:', a: ['one solution', 'two', 'no solution', 'infinitely many'], c: 2, why: 'The range is ' + m('[−1, 1]') + '.' },
    { q: m('y = tan x') + ' has asymptotes at:', a: [m('180°k'), m('90° + 180°k'), m('360°k'), 'none'], c: 1, why: 'Where ' + m('cos x = 0') + '.' }
  ],
  practice: {
    easy: [
      ['Period of ' + m('y = sin x'), m('360°')],
      ['Period of ' + m('y = tan x'), m('180°')],
      ['Range of ' + m('y = cos x'), m('[−1, 1]')],
      [m('y = cos x') + ' at ' + m('x = 0'), m('1')],
      ['Amplitude of ' + m('y = 5 sin x'), m('5')],
      ['Period of ' + m('y = sin 3x'), m('120°')],
      ['Is ' + m('y = cos x') + ' even or odd?', 'Even']
    ],
    med: [
      ['Solve ' + m('sin x = 0.5') + ' in ' + m('[0°, 360°]'), m('30°, 150°')],
      ['Solve ' + m('cos x = 0.5') + ' in ' + m('[0°, 360°]'), m('60°, 300°')],
      ['Solve ' + m('tan x = 1') + ' in ' + m('[0°, 360°]'), m('45°, 225°')],
      ['Solve ' + m('sin x = −0.5') + ' in ' + m('[0°, 360°]'), m('210°, 330°')],
      ['Amplitude and period of ' + m('y = 4 sin 3x'), m('4') + ' and ' + m('120°')],
      ['First maximum point of ' + m('y = 4 sin 3x'), m('(30°, 4)')],
      ['Solutions of ' + m('cos x = 0.3') + ' in ' + m('[0°, 720°]'), m('4')]
    ],
    hard: [
      ['Solve ' + m('cos x = −1') + ' in ' + m('[0°, 720°]'), m('180°, 540°')],
      ['Solve ' + m('2 sin x + 1 = 0') + ' in ' + m('[0°, 360°]'), m('210°, 330°')],
      ['Solve ' + m('sin 2x = 0.5') + ' in ' + m('[0°, 360°]'), m('15°, 75°, 195°, 255°')],
      ['Range of ' + m('y = 2 cos x + 1'), m('[−1, 3]')],
      ['Least value of ' + m('y = 3 − 2 sin x'), m('1')],
      ['Number of solutions of ' + m('tan x = 2') + ' in ' + m('[0°, 720°]'), m('4')],
      ['Write ' + m('y = cos x') + ' as a shifted sine curve', m('y = sin(x + 90°)')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Sketch the curve for every equation, even when you are sure of the answer.',
  homework: [
    'Sketch ' + m('y = sin x') + ' and ' + m('y = cos x') + ' for ' + m('0° ≤ x ≤ 360°') + ' on one pair of axes.',
    'Solve ' + m('cos x = −0.5') + ' for ' + m('0° ≤ x ≤ 360°') + '.',
    'State the amplitude and period of ' + m('y = 2 sin 4x') + '.',
    'How many solutions has ' + m('sin x = 0.8') + ' for ' + m('0° ≤ x ≤ 1080°') + '?',
    'Give the range of ' + m('y = 3 cos x − 1') + '.'
  ]
});

/* ============================== 35 ============================== */
G9_ALG.push({
  id: 'a9-35', stream: 'alg', grade: 9, quarter: 3, lessons: '67–68', hours: 2,
  title: 'Control work 5, and the trigonometry chapter closed',
  subtitle: 'Identities, addition, double angles and reduction — the whole of Chapter III in one paper.',
  uz: 'Algebra 9, Nazorat ishi 5', uzPage: 'pp. 114–166',
  cam: 'IGX 15 review', camPage: 'Core & Extended, pp. 328–382', wb: 'Control paper A5',
  objectives: [
    'Use the fundamental relations and a quadrant to find all four functions.',
    'Apply an addition or double-angle formula accurately under time.',
    'Reduce an angle to the first quadrant and evaluate it exactly.',
    'Classify each lost mark and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Identity', 'Ayniyat', 'Тождество'],
    ['Addition formula', 'Qo‘shish formulasi', 'Формула сложения'],
    ['Double angle', 'Ikkilangan burchak', 'Двойной угол'],
    ['Reduction formula', 'Keltirish formulasi', 'Формула приведения'],
    ['Exact value', 'Aniq qiymat', 'Точное значение'],
    ['Sum to product', 'Yig‘indini ko‘paytmaga', 'Сумма в произведение'],
    ['Revision', 'Takrorlash', 'Повторение']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [12, 'Answers'], [20, 'Diagnosis and rewrite'], [5, 'The map']],
  sections: [
    {
      h: 'The paper — 30 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>${m('cos α = −' + f('3', '5'))}, quadrant II: find ${m('sin α')} and ${m('tan α')}</td><td class="m">5</td><td>L49–50</td></tr>
        <tr><td>2</td><td>Prove ${m('tan α + cot α = ' + f('1', 'sin α cos α'))}</td><td class="m">5</td><td>L51–52</td></tr>
        <tr><td>3</td><td>Find ${m('cos 15°')} exactly</td><td class="m">5</td><td>L55–56</td></tr>
        <tr><td>4</td><td>${m('sin α = ' + f('5', '13'))} (I): find ${m('sin 2α')} and ${m('cos 2α')}</td><td class="m">6</td><td>L59–60</td></tr>
        <tr><td>5</td><td>Evaluate ${m('sin 225°')} and ${m('cos 750°')}</td><td class="m">5</td><td>L61–62</td></tr>
        <tr><td>6</td><td>Factorise ${m('sin 5x − sin x')}</td><td class="m">4</td><td>L63–64</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks actually go</div>
      Q1 carries two marks for the sign; Q2 one for stating the excluded values; Q3 one for
      rationalising; Q4 two for choosing the form of ${m('cos 2α')} that needs only ${m('sin α')};
      Q5 one for stripping the two whole turns before reducing.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>sign left as ${m('±')}</td><td class="m">sin α = ±${f('4', '5')}</td><td>quadrant II ⇒ positive</td></tr>
        <tr><td>identity proved both ways at once</td><td>cross-multiplying the statement</td><td>start on one side</td></tr>
        <tr><td>addition formula signs crossed</td><td class="m">cos 15° = cc + ss with a minus</td><td>cosine matches and flips</td></tr>
        <tr><td>surd not rationalised</td><td class="m">${f('1', '2 + ' + sr('3'))}</td><td>multiply by the conjugate</td></tr>
        <tr><td>wrong form of ${m('cos 2α')}</td><td>finding ${m('cos α')} unnecessarily</td><td class="m">1 − 2sin²α</td></tr>
        <tr><td>${m('sin 2α = 2 sin α')}</td><td class="m">${f('10', '13')}</td><td class="m">2 sin α cos α</td></tr>
        <tr><td>reduction sign from the new function</td><td class="m">cos(${f('π', '2')} + α) = sin α</td><td>ask about cosine, not sine</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'Chapter III as one map',
      html: `<p>Six boxes, and every arrow is a derivation the class has done:</p>
      <ul>
        <li><b>the unit circle</b> → <b>${m('sin²α + cos²α = 1')}</b> — “Pythagoras with hypotenuse 1”</li>
        <li><b>that identity, divided</b> → <b>${m('1 + tan²α')}</b> and <b>${m('1 + cot²α')}</b></li>
        <li><b>the addition formulae</b> → <b>${m('tan(α ± β)')}</b> — “divide one by the other”</li>
        <li><b>${m('β = α')}</b> → <b>the double angle</b> — “and three faces of ${m('cos 2α')}”</li>
        <li><b>${m('cos 2α')} read backwards</b> → <b>degree lowering</b> — “${m('sin²α = ' + f('1 − cos 2α', '2'))}”</li>
        <li><b>adding two addition formulae</b> → <b>sum to product</b> — “and hence factorising”</li>
      </ul>
      {{fig:unitCircle:One circle; every formula in the chapter is a statement about a point on it.}}
      <div class="keybox"><div class="klabel">Looking forward</div>
      Chapter IV changes subject entirely: sequences, arithmetic progressions and their sums. It needs
      nothing from trigonometry — but the habit of deriving rather than memorising, which this chapter
      was built to teach, is exactly what makes the progression formulae easy.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q1: ' + m('cos α = −' + f('3', '5')) + ' in quadrant II.',
      steps: [
        [m('sin²α = 1 − ' + f('9', '25') + ' = ' + f('16', '25')), ''],
        [m('sin α = ±' + f('4', '5')), 'The size.'],
        ['Quadrant II ⇒ ' + m('sin α = ' + f('4', '5')) + '.', 'The sign.'],
        [m('tan α = ' + f('4/5', '−3/5') + ' = −' + f('4', '3')), '']
      ],
      ans: m('sin α = ' + f('4', '5') + ', tan α = −' + f('4', '3'))
    },
    {
      q: 'Model answer, Q3: find ' + m('cos 15°') + '.',
      steps: [
        [m('15° = 45° − 30°'), ''],
        [m('cos 45° cos 30° + sin 45° sin 30°'), 'Match, flip: minus becomes plus.'],
        [m(f(sr('2'), '2') + ' · ' + f(sr('3'), '2') + ' + ' + f(sr('2'), '2') + ' · ' + f('1', '2')), ''],
        [m('= ' + f(sr('6') + ' + ' + sr('2'), '4')), '']
      ],
      ans: m(f(sr('6') + ' + ' + sr('2'), '4'))
    },
    {
      q: 'Model answer, Q4: ' + m('sin α = ' + f('5', '13')) + ' in quadrant I.',
      steps: [
        [m('cos α = ' + f('12', '13')), 'Quadrant I.'],
        [m('sin 2α = 2 · ' + f('5', '13') + ' · ' + f('12', '13') + ' = ' + f('120', '169')), ''],
        [m('cos 2α = 1 − 2 · ' + f('25', '169')), 'Only ' + m('sin α') + ' needed.'],
        [m('= ' + f('119', '169')), '']
      ],
      ans: m('sin 2α = ' + f('120', '169') + ', cos 2α = ' + f('119', '169'))
    }
  ],
  modelNote: 'Put a wrong reduction on the board — cos(π/2 + α) = sin α — and let the class find the error by asking the two questions rather than by consulting a table.',
  interactive: {
    type: 'quiz',
    title: 'Chapter III in twelve questions',
    hint: 'Two from each block.',
    items: [
      { q: m('1 + tan²α') + ' equals:', a: [m(f('1', 'sin²α')), m(f('1', 'cos²α')), m('sin²α'), m('1')], c: 1, why: 'Divide by ' + m('cos²α') + '.' },
      { q: 'To fix a sign you need:', a: ['the identity', 'the quadrant', 'a calculator', 'nothing'], c: 1, why: 'The identity gives only the size.' },
      { q: 'An identity is proved by working:', a: ['on both sides', 'on one side', 'by testing', 'by cross-multiplying'], c: 1, why: 'A one-way chain.' },
      { q: m('cos(−α)') + ' equals:', a: [m('cos α'), m('−cos α'), m('sin α'), m('−sin α')], c: 0, why: 'Cosine is even.' },
      { q: 'The least period of ' + m('tan α') + ':', a: [m(f('π', '2')), m('π'), m('2π'), m('4π')], c: 1, why: 'A half turn.' },
      { q: m('sin(α + β)') + ' equals:', a: [m('sin α + sin β'), m('sc + cs'), m('cc − ss'), m('2 sin α cos β')], c: 1, why: 'Mix, keep the sign.' },
      { q: m('cos(α − β)') + ' equals:', a: [m('cc − ss'), m('cc + ss'), m('sc + cs'), m('sc − cs')], c: 1, why: 'Match, flip.' },
      { q: m('tan(α + β)') + ' has denominator:', a: [m('1 + tan α tan β'), m('1 − tan α tan β'), m('tan α tan β'), m('1')], c: 1, why: 'Signs are crossed.' },
      { q: m('sin 2α') + ' equals:', a: [m('2 sin α'), m('2 sin α cos α'), m('sin²α'), m('1 − cos 2α')], c: 1, why: 'Set ' + m('β = α') + '.' },
      { q: m('sin²α') + ' equals:', a: [m(f('1 − cos 2α', '2')), m(f('1 + cos 2α', '2')), m(f('cos 2α', '2')), m('1 − cos 2α')], c: 0, why: 'Degree lowering.' },
      { q: m('cos(' + f('π', '2') + ' + α)') + ' equals:', a: [m('sin α'), m('−sin α'), m('cos α'), m('−cos α')], c: 1, why: 'Name changes; cosine is negative in II.' },
      { q: m('cos α − cos β') + ' equals:', a: [m('2 sin ' + f('α + β', '2') + ' sin ' + f('α − β', '2')), m('−2 sin ' + f('α + β', '2') + ' sin ' + f('α − β', '2')), m('2 cos ' + f('α + β', '2') + ' cos ' + f('α − β', '2')), m('cos(α − β)')], c: 1, why: 'The only formula with a minus.' }
    ]
  },
  quiz: [
    { q: 'Q1 loses marks most often for:', a: ['arithmetic', 'the sign', 'the formula', 'the units'], c: 1, why: 'The quadrant decides it.' },
    { q: 'Q2 must end with:', a: ['a decimal', 'the excluded values', 'a graph', 'a check'], c: 1, why: 'The restriction is part of the identity.' },
    { q: 'Q3 must end with:', a: ['a decimal', 'a rationalised surd', 'a fraction', 'a sketch'], c: 1, why: 'An unrationalised answer is unfinished.' },
    { q: 'The best form of ' + m('cos 2α') + ' in Q4:', a: [m('cos²α − sin²α'), m('1 − 2sin²α'), m('2cos²α − 1'), 'any'], c: 1, why: 'Only ' + m('sin α') + ' is given.' },
    { q: 'In Q5 the first step is:', a: ['reduce', 'strip whole turns', 'use parity', 'use a calculator'], c: 1, why: m('750° − 720°') + '.' },
    { q: 'Work on the mistakes means:', a: ['fix the wrong line', 'rewrite the solution', 'copy the answer', 'skip it'], c: 1, why: 'The whole solution, again.' }
  ],
  practice: {
    easy: [
      [m('cos α = −' + f('3', '5')) + ' (II): ' + m('sin α'), m(f('4', '5'))],
      ['Same: ' + m('tan α'), m('−' + f('4', '3'))],
      [m('cos 15°'), m(f(sr('6') + ' + ' + sr('2'), '4'))],
      [m('sin 225°'), m('−' + f(sr('2'), '2'))],
      [m('cos 750°'), m(f(sr('3'), '2'))],
      ['Factorise ' + m('sin 5x − sin x'), m('2 cos 3x sin 2x')],
      [m('tan α + cot α'), m(f('1', 'sin α cos α'))]
    ],
    med: [
      [m('sin α = ' + f('5', '13')) + ' (I): ' + m('sin 2α'), m(f('120', '169'))],
      ['Same: ' + m('cos 2α'), m(f('119', '169'))],
      [m('sin 15°'), m(f(sr('6') + ' − ' + sr('2'), '4'))],
      [m('tan 15°'), m('2 − ' + sr('3'))],
      ['Simplify ' + m('sin(π − α) + cos(' + f('π', '2') + ' + α)'), m('0')],
      ['Simplify ' + m('cos⁴α − sin⁴α'), m('cos 2α')],
      [m('sin 75° + sin 15°'), m(f(sr('6'), '2'))]
    ],
    hard: [
      ['Prove ' + m(f('sin 2α', '1 + cos 2α') + ' = tan α'), 'Use ' + m('2cos²α')],
      ['Prove ' + m('sin 3α = 3 sin α − 4 sin³α'), m('3α = 2α + α')],
      ['Solve ' + m('sin 3x + sin x = 0'), m('x = ' + f('πk', '2'))],
      [m('tan α = 2') + ': ' + m('tan 2α'), m('−' + f('4', '3'))],
      ['Simplify ' + m('(sin α + cos α)² + (sin α − cos α)²'), m('2')],
      [m('sin α + cos α = ' + f('7', '5')) + ': ' + m('sin 2α'), m(f('24', '25'))],
      ['Prove ' + m('cot α − tan α = 2 cot 2α'), 'Common denominator, then ' + m('sin 2α')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite in full every question that lost a mark before the next chapter begins.',
  homework: [
    'Given ' + m('sin α = −' + f('12', '13')) + ' in quadrant III, find ' + m('cos α') + ' and ' + m('tan 2α') + '.',
    'Find ' + m('sin 105°') + ' exactly.',
    'Evaluate ' + m('cos 240°') + ' and ' + m('sin 930°') + '.',
    'Prove ' + m(f('1 − cos 2α', 'sin 2α') + ' = tan α') + '.',
    'Factorise ' + m('cos 7x + cos 3x') + ' and solve ' + m('cos 7x + cos 3x = 0') + '.'
  ]
});

/* ============================== 36 ============================== */
G9_ALG.push({
  id: 'a9-36', stream: 'alg', grade: 9, quarter: 3, lessons: '69–71', hours: 3,
  title: 'Numerical sequences',
  subtitle: 'A function whose domain is the counting numbers — and the two ways of describing one.',
  uz: 'Algebra 9, §29', uzPage: 'pp. 167–173',
  cam: 'IGX 11.1–11.2', camPage: 'Core & Extended, pp. 220–228', wb: 'Exercise 11.1–11.2',
  objectives: [
    'Define a sequence and use the notation aₙ for its nth term.',
    'Describe a sequence by a formula for the nth term and by a recurrence.',
    'Find any term from either description, and continue a given sequence.',
    'Recognise increasing, decreasing, bounded and periodic sequences.'
  ],
  terms: [
    ['Sequence', 'Ketma-ketlik', 'Последовательность'],
    ['Term', 'Had', 'Член'],
    ['nth term', 'n-had', 'n-й член'],
    ['General term', 'Umumiy had', 'Общий член'],
    ['Recurrence relation', 'Rekurrent munosabat', 'Рекуррентное соотношение'],
    ['Increasing', 'O‘suvchi', 'Возрастающая'],
    ['Decreasing', 'Kamayuvchi', 'Убывающая'],
    ['Bounded', 'Chegaralangan', 'Ограниченная']
  ],
  timing: [[15, 'What a sequence is'], [30, 'Two descriptions'], [35, 'Finding terms'], [35, 'Behaviour'], [5, 'Homework']],
  sections: [
    {
      h: 'What a sequence is',
      html: `<p>A <b>numerical sequence</b> is a list of numbers in a fixed order:</p>
      ${eq(m('a₁, a₂, a₃, …, aₙ, …'), true)}
      <p>The subscript is the position, so ${m('a₁')} is the first term, ${m('a₅')} the fifth and
      ${m('aₙ')} the ${m('n')}th. Order matters: ${m('1, 2, 3')} and ${m('3, 2, 1')} are different
      sequences.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Sequence</th><th>First four terms</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td>natural numbers</td><td class="m">1, 2, 3, 4</td><td class="m">aₙ = n</td></tr>
        <tr><td>odd numbers</td><td class="m">1, 3, 5, 7</td><td class="m">aₙ = 2n − 1</td></tr>
        <tr><td>squares</td><td class="m">1, 4, 9, 16</td><td class="m">aₙ = n²</td></tr>
        <tr><td>powers of two</td><td class="m">2, 4, 8, 16</td><td class="m">aₙ = 2${p('', 'n')}</td></tr>
        <tr><td>alternating</td><td class="m">−1, 1, −1, 1</td><td class="m">aₙ = (−1)${p('', 'n')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A sequence is a function</div>
      ${m('aₙ')} is nothing but ${m('f(n)')} with the domain restricted to ${m('1, 2, 3, …')}. Everything
      learnt about functions in Chapter I — increasing, decreasing, bounded — applies unchanged, which is
      why this chapter follows that one.</div>`
    },
    {
      h: 'Two descriptions',
      html: `<div class="tablewrap"><table>
      <thead><tr><th></th><th>Formula for the ${m('n')}th term</th><th>Recurrence</th></tr></thead>
      <tbody>
        <tr><td>looks like</td><td class="m">aₙ = 2n − 1</td><td class="m">a₁ = 1, aₙ₊₁ = aₙ + 2</td></tr>
        <tr><td>gives ${m('a₁₀₀')}</td><td>at once</td><td>only after ${m('99')} steps</td></tr>
        <tr><td>shows the pattern</td><td>less clearly</td><td>very clearly</td></tr>
        <tr><td>needs</td><td>nothing</td><td>a starting value</td></tr>
      </tbody></table></div>
      <p>A <b>recurrence relation</b> says how to get from one term to the next; it is useless without
      the first term. ${m('aₙ₊₁ = aₙ + 2')} describes the odd numbers if ${m('a₁ = 1')} and the even
      numbers if ${m('a₁ = 2')}.</p>
      <p>The most famous recurrence needs two starting values:</p>
      ${eq(m('F₁ = 1, F₂ = 1, Fₙ₊₂ = Fₙ₊₁ + Fₙ') + '  —  ' + m('1, 1, 2, 3, 5, 8, 13, …'), true)}
      <div class="warn"><span class="wl">Continuing a pattern is a guess, not a definition</span>
      ${m('1, 2, 4, …')} may be ${m('2')} to a power, or the number of pieces a circle is cut into by
      ${m('n')} chords — which continues ${m('8, 16, 31')}. Cambridge questions say “the ${m('n')}th
      term is…” precisely to avoid this. When a question asks you to continue, give the rule you used.</div>`
    },
    {
      h: 'Finding terms',
      html: `<p>Three standard questions, and how each is done.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>Method</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>find ${m('a₇')}</td><td>substitute ${m('n = 7')}</td><td class="m">aₙ = n² − 1 ⇒ a₇ = 48</td></tr>
        <tr><td>is ${m('50')} a term?</td><td>solve ${m('aₙ = 50')} for ${m('n')}</td><td class="m">n² − 1 = 50 ⇒ n² = 51 — not a whole number, so no</td></tr>
        <tr><td>which term is ${m('99')}?</td><td>solve and keep ${m('n ∈ ℕ')}</td><td class="m">n² − 1 = 99 ⇒ n = 10</td></tr>
      </tbody></table></div>
      <p>The middle row is the one that carries marks: a number belongs to the sequence only if the
      equation gives a <b>positive whole</b> value of ${m('n')}.</p>
      {{fig:linearSequence:The terms of a sequence plotted against their position — a set of isolated points, never a curve.}}
      <div class="warn"><span class="wl">${m('n')} counts, so it is a positive integer</span>
      ${m('n = 7.2')} or ${m('n = −3')} means the number is not a term. Solving the equation is only
      half the work; checking that ${m('n')} is admissible is the other half.</div>`
    },
    {
      h: 'Behaviour',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Name</th><th>Means</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>increasing</td><td class="m">aₙ₊₁ > aₙ</td><td class="m">1, 3, 5, 7, …</td></tr>
        <tr><td>decreasing</td><td class="m">aₙ₊₁ < aₙ</td><td class="m">1, ${f('1', '2')}, ${f('1', '3')}, …</td></tr>
        <tr><td>bounded above</td><td class="m">aₙ ≤ M</td><td class="m">1 − ${f('1', 'n')} ≤ 1</td></tr>
        <tr><td>bounded below</td><td class="m">aₙ ≥ m</td><td class="m">n² ≥ 1</td></tr>
        <tr><td>periodic</td><td>repeats after a fixed number of steps</td><td class="m">1, −1, 1, −1, …</td></tr>
        <tr><td>constant</td><td class="m">aₙ = c</td><td class="m">5, 5, 5, …</td></tr>
      </tbody></table></div>
      <p>To decide between increasing and decreasing, form ${m('aₙ₊₁ − aₙ')} and look at its sign — which
      is exactly the test used for functions in Chapter I.</p>
      <div class="keybox"><div class="klabel">Bounded and monotonic together mean something</div>
      A sequence that increases but never passes a ceiling must settle down towards a value. That idea —
      the limit — is Grade 11 work, but it is already visible in ${m('1 − ' + f('1', 'n'))}, which climbs
      forever and never reaches ${m('1')}.</div>`
    }
  ],
  examples: [
    {
      q: 'Given ' + m('aₙ = 3n − 2') + ', find ' + m('a₁') + ', ' + m('a₅') + ' and ' + m('a₂₀') + '.',
      steps: [
        [m('a₁ = 3 · 1 − 2 = 1'), ''],
        [m('a₅ = 15 − 2 = 13'), ''],
        [m('a₂₀ = 60 − 2 = 58'), ''],
        ['The sequence is ' + m('1, 4, 7, 10, …') + '.', 'Each term is ' + m('3') + ' more.']
      ],
      ans: m('1, 13, 58')
    },
    {
      q: 'Is ' + m('100') + ' a term of ' + m('aₙ = n² − 1') + '?',
      steps: [
        ['Solve ' + m('n² − 1 = 100') + '.', ''],
        [m('n² = 101'), ''],
        [m('n = ' + sr('101') + ' ≈ 10.05') + ' — not a whole number.', ''],
        ['No: ' + m('100') + ' is not a term.', '']
      ],
      ans: 'No'
    },
    {
      q: 'A sequence has ' + m('a₁ = 2') + ' and ' + m('aₙ₊₁ = 2aₙ + 1') + '. Write the first five terms.',
      steps: [
        [m('a₂ = 2 · 2 + 1 = 5'), ''],
        [m('a₃ = 2 · 5 + 1 = 11'), ''],
        [m('a₄ = 2 · 11 + 1 = 23'), ''],
        [m('a₅ = 2 · 23 + 1 = 47'), '']
      ],
      ans: m('2, 5, 11, 23, 47')
    }
  ],
  modelNote: 'Write 1, 2, 4 on the board and ask for the next term; collect the different answers, then show that all of them can be justified — which is why a rule, not a pattern, defines a sequence.',
  interactive: {
    type: 'substitute',
    title: 'Terms from a formula',
    hint: 'Change n and watch the term.'
  },
  quiz: [
    { q: m('aₙ') + ' denotes:', a: ['the sum', 'the ' + m('n') + 'th term', 'the number of terms', 'the first term'], c: 1, why: 'The subscript is the position.' },
    { q: 'A recurrence relation needs:', a: ['nothing extra', 'a starting value', 'a graph', 'a limit'], c: 1, why: 'Otherwise it describes many sequences.' },
    { q: m('aₙ = 2n − 1') + ' gives ' + m('a₄') + ' =', a: [m('5'), m('7'), m('8'), m('9')], c: 1, why: m('8 − 1') + '.' },
    { q: m('n') + ' must be:', a: ['any real number', 'a positive integer', 'positive', 'an integer'], c: 1, why: 'It counts positions.' },
    { q: 'To test increasing, look at:', a: [m('aₙ'), m('aₙ₊₁ − aₙ'), m('a₁'), 'the graph only'], c: 1, why: 'The sign of the difference.' },
    { q: m('1, −1, 1, −1, …') + ' is:', a: ['increasing', 'decreasing', 'periodic', 'unbounded'], c: 2, why: 'It repeats every two terms.' }
  ],
  practice: {
    easy: [
      [m('aₙ = 3n − 2') + ': ' + m('a₁'), m('1')],
      ['Same: ' + m('a₅'), m('13')],
      [m('aₙ = n²') + ': ' + m('a₆'), m('36')],
      [m('aₙ = 2') + p('', 'n') + ': ' + m('a₅'), m('32')],
      [m('aₙ = (−1)') + p('', 'n') + ': ' + m('a₃'), m('−1')],
      ['Next term of ' + m('2, 5, 8, 11, …'), m('14')],
      ['Next term of ' + m('1, 4, 9, 16, …'), m('25')]
    ],
    med: [
      [m('aₙ = n² − 1') + ': ' + m('a₇'), m('48')],
      ['Is ' + m('100') + ' a term of ' + m('aₙ = n² − 1') + '?', 'No'],
      ['Which term of ' + m('aₙ = n² − 1') + ' is ' + m('99') + '?', 'The 10th'],
      [m('a₁ = 2, aₙ₊₁ = 2aₙ + 1') + ': first five terms', m('2, 5, 11, 23, 47')],
      [m('a₁ = 1, a₂ = 1, aₙ₊₂ = aₙ₊₁ + aₙ') + ': ' + m('a₇'), m('13')],
      ['Formula for ' + m('3, 5, 7, 9, …'), m('aₙ = 2n + 1')],
      ['Formula for ' + m('1, ' + f('1', '2') + ', ' + f('1', '3') + ', …'), m('aₙ = ' + f('1', 'n'))]
    ],
    hard: [
      ['Is ' + m('aₙ = ' + f('n', 'n + 1')) + ' increasing or decreasing?', 'Increasing'],
      ['Is it bounded?', 'Yes — between ' + m(f('1', '2')) + ' and ' + m('1')],
      ['Formula for ' + m('2, 6, 12, 20, 30, …'), m('aₙ = n(n + 1)')],
      ['Formula for ' + m('1, −2, 3, −4, …'), m('aₙ = (−1)') + p('', 'n+1') + m('n')],
      ['Which term of ' + m('aₙ = n² + n') + ' equals ' + m('132') + '?', 'The 11th'],
      ['Show ' + m('aₙ = 1 − ' + f('1', 'n')) + ' never reaches ' + m('1'), m(f('1', 'n') + ' > 0') + ' for all ' + m('n')],
      ['First term of ' + m('aₙ = n² − 20n') + ' that is positive', m('a₂₁ = 21')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'When you continue a sequence, always state the rule you used.',
  homework: [
    'Given ' + m('aₙ = 4n − 3') + ', write the first five terms and find ' + m('a₅₀') + '.',
    'Is ' + m('81') + ' a term of ' + m('aₙ = 2n + 1') + '? Which one?',
    'A sequence has ' + m('a₁ = 3') + ' and ' + m('aₙ₊₁ = 3aₙ − 2') + '. Write four terms.',
    'Find a formula for the ' + m('n') + 'th term of ' + m('5, 8, 11, 14, …') + '.',
    'Say whether ' + m('aₙ = ' + f('n + 1', 'n')) + ' is increasing or decreasing, and whether it is bounded.'
  ]
});

/* ============================== 37 ============================== */
G9_ALG.push({
  id: 'a9-37', stream: 'alg', grade: 9, quarter: 3, lessons: '72–74', hours: 3,
  title: 'The arithmetic progression',
  subtitle: 'Add the same number every time, and the nth term becomes a straight line in n.',
  uz: 'Algebra 9, §30', uzPage: 'pp. 174–180',
  cam: 'IGX 11.3', camPage: 'Core & Extended, pp. 229–234', wb: 'Exercise 11.3',
  objectives: [
    'Define an arithmetic progression and find its common difference.',
    'Use aₙ = a₁ + (n − 1)d in all four directions.',
    'Use the characteristic property 2aₙ = aₙ₋₁ + aₙ₊₁.',
    'Insert arithmetic means between two given numbers.'
  ],
  terms: [
    ['Arithmetic progression', 'Arifmetik progressiya', 'Арифметическая прогрессия'],
    ['Common difference', 'Ayirma', 'Разность'],
    ['First term', 'Birinchi had', 'Первый член'],
    ['Characteristic property', 'Xarakteristik xossa', 'Характеристическое свойство'],
    ['Arithmetic mean', 'O‘rta arifmetik', 'Среднее арифметическое'],
    ['Insert', 'Qo‘yish', 'Вставить'],
    ['Finite', 'Chekli', 'Конечная'],
    ['Infinite', 'Cheksiz', 'Бесконечная']
  ],
  timing: [[18, 'The definition'], [32, 'The nth term'], [35, 'The middle-term property'], [30, 'Applications'], [5, 'Homework']],
  sections: [
    {
      h: 'The definition',
      html: `<p>A sequence is an <b>arithmetic progression</b> if each term after the first is obtained by
      adding the same number ${m('d')}, called the <b>common difference</b>.</p>
      ${eq(m('aₙ₊₁ = aₙ + d') + '     equivalently     ' + m('d = aₙ₊₁ − aₙ'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Sequence</th><th class="m">a₁</th><th class="m">d</th><th>Behaviour</th></tr></thead>
      <tbody>
        <tr><td class="m">3, 7, 11, 15, …</td><td class="m">3</td><td class="m">4</td><td>increasing</td></tr>
        <tr><td class="m">20, 17, 14, 11, …</td><td class="m">20</td><td class="m">−3</td><td>decreasing</td></tr>
        <tr><td class="m">5, 5, 5, 5, …</td><td class="m">5</td><td class="m">0</td><td>constant</td></tr>
        <tr><td class="m">1, 2, 4, 8, …</td><td class="m">1</td><td>—</td><td>not an AP</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Check the difference at least twice</span>
      ${m('1, 3, 5, 9')} passes the test between the first pair and fails at the last. To prove a
      sequence is arithmetic you must show ${m('aₙ₊₁ − aₙ')} is the same for <b>every</b> ${m('n')} — in
      practice, by computing the difference in general, not on two examples.</div>`
    },
    {
      h: 'The nth term',
      html: `<p>Starting at ${m('a₁')} and adding ${m('d')} a total of ${m('n − 1')} times:</p>
      ${eq(m('aₙ = a₁ + (n − 1)d'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Find</th><th>How</th></tr></thead>
      <tbody>
        <tr><td class="m">a₁, d, n</td><td class="m">aₙ</td><td>substitute</td></tr>
        <tr><td class="m">a₁, d, aₙ</td><td class="m">n</td><td>solve a linear equation</td></tr>
        <tr><td class="m">a₁, aₙ, n</td><td class="m">d</td><td class="m">d = ${f('aₙ − a₁', 'n − 1')}</td></tr>
        <tr><td>two terms</td><td class="m">a₁, d</td><td>two equations, two unknowns</td></tr>
      </tbody></table></div>
      <p>The last row is the standard examination question. From ${m('a₃ = 11')} and ${m('a₈ = 31')}:
      subtracting gives ${m('5d = 20')}, so ${m('d = 4')} and ${m('a₁ = 11 − 2 · 4 = 3')}.</p>
      <div class="keybox"><div class="klabel">It is a straight line</div>
      ${m('aₙ = dn + (a₁ − d)')} is linear in ${m('n')}, with gradient ${m('d')}. Plotting the terms gives
      points on a straight line — which is why the difference of two terms is always a multiple of
      ${m('d')}, and why ${m('n − 1')}, not ${m('n')}, appears in the formula.</div>`
    },
    {
      h: 'The middle-term property',
      html: `<p>Every term except the first is the average of its two neighbours:</p>
      ${eq(m('aₙ = ' + f('aₙ₋₁ + aₙ₊₁', '2')) + '     that is     ' + m('2aₙ = aₙ₋₁ + aₙ₊₁'), true)}
      <p>This is the <b>characteristic property</b>: a sequence is arithmetic <b>if and only if</b> it
      holds for every ${m('n > 1')}. It is therefore the standard way to prove that something is an AP,
      and the standard way to fill a gap.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>Using the property</th></tr></thead>
      <tbody>
        <tr><td class="m">7, x, 19</td><td class="m">2x = 26 ⇒ x = 13</td></tr>
        <tr><td class="m">x, 12, 3x</td><td class="m">24 = x + 3x ⇒ x = 6</td></tr>
        <tr><td>is ${m('log 2, log 4, log 8')} an AP?</td><td class="m">2 log 4 = log 16 = log 2 + log 8</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Why it is called the arithmetic mean</div>
      ${m(f('a + b', '2'))} is the arithmetic mean of ${m('a')} and ${m('b')} — the same quantity that
      appeared in the inequality ${m(f('a + b', '2') + ' ≥ ' + sr('ab'))} last quarter. The progression
      is named after the mean, not the other way round.</div>`
    },
    {
      h: 'Applications',
      html: `<p><b>Inserting means.</b> To put ${m('k')} terms between ${m('a')} and ${m('b')} so that the
      whole list is an AP, there are ${m('k + 1')} steps from ${m('a')} to ${m('b')}, so
      ${m('d = ' + f('b − a', 'k + 1'))}.</p>
      <p><b>Counting terms.</b> How many multiples of ${m('7')} lie between ${m('100')} and ${m('500')}?
      The first is ${m('105')}, the last ${m('497')}, and ${m('497 = 105 + (n − 1) · 7')} gives
      ${m('n = 57')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Situation</th><th>The AP</th></tr></thead>
      <tbody>
        <tr><td>a salary rising by a fixed amount</td><td class="m">a₁ = start, d = rise</td></tr>
        <tr><td>seats increasing by ${m('2')} per row</td><td class="m">d = 2</td></tr>
        <tr><td>a stack of logs, one fewer each layer</td><td class="m">d = −1</td></tr>
        <tr><td>simple interest</td><td>${m('d')} is the annual interest</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('n')} must come out a positive whole number</span>
      In a counting question a fractional ${m('n')} means the number you chose is not a term of the
      progression — usually because the first or last term was picked wrongly. Check both ends before
      dividing.</div>`
    }
  ],
  examples: [
    {
      q: 'In an AP, ' + m('a₃ = 11') + ' and ' + m('a₈ = 31') + '. Find ' + m('a₁') + ', ' + m('d') + ' and ' + m('a₂₀') + '.',
      steps: [
        [m('a₈ − a₃ = 5d = 20'), 'Five steps apart.'],
        [m('d = 4'), ''],
        [m('a₁ = a₃ − 2d = 11 − 8 = 3'), ''],
        [m('a₂₀ = 3 + 19 · 4 = 79'), '']
      ],
      ans: m('a₁ = 3, d = 4, a₂₀ = 79')
    },
    {
      q: 'How many multiples of ' + m('7') + ' lie between ' + m('100') + ' and ' + m('500') + '?',
      steps: [
        ['First: ' + m('105') + '. Last: ' + m('497') + '.', ''],
        [m('497 = 105 + (n − 1) · 7'), ''],
        [m('392 = 7(n − 1) ⇒ n − 1 = 56'), ''],
        [m('n = 57'), '']
      ],
      ans: m('57')
    },
    {
      q: 'Insert four numbers between ' + m('2') + ' and ' + m('17') + ' so that all six form an AP.',
      steps: [
        ['There are ' + m('5') + ' steps from ' + m('2') + ' to ' + m('17') + '.', m('k + 1 = 5') + '.'],
        [m('d = ' + f('15', '5') + ' = 3'), ''],
        ['The terms: ' + m('2, 5, 8, 11, 14, 17') + '.', ''],
        ['Check: the difference is ' + m('3') + ' throughout ✓', '']
      ],
      ans: m('5, 8, 11, 14')
    }
  ],
  modelNote: 'Ask why the formula has n − 1 rather than n; getting the class to count the steps from a₁ to a₄ on their fingers prevents the commonest error of the whole chapter.',
  interactive: {
    type: 'substitute',
    title: 'a₁, d and the nth term',
    hint: 'Change d and watch the straight line tilt.'
  },
  quiz: [
    { q: 'In an AP, ' + m('d') + ' equals:', a: [m('aₙ aₙ₊₁'), m('aₙ₊₁ − aₙ'), m(f('aₙ₊₁', 'aₙ')), m('a₁')], c: 1, why: 'The common difference.' },
    { q: m('aₙ') + ' equals:', a: [m('a₁ + nd'), m('a₁ + (n − 1)d'), m('a₁ d') + p('', 'n−1'), m('a₁ − nd')], c: 1, why: m('n − 1') + ' steps.' },
    { q: m('3, 7, 11, …') + ' has ' + m('a₁₀') + ' =', a: [m('39'), m('40'), m('43'), m('47')], c: 0, why: m('3 + 9 · 4') + '.' },
    { q: 'The characteristic property is:', a: [m('aₙ² = aₙ₋₁ aₙ₊₁'), m('2aₙ = aₙ₋₁ + aₙ₊₁'), m('aₙ = a₁ + d'), m('aₙ = nd')], c: 1, why: 'Each term is the average of its neighbours.' },
    { q: 'To insert ' + m('4') + ' terms between ' + m('2') + ' and ' + m('17') + ', ' + m('d') + ' is:', a: [m('3'), m(f('15', '4')), m('4'), m('5')], c: 0, why: 'Five steps.' },
    { q: m('20, 17, 14, …') + ' is:', a: ['increasing', 'decreasing', 'constant', 'not an AP'], c: 1, why: m('d = −3') + '.' }
  ],
  practice: {
    easy: [
      [m('d') + ' of ' + m('3, 7, 11, …'), m('4')],
      [m('d') + ' of ' + m('20, 17, 14, …'), m('−3')],
      [m('a₁ = 5, d = 3') + ': ' + m('a₄'), m('14')],
      [m('a₁ = 2, d = 6') + ': ' + m('a₁₀'), m('56')],
      [m('3, 7, 11, …') + ': ' + m('a₁₀'), m('39')],
      ['Middle term of ' + m('7, x, 19'), m('13')],
      ['Is ' + m('5, 5, 5, …') + ' an AP?', 'Yes, ' + m('d = 0')]
    ],
    med: [
      [m('a₃ = 11, a₈ = 31') + ': ' + m('d'), m('4')],
      ['Same: ' + m('a₁'), m('3')],
      ['Same: ' + m('a₂₀'), m('79')],
      [m('a₁ = 4, aₙ = 49, d = 5') + ': ' + m('n'), m('10')],
      ['Insert four numbers between ' + m('2') + ' and ' + m('17'), m('5, 8, 11, 14')],
      ['Multiples of ' + m('7') + ' between ' + m('100') + ' and ' + m('500'), m('57')],
      ['Find ' + m('x') + ' if ' + m('x, 12, 3x') + ' is an AP', m('6')]
    ],
    hard: [
      [m('a₅ = 17, a₁₂ = 45') + ': ' + m('a₁'), m('1')],
      ['Which term of ' + m('7, 11, 15, …') + ' equals ' + m('107') + '?', 'The 26th'],
      ['Is ' + m('200') + ' a term of ' + m('3, 7, 11, …') + '?', 'No — ' + m('n') + ' is not whole'],
      ['Three numbers in AP have sum ' + m('21') + ' and product ' + m('231'), m('3, 7, 11')],
      ['How many two-digit multiples of ' + m('4') + ' are there?', m('22')],
      ['In an AP, ' + m('a₄ + a₉ = 30') + '. Find ' + m('a₆ + a₇'), m('30')],
      ['Prove ' + m('log 2, log 4, log 8') + ' is an AP', m('2 log 4 = log 2 + log 8')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write ' + m('a₁') + ' and ' + m('d') + ' at the top of every solution before doing anything else.',
  homework: [
    'In an AP, ' + m('a₁ = 6') + ' and ' + m('d = 5') + '. Find ' + m('a₁₅') + ' and say which term equals ' + m('106') + '.',
    'Given ' + m('a₄ = 14') + ' and ' + m('a₉ = 34') + ', find ' + m('a₁') + ' and ' + m('d') + '.',
    'Insert three numbers between ' + m('4') + ' and ' + m('24') + ' to make an AP.',
    'How many multiples of ' + m('6') + ' lie between ' + m('50') + ' and ' + m('400') + '?',
    'Find ' + m('x') + ' if ' + m('2x − 1, x + 4, 3x + 1') + ' form an AP.'
  ]
});

/* ============================== 38 ============================== */
G9_ALG.push({
  id: 'a9-38', stream: 'alg', grade: 9, quarter: 3, lessons: '75–76', hours: 2,
  title: 'The sum of the first n terms of an arithmetic progression',
  subtitle: 'Gauss pairs the ends, and a sum of a hundred terms becomes one multiplication.',
  uz: 'Algebra 9, §31', uzPage: 'pp. 181–187',
  cam: 'IGX 11.4', camPage: 'Core & Extended, pp. 235–240', wb: 'Exercise 11.4',
  objectives: [
    'Derive Sₙ = n(a₁ + aₙ)/2 by writing the sum forwards and backwards.',
    'Use both forms of the formula and choose the right one.',
    'Solve for n when the sum is given, rejecting inadmissible roots.',
    'Apply the formula to counting and word problems.'
  ],
  terms: [
    ['Sum of n terms', 'n ta hadning yig‘indisi', 'Сумма n членов'],
    ['Partial sum', 'Qismiy yig‘indi', 'Частичная сумма'],
    ['Pairing', 'Juftlash', 'Разбиение на пары'],
    ['Quadratic in n', 'n ga nisbatan kvadrat', 'Квадратное относительно n'],
    ['Admissible root', 'Joiz ildiz', 'Допустимый корень'],
    ['Reject', 'Rad etish', 'Отбросить'],
    ['Word problem', 'Matnli masala', 'Текстовая задача'],
    ['Total', 'Jami', 'Итого']
  ],
  timing: [[16, 'Gauss’s trick'], [20, 'Two forms'], [24, 'Solving for n'], [16, 'Word problems'], [4, 'Homework']],
  sections: [
    {
      h: 'Gauss’s trick',
      html: `<p>Write the sum forwards, and underneath it the same sum backwards:</p>
      ${eq(m('Sₙ = a₁ + a₂ + … + aₙ₋₁ + aₙ'), false)}
      ${eq(m('Sₙ = aₙ + aₙ₋₁ + … + a₂ + a₁'), false)}
      <p>Add the two lines column by column. In an AP each column has the same total, because going one
      step forward in the top row is matched by one step back in the bottom one:</p>
      ${eq(m('2Sₙ = n(a₁ + aₙ)') + '  ⟹  ' + m('Sₙ = ' + f('n(a₁ + aₙ)', '2')), true)}
      <div class="keybox"><div class="klabel">The schoolboy and the hundred numbers</div>
      The story that Gauss summed ${m('1')} to ${m('100')} in seconds by pairing ${m('1 + 100')},
      ${m('2 + 99')}, … is exactly this proof: fifty pairs, each worth ${m('101')}, giving ${m('5050')}.
      The formula above is that idea written for any progression.</div>`
    },
    {
      h: 'Two forms',
      html: `<p>Substituting ${m('aₙ = a₁ + (n − 1)d')} into the first form gives the second:</p>
      ${eq(m('Sₙ = ' + f('n(a₁ + aₙ)', '2')) + '     ' + m('Sₙ = ' + f('n[2a₁ + (n − 1)d]', '2')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Use the first when</th><th>Use the second when</th></tr></thead>
      <tbody>
        <tr><td>the last term is given</td><td>the common difference is given</td></tr>
        <tr><td>the ends are known</td><td>only the start and the step are known</td></tr>
        <tr><td>counting a finished list</td><td>${m('n')} is the unknown</td></tr>
      </tbody></table></div>
      <p><b>Example.</b> ${m('a₁ = 3')}, ${m('d = 4')}, ${m('n = 20')}. The second form gives
      ${m('S₂₀ = ' + f('20(6 + 19 · 4)', '2') + ' = 10 · 82 = 820')}.</p>
      <div class="warn"><span class="wl">Do not mix the two forms</span>
      ${m(f('n(2a₁ + aₙ)', '2'))} is neither of them and is always wrong. Decide which form you are
      using, write it out in full, and only then substitute.</div>`
    },
    {
      h: 'Solving for n',
      html: `<p>The second form is a <b>quadratic in ${m('n')}</b>, so a question that gives ${m('Sₙ')}
      and asks for ${m('n')} produces a quadratic equation — and Chapter I comes back into use.</p>
      <p><b>Example.</b> ${m('a₁ = 3')}, ${m('d = 4')}, ${m('Sₙ = 210')}. Then</p>
      ${eq(m(f('n[6 + 4(n − 1)]', '2') + ' = 210') + '  ⟹  ' + m('n(4n + 2) = 420') + '  ⟹  ' + m('2n² + n − 210 = 0'), true)}
      <p>The roots are ${m('n = 10')} and ${m('n = −10.5')}. A number of terms cannot be negative or
      fractional, so ${m('n = 10')}.</p>
      <div class="warn"><span class="wl">Rejecting the second root is part of the answer</span>
      Writing “${m('n = 10')} or ${m('n = −10.5')}” loses a mark. Write ${m('n = 10')}, and one short
      sentence saying that the other root is rejected because ${m('n')} counts terms.</div>`
    },
    {
      h: 'Word problems',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>The progression</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>${m('1 + 2 + … + 100')}</td><td class="m">a₁ = 1, aₙ = 100, n = 100</td><td class="m">5050</td></tr>
        <tr><td>sum of the first ${m('n')} odd numbers</td><td class="m">a₁ = 1, d = 2</td><td class="m">n²</td></tr>
        <tr><td>a theatre: ${m('20')} seats in row 1, ${m('2')} more each row, ${m('15')} rows</td><td class="m">a₁ = 20, d = 2, n = 15</td><td class="m">510</td></tr>
        <tr><td>saving ${m('100')} the first month, ${m('50')} more each month, for a year</td><td class="m">a₁ = 100, d = 50, n = 12</td><td class="m">4500</td></tr>
      </tbody></table></div>
      <p>The second row is worth remembering on its own: the sum of the first ${m('n')} odd numbers is
      exactly ${m('n²')}. It is the neatest small theorem in the chapter, and it can be seen at once by
      arranging counters in a square.</p>
      <div class="keybox"><div class="klabel">Name ${m('a₁')}, ${m('d')} and ${m('n')} first</div>
      Almost every word problem in this section is solved the moment those three numbers are written
      down. Extracting them from the sentence is the whole difficulty; the arithmetic afterwards is
      one line.</div>`
    }
  ],
  examples: [
    {
      q: 'Find ' + m('S₂₀') + ' for the AP ' + m('3, 7, 11, …') + '.',
      steps: [
        [m('a₁ = 3, d = 4, n = 20'), ''],
        [m('S₂₀ = ' + f('20[6 + 19 · 4]', '2')), 'The second form.'],
        [m('= 10 · 82'), ''],
        [m('= 820'), '']
      ],
      ans: m('820')
    },
    {
      q: 'For ' + m('a₁ = 3') + ', ' + m('d = 4') + ', how many terms give a sum of ' + m('210') + '?',
      steps: [
        [m(f('n[6 + 4(n − 1)]', '2') + ' = 210'), ''],
        [m('n(4n + 2) = 420 ⇒ 2n² + n − 210 = 0'), ''],
        [m('n = 10') + ' or ' + m('n = −10.5') + '.', ''],
        [m('n = 10') + '; the other root is rejected.', m('n') + ' counts terms.']
      ],
      ans: m('n = 10')
    },
    {
      q: 'A theatre has ' + m('20') + ' seats in the first row and ' + m('2') + ' more in each next row. How many seats in ' + m('15') + ' rows?',
      steps: [
        [m('a₁ = 20, d = 2, n = 15'), ''],
        [m('a₁₅ = 20 + 14 · 2 = 48'), ''],
        [m('S₁₅ = ' + f('15(20 + 48)', '2')), 'The first form.'],
        [m('= ' + f('15 · 68', '2') + ' = 510'), '']
      ],
      ans: m('510') + ' seats'
    }
  ],
  modelNote: 'Ask the class to add 1 to 100 before showing any formula; the pairing they invent is the proof, and they will not forget a formula they built.',
  interactive: {
    type: 'substitute',
    title: 'Sₙ as n grows',
    hint: 'The sum grows like n², not like n.'
  },
  quiz: [
    { q: m('Sₙ') + ' equals:', a: [m(f('n(a₁ + aₙ)', '2')), m('n(a₁ + aₙ)'), m(f('a₁ + aₙ', '2')), m('naₙ')], c: 0, why: 'Pair the ends.' },
    { q: 'The other form is:', a: [m(f('n[2a₁ + nd]', '2')), m(f('n[2a₁ + (n − 1)d]', '2')), m(f('n[a₁ + d]', '2')), m('na₁ + d')], c: 1, why: 'Substitute ' + m('aₙ') + '.' },
    { q: m('1 + 2 + … + 100') + ' equals:', a: [m('5000'), m('5050'), m('5100'), m('10100')], c: 1, why: 'Fifty pairs of ' + m('101') + '.' },
    { q: 'The sum of the first ' + m('n') + ' odd numbers is:', a: [m('n'), m('n²'), m('2n'), m('n(n+1)')], c: 1, why: 'A square of counters.' },
    { q: 'Given ' + m('Sₙ') + ', finding ' + m('n') + ' needs:', a: ['a linear equation', 'a quadratic equation', 'a graph', 'a calculator'], c: 1, why: m('Sₙ') + ' is quadratic in ' + m('n') + '.' },
    { q: 'A negative root for ' + m('n') + ' is:', a: ['kept', 'rejected', 'halved', 'squared'], c: 1, why: m('n') + ' counts terms.' }
  ],
  practice: {
    easy: [
      [m('S₁₀') + ' of ' + m('1, 2, 3, …'), m('55')],
      [m('1 + 2 + … + 100'), m('5050')],
      [m('S₅') + ' of ' + m('2, 5, 8, …'), m('40')],
      [m('a₁ = 3, d = 4, n = 20') + ': ' + m('S₂₀'), m('820')],
      ['Sum of the first ' + m('7') + ' odd numbers', m('49')],
      [m('S₄') + ' of ' + m('10, 8, 6, …'), m('28')],
      [m('a₁ = 1, aₙ = 19, n = 10') + ': ' + m('Sₙ'), m('100')]
    ],
    med: [
      [m('a₁ = 5, d = 3, n = 12') + ': ' + m('S₁₂'), m('258')],
      [m('a₁ = 3, d = 4, Sₙ = 210') + ': ' + m('n'), m('10')],
      ['Sum of all two-digit numbers', m('4905')],
      ['Sum of multiples of ' + m('7') + ' below ' + m('100'), m('735')],
      ['A theatre: ' + m('20') + ' seats, ' + m('+2') + ' a row, ' + m('15') + ' rows', m('510')],
      ['Saving ' + m('100') + ', then ' + m('+50') + ' a month, for ' + m('12') + ' months', m('4500')],
      [m('S₂₀') + ' of ' + m('50, 47, 44, …'), m('430')]
    ],
    hard: [
      [m('a₃ = 11, a₈ = 31') + ': ' + m('S₁₅'), m('465')],
      ['How many terms of ' + m('2, 5, 8, …') + ' give a sum of ' + m('155') + '?', m('10')],
      [m('S₅ = 40') + ' and ' + m('S₁₀ = 155') + ': find ' + m('a₁') + ' and ' + m('d'), m('a₁ = 2, d = 3')],
      ['Sum of the odd numbers between ' + m('1') + ' and ' + m('99'), m('2500')],
      ['Prove the sum of the first ' + m('n') + ' odd numbers is ' + m('n²'), m(f('n(1 + 2n − 1)', '2'))],
      ['A stack: ' + m('30') + ' logs at the bottom, one fewer each layer, ' + m('20') + ' layers', m('410')],
      ['For which ' + m('n') + ' is ' + m('Sₙ') + ' of ' + m('20, 17, 14, …') + ' greatest?', m('n = 7') + ', ' + m('S₇ = 77')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'State which of the two forms you are using before substituting anything.',
  homework: [
    'Find ' + m('S₁₅') + ' for the AP ' + m('4, 9, 14, …') + '.',
    'Find the sum of all multiples of ' + m('5') + ' between ' + m('1') + ' and ' + m('200') + '.',
    'For ' + m('a₁ = 2') + ' and ' + m('d = 3') + ', how many terms give a sum of ' + m('155') + '?',
    'A row of trees: ' + m('12') + ' in the first row, ' + m('3') + ' more in each next, ' + m('10') + ' rows. How many trees?',
    'Given ' + m('S₄ = 26') + ' and ' + m('S₈ = 100') + ', find ' + m('a₁') + ' and ' + m('d') + '.'
  ]
});

/* ============================== 39 ============================== */
G9_ALG.push({
  id: 'a9-39', stream: 'alg', grade: 9, quarter: 3, lessons: '77–78', hours: 2,
  title: 'Control work 6, and the quarter reviewed',
  subtitle: 'Trigonometric formulae and arithmetic progressions in one paper, before the third quarter closes.',
  uz: 'Algebra 9, Nazorat ishi 6', uzPage: 'pp. 167–187',
  cam: 'IGX 11 review', camPage: 'Core & Extended, pp. 220–240', wb: 'Control paper A6',
  objectives: [
    'Find a term and a sum of an arithmetic progression under time.',
    'Solve for n from a given sum, rejecting the inadmissible root.',
    'Apply a trigonometric formula from Chapter III accurately.',
    'Classify each lost mark and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Arithmetic progression', 'Arifmetik progressiya', 'Арифметическая прогрессия'],
    ['Common difference', 'Ayirma', 'Разность'],
    ['Sum of n terms', 'n ta hadning yig‘indisi', 'Сумма n членов'],
    ['Recurrence', 'Rekurrent munosabat', 'Рекуррентное соотношение'],
    ['Admissible root', 'Joiz ildiz', 'Допустимый корень'],
    ['Word problem', 'Matnli masala', 'Текстовая задача'],
    ['Revision', 'Takrorlash', 'Повторение']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [12, 'Answers'], [20, 'Diagnosis and rewrite'], [5, 'The quarter']],
  sections: [
    {
      h: 'The paper — 30 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Write the first four terms of ${m('aₙ = 3n + 1')} and of ${m('a₁ = 2, aₙ₊₁ = 2aₙ − 1')}</td><td class="m">4</td><td>L69–71</td></tr>
        <tr><td>2</td><td>In an AP, ${m('a₄ = 14')} and ${m('a₉ = 34')}: find ${m('a₁')} and ${m('d')}</td><td class="m">5</td><td>L72–74</td></tr>
        <tr><td>3</td><td>Find ${m('S₁₅')} for ${m('4, 9, 14, …')}</td><td class="m">5</td><td>L75–76</td></tr>
        <tr><td>4</td><td>For ${m('a₁ = 2')}, ${m('d = 3')}, find ${m('n')} with ${m('Sₙ = 155')}</td><td class="m">6</td><td>L75–76</td></tr>
        <tr><td>5</td><td>Evaluate ${m('sin 150° + cos 300°')}</td><td class="m">5</td><td>L61–62</td></tr>
        <tr><td>6</td><td>${m('sin α = ' + f('3', '5'))} (I): find ${m('sin 2α')}</td><td class="m">5</td><td>L59–60</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks actually go</div>
      Q2 carries one mark for using the gap of five steps rather than solving two full equations; Q4 two
      marks for forming the quadratic and one for rejecting the negative root; Q5 one for stating the
      reduction used; Q6 one for finding ${m('cos α')} before substituting.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>recurrence applied to ${m('n')} instead of ${m('aₙ')}</td><td class="m">2, 3, 5, 7</td><td class="m">a₄ = 2 · 5 − 1 = 9</td></tr>
        <tr><td class="m">n</td><td class="m">a₁ + nd</td><td class="m">a₁ + (n − 1)d</td></tr>
        <tr><td>forms of ${m('Sₙ')} mixed</td><td class="m">${f('n(2a₁ + aₙ)', '2')}</td><td>pick one form and write it out</td></tr>
        <tr><td>negative root kept</td><td class="m">n = 10 or −10.3</td><td>reject, and say why</td></tr>
        <tr><td>reduction sign wrong</td><td class="m">cos 300° = −${f('1', '2')}</td><td>quadrant IV: cosine is positive</td></tr>
        <tr><td class="m">sin 2α = 2 sin α</td><td class="m">${f('6', '5')}</td><td class="m">2 sin α cos α</td></tr>
        <tr><td>no units or no sentence</td><td class="m">510</td><td>“510 seats”</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'The quarter in one page',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Block</th><th>The sentence</th></tr></thead>
      <tbody>
        <tr><td>relations</td><td>one function and a quadrant give all four</td></tr>
        <tr><td>identities</td><td>one side only, and head for sines and cosines</td></tr>
        <tr><td>parity and period</td><td>strip whole turns, then use ${m('−α')}</td></tr>
        <tr><td>addition formulae</td><td>sine mixes and keeps the sign; cosine matches and flips it</td></tr>
        <tr><td>double angle</td><td>set ${m('β = α')}; three faces of ${m('cos 2α')}</td></tr>
        <tr><td>reduction</td><td>two questions: does the name change, and what is the sign?</td></tr>
        <tr><td>sum to product</td><td>half-sum and half-difference, so that you can factorise</td></tr>
        <tr><td>sequences</td><td>a function of ${m('n')}, given by a formula or a recurrence</td></tr>
        <tr><td>arithmetic progression</td><td class="m">aₙ = a₁ + (n − 1)d</td></tr>
        <tr><td>its sum</td><td class="m">Sₙ = ${f('n(a₁ + aₙ)', '2')} — pair the ends</td></tr>
      </tbody></table></div>
      {{fig:linearSequence:An arithmetic progression plotted: the terms lie on a straight line of gradient d.}}
      <div class="keybox"><div class="klabel">Looking forward</div>
      Quarter IV keeps the same shape and changes the operation: the geometric progression multiplies
      where the arithmetic one adds. Everything — the ${m('n')}th term, the characteristic property, the
      sum — has a geometric twin, and the last part of the year adds probability.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q2: ' + m('a₄ = 14') + ', ' + m('a₉ = 34') + '.',
      steps: [
        [m('a₉ − a₄ = 5d = 20'), 'Five steps apart.'],
        [m('d = 4'), ''],
        [m('a₁ = a₄ − 3d = 14 − 12 = 2'), ''],
        [m('a₁ = 2, d = 4'), '']
      ],
      ans: m('a₁ = 2, d = 4')
    },
    {
      q: 'Model answer, Q4: ' + m('a₁ = 2') + ', ' + m('d = 3') + ', ' + m('Sₙ = 155') + '.',
      steps: [
        [m(f('n[4 + 3(n − 1)]', '2') + ' = 155'), ''],
        [m('n(3n + 1) = 310 ⇒ 3n² + n − 310 = 0'), ''],
        [m('n = 10') + ' or ' + m('n = −' + f('31', '3')) + '.', ''],
        [m('n = 10') + '; the negative root is rejected.', m('n') + ' counts terms.']
      ],
      ans: m('n = 10')
    },
    {
      q: 'Model answer, Q5: evaluate ' + m('sin 150° + cos 300°') + '.',
      steps: [
        [m('sin 150° = sin(180° − 30°) = sin 30°'), 'Name stays; quadrant II.'],
        [m('= ' + f('1', '2')), ''],
        [m('cos 300° = cos(360° − 60°) = cos 60°'), 'Quadrant IV: cosine positive.'],
        [m(f('1', '2') + ' + ' + f('1', '2') + ' = 1'), '']
      ],
      ans: m('1')
    }
  ],
  modelNote: 'Mark Q4 aloud: read out a solution that keeps both roots, and let the class say what the sentence about n counting terms is worth.',
  interactive: {
    type: 'quiz',
    title: 'Quarter III in twelve questions',
    hint: 'Trigonometry and progressions, alternating.',
    items: [
      { q: m('1 + tan²α') + ' equals:', a: [m(f('1', 'cos²α')), m(f('1', 'sin²α')), m('cos²α'), m('1')], c: 0, why: 'Divide the first relation.' },
      { q: m('cos(−α)') + ' equals:', a: [m('−cos α'), m('cos α'), m('sin α'), m('−sin α')], c: 1, why: 'Cosine is even.' },
      { q: m('sin(α − β)') + ' equals:', a: [m('sc + cs'), m('sc − cs'), m('cc − ss'), m('cc + ss')], c: 1, why: 'Mix, keep the sign.' },
      { q: m('cos 2α') + ' in terms of ' + m('sin α') + ':', a: [m('1 − 2sin²α'), m('2sin²α − 1'), m('1 + 2sin²α'), m('2 − sin²α')], c: 0, why: 'The third face.' },
      { q: m('sin(π − α)') + ' equals:', a: [m('sin α'), m('−sin α'), m('cos α'), m('−cos α')], c: 0, why: 'Name stays; quadrant II.' },
      { q: m('sin α + sin β') + ' equals:', a: [m('2 sin ' + f('α + β', '2') + ' cos ' + f('α − β', '2')), m('2 cos ' + f('α + β', '2') + ' sin ' + f('α − β', '2')), m('sin(α + β)'), m('2 sin α sin β')], c: 0, why: 'Sum to product.' },
      { q: 'A recurrence needs:', a: ['nothing', 'a starting value', 'a limit', 'a graph'], c: 1, why: 'Otherwise it is ambiguous.' },
      { q: m('aₙ') + ' of an AP equals:', a: [m('a₁ + nd'), m('a₁ + (n − 1)d'), m('a₁ d') + p('', 'n'), m('nd')], c: 1, why: m('n − 1') + ' steps.' },
      { q: 'The characteristic property of an AP:', a: [m('aₙ² = aₙ₋₁ aₙ₊₁'), m('2aₙ = aₙ₋₁ + aₙ₊₁'), m('aₙ = nd'), m('aₙ = a₁ d')], c: 1, why: 'Each term averages its neighbours.' },
      { q: m('Sₙ') + ' equals:', a: [m(f('n(a₁ + aₙ)', '2')), m('n(a₁ + aₙ)'), m(f('a₁ + aₙ', '2')), m('n aₙ')], c: 0, why: 'Pair the ends.' },
      { q: m('1 + 2 + … + 100') + ':', a: [m('5000'), m('5050'), m('5100'), m('10000')], c: 1, why: 'Fifty pairs of ' + m('101') + '.' },
      { q: 'A fractional root for ' + m('n') + ' is:', a: ['kept', 'rounded', 'rejected', 'doubled'], c: 2, why: m('n') + ' counts terms.' }
    ]
  },
  quiz: [
    { q: 'In Q2 the fastest route is:', a: ['two full equations', 'the gap of five steps', 'a graph', 'trial and error'], c: 1, why: m('a₉ − a₄ = 5d') + '.' },
    { q: 'Q4 produces:', a: ['a linear equation', 'a quadratic equation', 'an identity', 'an inequality'], c: 1, why: m('Sₙ') + ' is quadratic in ' + m('n') + '.' },
    { q: 'The negative root in Q4 is:', a: ['kept', 'rejected with a reason', 'rounded', 'halved'], c: 1, why: 'And the reason carries the mark.' },
    { q: m('cos 300°') + ' is:', a: ['positive', 'negative', 'zero', 'undefined'], c: 0, why: 'Quadrant IV.' },
    { q: 'Q6 needs, before substituting:', a: [m('tan α'), m('cos α'), m('cot α'), 'nothing'], c: 1, why: m('sin 2α = 2 sin α cos α') + '.' },
    { q: 'Work on the mistakes means:', a: ['fix the wrong line', 'rewrite the solution', 'copy the answer', 'skip it'], c: 1, why: 'The whole solution, again.' }
  ],
  practice: {
    easy: [
      [m('aₙ = 3n + 1') + ': first four terms', m('4, 7, 10, 13')],
      [m('a₁ = 2, aₙ₊₁ = 2aₙ − 1') + ': first four', m('2, 3, 5, 9')],
      [m('a₄ = 14, a₉ = 34') + ': ' + m('d'), m('4')],
      ['Same: ' + m('a₁'), m('2')],
      [m('S₁₅') + ' of ' + m('4, 9, 14, …'), m('585')],
      [m('sin 150°'), m(f('1', '2'))],
      [m('cos 300°'), m(f('1', '2'))]
    ],
    med: [
      [m('a₁ = 2, d = 3, Sₙ = 155') + ': ' + m('n'), m('10')],
      [m('sin 150° + cos 300°'), m('1')],
      [m('sin α = ' + f('3', '5')) + ' (I): ' + m('sin 2α'), m(f('24', '25'))],
      ['Same: ' + m('cos 2α'), m(f('7', '25'))],
      ['Sum of all two-digit multiples of ' + m('4'), m('1188')],
      [m('S₁₀') + ' of ' + m('50, 47, 44, …'), m('365')],
      ['Which term of ' + m('4, 9, 14, …') + ' is ' + m('104') + '?', 'The 21st']
    ],
    hard: [
      [m('S₄ = 26, S₈ = 100') + ': ' + m('a₁') + ' and ' + m('d'), m('a₁ = 2, d = 3')],
      ['Three numbers in AP: sum ' + m('15') + ', product ' + m('80'), m('2, 5, 8')],
      ['Evaluate ' + m('sin 225° + cos 315° + tan 135°'), m('−1')],
      ['Prove ' + m(f('sin 2α', '1 + cos 2α') + ' = tan α'), 'Use ' + m('2cos²α')],
      ['For which ' + m('n') + ' is ' + m('Sₙ') + ' of ' + m('30, 27, 24, …') + ' greatest?', m('n = 10') + ' or ' + m('11') + ', ' + m('Sₙ = 165')],
      ['Factorise ' + m('cos 5x + cos x') + ' and solve ' + m('= 0'), m('2 cos 3x cos 2x = 0')],
      ['Sum of the first ' + m('n') + ' even numbers', m('n(n + 1)')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite in full every question that lost a mark; the holiday is not the place to leave them.',
  homework: [
    'In an AP, ' + m('a₅ = 20') + ' and ' + m('a₁₂ = 48') + '. Find ' + m('a₁') + ', ' + m('d') + ' and ' + m('S₁₂') + '.',
    'For ' + m('a₁ = 3') + ' and ' + m('d = 5') + ', find ' + m('n') + ' such that ' + m('Sₙ = 255') + '.',
    'Evaluate ' + m('cos 210° + sin 330°') + '.',
    'Given ' + m('cos α = ' + f('4', '5')) + ' in quadrant IV, find ' + m('sin 2α') + ' and ' + m('cos 2α') + '.',
    'Find the sum of all multiples of ' + m('3') + ' between ' + m('1') + ' and ' + m('100') + '.'
  ]
});

/* ============================== 40 ============================== */
G9_ALG.push({
  id: 'a9-40', stream: 'alg', grade: 9, quarter: 4, lessons: '79–80', hours: 2,
  title: 'The geometric progression',
  subtitle: 'Multiply by the same number every time, and growth stops being steady and becomes explosive.',
  uz: 'Algebra 9, §32', uzPage: 'pp. 188–194',
  cam: 'IGX 11.5', camPage: 'Core & Extended, pp. 241–247', wb: 'Exercise 11.5',
  objectives: [
    'Define a geometric progression and find its common ratio.',
    'Use bₙ = b₁qⁿ⁻¹ in all four directions.',
    'Use the characteristic property bₙ² = bₙ₋₁ bₙ₊₁.',
    'Insert geometric means and recognise a GP in a word problem.'
  ],
  terms: [
    ['Geometric progression', 'Geometrik progressiya', 'Геометрическая прогрессия'],
    ['Common ratio', 'Maxraj', 'Знаменатель'],
    ['Geometric mean', 'O‘rta geometrik', 'Среднее геометрическое'],
    ['Growth', 'O‘sish', 'Рост'],
    ['Decay', 'Kamayish', 'Убывание'],
    ['Compound interest', 'Murakkab foiz', 'Сложный процент'],
    ['Doubling', 'Ikkilanish', 'Удвоение'],
    ['Non-zero', 'Noldan farqli', 'Отличный от нуля']
  ],
  timing: [[16, 'The definition'], [20, 'The nth term'], [22, 'The middle-term property'], [18, 'Growth and decay'], [4, 'Homework']],
  sections: [
    {
      h: 'The definition',
      html: `<p>A sequence is a <b>geometric progression</b> if each term after the first is obtained by
      multiplying by the same non-zero number ${m('q')}, the <b>common ratio</b>.</p>
      ${eq(m('bₙ₊₁ = bₙ q') + '     equivalently     ' + m('q = ' + f('bₙ₊₁', 'bₙ')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Sequence</th><th class="m">b₁</th><th class="m">q</th><th>Behaviour</th></tr></thead>
      <tbody>
        <tr><td class="m">2, 6, 18, 54, …</td><td class="m">2</td><td class="m">3</td><td>grows fast</td></tr>
        <tr><td class="m">16, 8, 4, 2, …</td><td class="m">16</td><td class="m">${f('1', '2')}</td><td>decays to zero</td></tr>
        <tr><td class="m">1, −2, 4, −8, …</td><td class="m">1</td><td class="m">−2</td><td>alternates and grows</td></tr>
        <tr><td class="m">5, 5, 5, …</td><td class="m">5</td><td class="m">1</td><td>constant</td></tr>
        <tr><td class="m">1, 3, 6, 10, …</td><td class="m">1</td><td>—</td><td>not a GP</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Neither ${m('b₁')} nor ${m('q')} may be zero</span>
      A zero term would make the next ratio ${m(f('0', '0'))} and destroy the definition. This is the
      one structural difference from an arithmetic progression, where ${m('d = 0')} is perfectly
      allowed.</div>`
    },
    {
      h: 'The nth term',
      html: `<p>Starting at ${m('b₁')} and multiplying by ${m('q')} a total of ${m('n − 1')} times:</p>
      ${eq(m('bₙ = b₁ q') + p('', 'n−1'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Find</th><th>How</th></tr></thead>
      <tbody>
        <tr><td class="m">b₁, q, n</td><td class="m">bₙ</td><td>substitute</td></tr>
        <tr><td class="m">b₁, q, bₙ</td><td class="m">n</td><td>compare powers</td></tr>
        <tr><td>two terms</td><td class="m">b₁, q</td><td>divide one equation by the other</td></tr>
      </tbody></table></div>
      <p>The last row is the standard technique, and it is why a GP question is often <b>easier</b> than
      the corresponding AP one: dividing ${m('b₅ = b₁q⁴')} by ${m('b₂ = b₁q')} gives ${m('q³')} at once,
      with ${m('b₁')} eliminated.</p>
      <p><b>Example.</b> ${m('b₂ = 6')}, ${m('b₅ = 162')}. Then ${m('q³ = 27')}, ${m('q = 3')}, and
      ${m('b₁ = 2')}.</p>
      <div class="keybox"><div class="klabel">The exponent is ${m('n − 1')} again</div>
      Exactly as in an AP, the first term needs no step at all. Writing ${m('b₁q')}${p('', 'n')} is the
      single commonest error of the chapter — and it is caught instantly by testing ${m('n = 1')}.</div>`
    },
    {
      h: 'The middle-term property',
      html: `<p>Each term is the geometric mean of its neighbours, in absolute value:</p>
      ${eq(m('bₙ² = bₙ₋₁ · bₙ₊₁'), true)}
      <p>It is the multiplicative twin of ${m('2aₙ = aₙ₋₁ + aₙ₊₁')}, and it is the standard way to test
      whether three numbers form a GP or to fill a gap.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">3, x, 27</td><td class="m">x² = 81</td><td class="m">x = ±9</td></tr>
        <tr><td class="m">x, 6, 18</td><td class="m">36 = 18x</td><td class="m">x = 2</td></tr>
        <tr><td>is ${m('2, 6, 18')} a GP?</td><td class="m">36 = 2 · 18 ✓</td><td>yes</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The first row really has two answers</span>
      Both ${m('3, 9, 27')} and ${m('3, −9, 27')} are geometric progressions, with ${m('q = 3')} and
      ${m('q = −3')}. Giving only the positive value loses half the marks — unless the question says
      the terms are positive.</div>`
    },
    {
      h: 'Growth and decay',
      html: `<p>The behaviour depends entirely on ${m('q')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">q</th><th>Behaviour</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td class="m">q > 1</td><td>grows without limit</td><td>a population doubling</td></tr>
        <tr><td class="m">0 < q < 1</td><td>decays towards zero</td><td>a bouncing ball</td></tr>
        <tr><td class="m">q = 1</td><td>constant</td><td>—</td></tr>
        <tr><td class="m">q < 0</td><td>alternates in sign</td><td class="m">1, −2, 4, −8</td></tr>
      </tbody></table></div>
      {{fig:gpConverge:With |q| < 1 the terms shrink towards zero; with |q| > 1 they run away.}}
      <p><b>Compound interest.</b> A sum ${m('P')} at ${m('r')}% a year is a GP with ${m('q = 1 + ' + f('r', '100'))};
      after ${m('n')} years it is ${m('P(1 + ' + f('r', '100') + ')')}${p('', 'n')}. Simple interest is an AP;
      compound interest is a GP — one sentence that explains why the two grow so differently.</p>
      <div class="keybox"><div class="klabel">Arithmetic loses to geometric, always, in the end</div>
      Whatever ${m('d')} is, and however small ${m('q > 1')} is, the geometric progression eventually
      overtakes the arithmetic one. That is the whole difference between adding and multiplying, and it
      is why compound interest matters.</div>`
    }
  ],
  examples: [
    {
      q: 'In a GP, ' + m('b₂ = 6') + ' and ' + m('b₅ = 162') + '. Find ' + m('b₁') + ', ' + m('q') + ' and ' + m('b₇') + '.',
      steps: [
        [m(f('b₅', 'b₂') + ' = q³ = ' + f('162', '6') + ' = 27'), m('b₁') + ' cancels.'],
        [m('q = 3'), ''],
        [m('b₁ = ' + f('6', '3') + ' = 2'), ''],
        [m('b₇ = 2 · 3⁶ = 1458'), '']
      ],
      ans: m('b₁ = 2, q = 3, b₇ = 1458')
    },
    {
      q: 'Find ' + m('x') + ' if ' + m('3, x, 27') + ' is a GP.',
      steps: [
        [m('x² = 3 · 27 = 81'), 'The characteristic property.'],
        [m('x = ±9'), ''],
        [m('3, 9, 27') + ' with ' + m('q = 3') + ';', ''],
        [m('3, −9, 27') + ' with ' + m('q = −3') + '. Both are valid.', '']
      ],
      ans: m('x = ±9')
    },
    {
      q: 'A ball is dropped from ' + m('2 m') + ' and rebounds to ' + m('60%') + ' of its height each bounce. How high after the 5th bounce?',
      steps: [
        [m('b₁ = 2 · 0.6 = 1.2') + ' — the first rebound.', ''],
        [m('q = 0.6'), ''],
        [m('b₅ = 1.2 · 0.6⁴'), ''],
        [m('= 1.2 · 0.1296 ≈ 0.156 m'), '']
      ],
      ans: m('≈ 0.16 m')
    }
  ],
  modelNote: 'Fold a sheet of paper repeatedly and count the layers; the class reaches the impossibility of eight folds and the meaning of geometric growth at the same moment.',
  interactive: {
    type: 'substitute',
    title: 'b₁ and q',
    hint: 'Make q slightly greater than 1 and watch the tenth term.'
  },
  quiz: [
    { q: 'In a GP, ' + m('q') + ' equals:', a: [m('bₙ₊₁ − bₙ'), m(f('bₙ₊₁', 'bₙ')), m('bₙ bₙ₊₁'), m('b₁')], c: 1, why: 'The common ratio.' },
    { q: m('bₙ') + ' equals:', a: [m('b₁ q') + p('', 'n'), m('b₁ q') + p('', 'n−1'), m('b₁ + (n − 1)q'), m('b₁ n q')], c: 1, why: m('n − 1') + ' multiplications.' },
    { q: m('2, 6, 18, …') + ' has ' + m('b₅') + ' =', a: [m('54'), m('108'), m('162'), m('486')], c: 2, why: m('2 · 3⁴') + '.' },
    { q: 'The characteristic property is:', a: [m('2bₙ = bₙ₋₁ + bₙ₊₁'), m('bₙ² = bₙ₋₁ bₙ₊₁'), m('bₙ = b₁ + q'), m('bₙ = nq')], c: 1, why: 'The geometric mean.' },
    { q: m('3, x, 27') + ' gives ' + m('x') + ' =', a: [m('9'), m('−9'), m('±9'), m('15')], c: 2, why: 'Two progressions fit.' },
    { q: 'Compound interest is:', a: ['an AP', 'a GP', 'neither', 'both'], c: 1, why: 'It multiplies each year.' }
  ],
  practice: {
    easy: [
      [m('q') + ' of ' + m('2, 6, 18, …'), m('3')],
      [m('q') + ' of ' + m('16, 8, 4, …'), m(f('1', '2'))],
      [m('q') + ' of ' + m('1, −2, 4, …'), m('−2')],
      [m('b₁ = 3, q = 2') + ': ' + m('b₅'), m('48')],
      [m('b₁ = 5, q = 3') + ': ' + m('b₄'), m('135')],
      [m('2, 6, 18, …') + ': ' + m('b₅'), m('162')],
      ['Is ' + m('1, 3, 6, 10, …') + ' a GP?', 'No']
    ],
    med: [
      [m('b₂ = 6, b₅ = 162') + ': ' + m('q'), m('3')],
      ['Same: ' + m('b₁'), m('2')],
      ['Same: ' + m('b₇'), m('1458')],
      ['Find ' + m('x') + ': ' + m('3, x, 27') + ' is a GP', m('±9')],
      ['Find ' + m('x') + ': ' + m('x, 6, 18') + ' is a GP', m('2')],
      ['Which term of ' + m('2, 6, 18, …') + ' is ' + m('486') + '?', 'The 6th'],
      [m('b₁ = 100, q = 0.5') + ': ' + m('b₆'), m('3.125')]
    ],
    hard: [
      [m('b₃ = 12, b₆ = 96') + ': ' + m('b₁'), m('3')],
      ['Three numbers in GP: sum ' + m('21') + ', product ' + m('216'), m('3, 6, 12')],
      ['Insert two numbers between ' + m('2') + ' and ' + m('54') + ' to make a GP', m('6') + ' and ' + m('18')],
      ['A ball from ' + m('2 m') + ' rebounds ' + m('60%') + ': height after 5 bounces', m('≈ 0.16 m')],
      [m('1000') + ' at ' + m('5%') + ' compound for ' + m('3') + ' years', m('1157.63')],
      ['For which ' + m('x') + ' is ' + m('x, x + 2, x + 6') + ' a GP?', m('x = 2')],
      ['Show that ' + m('b₁, b₃, b₅') + ' of a GP is again a GP', 'Its ratio is ' + m('q²')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write ' + m('b₁') + ' and ' + m('q') + ' at the top of every solution, and test ' + m('n = 1') + ' on your formula.',
  homework: [
    'In a GP, ' + m('b₁ = 4') + ' and ' + m('q = 3') + '. Find ' + m('b₆') + ' and say which term equals ' + m('972') + '.',
    'Given ' + m('b₃ = 20') + ' and ' + m('b₆ = 160') + ', find ' + m('b₁') + ' and ' + m('q') + '.',
    'Find ' + m('x') + ' if ' + m('5, x, 45') + ' is a GP.',
    'Insert three numbers between ' + m('1') + ' and ' + m('16') + ' to make a GP.',
    'A sum of ' + m('2000') + ' earns ' + m('4%') + ' compound interest. Find its value after ' + m('5') + ' years.'
  ]
});

/* ============================== 41 ============================== */
G9_ALG.push({
  id: 'a9-41', stream: 'alg', grade: 9, quarter: 4, lessons: '81–82', hours: 2,
  title: 'The sum of the first n terms of a geometric progression',
  subtitle: 'Multiply the sum by q, subtract, and everything in the middle cancels.',
  uz: 'Algebra 9, §33', uzPage: 'pp. 195–200',
  cam: 'IGX 11.6', camPage: 'Core & Extended, pp. 248–253', wb: 'Exercise 11.6',
  objectives: [
    'Derive Sₙ = b₁(qⁿ − 1)/(q − 1) by the shift-and-subtract method.',
    'Use the formula in the form that avoids negative numerators.',
    'Treat the case q = 1 separately.',
    'Apply the formula to compound interest and repayment problems.'
  ],
  terms: [
    ['Sum of n terms', 'n ta hadning yig‘indisi', 'Сумма n членов'],
    ['Shift and subtract', 'Siljitib ayirish', 'Сдвиг и вычитание'],
    ['Cancellation', 'Qisqarish', 'Сокращение'],
    ['Special case', 'Xususiy hol', 'Частный случай'],
    ['Numerator', 'Surat', 'Числитель'],
    ['Repayment', 'To‘lov', 'Выплата'],
    ['Doubling problem', 'Ikkilanish masalasi', 'Задача об удвоении'],
    ['Estimate', 'Baholash', 'Оценка']
  ],
  timing: [[16, 'The derivation'], [20, 'Two arrangements'], [20, 'Worked problems'], [20, 'The chessboard'], [4, 'Homework']],
  sections: [
    {
      h: 'The derivation',
      html: `<p>Write the sum, then the same sum multiplied by ${m('q')}:</p>
      ${eq(m('Sₙ = b₁ + b₁q + b₁q² + … + b₁q') + p('', 'n−1'), false)}
      ${eq(m('qSₙ = b₁q + b₁q² + … + b₁q') + p('', 'n−1') + ' + b₁q' + p('', 'n'), false)}
      <p>Subtract the first from the second. Every term but two cancels:</p>
      ${eq(m('qSₙ − Sₙ = b₁q') + p('', 'n') + m(' − b₁'), false)}
      ${eq(m('Sₙ = ' + f('b₁(qⁿ − 1)', 'q − 1')) + ',   ' + m('q ≠ 1'), true)}
      <div class="keybox"><div class="klabel">Why the trick works</div>
      Multiplying by ${m('q')} shifts the whole list one place along. Subtracting therefore removes
      everything the two lists have in common — which is all of it except the first term of one and the
      last of the other. The same idea will reappear in Grade 11 for series.</div>`
    },
    {
      h: 'Two arrangements',
      html: `<p>Multiplying numerator and denominator by ${m('−1')} gives an equivalent form:</p>
      ${eq(m('Sₙ = ' + f('b₁(qⁿ − 1)', 'q − 1') + ' = ' + f('b₁(1 − qⁿ)', '1 − q')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Use</th><th>When</th><th>Because</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('b₁(qⁿ − 1)', 'q − 1')}</td><td class="m">q > 1</td><td>both parts are positive</td></tr>
        <tr><td class="m">${f('b₁(1 − qⁿ)', '1 − q')}</td><td class="m">|q| < 1</td><td>both parts are positive</td></tr>
        <tr><td class="m">Sₙ = n b₁</td><td class="m">q = 1</td><td>the formula divides by zero</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('q = 1')} must be checked before the formula is used</span>
      With ${m('q = 1')} every term is ${m('b₁')} and the sum is ${m('n b₁')} — but the formula has
      ${m('q − 1')} in the denominator and is undefined. A question that sets ${m('q = 1')} is testing
      exactly whether you looked.</div>`
    },
    {
      h: 'Worked problems',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">S₆ of 2, 6, 18, …</td><td class="m">${f('2(3⁶ − 1)', '2')}</td><td class="m">728</td></tr>
        <tr><td class="m">S₅ of 3, 6, 12, …</td><td class="m">${f('3(2⁵ − 1)', '1')}</td><td class="m">93</td></tr>
        <tr><td class="m">S₄ of 16, 8, 4, …</td><td class="m">${f('16(1 − ' + f('1', '16') + ')', '1 − ' + f('1', '2'))}</td><td class="m">30</td></tr>
      </tbody></table></div>
      <p>The third row is a useful check: ${m('16 + 8 + 4 + 2 = 30')} by direct addition, which confirms
      the arrangement of the formula for ${m('q < 1')}.</p>
      <div class="keybox"><div class="klabel">Always sanity-check a small case by adding</div>
      Four or five terms can be added directly in a few seconds. Doing so once, at the start of the
      exercise, catches a mis-remembered formula before it spoils ten questions.</div>`
    },
    {
      h: 'The chessboard',
      html: `<p>The classical problem: one grain on the first square, two on the second, four on the third,
      doubling to the sixty-fourth.</p>
      ${eq(m('S₆₄ = ' + f('1(2⁶⁴ − 1)', '2 − 1') + ' = 2⁶⁴ − 1 ≈ 1.8 × 10¹⁹'), true)}
      <p>That is more grain than has ever been grown. It is the standard demonstration that geometric
      growth is not merely “fast” but of a different order altogether.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Situation</th><th>The GP</th><th>The sum means</th></tr></thead>
      <tbody>
        <tr><td>a bouncing ball</td><td class="m">b₁ = first rebound, q < 1</td><td>total distance</td></tr>
        <tr><td>annual savings with interest</td><td class="m">q = 1 + ${f('r', '100')}</td><td>the accumulated fund</td></tr>
        <tr><td>a rumour told to ${m('3')} people each</td><td class="m">q = 3</td><td>how many have heard it</td></tr>
      </tbody></table></div>`
    }
  ],
  examples: [
    {
      q: 'Find ' + m('S₆') + ' for ' + m('2, 6, 18, …') + '.',
      steps: [
        [m('b₁ = 2, q = 3, n = 6'), ''],
        [m('S₆ = ' + f('2(3⁶ − 1)', '3 − 1')), m('q > 1') + ' form.'],
        [m('3⁶ = 729'), ''],
        [m('S₆ = ' + f('2 · 728', '2') + ' = 728'), '']
      ],
      ans: m('728')
    },
    {
      q: 'Find ' + m('S₄') + ' for ' + m('16, 8, 4, …') + '.',
      steps: [
        [m('b₁ = 16, q = ' + f('1', '2')), ''],
        [m('S₄ = ' + f('16(1 − ' + f('1', '16') + ')', '1 − ' + f('1', '2'))), m('|q| < 1') + ' form.'],
        [m('= ' + f('16 · ' + f('15', '16'), f('1', '2')) + ' = ' + f('15', f('1', '2'))), ''],
        [m('= 30'), 'Check: ' + m('16 + 8 + 4 + 2 = 30') + ' ✓']
      ],
      ans: m('30')
    },
    {
      q: 'How many terms of ' + m('3, 6, 12, …') + ' give a sum of ' + m('381') + '?',
      steps: [
        [m('b₁ = 3, q = 2'), ''],
        [m(f('3(2ⁿ − 1)', '1') + ' = 381'), ''],
        [m('2ⁿ − 1 = 127 ⇒ 2ⁿ = 128'), ''],
        [m('n = 7'), '']
      ],
      ans: m('n = 7')
    }
  ],
  modelNote: 'Do the chessboard problem on the board without the formula for the first eight squares, then with it for all sixty-four; the gap between intuition and arithmetic is the lesson.',
  interactive: {
    type: 'substitute',
    title: 'Sₙ of a GP',
    hint: 'Compare the sum with the last term — for large q they are almost equal.'
  },
  quiz: [
    { q: m('Sₙ') + ' of a GP equals:', a: [m(f('b₁(qⁿ − 1)', 'q − 1')), m(f('n(b₁ + bₙ)', '2')), m('b₁ qⁿ'), m('n b₁ q')], c: 0, why: 'Shift and subtract.' },
    { q: 'The formula fails when:', a: [m('q = 0'), m('q = 1'), m('q < 0'), 'never'], c: 1, why: 'Zero denominator.' },
    { q: 'When ' + m('q = 1') + ', ' + m('Sₙ') + ' equals:', a: [m('0'), m('n b₁'), m('b₁'), 'undefined'], c: 1, why: 'Every term is the same.' },
    { q: m('S₆') + ' of ' + m('2, 6, 18, …') + ':', a: [m('486'), m('728'), m('729'), m('1458')], c: 1, why: m(f('2(729 − 1)', '2')) + '.' },
    { q: m('S₄') + ' of ' + m('16, 8, 4, …') + ':', a: [m('28'), m('30'), m('31'), m('32')], c: 1, why: m('16 + 8 + 4 + 2') + '.' },
    { q: 'The chessboard total is:', a: [m('2⁶⁴'), m('2⁶⁴ − 1'), m('64²'), m('2⁶³')], c: 1, why: m('b₁ = 1, q = 2') + '.' }
  ],
  practice: {
    easy: [
      [m('S₃') + ' of ' + m('1, 2, 4'), m('7')],
      [m('S₄') + ' of ' + m('1, 3, 9, 27'), m('40')],
      [m('S₅') + ' of ' + m('3, 6, 12, …'), m('93')],
      [m('S₄') + ' of ' + m('16, 8, 4, …'), m('30')],
      [m('S₆') + ' of ' + m('2, 6, 18, …'), m('728')],
      [m('q = 1, b₁ = 5, n = 8') + ': ' + m('S₈'), m('40')],
      [m('S₃') + ' of ' + m('1, −2, 4'), m('3')]
    ],
    med: [
      ['How many terms of ' + m('3, 6, 12, …') + ' give ' + m('381') + '?', m('7')],
      [m('b₁ = 1, q = 2, n = 10') + ': ' + m('S₁₀'), m('1023')],
      [m('b₁ = 5, q = 3, n = 5') + ': ' + m('S₅'), m('605')],
      [m('S₅') + ' of ' + m('81, 27, 9, …'), m('121')],
      [m('b₂ = 6, b₅ = 162') + ': ' + m('S₅'), m('242')],
      ['Sum of ' + m('1 + 2 + 4 + … + 2') + p('', '63'), m('2⁶⁴ − 1')],
      [m('S₄') + ' of ' + m('2, −6, 18, −54'), m('−40')]
    ],
    hard: [
      ['How many terms of ' + m('1, 2, 4, …') + ' give ' + m('1023') + '?', m('10')],
      [m('S₃ = 21') + ' and ' + m('q = 2') + ': find ' + m('b₁'), m('3')],
      ['A ball from ' + m('2 m') + ' rebounds ' + m('50%') + ': total distance to rest', m('6 m')],
      ['Save ' + m('1000') + ' at the start of each year at ' + m('10%') + ' for ' + m('5') + ' years', m('≈ 6716')],
      [m('S₄ = 30') + ' and ' + m('S₈ = 510') + ': find ' + m('q'), m('2')],
      ['Show ' + m('Sₙ = ' + f('bₙ q − b₁', 'q − 1')), 'Substitute ' + m('bₙ = b₁q') + p('', 'n−1')],
      ['A rumour: each teller tells ' + m('3') + ' new people. After ' + m('5') + ' rounds, how many know?', m('364')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Check every answer by adding the first three or four terms directly.',
  homework: [
    'Find ' + m('S₅') + ' for ' + m('2, 8, 32, …') + '.',
    'Find ' + m('S₅') + ' for ' + m('243, 81, 27, …') + '.',
    'How many terms of ' + m('1, 3, 9, …') + ' give a sum of ' + m('364') + '?',
    'A GP has ' + m('b₁ = 6') + ' and ' + m('q = ' + f('1', '3')) + '. Find ' + m('S₄') + '.',
    'Explain why the formula cannot be used when ' + m('q = 1') + ', and give the sum in that case.'
  ]
});

/* ============================== 42 ============================== */
G9_ALG.push({
  id: 'a9-42', stream: 'alg', grade: 9, quarter: 4, lessons: '83–84', hours: 2,
  title: 'The infinite decreasing geometric progression',
  subtitle: 'Add infinitely many numbers and get a finite answer — provided each is small enough.',
  uz: 'Algebra 9, §34', uzPage: 'pp. 201–206',
  cam: 'IGX 11.7', camPage: 'Core & Extended, pp. 254–258', wb: 'Exercise 11.7',
  objectives: [
    'State the condition |q| < 1 for an infinite geometric sum to exist.',
    'Use S = b₁/(1 − q) and explain where it comes from.',
    'Convert a recurring decimal into a fraction by summing a GP.',
    'Solve problems about total distance and repeated halving.'
  ],
  terms: [
    ['Infinite progression', 'Cheksiz progressiya', 'Бесконечная прогрессия'],
    ['Decreasing', 'Kamayuvchi', 'Убывающая'],
    ['Sum of the progression', 'Progressiya yig‘indisi', 'Сумма прогрессии'],
    ['Converges', 'Yaqinlashadi', 'Сходится'],
    ['Diverges', 'Uzoqlashadi', 'Расходится'],
    ['Recurring decimal', 'Davriy o‘nli kasr', 'Периодическая дробь'],
    ['Limit', 'Limit', 'Предел'],
    ['Condition', 'Shart', 'Условие']
  ],
  timing: [[15, 'When infinitely many terms have a sum'], [19, 'The formula'], [22, 'Recurring decimals'], [20, 'Distance problems'], [4, 'Homework']],
  sections: [
    {
      h: 'When infinitely many terms have a sum',
      html: `<p>Consider ${m('1 + ' + f('1', '2') + ' + ' + f('1', '4') + ' + ' + f('1', '8') + ' + …')}.
      The partial sums are ${m('1, 1.5, 1.75, 1.875, …')} — they climb, but never past ${m('2')}.</p>
      {{fig:gpConverge:The partial sums of a decreasing GP creep towards a ceiling they never reach.}}
      <p>Compare ${m('1 + 2 + 4 + 8 + …')}, whose partial sums are ${m('1, 3, 7, 15, …')} and run away
      to infinity. The difference is entirely in ${m('q')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">|q|</th><th class="m">qⁿ</th><th>The sum</th></tr></thead>
      <tbody>
        <tr><td class="m">|q| < 1</td><td>shrinks to ${m('0')}</td><td>exists — the progression converges</td></tr>
        <tr><td class="m">|q| ≥ 1</td><td>does not shrink</td><td>does not exist — it diverges</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">“Infinitely many” does not mean “infinitely large”</div>
      This is the first place in school mathematics where an endless process has a finite answer, and it
      is worth pausing on. The terms must shrink fast enough — and geometric shrinking, by a constant
      factor each time, is fast enough.</div>`
    },
    {
      h: 'The formula',
      html: `<p>In ${m('Sₙ = ' + f('b₁(1 − qⁿ)', '1 − q'))}, if ${m('|q| < 1')} then ${m('qⁿ')} becomes
      as small as you like as ${m('n')} grows. Dropping it:</p>
      ${eq(m('S = ' + f('b₁', '1 − q')) + ',   ' + m('|q| < 1'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Progression</th><th class="m">b₁</th><th class="m">q</th><th class="m">S</th></tr></thead>
      <tbody>
        <tr><td class="m">1, ${f('1', '2')}, ${f('1', '4')}, …</td><td class="m">1</td><td class="m">${f('1', '2')}</td><td class="m">2</td></tr>
        <tr><td class="m">9, 3, 1, …</td><td class="m">9</td><td class="m">${f('1', '3')}</td><td class="m">${f('27', '2')}</td></tr>
        <tr><td class="m">4, −2, 1, …</td><td class="m">4</td><td class="m">−${f('1', '2')}</td><td class="m">${f('8', '3')}</td></tr>
        <tr><td class="m">1, 2, 4, …</td><td class="m">1</td><td class="m">2</td><td>none</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Check ${m('|q| < 1')} before writing the formula down</span>
      Applying ${m(f('b₁', '1 − q'))} to ${m('1 + 2 + 4 + …')} gives ${m(f('1', '−1') + ' = −1')} — a
      finite negative answer to a sum of positive numbers. The formula is not merely inaccurate outside
      its condition; it is meaningless there.</div>`
    },
    {
      h: 'Recurring decimals',
      html: `<p>Every recurring decimal is an infinite GP in disguise, which is why every one of them is a
      fraction.</p>
      <p><b>Example.</b> ${m('0.3333… = ' + f('3', '10') + ' + ' + f('3', '100') + ' + ' + f('3', '1000') + ' + …')}
      — a GP with ${m('b₁ = ' + f('3', '10'))} and ${m('q = ' + f('1', '10'))}:</p>
      ${eq(m('S = ' + f(f('3', '10'), '1 − ' + f('1', '10')) + ' = ' + f(f('3', '10'), f('9', '10')) + ' = ' + f('1', '3')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Decimal</th><th class="m">b₁</th><th class="m">q</th><th>Fraction</th></tr></thead>
      <tbody>
        <tr><td class="m">0.333…</td><td class="m">${f('3', '10')}</td><td class="m">${f('1', '10')}</td><td class="m">${f('1', '3')}</td></tr>
        <tr><td class="m">0.777…</td><td class="m">${f('7', '10')}</td><td class="m">${f('1', '10')}</td><td class="m">${f('7', '9')}</td></tr>
        <tr><td class="m">0.121212…</td><td class="m">${f('12', '100')}</td><td class="m">${f('1', '100')}</td><td class="m">${f('4', '33')}</td></tr>
        <tr><td class="m">0.999…</td><td class="m">${f('9', '10')}</td><td class="m">${f('1', '10')}</td><td class="m">1</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">${m('0.999… = 1')}, and this is the proof</div>
      Not “nearly ${m('1')}”, not “${m('1')} for practical purposes” — exactly ${m('1')}. The two
      symbols name the same number, and the geometric sum above is the shortest honest demonstration
      of it.</div>`
    },
    {
      h: 'Distance problems',
      html: `<p><b>A bouncing ball.</b> Dropped from ${m('h')} and rebounding to a fraction ${m('k')} of
      its height, the total distance travelled before coming to rest is</p>
      ${eq(m('h + 2hk + 2hk² + … = h + ' + f('2hk', '1 − k')), true)}
      <p>The first drop is counted once; every later height is travelled twice, up and down. Forgetting
      the factor ${m('2')}, or double-counting the first drop, are the two standard errors.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Total</th></tr></thead>
      <tbody>
        <tr><td>dropped from ${m('2 m')}, rebound ${m('50%')}</td><td class="m">2 + ${f('2 · 2 · 0.5', '0.5')} = 6 m</td></tr>
        <tr><td>a square of side ${m('1')}, each next joining midpoints</td><td>perimeters sum to ${m(f('4', '1 − ' + f(sr('2'), '2')))}</td></tr>
        <tr><td>a pendulum swinging ${m('80%')} of the previous arc, first arc ${m('40 cm')}</td><td class="m">200 cm</td></tr>
      </tbody></table></div>`
    }
  ],
  examples: [
    {
      q: 'Find the sum of ' + m('9 + 3 + 1 + ' + f('1', '3') + ' + …') + '.',
      steps: [
        [m('b₁ = 9, q = ' + f('1', '3')), ''],
        [m('|q| < 1') + ' ✓ — the sum exists.', ''],
        [m('S = ' + f('9', '1 − ' + f('1', '3')) + ' = ' + f('9', f('2', '3'))), ''],
        [m('= ' + f('27', '2') + ' = 13.5'), '']
      ],
      ans: m(f('27', '2'))
    },
    {
      q: 'Write ' + m('0.121212…') + ' as a fraction.',
      steps: [
        [m('b₁ = ' + f('12', '100') + ', q = ' + f('1', '100')), ''],
        [m('S = ' + f(f('12', '100'), '1 − ' + f('1', '100'))), ''],
        [m('= ' + f('12', '99')), ''],
        [m('= ' + f('4', '33')), 'Cancel by ' + m('3') + '.']
      ],
      ans: m(f('4', '33'))
    },
    {
      q: 'A ball is dropped from ' + m('2 m') + ' and rebounds to half its height each time. Find the total distance travelled.',
      steps: [
        ['The first drop: ' + m('2 m') + '.', 'Counted once.'],
        ['Then up and down ' + m('1, 0.5, 0.25, …') + ', each twice.', ''],
        [m('2 · ' + f('1', '1 − 0.5') + ' = 4'), ''],
        [m('2 + 4 = 6 m'), '']
      ],
      ans: m('6 m')
    }
  ],
  modelNote: 'Walk half the distance to the wall, then half of what remains, and again; the class sees an endless process with a finite destination before any algebra is written.',
  interactive: {
    type: 'substitute',
    title: 'Partial sums approaching a ceiling',
    hint: 'Increase n and watch the sum settle.'
  },
  quiz: [
    { q: 'An infinite GP has a sum when:', a: [m('q > 0'), m('|q| < 1'), m('q > 1'), 'always'], c: 1, why: 'The terms must shrink.' },
    { q: m('S') + ' equals:', a: [m(f('b₁', '1 − q')), m(f('b₁', '1 + q')), m(f('1 − q', 'b₁')), m('b₁ q')], c: 0, why: 'Drop ' + m('qⁿ') + '.' },
    { q: m('1 + ' + f('1', '2') + ' + ' + f('1', '4') + ' + …') + ' equals:', a: [m('1.5'), m('2'), m('∞'), m('2.5')], c: 1, why: m(f('1', '1 − 0.5')) + '.' },
    { q: m('0.999…') + ' equals:', a: ['nearly ' + m('1'), m('1'), m('0.99'), m(f('9', '10'))], c: 1, why: 'Exactly — the sum is ' + m('1') + '.' },
    { q: m('1 + 2 + 4 + …') + ' has:', a: [m('−1'), 'no sum', m('∞') + ' as an answer', m('2')], c: 1, why: m('|q| ≥ 1') + '.' },
    { q: m('0.333…') + ' equals:', a: [m(f('1', '3')), m(f('3', '10')), m(f('33', '100')), m(f('1', '9'))], c: 0, why: 'A GP with ' + m('q = 0.1') + '.' }
  ],
  practice: {
    easy: [
      [m('1 + ' + f('1', '2') + ' + ' + f('1', '4') + ' + …'), m('2')],
      [m('9 + 3 + 1 + …'), m(f('27', '2'))],
      [m('b₁ = 6, q = ' + f('1', '3')) + ': ' + m('S'), m('9')],
      [m('b₁ = 4, q = −' + f('1', '2')) + ': ' + m('S'), m(f('8', '3'))],
      ['Does ' + m('1 + 2 + 4 + …') + ' have a sum?', 'No'],
      [m('0.333…') + ' as a fraction', m(f('1', '3'))],
      [m('0.777…') + ' as a fraction', m(f('7', '9'))]
    ],
    med: [
      [m('0.121212…') + ' as a fraction', m(f('4', '33'))],
      [m('0.999…'), m('1')],
      [m('b₁ = 12, q = 0.25') + ': ' + m('S'), m('16')],
      [m('S = 8') + ' and ' + m('q = ' + f('1', '2')) + ': find ' + m('b₁'), m('4')],
      [m('S = 27') + ' and ' + m('b₁ = 18') + ': find ' + m('q'), m(f('1', '3'))],
      ['Ball from ' + m('2 m') + ', rebound ' + m('50%') + ': total distance', m('6 m')],
      ['Pendulum, first arc ' + m('40 cm') + ', each ' + m('80%') + ': total', m('200 cm')]
    ],
    hard: [
      [m('0.4545…') + ' as a fraction', m(f('5', '11'))],
      [m('0.1666…') + ' as a fraction', m(f('1', '6'))],
      ['Ball from ' + m('10 m') + ', rebound ' + m(f('2', '3')) + ': total distance', m('50 m')],
      ['An infinite GP has ' + m('S = 9') + ' and ' + m('b₁ = 6') + ': find ' + m('b₃'), m(f('2', '3'))],
      ['For which ' + m('x') + ' does ' + m('1 + x + x² + …') + ' have a sum?', m('−1 < x < 1')],
      ['Sum that progression when ' + m('x = ' + f('1', '4')), m(f('4', '3'))],
      ['Squares: side ' + m('1') + ', each next joining midpoints. Sum of the areas', m('2')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'State ' + m('|q| < 1') + ' explicitly before using the formula, every time.',
  homework: [
    'Find the sum of ' + m('16 + 4 + 1 + ' + f('1', '4') + ' + …') + '.',
    'Write ' + m('0.636363…') + ' as a fraction.',
    'An infinite GP has ' + m('S = 12') + ' and ' + m('q = ' + f('2', '3')) + '. Find ' + m('b₁') + '.',
    'A ball dropped from ' + m('3 m') + ' rebounds to ' + m(f('1', '3')) + ' of its height. Find the total distance.',
    'Explain why ' + m('2 + 4 + 8 + …') + ' has no sum.'
  ]
});

/* ============================== 43 ============================== */
G9_ALG.push({
  id: 'a9-43', stream: 'alg', grade: 9, quarter: 4, lessons: '85', hours: 1,
  title: 'Chapter exercises — Cambridge sequences and the nth-term test',
  subtitle: 'The same progressions, in the language and the question style of an IGCSE paper.',
  uz: 'Algebra 9, IV bob mashqlari', uzPage: 'pp. 207–210',
  cam: 'IGX 11 review', camPage: 'Core & Extended, pp. 259–264', wb: 'Exercise 11 review',
  objectives: [
    'Find the nth term of a linear, a quadratic and a geometric sequence.',
    'Use the second-difference method on a quadratic sequence.',
    'Answer in the phrasing Cambridge expects: “write down an expression for the nth term”.',
    'Decide which type a sequence is before choosing a method.'
  ],
  terms: [
    ['Linear sequence', 'Chiziqli ketma-ketlik', 'Линейная последовательность'],
    ['Quadratic sequence', 'Kvadratik ketma-ketlik', 'Квадратичная последовательность'],
    ['First difference', 'Birinchi ayirma', 'Первая разность'],
    ['Second difference', 'Ikkinchi ayirma', 'Вторая разность'],
    ['Expression', 'Ifoda', 'Выражение'],
    ['Position', 'O‘rin', 'Позиция'],
    ['Pattern', 'Naqsh', 'Закономерность'],
    ['Justify', 'Asoslash', 'Обосновать']
  ],
  timing: [[7, 'Which type is it?'], [11, 'Linear and geometric'], [13, 'Quadratic sequences'], [7, 'Exam phrasing'], [2, 'Homework']],
  sections: [
    {
      h: 'Which type is it?',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Test</th><th>If constant</th><th>Type</th><th>${m('n')}th term</th></tr></thead>
      <tbody>
        <tr><td>first differences</td><td class="m">d</td><td>linear (AP)</td><td class="m">dn + c</td></tr>
        <tr><td>second differences</td><td class="m">2a</td><td>quadratic</td><td class="m">an² + bn + c</td></tr>
        <tr><td>ratios</td><td class="m">q</td><td>geometric (GP)</td><td class="m">b₁q${p('', 'n−1')}</td></tr>
      </tbody></table></div>
      <p>Run the three tests in that order. It takes fifteen seconds and it decides everything that
      follows.</p>
      <div class="keybox"><div class="klabel">Cambridge asks for the ${m('n')}th term far more often than for a particular term</div>
      An Uzbek paper says “find ${m('a₂₀')}”; an IGCSE paper says “write down an expression for the
      ${m('n')}th term”. The second is harder and is worth practising directly.</div>`
    },
    {
      h: 'Linear and geometric',
      html: `<p><b>Linear.</b> ${m('5, 8, 11, 14, …')} has ${m('d = 3')}, so the ${m('n')}th term is
      ${m('3n')} plus a correction. At ${m('n = 1')}, ${m('3 · 1 = 3')} but the term is ${m('5')}, so add
      ${m('2')}: the answer is ${m('3n + 2')}.</p>
      <p><b>Geometric.</b> ${m('3, 6, 12, 24, …')} has ${m('q = 2')}, so the ${m('n')}th term is
      ${m('3 · 2')}${p('', 'n−1')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Sequence</th><th>${m('n')}th term</th></tr></thead>
      <tbody>
        <tr><td class="m">5, 8, 11, 14, …</td><td class="m">3n + 2</td></tr>
        <tr><td class="m">20, 17, 14, …</td><td class="m">23 − 3n</td></tr>
        <tr><td class="m">3, 6, 12, 24, …</td><td class="m">3 · 2${p('', 'n−1')}</td></tr>
        <tr><td class="m">2, −6, 18, …</td><td class="m">2(−3)${p('', 'n−1')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Always test your expression at ${m('n = 1')}</span>
      It costs two seconds and catches the “off by ${m('d')}” error that this topic generates more than
      any other.</div>`
    },
    {
      h: 'Quadratic sequences',
      html: `<p>If the first differences are not constant but the <b>second</b> differences are, the
      sequence is quadratic.</p>
      <p><b>Example.</b> ${m('3, 8, 15, 24, 35, …')}</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Terms</th><th class="m">3</th><th class="m">8</th><th class="m">15</th><th class="m">24</th><th class="m">35</th></tr></thead>
      <tbody>
        <tr><td>first differences</td><td></td><td class="m">5</td><td class="m">7</td><td class="m">9</td><td class="m">11</td></tr>
        <tr><td>second differences</td><td></td><td></td><td class="m">2</td><td class="m">2</td><td class="m">2</td></tr>
      </tbody></table></div>
      <p>The second difference is ${m('2a')}, so ${m('a = 1')}. Subtracting ${m('n²')} from the terms
      leaves ${m('2, 4, 6, 8, 10')} — which is ${m('2n')}. So the ${m('n')}th term is ${m('n² + 2n')},
      and a check at ${m('n = 1')} gives ${m('3')} ✓.</p>
      <div class="keybox"><div class="klabel">The method in one line</div>
      Halve the second difference to get ${m('a')}; subtract ${m('an²')} from every term; what remains is
      linear, and you already know how to do that.</div>`
    },
    {
      h: 'Exam phrasing',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Cambridge says</th><th>You must give</th></tr></thead>
      <tbody>
        <tr><td>“write down the next two terms”</td><td>two numbers</td></tr>
        <tr><td>“write down an expression for the ${m('n')}th term”</td><td>a formula in ${m('n')}</td></tr>
        <tr><td>“show that the ${m('n')}th term is…”</td><td>the working, not just the answer</td></tr>
        <tr><td>“explain why ${m('50')} is not a term”</td><td>a sentence with a reason</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">“Explain” and “show that” carry the marks in the words</span>
      A correct number with no sentence scores zero on an “explain” question. “Because ${m('3n + 2 = 50')}
      gives ${m('n = 16')}, which is a whole number, ${m('50')} <b>is</b> a term” — that is the answer,
      including the reason.</div>`
    }
  ],
  examples: [
    {
      q: 'Write down an expression for the ' + m('n') + 'th term of ' + m('5, 8, 11, 14, …') + '.',
      steps: [
        ['First differences: all ' + m('3') + ' — linear.', ''],
        ['Start from ' + m('3n') + '.', ''],
        ['At ' + m('n = 1') + ': ' + m('3') + ', but the term is ' + m('5') + '.', 'Add ' + m('2') + '.'],
        [m('3n + 2'), 'Check ' + m('n = 4') + ': ' + m('14') + ' ✓']
      ],
      ans: m('3n + 2')
    },
    {
      q: 'Find the ' + m('n') + 'th term of ' + m('3, 8, 15, 24, 35, …') + '.',
      steps: [
        ['First differences ' + m('5, 7, 9, 11') + '; second differences all ' + m('2') + '.', 'Quadratic.'],
        [m('2a = 2 ⇒ a = 1') + '.', ''],
        ['Subtract ' + m('n²') + ': ' + m('2, 4, 6, 8, 10') + ' — that is ' + m('2n') + '.', ''],
        [m('n² + 2n'), 'Check ' + m('n = 1') + ': ' + m('3') + ' ✓']
      ],
      ans: m('n² + 2n')
    },
    {
      q: 'Explain why ' + m('50') + ' is not a term of ' + m('2, 6, 18, 54, …') + '.',
      steps: [
        ['Ratios all ' + m('3') + ' — geometric, ' + m('n') + 'th term ' + m('2 · 3') + p('', 'n−1') + '.', ''],
        ['Solve ' + m('2 · 3') + p('', 'n−1') + m(' = 50') + '.', ''],
        [m('3') + p('', 'n−1') + m(' = 25') + ' — not a power of ' + m('3') + '.', ''],
        ['So there is no whole ' + m('n') + ', and ' + m('50') + ' is not a term.', 'The sentence is the answer.']
      ],
      ans: 'Not a term — ' + m('25') + ' is not a power of ' + m('3')
    }
  ],
  modelNote: 'Give one linear, one quadratic and one geometric sequence unlabelled and let the class sort them by running the three tests; the sorting is the skill being taught.',
  interactive: {
    type: 'quiz',
    title: 'Which type, and what is the nth term?',
    hint: 'Differences, then second differences, then ratios.',
    items: [
      { q: m('3, 7, 11, 15, …') + ' is:', a: ['arithmetic', 'geometric', 'quadratic', 'none of these'], c: 0, why: 'A constant difference of ' + m('4') + '.' },
      { q: 'Its ' + m('n') + 'th term is:', a: [m('4n'), m('4n − 1'), m('4n + 3'), m('3n + 4')], c: 1, why: m('4 · 1 − 1 = 3') + '.' },
      { q: m('2, 6, 18, 54, …') + ' is:', a: ['arithmetic', 'geometric', 'quadratic', 'none'], c: 1, why: 'A constant ratio of ' + m('3') + '.' },
      { q: 'Its ' + m('n') + 'th term is:', a: [m('2 · 3ⁿ'), m('2 · 3ⁿ⁻¹'), m('3 · 2ⁿ'), m('6ⁿ')], c: 1, why: m('a₁ = 2') + ', ' + m('q = 3') + '.' },
      { q: m('1, 4, 9, 16, …') + ' has second differences:', a: [m('0'), m('1'), m('2'), m('3')], c: 2, why: 'Constant ' + m('2') + ' — quadratic.' },
      { q: 'Its ' + m('n') + 'th term is:', a: [m('n²'), m('2n'), m('n² + 1'), m('2n − 1')], c: 0, why: 'The squares.' },
      { q: 'A constant first difference means:', a: ['geometric', 'arithmetic', 'quadratic', 'random'], c: 1, why: 'By definition.' },
      { q: 'A constant second difference means the ' + m('n') + 'th term is:', a: ['linear', 'quadratic', 'geometric', 'constant'], c: 1, why: 'One degree higher.' }
    ]
  },
  quiz: [
    { q: 'Constant first differences mean:', a: ['linear', 'quadratic', 'geometric', 'none'], c: 0, why: 'An AP.' },
    { q: 'Constant second differences mean:', a: ['linear', 'quadratic', 'geometric', 'none'], c: 1, why: m('an² + bn + c') + '.' },
    { q: 'Constant ratios mean:', a: ['linear', 'quadratic', 'geometric', 'none'], c: 2, why: 'A GP.' },
    { q: 'The ' + m('n') + 'th term of ' + m('5, 8, 11, …') + ':', a: [m('3n'), m('3n + 2'), m('3n − 2'), m('5n')], c: 1, why: 'Check at ' + m('n = 1') + '.' },
    { q: 'Second difference ' + m('2') + ' gives ' + m('a') + ' =', a: [m('1'), m('2'), m('4'), m(f('1', '2'))], c: 0, why: 'Halve it.' },
    { q: 'An “explain” question needs:', a: ['a number', 'a sentence with a reason', 'a graph', 'a table'], c: 1, why: 'The words carry the marks.' }
  ],
  practice: {
    easy: [
      [m('n') + 'th term of ' + m('2, 4, 6, 8, …'), m('2n')],
      [m('n') + 'th term of ' + m('5, 8, 11, …'), m('3n + 2')],
      [m('n') + 'th term of ' + m('20, 17, 14, …'), m('23 − 3n')],
      [m('n') + 'th term of ' + m('3, 6, 12, 24, …'), m('3 · 2') + p('', 'n−1')],
      ['Next two terms of ' + m('1, 4, 9, 16, …'), m('25, 36')],
      ['Type of ' + m('2, 6, 18, 54, …'), 'Geometric'],
      ['Type of ' + m('1, 3, 6, 10, …'), 'Quadratic']
    ],
    med: [
      [m('n') + 'th term of ' + m('3, 8, 15, 24, …'), m('n² + 2n')],
      [m('n') + 'th term of ' + m('1, 4, 9, 16, …'), m('n²')],
      [m('n') + 'th term of ' + m('2, 5, 10, 17, …'), m('n² + 1')],
      [m('n') + 'th term of ' + m('2, −6, 18, …'), m('2(−3)') + p('', 'n−1')],
      ['Is ' + m('50') + ' a term of ' + m('2, 6, 18, …') + '?', 'No'],
      ['Is ' + m('50') + ' a term of ' + m('5, 8, 11, …') + '?', 'Yes — the 16th'],
      [m('n') + 'th term of ' + m('1, 3, 6, 10, …'), m(f('n(n + 1)', '2'))]
    ],
    hard: [
      [m('n') + 'th term of ' + m('4, 11, 22, 37, …'), m('2n² + n + 1')],
      [m('n') + 'th term of ' + m('0, 3, 8, 15, …'), m('n² − 1')],
      [m('n') + 'th term of ' + m('5, 11, 21, 35, …'), m('2n² + 3')],
      ['Which term of ' + m('n² + 2n') + ' equals ' + m('120') + '?', 'The 10th'],
      ['Explain why ' + m('100') + ' is not a term of ' + m('n² + 2n'), m('n² + 2n = 100') + ' has no whole root'],
      [m('n') + 'th term of ' + m('1, 2, 4, 8, …') + ' and of ' + m('1, 2, 4, 7, …'), m('2') + p('', 'n−1') + ' and ' + m(f('n² − n + 2', '2'))],
      ['A sequence has ' + m('n') + 'th term ' + m('n² − 10n') + '. Its least term', m('−25') + ', at ' + m('n = 5')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Test every expression at ' + m('n = 1') + ' and at ' + m('n = 3') + ' before writing it down as final.',
  homework: [
    'Write an expression for the ' + m('n') + 'th term of ' + m('7, 12, 17, 22, …') + '.',
    'Write an expression for the ' + m('n') + 'th term of ' + m('2, 8, 18, 32, …') + '.',
    'Write an expression for the ' + m('n') + 'th term of ' + m('5, 15, 45, …') + '.',
    'Explain why ' + m('60') + ' is not a term of ' + m('7, 12, 17, …') + '.',
    'Find the ' + m('n') + 'th term of ' + m('6, 11, 18, 27, …') + '.'
  ]
});

/* ============================== 44 ============================== */
G9_ALG.push({
  id: 'a9-44', stream: 'alg', grade: 9, quarter: 4, lessons: '86–87', hours: 2,
  title: 'Control work 7, and progressions closed',
  subtitle: 'Both progressions, both sums, and the infinite case — Chapter IV in one paper.',
  uz: 'Algebra 9, Nazorat ishi 7', uzPage: 'pp. 167–210',
  cam: 'IGX 11 review', camPage: 'Core & Extended, pp. 220–264', wb: 'Control paper A7',
  objectives: [
    'Find a term and a sum of an arithmetic and of a geometric progression under time.',
    'Sum an infinite decreasing progression, stating the condition.',
    'Find the nth term of a sequence given only its first few terms.',
    'Classify each lost mark and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Arithmetic progression', 'Arifmetik progressiya', 'Арифметическая прогрессия'],
    ['Geometric progression', 'Geometrik progressiya', 'Геометрическая прогрессия'],
    ['Common ratio', 'Maxraj', 'Знаменатель'],
    ['Infinite sum', 'Cheksiz yig‘indi', 'Бесконечная сумма'],
    ['Condition', 'Shart', 'Условие'],
    ['nth term', 'n-had', 'n-й член'],
    ['Revision', 'Takrorlash', 'Повторение']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [12, 'Answers'], [20, 'Diagnosis and rewrite'], [5, 'The map']],
  sections: [
    {
      h: 'The paper — 30 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>In an AP, ${m('a₁ = 4')}, ${m('d = 6')}: find ${m('a₁₂')} and ${m('S₁₂')}</td><td class="m">5</td><td>L72–76</td></tr>
        <tr><td>2</td><td>In a GP, ${m('b₂ = 12')} and ${m('b₅ = 96')}: find ${m('b₁')} and ${m('q')}</td><td class="m">5</td><td>L79–80</td></tr>
        <tr><td>3</td><td>Find ${m('S₆')} of ${m('3, 6, 12, …')}</td><td class="m">5</td><td>L81–82</td></tr>
        <tr><td>4</td><td>Sum ${m('12 + 4 + ' + f('4', '3') + ' + …')} to infinity</td><td class="m">5</td><td>L83–84</td></tr>
        <tr><td>5</td><td>Write ${m('0.272727…')} as a fraction</td><td class="m">5</td><td>L83–84</td></tr>
        <tr><td>6</td><td>Find the ${m('n')}th term of ${m('2, 5, 10, 17, …')}</td><td class="m">5</td><td>L85</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks actually go</div>
      Q2 carries two marks for dividing rather than solving two equations; Q4 one for stating
      ${m('|q| < 1')}; Q5 two for identifying ${m('b₁')} and ${m('q')} correctly; Q6 one for running
      the second-difference test before guessing.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>exponent ${m('n')} instead of ${m('n − 1')}</td><td class="m">b₁ qⁿ</td><td>test ${m('n = 1')}</td></tr>
        <tr><td>AP formula used on a GP</td><td class="m">a₁ + (n − 1)d</td><td>check the ratios first</td></tr>
        <tr><td>the two ${m('Sₙ')} forms mixed</td><td class="m">${f('b₁(qⁿ − 1)', '1 − q')}</td><td>pick one and write it out</td></tr>
        <tr><td>condition not stated</td><td class="m">S = ${f('b₁', '1 − q')} with no comment</td><td>“since ${m('|q| < 1')}…”</td></tr>
        <tr><td>recurring decimal ${m('b₁')} wrong</td><td class="m">b₁ = 27</td><td class="m">b₁ = ${f('27', '100')}</td></tr>
        <tr><td>fraction not cancelled</td><td class="m">${f('27', '99')}</td><td class="m">${f('3', '11')}</td></tr>
        <tr><td>quadratic sequence guessed</td><td class="m">3n − 1</td><td>second differences first</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'Chapter IV as one map',
      html: `<div class="tablewrap"><table>
      <thead><tr><th></th><th>Arithmetic</th><th>Geometric</th></tr></thead>
      <tbody>
        <tr><td>step</td><td>add ${m('d')}</td><td>multiply by ${m('q')}</td></tr>
        <tr><td class="m">n</td><td class="m">aₙ = a₁ + (n − 1)d</td><td class="m">bₙ = b₁q${p('', 'n−1')}</td></tr>
        <tr><td>middle term</td><td class="m">2aₙ = aₙ₋₁ + aₙ₊₁</td><td class="m">bₙ² = bₙ₋₁ bₙ₊₁</td></tr>
        <tr><td>sum</td><td class="m">${f('n(a₁ + aₙ)', '2')}</td><td class="m">${f('b₁(qⁿ − 1)', 'q − 1')}</td></tr>
        <tr><td>proof of the sum</td><td>pair the ends</td><td>shift and subtract</td></tr>
        <tr><td>infinite sum</td><td>never</td><td class="m">${f('b₁', '1 − q')}, |q| < 1</td></tr>
        <tr><td>in life</td><td>simple interest</td><td>compound interest</td></tr>
      </tbody></table></div>
      {{fig:gpConverge:The geometric case, where the partial sums have a ceiling — the arithmetic ones never do.}}
      <div class="keybox"><div class="klabel">Looking forward</div>
      The last chapter of the year is probability: events, the classical definition, and relative
      frequency. It borrows the counting habits of this chapter but nothing of its formulae — and it
      finishes the Grade 9 course.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q2: ' + m('b₂ = 12') + ', ' + m('b₅ = 96') + '.',
      steps: [
        [m(f('b₅', 'b₂') + ' = q³ = ' + f('96', '12') + ' = 8'), m('b₁') + ' cancels.'],
        [m('q = 2'), ''],
        [m('b₁ = ' + f('12', '2') + ' = 6'), ''],
        [m('b₁ = 6, q = 2'), '']
      ],
      ans: m('b₁ = 6, q = 2')
    },
    {
      q: 'Model answer, Q4: sum ' + m('12 + 4 + ' + f('4', '3') + ' + …') + '.',
      steps: [
        [m('q = ' + f('4', '12') + ' = ' + f('1', '3')), ''],
        [m('|q| < 1') + ', so the sum exists.', 'State it.'],
        [m('S = ' + f('12', '1 − ' + f('1', '3')) + ' = ' + f('12', f('2', '3'))), ''],
        [m('= 18'), '']
      ],
      ans: m('18')
    },
    {
      q: 'Model answer, Q5: write ' + m('0.272727…') + ' as a fraction.',
      steps: [
        [m('b₁ = ' + f('27', '100') + ', q = ' + f('1', '100')), ''],
        [m('S = ' + f(f('27', '100'), '1 − ' + f('1', '100'))), ''],
        [m('= ' + f('27', '99')), ''],
        [m('= ' + f('3', '11')), 'Cancel by ' + m('9') + '.']
      ],
      ans: m(f('3', '11'))
    }
  ],
  modelNote: 'Put an AP and a GP side by side with the same first term and ask which is larger at n = 5 and at n = 20; the answer changes, and that is the chapter in one picture.',
  interactive: {
    type: 'quiz',
    title: 'Chapter IV in twelve questions',
    hint: 'Arithmetic and geometric, alternating.',
    items: [
      { q: 'In an AP, ' + m('d') + ' is:', a: [m(f('aₙ₊₁', 'aₙ')), m('aₙ₊₁ − aₙ'), m('a₁'), m('n')], c: 1, why: 'The difference.' },
      { q: 'In a GP, ' + m('q') + ' is:', a: [m('bₙ₊₁ − bₙ'), m(f('bₙ₊₁', 'bₙ')), m('b₁'), m('n')], c: 1, why: 'The ratio.' },
      { q: m('aₙ') + ' equals:', a: [m('a₁ + nd'), m('a₁ + (n − 1)d'), m('nd'), m('a₁ d')], c: 1, why: m('n − 1') + ' steps.' },
      { q: m('bₙ') + ' equals:', a: [m('b₁ q') + p('', 'n'), m('b₁ q') + p('', 'n−1'), m('b₁ + nq'), m('nq')], c: 1, why: m('n − 1') + ' multiplications.' },
      { q: m('Sₙ') + ' of an AP:', a: [m(f('n(a₁ + aₙ)', '2')), m(f('b₁(qⁿ − 1)', 'q − 1')), m('n a₁'), m('a₁ + aₙ')], c: 0, why: 'Pair the ends.' },
      { q: m('Sₙ') + ' of a GP:', a: [m(f('n(b₁ + bₙ)', '2')), m(f('b₁(qⁿ − 1)', 'q − 1')), m('n b₁'), m('b₁ qⁿ')], c: 1, why: 'Shift and subtract.' },
      { q: 'The GP sum formula fails when:', a: [m('q = 0'), m('q = 1'), m('q < 0'), 'never'], c: 1, why: 'Zero denominator.' },
      { q: 'An infinite GP has a sum when:', a: [m('q > 0'), m('|q| < 1'), m('q > 1'), 'always'], c: 1, why: 'The terms must shrink.' },
      { q: m('0.999…') + ' equals:', a: ['nearly ' + m('1'), m('1'), m('0.99'), m(f('9', '10'))], c: 1, why: 'Exactly.' },
      { q: 'Constant second differences mean:', a: ['linear', 'quadratic', 'geometric', 'none'], c: 1, why: m('an² + bn + c') + '.' },
      { q: 'Compound interest is:', a: ['an AP', 'a GP', 'neither', 'both'], c: 1, why: 'It multiplies.' },
      { q: 'The sum of the first ' + m('n') + ' odd numbers:', a: [m('n'), m('n²'), m('2n'), m('n(n+1)')], c: 1, why: 'A square.' }
    ]
  },
  quiz: [
    { q: 'Q2 is fastest by:', a: ['two equations', 'dividing one by the other', 'a graph', 'guessing'], c: 1, why: m('b₁') + ' cancels.' },
    { q: 'Q4 must include:', a: ['a decimal', 'the condition ' + m('|q| < 1'), 'a graph', m('n')], c: 1, why: 'It is part of the statement.' },
    { q: 'In Q5, ' + m('b₁') + ' is:', a: [m('27'), m(f('27', '100')), m(f('27', '10')), m('0.27')], c: 1, why: 'The first block, over ' + m('100') + '.' },
    { q: 'Q6 begins with:', a: ['guessing', 'the second differences', 'the ratios', 'a graph'], c: 1, why: 'They identify the type.' },
    { q: m('2, 5, 10, 17, …') + ' has ' + m('n') + 'th term:', a: [m('3n − 1'), m('n² + 1'), m('2n²'), m('n² + n')], c: 1, why: 'Second differences ' + m('2') + '.' },
    { q: 'Work on the mistakes means:', a: ['fix the wrong line', 'rewrite the solution', 'copy the answer', 'skip it'], c: 1, why: 'The whole solution, again.' }
  ],
  practice: {
    easy: [
      [m('a₁ = 4, d = 6') + ': ' + m('a₁₂'), m('70')],
      ['Same: ' + m('S₁₂'), m('444')],
      [m('b₂ = 12, b₅ = 96') + ': ' + m('q'), m('2')],
      ['Same: ' + m('b₁'), m('6')],
      [m('S₆') + ' of ' + m('3, 6, 12, …'), m('189')],
      [m('12 + 4 + ' + f('4', '3') + ' + …'), m('18')],
      [m('0.272727…'), m(f('3', '11'))]
    ],
    med: [
      [m('n') + 'th term of ' + m('2, 5, 10, 17, …'), m('n² + 1')],
      [m('S₁₀') + ' of ' + m('1, 4, 7, …'), m('145')],
      [m('S₅') + ' of ' + m('2, 6, 18, …'), m('242')],
      ['An infinite GP with ' + m('b₁ = 20, q = 0.2'), m('25')],
      [m('0.454545…'), m(f('5', '11'))],
      ['Which term of ' + m('4, 10, 16, …') + ' is ' + m('100') + '?', 'The 17th'],
      ['Which term of ' + m('3, 6, 12, …') + ' is ' + m('384') + '?', 'The 8th']
    ],
    hard: [
      ['Three numbers in AP: sum ' + m('24') + ', and the squares sum to ' + m('200'), m('6, 8, 10')],
      ['Three numbers in GP: sum ' + m('14') + ', product ' + m('64'), m('2, 4, 8')],
      [m('S₄ = 30, S₈ = 510') + ' in a GP: ' + m('q'), m('2')],
      ['An infinite GP has ' + m('S = 16') + ' and ' + m('b₂ = 4') + ': find ' + m('q'), m(f('1', '2'))],
      [m('n') + 'th term of ' + m('1, 5, 12, 22, …'), m(f('n(3n − 1)', '2'))],
      ['A ball from ' + m('4 m') + ' rebounds ' + m(f('1', '2')) + ': total distance', m('12 m')],
      ['Sum ' + m('1 − ' + f('1', '2') + ' + ' + f('1', '4') + ' − …'), m(f('2', '3'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite in full every question that lost a mark before the probability chapter begins.',
  homework: [
    'In an AP, ' + m('a₃ = 10') + ' and ' + m('a₇ = 26') + '. Find ' + m('a₁') + ', ' + m('d') + ' and ' + m('S₁₀') + '.',
    'In a GP, ' + m('b₁ = 5') + ' and ' + m('q = 3') + '. Find ' + m('b₅') + ' and ' + m('S₅') + '.',
    'Sum ' + m('18 + 6 + 2 + …') + ' to infinity.',
    'Write ' + m('0.181818…') + ' as a fraction.',
    'Find the ' + m('n') + 'th term of ' + m('3, 9, 19, 33, …') + '.'
  ]
});

/* ============================== 45 ============================== */
G9_ALG.push({
  id: 'a9-45', stream: 'alg', grade: 9, quarter: 4, lessons: '88–89', hours: 2,
  title: 'Events, and the kinds of event',
  subtitle: 'Before any number can be attached to chance, the language has to be exact.',
  uz: 'Algebra 9, §35', uzPage: 'pp. 211–216',
  cam: 'IGX 8.1', camPage: 'Core & Extended, pp. 158–163', wb: 'Exercise 8.1',
  objectives: [
    'Distinguish a trial, an outcome and an event.',
    'Classify events as certain, impossible or random.',
    'Decide whether two events are mutually exclusive, and what the opposite event is.',
    'List the sample space of a simple experiment.'
  ],
  terms: [
    ['Trial', 'Sinov', 'Испытание'],
    ['Outcome', 'Natija', 'Исход'],
    ['Event', 'Hodisa', 'Событие'],
    ['Certain event', 'Muqarrar hodisa', 'Достоверное событие'],
    ['Impossible event', 'Mumkin bo‘lmagan hodisa', 'Невозможное событие'],
    ['Random event', 'Tasodifiy hodisa', 'Случайное событие'],
    ['Mutually exclusive', 'Birgalikda bo‘lmagan', 'Несовместные'],
    ['Complementary event', 'Qarama-qarshi hodisa', 'Противоположное событие']
  ],
  timing: [[13, 'Trial, outcome, event'], [20, 'Three kinds of event'], [23, 'Relations between events'], [20, 'The sample space'], [4, 'Homework']],
  sections: [
    {
      h: 'Trial, outcome, event',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Word</th><th>Means</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>trial</td><td>the experiment performed once</td><td>rolling a die</td></tr>
        <tr><td>outcome</td><td>one indivisible result</td><td class="m">4</td></tr>
        <tr><td>sample space</td><td>the set of all outcomes</td><td class="m">{1,2,3,4,5,6}</td></tr>
        <tr><td>event</td><td>a set of outcomes</td><td>“even”, i.e. ${m('{2,4,6}')}</td></tr>
      </tbody></table></div>
      <p>An <b>event</b> is any collection of outcomes, so it is a <b>subset</b> of the sample space —
      which is why the set notation of Quarter II reappears here almost unchanged.</p>
      <div class="keybox"><div class="klabel">Say the event out loud as a set</div>
      “An even number” is ${m('{2,4,6}')}; “more than 4” is ${m('{5,6}')}; “even and more than 4” is
      ${m('{6}')}. Writing the set removes almost every ambiguity that word problems in this chapter
      contain.</div>`
    },
    {
      h: 'Three kinds of event',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Kind</th><th>Happens</th><th>As a set</th><th>Example (a die)</th></tr></thead>
      <tbody>
        <tr><td>certain</td><td>always</td><td>the whole sample space</td><td>“less than 7”</td></tr>
        <tr><td>impossible</td><td>never</td><td class="m">∅</td><td>“equal to 8”</td></tr>
        <tr><td>random</td><td>sometimes</td><td>a proper non-empty subset</td><td>“even”</td></tr>
      </tbody></table></div>
      <p>Only random events are interesting, but naming the other two matters: a probability of
      ${m('1')} means certain, a probability of ${m('0')} means impossible, and every random event lies
      strictly between.</p>
      <div class="warn"><span class="wl">“Unlikely” is not “impossible”</span>
      Rolling six sixes in a row is unlikely — probability ${m(f('1', '46656'))} — but perfectly
      possible. Rolling a ${m('7')} is impossible. The two words describe different things, and the
      first chapter of probability exists largely to separate them.</div>`
    },
    {
      h: 'Relations between events',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Relation</th><th>Means</th><th>In sets</th><th>Example (a die)</th></tr></thead>
      <tbody>
        <tr><td>mutually exclusive</td><td>cannot both happen</td><td class="m">A ∩ B = ∅</td><td>“even” and “equal to 3”</td></tr>
        <tr><td>compatible</td><td>can both happen</td><td class="m">A ∩ B ≠ ∅</td><td>“even” and “more than 3”</td></tr>
        <tr><td>complementary</td><td>exactly one must happen</td><td class="m">B = A′</td><td>“even” and “odd”</td></tr>
        <tr><td>${m('A')} implies ${m('B')}</td><td>${m('A')} forces ${m('B')}</td><td class="m">A ⊂ B</td><td>“equal to 6” and “even”</td></tr>
      </tbody></table></div>
      {{fig:vennTwo:Mutually exclusive events do not overlap; complementary events fill the space between them.}}
      <p>Complementary events are mutually exclusive <b>and</b> cover everything. Two events can be
      mutually exclusive without being complementary — “equal to 1” and “equal to 2”, for example.</p>
      <div class="warn"><span class="wl">The opposite of “at least one” is “none”</span>
      Not “at most one”, and not “exactly one”. Getting the complement wrong is the single most common
      error in probability word problems, and it is a language error, not a mathematical one.</div>`
    },
    {
      h: 'The sample space',
      html: `<p>Listing all outcomes is the first step in nearly every probability question.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Experiment</th><th>Sample space</th><th>Size</th></tr></thead>
      <tbody>
        <tr><td>one coin</td><td class="m">{H, T}</td><td class="m">2</td></tr>
        <tr><td>two coins</td><td class="m">{HH, HT, TH, TT}</td><td class="m">4</td></tr>
        <tr><td>one die</td><td class="m">{1,…,6}</td><td class="m">6</td></tr>
        <tr><td>two dice</td><td>all ordered pairs</td><td class="m">36</td></tr>
        <tr><td>a card from a pack</td><td>all cards</td><td class="m">52</td></tr>
      </tbody></table></div>
      {{fig:treeDiagram:A tree diagram lists the sample space of a two-stage experiment without missing a branch.}}
      <div class="keybox"><div class="klabel">${m('HT')} and ${m('TH')} are different outcomes</div>
      With two coins there are four outcomes, not three. Treating “one head and one tail” as a single
      outcome makes it twice as likely as the others — and this is exactly the mistake that made
      probability a hard subject for two centuries.</div>`
    }
  ],
  examples: [
    {
      q: 'A die is rolled. Classify: (a) “less than 7”, (b) “equal to 8”, (c) “even”.',
      steps: [
        ['(a) The set is ' + m('{1,…,6}') + ' — everything.', 'Certain.'],
        ['(b) The set is ' + m('∅') + '.', 'Impossible.'],
        ['(c) The set is ' + m('{2,4,6}') + '.', 'Random.'],
        ['Certain, impossible, random.', '']
      ],
      ans: 'Certain, impossible, random'
    },
    {
      q: 'Are “even” and “more than 3” mutually exclusive on a die?',
      steps: [
        ['“even” ' + m('= {2,4,6}') + '.', ''],
        ['“more than 3” ' + m('= {4,5,6}') + '.', ''],
        [m('{2,4,6} ∩ {4,5,6} = {4,6} ≠ ∅'), ''],
        ['No — they are compatible.', '']
      ],
      ans: 'No — they can both happen'
    },
    {
      q: 'Two coins are tossed. List the sample space and the event “at least one head”.',
      steps: [
        ['Sample space: ' + m('{HH, HT, TH, TT}') + '.', 'Four outcomes.'],
        ['“at least one head” ' + m('= {HH, HT, TH}') + '.', ''],
        ['Its opposite is “no heads” ' + m('= {TT}') + '.', ''],
        ['Three outcomes out of four.', '']
      ],
      ans: m('{HH, HT, TH}') + ' — 3 of 4'
    }
  ],
  modelNote: 'Toss two coins twenty times and tally HH, HT, TH, TT; the class sees that “one of each” occurs about half the time, and the four-outcome sample space explains why.',
  interactive: {
    type: 'quiz',
    title: 'Certain, impossible, or random?',
    hint: 'Write the event as a set first.',
    items: [
      { q: 'Throwing a die and getting a number under ' + m('7') + ' is:', a: ['certain', 'impossible', 'random', 'equally likely'], c: 0, why: 'Every face qualifies.' },
      { q: 'Getting a ' + m('7') + ' on one die is:', a: ['certain', 'impossible', 'random', 'likely'], c: 1, why: 'No such face.' },
      { q: 'Getting an even number is:', a: ['certain', 'impossible', 'random', 'never'], c: 2, why: 'It may or may not happen.' },
      { q: 'The probability of a certain event is:', a: [m('0'), m('0.5'), m('1'), 'undefined'], c: 2, why: 'Always.' },
      { q: 'The probability of an impossible event is:', a: [m('0'), m('0.5'), m('1'), m('−1')], c: 0, why: 'No favourable outcomes.' },
      { q: 'Two events that cannot both happen are:', a: ['independent', 'mutually exclusive', 'complementary always', 'certain'], c: 1, why: 'Disjoint sets.' },
      { q: 'An event and its complement have probabilities that:', a: ['are equal', 'add to ' + m('1'), 'multiply to ' + m('1'), 'add to ' + m('0')], c: 1, why: 'One of them must happen.' },
      { q: 'Every probability lies:', a: ['between ' + m('0') + ' and ' + m('1'), 'above ' + m('1'), 'below ' + m('0'), 'anywhere'], c: 0, why: 'A part of the whole.' }
    ]
  },
  quiz: [
    { q: 'An event is:', a: ['one outcome', 'a set of outcomes', 'the whole trial', 'a number'], c: 1, why: 'A subset of the sample space.' },
    { q: '“Rolling a 7 on a die” is:', a: ['certain', 'impossible', 'random', 'unlikely'], c: 1, why: 'The set is ' + m('∅') + '.' },
    { q: 'Mutually exclusive means:', a: [m('A ∩ B = ∅'), m('A ∪ B = ξ'), m('A ⊂ B'), m('A = B')], c: 0, why: 'They cannot both happen.' },
    { q: 'The opposite of “at least one head” is:', a: ['at most one head', 'exactly one head', 'no heads', 'two heads'], c: 2, why: 'Nothing, rather than something.' },
    { q: 'Two coins have how many outcomes?', a: [m('2'), m('3'), m('4'), m('6')], c: 2, why: m('HT') + ' and ' + m('TH') + ' differ.' },
    { q: 'A certain event has probability:', a: [m('0'), m(f('1', '2')), m('1'), 'undefined'], c: 2, why: 'It always happens.' }
  ],
  practice: {
    easy: [
      ['“less than 7” on a die', 'Certain'],
      ['“equal to 8” on a die', 'Impossible'],
      ['“even” on a die', 'Random'],
      ['Sample space of one coin', m('{H, T}')],
      ['Sample space of one die', m('{1,…,6}')],
      ['Number of outcomes for two coins', m('4')],
      ['Number of outcomes for two dice', m('36')]
    ],
    med: [
      ['“even” as a set', m('{2,4,6}')],
      ['“more than 3” as a set', m('{4,5,6}')],
      ['Are they mutually exclusive?', 'No'],
      ['Opposite of “even”', '“odd”'],
      ['Opposite of “at least one head”', '“no heads”'],
      ['“at least one head” with two coins', m('{HH, HT, TH}')],
      ['Is “equal to 6” ⊂ “even”?', 'Yes']
    ],
    hard: [
      ['Two dice: outcomes with a sum of ' + m('7'), m('6')],
      ['Two dice: outcomes with a sum of ' + m('2'), m('1')],
      ['Opposite of “at most two heads” in three tosses', '“three heads”'],
      ['Three coins: how many outcomes?', m('8')],
      ['Three coins: “exactly two heads” as a set', m('{HHT, HTH, THH}')],
      ['Give two mutually exclusive but not complementary events on a die', '“= 1” and “= 2”'],
      ['A card: are “red” and “king” mutually exclusive?', 'No — there are two red kings']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write every event as a set before answering anything about it.',
  homework: [
    'Classify on a die: “more than 0”, “equal to 0”, “odd”.',
    'List the sample space for three coins.',
    'Write “at least two heads” in three tosses as a set.',
    'Give the opposite of “at least one six” in two rolls.',
    'Give an example of two compatible events on a die, and two mutually exclusive ones.'
  ]
});

/* ============================== 46 ============================== */
G9_ALG.push({
  id: 'a9-46', stream: 'alg', grade: 9, quarter: 4, lessons: '90–91', hours: 2,
  title: 'The classical definition of probability',
  subtitle: 'Count the favourable outcomes, count them all, and divide — but only when they are equally likely.',
  uz: 'Algebra 9, §36', uzPage: 'pp. 217–223',
  cam: 'IGX 8.2', camPage: 'Core & Extended, pp. 164–170', wb: 'Exercise 8.2',
  objectives: [
    'State and apply P(A) = m/n, naming the condition of equal likelihood.',
    'Know that 0 ≤ P(A) ≤ 1 and that P(A) + P(A′) = 1.',
    'Compute probabilities for dice, coins, cards and coloured balls.',
    'Use the complement when it is quicker than direct counting.'
  ],
  terms: [
    ['Probability', 'Ehtimollik', 'Вероятность'],
    ['Favourable outcome', 'Qulay natija', 'Благоприятный исход'],
    ['Equally likely', 'Teng imkoniyatli', 'Равновозможные'],
    ['Classical definition', 'Klassik ta’rif', 'Классическое определение'],
    ['Complement rule', 'Qarama-qarshi hodisa qoidasi', 'Правило дополнения'],
    ['At least', 'Kamida', 'Хотя бы'],
    ['At most', 'Ko‘pi bilan', 'Не более'],
    ['Without replacement', 'Qaytarmasdan', 'Без возвращения']
  ],
  timing: [[13, 'The definition'], [20, 'What the number means'], [23, 'Counting carefully'], [20, 'The complement'], [4, 'Homework']],
  sections: [
    {
      h: 'The definition',
      html: `<p>If a trial has ${m('n')} <b>equally likely</b> outcomes and ${m('m')} of them belong to
      the event ${m('A')}, then</p>
      ${eq(m('P(A) = ' + f('m', 'n')) + '   —   ' + m(f('favourable outcomes', 'all outcomes')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Event</th><th class="m">m</th><th class="m">n</th><th class="m">P</th></tr></thead>
      <tbody>
        <tr><td>a die shows ${m('4')}</td><td class="m">1</td><td class="m">6</td><td class="m">${f('1', '6')}</td></tr>
        <tr><td>a die shows an even number</td><td class="m">3</td><td class="m">6</td><td class="m">${f('1', '2')}</td></tr>
        <tr><td>two coins give two heads</td><td class="m">1</td><td class="m">4</td><td class="m">${f('1', '4')}</td></tr>
        <tr><td>a card is a heart</td><td class="m">13</td><td class="m">52</td><td class="m">${f('1', '4')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">“Equally likely” is a condition, not a decoration</span>
      A drawing pin lands point-up or point-down: two outcomes, but not equally likely, so the answer is
      <b>not</b> ${m(f('1', '2'))}. The classical definition simply does not apply, and the next lesson
      supplies what does.</div>`
    },
    {
      h: 'What the number means',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Property</th><th>Statement</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td>bounds</td><td class="m">0 ≤ P(A) ≤ 1</td><td class="m">0 ≤ m ≤ n</td></tr>
        <tr><td>impossible</td><td class="m">P(∅) = 0</td><td class="m">m = 0</td></tr>
        <tr><td>certain</td><td class="m">P(ξ) = 1</td><td class="m">m = n</td></tr>
        <tr><td>complement</td><td class="m">P(A) + P(A′) = 1</td><td>every outcome is in one or the other</td></tr>
      </tbody></table></div>
      <p>A probability is never negative, never greater than ${m('1')}, and is best given as a fraction
      in lowest terms unless the question asks for a decimal or a percentage.</p>
      <div class="warn"><span class="wl">An answer of ${m(f('7', '6'))} or ${m('−0.2')} is not a small slip</span>
      It is a signal that the counting went wrong — usually that ${m('n')} was taken too small. Check
      every probability against ${m('0 ≤ P ≤ 1')} before writing it down.</div>`
    },
    {
      h: 'Counting carefully',
      html: `<p>Almost every mark in this topic is a counting mark.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Experiment</th><th class="m">n</th><th>A trap</th></tr></thead>
      <tbody>
        <tr><td>two dice</td><td class="m">36</td><td>${m('(2,5)')} and ${m('(5,2)')} are different</td></tr>
        <tr><td>two coins</td><td class="m">4</td><td class="m">HT ≠ TH</td></tr>
        <tr><td>drawing 2 balls of 10, without replacement</td><td class="m">90</td><td>${m('n')} changes after the first draw</td></tr>
        <tr><td>a card from a pack</td><td class="m">52</td><td>four suits, thirteen ranks</td></tr>
      </tbody></table></div>
      <p><b>Example.</b> Two dice. ${m('P')}(sum ${m('= 7')}): the favourable pairs are
      ${m('(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)')} — six of them — so ${m('P = ' + f('6', '36') + ' = ' + f('1', '6'))}.
      A sum of ${m('7')} is the most likely total, and this counting is why.</p>
      <div class="keybox"><div class="klabel">Draw the ${m('6 × 6')} grid once</div>
      Every two-dice question in the Grade 9 course can be read off a single ${m('6 × 6')} table of
      sums. Drawing it once, at the start of the exercise, turns ten questions into ten readings.</div>`
    },
    {
      h: 'The complement',
      html: `<p>When an event contains many outcomes and its opposite contains few, count the opposite.</p>
      ${eq(m('P(A) = 1 − P(A′)'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Event</th><th>Direct count</th><th>By complement</th></tr></thead>
      <tbody>
        <tr><td>at least one six in two rolls</td><td class="m">11</td><td class="m">1 − ${f('25', '36')} = ${f('11', '36')}</td></tr>
        <tr><td>at least one head in three tosses</td><td class="m">7</td><td class="m">1 − ${f('1', '8')} = ${f('7', '8')}</td></tr>
        <tr><td>a card that is not a heart</td><td class="m">39</td><td class="m">1 − ${f('1', '4')} = ${f('3', '4')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">“At least one” almost always means “one minus none”</div>
      Counting the ways to get at least one six means adding several cases; counting the ways to get
      none means one multiplication. Recognising the phrase is worth more marks in this chapter than
      any formula.</div>`
    }
  ],
  examples: [
    {
      q: 'A die is rolled. Find ' + m('P') + '(even) and ' + m('P') + '(more than 4).',
      steps: [
        [m('n = 6') + ' equally likely outcomes.', ''],
        ['even ' + m('= {2,4,6}') + ', so ' + m('m = 3') + '.', ''],
        [m('P = ' + f('3', '6') + ' = ' + f('1', '2')), ''],
        ['more than 4 ' + m('= {5,6}') + ': ' + m('P = ' + f('2', '6') + ' = ' + f('1', '3')) + '.', '']
      ],
      ans: m(f('1', '2')) + ' and ' + m(f('1', '3'))
    },
    {
      q: 'Two dice are rolled. Find ' + m('P') + '(the sum is 7).',
      steps: [
        [m('n = 6 × 6 = 36'), 'Ordered pairs.'],
        ['Favourable: ' + m('(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)') + '.', ''],
        [m('m = 6'), ''],
        [m('P = ' + f('6', '36') + ' = ' + f('1', '6')), '']
      ],
      ans: m(f('1', '6'))
    },
    {
      q: 'Two dice are rolled. Find ' + m('P') + '(at least one six).',
      steps: [
        ['The opposite is “no six at all”.', ''],
        ['No six: ' + m('5 × 5 = 25') + ' outcomes.', ''],
        [m('P') + '(no six) ' + m('= ' + f('25', '36')) + '.', ''],
        [m('P = 1 − ' + f('25', '36') + ' = ' + f('11', '36')), '']
      ],
      ans: m(f('11', '36'))
    }
  ],
  modelNote: 'Draw the 6 × 6 grid of dice sums on the board and leave it there for the whole chapter; almost every question becomes a matter of counting cells.',
  interactive: {
    type: 'quiz',
    title: 'Count, count, divide',
    hint: 'Find n first, then m.',
    items: [
      { q: 'One die: ' + m('P') + '(an even number) is:', a: [m(f('1', '6')), m(f('1', '3')), m(f('1', '2')), m(f('2', '3'))], c: 2, why: m('3') + ' of ' + m('6') + '.' },
      { q: 'One die: ' + m('P') + '(a number over ' + m('4') + ') is:', a: [m(f('1', '6')), m(f('1', '3')), m(f('1', '2')), m(f('2', '3'))], c: 1, why: m('5') + ' and ' + m('6') + '.' },
      { q: 'A pack of ' + m('52') + ' cards: ' + m('P') + '(a heart) is:', a: [m(f('1', '13')), m(f('1', '4')), m(f('1', '2')), m(f('1', '52'))], c: 1, why: m('13') + ' of ' + m('52') + '.' },
      { q: 'Two coins: ' + m('P') + '(two heads) is:', a: [m(f('1', '2')), m(f('1', '3')), m(f('1', '4')), m(f('3', '4'))], c: 2, why: 'One of four outcomes.' },
      { q: 'Two dice: how many outcomes in total?', a: [m('12'), m('24'), m('36'), m('6')], c: 2, why: m('6 · 6') + '.' },
      { q: 'Two dice: ' + m('P') + '(a total of ' + m('7') + ') is:', a: [m(f('1', '6')), m(f('1', '9')), m(f('1', '12')), m(f('5', '36'))], c: 0, why: m('6') + ' of ' + m('36') + '.' },
      { q: 'A bag of ' + m('4') + ' red and ' + m('6') + ' blue: ' + m('P') + '(red) is:', a: [m(f('2', '5')), m(f('3', '5')), m(f('4', '6')), m(f('1', '4'))], c: 0, why: m(f('4', '10')) + '.' },
      { q: 'If ' + m('P(A) = 0.3') + ' then ' + m('P') + '(not ' + m('A') + ') is:', a: [m('0.3'), m('0.7'), m('1.3'), m('0')], c: 1, why: 'They add to ' + m('1') + '.' }
    ]
  },
  quiz: [
    { q: m('P(A)') + ' equals:', a: [m(f('n', 'm')), m(f('m', 'n')), m('m n'), m('m − n')], c: 1, why: 'Favourable over all.' },
    { q: 'The definition requires the outcomes to be:', a: ['few', 'equally likely', 'independent', 'positive'], c: 1, why: 'Otherwise it does not apply.' },
    { q: m('P') + ' of a certain event:', a: [m('0'), m(f('1', '2')), m('1'), m('∞')], c: 2, why: m('m = n') + '.' },
    { q: m('P(A) + P(A′)') + ' equals:', a: [m('0'), m(f('1', '2')), m('1'), m('2')], c: 2, why: 'Every outcome is in one of them.' },
    { q: 'Two dice: ' + m('P') + '(sum ' + m('7') + ') =', a: [m(f('1', '6')), m(f('1', '9')), m(f('1', '12')), m(f('1', '36'))], c: 0, why: 'Six pairs out of ' + m('36') + '.' },
    { q: '“At least one” is best done by:', a: ['direct counting', 'the complement', 'a tree', 'guessing'], c: 1, why: m('1 − P') + '(none).' }
  ],
  practice: {
    easy: [
      [m('P') + '(a die shows 4)', m(f('1', '6'))],
      [m('P') + '(a die shows even)', m(f('1', '2'))],
      [m('P') + '(a die shows more than 4)', m(f('1', '3'))],
      [m('P') + '(a coin shows heads)', m(f('1', '2'))],
      [m('P') + '(two coins give two heads)', m(f('1', '4'))],
      [m('P') + '(a card is a heart)', m(f('1', '4'))],
      [m('P') + '(a die shows 7)', m('0')]
    ],
    med: [
      ['Two dice: ' + m('P') + '(sum 7)', m(f('1', '6'))],
      ['Two dice: ' + m('P') + '(sum 2)', m(f('1', '36'))],
      ['Two dice: ' + m('P') + '(at least one six)', m(f('11', '36'))],
      ['Three coins: ' + m('P') + '(exactly two heads)', m(f('3', '8'))],
      ['Three coins: ' + m('P') + '(at least one head)', m(f('7', '8'))],
      ['A bag: ' + m('4') + ' red, ' + m('6') + ' blue. ' + m('P') + '(red)', m(f('2', '5'))],
      ['A card: ' + m('P') + '(a king)', m(f('1', '13'))]
    ],
    hard: [
      ['Two dice: ' + m('P') + '(sum is even)', m(f('1', '2'))],
      ['Two dice: ' + m('P') + '(the numbers differ by 1)', m(f('5', '18'))],
      ['A bag: ' + m('3') + ' red, ' + m('5') + ' blue; two drawn without replacement. ' + m('P') + '(both red)', m(f('3', '28'))],
      ['Same bag: ' + m('P') + '(one of each)', m(f('15', '28'))],
      ['A card: ' + m('P') + '(red or a king)', m(f('7', '13'))],
      ['Three dice: ' + m('P') + '(at least one six)', m(f('91', '216'))],
      ['A number from ' + m('1') + ' to ' + m('20') + ': ' + m('P') + '(a multiple of 3 or of 5)', m(f('9', '20'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write ' + m('n') + ' and ' + m('m') + ' explicitly before dividing, and check that ' + m('0 ≤ P ≤ 1') + '.',
  homework: [
    'A die is rolled. Find ' + m('P') + '(odd), ' + m('P') + '(less than 3) and ' + m('P') + '(a multiple of 3).',
    'Two dice are rolled. Find ' + m('P') + '(sum 8) and ' + m('P') + '(a double).',
    'Three coins are tossed. Find ' + m('P') + '(exactly one head).',
    'A bag holds ' + m('5') + ' red and ' + m('7') + ' green balls. Find ' + m('P') + '(green).',
    'Find ' + m('P') + '(at least one head in four tosses) using the complement.'
  ]
});

/* ============================== 47 ============================== */
G9_ALG.push({
  id: 'a9-47', stream: 'alg', grade: 9, quarter: 4, lessons: '92–93', hours: 2,
  title: 'Relative frequency and statistical probability',
  subtitle: 'When outcomes are not equally likely, count what actually happens instead.',
  uz: 'Algebra 9, §37', uzPage: 'pp. 224–229',
  cam: 'IGX 8.3', camPage: 'Core & Extended, pp. 171–176', wb: 'Exercise 8.3',
  objectives: [
    'Define relative frequency and compute it from a table of results.',
    'Explain why relative frequency settles down as the number of trials grows.',
    'Use relative frequency to estimate a probability, and to estimate expected numbers.',
    'Say when the classical definition applies and when it does not.'
  ],
  terms: [
    ['Relative frequency', 'Nisbiy chastota', 'Относительная частота'],
    ['Frequency', 'Chastota', 'Частота'],
    ['Number of trials', 'Sinovlar soni', 'Число испытаний'],
    ['Estimate', 'Baholash', 'Оценка'],
    ['Stabilises', 'Barqarorlashadi', 'Стабилизируется'],
    ['Expected number', 'Kutilayotgan son', 'Ожидаемое число'],
    ['Biased', 'Nosimmetrik', 'Смещённый'],
    ['Fair', 'Simmetrik', 'Правильный']
  ],
  timing: [[13, 'When counting outcomes fails'], [20, 'Relative frequency'], [23, 'Why it settles'], [20, 'Estimating with it'], [4, 'Homework']],
  sections: [
    {
      h: 'When counting outcomes fails',
      html: `<p>The classical definition needs equally likely outcomes. Very often they are not.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Trial</th><th>Outcomes</th><th>Equally likely?</th></tr></thead>
      <tbody>
        <tr><td>a fair die</td><td class="m">6</td><td>yes</td></tr>
        <tr><td>a drawing pin</td><td class="m">2</td><td>no</td></tr>
        <tr><td>a weighted die</td><td class="m">6</td><td>no</td></tr>
        <tr><td>whether it rains tomorrow</td><td class="m">2</td><td>no</td></tr>
        <tr><td>whether a bulb lasts ${m('1000')} hours</td><td class="m">2</td><td>no</td></tr>
      </tbody></table></div>
      <p>For all but the first, the probability cannot be calculated in advance. It must be
      <b>measured</b>.</p>
      <div class="keybox"><div class="klabel">Two definitions, two situations</div>
      The classical definition is used when the symmetry of the object tells you the answer; the
      statistical one when only experiment can. Neither replaces the other, and saying which one a
      question needs is itself a mark.</div>`
    },
    {
      h: 'Relative frequency',
      html: `<p>Perform the trial ${m('N')} times and let the event happen ${m('M')} times. The
      <b>relative frequency</b> is</p>
      ${eq(m('W(A) = ' + f('M', 'N')), true)}
      <p><b>Example.</b> A drawing pin is dropped ${m('200')} times and lands point-up ${m('124')} times.
      Then ${m('W = ' + f('124', '200') + ' = 0.62')}, and ${m('0.62')} is the best available estimate of
      the probability.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Result</th><th>Frequency</th><th>Relative frequency</th></tr></thead>
      <tbody>
        <tr><td>point up</td><td class="m">124</td><td class="m">0.62</td></tr>
        <tr><td>point down</td><td class="m">76</td><td class="m">0.38</td></tr>
        <tr><td>total</td><td class="m">200</td><td class="m">1.00</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The relative frequencies of all outcomes add to ${m('1')}</span>
      Exactly as probabilities do. A table whose last column does not total ${m('1')} contains an
      arithmetic error, and checking it takes three seconds.</div>`
    },
    {
      h: 'Why it settles',
      html: `<p>Repeat the experiment in blocks and watch the relative frequency:</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">N</th><th class="m">10</th><th class="m">50</th><th class="m">100</th><th class="m">500</th><th class="m">5000</th></tr></thead>
      <tbody>
        <tr><td class="m">W</td><td class="m">0.70</td><td class="m">0.58</td><td class="m">0.63</td><td class="m">0.615</td><td class="m">0.618</td></tr>
      </tbody></table></div>
      {{fig:frequencyPolygon:As the number of trials grows the relative frequency wanders less and less.}}
      <p>The values jump about at first and then settle. This <b>stability of relative frequency</b> is
      an experimental fact, observed for three centuries, and it is what makes probability a science
      rather than an opinion.</p>
      <div class="warn"><span class="wl">Ten trials prove nothing</span>
      Getting seven heads in ten tosses is entirely ordinary for a fair coin. Declaring the coin biased
      on that evidence is the classic error; a few hundred trials are needed before a departure from
      ${m('0.5')} means anything.</div>`
    },
    {
      h: 'Estimating with it',
      html: `<p>Once ${m('P')} is estimated, the expected number of occurrences in ${m('N')} future trials
      is ${m('N × P')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>the pin, ${m('500')} more drops</td><td class="m">500 × 0.62</td><td class="m">310</td></tr>
        <tr><td>a die, ${m('P')}(six) ${m('= ' + f('1', '6'))}, ${m('300')} rolls</td><td class="m">300 × ${f('1', '6')}</td><td class="m">50</td></tr>
        <tr><td>${m('3%')} of bulbs are faulty, ${m('2000')} bulbs</td><td class="m">2000 × 0.03</td><td class="m">60</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">“Expected” means on average, not exactly</div>
      Fifty sixes in ${m('300')} rolls is what the arithmetic predicts; ${m('47')} or ${m('55')} would
      surprise nobody. The expected number is the centre of a spread, and a question asking “how many
      would you expect” is asking for that centre.</div>`
    }
  ],
  examples: [
    {
      q: 'A pin is dropped ' + m('200') + ' times and lands point-up ' + m('124') + ' times. Estimate the probability, and predict the point-up count in ' + m('500') + ' more drops.',
      steps: [
        [m('W = ' + f('124', '200')), ''],
        [m('= 0.62'), 'The estimate.'],
        [m('500 × 0.62'), ''],
        [m('= 310') + ' times.', 'Expected, not exact.']
      ],
      ans: m('0.62') + '; about ' + m('310')
    },
    {
      q: 'A die is rolled ' + m('600') + ' times; a six appears ' + m('92') + ' times. Is there evidence of bias?',
      steps: [
        [m('W = ' + f('92', '600') + ' ≈ 0.153'), ''],
        ['A fair die would give ' + m(f('1', '6') + ' ≈ 0.167') + '.', ''],
        ['Expected count ' + m('100') + '; observed ' + m('92') + '.', ''],
        ['The difference is small for ' + m('600') + ' trials — no clear evidence.', 'More trials would be needed.']
      ],
      ans: 'No clear evidence of bias'
    },
    {
      q: 'In a school of ' + m('800') + ', a survey of ' + m('50') + ' pupils found ' + m('18') + ' walk to school. Estimate how many walk in total.',
      steps: [
        [m('W = ' + f('18', '50') + ' = 0.36'), ''],
        [m('800 × 0.36'), ''],
        [m('= 288'), ''],
        ['About ' + m('288') + ' pupils.', 'A sample of ' + m('50') + ' is small — treat it as an estimate.']
      ],
      ans: 'About ' + m('288')
    }
  ],
  modelNote: 'Have every pupil toss a coin twenty times and pool the results on the board; the class watches the pooled relative frequency approach 0.5 while individual results scatter wildly.',
  interactive: {
    type: 'averages',
    title: 'Relative frequency as trials grow',
    hint: 'Add trials and watch the value settle.'
  },
  quiz: [
    { q: 'Relative frequency is:', a: [m(f('M', 'N')), m(f('N', 'M')), m('M N'), m('M − N')], c: 0, why: 'Occurrences over trials.' },
    { q: 'It is used when outcomes are:', a: ['equally likely', 'not equally likely', 'few', 'many'], c: 1, why: 'The classical definition fails there.' },
    { q: 'As ' + m('N') + ' grows, ' + m('W') + ':', a: ['grows', 'settles', 'falls', 'oscillates forever'], c: 1, why: 'Stability of relative frequency.' },
    { q: 'The relative frequencies of all outcomes total:', a: [m('0'), m(f('1', '2')), m('1'), m('N')], c: 2, why: 'Every trial gives one outcome.' },
    { q: 'Expected number in ' + m('N') + ' trials:', a: [m('N + P'), m('N × P'), m(f('N', 'P')), m('P')], c: 1, why: 'On average.' },
    { q: 'Seven heads in ten tosses shows:', a: ['bias', 'nothing much', 'a fair coin', 'an error'], c: 1, why: 'Ten trials prove nothing.' }
  ],
  practice: {
    easy: [
      [m('M = 124, N = 200') + ': ' + m('W'), m('0.62')],
      [m('M = 30, N = 50') + ': ' + m('W'), m('0.6')],
      [m('M = 9, N = 20') + ': ' + m('W'), m('0.45')],
      ['If ' + m('W') + '(up) ' + m('= 0.62') + ', ' + m('W') + '(down)', m('0.38')],
      ['Expected sixes in ' + m('300') + ' rolls', m('50')],
      ['Expected heads in ' + m('80') + ' tosses', m('40')],
      [m('3%') + ' faulty of ' + m('2000'), m('60')]
    ],
    med: [
      ['Pin: ' + m('0.62') + ', ' + m('500') + ' more drops', m('310')],
      ['Survey ' + m('18') + ' of ' + m('50') + ' walk; school of ' + m('800'), m('288')],
      ['A die: ' + m('92') + ' sixes in ' + m('600') + ': ' + m('W'), m('≈ 0.153')],
      ['Is that clear evidence of bias?', 'No'],
      ['A seed germinates ' + m('171') + ' times in ' + m('200') + ': ' + m('W'), m('0.855')],
      ['Expected germinations from ' + m('1000') + ' seeds', m('855')],
      ['Which definition for “will it rain tomorrow”?', 'Statistical']
    ],
    hard: [
      ['A biased coin: ' + m('W') + '(head) ' + m('= 0.6') + '. Expected heads in ' + m('250'), m('150')],
      ['A machine: ' + m('4') + ' faults in ' + m('500') + '. Expected faults in ' + m('12000'), m('96')],
      ['A survey of ' + m('40') + ' found ' + m('14') + ' left-handed. Estimate for ' + m('1200'), m('420')],
      ['Two dice rolled ' + m('360') + ' times: expected number of sevens', m('60')],
      ['A spinner: ' + m('W') + ' values ' + m('0.2, 0.35, x, 0.15') + '. Find ' + m('x'), m('0.3')],
      ['Why is ' + m('N = 10') + ' too few to judge a coin?', 'The scatter is far larger than the effect'],
      ['A die gives ' + m('40') + ' sixes in ' + m('120') + '. Comment.', m('W = ' + f('1', '3')) + ' — strong evidence of bias']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Say for every task whether the classical or the statistical definition applies, and why.',
  homework: [
    'A pin lands point-up ' + m('87') + ' times in ' + m('150') + ' drops. Find ' + m('W') + ' and predict the count in ' + m('600') + ' drops.',
    'A survey of ' + m('60') + ' pupils found ' + m('21') + ' cycle to school. Estimate the number in a school of ' + m('900') + '.',
    'A die is rolled ' + m('300') + ' times and gives ' + m('72') + ' sixes. Comment on whether it is fair.',
    'A factory finds ' + m('6') + ' faulty items in ' + m('400') + '. How many would you expect in ' + m('10 000') + '?',
    'Explain why the classical definition cannot be used for tomorrow’s weather.'
  ]
});

/* ============================== 48 ============================== */
G9_ALG.push({
  id: 'a9-48', stream: 'alg', grade: 9, quarter: 4, lessons: '94–95', hours: 2,
  title: 'Counting for probability — the two rules and arrangements',
  subtitle: 'Before a probability can be found, the outcomes must be counted — and counting has rules.',
  uz: 'Algebra 9, §38', uzPage: 'pp. 230–236',
  cam: 'IGX 8.4', camPage: 'Core & Extended, pp. 177–182', wb: 'Exercise 8.4',
  objectives: [
    'Use the multiplication rule for a sequence of independent choices.',
    'Use the addition rule for alternatives that cannot both happen.',
    'Count arrangements of n distinct objects and selections of k from n.',
    'Apply the counting to a probability question.'
  ],
  terms: [
    ['Multiplication rule', 'Ko‘paytirish qoidasi', 'Правило умножения'],
    ['Addition rule', 'Qo‘shish qoidasi', 'Правило сложения'],
    ['Arrangement', 'O‘rin almashtirish', 'Перестановка'],
    ['Selection', 'Tanlash', 'Выбор'],
    ['Factorial', 'Faktorial', 'Факториал'],
    ['Order matters', 'Tartib muhim', 'Порядок важен'],
    ['With replacement', 'Qaytarib', 'С возвращением'],
    ['Tree diagram', 'Daraxt diagrammasi', 'Дерево вариантов']
  ],
  timing: [[13, 'The two rules'], [20, 'Arrangements'], [23, 'Selections'], [20, 'Counting into probability'], [4, 'Homework']],
  sections: [
    {
      h: 'The two rules',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Rule</th><th>Use when</th><th>Count</th><th>Word</th></tr></thead>
      <tbody>
        <tr><td>multiplication</td><td>choices are made one after another</td><td class="m">m × n</td><td><b>and</b></td></tr>
        <tr><td>addition</td><td>the cases are alternatives</td><td class="m">m + n</td><td><b>or</b></td></tr>
      </tbody></table></div>
      <p><b>Multiplication.</b> Four shirts and three trousers give ${m('4 × 3 = 12')} outfits: a shirt
      <b>and</b> a pair of trousers.</p>
      <p><b>Addition.</b> Travelling by one of ${m('3')} buses <b>or</b> one of ${m('2')} trains gives
      ${m('3 + 2 = 5')} ways.</p>
      {{fig:treeDiagram:Each stage of a tree multiplies the branches; the leaves are all the outcomes.}}
      <div class="keybox"><div class="klabel">Find the word “and” or the word “or”</div>
      Almost every counting question is settled by which of the two words describes the situation. Read
      the sentence aloud and listen for it before writing anything.</div>`
    },
    {
      h: 'Arrangements',
      html: `<p>Arranging ${m('n')} distinct objects in a row: ${m('n')} choices for the first place,
      ${m('n − 1')} for the second, and so on.</p>
      ${eq(m('n! = n(n − 1)(n − 2) … 2 · 1'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">n</th><th class="m">1</th><th class="m">2</th><th class="m">3</th><th class="m">4</th><th class="m">5</th><th class="m">6</th></tr></thead>
      <tbody>
        <tr><td class="m">n!</td><td class="m">1</td><td class="m">2</td><td class="m">6</td><td class="m">24</td><td class="m">120</td><td class="m">720</td></tr>
      </tbody></table></div>
      <p>Arranging ${m('k')} of ${m('n')} in order — filling ${m('k')} places from ${m('n')} objects —
      gives ${m('n(n − 1) … (n − k + 1)')}. For example, choosing a president, a secretary and a
      treasurer from ${m('10')} people: ${m('10 × 9 × 8 = 720')} ways.</p>
      <div class="warn"><span class="wl">Choosing <i>with</i> replacement is different</span>
      A three-digit code from ${m('10')} digits, repeats allowed, is ${m('10³ = 1000')}, not
      ${m('10 × 9 × 8')}. Decide first whether an object can be used twice; the two answers differ by a
      lot.</div>`
    },
    {
      h: 'Selections',
      html: `<p>When the order does <b>not</b> matter, every selection has been counted ${m('k!')} times,
      so divide.</p>
      ${eq(m('C = ' + f('n(n − 1) … (n − k + 1)', 'k!')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>Order?</th><th>Count</th></tr></thead>
      <tbody>
        <tr><td>3 offices from 10 people</td><td>yes</td><td class="m">10 × 9 × 8 = 720</td></tr>
        <tr><td>a committee of 3 from 10</td><td>no</td><td class="m">${f('720', '6')} = 120</td></tr>
        <tr><td>2 balls from 8</td><td>no</td><td class="m">${f('8 × 7', '2')} = 28</td></tr>
        <tr><td>a handshake among 6 people</td><td>no</td><td class="m">${f('6 × 5', '2')} = 15</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">One question decides everything: does order matter?</div>
      A committee is a set — Ali, Bek, Dilnoza is the same committee as Dilnoza, Bek, Ali. A podium is
      a list — first, second and third are different places. Ask the question in words before choosing
      a formula.</div>`
    },
    {
      h: 'Counting into probability',
      html: `<p>With ${m('n')} and ${m('m')} both counted properly, the classical definition finishes the
      job.</p>
      <p><b>Example.</b> Two balls are drawn from a bag of ${m('3')} red and ${m('5')} blue. Find
      ${m('P')}(both red).</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td>all selections of 2 from 8</td><td class="m">${f('8 × 7', '2')} = 28</td></tr>
        <tr><td>selections of 2 from the 3 red</td><td class="m">${f('3 × 2', '2')} = 3</td></tr>
        <tr><td>probability</td><td class="m">${f('3', '28')}</td></tr>
      </tbody></table></div>
      <p>The same answer comes from multiplying stage by stage:
      ${m(f('3', '8') + ' × ' + f('2', '7') + ' = ' + f('6', '56') + ' = ' + f('3', '28'))}. Both routes
      are correct, and agreeing with yourself by two methods is a good check.</p>
      <div class="warn"><span class="wl">Count ${m('n')} and ${m('m')} the same way</span>
      If the total is counted as ordered pairs, the favourable cases must be too. Mixing an ordered
      total with an unordered favourable count is the classic source of answers that are out by a
      factor of ${m('2')}.</div>`
    }
  ],
  examples: [
    {
      q: 'How many three-digit numbers can be made from ' + m('1, 2, 3, 4, 5') + ' (a) with repeats, (b) without?',
      steps: [
        ['(a) Each of the three places has ' + m('5') + ' choices.', ''],
        [m('5³ = 125'), ''],
        ['(b) ' + m('5 × 4 × 3') + '.', 'No digit reused.'],
        [m('= 60'), '']
      ],
      ans: m('125') + ' and ' + m('60')
    },
    {
      q: 'A committee of ' + m('3') + ' is chosen from ' + m('10') + ' people. In how many ways?',
      steps: [
        ['Order does not matter.', ''],
        ['Ordered count: ' + m('10 × 9 × 8 = 720') + '.', ''],
        ['Each committee counted ' + m('3! = 6') + ' times.', ''],
        [m(f('720', '6') + ' = 120'), '']
      ],
      ans: m('120')
    },
    {
      q: 'Two balls are drawn from ' + m('3') + ' red and ' + m('5') + ' blue. Find ' + m('P') + '(both red).',
      steps: [
        ['All selections: ' + m(f('8 × 7', '2') + ' = 28') + '.', ''],
        ['Red selections: ' + m(f('3 × 2', '2') + ' = 3') + '.', ''],
        [m('P = ' + f('3', '28')), ''],
        ['Check: ' + m(f('3', '8') + ' × ' + f('2', '7') + ' = ' + f('3', '28')) + ' ✓', 'Two routes agree.']
      ],
      ans: m(f('3', '28'))
    }
  ],
  modelNote: 'Ask how many ways three pupils can stand in a row, then how many ways three can be chosen for a team; the class discovers the division by 3! themselves.',
  interactive: {
    type: 'quiz',
    title: 'And, or, and does order matter?',
    hint: 'Two questions settle every counting problem.',
    items: [
      { q: 'A choice of ' + m('3') + ' shirts <b>and</b> ' + m('4') + ' ties gives:', a: [m('7'), m('12'), m('34'), m('43')], c: 1, why: 'Multiply for “and”.' },
      { q: 'A choice of ' + m('3') + ' shirts <b>or</b> ' + m('4') + ' ties gives:', a: [m('7'), m('12'), m('1'), m('34')], c: 0, why: 'Add for “or”.' },
      { q: 'Arrangements of ' + m('4') + ' different books on a shelf:', a: [m('4'), m('12'), m('16'), m('24')], c: 3, why: m('4! = 24') + '.' },
      { q: m('5!') + ' equals:', a: [m('25'), m('60'), m('120'), m('720')], c: 2, why: m('5 · 4 · 3 · 2 · 1') + '.' },
      { q: 'Three-digit codes from ' + m('10') + ' digits, repeats allowed:', a: [m('30'), m('720'), m('1000'), m('120')], c: 2, why: m('10³') + '.' },
      { q: 'Three-digit codes with no repeats:', a: [m('720'), m('1000'), m('120'), m('30')], c: 0, why: m('10 · 9 · 8') + '.' },
      { q: 'When order does not matter you are counting:', a: ['arrangements', 'selections', 'outcomes', 'events'], c: 1, why: 'Combinations.' },
      { q: 'Choosing ' + m('2') + ' pupils from ' + m('5') + ', order not counted:', a: [m('10'), m('20'), m('25'), m('5')], c: 0, why: m(f('5 · 4', '2')) + '.' }
    ]
  },
  quiz: [
    { q: '“And” means:', a: ['add', 'multiply', 'divide', 'subtract'], c: 1, why: 'Successive choices.' },
    { q: '“Or” (exclusive alternatives) means:', a: ['add', 'multiply', 'divide', 'subtract'], c: 0, why: 'Separate cases.' },
    { q: m('4!') + ' equals:', a: [m('12'), m('16'), m('24'), m('64')], c: 2, why: m('4 · 3 · 2 · 1') + '.' },
    { q: 'A committee of ' + m('3') + ' from ' + m('10') + ':', a: [m('720'), m('120'), m('30'), m('1000')], c: 1, why: 'Divide by ' + m('3!') + '.' },
    { q: 'Three offices from ' + m('10') + ' people:', a: [m('720'), m('120'), m('30'), m('1000')], c: 0, why: 'Order matters.' },
    { q: 'A three-digit code from ' + m('10') + ' digits, repeats allowed:', a: [m('720'), m('120'), m('1000'), m('30')], c: 2, why: m('10³') + '.' }
  ],
  practice: {
    easy: [
      [m('4') + ' shirts, ' + m('3') + ' trousers: outfits', m('12')],
      [m('3') + ' buses or ' + m('2') + ' trains: ways', m('5')],
      [m('3!'), m('6')],
      [m('4!'), m('24')],
      [m('5!'), m('120')],
      ['Arrangements of ' + m('3') + ' pupils in a row', m('6')],
      ['Two coins: outcomes', m('4')]
    ],
    med: [
      ['Three-digit numbers from ' + m('1..5') + ', repeats allowed', m('125')],
      ['Same, no repeats', m('60')],
      ['Three offices from ' + m('10') + ' people', m('720')],
      ['A committee of ' + m('3') + ' from ' + m('10'), m('120')],
      ['Handshakes among ' + m('6') + ' people', m('15')],
      ['Selections of ' + m('2') + ' from ' + m('8'), m('28')],
      [m('P') + '(both red) from ' + m('3') + ' red, ' + m('5') + ' blue', m(f('3', '28'))]
    ],
    hard: [
      ['Arrangements of the letters of ' + m('KITOB'), m('120')],
      ['Four-digit codes from ' + m('0–9') + ', repeats allowed', m('10000')],
      ['A committee of ' + m('2') + ' boys and ' + m('2') + ' girls from ' + m('5') + ' and ' + m('4'), m('60')],
      [m('P') + '(a committee of 3 from 5 boys and 5 girls is all boys)', m(f('1', '12'))],
      ['Diagonals of a decagon', m('35')],
      ['Two cards from a pack: ' + m('P') + '(both aces)', m(f('1', '221'))],
      ['How many ways can ' + m('5') + ' pupils sit if two insist on sitting together?', m('48')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write “order matters” or “order does not matter” at the top of every solution.',
  homework: [
    'How many four-digit numbers can be made from ' + m('1, 2, 3, 4, 5, 6') + ' without repeats?',
    'In how many ways can a committee of ' + m('4') + ' be chosen from ' + m('9') + ' people?',
    'How many handshakes take place among ' + m('8') + ' people?',
    'Two balls are drawn from ' + m('4') + ' red and ' + m('6') + ' blue. Find ' + m('P') + '(both blue).',
    'How many arrangements has the word ' + m('DAFTAR') + ' if all letters are treated as distinct?'
  ]
});

/* ============================== 49 ============================== */
G9_ALG.push({
  id: 'a9-49', stream: 'alg', grade: 9, quarter: 4, lessons: '96–97', hours: 2,
  title: 'Chapter exercises — Cambridge probability with tree diagrams',
  subtitle: 'Two-stage experiments, with and without replacement — the IGCSE way of laying them out.',
  uz: 'Algebra 9, V bob mashqlari', uzPage: 'pp. 237–240',
  cam: 'IGX 8.5–8.6', camPage: 'Core & Extended, pp. 183–192', wb: 'Exercise 8.5–8.6',
  objectives: [
    'Draw a tree diagram for a two-stage experiment and label every branch.',
    'Multiply along a path and add between paths.',
    'Adjust the second-stage probabilities when there is no replacement.',
    'Use a Venn diagram or a two-way table where it is quicker than a tree.'
  ],
  terms: [
    ['Tree diagram', 'Daraxt diagrammasi', 'Дерево вероятностей'],
    ['Branch', 'Shox', 'Ветвь'],
    ['Path', 'Yo‘l', 'Путь'],
    ['Independent events', 'Bog‘liqsiz hodisalar', 'Независимые события'],
    ['Dependent events', 'Bog‘liq hodisalar', 'Зависимые события'],
    ['With replacement', 'Qaytarib', 'С возвращением'],
    ['Without replacement', 'Qaytarmasdan', 'Без возвращения'],
    ['Two-way table', 'Ikki yo‘nalishli jadval', 'Таблица сопряжённости']
  ],
  timing: [[13, 'Drawing the tree'], [20, 'Along and between'], [23, 'Without replacement'], [20, 'Tables and Venn diagrams'], [4, 'Homework']],
  sections: [
    {
      h: 'Drawing the tree',
      html: `<p>A tree diagram sets out a two-stage experiment so that no case is missed.</p>
      {{fig:treeDiagram:Two stages, four paths — the probabilities on each set of branches add to 1.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Rule</th><th>Check</th></tr></thead>
      <tbody>
        <tr><td>each set of branches</td><td>its probabilities add to ${m('1')}</td></tr>
        <tr><td>along a path</td><td>multiply</td></tr>
        <tr><td>between paths</td><td>add</td></tr>
        <tr><td>all the paths together</td><td>add to ${m('1')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Label the branches before computing anything</span>
      Cambridge awards marks for a correctly labelled tree even when the arithmetic afterwards goes
      wrong. Drawing it is never wasted time.</div>`
    },
    {
      h: 'Along and between',
      html: `<p><b>Example.</b> A bag holds ${m('3')} red and ${m('5')} blue balls. One is drawn, replaced,
      and another drawn.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Path</th><th>Probability</th></tr></thead>
      <tbody>
        <tr><td>RR</td><td class="m">${f('3', '8')} × ${f('3', '8')} = ${f('9', '64')}</td></tr>
        <tr><td>RB</td><td class="m">${f('3', '8')} × ${f('5', '8')} = ${f('15', '64')}</td></tr>
        <tr><td>BR</td><td class="m">${f('5', '8')} × ${f('3', '8')} = ${f('15', '64')}</td></tr>
        <tr><td>BB</td><td class="m">${f('5', '8')} × ${f('5', '8')} = ${f('25', '64')}</td></tr>
        <tr><td>total</td><td class="m">${f('64', '64')} = 1 ✓</td></tr>
      </tbody></table></div>
      <p>Then ${m('P')}(one of each) ${m('= ' + f('15', '64') + ' + ' + f('15', '64') + ' = ' + f('30', '64') + ' = ' + f('15', '32'))},
      and ${m('P')}(at least one red) ${m('= 1 − ' + f('25', '64') + ' = ' + f('39', '64'))}.</p>
      <div class="keybox"><div class="klabel">Two paths for “one of each”, not one</div>
      RB and BR are different paths and both must be counted. Forgetting the second is the commonest
      tree-diagram error, and the total-equals-${m('1')} check catches it every time.</div>`
    },
    {
      h: 'Without replacement',
      html: `<p>If the first ball is not replaced, the second stage has one fewer ball — and one fewer of
      whichever colour was drawn.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Path</th><th>With replacement</th><th>Without replacement</th></tr></thead>
      <tbody>
        <tr><td>RR</td><td class="m">${f('3', '8')} × ${f('3', '8')}</td><td class="m">${f('3', '8')} × ${f('2', '7')} = ${f('3', '28')}</td></tr>
        <tr><td>RB</td><td class="m">${f('3', '8')} × ${f('5', '8')}</td><td class="m">${f('3', '8')} × ${f('5', '7')} = ${f('15', '56')}</td></tr>
        <tr><td>BR</td><td class="m">${f('5', '8')} × ${f('3', '8')}</td><td class="m">${f('5', '8')} × ${f('3', '7')} = ${f('15', '56')}</td></tr>
        <tr><td>BB</td><td class="m">${f('5', '8')} × ${f('5', '8')}</td><td class="m">${f('5', '8')} × ${f('4', '7')} = ${f('5', '14')}</td></tr>
      </tbody></table></div>
      <p>The denominators of the second stage are all ${m('7')}; the numerators depend on the first
      branch. That is the whole difference, and it is where the marks are.</p>
      <div class="warn"><span class="wl">Only the second-stage branches change</span>
      The first stage is untouched by the question of replacement — nothing has been removed yet. And
      the four paths must still total ${m('1')}: ${m(f('3', '28') + ' + ' + f('15', '56') + ' + ' + f('15', '56') + ' + ' + f('5', '14') + ' = 1')} ✓</div>`
    },
    {
      h: 'Tables and Venn diagrams',
      html: `<p>Two other layouts appear constantly in IGCSE papers.</p>
      <div class="tablewrap"><table>
      <thead><tr><th></th><th>Boys</th><th>Girls</th><th>Total</th></tr></thead>
      <tbody>
        <tr><td>Walk</td><td class="m">12</td><td class="m">9</td><td class="m">21</td></tr>
        <tr><td>Bus</td><td class="m">8</td><td class="m">11</td><td class="m">19</td></tr>
        <tr><td>Total</td><td class="m">20</td><td class="m">20</td><td class="m">40</td></tr>
      </tbody></table></div>
      <p>From the table, ${m('P')}(a girl who walks) ${m('= ' + f('9', '40'))} and
      ${m('P')}(walks) ${m('= ' + f('21', '40'))}.</p>
      {{fig:vennTwo:A Venn diagram answers “both”, “either” and “neither” at a glance.}}
      <div class="keybox"><div class="klabel">Choose the layout that fits the question</div>
      A tree for stages, a two-way table for two classifications of the same people, a Venn diagram for
      overlapping sets. Using the wrong one is not wrong, only slow — and slowness costs marks in a
      timed paper.</div>`
    }
  ],
  examples: [
    {
      q: 'A bag holds ' + m('3') + ' red and ' + m('5') + ' blue. Two are drawn with replacement. Find ' + m('P') + '(one of each).',
      steps: [
        ['Paths RB and BR.', 'Two paths, not one.'],
        [m('RB = ' + f('3', '8') + ' × ' + f('5', '8') + ' = ' + f('15', '64')), ''],
        [m('BR = ' + f('5', '8') + ' × ' + f('3', '8') + ' = ' + f('15', '64')), ''],
        [m('P = ' + f('30', '64') + ' = ' + f('15', '32')), '']
      ],
      ans: m(f('15', '32'))
    },
    {
      q: 'The same bag, two drawn without replacement. Find ' + m('P') + '(both blue).',
      steps: [
        ['First blue: ' + m(f('5', '8')) + '.', ''],
        ['Then ' + m('4') + ' blue of ' + m('7') + ' left: ' + m(f('4', '7')) + '.', ''],
        [m(f('5', '8') + ' × ' + f('4', '7') + ' = ' + f('20', '56')), ''],
        [m('= ' + f('5', '14')), '']
      ],
      ans: m(f('5', '14'))
    },
    {
      q: 'From the two-way table above, find ' + m('P') + '(a boy, given the pupil walks).',
      steps: [
        ['Restrict to the “Walk” row: ' + m('21') + ' pupils.', 'A conditional question.'],
        ['Of those, ' + m('12') + ' are boys.', ''],
        [m('P = ' + f('12', '21')), ''],
        [m('= ' + f('4', '7')), '']
      ],
      ans: m(f('4', '7'))
    }
  ],
  modelNote: 'Draw the same experiment twice, with and without replacement, on one board; the only cells that change are the second-stage branches, and seeing that is the lesson.',
  interactive: {
    type: 'quiz',
    title: 'Trees, tables and Venn diagrams',
    hint: 'Multiply along, add between.',
    items: [
      { q: 'Along a branch of a tree you:', a: ['add', 'multiply', 'subtract', 'divide'], c: 1, why: 'Both things happen.' },
      { q: 'Between separate branches you:', a: ['add', 'multiply', 'subtract', 'divide'], c: 0, why: 'Either one or the other.' },
      { q: 'The probabilities on the branches from one point add to:', a: [m('0'), m('0.5'), m('1'), 'anything'], c: 2, why: 'Something must happen.' },
      { q: 'Two coins: ' + m('P') + '(exactly one head) is:', a: [m(f('1', '4')), m(f('1', '2')), m(f('3', '4')), m('1')], c: 1, why: 'Two of four outcomes.' },
      { q: m('P') + '(red then red) from a bag of ' + m('3') + ' red and ' + m('2') + ' blue, with replacement:', a: [m(f('9', '25')), m(f('3', '10')), m(f('6', '25')), m(f('3', '5'))], c: 0, why: m(f('3', '5') + ' · ' + f('3', '5')) + '.' },
      { q: 'Without replacement it becomes:', a: [m(f('9', '25')), m(f('3', '10')), m(f('6', '20')), m(f('1', '2'))], c: 1, why: m(f('3', '5') + ' · ' + f('2', '4')) + '.' },
      { q: 'Independent events are those where:', a: ['one changes the other', 'neither changes the other', 'both are certain', 'both are impossible'], c: 1, why: 'Replacement keeps them independent.' },
      { q: m('P') + '(at least one head) in two throws is easiest as:', a: [m('1 − P') + '(no heads)', m('P') + '(one head)', m('2 · P') + '(head)', m('P') + '(two heads)'], c: 0, why: 'The complement.' }
    ]
  },
  quiz: [
    { q: 'Along a path you:', a: ['add', 'multiply', 'divide', 'subtract'], c: 1, why: 'Successive stages.' },
    { q: 'Between paths you:', a: ['add', 'multiply', 'divide', 'subtract'], c: 0, why: 'Alternative routes.' },
    { q: 'All the paths together total:', a: [m('0'), m(f('1', '2')), m('1'), 'it varies'], c: 2, why: 'Something must happen.' },
    { q: 'Without replacement, what changes?', a: ['the first stage', 'the second stage', 'both', 'neither'], c: 1, why: 'Nothing has been removed yet at stage one.' },
    { q: '“One of each” uses:', a: ['one path', 'two paths', 'three paths', 'all paths'], c: 1, why: 'RB and BR.' },
    { q: 'For two classifications of the same people, use:', a: ['a tree', 'a two-way table', 'a bar chart', 'a formula'], c: 1, why: 'It is the fastest layout.' }
  ],
  practice: {
    easy: [
      ['Along a path you', 'Multiply'],
      ['Between paths you', 'Add'],
      ['Branches from one point total', m('1')],
      [m('P') + '(RR) with replacement, ' + m('3') + ' red of ' + m('8'), m(f('9', '64'))],
      [m('P') + '(BB) with replacement, ' + m('5') + ' blue of ' + m('8'), m(f('25', '64'))],
      [m('P') + '(two heads in two tosses)', m(f('1', '4'))],
      [m('P') + '(a girl who walks) from the table', m(f('9', '40'))]
    ],
    med: [
      [m('P') + '(one of each), with replacement', m(f('15', '32'))],
      [m('P') + '(at least one red), with replacement', m(f('39', '64'))],
      [m('P') + '(both red), without replacement', m(f('3', '28'))],
      [m('P') + '(both blue), without replacement', m(f('5', '14'))],
      [m('P') + '(one of each), without replacement', m(f('15', '28'))],
      [m('P') + '(walks) from the table', m(f('21', '40'))],
      [m('P') + '(a boy given the pupil walks)', m(f('4', '7'))]
    ],
    hard: [
      ['Three tosses: ' + m('P') + '(exactly two heads)', m(f('3', '8'))],
      ['A bag of ' + m('4') + ' white, ' + m('6') + ' black; two without replacement: ' + m('P') + '(same colour)', m(f('7', '15'))],
      ['Same bag: ' + m('P') + '(different colours)', m(f('8', '15'))],
      [m('P') + '(at least one six in three rolls)', m(f('91', '216'))],
      ['A test is ' + m('90%') + ' accurate; ' + m('P') + '(two correct verdicts in two tests)', m('0.81')],
      ['Two cards without replacement: ' + m('P') + '(both hearts)', m(f('1', '17'))],
      ['A machine: ' + m('P') + '(fault) ' + m('= 0.02') + '. ' + m('P') + '(no fault in ' + m('3') + ' items)', m('≈ 0.941')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw the tree for every task, and check that the paths total ' + m('1') + '.',
  homework: [
    'A bag holds ' + m('4') + ' red and ' + m('6') + ' blue. Two are drawn with replacement. Find ' + m('P') + '(both red) and ' + m('P') + '(one of each).',
    'The same bag, without replacement. Find ' + m('P') + '(both blue).',
    'Find ' + m('P') + '(at least one head in three tosses).',
    'Draw a two-way table for ' + m('30') + ' pupils, ' + m('18') + ' of whom are girls and ' + m('20') + ' of whom cycle, with ' + m('12') + ' girls cycling. Find ' + m('P') + '(a boy who does not cycle).',
    'Two cards are drawn without replacement. Find ' + m('P') + '(both are kings).'
  ]
});

/* ============================== 50 ============================== */
G9_ALG.push({
  id: 'a9-50', stream: 'alg', grade: 9, quarter: 4, lessons: '98–99', hours: 2,
  title: 'Annual control work',
  subtitle: 'One paper across the whole year: quadratics, systems, trigonometry, progressions and probability.',
  uz: 'Algebra 9, Yillik nazorat ishi', uzPage: 'pp. 1–240',
  cam: 'IGX 1–15 review', camPage: 'Core & Extended, full course', wb: 'Annual paper A8',
  objectives: [
    'Work accurately across five chapters under a single time limit.',
    'Choose the right method quickly when the question does not name it.',
    'Show the working that carries the method marks.',
    'Diagnose each lost mark by chapter, not only by question.'
  ],
  terms: [
    ['Annual control work', 'Yillik nazorat ishi', 'Годовая контрольная работа'],
    ['Quadratic inequality', 'Kvadrat tengsizlik', 'Квадратное неравенство'],
    ['System', 'Sistema', 'Система'],
    ['Reduction formula', 'Keltirish formulasi', 'Формула приведения'],
    ['Progression', 'Progressiya', 'Прогрессия'],
    ['Probability', 'Ehtimollik', 'Вероятность'],
    ['Method mark', 'Usul uchun ball', 'Балл за метод'],
    ['Diagnosis', 'Tashxis', 'Диагностика']
  ],
  timing: [[3, 'Instructions'], [45, 'The paper'], [12, 'Answers'], [15, 'Diagnosis by chapter'], [5, 'What to revise']],
  sections: [
    {
      h: 'The paper — 50 marks, 45 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>Chapter</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Solve ${m('x² − 5x + 6 < 0')}</td><td class="m">5</td><td>I</td></tr>
        <tr><td>2</td><td>Find the domain of ${m('y = ' + sr('x² − 9'))}</td><td class="m">5</td><td>I</td></tr>
        <tr><td>3</td><td>Solve ${m('{ x + y = 7 ; x² + y² = 25 }')}</td><td class="m">6</td><td>II</td></tr>
        <tr><td>4</td><td>Prove ${m('x² + 36 ≥ 12x')} and name the equality case</td><td class="m">5</td><td>II</td></tr>
        <tr><td>5</td><td>Given ${m('sin α = ' + f('3', '5'))} (II), find ${m('cos α')} and ${m('sin 2α')}</td><td class="m">6</td><td>III</td></tr>
        <tr><td>6</td><td>Evaluate ${m('cos 210° + sin 150°')}</td><td class="m">5</td><td>III</td></tr>
        <tr><td>7</td><td>In an AP, ${m('a₃ = 10')}, ${m('a₈ = 30')}: find ${m('S₁₀')}</td><td class="m">6</td><td>IV</td></tr>
        <tr><td>8</td><td>Sum ${m('16 + 8 + 4 + …')} to infinity</td><td class="m">5</td><td>IV</td></tr>
        <tr><td>9</td><td>Two dice: find ${m('P')}(sum ${m('8')}) and ${m('P')}(at least one six)</td><td class="m">7</td><td>V</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Method marks are given for the method</div>
      Q3 carries a mark for choosing substitution; Q5 two for the sign; Q7 one for using the gap of five
      steps; Q9 two for the complement. Writing the method down, even without finishing, is worth
      roughly a third of this paper.</div>`
    },
    {
      h: 'Diagnosis by chapter',
      html: `<p>Fill this in honestly; it is the revision plan for the summer.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Chapter</th><th>Questions</th><th>Marks available</th><th>If you lost marks, revise</th></tr></thead>
      <tbody>
        <tr><td>I — the quadratic function</td><td>1, 2</td><td class="m">10</td><td>the sign of a trinomial; domains</td></tr>
        <tr><td>II — systems and inequalities</td><td>3, 4</td><td class="m">11</td><td>substitution; the square method</td></tr>
        <tr><td>III — trigonometry</td><td>5, 6</td><td class="m">11</td><td>the quadrant rule; reduction</td></tr>
        <tr><td>IV — progressions</td><td>7, 8</td><td class="m">11</td><td class="m">aₙ, Sₙ, and |q| < 1</td></tr>
        <tr><td>V — probability</td><td>9</td><td class="m">7</td><td>counting, and the complement</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A chapter with two lost marks is not a weak chapter</span>
      Look for a whole block that went wrong. Losing four marks spread over five chapters is
      carelessness under time; losing seven marks in one chapter is a gap in understanding, and only
      the second needs re-teaching.</div>`
    },
    {
      h: 'What to revise, and in what order',
      html: `<p>The Grade 10 course opens with powers and roots, then trigonometric equations, then the
      exponential and logarithmic functions. What matters most from Grade 9 is therefore:</p>
      <ol>
        <li><b>The sign of a quadratic and the method of intervals</b> — used in every domain question
        for the next two years.</li>
        <li><b>The quadrant rule and the reduction formulae</b> — Grade 10 trigonometric equations are
        unreadable without them.</li>
        <li><b>The addition and double-angle formulae</b> — they are assumed, not re-taught.</li>
        <li><b>Progressions</b> — they return in Grade 11 as series and limits.</li>
        <li><b>Counting</b> — probability in Grade 11 is combinatorics with a division at the end.</li>
      </ol>
      {{fig:unitCircle:The single most useful picture of the year, and the one to redraw first in Grade 10.}}
      <div class="keybox"><div class="klabel">Two hours a week, not two days in August</div>
      Anything practised for twenty minutes a week over the summer survives; anything crammed in the
      last week before September does not. The five items above, one a week, is enough.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q3: solve ' + m('{ x + y = 7 ; x² + y² = 25 }') + '.',
      steps: [
        ['One equation is linear — substitute ' + m('y = 7 − x') + '.', 'The method mark.'],
        [m('x² + (7 − x)² = 25 ⇒ 2x² − 14x + 24 = 0'), ''],
        [m('x² − 7x + 12 = 0 ⇒ x = 3, 4'), ''],
        [m('(3, 4)') + ' and ' + m('(4, 3)') + ' — both checked.', '']
      ],
      ans: m('(3, 4)') + ' and ' + m('(4, 3)')
    },
    {
      q: 'Model answer, Q5: ' + m('sin α = ' + f('3', '5')) + ' in quadrant II.',
      steps: [
        [m('cos²α = 1 − ' + f('9', '25') + ' = ' + f('16', '25')), ''],
        ['Quadrant II ⇒ ' + m('cos α = −' + f('4', '5')) + '.', 'The sign.'],
        [m('sin 2α = 2 · ' + f('3', '5') + ' · (−' + f('4', '5') + ')'), ''],
        [m('= −' + f('24', '25')), '']
      ],
      ans: m('cos α = −' + f('4', '5') + ', sin 2α = −' + f('24', '25'))
    },
    {
      q: 'Model answer, Q9: two dice — ' + m('P') + '(sum 8) and ' + m('P') + '(at least one six).',
      steps: [
        [m('n = 36') + '.', ''],
        ['Sum ' + m('8') + ': ' + m('(2,6),(3,5),(4,4),(5,3),(6,2)') + ' — five pairs.', m('P = ' + f('5', '36')) + '.'],
        ['At least one six: complement is ' + m('5 × 5 = 25') + '.', ''],
        [m('P = 1 − ' + f('25', '36') + ' = ' + f('11', '36')), '']
      ],
      ans: m(f('5', '36')) + ' and ' + m(f('11', '36'))
    }
  ],
  modelNote: 'Return the papers with the chapter column filled in but the marks hidden; pupils diagnose their own weakest chapter before they see their total.',
  interactive: {
    type: 'quiz',
    title: 'The year in twelve questions',
    hint: 'Two or three from each chapter.',
    items: [
      { q: 'For ' + m('a > 0') + ', ' + m('ax² + bx + c < 0') + ' holds:', a: ['outside the roots', 'between them', 'nowhere', 'everywhere'], c: 1, why: 'The dip.' },
      { q: 'The domain of ' + m(sr('x − 4')) + ':', a: [m('x > 4'), m('x ≥ 4'), m('x ≤ 4'), 'all ' + m('x')], c: 1, why: 'Zero is allowed.' },
      { q: 'A system with one linear equation:', a: ['substitution', 'addition', 'squaring', 'a graph'], c: 0, why: 'Isolate and replace.' },
      { q: 'To prove ' + m('A ≥ B') + ':', a: ['test values', 'show ' + m('A − B ≥ 0'), 'draw it', 'cross-multiply'], c: 1, why: 'One side, one sign.' },
      { q: m('180°') + ' in radians:', a: [m(f('π', '2')), m('π'), m('2π'), m('90')], c: 1, why: 'Half a turn.' },
      { q: m('sin(α + β)') + ' equals:', a: [m('sin α + sin β'), m('sc + cs'), m('cc − ss'), m('2sc')], c: 1, why: 'Mix, keep the sign.' },
      { q: m('cos(' + f('π', '2') + ' + α)') + ' equals:', a: [m('sin α'), m('−sin α'), m('cos α'), m('−cos α')], c: 1, why: 'Name changes, cosine negative in II.' },
      { q: m('aₙ') + ' of an AP:', a: [m('a₁ + nd'), m('a₁ + (n − 1)d'), m('nd'), m('a₁ d')], c: 1, why: m('n − 1') + ' steps.' },
      { q: m('bₙ') + ' of a GP:', a: [m('b₁ q') + p('', 'n'), m('b₁ q') + p('', 'n−1'), m('b₁ + nq'), m('nq')], c: 1, why: m('n − 1') + ' multiplications.' },
      { q: 'An infinite GP sums when:', a: [m('q > 0'), m('|q| < 1'), m('q > 1'), 'always'], c: 1, why: 'The terms must shrink.' },
      { q: m('P(A) + P(A′)') + ' equals:', a: [m('0'), m(f('1', '2')), m('1'), m('2')], c: 2, why: 'Every outcome is in one.' },
      { q: '“At least one” is best done by:', a: ['direct counting', 'the complement', 'a tree', 'guessing'], c: 1, why: m('1 − P') + '(none).' }
    ]
  },
  quiz: [
    { q: 'Method marks are earned by:', a: ['the answer', 'the working', 'speed', 'neatness'], c: 1, why: 'Even an unfinished method scores.' },
    { q: 'Q5 loses marks most often for:', a: ['arithmetic', 'the sign', 'the formula', 'the units'], c: 1, why: 'The quadrant decides it.' },
    { q: 'Q8 must state:', a: [m('n'), m('|q| < 1'), m('b₁'), 'a decimal'], c: 1, why: 'The condition is part of the answer.' },
    { q: 'Q9 is quickest by:', a: ['listing 36 cases', 'the complement', 'a tree', 'a formula'], c: 1, why: 'Twenty-five, not eleven, cases.' },
    { q: 'Seven marks lost in one chapter means:', a: ['carelessness', 'a gap in understanding', 'bad luck', 'nothing'], c: 1, why: 'That chapter needs re-teaching.' },
    { q: 'The best summer plan is:', a: ['two days in August', 'twenty minutes a week', 'nothing', 'the whole textbook'], c: 1, why: 'Spaced practice survives.' }
  ],
  practice: {
    easy: [
      ['Solve ' + m('x² − 5x + 6 < 0'), m('(2, 3)')],
      ['Domain of ' + m('y = ' + sr('x² − 9')), m('(−∞, −3] ∪ [3, +∞)')],
      ['Prove ' + m('x² + 36 ≥ 12x'), m('(x − 6)² ≥ 0')],
      [m('cos 210°'), m('−' + f(sr('3'), '2'))],
      [m('sin 150°'), m(f('1', '2'))],
      [m('16 + 8 + 4 + …'), m('32')],
      ['Two dice: ' + m('P') + '(sum 8)', m(f('5', '36'))]
    ],
    med: [
      ['Solve ' + m('{ x + y = 7 ; x² + y² = 25 }'), m('(3, 4), (4, 3)')],
      [m('sin α = ' + f('3', '5')) + ' (II): ' + m('cos α'), m('−' + f('4', '5'))],
      ['Same: ' + m('sin 2α'), m('−' + f('24', '25'))],
      [m('cos 210° + sin 150°'), m(f('1 − ' + sr('3'), '2'))],
      [m('a₃ = 10, a₈ = 30') + ': ' + m('d'), m('4')],
      ['Same: ' + m('S₁₀'), m('200')],
      ['Two dice: ' + m('P') + '(at least one six)', m(f('11', '36'))]
    ],
    hard: [
      ['Solve ' + m('{ x² − 4 > 0 ; x² − 49 < 0 }'), m('(−7, −2) ∪ (2, 7)')],
      ['Prove ' + m('a + ' + f('1', 'a') + ' ≥ 2') + ' for ' + m('a > 0'), m('(' + sr('a') + ' − ' + f('1', sr('a')) + ')² ≥ 0')],
      ['Evaluate ' + m('sin 225° + cos 315° + tan 225°'), m('1')],
      [m('S₅ = 55') + ' and ' + m('d = 3') + ' in an AP: ' + m('a₁'), m('5')],
      ['A GP with ' + m('b₁ = 9') + ' and ' + m('S = ' + f('27', '2')) + ': find ' + m('q'), m(f('1', '3'))],
      ['Three coins: ' + m('P') + '(exactly two heads)', m(f('3', '8'))],
      ['A bag of ' + m('3') + ' red, ' + m('5') + ' blue; two without replacement: ' + m('P') + '(one of each)', m(f('15', '28'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Do the five tasks from the chapter in which you lost most marks, not one from each.',
  homework: [
    'Solve ' + m('x² − 7x + 10 ≤ 0') + ' and give the answer in set notation.',
    'Given ' + m('cos α = −' + f('12', '13')) + ' in quadrant III, find ' + m('sin 2α') + '.',
    'In an AP, ' + m('a₄ = 11') + ' and ' + m('a₉ = 26') + '. Find ' + m('S₁₂') + '.',
    'Sum ' + m('24 + 8 + ' + f('8', '3') + ' + …') + ' to infinity.',
    'Two dice are rolled. Find ' + m('P') + '(sum less than 5).'
  ]
});

/* ============================== 51 ============================== */
G9_ALG.push({
  id: 'a9-51', stream: 'alg', grade: 9, quarter: 4, lessons: '100–102', hours: 3,
  title: 'Annual revision — the year on one page, and what Grade 10 expects',
  subtitle: 'Five chapters, five sentences, and an honest look at what has to be secure by September.',
  uz: 'Algebra 9, Yillik takrorlash', uzPage: 'pp. 1–240',
  cam: 'IGX full course', camPage: 'Core & Extended, full course', wb: 'Revision exercises',
  objectives: [
    'State the central idea of each of the five chapters in one sentence.',
    'Recognise which chapter a question belongs to before choosing a method.',
    'Identify personally weak areas and plan summer practice around them.',
    'See how each chapter is used in Grade 10 and beyond.'
  ],
  terms: [
    ['Revision', 'Takrorlash', 'Повторение'],
    ['Summary', 'Xulosa', 'Итог'],
    ['Concept map', 'Tushunchalar xaritasi', 'Карта понятий'],
    ['Prerequisite', 'Zaruriy bilim', 'Необходимое условие'],
    ['Consolidation', 'Mustahkamlash', 'Закрепление'],
    ['Weak area', 'Zaif tomon', 'Слабое место'],
    ['Practice', 'Mashq', 'Практика'],
    ['Preparation', 'Tayyorgarlik', 'Подготовка']
  ],
  timing: [[25, 'Five chapters, five sentences'], [35, 'Which chapter is this?'], [35, 'Mixed practice'], [20, 'What Grade 10 expects'], [5, 'The summer plan']],
  sections: [
    {
      h: 'Five chapters, five sentences',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Chapter</th><th>The sentence</th><th>The picture</th></tr></thead>
      <tbody>
        <tr><td>I — the quadratic function</td><td>${m('a')} gives the direction, ${m('D')} the number of roots, and the roots give the sign</td><td>a parabola</td></tr>
        <tr><td>II — systems and inequalities</td><td>solve each line separately, then combine — and to prove, move everything to one side</td><td>a number line</td></tr>
        <tr><td>III — trigonometry</td><td>an angle is a point on the unit circle, and every formula is a statement about that point</td><td>the unit circle</td></tr>
        <tr><td>IV — progressions</td><td>add the same thing, or multiply by the same thing — and both sums have a trick</td><td>a straight line, or a curve</td></tr>
        <tr><td>V — probability</td><td>count what can happen, count what you want, divide</td><td>a tree</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Five pictures are enough</div>
      A parabola, a number line, the unit circle, a straight line of terms, and a tree. If those five
      can be drawn from memory with their labels, the year is secure — and anything forgotten can be
      rebuilt from them.</div>`
    },
    {
      h: 'Which chapter is this?',
      html: `<p>The hardest part of a mixed paper is not the mathematics but the recognition. Practise it
      directly.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>Chapter</th><th>Because</th></tr></thead>
      <tbody>
        <tr><td>${m('“Find the domain of ' + sr('x² − 4') + '”')}</td><td>I</td><td>a quadratic must be ${m('≥ 0')}</td></tr>
        <tr><td>“Prove ${m('a² + b² ≥ 2ab')}”</td><td>II</td><td>one side, then a square</td></tr>
        <tr><td>“Evaluate ${m('cos 750°')}”</td><td>III</td><td>strip turns, then reduce</td></tr>
        <tr><td>“How many multiples of ${m('7')} below ${m('500')}?”</td><td>IV</td><td>an AP with ${m('d = 7')}</td></tr>
        <tr><td>“${m('P')}(at least one six)”</td><td>V</td><td>the complement</td></tr>
        <tr><td>“Two numbers with sum ${m('9')} and product ${m('20')}”</td><td>I or II</td><td>Vieta, or a symmetric system</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Read the whole question before choosing a method</span>
      The last row has two correct routes and one wrong reflex — trying to solve it as a pair of
      simultaneous linear equations. Thirty seconds of reading saves ten minutes of the wrong
      algebra.</div>`
    },
    {
      h: 'Mixed practice',
      html: `<p>Work these without knowing which chapter each belongs to; that is the point.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Task</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>Solve ${m('x² − x − 12 ≥ 0')}</td><td class="m">(−∞, −3] ∪ [4, +∞)</td></tr>
        <tr><td>Solve ${m('{ x − y = 1 ; xy = 6 }')}</td><td class="m">(3, 2), (−2, −3)</td></tr>
        <tr><td>Evaluate ${m('sin 120° cos 30°')}</td><td class="m">${f('3', '4')}</td></tr>
        <tr><td>${m('S₂₀')} of ${m('1, 5, 9, …')}</td><td class="m">780</td></tr>
        <tr><td>Sum ${m('27 + 9 + 3 + …')}</td><td class="m">${f('81', '2')}</td></tr>
        <tr><td>${m('P')}(a card is a red king)</td><td class="m">${f('1', '26')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Mixed practice is the only practice that tests recognition</div>
      Twenty questions from one chapter train the method; twenty from five chapters train the choice —
      and it is the choice that a mixed examination actually measures.</div>`
    },
    {
      h: 'What Grade 10 expects',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Grade 10 topic</th><th>Needs, from Grade 9</th></tr></thead>
      <tbody>
        <tr><td>powers with rational exponents</td><td>surds and index laws</td></tr>
        <tr><td>irrational equations</td><td>domains, and checking for false roots</td></tr>
        <tr><td>trigonometric equations</td><td>the unit circle, quadrants, reduction formulae</td></tr>
        <tr><td>the exponential function</td><td>geometric progressions</td></tr>
        <tr><td>logarithms</td><td>index laws, and the idea of an inverse</td></tr>
        <tr><td>probability (Grade 11)</td><td>counting, and the complement</td></tr>
      </tbody></table></div>
      <p>Cambridge continues in parallel: Grade 9 covered IGCSE chapters up to trigonometry and
      sequences; Grade 10 takes the remaining Extended chapters and the first Pure Mathematics topics.
      The two courses have run together all year, and they continue to.</p>
      <div class="keybox"><div class="klabel">The summer plan, in one line</div>
      One page a week: the parabola and the sign rule; the unit circle with the exact values; the four
      progression formulae; ten mixed problems. Four short sessions across the summer, and September
      starts from a full page rather than a blank one.</div>`
    }
  ],
  examples: [
    {
      q: 'Solve ' + m('{ x − y = 1 ; xy = 6 }') + '.',
      steps: [
        ['One equation is linear: ' + m('x = y + 1') + '.', 'Chapter II.'],
        [m('(y + 1)y = 6 ⇒ y² + y − 6 = 0'), ''],
        [m('y = 2') + ' or ' + m('y = −3') + '.', ''],
        [m('(3, 2)') + ' and ' + m('(−2, −3)') + ' — both checked.', '']
      ],
      ans: m('(3, 2)') + ' and ' + m('(−2, −3)')
    },
    {
      q: 'Evaluate ' + m('sin 120° cos 30°') + '.',
      steps: [
        [m('sin 120° = sin(180° − 60°) = sin 60° = ' + f(sr('3'), '2')), 'Chapter III.'],
        [m('cos 30° = ' + f(sr('3'), '2')), ''],
        [m(f(sr('3'), '2') + ' × ' + f(sr('3'), '2')), ''],
        [m('= ' + f('3', '4')), '']
      ],
      ans: m(f('3', '4'))
    },
    {
      q: 'Find ' + m('S₂₀') + ' for ' + m('1, 5, 9, …') + ', and sum ' + m('27 + 9 + 3 + …') + ' to infinity.',
      steps: [
        [m('a₁ = 1, d = 4') + ': ' + m('a₂₀ = 1 + 19 · 4 = 77') + '.', 'Chapter IV.'],
        [m('S₂₀ = ' + f('20(1 + 77)', '2') + ' = 780'), ''],
        [m('b₁ = 27, q = ' + f('1', '3')) + ', and ' + m('|q| < 1') + '.', ''],
        [m('S = ' + f('27', '1 − ' + f('1', '3')) + ' = ' + f('81', '2')), '']
      ],
      ans: m('780') + ' and ' + m(f('81', '2'))
    }
  ],
  modelNote: 'Give the class twelve questions in random order and ask only for the chapter of each — no solving. Recognition, practised alone, is what a mixed paper rewards.',
  interactive: {
    type: 'quiz',
    title: 'Which chapter, and which method?',
    hint: 'Name the chapter before naming the method.',
    items: [
      { q: m('x² − 5x + 6 = 0') + ' belongs to:', a: ['quadratics', 'sequences', 'probability', 'trigonometry'], c: 0, why: 'Factorise or use the formula.' },
      { q: 'Its roots are:', a: [m('2') + ' and ' + m('3'), m('−2') + ' and ' + m('−3'), m('1') + ' and ' + m('6'), m('−1') + ' and ' + m('−6')], c: 0, why: 'Product ' + m('6') + ', sum ' + m('5') + '.' },
      { q: 'The discriminant of ' + m('x² + 2x + 5') + ' is:', a: [m('−16'), m('16'), m('24'), m('4')], c: 0, why: m('4 − 20') + ' — no real roots.' },
      { q: m('3, 7, 11, …') + ' has ' + m('a₁₀') + ' equal to:', a: [m('39'), m('40'), m('43'), m('37')], c: 0, why: m('3 + 9 · 4') + '.' },
      { q: 'A GP with ' + m('a₁ = 2') + ' and ' + m('q = ' + f('1', '2')) + ' has infinite sum:', a: [m('2'), m('4'), m('1'), 'no sum'], c: 1, why: m(f('2', '1 − 0.5')) + '.' },
      { q: m('sin²α + cos²α') + ' equals:', a: [m('0'), m('1'), m('2'), m('α')], c: 1, why: 'The identity.' },
      { q: m('sin 150°') + ' equals:', a: [m('−0.5'), m('0.5'), m(f('√3', '2')), m('1')], c: 1, why: 'The reduction formula.' },
      { q: 'One die: ' + m('P') + '(a prime) is:', a: [m(f('1', '6')), m(f('1', '3')), m(f('1', '2')), m(f('2', '3'))], c: 2, why: m('2, 3, 5') + '.' }
    ]
  },
  quiz: [
    { q: '“Find the domain of ' + m(sr('x² − 4')) + '” belongs to:', a: ['Chapter I', 'Chapter II', 'Chapter III', 'Chapter V'], c: 0, why: 'The sign of a quadratic.' },
    { q: '“Evaluate ' + m('cos 750°') + '” belongs to:', a: ['Chapter I', 'Chapter II', 'Chapter III', 'Chapter IV'], c: 2, why: 'Period, then reduction.' },
    { q: '“How many multiples of ' + m('7') + ' below ' + m('500') + '” belongs to:', a: ['Chapter II', 'Chapter III', 'Chapter IV', 'Chapter V'], c: 2, why: 'An AP with ' + m('d = 7') + '.' },
    { q: '“' + m('P') + '(at least one six)” is done by:', a: ['listing', 'the complement', 'a formula', 'a graph'], c: 1, why: m('1 − P') + '(none).' },
    { q: 'Grade 10 trigonometric equations most need:', a: ['progressions', 'the unit circle and reduction', 'probability', 'Vieta'], c: 1, why: 'They are used in every line.' },
    { q: 'The best revision is:', a: ['one chapter at a time', 'mixed questions', 'reading the book', 'copying notes'], c: 1, why: 'It trains recognition.' }
  ],
  practice: {
    easy: [
      ['Solve ' + m('x² − x − 12 ≥ 0'), m('(−∞, −3] ∪ [4, +∞)')],
      ['Domain of ' + m(sr('x² − 4')), m('(−∞, −2] ∪ [2, +∞)')],
      [m('sin 120°'), m(f(sr('3'), '2'))],
      [m('cos 30°'), m(f(sr('3'), '2'))],
      [m('S₂₀') + ' of ' + m('1, 5, 9, …'), m('780')],
      [m('27 + 9 + 3 + …'), m(f('81', '2'))],
      [m('P') + '(a card is a red king)', m(f('1', '26'))]
    ],
    med: [
      ['Solve ' + m('{ x − y = 1 ; xy = 6 }'), m('(3, 2), (−2, −3)')],
      [m('sin 120° cos 30°'), m(f('3', '4'))],
      ['Prove ' + m('a² + b² ≥ 2ab'), m('(a − b)² ≥ 0')],
      ['Multiples of ' + m('7') + ' below ' + m('500'), m('71')],
      [m('cos 750°'), m(f(sr('3'), '2'))],
      ['Two numbers: sum ' + m('9') + ', product ' + m('20'), m('4') + ' and ' + m('5')],
      ['Two dice: ' + m('P') + '(at least one six)', m(f('11', '36'))]
    ],
    hard: [
      ['Solve ' + m('{ x² + y² = 20 ; xy = 8 }'), m('(4, 2), (2, 4), (−4, −2), (−2, −4)')],
      ['Prove ' + m(f('sin 2α', '1 + cos 2α') + ' = tan α'), 'Use ' + m('2cos²α')],
      ['An AP has ' + m('S₁₀ = 155') + ' and ' + m('a₁ = 2') + ': find ' + m('d'), m('3')],
      ['A GP has ' + m('S = 12') + ' and ' + m('b₁ = 8') + ': find ' + m('q'), m(f('1', '3'))],
      ['Three coins: ' + m('P') + '(at least two heads)', m(f('1', '2'))],
      ['Solve ' + m('sin 3x + sin x = 0'), m('x = ' + f('πk', '2'))],
      ['Domain of ' + m('y = ' + f(sr('x + 1'), 'x − 2')), m('[−1, 2) ∪ (2, +∞)')]
    ]
  },
  hwTitle: 'Summer work — 5 tasks, one a week',
  hwNote: 'Not five tasks for one evening: one page a week, spread across the summer.',
  homework: [
    'Week 1: draw the parabola with its sign rule and solve ten quadratic inequalities.',
    'Week 2: draw the unit circle with all eight exact values, from memory.',
    'Week 3: write the four progression formulae and do ten mixed progression problems.',
    'Week 4: do ten probability problems, using the complement wherever “at least” appears.',
    'Week 5: do the annual control work again, from a blank page, and compare.'
  ]
});
