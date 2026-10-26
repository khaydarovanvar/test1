/* 11AG-MATH-FINAL — content. Maths is LaTeX between $…$, rendered by KaTeX.
   15 questions, 100 marks, 40 minutes.  6 easy / 6 medium / 3 hard = 40/40/20.
   Each question is [ text, marks, answer, worked solution ].                */

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
      ['Find $\\displaystyle\\lim_{x\\to 2}\\,(3x^{2}-5)$.', 4, '$7$',
       'The expression is a polynomial, so it is continuous and the limit is the value: $3(2)^{2}-5=12-5=7$.'],
      ['Find $\\displaystyle\\lim_{x\\to 3}\\frac{x^{2}-9}{x-3}$.', 4, '$6$',
       'Substitution gives $\\tfrac{0}{0}$, so factorise: $\\dfrac{x^{2}-9}{x-3}=\\dfrac{(x-3)(x+3)}{x-3}=x+3$ for $x\\neq3$. As $x\\to3$ this tends to $6$.'],
      ['Find $\\displaystyle\\lim_{x\\to\\infty}\\frac{5x^{2}+1}{2x^{2}-x}$.', 4, '$\\dfrac{5}{2}$',
       'Divide every term by the highest power, $x^{2}$: $\\dfrac{5+1/x^{2}}{2-1/x}$. As $x\\to\\infty$ both $1/x^{2}$ and $1/x$ tend to $0$, leaving $\\dfrac{5}{2}$.'],
      ['Differentiate $y=4x^{5}$.', 4, '$20x^{4}$',
       'Power rule: multiply by the index and drop it by one, $4\\times5x^{4}=20x^{4}$.'],
      ['Differentiate $y=\\sin x+e^{x}$.', 4, '$\\cos x+e^{x}$',
       'Differentiate term by term: $(\\sin x)^{\\prime}=\\cos x$ and $(e^{x})^{\\prime}=e^{x}$.'],
      ['Differentiate $y=\\ln x-\\cos x$.', 4, '$\\dfrac{1}{x}+\\sin x$',
       'Term by term: $(\\ln x)^{\\prime}=\\dfrac{1}{x}$ and $(\\cos x)^{\\prime}=-\\sin x$, so subtracting it gives $+\\sin x$.']
    ] },
  { head: 'Section B — Medium (6 questions × 6 marks = 36 marks)',
    instruction: 'Answer all six questions. Show your working.',
    lines: 4,
    questions: [
      ['Find $\\displaystyle\\lim_{x\\to 1}\\frac{x^{2}+2x-3}{x-1}$.', 6, '$4$',
       'Substitution gives $\\tfrac{0}{0}$. Factorising, $x^{2}+2x-3=(x+3)(x-1)$, so the quotient is $x+3$ for $x\\neq1$, which tends to $4$.'],
      ['Find $\\displaystyle\\lim_{x\\to\\infty}\\frac{3x^{3}-2x}{6x^{3}+5}$.', 6, '$\\dfrac{1}{2}$',
       'Divide through by $x^{3}$: $\\dfrac{3-2/x^{2}}{6+5/x^{3}}$. Both small terms vanish as $x\\to\\infty$, leaving $\\dfrac{3}{6}=\\dfrac{1}{2}$.'],
      ['Differentiate $y=(2x+1)^{5}$.', 6, '$10(2x+1)^{4}$',
       'Chain rule. The outer derivative is $5(2x+1)^{4}$ and the inner derivative of $2x+1$ is $2$, so $y^{\\prime}=5(2x+1)^{4}\\times2=10(2x+1)^{4}$.'],
      ['Differentiate $y=x^{2}e^{x}$, giving your answer in factorised form.', 6, '$xe^{x}(x+2)$',
       'Product rule with $u=x^{2}$, $v=e^{x}$: $y^{\\prime}=2x\\,e^{x}+x^{2}e^{x}=e^{x}(2x+x^{2})=xe^{x}(x+2)$.'],
      ['Differentiate $y=\\tan 4x$, and find the gradient of the curve at $x=0$.', 6, '$4\\sec^{2}4x$; gradient $4$',
       'Chain rule: the outer derivative is $\\sec^{2}4x$ and the inner is $4$, so $y^{\\prime}=4\\sec^{2}4x$. At $x=0$, $\\sec 0=1$, so the gradient is $4\\times1=4$.'],
      ['Differentiate $y=\\ln\\!\\left(3x^{2}+1\\right)$.', 6, '$\\dfrac{6x}{3x^{2}+1}$',
       'Use $\\dfrac{d}{dx}\\ln f(x)=\\dfrac{f^{\\prime}(x)}{f(x)}$ with $f=3x^{2}+1$ and $f^{\\prime}=6x$. Forgetting the inner derivative and writing $\\dfrac{1}{3x^{2}+1}$ is the common error.']
    ] },
];

export const sectionC = {
  head: 'Section C — Hard (3 questions, 40 marks)',
  instruction: 'Answer all three questions. Show every step of your working.',
  lines: 5,
  questions: [
    ['Evaluate the following limits:', [
      ['$\\displaystyle\\lim_{x\\to 0}\\frac{\\sqrt{x+4}-2}{x}$', 6, '$\\dfrac{1}{4}$',
       'Substitution gives $\\tfrac{0}{0}$, and there is a surd, so multiply above and below by the conjugate $\\sqrt{x+4}+2$. The numerator becomes $(x+4)-4=x$, which cancels with the denominator and leaves $\\dfrac{1}{\\sqrt{x+4}+2}$. As $x\\to0$ this tends to $\\dfrac{1}{2+2}=\\dfrac{1}{4}$.'],
      ['$\\displaystyle\\lim_{x\\to\\infty}\\left(\\sqrt{x^{2}+3x}-x\\right)$', 7, '$\\dfrac{3}{2}$',
       'This is the form $\\infty-\\infty$. Multiply by the conjugate over itself: $\\dfrac{(x^{2}+3x)-x^{2}}{\\sqrt{x^{2}+3x}+x}=\\dfrac{3x}{\\sqrt{x^{2}+3x}+x}$. Dividing above and below by $x$ (positive, so $x=\\sqrt{x^{2}}$) gives $\\dfrac{3}{\\sqrt{1+3/x}+1}$, which tends to $\\dfrac{3}{2}$.']
    ]],
    ['Differentiate, simplifying your answer where possible:', [
      ['$y=\\sqrt{x^{2}+9}$', 6, '$\\dfrac{x}{\\sqrt{x^{2}+9}}$',
       'Write $y=(x^{2}+9)^{1/2}$. The chain rule gives $y^{\\prime}=\\tfrac{1}{2}(x^{2}+9)^{-1/2}\\times2x$, and the $2$s cancel to leave $\\dfrac{x}{\\sqrt{x^{2}+9}}$.'],
      ['$y=\\ln(\\cos x)$', 7, '$-\\tan x$',
       'Use $\\dfrac{d}{dx}\\ln f=\\dfrac{f^{\\prime}}{f}$ with $f=\\cos x$ and $f^{\\prime}=-\\sin x$, giving $\\dfrac{-\\sin x}{\\cos x}=-\\tan x$. The minus sign comes from the derivative of the cosine.']
    ]],
    ['A curve has equation $y=x^{2}\\sin x$.', [
      ['Find $\\dfrac{dy}{dx}$.', 7, '$2x\\sin x+x^{2}\\cos x$',
       'Product rule with $u=x^{2}$ and $v=\\sin x$: $u^{\\prime}v+uv^{\\prime}=2x\\sin x+x^{2}\\cos x$.'],
      ['Find $\\dfrac{d^{2}y}{dx^{2}}$.', 7, '$2\\sin x+4x\\cos x-x^{2}\\sin x$',
       'Differentiate each term of $2x\\sin x+x^{2}\\cos x$ by the product rule. The first gives $2\\sin x+2x\\cos x$; the second gives $2x\\cos x-x^{2}\\sin x$. Adding, the two $2x\\cos x$ terms combine: $2\\sin x+4x\\cos x-x^{2}\\sin x$.']
    ]]
  ]
};
