# -*- coding: utf-8 -*-
"""Milliy sertifikat practice for Quarter I — algebraic fractions.

Written to the published specification of the mathematics paper: Y-1 closed
items with four options, Y-2 matching items, and open items in parts a) and b).
"""

from .common import F, M

MS = {}

MS['alg-01'] = dict(brief=[
    ('Everything rests on the Grade 7 identities',
     'The paper assumes ' + M('(a ± b)²') + ' and ' + M('a² − b² = (a − b)(a + b)')
     + ' the way it assumes the times table. Most Y-1 items on this material are '
       'one expansion or one factorisation, and they are worth 1,3 ball — the '
       'cheapest marks on the paper, so they must be the fastest.'),
    ('Substitute last, not first',
     'When an item asks for a value, simplify the expression first and put the '
     'number in at the end. ' + M('3(2x − 5) − 2(x − 4)') + ' at ' + M('x = 10')
     + ' is four operations after simplifying and nine before.'),
    ('A wrong option is usually your own slip',
     'In a four-option item the distractors are built from the common errors: a '
     'sign dropped when a bracket is subtracted, a square taken term by term. If '
     'your answer is on the list, that is no proof it is right.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Simplify ' + M('3(2x − 5) − 2(x − 4)') + '.',
         opts=(M('4x − 7'), M('4x − 23'), M('4x + 3'), M('8x − 7')),
         key=0, a=M('4x − 7'),
         check=('simp', '3*(2*x-5)-2*(x-4)', '4*x-7')),
    dict(kind='Y-1', mark='1,3',
         q='Factorise ' + M('x² − 9x') + '.',
         opts=(M('x(x − 9)'), M('x(x + 9)'), M('(x − 3)(x + 3)'), M('9x(x − 1)')),
         key=0, a=M('x(x − 9)'),
         check=('simp', 'x*(x-9)', 'x**2-9*x')),
    dict(kind='Y-1', mark='2,2',
         q='Solve ' + M('5x − 3 = 2x + 9') + '.',
         opts=(M('x = 2'), M('x = 3'), M('x = 4'), M('x = 6')),
         key=2, a=M('x = 4'),
         check=('solve', '5*x-3-(2*x+9)', ['4'])),
    dict(kind='Y-1', mark='2,2',
         q='Simplify ' + F(M('2a³b² · 3ab'), M('a²b')) + '.',
         opts=(M('6a²b²'), M('6a²b³'), M('5a²b²'), M('6a⁴b²')),
         key=0, a=M('6a²b²'),
         check=('simp', '2*a**3*b**2*3*a*b/(a**2*b)', '6*a**2*b**2')),
    dict(kind='Y-2', mark='2,2',
         q='Match each expression with the one equal to it.',
         left=(M('(x + 3)²'), M('(x − 3)²'), M('(x − 3)(x + 3)'), M('x² + 3x')),
         right=(M('x² − 9'), M('x² + 6x + 9'), M('x(x + 3)'), M('x² − 6x + 9')),
         a='1–B, 2–D, 3–A, 4–C',
         checks=[('simp', '(x+3)**2', 'x**2+6*x+9'),
                 ('simp', '(x-3)**2', 'x**2-6*x+9'),
                 ('simp', '(x-3)*(x+3)', 'x**2-9'),
                 ('simp', 'x**2+3*x', 'x*(x+3)')]),
    dict(kind='O', mark='3,2',
         q='Consider the product ' + M('(2x − 1)(x + 4)') + '.',
         parts=('Expand and simplify it.',
                'Hence find its value when ' + M('x = 3') + '.'),
         a='a) ' + M('2x² + 7x − 4') + ' &nbsp; b) ' + M('35'),
         checks=[('simp', '(2*x-1)*(x+4)', '2*x**2+7*x-4'),
                 ('simp', '2*3**2+7*3-4', '35')]),
])

MS['alg-02'] = dict(brief=[
    ('Read the expression, then the question',
     'An item that gives ' + M('a = −2') + ' is testing the brackets round the '
     'negative, not the arithmetic: ' + M('3a²') + ' is ' + M('3 · 4 = 12')
     + ', never ' + M('−12') + '.'),
    ('Changing the subject is a Y-1 favourite',
     'It appears every sitting in some form. Do it by undoing operations in '
     'reverse order, and check by substituting your result back into the '
     'original formula — that check costs ten seconds and catches everything.'),
    ('Like terms only',
     M('5x − 3y − 2x + 7y') + ' collects to ' + M('3x + 4y') + '. The paper '
     'relies on candidates in a hurry adding ' + M('x') + ' terms to '
     + M('y') + ' terms; three of the four options will be built that way.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Find the value of ' + M('3a² − 2b') + ' when ' + M('a = −2')
           + ' and ' + M('b = 5') + '.',
         opts=(M('2'), M('−2'), M('22'), M('−22')),
         key=0, a=M('2'),
         check=('simp', '3*(-2)**2-2*5', '2')),
    dict(kind='Y-1', mark='1,3',
         q='Simplify ' + M('5x − 3y − 2x + 7y') + '.',
         opts=(M('3x + 4y'), M('3x − 4y'), M('7x + 4y'), M('3x + 10y')),
         key=0, a=M('3x + 4y'),
         check=('simp', '5*x-3*y-2*x+7*y', '3*x+4*y')),
    dict(kind='Y-1', mark='2,2',
         q='Which expression is equal to ' + M('a² − b²') + ' for all '
           + M('a') + ' and ' + M('b') + '?',
         opts=(M('(a − b)²'), M('(a − b)(a + b)'), M('a² + b² − 2ab'),
               M('(b − a)²')),
         key=1, a=M('(a − b)(a + b)'),
         check=('simp', '(a-b)*(a+b)', 'a**2-b**2')),
    dict(kind='Y-1', mark='2,2',
         q='If ' + M('y = 3x + 4') + ', express ' + M('x') + ' in terms of '
           + M('y') + '.',
         opts=(M('x = ') + F(M('y − 4'), M('3')), M('x = ') + F(M('y'), M('3'))
               + M(' − 4'), M('x = 3y − 4'), M('x = ') + F(M('y + 4'), M('3'))),
         key=0, a=M('x = ') + F(M('y − 4'), M('3')),
         check=('simp', '3*((y-4)/3)+4', 'y')),
    dict(kind='Y-2', mark='2,2',
         q='Each expression is to be evaluated at ' + M('x = 2')
           + '. Match it with its value.',
         left=(M('x² + 1'), M('2x³'), M('(x + 1)²'), M('10 − x²')),
         right=(M('9'), M('5'), M('6'), M('16')),
         a='1–B, 2–D, 3–A, 4–C',
         checks=[('simp', '2**2+1', '5'), ('simp', '2*2**3', '16'),
                 ('simp', '(2+1)**2', '9'), ('simp', '10-2**2', '6')]),
    dict(kind='O', mark='3,2',
         q='A rectangle has length ' + M('x + 5') + ' and width ' + M('x − 2')
           + '.',
         parts=('Write its perimeter in its simplest form.',
                'Find ' + M('x') + ' if the perimeter is ' + M('38') + '.'),
         a='a) ' + M('4x + 6') + ' &nbsp; b) ' + M('x = 8'),
         checks=[('simp', '2*((x+5)+(x-2))', '4*x+6'),
                 ('solve', '4*x+6-38', ['8'])]),
])

MS['alg-03'] = dict(brief=[
    ('Cancel factors, never terms',
     F(M('x² − 25'), M('x + 5')) + ' is ' + M('x − 5') + ' because the top is a '
     'product. ' + F(M('x² − 25'), M('x')) + ' cancels to nothing at all. Every '
     'sitting carries an item whose wrong options come from cancelling a term.'),
    ('The forbidden value is asked for directly',
     'An item of the form &ldquo;for which ' + M('x') + ' is the fraction '
     'undefined?&rdquo; is pure bookkeeping: set every denominator as written to '
     'zero. Do it before simplifying — cancelling first hides the value and loses '
     'the mark.'),
    ('Factorise first, always',
     'Nothing in a rational expression can be done until the top and the bottom '
     'are products. Take the common factor out, then look for a difference of '
     'two squares, then for a quadratic that splits.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Simplify ' + F(M('6x³'), M('9x')) + '.',
         opts=(F(M('2x²'), M('3')), F(M('2x'), M('3')), F(M('3x²'), M('2')),
               M('2x²')),
         key=0, a=F(M('2x²'), M('3')),
         check=('simp', '6*x**3/(9*x)', '2*x**2/3')),
    dict(kind='Y-1', mark='1,3',
         q='For which value of ' + M('x') + ' is ' + F(M('x + 1'), M('x − 4'))
           + ' undefined?',
         opts=(M('x = −1'), M('x = 0'), M('x = 4'), M('x = −4')),
         key=2, a=M('x = 4'),
         check=('domain', '(x+1)/(x-4)', ['4'])),
    dict(kind='Y-1', mark='2,2',
         q='Simplify ' + F(M('x² − 25'), M('x + 5')) + '.',
         opts=(M('x − 5'), M('x + 5'), M('x² − 5'), M('x − 25')),
         key=0, a=M('x − 5'),
         check=('simp', '(x**2-25)/(x+5)', 'x-5')),
    dict(kind='Y-1', mark='2,2',
         q='Simplify ' + F(M('3x − 12'), M('x² − 16')) + '.',
         opts=(F(M('3'), M('x + 4')), F(M('3'), M('x − 4')), M('3(x + 4)'),
               F(M('1'), M('x + 4'))),
         key=0, a=F(M('3'), M('x + 4')),
         check=('simp', '(3*x-12)/(x**2-16)', '3/(x+4)')),
    dict(kind='Y-2', mark='2,2',
         q='Match each fraction with its cancelled form.',
         left=(F(M('x² − x'), M('x')), F(M('x² − 1'), M('x − 1')),
               F(M('2x + 6'), M('2')), F(M('x² + 2x'), M('x + 2'))),
         right=(M('x + 1'), M('x'), M('x − 1'), M('x + 3')),
         a='1–C, 2–A, 3–D, 4–B',
         checks=[('simp', '(x**2-x)/x', 'x-1'), ('simp', '(x**2-1)/(x-1)', 'x+1'),
                 ('simp', '(2*x+6)/2', 'x+3'), ('simp', '(x**2+2*x)/(x+2)', 'x')]),
    dict(kind='O', mark='3,2',
         q='Consider ' + F(M('x² + 5x + 6'), M('x² − 4')) + '.',
         parts=('Simplify it.',
                'Write down the values ' + M('x') + ' may not take.'),
         a='a) ' + F(M('x + 3'), M('x − 2')) + ' &nbsp; b) ' + M('x ≠ 2')
           + ' and ' + M('x ≠ −2'),
         checks=[('simp', '(x**2+5*x+6)/(x**2-4)', '(x+3)/(x-2)'),
                 ('domain', '(x**2+5*x+6)/(x**2-4)', ['2', '-2'])]),
])

MS['alg-04'] = dict(brief=[
    ('The common denominator is the lowest one',
     'Multiplying the denominators together always works and usually costs you '
     'the next step. ' + M('x² − 9') + ' and ' + M('x + 3') + ' need only '
     + M('x² − 9') + ', because the second is already a factor of the first.'),
    ('Factorise before you compare',
     'Two denominators can only be compared as products. ' + M('x² − x')
     + ' and ' + M('x² − 1') + ' look unrelated until they are '
     + M('x(x − 1)') + ' and ' + M('(x − 1)(x + 1)') + '.'),
    ('Multiply the top by exactly what you multiplied the bottom by',
     'This is where the 2,2-ball items are lost. Writing '
     + F(M('3'), M('x + 2')) + ' over ' + M('x² − 4') + ' means multiplying '
     'both parts by ' + M('x − 2') + ', giving ' + M('3x − 6') + ' on top.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='What is the lowest common denominator of ' + F(M('1'), M('2x'))
           + ' and ' + F(M('1'), M('3x')) + '?',
         opts=(M('6x'), M('6x²'), M('5x'), M('x')),
         key=0, a=M('6x'),
         check=('lcm', ['2*x', '3*x'], '6*x')),
    dict(kind='Y-1', mark='1,3',
         q='What is the lowest common denominator of ' + F(M('1'), M('x − 1'))
           + ' and ' + F(M('1'), M('x + 1')) + '?',
         opts=(M('x² − 1'), M('x² + 1'), M('x − 1'), M('2x')),
         key=0, a=M('x² − 1'),
         check=('lcm', ['x-1', 'x+1'], 'x**2-1')),
    dict(kind='Y-1', mark='2,2',
         q='Written with denominator ' + M('x² − 4') + ', the fraction '
           + F(M('3'), M('x + 2')) + ' has numerator',
         opts=(M('3x − 6'), M('3x + 6'), M('3'), M('x − 2')),
         key=0, a=M('3x − 6'),
         check=('simp', '3/(x+2)', '(3*x-6)/(x**2-4)')),
    dict(kind='Y-1', mark='2,2',
         q='What is the lowest common denominator of ' + F(M('1'), M('x² − 9'))
           + ' and ' + F(M('1'), M('x + 3')) + '?',
         opts=(M('x² − 9'), M('(x² − 9)(x + 3)'), M('x + 3'), M('x³ − 27')),
         key=0, a=M('x² − 9'),
         check=('lcm', ['x**2-9', 'x+3'], 'x**2-9')),
    dict(kind='Y-2', mark='2,2',
         q='Match each pair of denominators with their lowest common denominator.',
         left=(M('x') + ' and ' + M('x²'), M('x − 2') + ' and ' + M('x + 2'),
               M('2x') + ' and ' + M('6'), M('x') + ' and ' + M('x + 1')),
         right=(M('6x'), M('x²'), M('x² + x'), M('x² − 4')),
         a='1–B, 2–D, 3–A, 4–C',
         checks=[('lcm', ['x', 'x**2'], 'x**2'), ('lcm', ['x-2', 'x+2'], 'x**2-4'),
                 ('lcm', ['2*x', '6'], '6*x'), ('lcm', ['x', 'x+1'], 'x**2+x')]),
    dict(kind='O', mark='3,2',
         q='Two fractions have denominators ' + M('x² − x') + ' and '
           + M('x² − 1') + '.',
         parts=('Write down their lowest common denominator.',
                'Write ' + F(M('1'), M('x² − x')) + ' over that denominator and '
                'give its numerator.'),
         a='a) ' + M('x³ − x') + ' &nbsp; b) ' + M('x + 1'),
         checks=[('lcm', ['x**2-x', 'x**2-1'], 'x**3-x'),
                 ('simp', '1/(x**2-x)', '(x+1)/(x**3-x)')]),
])

MS['alg-05'] = dict(brief=[
    ('A minus in front of a fraction belongs to every term of its numerator',
     F(M('1'), M('x − 1')) + ' − ' + F(M('1'), M('x')) + ' becomes '
     + F(M('x − (x − 1)'), M('x(x − 1)')) + '. Candidates who write '
     + M('x − x − 1') + ' on top get an option that is waiting for them.'),
    ('Add first, cancel second',
     'The answer to an addition is often cancellable: '
     + F(M('x'), M('x + 1')) + ' + ' + F(M('1'), M('x + 1')) + ' is '
     + M('1') + ', not ' + F(M('x + 1'), M('x + 1')) + '. The paper lists both, '
     'and only the simplified one is keyed.'),
    ('Keep the denominator factorised to the end',
     'Leave it as ' + M('(x − 2)(x + 2)') + ' while you work and multiply out '
     'only if the options are written that way. It saves a factorisation you '
     'would otherwise have to do twice.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Simplify ' + F(M('1'), M('x')) + ' + ' + F(M('2'), M('x')) + '.',
         opts=(F(M('3'), M('x')), F(M('3'), M('2x')), F(M('2'), M('x²')),
               F(M('3'), M('x²'))),
         key=0, a=F(M('3'), M('x')),
         check=('simp', '1/x+2/x', '3/x')),
    dict(kind='Y-1', mark='1,3',
         q='Write ' + F(M('1'), M('2')) + ' + ' + F(M('1'), M('x'))
           + ' as a single fraction.',
         opts=(F(M('x + 2'), M('2x')), F(M('2 + x'), M('2 + x')),
               F(M('1'), M('2x')), F(M('x + 1'), M('2x'))),
         key=0, a=F(M('x + 2'), M('2x')),
         check=('simp', '1/2+1/x', '(x+2)/(2*x)')),
    dict(kind='Y-1', mark='2,2',
         q='Simplify ' + F(M('1'), M('x − 1')) + ' − ' + F(M('1'), M('x')) + '.',
         opts=(F(M('1'), M('x² − x')), F(M('−1'), M('x² − x')),
               F(M('1'), M('x − 1')), M('0')),
         key=0, a=F(M('1'), M('x² − x')),
         check=('simp', '1/(x-1)-1/x', '1/(x**2-x)')),
    dict(kind='Y-1', mark='2,2',
         q='Simplify ' + F(M('x'), M('x + 1')) + ' + ' + F(M('1'), M('x + 1'))
           + '.',
         opts=(M('1'), F(M('x + 1'), M('2x + 2')), F(M('x'), M('x + 1')),
               F(M('x + 1'), M('x'))),
         key=0, a=M('1'),
         check=('simp', 'x/(x+1)+1/(x+1)', '1')),
    dict(kind='Y-2', mark='2,2',
         q='Match each sum or difference with the single fraction equal to it.',
         left=(F(M('1'), M('x')) + ' + ' + F(M('1'), M('y')),
               F(M('1'), M('x')) + ' − ' + F(M('1'), M('y')),
               F(M('2'), M('x')) + ' + ' + F(M('3'), M('2x')),
               F(M('1'), M('x + 1')) + ' + ' + F(M('1'), M('x − 1'))),
         right=(F(M('7'), M('2x')), F(M('x + y'), M('xy')),
                F(M('2x'), M('x² − 1')), F(M('y − x'), M('xy'))),
         a='1–B, 2–D, 3–A, 4–C',
         checks=[('simp', '1/x+1/y', '(x+y)/(x*y)'),
                 ('simp', '1/x-1/y', '(y-x)/(x*y)'),
                 ('simp', '2/x+3/(2*x)', '7/(2*x)'),
                 ('simp', '1/(x+1)+1/(x-1)', '2*x/(x**2-1)')]),
    dict(kind='O', mark='3,2',
         q='Consider ' + F(M('3'), M('x − 2')) + ' − ' + F(M('2'), M('x + 2'))
           + '.',
         parts=('Write it as a single fraction in its simplest form.',
                'Find its value when ' + M('x = 0') + '.'),
         a='a) ' + F(M('x + 10'), M('x² − 4')) + ' &nbsp; b) ' + M('−2,5'),
         checks=[('simp', '3/(x-2)-2/(x+2)', '(x+10)/(x**2-4)'),
                 ('simp', '(0+10)/(0**2-4)', '-5/2')]),
])

MS['alg-06'] = dict(brief=[
    ('A control-work item is a short item with two steps',
     'The exam mixes the quarter the same way: factorise, then cancel; find the '
     'common denominator, then add. Nothing here needs a new idea — only the '
     'habit of doing the two steps in the right order.'),
    ('Watch the squares in the denominator',
     M('x² + 4x + 4') + ' is ' + M('(x + 2)²') + ', so one factor survives the '
     'cancelling. An item built on this is worth 2,2 ball and takes thirty '
     'seconds once the square is seen.'),
    ('Undefined is about the expression you were given',
     F(M('x − 3'), M('x² − 9')) + ' cancels to ' + F(M('1'), M('x + 3'))
     + ', but ' + M('x = 3') + ' is still forbidden. The paper keys both values.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Simplify ' + F(M('4x²y'), M('8xy²')) + '.',
         opts=(F(M('x'), M('2y')), F(M('y'), M('2x')), F(M('x'), M('2')),
               F(M('2x'), M('y'))),
         key=0, a=F(M('x'), M('2y')),
         check=('simp', '4*x**2*y/(8*x*y**2)', 'x/(2*y)')),
    dict(kind='Y-1', mark='1,3',
         q='Simplify ' + F(M('2'), M('3x')) + ' + ' + F(M('1'), M('3x')) + '.',
         opts=(F(M('1'), M('x')), F(M('3'), M('6x')), F(M('1'), M('3x')),
               F(M('3'), M('x'))),
         key=0, a=F(M('1'), M('x')),
         check=('simp', '2/(3*x)+1/(3*x)', '1/x')),
    dict(kind='Y-1', mark='2,2',
         q='Simplify ' + F(M('x² − 4'), M('x² + 4x + 4')) + '.',
         opts=(F(M('x − 2'), M('x + 2')), F(M('x + 2'), M('x − 2')),
               M('x − 2'), F(M('−4'), M('4x + 4'))),
         key=0, a=F(M('x − 2'), M('x + 2')),
         check=('simp', '(x**2-4)/(x**2+4*x+4)', '(x-2)/(x+2)')),
    dict(kind='Y-1', mark='2,2',
         q='For which values of ' + M('x') + ' is ' + F(M('x − 3'), M('x² − 9'))
           + ' undefined?',
         opts=(M('x = 3') + ' only', M('x = −3') + ' only',
               M('x = 3') + ' and ' + M('x = −3'), ' no value of ' + M('x')),
         key=2, a=M('x = 3') + ' and ' + M('x = −3'),
         check=('domain', '(x-3)/(x**2-9)', ['3', '-3'])),
    dict(kind='Y-2', mark='2,2',
         q='Match each fraction with its simplest form.',
         left=(F(M('x² − 9'), M('x + 3')), F(M('2x + 4'), M('x + 2')),
               F(M('x² + x'), M('x + 1')), F(M('3x − 9'), M('x − 3'))),
         right=(M('x'), M('x − 3'), M('3'), M('2')),
         a='1–B, 2–D, 3–A, 4–C',
         checks=[('simp', '(x**2-9)/(x+3)', 'x-3'), ('simp', '(2*x+4)/(x+2)', '2'),
                 ('simp', '(x**2+x)/(x+1)', 'x'), ('simp', '(3*x-9)/(x-3)', '3')]),
    dict(kind='O', mark='3,2',
         q='Consider ' + F(M('1'), M('x')) + ' + ' + F(M('1'), M('x + 1')) + '.',
         parts=('Write it as a single fraction.',
                'Find its value when ' + M('x = 1') + '.'),
         a='a) ' + F(M('2x + 1'), M('x² + x')) + ' &nbsp; b) ' + M('1,5'),
         checks=[('simp', '1/x+1/(x+1)', '(2*x+1)/(x**2+x)'),
                 ('simp', '(2*1+1)/(1**2+1)', '3/2')]),
])

MS['alg-07'] = dict(brief=[
    ('Division is multiplication by the reciprocal — turn it over first',
     'Every mark lost on these items is lost before any algebra happens, by '
     'dividing top by top and bottom by bottom. Turn the second fraction over, '
     'then cancel across the product.'),
    ('Cancel across the whole product, not inside one fraction',
     'In ' + F(M('x² − 1'), M('x')) + ' · ' + F(M('x'), M('x + 1')) + ' the '
     + M('x') + ' on the bottom of the first cancels the ' + M('x') + ' on the '
     'top of the second. Nothing has to be multiplied out at all.'),
    ('A quotient of fractions has more forbidden values than it looks',
     'Dividing by ' + F(M('x − 2'), M('x')) + ' forbids ' + M('x = 2') + ' as '
     'well as ' + M('x = 0') + ': you may not divide by zero even when the zero '
     'is upstairs.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Simplify ' + F(M('2'), M('x')) + ' · ' + F(M('x'), M('3')) + '.',
         opts=(F(M('2'), M('3')), F(M('2x'), M('3')), F(M('2'), M('3x')),
               F(M('3'), M('2'))),
         key=0, a=F(M('2'), M('3')),
         check=('simp', '(2/x)*(x/3)', '2/3')),
    dict(kind='Y-1', mark='1,3',
         q='Simplify ' + F(M('x'), M('2')) + ' ÷ ' + F(M('x'), M('4')) + '.',
         opts=(M('2'), F(M('1'), M('2')), F(M('x²'), M('8')), M('8')),
         key=0, a=M('2'),
         check=('simp', '(x/2)/(x/4)', '2')),
    dict(kind='Y-1', mark='2,2',
         q='Simplify ' + F(M('x² − 1'), M('x')) + ' · ' + F(M('x'), M('x + 1'))
           + '.',
         opts=(M('x − 1'), M('x + 1'), M('x² − 1'), F(M('x − 1'), M('x'))),
         key=0, a=M('x − 1'),
         check=('simp', '((x**2-1)/x)*(x/(x+1))', 'x-1')),
    dict(kind='Y-1', mark='2,2',
         q='Simplify ' + F(M('3'), M('x + 2')) + ' ÷ ' + F(M('6'), M('x² − 4'))
           + '.',
         opts=(F(M('x − 2'), M('2')), F(M('2'), M('x − 2')), M('2(x − 2)'),
               F(M('x + 2'), M('2'))),
         key=0, a=F(M('x − 2'), M('2')),
         check=('simp', '(3/(x+2))/(6/(x**2-4))', '(x-2)/2')),
    dict(kind='Y-2', mark='2,2',
         q='Match each product or quotient with its value.',
         left=(F(M('2a'), M('b')) + ' · ' + F(M('b'), M('4')),
               F(M('x²'), M('y')) + ' · ' + F(M('y'), M('x')),
               F(M('a'), M('b')) + ' ÷ ' + F(M('a'), M('b²')),
               F(M('x'), M('3')) + ' · ' + F(M('9'), M('x²'))),
         right=(M('x'), F(M('a'), M('2')), F(M('3'), M('x')), M('b')),
         a='1–B, 2–A, 3–D, 4–C',
         checks=[('simp', '(2*a/b)*(b/4)', 'a/2'), ('simp', '(x**2/y)*(y/x)', 'x'),
                 ('simp', '(a/b)/(a/b**2)', 'b'), ('simp', '(x/3)*(9/x**2)', '3/x')]),
    dict(kind='O', mark='3,2',
         q='Consider ' + F(M('x² − 4'), M('x² + 2x')) + ' ÷ ' + F(M('x − 2'), M('x'))
           + '.',
         parts=('Simplify it.',
                'Write down every value ' + M('x') + ' may not take.'),
         a='a) ' + M('1') + ' &nbsp; b) ' + M('x ≠ 0, −2, 2'),
         checks=[('simp', '((x**2-4)/(x**2+2*x))*(x/(x-2))', '1'),
                 ('domain', '((x**2-4)/(x**2+2*x))*(x/(x-2))', ['0', '-2', '2'])]),
])

MS['alg-08'] = dict(brief=[
    ('A fraction inside a fraction is one division',
     'Clear the small fractions first, then divide. '
     + F(M('1 − 1/x²'), M('1 − 1/x')) + ' is '
     + F(M('x² − 1'), M('x²')) + ' ÷ ' + F(M('x − 1'), M('x')) + ', which the '
     'reciprocal turns into a product that cancels on sight.'),
    ('Or multiply every term by the inner denominator',
     'Multiplying top and bottom by ' + M('xy') + ' turns '
     + F(M('1/x − 1/y'), M('1/x + 1/y')) + ' into ' + F(M('y − x'), M('y + x'))
     + ' in one line. In a 150-minute paper that line is worth having.'),
    ('The order of ' + M('x') + ' and ' + M('y') + ' decides the sign',
     M('y − x') + ' and ' + M('x − y') + ' differ by a factor of ' + M('−1')
     + ', and both will be among the options. Check with one easy pair of '
     'numbers before you commit.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Write ' + M('1 + ') + F(M('1'), M('x')) + ' as a single fraction.',
         opts=(F(M('x + 1'), M('x')), F(M('1'), M('x + 1')), F(M('2'), M('x')),
               F(M('x'), M('x + 1'))),
         key=0, a=F(M('x + 1'), M('x')),
         check=('simp', '1+1/x', '(x+1)/x')),
    dict(kind='Y-1', mark='1,3',
         q='Simplify ' + F(M('1'), F(M('1'), M('x'))) + '.',
         opts=(M('x'), F(M('1'), M('x')), F(M('1'), M('x²')), M('x²')),
         key=0, a=M('x'),
         check=('simp', '1/(1/x)', 'x')),
    dict(kind='Y-1', mark='2,2',
         q='Simplify ' + F(M('1 − 1/x²'), M('1 − 1/x')) + '.',
         opts=(F(M('x + 1'), M('x')), F(M('x − 1'), M('x')), F(M('x'), M('x + 1')),
               M('x + 1')),
         key=0, a=F(M('x + 1'), M('x')),
         check=('simp', '(1-1/x**2)/(1-1/x)', '(x+1)/x')),
    dict(kind='Y-1', mark='2,2',
         q='Simplify ' + F(M('1/x − 1/y'), M('1/x + 1/y')) + '.',
         opts=(F(M('y − x'), M('y + x')), F(M('x − y'), M('x + y')),
               F(M('y + x'), M('y − x')), M('−1')),
         key=0, a=F(M('y − x'), M('y + x')),
         check=('simp', '(1/x-1/y)/(1/x+1/y)', '(y-x)/(y+x)')),
    dict(kind='Y-2', mark='2,2',
         q='Match each expression with its simplest form.',
         left=(F(M('x'), M('1 + 1/x')), F(M('1'), M('x')) + ' + ' + F(M('1'), M('y')),
               F(M('1'), F(M('1'), M('x')) + ' − ' + F(M('1'), M('y'))),
               M('x + ') + F(M('1'), M('x'))),
         right=(F(M('x + y'), M('xy')), F(M('x²'), M('x + 1')),
                F(M('x² + 1'), M('x')), F(M('xy'), M('y − x'))),
         a='1–B, 2–A, 3–D, 4–C',
         checks=[('simp', 'x/(1+1/x)', 'x**2/(x+1)'),
                 ('simp', '1/x+1/y', '(x+y)/(x*y)'),
                 ('simp', '1/(1/x-1/y)', 'x*y/(y-x)'),
                 ('simp', 'x+1/x', '(x**2+1)/x')]),
    dict(kind='O', mark='3,2',
         q='Consider ' + M('(') + F(M('1'), M('x − 1')) + ' + ' + F(M('1'), M('x + 1'))
           + M(') ÷ ') + F(M('2x'), M('x² − 1')) + '.',
         parts=('Simplify it.',
                'Write down every value ' + M('x') + ' may not take.'),
         a='a) ' + M('1') + ' &nbsp; b) ' + M('x ≠ 1, −1, 0'),
         checks=[('simp', '(1/(x-1)+1/(x+1))/(2*x/(x**2-1))', '1'),
                 ('domain', '(1/(x-1)+1/(x+1))/(2*x/(x**2-1))', ['1', '-1', '0'])]),
])

MS['alg-09'] = dict(brief=[
    ('Opposite denominators differ by a sign',
     M('x − 2') + ' and ' + M('2 − x') + ' are negatives of one another, so '
     + F(M('1'), M('x − 2')) + ' + ' + F(M('1'), M('2 − x')) + ' is ' + M('0')
     + '. The paper sets this exactly because candidates reach for a common '
     'denominator and never notice.'),
    ('An expression that simplifies to a constant is a favourite',
     'When your answer has no ' + M('x') + ' in it, that is usually a sign you '
     'have done it right, not wrong.'),
    ('Check a doubtful answer with one number',
     'Put ' + M('x = 2') + ' into both the question and your answer. Thirty '
     'seconds, and it separates two options that differ by a sign.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='Simplify ' + F(M('x'), M('x + 1')) + ' · ' + F(M('x + 1'), M('x²'))
           + '.',
         opts=(F(M('1'), M('x')), M('x'), F(M('1'), M('x²')), F(M('x'), M('x + 1'))),
         key=0, a=F(M('1'), M('x')),
         check=('simp', '(x/(x+1))*((x+1)/x**2)', '1/x')),
    dict(kind='Y-1', mark='1,3',
         q='Simplify ' + F(M('2x + 6'), M('x² − 9')) + '.',
         opts=(F(M('2'), M('x − 3')), F(M('2'), M('x + 3')), M('2(x − 3)'),
               F(M('2x'), M('x − 3'))),
         key=0, a=F(M('2'), M('x − 3')),
         check=('simp', '(2*x+6)/(x**2-9)', '2/(x-3)')),
    dict(kind='Y-1', mark='2,2',
         q='Simplify ' + F(M('1'), M('x − 2')) + ' + ' + F(M('1'), M('2 − x'))
           + '.',
         opts=(M('0'), F(M('2'), M('x − 2')), F(M('2'), M('x² − 4')),
               F(M('1'), M('x − 2'))),
         key=0, a=M('0'),
         check=('simp', '1/(x-2)+1/(2-x)', '0')),
    dict(kind='Y-1', mark='2,2',
         q='Simplify ' + F(M('a² − b²'), M('a − b')) + ' − ' + M('(a + b)') + '.',
         opts=(M('0'), M('2b'), M('−2b'), M('a + b')),
         key=0, a=M('0'),
         check=('simp', '(a**2-b**2)/(a-b)-(a+b)', '0')),
    dict(kind='Y-2', mark='2,2',
         q='Each expression is to be evaluated at ' + M('x = 3')
           + '. Match it with its value.',
         left=(F(M('x² − 9'), M('x + 3')), F(M('1'), M('x')) + ' + ' + F(M('1'), M('x + 1')),
               F(M('x + 1'), M('x − 1')), F(M('x² + 1'), M('x'))),
         right=(M('2'), M('0'), F(M('10'), M('3')), F(M('7'), M('12'))),
         a='1–B, 2–D, 3–A, 4–C',
         checks=[('simp', '(3**2-9)/(3+3)', '0'),
                 ('simp', 'Rational(1,3)+Rational(1,4)', '7/12'),
                 ('simp', '(3+1)/(3-1)', '2'),
                 ('simp', '(3**2+1)/3', '10/3')]),
    dict(kind='O', mark='3,2',
         q='Consider ' + F(M('x + 2'), M('x − 2')) + ' − ' + F(M('x − 2'), M('x + 2'))
           + '.',
         parts=('Write it as a single fraction in its simplest form.',
                'Find its value when ' + M('x = 4') + '.'),
         a='a) ' + F(M('8x'), M('x² − 4')) + ' &nbsp; b) ' + F(M('8'), M('3')),
         checks=[('simp', '(x+2)/(x-2)-(x-2)/(x+2)', '8*x/(x**2-4)'),
                 ('simp', '8*4/(4**2-4)', '8/3')]),
])

MS['alg-10'] = dict(brief=[
    ('Inverse proportion means the product is constant',
     'If ' + M('y = k/x') + ' then ' + M('xy = k') + '. One pair of values gives '
     + M('k') + ', and ' + M('k') + ' answers every other part of the item. '
     'This is the whole method.'),
    ('The graph is two branches and never touches the axes',
     'The axes are asymptotes: ' + M('x = 0') + ' and ' + M('y = 0') + ' are the '
     'two values the curve cannot take. An item asking which point is <em>not</em> '
     'on the curve is testing ' + M('xy = k') + ' and nothing else.'),
    ('Negative ' + M('k') + ' puts the branches in the other two quadrants',
     'For ' + M('k > 0') + ' the curve lies in the first and third quadrants; for '
     + M('k < 0') + ' in the second and fourth. A point with one negative '
     'coordinate tells you the sign of ' + M('k') + ' before any arithmetic.'),
], items=[
    dict(kind='Y-1', mark='1,3',
         q='The point ' + M('(3, y)') + ' lies on ' + M('y = ') + F(M('12'), M('x'))
           + '. Find ' + M('y') + '.',
         opts=(M('4'), M('36'), M('9'), M('0,25')),
         key=0, a=M('4'),
         check=('simp', '12/3', '4')),
    dict(kind='Y-1', mark='1,3',
         q='The curve ' + M('y = k/x') + ' passes through ' + M('(2, 5)')
           + '. Find ' + M('k') + '.',
         opts=(M('10'), M('2,5'), M('7'), M('0,4')),
         key=0, a=M('10'),
         check=('simp', '2*5', '10')),
    dict(kind='Y-1', mark='2,2',
         q=M('y') + ' is inversely proportional to ' + M('x') + ', and '
           + M('y = 6') + ' when ' + M('x = 4') + '. Find ' + M('y') + ' when '
           + M('x = 3') + '.',
         opts=(M('8'), M('4,5'), M('2'), M('18')),
         key=0, a=M('8'),
         check=('simp', '(6*4)/3', '8')),
    dict(kind='Y-1', mark='2,2',
         q='Which point does <em>not</em> lie on ' + M('y = ') + F(M('18'), M('x'))
           + '?',
         opts=(M('(2, 9)'), M('(3, 6)'), M('(6, 3)'), M('(4, 5)')),
         key=3, a=M('(4, 5)') + ', since ' + F(M('18'), M('4')) + ' = ' + M('4,5'),
         check=('simp', '18/4', '9/2')),
    dict(kind='Y-2', mark='2,2',
         q='Each point lies on a curve ' + M('y = k/x') + '. Match the point with '
           'its ' + M('k') + '.',
         left=(M('(1, 6)'), M('(2, 2)'), M('(−3, 2)'), M('(5, 1)')),
         right=(M('k = 4'), M('k = 6'), M('k = 5'), M('k = −6')),
         a='1–B, 2–A, 3–D, 4–C',
         checks=[('simp', '1*6', '6'), ('simp', '2*2', '4'),
                 ('simp', '(-3)*2', '-6'), ('simp', '5*1', '5')]),
    dict(kind='O', mark='3,2',
         q='The time ' + M('t') + ' hours to finish a job is inversely '
           'proportional to the number of workers ' + M('w') + '. Six workers '
           'take four hours.',
         parts=('Find the constant of proportionality.',
                'Find how long eight workers take.'),
         a='a) ' + M('24') + ' &nbsp; b) ' + M('3') + ' hours',
         checks=[('simp', '6*4', '24'), ('simp', '24/8', '3')]),
])
