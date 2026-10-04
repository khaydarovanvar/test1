# -*- coding: utf-8 -*-
"""Grade 11 Algebra — the rules of differentiation and the chain rule.

Seventeen questions and a bonus, out of 100 marks, in 40 minutes, on two pages.

The two topics the class needs most carry 78 of the 100 marks:

    lessons 7–9    the rules of differentiation        46
    lessons 10–12  the derivative of a composite fn    32

The rest is the tangent and the normal (10) and limits at infinity (12), which
are there so the differentiation is used for something and not only performed.

Left out on purpose, and not needed anywhere on the paper: increments and the
problem of the tangent (1–2), the limit of a function (3–4), the derivative of
a function from first principles (5–6), the modulus function (15–16),
investigating a function with the derivative (19–22), and extremum problems
(23–25).

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


INF = 'x→∞'

# One short line on the question paper. The full references are of use to
# whoever is marking, not to a student with 40 minutes, so they go on the
# mark scheme instead.
COVERS_SHORT = 'Lessons 7–12 and 17–18, with limits at infinity'

COVERS = [
    ('7–9',     'The rules of differentiation', 'Algebra 11, §1.4 · P1 · 7.2–7.4'),
    ('10–12',   'The derivative of a composite function', 'Algebra 11, §1.5 · P1 · 7.5'),
    ('17–18',   'The equations of the tangent and the normal', 'Algebra 11, §1.6 · P1 · 7.6'),
    ('3–4 ext', 'Limits at infinity — extension', 'Algebra 11, §1.2 · P1 · 7.1 · new on this paper'),
]

RULES = [
    'Answer on separate paper, and show your working — method carries marks.',
    'Simplify every derivative. Leave no negative or fractional index in a final answer.',
]

TIP = ('The rules and the chain rule carry 78 of the 100 marks between them, which is what '
       'this paper is for. The tangent and the normal, and the limits at infinity, are there '
       'so that a derivative is used for something and not only performed. Nothing on the '
       'paper needs lessons 1–6, 15–16, 19–22 or 23–25.')


def Q(q, marks, ans, work, lesson, note=''):
    """One question: text, marks, answer, worked solution, and which of the
    four examined topics it belongs to."""
    return dict(q=q, marks=marks, ans=ans, work=work, lesson=lesson, note=note)


SECTIONS = [
 dict(letter='A', level='easy', title='Four marks each',
      lead='Differentiate and simplify. One line of working is enough.',
      cols=2, space=20, items=[

  Q('{y = 4x^3 − 5x + 7}', 4, '{[dy]/[dx] = 12x^2 − 5}',
    'Power rule term by term; the derivative of the constant {7} is zero.', 4),

  Q('{y = [3]/[x^2]}', 4, '{[dy]/[dx] = −[6]/[x^3]}',
    'Rewrite as {y = 3x<sup>−2</sup>}, so {[dy]/[dx] = −6x<sup>−3</sup> = −[6]/[x^3]}.', 4,
    'The rewrite is the whole question. A student who cannot turn {[3]/[x^2]} into a power '
    'cannot start.'),

  Q('{y = 5√x}', 4, '{[dy]/[dx] = [5]/[2√x]}',
    'Rewrite as {y = 5x<sup>1/2</sup>}, so '
    '{[dy]/[dx] = [5]/[2]x<sup>−1/2</sup> = [5]/[2√x]}.', 4),

  Q('{y = (2x + 1)(x − 4)}', 4, '{[dy]/[dx] = 4x − 7}',
    'Expand first: {y = 2x^2 − 7x − 4}, so {[dy]/[dx] = 4x − 7}. The product rule gives '
    'the same: {2(x − 4) + (2x + 1) = 4x − 7}.', 4),

  Q('{y = [x^3 − 2x]/[x]}', 4, '{[dy]/[dx] = 2x}',
    'Divide first: {y = x^2 − 2} for {x ≠ 0}, so {[dy]/[dx] = 2x}.', 4,
    'The quotient rule works but wastes two minutes. Looking at the expression before '
    'reaching for a rule is the point.'),

  Q('{y = (3x + 1)^5}', 4, '{[dy]/[dx] = 15(3x + 1)^4}',
    'Chain rule: {5(3x + 1)^4} times the derivative of the inside, which is {3}.', 5),

  Q('{y = (x^2 − 4)^3}', 4, '{[dy]/[dx] = 6x(x^2 − 4)^2}',
    'Chain rule: {3(x^2 − 4)^2} times the derivative of the inside, which is {2x}.', 5),

  Q('{y = [1]/[2x − 5]}', 4, '{[dy]/[dx] = −[2]/[(2x − 5)^2]}',
    'Rewrite as {y = (2x − 5)<sup>−1</sup>}, so '
    '{[dy]/[dx] = −(2x − 5)<sup>−2</sup> · 2 = −[2]/[(2x − 5)^2]}.', 5),

  Q('{y = √(4x + 1)}', 4, '{[dy]/[dx] = [2]/[√(4x + 1)]}',
    'Rewrite as {y = (4x + 1)<sup>1/2</sup>}, so '
    '{[dy]/[dx] = [1]/[2](4x + 1)<sup>−1/2</sup> · 4 = [2]/[√(4x + 1)]}.', 5),

  Q('Evaluate: ' + LIM(INF, '[3x^2 + 2x]/[x^2 − 5]'), 4, '{3}',
    'Divide top and bottom by {x^2}: {[3 + 2/x]/[1 − 5/x^2]}. Both {[2]/[x]} and '
    '{[5]/[x^2]} tend to {0}, leaving {[3]/[1] = 3}.', 2.5,
    'Equal degrees, so the answer is the ratio of the leading coefficients — but the '
    'division has to be shown, not quoted.'),
 ]),

 dict(letter='B', level='med', title='Eight marks each',
      lead='Method marks are available even when the final answer is wrong.',
      cols=1, space=28, items=[

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

  Q('Evaluate, showing the division in each case:<br>'
    '<b>(a)</b> ' + LIM(INF, '[2x^2 − 3x + 1]/[5x^2 + 4]') + ' &nbsp;<span class="mk">[3]</span><br>'
    '<b>(b)</b> ' + LIM(INF, '[x^2 + 1]/[x^3 − 2]') + ' &nbsp;<span class="mk">[2]</span><br>'
    '<b>(c)</b> Explain why ' + LIM(INF, '[x^3 + 2x]/[4x^2 − 1]') + ' does not exist. '
    '&nbsp;<span class="mk">[3]</span>',
    8, '<b>(a)</b> {[2]/[5]} &nbsp;&nbsp; <b>(b)</b> {0} &nbsp;&nbsp; '
       '<b>(c)</b> it increases without bound',
    '<b>(a)</b> Divide by {x^2}: {[2 − 3/x + 1/x^2]/[5 + 4/x^2] → [2]/[5]}.<br>'
    '<b>(b)</b> Divide by {x^3}: {[1/x + 1/x^3]/[1 − 2/x^3] → [0]/[1] = 0}.<br>'
    '<b>(c)</b> Divide by {x^2}: {[x + 2/x]/[4 − 1/x^2]}. The denominator tends to {4}, '
    'but the numerator contains {x}, which grows without bound — so the quotient grows '
    'without bound and no finite limit exists.', 2.5,
    'The three parts are the three degree cases: top {=} bottom, top {<} bottom, '
    'top {>} bottom. A student who has only learnt “compare the degrees” can state the '
    'answers but cannot earn the method marks.'),
 ]),

 dict(letter='C', level='hard', title='Ten marks each',
      lead='Full method required.',
      cols=1, space=40, items=[

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

  Q('The curve {y = √(2x + 7)}.<br>'
    '<b>(a)</b> Find {[dy]/[dx]}. &nbsp;<span class="mk">[3]</span><br>'
    '<b>(b)</b> Find the equation of the tangent at the point where {x = 1}. '
    '&nbsp;<span class="mk">[4]</span><br>'
    '<b>(c)</b> Find the equation of the normal at that point, and the coordinates of the '
    'point where it crosses the {x}-axis. &nbsp;<span class="mk">[3]</span>',
    10, '<b>(a)</b> {[dy]/[dx] = [1]/[√(2x + 7)]} &nbsp;&nbsp; '
        '<b>(b)</b> {3y = x + 8} &nbsp;&nbsp; <b>(c)</b> {y = 6 − 3x}, crossing at {(2, 0)}',
    '<b>(a)</b> {y = (2x + 7)<sup>1/2</sup>}, so {[dy]/[dx] = [1]/[2](2x + 7)<sup>−1/2</sup> '
    '· 2 = [1]/[√(2x + 7)]}.<br>'
    '<b>(b)</b> At {x = 1}: {y = √9 = 3} and {[dy]/[dx] = [1]/[3]}. '
    'So {y − 3 = [1]/[3](x − 1)}, which tidies to {3y = x + 8}.<br>'
    '<b>(c)</b> The normal gradient is {−3}, so {y − 3 = −3(x − 1)}, that is {y = 6 − 3x}. '
    'It meets the {x}-axis where {y = 0}, so {x = 2} and the point is {(2, 0)}.', 8,
    'The {· 2} from the inside function in (a) is the mark most often dropped, and it '
    'carries through both later parts. Leaving the tangent as {y = [1]/[3]x + [8]/[3]} is '
    'not penalised.'),
 ]),
]

BONUS = dict(
  marks=10,
  space=32,
  lead='Attempt this only when the rest is finished. It can make up marks lost '
       'elsewhere, but your total is still recorded out of 100.',
  item=Q('{y = [x + 1]/[√x]} for {x > 0}.<br>'
         '<b>(a)</b> Show that {[dy]/[dx] = [x − 1]/[2x√x]}. '
         '&nbsp;<span class="mk">[7]</span><br>'
         '<b>(b)</b> Hence find the point at which the tangent to the curve is horizontal. '
         '&nbsp;<span class="mk">[3]</span>',
         10,
         '<b>(a)</b> shown below &nbsp;&nbsp; <b>(b)</b> {(1, 2)}',
         '<b>(a)</b> Split the fraction before differentiating:<br>'
         '{y = [x]/[√x] + [1]/[√x] = x<sup>1/2</sup> + x<sup>−1/2</sup>}.<br>'
         'Then {[dy]/[dx] = [1]/[2]x<sup>−1/2</sup> − [1]/[2]x<sup>−3/2</sup> = '
         '[1]/[2]x<sup>−3/2</sup>(x − 1) = [x − 1]/[2x√x]}, '
         'since {x<sup>3/2</sup> = x√x}.<br>'
         '<b>(b)</b> The tangent is horizontal where {[dy]/[dx] = 0}, so {x = 1}. '
         'Then {y = [1 + 1]/[√1] = 2}, and the point is {(1, 2)}.', 4,
         'The quotient rule also works, but it takes twice as long and the simplification '
         'at the end is harder. Splitting the fraction first is the skill being tested.'))

LESSON_OF = {
  2.5: 'Lessons 3–4, extension · Limits at infinity',
  4:   'Lessons 7–9 · The rules of differentiation',
  5:   'Lessons 10–12 · The derivative of a composite function',
  8:   'Lessons 17–18 · The equations of the tangent and the normal',
}
