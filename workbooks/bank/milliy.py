# -*- coding: utf-8 -*-
"""Milliy sertifikat practice sets, one for each topic of the course.

These are not the national paper's own questions — the Davlat test markazi does
not publish its bank, and the questions of a sitting are released only after it.
They are written to the published specification of the mathematics paper, in its
three item types and its mark scheme, on the content of the topic they sit in:

    Y-1   closed, four options, one correct          items 1–32   1,3 or 2,2 ball
    Y-2   closed matching                            items 33–35  2,2 ball
    O     open, short answer in parts a) and b)      items 36–45  1,5 / 1,7 / 3,2

    45 items · 150 minutes · marked out of 75 · the certificate starts at 46.

An item is a dict:

    dict(kind='Y-1', mark='2,2', q='…', opts=('…', '…', '…', '…'), a='B)&nbsp;…',
         check=('simp', 'lhs', 'rhs'))
    dict(kind='Y-2', mark='2,2', q='…', left=(…), right=(…), a='1–C, 2–A, …',
         checks=[…])
    dict(kind='O',   mark='3,2', q='…', parts=('…', '…'), a='a) … b) …',
         checks=[…])

`a` is what prints in the answers; `check`/`checks` are what the verifier runs,
so that no option is keyed as correct unless it really is.
"""

from .ms_q1 import MS as _MS_Q1
from .ms_q2 import MS as _MS_Q2
from .ms_q3 import MS as _MS_Q3
from .ms_q4 import MS as _MS_Q4

MILLIY = {}
for _part in (_MS_Q1, _MS_Q2, _MS_Q3, _MS_Q4):
    MILLIY.update(_part)
