/* 11AG-MATH-FINAL — content. Maths is LaTeX between $…$, rendered by KaTeX.
   15 questions, 100 marks, 40 minutes.  6 easy / 6 medium / 3 hard = 40/40/20. */

export const meta = {
  file: '11AG-MATH-FINAL',
  endLine: '— End of the exam —',
  schemeNote: 'Teacher copy — not for distribution.  Grade 11AG · 26/10/2026 · Total 100 marks'
};

export const sections = [
  { head: 'Section A — Easy (6 questions × 4 marks = 24 marks)',
    instruction: 'Answer all six questions.',
    lines: 2,
    questions: [
      ['Find $\\displaystyle\\lim_{x\\to 2}\\,(3x^{2}-5)$.', 4, '$7$'],
      ['Find $\\displaystyle\\lim_{x\\to 3}\\frac{x^{2}-9}{x-3}$.', 4, '$6$'],
      ['Find $\\displaystyle\\lim_{x\\to\\infty}\\frac{5x^{2}+1}{2x^{2}-x}$.', 4, '$\\dfrac{5}{2}$'],
      ['Differentiate $y=4x^{5}$.', 4, '$20x^{4}$'],
      ['Differentiate $y=\\sin x+e^{x}$.', 4, '$\\cos x+e^{x}$'],
      ['Differentiate $y=\\ln x-\\cos x$.', 4, '$\\dfrac{1}{x}+\\sin x$']
    ] },
  { head: 'Section B — Medium (6 questions × 6 marks = 36 marks)',
    instruction: 'Answer all six questions. Show your working.',
    lines: 4,
    questions: [
      ['Find $\\displaystyle\\lim_{x\\to 1}\\frac{x^{2}+2x-3}{x-1}$.', 6, '$4$'],
      ['Find $\\displaystyle\\lim_{x\\to\\infty}\\frac{3x^{3}-2x}{6x^{3}+5}$.', 6, '$\\dfrac{1}{2}$'],
      ['Differentiate $y=(2x+1)^{5}$.', 6, '$10(2x+1)^{4}$'],
      ['Differentiate $y=x^{2}e^{x}$, giving your answer in factorised form.', 6, '$xe^{x}(x+2)$'],
      ['Differentiate $y=\\tan 4x$, and find the gradient of the curve at $x=0$.', 6, '$4\\sec^{2}4x$; gradient $4$'],
      ['Differentiate $y=\\ln\\!\\left(3x^{2}+1\\right)$.', 6, '$\\dfrac{6x}{3x^{2}+1}$']
    ] },
];

export const sectionC = {
  head: 'Section C — Hard (3 questions, 40 marks)',
  instruction: 'Answer all three questions. Show every step of your working.',
  lines: 5,
  questions: [
    ['Evaluate the following limits:', [
      ['$\\displaystyle\\lim_{x\\to 0}\\frac{\\sqrt{x+4}-2}{x}$', 6, '$\\dfrac{1}{4}$'],
      ['$\\displaystyle\\lim_{x\\to\\infty}\\left(\\sqrt{x^{2}+3x}-x\\right)$', 7, '$\\dfrac{3}{2}$']
    ]],
    ['Differentiate, simplifying your answer where possible:', [
      ['$y=\\sqrt{x^{2}+9}$', 6, '$\\dfrac{x}{\\sqrt{x^{2}+9}}$'],
      ['$y=\\ln(\\cos x)$', 7, '$-\\tan x$']
    ]],
    ['A curve has equation $y=x^{2}\\sin x$.', [
      ['Find $\\dfrac{dy}{dx}$.', 7, '$2x\\sin x+x^{2}\\cos x$'],
      ['Find $\\dfrac{d^{2}y}{dx^{2}}$.', 7, '$2\\sin x+4x\\cos x-x^{2}\\sin x$']
    ]]
  ]
};
