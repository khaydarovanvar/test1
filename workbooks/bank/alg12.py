# -*- coding: utf-8 -*-
"""Questions for topic 12 of Grade 8 algebra — powers with a rational exponent."""

from .common import F, M, rt, sq


def p(base, exp):
    """A power written with a stacked fractional index."""
    return f'{base}<sup>{exp}</sup>'


def fx(n, d):
    """A small stacked fraction for use inside an index."""
    return F(n, d)


Q_FOCUS = [
    dict(q='Evaluate ' + M(p(9, fx(1, 2))) + '.', a=M('3'),
         check=('simp', 'Integer(9)**Rational(1,2)', '3')),
    dict(q='Evaluate ' + M(p(8, fx(1, 3))) + '.', a=M('2'),
         check=('simp', 'Integer(8)**Rational(1,3)', '2')),
    dict(q='Evaluate ' + M(p(16, fx(1, 4))) + '.', a=M('2'),
         check=('simp', 'Integer(16)**Rational(1,4)', '2')),
    dict(q='Evaluate ' + M(p(4, fx(3, 2))) + '.', a=M('8'),
         check=('simp', 'Integer(4)**Rational(3,2)', '8')),
    dict(q='Evaluate ' + M(p(27, fx(2, 3))) + '.', a=M('9'),
         check=('simp', 'Integer(27)**Rational(2,3)', '9')),
    dict(q='Evaluate ' + M(p(2, '−1')) + '.', a=M(F(1, 2)),
         check=('simp', 'Integer(2)**(-1)', 'Rational(1,2)')),
    dict(q='Evaluate ' + M(p(5, 0)) + '.', a=M('1'),
         check=('simp', 'Integer(5)**0', '1')),
    dict(q='Evaluate ' + M(p(32, fx(1, 5))) + '.', a=M('2'),
         check=('simp', 'Integer(32)**Rational(1,5)', '2')),
    dict(q='Evaluate ' + M(p(25, '−' + fx(1, 2))) + '.', a=M(F(1, 5)),
         check=('simp', 'Integer(25)**Rational(-1,2)', 'Rational(1,5)')),
    dict(q='Write ' + M(rt('x')) + ' as a power of ' + M('x') + '.', a=M(p('x', fx(1, 2))),
         check=('simp', 'sqrt(xpos)', 'xpos**Rational(1,2)')),
]

Q_PRACTICE = [
    dict(q='Evaluate ' + M(p(81, fx(3, 4))) + '.', a=M('27'),
         check=('simp', 'Integer(81)**Rational(3,4)', '27')),
    dict(q='Evaluate ' + M(p(64, '−' + fx(1, 3))) + '.', a=M(F(1, 4)),
         check=('simp', 'Integer(64)**Rational(-1,3)', 'Rational(1,4)')),
    dict(q='Evaluate ' + M('(' + F(1, 8) + ')<sup>−' + fx(2, 3) + '</sup>') + '.',
         a=M('4'), check=('simp', 'Rational(1,8)**Rational(-2,3)', '4')),
    dict(q='Simplify ' + M(p(2, fx(1, 2)) + ' · ' + p(2, fx(3, 2))) + '.', a=M('4'),
         check=('simp', 'Integer(2)**Rational(1,2)*Integer(2)**Rational(3,2)', '4')),
    dict(q='Evaluate ' + M('(' + F(16, 81) + ')<sup>' + fx(1, 4) + '</sup>') + '.',
         a=M(F(2, 3)), check=('simp', 'Rational(16,81)**Rational(1,4)', 'Rational(2,3)')),
    dict(q='Evaluate ' + M(p(100, '1.5')) + '.', a=M('1000'),
         check=('simp', 'Integer(100)**Rational(3,2)', '1000')),
    dict(q='Write ' + M(rt(sq('x'), 3)) + ' as a power of ' + M('x') + '.',
         a=M(p('x', fx(2, 3))),
         check=('simp', '(xpos**2)**Rational(1,3)', 'xpos**Rational(2,3)')),
    dict(q='Evaluate ' + M(p(10, '−3')) + '.', a=M(F(1, 1000)),
         check=('simp', 'Integer(10)**(-3)', 'Rational(1,1000)')),
    dict(q='Simplify ' + M('(' + p(2, fx(2, 3)) + ')<sup>3</sup>') + '.', a=M('4'),
         check=('simp', '(Integer(2)**Rational(2,3))**3', '4')),
    dict(q='Evaluate ' + M(p('0.25', '−' + fx(1, 2))) + '.', a=M('2'),
         check=('simp', 'Rational(1,4)**Rational(-1,2)', '2')),
]

Q_CHALLENGE = [
    dict(q='Evaluate ' + M('(' + F(8, 27) + ')<sup>−' + fx(2, 3) + '</sup>') + '.',
         a=M(F(9, 4)), check=('simp', 'Rational(8,27)**Rational(-2,3)', 'Rational(9,4)')),
    dict(q='Simplify ' + M(p(9, fx(1, 2)) + ' · ' + p(27, fx(1, 3))) + '.', a=M('9'),
         check=('simp', 'Integer(9)**Rational(1,2)*Integer(27)**Rational(1,3)', '9')),
    dict(q='Simplify ' + M('(' + p('a', fx(1, 2)) + ')<sup>4</sup>') + ' for '
           + M('a > 0') + '.', a=M(sq('a')),
         check=('simp', '(apos**Rational(1,2))**4', 'apos**2')),
    dict(q='Simplify ' + M(p(2, fx(3, 4)) + ' · ' + p(2, fx(1, 4))) + '.', a=M('2'),
         check=('simp', 'Integer(2)**Rational(3,4)*Integer(2)**Rational(1,4)', '2')),
    dict(q='Evaluate ' + M(p('0.001', '−' + fx(1, 3))) + '.', a=M('10'),
         check=('simp', 'Rational(1,1000)**Rational(-1,3)', '10')),
    dict(q='Evaluate ' + M(p(16, '0.75') + ' + ' + p(8, fx(2, 3))) + '.', a=M('12'),
         check=('simp', 'Integer(16)**Rational(3,4)+Integer(8)**Rational(2,3)', '12')),
    dict(q='Simplify ' + M('(' + p(5, fx(1, 3)) + ')<sup>6</sup>') + '.', a=M('25'),
         check=('simp', '(Integer(5)**Rational(1,3))**6', '25')),
    dict(q='Evaluate ' + M('(' + F(1, 32) + ')<sup>−' + fx(3, 5) + '</sup>') + '.',
         a=M('8'), check=('simp', 'Rational(1,32)**Rational(-3,5)', '8')),
    dict(q='Simplify ' + M(p(6, fx(1, 2)) + ' · ' + p(24, fx(1, 2))) + '.', a=M('12'),
         check=('simp', 'Integer(6)**Rational(1,2)*Integer(24)**Rational(1,2)', '12')),
    dict(q='Evaluate ' + M('(' + p(49, fx(1, 2)) + ')<sup>−1</sup>') + '.', a=M(F(1, 7)),
         check=('simp', '(Integer(49)**Rational(1,2))**(-1)', 'Rational(1,7)')),
]

Q_BEYOND = [
    dict(q='Evaluate ' + M('(' + p(2, fx(1, 2)) + ' + ' + p(2, '−' + fx(1, 2)) + ')<sup>2</sup>')
           + '.', a=M(F(9, 2)),
         check=('simp', '(Integer(2)**Rational(1,2)+Integer(2)**Rational(-1,2))**2',
                'Rational(9,2)'),
         sol='Expand: 2 + 2·√2·(1/√2) + 1/2 = 2 + 2 + 1/2 = 9/2. The middle term is 2 '
             'because the two factors are reciprocals.'),
    dict(q='Simplify ' + M('(' + p('a', fx(1, 2)) + ' − ' + p('b', fx(1, 2)) + ')('
                           + p('a', fx(1, 2)) + ' + ' + p('b', fx(1, 2)) + ')')
           + ' for ' + M('a, b > 0') + '.', a=M('a − b'),
         check=('simp', '(apos**Rational(1,2)-bpos**Rational(1,2))'
                       '*(apos**Rational(1,2)+bpos**Rational(1,2))', 'apos-bpos'),
         sol='A difference of two squares with √a and √b: the product is (√a)² − (√b)² '
             '= a − b. This is the factorisation that makes a − b useful in root work.'),
    dict(q='Solve ' + M(p('x', fx(2, 3)) + ' = 4') + '.', a=M('x = 8') + ' or ' + M('x = −8'),
         check=('custom', 'solve_x_two_thirds'),
         sol='x^(2/3) = (x^(1/3))², so x^(1/3) = ±2 and x = ±8. The cube root takes either '
             'sign, so both answers are genuine — check: (−8)^(2/3) = ((−8)^(1/3))² = 4.'),
    dict(q='Solve ' + M(p(2, 'x') + ' = ' + p(8, fx(1, 3)) + ' · 4') + '.', a=M('x = 3'),
         check=('custom', 'solve_pow_two'),
         sol='8^(1/3) = 2, so the right side is 2 · 4 = 8 = 2³. Matching the bases, x = 3.'),
    dict(q='Simplify ' + M('(' + p('a', fx(3, 4)) + ')<sup>' + fx(4, 3) + '</sup>')
           + ' for ' + M('a > 0') + '.', a=M('a'),
         check=('simp', '(apos**Rational(3,4))**Rational(4,3)', 'apos'),
         sol='The indices multiply: (3/4)·(4/3) = 1. The two operations undo each other.'),
    dict(q='Which is larger, ' + M(p(2, fx(1, 2))) + ' or ' + M(p(3, fx(1, 3))) + '?',
         a=M(p(3, fx(1, 3))), check=('bool', 'Integer(3)**Rational(1,3) > Integer(2)**Rational(1,2)'),
         sol='Raise both to the sixth power, which preserves order for positive numbers: '
             '2³ = 8 and 3² = 9. Since 9 > 8, the cube root of 3 is larger.'),
    dict(q='Put ' + M(p(2, fx(1, 2))) + ', ' + M(p(3, fx(1, 3))) + ' and ' + M(p(6, fx(1, 6)))
           + ' in increasing order.',
         a=M(p(6, fx(1, 6)) + ' < ' + p(2, fx(1, 2)) + ' < ' + p(3, fx(1, 3))),
         check=('custom', 'order_three_roots'),
         sol='Sixth powers: 2³ = 8, 3² = 9, 6¹ = 6. Since 6 < 8 < 9 the order follows, '
             'because raising to the sixth power preserves order among positives.'),
    dict(q='Simplify ' + M('(' + p('x', fx(1, 2)) + ' + ' + p('x', '−' + fx(1, 2))
                           + ')<sup>2</sup> − (' + p('x', fx(1, 2)) + ' − '
                           + p('x', '−' + fx(1, 2)) + ')<sup>2</sup>') + '.',
         a=M('4'),
         check=('simp', '(xpos**Rational(1,2)+xpos**Rational(-1,2))**2'
                       '-(xpos**Rational(1,2)-xpos**Rational(-1,2))**2', '4'),
         sol='By the difference of two squares the value is 4 · x^(1/2) · x^(−1/2) = 4 — '
             'the x cancels completely.'),
    dict(q='Evaluate ' + M(p(4, fx(1, 2)) + ' + ' + p(4, fx(3, 2)) + ' + ' + p(4, fx(5, 2)))
           + '.', a=M('42'),
         check=('simp', 'Integer(4)**Rational(1,2)+Integer(4)**Rational(3,2)'
                       '+Integer(4)**Rational(5,2)', '42'),
         sol='Each is a power of 2: 2 + 8 + 32 = 42.'),
    dict(q='Solve ' + M('x − 5' + p('x', fx(1, 2)) + ' + 6 = 0') + '.',
         a=M('x = 4') + ' or ' + M('x = 9'), check=('custom', 'quad_in_sqrt'),
         sol='Put t = x^(1/2) ≥ 0. Then t² − 5t + 6 = 0, so t = 2 or t = 3 and '
             'x = 4 or x = 9. Both are valid since both t values are non-negative.'),
    dict(q='Show that ' + M(p(2, fx(1, 2)) + ' · ' + p(2, fx(1, 3)) + ' = ' + p(2, fx(5, 6)))
           + '.', a=M(p(2, fx(5, 6))),
         check=('simp', 'Integer(2)**Rational(1,2)*Integer(2)**Rational(1,3)',
                'Integer(2)**Rational(5,6)'),
         sol='Same base, so the indices add: 1/2 + 1/3 = 5/6. In root form this says '
             '√2 · ∛2 = ⁶√(2⁵).'),
    dict(q='Simplify ' + M('((' + sq('a') + ')<sup>' + fx(1, 3) + '</sup>)<sup>'
                           + fx(3, 4) + '</sup>') + ' for ' + M('a > 0') + '.',
         a=M(p('a', fx(1, 2))),
         check=('simp', '((apos**2)**Rational(1,3))**Rational(3,4)',
                'apos**Rational(1,2)'),
         sol='Multiply the indices: 2 · (1/3) · (3/4) = 1/2.'),
    dict(q='If ' + M(p(2, 'x') + ' = 3') + ', find ' + M(p(8, 'x')) + ' and '
           + M(p(2, 'x + 2')) + '.', a=M('27') + ' and ' + M('12'),
         check=('custom', 'two_to_the_x'),
         sol='8^x = (2³)^x = (2^x)³ = 27, and 2^(x+2) = 2^x · 4 = 12.'),
    dict(q='Evaluate ' + M('(1 + ' + p(2, fx(1, 2)) + ')<sup>2</sup> + (1 − '
                           + p(2, fx(1, 2)) + ')<sup>2</sup>') + '.', a=M('6'),
         check=('simp', '(1+sqrt(2))**2+(1-sqrt(2))**2', '6'),
         sol='(3 + 2√2) + (3 − 2√2) = 6. The irrational parts are opposites and cancel.'),
    dict(q='Solve ' + M(p(9, 'x') + ' − 4 · ' + p(3, 'x') + ' + 3 = 0') + '.',
         a=M('x = 0') + ' or ' + M('x = 1'), check=('custom', 'quad_in_three_x'),
         sol='9^x = (3^x)², so with t = 3^x the equation is t² − 4t + 3 = 0, giving '
             't = 1 or t = 3, that is 3^x = 3⁰ or 3¹ and x = 0 or x = 1.'),
]

TOPIC = dict(
    key='alg-12', number=12, lessons='30–31',
    unit='Unit 2 · Roots and rational exponents',
    title='Powers with a rational exponent',
    subtitle='One definition joins roots and powers into a single system — and all the '
             'old index laws keep working.',
    uz='Algebra 8, §9, pp. 42–48', cam='Cambridge Stage 9 · 1.3',
    keywords=['rational exponent', 'power', 'base', 'negative index', 'zero index',
              'index law', 'reciprocal', 'equivalent form', 'evaluate'],
    remember=[
        'The definition: <span class="m">a<sup>1/n</sup></span> is the '
        '<span class="m">n</span>-th root of <span class="m">a</span>, and '
        '<span class="m">a<sup>m/n</sup> = (a<sup>1/n</sup>)<sup>m</sup></span>.',
        'Every index law survives: add indices to multiply, subtract to divide, '
        'multiply to raise a power to a power.',
        'A negative index means the reciprocal: '
        '<span class="m">a<sup>−n</sup> = 1/a<sup>n</sup></span>.',
        'Work from the root first — <span class="m">27<sup>2/3</sup></span> is '
        '<span class="m">(∛27)<sup>2</sup> = 9</span>, which keeps the numbers small.',
        'A fraction raised to a negative index turns upside down: '
        '<span class="m">(8/27)<sup>−2/3</sup> = (27/8)<sup>2/3</sup></span>.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
