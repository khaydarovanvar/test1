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

/* ============================== 06 ============================== */
G6_MAT.push({
  id: 'g6-06', stream: 'mat', grade: 6, quarter: 1, lessons: '13–15', hours: 3,
  title: 'Finding the value of an algebraic expression',
  subtitle: 'Substituting a number for the letter — including a negative one, where the brackets matter.',
  uz: 'Matematika 6, §3', uzPage: 'pp. 35–42',
  cam: 'S7 2.2', camPage: 'Stage 7, pp. 24–28', wb: 'Exercise 2.2',
  objectives: [
    'Substitute a value and evaluate, respecting the order of operations.',
    'Substitute a negative value using brackets.',
    'Use a formula to compute a required quantity.',
    'Build a table of values for an expression.'
  ],
  terms: [
    ['To substitute', 'O‘rniga qo‘yish', 'Подставить'],
    ['Value of an expression', 'Ifodaning qiymati', 'Значение выражения'],
    ['Formula', 'Formula', 'Формула'],
    ['Table of values', 'Qiymatlar jadvali', 'Таблица значений'],
    ['To evaluate', 'Hisoblash', 'Вычислить'],
    ['Order of operations', 'Amallar tartibi', 'Порядок действий'],
    ['Square', 'Kvadrat', 'Квадрат'],
    ['Units', 'O‘lchov birligi', 'Единицы измерения']
  ],
  timing: [[20, 'Substituting a number'], [25, 'Negative values'], [30, 'Using formulae'], [30, 'Tables of values'], [15, 'Homework']],
  sections: [
    {
      h: 'Substituting a number',
      html: `<p>Replace the letter by the number, then follow the order of operations exactly as in
      arithmetic.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>At ${m('x = 4')}</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td class="m">3x + 2</td><td class="m">3 · 4 + 2</td><td class="m">14</td></tr>
        <tr><td class="m">3(x + 2)</td><td class="m">3 · 6</td><td class="m">18</td></tr>
        <tr><td class="m">x²</td><td class="m">4 · 4</td><td class="m">16</td></tr>
        <tr><td class="m">2x²</td><td class="m">2 · 16</td><td class="m">32</td></tr>
        <tr><td class="m">(2x)²</td><td class="m">8²</td><td class="m">64</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('2x²')} and ${m('(2x)²')} are different</span>
      In ${m('2x²')} only ${m('x')} is squared; in ${m('(2x)²')} the whole product is. Powers act before
      multiplication unless a bracket says otherwise.</div>`
    },
    {
      h: 'Negative values',
      html: `<p>Substitute a negative number <b>inside brackets</b>, and the sign rules do the rest.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Expression</th><th>At ${m('x = −3')}</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td class="m">2x + 5</td><td class="m">2 · (−3) + 5</td><td class="m">−1</td></tr>
        <tr><td class="m">x²</td><td class="m">(−3)²</td><td class="m">9</td></tr>
        <tr><td class="m">−x</td><td class="m">−(−3)</td><td class="m">3</td></tr>
        <tr><td class="m">x² − x</td><td class="m">9 − (−3)</td><td class="m">12</td></tr>
        <tr><td class="m">5 − 2x</td><td class="m">5 − 2(−3)</td><td class="m">11</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">${m('−x')} is not always negative</div>
      It means “the opposite of ${m('x')}”. When ${m('x')} is negative, ${m('−x')} is positive. Reading
      the minus sign as “opposite” rather than “negative” removes the confusion entirely.</div>`
    },
    {
      h: 'Using formulae',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Formula</th><th>Data</th><th>Value</th></tr></thead>
      <tbody>
        <tr><td class="m">P = 2(a + b)</td><td class="m">a = 7, b = 4</td><td class="m">22 cm</td></tr>
        <tr><td class="m">S = ab</td><td class="m">a = 7, b = 4</td><td class="m">28 cm²</td></tr>
        <tr><td class="m">s = vt</td><td class="m">v = 60, t = 3</td><td class="m">180 km</td></tr>
        <tr><td class="m">S = ${f('1', '2')}ah</td><td class="m">a = 10, h = 6</td><td class="m">30 cm²</td></tr>
        <tr><td class="m">C = ${f('5', '9')}(F − 32)</td><td class="m">F = 68</td><td class="m">20 °C</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Carry the units through</div>
      A formula answers with a quantity, not a bare number: ${m('22 cm')}, ${m('28 cm²')}, ${m('180 km')}.
      The units also check the work — an area that comes out in ${m('cm')} means something went
      wrong.</div>`
    },
    {
      h: 'Tables of values',
      html: `<p>A table shows how the value moves as the letter changes — the first step towards a
      graph.</p>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">x</th><th class="m">−2</th><th class="m">−1</th><th class="m">0</th><th class="m">1</th><th class="m">2</th><th class="m">3</th></tr></thead>
      <tbody>
        <tr><td class="m">2x + 1</td><td class="m">−3</td><td class="m">−1</td><td class="m">1</td><td class="m">3</td><td class="m">5</td><td class="m">7</td></tr>
        <tr><td class="m">x²</td><td class="m">4</td><td class="m">1</td><td class="m">0</td><td class="m">1</td><td class="m">4</td><td class="m">9</td></tr>
        <tr><td class="m">10 − 3x</td><td class="m">16</td><td class="m">13</td><td class="m">10</td><td class="m">7</td><td class="m">4</td><td class="m">1</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Two patterns to notice</div>
      ${m('2x + 1')} climbs by ${m('2')} each step and ${m('10 − 3x')} falls by ${m('3')}, while ${m('x²')}
      does neither — it falls, reaches zero and climbs again. Grade 7 will call the first two
      <i>linear</i>.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the value of ' + m('x² − x') + ' at ' + m('x = −3') + '.',
      steps: [
        ['Substitute in brackets: ' + m('(−3)² − (−3)') + '.', ''],
        [m('(−3)² = 9'), ''],
        [m('− (−3) = +3'), ''],
        [m('9 + 3 = 12'), '']
      ],
      ans: m('12')
    },
    {
      q: 'A car travels at ' + m('60 km/h') + ' for ' + m('3') + ' hours. Use ' + m('s = vt') + '.',
      steps: [
        [m('s = 60 · 3'), ''],
        [m('= 180'), ''],
        ['With units: ' + m('180 km') + '.', '']
      ],
      ans: m('180 km')
    },
    {
      q: 'Convert ' + m('68 °F') + ' using ' + m('C = ' + f('5', '9') + '(F − 32)') + '.',
      steps: [
        [m('F − 32 = 36'), 'Bracket first.'],
        [m(f('5', '9') + ' · 36'), ''],
        [m('= 20'), ''],
        [m('20 °C') + '.', '']
      ],
      ans: m('20 °C')
    }
  ],
  modelNote: 'Insist on brackets round every substituted negative number; the sign errors that plague the whole year begin here and end here.',
  interactive: {
    type: 'substitute',
    title: 'Substitute into ' + m('2x + 1'),
    hint: 'Slide ' + m('x') + ' and watch the value.',
    expr: m('f(x) = 2x + 1'),
    f: function (x) { return 2 * x + 1; },
    den: function () { return 1; },
    start: 2
  },
  quiz: [
    { q: m('3x + 2') + ' at ' + m('x = 4') + ' is:', a: [m('14'), m('18'), m('20'), m('12')], c: 0, why: 'Multiply first.' },
    { q: m('3(x + 2)') + ' at ' + m('x = 4') + ' is:', a: [m('14'), m('18'), m('20'), m('12')], c: 1, why: 'Bracket first.' },
    { q: m('x²') + ' at ' + m('x = −3') + ' is:', a: [m('9'), m('−9'), m('6'), m('−6')], c: 0, why: 'A square is never negative.' },
    { q: m('−x') + ' at ' + m('x = −3') + ' is:', a: [m('−3'), m('3'), m('0'), m('9')], c: 1, why: 'The opposite of ' + m('−3') + '.' },
    { q: m('(2x)²') + ' at ' + m('x = 4') + ' is:', a: [m('16'), m('32'), m('64'), m('8')], c: 2, why: 'The whole product is squared.' },
    { q: m('s = vt') + ' with ' + m('v = 60, t = 3') + ' gives:', a: [m('20'), m('63'), m('180'), m('180 km')], c: 3, why: 'With units.' }
  ],
  practice: {
    easy: [
      [m('3x + 2') + ' at ' + m('x = 4'), m('14')],
      [m('3(x + 2)') + ' at ' + m('x = 4'), m('18')],
      [m('x²') + ' at ' + m('x = 4'), m('16')],
      [m('2x²') + ' at ' + m('x = 4'), m('32')],
      [m('(2x)²') + ' at ' + m('x = 4'), m('64')],
      [m('2x + 5') + ' at ' + m('x = −3'), m('−1')],
      [m('−x') + ' at ' + m('x = −3'), m('3')]
    ],
    med: [
      [m('x² − x') + ' at ' + m('x = −3'), m('12')],
      [m('5 − 2x') + ' at ' + m('x = −3'), m('11')],
      [m('P = 2(a + b)') + ' at ' + m('a = 7, b = 4'), m('22 cm')],
      [m('S = ab') + ' at ' + m('a = 7, b = 4'), m('28 cm²')],
      [m('S = ' + f('1', '2') + 'ah') + ' at ' + m('a = 10, h = 6'), m('30 cm²')],
      [m('s = vt') + ' at ' + m('v = 60, t = 3'), m('180 km')],
      ['A table of ' + m('2x + 1') + ' at ' + m('x = −1, 0, 1'), m('−1, 1, 3')]
    ],
    hard: [
      [m('C = ' + f('5', '9') + '(F − 32)') + ' at ' + m('F = 68'), m('20 °C')],
      [m('C = ' + f('5', '9') + '(F − 32)') + ' at ' + m('F = 32'), m('0 °C')],
      [m('x² + 2x − 3') + ' at ' + m('x = −4'), m('5')],
      [m('(x − 1)(x + 2)') + ' at ' + m('x = −2'), m('0')],
      [m(f('a + b', '2')) + ' at ' + m('a = −7, b = 3'), m('−2')],
      ['For which ' + m('x') + ' does ' + m('2x + 1') + ' equal ' + m('9') + '?', m('x = 4')],
      ['Why is ' + m('2x²') + ' not ' + m('(2x)²') + '?', 'The power acts on ' + m('x') + ' alone unless a bracket says otherwise']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Put every negative substitution in brackets, without exception.',
  homework: [
    'Find ' + m('4x − 3') + ' at ' + m('x = 5') + ' and at ' + m('x = −5') + '.',
    'Find ' + m('x² + x') + ' at ' + m('x = −4') + '.',
    'Find the perimeter and area of a rectangle with ' + m('a = 9') + ' and ' + m('b = 6') + '.',
    'Convert ' + m('86 °F') + ' to Celsius.',
    'Make a table of ' + m('10 − 3x') + ' for ' + m('x = −2') + ' to ' + m('3') + '.'
  ]
});

/* ============================== 07 ============================== */
G6_MAT.push({
  id: 'g6-07', stream: 'mat', grade: 6, quarter: 1, lessons: '16–18', hours: 3,
  title: 'Solving equations',
  subtitle: 'Undoing what was done to the unknown — and checking the root in the equation you were given.',
  uz: 'Matematika 6, §4', uzPage: 'pp. 43–50',
  cam: 'S7 2.5', camPage: 'Stage 7, pp. 32–38', wb: 'Exercise 2.5',
  objectives: [
    'Solve one-step and two-step equations by inverse operations.',
    'Solve equations with a bracket and with the unknown on both sides.',
    'Check a root by substituting into the original equation.',
    'Write a simple word problem as an equation.'
  ],
  terms: [
    ['Equation', 'Tenglama', 'Уравнение'],
    ['Root', 'Ildiz', 'Корень'],
    ['Unknown', 'Noma’lum', 'Неизвестное'],
    ['Inverse operation', 'Teskari amal', 'Обратное действие'],
    ['To balance', 'Muvozanatlash', 'Уравновешивать'],
    ['Both sides', 'Ikkala tomon', 'Обе части'],
    ['To check', 'Tekshirmoq', 'Проверить'],
    ['Solution', 'Yechim', 'Решение']
  ],
  timing: [[20, 'The balance'], [25, 'One and two steps'], [30, 'Brackets and both sides'], [30, 'Word problems'], [15, 'Homework']],
  sections: [
    {
      h: 'The balance',
      html: `<p>An equation is a balance: whatever is done to one side must be done to the other, or it
      tips.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Operation on the unknown</th><th>Undone by</th></tr></thead>
      <tbody>
        <tr><td>adding ${m('5')}</td><td>subtracting ${m('5')}</td></tr>
        <tr><td>subtracting ${m('5')}</td><td>adding ${m('5')}</td></tr>
        <tr><td>multiplying by ${m('3')}</td><td>dividing by ${m('3')}</td></tr>
        <tr><td>dividing by ${m('3')}</td><td>multiplying by ${m('3')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Undo in the reverse order</div>
      In ${m('3x + 5')} the ${m('x')} was multiplied first and added to second, so the addition is undone
      first and the multiplication second — like taking off shoes before socks were put on.</div>`
    },
    {
      h: 'One and two steps',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Equation</th><th>Step</th><th>Root</th></tr></thead>
      <tbody>
        <tr><td class="m">x + 7 = 12</td><td>subtract ${m('7')}</td><td class="m">x = 5</td></tr>
        <tr><td class="m">x − 4 = 9</td><td>add ${m('4')}</td><td class="m">x = 13</td></tr>
        <tr><td class="m">5x = 40</td><td>divide by ${m('5')}</td><td class="m">x = 8</td></tr>
        <tr><td class="m">${f('x', '3')} = 6</td><td>multiply by ${m('3')}</td><td class="m">x = 18</td></tr>
        <tr><td class="m">3x + 5 = 20</td><td>subtract ${m('5')}, divide by ${m('3')}</td><td class="m">x = 5</td></tr>
        <tr><td class="m">2x − 7 = 11</td><td>add ${m('7')}, divide by ${m('2')}</td><td class="m">x = 9</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Check in the equation as it was given</span>
      For ${m('3x + 5 = 20')}: ${m('3 · 5 + 5 = 20')} ✓. Checking in a line of your own working repeats
      any error you have already made.</div>`
    },
    {
      h: 'Brackets and both sides',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Equation</th><th>First move</th><th>Root</th></tr></thead>
      <tbody>
        <tr><td class="m">2(x + 3) = 14</td><td>expand or divide by ${m('2')}</td><td class="m">x = 4</td></tr>
        <tr><td class="m">3(x − 1) = 12</td><td>divide by ${m('3')}</td><td class="m">x = 5</td></tr>
        <tr><td class="m">5x = 2x + 12</td><td>subtract ${m('2x')}</td><td class="m">x = 4</td></tr>
        <tr><td class="m">4x + 1 = 2x + 9</td><td>subtract ${m('2x')}, then ${m('1')}</td><td class="m">x = 4</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Gather the unknowns on the side where more of them are</div>
      In ${m('4x + 1 = 2x + 9')} taking ${m('2x')} from both sides leaves ${m('2x')} on the left, which is
      positive. Working the other way gives ${m('−2x')} and an extra chance to slip.</div>`
    },
    {
      h: 'Word problems',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Equation</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>a number trebled and increased by ${m('5')} is ${m('26')}</td><td class="m">3x + 5 = 26</td><td class="m">7</td></tr>
        <tr><td>a rectangle of perimeter ${m('30')} with width ${m('6')}</td><td class="m">2(6 + b) = 30</td><td class="m">b = 9</td></tr>
        <tr><td>${m('5')} pens cost ${m('20 000')}</td><td class="m">5p = 20 000</td><td class="m">4000</td></tr>
        <tr><td>Ali is ${m('4')} years older than Sardor; together ${m('26')}</td><td class="m">x + (x + 4) = 26</td><td class="m">11 and 15</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Three lines: let, equation, answer</div>
      Say what the letter stands for, write the equation, solve it, and answer the question in words. The
      first and last lines carry as many marks as the algebra between them.</div>`
    }
  ],
  examples: [
    {
      q: 'Solve ' + m('3x + 5 = 20') + '.',
      steps: [
        ['Subtract ' + m('5') + ' from both sides: ' + m('3x = 15') + '.', ''],
        ['Divide both sides by ' + m('3') + ': ' + m('x = 5') + '.', ''],
        ['Check: ' + m('3 · 5 + 5 = 20') + ' ✓', '']
      ],
      ans: m('x = 5')
    },
    {
      q: 'Solve ' + m('4x + 1 = 2x + 9') + '.',
      steps: [
        ['Subtract ' + m('2x') + ': ' + m('2x + 1 = 9') + '.', ''],
        ['Subtract ' + m('1') + ': ' + m('2x = 8') + '.', ''],
        ['Divide by ' + m('2') + ': ' + m('x = 4') + '.', ''],
        ['Check: ' + m('17 = 17') + ' ✓', '']
      ],
      ans: m('x = 4')
    },
    {
      q: 'A rectangle has perimeter ' + m('30 cm') + ' and width ' + m('6 cm') + '. Find its length.',
      steps: [
        ['Let the length be ' + m('b') + '.', ''],
        [m('2(6 + b) = 30'), ''],
        [m('6 + b = 15'), 'Divide by ' + m('2') + '.'],
        [m('b = 9 cm'), '']
      ],
      ans: m('9 cm')
    }
  ],
  modelNote: 'Draw a pair of scales on the board and physically remove the same weight from both pans; every later step of algebra is that picture.',
  interactive: {
    type: 'quiz',
    title: 'One step at a time',
    hint: 'Undo the last thing that was done first.',
    items: [
      { q: m('x + 7 = 12') + ' gives:', a: [m('x = 19'), m('x = 5'), m('x = 7'), m('x = 12')], c: 1, why: 'Subtract ' + m('7') + '.' },
      { q: m('5x = 40') + ' gives:', a: [m('x = 35'), m('x = 45'), m('x = 8'), m('x = 200')], c: 2, why: 'Divide by ' + m('5') + '.' },
      { q: m(f('x', '3') + ' = 6') + ' gives:', a: [m('x = 2'), m('x = 18'), m('x = 9'), m('x = 3')], c: 1, why: 'Multiply by ' + m('3') + '.' },
      { q: 'In ' + m('3x + 5 = 20') + ' you first:', a: ['divide by ' + m('3'), 'subtract ' + m('5'), 'add ' + m('5'), 'multiply by ' + m('3')], c: 1, why: 'Undo in reverse order.' },
      { q: 'It gives:', a: [m('x = 5'), m('x = 15'), m('x = 8'), m('x = 25')], c: 0, why: m('3x = 15') + '.' },
      { q: m('2(x + 3) = 14') + ' gives:', a: [m('x = 4'), m('x = 7'), m('x = 11'), m('x = 8')], c: 0, why: 'Divide by ' + m('2') + ' first.' },
      { q: m('5x = 2x + 12') + ' gives:', a: [m('x = 4'), m('x = 12'), m('x = 3'), m('x = 6')], c: 0, why: m('3x = 12') + '.' },
      { q: 'A root should be checked in:', a: ['your last line', 'the original equation', 'a calculator', 'nothing'], c: 1, why: 'Errors do not repeat that way.' }
    ]
  },
  quiz: [
    { q: 'An equation is like:', a: ['a list', 'a balance', 'a graph', 'a table'], c: 1, why: 'Both sides stay equal.' },
    { q: 'Multiplying by ' + m('3') + ' is undone by:', a: ['adding ' + m('3'), 'subtracting ' + m('3'), 'dividing by ' + m('3'), 'squaring'], c: 2, why: 'The inverse operation.' },
    { q: m('2x − 7 = 11') + ' gives:', a: [m('x = 2'), m('x = 9'), m('x = 18'), m('x = 4')], c: 1, why: m('2x = 18') + '.' },
    { q: m('3(x − 1) = 12') + ' gives:', a: [m('x = 3'), m('x = 5'), m('x = 4'), m('x = 13')], c: 1, why: m('x − 1 = 4') + '.' },
    { q: 'In ' + m('4x + 1 = 2x + 9') + ' you gather the unknowns:', a: ['on the left', 'on the right', 'either way', 'nowhere'], c: 0, why: 'More of them there.' },
    { q: 'A word problem needs first:', a: ['the equation', 'a “let” sentence', 'the answer', 'a check'], c: 1, why: 'Say what the letter is.' }
  ],
  practice: {
    easy: [
      [m('x + 7 = 12'), m('x = 5')],
      [m('x − 4 = 9'), m('x = 13')],
      [m('5x = 40'), m('x = 8')],
      [m(f('x', '3') + ' = 6'), m('x = 18')],
      [m('3x + 5 = 20'), m('x = 5')],
      [m('2x − 7 = 11'), m('x = 9')],
      [m('x + 12 = 12'), m('x = 0')]
    ],
    med: [
      [m('2(x + 3) = 14'), m('x = 4')],
      [m('3(x − 1) = 12'), m('x = 5')],
      [m('5x = 2x + 12'), m('x = 4')],
      [m('4x + 1 = 2x + 9'), m('x = 4')],
      ['A number trebled and increased by ' + m('5') + ' is ' + m('26'), m('7')],
      [m('5') + ' pens cost ' + m('20 000') + ': one pen', m('4000')],
      ['A rectangle of perimeter ' + m('30') + ' and width ' + m('6'), 'Length ' + m('9')]
    ],
    hard: [
      [m('4(x − 2) = 2(x + 3)'), m('x = 7')],
      [m('5x − 3 = 3x + 7'), m('x = 5')],
      [m(f('x', '2') + ' + 4 = 10'), m('x = 12')],
      [m('7 − x = 2'), m('x = 5')],
      ['Ali is ' + m('4') + ' years older than Sardor and together they are ' + m('26'), m('11') + ' and ' + m('15')],
      ['Three consecutive numbers add to ' + m('42'), m('13, 14, 15')],
      ['Why check in the original equation?', 'A check on your own working repeats your own error']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write the check as its own line beneath every answer.',
  homework: [
    'Solve ' + m('x + 9 = 21') + ', ' + m('6x = 54') + ' and ' + m(f('x', '4') + ' = 7') + '.',
    'Solve ' + m('4x + 3 = 27') + ' and ' + m('5x − 8 = 12') + '.',
    'Solve ' + m('3(x + 2) = 21') + '.',
    'Solve ' + m('6x + 2 = 4x + 14') + '.',
    'A number doubled and increased by ' + m('7') + ' is ' + m('31') + '. Find it, writing all three lines.'
  ]
});

/* ============================== 08 ============================== */
G6_MAT.push({
  id: 'g6-08', stream: 'mat', grade: 6, quarter: 1, lessons: '19', hours: 1,
  title: 'Control work 1 — expressions and equations',
  subtitle: 'Directed numbers, algebraic expressions and one-step and two-step equations.',
  uz: 'Matematika 6, Nazorat ishi 1', uzPage: 'pp. 9–50',
  cam: 'S7 1–2 review', camPage: 'Stage 7, pp. 8–38', wb: 'Control paper 1',
  objectives: [
    'Work with the sign rules accurately under time.',
    'Translate between words and algebra.',
    'Simplify and evaluate an expression.',
    'Solve an equation and check the root.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Integer', 'Butun son', 'Целое число'],
    ['Expression', 'Ifoda', 'Выражение'],
    ['Like terms', 'O‘xshash hadlar', 'Подобные члены'],
    ['To substitute', 'O‘rniga qo‘yish', 'Подставить'],
    ['Equation', 'Tenglama', 'Уравнение'],
    ['Root', 'Ildiz', 'Корень'],
    ['Check', 'Tekshirish', 'Проверка']
  ],
  timing: [[2, 'Instructions'], [28, 'The paper'], [8, 'Answers and diagnosis'], [2, 'What comes next']],
  sections: [
    {
      h: 'The paper — 20 marks, 28 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>${m('−3 + 8')}, ${m('4 − 9')} and ${m('5 − (−6)')}</td><td class="m">3</td><td>L2–4</td></tr>
        <tr><td>2</td><td>${m('(−7) · 4')}, ${m('(−36) ÷ (−9)')} and ${m('(−3)²')}</td><td class="m">3</td><td>L5–7</td></tr>
        <tr><td>3</td><td>Write “four times a number, then subtract ${m('3')}” and “subtract ${m('3')} from a number, then multiply by ${m('4')}”</td><td class="m">3</td><td>L8–10</td></tr>
        <tr><td>4</td><td>Simplify ${m('6x + 2y − 4x + 3y')}</td><td class="m">3</td><td>L11–12</td></tr>
        <tr><td>5</td><td>Find ${m('x² − 2x')} at ${m('x = −3')}</td><td class="m">3</td><td>L13–15</td></tr>
        <tr><td>6</td><td>Solve ${m('4x − 5 = 19')} and check</td><td class="m">3</td><td>L16–18</td></tr>
        <tr><td>7</td><td>Solve ${m('3(x + 2) = 5x')}</td><td class="m">2</td><td>L16–18</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The answers</div>
      ${m('5')}, ${m('−5')}, ${m('11')}; ${m('−28')}, ${m('4')}, ${m('9')}; ${m('4x − 3')} and
      ${m('4(x − 3)')}; ${m('2x + 5y')}; ${m('15')}; ${m('x = 6')}; ${m('x = 3')}.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>double minus not applied</td><td class="m">5 − (−6) = −1</td><td class="m">11</td></tr>
        <tr><td>sign rule reversed</td><td class="m">(−36) ÷ (−9) = −4</td><td class="m">4</td></tr>
        <tr><td class="m">(−3)²</td><td class="m">−9</td><td class="m">9</td></tr>
        <tr><td>bracket omitted in a translation</td><td class="m">4x − 3</td><td class="m">4(x − 3)</td></tr>
        <tr><td>unlike terms collected</td><td class="m">6x + 2y = 8xy</td><td class="m">6x + 2y</td></tr>
        <tr><td>negative substituted without brackets</td><td class="m">−3² = −9</td><td class="m">(−3)² = 9</td></tr>
        <tr><td>no check</td><td>a root and nothing else</td><td>substitute into the original</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'What comes next',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>If you lost marks on</th><th>Revise before</th></tr></thead>
      <tbody>
        <tr><td>Q1–Q2</td><td>the next Cambridge insert — inequalities, lesson 20</td></tr>
        <tr><td>Q3–Q4</td><td>ratio, lesson 42, where expressions return</td></tr>
        <tr><td>Q5</td><td>percentages, lesson 59, where formulae are evaluated</td></tr>
        <tr><td>Q6–Q7</td><td>every word problem for the rest of the year</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Looking forward</div>
      The next block leaves algebra for a while and returns to fractions — but every one of the equations
      above will be needed again in Quarter III, when speed and distance are found from formulae.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q5: find ' + m('x² − 2x') + ' at ' + m('x = −3') + '.',
      steps: [
        ['Substitute in brackets: ' + m('(−3)² − 2(−3)') + '.', ''],
        [m('(−3)² = 9'), ''],
        [m('−2 · (−3) = +6'), 'Two minuses.'],
        [m('9 + 6 = 15'), '']
      ],
      ans: m('15')
    },
    {
      q: 'Model answer, Q6: solve ' + m('4x − 5 = 19') + '.',
      steps: [
        ['Add ' + m('5') + ': ' + m('4x = 24') + '.', ''],
        ['Divide by ' + m('4') + ': ' + m('x = 6') + '.', ''],
        ['Check: ' + m('4 · 6 − 5 = 19') + ' ✓', '']
      ],
      ans: m('x = 6')
    },
    {
      q: 'Model answer, Q7: solve ' + m('3(x + 2) = 5x') + '.',
      steps: [
        ['Expand: ' + m('3x + 6 = 5x') + '.', ''],
        ['Subtract ' + m('3x') + ': ' + m('6 = 2x') + '.', ''],
        [m('x = 3'), 'Check: ' + m('15 = 15') + ' ✓']
      ],
      ans: m('x = 3')
    }
  ],
  modelNote: 'Mark Q1 and Q2 first and return them within the lesson; sign errors corrected the same day rarely come back.',
  interactive: {
    type: 'quiz',
    title: 'The block in eight questions',
    hint: 'Signs, translation, simplification, equations.',
    items: [
      { q: m('5 − (−6)') + ' equals:', a: [m('−1'), m('11'), m('1'), m('−11')], c: 1, why: 'Two minuses make a plus.' },
      { q: m('(−7) · 4') + ' equals:', a: [m('28'), m('−28'), m('−3'), m('3')], c: 1, why: 'Different signs.' },
      { q: m('(−36) ÷ (−9)') + ' equals:', a: [m('4'), m('−4'), m('−45'), m('45')], c: 0, why: 'Same signs.' },
      { q: m('(−3)²') + ' equals:', a: [m('9'), m('−9'), m('6'), m('−6')], c: 0, why: 'The bracket squares the sign.' },
      { q: '“Subtract ' + m('3') + ' from a number, then multiply by ' + m('4') + '”:', a: [m('4x − 3'), m('4(x − 3)'), m('4x + 3'), m('3 − 4x')], c: 1, why: '“Then” marks the bracket.' },
      { q: m('6x + 2y − 4x + 3y') + ' equals:', a: [m('2x + 5y'), m('10x + 5y'), m('2x − y'), m('7xy')], c: 0, why: 'Collect each letter.' },
      { q: m('x² − 2x') + ' at ' + m('x = −3') + ' is:', a: [m('3'), m('15'), m('−15'), m('9')], c: 1, why: m('9 + 6') + '.' },
      { q: m('4x − 5 = 19') + ' gives:', a: [m('x = 6'), m('x = 3.5'), m('x = 24'), m('x = 4')], c: 0, why: m('4x = 24') + '.' }
    ]
  },
  quiz: [
    { q: 'Q1 tests:', a: ['multiplying integers', 'adding and subtracting integers', 'equations', 'expressions'], c: 1, why: 'The number line.' },
    { q: 'Q3 loses marks most often through:', a: ['the numbers', 'the missing bracket', 'the letters', 'the sign'], c: 1, why: '“Then” marks it.' },
    { q: 'Q4 answer is:', a: [m('2x + 5y'), m('10x + 5y'), m('7xy'), m('2xy')], c: 0, why: 'Only like terms collect.' },
    { q: 'Q5 needs the substitution written:', a: ['without brackets', 'in brackets', 'as a decimal', 'as a fraction'], c: 1, why: 'The value is negative.' },
    { q: 'Q6 must end with:', a: ['the root', 'the root and a check', 'a graph', 'a table'], c: 1, why: 'The check carries a mark.' },
    { q: 'Q7 begins by:', a: ['dividing', 'expanding the bracket', 'squaring', 'checking'], c: 1, why: 'Or dividing by ' + m('3') + ' — either works.' }
  ],
  practice: {
    easy: [
      [m('−3 + 8'), m('5')],
      [m('4 − 9'), m('−5')],
      [m('5 − (−6)'), m('11')],
      [m('(−7) · 4'), m('−28')],
      [m('(−36) ÷ (−9)'), m('4')],
      [m('(−3)²'), m('9')],
      [m('6x + 2y − 4x + 3y'), m('2x + 5y')]
    ],
    med: [
      ['“Four times a number, then subtract ' + m('3') + '”', m('4x − 3')],
      ['“Subtract ' + m('3') + ' from a number, then multiply by ' + m('4') + '”', m('4(x − 3)')],
      [m('x² − 2x') + ' at ' + m('x = −3'), m('15')],
      [m('4x − 5 = 19'), m('x = 6')],
      [m('3(x + 2) = 5x'), m('x = 3')],
      [m('2x + 7 = x + 12'), m('x = 5')],
      [m('(−2)³'), m('−8')]
    ],
    hard: [
      [m('−4 − (−9) + (−2)'), m('3')],
      [m('(−2)(−3)(−1)'), m('−6')],
      [m('2x² − x') + ' at ' + m('x = −2'), m('10')],
      [m('5(x − 1) = 3(x + 3)'), m('x = 7')],
      ['Simplify ' + m('4(a + 2b) − 3a'), m('a + 8b')],
      ['A number trebled and decreased by ' + m('4') + ' is ' + m('17'), m('7')],
      ['Why must ' + m('−3') + ' be substituted in brackets?', 'Otherwise the square loses its sign']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite every question you lost a mark on in full, from the first line.',
  homework: [
    'Rewrite in full every question on which you lost a mark.',
    'Compute ' + m('−8 + 15') + ', ' + m('3 − 11') + ' and ' + m('7 − (−4)') + '.',
    'Compute ' + m('(−5) · 6') + ' and ' + m('(−48) ÷ (−6)') + '.',
    'Simplify ' + m('8a + 3b − 5a + b') + ' and find its value at ' + m('a = 2, b = −1') + '.',
    'Solve ' + m('5x − 4 = 26') + ' and check your root.'
  ]
});

/* ============================== 09 ============================== */
G6_MAT.push({
  id: 'g6-09', stream: 'mat', grade: 6, quarter: 1, lessons: '20', hours: 1,
  title: 'Think — inequalities',
  subtitle: 'A Cambridge insert: when two quantities are not equal, and how to write and read that.',
  uz: 'Matematika 6, o‘ylab ko‘r', uzPage: 'pp. 51–53',
  cam: 'S7 2.6', camPage: 'Stage 7, pp. 38–41', wb: 'Exercise 2.6',
  objectives: [
    'Read and write the four inequality symbols.',
    'Show an inequality on a number line.',
    'List the integers satisfying a simple inequality.',
    'Use inequalities to describe a real restriction.'
  ],
  terms: [
    ['Inequality', 'Tengsizlik', 'Неравенство'],
    ['Greater than', 'Katta', 'Больше'],
    ['Less than', 'Kichik', 'Меньше'],
    ['At least', 'Kamida', 'Не менее'],
    ['At most', 'Ko‘pi bilan', 'Не более'],
    ['Number line', 'Sonlar o‘qi', 'Числовая прямая'],
    ['Solution set', 'Yechimlar to‘plami', 'Множество решений'],
    ['Integer', 'Butun son', 'Целое число']
  ],
  timing: [[10, 'Four symbols'], [12, 'On the number line'], [12, 'Listing the integers'], [6, 'In the world']],
  sections: [
    {
      h: 'Four symbols',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Symbol</th><th>Read as</th><th>Everyday phrase</th></tr></thead>
      <tbody>
        <tr><td class="m">&gt;</td><td>is greater than</td><td>more than</td></tr>
        <tr><td class="m">&lt;</td><td>is less than</td><td>fewer than</td></tr>
        <tr><td class="m">≥</td><td>is greater than or equal to</td><td>at least</td></tr>
        <tr><td class="m">≤</td><td>is less than or equal to</td><td>at most, no more than</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The wide end faces the larger number</div>
      ${m('7 > 3')} and ${m('3 < 7')} say the same thing. Reading the symbol aloud from left to right,
      every time, is how it stops being guessed at.</div>`
    },
    {
      h: 'On the number line',
      html: `{{fig:numberLineInterval:An inequality shown as a ray on the number line}}
      <div class="tablewrap"><table>
      <thead><tr><th>Inequality</th><th>Circle at the end</th><th>Arrow points</th></tr></thead>
      <tbody>
        <tr><td class="m">x > 3</td><td>open</td><td>right</td></tr>
        <tr><td class="m">x ≥ 3</td><td>filled</td><td>right</td></tr>
        <tr><td class="m">x < 3</td><td>open</td><td>left</td></tr>
        <tr><td class="m">x ≤ 3</td><td>filled</td><td>left</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The circle says whether the end point counts</div>
      Filled means the number itself is included; open means it is not. That single dot is the whole
      difference between ${m('>')} and ${m('≥')}.</div>`
    },
    {
      h: 'Listing the integers',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Condition</th><th>The integers</th><th>How many</th></tr></thead>
      <tbody>
        <tr><td class="m">2 < x < 7</td><td class="m">3, 4, 5, 6</td><td class="m">4</td></tr>
        <tr><td class="m">2 ≤ x ≤ 7</td><td class="m">2, 3, 4, 5, 6, 7</td><td class="m">6</td></tr>
        <tr><td class="m">−3 < x ≤ 1</td><td class="m">−2, −1, 0, 1</td><td class="m">4</td></tr>
        <tr><td class="m">x ≥ 5</td><td class="m">5, 6, 7, …</td><td>infinitely many</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('<')} excludes the end, ${m('≤')} includes it</span>
      ${m('2 < x < 7')} has four integers; ${m('2 ≤ x ≤ 7')} has six. Two symbols, two extra numbers —
      and it is a mark in every paper that asks for a list.</div>`
    },
    {
      h: 'In the world',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>In symbols</th></tr></thead>
      <tbody>
        <tr><td>a lift carries at most ${m('8')} people</td><td class="m">n ≤ 8</td></tr>
        <tr><td>the class has at least ${m('20')} pupils</td><td class="m">n ≥ 20</td></tr>
        <tr><td>the speed limit is ${m('60 km/h')}</td><td class="m">v ≤ 60</td></tr>
        <tr><td>water is liquid between ${m('0')} and ${m('100 °C')}</td><td class="m">0 < t < 100</td></tr>
        <tr><td>a triangle's angles</td><td class="m">0° < α < 180°</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">“At most” is ${m('≤')}, not ${m('<')}</div>
      A lift that carries at most eight can carry eight. Everyday phrases translate into the symbols with
      the equality included far more often than pupils expect.</div>`
    }
  ],
  examples: [
    {
      q: 'List the integers satisfying ' + m('−3 < x ≤ 1') + '.',
      steps: [
        [m('−3') + ' is excluded — the symbol is ' + m('<') + '.', ''],
        [m('1') + ' is included — the symbol is ' + m('≤') + '.', ''],
        ['So: ' + m('−2, −1, 0, 1') + '.', '']
      ],
      ans: m('−2, −1, 0, 1')
    },
    {
      q: 'Write “a lift carries at most ' + m('8') + ' people” in symbols.',
      steps: [
        ['Let ' + m('n') + ' be the number of people.', ''],
        ['“At most” includes ' + m('8') + ' itself.', ''],
        [m('n ≤ 8'), '']
      ],
      ans: m('n ≤ 8')
    },
    {
      q: 'How many integers satisfy ' + m('2 ≤ x ≤ 7') + '?',
      steps: [
        ['Both ends are included.', ''],
        [m('2, 3, 4, 5, 6, 7'), ''],
        ['Six integers.', '']
      ],
      ans: m('6')
    }
  ],
  modelNote: 'Ask for the number of pupils the room may hold and write it as an inequality on the board; the class supplies the ≤ themselves once they see that the full room is allowed.',
  interactive: {
    type: 'inequalityLine',
    title: 'An inequality on the number line',
    hint: 'Open circle excludes, filled circle includes.'
  },
  quiz: [
    { q: m('≥') + ' means:', a: ['greater than', 'at least', 'at most', 'less than'], c: 1, why: 'Equality included.' },
    { q: m('≤') + ' means:', a: ['at least', 'at most', 'greater than', 'not equal'], c: 1, why: 'Equality included.' },
    { q: 'An open circle on the line means the end point is:', a: ['included', 'excluded', 'negative', 'zero'], c: 1, why: 'Strict inequality.' },
    { q: 'The integers with ' + m('2 < x < 7') + ' number:', a: [m('4'), m('5'), m('6'), m('7')], c: 0, why: m('3, 4, 5, 6') + '.' },
    { q: 'The integers with ' + m('2 ≤ x ≤ 7') + ' number:', a: [m('4'), m('5'), m('6'), m('7')], c: 2, why: 'Both ends count.' },
    { q: '“At most ' + m('8') + '” is:', a: [m('n < 8'), m('n ≤ 8'), m('n > 8'), m('n ≥ 8')], c: 1, why: 'Eight is allowed.' }
  ],
  practice: {
    easy: [
      ['Read ' + m('7 > 3'), 'Seven is greater than three'],
      ['Read ' + m('3 < 7'), 'Three is less than seven'],
      ['Read ' + m('x ≥ 5'), m('x') + ' is at least five'],
      ['Read ' + m('x ≤ 5'), m('x') + ' is at most five'],
      ['Is ' + m('−2 > −7') + '?', 'Yes'],
      ['Is ' + m('0 < −1') + '?', 'No'],
      ['The circle for ' + m('x > 3'), 'Open']
    ],
    med: [
      ['The integers with ' + m('2 < x < 7'), m('3, 4, 5, 6')],
      ['The integers with ' + m('2 ≤ x ≤ 7'), m('2, 3, 4, 5, 6, 7')],
      ['The integers with ' + m('−3 < x ≤ 1'), m('−2, −1, 0, 1')],
      ['“A lift carries at most ' + m('8') + '”', m('n ≤ 8')],
      ['“The class has at least ' + m('20') + '”', m('n ≥ 20')],
      ['“The speed limit is ' + m('60') + '”', m('v ≤ 60')],
      ['Water is liquid between ' + m('0') + ' and ' + m('100 °C'), m('0 < t < 100')]
    ],
    hard: [
      ['How many integers satisfy ' + m('−5 ≤ x < 4') + '?', m('9')],
      ['Write “more than ' + m('3') + ' but no more than ' + m('10') + '”', m('3 < x ≤ 10')],
      ['The angles of a triangle satisfy', m('0° < α < 180°')],
      ['Which integers satisfy both ' + m('x > 2') + ' and ' + m('x ≤ 5') + '?', m('3, 4, 5')],
      ['Can ' + m('x < 3') + ' and ' + m('x > 5') + ' both hold?', 'No'],
      ['Write the ages of a Grade 6 pupil as an inequality', 'e.g. ' + m('11 ≤ a ≤ 13')],
      ['Why does “at most” use ' + m('≤') + ' and not ' + m('<') + '?', 'The stated number is itself allowed']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Read every symbol aloud from left to right before writing anything.',
  homework: [
    'Write in symbols: at least ' + m('12') + '; at most ' + m('30') + '; more than ' + m('7') + '.',
    'List the integers satisfying ' + m('−4 ≤ x < 2') + '.',
    'Show ' + m('x > −1') + ' on a number line, with the right kind of circle.',
    'Write three real restrictions from your own day as inequalities.',
    'How many integers satisfy ' + m('−10 < x ≤ 0') + '?'
  ]
});

/* ============================== 10 ============================== */
G6_MAT.push({
  id: 'g6-10', stream: 'mat', grade: 6, quarter: 1, lessons: '21', hours: 1,
  title: 'Discuss and recall — fractions',
  subtitle: 'What Grade 5 established about fractions, gathered on one page before the division begins.',
  uz: 'Matematika 6, takrorlash', uzPage: 'pp. 54–57',
  cam: 'S7 7 entry', camPage: 'Stage 7, pp. 66–70', wb: 'Exercise 7.1',
  objectives: [
    'Simplify a fraction to its lowest terms.',
    'Convert between mixed numbers and improper fractions.',
    'Compare and order fractions.',
    'Add, subtract and multiply fractions.'
  ],
  terms: [
    ['Proper fraction', 'To‘g‘ri kasr', 'Правильная дробь'],
    ['Improper fraction', 'Noto‘g‘ri kasr', 'Неправильная дробь'],
    ['Mixed number', 'Aralash son', 'Смешанное число'],
    ['Lowest terms', 'Qisqarmas ko‘rinish', 'Несократимый вид'],
    ['Common denominator', 'Umumiy maxraj', 'Общий знаменатель'],
    ['Reciprocal', 'Teskari son', 'Обратное число'],
    ['To simplify', 'Qisqartirish', 'Сократить'],
    ['To compare', 'Taqqoslash', 'Сравнить']
  ],
  timing: [[8, 'The vocabulary'], [10, 'Simplifying and converting'], [12, 'Comparing'], [10, 'The three operations you already have']],
  sections: [
    {
      h: 'The vocabulary',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Kind</th><th>Example</th><th>Test</th></tr></thead>
      <tbody>
        <tr><td>proper</td><td class="m">${f('3', '5')}</td><td>numerator smaller</td></tr>
        <tr><td>improper</td><td class="m">${f('7', '5')}</td><td>numerator larger</td></tr>
        <tr><td>mixed</td><td class="m">1${f('2', '5')}</td><td>a whole part and a proper fraction</td></tr>
        <tr><td>equal to one</td><td class="m">${f('5', '5')}</td><td>the two are equal</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A fraction is a division waiting to happen</div>
      ${m(f('7', '5'))} means ${m('7 ÷ 5')}, which is ${m('1')} remainder ${m('2')} — that is,
      ${m('1' + f('2', '5'))}. The two forms are the same number written for different purposes.</div>`
    },
    {
      h: 'Simplifying and converting',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Task</th><th>Method</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>simplify</td><td>divide both parts by their HCF</td><td class="m">${f('18', '24')} = ${f('3', '4')}</td></tr>
        <tr><td>mixed to improper</td><td>whole ${m('×')} denominator, plus numerator</td><td class="m">2${f('3', '4')} = ${f('11', '4')}</td></tr>
        <tr><td>improper to mixed</td><td>divide, keep the remainder</td><td class="m">${f('17', '5')} = 3${f('2', '5')}</td></tr>
        <tr><td>equivalent fractions</td><td>multiply both parts by the same number</td><td class="m">${f('2', '3')} = ${f('8', '12')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Simplify at the end, always</span>
      An answer of ${m(f('12', '18'))} is not wrong but is not finished; ${m(f('2', '3'))} is. Marks for
      “lowest terms” are lost far more often than marks for the arithmetic itself.</div>`
    },
    {
      h: 'Comparing',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Pair</th><th>Method</th><th>Result</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('3', '7')} and ${f('5', '7')}</td><td>same denominator</td><td class="m">${f('3', '7')} < ${f('5', '7')}</td></tr>
        <tr><td class="m">${f('3', '5')} and ${f('3', '8')}</td><td>same numerator — bigger denominator, smaller parts</td><td class="m">${f('3', '8')} < ${f('3', '5')}</td></tr>
        <tr><td class="m">${f('3', '5')} and ${f('5', '8')}</td><td>common denominator ${m('40')}</td><td class="m">${f('24', '40')} < ${f('25', '40')}</td></tr>
        <tr><td class="m">${f('4', '9')} and ${f('1', '2')}</td><td>compare with ${m(f('1', '2'))}</td><td class="m">${f('4', '9')} < ${f('1', '2')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Bigger denominator, smaller pieces</div>
      A cake cut into ${m('8')} gives smaller slices than the same cake cut into ${m('5')}. That single
      picture settles every comparison with equal numerators.</div>`
    },
    {
      h: 'The three operations you already have',
      html: `${eq(m(f('a', 'b') + ' + ' + f('c', 'b') + ' = ' + f('a + c', 'b')) + '     ' + m(f('a', 'b') + ' · ' + f('c', 'd') + ' = ' + f('ac', 'bd')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Task</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('2', '3')} + ${f('1', '4')}</td><td class="m">${f('8', '12')} + ${f('3', '12')}</td><td class="m">${f('11', '12')}</td></tr>
        <tr><td class="m">${f('5', '6')} − ${f('1', '3')}</td><td class="m">${f('5', '6')} − ${f('2', '6')}</td><td class="m">${f('1', '2')}</td></tr>
        <tr><td class="m">${f('2', '3')} · ${f('3', '5')}</td><td>cancel the ${m('3')}s</td><td class="m">${f('2', '5')}</td></tr>
        <tr><td class="m">${f('3', '4')} of ${m('20')}</td><td class="m">20 ÷ 4 · 3</td><td class="m">15</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">One operation is still missing</div>
      Adding, subtracting and multiplying are done. Division is the whole of the next four lessons — and
      it turns out to be the easiest of the four.</div>`
    }
  ],
  examples: [
    {
      q: 'Simplify ' + m(f('18', '24')) + ' and convert ' + m(f('17', '5')) + ' to a mixed number.',
      steps: [
        ['HCF of ' + m('18') + ' and ' + m('24') + ' is ' + m('6') + '.', m(f('3', '4'))],
        [m('17 ÷ 5 = 3') + ' remainder ' + m('2') + '.', m('3' + f('2', '5'))]
      ],
      ans: m(f('3', '4')) + ' and ' + m('3' + f('2', '5'))
    },
    {
      q: 'Which is larger, ' + m(f('3', '5')) + ' or ' + m(f('5', '8')) + '?',
      steps: [
        ['Common denominator ' + m('40') + '.', ''],
        [m(f('3', '5') + ' = ' + f('24', '40')), ''],
        [m(f('5', '8') + ' = ' + f('25', '40')), ''],
        [m(f('5', '8')) + ' is larger.', '']
      ],
      ans: m(f('5', '8'))
    },
    {
      q: 'Compute ' + m(f('2', '3') + ' · ' + f('3', '5')) + '.',
      steps: [
        ['Cancel the ' + m('3') + ' in the numerator against the ' + m('3') + ' in the denominator.', ''],
        [m(f('2', '5')), 'Cancel before multiplying — it is always quicker.']
      ],
      ans: m(f('2', '5'))
    }
  ],
  modelNote: 'Ask which is bigger, a fifth or an eighth, before anything else; the answer that comes back tells you exactly how much recall this class needs.',
  interactive: {
    type: 'fractionCancel',
    title: 'Simplifying to lowest terms',
    hint: 'Divide both parts by their highest common factor.',
    items: [
      {
        title: '18 / 24',
        start: m(f('18', '24')),
        steps: [
          [m('18 = 2 · 3²') + ', ' + m('24 = 2³ · 3'), 'Factorise both.'],
          ['The HCF is ' + m('6') + '.', 'The highest one — anything less leaves work.'],
          [m(f('3', '4')), 'Divide both parts by it.']
        ],
        answer: m(f('3', '4'))
      },
      {
        title: '45 / 60',
        start: m(f('45', '60')),
        steps: [
          ['Both end in ' + m('5') + ' or ' + m('0') + ', so both divide by ' + m('5') + '.', ''],
          [m(f('9', '12')), 'Not finished — both divide by ' + m('3') + '.'],
          [m(f('3', '4')), 'Now the parts share no factor.']
        ],
        answer: m(f('3', '4'))
      },
      {
        title: '2/3 · 3/5',
        start: m(f('2', '3') + ' · ' + f('3', '5')),
        steps: [
          ['The ' + m('3') + ' above cancels the ' + m('3') + ' below.', 'Cancel before multiplying.'],
          [m(f('2', '1') + ' · ' + f('1', '5')), ''],
          [m(f('2', '5')), '']
        ],
        answer: m(f('2', '5'))
      }
    ]
  },
  quiz: [
    { q: m(f('7', '5')) + ' is:', a: ['proper', 'improper', 'mixed', 'equal to one'], c: 1, why: 'Numerator larger.' },
    { q: m('2' + f('3', '4')) + ' as an improper fraction:', a: [m(f('9', '4')), m(f('11', '4')), m(f('5', '4')), m(f('23', '4'))], c: 1, why: m('2 · 4 + 3') + '.' },
    { q: m(f('18', '24')) + ' simplifies to:', a: [m(f('9', '12')), m(f('3', '4')), m(f('2', '3')), m(f('6', '8'))], c: 1, why: 'HCF ' + m('6') + '.' },
    { q: 'Which is larger, ' + m(f('3', '5')) + ' or ' + m(f('3', '8')) + '?', a: [m(f('3', '5')), m(f('3', '8')), 'equal', 'cannot say'], c: 0, why: 'Bigger denominator, smaller pieces.' },
    { q: m(f('2', '3') + ' + ' + f('1', '4')) + ' equals:', a: [m(f('3', '7')), m(f('11', '12')), m(f('2', '12')), m(f('3', '12'))], c: 1, why: 'LCD ' + m('12') + '.' },
    { q: m(f('3', '4')) + ' of ' + m('20') + ' is:', a: [m('5'), m('15'), m('16'), m('60')], c: 1, why: m('20 ÷ 4 · 3') + '.' }
  ],
  practice: {
    easy: [
      [m(f('18', '24')) + ' simplified', m(f('3', '4'))],
      [m(f('45', '60')) + ' simplified', m(f('3', '4'))],
      [m('2' + f('3', '4')) + ' as improper', m(f('11', '4'))],
      [m(f('17', '5')) + ' as mixed', m('3' + f('2', '5'))],
      [m(f('3', '7')) + ' or ' + m(f('5', '7')) + ': larger', m(f('5', '7'))],
      [m(f('3', '5')) + ' or ' + m(f('3', '8')) + ': larger', m(f('3', '5'))],
      [m(f('2', '3') + ' + ' + f('1', '4')), m(f('11', '12'))]
    ],
    med: [
      [m(f('5', '6') + ' − ' + f('1', '3')), m(f('1', '2'))],
      [m(f('2', '3') + ' · ' + f('3', '5')), m(f('2', '5'))],
      [m(f('3', '4')) + ' of ' + m('20'), m('15')],
      [m(f('3', '5')) + ' or ' + m(f('5', '8')) + ': larger', m(f('5', '8'))],
      [m(f('4', '9')) + ' or ' + m(f('1', '2')) + ': larger', m(f('1', '2'))],
      [m('1' + f('1', '2') + ' + ' + f('3', '4')), m('2' + f('1', '4'))],
      [m(f('2', '5') + ' · ' + f('10', '3')), m('1' + f('1', '3'))]
    ],
    hard: [
      ['Order ' + m(f('2', '3') + ', ' + f('3', '5') + ', ' + f('5', '8')), m(f('3', '5') + ' < ' + f('5', '8') + ' < ' + f('2', '3'))],
      [m('2' + f('1', '3') + ' − 1' + f('1', '2')), m(f('5', '6'))],
      [m(f('5', '8')) + ' of ' + m('64'), m('40')],
      ['A fraction equal to ' + m(f('3', '4')) + ' with denominator ' + m('28'), m(f('21', '28'))],
      [m(f('3', '4') + ' · ' + f('2', '9')), m(f('1', '6'))],
      ['Which is nearer to ' + m('1') + ', ' + m(f('7', '8')) + ' or ' + m(f('9', '10')) + '?', m(f('9', '10'))],
      ['Why is ' + m(f('12', '18'))+ ' an unfinished answer?', 'Both parts still divide by ' + m('6')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every answer in lowest terms, and mixed numbers where the fraction is improper.',
  homework: [
    'Simplify ' + m(f('24', '36')) + ', ' + m(f('30', '45')) + ' and ' + m(f('16', '40')) + '.',
    'Convert ' + m('3' + f('2', '5')) + ' to an improper fraction and ' + m(f('23', '6')) + ' to a mixed number.',
    'Order ' + m(f('1', '2') + ', ' + f('3', '7') + ', ' + f('5', '9')) + '.',
    'Compute ' + m(f('3', '4') + ' + ' + f('2', '5')) + ' and ' + m(f('7', '8') + ' − ' + f('1', '4')) + '.',
    'Compute ' + m(f('3', '5') + ' · ' + f('10', '9')) + ', cancelling first.'
  ]
});

/* ============================== 11 ============================== */
G6_MAT.push({
  id: 'g6-11', stream: 'mat', grade: 6, quarter: 1, lessons: '22–23', hours: 2,
  title: 'Dividing a proper fraction by a natural number',
  subtitle: 'Sharing a part into equal pieces — the denominator grows, the numerator does not.',
  uz: 'Matematika 6, §5', uzPage: 'pp. 58–64',
  cam: 'S7 7.4', camPage: 'Stage 7, pp. 71–75', wb: 'Exercise 7.4',
  objectives: [
    'Divide a fraction by a whole number and explain the result with a picture.',
    'Write the division as multiplication by the reciprocal.',
    'Cancel before multiplying.',
    'Solve simple sharing problems with fractions.'
  ],
  terms: [
    ['To divide', 'Bo‘lish', 'Делить'],
    ['Divisor', 'Bo‘luvchi', 'Делитель'],
    ['Reciprocal', 'Teskari son', 'Обратное число'],
    ['To share equally', 'Teng taqsimlash', 'Разделить поровну'],
    ['Part', 'Ulush', 'Доля'],
    ['Whole', 'Butun', 'Целое'],
    ['To cancel', 'Qisqartirish', 'Сокращать'],
    ['Lowest terms', 'Qisqarmas ko‘rinish', 'Несократимый вид']
  ],
  timing: [[20, 'Sharing a part'], [25, 'The rule'], [20, 'Cancelling first'], [12, 'Problems'], [3, 'Homework']],
  sections: [
    {
      h: 'Sharing a part',
      html: `<p>Half a cake shared between three people: each gets a sixth. The number of pieces the whole
      is cut into has trebled, and the number taken has not.</p>
      ${eq(m(f('1', '2') + ' ÷ 3 = ' + f('1', '6')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Division</th><th>In words</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('1', '2')} ÷ 3</td><td>half shared among three</td><td class="m">${f('1', '6')}</td></tr>
        <tr><td class="m">${f('2', '3')} ÷ 2</td><td>two thirds shared between two</td><td class="m">${f('1', '3')}</td></tr>
        <tr><td class="m">${f('3', '4')} ÷ 5</td><td>three quarters among five</td><td class="m">${f('3', '20')}</td></tr>
        <tr><td class="m">${f('4', '5')} ÷ 4</td><td>four fifths among four</td><td class="m">${f('1', '5')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Dividing makes the pieces smaller</div>
      The answer is always less than the fraction you started with. That is the check to make before
      writing anything down.</div>`
    },
    {
      h: 'The rule',
      html: `${eq(m(f('a', 'b') + ' ÷ n = ' + f('a', 'b · n') + ' = ' + f('a', 'b') + ' · ' + f('1', 'n')), true)}
      <p>Multiply the denominator by the whole number — or, in the form that will cover every case from
      now on, multiply by the reciprocal of the divisor.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Division</th><th>As multiplication</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('3', '4')} ÷ 5</td><td class="m">${f('3', '4')} · ${f('1', '5')}</td><td class="m">${f('3', '20')}</td></tr>
        <tr><td class="m">${f('5', '7')} ÷ 2</td><td class="m">${f('5', '7')} · ${f('1', '2')}</td><td class="m">${f('5', '14')}</td></tr>
        <tr><td class="m">${f('2', '9')} ÷ 3</td><td class="m">${f('2', '9')} · ${f('1', '3')}</td><td class="m">${f('2', '27')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The numerator is untouched</span>
      ${m(f('3', '4') + ' ÷ 5')} is ${m(f('3', '20'))}, not ${m(f('15', '4'))} and not the whole fraction
      turned upside down. Only the denominator grows.</div>`
    },
    {
      h: 'Cancelling first',
      html: `<p>When the whole number divides the numerator, cancel — the answer comes out in lowest terms
      with no extra step.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Division</th><th>Cancel</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('4', '5')} ÷ 4</td><td class="m">4 ÷ 4 = 1</td><td class="m">${f('1', '5')}</td></tr>
        <tr><td class="m">${f('6', '7')} ÷ 3</td><td class="m">6 ÷ 3 = 2</td><td class="m">${f('2', '7')}</td></tr>
        <tr><td class="m">${f('9', '10')} ÷ 3</td><td class="m">9 ÷ 3 = 3</td><td class="m">${f('3', '10')}</td></tr>
        <tr><td class="m">${f('2', '3')} ÷ 2</td><td class="m">2 ÷ 2 = 1</td><td class="m">${f('1', '3')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Cancelling first keeps the numbers small</div>
      ${m(f('9', '10') + ' ÷ 3')} done without cancelling gives ${m(f('9', '30'))}, which then has to be
      simplified anyway. One step is better than two.</div>`
    },
    {
      h: 'Problems',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>${m(f('3', '4'))} of a litre of juice shared between ${m('3')} glasses</td><td class="m">${f('3', '4')} ÷ 3</td><td class="m">${f('1', '4')} litre each</td></tr>
        <tr><td>${m(f('5', '6'))} of a field ploughed in ${m('5')} days, equally</td><td class="m">${f('5', '6')} ÷ 5</td><td class="m">${f('1', '6')} a day</td></tr>
        <tr><td>${m(f('7', '8'))} of a metre of ribbon cut into ${m('7')} pieces</td><td class="m">${f('7', '8')} ÷ 7</td><td class="m">${f('1', '8')} m each</td></tr>
        <tr><td>a bottle ${m(f('4', '5'))} full poured into ${m('2')} equal jugs</td><td class="m">${f('4', '5')} ÷ 2</td><td class="m">${f('2', '5')} each</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">“Shared between” means divide</div>
      Every one of these problems contains that phrase or one like it. Finding it in the sentence is the
      whole difficulty; the arithmetic afterwards is one line.</div>`
    }
  ],
  examples: [
    {
      q: 'Compute ' + m(f('3', '4') + ' ÷ 5') + '.',
      steps: [
        ['Multiply by the reciprocal of ' + m('5') + '.', ''],
        [m(f('3', '4') + ' · ' + f('1', '5')), ''],
        [m('= ' + f('3', '20')), 'Smaller than ' + m(f('3', '4')) + ' ✓']
      ],
      ans: m(f('3', '20'))
    },
    {
      q: 'Compute ' + m(f('6', '7') + ' ÷ 3') + '.',
      steps: [
        [m('3') + ' divides the numerator ' + m('6') + '.', ''],
        ['Cancel: ' + m('6 ÷ 3 = 2') + '.', ''],
        [m('= ' + f('2', '7')), '']
      ],
      ans: m(f('2', '7'))
    },
    {
      q: m(f('3', '4')) + ' of a litre of juice is shared equally between ' + m('3') + ' glasses. How much is in each?',
      steps: [
        ['“Shared between” means divide.', ''],
        [m(f('3', '4') + ' ÷ 3'), ''],
        ['Cancel the ' + m('3') + 's.', ''],
        [m('= ' + f('1', '4')) + ' litre.', '']
      ],
      ans: m(f('1', '4')) + ' litre'
    }
  ],
  modelNote: 'Fold a paper strip in half, then cut the half into three; the sixth appears in the hand before it appears on the board.',
  interactive: {
    type: 'fractionCancel',
    title: 'Dividing a fraction by a whole number',
    hint: 'Multiply by the reciprocal, cancelling first.',
    items: [
      {
        title: '3/4 ÷ 5',
        start: m(f('3', '4') + ' ÷ 5'),
        steps: [
          [m(f('3', '4') + ' · ' + f('1', '5')), 'Multiply by the reciprocal.'],
          ['Nothing cancels: ' + m('3') + ' and ' + m('5') + ' share no factor.', ''],
          [m(f('3', '20')), 'Smaller than ' + m(f('3', '4')) + ' — as it must be.']
        ],
        answer: m(f('3', '20'))
      },
      {
        title: '6/7 ÷ 3',
        start: m(f('6', '7') + ' ÷ 3'),
        steps: [
          [m(f('6', '7') + ' · ' + f('1', '3')), ''],
          ['Cancel: ' + m('6 ÷ 3 = 2') + '.', 'Before multiplying.'],
          [m(f('2', '7')), 'Already in lowest terms.']
        ],
        answer: m(f('2', '7'))
      },
      {
        title: '9/10 ÷ 3',
        start: m(f('9', '10') + ' ÷ 3'),
        steps: [
          ['Without cancelling: ' + m(f('9', '30')) + '.', 'It still has to be simplified.'],
          ['With cancelling: ' + m('9 ÷ 3 = 3') + '.', ''],
          [m(f('3', '10')), 'One step instead of two.']
        ],
        answer: m(f('3', '10'))
      }
    ]
  },
  quiz: [
    { q: m(f('1', '2') + ' ÷ 3') + ' equals:', a: [m(f('1', '6')), m(f('3', '2')), m(f('1', '5')), m(f('2', '3'))], c: 0, why: 'Three times as many pieces.' },
    { q: 'Dividing a fraction by a whole number makes it:', a: ['larger', 'smaller', 'the same', 'negative'], c: 1, why: 'The pieces shrink.' },
    { q: m(f('3', '4') + ' ÷ 5') + ' equals:', a: [m(f('15', '4')), m(f('3', '20')), m(f('3', '9')), m(f('4', '15'))], c: 1, why: 'The denominator grows.' },
    { q: m(f('6', '7') + ' ÷ 3') + ' equals:', a: [m(f('2', '7')), m(f('6', '21')), m(f('18', '7')), m(f('2', '21'))], c: 0, why: 'Cancel first.' },
    { q: 'Dividing by ' + m('n') + ' is the same as multiplying by:', a: [m('n'), m(f('1', 'n')), m('−n'), m('n²')], c: 1, why: 'The reciprocal.' },
    { q: m(f('4', '5') + ' ÷ 4') + ' equals:', a: [m(f('1', '5')), m(f('4', '20')), m(f('16', '5')), m(f('1', '20'))], c: 0, why: 'Cancel the ' + m('4') + 's.' }
  ],
  practice: {
    easy: [
      [m(f('1', '2') + ' ÷ 3'), m(f('1', '6'))],
      [m(f('2', '3') + ' ÷ 2'), m(f('1', '3'))],
      [m(f('3', '4') + ' ÷ 5'), m(f('3', '20'))],
      [m(f('4', '5') + ' ÷ 4'), m(f('1', '5'))],
      [m(f('6', '7') + ' ÷ 3'), m(f('2', '7'))],
      [m(f('5', '7') + ' ÷ 2'), m(f('5', '14'))],
      [m(f('9', '10') + ' ÷ 3'), m(f('3', '10'))]
    ],
    med: [
      [m(f('2', '9') + ' ÷ 3'), m(f('2', '27'))],
      [m(f('8', '9') + ' ÷ 4'), m(f('2', '9'))],
      [m(f('3', '4')) + ' of a litre into ' + m('3') + ' glasses', m(f('1', '4')) + ' litre'],
      [m(f('5', '6')) + ' of a field in ' + m('5') + ' days', m(f('1', '6')) + ' a day'],
      [m(f('7', '8')) + ' m of ribbon into ' + m('7') + ' pieces', m(f('1', '8')) + ' m'],
      [m(f('4', '5')) + ' of a bottle into ' + m('2') + ' jugs', m(f('2', '5'))],
      [m(f('10', '11') + ' ÷ 5'), m(f('2', '11'))]
    ],
    hard: [
      [m(f('5', '8') + ' ÷ 10'), m(f('1', '16'))],
      [m(f('12', '13') + ' ÷ 6'), m(f('2', '13'))],
      [m('1' + f('1', '2') + ' ÷ 3'), m(f('1', '2'))],
      [m('2' + f('2', '3') + ' ÷ 4'), m(f('2', '3'))],
      ['A rope ' + m(f('9', '10')) + ' m long is cut into ' + m('6') + ' equal pieces', m(f('3', '20')) + ' m'],
      ['Why is the answer always smaller than the fraction?', 'The same part is cut into more pieces'],
      ['Divide ' + m(f('3', '7')) + ' by ' + m('3') + ' and then by ' + m('2'), m(f('1', '14'))]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Cancel before multiplying, and check that the answer is smaller than you started with.',
  homework: [
    'Compute ' + m(f('2', '5') + ' ÷ 3') + ' and ' + m(f('3', '8') + ' ÷ 2') + '.',
    'Compute ' + m(f('8', '9') + ' ÷ 2') + ' and ' + m(f('10', '13') + ' ÷ 5') + ', cancelling first.',
    'Compute ' + m('1' + f('1', '3') + ' ÷ 4') + '.',
    m(f('5', '6')) + ' of a litre of milk is shared between ' + m('5') + ' cups. How much is in each?',
    'Explain in one sentence why dividing a fraction by ' + m('4') + ' makes it smaller.'
  ]
});

/* ============================== 12 ============================== */
G6_MAT.push({
  id: 'g6-12', stream: 'mat', grade: 6, quarter: 1, lessons: '24–26', hours: 3,
  title: 'Dividing a natural number by a proper fraction',
  subtitle: 'How many halves are in three? — the division that makes the answer bigger.',
  uz: 'Matematika 6, §6', uzPage: 'pp. 65–72',
  cam: 'S7 7.4', camPage: 'Stage 7, pp. 71–75', wb: 'Exercise 7.4',
  objectives: [
    'Interpret dividing by a fraction as “how many of these fit”.',
    'Divide a whole number by a fraction using the reciprocal.',
    'Explain why the answer is larger than the number divided.',
    'Solve measuring and packing problems.'
  ],
  terms: [
    ['Reciprocal', 'Teskari son', 'Обратное число'],
    ['How many fit', 'Nechta joylashadi', 'Сколько помещается'],
    ['To turn upside down', 'Ag‘darib qo‘yish', 'Перевернуть'],
    ['Divisor', 'Bo‘luvchi', 'Делитель'],
    ['Quotient', 'Bo‘linma', 'Частное'],
    ['Measuring problem', 'O‘lchash masalasi', 'Задача на измерение'],
    ['Whole number', 'Butun son', 'Целое число'],
    ['Estimate', 'Baholash', 'Оценка']
  ],
  timing: [[25, 'How many fit?'], [25, 'The reciprocal'], [30, 'Why the answer grows'], [30, 'Problems'], [10, 'Homework']],
  sections: [
    {
      h: 'How many fit?',
      html: `<p>${m('3 ÷ ' + f('1', '2'))} asks: how many halves are there in ${m('3')}? Six — and a picture
      settles it before any rule is stated.</p>
      ${eq(m('3 ÷ ' + f('1', '2') + ' = 6'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Division</th><th>The question it asks</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">3 ÷ ${f('1', '2')}</td><td>how many halves in ${m('3')}</td><td class="m">6</td></tr>
        <tr><td class="m">4 ÷ ${f('1', '4')}</td><td>how many quarters in ${m('4')}</td><td class="m">16</td></tr>
        <tr><td class="m">6 ÷ ${f('2', '3')}</td><td>how many two-thirds in ${m('6')}</td><td class="m">9</td></tr>
        <tr><td class="m">5 ÷ ${f('1', '3')}</td><td>how many thirds in ${m('5')}</td><td class="m">15</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Division has two meanings, and this is the second</div>
      ${m('12 ÷ 3')} can mean “share ${m('12')} among ${m('3')}” or “how many ${m('3')}s are in
      ${m('12')}”. With a fraction as the divisor, only the second question makes sense.</div>`
    },
    {
      h: 'The reciprocal',
      html: `${eq(m('n ÷ ' + f('a', 'b') + ' = n · ' + f('b', 'a')), true)}
      <p>Turn the divisor upside down and multiply. The <b>reciprocal</b> of ${m(f('a', 'b'))} is
      ${m(f('b', 'a'))}, and the two multiply to ${m('1')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Fraction</th><th>Reciprocal</th><th>Product</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('1', '2')}</td><td class="m">2</td><td class="m">1</td></tr>
        <tr><td class="m">${f('2', '3')}</td><td class="m">${f('3', '2')}</td><td class="m">1</td></tr>
        <tr><td class="m">5</td><td class="m">${f('1', '5')}</td><td class="m">1</td></tr>
        <tr><td class="m">${f('7', '4')}</td><td class="m">${f('4', '7')}</td><td class="m">1</td></tr>
      </tbody></table></div>
      <div class="tablewrap"><table>
      <thead><tr><th>Division</th><th>As multiplication</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">6 ÷ ${f('2', '3')}</td><td class="m">6 · ${f('3', '2')}</td><td class="m">9</td></tr>
        <tr><td class="m">4 ÷ ${f('4', '5')}</td><td class="m">4 · ${f('5', '4')}</td><td class="m">5</td></tr>
        <tr><td class="m">10 ÷ ${f('5', '6')}</td><td class="m">10 · ${f('6', '5')}</td><td class="m">12</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Turn over the divisor, never the dividend</span>
      ${m('6 ÷ ' + f('2', '3'))} is ${m('6 · ' + f('3', '2') + ' = 9')}. Turning over the ${m('6')} instead
      gives ${m(f('1', '9'))} — the reciprocal of the right answer, and a mistake the estimate below
      catches instantly.</div>`
    },
    {
      h: 'Why the answer grows',
      html: `<p>Dividing by a number smaller than ${m('1')} always gives a larger answer, because the
      pieces being counted are smaller than the whole.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Divisor</th><th>Compared with ${m('1')}</th><th>The answer is</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('1', '2')}</td><td>smaller</td><td>larger than ${m('6')}</td><td class="m">6 ÷ ${f('1', '2')} = 12</td></tr>
        <tr><td class="m">1</td><td>equal</td><td>unchanged</td><td class="m">6 ÷ 1 = 6</td></tr>
        <tr><td class="m">${f('3', '2')}</td><td>larger</td><td>smaller than ${m('6')}</td><td class="m">6 ÷ ${f('3', '2')} = 4</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Estimate before you calculate</div>
      Ask first: will the answer be bigger or smaller than the number I started with? One second of
      thought rules out half the possible mistakes.</div>`
    },
    {
      h: 'Problems',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>${m('6')} m of cloth cut into pieces of ${m(f('2', '3'))} m</td><td class="m">6 ÷ ${f('2', '3')}</td><td class="m">9</td></tr>
        <tr><td>${m('4')} litres poured into ${m(f('1', '4'))}-litre cups</td><td class="m">4 ÷ ${f('1', '4')}</td><td class="m">16</td></tr>
        <tr><td>${m('10')} kg of rice in ${m(f('5', '6'))}-kg bags</td><td class="m">10 ÷ ${f('5', '6')}</td><td class="m">12</td></tr>
        <tr><td>a wall ${m('9')} m long, tiles ${m(f('3', '4'))} m wide</td><td class="m">9 ÷ ${f('3', '4')}</td><td class="m">12</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">“How many … fit” is the phrase to look for</div>
      Cutting, pouring, packing and tiling are all the same question. Once the phrase is spotted, the
      division writes itself.</div>`
    }
  ],
  examples: [
    {
      q: 'Compute ' + m('6 ÷ ' + f('2', '3')) + '.',
      steps: [
        ['The divisor is less than ' + m('1') + ', so expect an answer over ' + m('6') + '.', ''],
        [m('6 · ' + f('3', '2')), 'Turn over the divisor.'],
        [m('= ' + f('18', '2') + ' = 9'), '']
      ],
      ans: m('9')
    },
    {
      q: 'How many ' + m(f('3', '4')) + ' m tiles fit along a wall ' + m('9') + ' m long?',
      steps: [
        ['The question is “how many fit”, so divide.', ''],
        [m('9 ÷ ' + f('3', '4') + ' = 9 · ' + f('4', '3')), ''],
        [m('= 12'), '']
      ],
      ans: m('12') + ' tiles'
    },
    {
      q: 'Compute ' + m('10 ÷ ' + f('5', '6')) + '.',
      steps: [
        [m('10 · ' + f('6', '5')), ''],
        ['Cancel: ' + m('10 ÷ 5 = 2') + '.', ''],
        [m('2 · 6 = 12'), '']
      ],
      ans: m('12')
    }
  ],
  modelNote: 'Lay a metre rule on the desk and count how many 25-cm cards fit along it; the class answers “four” without hesitation and has just divided by a quarter.',
  interactive: {
    type: 'fractionCancel',
    title: 'Dividing by a fraction',
    hint: 'Turn over the divisor, then cancel.',
    items: [
      {
        title: '6 ÷ 2/3',
        start: m('6 ÷ ' + f('2', '3')),
        steps: [
          ['The divisor is under ' + m('1') + ', so the answer beats ' + m('6') + '.', 'Estimate first.'],
          [m('6 · ' + f('3', '2')), 'Turn over the divisor.'],
          [m('9'), 'How many two-thirds fit in six.']
        ],
        answer: m('9')
      },
      {
        title: '10 ÷ 5/6',
        start: m('10 ÷ ' + f('5', '6')),
        steps: [
          [m('10 · ' + f('6', '5')), ''],
          ['Cancel ' + m('10') + ' against ' + m('5') + '.', 'Before multiplying.'],
          [m('2 · 6 = 12'), '']
        ],
        answer: m('12')
      },
      {
        title: '4 ÷ 4/5',
        start: m('4 ÷ ' + f('4', '5')),
        steps: [
          [m('4 · ' + f('5', '4')), ''],
          ['Cancel the ' + m('4') + 's.', ''],
          [m('5'), 'Only a little more than ' + m('4') + ', because the divisor is nearly ' + m('1') + '.']
        ],
        answer: m('5')
      }
    ]
  },
  quiz: [
    { q: m('3 ÷ ' + f('1', '2')) + ' equals:', a: [m(f('3', '2')), m('6'), m(f('1', '6')), m('1.5')], c: 1, why: 'Six halves in three.' },
    { q: 'The reciprocal of ' + m(f('2', '3')) + ' is:', a: [m(f('3', '2')), m('−' + f('2', '3')), m(f('2', '3')), m('3')], c: 0, why: 'They multiply to ' + m('1') + '.' },
    { q: 'Dividing by a number under ' + m('1') + ' gives an answer:', a: ['smaller', 'larger', 'the same', 'negative'], c: 1, why: 'The pieces are small.' },
    { q: m('6 ÷ ' + f('2', '3')) + ' equals:', a: [m('4'), m('9'), m(f('4', '9')), m('12')], c: 1, why: m('6 · ' + f('3', '2')) + '.' },
    { q: m('4 ÷ ' + f('4', '5')) + ' equals:', a: [m('5'), m(f('16', '5')), m(f('5', '4')), m('3.2')], c: 0, why: 'Cancel the ' + m('4') + 's.' },
    { q: 'Which fraction is turned over?', a: ['the first', 'the divisor', 'both', 'neither'], c: 1, why: 'Only the divisor.' }
  ],
  practice: {
    easy: [
      [m('3 ÷ ' + f('1', '2')), m('6')],
      [m('4 ÷ ' + f('1', '4')), m('16')],
      [m('5 ÷ ' + f('1', '3')), m('15')],
      [m('6 ÷ ' + f('2', '3')), m('9')],
      [m('4 ÷ ' + f('4', '5')), m('5')],
      ['The reciprocal of ' + m(f('3', '7')), m(f('7', '3'))],
      ['The reciprocal of ' + m('5'), m(f('1', '5'))]
    ],
    med: [
      [m('10 ÷ ' + f('5', '6')), m('12')],
      [m('9 ÷ ' + f('3', '4')), m('12')],
      [m('8 ÷ ' + f('2', '5')), m('20')],
      [m('6') + ' m of cloth in ' + m(f('2', '3')) + ' m pieces', m('9')],
      [m('4') + ' litres in ' + m(f('1', '4')) + '-litre cups', m('16')],
      [m('10') + ' kg in ' + m(f('5', '6')) + '-kg bags', m('12')],
      [m('6 ÷ ' + f('3', '2')), m('4')]
    ],
    hard: [
      [m('7 ÷ ' + f('7', '9')), m('9')],
      [m('12 ÷ ' + f('8', '9')), m('13' + f('1', '2'))],
      [m('1 ÷ ' + f('4', '7')), m(f('7', '4'))],
      ['Which is larger, ' + m('8 ÷ ' + f('1', '2')) + ' or ' + m('8 · ' + f('1', '2')) + '?', m('8 ÷ ' + f('1', '2') + ' = 16')],
      ['A wall ' + m('15') + ' m long, tiles ' + m(f('5', '8')) + ' m wide', m('24') + ' tiles'],
      ['Why does dividing by ' + m(f('1', '2')) + ' double a number?', 'Two halves make each whole'],
      [m('20 ÷ ' + f('4', '5') + ' ÷ 5'), m('5')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Estimate first: will the answer be larger or smaller than the number you started with?',
  homework: [
    'Compute ' + m('8 ÷ ' + f('1', '2')) + ' and ' + m('9 ÷ ' + f('1', '3')) + '.',
    'Compute ' + m('12 ÷ ' + f('3', '4')) + ' and ' + m('15 ÷ ' + f('5', '6')) + '.',
    'How many ' + m(f('2', '5')) + '-litre bottles can be filled from ' + m('6') + ' litres?',
    'A ribbon ' + m('8') + ' m long is cut into ' + m(f('4', '5')) + ' m pieces. How many pieces?',
    'Explain why ' + m('6 ÷ ' + f('2', '3')) + ' is larger than ' + m('6') + '.'
  ]
});

/* ============================== 13 ============================== */
G6_MAT.push({
  id: 'g6-13', stream: 'mat', grade: 6, quarter: 1, lessons: '27–29', hours: 3,
  title: 'Dividing a proper fraction by a proper fraction',
  subtitle: 'One rule now covers every case: multiply by the reciprocal of the divisor.',
  uz: 'Matematika 6, §7', uzPage: 'pp. 73–80',
  cam: 'S7 7.4', camPage: 'Stage 7, pp. 71–75', wb: 'Exercise 7.4',
  objectives: [
    'Divide any fraction by any fraction.',
    'Divide mixed numbers by converting them first.',
    'Cancel before multiplying, and simplify the answer.',
    'Decide from the divisor whether the answer grows or shrinks.'
  ],
  terms: [
    ['Division of fractions', 'Kasrlarni bo‘lish', 'Деление дробей'],
    ['Reciprocal', 'Teskari son', 'Обратное число'],
    ['Mixed number', 'Aralash son', 'Смешанное число'],
    ['Improper fraction', 'Noto‘g‘ri kasr', 'Неправильная дробь'],
    ['To cancel', 'Qisqartirish', 'Сокращать'],
    ['Complex fraction', 'Qavatli kasr', 'Многоэтажная дробь'],
    ['Estimate', 'Baholash', 'Оценка'],
    ['Lowest terms', 'Qisqarmas ko‘rinish', 'Несократимый вид']
  ],
  timing: [[20, 'The single rule'], [30, 'Cancelling'], [30, 'Mixed numbers'], [30, 'Bigger or smaller?'], [10, 'Homework']],
  sections: [
    {
      h: 'The single rule',
      html: `${eq(m(f('a', 'b') + ' ÷ ' + f('c', 'd') + ' = ' + f('a', 'b') + ' · ' + f('d', 'c') + ' = ' + f('ad', 'bc')), true)}
      <p>The three cases of the last two lessons were the same rule in disguise: a whole number ${m('n')}
      is ${m(f('n', '1'))}, whose reciprocal is ${m(f('1', 'n'))}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Division</th><th>As multiplication</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('1', '2')} ÷ ${f('1', '4')}</td><td class="m">${f('1', '2')} · ${f('4', '1')}</td><td class="m">2</td></tr>
        <tr><td class="m">${f('3', '4')} ÷ ${f('1', '2')}</td><td class="m">${f('3', '4')} · ${f('2', '1')}</td><td class="m">${f('3', '2')} = 1${f('1', '2')}</td></tr>
        <tr><td class="m">${f('2', '3')} ÷ ${f('4', '5')}</td><td class="m">${f('2', '3')} · ${f('5', '4')}</td><td class="m">${f('5', '6')}</td></tr>
        <tr><td class="m">${f('5', '8')} ÷ ${f('5', '8')}</td><td class="m">${f('5', '8')} · ${f('8', '5')}</td><td class="m">1</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Any number divided by itself is ${m('1')}</div>
      The last line is a check worth remembering: if the two fractions are equal, the answer must be
      ${m('1')}, whatever the digits look like.</div>`
    },
    {
      h: 'Cancelling',
      html: `<p>After turning the divisor over, cancel any numerator against any denominator before
      multiplying.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Division</th><th>After turning over</th><th>Cancel</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('3', '4')} ÷ ${f('9', '8')}</td><td class="m">${f('3', '4')} · ${f('8', '9')}</td><td class="m">3</td><td class="m">${f('2', '3')}</td></tr>
        <tr><td class="m">${f('5', '6')} ÷ ${f('10', '3')}</td><td class="m">${f('5', '6')} · ${f('3', '10')}</td><td class="m">5</td><td class="m">${f('1', '4')}</td></tr>
        <tr><td class="m">${f('7', '9')} ÷ ${f('14', '3')}</td><td class="m">${f('7', '9')} · ${f('3', '14')}</td><td class="m">7</td><td class="m">${f('1', '6')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Cancel only after the divisor has been turned over</span>
      In ${m(f('3', '4') + ' ÷ ' + f('9', '8'))} the ${m('4')} and the ${m('8')} cannot be cancelled while
      the ${m('÷')} sign is still there. Turn over first, then cancel — in that order, every time.</div>`
    },
    {
      h: 'Mixed numbers',
      html: `<p>Convert every mixed number to an improper fraction <b>before</b> dividing. Nothing else in
      the method changes.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Division</th><th>Converted</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">1${f('1', '2')} ÷ ${f('3', '4')}</td><td class="m">${f('3', '2')} · ${f('4', '3')}</td><td class="m">2</td></tr>
        <tr><td class="m">2${f('1', '4')} ÷ 1${f('1', '2')}</td><td class="m">${f('9', '4')} · ${f('2', '3')}</td><td class="m">1${f('1', '2')}</td></tr>
        <tr><td class="m">3${f('1', '3')} ÷ ${f('5', '6')}</td><td class="m">${f('10', '3')} · ${f('6', '5')}</td><td class="m">4</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A mixed number cannot be turned over as it stands</span>
      The reciprocal of ${m('1' + f('1', '2'))} is ${m(f('2', '3'))}, not ${m('1' + f('2', '1'))}. Convert
      to ${m(f('3', '2'))} first and the reciprocal is obvious.</div>`
    },
    {
      h: 'Bigger or smaller?',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Divisor</th><th>The answer, compared with the first fraction</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>less than ${m('1')}</td><td>larger</td><td class="m">${f('3', '4')} ÷ ${f('1', '2')} = 1${f('1', '2')}</td></tr>
        <tr><td>equal to ${m('1')}</td><td>unchanged</td><td class="m">${f('3', '4')} ÷ 1 = ${f('3', '4')}</td></tr>
        <tr><td>greater than ${m('1')}</td><td>smaller</td><td class="m">${f('3', '4')} ÷ ${f('3', '2')} = ${f('1', '2')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">One glance at the divisor predicts the answer</div>
      Comparing the divisor with ${m('1')} takes no calculation at all, and it catches the commonest error
      of the whole block — turning over the wrong fraction.</div>`
    }
  ],
  examples: [
    {
      q: 'Compute ' + m(f('2', '3') + ' ÷ ' + f('4', '5')) + '.',
      steps: [
        ['The divisor is under ' + m('1') + ', so expect an answer over ' + m(f('2', '3')) + '.', ''],
        [m(f('2', '3') + ' · ' + f('5', '4')), 'Turn over the divisor.'],
        ['Cancel ' + m('2') + ' against ' + m('4') + '.', ''],
        [m('= ' + f('5', '6')), '']
      ],
      ans: m(f('5', '6'))
    },
    {
      q: 'Compute ' + m('2' + f('1', '4') + ' ÷ 1' + f('1', '2')) + '.',
      steps: [
        ['Convert: ' + m(f('9', '4')) + ' and ' + m(f('3', '2')) + '.', ''],
        [m(f('9', '4') + ' · ' + f('2', '3')), ''],
        ['Cancel ' + m('9') + ' with ' + m('3') + ', and ' + m('2') + ' with ' + m('4') + '.', ''],
        [m('= ' + f('3', '2') + ' = 1' + f('1', '2')), '']
      ],
      ans: m('1' + f('1', '2'))
    },
    {
      q: 'Compute ' + m(f('5', '6') + ' ÷ ' + f('10', '3')) + '.',
      steps: [
        [m(f('5', '6') + ' · ' + f('3', '10')), ''],
        ['Cancel ' + m('5') + ' with ' + m('10') + ', and ' + m('3') + ' with ' + m('6') + '.', ''],
        [m('= ' + f('1', '4')), 'Smaller, because the divisor is over ' + m('1') + '.']
      ],
      ans: m(f('1', '4'))
    }
  ],
  modelNote: 'Put the four divisions of the block side by side — fraction by whole, whole by fraction, fraction by fraction — and ask what is common; the class states the single rule itself.',
  interactive: {
    type: 'fractionCancel',
    title: 'One rule for every division',
    hint: 'Turn over the divisor, cancel, multiply.',
    items: [
      {
        title: '2/3 ÷ 4/5',
        start: m(f('2', '3') + ' ÷ ' + f('4', '5')),
        steps: [
          ['Divisor under ' + m('1') + ' — the answer will be larger.', 'Estimate first.'],
          [m(f('2', '3') + ' · ' + f('5', '4')), 'Turn over the divisor.'],
          [m(f('5', '6')), 'Cancel ' + m('2') + ' against ' + m('4') + '.']
        ],
        answer: m(f('5', '6'))
      },
      {
        title: '5/6 ÷ 10/3',
        start: m(f('5', '6') + ' ÷ ' + f('10', '3')),
        steps: [
          [m(f('5', '6') + ' · ' + f('3', '10')), ''],
          ['Cancel ' + m('5') + ' with ' + m('10') + ' and ' + m('3') + ' with ' + m('6') + '.', ''],
          [m(f('1', '4')), 'Smaller — the divisor was over ' + m('1') + '.']
        ],
        answer: m(f('1', '4'))
      },
      {
        title: '2¼ ÷ 1½',
        start: m('2' + f('1', '4') + ' ÷ 1' + f('1', '2')),
        steps: [
          [m(f('9', '4') + ' ÷ ' + f('3', '2')), 'Convert both mixed numbers first.'],
          [m(f('9', '4') + ' · ' + f('2', '3')), ''],
          [m('1' + f('1', '2')), 'Cancel, multiply, convert back.']
        ],
        answer: m('1' + f('1', '2'))
      }
    ]
  },
  quiz: [
    { q: m(f('1', '2') + ' ÷ ' + f('1', '4')) + ' equals:', a: [m(f('1', '8')), m('2'), m(f('1', '2')), m('8')], c: 1, why: 'Two quarters in a half.' },
    { q: 'To divide by a fraction you:', a: ['turn over the first', 'turn over the divisor', 'turn over both', 'turn over neither'], c: 1, why: 'Only the divisor.' },
    { q: m(f('2', '3') + ' ÷ ' + f('4', '5')) + ' equals:', a: [m(f('8', '15')), m(f('5', '6')), m(f('6', '5')), m(f('10', '12'))], c: 1, why: m(f('2', '3') + ' · ' + f('5', '4')) + '.' },
    { q: 'A mixed number must first be:', a: ['turned over', 'converted to an improper fraction', 'rounded', 'doubled'], c: 1, why: 'Then the rule applies.' },
    { q: m('1' + f('1', '2') + ' ÷ ' + f('3', '4')) + ' equals:', a: [m('2'), m(f('9', '8')), m(f('1', '2')), m('1')], c: 0, why: m(f('3', '2') + ' · ' + f('4', '3')) + '.' },
    { q: 'A divisor greater than ' + m('1') + ' makes the answer:', a: ['larger', 'smaller', 'the same', 'zero'], c: 1, why: 'Fewer big pieces fit.' }
  ],
  practice: {
    easy: [
      [m(f('1', '2') + ' ÷ ' + f('1', '4')), m('2')],
      [m(f('3', '4') + ' ÷ ' + f('1', '2')), m('1' + f('1', '2'))],
      [m(f('5', '8') + ' ÷ ' + f('5', '8')), m('1')],
      [m(f('2', '3') + ' ÷ ' + f('4', '5')), m(f('5', '6'))],
      [m(f('1', '3') + ' ÷ ' + f('2', '3')), m(f('1', '2'))],
      ['The reciprocal of ' + m(f('4', '9')), m(f('9', '4'))],
      ['The reciprocal of ' + m('1' + f('1', '2')), m(f('2', '3'))]
    ],
    med: [
      [m(f('3', '4') + ' ÷ ' + f('9', '8')), m(f('2', '3'))],
      [m(f('5', '6') + ' ÷ ' + f('10', '3')), m(f('1', '4'))],
      [m(f('7', '9') + ' ÷ ' + f('14', '3')), m(f('1', '6'))],
      [m('1' + f('1', '2') + ' ÷ ' + f('3', '4')), m('2')],
      [m('2' + f('1', '4') + ' ÷ 1' + f('1', '2')), m('1' + f('1', '2'))],
      [m('3' + f('1', '3') + ' ÷ ' + f('5', '6')), m('4')],
      [m(f('3', '4') + ' ÷ ' + f('3', '2')), m(f('1', '2'))]
    ],
    hard: [
      [m(f('4', '5') + ' ÷ ' + f('2', '15')), m('6')],
      [m('2' + f('2', '3') + ' ÷ 1' + f('1', '3')), m('2')],
      [m(f('9', '10') + ' ÷ ' + f('3', '5') + ' ÷ ' + f('3', '2')), m('1')],
      ['Without calculating: is ' + m(f('5', '7') + ' ÷ ' + f('8', '9')) + ' larger or smaller than ' + m(f('5', '7')) + '?', 'Smaller'],
      ['Without calculating: is ' + m(f('5', '7') + ' ÷ ' + f('2', '3')) + ' larger or smaller?', 'Larger'],
      ['A jug holds ' + m(f('3', '4')) + ' litre; how many ' + m(f('1', '8')) + '-litre cups fill it?', m('6')],
      ['Why is ' + m(f('5', '8') + ' ÷ ' + f('5', '8') + ' = 1') + '?', 'Any number divided by itself is one']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Turn over the divisor first, then cancel — never the other way round.',
  homework: [
    'Compute ' + m(f('3', '5') + ' ÷ ' + f('1', '2')) + ' and ' + m(f('4', '7') + ' ÷ ' + f('8', '9')) + '.',
    'Compute ' + m(f('5', '6') + ' ÷ ' + f('5', '12')) + '.',
    'Compute ' + m('1' + f('3', '4') + ' ÷ ' + f('7', '8')) + '.',
    'Compute ' + m('2' + f('1', '2') + ' ÷ 1' + f('1', '4')) + '.',
    'Say, without calculating, whether ' + m(f('2', '3') + ' ÷ ' + f('5', '4')) + ' is larger or smaller than ' + m(f('2', '3')) + ', and why.'
  ]
});
