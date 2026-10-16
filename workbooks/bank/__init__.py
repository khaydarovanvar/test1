# -*- coding: utf-8 -*-
"""The workbook question bank, one module per topic.

Topic modules are discovered from this folder and ordered by file name, which is
the lesson order (alg01 … alg10). Each exports a TOPIC dict; `TOPICS` is the
whole quarter and `by_key` picks out single topics for a one-topic book.
"""

import importlib
import os
import re

from .common import SECTION_BLURB, F, M, sq           # noqa: F401  (re-exported)

_HERE = os.path.dirname(os.path.abspath(__file__))
_MODULES = sorted(f[:-3] for f in os.listdir(_HERE)
                  if re.fullmatch(r'(alg|geo)\d\d\.py', f))

TOPICS = []
for _name in _MODULES:
    _mod = importlib.import_module(f'.{_name}', __name__)
    TOPICS.append(_mod.TOPIC)

from .notes import NOTES                                # noqa: E402

from .milliy import MILLIY                             # noqa: E402

for _topic in TOPICS:
    # the methods briefing that prints in front of the Beyond section
    _topic.setdefault('notes', NOTES.get(_topic['key'], []))
    # the Milliy sertifikat set, which only the olympiad volume prints
    if MILLIY.get(_topic['key']):
        _topic.setdefault('milliy', MILLIY[_topic['key']])

BY_KEY = {t['key']: t for t in TOPICS}


def select(keys=None):
    """The topics named, in lesson order; everything when nothing is named."""
    if not keys:
        return list(TOPICS)
    missing = [k for k in keys if k not in BY_KEY]
    if missing:
        raise KeyError('no such topic: ' + ', '.join(missing)
                       + ' (have: ' + ', '.join(BY_KEY) + ')')
    return [t for t in TOPICS if t['key'] in set(keys)]


def count(topics=None):
    return sum(len(items) for t in (topics or TOPICS) for _, items in t['sections'])
