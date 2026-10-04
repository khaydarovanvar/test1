# -*- coding: utf-8 -*-
"""Grade 11 Algebra, Quarter I review paper — lessons 5–22, plus limits at
infinity.

Thirteen questions and a bonus, out of 100 marks, in 40 minutes, on two pages.

Three topics are deliberately left out: lessons 1–2 "Increments, and the
problem of the tangent", lessons 3–4 "The limit of a function", and lessons
23–25 "Extremum problems". Nothing on this paper needs them.

Limits at infinity are not in §1.2 as it is taught; they are examined here as
the extension to lessons 3–4, at 13 marks — one short question and one that
asks for the three degree cases.

Every answer and every intermediate step here was checked against a CAS before
it was written down.

Notation inside the text: {...} is a maths span, a^b raises, and [num]/[den]
stacks into a real fraction. LIM() builds the limit operator with its own
subscript, upright, the way the lesson pages set it.
"""

TITLE = 'Quarter I review paper · Algebra'
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
COVERS_SHORT = 'Lessons 5–22, and limits at infinity'

COVERS = [
    ('3–4 ext', 'Limits at infinity — extension', 'Algebra 11, §1.2 · P1 · 7.1 · new on this paper'),
    ('5–6',     'The derivative of a function', 'Algebra 11, §1.3 · P1 · 7.1–7.2'),
    ('7–9',     'The rules of differentiation', 'Algebra 11, §1.4 · P1 · 7.2–7.4'),
    ('10–12',   'The derivative of a composite function', 'Algebra 11, §1.5 · P1 · 7.5'),
    ('15–16',   'The modulus function', 'P1 · 1.6 · P2 · 1.1–1.3'),
    ('17–18',   'The equations of the tangent and the normal', 'Algebra 11, §1.6 · P1 · 7.6'),
    ('19–22',   'Investigating a function with the derivative', 'Algebra 11, §1.7 · P1 · 7.7–7.8'),
]

RULES = [
    'Answer on separate paper, and show your working — method carries marks.',
    'State the nature of every stationary point, and the test you used.',
]

TIP = ('Nothing on this paper needs lessons 1–2, 3–4 or 23–25. Limits at infinity are '
       'new, and carry 13 marks. The tangent and the normal carry the largest share '
       'because question 13 asks for both from a composite function, so it also '
       'examines the chain rule.')


def Q(q, marks, ans, work, lesson, note=''):
    """One question: text, marks, answer, worked solution, and which of the
    seven examined topics it belongs to."""
    return dict(q=q, marks=marks, ans=ans, work=work, lesson=lesson, note=note)


SECTIONS = [
 dict(letter='A', level='easy', title='Five marks each',
      lead='Short answers — one or two lines each.',
      cols=2, space=24, items=[

  Q('Differentiate: {y = 4x^3 − 5x + 7}', 5, '{[dy]/[dx] = 12x^2 − 5}',
    'Power rule term by term; the derivative of the constant {7} is zero.', 4),

  Q('Evaluate: ' + LIM(INF, '[3x^2 + 2x]/[x^2 − 5]'), 5, '{3}',
    'Divide top and bottom by {x^2}: {[3 + 2/x]/[1 − 5/x^2]}. Both '
    '{[2]/[x]} and {[5]/[x^2]} tend to {0}, leaving {[3]/[1] = 3}.', 2.5,
    'Equal degrees, so the answer is the ratio of the leading coefficients — but the '
    'division has to be shown, not quoted.'),

  Q('Differentiate: {y = (3x + 1)^5}', 5, '{[dy]/[dx] = 15(3x + 1)^4}',
    'Chain rule: {5(3x + 1)^4} times the derivative of the inside, which is {3}.', 5),

  Q('Solve: {|2x − 6| = 10}', 5, '{x = 8} &nbsp;or&nbsp; {x = −2}',
    '{2x − 6 = 10} gives {x = 8}; {2x − 6 = −10} gives {x = −2}.', 7,
    'One answer only means the negative branch was forgotten.'),

  Q('Find the stationary point of {y = x^2 − 6x + 5} and state its nature.',
    5, '{(3, −4)}, a minimum',
    '{[dy]/[dx] = 2x − 6 = 0} gives {x = 3}, and {y = 9 − 18 + 5 = −4}. '
    '{[d^2y]/[dx^2] = 2 > 0}, so it is a minimum.', 9),

  Q('Solve: {|x − 3| < 5}', 5, '{−2 < x < 8}',
    'The distance from {x} to {3} is less than {5}, so {−5 < x − 3 < 5}. '
    'Adding {3} throughout gives {−2 < x < 8}.', 7),
 ]),

 dict(letter='B', level='med', title='Eight marks each',
      lead='Method marks are available even when the final answer is wrong.',
      cols=1, space=38, items=[

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

  Q('{f(x) = x^2 − 3x}.<br>'
    '<b>(a)</b> Show that {[f(2 + h) − f(2)]/[h] = h + 1}. &nbsp;<span class="mk">[5]</span><br>'
    '<b>(b)</b> Hence write down {f ′(2)}. &nbsp;<span class="mk">[3]</span>',
    8, '<b>(a)</b> shown below &nbsp;&nbsp; <b>(b)</b> {f ′(2) = 1}',
    '<b>(a)</b> {f(2 + h) = (2 + h)^2 − 3(2 + h) = 4 + 4h + h^2 − 6 − 3h = h^2 + h − 2}, '
    'and {f(2) = 4 − 6 = −2}. So the numerator is {h^2 + h}, and dividing by {h} gives '
    '{h + 1} — legal because {h ≠ 0} throughout.<br>'
    '<b>(b)</b> As {h → 0}, {h + 1 → 1}, so {f ′(2) = 1}.', 3,
    'Cancelling the {h} before noting {h ≠ 0} is the slip to look for. Checking with the '
    'rules, {f ′(x) = 2x − 3} and {f ′(2) = 1}, is worth a mark but is not the method asked for.'),

  Q('Differentiate {y = [2x − 1]/[x^2 + 3]} and find the gradient of the curve at {x = 1}.',
    8, '{[dy]/[dx] = [−2x^2 + 2x + 6]/[(x^2 + 3)^2]}; &nbsp;gradient {= [3]/[8]}',
    'Quotient rule with {u = 2x − 1}, {v = x^2 + 3}, so {u′ = 2} and {v′ = 2x}:<br>'
    '{[dy]/[dx] = [2(x^2 + 3) − (2x − 1)(2x)]/[(x^2 + 3)^2] = '
    '[2x^2 + 6 − 4x^2 + 2x]/[(x^2 + 3)^2] = [−2x^2 + 2x + 6]/[(x^2 + 3)^2]}.<br>'
    'At {x = 1}: {[−2 + 2 + 6]/[4^2] = [6]/[16] = [3]/[8]}.', 4,
    'The expansion {−(2x − 1)(2x) = −4x^2 + 2x} is where the sign is usually lost.'),

  Q('The curve {y = x^3 − 4x}. Find the equation of the tangent and the equation of the '
    'normal at the point where {x = 2}.',
    8, 'tangent {y = 8x − 16}; &nbsp;normal {x + 8y = 2}',
    'At {x = 2}, {y = 8 − 8 = 0}, so the point is {(2, 0)}. '
    '{[dy]/[dx] = 3x^2 − 4}, which is {8} at {x = 2}.<br>'
    'Tangent: {y − 0 = 8(x − 2)}, so {y = 8x − 16}.<br>'
    'Normal gradient {= −[1]/[8]}: {y − 0 = −[1]/[8](x − 2)}, so {8y = −x + 2}, '
    'that is {x + 8y = 2}.', 8,
    'Using {−8} rather than {−[1]/[8]} for the normal is the standard error; the product '
    'of the two gradients must be {−1}.'),

  Q('{y = √(x^2 + 9)}. Find {[dy]/[dx]} and its value at {x = 4}.',
    8, '{[dy]/[dx] = [x]/[√(x^2 + 9)]}; &nbsp;at {x = 4} it is {[4]/[5]}',
    'Write {y = (x^2 + 9)<sup>1/2</sup>}. Chain rule: '
    '{[dy]/[dx] = [1]/[2](x^2 + 9)<sup>−1/2</sup> · 2x = [x]/[√(x^2 + 9)]}.<br>'
    'At {x = 4}: {√(16 + 9) = 5}, so the value is {[4]/[5]}.', 5,
    'The factor {2x} from the inside function is the mark most often dropped.'),
 ]),

 dict(letter='C', level='hard', title='Fifteen marks each',
      lead='Full method required.',
      cols=1, space=70, items=[

  Q('{y = x^3 − 6x^2 + 9x}.<br>'
    '<b>(a)</b> Find the stationary points and determine the nature of each. '
    '&nbsp;<span class="mk">[6]</span><br>'
    '<b>(b)</b> State the intervals on which the function is increasing and decreasing, '
    'and sketch the curve. &nbsp;<span class="mk">[5]</span><br>'
    '<b>(c)</b> Find the values of {k} for which {x^3 − 6x^2 + 9x = k} has three distinct '
    'solutions. &nbsp;<span class="mk">[4]</span>',
    15, '<b>(a)</b> {(1, 4)} maximum, {(3, 0)} minimum &nbsp;&nbsp; '
        '<b>(b)</b> increasing for {x < 1} and {x > 3}, decreasing for {1 < x < 3} '
        '&nbsp;&nbsp; <b>(c)</b> {0 < k < 4}',
    '<b>(a)</b> {[dy]/[dx] = 3x^2 − 12x + 9 = 3(x − 1)(x − 3)}, zero at {x = 1} and '
    '{x = 3}. Then {y(1) = 1 − 6 + 9 = 4} and {y(3) = 27 − 54 + 27 = 0}.<br>'
    'Second derivative {[d^2y]/[dx^2] = 6x − 12}: at {x = 1} it is {−6 < 0}, a maximum; '
    'at {x = 3} it is {6 > 0}, a minimum.<br>'
    '<b>(b)</b> {3(x − 1)(x − 3) > 0} for {x < 1} and for {x > 3}, so the function '
    'increases there, and {< 0} for {1 < x < 3}, so it decreases between the two '
    'stationary points. The curve passes through the origin, since {y = x(x − 3)^2}, '
    'and rises without bound on the right.<br>'
    '<b>(c)</b> The solutions of {y = k} are where the horizontal line {y = k} cuts the '
    'curve. It cuts three times exactly when {k} lies strictly between the minimum value '
    '{0} and the maximum value {4}, so {0 < k < 4}.', 9,
    'A sign chart earns the nature marks just as well as the second derivative. Part (c) '
    'is the sketch being used, not a new technique — a student who drew the curve in (b) '
    'can read the answer off it. The inequalities must be strict: at {k = 0} and {k = 4} '
    'the line passes through a stationary point and there are only two distinct solutions.'),

  Q('The curve {y = √(2x + 7)}.<br>'
    '<b>(a)</b> Find {[dy]/[dx]}. &nbsp;<span class="mk">[4]</span><br>'
    '<b>(b)</b> Find the equation of the tangent at the point where {x = 1}. '
    '&nbsp;<span class="mk">[6]</span><br>'
    '<b>(c)</b> Find the equation of the normal at that point, and the coordinates of the '
    'point where it crosses the {x}-axis. &nbsp;<span class="mk">[5]</span>',
    15, '<b>(a)</b> {[dy]/[dx] = [1]/[√(2x + 7)]} &nbsp;&nbsp; '
        '<b>(b)</b> {3y = x + 8} &nbsp;&nbsp; <b>(c)</b> {y = 6 − 3x}, crossing at {(2, 0)}',
    '<b>(a)</b> {y = (2x + 7)<sup>1/2</sup>}, so {[dy]/[dx] = [1]/[2](2x + 7)<sup>−1/2</sup> · 2 = '
    '[1]/[√(2x + 7)]}.<br>'
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
  space=60,
  lead='Attempt this only when the rest is finished. It can make up marks lost '
       'elsewhere, but your total is still recorded out of 100.',
  item=Q('Find the equations of the two tangents to {y = x^2} that pass through the point '
         '{(0, −4)}.',
         10,
         '{y = 4x − 4} &nbsp;and&nbsp; {y = −4x − 4}',
         'Let the point of contact be {(t, t^2)}. Since {[dy]/[dx] = 2x}, the tangent '
         'there has gradient {2t}, so its equation is {y − t^2 = 2t(x − t)}, that is '
         '{y = 2tx − t^2}.<br>'
         'It passes through {(0, −4)}, so {−4 = −t^2}, giving {t = 2} or {t = −2}.<br>'
         'The two tangents are {y = 4x − 4} and {y = −4x − 4}.', 8,
         'The point {(0, −4)} is <em>not</em> on the curve, so there is no single point to '
         'differentiate at — the contact point has to be carried as an unknown. That is the '
         'whole difficulty, and it is why this is the bonus.'))

LESSON_OF = {
  2.5: 'Lessons 3–4, extension · Limits at infinity',
  3:   'Lessons 5–6 · The derivative of a function',
  4:   'Lessons 7–9 · The rules of differentiation',
  5:   'Lessons 10–12 · The derivative of a composite function',
  7:   'Lessons 15–16 · The modulus function',
  8:   'Lessons 17–18 · The equations of the tangent and the normal',
  9:   'Lessons 19–22 · Investigating a function with the derivative',
}
