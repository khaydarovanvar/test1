# -*- coding: utf-8 -*-
"""The Grade 8 algebra paper — algebraic fractions, lessons 1–22.

Every question is taken from the workbook question bank, so its answer has
already been re-derived symbolically; the bank's own check travels with it.
"""

import sys

sys.path.insert(0, '/home/user/test1/workbooks')
import bank                                                   # noqa: E402
from bankfmt import F, M                                      # noqa: E402

SUBJECT = 'Mathematics'
CODE = 'MATH'
DATE = '26/10/2026'
SUBTITLE = 'Algebraic fractions · lessons 1–22'

SECTIONS = [
    ('Section A — Easy', 5, 'Answer all eight questions.'),
    ('Section B — Medium', 8, 'Answer all five questions. Show your working.'),
    ('Section C — Hard', 10, 'Answer both questions. Show every step of your working.'),
]
SPACE = [2, 4, 8]

# (topic key, bank section, 1-based number in that section, lead-in, part b,
#  worked solution for the key)
SPEC = [
    [('alg-01', 'Focus', 10, None, None,
      'Every term in the first bracket meets every term in the second: '
      + M('x·x + 4x + 3x + 12') + ', and the two middle terms collect.'),
     ('alg-02', 'Focus', 4, None, None,
      'A fraction is undefined only where its denominator is zero: '
      + M('x − 3 = 0') + ' at ' + M('x = 3') + ', so every other value is allowed.'),
     ('alg-03', 'Focus', 7, None, None,
      'Take the three parts separately: ' + M('12 ÷ 8 = 3/2') + ', '
      + M('a² ÷ a = a') + ', ' + M('b ÷ b² = 1/b') + '.'),
     ('alg-04', 'Focus', 9, None, None,
      M('x + 2') + ' and ' + M('x + 5') + ' have no common factor, so the lowest '
      'common denominator is their product.'),
     ('alg-05', 'Focus', 5, 'Write as a single fraction: ', None,
      'The lowest common denominator is ' + M('3x') + ': '
      + F(M('x'), M('3x')) + ' + ' + F(M('3'), M('3x')) + '.'),
     ('alg-06', 'Focus', 5, None, None,
      M('x² − 25') + ' is a difference of two squares, ' + M('(x − 5)(x + 5)')
      + ', and the factor ' + M('x + 5') + ' cancels.'),
     ('alg-07', 'Focus', 4, None, None,
      'Dividing is multiplying by the reciprocal: ' + F(M('x'), M('2')) + ' · '
      + F(M('4'), M('x')) + '; the ' + M('x') + ' cancels and ' + M('4 ÷ 2 = 2')
      + '.'),
     ('alg-08', 'Focus', 4, None, None,
      'Write the 1 over the same denominator: ' + M('1 = ') + F(M('x'), M('x'))
      + ', then add the numerators.')],
    [('alg-01', 'Challenge', 1, None, None,
      'Take out the common factor first: ' + M('x(x² − 9)') + '. What is left is '
      'a difference of two squares. A fully factorised answer needs both steps.'),
     ('alg-03', 'Practice', 5, None, None,
      'Factorise top and bottom: ' + F(M('2(x − 3)'), M('(x − 3)(x + 3)'))
      + ', then cancel ' + M('x − 3') + '.'),
     ('alg-05', 'Practice', 1, 'Write as a single fraction in its simplest form: ',
      None,
      'The common denominator is ' + M('(x − 5)(x + 5) = x² − 25') + '. The '
      'numerator is ' + M('(x + 5) + (x − 5) = 2x') + '.'),
     ('alg-07', 'Practice', 4, None, None,
      'Multiply by the reciprocal and factorise: '
      + F(M('(x − 2)(x + 2)'), M('3')) + ' · ' + F(M('6'), M('x − 2'))
      + '. The ' + M('x − 2') + ' cancels and ' + M('6 ÷ 3 = 2') + '.'),
     ('alg-08', 'Practice', 1, None, None,
      'Multiply top and bottom by ' + M('x') + ', which clears both small '
      'fractions at once and leaves ' + F(M('x + 1'), M('x − 1')) + '.')],
    [('alg-05', 'Challenge', 6,
      'Write as a single fraction in its simplest form: ',
      dict(q='State the values of ' + M('x') + ' for which the original '
             'expression is not defined.',
           marks=3, a=M('x ≠ 1') + ' and ' + M('x ≠ −1'),
           sol='Both denominators of the original expression must be non-zero: '
               + M('x − 1 = 0') + ' at ' + M('x = 1') + ' and ' + M('x + 1 = 0')
               + ' at ' + M('x = −1') + '.',
           check=('domain', '(x+1)/(x-1)-(x-1)/(x+1)', ['1', '-1'])),
      'Over the common denominator ' + M('(x − 1)(x + 1) = x² − 1') + ' the '
      'numerator is ' + M('(x + 1)² − (x − 1)²') + ' = '
      + M('(x² + 2x + 1) − (x² − 2x + 1) = 4x') + '.'),
     ('alg-08', 'Challenge', 3, None, None,
      'The bracket, over ' + M('a² − b²') + ', has numerator '
      + M('(a + b)² − (a − b)² = 4ab') + ', so the bracket is exactly '
      + F(M('4ab'), M('a² − b²')) + ' — the expression it is then divided by. '
      'A quantity divided by itself is 1.')],
]


def _item(key, sec, num, lead, extra, sol=None):
    topic = bank.BY_KEY[key]
    it = dict(topic['sections'])[sec][num - 1]
    d = dict(topic=topic['title'], lessons=topic['lessons'],
             q=(lead or '') + it['q'], a=it['a'], sol=sol or it.get('sol'),
             check=it.get('check'))
    if extra:
        d['extra'] = extra
    return d


PAPER = [[_item(*spec) for spec in section] for section in SPEC]
