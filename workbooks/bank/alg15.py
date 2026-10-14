# -*- coding: utf-8 -*-
"""Questions for topic 15 of Grade 8 algebra — revision for Control work 3 (§§8–10)."""

from .common import F, M, rt, sq


def p(base, exp):
    return f'{base}<sup>{exp}</sup>'


def h(n, d):
    return F(n, d)


def t10(a, n):
    return f'{a} × 10<sup>{n}</sup>'


Q_FOCUS = [
    dict(q='Find ' + M(rt(64)) + '.', a=M('8'), check=('simp', 'sqrt(64)', '8')),
    dict(q='Evaluate ' + M(p(16, h(1, 2))) + '.', a=M('4'),
         check=('simp', 'Integer(16)**Rational(1,2)', '4')),
    dict(q='Simplify ' + M(rt(50)) + '.', a=M('5' + rt(2)),
         check=('simp', 'sqrt(50)', '5*sqrt(2)')),
    dict(q='Evaluate ' + M(p(27, h(1, 3))) + '.', a=M('3'),
         check=('simp', 'Integer(27)**Rational(1,3)', '3')),
    dict(q='Simplify ' + M(p('x', h(1, 2)) + ' · ' + p('x', h(1, 2))) + '.', a=M('x'),
         check=('simp', 'xpos**Rational(1,2)*xpos**Rational(1,2)', 'xpos')),
    dict(q='Write ' + M(t10('3.2', 3)) + ' as an ordinary number.', a=M('3200'),
         check=('simp', 'Rational(32,10)*10**3', '3200')),
    dict(q='Write ' + M(F(1, 8)) + ' as a decimal.', a=M('0.125'),
         check=('simp', 'Rational(1,8)', 'Rational(125,1000)')),
    dict(q='Rationalise ' + M(F(1, rt(2))) + '.', a=M(F(rt(2), 2)),
         check=('simp', '1/sqrt(2)', 'sqrt(2)/2')),
    dict(q='Evaluate ' + M(p(8, h(2, 3))) + '.', a=M('4'),
         check=('simp', 'Integer(8)**Rational(2,3)', '4')),
    dict(q='Simplify ' + M(rt('9' + sq('x'))) + ' for ' + M('x > 0') + '.', a=M('3x'),
         check=('simp', 'sqrt(9*xpos**2)', '3*xpos')),
]

Q_PRACTICE = [
    dict(q='Simplify ' + M(rt(12) + ' + ' + rt(27)) + '.', a=M('5' + rt(3)),
         check=('simp', 'sqrt(12)+sqrt(27)', '5*sqrt(3)')),
    dict(q='Simplify ' + M('(' + p('x', h(2, 3)) + ')<sup>' + h(3, 2) + '</sup>') + '.',
         a=M('x'), check=('simp', '(xpos**Rational(2,3))**Rational(3,2)', 'xpos')),
    dict(q='Write ' + M('0.(6)') + ' as a fraction.', a=M(F(2, 3)),
         check=('simp', 'Rational(6,9)', 'Rational(2,3)')),
    dict(q='Work out ' + M('(' + t10(2, 4) + ')(' + t10(4, '−2') + ')') + '.',
         a=M(t10(8, 2)), check=('simp', '2*10**4*4*10**(-2)', '8*10**2')),
    dict(q='Evaluate ' + M(p(32, h(2, 5))) + '.', a=M('4'),
         check=('simp', 'Integer(32)**Rational(2,5)', '4')),
    dict(q='Rationalise ' + M(F(3, rt(5))) + '.', a=M(F('3' + rt(5), 5)),
         check=('simp', '3/sqrt(5)', '3*sqrt(5)/5')),
    dict(q='Factorise ' + M('x − 9') + ' using ' + M(p('x', h(1, 2))) + '.',
         a=M('(' + p('x', h(1, 2)) + ' − 3)(' + p('x', h(1, 2)) + ' + 3)'),
         check=('simp', 'xpos-9',
                '(xpos**Rational(1,2)-3)*(xpos**Rational(1,2)+3)')),
    dict(q='Evaluate ' + M(p(16, '−' + h(3, 4))) + '.', a=M(F(1, 8)),
         check=('simp', 'Integer(16)**Rational(-3,4)', 'Rational(1,8)')),
    dict(q='Simplify ' + M(rt(sq('a', 6))) + ' for ' + M('a > 0') + '.', a=M(sq('a', 3)),
         check=('simp', 'sqrt(apos**6)', 'apos**3')),
    dict(q='Write ' + M('0.0005') + ' in standard form.', a=M(t10(5, '−4')),
         check=('simp', '5*10**(-4)', 'Rational(5,10000)')),
]

Q_CHALLENGE = [
    dict(q='Simplify ' + M('(' + rt(7) + ' − ' + rt(3) + ')(' + rt(7) + ' + ' + rt(3) + ')')
           + '.', a=M('4'),
         check=('simp', '(sqrt(7)-sqrt(3))*(sqrt(7)+sqrt(3))', '4')),
    dict(q='Simplify ' + M(F(p('x', h(3, 2)) + ' − ' + p('x', h(1, 2)), p('x', h(1, 2))))
           + '.', a=M('x − 1'),
         check=('simp', '(xpos**Rational(3,2)-xpos**Rational(1,2))/xpos**Rational(1,2)',
                'xpos-1')),
    dict(q='Rationalise ' + M(F(2, rt(6) + ' − 2')) + '.', a=M(rt(6) + ' + 2'),
         check=('simp', '2/(sqrt(6)-2)', 'sqrt(6)+2')),
    dict(q='Evaluate ' + M(p('0.04', '−' + h(1, 2))) + '.', a=M('5'),
         check=('simp', 'Rational(4,100)**Rational(-1,2)', '5')),
    dict(q='Simplify ' + M(rt(18) + ' · ' + rt(8)) + '.', a=M('12'),
         check=('simp', 'sqrt(18)*sqrt(8)', '12')),
    dict(q='Simplify ' + M('(' + p('a', h(1, 2)) + ' + ' + p('b', h(1, 2))
                           + ')<sup>2</sup> − (a + b)') + '.',
         a=M('2' + p('(ab)', h(1, 2))),
         check=('simp', '(apos**Rational(1,2)+bpos**Rational(1,2))**2-(apos+bpos)',
                '2*(apos*bpos)**Rational(1,2)')),
    dict(q='Write ' + M('0.1(3)') + ' as a fraction in lowest terms.', a=M(F(2, 15)),
         check=('simp', 'Rational(13-1,90)', 'Rational(2,15)')),
    dict(q='Work out ' + M(F('(' + t10(2, 3) + ')<sup>3</sup>', t10(4, 5))) + '.',
         a=M(t10(2, 4)), check=('simp', '(2*10**3)**3/(4*10**5)', '2*10**4')),
    dict(q='Solve ' + M(p('x', h(1, 2)) + ' = 5') + '.', a=M('x = 25'),
         check=('solve', 'sqrt(x)-5', ['25'])),
    dict(q='Simplify ' + M(rt(sq('x') + ' − 6x + 9')) + ' for ' + M('x ≥ 3') + '.',
         a=M('x − 3'), check=('simp', 'sqrt(tnn**2)', 'tnn')),
]

Q_BEYOND = [
    dict(q='A pupil wrote ' + M(rt(sq('a') + ' + ' + sq('b')) + ' = a + b')
           + '. Give a counter-example.',
         a=M('a = b = 3') + ': ' + M(rt(18) + ' ≈ 4.24') + ', not ' + M('6'),
         check=('custom', 'root_sum_counterexample'),
         sol='With a = b = 3 the left side is √18 ≈ 4.24 and the right is 6. '
             'The root of a sum is never the sum of the roots unless one of them is 0.'),
    dict(q='A pupil wrote ' + M(rt(sq('x')) + ' = x') + ' for every ' + M('x')
           + '. Correct it.', a=M('|x|'), check=('custom', 'abs_root_again'),
         sol='The arithmetic root is non-negative, so √(x²) = |x|. '
             'At x = −5 the left side is 5, not −5.'),
    dict(q='A pupil wrote ' + M('(' + p('a', h(1, 2)) + ')<sup>2</sup> = '
                                + p('a', h(1, 4))) + '. Correct it.',
         a=M('a'), check=('simp', '(apos**Rational(1,2))**2', 'apos'),
         sol='Raising a power to a power <b>multiplies</b> the indices: '
             '(1/2)·2 = 1, so the answer is a. The pupil halved instead.'),
    dict(q='A pupil wrote ' + M(p(4, h(3, 2)) + ' = 6') + '. Correct it.', a=M('8'),
         check=('simp', 'Integer(4)**Rational(3,2)', '8'),
         sol='4^(3/2) = (√4)³ = 2³ = 8. The pupil multiplied 4 by 3/2 instead of using '
             'the index.'),
    dict(q='Simplify ' + M(rt('5 + 2' + rt(6))) + '.', a=M(rt(2) + ' + ' + rt(3)),
         check=('simp', 'sqrt(5+2*sqrt(6))', 'sqrt(2)+sqrt(3)'),
         sol='5 + 2√6 = 2 + 2√6 + 3 = (√2 + √3)². Both parts are positive, so the root '
             'is √2 + √3.'),
    dict(q='Rationalise ' + M(F(rt(3) + ' − 1', rt(3) + ' + 1')) + '.', a=M('2 − ' + rt(3)),
         check=('simp', '(sqrt(3)-1)/(sqrt(3)+1)', '2-sqrt(3)'),
         sol='Multiply top and bottom by √3 − 1: the bottom becomes 3 − 1 = 2 and the '
             'top (√3 − 1)² = 4 − 2√3. So the value is (4 − 2√3)/2 = 2 − √3.'),
    dict(q='Put ' + M(p(2, h(1, 2))) + ', ' + M(p(2, h(1, 3))) + ', ' + M(p(2, h(1, 4)))
           + ' in decreasing order.',
         a=M(p(2, h(1, 2)) + ' > ' + p(2, h(1, 3)) + ' > ' + p(2, h(1, 4))),
         check=('custom', 'powers_of_two_order'),
         sol='The base is greater than 1, so a bigger index gives a bigger value, and '
             '1/2 > 1/3 > 1/4. (For a base between 0 and 1 the order would reverse.)'),
    dict(q='Solve ' + M(p(4, 'x') + ' = 8') + '.', a=M('x = ' + h(3, 2)),
         check=('custom', 'four_to_x_is_eight'),
         sol='Write both sides as powers of 2: 2^(2x) = 2³, so 2x = 3 and x = 3/2.'),
    dict(q='Show that ' + M(F(1, rt(2) + ' + 1') + ' = ' + rt(2) + ' − 1') + '.',
         a=M(rt(2) + ' − 1'), check=('simp', '1/(sqrt(2)+1)', 'sqrt(2)-1'),
         sol='(√2 + 1)(√2 − 1) = 2 − 1 = 1, so the two are reciprocals. '
             'This is the simplest case of rationalising with a conjugate.'),
    dict(q='An electron has mass ' + M(t10('9.11', '−31')) + ' kg. Roughly how many '
           'electrons weigh ' + M('1') + ' kg?',
         a='About ' + M(t10('1.1', 30)), check=('custom', 'electron_count'),
         sol='1 ÷ (9.11 × 10⁻³¹) = (1/9.11) × 10³¹ ≈ 0.110 × 10³¹ = 1.1 × 10³⁰.'),
    dict(q='Solve ' + M(p('x', h(1, 2)) + ' + ' + p('x', h(1, 4)) + ' = 6') + '.',
         a=M('x = 16'), check=('custom', 'quartic_sum_six'),
         sol='Put t = x^(1/4) ≥ 0. Then t² + t − 6 = 0, so t = 2 or t = −3. '
             'Only t = 2 is allowed, giving x = 16.'),
    dict(q='Explain why ' + M('0.(142857) × 7 = 1') + '.', a=M('1'),
         check=('simp', 'Rational(1,7)*7', '1'),
         sol='0.(142857) is exactly 1/7 — the division 1 ÷ 7 produces that repeating '
             'block for ever. Multiplying by 7 returns 1, just as 0.(9) = 1.'),
    dict(q='Work out ' + M('(2 + ' + rt(3) + ')(2 − ' + rt(3) + ')')
           + ', and hence rationalise ' + M(F(1, '2 + ' + rt(3))) + '.',
         a=M('1') + '; ' + M('2 − ' + rt(3)),
         check=('simp', '1/(2+sqrt(3))', '2-sqrt(3)'),
         sol='(2+√3)(2−√3) = 4 − 3 = 1, so the two numbers are reciprocals and '
             '1/(2+√3) = 2 − √3 with no denominator left to clear.'),
    dict(q='Which is larger, ' + M(p(3, h(1, 2))) + ' or ' + M(p(2, h(2, 3))) + '?',
         a=M(p(3, h(1, 2))),
         check=('bool', 'Integer(3)**Rational(1,2) > Integer(2)**Rational(2,3)'),
         sol='Raise both to the sixth power: 3³ = 27 and 2⁴ = 16. Since 27 > 16 the '
             'first is larger.'),
    dict(q='Simplify ' + M(rt('9 + 4' + rt(5))) + '.', a=M('2 + ' + rt(5)),
         check=('simp', 'sqrt(9+4*sqrt(5))', '2+sqrt(5)'),
         sol='9 + 4√5 = 4 + 4√5 + 5 = (2 + √5)², and 2 + √5 > 0.'),
]

TOPIC = dict(
    key='alg-15', number=15, lessons='36–37',
    unit='Unit 2 · Roots and rational exponents',
    title='Revision · Control work 3 — roots and rational exponents',
    subtitle='Chapter I mixed together — roots, rational exponents, standard form and '
             'decimals — with the four errors that cost the most marks set as questions.',
    uz='Algebra 8, revision of §§8–10', cam='Cambridge Stage 9 · Unit 1 check',
    keywords=['control work', 'work on mistakes', 'root', 'exponent', 'standard form',
              'evaluate', 'justify', 'counter-example'],
    remember=[
        'The arithmetic root is never negative: '
        '<span class="m">√(x<sup>2</sup>) = |x|</span>.',
        'A power of a power <b>multiplies</b> indices; a product of powers adds them.',
        'Work the root before the power: <span class="m">8<sup>2/3</sup> = (∛8)<sup>2</sup></span>.',
        'Rationalise with the conjugate, and check the denominator really became rational.',
        'A root of a sum is not the sum of the roots — one counter-example settles it.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
