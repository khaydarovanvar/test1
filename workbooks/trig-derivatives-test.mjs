/* Differentiating sin, cos, tan, e^x and ln x — a 30-question paper.
   Built twice from this one file: --student withholds the answers,
   --teacher prints a worked solution for every question.
   Maths goes between $…$;  ^{} _{} @f{}{} @r{}  are the only markup.   */

export const meta = {
  eyebrow: 'GRADE 11 · ALGEBRA AND CALCULUS',
  title: 'Differentiating sin, cos, tan, eˣ and ln x — 30 questions',
  footer: 'Grade 11 · Differentiating sin, cos, tan, eˣ and ln x · 30 questions',
  contents: false,
  tiers: [
    { key: 'easy',   name: 'Easy',   word: 'easy',   pill: 'EASY',   lines: 2, colour: 'focus',     count: 10, solutions: true },
    { key: 'medium', name: 'Medium', word: 'medium', pill: 'MEDIUM', lines: 4, colour: 'practice',  count: 10, solutions: true },
    { key: 'hard',   name: 'Hard',   word: 'hard',   pill: 'HARD',   lines: 6, colour: 'challenge', count: 10, solutions: true }
  ]
};

export const topics = [{
  n: 1,
  unit: 'THE DERIVATIVE',
  lessons: '10–12',
  title: 'Differentiating sin, cos, tan, $e^{x}$ and $ln x$',
  subtitle: 'Thirty questions on the trigonometric, exponential and logarithmic derivatives, in three tiers of ten.',
  meta: 'Pure Mathematics 1, 7.3–7.4 · Pure Mathematics 2, 4.1–4.4 · 30 questions · 60 marks',
  descs: {
    easy: 'One line from the table. 1 mark each.',
    medium: 'A chain, a product or a quotient. 2 marks each.',
    hard: 'Several steps, or an idea. 3 marks each.'
  },
  keywords: ['radian', 'chain rule', 'product rule', 'quotient rule', 'natural logarithm',
    'exponential function', 'logarithmic differentiation', 'stationary point', 'second derivative'],
  remember: [
    '$(sin x)′ = cos x$, $(cos x)′ = −sin x$, $(tan x)′ = sec^{2}x$.',
    '$(e^{x})′ = e^{x}$ and $(ln x)′ = @f{1}{x}$.',
    'Chain rule: differentiate the outside, then multiply by the derivative of the inside.',
    '$@f{d}{dx}ln f(x) = @f{f′(x)}{f(x)}$.',
    'Radians throughout. Show the rule you are using — method carries marks even when the answer slips.'
  ],

  easy: [
    ['Differentiate $y = 5 sin x$.', '$5cos x$',
     'A constant multiple passes straight through the derivative: $5 · cos x = 5cos x$.'],
    ['Differentiate $y = cos 2x$.', '$−2sin 2x$',
     'Chain rule. The outer derivative is $−sin 2x$ and the inner derivative is $2$, giving $−2sin 2x$.'],
    ['Differentiate $y = e^{5x}$.', '$5e^{5x}$',
     'The exponential reproduces itself, and the chain rule brings down the inner derivative $5$.'],
    ['Differentiate $y = ln 3x$.', '$@f{1}{x}$',
     'Either use $@f{f′}{f} = @f{3}{3x} = @f{1}{x}$, or note $ln 3x = ln 3 + ln x$, whose derivative is $@f{1}{x}$ since $ln 3$ is a constant. The $3$ disappears either way.'],
    ['Differentiate $y = tan 4x$.', '$4sec^{2}4x$',
     'The outer derivative is $sec^{2}4x$ and the inner is $4$.'],
    ['Differentiate $y = x + sin x$.', '$1 + cos x$',
     'Term by term: $(x)′ = 1$ and $(sin x)′ = cos x$.'],
    ['Differentiate $y = 3e^{x} − 2 ln x$.', '$3e^{x} − @f{2}{x}$',
     'Term by term, with the constants carried along: $3e^{x}$ and $−2 · @f{1}{x}$.'],
    ['Differentiate $y = sin(x + 2)$.', '$cos(x + 2)$',
     'The inner derivative is $1$, so the chain rule contributes nothing beyond the outer derivative.'],
    ['Differentiate $y = e^{−x}$.', '$−e^{−x}$',
     'The inner derivative is $−1$, so the sign flips. This is the one exponential that decays.'],
    ['Differentiate $y = 4cos x + tan x$.', '$−4sin x + sec^{2}x$',
     'Term by term. The minus sign belongs to the cosine, not to the $4$.']
  ],

  medium: [
    ['Differentiate $y = cos^{3}x$.', '$−3cos^{2}x · sin x$',
     'The outer function is the cube, giving $3cos^{2}x$; the inner is $cos x$, whose derivative is $−sin x$. Multiplying gives $−3cos^{2}x sin x$.'],
    ['Differentiate $y = x^{2}e^{x}$.', '$xe^{x}(x + 2)$',
     'Product rule: $2x · e^{x} + x^{2} · e^{x} = e^{x}(2x + x^{2})$, which factorises as $xe^{x}(x + 2)$.'],
    ['Differentiate $y = ln(sin x)$.', '$cot x$',
     'Use $@f{f′}{f}$ with $f = sin x$: the derivative is $@f{cos x}{sin x} = cot x$.'],
    ['Differentiate $y = e^{x^{2}}$.', '$2xe^{x^{2}}$',
     'Chain rule with inner function $x^{2}$, whose derivative is $2x$. Note this is not $(e^{x})^{2}$, which would differentiate to $2e^{2x}$.'],
    ['Differentiate $y = @r{sin x}$.', '$@f{cos x}{2@r{sin x}}$',
     'The outer root gives $@f{1}{2@r{sin x}}$ and the inner derivative is $cos x$.'],
    ['Differentiate $y = sin x · cos x$ and simplify.', '$cos 2x$',
     'Product rule: $cos x · cos x + sin x · (−sin x) = cos^{2}x − sin^{2}x$, which is $cos 2x$. Alternatively write $y = @f{sin 2x}{2}$ first, whose derivative is $cos 2x$ at once.'],
    ['Differentiate $y = @f{e^{x}}{x}$.', '$@f{e^{x}(x − 1)}{x^{2}}$',
     'Quotient rule: $@f{e^{x} · x − e^{x} · 1}{x^{2}} = @f{e^{x}(x − 1)}{x^{2}}$. It is zero at $x = 1$, the minimum of the curve for $x > 0$.'],
    ['Differentiate $y = x ln x − x$.', '$ln x$',
     'The product gives $ln x + x · @f{1}{x} = ln x + 1$, and the $−x$ contributes $−1$. The two cancel, leaving $ln x$ — which is why this expression is the antiderivative of $ln x$.'],
    ['Differentiate $y = tan^{2}x$.', '$2 tan x · sec^{2}x$',
     'The outer square gives $2tan x$ and the inner derivative is $sec^{2}x$.'],
    ['Differentiate $y = (ln x)^{3}$.', '$@f{3(ln x)^{2}}{x}$',
     'The outer cube gives $3(ln x)^{2}$ and the inner derivative is $@f{1}{x}$. Keep it apart from $ln(x^{3})$, which is $3ln x$ and differentiates to $@f{3}{x}$.']
  ],

  hard: [
    ['$y = e^{x}cos x$. Find $@f{d^{2}y}{dx^{2}}$.', '$−2e^{x}sin x$',
     'First, $y′ = e^{x}cos x − e^{x}sin x = e^{x}(cos x − sin x)$. Differentiating again by the product rule: $e^{x}(cos x − sin x) + e^{x}(−sin x − cos x) = e^{x}(−2sin x) = −2e^{x}sin x$. The cosine terms cancel exactly.'],
    ['Differentiate $y = ln@f{1 + x}{1 − x}$ and simplify.', '$@f{2}{1 − x^{2}}$',
     'Split the logarithm first: $y = ln(1 + x) − ln(1 − x)$. Then $y′ = @f{1}{1 + x} + @f{1}{1 − x}$, since the second term contributes $−@f{−1}{1 − x}$. Over a common denominator this is $@f{(1 − x) + (1 + x)}{(1 + x)(1 − x)} = @f{2}{1 − x^{2}}$.'],
    ['Differentiate $y = x^{ln x}$ for $x > 0$.', '$@f{2 ln x}{x} · x^{ln x}$',
     'Both the base and the index vary, so take logarithms: $ln y = (ln x)^{2}$. Differentiating, $@f{y′}{y} = 2 ln x · @f{1}{x}$, so $y′ = x^{ln x} · @f{2 ln x}{x}$. It is zero at $x = 1$, where the function has its minimum value $1$.'],
    ['Find the tangent to $y = e^{x}$ that passes through the origin.', '$y = ex$, touching at $(1, e)$',
     'The tangent at $x = a$ is $y − e^{a} = e^{a}(x − a)$, that is $y = e^{a}x + e^{a}(1 − a)$. For it to pass through $(0, 0)$ we need $e^{a}(1 − a) = 0$, and since $e^{a} ≠ 0$ this gives $a = 1$. The tangent is $y = ex$ and it touches at $(1, e)$. Exactly one such tangent exists.'],
    ['Find and classify the stationary point of $y = xe^{−x}$.', 'Maximum at $x = 1$, of value $@f{1}{e}$',
     '$y′ = e^{−x} − xe^{−x} = e^{−x}(1 − x)$, zero at $x = 1$ since $e^{−x}$ never vanishes. Then $y″ = e^{−x}(x − 2)$, which is $−@f{1}{e} < 0$ at $x = 1$, so it is a maximum, of value $@f{1}{e} ≈ 0.368$.'],
    ['Show that $y = e^{2x}sin 3x$ satisfies $y″ − 4y′ + 13y = 0$.', 'Verified',
     '$y′ = e^{2x}(2sin 3x + 3cos 3x)$. Differentiating again, $y″ = 2e^{2x}(2sin 3x + 3cos 3x) + e^{2x}(6cos 3x − 9sin 3x) = e^{2x}(−5sin 3x + 12cos 3x)$. Then $y″ − 4y′ + 13y = e^{2x}[(−5 − 8 + 13)sin 3x + (12 − 12)cos 3x] = 0$. Both brackets vanish, as required.'],
    ['Differentiate $y = ln(x + @r{x^{2} + 1})$ and simplify.', '$@f{1}{@r{x^{2} + 1}}$',
     'Use $@f{f′}{f}$. The inner derivative is $1 + @f{x}{@r{x^{2} + 1}} = @f{@r{x^{2} + 1} + x}{@r{x^{2} + 1}}$. Dividing by $f = x + @r{x^{2} + 1}$, that whole bracket cancels and leaves $@f{1}{@r{x^{2} + 1}}$. This function is $arsinh x$.'],
    ['Find the least value of $y = e^{x} + e^{−x}$.', '$2$, at $x = 0$',
     '$y′ = e^{x} − e^{−x}$, which is zero when $e^{x} = e^{−x}$, that is $x = 0$. Then $y″ = e^{x} + e^{−x} = 2 > 0$, a minimum, of value $1 + 1 = 2$. The function is $2cosh x$, and the result restates that $a + @f{1}{a} ≥ 2$ for positive $a$.'],
    ['Differentiate $y = @f{1 + tan x}{1 − tan x}$ and simplify.', '$@f{2sec^{2}x}{(1 − tan x)^{2}}$',
     'Quotient rule: $@f{sec^{2}x(1 − tan x) − (1 + tan x)(−sec^{2}x)}{(1 − tan x)^{2}}$. The numerator is $sec^{2}x[(1 − tan x) + (1 + tan x)] = 2sec^{2}x$. Since $y = tan(@f{π}{4} + x)$ by the addition formula, the answer also equals $sec^{2}(@f{π}{4} + x)$.'],
    ['Prove that $(sec x)′ = sec x · tan x$, starting from $sec x = @f{1}{cos x}$.', '$sec x · tan x$',
     'By the reciprocal rule, $@f{d}{dx}@f{1}{cos x} = −@f{(cos x)′}{cos^{2}x} = @f{sin x}{cos^{2}x}$. Split that as $@f{1}{cos x} · @f{sin x}{cos x} = sec x · tan x$. The two minus signs — one from the rule, one from the derivative of the cosine — cancel, which is why this derivative has no minus sign while $(cosec x)′$ does.']
  ]
}];
