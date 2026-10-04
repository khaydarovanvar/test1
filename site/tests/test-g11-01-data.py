# -*- coding: utf-8 -*-
"""Grade 11 Algebra, Quarter I review paper — lessons 1–25, plus limits at
infinity.

Fourteen questions and a bonus, out of 100 marks, in 40 minutes. Limits at
infinity are not in §1.2 as it is taught; they are examined here as the
extension to lessons 3–4, and the paper says so on its face so nobody meets
the ∞/∞ form for the first time in silence.

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

# Printed on the question paper as one compact line.
COVERS_SHORT = ('Lessons 1–25 · Limits, including limits at infinity · The derivative '
                'and the five rules · The chain rule · Modulus · Tangent and normal · '
                'Investigating a function · Extremum problems')

# The full references belong on the mark scheme, where the teacher wants them.
COVERS = [
    ('1–2',   'Increments, and the problem of the tangent', 'Algebra 11, §1.1 · P1 · 7.1'),
    ('3–4',   'The limit of a function', 'Algebra 11, §1.2 · P1 · 7.1'),
    ('3–4 ext', 'Limits at infinity — extension', 'Algebra 11, §1.2 · P1 · 7.1 · new on this paper'),
    ('5–6',   'The derivative of a function', 'Algebra 11, §1.3 · P1 · 7.1–7.2'),
    ('7–9',   'The rules of differentiation', 'Algebra 11, §1.4 · P1 · 7.2–7.4'),
    ('10–12', 'The derivative of a composite function', 'Algebra 11, §1.5 · P1 · 7.5'),
    ('15–16', 'The modulus function', 'P1 · 1.6 · P2 · 1.1–1.3'),
    ('17–18', 'The equations of the tangent and the normal', 'Algebra 11, §1.6 · P1 · 7.6'),
    ('19–22', 'Investigating a function with the derivative', 'Algebra 11, §1.7 · P1 · 7.7–7.8'),
    ('23–25', 'Extremum problems', 'Algebra 11, §1.8 · P1 · 7.8'),
]

RULES = [
    'Show your working — method carries marks. A limit or a derivative written '
    'down with no working scores nothing.',
    'For a limit at infinity, divide numerator and denominator by the highest '
    'power of {x} and say which terms you are sending to zero.',
    'For a stationary point, state its nature and the test you used.',
]

TIP = ('Limits at infinity carry 23 % because the paper introduces them. The derivative '
       'block — the five rules, the chain rule, the tangent, the investigation and the '
       'extremum — carries 54 % together, which is the share of the quarter it occupied. '
       'The modulus is examined once, at five marks: it is a Cambridge insert, not part '
       'of the derivative thread.')


def Q(q, marks, ans, work, lesson, note=''):
    """One question: text, marks, answer, worked solution, and which of the ten
    taught topics it belongs to."""
    return dict(q=q, marks=marks, ans=ans, work=work, lesson=lesson, note=note)


SECTIONS = [
 dict(letter='A', level='easy', title='Five marks each',
      lead='One or two lines of working is enough.',
      cols=2, space=56, items=[

  Q('Differentiate: {y = 4x^3 − 5x + 7}', 5, '{[dy]/[dx] = 12x^2 − 5}',
    'Power rule term by term; the derivative of the constant {7} is zero.', 4),

  Q('Evaluate: ' + LIM(INF, '[3x^2 + 2x]/[x^2 − 5]'), 5, '{3}',
    'Divide top and bottom by {x^2}: {[3 + 2/x]/[1 − 5/x^2]}. Both '
    '{[2]/[x]} and {[5]/[x^2]} tend to {0}, leaving {[3]/[1] = 3}.', 2.5,
    'Equal degrees, so the answer is the ratio of the leading coefficients — but the '
    'division has to be shown, not quoted.'),

  Q('Evaluate: ' + LIM('x→4', '[x^2 − 16]/[x − 4]'), 5, '{8}',
    'Substitution gives {[0]/[0]}. Factorise: {[(x − 4)(x + 4)]/[x − 4] = x + 4} for '
    '{x ≠ 4}, which tends to {8}.', 2),

  Q('For {y = x^2}, the value of {x} changes from {3} to {3.1}. Find {Δy}, and the '
    'gradient of the secant through the two points.',
    5, '{Δy = 0.61}; &nbsp;gradient {= 6.1}',
    '{Δy = 3.1^2 − 3^2 = 9.61 − 9 = 0.61} and {Δx = 0.1}, so '
    '{[Δy]/[Δx] = [0.61]/[0.1] = 6.1}.', 1,
    'The tangent gradient at {x = 3} is {6}; the secant is close but not equal, which is '
    'the whole point of lessons 1–2.'),

  Q('Differentiate: {y = (3x + 1)^5}', 5, '{[dy]/[dx] = 15(3x + 1)^4}',
    'Chain rule: {5(3x + 1)^4} times the derivative of the inside, which is {3}.', 5),

  Q('Solve: {|2x − 6| = 10}', 5, '{x = 8} &nbsp;or&nbsp; {x = −2}',
    '{2x − 6 = 10} gives {x = 8}; {2x − 6 = −10} gives {x = −2}. Both satisfy the '
    'original equation.', 7,
    'One answer only means the negative branch was forgotten.'),
 ]),

 dict(letter='B', level='med', title='Eight marks each',
      lead='Method marks are available even when the final answer is wrong.',
      cols=1, space=96, items=[

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
    'Write {y = (x^2 + 9)^(1/2)}. Chain rule: '
    '{[dy]/[dx] = [1]/[2](x^2 + 9)^(−1/2) · 2x = [x]/[√(x^2 + 9)]}.<br>'
    'At {x = 4}: {√(16 + 9) = 5}, so the value is {[4]/[5]}.', 5,
    'The factor {2x} from the inside function is the mark most often dropped.'),
 ]),

 dict(letter='C', level='hard', title='Ten marks each',
      lead='Full method required. Define your variable before you differentiate.',
      cols=1, space=150, items=[

  Q('{y = x^3 − 6x^2 + 9x}.<br>'
    '<b>(a)</b> Find the stationary points and determine the nature of each. '
    '&nbsp;<span class="mk">[6]</span><br>'
    '<b>(b)</b> State the intervals on which the function is increasing and decreasing, '
    'and sketch the curve. &nbsp;<span class="mk">[4]</span>',
    10, '<b>(a)</b> {(1, 4)} maximum, {(3, 0)} minimum &nbsp;&nbsp; '
        '<b>(b)</b> increasing for {x < 1} and {x > 3}, decreasing for {1 < x < 3}',
    '<b>(a)</b> {[dy]/[dx] = 3x^2 − 12x + 9 = 3(x − 1)(x − 3)}, zero at {x = 1} and '
    '{x = 3}. Then {y(1) = 1 − 6 + 9 = 4} and {y(3) = 27 − 54 + 27 = 0}.<br>'
    'Second derivative {[d^2y]/[dx^2] = 6x − 12}: at {x = 1} it is {−6 < 0}, a maximum; '
    'at {x = 3} it is {6 > 0}, a minimum.<br>'
    '<b>(b)</b> {3(x − 1)(x − 3) > 0} for {x < 1} and for {x > 3}, so the function '
    'increases there, and {< 0} for {1 < x < 3}, so it decreases between the two '
    'stationary points. The curve also passes through the origin, since '
    '{y = x(x − 3)^2}, and rises without bound on the right.', 9,
    'A sign chart earns the nature marks just as well as the second derivative. The sketch '
    'must show the maximum to the <em>left</em> of the minimum — the commonest sketch error '
    'is drawing them the other way round.'),

  Q('A closed cylinder is to hold {128π} cm<sup>3</sup>. Find the radius that makes its total '
    'surface area least, and state that least area in terms of {π}. Show that your value '
    'gives a minimum.',
    10, '{r = 4} cm, {h = 8} cm, least area {96π} cm<sup>2</sup>',
    'Volume: {πr^2h = 128π}, so {h = [128]/[r^2]}.<br>'
    'Surface area: {S = 2πr^2 + 2πrh = 2πr^2 + 2πr · [128]/[r^2] = 2πr^2 + [256π]/[r]}.<br>'
    '{[dS]/[dr] = 4πr − [256π]/[r^2] = 0} gives {4πr^3 = 256π}, so {r^3 = 64} and {r = 4}.<br>'
    'Then {h = [128]/[16] = 8} and {S = 2π(16) + [256π]/[4] = 32π + 64π = 96π}.<br>'
    '{[d^2S]/[dr^2] = 4π + [512π]/[r^3]}, which is {12π > 0} at {r = 4}, so the area is a '
    'minimum.', 10,
    'The marks are in the modelling: eliminating {h} with the volume before differentiating. '
    'A student who differentiates {S} with both {r} and {h} in it cannot finish.'),

  Q('<b>(a)</b> Evaluate ' + LIM(INF, '[√(9x^2 + 1)]/[2x + 5]') + '. '
    '&nbsp;<span class="mk">[4]</span><br>'
    '<b>(b)</b> Evaluate ' + LIM(INF, '(√(4x^2 + 3x) − 2x)') + '. '
    '&nbsp;<span class="mk">[6]</span>',
    10, '<b>(a)</b> {[3]/[2]} &nbsp;&nbsp; <b>(b)</b> {[3]/[4]}',
    '<b>(a)</b> Divide by {x}, taking {x > 0} so that {x = √(x^2)}:<br>'
    '{[√(9x^2 + 1)]/[2x + 5] = [√(9 + 1/x^2)]/[2 + 5/x] → [√9]/[2] = [3]/[2]}.<br>'
    '<b>(b)</b> The difference is an {∞ − ∞} form, so multiply by the conjugate:<br>'
    '{√(4x^2 + 3x) − 2x = [(4x^2 + 3x) − 4x^2]/[√(4x^2 + 3x) + 2x] = '
    '[3x]/[√(4x^2 + 3x) + 2x]}.<br>'
    'Now divide by {x}: {[3]/[√(4 + 3/x) + 2] → [3]/[2 + 2] = [3]/[4]}.', 2.5,
    'Part (b) is the conjugate trick from lesson 3–4 used at infinity instead of at a point. '
    'Answering {0} means the subtraction was done term by term, which {∞ − ∞} does not allow.'),
 ]),
]

BONUS = dict(
  marks=10,
  space=180,
  lead='Attempt this only when the rest is finished. It can make up marks lost '
       'elsewhere, but your total is still recorded out of 100.',
  item=Q('{y = [8x]/[x^2 + 4]} for {x ≥ 0}.<br>'
         '<b>(a)</b> Show that the curve has a maximum at {x = 2} and find its value. '
         '&nbsp;<span class="mk">[6]</span><br>'
         '<b>(b)</b> Find ' + LIM(INF, 'y') + ' and say what it tells you about the shape '
         'of the curve. &nbsp;<span class="mk">[4]</span>',
         10,
         '<b>(a)</b> maximum {(2, 2)} &nbsp;&nbsp; <b>(b)</b> {0}; the curve falls back '
         'towards the {x}-axis, which is a horizontal asymptote',
         '<b>(a)</b> Quotient rule: '
         '{[dy]/[dx] = [8(x^2 + 4) − 8x(2x)]/[(x^2 + 4)^2] = [32 − 8x^2]/[(x^2 + 4)^2] = '
         '[−8(x − 2)(x + 2)]/[(x^2 + 4)^2]}.<br>'
         'The denominator is always positive, so the sign is that of {−8(x − 2)(x + 2)}: '
         'positive for {0 ≤ x < 2} and negative for {x > 2}. The function rises then falls, '
         'so {x = 2} is a maximum, and {y(2) = [16]/[8] = 2}.<br>'
         '<b>(b)</b> Divide by {x^2}: {[8/x]/[1 + 4/x^2] → [0]/[1] = 0}. So after the '
         'maximum the curve decreases towards the {x}-axis without ever reaching it — '
         '{y = 0} is a horizontal asymptote.', 10,
         'This is the quarter in one question: a quotient-rule derivative, a stationary point '
         'with its nature, and a limit at infinity read as the shape of the curve. The sign '
         'argument is cleaner here than the second derivative, which is why it is the working '
         'given — but {[d^2y]/[dx^2] = −[1]/[2]} at {x = 2} earns the same marks.'))

LESSON_OF = {
  1:  'Lessons 1–2 · Increments, and the problem of the tangent',
  2:  'Lessons 3–4 · The limit of a function',
  2.5: 'Lessons 3–4, extension · Limits at infinity',
  3:  'Lessons 5–6 · The derivative of a function',
  4:  'Lessons 7–9 · The rules of differentiation',
  5:  'Lessons 10–12 · The derivative of a composite function',
  7:  'Lessons 15–16 · The modulus function',
  8:  'Lessons 17–18 · The equations of the tangent and the normal',
  9:  'Lessons 19–22 · Investigating a function with the derivative',
  10: 'Lessons 23–25 · Extremum problems',
}
