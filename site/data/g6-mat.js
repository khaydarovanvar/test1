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
