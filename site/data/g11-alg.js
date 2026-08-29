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
