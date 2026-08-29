/* G11_ALG — Quarter I (27 hours). National backbone: "Algebra and Calculus 11",
   Chapter 1 — the limit, the derivative and its applications. */
var G11_ALG = [];

/* ============================== 1 ============================== */
G11_ALG.push({
  id: 'a11-01', stream: 'alg', grade: 11, quarter: 1, lessons: '1–2', hours: 2,
  title: 'Increments, and the problem of the tangent',
  subtitle: 'Two questions from opposite ends of science — the speed of a falling stone and the slope of a curve — that turn out to be the same question.',
  uz: 'Algebra 11, §1.1', uzPage: 'pp. 5–14',
  cam: 'P1 · 7.1', camPage: 'Pure Mathematics 1, pp. 122–126', wb: 'P1 Exercise 7A',
  objectives: [
    'Define the increment of the argument and the increment of the function.',
    'Compute Δy for a given function and Δx.',
    'Form the difference quotient and interpret it as an average rate of change.',
    'Explain why a tangent cannot be found by the two-point method alone.'
  ],
  terms: [
    ['Increment of the argument', 'Argument orttirmasi', 'Приращение аргумента'],
    ['Increment of the function', 'Funksiya orttirmasi', 'Приращение функции'],
    ['Difference quotient', 'Ayirmalar nisbati', 'Разностное отношение'],
    ['Average rate of change', 'O‘rtacha o‘zgarish tezligi', 'Средняя скорость изменения'],
    ['Instantaneous rate', 'Oniy tezlik', 'Мгновенная скорость'],
    ['Secant', 'Kesuvchi', 'Секущая'],
    ['Tangent', 'Urinma', 'Касательная'],
    ['Gradient', 'Burchak koeffitsienti', 'Угловой коэффициент'],
    ['Limiting position', 'Limit holat', 'Предельное положение']
  ],
  timing: [[8, 'Two problems, one answer'], [16, 'Δx and Δy'], [18, 'The difference quotient'], [20, 'Secant to tangent'], [20, 'Practice'], [8, 'Homework']],
  sections: [
    {
      h: 'Two old problems',
      html: `<p><b>The physicist's problem.</b> A stone falls ${m('s = 5t²')} metres in ${m('t')} seconds.
      Its average speed over the first 2 seconds is ${m('20 ÷ 2 = 10')} m/s. But how fast is it moving
      <b>at the instant</b> ${m('t = 2')}? Dividing distance by time needs an interval, and an instant
      has none.</p>
      <p><b>The geometer's problem.</b> The gradient of a straight line is
      ${m(f('rise', 'run'))} between any two of its points. A curve has a different steepness everywhere.
      What is the gradient <b>at one point</b>?</p>
      <div class="keybox"><div class="klabel">The same question</div>
      Both ask for a ratio at a single point, where the ratio has nothing to divide. Both are answered
      by the same idea: compute the ratio over a small interval, then shrink the interval.</div>`
    },
    {
      h: 'Increments',
      html: `<p>Move the input from ${m('x₀')} to a nearby ${m('x')}. The change in the input is the
      <b>increment of the argument</b>; the change it causes in the output is the <b>increment of the
      function</b>:</p>
      ${eq(m('Δx = x − x₀') + '     ' + m('Δy = f(x₀ + Δx) − f(x₀)'), true)}
      {{fig:incrementXY:Δx along the axis, Δy up the side. The secant is the hypotenuse of that triangle.}}
      <div class="warn"><span class="wl">${m('Δx')} is one symbol</span>
      It is not ${m('Δ')} multiplied by ${m('x')}. It cannot be cancelled, split, or treated as a product.
      It may be positive or negative — the point may move left.</div>
      <p>For ${m('y = x²')} at ${m('x₀ = 3')} with ${m('Δx = 0.1')}:
      ${m('Δy = 3.1² − 3² = 9.61 − 9 = 0.61')}.</p>`
    },
    {
      h: 'The difference quotient',
      html: `<p>Their ratio is the <b>average rate of change</b> over the interval — and geometrically it
      is the gradient of the <b>secant</b> through the two points:</p>
      ${eq(m(f('Δy', 'Δx') + ' = ' + f('f(x₀ + Δx) − f(x₀)', 'Δx')), true)}
      <p>For ${m('y = x²')} at ${m('x₀ = 3')}, expand once and the pattern appears:</p>
      ${eq(m(f('(3 + Δx)² − 9', 'Δx') + ' = ' + f('6Δx + (Δx)²', 'Δx') + ' = 6 + Δx'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">Δx</th><th class="m">Δy</th><th class="m">Δy/Δx</th></tr></thead>
      <tbody>
        <tr><td class="m">1</td><td class="m">7</td><td class="m">7</td></tr>
        <tr><td class="m">0.1</td><td class="m">0.61</td><td class="m">6.1</td></tr>
        <tr><td class="m">0.01</td><td class="m">0.0601</td><td class="m">6.01</td></tr>
        <tr><td class="m">0.001</td><td class="m">0.006001</td><td class="m">6.001</td></tr>
      </tbody></table></div>
      <p>The quotient is walking towards ${m('6')} and never arrives. That number is the answer to both
      problems.</p>`
    },
    {
      h: 'Secant to tangent',
      html: `<p>Hold ${m('A')} fixed and slide ${m('B')} towards it along the curve. The secant ${m('AB')}
      turns, and settles into a limiting position: the <b>tangent</b> at ${m('A')}.</p>
      {{fig:secantToTangent:Three secants and the line they are approaching. The tangent is the limit, not one of them.}}
      <div class="warn"><span class="wl">You cannot just set ${m('Δx = 0')}</span>
      That gives ${m(f('0', '0'))}, which is meaningless. The whole of the next lesson exists to make
      “approaches without reaching” into something precise.</div>`
    }
  ],
  examples: [
    {
      q: 'For ' + m('y = x²') + ', find ' + m('Δy') + ' at ' + m('x₀ = 4') + ' with ' + m('Δx = 0.2') + '.',
      steps: [
        [m('f(4.2) = 17.64'), ''],
        [m('f(4) = 16'), ''],
        [m('Δy = 1.64'), ''],
        [m(f('Δy', 'Δx') + ' = ' + f('1.64', '0.2') + ' = 8.2'), 'Close to ' + m('8') + '.']
      ],
      ans: m('Δy = 1.64') + ', ' + m(f('Δy', 'Δx') + ' = 8.2')
    },
    {
      q: 'Simplify ' + m(f('Δy', 'Δx')) + ' for ' + m('y = 3x² − x') + ' at a general ' + m('x') + '.',
      steps: [
        [m('Δy = 3(x + Δx)² − (x + Δx) − (3x² − x)'), ''],
        [m('= 6xΔx + 3(Δx)² − Δx'), 'The ' + m('3x²') + ' and ' + m('x') + ' terms cancel.'],
        [m(f('Δy', 'Δx') + ' = 6x + 3Δx − 1'), '']
      ],
      ans: m('6x + 3Δx − 1')
    },
    {
      q: 'A stone falls ' + m('s = 5t²') + '. Find its average speed on ' + m('[2, 2.01]') + '.',
      steps: [
        [m('s(2.01) = 5 × 4.0401 = 20.2005'), ''],
        [m('s(2) = 20'), ''],
        [m('Δs = 0.2005') + ', ' + m('Δt = 0.01'), ''],
        [m('20.05') + ' m/s.', 'Approaching ' + m('20') + '.']
      ],
      ans: m('20.05') + ' m/s'
    }
  ],
  modelNote: 'Slide h towards zero and read the gradient of the secant as it settles.',
  interactive: {
    type: 'derivative',
    title: 'Secant to tangent',
    hint: 'Shrink h and watch the secant lie down on the curve.'
  },
  quiz: [
    { q: m('Δx') + ' means:', a: [m('Δ') + ' times ' + m('x'), 'the change in ' + m('x'), 'the derivative', 'a small positive number'], c: 1, why: 'It is one symbol for a change.' },
    { q: m(f('Δy', 'Δx')) + ' is the gradient of:', a: ['the tangent', 'the secant', 'the normal', 'the axis'], c: 1, why: 'Two points, one chord.' },
    { q: 'For ' + m('y = x²') + ' at ' + m('x = 3') + ', ' + m(f('Δy', 'Δx')) + ' simplifies to:', a: [m('6'), m('6 + Δx'), m('3 + Δx'), m('9')], c: 1, why: 'Expand and cancel one ' + m('Δx') + '.' },
    { q: 'Setting ' + m('Δx = 0') + ' directly gives:', a: ['the answer', m(f('0', '0')), 'zero', 'infinity'], c: 1, why: 'Which is undefined.' }
  ],
  practice: {
    easy: [
      [m('y = x²') + ', ' + m('x₀ = 2') + ', ' + m('Δx = 1') + '. Find ' + m('Δy'), m('5')],
      [m('y = x²') + ', ' + m('x₀ = 2') + ', ' + m('Δx = 0.1') + '. Find ' + m('Δy'), m('0.41')],
      [m('y = 3x') + ', any ' + m('x₀') + ', ' + m('Δx = 2') + '. Find ' + m('Δy'), m('6')],
      [m('y = 5') + '. Find ' + m('Δy'), m('0')],
      [m('y = x') + '. Find ' + m(f('Δy', 'Δx')), m('1')],
      [m('s = 5t²') + '. Average speed on ' + m('[1, 2]'), m('15') + ' m/s'],
      ['What does the secant become as ' + m('Δx → 0') + '?', 'the tangent']
    ],
    med: [
      [m('y = x²') + '. Simplify ' + m(f('Δy', 'Δx')), m('2x + Δx')],
      [m('y = x³') + '. Simplify ' + m(f('Δy', 'Δx')), m('3x² + 3xΔx + (Δx)²')],
      [m('y = 2x² + 1') + '. Simplify ' + m(f('Δy', 'Δx')), m('4x + 2Δx')],
      [m('y = ' + f('1', 'x')) + '. Simplify ' + m(f('Δy', 'Δx')), m('−' + f('1', 'x(x + Δx)'))],
      [m('s = 5t²') + '. Average speed on ' + m('[2, 2.1]'), m('20.5') + ' m/s'],
      [m('y = x² − 4x') + '. ' + m(f('Δy', 'Δx')) + ' at ' + m('x = 1'), m('−2 + Δx')],
      ['What number is ' + m('2x + Δx') + ' approaching?', m('2x')]
    ],
    hard: [
      [m('y = ' + sr('x')) + '. Simplify ' + m(f('Δy', 'Δx')), m(f('1', sr('x + Δx') + ' + ' + sr('x')))],
      [m('y = ' + f('1', 'x²')) + '. Simplify ' + m(f('Δy', 'Δx')), m('−' + f('2x + Δx', 'x²(x + Δx)²'))],
      ['Explain why ' + m(f('Δy', 'Δx')) + ' cannot be evaluated at ' + m('Δx = 0'), 'Both parts vanish; ' + m(f('0', '0')) + ' is undefined'],
      [m('y = x²') + '. For which ' + m('Δx') + ' is the secant gradient at ' + m('x = 3') + ' equal to ' + m('6.5') + '?', m('Δx = 0.5')],
      ['A ball: ' + m('h = 20t − 5t²') + '. Average velocity on ' + m('[1, 1 + Δx]'), m('10 − 5Δx')],
      ['When is that average velocity zero?', m('Δx = 2')],
      ['Interpret the sign of ' + m(f('Δy', 'Δx')) + ' for a decreasing function', 'It is negative']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Task 5 needs a table, like the one in the lesson.',
  homework: [
    m('y = x²') + '. Find ' + m('Δy') + ' at ' + m('x₀ = 5') + ' for ' + m('Δx = 1, 0.1, 0.01') + '.',
    m('y = x³ − x') + '. Simplify ' + m(f('Δy', 'Δx')) + ' at a general ' + m('x') + '.',
    m('s = 4t² + t') + '. Find the average speed on ' + m('[3, 3.1]') + '.',
    'Explain in three sentences why the tangent cannot be found from two points on the curve.',
    'Tabulate ' + m(f('Δy', 'Δx')) + ' for ' + m('y = x²') + ' at ' + m('x = 2') + ' with ' + m('Δx = 1, 0.5, 0.1, 0.01') + ' and say what it approaches.'
  ]
});

/* ============================== 2 ============================== */
G11_ALG.push({
  id: 'a11-02', stream: 'alg', grade: 11, quarter: 1, lessons: '3–4', hours: 2,
  title: 'The limit of a function',
  subtitle: 'Making “approaches without reaching” precise, and the four techniques that evaluate almost every limit you will meet.',
  uz: 'Algebra 11, §1.2', uzPage: 'pp. 15–26',
  cam: 'P1 · 7.1', camPage: 'Pure Mathematics 1, pp. 126–129', wb: 'P1 Exercise 7A',
  objectives: [
    'State informally what lim f(x) = L means.',
    'Evaluate limits by substitution where the function is continuous.',
    'Resolve a 0/0 limit by factorising, by rationalising, or by cancelling.',
    'Use the algebra of limits for sums, products and quotients.'
  ],
  terms: [
    ['Limit', 'Limit', 'Предел'],
    ['Tends to', 'Intiladi', 'Стремится к'],
    ['Continuous function', 'Uzluksiz funksiya', 'Непрерывная функция'],
    ['Point of discontinuity', 'Uzilish nuqtasi', 'Точка разрыва'],
    ['Indeterminate form', 'Aniqmaslik', 'Неопределённость'],
    ['One-sided limit', 'Bir tomonlama limit', 'Односторонний предел'],
    ['Removable discontinuity', 'Bartaraf etiluvchi uzilish', 'Устранимый разрыв'],
    ['Conjugate expression', 'Qo‘shma ifoda', 'Сопряжённое выражение'],
    ['Infinity', 'Cheksizlik', 'Бесконечность']
  ],
  timing: [[10, 'What a limit says'], [14, 'Substitution, when it works'], [22, 'The 0/0 form'], [18, 'Algebra of limits'], [20, 'Practice'], [6, 'Homework']],
  sections: [
    {
      h: 'What the notation says',
      html: `${eq(m('lim') + '<sub class="m">x→a</sub> ' + m('f(x) = L'), true)}
      <div class="keybox"><div class="klabel">In words</div>
      As ${m('x')} gets close to ${m('a')} — from either side, but never equal to ${m('a')} —
      the value ${m('f(x)')} gets and stays as close to ${m('L')} as you like.</div>
      <p>The value ${m('f(a)')} is <b>irrelevant</b>. The function need not even be defined there.
      ${m(f('x² − 1', 'x − 1'))} has no value at ${m('x = 1')}, yet its limit there is ${m('2')}:
      everywhere except at ${m('1')} it equals ${m('x + 1')}.</p>`
    },
    {
      h: 'Substitution, and when it fails',
      html: `<p>For a polynomial, or any function continuous at ${m('a')}, the limit is just the value:</p>
      ${eq(m('lim') + '<sub class="m">x→2</sub> ' + m('(x² + 3x) = 4 + 6 = 10'), false)}
      <p>Substitution fails when it produces an <b>indeterminate form</b> — most often ${m(f('0', '0'))}.
      That is not an answer; it is a signal that algebra is needed first.</p>
      <div class="warn"><span class="wl">${m(f('0', '0'))} is not zero and not one</span>
      It means the numerator and denominator both vanish, and their <b>rate</b> of vanishing decides
      the answer. Different pairs give different limits.</div>`
    },
    {
      h: 'Three techniques for ' + m(f('0', '0')),
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Shape</th><th>Technique</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>polynomial over polynomial</td><td>factorise and cancel</td><td class="m">${f('x² − 9', 'x − 3')} → x + 3 → 6</td></tr>
        <tr><td>a square root appears</td><td>multiply by the conjugate</td><td class="m">${f(sr('x') + ' − 2', 'x − 4')} → ${f('1', sr('x') + ' + 2')} → ${f('1', '4')}</td></tr>
        <tr><td>a compound fraction</td><td>combine, then cancel</td><td class="m">${f(f('1', 'x') + ' − ' + f('1', '2'), 'x − 2')} → −${f('1', '4')}</td></tr>
      </tbody></table></div>
      <p>All three do the same thing: remove the factor that is making both parts vanish.</p>
      ${eq(m(f('x² − 9', 'x − 3') + ' = ' + f('(x − 3)(x + 3)', 'x − 3') + ' = x + 3   (x ≠ 3)'), true)}
      <p>The cancellation is legal precisely because ${m('x ≠ 3')} throughout the limiting process.</p>`
    },
    {
      h: 'The algebra of limits',
      html: `<p>If both limits exist, limits pass through the four operations:</p>
      ${eq(m('lim(f ± g) = lim f ± lim g') + '  ·  ' + m('lim(f · g) = lim f · lim g') + '  ·  ' + m('lim' + f('f', 'g') + ' = ' + f('lim f', 'lim g')) + ' (if ' + m('lim g ≠ 0') + ')', true)}
      <p>and ${m('lim(c · f) = c · lim f')}. These rules are what let you break a complicated limit into
      pieces — and the condition on the quotient rule is exactly where the ${m(f('0', '0'))} cases hide.</p>
      <div class="keybox"><div class="klabel">Why this lesson exists</div>
      The derivative is defined as one particular limit, of exactly the ${m(f('0', '0'))} kind. Every
      technique here is used again in the next lesson.</div>`
    }
  ],
  examples: [
    {
      q: 'Evaluate ' + m('lim') + '<sub class="m">x→3</sub> ' + m(f('x² − x − 6', 'x − 3')) + '.',
      steps: [
        ['Substitution gives ' + m(f('0', '0')) + '.', 'Factorise.'],
        [m('x² − x − 6 = (x − 3)(x + 2)'), ''],
        [m('= x + 2') + ' for ' + m('x ≠ 3') + '.', ''],
        [m('→ 5'), '']
      ],
      ans: m('5')
    },
    {
      q: 'Evaluate ' + m('lim') + '<sub class="m">x→0</sub> ' + m(f(sr('x + 4') + ' − 2', 'x')) + '.',
      steps: [
        [m(f('0', '0')) + ' — multiply by the conjugate.', ''],
        [m(f('(x + 4) − 4', 'x(' + sr('x + 4') + ' + 2)')), ''],
        [m('= ' + f('1', sr('x + 4') + ' + 2')), ''],
        [m('→ ' + f('1', '4')), '']
      ],
      ans: m(f('1', '4'))
    },
    {
      q: 'Evaluate ' + m('lim') + '<sub class="m">x→2</sub> ' + m(f('x³ − 8', 'x² − 4')) + '.',
      steps: [
        [m('x³ − 8 = (x − 2)(x² + 2x + 4)'), ''],
        [m('x² − 4 = (x − 2)(x + 2)'), ''],
        [m('= ' + f('x² + 2x + 4', 'x + 2')), ''],
        [m('→ ' + f('12', '4') + ' = 3'), '']
      ],
      ans: m('3')
    }
  ],
  modelNote: 'Tabulate the function either side of the point before doing any algebra.',
  interactive: {
    type: 'derivative',
    title: 'Watching a limit',
    hint: 'Shrink h and read the value the quotient settles on.'
  },
  quiz: [
    { q: m('lim') + '<sub class="m">x→2</sub> ' + m('(x² + 1)') + ' is:', a: [m('4'), m('5'), m('3'), 'undefined'], c: 1, why: 'Substitution works for polynomials.' },
    { q: m(f('0', '0')) + ' means:', a: ['the limit is 0', 'the limit is 1', 'more work is needed', 'the limit does not exist'], c: 2, why: 'It is indeterminate.' },
    { q: m('lim') + '<sub class="m">x→1</sub> ' + m(f('x² − 1', 'x − 1')) + ' is:', a: [m('0'), m('1'), m('2'), 'undefined'], c: 2, why: 'It equals ' + m('x + 1') + ' near 1.' },
    { q: 'To handle ' + m(f(sr('x') + ' − 3', 'x − 9')) + ' you should:', a: ['substitute', 'factorise', 'multiply by the conjugate', 'give up'], c: 2, why: 'It clears the root.' },
    { q: 'The value ' + m('f(a)') + ' affects ' + m('lim') + '<sub class="m">x→a</sub>' + m('f(x)') + ':', a: ['always', 'never', 'sometimes', 'only if defined'], c: 1, why: 'The limit ignores the point itself.' }
  ],
  practice: {
    easy: [
      [m('lim') + '<sub class="m">x→1</sub> ' + m('(3x + 2)'), m('5')],
      [m('lim') + '<sub class="m">x→0</sub> ' + m('(x² − 4)'), m('−4')],
      [m('lim') + '<sub class="m">x→2</sub> ' + m(f('x² − 4', 'x − 2')), m('4')],
      [m('lim') + '<sub class="m">x→3</sub> ' + m(f('x² − 9', 'x − 3')), m('6')],
      [m('lim') + '<sub class="m">x→5</sub> ' + m('7'), m('7')],
      [m('lim') + '<sub class="m">x→1</sub> ' + m(f('x − 1', 'x² − 1')), m('0.5')],
      ['Is ' + m(f('0', '0')) + ' an answer?', 'no']
    ],
    med: [
      [m('lim') + '<sub class="m">x→−2</sub> ' + m(f('x² + 3x + 2', 'x + 2')), m('−1')],
      [m('lim') + '<sub class="m">x→4</sub> ' + m(f(sr('x') + ' − 2', 'x − 4')), m(f('1', '4'))],
      [m('lim') + '<sub class="m">x→0</sub> ' + m(f(sr('x + 9') + ' − 3', 'x')), m(f('1', '6'))],
      [m('lim') + '<sub class="m">x→2</sub> ' + m(f('x³ − 8', 'x − 2')), m('12')],
      [m('lim') + '<sub class="m">x→1</sub> ' + m(f('x³ − 1', 'x² − 1')), m('1.5')],
      [m('lim') + '<sub class="m">x→3</sub> ' + m(f(f('1', 'x') + ' − ' + f('1', '3'), 'x − 3')), m('−' + f('1', '9'))],
      [m('lim') + '<sub class="m">x→0</sub> ' + m(f('(2 + x)² − 4', 'x')), m('4')]
    ],
    hard: [
      [m('lim') + '<sub class="m">x→1</sub> ' + m(f('x⁴ − 1', 'x − 1')), m('4')],
      [m('lim') + '<sub class="m">x→0</sub> ' + m(f(sr('1 + x') + ' − ' + sr('1 − x'), 'x')), m('1')],
      [m('lim') + '<sub class="m">x→2</sub> ' + m(f('x³ − 3x² + 4', 'x² − 4')), m(f('3', '4'))],
      [m('lim') + '<sub class="m">x→a</sub> ' + m(f('x² − a²', 'x − a')), m('2a')],
      [m('lim') + '<sub class="m">x→a</sub> ' + m(f('xⁿ − aⁿ', 'x − a')), m('naⁿ⁻¹')],
      ['Find ' + m('k') + ' so that ' + m(f('x² + kx − 6', 'x − 2')) + ' has a finite limit at ' + m('2'), m('k = 1')],
      ['Give two functions with ' + m(f('0', '0')) + ' at ' + m('0') + ' and different limits', m(f('x', 'x')) + ' → 1 and ' + m(f('x²', 'x')) + ' → 0']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Show the algebra. A limit written down with no working scores nothing.',
  homework: [
    'Evaluate ' + m('lim') + '<sub class="m">x→4</sub> ' + m(f('x² − 16', 'x − 4')) + '.',
    'Evaluate ' + m('lim') + '<sub class="m">x→0</sub> ' + m(f(sr('x + 16') + ' − 4', 'x')) + '.',
    'Evaluate ' + m('lim') + '<sub class="m">x→3</sub> ' + m(f('x³ − 27', 'x² − 9')) + '.',
    'Explain in three sentences why ' + m(f('0', '0')) + ' is called indeterminate.',
    'Evaluate ' + m('lim') + '<sub class="m">x→a</sub> ' + m(f('x³ − a³', 'x − a')) + ' and check it against ' + m('naⁿ⁻¹') + '.'
  ]
});

/* ============================== 3 ============================== */
G11_ALG.push({
  id: 'a11-03', stream: 'alg', grade: 11, quarter: 1, lessons: '5–6', hours: 2,
  title: 'The derivative of a function',
  subtitle: 'The definition, the notation, and what the number actually measures in geometry and in physics.',
  uz: 'Algebra 11, §1.3', uzPage: 'pp. 27–38',
  cam: 'P1 · 7.1–7.2', camPage: 'Pure Mathematics 1, pp. 122–133', wb: 'P1 Exercise 7A, 7B',
  objectives: [
    'State the definition of the derivative as a limit of the difference quotient.',
    'Differentiate from first principles for a polynomial and a simple root.',
    'Interpret f′(x) as a gradient and as a rate of change.',
    'Use the three standard notations for the derivative.'
  ],
  terms: [
    ['Derivative', 'Hosila', 'Производная'],
    ['Differentiation', 'Differensiallash', 'Дифференцирование'],
    ['From first principles', 'Ta’rif bo‘yicha', 'По определению'],
    ['Gradient function', 'Burchak koeffitsienti funksiyasi', 'Функция углового коэффициента'],
    ['Differentiable', 'Differensiallanuvchi', 'Дифференцируемая'],
    ['Instantaneous velocity', 'Oniy tezlik', 'Мгновенная скорость'],
    ['Leibniz notation', 'Leybnits belgilanishi', 'Обозначение Лейбница'],
    ['Corner point', 'Sinish nuqtasi', 'Угловая точка'],
    ['Rate of change', 'O‘zgarish tezligi', 'Скорость изменения']
  ],
  timing: [[10, 'The definition'], [22, 'First principles, three times'], [16, 'Two interpretations'], [12, 'Notation, and where it fails'], [22, 'Practice'], [8, 'Homework']],
  sections: [
    {
      h: 'The definition',
      html: `<div class="keybox"><div class="klabel">The derivative of ${m('f')} at ${m('x')}</div>
      ${eq(m("f′(x) = lim") + '<sub class="m">Δx→0</sub> ' + m(f('Δy', 'Δx') + ' = lim') + '<sub class="m">h→0</sub> ' + m(f('f(x + h) − f(x)', 'h')), true)}
      when that limit exists. The function ${m('f')} is then <b>differentiable</b> at ${m('x')}.</div>
      <p>Everything from the last two lessons is now in one line: the increments give the quotient,
      and the limit turns the secant into the tangent.</p>
      {{fig:secantToTangent:As h shrinks the secant becomes the tangent, and its gradient becomes f′(x).}}`
    },
    {
      h: 'Three derivatives from first principles',
      html: `<p><b>1.</b> ${m('f(x) = x²')}:</p>
      ${eq(m(f('(x + h)² − x²', 'h') + ' = ' + f('2xh + h²', 'h') + ' = 2x + h  →  2x'), false)}
      <p><b>2.</b> ${m('f(x) = x³')}:</p>
      ${eq(m(f('(x + h)³ − x³', 'h') + ' = 3x² + 3xh + h²  →  3x²'), false)}
      <p><b>3.</b> ${m('f(x) = ' + f('1', 'x'))}:</p>
      ${eq(m(f(f('1', 'x + h') + ' − ' + f('1', 'x'), 'h') + ' = ' + f('−1', 'x(x + h)') + '  →  −' + f('1', 'x²')), true)}
      <div class="keybox"><div class="klabel">The pattern</div>
      ${m('x² → 2x')}, ${m('x³ → 3x²')}, ${m('x⁻¹ → −x⁻²')}. In every case the index comes down in front
      and drops by one. That is the rule proved in the next lesson.</div>`
    },
    {
      h: 'What the number means',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Context</th><th class="m">f(x)</th><th class="m">f′(x)</th></tr></thead>
      <tbody>
        <tr><td>geometry</td><td>height of the curve</td><td>gradient of the tangent</td></tr>
        <tr><td>motion</td><td>displacement ${m('s(t)')}</td><td>velocity ${m('v(t)')}</td></tr>
        <tr><td>motion, again</td><td>velocity ${m('v(t)')}</td><td>acceleration ${m('a(t)')}</td></tr>
        <tr><td>economics</td><td>total cost ${m('C(q)')}</td><td>marginal cost</td></tr>
        <tr><td>biology</td><td>population ${m('P(t)')}</td><td>growth rate</td></tr>
      </tbody></table></div>
      <p>For the falling stone ${m('s = 5t²')}: ${m('s′ = 10t')}, so at ${m('t = 2')} the speed is
      ${m('20')} m/s — the number the table in Lesson 1–2 was walking towards.</p>`
    },
    {
      h: 'Notation, and where the derivative fails to exist',
      html: `<p>Three notations, all standard, all meaning the same thing:</p>
      ${eq(m("f′(x)") + '  ·  ' + m('y′') + '  ·  ' + m(f('dy', 'dx')), true)}
      <p>The Leibniz form ${m(f('dy', 'dx'))} keeps the increments visible and is preferred in physics
      and in the chain rule.</p>
      <div class="warn"><span class="wl">Not every function has a derivative everywhere</span>
      ${m('f(x) = |x|')} has no derivative at ${m('0')}: approaching from the left the quotient is
      ${m('−1')}, from the right ${m('+1')}. The two one-sided limits disagree, so no tangent exists —
      the graph has a <b>corner</b>. A vertical tangent, as in ${m('y = ∛x')} at ${m('0')}, also fails.</div>`
    }
  ],
  examples: [
    {
      q: 'Differentiate ' + m('f(x) = 3x² − 5x') + ' from first principles.',
      steps: [
        [m('f(x + h) = 3(x + h)² − 5(x + h)'), ''],
        [m('f(x + h) − f(x) = 6xh + 3h² − 5h'), ''],
        [m(f('...', 'h') + ' = 6x + 3h − 5'), ''],
        [m('h → 0'), '']
      ],
      ans: m('f′(x) = 6x − 5')
    },
    {
      q: 'Differentiate ' + m('f(x) = ' + sr('x')) + ' from first principles.',
      steps: [
        [m(f(sr('x + h') + ' − ' + sr('x'), 'h')), 'Multiply by the conjugate.'],
        [m('= ' + f('h', 'h(' + sr('x + h') + ' + ' + sr('x') + ')')), ''],
        [m('= ' + f('1', sr('x + h') + ' + ' + sr('x'))), ''],
        [m('→ ' + f('1', '2' + sr('x'))), '']
      ],
      ans: m('f′(x) = ' + f('1', '2' + sr('x')))
    },
    {
      q: 'A body moves with ' + m('s = t³ − 6t²') + ' metres. Find its velocity and acceleration at ' + m('t = 4') + '.',
      steps: [
        [m('v = s′ = 3t² − 12t'), ''],
        [m('v(4) = 48 − 48 = 0'), 'Momentarily at rest.'],
        [m('a = v′ = 6t − 12'), ''],
        [m('a(4) = 12'), '']
      ],
      ans: m('v = 0') + ' m/s, ' + m('a = 12') + ' m/s²'
    }
  ],
  modelNote: 'Set h to 1, then 0.1, then 0.01 and read the gradient converging.',
  interactive: {
    type: 'derivative',
    title: 'The derivative as a limit',
    hint: 'The secant gradient is printed as you shrink h.'
  },
  quiz: [
    { q: 'The derivative is the limit of:', a: ['the function', 'the secant gradient', 'the tangent', 'the increment'], c: 1, why: 'As the interval shrinks to zero.' },
    { q: 'From first principles, ' + m('(x³)′') + ' is:', a: [m('3x'), m('3x²'), m('x²'), m('3x³')], c: 1, why: 'Expand and cancel one ' + m('h') + '.' },
    { q: m('f′(x)') + ' for ' + m('f(x) = ' + f('1', 'x')) + ' is:', a: [m(f('1', 'x²')), m('−' + f('1', 'x²')), m('ln x'), m('−x')], c: 1, why: 'Combine the fractions first.' },
    { q: m('|x|') + ' at ' + m('x = 0') + ':', a: ['has derivative 0', 'has derivative 1', 'has no derivative', 'has derivative −1'], c: 2, why: 'The one-sided limits differ.' },
    { q: 'If ' + m('s(t)') + ' is displacement, ' + m("s′(t)") + ' is:', a: ['distance', 'velocity', 'acceleration', 'time'], c: 1, why: 'Rate of change of position.' }
  ],
  practice: {
    easy: [
      ['From first principles, ' + m('(x²)′'), m('2x')],
      ['From first principles, ' + m('(5x)′'), m('5')],
      ['From first principles, ' + m('(7)′'), m('0')],
      [m('f(x) = x²') + '; find ' + m('f′(3)'), m('6')],
      [m('f(x) = x³') + '; find ' + m('f′(2)'), m('12')],
      [m('s = 5t²') + '; find ' + m('v(2)'), m('20') + ' m/s'],
      ['Name three notations for the derivative', m("f′(x), y′, " + f('dy', 'dx'))]
    ],
    med: [
      ['First principles: ' + m('(2x² + x)′'), m('4x + 1')],
      ['First principles: ' + m('(x² − 3x + 1)′'), m('2x − 3')],
      ['First principles: ' + m('(' + f('1', 'x') + ')′'), m('−' + f('1', 'x²'))],
      ['First principles: ' + m('(' + sr('x') + ')′'), m(f('1', '2' + sr('x')))],
      [m('s = t³ − 6t²') + '; find ' + m('v(4)'), m('0')],
      ['Same; find ' + m('a(4)'), m('12')],
      ['Where does ' + m('|x − 2|') + ' fail to be differentiable?', m('x = 2')]
    ],
    hard: [
      ['First principles: ' + m('(x⁴)′'), m('4x³')],
      ['First principles: ' + m('(' + f('1', 'x²') + ')′'), m('−' + f('2', 'x³'))],
      ['First principles: ' + m('(' + f('1', sr('x')) + ')′'), m('−' + f('1', '2x' + sr('x')))],
      ['Show ' + m('f(x) = |x|') + ' has one-sided derivatives ' + m('±1') + ' at ' + m('0'), 'Quotient is ' + m(f('|h|', 'h'))],
      [m('s = t³ − 3t² + 2t') + '; when is the body at rest?', m('t = 1 ± ' + f('1', sr('3')))],
      ['A differentiable function is always continuous. Give a continuous function that is not differentiable', m('|x|') + ' at 0'],
      ['From first principles find ' + m("(x⁻³)′"), m('−3x⁻⁴')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Tasks 1–3 must be done from the definition, not from a rule.',
  homework: [
    'From first principles, differentiate ' + m('f(x) = 4x² − 7x + 2') + '.',
    'From first principles, differentiate ' + m('f(x) = ' + f('2', 'x')) + '.',
    'From first principles, differentiate ' + m('f(x) = ' + sr('2x')) + '.',
    m('s = 2t³ − 9t² + 12t') + '. Find the velocity and the times at which the body is at rest.',
    'Explain, with a sketch, why ' + m('y = |x + 1|') + ' has no derivative at ' + m('x = −1') + '.'
  ]
});

/* ============================== 4 ============================== */
G11_ALG.push({
  id: 'a11-04', stream: 'alg', grade: 11, quarter: 1, lessons: '7–9', hours: 3,
  title: 'The rules of differentiation',
  subtitle: 'Power, constant multiple, sum, product and quotient — five rules that replace first principles for good.',
  uz: 'Algebra 11, §1.4', uzPage: 'pp. 39–54',
  cam: 'P1 · 7.2–7.4', camPage: 'Pure Mathematics 1, pp. 130–145', wb: 'P1 Exercise 7B–7D',
  objectives: [
    'Apply the power rule to positive, negative and fractional indices.',
    'Differentiate sums and constant multiples.',
    'Apply the product rule and the quotient rule.',
    'Rewrite an expression into a differentiable form before starting.'
  ],
  terms: [
    ['Power rule', 'Daraja qoidasi', 'Правило степени'],
    ['Constant multiple rule', 'O‘zgarmas ko‘paytuvchi qoidasi', 'Правило постоянного множителя'],
    ['Sum rule', 'Yig‘indi qoidasi', 'Правило суммы'],
    ['Product rule', 'Ko‘paytma qoidasi', 'Правило произведения'],
    ['Quotient rule', 'Bo‘linma qoidasi', 'Правило частного'],
    ['Fractional index', 'Kasr ko‘rsatkich', 'Дробный показатель'],
    ['Negative index', 'Manfiy ko‘rsatkich', 'Отрицательный показатель'],
    ['Simplify first', 'Avval soddalashtirish', 'Сначала упростить'],
    ['Second derivative', 'Ikkinchi tartibli hosila', 'Вторая производная']
  ],
  timing: [[14, 'The power rule'], [16, 'Sums and multiples'], [26, 'The product rule'], [26, 'The quotient rule'], [32, 'Practice'], [21, 'Homework and consolidation']],
  sections: [
    {
      h: 'The power rule',
      html: `${eq(m('(xⁿ)′ = n·xⁿ⁻¹') + '     for every real ' + m('n'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">f(x)</th><th>Rewrite as</th><th class="m">f′(x)</th></tr></thead>
      <tbody>
        <tr><td class="m">x⁵</td><td class="m">x⁵</td><td class="m">5x⁴</td></tr>
        <tr><td class="m">${sr('x')}</td><td class="m">x<sup>1/2</sup></td><td class="m">${f('1', '2')}x<sup>−1/2</sup> = ${f('1', '2' + sr('x'))}</td></tr>
        <tr><td class="m">${f('1', 'x³')}</td><td class="m">x⁻³</td><td class="m">−3x⁻⁴ = −${f('3', 'x⁴')}</td></tr>
        <tr><td class="m">${f('1', sr('x'))}</td><td class="m">x<sup>−1/2</sup></td><td class="m">−${f('1', '2x' + sr('x'))}</td></tr>
        <tr><td class="m">x</td><td class="m">x¹</td><td class="m">1</td></tr>
        <tr><td class="m">7</td><td class="m">7x⁰</td><td class="m">0</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Rewrite before you differentiate</div>
      Every root becomes a fractional index; every fraction with ${m('x')} alone below becomes a negative
      index. Do that first, and the power rule handles everything.</div>`
    },
    {
      h: 'Multiples and sums',
      html: `${eq(m('(c · f)′ = c · f′') + '     ' + m('(f ± g)′ = f′ ± g′'), true)}
      <p>Together these differentiate any polynomial term by term:</p>
      ${eq(m('(4x³ − 7x² + 2x − 9)′ = 12x² − 14x + 2'), false)}
      <div class="warn"><span class="wl">There is no product rule for a constant</span>
      ${m('(5x³)′')} is ${m('15x²')}, not ${m('(5)′(x³) + 5(x³)′')}. Constants pass straight through —
      using the product rule here is not wrong, just wasteful.</div>`
    },
    {
      h: 'The product rule',
      html: `${eq(m('(u · v)′ = u′v + uv′'), true)}
      <div class="warn"><span class="wl">The derivative of a product is not the product of the derivatives</span>
      Test it: ${m('(x · x)′ = (x²)′ = 2x')}, but ${m("x′ · x′ = 1")}. The rule is needed.</div>
      <p><b>Method.</b> Write ${m('u')} and ${m('v')} in a column, differentiate each beside it,
      then assemble. For ${m('y = x³(2x + 1)')}:</p>
      <div class="tablewrap"><table>
      <thead><tr><th></th><th class="m">u</th><th class="m">v</th></tr></thead>
      <tbody>
        <tr><td>function</td><td class="m">x³</td><td class="m">2x + 1</td></tr>
        <tr><td>derivative</td><td class="m">3x²</td><td class="m">2</td></tr>
      </tbody></table></div>
      ${eq(m("y′ = 3x²(2x + 1) + x³ · 2 = 6x³ + 3x² + 2x³ = 8x³ + 3x²"), false)}
      <p>Check by expanding first: ${m('y = 2x⁴ + x³')}, so ${m("y′ = 8x³ + 3x²")}. ✓</p>`
    },
    {
      h: 'The quotient rule',
      html: `${eq(m('(' + f('u', 'v') + ')′ = ' + f("u′v − uv′", 'v²')), true)}
      <div class="warn"><span class="wl">The order in the numerator matters</span>
      It is ${m("u′v")} <b>minus</b> ${m("uv′")}, not the other way round. Swapping them flips the sign
      of every answer. The product rule is symmetric; the quotient rule is not.</div>
      <p>For ${m('y = ' + f('x²', 'x + 1'))}:</p>
      ${eq(m("y′ = " + f('2x(x + 1) − x² · 1', '(x + 1)²') + ' = ' + f('x² + 2x', '(x + 1)²')), false)}
      <div class="keybox"><div class="klabel">Often you do not need it</div>
      ${m('y = ' + f('x³ + 2x', 'x'))} is just ${m('x² + 2')}. Divide through first whenever the
      denominator is a single term — it is faster and safer.</div>`
    }
  ],
  examples: [
    {
      q: 'Differentiate ' + m('y = 3x⁴ − ' + f('2', 'x²') + ' + 5' + sr('x')) + '.',
      steps: [
        ['Rewrite: ' + m('3x⁴ − 2x⁻² + 5x^(1/2)') + '.', ''],
        [m('12x³'), ''],
        [m('+ 4x⁻³'), 'Note the double negative.'],
        [m('+ ' + f('5', '2') + 'x^(−1/2)'), '']
      ],
      ans: m("y′ = 12x³ + " + f('4', 'x³') + ' + ' + f('5', '2' + sr('x')))
    },
    {
      q: 'Differentiate ' + m('y = (x² + 1)(3x − 4)') + ' by the product rule.',
      steps: [
        [m('u = x² + 1, u′ = 2x'), ''],
        [m('v = 3x − 4, v′ = 3'), ''],
        [m("y′ = 2x(3x − 4) + (x² + 1)(3)"), ''],
        [m('= 6x² − 8x + 3x² + 3 = 9x² − 8x + 3'), '']
      ],
      ans: m('9x² − 8x + 3')
    },
    {
      q: 'Differentiate ' + m('y = ' + f('2x − 1', 'x² + 3')) + '.',
      steps: [
        [m('u = 2x − 1, u′ = 2'), ''],
        [m('v = x² + 3, v′ = 2x'), ''],
        [m("y′ = " + f('2(x² + 3) − (2x − 1)(2x)', '(x² + 3)²')), ''],
        [m('= ' + f('−2x² + 2x + 6', '(x² + 3)²')), '']
      ],
      ans: m(f('−2x² + 2x + 6', '(x² + 3)²'))
    }
  ],
  modelNote: 'Do one product both ways — expand first, then the rule — and confirm they agree.',
  interactive: {
    type: 'derivative',
    title: 'Checking a rule',
    hint: 'The numerical gradient should match the rule’s answer.'
  },
  quiz: [
    { q: m('(x⁷)′') + ' is:', a: [m('7x⁶'), m('7x⁸'), m('x⁶'), m('6x⁷')], c: 0, why: 'Index down, then reduce by 1.' },
    { q: m('(' + sr('x') + ')′') + ' is:', a: [m(f('1', '2' + sr('x'))), m('2' + sr('x')), m(f('1', sr('x'))), m(f('1', '2'))], c: 0, why: m('x^(1/2) → ' + f('1', '2') + 'x^(−1/2)') + '.' },
    { q: 'The product rule is:', a: [m("u′v′"), m("u′v + uv′"), m("u′v − uv′"), m("uv′ − u′v")], c: 1, why: 'Both terms, both signs positive.' },
    { q: 'The quotient rule numerator is:', a: [m("u′v + uv′"), m("u′v − uv′"), m("uv′ − u′v"), m("u′v′")], c: 1, why: 'Order matters.' },
    { q: m('(' + f('1', 'x⁴') + ')′') + ' is:', a: [m('−' + f('4', 'x⁵')), m(f('4', 'x⁵')), m('−' + f('1', 'x⁵')), m('−4x³')], c: 0, why: m('x⁻⁴ → −4x⁻⁵') + '.' },
    { q: m('(6)′') + ' is:', a: [m('6'), m('1'), m('0'), m('6x')], c: 2, why: 'A constant does not change.' }
  ],
  practice: {
    easy: [
      [m('(x⁶)′'), m('6x⁵')],
      [m('(3x²)′'), m('6x')],
      [m('(x³ + x)′'), m('3x² + 1')],
      [m('(5)′'), m('0')],
      [m('(4x)′'), m('4')],
      [m('(' + f('1', 'x') + ')′'), m('−' + f('1', 'x²'))],
      [m('(' + sr('x') + ')′'), m(f('1', '2' + sr('x')))]
    ],
    med: [
      [m('(2x⁴ − 3x² + 7)′'), m('8x³ − 6x')],
      [m('(' + f('3', 'x²') + ')′'), m('−' + f('6', 'x³'))],
      [m('(x' + sr('x') + ')′'), m(f('3', '2') + sr('x'))],
      [m('((x + 1)(x − 3))′'), m('2x − 2')],
      [m('(x²(x + 5))′'), m('3x² + 10x')],
      [m('(' + f('x', 'x + 1') + ')′'), m(f('1', '(x + 1)²'))],
      [m('(' + f('x² + 1', 'x') + ')′'), m('1 − ' + f('1', 'x²'))]
    ],
    hard: [
      [m('((2x − 1)(x² + 3))′'), m('6x² − 2x + 6')],
      [m('(' + f('2x + 3', '3x − 1') + ')′'), m('−' + f('11', '(3x − 1)²'))],
      [m('(x³' + sr('x') + ')′'), m(f('7', '2') + 'x^(5/2)')],
      [m('(' + f(sr('x'), 'x + 1') + ')′'), m(f('1 − x', '2' + sr('x') + '(x + 1)²'))],
      [m('(x²(x − 1)(x + 1))′'), m('4x³ − 2x')],
      ['Find ' + m("y″") + ' for ' + m('y = x⁴ − 3x²'), m('12x² − 6')],
      ['Find ' + m('x') + ' where ' + m('y = x³ − 3x') + ' has gradient ' + m('9'), m('x = ±2')]
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Rewrite roots and fractions as indices before differentiating.',
  homework: [
    'Differentiate ' + m('y = 5x⁴ − ' + f('3', 'x') + ' + 2' + sr('x')) + '.',
    'Differentiate ' + m('y = (3x + 2)(x² − 1)') + ' twice — by expanding and by the product rule.',
    'Differentiate ' + m('y = ' + f('x − 2', 'x + 2')) + '.',
    'Differentiate ' + m('y = x²' + sr('x')) + '.',
    'Find ' + m("y″") + ' for ' + m('y = 2x⁵ − x³ + 4x') + '.',
    'Find the points on ' + m('y = x³ − 12x') + ' where the tangent is horizontal.'
  ]
});

/* ============================== 5 ============================== */
G11_ALG.push({
  id: 'a11-05', stream: 'alg', grade: 11, quarter: 1, lessons: '10–12', hours: 3,
  title: 'The derivative of a composite function',
  subtitle: 'The chain rule — the one rule that makes everything else in calculus usable.',
  uz: 'Algebra 11, §1.5', uzPage: 'pp. 55–70',
  cam: 'P1 · 7.5', camPage: 'Pure Mathematics 1, pp. 146–155', wb: 'P1 Exercise 7E',
  objectives: [
    'Identify the inner and outer function of a composite expression.',
    'Apply the chain rule in both notations.',
    'Combine the chain rule with the product and quotient rules.',
    'Use the chain rule for related rates of change.'
  ],
  terms: [
    ['Chain rule', 'Zanjir qoidasi', 'Правило цепочки'],
    ['Composite function', 'Murakkab funksiya', 'Сложная функция'],
    ['Inner function', 'Ichki funksiya', 'Внутренняя функция'],
    ['Outer function', 'Tashqi funksiya', 'Внешняя функция'],
    ['Substitution ' + m('u'), 'Almashtirish', 'Замена переменной'],
    ['Related rates', 'Bog‘liq tezliklar', 'Связанные скорости'],
    ['Bracket power', 'Qavs darajasi', 'Степень скобки'],
    ['Intermediate variable', 'Oraliq o‘zgaruvchi', 'Промежуточная переменная']
  ],
  timing: [[14, 'Why a new rule is needed'], [22, 'The chain rule'], [26, 'Practising it'], [26, 'Mixing with product and quotient'], [30, 'Related rates'], [17, 'Homework']],
  sections: [
    {
      h: 'Why the power rule is not enough',
      html: `<p>${m('y = (3x + 1)⁵')} is a fifth power, so is it ${m('5(3x + 1)⁴')}? Test the idea on the
      easiest case, ${m('y = (3x)²')}. Expanding gives ${m('9x²')}, whose derivative is ${m('18x')} —
      but ${m('2(3x) = 6x')}. The answer is out by a factor of ${m('3')}: exactly the derivative of the
      inside.</p>
      <div class="keybox"><div class="klabel">The chain rule</div>
      ${eq(m("(f(g(x)))′ = f′(g(x)) · g′(x)") + '     or     ' + m(f('dy', 'dx') + ' = ' + f('dy', 'du') + ' · ' + f('du', 'dx')), true)}
      Differentiate the outside, leaving the inside untouched — then multiply by the derivative of the
      inside.</div>`
    },
    {
      h: 'Using it',
      html: `<p><b>Method.</b> Name the inside ${m('u')}, write ${m('y')} in terms of ${m('u')},
      differentiate both, multiply.</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">y</th><th class="m">u</th><th class="m">${f('dy', 'du')}</th><th class="m">${f('du', 'dx')}</th><th class="m">${f('dy', 'dx')}</th></tr></thead>
      <tbody>
        <tr><td class="m">(3x + 1)⁵</td><td class="m">3x + 1</td><td class="m">5u⁴</td><td class="m">3</td><td class="m">15(3x + 1)⁴</td></tr>
        <tr><td class="m">${sr('x² + 1')}</td><td class="m">x² + 1</td><td class="m">${f('1', '2' + sr('u'))}</td><td class="m">2x</td><td class="m">${f('x', sr('x² + 1'))}</td></tr>
        <tr><td class="m">${f('1', '(2x − 5)³')}</td><td class="m">2x − 5</td><td class="m">−3u⁻⁴</td><td class="m">2</td><td class="m">−${f('6', '(2x − 5)⁴')}</td></tr>
        <tr><td class="m">(x² − 4x)⁷</td><td class="m">x² − 4x</td><td class="m">7u⁶</td><td class="m">2x − 4</td><td class="m">7(2x − 4)(x² − 4x)⁶</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Never forget the second factor</span>
      Omitting ${m(f('du', 'dx'))} is the single commonest error in the whole of A-level calculus.
      Every bracket, every root, every reciprocal needs it.</div>`
    },
    {
      h: 'Mixing the rules',
      html: `<p>Real expressions need two rules at once. Decide the <b>outermost</b> structure first:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Outermost structure</th><th>Rules</th></tr></thead>
      <tbody>
        <tr><td class="m">x²(2x + 1)⁵</td><td>a product</td><td>product, then chain inside</td></tr>
        <tr><td class="m">${f('(x + 1)³', 'x²')}</td><td>a quotient</td><td>quotient, then chain</td></tr>
        <tr><td class="m">(x²(x + 1))⁴</td><td>a power</td><td>chain, then product inside</td></tr>
        <tr><td class="m">${sr('x(x + 3)')}</td><td>a root</td><td>chain, then product inside</td></tr>
      </tbody></table></div>
      ${eq(m("(x²(2x + 1)⁵)′ = 2x(2x + 1)⁵ + x² · 5(2x + 1)⁴ · 2 = 2x(2x + 1)⁴(6x + 1)"), true)}
      <div class="keybox"><div class="klabel">Always factorise the answer</div>
      The common bracket comes out, and the factorised form is what every later question — stationary
      points, sign of the gradient — actually needs.</div>`
    },
    {
      h: 'Related rates',
      html: `<p>The Leibniz form makes the chain rule read as a genuine cancellation, which is why it
      handles rates that depend on other rates:</p>
      ${eq(m(f('dV', 'dt') + ' = ' + f('dV', 'dr') + ' · ' + f('dr', 'dt')), true)}
      <p><b>Example.</b> A balloon's radius grows at ${m('2')} cm/s. How fast is the volume growing when
      ${m('r = 5')}?</p>
      ${eq(m('V = ' + f('4', '3') + 'πr³ ⇒ ' + f('dV', 'dr') + ' = 4πr² = 100π'), false)}
      ${eq(m(f('dV', 'dt') + ' = 100π × 2 = 200π ≈ 628 cm³/s'), true)}
      <div class="warn"><span class="wl">Substitute the number last</span>
      Differentiate symbolically first, then put ${m('r = 5')} in. Substituting first turns the variable
      into a constant and the derivative into zero.</div>`
    }
  ],
  examples: [
    {
      q: 'Differentiate ' + m('y = (4x − 3)⁶') + '.',
      steps: [
        [m('u = 4x − 3'), ''],
        [m(f('dy', 'du') + ' = 6u⁵'), ''],
        [m(f('du', 'dx') + ' = 4'), ''],
        [m('6(4x − 3)⁵ × 4'), '']
      ],
      ans: m('24(4x − 3)⁵')
    },
    {
      q: 'Differentiate ' + m('y = x' + sr('x² + 5')) + '.',
      steps: [
        ['A product; the second factor needs the chain rule.', ''],
        [m("(" + sr('x² + 5') + ")′ = " + f('x', sr('x² + 5'))), ''],
        [m("y′ = " + sr('x² + 5') + ' + ' + f('x²', sr('x² + 5'))), ''],
        [m('= ' + f('2x² + 5', sr('x² + 5'))), 'Over a common denominator.']
      ],
      ans: m(f('2x² + 5', sr('x² + 5')))
    },
    {
      q: 'The side of a cube grows at ' + m('0.5') + ' cm/s. How fast is the volume growing when the side is ' + m('8') + ' cm?',
      steps: [
        [m('V = a³'), ''],
        [m(f('dV', 'da') + ' = 3a² = 192'), ''],
        [m(f('dV', 'dt') + ' = 192 × 0.5'), ''],
        [m('= 96'), '']
      ],
      ans: m('96') + ' cm³/s'
    }
  ],
  modelNote: 'Differentiate one bracket by expanding and by the chain rule, and check the answers agree.',
  interactive: {
    type: 'derivative',
    title: 'Composite gradients',
    hint: 'The numerical gradient checks your chain-rule answer.'
  },
  quiz: [
    { q: m('((2x + 1)³)′') + ' is:', a: [m('3(2x + 1)²'), m('6(2x + 1)²'), m('2(2x + 1)²'), m('3(2x + 1)³')], c: 1, why: 'Times the inside derivative 2.' },
    { q: m('(' + sr('x² + 1') + ')′') + ' is:', a: [m(f('1', '2' + sr('x² + 1'))), m(f('x', sr('x² + 1'))), m(f('2x', sr('x² + 1'))), m(sr('2x'))], c: 1, why: m(f('1', '2' + sr('u')) + ' × 2x') + '.' },
    { q: 'The chain rule in Leibniz form is:', a: [m(f('dy', 'dx') + ' = ' + f('dy', 'du') + ' + ' + f('du', 'dx')), m(f('dy', 'dx') + ' = ' + f('dy', 'du') + ' · ' + f('du', 'dx')), m(f('dy', 'dx') + ' = ' + f('du', 'dy') + ' · ' + f('dx', 'du')), m(f('dy', 'du'))], c: 1, why: 'A product of two rates.' },
    { q: m('((x² + 3)⁴)′') + ' is:', a: [m('4(x² + 3)³'), m('8x(x² + 3)³'), m('2x(x² + 3)³'), m('4x(x² + 3)³')], c: 1, why: m('4u³ × 2x') + '.' },
    { q: 'For related rates you should substitute the number:', a: ['first', 'last', 'never', 'twice'], c: 1, why: 'Differentiate symbolically first.' }
  ],
  practice: {
    easy: [
      [m('((x + 1)²)′'), m('2(x + 1)')],
      [m('((3x)⁴)′'), m('324x³')],
      [m('((2x + 5)³)′'), m('6(2x + 5)²')],
      [m('((x − 7)⁵)′'), m('5(x − 7)⁴')],
      [m('(' + sr('2x') + ')′'), m(f('1', sr('2x')))],
      [m('((4 − x)³)′'), m('−3(4 − x)²')],
      [m('((x² + 1)²)′'), m('4x(x² + 1)')]
    ],
    med: [
      [m('((3x − 2)⁷)′'), m('21(3x − 2)⁶')],
      [m('(' + sr('x² + 9') + ')′'), m(f('x', sr('x² + 9')))],
      [m('(' + f('1', '(x + 2)³') + ')′'), m('−' + f('3', '(x + 2)⁴'))],
      [m('((x² − 3x)⁴)′'), m('4(2x − 3)(x² − 3x)³')],
      [m('(x(x + 1)³)′'), m('(x + 1)²(4x + 1)')],
      [m('(' + f('(2x + 1)²', 'x') + ')′'), m(f('(2x + 1)(2x − 1)', 'x²'))],
      ['Radius grows at 3 cm/s; find ' + m(f('dA', 'dt')) + ' for a circle at ' + m('r = 4'), m('24π') + ' cm²/s']
    ],
    hard: [
      [m('(x²' + sr('x + 1') + ')′'), m(f('x(5x + 4)', '2' + sr('x + 1')))],
      [m('(' + f(sr('x + 1'), 'x') + ')′'), m('−' + f('x + 2', '2x²' + sr('x + 1')))],
      [m('(((x + 1)² + 3)⁴)′'), m('8(x + 1)((x + 1)² + 3)³')],
      [m('(' + sr('x' + sr('x')) + ')′'), m(f('3', '4') + 'x^(−1/4)')],
      ['Balloon: ' + m(f('dr', 'dt') + ' = 2') + ' cm/s. Find ' + m(f('dV', 'dt')) + ' at ' + m('r = 10'), m('800π') + ' cm³/s'],
      ['A ladder 5 m slides: foot moves at 0.4 m/s. Find the top’s speed when the foot is 3 m out', m('0.3') + ' m/s downwards'],
      ['Show ' + m('(' + f('1', 'g(x)') + ")′ = −" + f("g′(x)", '(g(x))²')), 'Chain rule on ' + m('g⁻¹')]
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Factorise every answer. Task 6 needs the rate set out with its units.',
  homework: [
    'Differentiate ' + m('y = (5x − 1)⁴') + '.',
    'Differentiate ' + m('y = ' + sr('3x² + 2')) + '.',
    'Differentiate ' + m('y = ' + f('1', '(x² + 1)²')) + '.',
    'Differentiate ' + m('y = x³(2x − 1)⁴') + ' and factorise the answer.',
    'Differentiate ' + m('y = ' + f('(x + 2)³', 'x')) + '.',
    'A spherical balloon is inflated so that its radius grows at ' + m('1.5') + ' cm/s. Find the rate of increase of its volume when ' + m('r = 6') + ' cm.'
  ]
});

/* ============================== 6 ============================== */
G11_ALG.push({
  id: 'a11-06', stream: 'alg', grade: 11, quarter: 1, lessons: '13–14', hours: 2,
  title: 'Control work 1, and work on the mistakes',
  subtitle: 'Limits, first principles and the five rules, in one paper — then an hour repairing what it finds.',
  uz: 'Algebra 11, Nazorat ishi 1', uzPage: 'pp. 71–74',
  cam: 'P1 · Chapter 7 review', camPage: 'Pure Mathematics 1, pp. 156–158', wb: 'Control paper A',
  objectives: [
    'Differentiate accurately under time.',
    'Choose the correct rule without being told which.',
    'Classify each lost mark as careless, method or knowledge.',
    'Rewrite every wrong solution correctly.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Careless error', 'E’tiborsizlik xatosi', 'Ошибка по невнимательности'],
    ['Method error', 'Usul xatosi', 'Ошибка в методе'],
    ['Knowledge gap', 'Bilim bo‘shlig‘i', 'Пробел в знаниях'],
    ['Mark scheme', 'Baholash sxemasi', 'Схема оценивания'],
    ['Working', 'Yechim yozuvi', 'Ход решения'],
    ['Correction', 'Tuzatish', 'Исправление'],
    ['Rule selection', 'Qoidani tanlash', 'Выбор правила']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [10, 'Self-mark'], [25, 'Rewrite and classify'], [12, 'Rule-selection drill']],
  sections: [
    {
      h: 'The paper — 25 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Evaluate ${m('lim')}<sub class="m">x→3</sub> ${m(f('x² − 9', 'x − 3'))} and ${m('lim')}<sub class="m">x→0</sub> ${m(f(sr('x + 4') + ' − 2', 'x'))}</td><td class="m">4</td><td>L3–4</td></tr>
        <tr><td>2</td><td>Differentiate ${m('f(x) = 2x² − 5x')} from first principles</td><td class="m">4</td><td>L5–6</td></tr>
        <tr><td>3</td><td>Differentiate ${m('y = 3x⁴ − ' + f('2', 'x') + ' + ' + sr('x'))}</td><td class="m">4</td><td>L7–9</td></tr>
        <tr><td>4</td><td>Differentiate ${m('y = (2x + 1)(x² − 3)')} by the product rule</td><td class="m">3</td><td>L7–9</td></tr>
        <tr><td>5</td><td>Differentiate ${m('y = ' + f('x', 'x² + 1'))}</td><td class="m">3</td><td>L7–9</td></tr>
        <tr><td>6</td><td>Differentiate ${m('y = (3x² − 1)⁵')} and ${m('y = ' + sr('x² + 4'))}</td><td class="m">4</td><td>L10–12</td></tr>
        <tr><td>7</td><td>A cube’s side grows at ${m('0.2')} cm/s. Find ${m(f('dV', 'dt'))} when the side is 5 cm</td><td class="m">3</td><td>L10–12</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Q2 is marked on the definition</div>
      A correct answer obtained from the power rule scores <b>one</b> mark out of four. “From first
      principles” means the limit must appear.</div>`
    },
    {
      h: 'The three columns',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Kind</th><th>In this topic it looks like</th><th>The repair</th></tr></thead>
      <tbody>
        <tr><td>careless</td><td>a lost sign in the quotient rule, a dropped ${m('2')} in ${m(f('du', 'dx'))}</td><td>check every answer by re-reading the rule</td></tr>
        <tr><td>method</td><td>using the product rule where the chain rule was needed</td><td>the rule-selection drill below</td></tr>
        <tr><td>knowledge</td><td>not knowing ${m('(' + sr('x') + ')′')}</td><td>learn the six standard derivatives</td></tr>
      </tbody></table></div>
      {{fig:secantToTangent:Question 2 in one picture — the secant, the limit, the tangent.}}`
    },
    {
      h: 'The rule-selection drill',
      html: `<p>Twelve expressions on the board. For each, the class calls out only the <b>rule</b>,
      not the answer, in five seconds:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Rule</th></tr></thead>
      <tbody>
        <tr><td class="m">x⁵ − 2x</td><td>power and sum</td></tr>
        <tr><td class="m">(x + 1)⁷</td><td>chain</td></tr>
        <tr><td class="m">x²(x + 1)</td><td>product (or expand)</td></tr>
        <tr><td class="m">${f('x', 'x + 1')}</td><td>quotient</td></tr>
        <tr><td class="m">${f('x² + x', 'x')}</td><td>divide first, then power</td></tr>
        <tr><td class="m">${sr('4x + 1')}</td><td>chain</td></tr>
        <tr><td class="m">x${sr('x + 1')}</td><td>product then chain</td></tr>
        <tr><td class="m">${f('1', '(x − 2)⁴')}</td><td>chain</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Rows 5 and 8 are the traps</span>
      Row 5 needs no quotient rule at all; row 8 needs no quotient rule either, once it is written as
      ${m('(x − 2)⁻⁴')}. Choosing the heavier rule costs time and invites sign errors.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q2: differentiate ' + m('f(x) = 2x² − 5x') + ' from first principles.',
      steps: [
        [m('f(x + h) = 2(x + h)² − 5(x + h)'), ''],
        [m('f(x + h) − f(x) = 4xh + 2h² − 5h'), ''],
        [m(f('...', 'h') + ' = 4x + 2h − 5'), ''],
        [m('lim') + '<sub class="m">h→0</sub> ' + m('= 4x − 5'), '']
      ],
      ans: m("f′(x) = 4x − 5")
    },
    {
      q: 'Model answer, Q5: differentiate ' + m('y = ' + f('x', 'x² + 1')) + '.',
      steps: [
        [m('u = x, u′ = 1; v = x² + 1, v′ = 2x'), ''],
        [m(f('1(x² + 1) − x(2x)', '(x² + 1)²')), ''],
        [m('= ' + f('1 − x²', '(x² + 1)²')), '']
      ],
      ans: m(f('1 − x²', '(x² + 1)²'))
    },
    {
      q: 'A learner wrote ' + m('((3x² − 1)⁵)′ = 5(3x² − 1)⁴') + '. Name the mistake.',
      steps: [
        ['The inside derivative is missing.', 'A method error.'],
        [m('(3x² − 1)′ = 6x'), ''],
        ['Correct: ' + m('30x(3x² − 1)⁴') + '.', '']
      ],
      ans: 'Method error — the chain rule’s second factor was omitted'
    }
  ],
  modelNote: 'Run the rule-selection drill before the rewrite, not after.',
  interactive: {
    type: 'quiz',
    title: 'Which rule?',
    hint: 'Name the rule, not the answer.',
    items: [
      { q: m('y = (x² + 1)⁶'), a: ['power only', 'chain', 'product', 'quotient'], c: 1, why: 'A function inside a power.' },
      { q: m('y = x³(x + 2)'), a: ['chain', 'product', 'quotient', 'none'], c: 1, why: 'Or expand first.' },
      { q: m('y = ' + f('x³ + x', 'x')), a: ['quotient', 'divide first', 'chain', 'product'], c: 1, why: 'It is ' + m('x² + 1') + '.' },
      { q: m('y = ' + f('1', '(2x + 1)³')), a: ['quotient', 'chain on ' + m('(2x + 1)⁻³'), 'product', 'power only'], c: 1, why: 'Negative index plus chain.' },
      { q: m('y = ' + sr('x² + x')), a: ['chain', 'product', 'quotient', 'power only'], c: 0, why: 'A function inside a root.' },
      { q: m('((3x² − 1)⁵)′') + ' is:', a: [m('5(3x² − 1)⁴'), m('30x(3x² − 1)⁴'), m('15x(3x² − 1)⁴'), m('6x(3x² − 1)⁴')], c: 1, why: m('5u⁴ × 6x') + '.' }
    ]
  },
  quiz: [
    { q: '“From first principles” means:', a: ['use the power rule', 'use the limit definition', 'use a calculator', 'draw a graph'], c: 1, why: 'The limit must appear.' },
    { q: 'Forgetting ' + m(f('du', 'dx')) + ' is:', a: ['careless', 'a method error', 'a knowledge gap', 'not an error'], c: 1, why: 'The rule was misapplied.' },
    { q: m(f('x² + x', 'x')) + ' is best differentiated by:', a: ['the quotient rule', 'dividing first', 'the product rule', 'first principles'], c: 1, why: 'It simplifies to ' + m('x + 1') + '.' },
    { q: 'The quotient rule numerator is:', a: [m("u′v + uv′"), m("u′v − uv′"), m("uv′ − u′v"), m("u′v′")], c: 1, why: 'Order matters.' }
  ],
  practice: {
    easy: [
      [m('lim') + '<sub class="m">x→3</sub> ' + m(f('x² − 9', 'x − 3')), m('6')],
      ['First principles: ' + m('(2x²)′'), m('4x')],
      [m('(3x⁴)′'), m('12x³')],
      [m('(' + f('2', 'x') + ')′'), m('−' + f('2', 'x²'))],
      [m('((2x + 1)(x² − 3))′'), m('6x² + 2x − 6')],
      [m('(' + f('x', 'x² + 1') + ')′'), m(f('1 − x²', '(x² + 1)²'))],
      [m('((3x² − 1)⁵)′'), m('30x(3x² − 1)⁴')]
    ],
    med: [
      [m('lim') + '<sub class="m">x→0</sub> ' + m(f(sr('x + 4') + ' − 2', 'x')), m(f('1', '4'))],
      ['First principles: ' + m('(2x² − 5x)′'), m('4x − 5')],
      [m('(3x⁴ − ' + f('2', 'x') + ' + ' + sr('x') + ')′'), m('12x³ + ' + f('2', 'x²') + ' + ' + f('1', '2' + sr('x')))],
      [m('(' + sr('x² + 4') + ')′'), m(f('x', sr('x² + 4')))],
      ['Cube side grows at ' + m('0.2') + ' cm/s; ' + m(f('dV', 'dt')) + ' at side 5', m('15') + ' cm³/s'],
      [m('(x²(x + 1)³)′'), m('x(x + 1)²(5x + 2)')],
      [m('(' + f('2x − 1', 'x + 3') + ')′'), m(f('7', '(x + 3)²'))]
    ],
    hard: [
      [m('lim') + '<sub class="m">x→2</sub> ' + m(f('x³ − 8', 'x² − 4')), m('3')],
      ['First principles: ' + m('(' + f('1', 'x') + ')′'), m('−' + f('1', 'x²'))],
      [m('(x' + sr('x² + 1') + ')′'), m(f('2x² + 1', sr('x² + 1')))],
      [m('(' + f('(x + 1)²', 'x − 1') + ')′'), m(f('(x + 1)(x − 3)', '(x − 1)²'))],
      ['Find ' + m('x') + ' where ' + m('y = (x² − 4)³') + ' has a horizontal tangent', m('x = 0, ±2')],
      ['Sphere: ' + m(f('dr', 'dt') + ' = 0.5') + ' cm/s; find ' + m(f('dV', 'dt')) + ' at ' + m('r = 4'), m('32π') + ' cm³/s'],
      ['Find ' + m("y″") + ' for ' + m('y = (2x + 1)⁴'), m('48(2x + 1)²')]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Task 1 is the rewrite. It is not optional.',
  homework: [
    'Rewrite in full every control-work question that lost a mark, with the “I lost this because …” sentence.',
    'Five problems from the section your knowledge column was heaviest in.',
    'Differentiate ' + m('y = x²' + sr('2x + 1')) + ' and factorise the answer.',
    'Learn the six standard derivatives and write them from memory.'
  ]
});

/* ============================== 7 ============================== */
G11_ALG.push({
  id: 'a11-07', stream: 'alg', grade: 11, quarter: 1, lessons: '15–16', hours: 2,
  title: 'The modulus function',
  subtitle: 'Cambridge insert: |x| as a graph, as an equation, as an inequality — and the reason it has no derivative at the corner.',
  uz: 'Algebra 11, §1.5 (extension)', uzPage: 'pp. 75–80',
  cam: 'P1 · 1.6 · P2 · 1.1–1.3', camPage: 'Pure Mathematics 2 & 3, pp. 2–14', wb: 'P2 Exercise 1A–1C',
  objectives: [
    'Define |x| piecewise and sketch y = |f(x)| and y = f(|x|).',
    'Solve equations containing a modulus, checking for false roots.',
    'Solve modulus inequalities by the two standard methods.',
    'Explain why |x| is not differentiable at zero.'
  ],
  terms: [
    ['Modulus (absolute value)', 'Modul', 'Модуль'],
    ['Piecewise definition', 'Bo‘lakli ta’rif', 'Кусочное определение'],
    ['Vertex of the modulus graph', 'Modul grafigi uchi', 'Вершина графика модуля'],
    ['Critical value', 'Kritik qiymat', 'Критическое значение'],
    ['False root', 'Yolg‘on ildiz', 'Посторонний корень'],
    ['Squaring both sides', 'Ikkala tomonni kvadratga ko‘tarish', 'Возведение в квадрат'],
    ['Distance on a number line', 'Sonlar o‘qidagi masofa', 'Расстояние на числовой прямой'],
    ['Corner (cusp)', 'Sinish nuqtasi', 'Угловая точка'],
    ['One-sided derivative', 'Bir tomonlama hosila', 'Односторонняя производная']
  ],
  timing: [[10, 'Three ways to read |x|'], [18, 'Graphs'], [22, 'Equations'], [22, 'Inequalities'], [16, 'The corner'], [12, 'Homework']],
  sections: [
    {
      h: 'Three ways to read the same symbol',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Reading</th><th>Statement</th></tr></thead>
      <tbody>
        <tr><td>piecewise</td><td class="m">|x| = x if x ≥ 0, −x if x &lt; 0</td></tr>
        <tr><td>algebraic</td><td class="m">|x| = ${sr('x²')}</td></tr>
        <tr><td>geometric</td><td>${m('|x|')} is the distance from ${m('x')} to ${m('0')}; ${m('|a − b|')} the distance between them</td></tr>
      </tbody></table></div>
      {{fig:modulusGraphV:The V. Its two arms have gradient −1 and +1, and they meet at a corner.}}
      <div class="keybox"><div class="klabel">The geometric reading solves the most</div>
      ${m('|x − 3| < 2')} says “${m('x')} is less than 2 away from 3”, so ${m('1 < x < 5')} — no algebra
      needed at all.</div>`
    },
    {
      h: 'Two different graphs',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Graph</th><th>Construction</th><th>Effect</th></tr></thead>
      <tbody>
        <tr><td class="m">y = |f(x)|</td><td>reflect the part below the ${m('x')}-axis upwards</td><td>never negative</td></tr>
        <tr><td class="m">y = f(|x|)</td><td>keep ${m('x ≥ 0')}, reflect it in the ${m('y')}-axis</td><td>always even</td></tr>
      </tbody></table></div>
      <p>For ${m('f(x) = x² − 4')}: ${m('|f(x)|')} has its dip between ${m('−2')} and ${m('2')} flipped
      into a hump; ${m('f(|x|)')} is unchanged, because ${m('f')} was already even.</p>
      <div class="warn"><span class="wl">They are different graphs</span>
      Take ${m('f(x) = x − 1')}. Then ${m('|f(x)|')} is a V with vertex ${m('(1, 0)')}, while
      ${m('f(|x|)')} is a V with vertex ${m('(0, −1)')} opening upwards. Read which one is asked for.</div>`
    },
    {
      h: 'Equations',
      html: `<p>Two methods, both valid:</p>
      <ol>
        <li><b>Cases.</b> ${m('|A| = B')} means ${m('A = B')} or ${m('A = −B')}, provided ${m('B ≥ 0')}.</li>
        <li><b>Squaring.</b> ${m('|A| = |B| ⟺ A² = B²')} — clean when both sides carry a modulus.</li>
      </ol>
      ${eq(m('|2x − 1| = 5  ⇒  2x − 1 = 5  or  2x − 1 = −5  ⇒  x = 3  or  x = −2'), true)}
      <div class="warn"><span class="wl">Always substitute back</span>
      ${m('|x − 1| = 2x − 4')} gives ${m('x = ' + f('5', '3'))} and ${m('x = 3')} by cases — but
      ${m(f('5', '3'))} makes the right-hand side negative, and a modulus never is. Only ${m('x = 3')}
      survives. Squaring is even more prone to this, because it destroys sign information.</div>`
    },
    {
      h: 'Inequalities, and the corner',
      html: `${eq(m('|A| < k  ⟺  −k < A < k') + '     ' + m('|A| > k  ⟺  A < −k  or  A > k'), true)}
      <p>The first is one double inequality; the second is genuinely two separate intervals and must be
      written with “or”.</p>
      <p><b>Why there is no derivative at the corner.</b> For ${m('f(x) = |x|')} at ${m('0')}:</p>
      ${eq(m(f('|0 + h| − |0|', 'h') + ' = ' + f('|h|', 'h') + ' = +1 (h > 0),  −1 (h < 0)'), true)}
      <p>The two one-sided limits are ${m('+1')} and ${m('−1')}. They disagree, so the limit does not
      exist and no tangent can be drawn. Everywhere else ${m('|x|')} is perfectly differentiable —
      the failure is at exactly one point.</p>`
    }
  ],
  examples: [
    {
      q: 'Solve ' + m('|3x + 2| = 8') + '.',
      steps: [
        [m('3x + 2 = 8 ⇒ x = 2'), ''],
        [m('3x + 2 = −8 ⇒ x = −' + f('10', '3')), ''],
        ['Right-hand side is positive, so both are valid.', '']
      ],
      ans: m('x = 2') + ' or ' + m('x = −' + f('10', '3'))
    },
    {
      q: 'Solve ' + m('|x − 4| < 3') + '.',
      steps: [
        [m('−3 < x − 4 < 3'), ''],
        [m('1 < x < 7'), ''],
        ['Geometrically: within 3 of 4.', '']
      ],
      ans: m('1 < x < 7')
    },
    {
      q: 'Solve ' + m('|2x − 1| = |x + 4|') + '.',
      steps: [
        ['Square both sides.', m('(2x − 1)² = (x + 4)²')],
        [m('4x² − 4x + 1 = x² + 8x + 16'), ''],
        [m('3x² − 12x − 15 = 0 ⇒ x² − 4x − 5 = 0'), ''],
        [m('x = 5') + ' or ' + m('x = −1') + '.', 'Both check.']
      ],
      ans: m('x = 5') + ' or ' + m('x = −1')
    }
  ],
  modelNote: 'Sketch the two sides as separate graphs and read the solutions off the intersections.',
  interactive: {
    type: 'graphTransform',
    title: 'The V and its transformations',
    hint: 'Shift and stretch the modulus graph and watch the vertex move.'
  },
  quiz: [
    { q: m('|−7|') + ' is:', a: [m('−7'), m('7'), m('0'), 'undefined'], c: 1, why: 'Distance from zero.' },
    { q: m('|x| < 4') + ' means:', a: [m('x < 4'), m('−4 < x < 4'), m('x > −4'), m('x < −4') + ' or ' + m('x > 4')], c: 1, why: 'Within 4 of zero.' },
    { q: m('|x| > 4') + ' means:', a: [m('−4 < x < 4'), m('x < −4') + ' or ' + m('x > 4'), m('x > 4'), m('x < 4')], c: 1, why: 'Two separate intervals.' },
    { q: m('|x|') + ' at ' + m('x = 0') + ' has:', a: ['derivative 0', 'derivative 1', 'no derivative', 'derivative −1'], c: 2, why: 'The one-sided limits differ.' },
    { q: m('|x − 5| = 2') + ' gives:', a: [m('x = 7'), m('x = 3'), m('x = 3') + ' or ' + m('7'), m('x = ±2')], c: 2, why: 'Two points 2 away from 5.' }
  ],
  practice: {
    easy: [
      [m('|−9|'), m('9')],
      [m('|0|'), m('0')],
      ['Solve ' + m('|x| = 6'), m('x = ±6')],
      ['Solve ' + m('|x − 2| = 5'), m('x = 7, −3')],
      ['Solve ' + m('|x| < 3'), m('−3 < x < 3')],
      ['Solve ' + m('|x| ≥ 2'), m('x ≤ −2') + ' or ' + m('x ≥ 2')],
      ['Vertex of ' + m('y = |x − 4|'), m('(4, 0)')]
    ],
    med: [
      ['Solve ' + m('|2x + 1| = 7'), m('x = 3, −4')],
      ['Solve ' + m('|3 − x| = 5'), m('x = −2, 8')],
      ['Solve ' + m('|x + 1| < 4'), m('−5 < x < 3')],
      ['Solve ' + m('|2x − 3| > 5'), m('x < −1') + ' or ' + m('x > 4')],
      ['Solve ' + m('|x − 1| = |x + 3|'), m('x = −1')],
      ['Sketch ' + m('y = |x² − 4|') + ' — where is the hump?', 'between ' + m('−2') + ' and ' + m('2')],
      ['Vertex of ' + m('y = |2x − 6|'), m('(3, 0)')]
    ],
    hard: [
      ['Solve ' + m('|x − 1| = 2x − 4'), m('x = 3') + ' only'],
      ['Solve ' + m('|2x − 1| = |x + 4|'), m('x = 5, −1')],
      ['Solve ' + m('|x² − 4| = 3'), m('x = ±1, ±' + sr('7'))],
      ['Solve ' + m('|x − 2| + |x + 1| = 5'), m('x = −2') + ' or ' + m('x = 3')],
      ['Solve ' + m('|x| + x = 6'), m('x = 3')],
      ['Solve ' + m('|x − 3| < |x|'), m('x > 1.5')],
      ['Show ' + m('|x|') + ' has one-sided derivatives ' + m('±1') + ' at 0', m(f('|h|', 'h')) + ' is ' + m('+1') + ' then ' + m('−1')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Substitute every solution back. Modulus equations manufacture false roots.',
  homework: [
    'Solve ' + m('|4x − 5| = 11') + '.',
    'Solve ' + m('|x + 2| ≤ 6') + ' and ' + m('|3x − 1| > 8') + '.',
    'Solve ' + m('|x − 3| = |2x + 1|') + '.',
    'Sketch ' + m('y = |x² − 9|') + ' and ' + m('y = |x| − 3') + ' on separate axes.',
    'Explain, with the two one-sided quotients written out, why ' + m('|x − 5|') + ' has no derivative at ' + m('x = 5') + '.'
  ]
});

/* ============================== 8 ============================== */
G11_ALG.push({
  id: 'a11-08', stream: 'alg', grade: 11, quarter: 1, lessons: '17–18', hours: 2,
  title: 'The equations of the tangent and the normal',
  subtitle: 'Two lines at one point of a curve, from one derivative and one gradient relation.',
  uz: 'Algebra 11, §1.6', uzPage: 'pp. 81–90',
  cam: 'P1 · 7.6', camPage: 'Pure Mathematics 1, pp. 159–167', wb: 'P1 Exercise 7F',
  objectives: [
    'Write the equation of the tangent at a given point of a curve.',
    'Write the equation of the normal at that point.',
    'Find the point where a tangent has a given gradient.',
    'Find where a tangent meets the axes or the curve again.'
  ],
  terms: [
    ['Tangent', 'Urinma', 'Касательная'],
    ['Normal', 'Normal', 'Нормаль'],
    ['Point of tangency', 'Urinish nuqtasi', 'Точка касания'],
    ['Gradient of a tangent', 'Urinma burchak koeffitsienti', 'Угловой коэффициент касательной'],
    ['Perpendicular gradients', 'Perpendikulyar koeffitsientlar', 'Взаимно перпендикулярные'],
    ['Point-gradient form', 'Nuqta-koeffitsient shakli', 'Уравнение через точку и угловой коэффициент'],
    ['Horizontal tangent', 'Gorizontal urinma', 'Горизонтальная касательная'],
    ['Intercept', 'Kesim', 'Отрезок на оси']
  ],
  timing: [[10, 'The three numbers you need'], [20, 'The tangent'], [20, 'The normal'], [22, 'Working backwards'], [16, 'Practice'], [12, 'Homework']],
  sections: [
    {
      h: 'Three numbers, then one formula',
      html: `<div class="keybox"><div class="klabel">Every tangent question needs the same three</div>
      ${m('x₀')} — where · ${m('y₀ = f(x₀)')} — the point · ${m("m = f′(x₀)")} — the gradient.
      Then the point-gradient form finishes it:</div>
      ${eq(m('y − y₀ = m(x − x₀)'), true)}
      {{fig:tangentNormalFig:The tangent touches; the normal crosses at a right angle. Both pass through the same point.}}
      <div class="warn"><span class="wl">Differentiate before substituting</span>
      Substituting ${m('x₀')} into ${m('f')} first leaves a constant, whose derivative is zero.
      Find ${m("f′(x)")} in full, and only then put the number in.</div>`
    },
    {
      h: 'The tangent',
      html: `<p><b>Example.</b> Find the tangent to ${m('y = x² − 3x')} at ${m('x = 2')}.</p>
      <div class="tablewrap"><table>
      <tbody>
        <tr><td>the point</td><td class="m">y = 4 − 6 = −2, so (2, −2)</td></tr>
        <tr><td>the gradient</td><td class="m">y′ = 2x − 3, so m = 1</td></tr>
        <tr><td>the line</td><td class="m">y + 2 = 1(x − 2)</td></tr>
        <tr><td>simplified</td><td class="m">y = x − 4</td></tr>
      </tbody></table></div>
      <p>A <b>horizontal</b> tangent occurs where ${m("f′(x) = 0")}; a <b>vertical</b> one where
      ${m("f′")} fails to exist by becoming unbounded.</p>`
    },
    {
      h: 'The normal',
      html: `<p>The <b>normal</b> is the line through the same point, perpendicular to the tangent:</p>
      ${eq(m('m_tangent · m_normal = −1  ⇒  m_normal = −' + f('1', "f′(x₀)")), true)}
      <p>For the same curve at ${m('(2, −2)')}: the tangent gradient is ${m('1')}, so the normal
      gradient is ${m('−1')} and the normal is ${m('y = −x')}.</p>
      <div class="warn"><span class="wl">Two special cases</span>
      If ${m("f′(x₀) = 0")} the tangent is horizontal and the normal is <b>vertical</b>:
      ${m('x = x₀')}, which has no gradient at all. Writing ${m('−' + f('1', '0'))} is not an answer.</div>`
    },
    {
      h: 'Working backwards',
      html: `<p>Most examination questions give the gradient and ask for the point:</p>
      <p><b>Example.</b> Where does ${m('y = x³ − 4x')} have a tangent parallel to ${m('y = 8x + 1')}?</p>
      ${eq(m("y′ = 3x² − 4 = 8  ⇒  x² = 4  ⇒  x = ±2"), false)}
      <p>Two points: ${m('(2, 0)')} and ${m('(−2, 0)')}. Two tangents: ${m('y = 8x − 16')} and
      ${m('y = 8x + 16')}.</p>
      <div class="keybox"><div class="klabel">Parallel and perpendicular</div>
      Parallel to ${m('y = mx + c')} means ${m("f′(x) = m")}. Perpendicular to it means
      ${m("f′(x) = −" + f('1', 'm'))}. Both reduce to solving one equation.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the tangent and the normal to ' + m('y = x³ − 2x') + ' at ' + m('x = 1') + '.',
      steps: [
        [m('y(1) = −1'), 'Point ' + m('(1, −1)') + '.'],
        [m("y′ = 3x² − 2, y′(1) = 1"), ''],
        ['Tangent: ' + m('y + 1 = 1(x − 1)') + '.', m('y = x − 2')],
        ['Normal: gradient ' + m('−1') + '.', m('y = −x')]
      ],
      ans: 'tangent ' + m('y = x − 2') + ', normal ' + m('y = −x')
    },
    {
      q: 'Find the tangent to ' + m('y = ' + f('4', 'x')) + ' at ' + m('x = 2') + ', and where it meets the axes.',
      steps: [
        [m('y(2) = 2'), 'Point ' + m('(2, 2)') + '.'],
        [m("y′ = −" + f('4', 'x²')) + ', ' + m("y′(2) = −1"), ''],
        ['Tangent ' + m('y = −x + 4') + '.', ''],
        ['Axes: ' + m('(4, 0)') + ' and ' + m('(0, 4)') + '.', '']
      ],
      ans: m('y = 4 − x') + '; meets the axes at ' + m('(4, 0)') + ' and ' + m('(0, 4)')
    },
    {
      q: 'The tangent to ' + m('y = x²') + ' at ' + m('x = a') + ' passes through ' + m('(0, −4)') + '. Find ' + m('a') + '.',
      steps: [
        ['Point ' + m('(a, a²)') + ', gradient ' + m('2a') + '.', ''],
        [m('y − a² = 2a(x − a)'), ''],
        ['At ' + m('(0, −4)') + ': ' + m('−4 − a² = −2a²') + '.', ''],
        [m('a² = 4 ⇒ a = ±2'), '']
      ],
      ans: m('a = ±2')
    }
  ],
  modelNote: 'Draw both lines on one sketch — students who see only the tangent forget the normal is perpendicular.',
  interactive: {
    type: 'derivative',
    title: 'Tangent at a point',
    hint: 'Move x and watch the tangent equation update.'
  },
  quiz: [
    { q: 'The gradient of the tangent at ' + m('x₀') + ' is:', a: [m('f(x₀)'), m("f′(x₀)"), m('−' + f('1', "f′(x₀)")), m('0')], c: 1, why: 'That is what the derivative measures.' },
    { q: 'The normal gradient is:', a: [m("f′(x₀)"), m('−' + f('1', "f′(x₀)")), m(f('1', "f′(x₀)")), m('0')], c: 1, why: 'Perpendicular gradients multiply to ' + m('−1') + '.' },
    { q: 'A horizontal tangent occurs where:', a: [m("f′ = 1"), m("f′ = 0"), m('f = 0'), m("f′") + ' is undefined'], c: 1, why: 'Zero gradient.' },
    { q: 'If ' + m("f′(x₀) = 0") + ' the normal is:', a: ['horizontal', 'vertical', m('y = 0'), 'undefined'], c: 1, why: m('x = x₀') + '.' },
    { q: 'Tangent to ' + m('y = x²') + ' at ' + m('x = 3') + ':', a: [m('y = 6x − 9'), m('y = 6x + 9'), m('y = 3x'), m('y = 9x − 6')], c: 0, why: 'Point ' + m('(3, 9)') + ', gradient ' + m('6') + '.' }
  ],
  practice: {
    easy: [
      ['Tangent to ' + m('y = x²') + ' at ' + m('x = 1'), m('y = 2x − 1')],
      ['Normal to ' + m('y = x²') + ' at ' + m('x = 1'), m('y = −0.5x + 1.5')],
      ['Tangent to ' + m('y = 3x + 2') + ' at ' + m('x = 0'), m('y = 3x + 2')],
      ['Gradient of the tangent to ' + m('y = x³') + ' at ' + m('x = 2'), m('12')],
      ['Where is the tangent to ' + m('y = x² − 6x') + ' horizontal?', m('x = 3')],
      ['Tangent to ' + m('y = x²') + ' at ' + m('x = 0'), m('y = 0')],
      ['Normal to ' + m('y = x²') + ' at ' + m('x = 0'), m('x = 0')]
    ],
    med: [
      ['Tangent to ' + m('y = x³ − 2x') + ' at ' + m('x = 1'), m('y = x − 2')],
      ['Normal to the same at the same point', m('y = −x')],
      ['Tangent to ' + m('y = ' + f('4', 'x')) + ' at ' + m('x = 2'), m('y = 4 − x')],
      ['Tangent to ' + m('y = ' + sr('x')) + ' at ' + m('x = 4'), m('y = ' + f('x', '4') + ' + 1')],
      ['Where has ' + m('y = x³ − 4x') + ' a tangent parallel to ' + m('y = 8x'), m('x = ±2')],
      ['Where has ' + m('y = x² − 4x') + ' a tangent of gradient ' + m('2'), m('x = 3')],
      ['Tangent to ' + m('y = x² − 5x + 6') + ' at its ' + m('x') + '-intercepts', m('y = −x + 2') + ' and ' + m('y = x − 3')]
    ],
    hard: [
      ['Tangent to ' + m('y = x²') + ' through ' + m('(0, −9)'), m('y = ±6x − 9')],
      ['Normal to ' + m('y = x²') + ' at ' + m('x = 1') + ' meets the curve again at', m('x = −1.5')],
      ['Find ' + m('k') + ' so ' + m('y = kx') + ' is tangent to ' + m('y = x² + 4'), m('k = ±4')],
      ['Tangent to ' + m('y = ' + f('1', 'x')) + ' at ' + m('x = a') + '; show the axes cut a triangle of constant area', 'Area ' + m('2') + ' always'],
      ['Where do the tangents to ' + m('y = x³') + ' at ' + m('x = 1') + ' and ' + m('x = −1') + ' meet?', m('(0, −2)')],
      ['Normal to ' + m('y = ' + sr('x')) + ' at ' + m('x = 1') + ': find its equation', m('y = −2x + 3')],
      ['Two curves ' + m('y = x²') + ' and ' + m('y = ' + f('1', 'x')) + ' meet at ' + m('x = 1') + '. Find the angle between them', m('≈ 71.6°')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Give both lines in the form ' + m('y = mx + c') + ', simplified.',
  homework: [
    'Find the tangent and the normal to ' + m('y = x² − 4x + 1') + ' at ' + m('x = 3') + '.',
    'Find the tangent to ' + m('y = ' + f('6', 'x')) + ' at ' + m('x = 3') + ' and where it meets the axes.',
    'Find the points on ' + m('y = x³ − 3x²') + ' where the tangent is horizontal.',
    'Find where ' + m('y = x³ + x') + ' has a tangent parallel to ' + m('y = 4x − 7') + '.',
    'Find the tangent to ' + m('y = x²') + ' that passes through ' + m('(0, −1)') + '.'
  ]
});

/* ============================== 9 ============================== */
G11_ALG.push({
  id: 'a11-09', stream: 'alg', grade: 11, quarter: 1, lessons: '19–22', hours: 4,
  title: 'Investigating a function with the derivative',
  subtitle: 'Four lessons on the full procedure — sign of the derivative, stationary points, their nature, and the sketch that results.',
  uz: 'Algebra 11, §1.7', uzPage: 'pp. 91–110',
  cam: 'P1 · 7.7–7.8', camPage: 'Pure Mathematics 1, pp. 168–185', wb: 'P1 Exercise 7G, 7H',
  objectives: [
    'Use the sign of f′ to find intervals of increase and decrease.',
    'Find stationary points by solving f′(x) = 0.',
    'Classify each stationary point by the sign change or by f″.',
    'Sketch a curve using intercepts, stationary points and behaviour at the ends.'
  ],
  terms: [
    ['Increasing function', 'O‘suvchi funksiya', 'Возрастающая функция'],
    ['Decreasing function', 'Kamayuvchi funksiya', 'Убывающая функция'],
    ['Stationary point', 'Statsionar nuqta', 'Стационарная точка'],
    ['Critical point', 'Kritik nuqta', 'Критическая точка'],
    ['Local maximum', 'Lokal maksimum', 'Локальный максимум'],
    ['Local minimum', 'Lokal minimum', 'Локальный минимум'],
    ['Point of inflection', 'Egilish nuqtasi', 'Точка перегиба'],
    ['Second derivative', 'Ikkinchi hosila', 'Вторая производная'],
    ['Sign chart', 'Ishoralar jadvali', 'Таблица знаков'],
    ['Curve sketching', 'Grafik chizish', 'Построение графика']
  ],
  timing: [[16, 'The sign of the derivative'], [24, 'Stationary points'], [30, 'Classifying them'], [30, 'The second derivative test'], [40, 'Full sketches'], [40, 'Practice and homework']],
  sections: [
    {
      h: 'The sign of the derivative',
      html: `<div class="keybox"><div class="klabel">The link that makes calculus useful</div>
      ${m("f′(x) > 0")} on an interval ⟹ ${m('f')} is <b>increasing</b> there.
      ${m("f′(x) < 0")} ⟹ ${m('f')} is <b>decreasing</b>. ${m("f′(x) = 0")} ⟹ the tangent is
      horizontal — a <b>stationary point</b>.</div>
      {{fig:derivativeSign:Where the derivative is above the axis, the curve climbs. Where it is below, the curve falls.}}
      <p>So the shape of ${m('f')} is read entirely off the <b>sign</b> of ${m("f′")}, and the sign of
      ${m("f′")} is read off its factorised form.</p>`
    },
    {
      h: 'Finding and tabulating',
      html: `<p><b>Example.</b> ${m('f(x) = x³ − 3x² − 9x + 5')}.</p>
      ${eq(m("f′(x) = 3x² − 6x − 9 = 3(x − 3)(x + 1)"), true)}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">x</th><th class="m">&lt; −1</th><th class="m">−1</th><th class="m">−1 to 3</th><th class="m">3</th><th class="m">&gt; 3</th></tr></thead>
      <tbody>
        <tr><td class="m">f′</td><td class="m">+</td><td class="m">0</td><td class="m">−</td><td class="m">0</td><td class="m">+</td></tr>
        <tr><td class="m">f</td><td>↗</td><td>max</td><td>↘</td><td>min</td><td>↗</td></tr>
      </tbody></table></div>
      <p>Local maximum at ${m('(−1, 10)')}, local minimum at ${m('(3, −22)')}.</p>
      <div class="warn"><span class="wl">Always factorise ${m("f′")}</span>
      An unfactorised quadratic hides its sign. The factorised form gives the roots and the sign chart
      in one step.</div>`
    },
    {
      h: 'Classifying: two tests',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Test</th><th>Maximum</th><th>Minimum</th><th>Inconclusive when</th></tr></thead>
      <tbody>
        <tr><td>sign of ${m("f′")}</td><td>${m('+')} then ${m('−')}</td><td>${m('−')} then ${m('+')}</td><td>never</td></tr>
        <tr><td>${m("f″(x₀)")}</td><td>${m("f″ < 0")}</td><td>${m("f″ > 0")}</td><td>${m("f″ = 0")}</td></tr>
      </tbody></table></div>
      {{fig:stationaryTypes:A maximum, a minimum and a stationary point of inflection. All three have a horizontal tangent.}}
      <div class="warn"><span class="wl">${m("f″(x₀) = 0")} proves nothing</span>
      ${m('y = x⁴')} has ${m("f″(0) = 0")} and a minimum; ${m('y = x³')} has ${m("f″(0) = 0")} and an
      inflection. When the second-derivative test is silent, go back to the sign of ${m("f′")}.</div>
      <p>A <b>stationary point of inflection</b> has ${m("f′ = 0")} but <b>no</b> sign change: the curve
      flattens and carries on in the same direction, as ${m('y = x³')} does at the origin.</p>`
    },
    {
      h: 'The full sketch',
      html: `<div class="keybox"><div class="klabel">Six steps, in order</div>
      <b>1</b> domain · <b>2</b> intercepts (${m('x = 0')}, and ${m('f(x) = 0')} if it factorises) ·
      <b>3</b> ${m("f′")}, factorised · <b>4</b> stationary points and their nature ·
      <b>5</b> behaviour as ${m('x → ±∞')} · <b>6</b> draw, plotting the stationary points first.</div>
      <p>For a cubic with a positive leading coefficient, step 5 says the curve comes up from
      ${m('−∞')} on the left and goes to ${m('+∞')} on the right. Together with the two stationary
      points, the shape is completely determined.</p>
      <p><b>Second derivative and concavity.</b> ${m("f″ > 0")} means the curve bends upwards (concave up,
      holding water); ${m("f″ < 0")} means it bends downwards. Where ${m("f″")} changes sign there is a
      <b>point of inflection</b> — which need not be stationary.</p>`
    }
  ],
  examples: [
    {
      q: 'Investigate ' + m('f(x) = x³ − 12x + 5') + ' fully.',
      steps: [
        [m("f′ = 3x² − 12 = 3(x − 2)(x + 2)"), ''],
        ['Stationary at ' + m('x = ±2') + '.', m('f(−2) = 21') + ', ' + m('f(2) = −11')],
        [m("f″ = 6x"), m("f″(−2) = −12 < 0") + ' max; ' + m("f″(2) = 12 > 0") + ' min'],
        ['Increasing on ' + m('x < −2') + ' and ' + m('x > 2') + '.', 'Decreasing between.']
      ],
      ans: 'max ' + m('(−2, 21)') + ', min ' + m('(2, −11)')
    },
    {
      q: 'Show ' + m('f(x) = x³ + 3x') + ' has no stationary points.',
      steps: [
        [m("f′ = 3x² + 3"), ''],
        [m('3x² + 3 = 0 ⇒ x² = −1'), 'No real solution.'],
        [m("f′ > 0") + ' everywhere.', '']
      ],
      ans: 'None — the function increases on all of ' + m('ℝ')
    },
    {
      q: 'Classify the stationary point of ' + m('f(x) = x⁴ − 4x³') + ' at ' + m('x = 0') + '.',
      steps: [
        [m("f′ = 4x³ − 12x² = 4x²(x − 3)"), 'Stationary at ' + m('0') + ' and ' + m('3') + '.'],
        [m("f″ = 12x² − 24x") + ', ' + m("f″(0) = 0"), 'Test inconclusive.'],
        ['Sign of ' + m("f′") + ' near 0: ' + m('4x²') + ' ≥ 0, ' + m('(x − 3) < 0') + '.', 'Negative on both sides.'],
        ['No sign change.', '']
      ],
      ans: 'A stationary point of inflection at ' + m('(0, 0)')
    }
  ],
  modelNote: 'Show the sign chart and the sketch side by side — every row of the table is a piece of the curve.',
  interactive: {
    type: 'graphTransform',
    title: 'Shape from the derivative',
    hint: 'Change the coefficients and watch the stationary points move.'
  },
  quiz: [
    { q: m("f′(x) > 0") + ' means the function is:', a: ['positive', 'increasing', 'concave up', 'stationary'], c: 1, why: 'Positive gradient.' },
    { q: 'A stationary point has:', a: [m('f = 0'), m("f′ = 0"), m("f″ = 0"), m("f′ > 0")], c: 1, why: 'Horizontal tangent.' },
    { q: m("f′ = 0") + ' and ' + m("f″ < 0") + ' gives a:', a: ['minimum', 'maximum', 'inflection', 'root'], c: 1, why: 'Curve bends downwards.' },
    { q: 'If ' + m("f″(x₀) = 0") + ' the point is:', a: ['a maximum', 'a minimum', 'an inflection', 'not decided by this test'], c: 3, why: 'Go back to the sign of ' + m("f′") + '.' },
    { q: 'Stationary points of ' + m('y = x³ − 12x') + ' are at:', a: [m('x = 0'), m('x = ±2'), m('x = ±4'), m('x = 12')], c: 1, why: m('3x² = 12') + '.' },
    { q: m('y = x³') + ' at ' + m('x = 0') + ' has:', a: ['a maximum', 'a minimum', 'a stationary inflection', 'no stationary point'], c: 2, why: m("f′ = 0") + ' but no sign change.' }
  ],
  practice: {
    easy: [
      ['Stationary points of ' + m('y = x² − 6x'), m('x = 3')],
      ['Classify it', 'minimum'],
      ['Stationary points of ' + m('y = 4x − x²'), m('x = 2') + ', maximum'],
      ['Is ' + m('y = 3x + 1') + ' increasing?', 'yes, everywhere'],
      ['Stationary points of ' + m('y = x³'), m('x = 0')],
      ['Classify it', 'stationary inflection'],
      [m("f″") + ' for ' + m('y = x³ − 3x'), m('6x')]
    ],
    med: [
      ['Investigate ' + m('y = x³ − 3x'), 'max ' + m('(−1, 2)') + ', min ' + m('(1, −2)')],
      ['Investigate ' + m('y = x³ − 12x + 5'), 'max ' + m('(−2, 21)') + ', min ' + m('(2, −11)')],
      ['Investigate ' + m('y = 2x³ − 3x² − 12x'), 'max ' + m('(−1, 7)') + ', min ' + m('(2, −20)')],
      ['Where is ' + m('y = x⁴ − 8x²') + ' decreasing?', m('x < −2') + ' and ' + m('0 < x < 2')],
      ['Stationary points of ' + m('y = x⁴ − 8x²'), m('x = 0, ±2')],
      ['Nature of each', m('0') + ' max; ' + m('±2') + ' minima'],
      ['Point of inflection of ' + m('y = x³ − 6x²'), m('(2, −16)')]
    ],
    hard: [
      ['Investigate ' + m('y = ' + f('x', 'x² + 1')), 'max ' + m('(1, 0.5)') + ', min ' + m('(−1, −0.5)')],
      ['Investigate ' + m('y = x + ' + f('1', 'x')), 'max ' + m('(−1, −2)') + ', min ' + m('(1, 2)')],
      ['Find ' + m('a') + ' so ' + m('y = x³ + ax') + ' has no stationary point', m('a > 0')],
      ['Find ' + m('a, b') + ' so ' + m('y = x³ + ax² + b') + ' has a stationary point at ' + m('(2, 3)'), m('a = −3, b = 7')],
      ['Classify the stationary point of ' + m('y = x⁴') + ' at 0 and explain why ' + m("f″") + ' fails', 'Minimum; ' + m("f″(0) = 0")],
      ['Show ' + m('y = x³ + x') + ' is increasing everywhere', m("f′ = 3x² + 1 > 0")],
      ['Sketch ' + m('y = x³ − 3x² + 4') + ' fully', 'max ' + m('(0, 4)') + ', min ' + m('(2, 0)') + ', root at ' + m('x = −1')]
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Every investigation needs the sign chart, not just the answers.',
  homework: [
    'Investigate ' + m('y = x³ − 6x² + 9x') + ' fully and sketch it.',
    'Investigate ' + m('y = x⁴ − 2x²') + ' fully and sketch it.',
    'Find the intervals on which ' + m('y = 2x³ + 3x² − 36x') + ' increases.',
    'Find and classify the stationary points of ' + m('y = x + ' + f('4', 'x')) + '.',
    'Find ' + m('a') + ' and ' + m('b') + ' so that ' + m('y = x³ + ax² + bx') + ' has stationary points at ' + m('x = 1') + ' and ' + m('x = 3') + '.',
    'Explain, with two examples, why ' + m("f″(x₀) = 0") + ' does not classify a stationary point.'
  ]
});

/* ============================== 10 ============================== */
G11_ALG.push({
  id: 'a11-10', stream: 'alg', grade: 11, quarter: 1, lessons: '23–25', hours: 3,
  title: 'Extremum problems',
  subtitle: 'The largest volume, the least cost, the shortest path — modelling first, then one derivative.',
  uz: 'Algebra 11, §1.8', uzPage: 'pp. 111–126',
  cam: 'P1 · 7.8', camPage: 'Pure Mathematics 1, pp. 178–190', wb: 'P1 Exercise 7H',
  objectives: [
    'Express the quantity to be optimised as a function of one variable.',
    'Use a constraint to eliminate the second variable.',
    'Find the extremum and justify that it is a maximum or a minimum.',
    'Interpret the answer, checking it against the physical domain.'
  ],
  terms: [
    ['Extremum', 'Ekstremum', 'Экстремум'],
    ['Greatest value', 'Eng katta qiymat', 'Наибольшее значение'],
    ['Least value', 'Eng kichik qiymat', 'Наименьшее значение'],
    ['Constraint', 'Cheklov', 'Ограничение'],
    ['Objective function', 'Maqsad funksiyasi', 'Целевая функция'],
    ['Feasible domain', 'Ruxsat etilgan soha', 'Допустимая область'],
    ['Endpoint value', 'Chegaraviy qiymat', 'Значение на конце'],
    ['Optimisation', 'Optimallashtirish', 'Оптимизация'],
    ['Justification', 'Asoslash', 'Обоснование']
  ],
  timing: [[14, 'The five-step method'], [26, 'Geometric problems'], [30, 'Boxes and cans'], [26, 'Cost and time problems'], [40, 'Practice'], [14, 'Homework']],
  sections: [
    {
      h: 'Five steps',
      html: `<div class="keybox"><div class="klabel">The method, every time</div>
      <b>1</b> Name the variables and draw. <b>2</b> Write the quantity to optimise. <b>3</b> Use the
      constraint to reduce it to <b>one</b> variable, and state the feasible domain.
      <b>4</b> Differentiate, set to zero, solve. <b>5</b> Justify max or min, then answer in words
      with units.</div>
      <div class="warn"><span class="wl">Step 3 is where marks are lost</span>
      An expression in two variables cannot be differentiated. The constraint — the fixed perimeter,
      the fixed volume, the fixed length of wire — exists precisely to eliminate one of them.</div>`
    },
    {
      h: 'The open box',
      html: `<p><b>Problem.</b> A ${m('24 × 24')} cm square of card has equal squares of side ${m('x')}
      cut from its corners; the flaps fold up. Maximise the volume.</p>
      {{fig:optimBox:The card, the four corner squares removed, and the box that results.}}
      ${eq(m('V(x) = x(24 − 2x)² ,   0 < x < 12'), true)}
      ${eq(m("V′(x) = (24 − 2x)² + x · 2(24 − 2x)(−2) = (24 − 2x)(24 − 6x)"), false)}
      <p>${m("V′ = 0")} at ${m('x = 12')} (rejected — outside the domain) and ${m('x = 4')}.
      Sign of ${m("V′")}: positive before 4, negative after, so ${m('x = 4')} is a maximum.</p>
      ${eq(m('V(4) = 4 × 16² = 1024 cm³'), true)}`
    },
    {
      h: 'The cheapest can',
      html: `<p><b>Problem.</b> A closed cylindrical can holds ${m('500')} cm³. Minimise the surface
      area.</p>
      ${eq(m('V = πr²h = 500 ⇒ h = ' + f('500', 'πr²')), false)}
      ${eq(m('S = 2πr² + 2πrh = 2πr² + ' + f('1000', 'r')), true)}
      ${eq(m("S′ = 4πr − " + f('1000', 'r²') + ' = 0  ⇒  r³ = ' + f('250', 'π') + '  ⇒  r ≈ 4.30 cm'), false)}
      <p>Then ${m('h ≈ 8.60')} cm — exactly twice the radius. ${m("S″ = 4π + " + f('2000', 'r³') + " > 0")},
      so it is a minimum. ${m('S ≈ 349')} cm².</p>
      <div class="keybox"><div class="klabel">The result is worth remembering</div>
      For a closed cylinder of fixed volume, the cheapest shape always has ${m('h = 2r')} — the height
      equals the diameter. Real cans are taller because the ends cost more per cm² than the wall.</div>`
    },
    {
      h: 'Justifying, and the endpoints',
      html: `<p>A stationary point is not automatically the answer. Three ways to justify:</p>
      <ol>
        <li>the sign of ${m("f′")} either side — always works;</li>
        <li>${m("f″")} at the point — quick, but silent when it is zero;</li>
        <li>compare with the <b>endpoint</b> values, when the domain is a closed interval.</li>
      </ol>
      <div class="warn"><span class="wl">On a closed interval, check the ends</span>
      The greatest value of a continuous function on ${m('[a, b]')} occurs at a stationary point
      <b>or at an endpoint</b>. A problem asking for the maximum on ${m('0 ≤ x ≤ 5')} needs
      ${m('f(0)')} and ${m('f(5)')} computed as well.</div>`
    }
  ],
  examples: [
    {
      q: 'A farmer has 100 m of fence for a rectangular pen against a straight wall. Maximise the area.',
      steps: [
        ['Sides ' + m('x, x, 100 − 2x') + '.', m('0 < x < 50')],
        [m('A = x(100 − 2x) = 100x − 2x²'), ''],
        [m("A′ = 100 − 4x = 0 ⇒ x = 25"), ''],
        [m("A″ = −4 < 0"), 'Maximum.']
      ],
      ans: m('1250 m²') + ', a 25 m by 50 m pen'
    },
    {
      q: 'Find the point on ' + m('y = x²') + ' closest to ' + m('(0, 3)') + '.',
      steps: [
        [m('D² = x² + (x² − 3)²'), 'Minimise ' + m('D²') + ', not ' + m('D') + '.'],
        [m('= x⁴ − 5x² + 9'), ''],
        [m("(D²)′ = 4x³ − 10x = 2x(2x² − 5) = 0"), ''],
        [m('x = 0') + ' or ' + m('x = ±' + sr('2.5')), m('x = 0') + ' gives ' + m('D = 3') + '; the others ' + m('D ≈ 1.66')]
      ],
      ans: m('(±' + sr('2.5') + ', 2.5)') + ', at distance ' + m(f(sr('11'), '2')) + ' ≈ ' + m('1.66')
    },
    {
      q: 'Find the greatest value of ' + m('f(x) = x³ − 3x') + ' on ' + m('[0, 3]') + '.',
      steps: [
        [m("f′ = 3x² − 3 = 0 ⇒ x = ±1"), 'Only ' + m('x = 1') + ' is in range.'],
        [m('f(1) = −2'), ''],
        [m('f(0) = 0') + ', ' + m('f(3) = 18'), 'Endpoints.'],
        ['The largest is at an endpoint.', '']
      ],
      ans: m('18') + ', at ' + m('x = 3')
    }
  ],
  modelNote: 'Slide x and watch the volume of the box rise and fall; mark the maximum.',
  interactive: {
    type: 'optimise',
    title: 'The open box',
    hint: 'Slide the corner size and read the volume. The maximum is marked.'
  },
  quiz: [
    { q: 'The first thing to do in an extremum problem:', a: ['differentiate', 'express the quantity in one variable', 'guess', 'find ' + m("f″")], c: 1, why: 'You cannot differentiate two variables.' },
    { q: 'The constraint is used to:', a: ['check the answer', 'eliminate a variable', 'find the domain only', 'nothing'], c: 1, why: 'It links the two variables.' },
    { q: 'On a closed interval the greatest value can occur:', a: ['only at a stationary point', 'at a stationary point or an endpoint', 'only at an endpoint', 'anywhere'], c: 1, why: 'Endpoints must be checked.' },
    { q: 'The cheapest closed cylinder of fixed volume has:', a: [m('h = r'), m('h = 2r'), m('h = 4r'), m('r = 2h')], c: 1, why: 'Height equals diameter.' },
    { q: 'To minimise a distance it is easier to minimise:', a: ['the distance', 'its square', 'its reciprocal', 'its logarithm'], c: 1, why: 'It removes the root and has the same minimiser.' }
  ],
  practice: {
    easy: [
      ['100 m of fence, rectangular field. Maximum area', m('625 m²')],
      ['Two numbers add to 20. Maximise the product', m('100')],
      ['Two numbers add to 16. Minimise the sum of squares', m('128')],
      ['Maximum of ' + m('y = 8x − x²'), m('16') + ' at ' + m('x = 4')],
      ['Minimum of ' + m('y = x² − 10x'), m('−25') + ' at ' + m('x = 5')],
      ['Domain for a corner cut ' + m('x') + ' from a ' + m('20 × 20') + ' card', m('0 < x < 10')],
      ['Justify a maximum using ' + m("f″"), m("f″ < 0")]
    ],
    med: [
      ['80 m of fence against a wall. Maximum area', m('800 m²')],
      [m('30 × 30') + ' card, corner squares cut. Maximum volume', m('2000 cm³') + ' at ' + m('x = 5')],
      ['Closed cylinder, volume ' + m('1000') + ' cm³. Minimum surface area', m('≈ 554 cm²')],
      ['Open cylinder (no lid), volume ' + m('500') + '. Optimal radius', m('≈ 5.42 cm')],
      ['Greatest value of ' + m('y = x³ − 3x²') + ' on ' + m('[0, 4]'), m('16') + ' at ' + m('x = 4')],
      ['Least value of ' + m('y = x + ' + f('9', 'x')) + ' for ' + m('x > 0'), m('6') + ' at ' + m('x = 3')],
      ['Rectangle of perimeter 40 with maximum area', m('100') + ', a 10-square']
    ],
    hard: [
      ['A rectangle inscribed in a circle of radius 5. Maximise the area', m('50') + ', a square of side ' + m('5' + sr('2'))],
      ['Point on ' + m('y = x²') + ' closest to ' + m('(0, 3)'), m('(±' + sr('2.5') + ', 2.5)')],
      ['A cone of slant height 6. Maximise its volume', m('r = 2' + sr('6')) + ', ' + m('V = 16π' + sr('3'))],
      ['Wire of 60 cm cut into a square and a circle. Minimise the total area', 'Square ' + m('≈ 33.6') + ' cm of wire'],
      ['Cheapest open-topped box of square base and volume ' + m('32') + ' cm³', 'base 4 cm, height 2 cm'],
      ['A window is a rectangle topped by a semicircle, perimeter 10 m. Maximise the area', m('r = ' + f('10', 'π + 4')) + ' ≈ ' + m('1.40 m')],
      ['A man rows at 4 km/h and walks at 5 km/h from a point 3 km offshore to a point 8 km along. Minimise the time', 'Land ' + m('4') + ' km along the shore']
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Every answer needs the justification and the units.',
  homework: [
    '120 m of fence, rectangular pen against a wall. Find the greatest area.',
    'A ' + m('40 × 40') + ' cm card: corner squares are cut and the flaps folded. Find the greatest volume.',
    'A closed cylindrical can holds 750 cm³. Find the radius that minimises the surface area, and check ' + m('h = 2r') + '.',
    'Find the greatest and least values of ' + m('y = x³ − 6x² + 9x') + ' on ' + m('[0, 4]') + '.',
    'Find the point on ' + m('y = ' + sr('x')) + ' closest to ' + m('(4, 0)') + '.',
    'Two numbers have a sum of 30. Maximise the product of one and the square of the other.'
  ]
});

/* ============================== 11 ============================== */
G11_ALG.push({
  id: 'a11-11', stream: 'alg', grade: 11, quarter: 1, lessons: '26–27', hours: 2,
  title: 'Control work 2, and the quarter review',
  subtitle: 'The whole derivative block in one paper, then the map that connects a sign chart to a sketch to an optimum.',
  uz: 'Algebra 11, Nazorat ishi 2', uzPage: 'pp. 127–130',
  cam: 'P1 · Chapter 7 review', camPage: 'Pure Mathematics 1, pp. 191–194', wb: 'Control paper B',
  objectives: [
    'Apply the whole quarter in one assessment.',
    'Choose the correct rule and the correct test without prompting.',
    'Build a concept map of the derivative and its applications.',
    'Set a personal target for Quarter II.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Concept map', 'Tushunchalar xaritasi', 'Карта понятий'],
    ['Command word', 'Topshiriq so‘zi', 'Командное слово'],
    ['Justification', 'Asoslash', 'Обоснование'],
    ['Self-assessment', 'O‘z-o‘zini baholash', 'Самооценка'],
    ['Target', 'Maqsad', 'Цель'],
    ['Revision', 'Takrorlash', 'Повторение'],
    ['Summative assessment', 'Yakuniy baholash', 'Итоговое оценивание']
  ],
  timing: [[3, 'Instructions'], [42, 'The paper'], [10, 'Answers on the board'], [20, 'Rewrite'], [12, 'Concept map'], [3, 'Targets']],
  sections: [
    {
      h: 'The paper — 30 marks, 42 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Differentiate ${m('y = x⁴ − ' + f('3', 'x²') + ' + 2' + sr('x'))}</td><td class="m">3</td><td>L7–9</td></tr>
        <tr><td>2</td><td>Differentiate ${m('y = x²(3x − 1)⁴')} and factorise</td><td class="m">4</td><td>L10–12</td></tr>
        <tr><td>3</td><td>Solve ${m('|2x − 5| ≤ 7')} and ${m('|x − 1| = |3x + 2|')}</td><td class="m">4</td><td>L15–16</td></tr>
        <tr><td>4</td><td>Tangent and normal to ${m('y = x³ − 2x²')} at ${m('x = 2')}</td><td class="m">5</td><td>L17–18</td></tr>
        <tr><td>5</td><td>Investigate ${m('y = x³ − 3x² − 9x + 2')} and sketch it</td><td class="m">7</td><td>L19–22</td></tr>
        <tr><td>6</td><td>A ${m('36 × 36')} card, corner squares cut: maximise the volume, with justification</td><td class="m">7</td><td>L23–25</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Q5 and Q6 carry the sign chart</div>
      Q5 gives 3 marks for the stationary points and 4 for the chart, the nature and the sketch.
      Q6 gives 2 of its 7 for the justification alone. An unjustified optimum is an incomplete answer.</div>`
    },
    {
      h: 'The concept map',
      html: `<p>Six boxes, links written as sentences:</p>
      <ul>
        <li><b>increment</b> → <b>limit</b> — “shrink ${m('Δx')} and the quotient settles”</li>
        <li><b>limit</b> → <b>derivative</b> — “the derivative <i>is</i> that limit”</li>
        <li><b>derivative</b> → <b>rules</b> — “power, sum, product, quotient, chain”</li>
        <li><b>derivative</b> → <b>tangent and normal</b> — “gradient at a point”</li>
        <li><b>sign of ${m("f′")}</b> → <b>shape</b> — “positive climbs, negative falls, zero is stationary”</li>
        <li><b>shape</b> → <b>optimisation</b> — “the extremum is where the gradient turns”</li>
      </ul>
      {{fig:stationaryTypes:Three stationary points — the picture that links the sign chart to the sketch.}}`
    },
    {
      h: 'Looking forward',
      html: `<p>Quarter II opens with approximation by the tangent and with the indefinite integral —
      differentiation run backwards. Every rule of this quarter is used in reverse, so a rule half
      learned now costs twice as much then.</p>
      <div class="keybox"><div class="klabel">One habit to carry forward</div>
      Factorise ${m("f′")} before doing anything with it. Every sign chart, every stationary point,
      every optimisation in Quarter II starts from the factorised derivative.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q5: investigate ' + m('y = x³ − 3x² − 9x + 2') + '.',
      steps: [
        [m("y′ = 3x² − 6x − 9 = 3(x − 3)(x + 1)"), ''],
        ['Stationary at ' + m('x = −1, 3') + '.', m('y(−1) = 7') + ', ' + m('y(3) = −25')],
        [m("y″ = 6x − 6"), m("y″(−1) = −12") + ' max; ' + m("y″(3) = 12") + ' min'],
        ['Increasing outside ' + m('[−1, 3]') + ', decreasing inside.', '']
      ],
      ans: 'max ' + m('(−1, 7)') + ', min ' + m('(3, −25)')
    },
    {
      q: 'Model answer, Q6: ' + m('36 × 36') + ' card, corner squares of side ' + m('x') + '.',
      steps: [
        [m('V = x(36 − 2x)²'), m('0 < x < 18')],
        [m("V′ = (36 − 2x)(36 − 6x)"), ''],
        [m('x = 6') + ' (or ' + m('18') + ', rejected).', ''],
        [m("V′ > 0") + ' before 6, ' + m("V′ < 0") + ' after.', 'Maximum.']
      ],
      ans: m('V = 6 × 24² = 3456 cm³')
    },
    {
      q: 'Model answer, Q2: differentiate ' + m('y = x²(3x − 1)⁴') + '.',
      steps: [
        ['Product, with the chain rule inside.', ''],
        [m("y′ = 2x(3x − 1)⁴ + x² · 4(3x − 1)³ · 3"), ''],
        [m('= 2x(3x − 1)³[(3x − 1) + 6x]'), ''],
        [m('= 2x(3x − 1)³(9x − 1)'), '']
      ],
      ans: m('2x(3x − 1)³(9x − 1)')
    }
  ],
  modelNote: 'Work Q5 on the board with the sign chart drawn under the sketch.',
  interactive: {
    type: 'quiz',
    title: 'The quarter in ten questions',
    hint: 'One from each block.',
    items: [
      { q: m('lim') + '<sub class="m">x→2</sub> ' + m(f('x² − 4', 'x − 2')) + ':', a: [m('0'), m('2'), m('4'), 'undefined'], c: 2, why: m('x + 2') + ' near 2.' },
      { q: 'First principles, ' + m('(x³)′') + ':', a: [m('3x'), m('3x²'), m('x²'), m('3x³')], c: 1, why: 'Expand and cancel.' },
      { q: m('(' + f('1', 'x²') + ')′') + ':', a: [m('−' + f('2', 'x³')), m(f('2', 'x³')), m('−' + f('1', 'x³')), m('−2x')], c: 0, why: m('x⁻² → −2x⁻³') + '.' },
      { q: m('((3x − 1)⁴)′') + ':', a: [m('4(3x − 1)³'), m('12(3x − 1)³'), m('3(3x − 1)³'), m('12(3x − 1)⁴')], c: 1, why: 'Chain rule.' },
      { q: 'Solve ' + m('|2x − 5| ≤ 7') + ':', a: [m('x ≤ 6'), m('−1 ≤ x ≤ 6'), m('x ≥ −1'), m('x ≤ −1') + ' or ' + m('x ≥ 6')], c: 1, why: m('−7 ≤ 2x − 5 ≤ 7') + '.' },
      { q: 'Tangent to ' + m('y = x³ − 2x²') + ' at ' + m('x = 2') + ' has gradient:', a: [m('0'), m('4'), m('8'), m('12')], c: 1, why: m("y′ = 3x² − 4x") + '.' },
      { q: 'Stationary points of ' + m('y = x³ − 3x² − 9x') + ':', a: [m('x = 0, 3'), m('x = −1, 3'), m('x = 1, −3'), m('x = ±3')], c: 1, why: m('3(x−3)(x+1) = 0') + '.' },
      { q: m("f′ = 0") + ', ' + m("f″ > 0") + ' means:', a: ['maximum', 'minimum', 'inflection', 'nothing'], c: 1, why: 'Concave up.' },
      { q: m('36 × 36') + ' card: optimal corner cut is:', a: [m('4'), m('6'), m('9'), m('12')], c: 1, why: m('(36 − 6x) = 0') + '.' },
      { q: 'On a closed interval the maximum can be at:', a: ['a stationary point only', 'an endpoint only', 'either', 'neither'], c: 2, why: 'Both must be checked.' }
    ]
  },
  quiz: [
    { q: '“Show that” requires:', a: ['the answer', 'every line', 'a sketch', 'a calculator'], c: 1, why: 'The reasoning is the mark.' },
    { q: 'An optimisation answer without justification loses:', a: ['nothing', 'a mark or two', 'all marks', 'half'], c: 1, why: 'Q6 gives 2 of 7 for it.' },
    { q: 'Before using a sign chart you should:', a: ['sketch', 'factorise ' + m("f′"), 'find ' + m("f″"), 'substitute'], c: 1, why: 'The factors give the roots and the signs.' },
    { q: 'Quarter II begins with:', a: ['trigonometry', 'the integral', 'probability', 'vectors'], c: 1, why: 'Differentiation run backwards.' }
  ],
  practice: {
    easy: [
      [m('(x⁴)′'), m('4x³')],
      [m('(' + f('3', 'x²') + ')′'), m('−' + f('6', 'x³'))],
      [m('(2' + sr('x') + ')′'), m(f('1', sr('x')))],
      ['Solve ' + m('|2x − 5| ≤ 7'), m('−1 ≤ x ≤ 6')],
      ['Gradient of ' + m('y = x³ − 2x²') + ' at ' + m('x = 2'), m('4')],
      ['Stationary points of ' + m('y = x² − 4x'), m('x = 2')],
      [m('36 × 36') + ' card: best corner cut', m('6')]
    ],
    med: [
      [m('(x⁴ − ' + f('3', 'x²') + ' + 2' + sr('x') + ')′'), m('4x³ + ' + f('6', 'x³') + ' + ' + f('1', sr('x')))],
      [m('(x²(3x − 1)⁴)′'), m('2x(3x − 1)³(9x − 1)')],
      ['Solve ' + m('|x − 1| = |3x + 2|'), m('x = −0.25') + ' or ' + m('x = −1.5')],
      ['Tangent to ' + m('y = x³ − 2x²') + ' at ' + m('x = 2'), m('y = 4x − 8')],
      ['Normal there', m('y = −0.25x + 0.5')],
      ['Investigate ' + m('y = x³ − 3x² − 9x + 2'), 'max ' + m('(−1, 7)') + ', min ' + m('(3, −25)')],
      [m('36 × 36') + ' card: greatest volume', m('3456 cm³')]
    ],
    hard: [
      [m('(' + f('x²', sr('x + 1')) + ')′'), m(f('x(3x + 4)', '2(x + 1)^(3/2)'))],
      ['Find ' + m('a, b') + ' so ' + m('y = x³ + ax² + bx') + ' has a max at ' + m('x = −1') + ' and min at ' + m('x = 2'), m('a = −1.5, b = −6')],
      ['Solve ' + m('|x − 2| + |x + 3| = 7'), m('x = −4') + ' or ' + m('x = 3')],
      ['Tangent to ' + m('y = x³') + ' at ' + m('x = a') + ' meets the curve again where?', m('x = −2a')],
      ['Closed cylinder volume 2000 cm³: minimise surface area', m('r ≈ 6.83') + ' cm'],
      ['Greatest value of ' + m('y = x²(6 − x)') + ' on ' + m('[0, 6]'), m('32') + ' at ' + m('x = 4')],
      ['Show that between two roots of a differentiable function there is a stationary point', 'Rolle’s theorem — the curve must turn']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Bring the concept map to the first lesson of Quarter II.',
  homework: [
    'Rewrite in full every control-work question that lost a mark.',
    'Finish the concept map with all six links written as sentences.',
    'Investigate ' + m('y = x³ − 6x² + 9x + 1') + ' fully and sketch it.',
    'Write your target for Quarter II in one checkable sentence, and date it.'
  ]
});

/* ===================== QUARTER II (21 hours) ===================== */

/* ============================== 12 ============================== */
G11_ALG.push({
  id: 'a11-12', stream: 'alg', grade: 11, quarter: 2, lessons: '28–30', hours: 3,
  title: 'Approximate calculations with the derivative',
  subtitle: 'Near one point a curve is a straight line — which is enough to compute √4.02 in your head.',
  uz: 'Algebra 11, §2.1', uzPage: 'pp. 131–146',
  cam: 'P1 · 9.4 · P2 · numerical methods', camPage: 'Pure Mathematics 1, pp. 186–190', wb: 'P1 Exercise 9C',
  objectives: [
    'Derive and use the linear approximation f(a + h) ≈ f(a) + h·f′(a).',
    'Estimate a root or a power without a calculator.',
    'Estimate the change in a quantity from a small change in another.',
    'Estimate the relative and percentage error in a computed quantity.'
  ],
  terms: [
    ['Approximation', 'Taqribiy hisoblash', 'Приближённое вычисление'],
    ['Linear approximation', 'Chiziqli yaqinlashish', 'Линейное приближение'],
    ['Small increment', 'Kichik orttirma', 'Малое приращение'],
    ['Differential', 'Differensial', 'Дифференциал'],
    ['Absolute error', 'Absolyut xatolik', 'Абсолютная погрешность'],
    ['Relative error', 'Nisbiy xatolik', 'Относительная погрешность'],
    ['Percentage error', 'Foizli xatolik', 'Процентная погрешность'],
    ['Convenient point', 'Qulay nuqta', 'Удобная точка'],
    ['Order of accuracy', 'Aniqlik tartibi', 'Порядок точности']
  ],
  timing: [[16, 'Where the formula comes from'], [24, 'Roots and powers'], [24, 'Changes in a quantity'], [24, 'Error estimates'], [36, 'Practice'], [11, 'Homework']],
  sections: [
    {
      h: 'Where the formula comes from',
      html: `<p>Return to the definition. For small ${m('h')},</p>
      ${eq(m(f('f(a + h) − f(a)', 'h') + ' ≈ f′(a)   ⇒   f(a + h) ≈ f(a) + h · f′(a)'), true)}
      <p>Geometrically: near the point of tangency the curve and its tangent are almost the same line,
      so the tangent's height is a good estimate of the curve's.</p>
      {{fig:linearApprox:Close to a the two agree; the error grows with the square of the distance.}}
      <div class="keybox"><div class="klabel">Choosing ${m('a')}</div>
      Pick the nearest point at which ${m('f')} and ${m("f′")} are <b>easy</b>. For ${m(sr('4.02'))}
      take ${m('a = 4')}; for ${m('sin 31°')} take ${m('a = 30°')}. The whole art is that choice.</div>`
    },
    {
      h: 'Roots and powers',
      html: `<p><b>Estimate ${m(sr('4.02'))}.</b> Take ${m('f(x) = ' + sr('x'))}, ${m('a = 4')},
      ${m('h = 0.02')}:</p>
      ${eq(m("f(4) = 2,   f′(x) = " + f('1', '2' + sr('x')) + ",   f′(4) = 0.25"), false)}
      ${eq(m(sr('4.02') + ' ≈ 2 + 0.02 × 0.25 = 2.005'), true)}
      <p>The true value is ${m('2.004994…')} — the estimate is right to five decimal places, from two
      multiplications.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Estimate</th><th class="m">a</th><th class="m">h</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">${sr('9.06')}</td><td class="m">9</td><td class="m">0.06</td><td class="m">3.01</td></tr>
        <tr><td class="m">${sr('101')}</td><td class="m">100</td><td class="m">1</td><td class="m">10.05</td></tr>
        <tr><td class="m">2.01³</td><td class="m">2</td><td class="m">0.01</td><td class="m">8.12</td></tr>
        <tr><td class="m">${f('1', '4.98')}</td><td class="m">5</td><td class="m">−0.02</td><td class="m">0.2008</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'Changes in a quantity',
      html: `<p>The same formula, read as a statement about changes:</p>
      ${eq(m('Δy ≈ f′(x) · Δx'), true)}
      <p><b>Example.</b> A cube's side is measured as ${m('10')} cm, with a possible error of
      ${m('0.05')} cm. By how much can the volume be out?</p>
      ${eq(m('V = a³,   ' + f('dV', 'da') + ' = 3a² = 300,   ΔV ≈ 300 × 0.05 = 15 cm³'), false)}
      <p>So ${m('V = 1000 ± 15')} cm³. The absolute error in the side is small, but it is multiplied by
      ${m('3a²')} on its way to the volume.</p>`
    },
    {
      h: 'Relative and percentage error',
      html: `${eq('relative error  ' + m(f('Δy', 'y') + ' ≈ ' + f("f′(x) · Δx", 'f(x)')), true)}
      <p>For the cube: ${m(f('15', '1000') + ' = 1.5%')}, from a side error of only
      ${m(f('0.05', '10') + ' = 0.5%')}. The relative error is tripled, because the volume is the
      <b>third</b> power of the length.</p>
      <div class="keybox"><div class="klabel">A rule worth remembering</div>
      For ${m('y = xⁿ')} the relative errors satisfy ${m(f('Δy', 'y') + ' ≈ n · ' + f('Δx', 'x'))}.
      Squaring doubles the percentage error; cubing triples it; taking a square root halves it.</div>
      <div class="warn"><span class="wl">The approximation is one-sided in accuracy</span>
      It is good for <b>small</b> ${m('h')} only. Estimating ${m(sr('4.9'))} from ${m('a = 4')} gives
      ${m('2.1125')} against a true ${m('2.2136')} — an error of 5%. Choose the nearer convenient point.</div>`
    }
  ],
  examples: [
    {
      q: 'Estimate ' + m(sr('26')) + ' without a calculator.',
      steps: [
        [m('a = 25, h = 1'), m('f(25) = 5')],
        [m("f′(x) = " + f('1', '2' + sr('x')) + ", f′(25) = 0.1"), ''],
        [m(sr('26') + ' ≈ 5 + 1 × 0.1 = 5.1'), 'True: ' + m('5.0990') + '.']
      ],
      ans: m('≈ 5.1')
    },
    {
      q: 'Estimate ' + m('3.02⁴') + '.',
      steps: [
        [m('f(x) = x⁴, a = 3, h = 0.02'), m('f(3) = 81')],
        [m("f′(x) = 4x³, f′(3) = 108"), ''],
        [m('81 + 0.02 × 108 = 83.16'), 'True: ' + m('83.17') + '.']
      ],
      ans: m('≈ 83.16')
    },
    {
      q: 'A sphere’s radius is ' + m('6 ± 0.1') + ' cm. Estimate the error in its volume.',
      steps: [
        [m('V = ' + f('4', '3') + 'πr³'), m(f('dV', 'dr') + ' = 4πr² = 144π')],
        [m('ΔV ≈ 144π × 0.1 ≈ 45.2'), ''],
        [m('V = 288π ≈ 904.8'), ''],
        ['Relative error ' + m(f('45.2', '904.8') + ' = 5%'), 'Three times the ' + m(f('0.1', '6') + ' ≈ 1.67%') + ' in ' + m('r') + '.']
      ],
      ans: m('ΔV ≈ 45') + ' cm³, about 5%'
    }
  ],
  modelNote: 'Shrink h and watch the tangent’s prediction converge on the curve’s value.',
  interactive: {
    type: 'derivative',
    title: 'The tangent as a predictor',
    hint: 'Read the tangent height against the curve height at ' + m('a + h') + '.'
  },
  quiz: [
    { q: 'The linear approximation is:', a: [m('f(a) · h'), m('f(a) + h f′(a)'), m("f′(a) + h"), m('f(a + h)')], c: 1, why: 'Value plus gradient times step.' },
    { q: 'For ' + m(sr('4.02')) + ' the best ' + m('a') + ' is:', a: [m('0'), m('1'), m('4'), m('5')], c: 2, why: 'Nearest convenient square.' },
    { q: m('Δy ≈') + ':', a: [m("f′(x) Δx"), m('f(x) Δx'), m('Δx'), m("f′(x)")], c: 0, why: 'The gradient scales the change.' },
    { q: 'For ' + m('y = x³') + ' a 1% error in ' + m('x') + ' gives about:', a: ['1%', '2%', '3%', '9%'], c: 2, why: m('n = 3') + '.' },
    { q: 'For ' + m('y = ' + sr('x')) + ' a 4% error in ' + m('x') + ' gives about:', a: ['1%', '2%', '4%', '8%'], c: 1, why: m('n = 0.5') + '.' }
  ],
  practice: {
    easy: [
      ['Estimate ' + m(sr('4.04')), m('≈ 2.01')],
      ['Estimate ' + m(sr('9.06')), m('≈ 3.01')],
      ['Estimate ' + m(sr('16.08')), m('≈ 4.01')],
      ['Estimate ' + m('2.01²'), m('≈ 4.04')],
      ['Estimate ' + m('3.02²'), m('≈ 9.12')],
      ['Estimate ' + m('1.02³'), m('≈ 1.06')],
      [m('Δy') + ' for ' + m('y = 5x') + ' when ' + m('Δx = 0.2'), m('1')]
    ],
    med: [
      ['Estimate ' + m(sr('26')), m('≈ 5.1')],
      ['Estimate ' + m(sr('101')), m('≈ 10.05')],
      ['Estimate ' + m('3.02⁴'), m('≈ 83.16')],
      ['Estimate ' + m(f('1', '4.98')), m('≈ 0.2008')],
      ['Cube side ' + m('10 ± 0.05') + '; error in the volume', m('≈ 15') + ' cm³'],
      ['Sphere radius ' + m('6 ± 0.1') + '; error in the volume', m('≈ 45') + ' cm³'],
      ['A 2% error in the radius gives what error in the area of a circle?', m('≈ 4%')]
    ],
    hard: [
      ['Estimate ' + m('∛8.12'), m('≈ 2.01')],
      ['Estimate ' + m(sr('48')) + ' from ' + m('a = 49'), m('≈ 6.929') + ' (true ' + m('6.928') + ')'],
      ['A circle’s radius grows 1%. By what percentage does the area grow?', m('≈ 2%')],
      ['A cube’s surface area is measured to 2%. To what accuracy is the volume known?', m('≈ 3%')],
      ['Estimate the error in ' + m('T = 2π' + sr(f('L', 'g'))) + ' from a 1% error in ' + m('L'), m('≈ 0.5%')],
      ['Show the error in the linear approximation is of order ' + m('h²'), 'From the next term of the expansion'],
      ['Why does estimating ' + m(sr('4.9')) + ' from ' + m('a = 4') + ' fail badly?', m('h = 0.9') + ' is not small — the ' + m('h²') + ' term dominates']
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'State ' + m('a') + ', ' + m('h') + ' and ' + m("f′(a)") + ' before every estimate.',
  homework: [
    'Estimate ' + m(sr('36.6')) + ' and ' + m(sr('99')) + '.',
    'Estimate ' + m('2.03⁵') + '.',
    'Estimate ' + m(f('1', '2.98')) + '.',
    'A cube’s side is ' + m('8 ± 0.02') + ' cm. Find the volume and its absolute and percentage error.',
    'A sphere’s radius is measured to within 1%. To what accuracy is its volume known?',
    'Explain in three sentences why the approximation is only good for small ' + m('h') + '.'
  ]
});

/* ============================== 13 ============================== */
G11_ALG.push({
  id: 'a11-13', stream: 'alg', grade: 11, quarter: 2, lessons: '31–34', hours: 4,
  title: 'Modelling with the derivative',
  subtitle: 'Four lessons of real situations — motion, growth, cost, flow — in which the derivative is the quantity the question is really about.',
  uz: 'Algebra 11, §2.2', uzPage: 'pp. 147–168',
  cam: 'P1 · 9.4', camPage: 'Pure Mathematics 1, pp. 186–190', wb: 'P1 Exercise 9C',
  objectives: [
    'Interpret a derivative as a rate of change in a stated context, with units.',
    'Model motion with displacement, velocity and acceleration.',
    'Use connected rates of change.',
    'Interpret marginal cost and marginal revenue.'
  ],
  terms: [
    ['Mathematical model', 'Matematik model', 'Математическая модель'],
    ['Rate of change', 'O‘zgarish tezligi', 'Скорость изменения'],
    ['Displacement', 'Ko‘chish', 'Перемещение'],
    ['Velocity', 'Tezlik', 'Скорость'],
    ['Acceleration', 'Tezlanish', 'Ускорение'],
    ['Connected rates', 'Bog‘liq tezliklar', 'Связанные скорости'],
    ['Marginal cost', 'Marjinal xarajat', 'Предельные издержки'],
    ['Marginal revenue', 'Marjinal daromad', 'Предельный доход'],
    ['Units of a rate', 'Tezlik birligi', 'Единицы скорости'],
    ['Instant of rest', 'To‘xtash payti', 'Момент остановки']
  ],
  timing: [[16, 'The derivative has units'], [30, 'Motion'], [30, 'Connected rates'], [30, 'Cost and revenue'], [50, 'Practice'], [24, 'Homework and consolidation']],
  sections: [
    {
      h: 'The derivative has units',
      html: `<div class="keybox"><div class="klabel">Read the units off the fraction</div>
      ${m(f('dy', 'dx'))} carries the units of ${m('y')} divided by those of ${m('x')}. A distance in
      metres over a time in seconds gives m/s; a cost in so‘m over a number of items gives so‘m per
      item. Stating the units is half the interpretation.</div>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">y</th><th class="m">x</th><th class="m">${f('dy', 'dx')}</th><th>Units</th></tr></thead>
      <tbody>
        <tr><td>distance</td><td>time</td><td>velocity</td><td class="m">m/s</td></tr>
        <tr><td>velocity</td><td>time</td><td>acceleration</td><td class="m">m/s²</td></tr>
        <tr><td>volume</td><td>time</td><td>flow rate</td><td class="m">cm³/s</td></tr>
        <tr><td>total cost</td><td>quantity</td><td>marginal cost</td><td>so‘m per item</td></tr>
        <tr><td>population</td><td>time</td><td>growth rate</td><td>people per year</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'Motion',
      html: `${eq(m('v(t) = s′(t)') + '     ' + m("a(t) = v′(t) = s″(t)"), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Question in words</th><th>What to solve</th></tr></thead>
      <tbody>
        <tr><td>when is the body at rest?</td><td class="m">v(t) = 0</td></tr>
        <tr><td>when does it change direction?</td><td>${m('v')} changes sign</td></tr>
        <tr><td>when is the speed greatest?</td><td class="m">a(t) = 0</td></tr>
        <tr><td>how far has it travelled?</td><td>total distance — count each direction separately</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Displacement is not distance</span>
      A body that goes out 5 m and comes back has displacement ${m('0')} and distance ${m('10')} m.
      If ${m('v')} changes sign inside the interval, the journey must be split at that instant.</div>`
    },
    {
      h: 'Connected rates',
      html: `<p>When two quantities are linked by a formula, their rates are linked by the chain rule:</p>
      ${eq(m(f('dA', 'dt') + ' = ' + f('dA', 'dr') + ' · ' + f('dr', 'dt')), true)}
      <p><b>Example.</b> Water is poured into a cone at ${m('20')} cm³/s. The cone has height ${m('30')}
      and top radius ${m('15')} cm. How fast is the depth rising when ${m('h = 10')}?</p>
      ${eq(m('r = ' + f('h', '2') + '  ⇒  V = ' + f('1', '3') + 'π(' + f('h', '2') + ')²h = ' + f('πh³', '12')), false)}
      ${eq(m(f('dV', 'dh') + ' = ' + f('πh²', '4') + ' = 25π  ⇒  ' + f('dh', 'dt') + ' = ' + f('20', '25π') + ' ≈ 0.255 cm/s'), true)}
      <div class="keybox"><div class="klabel">Always reduce to one variable first</div>
      The relation ${m('r = ' + f('h', '2'))} comes from similar triangles and must be used <b>before</b>
      differentiating. Differentiating a two-variable formula is the standard error here.</div>`
    },
    {
      h: 'Cost and revenue',
      html: `<p>In economics the derivative of a total is called a <b>marginal</b> quantity: the
      approximate cost of producing <b>one more</b> item.</p>
      ${eq(m('MC(q) = C′(q)') + '     ' + m("MR(q) = R′(q)") + '     profit is greatest when ' + m('MC = MR'), true)}
      <p>The last statement is the optimisation of Lesson 23–25 in economic dress: profit
      ${m('P = R − C')} is stationary when ${m("P′ = R′ − C′ = 0")}.</p>
      <p><b>Example.</b> ${m('C(q) = 0.02q² + 8q + 500')} so‘m. The marginal cost at ${m('q = 100')} is
      ${m("C′(100) = 0.04 × 100 + 8 = 12")} so‘m — the 101st item costs about 12 so‘m to make, while the
      average cost of the first hundred is ${m(f('1500', '100') + ' = 15')} so‘m.</p>`
    }
  ],
  examples: [
    {
      q: m('s = t³ − 6t² + 9t') + ' metres. Find when the body is at rest and the total distance in the first 4 s.',
      steps: [
        [m('v = 3t² − 12t + 9 = 3(t − 1)(t − 3)'), 'Rest at ' + m('t = 1, 3') + '.'],
        [m('s(0) = 0, s(1) = 4, s(3) = 0, s(4) = 4'), ''],
        ['Distances: ' + m('4 + 4 + 4') + '.', 'Direction changes twice.']
      ],
      ans: 'Rest at ' + m('t = 1') + ' and ' + m('t = 3') + '; distance ' + m('12') + ' m'
    },
    {
      q: 'A ladder 5 m long slides down a wall. Its foot moves out at ' + m('0.4') + ' m/s. How fast is the top falling when the foot is 3 m out?',
      steps: [
        [m('x² + y² = 25'), 'Differentiate with respect to ' + m('t') + '.'],
        [m('2x' + f('dx', 'dt') + ' + 2y' + f('dy', 'dt') + ' = 0'), ''],
        [m('x = 3 ⇒ y = 4'), ''],
        [m('3(0.4) + 4' + f('dy', 'dt') + ' = 0 ⇒ ' + f('dy', 'dt') + ' = −0.3'), '']
      ],
      ans: m('0.3') + ' m/s downwards'
    },
    {
      q: m('C(q) = 0.05q² + 12q + 800') + '. Find the marginal cost at ' + m('q = 60') + ' and the average cost.',
      steps: [
        [m("C′(q) = 0.1q + 12"), ''],
        [m("C′(60) = 18") + ' so‘m per item.', ''],
        [m('C(60) = 180 + 720 + 800 = 1700'), ''],
        ['Average ' + m(f('1700', '60') + ' ≈ 28.3') + ' so‘m.', '']
      ],
      ans: 'Marginal ' + m('18') + ', average ' + m('≈ 28.3') + ' so‘m'
    }
  ],
  modelNote: 'Give every answer with its units, out loud, before writing it down.',
  interactive: {
    type: 'derivative',
    title: 'A rate of change',
    hint: 'Read the gradient as a rate, and say its units.'
  },
  quiz: [
    { q: 'If ' + m('s') + ' is in metres and ' + m('t') + ' in seconds, ' + m("s′") + ' is in:', a: [m('m'), m('m/s'), m('m/s²'), m('s/m')], c: 1, why: 'Units divide.' },
    { q: 'A body is at rest when:', a: [m('s = 0'), m('v = 0'), m('a = 0'), m("s′′ = 0")], c: 1, why: 'Zero velocity.' },
    { q: 'Marginal cost is:', a: [m('C(q)'), m('C′(q)'), m(f('C(q)', 'q')), m("C″(q)")], c: 1, why: 'The cost of one more item.' },
    { q: 'Connected rates use:', a: ['the product rule', 'the chain rule', 'the quotient rule', 'first principles'], c: 1, why: m(f('dA', 'dt') + ' = ' + f('dA', 'dr') + f('dr', 'dt')) + '.' },
    { q: 'Profit is greatest when:', a: [m('MC = 0'), m('MR = 0'), m('MC = MR'), m('C = R')], c: 2, why: m("P′ = R′ − C′ = 0") + '.' }
  ],
  practice: {
    easy: [
      [m('s = 5t²') + '; find ' + m('v(3)'), m('30') + ' m/s'],
      [m('s = t³') + '; find ' + m('a(2)'), m('12') + ' m/s²'],
      [m('s = 4t − t²') + '; when is the body at rest?', m('t = 2')],
      ['Units of ' + m(f('dV', 'dt')) + ' for volume in cm³', m('cm³/s')],
      [m('C(q) = 3q + 50') + '; marginal cost', m('3')],
      [m('V = ' + f('4', '3') + 'πr³') + '; find ' + m(f('dV', 'dr')), m('4πr²')],
      [m('A = πr²') + '; find ' + m(f('dA', 'dr')) + ' at ' + m('r = 3'), m('6π')]
    ],
    med: [
      [m('s = t³ − 6t² + 9t') + '; when at rest?', m('t = 1, 3')],
      ['Same; total distance in the first 4 s', m('12') + ' m'],
      ['Balloon: ' + m(f('dr', 'dt') + ' = 2') + ' cm/s; find ' + m(f('dV', 'dt')) + ' at ' + m('r = 5'), m('200π') + ' cm³/s'],
      ['Circle: ' + m(f('dr', 'dt') + ' = 0.5') + '; find ' + m(f('dA', 'dt')) + ' at ' + m('r = 8'), m('8π')],
      ['Ladder 5 m, foot at ' + m('0.4') + ' m/s; top’s speed when foot is 3 m out', m('0.3') + ' m/s'],
      [m('C(q) = 0.05q² + 12q + 800') + '; marginal cost at ' + m('q = 60'), m('18')],
      [m('s = 20t − 5t²') + '; greatest height and when', m('20') + ' m at ' + m('t = 2')]
    ],
    hard: [
      ['Cone, height 30, radius 15, filled at 20 cm³/s. ' + m(f('dh', 'dt')) + ' at ' + m('h = 10'), m('≈ 0.255') + ' cm/s'],
      ['Same cone at ' + m('h = 20'), m('≈ 0.064') + ' cm/s'],
      [m('s = t⁴ − 8t²') + '; find all instants of rest', m('t = 0, ±2')],
      ['A cube’s volume grows at 12 cm³/s. Find ' + m(f('da', 'dt')) + ' when ' + m('a = 4'), m('0.25') + ' cm/s'],
      ['Same cube: find ' + m(f('dS', 'dt')) + ' at that moment', m('12') + ' cm²/s'],
      [m('R(q) = 60q − 0.5q²') + ', ' + m('C(q) = 10q + 200') + '. Maximise the profit', m('q = 50') + ', profit ' + m('1050')],
      ['A trough 10 m long, cross-section an isosceles triangle 2 m wide and 1 m deep, fills at 0.5 m³/min. Find ' + m(f('dh', 'dt')) + ' at ' + m('h = 0.5'), m('0.05') + ' m/min']
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Every answer needs its units and a sentence in the words of the question.',
  homework: [
    m('s = 2t³ − 15t² + 24t') + '. Find when the body is at rest, and the total distance in the first 5 s.',
    'A spherical balloon is inflated at ' + m('30') + ' cm³/s. Find how fast the radius grows when ' + m('r = 5') + ' cm.',
    'A ladder 13 m long slides; the foot moves at ' + m('0.5') + ' m/s. Find the top’s speed when the foot is 5 m out.',
    m('C(q) = 0.1q² + 20q + 1000') + '. Find the marginal cost at ' + m('q = 40') + ' and the average cost.',
    m('R(q) = 100q − q²') + ' and ' + m('C(q) = 20q + 300') + '. Find the profit-maximising ' + m('q') + '.',
    'A conical tank of height 12 m and top radius 6 m is filled at ' + m('3') + ' m³/min. Find ' + m(f('dh', 'dt')) + ' when ' + m('h = 4') + ' m.'
  ]
});

/* ============================== 14 ============================== */
G11_ALG.push({
  id: 'a11-14', stream: 'alg', grade: 11, quarter: 2, lessons: '35–36', hours: 2,
  title: 'Control work 3, and work on the mistakes',
  subtitle: 'Approximation and modelling in one paper — the two topics where a missing unit costs a mark.',
  uz: 'Algebra 11, Nazorat ishi 3', uzPage: 'pp. 169–172',
  cam: 'P1 · Chapter 9 review', camPage: 'Pure Mathematics 1, pp. 191–194', wb: 'Control paper C',
  objectives: [
    'Apply linear approximation and connected rates under time.',
    'Give every answer with its units and in context.',
    'Classify each lost mark as careless, method or knowledge.',
    'Rewrite every wrong solution correctly.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Linear approximation', 'Chiziqli yaqinlashish', 'Линейное приближение'],
    ['Connected rates', 'Bog‘liq tezliklar', 'Связанные скорости'],
    ['Units', 'O‘lchov birliklari', 'Единицы измерения'],
    ['Interpretation', 'Talqin', 'Интерпретация'],
    ['Careless error', 'E’tiborsizlik xatosi', 'Ошибка по невнимательности'],
    ['Method error', 'Usul xatosi', 'Ошибка в методе'],
    ['Knowledge gap', 'Bilim bo‘shlig‘i', 'Пробел в знаниях']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [10, 'Self-mark'], [25, 'Rewrite'], [12, 'Units drill']],
  sections: [
    {
      h: 'The paper — 25 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Estimate ${m(sr('37'))} and ${m('2.02⁴')} by linear approximation</td><td class="m">5</td><td>L28–30</td></tr>
        <tr><td>2</td><td>A cube’s side is ${m('12 ± 0.03')} cm. Find the volume and its percentage error</td><td class="m">4</td><td>L28–30</td></tr>
        <tr><td>3</td><td>${m('s = t³ − 9t² + 24t')}: find when the body is at rest and the distance in the first 5 s</td><td class="m">6</td><td>L31–34</td></tr>
        <tr><td>4</td><td>A balloon inflates at ${m('40')} cm³/s. Find ${m(f('dr', 'dt'))} when ${m('r = 4')}</td><td class="m">5</td><td>L31–34</td></tr>
        <tr><td>5</td><td>${m('C(q) = 0.04q² + 15q + 600')}: marginal and average cost at ${m('q = 50')}</td><td class="m">5</td><td>L31–34</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Units are marked</div>
      Q3, Q4 and Q5 each carry one mark for the units alone. A numerically perfect answer with no units
      loses three of the twenty-five.</div>`
    },
    {
      h: 'The three errors this topic produces',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Error</th><th>Looks like</th><th>Kind</th></tr></thead>
      <tbody>
        <tr><td>units omitted</td><td>“the answer is 0.4”</td><td>careless</td></tr>
        <tr><td>two variables kept</td><td>differentiating ${m('V = ' + f('1', '3') + 'πr²h')} in ${m('t')} without eliminating ${m('r')}</td><td>method</td></tr>
        <tr><td>distance read as displacement</td><td>ignoring the change of direction</td><td>method</td></tr>
        <tr><td>wrong ${m('a')} chosen</td><td>estimating ${m(sr('37'))} from ${m('a = 25')}</td><td>knowledge</td></tr>
      </tbody></table></div>
      {{fig:linearApprox:Question 1 in one picture — and the reason the choice of a matters.}}`
    },
    {
      h: 'The units drill',
      html: `<p>Ten rates on the board. For each, the class calls out only the <b>units</b>, in three
      seconds:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Rate</th><th>Units</th></tr></thead>
      <tbody>
        <tr><td>${m(f('ds', 'dt'))}, ${m('s')} in km, ${m('t')} in hours</td><td class="m">km/h</td></tr>
        <tr><td>${m(f('dV', 'dt'))}, ${m('V')} in litres</td><td class="m">litres per second</td></tr>
        <tr><td>${m(f('dC', 'dq'))}, cost in so‘m</td><td>so‘m per item</td></tr>
        <tr><td>${m(f('dA', 'dr'))}, ${m('A')} in cm²</td><td class="m">cm</td></tr>
        <tr><td>${m(f('dP', 'dt'))}, ${m('P')} a population</td><td>people per year</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Row 4 is the interesting one</span>
      ${m(f('dA', 'dr') + ' = 2πr')} has units cm²/cm = cm. A rate need not be “per second”: it is
      whatever the two quantities make it.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q1: estimate ' + m(sr('37')) + '.',
      steps: [
        [m('a = 36, h = 1'), 'Nearest convenient square.'],
        [m('f(36) = 6') + ', ' + m("f′(36) = " + f('1', '12')), ''],
        [m('6 + 1 × ' + f('1', '12') + ' ≈ 6.083'), 'True ' + m('6.0828') + '.']
      ],
      ans: m('≈ 6.083')
    },
    {
      q: 'Model answer, Q4: balloon at ' + m('40') + ' cm³/s, find ' + m(f('dr', 'dt')) + ' at ' + m('r = 4') + '.',
      steps: [
        [m('V = ' + f('4', '3') + 'πr³'), m(f('dV', 'dr') + ' = 4πr² = 64π')],
        [m(f('dV', 'dt') + ' = ' + f('dV', 'dr') + ' · ' + f('dr', 'dt')), ''],
        [m('40 = 64π · ' + f('dr', 'dt')), ''],
        [m(f('dr', 'dt') + ' = ' + f('40', '64π') + ' ≈ 0.199'), '']
      ],
      ans: m('≈ 0.20') + ' cm/s'
    },
    {
      q: 'A learner wrote “the top of the ladder falls at 0.3”. What is missing?',
      steps: [
        ['The number is right.', ''],
        ['No units, and no direction.', 'A careless error.'],
        ['Correct: ' + m('0.3') + ' m/s downwards.', '']
      ],
      ans: 'The units and the direction'
    }
  ],
  modelNote: 'Run the units drill before the rewrite, not after.',
  interactive: {
    type: 'quiz',
    title: 'Units and estimates',
    hint: 'Ask what the two quantities are measured in.',
    items: [
      { q: 'Best ' + m('a') + ' for estimating ' + m(sr('37')) + ':', a: [m('25'), m('36'), m('40'), m('49')], c: 1, why: 'Nearest convenient square.' },
      { q: m(sr('37')) + ' ≈', a: [m('6.05'), m('6.083'), m('6.2'), m('6.5')], c: 1, why: m('6 + ' + f('1', '12')) + '.' },
      { q: 'Units of ' + m(f('dA', 'dr')) + ' for ' + m('A') + ' in cm²:', a: [m('cm²'), m('cm'), m('cm³'), m('cm²/s')], c: 1, why: 'cm² ÷ cm.' },
      { q: 'Balloon at 40 cm³/s, ' + m('r = 4') + ': ' + m(f('dr', 'dt')) + ' ≈', a: [m('0.20'), m('0.40'), m('2.0'), m('6.4')], c: 0, why: m(f('40', '64π')) + '.' },
      { q: m('s = t³ − 9t² + 24t') + ': rest at', a: [m('t = 2, 4'), m('t = 1, 3'), m('t = 3, 8'), m('t = 0, 6')], c: 0, why: m('3(t−2)(t−4) = 0') + '.' },
      { q: 'A 0.25% error in a cube’s side gives what error in the volume?', a: ['0.25%', '0.5%', '0.75%', '3%'], c: 2, why: 'Three times.' }
    ]
  },
  quiz: [
    { q: 'A rate’s units come from:', a: ['the numerator only', 'both quantities', 'the context', 'nothing'], c: 1, why: 'They divide.' },
    { q: 'Before differentiating a connected-rate formula you must:', a: ['square it', 'reduce it to one variable', 'integrate', 'nothing'], c: 1, why: 'Otherwise the derivative is meaningless.' },
    { q: 'Distance differs from displacement when:', a: ['never', 'the velocity changes sign', 'the acceleration is zero', 'always'], c: 1, why: 'The journey must be split.' },
    { q: 'Choosing a poor ' + m('a') + ' in an estimate is:', a: ['careless', 'a method error', 'a knowledge gap', 'fine'], c: 2, why: 'The principle was not understood.' }
  ],
  practice: {
    easy: [
      ['Estimate ' + m(sr('37')), m('≈ 6.083')],
      ['Estimate ' + m('2.02⁴'), m('≈ 16.64')],
      ['Units of ' + m(f('ds', 'dt')) + ' for km and hours', m('km/h')],
      [m('s = t² − 4t') + '; when at rest?', m('t = 2')],
      [m('C(q) = 5q + 90') + '; marginal cost', m('5')],
      [m('V = ' + f('4', '3') + 'πr³') + '; ' + m(f('dV', 'dr')) + ' at ' + m('r = 4'), m('64π')],
      ['A 1% error in the side gives what error in the area?', m('≈ 2%')]
    ],
    med: [
      ['Cube side ' + m('12 ± 0.03') + '; percentage error in the volume', m('0.75%')],
      [m('s = t³ − 9t² + 24t') + '; rest at', m('t = 2, 4')],
      ['Same; distance in the first 5 s', m('28') + ' m'],
      ['Balloon at 40 cm³/s; ' + m(f('dr', 'dt')) + ' at ' + m('r = 4'), m('≈ 0.20') + ' cm/s'],
      [m('C(q) = 0.04q² + 15q + 600') + '; marginal cost at ' + m('q = 50'), m('19')],
      ['Same; average cost at ' + m('q = 50'), m('≈ 32') + ' so‘m'],
      ['Estimate ' + m(f('1', '5.02')), m('≈ 0.1992')]
    ],
    hard: [
      ['Estimate ' + m('∛27.5'), m('≈ 3.0185')],
      ['A cone of height 12, radius 6, fills at 4 m³/min. ' + m(f('dh', 'dt')) + ' at ' + m('h = 6'), m(f('4', '9π')) + ' ≈ ' + m('0.141') + ' m/min'],
      [m('s = t⁴ − 4t³') + '; find every instant of rest', m('t = 0, 3')],
      ['A square’s area grows at 8 cm²/s. Find ' + m(f('da', 'dt')) + ' at ' + m('a = 4'), m('1') + ' cm/s'],
      ['A ladder 10 m long; the top falls at 0.6 m/s. Find the foot’s speed when the top is 6 m up', m('0.45') + ' m/s'],
      [m('R(q) = 80q − 0.4q²') + ', ' + m('C(q) = 20q + 500') + '. Maximise the profit', m('q = 75') + ', profit ' + m('1750')],
      ['Show that for ' + m('y = xⁿ') + ' the percentage error multiplies by ' + m('n'), m(f('Δy', 'y') + ' = n' + f('Δx', 'x'))]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Task 1 is the rewrite. Units on every line.',
  homework: [
    'Rewrite in full every question that lost a mark, with units on every answer.',
    'Five problems from the section your knowledge column was heaviest in.',
    'Estimate ' + m(sr('50')) + ' and ' + m('3.01⁵') + '.',
    'A cone of height 20 and top radius 10 fills at ' + m('5') + ' cm³/s. Find ' + m(f('dh', 'dt')) + ' when ' + m('h = 8') + '.'
  ]
});

/* ============================== 15 ============================== */
G11_ALG.push({
  id: 'a11-15', stream: 'alg', grade: 11, quarter: 2, lessons: '37–40', hours: 4,
  title: 'The antiderivative and the indefinite integral',
  subtitle: 'Differentiation run backwards — and the constant that makes the answer a whole family of curves.',
  uz: 'Algebra 11, §2.3', uzPage: 'pp. 173–192',
  cam: 'P1 · 10.1', camPage: 'Pure Mathematics 1, pp. 196–202', wb: 'P1 Exercise 10A',
  objectives: [
    'State the definition of an antiderivative and verify one by differentiating.',
    'Explain why the antiderivative is determined only up to a constant.',
    'Write the indefinite integral with its constant of integration.',
    'Find the particular antiderivative through a given point.'
  ],
  terms: [
    ['Antiderivative', 'Boshlang‘ich funksiya', 'Первообразная'],
    ['Indefinite integral', 'Aniqmas integral', 'Неопределённый интеграл'],
    ['Constant of integration', 'Integrallash doimiysi', 'Постоянная интегрирования'],
    ['Integrand', 'Integral ostidagi funksiya', 'Подынтегральная функция'],
    ['Family of curves', 'Egri chiziqlar oilasi', 'Семейство кривых'],
    ['Initial condition', 'Boshlang‘ich shart', 'Начальное условие'],
    ['Particular solution', 'Xususiy yechim', 'Частное решение'],
    ['Integration', 'Integrallash', 'Интегрирование'],
    ['Inverse operation', 'Teskari amal', 'Обратная операция']
  ],
  timing: [[16, 'The definition'], [24, 'Why the constant'], [26, 'Notation'], [30, 'Particular antiderivatives'], [46, 'Practice'], [38, 'Homework and consolidation']],
  sections: [
    {
      h: 'The definition',
      html: `<div class="keybox"><div class="klabel">Antiderivative</div>
      ${m('F')} is an <b>antiderivative</b> of ${m('f')} on an interval when ${m("F′(x) = f(x)")} for every
      ${m('x')} in it.</div>
      <p>So the question “what is the antiderivative of ${m('2x')}?” asks: what did I differentiate to
      get ${m('2x')}? The answer ${m('x²')} is checked by differentiating it back.</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">f(x)</th><th>An antiderivative</th><th>Check</th></tr></thead>
      <tbody>
        <tr><td class="m">2x</td><td class="m">x²</td><td class="m">(x²)′ = 2x ✓</td></tr>
        <tr><td class="m">3x²</td><td class="m">x³</td><td class="m">(x³)′ = 3x² ✓</td></tr>
        <tr><td class="m">1</td><td class="m">x</td><td class="m">(x)′ = 1 ✓</td></tr>
        <tr><td class="m">0</td><td class="m">7</td><td class="m">(7)′ = 0 ✓</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Always check by differentiating</span>
      Integration has no algorithm that always works, but its answer can always be verified in one line.
      That check costs five seconds and catches almost every error.</div>`
    },
    {
      h: 'Why there is a constant',
      html: `<p>The last row is the clue: ${m('7')} is an antiderivative of ${m('0')}, and so is
      ${m('−3')}, and so is any constant. So if ${m('F')} works, so does ${m('F + C')} — differentiating
      kills the constant.</p>
      ${eq(m("(F + C)′ = F′ + 0 = f"), true)}
      <p><b>Theorem.</b> If ${m('F')} and ${m('G')} are both antiderivatives of ${m('f')} on an interval,
      then ${m('F − G')} is constant. So the family ${m('F + C')} is <b>all</b> of them.</p>
      {{fig:antiderivFamily:One shape, shifted. At any x the tangents are parallel — that is what equal derivatives means.}}
      <div class="keybox"><div class="klabel">Read the picture</div>
      Every member of the family has the same gradient at each ${m('x')}. Knowing the derivative fixes
      the <b>shape</b> of the curve but not its <b>height</b>. One extra fact — a point on the curve —
      fixes the height.</div>`
    },
    {
      h: 'The notation',
      html: `${eq(m('∫ f(x) dx = F(x) + C   where  F′(x) = f(x)'), true)}
      <p>Read “the integral of ${m('f')} of ${m('x')}, dee ${m('x')}”. The ${m('∫')} sign is an
      elongated S, for <i>summa</i>; the ${m('dx')} says which letter is the variable. The ${m('+ C')}
      is part of the answer, not decoration.</p>
      <div class="warn"><span class="wl">${m('+ C')} is worth a mark, every time</span>
      An indefinite integral without its constant is an incomplete answer. It is the single most
      frequently lost mark in the whole of integration.</div>`
    },
    {
      h: 'The particular antiderivative',
      html: `<p>An initial condition picks one member of the family:</p>
      <p><b>Example.</b> Find ${m('F')} with ${m("F′(x) = 3x²")} and ${m('F(2) = 11')}.</p>
      ${eq(m('F(x) = x³ + C   ⇒   8 + C = 11   ⇒   C = 3   ⇒   F(x) = x³ + 3'), true)}
      <p>In physics this is how a motion is reconstructed: the acceleration gives the velocity up to a
      constant, which the initial velocity supplies; the velocity gives the displacement up to another
      constant, which the initial position supplies.</p>
      ${eq(m('a(t) = −10  ⇒  v(t) = −10t + v₀  ⇒  s(t) = −5t² + v₀t + s₀'), true)}
      <p>Every formula of Grade-9 kinematics is an antiderivative, taken twice.</p>`
    }
  ],
  examples: [
    {
      q: 'Find ' + m('∫ 4x³ dx') + '.',
      steps: [
        ['What differentiates to ' + m('4x³') + '?', ''],
        [m('(x⁴)′ = 4x³'), ''],
        ['Add the constant.', '']
      ],
      ans: m('x⁴ + C')
    },
    {
      q: 'Find the antiderivative of ' + m("f(x) = 6x² − 4x") + ' passing through ' + m('(1, 5)') + '.',
      steps: [
        [m('F(x) = 2x³ − 2x² + C'), 'Check: ' + m("F′ = 6x² − 4x") + ' ✓'],
        [m('F(1) = 2 − 2 + C = C'), ''],
        [m('C = 5'), '']
      ],
      ans: m('F(x) = 2x³ − 2x² + 5')
    },
    {
      q: 'A stone is dropped from 45 m. With ' + m('a = −10') + ' m/s², when does it land?',
      steps: [
        [m('v = −10t + 0'), 'Dropped, so ' + m('v₀ = 0') + '.'],
        [m('s = −5t² + 45'), m('s₀ = 45') + '.'],
        [m('−5t² + 45 = 0 ⇒ t² = 9'), ''],
        [m('t = 3') + ' s.', '']
      ],
      ans: m('t = 3') + ' s'
    }
  ],
  modelNote: 'Differentiate every answer on the board before moving on.',
  interactive: {
    type: 'derivative',
    title: 'Forwards and backwards',
    hint: 'Differentiate the answer and confirm you get the integrand.'
  },
  quiz: [
    { q: m('F') + ' is an antiderivative of ' + m('f') + ' when:', a: [m('F = f'), m("F′ = f"), m("f′ = F"), m('F + f = 0')], c: 1, why: 'Differentiating ' + m('F') + ' gives ' + m('f') + '.' },
    { q: m('∫ 2x dx') + ' is:', a: [m('x²'), m('x² + C'), m('2'), m('2x² + C')], c: 1, why: 'The constant is part of the answer.' },
    { q: 'Two antiderivatives of the same function differ by:', a: ['nothing', 'a constant', 'a linear term', 'anything'], c: 1, why: 'Their difference has zero derivative.' },
    { q: m('∫ 0 dx') + ' is:', a: [m('0'), m('C'), m('x'), 'undefined'], c: 1, why: 'Every constant works.' },
    { q: 'To fix ' + m('C') + ' you need:', a: ['nothing', 'one point on the curve', 'the derivative', 'two derivatives'], c: 1, why: 'It gives one equation for ' + m('C') + '.' }
  ],
  practice: {
    easy: [
      [m('∫ 2x dx'), m('x² + C')],
      [m('∫ 3x² dx'), m('x³ + C')],
      [m('∫ 1 dx'), m('x + C')],
      [m('∫ 5 dx'), m('5x + C')],
      [m('∫ 4x³ dx'), m('x⁴ + C')],
      [m('∫ 0 dx'), m('C')],
      ['Is ' + m('x² + 7') + ' an antiderivative of ' + m('2x') + '?', 'yes']
    ],
    med: [
      [m('∫ (6x² − 4x) dx'), m('2x³ − 2x² + C')],
      [m('∫ (x + 3) dx'), m(f('x²', '2') + ' + 3x + C')],
      [m('∫ (2x³ − x) dx'), m(f('x⁴', '2') + ' − ' + f('x²', '2') + ' + C')],
      ['Antiderivative of ' + m('6x² − 4x') + ' through ' + m('(1, 5)'), m('2x³ − 2x² + 5')],
      ['Antiderivative of ' + m('4x') + ' through ' + m('(2, 10)'), m('2x² + 2')],
      [m('a = −10') + ', ' + m('v₀ = 0') + ', ' + m('s₀ = 45') + '. Find ' + m('s(t)'), m('45 − 5t²')],
      ['When does that stone land?', m('t = 3') + ' s']
    ],
    hard: [
      ['Find ' + m('F') + ' with ' + m("F″(x) = 6x") + ', ' + m("F′(0) = 2") + ' and ' + m('F(0) = 1'), m('F(x) = x³ + 2x + 1')],
      ['Antiderivative of ' + m('(2x + 1)²') + ' — expand first', m(f('4x³', '3') + ' + 2x² + x + C')],
      ['A car decelerates at ' + m('4') + ' m/s² from ' + m('20') + ' m/s. How far before it stops?', m('50') + ' m'],
      ['Prove that two antiderivatives differ by a constant', m("(F − G)′ = 0") + ' on an interval'],
      ['Show no ' + m('f') + ' has ' + m("f′(x) = 3x²") + ' and ' + m('f(1) = f(−1)'), m('f = x³ + C') + ' gives ' + m('1 + C = −1 + C') + ', which is false'],
      ['Why must the interval be stated in the theorem?', 'On a disconnected domain the difference can jump'],
      [m('∫ (x + ' + f('1', 'x') + ')² dx') + ' — expand and integrate the powers', m(f('x³', '3') + ' + 2x − ' + f('1', 'x') + ' + C')]
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Differentiate every answer to check it, and never omit ' + m('+ C') + '.',
  homework: [
    'Find ' + m('∫ 5x⁴ dx') + ', ' + m('∫ (3x² + 2x) dx') + ' and ' + m('∫ (x − 4) dx') + '.',
    'Find the antiderivative of ' + m('8x³ − 6x') + ' passing through ' + m('(1, 0)') + '.',
    'Find ' + m('F') + ' with ' + m("F′(x) = 12x²") + ' and ' + m('F(2) = 40') + '.',
    'A ball is thrown up at ' + m('25') + ' m/s from ground level, with ' + m('a = −10') + '. Find ' + m('s(t)') + ' and the greatest height.',
    'Explain in three sentences why the answer to an indefinite integral is a family of curves.',
    'Show that ' + m('x² + 3') + ' and ' + m('x² − 8') + ' are both antiderivatives of ' + m('2x') + ', and state their difference.'
  ]
});

/* ============================== 16 ============================== */
G11_ALG.push({
  id: 'a11-16', stream: 'alg', grade: 11, quarter: 2, lessons: '41–46', hours: 6,
  title: 'The table of integrals and the rules of integration',
  subtitle: 'Six lessons on the standard integrals, the two linearity rules, and the one substitution that handles every bracket you will meet this year.',
  uz: 'Algebra 11, §2.4', uzPage: 'pp. 193–220',
  cam: 'P1 · 10.2–10.3', camPage: 'Pure Mathematics 1, pp. 203–212', wb: 'P1 Exercise 10B, 10C',
  objectives: [
    'Use the power rule for integration, including negative and fractional indices.',
    'Apply the constant-multiple and sum rules.',
    'Integrate (ax + b)ⁿ.',
    'Rewrite a quotient or a product into integrable form before integrating.'
  ],
  terms: [
    ['Table of integrals', 'Integrallar jadvali', 'Таблица интегралов'],
    ['Power rule for integration', 'Daraja integrallash qoidasi', 'Правило интегрирования степени'],
    ['Constant multiple rule', 'O‘zgarmas ko‘paytuvchi qoidasi', 'Правило постоянного множителя'],
    ['Sum rule', 'Yig‘indi qoidasi', 'Правило суммы'],
    ['Linear substitution', 'Chiziqli almashtirish', 'Линейная замена'],
    ['Integrable form', 'Integrallanuvchi shakl', 'Интегрируемый вид'],
    ['Reciprocal function', 'Teskari funksiya (1/x)', 'Обратная величина'],
    ['Exceptional case', 'Istisno hol', 'Особый случай'],
    ['Term by term', 'Hadma-had', 'Почленно']
  ],
  timing: [[20, 'The power rule'], [20, 'The exceptional case'], [30, 'Linearity'], [40, 'Rewriting first'], [40, 'The linear bracket'], [66, 'Practice and homework'], [54, 'Consolidation']],
  sections: [
    {
      h: 'The power rule',
      html: `${eq(m('∫ xⁿ dx = ' + f('x^(n+1)', 'n + 1') + ' + C ,   n ≠ −1'), true)}
      <p>Raise the index by one, divide by the new index. It is the power rule for differentiation
      read backwards, and the check is immediate: differentiating
      ${m(f('x^(n+1)', 'n + 1'))} gives ${m(f('(n+1)x^n', 'n + 1') + ' = xⁿ')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">f(x)</th><th class="m">∫ f(x) dx</th></tr></thead>
      <tbody>
        <tr><td class="m">x⁵</td><td class="m">${f('x⁶', '6')} + C</td></tr>
        <tr><td class="m">x</td><td class="m">${f('x²', '2')} + C</td></tr>
        <tr><td class="m">1</td><td class="m">x + C</td></tr>
        <tr><td class="m">${sr('x')} = x<sup>1/2</sup></td><td class="m">${f('2', '3')}x<sup>3/2</sup> + C</td></tr>
        <tr><td class="m">${f('1', 'x²')} = x⁻²</td><td class="m">−${f('1', 'x')} + C</td></tr>
        <tr><td class="m">${f('1', sr('x'))} = x<sup>−1/2</sup></td><td class="m">2${sr('x')} + C</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'The one exception',
      html: `<div class="warn"><span class="wl">${m('n = −1')} breaks the rule</span>
      ${m('∫ ' + f('1', 'x') + ' dx')} cannot be ${m(f('x⁰', '0'))} — the division is by zero. The answer
      is ${m('ln|x| + C')}, which comes from the logarithm, not from the power rule. At this stage,
      recognise the case and quote the result.</div>
      <p>Every other index, positive, negative or fractional, obeys the rule. The exception is a single
      value, and it is the one every examiner tests.</p>`
    },
    {
      h: 'Linearity',
      html: `${eq(m('∫ k f(x) dx = k ∫ f(x) dx') + '     ' + m('∫ [f(x) ± g(x)] dx = ∫ f dx ± ∫ g dx'), true)}
      <p>So a polynomial is integrated term by term, and one constant covers the whole answer:</p>
      ${eq(m('∫ (6x² − 4x + 5) dx = 2x³ − 2x² + 5x + C'), false)}
      <div class="warn"><span class="wl">There is no product or quotient rule for integration</span>
      ${m('∫ f · g dx')} is <b>not</b> ${m('∫f · ∫g')}. Test it on ${m('∫ x · x dx')}: the truth is
      ${m(f('x³', '3'))}, but ${m(f('x²', '2') + ' · ' + f('x²', '2') + ' = ' + f('x⁴', '4'))}.
      Products and quotients must first be <b>rewritten</b>.</div>`
    },
    {
      h: 'Rewriting first',
      html: `<p>Almost every integral at this level is done by turning the integrand into a sum of
      powers, then applying the rule:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Rewrite as</th><th>Integral</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('x³ + 2x', 'x')}</td><td class="m">x² + 2</td><td class="m">${f('x³', '3')} + 2x + C</td></tr>
        <tr><td class="m">x(x + 3)</td><td class="m">x² + 3x</td><td class="m">${f('x³', '3')} + ${f('3x²', '2')} + C</td></tr>
        <tr><td class="m">(2x − 1)²</td><td class="m">4x² − 4x + 1</td><td class="m">${f('4x³', '3')} − 2x² + x + C</td></tr>
        <tr><td class="m">${f('1', 'x³')}</td><td class="m">x⁻³</td><td class="m">−${f('1', '2x²')} + C</td></tr>
        <tr><td class="m">x${sr('x')}</td><td class="m">x<sup>3/2</sup></td><td class="m">${f('2', '5')}x<sup>5/2</sup> + C</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'The linear bracket',
      html: `<p>The chain rule run backwards gives one more standard result — enough for every bracket
      whose inside is <b>linear</b>:</p>
      ${eq(m('∫ (ax + b)ⁿ dx = ' + f('(ax + b)^(n+1)', 'a(n + 1)') + ' + C ,   n ≠ −1'), true)}
      <p>The extra ${m('a')} in the denominator undoes the ${m('a')} the chain rule would produce.
      Check ${m('∫ (3x + 1)⁴ dx = ' + f('(3x + 1)⁵', '15') + ' + C')} by differentiating:
      ${m(f('5(3x+1)⁴ · 3', '15') + ' = (3x + 1)⁴')} ✓.</p>
      <div class="warn"><span class="wl">Only when the inside is linear</span>
      ${m('∫ (x² + 1)⁴ dx')} cannot be done this way — the correction factor would have to be
      ${m('2x')}, which is not a constant. Expand it, or leave it for the next course.</div>`
    }
  ],
  examples: [
    {
      q: 'Find ' + m('∫ (4x³ − ' + f('6', 'x²') + ' + ' + sr('x') + ') dx') + '.',
      steps: [
        ['Rewrite: ' + m('4x³ − 6x⁻² + x^(1/2)') + '.', ''],
        [m('x⁴'), ''],
        [m('+ ' + f('6', 'x')), m('−6 · ' + f('x⁻¹', '−1')) + '.'],
        [m('+ ' + f('2', '3') + 'x^(3/2) + C'), '']
      ],
      ans: m('x⁴ + ' + f('6', 'x') + ' + ' + f('2', '3') + 'x' + sr('x') + ' + C')
    },
    {
      q: 'Find ' + m('∫ ' + f('x² − 3x', 'x') + ' dx') + '.',
      steps: [
        ['Divide first: ' + m('x − 3') + '.', 'No quotient rule exists.'],
        [m(f('x²', '2') + ' − 3x + C'), '']
      ],
      ans: m(f('x²', '2') + ' − 3x + C')
    },
    {
      q: 'Find ' + m('∫ (2x + 5)³ dx') + '.',
      steps: [
        ['Linear inside, so use the bracket rule.', m('a = 2, n = 3')],
        [m(f('(2x + 5)⁴', '2 × 4')), ''],
        [m('= ' + f('(2x + 5)⁴', '8') + ' + C'), 'Check by differentiating.']
      ],
      ans: m(f('(2x + 5)⁴', '8') + ' + C')
    }
  ],
  modelNote: 'Differentiate every answer aloud before writing the next question.',
  interactive: {
    type: 'quiz',
    title: 'Which rule, and what is the answer?',
    hint: 'Rewrite into powers, then apply the rule.',
    items: [
      { q: m('∫ x⁴ dx') + ':', a: [m('4x³ + C'), m(f('x⁵', '5') + ' + C'), m('x⁵ + C'), m(f('x³', '3') + ' + C')], c: 1, why: 'Index up, divide.' },
      { q: m('∫ ' + f('1', 'x²') + ' dx') + ':', a: [m('ln|x| + C'), m('−' + f('1', 'x') + ' + C'), m(f('1', 'x') + ' + C'), m('−2x⁻³ + C')], c: 1, why: m('x⁻² → ' + f('x⁻¹', '−1')) + '.' },
      { q: m('∫ ' + f('1', 'x') + ' dx') + ':', a: [m(f('x⁰', '0')), m('ln|x| + C'), m('0'), 'undefined'], c: 1, why: 'The exceptional case.' },
      { q: m('∫ (3x + 1)⁴ dx') + ':', a: [m(f('(3x+1)⁵', '5') + ' + C'), m(f('(3x+1)⁵', '15') + ' + C'), m('3(3x+1)⁵ + C'), m('(3x+1)⁵ + C')], c: 1, why: 'Divide by ' + m('a(n+1) = 15') + '.' },
      { q: m('∫ x · x dx') + ':', a: [m(f('x⁴', '4') + ' + C'), m(f('x³', '3') + ' + C'), m('x² + C'), m(f('x²', '2') + ' + C')], c: 1, why: 'Multiply first; there is no product rule.' },
      { q: m('∫ ' + sr('x') + ' dx') + ':', a: [m(f('2', '3') + 'x^(3/2) + C'), m(f('1', '2' + sr('x')) + ' + C'), m(f('3', '2') + 'x^(1/2) + C'), m('x^(3/2) + C')], c: 0, why: m('x^(1/2) → ' + f('x^(3/2)', '3/2')) + '.' }
    ]
  },
  quiz: [
    { q: 'The power rule for integration fails when:', a: [m('n = 0'), m('n = −1'), m('n = 1'), 'never'], c: 1, why: 'Division by zero.' },
    { q: m('∫ ' + f('1', 'x') + ' dx') + ' is:', a: [m('ln|x| + C'), m('−x⁻² + C'), m('0'), m('x + C')], c: 0, why: 'The logarithm.' },
    { q: 'Is there a product rule for integration?', a: ['yes', 'no', 'only for polynomials', 'only for powers'], c: 1, why: 'Rewrite instead.' },
    { q: m('∫ (ax + b)ⁿ dx') + ' divides by:', a: [m('n + 1'), m('a'), m('a(n + 1)'), m('an')], c: 2, why: 'Both corrections.' },
    { q: 'Before integrating ' + m(f('x³ + x', 'x')) + ' you should:', a: ['use a quotient rule', 'divide through', 'square it', 'nothing'], c: 1, why: 'It becomes ' + m('x² + 1') + '.' }
  ],
  practice: {
    easy: [
      [m('∫ x³ dx'), m(f('x⁴', '4') + ' + C')],
      [m('∫ x⁶ dx'), m(f('x⁷', '7') + ' + C')],
      [m('∫ 5 dx'), m('5x + C')],
      [m('∫ 2x dx'), m('x² + C')],
      [m('∫ (x + 1) dx'), m(f('x²', '2') + ' + x + C')],
      [m('∫ x⁻² dx'), m('−' + f('1', 'x') + ' + C')],
      [m('∫ ' + sr('x') + ' dx'), m(f('2', '3') + 'x^(3/2) + C')]
    ],
    med: [
      [m('∫ (3x² − 4x + 1) dx'), m('x³ − 2x² + x + C')],
      [m('∫ ' + f('1', 'x³') + ' dx'), m('−' + f('1', '2x²') + ' + C')],
      [m('∫ ' + f('1', sr('x')) + ' dx'), m('2' + sr('x') + ' + C')],
      [m('∫ x(x + 2) dx'), m(f('x³', '3') + ' + x² + C')],
      [m('∫ ' + f('x³ + 2x', 'x') + ' dx'), m(f('x³', '3') + ' + 2x + C')],
      [m('∫ (2x + 5)³ dx'), m(f('(2x+5)⁴', '8') + ' + C')],
      [m('∫ (1 − x)⁵ dx'), m('−' + f('(1−x)⁶', '6') + ' + C')]
    ],
    hard: [
      [m('∫ (2x − 1)² dx'), m(f('4x³', '3') + ' − 2x² + x + C')],
      [m('∫ x' + sr('x') + ' dx'), m(f('2', '5') + 'x^(5/2) + C')],
      [m('∫ (x + ' + f('1', 'x') + ')² dx'), m(f('x³', '3') + ' + 2x − ' + f('1', 'x') + ' + C')],
      [m('∫ ' + f('(x + 1)²', 'x²') + ' dx'), m('x + 2ln|x| − ' + f('1', 'x') + ' + C')],
      [m('∫ ' + f('1', '(3x − 2)²') + ' dx'), m('−' + f('1', '3(3x − 2)') + ' + C')],
      [m('∫ ' + sr('4x + 1') + ' dx'), m(f('(4x+1)^(3/2)', '6') + ' + C')],
      ['Why can ' + m('∫ (x² + 1)⁴ dx') + ' not use the bracket rule?', 'The inside is not linear']
    ]
  },
  hwTitle: 'Homework — 7 tasks',
  hwNote: 'Every answer differentiated back, and ' + m('+ C') + ' on every line.',
  homework: [
    'Find ' + m('∫ (5x⁴ − 3x² + 2) dx') + '.',
    'Find ' + m('∫ (' + sr('x') + ' + ' + f('1', 'x²') + ') dx') + '.',
    'Find ' + m('∫ ' + f('x⁴ − x', 'x²') + ' dx') + '.',
    'Find ' + m('∫ (3x − 4)⁵ dx') + '.',
    'Find ' + m('∫ (x + 2)(x − 3) dx') + '.',
    'Find ' + m('∫ ' + f('1', sr('2x + 1')) + ' dx') + '.',
    'Explain in three sentences why there is no product rule for integration, with an example.'
  ]
});

/* ============================== 17 ============================== */
G11_ALG.push({
  id: 'a11-17', stream: 'alg', grade: 11, quarter: 2, lessons: '47–48', hours: 2,
  title: 'Control work 4, and the quarter review',
  subtitle: 'The indefinite integral in one paper, and the map that joins approximation, modelling and integration.',
  uz: 'Algebra 11, Nazorat ishi 4', uzPage: 'pp. 221–224',
  cam: 'P1 · Chapter 10 review', camPage: 'Pure Mathematics 1, pp. 213–216', wb: 'Control paper D',
  objectives: [
    'Apply every technique of Quarter II in one assessment.',
    'Rewrite an integrand into integrable form without prompting.',
    'Build a concept map of the quarter.',
    'Set a personal target for Quarter III.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Concept map', 'Tushunchalar xaritasi', 'Карта понятий'],
    ['Integrable form', 'Integrallanuvchi shakl', 'Интегрируемый вид'],
    ['Constant of integration', 'Integrallash doimiysi', 'Постоянная интегрирования'],
    ['Initial condition', 'Boshlang‘ich shart', 'Начальное условие'],
    ['Self-assessment', 'O‘z-o‘zini baholash', 'Самооценка'],
    ['Target', 'Maqsad', 'Цель'],
    ['Revision', 'Takrorlash', 'Повторение']
  ],
  timing: [[3, 'Instructions'], [42, 'The paper'], [10, 'Answers'], [20, 'Rewrite'], [10, 'Concept map'], [5, 'Targets']],
  sections: [
    {
      h: 'The paper — 30 marks, 42 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Find ${m('∫ (6x² − ' + f('4', 'x²') + ' + 3' + sr('x') + ') dx')}</td><td class="m">5</td><td>L41–46</td></tr>
        <tr><td>2</td><td>Find ${m('∫ ' + f('x³ − 2x', 'x') + ' dx')} and ${m('∫ (4x − 3)⁵ dx')}</td><td class="m">5</td><td>L41–46</td></tr>
        <tr><td>3</td><td>Find ${m('F')} with ${m("F′(x) = 3x² − 2x")} and ${m('F(2) = 10')}</td><td class="m">4</td><td>L37–40</td></tr>
        <tr><td>4</td><td>Estimate ${m(sr('63'))} and give the percentage error in a cube’s volume from a 0.5% error in its side</td><td class="m">5</td><td>L28–30</td></tr>
        <tr><td>5</td><td>${m('s = t³ − 12t')}: find when the body is at rest and its acceleration then</td><td class="m">5</td><td>L31–34</td></tr>
        <tr><td>6</td><td>A cone of height 24 and top radius 8 fills at ${m('6')} cm³/s. Find ${m(f('dh', 'dt'))} at ${m('h = 12')}</td><td class="m">6</td><td>L31–34</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Three marks are for ${m('+ C')} and units</div>
      Q1, Q2 and Q3 each lose a mark without the constant; Q5 and Q6 each lose one without units.
      Four of the thirty marks are notation.</div>`
    },
    {
      h: 'The concept map',
      html: `<p>Six boxes, links as sentences:</p>
      <ul>
        <li><b>derivative</b> → <b>linear approximation</b> — “near ${m('a')} the tangent is the curve”</li>
        <li><b>derivative</b> → <b>rate of change</b> — “with units, in context”</li>
        <li><b>rate</b> → <b>connected rates</b> — “the chain rule links two rates”</li>
        <li><b>derivative</b> → <b>antiderivative</b> — “run the arrow backwards”</li>
        <li><b>antiderivative</b> → <b>${m('+ C')}</b> — “the derivative forgets the height”</li>
        <li><b>rules of differentiation</b> → <b>rules of integration</b> — “power up, divide; linearity survives; product does not”</li>
      </ul>
      {{fig:antiderivFamily:The picture behind two of the six boxes.}}`
    },
    {
      h: 'Looking forward',
      html: `<p>Quarter III opens with the definite integral and the Newton–Leibniz formula, which turns
      every antiderivative of this quarter into an area. Nothing new about integration itself is added
      first — what is added is a pair of limits and a subtraction.</p>
      <div class="keybox"><div class="klabel">One habit to carry forward</div>
      Rewrite before integrating. Roots into fractional indices, fractions into negative indices,
      products expanded, quotients divided through. The integral is then one line.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q1: ' + m('∫ (6x² − ' + f('4', 'x²') + ' + 3' + sr('x') + ') dx') + '.',
      steps: [
        ['Rewrite: ' + m('6x² − 4x⁻² + 3x^(1/2)') + '.', ''],
        [m('2x³'), ''],
        [m('+ ' + f('4', 'x')), m('−4 · ' + f('x⁻¹', '−1')) + '.'],
        [m('+ 2x^(3/2) + C'), m('3 · ' + f('2', '3')) + '.']
      ],
      ans: m('2x³ + ' + f('4', 'x') + ' + 2x' + sr('x') + ' + C')
    },
    {
      q: 'Model answer, Q6: cone, height 24, top radius 8, filling at ' + m('6') + ' cm³/s.',
      steps: [
        [m('r = ' + f('h', '3')), 'Similar triangles.'],
        [m('V = ' + f('1', '3') + 'π' + f('h²', '9') + 'h = ' + f('πh³', '27')), ''],
        [m(f('dV', 'dh') + ' = ' + f('πh²', '9') + ' = 16π') + ' at ' + m('h = 12') + '.', ''],
        [m(f('dh', 'dt') + ' = ' + f('6', '16π') + ' ≈ 0.119'), '']
      ],
      ans: m('≈ 0.12') + ' cm/s'
    },
    {
      q: 'Model answer, Q5: ' + m('s = t³ − 12t') + '.',
      steps: [
        [m('v = 3t² − 12 = 3(t − 2)(t + 2)'), ''],
        [m('t = 2') + ' (taking ' + m('t ≥ 0') + ').', ''],
        [m('a = 6t = 12'), '']
      ],
      ans: 'Rest at ' + m('t = 2') + ' s; ' + m('a = 12') + ' m/s²'
    }
  ],
  modelNote: 'Work Q1 and Q6 on the board, rewriting the integrand before touching it.',
  interactive: {
    type: 'quiz',
    title: 'The quarter in ten questions',
    hint: 'One from each block.',
    items: [
      { q: 'Estimate ' + m(sr('63')) + ':', a: [m('7.94'), m('7.9375'), m('7.8'), m('8.06')], c: 1, why: m('8 − ' + f('1', '16')) + '.' },
      { q: 'A 0.5% error in a side gives what error in the volume?', a: ['0.5%', '1%', '1.5%', '3%'], c: 2, why: 'Three times.' },
      { q: m('s = t³ − 12t') + ': rest at', a: [m('t = 2'), m('t = 4'), m('t = 12'), m('t = 0')], c: 0, why: m('3t² = 12') + '.' },
      { q: 'The acceleration there:', a: [m('6'), m('12'), m('24'), m('0')], c: 1, why: m('a = 6t') + '.' },
      { q: m('∫ 6x² dx') + ':', a: [m('12x + C'), m('2x³ + C'), m('6x³ + C'), m('3x³ + C')], c: 1, why: m(f('6x³', '3')) + '.' },
      { q: m('∫ ' + f('4', 'x²') + ' dx') + ':', a: [m('−' + f('4', 'x') + ' + C'), m(f('4', 'x') + ' + C'), m('4ln|x| + C'), m('−' + f('8', 'x³') + ' + C')], c: 0, why: m('4x⁻² → −4x⁻¹') + '.' },
      { q: m('∫ (4x − 3)⁵ dx') + ':', a: [m(f('(4x−3)⁶', '6') + ' + C'), m(f('(4x−3)⁶', '24') + ' + C'), m('4(4x−3)⁶ + C'), m('(4x−3)⁶ + C')], c: 1, why: 'Divide by ' + m('a(n+1) = 24') + '.' },
      { q: m("F′ = 3x² − 2x") + ', ' + m('F(2) = 10') + ' gives ' + m('C') + ':', a: [m('0'), m('6'), m('10'), m('−4')], c: 1, why: m('8 − 4 + C = 10') + '.' },
      { q: m('∫ ' + f('1', 'x') + ' dx') + ':', a: [m(f('x⁰', '0')), m('ln|x| + C'), m('0'), m('x + C')], c: 1, why: 'The exceptional case.' },
      { q: 'Cone height 24, radius 8, at ' + m('6') + ' cm³/s: ' + m(f('dh', 'dt')) + ' at ' + m('h = 12'), a: [m('0.12'), m('0.24'), m('1.2'), m('0.02')], c: 0, why: m(f('6', '16π')) + '.' }
    ]
  },
  quiz: [
    { q: 'The commonest lost mark in integration is:', a: ['a sign', m('+ C'), 'the index', 'the units'], c: 1, why: 'It is part of the answer.' },
    { q: 'Before integrating a quotient you should:', a: ['use a quotient rule', 'divide through', 'square it', 'differentiate'], c: 1, why: 'There is no quotient rule.' },
    { q: 'Quarter III begins with:', a: ['probability', 'the definite integral', 'complex numbers', 'vectors'], c: 1, why: 'And the Newton–Leibniz formula.' },
    { q: 'A connected-rate problem must first be reduced to:', a: ['two variables', 'one variable', 'three variables', 'a constant'], c: 1, why: 'Otherwise it cannot be differentiated.' }
  ],
  practice: {
    easy: [
      [m('∫ 6x² dx'), m('2x³ + C')],
      [m('∫ ' + f('4', 'x²') + ' dx'), m('−' + f('4', 'x') + ' + C')],
      [m('∫ 3' + sr('x') + ' dx'), m('2x^(3/2) + C')],
      ['Estimate ' + m(sr('63')), m('≈ 7.9375')],
      [m('s = t³ − 12t') + '; rest at', m('t = 2')],
      ['Acceleration there', m('12')],
      [m('∫ (4x − 3)⁵ dx'), m(f('(4x−3)⁶', '24') + ' + C')]
    ],
    med: [
      [m('∫ (6x² − ' + f('4', 'x²') + ' + 3' + sr('x') + ') dx'), m('2x³ + ' + f('4', 'x') + ' + 2x^(3/2) + C')],
      [m('∫ ' + f('x³ − 2x', 'x') + ' dx'), m(f('x³', '3') + ' − 2x + C')],
      [m('F') + ' with ' + m("F′ = 3x² − 2x") + ', ' + m('F(2) = 10'), m('x³ − x² + 6')],
      ['0.5% error in a side; error in the volume', m('1.5%')],
      ['Cone 24/8 at 6 cm³/s; ' + m(f('dh', 'dt')) + ' at ' + m('h = 12'), m('≈ 0.12') + ' cm/s'],
      [m('∫ (x + 3)(x − 1) dx'), m(f('x³', '3') + ' + x² − 3x + C')],
      ['Estimate ' + m('4.02³'), m('≈ 64.96')]
    ],
    hard: [
      [m('∫ ' + f('(x + 2)²', 'x²') + ' dx'), m('x + 4ln|x| − ' + f('4', 'x') + ' + C')],
      [m('∫ ' + sr('3x + 2') + ' dx'), m(f('2(3x+2)^(3/2)', '9') + ' + C')],
      [m('∫ ' + f('1', '(2x − 5)³') + ' dx'), m('−' + f('1', '4(2x−5)²') + ' + C')],
      ['Find ' + m('F') + ' with ' + m("F″ = 12x") + ', ' + m("F′(1) = 4") + ', ' + m('F(1) = 5'), m('2x³ − 2x + 5')],
      ['A trough fills at 0.6 m³/min; find ' + m(f('dh', 'dt')) + ' when the surface is 3 m² in area', m('0.2') + ' m/min'],
      ['A car decelerating at ' + m('5') + ' m/s² from ' + m('30') + ' m/s: stopping distance', m('90') + ' m'],
      ['Explain why ' + m('∫ (x² + 1)³ dx') + ' must be expanded', 'The bracket rule needs a linear inside']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Bring the concept map to the first lesson of Quarter III.',
  homework: [
    'Rewrite in full every control-work question that lost a mark.',
    'Finish the concept map with all six links written as sentences.',
    'Find ' + m('∫ (8x³ − ' + f('3', 'x²') + ' + 4' + sr('x') + ') dx') + ' and ' + m('∫ (5x + 2)⁴ dx') + '.',
    'Write your target for Quarter III in one checkable sentence, and date it.'
  ]
});
