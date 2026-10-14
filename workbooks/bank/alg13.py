# -*- coding: utf-8 -*-
"""Questions for topic 13 of Grade 8 algebra — simplifying with rational exponents."""

from .common import F, M, rt, sq


def p(base, exp):
    return f'{base}<sup>{exp}</sup>'


def h(n, d):
    return F(n, d)


X12, X13, X23, X32 = (p('x', h(1, 2)), p('x', h(1, 3)),
                      p('x', h(2, 3)), p('x', h(3, 2)))
A12, B12 = p('a', h(1, 2)), p('b', h(1, 2))

Q_FOCUS = [
    dict(q='Simplify ' + M(X12 + ' · ' + X12) + '.', a=M('x'),
         check=('simp', 'xpos**Rational(1,2)*xpos**Rational(1,2)', 'xpos')),
    dict(q='Simplify ' + M(X13 + ' · ' + X23) + '.', a=M('x'),
         check=('simp', 'xpos**Rational(1,3)*xpos**Rational(2,3)', 'xpos')),
    dict(q='Simplify ' + M(F(p('a', h(3, 4)), p('a', h(1, 4)))) + '.', a=M(A12),
         check=('simp', 'apos**Rational(3,4)/apos**Rational(1,4)', 'apos**Rational(1,2)')),
    dict(q='Simplify ' + M('(' + X12 + ')<sup>6</sup>') + '.', a=M(sq('x', 3)),
         check=('simp', '(xpos**Rational(1,2))**6', 'xpos**3')),
    dict(q='Simplify ' + M(X12 + ' · ' + p('x', '−' + h(1, 2))) + '.', a=M('1'),
         check=('simp', 'xpos**Rational(1,2)*xpos**Rational(-1,2)', '1')),
    dict(q='Simplify ' + M('(4' + sq('x') + ')<sup>' + h(1, 2) + '</sup>') + ' for '
           + M('x > 0') + '.', a=M('2x'),
         check=('simp', '(4*xpos**2)**Rational(1,2)', '2*xpos')),
    dict(q='Simplify ' + M('(' + X23 + ')<sup>' + h(3, 2) + '</sup>') + '.', a=M('x'),
         check=('simp', '(xpos**Rational(2,3))**Rational(3,2)', 'xpos')),
    dict(q='Simplify ' + M(X12 + ' · ' + p('y', h(1, 2))) + '.', a=M(p('(xy)', h(1, 2))),
         check=('simp', 'xpos**Rational(1,2)*ypos**Rational(1,2)',
                '(xpos*ypos)**Rational(1,2)')),
    dict(q='Simplify ' + M('(' + sq('x', 4) + ')<sup>' + h(1, 2) + '</sup>') + ' for '
           + M('x > 0') + '.', a=M(sq('x')),
         check=('simp', '(xpos**4)**Rational(1,2)', 'xpos**2')),
    dict(q='Simplify ' + M(F(p('x', h(5, 6)), p('x', h(1, 6)))) + '.', a=M(X23),
         check=('simp', 'xpos**Rational(5,6)/xpos**Rational(1,6)', 'xpos**Rational(2,3)')),
]

Q_PRACTICE = [
    dict(q='Simplify ' + M('(8' + sq('x', 3) + ')<sup>' + h(1, 3) + '</sup>') + ' for '
           + M('x > 0') + '.', a=M('2x'),
         check=('simp', '(8*xpos**3)**Rational(1,3)', '2*xpos')),
    dict(q='Simplify ' + M('(' + X12 + ')<sup>2</sup> + x') + '.', a=M('2x'),
         check=('simp', '(xpos**Rational(1,2))**2+xpos', '2*xpos')),
    dict(q='Factorise ' + M(X32 + ' + ' + X12) + '.', a=M(X12 + '(x + 1)'),
         check=('simp', 'xpos**Rational(3,2)+xpos**Rational(1,2)',
                'xpos**Rational(1,2)*(xpos+1)')),
    dict(q='Expand ' + M(X12 + '(' + X12 + ' + 1)') + '.', a=M('x + ' + X12),
         check=('simp', 'xpos**Rational(1,2)*(xpos**Rational(1,2)+1)',
                'xpos+xpos**Rational(1,2)')),
    dict(q='Simplify ' + M('(' + p('x', h(1, 4)) + ')<sup>8</sup>') + '.', a=M(sq('x')),
         check=('simp', '(xpos**Rational(1,4))**8', 'xpos**2')),
    dict(q='Simplify ' + M('(16' + sq('x', 4) + sq('y') + ')<sup>' + h(1, 2) + '</sup>')
           + ' for ' + M('x, y > 0') + '.', a=M('4' + sq('x') + 'y'),
         check=('simp', '(16*xpos**4*ypos**2)**Rational(1,2)', '4*xpos**2*ypos')),
    dict(q='Factorise ' + M('x − 1') + ' using ' + M(X12) + '.',
         a=M('(' + X12 + ' − 1)(' + X12 + ' + 1)'),
         check=('simp', 'xpos-1',
                '(xpos**Rational(1,2)-1)*(xpos**Rational(1,2)+1)')),
    dict(q='Expand ' + M('(' + A12 + ' + ' + B12 + ')<sup>2</sup>') + '.',
         a=M('a + 2' + p('(ab)', h(1, 2)) + ' + b'),
         check=('simp', '(apos**Rational(1,2)+bpos**Rational(1,2))**2',
                'apos+2*(apos*bpos)**Rational(1,2)+bpos')),
    dict(q='Simplify ' + M(F(p('x', h(7, 4)), p('x', h(3, 4)))) + '.', a=M('x'),
         check=('simp', 'xpos**Rational(7,4)/xpos**Rational(3,4)', 'xpos')),
    dict(q='Simplify ' + M('(27' + sq('x', 6) + ')<sup>' + h(1, 3) + '</sup>') + ' for '
           + M('x > 0') + '.', a=M('3' + sq('x')),
         check=('simp', '(27*xpos**6)**Rational(1,3)', '3*xpos**2')),
]

Q_CHALLENGE = [
    dict(q='Simplify ' + M(F('x − y', X12 + ' − ' + p('y', h(1, 2)))) + ' for '
           + M('x ≠ y') + '.', a=M(X12 + ' + ' + p('y', h(1, 2))),
         check=('simp', '(xpos-ypos)/(xpos**Rational(1,2)-ypos**Rational(1,2))',
                'xpos**Rational(1,2)+ypos**Rational(1,2)')),
    dict(q='Simplify ' + M(F(X32 + ' − ' + X12, X12)) + '.', a=M('x − 1'),
         check=('simp', '(xpos**Rational(3,2)-xpos**Rational(1,2))/xpos**Rational(1,2)',
                'xpos-1')),
    dict(q='Factorise ' + M(X12 + ' − ' + p('x', '−' + h(1, 2))) + '.',
         a=M(p('x', '−' + h(1, 2)) + '(x − 1)'),
         check=('simp', 'xpos**Rational(1,2)-xpos**Rational(-1,2)',
                'xpos**Rational(-1,2)*(xpos-1)')),
    dict(q='Simplify ' + M(F(A12 + ' − ' + B12, 'a − b')) + ' for ' + M('a ≠ b') + '.',
         a=M(F(1, A12 + ' + ' + B12)),
         check=('simp', '(apos**Rational(1,2)-bpos**Rational(1,2))/(apos-bpos)',
                '1/(apos**Rational(1,2)+bpos**Rational(1,2))')),
    dict(q='Simplify ' + M(F('x + 2' + X12 + ' + 1', X12 + ' + 1')) + '.', a=M(X12 + ' + 1'),
         check=('simp', '(xpos+2*xpos**Rational(1,2)+1)/(xpos**Rational(1,2)+1)',
                'xpos**Rational(1,2)+1')),
    dict(q='Simplify ' + M('(' + X13 + ')<sup>3</sup> + (' + X12 + ')<sup>2</sup>') + '.',
         a=M('2x'),
         check=('simp', '(xpos**Rational(1,3))**3+(xpos**Rational(1,2))**2', '2*xpos')),
    dict(q='Simplify ' + M('(' + X12 + ' + 1)<sup>2</sup> − (' + X12 + ' − 1)<sup>2</sup>')
           + '.', a=M('4' + X12),
         check=('simp', '(xpos**Rational(1,2)+1)**2-(xpos**Rational(1,2)-1)**2',
                '4*xpos**Rational(1,2)')),
    dict(q='Simplify ' + M(F(X32 + ' · ' + p('y', h(1, 2)), X12 + ' · ' + p('y', h(3, 2))))
           + '.', a=M(F('x', 'y')),
         check=('simp', '(xpos**Rational(3,2)*ypos**Rational(1,2))'
                       '/(xpos**Rational(1,2)*ypos**Rational(3,2))', 'xpos/ypos')),
    dict(q='Simplify ' + M('(' + X12 + ' + ' + p('x', '−' + h(1, 2)) + ') · ' + X12) + '.',
         a=M('x + 1'),
         check=('simp', '(xpos**Rational(1,2)+xpos**Rational(-1,2))*xpos**Rational(1,2)',
                'xpos+1')),
    dict(q='Factorise ' + M('x − 5' + X12 + ' + 6') + '.',
         a=M('(' + X12 + ' − 2)(' + X12 + ' − 3)'),
         check=('simp', 'xpos-5*xpos**Rational(1,2)+6',
                '(xpos**Rational(1,2)-2)*(xpos**Rational(1,2)-3)')),
]

Q_BEYOND = [
    dict(q='Simplify ' + M(F(X12 + ' − ' + p('y', h(1, 2)), X12 + ' + ' + p('y', h(1, 2)))
                           + ' + ' + F(X12 + ' + ' + p('y', h(1, 2)),
                                       X12 + ' − ' + p('y', h(1, 2)))) + '.',
         a=M(F('2(x + y)', 'x − y')),
         check=('simp', '(xpos**Rational(1,2)-ypos**Rational(1,2))'
                       '/(xpos**Rational(1,2)+ypos**Rational(1,2))'
                       '+(xpos**Rational(1,2)+ypos**Rational(1,2))'
                       '/(xpos**Rational(1,2)-ypos**Rational(1,2))',
                '2*(xpos+ypos)/(xpos-ypos)'),
         sol='The common denominator is (√x + √y)(√x − √y) = x − y. The numerators give '
             '(√x − √y)² + (√x + √y)² = 2(x + y).'),
    dict(q='Simplify ' + M(F(X32 + ' + ' + p('y', h(3, 2)), X12 + ' + ' + p('y', h(1, 2))))
           + '.', a=M('x − ' + p('(xy)', h(1, 2)) + ' + y'),
         check=('simp', '(xpos**Rational(3,2)+ypos**Rational(3,2))'
                       '/(xpos**Rational(1,2)+ypos**Rational(1,2))',
                'xpos-(xpos*ypos)**Rational(1,2)+ypos'),
         sol='With u = √x and v = √y this is (u³ + v³)/(u + v) = u² − uv + v², '
             'that is x − √(xy) + y.'),
    dict(q='Simplify ' + M(F('a − b', p('a', h(1, 3)) + ' − ' + p('b', h(1, 3)))) + '.',
         a=M(p('a', h(2, 3)) + ' + ' + p('(ab)', h(1, 3)) + ' + ' + p('b', h(2, 3))),
         check=('simp', '(apos-bpos)/(apos**Rational(1,3)-bpos**Rational(1,3))',
                'apos**Rational(2,3)+(apos*bpos)**Rational(1,3)+bpos**Rational(2,3)'),
         sol='With u = a^(1/3), v = b^(1/3) it is (u³ − v³)/(u − v) = u² + uv + v².'),
    dict(q='Simplify ' + M(F(X12 + ' + 1', 'x − 1') + ' − ' + F(1, X12 + ' − 1')) + '.',
         a=M('0'),
         check=('simp', '(xpos**Rational(1,2)+1)/(xpos-1)-1/(xpos**Rational(1,2)-1)', '0'),
         sol='x − 1 = (√x − 1)(√x + 1), so the first fraction is already 1/(√x − 1). '
             'The two terms are the same and the difference is 0.'),
    dict(q='Simplify ' + M(F('x − 4', X12 + ' − 2') + ' − ' + X12) + '.', a=M('2'),
         check=('simp', '(xpos-4)/(xpos**Rational(1,2)-2)-xpos**Rational(1,2)', '2'),
         sol='x − 4 = (√x − 2)(√x + 2), so the fraction is √x + 2. Subtracting √x leaves 2.'),
    dict(q='Show that ' + M('a + b ≥ 2' + p('(ab)', h(1, 2))) + ' for ' + M('a, b ≥ 0')
           + '.', a='Equality when ' + M('a = b'), check=('custom', 'am_gm_two'),
         sol='a + b − 2√(ab) = (√a − √b)², a square, so it is ≥ 0. It is zero exactly '
             'when √a = √b, that is a = b. This is the arithmetic–geometric mean '
             'inequality for two numbers.'),
    dict(q='Simplify ' + M(F('(1 + ' + X12 + ')<sup>2</sup> − (1 − ' + X12 + ')<sup>2</sup>',
                             '4' + X12)) + '.', a=M('1'),
         check=('simp', '((1+xpos**Rational(1,2))**2-(1-xpos**Rational(1,2))**2)'
                       '/(4*xpos**Rational(1,2))', '1'),
         sol='The numerator is a difference of two squares: 2 · 2√x = 4√x, '
             'which cancels the denominator.'),
    dict(q='Simplify ' + M('(' + p('x', h(1, 4)) + ' + 1)(' + p('x', h(1, 4))
                           + ' − 1)(' + X12 + ' + 1)') + '.', a=M('x − 1'),
         check=('simp', '(xpos**Rational(1,4)+1)*(xpos**Rational(1,4)-1)'
                       '*(xpos**Rational(1,2)+1)', 'xpos-1'),
         sol='The first pair gives √x − 1; times (√x + 1) that is x − 1. '
             'Two differences of squares in a row.'),
    dict(q='Solve ' + M(X12 + ' − 6' + p('x', h(1, 4)) + ' + 8 = 0') + '.',
         a=M('x = 16') + ' or ' + M('x = 256'), check=('custom', 'quartic_in_root'),
         sol='Put t = x^(1/4) ≥ 0. Then t² − 6t + 8 = 0, so t = 2 or t = 4, '
             'giving x = 2⁴ = 16 or x = 4⁴ = 256.'),
    dict(q='Simplify ' + M('(' + A12 + ' + ' + B12 + ')<sup>2</sup> − ('
                           + A12 + ' − ' + B12 + ')<sup>2</sup>') + '.',
         a=M('4' + p('(ab)', h(1, 2))),
         check=('simp', '(apos**Rational(1,2)+bpos**Rational(1,2))**2'
                       '-(apos**Rational(1,2)-bpos**Rational(1,2))**2',
                '4*(apos*bpos)**Rational(1,2)'),
         sol='Difference of two squares: 2√b · 2√a = 4√(ab).'),
    dict(q='Simplify ' + M(F(X23 + ' − ' + p('y', h(2, 3)), X13 + ' − ' + p('y', h(1, 3))))
           + '.', a=M(X13 + ' + ' + p('y', h(1, 3))),
         check=('simp', '(xpos**Rational(2,3)-ypos**Rational(2,3))'
                       '/(xpos**Rational(1,3)-ypos**Rational(1,3))',
                'xpos**Rational(1,3)+ypos**Rational(1,3)'),
         sol='A difference of two squares in x^(1/3) and y^(1/3).'),
    dict(q='Rationalise the numerator of ' + M(F(X12 + ' − 3', 'x − 9')) + '.',
         a=M(F(1, X12 + ' + 3')),
         check=('simp', '(xpos**Rational(1,2)-3)/(xpos-9)',
                '1/(xpos**Rational(1,2)+3)'),
         sol='x − 9 = (√x − 3)(√x + 3), so the numerator cancels. '
             'The new form is defined at x = 9, where the old one was not.'),
    dict(q='If ' + M(X12 + ' + ' + p('x', '−' + h(1, 2)) + ' = 3') + ', find '
           + M('x + ' + F(1, 'x')) + '.', a=M('7'), check=('custom', 'root_plus_inverse'),
         sol='Square the condition: x + 2 + 1/x = 9, so x + 1/x = 7. '
             'The middle term is 2 because √x and 1/√x are reciprocals.'),
    dict(q='Simplify ' + M(F(1, X12 + ' + 1') + ' + ' + F(1, X12 + ' − 1')) + '.',
         a=M(F('2' + X12, 'x − 1')),
         check=('simp', '1/(xpos**Rational(1,2)+1)+1/(xpos**Rational(1,2)-1)',
                '2*xpos**Rational(1,2)/(xpos-1)'),
         sol='The common denominator is (√x + 1)(√x − 1) = x − 1, and the numerators '
             'add to (√x − 1) + (√x + 1) = 2√x.'),
    dict(q='Factorise ' + M(X32 + ' − 8') + ' as a difference of cubes.',
         a=M('(' + X12 + ' − 2)(x + 2' + X12 + ' + 4)'),
         check=('simp', 'xpos**Rational(3,2)-8',
                '(xpos**Rational(1,2)-2)*(xpos+2*xpos**Rational(1,2)+4)'),
         sol='x^(3/2) = (√x)³, so with u = √x this is u³ − 2³ '
             '= (u − 2)(u² + 2u + 4).'),
]

TOPIC = dict(
    key='alg-13', number=13, lessons='32–33',
    unit='Unit 2 · Roots and rational exponents',
    title='Simplifying expressions with rational exponents',
    subtitle='The index laws applied to letters — and the factorising tricks that work '
             'just as well with fractional powers.',
    uz='Algebra 8, §10, pp. 49–52', cam='Cambridge Stage 9 · 2.3',
    keywords=['simplify', 'common power', 'substitution', 'difference of squares',
              'factor out', 'root form', 'index form', 'expression'],
    remember=[
        'Substitution is the whole trick: put <span class="m">u = x<sup>1/2</sup></span> '
        'and a strange expression becomes an ordinary quadratic.',
        '<span class="m">x − y = (√x − √y)(√x + √y)</span> — a difference of two squares '
        'hiding in plain sight.',
        'Take out the <b>lowest</b> power as the common factor, negative indices included.',
        'Index laws: add to multiply, subtract to divide, multiply to raise a power.',
        'Say what the letters may be: these simplifications assume the bases are positive.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
