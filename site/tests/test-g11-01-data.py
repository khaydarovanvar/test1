# -*- coding: utf-8 -*-
"""Grade 11 Algebra — the rules of differentiation and the chain rule.

Fifteen questions and a bonus, out of 100 marks, in 40 minutes, on two pages.

The two topics the class needs most carry 82 of the 100 marks:

    lessons 7–9    the rules of differentiation        46
    lessons 10–12  the derivative of a composite fn    36

The rest is the tangent and the normal (10) and two 0/0 limits (8), which are
there so the differentiation is used for something and not only performed.

Left out on purpose, and not needed anywhere on the paper: increments and the
problem of the tangent (1–2), the derivative of a function from first
principles (5–6), the modulus function (15–16), investigating a function with
the derivative (19–22), and extremum problems (23–25).

Every answer and every intermediate step here was checked against a CAS before
it was written down.

Notation inside the text: {...} is a maths span, a^b raises, and [num]/[den]
stacks into a real fraction. The ^ notation only raises digits or a single
letter, so a fractional index needs an explicit <sup>. LIM() builds the limit
operator with its own subscript, upright, the way the lesson pages set it.
"""

TITLE = 'Differentiation test · Algebra'
GRADE = 'Grade 11'
DURATION = 40          # minutes
TOTAL = 100            # marks, excluding the bonus
TOOLS = 'No calculator'


def LIM(to, expr):
    """{lim}<sub>to</sub> expr, as one maths span."""
    return '{<span class="op">lim</span><sub>%s</sub>&thinsp;%s}' % (to, expr)


# One short line on the question paper. The full references are of use to
# whoever is marking, not to a student with 40 minutes, so they go on the
# mark scheme instead.
COVERS_SHORT = 'Lessons 3–4, 7–12 and 17–18'

COVERS = [
    ('3–4',     'The limit of a function — the 0/0 form', 'Algebra 11, §1.2 · P1 · 7.1'),
    ('7–9',     'The rules of differentiation', 'Algebra 11, §1.4 · P1 · 7.2–7.4'),
    ('10–12',   'The derivative of a composite function', 'Algebra 11, §1.5 · P1 · 7.5'),
    ('17–18',   'The equations of the tangent and the normal', 'Algebra 11, §1.6 · P1 · 7.6'),
]

RULES = [
    'Answer on separate paper, and show your working — method carries marks.',
    'Simplify every derivative. Leave no negative or fractional index in a final answer.',
]

TIP = ('The rules and the chain rule carry 82 of the 100 marks between them, which is what '
       'this paper is for. The two 0/0 limits and the tangent are there so that a derivative '
       'is used for something and not only performed. Nothing on the paper needs lessons '
       '1–2, 5–6, 15–16, 19–22 or 23–25.')


def Q(q, marks, ans, work, lesson, note=''):
    """One question: text, marks, answer, worked solution, and which of the
    four examined topics it belongs to."""
    return dict(q=q, marks=marks, ans=ans, work=work, lesson=lesson, note=note)


SECTIONS = [
 dict(letter='A', level='easy', title='Five marks each',
      lead='Differentiate and simplify. One line of working is enough.',
      cols=2, space=28, items=[

  Q('{y = 4x^3 − 5x + 7}', 5, '{[dy]/[dx] = 12x^2 − 5}',
    'Power rule term by term; the derivative of the constant {7} is zero.', 4),

  Q('{y = [3]/[x^2]}', 5, '{[dy]/[dx] = −[6]/[x^3]}',
    'Rewrite as {y = 3x<sup>−2</sup>}, so {[dy]/[dx] = −6x<sup>−3</sup> = −[6]/[x^3]}.', 4,
    'The rewrite is the whole question. A student who cannot turn {[3]/[x^2]} into a power '
    'cannot start.'),

  Q('{y = 5√x}', 5, '{[dy]/[dx] = [5]/[2√x]}',
    'Rewrite as {y = 5x<sup>1/2</sup>}, so '
    '{[dy]/[dx] = [5]/[2]x<sup>−1/2</sup> = [5]/[2√x]}.', 4),

  Q('{y = [x^3 − 2x]/[x]}', 5, '{[dy]/[dx] = 2x}',
    'Divide first: {y = x^2 − 2} for {x ≠ 0}, so {[dy]/[dx] = 2x}.', 4,
    'The quotient rule works but wastes two minutes. Looking at the expression before '
    'reaching for a rule is the point.'),

  Q('{y = (3x + 1)^5}', 5, '{[dy]/[dx] = 15(3x + 1)^4}',
    'Chain rule: {5(3x + 1)^4} times the derivative of the inside, which is {3}.', 5),

  Q('{y = (x^2 − 4)^3}', 5, '{[dy]/[dx] = 6x(x^2 − 4)^2}',
    'Chain rule: {3(x^2 − 4)^2} times the derivative of the inside, which is {2x}.', 5),

  Q('{y = [1]/[2x − 5]}', 5, '{[dy]/[dx] = −[2]/[(2x − 5)^2]}',
    'Rewrite as {y = (2x − 5)<sup>−1</sup>}, so '
    '{[dy]/[dx] = −(2x − 5)<sup>−2</sup> · 2 = −[2]/[(2x − 5)^2]}.', 5),

  Q('{y = √(4x + 1)}', 5, '{[dy]/[dx] = [2]/[√(4x + 1)]}',
    'Rewrite as {y = (4x + 1)<sup>1/2</sup>}, so '
    '{[dy]/[dx] = [1]/[2](4x + 1)<sup>−1/2</sup> · 4 = [2]/[√(4x + 1)]}.', 5),

 ]),

 dict(letter='B', level='med', title='Eight marks each',
      lead='Method marks are available even when the final answer is wrong.',
      cols=1, space=42, items=[

  Q('Differentiate {y = [2x − 1]/[x^2 + 3]} and find the gradient of the curve at {x = 1}.',
    8, '{[dy]/[dx] = [−2x^2 + 2x + 6]/[(x^2 + 3)^2]}; &nbsp;gradient {= [3]/[8]}',
    'Quotient rule with {u = 2x − 1}, {v = x^2 + 3}, so {u′ = 2} and {v′ = 2x}:<br>'
    '{[dy]/[dx] = [2(x^2 + 3) − (2x − 1)(2x)]/[(x^2 + 3)^2] = '
    '[2x^2 + 6 − 4x^2 + 2x]/[(x^2 + 3)^2] = [−2x^2 + 2x + 6]/[(x^2 + 3)^2]}.<br>'
    'At {x = 1}: {[−2 + 2 + 6]/[4^2] = [6]/[16] = [3]/[8]}.', 4,
    'The expansion {−(2x − 1)(2x) = −4x^2 + 2x} is where the sign is usually lost.'),

  Q('{y = x^3 − 3x^2 + 4}. Find the values of {x} at which the gradient of the curve '
    'is {9}.',
    8, '{x = 3} &nbsp;and&nbsp; {x = −1}',
    '{[dy]/[dx] = 3x^2 − 6x}. Set it equal to {9}: {3x^2 − 6x = 9}, so '
    '{3x^2 − 6x − 9 = 0} and {x^2 − 2x − 3 = 0}.<br>'
    'That factorises as {(x − 3)(x + 1) = 0}, giving {x = 3} and {x = −1}.', 4,
    'Two answers, not one. Dividing by {3} before factorising saves the arithmetic.'),

  Q('{y = √(x^2 + 9)}. Find {[dy]/[dx]} and its value at {x = 4}.',
    8, '{[dy]/[dx] = [x]/[√(x^2 + 9)]}; &nbsp;at {x = 4} it is {[4]/[5]}',
    'Write {y = (x^2 + 9)<sup>1/2</sup>}. Chain rule: '
    '{[dy]/[dx] = [1]/[2](x^2 + 9)<sup>−1/2</sup> · 2x = [x]/[√(x^2 + 9)]}.<br>'
    'At {x = 4}: {√(16 + 9) = 5}, so the value is {[4]/[5]}.', 5,
    'The factor {2x} from the inside function is the mark most often dropped.'),

  Q('Differentiate {y = [5]/[(1 − 2x)^3]}.',
    8, '{[dy]/[dx] = [30]/[(1 − 2x)^4]}',
    'Rewrite as {y = 5(1 − 2x)<sup>−3</sup>}. Chain rule:<br>'
    '{[dy]/[dx] = 5 · (−3)(1 − 2x)<sup>−4</sup> · (−2) = 30(1 − 2x)<sup>−4</sup> = '
    '[30]/[(1 − 2x)^4]}.', 5,
    'Two minus signs, and they cancel: the {−3} from the power and the {−2} from the '
    'inside. An answer of {−[30]/[(1 − 2x)^4]} means only one of them was used.'),

  Q('Evaluate:<br>'
    '<b>(a)</b> ' + LIM('x→3', '[x^2 − 9]/[x − 3]') + ' &nbsp;<span class="mk">[4]</span><br>'
    '<b>(b)</b> ' + LIM('x→0', '[√(x + 4) − 2]/[x]') + ' &nbsp;<span class="mk">[4]</span>',
    8, '<b>(a)</b> {6} &nbsp;&nbsp; <b>(b)</b> {[1]/[4]}',
    '<b>(a)</b> Substitution gives {[0]/[0]}, so factorise: '
    '{[(x − 3)(x + 3)]/[x − 3] = x + 3} for {x ≠ 3}, which tends to {6}.<br>'
    '<b>(b)</b> {[0]/[0]} again, with a root — multiply by the conjugate '
    '{√(x + 4) + 2}:<br>'
    '{[(x + 4) − 4]/[x(√(x + 4) + 2)] = [x]/[x(√(x + 4) + 2)] = [1]/[√(x + 4) + 2]}, '
    'for {x ≠ 0}, which tends to {[1]/[2 + 2] = [1]/[4]}.', 2,
    'The two techniques for {[0]/[0]}: factorise and cancel, or multiply by the conjugate. '
    '{[0]/[0]} written down as an answer scores nothing — it is the signal that algebra is '
    'needed, not a value.'),
 ]),

 dict(letter='C', level='hard', title='Ten marks each',
      lead='Full method required.',
      cols=1, space=56, items=[

  Q('{y = x^2√(2x − 1)}.<br>'
    '<b>(a)</b> Show that {[dy]/[dx] = [x(5x − 2)]/[√(2x − 1)]}. '
    '&nbsp;<span class="mk">[6]</span><br>'
    '<b>(b)</b> Hence find the gradient of the curve at {x = 5}. '
    '&nbsp;<span class="mk">[4]</span>',
    10, '<b>(a)</b> shown below &nbsp;&nbsp; <b>(b)</b> {[115]/[3]}',
    '<b>(a)</b> Product rule with {u = x^2} and {v = (2x − 1)<sup>1/2</sup>}. '
    'By the chain rule {v′ = [1]/[2](2x − 1)<sup>−1/2</sup> · 2 = [1]/[√(2x − 1)]}, so<br>'
    '{[dy]/[dx] = 2x√(2x − 1) + [x^2]/[√(2x − 1)]}.<br>'
    'Over the common denominator {√(2x − 1)}: '
    '{[2x(2x − 1) + x^2]/[√(2x − 1)] = [4x^2 − 2x + x^2]/[√(2x − 1)] = '
    '[5x^2 − 2x]/[√(2x − 1)] = [x(5x − 2)]/[√(2x − 1)]}.<br>'
    '<b>(b)</b> At {x = 5}: {√(10 − 1) = 3} and {x(5x − 2) = 5 · 23 = 115}, so the '
    'gradient is {[115]/[3]}.', 4,
    'The product rule and the chain rule in one question, and then the algebra that puts '
    'the two terms over one denominator — which is where the “show that” is won or lost.'),

  Q('The curve {y = ax^2 + bx} passes through {(2, 2)} and has gradient {5} at {x = 2}.<br>'
    '<b>(a)</b> Find {a} and {b}. &nbsp;<span class="mk">[7]</span><br>'
    '<b>(b)</b> Hence find the equation of the tangent to the curve at {(2, 2)}. '
    '&nbsp;<span class="mk">[3]</span>',
    10, '<b>(a)</b> {a = 2}, {b = −3} &nbsp;&nbsp; <b>(b)</b> {y = 5x − 8}',
    '<b>(a)</b> Two facts give two equations.<br>'
    'The curve passes through {(2, 2)}: {4a + 2b = 2}, so {2a + b = 1}.<br>'
    'The gradient is {[dy]/[dx] = 2ax + b}, and at {x = 2} it is {5}: {4a + b = 5}.<br>'
    'Subtracting the first from the second gives {2a = 4}, so {a = 2}, and then '
    '{b = 1 − 4 = −3}. The curve is {y = 2x^2 − 3x}.<br>'
    '<b>(b)</b> The gradient at {(2, 2)} is {5}, so {y − 2 = 5(x − 2)}, that is '
    '{y = 5x − 8}.', 8,
    '“Passes through” is a statement about {y}, “has gradient” is a statement about '
    '{[dy]/[dx]} — turning each into its own equation is the whole question. A check is '
    'worth the thirty seconds: {y(2) = 8 − 6 = 2} and {y′(2) = 8 − 3 = 5}.'),
 ]),
]

BONUS = dict(
  marks=10,
  space=52,
  lead='Attempt this only when the rest is finished. It can make up marks lost '
       'elsewhere, but your total is still recorded out of 100.',
  item=Q('{y = [x + 1]/[√x]} for {x > 0}.<br>'
         '<b>(a)</b> Show that {[dy]/[dx] = [x − 1]/[2x√x]}. '
         '&nbsp;<span class="mk">[7]</span><br>'
         '<b>(b)</b> Hence find the gradient of the curve at {x = 4}. '
         '&nbsp;<span class="mk">[3]</span>',
         10,
         '<b>(a)</b> shown below &nbsp;&nbsp; <b>(b)</b> {[3]/[16]}',
         '<b>(a)</b> Split the fraction before differentiating:<br>'
         '{y = [x]/[√x] + [1]/[√x] = x<sup>1/2</sup> + x<sup>−1/2</sup>}.<br>'
         'Then {[dy]/[dx] = [1]/[2]x<sup>−1/2</sup> − [1]/[2]x<sup>−3/2</sup> = '
         '[1]/[2]x<sup>−3/2</sup>(x − 1) = [x − 1]/[2x√x]}, '
         'since {x<sup>3/2</sup> = x√x}.<br>'
         '<b>(b)</b> At {x = 4}: {x − 1 = 3} and {2x√x = 2 · 4 · 2 = 16}, so the gradient '
         'is {[3]/[16]}.', 4,
         'The quotient rule also works, but it takes twice as long and the simplification '
         'at the end is harder. Splitting the fraction first is the skill being tested.'))

LESSON_OF = {
  2:   'Lessons 3–4 · The limit of a function',
  4:   'Lessons 7–9 · The rules of differentiation',
  5:   'Lessons 10–12 · The derivative of a composite function',
  8:   'Lessons 17–18 · The equations of the tangent and the normal',
}
