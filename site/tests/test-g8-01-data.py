# -*- coding: utf-8 -*-
"""Grade 8 Algebra, Test 1 — lessons 1–8 of Quarter I.

Every answer here was checked against a CAS before it was written down.

Notation inside the text: {...} is a maths span, a^b raises, and [num]/[den]
stacks into a real fraction, so a fraction in a question looks the same as a
fraction in the lesson pages.
"""

TITLE = 'Test 1 · Algebra'
GRADE = 'Grade 8'
DURATION = 40          # minutes
TOTAL = 40             # marks

COVERS = [
    ('1–3', 'Revision of the Grade 7 course', 'Algebra 8, p. 3 · Stage 8 review'),
    ('4–5', 'Algebraic expressions', 'Algebra 8, §1 · Stage 9 · 2.1–2.2'),
    ('6–8', 'Algebraic fraction. Cancelling fractions', 'Algebra 8, §2 · Stage 9 · 2.5'),
]

RULES = [
    'Answer every question. Show your working — method carries marks.',
    'Whenever you cancel a fraction, state the permissible values of the variable.',
    'No calculator.',
]


def Q(q, marks, ans, work, lesson, note=''):
    """One question: text, marks, answer, worked solution, and which of the
    three taught topics it belongs to."""
    return dict(q=q, marks=marks, ans=ans, work=work, lesson=lesson, note=note)


SECTIONS = [
 dict(letter='A', level='easy', title='Short answers',
      lead='One mark each. A single line of working is enough.',
      per=1, cols=2, space=0, items=[

  Q('Simplify: {x^6 · x^4}', 1, '{x^10}',
    'Same base, so the indices add: {6 + 4 = 10}.', 1),

  Q('Simplify: {(b^4)^3}', 1, '{b^12}',
    'A power of a power multiplies the indices: {4 × 3 = 12}.', 1,
    'Watch for {b^7} — adding where it should multiply.'),

  Q('Expand: {4(3x − 2)}', 1, '{12x − 8}',
    'Multiply both terms inside the bracket by {4}.', 1),

  Q('Factorise: {10a − 15}', 1, '{5(2a − 3)}',
    'The common factor is {5}.', 1),

  Q('Which two of these are fractional expressions?<br>'
    '{[2x]/[7]} &nbsp;&nbsp; {[4]/[x]} &nbsp;&nbsp; {[x]/[3] − 5} &nbsp;&nbsp; {[9]/[x + 2]}',
    1, '{[4]/[x]} and {[9]/[x + 2]}',
    'An expression is fractional when a <em>variable</em> stands in a denominator. '
    'In {[2x]/[7]} and {[x]/[3] − 5} the denominator is a number, so those are whole '
    'expressions.', 2),

  Q('State the permissible values of {[1]/[x − 6]}', 1, '{x ≠ 6}',
    'The denominator must not be zero: {x − 6 ≠ 0}.', 2),

  Q('Find the value of {[x + 5]/[x − 2]} when {x = 3}', 1, '{8}',
    '{[3 + 5]/[3 − 2] = [8]/[1] = 8}.', 2),

  Q('Cancel: {[8a]/[12a]}', 1, '{[2]/[3]}, &nbsp;{a ≠ 0}',
    'Divide numerator and denominator by {4a}.', 3),

  Q('Cancel: {[15x^3]/[5x]}', 1, '{3x^2}, &nbsp;{x ≠ 0}',
    'Divide numerator and denominator by {5x}.', 3),

  Q('Cancel: {[5(x − 2)]/[10(x − 2)]}', 1, '{[1]/[2]}, &nbsp;{x ≠ 2}',
    'The bracket {(x − 2)} is a factor of both, so it cancels, and {[5]/[10] = [1]/[2]}.', 3),
 ]),

 dict(letter='B', level='med', title='Two marks each',
      lead='Method marks are available even when the final answer is wrong.',
      per=2, cols=1, space=56, items=[

  Q('Simplify: {(3a^3b^2)^2}', 2, '{9a^6b^4}',
    'Square every factor: {3^2 = 9}, {(a^3)^2 = a^6}, {(b^2)^2 = b^4}.', 1,
    'A common slip is {3a^6b^4} — the {3} must be squared as well.'),

  Q('Expand and simplify: {(x + 5)(x − 2) − x^2}', 2, '{3x − 10}',
    '{(x + 5)(x − 2) = x^2 + 3x − 10}; subtracting {x^2} leaves {3x − 10}.', 1),

  Q('Factorise: {9x^2 − 16y^2}', 2, '{(3x − 4y)(3x + 4y)}',
    'A difference of two squares, since {9x^2 = (3x)^2} and {16y^2 = (4y)^2}.', 1),

  Q('Cancel: {[3x + 12]/[x^2 − 16]}', 2,
    '{[3]/[x − 4]}, &nbsp;{x ≠ 4}, {x ≠ −4}',
    'Factorise first: {[3(x + 4)]/[(x − 4)(x + 4)]}. The factor {(x + 4)} cancels.', 3),

  Q('State the permissible values of {[x + 2]/[x^2 − 25]}', 2,
    '{x ≠ 5}, {x ≠ −5}',
    '{x^2 − 25 = (x − 5)(x + 5)}, which is zero at {x = 5} and at {x = −5}.', 2),

  Q('Find the value of {[a^2 − b^2]/[a + b]} when {a = 9}, {b = 4}', 2, '{5}',
    'Cancel before substituting: {[(a − b)(a + b)]/[a + b] = a − b = 9 − 4 = 5}.', 2,
    'Substituting first gives {[65]/[13]}, which is also {5} — but cancelling first is '
    'the skill being tested.'),

  Q('For which value of {x} is {[x − 7]/[x + 1]} equal to zero?', 2,
    '{x = 7}',
    'A fraction is zero when its numerator is zero and its denominator is not: '
    '{x − 7 = 0} gives {x = 7}, and {x = 7} is permissible because {x ≠ −1}.', 2,
    'An answer of {x = 7} or {x = −1} shows the two conditions have been confused.'),
 ]),

 dict(letter='C', level='hard', title='Four marks each',
      lead='Factorise before you cancel, and state the values the variable may not take.',
      per=4, cols=1, space=110, items=[

  Q('<b>(a)</b> Factorise completely: {x^3 − 9x} &nbsp;<span class="mk">[2]</span><br>'
    '<b>(b)</b> Hence cancel {[x^3 − 9x]/[x^2 + 3x]} and state the permissible values. '
    '&nbsp;<span class="mk">[2]</span>',
    4, '<b>(a)</b> {x(x − 3)(x + 3)} &nbsp;&nbsp; <b>(b)</b> {x − 3}, &nbsp;{x ≠ 0}, {x ≠ −3}',
    '<b>(a)</b> Take out {x} first, giving {x(x^2 − 9)}, then the difference of two squares '
    'gives {x(x − 3)(x + 3)}.<br>'
    '<b>(b)</b> The denominator factorises as {x(x + 3)}, so '
    '{[x(x − 3)(x + 3)]/[x(x + 3)] = x − 3}. That denominator is zero at {x = 0} and at '
    '{x = −3}, so both values are excluded.', 3,
    '“Completely” means going on until nothing factorises further; stopping at '
    '{x(x^2 − 9)} loses a mark.'),

  Q('Cancel {[x^2 − 8x + 16]/[x^2 − 16]}, state the permissible values, then find the '
    'value of your answer when {x = 9}.',
    4, '{[x − 4]/[x + 4]}, &nbsp;{x ≠ 4}, {x ≠ −4}; &nbsp; at {x = 9} it is {[5]/[13]}',
    'The numerator is a perfect square: {x^2 − 8x + 16 = (x − 4)^2}. The denominator is '
    '{(x − 4)(x + 4)}. One factor of {(x − 4)} cancels and leaves {[x − 4]/[x + 4]}.<br>'
    'At {x = 9}: {[9 − 4]/[9 + 4] = [5]/[13]}.', 3),

  Q('<b>(a)</b> Cancel: {[2x^2 − 2y^2]/[3y − 3x]} &nbsp;<span class="mk">[3]</span><br>'
    '<b>(b)</b> Explain in one sentence why {[x + 5]/[5]} cannot be cancelled. '
    '&nbsp;<span class="mk">[1]</span>',
    4, '<b>(a)</b> {−[2(x + y)]/[3]}, &nbsp;{x ≠ y} &nbsp;&nbsp; '
       '<b>(b)</b> because the {5} is a term, not a factor',
    '<b>(a)</b> {2x^2 − 2y^2 = 2(x − y)(x + y)} and {3y − 3x = −3(x − y)}. The swap '
    '{y − x = −(x − y)} is what makes the two factors match; cancelling {(x − y)} leaves '
    '{−[2(x + y)]/[3]}.<br>'
    '<b>(b)</b> In {x + 5} the {5} is a <em>term</em>, not a <em>factor</em>, and only a '
    'factor common to the whole numerator and the whole denominator may be cancelled.', 3,
    'Part (b) separates students who follow the rule from students who know why it holds.'),

  Q('Cancel {[2x^2 + 5x − 3]/[x^2 − 9]}, stating the permissible values.',
    4, '{[2x − 1]/[x − 3]}, &nbsp;{x ≠ 3}, {x ≠ −3}',
    'The numerator factorises as {(2x − 1)(x + 3)} — check by expanding: '
    '{2x^2 + 6x − x − 3 = 2x^2 + 5x − 3}. The denominator is {(x − 3)(x + 3)}, so the '
    'factor {(x + 3)} cancels.', 1),
 ]),
]

LESSON_OF = {1: 'Lessons 1–3 · Revision of the Grade 7 course',
             2: 'Lessons 4–5 · Algebraic expressions',
             3: 'Lessons 6–8 · Algebraic fraction. Cancelling fractions'}
