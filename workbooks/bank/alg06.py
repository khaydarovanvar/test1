# -*- coding: utf-8 -*-
"""Questions for topic 6 of Grade 8 algebra — revision for Control work 1 (§§1–4)."""

from .common import F, M, sq

x2, x3, x4 = sq('x'), sq('x', 3), sq('x', 4)
a2, b2 = sq('a'), sq('b')

Q_FOCUS = [
    dict(q='State the permissible values of ' + M(F(1, 'x − 7')) + '.', a=M('x ≠ 7'),
         check=('domain', '1/(x-7)', ['7'])),
    dict(q='Cancel ' + M(F(f'8{x2}', '12x')) + '.', a=M(F('2x', 3)),
         check=('simp', '8*x**2/(12*x)', '2*x/3')),
    dict(q='Find the LCD of ' + M(F(1, '2x')) + ' and ' + M(F(1, f'3{x2}')) + '.',
         a=M(f'6{x2}'), check=('lcm', ['2*x', '3*x**2'], '6*x**2')),
    dict(q='Simplify ' + M(F(3, 'x') + ' + ' + F(4, 'x')) + '.', a=M(F(7, 'x')),
         check=('simp', '3/x+4/x', '7/x')),
    dict(q='Cancel ' + M(F(f'{x2} − 25', 'x + 5')) + '.', a=M('x − 5'),
         check=('simp', '(x**2-25)/(x+5)', 'x-5')),
    dict(q='Simplify ' + M(F(1, 2) + ' − ' + F(1, 'x')) + '.', a=M(F('x − 2', '2x')),
         check=('simp', 'Rational(1,2)-1/x', '(x-2)/(2*x)')),
    dict(q='State the permissible values of ' + M(F(1, f'{x2} − 1')) + '.',
         a=M('x ≠ 1') + ', ' + M('x ≠ −1'), check=('domain', '1/(x**2-1)', ['1', '-1'])),
    dict(q='Write ' + M(F(2, 'a')) + ' with denominator ' + M(a2) + '.', a=M(F('2a', a2)),
         check=('simp', '2*a/a**2', '2/a')),
    dict(q='Simplify ' + M(F('x + 3', 'x + 3')) + ', stating when this is valid.',
         a=M('1') + ' for ' + M('x ≠ −3'), check=('domain', '(x+3)/(x+3)', ['-3'])),
    dict(q='Find the LCD of ' + M(F(1, 'x − 2')) + ' and ' + M(F(1, 'x + 2')) + '.',
         a=M(f'{x2} − 4'), check=('lcm', ['x-2', 'x+2'], 'x**2-4')),
]

Q_PRACTICE = [
    dict(q='Cancel ' + M(F('3x − 9', f'{x2} − 9')) + '.', a=M(F(3, 'x + 3')),
         check=('simp', '(3*x-9)/(x**2-9)', '3/(x+3)')),
    dict(q='Simplify ' + M(F(1, 'x − 1') + ' + ' + F(2, 'x + 1')) + '.',
         a=M(F('3x − 1', f'{x2} − 1')),
         check=('simp', '1/(x-1)+2/(x+1)', '(3*x-1)/(x**2-1)')),
    dict(q='State the permissible values of ' + M(F('x + 1', f'{x2} − 4x')) + '.',
         a=M('x ≠ 0') + ', ' + M('x ≠ 4'), check=('domain', '(x+1)/(x**2-4*x)', ['0', '4'])),
    dict(q='Find the LCD of ' + M(F(1, f'{x2} + x')) + ' and ' + M(F(1, f'{x2} − x')) + '.',
         a=M('x(x − 1)(x + 1)'),
         check=('lcm', ['x**2+x', 'x**2-x'], 'x*(x-1)*(x+1)')),
    dict(q='Cancel ' + M(F(f'{a2} − ab', f'ab − {b2}')) + '.', a=M(F('a', 'b')),
         check=('simp', '(a**2-a*b)/(a*b-b**2)', 'a/b')),
    dict(q='Simplify ' + M(F(5, f'{x2} − 9') + ' − ' + F(1, 'x − 3')) + '.',
         a=M(F('2 − x', f'{x2} − 9')),
         check=('simp', '5/(x**2-9)-1/(x-3)', '(2-x)/(x**2-9)')),
    dict(q='Write ' + M(F('x', 'x − y')) + ' and ' + M(F('y', 'y − x'))
           + ' with the same denominator.',
         a=M(F('x', 'x − y')) + ' and ' + M(F('−y', 'x − y')),
         check=('simp', '-y/(x-y)', 'y/(y-x)')),
    dict(q='Find the value of ' + M(F(1, 'a') + ' − ' + F(1, 'b')) + ' when '
           + M('a = 3') + ' and ' + M('b = 6') + '.',
         a=M(F(1, 6)), check=('simp', 'Rational(1,3)-Rational(1,6)', 'Rational(1,6)')),
    dict(q='Cancel ' + M(F(f'2{x2} + 4x', f'{x2} − 4')) + '.', a=M(F('2x', 'x − 2')),
         check=('simp', '(2*x**2+4*x)/(x**2-4)', '2*x/(x-2)')),
    dict(q='Simplify ' + M(F(1, 'x') + ' + ' + F(1, '2x') + ' + ' + F(1, '3x')) + '.',
         a=M(F(11, '6x')), check=('simp', '1/x+1/(2*x)+1/(3*x)', '11/(6*x)')),
]

Q_CHALLENGE = [
    dict(q='Cancel ' + M(F(f'{x3} + {x2} − 6x', f'{x2} − 4')) + '.',
         a=M(F('x(x + 3)', 'x + 2')),
         check=('simp', '(x**3+x**2-6*x)/(x**2-4)', 'x*(x+3)/(x+2)')),
    dict(q='Simplify ' + M(F(1, f'{x2} − x − 2') + ' − ' + F(1, f'{x2} − 4')) + '.',
         a=M(F(1, '(x − 2)(x + 1)(x + 2)')),
         check=('simp', '1/(x**2-x-2)-1/(x**2-4)',
                '1/((x-2)*(x+1)*(x+2))')),
    dict(q='State the permissible values of ' + M(F(1, f'{x3} − 4x')) + '.',
         a=M('x ≠ 0, 2, −2'), check=('domain', '1/(x**3-4*x)', ['0', '2', '-2'])),
    dict(q='Simplify ' + M(F('a', 'a − b') + ' + ' + F('b', 'b − a')) + '.',
         a=M('1') + ', ' + M('a ≠ b'), check=('simp', 'a/(a-b)+b/(b-a)', '1')),
    dict(q='Cancel ' + M(F('(x + 2)<sup>2</sup> − 9', f'{x2} − 1')) + '.',
         a=M(F('x + 5', 'x + 1')),
         check=('simp', '((x+2)**2-9)/(x**2-1)', '(x+5)/(x+1)')),
    dict(q='Simplify ' + M(F(2, 'x + 1') + ' − ' + F(3, 'x − 1') + ' + ' + F(5, f'{x2} − 1'))
           + '.',
         a=M(F('−x', f'{x2} − 1')),
         check=('simp', '2/(x+1)-3/(x-1)+5/(x**2-1)', '-x/(x**2-1)')),
    dict(q='Find the LCD of ' + M(F(1, f'{x2} − 4')) + ', ' + M(F(1, f'{x2} + 4x + 4'))
           + ' and ' + M(F(1, 'x + 2')) + '.',
         a=M('(x − 2)(x + 2)<sup>2</sup>'),
         check=('lcm', ['x**2-4', 'x**2+4*x+4', 'x+2'], '(x-2)*(x+2)**2')),
    dict(q='Cancel ' + M(F(f'{x4} − 1', f'{x2} − 1')) + '.', a=M(f'{x2} + 1'),
         check=('simp', '(x**4-1)/(x**2-1)', 'x**2+1')),
    dict(q='Simplify ' + M(F(1, 'a − b') + ' + ' + F(1, 'a + b') + ' − ' + F('2b', f'{a2} − {b2}'))
           + '.',
         a=M(F(2, 'a + b')),
         check=('simp', '1/(a-b)+1/(a+b)-2*b/(a**2-b**2)', '2/(a+b)')),
    dict(q='Simplify ' + M(F('x', f'{x2} − 1') + ' − ' + F(1, 'x − 1')) + '.',
         a=M(F('−1', f'{x2} − 1')),
         check=('simp', 'x/(x**2-1)-1/(x-1)', '-1/(x**2-1)')),
]

Q_BEYOND = [
    dict(q='A pupil wrote ' + M(F('x + 5', 5) + ' = x') + '. Find the mistake and give the '
           'correct simplification.',
         a='Terms cannot be cancelled; it is ' + M(F('x', 5) + ' + 1'),
         check=('simp', '(x+5)/5', 'x/5+1'),
         sol='Only <b>factors</b> cancel. Here 5 is a term of the numerator, not a factor '
             'of it. Dividing each term by 5 gives x/5 + 1. Testing x = 5 settles it: '
             'the true value is 2, not 5.'),
    dict(q='A pupil wrote ' + M(F(1, 'x − 1') + ' + ' + F(1, '1 − x') + ' = ' + F(2, 'x − 1'))
           + '. Find the mistake and give the correct answer.',
         a=M('0'), check=('simp', '1/(x-1)+1/(1-x)', '0'),
         sol='The denominators are opposites, not equal: 1 − x = −(x − 1). '
             'So the second fraction is −1/(x − 1) and the sum is 0, not 2/(x − 1).'),
    dict(q='A pupil wrote ' + M(F(f'{x2} − 4', 'x − 2') + ' = x + 2') + ' and said it holds '
           'for every ' + M('x') + '. What is wrong?',
         a='It fails at ' + M('x = 2') + ', where the left side is undefined.',
         check=('domain', '(x**2-4)/(x-2)', ['2']),
         sol='The cancellation is right but needs x − 2 ≠ 0. At x = 2 the left side is 0/0 '
             '— undefined — while x + 2 is 4. The two expressions agree everywhere else.'),
    dict(q='Simplify ' + M(F(1, 'x − 1') + ' − ' + F(1, 'x') + ' − ' + F(1, 'x(x − 1)')) + '.',
         a=M('0'), check=('simp', '1/(x-1)-1/x-1/(x*(x-1))', '0'),
         sol='Over the LCD x(x − 1) the numerators are x − (x − 1) − 1 = 0. '
             'The first two terms differ by exactly the third.'),
    dict(q='Simplify ' + M(F(1, 'x(x + 1)') + ' + ' + F(1, '(x + 1)(x + 2)')) + '.',
         a=M(F(2, 'x(x + 2)')),
         check=('simp', '1/(x*(x+1))+1/((x+1)*(x+2))', '2/(x*(x+2))'),
         sol='Split each: (1/x − 1/(x+1)) + (1/(x+1) − 1/(x+2)) = 1/x − 1/(x+2) '
             '= 2/(x(x+2)).'),
    dict(q='Find ' + M(F(1, '1 · 3') + ' + ' + F(1, '3 · 5') + ' + … + ' + F(1, '99 · 101'))
           + '.',
         a=M(F(50, 101)), check=('custom', 'odd_telescope'),
         sol='1/(n(n+2)) = ½(1/n − 1/(n+2)). The sum collapses to '
             '½(1/1 − 1/101) = ½ · 100/101 = 50/101.'),
    dict(q='Prove that ' + M(F(1, 'n(n + 2)') + ' = ' + F(1, 2) + '(' + F(1, 'n') + ' − '
                             + F(1, 'n + 2') + ')') + '.',
         a='Both sides equal ' + M(F(1, 'n(n + 2)')),
         check=('simp', '1/(n*(n+2))', '(1/n-1/(n+2))/2'),
         sol='The right side over the common denominator n(n+2) is '
             '½ · [(n+2) − n]/(n(n+2)) = ½ · 2/(n(n+2)) = 1/(n(n+2)).'),
    dict(q='Find every pair of positive integers ' + M('(x, y)') + ' with '
           + M(F(1, 'x') + ' + ' + F(1, 'y') + ' = ' + F(1, 3)) + '.',
         a=M('(4, 12), (6, 6), (12, 4)'), check=('custom', 'egyptian_third'),
         sol='3(x + y) = xy, so xy − 3x − 3y = 0 and (x − 3)(y − 3) = 9. '
             'The positive factor pairs of 9 are 1×9, 3×3, 9×1.'),
    dict(q='Show that no non-zero real numbers satisfy '
           + M(F(1, 'a') + ' − ' + F(1, 'b') + ' = ' + F(1, 'a − b')) + '.',
         a='It forces ' + M(f'{a2} − ab + {b2} = 0'), check=('custom', 'no_real_solution'),
         sol='The left side is (b − a)/(ab). Cross-multiplying, (b − a)(a − b) = ab, '
             'that is −(a − b)² = ab, so a² − ab + b² = 0. As a quadratic in a the '
             'discriminant is b² − 4b² = −3b² < 0 for b ≠ 0, so there is no real a.'),
    dict(q='Solve ' + M(F(1, 'x − 1') + ' + ' + F(1, 'x + 1') + ' = ' + F(2, f'{x2} − 1'))
           + ', or show it has no solution.',
         a='No solution — the only candidate ' + M('x = 1') + ' is forbidden.',
         check=('custom', 'no_valid_root'),
         sol='The left side is 2x/(x² − 1), so 2x = 2 and x = 1. But x = 1 makes both '
             'original denominators zero, so it must be rejected and nothing is left.'),
    dict(q='Simplify ' + M(F(f'{x2} − {sq("y")}', 'x + y') + ' + ' + F(f'{x2} + 2xy + {sq("y")}', 'x + y'))
           + '.',
         a=M('2x'),
         check=('simp', '(x**2-y**2)/(x+y)+(x**2+2*x*y+y**2)/(x+y)', '2*x'),
         sol='The first fraction is x − y and the second is x + y; the y cancels in the sum.'),
    dict(q='For which ' + M('k') + ' does ' + M(F(1, 'x − k') + ' + ' + F(1, 'x + k'))
           + ' equal ' + M(F('2x', f'{x2} − 9')) + '?',
         a=M('k = 3') + ' or ' + M('k = −3'), check=('custom', 'k_equals_three'),
         sol='The left side is 2x/(x² − k²), so k² = 9 and k = ±3. Both give the same pair '
             'of denominators, in the other order.'),
    dict(q='If ' + M('a + b + c = 0') + ' and none is zero, find '
           + M(F(1, 'ab') + ' + ' + F(1, 'bc') + ' + ' + F(1, 'ca')) + '.',
         a=M('0'), check=('custom', 'reciprocal_products_zero'),
         sol='Over the common denominator abc the sum is (c + a + b)/(abc), and the '
             'numerator is a + b + c = 0.'),
    dict(q='Simplify ' + M('(1 + ' + F(1, 'x − 1') + ')(1 − ' + F(1, 'x + 1') + ')') + '.',
         a=M(F(x2, f'{x2} − 1')),
         check=('simp', '(1+1/(x-1))*(1-1/(x+1))', 'x**2/(x**2-1)'),
         sol='The first bracket is x/(x−1) and the second is x/(x+1); '
             'multiplying gives x²/((x−1)(x+1)) = x²/(x² − 1).'),
    dict(q='A pupil cancelled ' + M(F(f'{x2} + 9', f'{x2}')) + ' to ' + M('9') + '. '
           'Explain the error and simplify correctly.',
         a=M('1 + ' + F(9, x2)), check=('simp', '(x**2+9)/x**2', '1+9/x**2'),
         sol='x² is a term of the numerator, not a factor, so it cannot be cancelled. '
             'Dividing each term by x² gives 1 + 9/x². At x = 3 the true value is 2, '
             'not 9.'),
]

TOPIC = dict(
    key='alg-06', number=6, lessons='15–16',
    unit='Unit 1 · Algebraic fractions',
    title='Revision · Control work 1 — algebraic fractions',
    subtitle='Everything from §§1–4 mixed together, with the four errors that cost the '
             'most marks set as questions of their own.',
    uz='Algebra 8, revision of §§1–4', cam='Cambridge Stage 9 · Unit 2 check',
    keywords=['control work', 'work on mistakes', 'variant', 'check the answer',
              'error', 'correct', 'counter-example', 'permissible values'],
    remember=[
        'Every fraction question starts the same way: <b>factorise</b>.',
        'Cancel factors, never terms — and test a doubtful cancellation with one number.',
        'Subtracting a numerator of several terms: bracket the whole of it.',
        'A root that makes a denominator zero must be rejected, however correct the '
        'algebra was.',
        'State the permissible values with the answer; they are part of it.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
