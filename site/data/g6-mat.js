/* Grade 6 · Mathematics · 204 hours (54 / 42 / 60 / 48)
   National KTP 2025–2026 — 170 national lessons in the national order, with a
   34-lesson Cambridge Stage 7 layer laid on top: one extra lesson a week.
   Cambridge layer: Lower Secondary Stage 7. */
var G6_MAT = [];

/* ============================== 01 ============================== */
G6_MAT.push({
  id: 'g6-01', stream: 'mat', grade: 6, quarter: 1, lessons: '1', hours: 1,
  title: 'Discuss and recall — the Grade 5 course',
  subtitle: 'An entry diagnostic: what Grade 5 left behind, and what Grade 6 will need on the first day.',
  uz: 'Matematika 6, kirish', uzPage: 'pp. 3–8',
  cam: 'Stage 6 diagnostic', camPage: 'Stage 7, pp. 1–6', wb: 'Entry test',
  objectives: [
    'Recall the four operations on whole numbers and on fractions.',
    'Recall the order of operations and the use of brackets.',
    'Recall perimeter, area and the units used for each.',
    'Identify, from the diagnostic, what needs revising this month.'
  ],
  terms: [
    ['Natural number', 'Natural son', 'Натуральное число'],
    ['Fraction', 'Kasr', 'Дробь'],
    ['Numerator', 'Surat', 'Числитель'],
    ['Denominator', 'Maxraj', 'Знаменатель'],
    ['Order of operations', 'Amallar tartibi', 'Порядок действий'],
    ['Perimeter', 'Perimetr', 'Периметр'],
    ['Area', 'Yuza', 'Площадь'],
    ['Diagnostic', 'Tashxis ishi', 'Диагностическая работа']
  ],
  timing: [[6, 'What Grade 5 covered'], [20, 'The diagnostic'], [10, 'Answers and diagnosis'], [4, 'The year ahead']],
  sections: [
    {
      h: 'What Grade 5 covered',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Block</th><th>What you should be able to do</th></tr></thead>
      <tbody>
        <tr><td>whole numbers</td><td>add, subtract, multiply and divide in columns</td></tr>
        <tr><td>order of operations</td><td>brackets, then ${m('×')} and ${m('÷')}, then ${m('+')} and ${m('−')}</td></tr>
        <tr><td>fractions</td><td>simplify, compare, add and subtract with a common denominator</td></tr>
        <tr><td>decimals</td><td>read, order, add and subtract</td></tr>
        <tr><td>measurement</td><td>perimeter and area of rectangles, and the units</td></tr>
        <tr><td>angles</td><td>measure with a protractor, and name acute, right and obtuse</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Nothing here is finished</div>
      Every one of these blocks returns this year in a longer form: fractions are divided, decimals are
      multiplied, and area moves from rectangles to circles.</div>`
    },
    {
      h: 'The diagnostic — 20 marks, 20 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>${m('348 + 2 976')} and ${m('5 004 − 1 897')}</td><td class="m">2</td></tr>
        <tr><td>2</td><td>${m('47 · 26')} and ${m('918 ÷ 27')}</td><td class="m">3</td></tr>
        <tr><td>3</td><td>${m('12 + 3 · (8 − 5)')}</td><td class="m">2</td></tr>
        <tr><td>4</td><td>Simplify ${m(f('18', '24'))} and compare ${m(f('3', '5'))} with ${m(f('5', '8'))}</td><td class="m">3</td></tr>
        <tr><td>5</td><td>${m(f('2', '3') + ' + ' + f('1', '4'))}</td><td class="m">3</td></tr>
        <tr><td>6</td><td>${m('4.7 + 2.85')} and ${m('9.1 − 3.62')}</td><td class="m">3</td></tr>
        <tr><td>7</td><td>A rectangle ${m('7 cm')} by ${m('4 cm')}: its perimeter and area</td><td class="m">4</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The answers</div>
      ${m('3 324')}; ${m('3 107')}; ${m('1 222')}; ${m('34')}; ${m('21')}; ${m(f('3', '4'))} and
      ${m(f('3', '5') + ' < ' + f('5', '8'))}; ${m(f('11', '12'))}; ${m('7.55')} and ${m('5.48')};
      ${m('22 cm')} and ${m('28 cm²')}.</div>`
    },
    {
      h: 'Diagnosis',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>If Q… was wrong</th><th>Revise</th><th>Before</th></tr></thead>
      <tbody>
        <tr><td>1–2</td><td>column arithmetic</td><td>the first week</td></tr>
        <tr><td>3</td><td>the order of operations</td><td>algebraic expressions, lesson 8</td></tr>
        <tr><td>4–5</td><td>simplifying and adding fractions</td><td>dividing fractions, lesson 22</td></tr>
        <tr><td>6</td><td>decimals</td><td>the Cambridge decimal block, lesson 76</td></tr>
        <tr><td>7</td><td>perimeter and area</td><td>the circle, lesson 92</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A gap left open in September closes nothing by itself</span>
      Each row above names the lesson where the missing skill is needed again. That lesson is the deadline
      — not the end of the year.</div>`
    },
    {
      h: 'The year ahead',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Quarter</th><th>Main blocks</th><th>Hours</th></tr></thead>
      <tbody>
        <tr><td>I</td><td>directed numbers, expressions and equations, dividing fractions, ratio</td><td class="m">54</td></tr>
        <tr><td>II</td><td>percentages, decimals, angles, the circumference of a circle</td><td class="m">42</td></tr>
        <tr><td>III</td><td>the area of a circle, compound figures, speed, volume</td><td class="m">60</td></tr>
        <tr><td>IV</td><td>data and pie charts, probability, solids and nets, revision</td><td class="m">48</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Six hours a week, not five</div>
      This class has one lesson a week more than the national plan needs. That hour carries Cambridge
      Stage 7 work — negative numbers, decimals, data and probability — which the national Grade 6
      programme does not cover at all.</div>`
    }
  ],
  examples: [
    {
      q: 'Compute ' + m('12 + 3 · (8 − 5)') + '.',
      steps: [
        ['Brackets first: ' + m('8 − 5 = 3') + '.', ''],
        ['Then multiply: ' + m('3 · 3 = 9') + '.', ''],
        ['Then add: ' + m('12 + 9 = 21') + '.', '']
      ],
      ans: m('21')
    },
    {
      q: 'Compute ' + m(f('2', '3') + ' + ' + f('1', '4')) + '.',
      steps: [
        ['The lowest common denominator is ' + m('12') + '.', ''],
        [m(f('8', '12') + ' + ' + f('3', '12')), ''],
        [m('= ' + f('11', '12')), '']
      ],
      ans: m(f('11', '12'))
    },
    {
      q: 'A rectangle is ' + m('7 cm') + ' by ' + m('4 cm') + '. Find its perimeter and area.',
      steps: [
        [m('P = 2(7 + 4) = 22 cm'), 'A length.'],
        [m('S = 7 · 4 = 28 cm²'), 'An area — square units.']
      ],
      ans: m('22 cm') + ' and ' + m('28 cm²')
    }
  ],
  modelNote: 'Mark the diagnostic in the lesson and hand back the diagnosis table rather than a score; a number tells a pupil nothing they can act on.',
  interactive: {
    type: 'quiz',
    title: 'What Grade 5 left behind',
    hint: 'Seven quick checks.',
    items: [
      { q: m('12 + 3 · (8 − 5)') + ' equals:', a: [m('45'), m('21'), m('27'), m('15')], c: 1, why: 'Brackets, then ' + m('×') + '.' },
      { q: m(f('18', '24')) + ' simplifies to:', a: [m(f('3', '4')), m(f('9', '12')), m(f('2', '3')), m(f('6', '8'))], c: 0, why: 'Divide by ' + m('6') + '.' },
      { q: m(f('2', '3') + ' + ' + f('1', '4')) + ' equals:', a: [m(f('3', '7')), m(f('11', '12')), m(f('2', '12')), m(f('3', '4'))], c: 1, why: 'LCD ' + m('12') + '.' },
      { q: 'Which is larger, ' + m(f('3', '5')) + ' or ' + m(f('5', '8')) + '?', a: [m(f('3', '5')), m(f('5', '8')), 'equal', 'cannot say'], c: 1, why: m('24 < 25') + ' over ' + m('40') + '.' },
      { q: m('4.7 + 2.85') + ' equals:', a: [m('7.55'), m('6.55'), m('7.12'), m('4.98')], c: 0, why: 'Line up the points.' },
      { q: 'A ' + m('7 × 4') + ' rectangle has perimeter:', a: [m('11'), m('22'), m('28'), m('14')], c: 1, why: m('2(7 + 4)') + '.' },
      { q: 'And area:', a: [m('11'), m('22'), m('28'), m('44')], c: 2, why: m('7 · 4') + '.' },
      { q: 'Area is measured in:', a: ['cm', 'cm²', 'cm³', 'no units'], c: 1, why: 'Two directions.' }
    ]
  },
  quiz: [
    { q: 'The order of operations puts first:', a: ['addition', 'brackets', 'multiplication', 'subtraction'], c: 1, why: 'Then ' + m('×') + ' and ' + m('÷') + '.' },
    { q: m(f('18', '24')) + ' simplifies to:', a: [m(f('3', '4')), m(f('2', '3')), m(f('1', '2')), m(f('4', '3'))], c: 0, why: 'HCF ' + m('6') + '.' },
    { q: 'To add fractions you need:', a: ['the same numerator', 'a common denominator', 'nothing', 'a decimal'], c: 1, why: 'Same-sized parts.' },
    { q: 'Perimeter is measured in:', a: ['cm', 'cm²', 'cm³', 'degrees'], c: 0, why: 'It is a length.' },
    { q: m('918 ÷ 27') + ' equals:', a: [m('32'), m('34'), m('36'), m('27')], c: 1, why: m('27 · 34 = 918') + '.' },
    { q: 'This year has how many hours of mathematics?', a: [m('170'), m('204'), m('136'), m('240')], c: 1, why: 'Six a week.' }
  ],
  practice: {
    easy: [
      [m('348 + 2 976'), m('3 324')],
      [m('5 004 − 1 897'), m('3 107')],
      [m('47 · 26'), m('1 222')],
      [m('918 ÷ 27'), m('34')],
      [m('12 + 3 · (8 − 5)'), m('21')],
      [m(f('18', '24')) + ' simplified', m(f('3', '4'))],
      [m('4.7 + 2.85'), m('7.55')]
    ],
    med: [
      [m(f('2', '3') + ' + ' + f('1', '4')), m(f('11', '12'))],
      ['Compare ' + m(f('3', '5')) + ' and ' + m(f('5', '8')), m(f('3', '5') + ' < ' + f('5', '8'))],
      [m('9.1 − 3.62'), m('5.48')],
      ['A ' + m('7 × 4') + ' rectangle: perimeter and area', m('22 cm') + ', ' + m('28 cm²')],
      [m('100 − 4 · (7 + 8)'), m('40')],
      [m(f('5', '6') + ' − ' + f('1', '3')), m(f('1', '2'))],
      ['A square of side ' + m('9') + ': its area', m('81 cm²')]
    ],
    hard: [
      [m('(24 + 36) ÷ (10 − 4)'), m('10')],
      [m('2 · 3² + 4'), m('22')],
      ['A rectangle of area ' + m('48') + ' and width ' + m('6') + ': its length', m('8')],
      ['A rectangle of perimeter ' + m('30') + ' and width ' + m('7') + ': its length', m('8')],
      [m(f('3', '4') + ' of 60'), m('45')],
      ['Order ' + m(f('1', '2') + ', ' + f('2', '5') + ', ' + f('3', '5')), m(f('2', '5') + ' < ' + f('1', '2') + ' < ' + f('3', '5'))],
      ['How many hours a week does this class have?', m('6')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rework, in full, every diagnostic question you lost a mark on.',
  homework: [
    'Rework every diagnostic question you got wrong.',
    'Compute ' + m('45 + 5 · (12 − 8)') + ' and ' + m('(45 + 5) · 12 − 8') + ', and say why they differ.',
    'Simplify ' + m(f('24', '36')) + ' and ' + m(f('45', '60')) + '.',
    'Compute ' + m(f('3', '4') + ' + ' + f('1', '6')) + '.',
    'A rectangle is ' + m('9 cm') + ' by ' + m('5 cm') + '. Find its perimeter and area with units.'
  ]
});

/* ============================== 02 ============================== */
G6_MAT.push({
  id: 'g6-02', stream: 'mat', grade: 6, quarter: 1, lessons: '2–4', hours: 3,
  title: 'Directed numbers: adding and subtracting integers',
  subtitle: 'A Cambridge insert: numbers below zero, the number line as a road, and what a double minus does.',
  uz: 'Matematika 6, qo‘shimcha mavzu', uzPage: 'pp. 9–14',
  cam: 'S7 1.1', camPage: 'Stage 7, pp. 8–13', wb: 'Exercise 1.1',
  objectives: [
    'Read and place negative numbers on a number line.',
    'Compare and order integers.',
    'Add and subtract integers using the number line and the sign rules.',
    'Use directed numbers for temperature, height and money.'
  ],
  terms: [
    ['Integer', 'Butun son', 'Целое число'],
    ['Negative number', 'Manfiy son', 'Отрицательное число'],
    ['Positive number', 'Musbat son', 'Положительное число'],
    ['Number line', 'Koordinata to‘g‘ri chizig‘i', 'Числовая прямая'],
    ['Opposite number', 'Qarama-qarshi son', 'Противоположное число'],
    ['Below zero', 'Noldan past', 'Ниже нуля'],
    ['Rise', 'Ortish', 'Повышение'],
    ['Fall', 'Kamayish', 'Понижение']
  ],
  timing: [[20, 'Numbers below zero'], [25, 'Ordering integers'], [30, 'Adding'], [30, 'Subtracting'], [15, 'Where they are used']],
  sections: [
    {
      h: 'Numbers below zero',
      html: `<p>Counting numbers stop at zero; the world does not. Temperature, debt, depth and floors below
      ground all need numbers on the other side.</p>
      {{fig:numberLineInterval:The integers, positive and negative, on one line}}
      <div class="tablewrap"><table>
      <thead><tr><th>Situation</th><th>Positive</th><th>Negative</th></tr></thead>
      <tbody>
        <tr><td>temperature</td><td>above freezing</td><td>below freezing</td></tr>
        <tr><td>height</td><td>above sea level</td><td>below sea level</td></tr>
        <tr><td>money</td><td>saved</td><td>owed</td></tr>
        <tr><td>a lift</td><td>upper floors</td><td>the basement</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Every number has an opposite</div>
      ${m('5')} and ${m('−5')} sit the same distance from zero on opposite sides, and they add to zero.
      Zero is its own opposite, and is neither positive nor negative.</div>`
    },
    {
      h: 'Ordering integers',
      html: `<p>On the number line, the number further to the right is the larger. Among negatives that
      reverses the everyday feeling: ${m('−2')} is <b>larger</b> than ${m('−7')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Comparison</th><th>True?</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td class="m">5 > 3</td><td>yes</td><td>further right</td></tr>
        <tr><td class="m">−2 > −7</td><td>yes</td><td class="m">−2</td></tr>
        <tr><td class="m">−7 > −2</td><td>no</td><td>the digits mislead</td></tr>
        <tr><td class="m">0 > −1</td><td>yes</td><td>zero beats every negative</td></tr>
        <tr><td class="m">−100 > 1</td><td>no</td><td>every negative is below every positive</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The bigger the digits, the smaller a negative number is</span>
      ${m('−100')} is far below ${m('−2')}. Reading the digits and forgetting the sign is the error this
      whole block is designed to prevent.</div>`
    },
    {
      h: 'Adding',
      html: `<p>Adding a positive moves right; adding a negative moves left.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Sum</th><th>On the line</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">−3 + 5</td><td>from ${m('−3')}, five right</td><td class="m">2</td></tr>
        <tr><td class="m">3 + (−5)</td><td>from ${m('3')}, five left</td><td class="m">−2</td></tr>
        <tr><td class="m">−3 + (−5)</td><td>from ${m('−3')}, five left</td><td class="m">−8</td></tr>
        <tr><td class="m">−5 + 5</td><td>back to the start</td><td class="m">0</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Same signs add, different signs subtract</div>
      With the same sign, add the digits and keep the sign. With different signs, subtract the smaller
      digits from the larger and keep the sign of the larger. The number line proves both.</div>`
    },
    {
      h: 'Subtracting',
      html: `${eq(m('a − b = a + (−b)'), true)}
      <p>Subtracting is adding the opposite, so a minus in front of a negative becomes a plus.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Rewritten</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">7 − 10</td><td class="m">7 + (−10)</td><td class="m">−3</td></tr>
        <tr><td class="m">−4 − 6</td><td class="m">−4 + (−6)</td><td class="m">−10</td></tr>
        <tr><td class="m">5 − (−3)</td><td class="m">5 + 3</td><td class="m">8</td></tr>
        <tr><td class="m">−5 − (−3)</td><td class="m">−5 + 3</td><td class="m">−2</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Two minuses next to each other make a plus</span>
      ${m('5 − (−3)')} is ${m('8')}, not ${m('2')}. Taking away a debt leaves you better off — which is
      exactly what the rule says in words.</div>`
    },
    {
      h: 'Where they are used',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>from ${m('−7°C')} the temperature rises ${m('12°')}</td><td class="m">−7 + 12</td><td class="m">5°C</td></tr>
        <tr><td>from ${m('4°C')} it falls ${m('9°')}</td><td class="m">4 − 9</td><td class="m">−5°C</td></tr>
        <tr><td>the difference between ${m('6°C')} and ${m('−3°C')}</td><td class="m">6 − (−3)</td><td class="m">9°</td></tr>
        <tr><td>a diver at ${m('−12 m')} rises ${m('5 m')}</td><td class="m">−12 + 5</td><td class="m">−7 m</td></tr>
        <tr><td>a lift from floor ${m('−2')} up ${m('7')}</td><td class="m">−2 + 7</td><td>floor ${m('5')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A difference is always a subtraction</div>
      From ${m('−3°')} to ${m('6°')} the rise is ${m('6 − (−3) = 9')} degrees — and the double minus is
      exactly why the answer is bigger than either number.</div>`
    }
  ],
  examples: [
    {
      q: 'Compute ' + m('−3 + 5') + ', ' + m('3 + (−5)') + ' and ' + m('−3 + (−5)') + '.',
      steps: [
        ['Different signs: ' + m('5 − 3 = 2') + ', sign of the larger — positive.', m('2')],
        ['Different signs: ' + m('5 − 3 = 2') + ', sign of the larger — negative.', m('−2')],
        ['Same signs: add and keep the sign.', m('−8')]
      ],
      ans: m('2, −2, −8')
    },
    {
      q: 'Compute ' + m('5 − (−3)') + ' and ' + m('−5 − (−3)') + '.',
      steps: [
        ['Subtracting is adding the opposite.', ''],
        [m('5 + 3 = 8'), ''],
        [m('−5 + 3 = −2'), '']
      ],
      ans: m('8') + ' and ' + m('−2')
    },
    {
      q: 'The temperature is ' + m('−7°C') + ' and rises by ' + m('12°') + '. What is it now?',
      steps: [
        ['A rise means adding.', ''],
        [m('−7 + 12'), ''],
        [m('= 5°C'), '']
      ],
      ans: m('5°C')
    }
  ],
  modelNote: 'Draw a vertical number line as a thermometer on the board and keep it there all week; every question in this block is answered by pointing at it.',
  interactive: {
    type: 'quiz',
    title: 'Signs on the number line',
    hint: 'Right is bigger; a minus in front of a minus is a plus.',
    items: [
      { q: 'Which is larger, ' + m('−2') + ' or ' + m('−7') + '?', a: [m('−2'), m('−7'), 'equal', 'cannot say'], c: 0, why: 'Further right.' },
      { q: m('−3 + 5') + ' equals:', a: [m('−8'), m('2'), m('−2'), m('8')], c: 1, why: 'Five steps right.' },
      { q: m('3 + (−5)') + ' equals:', a: [m('8'), m('2'), m('−2'), m('−8')], c: 2, why: 'Five steps left.' },
      { q: m('−3 + (−5)') + ' equals:', a: [m('−8'), m('−2'), m('2'), m('8')], c: 0, why: 'Same signs add.' },
      { q: m('7 − 10') + ' equals:', a: [m('3'), m('−3'), m('17'), m('−17')], c: 1, why: 'Past zero.' },
      { q: m('5 − (−3)') + ' equals:', a: [m('2'), m('8'), m('−8'), m('−2')], c: 1, why: 'Two minuses make a plus.' },
      { q: m('−5 − (−3)') + ' equals:', a: [m('−8'), m('−2'), m('2'), m('8')], c: 1, why: m('−5 + 3') + '.' },
      { q: 'From ' + m('−7°') + ' a rise of ' + m('12°') + ' gives:', a: [m('5°'), m('−5°'), m('19°'), m('−19°')], c: 0, why: 'Add the rise.' }
    ]
  },
  quiz: [
    { q: 'On the number line the larger number is:', a: ['further left', 'further right', 'nearer zero', 'the one with more digits'], c: 1, why: 'Always.' },
    { q: 'The opposite of ' + m('−9') + ' is:', a: [m('9'), m('−9'), m('0'), m(f('1', '9'))], c: 0, why: 'Same distance, other side.' },
    { q: m('−4 − 6') + ' equals:', a: [m('2'), m('−2'), m('10'), m('−10')], c: 3, why: 'Same signs add.' },
    { q: m('6 − (−3)') + ' equals:', a: [m('3'), m('9'), m('−9'), m('−3')], c: 1, why: 'Adding the opposite.' },
    { q: 'Every negative number is:', a: ['above zero', 'below zero', 'equal to zero', 'a fraction'], c: 1, why: 'To the left of it.' },
    { q: 'A diver at ' + m('−12 m') + ' who rises ' + m('5 m') + ' is at:', a: [m('−17 m'), m('−7 m'), m('7 m'), m('17 m')], c: 1, why: m('−12 + 5') + '.' }
  ],
  practice: {
    easy: [
      [m('−3 + 5'), m('2')],
      [m('3 + (−5)'), m('−2')],
      [m('−3 + (−5)'), m('−8')],
      [m('7 − 10'), m('−3')],
      [m('−4 − 6'), m('−10')],
      [m('5 − (−3)'), m('8')],
      ['The opposite of ' + m('−9'), m('9')]
    ],
    med: [
      [m('−5 − (−3)'), m('−2')],
      ['Order ' + m('−7, 2, −2, 0, 5'), m('−7 < −2 < 0 < 2 < 5')],
      ['From ' + m('−7°') + ' a rise of ' + m('12°'), m('5°')],
      ['From ' + m('4°') + ' a fall of ' + m('9°'), m('−5°')],
      ['The difference between ' + m('6°') + ' and ' + m('−3°'), m('9°')],
      ['A diver at ' + m('−12 m') + ' rises ' + m('5 m'), m('−7 m')],
      [m('−8 + 8'), m('0')]
    ],
    hard: [
      [m('−7 + 12 − (−5)'), m('10')],
      [m('−3 − (−8) + (−4)'), m('1')],
      ['The difference between ' + m('−15°') + ' and ' + m('−4°'), m('11°')],
      ['A lift goes from floor ' + m('−3') + ' up ' + m('9') + ', then down ' + m('4'), 'floor ' + m('2')],
      ['Which is larger, ' + m('−100') + ' or ' + m('−1') + '?', m('−1')],
      ['Write a subtraction whose answer is ' + m('−6'), 'e.g. ' + m('2 − 8')],
      ['A debt of ' + m('50 000') + ' is cancelled: the change in what you own', m('+50 000')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw a number line beside every question until the signs feel automatic.',
  homework: [
    'Compute ' + m('−6 + 9') + ', ' + m('6 + (−9)') + ' and ' + m('−6 + (−9)') + '.',
    'Compute ' + m('4 − 11') + ' and ' + m('−4 − (−11)') + '.',
    'Order ' + m('−12, 3, −3, 0, 8, −20') + ' from smallest to largest.',
    'The temperature falls from ' + m('2°C') + ' by ' + m('11°') + '. What is it now?',
    'Find the difference between ' + m('8°C') + ' and ' + m('−6°C') + ', and say why the answer is larger than either.'
  ]
});

/* ============================== 03 ============================== */
G6_MAT.push({
  id: 'g6-03', stream: 'mat', grade: 6, quarter: 1, lessons: '5–7', hours: 3,
  title: 'Directed numbers: multiplying and dividing integers',
  subtitle: 'A Cambridge insert: two signs make a third, and one rule covers both operations.',
  uz: 'Matematika 6, qo‘shimcha mavzu', uzPage: 'pp. 15–20',
  cam: 'S7 1.2', camPage: 'Stage 7, pp. 14–18', wb: 'Exercise 1.2',
  objectives: [
    'Multiply and divide integers using the sign rule.',
    'Explain the rule with repeated addition and with a pattern.',
    'Evaluate expressions mixing all four operations on integers.',
    'Square a negative number correctly.'
  ],
  terms: [
    ['Product', 'Ko‘paytma', 'Произведение'],
    ['Quotient', 'Bo‘linma', 'Частное'],
    ['Sign', 'Ishora', 'Знак'],
    ['Rule of signs', 'Ishoralar qoidasi', 'Правило знаков'],
    ['Repeated addition', 'Takroriy qo‘shish', 'Повторное сложение'],
    ['Square', 'Kvadrat', 'Квадрат'],
    ['Pattern', 'Qonuniyat', 'Закономерность'],
    ['Order of operations', 'Amallar tartibi', 'Порядок действий']
  ],
  timing: [[20, 'Why a minus times a minus is a plus'], [25, 'The rule of signs'], [30, 'Dividing'], [30, 'Mixed expressions'], [15, 'Squares and powers']],
  sections: [
    {
      h: 'Why a minus times a minus is a plus',
      html: `<p>Start from repeated addition, then continue the pattern downwards.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Product</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td class="m">3 · (−4)</td><td class="m">−12</td></tr>
        <tr><td class="m">2 · (−4)</td><td class="m">−8</td></tr>
        <tr><td class="m">1 · (−4)</td><td class="m">−4</td></tr>
        <tr><td class="m">0 · (−4)</td><td class="m">0</td></tr>
        <tr><td class="m">(−1) · (−4)</td><td class="m">4</td></tr>
        <tr><td class="m">(−2) · (−4)</td><td class="m">8</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The pattern decides it</div>
      Each row adds ${m('4')} to the one above. Continuing past zero forces
      ${m('(−1) · (−4) = 4')} — the rule is not an arbitrary convention but the only way to keep the
      arithmetic consistent.</div>`
    },
    {
      h: 'The rule of signs',
      html: `${eq(m('+ · + = +') + '     ' + m('+ · − = −') + '     ' + m('− · + = −') + '     ' + m('− · − = +'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Product</th><th>Signs</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">6 · 7</td><td>same</td><td class="m">42</td></tr>
        <tr><td class="m">6 · (−7)</td><td>different</td><td class="m">−42</td></tr>
        <tr><td class="m">(−6) · 7</td><td>different</td><td class="m">−42</td></tr>
        <tr><td class="m">(−6) · (−7)</td><td>same</td><td class="m">42</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Count the minus signs</div>
      An even number of negative factors gives a positive product; an odd number gives a negative one.
      ${m('(−1)(−2)(−3)')} has three, so the answer is ${m('−6')}.</div>`
    },
    {
      h: 'Dividing',
      html: `<p>Division follows the same rule, because it is multiplication by the reciprocal.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Quotient</th><th>Answer</th><th>Check</th></tr></thead>
      <tbody>
        <tr><td class="m">−12 ÷ 3</td><td class="m">−4</td><td class="m">3 · (−4) = −12</td></tr>
        <tr><td class="m">12 ÷ (−3)</td><td class="m">−4</td><td class="m">(−3)(−4) = 12</td></tr>
        <tr><td class="m">−12 ÷ (−3)</td><td class="m">4</td><td class="m">(−3) · 4 = −12</td></tr>
        <tr><td class="m">0 ÷ (−3)</td><td class="m">0</td><td class="m">(−3) · 0 = 0</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Dividing by zero is still impossible</span>
      ${m('0 ÷ (−3)')} is ${m('0')}, but ${m('−3 ÷ 0')} has no answer at all: no number multiplied by
      ${m('0')} gives ${m('−3')}. Negative numbers change nothing about that.</div>`
    },
    {
      h: 'Mixed expressions',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">−3 · 4 + 5</td><td class="m">−12 + 5</td><td class="m">−7</td></tr>
        <tr><td class="m">−3 · (4 + 5)</td><td class="m">−3 · 9</td><td class="m">−27</td></tr>
        <tr><td class="m">20 ÷ (−4) − 3</td><td class="m">−5 − 3</td><td class="m">−8</td></tr>
        <tr><td class="m">(−2)(−3)(−4)</td><td>three minus signs</td><td class="m">−24</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The order of operations does not change</div>
      Brackets, then ${m('×')} and ${m('÷')}, then ${m('+')} and ${m('−')} — exactly as with positive
      numbers. Only the signs are new.</div>`
    },
    {
      h: 'Squares and powers',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Meaning</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">(−5)²</td><td class="m">(−5) · (−5)</td><td class="m">25</td></tr>
        <tr><td class="m">−5²</td><td class="m">−(5 · 5)</td><td class="m">−25</td></tr>
        <tr><td class="m">(−2)³</td><td class="m">(−2)(−2)(−2)</td><td class="m">−8</td></tr>
        <tr><td class="m">(−1)¹⁰⁰</td><td>an even number of minuses</td><td class="m">1</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('(−5)²')} and ${m('−5²')} are different</span>
      The bracket says the whole ${m('−5')} is squared; without it, only the ${m('5')} is, and the minus
      stays outside. This one pair of brackets is worth a mark in every paper from now on.</div>`
    }
  ],
  examples: [
    {
      q: 'Compute ' + m('(−6) · (−7)') + ' and ' + m('6 · (−7)') + '.',
      steps: [
        ['Same signs give a positive product.', m('42')],
        ['Different signs give a negative one.', m('−42')]
      ],
      ans: m('42') + ' and ' + m('−42')
    },
    {
      q: 'Compute ' + m('(−2)(−3)(−4)') + '.',
      steps: [
        [m('(−2)(−3) = 6'), 'Two minuses.'],
        [m('6 · (−4) = −24'), 'One more minus.'],
        ['Three negative factors — an odd number — so the answer is negative.', '']
      ],
      ans: m('−24')
    },
    {
      q: 'Compute ' + m('(−5)²') + ' and ' + m('−5²') + '.',
      steps: [
        [m('(−5)² = (−5)(−5) = 25'), 'The bracket squares the sign too.'],
        [m('−5² = −(5 · 5) = −25'), 'Here only the ' + m('5') + ' is squared.']
      ],
      ans: m('25') + ' and ' + m('−25')
    }
  ],
  modelNote: 'Build the descending pattern table on the board line by line and let the class call out the next value; they state the rule themselves before it is written down.',
  interactive: {
    type: 'quiz',
    title: 'Count the minus signs',
    hint: 'Even means positive, odd means negative.',
    items: [
      { q: m('6 · (−7)') + ' equals:', a: [m('42'), m('−42'), m('13'), m('−13')], c: 1, why: 'Different signs.' },
      { q: m('(−6) · (−7)') + ' equals:', a: [m('42'), m('−42'), m('−13'), m('13')], c: 0, why: 'Same signs.' },
      { q: m('−12 ÷ (−3)') + ' equals:', a: [m('4'), m('−4'), m('36'), m('−36')], c: 0, why: 'Same signs.' },
      { q: m('12 ÷ (−3)') + ' equals:', a: [m('4'), m('−4'), m('9'), m('−9')], c: 1, why: 'Different signs.' },
      { q: m('(−2)(−3)(−4)') + ' equals:', a: [m('24'), m('−24'), m('9'), m('−9')], c: 1, why: 'Three minuses.' },
      { q: m('(−5)²') + ' equals:', a: [m('25'), m('−25'), m('10'), m('−10')], c: 0, why: 'The bracket includes the sign.' },
      { q: m('−5²') + ' equals:', a: [m('25'), m('−25'), m('10'), m('−10')], c: 1, why: 'Only the ' + m('5') + ' is squared.' },
      { q: m('(−1)¹⁰⁰') + ' equals:', a: [m('1'), m('−1'), m('100'), m('−100')], c: 0, why: 'An even number of minuses.' }
    ]
  },
  quiz: [
    { q: m('− · −') + ' gives:', a: [m('+'), m('−'), m('0'), 'either'], c: 0, why: 'The rule of signs.' },
    { q: m('+ · −') + ' gives:', a: [m('+'), m('−'), m('0'), 'either'], c: 1, why: 'Different signs.' },
    { q: 'An odd number of negative factors gives:', a: ['a positive product', 'a negative product', 'zero', 'either'], c: 1, why: 'Count the minuses.' },
    { q: m('−12 ÷ 3') + ' equals:', a: [m('4'), m('−4'), m('−9'), m('9')], c: 1, why: 'Different signs.' },
    { q: m('(−2)³') + ' equals:', a: [m('8'), m('−8'), m('6'), m('−6')], c: 1, why: 'Three minuses.' },
    { q: m('−3 ÷ 0') + ' equals:', a: [m('0'), m('−3'), 'nothing — it is undefined', m('3')], c: 2, why: 'Division by zero.' }
  ],
  practice: {
    easy: [
      [m('6 · (−7)'), m('−42')],
      [m('(−6) · (−7)'), m('42')],
      [m('(−6) · 7'), m('−42')],
      [m('−12 ÷ 3'), m('−4')],
      [m('12 ÷ (−3)'), m('−4')],
      [m('−12 ÷ (−3)'), m('4')],
      [m('(−5)²'), m('25')]
    ],
    med: [
      [m('−5²'), m('−25')],
      [m('(−2)³'), m('−8')],
      [m('(−2)(−3)(−4)'), m('−24')],
      [m('−3 · 4 + 5'), m('−7')],
      [m('−3 · (4 + 5)'), m('−27')],
      [m('20 ÷ (−4) − 3'), m('−8')],
      [m('(−1)¹⁰⁰'), m('1')]
    ],
    hard: [
      [m('(−1)¹⁰¹'), m('−1')],
      [m('−2 · (−3)² '), m('−18')],
      [m('(−2 · 3)²'), m('36')],
      [m('(−36) ÷ (−4) ÷ (−3)'), m('−3')],
      [m('−10 + (−4)(−5)'), m('10')],
      [m('(−3)² − (−3)'), m('12')],
      ['Why is ' + m('(−1) · (−4) = 4') + ' forced?', 'The pattern of products rises by ' + m('4') + ' each row']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Count the minus signs before you multiply anything.',
  homework: [
    'Compute ' + m('8 · (−9)') + ', ' + m('(−8) · (−9)') + ' and ' + m('(−8) · 9') + '.',
    'Compute ' + m('−45 ÷ 9') + ', ' + m('45 ÷ (−9)') + ' and ' + m('−45 ÷ (−9)') + '.',
    'Compute ' + m('(−4)²') + ' and ' + m('−4²') + ', and explain the difference.',
    'Compute ' + m('(−2)(−5)(−3)') + '.',
    'Compute ' + m('−6 · 3 + 20 ÷ (−4)') + '.'
  ]
});

/* ============================== 04 ============================== */
G6_MAT.push({
  id: 'g6-04', stream: 'mat', grade: 6, quarter: 1, lessons: '8–10', hours: 3,
  title: 'Algebraic expressions',
  subtitle: 'A letter standing for a number — and a sentence in words turned into one line of algebra.',
  uz: 'Matematika 6, §1', uzPage: 'pp. 21–28',
  cam: 'S7 2.1', camPage: 'Stage 7, pp. 20–24', wb: 'Exercise 2.1',
  objectives: [
    'Explain what a letter stands for in an expression.',
    'Write a worded rule as an algebraic expression.',
    'Read an expression back into words.',
    'Use the standard shorthands of algebraic notation.'
  ],
  terms: [
    ['Algebraic expression', 'Harfli ifoda', 'Буквенное выражение'],
    ['Variable', 'O‘zgaruvchi', 'Переменная'],
    ['Constant', 'O‘zgarmas', 'Постоянная'],
    ['Term', 'Had', 'Член'],
    ['Coefficient', 'Koeffitsiyent', 'Коэффициент'],
    ['Sum', 'Yig‘indi', 'Сумма'],
    ['Product', 'Ko‘paytma', 'Произведение'],
    ['Formula', 'Formula', 'Формула']
  ],
  timing: [[20, 'A letter for a number'], [30, 'Words into algebra'], [30, 'Algebra into words'], [30, 'The shorthands'], [10, 'Homework']],
  sections: [
    {
      h: 'A letter for a number',
      html: `<p>An <b>algebraic expression</b> is an arithmetic expression in which some numbers are
      replaced by letters. The letter stands for a number that may change — which is why it is called a
      <b>variable</b>.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>What the letter stands for</th></tr></thead>
      <tbody>
        <tr><td class="m">3n</td><td>the number of legs on ${m('n')} tripods</td></tr>
        <tr><td class="m">x + 5</td><td>a number five more than ${m('x')}</td></tr>
        <tr><td class="m">2(a + b)</td><td>the perimeter of a rectangle ${m('a')} by ${m('b')}</td></tr>
        <tr><td class="m">100 − p</td><td>the change from ${m('100')} after spending ${m('p')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Why letters are worth the trouble</div>
      One line, ${m('P = 2(a + b)')}, replaces a sentence that would have to be rewritten for every
      rectangle in the world. Algebra is arithmetic said once instead of endlessly.</div>`
    },
    {
      h: 'Words into algebra',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>In words</th><th>In algebra</th></tr></thead>
      <tbody>
        <tr><td>a number increased by ${m('7')}</td><td class="m">x + 7</td></tr>
        <tr><td>a number decreased by ${m('7')}</td><td class="m">x − 7</td></tr>
        <tr><td>${m('7')} less than a number</td><td class="m">x − 7</td></tr>
        <tr><td>a number subtracted from ${m('7')}</td><td class="m">7 − x</td></tr>
        <tr><td>three times a number</td><td class="m">3x</td></tr>
        <tr><td>a third of a number</td><td class="m">${f('x', '3')}</td></tr>
        <tr><td>three times a number, then add ${m('2')}</td><td class="m">3x + 2</td></tr>
        <tr><td>add ${m('2')} to a number, then treble it</td><td class="m">3(x + 2)</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The order of the words decides the brackets</span>
      ${m('3x + 2')} and ${m('3(x + 2)')} are different: for ${m('x = 4')} they are ${m('14')} and
      ${m('18')}. “Then” tells you which operation happens second, and a bracket is how you write
      that.</div>`
    },
    {
      h: 'Algebra into words',
      html: `<p>Reading in the other direction is the better test of understanding — and there is usually
      more than one right reading.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>One reading</th><th>A context</th></tr></thead>
      <tbody>
        <tr><td class="m">5n</td><td>five times a number</td><td>the cost of ${m('n')} pens at ${m('5')} each</td></tr>
        <tr><td class="m">n + 3</td><td>three more than a number</td><td>an age three years from now</td></tr>
        <tr><td class="m">2n + 1</td><td>double a number and add one</td><td>an odd number</td></tr>
        <tr><td class="m">${f('s', 't')}</td><td>one number divided by another</td><td>speed, from distance and time</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Every formula is an expression with a name</div>
      ${m('P = 2(a + b)')}, ${m('S = ab')}, ${m('v = ' + f('s', 't'))} — the left side names what the
      expression on the right computes.</div>`
    },
    {
      h: 'The shorthands',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Written as</th><th>Not as</th><th>Rule</th></tr></thead>
      <tbody>
        <tr><td class="m">3x</td><td class="m">3 · x</td><td>the multiplication sign is dropped</td></tr>
        <tr><td class="m">ab</td><td class="m">a · b</td><td>the same between two letters</td></tr>
        <tr><td class="m">x</td><td class="m">1x</td><td>a coefficient of ${m('1')} is not written</td></tr>
        <tr><td class="m">−x</td><td class="m">−1x</td><td>the same for ${m('−1')}</td></tr>
        <tr><td class="m">${f('x', '3')}</td><td class="m">x ÷ 3</td><td>division is written as a fraction</td></tr>
        <tr><td class="m">x²</td><td class="m">x · x</td><td>a power counts equal factors</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('3x')} means multiply, never “thirty-something”</span>
      In arithmetic, digits written together mean place value; in algebra, symbols written together mean
      a product. It is the one place where the two notations disagree.</div>`
    }
  ],
  examples: [
    {
      q: 'Write “three times a number, then add ' + m('2') + '” and “add ' + m('2') + ' to a number, then treble it”.',
      steps: [
        ['First: multiply, then add.', m('3x + 2')],
        ['Second: add, then multiply — the addition needs a bracket.', m('3(x + 2)')],
        ['They differ: for ' + m('x = 4') + ' they give ' + m('14') + ' and ' + m('18') + '.', '']
      ],
      ans: m('3x + 2') + ' and ' + m('3(x + 2)')
    },
    {
      q: 'A pen costs ' + m('p') + ' sum and a pencil ' + m('q') + '. Write the cost of ' + m('3') + ' pens and ' + m('4') + ' pencils.',
      steps: [
        [m('3') + ' pens cost ' + m('3p') + '.', ''],
        [m('4') + ' pencils cost ' + m('4q') + '.', ''],
        ['Together: ' + m('3p + 4q') + '.', '']
      ],
      ans: m('3p + 4q')
    },
    {
      q: 'Write the perimeter and area of a rectangle with sides ' + m('a') + ' and ' + m('b') + '.',
      steps: [
        ['Perimeter: two lots of ' + m('a + b') + '.', m('P = 2(a + b)')],
        ['Area: one side times the other.', m('S = ab')]
      ],
      ans: m('2(a + b)') + ' and ' + m('ab')
    }
  ],
  modelNote: 'Read an expression aloud and ask for a story that fits it; the class invents contexts far faster than they translate them, and the translation improves as a result.',
  interactive: {
    type: 'quiz',
    title: 'Words into algebra',
    hint: '“Then” tells you where the brackets go.',
    items: [
      { q: '“A number increased by ' + m('7') + '”:', a: [m('7x'), m('x + 7'), m('x − 7'), m('7 − x')], c: 1, why: 'Add.' },
      { q: '“' + m('7') + ' less than a number”:', a: [m('7 − x'), m('x − 7'), m('x + 7'), m('7x')], c: 1, why: 'Take ' + m('7') + ' away from ' + m('x') + '.' },
      { q: '“A number subtracted from ' + m('7') + '”:', a: [m('7 − x'), m('x − 7'), m('x + 7'), m('7x')], c: 0, why: 'The other way round.' },
      { q: '“Three times a number, then add ' + m('2') + '”:', a: [m('3x + 2'), m('3(x + 2)'), m('2x + 3'), m('x + 6')], c: 0, why: 'Multiply first.' },
      { q: '“Add ' + m('2') + ' to a number, then treble it”:', a: [m('3x + 2'), m('3(x + 2)'), m('2(x + 3)'), m('3x + 6') + ' only'], c: 1, why: 'The bracket carries “then”.' },
      { q: '“A third of a number”:', a: [m('3x'), m(f('x', '3')), m('x − 3'), m('x + 3')], c: 1, why: 'Divide.' },
      { q: m('1x') + ' is written:', a: [m('1x'), m('x'), m('x¹'), m('x + 1')], c: 1, why: 'The ' + m('1') + ' is not written.' },
      { q: 'The perimeter of an ' + m('a') + ' by ' + m('b') + ' rectangle:', a: [m('ab'), m('a + b'), m('2(a + b)'), m('2ab')], c: 2, why: 'Two of each side.' }
    ]
  },
  quiz: [
    { q: 'A letter in an expression stands for:', a: ['a word', 'a number', 'an operation', 'nothing'], c: 1, why: 'A variable.' },
    { q: m('3x') + ' means:', a: [m('3 + x'), m('3 · x'), 'thirty-something', m('x³')], c: 1, why: 'A product.' },
    { q: '“' + m('7') + ' less than ' + m('x') + '” is:', a: [m('7 − x'), m('x − 7'), m('7x'), m('x + 7')], c: 1, why: 'Take away from ' + m('x') + '.' },
    { q: m('3(x + 2)') + ' at ' + m('x = 4') + ' is:', a: [m('14'), m('18'), m('20'), m('12')], c: 1, why: 'Bracket first.' },
    { q: 'A third of ' + m('x') + ' is written:', a: [m('3x'), m(f('x', '3')), m(f('3', 'x')), m('x − 3')], c: 1, why: 'Division as a fraction.' },
    { q: 'The area of an ' + m('a') + ' by ' + m('b') + ' rectangle:', a: [m('2(a + b)'), m('ab'), m('a + b'), m('2ab')], c: 1, why: 'One side times the other.' }
  ],
  practice: {
    easy: [
      ['“A number increased by ' + m('7') + '”', m('x + 7')],
      ['“A number decreased by ' + m('7') + '”', m('x − 7')],
      ['“Three times a number”', m('3x')],
      ['“A third of a number”', m(f('x', '3'))],
      ['“A number subtracted from ' + m('7') + '”', m('7 − x')],
      ['The cost of ' + m('n') + ' pens at ' + m('5') + ' sum', m('5n')],
      ['The perimeter of an ' + m('a') + ' by ' + m('b') + ' rectangle', m('2(a + b)')]
    ],
    med: [
      ['“Three times a number, then add ' + m('2') + '”', m('3x + 2')],
      ['“Add ' + m('2') + ' to a number, then treble it”', m('3(x + 2)')],
      [m('3') + ' pens at ' + m('p') + ' and ' + m('4') + ' pencils at ' + m('q'), m('3p + 4q')],
      ['The change from ' + m('100') + ' after spending ' + m('p'), m('100 − p')],
      ['An age ' + m('n') + ' now, in ' + m('5') + ' years', m('n + 5')],
      ['An odd number, written with ' + m('n'), m('2n + 1')],
      ['Speed from distance ' + m('s') + ' and time ' + m('t'), m(f('s', 't'))]
    ],
    hard: [
      ['The perimeter of a square of side ' + m('a'), m('4a')],
      ['The total of three consecutive numbers starting at ' + m('n'), m('3n + 3')],
      ['The cost of ' + m('n') + ' books at ' + m('p') + ' each with ' + m('2000') + ' postage', m('np + 2000')],
      ['Half of one number added to twice another', m(f('a', '2') + ' + 2b')],
      ['The area of a rectangle whose length is ' + m('3') + ' more than its width ' + m('w'), m('w(w + 3)')],
      ['Read ' + m('2(n − 1)') + ' in words', 'One less than a number, then doubled'],
      ['Why do ' + m('3x + 2') + ' and ' + m('3(x + 2)') + ' differ?', 'The bracket changes which operation is done first']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Say the expression aloud before writing it; the word “then” marks the bracket.',
  homework: [
    'Write in algebra: a number increased by ' + m('12') + '; ' + m('12') + ' less than a number; a quarter of a number.',
    'Write “double a number, then subtract ' + m('5') + '” and “subtract ' + m('5') + ' from a number, then double it”.',
    'A notebook costs ' + m('a') + ' and a pen ' + m('b') + '. Write the cost of ' + m('5') + ' notebooks and ' + m('2') + ' pens.',
    'Write the perimeter and area of a square of side ' + m('a') + '.',
    'Read ' + m('4(n + 3)') + ' in words and give its value at ' + m('n = 2') + '.'
  ]
});

/* ============================== 05 ============================== */
G6_MAT.push({
  id: 'g6-05', stream: 'mat', grade: 6, quarter: 1, lessons: '11–12', hours: 2,
  title: 'Simplifying algebraic expressions',
  subtitle: 'Collecting like terms, and taking a common factor out of a bracket.',
  uz: 'Matematika 6, §2', uzPage: 'pp. 29–34',
  cam: 'S7 2.3', camPage: 'Stage 7, pp. 25–29', wb: 'Exercise 2.3',
  objectives: [
    'Identify like terms and collect them.',
    'Expand a bracket by multiplying every term inside it.',
    'Take a common factor outside a bracket.',
    'Check a simplification by substituting a number.'
  ],
  terms: [
    ['To simplify', 'Soddalashtirish', 'Упростить'],
    ['Like terms', 'O‘xshash hadlar', 'Подобные члены'],
    ['To collect', 'Ixchamlash', 'Приведение подобных'],
    ['To expand', 'Qavsni ochish', 'Раскрыть скобки'],
    ['Common factor', 'Umumiy ko‘paytuvchi', 'Общий множитель'],
    ['Bracket', 'Qavs', 'Скобка'],
    ['Coefficient', 'Koeffitsiyent', 'Коэффициент'],
    ['Substitution check', 'Tekshirish', 'Проверка подстановкой']
  ],
  timing: [[20, 'Like terms'], [25, 'Collecting'], [20, 'Expanding a bracket'], [12, 'Taking a factor out'], [3, 'Homework']],
  sections: [
    {
      h: 'Like terms',
      html: `<p>Terms are <b>like</b> when their letter parts are identical. Only like terms can be
      collected — for the same reason that apples and oranges cannot be added into one number of
      apples.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Pair</th><th>Like?</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td class="m">5x and −2x</td><td>yes</td><td>the same letter</td></tr>
        <tr><td class="m">5x and 5y</td><td>no</td><td>different letters</td></tr>
        <tr><td class="m">5x and 5x²</td><td>no</td><td>different powers</td></tr>
        <tr><td class="m">3ab and 7ba</td><td>yes</td><td class="m">ab = ba</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The coefficient may differ; the letters may not</div>
      ${m('5x')} and ${m('−2x')} are like terms and collect to ${m('3x')}. ${m('5x')} and ${m('5y')} are
      not, and ${m('5x + 5y')} is already as simple as it gets.</div>`
    },
    {
      h: 'Collecting',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Collected</th></tr></thead>
      <tbody>
        <tr><td class="m">5x + 3x</td><td class="m">8x</td></tr>
        <tr><td class="m">7a − 2a</td><td class="m">5a</td></tr>
        <tr><td class="m">4x + 3y + 2x − y</td><td class="m">6x + 2y</td></tr>
        <tr><td class="m">6m − 9m</td><td class="m">−3m</td></tr>
        <tr><td class="m">3a + 4b</td><td class="m">3a + 4b</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A term carries the sign in front of it</span>
      In ${m('4x + 3y + 2x − y')} the last term is ${m('−y')}, with coefficient ${m('−1')}. Collecting the
      ${m('y')} terms gives ${m('3y − y = 2y')}, not ${m('4y')}.</div>`
    },
    {
      h: 'Expanding a bracket',
      html: `${eq(m('a(b + c) = ab + ac'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Expanded</th></tr></thead>
      <tbody>
        <tr><td class="m">3(x + 4)</td><td class="m">3x + 12</td></tr>
        <tr><td class="m">5(2a − 3)</td><td class="m">10a − 15</td></tr>
        <tr><td class="m">x(x + 2)</td><td class="m">x² + 2x</td></tr>
        <tr><td class="m">2(x + 3) + 4x</td><td class="m">6x + 6</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Every term inside the bracket is multiplied</span>
      ${m('3(x + 4)')} is ${m('3x + 12')}, not ${m('3x + 4')}. Drawing two arrows from the ${m('3')} to
      both terms stops this error for good.</div>`
    },
    {
      h: 'Taking a factor out',
      html: `<p>Expanding read backwards: find what every term has in common and write it outside.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>Common factor</th><th>Factorised</th></tr></thead>
      <tbody>
        <tr><td class="m">6x + 9</td><td class="m">3</td><td class="m">3(2x + 3)</td></tr>
        <tr><td class="m">4a − 10</td><td class="m">2</td><td class="m">2(2a − 5)</td></tr>
        <tr><td class="m">x² + 5x</td><td class="m">x</td><td class="m">x(x + 5)</td></tr>
        <tr><td class="m">12m + 8n</td><td class="m">4</td><td class="m">4(3m + 2n)</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Check by substituting a number</div>
      Put ${m('x = 2')} into ${m('6x + 9')} and into ${m('3(2x + 3)')}: both give ${m('21')}. One
      substitution catches almost every slip in this lesson.</div>`
    }
  ],
  examples: [
    {
      q: 'Simplify ' + m('4x + 3y + 2x − y') + '.',
      steps: [
        [m('x') + ' terms: ' + m('4x + 2x = 6x') + '.', ''],
        [m('y') + ' terms: ' + m('3y − y = 2y') + '.', 'The last term is ' + m('−y') + '.'],
        [m('= 6x + 2y'), 'Nothing else is like.']
      ],
      ans: m('6x + 2y')
    },
    {
      q: 'Simplify ' + m('2(x + 3) + 4x') + '.',
      steps: [
        ['Expand: ' + m('2x + 6 + 4x') + '.', 'Both terms multiplied.'],
        ['Collect: ' + m('6x + 6') + '.', ''],
        ['Check at ' + m('x = 1') + ': ' + m('8 = 8') + ' ✓', '']
      ],
      ans: m('6x + 6')
    },
    {
      q: 'Factorise ' + m('6x + 9') + '.',
      steps: [
        ['Both terms divide by ' + m('3') + '.', ''],
        [m('6x ÷ 3 = 2x') + ' and ' + m('9 ÷ 3 = 3') + '.', ''],
        [m('= 3(2x + 3)'), 'Check by expanding.']
      ],
      ans: m('3(2x + 3)')
    }
  ],
  modelNote: 'Use coloured chalk for each letter when collecting; the class sees the groups before it counts them, and the sign errors halve.',
  interactive: {
    type: 'quiz',
    title: 'Collect, expand, factorise',
    hint: 'Only like terms collect.',
    items: [
      { q: m('5x + 3x') + ' equals:', a: [m('8x'), m('8x²'), m('15x'), m('8')], c: 0, why: 'Add the coefficients.' },
      { q: m('5x') + ' and ' + m('5y') + ' collect to:', a: [m('10xy'), m('10x'), 'they do not collect', m('25xy')], c: 2, why: 'Different letters.' },
      { q: m('4x + 3y + 2x − y') + ' equals:', a: [m('6x + 4y'), m('6x + 2y'), m('8x + 2y'), m('6x − 2y')], c: 1, why: m('3y − y') + '.' },
      { q: m('6m − 9m') + ' equals:', a: [m('3m'), m('−3m'), m('15m'), m('−15m')], c: 1, why: 'The larger coefficient is negative.' },
      { q: m('3(x + 4)') + ' equals:', a: [m('3x + 4'), m('3x + 12'), m('x + 12'), m('3x + 7')], c: 1, why: 'Both terms.' },
      { q: m('5(2a − 3)') + ' equals:', a: [m('10a − 3'), m('10a − 15'), m('7a − 15'), m('2a − 15')], c: 1, why: 'Both terms.' },
      { q: m('6x + 9') + ' factorises to:', a: [m('3(2x + 3)'), m('3(2x + 9)'), m('6(x + 9)'), m('3(x + 3)')], c: 0, why: 'Common factor ' + m('3') + '.' },
      { q: m('x² + 5x') + ' factorises to:', a: [m('x(x + 5)'), m('x(x + 5x)'), m('5x(x + 1)'), m('x²(1 + 5)')], c: 0, why: 'Common factor ' + m('x') + '.' }
    ]
  },
  quiz: [
    { q: 'Like terms have:', a: ['the same coefficient', 'the same letter part', 'the same sign', 'nothing in common'], c: 1, why: 'Only then can they collect.' },
    { q: m('7a − 2a') + ' equals:', a: [m('5a'), m('9a'), m('5'), m('14a')], c: 0, why: 'Subtract the coefficients.' },
    { q: m('3a + 4b') + ' simplifies to:', a: [m('7ab'), m('7a'), 'it is already simplest', m('12ab')], c: 2, why: 'Not like terms.' },
    { q: m('x(x + 2)') + ' equals:', a: [m('x² + 2'), m('x² + 2x'), m('2x²'), m('x + 2x')], c: 1, why: 'Both terms multiplied.' },
    { q: m('4a − 10') + ' factorises to:', a: [m('2(2a − 5)'), m('2(2a − 10)'), m('4(a − 10)'), m('2(a − 5)')], c: 0, why: 'Common factor ' + m('2') + '.' },
    { q: 'A simplification is checked by:', a: ['looking', 'substituting a number', 'expanding again', 'nothing'], c: 1, why: 'Both forms must agree.' }
  ],
  practice: {
    easy: [
      [m('5x + 3x'), m('8x')],
      [m('7a − 2a'), m('5a')],
      [m('6m − 9m'), m('−3m')],
      [m('3(x + 4)'), m('3x + 12')],
      [m('5(2a − 3)'), m('10a − 15')],
      [m('6x + 9') + ' factorised', m('3(2x + 3)')],
      [m('3a + 4b'), 'Already simplest']
    ],
    med: [
      [m('4x + 3y + 2x − y'), m('6x + 2y')],
      [m('2(x + 3) + 4x'), m('6x + 6')],
      [m('x(x + 2)'), m('x² + 2x')],
      [m('x² + 5x') + ' factorised', m('x(x + 5)')],
      [m('12m + 8n') + ' factorised', m('4(3m + 2n)')],
      [m('5a + 2b − 3a + 4b'), m('2a + 6b')],
      [m('3(2x − 1) + 5'), m('6x + 2')]
    ],
    hard: [
      [m('4(x + 2) − 3(x − 1)'), m('x + 11')],
      [m('2x(x + 3) − x²'), m('x² + 6x')],
      [m('5(a + b) − 5a'), m('5b')],
      [m('3x + 2y − (x − y)'), m('2x + 3y')],
      ['Factorise ' + m('9x² + 6x'), m('3x(3x + 2)')],
      ['Check ' + m('6x + 9 = 3(2x + 3)') + ' at ' + m('x = 2'), 'Both give ' + m('21')],
      ['Why can ' + m('3a') + ' and ' + m('3a²') + ' not be collected?', 'Their letter parts differ']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Substitute one number into both forms at the end; if they disagree, the simplification is wrong.',
  homework: [
    'Simplify ' + m('7x + 2y − 3x + 5y') + '.',
    'Expand ' + m('4(x + 5)') + ' and ' + m('6(2a − 3)') + '.',
    'Simplify ' + m('3(x + 2) + 2x') + '.',
    'Factorise ' + m('8x + 12') + ' and ' + m('x² + 7x') + '.',
    'Check your answer to task 4 by substituting ' + m('x = 3') + ' into both forms.'
  ]
});
