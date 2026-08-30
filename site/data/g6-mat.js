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

/* ============================== 14 ============================== */
G6_MAT.push({
  id: 'g6-14', stream: 'mat', grade: 6, quarter: 1, lessons: '30–32', hours: 3,
  title: 'Word problems on the division of fractions',
  subtitle: 'Deciding whether to multiply or divide — and finding the whole when a part is given.',
  uz: 'Matematika 6, §8', uzPage: 'pp. 81–90',
  cam: 'S7 7.5', camPage: 'Stage 7, pp. 76–80', wb: 'Exercise 7.5',
  objectives: [
    'Decide from the wording whether a problem needs multiplication or division.',
    'Find the whole when a fractional part of it is known.',
    'Solve problems where a fraction of a fraction is taken.',
    'Check an answer against the sense of the problem.'
  ],
  terms: [
    ['Word problem', 'Matnli masala', 'Текстовая задача'],
    ['Part of a whole', 'Butunning qismi', 'Часть целого'],
    ['To find the whole', 'Butunni topish', 'Найти целое'],
    ['Fraction of a fraction', 'Kasrning kasri', 'Дробь от дроби'],
    ['Remainder', 'Qoldiq', 'Остаток'],
    ['Per unit', 'Bir birlikka', 'На единицу'],
    ['To interpret', 'Talqin qilmoq', 'Истолковать'],
    ['Sense check', 'Mantiqiy tekshirish', 'Проверка по смыслу']
  ],
  timing: [[25, 'Multiply or divide?'], [30, 'Finding the whole'], [30, 'A fraction of a fraction'], [25, 'Harder problems'], [10, 'Homework']],
  sections: [
    {
      h: 'Multiply or divide?',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>The problem asks</th><th>Operation</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>a fraction <b>of</b> a known amount</td><td>multiply</td><td class="m">${f('3', '4')} of 20 = 15</td></tr>
        <tr><td>how many small amounts <b>fit</b> in a large one</td><td>divide</td><td class="m">6 ÷ ${f('2', '3')} = 9</td></tr>
        <tr><td>share an amount into equal parts</td><td>divide</td><td class="m">${f('3', '4')} ÷ 3 = ${f('1', '4')}</td></tr>
        <tr><td>the whole, when a part is known</td><td>divide</td><td class="m">12 ÷ ${f('3', '4')} = 16</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The word “of” means multiply</div>
      And “how many fit”, “shared between” and “if this is a third of it” all mean divide. Reading for
      those phrases is more reliable than reading for the numbers.</div>`
    },
    {
      h: 'Finding the whole',
      html: `<p>If ${m(f('3', '4'))} of a length is ${m('12')} m, the whole is ${m('12 ÷ ' + f('3', '4') + ' = 16')} m. Dividing
      by the fraction undoes taking the fraction.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Working</th><th>The whole</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('3', '4')} of it is ${m('12')}</td><td class="m">12 ÷ ${f('3', '4')}</td><td class="m">16</td></tr>
        <tr><td class="m">${f('2', '5')} of it is ${m('18')}</td><td class="m">18 ÷ ${f('2', '5')}</td><td class="m">45</td></tr>
        <tr><td class="m">${f('5', '6')} of it is ${m('25')}</td><td class="m">25 ÷ ${f('5', '6')}</td><td class="m">30</td></tr>
        <tr><td class="m">${f('1', '3')} of it is ${m('7')}</td><td class="m">7 ÷ ${f('1', '3')}</td><td class="m">21</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The whole is always bigger than the part</span>
      An answer smaller than the given part means the operations were the wrong way round. This single
      check catches nearly every error in this section.</div>`
    },
    {
      h: 'A fraction of a fraction',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>${m(f('2', '3'))} of ${m(f('3', '5'))} of a field</td><td class="m">${f('2', '3')} · ${f('3', '5')}</td><td class="m">${f('2', '5')}</td></tr>
        <tr><td>half of ${m(f('4', '7'))}</td><td class="m">${f('1', '2')} · ${f('4', '7')}</td><td class="m">${f('2', '7')}</td></tr>
        <tr><td>${m(f('3', '4'))} of a class of ${m('28')} are girls; ${m(f('1', '3'))} of the girls wear glasses</td><td class="m">21 · ${f('1', '3')}</td><td class="m">7</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">“Of” chains multiply</div>
      A fraction of a fraction of a whole is one product with three factors. There is no need to work out
      each stage separately unless the question asks for it.</div>`
    },
    {
      h: 'Harder problems',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>a tank is ${m(f('3', '5'))} full with ${m('24')} litres; its capacity</td><td class="m">24 ÷ ${f('3', '5')}</td><td class="m">40</td></tr>
        <tr><td>${m(f('2', '3'))} of a job is done in ${m('4')} days; the whole job</td><td class="m">4 ÷ ${f('2', '3')}</td><td class="m">6 days</td></tr>
        <tr><td>after spending ${m(f('2', '5'))}, ${m('18 000')} sum is left; the original</td><td class="m">18 000 ÷ ${f('3', '5')}</td><td class="m">30 000</td></tr>
        <tr><td>${m(f('3', '8'))} of a road is ${m('15')} km; the rest</td><td class="m">40 − 15</td><td class="m">25 km</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Read what the given number is a fraction <i>of</i></span>
      In the third row ${m('18 000')} is what is <b>left</b>, so it is ${m(f('3', '5'))} of the money, not
      ${m(f('2', '5'))}. Naming the fraction that matches the given number is the whole
      difficulty.</div>`
    }
  ],
  examples: [
    {
      q: m(f('3', '4')) + ' of a rope is ' + m('12') + ' m. How long is the whole rope?',
      steps: [
        ['A part is given; the whole is wanted, so divide.', ''],
        [m('12 ÷ ' + f('3', '4') + ' = 12 · ' + f('4', '3')), ''],
        [m('= 16') + ' m.', 'Bigger than ' + m('12') + ' ✓']
      ],
      ans: m('16') + ' m'
    },
    {
      q: 'A tank is ' + m(f('3', '5')) + ' full and holds ' + m('24') + ' litres. What is its capacity?',
      steps: [
        [m('24') + ' litres is ' + m(f('3', '5')) + ' of the capacity.', ''],
        [m('24 ÷ ' + f('3', '5') + ' = 24 · ' + f('5', '3')), ''],
        [m('= 40') + ' litres.', '']
      ],
      ans: m('40') + ' litres'
    },
    {
      q: 'After spending ' + m(f('2', '5')) + ' of her money, Nilufar has ' + m('18 000') + ' sum left. How much had she?',
      steps: [
        ['What is left is ' + m('1 − ' + f('2', '5') + ' = ' + f('3', '5')) + ' of the money.', 'The key step.'],
        [m('18 000 ÷ ' + f('3', '5')), ''],
        [m('= 30 000') + ' sum.', 'Check: ' + m(f('2', '5')) + ' of ' + m('30 000') + ' is ' + m('12 000') + ' ✓']
      ],
      ans: m('30 000') + ' sum'
    }
  ],
  modelNote: 'Give six problems and ask only for the operation, not the answer; deciding between × and ÷ is the skill, and it is worth a lesson on its own.',
  interactive: {
    type: 'quiz',
    title: 'Multiply or divide?',
    hint: 'Look for “of”, “fit”, “shared” and “this is a part of it”.',
    items: [
      { q: m(f('3', '4')) + ' of ' + m('20') + ':', a: ['multiply', 'divide', 'add', 'subtract'], c: 0, why: '“Of” means multiply.' },
      { q: 'How many ' + m(f('2', '3')) + ' m pieces fit in ' + m('6') + ' m:', a: ['multiply', 'divide', 'add', 'subtract'], c: 1, why: '“How many fit”.' },
      { q: m(f('3', '4')) + ' of a rope is ' + m('12') + ' m; the whole rope:', a: ['multiply', 'divide', 'add', 'subtract'], c: 1, why: 'Part given, whole wanted.' },
      { q: 'The whole rope is:', a: [m('9') + ' m', m('16') + ' m', m('15') + ' m', m('48') + ' m'], c: 1, why: m('12 · ' + f('4', '3')) + '.' },
      { q: 'A tank ' + m(f('3', '5')) + ' full holds ' + m('24') + ' l; its capacity:', a: [m('14.4') + ' l', m('40') + ' l', m('30') + ' l', m('72') + ' l'], c: 1, why: m('24 ÷ ' + f('3', '5')) + '.' },
      { q: m(f('2', '3')) + ' of ' + m(f('3', '5')) + ':', a: [m(f('2', '5')), m(f('5', '8')), m(f('10', '9')), m(f('6', '15')) + ' unsimplified'], c: 0, why: 'Cancel the ' + m('3') + 's.' },
      { q: 'After spending ' + m(f('2', '5')) + ', what is left is:', a: [m(f('2', '5')), m(f('3', '5')), m(f('1', '5')), m(f('5', '3'))], c: 1, why: m('1 − ' + f('2', '5')) + '.' },
      { q: 'The whole must be:', a: ['smaller than the part', 'larger than the part', 'equal to it', 'either'], c: 1, why: 'The sense check.' }
    ]
  },
  quiz: [
    { q: '“Of” means:', a: ['add', 'multiply', 'divide', 'subtract'], c: 1, why: 'A part of an amount.' },
    { q: '“How many fit” means:', a: ['multiply', 'divide', 'add', 'square'], c: 1, why: 'A measuring division.' },
    { q: m(f('2', '5')) + ' of a number is ' + m('18') + '; the number is:', a: [m('7.2'), m('45'), m('36'), m('90')], c: 1, why: m('18 ÷ ' + f('2', '5')) + '.' },
    { q: m(f('5', '6')) + ' of it is ' + m('25') + '; it is:', a: [m('30'), m('20.8'), m('35'), m('150')], c: 0, why: m('25 · ' + f('6', '5')) + '.' },
    { q: m(f('2', '3')) + ' of ' + m(f('3', '5')) + ' equals:', a: [m(f('2', '5')), m(f('9', '10')), m(f('5', '8')), m(f('6', '8'))], c: 0, why: 'Cancel.' },
    { q: 'A whole smaller than its part means:', a: ['a correct answer', 'the wrong operation', 'a large fraction', 'nothing'], c: 1, why: 'Impossible.' }
  ],
  practice: {
    easy: [
      [m(f('3', '4')) + ' of ' + m('20'), m('15')],
      [m(f('2', '3')) + ' of ' + m('27'), m('18')],
      [m('6') + ' m in ' + m(f('2', '3')) + ' m pieces', m('9')],
      [m(f('3', '4')) + ' of a rope is ' + m('12') + ' m: the rope', m('16') + ' m'],
      [m(f('1', '3')) + ' of it is ' + m('7') + ': it', m('21')],
      [m(f('2', '5')) + ' of it is ' + m('18') + ': it', m('45')],
      [m(f('5', '6')) + ' of it is ' + m('25') + ': it', m('30')]
    ],
    med: [
      [m(f('2', '3')) + ' of ' + m(f('3', '5')), m(f('2', '5'))],
      ['Half of ' + m(f('4', '7')), m(f('2', '7'))],
      ['A tank ' + m(f('3', '5')) + ' full holds ' + m('24') + ' l: its capacity', m('40') + ' l'],
      [m(f('2', '3')) + ' of a job in ' + m('4') + ' days: the whole job', m('6') + ' days'],
      ['After spending ' + m(f('2', '5')) + ', ' + m('18 000') + ' is left: the original', m('30 000')],
      [m(f('3', '4')) + ' of ' + m('28') + ' are girls; ' + m(f('1', '3')) + ' of them wear glasses', m('7')],
      [m(f('3', '8')) + ' of a road is ' + m('15') + ' km: the whole road', m('40') + ' km']
    ],
    hard: [
      [m(f('3', '8')) + ' of a road is ' + m('15') + ' km: the rest', m('25') + ' km'],
      ['After giving away ' + m(f('1', '4')) + ' and then ' + m(f('1', '3')) + ' of the rest, ' + m('12') + ' are left: the original', m('24')],
      [m(f('4', '5')) + ' of a number is ' + m('4') + ' more than ' + m(f('3', '5')) + ' of it: the number', m('20')],
      ['A jug holds ' + m('1' + f('1', '2')) + ' l; how many ' + m(f('1', '4')) + ' l cups fill it?', m('6')],
      [m(f('2', '3')) + ' of ' + m(f('3', '4')) + ' of ' + m('40'), m('20')],
      ['Half of a number added to a third of it is ' + m('25') + ': the number', m('30')],
      ['Why must the whole be larger than the part?', 'The part is a fraction of it, under one']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write the operation you have chosen before doing any arithmetic.',
  homework: [
    m(f('2', '3')) + ' of a length is ' + m('14') + ' m. Find the whole length.',
    'A barrel is ' + m(f('5', '8')) + ' full with ' + m('30') + ' litres. Find its capacity.',
    'Find ' + m(f('3', '5')) + ' of ' + m(f('5', '9')) + ' of ' + m('36') + '.',
    'After spending ' + m(f('3', '7')) + ' of his money, Bekzod has ' + m('24 000') + ' sum left. How much had he?',
    'How many ' + m(f('3', '4')) + ' m planks can be cut from a board ' + m('9') + ' m long?'
  ]
});

/* ============================== 15 ============================== */
G6_MAT.push({
  id: 'g6-15', stream: 'mat', grade: 6, quarter: 1, lessons: '33', hours: 1,
  title: 'Think — Project 1: mixed-up properties',
  subtitle: 'A Cambridge project: which of the four operations obey which laws, tested rather than assumed.',
  uz: 'Matematika 6, o‘ylab ko‘r', uzPage: 'pp. 91–93',
  cam: 'S7 Project 1', camPage: 'Stage 7, project pages', wb: 'Project sheet 1',
  objectives: [
    'State the commutative, associative and distributive laws.',
    'Test each law on each operation with examples.',
    'Produce a counter-example where a law fails.',
    'Present the findings as a table with a conclusion.'
  ],
  terms: [
    ['Commutative', 'O‘rin almashtirish xossasi', 'Переместительный'],
    ['Associative', 'Guruhlash xossasi', 'Сочетательный'],
    ['Distributive', 'Taqsimot xossasi', 'Распределительный'],
    ['Law', 'Qonun', 'Закон'],
    ['Counter-example', 'Qarshi misol', 'Контрпример'],
    ['To test', 'Sinab ko‘rmoq', 'Проверить'],
    ['Conclusion', 'Xulosa', 'Вывод'],
    ['Project', 'Loyiha', 'Проект']
  ],
  timing: [[8, 'The three laws'], [12, 'Testing them'], [14, 'Counter-examples'], [6, 'Presenting the findings']],
  sections: [
    {
      h: 'The three laws',
      html: `${eq(m('a + b = b + a') + '     ' + m('(a + b) + c = a + (b + c)') + '     ' + m('a(b + c) = ab + ac'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Law</th><th>What it says</th><th>In words</th></tr></thead>
      <tbody>
        <tr><td>commutative</td><td class="m">a + b = b + a</td><td>the order does not matter</td></tr>
        <tr><td>associative</td><td class="m">(a + b) + c = a + (b + c)</td><td>the grouping does not matter</td></tr>
        <tr><td>distributive</td><td class="m">a(b + c) = ab + ac</td><td>multiplication spreads over addition</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A law that holds for one operation may fail for another</div>
      That is the whole point of the project: not to be told which laws hold, but to find out by
      testing.</div>`
    },
    {
      h: 'Testing them',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Operation</th><th>Commutative?</th><th>Associative?</th><th>Test used</th></tr></thead>
      <tbody>
        <tr><td>addition</td><td>yes</td><td>yes</td><td class="m">3 + 5 = 5 + 3</td></tr>
        <tr><td>multiplication</td><td>yes</td><td>yes</td><td class="m">3 · 5 = 5 · 3</td></tr>
        <tr><td>subtraction</td><td>no</td><td>no</td><td class="m">3 − 5 ≠ 5 − 3</td></tr>
        <tr><td>division</td><td>no</td><td>no</td><td class="m">6 ÷ 2 ≠ 2 ÷ 6</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">One example proves nothing; one counter-example proves everything</div>
      ${m('2 + 2 = 2 · 2')} does not make addition and multiplication the same. But ${m('3 − 5 ≠ 5 − 3')}
      settles for ever that subtraction is not commutative.</div>`
    },
    {
      h: 'Counter-examples',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Claim</th><th>Counter-example</th><th>Verdict</th></tr></thead>
      <tbody>
        <tr><td>subtraction is commutative</td><td class="m">3 − 5 = −2, 5 − 3 = 2</td><td>false</td></tr>
        <tr><td>division is associative</td><td class="m">(12 ÷ 6) ÷ 2 = 1, 12 ÷ (6 ÷ 2) = 4</td><td>false</td></tr>
        <tr><td>subtraction is associative</td><td class="m">(9 − 4) − 2 = 3, 9 − (4 − 2) = 7</td><td>false</td></tr>
        <tr><td>multiplication distributes over addition</td><td>no counter-example exists</td><td>true</td></tr>
        <tr><td>division distributes from the right</td><td class="m">(6 + 4) ÷ 2 = 5 = 3 + 2</td><td>true</td></tr>
        <tr><td>division distributes from the left</td><td class="m">12 ÷ (6 + 2) = 1.5, but 2 + 6 = 8</td><td>false</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A counter-example must be a single, complete case</span>
      “Sometimes it does not work” is not a counter-example. Two numbers, both calculations and the two
      different answers — that is what settles a claim.</div>`
    },
    {
      h: 'Presenting the findings',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Part of the report</th><th>What it contains</th></tr></thead>
      <tbody>
        <tr><td>the question</td><td>which laws hold for which operations</td></tr>
        <tr><td>the method</td><td>the numbers you tested and why you chose them</td></tr>
        <tr><td>the table</td><td>four operations against three laws, with ✓ or ✗</td></tr>
        <tr><td>the evidence</td><td>one counter-example for every ✗</td></tr>
        <tr><td>the conclusion</td><td>two sentences on what the pattern is</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The pattern worth noticing</div>
      Addition and multiplication obey the laws; subtraction and division do not. The two that fail are
      exactly the two that undo the other two — and that is not a coincidence.</div>`
    }
  ],
  examples: [
    {
      q: 'Is subtraction commutative? Justify your answer.',
      steps: [
        ['Test ' + m('3') + ' and ' + m('5') + '.', ''],
        [m('3 − 5 = −2'), ''],
        [m('5 − 3 = 2'), ''],
        ['The two differ, so no — and one counter-example is enough.', '']
      ],
      ans: 'No'
    },
    {
      q: 'Is division associative?',
      steps: [
        ['Test ' + m('12, 6, 2') + '.', ''],
        [m('(12 ÷ 6) ÷ 2 = 1'), ''],
        [m('12 ÷ (6 ÷ 2) = 4'), ''],
        ['Different, so no.', '']
      ],
      ans: 'No'
    },
    {
      q: 'Show that ' + m('a(b + c) = ab + ac') + ' with ' + m('a = 4, b = 5, c = 3') + '.',
      steps: [
        ['Left: ' + m('4(5 + 3) = 4 · 8 = 32') + '.', ''],
        ['Right: ' + m('4 · 5 + 4 · 3 = 20 + 12 = 32') + '.', ''],
        ['They agree — as the distributive law says they must.', 'One case, not a proof.']
      ],
      ans: 'Both give ' + m('32')
    }
  ],
  modelNote: 'Ask each group to try to break one law and to bring the counter-example to the board; the groups that fail have found the true laws, which is the more interesting result.',
  interactive: {
    type: 'quiz',
    title: 'Which laws hold?',
    hint: 'One counter-example is enough to say no.',
    items: [
      { q: 'Addition is commutative:', a: ['true', 'false'], c: 0, why: m('a + b = b + a') + '.' },
      { q: 'Subtraction is commutative:', a: ['true', 'false'], c: 1, why: m('3 − 5 ≠ 5 − 3') + '.' },
      { q: 'Multiplication is commutative:', a: ['true', 'false'], c: 0, why: m('ab = ba') + '.' },
      { q: 'Division is commutative:', a: ['true', 'false'], c: 1, why: m('6 ÷ 2 ≠ 2 ÷ 6') + '.' },
      { q: 'Addition is associative:', a: ['true', 'false'], c: 0, why: 'Grouping does not matter.' },
      { q: 'Division is associative:', a: ['true', 'false'], c: 1, why: m('(12 ÷ 6) ÷ 2 ≠ 12 ÷ (6 ÷ 2)') + '.' },
      { q: m('a(b + c) = ab + ac') + ':', a: ['true', 'false'], c: 0, why: 'The distributive law.' },
      { q: 'One example is enough to prove a law:', a: ['true', 'false'], c: 1, why: 'It only takes one counter-example to disprove one.' }
    ]
  },
  quiz: [
    { q: 'Commutative means:', a: ['the order does not matter', 'the grouping does not matter', 'brackets expand', 'nothing changes'], c: 0, why: m('a + b = b + a') + '.' },
    { q: 'Associative means:', a: ['the order does not matter', 'the grouping does not matter', 'signs cancel', 'the answer is zero'], c: 1, why: 'Brackets may be moved.' },
    { q: 'Subtraction is:', a: ['commutative', 'not commutative', 'associative', 'distributive'], c: 1, why: m('3 − 5 ≠ 5 − 3') + '.' },
    { q: 'A claim is disproved by:', a: ['one example', 'one counter-example', 'many examples', 'a table'], c: 1, why: 'A single case suffices.' },
    { q: 'The two operations obeying all the laws are:', a: ['addition and subtraction', 'addition and multiplication', 'multiplication and division', 'subtraction and division'], c: 1, why: 'The other two undo them.' },
    { q: m('(6 + 4) ÷ 2') + ' equals:', a: [m('5'), m('8'), m('3'), m('1.5')], c: 0, why: 'And ' + m('3 + 2 = 5') + ' too.' }
  ],
  practice: {
    easy: [
      ['Is addition commutative?', 'Yes'],
      ['Is subtraction commutative?', 'No'],
      ['Is multiplication commutative?', 'Yes'],
      ['Is division commutative?', 'No'],
      ['Is addition associative?', 'Yes'],
      ['Is division associative?', 'No'],
      ['State the distributive law', m('a(b + c) = ab + ac')]
    ],
    med: [
      ['A counter-example to “subtraction is commutative”', m('3 − 5 ≠ 5 − 3')],
      ['A counter-example to “division is associative”', m('(12 ÷ 6) ÷ 2 ≠ 12 ÷ (6 ÷ 2)')],
      ['A counter-example to “subtraction is associative”', m('(9 − 4) − 2 ≠ 9 − (4 − 2)')],
      ['Check ' + m('a(b + c) = ab + ac') + ' at ' + m('4, 5, 3'), 'Both ' + m('32')],
      [m('(6 + 4) ÷ 2') + ' and ' + m('6 ÷ 2 + 4 ÷ 2'), 'Both ' + m('5')],
      [m('12 ÷ (6 + 2)') + ' and ' + m('12 ÷ 6 + 12 ÷ 2'), m('1.5') + ' and ' + m('8') + ' — different'],
      ['How many counter-examples disprove a claim?', 'One']
    ],
    hard: [
      ['Does division distribute over addition from the right?', 'Yes — ' + m('(a + b) ÷ c = a ÷ c + b ÷ c')],
      ['From the left?', 'No — ' + m('c ÷ (a + b) ≠ c ÷ a + c ÷ b')],
      ['Is ' + m('2 + 2 = 2 · 2') + ' evidence that the operations agree?', 'No — one case proves nothing'],
      ['Find another pair with ' + m('a + b = ab'), m('0') + ' and ' + m('0')],
      ['Why do subtraction and division fail the laws?', 'They are the inverses of the operations that obey them'],
      ['Is ' + m('a − (b − c) = (a − b) + c') + ' true?', 'Yes — check with numbers'],
      ['Which of the three laws holds for all four operations?', 'None of them — subtraction and division fail every one']
    ]
  },
  hwTitle: 'Homework — the project',
  hwNote: 'One page: the table, one counter-example for every cross, and two sentences of conclusion.',
  homework: [
    'Draw the table of four operations against the commutative and associative laws.',
    'Fill it in with ✓ and ✗, testing each cell with numbers of your own.',
    'Write one counter-example beside every ✗.',
    'Test the distributive law with three numbers of your choice.',
    'Write two sentences saying which operations obey the laws, and what the two exceptions have in common.'
  ]
});

/* ============================== 16 ============================== */
G6_MAT.push({
  id: 'g6-16', stream: 'mat', grade: 6, quarter: 1, lessons: '34–35', hours: 2,
  title: 'Revision — fractions and their division',
  subtitle: 'The four operations on fractions gathered before the control work.',
  uz: 'Matematika 6, takrorlash', uzPage: 'pp. 94–98',
  cam: 'S7 7 consolidation', camPage: 'Stage 7, pp. 66–80', wb: 'Revision 7',
  objectives: [
    'Choose the right method for each of the four operations.',
    'Work fluently with mixed numbers.',
    'Solve a word problem in three lines.',
    'Identify and repair the errors that remain.'
  ],
  terms: [
    ['Revision', 'Takrorlash', 'Повторение'],
    ['Common denominator', 'Umumiy maxraj', 'Общий знаменатель'],
    ['Reciprocal', 'Teskari son', 'Обратное число'],
    ['Mixed number', 'Aralash son', 'Смешанное число'],
    ['To cancel', 'Qisqartirish', 'Сокращать'],
    ['Lowest terms', 'Qisqarmas ko‘rinish', 'Несократимый вид'],
    ['Word problem', 'Matnli masala', 'Текстовая задача'],
    ['Check', 'Tekshirish', 'Проверка']
  ],
  timing: [[20, 'The four operations side by side'], [20, 'Mixed numbers'], [25, 'Word problems'], [12, 'The errors that remain'], [3, 'Homework']],
  sections: [
    {
      h: 'The four operations side by side',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Operation</th><th>What it needs</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>addition</td><td>a common denominator</td><td class="m">${f('2', '3')} + ${f('1', '4')} = ${f('11', '12')}</td></tr>
        <tr><td>subtraction</td><td>a common denominator</td><td class="m">${f('5', '6')} − ${f('1', '3')} = ${f('1', '2')}</td></tr>
        <tr><td>multiplication</td><td>nothing — multiply across</td><td class="m">${f('2', '3')} · ${f('3', '5')} = ${f('2', '5')}</td></tr>
        <tr><td>division</td><td>the reciprocal of the divisor</td><td class="m">${f('2', '3')} ÷ ${f('4', '5')} = ${f('5', '6')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Only ${m('+')} and ${m('−')} need a common denominator</span>
      Finding one before multiplying or dividing is not wrong, only wasted work — and it is the single
      commonest habit that slows this topic down.</div>`
    },
    {
      h: 'Mixed numbers',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Operation</th><th>Best method</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>adding</td><td>wholes and fractions separately, or convert</td><td class="m">1${f('1', '2')} + 2${f('1', '3')} = 3${f('5', '6')}</td></tr>
        <tr><td>subtracting</td><td>convert if borrowing is needed</td><td class="m">3${f('1', '4')} − 1${f('1', '2')} = 1${f('3', '4')}</td></tr>
        <tr><td>multiplying</td><td>always convert first</td><td class="m">1${f('1', '2')} · 2 = 3</td></tr>
        <tr><td>dividing</td><td>always convert first</td><td class="m">2${f('1', '4')} ÷ 1${f('1', '2')} = 1${f('1', '2')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Never multiply the whole parts and the fractions separately</span>
      ${m('1' + f('1', '2') + ' · 2' + f('1', '2'))} is not ${m('2' + f('1', '4'))}. Convert to
      ${m(f('3', '2') + ' · ' + f('5', '2'))}, which is ${m(f('15', '4') + ' = 3' + f('3', '4'))}.</div>`
    },
    {
      h: 'Word problems',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Operation</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>${m(f('3', '4'))} of ${m('24')} pupils are present</td><td>multiply</td><td class="m">18</td></tr>
        <tr><td>${m('9')} m of rope in ${m(f('3', '4'))} m pieces</td><td>divide</td><td class="m">12</td></tr>
        <tr><td>${m(f('2', '3'))} of a tank is ${m('20')} l</td><td>divide</td><td class="m">30 l</td></tr>
        <tr><td>${m(f('1', '2'))} l shared between ${m('4')}</td><td>divide</td><td class="m">${f('1', '8')} l</td></tr>
        <tr><td>${m(f('1', '4'))} added to ${m(f('1', '3'))} of a day</td><td>add</td><td class="m">${f('7', '12')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Three lines every time</div>
      Name the operation, do the arithmetic, answer in words with units. The middle line is the easiest of
      the three and carries the fewest marks.</div>`
    },
    {
      h: 'The errors that remain',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Error</th><th>Looks like</th><th>Correct</th></tr></thead>
      <tbody>
        <tr><td>adding denominators</td><td class="m">${f('1', '2')} + ${f('1', '3')} = ${f('2', '5')}</td><td class="m">${f('5', '6')}</td></tr>
        <tr><td>common denominator before ${m('×')}</td><td>extra work</td><td>multiply across</td></tr>
        <tr><td>turning over the wrong fraction</td><td class="m">${f('2', '3')} ÷ ${f('4', '5')} = ${f('3', '2')} · ${f('4', '5')}</td><td class="m">${f('2', '3')} · ${f('5', '4')}</td></tr>
        <tr><td>mixed number multiplied in parts</td><td class="m">1${f('1', '2')} · 2${f('1', '2')} = 2${f('1', '4')}</td><td class="m">3${f('3', '4')}</td></tr>
        <tr><td>answer not simplified</td><td class="m">${f('12', '18')}</td><td class="m">${f('2', '3')}</td></tr>
      </tbody></table></div>`
    }
  ],
  examples: [
    {
      q: 'Compute ' + m('1' + f('1', '2') + ' · 2' + f('1', '2')) + '.',
      steps: [
        ['Convert both: ' + m(f('3', '2')) + ' and ' + m(f('5', '2')) + '.', ''],
        [m(f('3', '2') + ' · ' + f('5', '2') + ' = ' + f('15', '4')), ''],
        [m('= 3' + f('3', '4')), '']
      ],
      ans: m('3' + f('3', '4'))
    },
    {
      q: 'Compute ' + m('3' + f('1', '4') + ' − 1' + f('1', '2')) + '.',
      steps: [
        ['Convert: ' + m(f('13', '4') + ' − ' + f('3', '2')) + '.', ''],
        ['Common denominator ' + m('4') + ': ' + m(f('13', '4') + ' − ' + f('6', '4')) + '.', ''],
        [m('= ' + f('7', '4') + ' = 1' + f('3', '4')), '']
      ],
      ans: m('1' + f('3', '4'))
    },
    {
      q: m(f('2', '3')) + ' of a tank is ' + m('20') + ' litres. Find its capacity.',
      steps: [
        ['A part is given, the whole is wanted: divide.', ''],
        [m('20 ÷ ' + f('2', '3') + ' = 20 · ' + f('3', '2')), ''],
        [m('= 30') + ' litres.', '']
      ],
      ans: m('30') + ' litres'
    }
  ],
  modelNote: 'Put one addition, one multiplication and one division on the board unlabelled and ask which needs a common denominator; the answer separates fluency from habit.',
  interactive: {
    type: 'quiz',
    title: 'Which method does this one need?',
    hint: 'Only ' + m('+') + ' and ' + m('−') + ' need a common denominator.',
    items: [
      { q: m(f('2', '3') + ' + ' + f('1', '4')) + ' needs:', a: ['a common denominator', 'the reciprocal', 'nothing', 'converting'], c: 0, why: 'Adding.' },
      { q: m(f('2', '3') + ' · ' + f('3', '5')) + ' needs:', a: ['a common denominator', 'the reciprocal', 'multiplying across', 'converting'], c: 2, why: 'No denominator work.' },
      { q: m(f('2', '3') + ' ÷ ' + f('4', '5')) + ' needs:', a: ['a common denominator', 'the reciprocal of the divisor', 'nothing', 'squaring'], c: 1, why: 'Turn over the second.' },
      { q: m(f('1', '2') + ' + ' + f('1', '3')) + ' equals:', a: [m(f('2', '5')), m(f('5', '6')), m(f('1', '6')), m(f('2', '6'))], c: 1, why: 'Never add denominators.' },
      { q: m('1' + f('1', '2') + ' · 2' + f('1', '2')) + ' equals:', a: [m('2' + f('1', '4')), m('3' + f('3', '4')), m('3'), m('2' + f('1', '2'))], c: 1, why: 'Convert first.' },
      { q: m('3' + f('1', '4') + ' − 1' + f('1', '2')) + ' equals:', a: [m('1' + f('3', '4')), m('2' + f('1', '4')), m('1' + f('1', '4')), m('2' + f('3', '4'))], c: 0, why: 'Convert and subtract.' },
      { q: m(f('2', '3')) + ' of a tank is ' + m('20') + ' l; the tank holds:', a: [m('13' + f('1', '3')) + ' l', m('30') + ' l', m('40') + ' l', m('60') + ' l'], c: 1, why: 'Divide.' },
      { q: m(f('12', '18')) + ' as an answer is:', a: ['finished', 'not simplified', 'wrong', 'improper'], c: 1, why: 'Both divide by ' + m('6') + '.' }
    ]
  },
  quiz: [
    { q: 'Which operations need a common denominator?', a: ['all four', m('+') + ' and ' + m('−'), m('×') + ' and ' + m('÷'), 'none'], c: 1, why: 'Same-sized parts.' },
    { q: 'To divide by a fraction:', a: ['find a common denominator', 'multiply by the reciprocal', 'multiply across', 'subtract'], c: 1, why: 'Turn over the divisor.' },
    { q: 'Before multiplying mixed numbers you should:', a: ['multiply the wholes', 'convert to improper fractions', 'add them', 'round them'], c: 1, why: 'Otherwise the answer is wrong.' },
    { q: m(f('1', '2') + ' + ' + f('1', '3')) + ' equals:', a: [m(f('2', '5')), m(f('5', '6')), m(f('1', '5')), m(f('2', '6'))], c: 1, why: 'LCD ' + m('6') + '.' },
    { q: m('9') + ' m of rope in ' + m(f('3', '4')) + ' m pieces gives:', a: [m('6.75'), m('12'), m('9'), m('3')], c: 1, why: m('9 · ' + f('4', '3')) + '.' },
    { q: 'An answer of ' + m(f('12', '18')) + ' should be written:', a: [m(f('12', '18')), m(f('2', '3')), m(f('6', '9')), m('0.67')], c: 1, why: 'Lowest terms.' }
  ],
  practice: {
    easy: [
      [m(f('2', '3') + ' + ' + f('1', '4')), m(f('11', '12'))],
      [m(f('5', '6') + ' − ' + f('1', '3')), m(f('1', '2'))],
      [m(f('2', '3') + ' · ' + f('3', '5')), m(f('2', '5'))],
      [m(f('2', '3') + ' ÷ ' + f('4', '5')), m(f('5', '6'))],
      [m(f('1', '2') + ' + ' + f('1', '3')), m(f('5', '6'))],
      [m(f('3', '4')) + ' of ' + m('24'), m('18')],
      [m('9') + ' m in ' + m(f('3', '4')) + ' m pieces', m('12')]
    ],
    med: [
      [m('1' + f('1', '2') + ' + 2' + f('1', '3')), m('3' + f('5', '6'))],
      [m('3' + f('1', '4') + ' − 1' + f('1', '2')), m('1' + f('3', '4'))],
      [m('1' + f('1', '2') + ' · 2' + f('1', '2')), m('3' + f('3', '4'))],
      [m('2' + f('1', '4') + ' ÷ 1' + f('1', '2')), m('1' + f('1', '2'))],
      [m(f('2', '3')) + ' of a tank is ' + m('20') + ' l: the tank', m('30') + ' l'],
      [m(f('1', '2')) + ' l shared between ' + m('4'), m(f('1', '8')) + ' l'],
      [m(f('1', '4') + ' + ' + f('1', '3')), m(f('7', '12'))]
    ],
    hard: [
      [m('2' + f('1', '3') + ' · 1' + f('2', '7')), m('3')],
      [m('4' + f('1', '2') + ' ÷ ' + f('3', '4')), m('6')],
      [m(f('3', '4') + ' + ' + f('2', '3') + ' − ' + f('1', '2')), m(f('11', '12'))],
      [m(f('5', '8') + ' ÷ ' + f('5', '6') + ' · ' + f('2', '3')), m(f('1', '2'))],
      ['A recipe needs ' + m(f('3', '4')) + ' kg for ' + m('6') + ' people: for ' + m('8'), m('1') + ' kg'],
      ['Which is larger, ' + m(f('2', '3') + ' ÷ ' + f('3', '4')) + ' or ' + m(f('2', '3') + ' · ' + f('3', '4')) + '?', 'The division'],
      ['Why is a common denominator not needed for ' + m('×') + '?', 'The parts are recut by the multiplication itself']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Name the operation before starting, and simplify every answer.',
  homework: [
    'Compute ' + m(f('3', '5') + ' + ' + f('1', '4')) + ' and ' + m(f('7', '8') + ' − ' + f('1', '2')) + '.',
    'Compute ' + m(f('4', '9') + ' · ' + f('3', '8')) + ' and ' + m(f('4', '9') + ' ÷ ' + f('8', '3')) + '.',
    'Compute ' + m('2' + f('1', '2') + ' · 1' + f('1', '5')) + '.',
    'Compute ' + m('3' + f('3', '4') + ' ÷ 1' + f('1', '4')) + '.',
    m(f('5', '8')) + ' of a barrel is ' + m('25') + ' litres. Find its capacity.'
  ]
});

/* ============================== 17 ============================== */
G6_MAT.push({
  id: 'g6-17', stream: 'mat', grade: 6, quarter: 1, lessons: '36–37', hours: 2,
  title: 'Control work 2 — division of fractions, and work on the mistakes',
  subtitle: 'The four operations on fractions in one paper, then the repair.',
  uz: 'Matematika 6, Nazorat ishi 2', uzPage: 'pp. 54–98',
  cam: 'S7 7 review', camPage: 'Stage 7, pp. 66–80', wb: 'Control paper 2',
  objectives: [
    'Work accurately with all four operations on fractions.',
    'Handle mixed numbers correctly.',
    'Solve a word problem, naming the operation.',
    'Classify each lost mark and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Division of fractions', 'Kasrlarni bo‘lish', 'Деление дробей'],
    ['Reciprocal', 'Teskari son', 'Обратное число'],
    ['Mixed number', 'Aralash son', 'Смешанное число'],
    ['Common denominator', 'Umumiy maxraj', 'Общий знаменатель'],
    ['Lowest terms', 'Qisqarmas ko‘rinish', 'Несократимый вид'],
    ['Word problem', 'Matnli masala', 'Текстовая задача'],
    ['Diagnosis', 'Tashxis', 'Диагностика']
  ],
  timing: [[3, 'Instructions'], [35, 'The paper'], [12, 'Answers'], [25, 'Diagnosis and rewrite'], [5, 'The map']],
  sections: [
    {
      h: 'The paper — 25 marks, 35 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>${m(f('3', '4') + ' + ' + f('2', '5'))} and ${m(f('7', '8') + ' − ' + f('1', '4'))}</td><td class="m">4</td><td>L21</td></tr>
        <tr><td>2</td><td>${m(f('4', '9') + ' · ' + f('3', '8'))}</td><td class="m">3</td><td>L21</td></tr>
        <tr><td>3</td><td>${m(f('5', '6') + ' ÷ 5')} and ${m('8 ÷ ' + f('2', '3'))}</td><td class="m">4</td><td>L22–26</td></tr>
        <tr><td>4</td><td>${m(f('2', '3') + ' ÷ ' + f('8', '9'))}</td><td class="m">4</td><td>L27–29</td></tr>
        <tr><td>5</td><td>${m('2' + f('1', '4') + ' ÷ 1' + f('1', '2'))}</td><td class="m">4</td><td>L27–29</td></tr>
        <tr><td>6</td><td>${m(f('3', '5'))} of a tank is ${m('24')} litres: find its capacity</td><td class="m">3</td><td>L30–32</td></tr>
        <tr><td>7</td><td>How many ${m(f('3', '4'))} m planks come from ${m('9')} m?</td><td class="m">3</td><td>L30–32</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The answers</div>
      ${m('1' + f('3', '20'))} and ${m(f('5', '8'))}; ${m(f('1', '6'))}; ${m(f('1', '6'))} and ${m('12')};
      ${m(f('3', '4'))}; ${m('1' + f('1', '2'))}; ${m('40')} litres; ${m('12')} planks.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>denominators added</td><td class="m">${f('3', '4')} + ${f('2', '5')} = ${f('5', '9')}</td><td>use the LCD ${m('20')}</td></tr>
        <tr><td>cancelled after multiplying</td><td class="m">${f('12', '72')}</td><td>cancel first: ${m(f('1', '6'))}</td></tr>
        <tr><td>numerator multiplied when dividing by a whole number</td><td class="m">${f('25', '6')}</td><td class="m">${f('1', '6')}</td></tr>
        <tr><td>wrong fraction inverted</td><td class="m">${f('3', '2')} · ${f('8', '9')}</td><td class="m">${f('2', '3')} · ${f('9', '8')}</td></tr>
        <tr><td>mixed number not converted</td><td class="m">2${f('1', '4')} ÷ 1${f('1', '2')} = 2${f('1', '6')}</td><td class="m">${f('9', '4')} ÷ ${f('3', '2')}</td></tr>
        <tr><td>multiplied instead of divided</td><td class="m">24 · ${f('3', '5')}</td><td class="m">24 ÷ ${f('3', '5')}</td></tr>
        <tr><td>answer not simplified</td><td class="m">${f('9', '12')}</td><td class="m">${f('3', '4')}</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'The chapter as one map',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Case</th><th>Method</th><th>Answer compared with the first number</th></tr></thead>
      <tbody>
        <tr><td>fraction ${m('÷')} whole number</td><td>multiply the denominator</td><td>smaller</td></tr>
        <tr><td>whole number ${m('÷')} fraction</td><td>multiply by the reciprocal</td><td>larger</td></tr>
        <tr><td>fraction ${m('÷')} fraction under ${m('1')}</td><td>multiply by the reciprocal</td><td>larger</td></tr>
        <tr><td>fraction ${m('÷')} fraction over ${m('1')}</td><td>multiply by the reciprocal</td><td>smaller</td></tr>
        <tr><td>mixed numbers</td><td>convert first, then as above</td><td>depends on the divisor</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Looking forward</div>
      Next come three short Cambridge lessons — common multiples, divisibility and roots — and then ratio,
      where dividing fractions returns as “how many times bigger is this than that”.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q3: ' + m(f('5', '6') + ' ÷ 5') + ' and ' + m('8 ÷ ' + f('2', '3')) + '.',
      steps: [
        [m(f('5', '6') + ' · ' + f('1', '5')), 'Cancel the ' + m('5') + 's.'],
        [m('= ' + f('1', '6')), 'Smaller ✓'],
        [m('8 · ' + f('3', '2')), 'Turn over the divisor.'],
        [m('= 12'), 'Larger ✓']
      ],
      ans: m(f('1', '6')) + ' and ' + m('12')
    },
    {
      q: 'Model answer, Q5: ' + m('2' + f('1', '4') + ' ÷ 1' + f('1', '2')) + '.',
      steps: [
        ['Convert: ' + m(f('9', '4') + ' ÷ ' + f('3', '2')) + '.', 'Never divide mixed numbers directly.'],
        [m(f('9', '4') + ' · ' + f('2', '3')), ''],
        ['Cancel and multiply.', ''],
        [m('= ' + f('3', '2') + ' = 1' + f('1', '2')), '']
      ],
      ans: m('1' + f('1', '2'))
    },
    {
      q: 'Model answer, Q6: ' + m(f('3', '5')) + ' of a tank is ' + m('24') + ' litres.',
      steps: [
        ['A part is given and the whole is wanted: divide.', ''],
        [m('24 ÷ ' + f('3', '5') + ' = 24 · ' + f('5', '3')), ''],
        [m('= 40') + ' litres.', 'Larger than ' + m('24') + ' ✓']
      ],
      ans: m('40') + ' litres'
    }
  ],
  modelNote: 'Return Q6 and Q7 first and ask which operation each needed; almost every lost mark there is a choice of operation, not arithmetic.',
  interactive: {
    type: 'quiz',
    title: 'The chapter in eight questions',
    hint: 'Method first, arithmetic second.',
    items: [
      { q: m(f('3', '4') + ' + ' + f('2', '5')) + ' equals:', a: [m(f('5', '9')), m('1' + f('3', '20')), m(f('6', '20')), m('1' + f('1', '20'))], c: 1, why: 'LCD ' + m('20') + '.' },
      { q: m(f('4', '9') + ' · ' + f('3', '8')) + ' equals:', a: [m(f('1', '6')), m(f('12', '72')) + ' unsimplified', m(f('7', '17')), m(f('32', '27'))], c: 0, why: 'Cancel first.' },
      { q: m(f('5', '6') + ' ÷ 5') + ' equals:', a: [m(f('1', '6')), m(f('25', '6')), m(f('5', '30')) + ' unsimplified', m(f('6', '5'))], c: 0, why: 'Cancel the ' + m('5') + 's.' },
      { q: m('8 ÷ ' + f('2', '3')) + ' equals:', a: [m(f('16', '3')), m('12'), m(f('4', '3')), m('5' + f('1', '3'))], c: 1, why: m('8 · ' + f('3', '2')) + '.' },
      { q: m(f('2', '3') + ' ÷ ' + f('8', '9')) + ' equals:', a: [m(f('16', '27')), m(f('3', '4')), m(f('4', '3')), m(f('27', '16'))], c: 1, why: m(f('2', '3') + ' · ' + f('9', '8')) + '.' },
      { q: m('2' + f('1', '4') + ' ÷ 1' + f('1', '2')) + ' equals:', a: [m('1' + f('1', '2')), m('2' + f('1', '6')), m('3' + f('3', '8')), m(f('2', '3'))], c: 0, why: 'Convert first.' },
      { q: m(f('3', '5')) + ' of a tank is ' + m('24') + ' l; the tank holds:', a: [m('14.4') + ' l', m('40') + ' l', m('30') + ' l', m('72') + ' l'], c: 1, why: 'Divide.' },
      { q: m('9') + ' m in ' + m(f('3', '4')) + ' m planks gives:', a: [m('6.75'), m('12'), m('9'), m('3')], c: 1, why: 'How many fit.' }
    ]
  },
  quiz: [
    { q: 'Q1 needs:', a: ['the reciprocal', 'a common denominator', 'converting', 'nothing'], c: 1, why: 'Adding and subtracting.' },
    { q: 'Q2 is quickest if you:', a: ['multiply then simplify', 'cancel then multiply', 'find a common denominator', 'convert'], c: 1, why: 'Smaller numbers.' },
    { q: 'Q3 first part gives an answer:', a: ['larger', 'smaller', 'equal', 'negative'], c: 1, why: 'Dividing by a whole number.' },
    { q: 'Q3 second part gives an answer:', a: ['larger', 'smaller', 'equal', 'negative'], c: 0, why: 'Dividing by a fraction under ' + m('1') + '.' },
    { q: 'Q5 must begin with:', a: ['turning over', 'converting the mixed numbers', 'a common denominator', 'cancelling'], c: 1, why: 'Then the rule applies.' },
    { q: 'Q6 needs:', a: ['multiplication', 'division', 'addition', 'subtraction'], c: 1, why: 'The whole from a part.' }
  ],
  practice: {
    easy: [
      [m(f('3', '4') + ' + ' + f('2', '5')), m('1' + f('3', '20'))],
      [m(f('7', '8') + ' − ' + f('1', '4')), m(f('5', '8'))],
      [m(f('4', '9') + ' · ' + f('3', '8')), m(f('1', '6'))],
      [m(f('5', '6') + ' ÷ 5'), m(f('1', '6'))],
      [m('8 ÷ ' + f('2', '3')), m('12')],
      [m(f('2', '3') + ' ÷ ' + f('8', '9')), m(f('3', '4'))],
      [m('2' + f('1', '4') + ' ÷ 1' + f('1', '2')), m('1' + f('1', '2'))]
    ],
    med: [
      [m(f('3', '5')) + ' of a tank is ' + m('24') + ' l', m('40') + ' l'],
      [m('9') + ' m in ' + m(f('3', '4')) + ' m planks', m('12')],
      [m('1' + f('1', '2') + ' + 2' + f('3', '4')), m('4' + f('1', '4'))],
      [m('5 ÷ ' + f('5', '8')), m('8')],
      [m(f('7', '10') + ' ÷ ' + f('7', '5')), m(f('1', '2'))],
      [m(f('3', '8') + ' · 4'), m('1' + f('1', '2'))],
      [m(f('9', '10') + ' ÷ 3'), m(f('3', '10'))]
    ],
    hard: [
      [m('3' + f('1', '3') + ' ÷ 2' + f('2', '9')), m('1' + f('1', '2'))],
      [m(f('5', '6') + ' + ' + f('3', '4') + ' ÷ ' + f('3', '2')), m('1' + f('1', '3'))],
      ['A tank ' + m(f('7', '8')) + ' full holds ' + m('35') + ' l: its capacity', m('40') + ' l'],
      ['How many ' + m(f('2', '5')) + ' kg bags from ' + m('6') + ' kg?', m('15')],
      [m('1 ÷ ' + f('3', '7')), m('2' + f('1', '3'))],
      ['After using ' + m(f('3', '8')) + ', ' + m('30') + ' l is left: the original', m('48') + ' l'],
      ['Why is the answer to Q3 second part larger than ' + m('8') + '?', 'The divisor is smaller than one']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite every question you lost a mark on in full, from the first line.',
  homework: [
    'Rewrite in full every question on which you lost a mark.',
    'Compute ' + m(f('5', '6') + ' + ' + f('3', '8')) + ' and ' + m(f('5', '6') + ' − ' + f('1', '3')) + '.',
    'Compute ' + m(f('3', '4') + ' ÷ 6') + ' and ' + m('10 ÷ ' + f('5', '7')) + '.',
    'Compute ' + m('3' + f('1', '2') + ' ÷ 1' + f('3', '4')) + '.',
    m(f('4', '9')) + ' of a road is ' + m('12') + ' km. Find the whole road.'
  ]
});

/* ============================== 18 ============================== */
G6_MAT.push({
  id: 'g6-18', stream: 'mat', grade: 6, quarter: 1, lessons: '38', hours: 1,
  title: 'Lowest common multiples and highest common factors',
  subtitle: 'A Cambridge insert: prime factors, and the two numbers they build.',
  uz: 'Matematika 6, qo‘shimcha mavzu', uzPage: 'pp. 99–102',
  cam: 'S7 1.3–1.4', camPage: 'Stage 7, pp. 18–24', wb: 'Exercise 1.3',
  objectives: [
    'Write a number as a product of prime factors.',
    'Find the HCF and the LCM of two numbers.',
    'Use the HCF to simplify a fraction and the LCM to add fractions.',
    'Recognise where each is needed in a word problem.'
  ],
  terms: [
    ['Factor', 'Bo‘luvchi', 'Делитель'],
    ['Multiple', 'Karrali son', 'Кратное'],
    ['Prime number', 'Tub son', 'Простое число'],
    ['Prime factorisation', 'Tub ko‘paytuvchilarga ajratish', 'Разложение на простые множители'],
    ['Highest common factor', 'EKUB', 'НОД'],
    ['Lowest common multiple', 'EKUK', 'НОК'],
    ['Common', 'Umumiy', 'Общий'],
    ['Product', 'Ko‘paytma', 'Произведение']
  ],
  timing: [[10, 'Prime factors'], [12, 'The HCF'], [12, 'The LCM'], [6, 'Where each is used']],
  sections: [
    {
      h: 'Prime factors',
      html: `<p>Every whole number above ${m('1')} is a product of primes, in exactly one way.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Number</th><th>Prime factors</th><th>In index form</th></tr></thead>
      <tbody>
        <tr><td class="m">12</td><td class="m">2 · 2 · 3</td><td class="m">2² · 3</td></tr>
        <tr><td class="m">18</td><td class="m">2 · 3 · 3</td><td class="m">2 · 3²</td></tr>
        <tr><td class="m">24</td><td class="m">2 · 2 · 2 · 3</td><td class="m">2³ · 3</td></tr>
        <tr><td class="m">60</td><td class="m">2 · 2 · 3 · 5</td><td class="m">2² · 3 · 5</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Divide by the smallest prime that fits, repeatedly</div>
      ${m('60 ÷ 2 = 30')}, ${m('30 ÷ 2 = 15')}, ${m('15 ÷ 3 = 5')}, ${m('5 ÷ 5 = 1')}. The divisors used,
      in order, are the prime factorisation.</div>`
    },
    {
      h: 'The HCF',
      html: `<p>The <b>highest common factor</b> is the product of the primes both numbers share, each to
      the lower of its two powers.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Numbers</th><th>Factorised</th><th>Shared</th><th>HCF</th></tr></thead>
      <tbody>
        <tr><td class="m">12, 18</td><td class="m">2² · 3, 2 · 3²</td><td class="m">2 · 3</td><td class="m">6</td></tr>
        <tr><td class="m">24, 60</td><td class="m">2³ · 3, 2² · 3 · 5</td><td class="m">2² · 3</td><td class="m">12</td></tr>
        <tr><td class="m">8, 15</td><td class="m">2³, 3 · 5</td><td>nothing</td><td class="m">1</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">An HCF of ${m('1')} means the numbers are coprime</div>
      ${m('8')} and ${m('15')} share no prime factor, so the fraction ${m(f('8', '15'))} is already in its
      lowest terms.</div>`
    },
    {
      h: 'The LCM',
      html: `<p>The <b>lowest common multiple</b> takes every prime that appears in either number, each to
      the higher of its powers.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Numbers</th><th>Factorised</th><th>Taken</th><th>LCM</th></tr></thead>
      <tbody>
        <tr><td class="m">12, 18</td><td class="m">2² · 3, 2 · 3²</td><td class="m">2² · 3²</td><td class="m">36</td></tr>
        <tr><td class="m">24, 60</td><td class="m">2³ · 3, 2² · 3 · 5</td><td class="m">2³ · 3 · 5</td><td class="m">120</td></tr>
        <tr><td class="m">8, 15</td><td class="m">2³, 3 · 5</td><td class="m">2³ · 3 · 5</td><td class="m">120</td></tr>
      </tbody></table></div>
      ${eq('HCF ' + m('×') + ' LCM ' + m('=') + ' the product of the two numbers', true)}
      <div class="keybox"><div class="klabel">A check that costs nothing</div>
      ${m('6 · 36 = 216 = 12 · 18')} ✓. If the HCF and LCM you found do not multiply to the product of the
      two numbers, one of them is wrong.</div>`
    },
    {
      h: 'Where each is used',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Which</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td>simplifying ${m(f('12', '18'))}</td><td>HCF</td><td>divide both by ${m('6')}</td></tr>
        <tr><td>adding ${m(f('1', '12') + ' + ' + f('1', '18'))}</td><td>LCM</td><td>the denominator ${m('36')}</td></tr>
        <tr><td>the largest identical parcels from ${m('24')} pens and ${m('60')} pencils</td><td>HCF</td><td class="m">12</td></tr>
        <tr><td>two buses leaving every ${m('12')} and ${m('18')} minutes together again</td><td>LCM</td><td class="m">36</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">“Cutting up” needs the HCF; “meeting again” needs the LCM</span>
      The HCF is never bigger than either number; the LCM is never smaller. Comparing your answer with the
      two numbers tells you at once whether you found the right one.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the HCF and LCM of ' + m('12') + ' and ' + m('18') + '.',
      steps: [
        [m('12 = 2² · 3') + ' and ' + m('18 = 2 · 3²') + '.', ''],
        ['HCF: shared primes at the lower power — ' + m('2 · 3 = 6') + '.', ''],
        ['LCM: every prime at the higher power — ' + m('2² · 3² = 36') + '.', ''],
        ['Check: ' + m('6 · 36 = 216 = 12 · 18') + ' ✓', '']
      ],
      ans: 'HCF ' + m('6') + ', LCM ' + m('36')
    },
    {
      q: m('24') + ' pens and ' + m('60') + ' pencils are made into identical parcels with nothing left over. What is the largest number of parcels?',
      steps: [
        ['“Largest identical parcels” means the HCF.', ''],
        [m('24 = 2³ · 3') + ', ' + m('60 = 2² · 3 · 5') + '.', ''],
        ['HCF ' + m('= 2² · 3 = 12') + '.', ''],
        ['Twelve parcels, each with ' + m('2') + ' pens and ' + m('5') + ' pencils.', '']
      ],
      ans: m('12') + ' parcels'
    },
    {
      q: 'Two buses leave at ' + m('8:00') + ', one every ' + m('12') + ' minutes and one every ' + m('18') + '. When do they next leave together?',
      steps: [
        ['“Together again” means the LCM.', ''],
        ['LCM of ' + m('12') + ' and ' + m('18') + ' is ' + m('36') + '.', ''],
        [m('36') + ' minutes later, at ' + m('8:36') + '.', '']
      ],
      ans: m('8:36')
    }
  ],
  modelNote: 'Ask for the HCF and LCM of 12 and 18 by listing factors and multiples first; the prime-factor method then arrives as a shortcut for something already understood.',
  interactive: {
    type: 'lcdBuilder',
    title: 'Building the LCM from prime factors',
    hint: 'Every prime at its highest power.',
    items: [
      {
        label: m('12') + ' and ' + m('18'),
        rows: [['12', '2² · 3', '3'], ['18', '2 · 3²', '2']],
        lcd: m('2² · 3² = 36'),
        note: 'HCF ' + m('= 2 · 3 = 6') + ', and ' + m('6 · 36 = 12 · 18') + ' ✓'
      },
      {
        label: m('24') + ' and ' + m('60'),
        rows: [['24', '2³ · 3', '5'], ['60', '2² · 3 · 5', '2']],
        lcd: m('2³ · 3 · 5 = 120'),
        note: 'HCF ' + m('= 2² · 3 = 12') + '.'
      },
      {
        label: m('8') + ' and ' + m('15'),
        rows: [['8', '2³', '15'], ['15', '3 · 5', '8']],
        lcd: m('2³ · 3 · 5 = 120'),
        note: 'They share nothing, so the HCF is ' + m('1') + ' and the LCM is their product.'
      }
    ]
  },
  quiz: [
    { q: m('12') + ' in prime factors is:', a: [m('2 · 6'), m('2² · 3'), m('3 · 4'), m('2 · 3²')], c: 1, why: 'Primes only.' },
    { q: 'The HCF of ' + m('12') + ' and ' + m('18') + ' is:', a: [m('2'), m('3'), m('6'), m('36')], c: 2, why: 'Shared primes, lower powers.' },
    { q: 'The LCM of ' + m('12') + ' and ' + m('18') + ' is:', a: [m('6'), m('36'), m('54'), m('216')], c: 1, why: 'All primes, higher powers.' },
    { q: 'The HCF of ' + m('8') + ' and ' + m('15') + ' is:', a: [m('1'), m('2'), m('3'), m('120')], c: 0, why: 'They are coprime.' },
    { q: 'HCF ' + m('×') + ' LCM equals:', a: ['the sum', 'the product of the numbers', 'the difference', 'nothing special'], c: 1, why: 'A free check.' },
    { q: 'Two buses meeting again needs the:', a: ['HCF', 'LCM', 'product', 'difference'], c: 1, why: 'A common multiple.' }
  ],
  practice: {
    easy: [
      [m('12') + ' in prime factors', m('2² · 3')],
      [m('18') + ' in prime factors', m('2 · 3²')],
      [m('24') + ' in prime factors', m('2³ · 3')],
      ['HCF of ' + m('12') + ' and ' + m('18'), m('6')],
      ['LCM of ' + m('12') + ' and ' + m('18'), m('36')],
      ['HCF of ' + m('8') + ' and ' + m('15'), m('1')],
      ['LCM of ' + m('8') + ' and ' + m('15'), m('120')]
    ],
    med: [
      [m('60') + ' in prime factors', m('2² · 3 · 5')],
      ['HCF of ' + m('24') + ' and ' + m('60'), m('12')],
      ['LCM of ' + m('24') + ' and ' + m('60'), m('120')],
      ['Simplify ' + m(f('12', '18')) + ' using the HCF', m(f('2', '3'))],
      ['Add ' + m(f('1', '12') + ' + ' + f('1', '18')) + ' using the LCM', m(f('5', '36'))],
      [m('24') + ' pens and ' + m('60') + ' pencils in identical parcels', m('12') + ' parcels'],
      ['Buses every ' + m('12') + ' and ' + m('18') + ' minutes from ' + m('8:00'), m('8:36')]
    ],
    hard: [
      ['HCF and LCM of ' + m('36') + ' and ' + m('48'), m('12') + ' and ' + m('144')],
      ['Check that HCF ' + m('×') + ' LCM ' + m('= 36 · 48'), m('12 · 144 = 1728') + ' ✓'],
      ['HCF of ' + m('105') + ' and ' + m('154'), m('7')],
      ['LCM of ' + m('4, 6') + ' and ' + m('10'), m('60')],
      ['The largest square tile that tiles a ' + m('60') + ' by ' + m('84') + ' cm floor exactly', m('12') + ' cm'],
      ['Two lights flash every ' + m('15') + ' and ' + m('25') + ' seconds: together again after', m('75') + ' s'],
      ['If the HCF of two numbers is one of them, what does that mean?', 'The smaller divides the larger']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Check every pair with HCF ' + m('×') + ' LCM = the product of the numbers.',
  homework: [
    'Write ' + m('45') + ' and ' + m('75') + ' as products of prime factors.',
    'Find their HCF and LCM, and check with the product rule.',
    'Simplify ' + m(f('45', '75')) + ' using the HCF.',
    'Find the LCM of ' + m('6, 8') + ' and ' + m('12') + '.',
    'Two runners lap a track in ' + m('40') + ' and ' + m('60') + ' seconds. After how long are they together at the start again?'
  ]
});

/* ============================== 19 ============================== */
G6_MAT.push({
  id: 'g6-19', stream: 'mat', grade: 6, quarter: 1, lessons: '39', hours: 1,
  title: 'Tests for divisibility',
  subtitle: 'A Cambridge insert: deciding what divides a number without doing the division.',
  uz: 'Matematika 6, qo‘shimcha mavzu', uzPage: 'pp. 103–105',
  cam: 'S7 1.5', camPage: 'Stage 7, pp. 24–27', wb: 'Exercise 1.5',
  objectives: [
    'State and apply the tests for ' + m('2, 3, 4, 5, 6, 8, 9') + ' and ' + m('10') + '.',
    'Combine tests to check divisibility by a composite number.',
    'Use the tests to factorise quickly.',
    'Explain why the test for ' + m('3') + ' works.'
  ],
  terms: [
    ['Divisible', 'Bo‘linadi', 'Делится'],
    ['Test for divisibility', 'Bo‘linish alomati', 'Признак делимости'],
    ['Digit sum', 'Raqamlar yig‘indisi', 'Сумма цифр'],
    ['Last digit', 'Oxirgi raqam', 'Последняя цифра'],
    ['Even number', 'Juft son', 'Чётное число'],
    ['Odd number', 'Toq son', 'Нечётное число'],
    ['Composite number', 'Murakkab son', 'Составное число'],
    ['Remainder', 'Qoldiq', 'Остаток']
  ],
  timing: [[12, 'The tests'], [10, 'Using them together'], [12, 'Factorising quickly'], [6, 'Why the test for 3 works']],
  sections: [
    {
      h: 'The tests',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Divisor</th><th>Test</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td class="m">2</td><td>last digit even</td><td class="m">374</td></tr>
        <tr><td class="m">3</td><td>digit sum divisible by ${m('3')}</td><td class="m">471 → 12</td></tr>
        <tr><td class="m">4</td><td>last two digits divisible by ${m('4')}</td><td class="m">1316 → 16</td></tr>
        <tr><td class="m">5</td><td>last digit ${m('0')} or ${m('5')}</td><td class="m">385</td></tr>
        <tr><td class="m">6</td><td>divisible by ${m('2')} and by ${m('3')}</td><td class="m">474</td></tr>
        <tr><td class="m">8</td><td>last three digits divisible by ${m('8')}</td><td class="m">3128 → 128</td></tr>
        <tr><td class="m">9</td><td>digit sum divisible by ${m('9')}</td><td class="m">576 → 18</td></tr>
        <tr><td class="m">10</td><td>last digit ${m('0')}</td><td class="m">4370</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The digit-sum tests can be repeated</div>
      For ${m('99 999')} the digit sum is ${m('45')}, whose digit sum is ${m('9')} — divisible by ${m('9')},
      so the original is too.</div>`
    },
    {
      h: 'Using them together',
      html: `<p>For a composite divisor, test its coprime factors separately.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Divisor</th><th>Test</th><th>Warning</th></tr></thead>
      <tbody>
        <tr><td class="m">6</td><td class="m">2 and 3</td><td>—</td></tr>
        <tr><td class="m">12</td><td class="m">3 and 4</td><td>not ${m('2')} and ${m('6')}</td></tr>
        <tr><td class="m">15</td><td class="m">3 and 5</td><td>—</td></tr>
        <tr><td class="m">18</td><td class="m">2 and 9</td><td>not ${m('3')} and ${m('6')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The two factors must share nothing</span>
      ${m('12 = 2 · 6')}, but passing the ${m('2')} and ${m('6')} tests is not enough: ${m('18')} passes
      both and is not a multiple of ${m('12')}. Use ${m('3')} and ${m('4')}, which are coprime.</div>`
    },
    {
      h: 'Factorising quickly',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Number</th><th>Tests it passes</th><th>Factorisation</th></tr></thead>
      <tbody>
        <tr><td class="m">180</td><td class="m">2, 3, 4, 5, 9, 10</td><td class="m">2² · 3² · 5</td></tr>
        <tr><td class="m">252</td><td class="m">2, 3, 4, 9</td><td class="m">2² · 3² · 7</td></tr>
        <tr><td class="m">385</td><td class="m">5</td><td class="m">5 · 7 · 11</td></tr>
        <tr><td class="m">1001</td><td>none of the small ones</td><td class="m">7 · 11 · 13</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The tests save the trial divisions</div>
      Knowing at a glance that ${m('180')} is divisible by ${m('4')} and by ${m('9')} gives
      ${m('180 = 36 · 5')} immediately, without any long division at all.</div>`
    },
    {
      h: 'Why the test for ' + m('3') + ' works',
      html: `<p>Every power of ten is one more than a multiple of ${m('3')}: ${m('10 = 9 + 1')},
      ${m('100 = 99 + 1')}, ${m('1000 = 999 + 1')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>For ${m('471')}</th></tr></thead>
      <tbody>
        <tr><td>split by place value</td><td class="m">4 · 100 + 7 · 10 + 1</td></tr>
        <tr><td>rewrite the powers</td><td class="m">4(99 + 1) + 7(9 + 1) + 1</td></tr>
        <tr><td>separate</td><td class="m">(4 · 99 + 7 · 9) + (4 + 7 + 1)</td></tr>
        <tr><td>the first bracket</td><td>always a multiple of ${m('3')}</td></tr>
        <tr><td>so the test</td><td>depends only on the digit sum</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The same argument works for ${m('9')}</div>
      ${m('99')} and ${m('999')} are multiples of ${m('9')} as well, which is why the digit-sum test serves
      both numbers — and why no such simple test exists for ${m('7')}.</div>`
    }
  ],
  examples: [
    {
      q: 'Is ' + m('471') + ' divisible by ' + m('3') + '? By ' + m('9') + '?',
      steps: [
        ['Digit sum: ' + m('4 + 7 + 1 = 12') + '.', ''],
        [m('12') + ' is divisible by ' + m('3') + ' — so ' + m('471') + ' is.', ''],
        [m('12') + ' is not divisible by ' + m('9') + ' — so ' + m('471') + ' is not.', '']
      ],
      ans: 'By ' + m('3') + ' yes, by ' + m('9') + ' no'
    },
    {
      q: 'Is ' + m('1316') + ' divisible by ' + m('4') + '?',
      steps: [
        ['Look at the last two digits: ' + m('16') + '.', ''],
        [m('16 ÷ 4 = 4') + '.', ''],
        ['So yes.', '']
      ],
      ans: 'Yes'
    },
    {
      q: 'Factorise ' + m('180') + ' using the tests.',
      steps: [
        ['Last two digits ' + m('80') + ' — divisible by ' + m('4') + '.', m('180 = 4 · 45')],
        ['Digit sum ' + m('9') + ' — divisible by ' + m('9') + '.', m('45 = 9 · 5')],
        [m('180 = 4 · 9 · 5'), ''],
        [m('= 2² · 3² · 5'), '']
      ],
      ans: m('2² · 3² · 5')
    }
  ],
  modelNote: 'Call out five-digit numbers and have the class shout which of 2, 3, 5 and 9 divide them; the tests become automatic in a single lesson.',
  interactive: {
    type: 'quiz',
    title: 'Which numbers divide it?',
    hint: 'Last digits for ' + m('2, 4, 5, 8, 10') + '; digit sums for ' + m('3') + ' and ' + m('9') + '.',
    items: [
      { q: 'Is ' + m('374') + ' divisible by ' + m('2') + '?', a: ['yes', 'no'], c: 0, why: 'Last digit even.' },
      { q: 'Is ' + m('471') + ' divisible by ' + m('3') + '?', a: ['yes', 'no'], c: 0, why: 'Digit sum ' + m('12') + '.' },
      { q: 'Is ' + m('471') + ' divisible by ' + m('9') + '?', a: ['yes', 'no'], c: 1, why: m('12') + ' is not.' },
      { q: 'Is ' + m('1316') + ' divisible by ' + m('4') + '?', a: ['yes', 'no'], c: 0, why: 'Last two digits ' + m('16') + '.' },
      { q: 'Is ' + m('385') + ' divisible by ' + m('5') + '?', a: ['yes', 'no'], c: 0, why: 'It ends in ' + m('5') + '.' },
      { q: 'Is ' + m('474') + ' divisible by ' + m('6') + '?', a: ['yes', 'no'], c: 0, why: 'Even, and digit sum ' + m('15') + '.' },
      { q: 'Is ' + m('576') + ' divisible by ' + m('9') + '?', a: ['yes', 'no'], c: 0, why: 'Digit sum ' + m('18') + '.' },
      { q: 'To test for ' + m('12') + ' use:', a: [m('2') + ' and ' + m('6'), m('3') + ' and ' + m('4'), m('12') + ' itself only', m('6') + ' and ' + m('6')], c: 1, why: 'Coprime factors.' }
    ]
  },
  quiz: [
    { q: 'A number is divisible by ' + m('3') + ' when:', a: ['it is even', 'its digit sum is', 'it ends in ' + m('3'), 'it is odd'], c: 1, why: 'The digit-sum test.' },
    { q: 'By ' + m('4') + ' when:', a: ['it is even', 'its last two digits are', 'its digit sum is', 'it ends in ' + m('4')], c: 1, why: m('100') + ' is a multiple of ' + m('4') + '.' },
    { q: 'By ' + m('6') + ' when it is divisible by:', a: [m('2') + ' and ' + m('3'), m('3') + ' only', m('2') + ' only', m('6') + ' alone'], c: 0, why: 'Both together.' },
    { q: 'By ' + m('9') + ' when:', a: ['it ends in ' + m('9'), 'its digit sum is', 'it is odd', 'it is even'], c: 1, why: 'As for ' + m('3') + '.' },
    { q: 'Testing for ' + m('12') + ' by ' + m('2') + ' and ' + m('6') + ' is:', a: ['correct', 'not enough', 'too strong', 'impossible'], c: 1, why: m('18') + ' passes both.' },
    { q: 'Which has no simple digit test?', a: [m('3'), m('7'), m('9'), m('5')], c: 1, why: 'No power of ten is one more than a multiple of ' + m('7') + '.' }
  ],
  practice: {
    easy: [
      ['Is ' + m('374') + ' divisible by ' + m('2') + '?', 'Yes'],
      ['Is ' + m('471') + ' divisible by ' + m('3') + '?', 'Yes'],
      ['Is ' + m('471') + ' divisible by ' + m('9') + '?', 'No'],
      ['Is ' + m('1316') + ' divisible by ' + m('4') + '?', 'Yes'],
      ['Is ' + m('385') + ' divisible by ' + m('5') + '?', 'Yes'],
      ['Is ' + m('4370') + ' divisible by ' + m('10') + '?', 'Yes'],
      ['Is ' + m('576') + ' divisible by ' + m('9') + '?', 'Yes']
    ],
    med: [
      ['Is ' + m('474') + ' divisible by ' + m('6') + '?', 'Yes'],
      ['Is ' + m('3128') + ' divisible by ' + m('8') + '?', 'Yes'],
      ['Which of ' + m('2, 3, 5, 9') + ' divide ' + m('180') + '?', 'All four'],
      ['Which divide ' + m('385') + '?', m('5') + ' only'],
      ['Factorise ' + m('180'), m('2² · 3² · 5')],
      ['Factorise ' + m('252'), m('2² · 3² · 7')],
      ['Test for ' + m('15') + ': use', m('3') + ' and ' + m('5')]
    ],
    hard: [
      ['Is ' + m('99 999') + ' divisible by ' + m('9') + '?', 'Yes — digit sum ' + m('45')],
      ['Why is testing ' + m('12') + ' with ' + m('2') + ' and ' + m('6') + ' wrong?', m('18') + ' passes both but is not a multiple of ' + m('12')],
      ['Factorise ' + m('1001'), m('7 · 11 · 13')],
      ['Explain the test for ' + m('3'), 'Every power of ten is one more than a multiple of ' + m('3')],
      ['The smallest digit ' + m('d') + ' making ' + m('47d') + ' divisible by ' + m('9'), m('d = 7')],
      ['Which digits ' + m('d') + ' make ' + m('12d') + ' divisible by ' + m('4') + '?', m('0, 4, 8')],
      ['Is ' + m('2 · 3 · 5 · 7 + 1') + ' divisible by any of ' + m('2, 3, 5, 7') + '?', 'No — each leaves remainder ' + m('1')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write which test you used beside every answer.',
  homework: [
    'Test ' + m('2 358') + ' for divisibility by ' + m('2, 3, 4, 6') + ' and ' + m('9') + '.',
    'Test ' + m('7 425') + ' for divisibility by ' + m('3, 5, 9') + ' and ' + m('15') + '.',
    'Factorise ' + m('360') + ' using the tests.',
    'Find the digit ' + m('d') + ' making ' + m('61d') + ' divisible by ' + m('3') + ', listing every possibility.',
    'Explain in two sentences why the digit-sum test works for ' + m('9') + '.'
  ]
});

/* ============================== 20 ============================== */
G6_MAT.push({
  id: 'g6-20', stream: 'mat', grade: 6, quarter: 1, lessons: '40', hours: 1,
  title: 'Square roots and cube roots',
  subtitle: 'A Cambridge insert: undoing a square and a cube, and knowing the small ones by heart.',
  uz: 'Matematika 6, qo‘shimcha mavzu', uzPage: 'pp. 106–108',
  cam: 'S7 1.6', camPage: 'Stage 7, pp. 27–31', wb: 'Exercise 1.6',
  objectives: [
    'Find squares and cubes of small whole numbers.',
    'Find square roots and cube roots exactly where they are whole.',
    'Estimate a square root between two whole numbers.',
    'Use roots in area and volume problems.'
  ],
  terms: [
    ['Square', 'Kvadrat', 'Квадрат'],
    ['Cube', 'Kub', 'Куб'],
    ['Square root', 'Kvadrat ildiz', 'Квадратный корень'],
    ['Cube root', 'Kub ildiz', 'Кубический корень'],
    ['Perfect square', 'To‘la kvadrat', 'Полный квадрат'],
    ['Perfect cube', 'To‘la kub', 'Полный куб'],
    ['To estimate', 'Baholash', 'Оценить'],
    ['Inverse operation', 'Teskari amal', 'Обратное действие']
  ],
  timing: [[10, 'Squares and cubes'], [12, 'The roots'], [12, 'Estimating'], [6, 'In area and volume']],
  sections: [
    {
      h: 'Squares and cubes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th class="m">n</th><th class="m">1</th><th class="m">2</th><th class="m">3</th><th class="m">4</th><th class="m">5</th><th class="m">6</th><th class="m">7</th><th class="m">8</th><th class="m">9</th><th class="m">10</th></tr></thead>
      <tbody>
        <tr><td class="m">n²</td><td class="m">1</td><td class="m">4</td><td class="m">9</td><td class="m">16</td><td class="m">25</td><td class="m">36</td><td class="m">49</td><td class="m">64</td><td class="m">81</td><td class="m">100</td></tr>
        <tr><td class="m">n³</td><td class="m">1</td><td class="m">8</td><td class="m">27</td><td class="m">64</td><td class="m">125</td><td class="m">216</td><td class="m">343</td><td class="m">512</td><td class="m">729</td><td class="m">1000</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Learn these two rows</div>
      They are needed for the rest of school mathematics — in area, in volume, in Pythagoras and in every
      quadratic equation from Grade 8 onwards. Ten minutes now saves hours later.</div>`
    },
    {
      h: 'The roots',
      html: `${eq(m('√25 = 5') + '  because ' + m('5² = 25') + ';     ' + m('∛27 = 3') + '  because ' + m('3³ = 27'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Root</th><th>Value</th><th>Check</th></tr></thead>
      <tbody>
        <tr><td class="m">√49</td><td class="m">7</td><td class="m">7² = 49</td></tr>
        <tr><td class="m">√81</td><td class="m">9</td><td class="m">9² = 81</td></tr>
        <tr><td class="m">√100</td><td class="m">10</td><td class="m">10² = 100</td></tr>
        <tr><td class="m">∛8</td><td class="m">2</td><td class="m">2³ = 8</td></tr>
        <tr><td class="m">∛125</td><td class="m">5</td><td class="m">5³ = 125</td></tr>
        <tr><td class="m">∛1000</td><td class="m">10</td><td class="m">10³ = 1000</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A root undoes a power; it does not halve it</span>
      ${m('√36')} is ${m('6')}, not ${m('18')}. The question a root asks is “what number, multiplied by
      itself, gives this?” — never “what is half of it?”</div>`
    },
    {
      h: 'Estimating',
      html: `<p>Most numbers are not perfect squares. Trap the root between the two nearest ones.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Root</th><th>Between</th><th>Nearer to</th></tr></thead>
      <tbody>
        <tr><td class="m">√50</td><td class="m">7 and 8</td><td class="m">7</td></tr>
        <tr><td class="m">√30</td><td class="m">5 and 6</td><td class="m">5</td></tr>
        <tr><td class="m">√90</td><td class="m">9 and 10</td><td class="m">9</td></tr>
        <tr><td class="m">∛30</td><td class="m">3 and 4</td><td class="m">3</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">${m('√50')} is a little over ${m('7')}</div>
      Because ${m('49')} is just below ${m('50')} and ${m('64')} is far above it. Comparing the gaps tells
      you which whole number the root is nearer, without any calculation.</div>`
    },
    {
      h: 'In area and volume',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>a square of area ${m('64 cm²')}: its side</td><td class="m">√64</td><td class="m">8 cm</td></tr>
        <tr><td>a square of area ${m('121 cm²')}: its perimeter</td><td class="m">4 · √121</td><td class="m">44 cm</td></tr>
        <tr><td>a cube of volume ${m('125 cm³')}: its edge</td><td class="m">∛125</td><td class="m">5 cm</td></tr>
        <tr><td>a cube of edge ${m('4 cm')}: its volume</td><td class="m">4³</td><td class="m">64 cm³</td></tr>
        <tr><td>a cube of volume ${m('64 cm³')}: its surface</td><td class="m">6 · 4²</td><td class="m">96 cm²</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Squares belong to area, cubes to volume</div>
      Two directions give ${m('cm²')} and a square; three give ${m('cm³')} and a cube. The units say which
      root is needed before any number is written.</div>`
    }
  ],
  examples: [
    {
      q: 'Find ' + m('√81') + ' and ' + m('∛64') + '.',
      steps: [
        [m('9² = 81') + ', so ' + m('√81 = 9') + '.', ''],
        [m('4³ = 64') + ', so ' + m('∛64 = 4') + '.', 'Note that ' + m('√64 = 8') + ' — different roots, different answers.']
      ],
      ans: m('9') + ' and ' + m('4')
    },
    {
      q: 'Between which two whole numbers does ' + m('√50') + ' lie?',
      steps: [
        [m('7² = 49') + ' and ' + m('8² = 64') + '.', ''],
        [m('49 < 50 < 64'), ''],
        ['So ' + m('7 < √50 < 8') + ', and much nearer ' + m('7') + '.', '']
      ],
      ans: 'Between ' + m('7') + ' and ' + m('8')
    },
    {
      q: 'A cube has volume ' + m('125 cm³') + '. Find its edge and its surface area.',
      steps: [
        [m('∛125 = 5') + ', so the edge is ' + m('5 cm') + '.', ''],
        ['Each face is ' + m('5² = 25 cm²') + '.', ''],
        ['Six faces: ' + m('150 cm²') + '.', '']
      ],
      ans: m('5 cm') + ' and ' + m('150 cm²')
    }
  ],
  modelNote: 'Build a cube from 27 unit blocks and ask for its edge; the cube root is picked up in the hand rather than from a table.',
  interactive: {
    type: 'rootPower',
    title: 'A number, its square and its square root',
    hint: 'One operation undoes the other.'
  },
  quiz: [
    { q: m('√49') + ' equals:', a: [m('7'), m('24.5'), m('9'), m('6')], c: 0, why: m('7² = 49') + '.' },
    { q: m('√100') + ' equals:', a: [m('10'), m('50'), m('20'), m('1000')], c: 0, why: m('10² = 100') + '.' },
    { q: m('∛27') + ' equals:', a: [m('3'), m('9'), m('13.5'), m('27')], c: 0, why: m('3³ = 27') + '.' },
    { q: m('∛64') + ' equals:', a: [m('4'), m('8'), m('16'), m('32')], c: 0, why: m('4³ = 64') + '.' },
    { q: m('√50') + ' lies between:', a: [m('6') + ' and ' + m('7'), m('7') + ' and ' + m('8'), m('8') + ' and ' + m('9'), m('24') + ' and ' + m('25')], c: 1, why: m('49 < 50 < 64') + '.' },
    { q: 'A square of area ' + m('64 cm²') + ' has side:', a: [m('8 cm'), m('16 cm'), m('32 cm'), m('4 cm')], c: 0, why: m('√64') + '.' }
  ],
  practice: {
    easy: [
      [m('6²'), m('36')],
      [m('9²'), m('81')],
      [m('4³'), m('64')],
      [m('5³'), m('125')],
      [m('√49'), m('7')],
      [m('√100'), m('10')],
      [m('∛27'), m('3')]
    ],
    med: [
      [m('∛64'), m('4')],
      [m('√64'), m('8')],
      [m('∛1000'), m('10')],
      [m('√50') + ' lies between', m('7') + ' and ' + m('8')],
      [m('∛30') + ' lies between', m('3') + ' and ' + m('4')],
      ['A square of area ' + m('121 cm²') + ': its perimeter', m('44 cm')],
      ['A cube of volume ' + m('125 cm³') + ': its edge', m('5 cm')]
    ],
    hard: [
      ['A cube of volume ' + m('64 cm³') + ': its surface area', m('96 cm²')],
      ['A cube of volume ' + m('125 cm³') + ': its surface area', m('150 cm²')],
      [m('√144 + ∛8'), m('14')],
      [m('√(36 + 64)'), m('10')],
      ['Is ' + m('√36 + √64') + ' the same as ' + m('√(36 + 64)') + '?', 'No — ' + m('14') + ' against ' + m('10')],
      ['A square of area ' + m('90 cm²') + ': its side, to the nearest cm', m('9 cm') + ' (a little over ' + m('9.4') + ')'],
      ['Which is larger, ' + m('√81') + ' or ' + m('∛512') + '?', m('√81 = 9') + ' beats ' + m('∛512 = 8')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Learn the squares to ' + m('12') + ' and the cubes to ' + m('10') + ' by heart.',
  homework: [
    'Write the squares of ' + m('1') + ' to ' + m('12') + '.',
    'Write the cubes of ' + m('1') + ' to ' + m('10') + '.',
    'Find ' + m('√169') + ', ' + m('√225') + ' and ' + m('∛216') + '.',
    'Between which whole numbers does ' + m('√200') + ' lie?',
    'A cube has volume ' + m('343 cm³') + '. Find its edge and its surface area.'
  ]
});

/* ============================== 21 ============================== */
G6_MAT.push({
  id: 'g6-21', stream: 'mat', grade: 6, quarter: 1, lessons: '41', hours: 1,
  title: 'Recall — ratio',
  subtitle: 'What a ratio is, how it differs from a fraction, and how it simplifies.',
  uz: 'Matematika 6, takrorlash', uzPage: 'pp. 109–112',
  cam: 'S7 12 entry', camPage: 'Stage 7, pp. 118–122', wb: 'Exercise 12.1',
  objectives: [
    'Write a ratio from a description and simplify it.',
    'Convert units before comparing.',
    'Say what each number of a ratio counts.',
    'Distinguish a ratio from a fraction of the whole.'
  ],
  terms: [
    ['Ratio', 'Nisbat', 'Отношение'],
    ['Part', 'Ulush', 'Часть'],
    ['To simplify a ratio', 'Nisbatni qisqartirish', 'Сократить отношение'],
    ['Equivalent ratios', 'Teng nisbatlar', 'Равные отношения'],
    ['Order of the terms', 'Hadlar tartibi', 'Порядок членов'],
    ['Same units', 'Bir xil birlik', 'Одинаковые единицы'],
    ['Total parts', 'Jami ulushlar', 'Всего частей'],
    ['Comparison', 'Taqqoslash', 'Сравнение']
  ],
  timing: [[10, 'What a ratio says'], [12, 'Simplifying'], [12, 'Ratio against fraction'], [6, 'Reading a ratio back']],
  sections: [
    {
      h: 'What a ratio says',
      html: `<p>A <b>ratio</b> compares two quantities of the same kind. In a class of ${m('12')} boys and
      ${m('18')} girls the ratio of boys to girls is ${m('12 : 18')}, which simplifies to ${m('2 : 3')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Situation</th><th>Ratio</th><th>Simplified</th></tr></thead>
      <tbody>
        <tr><td>${m('12')} boys, ${m('18')} girls</td><td class="m">12 : 18</td><td class="m">2 : 3</td></tr>
        <tr><td>${m('20')} cm to ${m('50')} cm</td><td class="m">20 : 50</td><td class="m">2 : 5</td></tr>
        <tr><td>${m('4')} red, ${m('6')} blue, ${m('10')} green</td><td class="m">4 : 6 : 10</td><td class="m">2 : 3 : 5</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The order matters</span>
      ${m('2 : 3')} is boys to girls; ${m('3 : 2')} is girls to boys. Writing the ratio the wrong way
      round reverses every answer that follows.</div>`
    },
    {
      h: 'Simplifying',
      html: `<p>Divide every part by their highest common factor — exactly as with a fraction. And convert
      to the same units first.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Ratio</th><th>First step</th><th>Simplified</th></tr></thead>
      <tbody>
        <tr><td class="m">12 : 18</td><td>divide by ${m('6')}</td><td class="m">2 : 3</td></tr>
        <tr><td class="m">50 cm : 2 m</td><td class="m">50 : 200</td><td class="m">1 : 4</td></tr>
        <tr><td class="m">30 min : 2 h</td><td class="m">30 : 120</td><td class="m">1 : 4</td></tr>
        <tr><td class="m">0.5 : 2</td><td class="m">5 : 20</td><td class="m">1 : 4</td></tr>
        <tr><td class="m">${f('1', '2')} : ${f('1', '3')}</td><td>multiply by ${m('6')}</td><td class="m">3 : 2</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Different units make a ratio meaningless</span>
      ${m('50 cm : 2 m')} is not ${m('25 : 1')} — it is ${m('1 : 4')}. Converting first is not optional; it
      changes the answer completely.</div>`
    },
    {
      h: 'Ratio against fraction',
      html: `<p>A ratio compares two parts with each other; a fraction compares one part with the
      <b>whole</b>.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td>boys to girls ${m('= 2 : 3')}</td><td>for every ${m('2')} boys there are ${m('3')} girls</td></tr>
        <tr><td>boys are ${m(f('2', '5'))} of the class</td><td>${m('2')} of every ${m('5')} pupils</td></tr>
        <tr><td>girls are ${m(f('3', '5'))} of the class</td><td>the parts add to ${m('5')}</td></tr>
        <tr><td>boys are ${m(f('2', '3'))} as many as the girls</td><td>the ratio again, as a fraction</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Add the parts to get the whole</div>
      A ratio of ${m('2 : 3')} has ${m('5')} parts altogether. Every fraction-of-the-whole question starts
      by adding the parts.</div>`
    },
    {
      h: 'Reading a ratio back',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Ratio</th><th>Total parts</th><th>If the total is ${m('30')}</th></tr></thead>
      <tbody>
        <tr><td class="m">2 : 3</td><td class="m">5</td><td class="m">12 and 18</td></tr>
        <tr><td class="m">1 : 4</td><td class="m">5</td><td class="m">6 and 24</td></tr>
        <tr><td class="m">1 : 2 : 3</td><td class="m">6</td><td class="m">5, 10 and 15</td></tr>
        <tr><td class="m">3 : 7</td><td class="m">10</td><td class="m">9 and 21</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">One part first, then multiply out</div>
      Total ${m('÷')} number of parts gives one part; each share is that times its own number. Sharing in
      a ratio, four lessons from now, is exactly this table read forwards.</div>`
    }
  ],
  examples: [
    {
      q: 'Simplify the ratio ' + m('50 cm : 2 m') + '.',
      steps: [
        ['Convert to the same unit: ' + m('50 cm : 200 cm') + '.', ''],
        ['Divide both by ' + m('50') + '.', ''],
        [m('= 1 : 4'), '']
      ],
      ans: m('1 : 4')
    },
    {
      q: 'A class has ' + m('12') + ' boys and ' + m('18') + ' girls. Write the ratio of boys to girls and the fraction of the class that is boys.',
      steps: [
        ['Ratio: ' + m('12 : 18 = 2 : 3') + '.', ''],
        ['Total parts: ' + m('2 + 3 = 5') + '.', ''],
        ['Boys are ' + m(f('2', '5')) + ' of the class.', '']
      ],
      ans: m('2 : 3') + ' and ' + m(f('2', '5'))
    },
    {
      q: 'Simplify ' + m(f('1', '2') + ' : ' + f('1', '3')) + '.',
      steps: [
        ['Multiply both parts by ' + m('6') + '.', 'A ratio is unchanged by that.'],
        [m('3 : 2'), '']
      ],
      ans: m('3 : 2')
    }
  ],
  modelNote: 'Count the boys and girls in the room and write the ratio on the board; the class simplifies its own numbers, which is more convincing than any textbook example.',
  interactive: {
    type: 'quiz',
    title: 'Ratio, or fraction of the whole?',
    hint: 'A ratio compares parts; a fraction compares a part with the whole.',
    items: [
      { q: m('12 : 18') + ' simplifies to:', a: [m('2 : 3'), m('3 : 2'), m('6 : 9'), m('1 : 2')], c: 0, why: 'Divide by ' + m('6') + '.' },
      { q: m('50 cm : 2 m') + ' simplifies to:', a: [m('25 : 1'), m('1 : 4'), m('50 : 2'), m('1 : 40')], c: 1, why: 'Convert first.' },
      { q: 'With ' + m('12') + ' boys and ' + m('18') + ' girls, boys are what fraction of the class?', a: [m(f('2', '3')), m(f('2', '5')), m(f('3', '5')), m(f('1', '2'))], c: 1, why: m('5') + ' parts in all.' },
      { q: 'A ratio of ' + m('2 : 3') + ' has how many parts?', a: [m('2'), m('3'), m('5'), m('6')], c: 2, why: 'Add them.' },
      { q: m('2 : 3') + ' and ' + m('3 : 2') + ' are:', a: ['the same', 'different', 'both wrong', 'equal to ' + m(f('2', '3'))], c: 1, why: 'The order matters.' },
      { q: m(f('1', '2') + ' : ' + f('1', '3')) + ' simplifies to:', a: [m('1 : 1'), m('3 : 2'), m('2 : 3'), m('1 : 6')], c: 1, why: 'Multiply both by ' + m('6') + '.' },
      { q: m('30') + ' shared in ' + m('1 : 4') + ' gives:', a: [m('6') + ' and ' + m('24'), m('10') + ' and ' + m('20'), m('5') + ' and ' + m('25'), m('15') + ' and ' + m('15')], c: 0, why: m('5') + ' parts of ' + m('6') + '.' },
      { q: m('30 min : 2 h') + ' simplifies to:', a: [m('15 : 1'), m('1 : 4'), m('30 : 2'), m('1 : 2')], c: 1, why: m('30 : 120') + '.' }
    ]
  },
  quiz: [
    { q: 'A ratio compares:', a: ['a part with the whole', 'two quantities of the same kind', 'two units', 'nothing'], c: 1, why: 'Part with part.' },
    { q: 'Before simplifying, the units must be:', a: ['different', 'the same', 'metric', 'ignored'], c: 1, why: 'Or the ratio is meaningless.' },
    { q: m('20 : 50') + ' simplifies to:', a: [m('2 : 5'), m('5 : 2'), m('4 : 10'), m('1 : 3')], c: 0, why: 'Divide by ' + m('10') + '.' },
    { q: 'In ' + m('2 : 3') + ' the first quantity is:', a: ['larger', 'smaller', 'equal', 'unknown'], c: 1, why: 'Two parts against three.' },
    { q: 'A ratio of ' + m('1 : 2 : 3') + ' has:', a: [m('3') + ' parts', m('6') + ' parts', m('5') + ' parts', m('123') + ' parts'], c: 1, why: m('1 + 2 + 3') + '.' },
    { q: 'Boys to girls ' + m('2 : 3') + ' means girls are:', a: [m(f('2', '5')), m(f('3', '5')), m(f('2', '3')), m(f('1', '2'))], c: 1, why: 'Three of five.' }
  ],
  practice: {
    easy: [
      ['Simplify ' + m('12 : 18'), m('2 : 3')],
      ['Simplify ' + m('20 : 50'), m('2 : 5')],
      ['Simplify ' + m('4 : 6 : 10'), m('2 : 3 : 5')],
      ['Simplify ' + m('50 cm : 2 m'), m('1 : 4')],
      ['Simplify ' + m('30 min : 2 h'), m('1 : 4')],
      ['The parts of ' + m('2 : 3'), m('5')],
      ['The parts of ' + m('1 : 2 : 3'), m('6')]
    ],
    med: [
      [m('12') + ' boys and ' + m('18') + ' girls: the ratio', m('2 : 3')],
      ['And the fraction that is boys', m(f('2', '5'))],
      ['Simplify ' + m('0.5 : 2'), m('1 : 4')],
      ['Simplify ' + m(f('1', '2') + ' : ' + f('1', '3')), m('3 : 2')],
      [m('30') + ' shared in ' + m('1 : 4'), m('6') + ' and ' + m('24')],
      [m('30') + ' shared in ' + m('2 : 3'), m('12') + ' and ' + m('18')],
      [m('30') + ' shared in ' + m('1 : 2 : 3'), m('5, 10, 15')]
    ],
    hard: [
      ['Simplify ' + m('750 g : 1.5 kg'), m('1 : 2')],
      ['Simplify ' + m('45 s : 3 min'), m('1 : 4')],
      ['If boys to girls is ' + m('3 : 7') + ', what fraction are girls?', m(f('7', '10'))],
      ['A ratio ' + m('2 : 3') + ' with the first quantity ' + m('14') + ': the second', m('21')],
      ['Simplify ' + m(f('2', '3') + ' : ' + f('4', '9')), m('3 : 2')],
      ['Why must units match before simplifying?', 'Otherwise the two numbers count different things'],
      ['A ratio of ' + m('1 : 1') + ' means', 'the two quantities are equal']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Convert to the same unit before you simplify anything.',
  homework: [
    'Simplify ' + m('16 : 24') + ', ' + m('35 : 49') + ' and ' + m('18 : 27 : 45') + '.',
    'Simplify ' + m('80 cm : 2 m') + ' and ' + m('20 min : 1 h') + '.',
    'A class has ' + m('14') + ' boys and ' + m('21') + ' girls. Write the ratio and the fraction that is girls.',
    'Share ' + m('40') + ' in the ratio ' + m('3 : 5') + '.',
    'Explain the difference between “boys to girls is ' + m('2 : 3') + '” and “boys are ' + m(f('2', '3')) + ' of the class”.'
  ]
});

/* ============================== 22 ============================== */
G6_MAT.push({
  id: 'g6-22', stream: 'mat', grade: 6, quarter: 1, lessons: '42–43', hours: 2,
  title: 'Ratio and fraction',
  subtitle: 'Moving between “three parts to five” and “three eighths of the whole”.',
  uz: 'Matematika 6, §9', uzPage: 'pp. 113–120',
  cam: 'S7 12', camPage: 'Stage 7, pp. 118–125', wb: 'Exercise 12.2',
  objectives: [
    'Write each part of a ratio as a fraction of the whole.',
    'Write a ratio from two fractions of a whole.',
    'Find one quantity from the other using the ratio.',
    'Solve problems mixing ratios and fractions.'
  ],
  terms: [
    ['Ratio', 'Nisbat', 'Отношение'],
    ['Fraction of the whole', 'Butunning qismi', 'Часть от целого'],
    ['Total parts', 'Jami ulushlar', 'Всего частей'],
    ['One part', 'Bir ulush', 'Одна часть'],
    ['To convert', 'O‘girmoq', 'Преобразовать'],
    ['Share', 'Ulush', 'Доля'],
    ['Proportion', 'Proporsiya', 'Пропорция'],
    ['Equivalent', 'Teng kuchli', 'Равносильный']
  ],
  timing: [[20, 'From ratio to fraction'], [25, 'From fraction to ratio'], [25, 'One quantity from the other'], [8, 'Mixed problems'], [2, 'Homework']],
  sections: [
    {
      h: 'From ratio to fraction',
      html: `<p>Add the parts of the ratio; each part is that many of the total.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Ratio</th><th>Total parts</th><th>First as a fraction</th><th>Second as a fraction</th></tr></thead>
      <tbody>
        <tr><td class="m">2 : 3</td><td class="m">5</td><td class="m">${f('2', '5')}</td><td class="m">${f('3', '5')}</td></tr>
        <tr><td class="m">3 : 5</td><td class="m">8</td><td class="m">${f('3', '8')}</td><td class="m">${f('5', '8')}</td></tr>
        <tr><td class="m">1 : 4</td><td class="m">5</td><td class="m">${f('1', '5')}</td><td class="m">${f('4', '5')}</td></tr>
        <tr><td class="m">2 : 3 : 5</td><td class="m">10</td><td class="m">${f('2', '10')} = ${f('1', '5')}</td><td class="m">${f('3', '10')} and ${f('5', '10')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The denominator is the total, not the other part</span>
      In ${m('2 : 3')} the first quantity is ${m(f('2', '5'))} of the whole — but ${m(f('2', '3'))} of the
      second quantity. Both statements are true and they mean different things.</div>`
    },
    {
      h: 'From fraction to ratio',
      html: `<p>If one part is ${m(f('3', '8'))} of the whole, the rest is ${m(f('5', '8'))}, so the ratio
      is ${m('3 : 5')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>The rest</th><th>Ratio</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('3', '8')} are boys</td><td class="m">${f('5', '8')}</td><td class="m">3 : 5</td></tr>
        <tr><td class="m">${f('2', '7')} are red</td><td class="m">${f('5', '7')}</td><td class="m">2 : 5</td></tr>
        <tr><td class="m">${f('1', '3')} is water</td><td class="m">${f('2', '3')}</td><td class="m">1 : 2</td></tr>
        <tr><td class="m">${f('3', '4')} is full</td><td class="m">${f('1', '4')}</td><td class="m">3 : 1</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A common denominator turns fractions into a ratio</div>
      If ${m(f('1', '2'))} is juice and ${m(f('1', '3'))} is water, write both over ${m('6')}: ${m(f('3', '6'))}
      and ${m(f('2', '6'))}, so the ratio is ${m('3 : 2')} — with a sixth left over for something
      else.</div>`
    },
    {
      h: 'One quantity from the other',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>boys to girls ${m('2 : 3')}, ${m('14')} boys</td><td>one part ${m('= 7')}</td><td class="m">21</td></tr>
        <tr><td>ratio ${m('3 : 5')}, the smaller is ${m('12')}</td><td>one part ${m('= 4')}</td><td class="m">20</td></tr>
        <tr><td>ratio ${m('4 : 7')}, the larger is ${m('35')}</td><td>one part ${m('= 5')}</td><td class="m">20</td></tr>
        <tr><td>ratio ${m('2 : 3')}, ${m('14')} boys: the class</td><td class="m">5 · 7</td><td class="m">35</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Find one part first, every time</div>
      Divide the known quantity by its own number in the ratio. That single number then answers every
      other question in the problem.</div>`
    },
    {
      h: 'Mixed problems',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>a drink is ${m('1')} part syrup to ${m('4')} water; syrup as a fraction</td><td class="m">${f('1', '5')}</td></tr>
        <tr><td>${m('600')} ml of that drink: the syrup in it</td><td class="m">120 ml</td></tr>
        <tr><td>${m(f('3', '8'))} of a class of ${m('32')} are boys: the ratio of boys to girls</td><td class="m">3 : 5</td></tr>
        <tr><td>and the number of girls</td><td class="m">20</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Read which quantity the given number belongs to</span>
      “Fourteen boys” is one part of the ratio; “a class of thirty-five” is the total. The two lead to
      different first steps, and misreading which is given accounts for most lost marks here.</div>`
    }
  ],
  examples: [
    {
      q: 'Boys to girls is ' + m('2 : 3') + ' and there are ' + m('14') + ' boys. How many girls, and how many pupils?',
      steps: [
        [m('14') + ' boys is ' + m('2') + ' parts, so one part is ' + m('7') + '.', ''],
        ['Girls: ' + m('3 · 7 = 21') + '.', ''],
        ['Class: ' + m('5 · 7 = 35') + '.', 'Check: ' + m('14 + 21 = 35') + ' ✓']
      ],
      ans: m('21') + ' girls, ' + m('35') + ' pupils'
    },
    {
      q: 'In a class ' + m(f('3', '8')) + ' are boys. Write the ratio of boys to girls.',
      steps: [
        ['Girls are ' + m('1 − ' + f('3', '8') + ' = ' + f('5', '8')) + '.', ''],
        ['Both are eighths, so compare the numerators.', ''],
        [m('3 : 5'), '']
      ],
      ans: m('3 : 5')
    },
    {
      q: 'A drink is ' + m('1') + ' part syrup to ' + m('4') + ' parts water. How much syrup is in ' + m('600') + ' ml?',
      steps: [
        ['Total parts: ' + m('5') + '.', ''],
        ['Syrup is ' + m(f('1', '5')) + ' of the drink.', ''],
        [m('600 ÷ 5 = 120') + ' ml.', '']
      ],
      ans: m('120') + ' ml'
    }
  ],
  modelNote: 'Mix a jug of squash in front of the class at 1 : 4 and ask for the fraction that is syrup; the fifth is visible in the jug.',
  interactive: {
    type: 'quiz',
    title: 'Ratio to fraction and back',
    hint: 'Add the parts to get the denominator.',
    items: [
      { q: 'In ' + m('2 : 3') + ' the first part is what fraction of the whole?', a: [m(f('2', '3')), m(f('2', '5')), m(f('3', '5')), m(f('1', '2'))], c: 1, why: 'Five parts in all.' },
      { q: 'In ' + m('3 : 5') + ' the second part is:', a: [m(f('5', '8')), m(f('5', '8')), m(f('3', '8')), m(f('5', '3'))], c: 1, why: 'Eight parts in all.' },
      { q: 'If ' + m(f('3', '8')) + ' are boys, the ratio of boys to girls is:', a: [m('3 : 8'), m('3 : 5'), m('5 : 3'), m('8 : 3')], c: 1, why: 'The rest is ' + m(f('5', '8')) + '.' },
      { q: 'Boys to girls ' + m('2 : 3') + ' with ' + m('14') + ' boys gives girls:', a: [m('7'), m('21'), m('28'), m('35')], c: 1, why: 'One part is ' + m('7') + '.' },
      { q: 'And a class of:', a: [m('21'), m('28'), m('35'), m('42')], c: 2, why: m('5') + ' parts.' },
      { q: 'A drink ' + m('1 : 4') + ' syrup to water is what fraction syrup?', a: [m(f('1', '4')), m(f('1', '5')), m(f('4', '5')), m(f('1', '3'))], c: 1, why: 'Five parts.' },
      { q: m('600') + ' ml of it contains syrup:', a: [m('100') + ' ml', m('120') + ' ml', m('150') + ' ml', m('480') + ' ml'], c: 1, why: m(f('1', '5')) + ' of ' + m('600') + '.' },
      { q: 'In ' + m('2 : 3') + ', the first is what fraction of the second?', a: [m(f('2', '5')), m(f('2', '3')), m(f('3', '2')), m(f('3', '5'))], c: 1, why: 'Part against part.' }
    ]
  },
  quiz: [
    { q: 'To turn a ratio into fractions you:', a: ['multiply the parts', 'add the parts', 'subtract them', 'divide them'], c: 1, why: 'The total is the denominator.' },
    { q: 'In ' + m('1 : 4') + ' the first part is:', a: [m(f('1', '4')), m(f('1', '5')), m(f('4', '5')), m(f('1', '3'))], c: 1, why: 'Five parts.' },
    { q: 'If ' + m(f('2', '7')) + ' are red, the ratio red to the rest is:', a: [m('2 : 7'), m('2 : 5'), m('5 : 2'), m('7 : 2')], c: 1, why: 'The rest is ' + m(f('5', '7')) + '.' },
    { q: 'Ratio ' + m('3 : 5') + ' with the smaller ' + m('12') + ' gives the larger:', a: [m('15'), m('20'), m('24'), m('36')], c: 1, why: 'One part is ' + m('4') + '.' },
    { q: 'Ratio ' + m('4 : 7') + ' with the larger ' + m('35') + ' gives the smaller:', a: [m('15'), m('20'), m('25'), m('28')], c: 1, why: 'One part is ' + m('5') + '.' },
    { q: 'The first step in every such problem is:', a: ['add the parts', 'find one part', 'divide the total', 'multiply'], c: 1, why: 'From the known quantity.' }
  ],
  practice: {
    easy: [
      ['In ' + m('2 : 3') + ' the first as a fraction', m(f('2', '5'))],
      ['In ' + m('3 : 5') + ' the second as a fraction', m(f('5', '8'))],
      ['In ' + m('1 : 4') + ' the first as a fraction', m(f('1', '5'))],
      ['If ' + m(f('3', '8')) + ' are boys, the ratio boys : girls', m('3 : 5')],
      ['If ' + m(f('2', '7')) + ' are red, the ratio red : rest', m('2 : 5')],
      ['The parts of ' + m('2 : 3 : 5'), m('10')],
      ['In that ratio the last as a fraction', m(f('1', '2'))]
    ],
    med: [
      ['Boys to girls ' + m('2 : 3') + ', ' + m('14') + ' boys: girls', m('21')],
      ['And the class', m('35')],
      ['Ratio ' + m('3 : 5') + ', smaller ' + m('12') + ': larger', m('20')],
      ['Ratio ' + m('4 : 7') + ', larger ' + m('35') + ': smaller', m('20')],
      ['A drink ' + m('1 : 4') + ': syrup in ' + m('600') + ' ml', m('120') + ' ml'],
      [m(f('3', '8')) + ' of ' + m('32') + ' are boys: the girls', m('20')],
      ['And the ratio boys : girls', m('3 : 5')]
    ],
    hard: [
      ['If ' + m(f('1', '2')) + ' is juice and ' + m(f('1', '3')) + ' water, the ratio juice : water', m('3 : 2')],
      ['Ratio ' + m('5 : 3') + ', the difference is ' + m('16') + ': the total', m('64')],
      ['Ratio ' + m('2 : 5') + ', the total is ' + m('63') + ': the parts', m('18') + ' and ' + m('45')],
      ['In ' + m('2 : 3') + ', the first is what fraction of the second?', m(f('2', '3'))],
      ['A mixture ' + m('2 : 3 : 5') + ' of ' + m('400') + ' g: the three parts', m('80, 120, 200') + ' g'],
      ['If boys are ' + m(f('4', '9')) + ' of a class, the ratio boys : girls', m('4 : 5')],
      ['Why is the denominator the total and not the other part?', 'A fraction of the whole counts every pupil']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Find one part first; every other number in the problem follows from it.',
  homework: [
    'In ' + m('3 : 7') + ' write each part as a fraction of the whole.',
    'If ' + m(f('2', '5')) + ' of a class are boys, write the ratio of boys to girls.',
    'Boys to girls is ' + m('3 : 4') + ' and there are ' + m('18') + ' boys. Find the girls and the class size.',
    'A drink is ' + m('2') + ' parts syrup to ' + m('7') + ' water. How much syrup is in ' + m('900') + ' ml?',
    'A ratio is ' + m('5 : 8') + ' and the larger quantity is ' + m('40') + '. Find the smaller and the total.'
  ]
});

/* ============================== 23 ============================== */
G6_MAT.push({
  id: 'g6-23', stream: 'mat', grade: 6, quarter: 1, lessons: '44–46', hours: 3,
  title: 'Word problems on ratio',
  subtitle: 'Sharing an amount, scaling a recipe, and finding a quantity from a difference.',
  uz: 'Matematika 6, §10', uzPage: 'pp. 121–130',
  cam: 'S7 12', camPage: 'Stage 7, pp. 118–125', wb: 'Exercise 12.3'
  ,
  objectives: [
    'Share a quantity in a given ratio.',
    'Find the total from one share or from the difference of two shares.',
    'Scale a recipe or a mixture up and down.',
    'Check that the shares rebuild the total.'
  ],
  terms: [
    ['To share in a ratio', 'Nisbatda taqsimlash', 'Разделить в отношении'],
    ['Share', 'Ulush', 'Доля'],
    ['Difference', 'Ayirma', 'Разность'],
    ['Recipe', 'Retsept', 'Рецепт'],
    ['To scale', 'Miqyoslash', 'Масштабировать'],
    ['Mixture', 'Aralashma', 'Смесь'],
    ['Total', 'Jami', 'Всего'],
    ['Check', 'Tekshirish', 'Проверка']
  ],
  timing: [[25, 'Sharing an amount'], [30, 'From one share to the total'], [30, 'From a difference'], [25, 'Recipes and mixtures'], [10, 'Homework']],
  sections: [
    {
      h: 'Sharing an amount',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Sharing ${m('120')} in ${m('2 : 3')}</th></tr></thead>
      <tbody>
        <tr><td>add the parts</td><td class="m">2 + 3 = 5</td></tr>
        <tr><td>one part</td><td class="m">120 ÷ 5 = 24</td></tr>
        <tr><td>the shares</td><td class="m">48 and 72</td></tr>
        <tr><td>check</td><td class="m">48 + 72 = 120 ✓</td></tr>
      </tbody></table></div>
      <div class="tablewrap"><table>
      <thead><tr><th>Amount</th><th>Ratio</th><th>Shares</th></tr></thead>
      <tbody>
        <tr><td class="m">120</td><td class="m">2 : 3</td><td class="m">48, 72</td></tr>
        <tr><td class="m">200</td><td class="m">3 : 7</td><td class="m">60, 140</td></tr>
        <tr><td class="m">450</td><td class="m">4 : 5</td><td class="m">200, 250</td></tr>
        <tr><td class="m">96</td><td class="m">1 : 3</td><td class="m">24, 72</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The check takes two seconds</div>
      Adding the shares must give the original amount. Nearly every arithmetic slip in this topic shows up
      in that one line.</div>`
    },
    {
      h: 'From one share to the total',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>One part</th><th>Total</th></tr></thead>
      <tbody>
        <tr><td>ratio ${m('2 : 3')}, the first share is ${m('18')}</td><td class="m">9</td><td class="m">45</td></tr>
        <tr><td>ratio ${m('3 : 4')}, the second share is ${m('28')}</td><td class="m">7</td><td class="m">49</td></tr>
        <tr><td>ratio ${m('5 : 2')}, the second share is ${m('16')}</td><td class="m">8</td><td class="m">56</td></tr>
        <tr><td>ratio ${m('1 : 6')}, the first share is ${m('9')}</td><td class="m">9</td><td class="m">63</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Divide the share by its own number, not by the total parts</span>
      With ratio ${m('2 : 3')} and a first share of ${m('18')}, one part is ${m('18 ÷ 2 = 9')} — not
      ${m('18 ÷ 5')}. The share belongs to the ${m('2')}, so the ${m('2')} is the divisor.</div>`
    },
    {
      h: 'From a difference',
      html: `<p>The difference between two shares is the difference of their parts, times one part.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Parts of difference</th><th>One part</th><th>Total</th></tr></thead>
      <tbody>
        <tr><td>ratio ${m('5 : 3')}, difference ${m('16')}</td><td class="m">2</td><td class="m">8</td><td class="m">64</td></tr>
        <tr><td>ratio ${m('7 : 4')}, difference ${m('12')}</td><td class="m">3</td><td class="m">4</td><td class="m">44</td></tr>
        <tr><td>ratio ${m('3 : 1')}, difference ${m('30')}</td><td class="m">2</td><td class="m">15</td><td class="m">60</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">One part answers everything</div>
      Whether the problem gives a total, one share or a difference, the first move is the same: turn what
      you are given into the value of one part.</div>`
    },
    {
      h: 'Recipes and mixtures',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>concrete ${m('1 : 2 : 4')} cement, sand, gravel in ${m('700')} kg</td><td>one part ${m('= 100')}</td><td class="m">100, 200, 400 kg</td></tr>
        <tr><td>a recipe for ${m('4')} uses ${m('600')} g flour: for ${m('6')}</td><td class="m">150 · 6</td><td class="m">900 g</td></tr>
        <tr><td>paint ${m('3 : 2')} blue to white, ${m('12')} l of blue</td><td>one part ${m('= 4')}</td><td class="m">8 l white</td></tr>
        <tr><td>a drink ${m('1 : 5')} in ${m('1.8')} l</td><td>one part ${m('= 0.3')}</td><td class="m">0.3 l syrup</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Keep the units with every number</span>
      A recipe scaled from kilograms to grams by mistake is out by a factor of a thousand. Writing the
      unit beside each share is the cheapest protection there is.</div>`
    }
  ],
  examples: [
    {
      q: 'Share ' + m('450') + ' in the ratio ' + m('4 : 5') + '.',
      steps: [
        [m('4 + 5 = 9') + ' parts.', ''],
        [m('450 ÷ 9 = 50') + ' for one part.', ''],
        [m('4 · 50 = 200') + ' and ' + m('5 · 50 = 250') + '.', 'Check: ' + m('200 + 250 = 450') + ' ✓']
      ],
      ans: m('200') + ' and ' + m('250')
    },
    {
      q: 'Two shares are in the ratio ' + m('5 : 3') + ' and differ by ' + m('16') + '. Find both.',
      steps: [
        ['The difference is ' + m('5 − 3 = 2') + ' parts.', ''],
        [m('16 ÷ 2 = 8') + ' for one part.', ''],
        [m('5 · 8 = 40') + ' and ' + m('3 · 8 = 24') + '.', 'Check: ' + m('40 − 24 = 16') + ' ✓']
      ],
      ans: m('40') + ' and ' + m('24')
    },
    {
      q: 'Concrete is mixed ' + m('1 : 2 : 4') + ' by mass. How much of each is in ' + m('700') + ' kg?',
      steps: [
        [m('1 + 2 + 4 = 7') + ' parts.', ''],
        [m('700 ÷ 7 = 100') + ' kg for one part.', ''],
        [m('100') + ', ' + m('200') + ' and ' + m('400') + ' kg.', 'Check: they total ' + m('700') + ' ✓']
      ],
      ans: m('100, 200, 400') + ' kg'
    }
  ],
  modelNote: 'Use a real recipe card and scale it for the whole class; the ratio work is identical to the textbook and the purpose is never in doubt.',
  interactive: {
    type: 'quiz',
    title: 'Total, share or difference?',
    hint: 'Turn what you are given into one part.',
    items: [
      { q: m('120') + ' in ' + m('2 : 3') + ' gives:', a: [m('40, 80'), m('48, 72'), m('50, 70'), m('60, 60')], c: 1, why: 'One part ' + m('24') + '.' },
      { q: m('200') + ' in ' + m('3 : 7') + ' gives:', a: [m('60, 140'), m('70, 130'), m('80, 120'), m('100, 100')], c: 0, why: 'One part ' + m('20') + '.' },
      { q: 'Ratio ' + m('2 : 3') + ' with first share ' + m('18') + ': one part is:', a: [m('3.6'), m('6'), m('9'), m('18')], c: 2, why: m('18 ÷ 2') + '.' },
      { q: 'So the total is:', a: [m('27'), m('45'), m('30'), m('90')], c: 1, why: m('5 · 9') + '.' },
      { q: 'Ratio ' + m('5 : 3') + ' with difference ' + m('16') + ': one part is:', a: [m('2'), m('8'), m('16'), m('4')], c: 1, why: 'The difference is ' + m('2') + ' parts.' },
      { q: 'So the shares are:', a: [m('40') + ' and ' + m('24'), m('30') + ' and ' + m('14'), m('50') + ' and ' + m('34'), m('20') + ' and ' + m('4')], c: 0, why: m('5 · 8') + ' and ' + m('3 · 8') + '.' },
      { q: 'Concrete ' + m('1 : 2 : 4') + ' in ' + m('700') + ' kg has cement:', a: [m('50') + ' kg', m('100') + ' kg', m('175') + ' kg', m('200') + ' kg'], c: 1, why: m('7') + ' parts.' },
      { q: 'The check on any sharing problem is:', a: ['the ratio', 'the shares add to the total', 'the difference', 'the units'], c: 1, why: 'Two seconds.' }
    ]
  },
  quiz: [
    { q: 'The first step in sharing is:', a: ['divide by the first part', 'add the parts', 'multiply', 'subtract'], c: 1, why: 'Then find one part.' },
    { q: m('96') + ' in ' + m('1 : 3') + ' gives:', a: [m('24') + ' and ' + m('72'), m('32') + ' and ' + m('64'), m('48') + ' and ' + m('48'), m('16') + ' and ' + m('80')], c: 0, why: 'Four parts of ' + m('24') + '.' },
    { q: 'Given one share, divide it by:', a: ['the total parts', 'its own number in the ratio', 'the other number', 'the total'], c: 1, why: 'That gives one part.' },
    { q: 'Ratio ' + m('7 : 4') + ' with difference ' + m('12') + ': the total is:', a: [m('33'), m('44'), m('55'), m('66')], c: 1, why: 'One part ' + m('4') + '.' },
    { q: 'A recipe for ' + m('4') + ' scaled to ' + m('6') + ' multiplies by:', a: [m('1.5'), m('2'), m('0.5'), m('6')], c: 0, why: m(f('6', '4')) + '.' },
    { q: 'Paint ' + m('3 : 2') + ' with ' + m('12') + ' l of blue needs white:', a: [m('6') + ' l', m('8') + ' l', m('18') + ' l', m('4') + ' l'], c: 1, why: 'One part ' + m('4') + ' l.' }
  ],
  practice: {
    easy: [
      ['Share ' + m('120') + ' in ' + m('2 : 3'), m('48') + ' and ' + m('72')],
      ['Share ' + m('200') + ' in ' + m('3 : 7'), m('60') + ' and ' + m('140')],
      ['Share ' + m('450') + ' in ' + m('4 : 5'), m('200') + ' and ' + m('250')],
      ['Share ' + m('96') + ' in ' + m('1 : 3'), m('24') + ' and ' + m('72')],
      ['Ratio ' + m('2 : 3') + ', first share ' + m('18') + ': one part', m('9')],
      ['And the total', m('45')],
      ['Ratio ' + m('3 : 4') + ', second share ' + m('28') + ': the total', m('49')]
    ],
    med: [
      ['Ratio ' + m('5 : 3') + ', difference ' + m('16'), m('40') + ' and ' + m('24')],
      ['Ratio ' + m('7 : 4') + ', difference ' + m('12'), m('28') + ' and ' + m('16')],
      ['Concrete ' + m('1 : 2 : 4') + ' in ' + m('700') + ' kg', m('100, 200, 400') + ' kg'],
      ['A recipe for ' + m('4') + ' with ' + m('600') + ' g flour: for ' + m('6'), m('900') + ' g'],
      ['Paint ' + m('3 : 2') + ', ' + m('12') + ' l blue: the white', m('8') + ' l'],
      ['A drink ' + m('1 : 5') + ' in ' + m('1.8') + ' l: the syrup', m('0.3') + ' l'],
      ['Ratio ' + m('5 : 2') + ', second share ' + m('16') + ': the total', m('56')]
    ],
    hard: [
      ['Share ' + m('540') + ' in ' + m('2 : 3 : 4'), m('120, 180, 240')],
      ['Ratio ' + m('4 : 9') + ', difference ' + m('35') + ': the total', m('91')],
      ['A recipe for ' + m('6') + ' uses ' + m('750') + ' g: for ' + m('10'), m('1250') + ' g'],
      ['Money shared ' + m('3 : 5') + ' so that the smaller share is ' + m('45 000'), 'Total ' + m('120 000')],
      ['Concrete ' + m('1 : 2 : 4') + ' using ' + m('150') + ' kg of cement: the total', m('1050') + ' kg'],
      ['Two numbers in ratio ' + m('4 : 7') + ' add to ' + m('132'), m('48') + ' and ' + m('84')],
      ['Why divide a known share by its own number?', 'That share is exactly that many parts']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Add your shares back to the total before writing the answer down.',
  homework: [
    'Share ' + m('360') + ' in the ratio ' + m('5 : 4') + '.',
    'Share ' + m('840') + ' in the ratio ' + m('1 : 2 : 4') + '.',
    'Two shares are in the ratio ' + m('7 : 3') + ' and differ by ' + m('24') + '. Find both.',
    'A recipe for ' + m('5') + ' people uses ' + m('400') + ' g of rice. How much for ' + m('8') + '?',
    'Paint is mixed ' + m('4 : 3') + ' blue to white. With ' + m('20') + ' litres of blue, how much white is needed?'
  ]
});

/* ============================== 24 ============================== */
G6_MAT.push({
  id: 'g6-24', stream: 'mat', grade: 6, quarter: 1, lessons: '47–49', hours: 3,
  title: 'The ratio of three quantities',
  subtitle: 'Chaining two ratios into one, and sharing among three.',
  uz: 'Matematika 6, §11', uzPage: 'pp. 131–140',
  cam: 'S7 12', camPage: 'Stage 7, pp. 118–125', wb: 'Exercise 12.4',
  objectives: [
    'Share a quantity among three in a given ratio.',
    'Combine ' + m('a : b') + ' and ' + m('b : c') + ' into ' + m('a : b : c') + '.',
    'Find all three quantities from one of them.',
    'Solve mixture problems with three ingredients.'
  ],
  terms: [
    ['Three-part ratio', 'Uch hadli nisbat', 'Отношение трёх величин'],
    ['To combine ratios', 'Nisbatlarni birlashtirish', 'Объединить отношения'],
    ['Common term', 'Umumiy had', 'Общий член'],
    ['Equivalent ratio', 'Teng nisbat', 'Равное отношение'],
    ['Share', 'Ulush', 'Доля'],
    ['Mixture', 'Aralashma', 'Смесь'],
    ['Total parts', 'Jami ulushlar', 'Всего частей'],
    ['Scaling', 'Miqyoslash', 'Масштабирование']
  ],
  timing: [[25, 'Sharing among three'], [30, 'Chaining two ratios'], [30, 'From one quantity to all three'], [25, 'Mixtures'], [10, 'Homework']],
  sections: [
    {
      h: 'Sharing among three',
      html: `<p>Nothing new: add all three parts, find one part, multiply out.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Amount</th><th>Ratio</th><th>Parts</th><th>Shares</th></tr></thead>
      <tbody>
        <tr><td class="m">300</td><td class="m">1 : 2 : 3</td><td class="m">6</td><td class="m">50, 100, 150</td></tr>
        <tr><td class="m">700</td><td class="m">1 : 2 : 4</td><td class="m">7</td><td class="m">100, 200, 400</td></tr>
        <tr><td class="m">540</td><td class="m">2 : 3 : 4</td><td class="m">9</td><td class="m">120, 180, 240</td></tr>
        <tr><td class="m">480</td><td class="m">3 : 5 : 8</td><td class="m">16</td><td class="m">90, 150, 240</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The check is the same</div>
      All three shares must add to the original amount. With three numbers to add there is more to go
      wrong, so the check matters more, not less.</div>`
    },
    {
      h: 'Chaining two ratios',
      html: `<p>Given ${m('A : B = 2 : 3')} and ${m('B : C = 4 : 5')}, the two ${m('B')}s must be made
      equal before the ratios can be joined.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>Working</th></tr></thead>
      <tbody>
        <tr><td>the two ratios</td><td class="m">A : B = 2 : 3, B : C = 4 : 5</td></tr>
        <tr><td>make the ${m('B')}s match — LCM of ${m('3')} and ${m('4')} is ${m('12')}</td><td class="m">A : B = 8 : 12, B : C = 12 : 15</td></tr>
        <tr><td>join them</td><td class="m">A : B : C = 8 : 12 : 15</td></tr>
      </tbody></table></div>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">A : B</th><th class="m">B : C</th><th class="m">A : B : C</th></tr></thead>
      <tbody>
        <tr><td class="m">2 : 3</td><td class="m">3 : 4</td><td class="m">2 : 3 : 4</td></tr>
        <tr><td class="m">2 : 3</td><td class="m">4 : 5</td><td class="m">8 : 12 : 15</td></tr>
        <tr><td class="m">1 : 2</td><td class="m">3 : 7</td><td class="m">3 : 6 : 14</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Only the shared quantity is matched</span>
      Scaling ${m('A : B')} by ${m('4')} and ${m('B : C')} by ${m('3')} changes the numbers but not the
      ratios — that is exactly why it is allowed. Scaling only one of the two would break them.</div>`
    },
    {
      h: 'From one quantity to all three',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Ratio</th><th>Given</th><th>One part</th><th>All three</th></tr></thead>
      <tbody>
        <tr><td class="m">2 : 3 : 5</td><td>the first is ${m('12')}</td><td class="m">6</td><td class="m">12, 18, 30</td></tr>
        <tr><td class="m">1 : 4 : 6</td><td>the second is ${m('20')}</td><td class="m">5</td><td class="m">5, 20, 30</td></tr>
        <tr><td class="m">3 : 4 : 5</td><td>the third is ${m('35')}</td><td class="m">7</td><td class="m">21, 28, 35</td></tr>
        <tr><td class="m">2 : 3 : 4</td><td>the total is ${m('180')}</td><td class="m">20</td><td class="m">40, 60, 80</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Always one part first</div>
      Whatever is given — a share, the total, or a difference — the first line of working is the value of
      one part. Every three-quantity problem then finishes in one more line.</div>`
    },
    {
      h: 'Mixtures',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>concrete ${m('1 : 2 : 4')} using ${m('150')} kg of cement</td><td>one part ${m('= 150')}</td><td class="m">1050 kg in all</td></tr>
        <tr><td>a salad ${m('3 : 2 : 1')} of ${m('600')} g</td><td>one part ${m('= 100')}</td><td class="m">300, 200, 100 g</td></tr>
        <tr><td>brass ${m('7 : 3')} copper to zinc in ${m('500')} g</td><td>one part ${m('= 50')}</td><td class="m">350 g copper</td></tr>
        <tr><td>a mix ${m('2 : 3 : 5')} with ${m('60')} g of the largest part</td><td>one part ${m('= 12')}</td><td class="m">120 g in all</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Read which part the given amount is</span>
      “Using ${m('150')} kg of cement” names the ${m('1')}; “with ${m('60')} g of the largest part” names
      the ${m('5')}. The same number leads to very different totals depending on which part it is.</div>`
    }
  ],
  examples: [
    {
      q: 'Share ' + m('540') + ' in the ratio ' + m('2 : 3 : 4') + '.',
      steps: [
        [m('2 + 3 + 4 = 9') + ' parts.', ''],
        [m('540 ÷ 9 = 60') + ' for one part.', ''],
        [m('120') + ', ' + m('180') + ' and ' + m('240') + '.', 'Check: they total ' + m('540') + ' ✓']
      ],
      ans: m('120, 180, 240')
    },
    {
      q: 'If ' + m('A : B = 2 : 3') + ' and ' + m('B : C = 4 : 5') + ', find ' + m('A : B : C') + '.',
      steps: [
        ['The ' + m('B') + 's are ' + m('3') + ' and ' + m('4') + '; their LCM is ' + m('12') + '.', ''],
        ['Scale the first by ' + m('4') + ': ' + m('8 : 12') + '.', ''],
        ['Scale the second by ' + m('3') + ': ' + m('12 : 15') + '.', ''],
        [m('A : B : C = 8 : 12 : 15'), '']
      ],
      ans: m('8 : 12 : 15')
    },
    {
      q: 'Concrete is ' + m('1 : 2 : 4') + ' cement, sand and gravel. A builder uses ' + m('150') + ' kg of cement. What is the total mass?',
      steps: [
        ['Cement is ' + m('1') + ' part, so one part is ' + m('150') + ' kg.', ''],
        ['Total parts: ' + m('7') + '.', ''],
        [m('7 · 150 = 1050') + ' kg.', '']
      ],
      ans: m('1050') + ' kg'
    }
  ],
  modelNote: 'Give the class two ratios sharing a middle quantity and ask them to join them without being shown how; most reach the LCM idea themselves.',
  interactive: {
    type: 'lcdBuilder',
    title: 'Matching the shared quantity',
    hint: 'The two middle numbers must be made equal.',
    items: [
      {
        label: m('A : B = 2 : 3') + ' and ' + m('B : C = 4 : 5'),
        rows: [['3', 'B in the first ratio', '×4'], ['4', 'B in the second', '×3']],
        lcd: m('A : B : C = 8 : 12 : 15'),
        note: 'The LCM of ' + m('3') + ' and ' + m('4') + ' is ' + m('12') + '.'
      },
      {
        label: m('A : B = 2 : 3') + ' and ' + m('B : C = 3 : 4'),
        rows: [['3', 'B in the first', '×1'], ['3', 'B in the second', '×1']],
        lcd: m('A : B : C = 2 : 3 : 4'),
        note: 'The two ' + m('B') + 's already match, so nothing needs scaling.'
      },
      {
        label: m('A : B = 1 : 2') + ' and ' + m('B : C = 3 : 7'),
        rows: [['2', 'B in the first', '×3'], ['3', 'B in the second', '×2']],
        lcd: m('A : B : C = 3 : 6 : 14'),
        note: 'The LCM of ' + m('2') + ' and ' + m('3') + ' is ' + m('6') + '.'
      }
    ]
  },
  quiz: [
    { q: m('300') + ' in ' + m('1 : 2 : 3') + ' gives:', a: [m('50, 100, 150'), m('60, 100, 140'), m('100, 100, 100'), m('30, 60, 210')], c: 0, why: 'Six parts of ' + m('50') + '.' },
    { q: 'To join ' + m('A : B') + ' and ' + m('B : C') + ' you make equal:', a: ['the ' + m('A') + 's', 'the ' + m('B') + 's', 'the ' + m('C') + 's', 'the totals'], c: 1, why: 'The shared quantity.' },
    { q: m('2 : 3') + ' and ' + m('4 : 5') + ' join to:', a: [m('2 : 3 : 5'), m('8 : 12 : 15'), m('2 : 12 : 5'), m('6 : 12 : 20')], c: 1, why: 'LCM of ' + m('3') + ' and ' + m('4') + '.' },
    { q: 'Ratio ' + m('2 : 3 : 5') + ' with the first ' + m('12') + ' gives the third:', a: [m('18'), m('24'), m('30'), m('36')], c: 2, why: 'One part ' + m('6') + '.' },
    { q: 'Concrete ' + m('1 : 2 : 4') + ' with ' + m('150') + ' kg cement totals:', a: [m('450') + ' kg', m('750') + ' kg', m('1050') + ' kg', m('1200') + ' kg'], c: 2, why: m('7') + ' parts.' },
    { q: 'The first line of working is always:', a: ['the total', 'one part', 'the ratio', 'the check'], c: 1, why: 'Everything follows from it.' }
  ],
  practice: {
    easy: [
      ['Share ' + m('300') + ' in ' + m('1 : 2 : 3'), m('50, 100, 150')],
      ['Share ' + m('700') + ' in ' + m('1 : 2 : 4'), m('100, 200, 400')],
      ['Share ' + m('540') + ' in ' + m('2 : 3 : 4'), m('120, 180, 240')],
      ['Share ' + m('480') + ' in ' + m('3 : 5 : 8'), m('90, 150, 240')],
      ['The parts of ' + m('2 : 3 : 5'), m('10')],
      ['Ratio ' + m('2 : 3 : 5') + ', first ' + m('12') + ': one part', m('6')],
      ['And all three', m('12, 18, 30')]
    ],
    med: [
      [m('A : B = 2 : 3') + ', ' + m('B : C = 3 : 4'), m('2 : 3 : 4')],
      [m('A : B = 2 : 3') + ', ' + m('B : C = 4 : 5'), m('8 : 12 : 15')],
      [m('A : B = 1 : 2') + ', ' + m('B : C = 3 : 7'), m('3 : 6 : 14')],
      ['Ratio ' + m('1 : 4 : 6') + ', second ' + m('20'), m('5, 20, 30')],
      ['Ratio ' + m('3 : 4 : 5') + ', third ' + m('35'), m('21, 28, 35')],
      ['Concrete ' + m('1 : 2 : 4') + ' with ' + m('150') + ' kg cement', m('1050') + ' kg'],
      ['A salad ' + m('3 : 2 : 1') + ' of ' + m('600') + ' g', m('300, 200, 100') + ' g']
    ],
    hard: [
      ['Brass ' + m('7 : 3') + ' in ' + m('500') + ' g: the copper', m('350') + ' g'],
      ['A mix ' + m('2 : 3 : 5') + ' with ' + m('60') + ' g of the largest part: the total', m('120') + ' g'],
      [m('A : B = 3 : 4') + ', ' + m('B : C = 6 : 7') + ': find ' + m('A : B : C'), m('9 : 12 : 14')],
      ['Share ' + m('2 400') + ' in ' + m('1 : 3 : 4'), m('300, 900, 1200')],
      ['Ratio ' + m('2 : 3 : 4') + ', the difference between largest and smallest is ' + m('30'), m('30, 45, 60')],
      ['If ' + m('A : B = 2 : 5') + ' and ' + m('B : C = 10 : 3') + ', find ' + m('A : C'), m('4 : 3')],
      ['Why must the shared quantity be matched before joining?', 'Otherwise the two ratios measure ' + m('B') + ' in different units']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'One part first; then every share is one multiplication away.',
  homework: [
    'Share ' + m('720') + ' in the ratio ' + m('2 : 3 : 7') + '.',
    'If ' + m('A : B = 3 : 5') + ' and ' + m('B : C = 2 : 3') + ', find ' + m('A : B : C') + '.',
    'A mixture is ' + m('1 : 3 : 6') + ' and uses ' + m('40') + ' g of the first ingredient. Find the total mass.',
    'Three shares are in the ratio ' + m('4 : 5 : 6') + ' and the largest is ' + m('42') + '. Find the other two.',
    'Concrete ' + m('1 : 2 : 4') + ' is needed to a total of ' + m('1 400') + ' kg. Find each ingredient.'
  ]
});

/* ============================== 25 ============================== */
G6_MAT.push({
  id: 'g6-25', stream: 'mat', grade: 6, quarter: 1, lessons: '50–52', hours: 3,
  title: 'Variable ratios — direct and inverse proportion',
  subtitle: 'When one quantity grows with another, and when it shrinks instead.',
  uz: 'Matematika 6, §12', uzPage: 'pp. 141–150',
  cam: 'S7 12', camPage: 'Stage 7, pp. 118–125', wb: 'Exercise 12.5',
  objectives: [
    'Recognise direct proportion and use the unitary method.',
    'Recognise inverse proportion and use the constant product.',
    'Decide which kind a situation is before calculating.',
    'Read a proportional relationship from a table.'
  ],
  terms: [
    ['Direct proportion', 'To‘g‘ri proporsionallik', 'Прямая пропорциональность'],
    ['Inverse proportion', 'Teskari proporsionallik', 'Обратная пропорциональность'],
    ['Unitary method', 'Birlik usuli', 'Метод приведения к единице'],
    ['Constant', 'O‘zgarmas', 'Постоянная'],
    ['Product', 'Ko‘paytma', 'Произведение'],
    ['Rate', 'Tezlik, narx', 'Норма'],
    ['To increase', 'Ortmoq', 'Увеличиваться'],
    ['To decrease', 'Kamaymoq', 'Уменьшаться']
  ],
  timing: [[25, 'Direct proportion'], [30, 'The unitary method'], [30, 'Inverse proportion'], [25, 'Which is which?'], [10, 'Homework']],
  sections: [
    {
      h: 'Direct proportion',
      html: `<p>Two quantities are in <b>direct proportion</b> when doubling one doubles the other. Their
      quotient stays the same.</p>
      ${eq(m(f('y', 'x') + ' = k') + ', a constant', true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Pens</th><th class="m">1</th><th class="m">2</th><th class="m">5</th><th class="m">8</th></tr></thead>
      <tbody>
        <tr><td>cost, sum</td><td class="m">3000</td><td class="m">6000</td><td class="m">15 000</td><td class="m">24 000</td></tr>
        <tr><td class="m">cost ÷ pens</td><td class="m">3000</td><td class="m">3000</td><td class="m">3000</td><td class="m">3000</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The constant is the price of one</div>
      In every direct proportion the constant has a meaning: the cost of one pen, the distance in one
      hour, the mass of one metre. Finding it is the whole method.</div>`
    },
    {
      h: 'The unitary method',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>One unit</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>${m('5')} pens cost ${m('15 000')}: ${m('8')} pens</td><td class="m">3000</td><td class="m">24 000</td></tr>
        <tr><td>${m('4')} m of cloth costs ${m('60 000')}: ${m('7')} m</td><td class="m">15 000</td><td class="m">105 000</td></tr>
        <tr><td>a car does ${m('180')} km in ${m('3')} h: in ${m('5')} h</td><td class="m">60 km</td><td class="m">300 km</td></tr>
        <tr><td>${m('6')} identical books weigh ${m('2.4')} kg: ${m('10')} books</td><td class="m">0.4 kg</td><td class="m">4 kg</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Divide, then multiply</div>
      Down to one, then up to what is asked. Two operations, in that order, solve every direct-proportion
      problem in the course.</div>`
    },
    {
      h: 'Inverse proportion',
      html: `<p>Two quantities are in <b>inverse proportion</b> when doubling one halves the other. Their
      product stays the same.</p>
      ${eq(m('xy = k') + ', a constant', true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Workers</th><th class="m">2</th><th class="m">3</th><th class="m">4</th><th class="m">6</th></tr></thead>
      <tbody>
        <tr><td>days</td><td class="m">12</td><td class="m">8</td><td class="m">6</td><td class="m">4</td></tr>
        <tr><td>product</td><td class="m">24</td><td class="m">24</td><td class="m">24</td><td class="m">24</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The constant is the size of the job</div>
      ${m('24')} worker-days is the work itself, whoever does it. Once that number is found, any number of
      workers can be answered by dividing.</div>`
    },
    {
      h: 'Which is which?',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Situation</th><th>Kind</th><th>Constant</th></tr></thead>
      <tbody>
        <tr><td>cost of ${m('n')} identical pens</td><td>direct</td><td>the price of one</td></tr>
        <tr><td>distance in ${m('t')} hours at a fixed speed</td><td>direct</td><td>the speed</td></tr>
        <tr><td>workers and days for one job</td><td>inverse</td><td>worker-days</td></tr>
        <tr><td>speed and time for a fixed distance</td><td>inverse</td><td>the distance</td></tr>
        <tr><td>taps and time to fill a tank</td><td>inverse</td><td>tap-minutes</td></tr>
        <tr><td>a person's age and height</td><td>neither</td><td>—</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Not everything that changes together is proportional</span>
      A child twice as old is not twice as tall, and eight workers may get in each other's way. Proportion
      is a model, and the question is always whether it fits.</div>`
    }
  ],
  examples: [
    {
      q: m('5') + ' pens cost ' + m('15 000') + ' sum. What do ' + m('8') + ' cost?',
      steps: [
        ['More pens, more money — direct.', ''],
        ['One pen: ' + m('15 000 ÷ 5 = 3000') + '.', ''],
        ['Eight pens: ' + m('8 · 3000 = 24 000') + '.', '']
      ],
      ans: m('24 000') + ' sum'
    },
    {
      q: m('4') + ' workers finish a job in ' + m('6') + ' days. How long would ' + m('8') + ' take?',
      steps: [
        ['More workers, fewer days — inverse.', ''],
        [m('4 · 6 = 24') + ' worker-days.', ''],
        [m('24 ÷ 8 = 3') + ' days.', '']
      ],
      ans: m('3') + ' days'
    },
    {
      q: 'A car covers ' + m('180') + ' km in ' + m('3') + ' hours at a steady speed. How far in ' + m('5') + ' hours?',
      steps: [
        ['Direct: more time, more distance.', ''],
        ['One hour: ' + m('60') + ' km.', ''],
        ['Five hours: ' + m('300') + ' km.', '']
      ],
      ans: m('300') + ' km'
    }
  ],
  modelNote: 'Ask how long six taps take if three take twenty minutes; the wrong answer of forty is worth hearing aloud before the constant product is introduced.',
  interactive: {
    type: 'quiz',
    title: 'Direct, inverse, or neither?',
    hint: 'Ask what stays constant: the quotient or the product.',
    items: [
      { q: 'The cost of ' + m('n') + ' identical pens:', a: ['direct', 'inverse', 'neither', 'constant'], c: 0, why: 'Both grow together.' },
      { q: 'Workers and days for one job:', a: ['direct', 'inverse', 'neither', 'constant'], c: 1, why: 'The product is fixed.' },
      { q: m('5') + ' pens cost ' + m('15 000') + '; ' + m('8') + ' cost:', a: [m('20 000'), m('24 000'), m('30 000'), m('18 000')], c: 1, why: m('3000') + ' each.' },
      { q: m('4') + ' workers take ' + m('6') + ' days; ' + m('8') + ' take:', a: [m('12'), m('3'), m('2'), m('4')], c: 1, why: m('24 ÷ 8') + '.' },
      { q: 'Speed and time for a fixed distance:', a: ['direct', 'inverse', 'neither', 'constant'], c: 1, why: 'Faster means sooner.' },
      { q: 'In direct proportion the constant is:', a: [m('xy'), m(f('y', 'x')), m('x + y'), m('x − y')], c: 1, why: 'The value of one unit.' },
      { q: 'In inverse proportion the constant is:', a: [m('xy'), m(f('y', 'x')), m('x + y'), m('y − x')], c: 0, why: 'The size of the job.' },
      { q: 'A person’s age and height are:', a: ['directly proportional', 'inversely proportional', 'not proportional', 'constant'], c: 2, why: 'Growth is not steady.' }
    ]
  },
  quiz: [
    { q: 'Direct proportion keeps constant:', a: ['the product', 'the quotient', 'the sum', 'the difference'], c: 1, why: m(f('y', 'x') + ' = k') + '.' },
    { q: 'Inverse proportion keeps constant:', a: ['the product', 'the quotient', 'the sum', 'the difference'], c: 0, why: m('xy = k') + '.' },
    { q: m('4') + ' m of cloth costs ' + m('60 000') + '; ' + m('7') + ' m costs:', a: [m('90 000'), m('105 000'), m('120 000'), m('84 000')], c: 1, why: m('15 000') + ' a metre.' },
    { q: m('6') + ' taps fill a tank in ' + m('4') + ' h; ' + m('8') + ' taps take:', a: [m('3') + ' h', m('5') + ' h', m('2') + ' h', m('6') + ' h'], c: 0, why: m('24 ÷ 8') + '.' },
    { q: 'The unitary method means:', a: ['multiply then divide', 'divide to one, then multiply', 'add', 'take the product'], c: 1, why: 'Down then up.' },
    { q: 'Doubling one quantity halves the other: this is:', a: ['direct', 'inverse', 'neither', 'impossible'], c: 1, why: 'The product is unchanged.' }
  ],
  practice: {
    easy: [
      [m('5') + ' pens cost ' + m('15 000') + ': one pen', m('3000')],
      ['So ' + m('8') + ' pens cost', m('24 000')],
      [m('4') + ' m of cloth costs ' + m('60 000') + ': ' + m('7') + ' m', m('105 000')],
      [m('180') + ' km in ' + m('3') + ' h: in ' + m('5') + ' h', m('300') + ' km'],
      [m('6') + ' books weigh ' + m('2.4') + ' kg: ' + m('10') + ' books', m('4') + ' kg'],
      ['Cost against number of pens is', 'direct'],
      ['Workers against days is', 'inverse']
    ],
    med: [
      [m('4') + ' workers take ' + m('6') + ' days: ' + m('8') + ' workers', m('3') + ' days'],
      [m('6') + ' taps fill a tank in ' + m('4') + ' h: ' + m('8') + ' taps', m('3') + ' h'],
      [m('3') + ' taps take ' + m('20') + ' min: ' + m('6') + ' taps', m('10') + ' min'],
      ['Speed and time for a fixed distance', 'inverse'],
      ['Distance and time at a fixed speed', 'direct'],
      ['Age and height', 'neither'],
      [m('12') + ' workers take ' + m('5') + ' days: ' + m('4') + ' workers', m('15') + ' days']
    ],
    hard: [
      ['If ' + m('y') + ' is inversely proportional to ' + m('x') + ' and ' + m('y = 12') + ' at ' + m('x = 2') + ': ' + m('y') + ' at ' + m('x = 8'), m('3')],
      ['If ' + m('y') + ' is directly proportional to ' + m('x') + ' and ' + m('y = 12') + ' at ' + m('x = 2') + ': ' + m('y') + ' at ' + m('x = 8'), m('48')],
      [m('9') + ' workers take ' + m('8') + ' days; how many for ' + m('6') + ' days?', m('12')],
      ['Food lasts ' + m('30') + ' people ' + m('12') + ' days: for ' + m('40') + ' people', m('9') + ' days'],
      [m('15') + ' m of wire weighs ' + m('600') + ' g: the mass of ' + m('4') + ' m', m('160') + ' g'],
      ['Why is “more workers, more days” never the model?', 'The job is fixed, so the product must be'],
      ['A tap fills a tank in ' + m('12') + ' min: two such taps together', m('6') + ' min']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Name the kind of proportion before doing any arithmetic.',
  homework: [
    m('7') + ' notebooks cost ' + m('42 000') + ' sum. Find the cost of ' + m('11') + '.',
    'A car travels ' + m('240') + ' km in ' + m('4') + ' hours. How far in ' + m('7') + ' hours?',
    m('5') + ' workers finish a job in ' + m('12') + ' days. How long would ' + m('10') + ' take?',
    m('4') + ' taps fill a tank in ' + m('15') + ' minutes. How long would ' + m('6') + ' take?',
    'Say which of these is direct, which inverse and which neither: cost and quantity; speed and time; a pupil’s age and marks.'
  ]
});

/* ============================== 26 ============================== */
G6_MAT.push({
  id: 'g6-26', stream: 'mat', grade: 6, quarter: 1, lessons: '53', hours: 1,
  title: 'Control work 3 — ratio and proportion',
  subtitle: 'Simplifying, sharing, chaining and proportion in one short paper.',
  uz: 'Matematika 6, Nazorat ishi 3', uzPage: 'pp. 109–150',
  cam: 'S7 12 review', camPage: 'Stage 7, pp. 118–125', wb: 'Control paper 3',
  objectives: [
    'Simplify ratios, converting units first.',
    'Share a quantity in a two- and three-part ratio.',
    'Use direct and inverse proportion correctly.',
    'Classify each lost mark and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Ratio', 'Nisbat', 'Отношение'],
    ['To share', 'Taqsimlash', 'Разделить'],
    ['One part', 'Bir ulush', 'Одна часть'],
    ['Direct proportion', 'To‘g‘ri proporsionallik', 'Прямая пропорциональность'],
    ['Inverse proportion', 'Teskari proporsionallik', 'Обратная пропорциональность'],
    ['Units', 'O‘lchov birligi', 'Единицы'],
    ['Diagnosis', 'Tashxis', 'Диагностика']
  ],
  timing: [[2, 'Instructions'], [28, 'The paper'], [8, 'Answers and diagnosis'], [2, 'What comes next']],
  sections: [
    {
      h: 'The paper — 20 marks, 28 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Simplify ${m('24 : 36')} and ${m('75 cm : 3 m')}</td><td class="m">3</td><td>L41</td></tr>
        <tr><td>2</td><td>In ${m('3 : 5')} write each part as a fraction of the whole</td><td class="m">3</td><td>L42–43</td></tr>
        <tr><td>3</td><td>Share ${m('480')} in the ratio ${m('5 : 7')}</td><td class="m">3</td><td>L44–46</td></tr>
        <tr><td>4</td><td>Two shares are in the ratio ${m('7 : 3')} and differ by ${m('24')}: find both</td><td class="m">3</td><td>L44–46</td></tr>
        <tr><td>5</td><td>Share ${m('540')} in the ratio ${m('2 : 3 : 4')}</td><td class="m">3</td><td>L47–49</td></tr>
        <tr><td>6</td><td>${m('7')} books cost ${m('49 000')}: find the cost of ${m('11')}</td><td class="m">3</td><td>L50–52</td></tr>
        <tr><td>7</td><td>${m('5')} workers take ${m('12')} days: how long for ${m('10')}?</td><td class="m">2</td><td>L50–52</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The answers</div>
      ${m('2 : 3')} and ${m('1 : 4')}; ${m(f('3', '8'))} and ${m(f('5', '8'))}; ${m('200')} and ${m('280')};
      ${m('42')} and ${m('18')}; ${m('120, 180, 240')}; ${m('77 000')} sum; ${m('6')} days.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>units not converted</td><td class="m">75 : 3</td><td class="m">75 : 300 = 1 : 4</td></tr>
        <tr><td>denominator taken as the other part</td><td class="m">${f('3', '5')} of the whole</td><td class="m">${f('3', '8')}</td></tr>
        <tr><td>total divided by the wrong number</td><td class="m">480 ÷ 5</td><td class="m">480 ÷ 12</td></tr>
        <tr><td>difference treated as the total</td><td class="m">24 ÷ 10</td><td class="m">24 ÷ 4</td></tr>
        <tr><td>three-part total miscounted</td><td class="m">2 + 3 + 4 = 8</td><td class="m">9</td></tr>
        <tr><td>inverse solved as direct</td><td class="m">24 days</td><td class="m">6 days</td></tr>
        <tr><td>no check</td><td>shares that do not add to the total</td><td>add them back</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'What comes next',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>If you lost marks on</th><th>It returns in</th></tr></thead>
      <tbody>
        <tr><td>Q1–Q2</td><td>percentages, lesson 55 — a percentage is a ratio out of ${m('100')}</td></tr>
        <tr><td>Q3–Q5</td><td>the pie chart, lesson 160, where ${m('360°')} is shared in a ratio</td></tr>
        <tr><td>Q6</td><td>speed, lesson 117 — distance is directly proportional to time</td></tr>
        <tr><td>Q7</td><td>every “more workers, fewer days” problem in the year</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Quarter I ends here</div>
      Directed numbers, algebra, the division of fractions and ratio are done. Quarter II opens with
      percentages, which uses all four.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q4: two shares in ratio ' + m('7 : 3') + ' differ by ' + m('24') + '.',
      steps: [
        ['The difference is ' + m('7 − 3 = 4') + ' parts.', 'Not ' + m('10') + '.'],
        [m('24 ÷ 4 = 6') + ' for one part.', ''],
        [m('7 · 6 = 42') + ' and ' + m('3 · 6 = 18') + '.', 'Check: ' + m('42 − 18 = 24') + ' ✓']
      ],
      ans: m('42') + ' and ' + m('18')
    },
    {
      q: 'Model answer, Q6: ' + m('7') + ' books cost ' + m('49 000') + '; find ' + m('11') + '.',
      steps: [
        ['Direct proportion.', ''],
        ['One book: ' + m('49 000 ÷ 7 = 7000') + '.', ''],
        ['Eleven: ' + m('11 · 7000 = 77 000') + '.', '']
      ],
      ans: m('77 000') + ' sum'
    },
    {
      q: 'Model answer, Q7: ' + m('5') + ' workers take ' + m('12') + ' days; how long for ' + m('10') + '?',
      steps: [
        ['Inverse proportion — more workers, fewer days.', ''],
        [m('5 · 12 = 60') + ' worker-days.', ''],
        [m('60 ÷ 10 = 6') + ' days.', '']
      ],
      ans: m('6') + ' days'
    }
  ],
  modelNote: 'Return Q7 first and ask who doubled the days; naming the mistake as “solved an inverse problem as a direct one” makes it memorable.',
  interactive: {
    type: 'quiz',
    title: 'The block in eight questions',
    hint: 'Units, parts, and which kind of proportion.',
    items: [
      { q: m('24 : 36') + ' simplifies to:', a: [m('2 : 3'), m('3 : 2'), m('4 : 6'), m('1 : 2')], c: 0, why: 'Divide by ' + m('12') + '.' },
      { q: m('75 cm : 3 m') + ' simplifies to:', a: [m('25 : 1'), m('1 : 4'), m('75 : 3'), m('1 : 40')], c: 1, why: 'Convert first.' },
      { q: 'In ' + m('3 : 5') + ' the first part is:', a: [m(f('3', '5')), m(f('3', '8')), m(f('5', '8')), m(f('5', '3'))], c: 1, why: 'Eight parts.' },
      { q: m('480') + ' in ' + m('5 : 7') + ' gives:', a: [m('200, 280'), m('240, 240'), m('180, 300'), m('220, 260')], c: 0, why: 'One part ' + m('40') + '.' },
      { q: 'Ratio ' + m('7 : 3') + ' with difference ' + m('24') + ' gives one part:', a: [m('2.4'), m('4'), m('6'), m('8')], c: 2, why: 'Four parts of difference.' },
      { q: m('540') + ' in ' + m('2 : 3 : 4') + ' gives:', a: [m('120, 180, 240'), m('100, 200, 240'), m('135, 180, 225'), m('90, 180, 270')], c: 0, why: 'Nine parts of ' + m('60') + '.' },
      { q: m('7') + ' books cost ' + m('49 000') + '; ' + m('11') + ' cost:', a: [m('66 000'), m('77 000'), m('70 000'), m('84 000')], c: 1, why: m('7000') + ' each.' },
      { q: m('5') + ' workers take ' + m('12') + ' days; ' + m('10') + ' take:', a: [m('24'), m('6'), m('10'), m('2.4')], c: 1, why: 'Inverse.' }
    ]
  },
  quiz: [
    { q: 'Q1 requires first:', a: ['dividing', 'converting units', 'adding', 'multiplying'], c: 1, why: 'Or the ratio is wrong.' },
    { q: 'Q2 denominator is:', a: ['the other part', 'the total of the parts', 'the first part', m('10')], c: 1, why: 'A fraction of the whole.' },
    { q: 'Q3 divides ' + m('480') + ' by:', a: [m('5'), m('7'), m('12'), m('35')], c: 2, why: 'The total parts.' },
    { q: 'Q4 divides ' + m('24') + ' by:', a: [m('10'), m('7'), m('3'), m('4')], c: 3, why: 'The difference in parts.' },
    { q: 'Q6 is:', a: ['direct', 'inverse', 'neither', 'a ratio'], c: 0, why: 'More books, more money.' },
    { q: 'Q7 is:', a: ['direct', 'inverse', 'neither', 'a ratio'], c: 1, why: 'More workers, fewer days.' }
  ],
  practice: {
    easy: [
      ['Simplify ' + m('24 : 36'), m('2 : 3')],
      ['Simplify ' + m('75 cm : 3 m'), m('1 : 4')],
      ['In ' + m('3 : 5') + ', the first as a fraction', m(f('3', '8'))],
      ['Share ' + m('480') + ' in ' + m('5 : 7'), m('200') + ' and ' + m('280')],
      ['Ratio ' + m('7 : 3') + ', difference ' + m('24'), m('42') + ' and ' + m('18')],
      ['Share ' + m('540') + ' in ' + m('2 : 3 : 4'), m('120, 180, 240')],
      [m('7') + ' books cost ' + m('49 000') + ': ' + m('11') + ' books', m('77 000')]
    ],
    med: [
      [m('5') + ' workers take ' + m('12') + ' days: ' + m('10') + ' workers', m('6') + ' days'],
      ['Simplify ' + m('40 min : 2 h'), m('1 : 3')],
      ['Share ' + m('320') + ' in ' + m('3 : 5'), m('120') + ' and ' + m('200')],
      ['Ratio ' + m('5 : 2') + ', difference ' + m('18'), m('30') + ' and ' + m('12')],
      [m('9') + ' m of cloth costs ' + m('72 000') + ': ' + m('5') + ' m', m('40 000')],
      [m('6') + ' taps fill a tank in ' + m('10') + ' min: ' + m('4') + ' taps', m('15') + ' min'],
      ['In ' + m('2 : 3 : 5') + ', the last as a fraction', m(f('1', '2'))]
    ],
    hard: [
      [m('A : B = 2 : 3') + ', ' + m('B : C = 4 : 5') + ': find ' + m('A : B : C'), m('8 : 12 : 15')],
      ['Share ' + m('1 200') + ' in ' + m('1 : 2 : 3 : 6'), m('100, 200, 300, 600')],
      ['Food for ' + m('20') + ' people lasts ' + m('9') + ' days: for ' + m('15') + ' people', m('12') + ' days'],
      ['A ratio ' + m('4 : 9') + ' with the total ' + m('91'), m('28') + ' and ' + m('63')],
      ['Why is a ratio of ' + m('75 : 3') + ' wrong for ' + m('75 cm : 3 m') + '?', 'The two numbers count different units'],
      ['If ' + m('12') + ' workers take ' + m('10') + ' days, how many take ' + m('8') + '?', m('15')],
      ['Which of Q6 and Q7 keeps a constant product?', 'Q7, the inverse one']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite every question you lost a mark on in full, from the first line.',
  homework: [
    'Rewrite in full every question on which you lost a mark.',
    'Simplify ' + m('45 : 60') + ' and ' + m('90 cm : 2.7 m') + '.',
    'Share ' + m('660') + ' in the ratio ' + m('4 : 7') + '.',
    m('8') + ' pencils cost ' + m('24 000') + ' sum. Find the cost of ' + m('14') + '.',
    m('6') + ' workers take ' + m('15') + ' days. How long would ' + m('9') + ' take?'
  ]
});

/* ============================== 27 ============================== */
G6_MAT.push({
  id: 'g6-27', stream: 'mat', grade: 6, quarter: 1, lessons: '54', hours: 1,
  title: 'Think — ratio in context',
  subtitle: 'Scales on maps and plans, best value in a shop, and ratios that describe the world.',
  uz: 'Matematika 6, o‘ylab ko‘r', uzPage: 'pp. 151–153',
  cam: 'S7 12 application', camPage: 'Stage 7, pp. 118–125', wb: 'Exercise 12.6',
  objectives: [
    'Read and use the scale of a map or plan.',
    'Compare prices by unit cost to find the better value.',
    'Interpret a ratio given in a real context.',
    'Judge whether a proportional model is reasonable.'
  ],
  terms: [
    ['Scale', 'Masshtab', 'Масштаб'],
    ['Map', 'Xarita', 'Карта'],
    ['Plan', 'Reja', 'План'],
    ['Unit cost', 'Birlik narxi', 'Цена за единицу'],
    ['Best value', 'Eng foydali', 'Наиболее выгодно'],
    ['Real distance', 'Haqiqiy masofa', 'Реальное расстояние'],
    ['Model', 'Model', 'Модель'],
    ['Reasonable', 'Maqbul', 'Разумный']
  ],
  timing: [[12, 'Scales'], [12, 'Best value'], [10, 'Ratios in the world'], [6, 'Is the model reasonable?']],
  sections: [
    {
      h: 'Scales',
      html: `<p>A scale is a ratio: ${m('1 : 100 000')} means one centimetre on the map is ${m('100 000')}
      centimetres — one kilometre — on the ground.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Scale</th><th>${m('1 cm')} represents</th><th>${m('5 cm')} represents</th></tr></thead>
      <tbody>
        <tr><td class="m">1 : 100 000</td><td class="m">1 km</td><td class="m">5 km</td></tr>
        <tr><td class="m">1 : 25 000</td><td class="m">250 m</td><td class="m">1.25 km</td></tr>
        <tr><td class="m">1 : 50</td><td class="m">50 cm</td><td class="m">2.5 m</td></tr>
        <tr><td class="m">1 : 200</td><td class="m">2 m</td><td class="m">10 m</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Convert the units at the end, not in the middle</span>
      A scale of ${m('1 : 25 000')} turns ${m('3 cm')} into ${m('75 000 cm')}; only then divide by
      ${m('100 000')} to get ${m('0.75 km')}. Converting halfway through is where the factors of ten go
      missing.</div>`
    },
    {
      h: 'Best value',
      html: `<p>Compare the cost of one unit — or the amount for one sum — and the better buy is
      obvious.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Offer</th><th>Cost</th><th>Per unit</th><th>Verdict</th></tr></thead>
      <tbody>
        <tr><td>${m('3')} pens</td><td class="m">12 000</td><td class="m">4000</td><td>—</td></tr>
        <tr><td>${m('5')} pens</td><td class="m">18 000</td><td class="m">3600</td><td>better</td></tr>
        <tr><td>${m('500')} g of rice</td><td class="m">9 000</td><td class="m">18 a gram</td><td>—</td></tr>
        <tr><td>${m('2')} kg of rice</td><td class="m">32 000</td><td class="m">16 a gram</td><td>better</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The bigger pack usually wins — but not always</div>
      Working out the unit cost takes ten seconds and settles it. Shops rely on customers assuming rather
      than dividing.</div>`
    },
    {
      h: 'Ratios in the world',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Context</th><th>Ratio</th><th>What it tells you</th></tr></thead>
      <tbody>
        <tr><td>a map</td><td class="m">1 : 50 000</td><td>how much the ground is shrunk</td></tr>
        <tr><td>concrete</td><td class="m">1 : 2 : 4</td><td>the recipe for a strong mix</td></tr>
        <tr><td>a school</td><td>${m('1 : 20')} teachers to pupils</td><td>the size of a class</td></tr>
        <tr><td>a photograph enlarged</td><td class="m">1 : 3</td><td>every length trebled</td></tr>
        <tr><td>gears on a bicycle</td><td class="m">2 : 5</td><td>turns of the wheel per pedal turn</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A ratio compresses a whole sentence</div>
      “For every teacher there are twenty pupils” is one line of English; ${m('1 : 20')} is four
      characters, and it can be calculated with.</div>`
    },
    {
      h: 'Is the model reasonable?',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Claim</th><th>Proportional?</th><th>Comment</th></tr></thead>
      <tbody>
        <tr><td>${m('3')} pens cost three times one pen</td><td>yes</td><td>if the price is fixed</td></tr>
        <tr><td>${m('100')} pens cost a hundred times one</td><td>usually not</td><td>bulk discounts</td></tr>
        <tr><td>${m('2')} painters take half the time</td><td>roughly</td><td>up to a point</td></tr>
        <tr><td>${m('50')} painters take a fiftieth of the time</td><td>no</td><td>they cannot all reach the wall</td></tr>
        <tr><td>a child twice as old is twice as tall</td><td>no</td><td>growth is not proportional</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Every model has a range where it works</span>
      Proportion is an excellent description of prices and speeds, and a poor one of growth and crowded
      workplaces. Saying where a model stops working is part of using it well.</div>`
    }
  ],
  examples: [
    {
      q: 'A map has scale ' + m('1 : 25 000') + '. Two towns are ' + m('8 cm') + ' apart on it. How far apart are they really?',
      steps: [
        [m('8 · 25 000 = 200 000') + ' cm.', 'Multiply by the scale.'],
        [m('200 000 ÷ 100 000 = 2') + '.', 'Convert at the end.'],
        [m('2') + ' km.', '']
      ],
      ans: m('2') + ' km'
    },
    {
      q: 'Which is better value: ' + m('3') + ' pens for ' + m('12 000') + ' or ' + m('5') + ' for ' + m('18 000') + '?',
      steps: [
        [m('12 000 ÷ 3 = 4000') + ' each.', ''],
        [m('18 000 ÷ 5 = 3600') + ' each.', ''],
        ['The pack of five is better value.', '']
      ],
      ans: m('5') + ' for ' + m('18 000')
    },
    {
      q: 'A plan of a room has scale ' + m('1 : 50') + '. The room is ' + m('4 m') + ' long. How long is it on the plan?',
      steps: [
        [m('4 m = 400 cm') + '.', ''],
        [m('400 ÷ 50 = 8') + '.', 'Divide, because the plan is smaller.'],
        [m('8') + ' cm.', '']
      ],
      ans: m('8') + ' cm'
    }
  ],
  modelNote: 'Bring a real map and a supermarket receipt; both are ratio problems, and neither looks like a textbook exercise.',
  interactive: {
    type: 'quiz',
    title: 'Scales and best value',
    hint: 'Multiply to go from map to ground, divide to go back.',
    items: [
      { q: 'At ' + m('1 : 100 000') + ', ' + m('1 cm') + ' is:', a: [m('100 m'), m('1 km'), m('10 km'), m('100 km')], c: 1, why: m('100 000') + ' cm.' },
      { q: 'At ' + m('1 : 25 000') + ', ' + m('8 cm') + ' is:', a: [m('2') + ' km', m('20') + ' km', m('200') + ' m', m('25') + ' km'], c: 0, why: m('200 000') + ' cm.' },
      { q: 'At ' + m('1 : 50') + ', a ' + m('4 m') + ' room is drawn:', a: [m('8') + ' cm', m('80') + ' cm', m('2') + ' cm', m('20') + ' cm'], c: 0, why: m('400 ÷ 50') + '.' },
      { q: m('3') + ' pens for ' + m('12 000') + ' cost each:', a: [m('3000'), m('4000'), m('6000'), m('36 000')], c: 1, why: 'Divide.' },
      { q: m('5') + ' for ' + m('18 000') + ' cost each:', a: [m('3600'), m('4000'), m('3000'), m('9000')], c: 0, why: 'Divide.' },
      { q: 'So the better value is:', a: [m('3') + ' for ' + m('12 000'), m('5') + ' for ' + m('18 000'), 'the same', 'cannot say'], c: 1, why: 'Lower unit cost.' },
      { q: m('50') + ' painters taking a fiftieth of the time is:', a: ['reasonable', 'unreasonable', 'certain', 'proportional'], c: 1, why: 'They cannot all work at once.' },
      { q: 'A scale of ' + m('1 : 200') + ' means ' + m('1 cm') + ' is:', a: [m('200') + ' cm', m('2') + ' m', 'both of these', m('200') + ' m'], c: 2, why: 'The same length, two units.' }
    ]
  },
  quiz: [
    { q: 'A map scale is a:', a: ['fraction', 'ratio', 'percentage', 'proportion of area'], c: 1, why: 'Map length to real length.' },
    { q: 'To go from map to ground you:', a: ['divide by the scale', 'multiply by the scale', 'add it', 'square it'], c: 1, why: 'The ground is bigger.' },
    { q: 'To go from ground to map you:', a: ['divide by the scale', 'multiply by the scale', 'subtract it', 'do nothing'], c: 0, why: 'The map is smaller.' },
    { q: 'Best value is found by comparing:', a: ['total prices', 'unit costs', 'pack sizes', 'shops'], c: 1, why: 'Price per unit.' },
    { q: 'At ' + m('1 : 25 000') + ', ' + m('4 cm') + ' is:', a: [m('1') + ' km', m('10') + ' km', m('100') + ' m', m('25') + ' km'], c: 0, why: m('100 000') + ' cm.' },
    { q: 'Proportion describes growth in height:', a: ['well', 'badly', 'exactly', 'always'], c: 1, why: 'Growth is uneven.' }
  ],
  practice: {
    easy: [
      ['At ' + m('1 : 100 000') + ', ' + m('1 cm') + ' represents', m('1') + ' km'],
      ['At ' + m('1 : 25 000') + ', ' + m('1 cm') + ' represents', m('250') + ' m'],
      ['At ' + m('1 : 50') + ', ' + m('1 cm') + ' represents', m('50') + ' cm'],
      ['At ' + m('1 : 100 000') + ', ' + m('5 cm') + ' represents', m('5') + ' km'],
      [m('3') + ' pens for ' + m('12 000') + ': one pen', m('4000')],
      [m('5') + ' pens for ' + m('18 000') + ': one pen', m('3600')],
      ['Which is better value?', 'The pack of five']
    ],
    med: [
      ['At ' + m('1 : 25 000') + ', ' + m('8 cm') + ' represents', m('2') + ' km'],
      ['At ' + m('1 : 50') + ', a ' + m('4 m') + ' room is drawn', m('8') + ' cm'],
      [m('500') + ' g for ' + m('9 000') + ' or ' + m('2') + ' kg for ' + m('32 000'), 'The ' + m('2') + ' kg pack'],
      ['A photo enlarged ' + m('1 : 3') + ': a ' + m('5 cm') + ' side becomes', m('15') + ' cm'],
      ['At ' + m('1 : 200') + ', ' + m('7 cm') + ' represents', m('14') + ' m'],
      ['A ' + m('12 m') + ' wall at ' + m('1 : 200'), m('6') + ' cm'],
      ['Teachers to pupils ' + m('1 : 20') + ' with ' + m('300') + ' pupils', m('15') + ' teachers']
    ],
    hard: [
      ['At ' + m('1 : 50 000') + ', a real distance of ' + m('3.5') + ' km is drawn', m('7') + ' cm'],
      ['A map at ' + m('1 : 25 000') + ' and one at ' + m('1 : 100 000') + ': which shows more detail?', 'The ' + m('1 : 25 000')],
      [m('750') + ' g for ' + m('15 000') + ' or ' + m('1.2') + ' kg for ' + m('22 800'), 'The ' + m('1.2') + ' kg pack, at ' + m('19') + ' a gram'],
      ['A model car at ' + m('1 : 43') + ' is ' + m('10 cm') + ' long: the real car', m('4.3') + ' m'],
      ['Why is “' + m('100') + ' pens cost ' + m('100') + ' times one” often false?', 'Bulk prices are usually discounted'],
      ['Gears ' + m('2 : 5') + ': wheel turns for ' + m('30') + ' pedal turns', m('75')],
      ['At what scale is ' + m('1 cm') + ' equal to ' + m('1 m') + '?', m('1 : 100')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Convert units only at the end of the calculation.',
  homework: [
    'At a scale of ' + m('1 : 25 000') + ', find the real distance for ' + m('6 cm') + '.',
    'At a scale of ' + m('1 : 50') + ', find the plan length of a ' + m('7 m') + ' wall.',
    'Which is better value: ' + m('4') + ' notebooks for ' + m('20 000') + ' or ' + m('7') + ' for ' + m('33 600') + '?',
    'A map shows two towns ' + m('4.5 cm') + ' apart at ' + m('1 : 200 000') + '. Find the real distance.',
    'Give one situation where proportion describes the world well and one where it does not.'
  ]
});

/* ============================== 28 ============================== */
G6_MAT.push({
  id: 'g6-28', stream: 'mat', grade: 6, quarter: 2, lessons: '55', hours: 1,
  title: 'Recall — percentages',
  subtitle: 'A percentage is a fraction with denominator ' + m('100') + ' — and everything else follows from that.',
  uz: 'Matematika 6, takrorlash', uzPage: 'pp. 154–157',
  cam: 'S7 10 entry', camPage: 'Stage 7, pp. 96–100', wb: 'Exercise 10.1',
  objectives: [
    'Convert between percentages, fractions and decimals.',
    'Find a percentage of a quantity.',
    'Express one quantity as a percentage of another.',
    'Recognise the percentages worth knowing by heart.'
  ],
  terms: [
    ['Percentage', 'Foiz', 'Процент'],
    ['Per cent', 'Yuzdan', 'Со ста'],
    ['Fraction', 'Kasr', 'Дробь'],
    ['Decimal', 'O‘nli kasr', 'Десятичная дробь'],
    ['To convert', 'O‘girmoq', 'Преобразовать'],
    ['Of a quantity', 'Miqdordan', 'От величины'],
    ['Whole', 'Butun', 'Целое'],
    ['Equivalent', 'Teng kuchli', 'Равный']
  ],
  timing: [[10, 'What a percentage is'], [12, 'The three forms'], [12, 'Finding a percentage of an amount'], [6, 'One quantity as a percentage of another']],
  sections: [
    {
      h: 'What a percentage is',
      html: `${eq(m('p% = ' + f('p', '100')), true)}
      <p>“Per cent” means “out of a hundred”, so ${m('37%')} is ${m(f('37', '100'))} and nothing more
      mysterious.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>Means</th></tr></thead>
      <tbody>
        <tr><td class="m">50%</td><td>half</td></tr>
        <tr><td class="m">25%</td><td>a quarter</td></tr>
        <tr><td class="m">10%</td><td>a tenth</td></tr>
        <tr><td class="m">100%</td><td>all of it</td></tr>
        <tr><td class="m">150%</td><td>one and a half times it</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Percentages exist to make comparison easy</div>
      Is ${m(f('17', '25'))} better than ${m(f('27', '40'))}? As ${m('68%')} and ${m('67.5%')} the answer
      is immediate. A common denominator of ${m('100')} is the whole point.</div>`
    },
    {
      h: 'The three forms',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Percentage</th><th>Fraction</th><th>Decimal</th></tr></thead>
      <tbody>
        <tr><td class="m">10%</td><td class="m">${f('1', '10')}</td><td class="m">0.1</td></tr>
        <tr><td class="m">20%</td><td class="m">${f('1', '5')}</td><td class="m">0.2</td></tr>
        <tr><td class="m">25%</td><td class="m">${f('1', '4')}</td><td class="m">0.25</td></tr>
        <tr><td class="m">50%</td><td class="m">${f('1', '2')}</td><td class="m">0.5</td></tr>
        <tr><td class="m">75%</td><td class="m">${f('3', '4')}</td><td class="m">0.75</td></tr>
        <tr><td class="m">12.5%</td><td class="m">${f('1', '8')}</td><td class="m">0.125</td></tr>
        <tr><td class="m">33${f('1', '3')}%</td><td class="m">${f('1', '3')}</td><td class="m">0.333…</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Percentage to decimal: divide by ${m('100')}</div>
      And decimal to percentage: multiply by ${m('100')}. The digits move two places, and which way they
      move is settled by asking whether the answer should be bigger or smaller.</div>`
    },
    {
      h: 'Finding a percentage of an amount',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Task</th><th>Method</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">10%</td><td>divide by ${m('10')}</td><td class="m">24</td></tr>
        <tr><td class="m">20%</td><td>double the ${m('10%')}</td><td class="m">48</td></tr>
        <tr><td class="m">5%</td><td>half the ${m('10%')}</td><td class="m">12</td></tr>
        <tr><td class="m">25%</td><td>divide by ${m('4')}</td><td class="m">60</td></tr>
        <tr><td class="m">15%</td><td class="m">10% + 5%</td><td class="m">36</td></tr>
        <tr><td class="m">37%</td><td class="m">0.37 · 240</td><td class="m">88.8</td></tr>
      </tbody></table></div>
      <p>Every row is a percentage of ${m('240')}.</p>
      <div class="keybox"><div class="klabel">Build awkward percentages from easy ones</div>
      ${m('10%')}, ${m('5%')} and ${m('1%')} are all one division away, and ${m('35%')} is
      ${m('10% + 10% + 10% + 5%')}. Mental percentage work is nearly all addition.</div>`
    },
    {
      h: 'One quantity as a percentage of another',
      html: `${eq('percentage ' + m('= ' + f('part', 'whole') + ' × 100%'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Part</th><th>Whole</th><th>Working</th><th>Percentage</th></tr></thead>
      <tbody>
        <tr><td class="m">17</td><td class="m">25</td><td class="m">${f('17', '25')} · 100</td><td class="m">68%</td></tr>
        <tr><td class="m">27</td><td class="m">40</td><td class="m">${f('27', '40')} · 100</td><td class="m">67.5%</td></tr>
        <tr><td class="m">18</td><td class="m">24</td><td class="m">${f('18', '24')} · 100</td><td class="m">75%</td></tr>
        <tr><td class="m">9</td><td class="m">60</td><td class="m">${f('9', '60')} · 100</td><td class="m">15%</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The whole goes underneath</span>
      “What percentage of ${m('40')} is ${m('27')}” puts ${m('40')} in the denominator. Swapping them gives
      ${m('148%')}, which the sense check rejects at once.</div>`
    }
  ],
  examples: [
    {
      q: 'Find ' + m('15%') + ' of ' + m('240') + '.',
      steps: [
        [m('10%') + ' is ' + m('24') + '.', ''],
        [m('5%') + ' is half of that, ' + m('12') + '.', ''],
        [m('24 + 12 = 36'), '']
      ],
      ans: m('36')
    },
    {
      q: 'What percentage of ' + m('40') + ' is ' + m('27') + '?',
      steps: [
        [m(f('27', '40')), 'The whole underneath.'],
        [m('· 100 = 67.5'), ''],
        [m('67.5%'), '']
      ],
      ans: m('67.5%')
    },
    {
      q: 'Which is better, ' + m('17') + ' out of ' + m('25') + ' or ' + m('27') + ' out of ' + m('40') + '?',
      steps: [
        [m(f('17', '25') + ' = 68%'), ''],
        [m(f('27', '40') + ' = 67.5%'), ''],
        ['The first, by half a percentage point.', 'Impossible to see without converting.']
      ],
      ans: m('17') + ' out of ' + m('25')
    }
  ],
  modelNote: 'Put two test scores out of different totals on the board and ask which is better; the class reaches for percentages without being told to.',
  interactive: {
    type: 'quiz',
    title: 'Percentage, fraction, decimal',
    hint: 'Divide by ' + m('100') + ' one way, multiply by ' + m('100') + ' the other.',
    items: [
      { q: m('25%') + ' as a fraction:', a: [m(f('1', '4')), m(f('1', '25')), m(f('25', '1')), m(f('1', '5'))], c: 0, why: m(f('25', '100')) + '.' },
      { q: m('0.2') + ' as a percentage:', a: [m('2%'), m('20%'), m('0.2%'), m('200%')], c: 1, why: 'Multiply by ' + m('100') + '.' },
      { q: m('10%') + ' of ' + m('240') + ':', a: [m('2.4'), m('24'), m('240'), m('12')], c: 1, why: 'Divide by ' + m('10') + '.' },
      { q: m('5%') + ' of ' + m('240') + ':', a: [m('6'), m('12'), m('24'), m('48')], c: 1, why: 'Half the ' + m('10%') + '.' },
      { q: m('15%') + ' of ' + m('240') + ':', a: [m('30'), m('36'), m('40'), m('48')], c: 1, why: m('24 + 12') + '.' },
      { q: m('27') + ' as a percentage of ' + m('40') + ':', a: [m('67.5%'), m('148%'), m('54%'), m('75%')], c: 0, why: 'The whole underneath.' },
      { q: m('18') + ' as a percentage of ' + m('24') + ':', a: [m('60%'), m('75%'), m('80%'), m('133%')], c: 1, why: m(f('3', '4')) + '.' },
      { q: m('150%') + ' of a number is:', a: ['half of it', 'one and a half times it', 'impossible', 'the same'], c: 1, why: 'More than the whole.' }
    ]
  },
  quiz: [
    { q: m('37%') + ' means:', a: [m(f('37', '10')), m(f('37', '100')), m(f('100', '37')), m('37')], c: 1, why: 'Out of a hundred.' },
    { q: m('0.75') + ' as a percentage:', a: [m('7.5%'), m('75%'), m('0.75%'), m('750%')], c: 1, why: 'Multiply by ' + m('100') + '.' },
    { q: m(f('1', '8')) + ' as a percentage:', a: [m('8%'), m('12.5%'), m('18%'), m('1.8%')], c: 1, why: m('1 ÷ 8 = 0.125') + '.' },
    { q: m('25%') + ' of ' + m('240') + ':', a: [m('48'), m('60'), m('80'), m('96')], c: 1, why: 'Divide by ' + m('4') + '.' },
    { q: 'To write a part as a percentage you divide by:', a: ['the part', 'the whole', m('100'), 'the difference'], c: 1, why: 'Then multiply by ' + m('100') + '.' },
    { q: m('9') + ' as a percentage of ' + m('60') + ':', a: [m('9%'), m('15%'), m('54%'), m('6.7%')], c: 1, why: m(f('9', '60')) + '.' }
  ],
  practice: {
    easy: [
      [m('25%') + ' as a fraction', m(f('1', '4'))],
      [m('20%') + ' as a decimal', m('0.2')],
      [m('0.75') + ' as a percentage', m('75%')],
      [m(f('1', '8')) + ' as a percentage', m('12.5%')],
      [m('10%') + ' of ' + m('240'), m('24')],
      [m('25%') + ' of ' + m('240'), m('60')],
      [m('50%') + ' of ' + m('240'), m('120')]
    ],
    med: [
      [m('5%') + ' of ' + m('240'), m('12')],
      [m('15%') + ' of ' + m('240'), m('36')],
      [m('37%') + ' of ' + m('240'), m('88.8')],
      [m('17') + ' as a percentage of ' + m('25'), m('68%')],
      [m('27') + ' as a percentage of ' + m('40'), m('67.5%')],
      [m('18') + ' as a percentage of ' + m('24'), m('75%')],
      [m('9') + ' as a percentage of ' + m('60'), m('15%')]
    ],
    hard: [
      [m('35%') + ' of ' + m('240') + ' by building from ' + m('10%'), m('84')],
      [m('12.5%') + ' of ' + m('320'), m('40')],
      ['Which is better, ' + m('17') + '/' + m('25') + ' or ' + m('27') + '/' + m('40') + '?', m('17') + '/' + m('25') + ', at ' + m('68%')],
      [m('150%') + ' of ' + m('60'), m('90')],
      [m('1%') + ' of ' + m('240') + ', and hence ' + m('3%'), m('2.4') + ' and ' + m('7.2')],
      ['A test mark of ' + m('45') + ' out of ' + m('60') + ' as a percentage', m('75%')],
      ['Why do percentages make comparison easy?', 'Every fraction is put over the same denominator, ' + m('100')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Build awkward percentages from ' + m('10%') + ', ' + m('5%') + ' and ' + m('1%') + '.',
  homework: [
    'Convert ' + m('45%') + ', ' + m('8%') + ' and ' + m('130%') + ' to decimals and to fractions in lowest terms.',
    'Find ' + m('10%') + ', ' + m('5%') + ' and ' + m('15%') + ' of ' + m('360') + '.',
    'Find ' + m('35%') + ' of ' + m('480') + '.',
    'Write ' + m('21') + ' as a percentage of ' + m('35') + '.',
    'Which is the better mark: ' + m('19') + ' out of ' + m('25') + ' or ' + m('30') + ' out of ' + m('40') + '?'
  ]
});

/* ============================== 29 ============================== */
G6_MAT.push({
  id: 'g6-29', stream: 'mat', grade: 6, quarter: 2, lessons: '56–57', hours: 2,
  title: 'Multiplying and dividing by powers of ten',
  subtitle: 'A Cambridge insert: the digits move, the point stays — and why that is the better picture.',
  uz: 'Matematika 6, qo‘shimcha mavzu', uzPage: 'pp. 158–163',
  cam: 'S7 3.1', camPage: 'Stage 7, pp. 32–36', wb: 'Exercise 3.1',
  objectives: [
    'Multiply and divide by ' + m('10, 100') + ' and ' + m('1000') + '.',
    'Multiply and divide by ' + m('0.1') + ' and ' + m('0.01') + '.',
    'Explain the effect in terms of place value.',
    'Use the rules to convert between units.'
  ],
  terms: [
    ['Place value', 'Xona qiymati', 'Разрядное значение'],
    ['Power of ten', 'O‘nning darajasi', 'Степень десяти'],
    ['Decimal point', 'O‘nli nuqta (vergul)', 'Десятичная запятая'],
    ['To shift', 'Siljimoq', 'Сдвигаться'],
    ['Tenth', 'O‘ndan bir', 'Десятая'],
    ['Hundredth', 'Yuzdan bir', 'Сотая'],
    ['Zero as a placeholder', 'O‘rin to‘ldiruvchi nol', 'Ноль как разделитель'],
    ['Unit conversion', 'Birliklarni almashtirish', 'Перевод единиц']
  ],
  timing: [[20, 'Place value'], [25, 'Multiplying and dividing by ' + m('10, 100, 1000')], [25, 'By ' + m('0.1') + ' and ' + m('0.01')], [8, 'Converting units'], [2, 'Homework']],
  sections: [
    {
      h: 'Place value',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Column</th><th>Hundreds</th><th>Tens</th><th>Units</th><th>Tenths</th><th>Hundredths</th></tr></thead>
      <tbody>
        <tr><td>value</td><td class="m">100</td><td class="m">10</td><td class="m">1</td><td class="m">${f('1', '10')}</td><td class="m">${f('1', '100')}</td></tr>
        <tr><td class="m">3.47</td><td>—</td><td>—</td><td class="m">3</td><td class="m">4</td><td class="m">7</td></tr>
        <tr><td class="m">347</td><td class="m">3</td><td class="m">4</td><td class="m">7</td><td>—</td><td>—</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Each column is ten times the one on its right</div>
      Multiplying by ${m('10')} moves every digit one column to the left, which is the same thing as
      moving the point one place to the right. The first description is the true one; the second is a
      shortcut.</div>`
    },
    {
      h: 'Multiplying and dividing by ' + m('10, 100, 1000'),
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Start</th><th class="m">× 10</th><th class="m">× 100</th><th class="m">÷ 10</th><th class="m">÷ 100</th></tr></thead>
      <tbody>
        <tr><td class="m">3.47</td><td class="m">34.7</td><td class="m">347</td><td class="m">0.347</td><td class="m">0.0347</td></tr>
        <tr><td class="m">58</td><td class="m">580</td><td class="m">5800</td><td class="m">5.8</td><td class="m">0.58</td></tr>
        <tr><td class="m">0.6</td><td class="m">6</td><td class="m">60</td><td class="m">0.06</td><td class="m">0.006</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Zeros hold the empty columns</span>
      ${m('0.347 ÷ 10')} is ${m('0.0347')}: a zero has to appear in the tenths column, because that column
      is now empty. Leaving it out changes the number tenfold.</div>`
    },
    {
      h: 'By ' + m('0.1') + ' and ' + m('0.01'),
      html: `<p>Multiplying by ${m('0.1')} is the same as dividing by ${m('10')} — and dividing by
      ${m('0.1')} is the same as multiplying by ${m('10')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Operation</th><th>Same as</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td class="m">× 0.1</td><td class="m">÷ 10</td><td class="m">47 · 0.1 = 4.7</td></tr>
        <tr><td class="m">× 0.01</td><td class="m">÷ 100</td><td class="m">47 · 0.01 = 0.47</td></tr>
        <tr><td class="m">÷ 0.1</td><td class="m">× 10</td><td class="m">47 ÷ 0.1 = 470</td></tr>
        <tr><td class="m">÷ 0.01</td><td class="m">× 100</td><td class="m">47 ÷ 0.01 = 4700</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Multiplying can make a number smaller</span>
      ${m('47 · 0.1 = 4.7')}. “Multiplication makes bigger” is only true for multipliers above ${m('1')} —
      one of the most useful facts of the year to unlearn.</div>`
    },
    {
      h: 'Converting units',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Conversion</th><th>Operation</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>m to cm</td><td class="m">× 100</td><td class="m">3.5 m = 350 cm</td></tr>
        <tr><td>cm to m</td><td class="m">÷ 100</td><td class="m">47 cm = 0.47 m</td></tr>
        <tr><td>km to m</td><td class="m">× 1000</td><td class="m">2.4 km = 2400 m</td></tr>
        <tr><td>g to kg</td><td class="m">÷ 1000</td><td class="m">750 g = 0.75 kg</td></tr>
        <tr><td>l to ml</td><td class="m">× 1000</td><td class="m">1.5 l = 1500 ml</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Smaller unit, bigger number</div>
      A metre is many centimetres, so the number of centimetres is larger. Deciding whether to multiply or
      divide is a question about the units, not about the digits.</div>`
    }
  ],
  examples: [
    {
      q: 'Compute ' + m('3.47 · 100') + ' and ' + m('3.47 ÷ 100') + '.',
      steps: [
        ['Each digit moves two columns left: ' + m('347') + '.', ''],
        ['Each digit moves two columns right: ' + m('0.0347') + '.', 'Zeros fill the empty columns.']
      ],
      ans: m('347') + ' and ' + m('0.0347')
    },
    {
      q: 'Compute ' + m('47 ÷ 0.1') + '.',
      steps: [
        ['Dividing by ' + m('0.1') + ' is multiplying by ' + m('10') + '.', ''],
        ['How many tenths are in ' + m('47') + '? Ten in each unit.', ''],
        [m('470'), '']
      ],
      ans: m('470')
    },
    {
      q: 'Convert ' + m('750') + ' g to kilograms and ' + m('2.4') + ' km to metres.',
      steps: [
        ['A kilogram is ' + m('1000') + ' g, so divide: ' + m('0.75') + ' kg.', ''],
        ['A kilometre is ' + m('1000') + ' m, so multiply: ' + m('2400') + ' m.', '']
      ],
      ans: m('0.75') + ' kg and ' + m('2400') + ' m'
    }
  ],
  modelNote: 'Write the place-value columns once on the board and move the digits along it rather than the point; the zeros then appear where they are needed without a rule.',
  interactive: {
    type: 'quiz',
    title: 'Which way do the digits move?',
    hint: 'Bigger answer means left; smaller means right.',
    items: [
      { q: m('3.47 · 10') + ' equals:', a: [m('34.7'), m('0.347'), m('347'), m('3.470')], c: 0, why: 'One column left.' },
      { q: m('3.47 ÷ 100') + ' equals:', a: [m('0.347'), m('0.0347'), m('347'), m('34.7')], c: 1, why: 'Two columns right.' },
      { q: m('58 ÷ 10') + ' equals:', a: [m('5.8'), m('0.58'), m('580'), m('5800')], c: 0, why: 'One column right.' },
      { q: m('47 · 0.1') + ' equals:', a: [m('470'), m('4.7'), m('0.47'), m('4700')], c: 1, why: 'Same as ' + m('÷ 10') + '.' },
      { q: m('47 ÷ 0.1') + ' equals:', a: [m('4.7'), m('470'), m('0.47'), m('4700')], c: 1, why: 'Same as ' + m('· 10') + '.' },
      { q: m('47 ÷ 0.01') + ' equals:', a: [m('470'), m('4700'), m('0.47'), m('4.7')], c: 1, why: 'Same as ' + m('· 100') + '.' },
      { q: m('3.5') + ' m in centimetres:', a: [m('35'), m('350'), m('0.035'), m('3500')], c: 1, why: m('× 100') + '.' },
      { q: m('750') + ' g in kilograms:', a: [m('7.5'), m('0.75'), m('75'), m('0.075')], c: 1, why: m('÷ 1000') + '.' }
    ]
  },
  quiz: [
    { q: 'Multiplying by ' + m('10') + ' moves each digit:', a: ['one column left', 'one column right', 'two left', 'nowhere'], c: 0, why: 'Ten times bigger.' },
    { q: 'Dividing by ' + m('100') + ' moves each digit:', a: ['two left', 'two right', 'one right', 'nowhere'], c: 1, why: 'A hundred times smaller.' },
    { q: 'Multiplying by ' + m('0.1') + ' is the same as:', a: ['dividing by ' + m('10'), 'multiplying by ' + m('10'), 'adding ' + m('0.1'), 'nothing'], c: 0, why: 'A tenth of it.' },
    { q: 'Dividing by ' + m('0.01') + ' is the same as:', a: ['dividing by ' + m('100'), 'multiplying by ' + m('100'), 'multiplying by ' + m('0.01'), 'nothing'], c: 1, why: 'Many hundredths fit.' },
    { q: m('0.347 ÷ 10') + ' equals:', a: [m('0.0347'), m('0.347'), m('3.47'), m('0.00347')], c: 0, why: 'A zero fills the tenths.' },
    { q: 'To change metres to centimetres:', a: ['divide by ' + m('100'), 'multiply by ' + m('100'), 'multiply by ' + m('10'), 'divide by ' + m('10')], c: 1, why: 'Smaller unit, bigger number.' }
  ],
  practice: {
    easy: [
      [m('3.47 · 10'), m('34.7')],
      [m('3.47 · 100'), m('347')],
      [m('3.47 ÷ 10'), m('0.347')],
      [m('3.47 ÷ 100'), m('0.0347')],
      [m('58 · 100'), m('5800')],
      [m('58 ÷ 10'), m('5.8')],
      [m('0.6 · 100'), m('60')]
    ],
    med: [
      [m('47 · 0.1'), m('4.7')],
      [m('47 · 0.01'), m('0.47')],
      [m('47 ÷ 0.1'), m('470')],
      [m('47 ÷ 0.01'), m('4700')],
      [m('3.5') + ' m in cm', m('350')],
      [m('47') + ' cm in m', m('0.47')],
      [m('750') + ' g in kg', m('0.75')]
    ],
    hard: [
      [m('0.06 ÷ 0.1'), m('0.6')],
      [m('0.06 · 1000'), m('60')],
      [m('2.4') + ' km in cm', m('240 000')],
      [m('1.5') + ' l in ml', m('1500')],
      [m('0.008 · 100'), m('0.8')],
      ['Why does ' + m('47 · 0.1') + ' make the number smaller?', 'The multiplier is less than one'],
      [m('3 200') + ' ml in litres', m('3.2')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Ask first whether the answer should be bigger or smaller; that settles the direction.',
  homework: [
    'Compute ' + m('5.28 · 10') + ', ' + m('5.28 · 1000') + ' and ' + m('5.28 ÷ 100') + '.',
    'Compute ' + m('36 · 0.1') + ' and ' + m('36 ÷ 0.01') + '.',
    'Convert ' + m('4.7') + ' m to centimetres and ' + m('86') + ' cm to metres.',
    'Convert ' + m('3.6') + ' kg to grams and ' + m('450') + ' ml to litres.',
    'Explain in one sentence why ' + m('÷ 0.1') + ' makes a number larger.'
  ]
});

/* ============================== 30 ============================== */
G6_MAT.push({
  id: 'g6-30', stream: 'mat', grade: 6, quarter: 2, lessons: '58', hours: 1,
  title: 'Rounding to a given accuracy',
  subtitle: 'A Cambridge insert: which digit decides, and what a rounded answer really claims.',
  uz: 'Matematika 6, qo‘shimcha mavzu', uzPage: 'pp. 164–166',
  cam: 'S7 3.2', camPage: 'Stage 7, pp. 36–40', wb: 'Exercise 3.2',
  objectives: [
    'Round to the nearest ten, hundred and thousand.',
    'Round to a given number of decimal places.',
    'Round to a given number of significant figures.',
    'Estimate a calculation by rounding first.'
  ],
  terms: [
    ['To round', 'Yaxlitlash', 'Округлить'],
    ['Nearest', 'Eng yaqin', 'Ближайший'],
    ['Decimal place', 'O‘nli xona', 'Десятичный знак'],
    ['Significant figure', 'Muhim raqam', 'Значащая цифра'],
    ['Deciding digit', 'Hal qiluvchi raqam', 'Решающая цифра'],
    ['Estimate', 'Taxminiy hisob', 'Оценка'],
    ['Accuracy', 'Aniqlik', 'Точность'],
    ['Approximately', 'Taxminan', 'Приблизительно']
  ],
  timing: [[10, 'The deciding digit'], [12, 'Decimal places'], [12, 'Significant figures'], [6, 'Estimating']],
  sections: [
    {
      h: 'The deciding digit',
      html: `<p>Look at the digit <b>immediately after</b> the place you are rounding to. If it is ${m('5')}
      or more, round up; otherwise leave the digit alone.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Number</th><th>To the nearest ten</th><th>Hundred</th><th>Thousand</th></tr></thead>
      <tbody>
        <tr><td class="m">3 472</td><td class="m">3 470</td><td class="m">3 500</td><td class="m">3 000</td></tr>
        <tr><td class="m">2 851</td><td class="m">2 850</td><td class="m">2 900</td><td class="m">3 000</td></tr>
        <tr><td class="m">795</td><td class="m">800</td><td class="m">800</td><td class="m">1 000</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Only one digit decides</span>
      For ${m('3 472')} to the nearest hundred, the deciding digit is the ${m('7')}, not the ${m('2')}.
      Looking further along and “rounding twice” gives the wrong answer.</div>`
    },
    {
      h: 'Decimal places',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Number</th><th class="m">1 d.p.</th><th class="m">2 d.p.</th><th>Whole number</th></tr></thead>
      <tbody>
        <tr><td class="m">3.472</td><td class="m">3.5</td><td class="m">3.47</td><td class="m">3</td></tr>
        <tr><td class="m">0.0851</td><td class="m">0.1</td><td class="m">0.09</td><td class="m">0</td></tr>
        <tr><td class="m">9.96</td><td class="m">10.0</td><td class="m">9.96</td><td class="m">10</td></tr>
        <tr><td class="m">2.345</td><td class="m">2.3</td><td class="m">2.35</td><td class="m">2</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">${m('9.96')} to one decimal place is ${m('10.0')}, not ${m('10')}</div>
      The rounding can carry into the next column, and the zero must stay to show the accuracy claimed.
      Writing ${m('10')} claims a whole number; ${m('10.0')} claims a tenth.</div>`
    },
    {
      h: 'Significant figures',
      html: `<p>Significant figures are counted from the first non-zero digit, whatever the size of the
      number.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Number</th><th class="m">1 s.f.</th><th class="m">2 s.f.</th><th class="m">3 s.f.</th></tr></thead>
      <tbody>
        <tr><td class="m">3 472</td><td class="m">3 000</td><td class="m">3 500</td><td class="m">3 470</td></tr>
        <tr><td class="m">0.0851</td><td class="m">0.09</td><td class="m">0.085</td><td class="m">0.0851</td></tr>
        <tr><td class="m">205.6</td><td class="m">200</td><td class="m">210</td><td class="m">206</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Leading zeros are not significant; zeros between digits are</span>
      In ${m('0.0851')} the first significant figure is the ${m('8')}. In ${m('205.6')} the ${m('0')}
      counts, because it sits between two significant digits.</div>`
    },
    {
      h: 'Estimating',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Calculation</th><th>Rounded</th><th>Estimate</th><th>Exact</th></tr></thead>
      <tbody>
        <tr><td class="m">38 · 21</td><td class="m">40 · 20</td><td class="m">800</td><td class="m">798</td></tr>
        <tr><td class="m">4 187 ÷ 21</td><td class="m">4 000 ÷ 20</td><td class="m">200</td><td class="m">199.4</td></tr>
        <tr><td class="m">6.9 · 5.2</td><td class="m">7 · 5</td><td class="m">35</td><td class="m">35.88</td></tr>
        <tr><td class="m">297 + 405</td><td class="m">300 + 400</td><td class="m">700</td><td class="m">702</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">An estimate catches the big mistakes</div>
      It will not tell you whether the answer is ${m('798')} or ${m('799')}, but it tells you at once that
      ${m('7 980')} is wrong. Estimating first is how a calculator error is caught.</div>`
    }
  ],
  examples: [
    {
      q: 'Round ' + m('3 472') + ' to the nearest hundred and to ' + m('2') + ' significant figures.',
      steps: [
        ['Nearest hundred: the deciding digit is ' + m('7') + ', so round up.', m('3 500')],
        ['Two significant figures: the first two digits are ' + m('3') + ' and ' + m('4') + '; the next is ' + m('7') + '.', m('3 500')]
      ],
      ans: m('3 500') + ' both times'
    },
    {
      q: 'Round ' + m('9.96') + ' to one decimal place.',
      steps: [
        ['The deciding digit is the ' + m('6') + '.', ''],
        ['Round the ' + m('9') + ' up: it becomes ' + m('10') + ' and carries.', ''],
        [m('10.0'), 'The zero shows the accuracy claimed.']
      ],
      ans: m('10.0')
    },
    {
      q: 'Estimate ' + m('4 187 ÷ 21') + '.',
      steps: [
        ['Round to one significant figure each: ' + m('4 000 ÷ 20') + '.', ''],
        [m('= 200'), ''],
        ['The exact value is ' + m('199.4') + ' — close enough to check by.', '']
      ],
      ans: 'About ' + m('200')
    }
  ],
  modelNote: 'Ask for an estimate before every calculation for a week; the habit catches more errors than any amount of rechecking.',
  interactive: {
    type: 'quiz',
    title: 'Which digit decides?',
    hint: 'The one immediately after the place you are keeping.',
    items: [
      { q: m('3 472') + ' to the nearest hundred:', a: [m('3 400'), m('3 500'), m('3 470'), m('3 000')], c: 1, why: 'The ' + m('7') + ' decides.' },
      { q: m('2 851') + ' to the nearest thousand:', a: [m('2 000'), m('3 000'), m('2 900'), m('2 800')], c: 1, why: 'The ' + m('8') + ' decides.' },
      { q: m('3.472') + ' to ' + m('1') + ' d.p.:', a: [m('3.4'), m('3.5'), m('3.47'), m('4')], c: 1, why: 'The ' + m('7') + ' decides.' },
      { q: m('9.96') + ' to ' + m('1') + ' d.p.:', a: [m('9.9'), m('10.0'), m('10'), m('9.96')], c: 1, why: 'The rounding carries.' },
      { q: m('0.0851') + ' to ' + m('2') + ' s.f.:', a: [m('0.08'), m('0.085'), m('0.09'), m('0.0851')], c: 1, why: 'Count from the ' + m('8') + '.' },
      { q: m('205.6') + ' to ' + m('2') + ' s.f.:', a: [m('200'), m('210'), m('205'), m('206')], c: 1, why: 'The third digit is ' + m('5') + '.' },
      { q: 'Estimate ' + m('38 · 21') + ':', a: [m('600'), m('800'), m('1000'), m('80')], c: 1, why: m('40 · 20') + '.' },
      { q: 'Estimate ' + m('6.9 · 5.2') + ':', a: [m('30'), m('35'), m('42'), m('12')], c: 1, why: m('7 · 5') + '.' }
    ]
  },
  quiz: [
    { q: 'A digit of ' + m('5') + ' or more means:', a: ['round down', 'round up', 'leave it', 'add one to the last digit shown'], c: 1, why: 'The standard rule.' },
    { q: m('795') + ' to the nearest ten:', a: [m('790'), m('800'), m('700'), m('750')], c: 1, why: 'The ' + m('5') + ' rounds up.' },
    { q: m('3.472') + ' to ' + m('2') + ' d.p.:', a: [m('3.47'), m('3.48'), m('3.5'), m('3.4')], c: 0, why: 'The deciding digit is ' + m('2') + '.' },
    { q: 'In ' + m('0.0851') + ' the first significant figure is:', a: [m('0'), m('8'), m('5'), m('1')], c: 1, why: 'Leading zeros do not count.' },
    { q: m('3 472') + ' to ' + m('1') + ' s.f.:', a: [m('3 000'), m('3 400'), m('4 000'), m('3 500')], c: 0, why: 'The second digit is ' + m('4') + '.' },
    { q: 'An estimate is used to:', a: ['get an exact answer', 'catch a large error', 'avoid working', 'round twice'], c: 1, why: 'A sense check.' }
  ],
  practice: {
    easy: [
      [m('3 472') + ' to the nearest ten', m('3 470')],
      [m('3 472') + ' to the nearest hundred', m('3 500')],
      [m('2 851') + ' to the nearest thousand', m('3 000')],
      [m('795') + ' to the nearest ten', m('800')],
      [m('3.472') + ' to ' + m('1') + ' d.p.', m('3.5')],
      [m('3.472') + ' to ' + m('2') + ' d.p.', m('3.47')],
      [m('2.345') + ' to ' + m('2') + ' d.p.', m('2.35')]
    ],
    med: [
      [m('9.96') + ' to ' + m('1') + ' d.p.', m('10.0')],
      [m('0.0851') + ' to ' + m('2') + ' s.f.', m('0.085')],
      [m('0.0851') + ' to ' + m('1') + ' s.f.', m('0.09')],
      [m('205.6') + ' to ' + m('2') + ' s.f.', m('210')],
      [m('3 472') + ' to ' + m('1') + ' s.f.', m('3 000')],
      ['Estimate ' + m('38 · 21'), m('800')],
      ['Estimate ' + m('297 + 405'), m('700')]
    ],
    hard: [
      ['Estimate ' + m('4 187 ÷ 21'), m('200')],
      ['Estimate ' + m('6.9 · 5.2'), m('35')],
      [m('205.6') + ' to ' + m('3') + ' s.f.', m('206')],
      ['Why is ' + m('10.0') + ' not the same claim as ' + m('10') + '?', 'It claims accuracy to a tenth'],
      ['The smallest whole number that rounds to ' + m('700') + ' to the nearest hundred', m('650')],
      ['The largest whole number that rounds to ' + m('700') + ' to the nearest hundred', m('749')],
      ['A length given as ' + m('4.5') + ' m to ' + m('1') + ' d.p. lies between', m('4.45') + ' and ' + m('4.55') + ' m']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Underline the deciding digit before you round anything.',
  homework: [
    'Round ' + m('6 483') + ' to the nearest ten, hundred and thousand.',
    'Round ' + m('5.278') + ' to ' + m('1') + ' and to ' + m('2') + ' decimal places.',
    'Round ' + m('0.04672') + ' to ' + m('1') + ' and to ' + m('2') + ' significant figures.',
    'Estimate ' + m('58 · 42') + ' and ' + m('8 130 ÷ 19') + '.',
    'Between which two values does a mass given as ' + m('3.2') + ' kg to ' + m('1') + ' d.p. lie?'
  ]
});

/* ============================== 31 ============================== */
G6_MAT.push({
  id: 'g6-31', stream: 'mat', grade: 6, quarter: 2, lessons: '59–62', hours: 4,
  title: 'Finding a number from its percentage, and a part of it',
  subtitle: 'The reverse question — given the part and the percentage, find the whole.',
  uz: 'Matematika 6, §13', uzPage: 'pp. 167–178',
  cam: 'S7 10', camPage: 'Stage 7, pp. 96–104', wb: 'Exercise 10.2',
  objectives: [
    'Find a percentage of a quantity fluently.',
    'Find the whole when a percentage of it is given.',
    'Express one quantity as a percentage of another.',
    'Decide which of the three questions a problem is asking.'
  ],
  terms: [
    ['Percentage', 'Foiz', 'Процент'],
    ['Whole', 'Butun', 'Целое'],
    ['Part', 'Qism', 'Часть'],
    ['To find the whole', 'Butunni topish', 'Найти целое'],
    ['One per cent', 'Bir foiz', 'Один процент'],
    ['Reverse question', 'Teskari masala', 'Обратная задача'],
    ['To express as', 'Ifodalamoq', 'Выразить в'],
    ['Check', 'Tekshirish', 'Проверка']
  ],
  timing: [[25, 'The three questions'], [35, 'Finding a percentage'], [50, 'Finding the whole'], [40, 'Expressing as a percentage'], [10, 'Homework']],
  sections: [
    {
      h: 'The three questions',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>Given</th><th>Method</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>find a part</td><td>the whole and the percentage</td><td>multiply</td><td class="m">15% of 240 = 36</td></tr>
        <tr><td>find the whole</td><td>a part and its percentage</td><td>divide</td><td class="m">36 is 15% ⟹ 240</td></tr>
        <tr><td>find the percentage</td><td>the part and the whole</td><td class="m">${f('part', 'whole')} · 100</td><td class="m">36 of 240 = 15%</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The same three numbers, three ways round</div>
      Every percentage problem in the course is one of these. Naming which one is being asked, before
      calculating anything, is the skill this block is really teaching.</div>`
    },
    {
      h: 'Finding a percentage',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Task</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">30%</td><td class="m">0.3 · 250</td><td class="m">75</td></tr>
        <tr><td class="m">8%</td><td class="m">0.08 · 250</td><td class="m">20</td></tr>
        <tr><td class="m">45%</td><td class="m">0.45 · 250</td><td class="m">112.5</td></tr>
        <tr><td class="m">120%</td><td class="m">1.2 · 250</td><td class="m">300</td></tr>
      </tbody></table></div>
      <p>Every row is a percentage of ${m('250')}.</p>
      <div class="keybox"><div class="klabel">Turn the percentage into a decimal and multiply</div>
      One multiplication replaces the two-step “find ${m('1%')} then multiply”. Both are correct; the
      decimal method is faster once the conversion is automatic.</div>`
    },
    {
      h: 'Finding the whole',
      html: `<p>If ${m('36')} is ${m('15%')} of a number, then ${m('1%')} is ${m('36 ÷ 15 = 2.4')}, so the
      whole is ${m('240')}.</p>
      ${eq('whole ' + m('= ' + f('part', 'percentage') + ' × 100') + '   or   part ' + m('÷') + ' the decimal', true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th class="m">1%</th><th>Whole</th></tr></thead>
      <tbody>
        <tr><td class="m">36</td><td class="m">2.4</td><td class="m">240</td></tr>
        <tr><td class="m">45</td><td class="m">1.5</td><td class="m">150</td></tr>
        <tr><td class="m">60</td><td class="m">3</td><td class="m">300</td></tr>
        <tr><td class="m">18</td><td class="m">0.6</td><td class="m">60</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The whole is larger than the part — unless the percentage is over ${m('100')}</span>
      If ${m('36')} is ${m('15%')} of a number, the number is ${m('240')}, not ${m('5.4')}. Multiplying
      when you should divide is the error, and comparing the two numbers exposes it.</div>`
    },
    {
      h: 'Expressing as a percentage',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Part</th><th>Whole</th><th>Working</th><th>Percentage</th></tr></thead>
      <tbody>
        <tr><td class="m">36</td><td class="m">240</td><td class="m">${f('36', '240')} · 100</td><td class="m">15%</td></tr>
        <tr><td class="m">42</td><td class="m">56</td><td class="m">${f('42', '56')} · 100</td><td class="m">75%</td></tr>
        <tr><td class="m">7</td><td class="m">20</td><td class="m">${f('7', '20')} · 100</td><td class="m">35%</td></tr>
        <tr><td class="m">45</td><td class="m">36</td><td class="m">${f('45', '36')} · 100</td><td class="m">125%</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Over ${m('100%')} is not a mistake</div>
      The last row compares a larger quantity with a smaller one, so the answer exceeds ${m('100%')}. It is
      wrong only when the part really is part of the whole.</div>`
    }
  ],
  examples: [
    {
      q: 'Find ' + m('45%') + ' of ' + m('250') + '.',
      steps: [
        [m('45% = 0.45'), ''],
        [m('0.45 · 250'), ''],
        [m('= 112.5'), '']
      ],
      ans: m('112.5')
    },
    {
      q: m('36') + ' is ' + m('15%') + ' of a number. Find the number.',
      steps: [
        [m('1%') + ' is ' + m('36 ÷ 15 = 2.4') + '.', ''],
        [m('100%') + ' is ' + m('240') + '.', ''],
        ['Check: ' + m('15%') + ' of ' + m('240') + ' is ' + m('36') + ' ✓', '']
      ],
      ans: m('240')
    },
    {
      q: 'What percentage of ' + m('56') + ' is ' + m('42') + '?',
      steps: [
        [m(f('42', '56')), 'The whole underneath.'],
        [m('= 0.75'), ''],
        [m('· 100 = 75%'), '']
      ],
      ans: m('75%')
    }
  ],
  modelNote: 'Give the three questions with the same three numbers — 36, 240 and 15% — and ask which is which; the pattern lands in one minute.',
  interactive: {
    type: 'quiz',
    title: 'Which of the three questions?',
    hint: 'What is given, and what is wanted?',
    items: [
      { q: '“Find ' + m('15%') + ' of ' + m('240') + '” needs:', a: ['multiplying', 'dividing', m(f('part', 'whole')), 'nothing'], c: 0, why: 'The whole is given.' },
      { q: '“' + m('36') + ' is ' + m('15%') + ' of what?” needs:', a: ['multiplying', 'dividing', 'adding', 'squaring'], c: 1, why: 'The whole is wanted.' },
      { q: '“' + m('36') + ' out of ' + m('240') + ' as a percentage” needs:', a: ['multiplying by ' + m('100'), 'dividing then multiplying by ' + m('100'), 'dividing by ' + m('100'), 'nothing'], c: 1, why: m(f('part', 'whole') + ' · 100') + '.' },
      { q: m('30%') + ' of ' + m('250') + ' is:', a: [m('75'), m('80'), m('7.5'), m('30')], c: 0, why: m('0.3 · 250') + '.' },
      { q: m('8%') + ' of ' + m('250') + ' is:', a: [m('2'), m('20'), m('31.25'), m('8')], c: 1, why: m('0.08 · 250') + '.' },
      { q: m('45') + ' is ' + m('30%') + ' of:', a: [m('13.5'), m('135'), m('150'), m('75')], c: 2, why: m('1%') + ' is ' + m('1.5') + '.' },
      { q: m('42') + ' as a percentage of ' + m('56') + ':', a: [m('75%'), m('133%'), m('42%'), m('14%')], c: 0, why: m(f('42', '56')) + '.' },
      { q: m('45') + ' as a percentage of ' + m('36') + ':', a: [m('80%'), m('125%'), m('9%'), m('45%')], c: 1, why: 'Larger than the whole.' }
    ]
  },
  quiz: [
    { q: 'To find a percentage of a quantity you:', a: ['divide', 'multiply', 'subtract', 'add'], c: 1, why: 'By the decimal.' },
    { q: 'To find the whole from a part you:', a: ['divide', 'multiply', 'add ' + m('100'), 'subtract'], c: 0, why: 'By the decimal.' },
    { q: m('36') + ' is ' + m('15%') + ' of:', a: [m('5.4'), m('54'), m('240'), m('2400')], c: 2, why: m('1%') + ' is ' + m('2.4') + '.' },
    { q: m('120%') + ' of ' + m('250') + ' is:', a: [m('270'), m('300'), m('320'), m('250')], c: 1, why: m('1.2 · 250') + '.' },
    { q: m('7') + ' as a percentage of ' + m('20') + ':', a: [m('7%'), m('35%'), m('14%'), m('70%')], c: 1, why: m(f('7', '20')) + '.' },
    { q: 'A percentage over ' + m('100') + ' means:', a: ['an error', 'the part exceeds the whole compared with', 'a fraction', 'a decimal'], c: 1, why: 'Perfectly possible.' }
  ],
  practice: {
    easy: [
      [m('30%') + ' of ' + m('250'), m('75')],
      [m('8%') + ' of ' + m('250'), m('20')],
      [m('45%') + ' of ' + m('250'), m('112.5')],
      [m('120%') + ' of ' + m('250'), m('300')],
      [m('36') + ' is ' + m('15%') + ' of', m('240')],
      [m('45') + ' is ' + m('30%') + ' of', m('150')],
      [m('60') + ' is ' + m('20%') + ' of', m('300')]
    ],
    med: [
      [m('18') + ' is ' + m('30%') + ' of', m('60')],
      [m('36') + ' as a percentage of ' + m('240'), m('15%')],
      [m('42') + ' as a percentage of ' + m('56'), m('75%')],
      [m('7') + ' as a percentage of ' + m('20'), m('35%')],
      [m('45') + ' as a percentage of ' + m('36'), m('125%')],
      [m('12%') + ' of ' + m('4 500'), m('540')],
      [m('84') + ' is ' + m('70%') + ' of', m('120')]
    ],
    hard: [
      [m('2.5%') + ' of ' + m('4 800'), m('120')],
      [m('150') + ' is ' + m('12.5%') + ' of', m('1 200')],
      ['A price of ' + m('54 000') + ' is ' + m('90%') + ' of the original: the original', m('60 000')],
      [m('64') + ' as a percentage of ' + m('80'), m('80%')],
      ['If ' + m('30%') + ' of a class of ' + m('40') + ' wear glasses, how many do not?', m('28')],
      ['A tax of ' + m('12%') + ' adds ' + m('36 000') + ': the price before tax', m('300 000')],
      ['Why must the whole go underneath?', 'A percentage compares the part with the whole it belongs to']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Name which of the three questions you are answering before you calculate.',
  homework: [
    'Find ' + m('35%') + ' and ' + m('6%') + ' of ' + m('420') + '.',
    m('54') + ' is ' + m('18%') + ' of a number. Find the number.',
    'Write ' + m('27') + ' as a percentage of ' + m('45') + '.',
    'Write ' + m('63') + ' as a percentage of ' + m('45') + ', and explain the answer.',
    'A sum of ' + m('84 000') + ' is ' + m('70%') + ' of a price. Find the price.'
  ]
});

/* ============================== 32 ============================== */
G6_MAT.push({
  id: 'g6-32', stream: 'mat', grade: 6, quarter: 2, lessons: '63–66', hours: 4,
  title: 'Finding a percentage increase or decrease',
  subtitle: 'One multiplier does the whole job — and the reverse question needs a division.',
  uz: 'Matematika 6, §14', uzPage: 'pp. 179–190',
  cam: 'S7 10', camPage: 'Stage 7, pp. 96–104', wb: 'Exercise 10.3',
  objectives: [
    'Increase and decrease a quantity by a percentage.',
    'Find the percentage change from the old and new values.',
    'Find the original value after a change.',
    'Explain why a rise and a fall of the same percentage do not cancel.'
  ],
  terms: [
    ['Increase', 'Ortish', 'Увеличение'],
    ['Decrease', 'Kamayish', 'Уменьшение'],
    ['Multiplier', 'Ko‘paytuvchi', 'Множитель'],
    ['Percentage change', 'Foizli o‘zgarish', 'Процентное изменение'],
    ['Original value', 'Boshlang‘ich qiymat', 'Первоначальное значение'],
    ['Discount', 'Chegirma', 'Скидка'],
    ['Profit', 'Foyda', 'Прибыль'],
    ['Loss', 'Zarar', 'Убыток']
  ],
  timing: [[30, 'The multiplier'], [40, 'Finding the change'], [50, 'The reverse question'], [30, 'Profit, loss and discount'], [10, 'Homework']],
  sections: [
    {
      h: 'The multiplier',
      html: `${eq('new ' + m('=') + ' old ' + m('× (1 ± ' + f('p', '100') + ')'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Change</th><th>Multiplier</th><th class="m">80 000</th><th class="m">250</th></tr></thead>
      <tbody>
        <tr><td>up ${m('20%')}</td><td class="m">1.2</td><td class="m">96 000</td><td class="m">300</td></tr>
        <tr><td>down ${m('20%')}</td><td class="m">0.8</td><td class="m">64 000</td><td class="m">200</td></tr>
        <tr><td>up ${m('7%')}</td><td class="m">1.07</td><td class="m">85 600</td><td class="m">267.5</td></tr>
        <tr><td>down ${m('35%')}</td><td class="m">0.65</td><td class="m">52 000</td><td class="m">162.5</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">One step, not two</div>
      Finding ${m('20%')} and then adding it works, but ${m('· 1.2')} is one keystroke and cannot lose the
      original amount along the way.</div>`
    },
    {
      h: 'Finding the change',
      html: `${eq('percentage change ' + m('= ' + f('new − old', 'old') + ' × 100%'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Old</th><th>New</th><th>Change</th><th>Percentage</th></tr></thead>
      <tbody>
        <tr><td class="m">40</td><td class="m">50</td><td class="m">+10</td><td class="m">+25%</td></tr>
        <tr><td class="m">50</td><td class="m">40</td><td class="m">−10</td><td class="m">−20%</td></tr>
        <tr><td class="m">80 000</td><td class="m">92 000</td><td class="m">+12 000</td><td class="m">+15%</td></tr>
        <tr><td class="m">200</td><td class="m">150</td><td class="m">−50</td><td class="m">−25%</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Always divide by the <i>old</i> value</span>
      The first two rows use the same pair of numbers and give different percentages, because the base
      changes. A rise of ${m('25%')} is undone by a fall of ${m('20%')}, not of ${m('25%')}.</div>`
    },
    {
      h: 'The reverse question',
      html: `<p>“After a rise of ${m('20%')} the price is ${m('96 000')}” — the ${m('96 000')} is the
      <b>new</b> value, so divide by the multiplier.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Wrong</th><th>Right</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>after ${m('+20%')} it is ${m('96 000')}</td><td class="m">96 000 − 19 200</td><td class="m">96 000 ÷ 1.2</td><td class="m">80 000</td></tr>
        <tr><td>after ${m('−20%')} it is ${m('64 000')}</td><td class="m">64 000 + 12 800</td><td class="m">64 000 ÷ 0.8</td><td class="m">80 000</td></tr>
        <tr><td>after ${m('−25%')} it is ${m('150')}</td><td class="m">150 + 37.5</td><td class="m">150 ÷ 0.75</td><td class="m">200</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Check by going forwards</div>
      ${m('80 000 · 1.2 = 96 000')} ✓. The forward check takes five seconds and settles whether the
      division was the right move.</div>`
    },
    {
      h: 'Profit, loss and discount',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Situation</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>bought at ${m('40 000')}, sold at ${m('50 000')}</td><td class="m">${f('10 000', '40 000')} · 100</td><td class="m">25% profit</td></tr>
        <tr><td>bought at ${m('50 000')}, sold at ${m('40 000')}</td><td class="m">${f('10 000', '50 000')} · 100</td><td class="m">20% loss</td></tr>
        <tr><td>a coat at ${m('300 000')} with ${m('30%')} off</td><td class="m">· 0.7</td><td class="m">210 000</td></tr>
        <tr><td>a bill of ${m('120 000')} plus ${m('12%')} tax</td><td class="m">· 1.12</td><td class="m">134 400</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Profit and loss are percentages of the <i>cost</i></span>
      A trader who buys at ${m('40 000')} and sells at ${m('50 000')} makes ${m('25%')}, not ${m('20%')} —
      the cost price is the base. Using the selling price instead is the classic error.</div>`
    }
  ],
  examples: [
    {
      q: 'Increase ' + m('80 000') + ' by ' + m('15%') + '.',
      steps: [
        ['Multiplier: ' + m('1.15') + '.', ''],
        [m('80 000 · 1.15'), ''],
        [m('= 92 000'), '']
      ],
      ans: m('92 000')
    },
    {
      q: 'A price falls from ' + m('200') + ' to ' + m('150') + '. Find the percentage decrease.',
      steps: [
        ['Change: ' + m('−50') + '.', ''],
        [m(f('50', '200') + ' · 100'), 'The old value underneath.'],
        [m('= 25%') + ' decrease.', '']
      ],
      ans: m('25%')
    },
    {
      q: 'After a fall of ' + m('20%') + ' a price is ' + m('64 000') + '. What was it before?',
      steps: [
        ['The multiplier was ' + m('0.8') + '.', ''],
        [m('64 000 ÷ 0.8'), 'Divide, do not add.'],
        [m('= 80 000'), 'Check: ' + m('80 000 · 0.8 = 64 000') + ' ✓']
      ],
      ans: m('80 000')
    }
  ],
  modelNote: 'Ask whether a shop that raises a price 20% and then takes 20% off has returned to the start; the near-unanimous “yes” is worth correcting in public.',
  interactive: {
    type: 'quiz',
    title: 'Multiplier, change, or reverse?',
    hint: 'Decide which of the three the question asks.',
    items: [
      { q: 'The multiplier for a rise of ' + m('15%') + ':', a: [m('0.15'), m('1.15'), m('15'), m('0.85')], c: 1, why: 'Whole plus part.' },
      { q: 'The multiplier for a fall of ' + m('35%') + ':', a: [m('0.35'), m('0.65'), m('1.35'), m('0.7')], c: 1, why: m('100 − 35') + '.' },
      { q: m('80 000') + ' up ' + m('15%') + ':', a: [m('92 000'), m('80 150'), m('96 000'), m('88 000')], c: 0, why: m('· 1.15') + '.' },
      { q: 'From ' + m('40') + ' to ' + m('50') + ':', a: [m('+20%'), m('+25%'), m('+10%'), m('+50%')], c: 1, why: 'Divide by ' + m('40') + '.' },
      { q: 'From ' + m('50') + ' to ' + m('40') + ':', a: [m('−20%'), m('−25%'), m('−10%'), m('−80%')], c: 0, why: 'Divide by ' + m('50') + '.' },
      { q: 'After ' + m('+20%') + ' a price is ' + m('96 000') + '; before:', a: [m('76 800'), m('80 000'), m('115 200'), m('86 400')], c: 1, why: 'Divide by ' + m('1.2') + '.' },
      { q: 'Bought at ' + m('40 000') + ', sold at ' + m('50 000') + ':', a: [m('20%') + ' profit', m('25%') + ' profit', m('10%') + ' profit', m('25%') + ' loss'], c: 1, why: 'The cost is the base.' },
      { q: 'Up ' + m('20%') + ' then down ' + m('20%') + ' gives:', a: ['the same price', m('96%') + ' of it', m('104%') + ' of it', m('90%') + ' of it'], c: 1, why: m('1.2 · 0.8 = 0.96') + '.' }
    ]
  },
  quiz: [
    { q: 'To increase by ' + m('7%') + ' multiply by:', a: [m('0.07'), m('1.07'), m('7'), m('0.93')], c: 1, why: 'One plus the fraction.' },
    { q: 'To decrease by ' + m('35%') + ' multiply by:', a: [m('0.35'), m('0.65'), m('1.35'), m('0.35')], c: 1, why: m('100 − 35') + '.' },
    { q: 'Percentage change divides by:', a: ['the new value', 'the old value', 'the change', m('100')], c: 1, why: 'The base is where you started.' },
    { q: 'After ' + m('−25%') + ' a price is ' + m('150') + '; before:', a: [m('187.5'), m('200'), m('175'), m('112.5')], c: 1, why: 'Divide by ' + m('0.75') + '.' },
    { q: 'A rise of ' + m('25%') + ' is undone by a fall of:', a: [m('25%'), m('20%'), m('30%'), m('75%')], c: 1, why: 'The base has grown.' },
    { q: 'Profit is a percentage of:', a: ['the selling price', 'the cost price', 'the profit', 'the tax'], c: 1, why: 'What was paid.' }
  ],
  practice: {
    easy: [
      [m('80 000') + ' up ' + m('20%'), m('96 000')],
      [m('80 000') + ' down ' + m('20%'), m('64 000')],
      [m('250') + ' up ' + m('7%'), m('267.5')],
      [m('250') + ' down ' + m('35%'), m('162.5')],
      ['The multiplier for ' + m('+15%'), m('1.15')],
      ['The multiplier for ' + m('−35%'), m('0.65')],
      [m('300 000') + ' with ' + m('30%') + ' off', m('210 000')]
    ],
    med: [
      ['From ' + m('40') + ' to ' + m('50'), m('+25%')],
      ['From ' + m('50') + ' to ' + m('40'), m('−20%')],
      ['From ' + m('80 000') + ' to ' + m('92 000'), m('+15%')],
      ['From ' + m('200') + ' to ' + m('150'), m('−25%')],
      ['After ' + m('+20%') + ' it is ' + m('96 000') + ': before', m('80 000')],
      ['After ' + m('−20%') + ' it is ' + m('64 000') + ': before', m('80 000')],
      ['A bill of ' + m('120 000') + ' plus ' + m('12%') + ' tax', m('134 400')]
    ],
    hard: [
      ['Bought at ' + m('40 000') + ', sold at ' + m('50 000') + ': the profit percentage', m('25%')],
      ['Bought at ' + m('50 000') + ', sold at ' + m('40 000') + ': the loss percentage', m('20%')],
      ['Up ' + m('20%') + ' then down ' + m('20%') + ' from ' + m('500'), m('480')],
      ['A price after two rises of ' + m('10%') + ' from ' + m('200'), m('242')],
      ['After ' + m('−40%') + ' a price is ' + m('72 000') + ': before', m('120 000')],
      ['A coat costs ' + m('210 000') + ' after ' + m('30%') + ' off: the original', m('300 000')],
      ['Why is a ' + m('25%') + ' rise undone by a ' + m('20%') + ' fall?', 'The fall is taken from a larger amount']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every reverse question is a division; check it by multiplying forwards.',
  homework: [
    'Increase ' + m('45 000') + ' by ' + m('16%') + ' and decrease it by ' + m('16%') + '.',
    'A price rises from ' + m('250') + ' to ' + m('310') + '. Find the percentage increase.',
    'After a fall of ' + m('25%') + ' a price is ' + m('180 000') + '. Find the original price.',
    'A trader buys at ' + m('60 000') + ' and sells at ' + m('75 000') + '. Find the profit percentage.',
    'Show that a rise of ' + m('50%') + ' followed by a fall of ' + m('50%') + ' leaves ' + m('75%') + ' of the original.'
  ]
});

/* ============================== 33 ============================== */
G6_MAT.push({
  id: 'g6-33', stream: 'mat', grade: 6, quarter: 2, lessons: '67–70', hours: 4,
  title: 'Word problems on percentages',
  subtitle: 'Shops, salaries, populations and exam marks — all the same three questions in disguise.',
  uz: 'Matematika 6, §15', uzPage: 'pp. 191–202',
  cam: 'S7 10', camPage: 'Stage 7, pp. 96–104', wb: 'Exercise 10.4',
  objectives: [
    'Choose which percentage question a problem is asking.',
    'Work with successive percentage changes.',
    'Solve problems about discounts, taxes and interest.',
    'Interpret a percentage answer in the context it came from.'
  ],
  terms: [
    ['Discount', 'Chegirma', 'Скидка'],
    ['Tax', 'Soliq', 'Налог'],
    ['Interest', 'Foiz (bank)', 'Проценты'],
    ['Salary', 'Maosh', 'Зарплата'],
    ['Population', 'Aholi', 'Население'],
    ['Successive change', 'Ketma-ket o‘zgarish', 'Последовательное изменение'],
    ['Net change', 'Yakuniy o‘zgarish', 'Итоговое изменение'],
    ['To interpret', 'Talqin qilmoq', 'Истолковать']
  ],
  timing: [[30, 'Naming the question'], [40, 'Shops and money'], [50, 'Successive changes'], [30, 'Populations and marks'], [10, 'Homework']],
  sections: [
    {
      h: 'Naming the question',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Wording</th><th>Question</th><th>Operation</th></tr></thead>
      <tbody>
        <tr><td>“find ${m('15%')} of…”</td><td>a part</td><td>multiply</td></tr>
        <tr><td>“…is ${m('15%')} of what?”</td><td>the whole</td><td>divide</td></tr>
        <tr><td>“what percentage of… is…?”</td><td>the percentage</td><td class="m">${f('part', 'whole')} · 100</td></tr>
        <tr><td>“increase by ${m('15%')}”</td><td>a new value</td><td class="m">· 1.15</td></tr>
        <tr><td>“after a rise of ${m('15%')} it is…”</td><td>the original</td><td class="m">÷ 1.15</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Five phrases, five operations</div>
      Nearly every percentage problem in the paper opens with one of those five wordings. Matching the
      phrase to the operation is more reliable than reasoning from the numbers.</div>`
    },
    {
      h: 'Shops and money',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>a jacket at ${m('400 000')} with ${m('25%')} off</td><td class="m">· 0.75</td><td class="m">300 000</td></tr>
        <tr><td>a bill of ${m('80 000')} plus ${m('15%')} service</td><td class="m">· 1.15</td><td class="m">92 000</td></tr>
        <tr><td>a salary of ${m('2 400 000')} rising ${m('8%')}</td><td class="m">· 1.08</td><td class="m">2 592 000</td></tr>
        <tr><td>${m('1 000 000')} at ${m('14%')} simple interest for a year</td><td class="m">· 0.14</td><td class="m">140 000 interest</td></tr>
        <tr><td>a sale price of ${m('300 000')} after ${m('25%')} off</td><td class="m">÷ 0.75</td><td class="m">400 000</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The last row is the first row backwards</div>
      Shops advertise the discount and the sale price; finding the original from them is the question most
      likely to appear in an examination.</div>`
    },
    {
      h: 'Successive changes',
      html: `<p>Two changes multiply — they never add.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Changes</th><th>Combined multiplier</th><th>Net change</th></tr></thead>
      <tbody>
        <tr><td>up ${m('20%')}, then up ${m('10%')}</td><td class="m">1.2 · 1.1 = 1.32</td><td class="m">+32%</td></tr>
        <tr><td>up ${m('20%')}, then down ${m('20%')}</td><td class="m">1.2 · 0.8 = 0.96</td><td class="m">−4%</td></tr>
        <tr><td>down ${m('10%')} twice</td><td class="m">0.9 · 0.9 = 0.81</td><td class="m">−19%</td></tr>
        <tr><td>up ${m('50%')}, then down ${m('50%')}</td><td class="m">1.5 · 0.5 = 0.75</td><td class="m">−25%</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('+20%')} then ${m('+10%')} is not ${m('+30%')}</span>
      It is ${m('+32%')}, because the second rise is taken from the already-increased amount. Adding
      percentage changes is the commonest error in this whole topic.</div>`
    },
    {
      h: 'Populations and marks',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>a village of ${m('2 500')} grows ${m('4%')}</td><td class="m">· 1.04</td><td class="m">2 600</td></tr>
        <tr><td>a mark of ${m('34')} out of ${m('40')}</td><td class="m">${f('34', '40')} · 100</td><td class="m">85%</td></tr>
        <tr><td>${m('18')} of ${m('24')} pupils passed</td><td class="m">${f('18', '24')} · 100</td><td class="m">75%</td></tr>
        <tr><td>attendance rose from ${m('80%')} to ${m('92%')}</td><td class="m">92 − 80</td><td>${m('12')} percentage points</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Percentage points are not percentages</span>
      A rise from ${m('80%')} to ${m('92%')} is ${m('12')} percentage points — but a ${m('15%')} increase
      in the attendance figure. Newspapers confuse the two constantly; a mathematician should not.</div>`
    }
  ],
  examples: [
    {
      q: 'A jacket costing ' + m('400 000') + ' sum is reduced by ' + m('25%') + '. Find the sale price.',
      steps: [
        ['A fall of ' + m('25%') + ' means multiplying by ' + m('0.75') + '.', ''],
        [m('400 000 · 0.75'), ''],
        [m('= 300 000') + ' sum.', '']
      ],
      ans: m('300 000') + ' sum'
    },
    {
      q: 'A price rises ' + m('20%') + ' and then falls ' + m('20%') + '. What is the net change?',
      steps: [
        ['Multipliers: ' + m('1.2') + ' and ' + m('0.8') + '.', ''],
        [m('1.2 · 0.8 = 0.96'), ''],
        ['That is ' + m('96%') + ' of the original — a fall of ' + m('4%') + '.', '']
      ],
      ans: m('−4%')
    },
    {
      q: 'A pupil scores ' + m('34') + ' out of ' + m('40') + '. Give the mark as a percentage.',
      steps: [
        [m(f('34', '40')), ''],
        [m('= 0.85'), ''],
        [m('85%'), '']
      ],
      ans: m('85%')
    }
  ],
  modelNote: 'Collect real advertisements with percentages on them; the class checks the arithmetic and often finds the offer is worse than it looks.',
  interactive: {
    type: 'quiz',
    title: 'Which question, and what answer?',
    hint: 'Match the wording to the operation.',
    items: [
      { q: m('400 000') + ' with ' + m('25%') + ' off:', a: [m('100 000'), m('300 000'), m('375 000'), m('500 000')], c: 1, why: m('· 0.75') + '.' },
      { q: 'A bill of ' + m('80 000') + ' plus ' + m('15%') + ':', a: [m('92 000'), m('95 000'), m('12 000'), m('68 000')], c: 0, why: m('· 1.15') + '.' },
      { q: 'A sale price of ' + m('300 000') + ' after ' + m('25%') + ' off; the original:', a: [m('375 000'), m('400 000'), m('325 000'), m('225 000')], c: 1, why: m('÷ 0.75') + '.' },
      { q: 'Up ' + m('20%') + ' then up ' + m('10%') + ' is:', a: [m('+30%'), m('+32%'), m('+2%'), m('+22%')], c: 1, why: m('1.2 · 1.1') + '.' },
      { q: 'Up ' + m('20%') + ' then down ' + m('20%') + ' is:', a: [m('0%'), m('−4%'), m('+4%'), m('−40%')], c: 1, why: m('1.2 · 0.8') + '.' },
      { q: 'Down ' + m('10%') + ' twice is:', a: [m('−20%'), m('−19%'), m('−21%'), m('−100%')], c: 1, why: m('0.9 · 0.9') + '.' },
      { q: m('34') + ' out of ' + m('40') + ' as a percentage:', a: [m('80%'), m('85%'), m('75%'), m('88%')], c: 1, why: m('0.85') + '.' },
      { q: 'From ' + m('80%') + ' to ' + m('92%') + ' is:', a: [m('12') + ' percentage points', m('12%') + ' increase', 'both the same', m('92%')], c: 0, why: 'The increase itself is ' + m('15%') + '.' }
    ]
  },
  quiz: [
    { q: '“Increase by ' + m('15%') + '” means multiply by:', a: [m('0.15'), m('1.15'), m('15'), m('0.85')], c: 1, why: 'One step.' },
    { q: '“After a rise of ' + m('15%') + ' it is…” means:', a: ['multiply by ' + m('1.15'), 'divide by ' + m('1.15'), 'subtract ' + m('15%'), 'add ' + m('15%')], c: 1, why: 'The reverse question.' },
    { q: 'Two successive changes:', a: ['add', 'multiply', 'subtract', 'cancel'], c: 1, why: 'The multipliers multiply.' },
    { q: 'A salary of ' + m('2 400 000') + ' rising ' + m('8%') + ' becomes:', a: [m('2 592 000'), m('2 592'), m('2 400 008'), m('2 208 000')], c: 0, why: m('· 1.08') + '.' },
    { q: m('1 000 000') + ' at ' + m('14%') + ' for a year earns:', a: [m('14 000'), m('140 000'), m('1 400 000'), m('114 000')], c: 1, why: m('· 0.14') + '.' },
    { q: 'A rise from ' + m('80%') + ' to ' + m('92%') + ' is an increase of:', a: [m('12%'), m('15%'), m('92%'), m('8%')], c: 1, why: m(f('12', '80')) + '.' }
  ],
  practice: {
    easy: [
      [m('400 000') + ' with ' + m('25%') + ' off', m('300 000')],
      [m('80 000') + ' plus ' + m('15%'), m('92 000')],
      [m('2 400 000') + ' up ' + m('8%'), m('2 592 000')],
      [m('1 000 000') + ' at ' + m('14%') + ' for a year: the interest', m('140 000')],
      [m('2 500') + ' up ' + m('4%'), m('2 600')],
      [m('34') + ' out of ' + m('40'), m('85%')],
      [m('18') + ' out of ' + m('24'), m('75%')]
    ],
    med: [
      ['A sale price of ' + m('300 000') + ' after ' + m('25%') + ' off: the original', m('400 000')],
      ['Up ' + m('20%') + ' then up ' + m('10%'), m('+32%')],
      ['Up ' + m('20%') + ' then down ' + m('20%'), m('−4%')],
      ['Down ' + m('10%') + ' twice', m('−19%')],
      ['Up ' + m('50%') + ' then down ' + m('50%'), m('−25%')],
      ['From ' + m('80%') + ' to ' + m('92%') + ': the increase', m('15%')],
      ['A price of ' + m('92 000') + ' after ' + m('15%') + ' was added: before', m('80 000')]
    ],
    hard: [
      ['A shop adds ' + m('20%') + ' then advertises ' + m('20%') + ' off: the net change', m('−4%')],
      ['A population of ' + m('2 500') + ' after two years at ' + m('4%') + ' a year', m('2 704')],
      ['A price falls ' + m('30%') + ' to ' + m('84 000') + ': the original', m('120 000')],
      ['Which is better: ' + m('30%') + ' off, or ' + m('20%') + ' off then ' + m('10%') + ' more off?', m('30%') + ' off — the other leaves ' + m('72%')],
      ['A mark rose from ' + m('60') + ' to ' + m('75') + ' out of ' + m('100') + ': the percentage increase', m('25%')],
      ['A salary rises ' + m('10%') + ' then falls ' + m('10%') + ': the net change', m('−1%')],
      ['Why do successive percentages multiply?', 'Each acts on the amount left by the one before']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write the multiplier for every change before you touch the numbers.',
  homework: [
    'A coat costs ' + m('520 000') + ' sum and is reduced by ' + m('35%') + '. Find the sale price.',
    'A bill of ' + m('140 000') + ' has ' + m('12%') + ' added. Find the total.',
    'After a discount of ' + m('40%') + ' a price is ' + m('96 000') + '. Find the original price.',
    'A price rises ' + m('25%') + ' and then falls ' + m('20%') + '. Find the net change.',
    'A pupil scores ' + m('57') + ' out of ' + m('60') + '. Give the mark as a percentage.'
  ]
});

/* ============================== 34 ============================== */
G6_MAT.push({
  id: 'g6-34', stream: 'mat', grade: 6, quarter: 2, lessons: '71', hours: 1,
  title: 'Think — Project 2: clock rectangles',
  subtitle: 'A Cambridge project: the numbers on a clock face, boxed four at a time, and the pattern that appears.',
  uz: 'Matematika 6, o‘ylab ko‘r', uzPage: 'pp. 203–205',
  cam: 'S7 Project 2', camPage: 'Stage 7, project pages', wb: 'Project sheet 2',
  objectives: [
    'Collect data systematically from a simple arrangement.',
    'Notice a pattern and state it in words.',
    'Express the pattern with letters.',
    'Test the statement on cases not yet tried.'
  ],
  terms: [
    ['Clock face', 'Soat siferblati', 'Циферблат'],
    ['Rectangle', 'To‘rtburchak', 'Прямоугольник'],
    ['Diagonal', 'Diagonal', 'Диагональ'],
    ['Pattern', 'Qonuniyat', 'Закономерность'],
    ['Conjecture', 'Faraz', 'Гипотеза'],
    ['To generalise', 'Umumlashtirish', 'Обобщить'],
    ['Systematic', 'Tartibli', 'Систематический'],
    ['Proof', 'Isbot', 'Доказательство']
  ],
  timing: [[8, 'The arrangement'], [12, 'Collecting the data'], [14, 'Stating the pattern'], [6, 'Explaining why']],
  sections: [
    {
      h: 'The arrangement',
      html: `<p>Write the numbers ${m('1')} to ${m('12')} in three rows of four, as on a calendar page:</p>
      <div class="tablewrap"><table>
      <tbody>
        <tr><td class="m">1</td><td class="m">2</td><td class="m">3</td><td class="m">4</td></tr>
        <tr><td class="m">5</td><td class="m">6</td><td class="m">7</td><td class="m">8</td></tr>
        <tr><td class="m">9</td><td class="m">10</td><td class="m">11</td><td class="m">12</td></tr>
      </tbody></table></div>
      <p>Draw a rectangle round any four numbers that form a block — two rows and two columns — and
      multiply each pair of opposite corners.</p>
      <div class="keybox"><div class="klabel">The question</div>
      What is the difference between the two products? Try several rectangles before deciding.</div>`
    },
    {
      h: 'Collecting the data',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Rectangle</th><th>One diagonal</th><th>The other</th><th>Difference</th></tr></thead>
      <tbody>
        <tr><td class="m">1, 2, 5, 6</td><td class="m">1 · 6 = 6</td><td class="m">2 · 5 = 10</td><td class="m">4</td></tr>
        <tr><td class="m">2, 3, 6, 7</td><td class="m">2 · 7 = 14</td><td class="m">3 · 6 = 18</td><td class="m">4</td></tr>
        <tr><td class="m">6, 7, 10, 11</td><td class="m">6 · 11 = 66</td><td class="m">7 · 10 = 70</td><td class="m">4</td></tr>
        <tr><td class="m">3, 4, 7, 8</td><td class="m">3 · 8 = 24</td><td class="m">4 · 7 = 28</td><td class="m">4</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Be systematic, not random</div>
      Working across the top row and then down catches every case and makes it obvious when the pattern
      holds. Random examples leave gaps that hide exceptions.</div>`
    },
    {
      h: 'Stating the pattern',
      html: `<p>The difference is always ${m('4')}. Now say why, with letters: let the top-left number be
      ${m('n')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Position</th><th>Number</th></tr></thead>
      <tbody>
        <tr><td>top left</td><td class="m">n</td></tr>
        <tr><td>top right</td><td class="m">n + 1</td></tr>
        <tr><td>bottom left</td><td class="m">n + 4</td></tr>
        <tr><td>bottom right</td><td class="m">n + 5</td></tr>
      </tbody></table></div>
      ${eq(m('(n + 1)(n + 4) − n(n + 5) = n² + 5n + 4 − n² − 5n = 4'), true)}
      <div class="keybox"><div class="klabel">The letters prove what the numbers suggested</div>
      Four examples show a pattern; the algebra shows it must hold for every rectangle in the grid,
      including ones nobody has tried.</div>`
    },
    {
      h: 'Explaining why',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Grid width</th><th>Bottom-left is</th><th>The difference</th></tr></thead>
      <tbody>
        <tr><td class="m">4</td><td class="m">n + 4</td><td class="m">4</td></tr>
        <tr><td class="m">5</td><td class="m">n + 5</td><td class="m">5</td></tr>
        <tr><td class="m">7</td><td class="m">n + 7</td><td class="m">7</td></tr>
        <tr><td class="m">w</td><td class="m">n + w</td><td class="m">w</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The difference is the width of the grid</div>
      A calendar month, seven columns wide, gives a difference of ${m('7')} for every ${m('2 × 2')} block —
      which is worth testing on a real calendar before the lesson ends.</div>`
    }
  ],
  examples: [
    {
      q: 'Take the rectangle ' + m('6, 7, 10, 11') + '. Find the two products and their difference.',
      steps: [
        [m('6 · 11 = 66'), ''],
        [m('7 · 10 = 70'), ''],
        [m('70 − 66 = 4'), '']
      ],
      ans: m('4')
    },
    {
      q: 'Prove that the difference is always ' + m('4') + ' in a grid four columns wide.',
      steps: [
        ['Let the top-left number be ' + m('n') + '.', ''],
        ['The four numbers are ' + m('n, n + 1, n + 4, n + 5') + '.', ''],
        [m('(n + 1)(n + 4) = n² + 5n + 4'), ''],
        [m('n(n + 5) = n² + 5n') + ', so the difference is ' + m('4') + '.', '']
      ],
      ans: 'Always ' + m('4')
    },
    {
      q: 'What would the difference be on a calendar, seven columns wide?',
      steps: [
        ['The bottom-left number is ' + m('n + 7') + '.', ''],
        [m('(n + 1)(n + 7) = n² + 8n + 7'), ''],
        [m('n(n + 8) = n² + 8n'), ''],
        ['The difference is ' + m('7') + '.', '']
      ],
      ans: m('7')
    }
  ],
  modelNote: 'Hand out real calendar pages and let the class discover the seven before any algebra; the general result then answers a question they have already asked.',
  interactive: {
    type: 'quiz',
    title: 'The clock-rectangle pattern',
    hint: 'Try it, state it, then prove it.',
    items: [
      { q: 'For ' + m('1, 2, 5, 6') + ' the difference is:', a: [m('2'), m('4'), m('6'), m('10')], c: 1, why: m('10 − 6') + '.' },
      { q: 'For ' + m('6, 7, 10, 11') + ' the difference is:', a: [m('4'), m('6'), m('66'), m('70')], c: 0, why: m('70 − 66') + '.' },
      { q: 'If the top left is ' + m('n') + ', the bottom right is:', a: [m('n + 4'), m('n + 5'), m('n + 1'), m('n + 6')], c: 1, why: 'One right and one down.' },
      { q: m('(n + 1)(n + 4)') + ' equals:', a: [m('n² + 4'), m('n² + 5n + 4'), m('n² + 4n + 1'), m('n² + 5')], c: 1, why: 'Four products.' },
      { q: m('n(n + 5)') + ' equals:', a: [m('n² + 5'), m('n² + 5n'), m('n + 5n'), m('5n²')], c: 1, why: 'Expand.' },
      { q: 'So the difference is:', a: [m('n'), m('4'), m('5'), m('5n')], c: 1, why: 'Everything else cancels.' },
      { q: 'On a seven-column calendar the difference is:', a: [m('4'), m('7'), m('12'), m('49')], c: 1, why: 'The width of the grid.' },
      { q: 'Four examples showing the pattern are:', a: ['a proof', 'evidence for a conjecture', 'irrelevant', 'a counter-example'], c: 1, why: 'The algebra proves it.' }
    ]
  },
  quiz: [
    { q: 'In the ' + m('3 × 4') + ' grid the difference is always:', a: [m('2'), m('4'), m('5'), 'it varies'], c: 1, why: 'The grid width.' },
    { q: 'With top left ' + m('n') + ', the bottom left is:', a: [m('n + 1'), m('n + 4'), m('n + 5'), m('n + 3')], c: 1, why: 'One row down.' },
    { q: 'The proof needs:', a: ['more examples', 'letters', 'a calculator', 'a diagram only'], c: 1, why: 'Algebra covers every case.' },
    { q: 'On a grid ' + m('w') + ' wide the difference is:', a: [m('4'), m('w'), m('2w'), m('w²')], c: 1, why: 'From the same expansion.' },
    { q: 'A pattern seen in four cases is:', a: ['proved', 'a conjecture', 'false', 'a theorem'], c: 1, why: 'Until it is proved.' },
    { q: 'Systematic data collection means:', a: ['random examples', 'working in order', 'one example', 'guessing'], c: 1, why: 'Nothing is missed.' }
  ],
  practice: {
    easy: [
      ['The difference for ' + m('1, 2, 5, 6'), m('4')],
      ['The difference for ' + m('2, 3, 6, 7'), m('4')],
      ['The difference for ' + m('3, 4, 7, 8'), m('4')],
      ['The difference for ' + m('6, 7, 10, 11'), m('4')],
      ['With top left ' + m('n') + ', the top right', m('n + 1')],
      ['The bottom left', m('n + 4')],
      ['The bottom right', m('n + 5')]
    ],
    med: [
      [m('(n + 1)(n + 4)') + ' expanded', m('n² + 5n + 4')],
      [m('n(n + 5)') + ' expanded', m('n² + 5n')],
      ['Their difference', m('4')],
      ['On a five-column grid', m('5')],
      ['On a calendar (seven columns)', m('7')],
      ['On a grid ' + m('w') + ' columns wide', m('w')],
      ['Is the pattern proved by four examples?', 'No — they are evidence only']
    ],
    hard: [
      ['A ' + m('3 × 3') + ' block on a seven-column calendar: the corner difference', m('28')],
      ['Why does the ' + m('n²') + ' term always cancel?', 'Both products have the same leading term'],
      ['Predict the difference on a ten-column grid', m('10')],
      ['Test the prediction with ' + m('n = 3') + ' on a ten-column grid', m('4 · 13 − 3 · 14 = 10') + ' ✓'],
      ['What would happen with a ' + m('2 × 3') + ' block on a four-column grid?', 'The difference becomes ' + m('8')],
      ['Write the four numbers of a block with bottom right ' + m('n'), m('n − 5, n − 4, n − 1, n')],
      ['Why is algebra better than more examples here?', 'It settles every case at once, including untried ones']
    ]
  },
  hwTitle: 'Homework — the project',
  hwNote: 'One page: your data table, the pattern in words, the algebra, and one prediction tested.',
  homework: [
    'Draw the ' + m('3 × 4') + ' grid and test six different rectangles.',
    'Record your results in a table and state the pattern in one sentence.',
    'Prove the pattern using ' + m('n') + ' for the top-left number.',
    'Repeat the investigation on a real calendar month and record what happens.',
    'Predict the difference on a grid ' + m('9') + ' columns wide, then test your prediction.'
  ]
});

/* ============================== 35 ============================== */
G6_MAT.push({
  id: 'g6-35', stream: 'mat', grade: 6, quarter: 2, lessons: '72–73', hours: 2,
  title: 'Revision — percentages',
  subtitle: 'The three questions, the multiplier and the reverse case, gathered before the control work.',
  uz: 'Matematika 6, takrorlash', uzPage: 'pp. 206–210',
  cam: 'S7 10 consolidation', camPage: 'Stage 7, pp. 96–104', wb: 'Revision 10',
  objectives: [
    'Choose the right method for each kind of percentage question.',
    'Work with increases, decreases and successive changes.',
    'Solve the reverse question reliably.',
    'Identify the errors that remain.'
  ],
  terms: [
    ['Percentage', 'Foiz', 'Процент'],
    ['Multiplier', 'Ko‘paytuvchi', 'Множитель'],
    ['Increase', 'Ortish', 'Увеличение'],
    ['Decrease', 'Kamayish', 'Уменьшение'],
    ['Original value', 'Boshlang‘ich qiymat', 'Первоначальное значение'],
    ['Percentage change', 'Foizli o‘zgarish', 'Процентное изменение'],
    ['Successive', 'Ketma-ket', 'Последовательный'],
    ['Check', 'Tekshirish', 'Проверка']
  ],
  timing: [[20, 'The methods on one page'], [25, 'Worked mixture'], [25, 'The errors that remain'], [8, 'A last check'], [2, 'Homework']],
  sections: [
    {
      h: 'The methods on one page',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>Method</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>a percentage of an amount</td><td>multiply by the decimal</td><td class="m">0.35 · 240 = 84</td></tr>
        <tr><td>the whole from a part</td><td>divide by the decimal</td><td class="m">84 ÷ 0.35 = 240</td></tr>
        <tr><td>one amount as a percentage of another</td><td class="m">${f('part', 'whole')} · 100</td><td class="m">${f('84', '240')} · 100 = 35%</td></tr>
        <tr><td>increase or decrease</td><td class="m">· (1 ± ${f('p', '100')})</td><td class="m">240 · 1.35 = 324</td></tr>
        <tr><td>the original after a change</td><td>divide by the multiplier</td><td class="m">324 ÷ 1.35 = 240</td></tr>
        <tr><td>successive changes</td><td>multiply the multipliers</td><td class="m">1.2 · 0.8 = 0.96</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Six rows, and the whole topic</div>
      Every percentage question in the paper is one of these. Read the wording, pick the row, do the one
      operation it names.</div>`
    },
    {
      h: 'Worked mixture',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Row</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>${m('18%')} of ${m('350')}</td><td>first</td><td class="m">63</td></tr>
        <tr><td>${m('63')} is ${m('18%')} of what?</td><td>second</td><td class="m">350</td></tr>
        <tr><td>${m('63')} as a percentage of ${m('350')}</td><td>third</td><td class="m">18%</td></tr>
        <tr><td>increase ${m('350')} by ${m('18%')}</td><td>fourth</td><td class="m">413</td></tr>
        <tr><td>after ${m('+18%')} it is ${m('413')}: before</td><td>fifth</td><td class="m">350</td></tr>
        <tr><td>up ${m('18%')}, then down ${m('18%')}</td><td>sixth</td><td class="m">−3.24%</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">One set of numbers, all six questions</div>
      Seeing ${m('63')}, ${m('350')} and ${m('18%')} arranged six ways is the fastest way to stop confusing
      the questions with each other.</div>`
    },
    {
      h: 'The errors that remain',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Error</th><th>Looks like</th><th>Correct</th></tr></thead>
      <tbody>
        <tr><td>dividing by the new value</td><td class="m">${f('10', '50')} for 40 → 50</td><td class="m">${f('10', '40')} = 25%</td></tr>
        <tr><td>subtracting instead of dividing</td><td class="m">96 000 − 19 200</td><td class="m">96 000 ÷ 1.2</td></tr>
        <tr><td>adding successive percentages</td><td class="m">+20% + 10% = +30%</td><td class="m">+32%</td></tr>
        <tr><td>a percentage over ${m('100')} rejected</td><td>“that must be wrong”</td><td>it is possible</td></tr>
        <tr><td>profit taken on the selling price</td><td class="m">${f('10 000', '50 000')}</td><td class="m">${f('10 000', '40 000')}</td></tr>
      </tbody></table></div>`
    },
    {
      h: 'A last check',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Answer</th><th>Sense check</th></tr></thead>
      <tbody>
        <tr><td>a part</td><td>smaller than the whole, unless the percentage is over ${m('100')}</td></tr>
        <tr><td>the whole from a part</td><td>larger than the part</td></tr>
        <tr><td>after an increase</td><td>larger than before</td></tr>
        <tr><td>after a decrease</td><td>smaller than before</td></tr>
        <tr><td>a reverse question</td><td>multiply forwards and see</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The sense check costs nothing</div>
      Most lost marks in this topic are answers that are obviously the wrong size. Ten seconds of checking
      recovers them.</div>`
    }
  ],
  examples: [
    {
      q: 'Find ' + m('18%') + ' of ' + m('350') + ', and then check that ' + m('63') + ' is ' + m('18%') + ' of ' + m('350') + '.',
      steps: [
        [m('0.18 · 350 = 63'), ''],
        [m(f('63', '350') + ' = 0.18'), ''],
        [m('18%') + ' ✓', 'The first and third questions, one after the other.']
      ],
      ans: m('63') + ' and ' + m('18%')
    },
    {
      q: 'After a rise of ' + m('18%') + ' a price is ' + m('413') + '. Find the original.',
      steps: [
        ['Multiplier ' + m('1.18') + '.', ''],
        [m('413 ÷ 1.18'), ''],
        [m('= 350'), 'Check: ' + m('350 · 1.18 = 413') + ' ✓']
      ],
      ans: m('350')
    },
    {
      q: 'A price goes up ' + m('18%') + ' and then down ' + m('18%') + '. What is the net change?',
      steps: [
        [m('1.18 · 0.82'), ''],
        [m('= 0.9676'), ''],
        ['A fall of ' + m('3.24%') + '.', 'Never zero.']
      ],
      ans: m('−3.24%')
    }
  ],
  modelNote: 'Write 63, 350 and 18% on the board and ask the class to invent all six questions; they revise the topic by writing it rather than reading it.',
  interactive: {
    type: 'quiz',
    title: 'Which row of the table?',
    hint: 'Read the wording, name the method.',
    items: [
      { q: m('18%') + ' of ' + m('350') + ':', a: [m('63'), m('350'), m('413'), m('18')], c: 0, why: 'Multiply by ' + m('0.18') + '.' },
      { q: m('63') + ' is ' + m('18%') + ' of:', a: [m('11.34'), m('350'), m('413'), m('81')], c: 1, why: 'Divide.' },
      { q: m('63') + ' as a percentage of ' + m('350') + ':', a: [m('18%'), m('56%'), m('5.6%'), m('180%')], c: 0, why: m(f('63', '350')) + '.' },
      { q: m('350') + ' increased by ' + m('18%') + ':', a: [m('368'), m('413'), m('287'), m('63')], c: 1, why: m('· 1.18') + '.' },
      { q: 'After ' + m('+18%') + ' it is ' + m('413') + '; before:', a: [m('339'), m('350'), m('487'), m('395')], c: 1, why: m('÷ 1.18') + '.' },
      { q: 'Up ' + m('18%') + ' then down ' + m('18%') + ':', a: [m('0%'), m('−3.24%'), m('+3.24%'), m('−36%')], c: 1, why: m('1.18 · 0.82') + '.' },
      { q: 'From ' + m('40') + ' to ' + m('50') + ' the base is:', a: [m('40'), m('50'), m('10'), m('90')], c: 0, why: 'The old value.' },
      { q: 'A profit percentage uses:', a: ['the selling price', 'the cost price', 'the profit', 'either'], c: 1, why: 'What was paid.' }
    ]
  },
  quiz: [
    { q: 'A percentage of an amount:', a: ['multiply', 'divide', 'add', 'subtract'], c: 0, why: 'By the decimal.' },
    { q: 'The whole from a part:', a: ['multiply', 'divide', 'add', 'subtract'], c: 1, why: 'By the decimal.' },
    { q: 'The original after an increase:', a: ['multiply by the multiplier', 'divide by the multiplier', 'subtract the percentage', 'add it back'], c: 1, why: 'The reverse question.' },
    { q: 'Successive changes:', a: ['add', 'multiply', 'cancel', 'subtract'], c: 1, why: 'The multipliers.' },
    { q: 'Percentage change divides by:', a: ['the new value', 'the old value', m('100'), 'the change'], c: 1, why: 'The base.' },
    { q: 'An answer larger than the whole is:', a: ['always wrong', 'possible', 'impossible', 'a decimal'], c: 1, why: 'Over ' + m('100%') + '.' }
  ],
  practice: {
    easy: [
      [m('18%') + ' of ' + m('350'), m('63')],
      [m('63') + ' is ' + m('18%') + ' of', m('350')],
      [m('63') + ' as a percentage of ' + m('350'), m('18%')],
      [m('350') + ' up ' + m('18%'), m('413')],
      [m('350') + ' down ' + m('18%'), m('287')],
      ['The multiplier for ' + m('+18%'), m('1.18')],
      ['The multiplier for ' + m('−18%'), m('0.82')]
    ],
    med: [
      ['After ' + m('+18%') + ' it is ' + m('413') + ': before', m('350')],
      ['After ' + m('−18%') + ' it is ' + m('287') + ': before', m('350')],
      ['Up ' + m('18%') + ' then down ' + m('18%'), m('−3.24%')],
      ['From ' + m('40') + ' to ' + m('50'), m('+25%')],
      ['From ' + m('50') + ' to ' + m('40'), m('−20%')],
      ['Bought ' + m('40 000') + ', sold ' + m('50 000'), m('25%') + ' profit'],
      [m('12.5%') + ' of ' + m('480'), m('60')]
    ],
    hard: [
      ['A price after ' + m('30%') + ' off is ' + m('147 000') + ': the original', m('210 000')],
      ['Up ' + m('25%') + ' then down ' + m('20%'), 'No change'],
      ['Two rises of ' + m('15%') + ' from ' + m('200'), m('264.5')],
      [m('72') + ' as a percentage of ' + m('60'), m('120%')],
      ['A salary of ' + m('3 000 000') + ' after ' + m('12%') + ' rise and ' + m('5%') + ' tax', m('3 192 000')],
      ['Which loses more: ' + m('−10%') + ' twice, or ' + m('−20%') + ' once?', m('−20%') + ' once, at ' + m('0.8') + ' against ' + m('0.81')],
      ['Why check the size of a percentage answer?', 'Most lost marks are answers of obviously the wrong size']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Name the row of the method table before every calculation.',
  homework: [
    'Find ' + m('22%') + ' of ' + m('450') + ' and write ' + m('99') + ' as a percentage of ' + m('450') + '.',
    'Increase ' + m('450') + ' by ' + m('22%') + ' and decrease it by ' + m('22%') + '.',
    'After a rise of ' + m('22%') + ' a price is ' + m('549') + '. Find the original.',
    'A price rises ' + m('30%') + ' and then falls ' + m('30%') + '. Find the net change.',
    'A trader buys at ' + m('80 000') + ' and sells at ' + m('92 000') + '. Find the profit percentage.'
  ]
});

/* ============================== 36 ============================== */
G6_MAT.push({
  id: 'g6-36', stream: 'mat', grade: 6, quarter: 2, lessons: '74–75', hours: 2,
  title: 'Control work 4 — percentages, and work on the mistakes',
  subtitle: 'The three questions, the multiplier and the reverse case, under time.',
  uz: 'Matematika 6, Nazorat ishi 4', uzPage: 'pp. 154–210',
  cam: 'S7 10 review', camPage: 'Stage 7, pp. 96–104', wb: 'Control paper 4',
  objectives: [
    'Convert between percentages, fractions and decimals.',
    'Find a part, a whole and a percentage.',
    'Handle an increase, a decrease and a reverse question.',
    'Classify each lost mark and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Percentage', 'Foiz', 'Процент'],
    ['Multiplier', 'Ko‘paytuvchi', 'Множитель'],
    ['Whole', 'Butun', 'Целое'],
    ['Increase', 'Ortish', 'Увеличение'],
    ['Original value', 'Boshlang‘ich qiymat', 'Первоначальное значение'],
    ['Profit', 'Foyda', 'Прибыль'],
    ['Diagnosis', 'Tashxis', 'Диагностика']
  ],
  timing: [[3, 'Instructions'], [35, 'The paper'], [12, 'Answers'], [25, 'Diagnosis and rewrite'], [5, 'The map']],
  sections: [
    {
      h: 'The paper — 25 marks, 35 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Write ${m('35%')} as a fraction in lowest terms and as a decimal</td><td class="m">3</td><td>L55</td></tr>
        <tr><td>2</td><td>Find ${m('18%')} of ${m('350')}</td><td class="m">3</td><td>L59–62</td></tr>
        <tr><td>3</td><td>${m('63')} is ${m('18%')} of a number: find it</td><td class="m">4</td><td>L59–62</td></tr>
        <tr><td>4</td><td>Write ${m('42')} as a percentage of ${m('56')}</td><td class="m">3</td><td>L59–62</td></tr>
        <tr><td>5</td><td>Increase ${m('80 000')} by ${m('15%')}</td><td class="m">3</td><td>L63–66</td></tr>
        <tr><td>6</td><td>After a fall of ${m('20%')} a price is ${m('64 000')}: find the original</td><td class="m">4</td><td>L63–66</td></tr>
        <tr><td>7</td><td>A trader buys at ${m('40 000')} and sells at ${m('50 000')}: find the profit percentage</td><td class="m">5</td><td>L67–70</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The answers</div>
      ${m(f('7', '20'))} and ${m('0.35')}; ${m('63')}; ${m('350')}; ${m('75%')}; ${m('92 000')};
      ${m('80 000')}; ${m('25%')} profit.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>fraction not simplified</td><td class="m">${f('35', '100')}</td><td class="m">${f('7', '20')}</td></tr>
        <tr><td>decimal point misplaced</td><td class="m">3.5</td><td class="m">0.35</td></tr>
        <tr><td>multiplied instead of divided</td><td class="m">63 · 0.18</td><td class="m">63 ÷ 0.18</td></tr>
        <tr><td>part and whole swapped</td><td class="m">${f('56', '42')}</td><td class="m">${f('42', '56')}</td></tr>
        <tr><td>increase found but not added</td><td class="m">12 000</td><td class="m">92 000</td></tr>
        <tr><td>reverse question added back</td><td class="m">64 000 + 12 800</td><td class="m">64 000 ÷ 0.8</td></tr>
        <tr><td>profit on the selling price</td><td class="m">${f('10 000', '50 000')} = 20%</td><td class="m">${f('10 000', '40 000')} = 25%</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'The chapter as one map',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>Operation</th><th>Sense check</th></tr></thead>
      <tbody>
        <tr><td>a part</td><td>multiply</td><td>smaller than the whole</td></tr>
        <tr><td>the whole</td><td>divide</td><td>larger than the part</td></tr>
        <tr><td>the percentage</td><td class="m">${f('part', 'whole')} · 100</td><td>under ${m('100')} if it really is a part</td></tr>
        <tr><td>increase</td><td class="m">· (1 + ${f('p', '100')})</td><td>larger</td></tr>
        <tr><td>decrease</td><td class="m">· (1 − ${f('p', '100')})</td><td>smaller</td></tr>
        <tr><td>reverse</td><td>divide by the multiplier</td><td>multiply forwards to check</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Looking forward</div>
      Percentages return in the pie chart in Quarter IV, where ${m('360°')} is shared out, and in every
      later problem about money. The next two lessons are the decimals that all this arithmetic
      needs.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q3: ' + m('63') + ' is ' + m('18%') + ' of a number.',
      steps: [
        ['The whole is wanted, so divide.', ''],
        [m('63 ÷ 0.18'), ''],
        [m('= 350'), ''],
        ['Check: ' + m('0.18 · 350 = 63') + ' ✓', '']
      ],
      ans: m('350')
    },
    {
      q: 'Model answer, Q6: after ' + m('−20%') + ' a price is ' + m('64 000') + '.',
      steps: [
        ['The multiplier was ' + m('0.8') + '.', ''],
        [m('64 000 ÷ 0.8'), 'Divide, never add back.'],
        [m('= 80 000'), 'Check: ' + m('80 000 · 0.8 = 64 000') + ' ✓']
      ],
      ans: m('80 000')
    },
    {
      q: 'Model answer, Q7: bought at ' + m('40 000') + ', sold at ' + m('50 000') + '.',
      steps: [
        ['Profit: ' + m('10 000') + '.', ''],
        ['The base is the cost price.', ''],
        [m(f('10 000', '40 000') + ' · 100'), ''],
        [m('= 25%'), '']
      ],
      ans: m('25%') + ' profit'
    }
  ],
  modelNote: 'Return Q6 and Q7 first; both are decided by which number is the base, and naming the base is what the class needs to practise.',
  interactive: {
    type: 'quiz',
    title: 'The chapter in eight questions',
    hint: 'Name the base, then the operation.',
    items: [
      { q: m('35%') + ' as a fraction in lowest terms:', a: [m(f('35', '100')), m(f('7', '20')), m(f('1', '3')), m(f('3', '5'))], c: 1, why: 'Divide by ' + m('5') + '.' },
      { q: m('35%') + ' as a decimal:', a: [m('3.5'), m('0.35'), m('0.035'), m('35')], c: 1, why: 'Divide by ' + m('100') + '.' },
      { q: m('18%') + ' of ' + m('350') + ':', a: [m('63'), m('68'), m('54'), m('35')], c: 0, why: m('0.18 · 350') + '.' },
      { q: m('63') + ' is ' + m('18%') + ' of:', a: [m('11.34'), m('350'), m('81'), m('413')], c: 1, why: 'Divide.' },
      { q: m('42') + ' as a percentage of ' + m('56') + ':', a: [m('75%'), m('133%'), m('42%'), m('24%')], c: 0, why: m(f('42', '56')) + '.' },
      { q: m('80 000') + ' increased by ' + m('15%') + ':', a: [m('92 000'), m('12 000'), m('80 015'), m('68 000')], c: 0, why: m('· 1.15') + '.' },
      { q: 'After ' + m('−20%') + ' it is ' + m('64 000') + '; before:', a: [m('76 800'), m('80 000'), m('51 200'), m('84 000')], c: 1, why: m('÷ 0.8') + '.' },
      { q: 'Bought ' + m('40 000') + ', sold ' + m('50 000') + ':', a: [m('20%'), m('25%'), m('10%'), m('125%')], c: 1, why: 'Base is the cost.' }
    ]
  },
  quiz: [
    { q: 'Q1 needs the fraction:', a: ['as written', 'in lowest terms', 'as a decimal only', 'as a percentage'], c: 1, why: 'A mark for simplifying.' },
    { q: 'Q3 is:', a: ['multiplication', 'division', 'addition', 'a percentage'], c: 1, why: 'The whole is wanted.' },
    { q: 'Q4 puts underneath:', a: [m('42'), m('56'), m('100'), m('14')], c: 1, why: 'The whole.' },
    { q: 'Q5 ends with:', a: ['the increase', 'the new amount', 'the percentage', 'the multiplier'], c: 1, why: 'Add it on, or multiply.' },
    { q: 'Q6 is:', a: ['multiplication', 'division', 'subtraction', 'addition'], c: 1, why: 'The reverse question.' },
    { q: 'Q7 divides by:', a: ['the selling price', 'the cost price', 'the profit', m('100')], c: 1, why: 'What was paid.' }
  ],
  practice: {
    easy: [
      [m('35%') + ' as a fraction', m(f('7', '20'))],
      [m('35%') + ' as a decimal', m('0.35')],
      [m('18%') + ' of ' + m('350'), m('63')],
      [m('63') + ' is ' + m('18%') + ' of', m('350')],
      [m('42') + ' as a percentage of ' + m('56'), m('75%')],
      [m('80 000') + ' up ' + m('15%'), m('92 000')],
      ['After ' + m('−20%') + ' it is ' + m('64 000') + ': before', m('80 000')]
    ],
    med: [
      ['Bought ' + m('40 000') + ', sold ' + m('50 000'), m('25%') + ' profit'],
      [m('12%') + ' of ' + m('2 500'), m('300')],
      [m('96') + ' is ' + m('40%') + ' of', m('240')],
      [m('27') + ' as a percentage of ' + m('45'), m('60%')],
      [m('600') + ' down ' + m('35%'), m('390')],
      ['After ' + m('+25%') + ' it is ' + m('500') + ': before', m('400')],
      ['Bought ' + m('60 000') + ', sold ' + m('54 000'), m('10%') + ' loss']
    ],
    hard: [
      ['Up ' + m('20%') + ' then down ' + m('25%'), m('−10%')],
      ['A price after ' + m('40%') + ' off is ' + m('66 000') + ': the original', m('110 000')],
      [m('84') + ' as a percentage of ' + m('70'), m('120%')],
      ['A salary rises ' + m('8%') + ' to ' + m('2 700 000') + ': the old salary', m('2 500 000')],
      [m('2.5%') + ' of ' + m('16 000'), m('400')],
      ['Which is worth more: ' + m('15%') + ' of ' + m('80') + ' or ' + m('80%') + ' of ' + m('15') + '?', 'Equal — both ' + m('12')],
      ['Why is the base always named first?', 'Every percentage is a percentage of something']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite every question you lost a mark on in full, from the first line.',
  homework: [
    'Rewrite in full every question on which you lost a mark.',
    'Write ' + m('64%') + ' as a fraction in lowest terms and as a decimal.',
    'Find ' + m('24%') + ' of ' + m('750') + ', and say what ' + m('180') + ' is as a percentage of ' + m('750') + '.',
    'After a rise of ' + m('30%') + ' a price is ' + m('91 000') + '. Find the original.',
    'A trader buys at ' + m('120 000') + ' and sells at ' + m('138 000') + '. Find the profit percentage.'
  ]
});

/* ============================== 37 ============================== */
G6_MAT.push({
  id: 'g6-37', stream: 'mat', grade: 6, quarter: 2, lessons: '76–77', hours: 2,
  title: 'Ordering, adding and subtracting decimals',
  subtitle: 'A Cambridge insert: place value decides the order, and the points line up for the arithmetic.',
  uz: 'Matematika 6, qo‘shimcha mavzu', uzPage: 'pp. 211–216',
  cam: 'S7 4.1–4.2', camPage: 'Stage 7, pp. 42–48', wb: 'Exercise 4.1',
  objectives: [
    'Compare and order decimals of different lengths.',
    'Add and subtract decimals by lining up the points.',
    'Use zeros to fill empty places.',
    'Estimate a decimal calculation before doing it.'
  ],
  terms: [
    ['Decimal', 'O‘nli kasr', 'Десятичная дробь'],
    ['Decimal point', 'O‘nli nuqta (vergul)', 'Десятичная запятая'],
    ['Tenth', 'O‘ndan bir', 'Десятая'],
    ['Hundredth', 'Yuzdan bir', 'Сотая'],
    ['Thousandth', 'Mingdan bir', 'Тысячная'],
    ['To order', 'Tartiblash', 'Упорядочить'],
    ['Trailing zero', 'Oxirgi nol', 'Конечный ноль'],
    ['To line up', 'Ustma-ust qo‘yish', 'Выровнять']
  ],
  timing: [[20, 'Ordering'], [25, 'Adding'], [25, 'Subtracting'], [8, 'Estimating'], [2, 'Homework']],
  sections: [
    {
      h: 'Ordering',
      html: `<p>Compare column by column from the left, not by counting digits. Fill the short numbers with
      trailing zeros so every number has the same length.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Numbers</th><th>Filled out</th><th>Order</th></tr></thead>
      <tbody>
        <tr><td class="m">0.7, 0.65</td><td class="m">0.70, 0.65</td><td class="m">0.65 < 0.7</td></tr>
        <tr><td class="m">3.4, 3.25, 3.5</td><td class="m">3.40, 3.25, 3.50</td><td class="m">3.25 < 3.4 < 3.5</td></tr>
        <tr><td class="m">0.09, 0.1</td><td class="m">0.09, 0.10</td><td class="m">0.09 < 0.1</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">More digits does not mean bigger</span>
      ${m('0.65')} has more digits than ${m('0.7')} and is smaller. The comparison is made column by
      column: tenths first, then hundredths.</div>`
    },
    {
      h: 'Adding',
      html: `<p>Write the numbers with their points in a vertical line and add column by column, exactly as
      with whole numbers.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Sum</th><th>Lined up</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">4.7 + 2.85</td><td class="m">4.70 + 2.85</td><td class="m">7.55</td></tr>
        <tr><td class="m">12.6 + 0.47</td><td class="m">12.60 + 0.47</td><td class="m">13.07</td></tr>
        <tr><td class="m">3 + 0.45</td><td class="m">3.00 + 0.45</td><td class="m">3.45</td></tr>
        <tr><td class="m">0.8 + 0.9</td><td class="m">0.8 + 0.9</td><td class="m">1.7</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A whole number has a point too</div>
      ${m('3')} is ${m('3.00')} when it is being added to hundredths. Writing the zeros makes the columns
      line up and the arithmetic ordinary.</div>`
    },
    {
      h: 'Subtracting',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Difference</th><th>Lined up</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">9.1 − 3.62</td><td class="m">9.10 − 3.62</td><td class="m">5.48</td></tr>
        <tr><td class="m">5 − 1.35</td><td class="m">5.00 − 1.35</td><td class="m">3.65</td></tr>
        <tr><td class="m">7.4 − 0.85</td><td class="m">7.40 − 0.85</td><td class="m">6.55</td></tr>
        <tr><td class="m">0.5 − 0.28</td><td class="m">0.50 − 0.28</td><td class="m">0.22</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Fill the gap before borrowing</span>
      ${m('9.1 − 3.62')} needs the ${m('9.1')} written as ${m('9.10')}; without the zero there is nothing
      in the hundredths column to borrow from, and the answer comes out wrong by a tenth.</div>`
    },
    {
      h: 'Estimating',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Calculation</th><th>Estimate</th><th>Exact</th></tr></thead>
      <tbody>
        <tr><td class="m">4.7 + 2.85</td><td class="m">5 + 3 = 8</td><td class="m">7.55</td></tr>
        <tr><td class="m">9.1 − 3.62</td><td class="m">9 − 4 = 5</td><td class="m">5.48</td></tr>
        <tr><td class="m">12.6 + 0.47</td><td class="m">13 + 0 = 13</td><td class="m">13.07</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The estimate places the point</div>
      An answer of ${m('75.5')} or ${m('0.755')} would be rejected at once by an estimate of ${m('8')}. A
      misplaced decimal point is the error estimating is best at catching.</div>`
    }
  ],
  examples: [
    {
      q: 'Order ' + m('3.4, 3.25') + ' and ' + m('3.5') + '.',
      steps: [
        ['Fill out: ' + m('3.40, 3.25, 3.50') + '.', ''],
        ['Compare the tenths: ' + m('2 < 4 < 5') + '.', ''],
        [m('3.25 < 3.4 < 3.5'), '']
      ],
      ans: m('3.25 < 3.4 < 3.5')
    },
    {
      q: 'Compute ' + m('9.1 − 3.62') + '.',
      steps: [
        ['Write ' + m('9.1') + ' as ' + m('9.10') + '.', ''],
        ['Line up the points and subtract.', ''],
        [m('= 5.48'), 'Estimate: ' + m('9 − 4 = 5') + ' ✓']
      ],
      ans: m('5.48')
    },
    {
      q: 'Compute ' + m('3 + 0.45') + ' and ' + m('5 − 1.35') + '.',
      steps: [
        [m('3.00 + 0.45 = 3.45'), ''],
        [m('5.00 − 1.35 = 3.65'), 'Whole numbers get zeros too.']
      ],
      ans: m('3.45') + ' and ' + m('3.65')
    }
  ],
  modelNote: 'Ask which is bigger, 0.7 or 0.65, before teaching anything; the split in the class shows exactly who is counting digits rather than reading place value.',
  interactive: {
    type: 'quiz',
    title: 'Place value decides',
    hint: 'Fill with zeros, then compare column by column.',
    items: [
      { q: 'Which is larger, ' + m('0.7') + ' or ' + m('0.65') + '?', a: [m('0.7'), m('0.65'), 'equal', 'cannot say'], c: 0, why: 'Seven tenths beats six.' },
      { q: 'Which is larger, ' + m('0.09') + ' or ' + m('0.1') + '?', a: [m('0.09'), m('0.1'), 'equal', 'cannot say'], c: 1, why: 'One tenth is ten hundredths.' },
      { q: m('4.7 + 2.85') + ' equals:', a: [m('7.55'), m('6.55'), m('7.12'), m('4.98')], c: 0, why: 'Line up the points.' },
      { q: m('9.1 − 3.62') + ' equals:', a: [m('5.48'), m('6.48'), m('5.52'), m('6.52')], c: 0, why: 'Write ' + m('9.10') + '.' },
      { q: m('3 + 0.45') + ' equals:', a: [m('0.75'), m('3.45'), m('7.5'), m('3.045')], c: 1, why: m('3.00 + 0.45') + '.' },
      { q: m('5 − 1.35') + ' equals:', a: [m('3.65'), m('4.65'), m('3.75'), m('4.35')], c: 0, why: m('5.00 − 1.35') + '.' },
      { q: m('0.8 + 0.9') + ' equals:', a: [m('0.17'), m('1.7'), m('1.07'), m('0.98')], c: 1, why: 'The tenths carry.' },
      { q: 'An estimate of ' + m('4.7 + 2.85') + ' is:', a: [m('8'), m('80'), m('0.8'), m('7.55')], c: 0, why: m('5 + 3') + '.' }
    ]
  },
  quiz: [
    { q: 'To compare decimals you:', a: ['count the digits', 'compare column by column', 'add them', 'round them'], c: 1, why: 'Place value.' },
    { q: m('0.65') + ' compared with ' + m('0.7') + ' is:', a: ['larger', 'smaller', 'equal', 'undetermined'], c: 1, why: 'Six tenths against seven.' },
    { q: 'To add decimals you line up:', a: ['the last digits', 'the decimal points', 'the first digits', 'nothing'], c: 1, why: 'Columns must match.' },
    { q: m('9.1') + ' written to two decimal places is:', a: [m('9.01'), m('9.10'), m('9.1'), m('0.91')], c: 1, why: 'A trailing zero.' },
    { q: m('12.6 + 0.47') + ' equals:', a: [m('13.07'), m('12.13'), m('17.6'), m('13.7')], c: 0, why: 'Line up.' },
    { q: 'An estimate mainly checks:', a: ['the digits', 'the decimal point', 'the signs', 'the units'], c: 1, why: 'The size of the answer.' }
  ],
  practice: {
    easy: [
      ['Larger: ' + m('0.7') + ' or ' + m('0.65'), m('0.7')],
      ['Larger: ' + m('0.09') + ' or ' + m('0.1'), m('0.1')],
      ['Order ' + m('3.4, 3.25, 3.5'), m('3.25 < 3.4 < 3.5')],
      [m('4.7 + 2.85'), m('7.55')],
      [m('12.6 + 0.47'), m('13.07')],
      [m('3 + 0.45'), m('3.45')],
      [m('0.8 + 0.9'), m('1.7')]
    ],
    med: [
      [m('9.1 − 3.62'), m('5.48')],
      [m('5 − 1.35'), m('3.65')],
      [m('7.4 − 0.85'), m('6.55')],
      [m('0.5 − 0.28'), m('0.22')],
      ['Estimate ' + m('4.7 + 2.85'), m('8')],
      ['Estimate ' + m('9.1 − 3.62'), m('5')],
      ['Order ' + m('0.5, 0.45, 0.505'), m('0.45 < 0.5 < 0.505')]
    ],
    hard: [
      [m('12.05 + 3.7 + 0.68'), m('16.43')],
      [m('20 − 6.47'), m('13.53')],
      [m('4.2 − 1.35 + 0.7'), m('3.55')],
      ['Order ' + m('1.1, 1.01, 1.011, 1.101'), m('1.01 < 1.011 < 1.1 < 1.101')],
      ['The number halfway between ' + m('0.6') + ' and ' + m('0.7'), m('0.65')],
      ['A length of ' + m('2.4') + ' m less ' + m('85') + ' cm', m('1.55') + ' m'],
      ['Why write ' + m('9.1') + ' as ' + m('9.10') + ' before subtracting?', 'The hundredths column needs a digit to borrow from']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Fill every number with trailing zeros so all have the same length.',
  homework: [
    'Order ' + m('2.3, 2.25, 2.4') + ' and ' + m('2.05') + '.',
    'Compute ' + m('6.8 + 3.45') + ' and ' + m('0.9 + 0.75') + '.',
    'Compute ' + m('8.2 − 4.67') + ' and ' + m('6 − 2.48') + '.',
    'Estimate each of the four answers above and compare with your exact values.',
    'A plank ' + m('3.5') + ' m long has ' + m('68') + ' cm cut off. How much is left, in metres?'
  ]
});

/* ============================== 38 ============================== */
G6_MAT.push({
  id: 'g6-38', stream: 'mat', grade: 6, quarter: 2, lessons: '78–79', hours: 2,
  title: 'Multiplying and dividing decimals',
  subtitle: 'A Cambridge insert: count the decimal places for a product, and shift both numbers for a quotient.',
  uz: 'Matematika 6, qo‘shimcha mavzu', uzPage: 'pp. 217–222',
  cam: 'S7 4.3–4.4', camPage: 'Stage 7, pp. 48–54', wb: 'Exercise 4.3',
  objectives: [
    'Multiply decimals by counting the decimal places.',
    'Divide a decimal by a whole number.',
    'Divide by a decimal by shifting both numbers.',
    'Check every answer against an estimate.'
  ],
  terms: [
    ['To multiply', 'Ko‘paytirish', 'Умножать'],
    ['To divide', 'Bo‘lish', 'Делить'],
    ['Decimal place', 'O‘nli xona', 'Десятичный знак'],
    ['Product', 'Ko‘paytma', 'Произведение'],
    ['Quotient', 'Bo‘linma', 'Частное'],
    ['To shift', 'Siljitmoq', 'Сдвигать'],
    ['Whole-number divisor', 'Butun bo‘luvchi', 'Целый делитель'],
    ['Estimate', 'Baholash', 'Оценка']
  ],
  timing: [[25, 'Multiplying'], [25, 'Dividing by a whole number'], [25, 'Dividing by a decimal'], [3, 'Checking'], [2, 'Homework']],
  sections: [
    {
      h: 'Multiplying',
      html: `<p>Multiply as if there were no points, then put in as many decimal places as the two numbers
      had between them.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Product</th><th>Whole-number version</th><th>Places</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">0.3 · 0.4</td><td class="m">3 · 4 = 12</td><td class="m">2</td><td class="m">0.12</td></tr>
        <tr><td class="m">1.2 · 5</td><td class="m">12 · 5 = 60</td><td class="m">1</td><td class="m">6.0</td></tr>
        <tr><td class="m">2.5 · 0.4</td><td class="m">25 · 4 = 100</td><td class="m">2</td><td class="m">1.00</td></tr>
        <tr><td class="m">6.9 · 5.2</td><td class="m">69 · 52 = 3588</td><td class="m">2</td><td class="m">35.88</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('0.3 · 0.4')} is ${m('0.12')}, not ${m('1.2')}</span>
      Two decimal places go in because the two numbers had one each. Multiplying two numbers below
      ${m('1')} gives an answer smaller than either of them.</div>`
    },
    {
      h: 'Dividing by a whole number',
      html: `<p>Divide as usual and keep the decimal point above where it was.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Quotient</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">7.2 ÷ 4</td><td class="m">72 ÷ 4 = 18</td><td class="m">1.8</td></tr>
        <tr><td class="m">0.35 ÷ 5</td><td class="m">35 ÷ 5 = 7</td><td class="m">0.07</td></tr>
        <tr><td class="m">9 ÷ 4</td><td class="m">9.00 ÷ 4</td><td class="m">2.25</td></tr>
        <tr><td class="m">1.2 ÷ 8</td><td class="m">1.200 ÷ 8</td><td class="m">0.15</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Zeros may be added after the point</div>
      ${m('9 ÷ 4')} does not stop at ${m('2')} remainder ${m('1')}: writing ${m('9.00')} lets the division
      finish exactly, at ${m('2.25')}.</div>`
    },
    {
      h: 'Dividing by a decimal',
      html: `<p>Shift the point in <b>both</b> numbers until the divisor is a whole number. The quotient is
      unchanged, because both have been multiplied by the same power of ten.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Quotient</th><th>Shifted</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">6 ÷ 0.2</td><td class="m">60 ÷ 2</td><td class="m">30</td></tr>
        <tr><td class="m">4.8 ÷ 0.6</td><td class="m">48 ÷ 6</td><td class="m">8</td></tr>
        <tr><td class="m">1.44 ÷ 0.12</td><td class="m">144 ÷ 12</td><td class="m">12</td></tr>
        <tr><td class="m">0.9 ÷ 0.05</td><td class="m">90 ÷ 5</td><td class="m">18</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Shift both, by the same amount</span>
      ${m('6 ÷ 0.2')} becomes ${m('60 ÷ 2')}, not ${m('6 ÷ 2')}. Shifting only the divisor changes the
      answer by a factor of ten.</div>`
    },
    {
      h: 'Checking',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Calculation</th><th>Estimate</th><th>Exact</th></tr></thead>
      <tbody>
        <tr><td class="m">6.9 · 5.2</td><td class="m">7 · 5 = 35</td><td class="m">35.88</td></tr>
        <tr><td class="m">0.3 · 0.4</td><td>less than ${m('0.4')}</td><td class="m">0.12</td></tr>
        <tr><td class="m">6 ÷ 0.2</td><td>much more than ${m('6')}</td><td class="m">30</td></tr>
        <tr><td class="m">7.2 ÷ 4</td><td>about ${m('2')}</td><td class="m">1.8</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Two questions before every answer</div>
      Should it be bigger or smaller than what I started with, and roughly how big? A decimal point in the
      wrong place fails both tests immediately.</div>`
    }
  ],
  examples: [
    {
      q: 'Compute ' + m('6.9 · 5.2') + '.',
      steps: [
        ['Ignore the points: ' + m('69 · 52 = 3 588') + '.', ''],
        ['One place plus one place makes two.', ''],
        [m('= 35.88'), 'Estimate ' + m('7 · 5 = 35') + ' ✓']
      ],
      ans: m('35.88')
    },
    {
      q: 'Compute ' + m('4.8 ÷ 0.6') + '.',
      steps: [
        ['Shift both one place: ' + m('48 ÷ 6') + '.', ''],
        [m('= 8'), ''],
        ['Sense check: the divisor is under ' + m('1') + ', so the answer beats ' + m('4.8') + ' ✓', '']
      ],
      ans: m('8')
    },
    {
      q: 'Compute ' + m('9 ÷ 4') + '.',
      steps: [
        ['Write ' + m('9') + ' as ' + m('9.00') + '.', ''],
        [m('9.00 ÷ 4'), ''],
        [m('= 2.25'), '']
      ],
      ans: m('2.25')
    }
  ],
  modelNote: 'Ask for 0.3 × 0.4 before any rule; the popular answer of 1.2 is worth writing on the board and then testing against “less than a half of 0.4”.',
  interactive: {
    type: 'quiz',
    title: 'Places and shifts',
    hint: 'Count places for a product; shift both for a quotient.',
    items: [
      { q: m('0.3 · 0.4') + ' equals:', a: [m('1.2'), m('0.12'), m('0.012'), m('12')], c: 1, why: 'Two decimal places.' },
      { q: m('1.2 · 5') + ' equals:', a: [m('0.6'), m('6'), m('60'), m('6.5')], c: 1, why: 'One place.' },
      { q: m('6.9 · 5.2') + ' equals:', a: [m('35.88'), m('3.588'), m('358.8'), m('34.88')], c: 0, why: 'Estimate ' + m('35') + '.' },
      { q: m('7.2 ÷ 4') + ' equals:', a: [m('1.8'), m('18'), m('0.18'), m('2.8')], c: 0, why: m('72 ÷ 4') + '.' },
      { q: m('9 ÷ 4') + ' equals:', a: [m('2.2'), m('2.25'), m('2.5'), m('2') + ' r ' + m('1')], c: 1, why: 'Add zeros after the point.' },
      { q: m('6 ÷ 0.2') + ' equals:', a: [m('3'), m('12'), m('30'), m('1.2')], c: 2, why: m('60 ÷ 2') + '.' },
      { q: m('1.44 ÷ 0.12') + ' equals:', a: [m('1.2'), m('12'), m('120'), m('0.12')], c: 1, why: m('144 ÷ 12') + '.' },
      { q: 'Multiplying two numbers below ' + m('1') + ' gives:', a: ['a larger answer', 'a smaller answer than both', 'the same', 'a whole number'], c: 1, why: m('0.3 · 0.4 = 0.12') + '.' }
    ]
  },
  quiz: [
    { q: 'The number of decimal places in a product is:', a: ['the larger of the two', 'the sum of the two', 'always two', 'the smaller'], c: 1, why: 'One each gives two.' },
    { q: m('2.5 · 0.4') + ' equals:', a: [m('1'), m('10'), m('0.1'), m('100')], c: 0, why: m('25 · 4 = 100') + ', two places.' },
    { q: m('0.35 ÷ 5') + ' equals:', a: [m('0.7'), m('0.07'), m('7'), m('0.007')], c: 1, why: m('35 ÷ 5 = 7') + '.' },
    { q: 'To divide by ' + m('0.6') + ' you first:', a: ['shift the dividend only', 'shift both one place', 'shift the divisor only', 'do nothing'], c: 1, why: 'The quotient is unchanged.' },
    { q: m('0.9 ÷ 0.05') + ' equals:', a: [m('1.8'), m('18'), m('180'), m('0.18')], c: 1, why: m('90 ÷ 5') + '.' },
    { q: 'The best first check on a decimal answer is:', a: ['the digits', 'the size and the point', 'the sign', 'the units'], c: 1, why: 'An estimate.' }
  ],
  practice: {
    easy: [
      [m('0.3 · 0.4'), m('0.12')],
      [m('1.2 · 5'), m('6')],
      [m('2.5 · 0.4'), m('1')],
      [m('7.2 ÷ 4'), m('1.8')],
      [m('0.35 ÷ 5'), m('0.07')],
      [m('6 ÷ 0.2'), m('30')],
      [m('4.8 ÷ 0.6'), m('8')]
    ],
    med: [
      [m('6.9 · 5.2'), m('35.88')],
      [m('9 ÷ 4'), m('2.25')],
      [m('1.2 ÷ 8'), m('0.15')],
      [m('1.44 ÷ 0.12'), m('12')],
      [m('0.9 ÷ 0.05'), m('18')],
      [m('0.25 · 0.8'), m('0.2')],
      [m('3.6 ÷ 0.4'), m('9')]
    ],
    hard: [
      [m('0.125 · 0.8'), m('0.1')],
      [m('2.4 · 1.5'), m('3.6')],
      [m('7 ÷ 0.25'), m('28')],
      [m('0.084 ÷ 0.7'), m('0.12')],
      ['A pen costs ' + m('3.5') + ' thousand sum: ' + m('12') + ' pens', m('42') + ' thousand'],
      [m('1.6') + ' kg shared into ' + m('0.2') + ' kg bags', m('8') + ' bags'],
      ['Why does ' + m('6 ÷ 0.2') + ' give ' + m('30') + '?', 'Thirty two-tenths make six']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Estimate first, calculate second, and compare the two.',
  homework: [
    'Compute ' + m('0.6 · 0.7') + ', ' + m('3.4 · 2.5') + ' and ' + m('1.25 · 0.4') + '.',
    'Compute ' + m('8.4 ÷ 6') + ' and ' + m('11 ÷ 8') + '.',
    'Compute ' + m('9 ÷ 0.3') + ' and ' + m('2.4 ÷ 0.08') + '.',
    'Estimate each answer above before finding it exactly.',
    'A rope ' + m('7.2') + ' m long is cut into ' + m('0.6') + ' m pieces. How many pieces?'
  ]
});

/* ============================== 39 ============================== */
G6_MAT.push({
  id: 'g6-39', stream: 'mat', grade: 6, quarter: 2, lessons: '80', hours: 1,
  title: 'Recall — angles',
  subtitle: 'Naming, measuring and estimating angles before the calculating begins.',
  uz: 'Matematika 6, takrorlash', uzPage: 'pp. 223–226',
  cam: 'S7 5 entry', camPage: 'Stage 7, pp. 55–58', wb: 'Exercise 5.1',
  objectives: [
    'Name angles as acute, right, obtuse, straight or reflex.',
    'Measure and draw an angle with a protractor.',
    'Estimate an angle before measuring it.',
    'Use the three-letter naming of an angle.'
  ],
  terms: [
    ['Angle', 'Burchak', 'Угол'],
    ['Vertex', 'Uchi', 'Вершина'],
    ['Arm', 'Tomon', 'Сторона'],
    ['Acute angle', 'O‘tkir burchak', 'Острый угол'],
    ['Right angle', 'To‘g‘ri burchak', 'Прямой угол'],
    ['Obtuse angle', 'O‘tmas burchak', 'Тупой угол'],
    ['Reflex angle', 'Yoyiq burchakdan katta', 'Развёрнутый и больше'],
    ['Protractor', 'Transportir', 'Транспортир']
  ],
  timing: [[10, 'Naming'], [12, 'Measuring'], [12, 'Estimating'], [6, 'Naming with three letters']],
  sections: [
    {
      h: 'Naming',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Name</th><th>Size</th><th>Everyday example</th></tr></thead>
      <tbody>
        <tr><td>acute</td><td>between ${m('0°')} and ${m('90°')}</td><td>a slice of pizza</td></tr>
        <tr><td>right</td><td class="m">90°</td><td>the corner of a book</td></tr>
        <tr><td>obtuse</td><td>between ${m('90°')} and ${m('180°')}</td><td>a laptop half open</td></tr>
        <tr><td>straight</td><td class="m">180°</td><td>a flat line</td></tr>
        <tr><td>reflex</td><td>between ${m('180°')} and ${m('360°')}</td><td>the outside of a corner</td></tr>
        <tr><td>full turn</td><td class="m">360°</td><td>once round</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A right angle is the ruler for the others</div>
      Acute is less than a corner, obtuse is more. Holding up a corner of paper is a perfectly good way to
      classify an angle before measuring it.</div>`
    },
    {
      h: 'Measuring',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>What to do</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>put the centre of the protractor on the vertex</td></tr>
        <tr><td>2</td><td>lay the base line along one arm</td></tr>
        <tr><td>3</td><td>read where the other arm crosses the scale</td></tr>
        <tr><td>4</td><td>choose the scale that agrees with your estimate</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Two scales, one right answer</span>
      A protractor reads ${m('50°')} and ${m('130°')} at the same place. Estimating first — acute or
      obtuse? — decides which to take, and it is why step 4 exists.</div>`
    },
    {
      h: 'Estimating',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Landmark</th><th>Size</th><th>Recognised by</th></tr></thead>
      <tbody>
        <tr><td>a right angle</td><td class="m">90°</td><td>a square corner</td></tr>
        <tr><td>half of it</td><td class="m">45°</td><td>a diagonal of a square</td></tr>
        <tr><td>a third of it</td><td class="m">30°</td><td>a thin wedge</td></tr>
        <tr><td>two right angles</td><td class="m">180°</td><td>a straight line</td></tr>
        <tr><td>a little over a right angle</td><td class="m">100°</td><td>just past square</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Estimate to the nearest landmark first</div>
      “A bit more than ${m('90')}” is enough to reject a reading of ${m('80')}. The estimate is not the
      answer; it is the check on the answer.</div>`
    },
    {
      h: 'Naming with three letters',
      html: `<p>${m('∠ABC')} means the angle at ${m('B')}, between the arms ${m('BA')} and ${m('BC')}. The
      middle letter is always the vertex.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Written</th><th>Vertex</th><th>Arms</th></tr></thead>
      <tbody>
        <tr><td class="m">∠ABC</td><td class="m">B</td><td class="m">BA and BC</td></tr>
        <tr><td class="m">∠XYZ</td><td class="m">Y</td><td class="m">YX and YZ</td></tr>
        <tr><td class="m">∠B</td><td class="m">B</td><td>only if there is no ambiguity</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The middle letter is the vertex</span>
      ${m('∠ABC')} and ${m('∠CBA')} are the same angle; ${m('∠BAC')} is a different one. Reading the middle
      letter first is the habit to build.</div>`
    }
  ],
  examples: [
    {
      q: 'Classify angles of ' + m('42°') + ', ' + m('90°') + ', ' + m('137°') + ' and ' + m('210°') + '.',
      steps: [
        [m('42°') + ' — acute.', ''],
        [m('90°') + ' — right.', ''],
        [m('137°') + ' — obtuse.', ''],
        [m('210°') + ' — reflex.', '']
      ],
      ans: 'Acute, right, obtuse, reflex'
    },
    {
      q: 'A protractor reads either ' + m('50°') + ' or ' + m('130°') + '. The angle looks clearly less than a corner. Which is it?',
      steps: [
        ['Less than a right angle means acute.', ''],
        ['Acute means under ' + m('90°') + '.', ''],
        [m('50°'), '']
      ],
      ans: m('50°')
    },
    {
      q: 'In ' + m('∠PQR') + ', which point is the vertex?',
      steps: [
        ['The middle letter names the vertex.', ''],
        [m('Q') + '.', 'The arms are ' + m('QP') + ' and ' + m('QR') + '.']
      ],
      ans: m('Q')
    }
  ],
  modelNote: 'Have the class estimate ten angles on the board before any protractor comes out; measurement errors of a hundred degrees disappear once estimating is a habit.',
  interactive: {
    type: 'quiz',
    title: 'Name that angle',
    hint: 'Compare with a right angle first.',
    items: [
      { q: m('42°') + ' is:', a: ['acute', 'right', 'obtuse', 'reflex'], c: 0, why: 'Under ' + m('90°') + '.' },
      { q: m('137°') + ' is:', a: ['acute', 'right', 'obtuse', 'reflex'], c: 2, why: 'Between ' + m('90') + ' and ' + m('180') + '.' },
      { q: m('210°') + ' is:', a: ['acute', 'obtuse', 'straight', 'reflex'], c: 3, why: 'Over ' + m('180°') + '.' },
      { q: m('180°') + ' is:', a: ['obtuse', 'straight', 'reflex', 'a full turn'], c: 1, why: 'A flat line.' },
      { q: 'A full turn is:', a: [m('180°'), m('270°'), m('360°'), m('90°')], c: 2, why: 'Once round.' },
      { q: 'In ' + m('∠ABC') + ' the vertex is:', a: [m('A'), m('B'), m('C'), 'any of them'], c: 1, why: 'The middle letter.' },
      { q: m('∠ABC') + ' and ' + m('∠CBA') + ' are:', a: ['the same angle', 'different angles', 'supplementary', 'complementary'], c: 0, why: 'Same vertex, same arms.' },
      { q: 'A protractor showing ' + m('50') + ' and ' + m('130') + ' for an obtuse angle means:', a: [m('50°'), m('130°'), 'either', 'neither'], c: 1, why: 'Obtuse is over ' + m('90°') + '.' }
    ]
  },
  quiz: [
    { q: 'An acute angle is:', a: ['under ' + m('90°'), 'over ' + m('90°'), 'exactly ' + m('90°'), 'over ' + m('180°')], c: 0, why: 'Less than a corner.' },
    { q: 'An obtuse angle is:', a: ['under ' + m('90°'), 'between ' + m('90°') + ' and ' + m('180°'), 'over ' + m('180°'), 'exactly ' + m('180°')], c: 1, why: 'More than a corner.' },
    { q: 'A reflex angle is:', a: ['under ' + m('90°'), 'between ' + m('90°') + ' and ' + m('180°'), 'between ' + m('180°') + ' and ' + m('360°'), 'exactly ' + m('360°')], c: 2, why: 'Past a straight line.' },
    { q: 'The protractor is placed with its centre on:', a: ['an arm', 'the vertex', 'the page', 'the scale'], c: 1, why: 'Where the angle turns.' },
    { q: 'Estimating before measuring decides:', a: ['the arms', 'which scale to read', 'the vertex', 'the units'], c: 1, why: 'Two scales, one answer.' },
    { q: 'In ' + m('∠XYZ') + ' the arms are:', a: [m('XY') + ' and ' + m('XZ'), m('YX') + ' and ' + m('YZ'), m('ZX') + ' and ' + m('ZY'), 'none of these'], c: 1, why: 'From the vertex ' + m('Y') + '.' }
  ],
  practice: {
    easy: [
      ['Classify ' + m('42°'), 'Acute'],
      ['Classify ' + m('90°'), 'Right'],
      ['Classify ' + m('137°'), 'Obtuse'],
      ['Classify ' + m('180°'), 'Straight'],
      ['Classify ' + m('210°'), 'Reflex'],
      ['A full turn', m('360°')],
      ['The vertex of ' + m('∠ABC'), m('B')]
    ],
    med: [
      ['Classify ' + m('89°') + ' and ' + m('91°'), 'Acute and obtuse'],
      ['A protractor reads ' + m('50') + ' or ' + m('130') + ' for an acute angle', m('50°')],
      ['Half a right angle', m('45°')],
      ['A third of a right angle', m('30°')],
      ['Two right angles', m('180°')],
      ['Three right angles', m('270°')],
      ['Are ' + m('∠ABC') + ' and ' + m('∠CBA') + ' the same?', 'Yes']
    ],
    hard: [
      ['The reflex angle beside an angle of ' + m('130°'), m('230°')],
      ['The reflex angle beside a right angle', m('270°')],
      ['An angle and its reflex partner add to', m('360°')],
      ['Why does a protractor carry two scales?', 'So it can be laid along either arm'],
      ['The smallest reflex angle', 'Just over ' + m('180°')],
      ['Estimate the angle between the hands at ' + m('3') + ' o’clock', m('90°')],
      ['And at ' + m('6') + ' o’clock', m('180°')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Estimate every angle before you measure it, and write both numbers down.',
  homework: [
    'Classify angles of ' + m('37°') + ', ' + m('90°') + ', ' + m('154°') + ' and ' + m('265°') + '.',
    'Draw angles of ' + m('35°') + ', ' + m('115°') + ' and ' + m('90°') + ' with a protractor.',
    'Measure four angles from your textbook, estimating each one first.',
    'Name the vertex and the arms of ' + m('∠MNP') + '.',
    'Find the reflex angle that goes with an angle of ' + m('145°') + '.'
  ]
});

/* ============================== 40 ============================== */
G6_MAT.push({
  id: 'g6-40', stream: 'mat', grade: 6, quarter: 2, lessons: '81–83', hours: 3,
  title: 'Unknown angles at a point and on a line',
  subtitle: 'Four facts about angles that meet — and the equations they turn into.',
  uz: 'Matematika 6, §16', uzPage: 'pp. 227–236',
  cam: 'S7 5.1–5.2', camPage: 'Stage 7, pp. 55–62', wb: 'Exercise 5.2',
  objectives: [
    'Use the fact that angles on a straight line add to ' + m('180°') + '.',
    'Use the fact that angles at a point add to ' + m('360°') + '.',
    'Use vertically opposite angles.',
    'Write and solve an equation for an unknown angle.'
  ],
  terms: [
    ['Angles on a line', 'Yoyiq burchak', 'Смежные углы'],
    ['Angles at a point', 'Nuqtadagi burchaklar', 'Углы вокруг точки'],
    ['Vertically opposite', 'Vertikal burchaklar', 'Вертикальные углы'],
    ['Complementary', 'Yig‘indisi 90°', 'Дополнительные до 90°'],
    ['Supplementary', 'Yig‘indisi 180°', 'Смежные'],
    ['To justify', 'Asoslash', 'Обосновать'],
    ['Unknown angle', 'Noma’lum burchak', 'Неизвестный угол'],
    ['Reason', 'Sabab', 'Обоснование']
  ],
  timing: [[25, 'The four facts'], [30, 'One unknown'], [35, 'Equations with letters'], [25, 'Writing reasons'], [5, 'Homework']],
  sections: [
    {
      h: 'The four facts',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Situation</th><th>Fact</th><th>Reason to quote</th></tr></thead>
      <tbody>
        <tr><td>two angles making a straight line</td><td>they add to ${m('180°')}</td><td>angles on a line</td></tr>
        <tr><td>angles filling a turn</td><td>they add to ${m('360°')}</td><td>angles at a point</td></tr>
        <tr><td>two lines crossing</td><td>opposite angles are equal</td><td>vertically opposite</td></tr>
        <tr><td>two angles making a right angle</td><td>they add to ${m('90°')}</td><td>complementary angles</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Every answer carries a reason</div>
      In geometry the number alone is half the answer. “${m('x = 55°')}, angles on a line” is the whole
      one, and the reason is where the mark is.</div>`
    },
    {
      h: 'One unknown',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Fact</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>${m('125°')} on a line with ${m('x')}</td><td class="m">180°</td><td class="m">180 − 125</td><td class="m">55°</td></tr>
        <tr><td>${m('140°, 90°')} and ${m('x')} at a point</td><td class="m">360°</td><td class="m">360 − 230</td><td class="m">130°</td></tr>
        <tr><td>${m('x')} vertically opposite ${m('68°')}</td><td>equal</td><td>—</td><td class="m">68°</td></tr>
        <tr><td>${m('x')} and ${m('37°')} make a right angle</td><td class="m">90°</td><td class="m">90 − 37</td><td class="m">53°</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Choose the fact by the picture, not by the numbers</span>
      Angles that look as if they fill a turn add to ${m('360°')} even if there are five of them; angles
      along a line add to ${m('180°')} however many there are.</div>`
    },
    {
      h: 'Equations with letters',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Situation</th><th>Equation</th><th>Solution</th><th>The angles</th></tr></thead>
      <tbody>
        <tr><td>${m('x')} and ${m('2x')} on a line</td><td class="m">3x = 180</td><td class="m">x = 60</td><td class="m">60°, 120°</td></tr>
        <tr><td>${m('x, x + 20')} and ${m('2x')} at a point with ${m('90°')}</td><td class="m">4x + 110 = 360</td><td class="m">x = 62.5</td><td class="m">62.5°, 82.5°, 125°</td></tr>
        <tr><td>${m('3x')} and ${m('x + 40')} vertically opposite</td><td class="m">3x = x + 40</td><td class="m">x = 20</td><td class="m">60°</td></tr>
        <tr><td>${m('x, 2x, 3x')} on a line</td><td class="m">6x = 180</td><td class="m">x = 30</td><td class="m">30°, 60°, 90°</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Geometry becomes algebra, and back again</div>
      Write the equation from the picture, solve it with the methods of lesson 16, then put the value back
      into every expression to find the actual angles.</div>`
    },
    {
      h: 'Writing reasons',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Statement</th><th>Reason</th></tr></thead>
      <tbody>
        <tr><td class="m">x + 125 = 180</td><td>angles on a straight line</td></tr>
        <tr><td class="m">x = 55°</td><td>solving</td></tr>
        <tr><td class="m">y = 68°</td><td>vertically opposite angles</td></tr>
        <tr><td class="m">a + b + c = 360°</td><td>angles at a point</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">“It looks like it” is not a reason</span>
      A diagram is a guide, not evidence: angles are rarely drawn to scale. The reason must be one of the
      four facts, named.</div>`
    }
  ],
  examples: [
    {
      q: 'Two angles on a straight line are ' + m('125°') + ' and ' + m('x') + '. Find ' + m('x') + '.',
      steps: [
        [m('x + 125 = 180'), 'Angles on a line.'],
        [m('x = 55°'), '']
      ],
      ans: m('55°')
    },
    {
      q: 'Angles of ' + m('x') + ' and ' + m('2x') + ' lie on a straight line. Find both.',
      steps: [
        [m('x + 2x = 180'), ''],
        [m('3x = 180') + ', so ' + m('x = 60') + '.', ''],
        ['The angles are ' + m('60°') + ' and ' + m('120°') + '.', 'Check: they add to ' + m('180°') + ' ✓']
      ],
      ans: m('60°') + ' and ' + m('120°')
    },
    {
      q: 'Two crossing lines make angles of ' + m('3x') + ' and ' + m('x + 40') + ' vertically opposite. Find them.',
      steps: [
        ['Vertically opposite angles are equal.', ''],
        [m('3x = x + 40'), ''],
        [m('2x = 40') + ', so ' + m('x = 20') + '.', ''],
        ['Each angle is ' + m('60°') + '.', '']
      ],
      ans: m('60°')
    }
  ],
  modelNote: 'Insist on a reason beside every line for a fortnight; the habit carries into Grade 7 proofs, where it becomes most of the mark.',
  interactive: {
    type: 'circleAngles',
    title: 'Angles at a point add to ' + m('360°'),
    hint: 'Drag an arm and watch the others adjust.'
  },
  quiz: [
    { q: 'Angles on a straight line add to:', a: [m('90°'), m('180°'), m('270°'), m('360°')], c: 1, why: 'A half turn.' },
    { q: 'Angles at a point add to:', a: [m('90°'), m('180°'), m('270°'), m('360°')], c: 3, why: 'A full turn.' },
    { q: 'Vertically opposite angles are:', a: ['supplementary', 'equal', 'complementary', 'unrelated'], c: 1, why: 'Both are what remains from ' + m('180°') + '.' },
    { q: m('125°') + ' on a line with ' + m('x') + ' gives:', a: [m('45°'), m('55°'), m('65°'), m('235°')], c: 1, why: m('180 − 125') + '.' },
    { q: m('x') + ' and ' + m('2x') + ' on a line give ' + m('x') + ' equal to:', a: [m('45'), m('60'), m('90'), m('120')], c: 1, why: m('3x = 180') + '.' },
    { q: 'A geometry answer needs:', a: ['the number', 'the number and a reason', 'a diagram', 'a measurement'], c: 1, why: 'The reason carries the mark.' }
  ],
  practice: {
    easy: [
      [m('125°') + ' on a line with ' + m('x'), m('55°')],
      [m('90°') + ' on a line with ' + m('x'), m('90°')],
      [m('x') + ' vertically opposite ' + m('68°'), m('68°')],
      [m('x') + ' and ' + m('37°') + ' make a right angle', m('53°')],
      [m('140°, 90°') + ' and ' + m('x') + ' at a point', m('130°')],
      ['Angles on a line add to', m('180°')],
      ['Angles at a point add to', m('360°')]
    ],
    med: [
      [m('x') + ' and ' + m('2x') + ' on a line', m('60°') + ' and ' + m('120°')],
      [m('x, 2x, 3x') + ' on a line', m('30°, 60°, 90°')],
      [m('3x') + ' and ' + m('x + 40') + ' vertically opposite', m('x = 20') + ', each ' + m('60°')],
      [m('x, x, x, x') + ' at a point', m('90°') + ' each'],
      [m('2x') + ' and ' + m('x + 30') + ' on a line: find ' + m('x'), m('x = 50')],
      ['Four angles at a point, three of them ' + m('80°, 100°, 60°'), m('120°')],
      ['Two supplementary angles differ by ' + m('40°'), m('110°') + ' and ' + m('70°')]
    ],
    hard: [
      [m('x, x + 20, 2x') + ' and ' + m('90°') + ' at a point', m('x = 62.5°')],
      ['Two complementary angles in the ratio ' + m('2 : 3'), m('36°') + ' and ' + m('54°')],
      ['Two supplementary angles in the ratio ' + m('4 : 5'), m('80°') + ' and ' + m('100°')],
      ['An angle is ' + m('3') + ' times its supplement', m('135°') + ' and ' + m('45°')],
      ['An angle equals its own complement', m('45°')],
      ['An angle is ' + m('20°') + ' more than twice its complement', m('66' + f('2', '3') + '°')],
      ['Why is “it looks equal” not a reason?', 'Diagrams are rarely drawn to scale']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write a reason beside every line of working.',
  homework: [
    'Find ' + m('x') + ' if ' + m('x') + ' and ' + m('118°') + ' lie on a straight line.',
    'Find ' + m('x') + ' if ' + m('x, 3x') + ' and ' + m('140°') + ' meet at a point.',
    'Find ' + m('x') + ' if ' + m('5x') + ' and ' + m('2x + 60') + ' are vertically opposite.',
    'Two supplementary angles are in the ratio ' + m('3 : 7') + '. Find both.',
    'Find the angle that is twice its own complement.'
  ]
});

/* ============================== 41 ============================== */
G6_MAT.push({
  id: 'g6-41', stream: 'mat', grade: 6, quarter: 2, lessons: '84–86', hours: 3,
  title: 'Unknown angles in triangles and quadrilaterals',
  subtitle: m('180°') + ' in a triangle, ' + m('360°') + ' in a quadrilateral, and the special figures that follow.',
  uz: 'Matematika 6, §17', uzPage: 'pp. 237–246',
  cam: 'S7 5.2', camPage: 'Stage 7, pp. 58–62', wb: 'Exercise 5.3',
  objectives: [
    'Use the angle sum of a triangle and of a quadrilateral.',
    'Use the base angles of an isosceles triangle.',
    'Find angles in figures made of several triangles.',
    'Write an equation for an unknown angle in a figure.'
  ],
  terms: [
    ['Triangle', 'Uchburchak', 'Треугольник'],
    ['Quadrilateral', 'To‘rtburchak', 'Четырёхугольник'],
    ['Angle sum', 'Burchaklar yig‘indisi', 'Сумма углов'],
    ['Isosceles', 'Teng yonli', 'Равнобедренный'],
    ['Equilateral', 'Teng tomonli', 'Равносторонний'],
    ['Base angles', 'Asosdagi burchaklar', 'Углы при основании'],
    ['Parallelogram', 'Parallelogramm', 'Параллелограмм'],
    ['Diagonal', 'Diagonal', 'Диагональ']
  ],
  timing: [[25, 'The angle sum of a triangle'], [30, 'Special triangles'], [35, 'Quadrilaterals'], [25, 'Figures made of triangles'], [5, 'Homework']],
  sections: [
    {
      h: 'The angle sum of a triangle',
      html: `${eq(m('∠A + ∠B + ∠C = 180°'), true)}
      {{fig:triangleAngleSum:The three angles of a triangle}}
      <div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Working</th><th>Third angle</th></tr></thead>
      <tbody>
        <tr><td class="m">50°, 60°</td><td class="m">180 − 110</td><td class="m">70°</td></tr>
        <tr><td class="m">90°, 35°</td><td class="m">180 − 125</td><td class="m">55°</td></tr>
        <tr><td class="m">120°, 25°</td><td class="m">180 − 145</td><td class="m">35°</td></tr>
        <tr><td>angles ${m('x, 2x, 3x')}</td><td class="m">6x = 180</td><td class="m">30°, 60°, 90°</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Tear the corners off and check</div>
      The three corners of any paper triangle lay flat along a straight line. It is not a proof, but it is
      convincing, and the proof waits until Grade 7.</div>`
    },
    {
      h: 'Special triangles',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Kind</th><th>What is equal</th><th>Angles</th></tr></thead>
      <tbody>
        <tr><td>equilateral</td><td>all three sides</td><td class="m">60°, 60°, 60°</td></tr>
        <tr><td>isosceles</td><td>two sides</td><td>the two base angles are equal</td></tr>
        <tr><td>right-angled</td><td>one angle is ${m('90°')}</td><td>the other two add to ${m('90°')}</td></tr>
        <tr><td>right isosceles</td><td>two sides and a right angle</td><td class="m">90°, 45°, 45°</td></tr>
      </tbody></table></div>
      <div class="tablewrap"><table>
      <thead><tr><th>Isosceles triangle</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>apex ${m('40°')}</td><td class="m">(180 − 40) ÷ 2</td><td>${m('70°')} each</td></tr>
        <tr><td>base angle ${m('50°')}</td><td class="m">180 − 100</td><td class="m">80°</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Read which angle is given</span>
      An apex of ${m('40°')} gives base angles of ${m('70°')}; a base angle of ${m('40°')} gives an apex of
      ${m('100°')}. The same number, two different triangles.</div>`
    },
    {
      h: 'Quadrilaterals',
      html: `${eq(m('∠A + ∠B + ∠C + ∠D = 360°'), true)}
      <p>A diagonal cuts any quadrilateral into two triangles, so its angles add to ${m('2 · 180°')}.</p>
      {{fig:quadAngleSum:A quadrilateral split into two triangles}}
      <div class="tablewrap"><table>
      <thead><tr><th>Figure</th><th>Angle facts</th></tr></thead>
      <tbody>
        <tr><td>any quadrilateral</td><td>the four add to ${m('360°')}</td></tr>
        <tr><td>rectangle</td><td>four right angles</td></tr>
        <tr><td>parallelogram</td><td>opposite angles equal; neighbours add to ${m('180°')}</td></tr>
        <tr><td>rhombus</td><td>as a parallelogram, and all sides equal</td></tr>
        <tr><td>kite</td><td>one pair of opposite angles equal</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Two triangles, one quadrilateral</div>
      That single picture explains the ${m('360°')}, and it generalises: a pentagon splits into three
      triangles and has an angle sum of ${m('540°')}.</div>`
    },
    {
      h: 'Figures made of triangles',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Route</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>a triangle with angles ${m('x, x, 80°')}</td><td class="m">2x = 100</td><td class="m">50°</td></tr>
        <tr><td>a quadrilateral with ${m('90°, 90°, 130°')}</td><td class="m">360 − 310</td><td class="m">50°</td></tr>
        <tr><td>a parallelogram with one angle ${m('72°')}</td><td>neighbours add to ${m('180°')}</td><td class="m">108°</td></tr>
        <tr><td>an exterior angle of a triangle, interior ${m('115°')}</td><td class="m">180 − 115</td><td class="m">65°</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Work outwards from what you know</div>
      Fill in every angle you can, even ones the question did not ask for; the wanted angle usually appears
      after two or three of them are written on the diagram.</div>`
    }
  ],
  examples: [
    {
      q: 'A triangle has angles ' + m('50°') + ' and ' + m('60°') + '. Find the third.',
      steps: [
        [m('50 + 60 = 110'), ''],
        [m('180 − 110 = 70'), ''],
        [m('70°'), '']
      ],
      ans: m('70°')
    },
    {
      q: 'An isosceles triangle has an apex angle of ' + m('40°') + '. Find the base angles.',
      steps: [
        ['The two base angles are equal.', ''],
        [m('180 − 40 = 140') + ' shared between them.', ''],
        [m('140 ÷ 2 = 70°') + ' each.', '']
      ],
      ans: m('70°') + ' each'
    },
    {
      q: 'A quadrilateral has angles ' + m('90°, 90°') + ' and ' + m('130°') + '. Find the fourth.',
      steps: [
        ['The four add to ' + m('360°') + '.', ''],
        [m('90 + 90 + 130 = 310'), ''],
        [m('360 − 310 = 50°'), '']
      ],
      ans: m('50°')
    }
  ],
  modelNote: 'Give a quadrilateral and ask the class to draw one diagonal; the 360° is then discovered rather than announced.',
  interactive: {
    type: 'triangleAngles',
    title: 'Drag a vertex — the sum stays at ' + m('180°'),
    hint: 'Watch the three angles change together.'
  },
  quiz: [
    { q: 'The angles of a triangle add to:', a: [m('90°'), m('180°'), m('270°'), m('360°')], c: 1, why: 'Always.' },
    { q: 'The angles of a quadrilateral add to:', a: [m('180°'), m('270°'), m('360°'), m('540°')], c: 2, why: 'Two triangles.' },
    { q: 'An equilateral triangle has angles of:', a: [m('45°'), m('60°'), m('90°'), m('30°')], c: 1, why: m('180 ÷ 3') + '.' },
    { q: 'An isosceles triangle with apex ' + m('40°') + ' has base angles:', a: [m('40°'), m('70°'), m('100°'), m('140°')], c: 1, why: m('(180 − 40) ÷ 2') + '.' },
    { q: 'A parallelogram with one angle ' + m('72°') + ' has a neighbour of:', a: [m('72°'), m('108°'), m('118°'), m('288°')], c: 1, why: 'They add to ' + m('180°') + '.' },
    { q: 'A pentagon’s angles add to:', a: [m('360°'), m('450°'), m('540°'), m('720°')], c: 2, why: 'Three triangles.' }
  ],
  practice: {
    easy: [
      [m('50°') + ' and ' + m('60°') + ': the third angle', m('70°')],
      [m('90°') + ' and ' + m('35°'), m('55°')],
      [m('120°') + ' and ' + m('25°'), m('35°')],
      ['Each angle of an equilateral triangle', m('60°')],
      ['Isosceles with apex ' + m('40°') + ': the base angles', m('70°')],
      ['Isosceles with base angle ' + m('50°') + ': the apex', m('80°')],
      ['A quadrilateral with ' + m('90°, 90°, 130°'), m('50°')]
    ],
    med: [
      ['A triangle with angles ' + m('x, 2x, 3x'), m('30°, 60°, 90°')],
      ['A triangle with ' + m('x, x, 80°'), m('50°') + ' each'],
      ['A parallelogram with one angle ' + m('72°'), m('108°')],
      ['A right isosceles triangle', m('90°, 45°, 45°')],
      ['A quadrilateral with ' + m('x, x, 2x, 2x'), m('60°, 60°, 120°, 120°')],
      ['An exterior angle beside an interior angle of ' + m('115°'), m('65°')],
      ['The angle sum of a pentagon', m('540°')]
    ],
    hard: [
      ['A triangle with angles in the ratio ' + m('2 : 3 : 4'), m('40°, 60°, 80°')],
      ['A quadrilateral with angles in the ratio ' + m('1 : 2 : 3 : 4'), m('36°, 72°, 108°, 144°')],
      ['An isosceles triangle with one angle ' + m('100°') + ': the others', m('40°') + ' each'],
      ['An isosceles triangle with one angle ' + m('40°') + ': two possibilities', m('40°, 70°, 70°') + ' or ' + m('40°, 40°, 100°')],
      ['A kite with angles ' + m('110°, 80°, 80°') + ': the fourth', m('90°')],
      ['Why do a quadrilateral’s angles add to ' + m('360°') + '?', 'A diagonal splits it into two triangles'],
      ['The angle sum of a hexagon', m('720°')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Fill in every angle you can find, not only the one asked for.',
  homework: [
    'A triangle has angles ' + m('72°') + ' and ' + m('43°') + '. Find the third.',
    'An isosceles triangle has an apex angle of ' + m('34°') + '. Find the base angles.',
    'A quadrilateral has angles ' + m('85°, 95°') + ' and ' + m('110°') + '. Find the fourth.',
    'A triangle has angles in the ratio ' + m('3 : 4 : 5') + '. Find them.',
    'A parallelogram has one angle of ' + m('115°') + '. Find all four.'
  ]
});

/* ============================== 42 ============================== */
G6_MAT.push({
  id: 'g6-42', stream: 'mat', grade: 6, quarter: 2, lessons: '87', hours: 1,
  title: 'Control work 5 — angles',
  subtitle: 'Angles on a line, at a point, in triangles and in quadrilaterals.',
  uz: 'Matematika 6, Nazorat ishi 5', uzPage: 'pp. 223–246',
  cam: 'S7 5 review', camPage: 'Stage 7, pp. 55–62', wb: 'Control paper 5',
  objectives: [
    'Classify and measure angles accurately.',
    'Use the four angle facts with a reason each time.',
    'Find angles in triangles and quadrilaterals.',
    'Classify each lost mark and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Acute angle', 'O‘tkir burchak', 'Острый угол'],
    ['Obtuse angle', 'O‘tmas burchak', 'Тупой угол'],
    ['Vertically opposite', 'Vertikal burchaklar', 'Вертикальные углы'],
    ['Angle sum', 'Burchaklar yig‘indisi', 'Сумма углов'],
    ['Isosceles', 'Teng yonli', 'Равнобедренный'],
    ['Reason', 'Asos', 'Обоснование'],
    ['Diagnosis', 'Tashxis', 'Диагностика']
  ],
  timing: [[2, 'Instructions'], [28, 'The paper'], [8, 'Answers and diagnosis'], [2, 'What comes next']],
  sections: [
    {
      h: 'The paper — 20 marks, 28 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Classify ${m('37°, 90°, 128°')} and ${m('245°')}</td><td class="m">2</td><td>L80</td></tr>
        <tr><td>2</td><td>${m('x')} and ${m('118°')} on a straight line: find ${m('x')} with a reason</td><td class="m">3</td><td>L81–83</td></tr>
        <tr><td>3</td><td>${m('x, 3x')} and ${m('140°')} at a point: find ${m('x')}</td><td class="m">3</td><td>L81–83</td></tr>
        <tr><td>4</td><td>${m('5x')} and ${m('2x + 60')} vertically opposite: find the angle</td><td class="m">3</td><td>L81–83</td></tr>
        <tr><td>5</td><td>A triangle with ${m('72°')} and ${m('43°')}: find the third</td><td class="m">3</td><td>L84–86</td></tr>
        <tr><td>6</td><td>An isosceles triangle with apex ${m('34°')}: find the base angles</td><td class="m">3</td><td>L84–86</td></tr>
        <tr><td>7</td><td>A quadrilateral with ${m('85°, 95°')} and ${m('110°')}: find the fourth</td><td class="m">3</td><td>L84–86</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The answers</div>
      acute, right, obtuse, reflex; ${m('62°')}; ${m('55°')}; ${m('100°')}; ${m('65°')}; ${m('73°')} each;
      ${m('70°')}.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>reflex called obtuse</td><td class="m">245°</td><td>over ${m('180°')} is reflex</td></tr>
        <tr><td>no reason given</td><td class="m">x = 62°</td><td>“angles on a straight line”</td></tr>
        <tr><td>angles at a point summed to ${m('180°')}</td><td class="m">x + 3x + 140 = 180</td><td class="m">x + 3x + 140 = 360</td></tr>
        <tr><td>vertically opposite set equal to ${m('180°')}</td><td class="m">5x + 2x + 60 = 180</td><td class="m">5x = 2x + 60</td></tr>
        <tr><td>angle sum taken as ${m('360°')} for a triangle</td><td class="m">360 − 115</td><td class="m">180 − 115</td></tr>
        <tr><td>apex used as a base angle</td><td class="m">34°, 34°, 112°</td><td class="m">34°, 73°, 73°</td></tr>
        <tr><td>quadrilateral summed to ${m('180°')}</td><td>a negative answer</td><td class="m">360°</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'What comes next',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>If you lost marks on</th><th>It returns in</th></tr></thead>
      <tbody>
        <tr><td>Q1</td><td>every diagram for the rest of the year</td></tr>
        <tr><td>Q2–Q4</td><td>the circle, where angles at the centre fill ${m('360°')}</td></tr>
        <tr><td>Q5–Q6</td><td>Grade 7, where these facts are proved</td></tr>
        <tr><td>Q7</td><td>the pie chart in Quarter IV</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Looking forward</div>
      The rest of Quarter II is the circle: its parts, and the length of the curve round it. The
      ${m('360°')} of this paper is what makes a pie chart possible.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q3: ' + m('x, 3x') + ' and ' + m('140°') + ' at a point.',
      steps: [
        [m('x + 3x + 140 = 360'), 'Angles at a point.'],
        [m('4x = 220'), ''],
        [m('x = 55°'), 'Check: ' + m('55 + 165 + 140 = 360') + ' ✓']
      ],
      ans: m('55°')
    },
    {
      q: 'Model answer, Q4: ' + m('5x') + ' and ' + m('2x + 60') + ' vertically opposite.',
      steps: [
        ['Vertically opposite angles are equal.', ''],
        [m('5x = 2x + 60'), ''],
        [m('3x = 60') + ', so ' + m('x = 20') + '.', ''],
        ['Each angle is ' + m('100°') + '.', '']
      ],
      ans: m('100°')
    },
    {
      q: 'Model answer, Q6: isosceles with apex ' + m('34°') + '.',
      steps: [
        [m('180 − 34 = 146') + ' for the two base angles.', ''],
        [m('146 ÷ 2 = 73') + '.', ''],
        [m('73°') + ' each.', 'Check: ' + m('34 + 73 + 73 = 180') + ' ✓']
      ],
      ans: m('73°') + ' each'
    }
  ],
  modelNote: 'Mark Q2 for the reason alone; the class discovers that the number without a reason is worth less than half the marks.',
  interactive: {
    type: 'quiz',
    title: 'The chapter in eight questions',
    hint: 'Name the fact before the number.',
    items: [
      { q: m('245°') + ' is:', a: ['acute', 'obtuse', 'straight', 'reflex'], c: 3, why: 'Over ' + m('180°') + '.' },
      { q: m('x') + ' with ' + m('118°') + ' on a line:', a: [m('62°'), m('72°'), m('242°'), m('118°')], c: 0, why: m('180 − 118') + '.' },
      { q: 'Its reason:', a: ['angles at a point', 'angles on a straight line', 'vertically opposite', 'triangle sum'], c: 1, why: 'The mark is here.' },
      { q: m('x + 3x + 140 = ') + '…', a: [m('180'), m('360'), m('90'), m('270')], c: 1, why: 'Angles at a point.' },
      { q: 'So ' + m('x') + ' is:', a: [m('10°'), m('55°'), m('40°'), m('80°')], c: 1, why: m('4x = 220') + '.' },
      { q: m('5x') + ' and ' + m('2x + 60') + ' vertically opposite give the angle:', a: [m('20°'), m('60°'), m('100°'), m('180°')], c: 2, why: m('5 · 20') + '.' },
      { q: 'A triangle with ' + m('72°') + ' and ' + m('43°') + ':', a: [m('65°'), m('75°'), m('115°'), m('245°')], c: 0, why: m('180 − 115') + '.' },
      { q: 'A quadrilateral with ' + m('85°, 95°, 110°') + ':', a: [m('60°'), m('70°'), m('80°'), m('90°')], c: 1, why: m('360 − 290') + '.' }
    ]
  },
  quiz: [
    { q: 'Q1 tests:', a: ['calculating', 'classifying', 'measuring', 'drawing'], c: 1, why: 'By size.' },
    { q: 'Q2 needs, besides the number:', a: ['a diagram', 'a reason', 'a measurement', 'nothing'], c: 1, why: 'One of the marks.' },
    { q: 'Q3 sums to:', a: [m('90°'), m('180°'), m('360°'), m('540°')], c: 2, why: 'Angles at a point.' },
    { q: 'Q4 sets the two expressions:', a: ['equal', 'to ' + m('180°'), 'to ' + m('360°'), 'to ' + m('90°')], c: 0, why: 'Vertically opposite.' },
    { q: 'Q6 divides by:', a: [m('2'), m('3'), m('4'), 'nothing'], c: 0, why: 'Two equal base angles.' },
    { q: 'Q7 sums to:', a: [m('180°'), m('270°'), m('360°'), m('540°')], c: 2, why: 'A quadrilateral.' }
  ],
  practice: {
    easy: [
      ['Classify ' + m('37°'), 'Acute'],
      ['Classify ' + m('128°'), 'Obtuse'],
      ['Classify ' + m('245°'), 'Reflex'],
      [m('x') + ' with ' + m('118°') + ' on a line', m('62°')],
      [m('x, 3x, 140°') + ' at a point', m('x = 55°')],
      ['A triangle with ' + m('72°') + ' and ' + m('43°'), m('65°')],
      ['A quadrilateral with ' + m('85°, 95°, 110°'), m('70°')]
    ],
    med: [
      [m('5x') + ' and ' + m('2x + 60') + ' vertically opposite', m('100°')],
      ['Isosceles with apex ' + m('34°'), m('73°') + ' each'],
      ['Isosceles with base angle ' + m('34°'), 'Apex ' + m('112°')],
      ['Two supplementary angles in the ratio ' + m('3 : 7'), m('54°') + ' and ' + m('126°')],
      ['An angle twice its complement', m('60°')],
      ['A parallelogram with one angle ' + m('115°'), m('115°, 65°, 115°, 65°')],
      ['The reflex angle beside ' + m('118°'), m('242°')]
    ],
    hard: [
      ['A triangle with angles ' + m('x, x + 20, x + 40'), m('40°, 60°, 80°')],
      ['A quadrilateral with angles ' + m('x, 2x, 3x, 4x'), m('36°, 72°, 108°, 144°')],
      ['Four angles at a point, three equal and one ' + m('120°'), m('80°') + ' each'],
      ['An isosceles triangle with one angle of ' + m('90°'), m('90°, 45°, 45°')],
      ['A triangle cannot have two obtuse angles: why?', 'They already exceed ' + m('180°')],
      ['An exterior angle of a triangle beside ' + m('65°'), m('115°')],
      ['Why is a reason needed for every angle answer?', 'The diagram is not evidence; the fact is']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite every question you lost a mark on, with its reason.',
  homework: [
    'Rewrite in full every question on which you lost a mark.',
    'Find ' + m('x') + ' if ' + m('x') + ' and ' + m('143°') + ' lie on a straight line, giving a reason.',
    'Find ' + m('x') + ' if ' + m('2x, 4x') + ' and ' + m('120°') + ' meet at a point.',
    'An isosceles triangle has an apex of ' + m('50°') + '. Find the base angles.',
    'A quadrilateral has angles ' + m('100°, 75°') + ' and ' + m('95°') + '. Find the fourth.'
  ]
});

/* ============================== 43 ============================== */
G6_MAT.push({
  id: 'g6-43', stream: 'mat', grade: 6, quarter: 2, lessons: '88', hours: 1,
  title: 'Think — angles in design',
  subtitle: 'Tiles, patterns and the ' + m('360°') + ' that has to be filled at every meeting point.',
  uz: 'Matematika 6, o‘ylab ko‘r', uzPage: 'pp. 247–249',
  cam: 'S7 5.3', camPage: 'Stage 7, pp. 62–65', wb: 'Exercise 5.4',
  objectives: [
    'Find the angles of a regular polygon.',
    'Decide which regular polygons tile the plane.',
    'Explain a tiling by the angles at a meeting point.',
    'Recognise the geometry in Uzbek ornament.'
  ],
  terms: [
    ['Regular polygon', 'Muntazam ko‘pburchak', 'Правильный многоугольник'],
    ['Tiling', 'Qoplama', 'Замощение'],
    ['Meeting point', 'Uchrashuv nuqtasi', 'Точка стыка'],
    ['Interior angle', 'Ichki burchak', 'Внутренний угол'],
    ['Hexagon', 'Olti burchak', 'Шестиугольник'],
    ['Pentagon', 'Besh burchak', 'Пятиугольник'],
    ['Ornament', 'Naqsh', 'Орнамент'],
    ['Symmetry', 'Simmetriya', 'Симметрия']
  ],
  timing: [[10, 'The angles of a regular polygon'], [12, 'Which shapes tile'], [12, 'Why pentagons fail'], [6, 'Ornament']],
  sections: [
    {
      h: 'The angles of a regular polygon',
      html: `${eq('interior angle ' + m('= ' + f('180°(n − 2)', 'n')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Polygon</th><th class="m">n</th><th>Angle sum</th><th>Each angle</th></tr></thead>
      <tbody>
        <tr><td>triangle</td><td class="m">3</td><td class="m">180°</td><td class="m">60°</td></tr>
        <tr><td>square</td><td class="m">4</td><td class="m">360°</td><td class="m">90°</td></tr>
        <tr><td>pentagon</td><td class="m">5</td><td class="m">540°</td><td class="m">108°</td></tr>
        <tr><td>hexagon</td><td class="m">6</td><td class="m">720°</td><td class="m">120°</td></tr>
        <tr><td>octagon</td><td class="m">8</td><td class="m">1080°</td><td class="m">135°</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The angle sum comes from triangles</div>
      An ${m('n')}-sided polygon splits into ${m('n − 2')} triangles from one vertex, so its angles add to
      ${m('180°(n − 2)')}. A regular one shares that equally.</div>`
    },
    {
      h: 'Which shapes tile',
      html: `<p>Tiles meet without gaps only if the angles at each meeting point add to exactly
      ${m('360°')}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Shape</th><th>Angle</th><th class="m">360 ÷ angle</th><th>Tiles?</th></tr></thead>
      <tbody>
        <tr><td>triangle</td><td class="m">60°</td><td class="m">6</td><td>yes</td></tr>
        <tr><td>square</td><td class="m">90°</td><td class="m">4</td><td>yes</td></tr>
        <tr><td>pentagon</td><td class="m">108°</td><td class="m">3.33…</td><td>no</td></tr>
        <tr><td>hexagon</td><td class="m">120°</td><td class="m">3</td><td>yes</td></tr>
        <tr><td>octagon</td><td class="m">135°</td><td class="m">2.67…</td><td>no, alone</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The test is a whole-number division</div>
      Only three regular polygons tile the plane by themselves: the triangle, the square and the hexagon.
      Bees use the third of them.</div>`
    },
    {
      h: 'Why pentagons fail',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Pentagons at a point</th><th>Total</th><th>Verdict</th></tr></thead>
      <tbody>
        <tr><td class="m">3</td><td class="m">324°</td><td>a gap of ${m('36°')}</td></tr>
        <tr><td class="m">4</td><td class="m">432°</td><td>an overlap of ${m('72°')}</td></tr>
      </tbody></table></div>
      <p>Octagons alone fail too — but octagons and squares together work: ${m('135 + 135 + 90 = 360')},
      which is the pattern on countless tiled floors.</p>
      <div class="keybox"><div class="klabel">Mixed tilings open the question up again</div>
      Squares and triangles: ${m('90 + 90 + 60 + 60 + 60 = 360')}. Hexagons and triangles:
      ${m('120 + 120 + 60 + 60 = 360')}. Each combination is a small piece of arithmetic with a floor
      pattern as its answer.</div>`
    },
    {
      h: 'Ornament',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Where</th><th>Shapes used</th><th>Angle fact behind it</th></tr></thead>
      <tbody>
        <tr><td>a girih tile panel</td><td>stars and hexagons</td><td>angles meeting at ${m('360°')}</td></tr>
        <tr><td>a brick floor</td><td>rectangles</td><td class="m">90° · 4</td></tr>
        <tr><td>a honeycomb</td><td>hexagons</td><td class="m">120° · 3</td></tr>
        <tr><td>a tiled dome</td><td>triangles and squares</td><td>mixed tilings</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The ornament of Samarkand is angle arithmetic</div>
      The star patterns on the madrasahs are built from polygons whose angles fit exactly round a point.
      The craftsmen worked it out with compasses and a straightedge, five centuries before the formula was
      written the way it is above.</div>`
    }
  ],
  examples: [
    {
      q: 'Find each interior angle of a regular hexagon.',
      steps: [
        ['Angle sum: ' + m('180 · (6 − 2) = 720°') + '.', ''],
        ['Shared equally between six angles.', ''],
        [m('720 ÷ 6 = 120°'), '']
      ],
      ans: m('120°')
    },
    {
      q: 'Do regular pentagons tile the plane?',
      steps: [
        ['Each angle is ' + m('108°') + '.', ''],
        [m('360 ÷ 108 = 3.33…') + ' — not a whole number.', ''],
        ['Three leave a gap of ' + m('36°') + '; four overlap.', ''],
        ['So no.', '']
      ],
      ans: 'No'
    },
    {
      q: 'Show that octagons and squares tile together.',
      steps: [
        ['An octagon angle is ' + m('135°') + ', a square angle ' + m('90°') + '.', ''],
        [m('135 + 135 + 90 = 360'), ''],
        ['Two octagons and a square meet exactly at each point.', '']
      ],
      ans: 'They tile'
    }
  ],
  modelNote: 'Cut out card pentagons and let the class try to tile a desk; the stubborn gap is a better memory than the arithmetic that predicts it.',
  interactive: {
    type: 'polygonAngles',
    title: 'The angles of a regular polygon',
    hint: 'Change the number of sides and watch the interior angle.'
  },
  quiz: [
    { q: 'The angle sum of a pentagon is:', a: [m('360°'), m('540°'), m('720°'), m('900°')], c: 1, why: 'Three triangles.' },
    { q: 'Each angle of a regular hexagon is:', a: [m('108°'), m('120°'), m('135°'), m('144°')], c: 1, why: m('720 ÷ 6') + '.' },
    { q: 'Tiles meet without gaps when the angles add to:', a: [m('180°'), m('270°'), m('360°'), m('540°')], c: 2, why: 'A full turn.' },
    { q: 'Regular pentagons:', a: ['tile', 'do not tile', 'tile with triangles only', 'tile in threes'], c: 1, why: m('360 ÷ 108') + ' is not whole.' },
    { q: 'How many regular polygons tile alone?', a: [m('1'), m('2'), m('3'), m('4')], c: 2, why: 'Triangle, square, hexagon.' },
    { q: 'Two octagons and a square meet at:', a: [m('300°'), m('330°'), m('360°'), m('390°')], c: 2, why: m('135 + 135 + 90') + '.' }
  ],
  practice: {
    easy: [
      ['The angle sum of a quadrilateral', m('360°')],
      ['The angle sum of a pentagon', m('540°')],
      ['The angle sum of a hexagon', m('720°')],
      ['Each angle of an equilateral triangle', m('60°')],
      ['Each angle of a regular pentagon', m('108°')],
      ['Each angle of a regular hexagon', m('120°')],
      ['Each angle of a regular octagon', m('135°')]
    ],
    med: [
      ['Do triangles tile?', 'Yes — six at a point'],
      ['Do squares tile?', 'Yes — four at a point'],
      ['Do pentagons tile?', 'No'],
      ['Do hexagons tile?', 'Yes — three at a point'],
      ['Do octagons tile alone?', 'No'],
      ['Octagons and squares together?', 'Yes — ' + m('135 + 135 + 90')],
      ['The angle sum of a decagon', m('1440°')]
    ],
    hard: [
      ['Each angle of a regular decagon', m('144°')],
      ['Do decagons tile alone?', 'No — ' + m('360 ÷ 144 = 2.5')],
      ['Squares and triangles at a point: one arrangement', m('90 + 90 + 60 + 60 + 60 = 360')],
      ['Hexagons and triangles at a point', m('120 + 120 + 60 + 60 = 360')],
      ['A regular polygon with interior angle ' + m('150°') + ': how many sides?', m('12')],
      ['Why does the interior angle grow with ' + m('n') + '?', 'The angle sum grows faster than the number of angles'],
      ['The exterior angles of any polygon add to', m('360°')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Test every tiling claim by adding the angles at one meeting point.',
  homework: [
    'Find each interior angle of a regular pentagon, hexagon and octagon.',
    'Show by arithmetic which of them tile the plane alone.',
    'Find a combination of two different regular polygons that meet at ' + m('360°') + '.',
    'Find the number of sides of a regular polygon whose interior angle is ' + m('156°') + '.',
    'Photograph or draw one piece of Uzbek ornament and name the polygons in it.'
  ]
});

/* ============================== 44 ============================== */
G6_MAT.push({
  id: 'g6-44', stream: 'mat', grade: 6, quarter: 2, lessons: '89', hours: 1,
  title: 'Recall — the circle and the disc',
  subtitle: 'The curve and the region it encloses are two different things, with two different names.',
  uz: 'Matematika 6, takrorlash', uzPage: 'pp. 250–253',
  cam: 'S7 8.2 entry', camPage: 'Stage 7, pp. 80–84', wb: 'Exercise 8.1',
  objectives: [
    'Distinguish a circle from a disc.',
    'Name the centre, radius, diameter, chord and arc.',
    'Draw a circle of a given radius with compasses.',
    'State the relation between radius and diameter.'
  ],
  terms: [
    ['Circle', 'Aylana', 'Окружность'],
    ['Disc', 'Doira', 'Круг'],
    ['Centre', 'Markaz', 'Центр'],
    ['Radius', 'Radius', 'Радиус'],
    ['Diameter', 'Diametr', 'Диаметр'],
    ['Chord', 'Vatar', 'Хорда'],
    ['Arc', 'Yoy', 'Дуга'],
    ['Compasses', 'Sirkul', 'Циркуль']
  ],
  timing: [[10, 'Circle and disc'], [12, 'The parts'], [12, 'Radius and diameter'], [6, 'Drawing one']],
  sections: [
    {
      h: 'Circle and disc',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Word</th><th>Means</th><th>Measured by</th></tr></thead>
      <tbody>
        <tr><td>circle</td><td>the curve itself</td><td>a length — the circumference</td></tr>
        <tr><td>disc</td><td>the curve and everything inside</td><td>an area</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A circle is a set of points at one distance from the centre</div>
      Every point of the curve is exactly ${m('r')} from the centre — no nearer, no further. That single
      sentence is the definition, and the compasses are its machine.</div>`
    },
    {
      h: 'The parts',
      html: `{{fig:circleArea:The centre, radius, diameter and chord}}
      <div class="tablewrap"><table>
      <thead><tr><th>Part</th><th>What it is</th></tr></thead>
      <tbody>
        <tr><td>centre</td><td>the fixed point</td></tr>
        <tr><td>radius</td><td>from the centre to the curve</td></tr>
        <tr><td>diameter</td><td>right across, through the centre</td></tr>
        <tr><td>chord</td><td>joining two points of the curve</td></tr>
        <tr><td>arc</td><td>part of the curve</td></tr>
        <tr><td>sector</td><td>a slice, between two radii</td></tr>
        <tr><td>segment</td><td>the piece cut off by a chord</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A diameter is a chord; a chord is usually not a diameter</span>
      The diameter is the longest chord — the only one passing through the centre. Every other chord is
      shorter.</div>`
    },
    {
      h: 'Radius and diameter',
      html: `${eq(m('d = 2r') + '     ' + m('r = ' + f('d', '2')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">r</th><th class="m">d</th></tr></thead>
      <tbody>
        <tr><td class="m">3 cm</td><td class="m">6 cm</td></tr>
        <tr><td class="m">7 cm</td><td class="m">14 cm</td></tr>
        <tr><td class="m">4.5 cm</td><td class="m">9 cm</td></tr>
        <tr><td class="m">12 cm</td><td class="m">24 cm</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Read which one the question gives</span>
      A circle “of diameter ${m('14')}” has radius ${m('7')}. Half the errors in the next three lessons
      come from using the wrong one of the two in a formula.</div>`
    },
    {
      h: 'Drawing one',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>What to do</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>open the compasses to the radius against a ruler</td></tr>
        <tr><td>2</td><td>put the point on the centre and mark it</td></tr>
        <tr><td>3</td><td>turn the compasses in one smooth movement</td></tr>
        <tr><td>4</td><td>label the centre, and mark a radius and a diameter</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Set the compasses to the radius, never the diameter</div>
      For a circle of diameter ${m('10')} cm the compasses open to ${m('5')} cm. The commonest practical
      error in this topic is drawing a circle twice the size wanted.</div>`
    }
  ],
  examples: [
    {
      q: 'A circle has diameter ' + m('14 cm') + '. Find its radius.',
      steps: [
        [m('r = ' + f('d', '2')), ''],
        [m('= 7 cm'), '']
      ],
      ans: m('7 cm')
    },
    {
      q: 'What is the difference between a circle and a disc?',
      steps: [
        ['A circle is the curve alone.', ''],
        ['A disc is the curve together with the region inside it.', ''],
        ['One is measured by a length, the other by an area.', '']
      ],
      ans: 'Curve against region'
    },
    {
      q: 'Is every chord a diameter? Is every diameter a chord?',
      steps: [
        ['A chord joins two points of the curve.', ''],
        ['A diameter does that and passes through the centre.', ''],
        ['So every diameter is a chord; most chords are not diameters.', '']
      ],
      ans: 'No; yes'
    }
  ],
  modelNote: 'Ask the class to draw a circle of diameter 8 cm; the ones that come out 16 cm across make the radius-diameter point better than any warning.',
  interactive: {
    type: 'circleAngles',
    title: 'The parts of a circle',
    hint: 'Move the points and watch the radius, chord and arc.'
  },
  quiz: [
    { q: 'A circle is:', a: ['the curve', 'the region inside', 'both', 'neither'], c: 0, why: 'The curve alone.' },
    { q: 'A disc is measured by:', a: ['a length', 'an area', 'an angle', 'a radius only'], c: 1, why: 'It is a region.' },
    { q: 'The diameter is:', a: [m('r'), m('2r'), m(f('r', '2')), m('πr')], c: 1, why: 'Right across.' },
    { q: 'A circle of diameter ' + m('14') + ' has radius:', a: [m('28'), m('7'), m('14'), m('3.5')], c: 1, why: 'Half.' },
    { q: 'The longest chord is:', a: ['a radius', 'the diameter', 'an arc', 'a sector'], c: 1, why: 'Through the centre.' },
    { q: 'Compasses are set to:', a: ['the diameter', 'the radius', 'the circumference', 'any length'], c: 1, why: 'The distance from the centre.' }
  ],
  practice: {
    easy: [
      ['The curve itself is called', 'a circle'],
      ['The region inside is called', 'a disc'],
      [m('r = 3') + ': the diameter', m('6 cm')],
      [m('d = 14') + ': the radius', m('7 cm')],
      [m('r = 4.5') + ': the diameter', m('9 cm')],
      ['A line from the centre to the curve', 'a radius'],
      ['A line joining two points of the curve', 'a chord']
    ],
    med: [
      ['The longest chord in a circle', 'the diameter'],
      ['Part of the curve', 'an arc'],
      ['A slice between two radii', 'a sector'],
      ['The piece cut off by a chord', 'a segment'],
      ['Is every diameter a chord?', 'Yes'],
      ['Is every chord a diameter?', 'No'],
      ['Compasses for a circle of diameter ' + m('10') + ' cm open to', m('5') + ' cm']
    ],
    hard: [
      ['A circle of radius ' + m('r') + ': the longest chord', m('2r')],
      ['Two circles of radius ' + m('5') + ' with centres ' + m('8') + ' cm apart: do they cross?', 'Yes — ' + m('8 < 10')],
      ['Two circles of radius ' + m('5') + ' with centres ' + m('12') + ' cm apart', 'No — they are apart'],
      ['A chord ' + m('6') + ' cm from the centre of a circle of radius ' + m('5') + ' cm', 'Impossible — no such chord'],
      ['How many diameters has a circle?', 'Infinitely many'],
      ['Where do all the diameters meet?', 'At the centre'],
      ['Why is a circle drawn with compasses?', 'They keep the distance from the centre fixed']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Set the compasses to the radius; halve the diameter first if that is what you are given.',
  homework: [
    'Draw circles of radius ' + m('3 cm') + ' and of diameter ' + m('9 cm') + '.',
    'Mark and label a radius, a diameter, a chord and an arc on one of them.',
    'Find the radius of circles with diameters ' + m('18 cm') + ' and ' + m('7 cm') + '.',
    'Find the diameter of circles with radii ' + m('6.5 cm') + ' and ' + m('11 cm') + '.',
    'Write one sentence explaining the difference between a circle and a disc.'
  ]
});

/* ============================== 45 ============================== */
G6_MAT.push({
  id: 'g6-45', stream: 'mat', grade: 6, quarter: 2, lessons: '90–91', hours: 2,
  title: 'The elements of a circle and of a disc',
  subtitle: 'Arcs, sectors and segments — and the angle at the centre that measures them.',
  uz: 'Matematika 6, §18', uzPage: 'pp. 254–261',
  cam: 'S7 8.2', camPage: 'Stage 7, pp. 80–84', wb: 'Exercise 8.2',
  objectives: [
    'Name every part of a circle and of a disc.',
    'Measure an arc by the angle it subtends at the centre.',
    'Distinguish a sector from a segment.',
    'Use the fact that the angles at the centre fill ' + m('360°') + '.'
  ],
  terms: [
    ['Arc', 'Yoy', 'Дуга'],
    ['Sector', 'Sektor', 'Сектор'],
    ['Segment', 'Segment', 'Сегмент'],
    ['Central angle', 'Markaziy burchak', 'Центральный угол'],
    ['To subtend', 'Qarshi turmoq', 'Стягивать'],
    ['Semicircle', 'Yarim aylana', 'Полуокружность'],
    ['Quadrant', 'Chorak doira', 'Четверть круга'],
    ['Tangent', 'Urinma', 'Касательная']
  ],
  timing: [[20, 'Arcs and central angles'], [25, 'Sectors'], [25, 'Segments and the rest'], [8, 'Filling the turn'], [2, 'Homework']],
  sections: [
    {
      h: 'Arcs and central angles',
      html: `<p>An <b>arc</b> is a piece of the curve. Its size is given by the <b>central angle</b> — the
      angle it makes at the centre.</p>
      {{fig:centralAngle:An arc and the angle it makes at the centre}}
      <div class="tablewrap"><table>
      <thead><tr><th>Central angle</th><th>The arc is</th><th>Fraction of the circle</th></tr></thead>
      <tbody>
        <tr><td class="m">360°</td><td>the whole circle</td><td class="m">1</td></tr>
        <tr><td class="m">180°</td><td>a semicircle</td><td class="m">${f('1', '2')}</td></tr>
        <tr><td class="m">90°</td><td>a quarter</td><td class="m">${f('1', '4')}</td></tr>
        <tr><td class="m">120°</td><td>a third</td><td class="m">${f('1', '3')}</td></tr>
        <tr><td class="m">60°</td><td>a sixth</td><td class="m">${f('1', '6')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The angle is the measure</div>
      Two arcs of the same circle are equal exactly when their central angles are equal. This is what makes
      a pie chart work: a share of the data becomes a share of ${m('360°')}.</div>`
    },
    {
      h: 'Sectors',
      html: `<p>A <b>sector</b> is a slice of the disc: the region between two radii and the arc between
      them.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Central angle</th><th>Name</th><th>Fraction of the disc</th></tr></thead>
      <tbody>
        <tr><td class="m">180°</td><td>half disc</td><td class="m">${f('1', '2')}</td></tr>
        <tr><td class="m">90°</td><td>quadrant</td><td class="m">${f('1', '4')}</td></tr>
        <tr><td class="m">45°</td><td>an eighth</td><td class="m">${f('1', '8')}</td></tr>
        <tr><td class="m">72°</td><td>a fifth</td><td class="m">${f('1', '5')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A sector is a fraction of the whole disc</div>
      The fraction is ${m(f('α', '360'))}. Everything about sectors — arc length, area, pie charts — comes
      from that one fraction.</div>`
    },
    {
      h: 'Segments and the rest',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Part</th><th>Bounded by</th><th>Not to be confused with</th></tr></thead>
      <tbody>
        <tr><td>sector</td><td>two radii and an arc</td><td>a segment</td></tr>
        <tr><td>segment</td><td>a chord and an arc</td><td>a sector</td></tr>
        <tr><td>semicircle</td><td>a diameter and half the curve</td><td>a quadrant</td></tr>
        <tr><td>tangent</td><td>touches the circle at one point</td><td>a chord</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A sector is a slice of pizza; a segment is the crust end</span>
      The sector reaches the centre; the segment does not. Naming them the wrong way round is the standard
      slip, and the picture fixes it.</div>`
    },
    {
      h: 'Filling the turn',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>a disc split into ${m('4')} equal sectors</td><td class="m">360 ÷ 4</td><td class="m">90°</td></tr>
        <tr><td>into ${m('5')} equal sectors</td><td class="m">360 ÷ 5</td><td class="m">72°</td></tr>
        <tr><td>into ${m('8')} equal sectors</td><td class="m">360 ÷ 8</td><td class="m">45°</td></tr>
        <tr><td>three sectors of ${m('100°, 140°')} and ${m('x')}</td><td class="m">360 − 240</td><td class="m">120°</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">This is the pie chart, three months early</div>
      Sharing ${m('360°')} among categories is exactly the calculation of Quarter IV. The geometry is being
      built now so the statistics can use it later.</div>`
    }
  ],
  examples: [
    {
      q: 'A disc is divided into ' + m('5') + ' equal sectors. Find the central angle of each.',
      steps: [
        ['The angles at the centre fill ' + m('360°') + '.', ''],
        [m('360 ÷ 5'), ''],
        [m('= 72°'), '']
      ],
      ans: m('72°')
    },
    {
      q: 'Three sectors of a disc have central angles ' + m('100°') + ', ' + m('140°') + ' and ' + m('x') + '. Find ' + m('x') + '.',
      steps: [
        [m('100 + 140 = 240'), ''],
        [m('360 − 240 = 120'), ''],
        [m('x = 120°'), '']
      ],
      ans: m('120°')
    },
    {
      q: 'What fraction of a disc is a sector of ' + m('45°') + '?',
      steps: [
        [m(f('45', '360')), ''],
        ['Simplify by ' + m('45') + '.', ''],
        [m(f('1', '8')), '']
      ],
      ans: m(f('1', '8'))
    }
  ],
  modelNote: 'Cut a paper disc into sectors of different sizes and have the class name the angle of each; the fractions of 360° are then physical objects on the desk.',
  interactive: {
    type: 'circleAngles',
    title: 'A sector and its central angle',
    hint: 'The angle decides the fraction of the disc.'
  },
  quiz: [
    { q: 'An arc is measured by:', a: ['its chord', 'its central angle', 'the radius', 'the diameter'], c: 1, why: 'The angle at the centre.' },
    { q: 'A sector is bounded by:', a: ['a chord and an arc', 'two radii and an arc', 'two chords', 'a tangent'], c: 1, why: 'It reaches the centre.' },
    { q: 'A segment is bounded by:', a: ['a chord and an arc', 'two radii and an arc', 'two diameters', 'a tangent and a radius'], c: 0, why: 'It does not reach the centre.' },
    { q: 'A ' + m('90°') + ' sector is:', a: ['a semicircle', 'a quadrant', 'a segment', 'a third'], c: 1, why: 'A quarter of the disc.' },
    { q: 'Five equal sectors have central angles of:', a: [m('60°'), m('72°'), m('90°'), m('45°')], c: 1, why: m('360 ÷ 5') + '.' },
    { q: 'A ' + m('45°') + ' sector is what fraction of the disc?', a: [m(f('1', '4')), m(f('1', '6')), m(f('1', '8')), m(f('1', '45'))], c: 2, why: m(f('45', '360')) + '.' }
  ],
  practice: {
    easy: [
      ['A ' + m('180°') + ' arc is', 'a semicircle'],
      ['A ' + m('90°') + ' sector is', 'a quadrant'],
      ['A disc in ' + m('4') + ' equal sectors: each angle', m('90°')],
      ['A disc in ' + m('5') + ' equal sectors', m('72°')],
      ['A disc in ' + m('8') + ' equal sectors', m('45°')],
      ['A sector is bounded by', 'two radii and an arc'],
      ['A segment is bounded by', 'a chord and an arc']
    ],
    med: [
      ['Sectors of ' + m('100°, 140°') + ' and ' + m('x'), m('x = 120°')],
      ['A ' + m('120°') + ' sector as a fraction', m(f('1', '3'))],
      ['A ' + m('45°') + ' sector as a fraction', m(f('1', '8'))],
      ['A ' + m('72°') + ' sector as a fraction', m(f('1', '5'))],
      ['A disc in ' + m('6') + ' equal sectors', m('60°')],
      ['A disc in ' + m('12') + ' equal sectors', m('30°')],
      ['A tangent touches the circle at', 'one point']
    ],
    hard: [
      ['A sector that is ' + m(f('3', '8')) + ' of a disc: its angle', m('135°')],
      ['A sector of ' + m('216°') + ' as a fraction', m(f('3', '5'))],
      ['Four sectors in the ratio ' + m('1 : 2 : 3 : 4'), m('36°, 72°, 108°, 144°')],
      ['Two sectors of ' + m('150°') + ' each and one more: the third', m('60°')],
      ['A clock face: the angle between consecutive hour marks', m('30°')],
      ['The angle swept by the minute hand in ' + m('20') + ' minutes', m('120°')],
      ['Why does a pie chart need ' + m('360°') + '?', 'The whole data set fills one complete turn']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every sector question is a fraction of ' + m('360°') + '.',
  homework: [
    'Draw a circle and mark on it a sector, a segment, a chord and an arc.',
    'A disc is divided into ' + m('9') + ' equal sectors. Find each central angle.',
    'Sectors of ' + m('75°, 125°') + ' and ' + m('x') + ' fill a disc. Find ' + m('x') + '.',
    'What fraction of a disc is a sector of ' + m('108°') + '?',
    'Find the angle of a sector that is ' + m(f('5', '12')) + ' of a disc.'
  ]
});

/* ============================== 46 ============================== */
G6_MAT.push({
  id: 'g6-46', stream: 'mat', grade: 6, quarter: 2, lessons: '92–94', hours: 3,
  title: 'The circumference of a circle',
  subtitle: m('C = πd') + ' — measured with thread, then trusted as a formula.',
  uz: 'Matematika 6, §19', uzPage: 'pp. 262–272',
  cam: 'S7 8.2', camPage: 'Stage 7, pp. 80–84', wb: 'Exercise 8.3',
  objectives: [
    'Find the ratio ' + m('C ÷ d') + ' by measurement.',
    'Use ' + m('C = πd') + ' and ' + m('C = 2πr') + '.',
    'Find the radius or diameter from the circumference.',
    'Solve practical problems about wheels and circular edges.'
  ],
  terms: [
    ['Circumference', 'Aylana uzunligi', 'Длина окружности'],
    ['Pi', 'Pi soni', 'Число пи'],
    ['Diameter', 'Diametr', 'Диаметр'],
    ['Radius', 'Radius', 'Радиус'],
    ['Ratio', 'Nisbat', 'Отношение'],
    ['Revolution', 'Aylanish', 'Оборот'],
    ['Approximation', 'Taqribiy qiymat', 'Приближение'],
    ['Formula', 'Formula', 'Формула']
  ],
  timing: [[25, 'The measurement'], [30, 'The formula'], [35, 'Backwards'], [25, 'Wheels and edges'], [5, 'Homework']],
  sections: [
    {
      h: 'The measurement',
      html: `<p>Wrap thread round several round objects and divide the length by the diameter.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Object</th><th class="m">d</th><th class="m">C</th><th class="m">C ÷ d</th></tr></thead>
      <tbody>
        <tr><td>a coin</td><td class="m">2.4 cm</td><td class="m">7.5 cm</td><td class="m">3.13</td></tr>
        <tr><td>a glass</td><td class="m">7 cm</td><td class="m">22 cm</td><td class="m">3.14</td></tr>
        <tr><td>a plate</td><td class="m">21 cm</td><td class="m">66 cm</td><td class="m">3.14</td></tr>
        <tr><td>a bucket</td><td class="m">28 cm</td><td class="m">88 cm</td><td class="m">3.14</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The same number, every time</div>
      Whatever the size of the circle, the ratio lands near ${m('3.14')}. That constant is ${m('π')}, and
      the small differences in the table are measuring error, not differences between the circles.</div>`
    },
    {
      h: 'The formula',
      html: `${eq(m('C = πd = 2πr'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">r</th><th class="m">d</th><th>${m('C')} with ${m('π = 3.14')}</th><th>with ${m('π = ' + f('22', '7'))}</th></tr></thead>
      <tbody>
        <tr><td class="m">5</td><td class="m">10</td><td class="m">31.4</td><td class="m">31.43</td></tr>
        <tr><td class="m">7</td><td class="m">14</td><td class="m">43.96</td><td class="m">44</td></tr>
        <tr><td class="m">10</td><td class="m">20</td><td class="m">62.8</td><td class="m">62.86</td></tr>
        <tr><td class="m">21</td><td class="m">42</td><td class="m">131.88</td><td class="m">132</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Choose the approximation to suit the numbers</div>
      ${m(f('22', '7'))} is exact-looking whenever the radius is a multiple of ${m('7')}; ${m('3.14')} suits
      everything else. Both are approximations to the same constant.</div>`
    },
    {
      h: 'Backwards',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">C = 31.4</td><td class="m">d = C ÷ π</td><td class="m">d = 10</td></tr>
        <tr><td class="m">C = 44</td><td class="m">r = C ÷ 2π</td><td class="m">r = 7</td></tr>
        <tr><td class="m">C = 62.8</td><td class="m">r = C ÷ 2π</td><td class="m">r = 10</td></tr>
        <tr><td class="m">C = 132</td><td class="m">d = C ÷ π</td><td class="m">d = 42</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Dividing by ${m('π')} gives the diameter, not the radius</span>
      ${m('C ÷ π = d')}, and the radius is half of that. Stopping one step early is the standard error in
      the reverse question.</div>`
    },
    {
      h: 'Wheels and edges',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>a wheel of diameter ${m('70')} cm: one turn</td><td class="m">${f('22', '7')} · 70</td><td class="m">220 cm</td></tr>
        <tr><td>how many turns in ${m('220')} m</td><td class="m">22 000 ÷ 220</td><td class="m">100</td></tr>
        <tr><td>a round pond of radius ${m('14')} m: the fence</td><td class="m">2 · ${f('22', '7')} · 14</td><td class="m">88 m</td></tr>
        <tr><td>a running track of radius ${m('35')} m: one lap</td><td class="m">2 · ${f('22', '7')} · 35</td><td class="m">220 m</td></tr>
        <tr><td>a bicycle wheel of radius ${m('35')} cm in ${m('50')} turns</td><td class="m">50 · 220</td><td class="m">110 m</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Keep the units in one system</div>
      Turning ${m('220')} m into ${m('22 000')} cm before dividing avoids the factor-of-a-hundred error
      that this kind of problem invites.</div>`
    }
  ],
  examples: [
    {
      q: 'A circle has radius ' + m('7 cm') + '. Find its circumference, taking ' + m('π = ' + f('22', '7')) + '.',
      steps: [
        [m('C = 2πr'), ''],
        [m('= 2 · ' + f('22', '7') + ' · 7'), ''],
        [m('= 44 cm'), '']
      ],
      ans: m('44 cm')
    },
    {
      q: 'A circle has circumference ' + m('62.8 cm') + '. Find its radius, taking ' + m('π = 3.14') + '.',
      steps: [
        [m('C = 2πr'), ''],
        [m('62.8 = 6.28r'), ''],
        [m('r = 10 cm'), '']
      ],
      ans: m('10 cm')
    },
    {
      q: 'A wheel of diameter ' + m('70 cm') + ' rolls ' + m('220 m') + '. How many turns?',
      steps: [
        ['One turn: ' + m(f('22', '7') + ' · 70 = 220') + ' cm.', ''],
        [m('220') + ' m is ' + m('22 000') + ' cm.', 'Same units.'],
        [m('22 000 ÷ 220 = 100'), '']
      ],
      ans: m('100') + ' turns'
    }
  ],
  modelNote: 'Do the thread measurement in groups and tabulate every ratio on the board; π arrives as a discovery rather than a fact to be believed.',
  interactive: {
    type: 'quiz',
    title: 'Circumference, forwards and backwards',
    hint: 'Multiply for ' + m('C') + ', divide to get back.',
    items: [
      { q: m('C ÷ d') + ' equals:', a: [m('2'), m('π'), m('2π'), m('r')], c: 1, why: 'For every circle.' },
      { q: 'With ' + m('r = 7') + ' and ' + m('π = ' + f('22', '7')) + ', ' + m('C') + ' is:', a: [m('22'), m('44'), m('154'), m('49')], c: 1, why: m('2πr') + '.' },
      { q: 'With ' + m('d = 10') + ' and ' + m('π = 3.14') + ', ' + m('C') + ' is:', a: [m('31.4'), m('15.7'), m('62.8'), m('314')], c: 0, why: m('πd') + '.' },
      { q: m('C = 62.8') + ' gives ' + m('r') + ' equal to:', a: [m('5'), m('10'), m('20'), m('31.4')], c: 1, why: m('C ÷ 2π') + '.' },
      { q: m('C = 44') + ' gives ' + m('r') + ' equal to:', a: [m('7'), m('14'), m('22'), m('3.5')], c: 0, why: m('C ÷ 2π') + '.' },
      { q: 'A wheel of diameter ' + m('70') + ' cm covers per turn:', a: [m('70') + ' cm', m('140') + ' cm', m('220') + ' cm', m('440') + ' cm'], c: 2, why: m('πd') + '.' },
      { q: 'In ' + m('220') + ' m it makes:', a: [m('10') + ' turns', m('100') + ' turns', m('1000') + ' turns', m('22') + ' turns'], c: 1, why: 'Convert to cm first.' },
      { q: m('C ÷ π') + ' gives:', a: ['the radius', 'the diameter', 'the area', m('π')], c: 1, why: 'Halve it for the radius.' }
    ]
  },
  quiz: [
    { q: m('π') + ' is the ratio of:', a: [m('C') + ' to ' + m('r'), m('C') + ' to ' + m('d'), m('d') + ' to ' + m('r'), m('r') + ' to ' + m('C')], c: 1, why: 'The same for all circles.' },
    { q: m('C') + ' equals:', a: [m('πr'), m('πd'), m('πr²'), m('2πd')], c: 1, why: 'Or ' + m('2πr') + '.' },
    { q: 'A circle of radius ' + m('5') + ' has circumference about:', a: [m('15.7'), m('31.4'), m('78.5'), m('10')], c: 1, why: m('2πr') + '.' },
    { q: 'To find ' + m('d') + ' from ' + m('C') + ' you:', a: ['multiply by ' + m('π'), 'divide by ' + m('π'), 'divide by ' + m('2π'), 'square it'], c: 1, why: m('C = πd') + '.' },
    { q: 'A pond of radius ' + m('14') + ' m needs a fence of about:', a: [m('44') + ' m', m('88') + ' m', m('176') + ' m', m('616') + ' m'], c: 1, why: m('2πr') + '.' },
    { q: m(f('22', '7')) + ' is best used when the radius is a multiple of:', a: [m('2'), m('3'), m('7'), m('10')], c: 2, why: 'The sevens cancel.' }
  ],
  practice: {
    easy: [
      [m('r = 5') + ': the circumference (' + m('π = 3.14') + ')', m('31.4')],
      [m('r = 7') + ': the circumference (' + m('π = ' + f('22', '7')) + ')', m('44')],
      [m('d = 20') + ': the circumference (' + m('π = 3.14') + ')', m('62.8')],
      [m('d = 42') + ': the circumference (' + m('π = ' + f('22', '7')) + ')', m('132')],
      [m('C ÷ d'), m('π')],
      [m('r = 10') + ': the circumference', m('62.8')],
      [m('r = 21') + ': the circumference (' + m('π = ' + f('22', '7')) + ')', m('132')]
    ],
    med: [
      [m('C = 31.4') + ': the diameter', m('10')],
      [m('C = 44') + ': the radius', m('7')],
      [m('C = 62.8') + ': the radius', m('10')],
      [m('C = 132') + ': the diameter', m('42')],
      ['A wheel of diameter ' + m('70') + ' cm: one turn', m('220') + ' cm'],
      ['Turns in ' + m('220') + ' m', m('100')],
      ['A pond of radius ' + m('14') + ' m: the fence', m('88') + ' m']
    ],
    hard: [
      ['A track of radius ' + m('35') + ' m: one lap', m('220') + ' m'],
      ['Laps in ' + m('1 100') + ' m', m('5')],
      ['A bicycle wheel of radius ' + m('35') + ' cm in ' + m('50') + ' turns', m('110') + ' m'],
      ['A circle whose circumference equals its diameter times ' + m('3.14') + ' has radius ' + m('9') + ': its ' + m('C'), m('56.52')],
      ['Doubling the radius does what to the circumference?', 'Doubles it'],
      ['A circular table of circumference ' + m('220') + ' cm: its diameter', m('70') + ' cm'],
      ['Why is ' + m('C ÷ d') + ' the same for every circle?', 'All circles are the same shape, scaled']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Say which value of ' + m('π') + ' you are using, and why.',
  homework: [
    'Find the circumference of circles with ' + m('r = 3.5 cm') + ' and ' + m('d = 28 cm') + '.',
    'Find the radius of a circle with circumference ' + m('88 cm') + '.',
    'A wheel of diameter ' + m('56 cm') + ' makes ' + m('100') + ' turns. How far does it go?',
    'A circular flower bed has radius ' + m('7 m') + '. Find the length of edging needed.',
    'Measure three round objects at home and tabulate ' + m('C ÷ d') + ' for each.'
  ]
});

/* ============================== 47 ============================== */
G6_MAT.push({
  id: 'g6-47', stream: 'mat', grade: 6, quarter: 2, lessons: '95–96', hours: 2,
  title: 'The perimeter of a semicircle and of a quarter circle',
  subtitle: 'Half the curve is not the whole perimeter — the straight edges have to be added.',
  uz: 'Matematika 6, §20', uzPage: 'pp. 273–280',
  cam: 'S7 15', camPage: 'Stage 7, pp. 148–154', wb: 'Exercise 15.1',
  objectives: [
    'Find the length of an arc as a fraction of the circumference.',
    'Find the perimeter of a semicircle and of a quadrant.',
    'Find the perimeter of a shape made of arcs and straight edges.',
    'Distinguish arc length from perimeter.'
  ],
  terms: [
    ['Perimeter', 'Perimetr', 'Периметр'],
    ['Arc length', 'Yoy uzunligi', 'Длина дуги'],
    ['Semicircle', 'Yarim doira', 'Полукруг'],
    ['Quadrant', 'Chorak doira', 'Четверть круга'],
    ['Straight edge', 'To‘g‘ri tomon', 'Прямая сторона'],
    ['Compound shape', 'Murakkab shakl', 'Составная фигура'],
    ['Fraction of the circle', 'Aylananing qismi', 'Часть окружности'],
    ['To add the edges', 'Tomonlarni qo‘shish', 'Сложить стороны']
  ],
  timing: [[20, 'Arc length'], [25, 'The semicircle'], [25, 'The quadrant'], [8, 'Compound shapes'], [2, 'Homework']],
  sections: [
    {
      h: 'Arc length',
      html: `${eq('arc ' + m('= ' + f('α', '360') + ' × C'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Central angle</th><th>Fraction</th><th>Arc of a circle with ${m('C = 44')}</th></tr></thead>
      <tbody>
        <tr><td class="m">180°</td><td class="m">${f('1', '2')}</td><td class="m">22</td></tr>
        <tr><td class="m">90°</td><td class="m">${f('1', '4')}</td><td class="m">11</td></tr>
        <tr><td class="m">120°</td><td class="m">${f('1', '3')}</td><td class="m">14.67</td></tr>
        <tr><td class="m">45°</td><td class="m">${f('1', '8')}</td><td class="m">5.5</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Everything is a fraction of the whole circle</div>
      The fraction is the central angle over ${m('360')}. Nothing else about arcs is needed at this
      stage.</div>`
    },
    {
      h: 'The semicircle',
      html: `<p>The perimeter of a half disc is the curved half <b>plus the diameter</b>.</p>
      ${eq(m('P = πr + 2r'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">r</th><th>Curve ${m('πr')}</th><th>Diameter</th><th>Perimeter</th></tr></thead>
      <tbody>
        <tr><td class="m">7</td><td class="m">22</td><td class="m">14</td><td class="m">36</td></tr>
        <tr><td class="m">14</td><td class="m">44</td><td class="m">28</td><td class="m">72</td></tr>
        <tr><td class="m">10</td><td class="m">31.4</td><td class="m">20</td><td class="m">51.4</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Half the circumference is not the perimeter</span>
      A half disc is bounded by a curve <i>and</i> a straight edge. Leaving out the diameter is the
      commonest error in the whole topic — and the shape it describes would be open.</div>`
    },
    {
      h: 'The quadrant',
      html: `<p>A quarter disc is bounded by a quarter of the curve and <b>two radii</b>.</p>
      ${eq(m('P = ' + f('1', '2') + 'πr + 2r'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">r</th><th>Curve</th><th>Two radii</th><th>Perimeter</th></tr></thead>
      <tbody>
        <tr><td class="m">7</td><td class="m">11</td><td class="m">14</td><td class="m">25</td></tr>
        <tr><td class="m">14</td><td class="m">22</td><td class="m">28</td><td class="m">50</td></tr>
        <tr><td class="m">10</td><td class="m">15.7</td><td class="m">20</td><td class="m">35.7</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Count the straight edges from the picture</div>
      A semicircle has one; a quadrant has two. Drawing the shape and tracing round it with a finger is a
      more reliable method than remembering formulae.</div>`
    },
    {
      h: 'Compound shapes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Shape</th><th>Pieces of the boundary</th><th>Perimeter with ${m('r = 7')}</th></tr></thead>
      <tbody>
        <tr><td>a semicircle on a ${m('14')} by ${m('10')} rectangle</td><td>three sides plus the curve</td><td class="m">10 + 10 + 14 + 22 = 56</td></tr>
        <tr><td>a running track: two straights of ${m('80')} and two semicircular ends of radius ${m('35')}</td><td>two straights plus a full circle</td><td class="m">160 + 220 = 380</td></tr>
        <tr><td>a quadrant cut from a square of side ${m('7')}</td><td>two sides plus the curve</td><td class="m">7 + 7 + 11 = 25</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Only the outside counts</span>
      Where the semicircle sits on the rectangle, the ${m('14')} cm edge is inside the shape and is not
      part of the perimeter — but the two ends of it are. Trace the boundary before adding
      anything.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the perimeter of a semicircle of radius ' + m('7 cm') + ', taking ' + m('π = ' + f('22', '7')) + '.',
      steps: [
        ['The curve: ' + m('πr = ' + f('22', '7') + ' · 7 = 22') + ' cm.', ''],
        ['The straight edge is the diameter: ' + m('14') + ' cm.', ''],
        [m('22 + 14 = 36') + ' cm.', '']
      ],
      ans: m('36 cm')
    },
    {
      q: 'Find the perimeter of a quadrant of radius ' + m('14 cm') + '.',
      steps: [
        ['The circumference is ' + m('2 · ' + f('22', '7') + ' · 14 = 88') + ' cm.', ''],
        ['A quarter of it: ' + m('22') + ' cm.', ''],
        ['Two radii: ' + m('28') + ' cm.', ''],
        [m('22 + 28 = 50') + ' cm.', '']
      ],
      ans: m('50 cm')
    },
    {
      q: 'A running track has two straights of ' + m('80 m') + ' and two semicircular ends of radius ' + m('35 m') + '. Find one lap.',
      steps: [
        ['The two semicircles make one full circle.', ''],
        [m('2 · ' + f('22', '7') + ' · 35 = 220') + ' m.', ''],
        ['The straights: ' + m('160') + ' m.', ''],
        [m('220 + 160 = 380') + ' m.', '']
      ],
      ans: m('380 m')
    }
  ],
  modelNote: 'Have the class trace the boundary of each shape with a finger and say aloud what they pass; the missing diameter stops being missed.',
  interactive: {
    type: 'quiz',
    title: 'Curve plus straight edges',
    hint: 'Trace the boundary and count what you cross.',
    items: [
      { q: 'A semicircle of radius ' + m('7') + ' has curve of length:', a: [m('11'), m('22'), m('44'), m('14')], c: 1, why: m('πr') + '.' },
      { q: 'Its perimeter is:', a: [m('22'), m('36'), m('44'), m('14')], c: 1, why: 'Plus the diameter.' },
      { q: 'A quadrant of radius ' + m('7') + ' has curve of length:', a: [m('11'), m('22'), m('44'), m('7')], c: 0, why: 'A quarter of ' + m('44') + '.' },
      { q: 'Its perimeter is:', a: [m('11'), m('18'), m('25'), m('32')], c: 2, why: 'Plus two radii.' },
      { q: 'A semicircle of radius ' + m('14') + ' has perimeter:', a: [m('44'), m('72'), m('88'), m('28')], c: 1, why: m('44 + 28') + '.' },
      { q: 'A ' + m('120°') + ' arc of a circle with ' + m('C = 44') + ' is:', a: [m('11'), m('14.67'), m('22'), m('5.5')], c: 1, why: m(f('1', '3') + ' · 44') + '.' },
      { q: 'Two semicircular ends of a track make:', a: ['half a circle', 'one full circle', 'two circles', 'a quadrant'], c: 1, why: 'They join up.' },
      { q: 'The commonest error here is:', a: ['using ' + m('π'), 'forgetting the straight edges', 'using the radius', 'adding twice'], c: 1, why: 'The boundary is not just the curve.' }
    ]
  },
  quiz: [
    { q: 'An arc of ' + m('90°') + ' is what fraction of the circle?', a: [m(f('1', '2')), m(f('1', '3')), m(f('1', '4')), m(f('1', '8'))], c: 2, why: m(f('90', '360')) + '.' },
    { q: 'The perimeter of a semicircle is:', a: [m('πr'), m('πr + 2r'), m('2πr'), m('πr + r')], c: 1, why: 'Curve plus diameter.' },
    { q: 'The perimeter of a quadrant is:', a: [m(f('1', '2') + 'πr'), m(f('1', '2') + 'πr + 2r'), m(f('1', '4') + 'πr + r'), m('πr + 2r')], c: 1, why: 'Curve plus two radii.' },
    { q: 'A semicircle of radius ' + m('10') + ' has perimeter about:', a: [m('31.4'), m('51.4'), m('62.8'), m('20')], c: 1, why: m('31.4 + 20') + '.' },
    { q: 'Two semicircular ends of equal radius make:', a: ['a semicircle', 'a full circle', 'a quadrant', 'nothing'], c: 1, why: 'Two halves.' },
    { q: 'A boundary edge inside a compound shape:', a: ['counts', 'does not count', 'counts twice', 'is halved'], c: 1, why: 'Only the outside.' }
  ],
  practice: {
    easy: [
      ['A semicircle of radius ' + m('7') + ': the curve', m('22')],
      ['Its perimeter', m('36')],
      ['A semicircle of radius ' + m('14') + ': the curve', m('44')],
      ['Its perimeter', m('72')],
      ['A quadrant of radius ' + m('7') + ': the curve', m('11')],
      ['Its perimeter', m('25')],
      ['A ' + m('90°') + ' arc as a fraction of the circle', m(f('1', '4'))]
    ],
    med: [
      ['A quadrant of radius ' + m('14') + ': its perimeter', m('50')],
      ['A semicircle of radius ' + m('10') + ' (' + m('π = 3.14') + ')', m('51.4')],
      ['A quadrant of radius ' + m('10'), m('35.7')],
      ['A ' + m('120°') + ' arc of a circle with ' + m('C = 44'), m('14.67')],
      ['A ' + m('45°') + ' arc of the same circle', m('5.5')],
      ['A track: straights ' + m('80') + ' m, ends of radius ' + m('35') + ' m', m('380') + ' m'],
      ['A quadrant cut from a square of side ' + m('7'), m('25')]
    ],
    hard: [
      ['A semicircle on top of a ' + m('14') + ' by ' + m('10') + ' rectangle: the perimeter', m('56')],
      ['A shape made of three quadrants of radius ' + m('7'), 'Curve ' + m('33') + ' plus the straight edges'],
      ['A semicircle of perimeter ' + m('36') + ': its radius', m('7')],
      ['A semicircular window of diameter ' + m('1.4') + ' m: the frame length', m('3.6') + ' m'],
      ['A running track of two straights ' + m('100') + ' m and ends of radius ' + m('28') + ' m', m('376') + ' m'],
      ['Why add the diameter to a semicircle?', 'The straight edge is part of the boundary'],
      ['A quarter-circle path of radius ' + m('21') + ' m: its curved length', m('33') + ' m']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Trace the boundary with a finger and list every piece before adding.',
  homework: [
    'Find the perimeter of a semicircle of radius ' + m('21 cm') + '.',
    'Find the perimeter of a quadrant of radius ' + m('21 cm') + '.',
    'Find the length of a ' + m('60°') + ' arc of a circle of radius ' + m('7 cm') + '.',
    'A semicircle sits on top of a rectangle ' + m('20') + ' cm by ' + m('12') + ' cm, on the ' + m('20') + ' cm side. Find the whole perimeter.',
    'A track has straights of ' + m('90') + ' m and semicircular ends of radius ' + m('21') + ' m. Find one lap.'
  ]
});

/* ============================== 48 ============================== */
G6_MAT.push({
  id: 'g6-48', stream: 'mat', grade: 6, quarter: 3, lessons: '97–99', hours: 3,
  title: 'The area of a circle',
  subtitle: m('S = πr²') + ' — where the formula comes from, and why the radius is squared.',
  uz: 'Matematika 6, §21', uzPage: 'pp. 281–290',
  cam: 'S7 15', camPage: 'Stage 7, pp. 148–154', wb: 'Exercise 15.2',
  objectives: [
    'Use ' + m('S = πr²') + ' to find the area of a disc.',
    'Find the radius from the area.',
    'Explain why doubling the radius quadruples the area.',
    'Solve practical problems about circular regions.'
  ],
  terms: [
    ['Area', 'Yuza', 'Площадь'],
    ['Disc', 'Doira', 'Круг'],
    ['Radius', 'Radius', 'Радиус'],
    ['Square units', 'Kvadrat birlik', 'Квадратные единицы'],
    ['To square', 'Kvadratga ko‘tarish', 'Возвести в квадрат'],
    ['Square root', 'Kvadrat ildiz', 'Квадратный корень'],
    ['Scale factor', 'O‘xshashlik koeffitsiyenti', 'Коэффициент подобия'],
    ['Circular region', 'Doiraviy soha', 'Круговая область']
  ],
  timing: [[25, 'Where the formula comes from'], [30, 'Using it'], [35, 'Backwards'], [25, 'Doubling the radius'], [5, 'Homework']],
  sections: [
    {
      h: 'Where the formula comes from',
      html: `<p>Cut a disc into many thin sectors and lay them alternately point-up and point-down: they
      form a shape close to a rectangle.</p>
      {{fig:circleArea:A disc cut into sectors and rearranged}}
      <div class="tablewrap"><table>
      <thead><tr><th>Side of the rectangle</th><th>Length</th></tr></thead>
      <tbody>
        <tr><td>the long side</td><td>half the circumference, ${m('πr')}</td></tr>
        <tr><td>the short side</td><td>the radius, ${m('r')}</td></tr>
        <tr><td>so the area</td><td class="m">πr · r = πr²</td></tr>
      </tbody></table></div>
      ${eq(m('S = πr²'), true)}
      <div class="keybox"><div class="klabel">The thinner the sectors, the better the rectangle</div>
      With eight sectors the shape is lumpy; with sixty it is almost exactly a rectangle. The formula is
      what that process arrives at.</div>`
    },
    {
      h: 'Using it',
      html: `<div class="tablewrap"><table>
      <thead><tr><th class="m">r</th><th class="m">r²</th><th>Area (${m('π = ' + f('22', '7'))})</th><th>Area (${m('π = 3.14')})</th></tr></thead>
      <tbody>
        <tr><td class="m">7</td><td class="m">49</td><td class="m">154</td><td class="m">153.86</td></tr>
        <tr><td class="m">14</td><td class="m">196</td><td class="m">616</td><td class="m">615.44</td></tr>
        <tr><td class="m">10</td><td class="m">100</td><td class="m">314.29</td><td class="m">314</td></tr>
        <tr><td class="m">21</td><td class="m">441</td><td class="m">1386</td><td class="m">1384.74</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Square the radius, not ${m('πr')}</span>
      ${m('πr²')} means ${m('π · r · r')}, not ${m('(πr)²')}. With ${m('r = 7')} the area is ${m('154')},
      not ${m('484')}.</div>`
    },
    {
      h: 'Backwards',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Given area</th><th class="m">r² = S ÷ π</th><th class="m">r</th></tr></thead>
      <tbody>
        <tr><td class="m">154</td><td class="m">49</td><td class="m">7</td></tr>
        <tr><td class="m">616</td><td class="m">196</td><td class="m">14</td></tr>
        <tr><td class="m">314</td><td class="m">100</td><td class="m">10</td></tr>
        <tr><td class="m">1386</td><td class="m">441</td><td class="m">21</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Divide by ${m('π')}, then take the square root</div>
      Two steps, in that order. Stopping after the division gives ${m('r²')}, which is a common half-done
      answer.</div>`
    },
    {
      h: 'Doubling the radius',
      html: `<div class="tablewrap"><table>
      <thead><tr><th class="m">r</th><th>Circumference</th><th>Area</th></tr></thead>
      <tbody>
        <tr><td class="m">7</td><td class="m">44</td><td class="m">154</td></tr>
        <tr><td class="m">14</td><td class="m">88</td><td class="m">616</td></tr>
        <tr><td>doubled</td><td>doubled</td><td>four times</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Lengths scale by ${m('k')}, areas by ${m('k²')}</span>
      A pizza of twice the diameter is four times as much pizza. It is the same rule met with rectangles,
      and it applies to every shape.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the area of a disc of radius ' + m('7 cm') + ', taking ' + m('π = ' + f('22', '7')) + '.',
      steps: [
        [m('S = πr²'), ''],
        [m('= ' + f('22', '7') + ' · 49'), ''],
        [m('= 154 cm²'), 'Square units.']
      ],
      ans: m('154 cm²')
    },
    {
      q: 'A disc has area ' + m('616 cm²') + '. Find its radius.',
      steps: [
        [m('r² = S ÷ π = 616 ÷ ' + f('22', '7')), ''],
        [m('= 196'), ''],
        [m('r = √196 = 14') + ' cm.', '']
      ],
      ans: m('14 cm')
    },
    {
      q: 'A circular pond of radius ' + m('14 m') + ' is to be covered with netting. Find the area needed.',
      steps: [
        [m('S = ' + f('22', '7') + ' · 196'), ''],
        [m('= 616') + ' m².', ''],
        ['Netting is sold by the square metre, so ' + m('616') + ' m² is the order.', '']
      ],
      ans: m('616 m²')
    }
  ],
  modelNote: 'Cut a paper disc into twelve sectors and rearrange them on the board; the near-rectangle makes πr² obvious in a way no derivation can.',
  interactive: {
    type: 'quiz',
    title: 'Area, forwards and backwards',
    hint: 'Square the radius first; take the root last.',
    items: [
      { q: 'The area of a disc is:', a: [m('2πr'), m('πr²'), m('πd'), m('πr')], c: 1, why: 'Square units.' },
      { q: 'With ' + m('r = 7') + ' and ' + m('π = ' + f('22', '7')) + ':', a: [m('44'), m('154'), m('49'), m('484')], c: 1, why: m(f('22', '7') + ' · 49') + '.' },
      { q: 'With ' + m('r = 10') + ' and ' + m('π = 3.14') + ':', a: [m('31.4'), m('62.8'), m('314'), m('100')], c: 2, why: m('3.14 · 100') + '.' },
      { q: 'An area of ' + m('154') + ' gives ' + m('r²') + ' equal to:', a: [m('7'), m('49'), m('154'), m('22')], c: 1, why: 'Divide by ' + m('π') + '.' },
      { q: 'So the radius is:', a: [m('7'), m('49'), m('14'), m('22')], c: 0, why: 'Take the square root.' },
      { q: 'Doubling the radius multiplies the area by:', a: [m('2'), m('3'), m('4'), m('8')], c: 2, why: m('r') + ' is squared.' },
      { q: 'And the circumference by:', a: [m('2'), m('4'), m('8'), m('1')], c: 0, why: m('C') + ' uses ' + m('r') + ' once.' },
      { q: 'An answer in ' + m('cm') + ' for an area is:', a: ['fine', 'wrong units', 'a radius', 'a diameter'], c: 1, why: 'Areas need ' + m('cm²') + '.' }
    ]
  },
  quiz: [
    { q: m('S = πr²') + ' means:', a: [m('(πr)²'), m('π · r · r'), m('2πr'), m('π + r²')], c: 1, why: 'Only ' + m('r') + ' is squared.' },
    { q: 'A disc of radius ' + m('14') + ' has area:', a: [m('88'), m('616'), m('196'), m('308')], c: 1, why: m(f('22', '7') + ' · 196') + '.' },
    { q: 'To find ' + m('r') + ' from ' + m('S') + ' you:', a: ['divide by ' + m('π'), 'divide by ' + m('π') + ' then take the root', 'take the root', 'multiply'], c: 1, why: 'Two steps.' },
    { q: 'A disc of area ' + m('314') + ' has radius:', a: [m('10'), m('100'), m('50'), m('31.4')], c: 0, why: m('√100') + '.' },
    { q: 'Trebling the radius multiplies the area by:', a: [m('3'), m('6'), m('9'), m('27')], c: 2, why: m('3²') + '.' },
    { q: 'Area is measured in:', a: ['cm', 'cm²', 'cm³', 'degrees'], c: 1, why: 'Two directions.' }
  ],
  practice: {
    easy: [
      [m('r = 7') + ': the area (' + m('π = ' + f('22', '7')) + ')', m('154 cm²')],
      [m('r = 14') + ': the area', m('616 cm²')],
      [m('r = 10') + ': the area (' + m('π = 3.14') + ')', m('314 cm²')],
      [m('r = 21') + ': the area (' + m('π = ' + f('22', '7')) + ')', m('1386 cm²')],
      [m('r = 5') + ': the area (' + m('π = 3.14') + ')', m('78.5 cm²')],
      ['The formula for the area of a disc', m('πr²')],
      ['The units of an area', m('cm²')]
    ],
    med: [
      ['Area ' + m('154') + ': the radius', m('7')],
      ['Area ' + m('616') + ': the radius', m('14')],
      ['Area ' + m('314') + ': the radius', m('10')],
      ['A pond of radius ' + m('14') + ' m: the netting needed', m('616') + ' m²'],
      [m('d = 14') + ': the area', m('154 cm²')],
      [m('d = 28') + ': the area', m('616 cm²')],
      ['Doubling ' + m('r') + ' multiplies the area by', m('4')]
    ],
    hard: [
      ['A ring between radii ' + m('7') + ' and ' + m('14'), m('462') + ' cm²'],
      ['A ring between radii ' + m('10') + ' and ' + m('6') + ' (' + m('π = 3.14') + ')', m('200.96') + ' cm²'],
      ['A disc of circumference ' + m('44') + ': its area', m('154') + ' cm²'],
      ['A disc of area ' + m('154') + ': its circumference', m('44') + ' cm'],
      ['Trebling the radius multiplies the area by', m('9')],
      ['A pizza of ' + m('30') + ' cm across against two of ' + m('15') + ' cm: which is more?', 'The one of ' + m('30') + ' cm, by twice'],
      ['Why is the radius squared?', 'Area has two directions, and both scale with ' + m('r')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Square the radius before multiplying by ' + m('π') + ', and write ' + m('cm²') + '.',
  homework: [
    'Find the area of discs of radius ' + m('3.5 cm') + ' and ' + m('21 cm') + '.',
    'Find the area of a disc of diameter ' + m('28 cm') + '.',
    'A disc has area ' + m('1386 cm²') + '. Find its radius.',
    'Find the area of a ring between circles of radii ' + m('14') + ' and ' + m('7') + ' cm.',
    'Explain in one sentence why doubling the radius quadruples the area.'
  ]
});

/* ============================== 49 ============================== */
G6_MAT.push({
  id: 'g6-49', stream: 'mat', grade: 6, quarter: 3, lessons: '100–102', hours: 3,
  title: 'The area of a semicircle and of a quarter circle',
  subtitle: 'A fraction of the disc — and the fraction is the central angle over ' + m('360') + '.',
  uz: 'Matematika 6, §22', uzPage: 'pp. 291–300',
  cam: 'S7 15', camPage: 'Stage 7, pp. 148–154', wb: 'Exercise 15.3',
  objectives: [
    'Find the area of a semicircle and of a quadrant.',
    'Find the area of any sector from its central angle.',
    'Distinguish area from perimeter in the same figure.',
    'Solve problems about circular parts of real objects.'
  ],
  terms: [
    ['Semicircle', 'Yarim doira', 'Полукруг'],
    ['Quadrant', 'Chorak doira', 'Четверть круга'],
    ['Sector', 'Sektor', 'Сектор'],
    ['Central angle', 'Markaziy burchak', 'Центральный угол'],
    ['Fraction of the disc', 'Doiraning qismi', 'Часть круга'],
    ['Area', 'Yuza', 'Площадь'],
    ['Perimeter', 'Perimetr', 'Периметр'],
    ['Square units', 'Kvadrat birlik', 'Квадратные единицы']
  ],
  timing: [[25, 'Halves and quarters'], [30, 'Any sector'], [35, 'Area against perimeter'], [25, 'Problems'], [5, 'Homework']],
  sections: [
    {
      h: 'Halves and quarters',
      html: `${eq('semicircle ' + m('S = ' + f('1', '2') + 'πr²') + '     quadrant ' + m('S = ' + f('1', '4') + 'πr²'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">r</th><th>Whole disc</th><th>Semicircle</th><th>Quadrant</th></tr></thead>
      <tbody>
        <tr><td class="m">7</td><td class="m">154</td><td class="m">77</td><td class="m">38.5</td></tr>
        <tr><td class="m">14</td><td class="m">616</td><td class="m">308</td><td class="m">154</td></tr>
        <tr><td class="m">10</td><td class="m">314</td><td class="m">157</td><td class="m">78.5</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Find the whole disc first, then take the fraction</div>
      One calculation and one division is safer than trying to remember a separate formula for each
      fraction.</div>`
    },
    {
      h: 'Any sector',
      html: `${eq('sector ' + m('S = ' + f('α', '360') + ' × πr²'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Angle</th><th>Fraction</th><th>Area with ${m('r = 7')}</th></tr></thead>
      <tbody>
        <tr><td class="m">180°</td><td class="m">${f('1', '2')}</td><td class="m">77</td></tr>
        <tr><td class="m">120°</td><td class="m">${f('1', '3')}</td><td class="m">51.33</td></tr>
        <tr><td class="m">90°</td><td class="m">${f('1', '4')}</td><td class="m">38.5</td></tr>
        <tr><td class="m">60°</td><td class="m">${f('1', '6')}</td><td class="m">25.67</td></tr>
        <tr><td class="m">45°</td><td class="m">${f('1', '8')}</td><td class="m">19.25</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The same fraction as for the arc</div>
      A ${m('120°')} sector is a third of the disc's area and a third of its circumference. One fraction
      does both jobs.</div>`
    },
    {
      h: 'Area against perimeter',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Figure, ${m('r = 7')}</th><th>Perimeter</th><th>Area</th></tr></thead>
      <tbody>
        <tr><td>whole disc</td><td class="m">44 cm</td><td class="m">154 cm²</td></tr>
        <tr><td>semicircle</td><td class="m">36 cm</td><td class="m">77 cm²</td></tr>
        <tr><td>quadrant</td><td class="m">25 cm</td><td class="m">38.5 cm²</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Halving the disc halves the area but not the perimeter</span>
      The semicircle keeps half the curve and gains a diameter, so its perimeter is ${m('36')}, not
      ${m('22')}. Area is halved cleanly; boundary is not.</div>`
    },
    {
      h: 'Problems',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>a semicircular window of radius ${m('70')} cm: the glass</td><td class="m">${f('1', '2')} · ${f('22', '7')} · 4900</td><td class="m">7700 cm²</td></tr>
        <tr><td>a quadrant flower bed of radius ${m('14')} m</td><td class="m">${f('1', '4')} · 616</td><td class="m">154 m²</td></tr>
        <tr><td>a ${m('60°')} slice of a pizza of radius ${m('21')} cm</td><td class="m">${f('1', '6')} · 1386</td><td class="m">231 cm²</td></tr>
        <tr><td>a fan sweeping ${m('120°')} with a blade of ${m('35')} cm</td><td class="m">${f('1', '3')} · 3850</td><td class="m">1283.33 cm²</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Read the question: glass or frame?</div>
      Glass is an area, framing is a perimeter. The same window gives two different answers depending on
      which is asked for.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the area of a semicircle of radius ' + m('14 cm') + '.',
      steps: [
        ['The whole disc: ' + m(f('22', '7') + ' · 196 = 616') + ' cm².', ''],
        ['Half of it.', ''],
        [m('308 cm²'), '']
      ],
      ans: m('308 cm²')
    },
    {
      q: 'Find the area of a ' + m('60°') + ' sector of a circle of radius ' + m('21 cm') + '.',
      steps: [
        ['Whole disc: ' + m(f('22', '7') + ' · 441 = 1386') + ' cm².', ''],
        ['The fraction is ' + m(f('60', '360') + ' = ' + f('1', '6')) + '.', ''],
        [m('1386 ÷ 6 = 231') + ' cm².', '']
      ],
      ans: m('231 cm²')
    },
    {
      q: 'A semicircular window has radius ' + m('70 cm') + '. Find the area of glass and the length of framing.',
      steps: [
        ['Glass: ' + m(f('1', '2') + ' · ' + f('22', '7') + ' · 4900 = 7700') + ' cm².', 'An area.'],
        ['Framing: ' + m('πr + 2r = 220 + 140') + '.', 'A perimeter.'],
        [m('360') + ' cm of framing.', '']
      ],
      ans: m('7700 cm²') + ' and ' + m('360 cm')
    }
  ],
  modelNote: 'Ask for the glass and the framing of the same window in one question; the class learns to read for area or perimeter rather than for numbers.',
  interactive: {
    type: 'quiz',
    title: 'Which fraction, and area or perimeter?',
    hint: 'The angle over ' + m('360') + ' does both.',
    items: [
      { q: 'A semicircle of radius ' + m('7') + ' has area:', a: [m('154'), m('77'), m('38.5'), m('22')], c: 1, why: 'Half the disc.' },
      { q: 'A quadrant of radius ' + m('7') + ' has area:', a: [m('154'), m('77'), m('38.5'), m('11')], c: 2, why: 'A quarter.' },
      { q: 'A ' + m('120°') + ' sector is what fraction?', a: [m(f('1', '2')), m(f('1', '3')), m(f('1', '4')), m(f('1', '6'))], c: 1, why: m(f('120', '360')) + '.' },
      { q: 'A ' + m('60°') + ' sector of radius ' + m('21') + ' has area:', a: [m('231'), m('462'), m('1386'), m('33')], c: 0, why: m('1386 ÷ 6') + '.' },
      { q: 'A semicircle of radius ' + m('7') + ' has perimeter:', a: [m('22'), m('36'), m('44'), m('77')], c: 1, why: 'Curve plus diameter.' },
      { q: 'Halving a disc halves:', a: ['the perimeter', 'the area', 'both', 'neither'], c: 1, why: 'The boundary gains a diameter.' },
      { q: 'A ' + m('90°') + ' sector of radius ' + m('14') + ' has area:', a: [m('77'), m('154'), m('308'), m('616')], c: 1, why: m('616 ÷ 4') + '.' },
      { q: 'Glass in a window is measured as:', a: ['a perimeter', 'an area', 'a length', 'an angle'], c: 1, why: m('cm²') + '.' }
    ]
  },
  quiz: [
    { q: 'The area of a semicircle is:', a: [m('πr²'), m(f('1', '2') + 'πr²'), m('πr'), m('2πr')], c: 1, why: 'Half the disc.' },
    { q: 'The area of a quadrant is:', a: [m(f('1', '2') + 'πr²'), m(f('1', '4') + 'πr²'), m(f('1', '4') + 'πr'), m('πr²')], c: 1, why: 'A quarter.' },
    { q: 'A sector of angle ' + m('α') + ' has area:', a: [m(f('α', '360') + ' πr²'), m(f('α', '180') + ' πr²'), m('απr²'), m(f('360', 'α') + ' πr²')], c: 0, why: 'The fraction of the turn.' },
    { q: 'A semicircle of radius ' + m('14') + ' has area:', a: [m('154'), m('308'), m('616'), m('88')], c: 1, why: 'Half of ' + m('616') + '.' },
    { q: 'A ' + m('45°') + ' sector of radius ' + m('7') + ' has area:', a: [m('19.25'), m('38.5'), m('77'), m('154')], c: 0, why: m('154 ÷ 8') + '.' },
    { q: 'Perimeter and area of the same figure are:', a: ['the same', 'different measurements', 'proportional', 'both lengths'], c: 1, why: 'One is a length, one an area.' }
  ],
  practice: {
    easy: [
      ['A semicircle of radius ' + m('7') + ': the area', m('77 cm²')],
      ['A quadrant of radius ' + m('7'), m('38.5 cm²')],
      ['A semicircle of radius ' + m('14'), m('308 cm²')],
      ['A quadrant of radius ' + m('14'), m('154 cm²')],
      ['A semicircle of radius ' + m('10') + ' (' + m('π = 3.14') + ')', m('157 cm²')],
      ['A ' + m('90°') + ' sector as a fraction', m(f('1', '4'))],
      ['A ' + m('60°') + ' sector as a fraction', m(f('1', '6'))]
    ],
    med: [
      ['A ' + m('60°') + ' sector of radius ' + m('21'), m('231 cm²')],
      ['A ' + m('120°') + ' sector of radius ' + m('7'), m('51.33 cm²')],
      ['A ' + m('45°') + ' sector of radius ' + m('7'), m('19.25 cm²')],
      ['A semicircular window of radius ' + m('70') + ' cm: the glass', m('7700 cm²')],
      ['And the framing', m('360 cm')],
      ['A quadrant flower bed of radius ' + m('14') + ' m', m('154 m²')],
      ['A ' + m('120°') + ' fan sweep with a ' + m('35') + ' cm blade', m('1283.33 cm²')]
    ],
    hard: [
      ['A ' + m('30°') + ' sector of radius ' + m('12') + ' (' + m('π = 3.14') + ')', m('37.68 cm²')],
      ['A sector of area ' + m('77') + ' in a circle of radius ' + m('7') + ': its angle', m('180°')],
      ['A sector of area ' + m('38.5') + ' in the same circle', m('90°')],
      ['Half a ring between radii ' + m('7') + ' and ' + m('14'), m('231 cm²')],
      ['A quadrant of radius ' + m('21') + ': area and perimeter', m('346.5 cm²') + ' and ' + m('75 cm')],
      ['Why does a semicircle keep half the area but more than half the boundary?', 'The diameter is added to the boundary'],
      ['A ' + m('270°') + ' sector of radius ' + m('14'), m('462 cm²')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Find the whole disc first, then take the fraction.',
  homework: [
    'Find the area of a semicircle of radius ' + m('21 cm') + '.',
    'Find the area of a quadrant of radius ' + m('28 cm') + '.',
    'Find the area of a ' + m('120°') + ' sector of a circle of radius ' + m('14 cm') + '.',
    'A semicircular table top has radius ' + m('60 cm') + '. Find its area and the length of edging.',
    'Find the area of a ' + m('30°') + ' sector of a circle of radius ' + m('6 cm') + ', taking ' + m('π = 3.14') + '.'
  ]
});

/* ============================== 50 ============================== */
G6_MAT.push({
  id: 'g6-50', stream: 'mat', grade: 6, quarter: 3, lessons: '103–105', hours: 3,
  title: 'The area and perimeter of compound figures',
  subtitle: 'Cut the shape into pieces you know, add or subtract, and trace the boundary separately.',
  uz: 'Matematika 6, §23', uzPage: 'pp. 301–310',
  cam: 'S7 15', camPage: 'Stage 7, pp. 148–156', wb: 'Exercise 15.4',
  objectives: [
    'Split a compound figure into rectangles, triangles and parts of circles.',
    'Find an area by adding or by subtracting.',
    'Find the perimeter by tracing the boundary.',
    'Keep area and perimeter apart in the same question.'
  ],
  terms: [
    ['Compound figure', 'Murakkab shakl', 'Составная фигура'],
    ['To decompose', 'Bo‘laklarga ajratish', 'Разбить на части'],
    ['To subtract', 'Ayirmoq', 'Вычесть'],
    ['Boundary', 'Chegara', 'Граница'],
    ['Internal edge', 'Ichki chegara', 'Внутренняя линия'],
    ['Rectangle', 'To‘g‘ri to‘rtburchak', 'Прямоугольник'],
    ['Semicircle', 'Yarim doira', 'Полукруг'],
    ['Sum of the parts', 'Qismlar yig‘indisi', 'Сумма частей']
  ],
  timing: [[25, 'Cutting into pieces'], [30, 'Subtracting'], [35, 'Perimeter by tracing'], [25, 'Mixed problems'], [5, 'Homework']],
  sections: [
    {
      h: 'Cutting into pieces',
      html: `{{fig:polygonDecompose:A compound shape cut into known pieces}}
      <div class="tablewrap"><table>
      <thead><tr><th>Shape</th><th>Pieces</th><th>Area</th></tr></thead>
      <tbody>
        <tr><td>an L-shape ${m('10 × 8')} with a ${m('4 × 3')} corner removed</td><td>two rectangles</td><td class="m">68</td></tr>
        <tr><td>a house outline: ${m('6 × 4')} rectangle under a triangle of height ${m('3')}</td><td>rectangle + triangle</td><td class="m">33</td></tr>
        <tr><td>a rectangle ${m('14 × 10')} with a semicircle of radius ${m('7')} on top</td><td>rectangle + semicircle</td><td class="m">217</td></tr>
        <tr><td>a running-track shape: ${m('80 × 70')} rectangle with two semicircular ends of radius ${m('35')}</td><td>rectangle + circle</td><td class="m">9450</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Write the area of each piece on the sketch</div>
      Almost every lost mark in compound-area questions is a piece counted twice or left out — not an
      arithmetic error.</div>`
    },
    {
      h: 'Subtracting',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Shape</th><th>Working</th><th>Area</th></tr></thead>
      <tbody>
        <tr><td>a ${m('20 × 15')} plot with a ${m('4 × 3')} shed</td><td class="m">300 − 12</td><td class="m">288</td></tr>
        <tr><td>a square of side ${m('14')} with a disc of radius ${m('7')} cut out</td><td class="m">196 − 154</td><td class="m">42</td></tr>
        <tr><td>a ${m('1')} m path round a ${m('5 × 4')} m plot</td><td class="m">42 − 20</td><td class="m">22</td></tr>
        <tr><td>a ring between radii ${m('7')} and ${m('14')}</td><td class="m">616 − 154</td><td class="m">462</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Subtracting is often quicker than cutting</div>
      A path round a plot could be split into four rectangles, but subtracting the inner area from the
      outer is one line of working instead of five.</div>`
    },
    {
      h: 'Perimeter by tracing',
      html: `<p>Put a finger at one point of the boundary and travel round, writing down every edge you
      cross. Internal cuts are not part of the perimeter.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Shape</th><th>Boundary pieces</th><th>Perimeter</th></tr></thead>
      <tbody>
        <tr><td>rectangle ${m('14 × 10')} with a semicircle of radius ${m('7')} on top</td><td class="m">10 + 14 + 10 + 22</td><td class="m">56</td></tr>
        <tr><td>a square of side ${m('14')} with a disc cut out</td><td>four sides ${m('+')} the circle</td><td class="m">56 + 44 = 100</td></tr>
        <tr><td>an L-shape ${m('10 × 8')} less a ${m('4 × 3')} corner</td><td>six sides</td><td class="m">36</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The cut edge is not on the boundary</span>
      Where the semicircle meets the rectangle, that ${m('14')} cm line is inside the shape. It counts for
      neither perimeter piece — but the bottom ${m('14')} cm does.</div>`
    },
    {
      h: 'Mixed problems',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Area</th><th>Perimeter</th></tr></thead>
      <tbody>
        <tr><td>a semicircle of radius ${m('7')} on a ${m('14 × 10')} rectangle</td><td class="m">217 cm²</td><td class="m">56 cm</td></tr>
        <tr><td>a ${m('20 × 12')} plot with a quadrant lawn of radius ${m('7')}</td><td class="m">240 − 38.5 = 201.5 m²</td><td>—</td></tr>
        <tr><td>a track: ${m('80 × 70')} rectangle plus two semicircular ends of radius ${m('35')}</td><td class="m">9450 m²</td><td class="m">380 m</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Two answers, two units</div>
      An area is in ${m('m²')} and a perimeter in ${m('m')}. Writing the units is the last check that the
      right question has been answered.</div>`
    }
  ],
  examples: [
    {
      q: 'A semicircle of radius ' + m('7 cm') + ' sits on top of a rectangle ' + m('14') + ' cm by ' + m('10') + ' cm. Find the area.',
      steps: [
        ['Rectangle: ' + m('14 · 10 = 140') + ' cm².', ''],
        ['Semicircle: ' + m(f('1', '2') + ' · ' + f('22', '7') + ' · 49 = 77') + ' cm².', ''],
        [m('140 + 77 = 217') + ' cm².', '']
      ],
      ans: m('217 cm²')
    },
    {
      q: 'Find the perimeter of the same shape.',
      steps: [
        ['Trace the boundary: two sides of ' + m('10') + ', the bottom of ' + m('14') + ', then the curve.', ''],
        ['The curve is ' + m('πr = 22') + ' cm.', ''],
        [m('10 + 14 + 10 + 22 = 56') + ' cm.', 'The top ' + m('14') + ' is internal.']
      ],
      ans: m('56 cm')
    },
    {
      q: 'A square of side ' + m('14 cm') + ' has a disc of radius ' + m('7 cm') + ' cut out of it. Find the area left.',
      steps: [
        ['Square: ' + m('196') + ' cm².', ''],
        ['Disc: ' + m('154') + ' cm².', ''],
        [m('196 − 154 = 42') + ' cm².', 'The four corner pieces.']
      ],
      ans: m('42 cm²')
    }
  ],
  modelNote: 'Ask for area and perimeter of the same compound shape in every exercise; separating the two is the whole difficulty of the topic.',
  interactive: {
    type: 'quiz',
    title: 'Add, subtract, or trace?',
    hint: 'Area needs pieces; perimeter needs the boundary.',
    items: [
      { q: 'An L-shape ' + m('10 × 8') + ' less a ' + m('4 × 3') + ' corner has area:', a: [m('68'), m('80'), m('92'), m('12')], c: 0, why: m('80 − 12') + '.' },
      { q: 'A ' + m('14 × 10') + ' rectangle with a semicircle of radius ' + m('7') + ' on top has area:', a: [m('140'), m('154'), m('217'), m('294')], c: 2, why: m('140 + 77') + '.' },
      { q: 'Its perimeter is:', a: [m('48'), m('56'), m('70'), m('62')], c: 1, why: 'The top edge is internal.' },
      { q: 'A square of side ' + m('14') + ' less a disc of radius ' + m('7') + ' has area:', a: [m('42'), m('154'), m('196'), m('350')], c: 0, why: m('196 − 154') + '.' },
      { q: 'Its perimeter is:', a: [m('56'), m('44'), m('100'), m('12')], c: 2, why: 'Four sides plus the circle.' },
      { q: 'A ' + m('1') + ' m path round a ' + m('5 × 4') + ' plot has area:', a: [m('20'), m('22'), m('42'), m('9')], c: 1, why: m('42 − 20') + '.' },
      { q: 'An internal cut edge counts in:', a: ['the area', 'the perimeter', 'both', 'neither'], c: 3, why: 'It is not a boundary and not a piece.' },
      { q: 'Areas are written in:', a: ['m', 'm²', 'm³', 'no units'], c: 1, why: 'Two directions.' }
    ]
  },
  quiz: [
    { q: 'A compound area is found by:', a: ['measuring', 'cutting into known pieces', 'guessing', 'tracing'], c: 1, why: 'Add or subtract.' },
    { q: 'A compound perimeter is found by:', a: ['adding all the pieces’ perimeters', 'tracing the boundary', 'subtracting', 'halving'], c: 1, why: 'Internal edges do not count.' },
    { q: 'A ' + m('20 × 15') + ' plot less a ' + m('4 × 3') + ' shed:', a: [m('288'), m('300'), m('312'), m('12')], c: 0, why: 'Subtract.' },
    { q: 'A ring between radii ' + m('7') + ' and ' + m('14') + ':', a: [m('154'), m('462'), m('616'), m('770')], c: 1, why: m('616 − 154') + '.' },
    { q: 'Where a semicircle meets a rectangle, the shared edge:', a: ['counts once', 'counts twice', 'does not count', 'is halved'], c: 2, why: 'It is internal.' },
    { q: 'The best first step is:', a: ['calculate', 'sketch and label the pieces', 'estimate', 'measure'], c: 1, why: 'Then nothing is missed.' }
  ],
  practice: {
    easy: [
      ['An L-shape ' + m('10 × 8') + ' less ' + m('4 × 3'), m('68')],
      ['A house: ' + m('6 × 4') + ' plus a triangle of height ' + m('3'), m('33')],
      ['A ' + m('20 × 15') + ' plot less a ' + m('4 × 3') + ' shed', m('288')],
      ['A ' + m('1') + ' m path round a ' + m('5 × 4') + ' plot', m('22 m²')],
      ['A square of side ' + m('14') + ' less a disc of radius ' + m('7'), m('42 cm²')],
      ['A ring between radii ' + m('7') + ' and ' + m('14'), m('462 cm²')],
      ['Units for an area', m('cm²')]
    ],
    med: [
      ['A ' + m('14 × 10') + ' rectangle plus a semicircle of radius ' + m('7'), m('217 cm²')],
      ['Its perimeter', m('56 cm')],
      ['The square-less-disc shape: its perimeter', m('100 cm')],
      ['The L-shape: its perimeter', m('36')],
      ['A track: ' + m('80 × 70') + ' plus ends of radius ' + m('35') + ': the area', m('9450 m²')],
      ['And its perimeter', m('380 m')],
      ['A ' + m('20 × 12') + ' plot less a quadrant of radius ' + m('7'), m('201.5 m²')]
    ],
    hard: [
      ['A ' + m('2') + ' m path round a ' + m('10 × 6') + ' m garden', m('80 m²')],
      ['A ' + m('28') + ' cm square with quadrants of radius ' + m('14') + ' cut from two corners', m('476 cm²')],
      ['A shape of two semicircles of radius ' + m('7') + ' on opposite sides of a ' + m('14 × 20') + ' rectangle: the area', m('434 cm²')],
      ['Its perimeter', m('84 cm')],
      ['A disc of radius ' + m('14') + ' with a ' + m('14') + ' cm square hole', m('420 cm²')],
      ['Why is subtracting often better than cutting?', 'One line of working instead of several'],
      ['A ' + m('60°') + ' sector of radius ' + m('21') + ' cut from a ' + m('21 × 21') + ' square', m('210 cm²')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Sketch, label every piece, then answer area and perimeter separately.',
  homework: [
    'Find the area of an L-shape ' + m('12 × 9') + ' with a ' + m('5 × 4') + ' corner removed, and its perimeter.',
    'A semicircle of radius ' + m('10') + ' cm sits on a ' + m('20 × 15') + ' cm rectangle. Find the area (' + m('π = 3.14') + ').',
    'Find the perimeter of the same shape.',
    'A ' + m('1.5') + ' m path runs round a ' + m('12') + ' m by ' + m('8') + ' m lawn. Find the area of the path.',
    'A square of side ' + m('28') + ' cm has a disc of radius ' + m('14') + ' cm cut out. Find the area remaining.'
  ]
});

/* ============================== 51 ============================== */
G6_MAT.push({
  id: 'g6-51', stream: 'mat', grade: 6, quarter: 3, lessons: '106', hours: 1,
  title: 'Think — compound figures in the world',
  subtitle: 'Sports pitches, windows, tiles and gardens — real shapes, cut into known pieces.',
  uz: 'Matematika 6, o‘ylab ko‘r', uzPage: 'pp. 311–313',
  cam: 'S7 15 in context', camPage: 'Stage 7, pp. 148–156', wb: 'Exercise 15.5',
  objectives: [
    'Model a real object as a compound of simple shapes.',
    'Decide whether the question wants an area or a length.',
    'Estimate a real quantity from a measured plan.',
    'Judge the accuracy of the answer.'
  ],
  terms: [
    ['Model', 'Model', 'Модель'],
    ['Plan', 'Reja', 'План'],
    ['Estimate', 'Baholash', 'Оценка'],
    ['Material', 'Material', 'Материал'],
    ['Cost', 'Narx', 'Стоимость'],
    ['Per square metre', 'Bir kvadrat metrga', 'За квадратный метр'],
    ['Accuracy', 'Aniqlik', 'Точность'],
    ['Assumption', 'Faraz', 'Допущение']
  ],
  timing: [[10, 'Modelling a real shape'], [12, 'Area or length?'], [12, 'Costing a job'], [6, 'How accurate?']],
  sections: [
    {
      h: 'Modelling a real shape',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Object</th><th>Modelled as</th></tr></thead>
      <tbody>
        <tr><td>a running track</td><td>a rectangle with two semicircular ends</td></tr>
        <tr><td>an arched window</td><td>a rectangle with a semicircle on top</td></tr>
        <tr><td>a football pitch</td><td>a rectangle, with a circle in the middle</td></tr>
        <tr><td>a paved corner</td><td>a square less a quadrant</td></tr>
        <tr><td>a garden with a round pond</td><td>a rectangle less a disc</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Every model leaves something out</div>
      A real track has a kerb, a real window has a frame of some thickness. Saying what has been ignored
      is part of a good answer, not an apology for it.</div>`
    },
    {
      h: 'Area or length?',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>What is wanted</th><th>Measurement</th><th>Units</th></tr></thead>
      <tbody>
        <tr><td>grass seed for a lawn</td><td>area</td><td class="m">m²</td></tr>
        <tr><td>fencing round it</td><td>perimeter</td><td class="m">m</td></tr>
        <tr><td>glass for a window</td><td>area</td><td class="m">cm²</td></tr>
        <tr><td>beading round the glass</td><td>perimeter</td><td class="m">cm</td></tr>
        <tr><td>paint for a wall</td><td>area</td><td class="m">m²</td></tr>
        <tr><td>skirting board</td><td>length</td><td class="m">m</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The material tells you which</div>
      Anything sold by the roll or the metre is a length; anything sold by the tin or the square metre is
      an area. Read the material, not the shape.</div>`
    },
    {
      h: 'Costing a job',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>turf at ${m('35 000')} sum a ${m('m²')} for a ${m('12 × 8')} m lawn</td><td class="m">96 · 35 000</td><td class="m">3 360 000</td></tr>
        <tr><td>fencing at ${m('25 000')} a metre round the same lawn</td><td class="m">40 · 25 000</td><td class="m">1 000 000</td></tr>
        <tr><td>the same lawn with a ${m('2')} m round pond removed</td><td class="m">96 − 12.57</td><td class="m">83.43 m²</td></tr>
        <tr><td>tiles ${m('20')} cm square for a ${m('3 × 4')} m floor</td><td class="m">12 ÷ 0.04</td><td class="m">300 tiles</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Convert units before dividing</span>
      A ${m('20')} cm tile is ${m('0.04')} m², not ${m('20')} m². Mixing centimetres and metres in one
      division is where a factor of ten thousand goes missing.</div>`
    },
    {
      h: 'How accurate?',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Assumption</th><th>Effect</th></tr></thead>
      <tbody>
        <tr><td>the corners are exactly square</td><td>small</td></tr>
        <tr><td>${m('π = 3.14')} rather than more places</td><td>tiny</td></tr>
        <tr><td>no waste when cutting tiles</td><td>can be ${m('10%')}</td></tr>
        <tr><td>the ground is flat</td><td>can be large on a slope</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Add for waste, then round up</div>
      Nobody orders ${m('83.43')} m² of turf. The professional answer is “about ${m('90')} m², allowing
      for waste” — and saying so is a mathematical judgement, not a vague one.</div>`
    }
  ],
  examples: [
    {
      q: 'A lawn is ' + m('12') + ' m by ' + m('8') + ' m with a circular pond of radius ' + m('2') + ' m in it. Find the grassed area.',
      steps: [
        ['Rectangle: ' + m('96') + ' m².', ''],
        ['Pond: ' + m('3.14 · 4 = 12.57') + ' m².', ''],
        [m('96 − 12.57 = 83.43') + ' m².', ''],
        ['Order about ' + m('90') + ' m² of turf, allowing for waste.', '']
      ],
      ans: m('83.43 m²')
    },
    {
      q: 'How many ' + m('20') + ' cm square tiles cover a floor ' + m('3') + ' m by ' + m('4') + ' m?',
      steps: [
        ['Floor: ' + m('12') + ' m².', ''],
        ['One tile: ' + m('0.2 · 0.2 = 0.04') + ' m².', 'Convert first.'],
        [m('12 ÷ 0.04 = 300') + ' tiles.', '']
      ],
      ans: m('300') + ' tiles'
    },
    {
      q: 'An arched window is a ' + m('80') + ' cm by ' + m('120') + ' cm rectangle with a semicircle of radius ' + m('40') + ' cm on top. Find the glass area.',
      steps: [
        ['Rectangle: ' + m('9 600') + ' cm².', ''],
        ['Semicircle: ' + m(f('1', '2') + ' · 3.14 · 1 600 = 2 512') + ' cm².', ''],
        [m('9 600 + 2 512 = 12 112') + ' cm².', 'About ' + m('1.2') + ' m².']
      ],
      ans: m('12 112 cm²')
    }
  ],
  modelNote: 'Measure a real room or courtyard and cost a job in it; the arithmetic is the same as the textbook and the answer can be checked against a real price.',
  interactive: {
    type: 'quiz',
    title: 'Area, length, or number of pieces?',
    hint: 'Read the material being bought.',
    items: [
      { q: 'Grass seed for a lawn is bought by:', a: ['the metre', 'the square metre', 'the piece', 'the litre'], c: 1, why: 'An area.' },
      { q: 'Fencing is bought by:', a: ['the metre', 'the square metre', 'the tin', 'the tile'], c: 0, why: 'A length.' },
      { q: 'A ' + m('12 × 8') + ' m lawn has area:', a: [m('40'), m('96'), m('20'), m('192')], c: 1, why: m('12 · 8') + '.' },
      { q: 'Its perimeter is:', a: [m('20'), m('40'), m('96'), m('48')], c: 1, why: m('2(12 + 8)') + '.' },
      { q: 'A pond of radius ' + m('2') + ' m has area about:', a: [m('6.28'), m('12.57'), m('4'), m('25.1')], c: 1, why: m('3.14 · 4') + '.' },
      { q: 'A ' + m('20') + ' cm square tile is:', a: [m('20') + ' m²', m('0.4') + ' m²', m('0.04') + ' m²', m('400') + ' m²'], c: 2, why: m('0.2 · 0.2') + '.' },
      { q: 'Tiles for a ' + m('12') + ' m² floor:', a: [m('60'), m('300'), m('600'), m('30')], c: 1, why: m('12 ÷ 0.04') + '.' },
      { q: 'Ordering exactly the calculated area is:', a: ['sensible', 'risky — allow for waste', 'required', 'impossible'], c: 1, why: 'Cutting wastes material.' }
    ]
  },
  quiz: [
    { q: 'A running track is modelled as:', a: ['a circle', 'a rectangle with semicircular ends', 'a square', 'an oval with no formula'], c: 1, why: 'Two known shapes.' },
    { q: 'Paint is bought by:', a: ['the metre', 'the area to cover', 'the perimeter', 'the tile'], c: 1, why: 'Coverage per tin.' },
    { q: 'Skirting board is bought by:', a: ['the area', 'the length', 'the piece', 'the tin'], c: 1, why: 'It runs round the room.' },
    { q: 'A ' + m('20') + ' cm tile covers:', a: [m('0.04') + ' m²', m('0.2') + ' m²', m('4') + ' m²', m('20') + ' m²'], c: 0, why: 'Convert before squaring.' },
    { q: 'A model of a real shape:', a: ['is exact', 'ignores some details', 'is useless', 'needs no assumptions'], c: 1, why: 'And they should be stated.' },
    { q: 'A sensible order for ' + m('83.43') + ' m² of turf is:', a: [m('83.43'), 'about ' + m('90'), m('80'), m('83')], c: 1, why: 'Allow for waste.' }
  ],
  practice: {
    easy: [
      ['A ' + m('12 × 8') + ' m lawn: the area', m('96 m²')],
      ['Its perimeter', m('40 m')],
      ['Turf at ' + m('35 000') + ' a ' + m('m²'), m('3 360 000') + ' sum'],
      ['Fencing at ' + m('25 000') + ' a metre', m('1 000 000') + ' sum'],
      ['A ' + m('20') + ' cm tile in ' + m('m²'), m('0.04')],
      ['Tiles for ' + m('12') + ' m²', m('300')],
      ['Grass seed is measured by', 'area']
    ],
    med: [
      ['A ' + m('12 × 8') + ' lawn with a pond of radius ' + m('2') + ' m', m('83.43 m²')],
      ['An arched window ' + m('80 × 120') + ' with a semicircle of radius ' + m('40'), m('12 112 cm²')],
      ['A ' + m('3 × 4') + ' m floor in ' + m('25') + ' cm tiles', m('192') + ' tiles'],
      ['Paint covering ' + m('10') + ' m² a litre for ' + m('45') + ' m²', m('4.5') + ' litres'],
      ['A ' + m('5 × 4') + ' m room: skirting board', m('18 m')],
      ['A track ' + m('80 × 70') + ' with ends of radius ' + m('35') + ': the area', m('9450 m²')],
      ['Which needs the perimeter: turf or fencing?', 'Fencing']
    ],
    hard: [
      ['A lawn ' + m('20 × 15') + ' m with two round beds of radius ' + m('3') + ' m', m('243.5 m²')],
      ['Turf for that lawn at ' + m('40 000') + ' a ' + m('m²') + ', allowing ' + m('10%') + ' waste', 'About ' + m('10 700 000') + ' sum'],
      ['A room ' + m('6 × 4') + ' m with a door ' + m('0.9') + ' m wide: the skirting', m('19.1 m')],
      ['A wall ' + m('8') + ' m by ' + m('2.5') + ' m with a ' + m('2 × 1.5') + ' m window: the paint area', m('17 m²')],
      ['Why allow for waste?', 'Cut pieces at the edges cannot always be reused'],
      ['A ' + m('30') + ' cm tile for the same ' + m('12') + ' m² floor', m('134') + ' tiles, rounded up'],
      ['State two assumptions in the lawn problem', 'The ground is flat and the corners are square']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Say what you are assuming, and round the final order sensibly.',
  homework: [
    'Measure a room at home and find its floor area and perimeter.',
    'Work out how many ' + m('30') + ' cm square tiles would cover that floor.',
    'A lawn ' + m('15 × 10') + ' m has a circular pond of radius ' + m('2.5') + ' m. Find the grassed area.',
    'Cost turf for that lawn at ' + m('38 000') + ' sum a square metre, allowing ' + m('10%') + ' for waste.',
    'Write two sentences saying what your model of the lawn has ignored.'
  ]
});

/* ============================== 52 ============================== */
G6_MAT.push({
  id: 'g6-52', stream: 'mat', grade: 6, quarter: 3, lessons: '107–108', hours: 2,
  title: 'Revision — the circle and its measures',
  subtitle: 'Circumference, area, arcs, sectors and compound shapes on one page.',
  uz: 'Matematika 6, takrorlash', uzPage: 'pp. 314–318',
  cam: 'S7 8 and 15 consolidation', camPage: 'Stage 7, pp. 80–84, 148–156', wb: 'Revision 15',
  objectives: [
    'Choose between ' + m('C = 2πr') + ' and ' + m('S = πr²') + ' from the wording.',
    'Work forwards and backwards with both formulae.',
    'Find arc lengths and sector areas as fractions.',
    'Handle a compound shape confidently.'
  ],
  terms: [
    ['Circumference', 'Aylana uzunligi', 'Длина окружности'],
    ['Area', 'Yuza', 'Площадь'],
    ['Arc', 'Yoy', 'Дуга'],
    ['Sector', 'Sektor', 'Сектор'],
    ['Semicircle', 'Yarim doira', 'Полукруг'],
    ['Quadrant', 'Chorak doira', 'Четверть круга'],
    ['Compound shape', 'Murakkab shakl', 'Составная фигура'],
    ['Units', 'O‘lchov birligi', 'Единицы измерения']
  ],
  timing: [[20, 'The two formulae'], [25, 'Fractions of a circle'], [25, 'Compound shapes'], [8, 'The errors that remain'], [2, 'Homework']],
  sections: [
    {
      h: 'The two formulae',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Wanted</th><th>Formula</th><th>Units</th><th>Backwards</th></tr></thead>
      <tbody>
        <tr><td>circumference</td><td class="m">C = 2πr = πd</td><td class="m">cm</td><td class="m">r = C ÷ 2π</td></tr>
        <tr><td>area</td><td class="m">S = πr²</td><td class="m">cm²</td><td class="m">r = √(S ÷ π)</td></tr>
      </tbody></table></div>
      <div class="tablewrap"><table>
      <thead><tr><th class="m">r</th><th class="m">C</th><th class="m">S</th></tr></thead>
      <tbody>
        <tr><td class="m">7</td><td class="m">44</td><td class="m">154</td></tr>
        <tr><td class="m">14</td><td class="m">88</td><td class="m">616</td></tr>
        <tr><td class="m">21</td><td class="m">132</td><td class="m">1386</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The units decide the formula</div>
      Fencing, edging and string are lengths; turf, glass and paint are areas. Reading the material tells
      you which formula before any number is written.</div>`
    },
    {
      h: 'Fractions of a circle',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Figure</th><th>Arc or curve</th><th>Area</th><th>Perimeter</th></tr></thead>
      <tbody>
        <tr><td>semicircle, ${m('r = 7')}</td><td class="m">22</td><td class="m">77</td><td class="m">36</td></tr>
        <tr><td>quadrant, ${m('r = 7')}</td><td class="m">11</td><td class="m">38.5</td><td class="m">25</td></tr>
        <tr><td>${m('120°')} sector, ${m('r = 21')}</td><td class="m">44</td><td class="m">462</td><td class="m">86</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Area is a clean fraction; perimeter is not</span>
      A semicircle has half the area of the disc but not half the perimeter — the straight edge is added.
      This is the single most repeated error of the chapter.</div>`
    },
    {
      h: 'Compound shapes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Shape</th><th>Area</th><th>Perimeter</th></tr></thead>
      <tbody>
        <tr><td>a semicircle of radius ${m('7')} on a ${m('14 × 10')} rectangle</td><td class="m">217</td><td class="m">56</td></tr>
        <tr><td>a square of side ${m('14')} less a disc of radius ${m('7')}</td><td class="m">42</td><td class="m">100</td></tr>
        <tr><td>a ring between radii ${m('7')} and ${m('14')}</td><td class="m">462</td><td class="m">132</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Sketch, label, then calculate</div>
      Writing the area of each piece on the sketch, and tracing the boundary with a finger, catches almost
      every error before it happens.</div>`
    },
    {
      h: 'The errors that remain',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Error</th><th>Looks like</th><th>Correct</th></tr></thead>
      <tbody>
        <tr><td>diameter used as radius</td><td class="m">π · 14²</td><td class="m">π · 7²</td></tr>
        <tr><td class="m">(πr)²</td><td class="m">484</td><td class="m">πr² = 154</td></tr>
        <tr><td>semicircle perimeter without the diameter</td><td class="m">22</td><td class="m">36</td></tr>
        <tr><td>square root forgotten</td><td class="m">r = 49</td><td class="m">r = 7</td></tr>
        <tr><td>units missing or wrong</td><td class="m">154 cm</td><td class="m">154 cm²</td></tr>
      </tbody></table></div>`
    }
  ],
  examples: [
    {
      q: 'A circle has radius ' + m('21 cm') + '. Find its circumference and area.',
      steps: [
        [m('C = 2 · ' + f('22', '7') + ' · 21 = 132') + ' cm.', ''],
        [m('S = ' + f('22', '7') + ' · 441 = 1386') + ' cm².', ''],
        ['One in ' + m('cm') + ', one in ' + m('cm²') + '.', '']
      ],
      ans: m('132 cm') + ' and ' + m('1386 cm²')
    },
    {
      q: 'A ' + m('120°') + ' sector has radius ' + m('21 cm') + '. Find its arc, area and perimeter.',
      steps: [
        ['Fraction: ' + m(f('1', '3')) + '.', ''],
        ['Arc: ' + m('132 ÷ 3 = 44') + ' cm.', ''],
        ['Area: ' + m('1386 ÷ 3 = 462') + ' cm².', ''],
        ['Perimeter: ' + m('44 + 42 = 86') + ' cm.', 'Two radii added.']
      ],
      ans: m('44 cm') + ', ' + m('462 cm²') + ', ' + m('86 cm')
    },
    {
      q: 'A disc has area ' + m('1386 cm²') + '. Find its circumference.',
      steps: [
        [m('r² = 1386 ÷ ' + f('22', '7') + ' = 441'), ''],
        [m('r = 21') + ' cm.', 'The square root — easily forgotten.'],
        [m('C = 2 · ' + f('22', '7') + ' · 21 = 132') + ' cm.', '']
      ],
      ans: m('132 cm')
    }
  ],
  modelNote: 'Give six questions and ask only whether each needs C or S; sorting them takes two minutes and removes most of the errors in the control work.',
  interactive: {
    type: 'quiz',
    title: 'Length or area?',
    hint: 'Read the material or the units.',
    items: [
      { q: 'Fencing round a circular pond needs:', a: [m('C'), m('S'), 'both', 'neither'], c: 0, why: 'A length.' },
      { q: 'Turf for the same pond area needs:', a: [m('C'), m('S'), 'both', 'neither'], c: 1, why: 'An area.' },
      { q: 'With ' + m('r = 21') + ', ' + m('C') + ' is:', a: [m('66'), m('132'), m('1386'), m('441')], c: 1, why: m('2πr') + '.' },
      { q: 'With ' + m('r = 21') + ', ' + m('S') + ' is:', a: [m('132'), m('441'), m('1386'), m('66')], c: 2, why: m('πr²') + '.' },
      { q: 'A semicircle of radius ' + m('7') + ' has perimeter:', a: [m('22'), m('36'), m('44'), m('77')], c: 1, why: 'Curve plus diameter.' },
      { q: 'Its area is:', a: [m('22'), m('36'), m('77'), m('154')], c: 2, why: 'Half the disc.' },
      { q: 'An area of ' + m('1386') + ' gives ' + m('r') + ' equal to:', a: [m('21'), m('441'), m('132'), m('66')], c: 0, why: 'Divide, then take the root.' },
      { q: m('154 cm') + ' as an answer for an area is:', a: ['fine', 'the wrong units', 'a radius', 'a perimeter'], c: 1, why: m('cm²') + ' is needed.' }
    ]
  },
  quiz: [
    { q: m('C') + ' is measured in:', a: ['cm', 'cm²', 'cm³', 'degrees'], c: 0, why: 'A length.' },
    { q: m('S') + ' is measured in:', a: ['cm', 'cm²', 'cm³', 'degrees'], c: 1, why: 'An area.' },
    { q: 'A disc of radius ' + m('14') + ' has area:', a: [m('88'), m('308'), m('616'), m('196')], c: 2, why: m('πr²') + '.' },
    { q: 'A semicircle of radius ' + m('14') + ' has perimeter:', a: [m('44'), m('72'), m('88'), m('28')], c: 1, why: m('44 + 28') + '.' },
    { q: 'A ' + m('120°') + ' sector is what fraction?', a: [m(f('1', '2')), m(f('1', '3')), m(f('1', '4')), m(f('1', '6'))], c: 1, why: m(f('120', '360')) + '.' },
    { q: 'To find ' + m('r') + ' from the area you:', a: ['divide by ' + m('π'), 'divide by ' + m('π') + ' then take the root', 'divide by ' + m('2π'), 'take the root'], c: 1, why: 'Two steps.' }
  ],
  practice: {
    easy: [
      [m('r = 7') + ': ' + m('C'), m('44 cm')],
      [m('r = 7') + ': ' + m('S'), m('154 cm²')],
      [m('r = 14') + ': ' + m('C'), m('88 cm')],
      [m('r = 14') + ': ' + m('S'), m('616 cm²')],
      [m('r = 21') + ': ' + m('C'), m('132 cm')],
      [m('r = 21') + ': ' + m('S'), m('1386 cm²')],
      ['Units for an area', m('cm²')]
    ],
    med: [
      ['A semicircle of radius ' + m('7') + ': area and perimeter', m('77 cm²') + ', ' + m('36 cm')],
      ['A quadrant of radius ' + m('7'), m('38.5 cm²') + ', ' + m('25 cm')],
      ['A ' + m('120°') + ' sector of radius ' + m('21'), m('462 cm²') + ', ' + m('86 cm')],
      [m('C = 88') + ': the radius', m('14')],
      [m('S = 616') + ': the radius', m('14')],
      ['A ring between radii ' + m('7') + ' and ' + m('14') + ': the area', m('462 cm²')],
      ['A square of side ' + m('14') + ' less a disc of radius ' + m('7'), m('42 cm²')]
    ],
    hard: [
      ['A disc of area ' + m('1386') + ': its circumference', m('132 cm')],
      ['A disc of circumference ' + m('132') + ': its area', m('1386 cm²')],
      ['A semicircle of radius ' + m('7') + ' on a ' + m('14 × 10') + ' rectangle: area and perimeter', m('217 cm²') + ', ' + m('56 cm')],
      ['A ' + m('60°') + ' sector of radius ' + m('14') + ': the area', m('102.67 cm²')],
      ['A ring between radii ' + m('7') + ' and ' + m('14') + ': its outer and inner boundary total', m('132 cm')],
      ['Doubling the radius: what happens to ' + m('C') + ' and ' + m('S') + '?', m('C') + ' doubles, ' + m('S') + ' quadruples'],
      ['Why is ' + m('154 cm') + ' wrong for an area?', 'Areas need square units']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write the units first, and let them tell you which formula to use.',
  homework: [
    'Find ' + m('C') + ' and ' + m('S') + ' for circles of radius ' + m('3.5 cm') + ' and ' + m('28 cm') + '.',
    'A circle has circumference ' + m('66 cm') + '. Find its radius and area.',
    'Find the area and perimeter of a semicircle of radius ' + m('14 cm') + '.',
    'Find the area of a ' + m('45°') + ' sector of a circle of radius ' + m('28 cm') + '.',
    'A rectangle ' + m('20 × 14') + ' cm has a semicircle of radius ' + m('7') + ' cm cut from one short side. Find the area left.'
  ]
});

/* ============================== 53 ============================== */
G6_MAT.push({
  id: 'g6-53', stream: 'mat', grade: 6, quarter: 3, lessons: '109–110', hours: 2,
  title: 'Control work 6 — the circle, and work on the mistakes',
  subtitle: 'Circumference, area, sectors and a compound shape, under time.',
  uz: 'Matematika 6, Nazorat ishi 6', uzPage: 'pp. 250–318',
  cam: 'S7 8 and 15 review', camPage: 'Stage 7, pp. 80–84, 148–156', wb: 'Control paper 6',
  objectives: [
    'Use the two circle formulae accurately and with units.',
    'Work backwards from a circumference or an area.',
    'Find a sector area and a semicircle perimeter.',
    'Classify each lost mark and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Circumference', 'Aylana uzunligi', 'Длина окружности'],
    ['Area', 'Yuza', 'Площадь'],
    ['Sector', 'Sektor', 'Сектор'],
    ['Semicircle', 'Yarim doira', 'Полукруг'],
    ['Compound shape', 'Murakkab shakl', 'Составная фигура'],
    ['Units', 'O‘lchov birligi', 'Единицы'],
    ['Diagnosis', 'Tashxis', 'Диагностика']
  ],
  timing: [[3, 'Instructions'], [35, 'The paper'], [12, 'Answers'], [25, 'Diagnosis and rewrite'], [5, 'The map']],
  sections: [
    {
      h: 'The paper — 25 marks, 35 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Name the centre, a radius, a diameter and a chord on a given circle</td><td class="m">3</td><td>L89–91</td></tr>
        <tr><td>2</td><td>Find ${m('C')} and ${m('S')} for a circle of radius ${m('14')} cm</td><td class="m">4</td><td>L92–99</td></tr>
        <tr><td>3</td><td>A circle has ${m('C = 66')} cm: find its radius</td><td class="m">3</td><td>L92–94</td></tr>
        <tr><td>4</td><td>A disc has area ${m('154')} cm²: find its radius</td><td class="m">3</td><td>L97–99</td></tr>
        <tr><td>5</td><td>Find the area and perimeter of a semicircle of radius ${m('7')} cm</td><td class="m">4</td><td>L95–102</td></tr>
        <tr><td>6</td><td>Find the area of a ${m('120°')} sector of radius ${m('21')} cm</td><td class="m">4</td><td>L100–102</td></tr>
        <tr><td>7</td><td>A semicircle of radius ${m('7')} sits on a ${m('14 × 10')} rectangle: find the area</td><td class="m">4</td><td>L103–105</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The answers</div>
      ${m('88')} cm and ${m('616')} cm²; ${m('10.5')} cm; ${m('7')} cm; ${m('77')} cm² and ${m('36')} cm;
      ${m('462')} cm²; ${m('217')} cm².</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>diameter used for radius</td><td class="m">π · 28²</td><td class="m">π · 14²</td></tr>
        <tr><td>formulae swapped</td><td class="m">C = πr²</td><td class="m">C = 2πr</td></tr>
        <tr><td>square root forgotten</td><td class="m">r = 49</td><td class="m">r = 7</td></tr>
        <tr><td>semicircle perimeter without the diameter</td><td class="m">22</td><td class="m">36</td></tr>
        <tr><td>sector fraction wrong</td><td class="m">${f('120', '180')}</td><td class="m">${f('120', '360')}</td></tr>
        <tr><td>compound shape: pieces not added</td><td class="m">140</td><td class="m">140 + 77</td></tr>
        <tr><td>units missing</td><td class="m">616</td><td class="m">616 cm²</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'The chapter as one map',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Idea</th><th>Formula or rule</th></tr></thead>
      <tbody>
        <tr><td>circumference</td><td class="m">C = 2πr = πd</td></tr>
        <tr><td>area of a disc</td><td class="m">S = πr²</td></tr>
        <tr><td>arc</td><td class="m">${f('α', '360')} · C</td></tr>
        <tr><td>sector area</td><td class="m">${f('α', '360')} · πr²</td></tr>
        <tr><td>semicircle perimeter</td><td class="m">πr + 2r</td></tr>
        <tr><td>quadrant perimeter</td><td class="m">${f('1', '2')}πr + 2r</td></tr>
        <tr><td>compound shapes</td><td>add or subtract; trace the boundary</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Looking forward</div>
      Next come two Cambridge lessons on constructions and symmetry, and then the largest block of the
      quarter: speed, distance and time.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q3: ' + m('C = 66') + ' cm.',
      steps: [
        [m('C = 2πr'), ''],
        [m('66 = 2 · ' + f('22', '7') + ' · r'), ''],
        [m('66 = ' + f('44', '7') + 'r'), ''],
        [m('r = 10.5') + ' cm.', 'Check: ' + m('2 · ' + f('22', '7') + ' · 10.5 = 66') + ' ✓']
      ],
      ans: m('10.5 cm')
    },
    {
      q: 'Model answer, Q5: a semicircle of radius ' + m('7') + ' cm.',
      steps: [
        ['Area: ' + m(f('1', '2') + ' · 154 = 77') + ' cm².', ''],
        ['Curve: ' + m('πr = 22') + ' cm.', ''],
        ['Perimeter: ' + m('22 + 14 = 36') + ' cm.', 'The diameter is part of the boundary.']
      ],
      ans: m('77 cm²') + ' and ' + m('36 cm')
    },
    {
      q: 'Model answer, Q7: the compound shape.',
      steps: [
        ['Rectangle: ' + m('140') + ' cm².', ''],
        ['Semicircle: ' + m('77') + ' cm².', ''],
        [m('140 + 77 = 217') + ' cm².', '']
      ],
      ans: m('217 cm²')
    }
  ],
  modelNote: 'Mark Q5 in two halves — area and perimeter — and report them separately; the class sees which of the two it actually finds hard.',
  interactive: {
    type: 'quiz',
    title: 'The chapter in eight questions',
    hint: 'Formula, then units.',
    items: [
      { q: m('C') + ' for ' + m('r = 14') + ':', a: [m('44'), m('88'), m('616'), m('196')], c: 1, why: m('2πr') + '.' },
      { q: m('S') + ' for ' + m('r = 14') + ':', a: [m('88'), m('196'), m('308'), m('616')], c: 3, why: m('πr²') + '.' },
      { q: m('C = 66') + ' gives ' + m('r') + ':', a: [m('10.5'), m('21'), m('7'), m('33')], c: 0, why: m('C ÷ 2π') + '.' },
      { q: m('S = 154') + ' gives ' + m('r') + ':', a: [m('7'), m('49'), m('14'), m('11')], c: 0, why: 'Divide then take the root.' },
      { q: 'A semicircle of radius ' + m('7') + ' has area:', a: [m('154'), m('77'), m('44'), m('36')], c: 1, why: 'Half the disc.' },
      { q: 'And perimeter:', a: [m('22'), m('36'), m('44'), m('77')], c: 1, why: 'Plus the diameter.' },
      { q: 'A ' + m('120°') + ' sector of radius ' + m('21') + ':', a: [m('462'), m('1386'), m('44'), m('132')], c: 0, why: 'A third of the disc.' },
      { q: 'The compound shape of Q7 has area:', a: [m('140'), m('77'), m('217'), m('294')], c: 2, why: 'Add the pieces.' }
    ]
  },
  quiz: [
    { q: 'Q2 needs two formulae because it asks for:', a: ['two circles', 'a length and an area', 'two radii', 'a check'], c: 1, why: 'Different units.' },
    { q: 'Q3 divides by:', a: [m('π'), m('2π'), m('r'), m('2')], c: 1, why: m('C = 2πr') + '.' },
    { q: 'Q4 ends with:', a: ['a division', 'a square root', 'a multiplication', 'a subtraction'], c: 1, why: m('r²') + ' first.' },
    { q: 'Q5 perimeter includes:', a: ['the curve only', 'the curve and the diameter', 'two radii', 'the whole circle'], c: 1, why: 'The boundary.' },
    { q: 'Q6 fraction is:', a: [m(f('120', '180')), m(f('120', '360')), m(f('360', '120')), m(f('1', '2'))], c: 1, why: 'Out of a full turn.' },
    { q: 'Q7 is answered by:', a: ['subtracting', 'adding two pieces', 'tracing', 'measuring'], c: 1, why: 'Rectangle plus semicircle.' }
  ],
  practice: {
    easy: [
      [m('r = 14') + ': ' + m('C'), m('88 cm')],
      [m('r = 14') + ': ' + m('S'), m('616 cm²')],
      [m('C = 66') + ': the radius', m('10.5 cm')],
      [m('S = 154') + ': the radius', m('7 cm')],
      ['A semicircle of radius ' + m('7') + ': the area', m('77 cm²')],
      ['And the perimeter', m('36 cm')],
      ['A ' + m('120°') + ' sector of radius ' + m('21'), m('462 cm²')]
    ],
    med: [
      ['A semicircle of radius ' + m('7') + ' on a ' + m('14 × 10') + ' rectangle', m('217 cm²')],
      ['Its perimeter', m('56 cm')],
      [m('r = 3.5') + ': ' + m('C') + ' and ' + m('S'), m('22 cm') + ', ' + m('38.5 cm²')],
      ['A quadrant of radius ' + m('14') + ': the area', m('154 cm²')],
      ['And its perimeter', m('50 cm')],
      [m('C = 44') + ': the area of the disc', m('154 cm²')],
      [m('S = 616') + ': the circumference', m('88 cm')]
    ],
    hard: [
      ['A ring between radii ' + m('14') + ' and ' + m('21'), m('770 cm²')],
      ['A ' + m('45°') + ' sector of radius ' + m('28'), m('308 cm²')],
      ['A square of side ' + m('28') + ' less a disc of radius ' + m('14'), m('168 cm²')],
      ['A ' + m('270°') + ' sector of radius ' + m('14') + ': area and perimeter', m('462 cm²') + ', ' + m('94 cm')],
      ['Doubling the radius: ' + m('C') + ' and ' + m('S'), 'Doubled and quadrupled'],
      ['A track ' + m('80 × 70') + ' with ends of radius ' + m('35') + ': one lap', m('380 m')],
      ['Why does an area answer need ' + m('cm²') + '?', 'It measures two directions']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite every question you lost a mark on, with its units.',
  homework: [
    'Rewrite in full every question on which you lost a mark.',
    'Find ' + m('C') + ' and ' + m('S') + ' for a circle of radius ' + m('10.5 cm') + '.',
    'A disc has area ' + m('616 cm²') + '. Find its radius and circumference.',
    'Find the area and perimeter of a quadrant of radius ' + m('21 cm') + '.',
    'Find the area of a ' + m('150°') + ' sector of a circle of radius ' + m('14 cm') + '.'
  ]
});

/* ============================== 54 ============================== */
G6_MAT.push({
  id: 'g6-54', stream: 'mat', grade: 6, quarter: 3, lessons: '111–113', hours: 3,
  title: 'Angles and constructions — intersecting lines and quadrilaterals',
  subtitle: 'A Cambridge insert: drawing accurately with compasses, ruler and protractor.',
  uz: 'Matematika 6, qo‘shimcha mavzu', uzPage: 'pp. 319–328',
  cam: 'S7 5.2–5.3', camPage: 'Stage 7, pp. 58–65', wb: 'Exercise 5.3',
  objectives: [
    'Use the angle facts at intersecting lines.',
    'Construct a triangle from given sides and angles.',
    'Construct a rectangle, a parallelogram and a rhombus.',
    'Check a construction by measuring what was not given.'
  ],
  terms: [
    ['Construction', 'Yasash', 'Построение'],
    ['Intersecting lines', 'Kesishuvchi chiziqlar', 'Пересекающиеся прямые'],
    ['Vertically opposite', 'Vertikal burchaklar', 'Вертикальные углы'],
    ['Parallelogram', 'Parallelogramm', 'Параллелограмм'],
    ['Rhombus', 'Romb', 'Ромб'],
    ['Perpendicular', 'Perpendikulyar', 'Перпендикуляр'],
    ['To check by measuring', 'O‘lchab tekshirish', 'Проверить измерением'],
    ['Accuracy', 'Aniqlik', 'Точность']
  ],
  timing: [[25, 'Angles where lines cross'], [30, 'Constructing triangles'], [35, 'Constructing quadrilaterals'], [25, 'Checking'], [5, 'Homework']],
  sections: [
    {
      h: 'Angles where lines cross',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Fact</th><th>Statement</th></tr></thead>
      <tbody>
        <tr><td>vertically opposite</td><td>the two opposite angles are equal</td></tr>
        <tr><td>on a line</td><td>neighbours add to ${m('180°')}</td></tr>
        <tr><td>at the crossing</td><td>all four add to ${m('360°')}</td></tr>
        <tr><td>perpendicular lines</td><td>all four are ${m('90°')}</td></tr>
      </tbody></table></div>
      <div class="tablewrap"><table>
      <thead><tr><th>One angle</th><th>The other three</th></tr></thead>
      <tbody>
        <tr><td class="m">70°</td><td class="m">110°, 70°, 110°</td></tr>
        <tr><td class="m">125°</td><td class="m">55°, 125°, 55°</td></tr>
        <tr><td class="m">90°</td><td class="m">90°, 90°, 90°</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Two crossing lines give only two different sizes</div>
      An angle and its supplement, each appearing twice. Knowing one of the four gives all of them.</div>`
    },
    {
      h: 'Constructing triangles',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Tools</th><th>Steps</th></tr></thead>
      <tbody>
        <tr><td>three sides</td><td>ruler and compasses</td><td>draw one side, two arcs, join</td></tr>
        <tr><td>two sides and the angle between</td><td>ruler and protractor</td><td>draw the angle, mark both lengths</td></tr>
        <tr><td>a side and two angles</td><td>ruler and protractor</td><td>draw the side, both angles at its ends</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Draw the given angle before measuring the sides</span>
      Marking two lengths first and hoping the angle comes out right does not work. The given data fix the
      order of the construction.</div>`
    },
    {
      h: 'Constructing quadrilaterals',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Shape</th><th>Method</th></tr></thead>
      <tbody>
        <tr><td>rectangle ${m('6 × 4')}</td><td>two perpendiculars at the ends of a ${m('6')} cm side</td></tr>
        <tr><td>square of side ${m('5')}</td><td>the same, with equal sides</td></tr>
        <tr><td>parallelogram, sides ${m('6')} and ${m('4')}, angle ${m('60°')}</td><td>draw the angle, mark both sides, complete with parallels</td></tr>
        <tr><td>rhombus of side ${m('5')}, angle ${m('70°')}</td><td>as a parallelogram with all sides equal</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Opposite sides are made equal, not measured twice</div>
      In a parallelogram, set the compasses to the side length and step it off; measuring each side
      separately introduces small errors that leave the figure open.</div>`
    },
    {
      h: 'Checking',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Construction</th><th>Check by measuring</th><th>Should be</th></tr></thead>
      <tbody>
        <tr><td>triangle from three sides</td><td>the three angles</td><td>they add to ${m('180°')}</td></tr>
        <tr><td>rectangle</td><td>the two diagonals</td><td>equal</td></tr>
        <tr><td>parallelogram</td><td>opposite sides</td><td>equal</td></tr>
        <tr><td>rhombus</td><td>the diagonals</td><td>they cross at ${m('90°')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Check something you were not given</div>
      Measuring what you drew tells you nothing; measuring a diagonal, or an angle you did not set, is a
      real test of the construction.</div>`
    }
  ],
  examples: [
    {
      q: 'Two lines cross and one angle is ' + m('125°') + '. Find the other three.',
      steps: [
        ['Vertically opposite: ' + m('125°') + '.', ''],
        ['On the line: ' + m('180 − 125 = 55°') + '.', ''],
        ['Its opposite: ' + m('55°') + '.', ''],
        ['So ' + m('125°, 55°, 125°, 55°') + '.', '']
      ],
      ans: m('55°, 125°, 55°')
    },
    {
      q: 'Construct a triangle with sides ' + m('6') + ', ' + m('5') + ' and ' + m('4') + ' cm, and check it.',
      steps: [
        ['Draw the ' + m('6') + ' cm side.', ''],
        ['Arc of ' + m('5') + ' from one end, arc of ' + m('4') + ' from the other.', ''],
        ['Join the crossing to both ends.', ''],
        ['Measure the three angles: they should total ' + m('180°') + '.', 'The check.']
      ],
      ans: 'Constructed and checked'
    },
    {
      q: 'Construct a parallelogram with sides ' + m('6') + ' and ' + m('4') + ' cm and an angle of ' + m('60°') + '.',
      steps: [
        ['Draw a ' + m('6') + ' cm side.', ''],
        ['At one end, set off ' + m('60°') + ' and mark ' + m('4') + ' cm.', ''],
        ['From the two free ends, step off ' + m('6') + ' and ' + m('4') + ' cm with compasses.', ''],
        ['Check: opposite sides equal, and the other angle is ' + m('120°') + '.', '']
      ],
      ans: 'Constructed'
    }
  ],
  modelNote: 'Ask every pupil to measure a diagonal of their rectangle and compare with a neighbour; the two answers agreeing is a better verdict than any teacher’s tick.',
  interactive: {
    type: 'quiz',
    title: 'Crossing lines and constructions',
    hint: 'One angle at a crossing gives all four.',
    items: [
      { q: 'Two lines cross; one angle is ' + m('70°') + '. Its opposite is:', a: [m('70°'), m('110°'), m('90°'), m('20°')], c: 0, why: 'Vertically opposite.' },
      { q: 'Its neighbour is:', a: [m('70°'), m('110°'), m('20°'), m('290°')], c: 1, why: 'On a straight line.' },
      { q: 'How many different sizes appear?', a: [m('1'), m('2'), m('3'), m('4')], c: 1, why: 'An angle and its supplement.' },
      { q: 'To construct a triangle from three sides you need:', a: ['a protractor', 'compasses', 'a set square', 'nothing'], c: 1, why: 'Two arcs.' },
      { q: 'To construct one from two sides and the angle between:', a: ['compasses only', 'a protractor and a ruler', 'a set square', 'a calculator'], c: 1, why: 'The angle is set first.' },
      { q: 'A rectangle is checked by measuring:', a: ['the sides', 'the diagonals', 'the angles only', 'nothing'], c: 1, why: 'They should be equal.' },
      { q: 'A rhombus is checked by:', a: ['equal sides', 'diagonals crossing at ' + m('90°'), 'equal diagonals', 'right angles'], c: 1, why: 'A property not set directly.' },
      { q: 'A parallelogram with one angle ' + m('60°') + ' has another of:', a: [m('60°'), m('120°'), m('30°'), m('90°')], c: 1, why: 'Neighbours add to ' + m('180°') + '.' }
    ]
  },
  quiz: [
    { q: 'Vertically opposite angles are:', a: ['supplementary', 'equal', 'complementary', 'right'], c: 1, why: 'At a crossing.' },
    { q: 'The four angles at a crossing add to:', a: [m('90°'), m('180°'), m('270°'), m('360°')], c: 3, why: 'A full turn.' },
    { q: 'One angle of ' + m('125°') + ' gives the others:', a: [m('55, 125, 55'), m('125, 125, 125'), m('35, 125, 35'), m('55, 55, 55')], c: 0, why: 'Two sizes.' },
    { q: 'Three given sides need:', a: ['a protractor', 'compasses', 'a set square', 'a calculator'], c: 1, why: 'Arcs from the ends.' },
    { q: 'A construction should be checked by measuring:', a: ['what was given', 'something not given', 'nothing', 'the paper'], c: 1, why: 'A real test.' },
    { q: 'In a rhombus the diagonals:', a: ['are equal', 'cross at ' + m('90°'), 'are parallel', 'bisect the sides'], c: 1, why: 'A defining property.' }
  ],
  practice: {
    easy: [
      ['One angle at a crossing is ' + m('70°') + ': its opposite', m('70°')],
      ['And its neighbour', m('110°')],
      ['One angle is ' + m('125°') + ': the neighbour', m('55°')],
      ['Perpendicular lines: all four angles', m('90°')],
      ['Angles at a crossing add to', m('360°')],
      ['Sizes appearing at a crossing', m('2')],
      ['A parallelogram with one angle ' + m('60°') + ': the next', m('120°')]
    ],
    med: [
      ['Which tool for three given sides?', 'Compasses'],
      ['Which for two sides and the included angle?', 'Protractor and ruler'],
      ['Which for a side and two angles?', 'Protractor and ruler'],
      ['A rectangle is checked by', 'measuring the diagonals'],
      ['A rhombus is checked by', 'the diagonals crossing at ' + m('90°')],
      ['A parallelogram is checked by', 'opposite sides being equal'],
      ['A triangle from three sides is checked by', 'the angles adding to ' + m('180°')]
    ],
    hard: [
      ['Can a triangle be constructed with sides ' + m('3, 4, 8') + '?', 'No — the arcs do not meet'],
      ['A parallelogram of sides ' + m('6') + ' and ' + m('4') + ' with angle ' + m('60°') + ': all four angles', m('60°, 120°, 60°, 120°')],
      ['Its perimeter', m('20') + ' cm'],
      ['A rhombus of side ' + m('5') + ' with angle ' + m('70°') + ': the other angles', m('110°, 70°, 110°')],
      ['Its perimeter', m('20') + ' cm'],
      ['Why measure a diagonal to check a rectangle?', 'It was not given, so it is an independent test'],
      ['A square of side ' + m('5') + ': the diagonal, to the nearest mm', m('7.1') + ' cm']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Leave every construction line and arc visible on the page.',
  homework: [
    'Two lines cross and one angle is ' + m('142°') + '. Find the other three.',
    'Construct a triangle with sides ' + m('7') + ', ' + m('6') + ' and ' + m('5') + ' cm and measure its angles.',
    'Construct a rectangle ' + m('7') + ' cm by ' + m('4') + ' cm and measure both diagonals.',
    'Construct a parallelogram with sides ' + m('7') + ' and ' + m('5') + ' cm and an angle of ' + m('50°') + '.',
    'Construct a rhombus of side ' + m('6') + ' cm with one angle ' + m('60°') + ' and measure its diagonals.'
  ]
});

/* ============================== 55 ============================== */
G6_MAT.push({
  id: 'g6-55', stream: 'mat', grade: 6, quarter: 3, lessons: '114–115', hours: 2,
  title: 'The symmetry of 2D shapes; congruent shapes',
  subtitle: 'A Cambridge insert: lines of symmetry, order of rotation, and when two shapes are the same.',
  uz: 'Matematika 6, qo‘shimcha mavzu', uzPage: 'pp. 329–334',
  cam: 'S7 8.1, 8.3', camPage: 'Stage 7, pp. 78–86', wb: 'Exercise 8.1',
  objectives: [
    'Find the lines of symmetry of a shape.',
    'Find the order of rotational symmetry.',
    'Decide whether two shapes are congruent.',
    'Recognise symmetry in ornament and in nature.'
  ],
  terms: [
    ['Symmetry', 'Simmetriya', 'Симметрия'],
    ['Line of symmetry', 'Simmetriya o‘qi', 'Ось симметрии'],
    ['Rotational symmetry', 'Aylanma simmetriya', 'Поворотная симметрия'],
    ['Order of symmetry', 'Simmetriya tartibi', 'Порядок симметрии'],
    ['Congruent', 'Teng (mos)', 'Равные (конгруэнтные)'],
    ['Reflection', 'Simmetrik akslantirish', 'Отражение'],
    ['Rotation', 'Burish', 'Поворот'],
    ['Translation', 'Parallel ko‘chirish', 'Параллельный перенос']
  ],
  timing: [[20, 'Lines of symmetry'], [25, 'Rotational symmetry'], [25, 'Congruent shapes'], [8, 'In the world'], [2, 'Homework']],
  sections: [
    {
      h: 'Lines of symmetry',
      html: `<p>A <b>line of symmetry</b> folds the shape onto itself exactly.</p>
      {{fig:transformations:Reflection in a line of symmetry}}
      <div class="tablewrap"><table>
      <thead><tr><th>Shape</th><th>Lines of symmetry</th></tr></thead>
      <tbody>
        <tr><td>square</td><td class="m">4</td></tr>
        <tr><td>rectangle (not square)</td><td class="m">2</td></tr>
        <tr><td>equilateral triangle</td><td class="m">3</td></tr>
        <tr><td>isosceles triangle</td><td class="m">1</td></tr>
        <tr><td>scalene triangle</td><td class="m">0</td></tr>
        <tr><td>rhombus</td><td class="m">2</td></tr>
        <tr><td>regular hexagon</td><td class="m">6</td></tr>
        <tr><td>circle</td><td>infinitely many</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A rectangle has two lines, not four</span>
      Its diagonals do not fold it onto itself — the folded corner does not land on a corner. Testing with
      a folded piece of paper settles it.</div>`
    },
    {
      h: 'Rotational symmetry',
      html: `<p>The <b>order</b> is the number of positions, in one full turn, where the shape looks the
      same.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Shape</th><th>Order</th><th>Angle of rotation</th></tr></thead>
      <tbody>
        <tr><td>square</td><td class="m">4</td><td class="m">90°</td></tr>
        <tr><td>rectangle</td><td class="m">2</td><td class="m">180°</td></tr>
        <tr><td>equilateral triangle</td><td class="m">3</td><td class="m">120°</td></tr>
        <tr><td>regular hexagon</td><td class="m">6</td><td class="m">60°</td></tr>
        <tr><td>parallelogram</td><td class="m">2</td><td class="m">180°</td></tr>
        <tr><td>isosceles triangle</td><td class="m">1</td><td>none but the full turn</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Order ${m('1')} means no rotational symmetry</div>
      Every shape returns to itself after ${m('360°')}, so the order is never zero. A regular
      ${m('n')}-sided polygon has order ${m('n')} and ${m('n')} lines of symmetry.</div>`
    },
    {
      h: 'Congruent shapes',
      html: `<p>Two shapes are <b>congruent</b> when one can be moved exactly onto the other by a
      translation, a rotation, a reflection, or a combination of them.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Pair</th><th>Congruent?</th><th>Why</th></tr></thead>
      <tbody>
        <tr><td>two squares of side ${m('5')}</td><td>yes</td><td>same shape and size</td></tr>
        <tr><td>a square of ${m('5')} and one of ${m('6')}</td><td>no</td><td>different size</td></tr>
        <tr><td>a triangle and its mirror image</td><td>yes</td><td>reflection is allowed</td></tr>
        <tr><td>a shape and its enlargement</td><td>no</td><td>similar, not congruent</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Congruent is “identical”; similar is “same shape”</div>
      Two photographs of different sizes are similar; two copies of the same photograph are congruent.
      Grade 9 will separate the two ideas properly.</div>`
    },
    {
      h: 'In the world',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Where</th><th>Symmetry</th></tr></thead>
      <tbody>
        <tr><td>a butterfly</td><td>one line</td></tr>
        <tr><td>a snowflake</td><td>six lines, order ${m('6')}</td></tr>
        <tr><td>a wheel with ${m('8')} spokes</td><td>order ${m('8')}</td></tr>
        <tr><td>an Uzbek ornamental star</td><td>often order ${m('8')} or ${m('16')}</td></tr>
        <tr><td>the letter ${m('H')}</td><td>two lines, order ${m('2')}</td></tr>
        <tr><td>the letter ${m('S')}</td><td>no lines, order ${m('2')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Reflection and rotation are independent</div>
      ${m('S')} has rotational symmetry but no line; an isosceles triangle has a line but no rotation.
      Having one says nothing about the other.</div>`
    }
  ],
  examples: [
    {
      q: 'How many lines of symmetry has a rectangle that is not a square? What is its order of rotational symmetry?',
      steps: [
        ['Two lines: through the midpoints of opposite sides.', ''],
        ['The diagonals are not lines of symmetry.', ''],
        ['Rotating ' + m('180°') + ' leaves it unchanged, so the order is ' + m('2') + '.', '']
      ],
      ans: m('2') + ' lines, order ' + m('2')
    },
    {
      q: 'A regular octagon: how many lines of symmetry, and what order?',
      steps: [
        ['A regular ' + m('n') + '-gon has ' + m('n') + ' lines and order ' + m('n') + '.', ''],
        ['Here ' + m('n = 8') + '.', ''],
        ['Eight lines, order ' + m('8') + '; the rotation angle is ' + m('45°') + '.', '']
      ],
      ans: m('8') + ' and ' + m('8')
    },
    {
      q: 'Are a triangle and its mirror image congruent?',
      steps: [
        ['Congruence allows reflection.', ''],
        ['The two have the same sides and the same angles.', ''],
        ['So yes.', '']
      ],
      ans: 'Yes'
    }
  ],
  modelNote: 'Fold paper shapes to find the lines and turn them on a pin to find the order; both symmetries become physical before they become vocabulary.',
  interactive: {
    type: 'transform',
    title: 'Reflect, rotate and translate a shape',
    hint: 'All three keep the shape congruent to the original.'
  },
  quiz: [
    { q: 'A square has how many lines of symmetry?', a: [m('2'), m('4'), m('6'), m('8')], c: 1, why: 'Two through sides, two through corners.' },
    { q: 'A rectangle that is not a square:', a: [m('1'), m('2'), m('4'), m('0')], c: 1, why: 'The diagonals do not count.' },
    { q: 'An equilateral triangle has order:', a: [m('1'), m('2'), m('3'), m('6')], c: 2, why: 'Every ' + m('120°') + '.' },
    { q: 'The order of rotational symmetry is never:', a: [m('0'), m('1'), m('2'), m('6')], c: 0, why: 'A full turn always works.' },
    { q: 'Two shapes are congruent when:', a: ['they look alike', 'one fits exactly on the other', 'they have the same area', 'they are both regular'], c: 1, why: 'Same shape and size.' },
    { q: 'A shape and its enlargement are:', a: ['congruent', 'similar', 'identical', 'unrelated'], c: 1, why: 'The size differs.' }
  ],
  practice: {
    easy: [
      ['Lines of symmetry of a square', m('4')],
      ['Of a rectangle', m('2')],
      ['Of an equilateral triangle', m('3')],
      ['Of an isosceles triangle', m('1')],
      ['Of a scalene triangle', m('0')],
      ['Of a circle', 'infinitely many'],
      ['Order of a square', m('4')]
    ],
    med: [
      ['Order of a rectangle', m('2')],
      ['Order of an equilateral triangle', m('3')],
      ['Order of a regular hexagon', m('6')],
      ['Order of a parallelogram', m('2')],
      ['Lines of symmetry of a rhombus', m('2')],
      ['Are two squares of side ' + m('5') + ' congruent?', 'Yes'],
      ['Are a shape and its enlargement congruent?', 'No — similar']
    ],
    hard: [
      ['A regular octagon: lines and order', m('8') + ' and ' + m('8')],
      ['A regular ' + m('n') + '-gon: lines and order', m('n') + ' and ' + m('n')],
      ['A shape with order ' + m('2') + ' but no line of symmetry', 'The letter ' + m('S') + ', or a parallelogram'],
      ['A shape with a line of symmetry but order ' + m('1'), 'An isosceles triangle'],
      ['The rotation angle for order ' + m('5'), m('72°')],
      ['Is a rotation of ' + m('360°') + ' counted?', 'Yes — it is the last of the order'],
      ['Why is a rectangle’s diagonal not a line of symmetry?', 'The folded corner does not land on a corner']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Fold to find lines; turn to find the order.',
  homework: [
    'Find the lines of symmetry and the order for a square, a rectangle and a rhombus.',
    'Find them for an equilateral, an isosceles and a scalene triangle.',
    'Find the order of rotational symmetry of a regular pentagon and its rotation angle.',
    'Write three capital letters with a line of symmetry and two with rotational symmetry.',
    'Draw two congruent shapes in different positions and say which movement takes one to the other.'
  ]
});

/* ============================== 56 ============================== */
G6_MAT.push({
  id: 'g6-56', stream: 'mat', grade: 6, quarter: 3, lessons: '116', hours: 1,
  title: 'Recall — speed, distance and time',
  subtitle: 'One formula, three arrangements, and the units that keep them honest.',
  uz: 'Matematika 6, takrorlash', uzPage: 'pp. 335–338',
  cam: 'S7 12 rates', camPage: 'Stage 7, pp. 122–126', wb: 'Exercise 12.4',
  objectives: [
    'State the relation between speed, distance and time.',
    'Rearrange it to find any one of the three.',
    'Use consistent units.',
    'Convert between ' + m('km/h') + ' and ' + m('m/s') + '.'
  ],
  terms: [
    ['Speed', 'Tezlik', 'Скорость'],
    ['Distance', 'Masofa', 'Расстояние'],
    ['Time', 'Vaqt', 'Время'],
    ['Kilometres per hour', 'km/soat', 'км/ч'],
    ['Metres per second', 'm/sek', 'м/с'],
    ['To rearrange', 'O‘zgartirib yozish', 'Выразить'],
    ['Consistent units', 'Mos birliklar', 'Согласованные единицы'],
    ['Rate', 'Tezlik (me’yor)', 'Норма']
  ],
  timing: [[10, 'The formula'], [12, 'Rearranging'], [12, 'Units'], [6, 'Converting']],
  sections: [
    {
      h: 'The formula',
      html: `${eq(m('s = vt'), true)}
      <p>Distance equals speed times time — because a speed of ${m('60')} km/h means ${m('60')} km covered
      in each hour.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Speed</th><th>Time</th><th>Distance</th></tr></thead>
      <tbody>
        <tr><td class="m">60 km/h</td><td class="m">3 h</td><td class="m">180 km</td></tr>
        <tr><td class="m">80 km/h</td><td class="m">2.5 h</td><td class="m">200 km</td></tr>
        <tr><td class="m">5 m/s</td><td class="m">12 s</td><td class="m">60 m</td></tr>
        <tr><td class="m">4 km/h</td><td class="m">45 min</td><td class="m">3 km</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The last row needs the time in hours</span>
      ${m('45')} minutes is ${m('0.75')} h, and ${m('4 · 0.75 = 3')} km. Using ${m('45')} with a speed in
      km/h gives ${m('180')} km, which is absurd — and the absurdity is the check.</div>`
    },
    {
      h: 'Rearranging',
      html: `${eq(m('s = vt') + '     ' + m('v = ' + f('s', 't')) + '     ' + m('t = ' + f('s', 'v')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Wanted</th><th>Given</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>distance</td><td class="m">v = 60, t = 3</td><td class="m">60 · 3</td><td class="m">180 km</td></tr>
        <tr><td>speed</td><td class="m">s = 180, t = 3</td><td class="m">180 ÷ 3</td><td class="m">60 km/h</td></tr>
        <tr><td>time</td><td class="m">s = 180, v = 60</td><td class="m">180 ÷ 60</td><td class="m">3 h</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">One formula, not three</div>
      ${m('s = vt')} is all that has to be remembered; the other two are it rearranged. Writing the one you
      know and rearranging is safer than memorising a triangle.</div>`
    },
    {
      h: 'Units',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Speed in</th><th>Distance in</th><th>Time in</th></tr></thead>
      <tbody>
        <tr><td class="m">km/h</td><td class="m">km</td><td>hours</td></tr>
        <tr><td class="m">m/s</td><td class="m">m</td><td>seconds</td></tr>
        <tr><td class="m">m/min</td><td class="m">m</td><td>minutes</td></tr>
      </tbody></table></div>
      <div class="tablewrap"><table>
      <thead><tr><th>Time given</th><th>In hours</th></tr></thead>
      <tbody>
        <tr><td class="m">30 min</td><td class="m">0.5</td></tr>
        <tr><td class="m">45 min</td><td class="m">0.75</td></tr>
        <tr><td class="m">20 min</td><td class="m">${f('1', '3')}</td></tr>
        <tr><td class="m">1 h 30 min</td><td class="m">1.5</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The units of the answer are built from the others</div>
      Kilometres divided by hours gives km/h automatically. Writing the units through the calculation makes
      the answer's unit appear by itself.</div>`
    },
    {
      h: 'Converting',
      html: `${eq(m('1 km/h = ' + f('1000', '3600') + ' m/s = ' + f('5', '18') + ' m/s'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th class="m">km/h</th><th class="m">m/s</th></tr></thead>
      <tbody>
        <tr><td class="m">36</td><td class="m">10</td></tr>
        <tr><td class="m">72</td><td class="m">20</td></tr>
        <tr><td class="m">18</td><td class="m">5</td></tr>
        <tr><td class="m">90</td><td class="m">25</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Divide by ${m('3.6')} to go from km/h to m/s</div>
      And multiply by ${m('3.6')} to come back. A sprinter at ${m('10')} m/s is running at ${m('36')} km/h,
      which is a useful pair of numbers to remember.</div>`
    }
  ],
  examples: [
    {
      q: 'A car travels at ' + m('80 km/h') + ' for ' + m('2.5') + ' hours. How far does it go?',
      steps: [
        [m('s = vt'), ''],
        [m('= 80 · 2.5'), ''],
        [m('= 200') + ' km.', '']
      ],
      ans: m('200 km')
    },
    {
      q: 'A cyclist covers ' + m('3 km') + ' in ' + m('45') + ' minutes. Find the speed in km/h.',
      steps: [
        [m('45') + ' min ' + m('= 0.75') + ' h.', 'Convert first.'],
        [m('v = ' + f('3', '0.75')), ''],
        [m('= 4') + ' km/h.', '']
      ],
      ans: m('4 km/h')
    },
    {
      q: 'Convert ' + m('72 km/h') + ' to metres per second.',
      steps: [
        [m('72 ÷ 3.6'), ''],
        [m('= 20') + ' m/s.', ''],
        ['Check: ' + m('20 · 3.6 = 72') + ' ✓', '']
      ],
      ans: m('20 m/s')
    }
  ],
  modelNote: 'Time a pupil walking a measured 20 m and compute the speed in both units; the numbers are their own and the units matter immediately.',
  interactive: {
    type: 'quiz',
    title: 'Which of the three is wanted?',
    hint: 'Write ' + m('s = vt') + ' and rearrange.',
    items: [
      { q: m('v = 60') + ', ' + m('t = 3') + ': the distance is:', a: [m('20'), m('63'), m('180'), m('180 km')], c: 3, why: 'With units.' },
      { q: m('s = 180') + ', ' + m('t = 3') + ': the speed is:', a: [m('540'), m('60 km/h'), m('60 km'), m('3')], c: 1, why: m('s ÷ t') + '.' },
      { q: m('s = 180') + ', ' + m('v = 60') + ': the time is:', a: [m('3 h'), m('120'), m('240'), m('0.33')], c: 0, why: m('s ÷ v') + '.' },
      { q: m('45') + ' minutes in hours:', a: [m('0.45'), m('0.75'), m('4.5'), m('45')], c: 1, why: m(f('45', '60')) + '.' },
      { q: m('20') + ' minutes in hours:', a: [m('0.2'), m(f('1', '3')), m('0.5'), m('2')], c: 1, why: m(f('20', '60')) + '.' },
      { q: m('36') + ' km/h in m/s:', a: [m('10'), m('36'), m('100'), m('3.6')], c: 0, why: 'Divide by ' + m('3.6') + '.' },
      { q: m('20') + ' m/s in km/h:', a: [m('36'), m('72'), m('60'), m('7.2')], c: 1, why: 'Multiply by ' + m('3.6') + '.' },
      { q: 'Using minutes with a speed in km/h gives:', a: ['the right answer', 'an absurd answer', 'metres', 'nothing'], c: 1, why: 'Convert to hours first.' }
    ]
  },
  quiz: [
    { q: m('s') + ' equals:', a: [m('vt'), m(f('v', 't')), m(f('t', 'v')), m('v + t')], c: 0, why: 'Speed times time.' },
    { q: m('v') + ' equals:', a: [m('st'), m(f('s', 't')), m(f('t', 's')), m('s − t')], c: 1, why: 'Distance over time.' },
    { q: m('t') + ' equals:', a: [m('sv'), m(f('v', 's')), m(f('s', 'v')), m('s + v')], c: 2, why: 'Distance over speed.' },
    { q: 'With a speed in km/h, the time must be in:', a: ['minutes', 'hours', 'seconds', 'any unit'], c: 1, why: 'Consistent units.' },
    { q: m('72') + ' km/h in m/s is:', a: [m('20'), m('26'), m('7.2'), m('259')], c: 0, why: 'Divide by ' + m('3.6') + '.' },
    { q: 'A sprinter at ' + m('10') + ' m/s runs at:', a: [m('10') + ' km/h', m('36') + ' km/h', m('60') + ' km/h', m('3.6') + ' km/h'], c: 1, why: 'Multiply by ' + m('3.6') + '.' }
  ],
  practice: {
    easy: [
      [m('v = 60, t = 3') + ': the distance', m('180 km')],
      [m('v = 80, t = 2.5'), m('200 km')],
      [m('v = 5') + ' m/s, ' + m('t = 12') + ' s', m('60 m')],
      [m('s = 180, t = 3') + ': the speed', m('60 km/h')],
      [m('s = 180, v = 60') + ': the time', m('3 h')],
      [m('30') + ' min in hours', m('0.5')],
      [m('45') + ' min in hours', m('0.75')]
    ],
    med: [
      [m('3') + ' km in ' + m('45') + ' min: the speed', m('4 km/h')],
      [m('36') + ' km/h in m/s', m('10')],
      [m('72') + ' km/h in m/s', m('20')],
      [m('25') + ' m/s in km/h', m('90')],
      [m('v = 4') + ' km/h, ' + m('t = 45') + ' min', m('3 km')],
      [m('s = 150') + ' km, ' + m('v = 60') + ' km/h', m('2.5 h')],
      [m('20') + ' min in hours', m(f('1', '3'))]
    ],
    hard: [
      ['A train covers ' + m('210') + ' km in ' + m('2 h 30 min'), m('84 km/h')],
      ['A walker at ' + m('5') + ' km/h covers ' + m('4') + ' km in', m('48') + ' min'],
      ['A runner at ' + m('8') + ' m/s in ' + m('90') + ' s', m('720 m')],
      ['Convert ' + m('54') + ' km/h to m/s', m('15')],
      ['Convert ' + m('12') + ' m/s to km/h', m('43.2')],
      ['A car at ' + m('90') + ' km/h covers ' + m('1') + ' km in', m('40') + ' s'],
      ['Why must units match?', 'The formula divides one by the other, so they must belong together']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Convert the time to hours before using a speed in km/h.',
  homework: [
    'A bus travels at ' + m('70') + ' km/h for ' + m('4') + ' hours. Find the distance.',
    'A car covers ' + m('240') + ' km in ' + m('3') + ' hours. Find its speed.',
    'How long does ' + m('150') + ' km take at ' + m('50') + ' km/h?',
    'A cyclist covers ' + m('9') + ' km in ' + m('40') + ' minutes. Find the speed in km/h.',
    'Convert ' + m('108') + ' km/h to m/s and ' + m('15') + ' m/s to km/h.'
  ]
});

/* ============================== 57 ============================== */
G6_MAT.push({
  id: 'g6-57', stream: 'mat', grade: 6, quarter: 3, lessons: '117–119', hours: 3,
  title: 'Speed',
  subtitle: 'What a speed measures, how it is written, and how fast things actually go.',
  uz: 'Matematika 6, §24', uzPage: 'pp. 339–348',
  cam: 'S7 12 rates', camPage: 'Stage 7, pp. 122–126', wb: 'Exercise 12.5',
  objectives: [
    'Define speed as distance per unit of time.',
    'Compare speeds given in different units.',
    'Read a speed from a table or a description.',
    'Judge whether a speed is reasonable.'
  ],
  terms: [
    ['Speed', 'Tezlik', 'Скорость'],
    ['Per hour', 'Bir soatda', 'В час'],
    ['Per second', 'Bir sekundda', 'В секунду'],
    ['Uniform speed', 'Bir tekis tezlik', 'Равномерная скорость'],
    ['To compare', 'Taqqoslash', 'Сравнить'],
    ['Reasonable', 'Maqbul', 'Разумный'],
    ['Rate', 'Me’yor', 'Норма'],
    ['Unit of speed', 'Tezlik birligi', 'Единица скорости']
  ],
  timing: [[25, 'What a speed is'], [30, 'Finding a speed'], [35, 'Comparing speeds'], [25, 'Is it reasonable?'], [5, 'Homework']],
  sections: [
    {
      h: 'What a speed is',
      html: `${eq(m('v = ' + f('s', 't')), true)}
      <p>A speed of ${m('60')} km/h means ${m('60')} km in every hour — and therefore ${m('30')} km in half
      an hour, ${m('1')} km per minute, and ${m('16.7')} m each second.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Speed</th><th>In one hour</th><th>In one minute</th></tr></thead>
      <tbody>
        <tr><td class="m">60 km/h</td><td class="m">60 km</td><td class="m">1 km</td></tr>
        <tr><td class="m">90 km/h</td><td class="m">90 km</td><td class="m">1.5 km</td></tr>
        <tr><td class="m">5 km/h</td><td class="m">5 km</td><td class="m">83 m</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A speed is a rate: something per something</div>
      Price per kilogram, pupils per class, kilometres per hour — all are rates, and all are found by
      dividing one quantity by another.</div>`
    },
    {
      h: 'Finding a speed',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Journey</th><th>Working</th><th>Speed</th></tr></thead>
      <tbody>
        <tr><td>${m('180')} km in ${m('3')} h</td><td class="m">180 ÷ 3</td><td class="m">60 km/h</td></tr>
        <tr><td>${m('240')} km in ${m('4')} h</td><td class="m">240 ÷ 4</td><td class="m">60 km/h</td></tr>
        <tr><td>${m('100')} m in ${m('12.5')} s</td><td class="m">100 ÷ 12.5</td><td class="m">8 m/s</td></tr>
        <tr><td>${m('9')} km in ${m('40')} min</td><td class="m">9 ÷ ${f('2', '3')}</td><td class="m">13.5 km/h</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Divide the distance by the time, never the other way round</span>
      ${m('3 ÷ 180')} gives ${m('0.017')}, which is hours per kilometre — a real quantity, but not the one
      asked for. The units tell you which division you have done.</div>`
    },
    {
      h: 'Comparing speeds',
      html: `<p>Two speeds can only be compared in the same units.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>A</th><th>B</th><th>In one unit</th><th>Faster</th></tr></thead>
      <tbody>
        <tr><td class="m">72 km/h</td><td class="m">18 m/s</td><td>${m('20')} and ${m('18')} m/s</td><td>A</td></tr>
        <tr><td class="m">54 km/h</td><td class="m">16 m/s</td><td>${m('15')} and ${m('16')} m/s</td><td>B</td></tr>
        <tr><td class="m">4 km/h</td><td class="m">70 m/min</td><td>${m('66.7')} and ${m('70')} m/min</td><td>B</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Convert first, compare second</div>
      The larger number is not the faster speed unless the units match. This is the same rule as comparing
      ${m('50')} cm with ${m('2')} m.</div>`
    },
    {
      h: 'Is it reasonable?',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Mover</th><th>Typical speed</th></tr></thead>
      <tbody>
        <tr><td>a walker</td><td class="m">5 km/h</td></tr>
        <tr><td>a cyclist</td><td class="m">15–20 km/h</td></tr>
        <tr><td>a car in a town</td><td class="m">40–60 km/h</td></tr>
        <tr><td>a train</td><td class="m">100–160 km/h</td></tr>
        <tr><td>an aeroplane</td><td class="m">800–900 km/h</td></tr>
        <tr><td>sound in air</td><td class="m">340 m/s</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">An answer of ${m('600')} km/h for a cyclist is a signal, not a result</span>
      Comparing an answer with the table catches unit errors and misplaced decimal points before the
      working is even reread.</div>`
    }
  ],
  examples: [
    {
      q: 'A runner covers ' + m('100') + ' m in ' + m('12.5') + ' seconds. Find the speed.',
      steps: [
        [m('v = ' + f('s', 't') + ' = ' + f('100', '12.5')), ''],
        [m('= 8') + ' m/s.', ''],
        ['In km/h that is ' + m('28.8') + ' — reasonable for a sprinter.', '']
      ],
      ans: m('8 m/s')
    },
    {
      q: 'Which is faster, ' + m('72') + ' km/h or ' + m('18') + ' m/s?',
      steps: [
        [m('72 ÷ 3.6 = 20') + ' m/s.', ''],
        [m('20 > 18') + '.', ''],
        ['The first is faster.', '']
      ],
      ans: m('72') + ' km/h'
    },
    {
      q: 'A cyclist covers ' + m('9') + ' km in ' + m('40') + ' minutes. Find the speed in km/h.',
      steps: [
        [m('40') + ' min ' + m('= ' + f('2', '3')) + ' h.', ''],
        [m('9 ÷ ' + f('2', '3') + ' = 9 · ' + f('3', '2')), ''],
        [m('= 13.5') + ' km/h.', 'Reasonable for a cyclist ✓']
      ],
      ans: m('13.5 km/h')
    }
  ],
  modelNote: 'Have the class estimate the speed of a walk down the corridor, then measure it; being within 20% is a good result and makes the units real.',
  interactive: {
    type: 'quiz',
    title: 'Speeds and their units',
    hint: 'Convert before comparing.',
    items: [
      { q: m('180') + ' km in ' + m('3') + ' h:', a: [m('60 km/h'), m('540 km/h'), m('0.017'), m('183')], c: 0, why: 'Distance over time.' },
      { q: m('100') + ' m in ' + m('12.5') + ' s:', a: [m('8 m/s'), m('12.5 m/s'), m('0.125 m/s'), m('1250 m/s')], c: 0, why: m('100 ÷ 12.5') + '.' },
      { q: m('9') + ' km in ' + m('40') + ' min:', a: [m('13.5 km/h'), m('0.225 km/h'), m('360 km/h'), m('22.5 km/h')], c: 0, why: 'Time in hours.' },
      { q: 'Which is faster, ' + m('72') + ' km/h or ' + m('18') + ' m/s?', a: [m('72') + ' km/h', m('18') + ' m/s', 'equal', 'cannot say'], c: 0, why: m('20 > 18') + '.' },
      { q: 'Which is faster, ' + m('54') + ' km/h or ' + m('16') + ' m/s?', a: [m('54') + ' km/h', m('16') + ' m/s', 'equal', 'cannot say'], c: 1, why: m('16 > 15') + '.' },
      { q: 'A walker’s speed is about:', a: [m('1') + ' km/h', m('5') + ' km/h', m('20') + ' km/h', m('60') + ' km/h'], c: 1, why: 'Ordinary walking.' },
      { q: 'Sound travels at about:', a: [m('34') + ' m/s', m('340') + ' m/s', m('3400') + ' m/s', m('34') + ' km/h'], c: 1, why: 'In air.' },
      { q: m('600') + ' km/h for a cyclist means:', a: ['a fast cyclist', 'an error somewhere', 'a downhill', 'a record'], c: 1, why: 'Compare with the table.' }
    ]
  },
  quiz: [
    { q: 'Speed is:', a: ['distance times time', 'distance over time', 'time over distance', 'distance plus time'], c: 1, why: 'A rate.' },
    { q: m('240') + ' km in ' + m('4') + ' h is:', a: [m('60 km/h'), m('960 km/h'), m('0.017 km/h'), m('244 km/h')], c: 0, why: 'Divide.' },
    { q: 'To compare km/h with m/s you:', a: ['add them', 'convert one', 'take the larger number', 'divide them'], c: 1, why: 'Same units first.' },
    { q: m('4') + ' km/h in metres per minute is about:', a: [m('40'), m('67'), m('240'), m('4')], c: 1, why: m('4000 ÷ 60') + '.' },
    { q: 'A train’s speed is about:', a: [m('15') + ' km/h', m('60') + ' km/h', m('120') + ' km/h', m('800') + ' km/h'], c: 2, why: 'Typical.' },
    { q: 'Hours per kilometre is:', a: ['a speed', 'the reciprocal of a speed', 'nonsense', 'the same thing'], c: 1, why: 'Time over distance.' }
  ],
  practice: {
    easy: [
      [m('180') + ' km in ' + m('3') + ' h', m('60 km/h')],
      [m('240') + ' km in ' + m('4') + ' h', m('60 km/h')],
      [m('100') + ' m in ' + m('12.5') + ' s', m('8 m/s')],
      [m('60') + ' km in ' + m('1') + ' h', m('60 km/h')],
      [m('20') + ' m in ' + m('4') + ' s', m('5 m/s')],
      ['A walker’s speed', 'about ' + m('5 km/h')],
      ['Sound in air', m('340 m/s')]
    ],
    med: [
      [m('9') + ' km in ' + m('40') + ' min', m('13.5 km/h')],
      [m('3') + ' km in ' + m('45') + ' min', m('4 km/h')],
      ['Faster: ' + m('72') + ' km/h or ' + m('18') + ' m/s?', m('72') + ' km/h'],
      ['Faster: ' + m('54') + ' km/h or ' + m('16') + ' m/s?', m('16') + ' m/s'],
      [m('4') + ' km/h in m/min', m('66.7')],
      [m('90') + ' km/h in m/s', m('25')],
      ['A cyclist at ' + m('600') + ' km/h means', 'an error somewhere']
    ],
    hard: [
      ['A train covers ' + m('420') + ' km in ' + m('3 h 30 min'), m('120 km/h')],
      ['An aeroplane covers ' + m('2 700') + ' km in ' + m('3') + ' h', m('900 km/h')],
      ['Light takes ' + m('8') + ' minutes from the Sun, ' + m('150') + ' million km away: the speed', 'About ' + m('312 500') + ' km/s'],
      ['A ' + m('400') + ' m lap in ' + m('50') + ' s', m('8 m/s') + ', or ' + m('28.8 km/h')],
      ['Which is faster: ' + m('1') + ' km per minute or ' + m('60') + ' km/h?', 'Equal'],
      ['A snail at ' + m('1') + ' cm/s in km/h', m('0.036')],
      ['Why compare an answer with a table of typical speeds?', 'It catches unit errors at once']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Check every answer against a typical speed for that kind of mover.',
  homework: [
    'A car covers ' + m('330') + ' km in ' + m('5') + ' hours. Find its speed.',
    'A sprinter runs ' + m('200') + ' m in ' + m('25') + ' seconds. Find the speed in m/s and in km/h.',
    'A walker covers ' + m('6') + ' km in ' + m('1 h 20 min') + '. Find the speed.',
    'Which is faster: ' + m('90') + ' km/h or ' + m('26') + ' m/s?',
    'Write down a typical speed for a walker, a car and an aeroplane.'
  ]
});

/* ============================== 58 ============================== */
G6_MAT.push({
  id: 'g6-58', stream: 'mat', grade: 6, quarter: 3, lessons: '120–122', hours: 3,
  title: 'Finding speed, distance and time',
  subtitle: 'Three questions from one formula, with the units chosen before the arithmetic.',
  uz: 'Matematika 6, §25', uzPage: 'pp. 349–358',
  cam: 'S7 12 rates', camPage: 'Stage 7, pp. 122–126', wb: 'Exercise 12.6',
  objectives: [
    'Find any one of ' + m('s, v, t') + ' from the other two.',
    'Convert times between hours, minutes and seconds.',
    'Give an answer in hours and minutes where that is natural.',
    'Check every answer against the sense of the situation.'
  ],
  terms: [
    ['Formula', 'Formula', 'Формула'],
    ['To rearrange', 'O‘zgartirib yozish', 'Выразить'],
    ['Hours and minutes', 'Soat va daqiqa', 'Часы и минуты'],
    ['Decimal hours', 'O‘nli soat', 'Часы в десятичной форме'],
    ['Arrival time', 'Yetib borish vaqti', 'Время прибытия'],
    ['Departure', 'Jo‘nash', 'Отправление'],
    ['Journey', 'Sayohat', 'Поездка'],
    ['Sense check', 'Mantiqiy tekshirish', 'Проверка по смыслу']
  ],
  timing: [[25, 'Finding the distance'], [30, 'Finding the speed'], [35, 'Finding the time'], [25, 'Hours and minutes'], [5, 'Homework']],
  sections: [
    {
      h: 'Finding the distance',
      html: `${eq(m('s = vt'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Speed</th><th>Time</th><th>Distance</th></tr></thead>
      <tbody>
        <tr><td class="m">65 km/h</td><td class="m">4 h</td><td class="m">260 km</td></tr>
        <tr><td class="m">50 km/h</td><td class="m">2 h 30 min</td><td class="m">125 km</td></tr>
        <tr><td class="m">12 km/h</td><td class="m">20 min</td><td class="m">4 km</td></tr>
        <tr><td class="m">15 m/s</td><td class="m">40 s</td><td class="m">600 m</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Write the time in the unit the speed uses</div>
      ${m('2')} h ${m('30')} min is ${m('2.5')} h; ${m('20')} min is ${m(f('1', '3'))} h. Doing that
      conversion first turns every problem into one multiplication.</div>`
    },
    {
      h: 'Finding the speed',
      html: `${eq(m('v = ' + f('s', 't')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Distance</th><th>Time</th><th>Speed</th></tr></thead>
      <tbody>
        <tr><td class="m">260 km</td><td class="m">4 h</td><td class="m">65 km/h</td></tr>
        <tr><td class="m">125 km</td><td class="m">2.5 h</td><td class="m">50 km/h</td></tr>
        <tr><td class="m">4 km</td><td class="m">20 min</td><td class="m">12 km/h</td></tr>
        <tr><td class="m">600 m</td><td class="m">40 s</td><td class="m">15 m/s</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A speed in km/h needs the time in hours</span>
      ${m('4')} km in ${m('20')} minutes is ${m('12')} km/h, not ${m('0.2')} km/h. Dividing by ${m('20')}
      answers a different question.</div>`
    },
    {
      h: 'Finding the time',
      html: `${eq(m('t = ' + f('s', 'v')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Distance</th><th>Speed</th><th>Time</th><th>In hours and minutes</th></tr></thead>
      <tbody>
        <tr><td class="m">260 km</td><td class="m">65 km/h</td><td class="m">4</td><td class="m">4 h</td></tr>
        <tr><td class="m">150 km</td><td class="m">60 km/h</td><td class="m">2.5</td><td class="m">2 h 30 min</td></tr>
        <tr><td class="m">90 km</td><td class="m">80 km/h</td><td class="m">1.125</td><td class="m">1 h 7.5 min</td></tr>
        <tr><td class="m">7 km</td><td class="m">5 km/h</td><td class="m">1.4</td><td class="m">1 h 24 min</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Turning a decimal hour into minutes</div>
      Multiply the decimal part by ${m('60')}: ${m('0.4')} h is ${m('24')} min, ${m('0.25')} h is
      ${m('15')} min. Writing ${m('1.4')} h as “one hour forty minutes” is a real and common error.</div>`
    },
    {
      h: 'Hours and minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>a bus leaves at ${m('8:00')} and travels ${m('150')} km at ${m('60')} km/h</td><td class="m">2.5 h</td><td>arrives ${m('10:30')}</td></tr>
        <tr><td>a train leaves at ${m('7:20')} and takes ${m('1 h 50 min')}</td><td class="m">7:20 + 1:50</td><td>arrives ${m('9:10')}</td></tr>
        <tr><td>a journey of ${m('7')} km at ${m('5')} km/h</td><td class="m">1.4 h</td><td class="m">1 h 24 min</td></tr>
        <tr><td>a walk from ${m('9:15')} to ${m('11:00')} covering ${m('7')} km</td><td class="m">1.75 h</td><td class="m">4 km/h</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Adding times is not decimal addition</span>
      ${m('7:20')} plus ${m('1')} h ${m('50')} min is ${m('9:10')}, because ${m('70')} minutes is an hour
      and ten. Times carry at ${m('60')}, not at ${m('100')}.</div>`
    }
  ],
  examples: [
    {
      q: 'A cyclist rides at ' + m('12') + ' km/h for ' + m('20') + ' minutes. How far?',
      steps: [
        [m('20') + ' min ' + m('= ' + f('1', '3')) + ' h.', ''],
        [m('s = 12 · ' + f('1', '3')), ''],
        [m('= 4') + ' km.', '']
      ],
      ans: m('4 km')
    },
    {
      q: 'A journey of ' + m('7') + ' km is walked at ' + m('5') + ' km/h. How long does it take?',
      steps: [
        [m('t = ' + f('7', '5') + ' = 1.4') + ' h.', ''],
        [m('0.4 · 60 = 24') + ' min.', ''],
        [m('1') + ' h ' + m('24') + ' min.', 'Not one hour forty.']
      ],
      ans: m('1 h 24 min')
    },
    {
      q: 'A bus leaves at ' + m('8:00') + ' and covers ' + m('150') + ' km at ' + m('60') + ' km/h. When does it arrive?',
      steps: [
        [m('t = ' + f('150', '60') + ' = 2.5') + ' h.', ''],
        [m('2.5') + ' h is ' + m('2') + ' h ' + m('30') + ' min.', ''],
        [m('8:00 + 2:30 = 10:30') + '.', '']
      ],
      ans: m('10:30')
    }
  ],
  modelNote: 'Use a real bus timetable: pupils compute the average speed between two stops and compare it with the road speed limit, which is a genuinely interesting comparison.',
  interactive: {
    type: 'quiz',
    title: 'Which one is wanted?',
    hint: 'Convert the time first, then use ' + m('s = vt') + '.',
    items: [
      { q: m('65') + ' km/h for ' + m('4') + ' h:', a: [m('16.25') + ' km', m('260') + ' km', m('69') + ' km', m('260') + ' km/h'], c: 1, why: m('vt') + '.' },
      { q: m('50') + ' km/h for ' + m('2 h 30 min') + ':', a: [m('100'), m('125'), m('150'), m('250')], c: 1, why: m('2.5') + ' h.' },
      { q: m('12') + ' km/h for ' + m('20') + ' min:', a: [m('240'), m('4'), m('0.6'), m('36')], c: 1, why: m(f('1', '3')) + ' h.' },
      { q: m('4') + ' km in ' + m('20') + ' min:', a: [m('0.2') + ' km/h', m('12') + ' km/h', m('80') + ' km/h', m('4') + ' km/h'], c: 1, why: 'Time in hours.' },
      { q: m('150') + ' km at ' + m('60') + ' km/h takes:', a: [m('2.5') + ' h', m('90') + ' h', m('2.3') + ' h', m('9000') + ' h'], c: 0, why: m(f('s', 'v')) + '.' },
      { q: m('1.4') + ' h in hours and minutes:', a: [m('1 h 40 min'), m('1 h 24 min'), m('1 h 4 min'), m('14 min')], c: 1, why: m('0.4 · 60') + '.' },
      { q: m('7:20') + ' plus ' + m('1 h 50 min') + ':', a: [m('8:70'), m('9:10'), m('8:10'), m('9:70')], c: 1, why: 'Times carry at ' + m('60') + '.' },
      { q: m('7') + ' km from ' + m('9:15') + ' to ' + m('11:00') + ':', a: [m('4') + ' km/h', m('7') + ' km/h', m('1.75') + ' km/h', m('12.25') + ' km/h'], c: 0, why: m('7 ÷ 1.75') + '.' }
    ]
  },
  quiz: [
    { q: 'To find the distance you:', a: ['divide', 'multiply', 'subtract', 'add'], c: 1, why: m('s = vt') + '.' },
    { q: 'To find the time you:', a: [m('s · v'), m('s ÷ v'), m('v ÷ s'), m('s + v')], c: 1, why: 'Distance over speed.' },
    { q: m('20') + ' minutes in hours is:', a: [m('0.2'), m(f('1', '3')), m('0.5'), m('2')], c: 1, why: m(f('20', '60')) + '.' },
    { q: m('0.25') + ' h in minutes is:', a: [m('25'), m('15'), m('20'), m('45')], c: 1, why: m('0.25 · 60') + '.' },
    { q: m('90') + ' km at ' + m('80') + ' km/h takes:', a: [m('1.125') + ' h', m('1.9') + ' h', m('0.9') + ' h', m('7200') + ' h'], c: 0, why: m(f('90', '80')) + '.' },
    { q: 'A bus leaving at ' + m('8:00') + ' and taking ' + m('2 h 30 min') + ' arrives at:', a: [m('10:00'), m('10:30'), m('10:50'), m('11:30')], c: 1, why: 'Add the times.' }
  ],
  practice: {
    easy: [
      [m('65') + ' km/h for ' + m('4') + ' h', m('260 km')],
      [m('50') + ' km/h for ' + m('2.5') + ' h', m('125 km')],
      [m('15') + ' m/s for ' + m('40') + ' s', m('600 m')],
      [m('260') + ' km in ' + m('4') + ' h', m('65 km/h')],
      [m('125') + ' km in ' + m('2.5') + ' h', m('50 km/h')],
      [m('260') + ' km at ' + m('65') + ' km/h', m('4 h')],
      [m('150') + ' km at ' + m('60') + ' km/h', m('2.5 h')]
    ],
    med: [
      [m('12') + ' km/h for ' + m('20') + ' min', m('4 km')],
      [m('4') + ' km in ' + m('20') + ' min', m('12 km/h')],
      [m('7') + ' km at ' + m('5') + ' km/h', m('1 h 24 min')],
      [m('90') + ' km at ' + m('80') + ' km/h', m('1 h 7.5 min')],
      ['A bus leaves ' + m('8:00') + ', ' + m('150') + ' km at ' + m('60') + ' km/h: arrival', m('10:30')],
      [m('7:20') + ' plus ' + m('1 h 50 min'), m('9:10')],
      [m('7') + ' km from ' + m('9:15') + ' to ' + m('11:00'), m('4 km/h')]
    ],
    hard: [
      ['A train leaves ' + m('6:45') + ' and takes ' + m('3 h 40 min') + ': arrival', m('10:25')],
      ['A journey of ' + m('340') + ' km at ' + m('85') + ' km/h', m('4 h')],
      ['A journey of ' + m('200') + ' km taking ' + m('2 h 40 min'), m('75 km/h')],
      ['How far in ' + m('1 h 45 min') + ' at ' + m('60') + ' km/h?', m('105 km')],
      ['A car covering ' + m('45') + ' km in ' + m('30') + ' min', m('90 km/h')],
      ['A walk of ' + m('11') + ' km at ' + m('4') + ' km/h', m('2 h 45 min')],
      ['Why is ' + m('1.4') + ' h not ' + m('1') + ' h ' + m('40') + ' min?', 'The decimal part is ' + m('0.4') + ' of an hour, which is ' + m('24') + ' minutes']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Convert to hours before dividing, and back to minutes at the end.',
  homework: [
    'A car travels ' + m('3 h 15 min') + ' at ' + m('80') + ' km/h. Find the distance.',
    'A journey of ' + m('96') + ' km takes ' + m('1 h 20 min') + '. Find the speed.',
    'How long does ' + m('220') + ' km take at ' + m('55') + ' km/h?',
    'A bus leaves at ' + m('7:40') + ' and takes ' + m('2 h 35 min') + '. When does it arrive?',
    'A walker covers ' + m('9') + ' km at ' + m('4') + ' km/h. Give the time in hours and minutes.'
  ]
});

/* ============================== 59 ============================== */
G6_MAT.push({
  id: 'g6-59', stream: 'mat', grade: 6, quarter: 3, lessons: '123–125', hours: 3,
  title: 'Word problems on motion with two speeds',
  subtitle: 'A journey in two parts, and the current or wind that changes the speed.',
  uz: 'Matematika 6, §26', uzPage: 'pp. 359–368',
  cam: 'S7 12 rates', camPage: 'Stage 7, pp. 122–126', wb: 'Exercise 12.7',
  objectives: [
    'Handle a journey made in two stages at different speeds.',
    'Use downstream and upstream speeds.',
    'Set out the working in a table.',
    'Check each stage separately as well as the whole.'
  ],
  terms: [
    ['Stage of a journey', 'Yo‘l bosqichi', 'Участок пути'],
    ['Downstream', 'Oqim bo‘ylab', 'По течению'],
    ['Upstream', 'Oqimga qarshi', 'Против течения'],
    ['Current', 'Oqim', 'Течение'],
    ['Still water', 'Turg‘un suv', 'Стоячая вода'],
    ['Total distance', 'Umumiy masofa', 'Общее расстояние'],
    ['Total time', 'Umumiy vaqt', 'Общее время'],
    ['Table of working', 'Jadval', 'Таблица']
  ],
  timing: [[25, 'Two stages'], [30, 'Setting out a table'], [35, 'Downstream and upstream'], [25, 'Harder problems'], [5, 'Homework']],
  sections: [
    {
      h: 'Two stages',
      html: `<p>Work each stage separately, then add the distances and add the times. Never add the
      speeds.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Stage</th><th>Speed</th><th>Time</th><th>Distance</th></tr></thead>
      <tbody>
        <tr><td>first</td><td class="m">60 km/h</td><td class="m">2 h</td><td class="m">120 km</td></tr>
        <tr><td>second</td><td class="m">80 km/h</td><td class="m">3 h</td><td class="m">240 km</td></tr>
        <tr><td>total</td><td>—</td><td class="m">5 h</td><td class="m">360 km</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Speeds are never added</span>
      The two stages above do not make a journey at ${m('140')} km/h. Distances add, times add; a speed is
      a ratio between them and has to be worked out at the end.</div>`
    },
    {
      h: 'Setting out a table',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Table</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>${m('2')} h at ${m('60')} then ${m('3')} h at ${m('80')}</td><td class="m">120 + 240</td><td class="m">360 km</td></tr>
        <tr><td>${m('90')} km at ${m('45')} then ${m('60')} km at ${m('60')}</td><td class="m">2 + 1</td><td class="m">3 h</td></tr>
        <tr><td>${m('1.5')} h at ${m('50')} then ${m('30')} min at ${m('70')}</td><td class="m">75 + 35</td><td class="m">110 km</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Three columns, one row per stage</div>
      Speed, time, distance — with a totals row underneath. The table does the organising, and the
      arithmetic becomes obvious.</div>`
    },
    {
      h: 'Downstream and upstream',
      html: `${eq('downstream ' + m('= v + u') + '     upstream ' + m('= v − u'), true)}
      <p>with ${m('v')} the speed of the boat in still water and ${m('u')} the speed of the current.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Boat</th><th>Current</th><th>Downstream</th><th>Upstream</th></tr></thead>
      <tbody>
        <tr><td class="m">16</td><td class="m">4</td><td class="m">20</td><td class="m">12</td></tr>
        <tr><td class="m">18</td><td class="m">3</td><td class="m">21</td><td class="m">15</td></tr>
        <tr><td class="m">10</td><td class="m">2</td><td class="m">12</td><td class="m">8</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The same idea works for wind</div>
      An aeroplane with a tailwind flies at ${m('v + u')} and against it at ${m('v − u')}. The two speeds
      add and subtract exactly as with a river.</div>`
    },
    {
      h: 'Harder problems',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>a boat at ${m('16')} in still water, current ${m('4')}: ${m('60')} km downstream</td><td class="m">60 ÷ 20</td><td class="m">3 h</td></tr>
        <tr><td>the same boat coming back</td><td class="m">60 ÷ 12</td><td class="m">5 h</td></tr>
        <tr><td>the whole trip</td><td class="m">3 + 5</td><td class="m">8 h</td></tr>
        <tr><td>a boat covering ${m('20')} km down in ${m('1')} h and ${m('12')} km up in ${m('1')} h</td><td class="m">(20 + 12) ÷ 2</td><td>boat ${m('16')}, current ${m('4')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Half the sum and half the difference</div>
      Given the two speeds, the boat's own speed is their average and the current is half their difference.
      Grade 7 will write that as a system of two equations.</div>`
    }
  ],
  examples: [
    {
      q: 'A car drives ' + m('2') + ' hours at ' + m('60') + ' km/h and then ' + m('3') + ' hours at ' + m('80') + ' km/h. Find the total distance.',
      steps: [
        ['First stage: ' + m('120') + ' km.', ''],
        ['Second stage: ' + m('240') + ' km.', ''],
        [m('120 + 240 = 360') + ' km.', 'The speeds are not added.']
      ],
      ans: m('360 km')
    },
    {
      q: 'A boat travels at ' + m('16') + ' km/h in still water. The current is ' + m('4') + ' km/h. How long to go ' + m('60') + ' km downstream and back?',
      steps: [
        ['Downstream: ' + m('20') + ' km/h, so ' + m('3') + ' h.', ''],
        ['Upstream: ' + m('12') + ' km/h, so ' + m('5') + ' h.', ''],
        [m('3 + 5 = 8') + ' h.', 'Not ' + m('60 ÷ 16') + ' doubled.']
      ],
      ans: m('8') + ' hours'
    },
    {
      q: 'A boat covers ' + m('20') + ' km downstream and ' + m('12') + ' km upstream, each in one hour. Find the speed of the boat and of the current.',
      steps: [
        ['Downstream speed ' + m('20') + ', upstream ' + m('12') + '.', ''],
        ['Boat: ' + m('(20 + 12) ÷ 2 = 16') + ' km/h.', ''],
        ['Current: ' + m('(20 − 12) ÷ 2 = 4') + ' km/h.', 'Check: ' + m('16 + 4 = 20') + ' ✓']
      ],
      ans: 'Boat ' + m('16') + ', current ' + m('4')
    }
  ],
  modelNote: 'Draw the table on the board and fill it in with the class before any arithmetic; the organisation is what makes these problems easy.',
  interactive: {
    type: 'quiz',
    title: 'Two stages, two speeds',
    hint: 'Add distances and times, never speeds.',
    items: [
      { q: m('2') + ' h at ' + m('60') + ' then ' + m('3') + ' h at ' + m('80') + ': the distance is:', a: [m('140'), m('360'), m('280'), m('700')], c: 1, why: m('120 + 240') + '.' },
      { q: 'The total time is:', a: [m('5') + ' h', m('6') + ' h', m('2.5') + ' h', m('140') + ' h'], c: 0, why: 'Add the times.' },
      { q: 'Adding the two speeds gives:', a: ['the average speed', 'nothing useful', 'the total', 'the distance'], c: 1, why: 'Speeds do not add.' },
      { q: 'A boat at ' + m('16') + ' with a ' + m('4') + ' current goes downstream at:', a: [m('12'), m('16'), m('20'), m('64')], c: 2, why: m('v + u') + '.' },
      { q: 'And upstream at:', a: [m('12'), m('16'), m('20'), m('4')], c: 0, why: m('v − u') + '.' },
      { q: m('60') + ' km downstream at ' + m('20') + ' takes:', a: [m('3') + ' h', m('5') + ' h', m('4') + ' h', m('12') + ' h'], c: 0, why: m(f('60', '20')) + '.' },
      { q: 'And back upstream:', a: [m('3') + ' h', m('5') + ' h', m('4') + ' h', m('15') + ' h'], c: 1, why: m(f('60', '12')) + '.' },
      { q: 'Down ' + m('20') + ', up ' + m('12') + ': the current is:', a: [m('4'), m('8'), m('16'), m('32')], c: 0, why: 'Half the difference.' }
    ]
  },
  quiz: [
    { q: 'In a two-stage journey you add:', a: ['the speeds', 'the distances and the times', 'the speeds and times', 'nothing'], c: 1, why: 'Speeds are ratios.' },
    { q: 'Downstream speed is:', a: [m('v − u'), m('v + u'), m('vu'), m('v')], c: 1, why: 'The current helps.' },
    { q: 'Upstream speed is:', a: [m('v − u'), m('v + u'), m(f('v', 'u')), m('u')], c: 0, why: 'The current hinders.' },
    { q: 'A boat at ' + m('18') + ' with a ' + m('3') + ' current goes upstream at:', a: [m('15'), m('21'), m('18'), m('6')], c: 0, why: m('18 − 3') + '.' },
    { q: 'Given both speeds, the boat’s own speed is:', a: ['their sum', 'their average', 'their difference', 'the larger'], c: 1, why: 'Half the sum.' },
    { q: 'And the current is:', a: ['their average', 'half their difference', 'their difference', 'the smaller'], c: 1, why: 'Half the gap.' }
  ],
  practice: {
    easy: [
      [m('2') + ' h at ' + m('60') + ' then ' + m('3') + ' h at ' + m('80') + ': the distance', m('360 km')],
      ['And the total time', m('5 h')],
      ['A boat at ' + m('16') + ', current ' + m('4') + ': downstream', m('20 km/h')],
      ['And upstream', m('12 km/h')],
      ['A boat at ' + m('18') + ', current ' + m('3') + ': downstream', m('21 km/h')],
      ['And upstream', m('15 km/h')],
      [m('60') + ' km at ' + m('20') + ' km/h', m('3 h')]
    ],
    med: [
      [m('90') + ' km at ' + m('45') + ' then ' + m('60') + ' km at ' + m('60') + ': the time', m('3 h')],
      [m('1.5') + ' h at ' + m('50') + ' then ' + m('30') + ' min at ' + m('70'), m('110 km')],
      ['A boat, ' + m('60') + ' km down at ' + m('20') + ' and back at ' + m('12'), m('8 h')],
      ['Down ' + m('20') + ', up ' + m('12') + ': the boat', m('16 km/h')],
      ['And the current', m('4 km/h')],
      ['Down ' + m('24') + ', up ' + m('16') + ': the boat and current', m('20') + ' and ' + m('4')],
      ['A plane at ' + m('500') + ' with a ' + m('50') + ' tailwind', m('550 km/h')]
    ],
    hard: [
      ['A boat at ' + m('12') + ' in still water, current ' + m('3') + ': ' + m('45') + ' km each way', m('8 h')],
      ['A car does ' + m('120') + ' km at ' + m('60') + ' and ' + m('120') + ' km at ' + m('40') + ': the total time', m('5 h')],
      ['A plane flies ' + m('1 800') + ' km out at ' + m('600') + ' and back at ' + m('450'), m('7 h')],
      ['A boat takes ' + m('2') + ' h down and ' + m('3') + ' h up for the same ' + m('36') + ' km', 'Boat ' + m('15') + ', current ' + m('3')],
      ['A journey of ' + m('300') + ' km, half at ' + m('50') + ' and half at ' + m('75'), m('5 h')],
      ['Why can the two speeds not be added?', 'A speed is a ratio, not an amount'],
      ['A boat’s downstream speed is twice its upstream speed and the current is ' + m('3') + ': the boat', m('9 km/h')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw the three-column table before writing any arithmetic.',
  homework: [
    'A car drives ' + m('3') + ' h at ' + m('70') + ' km/h then ' + m('2') + ' h at ' + m('90') + '. Find the distance and the total time.',
    'A boat travels at ' + m('14') + ' km/h in still water with a current of ' + m('2') + '. Find its speed each way.',
    'How long does that boat take to go ' + m('48') + ' km downstream and back?',
    'A boat covers ' + m('30') + ' km downstream in ' + m('1.5') + ' h and ' + m('30') + ' km upstream in ' + m('3') + ' h. Find the boat and the current.',
    'A journey of ' + m('180') + ' km is half at ' + m('45') + ' km/h and half at ' + m('90') + '. Find the total time.'
  ]
});

/* ============================== 60 ============================== */
G6_MAT.push({
  id: 'g6-60', stream: 'mat', grade: 6, quarter: 3, lessons: '126–128', hours: 3,
  title: 'Average speed',
  subtitle: 'Total distance over total time — and why it is not the average of the two speeds.',
  uz: 'Matematika 6, §27', uzPage: 'pp. 369–378',
  cam: 'S7 12 rates', camPage: 'Stage 7, pp. 122–126', wb: 'Exercise 12.8',
  objectives: [
    'Define average speed as total distance over total time.',
    'Compute it for a journey in stages.',
    'Explain why the mean of the speeds is usually wrong.',
    'Include stops in the total time when the question requires it.'
  ],
  terms: [
    ['Average speed', 'O‘rtacha tezlik', 'Средняя скорость'],
    ['Total distance', 'Umumiy masofa', 'Общее расстояние'],
    ['Total time', 'Umumiy vaqt', 'Общее время'],
    ['Stop', 'To‘xtash', 'Остановка'],
    ['Stage', 'Bosqich', 'Участок'],
    ['Mean of speeds', 'Tezliklarning o‘rtachasi', 'Среднее скоростей'],
    ['Weighted', 'Vaznli', 'Взвешенный'],
    ['Journey', 'Sayohat', 'Поездка']
  ],
  timing: [[25, 'The definition'], [30, 'Journeys in stages'], [35, 'Why not the mean of the speeds'], [25, 'Stops'], [5, 'Homework']],
  sections: [
    {
      h: 'The definition',
      html: `${eq('average speed ' + m('= ' + f('total distance', 'total time')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Journey</th><th>Total distance</th><th>Total time</th><th>Average speed</th></tr></thead>
      <tbody>
        <tr><td>${m('2')} h at ${m('60')}, ${m('3')} h at ${m('80')}</td><td class="m">360 km</td><td class="m">5 h</td><td class="m">72 km/h</td></tr>
        <tr><td>${m('120')} km at ${m('60')}, ${m('120')} km at ${m('40')}</td><td class="m">240 km</td><td class="m">5 h</td><td class="m">48 km/h</td></tr>
        <tr><td>${m('90')} km at ${m('45')}, ${m('60')} km at ${m('60')}</td><td class="m">150 km</td><td class="m">3 h</td><td class="m">50 km/h</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">One division, at the very end</div>
      Find the whole distance, find the whole time, divide once. Every average-speed problem is that
      sentence.</div>`
    },
    {
      h: 'Journeys in stages',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Stage</th><th>Speed</th><th>Time</th><th>Distance</th></tr></thead>
      <tbody>
        <tr><td>first</td><td class="m">45 km/h</td><td class="m">2 h</td><td class="m">90 km</td></tr>
        <tr><td>second</td><td class="m">60 km/h</td><td class="m">1 h</td><td class="m">60 km</td></tr>
        <tr><td>total</td><td class="m">50 km/h</td><td class="m">3 h</td><td class="m">150 km</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The average lies between the two speeds</div>
      Here between ${m('45')} and ${m('60')}, and nearer the one that took longer. If your answer falls
      outside the two speeds, something has gone wrong.</div>`
    },
    {
      h: 'Why not the mean of the speeds',
      html: `<p>A car goes ${m('120')} km at ${m('60')} km/h and comes back at ${m('40')} km/h. The mean of
      the speeds is ${m('50')}; the average speed is not.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Stage</th><th>Distance</th><th>Speed</th><th>Time</th></tr></thead>
      <tbody>
        <tr><td>out</td><td class="m">120</td><td class="m">60</td><td class="m">2 h</td></tr>
        <tr><td>back</td><td class="m">120</td><td class="m">40</td><td class="m">3 h</td></tr>
        <tr><td>total</td><td class="m">240</td><td>—</td><td class="m">5 h</td></tr>
      </tbody></table></div>
      ${eq('average ' + m('= ' + f('240', '5') + ' = 48') + ' km/h, not ' + m('50'), true)}
      <div class="warn"><span class="wl">More time is spent at the slower speed</span>
      That is why the average is pulled below the mean. Only when the two <i>times</i> are equal does the
      mean of the speeds happen to be right.</div>`
    },
    {
      h: 'Stops',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>Time used</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>${m('150')} km driven in ${m('2')} h with a ${m('30')} min stop: average driving speed</td><td class="m">2 h</td><td class="m">75 km/h</td></tr>
        <tr><td>the same journey: average speed for the whole trip</td><td class="m">2.5 h</td><td class="m">60 km/h</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Read whether the stop is included</span>
      “Average speed for the journey” includes the stop; “average driving speed” does not. The same numbers
      give ${m('60')} or ${m('75')} depending on which was asked.</div>`
    }
  ],
  examples: [
    {
      q: 'A car drives ' + m('2') + ' h at ' + m('60') + ' km/h and ' + m('3') + ' h at ' + m('80') + '. Find the average speed.',
      steps: [
        ['Distance: ' + m('120 + 240 = 360') + ' km.', ''],
        ['Time: ' + m('5') + ' h.', ''],
        [m('360 ÷ 5 = 72') + ' km/h.', 'Between ' + m('60') + ' and ' + m('80') + ' ✓']
      ],
      ans: m('72 km/h')
    },
    {
      q: 'A car goes ' + m('120') + ' km at ' + m('60') + ' km/h and returns at ' + m('40') + '. Find the average speed for the whole trip.',
      steps: [
        ['Out: ' + m('2') + ' h. Back: ' + m('3') + ' h.', ''],
        ['Total: ' + m('240') + ' km in ' + m('5') + ' h.', ''],
        [m('48') + ' km/h.', 'Not ' + m('50') + ' — more time at the slower speed.']
      ],
      ans: m('48 km/h')
    },
    {
      q: 'A bus covers ' + m('150') + ' km in ' + m('2') + ' hours of driving, with a ' + m('30') + '-minute stop. Find both averages.',
      steps: [
        ['Driving: ' + m('150 ÷ 2 = 75') + ' km/h.', ''],
        ['Whole trip: ' + m('2.5') + ' h.', ''],
        [m('150 ÷ 2.5 = 60') + ' km/h.', '']
      ],
      ans: m('75') + ' and ' + m('60') + ' km/h'
    }
  ],
  modelNote: 'Ask for the average of 60 and 40 first; almost everyone says 50, and the table that follows is then genuinely surprising.',
  interactive: {
    type: 'quiz',
    title: 'Total over total',
    hint: 'Never average the speeds themselves.',
    items: [
      { q: 'Average speed is:', a: ['the mean of the speeds', 'total distance over total time', 'the largest speed', 'the smallest'], c: 1, why: 'By definition.' },
      { q: m('2') + ' h at ' + m('60') + ' and ' + m('3') + ' h at ' + m('80') + ' gives:', a: [m('70'), m('72'), m('140'), m('68')], c: 1, why: m('360 ÷ 5') + '.' },
      { q: m('120') + ' km at ' + m('60') + ' and back at ' + m('40') + ' gives:', a: [m('50'), m('48'), m('52'), m('100')], c: 1, why: m('240 ÷ 5') + '.' },
      { q: 'The answer is below ' + m('50') + ' because:', a: ['the distances differ', 'more time is spent slower', 'of rounding', 'of the stop'], c: 1, why: 'Time weights the average.' },
      { q: m('90') + ' km at ' + m('45') + ' and ' + m('60') + ' km at ' + m('60') + ' gives:', a: [m('50'), m('52.5'), m('55'), m('105')], c: 0, why: m('150 ÷ 3') + '.' },
      { q: 'An average speed must lie:', a: ['above both speeds', 'between them', 'below both', 'anywhere'], c: 1, why: 'A check on the answer.' },
      { q: m('150') + ' km in ' + m('2') + ' h driving plus a ' + m('30') + ' min stop, whole trip:', a: [m('75'), m('60'), m('50'), m('120')], c: 1, why: m('150 ÷ 2.5') + '.' },
      { q: 'The mean of the speeds is right only when:', a: ['the distances are equal', 'the times are equal', 'always', 'never'], c: 1, why: 'Equal weights.' }
    ]
  },
  quiz: [
    { q: 'Average speed uses:', a: ['the mean of the speeds', 'total distance and total time', 'the first speed', 'the last speed'], c: 1, why: 'One division at the end.' },
    { q: m('240') + ' km in ' + m('5') + ' h is:', a: [m('48'), m('50'), m('1200'), m('4.8')], c: 0, why: 'Divide.' },
    { q: 'The average of a journey out at ' + m('60') + ' and back at ' + m('40') + ' is:', a: ['exactly ' + m('50'), 'less than ' + m('50'), 'more than ' + m('50'), m('100')], c: 1, why: 'More time slower.' },
    { q: 'An answer of ' + m('90') + ' for stages at ' + m('45') + ' and ' + m('60') + ' is:', a: ['possible', 'impossible', 'exact', 'the mean'], c: 1, why: 'It must lie between them.' },
    { q: '“Average driving speed” excludes:', a: ['the distance', 'the stops', 'the return', 'nothing'], c: 1, why: 'Only moving time.' },
    { q: 'Which weights the average?', a: ['the distances', 'the times', 'the speeds', 'nothing'], c: 1, why: 'Time spent at each speed.' }
  ],
  practice: {
    easy: [
      [m('360') + ' km in ' + m('5') + ' h', m('72 km/h')],
      [m('240') + ' km in ' + m('5') + ' h', m('48 km/h')],
      [m('150') + ' km in ' + m('3') + ' h', m('50 km/h')],
      [m('150') + ' km in ' + m('2') + ' h', m('75 km/h')],
      [m('150') + ' km in ' + m('2.5') + ' h', m('60 km/h')],
      ['Average speed is total distance over', 'total time'],
      ['An average must lie', 'between the two speeds']
    ],
    med: [
      [m('2') + ' h at ' + m('60') + ' and ' + m('3') + ' h at ' + m('80'), m('72 km/h')],
      [m('120') + ' km at ' + m('60') + ' and back at ' + m('40'), m('48 km/h')],
      [m('90') + ' km at ' + m('45') + ' and ' + m('60') + ' km at ' + m('60'), m('50 km/h')],
      [m('1.5') + ' h at ' + m('50') + ' and ' + m('0.5') + ' h at ' + m('70'), m('55 km/h')],
      ['Why is the return trip average below ' + m('50') + '?', 'More time is spent at the slower speed'],
      ['With a ' + m('30') + ' min stop in a ' + m('2') + ' h drive of ' + m('150') + ' km', m('60 km/h')],
      ['Without the stop', m('75 km/h')]
    ],
    hard: [
      ['Out at ' + m('80') + ' and back at ' + m('20') + ' over ' + m('80') + ' km each way', m('32 km/h')],
      ['Out at ' + m('30') + ' and back at ' + m('30'), m('30 km/h')],
      [m('100') + ' km at ' + m('50') + ' then ' + m('100') + ' km at ' + m('100'), m('66.7 km/h')],
      ['A journey of ' + m('3') + ' equal parts at ' + m('30, 60') + ' and ' + m('60'), m('45 km/h')],
      ['When does the mean of two speeds give the right answer?', 'When the two times are equal'],
      ['A walk of ' + m('2') + ' km at ' + m('4') + ' km/h and ' + m('2') + ' km at ' + m('6'), m('4.8 km/h')],
      ['Is the average speed ever above both speeds?', 'No']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Find the total distance and the total time before dividing once.',
  homework: [
    'A car drives ' + m('3') + ' h at ' + m('50') + ' km/h and ' + m('2') + ' h at ' + m('75') + '. Find the average speed.',
    'A journey of ' + m('60') + ' km out at ' + m('30') + ' km/h and back at ' + m('60') + '. Find the average speed.',
    'Explain in one sentence why the answer to task 2 is not ' + m('45') + '.',
    'A bus covers ' + m('180') + ' km in ' + m('3') + ' hours of driving with a ' + m('45') + '-minute stop. Find both averages.',
    'A walk of ' + m('3') + ' km at ' + m('6') + ' km/h and ' + m('3') + ' km at ' + m('3') + '. Find the average speed.'
  ]
});

/* ============================== 61 ============================== */
G6_MAT.push({
  id: 'g6-61', stream: 'mat', grade: 6, quarter: 3, lessons: '129–131', hours: 3,
  title: 'Word problems on the motion of two bodies',
  subtitle: 'Towards each other, in the same direction, and the closing speed that decides both.',
  uz: 'Matematika 6, §28', uzPage: 'pp. 379–388',
  cam: 'S7 12 rates', camPage: 'Stage 7, pp. 122–126', wb: 'Exercise 12.9',
  objectives: [
    'Use the closing speed for two bodies approaching.',
    'Use the difference of speeds for one overtaking another.',
    'Find the time and place of meeting.',
    'Draw a diagram before writing any arithmetic.'
  ],
  terms: [
    ['To approach', 'Yaqinlashmoq', 'Сближаться'],
    ['To meet', 'Uchrashmoq', 'Встретиться'],
    ['Closing speed', 'Yaqinlashish tezligi', 'Скорость сближения'],
    ['To overtake', 'Quvib yetmoq', 'Догонять'],
    ['Same direction', 'Bir yo‘nalishda', 'В одном направлении'],
    ['Opposite directions', 'Qarama-qarshi', 'Навстречу'],
    ['Meeting point', 'Uchrashuv nuqtasi', 'Точка встречи'],
    ['Head start', 'Oldindan boshlash', 'Фора']
  ],
  timing: [[25, 'Towards each other'], [30, 'The place of meeting'], [35, 'Overtaking'], [25, 'Head starts'], [5, 'Homework']],
  sections: [
    {
      h: 'Towards each other',
      html: `<p>Two bodies approaching close the gap at the <b>sum</b> of their speeds.</p>
      ${eq('time to meet ' + m('= ' + f('distance apart', 'v₁ + v₂')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Apart</th><th>Speeds</th><th>Closing speed</th><th>Time to meet</th></tr></thead>
      <tbody>
        <tr><td class="m">300 km</td><td>${m('60')} and ${m('40')}</td><td class="m">100 km/h</td><td class="m">3 h</td></tr>
        <tr><td class="m">240 km</td><td>${m('70')} and ${m('50')}</td><td class="m">120 km/h</td><td class="m">2 h</td></tr>
        <tr><td class="m">12 km</td><td>${m('5')} and ${m('3')}</td><td class="m">8 km/h</td><td class="m">1.5 h</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Here the speeds really do add</div>
      Not because speeds can be added in general, but because each hour the gap shrinks by both distances
      at once. The sum is the speed of the <i>gap</i>, not of either body.</div>`
    },
    {
      h: 'The place of meeting',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Step</th><th>For ${m('300')} km apart at ${m('60')} and ${m('40')}</th></tr></thead>
      <tbody>
        <tr><td>closing speed</td><td class="m">100 km/h</td></tr>
        <tr><td>time to meet</td><td class="m">3 h</td></tr>
        <tr><td>first travels</td><td class="m">180 km</td></tr>
        <tr><td>second travels</td><td class="m">120 km</td></tr>
        <tr><td>check</td><td class="m">180 + 120 = 300 ✓</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The faster one covers more of the gap</div>
      In the same time, distances are in the ratio of the speeds — here ${m('60 : 40 = 3 : 2')}, so the
      ${m('300')} km splits as ${m('180')} and ${m('120')}.</div>`
    },
    {
      h: 'Overtaking',
      html: `<p>Two bodies going the same way close the gap at the <b>difference</b> of their speeds.</p>
      ${eq('time to catch ' + m('= ' + f('head start', 'v₁ − v₂')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Head start</th><th>Speeds</th><th>Difference</th><th>Time to catch</th></tr></thead>
      <tbody>
        <tr><td class="m">30 km</td><td>${m('80')} and ${m('60')}</td><td class="m">20 km/h</td><td class="m">1.5 h</td></tr>
        <tr><td class="m">12 km</td><td>${m('15')} and ${m('12')}</td><td class="m">3 km/h</td><td class="m">4 h</td></tr>
        <tr><td class="m">100 m</td><td>${m('8')} and ${m('6')} m/s</td><td class="m">2 m/s</td><td class="m">50 s</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">If the speeds are equal, the gap never closes</span>
      A difference of zero means no catching up, however long the chase. The formula says so by dividing
      by zero, which is the mathematics agreeing with common sense.</div>`
    },
    {
      h: 'Head starts',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Head start</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>a cyclist at ${m('12')} leaves ${m('1')} h before a car at ${m('60')}</td><td class="m">12 km</td><td>caught after ${m('0.25')} h</td></tr>
        <tr><td>a walker at ${m('5')} leaves ${m('2')} h before a cyclist at ${m('15')}</td><td class="m">10 km</td><td>caught after ${m('1')} h</td></tr>
        <tr><td>a bus at ${m('60')} leaves ${m('30')} min before a car at ${m('80')}</td><td class="m">30 km</td><td>caught after ${m('1.5')} h</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Turn the time head start into a distance head start</div>
      An hour's start at ${m('12')} km/h is a ${m('12')} km gap. Once the head start is a distance, the
      chase formula applies directly.</div>`
    }
  ],
  examples: [
    {
      q: 'Two cars ' + m('300') + ' km apart drive towards each other at ' + m('60') + ' and ' + m('40') + ' km/h. When do they meet, and where?',
      steps: [
        ['Closing speed: ' + m('100') + ' km/h.', ''],
        ['Time: ' + m('300 ÷ 100 = 3') + ' h.', ''],
        ['First: ' + m('180') + ' km; second: ' + m('120') + ' km.', 'Check: they total ' + m('300') + ' ✓']
      ],
      ans: 'After ' + m('3') + ' h, ' + m('180') + ' km from the first'
    },
    {
      q: 'A bus leaves at ' + m('60') + ' km/h. Half an hour later a car follows at ' + m('80') + '. When does it catch up?',
      steps: [
        ['Head start: ' + m('60 · 0.5 = 30') + ' km.', ''],
        ['Difference of speeds: ' + m('20') + ' km/h.', ''],
        [m('30 ÷ 20 = 1.5') + ' h after the car starts.', '']
      ],
      ans: 'After ' + m('1.5') + ' hours'
    },
    {
      q: 'Two walkers ' + m('12') + ' km apart walk towards each other at ' + m('5') + ' and ' + m('3') + ' km/h. When do they meet?',
      steps: [
        ['Closing speed: ' + m('8') + ' km/h.', ''],
        [m('12 ÷ 8 = 1.5') + ' h.', ''],
        ['They meet ' + m('7.5') + ' km from the first.', m('5 · 1.5') + '.']
      ],
      ans: 'After ' + m('1.5') + ' hours'
    }
  ],
  modelNote: 'Two pupils walking towards each other along the corridor, timed, is a five-minute experiment that makes the closing speed obvious.',
  interactive: {
    type: 'quiz',
    title: 'Sum or difference?',
    hint: 'Towards each other adds; same direction subtracts.',
    items: [
      { q: 'Two bodies approaching close the gap at:', a: ['the sum of the speeds', 'the difference', 'the average', 'the faster speed'], c: 0, why: 'Both shrink it.' },
      { q: 'One overtaking another closes at:', a: ['the sum', 'the difference', 'the average', 'the slower speed'], c: 1, why: 'Only the extra counts.' },
      { q: m('300') + ' km apart at ' + m('60') + ' and ' + m('40') + ': they meet after:', a: [m('3') + ' h', m('5') + ' h', m('7.5') + ' h', m('30') + ' h'], c: 0, why: m('300 ÷ 100') + '.' },
      { q: 'The first car has then travelled:', a: [m('120') + ' km', m('150') + ' km', m('180') + ' km', m('300') + ' km'], c: 2, why: m('60 · 3') + '.' },
      { q: 'A ' + m('30') + ' km head start with speeds ' + m('80') + ' and ' + m('60') + ': caught after:', a: [m('0.375') + ' h', m('1.5') + ' h', m('2') + ' h', m('3') + ' h'], c: 1, why: m('30 ÷ 20') + '.' },
      { q: 'A bus at ' + m('60') + ' leaving ' + m('30') + ' min early has a head start of:', a: [m('30') + ' km', m('60') + ' km', m('0.5') + ' km', m('120') + ' km'], c: 0, why: m('60 · 0.5') + '.' },
      { q: 'If both speeds are equal, the chaser:', a: ['catches up slowly', 'never catches up', 'catches up at once', 'falls behind'], c: 1, why: 'The gap is fixed.' },
      { q: 'Two walkers ' + m('12') + ' km apart at ' + m('5') + ' and ' + m('3') + ' meet after:', a: [m('1.5') + ' h', m('2') + ' h', m('4') + ' h', m('6') + ' h'], c: 0, why: m('12 ÷ 8') + '.' }
    ]
  },
  quiz: [
    { q: 'Towards each other, the closing speed is:', a: [m('v₁ + v₂'), m('v₁ − v₂'), m('v₁ v₂'), m('v₁')], c: 0, why: 'Both close the gap.' },
    { q: 'In the same direction it is:', a: [m('v₁ + v₂'), m('v₁ − v₂'), 'the average', 'the larger'], c: 1, why: 'Only the excess.' },
    { q: m('240') + ' km apart at ' + m('70') + ' and ' + m('50') + ': the time to meet is:', a: [m('2') + ' h', m('4') + ' h', m('12') + ' h', m('1.2') + ' h'], c: 0, why: m('240 ÷ 120') + '.' },
    { q: 'The distances covered are in the ratio of:', a: ['the times', 'the speeds', 'the total', 'nothing'], c: 1, why: 'Same time each.' },
    { q: 'A ' + m('12') + ' km head start with speeds ' + m('15') + ' and ' + m('12') + ':', a: [m('0.8') + ' h', m('4') + ' h', m('1') + ' h', m('12') + ' h'], c: 1, why: m('12 ÷ 3') + '.' },
    { q: 'The first step in these problems is:', a: ['a formula', 'a diagram', 'a calculation', 'a guess'], c: 1, why: 'It shows which case it is.' }
  ],
  practice: {
    easy: [
      [m('300') + ' km apart at ' + m('60') + ' and ' + m('40') + ': the closing speed', m('100 km/h')],
      ['And the time to meet', m('3 h')],
      [m('240') + ' km apart at ' + m('70') + ' and ' + m('50'), m('2 h')],
      [m('12') + ' km apart at ' + m('5') + ' and ' + m('3'), m('1.5 h')],
      ['A ' + m('30') + ' km head start, speeds ' + m('80') + ' and ' + m('60'), m('1.5 h')],
      ['A ' + m('12') + ' km head start, speeds ' + m('15') + ' and ' + m('12'), m('4 h')],
      ['Equal speeds in the same direction', 'The gap never closes']
    ],
    med: [
      ['Where do the ' + m('300') + ' km cars meet?', m('180') + ' km from the first'],
      ['A bus at ' + m('60') + ' leaves ' + m('30') + ' min before a car at ' + m('80'), 'Caught after ' + m('1.5 h')],
      ['A walker at ' + m('5') + ' leaves ' + m('2') + ' h before a cyclist at ' + m('15'), 'Caught after ' + m('1 h')],
      ['A cyclist at ' + m('12') + ' leaves ' + m('1') + ' h before a car at ' + m('60'), 'Caught after ' + m('0.25 h')],
      ['Runners at ' + m('8') + ' and ' + m('6') + ' m/s with a ' + m('100') + ' m start', m('50 s')],
      ['Two trains ' + m('420') + ' km apart at ' + m('90') + ' and ' + m('120'), m('2 h')],
      ['Where do they meet?', m('180') + ' km from the first']
    ],
    hard: [
      ['Two cars ' + m('450') + ' km apart meet after ' + m('3') + ' h; one does ' + m('80') + ': the other', m('70 km/h')],
      ['A car catches a bus ' + m('40') + ' km ahead in ' + m('2') + ' h: the difference in speeds', m('20 km/h')],
      ['Two walkers ' + m('9') + ' km apart at ' + m('4') + ' and ' + m('5') + ': where do they meet?', m('4') + ' km from the first'],
      ['A boat and a raft ' + m('24') + ' km apart moving towards each other at ' + m('10') + ' and ' + m('2'), m('2 h')],
      ['A train ' + m('200') + ' m long passing a pole at ' + m('20') + ' m/s', m('10 s')],
      ['Why does the gap close at the sum when they approach?', 'Each covers part of it in the same time'],
      ['Two cyclists start together at ' + m('12') + ' and ' + m('18') + ': the gap after ' + m('2') + ' h', m('12') + ' km']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Draw the two bodies and an arrow each before choosing sum or difference.',
  homework: [
    'Two cars ' + m('420') + ' km apart drive towards each other at ' + m('90') + ' and ' + m('120') + ' km/h. When do they meet?',
    'How far has each travelled by then?',
    'A bus at ' + m('50') + ' km/h leaves ' + m('1') + ' hour before a car at ' + m('75') + '. When does the car catch it?',
    'Two runners ' + m('120') + ' m apart run in the same direction at ' + m('7') + ' and ' + m('5') + ' m/s. When is the first caught?',
    'Explain why the closing speed is the sum in one case and the difference in the other.'
  ]
});

/* ============================== 62 ============================== */
G6_MAT.push({
  id: 'g6-62', stream: 'mat', grade: 6, quarter: 3, lessons: '132', hours: 1,
  title: 'Control work 7 — speed and motion',
  subtitle: 'The formula, its rearrangements, average speed and two-body problems.',
  uz: 'Matematika 6, Nazorat ishi 7', uzPage: 'pp. 335–388',
  cam: 'S7 12 review', camPage: 'Stage 7, pp. 122–126', wb: 'Control paper 7',
  objectives: [
    'Use ' + m('s = vt') + ' in all three directions with correct units.',
    'Find an average speed over a journey in stages.',
    'Solve a meeting or overtaking problem.',
    'Classify each lost mark and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Speed', 'Tezlik', 'Скорость'],
    ['Distance', 'Masofa', 'Расстояние'],
    ['Time', 'Vaqt', 'Время'],
    ['Average speed', 'O‘rtacha tezlik', 'Средняя скорость'],
    ['Closing speed', 'Yaqinlashish tezligi', 'Скорость сближения'],
    ['Units', 'O‘lchov birligi', 'Единицы'],
    ['Diagnosis', 'Tashxis', 'Диагностика']
  ],
  timing: [[2, 'Instructions'], [28, 'The paper'], [8, 'Answers and diagnosis'], [2, 'What comes next']],
  sections: [
    {
      h: 'The paper — 20 marks, 28 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>A car does ${m('75')} km/h for ${m('4')} h: the distance</td><td class="m">2</td><td>L117–119</td></tr>
        <tr><td>2</td><td>${m('4')} km in ${m('20')} min: the speed in km/h</td><td class="m">3</td><td>L120–122</td></tr>
        <tr><td>3</td><td>${m('7')} km at ${m('5')} km/h: the time in hours and minutes</td><td class="m">3</td><td>L120–122</td></tr>
        <tr><td>4</td><td>Convert ${m('72')} km/h to m/s</td><td class="m">2</td><td>L116</td></tr>
        <tr><td>5</td><td>${m('120')} km at ${m('60')} and back at ${m('40')}: the average speed</td><td class="m">4</td><td>L126–128</td></tr>
        <tr><td>6</td><td>Two cars ${m('300')} km apart at ${m('60')} and ${m('40')}: when and where do they meet?</td><td class="m">4</td><td>L129–131</td></tr>
        <tr><td>7</td><td>A bus at ${m('60')} leaves ${m('30')} min before a car at ${m('80')}: when is it caught?</td><td class="m">2</td><td>L129–131</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The answers</div>
      ${m('300')} km; ${m('12')} km/h; ${m('1')} h ${m('24')} min; ${m('20')} m/s; ${m('48')} km/h;
      after ${m('3')} h, ${m('180')} km from the first; after ${m('1.5')} h.</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>minutes used with km/h</td><td class="m">4 ÷ 20</td><td class="m">4 ÷ ${f('1', '3')}</td></tr>
        <tr><td>decimal hours read as minutes</td><td class="m">1 h 40 min</td><td class="m">1 h 24 min</td></tr>
        <tr><td>multiplied instead of divided</td><td class="m">72 · 3.6</td><td class="m">72 ÷ 3.6</td></tr>
        <tr><td>speeds averaged</td><td class="m">(60 + 40) ÷ 2</td><td class="m">240 ÷ 5</td></tr>
        <tr><td>closing speed subtracted for an approach</td><td class="m">60 − 40</td><td class="m">60 + 40</td></tr>
        <tr><td>head start left as a time</td><td class="m">0.5 ÷ 20</td><td class="m">30 ÷ 20</td></tr>
        <tr><td>units missing</td><td class="m">300</td><td class="m">300 km</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'What comes next',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>If you lost marks on</th><th>Revise</th></tr></thead>
      <tbody>
        <tr><td>Q1–Q3</td><td>the formula and time conversion, L116–122</td></tr>
        <tr><td>Q4</td><td>unit conversion, L116</td></tr>
        <tr><td>Q5</td><td>average speed, L126–128</td></tr>
        <tr><td>Q6–Q7</td><td>two-body problems, L129–131</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Looking forward</div>
      The rest of Quarter III is a Cambridge project, two lessons on fractions and sequences, and then the
      volume of the cuboid — where a formula again does the work.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q2: ' + m('4') + ' km in ' + m('20') + ' minutes.',
      steps: [
        [m('20') + ' min ' + m('= ' + f('1', '3')) + ' h.', 'Convert first.'],
        [m('v = 4 ÷ ' + f('1', '3') + ' = 4 · 3'), ''],
        [m('= 12') + ' km/h.', 'Reasonable for a cyclist ✓']
      ],
      ans: m('12 km/h')
    },
    {
      q: 'Model answer, Q5: ' + m('120') + ' km at ' + m('60') + ' and back at ' + m('40') + '.',
      steps: [
        ['Out: ' + m('2') + ' h. Back: ' + m('3') + ' h.', ''],
        ['Total ' + m('240') + ' km in ' + m('5') + ' h.', ''],
        [m('48') + ' km/h.', 'Not the mean of the speeds.']
      ],
      ans: m('48 km/h')
    },
    {
      q: 'Model answer, Q6: two cars ' + m('300') + ' km apart.',
      steps: [
        ['Closing speed ' + m('100') + ' km/h.', 'They approach, so add.'],
        ['Time ' + m('3') + ' h.', ''],
        ['First travels ' + m('180') + ' km, second ' + m('120') + ' km.', 'Check: ' + m('300') + ' ✓']
      ],
      ans: 'After ' + m('3') + ' h, ' + m('180') + ' km from the first'
    }
  ],
  modelNote: 'Return Q5 first and ask how many wrote 50; naming the error as “averaging the speeds” makes it memorable.',
  interactive: {
    type: 'quiz',
    title: 'The chapter in eight questions',
    hint: 'Units first, then the formula.',
    items: [
      { q: m('75') + ' km/h for ' + m('4') + ' h:', a: [m('18.75'), m('300'), m('79'), m('300') + ' km/h'], c: 1, why: m('vt') + '.' },
      { q: m('4') + ' km in ' + m('20') + ' min:', a: [m('0.2'), m('12'), m('80'), m('4')], c: 1, why: 'Time in hours.' },
      { q: m('7') + ' km at ' + m('5') + ' km/h:', a: [m('1.4') + ' h', m('1 h 40 min'), m('1 h 24 min'), m('35') + ' h'], c: 2, why: m('0.4 · 60') + '.' },
      { q: m('72') + ' km/h in m/s:', a: [m('20'), m('259'), m('26'), m('7.2')], c: 0, why: 'Divide by ' + m('3.6') + '.' },
      { q: m('120') + ' km at ' + m('60') + ' and back at ' + m('40') + ':', a: [m('50'), m('48'), m('100'), m('240')], c: 1, why: 'Total over total.' },
      { q: 'Two cars approaching close the gap at:', a: ['the sum', 'the difference', 'the average', 'the larger'], c: 0, why: 'Both close it.' },
      { q: m('300') + ' km apart at ' + m('60') + ' and ' + m('40') + ': they meet after:', a: [m('3') + ' h', m('5') + ' h', m('7.5') + ' h', m('2') + ' h'], c: 0, why: m('300 ÷ 100') + '.' },
      { q: 'A ' + m('30') + ' min head start at ' + m('60') + ' is:', a: [m('0.5') + ' km', m('30') + ' km', m('60') + ' km', m('120') + ' km'], c: 1, why: 'Turn it into a distance.' }
    ]
  },
  quiz: [
    { q: 'Q2 needs the time in:', a: ['minutes', 'hours', 'seconds', 'any unit'], c: 1, why: 'To match km/h.' },
    { q: 'Q3 answer in hours and minutes is:', a: [m('1.4') + ' h', m('1 h 40 min'), m('1 h 24 min'), m('84') + ' min only'], c: 2, why: m('0.4') + ' h is ' + m('24') + ' min.' },
    { q: 'Q4 divides by:', a: [m('3.6'), m('1000'), m('60'), m('36')], c: 0, why: 'km/h to m/s.' },
    { q: 'Q5 must not:', a: ['add the distances', 'average the speeds', 'add the times', 'divide once'], c: 1, why: 'Time weights it.' },
    { q: 'Q6 adds the speeds because:', a: ['they travel together', 'they approach', 'they are equal', 'of the units'], c: 1, why: 'The gap closes from both ends.' },
    { q: 'Q7 turns the head start into:', a: ['a time', 'a distance', 'a speed', 'nothing'], c: 1, why: m('60 · 0.5') + '.' }
  ],
  practice: {
    easy: [
      [m('75') + ' km/h for ' + m('4') + ' h', m('300 km')],
      [m('4') + ' km in ' + m('20') + ' min', m('12 km/h')],
      [m('7') + ' km at ' + m('5') + ' km/h', m('1 h 24 min')],
      [m('72') + ' km/h in m/s', m('20')],
      [m('240') + ' km in ' + m('5') + ' h', m('48 km/h')],
      ['Closing speed of ' + m('60') + ' and ' + m('40') + ' approaching', m('100 km/h')],
      ['A ' + m('30') + ' min head start at ' + m('60'), m('30 km')]
    ],
    med: [
      [m('120') + ' km at ' + m('60') + ' and back at ' + m('40'), m('48 km/h')],
      ['Two cars ' + m('300') + ' km apart at ' + m('60') + ' and ' + m('40'), 'Meet after ' + m('3 h')],
      ['Where?', m('180') + ' km from the first'],
      ['A bus at ' + m('60') + ' caught by a car at ' + m('80') + ' after a ' + m('30') + ' min start', m('1.5 h')],
      [m('54') + ' km/h in m/s', m('15')],
      [m('9') + ' km at ' + m('4') + ' km/h', m('2 h 15 min')],
      [m('150') + ' km in ' + m('2 h 30 min'), m('60 km/h')]
    ],
    hard: [
      ['A journey of ' + m('200') + ' km, half at ' + m('40') + ' and half at ' + m('60'), m('48 km/h')],
      ['Two trains ' + m('540') + ' km apart at ' + m('100') + ' and ' + m('80'), 'Meet after ' + m('3 h')],
      ['A car catches a lorry ' + m('45') + ' km ahead in ' + m('1.5') + ' h: the speed difference', m('30 km/h')],
      ['A cyclist at ' + m('15') + ' km/h for ' + m('40') + ' min then ' + m('20') + ' km/h for ' + m('30') + ' min: the average', m('17.1 km/h')],
      ['A train ' + m('180') + ' m long passing a pole at ' + m('15') + ' m/s', m('12 s')],
      ['Why is the average of ' + m('60') + ' and ' + m('40') + ' not ' + m('50') + ' here?', 'More time is spent at ' + m('40')],
      [m('12') + ' m/s in km/h', m('43.2')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite every question you lost a mark on, with its units.',
  homework: [
    'Rewrite in full every question on which you lost a mark.',
    'A car covers ' + m('294') + ' km in ' + m('3 h 30 min') + '. Find its speed.',
    'Find the average speed for ' + m('60') + ' km at ' + m('30') + ' km/h and ' + m('60') + ' km at ' + m('60') + '.',
    'Two cyclists ' + m('45') + ' km apart ride towards each other at ' + m('12') + ' and ' + m('18') + ' km/h. When do they meet?',
    'Convert ' + m('90') + ' km/h to m/s and ' + m('25') + ' m/s to km/h.'
  ]
});

/* ============================== 63 ============================== */
G6_MAT.push({
  id: 'g6-63', stream: 'mat', grade: 6, quarter: 3, lessons: '133', hours: 1,
  title: 'Think — Project 3: fraction averages',
  subtitle: 'A Cambridge project: the fraction that lies between two others, and where it always lands.',
  uz: 'Matematika 6, o‘ylab ko‘r', uzPage: 'pp. 389–391',
  cam: 'S7 Project 3', camPage: 'Stage 7, project pages', wb: 'Project sheet 3',
  objectives: [
    'Find the mean of two fractions.',
    'Investigate what happens when numerators and denominators are added instead.',
    'State a conjecture and test it.',
    'Present the investigation clearly.'
  ],
  terms: [
    ['Mean', 'O‘rta arifmetik', 'Среднее арифметическое'],
    ['Between', 'Orasida', 'Между'],
    ['Conjecture', 'Faraz', 'Гипотеза'],
    ['To test', 'Sinab ko‘rmoq', 'Проверить'],
    ['Numerator', 'Surat', 'Числитель'],
    ['Denominator', 'Maxraj', 'Знаменатель'],
    ['Investigation', 'Tadqiqot', 'Исследование'],
    ['Counter-example', 'Qarshi misol', 'Контрпример']
  ],
  timing: [[8, 'The mean of two fractions'], [12, 'A strange rule'], [14, 'Testing the conjecture'], [6, 'Presenting it']],
  sections: [
    {
      h: 'The mean of two fractions',
      html: `${eq('mean ' + m('= ' + f('a + b', '2')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Two fractions</th><th>Sum</th><th>Mean</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('1', '2')}, ${f('1', '4')}</td><td class="m">${f('3', '4')}</td><td class="m">${f('3', '8')}</td></tr>
        <tr><td class="m">${f('1', '3')}, ${f('1', '2')}</td><td class="m">${f('5', '6')}</td><td class="m">${f('5', '12')}</td></tr>
        <tr><td class="m">${f('2', '5')}, ${f('3', '5')}</td><td class="m">1</td><td class="m">${f('1', '2')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The mean always lies between the two</div>
      That is the point of an average, and it is the check to make on every answer in this
      investigation.</div>`
    },
    {
      h: 'A strange rule',
      html: `<p>Now try something that looks wrong: add the numerators and add the denominators.</p>
      ${eq(m(f('a', 'b') + ' ⊕ ' + f('c', 'd') + ' = ' + f('a + c', 'b + d')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Two fractions</th><th>The strange rule</th><th>The true mean</th><th>Between them?</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('1', '2')}, ${f('1', '4')}</td><td class="m">${f('2', '6')} = ${f('1', '3')}</td><td class="m">${f('3', '8')}</td><td>yes</td></tr>
        <tr><td class="m">${f('1', '3')}, ${f('1', '2')}</td><td class="m">${f('2', '5')}</td><td class="m">${f('5', '12')}</td><td>yes</td></tr>
        <tr><td class="m">${f('1', '4')}, ${f('3', '4')}</td><td class="m">${f('4', '8')} = ${f('1', '2')}</td><td class="m">${f('1', '2')}</td><td>yes</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">This is not how fractions are added</span>
      ${m(f('1', '2') + ' + ' + f('1', '4'))} is ${m(f('3', '4'))}, not ${m(f('2', '6'))}. The rule above is
      a different operation, worth investigating precisely because it is the mistake everyone makes.</div>`
    },
    {
      h: 'Testing the conjecture',
      html: `<p><b>Conjecture:</b> the result of the strange rule always lies between the two fractions.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Test</th><th>Result</th><th>Between?</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('1', '5')}, ${f('4', '5')}</td><td class="m">${f('5', '10')} = ${f('1', '2')}</td><td>yes</td></tr>
        <tr><td class="m">${f('2', '3')}, ${f('5', '7')}</td><td class="m">${f('7', '10')}</td><td>yes — ${m('0.667 < 0.7 < 0.714')}</td></tr>
        <tr><td class="m">${f('1', '2')}, ${f('1', '2')}</td><td class="m">${f('2', '4')} = ${f('1', '2')}</td><td>equal to both</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The conjecture survives every test</div>
      It is true, and it has a name: the <b>mediant</b> of two fractions. It always lies between them —
      but it is not usually the mean, as the first table showed.</div>`
    },
    {
      h: 'Presenting it',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Part</th><th>What it contains</th></tr></thead>
      <tbody>
        <tr><td>the question</td><td>where does ${m(f('a + c', 'b + d'))} lie?</td></tr>
        <tr><td>the data</td><td>at least six pairs, chosen systematically</td></tr>
        <tr><td>the pattern</td><td>always between, but not the mean</td></tr>
        <tr><td>the comparison</td><td>the mean against the mediant, in decimals</td></tr>
        <tr><td>the conclusion</td><td>two sentences, with one worked example</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Where the mediant is used</div>
      Two batsmen scoring ${m('40')} runs off ${m('50')} balls and ${m('30')} off ${m('40')} have a
      combined rate of ${m(f('70', '90'))} — the mediant, not the mean of their two rates. Adding the tops
      and the bottoms is exactly right for combining rates.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the mean of ' + m(f('1', '2')) + ' and ' + m(f('1', '4')) + '.',
      steps: [
        [m(f('1', '2') + ' + ' + f('1', '4') + ' = ' + f('3', '4')), ''],
        ['Divide by ' + m('2') + '.', ''],
        [m(f('3', '8')), 'Between ' + m(f('1', '4')) + ' and ' + m(f('1', '2')) + ' ✓']
      ],
      ans: m(f('3', '8'))
    },
    {
      q: 'Apply the strange rule to ' + m(f('1', '3')) + ' and ' + m(f('1', '2')) + ', and compare with the mean.',
      steps: [
        ['Strange rule: ' + m(f('2', '5') + ' = 0.4') + '.', ''],
        ['Mean: ' + m(f('5', '12') + ' ≈ 0.417') + '.', ''],
        ['Both lie between ' + m('0.333') + ' and ' + m('0.5') + ', but they differ.', '']
      ],
      ans: m(f('2', '5')) + ' against ' + m(f('5', '12'))
    },
    {
      q: 'A batsman scores ' + m('40') + ' off ' + m('50') + ' balls and then ' + m('30') + ' off ' + m('40') + '. Find the combined rate.',
      steps: [
        ['Total runs: ' + m('70') + '. Total balls: ' + m('90') + '.', ''],
        [m(f('70', '90') + ' ≈ 0.78') + ' runs a ball.', ''],
        ['That is the mediant of ' + m(f('40', '50')) + ' and ' + m(f('30', '40')) + '.', 'Adding tops and bottoms is right here.']
      ],
      ans: m(f('7', '9'))
    }
  ],
  modelNote: 'Point out that the “wrong” way to add fractions is exactly the right way to combine rates; the class remembers both rules better for seeing where each belongs.',
  interactive: {
    type: 'quiz',
    title: 'Mean or mediant?',
    hint: 'Both lie between; only one is the average.',
    items: [
      { q: 'The mean of ' + m(f('1', '2')) + ' and ' + m(f('1', '4')) + ' is:', a: [m(f('1', '3')), m(f('3', '8')), m(f('2', '6')), m(f('3', '4'))], c: 1, why: 'Add and halve.' },
      { q: 'The mediant of the same two is:', a: [m(f('1', '3')), m(f('3', '8')), m(f('3', '4')), m(f('1', '6'))], c: 0, why: m(f('2', '6')) + '.' },
      { q: m(f('1', '2') + ' + ' + f('1', '4')) + ' equals:', a: [m(f('2', '6')), m(f('3', '4')), m(f('1', '3')), m(f('1', '8'))], c: 1, why: 'Real addition.' },
      { q: 'The mediant always lies:', a: ['above both', 'below both', 'between them', 'anywhere'], c: 2, why: 'The conjecture, which is true.' },
      { q: 'Is the mediant the mean?', a: ['always', 'sometimes', 'never', 'only for equal fractions'], c: 3, why: 'They agree only then.' },
      { q: 'Two rates ' + m(f('40', '50')) + ' and ' + m(f('30', '40')) + ' combine to:', a: [m(f('70', '90')), m(f('70', '45')), m(f('35', '45')), m(f('1200', '2000'))], c: 0, why: 'Total over total.' },
      { q: 'Adding tops and bottoms is right for:', a: ['adding fractions', 'combining rates', 'both', 'neither'], c: 1, why: 'Different questions.' },
      { q: 'A conjecture becomes a fact when it is:', a: ['tested twice', 'proved', 'written down', 'believed'], c: 1, why: 'Evidence is not proof.' }
    ]
  },
  quiz: [
    { q: 'The mean of two numbers is:', a: ['their sum', 'half their sum', 'their difference', 'their product'], c: 1, why: 'The average.' },
    { q: 'The mediant of ' + m(f('a', 'b')) + ' and ' + m(f('c', 'd')) + ' is:', a: [m(f('a + c', 'b + d')), m(f('a + c', '2')), m(f('ac', 'bd')), m(f('a', 'b') + ' + ' + f('c', 'd'))], c: 0, why: 'Tops and bottoms.' },
    { q: 'The mediant of ' + m(f('1', '4')) + ' and ' + m(f('3', '4')) + ' is:', a: [m(f('1', '2')), m(f('4', '4')), m(f('3', '16')), m(f('1', '8'))], c: 0, why: m(f('4', '8')) + '.' },
    { q: 'Is that also the mean here?', a: ['yes', 'no', 'sometimes', 'never'], c: 0, why: 'The denominators are equal.' },
    { q: 'Adding fractions needs:', a: ['a common denominator', 'adding the denominators', 'the mediant', 'nothing'], c: 0, why: 'Same-sized parts.' },
    { q: 'The strange rule is right for:', a: ['fractions', 'rates', 'both', 'neither'], c: 1, why: 'Runs over balls.' }
  ],
  practice: {
    easy: [
      ['The mean of ' + m(f('1', '2')) + ' and ' + m(f('1', '4')), m(f('3', '8'))],
      ['The mean of ' + m(f('1', '3')) + ' and ' + m(f('1', '2')), m(f('5', '12'))],
      ['The mean of ' + m(f('2', '5')) + ' and ' + m(f('3', '5')), m(f('1', '2'))],
      ['The mediant of ' + m(f('1', '2')) + ' and ' + m(f('1', '4')), m(f('1', '3'))],
      ['The mediant of ' + m(f('1', '3')) + ' and ' + m(f('1', '2')), m(f('2', '5'))],
      ['The mediant of ' + m(f('1', '4')) + ' and ' + m(f('3', '4')), m(f('1', '2'))],
      [m(f('1', '2') + ' + ' + f('1', '4')), m(f('3', '4'))]
    ],
    med: [
      ['Is the mediant always between the two fractions?', 'Yes'],
      ['Is the mediant always the mean?', 'No'],
      ['When are they equal?', 'When the two fractions are equal, or the denominators match'],
      ['The mediant of ' + m(f('1', '5')) + ' and ' + m(f('4', '5')), m(f('1', '2'))],
      ['The mediant of ' + m(f('2', '3')) + ' and ' + m(f('5', '7')), m(f('7', '10'))],
      ['Combine ' + m('40') + ' off ' + m('50') + ' and ' + m('30') + ' off ' + m('40'), m(f('7', '9'))],
      ['Which rule adds fractions?', 'The common denominator']
    ],
    hard: [
      ['Show that ' + m(f('7', '10')) + ' lies between ' + m(f('2', '3')) + ' and ' + m(f('5', '7')), m('0.667 < 0.7 < 0.714')],
      ['The mean of ' + m(f('2', '3')) + ' and ' + m(f('5', '7')), m(f('29', '42'))],
      ['Which is larger, the mean or the mediant, for those two?', 'The mean, at ' + m('0.690') + ' against ' + m('0.7') + ' — the mediant'],
      ['A pupil scores ' + m('18') + '/' + m('25') + ' and ' + m('27') + '/' + m('35') + ': the combined mark', m(f('45', '60') + ' = 75%')],
      ['Why is the mediant right for combining marks?', 'Totals over totals is what a combined mark means'],
      ['Find a fraction between ' + m(f('3', '7')) + ' and ' + m(f('4', '7')), m(f('7', '14') + ' = ' + f('1', '2'))],
      ['Find a fraction between ' + m(f('5', '8')) + ' and ' + m(f('2', '3')), m(f('7', '11'))]
    ]
  },
  hwTitle: 'Homework — the project',
  hwNote: 'One page: six tested pairs, the pattern, and where the rule is genuinely useful.',
  homework: [
    'Find the mean and the mediant of six pairs of fractions of your own.',
    'Record both in a table, with decimals for comparison.',
    'State in one sentence where the mediant always lies.',
    'Give one example where adding tops and bottoms is the right thing to do.',
    'Explain why it is nevertheless the wrong way to add two fractions.'
  ]
});

/* ============================== 64 ============================== */
G6_MAT.push({
  id: 'g6-64', stream: 'mat', grade: 6, quarter: 3, lessons: '134–136', hours: 3,
  title: 'Ordering fractions; adding mixed numbers',
  subtitle: 'One common denominator settles both the order and the sum. [Cambridge insert]',
  uz: 'Matematika 6, takrorlash', uzPage: 'pp. 389–394',
  cam: 'S7 7.1–7.2 fractions', camPage: 'Stage 7, pp. 68–75', wb: 'Exercise 7.1–7.2',
  objectives: [
    'Compare two fractions by rewriting them over a common denominator.',
    'Order a list of fractions and place them on a number line.',
    'Add and subtract mixed numbers, converting the improper part back.',
    'Regroup one whole when the subtraction of the fraction parts will not go.'
  ],
  terms: [
    ['Mixed number', 'Aralash son', 'Смешанное число'],
    ['Improper fraction', 'Noto‘g‘ri kasr', 'Неправильная дробь'],
    ['Proper fraction', 'To‘g‘ri kasr', 'Правильная дробь'],
    ['Common denominator', 'Umumiy maxraj', 'Общий знаменатель'],
    ['Lowest common denominator', 'Eng kichik umumiy maxraj', 'Наименьший общий знаменатель'],
    ['To order', 'Tartiblamoq', 'Упорядочить'],
    ['Ascending order', 'O‘sish tartibida', 'По возрастанию'],
    ['To regroup a whole', 'Butundan olmoq', 'Занимать из целой части']
  ],
  timing: [[25, 'Comparing two fractions'], [30, 'Ordering a list'], [35, 'Adding mixed numbers'], [25, 'Subtracting with a regroup'], [5, 'Homework']],
  sections: [
    {
      h: 'Comparing two fractions',
      html: `<p>Two fractions can be compared the moment they share a denominator: the one with the larger
      numerator is larger. Everything in this topic is that one sentence, applied twice.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Pair</th><th>Common denominator</th><th>Rewritten</th><th>Larger</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('3', '4')} and ${f('5', '7')}</td><td class="m">28</td><td class="m">${f('21', '28')} and ${f('20', '28')}</td><td class="m">${f('3', '4')}</td></tr>
        <tr><td class="m">${f('5', '8')} and ${f('7', '12')}</td><td class="m">24</td><td class="m">${f('15', '24')} and ${f('14', '24')}</td><td class="m">${f('5', '8')}</td></tr>
        <tr><td class="m">${f('4', '9')} and ${f('3', '7')}</td><td class="m">63</td><td class="m">${f('28', '63')} and ${f('27', '63')}</td><td class="m">${f('4', '9')}</td></tr>
        <tr><td class="m">${f('2', '3')} and ${f('5', '8')}</td><td class="m">24</td><td class="m">${f('16', '24')} and ${f('15', '24')}</td><td class="m">${f('2', '3')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The cross check, for two fractions only</div>
      For ${m(f('a', 'b'))} against ${m(f('c', 'd'))}, compare ${m('ad')} with ${m('bc')}. For
      ${m(f('3', '4'))} and ${m(f('5', '7'))}: ${m('3 · 7 = 21')} against ${m('4 · 5 = 20')}, so the first
      is larger. It is the same arithmetic as the table, with the denominator left unwritten.</div>`
    },
    {
      h: 'Ordering a list',
      html: `<p>For three or more fractions the cross check is no help — one denominator for the whole list
      is quicker. Order ${m(f('2', '3'))}, ${m(f('3', '5'))}, ${m(f('7', '10'))}, ${m(f('5', '8'))}.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Fraction</th><th>Over 120</th><th>As a decimal</th><th>Place</th></tr></thead>
      <tbody>
        <tr><td class="m">${f('3', '5')}</td><td class="m">${f('72', '120')}</td><td class="m">0.600</td><td>1st</td></tr>
        <tr><td class="m">${f('5', '8')}</td><td class="m">${f('75', '120')}</td><td class="m">0.625</td><td>2nd</td></tr>
        <tr><td class="m">${f('2', '3')}</td><td class="m">${f('80', '120')}</td><td class="m">0.667</td><td>3rd</td></tr>
        <tr><td class="m">${f('7', '10')}</td><td class="m">${f('84', '120')}</td><td class="m">0.700</td><td>4th</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A bigger denominator does not mean a bigger fraction</span>
      ${m(f('7', '10'))} beats ${m(f('5', '8'))} and ${m(f('3', '5'))} beats nothing at all: the
      denominator alone decides nothing. Rewrite, then compare.</div>
      <p>With directed numbers the order reverses on the negative side: ${m(f('2', '3'))} is larger than
      ${m(f('3', '5'))}, so ${m('−' + f('2', '3'))} is <b>smaller</b> than ${m('−' + f('3', '5'))}.</p>`
    },
    {
      h: 'Adding mixed numbers',
      html: `<p>Add the whole parts, add the fraction parts over a common denominator, then carry any whole
      that the fraction part has produced.</p>
      ${eq(m('2' + f('3', '4') + ' + 1' + f('5', '6') + ' = 3 + ' + f('9', '12') + ' + ' + f('10', '12') + ' = 3' + f('19', '12') + ' = 4' + f('7', '12')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Sum</th><th>Wholes</th><th>Fractions</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">3${f('2', '5')} + 2${f('1', '3')}</td><td class="m">5</td><td class="m">${f('6', '15')} + ${f('5', '15')} = ${f('11', '15')}</td><td class="m">5${f('11', '15')}</td></tr>
        <tr><td class="m">1${f('1', '2')} + 2${f('2', '3')}</td><td class="m">3</td><td class="m">${f('3', '6')} + ${f('4', '6')} = ${f('7', '6')}</td><td class="m">4${f('1', '6')}</td></tr>
        <tr><td class="m">3${f('5', '6')} + 1${f('3', '4')}</td><td class="m">4</td><td class="m">${f('10', '12')} + ${f('9', '12')} = ${f('19', '12')}</td><td class="m">5${f('7', '12')}</td></tr>
        <tr><td class="m">2${f('7', '10')} + 3${f('4', '5')}</td><td class="m">5</td><td class="m">${f('7', '10')} + ${f('8', '10')} = ${f('15', '10')}</td><td class="m">6${f('1', '2')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Never leave an improper fraction in the answer</div>
      ${m('3' + f('19', '12'))} is a correct value but not a finished answer: ${m(f('19', '12') + ' = 1' + f('7', '12'))},
      so the whole part becomes ${m('4')}.</div>`
    },
    {
      h: 'Subtracting with a regroup',
      html: `<p>Subtraction is the same, until the fraction parts will not go. Then one whole is exchanged
      for a fraction of the same denominator — exactly the borrowing of column subtraction.</p>
      ${eq(m('4' + f('1', '3') + ' − 1' + f('5', '6') + ' = 4' + f('2', '6') + ' = 3' + f('8', '6') + ', so 3' + f('8', '6') + ' − 1' + f('5', '6') + ' = 2' + f('3', '6') + ' = 2' + f('1', '2')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Difference</th><th>Regroup</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">5${f('1', '4')} − 2${f('3', '4')}</td><td class="m">4${f('5', '4')} − 2${f('3', '4')}</td><td class="m">2${f('1', '2')}</td></tr>
        <tr><td class="m">6 − 2${f('3', '8')}</td><td class="m">5${f('8', '8')} − 2${f('3', '8')}</td><td class="m">3${f('5', '8')}</td></tr>
        <tr><td class="m">7${f('2', '5')} − 3${f('4', '5')}</td><td class="m">6${f('7', '5')} − 3${f('4', '5')}</td><td class="m">3${f('3', '5')}</td></tr>
        <tr><td class="m">5${f('1', '6')} − 2${f('3', '4')}</td><td class="m">4${f('14', '12')} − 2${f('9', '12')}</td><td class="m">2${f('5', '12')}</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Take the whole across in the right pieces</span>
      One whole is ${m(f('4', '4'))} when the denominator is ${m('4')} and ${m(f('12', '12'))} when it is
      ${m('12')}. Change the denominators first, regroup second, or the exchange will be the wrong size.</div>`
    }
  ],
  examples: [
    {
      q: 'Which is larger, ' + m(f('4', '9')) + ' or ' + m(f('3', '7')) + '?',
      steps: [
        ['Common denominator ' + m('63') + '.', ''],
        [m(f('4', '9') + ' = ' + f('28', '63')) + ' and ' + m(f('3', '7') + ' = ' + f('27', '63')) + '.', ''],
        [m('28 > 27') + '.', 'Cross check: ' + m('4 · 7 = 28 > 27 = 9 · 3') + ' ✓']
      ],
      ans: m(f('4', '9')) + ' is larger'
    },
    {
      q: 'Work out ' + m('2' + f('3', '4') + ' + 1' + f('5', '6')) + '.',
      steps: [
        ['Wholes: ' + m('2 + 1 = 3') + '.', ''],
        ['Fractions over ' + m('12') + ': ' + m(f('9', '12') + ' + ' + f('10', '12') + ' = ' + f('19', '12')) + '.', ''],
        [m(f('19', '12') + ' = 1' + f('7', '12')) + ', so the answer is ' + m('4' + f('7', '12')) + '.', 'Estimate: ' + m('2.75 + 1.83 ≈ 4.6') + ' ✓']
      ],
      ans: m('4' + f('7', '12'))
    },
    {
      q: 'Work out ' + m('4' + f('1', '3') + ' − 1' + f('5', '6')) + '.',
      steps: [
        ['Over ' + m('6') + ': ' + m('4' + f('2', '6') + ' − 1' + f('5', '6')) + '.', ''],
        [m(f('2', '6') + ' < ' + f('5', '6')) + ', so regroup: ' + m('3' + f('8', '6')) + '.', ''],
        [m('3' + f('8', '6') + ' − 1' + f('5', '6') + ' = 2' + f('3', '6') + ' = 2' + f('1', '2')) + '.', '']
      ],
      ans: m('2' + f('1', '2'))
    }
  ],
  modelNote: 'Run the model on the pair 9 and 7 last: the extra factors are the other denominator, and the class sees why unrelated denominators multiply.',
  interactive: {
    type: 'lcdBuilder',
    title: 'Building the common denominator',
    hint: 'Factorise each denominator; the extra factor is whatever the other one has and this one lacks.',
    items: [
      { label: '4 and 6', rows: [['4', '2 · 2', '× 3'], ['6', '2 · 3', '× 2']], lcd: '2 · 2 · 3 = 12', note: 'The shared factor 2 is counted once, not twice.' },
      { label: '8 and 12', rows: [['8', '2 · 2 · 2', '× 3'], ['12', '2 · 2 · 3', '× 2']], lcd: '2 · 2 · 2 · 3 = 24', note: 'Not 96: the two 2s they share are counted once.' },
      { label: '6 and 10', rows: [['6', '2 · 3', '× 5'], ['10', '2 · 5', '× 3']], lcd: '2 · 3 · 5 = 30', note: 'Each denominator supplies the factor the other is missing.' },
      { label: '9 and 7', rows: [['9', '3 · 3', '× 7'], ['7', '7', '× 9']], lcd: '9 · 7 = 63', note: 'With no shared factor the lowest common denominator is simply the product.' },
      { label: '4, 6 and 10', rows: [['4', '2 · 2', '× 15'], ['6', '2 · 3', '× 10'], ['10', '2 · 5', '× 6']], lcd: '2 · 2 · 3 · 5 = 60', note: 'Three denominators, one table — this is how a list is ordered.' }
    ]
  },
  quiz: [
    { q: 'To compare two fractions you first make equal the:', a: ['numerators', 'denominators', 'wholes', 'decimals'], c: 1, why: 'Then the numerators decide.' },
    { q: 'The larger of ' + m(f('5', '8')) + ' and ' + m(f('7', '12')) + ' is:', a: [m(f('5', '8')), m(f('7', '12')), 'they are equal', 'cannot tell'], c: 0, why: m(f('15', '24') + ' > ' + f('14', '24')) + '.' },
    { q: m('2' + f('3', '4') + ' + 1' + f('5', '6')) + ' equals:', a: [m('3' + f('19', '12')), m('4' + f('7', '12')), m('3' + f('8', '10')), m('4' + f('1', '2'))], c: 1, why: 'Carry the improper part.' },
    { q: 'In ' + m('6 − 2' + f('3', '8')) + ' the whole ' + m('6') + ' becomes:', a: [m('5' + f('8', '8')), m('6' + f('8', '8')), m('5' + f('1', '8')), m('5')], c: 0, why: 'One whole, in eighths.' },
    { q: 'Of ' + m('−' + f('2', '3')) + ' and ' + m('−' + f('3', '5')) + ' the smaller is:', a: [m('−' + f('3', '5')), m('−' + f('2', '3')), 'equal', 'neither'], c: 1, why: 'The order reverses on the negative side.' },
    { q: 'The lowest common denominator of ' + m('9') + ' and ' + m('7') + ' is:', a: [m('16'), m('63'), m('9'), m('126')], c: 1, why: 'No shared factor, so the product.' }
  ],
  practice: {
    easy: [
      ['Which is larger, ' + m(f('3', '4')) + ' or ' + m(f('5', '7')) + '?', m(f('3', '4'))],
      ['Which is larger, ' + m(f('5', '8')) + ' or ' + m(f('7', '12')) + '?', m(f('5', '8'))],
      ['Which is larger, ' + m(f('2', '3')) + ' or ' + m(f('5', '8')) + '?', m(f('2', '3'))],
      [m('1' + f('1', '4') + ' + 2' + f('1', '4')), m('3' + f('1', '2'))],
      [m('3' + f('2', '5') + ' + 1' + f('1', '5')), m('4' + f('3', '5'))],
      [m('5' + f('3', '4') + ' − 2' + f('1', '4')), m('3' + f('1', '2'))],
      ['The lowest common denominator of ' + m('6') + ' and ' + m('8'), m('24')]
    ],
    med: [
      [m('2' + f('3', '4') + ' + 1' + f('5', '6')), m('4' + f('7', '12'))],
      [m('3' + f('5', '6') + ' + 1' + f('3', '4')), m('5' + f('7', '12'))],
      [m('4' + f('1', '3') + ' − 1' + f('5', '6')), m('2' + f('1', '2'))],
      [m('6 − 2' + f('3', '8')), m('3' + f('5', '8'))],
      [m('7' + f('2', '5') + ' − 3' + f('4', '5')), m('3' + f('3', '5'))],
      ['Order ' + m(f('3', '5')) + ', ' + m(f('2', '3')) + ', ' + m(f('7', '10')) + ', ' + m(f('5', '8')) + ' upwards', m(f('3', '5') + ', ' + f('5', '8') + ', ' + f('2', '3') + ', ' + f('7', '10'))],
      ['Which is larger, ' + m('−' + f('2', '3')) + ' or ' + m('−' + f('3', '5')) + '?', m('−' + f('3', '5'))]
    ],
    hard: [
      [m('2' + f('7', '10') + ' + 3' + f('4', '5')), m('6' + f('1', '2'))],
      [m('5' + f('1', '6') + ' − 2' + f('3', '4')), m('2' + f('5', '12'))],
      [m('1' + f('3', '8') + ' + 2' + f('1', '6') + ' + 1' + f('1', '4')), m('4' + f('19', '24'))],
      [m('10 − 3' + f('2', '7') + ' − 2' + f('5', '7')), m('4')],
      ['Find a fraction between ' + m(f('5', '9')) + ' and ' + m(f('4', '7')), m(f('71', '126'))],
      ['A recipe needs ' + m('2' + f('1', '3')) + ' cups and ' + m('1' + f('3', '4')) + ' cups: the total', m('4' + f('1', '12')) + ' cups'],
      ['Which is larger, ' + m(f('12', '17')) + ' or ' + m(f('7', '10')) + '?', m(f('12', '17')) + ', since ' + m('120 > 119')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Every answer as a mixed number in lowest terms, with the common denominator shown.',
  homework: [
    'Which is larger, ' + m(f('7', '9')) + ' or ' + m(f('5', '6')) + '? Show the rewriting.',
    'Order ' + m(f('1', '2')) + ', ' + m(f('4', '9')) + ', ' + m(f('5', '12')) + ' and ' + m(f('7', '18')) + ' in ascending order.',
    'Work out ' + m('3' + f('2', '3') + ' + 2' + f('3', '4')) + '.',
    'Work out ' + m('5' + f('1', '4') + ' − 2' + f('2', '3')) + '.',
    'A plank ' + m('4') + ' m long has ' + m('1' + f('5', '8')) + ' m sawn off. How much is left?'
  ]
});

/* ============================== 65 ============================== */
G6_MAT.push({
  id: 'g6-65', stream: 'mat', grade: 6, quarter: 3, lessons: '137–138', hours: 2,
  title: 'Generating sequences and finding the nth term',
  subtitle: 'From “add four each time” to a rule that reaches the hundredth term at once. [Cambridge insert]',
  uz: 'Matematika 6, qo‘shimcha mavzu', uzPage: 'pp. 395–399',
  cam: 'S7 9 sequences and functions', camPage: 'Stage 7, pp. 90–97', wb: 'Exercise 9.1–9.3',
  objectives: [
    'Continue a sequence from its term-to-term rule.',
    'Generate terms from a position-to-term rule such as ' + m('3n + 2') + '.',
    'Find the nth term of a linear sequence from its common difference.',
    'Decide whether a given number is a term, and say which one.'
  ],
  terms: [
    ['Sequence', 'Ketma-ketlik', 'Последовательность'],
    ['Term', 'Had', 'Член последовательности'],
    ['Position', 'O‘rin (tartib raqami)', 'Номер (позиция)'],
    ['Term-to-term rule', 'Haddan hadga o‘tish qoidasi', 'Рекуррентное правило'],
    ['nth term', 'n-chi had', 'n-й член'],
    ['Common difference', 'Ayirma', 'Разность'],
    ['Linear sequence', 'Chiziqli ketma-ketlik', 'Линейная последовательность'],
    ['Square numbers', 'Kvadrat sonlar', 'Квадратные числа']
  ],
  timing: [[20, 'Term-to-term rules'], [20, 'From position to term'], [25, 'Finding the nth term'], [10, 'Using the rule'], [5, 'Homework']],
  sections: [
    {
      h: 'Term-to-term rules',
      html: `<p>A sequence is a list of numbers in a fixed order. Each number is a <b>term</b>, and its
      <b>position</b> is ${m('n = 1, 2, 3, …')}. The easiest rule says what to do to one term to get the
      next.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Sequence</th><th>Term-to-term rule</th><th>Next two terms</th></tr></thead>
      <tbody>
        <tr><td class="m">3, 7, 11, 15, …</td><td>add ${m('4')}</td><td class="m">19, 23</td></tr>
        <tr><td class="m">5, 8, 11, 14, …</td><td>add ${m('3')}</td><td class="m">17, 20</td></tr>
        <tr><td class="m">20, 17, 14, 11, …</td><td>subtract ${m('3')}</td><td class="m">8, 5</td></tr>
        <tr><td class="m">2, 4, 8, 16, …</td><td>multiply by ${m('2')}</td><td class="m">32, 64</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A term-to-term rule cannot jump</span>
      To reach the ${m('100')}th term of the first sequence this way you would add ${m('4')} ninety-nine
      times. That is why the next rule is worth having.</div>`
    },
    {
      h: 'From position to term',
      html: `<p>A <b>position-to-term</b> rule — the nth term — takes the position straight to the term.
      Substitute ${m('n = 1, 2, 3, …')} and the sequence appears.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>nth term</th><th>${m('n = 1')}</th><th>${m('n = 2')}</th><th>${m('n = 3')}</th><th>${m('n = 4')}</th></tr></thead>
      <tbody>
        <tr><td class="m">3n + 2</td><td class="m">5</td><td class="m">8</td><td class="m">11</td><td class="m">14</td></tr>
        <tr><td class="m">4n − 1</td><td class="m">3</td><td class="m">7</td><td class="m">11</td><td class="m">15</td></tr>
        <tr><td class="m">23 − 3n</td><td class="m">20</td><td class="m">17</td><td class="m">14</td><td class="m">11</td></tr>
        <tr><td class="m">n²</td><td class="m">1</td><td class="m">4</td><td class="m">9</td><td class="m">16</td></tr>
      </tbody></table></div>
      {{fig:linearSequence:A pattern of squares — the count rises by two each time, so the nth term is 2n + 1}}
      <div class="keybox"><div class="klabel">The rule reaches any term in one step</div>
      The ${m('100')}th term of ${m('4n − 1')} is ${m('4 · 100 − 1 = 399')}. No list, no adding
      ninety-nine times.</div>`
    },
    {
      h: 'Finding the nth term',
      html: `<p>A sequence that goes up (or down) by the same amount every time is <b>linear</b>. Call that
      amount the common difference ${m('d')}, and the first term ${m('a')}.</p>
      ${eq(m('n') + 'th term ' + m('= dn + (a − d)'), true)}
      <p>The ${m('dn')} builds the steady climb; the bracket is the adjustment that makes the first term
      come out right. In practice: write ${m('dn')}, work out the first term it gives, and correct it.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Sequence</th><th>${m('d')}</th><th>${m('dn')} gives at ${m('n = 1')}</th><th>Correction</th><th>nth term</th></tr></thead>
      <tbody>
        <tr><td class="m">5, 8, 11, 14</td><td class="m">3</td><td class="m">3</td><td class="m">+2</td><td class="m">3n + 2</td></tr>
        <tr><td class="m">2, 9, 16, 23</td><td class="m">7</td><td class="m">7</td><td class="m">−5</td><td class="m">7n − 5</td></tr>
        <tr><td class="m">6, 10, 14, 18</td><td class="m">4</td><td class="m">4</td><td class="m">+2</td><td class="m">4n + 2</td></tr>
        <tr><td class="m">20, 17, 14, 11</td><td class="m">−3</td><td class="m">−3</td><td class="m">+23</td><td class="m">23 − 3n</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Check the rule on the first two terms</span>
      A rule that gives the right first term but the wrong second one has the wrong ${m('d')}; one that
      climbs correctly but starts wrong needs a different correction. Both take five seconds to test.</div>`
    },
    {
      h: 'Using the rule',
      html: `<p>Once the nth term is known, two questions can be answered that a list cannot answer at all.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>the ${m('50')}th term of ${m('3n + 2')}</td><td class="m">3 · 50 + 2</td><td class="m">152</td></tr>
        <tr><td>is ${m('47')} a term of ${m('3n + 2')}?</td><td class="m">3n = 45, n = 15</td><td>yes, the ${m('15')}th</td></tr>
        <tr><td>is ${m('60')} a term of ${m('4n − 1')}?</td><td class="m">4n = 61</td><td>no — ${m('n')} is not whole</td></tr>
        <tr><td>the first negative term of ${m('23 − 3n')}</td><td class="m">23 − 3n < 0, n > 7.67</td><td class="m">n = 8, term −1</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The position must be a whole number</div>
      That is the whole test for membership. Solve for ${m('n')}; if it comes out a whole number the value
      is a term, and ${m('n')} says which one.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the nth term of ' + m('5, 8, 11, 14, …') + ' and its ' + m('20') + 'th term.',
      steps: [
        ['Common difference ' + m('d = 3') + ', so start from ' + m('3n') + '.', ''],
        [m('3n') + ' gives ' + m('3') + ' at ' + m('n = 1') + ', but the term is ' + m('5') + ': add ' + m('2') + '.', ''],
        ['nth term ' + m('= 3n + 2') + '; at ' + m('n = 20') + ', ' + m('3 · 20 + 2 = 62') + '.', 'Check ' + m('n = 2') + ': ' + m('8') + ' ✓']
      ],
      ans: m('3n + 2') + ', and ' + m('62')
    },
    {
      q: 'Find the nth term of ' + m('20, 17, 14, 11, …') + ' and its first negative term.',
      steps: [
        [m('d = −3') + ', so start from ' + m('−3n') + '.', ''],
        [m('−3n') + ' gives ' + m('−3') + ' at ' + m('n = 1') + ', but the term is ' + m('20') + ': add ' + m('23') + '.', ''],
        ['nth term ' + m('= 23 − 3n') + '. It is negative when ' + m('n > 7' + f('2', '3')) + ', so ' + m('n = 8') + ' gives ' + m('−1') + '.', '']
      ],
      ans: m('23 − 3n') + '; the ' + m('8') + 'th term, ' + m('−1')
    },
    {
      q: 'Is ' + m('47') + ' a term of the sequence with nth term ' + m('3n + 2') + '?',
      steps: [
        ['Set ' + m('3n + 2 = 47') + '.', ''],
        [m('3n = 45') + '.', ''],
        [m('n = 15') + ' — a whole number, so yes.', 'Check: ' + m('3 · 15 + 2 = 47') + ' ✓']
      ],
      ans: 'Yes, the ' + m('15') + 'th term'
    }
  ],
  modelNote: 'Ask for the 100th term before giving the nth-term rule; the impatience the class feels is exactly the reason the rule exists.',
  interactive: {
    type: 'quiz',
    title: 'Position, term and rule',
    hint: 'Find the common difference first; everything else follows from it.',
    items: [
      { q: 'In ' + m('3, 7, 11, 15') + ' the common difference is:', a: [m('3'), m('4'), m('7'), m('11')], c: 1, why: 'Each term is ' + m('4') + ' more.' },
      { q: 'The nth term of ' + m('5, 8, 11, 14') + ' is:', a: [m('3n'), m('3n + 2'), m('5n'), m('n + 3')], c: 1, why: m('d = 3') + ', corrected by ' + m('+2') + '.' },
      { q: 'The ' + m('10') + 'th term of ' + m('4n − 1') + ' is:', a: [m('39'), m('40'), m('41'), m('36')], c: 0, why: m('40 − 1') + '.' },
      { q: 'The nth term of ' + m('20, 17, 14') + ' is:', a: [m('3n + 20'), m('23 − 3n'), m('20 − 3n'), m('17n')], c: 1, why: 'At ' + m('n = 1') + ' it must give ' + m('20') + '.' },
      { q: 'Is ' + m('60') + ' a term of ' + m('4n − 1') + '?', a: ['yes, the ' + m('15') + 'th', 'no', 'yes, the ' + m('61') + 'st', 'cannot tell'], c: 1, why: m('4n = 61') + ' has no whole solution.' },
      { q: m('1, 4, 9, 16') + ' is generated by:', a: [m('4n'), m('n²'), m('3n + 1'), m('n + 3')], c: 1, why: 'The square numbers.' },
      { q: 'A term-to-term rule of “multiply by ' + m('2') + '” makes the sequence:', a: ['linear', 'not linear', 'decreasing', 'constant'], c: 1, why: 'The steps grow.' },
      { q: 'The nth term of ' + m('6, 10, 14, 18') + ' is:', a: [m('4n + 2'), m('4n'), m('6n'), m('2n + 4')], c: 0, why: m('d = 4') + ', corrected by ' + m('+2') + '.' }
    ]
  },
  quiz: [
    { q: 'The common difference of ' + m('2, 9, 16, 23') + ' is:', a: [m('5'), m('7'), m('9'), m('2')], c: 1, why: 'Each step is ' + m('7') + '.' },
    { q: 'The nth term of ' + m('2, 9, 16, 23') + ' is:', a: [m('7n'), m('7n − 5'), m('7n + 2'), m('2n + 7')], c: 1, why: 'Corrected to give ' + m('2') + ' first.' },
    { q: 'A position-to-term rule lets you:', a: ['only continue the list', 'reach any term at once', 'find the difference', 'nothing new'], c: 1, why: 'Substitute the position.' },
    { q: 'The ' + m('100') + 'th term of ' + m('4n − 1') + ' is:', a: [m('399'), m('400'), m('401'), m('403')], c: 0, why: m('400 − 1') + '.' },
    { q: 'A number is a term only when ' + m('n') + ' comes out:', a: ['positive', 'a whole number', 'even', 'small'], c: 1, why: 'Positions are whole numbers.' },
    { q: 'In ' + m('dn + (a − d)') + ' the letter ' + m('d') + ' is:', a: ['the first term', 'the common difference', 'the position', 'the last term'], c: 1, why: 'It sets the steady climb.' }
  ],
  practice: {
    easy: [
      ['The next two terms of ' + m('3, 7, 11, 15'), m('19, 23')],
      ['The next two terms of ' + m('20, 17, 14'), m('11, 8')],
      ['The first three terms of ' + m('5n'), m('5, 10, 15')],
      ['The first three terms of ' + m('2n + 3'), m('5, 7, 9')],
      ['The ' + m('10') + 'th term of ' + m('4n − 1'), m('39')],
      ['The term-to-term rule of ' + m('5, 8, 11'), 'Add ' + m('3')],
      ['The first term of ' + m('3n + 2'), m('5')]
    ],
    med: [
      ['The nth term of ' + m('5, 8, 11, 14'), m('3n + 2')],
      ['The nth term of ' + m('2, 9, 16, 23'), m('7n − 5')],
      ['The nth term of ' + m('6, 10, 14, 18'), m('4n + 2')],
      ['The nth term of ' + m('20, 17, 14, 11'), m('23 − 3n')],
      ['The ' + m('100') + 'th term of ' + m('4n − 1'), m('399')],
      ['The ' + m('50') + 'th term of ' + m('3n + 2'), m('152')],
      ['Is ' + m('47') + ' a term of ' + m('3n + 2') + '?', 'Yes, the ' + m('15') + 'th']
    ],
    hard: [
      ['Is ' + m('60') + ' a term of ' + m('4n − 1') + '?', 'No — ' + m('4n = 61') + ' is not whole'],
      ['Which term of ' + m('7n − 5') + ' equals ' + m('100') + '?', 'The ' + m('15') + 'th'],
      ['The nth term of ' + m('1, 4, 9, 16'), m('n²')],
      ['The nth term of ' + m('1, 3, 6, 10'), m('n(n + 1) ÷ 2')],
      ['The first term of ' + m('4n + 2') + ' above ' + m('100'), m('102') + ', at ' + m('n = 25')],
      ['A sequence starts at ' + m('4') + ' and adds ' + m('6') + ': its nth term', m('6n − 2')],
      ['The first negative term of ' + m('23 − 3n'), m('−1') + ', at ' + m('n = 8')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Test every nth term you write on the first two terms before moving on.',
  homework: [
    'Write the first five terms of the sequence with nth term ' + m('6n − 1') + '.',
    'Find the nth term of ' + m('7, 12, 17, 22, …') + '.',
    'Find the nth term of ' + m('30, 26, 22, 18, …') + '.',
    'Is ' + m('82') + ' a term of the sequence with nth term ' + m('5n + 2') + '? Say which term, or why not.',
    'A pattern of squares uses ' + m('4, 7, 10, …') + ' tiles. Find the nth term and the ' + m('50') + 'th figure.'
  ]
});

/* ============================== 66 ============================== */
G6_MAT.push({
  id: 'g6-66', stream: 'mat', grade: 6, quarter: 3, lessons: '139', hours: 1,
  title: 'Recall — the cube and the cuboid',
  subtitle: 'Faces, edges and vertices; volume as a product of three lengths; the litre.',
  uz: 'Matematika 6, takrorlash', uzPage: 'pp. 400–403',
  cam: 'S7 15 distance, area and volume', camPage: 'Stage 7, pp. 156–160', wb: 'Exercise 15.1',
  objectives: [
    'Name the faces, edges and vertices of a cuboid.',
    'Find the volume of a cuboid and of a cube.',
    'Find the total surface area from the three pairs of faces.',
    'Convert between ' + m('cm³') + ', ' + m('m³') + ' and litres.'
  ],
  terms: [
    ['Cuboid', 'Parallelepiped', 'Прямоугольный параллелепипед'],
    ['Cube', 'Kub', 'Куб'],
    ['Face', 'Yoq', 'Грань'],
    ['Edge', 'Qirra', 'Ребро'],
    ['Vertex', 'Uchi', 'Вершина'],
    ['Volume', 'Hajm', 'Объём'],
    ['Surface area', 'Sirt yuzasi', 'Площадь поверхности'],
    ['Litre', 'Litr', 'Литр']
  ],
  timing: [[10, 'The two solids'], [12, 'Volume'], [12, 'Surface area'], [6, 'Units and capacity']],
  sections: [
    {
      h: 'The two solids',
      html: `<p>A cuboid has six rectangular faces, meeting in twelve edges at eight vertices. A cube is the
      cuboid whose twelve edges are all the same length.</p>
      {{fig:cubeLabelled:A cube — six faces, twelve edges, eight vertices}}
      <div class="tablewrap"><table>
      <thead><tr><th>Solid</th><th>Faces</th><th>Edges</th><th>Vertices</th><th>Faces are</th></tr></thead>
      <tbody>
        <tr><td>cuboid</td><td class="m">6</td><td class="m">12</td><td class="m">8</td><td>rectangles, equal in opposite pairs</td></tr>
        <tr><td>cube</td><td class="m">6</td><td class="m">12</td><td class="m">8</td><td>six equal squares</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Three lengths describe a cuboid completely</div>
      Length, width and height — usually written ${m('a')}, ${m('b')}, ${m('c')}. For a cube all three are
      the same, so one number is enough.</div>`
    },
    {
      h: 'Volume',
      html: `${eq(m('V = abc') + '     and for a cube     ' + m('V = a³'), true)}
      <p>The bottom layer holds ${m('ab')} unit cubes, and there are ${m('c')} such layers.</p>
      {{fig:prismVolume:Area of the base multiplied by the height — the rule behind every prism}}
      <div class="tablewrap"><table>
      <thead><tr><th>Solid</th><th>Dimensions</th><th>Working</th><th>Volume</th></tr></thead>
      <tbody>
        <tr><td>cuboid</td><td class="m">5 × 4 × 3 cm</td><td class="m">5 · 4 · 3</td><td class="m">60 cm³</td></tr>
        <tr><td>cuboid</td><td class="m">8 × 5 × 2 cm</td><td class="m">8 · 5 · 2</td><td class="m">80 cm³</td></tr>
        <tr><td>cuboid</td><td class="m">10 × 6 × 4 cm</td><td class="m">10 · 6 · 4</td><td class="m">240 cm³</td></tr>
        <tr><td>cube</td><td class="m">4 cm edge</td><td class="m">4³</td><td class="m">64 cm³</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">All three lengths in the same unit</span>
      A box ${m('1')} m by ${m('50')} cm by ${m('40')} cm is ${m('100 × 50 × 40 = 200 000')} cm³, not
      ${m('1 × 50 × 40')}. Convert first, multiply second.</div>`
    },
    {
      h: 'Surface area',
      html: `<p>The six faces come in three equal pairs, so the total is twice the sum of three
      rectangles.</p>
      ${eq(m('S = 2(ab + bc + ac)') + '     and for a cube     ' + m('S = 6a²'), true)}
      {{fig:surfaceNet:The net — the six faces laid flat, which is what the formula adds up}}
      <div class="tablewrap"><table>
      <thead><tr><th>Solid</th><th>The three rectangles</th><th>Sum</th><th>Surface area</th></tr></thead>
      <tbody>
        <tr><td class="m">5 × 4 × 3</td><td class="m">20, 12, 15</td><td class="m">47</td><td class="m">94 cm²</td></tr>
        <tr><td class="m">8 × 5 × 2</td><td class="m">40, 10, 16</td><td class="m">66</td><td class="m">132 cm²</td></tr>
        <tr><td class="m">10 × 6 × 4</td><td class="m">60, 24, 40</td><td class="m">124</td><td class="m">248 cm²</td></tr>
        <tr><td>cube, edge ${m('4')}</td><td class="m">16, 16, 16</td><td class="m">48</td><td class="m">96 cm²</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Area is squared, volume is cubed</div>
      Two lengths multiplied give ${m('cm²')}; three give ${m('cm³')}. An answer in the wrong unit is
      almost always the wrong quantity.</div>`
    },
    {
      h: 'Units and capacity',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Unit</th><th>Equals</th><th>Everyday size</th></tr></thead>
      <tbody>
        <tr><td class="m">1 cm³</td><td class="m">1 ml</td><td>a small sugar cube</td></tr>
        <tr><td class="m">1000 cm³</td><td class="m">1 litre</td><td>a cube of edge ${m('10')} cm</td></tr>
        <tr><td class="m">1 m³</td><td class="m">1 000 000 cm³ = 1000 litres</td><td>a cube of edge ${m('1')} m</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">${m('1')} m³ is a million cm³, not a hundred</span>
      Each of the three lengths is multiplied by ${m('100')}, so the volume is multiplied by
      ${m('100³ = 1 000 000')}. The same trap turns ${m('1')} m² into ${m('10 000')} cm², not ${m('100')}.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the volume and the surface area of a cuboid ' + m('5') + ' cm by ' + m('4') + ' cm by ' + m('3') + ' cm.',
      steps: [
        [m('V = 5 · 4 · 3 = 60') + ' cm³.', ''],
        ['The three rectangles: ' + m('20, 12, 15') + '.', ''],
        [m('S = 2 · 47 = 94') + ' cm².', 'Volume in ' + m('cm³') + ', area in ' + m('cm²') + ' ✓']
      ],
      ans: m('60') + ' cm³ and ' + m('94') + ' cm²'
    },
    {
      q: 'A cube has edge ' + m('6') + ' cm. Find its volume and surface area.',
      steps: [
        [m('V = 6³ = 216') + ' cm³.', ''],
        [m('S = 6 · 6² = 6 · 36') + '.', ''],
        [m('S = 216') + ' cm².', 'The numbers agree only for edge ' + m('6') + ' — a coincidence, not a rule.']
      ],
      ans: m('216') + ' cm³ and ' + m('216') + ' cm²'
    },
    {
      q: 'A tank measures ' + m('50') + ' cm by ' + m('40') + ' cm by ' + m('30') + ' cm. How many litres does it hold?',
      steps: [
        [m('V = 50 · 40 · 30 = 60 000') + ' cm³.', ''],
        [m('1000') + ' cm³ is ' + m('1') + ' litre.', ''],
        [m('60 000 ÷ 1000 = 60') + ' litres.', '']
      ],
      ans: m('60') + ' litres'
    }
  ],
  modelNote: 'Hold up a chalk box and ask for the volume and the surface area of the same object; separating “how much fits in” from “how much wraps round” is the whole lesson.',
  interactive: {
    type: 'solidVolume',
    title: 'Base area times height',
    hint: 'Set the base to four sides for a box. Change the base and the height, and watch the volume and the surface area respond differently.'
  },
  quiz: [
    { q: 'A cuboid has:', a: [m('4') + ' faces', m('6') + ' faces', m('8') + ' faces', m('12') + ' faces'], c: 1, why: 'Three pairs.' },
    { q: 'The volume of a ' + m('5 × 4 × 3') + ' cuboid is:', a: [m('12'), m('60'), m('94'), m('47')], c: 1, why: 'Multiply all three.' },
    { q: 'The surface area of that cuboid is:', a: [m('47'), m('60'), m('94'), m('188')], c: 2, why: m('2(20 + 12 + 15)') + '.' },
    { q: 'A cube of edge ' + m('4') + ' cm has volume:', a: [m('12'), m('16'), m('64'), m('96')], c: 2, why: m('4³') + '.' },
    { q: m('1') + ' litre is:', a: [m('100') + ' cm³', m('1000') + ' cm³', m('1') + ' m³', m('10') + ' cm³'], c: 1, why: 'A cube of edge ' + m('10') + ' cm.' },
    { q: m('1') + ' m³ in cm³ is:', a: [m('100'), m('10 000'), m('1 000 000'), m('1000')], c: 2, why: m('100³') + '.' }
  ],
  practice: {
    easy: [
      ['The number of faces of a cuboid', m('6')],
      ['The number of edges of a cuboid', m('12')],
      ['The number of vertices of a cuboid', m('8')],
      ['The volume of a cube of edge ' + m('4') + ' cm', m('64') + ' cm³'],
      ['The volume of a ' + m('5 × 4 × 3') + ' cm cuboid', m('60') + ' cm³'],
      ['The surface area of a cube of edge ' + m('4') + ' cm', m('96') + ' cm²'],
      [m('1') + ' litre in cm³', m('1000') + ' cm³']
    ],
    med: [
      ['The volume of an ' + m('8 × 5 × 2') + ' cm cuboid', m('80') + ' cm³'],
      ['The surface area of a ' + m('5 × 4 × 3') + ' cm cuboid', m('94') + ' cm²'],
      ['The surface area of an ' + m('8 × 5 × 2') + ' cm cuboid', m('132') + ' cm²'],
      ['The volume of a cube of edge ' + m('10') + ' cm, in litres', m('1') + ' litre'],
      ['The volume of a ' + m('10 × 6 × 4') + ' cm cuboid', m('240') + ' cm³'],
      ['The surface area of a cube of edge ' + m('5') + ' cm', m('150') + ' cm²'],
      [m('1') + ' m³ in litres', m('1000') + ' litres']
    ],
    hard: [
      ['A cube has volume ' + m('216') + ' cm³: its edge', m('6') + ' cm'],
      ['…and its surface area', m('216') + ' cm²'],
      ['A ' + m('12 × 5 × h') + ' cm cuboid has volume ' + m('300') + ' cm³: find ' + m('h'), m('5') + ' cm'],
      [m('2') + ' m³ in cm³', m('2 000 000') + ' cm³'],
      ['A tank ' + m('50 × 40 × 30') + ' cm, in litres', m('60') + ' litres'],
      ['How many cubes of edge ' + m('3') + ' cm fill a cube of edge ' + m('6') + ' cm?', m('8')],
      ['Which cube has surface area equal in number to its volume?', 'Edge ' + m('6') + ', both ' + m('216')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write the unit on every answer; it is the quickest check that the right quantity was found.',
  homework: [
    'Find the volume and the surface area of a cuboid ' + m('7') + ' cm by ' + m('4') + ' cm by ' + m('2') + ' cm.',
    'Find the volume and the surface area of a cube of edge ' + m('5') + ' cm.',
    'A box is ' + m('1') + ' m by ' + m('60') + ' cm by ' + m('50') + ' cm. Find its volume in cm³.',
    'How many litres does a tank ' + m('80') + ' cm by ' + m('50') + ' cm by ' + m('25') + ' cm hold?',
    'Explain in one sentence why ' + m('1') + ' m³ is ' + m('1 000 000') + ' cm³ and not ' + m('100') + ' cm³.'
  ]
});

/* ============================== 67 ============================== */
G6_MAT.push({
  id: 'g6-67', stream: 'mat', grade: 6, quarter: 3, lessons: '140–142', hours: 3,
  title: 'Finding an edge of a cuboid',
  subtitle: 'The volume formula run backwards — and the surface-area formula run backwards too.',
  uz: 'Matematika 6, §29', uzPage: 'pp. 404–413',
  cam: 'S7 15 distance, area and volume', camPage: 'Stage 7, pp. 156–162', wb: 'Exercise 15.2',
  objectives: [
    'Find the third edge of a cuboid from its volume and two edges.',
    'Find the edge of a cube from its volume or its surface area.',
    'Find a missing edge from the total surface area of a cuboid.',
    'Solve depth-of-water and height-of-box problems in the right units.'
  ],
  terms: [
    ['Missing edge', 'Noma’lum qirra', 'Неизвестное ребро'],
    ['Base', 'Asos', 'Основание'],
    ['Height', 'Balandlik', 'Высота'],
    ['Depth', 'Chuqurlik', 'Глубина'],
    ['Base area', 'Asos yuzasi', 'Площадь основания'],
    ['Cube root', 'Kub ildiz', 'Кубический корень'],
    ['Capacity', 'Sig‘im', 'Вместимость'],
    ['To rearrange', 'O‘zgartirib yozish', 'Выразить']
  ],
  timing: [[25, 'Reversing the volume formula'], [30, 'The edge of a cube'], [35, 'From the surface area'], [25, 'Depth and height in context'], [5, 'Homework']],
  sections: [
    {
      h: 'Reversing the volume formula',
      html: `<p>${m('V = abc')} is a multiplication of three numbers. If two of them and the product are
      known, the third is a division.</p>
      ${eq(m('c = ' + f('V', 'ab')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Volume</th><th>Base</th><th>Base area</th><th>Missing edge</th></tr></thead>
      <tbody>
        <tr><td class="m">120 cm³</td><td class="m">5 × 4</td><td class="m">20 cm²</td><td class="m">6 cm</td></tr>
        <tr><td class="m">240 cm³</td><td class="m">10 × 6</td><td class="m">60 cm²</td><td class="m">4 cm</td></tr>
        <tr><td class="m">84 cm³</td><td class="m">7 × 3</td><td class="m">21 cm²</td><td class="m">4 cm</td></tr>
        <tr><td class="m">150 cm³</td><td class="m">5 × 5</td><td class="m">25 cm²</td><td class="m">6 cm</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Multiply the two you have, then divide once</div>
      Finding the base area first turns a three-number problem into a two-number one. It also makes the
      units obvious: ${m('cm³ ÷ cm² = cm')}.</div>`
    },
    {
      h: 'The edge of a cube',
      html: `<p>For a cube all three edges are the same, so ${m('V = a³')} and the edge is the number whose
      cube is the volume.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Volume</th><th>Question asked</th><th>Edge</th></tr></thead>
      <tbody>
        <tr><td class="m">27 cm³</td><td class="m">a³ = 27</td><td class="m">3 cm</td></tr>
        <tr><td class="m">64 cm³</td><td class="m">a³ = 64</td><td class="m">4 cm</td></tr>
        <tr><td class="m">343 cm³</td><td class="m">a³ = 343</td><td class="m">7 cm</td></tr>
        <tr><td class="m">512 cm³</td><td class="m">a³ = 512</td><td class="m">8 cm</td></tr>
        <tr><td class="m">1000 cm³</td><td class="m">a³ = 1000</td><td class="m">10 cm</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Do not divide the volume by three</span>
      ${m('a³')} means ${m('a · a · a')}, not ${m('3a')}. A cube of volume ${m('27')} has edge ${m('3')},
      not ${m('9')} — and ${m('3 · 3 · 3')} checks it in one line.</div>
      <p>Keeping the first ten cubes in mind — ${m('1, 8, 27, 64, 125, 216, 343, 512, 729, 1000')} — makes
      almost every question of this kind immediate.</p>`
    },
    {
      h: 'From the surface area',
      html: `<p>For a cube, ${m('S = 6a²')}: divide by six, then take the square root.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Surface area</th><th class="m">a²</th><th>Edge</th></tr></thead>
      <tbody>
        <tr><td class="m">54 cm²</td><td class="m">9</td><td class="m">3 cm</td></tr>
        <tr><td class="m">96 cm²</td><td class="m">16</td><td class="m">4 cm</td></tr>
        <tr><td class="m">150 cm²</td><td class="m">25</td><td class="m">5 cm</td></tr>
        <tr><td class="m">216 cm²</td><td class="m">36</td><td class="m">6 cm</td></tr>
      </tbody></table></div>
      <p>For a cuboid with two edges known the same idea gives an equation instead of a division. With
      ${m('a = 5')}, ${m('b = 4')} and ${m('S = 94')}:</p>
      ${eq(m('2(20 + 4c + 5c) = 94') + ', so ' + m('40 + 18c = 94') + ', ' + m('18c = 54') + ', ' + m('c = 3'), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Two edges</th><th>Surface area</th><th>Equation</th><th>Third edge</th></tr></thead>
      <tbody>
        <tr><td class="m">5 and 4</td><td class="m">94 cm²</td><td class="m">40 + 18c = 94</td><td class="m">3 cm</td></tr>
        <tr><td class="m">8 and 5</td><td class="m">132 cm²</td><td class="m">80 + 26c = 132</td><td class="m">2 cm</td></tr>
        <tr><td class="m">10 and 6</td><td class="m">248 cm²</td><td class="m">120 + 32c = 248</td><td class="m">4 cm</td></tr>
        <tr><td class="m">6 and 4</td><td class="m">108 cm²</td><td class="m">48 + 20c = 108</td><td class="m">3 cm</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The face you know is a constant, the other two are the unknown</div>
      Only the pair of faces built from the two known edges contributes a fixed number. The other four
      faces all carry ${m('c')}, which is why the equation is always linear.</div>`
    },
    {
      h: 'Depth and height in context',
      html: `<p>Almost every practical question is the volume formula reversed, with a unit conversion in
      front of it.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>Volume in one unit</th><th>Base area</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>a tank ${m('80 × 50')} cm holding ${m('120')} litres: its depth</td><td class="m">120 000 cm³</td><td class="m">4000 cm²</td><td class="m">30 cm</td></tr>
        <tr><td>a pool ${m('25 × 10')} m holding ${m('500')} m³: its depth</td><td class="m">500 m³</td><td class="m">250 m²</td><td class="m">2 m</td></tr>
        <tr><td>a box of ${m('360')} cm³ on a ${m('12 × 6')} base: its height</td><td class="m">360 cm³</td><td class="m">72 cm²</td><td class="m">5 cm</td></tr>
        <tr><td>a brick of ${m('1920')} cm³, ${m('20')} long and ${m('12')} wide</td><td class="m">1920 cm³</td><td class="m">240 cm²</td><td class="m">8 cm</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Litres are not lengths</span>
      A capacity in litres must become ${m('cm³')} — multiply by ${m('1000')} — before it can be divided by
      an area in ${m('cm²')}. Dividing ${m('120')} by ${m('4000')} gives ${m('0.03')}, which is the right
      arithmetic on the wrong numbers.</div>`
    }
  ],
  examples: [
    {
      q: 'A cuboid has volume ' + m('240') + ' cm³ and a base ' + m('10') + ' cm by ' + m('6') + ' cm. Find its height.',
      steps: [
        ['Base area ' + m('10 · 6 = 60') + ' cm².', ''],
        [m('240 ÷ 60') + '.', ''],
        [m('= 4') + ' cm.', 'Check: ' + m('10 · 6 · 4 = 240') + ' ✓']
      ],
      ans: m('4') + ' cm'
    },
    {
      q: 'A cube has volume ' + m('512') + ' cm³. Find its edge.',
      steps: [
        ['We need ' + m('a') + ' with ' + m('a³ = 512') + '.', ''],
        [m('8 · 8 = 64') + ' and ' + m('64 · 8 = 512') + '.', ''],
        [m('a = 8') + ' cm.', 'Not ' + m('512 ÷ 3') + ' — the edges multiply, they do not add.']
      ],
      ans: m('8') + ' cm'
    },
    {
      q: 'A cuboid is ' + m('5') + ' cm by ' + m('4') + ' cm and has surface area ' + m('94') + ' cm². Find the third edge.',
      steps: [
        [m('S = 2(5 · 4 + 4c + 5c) = 94') + '.', ''],
        [m('40 + 18c = 94') + ', so ' + m('18c = 54') + '.', ''],
        [m('c = 3') + ' cm.', 'Check: ' + m('2(20 + 12 + 15) = 94') + ' ✓']
      ],
      ans: m('3') + ' cm'
    }
  ],
  modelNote: 'Give the volume and one pair of edges and let the class find the third by trial before the division is written down; the division then looks like a shortcut, not a rule.',
  interactive: {
    type: 'quiz',
    title: 'Working the formula backwards',
    hint: 'Find the base area first, then divide once.',
    items: [
      { q: 'A cuboid of volume ' + m('120') + ' cm³ on a ' + m('5 × 4') + ' base has height:', a: [m('6') + ' cm', m('4') + ' cm', m('24') + ' cm', m('3') + ' cm'], c: 0, why: m('120 ÷ 20') + '.' },
      { q: 'A cuboid of volume ' + m('84') + ' cm³ on a ' + m('7 × 3') + ' base has height:', a: [m('3'), m('4'), m('12'), m('21')], c: 1, why: m('84 ÷ 21') + '.' },
      { q: 'A cube of volume ' + m('343') + ' cm³ has edge:', a: [m('6'), m('7'), m('8'), m('49')], c: 1, why: m('7³ = 343') + '.' },
      { q: 'A cube of volume ' + m('27') + ' cm³ has edge:', a: [m('9'), m('3'), m('27'), m('13.5')], c: 1, why: 'Not ' + m('27 ÷ 3') + '.' },
      { q: 'A cube of surface area ' + m('150') + ' cm² has edge:', a: [m('5'), m('25'), m('6'), m('12.5')], c: 0, why: m('150 ÷ 6 = 25') + ', root ' + m('5') + '.' },
      { q: 'A cuboid ' + m('8') + ' by ' + m('5') + ' with ' + m('S = 132') + ' cm² has third edge:', a: [m('2'), m('3'), m('4'), m('5')], c: 0, why: m('80 + 26c = 132') + '.' },
      { q: 'A tank ' + m('80 × 50') + ' cm holding ' + m('120') + ' litres is deep:', a: [m('0.03') + ' cm', m('30') + ' cm', m('3') + ' cm', m('300') + ' cm'], c: 1, why: m('120 000 ÷ 4000') + '.' },
      { q: 'To find a missing edge from the volume you:', a: ['divide by 3', 'divide by the base area', 'take the square root', 'multiply'], c: 1, why: m('cm³ ÷ cm² = cm') + '.' }
    ]
  },
  quiz: [
    { q: 'From ' + m('V = abc') + ', the edge ' + m('c') + ' equals:', a: [m('V − ab'), m('V ÷ (ab)'), m('V ÷ 3'), m('Vab')], c: 1, why: 'Reverse the multiplication.' },
    { q: 'A cuboid of volume ' + m('240') + ' cm³ on a ' + m('10 × 6') + ' base is:', a: [m('4') + ' cm high', m('24') + ' cm high', m('40') + ' cm high', m('60') + ' cm high'], c: 0, why: m('240 ÷ 60') + '.' },
    { q: 'A cube of volume ' + m('1000') + ' cm³ has edge:', a: [m('10') + ' cm', m('100') + ' cm', m('333') + ' cm', m('31.6') + ' cm'], c: 0, why: m('10³') + '.' },
    { q: 'A cube of surface area ' + m('96') + ' cm² has edge:', a: [m('16'), m('4'), m('6'), m('8')], c: 1, why: m('96 ÷ 6 = 16') + '.' },
    { q: 'A capacity in litres must first be turned into:', a: [m('cm²'), m('cm³'), 'metres', 'nothing'], c: 1, why: 'Multiply by ' + m('1000') + '.' },
    { q: 'The units of volume divided by area are:', a: ['cm³', 'cm²', 'cm', 'litres'], c: 2, why: 'A length — which is what an edge is.' }
  ],
  practice: {
    easy: [
      [m('V = 120') + ' cm³ on a ' + m('5 × 4') + ' base: the height', m('6') + ' cm'],
      [m('V = 240') + ' cm³ on a ' + m('10 × 6') + ' base: the height', m('4') + ' cm'],
      [m('V = 84') + ' cm³ on a ' + m('7 × 3') + ' base: the height', m('4') + ' cm'],
      ['A cube of volume ' + m('27') + ' cm³: the edge', m('3') + ' cm'],
      ['A cube of volume ' + m('343') + ' cm³: the edge', m('7') + ' cm'],
      ['A cube of surface area ' + m('96') + ' cm²: the edge', m('4') + ' cm'],
      ['From ' + m('V = abc') + ' the third edge is', m('V ÷ (ab)')]
    ],
    med: [
      ['A cube of volume ' + m('512') + ' cm³: the edge', m('8') + ' cm'],
      ['A cube of surface area ' + m('150') + ' cm²: the edge', m('5') + ' cm'],
      [m('V = 150') + ' cm³ on a ' + m('5 × 5') + ' base: the height', m('6') + ' cm'],
      ['A box of ' + m('360') + ' cm³ on a ' + m('12 × 6') + ' base: the height', m('5') + ' cm'],
      ['A brick of ' + m('1920') + ' cm³, ' + m('20') + ' cm by ' + m('12') + ' cm: the height', m('8') + ' cm'],
      ['A cube of surface area ' + m('54') + ' cm²: the edge', m('3') + ' cm'],
      ['A cube of volume ' + m('1000') + ' cm³: the edge', m('10') + ' cm']
    ],
    hard: [
      ['A cuboid ' + m('5') + ' by ' + m('4') + ' with ' + m('S = 94') + ' cm²: the third edge', m('3') + ' cm'],
      ['A cuboid ' + m('8') + ' by ' + m('5') + ' with ' + m('S = 132') + ' cm²: the third edge', m('2') + ' cm'],
      ['A cuboid ' + m('10') + ' by ' + m('6') + ' with ' + m('S = 248') + ' cm²: the third edge', m('4') + ' cm'],
      ['A tank ' + m('80 × 50') + ' cm holding ' + m('120') + ' litres: the depth', m('30') + ' cm'],
      ['A pool ' + m('25') + ' m by ' + m('10') + ' m holding ' + m('500') + ' m³: the depth', m('2') + ' m'],
      ['A cuboid ' + m('12') + ' by ' + m('3') + ' has the volume of a cube of edge ' + m('6') + ': its third edge', m('6') + ' cm'],
      ['A cuboid ' + m('6') + ' by ' + m('4') + ' with ' + m('S = 108') + ' cm²: its volume', m('72') + ' cm³']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Check every answer by putting the edge back into the formula it came from.',
  homework: [
    'A cuboid has volume ' + m('180') + ' cm³ and a base ' + m('9') + ' cm by ' + m('5') + ' cm. Find its height.',
    'A cube has volume ' + m('729') + ' cm³. Find its edge.',
    'A cube has surface area ' + m('294') + ' cm². Find its edge.',
    'A tank with base ' + m('60') + ' cm by ' + m('40') + ' cm holds ' + m('96') + ' litres. Find its depth.',
    'A cuboid is ' + m('7') + ' cm by ' + m('3') + ' cm and has surface area ' + m('122') + ' cm². Find the third edge.'
  ]
});

/* ============================== 68 ============================== */
G6_MAT.push({
  id: 'g6-68', stream: 'mat', grade: 6, quarter: 3, lessons: '143–145', hours: 3,
  title: 'Finding the area of one face of a cube and of a cuboid',
  subtitle: 'Six faces in three equal pairs — and what a single one of them is worth.',
  uz: 'Matematika 6, §30', uzPage: 'pp. 414–423',
  cam: 'S7 15 distance, area and volume', camPage: 'Stage 7, pp. 160–166', wb: 'Exercise 15.3',
  objectives: [
    'Name the three different faces of a cuboid and find each area.',
    'Find one face of a cube from its total surface area.',
    'Find a face area from the volume and the perpendicular edge.',
    'Choose which faces a practical question actually needs.'
  ],
  terms: [
    ['Face', 'Yoq', 'Грань'],
    ['Opposite faces', 'Qarama-qarshi yoqlar', 'Противоположные грани'],
    ['Base face', 'Asos yog‘i', 'Основание'],
    ['Side face', 'Yon yoq', 'Боковая грань'],
    ['Lateral surface', 'Yon sirt', 'Боковая поверхность'],
    ['Total surface area', 'To‘la sirt yuzasi', 'Полная площадь поверхности'],
    ['Net', 'Yoyilma', 'Развёртка'],
    ['Open box', 'Qopqog‘i yo‘q quti', 'Открытая коробка']
  ],
  timing: [[25, 'The three pairs of faces'], [30, 'One face of a cube'], [35, 'A face from the volume'], [25, 'Which faces the question needs'], [5, 'Homework']],
  sections: [
    {
      h: 'The three pairs of faces',
      html: `<p>A cuboid with edges ${m('a')}, ${m('b')}, ${m('c')} has only three different faces —
      ${m('ab')}, ${m('bc')} and ${m('ac')} — and each of them appears twice, on opposite sides.</p>
      {{fig:surfaceNet:The net of a cuboid: three pairs of equal rectangles}}
      <div class="tablewrap"><table>
      <thead><tr><th>Cuboid</th><th class="m">ab</th><th class="m">bc</th><th class="m">ac</th><th>Total</th></tr></thead>
      <tbody>
        <tr><td class="m">5 × 4 × 3</td><td class="m">20 cm²</td><td class="m">12 cm²</td><td class="m">15 cm²</td><td class="m">94 cm²</td></tr>
        <tr><td class="m">8 × 5 × 2</td><td class="m">40 cm²</td><td class="m">10 cm²</td><td class="m">16 cm²</td><td class="m">132 cm²</td></tr>
        <tr><td class="m">10 × 6 × 4</td><td class="m">60 cm²</td><td class="m">24 cm²</td><td class="m">40 cm²</td><td class="m">248 cm²</td></tr>
        <tr><td class="m">6 × 4 × 3</td><td class="m">24 cm²</td><td class="m">12 cm²</td><td class="m">18 cm²</td><td class="m">108 cm²</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The largest face uses the two largest edges</div>
      In the ${m('5 × 4 × 3')} cuboid the largest face is ${m('5 · 4 = 20')} and the smallest is
      ${m('4 · 3 = 12')}. Pairing the edges off in the three possible ways is the whole exercise.</div>`
    },
    {
      h: 'One face of a cube',
      html: `<p>All six faces of a cube are the same square, so the total is six of them and one of them is
      the total divided by six.</p>
      ${eq(m('one face = ' + f('S', '6')) + '     and     ' + m('a = ') + ' the square root of that', true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Total surface</th><th>One face</th><th>Edge</th></tr></thead>
      <tbody>
        <tr><td class="m">54 cm²</td><td class="m">9 cm²</td><td class="m">3 cm</td></tr>
        <tr><td class="m">96 cm²</td><td class="m">16 cm²</td><td class="m">4 cm</td></tr>
        <tr><td class="m">150 cm²</td><td class="m">25 cm²</td><td class="m">5 cm</td></tr>
        <tr><td class="m">216 cm²</td><td class="m">36 cm²</td><td class="m">6 cm</td></tr>
        <tr><td class="m">294 cm²</td><td class="m">49 cm²</td><td class="m">7 cm</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Divide by six before taking any root</span>
      The square root of ${m('96')} is not the edge of anything here. ${m('96 ÷ 6 = 16')} is a face, and
      ${m('4')} is the edge. Two steps, always in that order.</div>`
    },
    {
      h: 'A face from the volume',
      html: `<p>Volume is a face multiplied by the edge standing perpendicular to it. Reverse that and a
      face area falls out of a division.</p>
      ${eq(m('face = ' + f('V', 'perpendicular edge')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Volume</th><th>Edge given</th><th>Face perpendicular to it</th></tr></thead>
      <tbody>
        <tr><td class="m">120 cm³</td><td class="m">height 6 cm</td><td class="m">20 cm²</td></tr>
        <tr><td class="m">240 cm³</td><td class="m">height 4 cm</td><td class="m">60 cm²</td></tr>
        <tr><td class="m">84 cm³</td><td class="m">height 4 cm</td><td class="m">21 cm²</td></tr>
        <tr><td class="m">360 cm³</td><td class="m">height 5 cm</td><td class="m">72 cm²</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The units confirm the choice</div>
      ${m('cm³ ÷ cm = cm²')} — a face. Dividing by an area would have given a length instead, which is the
      previous topic, not this one.</div>`
    },
    {
      h: 'Which faces the question needs',
      html: `<p>Practical questions rarely want all six faces. Read what is being covered before adding
      anything up.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Task</th><th>Faces counted</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>wrapping a ${m('20 × 15 × 10')} cm box</td><td>all six</td><td class="m">2(300 + 150 + 200)</td><td class="m">1300 cm²</td></tr>
        <tr><td>card for an open box ${m('8 × 5 × 4')} cm</td><td>five — no lid</td><td class="m">40 + 64 + 40</td><td class="m">144 cm²</td></tr>
        <tr><td>painting the walls of a ${m('5 × 4 × 3')} m room</td><td>four walls</td><td class="m">2(15) + 2(12)</td><td class="m">54 m²</td></tr>
        <tr><td>the same room with the ceiling</td><td>four walls and the top</td><td class="m">54 + 20</td><td class="m">74 m²</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A floor is not painted, a lid may not exist</span>
      Each of these questions has the same four numbers in it and four different answers. The reading, not
      the arithmetic, is what is being tested.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the three different face areas of a ' + m('5 × 4 × 3') + ' cm cuboid, and the total surface area.',
      steps: [
        ['Pair the edges: ' + m('5 · 4 = 20') + ', ' + m('4 · 3 = 12') + ', ' + m('5 · 3 = 15') + '.', ''],
        ['Each appears twice.', ''],
        [m('2(20 + 12 + 15) = 94') + ' cm².', 'The largest face uses the two largest edges ✓']
      ],
      ans: m('20') + ', ' + m('12') + ' and ' + m('15') + ' cm²; total ' + m('94') + ' cm²'
    },
    {
      q: 'A cube has surface area ' + m('294') + ' cm². Find the area of one face and the edge.',
      steps: [
        [m('294 ÷ 6 = 49') + ' cm² for one face.', ''],
        ['That face is a square, so the edge is its square root.', ''],
        [m('7') + ' cm.', 'Check: ' + m('6 · 49 = 294') + ' ✓']
      ],
      ans: m('49') + ' cm² and ' + m('7') + ' cm'
    },
    {
      q: 'How much card is needed for an open box (no lid) ' + m('8') + ' cm by ' + m('5') + ' cm by ' + m('4') + ' cm deep?',
      steps: [
        ['Base: ' + m('8 · 5 = 40') + ' cm².', ''],
        ['Two long walls: ' + m('2 · 8 · 4 = 64') + '. Two short walls: ' + m('2 · 5 · 4 = 40') + '.', ''],
        [m('40 + 64 + 40 = 144') + ' cm².', 'The closed box would need ' + m('184') + ' — one lid more.']
      ],
      ans: m('144') + ' cm²'
    }
  ],
  modelNote: 'Open out a cardboard box along its edges before the lesson; laying the net flat makes the three pairs visible in a way no drawing does.',
  interactive: {
    type: 'quiz',
    title: 'Which face, and how big',
    hint: 'Pair the edges off; for a cube, divide by six first.',
    items: [
      { q: 'The largest face of a ' + m('5 × 4 × 3') + ' cuboid is:', a: [m('12'), m('15'), m('20'), m('60')], c: 2, why: 'The two largest edges.' },
      { q: 'The smallest face of that cuboid is:', a: [m('12'), m('15'), m('20'), m('9')], c: 0, why: m('4 · 3') + '.' },
      { q: 'A cube of surface area ' + m('150') + ' cm² has one face of:', a: [m('25'), m('50'), m('30'), m('12.5')], c: 0, why: m('150 ÷ 6') + '.' },
      { q: 'That cube has edge:', a: [m('25'), m('5'), m('6'), m('12.5')], c: 1, why: 'The root of ' + m('25') + '.' },
      { q: 'A cuboid of volume ' + m('240') + ' cm³ and height ' + m('4') + ' cm has base:', a: [m('60') + ' cm²', m('960') + ' cm²', m('60') + ' cm', m('24') + ' cm²'], c: 0, why: m('cm³ ÷ cm = cm²') + '.' },
      { q: 'Wrapping a ' + m('20 × 15 × 10') + ' cm box needs:', a: [m('650'), m('1300'), m('3000'), m('900')], c: 1, why: 'All six faces.' },
      { q: 'An open box ' + m('8 × 5 × 4') + ' cm needs:', a: [m('184'), m('144'), m('104'), m('40')], c: 1, why: 'Five faces, no lid.' },
      { q: 'The four walls of a ' + m('5 × 4 × 3') + ' m room measure:', a: [m('54') + ' m²', m('74') + ' m²', m('94') + ' m²', m('60') + ' m²'], c: 0, why: m('2 · 15 + 2 · 12') + '.' }
    ]
  },
  quiz: [
    { q: 'A cuboid has how many <i>different</i> face areas?', a: [m('2'), m('3'), m('6'), m('12')], c: 1, why: 'Three pairs.' },
    { q: 'One face of a cube is the total surface:', a: ['times six', 'divided by six', 'squared', 'divided by four'], c: 1, why: 'Six equal squares.' },
    { q: 'The area of a face of an ' + m('8 × 5 × 2') + ' cuboid cannot be:', a: [m('40'), m('16'), m('10'), m('80')], c: 3, why: m('80') + ' is the volume, not a face.' },
    { q: 'Volume divided by an edge gives:', a: ['a length', 'an area', 'a volume', 'nothing'], c: 1, why: m('cm³ ÷ cm = cm²') + '.' },
    { q: 'An open box needs how many faces of card?', a: [m('4'), m('5'), m('6'), m('3')], c: 1, why: 'All but the lid.' },
    { q: 'Painting only the walls of a room leaves out:', a: ['the walls', 'the floor and ceiling', 'one wall', 'nothing'], c: 1, why: 'Read what is covered.' }
  ],
  practice: {
    easy: [
      ['The largest face of a ' + m('5 × 4 × 3') + ' cm cuboid', m('20') + ' cm²'],
      ['The smallest face of that cuboid', m('12') + ' cm²'],
      ['The three faces of an ' + m('8 × 5 × 2') + ' cm cuboid', m('40, 16') + ' and ' + m('10') + ' cm²'],
      ['One face of a cube of edge ' + m('4') + ' cm', m('16') + ' cm²'],
      ['One face of a cube of surface area ' + m('96') + ' cm²', m('16') + ' cm²'],
      ['The number of faces of a cuboid', m('6')],
      ['The faces of a cube are', 'six equal squares']
    ],
    med: [
      ['One face of a cube of surface area ' + m('150') + ' cm²', m('25') + ' cm²'],
      ['One face of a cube of surface area ' + m('294') + ' cm²', m('49') + ' cm²'],
      ['The base of a cuboid of volume ' + m('120') + ' cm³ and height ' + m('6') + ' cm', m('20') + ' cm²'],
      ['The base of a cuboid of volume ' + m('240') + ' cm³ and height ' + m('4') + ' cm', m('60') + ' cm²'],
      ['The three faces of a ' + m('10 × 6 × 4') + ' cm cuboid', m('60, 40') + ' and ' + m('24') + ' cm²'],
      ['The total surface of a ' + m('6 × 4 × 3') + ' cm cuboid', m('108') + ' cm²'],
      ['The base of a cuboid of volume ' + m('360') + ' cm³ and height ' + m('5') + ' cm', m('72') + ' cm²']
    ],
    hard: [
      ['A cube of surface area ' + m('216') + ' cm²: one face and the edge', m('36') + ' cm² and ' + m('6') + ' cm'],
      ['The four walls of a ' + m('5') + ' m by ' + m('4') + ' m by ' + m('3') + ' m room', m('54') + ' m²'],
      ['The same room including the ceiling', m('74') + ' m²'],
      ['Card for an open box ' + m('8 × 5 × 4') + ' cm', m('144') + ' cm²'],
      ['Paper to wrap a ' + m('20 × 15 × 10') + ' cm box', m('1300') + ' cm²'],
      ['A cuboid has faces ' + m('12, 15') + ' and ' + m('20') + ' cm²: its edges', m('3, 4') + ' and ' + m('5') + ' cm'],
      ['…and its volume', m('60') + ' cm³']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'For every task, say first which faces the question is asking about.',
  homework: [
    'List the three different face areas of a ' + m('9 × 4 × 2') + ' cm cuboid and find the total surface area.',
    'A cube has surface area ' + m('384') + ' cm². Find one face and the edge.',
    'A cuboid has volume ' + m('210') + ' cm³ and height ' + m('7') + ' cm. Find the area of its base.',
    'How much card is needed for an open box ' + m('10') + ' cm by ' + m('6') + ' cm by ' + m('4') + ' cm deep?',
    'A room is ' + m('6') + ' m by ' + m('5') + ' m by ' + m('3') + ' m. Find the area of its four walls.'
  ]
});

/* ============================== 69 ============================== */
G6_MAT.push({
  id: 'g6-69', stream: 'mat', grade: 6, quarter: 3, lessons: '146–149', hours: 4,
  title: 'Word problems on volume',
  subtitle: 'Tanks that fill, crates that pack, water that rises, and concrete that has to be paid for.',
  uz: 'Matematika 6, §31', uzPage: 'pp. 424–435',
  cam: 'S7 15 distance, area and volume', camPage: 'Stage 7, pp. 162–170', wb: 'Exercise 15.4–15.5',
  objectives: [
    'Find a filling or emptying time from a capacity and a rate.',
    'Decide how many small solids pack into a larger one.',
    'Use the rise in a water level to find a volume, and the reverse.',
    'Turn a volume into a mass or a cost with a rate per unit volume.'
  ],
  terms: [
    ['Capacity', 'Sig‘im', 'Вместимость'],
    ['To fill', 'To‘ldirmoq', 'Наполнять'],
    ['To empty, to drain', 'Bo‘shatmoq', 'Опорожнять'],
    ['Rate of flow', 'Oqim tezligi', 'Скорость потока'],
    ['Water level', 'Suv sathi', 'Уровень воды'],
    ['Displacement', 'Siqib chiqarish', 'Вытеснение'],
    ['Mass', 'Massa', 'Масса'],
    ['Per cubic metre', 'Bir kub metr uchun', 'За кубический метр']
  ],
  timing: [[30, 'Filling and emptying'], [35, 'How many fit'], [40, 'Rising water and displacement'], [45, 'Volume, mass and cost'], [10, 'Homework']],
  sections: [
    {
      h: 'Filling and emptying',
      html: `<p>Every one of these problems has the same two steps: find the volume in litres, then divide by
      the rate. The work is in the units, not the arithmetic.</p>
      {{fig:prismVolume:Base area times height — the volume every tank problem starts from}}
      <div class="tablewrap"><table>
      <thead><tr><th>Tank</th><th>Capacity</th><th>Rate</th><th>Time</th></tr></thead>
      <tbody>
        <tr><td class="m">60 × 40 × 50 cm</td><td class="m">120 litres</td><td class="m">8 l/min</td><td class="m">15 min</td></tr>
        <tr><td class="m">1 m × 80 × 50 cm</td><td class="m">400 litres</td><td class="m">10 l/min</td><td class="m">40 min</td></tr>
        <tr><td>a ${m('200')}-litre drum</td><td class="m">200 litres</td><td class="m">5 l/min</td><td class="m">40 min</td></tr>
        <tr><td>a ${m('90')}-litre tank draining</td><td class="m">90 litres</td><td class="m">3 l/min</td><td class="m">30 min</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The metre in the second row is the trap</span>
      ${m('1')} m is ${m('100')} cm, so the volume is ${m('100 · 80 · 50 = 400 000')} cm³. Leaving the
      ${m('1')} in place gives ${m('4000')} cm³ — four litres, for a tank a person could sit in.</div>`
    },
    {
      h: 'How many fit',
      html: `<p>When the small solid divides the large one exactly along each edge, count along each edge and
      multiply the three counts.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Container</th><th>Item</th><th>Along each edge</th><th>How many</th></tr></thead>
      <tbody>
        <tr><td class="m">40 × 32 × 30 cm</td><td class="m">10 × 8 × 5 cm</td><td class="m">4, 4, 6</td><td class="m">96</td></tr>
        <tr><td>cube of edge ${m('12')} cm</td><td>cube of edge ${m('3')} cm</td><td class="m">4, 4, 4</td><td class="m">64</td></tr>
        <tr><td class="m">10 × 8 × 6 cm</td><td>cube of edge ${m('2')} cm</td><td class="m">5, 4, 3</td><td class="m">60</td></tr>
        <tr><td class="m">1 m × 40 × 24 cm</td><td class="m">20 × 10 × 8 cm</td><td class="m">5, 4, 3</td><td class="m">60</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Dividing the volumes is only an upper limit</div>
      ${m('38 400 ÷ 400 = 96')} happens to be right in the first row because the boxes fit along every
      edge. If they did not, the volume division would still give ${m('96')} and the true answer would be
      smaller — so count along the edges, and use the division only as a check.</div>`
    },
    {
      h: 'Rising water and displacement',
      html: `<p>Water in a tank is a cuboid whose base is the tank's base and whose height is the depth. Two
      questions follow at once.</p>
      ${eq(m('volume of water = base area × depth') + '     so     ' + m('depth = ' + f('volume', 'base area')), true)}
      <div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>water ${m('6')} cm deep on a ${m('40 × 25')} cm base</td><td class="m">1000 · 6</td><td class="m">6 litres</td></tr>
        <tr><td>${m('3')} litres poured onto a ${m('30 × 20')} cm base</td><td class="m">3000 ÷ 600</td><td class="m">5 cm deep</td></tr>
        <tr><td>a stone raises ${m('6')} cm to ${m('7.5')} cm on a ${m('40 × 25')} base</td><td class="m">1000 · 1.5</td><td class="m">1500 cm³ of stone</td></tr>
        <tr><td>a cube of edge ${m('5')} cm sunk in a ${m('25 × 20')} tank</td><td class="m">125 ÷ 500</td><td class="m">a rise of 0.25 cm</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">A sunken object takes exactly its own volume of room</div>
      That is why the rise in level, multiplied by the base area, gives the volume of an object of any
      shape at all — the oldest measuring trick in mathematics.</div>`
    },
    {
      h: 'Volume, mass and cost',
      html: `<p>A rate per unit volume turns the volume into whatever the question is really about.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Object</th><th>Volume</th><th>Rate</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>an iron block ${m('10 × 5 × 2')} cm</td><td class="m">100 cm³</td><td class="m">7.8 g per cm³</td><td class="m">780 g</td></tr>
        <tr><td>a full ${m('120')}-litre tank of water</td><td class="m">120 litres</td><td class="m">1 kg per litre</td><td class="m">120 kg</td></tr>
        <tr><td>a concrete slab ${m('4 × 3 × 0.1')} m</td><td class="m">1.2 m³</td><td class="m">2.4 t per m³</td><td class="m">2.88 t</td></tr>
        <tr><td>sand for a pit ${m('2 × 1.5 × 0.4')} m</td><td class="m">1.2 m³</td><td class="m">90 000 so‘m per m³</td><td class="m">108 000 so‘m</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Match the unit of the rate to the unit of the volume</span>
      A rate in ${m('g')} per ${m('cm³')} needs the volume in ${m('cm³')}; a rate per ${m('m³')} needs
      ${m('m³')}. Converting the volume first is always safer than trying to convert the rate.</div>`
    },
    {
      h: 'Mixed problems',
      html: `<p>Longer questions simply chain these steps together.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Steps</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>a ${m('50 × 40 × 30')} cm tank filled to two-thirds</td><td class="m">60 · ${f('2', '3')}</td><td class="m">40 litres</td></tr>
        <tr><td>two taps, ${m('6')} and ${m('4')} l/min, on a ${m('120')}-litre tank</td><td class="m">120 ÷ 10</td><td class="m">12 min</td></tr>
        <tr><td>a ${m('300')}-litre tank filling at ${m('12')} and leaking at ${m('2')}</td><td class="m">300 ÷ 10</td><td class="m">30 min</td></tr>
        <tr><td>a ${m('120')}-litre tank half full, topped up at ${m('4')} l/min</td><td class="m">60 ÷ 4</td><td class="m">15 min</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Two taps together add their rates</div>
      Exactly as two people working together add their rates of work. A leak subtracts, which is the same
      idea with a sign.</div>`
    }
  ],
  examples: [
    {
      q: 'A tank measures ' + m('60') + ' cm by ' + m('40') + ' cm by ' + m('50') + ' cm. A tap delivers ' + m('8') + ' litres a minute. How long does it take to fill?',
      steps: [
        [m('60 · 40 · 50 = 120 000') + ' cm³.', ''],
        ['That is ' + m('120') + ' litres.', ''],
        [m('120 ÷ 8 = 15') + ' minutes.', 'Check: ' + m('8 · 15 = 120') + ' ✓']
      ],
      ans: m('15') + ' minutes'
    },
    {
      q: 'How many boxes ' + m('10') + ' cm by ' + m('8') + ' cm by ' + m('5') + ' cm fit into a crate ' + m('40') + ' cm by ' + m('32') + ' cm by ' + m('30') + ' cm?',
      steps: [
        ['Along the edges: ' + m('40 ÷ 10 = 4') + ', ' + m('32 ÷ 8 = 4') + ', ' + m('30 ÷ 5 = 6') + '.', ''],
        [m('4 · 4 · 6') + '.', ''],
        [m('= 96') + ' boxes.', 'Volume check: ' + m('38 400 ÷ 400 = 96') + ' ✓']
      ],
      ans: m('96') + ' boxes'
    },
    {
      q: 'A tank with base ' + m('40') + ' cm by ' + m('25') + ' cm holds water ' + m('6') + ' cm deep. A stone is lowered in and the level rises to ' + m('7.5') + ' cm. Find the volume of the stone.',
      steps: [
        ['Base area ' + m('40 · 25 = 1000') + ' cm².', ''],
        ['The rise is ' + m('1.5') + ' cm.', ''],
        [m('1000 · 1.5 = 1500') + ' cm³.', 'The stone takes exactly its own volume of room.']
      ],
      ans: m('1500') + ' cm³'
    }
  ],
  modelNote: 'Do the displacement question with a real jar and a stone; the number on the board becomes a measurement the class has just watched being made.',
  interactive: {
    type: 'quiz',
    title: 'Tanks, crates and stones',
    hint: 'Get everything into one unit before dividing.',
    items: [
      { q: 'A ' + m('60 × 40 × 50') + ' cm tank holds:', a: [m('12') + ' litres', m('120') + ' litres', m('1200') + ' litres', m('120 000') + ' litres'], c: 1, why: m('120 000') + ' cm³.' },
      { q: 'Filling it at ' + m('8') + ' l/min takes:', a: [m('12'), m('15'), m('20'), m('960')], c: 1, why: m('120 ÷ 8') + '.' },
      { q: 'A ' + m('1') + ' m by ' + m('80') + ' cm by ' + m('50') + ' cm tank holds:', a: [m('4') + ' litres', m('40') + ' litres', m('400') + ' litres', m('4000') + ' litres'], c: 2, why: 'The metre becomes ' + m('100') + ' cm.' },
      { q: 'Cubes of edge ' + m('3') + ' cm in a cube of edge ' + m('12') + ' cm:', a: [m('4'), m('16'), m('64'), m('48')], c: 2, why: m('4 · 4 · 4') + '.' },
      { q: m('3') + ' litres on a ' + m('30 × 20') + ' cm base is deep:', a: [m('5') + ' cm', m('50') + ' cm', m('0.5') + ' cm', m('6') + ' cm'], c: 0, why: m('3000 ÷ 600') + '.' },
      { q: 'A rise of ' + m('1.5') + ' cm on a ' + m('1000') + ' cm² base means an object of:', a: [m('150') + ' cm³', m('1500') + ' cm³', m('15') + ' cm³', m('666') + ' cm³'], c: 1, why: 'Base area times rise.' },
      { q: 'Concrete at ' + m('2.4') + ' t per m³ in a ' + m('1.2') + ' m³ slab weighs:', a: [m('2') + ' t', m('2.88') + ' t', m('3.6') + ' t', m('0.5') + ' t'], c: 1, why: m('2.4 · 1.2') + '.' },
      { q: 'Taps of ' + m('6') + ' and ' + m('4') + ' l/min fill ' + m('120') + ' litres in:', a: [m('10'), m('12'), m('20'), m('24')], c: 1, why: 'The rates add to ' + m('10') + '.' }
    ]
  },
  quiz: [
    { q: 'A capacity in litres comes from a volume in:', a: ['cm², divided by 1000', 'cm³, divided by 1000', 'cm, times 1000', 'm³, times 100'], c: 1, why: m('1000') + ' cm³ is a litre.' },
    { q: 'To find a filling time you:', a: ['multiply capacity by rate', 'divide capacity by rate', 'add them', 'divide rate by capacity'], c: 1, why: 'Litres ÷ litres per minute.' },
    { q: 'The number of small boxes that fit is found by:', a: ['dividing the volumes only', 'counting along each edge', 'adding the edges', 'guessing'], c: 1, why: 'The volume division is only an upper limit.' },
    { q: 'A sunken object raises the water by:', a: ['its surface area', 'its own volume ÷ the base area', 'its mass', 'its height'], c: 1, why: 'It displaces its own volume.' },
    { q: 'A rate of ' + m('7.8') + ' g per cm³ needs the volume in:', a: [m('m³'), 'litres', m('cm³'), m('cm²')], c: 2, why: 'Match the units of the rate.' },
    { q: 'A tank filling at ' + m('12') + ' and leaking at ' + m('2') + ' l/min gains:', a: [m('14'), m('10'), m('6'), m('24')], c: 1, why: 'A leak subtracts.' }
  ],
  practice: {
    easy: [
      ['The capacity of a ' + m('60 × 40 × 50') + ' cm tank', m('120') + ' litres'],
      ['A ' + m('120') + '-litre tank filled at ' + m('8') + ' l/min', m('15') + ' min'],
      ['A ' + m('200') + '-litre drum filled at ' + m('5') + ' l/min', m('40') + ' min'],
      ['A ' + m('90') + '-litre tank draining at ' + m('3') + ' l/min', m('30') + ' min'],
      ['Cubes of edge ' + m('3') + ' cm in a cube of edge ' + m('12') + ' cm', m('64')],
      ['Water ' + m('6') + ' cm deep on a ' + m('40 × 25') + ' cm base', m('6') + ' litres'],
      ['The mass of ' + m('1') + ' litre of water', m('1') + ' kg']
    ],
    med: [
      ['The capacity of a ' + m('1') + ' m by ' + m('80') + ' cm by ' + m('50') + ' cm tank', m('400') + ' litres'],
      ['…filled at ' + m('10') + ' l/min', m('40') + ' min'],
      ['Boxes ' + m('10 × 8 × 5') + ' cm in a crate ' + m('40 × 32 × 30') + ' cm', m('96')],
      ['Cubes of edge ' + m('2') + ' cm in a ' + m('10 × 8 × 6') + ' cm box', m('60')],
      [m('3') + ' litres poured onto a ' + m('30 × 20') + ' cm base: the depth', m('5') + ' cm'],
      ['An iron block ' + m('10 × 5 × 2') + ' cm at ' + m('7.8') + ' g per cm³', m('780') + ' g'],
      ['The water in a full ' + m('120') + '-litre tank', m('120') + ' kg']
    ],
    hard: [
      ['A stone raises ' + m('6') + ' cm to ' + m('7.5') + ' cm on a ' + m('40 × 25') + ' base: its volume', m('1500') + ' cm³'],
      ['A cube of edge ' + m('5') + ' cm sunk in a ' + m('25 × 20') + ' cm tank: the rise', m('0.25') + ' cm'],
      ['A concrete slab ' + m('4') + ' m by ' + m('3') + ' m by ' + m('0.1') + ' m at ' + m('2.4') + ' t per m³', m('2.88') + ' tonnes'],
      ['Sand at ' + m('90 000') + ' so‘m per m³ for a pit ' + m('2 × 1.5 × 0.4') + ' m', m('108 000') + ' so‘m'],
      ['A ' + m('50 × 40 × 30') + ' cm tank filled to two-thirds', m('40') + ' litres'],
      ['Taps of ' + m('6') + ' and ' + m('4') + ' l/min on a ' + m('120') + '-litre tank', m('12') + ' min'],
      ['A ' + m('300') + '-litre tank filling at ' + m('12') + ' and leaking at ' + m('2') + ' l/min', m('30') + ' min']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Convert every length to one unit before the first multiplication, and write the unit on every line.',
  homework: [
    'A tank is ' + m('70') + ' cm by ' + m('50') + ' cm by ' + m('40') + ' cm. Find its capacity in litres.',
    'That tank is filled by a tap delivering ' + m('7') + ' litres a minute. How long does it take?',
    'How many cubes of edge ' + m('4') + ' cm fit into a box ' + m('20') + ' cm by ' + m('16') + ' cm by ' + m('12') + ' cm?',
    m('4.5') + ' litres of water is poured into a tank with base ' + m('45') + ' cm by ' + m('20') + ' cm. How deep is the water?',
    'Concrete weighs ' + m('2.4') + ' tonnes per m³. Find the mass of a slab ' + m('5') + ' m by ' + m('2') + ' m by ' + m('0.2') + ' m.'
  ]
});

/* ============================== 70 ============================== */
G6_MAT.push({
  id: 'g6-70', stream: 'mat', grade: 6, quarter: 3, lessons: '150', hours: 1,
  title: 'Think — volume in context',
  subtitle: 'The same volume, six different boxes: which one uses the least card?',
  uz: 'Matematika 6, o‘ylab ko‘r', uzPage: 'pp. 436–438',
  cam: 'S7 15 in context', camPage: 'Stage 7, pp. 168–170', wb: 'Investigation 15',
  objectives: [
    'Find every cuboid with whole-number edges and a given volume.',
    'Compare their surface areas and identify the most economical.',
    'State what happens to volume and surface area when every edge is doubled.',
    'Turn the saving into a quantity of material and a cost.'
  ],
  terms: [
    ['Packaging', 'Qadoqlash', 'Упаковка'],
    ['Economical', 'Tejamkor', 'Экономичный'],
    ['Material', 'Material', 'Материал'],
    ['Whole-number edge', 'Butun sonli qirra', 'Целое ребро'],
    ['Scale factor', 'O‘lchov koeffitsiyenti', 'Коэффициент подобия'],
    ['To conjecture', 'Taxmin qilmoq', 'Выдвигать гипотезу'],
    ['Saving', 'Tejamkorlik', 'Экономия'],
    ['Per unit', 'Bir birlikka', 'На единицу']
  ],
  timing: [[10, 'The packaging problem'], [10, 'Testing the boxes'], [12, 'What doubling does'], [8, 'Writing the report']],
  sections: [
    {
      h: 'The packaging problem',
      html: `<p>A factory must pack ${m('216')} cm³ of tea into a cuboid box with whole-number edges in
      centimetres. Every box holds the same tea. They do not use the same amount of card.</p>
      <div class="keybox"><div class="klabel">The question</div>
      Among all cuboids of volume ${m('216')} cm³ with whole-number edges, which uses the least card — and
      is there a pattern that would let you answer the same question for any volume?</div>
      <p>Start by listing boxes. Each one is three whole numbers whose product is ${m('216')}.</p>`
    },
    {
      h: 'Testing the boxes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Box</th><th>Volume</th><th>The three faces</th><th>Card used</th></tr></thead>
      <tbody>
        <tr><td class="m">6 × 6 × 6</td><td class="m">216 cm³</td><td class="m">36, 36, 36</td><td class="m">216 cm²</td></tr>
        <tr><td class="m">9 × 6 × 4</td><td class="m">216 cm³</td><td class="m">54, 24, 36</td><td class="m">228 cm²</td></tr>
        <tr><td class="m">8 × 9 × 3</td><td class="m">216 cm³</td><td class="m">72, 27, 24</td><td class="m">246 cm²</td></tr>
        <tr><td class="m">12 × 6 × 3</td><td class="m">216 cm³</td><td class="m">72, 18, 36</td><td class="m">252 cm²</td></tr>
        <tr><td class="m">12 × 9 × 2</td><td class="m">216 cm³</td><td class="m">108, 18, 24</td><td class="m">300 cm²</td></tr>
        <tr><td class="m">216 × 1 × 1</td><td class="m">216 cm³</td><td class="m">216, 1, 216</td><td class="m">866 cm²</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The conjecture</div>
      The nearer the box is to a cube, the less card it uses; the long thin box is by far the worst. The
      cube is the cheapest cuboid for any given volume.</div>`
    },
    {
      h: 'What doubling does',
      html: `<p>Now change the size instead of the shape. Double every edge of a cube and both quantities
      grow — but not at the same rate.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Cube</th><th>Volume</th><th>Surface area</th><th>Card per cm³</th></tr></thead>
      <tbody>
        <tr><td>edge ${m('3')} cm</td><td class="m">27 cm³</td><td class="m">54 cm²</td><td class="m">2</td></tr>
        <tr><td>edge ${m('6')} cm</td><td class="m">216 cm³</td><td class="m">216 cm²</td><td class="m">1</td></tr>
        <tr><td>edge ${m('12')} cm</td><td class="m">1728 cm³</td><td class="m">864 cm²</td><td class="m">0.5</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Volume grows faster than surface area</span>
      Doubling the edges multiplies the volume by ${m('8')} and the surface area by only ${m('4')}. That is
      why a large packet is cheaper per gram than a small one — and why a small animal loses heat faster
      than a large one.</div>`
    },
    {
      h: 'Writing the report',
      html: `<p>Turn the finding into money, which is the form a factory understands.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Quantity</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>card saved per box</td><td class="m">252 − 216</td><td class="m">36 cm²</td></tr>
        <tr><td>cost saved per box at ${m('2')} so‘m per cm²</td><td class="m">36 · 2</td><td class="m">72 so‘m</td></tr>
        <tr><td>card saved on ${m('10 000')} boxes</td><td class="m">36 · 10 000</td><td class="m">36 m²</td></tr>
        <tr><td>money saved on ${m('10 000')} boxes</td><td class="m">72 · 10 000</td><td class="m">720 000 so‘m</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">And why is the cube not always used?</div>
      Because boxes must stand on shelves, be gripped by a hand, and hold a shape that is not itself a
      cube. A good report says what the mathematics recommends <i>and</i> what overrules it.</div>`
    }
  ],
  examples: [
    {
      q: 'Compare the card used by a ' + m('12 × 6 × 3') + ' box and a ' + m('6 × 6 × 6') + ' box of the same volume.',
      steps: [
        ['Both hold ' + m('216') + ' cm³.', ''],
        [m('2(72 + 18 + 36) = 252') + ' cm² against ' + m('6 · 36 = 216') + ' cm².', ''],
        ['The cube saves ' + m('36') + ' cm² per box.', 'About ' + m('14') + '% less card ✓']
      ],
      ans: m('252') + ' against ' + m('216') + ' cm²'
    },
    {
      q: 'Find the card used by a ' + m('9 × 6 × 4') + ' box.',
      steps: [
        ['The three faces: ' + m('54, 24, 36') + '.', ''],
        [m('2(54 + 24 + 36)') + '.', ''],
        [m('= 228') + ' cm².', 'Between the cube and the ' + m('12 × 6 × 3') + ' box ✓']
      ],
      ans: m('228') + ' cm²'
    },
    {
      q: 'A factory makes ' + m('10 000') + ' boxes a day. How much card does the cube save, in square metres?',
      steps: [
        [m('36') + ' cm² per box.', ''],
        [m('36 · 10 000 = 360 000') + ' cm².', ''],
        [m('360 000 ÷ 10 000 = 36') + ' m².', m('1') + ' m² is ' + m('10 000') + ' cm².']
      ],
      ans: m('36') + ' m² a day'
    }
  ],
  modelNote: 'Set k = 2 in the model and read the three multipliers aloud: 2, 4, 8. That single line is the whole of the third section.',
  interactive: {
    type: 'scaleSolid',
    title: 'Lengths, areas and volumes under a scale factor',
    hint: 'Set k = 2 and read the three multipliers: lengths ×2, areas ×4, volumes ×8.'
  },
  quiz: [
    { q: 'Among cuboids of a fixed volume, the least card is used by:', a: ['the longest', 'the cube', 'the flattest', 'they are all equal'], c: 1, why: 'The nearer to a cube, the better.' },
    { q: 'A ' + m('216 × 1 × 1') + ' box uses:', a: [m('216') + ' cm²', m('433') + ' cm²', m('866') + ' cm²', m('218') + ' cm²'], c: 2, why: 'Two enormous faces.' },
    { q: 'Doubling every edge multiplies the volume by:', a: [m('2'), m('4'), m('6'), m('8')], c: 3, why: 'Three lengths doubled.' },
    { q: 'It multiplies the surface area by:', a: [m('2'), m('4'), m('6'), m('8')], c: 1, why: 'Two lengths doubled.' },
    { q: 'Card per cm³ for a large cube compared with a small one is:', a: ['larger', 'smaller', 'the same', 'zero'], c: 1, why: 'Volume grows faster.' },
    { q: 'The cube is not always used because:', a: ['it is hard to make', 'shelves and contents have shapes too', 'it uses more card', 'it holds less'], c: 1, why: 'Practice overrules the optimum.' }
  ],
  practice: {
    easy: [
      ['The volume of a ' + m('6 × 6 × 6') + ' box', m('216') + ' cm³'],
      ['The card used by that box', m('216') + ' cm²'],
      ['The card used by a ' + m('12 × 6 × 3') + ' box', m('252') + ' cm²'],
      ['The card used by a ' + m('9 × 6 × 4') + ' box', m('228') + ' cm²'],
      ['Which of those three is the most economical?', 'The cube'],
      ['The volume of a ' + m('9 × 6 × 4') + ' box', m('216') + ' cm³'],
      ['The card used by a ' + m('216 × 1 × 1') + ' box', m('866') + ' cm²']
    ],
    med: [
      ['The card used by an ' + m('8 × 9 × 3') + ' box', m('246') + ' cm²'],
      ['The card used by a ' + m('12 × 9 × 2') + ' box', m('300') + ' cm²'],
      ['The most economical shape for a fixed volume', 'The cube'],
      ['Order ' + m('6 × 6 × 6') + ', ' + m('9 × 6 × 4') + ', ' + m('12 × 6 × 3') + ' by card used', m('216, 228, 252') + ' cm²'],
      ['The volume of a cube of edge ' + m('3') + ' cm', m('27') + ' cm³'],
      ['The surface area of a cube of edge ' + m('3') + ' cm', m('54') + ' cm²'],
      ['The surface area of a cube of edge ' + m('6') + ' cm', m('216') + ' cm²']
    ],
    hard: [
      ['Doubling every edge multiplies the volume by', m('8')],
      ['…and the surface area by', m('4')],
      ['A cube of edge ' + m('10') + ' cm: its volume and surface area', m('1000') + ' cm³ and ' + m('600') + ' cm²'],
      ['Card per cm³ for cubes of edge ' + m('3') + ' and ' + m('6'), m('2') + ' against ' + m('1')],
      ['At ' + m('2') + ' so‘m per cm², the cube saves against ' + m('12 × 6 × 3'), m('72') + ' so‘m a box'],
      ['On ' + m('10 000') + ' boxes, the card saved', m('36') + ' m²'],
      ['Why is a cube not always used?', 'Shelves, handling and the shape of the contents']
    ]
  },
  hwTitle: 'Homework — the report',
  hwNote: 'One page: the table of boxes, the conjecture, the doubling result, and the cost in so‘m.',
  homework: [
    'List every cuboid with whole-number edges and volume ' + m('64') + ' cm³, and find the card each uses.',
    'State which is the most economical and whether it agrees with the conjecture.',
    'Work out what happens to the volume and the surface area of a cube when every edge is trebled.',
    'A factory makes ' + m('5000') + ' boxes a day. Find the card saved by the best shape, in m².',
    'Write two sentences on why a factory might still not choose the best shape.'
  ]
});

/* ============================== 71 ============================== */
G6_MAT.push({
  id: 'g6-71', stream: 'mat', grade: 6, quarter: 3, lessons: '151–154', hours: 4,
  title: 'Revision — mensuration of solids',
  subtitle: 'Every formula of the block, forwards and backwards, with the units that decide the marks.',
  uz: 'Matematika 6, takrorlash', uzPage: 'pp. 439–448',
  cam: 'S7 15 consolidation', camPage: 'Stage 7, pp. 156–172', wb: 'Review 15',
  objectives: [
    'State and use every formula of the block from memory.',
    'Answer forward questions — volume and surface area from the edges.',
    'Answer reverse questions — an edge or a face from the volume or the surface area.',
    'Name the five mistakes that lose the most marks and avoid each one.'
  ],
  terms: [
    ['Volume', 'Hajm', 'Объём'],
    ['Surface area', 'Sirt yuzasi', 'Площадь поверхности'],
    ['Cuboid', 'Parallelepiped', 'Прямоугольный параллелепипед'],
    ['Cube', 'Kub', 'Куб'],
    ['Base area', 'Asos yuzasi', 'Площадь основания'],
    ['Capacity', 'Sig‘im', 'Вместимость'],
    ['Displacement', 'Siqib chiqarish', 'Вытеснение'],
    ['Unit', 'Birlik', 'Единица измерения']
  ],
  timing: [[30, 'The formulae of the block'], [30, 'Forward questions'], [35, 'Reverse questions'], [35, 'Context and units'], [25, 'The mistakes that cost marks'], [5, 'Homework']],
  sections: [
    {
      h: 'The formulae of the block',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Wanted</th><th>For a cuboid</th><th>For a cube</th></tr></thead>
      <tbody>
        <tr><td>volume</td><td class="m">V = abc</td><td class="m">V = a³</td></tr>
        <tr><td>surface area</td><td class="m">S = 2(ab + bc + ac)</td><td class="m">S = 6a²</td></tr>
        <tr><td>one face</td><td class="m">ab, bc or ac</td><td class="m">${f('S', '6')}</td></tr>
        <tr><td>a missing edge</td><td class="m">${f('V', 'ab')}</td><td>the cube root of ${m('V')}</td></tr>
        <tr><td>the edge from ${m('S')}</td><td>solve ${m('2(ab + bc + ac) = S')}</td><td>the square root of ${f('S', '6')}</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Two conversions carry most of the marks</div>
      ${m('1')} litre ${m('= 1000')} cm³, and ${m('1')} m³ ${m('= 1 000 000')} cm³ ${m('= 1000')} litres.
      Everything else in the block is a multiplication or its reverse.</div>`
    },
    {
      h: 'Forward questions',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Solid</th><th>Volume</th><th>The three faces</th><th>Surface area</th></tr></thead>
      <tbody>
        <tr><td class="m">5 × 4 × 3 cm</td><td class="m">60 cm³</td><td class="m">20, 12, 15</td><td class="m">94 cm²</td></tr>
        <tr><td class="m">8 × 5 × 2 cm</td><td class="m">80 cm³</td><td class="m">40, 10, 16</td><td class="m">132 cm²</td></tr>
        <tr><td class="m">10 × 6 × 4 cm</td><td class="m">240 cm³</td><td class="m">60, 24, 40</td><td class="m">248 cm²</td></tr>
        <tr><td>cube, edge ${m('4')} cm</td><td class="m">64 cm³</td><td class="m">16 each</td><td class="m">96 cm²</td></tr>
        <tr><td>cube, edge ${m('7')} cm</td><td class="m">343 cm³</td><td class="m">49 each</td><td class="m">294 cm²</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Three numbers multiplied, three products doubled</div>
      Every forward question in the block is one of those two sentences. Write the three faces on their own
      line and the surface area cannot go wrong.</div>`
    },
    {
      h: 'Reverse questions',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Given</th><th>Wanted</th><th>Working</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td class="m">V = 120, base 5 × 4</td><td>the height</td><td class="m">120 ÷ 20</td><td class="m">6 cm</td></tr>
        <tr><td class="m">V = 240, base 10 × 6</td><td>the height</td><td class="m">240 ÷ 60</td><td class="m">4 cm</td></tr>
        <tr><td>cube, ${m('V = 512')}</td><td>the edge</td><td class="m">a³ = 512</td><td class="m">8 cm</td></tr>
        <tr><td>cube, ${m('S = 150')}</td><td>the edge</td><td class="m">150 ÷ 6 = 25</td><td class="m">5 cm</td></tr>
        <tr><td class="m">a = 5, b = 4, S = 94</td><td>the third edge</td><td class="m">40 + 18c = 94</td><td class="m">3 cm</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The direction decides the operation</span>
      Forward is multiplication; reverse is division, a root, or a linear equation. Deciding which of the
      two a question is before touching the numbers saves more marks than any amount of arithmetic care.</div>`
    },
    {
      h: 'Context and units',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Problem</th><th>Steps</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>a ${m('60 × 40 × 50')} cm tank, in litres</td><td class="m">120 000 ÷ 1000</td><td class="m">120 litres</td></tr>
        <tr><td>…filled at ${m('8')} litres a minute</td><td class="m">120 ÷ 8</td><td class="m">15 min</td></tr>
        <tr><td>water ${m('6')} cm deep on a ${m('40 × 25')} cm base</td><td class="m">1000 · 6</td><td class="m">6 litres</td></tr>
        <tr><td>a stone raising that level by ${m('1.5')} cm</td><td class="m">1000 · 1.5</td><td class="m">1500 cm³</td></tr>
        <tr><td>a ${m('4 × 3 × 0.1')} m slab at ${m('2.4')} t per m³</td><td class="m">1.2 · 2.4</td><td class="m">2.88 t</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Convert first, calculate second</div>
      Every context question in this block is a formula from the first section with a unit conversion in
      front of it. Doing the conversion first turns a hard question into an easy one.</div>`
    },
    {
      h: 'The mistakes that cost marks',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Mistake</th><th>Looks like</th><th>Correct</th></tr></thead>
      <tbody>
        <tr><td>a metre left as ${m('1')}</td><td class="m">1 · 80 · 50 = 4000 cm³</td><td class="m">100 · 80 · 50 = 400 000 cm³</td></tr>
        <tr><td>a cube edge by dividing by three</td><td class="m">27 ÷ 3 = 9</td><td class="m">a³ = 27, a = 3</td></tr>
        <tr><td>the root taken before the six</td><td class="m">√96</td><td class="m">√(96 ÷ 6) = 4</td></tr>
        <tr><td>litres divided by an area</td><td class="m">120 ÷ 4000</td><td class="m">120 000 ÷ 4000 = 30 cm</td></tr>
        <tr><td>a volume written in ${m('cm²')}</td><td class="m">60 cm²</td><td class="m">60 cm³</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">Four of the five are units, not arithmetic</span>
      Which is the good news: reading the units off the working, line by line, removes almost every lost
      mark in this block.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the volume and the surface area of a cuboid ' + m('10') + ' cm by ' + m('6') + ' cm by ' + m('4') + ' cm.',
      steps: [
        [m('V = 10 · 6 · 4 = 240') + ' cm³.', ''],
        ['Faces: ' + m('60, 24, 40') + '.', ''],
        [m('S = 2 · 124 = 248') + ' cm².', 'Volume cubed, area squared ✓']
      ],
      ans: m('240') + ' cm³ and ' + m('248') + ' cm²'
    },
    {
      q: 'A cube has surface area ' + m('150') + ' cm². Find its edge and its volume.',
      steps: [
        [m('150 ÷ 6 = 25') + ' cm² for one face.', ''],
        ['The edge is ' + m('5') + ' cm.', ''],
        [m('V = 5³ = 125') + ' cm³.', 'Check: ' + m('6 · 25 = 150') + ' ✓']
      ],
      ans: m('5') + ' cm and ' + m('125') + ' cm³'
    },
    {
      q: 'A tank with base ' + m('80') + ' cm by ' + m('50') + ' cm holds ' + m('120') + ' litres when full. Find its depth.',
      steps: [
        [m('120') + ' litres is ' + m('120 000') + ' cm³.', ''],
        ['Base area ' + m('80 · 50 = 4000') + ' cm².', ''],
        [m('120 000 ÷ 4000 = 30') + ' cm.', 'Convert first, divide second.']
      ],
      ans: m('30') + ' cm'
    }
  ],
  modelNote: 'Give the class the five-row mistake table before the revision problems, not after; most of them recognise at least one of their own habits in it.',
  interactive: {
    type: 'quiz',
    title: 'Revision of the solids block',
    hint: 'Decide first whether the question runs forwards or backwards.',
    items: [
      { q: 'The volume of a ' + m('10 × 6 × 4') + ' cm cuboid:', a: [m('124'), m('240'), m('248'), m('20')], c: 1, why: 'Three edges multiplied.' },
      { q: 'Its surface area:', a: [m('124'), m('240'), m('248'), m('480')], c: 2, why: m('2(60 + 24 + 40)') + '.' },
      { q: 'A cube of surface area ' + m('150') + ' cm² has edge:', a: [m('5'), m('25'), m('6'), m('12.5')], c: 0, why: 'Divide by six, then take the root.' },
      { q: 'A cuboid of volume ' + m('120') + ' cm³ on a ' + m('5 × 4') + ' base is high:', a: [m('6') + ' cm', m('24') + ' cm', m('20') + ' cm', m('4') + ' cm'], c: 0, why: m('120 ÷ 20') + '.' },
      { q: 'A cube of volume ' + m('512') + ' cm³ has edge:', a: [m('7'), m('8'), m('9'), m('171')], c: 1, why: m('8³') + '.' },
      { q: 'A ' + m('60 × 40 × 50') + ' cm tank holds:', a: [m('12'), m('120'), m('1200'), m('120 000')], c: 1, why: 'Litres, not cm³.' },
      { q: 'A stone raising the level ' + m('1.5') + ' cm on a ' + m('1000') + ' cm² base has volume:', a: [m('1500') + ' cm³', m('150') + ' cm³', m('666') + ' cm³', m('1.5') + ' cm³'], c: 0, why: 'Base area times rise.' },
      { q: 'A volume must be written in:', a: [m('cm'), m('cm²'), m('cm³'), 'any unit'], c: 2, why: 'Three lengths multiplied.' }
    ]
  },
  quiz: [
    { q: 'The surface area of a cuboid is:', a: [m('abc'), m('2(ab + bc + ac)'), m('6a²'), m('ab')], c: 1, why: 'Three pairs of faces.' },
    { q: 'The edge of a cube from its volume is:', a: [m('V ÷ 3'), 'the cube root of ' + m('V'), 'the square root of ' + m('V'), m('V ÷ 6')], c: 1, why: m('V = a³') + '.' },
    { q: 'The edge of a cube from ' + m('S') + ' is the square root of:', a: [m('S'), m('S ÷ 6'), m('6S'), m('S ÷ 2')], c: 1, why: 'One face first.' },
    { q: m('1') + ' m³ equals:', a: [m('1000') + ' cm³', m('10 000') + ' cm³', m('1 000 000') + ' cm³', m('100') + ' cm³'], c: 2, why: m('100³') + '.' },
    { q: 'A missing edge from the volume is found by dividing by:', a: ['three', 'the base area', 'the surface area', 'six'], c: 1, why: m('cm³ ÷ cm² = cm') + '.' },
    { q: 'The most common lost mark in this block is:', a: ['arithmetic', 'the units', 'the diagram', 'the formula'], c: 1, why: 'Four of the five classic mistakes are units.' }
  ],
  practice: {
    easy: [
      ['The volume of a ' + m('5 × 4 × 3') + ' cm cuboid', m('60') + ' cm³'],
      ['Its surface area', m('94') + ' cm²'],
      ['The volume of a cube of edge ' + m('4') + ' cm', m('64') + ' cm³'],
      ['Its surface area', m('96') + ' cm²'],
      [m('1') + ' litre in cm³', m('1000') + ' cm³'],
      ['The volume of an ' + m('8 × 5 × 2') + ' cm cuboid', m('80') + ' cm³'],
      ['The number of faces of a cuboid', m('6')]
    ],
    med: [
      ['The surface area of an ' + m('8 × 5 × 2') + ' cm cuboid', m('132') + ' cm²'],
      ['The volume and surface area of a cube of edge ' + m('7') + ' cm', m('343') + ' cm³ and ' + m('294') + ' cm²'],
      [m('V = 120') + ' cm³ on a ' + m('5 × 4') + ' base: the height', m('6') + ' cm'],
      ['A cube of volume ' + m('512') + ' cm³: the edge', m('8') + ' cm'],
      ['A cube of surface area ' + m('150') + ' cm²: the edge', m('5') + ' cm'],
      ['The capacity of a ' + m('60 × 40 × 50') + ' cm tank', m('120') + ' litres'],
      ['One face of a cube of surface area ' + m('294') + ' cm²', m('49') + ' cm²']
    ],
    hard: [
      ['A cuboid ' + m('5') + ' by ' + m('4') + ' with ' + m('S = 94') + ' cm²: the third edge', m('3') + ' cm'],
      ['A tank with base ' + m('80 × 50') + ' cm holding ' + m('120') + ' litres: the depth', m('30') + ' cm'],
      ['A stone raising the level ' + m('1.5') + ' cm on a ' + m('1000') + ' cm² base', m('1500') + ' cm³'],
      ['A ' + m('4') + ' m by ' + m('3') + ' m by ' + m('0.1') + ' m slab at ' + m('2.4') + ' t per m³', m('2.88') + ' tonnes'],
      ['Card for an open box ' + m('8 × 5 × 4') + ' cm', m('144') + ' cm²'],
      ['Doubling every edge multiplies ' + m('V') + ' and ' + m('S') + ' by', m('8') + ' and ' + m('4')],
      ['Boxes ' + m('10 × 8 × 5') + ' cm in a crate ' + m('40 × 32 × 30') + ' cm', m('96')]
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Write the unit on every line of working, not only on the answer.',
  homework: [
    'Find the volume and the surface area of a cuboid ' + m('9') + ' cm by ' + m('5') + ' cm by ' + m('4') + ' cm.',
    'A cube has surface area ' + m('216') + ' cm². Find its edge and its volume.',
    'A cuboid has volume ' + m('252') + ' cm³ and a base ' + m('9') + ' cm by ' + m('7') + ' cm. Find its height.',
    'A tank ' + m('90') + ' cm by ' + m('50') + ' cm by ' + m('40') + ' cm is filled at ' + m('12') + ' litres a minute. How long does it take?',
    'List the five mistakes of the last section and write one line on how you will avoid each.'
  ]
});

/* ============================== 72 ============================== */
G6_MAT.push({
  id: 'g6-72', stream: 'mat', grade: 6, quarter: 3, lessons: '155–156', hours: 2,
  title: 'Control work 8 — volume and surface, and work on the mistakes',
  subtitle: 'Twenty-five marks on the solids block, then the diagnosis and the rewriting.',
  uz: 'Matematika 6, Nazorat ishi 8', uzPage: 'pp. 400–448',
  cam: 'S7 15 review', camPage: 'Stage 7, pp. 156–172', wb: 'Control paper 8',
  objectives: [
    'Find the volume and the surface area of a cuboid and of a cube.',
    'Run both formulae backwards to a missing edge.',
    'Solve a capacity, a filling-time and a displacement problem.',
    'Name each lost mark by its type and rewrite the whole solution.'
  ],
  terms: [
    ['Control work', 'Nazorat ishi', 'Контрольная работа'],
    ['Volume', 'Hajm', 'Объём'],
    ['Surface area', 'Sirt yuzasi', 'Площадь поверхности'],
    ['Capacity', 'Sig‘im', 'Вместимость'],
    ['Displacement', 'Siqib chiqarish', 'Вытеснение'],
    ['Open box', 'Qopqog‘i yo‘q quti', 'Открытая коробка'],
    ['Unit', 'O‘lchov birligi', 'Единица измерения'],
    ['Diagnosis', 'Tashxis', 'Диагностика']
  ],
  timing: [[3, 'Instructions'], [40, 'The paper'], [27, 'Answers and diagnosis'], [10, 'What comes next']],
  sections: [
    {
      h: 'The paper — 25 marks, 40 minutes',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Q</th><th>Task</th><th>Marks</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>The volume and surface area of a ${m('6 × 5 × 4')} cm cuboid</td><td class="m">3</td><td>L139, L143–145</td></tr>
        <tr><td>2</td><td>The volume and surface area of a cube of edge ${m('5')} cm</td><td class="m">3</td><td>L139</td></tr>
        <tr><td>3</td><td>A cuboid of volume ${m('168')} cm³ on a ${m('7 × 6')} base: the height</td><td class="m">3</td><td>L140–142</td></tr>
        <tr><td>4</td><td>A cube of surface area ${m('384')} cm²: the edge</td><td class="m">3</td><td>L140–142</td></tr>
        <tr><td>5</td><td>A cuboid ${m('8')} by ${m('3')} cm with ${m('S = 158')} cm²: the third edge</td><td class="m">4</td><td>L140–142</td></tr>
        <tr><td>6</td><td>A tank ${m('70 × 40 × 50')} cm: its capacity, and the time to fill it at ${m('14')} l/min</td><td class="m">4</td><td>L146–149</td></tr>
        <tr><td>7</td><td>A stone raises the water from ${m('8')} cm to ${m('9.2')} cm on a ${m('50 × 30')} cm base: its volume</td><td class="m">3</td><td>L146–149</td></tr>
        <tr><td>8</td><td>The card for an open box ${m('12 × 8 × 5')} cm</td><td class="m">2</td><td>L143–145</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The answers</div>
      ${m('120')} cm³ and ${m('148')} cm²; ${m('125')} cm³ and ${m('150')} cm²; ${m('4')} cm; ${m('8')} cm;
      ${m('5')} cm; ${m('140')} litres and ${m('10')} min; ${m('1800')} cm³; ${m('296')} cm².</div>`
    },
    {
      h: 'Naming the slip',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Slip</th><th>What it looks like</th><th>The fix</th></tr></thead>
      <tbody>
        <tr><td>a metre left as ${m('1')}</td><td class="m">1 · 80 · 50</td><td class="m">100 · 80 · 50</td></tr>
        <tr><td>a cube edge by dividing by three</td><td class="m">125 ÷ 3</td><td class="m">a³ = 125, a = 5</td></tr>
        <tr><td>the root taken before the six</td><td class="m">√384</td><td class="m">√(384 ÷ 6) = 8</td></tr>
        <tr><td>litres divided by an area</td><td class="m">140 ÷ 2800</td><td class="m">140 000 ÷ 2800</td></tr>
        <tr><td>a volume written in ${m('cm²')}</td><td class="m">120 cm²</td><td class="m">120 cm³</td></tr>
        <tr><td>the lid counted on an open box</td><td class="m">392 cm²</td><td class="m">296 cm²</td></tr>
        <tr><td>the new level used instead of the rise</td><td class="m">1500 · 9.2</td><td class="m">1500 · 1.2</td></tr>
      </tbody></table></div>
      <p>Name the slip in the margin, then rewrite the whole solution — not the wrong line.</p>`
    },
    {
      h: 'What comes next',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>If you lost marks on</th><th>Revise</th></tr></thead>
      <tbody>
        <tr><td>Q1–Q2</td><td>the two formulae, L139 and L143–145</td></tr>
        <tr><td>Q3–Q5</td><td>the formulae run backwards, L140–142</td></tr>
        <tr><td>Q6–Q7</td><td>capacity, filling and displacement, L146–149</td></tr>
        <tr><td>Q8</td><td>choosing which faces to count, L143–145</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">Looking forward</div>
      Quarter IV opens with data handling — collecting it, drawing pie charts and reading them — then
      probability, the three-dimensional shapes and their nets, and the revision of the year.</div>`
    }
  ],
  examples: [
    {
      q: 'Model answer, Q5: a cuboid ' + m('8') + ' cm by ' + m('3') + ' cm with surface area ' + m('158') + ' cm².',
      steps: [
        [m('S = 2(8 · 3 + 3c + 8c) = 158') + '.', ''],
        [m('48 + 22c = 158') + ', so ' + m('22c = 110') + '.', ''],
        [m('c = 5') + ' cm.', 'Check: ' + m('2(24 + 15 + 40) = 158') + ' ✓']
      ],
      ans: m('5') + ' cm'
    },
    {
      q: 'Model answer, Q6: a tank ' + m('70') + ' cm by ' + m('40') + ' cm by ' + m('50') + ' cm, filled at ' + m('14') + ' litres a minute.',
      steps: [
        [m('70 · 40 · 50 = 140 000') + ' cm³.', ''],
        ['That is ' + m('140') + ' litres.', 'Divide by ' + m('1000') + '.'],
        [m('140 ÷ 14 = 10') + ' minutes.', '']
      ],
      ans: m('140') + ' litres and ' + m('10') + ' minutes'
    },
    {
      q: 'Model answer, Q7: the water rises from ' + m('8') + ' cm to ' + m('9.2') + ' cm on a ' + m('50 × 30') + ' cm base.',
      steps: [
        ['Base area ' + m('50 · 30 = 1500') + ' cm².', ''],
        ['The rise is ' + m('9.2 − 8 = 1.2') + ' cm.', 'The rise, not the new level.'],
        [m('1500 · 1.2 = 1800') + ' cm³.', '']
      ],
      ans: m('1800') + ' cm³'
    }
  ],
  modelNote: 'Return Q7 first and ask who multiplied by 9.2; naming the error as “the level instead of the rise” fixes it for the year.',
  interactive: {
    type: 'quiz',
    title: 'The paper in eight questions',
    hint: 'Convert the units first, then decide forwards or backwards.',
    items: [
      { q: 'The volume of a ' + m('6 × 5 × 4') + ' cm cuboid:', a: [m('74'), m('120'), m('148'), m('30')], c: 1, why: 'Three edges multiplied.' },
      { q: 'Its surface area:', a: [m('74'), m('120'), m('148'), m('296')], c: 2, why: m('2(30 + 20 + 24)') + '.' },
      { q: 'A cube of edge ' + m('5') + ' cm has volume:', a: [m('25'), m('125'), m('150'), m('15')], c: 1, why: m('5³') + '.' },
      { q: 'A cuboid of volume ' + m('168') + ' cm³ on a ' + m('7 × 6') + ' base is high:', a: [m('4') + ' cm', m('42') + ' cm', m('24') + ' cm', m('8') + ' cm'], c: 0, why: m('168 ÷ 42') + '.' },
      { q: 'A cube of surface area ' + m('384') + ' cm² has edge:', a: [m('64'), m('8'), m('19.6'), m('6')], c: 1, why: m('384 ÷ 6 = 64') + ', root ' + m('8') + '.' },
      { q: 'A ' + m('70 × 40 × 50') + ' cm tank holds:', a: [m('14') + ' litres', m('140') + ' litres', m('1400') + ' litres', m('140 000') + ' litres'], c: 1, why: m('140 000') + ' cm³.' },
      { q: 'A rise from ' + m('8') + ' to ' + m('9.2') + ' cm on ' + m('1500') + ' cm² means:', a: [m('13 800') + ' cm³', m('1800') + ' cm³', m('12 000') + ' cm³', m('1.2') + ' cm³'], c: 1, why: 'Use the rise, ' + m('1.2') + ' cm.' },
      { q: 'An open box ' + m('12 × 8 × 5') + ' cm needs:', a: [m('392'), m('296'), m('200'), m('96')], c: 1, why: 'Five faces only.' }
    ]
  },
  quiz: [
    { q: 'Q1 wants the surface area in:', a: [m('cm'), m('cm²'), m('cm³'), 'litres'], c: 1, why: 'Two lengths multiplied.' },
    { q: 'Q4 divides by six:', a: ['after the root', 'before the root', 'never', 'twice'], c: 1, why: 'One face first.' },
    { q: 'Q5 gives an equation that is:', a: ['quadratic', 'linear', 'impossible', 'a fraction'], c: 1, why: 'Only one unknown edge.' },
    { q: 'Q6 needs the volume converted to:', a: [m('cm²'), 'litres', 'metres', 'nothing'], c: 1, why: 'To match the rate.' },
    { q: 'Q7 multiplies the base area by:', a: ['the new level', 'the rise', 'the old level', 'their sum'], c: 1, why: 'The displaced volume.' },
    { q: 'Q8 leaves out:', a: ['the base', 'the lid', 'two walls', 'nothing'], c: 1, why: 'The box is open.' }
  ],
  practice: {
    easy: [
      ['The volume of a ' + m('6 × 5 × 4') + ' cm cuboid', m('120') + ' cm³'],
      ['Its surface area', m('148') + ' cm²'],
      ['The volume of a cube of edge ' + m('5') + ' cm', m('125') + ' cm³'],
      ['Its surface area', m('150') + ' cm²'],
      [m('V = 168') + ' cm³ on a ' + m('7 × 6') + ' base: the height', m('4') + ' cm'],
      ['One face of a cube of surface area ' + m('384') + ' cm²', m('64') + ' cm²'],
      ['The capacity of a ' + m('70 × 40 × 50') + ' cm tank', m('140') + ' litres']
    ],
    med: [
      ['The edge of a cube of surface area ' + m('384') + ' cm²', m('8') + ' cm'],
      ['A cuboid ' + m('8') + ' by ' + m('3') + ' cm with ' + m('S = 158') + ' cm²: the third edge', m('5') + ' cm'],
      ['A ' + m('140') + '-litre tank filled at ' + m('14') + ' l/min', m('10') + ' min'],
      ['A stone raising ' + m('8') + ' cm to ' + m('9.2') + ' cm on a ' + m('50 × 30') + ' base', m('1800') + ' cm³'],
      ['Card for an open box ' + m('12 × 8 × 5') + ' cm', m('296') + ' cm²'],
      ['The closed box of the same size', m('392') + ' cm²'],
      ['The volume of that box', m('480') + ' cm³']
    ],
    hard: [
      ['A ' + m('1') + ' m by ' + m('80') + ' cm by ' + m('50') + ' cm tank, in litres', m('400') + ' litres'],
      ['The commonest lost mark in this paper', 'A unit not converted'],
      ['A cube of volume ' + m('1728') + ' cm³: its edge and surface area', m('12') + ' cm and ' + m('864') + ' cm²'],
      ['The mass of the water in a full ' + m('140') + '-litre tank', m('140') + ' kg'],
      ['Doubling every edge of the Q1 cuboid: the new volume', m('960') + ' cm³'],
      ['…and the new surface area', m('592') + ' cm²'],
      ['The depth of ' + m('28') + ' litres in a tank of base ' + m('70 × 40') + ' cm', m('10') + ' cm']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Rewrite every question you lost a mark on in full, with the units on every line.',
  homework: [
    'Rewrite in full every question on which you lost a mark, naming the slip in the margin.',
    'Find the volume and the surface area of a cuboid ' + m('7') + ' cm by ' + m('6') + ' cm by ' + m('3') + ' cm.',
    'A cube has volume ' + m('1331') + ' cm³. Find its edge and its surface area.',
    'A tank ' + m('100') + ' cm by ' + m('60') + ' cm by ' + m('45') + ' cm is filled at ' + m('15') + ' litres a minute. How long does it take?',
    'How much card is needed for an open box ' + m('15') + ' cm by ' + m('10') + ' cm by ' + m('6') + ' cm deep?'
  ]
});

/* ============================== 73 ============================== */
G6_MAT.push({
  id: 'g6-73', stream: 'mat', grade: 6, quarter: 4, lessons: '157', hours: 1,
  title: 'Recall — data handling, and the project topic',
  subtitle: 'Tally, frequency, the three averages and the range — and the question the project will answer.',
  uz: 'Matematika 6, takrorlash', uzPage: 'pp. 449–452',
  cam: 'S7 6 collecting data', camPage: 'Stage 7, pp. 58–62', wb: 'Exercise 6.1',
  objectives: [
    'Record data in a tally and turn it into a frequency table.',
    'Find the mean, the median, the mode and the range of a small set.',
    'Find the mean from a frequency table without listing every value.',
    'Frame a question that a survey can actually answer.'
  ],
  terms: [
    ['Data', 'Ma’lumot', 'Данные'],
    ['Tally', 'Sanoq belgisi', 'Подсчёт чёрточками'],
    ['Frequency', 'Chastota', 'Частота'],
    ['Frequency table', 'Chastotalar jadvali', 'Таблица частот'],
    ['Mean', 'O‘rtacha arifmetik', 'Среднее арифметическое'],
    ['Median', 'Mediana', 'Медиана'],
    ['Mode', 'Moda', 'Мода'],
    ['Range', 'Farq (kenglik)', 'Размах']
  ],
  timing: [[8, 'Collecting and recording'], [12, 'The three averages and the range'], [12, 'The mean from a frequency table'], [8, 'The project topic']],
  sections: [
    {
      h: 'Collecting and recording',
      html: `<p>Data is either a category — a favourite sport, a colour — or a number. Numbers that can only
      be counted, such as marks out of ten, are <b>discrete</b>; those that are measured, such as heights,
      are <b>continuous</b>.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Mark</th><th>Tally (a crossed group is five)</th><th>Frequency</th></tr></thead>
      <tbody>
        <tr><td class="m">4</td><td class="m">|</td><td class="m">1</td></tr>
        <tr><td class="m">5</td><td class="m">||</td><td class="m">2</td></tr>
        <tr><td class="m">6</td><td class="m">|||</td><td class="m">3</td></tr>
        <tr><td class="m">7</td><td class="m">||||/</td><td class="m">5</td></tr>
        <tr><td class="m">8</td><td class="m">||||</td><td class="m">4</td></tr>
        <tr><td class="m">9</td><td class="m">|||</td><td class="m">3</td></tr>
        <tr><td class="m">10</td><td class="m">||</td><td class="m">2</td></tr>
      </tbody></table></div>
      <div class="keybox"><div class="klabel">The frequencies must add to the number of people asked</div>
      Here ${m('1 + 2 + 3 + 5 + 4 + 3 + 2 = 20')}. That single check catches most recording errors before
      any calculation begins.</div>`
    },
    {
      h: 'The three averages and the range',
      html: `<div class="tablewrap"><table>
      <thead><tr><th>Measure</th><th>What it is</th><th>For ${m('2, 5, 5, 6, 12')}</th></tr></thead>
      <tbody>
        <tr><td>mean</td><td>the total shared out equally</td><td class="m">30 ÷ 5 = 6</td></tr>
        <tr><td>median</td><td>the middle value, in order</td><td class="m">5</td></tr>
        <tr><td>mode</td><td>the value that occurs most</td><td class="m">5</td></tr>
        <tr><td>range</td><td>largest minus smallest</td><td class="m">12 − 2 = 10</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">The range is not an average</span>
      It says how spread out the data is, not where its centre lies. Two classes can share a mean of
      ${m('6')} and have ranges of ${m('2')} and ${m('10')} — very different classes.</div>
      <p>For an even number of values the median is halfway between the two middle ones. Order the data
      first, every time; an unordered list gives the wrong median more often than not.</p>`
    },
    {
      h: 'The mean from a frequency table',
      html: `<p>Twenty marks need not be written out. Multiply each mark by its frequency, add, and divide
      by the total frequency.</p>
      <div class="tablewrap"><table>
      <thead><tr><th>Mark ${m('x')}</th><th>Frequency ${m('f')}</th><th class="m">x · f</th></tr></thead>
      <tbody>
        <tr><td class="m">4</td><td class="m">1</td><td class="m">4</td></tr>
        <tr><td class="m">5</td><td class="m">2</td><td class="m">10</td></tr>
        <tr><td class="m">6</td><td class="m">3</td><td class="m">18</td></tr>
        <tr><td class="m">7</td><td class="m">5</td><td class="m">35</td></tr>
        <tr><td class="m">8</td><td class="m">4</td><td class="m">32</td></tr>
        <tr><td class="m">9</td><td class="m">3</td><td class="m">27</td></tr>
        <tr><td class="m">10</td><td class="m">2</td><td class="m">20</td></tr>
        <tr><td>total</td><td class="m">20</td><td class="m">146</td></tr>
      </tbody></table></div>
      ${eq('mean ' + m('= ' + f('146', '20') + ' = 7.3'), true)}
      <div class="keybox"><div class="klabel">Mode, median and range come off the same table</div>
      The mode is the mark with the largest frequency — ${m('7')}. The median is between the ${m('10')}th
      and ${m('11')}th values, both of which are ${m('7')}. The range is ${m('10 − 4 = 6')}.</div>`
    },
    {
      h: 'The project topic',
      html: `<div class="keybox"><div class="klabel">The project, announced today and presented in lesson 203</div>
      <b>Which sport do the pupils of our school prefer?</b> Ask at least ${m('60')} pupils, record the
      answers in a tally, and present the result as a pie chart with the angle of every sector shown.</div>
      <div class="tablewrap"><table>
      <thead><tr><th>Stage</th><th>Lessons</th><th>What is produced</th></tr></thead>
      <tbody>
        <tr><td>plan the survey</td><td class="m">158–159</td><td>the question and the sample</td></tr>
        <tr><td>collect and tally</td><td>at home</td><td>a frequency table</td></tr>
        <tr><td>draw the chart</td><td class="m">160–163</td><td>a pie chart with angles</td></tr>
        <tr><td>interpret it</td><td class="m">164–166</td><td>three written conclusions</td></tr>
        <tr><td>present</td><td class="m">203–204</td><td>a poster and four minutes of talk</td></tr>
      </tbody></table></div>
      <div class="warn"><span class="wl">A good question has a small, fixed list of answers</span>
      “Which sport do you prefer?” with six options can be tallied. “What do you think about sport?”
      cannot. Deciding the options before asking anyone is half the work of a survey.</div>`
    }
  ],
  examples: [
    {
      q: 'Find the mean, median, mode and range of ' + m('2, 5, 5, 6, 12') + '.',
      steps: [
        ['Total ' + m('30') + ', so the mean is ' + m('30 ÷ 5 = 6') + '.', ''],
        ['In order, the middle value is ' + m('5') + '.', 'Already in order ✓'],
        ['The mode is ' + m('5') + '; the range is ' + m('12 − 2 = 10') + '.', 'Three different “middles”.']
      ],
      ans: 'Mean ' + m('6') + ', median ' + m('5') + ', mode ' + m('5') + ', range ' + m('10')
    },
    {
      q: 'Find the mean of the twenty marks in the frequency table.',
      steps: [
        ['Multiply each mark by its frequency: ' + m('4, 10, 18, 35, 32, 27, 20') + '.', ''],
        ['Total ' + m('146') + ' over ' + m('20') + ' pupils.', ''],
        [m('146 ÷ 20 = 7.3') + '.', 'Between ' + m('4') + ' and ' + m('10') + ' ✓']
      ],
      ans: m('7.3')
    },
    {
      q: 'From the same table, find the median and the mode.',
      steps: [
        ['With ' + m('20') + ' values the median is between the ' + m('10') + 'th and ' + m('11') + 'th.', ''],
        ['Cumulative frequencies: ' + m('1, 3, 6, 11') + ' — both fall on ' + m('7') + '.', ''],
        ['The mode is ' + m('7') + ', with frequency ' + m('5') + '.', 'Median and mode agree here.']
      ],
      ans: 'Median ' + m('7') + ', mode ' + m('7')
    }
  ],
  modelNote: 'Drag the largest value far to the right in the model: the mean chases it, the median does not. That is the whole argument for the median in one movement.',
  interactive: {
    type: 'averages',
    title: 'Mean, median, mode and range',
    hint: 'Move the tallest bar and watch which of the three averages follows it.'
  },
  quiz: [
    { q: 'The mode is:', a: ['the middle value', 'the most common value', 'the total ÷ the count', 'the spread'], c: 1, why: 'Largest frequency.' },
    { q: 'The median of ' + m('2, 5, 5, 6, 12') + ' is:', a: [m('5'), m('6'), m('5.5'), m('10')], c: 0, why: 'The middle of five values.' },
    { q: 'The range of that set is:', a: [m('5'), m('6'), m('10'), m('12')], c: 2, why: m('12 − 2') + '.' },
    { q: 'The mean of the twenty marks is:', a: [m('7'), m('7.3'), m('146'), m('20')], c: 1, why: m('146 ÷ 20') + '.' },
    { q: 'Before finding a median you must:', a: ['add the values', 'order the values', 'count the modes', 'draw a chart'], c: 1, why: 'Otherwise the middle is meaningless.' },
    { q: 'Heights of pupils are:', a: ['categorical', 'discrete', 'continuous', 'a tally'], c: 2, why: 'They are measured, not counted.' }
  ],
  practice: {
    easy: [
      ['The mode of ' + m('2, 5, 5, 6, 12'), m('5')],
      ['The median of ' + m('2, 5, 5, 6, 12'), m('5')],
      ['The mean of ' + m('2, 5, 5, 6, 12'), m('6')],
      ['The range of ' + m('2, 5, 5, 6, 12'), m('10')],
      ['The mean of ' + m('3, 4, 4, 5, 9'), m('5')],
      ['The mode of the twenty marks', m('7')],
      ['The number of pupils in the table', m('20')]
    ],
    med: [
      ['The median of the twenty marks', m('7')],
      ['The mean of the twenty marks', m('7.3')],
      ['The range of the twenty marks', m('6')],
      ['The total of the twenty marks', m('146')],
      ['The frequency of the mark ' + m('8'), m('4')],
      ['How many scored ' + m('8') + ' or more', m('9')],
      ['How many scored below ' + m('7'), m('6')]
    ],
    hard: [
      ['A tally of four groups of five and two more', m('22')],
      ['Which average is least affected by one very large value?', 'The median'],
      ['A 21st pupil scores ' + m('5') + ': the new mean, to 1 d.p.', m('7.2')],
      ['If every mark rose by ' + m('1') + ', the new mean', m('8.3')],
      ['…and the new range', m('6') + ', unchanged'],
      ['Which average must always be one of the data values?', 'The mode'],
      ['Data that is measured rather than counted is called', 'Continuous']
    ]
  },
  hwTitle: 'Homework — 5 tasks',
  hwNote: 'Bring the frequency table of your own survey to the next lesson; the project depends on it.',
  homework: [
    'Find the mean, median, mode and range of ' + m('3, 7, 7, 8, 10, 13') + '.',
    'A frequency table has marks ' + m('5, 6, 7, 8') + ' with frequencies ' + m('2, 5, 8, 5') + '. Find the mean.',
    'Find the median and the mode of that table.',
    'Write your survey question with a list of at most six possible answers.',
    'Explain in one sentence why the range is not an average.'
  ]
});
