# -*- coding: utf-8 -*-
"""Grade 8 Algebra — revision drill on the Test 1 topics (lessons 1–8).

Sixty short questions on exactly the three topics Test 1 examined, for
students who need the practice repeated before a retake. Nothing here needs
anything from lesson 9 onwards.

Every answer was checked with a CAS.

Notation: {...} is a maths span, a^b raises, and [num]/[den] stacks.
"""

TITLE = 'Algebra — revision of Test 1'
GRADE = 'Grade 8'
COVERS = 'Lessons 1–8 · Quarter I'
NOTE = ('Work down each column. Where a fraction is cancelled, the permissible '
        'values are part of the answer — an answer without them is half an answer.')
COLS = 3        # columns on the student sheet
COLS_KEY = 2    # columns on the answer key


def Q(q, a, why=''):
    return dict(q=q, a=a, why=why)


BLOCKS = [
 dict(key='t1', nom='Lessons 1–3 · Revision of the Grade 7 course',
      lead='Indices, brackets, factorising', items=[
  Q('{x^7 · x^5}', '{x^12}', 'Same base — add the indices.'),
  Q('{a^9 ÷ a^4}', '{a^5}', 'Same base — subtract the indices.'),
  Q('{(b^4)^3}', '{b^12}', 'Power of a power — multiply the indices.'),
  Q('{(2x^3)^4}', '{16x^12}', 'Raise the {2} as well: {2^4 = 16}.'),
  Q('{(−3a^2b)^2}', '{9a^4b^2}', 'A negative squared is positive.'),
  Q('{5x^2 · 4x^5}', '{20x^7}'),
  Q('{[12a^6]/[3a^2]}', '{4a^4}'),
  Q('Expand {3(2x − 7)}', '{6x − 21}'),
  Q('Expand {−5(a − 4)}', '{−5a + 20}', 'The minus changes both signs.'),
  Q('Expand {x(x + 6)}', '{x^2 + 6x}'),
  Q('Expand {2a(3a − 5)}', '{6a^2 − 10a}'),
  Q('Expand {(x + 3)(x + 8)}', '{x^2 + 11x + 24}'),
  Q('Expand {(y − 5)(y + 2)}', '{y^2 − 3y − 10}'),
  Q('Expand {(2x − 1)(x + 4)}', '{2x^2 + 7x − 4}'),
  Q('Expand {(a + 7)^2}', '{a^2 + 14a + 49}', 'Do not forget the middle term.'),
  Q('Expand {(3m − 2)^2}', '{9m^2 − 12m + 4}'),
  Q('Expand {(x − 6)(x + 6)}', '{x^2 − 36}', 'Difference of two squares.'),
  Q('Factorise {8x + 20}', '{4(2x + 5)}'),
  Q('Factorise {6a^2 − 9a}', '{3a(2a − 3)}', 'Take out {3a}, not just {3}.'),
  Q('Factorise {x^2 − 49}', '{(x − 7)(x + 7)}'),
  Q('Factorise {25m^2 − 4n^2}', '{(5m − 2n)(5m + 2n)}'),
  Q('Factorise {x^2 + 10x + 25}', '{(x + 5)^2}'),
 ]),

 dict(key='t2', nom='Lessons 4–5 · Algebraic expressions',
      lead='Powers of products, factorising, simplifying', items=[
  Q('{(2a^2b^3)^3}', '{8a^6b^9}'),
  Q('{(−x^4y)^3}', '{−x^12y^3}', 'An odd power keeps the minus.'),
  Q('{(5p^3)^2 · 2p}', '{50p^7}'),
  Q('{[a^5b^2]/[a^2b]}', '{a^3b}'),
  Q('Factorise {3x^2 − 12}', '{3(x − 2)(x + 2)}', 'Common factor first, then the squares.'),
  Q('Factorise {2a^2 − 18b^2}', '{2(a − 3b)(a + 3b)}'),
  Q('Factorise {x^3 − x}', '{x(x − 1)(x + 1)}'),
  Q('Factorise {4y^2 − 20y + 25}', '{(2y − 5)^2}'),
  Q('Factorise {ax + ay + bx + by}', '{(a + b)(x + y)}', 'Group in pairs.'),
  Q('Factorise {m^2 − m − 12}', '{(m − 4)(m + 3)}'),
  Q('Factorise {x^2 + 7x + 12}', '{(x + 3)(x + 4)}'),
  Q('Factorise {5x^2y − 10xy^2}', '{5xy(x − 2y)}'),
  Q('Simplify {3(x − 2) − 2(x − 5)}', '{x + 4}'),
  Q('Simplify {(a + 4)^2 − (a − 4)^2}', '{16a}'),
  Q('Simplify {(x + 2)(x − 2) + 4}', '{x^2}'),
  Q('Find {x^2 − 4x} when {x = −2}', '{12}', '{4 + 8}. Watch the sign.'),
 ]),

 dict(key='t3', nom='Lessons 6–8 · Algebraic fractions. Cancelling',
      lead='Permissible values, value at a point, cancelling', items=[
  Q('Permissible values of {[1]/[x − 9]}', '{x ≠ 9}'),
  Q('Permissible values of {[5]/[2x + 6]}', '{x ≠ −3}'),
  Q('Permissible values of {[x + 1]/[x^2 − 4]}', '{x ≠ 2}, {x ≠ −2}'),
  Q('Permissible values of {[3]/[x^2 + 1]}', 'every {x}',
    '{x^2 + 1} is never zero, so nothing is excluded.'),
  Q('Permissible values of {[x − 2]/[x(x − 7)]}', '{x ≠ 0}, {x ≠ 7}'),
  Q('Find {[x + 7]/[x − 3]} when {x = 5}', '{6}'),
  Q('Find {[2x − 1]/[x + 4]} when {x = −1}', '{−1}'),
  Q('Find {[x^2 − 9]/[x + 3]} when {x = 4}', '{1}'),
  Q('For which {x} is {[x − 8]/[x + 2]} zero?', '{x = 8}',
    'Numerator zero, denominator not.'),
  Q('For which {x} is {[3x + 6]/[x − 1]} zero?', '{x = −2}'),
  Q('Cancel {[24x^5]/[6x^2]}', '{4x^3}, {x ≠ 0}'),
  Q('Cancel {[14a^3b]/[7ab]}', '{2a^2}, {a ≠ 0}, {b ≠ 0}'),
  Q('Cancel {[5x + 15]/[x + 3]}', '{5}, {x ≠ −3}'),
  Q('Cancel {[x^2 − 16]/[x − 4]}', '{x + 4}, {x ≠ 4}'),
  Q('Cancel {[x^2 − 25]/[x^2 + 5x]}', '{[x − 5]/[x]}, {x ≠ 0}, {x ≠ −5}'),
  Q('Cancel {[2x + 8]/[x^2 − 16]}', '{[2]/[x − 4]}, {x ≠ 4}, {x ≠ −4}'),
  Q('Cancel {[x^2 + 6x + 9]/[x^2 − 9]}', '{[x + 3]/[x − 3]}, {x ≠ 3}, {x ≠ −3}'),
  Q('Cancel {[3a − 3b]/[b − a]}', '{−3}, {a ≠ b}',
    '{b − a = −(a − b)} — that swap is where the minus comes from.'),
  Q('Cancel {[x^2 − x]/[1 − x]}', '{−x}, {x ≠ 1}'),
  Q('Cancel {[4x^2 − 9]/[2x + 3]}', '{2x − 3}, {x ≠ −[3]/[2]}'),
  Q('Cancel {[x^3 − 4x]/[x^2 + 2x]}', '{x − 2}, {x ≠ 0}, {x ≠ −2}'),
  Q('Why can {[x + 3]/[3]} not be cancelled?', 'the {3} is a term, not a factor',
    'Only a factor of the <em>whole</em> numerator may cancel.'),
 ]),
]
