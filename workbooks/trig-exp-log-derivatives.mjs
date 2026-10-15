/* Explanations and 30 questions on differentiating the trigonometric,
   exponential and logarithmic functions. One topic, three tiers.
   Maths goes between $…$;  ^{} _{} @f{}{} @r{}  are the only markup.   */

export const meta = {
  eyebrow: 'GRADE 11 · ALGEBRA AND CALCULUS',
  title: 'Differentiating sin, cos, tan, eˣ and ln x',
  footer: 'Grade 11 · Differentiating sin, cos, tan, eˣ and ln x · explanations and 30 questions',
  contents: false,
  tiers: [
    { key: 'easy',   name: 'Easy',   word: 'easy',   pill: 'EASY',   lines: 1, colour: 'focus',     count: 10 },
    { key: 'medium', name: 'Medium', word: 'medium', pill: 'MEDIUM', lines: 3, colour: 'practice',  count: 10, solutions: true },
    { key: 'hard',   name: 'Hard',   word: 'hard',   pill: 'HARD',   lines: 5, colour: 'challenge', count: 10, solutions: true }
  ]
};

export const topics = [{
  n: 1,
  unit: 'THE DERIVATIVE',
  lessons: '10–12',
  title: 'Differentiating sin, cos, tan, $e^{x}$ and $ln x$',
  subtitle: 'Six trigonometric functions, the exponential and the logarithm — where each derivative comes from, and the three rules that extend them to everything else.',
  meta: 'Pure Mathematics 1, 7.3–7.4 · Pure Mathematics 2, 4.1–4.4 · explanations and 30 questions',
  descs: {
    easy: 'Straight from the table, one step at a time.',
    medium: 'A chain, a product or a quotient — one extra move.',
    hard: 'Several ideas at once, and some that need an idea rather than a method.'
  },
  keywords: ['radian', 'standard limit', 'first principles', 'chain rule', 'product rule',
    'quotient rule', 'natural logarithm', 'exponential function', 'logarithmic differentiation'],
  remember: [
    '$(sin x)′ = cos x$ and $(cos x)′ = −sin x$ — the minus sign on the cosine is the mark most often lost.',
    '$(e^{x})′ = e^{x}$: the one function that is its own derivative. $(ln x)′ = @f{1}{x}$.',
    'Radians, always. In degrees $(sin x°)′ = @f{π}{180}cos x°$ instead.',
    'Chain rule: differentiate the outside, then multiply by the derivative of the inside.',
    '$@f{d}{dx}ln f(x) = @f{f′(x)}{f(x)}$ — worth knowing on sight.'
  ],

  lesson: [
    { h: 'Why radians, and not degrees',
      p: ['Every formula below is false in degrees. An angle of $x$ degrees is $@f{πx}{180}$ radians, so $sin x° = sin@f{πx}{180}$, and the chain rule drags that constant through: $(sin x°)′ = @f{π}{180}cos x° ≈ 0.01745 cos x°$.',
          'Radians are the measure in which the constant comes out as exactly $1$. That is the whole reason calculus insists on them.'] },

    { h: 'The four limits everything rests on',
      p: ['Each derivative below is built from one of these. They are worth memorising as facts, not re-derived each time.'],
      head: ['Limit as $h → 0$', 'Value', 'Gives'],
      table: [
        ['$@f{sin h}{h}$', '$1$', 'the derivative of $sin x$'],
        ['$@f{1 − cos h}{h}$', '$0$', 'the derivative of $sin x$'],
        ['$@f{e^{h} − 1}{h}$', '$1$', 'the derivative of $e^{x}$'],
        ['$@f{ln(1 + h)}{h}$', '$1$', 'the derivative of $ln x$']
      ] },

    { h: 'Where $(sin x)′ = cos x$ comes from',
      p: ['Start from the definition and expand with the addition formula.'],
      steps: [
        ['$@f{sin(x + h) − sin x}{h}$', 'the difference quotient'],
        ['$= @f{sin x · cos h + cos x · sin h − sin x}{h}$', 'addition formula for $sin(x + h)$'],
        ['$= cos x · @f{sin h}{h} − sin x · @f{1 − cos h}{h}$', 'split, and group the two standard limits'],
        ['$→ cos x · 1 − sin x · 0 = cos x$', 'let $h → 0$']
      ] },

    { h: 'Why $e$ is the base that works',
      p: ['For any base, $(a^{x})′ = a^{x} · lim_{h→0}@f{a^{h} − 1}{h}$. That limit is a constant depending on $a$, and it equals $ln a$. So $(a^{x})′ = a^{x} ln a$, and the constant is $1$ — the function reproducing itself exactly — only when $a = e$.',
          'The logarithm follows by reversing it: if $y = ln x$ then $e^{y} = x$, and differentiating both sides gives $e^{y}@f{dy}{dx} = 1$, so $@f{dy}{dx} = @f{1}{e^{y}} = @f{1}{x}$.',
          'Note $(ln|x|)′ = @f{1}{x}$ as well, which is what lets $@f{1}{x}$ be integrated for negative $x$.'] },

    { h: 'The table',
      head: ['Function', 'Derivative', 'Function', 'Derivative'],
      table: [
        ['$sin x$', '$cos x$', '$e^{x}$', '$e^{x}$'],
        ['$cos x$', '$−sin x$', '$e^{ax + b}$', '$ae^{ax + b}$'],
        ['$tan x$', '$sec^{2}x = @f{1}{cos^{2}x}$', '$a^{x}$', '$a^{x} ln a$'],
        ['$cot x$', '$−cosec^{2}x$', '$ln x$', '$@f{1}{x}$'],
        ['$sec x$', '$sec x · tan x$', '$ln(ax + b)$', '$@f{a}{ax + b}$'],
        ['$cosec x$', '$−cosec x · cot x$', '$log_{a}x$', '$@f{1}{x ln a}$']
      ],
      p: ['Every function in the right-hand column of the trigonometric half — the co-functions — carries a minus sign. That is the pattern to hang them on.'] },

    { h: 'The chain rule does the rest',
      p: ['$[f(g(x))]′ = f′(g(x)) · g′(x)$. Differentiate the outer function, leave the inside alone, then multiply by the derivative of the inside.'],
      head: ['Function', 'Derivative', 'The inner derivative'],
      table: [
        ['$sin 3x$', '$3cos 3x$', 'the $3$'],
        ['$e^{5x}$', '$5e^{5x}$', 'the $5$'],
        ['$ln(2x + 1)$', '$@f{2}{2x + 1}$', 'the $2$'],
        ['$sin(x^{2})$', '$2x · cos(x^{2})$', 'the $2x$'],
        ['$sin^{3}x$', '$3sin^{2}x · cos x$', 'the $cos x$'],
        ['$e^{sin x}$', '$cos x · e^{sin x}$', 'the $cos x$']
      ],
      p: ['Watch the difference between $sin^{2}x$, which is $(sin x)^{2}$, and $sin(x^{2})$. They are different functions with different derivatives.'] },

    { h: 'Worked example 1 — a product: $y = x^{2} ln x$',
      steps: [
        ['$u = x^{2}$, so $u′ = 2x$', 'name the first part'],
        ['$v = ln x$, so $v′ = @f{1}{x}$', 'name the second'],
        ['$y′ = 2x · ln x + x^{2} · @f{1}{x}$', 'apply $u′v + uv′$'],
        ['$y′ = 2x ln x + x = x(2 ln x + 1)$', 'simplify, then factorise']
      ] },

    { h: 'Worked example 2 — a quotient: $y = @f{sin x}{x}$',
      steps: [
        ['$u = sin x$, so $u′ = cos x$', 'the numerator'],
        ['$v = x$, so $v′ = 1$', 'the denominator'],
        ['$y′ = @f{cos x · x − sin x · 1}{x^{2}}$', 'apply $@f{u′v − uv′}{v^{2}}$ — keep the order'],
        ['$y′ = @f{x cos x − sin x}{x^{2}}$', 'tidy the numerator']
      ] },

    { h: 'The five mistakes to watch for',
      p: ['1. Working in degrees. 2. Losing the minus sign on $(cos x)′$. 3. Reading $sin^{2}x$ as $sin(x^{2})$. 4. Forgetting the inner derivative — writing $(sin 3x)′ = cos 3x$ instead of $3cos 3x$. 5. Treating $ln(x^{3} + 1)$ as if the chain rule did not apply: it is $@f{3x^{2}}{x^{3} + 1}$, not $@f{1}{x^{3} + 1}$.',
          'Every one of these can be caught by substituting a number into the original and into the derivative and comparing with a numerical gradient.'] }
  ],

  easy: [
    ['Differentiate $y = sin x$.', '$cos x$'],
    ['Differentiate $y = cos x$.', '$−sin x$'],
    ['Differentiate $y = tan x$.', '$sec^{2}x$'],
    ['Differentiate $y = e^{x}$.', '$e^{x}$'],
    ['Differentiate $y = ln x$.', '$@f{1}{x}$'],
    ['Differentiate $y = sin 3x$.', '$3cos 3x$'],
    ['Differentiate $y = e^{2x}$.', '$2e^{2x}$'],
    ['Differentiate $y = ln 5x$.', '$@f{1}{x}$'],
    ['Differentiate $y = 2 sin x + 3 cos x$.', '$2cos x − 3sin x$'],
    ['Differentiate $y = 2^{x}$.', '$2^{x} ln 2$']
  ],

  medium: [
    ['Differentiate $y = sin(x^{2})$.',
     '$2x cos(x^{2})$',
     'Chain rule with inner function $x^{2}$. The outer derivative is $cos(x^{2})$, the inner is $2x$, so the answer is $2x cos(x^{2})$. Note this is not $sin^{2}x$.'],
    ['Differentiate $y = sin^{2}x$.',
     '$2 sin x cos x = sin 2x$',
     'Here the outer function is the square, so the derivative is $2sin x$ times the derivative of $sin x$, giving $2 sin x cos x$. The double-angle identity tidies it to $sin 2x$.'],
    ['Differentiate $y = x sin x$.',
     '$sin x + x cos x$',
     'A product: $u = x$ with $u′ = 1$, and $v = sin x$ with $v′ = cos x$. Then $u′v + uv′ = sin x + x cos x$.'],
    ['Differentiate $y = e^{sin x}$.',
     '$cos x · e^{sin x}$',
     'Chain rule: the outer function is the exponential, which reproduces itself, and the inner derivative is $cos x$. So the answer is $cos x · e^{sin x}$.'],
    ['Differentiate $y = ln(cos x)$.',
     '$−tan x$',
     'Use $@f{d}{dx}ln f = @f{f′}{f}$ with $f = cos x$: the derivative is $@f{−sin x}{cos x} = −tan x$.'],
    ['Differentiate $y = @f{ln x}{x}$.',
     '$@f{1 − ln x}{x^{2}}$',
     'Quotient rule with $u = ln x$ and $v = x$: $@f{@f{1}{x} · x − ln x · 1}{x^{2}} = @f{1 − ln x}{x^{2}}$. It is zero at $x = e$, which is where $@f{ln x}{x}$ reaches its greatest value.'],
    ['Differentiate $y = @f{tan x}{x}$.',
     '$@f{x sec^{2}x − tan x}{x^{2}}$',
     'Quotient rule with $u = tan x$ and $v = x$: $@f{sec^{2}x · x − tan x · 1}{x^{2}}$. Keep the order in the numerator — reversing it flips the sign.'],
    ['Differentiate $y = e^{x} sin x$.',
     '$e^{x}(sin x + cos x)$',
     'A product of two functions neither of which simplifies: $e^{x} sin x + e^{x} cos x$, and $e^{x}$ factors out.'],
    ['Differentiate $y = ln(x^{2} + 1)$.',
     '$@f{2x}{x^{2} + 1}$',
     'Again $@f{f′}{f}$, with $f = x^{2} + 1$ and $f′ = 2x$. The commonest error here is writing $@f{1}{x^{2} + 1}$ and dropping the inner derivative.'],
    ['Differentiate $y = tan(3x + 1)$.',
     '$3sec^{2}(3x + 1)$',
     'The outer derivative is $sec^{2}(3x + 1)$ and the inner is $3$, giving $3sec^{2}(3x + 1)$.']
  ],

  hard: [
    ['Differentiate $y = @f{sin x}{1 + cos x}$ and simplify fully.',
     '$@f{1}{1 + cos x}$',
     'The quotient rule gives $@f{cos x(1 + cos x) − sin x(−sin x)}{(1 + cos x)^{2}} = @f{cos x + cos^{2}x + sin^{2}x}{(1 + cos x)^{2}}$. Since $cos^{2}x + sin^{2}x = 1$ the numerator is $1 + cos x$, which cancels one factor below, leaving $@f{1}{1 + cos x}$.'],
    ['Differentiate $y = ln(sec x + tan x)$.',
     '$sec x$',
     'Using $@f{f′}{f}$ with $f = sec x + tan x$ and $f′ = sec x tan x + sec^{2}x = sec x(tan x + sec x)$. The bracket is $f$ itself, so it cancels and the derivative is $sec x$. This is why that logarithm is the antiderivative of $sec x$.'],
    ['Differentiate $y = sin(cos x)$.',
     '$−sin x · cos(cos x)$',
     'A chain with a trigonometric function inside another. The outer derivative is $cos(cos x)$ and the inner is $−sin x$, giving $−sin x · cos(cos x)$. Keep the two arguments apart: the outer cosine is evaluated at $cos x$.'],
    ['Differentiate $y = x^{x}$ for $x > 0$.',
     '$x^{x}(1 + ln x)$',
     'Neither the power rule nor the exponential rule applies, since both base and index vary. Take logarithms: $ln y = x ln x$. Differentiating, $@f{y′}{y} = ln x + x · @f{1}{x} = ln x + 1$, so $y′ = x^{x}(1 + ln x)$.'],
    ['Differentiate $y = (sin x)^{x}$ where $sin x > 0$.',
     '$(sin x)^{x}(ln sin x + x cot x)$',
     'Logarithmic differentiation again: $ln y = x ln(sin x)$, so $@f{y′}{y} = ln(sin x) + x · @f{cos x}{sin x} = ln(sin x) + x cot x$. Multiplying back gives the answer.'],
    ['Differentiate $y = @f{e^{x}}{1 + e^{x}}$ and simplify.',
     '$@f{e^{x}}{(1 + e^{x})^{2}}$',
     'The quotient rule gives $@f{e^{x}(1 + e^{x}) − e^{x} · e^{x}}{(1 + e^{x})^{2}}$. The numerator is $e^{x} + e^{2x} − e^{2x} = e^{x}$. The derivative is positive everywhere, so this function — the logistic curve — always increases.'],
    ['Find the least value of $y = x ln x$ for $x > 0$.',
     '$−@f{1}{e}$, at $x = @f{1}{e}$',
     '$@f{dy}{dx} = ln x + 1$, zero when $ln x = −1$, that is $x = @f{1}{e}$. Then $@f{d^{2}y}{dx^{2}} = @f{1}{x} > 0$, so it is a minimum, of value $@f{1}{e} · (−1) = −@f{1}{e} ≈ −0.368$.'],
    ['Find the second derivative of $y = e^{−x} sin x$.',
     '$−2e^{−x} cos x$',
     'First, $y′ = −e^{−x} sin x + e^{−x} cos x = e^{−x}(cos x − sin x)$. Differentiating again, $y″ = −e^{−x}(cos x − sin x) + e^{−x}(−sin x − cos x) = e^{−x}(−cos x + sin x − sin x − cos x) = −2e^{−x} cos x$.'],
    ['Find and classify the stationary points of $y = sin x + cos x$ on $0 ≤ x ≤ 2π$.',
     'Maximum $@r{2}$ at $x = @f{π}{4}$; minimum $−@r{2}$ at $x = @f{5π}{4}$',
     '$@f{dy}{dx} = cos x − sin x = 0$ gives $tan x = 1$, so $x = @f{π}{4}$ or $@f{5π}{4}$. Then $@f{d^{2}y}{dx^{2}} = −sin x − cos x$, which is $−@r{2} < 0$ at $@f{π}{4}$ and $@r{2} > 0$ at $@f{5π}{4}$. The values are $±@r{2}$, which also follows from writing $y = @r{2} sin(x + @f{π}{4})$.'],
    ['Prove that $(cot x)′ = −cosec^{2}x$ using the quotient rule.',
     '$−cosec^{2}x$',
     'Write $cot x = @f{cos x}{sin x}$. The quotient rule gives $@f{−sin x · sin x − cos x · cos x}{sin^{2}x} = @f{−(sin^{2}x + cos^{2}x)}{sin^{2}x} = @f{−1}{sin^{2}x} = −cosec^{2}x$. The minus sign comes out of the numerator, not from anywhere else.']
  ]
}];
