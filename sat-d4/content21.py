# -*- coding: utf-8 -*-
"""SAT Math 2.1 — Equivalent Expressions."""
import algebra as A
import plot as P
from svgbase import GREEN, INK, RED


def ex(q, sol, fig=None):
    return {'q': q, 'sol': sol, 'fig': fig}


MINUS_RULE = A.rules_panel(
    (('−(x² − 4x + 6)', '= −x² + 4x − 6'),
     ('every sign inside flips', 'all three, not just the first'),),
    title='the minus belongs to every term in the bracket', w=330)

LESSON = {
    'code': '2.1',
    'title': 'Equivalent Expressions',
    'sections': [
        {
            'title': 'Multiplying and collecting',
            'fact': 'multiply every term by every term  |  then collect only like terms',
            'text': 'Like terms share the same variable to the same power: 3x² and 5x² '
                    'combine, 3x² and 5x do not. The area model keeps every product in '
                    'view and is worth drawing whenever a minus sign is involved.',
            'figs': [A.area_model(('x', '+ 2'), ('x', '+ 3'),
                                  (('x²', '2x'), ('3x', '6')),
                                  '(x + 2)(x + 3) = x² + 5x + 6')],
            'caption': 'The rectangle is (x + 2) wide and (x + 3) tall, so its area is the '
                       'product. Each piece is one of the four multiplications, and the two '
                       'green pieces are the like terms that collect into 5x.',
            'examples': [
                ex('Expand (x + 2)(x + 3).',
                   ['x·x + 3x + 2x + 6.', '= **x² + 5x + 6**.'],
                   A.area_model(('x', '+ 2'), ('x', '+ 3'),
                                (('x²', '2x'), ('3x', '6')), 'x² + 5x + 6')),
                ex('Expand (2x − 5)(x + 4).',
                   ['2x² + 8x − 5x − 20.', '= **2x² + 3x − 20**.'],
                   A.area_model(('2x', '− 5'), ('x', '+ 4'),
                                (('2x²', '−5x'), ('8x', '−20')),
                                '2x² + 3x − 20')),
                ex('Simplify (3x² + 2x − 1) − (x² − 4x + 6).',
                   ['Distribute the minus to *every* term: 3x² + 2x − 1 − '
                    'x² + 4x − 6.', '= **2x² + 6x − 7**.'],
                   MINUS_RULE),
            ],
        },
        {
            'title': 'Common factor first, always',
            'fact': 'take out the greatest common factor before anything else',
            'text': 'Pulling out the GCF turns an awkward expression into a familiar one and '
                    'is the step most often skipped. Check the numbers and every variable: the '
                    'GCF of 6x³ and 9x² is 3x², not 3.',
            'figs': [A.gcf_box(('6x³', '9x²'), '3x²', ('2x', '+ 3'))],
            'caption': 'Both terms carry three lots of x², so 3x² comes out in front '
                       'and what is left goes inside the bracket. Take the numbers *and* the '
                       'letters — 3 alone would not be greatest.',
            'examples': [
                ex('Factor 6x³ + 9x² completely.',
                   ['GCF is 3x².', '= **3x²(2x + 3)**.'],
                   A.gcf_box(('6x³', '9x²'), '3x²', ('2x', '+ 3'))),
                ex('Factor 4x² − 36 completely.',
                   ['GCF 4 first: 4(x² − 9), and x² − 9 is a difference of '
                    'squares.',
                    '= **4(x − 3)(x + 3)**. Stopping at 4(x² − 9) is not '
                    '*completely* factored.'],
                   A.flow(('4x² − 36', '4(x² − 9)',
                           '4(x − 3)(x + 3)'),
                          note='the GCF first, then the pattern underneath it')),
                ex('Factor 2x³ − 8x.',
                   ['GCF 2x: 2x(x² − 4).', '= **2x(x − 2)(x + 2)**.'],
                   A.flow(('2x³ − 8x', '2x(x² − 4)',
                           '2x(x − 2)(x + 2)'))),
            ],
        },
        {
            'title': 'Difference of squares and perfect squares',
            'fact': 'a² − b² = (a − b)(a + b)  |  a² ± 2ab + '
                    'b² = (a ± b)²',
            'text': 'These two patterns appear constantly, often disguised. A sum of squares, '
                    'x² + 9, does *not* factor over the real numbers — recognising '
                    'that saves time on a question designed to waste it.',
            'figs': [A.diff_squares('3x', '5'), A.perfect_square('x', '5')],
            'caption': 'Left: cut a small square out of a big one and the L-shape left over '
                       'rearranges into the rectangle (a − b)(a + b). Right: a perfect '
                       'square has two identical middle pieces, which is where the 2ab comes '
                       'from.',
            'examples': [
                ex('Factor 9x² − 25.',
                   ['This is (3x)² − 5².', '= **(3x − 5)(3x + 5)**.'],
                   A.diff_squares('3x', '5')),
                ex('Factor x² + 10x + 25.',
                   ['25 = 5² and 10x = 2(x)(5).', '= **(x + 5)²**.'],
                   A.perfect_square('x', '5')),
                ex('Factor x⁴ − 16.',
                   ['(x²)² − 4² = (x² − 4)(x² + 4), and the '
                    'first bracket factors again.',
                    '= **(x − 2)(x + 2)(x² + 4)**. The sum of squares stops here.'],
                   A.flow(('x⁴ − 16', '(x² − 4)(x² + 4)',
                           '(x − 2)(x + 2)(x² + 4)'),
                          note='x² + 4 is a sum of squares — it does not factor')),
            ],
        },
        {
            'title': 'Factoring trinomials',
            'fact': 'x² + bx + c: find two numbers that multiply to c and add to b',
            'text': 'When the leading coefficient is not 1, multiply a by c, split the middle '
                    'term using two numbers that multiply to ac and add to b, then factor by '
                    'grouping. Writing out the factor pairs of ac beats guessing.',
            'figs': [A.trinomial_split(-7, 12, (-3, -4),
                                       ((-1, -12), (-2, -6), (-3, -4)))],
            'caption': 'List the factor pairs and test the sum of each. Only one pair does '
                       'both jobs, and that pair is the pair of brackets.',
            'examples': [
                ex('Factor x² − 7x + 12.',
                   ['Two numbers multiplying to 12 and adding to −7: −3 and −4.',
                    '= **(x − 3)(x − 4)**.'],
                   A.trinomial_split(-7, 12, (-3, -4), ((-1, -12), (-2, -6), (-3, -4)))),
                ex('Factor x² + 2x − 15.',
                   ['Multiply to −15, add to 2: 5 and −3.',
                    '= **(x + 5)(x − 3)**.'],
                   A.trinomial_split(2, -15, (5, -3), ((-1, 15), (1, -15), (3, -5), (5, -3)))),
                ex('Factor 2x² + 7x + 3.',
                   ['ac = 6; two numbers multiplying to 6 and adding to 7 are 6 and 1.',
                    '2x² + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = **(2x + 1)(x + 3)**.'],
                   A.flow(('2x² + 7x + 3', 'split: 2x² + 6x + x + 3',
                           '2x(x + 3) + 1(x + 3)', '(2x + 1)(x + 3)'),
                          note='ac = 6, and 6 + 1 = 7')),
            ],
        },
        {
            'title': 'Exponent rules',
            'fact': 'xᵐ·xⁿ = xᵐ⁺ⁿ  |  xᵐ/xⁿ = '
                    'xᵐ⁻ⁿ  |  (xᵐ)ⁿ = xᵐⁿ  |  '
                    'x⁻ⁿ = 1/xⁿ  |  x⁰ = 1',
            'text': 'Add exponents when multiplying, subtract when dividing, multiply when '
                    'raising a power to a power. A negative exponent is a reciprocal, not a '
                    'negative number: 2⁻³ = 1/8, not −8.',
            'figs': [A.rules_panel(
                (('xᵐ·xⁿ = xᵐ⁺ⁿ',
                  '(3x²y)(4x³y⁵) = 12x⁵y⁶'),
                 ('xᵐ/xⁿ = xᵐ⁻ⁿ',
                  '12⁵/12³ = 12² = 144'),
                 ('(xᵐ)ⁿ = xᵐⁿ', '(2x³)⁴ = 16x¹²'),
                 ('x⁻ⁿ = 1/xⁿ', '5⁻² = 1/25 = 0.04'),
                 ('x⁰ = 1', '7⁰ = 1')),
                title='five rules, and one worked instance of each')],
            'caption': 'Read each rule with its example beside it. The fourth is the one that '
                       'costs marks: a negative exponent flips the base, it never makes the '
                       'value negative.',
            'examples': [
                ex('Simplify (3x²y)(4x³y⁵).',
                   ['Multiply coefficients, add exponents.',
                    '= **12x⁵y⁶**.'],
                   A.rules_panel((('coefficients: 3 × 4', '= 12'),
                                  ('x: 2 + 3', '= x⁵'),
                                  ('y: 1 + 5', '= y⁶')), w=300)),
                ex('Simplify (2x³)⁴.',
                   ['Raise both parts to the fourth: 2⁴ = 16 and x¹².',
                    '= **16x¹²**.'],
                   A.rules_panel((('the 2 is inside the bracket too', '2⁴ = 16'),
                                  ('exponents multiply', '(x³)⁴ = x¹²')),
                                 w=300)),
                ex('Write 5⁻² as a fraction.',
                   ['**1/25**. A negative exponent flips the base; it never makes the value '
                    'negative.'],
                   A.rules_panel((('5⁻²', '= 1/5² = 1/25 = 0.04'),
                                  ('not −25', 'the sign of the base never changes')),
                                 w=300)),
            ],
        },
        {
            'title': 'Fractional exponents and radicals',
            'fact': 'x¹ᐟⁿ = ⁿ√x  |  xᵐᐟⁿ = '
                    'ⁿ√(xᵐ)',
            'text': 'The denominator of the exponent is the root; the numerator is the power. '
                    'This conversion is the whole skill — once an expression is written '
                    'with exponents, the ordinary exponent rules apply and radicals stop being '
                    'special.',
            'figs': [A.radical_power(8, 2, 3)],
            'caption': 'Denominator 3 means a cube root, numerator 2 means squared. Take the '
                       'root first and you are squaring 2 instead of cube-rooting 64.',
            'examples': [
                ex('Write √x as a power of x.',
                   ['**x¹ᐟ²**.'],
                   A.rules_panel((('√x', '= x^(1/2)'),
                                  ('³√x', '= x^(1/3)'),
                                  ('ⁿ√x', '= x^(1/n)')), w=290)),
                ex('Simplify x¹ᐟ² · x¹ᐟ³.',
                   ['Add the exponents: 1/2 + 1/3 = 5/6.',
                    '= **x⁵ᐟ⁶**.'],
                   A.rules_panel((('same base → add the exponents', '1/2 + 1/3 = 5/6'),
                                  ('answer', 'x^(5/6)')), w=300)),
                ex('Evaluate 8²ᐟ³.',
                   ['Cube root first, then square: ³√8 = 2, and 2² = **4**. '
                    'Taking the root first keeps the numbers small.'],
                   A.radical_power(8, 2, 3)),
            ],
        },
    ],
    'desmos_intro': 'The SAT gives you Desmos on every maths question. For this topic it is '
                    '**a checker, not a solver**. Desmos will not factor for you, but graphing '
                    'your answer against the original shows instantly whether they are the '
                    'same expression.',
    'desmos': [
        ('Expand (x + 2)(x + 3) and state the coefficient of x.', '(x+2)(x+3)',
         'Desmos will not expand symbolically; graph both forms to confirm they agree.', '5'),
        ('What is the value of 8²ᐟ³?', '8^(2/3)', 'Use the caret for exponents.',
         '4'),
        ('What is the value of 5⁻² as a decimal?', '5^(-2)',
         'A negative exponent gives a reciprocal.', '0.04'),
        ('Simplify 12⁵/12³.', '12^5/12^3', 'Subtracting exponents gives 12².',
         '144'),
        ('Evaluate (2x³)⁴ at x = 1.', '(2*1^3)^4',
         'Checks the coefficient 2⁴ = 16.', '16'),
        ('At x = 5, what is the value of x² − 7x + 12?', '5^2-7*5+12',
         'Substitute to test a factorisation.', '2'),
        ('At x = 3, does (x − 3)(x − 4) equal zero?', '(3-3)*(3-4)',
         'A factor of zero makes the product zero.', '0'),
        ('Evaluate 9x² − 25 at x = 2.', '9*2^2-25',
         'Compare with (3x − 5)(3x + 5) at x = 2.', '11'),
        ('What is the value of x¹ᐟ² · x¹ᐟ³ at x = 64?',
         '64^(1/2)*64^(1/3)', 'Equals 64⁵ᐟ⁶.', '32'),
        ('Evaluate 2x³ − 8x at x = 2.', '2*2^3-8*2',
         'x = 2 is a zero, which confirms (x − 2) is a factor.', '0'),
    ],
    'part2_intro': 'Twelve questions, hardest last. Write your answer in the box — there '
                   'are no options to choose from, so show the working that gets you there. '
                   'Read the word **completely** when it appears: more than one option may be '
                   'equal in value, and only one is fully factored.',
    'part2': [
        ('P1', 'Hard', 'Write an equivalent expression for (2x − 5)(x + 4).',
         '2x² + 3x − 20',
         ['8x − 5x = +3x.',
          '= **2x² + 3x − 20**. A common wrong answer multiplies only the first and '
          'last terms; C reverses the sign of the middle term.'],
         A.area_model(('2x', '− 5'), ('x', '+ 4'),
                      (('2x²', '−5x'), ('8x', '−20')),
                      '2x² + 3x − 20')),
        ('P2', 'Hard',
         'Write an equivalent expression for (3x² + 2x − 1) − (x² − '
         '4x + 6).', '2x² + 6x − 7',
         ['The minus sign applies to all three terms of the second bracket.',
          '= **2x² + 6x − 7**. Two common wrong answers subtract only the first term.'],
         MINUS_RULE),
        ('P3', 'Hard', 'Factor completely: 4x² − 36.',
         '4(x − 3)(x + 3)',
         ['Take the GCF 4 first, then the difference of squares.',
          '= **4(x − 3)(x + 3)**. Two common wrong answers equal in value but not '
          '*completely* factored — read the word ‘complete’ in the stem.'],
         A.flow(('4x² − 36', '4(x² − 9)', '4(x − 3)(x + 3)'))),
        ('P4', 'Hard', 'What is the complete factorisation of 2x² + 7x + 3?',
         '(2x + 1)(x + 3)',
         ['ac = 6, and 6 + 1 = 7, so split the middle term.',
          '2x(x + 3) + 1(x + 3) = **(2x + 1)(x + 3)**. Expanding that answer gives '
          '2x² + 7x + 3.'],
         A.flow(('2x² + 7x + 3', '2x² + 6x + x + 3', '2x(x + 3) + 1(x + 3)',
                 '(2x + 1)(x + 3)'))),
        ('P5', 'Hard', 'Write an equivalent expression for (2x³y²)³.',
         '8x⁹y⁶',
         ['Every factor is cubed: 2³ = 8, and the exponents multiply by 3.',
          '= **8x⁹y⁶**. A common wrong answer multiplies the coefficient by 3 instead '
          'of cubing it.'],
         A.rules_panel((('the coefficient is cubed too', '2³ = 8'),
                        ('x: 3 × 3', 'x⁹'), ('y: 2 × 3', 'y⁶')), w=300)),
        ('P6', 'Hard', 'What is the value of 8²ᐟ³?', '4',
         ['The denominator is the root and the numerator is the power.',
          '(³√8)² = 2² = **4**.'],
         A.radical_power(8, 2, 3)),
        ('P7', 'Very hard',
         'Write an equivalent expression for x⁴ − 16, factored completely over the '
         'real numbers.', '(x − 2)(x + 2)(x² + 4)',
         ['x⁴ − 16 = (x² − 4)(x² + 4), and x² − 4 factors '
          'again.',
          '= **(x − 2)(x + 2)(x² + 4)**. A sum of squares does not factor over the '
          'reals, so that answer is as far as it goes; A stops one step early.'],
         A.flow(('x⁴ − 16', '(x² − 4)(x² + 4)',
                 '(x − 2)(x + 2)(x² + 4)'))),
        ('P8', 'Very hard',
         'If x⁻² = 1/49 and x > 0, what is the value of x?', '7',
         ['x⁻² = 1/x², so x² = 49.', 'With x > 0, x = **7**.'],
         A.rules_panel((('x⁻² = 1/49', 'so x² = 49'),
                        ('x > 0', 'x = 7, not −7')), w=300)),
        ('P9', 'Very hard',
         'Write an equivalent expression for (x¹ᐟ²)(x¹ᐟ³) for '
         'x > 0.', 'x⁵ᐟ⁶',
         ['Multiplying powers of the same base adds the exponents.',
          '1/2 + 1/3 = 5/6, so the answer is **x⁵ᐟ⁶**. A common wrong answer '
          'multiplies the exponents.'],
         A.rules_panel((('same base → add', '1/2 + 1/3 = 5/6'),
                        ('multiplying them gives 1/6', 'which is a different expression')),
                       w=310)),
        ('P10', 'Very hard',
         'The expression (6x⁴y³)/(2x²y⁵) is equivalent to which of the '
         'following, for x and y nonzero?', '3x²/y²',
         ['Divide the coefficients and subtract the exponents: 6/2 = 3, '
          'x⁴⁻² = x², y³⁻⁵ = y⁻².',
          '= **3x²/y²**. A common wrong answer leaves the negative exponent in the '
          'numerator as a positive one.'],
         A.rules_panel((('6 ÷ 2', '= 3'), ('x: 4 − 2', '= x²'),
                        ('y: 3 − 5', '= y⁻² = 1/y²')), w=300)),
        ('P11', 'Very hard',
         'For what value of k is x² + kx + 36 a perfect square trinomial, given k > 0?',
         '12',
         ['A perfect square (x + a)² needs a² = 36, so a = 6, and the middle term '
          'is 2a.', 'k = 2(6) = **12**.'],
         A.perfect_square('x', '6')),
        ('P12', 'Very hard',
         'The expression 3x² − 12 can be written as 3(x − a)(x + a) for a '
         'positive constant a. What is the value of a?', '2',
         ['3x² − 12 = 3(x² − 4) = 3(x − 2)(x + 2).',
          'So a = **2**. A common wrong answer takes a to be the 4 inside the bracket rather '
          'than its square root.'],
         A.flow(('3x² − 12', '3(x² − 4)', '3(x − 2)(x + 2)'))),
    ],
    'habit': 'Take the common factor out first, every single time. Half the ‘hard’ '
             'questions in this topic become one-liners once the GCF is gone.',
}
