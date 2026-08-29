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

/* ===================== QUARTER III (30 hours) ===================== */

/* ============================== 18 ============================== */
G11_ALG.push({
  id: 'a11-18', stream: 'alg', grade: 11, quarter: 3, lessons: '49–51', hours: 3,
  title: 'The definite integral and the Newton–Leibniz formula',
  subtitle: 'Two limits on the integral sign, one subtraction — and the theorem that makes area computable.',
  uz: 'Algebra 11, §3.1', uzPage: 'pp. 225–242',
  cam: 'P1 · 10.4', camPage: 'Pure Mathematics 1, pp. 217–226', wb: 'P1 Exercise 10D',
  objectives: [
    'Interpret the definite integral as a limit of a sum of rectangles.',
    'State and apply the Newton–Leibniz formula.',
    'Use the properties of the definite integral.',
    'Explain why the constant of integration cancels.'
  ],
  terms: [
    ['Definite integral', 'Aniq integral', 'Определённый интеграл'],
    ['Limits of integration', 'Integrallash chegaralari', 'Пределы интегрирования'],
    ['Lower limit', 'Quyi chegara', 'Нижний предел'],
    ['Upper limit', 'Yuqori chegara', 'Верхний предел'],
    ['Newton–Leibniz formula', 'Nyuton–Leybnits formulasi', 'Формула Ньютона–Лейбница'],
    ['Integral sum', 'Integral yig‘indi', 'Интегральная сумма'],
    ['Area under a curve', 'Egri chiziq ostidagi yuza', 'Площадь под кривой'],
    ['Additivity', 'Additivlik', 'Аддитивность'],
    ['Sign of the integral', 'Integral ishorasi', 'Знак интеграла']
  ],
  timing: [[18, 'Area as a limit of rectangles'], [26, 'The Newton–Leibniz formula'], [26, 'Properties'], [26, 'Signed area'], [30, 'Practice'], [9, 'Homework']],
  sections: [
    {
      h: 'Area as a limit of rectangles',
      html: `<p>To find the area under ${m('y = f(x)')} between ${m('a')} and ${m('b')}, cut the interval
      into ${m('n')} strips, replace each strip by a rectangle, and add:</p>
      ${eq(m('S_n = Σ f(x_i) · Δx'), true)}
      {{fig:areaUnderCurve:Seven rectangles already approximate the area. Take more and thinner, and the error vanishes.}}
      <p>As ${m('n → ∞')} and every ${m('Δx → 0')}, the sum tends to a definite number — the
      <b>definite integral</b>:</p>
      ${eq(m('∫') + '<sub class="m">a</sub><sup class="m">b</sup> ' + m('f(x) dx = lim') + '<sub class="m">n→∞</sub> ' + m('Σ f(x_i)Δx'), true)}
      <div class="keybox"><div class="klabel">Two different objects, one symbol</div>
      The <b>indefinite</b> integral is a family of functions. The <b>definite</b> integral is a
      <b>number</b>. They are joined by the theorem below, and that link is the central result of the
      whole subject.</div>`
    },
    {
      h: 'The Newton–Leibniz formula',
      html: `<div class="keybox"><div class="klabel">The fundamental theorem</div>
      If ${m('F')} is any antiderivative of ${m('f')} on ${m('[a, b]')} then
      ${eq(m('∫') + '<sub class="m">a</sub><sup class="m">b</sup> ' + m('f(x) dx = F(b) − F(a)'), true)}
      written ${m('[F(x)]')}<sub class="m">a</sub><sup class="m">b</sup>.</div>
      <p>Nothing about limits of sums survives in the calculation: find an antiderivative, put in the
      two numbers, subtract.</p>
      ${eq(m('∫') + '<sub class="m">0</sub><sup class="m">2</sup> ' + m('x² dx = [' + f('x³', '3') + ']') + '<sub class="m">0</sub><sup class="m">2</sup> ' + m('= ' + f('8', '3') + ' − 0 = ' + f('8', '3')), false)}
      <div class="warn"><span class="wl">No ${m('+ C')} in a definite integral</span>
      The constant cancels: ${m('(F(b) + C) − (F(a) + C) = F(b) − F(a)')}. Writing it is not wrong, but
      carrying it through is wasted work — and writing it in the <b>answer</b> is a mistake, because the
      answer is a number.</div>`
    },
    {
      h: 'Properties',
      html: `${eq(m('∫') + '<sub class="m">a</sub><sup class="m">a</sup> ' + m('f = 0') + '     ' + m('∫') + '<sub class="m">a</sub><sup class="m">b</sup> ' + m('f = −∫') + '<sub class="m">b</sub><sup class="m">a</sup> ' + m('f'), true)}
      ${eq(m('∫') + '<sub class="m">a</sub><sup class="m">b</sup> ' + m('(f ± g) = ∫') + '<sub class="m">a</sub><sup class="m">b</sup> ' + m('f ± ∫') + '<sub class="m">a</sub><sup class="m">b</sup> ' + m('g'), false)}
      ${eq(m('∫') + '<sub class="m">a</sub><sup class="m">b</sup> ' + m('f = ∫') + '<sub class="m">a</sub><sup class="m">c</sup> ' + m('f + ∫') + '<sub class="m">c</sub><sup class="m">b</sup> ' + m('f'), true)}
      <p>The last is <b>additivity</b>: an interval may be split at any interior point, and the parts
      add. It is what allows a curve crossing the axis to be handled piece by piece.</p>`
    },
    {
      h: 'Signed area',
      html: `<div class="warn"><span class="wl">The integral is a signed area</span>
      Where the curve is <b>below</b> the axis, ${m('f(x) < 0')} and the contribution is negative.
      ${m('∫')}<sub class="m">0</sub><sup class="m">2π</sup> ${m('sin x dx = 0')} — not because there is
      no area, but because the two halves cancel.</div>
      <p>So “find the integral” and “find the area” are different questions:</p>
      <ol>
        <li><b>Integral:</b> compute it directly, signs and all.</li>
        <li><b>Area:</b> find the zeros of ${m('f')} in ${m('[a, b]')}, integrate over each piece
        separately, and add the <b>absolute values</b>.</li>
      </ol>
      <p>For ${m('y = x³')} on ${m('[−1, 1]')}: the integral is ${m('0')}, but the area is
      ${m(f('1', '4') + ' + ' + f('1', '4') + ' = ' + f('1', '2'))}.</p>`
    }
  ],
  examples: [
    {
      q: 'Evaluate ' + m('∫') + '<sub class="m">1</sub><sup class="m">3</sup> ' + m('(2x + 1) dx') + '.',
      steps: [
        [m('F(x) = x² + x'), ''],
        [m('F(3) = 12') + ', ' + m('F(1) = 2') + '.', ''],
        [m('12 − 2 = 10'), '']
      ],
      ans: m('10')
    },
    {
      q: 'Evaluate ' + m('∫') + '<sub class="m">1</sub><sup class="m">4</sup> ' + m(f('1', sr('x')) + ' dx') + '.',
      steps: [
        ['Rewrite as ' + m('x^(−1/2)') + '.', ''],
        [m('F(x) = 2' + sr('x')), ''],
        [m('2(2) − 2(1) = 2'), '']
      ],
      ans: m('2')
    },
    {
      q: 'Find the area between ' + m('y = x³') + ' and the ' + m('x') + '-axis on ' + m('[−1, 1]') + '.',
      steps: [
        ['The curve crosses at ' + m('x = 0') + '.', 'Split there.'],
        [m('∫') + '<sub class="m">−1</sub><sup class="m">0</sup>' + m(' = −' + f('1', '4')), ''],
        [m('∫') + '<sub class="m">0</sub><sup class="m">1</sup>' + m(' = ' + f('1', '4')), ''],
        ['Add the absolute values.', '']
      ],
      ans: m(f('1', '2'))
    }
  ],
  modelNote: 'Increase the number of rectangles and watch the estimate settle on the exact value.',
  interactive: {
    type: 'optimise',
    title: 'Rectangles filling an area',
    hint: 'More, thinner rectangles approach the exact value.'
  },
  quiz: [
    { q: 'A definite integral is:', a: ['a family of functions', 'a number', 'a derivative', 'an equation'], c: 1, why: 'The limits make it definite.' },
    { q: 'The Newton–Leibniz formula gives:', a: [m('F(a) − F(b)'), m('F(b) − F(a)'), m('F(b) + F(a)'), m("F′(b)")], c: 1, why: 'Upper minus lower.' },
    { q: 'The constant of integration in a definite integral:', a: ['must be included', 'cancels', 'doubles', 'is the answer'], c: 1, why: 'It appears twice with opposite signs.' },
    { q: m('∫') + '<sub class="m">a</sub><sup class="m">a</sup>' + m('f') + ' equals:', a: [m('f(a)'), m('0'), m('F(a)'), 'undefined'], c: 1, why: 'No interval.' },
    { q: 'Below the axis the integral contributes:', a: ['positively', 'negatively', 'nothing', 'twice'], c: 1, why: 'It is a signed area.' }
  ],
  practice: {
    easy: [
      [m('∫') + '<sub class="m">0</sub><sup class="m">2</sup>' + m(' x dx'), m('2')],
      [m('∫') + '<sub class="m">0</sub><sup class="m">3</sup>' + m(' 2 dx'), m('6')],
      [m('∫') + '<sub class="m">0</sub><sup class="m">1</sup>' + m(' x² dx'), m(f('1', '3'))],
      [m('∫') + '<sub class="m">1</sub><sup class="m">2</sup>' + m(' 3x² dx'), m('7')],
      [m('∫') + '<sub class="m">2</sub><sup class="m">2</sup>' + m(' x⁵ dx'), m('0')],
      [m('∫') + '<sub class="m">0</sub><sup class="m">4</sup>' + m(' ' + sr('x') + ' dx'), m(f('16', '3'))],
      ['Does a definite integral need ' + m('+ C') + '?', 'no']
    ],
    med: [
      [m('∫') + '<sub class="m">1</sub><sup class="m">3</sup>' + m(' (2x + 1) dx'), m('10')],
      [m('∫') + '<sub class="m">1</sub><sup class="m">4</sup>' + m(' ' + f('1', sr('x')) + ' dx'), m('2')],
      [m('∫') + '<sub class="m">0</sub><sup class="m">2</sup>' + m(' (x² − 3x) dx'), m('−' + f('10', '3'))],
      [m('∫') + '<sub class="m">1</sub><sup class="m">2</sup>' + m(' ' + f('1', 'x²') + ' dx'), m(f('1', '2'))],
      [m('∫') + '<sub class="m">−1</sub><sup class="m">1</sup>' + m(' x³ dx'), m('0')],
      ['Area between ' + m('y = x³') + ' and the axis on ' + m('[−1, 1]'), m(f('1', '2'))],
      [m('∫') + '<sub class="m">0</sub><sup class="m">1</sup>' + m(' (3x² + 2x) dx'), m('2')]
    ],
    hard: [
      [m('∫') + '<sub class="m">1</sub><sup class="m">2</sup>' + m(' ' + f('x² + 1', 'x²') + ' dx'), m(f('3', '2'))],
      [m('∫') + '<sub class="m">0</sub><sup class="m">1</sup>' + m(' (2x + 1)³ dx'), m('10')],
      ['Area between ' + m('y = x² − 4') + ' and the axis on ' + m('[0, 3]'), m(f('23', '3'))],
      ['Find ' + m('k') + ' with ' + m('∫') + '<sub class="m">0</sub><sup class="m">k</sup>' + m(' x dx = 8'), m('k = 4')],
      ['Find ' + m('k') + ' with ' + m('∫') + '<sub class="m">1</sub><sup class="m">k</sup>' + m(' ' + f('1', 'x²') + ' dx = ' + f('1', '2')), m('k = 2')],
      ['Explain why ' + m('∫') + '<sub class="m">0</sub><sup class="m">2π</sup>' + m(' sin x dx = 0'), 'The halves cancel'],
      ['Show ' + m('∫') + '<sub class="m">a</sub><sup class="m">b</sup>' + m(' f = ∫') + '<sub class="m">a</sub><sup class="m">c</sup>' + m(' f + ∫') + '<sub class="m">c</sub><sup class="m">b</sup>' + m(' f'), 'Both equal ' + m('F(b) − F(a)')]
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Write the square brackets with the limits on every answer.',
  homework: [
    'Evaluate ' + m('∫') + '<sub class="m">0</sub><sup class="m">3</sup>' + m(' (x² + 2x) dx') + '.',
    'Evaluate ' + m('∫') + '<sub class="m">1</sub><sup class="m">9</sup>' + m(' ' + f('1', sr('x')) + ' dx') + '.',
    'Evaluate ' + m('∫') + '<sub class="m">1</sub><sup class="m">3</sup>' + m(' ' + f('1', 'x²') + ' dx') + '.',
    'Find the area between ' + m('y = x² − 1') + ' and the axis on ' + m('[0, 2]') + '.',
    'Find ' + m('k') + ' with ' + m('∫') + '<sub class="m">0</sub><sup class="m">k</sup>' + m(' 3x² dx = 27') + '.',
    'Explain in three sentences why the constant of integration cancels in a definite integral.'
  ]
});

/* ============================== 19 ============================== */
G11_ALG.push({
  id: 'a11-19', stream: 'alg', grade: 11, quarter: 3, lessons: '52–54', hours: 3,
  title: 'Applications of the definite integral',
  subtitle: 'Areas between curves, volumes of revolution, distance from velocity — one integral, four questions.',
  uz: 'Algebra 11, §3.2', uzPage: 'pp. 243–260',
  cam: 'P1 · 10.5–10.7', camPage: 'Pure Mathematics 1, pp. 227–240', wb: 'P1 Exercise 10E, 10F',
  objectives: [
    'Find the area between a curve and the x-axis, taking sign into account.',
    'Find the area between two curves.',
    'Find a volume of revolution about the x-axis.',
    'Recover distance from velocity and velocity from acceleration.'
  ],
  terms: [
    ['Area between curves', 'Egri chiziqlar orasidagi yuza', 'Площадь между кривыми'],
    ['Upper and lower curve', 'Yuqori va quyi egri chiziq', 'Верхняя и нижняя кривая'],
    ['Point of intersection', 'Kesishish nuqtasi', 'Точка пересечения'],
    ['Volume of revolution', 'Aylanish jismi hajmi', 'Объём тела вращения'],
    ['Axis of revolution', 'Aylanish o‘qi', 'Ось вращения'],
    ['Distance travelled', 'Bosib o‘tilgan yo‘l', 'Пройденный путь'],
    ['Displacement', 'Ko‘chish', 'Перемещение'],
    ['Signed area', 'Ishorali yuza', 'Площадь со знаком'],
    ['Integrand', 'Integral ostidagi funksiya', 'Подынтегральная функция']
  ],
  timing: [[20, 'Area with the axis'], [30, 'Area between two curves'], [30, 'Volumes of revolution'], [26, 'Motion'], [30, 'Practice'], [9, 'Homework']],
  sections: [
    {
      h: 'Area with the axis',
      html: `<div class="keybox"><div class="klabel">The routine</div>
      <b>1</b> Find where the curve meets the axis inside the interval. <b>2</b> Integrate over each
      piece. <b>3</b> Add the <b>absolute values</b>.</div>
      <p>Skipping step 1 is the standard error: a curve that dips below the axis returns a partial
      cancellation instead of an area.</p>
      ${eq('area ' + m('= |∫') + '<sub class="m">a</sub><sup class="m">c</sup>' + m(' f| + |∫') + '<sub class="m">c</sub><sup class="m">b</sup>' + m(' f|') + '   where ' + m('f(c) = 0'), true)}`
    },
    {
      h: 'Area between two curves',
      html: `${eq('area ' + m('= ∫') + '<sub class="m">a</sub><sup class="m">b</sup>' + m(' (upper − lower) dx'), true)}
      {{fig:areaBetween:Upper minus lower, integrated between the two crossing points.}}
      <p>The limits ${m('a')} and ${m('b')} are the ${m('x')}-coordinates where the curves cross, found
      by solving ${m('f(x) = g(x)')} first.</p>
      <p><b>Example.</b> ${m('y = 2x')} and ${m('y = x²')} meet at ${m('x = 0')} and ${m('x = 2')}.
      Between them the line is above:</p>
      ${eq(m('∫') + '<sub class="m">0</sub><sup class="m">2</sup>' + m(' (2x − x²) dx = [x² − ' + f('x³', '3') + ']') + '<sub class="m">0</sub><sup class="m">2</sup>' + m(' = 4 − ' + f('8', '3') + ' = ' + f('4', '3')), false)}
      <div class="keybox"><div class="klabel">Why the sign takes care of itself</div>
      Because ${m('upper − lower')} is positive throughout, the integral is the area directly — even if
      both curves are below the axis. That is why this method is safer than integrating each separately.</div>`
    },
    {
      h: 'Volumes of revolution',
      html: `<p>Rotate the region under ${m('y = f(x)')} between ${m('a')} and ${m('b')} about the
      ${m('x')}-axis. Each thin strip becomes a disc of radius ${m('y')} and thickness ${m('dx')}:</p>
      ${eq(m('V = π ∫') + '<sub class="m">a</sub><sup class="m">b</sup>' + m(' y² dx'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Curve</th><th>Interval</th><th>Solid</th><th>Volume</th></tr></thead>
      <tbody>
        <tr><td class="m">y = r</td><td class="m">[0, h]</td><td>cylinder</td><td class="m">πr²h</td></tr>
        <tr><td class="m">y = ${f('r', 'h')}x</td><td class="m">[0, h]</td><td>cone</td><td class="m">${f('1', '3')}πr²h</td></tr>
        <tr><td class="m">y = ${sr('r² − x²')}</td><td class="m">[−r, r]</td><td>sphere</td><td class="m">${f('4', '3')}πr³</td></tr>
      </tbody></table></div>
      <p>Every volume formula of Grade 11 geometry is one of these integrals. The ${m(f('1', '3'))} in
      the cone is ${m('∫x² dx')}; the ${m(f('4', '3'))} in the sphere is
      ${m('∫(r² − x²) dx')} over ${m('[−r, r]')}.</p>
      <div class="warn"><span class="wl">Square the ${m('y')}, do not square the integral</span>
      ${m('π∫y² dx')}, not ${m('π(∫y dx)²')}. The two differ completely.</div>`
    },
    {
      h: 'Motion',
      html: `${eq(m('s = ∫ v dt') + '     ' + m('v = ∫ a dt'), true)}
      <p>Integration undoes the differentiation of Quarter I. With limits it gives a definite answer:</p>
      ${eq('displacement ' + m('= ∫') + '<sub class="m">t₁</sub><sup class="m">t₂</sup>' + m(' v dt') + '     distance ' + m('= ∫') + '<sub class="m">t₁</sub><sup class="m">t₂</sup>' + m(' |v| dt'), true)}
      <div class="warn"><span class="wl">Displacement is not distance, again</span>
      If ${m('v')} changes sign in the interval, split at that instant and add the absolute values —
      exactly as for area. It is the same theorem wearing different words.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the area between ' + m('y = 2x') + ' and ' + m('y = x²') + '.',
      steps: [
        [m('2x = x² ⇒ x = 0, 2'), 'The limits.'],
        ['The line is above between them.', ''],
        [m('∫') + '<sub class="m">0</sub><sup class="m">2</sup>' + m('(2x − x²) dx'), ''],
        [m('= 4 − ' + f('8', '3') + ' = ' + f('4', '3')), '']
      ],
      ans: m(f('4', '3'))
    },
    {
      q: 'The region under ' + m('y = ' + sr('x')) + ' from ' + m('0') + ' to ' + m('4') + ' is rotated about the ' + m('x') + '-axis. Find the volume.',
      steps: [
        [m('y² = x'), ''],
        [m('V = π∫') + '<sub class="m">0</sub><sup class="m">4</sup>' + m(' x dx'), ''],
        [m('= π[' + f('x²', '2') + ']') + '<sub class="m">0</sub><sup class="m">4</sup>', ''],
        [m('= 8π'), '']
      ],
      ans: m('8π') + ' ≈ ' + m('25.1')
    },
    {
      q: 'A body has ' + m('v = 3t² − 12t') + ' m/s. Find the distance travelled in the first 5 s.',
      steps: [
        [m('v = 3t(t − 4)') + ', zero at ' + m('t = 0, 4') + '.', 'Split at 4.'],
        [m('∫') + '<sub class="m">0</sub><sup class="m">4</sup>' + m(' v dt = [t³ − 6t²] = −32'), ''],
        [m('∫') + '<sub class="m">4</sub><sup class="m">5</sup>' + m(' v dt = (125 − 150) − (−32) = 7'), ''],
        [m('32 + 7'), '']
      ],
      ans: m('39') + ' m'
    }
  ],
  modelNote: 'Sketch the two curves and shade the region before writing any integral.',
  interactive: {
    type: 'optimise',
    title: 'Area under a curve',
    hint: 'Change the limits and watch the area.'
  },
  quiz: [
    { q: 'The area between two curves is:', a: [m('∫f + ∫g'), m('∫(upper − lower)'), m('∫|f|'), m('∫f · g')], c: 1, why: 'The vertical gap, integrated.' },
    { q: 'The limits come from:', a: ['the question always', 'solving ' + m('f = g'), 'the axis', 'guessing'], c: 1, why: 'The crossing points.' },
    { q: 'A volume of revolution about ' + m('Ox') + ' is:', a: [m('π∫y dx'), m('π∫y² dx'), m('(π∫y dx)²'), m('∫y² dx')], c: 1, why: 'Discs of radius ' + m('y') + '.' },
    { q: 'Distance from velocity is:', a: [m('∫v dt'), m('∫|v| dt'), m("v′"), m('∫v² dt')], c: 1, why: 'Direction changes must be counted positively.' },
    { q: 'A curve dipping below the axis needs:', a: ['nothing special', 'splitting at the zeros', 'squaring', 'doubling'], c: 1, why: 'Otherwise the parts cancel.' }
  ],
  practice: {
    easy: [
      ['Area under ' + m('y = x') + ' from 0 to 4', m('8')],
      ['Area under ' + m('y = x²') + ' from 0 to 3', m('9')],
      ['Area under ' + m('y = 2') + ' from 1 to 5', m('8')],
      ['Volume from ' + m('y = 2') + ' on ' + m('[0, 3]') + ' about ' + m('Ox'), m('12π')],
      ['Volume from ' + m('y = x') + ' on ' + m('[0, 3]'), m('9π')],
      [m('v = 4') + '; distance in 6 s', m('24') + ' m'],
      [m('v = 2t') + '; distance in 3 s', m('9') + ' m']
    ],
    med: [
      ['Area between ' + m('y = 2x') + ' and ' + m('y = x²'), m(f('4', '3'))],
      ['Area between ' + m('y = x') + ' and ' + m('y = x²'), m(f('1', '6'))],
      ['Area between ' + m('y = 4 − x²') + ' and the axis', m(f('32', '3'))],
      ['Volume from ' + m('y = ' + sr('x')) + ' on ' + m('[0, 4]'), m('8π')],
      ['Volume from ' + m('y = x²') + ' on ' + m('[0, 2]'), m(f('32π', '5'))],
      [m('v = 3t² − 12t') + '; distance in the first 5 s', m('39') + ' m'],
      ['Same; the displacement', m('−25') + ' m']
    ],
    hard: [
      ['Area between ' + m('y = x²') + ' and ' + m('y = x³'), m(f('1', '12'))],
      ['Area between ' + m('y = x² − 4') + ' and ' + m('y = 5'), m('36')],
      ['Volume from ' + m('y = ' + f('r', 'h') + 'x') + ' on ' + m('[0, h]'), m(f('1', '3') + 'πr²h')],
      ['Volume from ' + m('y = ' + sr('r² − x²')) + ' on ' + m('[−r, r]'), m(f('4', '3') + 'πr³')],
      ['Area enclosed by ' + m('y = x³ − x'), m(f('1', '2'))],
      [m('a = 6t') + ', ' + m('v(0) = 0') + ', ' + m('s(0) = 2') + '. Find ' + m('s(3)'), m('29')],
      ['Volume from ' + m('y = ' + f('1', 'x')) + ' on ' + m('[1, 3]') + ' about ' + m('Ox'), m(f('2π', '3'))]
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Sketch and shade before every integral; find the limits before writing them.',
  homework: [
    'Find the area between ' + m('y = 3x') + ' and ' + m('y = x²') + '.',
    'Find the area between ' + m('y = 9 − x²') + ' and the ' + m('x') + '-axis.',
    'Find the volume when the region under ' + m('y = x') + ' on ' + m('[0, 4]') + ' is rotated about ' + m('Ox') + '.',
    'Find the volume when the region under ' + m('y = ' + sr('4 − x²')) + ' on ' + m('[−2, 2]') + ' is rotated about ' + m('Ox') + ', and name the solid.',
    'A body has ' + m('v = t² − 4t') + ' m/s. Find the displacement and the distance in the first 6 s.',
    'Explain in three sentences why “upper minus lower” needs no absolute value.'
  ]
});

/* ============================== 20 ============================== */
G11_ALG.push({
  id: 'a11-20', stream: 'alg', grade: 11, quarter: 3, lessons: '55–57', hours: 3,
  title: 'The trapezium rule',
  subtitle: 'Cambridge insert: what to do when the antiderivative does not exist — and how to judge the error.',
  uz: 'Algebra 11, §3.2 (extension)', uzPage: 'pp. 261–268',
  cam: 'P2 · 5.7', camPage: 'Pure Mathematics 2 & 3, pp. 108–116', wb: 'P2 Exercise 5E',
  objectives: [
    'State and apply the trapezium rule with n strips.',
    'Decide whether the estimate is an over- or an under-estimate.',
    'Improve an estimate by doubling the number of strips.',
    'Use the rule on data given only as a table.'
  ],
  terms: [
    ['Trapezium rule', 'Trapetsiya usuli', 'Метод трапеций'],
    ['Strip', 'Bo‘lak', 'Полоса'],
    ['Ordinate', 'Ordinata', 'Ордината'],
    ['Strip width h', 'Bo‘lak kengligi', 'Шаг'],
    ['Over-estimate', 'Ortiqcha baho', 'Оценка с избытком'],
    ['Under-estimate', 'Kam baho', 'Оценка с недостатком'],
    ['Concave up', 'Yuqoriga qavariq', 'Выпуклая вниз'],
    ['Numerical integration', 'Sonli integrallash', 'Численное интегрирование'],
    ['Accuracy', 'Aniqlik', 'Точность']
  ],
  timing: [[18, 'Why a numerical method'], [28, 'The rule'], [28, 'Over or under?'], [26, 'Improving the estimate'], [30, 'Practice'], [5, 'Homework']],
  sections: [
    {
      h: 'Why a numerical method',
      html: `<p>Not every function has an antiderivative that can be written down. ${m('∫ ' + sr('1 + x³') + ' dx')}
      and ${m('∫ 2^(x²) dx')} exist as areas but have no elementary formula. And data collected by
      measurement has no formula at all.</p>
      <div class="keybox"><div class="klabel">The idea</div>
      Replace the curve on each strip by the <b>straight line</b> joining its ends. Each strip becomes a
      trapezium, whose area is elementary.</div>
      {{fig:trapeziumRule:Straight tops, not flat ones. Four strips already fit closely.}}`
    },
    {
      h: 'The rule',
      html: `${eq(m('∫') + '<sub class="m">a</sub><sup class="m">b</sup>' + m(' y dx ≈ ' + f('h', '2') + '[y₀ + y_n + 2(y₁ + y₂ + … + y_(n−1))]'), true)}
      <p>with ${m('h = ' + f('b − a', 'n'))}. The <b>end</b> ordinates count once; every <b>interior</b>
      ordinate counts twice, because it is the right edge of one trapezium and the left edge of the
      next.</p>
      <div class="warn"><span class="wl">${m('n')} strips means ${m('n + 1')} ordinates</span>
      Four strips need five values of ${m('y')}. Counting the strips as ordinates is the commonest
      arithmetic error, and it makes ${m('h')} wrong as well.</div>
      <p><b>Example.</b> ${m('∫')}<sub class="m">0</sub><sup class="m">4</sup>${m(' x² dx')} with
      ${m('4')} strips: ${m('h = 1')}, ordinates ${m('0, 1, 4, 9, 16')}.</p>
      ${eq(m(f('1', '2') + '[0 + 16 + 2(1 + 4 + 9)] = ' + f('1', '2') + '(16 + 28) = 22'), false)}
      <p>The exact value is ${m(f('64', '3') + ' ≈ 21.33')}. The estimate is high, and the next section
      says why that was predictable.</p>`
    },
    {
      h: 'Over or under?',
      html: `<div class="keybox"><div class="klabel">The rule of thumb</div>
      Where the curve is <b>concave up</b> (bending upwards, ${m("f″ > 0")}), the chord lies <b>above</b>
      the curve, so the trapezium rule <b>over-estimates</b>. Where it is concave down, it
      under-estimates.</div>
      <p>${m('y = x²')} is concave up everywhere, so ${m('22 > 21.33')} — exactly as predicted. This is
      a real mark in the examination: “state, with a reason, whether your estimate is an over- or an
      under-estimate.”</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Curve on ${m('[a, b]')}</th><th>Shape</th><th>Estimate</th></tr></thead>
      <tbody>
        <tr><td class="m">y = x²</td><td>concave up</td><td>over</td></tr>
        <tr><td class="m">y = ${sr('x')}</td><td>concave down</td><td>under</td></tr>
        <tr><td class="m">y = ${f('1', 'x')}, x > 0</td><td>concave up</td><td>over</td></tr>
        <tr><td class="m">y = x³, x > 0</td><td>concave up</td><td>over</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'Improving the estimate',
      html: `<p>Halving ${m('h')} — doubling the number of strips — divides the error by about
      <b>four</b>. The error is proportional to ${m('h²')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Strips</th><th class="m">h</th><th>Estimate of ${m('∫')}<sub class="m">0</sub><sup class="m">4</sup>${m('x² dx')}</th><th>Error</th></tr></thead>
      <tbody>
        <tr><td class="m">2</td><td class="m">2</td><td class="m">24</td><td class="m">2.67</td></tr>
        <tr><td class="m">4</td><td class="m">1</td><td class="m">22</td><td class="m">0.67</td></tr>
        <tr><td class="m">8</td><td class="m">0.5</td><td class="m">21.5</td><td class="m">0.17</td></tr>
      </tbody></table></div>
      <p>Each doubling quarters the error — visible in the last column. The pattern is what tells a
      computer when to stop.</p>
      <p><b>From a table.</b> When the data is measured rather than given by a formula, the rule applies
      unchanged: it needs only equally spaced ordinates, and never the formula itself.</p>`
    }
  ],
  examples: [
    {
      q: 'Estimate ' + m('∫') + '<sub class="m">0</sub><sup class="m">4</sup>' + m(' x² dx') + ' with 4 strips.',
      steps: [
        [m('h = 1') + '; ordinates ' + m('0, 1, 4, 9, 16') + '.', 'Five of them.'],
        [m(f('1', '2') + '[0 + 16 + 2(1 + 4 + 9)]'), ''],
        [m('= ' + f('1', '2') + '(44) = 22'), ''],
        ['Concave up, so an over-estimate.', 'Exact ' + m('21.33') + '.']
      ],
      ans: m('22') + ', an over-estimate'
    },
    {
      q: 'Estimate ' + m('∫') + '<sub class="m">1</sub><sup class="m">3</sup>' + m(' ' + f('1', 'x') + ' dx') + ' with 4 strips.',
      steps: [
        [m('h = 0.5') + '; ordinates ' + m('1, ' + f('2', '3') + ', 0.5, 0.4, ' + f('1', '3')) + '.', ''],
        [m(f('0.5', '2') + '[1 + 0.3333 + 2(0.6667 + 0.5 + 0.4)]'), ''],
        [m('= 0.25 × 4.4667'), ''],
        [m('≈ 1.117'), 'Exact ' + m('ln 3 ≈ 1.0986') + '.']
      ],
      ans: m('≈ 1.117') + ', an over-estimate'
    },
    {
      q: 'A car’s speed is measured every 10 s: ' + m('0, 8, 14, 18, 20') + ' m/s. Estimate the distance.',
      steps: [
        [m('h = 10') + ', 4 strips, 5 ordinates.', ''],
        [m('5[0 + 20 + 2(8 + 14 + 18)]'), ''],
        [m('= 5(20 + 80)'), ''],
        [m('= 500') + ' m.', '']
      ],
      ans: m('500') + ' m'
    }
  ],
  modelNote: 'Compute the same integral with 2, 4 and 8 strips and put the errors side by side.',
  interactive: {
    type: 'optimise',
    title: 'Strips under a curve',
    hint: 'More strips, smaller error — about four times smaller each doubling.'
  },
  quiz: [
    { q: 'The trapezium rule replaces the curve by:', a: ['flat tops', 'straight chords', 'parabolas', 'circles'], c: 1, why: 'Each strip is a trapezium.' },
    { q: m('n') + ' strips need how many ordinates?', a: [m('n'), m('n − 1'), m('n + 1'), m('2n')], c: 2, why: 'Both ends plus the interior ones.' },
    { q: 'Interior ordinates are counted:', a: ['once', 'twice', 'three times', 'not at all'], c: 1, why: 'Each is an edge of two trapezia.' },
    { q: 'For a concave-up curve the estimate is:', a: ['exact', 'too large', 'too small', 'unpredictable'], c: 1, why: 'The chord lies above.' },
    { q: 'Doubling the strips divides the error by about:', a: [m('2'), m('4'), m('8'), m('10')], c: 1, why: 'The error goes as ' + m('h²') + '.' }
  ],
  practice: {
    easy: [
      ['4 strips need how many ordinates?', m('5')],
      ['6 strips on ' + m('[0, 3]') + ': find ' + m('h'), m('0.5')],
      ['5 strips on ' + m('[1, 6]') + ': find ' + m('h'), m('1')],
      ['Interior ordinates are counted', 'twice'],
      ['End ordinates are counted', 'once'],
      [m('y = x²') + ' is concave', 'up'],
      ['So the estimate is', 'too large']
    ],
    med: [
      [m('∫') + '<sub class="m">0</sub><sup class="m">4</sup>' + m(' x² dx') + ' with 4 strips', m('22')],
      ['Its exact value', m(f('64', '3')) + ' ≈ ' + m('21.33')],
      [m('∫') + '<sub class="m">0</sub><sup class="m">4</sup>' + m(' x² dx') + ' with 2 strips', m('24')],
      [m('∫') + '<sub class="m">1</sub><sup class="m">3</sup>' + m(' ' + f('1', 'x') + ' dx') + ' with 4 strips', m('≈ 1.117')],
      ['Speeds ' + m('0, 8, 14, 18, 20') + ' every 10 s: the distance', m('500') + ' m'],
      [m('∫') + '<sub class="m">0</sub><sup class="m">1</sup>' + m(' ' + sr('1 + x³') + ' dx') + ' with 4 strips', m('≈ 1.111')],
      ['Is that an over- or under-estimate?', 'over — the curve is concave up']
    ],
    hard: [
      [m('∫') + '<sub class="m">0</sub><sup class="m">2</sup>' + m(' ' + f('1', '1 + x²') + ' dx') + ' with 4 strips', m('≈ 1.1032')],
      ['Its exact value', m('arctan 2 ≈ 1.1071')],
      ['Why is that one an under-estimate?', 'The curve is concave down over most of the range'],
      [m('∫') + '<sub class="m">0</sub><sup class="m">4</sup>' + m(' x² dx') + ' with 8 strips, and the error', m('21.5') + ', error ' + m('0.17')],
      ['Show the error is about ' + m('h²') + ' times a constant', 'Each doubling quarters it'],
      ['Widths ' + m('0, 2.4, 3.1, 3.6, 3.9, 4.0') + ' m every 5 m: the area', m('≈ 65.5') + ' m²'],
      ['A curve is concave up then down. What can be said about the estimate?', 'Nothing in general — split the interval']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Always state the number of strips, the value of ' + m('h') + ', and whether the estimate is over or under.',
  homework: [
    'Estimate ' + m('∫') + '<sub class="m">0</sub><sup class="m">3</sup>' + m(' x³ dx') + ' with 3 strips and compare with the exact value.',
    'Estimate ' + m('∫') + '<sub class="m">1</sub><sup class="m">5</sup>' + m(' ' + f('1', 'x') + ' dx') + ' with 4 strips, and say whether it is an over- or an under-estimate.',
    'Estimate ' + m('∫') + '<sub class="m">0</sub><sup class="m">2</sup>' + m(' ' + sr('1 + x³') + ' dx') + ' with 4 strips.',
    'A river’s depth every 4 m across is ' + m('0, 1.8, 2.6, 3.0, 2.4, 0') + ' m. Estimate the cross-sectional area.',
    'Explain in three sentences why doubling the number of strips divides the error by about four.'
  ]
});

/* ============================== 21 ============================== */
G11_ALG.push({
  id: 'a11-21', stream: 'alg', grade: 11, quarter: 3, lessons: '58–59', hours: 2,
  title: 'Control work 5, and work on the mistakes',
  subtitle: 'The definite integral in one paper — where the limits and the sketch carry the marks.',
  uz: 'Algebra 11, Nazorat ishi 5', uzPage: 'pp. 269–272',
  cam: 'P1 · Chapter 10 review', camPage: 'Pure Mathematics 1, pp. 241–244', wb: 'Control paper E',
  objectives: [
    'Apply the definite-integral methods under time.',
    'Find the limits of integration from the geometry, unprompted.',
    'Classify each lost mark as careless, method or knowledge.',
    'Rewrite every wrong solution correctly.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Limits of integration', 'Integrallash chegaralari', 'Пределы интегрирования'],
    ['Area between curves', 'Egri chiziqlar orasidagi yuza', 'Площадь между кривыми'],
    ['Volume of revolution', 'Aylanish jismi hajmi', 'Объём тела вращения'],
    ['Trapezium rule', 'Trapetsiya usuli', 'Метод трапеций'],
    ['Careless error', 'E’tiborsizlik xatosi', 'Ошибка по невнимательности'],
    ['Method error', 'Usul xatosi', 'Ошибка в методе'],
    ['Sketch', 'Chizma', 'Эскиз']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [10, 'Answers'], [25, 'Rewrite'], [12, 'The limits drill']],
  sections: [
    {
      h: 'The paper — 25 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Evaluate ${m('∫')}<sub class="m">1</sub><sup class="m">4</sup>${m(' (x² − 2x) dx')} and ${m('∫')}<sub class="m">1</sub><sup class="m">9</sup>${m(' ' + f('1', sr('x')) + ' dx')}</td><td class="m">5</td><td>L49–51</td></tr>
        <tr><td>2</td><td>Find the area between ${m('y = 4x')} and ${m('y = x²')}</td><td class="m">5</td><td>L52–54</td></tr>
        <tr><td>3</td><td>Find the area between ${m('y = x² − 4')} and the axis on ${m('[0, 3]')}</td><td class="m">5</td><td>L52–54</td></tr>
        <tr><td>4</td><td>Volume when ${m('y = ' + sr('x'))} on ${m('[0, 9]')} is rotated about ${m('Ox')}</td><td class="m">4</td><td>L52–54</td></tr>
        <tr><td>5</td><td>Estimate ${m('∫')}<sub class="m">0</sub><sup class="m">2</sup>${m(' ' + sr('1 + x³') + ' dx')} with 4 strips, and say over or under</td><td class="m">6</td><td>L55–57</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks hide</div>
      Q2 gives one mark for solving ${m('4x = x²')} to get the limits. Q3 gives two for splitting at
      ${m('x = 2')}. Q5 gives two for the over/under statement <b>with its reason</b>. Five of
      twenty-five are for the setting up, not the arithmetic.</div>`
    },
    {
      h: 'The four errors',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Error</th><th>Looks like</th><th>Kind</th></tr></thead>
      <tbody>
        <tr><td>no split at a zero</td><td>Q3 answered as one integral, giving ${m('−3')}</td><td>method</td></tr>
        <tr><td>limits guessed</td><td>Q2 done on ${m('[0, 1]')}</td><td>method</td></tr>
        <tr><td>${m('+ C')} in a definite answer</td><td>“${m('= 10 + C')}”</td><td>knowledge</td></tr>
        <tr><td>ordinates miscounted</td><td>4 strips with 4 values of ${m('y')}</td><td>careless</td></tr>
      </tbody></table></div>
      {{fig:areaBetween:Question 2 in one picture — and the two limits it hands you.}}`
    },
    {
      h: 'The limits drill',
      html: `<p>Eight pairs of curves on the board. For each, the class calls out only <b>the limits</b>,
      in five seconds:</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Curves</th><th>Limits</th></tr></thead>
      <tbody>
        <tr><td class="m">y = x, y = x²</td><td class="m">0, 1</td></tr>
        <tr><td class="m">y = 4x, y = x²</td><td class="m">0, 4</td></tr>
        <tr><td class="m">y = 9 − x², y = 0</td><td class="m">−3, 3</td></tr>
        <tr><td class="m">y = x² − 4, y = 0</td><td class="m">−2, 2</td></tr>
        <tr><td class="m">y = x³, y = x</td><td class="m">−1, 0, 1</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The last row has three</span>
      ${m('x³ = x')} at ${m('−1, 0, 1')}, and the curves swap over at ${m('0')}. Two integrals are
      needed, or the parts will cancel.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q3: area between ' + m('y = x² − 4') + ' and the axis on ' + m('[0, 3]') + '.',
      steps: [
        ['Zero at ' + m('x = 2') + ' inside the interval.', 'Split. Two marks.'],
        [m('∫') + '<sub class="m">0</sub><sup class="m">2</sup>' + m(' = ' + f('8', '3') + ' − 8 = −' + f('16', '3')), ''],
        [m('∫') + '<sub class="m">2</sub><sup class="m">3</sup>' + m(' = (9 − 12) − (−' + f('16', '3') + ') = ' + f('7', '3')), ''],
        [m(f('16', '3') + ' + ' + f('7', '3') + ' = ' + f('23', '3')), '']
      ],
      ans: m(f('23', '3')) + ' ≈ ' + m('7.67')
    },
    {
      q: 'Model answer, Q2: area between ' + m('y = 4x') + ' and ' + m('y = x²') + '.',
      steps: [
        [m('4x = x² ⇒ x = 0, 4'), 'One mark.'],
        ['The line is above between them.', ''],
        [m('∫') + '<sub class="m">0</sub><sup class="m">4</sup>' + m(' (4x − x²) dx = [2x² − ' + f('x³', '3') + ']'), ''],
        [m('= 32 − ' + f('64', '3') + ' = ' + f('32', '3')), '']
      ],
      ans: m(f('32', '3')) + ' ≈ ' + m('10.67')
    },
    {
      q: 'A learner answered Q3 as ' + m('−3') + '. Name the mistake.',
      steps: [
        ['They integrated straight through the zero.', ''],
        ['The parts below and above the axis cancelled.', 'A method error.'],
        ['Correct: split at ' + m('x = 2') + '.', '']
      ],
      ans: 'Method error — no split at the zero'
    }
  ],
  modelNote: 'Run the limits drill before the rewrite; it is the mark most often lost.',
  interactive: {
    type: 'quiz',
    title: 'Limits, splits and signs',
    hint: 'Where do the curves meet, and where do they cross the axis?',
    items: [
      { q: 'Limits for ' + m('y = 4x') + ' and ' + m('y = x²') + ':', a: [m('0, 1'), m('0, 4'), m('1, 4'), m('−4, 4')], c: 1, why: m('4x = x²') + '.' },
      { q: 'The area between them:', a: [m(f('4', '3')), m(f('16', '3')), m(f('32', '3')), m('16')], c: 2, why: m('32 − ' + f('64', '3')) + '.' },
      { q: m('y = x² − 4') + ' on ' + m('[0, 3]') + ' must be split at:', a: [m('0'), m('2'), m('3'), 'nowhere'], c: 1, why: 'It crosses the axis there.' },
      { q: 'That area is:', a: [m('−3'), m(f('23', '3')), m('3'), m(f('16', '3'))], c: 1, why: 'Absolute values added.' },
      { q: 'Volume from ' + m('y = ' + sr('x')) + ' on ' + m('[0, 9]') + ':', a: [m('9π'), m(f('81π', '2')), m('81π'), m('18π')], c: 1, why: m('π∫x dx') + '.' },
      { q: '4 strips need how many ordinates?', a: [m('3'), m('4'), m('5'), m('8')], c: 2, why: 'Both ends included.' }
    ]
  },
  quiz: [
    { q: 'The limits of an area question come from:', a: ['the question always', 'solving for the intersections', 'the axis', 'guessing'], c: 1, why: 'Unless stated.' },
    { q: 'A curve crossing the axis inside the interval needs:', a: ['nothing', 'a split at the zero', 'squaring', 'doubling'], c: 1, why: 'Or the parts cancel.' },
    { q: 'A definite integral’s answer includes:', a: [m('+ C'), 'just a number', 'a function', 'a family'], c: 1, why: 'The constant cancels.' },
    { q: 'The trapezium estimate for a concave-up curve is:', a: ['exact', 'too large', 'too small', 'unpredictable'], c: 1, why: 'The chord lies above.' }
  ],
  practice: {
    easy: [
      [m('∫') + '<sub class="m">1</sub><sup class="m">4</sup>' + m(' 2x dx'), m('15')],
      [m('∫') + '<sub class="m">0</sub><sup class="m">2</sup>' + m(' 3x² dx'), m('8')],
      [m('∫') + '<sub class="m">1</sub><sup class="m">9</sup>' + m(' ' + f('1', sr('x')) + ' dx'), m('4')],
      ['Limits for ' + m('y = 4x, y = x²'), m('0, 4')],
      ['Split point for ' + m('y = x² − 4') + ' on ' + m('[0, 3]'), m('x = 2')],
      ['Volume from ' + m('y = ' + sr('x')) + ' on ' + m('[0, 9]'), m(f('81π', '2'))],
      ['4 strips need how many ordinates?', m('5')]
    ],
    med: [
      [m('∫') + '<sub class="m">1</sub><sup class="m">4</sup>' + m(' (x² − 2x) dx'), m('6')],
      ['Area between ' + m('y = 4x') + ' and ' + m('y = x²'), m(f('32', '3'))],
      ['Area between ' + m('y = x² − 4') + ' and the axis on ' + m('[0, 3]'), m(f('23', '3'))],
      ['Estimate ' + m('∫') + '<sub class="m">0</sub><sup class="m">2</sup>' + m(' ' + sr('1 + x³') + ' dx') + ' with 4 strips', m('≈ 3.28')],
      ['Over or under, and why?', 'over — concave up'],
      ['Area between ' + m('y = x') + ' and ' + m('y = x³') + ' on ' + m('[0, 1]'), m(f('1', '4'))],
      ['Volume from ' + m('y = 2x') + ' on ' + m('[0, 3]'), m('12π')]
    ],
    hard: [
      ['Area enclosed by ' + m('y = x³') + ' and ' + m('y = x'), m(f('1', '2'))],
      ['Area between ' + m('y = x²') + ' and ' + m('y = 2 − x²'), m(f('8', '3'))],
      ['Volume from ' + m('y = ' + f('1', 'x')) + ' on ' + m('[1, 4]') + ' about ' + m('Ox'), m(f('3π', '4'))],
      ['Find ' + m('k') + ' with area between ' + m('y = kx') + ' and ' + m('y = x²') + ' equal to ' + m(f('9', '2')), m('k = 3')],
      ['Estimate ' + m('∫') + '<sub class="m">1</sub><sup class="m">3</sup>' + m(' ' + f('1', 'x') + ' dx') + ' with 8 strips', m('≈ 1.1032')],
      ['Show the exact value is ' + m('ln 3'), 'The antiderivative of ' + m(f('1', 'x'))],
      ['Explain why splitting matters in Q3', 'Otherwise the two signed parts cancel']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Task 1 is the rewrite. Find the limits before writing any integral.',
  homework: [
    'Rewrite in full every question that lost a mark, showing how the limits were found.',
    'Five problems from the section your knowledge column was heaviest in.',
    'Find the area between ' + m('y = 6x') + ' and ' + m('y = x²') + ', and between ' + m('y = x² − 9') + ' and the axis on ' + m('[0, 4]') + '.',
    'Estimate ' + m('∫') + '<sub class="m">0</sub><sup class="m">1</sup>' + m(' ' + sr('1 + x⁴') + ' dx') + ' with 4 strips and state whether it is an over- or an under-estimate.'
  ]
});

/* ============================== 22 ============================== */
G11_ALG.push({
  id: 'a11-22', stream: 'alg', grade: 11, quarter: 3, lessons: '60–62', hours: 3,
  title: 'Problems in combinatorics',
  subtitle: 'Counting without listing — the two rules, and the three formulas that come from them.',
  uz: 'Algebra 11, §4.1', uzPage: 'pp. 273–290',
  cam: 'Extension (P&S 1)', camPage: 'Probability & Statistics 1, pp. 82–96', wb: 'Combinatorics sheet C1',
  objectives: [
    'Apply the addition and multiplication rules of counting.',
    'Compute permutations, with and without repetition.',
    'Compute combinations and use the symmetry property.',
    'Decide whether order matters in a given problem.'
  ],
  terms: [
    ['Combinatorics', 'Kombinatorika', 'Комбинаторика'],
    ['Multiplication rule', 'Ko‘paytirish qoidasi', 'Правило умножения'],
    ['Addition rule', 'Qo‘shish qoidasi', 'Правило сложения'],
    ['Factorial', 'Faktorial', 'Факториал'],
    ['Permutation', 'O‘rin almashtirish', 'Перестановка'],
    ['Arrangement', 'Joylashtirish', 'Размещение'],
    ['Combination', 'Kombinatsiya', 'Сочетание'],
    ['With repetition', 'Takrorlanish bilan', 'С повторениями'],
    ['Order matters', 'Tartib muhim', 'Порядок важен']
  ],
  timing: [[18, 'The two rules'], [26, 'Permutations'], [30, 'Combinations'], [28, 'Does order matter?'], [30, 'Practice'], [8, 'Homework']],
  sections: [
    {
      h: 'The two rules',
      html: `<div class="keybox"><div class="klabel">Multiplication (“and”)</div>
      If one choice can be made in ${m('m')} ways and, independently, another in ${m('n')} ways, the pair
      can be made in ${m('m · n')} ways.</div>
      <div class="keybox"><div class="klabel">Addition (“or”)</div>
      If a choice can be made in ${m('m')} ways <b>or</b>, in a mutually exclusive way, in ${m('n')} ways,
      there are ${m('m + n')} ways in total.</div>
      <p>Every formula below is these two rules applied repeatedly. Reading the word “and” or “or” in
      the problem is most of the work.</p>
      <p><b>Example.</b> A menu has 4 starters, 6 mains and 3 desserts. A full meal: ${m('4 × 6 × 3 = 72')}.
      Just one course: ${m('4 + 6 + 3 = 13')}.</p>`
    },
    {
      h: 'Permutations',
      html: `${eq(m('n! = n(n − 1)(n − 2)…2 · 1') + '     ' + m('0! = 1'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>Formula</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>arrange all ${m('n')} in a row</td><td class="m">n!</td><td>5 books: ${m('120')}</td></tr>
        <tr><td>arrange ${m('k')} out of ${m('n')}, order matters</td><td class="m">A(n,k) = ${f('n!', '(n−k)!')}</td><td>3 of 8 runners: ${m('336')}</td></tr>
        <tr><td>${m('k')} choices from ${m('n')}, repetition allowed</td><td class="m">n^k</td><td>4-digit PIN: ${m('10⁴')}</td></tr>
        <tr><td>arrange ${m('n')} with repeats ${m('n₁, n₂, …')}</td><td class="m">${f('n!', 'n₁! n₂! …')}</td><td>MATEMATIKA</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('0! = 1')} is a definition, and a necessary one</span>
      It makes ${m('A(n, n) = ' + f('n!', '0!') + ' = n!')} come out right. There is exactly one way to
      arrange nothing.</div>`
    },
    {
      h: 'Combinations',
      html: `${eq(m('C(n, k) = ' + f('n!', 'k!(n − k)!')), true)}
      <p>Choosing ${m('k')} from ${m('n')} when <b>order does not matter</b>. It is ${m('A(n,k)')}
      divided by ${m('k!')}, because each unordered choice was counted once for every ordering.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Property</th><th>Statement</th></tr></thead>
      <tbody>
        <tr><td>symmetry</td><td class="m">C(n, k) = C(n, n − k)</td></tr>
        <tr><td>ends</td><td class="m">C(n, 0) = C(n, n) = 1</td></tr>
        <tr><td>Pascal</td><td class="m">C(n, k) = C(n−1, k−1) + C(n−1, k)</td></tr>
        <tr><td>total</td><td class="m">ΣC(n, k) = 2ⁿ</td></tr>
      </tbody></table></div>
      <p>Symmetry is a labour-saving device: ${m('C(20, 18) = C(20, 2) = 190')}, computed in one line
      instead of ten.</p>`
    },
    {
      h: 'Does order matter?',
      html: `<div class="keybox"><div class="klabel">The one question to ask</div>
      Would swapping two of the chosen things give a <b>different</b> outcome? If yes, order matters —
      use ${m('A(n,k)')}. If no, use ${m('C(n,k)')}.</div>
      <div class="tablewrap"><table>
      <thead><tr><th>Situation</th><th>Order?</th><th>Formula</th></tr></thead>
      <tbody>
        <tr><td>gold, silver, bronze from 8</td><td>yes</td><td class="m">A(8,3) = 336</td></tr>
        <tr><td>a team of 3 from 8</td><td>no</td><td class="m">C(8,3) = 56</td></tr>
        <tr><td>a 4-digit code</td><td>yes, repeats allowed</td><td class="m">10⁴</td></tr>
        <tr><td>a hand of 5 cards from 36</td><td>no</td><td class="m">C(36,5)</td></tr>
        <tr><td>seating 6 people in a row</td><td>yes</td><td class="m">6! = 720</td></tr>
      </tbody></table></div>`
    }
  ],
  examples: [
    {
      q: 'From 8 runners, in how many ways can the first three places be filled?',
      steps: [
        ['Order matters — gold is not silver.', ''],
        [m('8 × 7 × 6'), ''],
        [m('= 336'), '']
      ],
      ans: m('336')
    },
    {
      q: 'How many teams of 3 can be chosen from 8 people?',
      steps: [
        ['Order does not matter.', ''],
        [m('C(8,3) = ' + f('8 × 7 × 6', '3 × 2 × 1')), ''],
        [m('= 56'), '']
      ],
      ans: m('56')
    },
    {
      q: 'How many arrangements has the word MATEMATIKA?',
      steps: [
        ['10 letters: A×3, M×2, T×2, E, I, K.', ''],
        [m(f('10!', '3! · 2! · 2!')), ''],
        [m('= ' + f('3 628 800', '24') + ' = 151 200'), '']
      ],
      ans: m('151 200')
    }
  ],
  modelNote: 'Ask “does swapping two of them change the answer?” before every formula.',
  interactive: {
    type: 'quiz',
    title: 'Order or not?',
    hint: 'Would swapping two chosen items change the outcome?',
    items: [
      { q: 'Gold, silver and bronze from 8:', a: [m('C(8,3)'), m('A(8,3)'), m('8³'), m('3!')], c: 1, why: 'Order matters.' },
      { q: 'A team of 3 from 8:', a: [m('C(8,3)'), m('A(8,3)'), m('8³'), m('3!')], c: 0, why: 'Order does not matter.' },
      { q: m('C(8,3)') + ' equals:', a: [m('24'), m('56'), m('336'), m('112')], c: 1, why: m(f('336', '6')) + '.' },
      { q: m('C(20,18)') + ' equals:', a: [m('190'), m('380'), m('20'), m('18')], c: 0, why: 'Symmetry: ' + m('C(20,2)') + '.' },
      { q: 'A 4-digit PIN with repeats:', a: [m('10⁴'), m('A(10,4)'), m('C(10,4)'), m('4!')], c: 0, why: 'Ten choices, four times.' },
      { q: m('0!') + ' equals:', a: [m('0'), m('1'), 'undefined', m('∞')], c: 1, why: 'By definition, and necessarily.' }
    ]
  },
  quiz: [
    { q: 'The multiplication rule is used with:', a: ['“or”', '“and”', '“not”', 'neither'], c: 1, why: 'Independent successive choices.' },
    { q: m('C(n, k)') + ' equals:', a: [m(f('n!', '(n−k)!')), m(f('n!', 'k!(n−k)!')), m('n^k'), m('n!')], c: 1, why: 'Divide out the orderings.' },
    { q: m('C(n, k) = C(n, n−k)') + ' because:', a: ['it is a coincidence', 'choosing what to leave out is the same choice', 'of Pascal', 'of factorials'], c: 1, why: 'The complement.' },
    { q: 'Seating 6 in a row:', a: [m('6'), m('36'), m('720'), m('64')], c: 2, why: m('6!') + '.' },
    { q: m('ΣC(n,k)') + ' over all ' + m('k') + ' is:', a: [m('n'), m('n!'), m('2ⁿ'), m('n²')], c: 2, why: 'Every subset, in or out.' }
  ],
  practice: {
    easy: [
      [m('5!'), m('120')],
      [m('0!'), m('1')],
      [m('C(5,2)'), m('10')],
      [m('C(6,3)'), m('20')],
      [m('A(5,2)'), m('20')],
      ['Arrangements of 4 books', m('24')],
      ['3-digit codes from 10 digits, repeats allowed', m('1000')]
    ],
    med: [
      ['First three of 8 runners', m('336')],
      ['Teams of 3 from 8', m('56')],
      [m('C(20,18)'), m('190')],
      ['Arrangements of MATEMATIKA', m('151 200')],
      ['A menu: 4 starters, 6 mains, 3 desserts — full meals', m('72')],
      ['Committees of 4 from 10', m('210')],
      ['Arrangements of 6 people with 2 fixed together', m('240')]
    ],
    hard: [
      ['Hands of 5 from 36 cards', m('C(36,5) = 376 992')],
      ['Arrangements of the 8 letters of ASSALOMU with the two S apart', m('' + f('8!', '2!') + ' − 7! = 15 120')],
      ['From 6 men and 4 women, committees of 4 with at least 1 woman', m('195')],
      ['How many 4-digit numbers have all digits different?', m('4536')],
      ['How many diagonals has a convex ' + m('n') + '-gon?', m(f('n(n−3)', '2'))],
      ['Prove ' + m('C(n,k) = C(n−1,k−1) + C(n−1,k)'), 'Split on whether a fixed element is chosen'],
      ['Prove ' + m('ΣC(n,k) = 2ⁿ'), 'Each element is in or out']
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Write “order matters” or “order does not matter” before every formula.',
  homework: [
    'Evaluate ' + m('7!') + ', ' + m('C(9,4)') + ', ' + m('A(9,4)') + ' and ' + m('C(15,13)') + '.',
    'From 10 players, how many ways to pick a team of 5? And to pick a captain, vice-captain and three others?',
    'How many arrangements has the word TASHKENT? And PARALLEL?',
    'How many 5-digit numbers have all digits different and do not start with 0?',
    'From 7 men and 5 women, how many committees of 4 contain at least 2 women?',
    'Explain in three sentences how to decide whether order matters.'
  ]
});

/* ============================== 23 ============================== */
G11_ALG.push({
  id: 'a11-23', stream: 'alg', grade: 11, quarter: 3, lessons: '63–64', hours: 2,
  title: 'The binomial theorem',
  subtitle: 'Pascal’s triangle, the general term, and expanding a bracket to any power without multiplying it out.',
  uz: 'Algebra 11, §4.2', uzPage: 'pp. 291–302',
  cam: 'P1 · 6.1–6.4', camPage: 'Pure Mathematics 1, pp. 111–121', wb: 'P1 Exercise 6A–6C',
  objectives: [
    'Generate Pascal’s triangle and relate it to combinations.',
    'Expand (a + b)ⁿ for a positive integer n.',
    'Find a specified term of an expansion without expanding it all.',
    'Use the expansion to approximate a power.'
  ],
  terms: [
    ['Binomial', 'Ikkihad', 'Двучлен'],
    ['Binomial theorem', 'Nyuton binomi', 'Бином Ньютона'],
    ['Pascal’s triangle', 'Paskal uchburchagi', 'Треугольник Паскаля'],
    ['Binomial coefficient', 'Binomial koeffitsient', 'Биномиальный коэффициент'],
    ['General term', 'Umumiy had', 'Общий член'],
    ['Expansion', 'Yoyilma', 'Разложение'],
    ['Term independent of x', 'x ga bog‘liq bo‘lmagan had', 'Член, не содержащий x'],
    ['Ascending powers', 'Darajalar o‘sishi bo‘yicha', 'По возрастающим степеням'],
    ['Approximation', 'Taqribiy hisoblash', 'Приближение']
  ],
  timing: [[14, 'Pascal’s triangle'], [22, 'The theorem'], [24, 'The general term'], [20, 'Approximation'], [20, 'Practice'], [10, 'Homework']],
  sections: [
    {
      h: 'Pascal’s triangle',
      html: `<p>Multiply out ${m('(a + b)ⁿ')} for small ${m('n')} and the coefficients form a pattern:</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">n</th><th>Coefficients</th><th>Expansion</th></tr></thead>
      <tbody>
        <tr><td class="m">0</td><td class="m">1</td><td class="m">1</td></tr>
        <tr><td class="m">1</td><td class="m">1 1</td><td class="m">a + b</td></tr>
        <tr><td class="m">2</td><td class="m">1 2 1</td><td class="m">a² + 2ab + b²</td></tr>
        <tr><td class="m">3</td><td class="m">1 3 3 1</td><td class="m">a³ + 3a²b + 3ab² + b³</td></tr>
        <tr><td class="m">4</td><td class="m">1 4 6 4 1</td><td class="m">a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴</td></tr>
        <tr><td class="m">5</td><td class="m">1 5 10 10 5 1</td><td>…</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Each entry is the sum of the two above it</div>
      Which is exactly ${m('C(n,k) = C(n−1,k−1) + C(n−1,k)')} from the last lesson. The triangle
      <b>is</b> the table of combinations, and the coefficients are ${m('C(n, k)')}.</div>`
    },
    {
      h: 'The theorem',
      html: `${eq(m('(a + b)ⁿ = ΣC(n,k) a^(n−k) b^k'), true)}
      <p>Reading it term by term: the powers of ${m('a')} descend from ${m('n')} to ${m('0')}, the powers
      of ${m('b')} ascend from ${m('0')} to ${m('n')}, every term has total degree ${m('n')}, and there
      are ${m('n + 1')} terms.</p>
      ${eq(m('(2x + 3)³ = 8x³ + 3(4x²)(3) + 3(2x)(9) + 27 = 8x³ + 36x² + 54x + 27'), false)}
      <div class="warn"><span class="wl">The whole term is raised to the power</span>
      In ${m('(2x + 3)³')} the first term is ${m('(2x)³ = 8x³')}, not ${m('2x³')}. Bracket the whole
      of ${m('a')} and the whole of ${m('b')} before applying the coefficients.</div>`
    },
    {
      h: 'The general term',
      html: `${eq('the term in ' + m('b^k') + ' is ' + m('C(n,k) a^(n−k) b^k'), true)}
      <p>This is what makes the theorem useful: a single term can be found without expanding the rest.</p>
      <p><b>Example.</b> Find the term in ${m('x⁵')} in ${m('(2x − 3)⁸')}.</p>
      <p>Here ${m('a = 2x')}, ${m('b = −3')}, ${m('n = 8')}. The power of ${m('x')} is ${m('8 − k')}, so
      ${m('k = 3')}:</p>
      ${eq(m('C(8,3)(2x)⁵(−3)³ = 56 × 32x⁵ × (−27) = −48 384 x⁵'), true)}
      <p><b>The term independent of ${m('x')}</b> is found the same way: write the general term, collect
      the powers of ${m('x')}, and set the total power to zero.</p>
      <div class="keybox"><div class="klabel">Watch the signs</div>
      With ${m('(a − b)ⁿ')} take ${m('b')} to be the whole of ${m('−b')}. Odd values of ${m('k')} then
      give negative terms, and the expansion alternates.</div>`
    },
    {
      h: 'Approximation',
      html: `<p>When ${m('x')} is small, the first few terms of ${m('(1 + x)ⁿ')} approximate it well:</p>
      ${eq(m('(1 + x)ⁿ ≈ 1 + nx + ' + f('n(n−1)', '2') + 'x²'), true)}
      <p><b>Example.</b> ${m('1.02⁸ = (1 + 0.02)⁸ ≈ 1 + 8(0.02) + 28(0.0004) = 1 + 0.16 + 0.0112 = 1.1712')}.
      The true value is ${m('1.17166')}.</p>
      <p>This is the linear approximation of Quarter II with one more term — and each further term
      improves the accuracy by roughly a factor of ${m('x')}.</p>`
    }
  ],
  examples: [
    {
      q: 'Expand ' + m('(x + 2)⁴') + '.',
      steps: [
        ['Coefficients ' + m('1, 4, 6, 4, 1') + '.', ''],
        [m('x⁴ + 4x³(2) + 6x²(4) + 4x(8) + 16'), ''],
        [m('= x⁴ + 8x³ + 24x² + 32x + 16'), '']
      ],
      ans: m('x⁴ + 8x³ + 24x² + 32x + 16')
    },
    {
      q: 'Find the term in ' + m('x⁵') + ' in ' + m('(2x − 3)⁸') + '.',
      steps: [
        [m('k = 3') + ' gives ' + m('x^(8−3) = x⁵') + '.', ''],
        [m('C(8,3) = 56'), ''],
        [m('56 (2x)⁵ (−3)³'), ''],
        [m('= 56 × 32 × (−27) x⁵ = −48 384x⁵'), '']
      ],
      ans: m('−48 384x⁵')
    },
    {
      q: 'Find the term independent of ' + m('x') + ' in ' + m('(x² + ' + f('1', 'x') + ')⁶') + '.',
      steps: [
        ['General term ' + m('C(6,k)(x²)^(6−k)(x⁻¹)^k') + '.', ''],
        ['Power of ' + m('x') + ': ' + m('12 − 2k − k = 12 − 3k') + '.', ''],
        [m('12 − 3k = 0 ⇒ k = 4'), ''],
        [m('C(6,4) = 15'), '']
      ],
      ans: m('15')
    }
  ],
  modelNote: 'Build Pascal’s triangle to row 6 on the board and leave it there.',
  interactive: {
    type: 'quiz',
    title: 'Finding one term',
    hint: 'Write the general term, then match the power.',
    items: [
      { q: 'The coefficients for ' + m('n = 4') + ' are:', a: [m('1 4 4 1'), m('1 4 6 4 1'), m('1 3 3 1'), m('1 5 10 10 5 1')], c: 1, why: 'Row 4 of Pascal.' },
      { q: m('(x + 2)⁴') + ' has constant term:', a: [m('2'), m('8'), m('16'), m('4')], c: 2, why: m('2⁴') + '.' },
      { q: 'How many terms has ' + m('(a + b)⁷') + '?', a: [m('7'), m('8'), m('14'), m('128')], c: 1, why: m('n + 1') + '.' },
      { q: 'In ' + m('(2x + 3)³') + ' the first term is:', a: [m('2x³'), m('8x³'), m('6x³'), m('x³')], c: 1, why: m('(2x)³') + '.' },
      { q: 'The term in ' + m('x⁵') + ' of ' + m('(2x − 3)⁸') + ' uses:', a: [m('k = 5'), m('k = 3'), m('k = 8'), m('k = 0')], c: 1, why: m('8 − k = 5') + '.' },
      { q: m('1.02⁸') + ' to three terms:', a: [m('1.16'), m('1.1712'), m('1.18'), m('1.02')], c: 1, why: m('1 + 0.16 + 0.0112') + '.' }
    ]
  },
  quiz: [
    { q: 'The binomial coefficients are:', a: [m('n!'), m('C(n,k)'), m('A(n,k)'), m('n^k')], c: 1, why: 'Pascal’s triangle.' },
    { q: m('(a + b)ⁿ') + ' has how many terms?', a: [m('n'), m('n + 1'), m('2n'), m('2ⁿ')], c: 1, why: m('k = 0') + ' to ' + m('n') + '.' },
    { q: 'Every term has total degree:', a: [m('k'), m('n − k'), m('n'), m('2n')], c: 2, why: 'Powers of ' + m('a') + ' and ' + m('b') + ' sum to ' + m('n') + '.' },
    { q: 'The sum of the coefficients in ' + m('(a+b)ⁿ') + ' is:', a: [m('n'), m('n!'), m('2ⁿ'), m('n²')], c: 2, why: 'Put ' + m('a = b = 1') + '.' }
  ],
  practice: {
    easy: [
      ['Row 4 of Pascal’s triangle', m('1 4 6 4 1')],
      ['Row 5', m('1 5 10 10 5 1')],
      ['Expand ' + m('(x + 1)³'), m('x³ + 3x² + 3x + 1')],
      ['Expand ' + m('(x − 1)³'), m('x³ − 3x² + 3x − 1')],
      ['Terms in ' + m('(a + b)⁶'), m('7')],
      ['Constant term of ' + m('(x + 2)⁴'), m('16')],
      ['Sum of the coefficients of ' + m('(a+b)⁵'), m('32')]
    ],
    med: [
      ['Expand ' + m('(x + 2)⁴'), m('x⁴ + 8x³ + 24x² + 32x + 16')],
      ['Expand ' + m('(2x − 1)³'), m('8x³ − 12x² + 6x − 1')],
      ['Term in ' + m('x³') + ' of ' + m('(x + 3)⁵'), m('270x³')],
      ['Term in ' + m('x²') + ' of ' + m('(2x − 1)⁶'), m('60x²')],
      ['Coefficient of ' + m('x⁴') + ' in ' + m('(1 + x)⁹'), m('126')],
      [m('1.02⁸') + ' to three terms', m('1.1712')],
      [m('0.98⁶') + ' to three terms', m('≈ 0.8858')]
    ],
    hard: [
      ['Term in ' + m('x⁵') + ' of ' + m('(2x − 3)⁸'), m('−48 384x⁵')],
      ['Term independent of ' + m('x') + ' in ' + m('(x² + ' + f('1', 'x') + ')⁶'), m('15')],
      ['Term independent of ' + m('x') + ' in ' + m('(2x − ' + f('1', 'x²') + ')⁹'), m('−672')],
      ['Coefficient of ' + m('x²') + ' in ' + m('(1 + 2x)⁵(1 − x)³'), m('7')],
      ['Find ' + m('n') + ' if the coefficient of ' + m('x²') + ' in ' + m('(1 + x)ⁿ') + ' is 45', m('n = 10')],
      ['Show the sum of the coefficients of ' + m('(2a − b)ⁿ') + ' is ' + m('1'), 'Put ' + m('a = b = 1')],
      ['Estimate ' + m('1.005¹⁰') + ' to four decimal places', m('≈ 1.0511')]
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Write the general term before hunting for a specific one.',
  homework: [
    'Write rows 0 to 6 of Pascal’s triangle.',
    'Expand ' + m('(x + 3)⁴') + ' and ' + m('(2x − 1)⁵') + '.',
    'Find the term in ' + m('x⁴') + ' in ' + m('(3x + 2)⁷') + '.',
    'Find the term independent of ' + m('x') + ' in ' + m('(x³ + ' + f('2', 'x') + ')⁸') + '.',
    'Use the first three terms to estimate ' + m('1.03⁷') + ' and compare with a calculator.',
    'Explain in three sentences why the coefficients of ' + m('(a+b)ⁿ') + ' are the combinations ' + m('C(n,k)') + '.'
  ]
});

/* ============================== 24 ============================== */
G11_ALG.push({
  id: 'a11-24', stream: 'alg', grade: 11, quarter: 3, lessons: '65–67', hours: 3,
  title: 'Statistical data and its types',
  subtitle: 'Where data comes from, how it is grouped, and the four pictures that make it readable.',
  uz: 'Algebra 11, §4.3', uzPage: 'pp. 303–320',
  cam: 'IGCSE E20.1–20.2', camPage: 'Core & Extended, pp. 380–396', wb: 'IGCSE Exercise 20.1',
  objectives: [
    'Classify data as qualitative or quantitative, discrete or continuous.',
    'Build a grouped frequency table with sensible classes.',
    'Draw a histogram with equal and with unequal class widths.',
    'Draw and read a cumulative frequency curve.'
  ],
  terms: [
    ['Population', 'Bosh to‘plam', 'Генеральная совокупность'],
    ['Sample', 'Tanlanma', 'Выборка'],
    ['Qualitative data', 'Sifat ma’lumot', 'Качественные данные'],
    ['Quantitative data', 'Miqdoriy ma’lumot', 'Количественные данные'],
    ['Discrete', 'Diskret', 'Дискретные'],
    ['Continuous', 'Uzluksiz', 'Непрерывные'],
    ['Class interval', 'Sinf oralig‘i', 'Классовый интервал'],
    ['Frequency density', 'Chastota zichligi', 'Плотность частоты'],
    ['Cumulative frequency', 'To‘plangan chastota', 'Накопленная частота'],
    ['Bias in a sample', 'Tanlanma xatosi', 'Смещение выборки']
  ],
  timing: [[18, 'Kinds of data'], [26, 'Grouping'], [30, 'Histograms'], [28, 'Cumulative frequency'], [30, 'Practice'], [3, 'Homework']],
  sections: [
    {
      h: 'Kinds of data',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Kind</th><th>Meaning</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>qualitative</td><td>a category, not a number</td><td>favourite subject</td></tr>
        <tr><td>quantitative discrete</td><td>counted; only certain values</td><td>number of children</td></tr>
        <tr><td>quantitative continuous</td><td>measured; any value in a range</td><td>height, time</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Population and sample</div>
      The <b>population</b> is everyone you want to know about; the <b>sample</b> is who you actually
      measure. A sample is useful only if it is <b>representative</b> — asking the football team about
      sport is biased, however many you ask.</div>
      <p>Sample size reduces random error; it does nothing at all about bias. That distinction is the
      single most useful idea in the whole of statistics.</p>`
    },
    {
      h: 'Grouping',
      html: `<p>Continuous data must be grouped into <b>classes</b>. Three rules make a table readable:</p>
      <ol>
        <li>Between 5 and 12 classes — fewer hides the shape, more shows only noise.</li>
        <li>Classes must not overlap and must leave no gaps: ${m('10 ≤ x < 20')}, ${m('20 ≤ x < 30')}.</li>
        <li>Equal widths where possible; unequal only when the data demands it.</li>
      </ol>
      <div class="warn"><span class="wl">Grouping loses information</span>
      Once heights are recorded as “${m('160–170')} cm”, the exact values are gone. Every statistic
      computed from a grouped table is therefore an <b>estimate</b>, and should be described as one.</div>`
    },
    {
      h: 'Histograms',
      html: `{{fig:histogram:With unequal widths the vertical axis is frequency density, and the AREA of each bar is the frequency.}}
      ${eq(m('frequency density = ' + f('frequency', 'class width')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Class</th><th>Frequency</th><th>Width</th><th>Density</th></tr></thead>
      <tbody>
        <tr><td class="m">0 ≤ x &lt; 2</td><td class="m">6</td><td class="m">2</td><td class="m">3</td></tr>
        <tr><td class="m">2 ≤ x &lt; 4</td><td class="m">14</td><td class="m">2</td><td class="m">7</td></tr>
        <tr><td class="m">4 ≤ x &lt; 5</td><td class="m">10</td><td class="m">1</td><td class="m">10</td></tr>
        <tr><td class="m">5 ≤ x &lt; 6</td><td class="m">8</td><td class="m">1</td><td class="m">8</td></tr>
        <tr><td class="m">6 ≤ x &lt; 9</td><td class="m">9</td><td class="m">3</td><td class="m">3</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A histogram is not a bar chart</span>
      Bars touch, because the scale is continuous. And with unequal widths the <b>height</b> is not the
      frequency — the <b>area</b> is. Plotting frequency against unequal widths misrepresents the data,
      which is exactly what the density is for.</div>`
    },
    {
      h: 'Cumulative frequency',
      html: `<p>Add the frequencies as you go, and plot each running total against the <b>upper</b> end of
      its class. Join the points with a smooth curve.</p>
      {{fig:cumFrequency:Read across at 50% for the median, at 25% and 75% for the quartiles.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Read across at</th><th>Read down for</th></tr></thead>
      <tbody>
        <tr><td class="m">25%</td><td>the lower quartile ${m('Q₁')}</td></tr>
        <tr><td class="m">50%</td><td>the median</td></tr>
        <tr><td class="m">75%</td><td>the upper quartile ${m('Q₃')}</td></tr>
        <tr><td>a given value</td><td>how many are below it</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Upper class boundaries, always</span>
      A running total of “fewer than 20” is plotted at ${m('20')}, not at the midpoint. Plotting at
      midpoints shifts the whole curve and every quartile with it.</div>`
    }
  ],
  examples: [
    {
      q: 'A class has ' + m('30') + ' in ' + m('0 ≤ x < 10') + ' and ' + m('30') + ' in ' + m('10 ≤ x < 40') + '. Compare the bar heights on a histogram.',
      steps: [
        ['Densities ' + m(f('30', '10') + ' = 3') + ' and ' + m(f('30', '30') + ' = 1') + '.', ''],
        ['The first bar is three times as tall.', ''],
        ['But the areas are equal.', 'Equal frequencies.']
      ],
      ans: 'Heights ' + m('3') + ' and ' + m('1') + '; equal areas'
    },
    {
      q: 'Cumulative frequencies ' + m('0, 6, 20, 46, 74, 92, 100') + ' at ' + m('0, 2, 4, 6, 8, 10, 11') + '. Estimate the median.',
      steps: [
        ['Total ' + m('100') + '; read at ' + m('50') + '.', ''],
        ['Between ' + m('46') + ' at 6 and ' + m('74') + ' at 8.', ''],
        ['Interpolate: ' + m('6 + ' + f('4', '28') + ' × 2 ≈ 6.29') + '.', '']
      ],
      ans: m('≈ 6.3')
    },
    {
      q: 'Why is a survey of a school’s football team about sport biased?',
      steps: [
        ['They were chosen for an interest in sport.', ''],
        ['They do not represent the school.', ''],
        ['A bigger football team would not help.', '']
      ],
      ans: 'The sample is not representative; size does not fix bias'
    }
  ],
  modelNote: 'Collect one real set of data from the class and group it live on the board.',
  interactive: {
    type: 'averages',
    title: 'Grouping and reading data',
    hint: 'Change the values and watch the summary statistics.'
  },
  quiz: [
    { q: 'Height is:', a: ['qualitative', 'discrete', 'continuous', 'a category'], c: 2, why: 'It is measured.' },
    { q: 'Number of children is:', a: ['qualitative', 'discrete', 'continuous', 'a category'], c: 1, why: 'It is counted.' },
    { q: 'In a histogram with unequal widths the height is:', a: ['frequency', 'frequency density', 'cumulative frequency', 'the class width'], c: 1, why: 'So the area is the frequency.' },
    { q: 'Cumulative frequency is plotted at:', a: ['midpoints', 'upper class boundaries', 'lower boundaries', 'anywhere'], c: 1, why: 'It counts everything up to there.' },
    { q: 'A bigger sample fixes:', a: ['bias', 'random error', 'both', 'neither'], c: 1, why: 'Bias is a fault in the choosing.' }
  ],
  practice: {
    easy: [
      ['Is shoe size discrete or continuous?', 'discrete'],
      ['Is time continuous?', 'yes'],
      ['Is eye colour quantitative?', 'no — qualitative'],
      ['Frequency 20, width 4: the density', m('5')],
      ['Frequency 15, width 5: the density', m('3')],
      ['Density 6, width 3: the frequency', m('18')],
      ['Cumulative frequency is plotted at', 'upper class boundaries']
    ],
    med: [
      [m('30') + ' in a width-10 class and ' + m('30') + ' in a width-30 class: the heights', m('3') + ' and ' + m('1')],
      ['Total 100; the median is read at', m('50')],
      ['Cumulative ' + m('0,6,20,46,74,92,100') + ': the median', m('≈ 6.3')],
      ['Same data: ' + m('Q₁'), m('≈ 4.4')],
      ['Same data: ' + m('Q₃'), m('≈ 8.1')],
      ['Same data: the interquartile range', m('≈ 3.7')],
      ['Why is a football team a biased sample about sport?', 'Chosen for that very interest']
    ],
    hard: [
      ['A histogram bar has height 4 over ' + m('10 ≤ x < 25') + '. Its frequency', m('60')],
      ['Frequencies ' + m('8, 22, 30, 25, 15') + ' over widths ' + m('5, 5, 10, 10, 20') + ': the densities', m('1.6, 4.4, 3, 2.5, 0.75')],
      ['From a cumulative curve, estimate how many are above ' + m('7') + ' if the reading there is ' + m('60') + ' of ' + m('100'), m('40')],
      ['Explain why a grouped mean is an estimate', 'The exact values were lost in grouping'],
      ['Design a sampling method for the heights of a school of 800', 'Stratified by year group, then random within each'],
      ['Why must histogram bars touch?', 'The scale is continuous — no gaps in the data'],
      ['A class of width 1 has density 12. Add a class of width 4 and frequency 12: the new density', m('3')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every histogram must have frequency density on the vertical axis when widths differ.',
  homework: [
    'Classify five kinds of data you could collect in your school as qualitative, discrete or continuous.',
    'Group these times (seconds) into five classes and draw the histogram: ' + m('12, 15, 18, 19, 22, 23, 24, 25, 27, 28, 30, 31, 33, 36, 40') + '.',
    'Frequencies ' + m('10, 24, 30, 20, 16') + ' over widths ' + m('5, 5, 10, 10, 20') + '. Find the frequency densities and draw the histogram.',
    'Draw the cumulative frequency curve for the data of task 3 and estimate the median and the quartiles.',
    'Explain in three sentences why a larger sample does not correct bias.'
  ]
});

/* ============================== 25 ============================== */
G11_ALG.push({
  id: 'a11-25', stream: 'alg', grade: 11, quarter: 3, lessons: '68–70', hours: 3,
  title: 'Mean, median and mode; deviation and standard deviation',
  subtitle: 'One number for the centre, one for the spread — and knowing which pair to use.',
  uz: 'Algebra 11, §4.4', uzPage: 'pp. 321–338',
  cam: 'IGCSE E20.x', camPage: 'Core & Extended, pp. 397–412', wb: 'IGCSE Exercise 20.2',
  objectives: [
    'Compute the mean, median and mode of raw and of grouped data.',
    'Choose the appropriate average for a given distribution.',
    'Compute the range, the interquartile range and the standard deviation.',
    'Interpret the standard deviation as a typical distance from the mean.'
  ],
  terms: [
    ['Mean', 'O‘rta arifmetik', 'Среднее арифметическое'],
    ['Median', 'Mediana', 'Медиана'],
    ['Mode', 'Moda', 'Мода'],
    ['Modal class', 'Modal sinf', 'Модальный класс'],
    ['Range', 'Kenglik', 'Размах'],
    ['Interquartile range', 'Kvartillararo kenglik', 'Межквартильный размах'],
    ['Deviation', 'Chetlanish', 'Отклонение'],
    ['Variance', 'Dispersiya', 'Дисперсия'],
    ['Standard deviation', 'Standart chetlanish', 'Стандартное отклонение'],
    ['Outlier', 'Chetlashgan qiymat', 'Выброс']
  ],
  timing: [[20, 'Three averages'], [26, 'Grouped data'], [28, 'Measures of spread'], [28, 'Standard deviation'], [30, 'Practice'], [8, 'Homework']],
  sections: [
    {
      h: 'Three averages, three uses',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Average</th><th>Definition</th><th>Best when</th><th>Weakness</th></tr></thead>
      <tbody>
        <tr><td>mean</td><td class="m">${f('Σx', 'n')}</td><td>data is roughly symmetric</td><td>dragged by outliers</td></tr>
        <tr><td>median</td><td>the middle value</td><td>data is skewed or has outliers</td><td>ignores most of the data</td></tr>
        <tr><td>mode</td><td>the commonest value</td><td>data is categorical</td><td>may not exist or be unique</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The standard illustration</div>
      Nine workers earn ${m('4')} million so‘m and the director earns ${m('60')}. The mean is
      ${m('9.6')} million — a figure nobody earns. The median is ${m('4')}. For a question about a
      typical wage, the median is the honest answer.</div>`
    },
    {
      h: 'Grouped data',
      html: `<p>The exact values are gone, so each class is represented by its <b>midpoint</b>:</p>
      ${eq('estimated mean ' + m('= ' + f('Σfx', 'Σf')) + '   with ' + m('x') + ' the class midpoint', true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Class</th><th class="m">f</th><th>Midpoint ${m('x')}</th><th class="m">fx</th></tr></thead>
      <tbody>
        <tr><td class="m">0–10</td><td class="m">4</td><td class="m">5</td><td class="m">20</td></tr>
        <tr><td class="m">10–20</td><td class="m">9</td><td class="m">15</td><td class="m">135</td></tr>
        <tr><td class="m">20–30</td><td class="m">12</td><td class="m">25</td><td class="m">300</td></tr>
        <tr><td class="m">30–40</td><td class="m">5</td><td class="m">35</td><td class="m">175</td></tr>
        <tr><td><b>total</b></td><td class="m">30</td><td></td><td class="m">630</td></tr>
      </tbody></table></div>
      <p>Estimated mean ${m(f('630', '30') + ' = 21')}. The <b>modal class</b> is ${m('20–30')}; the
      median lies in the class containing the ${m('15')}th value, also ${m('20–30')}.</p>`
    },
    {
      h: 'Measures of spread',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Measure</th><th>Definition</th><th>Resistant to outliers?</th></tr></thead>
      <tbody>
        <tr><td>range</td><td class="m">max − min</td><td>no — it is defined by them</td></tr>
        <tr><td>interquartile range</td><td class="m">Q₃ − Q₁</td><td>yes</td></tr>
        <tr><td>standard deviation</td><td>see below</td><td>no</td></tr>
      </tbody></table></div>
      {{fig:boxPlot:The five-figure summary. The box holds the middle half; its width is the interquartile range.}}
      <p>A <b>box plot</b> shows all five numbers at once, and makes two distributions comparable at a
      glance. A value more than ${m('1.5 × IQR')} beyond a quartile is conventionally called an
      <b>outlier</b> and marked separately.</p>`
    },
    {
      h: 'Standard deviation',
      html: `${eq(m('σ² = ' + f('Σ(x − x̄)²', 'n') + ' = ' + f('Σx²', 'n') + ' − x̄²') + '     ' + m('σ = ' + sr('σ²')), true)}
      <p>The <b>variance</b> ${m('σ²')} is the mean of the squared deviations; the <b>standard
      deviation</b> ${m('σ')} is its square root, back in the original units.</p>
      <div class="keybox"><div class="klabel">Why square, and why then take the root</div>
      The plain deviations always sum to zero, so they are useless. Squaring removes the signs;
      the square root brings the answer back to the units of the data, so that “${m('σ = 4')} cm” is
      meaningful.</div>
      <p><b>Example.</b> ${m('2, 4, 4, 4, 5, 5, 7, 9')}: ${m('x̄ = 5')}, ${m('Σx² = 232')},
      ${m('σ² = ' + f('232', '8') + ' − 25 = 4')}, so ${m('σ = 2')}.</p>
      <p>For grouped data the same formula uses ${m('f')} and midpoints:
      ${m('σ² = ' + f('Σfx²', 'Σf') + ' − x̄²')}.</p>
      <div class="warn"><span class="wl">The second form is the one to use</span>
      ${m(f('Σx²', 'n') + ' − x̄²')} needs one pass through the data; the definition needs two, because the
      mean must be known first. Both give the same number.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the mean, median, mode and standard deviation of ' + m('2, 4, 4, 4, 5, 5, 7, 9') + '.',
      steps: [
        [m('x̄ = ' + f('40', '8') + ' = 5'), ''],
        ['Median ' + m(f('4 + 5', '2') + ' = 4.5') + '; mode ' + m('4') + '.', ''],
        [m('Σx² = 4+16+16+16+25+25+49+81 = 232'), ''],
        [m('σ² = 29 − 25 = 4 ⇒ σ = 2'), '']
      ],
      ans: m('x̄ = 5') + ', median ' + m('4.5') + ', mode ' + m('4') + ', ' + m('σ = 2')
    },
    {
      q: 'Estimate the mean of the grouped table with midpoints ' + m('5, 15, 25, 35') + ' and frequencies ' + m('4, 9, 12, 5') + '.',
      steps: [
        [m('Σf = 30'), ''],
        [m('Σfx = 20 + 135 + 300 + 175 = 630'), ''],
        [m('x̄ = 21'), '']
      ],
      ans: m('21') + ' — an estimate'
    },
    {
      q: 'Nine workers earn ' + m('4') + ' million and the director ' + m('60') + '. Which average should a union quote?',
      steps: [
        ['Mean ' + m(f('96', '10') + ' = 9.6') + '.', 'Nobody earns that.'],
        ['Median ' + m('4') + '.', 'Nine of ten earn exactly that.'],
        ['The distribution has an extreme outlier.', '']
      ],
      ans: 'The median — the mean is distorted by one value'
    }
  ],
  modelNote: 'Compute the mean of the class’s heights, then add one impossible value and recompute.',
  interactive: {
    type: 'averages',
    title: 'Centre and spread',
    hint: 'Move one value far out and watch the mean move but the median stay.'
  },
  quiz: [
    { q: 'Which average is dragged by an outlier?', a: ['the mean', 'the median', 'the mode', 'none'], c: 0, why: 'It uses every value.' },
    { q: 'For skewed data the best average is:', a: ['the mean', 'the median', 'the mode', 'the range'], c: 1, why: 'It resists extremes.' },
    { q: m('σ²') + ' equals:', a: [m(f('Σx', 'n')), m(f('Σx²', 'n') + ' − x̄²'), m(f('Σ(x − x̄)', 'n')), m(sr('Σx²'))], c: 1, why: 'The computing form.' },
    { q: 'Why are deviations squared?', a: ['tradition', 'they otherwise sum to zero', 'to make them bigger', 'no reason'], c: 1, why: 'Signs must be removed.' },
    { q: 'The interquartile range is:', a: [m('max − min'), m('Q₃ − Q₁'), m('2σ'), 'the median'], c: 1, why: 'The width of the middle half.' }
  ],
  practice: {
    easy: [
      ['Mean of ' + m('3, 5, 7'), m('5')],
      ['Median of ' + m('3, 5, 7, 9'), m('6')],
      ['Mode of ' + m('2, 3, 3, 5'), m('3')],
      ['Range of ' + m('4, 9, 12'), m('8')],
      ['Mean of ' + m('2, 4, 4, 4, 5, 5, 7, 9'), m('5')],
      ['Median of that list', m('4.5')],
      ['Mode of that list', m('4')]
    ],
    med: [
      [m('σ') + ' of ' + m('2, 4, 4, 4, 5, 5, 7, 9'), m('2')],
      ['Estimated mean from midpoints ' + m('5,15,25,35') + ', frequencies ' + m('4,9,12,5'), m('21')],
      ['The modal class there', m('20–30')],
      [m('σ') + ' of ' + m('1, 2, 3, 4, 5'), m(sr('2')) + ' ≈ ' + m('1.41')],
      ['Nine at 4 and one at 60: the mean', m('9.6')],
      ['Same: the median', m('4')],
      [m('Q₃ − Q₁') + ' for ' + m('2,4,5,7,9,11,15'), m('7')]
    ],
    hard: [
      ['Grouped: midpoints ' + m('5,15,25,35') + ', ' + m('f = 4,9,12,5') + '. Find ' + m('σ'), m('≈ 8.6')],
      ['A set of 10 has mean 12 and ' + m('Σx² = 1560') + '. Find ' + m('σ'), m(sr('12')) + ' ≈ ' + m('3.46')],
      ['Adding 5 to every value changes the mean and ' + m('σ') + ' how?', 'Mean +5, ' + m('σ') + ' unchanged'],
      ['Multiplying every value by 3 changes them how?', 'Both are tripled'],
      ['A set has ' + m('x̄ = 20, σ = 4') + '. What are they after ' + m('y = 2x − 3') + '?', m('37') + ' and ' + m('8')],
      ['Is ' + m('25') + ' an outlier for ' + m('Q₁ = 8, Q₃ = 14') + '?', 'yes — beyond ' + m('14 + 9 = 23')],
      ['Explain why the median ignores most of the data but is still useful', 'Its resistance is exactly that indifference']
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Say which average you would quote, and why, on every real-context question.',
  homework: [
    'Find the mean, median, mode, range and standard deviation of ' + m('3, 5, 5, 6, 8, 8, 8, 9, 12, 16') + '.',
    'Estimate the mean and standard deviation of grouped data with midpoints ' + m('2, 6, 10, 14') + ' and frequencies ' + m('5, 12, 9, 4') + '.',
    'Draw a box plot for ' + m('4, 7, 9, 11, 12, 15, 18, 22, 30') + ' and identify any outlier.',
    'A firm has nine staff on ' + m('5') + ' million and a director on ' + m('80') + '. Compute both averages and say which is honest.',
    'A set has ' + m('x̄ = 30') + ' and ' + m('σ = 6') + '. Find both after the transformation ' + m('y = 3x + 10') + '.',
    'Explain in three sentences why the deviations are squared before averaging.'
  ]
});

/* ============================== 26 ============================== */
G11_ALG.push({
  id: 'a11-26', stream: 'alg', grade: 11, quarter: 3, lessons: '71–73', hours: 3,
  title: 'Studying the relationship between two sets of data',
  subtitle: 'Scatter diagrams, correlation, the line of best fit — and the one warning that must accompany all of it.',
  uz: 'Algebra 11, §4.5', uzPage: 'pp. 339–356',
  cam: 'IGCSE E16.1', camPage: 'Core & Extended, pp. 413–424', wb: 'IGCSE Exercise 16.1',
  objectives: [
    'Plot and read a scatter diagram.',
    'Describe correlation by type and strength.',
    'Draw a line of best fit through the mean point and use it to predict.',
    'Distinguish correlation from causation, and interpolation from extrapolation.'
  ],
  terms: [
    ['Bivariate data', 'Ikki o‘zgaruvchili ma’lumot', 'Двумерные данные'],
    ['Scatter diagram', 'Korrelatsion diagramma', 'Диаграмма рассеяния'],
    ['Correlation', 'Korrelyatsiya', 'Корреляция'],
    ['Positive correlation', 'Musbat korrelyatsiya', 'Положительная корреляция'],
    ['Negative correlation', 'Manfiy korrelyatsiya', 'Отрицательная корреляция'],
    ['Line of best fit', 'Eng mos chiziq', 'Линия наилучшего соответствия'],
    ['Mean point', 'O‘rta nuqta', 'Средняя точка'],
    ['Interpolation', 'Interpolyatsiya', 'Интерполяция'],
    ['Extrapolation', 'Ekstrapolyatsiya', 'Экстраполяция'],
    ['Causation', 'Sababiy bog‘lanish', 'Причинная связь']
  ],
  timing: [[18, 'Scatter diagrams'], [26, 'Describing correlation'], [30, 'The line of best fit'], [28, 'Correlation is not causation'], [30, 'Practice'], [3, 'Homework']],
  sections: [
    {
      h: 'Scatter diagrams',
      html: `<p>Each individual contributes <b>one point</b> ${m('(x, y)')} — the two measurements made on
      the same person or object. The picture then shows whether the two vary together.</p>
      {{fig:scatterGraph:Each point is one individual, measured twice. The pattern, not the points, is the message.}}
      <div class="keybox"><div class="klabel">Choose the axes deliberately</div>
      If one variable might explain the other, put the explanatory variable on the horizontal axis.
      “Hours revised” goes on ${m('x')}; “mark” goes on ${m('y')}. It changes nothing mathematically and
      everything about readability.</div>`
    },
    {
      h: 'Describing correlation',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Pattern</th><th>Name</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>rising, tight</td><td>strong positive</td><td>height and arm span</td></tr>
        <tr><td>rising, loose</td><td>weak positive</td><td>revision hours and mark</td></tr>
        <tr><td>falling, tight</td><td>strong negative</td><td>age of a car and its price</td></tr>
        <tr><td>no pattern</td><td>no correlation</td><td>shoe size and mathematics mark</td></tr>
        <tr><td>a curve</td><td>a relationship, but not linear</td><td>height of a thrown ball against time</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Always give both words</span>
      “Correlation” alone is not an answer. State the <b>type</b> — positive or negative — and the
      <b>strength</b> — strong, moderate or weak. Two words, two marks.</div>`
    },
    {
      h: 'The line of best fit',
      html: `<div class="keybox"><div class="klabel">Two rules for drawing it by eye</div>
      <b>1</b> It must pass through the <b>mean point</b> ${m('(x̄, ȳ)')}.
      <b>2</b> It should have roughly as many points above it as below, and follow the trend.</div>
      <p>Once drawn, it predicts: read up from an ${m('x')} to the line and across to a ${m('y')}. Its
      gradient is the rate of change — “each extra hour of revision is worth about 4 marks”.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Prediction</th><th>Name</th><th>Reliable?</th></tr></thead>
      <tbody>
        <tr><td>inside the range of the data</td><td>interpolation</td><td>yes, if the correlation is strong</td></tr>
        <tr><td>outside the range</td><td>extrapolation</td><td>no — the pattern may not continue</td></tr>
      </tbody></table></div>
      <p>Predicting a mark for ${m('3')} hours from data covering ${m('1')} to ${m('8')} hours is
      interpolation. Predicting for ${m('40')} hours is extrapolation, and the line would eventually
      promise a mark above ${m('100')}.</p>`
    },
    {
      h: 'Correlation is not causation',
      html: `<div class="warn"><span class="wl">The one warning that must always accompany a correlation</span>
      Two variables can move together for three different reasons: one causes the other; both are caused
      by a third; or it is coincidence. A scatter diagram cannot tell which.</div>
      <div class="tablewrap"><table>
      <thead><tr><th>Correlated</th><th>Real explanation</th></tr></thead>
      <tbody>
        <tr><td>ice-cream sales and drownings</td><td>both rise with hot weather</td></tr>
        <tr><td>shoe size and reading age in children</td><td>both rise with age</td></tr>
        <tr><td>number of firefighters and damage</td><td>both rise with the size of the fire</td></tr>
      </tbody></table></div>
      <p>Establishing causation needs an <b>experiment</b> — changing one variable deliberately and
      holding others fixed — not a larger data set.</p>`
    }
  ],
  examples: [
    {
      q: 'Describe the correlation between the age of a car and its price.',
      steps: [
        ['As age rises, price falls.', 'Negative.'],
        ['The points lie fairly close to a line.', 'Strong.']
      ],
      ans: 'Strong negative correlation'
    },
    {
      q: 'Data on revision hours ' + m('1–8') + ' gives a best-fit line ' + m('y = 42 + 4.5x') + '. Predict the mark for ' + m('5') + ' hours, and for ' + m('30') + '.',
      steps: [
        [m('42 + 22.5 = 64.5'), 'Interpolation — inside the range.'],
        [m('42 + 135 = 177'), 'Impossible.'],
        ['The second is extrapolation far outside the data.', '']
      ],
      ans: m('≈ 65') + '; the second prediction is invalid'
    },
    {
      q: 'Ice-cream sales and drownings are strongly correlated. Does ice cream cause drowning?',
      steps: [
        ['Both rise in hot weather.', ''],
        ['A third variable explains both.', ''],
        ['Correlation is not causation.', '']
      ],
      ans: 'No — temperature is the common cause'
    }
  ],
  modelNote: 'Plot the class’s height against arm span and draw the line through the mean point.',
  interactive: {
    type: 'averages',
    title: 'A scatter and its line',
    hint: 'The line must pass through the mean point.'
  },
  quiz: [
    { q: 'Age of a car against price shows:', a: ['strong positive', 'strong negative', 'no correlation', 'a curve'], c: 1, why: 'Older means cheaper.' },
    { q: 'The line of best fit must pass through:', a: ['the origin', 'the mean point', 'the first point', 'the highest point'], c: 1, why: m('(x̄, ȳ)') + '.' },
    { q: 'Predicting outside the data range is:', a: ['interpolation', 'extrapolation', 'correlation', 'causation'], c: 1, why: 'And unreliable.' },
    { q: 'Correlation implies causation:', a: ['always', 'never', 'sometimes, but it cannot be told from the data', 'only if strong'], c: 2, why: 'An experiment is needed.' },
    { q: 'Describing a correlation needs:', a: ['one word', 'type and strength', 'a number only', 'nothing'], c: 1, why: 'Both are credited.' }
  ],
  practice: {
    easy: [
      ['Height and arm span', 'strong positive'],
      ['Age of a car and its price', 'strong negative'],
      ['Shoe size and mathematics mark', 'no correlation'],
      ['Temperature and ice-cream sales', 'positive'],
      ['The line of best fit passes through', 'the mean point'],
      ['Predicting inside the range is called', 'interpolation'],
      ['Predicting outside is called', 'extrapolation']
    ],
    med: [
      [m('y = 42 + 4.5x') + '; predict for ' + m('x = 5'), m('64.5')],
      ['Why is the prediction for ' + m('x = 30') + ' invalid?', 'Far outside the data; it exceeds 100'],
      ['Interpret the gradient ' + m('4.5'), 'about 4.5 marks per extra hour'],
      ['Interpret the intercept ' + m('42'), 'the predicted mark with no revision'],
      ['Mean point of ' + m('(1,3),(2,5),(3,7)'), m('(2, 5)')],
      ['Does a strong correlation prove causation?', 'no'],
      ['Firefighters and damage: the real cause', 'the size of the fire']
    ],
    hard: [
      ['Points ' + m('(1,4),(2,7),(3,9),(4,12),(5,14)') + ': the mean point', m('(3, 9.2)')],
      ['Estimate the gradient of the best-fit line for those points', m('≈ 2.5')],
      ['Hence estimate ' + m('y') + ' at ' + m('x = 3.5'), m('≈ 10.5')],
      ['Why must the line pass through the mean point?', 'The least-squares line always does'],
      ['Give a pair of variables with a strong correlation and no causal link', 'e.g. stork numbers and birth rates'],
      ['A curve, not a line, fits the data. What does that show?', 'A relationship, but not a linear one'],
      ['Design an experiment to test whether revision causes better marks', 'Assign revision time at random and compare groups']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every correlation described with two words; every prediction labelled interpolation or extrapolation.',
  homework: [
    'Plot the eight points ' + m('(1,5),(2,6),(3,9),(4,10),(5,12),(6,14),(7,15),(8,18)') + ' and describe the correlation.',
    'Find the mean point and draw the line of best fit through it.',
    'Use your line to predict ' + m('y') + ' at ' + m('x = 4.5') + ' and at ' + m('x = 20') + ', saying which prediction is reliable.',
    'Give two pairs of variables that are correlated without one causing the other, with the real explanation.',
    'Explain in three sentences the difference between interpolation and extrapolation.'
  ]
});

/* ============================== 27 ============================== */
G11_ALG.push({
  id: 'a11-27', stream: 'alg', grade: 11, quarter: 3, lessons: '74–76', hours: 3,
  title: 'Integration by partial fractions and by parts',
  subtitle: 'Cambridge insert: two techniques that turn an impossible integral into two easy ones.',
  uz: 'Algebra 11, §3.2 (extension)', uzPage: 'pp. 357–364',
  cam: 'P2 · 8.1–8.3', camPage: 'Pure Mathematics 2 & 3, pp. 160–178', wb: 'P2 Exercise 8A–8C',
  objectives: [
    'Split a proper rational function into partial fractions.',
    'Integrate using partial fractions.',
    'State and apply the integration-by-parts formula.',
    'Choose which factor to differentiate and which to integrate.'
  ],
  terms: [
    ['Partial fractions', 'Elementar kasrlar', 'Простейшие дроби'],
    ['Proper fraction', 'To‘g‘ri kasr', 'Правильная дробь'],
    ['Improper fraction', 'Noto‘g‘ri kasr', 'Неправильная дробь'],
    ['Linear factor', 'Chiziqli ko‘paytuvchi', 'Линейный множитель'],
    ['Repeated factor', 'Takrorlanuvchi ko‘paytuvchi', 'Кратный множитель'],
    ['Integration by parts', 'Bo‘laklab integrallash', 'Интегрирование по частям'],
    ['Cover-up method', 'Yopish usuli', 'Метод вычёркивания'],
    ['Reduction', 'Kamaytirish', 'Понижение'],
    ['Natural logarithm', 'Natural logarifm', 'Натуральный логарифм']
  ],
  timing: [[20, 'Why split a fraction'], [30, 'Partial fractions'], [30, 'Integrating them'], [30, 'By parts'], [26, 'Practice'], [4, 'Homework']],
  sections: [
    {
      h: 'Why split a fraction',
      html: `<p>${m('∫ ' + f('5x − 1', 'x² − 1') + ' dx')} has no obvious antiderivative. But the
      integrand can be written as a sum of two much simpler ones:</p>
      ${eq(m(f('5x − 1', 'x² − 1') + ' = ' + f('2', 'x − 1') + ' + ' + f('3', 'x + 1')), true)}
      <p>and each of those integrates to a logarithm at sight.</p>
      <div class="keybox"><div class="klabel">The one standard integral you need</div>
      ${eq(m('∫ ' + f('1', 'ax + b') + ' dx = ' + f('1', 'a') + ' ln|ax + b| + C'), true)}
      Every partial-fraction integral reduces to copies of this.</div>`
    },
    {
      h: 'Splitting the fraction',
      html: `<p>The fraction must be <b>proper</b> — numerator of lower degree than the denominator. If it
      is not, divide first.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Denominator</th><th>Form of the split</th></tr></thead>
      <tbody>
        <tr><td class="m">(x − a)(x − b)</td><td class="m">${f('A', 'x − a')} + ${f('B', 'x − b')}</td></tr>
        <tr><td class="m">(x − a)²</td><td class="m">${f('A', 'x − a')} + ${f('B', '(x − a)²')}</td></tr>
        <tr><td class="m">(x − a)(x² + c)</td><td class="m">${f('A', 'x − a')} + ${f('Bx + C', 'x² + c')}</td></tr>
      </tbody></table></div>
      <p><b>The cover-up method.</b> To find ${m('A')} in ${m(f('5x − 1', '(x−1)(x+1)'))}, cover the
      factor ${m('(x − 1)')} and put ${m('x = 1')} into what remains:
      ${m(f('5(1) − 1', '1 + 1') + ' = 2')}. Similarly ${m('B = ' + f('5(−1) − 1', '−1 − 1') + ' = 3')}.
      Two substitutions, no simultaneous equations.</p>`
    },
    {
      h: 'Integrating them',
      html: `${eq(m('∫ ' + f('5x − 1', 'x² − 1') + ' dx = ∫(' + f('2', 'x−1') + ' + ' + f('3', 'x+1') + ') dx'), true)}
      ${eq(m('= 2 ln|x − 1| + 3 ln|x + 1| + C'), false)}
      <div class="warn"><span class="wl">The modulus signs matter</span>
      ${m('ln')} is defined only for positive arguments; ${m('ln|x − 1|')} covers both sides of
      ${m('x = 1')}. Dropping the bars loses a mark and, in a definite integral, can lose the answer.</div>
      <p>A repeated factor gives a term that is <b>not</b> a logarithm:
      ${m('∫ ' + f('1', '(x−2)²') + ' dx = −' + f('1', 'x − 2') + ' + C')} — the power rule, not the
      logarithm.</p>`
    },
    {
      h: 'Integration by parts',
      html: `${eq(m('∫ u ' + f('dv', 'dx') + ' dx = uv − ∫ v ' + f('du', 'dx') + ' dx'), true)}
      <p>It is the product rule integrated. Its purpose is to <b>replace one integral by an easier
      one</b> — so the choice of ${m('u')} decides whether it helps.</p>
      <div class="keybox"><div class="klabel">Choosing ${m('u')}</div>
      Take ${m('u')} to be the factor that gets <b>simpler when differentiated</b>: a power of ${m('x')}
      before an exponential; a logarithm before anything.</div>
      <p><b>Example.</b> ${m('∫ x e^x dx')}: take ${m('u = x')}, ${m(f('dv', 'dx') + ' = e^x')}.
      Then ${m('∫ x e^x dx = x e^x − ∫ e^x dx = e^x(x − 1) + C')}.</p>
      <p><b>Example.</b> ${m('∫ ln x dx')}: take ${m('u = ln x')}, ${m(f('dv', 'dx') + ' = 1')}.
      Then ${m('= x ln x − ∫ 1 dx = x ln x − x + C')} — an integral with only one factor, done by parts.</p>
      <div class="warn"><span class="wl">A bad choice makes it worse</span>
      With ${m('u = e^x')} in the first example, the new integral has ${m('x²')} in it. If the second
      integral is harder than the first, swap the choice and start again.</div>`
    }
  ],
  examples: [
    {
      q: 'Split ' + m(f('5x − 1', 'x² − 1')) + ' into partial fractions.',
      steps: [
        [m('x² − 1 = (x−1)(x+1)'), ''],
        ['Cover ' + m('(x−1)') + ', put ' + m('x = 1') + ': ' + m(f('4', '2') + ' = 2') + '.', ''],
        ['Cover ' + m('(x+1)') + ', put ' + m('x = −1') + ': ' + m(f('−6', '−2') + ' = 3') + '.', '']
      ],
      ans: m(f('2', 'x − 1') + ' + ' + f('3', 'x + 1'))
    },
    {
      q: 'Find ' + m('∫ ' + f('5x − 1', 'x² − 1') + ' dx') + '.',
      steps: [
        ['Use the split above.', ''],
        [m('∫' + f('2', 'x−1') + ' dx = 2 ln|x − 1|'), ''],
        [m('∫' + f('3', 'x+1') + ' dx = 3 ln|x + 1|'), '']
      ],
      ans: m('2 ln|x − 1| + 3 ln|x + 1| + C')
    },
    {
      q: 'Find ' + m('∫ x cos x dx') + '.',
      steps: [
        [m('u = x') + ', ' + m(f('dv', 'dx') + ' = cos x') + '.', m('x') + ' simplifies when differentiated.'],
        [m('v = sin x') + ', ' + m(f('du', 'dx') + ' = 1') + '.', ''],
        [m('x sin x − ∫ sin x dx'), ''],
        [m('= x sin x + cos x + C'), '']
      ],
      ans: m('x sin x + cos x + C')
    }
  ],
  modelNote: 'Do the cover-up method on the board twice — it is faster than any alternative.',
  interactive: {
    type: 'fractionCancel',
    title: 'Splitting a fraction',
    hint: 'Cover a factor and substitute its root.'
  },
  quiz: [
    { q: m('∫ ' + f('1', 'x − 3') + ' dx') + ' is:', a: [m('ln(x − 3) + C'), m('ln|x − 3| + C'), m('−' + f('1', '(x−3)²') + ' + C'), m(f('1', '2') + '(x−3)² + C')], c: 1, why: 'The modulus is needed.' },
    { q: m(f('1', '(x−1)(x+2)')) + ' splits into:', a: [m(f('A', 'x−1') + ' + ' + f('B', 'x+2')), m(f('Ax+B', '(x−1)(x+2)')), m(f('A', '(x−1)(x+2)')), 'it does not split'], c: 0, why: 'Two distinct linear factors.' },
    { q: 'Integration by parts is:', a: ['the chain rule reversed', 'the product rule reversed', 'the quotient rule reversed', 'a new rule'], c: 1, why: 'Integrate ' + m("(uv)′") + '.' },
    { q: 'For ' + m('∫ x e^x dx') + ' take ' + m('u') + ' to be:', a: [m('e^x'), m('x'), m('x e^x'), 'either'], c: 1, why: 'It simplifies when differentiated.' },
    { q: m('∫ ln x dx') + ' equals:', a: [m(f('1', 'x') + ' + C'), m('x ln x − x + C'), m('ln x + C'), m(f('(ln x)²', '2') + ' + C')], c: 1, why: 'By parts with ' + m('u = ln x') + '.' }
  ],
  practice: {
    easy: [
      [m('∫ ' + f('1', 'x − 2') + ' dx'), m('ln|x − 2| + C')],
      [m('∫ ' + f('1', '2x + 1') + ' dx'), m(f('1', '2') + ' ln|2x + 1| + C')],
      [m('∫ ' + f('3', 'x') + ' dx'), m('3 ln|x| + C')],
      [m('∫ ' + f('1', '(x−1)²') + ' dx'), m('−' + f('1', 'x − 1') + ' + C')],
      ['Split ' + m(f('1', 'x(x+1)')), m(f('1', 'x') + ' − ' + f('1', 'x+1'))],
      [m('∫ x e^x dx'), m('e^x(x − 1) + C')],
      [m('∫ ln x dx'), m('x ln x − x + C')]
    ],
    med: [
      ['Split ' + m(f('5x − 1', 'x² − 1')), m(f('2', 'x−1') + ' + ' + f('3', 'x+1'))],
      [m('∫ ' + f('5x − 1', 'x² − 1') + ' dx'), m('2 ln|x−1| + 3 ln|x+1| + C')],
      ['Split ' + m(f('3x + 5', '(x+1)(x+3)')), m(f('1', 'x+1') + ' + ' + f('2', 'x+3'))],
      [m('∫ x cos x dx'), m('x sin x + cos x + C')],
      [m('∫ x sin x dx'), m('−x cos x + sin x + C')],
      [m('∫ x² e^x dx'), m('e^x(x² − 2x + 2) + C')],
      ['Split ' + m(f('4', 'x² − 4')), m(f('1', 'x−2') + ' − ' + f('1', 'x+2'))]
    ],
    hard: [
      ['Split ' + m(f('x + 7', '(x−1)(x+2)²')), m(f('' + f('8', '9'), 'x−1') + ' − ' + f('' + f('8', '9'), 'x+2') + ' − ' + f('' + f('5', '3'), '(x+2)²'))],
      [m('∫ ' + f('x² + 1', 'x² − 1') + ' dx'), m('x + ln|x−1| − ln|x+1| + C')],
      [m('∫ x ln x dx'), m(f('x²', '2') + ' ln x − ' + f('x²', '4') + ' + C')],
      [m('∫ x²  ln x dx'), m(f('x³', '3') + ' ln x − ' + f('x³', '9') + ' + C')],
      [m('∫') + '<sub class="m">2</sub><sup class="m">3</sup>' + m(' ' + f('1', 'x(x−1)') + ' dx'), m('ln ' + f('4', '3'))],
      [m('∫ e^x sin x dx'), m(f('e^x', '2') + '(sin x − cos x) + C')],
      ['Explain why the cover-up method works', 'Multiplying by the factor and substituting its root kills the other terms']
    ]
  },
  hwTitle: 'Homework — 6 tasks',
  hwNote: 'Modulus signs inside every logarithm; state which factor you chose as ' + m('u') + ' and why.',
  homework: [
    'Split ' + m(f('7x − 1', 'x² − 1')) + ' and ' + m(f('2x + 5', '(x+1)(x+4)')) + ' into partial fractions.',
    'Find ' + m('∫ ' + f('7x − 1', 'x² − 1') + ' dx') + '.',
    'Find ' + m('∫ ' + f('1', '(x−3)²') + ' dx') + ' and explain why it is not a logarithm.',
    'Find ' + m('∫ x e^(2x) dx') + '.',
    'Find ' + m('∫ x² ln x dx') + '.',
    'Explain in three sentences how you decide which factor to call ' + m('u') + '.'
  ]
});

/* ============================== 28 ============================== */
G11_ALG.push({
  id: 'a11-28', stream: 'alg', grade: 11, quarter: 3, lessons: '77–78', hours: 2,
  title: 'Control work 6, and the quarter review',
  subtitle: 'Combinatorics, the binomial theorem and statistics in one paper, then the map of the whole quarter.',
  uz: 'Algebra 11, Nazorat ishi 6', uzPage: 'pp. 365–368',
  cam: 'IGCSE E20 review', camPage: 'Core & Extended, pp. 425–428', wb: 'Control paper F',
  objectives: [
    'Apply the combinatorial and statistical methods under time.',
    'Decide whether order matters, unprompted.',
    'Build a concept map of the quarter.',
    'Set a personal target for Quarter IV.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Concept map', 'Tushunchalar xaritasi', 'Карта понятий'],
    ['Permutation', 'O‘rin almashtirish', 'Перестановка'],
    ['Combination', 'Kombinatsiya', 'Сочетание'],
    ['Standard deviation', 'Standart chetlanish', 'Стандартное отклонение'],
    ['Correlation', 'Korrelyatsiya', 'Корреляция'],
    ['Self-assessment', 'O‘z-o‘zini baholash', 'Самооценка'],
    ['Target', 'Maqsad', 'Цель']
  ],
  timing: [[3, 'Instructions'], [42, 'The paper'], [10, 'Answers'], [20, 'Rewrite'], [10, 'Concept map'], [5, 'Targets']],
  sections: [
    {
      h: 'The paper — 30 marks, 42 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>From 9 people: a team of 4; then a captain, a vice-captain and two others</td><td class="m">5</td><td>L60–62</td></tr>
        <tr><td>2</td><td>How many arrangements has SAMARQAND? And with the two A’s together?</td><td class="m">5</td><td>L60–62</td></tr>
        <tr><td>3</td><td>Find the term in ${m('x⁴')} in ${m('(2x − 1)⁷')}</td><td class="m">4</td><td>L63–64</td></tr>
        <tr><td>4</td><td>Estimate the mean and standard deviation of a grouped table</td><td class="m">6</td><td>L68–70</td></tr>
        <tr><td>5</td><td>Draw a cumulative frequency curve and read off the median and quartiles</td><td class="m">6</td><td>L65–67</td></tr>
        <tr><td>6</td><td>Describe a given correlation and say why a prediction at ${m('x = 40')} is invalid</td><td class="m">4</td><td>L71–73</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks hide</div>
      Q1 gives one mark for saying whether order matters in each part. Q6 gives two words — type and
      strength — and two for the extrapolation reason. Five of thirty are for words, not numbers.</div>`
    },
    {
      h: 'The concept map',
      html: `<p>Six boxes, links as sentences:</p>
      <ul>
        <li><b>antiderivative</b> → <b>definite integral</b> — “Newton–Leibniz: ${m('F(b) − F(a)')}”</li>
        <li><b>definite integral</b> → <b>area and volume</b> — “upper minus lower; ${m('π∫y² dx')}”</li>
        <li><b>no antiderivative</b> → <b>trapezium rule</b> — “straight chords, error ${m('∝ h²')}”</li>
        <li><b>counting rules</b> → <b>${m('C(n,k)')}</b> — “order matters, or it does not”</li>
        <li><b>${m('C(n,k)')}</b> → <b>binomial theorem</b> — “Pascal’s triangle is the coefficients”</li>
        <li><b>data</b> → <b>centre and spread</b> — “mean and ${m('σ')}, or median and IQR”</li>
      </ul>
      {{fig:boxPlot:The picture behind the last box.}}`
    },
    {
      h: 'Looking forward',
      html: `<p>Quarter IV is probability and distributions, then the Cambridge revision blocks on complex
      numbers and differential equations. The combinatorics of this quarter is what makes probability
      computable, and the integration is what solves the differential equations.</p>
      <div class="keybox"><div class="klabel">One habit to carry forward</div>
      Ask “does order matter?” before every counting question, and “is this the mean or the median’s
      job?” before every statistic. Both are one-sentence decisions that determine the whole answer.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q1: from 9 people, a team of 4; then a captain, vice-captain and two others.',
      steps: [
        ['A team: order does not matter.', m('C(9,4) = 126')],
        ['With roles: choose the captain, then the vice, then two others.', m('9 × 8 × C(7,2)')],
        [m('= 9 × 8 × 21 = 1512'), '']
      ],
      ans: m('126') + '; ' + m('1512')
    },
    {
      q: 'Model answer, Q2: arrangements of SAMARQAND.',
      steps: [
        ['9 letters with A×3.', m(f('9!', '3!') + ' = 60 480')],
        ['With the three A’s together: treat them as one block.', m('7! = 5040')],
        ['(With only two A’s together the count differs.)', '']
      ],
      ans: m('60 480') + '; ' + m('5040') + ' with all three A’s together'
    },
    {
      q: 'Model answer, Q3: the term in ' + m('x⁴') + ' in ' + m('(2x − 1)⁷') + '.',
      steps: [
        [m('7 − k = 4 ⇒ k = 3'), ''],
        [m('C(7,3) = 35'), ''],
        [m('35 (2x)⁴ (−1)³'), ''],
        [m('= 35 × 16 × (−1) x⁴ = −560x⁴'), '']
      ],
      ans: m('−560x⁴')
    }
  ],
  modelNote: 'Work Q1 and Q3 on the board, stating the order question aloud each time.',
  interactive: {
    type: 'quiz',
    title: 'The quarter in ten questions',
    hint: 'One from each block.',
    items: [
      { q: m('∫') + '<sub class="m">0</sub><sup class="m">3</sup>' + m(' x² dx') + ':', a: [m('9'), m('27'), m('3'), m('6')], c: 0, why: m(f('27', '3')) + '.' },
      { q: 'Area between ' + m('y = 4x') + ' and ' + m('y = x²') + ':', a: [m(f('16', '3')), m(f('32', '3')), m('16'), m('8')], c: 1, why: 'Limits ' + m('0, 4') + '.' },
      { q: 'Volume from ' + m('y = ' + sr('x')) + ' on ' + m('[0, 4]') + ':', a: [m('4π'), m('8π'), m('16π'), m('2π')], c: 1, why: m('π∫x dx') + '.' },
      { q: '4 strips need how many ordinates?', a: [m('3'), m('4'), m('5'), m('8')], c: 2, why: 'Both ends.' },
      { q: 'A team of 4 from 9:', a: [m('126'), m('3024'), m('36'), m('24')], c: 0, why: m('C(9,4)') + '.' },
      { q: 'Arrangements of SAMARQAND:', a: [m('9!'), m(f('9!', '3!')), m(f('9!', '2!')), m('7!')], c: 1, why: 'Three A’s.' },
      { q: 'Term in ' + m('x⁴') + ' of ' + m('(2x − 1)⁷') + ':', a: [m('560x⁴'), m('−560x⁴'), m('35x⁴'), m('−35x⁴')], c: 1, why: m('(−1)³') + '.' },
      { q: 'Which average resists outliers?', a: ['the mean', 'the median', 'the mode', 'none'], c: 1, why: 'It ignores the extremes.' },
      { q: m('σ²') + ' equals:', a: [m(f('Σx', 'n')), m(f('Σx²', 'n') + ' − x̄²'), m(sr('Σx²')), m(f('Σ(x − x̄)', 'n'))], c: 1, why: 'The computing form.' },
      { q: 'Predicting outside the data range is:', a: ['interpolation', 'extrapolation', 'correlation', 'valid'], c: 1, why: 'And unreliable.' }
    ]
  },
  quiz: [
    { q: 'The first question in any counting problem is:', a: ['how many?', 'does order matter?', 'is it a factorial?', 'is it large?'], c: 1, why: 'It picks the formula.' },
    { q: 'A grouped mean is:', a: ['exact', 'an estimate', 'wrong', 'the median'], c: 1, why: 'Midpoints replace the data.' },
    { q: 'A definite integral’s answer is:', a: ['a family', 'a number', 'a function', 'a constant of integration'], c: 1, why: 'The limits fix it.' },
    { q: 'Quarter IV begins with:', a: ['integration', 'probability', 'vectors', 'logarithms'], c: 1, why: 'Then distributions.' }
  ],
  practice: {
    easy: [
      [m('C(9,4)'), m('126')],
      [m('A(9,2)'), m('72')],
      ['Arrangements of SAMARQAND', m('60 480')],
      ['Term in ' + m('x⁴') + ' of ' + m('(2x − 1)⁷'), m('−560x⁴')],
      [m('∫') + '<sub class="m">0</sub><sup class="m">3</sup>' + m(' x² dx'), m('9')],
      ['Mean of ' + m('4, 6, 8, 10'), m('7')],
      ['Median of ' + m('4, 6, 8, 10, 30'), m('8')]
    ],
    med: [
      ['A captain, a vice and two others from 9', m('1512')],
      ['Arrangements of SAMARQAND with the three A’s together', m('5040')],
      ['Area between ' + m('y = 4x') + ' and ' + m('y = x²'), m(f('32', '3'))],
      ['Volume from ' + m('y = ' + sr('x')) + ' on ' + m('[0, 4]'), m('8π')],
      [m('σ') + ' of ' + m('2, 4, 4, 4, 5, 5, 7, 9'), m('2')],
      ['Grouped mean, midpoints ' + m('5,15,25,35') + ', ' + m('f = 4,9,12,5'), m('21')],
      ['Estimate ' + m('∫') + '<sub class="m">0</sub><sup class="m">4</sup>' + m(' x² dx') + ' with 4 strips', m('22')]
    ],
    hard: [
      ['From 7 men and 5 women, committees of 5 with at least 3 women', m('246')],
      ['Term independent of ' + m('x') + ' in ' + m('(2x − ' + f('1', 'x²') + ')⁹'), m('−672')],
      ['Grouped ' + m('σ') + ' with midpoints ' + m('5,15,25,35') + ', ' + m('f = 4,9,12,5'), m('≈ 8.6')],
      ['Area enclosed by ' + m('y = x³') + ' and ' + m('y = x'), m(f('1', '2'))],
      [m('∫ ' + f('5x − 1', 'x² − 1') + ' dx'), m('2ln|x−1| + 3ln|x+1| + C')],
      [m('∫ x cos x dx'), m('x sin x + cos x + C')],
      ['Why is a prediction at ' + m('x = 40') + ' invalid for data on ' + m('[1, 8]') + '?', 'Extrapolation far outside the range']
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Bring the concept map to the first lesson of Quarter IV.',
  homework: [
    'Rewrite in full every control-work question that lost a mark.',
    'Finish the concept map with all six links written as sentences.',
    'From 8 men and 6 women, how many committees of 5 contain at least 2 women? And find the term in ' + m('x³') + ' of ' + m('(3x − 2)⁶') + '.',
    'Write your target for Quarter IV in one checkable sentence, and date it.'
  ]
});

/* ===================== QUARTER IV (24 hours) ===================== */

/* ============================== 29 ============================== */
G11_ALG.push({
  id: 'a11-29', stream: 'alg', grade: 11, quarter: 4, lessons: '79–80', hours: 2,
  title: 'Random events and their probabilities',
  subtitle: 'Count the outcomes, count the favourable ones, and divide — but only when they are equally likely.',
  uz: 'Algebra 11, §29', uzPage: 'pp. 342–352',
  cam: 'IGX 24.2', camPage: 'Core & Extended, pp. 629–634', wb: 'Exercise 24.2',
  objectives: [
    'Describe a trial by its sample space.',
    'Compute a probability from equally likely outcomes.',
    'Estimate a probability from relative frequency, and say when that is required.',
    'Use combinatorics to count outcomes that cannot be listed.'
  ],
  terms: [
    ['Random event', 'Tasodifiy hodisa', 'Случайное событие'],
    ['Sample space', 'Elementar hodisalar fazosi', 'Пространство исходов'],
    ['Equally likely', 'Teng imkoniyatli', 'Равновозможные'],
    ['Favourable outcome', 'Qulay natija', 'Благоприятный исход'],
    ['Relative frequency', 'Nisbiy chastota', 'Относительная частота'],
    ['Combination', 'Kombinatsiya', 'Сочетание'],
    ['Permutation', 'O‘rin almashtirish', 'Перестановка'],
    ['Expected number', 'Kutilayotgan son', 'Ожидаемое число'],
    ['Certain event', 'Muqarrar hodisa', 'Достоверное событие'],
    ['Impossible event', 'Mumkin bo‘lmagan hodisa', 'Невозможное событие']
  ],
  timing: [[15, 'The sample space'], [20, 'The classical definition'], [20, 'Counting with combinations'], [20, 'Relative frequency'], [5, 'Homework']],
  sections: [
    {
      h: 'The sample space',
      html: `<p>Grade 11 begins where Grade 10 left off, but the counting is harder: the sample spaces are
      now too big to list, and the combinatorics of Quarter III does the listing instead.</p>
      ${eq(m('P(A) = ' + f('m', 'n')) + ',   ' + m('n = |U|') + ',   ' + m('m') + ' the favourable count', true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Trial</th><th class="m">|U|</th><th>Counted by</th></tr></thead>
      <tbody>
        <tr><td>two dice</td><td class="m">36</td><td class="m">6²</td></tr>
        <tr><td>a five-card hand from 52</td><td class="m">2 598 960</td><td class="m">C(52, 5)</td></tr>
        <tr><td>an arrangement of 5 books</td><td class="m">120</td><td class="m">5!</td></tr>
        <tr><td>a three-digit code, digits repeatable</td><td class="m">1000</td><td class="m">10³</td></tr>
        <tr><td>a committee of 3 from 10</td><td class="m">120</td><td class="m">C(10, 3)</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Order, or no order?</div>
      A <b>hand</b> of cards, a <b>committee</b>, a <b>selection</b> — order does not matter, use
      ${m('C(n, k)')}. A <b>code</b>, an <b>arrangement</b>, a <b>podium</b> — order matters, use
      ${m('P(n, k)')} or a power. Choosing the wrong one changes ${m('n')} by a factor of
      ${m('k!')}.</div>`
    },
    {
      h: 'The classical definition in use',
      html: `<p>The pattern is always the same: count ${m('n')}, count ${m('m')}, divide — and use the
      <b>same counting method</b> for both.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Event</th><th class="m">m</th><th class="m">n</th><th class="m">P</th></tr></thead>
      <tbody>
        <tr><td>two dice total 7</td><td class="m">6</td><td class="m">36</td><td class="m">${f('1', '6')}</td></tr>
        <tr><td>a committee of 3 from 6 men and 4 women is all women</td><td class="m">C(4,3) = 4</td><td class="m">C(10,3) = 120</td><td class="m">${f('1', '30')}</td></tr>
        <tr><td>two aces in a five-card hand</td><td class="m">C(4,2)·C(48,3)</td><td class="m">C(52,5)</td><td class="m">≈ 0.0399</td></tr>
        <tr><td>a random arrangement of ${m('ABCDE')} starts with ${m('A')}</td><td class="m">4! = 24</td><td class="m">5! = 120</td><td class="m">${f('1', '5')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Count both with the same method</span>
      If ${m('n')} is a number of <b>unordered</b> selections, ${m('m')} must be too. Mixing
      ${m('C(52, 5)')} below with an ordered count above gives an answer wrong by ${m('5!')} —
      a factor of ${m('120')}.</div>`
    },
    {
      h: 'Counting with combinations',
      html: `${eq(m('C(n, k) = ' + f('n!', 'k!(n − k)!')) + ',   ' + m('P(n, k) = ' + f('n!', '(n − k)!')), true)}
      <p>The standard shape of a selection problem: choose some from one group and the rest from another,
      then <b>multiply</b>.</p>
      <p><b>Example.</b> A committee of 4 from 7 men and 5 women, with exactly 2 women:</p>
      ${eq(m('' + f('C(5, 2) · C(7, 2)', 'C(12, 4)') + ' = ' + f('10 × 21', '495') + ' = ' + f('210', '495') + ' = ' + f('14', '33')), true)}
      <div class="keybox"><div class="klabel">“At least” means add the cases — or use the complement</div>
      “At least one woman” on that committee: either add the cases with ${m('1, 2, 3, 4')} women, or
      compute ${m('1 − ' + f('C(7, 4)', 'C(12, 4)') + ' = 1 − ' + f('35', '495') + ' = ' + f('92', '99'))}.
      The complement is one line instead of four.</div>`
    },
    {
      h: 'Relative frequency',
      html: `<p>When outcomes are not equally likely, probability must be measured:</p>
      ${eq(m('P(A) ≈ ' + f('times A occurred', 'number of trials')), true)}
      {{fig:histogram:Frequencies from an experiment — the estimate that stands in for a count.}}
      <p>The estimate steadies as the number of trials grows. That is the <b>law of large numbers</b>,
      and it is the reason a table of experimental data can stand in for a theoretical probability at
      all.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Situation</th><th>Which definition</th></tr></thead>
      <tbody>
        <tr><td>a fair die</td><td>classical — symmetry guarantees equal outcomes</td></tr>
        <tr><td>a drawing pin</td><td>statistical — no symmetry to appeal to</td></tr>
        <tr><td>a component failing in a year</td><td>statistical — from records</td></tr>
        <tr><td>a point in a region</td><td>geometric — a ratio of measures</td></tr>
      </tbody></table></div>
      <p><b>Expected number.</b> In ${m('N')} trials with probability ${m('p')}, expect ${m('Np')}
      successes. In ${m('500')} throws of a fair die, expect ${m('≈ 83')} sixes — the number the binomial
      distribution of Lessons 86–89 will make precise.</p>`
    }
  ],
  examples: [
    {
      q: 'A committee of 3 is chosen from 6 men and 4 women. Find the probability that it is all women.',
      steps: [
        [m('n = C(10, 3) = 120'), ''],
        [m('m = C(4, 3) = 4'), ''],
        [m('P = ' + f('4', '120') + ' = ' + f('1', '30')), '']
      ],
      ans: m(f('1', '30')) + ' ≈ ' + m('0.033')
    },
    {
      q: 'A committee of 4 is chosen from 7 men and 5 women. Find the probability of exactly 2 women.',
      steps: [
        [m('n = C(12, 4) = 495'), ''],
        [m('m = C(5, 2)·C(7, 2) = 10 × 21 = 210'), 'Choose from each group, then multiply.'],
        [m('P = ' + f('210', '495') + ' = ' + f('14', '33')), '']
      ],
      ans: m(f('14', '33')) + ' ≈ ' + m('0.424')
    },
    {
      q: 'The letters of ' + m('MATHS') + ' are arranged at random. Find the probability that the arrangement begins with a vowel.',
      steps: [
        [m('n = 5! = 120'), ''],
        ['Only ' + m('A') + ' is a vowel; the rest arrange in ' + m('4! = 24') + ' ways.', ''],
        [m('P = ' + f('24', '120') + ' = ' + f('1', '5')), '']
      ],
      ans: m(f('1', '5'))
    },
    {
      q: 'A die is thrown 600 times and shows a six 118 times. Compare with the theoretical value.',
      steps: [
        ['Relative frequency ' + m(f('118', '600') + ' ≈ 0.1967'), ''],
        ['Theoretical ' + m(f('1', '6') + ' ≈ 0.1667'), ''],
        ['Expected number ' + m('600 × ' + f('1', '6') + ' = 100'), 'The excess of 18 is within ordinary variation.']
      ],
      ans: m('0.197') + ' against ' + m('0.167') + '; expected ' + m('100')
    }
  ],
  modelNote: 'Bring a pack of cards and deal ten hands of five; count the aces and compare with the computed probability.',
  interactive: {
    type: 'quiz',
    title: 'Counting the sample space',
    hint: 'Order or no order — decide before computing.',
    items: [
      { q: 'A hand of 5 cards from 52 is counted by:', a: [m('52⁵'), m('C(52, 5)'), m('P(52, 5)'), m('5!')], c: 1, why: 'Order does not matter.' },
      { q: 'A 3-digit code with repeats:', a: [m('C(10, 3)'), m('10³'), m('P(10, 3)'), m('3!')], c: 1, why: 'Order matters, repeats allowed.' },
      { q: 'Arrangements of 5 books:', a: [m('5'), m('25'), m('120'), m('32')], c: 2, why: m('5!') + '.' },
      { q: 'A committee of 3 from 10:', a: [m('120'), m('720'), m('1000'), m('30')], c: 0, why: m('C(10, 3)') + '.' },
      { q: 'Two dice give:', a: [m('12'), m('21'), m('36'), m('6')], c: 2, why: 'Ordered pairs.' },
      { q: 'For a bent drawing pin use:', a: ['the classical definition', 'relative frequency', 'geometry', 'nothing'], c: 1, why: 'No symmetry.' },
      { q: 'Expected sixes in 600 throws:', a: [m('60'), m('100'), m('120'), m('600')], c: 1, why: m('Np') + '.' },
      { q: '“At least one” is quickest by:', a: ['listing', 'the complement', 'a tree', 'a table'], c: 1, why: 'One subtraction.' }
    ]
  },
  quiz: [
    { q: 'The classical definition needs outcomes that are:', a: ['few', 'equally likely', 'independent', 'exclusive'], c: 1, why: 'Otherwise counting misleads.' },
    { q: 'A selection where order matters is counted by:', a: [m('C(n, k)'), m('P(n, k)'), m('n'), m('k!')], c: 1, why: 'Permutations.' },
    { q: m('m') + ' and ' + m('n') + ' must be counted:', a: ['any way', 'by the same method', 'by different methods', 'approximately'], c: 1, why: 'Or the answer is out by ' + m('k!') + '.' },
    { q: 'The law of large numbers says the relative frequency:', a: ['grows', 'settles towards a fixed value', 'oscillates for ever', 'reaches 1'], c: 1, why: 'Which is the probability.' },
    { q: 'Choosing 2 from one group and 2 from another needs:', a: ['addition', 'multiplication', 'subtraction', 'division'], c: 1, why: 'Independent choices.' }
  ],
  practice: {
    easy: [
      [m('C(10, 3)'), m('120')],
      [m('C(52, 2)'), m('1326')],
      [m('5!'), m('120')],
      [m('P(6, 2)'), m('30')],
      ['Outcomes for two dice', m('36')],
      [m('P') + ' a die shows 4', m(f('1', '6'))],
      ['Expected sixes in 600 throws', m('100')]
    ],
    med: [
      [m('P') + ' a committee of 3 from 6 men and 4 women is all women', m(f('1', '30'))],
      [m('P') + ' exactly 2 women on a committee of 4 from 7 men and 5 women', m(f('14', '33'))],
      [m('P') + ' the arrangement of ' + m('MATHS') + ' begins with ' + m('A'), m(f('1', '5'))],
      [m('P') + ' two dice total 9', m(f('1', '9'))],
      [m('P') + ' a five-card hand is all hearts', m(f('C(13,5)', 'C(52,5)')) + ' ≈ ' + m('0.000495')],
      [m('P') + ' at least one woman on a committee of 4 from 7 men and 5 women', m(f('92', '99'))],
      ['Relative frequency of 118 sixes in 600 throws', m('≈ 0.197')]
    ],
    hard: [
      [m('P') + ' a five-card hand contains exactly two aces', m('≈ 0.0399')],
      [m('P') + ' a five-card hand is a full house', m('≈ 0.00144')],
      [m('P') + ' the letters of ' + m('LEVEL') + ' arrange to give ' + m('LEVEL'), m(f('1', '30'))],
      ['From 10 people, ' + m('P') + ' two named people sit together in a row', m(f('1', '5'))],
      ['From 10 people in a circle, ' + m('P') + ' two named people sit together', m(f('2', '9'))],
      [m('P') + ' a random 4-digit PIN has all different digits', m(f('P(10,4)', '10⁴')) + ' = ' + m('0.504')],
      ['A committee of 5 from 12 must contain a given person: ' + m('P'), m(f('5', '12'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write ' + m('n') + ' and ' + m('m') + ' on separate lines, each with the counting method named.',
  homework: [
    'A committee of 3 is chosen from 5 men and 7 women. Find the probability that it contains exactly one man.',
    'The letters of ' + m('NUMBER') + ' are arranged at random. Find the probability that the arrangement begins and ends with a consonant.',
    'Two cards are drawn from 52 without replacement. Find the probability that both are hearts.',
    'A die is thrown 300 times and shows an even number 168 times. Find the relative frequency and compare it with the theoretical value.',
    'Explain in two sentences why ' + m('m') + ' and ' + m('n') + ' must be counted by the same method.'
  ]
});

/* ============================== 30 ============================== */
G11_ALG.push({
  id: 'a11-30', stream: 'alg', grade: 11, quarter: 4, lessons: '81–82', hours: 2,
  title: 'Complementary events, operations on events and Euler–Venn diagrams',
  subtitle: 'Events are sets; the diagram does the bookkeeping the algebra would otherwise have to.',
  uz: 'Algebra 11, §30', uzPage: 'pp. 353–364',
  cam: 'IGX 24.3', camPage: 'Core & Extended, pp. 635–638', wb: 'Exercise 24.3',
  objectives: [
    'Form the union, intersection and complement of events.',
    'Read and fill an Euler–Venn diagram from given totals.',
    'Use the addition rule, and recognise mutually exclusive events.',
    'Use De Morgan’s laws to rewrite a compound event.'
  ],
  terms: [
    ['Union', 'Birlashma', 'Объединение'],
    ['Intersection', 'Kesishma', 'Пересечение'],
    ['Complement', 'To‘ldiruvchi', 'Дополнение'],
    ['Euler–Venn diagram', 'Eyler–Venn diagrammasi', 'Диаграмма Эйлера–Венна'],
    ['Mutually exclusive', 'Birgalikda bo‘lmagan', 'Несовместные'],
    ['Exhaustive', 'To‘liq guruh', 'Полная группа'],
    ['De Morgan’s laws', 'De Morgan qonunlari', 'Законы де Моргана'],
    ['Universal set', 'Universal to‘plam', 'Универсальное множество'],
    ['Difference of events', 'Hodisalar ayirmasi', 'Разность событий'],
    ['Partition', 'Bo‘linish', 'Разбиение']
  ],
  timing: [[15, 'Events as sets'], [25, 'The addition rule'], [25, 'Filling a Venn diagram'], [20, 'De Morgan and three sets'], [5, 'Homework']],
  sections: [
    {
      h: 'Events as sets',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>In words</th><th>Notation</th><th>Probability</th></tr></thead>
      <tbody>
        <tr><td>${m('A')} or ${m('B')}</td><td class="m">A ∪ B</td><td class="m">P(A) + P(B) − P(A ∩ B)</td></tr>
        <tr><td>${m('A')} and ${m('B')}</td><td class="m">A ∩ B</td><td>from the data, or ${m('P(A)P(B)')} if independent</td></tr>
        <tr><td>not ${m('A')}</td><td class="m">A′</td><td class="m">1 − P(A)</td></tr>
        <tr><td>${m('A')} but not ${m('B')}</td><td class="m">A ∩ B′</td><td class="m">P(A) − P(A ∩ B)</td></tr>
        <tr><td>neither</td><td class="m">(A ∪ B)′</td><td class="m">1 − P(A ∪ B)</td></tr>
      </tbody></table></div>
      {{fig:vennTwo:Four regions, and every event in the table is one or two of them.}}
      <div class="keybox"><div class="klabel">Complementary, exclusive, exhaustive</div>
      Two events are <b>complementary</b> when they are both exclusive (${m('A ∩ B = ∅')}) and exhaustive
      (${m('A ∪ B = U')}). Then and only then ${m('P(B) = 1 − P(A)')}. Exclusive alone is not
      enough.</div>`
    },
    {
      h: 'The addition rule',
      html: `${eq(m('P(A ∪ B) = P(A) + P(B) − P(A ∩ B)'), true)}
      <p>The subtraction removes the double count. For mutually exclusive events the overlap is empty and
      the rule shortens.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th class="m">P(A ∪ B)</th><th class="m">P(A ∩ B)</th></tr></thead>
      <tbody>
        <tr><td class="m">P(A) = 0.6, P(B) = 0.3</td><td>—</td><td>—</td></tr>
        <tr><td>… exclusive</td><td class="m">0.9</td><td class="m">0</td></tr>
        <tr><td>… independent</td><td class="m">0.72</td><td class="m">0.18</td></tr>
        <tr><td>… with ${m('P(A ∪ B) = 0.8')}</td><td class="m">0.8</td><td class="m">0.1</td></tr>
      </tbody></table></div>
      <p>The last row is the standard examination move: the rule is used <b>backwards</b> to find the
      overlap from the union.</p>
      <div class="warn"><span class="wl">Exclusive and independent are different, and incompatible</span>
      Exclusive: ${m('P(A ∩ B) = 0')}. Independent: ${m('P(A ∩ B) = P(A)P(B)')}. If both probabilities
      are positive, the two cannot hold together — a question that says an event is “exclusive and
      independent” contains an error, or one of the probabilities is zero.</div>`
    },
    {
      h: 'Filling a Venn diagram',
      html: `<p>Given totals, always fill the <b>overlap first</b>, then work outwards. Every region must be
      a count of things counted once.</p>
      <p><b>Example.</b> Of 40 pupils, 25 study physics, 18 chemistry, 10 both.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Region</th><th>Count</th><th>Order to fill</th></tr></thead>
      <tbody>
        <tr><td>${m('P ∩ C')}</td><td class="m">10</td><td>first</td></tr>
        <tr><td>${m('P')} only</td><td class="m">25 − 10 = 15</td><td>second</td></tr>
        <tr><td>${m('C')} only</td><td class="m">18 − 10 = 8</td><td>third</td></tr>
        <tr><td>neither</td><td class="m">40 − 33 = 7</td><td>last</td></tr>
      </tbody></table></div>
      <p>Now every probability is one division: ${m('P(neither) = ' + f('7', '40'))},
      ${m('P(physics only) = ' + f('15', '40') + ' = ' + f('3', '8'))},
      ${m('P(P | C) = ' + f('10', '18') + ' = ' + f('5', '9'))}.</p>
      <div class="keybox"><div class="klabel">The four regions must total ${m('|U|')}</div>
      ${m('15 + 10 + 8 + 7 = 40')}. Do this check every time; it catches the commonest error, which is
      writing ${m('25')} in the “physics only” region instead of ${m('15')}.</div>`
    },
    {
      h: 'De Morgan and three sets',
      html: `${eq(m('(A ∪ B)′ = A′ ∩ B′') + '     ' + m('(A ∩ B)′ = A′ ∪ B′'), true)}
      <p>In words: “not (${m('A')} or ${m('B')})” is “not ${m('A')} <b>and</b> not ${m('B')}”. The
      connective flips when the bar is distributed.</p>
      {{fig:vennThree:Three events, seven regions inside and one outside — the same filling method.}}
      <p>With three events the addition rule grows:</p>
      ${eq(m('P(A ∪ B ∪ C) = ΣP(A) − ΣP(A ∩ B) + P(A ∩ B ∩ C)'), true)}
      <p>— add the singles, subtract the pairs, add the triple back. This is inclusion–exclusion, and the
      alternating signs continue for any number of events.</p>
      <div class="keybox"><div class="klabel">Fill three sets from the middle out</div>
      Start with ${m('A ∩ B ∩ C')}, then the three pairwise regions (each pair total <b>minus</b> the
      middle), then the three singles, then the outside. Any other order double-counts.</div>`
    }
  ],
  examples: [
    {
      q: 'Given ' + m('P(A) = 0.6') + ', ' + m('P(B) = 0.3') + ' and ' + m('P(A ∪ B) = 0.8') + ', find ' + m('P(A ∩ B)') + ' and ' + m('P(A ∩ B′)') + '.',
      steps: [
        [m('0.8 = 0.6 + 0.3 − P(A ∩ B)'), ''],
        [m('P(A ∩ B) = 0.1'), ''],
        [m('P(A ∩ B′) = 0.6 − 0.1 = 0.5'), '']
      ],
      ans: m('0.1') + ' and ' + m('0.5')
    },
    {
      q: 'Of 40 pupils, 25 study physics, 18 chemistry and 10 both. Find ' + m('P') + '(neither) and ' + m('P') + '(exactly one).',
      steps: [
        ['Overlap ' + m('10') + '; physics only ' + m('15') + '; chemistry only ' + m('8') + '.', ''],
        ['Neither ' + m('40 − 33 = 7') + '.', ''],
        [m('P(neither) = ' + f('7', '40') + ' = 0.175'), ''],
        [m('P(exactly one) = ' + f('23', '40') + ' = 0.575'), '']
      ],
      ans: m('0.175') + ' and ' + m('0.575')
    },
    {
      q: 'Show that ' + m('(A ∪ B)′ = A′ ∩ B′') + ' on a Venn diagram, and use it to find ' + m('P') + '(neither) when ' + m('P(A ∪ B) = 0.8') + '.',
      steps: [
        ['Shade outside both circles.', 'That region is outside ' + m('A') + ' and outside ' + m('B') + '.'],
        [m('P((A ∪ B)′) = 1 − 0.8'), ''],
        [m('= 0.2'), '']
      ],
      ans: m('0.2')
    },
    {
      q: 'Of 60 students, 30 play football, 25 chess, 20 tennis; 12 football and chess, 8 chess and tennis, 10 football and tennis, 5 all three. How many play none?',
      steps: [
        [m('30 + 25 + 20 = 75'), 'Singles.'],
        [m('− (12 + 8 + 10) = −30'), 'Pairs.'],
        [m('+ 5 = 50'), 'Triple back.'],
        [m('60 − 50 = 10'), '']
      ],
      ans: m('10') + ' students'
    }
  ],
  modelNote: 'Draw the two circles on the board and let the class place the four numbers before any probability is computed.',
  interactive: {
    type: 'quiz',
    title: 'Reading a Venn diagram',
    hint: 'Overlap first, always.',
    items: [
      { q: m('P(A ∪ B)') + ' equals:', a: [m('P(A) + P(B)'), m('P(A) + P(B) − P(A ∩ B)'), m('P(A)P(B)'), m('1 − P(A)')], c: 1, why: 'Remove the double count.' },
      { q: m('P(A′)') + ' equals:', a: [m('1 − P(A)'), m('P(A)'), m('0'), m('1 + P(A)')], c: 0, why: 'The complement.' },
      { q: m('(A ∪ B)′') + ' equals:', a: [m('A′ ∪ B′'), m('A′ ∩ B′'), m('A ∩ B'), m('A ∪ B')], c: 1, why: 'De Morgan.' },
      { q: 'Fill a Venn diagram starting from:', a: ['the outside', 'the overlap', 'the largest region', 'anywhere'], c: 1, why: 'Or you double-count.' },
      { q: 'Exclusive means:', a: [m('P(A ∩ B) = 0'), m('P(A ∩ B) = P(A)P(B)'), m('P(A) = P(B)'), m('A = B')], c: 0, why: 'No overlap.' },
      { q: 'For three events, the triple intersection is:', a: ['subtracted', 'added back', 'ignored', 'doubled'], c: 1, why: 'Inclusion–exclusion.' },
      { q: 'Complementary events are exclusive and:', a: ['independent', 'exhaustive', 'equal', 'disjointly independent'], c: 1, why: 'Their union is ' + m('U') + '.' },
      { q: 'The four regions of a two-set diagram total:', a: [m('|A| + |B|'), m('|U|'), m('1'), m('|A ∩ B|')], c: 1, why: 'Everything is counted once.' }
    ]
  },
  quiz: [
    { q: 'The addition rule subtracts the overlap because:', a: ['it is small', 'it would be counted twice', 'of De Morgan', 'no reason'], c: 1, why: 'It is in both circles.' },
    { q: m('(A ∩ B)′') + ' equals:', a: [m('A′ ∩ B′'), m('A′ ∪ B′'), m('A ∪ B'), m('A ∩ B')], c: 1, why: 'The connective flips.' },
    { q: 'Exclusive events with positive probability are:', a: ['independent', 'never independent', 'complementary', 'exhaustive'], c: 1, why: m('0 ≠ P(A)P(B)') + '.' },
    { q: 'A Venn diagram is filled:', a: ['left to right', 'from the overlap outwards', 'from the outside in', 'randomly'], c: 1, why: 'Middle first.' },
    { q: 'For three events, pairs are:', a: ['added', 'subtracted', 'ignored', 'squared'], c: 1, why: 'Then the triple is added back.' }
  ],
  practice: {
    easy: [
      [m('P(A′)') + ' when ' + m('P(A) = 0.35'), m('0.65')],
      [m('P(A ∪ B)') + ' when exclusive, ' + m('P(A) = 0.4, P(B) = 0.3'), m('0.7')],
      [m('P(A ∩ B)') + ' when independent, ' + m('P(A) = 0.5, P(B) = 0.4'), m('0.2')],
      ['Write ' + m('(A ∪ B)′') + ' another way', m('A′ ∩ B′')],
      ['Write ' + m('(A ∩ B)′') + ' another way', m('A′ ∪ B′')],
      ['Of 40, 25 physics, 18 chemistry, 10 both: physics only', m('15')],
      ['Same data: neither', m('7')]
    ],
    med: [
      [m('P(A ∩ B)') + ' when ' + m('P(A) = 0.6, P(B) = 0.3, P(A ∪ B) = 0.8'), m('0.1')],
      ['Same: ' + m('P(A ∩ B′)'), m('0.5')],
      ['Same: ' + m('P') + '(neither)', m('0.2')],
      ['Of 40 pupils as above: ' + m('P') + '(exactly one subject)', m('0.575')],
      ['Same: ' + m('P(P | C)'), m(f('5', '9'))],
      ['Are ' + m('P(A) = 0.5, P(B) = 0.4, P(A ∩ B) = 0.2') + ' independent?', 'Yes'],
      ['Of 60 with 30 F, 25 C, 20 T, 12 FC, 8 CT, 10 FT, 5 all: how many play none?', m('10')]
    ],
    hard: [
      ['Of 60 as above: ' + m('P') + '(exactly two sports)', m(f('20', '60') + ' = ' + f('1', '3'))],
      ['Of 60 as above: ' + m('P') + '(football only)', m(f('13', '60'))],
      ['If ' + m('P(A) = 0.7, P(B) = 0.5') + ', find the range of ' + m('P(A ∩ B)'), m('0.2 ≤ P(A ∩ B) ≤ 0.5')],
      ['If ' + m('A') + ' and ' + m('B') + ' are independent, show ' + m('A') + ' and ' + m('B′') + ' are too', m('P(A ∩ B′) = P(A)(1 − P(B))')],
      ['Three events each of probability ' + m('0.5') + ', pairwise independent, all three independent: ' + m('P(A ∪ B ∪ C)'), m('0.875')],
      ['Of 100 people, 60 read A, 50 read B, 40 read C, 25 A and B, 20 B and C, 15 A and C, 5 all: how many read none?', m('5')],
      ['Prove ' + m('P(A ∪ B) ≤ P(A) + P(B)') + ' for any two events', m('P(A ∩ B) ≥ 0')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw the diagram and fill all four (or eight) regions before answering anything.',
  homework: [
    'Given ' + m('P(A) = 0.55') + ', ' + m('P(B) = 0.4') + ' and ' + m('P(A ∪ B) = 0.75') + ', find ' + m('P(A ∩ B)') + ', ' + m('P(A ∩ B′)') + ' and ' + m('P') + '(neither).',
    'Of 50 students, 32 study Russian, 28 English and 15 both. Draw the Venn diagram and find the probability that a student studies exactly one language.',
    'State both De Morgan laws and illustrate each with a shaded Venn diagram.',
    'Of 80 people, 40 own a car, 35 a bicycle, 30 a motorbike; 15 car and bicycle, 12 bicycle and motorbike, 10 car and motorbike, 5 all three. How many own none?',
    'Explain in two sentences why mutually exclusive events with positive probabilities cannot be independent.'
  ]
});

/* ============================== 31 ============================== */
G11_ALG.push({
  id: 'a11-31', stream: 'alg', grade: 11, quarter: 4, lessons: '83–85', hours: 3,
  title: 'Addition and multiplication of probabilities',
  subtitle: 'Two rules, one tree, and one question to ask first: does the second event depend on the first?',
  uz: 'Algebra 11, §31', uzPage: 'pp. 365–382',
  cam: 'IGX 24.1, 24.4', camPage: 'Core & Extended, pp. 620–628, 639–642', wb: 'Exercise 24.4',
  objectives: [
    'Use the multiplication rule for independent and for dependent events.',
    'Compute a conditional probability from data, a table or a tree.',
    'Build and use a tree diagram, including without replacement.',
    'Use the total probability formula, and reverse a conditional probability.'
  ],
  terms: [
    ['Multiplication rule', 'Ko‘paytirish qoidasi', 'Правило умножения'],
    ['Conditional probability', 'Shartli ehtimollik', 'Условная вероятность'],
    ['Independent events', 'Bog‘liqsiz hodisalar', 'Независимые события'],
    ['Dependent events', 'Bog‘liq hodisalar', 'Зависимые события'],
    ['Tree diagram', 'Daraxt diagrammasi', 'Дерево исходов'],
    ['With replacement', 'Qaytarib', 'С возвращением'],
    ['Without replacement', 'Qaytarmasdan', 'Без возвращения'],
    ['Total probability', 'To‘la ehtimollik', 'Полная вероятность'],
    ['Bayes’ rule', 'Bayes formulasi', 'Формула Байеса'],
    ['Partition', 'To‘liq guruh', 'Полная группа']
  ],
  timing: [[15, 'One question first'], [30, 'The multiplication rule'], [35, 'Trees'], [35, 'Total probability'], [25, 'Reversing the condition'], [10, 'Homework']],
  sections: [
    {
      h: 'One question first',
      html: `<div class="keybox"><div class="klabel">Before any formula</div>
      <b>Does the second event depend on the first?</b> If not, multiply the plain probabilities. If so,
      the second factor is a conditional probability.
      ${eq(m('P(A ∩ B) = P(A) · P(B | A)'), true)}
      When ${m('A')} and ${m('B')} are independent, ${m('P(B | A) = P(B)')} and the rule collapses to
      ${m('P(A)P(B)')}. So the general rule always works; the independent one is a shortcut.</div>
      <div class="tablewrap"><table>
      <thead><tr><th>Situation</th><th>Dependent?</th><th>Second factor</th></tr></thead>
      <tbody>
        <tr><td>two throws of a die</td><td>no</td><td class="m">${f('1', '6')}</td></tr>
        <tr><td>two cards, with replacement</td><td>no</td><td class="m">${f('13', '52')}</td></tr>
        <tr><td>two cards, without replacement</td><td>yes</td><td class="m">${f('12', '51')}</td></tr>
        <tr><td>two components from one batch</td><td>yes</td><td>from the reduced batch</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'The multiplication rule in use',
      html: `${eq(m('P(A ∩ B) = P(A) P(B | A) = P(B) P(A | B)'), true)}
      <p>The rule can be entered from either end — a fact that will matter in the last section.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>two sixes in two throws</td><td class="m">${f('1', '6')} × ${f('1', '6')}</td><td class="m">${f('1', '36')}</td></tr>
        <tr><td>two hearts, with replacement</td><td class="m">${f('1', '4')} × ${f('1', '4')}</td><td class="m">${f('1', '16')}</td></tr>
        <tr><td>two hearts, without replacement</td><td class="m">${f('13', '52')} × ${f('12', '51')}</td><td class="m">${f('1', '17')}</td></tr>
        <tr><td>two aces from 52</td><td class="m">${f('4', '52')} × ${f('3', '51')}</td><td class="m">${f('1', '221')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The denominator drops as well as the numerator</span>
      Without replacement, ${m(f('13', '52'))} is followed by ${m(f('12', '51'))} — <b>both</b> numbers
      change. Changing only the top is the standard error, and gives an answer about ${m('2\\%')} too
      large.</div>`
    },
    {
      h: 'Trees',
      html: `{{fig:treeDiagram:Multiply along a branch, add down the ends — the two rules in one picture.}}
      <div class="keybox"><div class="klabel">The two tree rules</div>
      <ul>
        <li><b>Along</b> a branch: multiply (that is the multiplication rule).</li>
        <li><b>Down</b> the ends: add (that is the addition rule, on exclusive paths).</li>
      </ul>
      Every fork's probabilities total ${m('1')}; every set of end-probabilities totals ${m('1')}. Two
      free checks.</div>
      <p><b>Worked case.</b> A bag holds 5 red and 3 blue balls; two are drawn without replacement.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Path</th><th>Product</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td class="m">RR</td><td class="m">${f('5', '8')} × ${f('4', '7')}</td><td class="m">${f('20', '56')}</td></tr>
        <tr><td class="m">RB</td><td class="m">${f('5', '8')} × ${f('3', '7')}</td><td class="m">${f('15', '56')}</td></tr>
        <tr><td class="m">BR</td><td class="m">${f('3', '8')} × ${f('5', '7')}</td><td class="m">${f('15', '56')}</td></tr>
        <tr><td class="m">BB</td><td class="m">${f('3', '8')} × ${f('2', '7')}</td><td class="m">${f('6', '56')}</td></tr>
      </tbody></table></div>
      <p>They total ${m(f('56', '56') + ' = 1')}. So ${m('P(same) = ' + f('26', '56') + ' = ' + f('13', '28'))}
      and ${m('P(different) = ' + f('30', '56') + ' = ' + f('15', '28'))}.</p>`
    },
    {
      h: 'Total probability',
      html: `<p>When the first stage splits the sample space into exclusive, exhaustive cases
      ${m('H₁, H₂, …')}, the probability of a later event is the sum over the branches:</p>
      ${eq(m('P(A) = P(H₁)P(A | H₁) + P(H₂)P(A | H₂) + …'), true)}
      <p>This is exactly “add down the ends”, written as a formula.</p>
      <p><b>Example.</b> Two factories supply lamps: ${m('60\\%')} from ${m('F₁')} with ${m('2\\%')}
      defective, ${m('40\\%')} from ${m('F₂')} with ${m('5\\%')} defective. The probability that a random
      lamp is defective:</p>
      ${eq(m('P(D) = 0.6(0.02) + 0.4(0.05) = 0.012 + 0.020 = 0.032'), true)}
      <div class="keybox"><div class="klabel">The branches must partition</div>
      The cases must be mutually exclusive and cover everything: ${m('P(H₁) + P(H₂) + … = 1')}. If they
      do not, the formula gives a number that is not a probability — often greater than ${m('1')}, which
      is the check.</div>`
    },
    {
      h: 'Reversing the condition',
      html: `<p>Total probability answers “how likely is the effect?”. The reverse question — “given the
      effect, how likely is each cause?” — uses the same numbers the other way round:</p>
      ${eq(m('P(H₁ | A) = ' + f('P(H₁) P(A | H₁)', 'P(A)')), true)}
      <p><b>The lamp again.</b> A lamp is found defective; the probability it came from ${m('F₁')}:</p>
      ${eq(m('' + f('0.012', '0.032') + ' = 0.375'), true)}
      <p>So although ${m('F₁')} makes ${m('60\\%')} of the lamps, it accounts for only ${m('37.5\\%')} of
      the defective ones — because its defect rate is lower.</p>
      <div class="warn"><span class="wl">${m('P(A | B)')} and ${m('P(B | A)')} are different numbers</span>
      Here ${m('P(D | F₁) = 0.02')} but ${m('P(F₁ | D) = 0.375')} — a factor of nearly ${m('19')}.
      Swapping the two is the commonest and most consequential error in probability, in examinations and
      outside them.</div>`
    }
  ],
  examples: [
    {
      q: 'Two cards are drawn from 52 without replacement. Find ' + m('P') + '(both hearts).',
      steps: [
        [m('P(first) = ' + f('13', '52') + ' = ' + f('1', '4')), ''],
        [m('P(second | first) = ' + f('12', '51')), 'Both numbers change.'],
        [m('P = ' + f('1', '4') + ' × ' + f('12', '51') + ' = ' + f('1', '17')), '']
      ],
      ans: m(f('1', '17')) + ' ≈ ' + m('0.059')
    },
    {
      q: 'A bag holds 5 red and 3 blue balls; two are drawn without replacement. Find ' + m('P') + '(same colour).',
      steps: [
        [m('P(RR) = ' + f('5', '8') + ' × ' + f('4', '7') + ' = ' + f('20', '56')), ''],
        [m('P(BB) = ' + f('3', '8') + ' × ' + f('2', '7') + ' = ' + f('6', '56')), ''],
        [m('P = ' + f('26', '56') + ' = ' + f('13', '28')), 'Add down the ends.']
      ],
      ans: m(f('13', '28')) + ' ≈ ' + m('0.464')
    },
    {
      q: 'Factory ' + m('F₁') + ' makes ' + m('60\\%') + ' of lamps with ' + m('2\\%') + ' defective; ' + m('F₂') + ' makes ' + m('40\\%') + ' with ' + m('5\\%') + '. Find the probability that a lamp is defective.',
      steps: [
        [m('P(D | F₁) = 0.02') + ', ' + m('P(D | F₂) = 0.05'), ''],
        [m('P(D) = 0.6(0.02) + 0.4(0.05)'), ''],
        [m('= 0.012 + 0.020 = 0.032'), '']
      ],
      ans: m('0.032')
    },
    {
      q: 'A lamp is defective. Find the probability that it came from ' + m('F₁') + '.',
      steps: [
        [m('P(F₁ ∩ D) = 0.012'), ''],
        [m('P(D) = 0.032'), 'From the previous example.'],
        [m('P(F₁ | D) = ' + f('0.012', '0.032') + ' = 0.375'), '']
      ],
      ans: m('0.375')
    }
  ],
  modelNote: 'Draw the lamp tree on the board and label all four end-probabilities; the reversal is then a single fraction the class can see.',
  interactive: {
    type: 'quiz',
    title: 'Along the branch, down the ends',
    hint: 'Multiply, then add.',
    items: [
      { q: 'Along a branch you:', a: ['add', 'multiply', 'subtract', 'divide'], c: 1, why: 'The multiplication rule.' },
      { q: 'Down the ends you:', a: ['add', 'multiply', 'subtract', 'divide'], c: 0, why: 'Exclusive paths.' },
      { q: 'Without replacement, the second denominator:', a: ['stays', 'drops by one', 'doubles', 'is 1'], c: 1, why: 'One fewer object.' },
      { q: m('P(A ∩ B)') + ' in general:', a: [m('P(A)P(B)'), m('P(A)P(B | A)'), m('P(A) + P(B)'), m('P(B | A)')], c: 1, why: 'Always true.' },
      { q: 'The branches of total probability must:', a: ['be equal', 'partition the space', 'be independent', 'be few'], c: 1, why: 'Exclusive and exhaustive.' },
      { q: 'All end-probabilities of a tree total:', a: [m('0'), m('1'), m('2'), 'anything'], c: 1, why: 'Something happens.' },
      { q: m('P(D | F₁) = 0.02') + ' and ' + m('P(F₁ | D) = 0.375') + ' shows:', a: ['an error', 'the two are different', 'they are equal', 'nothing'], c: 1, why: 'Never swap them.' },
      { q: 'For independent events, ' + m('P(B | A)') + ' equals:', a: [m('P(A)'), m('P(B)'), m('0'), m('1')], c: 1, why: 'No influence.' }
    ]
  },
  quiz: [
    { q: 'The general multiplication rule is:', a: [m('P(A)P(B)'), m('P(A)P(B | A)'), m('P(A) + P(B)'), m('P(A) − P(B)')], c: 1, why: 'It covers both cases.' },
    { q: 'Without replacement makes the events:', a: ['independent', 'dependent', 'exclusive', 'certain'], c: 1, why: 'The second fork changes.' },
    { q: 'Total probability is the formula for:', a: ['along a branch', 'down the ends', 'the complement', 'the union'], c: 1, why: 'Summed over the partition.' },
    { q: 'Reversing a conditional probability uses:', a: ['the addition rule', 'the same joint probability, divided differently', 'independence', 'a new experiment'], c: 1, why: m('P(A ∩ B)') + ' both ways.' },
    { q: 'A tree fork’s probabilities total:', a: [m('0'), m('1'), m('|U|'), 'anything'], c: 1, why: 'A free check.' }
  ],
  practice: {
    easy: [
      [m('P') + ' two sixes in two throws', m(f('1', '36'))],
      [m('P') + ' two hearts, with replacement', m(f('1', '16'))],
      [m('P') + ' two hearts, without replacement', m(f('1', '17'))],
      [m('P') + ' two aces from 52 without replacement', m(f('1', '221'))],
      ['Bag of 5 red, 3 blue: ' + m('P(RR)') + ' without replacement', m(f('5', '14'))],
      ['Same bag: ' + m('P(BB)'), m(f('3', '28'))],
      ['Second factor after drawing one heart from 52', m(f('12', '51'))]
    ],
    med: [
      ['Bag of 5 red, 3 blue: ' + m('P') + '(same colour)', m(f('13', '28'))],
      ['Same bag: ' + m('P') + '(different colours)', m(f('15', '28'))],
      ['Lamps: ' + m('P(D)') + ' with ' + m('0.6/0.02') + ' and ' + m('0.4/0.05'), m('0.032')],
      ['Same: ' + m('P(F₁ | D)'), m('0.375')],
      ['Same: ' + m('P(F₂ | D)'), m('0.625')],
      ['Three cards from 52 without replacement: ' + m('P') + ' all hearts', m(f('11', '850')) + ' ≈ ' + m('0.0129')],
      [m('P(B | A)') + ' when ' + m('P(A) = 0.4, P(A ∩ B) = 0.1'), m('0.25')]
    ],
    hard: [
      ['A bag of 4 white, 6 black: ' + m('P') + ' the second drawn is white', m(f('2', '5'))],
      ['Two bags: I has 3R 2B, II has 1R 4B. A bag is chosen at random, then a ball: ' + m('P(R)'), m('0.4')],
      ['Same: ' + m('P') + '(bag I | red drawn)', m('0.75')],
      ['A test is ' + m('95\\%') + ' accurate; ' + m('1\\%') + ' of people have the disease. ' + m('P') + '(disease | positive)', m('≈ 0.161')],
      ['A die is thrown until a six appears: ' + m('P') + ' it takes exactly three throws', m(f('25', '216'))],
      ['Three components each fail with probability ' + m('0.1') + ', independently: ' + m('P') + ' at least one fails', m('0.271')],
      ['Two cards from 52 without replacement: ' + m('P') + ' at least one is an ace', m(f('33', '221')) + ' ≈ ' + m('0.149')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw the tree for every multi-stage question; label every branch before multiplying.',
  homework: [
    'A bag holds 6 green and 4 yellow counters; two are drawn without replacement. Find the probabilities of two greens, of two yellows and of one of each.',
    'Two cards are drawn from 52 without replacement. Find the probability that at least one is a king.',
    'Machine ' + m('A') + ' makes ' + m('70\\%') + ' of the output with ' + m('3\\%') + ' faulty; machine ' + m('B') + ' makes ' + m('30\\%') + ' with ' + m('6\\%') + '. Find the probability that an item is faulty, and the probability it came from ' + m('B') + ' given that it is.',
    'A die is thrown three times. Find the probability of at least one six.',
    'Explain in two sentences, with the lamp numbers, why ' + m('P(A | B)') + ' and ' + m('P(B | A)') + ' are different.'
  ]
});

/* ============================== 32 ============================== */
G11_ALG.push({
  id: 'a11-32', stream: 'alg', grade: 11, quarter: 4, lessons: '86–89', hours: 4,
  title: 'The binomial and normal distributions',
  subtitle: 'Counting successes in n trials, and the bell curve that takes over when n is large.',
  uz: 'Algebra 11, §32', uzPage: 'pp. 383–406',
  cam: 'Probability & Statistics 1', camPage: 'P&S 1, pp. 108–150', wb: 'Exercise S1–S3',
  objectives: [
    'Recognise a binomial situation and state its two parameters.',
    'Compute P(X = k), the mean and the variance of a binomial distribution.',
    'Use the normal curve and the 68–95–99.7 rule.',
    'Standardise a value with z = (x − μ)/σ and read a probability from it.'
  ],
  terms: [
    ['Random variable', 'Tasodifiy miqdor', 'Случайная величина'],
    ['Distribution', 'Taqsimot', 'Распределение'],
    ['Binomial distribution', 'Binomial taqsimot', 'Биномиальное распределение'],
    ['Trial', 'Sinov', 'Испытание'],
    ['Success', 'Muvaffaqiyat', 'Успех'],
    ['Mean (expectation)', 'Matematik kutilma', 'Математическое ожидание'],
    ['Variance', 'Dispersiya', 'Дисперсия'],
    ['Standard deviation', 'Standart chetlanish', 'Стандартное отклонение'],
    ['Normal distribution', 'Normal taqsimot', 'Нормальное распределение'],
    ['Standardisation', 'Standartlashtirish', 'Стандартизация'],
    ['z-score', 'z-baho', 'z-оценка'],
    ['Symmetry of the curve', 'Egri chiziq simmetriyasi', 'Симметрия кривой']
  ],
  timing: [[20, 'When a situation is binomial'], [35, 'The formula'], [30, 'Mean and variance'], [35, 'The normal curve'], [35, 'Standardising'], [5, 'Homework']],
  sections: [
    {
      h: 'When a situation is binomial',
      html: `<div class="keybox"><div class="klabel">Four conditions, all needed</div>
      <ol>
        <li>a <b>fixed</b> number ${m('n')} of trials;</li>
        <li>each trial has exactly <b>two</b> outcomes, success or failure;</li>
        <li>the probability ${m('p')} of success is the <b>same</b> every time;</li>
        <li>the trials are <b>independent</b>.</li>
      </ol>
      Then ${m('X')}, the number of successes, is <b>binomial</b>: ${m('X ~ B(n, p)')}.</div>
      <div class="tablewrap"><table>
      <thead><tr><th>Situation</th><th>Binomial?</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td>10 throws of a die, counting sixes</td><td>yes</td><td class="m">B(10, ${f('1', '6')})</td></tr>
        <tr><td>20 components tested, ${m('3\\%')} faulty</td><td>yes</td><td class="m">B(20, 0.03)</td></tr>
        <tr><td>cards drawn <b>without</b> replacement</td><td>no</td><td>${m('p')} changes</td></tr>
        <tr><td>throwing until the first six</td><td>no</td><td>${m('n')} is not fixed</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">“Without replacement” breaks condition 3</span>
      Drawing without replacement changes ${m('p')} at every step, so the count is <b>not</b> binomial.
      Sampling from a very large population is close enough to be treated as binomial — but say so.</div>`
    },
    {
      h: 'The formula',
      html: `${eq(m('P(X = k) = C(n, k) p^k (1 − p)^(n−k)') + ',   ' + m('k = 0, 1, …, n'), true)}
      <p>Read it as three factors: <b>how many ways</b> ${m('k')} successes can be arranged, times the
      probability of ${m('k')} successes, times the probability of ${m('n − k')} failures.</p>
      {{fig:binomialBars:B(8, 0.4) — the whole distribution, with the mean marked.}}
      <p><b>Example.</b> ${m('X ~ B(5, 0.2)')}:</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">k</th><th class="m">C(5, k)</th><th class="m">P(X = k)</th></tr></thead>
      <tbody>
        <tr><td class="m">0</td><td class="m">1</td><td class="m">0.328</td></tr>
        <tr><td class="m">1</td><td class="m">5</td><td class="m">0.410</td></tr>
        <tr><td class="m">2</td><td class="m">10</td><td class="m">0.205</td></tr>
        <tr><td class="m">3</td><td class="m">10</td><td class="m">0.051</td></tr>
        <tr><td class="m">4</td><td class="m">5</td><td class="m">0.006</td></tr>
        <tr><td class="m">5</td><td class="m">1</td><td class="m">0.0003</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The probabilities total ${m('1')}</div>
      They are the terms of ${m('(p + (1 − p))ⁿ')} expanded by the binomial theorem of Lesson 101 — which
      is where the distribution takes its name. So the column always sums to ${m('1')}, and that is the
      check.</div>`
    },
    {
      h: 'Mean and variance',
      html: `${eq(m('μ = E(X) = np') + '     ' + m('σ² = Var(X) = np(1 − p)') + '     ' + m('σ = ' + sr('np(1 − p)')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Distribution</th><th class="m">μ</th><th class="m">σ²</th><th class="m">σ</th></tr></thead>
      <tbody>
        <tr><td class="m">B(10, ${f('1', '2')})</td><td class="m">5</td><td class="m">2.5</td><td class="m">1.58</td></tr>
        <tr><td class="m">B(60, ${f('1', '6')})</td><td class="m">10</td><td class="m">8.33</td><td class="m">2.89</td></tr>
        <tr><td class="m">B(100, 0.03)</td><td class="m">3</td><td class="m">2.91</td><td class="m">1.71</td></tr>
      </tbody></table></div>
      <p>The mean is exactly the “expected number” of Lesson 79. The variance is largest at
      ${m('p = 0.5')} and shrinks towards ${m('0')} as ${m('p')} approaches ${m('0')} or ${m('1')} — a
      near-certain outcome varies little.</p>
      <div class="warn"><span class="wl">${m('μ')} need not be a possible value</span>
      ${m('B(5, 0.2)')} has ${m('μ = 1')}, but ${m('B(7, 0.5)')} has ${m('μ = 3.5')} — and ${m('X')} is
      always a whole number. The mean is an average over many repetitions, not a prediction of one.</div>`
    },
    {
      h: 'The normal curve',
      html: `<p>Many measured quantities — heights, errors, yields — cluster symmetrically about a mean.
      Their distribution is the <b>normal</b> one, ${m('N(μ, σ²)')}, drawn as the bell curve.</p>
      {{fig:normalCurve:Symmetric about μ, with almost all the area within three standard deviations.}}
      <div class="keybox"><div class="klabel">The 68–95–99.7 rule</div>
      ${eq(m('P(μ − σ < X < μ + σ) ≈ 0.68') + '   ' + m('P(μ − 2σ < X < μ + 2σ) ≈ 0.95') + '   ' + m('P(μ − 3σ < X < μ + 3σ) ≈ 0.997'), true)}
      Three numbers that answer most questions without a table.</div>
      <p><b>Example.</b> Heights are ${m('N(170, 8²)')} cm. Then about ${m('68\\%')} of people are between
      ${m('162')} and ${m('178')} cm, about ${m('95\\%')} between ${m('154')} and ${m('186')}, and a
      height above ${m('194')} — three standard deviations up — occurs in about ${m('0.15\\%')} of
      people.</p>
      <p><b>Why it matters here.</b> When ${m('n')} is large, the binomial bars themselves take the shape
      of the normal curve, with ${m('μ = np')} and ${m('σ = ' + sr('np(1 − p)'))}. That is why the two
      distributions belong in one lesson.</p>`
    },
    {
      h: 'Standardising',
      html: `<p>Every normal distribution is the same curve, re-scaled. Convert a value to its
      <b>z-score</b> — how many standard deviations it lies from the mean:</p>
      ${eq(m('z = ' + f('x − μ', 'σ')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Data</th><th class="m">z</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td>${m('x = 178')} in ${m('N(170, 8²)')}</td><td class="m">1</td><td>one ${m('σ')} above the mean</td></tr>
        <tr><td>${m('x = 154')} in ${m('N(170, 8²)')}</td><td class="m">−2</td><td>two ${m('σ')} below</td></tr>
        <tr><td>${m('x = 62')} in ${m('N(50, 6²)')}</td><td class="m">2</td><td>top ${m('2.5\\%')} roughly</td></tr>
      </tbody></table></div>
      <p>Once standardised, values from different distributions can be compared: a mark of ${m('62')} in a
      test with ${m('N(50, 6²)')} (${m('z = 2')}) beats a mark of ${m('78')} in one with
      ${m('N(70, 10²)')} (${m('z = 0.8')}), even though the raw score is lower.</p>
      <div class="keybox"><div class="klabel">Symmetry halves the work</div>
      ${m('P(Z < −z) = P(Z > z) = 1 − P(Z < z)')}. A table of positive ${m('z')} is therefore enough for
      every question, and ${m('P(Z < 0) = 0.5')} exactly.</div>`
    }
  ],
  examples: [
    {
      q: 'A die is thrown 5 times. Find the probability of exactly two sixes.',
      steps: [
        [m('X ~ B(5, ' + f('1', '6') + ')'), ''],
        [m('P(X = 2) = C(5, 2)(' + f('1', '6') + ')²(' + f('5', '6') + ')³'), ''],
        [m('= 10 × ' + f('1', '36') + ' × ' + f('125', '216')), ''],
        [m('= ' + f('1250', '7776') + ' ≈ 0.161'), '']
      ],
      ans: m('≈ 0.161')
    },
    {
      q: 'For ' + m('X ~ B(20, 0.3)') + ', find ' + m('μ') + ', ' + m('σ') + ' and ' + m('P(X ≥ 1)') + '.',
      steps: [
        [m('μ = 20(0.3) = 6'), ''],
        [m('σ² = 20(0.3)(0.7) = 4.2 ⇒ σ ≈ 2.05'), ''],
        [m('P(X = 0) = 0.7²⁰ ≈ 0.000798'), ''],
        [m('P(X ≥ 1) ≈ 0.9992'), 'Complement.']
      ],
      ans: m('μ = 6') + ', ' + m('σ ≈ 2.05') + ', ' + m('P(X ≥ 1) ≈ 0.999')
    },
    {
      q: 'Heights are ' + m('N(170, 8²)') + ' cm. Find the proportion between ' + m('162') + ' and ' + m('186') + ' cm.',
      steps: [
        [m('z₁ = ' + f('162 − 170', '8') + ' = −1'), ''],
        [m('z₂ = ' + f('186 − 170', '8') + ' = 2'), ''],
        [m('P(−1 < Z < 2) = 0.9772 − 0.1587'), ''],
        [m('≈ 0.819'), 'About ' + m('82\\%') + '.']
      ],
      ans: m('≈ 81.9\\%')
    },
    {
      q: 'A mark of ' + m('62') + ' in a test with ' + m('N(50, 6²)') + ' and one of ' + m('78') + ' in a test with ' + m('N(70, 10²)') + ' — which is better?',
      steps: [
        [m('z₁ = ' + f('12', '6') + ' = 2'), ''],
        [m('z₂ = ' + f('8', '10') + ' = 0.8'), ''],
        ['The first is two standard deviations above; the second only ' + m('0.8') + '.', '']
      ],
      ans: 'The mark of ' + m('62') + ' — a higher z-score'
    }
  ],
  modelNote: 'Toss ten coins thirty times and tally the number of heads; the class builds B(10, 0.5) with its own hands, and the bell shape appears.',
  interactive: {
    type: 'averages',
    title: 'Mean, spread and the shape of the data',
    hint: 'Move a value and watch the mean and the range.'
  },
  quiz: [
    { q: 'A binomial distribution needs:', a: ['a fixed ' + m('n') + ' and constant ' + m('p'), 'a large ' + m('n'), 'a small ' + m('p'), 'nothing'], c: 0, why: 'Four conditions.' },
    { q: 'Drawing without replacement is:', a: ['binomial', 'not binomial', 'normal', 'geometric'], c: 1, why: m('p') + ' changes.' },
    { q: m('P(X = k)') + ' equals:', a: [m('p^k'), m('C(n, k)p^k(1 − p)^(n−k)'), m('np'), m('C(n, k)')], c: 1, why: 'Three factors.' },
    { q: 'The mean of ' + m('B(n, p)') + ':', a: [m('np'), m('np(1 − p)'), m('p'), m('n')], c: 0, why: 'The expected number.' },
    { q: 'The variance of ' + m('B(n, p)') + ':', a: [m('np'), m('np(1 − p)'), m(sr('np')), m('n')], c: 1, why: 'Largest at ' + m('p = 0.5') + '.' },
    { q: 'Within two standard deviations lies about:', a: [m('68\\%'), m('95\\%'), m('99.7\\%'), m('50\\%')], c: 1, why: 'The middle rule.' },
    { q: m('z') + ' equals:', a: [m(f('x − μ', 'σ')), m(f('μ − x', 'σ')), m('xσ + μ'), m(f('x', 'σ'))], c: 0, why: 'Distance in standard deviations.' }
  ],
  practice: {
    easy: [
      [m('μ') + ' of ' + m('B(10, 0.5)'), m('5')],
      [m('μ') + ' of ' + m('B(60, ' + f('1', '6') + ')'), m('10')],
      [m('σ²') + ' of ' + m('B(10, 0.5)'), m('2.5')],
      [m('σ') + ' of ' + m('B(100, 0.03)'), m('≈ 1.71')],
      [m('P(X = 0)') + ' for ' + m('B(5, 0.2)'), m('0.328')],
      ['Is drawing without replacement binomial?', 'No'],
      [m('z') + ' for ' + m('x = 178') + ' in ' + m('N(170, 8²)'), m('1')]
    ],
    med: [
      [m('P') + ' exactly two sixes in five throws', m('≈ 0.161')],
      [m('P(X = 2)') + ' for ' + m('B(5, 0.2)'), m('0.205')],
      [m('P(X ≥ 1)') + ' for ' + m('B(20, 0.3)'), m('≈ 0.9992')],
      [m('μ') + ' and ' + m('σ') + ' for ' + m('B(20, 0.3)'), m('6') + ', ' + m('≈ 2.05')],
      ['Proportion within one ' + m('σ') + ' of the mean', m('≈ 68\\%')],
      ['Proportion of ' + m('N(170, 8²)') + ' between ' + m('154') + ' and ' + m('186'), m('≈ 95\\%')],
      [m('z') + ' for ' + m('x = 62') + ' in ' + m('N(50, 6²)'), m('2')]
    ],
    hard: [
      [m('P') + ' at least three sixes in ten throws of a die', m('≈ 0.225')],
      ['For ' + m('B(n, 0.5)') + ' with ' + m('σ = 2') + ', find ' + m('n'), m('n = 16')],
      ['Proportion of ' + m('N(170, 8²)') + ' between ' + m('162') + ' and ' + m('186'), m('≈ 81.9\\%')],
      ['The most likely value of ' + m('B(20, 0.3)'), m('k = 6')],
      ['A test is passed by ' + m('80\\%') + '; ' + m('P') + ' exactly 8 of 10 pass', m('≈ 0.302')],
      ['Compare ' + m('62') + ' in ' + m('N(50, 6²)') + ' with ' + m('78') + ' in ' + m('N(70, 10²)'), 'The first — ' + m('z = 2') + ' against ' + m('0.8')],
      ['For ' + m('B(n, p)') + ' with ' + m('μ = 12') + ' and ' + m('σ² = 4.8') + ', find ' + m('n') + ' and ' + m('p'), m('n = 20, p = 0.6')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'State ' + m('n') + ' and ' + m('p') + ' — or ' + m('μ') + ' and ' + m('σ') + ' — before any calculation.',
  homework: [
    'A coin is thrown 8 times. Find the probability of exactly 5 heads, and the mean and standard deviation of the number of heads.',
    'A component is faulty with probability ' + m('0.04') + '. In a batch of 25, find the probability of no faulty components and of at least two.',
    'Test marks are ' + m('N(60, 12²)') + '. Find the proportion of marks above ' + m('84') + ' and between ' + m('48') + ' and ' + m('72') + '.',
    'For ' + m('X ~ B(n, 0.25)') + ' with mean ' + m('5') + ', find ' + m('n') + ', ' + m('σ') + ' and ' + m('P(X = 5)') + '.',
    'Explain in two sentences why sampling without replacement from a very large population may still be treated as binomial.'
  ]
});

/* ============================== 33 ============================== */
G11_ALG.push({
  id: 'a11-33', stream: 'alg', grade: 11, quarter: 4, lessons: '90–91', hours: 2,
  title: 'Control work 7, and work on the mistakes',
  subtitle: 'Probability and distributions in one paper, then the block drawn as a decision tree.',
  uz: 'Algebra 11, Nazorat ishi 7', uzPage: 'pp. 407–410',
  cam: 'P&S 1 review', camPage: 'P&S 1, pp. 151–154', wb: 'Control paper A7',
  objectives: [
    'Apply the counting, addition and multiplication rules under time.',
    'Compute a conditional probability with the right denominator.',
    'Use the binomial formula and the normal 68–95–99.7 rule.',
    'Name each lost mark and rewrite the solution in full.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Combination', 'Kombinatsiya', 'Сочетание'],
    ['Conditional probability', 'Shartli ehtimollik', 'Условная вероятность'],
    ['Total probability', 'To‘la ehtimollik', 'Полная вероятность'],
    ['Binomial distribution', 'Binomial taqsimot', 'Биномиальное распределение'],
    ['Standard deviation', 'Standart chetlanish', 'Стандартное отклонение'],
    ['z-score', 'z-baho', 'z-оценка'],
    ['Target', 'Maqsad', 'Цель']
  ],
  timing: [[3, 'Instructions'], [45, 'The paper'], [12, 'Answers'], [20, 'Diagnosis and rewrite'], [5, 'The decision tree']],
  sections: [
    {
      h: 'The paper — 40 marks, 45 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>A committee of 4 from 6 men and 5 women: ${m('P')}(exactly 2 women) and ${m('P')}(at least 1 woman)</td><td class="m">7</td><td>L79–80</td></tr>
        <tr><td>2</td><td>Given ${m('P(A) = 0.5')}, ${m('P(B) = 0.4')}, ${m('P(A ∪ B) = 0.7')}: find ${m('P(A ∩ B)')}, ${m('P(A ∩ B′)')} and say whether the events are independent</td><td class="m">6</td><td>L81–82</td></tr>
        <tr><td>3</td><td>A bag of 7 red and 5 blue, two drawn without replacement: the tree, ${m('P')}(same colour), ${m('P')}(second red)</td><td class="m">7</td><td>L83–85</td></tr>
        <tr><td>4</td><td>Two machines, ${m('65/35\\%')} of output with ${m('2/6\\%')} faulty: ${m('P')}(faulty) and ${m('P')}(machine B | faulty)</td><td class="m">7</td><td>L83–85</td></tr>
        <tr><td>5</td><td>${m('X ~ B(12, 0.25)')}: find ${m('μ')}, ${m('σ')}, ${m('P(X = 3)')} and ${m('P(X ≥ 1)')}</td><td class="m">7</td><td>L86–89</td></tr>
        <tr><td>6</td><td>Masses are ${m('N(500, 15²)')} g: the proportion above ${m('530')} g, and between ${m('485')} and ${m('515')} g</td><td class="m">6</td><td>L86–89</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the marks actually go</div>
      Q1 carries one mark for the complement rather than four cases; Q3 one for changing the second fork;
      Q4 one for the denominator ${m('P(faulty)')} rather than ${m('1')}; Q5 one for the complement in
      ${m('P(X ≥ 1)')}. Four of the forty marks are for one decision each.</div>`
    },
    {
      h: 'The decision tree for the whole block',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>The question says</th><th>Use</th><th>Formula</th></tr></thead>
      <tbody>
        <tr><td>“committee”, “hand”, “selection”</td><td>combinations</td><td class="m">${f('C(a, j)·C(b, k)', 'C(a+b, j+k)')}</td></tr>
        <tr><td>“or”, “either”</td><td>the addition rule</td><td class="m">P(A) + P(B) − P(A ∩ B)</td></tr>
        <tr><td>“and”, “then”</td><td>the multiplication rule</td><td class="m">P(A)P(B | A)</td></tr>
        <tr><td>“at least one”</td><td>the complement</td><td class="m">1 − P(none)</td></tr>
        <tr><td>“given that”</td><td>conditional</td><td class="m">${f('P(A ∩ B)', 'P(B)')}</td></tr>
        <tr><td>“exactly ${m('k')} out of ${m('n')}”</td><td>binomial</td><td class="m">C(n, k)p^k(1−p)^(n−k)</td></tr>
        <tr><td>“a measured quantity”, “heights”, “masses”</td><td>normal</td><td class="m">z = ${f('x − μ', 'σ')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The five slips that account for most lost marks</span>
      <ul>
        <li>counting ${m('m')} and ${m('n')} by different methods;</li>
        <li>adding without subtracting the overlap;</li>
        <li>keeping the denominator fixed in a without-replacement tree;</li>
        <li>swapping ${m('P(A | B)')} and ${m('P(B | A)')};</li>
        <li>treating a without-replacement count as binomial.</li>
      </ul></div>`
    },
    {
      h: 'Looking forward',
      html: `<p>Lessons 92–100 are the Cambridge revision block: complex numbers and the Argand diagram,
      loci in the complex plane, and differential equations. It is the last new mathematics of the school
      course, and the first mathematics of the university one.</p>
      {{fig:binomialBars:The last picture of the probability block — and the shape the normal curve takes over.}}
      <div class="keybox"><div class="klabel">One habit to carry forward</div>
      Probability rewarded naming the situation before choosing a formula. Complex numbers and
      differential equations reward naming the <b>form</b> before choosing a method — Cartesian or polar,
      separable or not. The habit is the same; only the vocabulary changes.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q1: a committee of 4 from 6 men and 5 women — ' + m('P') + '(at least 1 woman).',
      steps: [
        [m('n = C(11, 4) = 330'), ''],
        [m('P(no woman) = ' + f('C(6, 4)', '330') + ' = ' + f('15', '330')), 'The complement.'],
        [m('P = 1 − ' + f('15', '330') + ' = ' + f('315', '330') + ' = ' + f('21', '22')), '']
      ],
      ans: m(f('21', '22')) + ' ≈ ' + m('0.955')
    },
    {
      q: 'Model answer, Q4: machines ' + m('65\\%/2\\%') + ' and ' + m('35\\%/6\\%') + '.',
      steps: [
        [m('P(F) = 0.65(0.02) + 0.35(0.06)'), ''],
        [m('= 0.013 + 0.021 = 0.034'), ''],
        [m('P(B | F) = ' + f('0.021', '0.034')), ''],
        [m('≈ 0.618'), 'Machine B makes a third of the output but most of the faults.']
      ],
      ans: m('0.034') + ' and ' + m('≈ 0.618')
    },
    {
      q: 'Model answer, Q5: ' + m('X ~ B(12, 0.25)') + '.',
      steps: [
        [m('μ = 3'), ''],
        [m('σ² = 12(0.25)(0.75) = 2.25 ⇒ σ = 1.5'), ''],
        [m('P(X = 3) = C(12, 3)(0.25)³(0.75)⁹ ≈ 0.258'), ''],
        [m('P(X ≥ 1) = 1 − 0.75¹² ≈ 0.968'), 'Complement.']
      ],
      ans: m('μ = 3, σ = 1.5') + ', ' + m('0.258') + ', ' + m('0.968')
    }
  ],
  modelNote: 'Work Q4 twice — once dividing by 0.034, once by 1 — and let the class say which question each answers.',
  interactive: {
    type: 'quiz',
    title: 'Twelve questions on the probability block',
    hint: 'Two from each pair of lessons.',
    items: [
      { q: 'A committee of 3 from 10:', a: [m('30'), m('120'), m('720'), m('1000')], c: 1, why: m('C(10, 3)') + '.' },
      { q: 'Order matters means:', a: [m('C(n, k)'), m('P(n, k)'), m('n!'), m('k!')], c: 1, why: 'Permutations.' },
      { q: m('P(A ∪ B)') + ':', a: [m('P(A) + P(B)'), m('P(A) + P(B) − P(A ∩ B)'), m('P(A)P(B)'), m('1 − P(A)')], c: 1, why: 'Remove the overlap.' },
      { q: m('(A ∪ B)′') + ':', a: [m('A′ ∪ B′'), m('A′ ∩ B′'), m('A ∩ B'), m('U')], c: 1, why: 'De Morgan.' },
      { q: m('P(A ∩ B)') + ' in general:', a: [m('P(A)P(B)'), m('P(A)P(B | A)'), m('P(A) + P(B)'), m('0')], c: 1, why: 'Always true.' },
      { q: 'Without replacement, the denominator:', a: ['stays', 'drops by one', 'doubles', 'is 1'], c: 1, why: 'One object fewer.' },
      { q: 'Total probability sums over:', a: ['any events', 'a partition', 'independent events', 'nothing'], c: 1, why: 'Exclusive and exhaustive.' },
      { q: m('P(B | A)') + ' divides by:', a: [m('P(B)'), m('P(A)'), m('1'), m('P(A ∪ B)')], c: 1, why: 'The shrunken space.' },
      { q: m('B(n, p)') + ' needs ' + m('p') + ':', a: ['small', 'constant', 'large', 'variable'], c: 1, why: 'Condition 3.' },
      { q: 'Its mean:', a: [m('np'), m('np(1 − p)'), m('p'), m(sr('np'))], c: 0, why: 'The expected number.' },
      { q: 'Within two ' + m('σ') + ' lies:', a: [m('68\\%'), m('95\\%'), m('99.7\\%'), m('50\\%')], c: 1, why: 'The middle rule.' },
      { q: m('z = 2') + ' means:', a: ['twice the mean', 'two ' + m('σ') + ' above the mean', 'a probability of 2', 'nothing'], c: 1, why: 'Standardised distance.' }
    ]
  },
  quiz: [
    { q: 'Q1 is quickest by:', a: ['four cases', 'the complement', 'a tree', 'a table'], c: 1, why: 'One subtraction.' },
    { q: 'Q3 needs the second fork to:', a: ['stay the same', 'change', 'be doubled', 'be ignored'], c: 1, why: 'Without replacement.' },
    { q: 'Q4’s denominator is:', a: [m('1'), m('P(faulty)'), m('0.35'), m('0.06')], c: 1, why: 'Given faulty.' },
    { q: 'Lessons 92–100 revise:', a: ['probability', 'complex numbers and differential equations', 'trigonometry', 'integration'], c: 1, why: 'The Cambridge block.' }
  ],
  practice: {
    easy: [
      [m('C(11, 4)'), m('330')],
      [m('C(6, 4)'), m('15')],
      [m('P(A ∩ B)') + ' when ' + m('P(A) = 0.5, P(B) = 0.4, P(A ∪ B) = 0.7'), m('0.2')],
      ['Are those events independent?', 'Yes — ' + m('0.5 × 0.4 = 0.2')],
      [m('μ') + ' of ' + m('B(12, 0.25)'), m('3')],
      [m('σ') + ' of ' + m('B(12, 0.25)'), m('1.5')],
      [m('z') + ' for ' + m('530') + ' in ' + m('N(500, 15²)'), m('2')]
    ],
    med: [
      [m('P') + '(exactly 2 women) on a committee of 4 from 6 men and 5 women', m(f('150', '330') + ' = ' + f('5', '11'))],
      [m('P') + '(at least 1 woman) on the same committee', m(f('21', '22'))],
      ['Bag of 7 red, 5 blue: ' + m('P') + '(same colour) without replacement', m(f('31', '66'))],
      ['Same bag: ' + m('P') + '(second red)', m(f('7', '12'))],
      ['Machines ' + m('65/2\\%') + ' and ' + m('35/6\\%') + ': ' + m('P') + '(faulty)', m('0.034')],
      ['Same: ' + m('P') + '(B | faulty)', m('≈ 0.618')],
      [m('P(X = 3)') + ' for ' + m('B(12, 0.25)'), m('≈ 0.258')]
    ],
    hard: [
      [m('P(X ≥ 1)') + ' for ' + m('B(12, 0.25)'), m('≈ 0.968')],
      ['Proportion of ' + m('N(500, 15²)') + ' above ' + m('530'), m('≈ 2.3\\%')],
      ['Proportion of ' + m('N(500, 15²)') + ' between ' + m('485') + ' and ' + m('515'), m('≈ 68\\%')],
      ['A committee of 5 from 6 men and 5 women with more women than men: ' + m('P'), m(f('141', '462')) + ' ≈ ' + m('0.305')],
      ['Three components fail with probability ' + m('0.05') + ' each: ' + m('P') + ' at least one fails', m('≈ 0.143')],
      ['For ' + m('B(n, 0.25)') + ' with ' + m('σ = 3') + ', find ' + m('n'), m('n = 48')],
      ['A test is ' + m('98\\%') + ' accurate; ' + m('0.5\\%') + ' have the disease: ' + m('P') + '(disease | positive)', m('≈ 0.198')]
    ]
  },
  hwTitle: 'Homework — 4 tasks',
  hwNote: 'Bring the decision tree to Lesson 92; complex numbers start from a blank page.',
  homework: [
    'Rewrite in full every control-work question that lost a mark, naming the slip in the margin.',
    'Copy the decision-tree table and add one worked example of your own to each row.',
    'A bag holds 8 white and 4 black balls; three are drawn without replacement. Find the probability that all three are white and the probability that at least one is black.',
    'Write your target for the revision block in one checkable sentence, and date it.'
  ]
});

/* ============================== 34 ============================== */
G11_ALG.push({
  id: 'a11-34', stream: 'alg', grade: 11, quarter: 4, lessons: '92–94', hours: 3,
  title: 'Complex numbers — arithmetic, conjugates and the Argand diagram [Cambridge revision]',
  subtitle: 'One new symbol, i² = −1, and every quadratic finally has two roots.',
  uz: 'Algebra 11, qo‘shimcha bo‘lim', uzPage: 'pp. 411–428',
  cam: 'P2/P3 11.1–11.4', camPage: 'Pure Mathematics 2 & 3, pp. 246–262', wb: 'Exercise 11A–11D',
  objectives: [
    'Add, subtract, multiply and divide complex numbers in the form a + bi.',
    'Use the conjugate to divide, and to state the roots of a real quadratic.',
    'Plot a complex number on the Argand diagram.',
    'Find the modulus and argument, and convert to polar form.'
  ],
  terms: [
    ['Complex number', 'Kompleks son', 'Комплексное число'],
    ['Imaginary unit', 'Mavhum birlik', 'Мнимая единица'],
    ['Real part', 'Haqiqiy qism', 'Действительная часть'],
    ['Imaginary part', 'Mavhum qism', 'Мнимая часть'],
    ['Conjugate', 'Qo‘shma son', 'Сопряжённое число'],
    ['Argand diagram', 'Argan diagrammasi', 'Диаграмма Аргана'],
    ['Modulus', 'Modul', 'Модуль'],
    ['Argument', 'Argument', 'Аргумент'],
    ['Polar form', 'Trigonometrik shakl', 'Тригонометрическая форма'],
    ['Complex plane', 'Kompleks tekislik', 'Комплексная плоскость'],
    ['Purely imaginary', 'Sof mavhum', 'Чисто мнимое'],
    ['Equating parts', 'Qismlarni tenglashtirish', 'Приравнивание частей']
  ],
  timing: [[20, 'The new number'], [30, 'Arithmetic'], [30, 'The conjugate and division'], [30, 'The Argand diagram'], [25, 'Modulus and argument'], [5, 'Homework']],
  sections: [
    {
      h: 'The new number',
      html: `<p>The equation ${m('x² + 1 = 0')} has no real solution. Define one:</p>
      ${eq(m('i² = −1'), true)}
      <p>Then every number of the form ${m('z = a + bi')}, with ${m('a')} and ${m('b')} real, is a
      <b>complex number</b>: ${m('a = Re(z)')} is the real part, ${m('b = Im(z)')} the imaginary part.
      Note that ${m('Im(z)')} is the real number ${m('b')}, not ${m('bi')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">z</th><th class="m">Re(z)</th><th class="m">Im(z)</th><th>Kind</th></tr></thead>
      <tbody>
        <tr><td class="m">3 + 4i</td><td class="m">3</td><td class="m">4</td><td>complex</td></tr>
        <tr><td class="m">−2i</td><td class="m">0</td><td class="m">−2</td><td>purely imaginary</td></tr>
        <tr><td class="m">7</td><td class="m">7</td><td class="m">0</td><td>real</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Powers of ${m('i')} cycle with period four</div>
      ${eq(m('i¹ = i,  i² = −1,  i³ = −i,  i⁴ = 1'), true)}
      So ${m('i^n')} depends only on ${m('n')} modulo ${m('4')}: ${m('i²⁰²⁶ = i² = −1')}, because
      ${m('2026 = 4 × 506 + 2')}.</div>
      <div class="warn"><span class="wl">Two complex numbers are equal only if both parts match</span>
      ${m('a + bi = c + di')} means ${m('a = c')} <b>and</b> ${m('b = d')}. This turns one complex
      equation into two real ones — the standard technique for finding an unknown complex number.</div>`
    },
    {
      h: 'Arithmetic',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Operation</th><th>Rule</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>add</td><td>parts separately</td><td class="m">(3+4i) + (1−2i) = 4 + 2i</td></tr>
        <tr><td>subtract</td><td>parts separately</td><td class="m">(3+4i) − (1−2i) = 2 + 6i</td></tr>
        <tr><td>multiply</td><td>expand, then ${m('i² = −1')}</td><td class="m">(3+4i)(1−2i) = 11 − 2i</td></tr>
        <tr><td>square</td><td>as a binomial</td><td class="m">(3+4i)² = −7 + 24i</td></tr>
      </tbody></table></div>
      <p>The multiplication in full: ${m('(3+4i)(1−2i) = 3 − 6i + 4i − 8i² = 3 − 2i + 8 = 11 − 2i')}.
      Nothing is new except the last step, where ${m('−8i²')} becomes ${m('+8')}.</p>
      <div class="keybox"><div class="klabel">Every quadratic now has two roots</div>
      When ${m('D < 0')} the formula still works: ${m(sr('−16') + ' = 4i')}, so
      ${m('x² − 2x + 5 = 0')} gives ${m('x = ' + f('2 ± 4i', '2') + ' = 1 ± 2i')}. Real quadratics with
      ${m('D < 0')} have <b>conjugate</b> roots — always a pair.</div>`
    },
    {
      h: 'The conjugate and division',
      html: `${eq(m('z = a + bi ⇒ z̄ = a − bi') + ',   ' + m('z z̄ = a² + b²') + ' — always real and non-negative', true)}
      <p>That last identity is the whole reason division works. To divide, multiply top and bottom by the
      conjugate of the bottom:</p>
      ${eq(m('' + f('3 + 4i', '1 − 2i') + ' = ' + f('(3 + 4i)(1 + 2i)', '(1 − 2i)(1 + 2i)') + ' = ' + f('−5 + 10i', '5') + ' = −1 + 2i'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Property</th><th>Statement</th></tr></thead>
      <tbody>
        <tr><td>sum</td><td class="m">z + z̄ = 2Re(z)</td></tr>
        <tr><td>difference</td><td class="m">z − z̄ = 2i·Im(z)</td></tr>
        <tr><td>product</td><td class="m">z z̄ = |z|²</td></tr>
        <tr><td>of a sum</td><td class="m">(z + w)‾ = z̄ + w̄</td></tr>
        <tr><td>of a product</td><td class="m">(zw)‾ = z̄ w̄</td></tr>
      </tbody></table></div>
      <p>The last two say that conjugation respects arithmetic — which is why the non-real roots of a
      <b>real</b> polynomial always come in conjugate pairs.</p>`
    },
    {
      h: 'The Argand diagram',
      html: `<p>Plot ${m('a + bi')} at the point ${m('(a, b)')}: the horizontal axis is the real one, the
      vertical the imaginary. The plane of complex numbers is the <b>Argand diagram</b>.</p>
      {{fig:argand:z as a point, its modulus as a distance, its argument as an angle — and z̄ as the reflection in the real axis.}}
      <div class="tablewrap"><table>
      <thead><tr><th>Operation</th><th>On the diagram</th></tr></thead>
      <tbody>
        <tr><td>addition</td><td>vector addition — the parallelogram rule</td></tr>
        <tr><td>conjugation</td><td>reflection in the real axis</td></tr>
        <tr><td>multiplying by ${m('−1')}</td><td>rotation by ${m('180°')}</td></tr>
        <tr><td>multiplying by ${m('i')}</td><td>rotation by ${m('90°')} anticlockwise</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Multiplying by ${m('i')} is a quarter turn</div>
      ${m('i(a + bi) = ai + bi² = −b + ai')}: the point ${m('(a, b)')} moves to ${m('(−b, a)')}, which is
      exactly a ${m('90°')} rotation about the origin. This single fact makes complex numbers a tool for
      geometry.</div>`
    },
    {
      h: 'Modulus and argument',
      html: `${eq(m('|z| = ' + sr('a² + b²')) + ',   ' + m('arg z = θ') + ' with ' + m('tan θ = ' + f('b', 'a')), true)}
      <p>The modulus is the distance from the origin; the argument is the angle from the positive real
      axis, measured anticlockwise and normally taken in ${m('(−π, π]')}.</p>
      <div class="warn"><span class="wl">The quadrant decides the argument, not the calculator</span>
      For ${m('z = −1 + i')}, ${m('tan θ = −1')} and a calculator returns ${m('−45°')}. But the point is
      in the <b>second</b> quadrant, so ${m('arg z = 135° = ' + f('3π', '4'))}. Always plot first.</div>
      ${eq(m('z = r(cos θ + i sin θ)') + '   — the polar form', true)}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">z</th><th class="m">|z|</th><th class="m">arg z</th><th>Polar</th></tr></thead>
      <tbody>
        <tr><td class="m">1 + i</td><td class="m">${sr('2')}</td><td class="m">${f('π', '4')}</td><td class="m">${sr('2')}(cos ${f('π', '4')} + i sin ${f('π', '4')})</td></tr>
        <tr><td class="m">−1 + i</td><td class="m">${sr('2')}</td><td class="m">${f('3π', '4')}</td><td class="m">${sr('2')}(cos ${f('3π', '4')} + …)</td></tr>
        <tr><td class="m">−2i</td><td class="m">2</td><td class="m">−${f('π', '2')}</td><td class="m">2(cos(−${f('π', '2')}) + …)</td></tr>
        <tr><td class="m">3</td><td class="m">3</td><td class="m">0</td><td class="m">3(cos 0 + i sin 0)</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Why polar form is worth the trouble</div>
      ${eq(m('|zw| = |z||w|') + '     ' + m('arg(zw) = arg z + arg w'), true)}
      Multiplication <b>multiplies</b> the moduli and <b>adds</b> the arguments. A product that takes four
      lines in Cartesian form takes one in polar form — and powers become trivial.</div>`
    }
  ],
  examples: [
    {
      q: 'Simplify ' + m('(3 + 4i)(1 − 2i)') + ' and ' + m(f('3 + 4i', '1 − 2i')) + '.',
      steps: [
        [m('(3+4i)(1−2i) = 3 − 6i + 4i − 8i²'), ''],
        [m('= 3 − 2i + 8 = 11 − 2i'), ''],
        [m(f('(3+4i)(1+2i)', '(1−2i)(1+2i)') + ' = ' + f('3 + 6i + 4i − 8', '5')), 'Multiply by the conjugate.'],
        [m('= ' + f('−5 + 10i', '5') + ' = −1 + 2i'), '']
      ],
      ans: m('11 − 2i') + ' and ' + m('−1 + 2i')
    },
    {
      q: 'Solve ' + m('x² − 2x + 5 = 0') + '.',
      steps: [
        [m('D = 4 − 20 = −16'), ''],
        [m(sr('−16') + ' = 4i'), ''],
        [m('x = ' + f('2 ± 4i', '2')), ''],
        [m('x = 1 ± 2i'), 'A conjugate pair.']
      ],
      ans: m('x = 1 + 2i') + ' and ' + m('x = 1 − 2i')
    },
    {
      q: 'Find ' + m('|z|') + ' and ' + m('arg z') + ' for ' + m('z = −1 + i') + '.',
      steps: [
        [m('|z| = ' + sr('1 + 1') + ' = ' + sr('2')), ''],
        [m('tan θ = −1'), 'The calculator says ' + m('−45°') + '.'],
        ['The point is in the second quadrant.', ''],
        [m('arg z = ' + f('3π', '4')), '']
      ],
      ans: m('|z| = ' + sr('2')) + ', ' + m('arg z = ' + f('3π', '4'))
    },
    {
      q: 'Find real ' + m('x') + ' and ' + m('y') + ' with ' + m('(x + yi)(2 − i) = 5 + 5i') + '.',
      steps: [
        [m('2x − xi + 2yi − yi² = (2x + y) + (2y − x)i'), ''],
        [m('2x + y = 5') + ' and ' + m('2y − x = 5'), 'Equate parts.'],
        [m('x = 1, y = 3'), ''],
        ['Check: ' + m('(1 + 3i)(2 − i) = 2 − i + 6i + 3 = 5 + 5i') + '.', '']
      ],
      ans: m('x = 1, y = 3')
    }
  ],
  modelNote: 'Draw the Argand diagram once and do every example on it — the geometry makes the algebra memorable.',
  interactive: {
    type: 'coordPlane',
    title: 'The complex plane',
    hint: 'Move the point and read the modulus and the argument.'
  },
  quiz: [
    { q: m('i²') + ' equals:', a: [m('1'), m('−1'), m('i'), m('0')], c: 1, why: 'The definition.' },
    { q: m('i²⁰²⁶') + ' equals:', a: [m('1'), m('i'), m('−1'), m('−i')], c: 2, why: m('2026 ≡ 2') + ' mod 4.' },
    { q: m('Im(3 + 4i)') + ' is:', a: [m('4i'), m('4'), m('3'), m('7')], c: 1, why: 'A real number.' },
    { q: 'To divide, multiply by:', a: ['the reciprocal', 'the conjugate of the denominator', m('i'), 'the modulus'], c: 1, why: 'It makes the bottom real.' },
    { q: m('z z̄') + ' equals:', a: [m('|z|'), m('|z|²'), m('2Re(z)'), m('0')], c: 1, why: 'Always real.' },
    { q: 'Conjugation on the Argand diagram is:', a: ['a rotation', 'reflection in the real axis', 'an enlargement', 'a translation'], c: 1, why: m('b → −b') + '.' },
    { q: 'Multiplying by ' + m('i') + ' is:', a: [m('90°') + ' anticlockwise', m('180°'), 'a reflection', 'a doubling'], c: 0, why: m('(a, b) → (−b, a)') + '.' },
    { q: m('arg(−1 + i)') + ' is:', a: [m('−' + f('π', '4')), m(f('3π', '4')), m(f('π', '4')), m('−' + f('3π', '4'))], c: 1, why: 'Second quadrant.' }
  ],
  practice: {
    easy: [
      [m('(3 + 4i) + (1 − 2i)'), m('4 + 2i')],
      [m('(3 + 4i) − (1 − 2i)'), m('2 + 6i')],
      [m('i³'), m('−i')],
      [m('i⁴'), m('1')],
      [m('|3 + 4i|'), m('5')],
      ['Conjugate of ' + m('2 − 5i'), m('2 + 5i')],
      [m('Re(7)') + ' and ' + m('Im(7)'), m('7') + ', ' + m('0')]
    ],
    med: [
      [m('(3 + 4i)(1 − 2i)'), m('11 − 2i')],
      [m('(3 + 4i)²'), m('−7 + 24i')],
      [m(f('3 + 4i', '1 − 2i')), m('−1 + 2i')],
      [m(f('1', 'i')), m('−i')],
      ['Solve ' + m('x² − 2x + 5 = 0'), m('1 ± 2i')],
      [m('|−1 + i|') + ' and ' + m('arg(−1 + i)'), m(sr('2')) + ', ' + m(f('3π', '4'))],
      [m('i²⁰²⁶'), m('−1')]
    ],
    hard: [
      ['Find real ' + m('x, y') + ' with ' + m('(x + yi)(2 − i) = 5 + 5i'), m('x = 1, y = 3')],
      ['Solve ' + m('z² = 3 + 4i'), m('z = ±(2 + i)')],
      ['Write ' + m('1 + ' + sr('3') + 'i') + ' in polar form', m('2(cos ' + f('π', '3') + ' + i sin ' + f('π', '3') + ')')],
      ['Show that ' + m('(1 + i)⁸ = 16'), m('|z| = ' + sr('2')) + ', ' + m('arg = ' + f('π', '4')) + ', so ' + m('16(cos 2π + i sin 2π)')],
      ['One root of ' + m('x³ − 5x² + 17x − 13 = 0') + ' is ' + m('1') + ': find the others', m('2 ± 3i')],
      ['Prove that ' + m('z + z̄') + ' is always real and ' + m('z − z̄') + ' always purely imaginary', m('2a') + ' and ' + m('2bi')],
      ['Simplify ' + m(f('(1 + i)³', '1 − i')), m('−1 + i')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Plot every answer on an Argand diagram; the picture catches quadrant errors at once.',
  homework: [
    'Simplify ' + m('(2 − 3i)(4 + i)') + ' and ' + m(f('2 − 3i', '4 + i')) + '.',
    'Solve ' + m('x² + 4x + 13 = 0') + ' and plot both roots on an Argand diagram.',
    'Find ' + m('|z|') + ' and ' + m('arg z') + ' for ' + m('z = −3 − 3i') + ', and write ' + m('z') + ' in polar form.',
    'Find real ' + m('x') + ' and ' + m('y') + ' such that ' + m('(x + yi)(1 + 2i) = 4 − 3i') + '.',
    'Show that ' + m('i^n') + ' takes only four values, and evaluate ' + m('i¹⁰⁰') + ' and ' + m('i²⁰²⁷') + '.'
  ]
});

/* ============================== 35 ============================== */
G11_ALG.push({
  id: 'a11-35', stream: 'alg', grade: 11, quarter: 4, lessons: '95–96', hours: 2,
  title: 'Complex numbers geometrically, and loci in the complex plane [Cambridge revision]',
  subtitle: 'Modulus is distance, argument is direction — and every locus becomes a picture.',
  uz: 'Algebra 11, qo‘shimcha bo‘lim', uzPage: 'pp. 429–440',
  cam: 'P2/P3 11.5–11.6', camPage: 'Pure Mathematics 2 & 3, pp. 263–276', wb: 'Exercise 11E–11F',
  objectives: [
    'Interpret |z − a| as the distance from z to a.',
    'Recognise the circle, the perpendicular bisector and the half-line as loci.',
    'Sketch a region defined by inequalities in the complex plane.',
    'Find the greatest and least value of |z| on a given locus.'
  ],
  terms: [
    ['Locus', 'Geometrik o‘rin', 'Геометрическое место'],
    ['Distance', 'Masofa', 'Расстояние'],
    ['Circle', 'Aylana', 'Окружность'],
    ['Perpendicular bisector', 'O‘rta perpendikulyar', 'Серединный перпендикуляр'],
    ['Half-line (ray)', 'Nur', 'Луч'],
    ['Region', 'Soha', 'Область'],
    ['Inequality', 'Tengsizlik', 'Неравенство'],
    ['Greatest value', 'Eng katta qiymat', 'Наибольшее значение'],
    ['Least value', 'Eng kichik qiymat', 'Наименьшее значение'],
    ['Triangle inequality', 'Uchburchak tengsizligi', 'Неравенство треугольника']
  ],
  timing: [[15, 'Distance and direction'], [25, 'The three standard loci'], [25, 'Regions'], [25, 'Greatest and least'], [10, 'Homework']],
  sections: [
    {
      h: 'Distance and direction',
      html: `<div class="keybox"><div class="klabel">Two readings that unlock everything</div>
      ${eq(m('|z − a|') + ' is the <b>distance</b> from the point ' + m('z') + ' to the point ' + m('a'), true)}
      ${eq(m('arg(z − a)') + ' is the <b>direction</b> of ' + m('z') + ' as seen from ' + m('a'), true)}
      With ${m('a = 0')} these become the modulus and argument of ${m('z')} itself.</div>
      <p>So a condition on ${m('|z − a|')} is a condition on distance, and a condition on
      ${m('arg(z − a)')} is a condition on direction. Every locus question in this lesson is one of the
      two.</p>
      <div class="warn"><span class="wl">${m('|z − a|')}, not ${m('|z + a|')}</span>
      ${m('|z + 3|')} is the distance to ${m('−3')}, not to ${m('3')} — write it as ${m('|z − (−3)|')}
      before reading off the centre. This single sign is where most locus marks are lost.</div>`
    },
    {
      h: 'The three standard loci',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Condition</th><th>Locus</th><th>Described by</th></tr></thead>
      <tbody>
        <tr><td class="m">|z − a| = r</td><td>a <b>circle</b></td><td>centre ${m('a')}, radius ${m('r')}</td></tr>
        <tr><td class="m">|z − a| = |z − b|</td><td>a <b>straight line</b></td><td>the perpendicular bisector of ${m('ab')}</td></tr>
        <tr><td class="m">arg(z − a) = θ</td><td>a <b>half-line</b></td><td>from ${m('a')} (excluded) at angle ${m('θ')}</td></tr>
      </tbody></table></div>
      {{fig:argandLoci:A circle and a perpendicular bisector — the two commonest loci, on one diagram.}}
      <p><b>Worked readings.</b></p>
      <ul>
        <li>${m('|z − 2 − i| = 3')}: circle, centre ${m('2 + i')}, radius ${m('3')}.</li>
        <li>${m('|z| = |z − 4|')}: the perpendicular bisector of ${m('0')} and ${m('4')}, that is the
        vertical line ${m('Re(z) = 2')}.</li>
        <li>${m('arg(z − 1) = ' + f('π', '4'))}: the half-line from ${m('1')} going up and to the right at
        ${m('45°')}, with ${m('1')} itself excluded (the argument of ${m('0')} is undefined).</li>
      </ul>
      <div class="keybox"><div class="klabel">The half-line is half a line</div>
      ${m('arg(z − a) = ' + f('π', '4'))} gives only the ray in that direction. The opposite ray has
      argument ${m('−' + f('3π', '4'))}, and belongs to a different locus. Drawing the whole line is the
      standard error.</div>`
    },
    {
      h: 'Regions',
      html: `<p>Replace ${m('=')} by an inequality and the curve becomes a region — shaded, with the
      boundary solid or dashed exactly as on a number line.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Condition</th><th>Region</th></tr></thead>
      <tbody>
        <tr><td class="m">|z − a| < r</td><td>inside the circle, boundary excluded</td></tr>
        <tr><td class="m">|z − a| ≥ r</td><td>outside, boundary included</td></tr>
        <tr><td class="m">|z − a| ≤ |z − b|</td><td>the half-plane nearer ${m('a')}</td></tr>
        <tr><td class="m">0 ≤ arg(z − a) ≤ ${f('π', '2')}</td><td>a quarter-plane wedge at ${m('a')}</td></tr>
      </tbody></table></div>
      <p>Two or three conditions together give the intersection — a lens, a segment of a disc, a wedge cut
      by a circle. Sketch each boundary first, then shade only where all conditions hold.</p>
      <div class="keybox"><div class="klabel">Test one point</div>
      After shading, pick an easy point — often ${m('0')} — and check it satisfies every condition. If it
      does and it is inside your shading, the region is right; if it does and it is outside, you have
      shaded the complement.</div>`
    },
    {
      h: 'Greatest and least',
      html: `<p>“Find the greatest value of ${m('|z|')} on this locus” asks for the point of the locus
      furthest from the origin. On a circle this needs no calculus at all.</p>
      ${eq(m('|a| − r ≤ |z| ≤ |a| + r') + '   for ' + m('z') + ' on the circle ' + m('|z − a| = r'), true)}
      <p>Both extremes are on the line through ${m('O')} and the centre: the nearest point on the near
      side, the furthest diametrically opposite.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Locus</th><th class="m">|a|</th><th>Least ${m('|z|')}</th><th>Greatest ${m('|z|')}</th></tr></thead>
      <tbody>
        <tr><td class="m">|z − 3 − 4i| = 2</td><td class="m">5</td><td class="m">3</td><td class="m">7</td></tr>
        <tr><td class="m">|z − 6i| = 2</td><td class="m">6</td><td class="m">4</td><td class="m">8</td></tr>
        <tr><td class="m">|z − 1| = 3</td><td class="m">1</td><td class="m">0</td><td class="m">4</td></tr>
      </tbody></table></div>
      <p>The last row: the circle passes through the origin, so the least modulus is ${m('0')} — and
      ${m('|a| − r')} would have given ${m('−2')}, which is impossible. When the origin is inside or on
      the circle, the least value is ${m('0')}.</p>
      <div class="keybox"><div class="klabel">The triangle inequality behind it</div>
      ${eq(m('| |z| − |a| | ≤ |z − a| ≤ |z| + |a|'), true)}
      Both bounds above are this inequality with ${m('|z − a| = r')}, and both are attained — which is
      what makes the answers exact rather than merely bounds.</div>`
    }
  ],
  examples: [
    {
      q: 'Describe the locus ' + m('|z − 2 − i| = 3') + ' and sketch it.',
      steps: [
        ['Write it as ' + m('|z − (2 + i)| = 3') + '.', ''],
        ['Distance from ' + m('z') + ' to ' + m('2 + i') + ' is ' + m('3') + '.', ''],
        ['A circle, centre ' + m('(2, 1)') + ', radius ' + m('3') + '.', '']
      ],
      ans: 'A circle of centre ' + m('2 + i') + ' and radius ' + m('3')
    },
    {
      q: 'Describe the locus ' + m('|z − 1| = |z + 3|') + '.',
      steps: [
        [m('|z − 1| = |z − (−3)|'), 'Both as distances.'],
        ['Equidistant from ' + m('1') + ' and ' + m('−3') + '.', ''],
        ['The perpendicular bisector: the vertical line ' + m('Re(z) = −1') + '.', '']
      ],
      ans: 'The line ' + m('Re(z) = −1')
    },
    {
      q: 'Find the greatest and least values of ' + m('|z|') + ' for ' + m('|z − 3 − 4i| = 2') + '.',
      steps: [
        [m('|a| = |3 + 4i| = 5'), ''],
        ['Least ' + m('5 − 2 = 3') + '.', ''],
        ['Greatest ' + m('5 + 2 = 7') + '.', 'Both on the line through the origin and the centre.']
      ],
      ans: m('3') + ' and ' + m('7')
    },
    {
      q: 'Sketch the region ' + m('|z − 2i| ≤ 2') + ' and ' + m('0 ≤ arg z ≤ ' + f('π', '2')) + '.',
      steps: [
        ['Disc of centre ' + m('2i') + ', radius ' + m('2') + ', boundary included.', ''],
        ['Wedge from the origin between the positive real and positive imaginary axes.', ''],
        ['The intersection is the right half of the disc.', ''],
        ['Check ' + m('z = 1 + 2i') + ': in the disc, and ' + m('arg ≈ 63°') + ' — inside.', '']
      ],
      ans: 'The right half of the disc, boundaries included'
    }
  ],
  modelNote: 'Give each pair squared paper and four loci to draw before any algebra; the descriptions then write themselves.',
  interactive: {
    type: 'circleAngles',
    title: 'Circles, chords and directions',
    hint: 'The same geometry the loci rest on.'
  },
  quiz: [
    { q: m('|z − a|') + ' means:', a: ['the argument', 'the distance from ' + m('z') + ' to ' + m('a'), 'the sum', 'the product'], c: 1, why: 'Distance in the plane.' },
    { q: m('|z − a| = r') + ' is:', a: ['a line', 'a circle', 'a half-line', 'a point'], c: 1, why: 'Constant distance.' },
    { q: m('|z − a| = |z − b|') + ' is:', a: ['a circle', 'the perpendicular bisector of ' + m('ab'), 'a half-line', 'a point'], c: 1, why: 'Equidistant.' },
    { q: m('arg(z − a) = θ') + ' is:', a: ['a whole line', 'a half-line from ' + m('a'), 'a circle', 'a wedge'], c: 1, why: 'One direction only.' },
    { q: m('|z + 3|') + ' is the distance to:', a: [m('3'), m('−3'), m('3i'), m('0')], c: 1, why: m('|z − (−3)|') + '.' },
    { q: 'On ' + m('|z − 3 − 4i| = 2') + ', the greatest ' + m('|z|') + ' is:', a: [m('3'), m('5'), m('7'), m('9')], c: 2, why: m('|a| + r') + '.' },
    { q: 'If the origin is inside the circle, the least ' + m('|z|') + ' is:', a: [m('|a| − r'), m('0'), m('r'), m('|a|')], c: 1, why: 'The circle surrounds it.' }
  ],
  practice: {
    easy: [
      ['Describe ' + m('|z| = 4'), 'Circle, centre ' + m('0') + ', radius ' + m('4')],
      ['Describe ' + m('|z − 2| = 3'), 'Circle, centre ' + m('2') + ', radius ' + m('3')],
      ['Describe ' + m('|z + 3| = 1'), 'Circle, centre ' + m('−3') + ', radius ' + m('1')],
      ['Describe ' + m('|z| = |z − 4|'), 'The line ' + m('Re(z) = 2')],
      ['Describe ' + m('arg z = ' + f('π', '4')), 'Half-line from ' + m('0') + ' at ' + m('45°')],
      ['Describe ' + m('|z − i| < 2'), 'Inside the circle, boundary excluded'],
      ['Centre of ' + m('|z − 2 − i| = 3'), m('2 + i')]
    ],
    med: [
      ['Describe ' + m('|z − 1| = |z + 3|'), 'The line ' + m('Re(z) = −1')],
      ['Describe ' + m('|z − 2i| = |z − 4|'), 'The perpendicular bisector of ' + m('2i') + ' and ' + m('4')],
      ['Describe ' + m('arg(z − 1) = ' + f('π', '4')), 'Half-line from ' + m('1') + ', excluded'],
      ['Greatest ' + m('|z|') + ' on ' + m('|z − 3 − 4i| = 2'), m('7')],
      ['Least ' + m('|z|') + ' on the same', m('3')],
      ['Least ' + m('|z|') + ' on ' + m('|z − 1| = 3'), m('0')],
      ['Describe ' + m('|z − 2| ≤ |z|'), 'The half-plane ' + m('Re(z) ≥ 1')]
    ],
    hard: [
      ['Greatest and least ' + m('|z − 1|') + ' on ' + m('|z − 4 − 3i| = 2'), m('7') + ' and ' + m('3')],
      ['Sketch ' + m('|z − 2i| ≤ 2') + ' and ' + m('0 ≤ arg z ≤ ' + f('π', '2')), 'The right half of the disc'],
      ['Describe ' + m('|z − 1| = 2|z + 1|'), 'A circle — centre ' + m('−' + f('5', '3')) + ', radius ' + m(f('4', '3'))],
      ['Greatest ' + m('arg z') + ' on ' + m('|z − 4i| = 2'), m('π') + ' — the tangent from ' + m('O')],
      ['The region ' + m('|z| ≤ 3') + ' and ' + m('|z − 3| ≤ 3') + ': describe it', 'A lens between the two circles'],
      ['Show that ' + m('|z₁ + z₂| ≤ |z₁| + |z₂|') + ' with equality when the arguments are equal', 'The triangle inequality'],
      ['Find the points on ' + m('|z − 3 − 4i| = 2') + ' of greatest and least modulus', m('' + f('21 + 28i', '5')) + ' and ' + m(f('9 + 12i', '5'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw every locus before describing it; a sketch earns marks that words alone do not.',
  homework: [
    'Describe and sketch ' + m('|z − 3 + 2i| = 4') + ', giving the centre and the radius.',
    'Describe and sketch ' + m('|z − 2| = |z + 4i|') + '.',
    'Sketch the region satisfying both ' + m('|z − 2| ≤ 3') + ' and ' + m('Im(z) ≥ 0') + '.',
    'Find the greatest and least values of ' + m('|z|') + ' for ' + m('|z − 5 − 12i| = 4') + '.',
    'Explain in two sentences why ' + m('arg(z − a) = θ') + ' gives a half-line and not a whole line.'
  ]
});
