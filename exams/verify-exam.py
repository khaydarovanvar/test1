#!/usr/bin/env python3
"""Check the exam before it is printed.

Every question is taken from the workbook bank, so its answer has already been
re-derived symbolically; this re-runs those checks for the fifteen questions
that are actually on the paper, checks the extra parts written for the exam
itself, and confirms the mark split the school requires: 40 % easy, 40 %
medium, 20 % hard.
"""

import importlib.util
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
sys.path.insert(0, '/home/user/test1/workbooks')

import bank                                                   # noqa: E402

spec = importlib.util.spec_from_file_location(
    'vq', '/home/user/test1/workbooks/verify-questions.py')
vq = importlib.util.module_from_spec(spec)
spec.loader.exec_module(vq)

import importlib                                              # noqa: E402
be = importlib.import_module('build-exam'.replace('-', '_')) \
    if os.path.exists(os.path.join(HERE, 'build_exam.py')) else None
if be is None:                                                # the file is hyphenated
    s2 = importlib.util.spec_from_file_location('be', os.path.join(HERE, 'build-exam.py'))
    be = importlib.util.module_from_spec(s2)
    s2.loader.exec_module(be)

# answers written for this paper rather than taken from the bank
EXTRA_CHECKS = [
    ('Q14(b) undefined at x = ±1',
     ('domain', '(x+1)/(x-1)-(x-1)/(x+1)', ['1', '-1'])),
]


def main():
    failures, unchecked = [], []
    n, marks = 0, {}
    for (title, m, _), specs in zip(be.SECTIONS, be.PAPER):
        marks[title] = m * len(specs)
        for sp in specs:
            n += 1
            topic, item, _, _ = be.question(sp)
            vq.check_one(f'Q{n} ({sp[0]} {sp[1]} #{sp[2]})', item.get('check'),
                         failures, unchecked)
    for label, check in EXTRA_CHECKS:
        vq.check_one(label, check, failures, unchecked)

    total = sum(marks.values())
    print(f'{n} questions on the paper, {total} marks')
    for title, m in marks.items():
        print(f'  {title:24s} {m:3d} marks  {m * 100 // total:3d} %')
    want = [40, 40, 20]
    got = [m * 100 // total for m in marks.values()]
    if total != 100 or got != want:
        failures.append(f'mark split is {got}, not {want}, over {total} marks')
    if unchecked:
        failures.append('no machine check for: ' + ', '.join(unchecked))
    if failures:
        print('\nFAILED:')
        for f in failures:
            print('  ' + f)
        return 1
    print('\nevery question and every answer on this paper verifies')
    return 0


if __name__ == '__main__':
    sys.exit(main())
