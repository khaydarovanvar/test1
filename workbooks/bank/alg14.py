# -*- coding: utf-8 -*-
"""Questions for topic 14 of Grade 8 algebra — standard form, fractions as decimals."""

from .common import F, M, rt, sq


def t(a, n):
    """a × 10^n."""
    return f'{a} × 10<sup>{n}</sup>'


def rec(whole, period):
    """A recurring decimal, the period in brackets."""
    return f'{whole}({period})'


Q_FOCUS = [
    dict(q='Write ' + M('45 000') + ' in standard form.', a=M(t('4.5', 4)),
         check=('simp', 'Rational(45,10)*10**4', '45000')),
    dict(q='Write ' + M('0.00032') + ' in standard form.', a=M(t('3.2', '−4')),
         check=('simp', 'Rational(32,10)*10**(-4)', 'Rational(32,100000)')),
    dict(q='Write ' + M(t('6.1', 3)) + ' as an ordinary number.', a=M('6100'),
         check=('simp', 'Rational(61,10)*10**3', '6100')),
    dict(q='Write ' + M(t(2, '−2')) + ' as a decimal.', a=M('0.02'),
         check=('simp', '2*10**(-2)', 'Rational(1,50)')),
    dict(q='Write ' + M(F(1, 4)) + ' as a decimal.', a=M('0.25'),
         check=('simp', 'Rational(1,4)', 'Rational(25,100)')),
    dict(q='Write ' + M(F(1, 3)) + ' as a decimal.', a=M('0.' + rec('', '3')),
         check=('simp', 'Rational(1,3)', 'Rational(1,3)')),
    dict(q='Write ' + M(F(3, 8)) + ' as a decimal.', a=M('0.375'),
         check=('simp', 'Rational(3,8)', 'Rational(375,1000)')),
    dict(q='Is ' + M('0.25') + ' a rational number?', a='Yes — it is ' + M(F(1, 4)),
         check=('simp', 'Rational(25,100)', 'Rational(1,4)')),
    dict(q='Write ' + M('0.7') + ' as a fraction.', a=M(F(7, 10)),
         check=('simp', 'Rational(7,10)', 'Rational(7,10)')),
    dict(q='Write ' + M(t(7, 5)) + ' as an ordinary number.', a=M('700 000'),
         check=('simp', '7*10**5', '700000')),
]

Q_PRACTICE = [
    dict(q='Work out ' + M('(' + t(2, 3) + ')(' + t(3, 4) + ')') + '.', a=M(t(6, 7)),
         check=('simp', '(2*10**3)*(3*10**4)', '6*10**7')),
    dict(q='Work out ' + M(F(t(8, 5), t(2, 2))) + '.', a=M(t(4, 3)),
         check=('simp', '(8*10**5)/(2*10**2)', '4*10**3')),
    dict(q='Write ' + M(F(1, 7)) + ' as a recurring decimal.',
         a=M('0.' + rec('', '142857')), check=('custom', 'one_seventh')),
    dict(q='Write ' + M('0.' + rec('', '3')) + ' as a fraction.', a=M(F(1, 3)),
         check=('simp', 'Rational(1,3)', 'Rational(1,3)')),
    dict(q='Write ' + M('0.' + rec('', '27')) + ' as a fraction.', a=M(F(3, 11)),
         check=('simp', 'Rational(27,99)', 'Rational(3,11)')),
    dict(q='Write ' + M(F(5, 16)) + ' as a decimal.', a=M('0.3125'),
         check=('simp', 'Rational(5,16)', 'Rational(3125,10000)')),
    dict(q='Work out ' + M('(' + t('1.5', '−3') + ')(' + t(4, 5) + ')') + '.',
         a=M(t(6, 2)),
         check=('simp', 'Rational(15,10)*10**(-3)*4*10**5', '6*10**2')),
    dict(q='Which of ' + M(F(1, 6)) + ' and ' + M(F(1, 8)) + ' gives a terminating decimal?',
         a=M(F(1, 8)) + ' — its denominator is ' + M(sq('2', 3)),
         check=('custom', 'which_terminates')),
    dict(q='Work out ' + M(t('2.5', 4) + ' + ' + t(3, 4)) + '.', a=M(t('5.5', 4)),
         check=('simp', 'Rational(25,10)*10**4+3*10**4', 'Rational(55,10)*10**4')),
    dict(q='Write ' + M('0.000 000 45') + ' in standard form.', a=M(t('4.5', '−7')),
         check=('simp', 'Rational(45,10)*10**(-7)', 'Rational(45,10**8)')),
]

Q_CHALLENGE = [
    dict(q='Write ' + M('0.1' + rec('', '6')) + ' as a fraction.', a=M(F(1, 6)),
         check=('custom', 'point_one_six')),
    dict(q='Work out ' + M(F(t(6, 8), t(3, '−2'))) + '.', a=M(t(2, 10)),
         check=('simp', '(6*10**8)/(3*10**(-2))', '2*10**10')),
    dict(q='Which of ' + M(F(1, 12)) + ', ' + M(F(1, 20)) + ', ' + M(F(1, 25))
           + ' terminate?',
         a=M(F(1, 20)) + ' and ' + M(F(1, 25)), check=('custom', 'terminating_set')),
    dict(q='Work out ' + M('0.' + rec('', '142857') + ' × 7') + '.', a=M('1'),
         check=('simp', 'Rational(1,7)*7', '1')),
    dict(q='Work out ' + M('(' + t(3, 5) + ')<sup>2</sup>') + '.', a=M(t(9, 10)),
         check=('simp', '(3*10**5)**2', '9*10**10')),
    dict(q='Write ' + M('0.' + rec('', '123')) + ' as a fraction in lowest terms.',
         a=M(F(41, 333)), check=('simp', 'Rational(123,999)', 'Rational(41,333)')),
    dict(q='Write ' + M(F(7, 40)) + ' as a decimal.', a=M('0.175'),
         check=('simp', 'Rational(7,40)', 'Rational(175,1000)')),
    dict(q='Light travels ' + M(t(3, 8)) + ' m/s. How far does it go in ' + M(t(2, 2))
           + ' seconds?', a=M(t(6, 10)) + ' m',
         check=('simp', '3*10**8*2*10**2', '6*10**10')),
    dict(q='Write ' + M('0.2' + rec('', '7')) + ' as a fraction in lowest terms.',
         a=M(F(5, 18)), check=('custom', 'point_two_seven')),
    dict(q='Work out ' + M('(' + t(4, '−3') + ')<sup>3</sup>') + ' in standard form.',
         a=M(t('6.4', '−8')),
         check=('simp', '(4*10**(-3))**3', 'Rational(64,10)*10**(-8)')),
]

Q_BEYOND = [
    dict(q='Prove that ' + M('0.' + rec('', '9') + ' = 1') + '.', a=M('1'),
         check=('custom', 'point_nine_recurring'),
         sol='Let x = 0.999… Then 10x = 9.999… and subtracting gives 9x = 9, so x = 1. '
             'The two symbols name the same number; there is no gap between them.'),
    dict(q='How many digits are in the repeating block of ' + M(F(1, 7)) + '?',
         a=M('6'), check=('custom', 'period_seven'),
         sol='The block is 142857. Its length is the smallest k with 10^k ≡ 1 (mod 7); '
             'here 10⁶ − 1 = 999999 = 7 · 142857, and no smaller power works.'),
    dict(q='Show that ' + M(F(1, 'n')) + ' terminates exactly when ' + M('n')
           + ' has no prime factor other than ' + M('2') + ' and ' + M('5') + '.',
         a='Because a terminating decimal is ' + M(F('k', sq(10, 'm'))),
         check=('custom', 'terminating_rule'),
         sol='A terminating decimal is k/10^m = k/(2^m 5^m). In lowest terms the '
             'denominator therefore divides a power of 10, so it has only 2s and 5s. '
             'Conversely 1/(2^a 5^b) can be multiplied top and bottom to reach a power '
             'of ten.'),
    dict(q='Find ' + M('0.' + rec('', '1') + ' + 0.' + rec('', '2') + ' + … + 0.'
                       + rec('', '9')) + '.', a=M('5'),
         check=('custom', 'sum_of_recurring'),
         sol='Each term is k/9, so the sum is (1+2+…+9)/9 = 45/9 = 5.'),
    dict(q='What is the 100th digit after the point in ' + M(F(1, 7)) + '?', a=M('8'),
         check=('custom', 'hundredth_digit'),
         sol='The block 142857 has length 6, and 100 = 6·16 + 4, so the 100th digit is '
             'the 4th of the block, which is 8.'),
    dict(q='Work out ' + M(F('(' + t('1.2', 3) + ')(' + t(5, '−7') + ')', t(3, '−2')))
           + ' in standard form.', a=M(t(2, '−2')),
         check=('simp', '(Rational(12,10)*10**3*5*10**(-7))/(3*10**(-2))', '2*10**(-2)'),
         sol='Numbers: 1.2 · 5 ÷ 3 = 2. Powers: 10³ · 10⁻⁷ ÷ 10⁻² = 10^(3−7+2) = 10⁻².'),
    dict(q='Explain why ' + M(rt(2)) + ' cannot be written as a terminating or '
           'recurring decimal.',
         a='Because every such decimal is a fraction.', check=None,
         sol='A terminating or recurring decimal can always be turned into a fraction of '
             'whole numbers by the 10x subtraction trick. But √2 is irrational, so it is '
             'not such a fraction — hence its decimal never terminates and never repeats.'),
    dict(q='Is ' + M('0.101001000100001…') + ' — one more zero each time — rational?',
         a='No.', check=None,
         sol='A rational number has a repeating block of fixed length. Here the gaps '
             'between the 1s grow without limit, so no fixed block can repeat for ever. '
             'The number is irrational.'),
    dict(q='Use standard form to decide which is larger, ' + M(sq(2, 100)) + ' or '
           + M(sq(10, 30)) + '.', a=M(sq(2, 100)) + ' ≈ ' + M(t('1.27', 30)),
         check=('bool', 'Integer(2)**100 > Integer(10)**30'),
         sol='2¹⁰ = 1024 ≈ 1.024 × 10³, so 2¹⁰⁰ = (2¹⁰)¹⁰ ≈ 1.024¹⁰ × 10³⁰ ≈ 1.27 × 10³⁰, '
             'which is larger than 10³⁰.'),
    dict(q='How many digits has ' + M(sq(2, 64)) + '?', a=M('20'),
         check=('custom', 'digits_two_64'),
         sol='2⁶⁴ = 18 446 744 073 709 551 616 ≈ 1.84 × 10¹⁹. A number between 10¹⁹ and '
             '10²⁰ has 20 digits.'),
    dict(q='How many digits are in the repeating block of ' + M(F(1, 13)) + '?', a=M('6'),
         check=('custom', 'period_thirteen'),
         sol='1/13 = 0.076923076923…, block 076923, length 6. '
             'As with 7, the length is the smallest k with 10^k ≡ 1 (mod 13).'),
    dict(q='Write ' + M('0.' + rec('', 'abc')) + ' as a fraction, where ' + M('a, b, c')
           + ' are digits.', a=M(F('100a + 10b + c', 999)),
         check=('custom', 'abc_recurring'),
         sol='Let x = 0.abcabc… Then 1000x − x = abc (the three-digit number), '
             'so x = (100a + 10b + c)/999.'),
    dict(q='Write ' + M(t(2, 5) + ' + ' + t(3, 4)) + ' in standard form.',
         a=M(t('2.3', 5)),
         check=('simp', '2*10**5+3*10**4', 'Rational(23,10)*10**5'),
         sol='Make the powers match: 3 × 10⁴ = 0.3 × 10⁵, so the sum is 2.3 × 10⁵.'),
    dict(q='Put ' + M(t(3, '−5')) + ', ' + M(t(2, '−4')) + ' and ' + M(t(4, '−6'))
           + ' in increasing order.',
         a=M(t(4, '−6') + ' < ' + t(3, '−5') + ' < ' + t(2, '−4')),
         check=('custom', 'order_small_numbers'),
         sol='Compare the powers of ten first: 10⁻⁶ < 10⁻⁵ < 10⁻⁴. Only when two powers '
             'agree does the leading number decide.'),
    dict(q='A mole is ' + M(t('6.02', 23)) + ' particles. How many hydrogen atoms are in '
           + M('0.5') + ' g of hydrogen, at ' + M('1') + ' g per mole?',
         a=M(t('3.01', 23)),
         check=('simp', 'Rational(602,100)*10**23*Rational(1,2)',
                'Rational(301,100)*10**23'),
         sol='0.5 mole, so half of Avogadro\'s number: 3.01 × 10²³.'),
]

TOPIC = dict(
    key='alg-14', number=14, lessons='34–35',
    unit='Unit 2 · Roots and rational exponents',
    title='Standard form, and fractions as decimals',
    subtitle='Two Cambridge Stage 9 topics carried by the national plan\'s practical '
             'lessons: very large and very small numbers, and when a fraction repeats.',
    uz='Algebra 8, Chapter I practical, pp. 62–67',
    cam='Cambridge Stage 9 · 1.2, 8.1',
    keywords=['standard form', 'power of ten', 'significant figures',
              'terminating decimal', 'recurring decimal', 'period', 'rational number',
              'irrational number', 'convert'],
    remember=[
        'Standard form is <span class="m">a × 10<sup>n</sup></span> with '
        '<span class="m">1 ≤ a &lt; 10</span> — exactly one digit before the point.',
        'Multiplying: multiply the numbers, add the powers. Dividing: divide and subtract.',
        'Adding needs the <b>same</b> power of ten first.',
        'A fraction in lowest terms terminates exactly when its denominator is made only '
        'of <span class="m">2</span>s and <span class="m">5</span>s.',
        'To turn a recurring decimal into a fraction, multiply by '
        '<span class="m">10<sup>k</sup></span> for a block of '
        '<span class="m">k</span> digits and subtract.'],
    sections=[('Focus', Q_FOCUS), ('Practice', Q_PRACTICE),
              ('Challenge', Q_CHALLENGE), ('Beyond', Q_BEYOND)])
