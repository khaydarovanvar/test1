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
