# -*- coding: utf-8 -*-
"""Grade 8 Algebra, Test 1 — lessons 1–8 of Quarter I.

Fourteen questions and a bonus, out of 100 marks, in 40 minutes. Every answer
here was checked against a CAS before it was written down.

Notation inside the text: {...} is a maths span, a^b raises, and [num]/[den]
stacks into a real fraction, so a fraction in a question looks the same as a
fraction in the lesson pages.
"""

TITLE = 'Test 1 · Algebra'
GRADE = 'Grade 8'
DURATION = 40          # minutes
TOTAL = 100            # marks, excluding the bonus

# Printed on the question paper as one compact line.
COVERS_SHORT = ('Lessons 1–8 · Revision of Grade 7 · Algebraic expressions · '
                'Cancelling algebraic fractions')

# The full references belong on the mark scheme, where the teacher wants them.
COVERS = [
    ('1–3', 'Revision of the Grade 7 course', 'Algebra 8, p. 3 · Stage 8 review'),
    ('4–5', 'Algebraic expressions', 'Algebra 8, §1 · Stage 9 · 2.1–2.2'),
    ('6–8', 'Algebraic fraction. Cancelling fractions', 'Algebra 8, §2 · Stage 9 · 2.5'),
]

RULES = [
    'Show your working — method carries marks.',
    'Whenever you cancel a fraction, state the permissible values of the variable.',
]


def Q(q, marks, ans, work, lesson, note=''):
    """One question: text, marks, answer, worked solution, and which of the
    three taught topics it belongs to."""
    return dict(q=q, marks=marks, ans=ans, work=work, lesson=lesson, note=note)


SECTIONS = [
 dict(letter='A', level='easy', title='Short answers',
      lead='Five marks each. One line of working is enough.',
      cols=2, space=22, items=[

  Q('Simplify: {x^6 · x^4}', 5, '{x^10}',
    'Same base, so the indices add: {6 + 4 = 10}.', 1),

  Q('Expand: {4(3x − 2)}', 5, '{12x − 8}',
    'Multiply both terms inside the bracket by {4}.', 1),

  Q('Factorise: {10a − 15}', 5, '{5(2a − 3)}',
    'The common factor is {5}.', 1),

  Q('State the permissible values of {[1]/[x − 6]}', 5, '{x ≠ 6}',
    'The denominator must not be zero: {x − 6 ≠ 0}.', 2),

  Q('Find the value of {[x + 5]/[x − 2]} when {x = 3}', 5, '{8}',
    '{[3 + 5]/[3 − 2] = [8]/[1] = 8}.', 2),

  Q('Cancel: {[15x^3]/[5x]}', 5, '{3x^2}, &nbsp;{x ≠ 0}',
    'Divide numerator and denominator by {5x}.', 3),
 ]),

 dict(letter='B', level='med', title='Eight marks each',
      lead='Method marks are available even when the final answer is wrong.',
      cols=1, space=54, items=[

  Q('Simplify: {(3a^3b^2)^2}', 8, '{9a^6b^4}',
    'Square every factor: {3^2 = 9}, {(a^3)^2 = a^6}, {(b^2)^2 = b^4}.', 1,
    'A common slip is {3a^6b^4} — the {3} must be squared as well.'),

  Q('Factorise: {9x^2 − 16y^2}', 8, '{(3x − 4y)(3x + 4y)}',
    'A difference of two squares, since {9x^2 = (3x)^2} and {16y^2 = (4y)^2}.', 1),

  Q('State the permissible values of {[x + 2]/[x^2 − 25]}', 8,
    '{x ≠ 5}, {x ≠ −5}',
    '{x^2 − 25 = (x − 5)(x + 5)}, which is zero at {x = 5} and at {x = −5}.', 2),

  Q('For which value of {x} is {[x − 7]/[x + 1]} equal to zero?', 8, '{x = 7}',
    'A fraction is zero when its numerator is zero and its denominator is not: '
    '{x − 7 = 0} gives {x = 7}, and that value is permissible because {x ≠ −1}.', 2,
    'An answer of {x = −1} shows the two conditions have been confused.'),

  Q('Cancel: {[3x + 12]/[x^2 − 16]}', 8,
    '{[3]/[x − 4]}, &nbsp;{x ≠ 4}, {x ≠ −4}',
    'Factorise first: {[3(x + 4)]/[(x − 4)(x + 4)]}. The factor {(x + 4)} cancels.', 3),
 ]),

 dict(letter='C', level='hard', title='Ten marks each',
      lead='Factorise before you cancel, and state the values the variable may not take.',
      cols=1, space=92, items=[

  Q('<b>(a)</b> Factorise completely: {x^3 − 9x} &nbsp;<span class="mk">[4]</span><br>'
    '<b>(b)</b> Hence cancel {[x^3 − 9x]/[x^2 + 3x]} and state the permissible values. '
    '&nbsp;<span class="mk">[6]</span>',
    10, '<b>(a)</b> {x(x − 3)(x + 3)} &nbsp;&nbsp; <b>(b)</b> {x − 3}, &nbsp;{x ≠ 0}, {x ≠ −3}',
    '<b>(a)</b> Take out {x} first, giving {x(x^2 − 9)}, then the difference of two squares '
    'gives {x(x − 3)(x + 3)}.<br>'
    '<b>(b)</b> The denominator factorises as {x(x + 3)}, so '
    '{[x(x − 3)(x + 3)]/[x(x + 3)] = x − 3}. That denominator is zero at {x = 0} and at '
    '{x = −3}, so both values are excluded.', 3,
    '“Completely” means going on until nothing factorises further; stopping at '
    '{x(x^2 − 9)} loses marks.'),

  Q('Cancel {[x^2 − 8x + 16]/[x^2 − 16]}, state the permissible values, then find its '
    'value when {x = 9}.',
    10, '{[x − 4]/[x + 4]}, &nbsp;{x ≠ 4}, {x ≠ −4}; &nbsp; at {x = 9} it is {[5]/[13]}',
    'The numerator is a perfect square: {x^2 − 8x + 16 = (x − 4)^2}. The denominator is '
    '{(x − 4)(x + 4)}. One factor of {(x − 4)} cancels and leaves {[x − 4]/[x + 4]}.<br>'
    'At {x = 9}: {[9 − 4]/[9 + 4] = [5]/[13]}.', 3),

  Q('<b>(a)</b> Cancel: {[2x^2 − 2y^2]/[3y − 3x]} &nbsp;<span class="mk">[7]</span><br>'
    '<b>(b)</b> Explain in one sentence why {[x + 5]/[5]} cannot be cancelled. '
    '&nbsp;<span class="mk">[3]</span>',
    10, '<b>(a)</b> {−[2(x + y)]/[3]}, &nbsp;{x ≠ y} &nbsp;&nbsp; '
        '<b>(b)</b> because the {5} is a term, not a factor',
    '<b>(a)</b> {2x^2 − 2y^2 = 2(x − y)(x + y)} and {3y − 3x = −3(x − y)}. The swap '
    '{y − x = −(x − y)} is what makes the two factors match; cancelling {(x − y)} leaves '
    '{−[2(x + y)]/[3]}.<br>'
    '<b>(b)</b> In {x + 5} the {5} is a <em>term</em>, not a <em>factor</em>, and only a '
    'factor common to the whole numerator and the whole denominator may be cancelled.', 3,
    'Part (b) separates students who follow the rule from students who know why it holds.'),
 ]),
]

BONUS = dict(
  marks=10,
  lead='Attempt this only when the rest is finished. It can make up marks lost '
       'elsewhere, but your total is still recorded out of 100.',
  item=Q('<b>(a)</b> Show that {[m^2 − mn]/[n^2 − mn] = −[m]/[n]}. '
         '&nbsp;<span class="mk">[7]</span><br>'
         '<b>(b)</b> State the permissible values. &nbsp;<span class="mk">[3]</span>',
         10,
         '<b>(a)</b> shown below &nbsp;&nbsp; <b>(b)</b> {n ≠ 0}, {m ≠ n}',
         '<b>(a)</b> {m^2 − mn = m(m − n)}. The denominator needs the swap: '
         '{n^2 − mn = n(n − m) = −n(m − n)}. So '
         '{[m(m − n)]/[−n(m − n)] = −[m]/[n]}, since {(m − n)} cancels.<br>'
         '<b>(b)</b> The original denominator {n(n − m)} is zero when {n = 0} or when '
         '{n = m}, so both are excluded.', 3,
         'This is the sign swap from Q14(a) again, but with the minus hidden in the '
         'denominator rather than handed over. Full marks need the swap shown, not '
         'just asserted.'))

LESSON_OF = {1: 'Lessons 1–3 · Revision of the Grade 7 course',
             2: 'Lessons 4–5 · Algebraic expressions',
             3: 'Lessons 6–8 · Algebraic fraction. Cancelling fractions'}
