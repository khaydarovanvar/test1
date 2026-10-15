# -*- coding: utf-8 -*-
"""The methods briefing that stands in front of each Beyond section.

Beyond questions need an idea, not a procedure, and the ideas repeat: a square
completed inside a quartic, a sum that telescopes, a difference written as a sum
of squares. Each topic gets a short page of them, with the smallest worked line
that shows the move. The same material prints on its own as a methods booklet.
"""

from .common import F, M, rt, sq


def p(base, exp):
    return f'{base}<sup>{exp}</sup>'


def h(n, d):
    return F(n, d)


X12 = p('x', h(1, 2))

NOTES = {
 'alg-01': [
  ('Add and subtract the same thing',
   'A quartic with no obvious factors often hides a difference of two squares. '
   'Add the term that completes a square, then take it away again: '
   + M(p('x', 4) + ' + 4 = ' + p('x', 4) + ' + 4' + sq('x') + ' + 4 − 4' + sq('x')
       + ' = (' + sq('x') + ' + 2)<sup>2</sup> − (2x)<sup>2</sup>') + '.'),
  ('Symmetric sums',
   'When only ' + M('s = x + y') + ' and ' + M('p = xy') + ' are known, every '
   'symmetric expression follows: ' + M(sq('x') + ' + ' + sq('y') + ' = ' + sq('s') + ' − 2p')
   + ' and ' + M(p('x', 3) + ' + ' + p('y', 3) + ' = ' + p('s', 3) + ' − 3ps') + '.'),
  ('Factorise to solve in whole numbers',
   'An equation in two unknowns with a product term rearranges into a product '
   'equal to a constant. Then list the factor pairs: '
   + M('xy − 2x + 3y = 11') + ' becomes ' + M('(x + 3)(y − 2) = 5') + '.'),
  ('Three consecutive integers',
   M(p('n', 3) + ' − n = (n − 1)n(n + 1)') + '. Among any three consecutive numbers '
   'one is a multiple of 3 and at least one is even, so the product is a multiple '
   'of 6 — a divisibility proof with no induction.'),
  ('When the sum is zero',
   M('a + b + c = 0') + ' is never just a condition; it is a factor. From '
   + M(p('a', 3) + ' + ' + p('b', 3) + ' + ' + p('c', 3) + ' − 3abc = (a + b + c)(…)')
   + ', the whole left side vanishes at once.'),
 ],
 'alg-02': [
  ('Divide before you judge',
   'To ask when a fraction of whole numbers is an integer, split off the whole part '
   'first: ' + M(F('n + 3', 'n − 1') + ' = 1 + ' + F(4, 'n − 1')) + '. '
   'Now the question is only which numbers divide 4.'),
  ('Every denominator counts',
   'In a stacked fraction the inner denominators are forbidden values too. '
   + M(F(1, '1 + ' + F(1, 'x'))) + ' rules out both ' + M('x = 0') + ' and '
   + M('x = −1') + ', though only one is visible after simplifying.'),
  ('The square that proves an inequality',
   M('x + ' + F(1, 'x') + ' − 2 = ' + F('(x − 1)<sup>2</sup>', 'x')) + '. '
   'Writing a difference over a common denominator usually exposes a square, and a '
   'square settles the sign.'),
  ('Egyptian equations',
   M(F(1, 'a') + ' + ' + F(1, 'b') + ' = ' + F(1, 'n')) + ' clears to '
   + M('(a − n)(b − n) = ' + sq('n')) + '. Counting the factor pairs of '
   + M(sq('n')) + ' counts the solutions.'),
  ('A denominator that never vanishes',
   'A quadratic denominator is safe exactly when its discriminant is negative: '
   + M(sq('x') + ' + x + 1 = (x + ' + h(1, 2) + ')<sup>2</sup> + ' + h(3, 4))
   + ', never zero, so the fraction is defined everywhere.'),
 ],
 'alg-03': [
  ('Know the standard factorisations',
   M(sq('a') + ' − ' + sq('b')) + ', ' + M(p('a', 3) + ' ± ' + p('b', 3)) + ', '
   + M(p('x', 4) + ' + ' + sq('x') + ' + 1 = (' + sq('x') + ' + x + 1)(' + sq('x')
       + ' − x + 1)') + ' and ' + M(p('x', 4) + ' + 4') + '. Most "impossible" '
   'cancellations are one of these in disguise.'),
  ('A reversed bracket costs a sign',
   M('(b − a)<sup>n</sup> = (−1)<sup>n</sup>(a − b)<sup>n</sup>') + '. '
   'An even power hides the swap; an odd one leaves a minus behind.'),
  ('Cancelling narrows the domain',
   M(F(sq('x') + ' − 4', 'x − 2')) + ' and ' + M('x + 2') + ' agree everywhere except '
   'at ' + M('x = 2') + ', where the first is undefined. Say so in the answer.'),
  ('The difference quotient',
   M(F('(x + h)<sup>2</sup> − ' + sq('x'), 'h') + ' = 2x + h') + '. '
   'The numerator is built to lose its constant term so the ' + M('h') + ' cancels — '
   'the first step of calculus, four years early.'),
  ('Exact division',
   M(F(sq('x') + ' + ax + b', 'x + 2')) + ' divides exactly only if ' + M('x = −2')
   + ' makes the numerator zero. Substituting the root is faster than dividing.'),
 ],
 'alg-04': [
  ('Build the LCD from the factors',
   'Factorise every denominator, then take each distinct factor to its highest '
   'power. Multiplying the denominators together always works but often gives '
   'far more than is needed.'),
  ('The ' + M(p('x', 'n') + ' − 1') + ' family',
   M(p('x', 2) + ' − 1 = (x − 1)(x + 1)') + ', '
   + M(p('x', 3) + ' − 1 = (x − 1)(' + sq('x') + ' + x + 1)') + ', '
   + M(p('x', 6) + ' − 1 = (' + p('x', 3) + ' − 1)(' + p('x', 3) + ' + 1)') + '. '
   'In general ' + M('gcd(' + p('x', 'n') + ' − 1, ' + p('x', 'm') + ' − 1) = '
                     + p('x', 'gcd(n,m)') + ' − 1') + '.'),
  ('Reversed brackets again',
   'Before declaring two denominators different, try multiplying one by '
   + M('−1') + '. ' + M('y − x') + ' and ' + M('x − y') + ' are the same factor '
   'wearing a sign.'),
  ('Divisor arguments',
   'Questions asking for which integers a fraction is whole are divisor questions. '
   'Split off the whole part, then list the divisors of what is left.'),
  ('Lowest common multiple of numbers and letters',
   'Numbers by LCM, letters by highest power — the same rule applied twice. '
   + M('LCD(' + F(2, '3' + sq('a') + 'b') + ', ' + F(5, '6a' + p('b', 3)) + ') = 6'
       + sq('a') + p('b', 3)) + '.'),
 ],
 'alg-05': [
  ('Telescoping',
   M(F(1, 'k(k + 1)') + ' = ' + F(1, 'k') + ' − ' + F(1, 'k + 1')) + ' and '
   + M(F(1, 'n(n + 2)') + ' = ' + h(1, 2) + '(' + F(1, 'n') + ' − ' + F(1, 'n + 2') + ')')
   + '. Split, then watch the middle terms cancel in pairs.'),
  ('Symmetric three-variable sums',
   'Sums over ' + M('(a − b)(a − c)') + ' and its cyclic partners share the common '
   'denominator ' + M('(a − b)(b − c)(a − c)') + '. The numerators collapse: the '
   'constant version gives 0, the ' + M(sq('a')) + ' version gives 1.'),
  ('A quadratic agreeing at three points',
   'If an expression is a quadratic in ' + M('x') + ' and equals 1 at three '
   'different values, it is the constant 1. That proves the Lagrange identity '
   'without expanding anything.'),
  ('Turn a condition into a factorisation',
   'From ' + M(F(1, 'a') + ' + ' + F(1, 'b') + ' + ' + F(1, 'c') + ' = ' + F(1, 'a + b + c'))
   + ', clearing denominators and collecting gives ' + M('(a + b)(b + c)(c + a) = 0')
   + ' — so two of the three are opposites.'),
  ('The ' + M('x + ' + F(1, 'x')) + ' ladder',
   'Squaring gives ' + M(sq('x') + ' + ' + F(1, sq('x'))) + ', cubing gives the '
   'cubes, and multiplying two rungs climbs higher: '
   + M('(' + sq('x') + ' + ' + F(1, sq('x')) + ')(' + p('x', 3) + ' + ' + F(1, p('x', 3))
       + ') = ' + p('x', 5) + ' + ' + F(1, p('x', 5)) + ' + x + ' + F(1, 'x')) + '.'),
 ],
 'alg-06': [
  ('The four costly errors',
   'Cancelling a term instead of a factor; losing the sign on a reversed bracket; '
   'forgetting the bracket when subtracting a numerator; keeping a root that makes '
   'a denominator zero.'),
  ('Test a doubtful step with one number',
   'Put ' + M('x = 2') + ' into both sides. A wrong cancellation shows itself at '
   'once, and it costs five seconds.'),
  ('Reject roots that kill a denominator',
   'Clearing fractions can invent solutions. Every candidate must be checked '
   'against the original denominators before it is written down.'),
  ('Telescoping sums',
   'Splitting ' + M(F(1, 'k(k + 1)')) + ' turns a long sum into two surviving terms. '
   'Recognise the shape: a product of two consecutive factors below the line.'),
  ('State the permissible values',
   'They are part of the answer, not a footnote. An expression that simplifies to '
   + M('1') + ' still carries the values it was never defined at.'),
 ],
 'alg-07': [
  ('Factorise, then cancel across',
   'Multiplication lets a factor from one numerator cancel a factor of the other '
   'denominator. Multiplying out first only creates work to undo.'),
  ('Telescoping products',
   M(F('x', 'x + 1') + ' · ' + F('x + 1', 'x + 2') + ' · ' + F('x + 2', 'x + 3')
       + ' = ' + F('x', 'x + 3')) + '. Each numerator meets the previous denominator.'),
  ('A power reaches every factor',
   M('(' + F('2a', 'b') + ')<sup>3</sup> = ' + F('8' + p('a', 3), p('b', 3)))
   + ' — the 2 is cubed too. The commonest slip in this topic.'),
  ('Only the ratio matters',
   'Given ' + M(F('x', 'y') + ' = ' + h(2, 3)) + ', put ' + M('x = 2k') + ' and '
   + M('y = 3k') + '. Every ' + M('k') + ' cancels, and the answer is a number.'),
  ('Dividing and componendo',
   M(F('a', 'b') + ' ÷ ' + F('c', 'd') + ' = ' + F('ad', 'bc')) + '; and adding 1 to '
   'both sides of a proportion gives ' + M(F('a + b', 'b') + ' = ' + F('c + d', 'd')) + '.'),
 ],
 'alg-08': [
  ('A compound fraction is a division',
   'Tidy the top into one fraction, tidy the bottom into one fraction, then '
   'multiply by the reciprocal. Never cancel across the main bar before that.'),
  ('Continued fractions build outwards',
   M('1 + ' + F(1, '1 + ' + F(1, '1 + ' + F(1, 'x')))) + ' is worked from the '
   'innermost ' + M('1 + ' + F(1, 'x')) + ' outwards. The coefficients that appear '
   'are Fibonacci numbers.'),
  ('Use the condition, do not fight it',
   'With ' + M('a + b + c = 0') + ', substitute ' + M('c = −(a + b)') + ' or square '
   'the condition to get ' + M(sq('a') + ' + ' + sq('b') + ' + ' + sq('c')
                               + ' = −2(ab + bc + ca)') + '.'),
  ('The S · T trick',
   'For sums with squared denominators, multiply the plain sum by '
   + M('T = ' + F(1, 'b − c') + ' + ' + F(1, 'c − a') + ' + ' + F(1, 'a − b'))
   + '. The cross terms cancel and the squared sum appears.'),
  ('Check the long chain at a value',
   'Before writing the final line, test the start and the end at '
   + M('x = 2') + '. A dropped sign in the middle shows up immediately.'),
 ],
 'alg-09': [
  ('The four costly errors',
   'Multiplying by the divisor instead of its reciprocal; cubing only the letter '
   'and not the coefficient; cancelling both powers of ' + M('x') + ' instead of one; '
   'losing the bracket in a compound numerator.'),
  ('Work a compound fraction in three moves',
   'One fraction on top, one underneath, then invert and multiply. '
   'Trying to shortcut is where the marks go.'),
  ('Collapsing to a constant is normal',
   'Many well-built chains end at ' + M('1') + ' or ' + M('−1') + '. '
   'A surprising answer is not a sign of error — but check it at one value.'),
  ('Power ladders',
   'From ' + M('x + ' + F(1, 'x') + ' = 3') + ' every higher combination follows by '
   'squaring, cubing and multiplying rungs together.'),
  ('Proportion by substitution',
   'For ' + M(F('a', 'b') + ' = ' + F('c', 'd')) + ', set both equal to '
   + M('t') + ' and write ' + M('a = bt') + ', ' + M('c = dt') + '. '
   'The claim usually becomes an identity in ' + M('t') + '.'),
 ],
 'alg-10': [
  ('The product is the whole story',
   'On ' + M('y = ' + F('k', 'x')) + ' every point satisfies ' + M('xy = k') + '. '
   'One known point gives ' + M('k') + ' by multiplication, and the rectangle under '
   'any point has area ' + M('|k|') + '.'),
  ('Whole-number points are divisors',
   M('xy = 12') + ' has as many integer solutions as 12 has divisors, positive and '
   'negative — twelve points in all.'),
  ('A moved hyperbola',
   M('y = ' + F('3x − 1', 'x − 2') + ' = 3 + ' + F(5, 'x − 2')) + '. '
   'Dividing out shows the asymptotes at once: ' + M('x = 2') + ' and ' + M('y = 3') + '.'),
  ('Least value of ' + M('x + ' + F('k', 'x')),
   M('x + ' + F('k', 'x') + ' − 2' + rt('k') + ' = ' + F('(x − ' + rt('k') + ')<sup>2</sup>', 'x'))
   + ', so the minimum is ' + M('2' + rt('k')) + ' at ' + M('x = ' + rt('k')) + '.'),
  ('Rate problems are inverse proportion',
   'Work done in one hour adds: ' + M(F(1, 't') + ' + ' + F(1, 't + 5') + ' = ' + F(1, 6))
   + '. Clearing the fractions gives a quadratic with one sensible root.'),
 ],
'alg-11': [
  ('Denesting a double root',
   M(rt('a + 2' + rt('b'))) + ' simplifies when two numbers add to ' + M('a') + ' and '
   'multiply to ' + M('b') + ': then ' + M('a + 2' + rt('b') + ' = (' + rt('x') + ' + '
   + rt('y') + ')<sup>2</sup>') + '. So ' + M('3 + 2' + rt(2) + ' = (1 + ' + rt(2)
   + ')<sup>2</sup>') + '.'),
  ('Conjugates',
   'Multiply by the conjugate to clear a root below the line. For cube roots use '
   + M(p('a', 3) + ' − ' + p('b', 3) + ' = (a − b)(' + sq('a') + ' + ab + ' + sq('b') + ')')
   + ', so ' + M(F(1, rt(2, 3) + ' − 1')) + ' needs ' + M(rt(4, 3) + ' + ' + rt(2, 3) + ' + 1')
   + '.'),
  ('Telescoping surds',
   M(F(1, rt('k') + ' + ' + rt('k + 1')) + ' = ' + rt('k + 1') + ' − ' + rt('k'))
   + ' — rationalising turns a sum of fractions into a collapsing chain.'),
  ('Compare by squaring',
   'Both sides positive, so squaring decides. ' + M(rt(7) + ' + ' + rt(5)) + ' beats '
   + M(rt(10) + ' + ' + rt(2)) + ' because ' + M('2' + rt(35) + ' &gt; 2' + rt(20)) + '.'),
  ('Trap the value between squares',
   M(sq('n') + ' &lt; ' + sq('n') + ' + n &lt; (n + 1)<sup>2</sup>') + ', so '
   + M(rt(sq('n') + ' + n')) + ' lies strictly between two consecutive whole numbers '
   'and is never one itself.'),
 ],
 'alg-12': [
  ('Compare by a common power',
   'To rank ' + M(p(2, h(1, 2))) + ', ' + M(p(3, h(1, 3))) + ' and ' + M(p(6, h(1, 6)))
   + ', raise all three to the sixth: 8, 9 and 6. Raising to a power preserves order '
   'among positives.'),
  ('Substitute to get a quadratic',
   'With ' + M('t = ' + p(3, 'x')) + ', the equation ' + M(p(9, 'x') + ' − 4 · '
   + p(3, 'x') + ' + 3 = 0') + ' becomes ' + M(sq('t') + ' − 4t + 3 = 0') + '. '
   'The same trick handles ' + M('t = ' + X12) + ' and ' + M('t = ' + p('x', h(1, 4))) + '.'),
  ('Reciprocal pairs',
   M(p('a', h(1, 2))) + ' and ' + M(p('a', '−' + h(1, 2))) + ' multiply to 1, so in '
   + M('(' + p('a', h(1, 2)) + ' + ' + p('a', '−' + h(1, 2)) + ')<sup>2</sup>')
   + ' the middle term is simply 2.'),
  ('Work the root first',
   M(p(27, h(2, 3)) + ' = (' + rt(27, 3) + ')<sup>2</sup> = 9') + '. '
   'Taking the root before the power keeps the numbers small enough to do by hand.'),
  ('A negative index turns a fraction over',
   M('(' + F(8, 27) + ')<sup>−' + h(2, 3) + '</sup> = (' + F(27, 8) + ')<sup>'
     + h(2, 3) + '</sup> = ' + F(9, 4)) + '.'),
 ],
 'alg-13': [
  ('One substitution does most of the work',
   'Put ' + M('u = ' + X12) + '. Then ' + M('x − 5' + X12 + ' + 6') + ' is '
   + M(sq('u') + ' − 5u + 6') + ', an ordinary quadratic, and the factors translate '
   'straight back.'),
  ('A difference of squares in disguise',
   M('x − y = (' + X12 + ' − ' + p('y', h(1, 2)) + ')(' + X12 + ' + ' + p('y', h(1, 2))
     + ')') + '. The cube-root version uses '
   + M('a − b = (' + p('a', h(1, 3)) + ' − ' + p('b', h(1, 3)) + ')(' + p('a', h(2, 3))
       + ' + ' + p('(ab)', h(1, 3)) + ' + ' + p('b', h(2, 3)) + ')') + '.'),
  ('Take out the lowest power',
   'Negative indices included: ' + M(X12 + ' − ' + p('x', '−' + h(1, 2)) + ' = '
                                     + p('x', '−' + h(1, 2)) + '(x − 1)') + '.'),
  ('Rationalise the numerator',
   M(F(X12 + ' − 3', 'x − 9') + ' = ' + F(1, X12 + ' + 3')) + '. '
   'The new form is defined at ' + M('x = 9') + ', where the old one was not.'),
  ('State the condition',
   'All of this assumes the bases are positive. Say so — it is where the marks are, '
   'and where the mathematics is honest.'),
 ],
 'alg-14': [
  ('The subtraction trick',
   'For a block of ' + M('k') + ' digits, multiply by ' + M(p(10, 'k')) + ' and '
   'subtract: ' + M('0.(abc) = ' + F('100a + 10b + c', 999)) + '. '
   'Nines below the line, one for each digit of the block.'),
  ('Which fractions terminate',
   'In lowest terms, exactly those whose denominator is built only from '
   + M('2') + 's and ' + M('5') + 's — because a terminating decimal is '
   + M(F('k', p(10, 'm'))) + '.'),
  ('How long the block is',
   'For ' + M('q') + ' coprime to 10, the period of ' + M(F(1, 'q')) + ' is the '
   'smallest ' + M('k') + ' with ' + M(p(10, 'k') + ' ≡ 1 (mod q)') + '. '
   'For 7 and for 13 that is 6.'),
  ('Standard form arithmetic',
   'Multiply the numbers and add the powers; divide and subtract. '
   'To <b>add</b>, make the powers equal first.'),
  ('Counting digits',
   'A number between ' + M(p(10, 19)) + ' and ' + M(p(10, 20)) + ' has 20 digits. '
   'Putting a power into standard form answers "how many digits" at a glance.'),
 ],
 'alg-15': [
  ('The four costly errors',
   M(rt(sq('x')) + ' = x') + ' instead of ' + M('|x|') + '; halving an index instead '
   'of multiplying; ' + M(p(4, h(3, 2))) + ' read as ' + M('4 · ' + h(3, 2)) + '; '
   'and ' + M(rt(sq('a') + ' + ' + sq('b')) + ' = a + b') + ', which one example kills.'),
  ('Denesting',
   'Look for a square: ' + M('9 + 4' + rt(5) + ' = (2 + ' + rt(5) + ')<sup>2</sup>')
   + '. Match the rational parts and the root parts separately.'),
  ('Compare by a common power',
   'Raise both to the lowest common multiple of the index denominators. '
   + M(p(3, h(1, 2))) + ' against ' + M(p(2, h(2, 3))) + ' becomes 27 against 16.'),
  ('Conjugate pairs that multiply to 1',
   M('(2 + ' + rt(3) + ')(2 − ' + rt(3) + ') = 1') + ', so each is the reciprocal of '
   'the other and rationalising needs no division at all.'),
  ('Estimate with standard form',
   'Keep one significant figure through the calculation and the power of ten does '
   'the rest. It is the fastest check on an answer that looks wrong.'),
 ],
 'alg-16': [
  ('The definition does the work',
   M('a &gt; b') + ' means ' + M('a − b &gt; 0') + '. Every comparison, however '
   'awkward, is the sign of one difference.'),
  ('Sum of squares',
   'Write the difference as a sum of squares and the sign is settled: '
   + M('2(' + sq('a') + ' + ' + sq('b') + ' + ' + sq('c') + ' − ab − bc − ca) = '
       + '(a − b)<sup>2</sup> + (b − c)<sup>2</sup> + (c − a)<sup>2</sup>') + '.'),
  ('AM ≥ GM',
   M(F('a + b', 2) + ' ≥ ' + rt('ab')) + ' because the difference is '
   + M(F('(' + rt('a') + ' − ' + rt('b') + ')<sup>2</sup>', 2)) + '. '
   'For three numbers the same follows from '
   + M(p('a', 3) + ' + ' + p('b', 3) + ' + ' + p('c', 3) + ' ≥ 3abc') + '.'),
  ('Compare by squaring',
   'Only when both sides are non-negative. Then squaring clears roots without '
   'disturbing the order.'),
  ('The workhorse',
   M(sq('a') + ' + ' + sq('b') + ' + ' + sq('c') + ' ≥ ab + bc + ca')
   + ' and its cousin ' + M('(a + b + c)<sup>2</sup> ≥ 3(ab + bc + ca)')
   + ' settle a surprising share of competition inequalities.'),
 ],
 'alg-17': [
  ('What is safe',
   'Add or subtract anything from both sides; multiply or divide by a positive. '
   'A <b>negative</b> multiplier reverses the sign — the single most expensive slip.'),
  ('Squaring is not order-preserving',
   M('1 &gt; −2') + ' but ' + M('1 &lt; 4') + '. Cubing always is, because '
   + M(p('a', 3) + ' − ' + p('b', 3) + ' = (a − b)(' + sq('a') + ' + ab + ' + sq('b') + ')')
   + ' and the second bracket is never negative.'),
  ('Reciprocals need one sign',
   M('a &gt; b') + ' gives ' + M(F(1, 'a') + ' &lt; ' + F(1, 'b')) + ' only when '
   + M('a') + ' and ' + M('b') + ' have the same sign. ' + M('1 &gt; −1') + ' is the '
   'counter-example to remember.'),
  ('Rewrite to see the direction',
   M(F('x', 'x + 1') + ' = 1 − ' + F(1, 'x + 1')) + '. As ' + M('x') + ' grows the '
   'subtracted part shrinks, so the whole climbs — monotonicity with no calculus.'),
  ('The mediant',
   'If ' + M(F('a', 'b') + ' &lt; ' + F('c', 'd')) + ' with positive denominators, '
   'then ' + M(F('a + c', 'b + d')) + ' lies strictly between them.'),
 ],
 'alg-18': [
  ('What may be combined',
   'Same-direction inequalities may always be <b>added</b>; they may be '
   '<b>multiplied</b> only when every number is positive; they may '
   '<b>never</b> be subtracted or divided term by term.'),
  ('Differences as sums',
   'To bound ' + M('a − b') + ', bound ' + M('−b') + ' first by reversing the ends of '
   + M('b') + ', then add. The same for division: bound ' + M(F(1, 'b')) + ' and '
   'multiply.'),
  ('Corners, then the inside',
   'For an expression monotone in each variable the extremes sit at the corners of '
   'the box. When it is not — ' + M(sq('x')) + ' across zero — the extreme is '
   '<b>inside</b>, and the corners lie.'),
  ('Fixed sum, biggest product',
   'If ' + M('a + b') + ' is fixed, ' + M('ab') + ' is largest when '
   + M('a = b') + ': ' + M('ab = ' + F('(a+b)<sup>2</sup>', 4) + ' − '
                           + F('(a−b)<sup>2</sup>', 4)) + '.'),
  ('Check the denominator can\'t vanish',
   'Before trusting a corner of a range for a fraction, make sure no point of the '
   'box makes the denominator zero.'),
 ],
 'alg-19': [
  ('Positives are easy',
   'If ' + M('0 &lt; a &lt; b') + ' then ' + M(p('a', 'n') + ' &lt; ' + p('b', 'n'))
   + ' for every ' + M('n ≥ 1') + ', and roots behave the same way.'),
  ('Odd and even',
   'An odd power keeps the order for every real number. An even power keeps it only '
   'for non-negatives: ' + M('−3 &lt; 2') + ' but ' + M('9 &gt; 4') + '.'),
  ('Below one, powers shrink',
   'For ' + M('0 &lt; x &lt; 1') + ', ' + M(p('x', 3) + ' &lt; ' + sq('x') + ' &lt; x &lt; '
                                            + rt('x')) + '. Above 1 the order reverses.'),
  ('An even power across zero',
   'If the range contains 0, the least value of ' + M(sq('x')) + ' is 0, reached '
   'inside the range. The largest comes from whichever end is further from zero.'),
  ('Bernoulli',
   M('(1 + h)<sup>n</sup> ≥ 1 + nh') + ' for ' + M('h ≥ −1') + '. '
   'It is the quickest way to show a power with base above 1 grows past any bound.'),
 ],
 'alg-20': [
  ('The four costly errors',
   'Keeping the direction after multiplying by a negative; subtracting inequalities '
   'term by term; squaring a range that crosses zero and trusting the corners; '
   'taking reciprocals across a change of sign.'),
  ('Sum of squares, again',
   'Nearly every proof in this chapter is "the difference is a square, or a sum of '
   'squares". Write the difference first and look for the pattern.'),
  ('A checklist for estimating a range',
   'Is each variable\'s range right? Is the expression monotone in each? Does any '
   'denominator vanish inside? Only then do the corners decide.'),
  ('The mean family',
   M(F('a + b', 2) + ' ≥ ' + rt('ab') + ' ≥ ' + F('2ab', 'a + b')) + ' for positive '
   + M('a, b') + ' — arithmetic, geometric and harmonic, with equality only when '
   + M('a = b') + '.'),
  ('The triangle inequality',
   M('|a + b| ≤ |a| + |b|') + ', proved by squaring both sides and using '
   + M('ab ≤ |ab|') + '. Equality when the two have the same sign.'),
 ],
'alg-21': [
  ('Only one rule differs from equations',
   'Every step that solves an equation is allowed, except that multiplying or dividing '
   'by a negative <b>reverses</b> the sign. Test one value from your answer to catch it.'),
  ('Never multiply by an unknown sign',
   'From ' + M(F(1, 'x') + ' &gt; 2') + ' you may not multiply by ' + M('x') + ': it could '
   'be negative. Split into cases, or move everything to one side.'),
  ('Critical values and regions',
   'For a product or a fraction, mark where each factor is zero or undefined, then test '
   'one point in each region. The sign alternates between consecutive critical values.'),
  ('When the unknown cancels',
   'A true statement left behind means every number works; a false one means none do. '
   + M('3x + 1 &gt; 3x') + ' is the first, ' + M('2x + 5 &lt; 2x + 3') + ' the second.'),
  ('Counting integer solutions',
   'Solve first, then count. Watch which ends are included: '
   + M('−2 ≤ x &lt; 4') + ' holds for six integers, not seven or five.'),
 ],
 'alg-22': [
  ('Overlap, not union',
   'A system asks for both conditions at once, so the answer is the <b>intersection</b>. '
   'Draw both on one number line and read off where they overlap.'),
  ('Interval notation',
   M('[a, b]') + ' includes its ends, ' + M('(a, b)') + ' excludes them. '
   'A square bracket pairs with ' + M('≤') + ', a round one with ' + M('&lt;') + '.'),
  ('Double inequalities',
   M('1 ≤ 2x + 3 ≤ 9') + ' is one system: do the same thing to all three parts, and '
   'reverse all of it if you multiply by a negative.'),
  ('Quadratic inequalities',
   'Factorise, find the roots, then decide between or outside: a positive-leading '
   'quadratic is below the axis <b>between</b> its roots.'),
  ('Empty is an answer',
   'If the two sets do not overlap, say so. ' + M('x &gt; 3') + ' with ' + M('x &lt; 1')
   + ' has no solution, and writing nothing is not the same as writing that.'),
 ],
 'alg-23': [
  ('Modulus is distance',
   M('|x − a|') + ' is the distance from ' + M('x') + ' to ' + M('a') + '. '
   'Read every modulus question that way and most of them stop needing algebra.'),
  ('Less gives one interval, greater gives two',
   M('|x| &lt; a') + ' is ' + M('−a &lt; x &lt; a') + '; ' + M('|x| &gt; a')
   + ' is two rays. Mixing these up is the commonest error in the topic.'),
  ('Two cases, or square',
   'With a modulus on one side, split into the two cases and check each answer. '
   'With a modulus on <b>both</b> sides, squaring is safe — both sides are non-negative.'),
  ('Sums of distances',
   M('|x − 1| + |x − 3|') + ' is the total distance to 1 and 3. It equals the gap '
   'between them on the whole segment, and exceeds it outside.'),
  ('The right side must be non-negative',
   'In ' + M('|x − 2| = 2x') + ' the right side forces ' + M('x ≥ 0') + ' before any '
   'case work begins — that is what rejects the spurious root.'),
 ],
 'alg-24': [
  ('Half a unit',
   'Rounding to the nearest unit gives an absolute error of at most half a unit. '
   'That single sentence generates every bound in this topic.'),
  ('Absolute against relative',
   'Absolute error is a size; relative error is that divided by the value. '
   'An error of 1 is nothing in 500 and ruinous in 5.'),
  ('Round once',
   'Rounding to 2 d.p. and then to 1 can lift a value over the halfway line. '
   + M('2.449 → 2.45 → 2.5') + ', but directly it is ' + M('2.4') + '.'),
  ('Errors add for products',
   'Relative errors add when quantities multiply, so three measurements each good to '
   + M('1%') + ' give a product good to about ' + M('3%') + '.'),
  ('Powers multiply the error',
   'Squaring doubles the relative error, cubing triples it. A side known to '
   + M('1%') + ' gives an area known to about ' + M('2%') + '.'),
 ],
 'alg-25': [
  ('A measurement is an interval',
   M('8') + ' to the nearest whole means ' + M('7.5 ≤ x &lt; 8.5') + '. '
   'Write both bounds before calculating anything.'),
  ('Which end for which answer',
   'Sum: low with low. Difference: <b>low minus high</b>. Product: low times low. '
   'Quotient: low over <b>high</b>. Pairing the wrong ends is the usual slip.'),
  ('Check the denominator',
   'Before trusting a corner of a range for a fraction, make sure no point of the box '
   'makes the denominator zero.'),
  ('Subtracting near-equal numbers',
   'Two masses of ' + M('1.0') + ' kg each to 1 d.p. have a difference somewhere in '
   + M('(−0.1, 0.1)') + ' — as wide as the whole uncertainty. Precision is destroyed.'),
  ('Keep bounds unrounded',
   'Round only the final answer. Rounding a bound first both shifts and shrinks the '
   'interval, so it may no longer contain the true value.'),
 ],
 'alg-26': [
  ('The four costly errors',
   'Keeping the direction after multiplying by a negative; writing one interval for '
   + M('|x| &gt; a') + '; pairing the wrong ends for a difference of bounds; rounding twice.'),
  ('Test one value',
   'Put a number from your answer back into the original. A reversed sign shows '
   'immediately, and it costs five seconds.'),
  ('Distance reading',
   'Modulus questions are about distance. Sketching a number line answers most of them '
   'faster than algebra.'),
  ('Squaring loses information',
   M('{sq("x")} &lt; 4') + ' is not ' + M('x &lt; 2') + ': it is ' + M('−2 &lt; x &lt; 2') + '. '
   'Take the modulus, not just the positive root.'),
  ('State the set',
   'An answer to an inequality is a set. Write it as an interval or an inequality, and '
   'say when it is empty.'),
 ],
 'alg-27': [
  ('Standard form first',
   'Everything to one side, zero on the other. The zero product rule needs the zero: '
   + M('AB = 0') + ' tells you something, ' + M('AB = 6') + ' does not.'),
  ('Never divide by x',
   M(sq('x') + ' = 5x') + ' has roots 0 and 5. Dividing by ' + M('x') + ' throws the '
   'first away — factorise instead.'),
  ('At most two roots',
   'Two different roots already fix the factorisation ' + M('a(x − p)(x − q)') + ', '
   'so a third is impossible. A repeated root counts once.'),
  ('Build from roots',
   'Roots ' + M('p') + ' and ' + M('q') + ' give ' + M('(x − p)(x − q) = 0') + ' — '
   'and any non-zero multiple of it, so the equation is not unique.'),
  ('Coefficients that give a root free',
   'If ' + M('a + b + c = 0') + ' then ' + M('x = 1') + ' is a root; if '
   + M('a − b + c = 0') + ' then ' + M('x = −1') + ' is. Check both by eye first.'),
 ],
 'alg-28': [
  ('Three short methods',
   'No ' + M('x') + ' term: make ' + M(sq('x')) + ' the subject. No constant: take out '
   + M('x') + '. Both: the root is 0.'),
  ('Both signs',
   M(sq('x') + ' = a') + ' gives ' + M('±' + rt('a')) + '. Writing only the positive '
   'root loses half the answer.'),
  ('A perfect square on one side',
   M('(x − 1)<sup>2</sup> = 9') + ' gives ' + M('x − 1 = ±3') + ' directly — no '
   'expanding and no formula.'),
  ('Negative is impossible',
   M(sq('x') + ' + 4 = 0') + ' has no real root, because no real square is negative.'),
  ('The same trick at higher powers',
   M(sq('x', 3) + ' = 4x') + ' and ' + M(sq('x', 6) + ' = ' + sq('x', 4))
   + ' factorise the same way — and lose the root 0 the same way if you divide.'),
 ],
 'alg-29': [
  ('Work out D first',
   'The discriminant says how many roots to expect and checks the arithmetic before '
   'you commit to the formula.'),
  ('√D, not D',
   'The formula is ' + M('x = ' + F('−b ± ' + rt(sq('b') + ' − 4ac'), '2a'))
   + '. Forgetting the root sign is the single commonest slip.'),
  ('Watch the signs',
   M('−4ac') + ' is <b>positive</b> when ' + M('c') + ' is negative, so a negative '
   'constant always gives two real roots.'),
  ('Conditions on a parameter',
   'Two distinct roots means ' + M('D &gt; 0') + ', a repeated root ' + M('D = 0')
   + ', none ' + M('D &lt; 0') + '. Each is an inequality in the parameter.'),
  ('Substitute to simplify',
   'An equation in ' + M('(x − 1)') + ' or ' + M(sq('x')) + ' is a quadratic in '
   'disguise. Name the block ' + M('t') + ' before reaching for the formula.'),
 ],
 'alg-30': [
  ('Read the roots off the coefficients',
   M('α + β = −' + F('b', 'a')) + ' and ' + M('αβ = ' + F('c', 'a')) + '. '
   'For a monic equation that is simply ' + M('−b') + ' and ' + M('c') + '.'),
  ('Symmetric expressions',
   'Anything symmetric in the roots reduces to the sum and the product: '
   + M(sq('α') + ' + ' + sq('β') + ' = (α+β)<sup>2</sup> − 2αβ') + ', and cubes '
   'follow the same way.'),
  ('Build a new equation',
   'For roots ' + M('2α, 2β') + ' or ' + M('α+1, β+1') + ', work out the new sum and '
   'product and write ' + M(f'{sq("x")} − (sum)x + (product) = 0') + '.'),
  ('Use it as a check',
   'After solving, add and multiply your roots. If they do not match the coefficients, '
   'something is wrong — and you know it before the marker does.'),
  ('Conditions on the roots',
   'Reciprocal roots mean ' + M('c = a') + '; opposite roots mean ' + M('b = 0') + '; '
   'a given ratio or difference turns into two equations in the roots.'),
 ],
 'alg-31': [
  ('Name the repeated block',
   'If the same expression appears squared and plain, call it ' + M('t') + '. '
   + M(sq('x')) + ', ' + M('|x|') + ', ' + M(sq('x', 3)) + ' and ' + M('x + ' + F(1, 'x'))
   + ' all work.'),
  ('Reject impossible values',
   'With ' + M('t = ' + sq('x')) + ', a negative ' + M('t') + ' gives nothing. '
   'Each positive ' + M('t') + ' gives two roots, ' + M('t = 0') + ' gives one.'),
  ('Return to x',
   'The commonest lost mark is answering in ' + M('t') + '. The question asked for '
   + M('x') + '.'),
  ('Clear denominators, then check',
   'Multiplying by a denominator can invent roots. Every candidate must be tested '
   'against the original denominators before it is kept.'),
  ('Pair the factors cleverly',
   'In ' + M('(x−1)(x−2)(x−3)(x−4) = 24') + ', pairing outer with inner gives two '
   'expressions differing by a constant — and one substitution finishes it.'),
 ],
 'alg-32': [
  ('Say what x is',
   'Name the unknown with its unit before writing an equation. Half the marks in a word '
   'problem are for setting it up.'),
  ('Standard shapes',
   'Consecutive: ' + M('x, x+1') + '. Consecutive even or odd: ' + M('x, x+2') + '. '
   'Rate problems: ' + M('t = ' + F('d', 'v')) + ' and work adds as ' + M(F(1, 't')) + '.'),
  ('Reject by meaning',
   'The algebra gives both roots; the words reject one. A length, a time and a count '
   'cannot be negative.'),
  ('Sum and product shortcuts',
   'Two numbers with known sum and product are the roots of '
   + M(sq('t') + ' − (sum)t + (product) = 0') + ' — no substitution needed.'),
  ('Check against the words',
   'Put the answer back into the <b>problem</b>, not into your own equation. '
   'That catches a mis-set-up as well as an arithmetic slip.'),
 ],
 'alg-33': [
  ('Multipliers, not additions',
   'A rise of ' + M('r%') + ' multiplies by ' + M('1 + ' + F('r', 100)) + '. '
   'Repeating it ' + M('n') + ' times raises that factor to the ' + M('n') + 'th power.'),
  ('A rise then an equal fall loses',
   M('(1 + ' + F('x', 100) + ')(1 − ' + F('x', 100) + ') = 1 − ' + F(sq('x'), 10000))
   + ', always below 1. The order makes no difference.'),
  ('Choose the method',
   'Two linear equations: eliminate or substitute. One linear and one quadratic: always '
   'substitute. Symmetric sum-and-product: use Vieta.'),
  ('The vertex',
   'The axis of symmetry is ' + M('x = −' + F('b', '2a')) + '. Substitute it back for '
   'the vertex, and complete the square to see why.'),
  ('What the discriminant says about the graph',
   M('D &gt; 0') + ' cuts the axis twice, ' + M('D = 0') + ' touches it once, '
   + M('D &lt; 0') + ' misses it — so a tangent line means a repeated root.'),
 ],
 'alg-34': [
  ('The four costly errors',
   'Dividing by ' + M('x') + '; writing ' + M(rt('a')) + ' instead of ' + M('±' + rt('a'))
   + '; using ' + M('D') + ' where ' + M(rt('D')) + ' belongs; keeping a root that a '
   'denominator or the words forbid.'),
  ('Look before you formula',
   'A common factor, a difference of squares or an obvious pair of factors is faster '
   'and safer than the formula.'),
  ('Vieta as a check',
   'Add and multiply your roots and compare with the coefficients. It takes seconds and '
   'catches a sign error reliably.'),
  ('Parameters need cases',
   'With a letter as the leading coefficient, treat ' + M('a = 0') + ' separately: '
   'the equation is then linear and the discriminant does not apply.'),
  ('Integer-root questions are divisor questions',
   'If the roots are integers, their product is the constant term. List the factor '
   'pairs and read off the possible sums.'),
 ],
 'alg-35': [
  ('One degree is a number of people',
   'Going from a pie chart to a count, work out what ' + M('1°') + ' is worth: '
   + M('total ÷ 360') + ' people. Every other sector is then one multiplication, and '
   'an awkward angle like ' + M('86.4°') + ' stops being awkward.'),
  ('Sectors are a sharing problem',
   'Angles in the ratio ' + M('p : q : r') + ' are a share of ' + M('360')
   + ' in that ratio. A ratio question and a pie-chart question are the same question '
   'wearing different clothes.'),
  ('Integer angles are a divisor question',
   M('n') + ' equal sectors have whole-number angles exactly when ' + M('n')
   + ' divides ' + M('360') + '. That is why ' + M('7') + ' and ' + M('11')
   + ' sectors never come out whole, and why ' + M('360 = 2<sup>3</sup> · 3<sup>2</sup> · 5')
   + ' is worth knowing.'),
  ('Extremal counting with distinct parts',
   'To make the largest of several distinct whole numbers as small as possible, push '
   'them together at the top: ' + M('m, m−1, m−2, …') + ' sums to '
   + M('km − ' + F('k(k−1)', 2)) + '. Set that at least the total and solve for '
   + M('m') + '.'),
  ('Pigeonhole, in the language of data',
   'With ' + M('N') + ' pieces of data in ' + M('k') + ' categories some category '
   'holds at least ' + M('N ÷ k') + ', rounded up, of them. To show the bound cannot be improved, '
   'build the split that reaches it.'),
 ],
 'alg-36': [
  ('The total is the real unknown',
   'Nearly every mean question is a question about ' + M('Σx = n × mean') + '. Write '
   'that line first and the rest is arithmetic — a number removed, a number added, a '
   'number replaced.'),
  ('Combining two groups',
   M('(n₁m₁ + n₂m₂) ÷ (n₁ + n₂)') + ' — never the average of the two means. Reading '
   'the question as the mean of means is the single most common error in the paper.'),
  ('A linear change to every value',
   'Replace every ' + M('x') + ' by ' + M('ax + b') + ' and the mean becomes '
   + M('a·mean + b') + ', the range becomes ' + M('|a|·range') + ' and the median '
   'follows the mean. Nothing has to be recomputed from scratch.'),
  ('Building a set to order',
   'When mean, median, mode and range are all prescribed, place the median first, then '
   'the repeated value the mode forces, then use the total for what is left. Check all '
   'four conditions at the end — a set that satisfies three is usually not the answer.'),
  ('Extremes with distinct values',
   'To make one value as large as possible with a fixed total, make the others as small '
   'as the conditions allow: ' + M('1, 2, 3, …') + ' when they must differ. That turns '
   'the problem into ' + M('total − ' + F('k(k+1)', 2)) + '.'),
 ],
 'alg-37': [
  ('List in a system, not at random',
   'Fix the first thing, list the rest, then move the first thing on. Nothing is '
   'repeated and nothing is lost, and the pattern in what you wrote usually suggests '
   'the formula.'),
  ('Two questions before any formula',
   'Does order matter? Are repeats allowed? The four answers give the four formulas: '
   + M('n<sup>r</sup>') + ', ' + M('n(n−1)…') + ', ' + M('C(n, r)') + ' and '
   + M('C(n + r − 1, r)') + '.'),
  ('Identical items divide out',
   'Arrangements of ' + M('n') + ' things with repeats divide by the factorial of each '
   'repeat: ' + M('BOOK') + ' gives ' + M(F('4!', '2!') + ' = 12')
   + '. The repeats you cannot tell apart were counted twice.'),
  ('Grid paths are a choice of steps',
   'A path with ' + M('r') + ' rights and ' + M('u') + ' ups is a word in two letters, '
   'so there are ' + M('C(r + u, r)') + ' of them. The same count answers '
   '&ldquo;how many ways to split identical sweets&rdquo;.'),
  ('Stars and bars',
   M('n') + ' identical things into ' + M('k') + ' boxes: ' + M('C(n + k − 1, k − 1)')
   + ' with empty boxes allowed, ' + M('C(n − 1, k − 1)') + ' without. Draw the bars '
   'between the stars and the formula is obvious.'),
 ],
 'alg-38': [
  ('Multiply the stages, add the alternatives',
   'Stages that follow one another multiply; cases that replace one another add. Say '
   'out loud which you have before writing anything.'),
  ('Count the opposite',
   '&ldquo;At least one&rdquo; is ' + M('total − none') + '. Four-digit codes with a '
   'repeat: ' + M('10<sup>4</sup> − 10·9·8·7') + '. Doing it directly needs four '
   'cases and usually goes wrong.'),
  ('Treat a block as one object',
   'Two people who must sit together are one object, so arrange '
   + M('n − 1') + ' objects and then the ' + M('2') + ' inside: '
   + M('2 · (n−1)!') + '. Must <em>not</em> sit together is the complement.'),
  ('Inclusion and exclusion',
   M('|A ∪ B| = |A| + |B| − |A ∩ B|') + ' — and with three sets add the triple back. '
   'Multiples of ' + M('3') + ' or ' + M('5') + ' up to ' + M('1000') + ' is '
   + M('333 + 200 − 66') + '.'),
  ('Round tables and derangements',
   'Seating ' + M('n') + ' people in a circle gives ' + M('(n − 1)!')
   + ' because rotations repeat. Letters in wrong envelopes give '
   + M('D₃ = 2, D₄ = 9, D₅ = 44') + ' — count the opposite, case by case.'),
 ],
 'alg-39': [
  ('Which average does the question want?',
   'Mean for a total shared out, median for a middle that outliers must not move, mode '
   'for the most common. The paper asks for the one you did not compute.'),
  ('Find the position before the value',
   'For the median of a frequency table, work out which position you want — '
   + M('(n + 1) ÷ 2') + ' — then run the cumulative frequencies until you reach it.'),
  ('Estimated means need midpoints',
   'Grouped data has lost the raw values, so use the class midpoint '
   + M('(a + b) ÷ 2') + ' and call the answer an estimate. The range can only be '
   'bounded, never found.'),
  ('Counting checks itself',
   'A count is a whole number, a probability lies in '
   + M('[0, 1]') + ' and pie-chart angles add to ' + M('360°')
   + '. One of those three catches most slips before the paper is handed in.'),
  ('Pigeonhole in one line',
   'If ' + M('N') + ' items sit in ' + M('k') + ' boxes and every box held at most '
   + M('t') + ', there would be at most ' + M('kt') + ' items. Choose '
   + M('t') + ' so that ' + M('kt < N') + ' and the contradiction writes itself.'),
 ],
 'alg-40': [
  ('From the differences to the rule',
   'Constant first differences mean ' + M('dn + c') + '. Constant second differences '
   'mean a quadratic whose ' + M('n<sup>2</sup>') + ' coefficient is half the second '
   'difference. Subtract that part off and what is left is linear.'),
  ('A term from a sum',
   M('uₙ = Sₙ − Sₙ₋₁') + '. One subtraction turns a formula for the sum of the first '
   + M('n') + ' terms into a formula for the terms, and it is a line of algebra, not '
   'a search.'),
  ('Telescoping a recurrence',
   'If ' + M('uₙ₊₁ − uₙ = f(n)') + ', add the differences: '
   + M('uₙ = u₁ + f(1) + f(2) + … + f(n−1)') + '. With '
   + M('f(n) = 2n') + ' that gives ' + M('n<sup>2</sup> − n + 1') + '.'),
  ('Divisibility of a term is a remainder question',
   'Test ' + M('n = 0, 1, 2, …') + ' up to the modulus and the pattern repeats for '
   'ever. That is the whole proof that ' + M('n<sup>2</sup> + n') + ' is always even '
   'and that ' + M('x<sup>2</sup> + x + 1') + ' is never a multiple of ' + M('5') + '.'),
  ('Functional equations by substitution',
   'Given a relation in ' + M('f(x)') + ' and ' + M('f(1 − x)') + ', write it again '
   'with ' + M('x') + ' replaced by ' + M('1 − x') + '. Two equations, two unknowns — '
   'eliminate the one you do not want.'),
 ],
 'alg-41': [
  ('Gradient first, then a point',
   'Find ' + M('m') + ' from two points, then push it through one of them: '
   + M('y − y₁ = m(x − x₁)') + '. Expanding at the end is safer than guessing '
   + M('c') + '.'),
  ('Intercept form makes areas easy',
   'A line crossing at ' + M('(p, 0)') + ' and ' + M('(0, q)') + ' is '
   + M(F('x', 'p') + ' + ' + F('y', 'q') + ' = 1') + ' and the triangle with the axes '
   'has area ' + M(F('|pq|', 2)) + '. Area questions become one equation in '
   + M('pq') + '.'),
  ('Perpendicular means product ' + M('−1'),
   'Turning a line through ' + M('90°') + ' swaps rise and run and flips the sign, so '
   + M('m₁m₂ = −1') + '. That one fact answers distance-to-a-line and '
   + M('OA × OB') + ' questions alike.'),
  ('A parameter that cancels',
   'When a question says &ldquo;for every ' + M('m') + '&rdquo;, write the meeting '
   'point and watch the parameter leave: ' + M('kx + 2 = (k+1)x − 3')
   + ' collapses to ' + M('x = 5') + '. Nothing needs to be solved case by case.'),
  ('Lattice points on a segment',
   'The segment from the origin to ' + M('(a, b)') + ' carries '
   + M('gcd(a, b) + 1') + ' points with whole-number coordinates, because the step '
   'that repeats is ' + M('(a, b) ÷ gcd(a, b)') + '.'),
 ],
 'alg-42': [
  ('One multiplier, not two steps',
   'Up ' + M('15%') + ' is ' + M('× 1.15') + ', down ' + M('12%') + ' is '
   + M('× 0.88') + ', and two changes multiply. Up then down by the same percentage '
   'always loses: ' + M('(1 + p)(1 − p) = 1 − p<sup>2</sup>') + '.'),
  ('Reverse percentages divide',
   'A price after a ' + M('15%') + ' fall is ' + M('0.85 ×') + ' the original, so '
   'the original is the new price ' + M('÷ 0.85') + '. Taking ' + M('15%')
   + ' off again is the classic wrong answer.'),
  ('Rates add, times do not',
   'Pipes, workers and candles are all rates: ' + M('1/a + 1/b') + ' of the job per '
   'hour. A drain subtracts. Average speed is '
   + M('total distance ÷ total time') + ', which for equal distances is '
   + M(F('2uv', 'u + v')) + '.'),
  ('A ratio is one unknown',
   'Write ' + M('5k') + ' and ' + M('8k') + ' rather than two letters. A second '
   'condition then gives one equation in ' + M('k') + ' — and that is why '
   '&ldquo;add ' + M('6') + ' to each&rdquo; problems are quick.'),
  ('Mixtures count the substance',
   'Follow the pure quantity, not the volume: '
   + M('0.3x + 0.6(50 − x) = 0.4 · 50') + '. Alloys, acid and alcohol are all the '
   'same equation.'),
 ],
 'alg-43': [
  ('The complement is usually shorter',
   M('P(at least one) = 1 − P(none)') + '. Three coins, at least one head: '
   + M('1 − ' + F(1, 8)) + ' instead of three cases.'),
  ('Multiply along, add between',
   'On a tree diagram the branches multiply and the routes add. Without replacement '
   'both the numerator and the denominator fall, and forgetting the numerator is the '
   'commonest slip.'),
  ('Count the sample space instead',
   'For two dice draw the ' + M('6 × 6') + ' table; for two balls use '
   + M('C(n, 2)') + '. A probability is then one count over another, and the '
   'symmetry is visible: ' + M('P(second > first) = ') + ' half of what is left '
   'after the ' + M('6') + ' draws.'),
  ('Conditional probability narrows the world',
   '&ldquo;Given that…&rdquo; throws away every outcome that fails the condition, so '
   'both parts of the fraction change: '
   + M('P(A | B) = ' + F('P(A and B)', 'P(B)')) + '.'),
  ('A repeating game sums a series',
   'If the first player wins outright with probability ' + M('p') + ' and otherwise '
   'the position repeats after two turns, then '
   + M('P = ' + F('p', '1 − (1 − p)<sup>2</sup>')) + ' — for a six, '
   + M(F(6, 11)) + '.'),
 ],
 'alg-44': [
  ('Read the instruction word',
   '<em>Simplify</em>, <em>expand</em>, <em>factorise</em> and <em>solve</em> are four '
   'different tasks. An answer to the wrong one scores nothing however correct it is.'),
  ('Symmetric expressions collapse',
   M('x + ' + F(1, 'x')) + ' is the whole of an equation in '
   + M('x<sup>2</sup> + ' + F(1, 'x<sup>2</sup>')) + ': square it. Likewise '
   + M('(a+b+c)<sup>2</sup> = a<sup>2</sup>+b<sup>2</sup>+c<sup>2</sup> + 2(ab+bc+ca)')
   + ' turns two given sums into the third.'),
  ('Factor an equation into a product',
   M('xy = x + y + 3') + ' is ' + M('(x − 1)(y − 1) = 4') + ', and then whole-number '
   'solutions are just the factor pairs of ' + M('4') + '. Every Diophantine question '
   'in the paper yields to this.'),
  ('Three consecutive numbers',
   M('(x−1)x(x+1)') + ' contains an even number and a multiple of '
   + M('3') + ', so it is always a multiple of ' + M('6') + '. That is the proof that '
   + M('x<sup>3</sup> − x') + ' is divisible by ' + M('6') + '.'),
  ('The minimum of ' + M('x + ' + F('k', 'x')),
   'For ' + M('x > 0') + ', ' + M('x + ' + F('k', 'x') + ' ≥ 2' + rt('k'))
   + ', with equality at ' + M('x = ' + rt('k'))
   + '; it follows from ' + M('(' + rt('x') + ' − ' + rt(F('k', 'x'))
                              + ')<sup>2</sup> ≥ 0') + '.'),
 ],
}
