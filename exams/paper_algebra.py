# -*- coding: utf-8 -*-
"""The Grade 8 algebra paper — algebraic fractions, lessons 1–22.

Every question is taken from the workbook question bank, so its answer has
already been re-derived symbolically; the bank's own check travels with it.
"""

import sys

sys.path.insert(0, '/home/user/test1/workbooks')
import bank                                                   # noqa: E402
from bankfmt import M                                         # noqa: E402

SUBJECT = 'Mathematics'
CODE = 'MATH'
SUBTITLE = 'Algebraic fractions · lessons 1–22'

SECTIONS = [
    ('Section A — Easy', 5, 'Answer all eight questions.'),
    ('Section B — Medium', 8, 'Answer all five questions. Show your working.'),
    ('Section C — Hard', 10, 'Answer both questions. Show every step of your working.'),
]
SPACE = [2, 4, 8]

# (topic key, bank section, 1-based number in that section, lead-in, part b)
SPEC = [
    [('alg-01', 'Focus', 10, None, None),
     ('alg-02', 'Focus', 4, None, None),
     ('alg-03', 'Focus', 7, None, None),
     ('alg-04', 'Focus', 9, None, None),
     ('alg-05', 'Focus', 5, 'Write as a single fraction: ', None),
     ('alg-06', 'Focus', 5, None, None),
     ('alg-07', 'Focus', 4, None, None),
     ('alg-08', 'Focus', 4, None, None)],
    [('alg-01', 'Challenge', 1, None, None),
     ('alg-03', 'Practice', 5, None, None),
     ('alg-05', 'Practice', 1, 'Write as a single fraction in its simplest form: ',
      None),
     ('alg-07', 'Practice', 4, None, None),
     ('alg-08', 'Practice', 1, None, None)],
    [('alg-05', 'Challenge', 6,
      'Write as a single fraction in its simplest form: ',
      dict(q='State the values of ' + M('x') + ' for which the original '
             'expression is not defined.',
           marks=3, a=M('x ≠ 1') + ' and ' + M('x ≠ −1'),
           check=('domain', '(x+1)/(x-1)-(x-1)/(x+1)', ['1', '-1']))),
     ('alg-08', 'Challenge', 3, None, None)],
]


def _item(key, sec, num, lead, extra):
    topic = bank.BY_KEY[key]
    it = dict(topic['sections'])[sec][num - 1]
    d = dict(topic=topic['title'], lessons=topic['lessons'],
             q=(lead or '') + it['q'], a=it['a'], check=it.get('check'))
    if extra:
        d['extra'] = extra
    return d


PAPER = [[_item(*spec) for spec in section] for section in SPEC]
