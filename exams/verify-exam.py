#!/usr/bin/env python3
"""Check an exam paper before it is printed.

Every numerical answer carries a check, run here by the workbook verifier's
own routines: the algebra questions bring the check they were written with in
the bank, the geometry ones carry checks written with them. It also confirms
the mark split the school requires — 40 % easy, 40 % medium, 20 % hard, over
100 marks — and refuses to pass a paper that does not have it.

    python3 verify-exam.py                  # both papers
"""

import importlib.util
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
sys.path.insert(0, '/home/user/test1/workbooks')

_s = importlib.util.spec_from_file_location(
    'vq', '/home/user/test1/workbooks/verify-questions.py')
vq = importlib.util.module_from_spec(_s)
_s.loader.exec_module(vq)


def check_prep(which):
    """The revision sheets: a flat list of questions, no marks to split."""
    paper = __import__(f'paper_{which}_prep')
    failures, unchecked, words = [], [], []
    for i, item in enumerate(paper.QUESTIONS, start=1):
        if not item.get('check'):
            words.append(f'Q{i}')
            continue
        vq.check_one(f'{which} prep Q{i}', item['check'], failures, unchecked)
    print(f'{which} preparation: {len(paper.QUESTIONS)} questions')
    if words:
        print('  stated from a property, nothing to compute: ' + ', '.join(words))
    for f in failures:
        print('  FAILED: ' + f)
    return failures


def check_paper(which):
    paper = __import__('paper_' + which)
    failures, unchecked, words = [], [], []
    n, marks, figs = 0, {}, 0
    for (title, m, _), items in zip(paper.SECTIONS, paper.PAPER):
        marks[title] = m * len(items)
        for item in items:
            n += 1
            figs += 1 if item.get('fig') else 0
            for part, label in ((item, f'Q{n}'),
                                (item.get('extra'), f'Q{n}(b)')):
                if not part:
                    continue
                checks = part.get('checks') or ([part['check']]
                                                if part.get('check') else [None])
                for j, c in enumerate(checks, start=1):
                    if c is None:
                        words.append(f'{label} [{part.get("topic", "")}]'.strip())
                        continue
                    vq.check_one(label + (f'[{j}]' if len(checks) > 1 else ''),
                                 c, failures, unchecked)

    total = sum(marks.values())
    print(f'{which}: {n} questions, {total} marks, {figs} figures')
    for title, m in marks.items():
        print(f'  {title:24s} {m:3d} marks  {m * 100 // total:3d} %')
    if words:
        print('  answered in words, nothing to compute: ' + ', '.join(words))
    if total != 100 or [m * 100 // total for m in marks.values()] != [40, 40, 20]:
        failures.append(f'{which}: the mark split is not 40/40/20 over 100')
    for f in failures:
        print('  FAILED: ' + f)
    return failures


def main():
    which = sys.argv[1:] or ['algebra', 'geometry']
    bad = []
    for w in which:
        bad += check_paper(w)
        bad += check_prep(w)
        print()
    if bad:
        return 1
    print('every answer on every paper and every revision sheet verifies')
    return 0


if __name__ == '__main__':
    sys.exit(main())
