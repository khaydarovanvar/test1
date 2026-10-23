# -*- coding: utf-8 -*-
"""Preparation for the Grade 8 algebra final — thirty short questions.

The same eight topics as the paper, lessons 1–22, with none of the exam's own
questions among them. Every question comes from the workbook bank, so its
answer has already been re-derived symbolically.
"""

import sys

sys.path.insert(0, '/home/user/test1/workbooks')
import bank                                                   # noqa: E402

SUBJECT = 'Algebra'
CODE = 'MATH'
DATE = '26/10/2026'
SUBTITLE = 'Algebraic fractions · lessons 1–22'
FOR = 'Mathematics final exam, 26/10/2026'

_FRAC = 'As a single fraction: '

# (topic key, bank section, 1-based number, lead-in)
SPEC = [
    ('alg-01', 'Focus', 1, None), ('alg-01', 'Focus', 7, None),
    ('alg-01', 'Practice', 3, None), ('alg-01', 'Practice', 5, None),

    ('alg-02', 'Focus', 3, None), ('alg-02', 'Focus', 5, None),
    ('alg-02', 'Practice', 1, None), ('alg-02', 'Practice', 3, None),

    ('alg-03', 'Focus', 1, None), ('alg-03', 'Focus', 5, None),
    ('alg-03', 'Practice', 1, None), ('alg-03', 'Practice', 6, None),

    ('alg-04', 'Focus', 2, None), ('alg-04', 'Focus', 6, None),
    ('alg-04', 'Practice', 1, None), ('alg-04', 'Practice', 6, None),

    ('alg-05', 'Focus', 1, _FRAC), ('alg-05', 'Focus', 7, _FRAC),
    ('alg-05', 'Practice', 2, _FRAC), ('alg-05', 'Practice', 8, _FRAC),

    ('alg-06', 'Focus', 2, None), ('alg-06', 'Focus', 6, None),
    ('alg-06', 'Practice', 1, None),

    ('alg-07', 'Focus', 1, None), ('alg-07', 'Focus', 5, None),
    ('alg-07', 'Practice', 1, None), ('alg-07', 'Practice', 8, None),

    ('alg-08', 'Focus', 1, None), ('alg-08', 'Focus', 5, None),
    ('alg-08', 'Practice', 3, None),
]


def _item(key, sec, num, lead):
    topic = bank.BY_KEY[key]
    it = dict(topic['sections'])[sec][num - 1]
    return dict(topic=topic['title'], lessons=topic['lessons'],
                q=(lead or '') + it['q'], a=it['a'], check=it.get('check'))


QUESTIONS = [_item(*spec) for spec in SPEC]
