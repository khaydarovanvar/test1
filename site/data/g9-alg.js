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
