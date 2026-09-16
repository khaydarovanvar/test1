# -*- coding: utf-8 -*-
"""Builds the 30-question practice pack with worked solutions."""

def f(n, d):   return f'<span class="frac"><span class="num-t">{n}</span><span class="den-t">{d}</span></span>'
def lim(to):   return f'<span class="lim"><span class="op">lim</span><span class="to">{to}</span></span>'
def m(s):      return f'<span class="m">{s}</span>'
x, h, a, t = '<i>x</i>', '<i>h</i>', '<i>a</i>', '<i>t</i>'
def sq(v='<i>x</i>'): return f'{v}<sup>2</sup>'
def cu(v='<i>x</i>'): return f'{v}<sup>3</sup>'
fx  = '<i>f</i>(<i>x</i>)'
fxh = '<i>f</i>(<i>x</i>+<i>h</i>)'
fp  = '<i>f</i>′(<i>x</i>)'
DQ  = f(f'{fxh} − {fx}', h)

# ---------------------------------------------------------------- questions
EASY = [
 (f'Find the slope of the line through {m("A(1, 2)")} and {m("B(5, 10)")}.',
  [(f'slope = {m(f(f"10 − 2", "5 − 1"))} = {m(f("8","4"))} = 2', None)], '2'),

 (f'A line has slope 3 and passes through {m("(0, −1)")}. What is {m("<i>y</i>")} when {m("<i>x</i> = 4")}?',
  [(f'{m("<i>y</i> = 3<i>x</i> − 1")}', 'Slope 3, y-intercept −1.'),
   (f'{m("<i>y</i> = 3(4) − 1 = 11")}', None)], '11'),

 (f'Find the gradient of the line through {m("(−2, 5)")} and {m("(4, 5)")}.',
  [(f'{m(f("5 − 5","4 − (−2)"))} = {m(f("0","6"))} = 0', 'Both points have the same y, so the line is horizontal.')], '0'),

 (f'For {m(f"<i>f</i>({x}) = {sq()}")}, find the slope of the secant joining {m("<i>x</i> = 1")} and {m("<i>x</i> = 4")}.',
  [(f'{m(f("16 − 1","4 − 1"))} = {m(f("15","3"))} = 5', None)], '5'),

 (f'For {m(f"<i>f</i>({x}) = {sq()}")}, find the slope of the secant joining {m("<i>x</i> = 2")} and {m("<i>x</i> = 5")}.',
  [(f'{m(f("25 − 4","5 − 2"))} = {m(f("21","3"))} = 7', None)], '7'),

 (f'For {m(f"<i>f</i>({x}) = 3{x} + 1")}, find the secant slope between {m("<i>x</i> = 1")} and {m("<i>x</i> = 6")}. '
  f'What do you notice?',
  [(f'{m(f("19 − 4","6 − 1"))} = {m(f("15","5"))} = 3', None),
   ('It equals the slope of the line itself.',
    'Every secant of a straight line has the same slope — that is what "straight" means.')], '3'),

 (f'Given {m(f"<i>f</i>′({x}) = 2{x}")}, find the gradient of the tangent to {m(f"<i>y</i> = {sq()}")} at {m("<i>x</i> = 3")}.',
  [(f'{m("<i>f</i>′(3) = 2(3) = 6")}', None)], '6'),

 (f'Given {m(f"<i>f</i>′({x}) = 2{x}")}, where is the tangent to {m(f"<i>y</i> = {sq()}")} horizontal?',
  [(f'{m("2<i>x</i> = 0")}, so {m("<i>x</i> = 0")}', 'A horizontal tangent has gradient 0.'),
   (f'At the point {m("(0, 0)")}', None)], '(0, 0)'),

 (f'For {m(f"<i>f</i>({x}) = {sq()}")}, simplify {m(f("<i>f</i>(2+<i>h</i>) − <i>f</i>(2)", h))}.',
  [(f'{m(f(f"(2+{h})<sup>2</sup> − 4", h))} = {m(f(f"4 + 4{h} + {sq(h)} − 4", h))}', None),
   (f'= {m(f(f"4{h} + {sq(h)}", h))} = {m(f"4 + {h}")}', 'Cancel h, which is allowed because h ≠ 0.')], f'4 + {h}'),

 (f'A curve has {m("<i>f</i>′(4) = 7")}. Say in words what this means.',
  [('The gradient of the tangent to the curve at {} is 7.'.format(m("<i>x</i> = 4")), None),
   ('Near that point the curve rises about 7 units of y for every 1 unit of x.',
    'It is the steepness at one point, not an average over an interval.')], 'gradient 7 at x = 4'),
]

MEDIUM = [
 (f'Find the equation of the line through {m("(2, 3)")} and {m("(6, 11)")}.',
  [(f'slope = {m(f("11 − 3","6 − 2"))} = 2', None),
   (f'{m("<i>y</i> − 3 = 2(<i>x</i> − 2)")}', 'Point–slope form, using (2, 3).'),
   (f'{m("<i>y</i> = 2<i>x</i> − 1")}', None)], f'{m("<i>y</i> = 2<i>x</i> − 1")}'),

 (f'For {m(f"<i>f</i>({x}) = {sq()}")}, find the secant slope between {m("<i>x</i> = 3")} and {m(f"<i>x</i> = 3 + {h}")}.',
  [(f'{m(f(f"(3+{h})<sup>2</sup> − 9", h))} = {m(f(f"9 + 6{h} + {sq(h)} − 9", h))} = {m(f(f"6{h} + {sq(h)}", h))}', None),
   (f'= {m(f"6 + {h}")}', 'And as h → 0 this gives f′(3) = 6.')], f'6 + {h}'),

 (f'Use the definition of the derivative to find {m(fp)} for {m(f"<i>f</i>({x}) = 5{x} − 4")}.',
  [(f'{m(f(f"5({x}+{h}) − 4 − (5{x} − 4)", h))} = {m(f(f"5{h}", h))} = 5', None),
   (f'{m(f"{fp} = 5")}', 'A straight line has the same gradient everywhere.')], '5'),

 (f'Use the definition to find {m(fp)} for {m(f"<i>f</i>({x}) = {sq()} + 3{x}")}.',
  [(f'{m(f(f"({x}+{h})<sup>2</sup> + 3({x}+{h}) − {sq()} − 3{x}", h))} = {m(f(f"2{x}{h} + {sq(h)} + 3{h}", h))}', None),
   (f'= {m(f"2{x} + {h} + 3")}', None),
   (f'{m(f"{fp} = 2{x} + 3")}', 'Let h → 0.')], f'2{x} + 3'),

 (f'Find the equation of the tangent to {m(f"<i>y</i> = {sq()}")} at {m("<i>x</i> = 2")}. Use {m(f"<i>f</i>′({x}) = 2{x}")}.',
  [(f'gradient {m("= <i>f</i>′(2) = 4")}, point {m("(2, 4)")}', None),
   (f'{m("<i>y</i> − 4 = 4(<i>x</i> − 2)")}', None),
   (f'{m("<i>y</i> = 4<i>x</i> − 4")}', None)], f'{m("<i>y</i> = 4<i>x</i> − 4")}'),

 (f'For {m(f"<i>f</i>({x}) = {cu()}")}, find the secant slope between {m("<i>x</i> = 1")} and {m("<i>x</i> = 2")}. '
  f'Compare it with {m("<i>f</i>′(1) = 3")}.',
  [(f'{m(f("8 − 1","2 − 1"))} = 7', None),
   ('The average gradient over the interval is 7, but the gradient at the left end is only 3.',
    'The curve gets steeper as x grows, so the average over [1, 2] is much bigger than the value at x = 1.')], '7 (against 3)'),

 (f'For {m(f"<i>f</i>({x}) = {sq()}")} at {m("<i>x</i> = 2")}, find the secant slopes for '
  f'{m(f"{h} = 0.1, 0.01, 0.001")}. What number are they approaching?',
  [(f'secant slope {m(f"= 4 + {h}")}', 'Same working as question A9, with 2 in place of 2.'),
   ('4.1,&nbsp; 4.01,&nbsp; 4.001', None),
   (f'They approach 4, and {m("<i>f</i>′(2) = 4")}.', None)], '4'),

 (f'Use the definition to find {m(fp)} for {m(f"<i>f</i>({x}) = {sq()} − 4{x} + 1")}.',
  [(f'{m(f(f"({x}+{h})<sup>2</sup> − 4({x}+{h}) + 1 − ({sq()} − 4{x} + 1)", h))} = {m(f(f"2{x}{h} + {sq(h)} − 4{h}", h))}', None),
   (f'= {m(f"2{x} + {h} − 4")} → {m(f"{fp} = 2{x} − 4")}', None)], f'2{x} − 4'),

 (f'At which point on {m(f"<i>y</i> = {sq()}")} is the gradient equal to 10?',
  [(f'{m("2<i>x</i> = 10")}, so {m("<i>x</i> = 5")}', None),
   (f'{m("<i>y</i> = 5<sup>2</sup> = 25")}, so the point is {m("(5, 25)")}', None)], '(5, 25)'),

 (f'A car travels {m(f"<i>s</i>({t}) = {sq(t)}")} metres in {m(t)} seconds. Find its average speed from '
  f'{m("<i>t</i> = 2")} to {m("<i>t</i> = 5")}, and its speed at {m("<i>t</i> = 2")} given {m("<i>s</i>′(<i>t</i>) = 2<i>t</i>")}.',
  [(f'average = {m(f("25 − 4","5 − 2"))} = 7 m/s', 'This is a secant slope.'),
   (f'at {m("<i>t</i> = 2")}: {m("<i>s</i>′(2) = 4")} m/s', 'This is a tangent slope.'),
   ('The car is speeding up, so the average over the interval is faster than the speed at the start.', None)],
  '7 m/s; 4 m/s'),
]

# pre-built pieces (Python 3.11 cannot nest same quotes inside an f-string)
RX   = '<span class="rad"><span class="sign">√</span><span class="rand"><i>x</i></span></span>'
RXH  = '<span class="rad"><span class="sign">√</span><span class="rand"><i>x</i>+<i>h</i></span></span>'
one_x     = f('1', x)
one_xh    = f('1', f'{x}+{h}')
inv_sq    = f('1', sq())
conj_sum  = f'{RXH} + {RX}'
root_ans  = f('1', f'2{RX}')
k = '<i>k</i>'

HARD = [
 (f'Use first principles to find {m(fp)} for {m("<i>f</i>(<i>x</i>) = " + one_x)}.',
  [(m(f(f'{one_xh} − {one_x}', h)) + ' = ' + m(f(f'{x} − ({x}+{h})', f'{h} · {x}({x}+{h})')),
    'Put the two fractions over a common denominator first.'),
   ('= ' + m(f(f'−{h}', f'{h} · {x}({x}+{h})')) + ' = ' + m(f('−1', f'{x}({x}+{h})')), None),
   (f'Let {m("<i>h</i> → 0")}: ' + m('<i>f</i>′(<i>x</i>) = −' + inv_sq), None)],
  m('−1 / <i>x</i><sup>2</sup>')),

 (f'Use first principles to find {m(fp)} for {m("<i>f</i>(<i>x</i>) = " + RX)}.',
  [('Multiply above and below by ' + m(conj_sum), 'The conjugate clears the surds from the numerator.'),
   (m(f(f'({x}+{h}) − {x}', f'{h}({conj_sum})')) + ' = ' + m(f('1', conj_sum)), None),
   (f'Let {m("<i>h</i> → 0")}: ' + m('<i>f</i>′(<i>x</i>) = ' + root_ans), None)],
  m('1 / (2√<i>x</i>)')),

 (f'Use first principles to find {m(fp)} for {m("<i>f</i>(<i>x</i>) = " + cu())}.',
  [(m(f(f'({x}+{h})<sup>3</sup> − {cu()}', h)) + ' = ' + m(f(f'3{sq()}{h} + 3{x}{sq(h)} + {cu(h)}', h)),
    'Expand (x+h)³ = x³ + 3x²h + 3xh² + h³.'),
   ('= ' + m(f'3{sq()} + 3{x}{h} + {sq(h)}'), None),
   (f'Let {m("<i>h</i> → 0")}: ' + m(f'<i>f</i>′({x}) = 3{sq()}'), None)],
  m(f'3{sq()}')),

 (f'Find the equation of the tangent to {m("<i>y</i> = " + sq() + " − 2<i>x</i>")} at the point where the '
  f'gradient is 4. Use {m("<i>y</i>′ = 2<i>x</i> − 2")}.',
  [(f'{m("2<i>x</i> − 2 = 4")}, so {m("<i>x</i> = 3")}', None),
   (f'{m("<i>y</i> = 9 − 6 = 3")}, so the point is {m("(3, 3)")}', None),
   (f'{m("<i>y</i> − 3 = 4(<i>x</i> − 3)")} → {m("<i>y</i> = 4<i>x</i> − 9")}',
    'Check: at x = 3, 4(3) − 9 = 3. ✓')],
  m('<i>y</i> = 4<i>x</i> − 9')),

 (f'Show that the tangent to {m("<i>y</i> = " + sq())} at {m("<i>x</i> = <i>a</i>")} has equation '
  f'{m("<i>y</i> = 2<i>ax</i> − " + sq(a))}.',
  [(f'gradient {m("= 2<i>a</i>")}, point {m("(<i>a</i>, " + sq(a) + ")")}', None),
   (m('<i>y</i> − ' + sq(a) + ' = 2<i>a</i>(<i>x</i> − <i>a</i>)'), None),
   (m('<i>y</i> = 2<i>ax</i> − 2' + sq(a) + ' + ' + sq(a) + ' = 2<i>ax</i> − ' + sq(a)), 'As required.')],
  'shown'),

 (f'The tangent to {m("<i>y</i> = " + sq())} at {m("<i>x</i> = <i>a</i>")} passes through {m("(0, −4)")}. '
  f'Find {m(a)}.',
  [('Use question C5: ' + m('<i>y</i> = 2<i>ax</i> − ' + sq(a)), None),
   (f'Put {m("<i>x</i> = 0")}: ' + m('−' + sq(a) + ' = −4') + ', so ' + m(sq(a) + ' = 4'), None),
   (f'{m("<i>a</i> = 2")} or {m("<i>a</i> = −2")}',
    'Two tangents: y = 4x − 4 and y = −4x − 4. Both touch the parabola and meet below the origin.')],
  m('<i>a</i> = ±2')),

 (f'Find the points on {m("<i>y</i> = " + cu() + " − 3<i>x</i>")} where the tangent is horizontal. '
  f'Use {m("<i>y</i>′ = 3" + sq() + " − 3")}.',
  [(m('3' + sq() + ' − 3 = 0') + ' → ' + m(sq() + ' = 1') + ' → ' + m('<i>x</i> = ±1'),
    'Horizontal means gradient 0.'),
   (f'{m("<i>x</i> = 1")}: {m("<i>y</i> = 1 − 3 = −2")} → {m("(1, −2)")}', None),
   (f'{m("<i>x</i> = −1")}: {m("<i>y</i> = −1 + 3 = 2")} → {m("(−1, 2)")}', None)],
  '(1, −2) and (−1, 2)'),

 (f'For {m("<i>f</i>(<i>x</i>) = " + sq())}, show that the secant slope between {m("<i>x</i> = <i>a</i>")} '
  f'and {m("<i>x</i> = <i>b</i>")} is {m("<i>a</i> + <i>b</i>")}. What happens as {m("<i>b</i> → <i>a</i>")}?',
  [(m(f('<i>b</i><sup>2</sup> − ' + sq(a), '<i>b</i> − <i>a</i>')) + ' = '
    + m(f('(<i>b</i> − <i>a</i>)(<i>b</i> + <i>a</i>)', '<i>b</i> − <i>a</i>')) + ' = ' + m('<i>a</i> + <i>b</i>'),
    'Difference of two squares; we may cancel because b ≠ a.'),
   (f'As {m("<i>b</i> → <i>a</i>")}, the slope → {m("2<i>a</i>")}', None),
   ('So ' + m('<i>f</i>′(<i>a</i>) = 2<i>a</i>'), 'The whole chain in one line: secant → tangent → derivative.')],
  m('<i>a</i> + <i>b</i>') + ' → ' + m('2<i>a</i>')),

 (f'A ball has height {m("<i>h</i>(<i>t</i>) = 20<i>t</i> − 5" + sq(t))} metres after {m(t)} seconds. '
  f'(a) Find its average velocity from {m("<i>t</i> = 1")} to {m("<i>t</i> = 3")}. '
  f'(b) Use first principles to find {m("<i>h</i>′(<i>t</i>)")}. (c) When is the ball momentarily at rest?',
  [('(a) ' + m('<i>h</i>(1) = 15') + ', ' + m('<i>h</i>(3) = 60 − 45 = 15') + ' → average = '
    + m(f('15 − 15', '3 − 1')) + ' = 0 m/s',
    'Zero, because the ball is back at the same height — it went up and came down.'),
   ('(b) ' + m(f(f'20({t}+{k}) − 5({t}+{k})<sup>2</sup> − (20{t} − 5{sq(t)})', k)) + ' = '
    + m(f'20 − 10{t} − 5{k}'),
    'Using k for the small step, so it is not confused with the height h.'),
   (f'Let {m("<i>k</i> → 0")}: ' + m(f'<i>h</i>′({t}) = 20 − 10{t}'), None),
   ('(c) ' + m(f'20 − 10{t} = 0') + ' → ' + m('<i>t</i> = 2') + ' s', 'At the top of the flight the velocity is 0.')],
  '0 m/s; 20 − 10t; t = 2 s'),

 (f'For {m("<i>f</i>(<i>x</i>) = |<i>x</i>|")}: the secant between {m("<i>x</i> = −1")} and {m("<i>x</i> = 1")} '
  f'has slope 0. Explain why the graph still has no tangent at {m("<i>x</i> = 0")}.',
  [('secant slope = ' + m(f('1 − 1', '1 − (−1)')) + ' = 0', 'Both endpoints are at the same height.'),
   (f'From the right ({m("<i>h</i> > 0")}): ' + m(f('|<i>h</i>|', h)) + ' = 1.&nbsp;&nbsp; '
    f'From the left ({m("<i>h</i> < 0")}): ' + m(f('|<i>h</i>|', h)) + ' = −1.', None),
   ('The two one-sided limits are different, so the limit does not exist.',
    'No single gradient at x = 0 — the graph has a sharp corner, and a corner has no tangent.')],
  'no tangent — a corner'),
]

# small figure for C10
_UNUSED_FIG10 = '''<svg viewBox="0 0 190 105" role="img" class="minifig"
     aria-label="The graph of y equals the absolute value of x, with a horizontal secant joining the points at x equals minus one and one, and a sharp corner at the origin.">
  <line x1="12" y1="88" x2="178" y2="88" stroke="currentColor" stroke-width="1" opacity=".5"/>
  <line x1="95" y1="96" x2="95" y2="14" stroke="currentColor" stroke-width="1" opacity=".5"/>
  <polyline points="25,18 95,88 165,18" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="45" y1="38" x2="145" y2="38" stroke="var(--warm)" stroke-width="2"/>
  <circle cx="45" cy="38" r="3" fill="var(--warm)"/>
  <circle cx="145" cy="38" r="3" fill="var(--warm)"/>
  <circle cx="95" cy="88" r="3.5" fill="none" stroke="var(--accent)" stroke-width="2"/>
  <text x="95" y="32" class="lab warm" text-anchor="middle">secant slope 0</text>
  <text x="103" y="82" class="lab acc">corner: no tangent</text>
</svg>'''

# ---------------------------------------------------------------- assembly
def q_items(rows, letter):
    out = []
    for i, (text, _steps, _ans) in enumerate(rows, 1):
        out.append(f'<li><span class="qn">{letter}{i}</span><span class="qt">{text}</span></li>')
    return "\n      ".join(out)

# Notes worth keeping when the working is squeezed onto one line.
KEEP_WHY = {('A', 6), ('A', 10), ('B', 6), ('C', 8), ('C', 9), ('C', 10)}

def s_items(rows, letter):
    out = []
    for i, (text, steps, ans) in enumerate(rows, 1):
        parts, notes = [], []
        for line, why in steps:
            parts.append(line)
            if why and (letter, i) in KEEP_WHY:
                notes.append(why)
        run = ' <span class="sep">›</span> '.join(parts)
        note = f'<span class="why">{notes[-1]}</span>' if notes else ''
        out.append(
            f'<li class="sol"><span class="qn">{letter}{i}</span>'
            f'<span class="sbody">{run} <span class="ans">{ans}</span>{note}</span></li>')
    return "\n      ".join(out)

SECTIONS = [
    ('A', 'Easy', 'Oson · Лёгкие', 'One step each — read the numbers straight off the formula.', EASY, 1),
    ('B', 'Medium', 'Oʻrta · Средние', 'Two or three steps: set it up, simplify, then let h → 0.', MEDIUM, 2),
    ('C', 'Hard', 'Qiyin · Трудные', 'Algebra with letters, and questions that ask you to explain.', HARD, 3),
]

def pips(n):
    return ''.join(f'<span class="pip{" on" if i < n else ""}"></span>' for i in range(3))

qs_html, sols_html = [], []
for letter, name, native, blurb, rows, level in SECTIONS:
    qs_html.append(f'''
  <h3 class="band">
    <span class="pips">{pips(level)}</span>
    <span class="bname">Section {letter} · {name}</span>
    <span class="bnative">{native}</span>
  </h3>
  <p class="blurb">{blurb}</p>
  <ol class="qs">
      {q_items(rows, letter)}
  </ol>''')
    sols_html.append(f'''
  <h4 class="sband"><span class="pips">{pips(level)}</span> Section {letter} · {name}</h4>
  <ol class="sols">
      {s_items(rows, letter)}
  </ol>''')

TEMPLATE = open('/tmp/claude-0/-home-user-test1/2324c315-38d4-50fb-9534-b8946a6b4ae6/scratchpad/practice_shell.html',
                encoding='utf-8').read()
out = TEMPLATE.replace('<!--QUESTIONS-->', "\n".join(qs_html)).replace('<!--SOLUTIONS-->', "\n".join(sols_html))
open('/home/user/test1/worksheets/slope-to-derivative-practice.html', 'w', encoding='utf-8').write(out)
print('written', len(out), 'chars ·', sum(len(s[4]) for s in SECTIONS), 'questions')
