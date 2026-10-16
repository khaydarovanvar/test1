# -*- coding: utf-8 -*-
"""Checks the printed answers in the Algebra and Problem-Solving booklets.

Desmos rows: every expression is evaluated here and compared with the answer
the sheet prints. Part 2: each numeric answer is recomputed from scratch below,
from the words of the question rather than from the sheet's own working.
"""
import math
import re
import sys

sys.path.insert(0, '.')

import build

SAFE = {'sqrt': math.sqrt, 'pi': math.pi, 'abs': abs}


def pyify(e):
    e = e.replace('^', '**').replace('−', '-').replace('·', '*')
    e = re.sub(r'(?<=[\d\)])\s*([xtn])', r'*\1', e)
    e = re.sub(r'(?<=\d)\s*\(', r'*(', e)
    return e


def value(expr, x=None):
    env = dict(SAFE)
    env['x'] = env['t'] = env['n'] = x
    return eval(pyify(expr), {'__builtins__': {}}, env)


def numeric(ans):
    a = ans.split(';')[0]                       # '−0.7; below the line' → '−0.7'
    a = a.replace(',', '').replace('−', '-').replace('$', '').strip()
    a = a.replace('%', '').replace('°', '').strip()
    a = re.sub(r'\s*(cm³|cm²|km/h|g/L|g/cm³|km|cm|m²|m³|litres|people|students|'
               r'customers|adults|loaves|cups|points|units|talens)\b', '', a)
    a = a.strip().rstrip('.')
    if re.fullmatch(r'-?\d+(\.\d+)?', a):
        return float(a)
    m = re.fullmatch(r'(-?\d+)\s*/\s*(\d+)', a)
    if m:
        return float(m.group(1)) / float(m.group(2))
    return None


def close(a, b, tol=5e-3):
    return abs(a - b) <= tol * max(1.0, abs(b))


# ---------------------------------------------------------------------------
# Part 2 answers, recomputed here from the question text, not from the sheet.
# ---------------------------------------------------------------------------
TRUTH = {
    # --- Algebra -----------------------------------------------------------
    ('1.1', 'P1'): (23 - 2) / 3.0,
    ('1.1', 'P2'): 30 / 5.0 + 2,
    ('1.1', 'P3'): (29 - 2) / 4.5,
    ('1.1', 'P4'): 14 / (1 / 3.0 + 1 / 4.0),
    ('1.1', 'P7'): 6 * ((11 + 4) / 3.0) + 2,
    ('1.1', 'P10'): 11 - 5 * ((25 - 11) / (12 - 5.0)),
    ('1.1', 'P11'): (4 * 5 - 2 + 2) / (6 - 4.0),
    ('1.1', 'P12'): (-5 - 7) / (4 - 2.0),
    ('1.2', 'P1'): 19 + (40 - 19) / (5 - 2.0) * (8 - 2),
    ('1.2', 'P4'): 20 / 5.0,
    ('1.2', 'P5'): (16 + 5) / 3.0,
    ('1.2', 'P7'): 200 / 8.0,
    ('1.2', 'P9'): (50 - 30) / (4 - 2.0),
    ('1.2', 'P10'): 6 + (0 - 6) / 4.0 * 10,
    ('1.2', 'P11'): 26 - 4 * ((41 - 26) / (9 - 4.0)),
    ('1.2', 'P12'): 4 + (16 - 4) / (5 - 1.0) * (8 - 1),
    ('1.3', 'P2'): 12 / 3.0,
    ('1.3', 'P9'): 12 * (4 / 2.0),
    ('1.3', 'P10'): 5 - 3 * 2,
    ('1.3', 'P12'): 10 / 5.0 + 10 / -2.0,
    ('1.4', 'P1'): (11 + 4) / 3.0 + (11 - 2 * ((11 + 4) / 3.0)),
    ('1.4', 'P2'): (8 - 3 * ((8 - 6) / 2.0)) / 2.0,
    ('1.4', 'P3'): (440 - 7 * 45) / (12 - 7.0),
    ('1.4', 'P4'): 10 * (3 / 6.0),
    ('1.4', 'P5'): 39 - 4 * ((3 * 39 - 57) / (3 * 4 - 2.0)),
    ('1.4', 'P7'): 2 * (9 / 6.0),
    ('1.4', 'P8'): 30 + 4 * ((50 - 30) / (4 - 2.0)),
    ('1.4', 'P9'): (0.4 * 30 - 0.5 * 30) / (0.2 - 0.5),
    ('1.4', 'P10'): 2,
    ('1.4', 'P12'): 2 * ((21 + 5) / (3 + 10.0)) - 1,
    ('1.5', 'P2'): math.floor((50 + 75) / 2.5) + 1,
    ('1.5', 'P5'): len([k for k in range(-50, 51) if 3 < 2 * k + 1 < 11]),
    ('1.5', 'P8'): math.floor((84 - 7 * 6) / 3.0),
    ('1.5', 'P9'): 4 * 80 - (72 + 85 + 79),
    ('1.5', 'P12'): math.floor((90 - 15 * 4) / 6.0),
    ('1.6', 'P1'): (9 + 5) / 2.0 + (9 - 5) / 2.0,
    ('1.6', 'P10'): 0,

    # --- Problem-Solving & Data Analysis -----------------------------------
    ('3.1', 'P1'): 20 / 5.0 * 3,
    ('3.1', 'P2'): 18 / 40.0 * (5 * 60),
    ('3.1', 'P3'): 40 * 25 * 30 / 1000.0,
    ('3.1', 'P4'): 7.4 * 25,
    ('3.1', 'P5'): 540 / 60.0,
    ('3.1', 'P6'): 450 / 75.0,
    ('3.1', 'P7'): 12 / 50.0 * 60,
    ('3.1', 'P8'): 36 / 0.4,
    ('3.1', 'P9'): 7.50 / 3 * 44 * 0.90,
    ('3.1', 'P10'): 100 ** 3,
    ('3.1', 'P11'): 45 / 2.5 - 45 / 3.0,
    ('3.1', 'P12'): 300 / 4.0 * 10 - 700,
    ('3.2', 'P1'): 80 * 0.85,
    ('3.2', 'P2'): 61.20 / 0.85,
    ('3.2', 'P3'): 60 * 1.30 * 0.90,
    ('3.2', 'P4'): (2760 - 2400) / 2400.0 * 100,
    ('3.2', 'P5'): 90 * 1.08,
    ('3.2', 'P6'): (250 - 190) / 250.0 * 100,
    ('3.2', 'P7'): round(500 * 1.07 ** 3, 2),
    ('3.2', 'P10'): 36 / 0.15,
    ('3.2', 'P11'): 576 / (0.80 * 0.90),
    ('3.3', 'P1'): (5 * 14 + 26) / 6.0,
    ('3.3', 'P2'): (sorted([11, 4, 9, 4, 15, 20])[2]
                    + sorted([11, 4, 9, 4, 15, 20])[3]) / 2.0,
    ('3.3', 'P3'): (12 * 150 + 8 * 160) / 20.0,
    ('3.3', 'P4'): (10 * 15 - 20 + 40) / 10.0,
    ('3.3', 'P7'): 9 * 30 - 8 * 32,
    ('3.3', 'P9'): (6 * 72 + 90 + 84) / 8.0,
    ('3.3', 'P11'): 4 * 25 - (18 + 22 + 31),
    ('3.4', 'P1'): 6 + 4 + 2,
    ('3.4', 'P2'): (1 * 4 + 2 * 6 + 3 * 10) / float(4 + 6 + 10),
    ('3.4', 'P3'): 60 / float(60 + 20),
    ('3.4', 'P4'): round(31 / float(18 + 24 + 31 + 27 + 20) * 100, 1),
    ('3.4', 'P5'): sorted([2, 3, 3, 4, 4, 4, 4, 5, 5, 6, 6, 7, 9])[6],
    ('3.4', 'P7'): 60 / float(20 + 60) * 100,
    ('3.4', 'P11'): 6 * 25 - (18 + 24 + 31 + 27 + 20),
    ('3.5', 'P1'): 2.9 * 4 + 2,
    ('3.5', 'P2'): 14 - (2.9 * 4 + 2),
    ('3.5', 'P6'): round(1200 * 0.92 ** 5),
    ('3.5', 'P8'): 10 - (2.9 * 3 + 2),
    ('3.5', 'P12'): ((23 - 11) / (6 - 2.0)) * 10 + (11 - (23 - 11) / (6 - 2.0) * 2),
    ('3.6', 'P1'): (60 + 20) / 180.0,
    ('3.6', 'P2'): 60 / 100.0,
    ('3.6', 'P3'): (5 + 4) / 12.0,
    ('3.6', 'P4'): (5 / 8.0) * (4 / 7.0),
    ('3.6', 'P5'): (13 + 4 - 1) / 52.0,
    ('3.6', 'P6'): 4 / 9.0 * 450,
    ('3.6', 'P7'): (100 + 80 - 60) / 180.0,
    ('3.6', 'P9'): 0.03 * 0.03,
    ('3.6', 'P10'): (3 / 8.0) * (3 / 8.0),
    ('3.6', 'P12'): 60 / 100.0 * 2500,
    ('3.7', 'P4'): 5 / math.sqrt(1600 / 400.0),
    ('3.7', 'P5'): (66 - 58) / 2.0,
    ('3.7', 'P6'): 0.38 * 24000,
    ('3.7', 'P12'): 90 / 150.0 * 100 - 7,
    ('3.8', 'P10'): 6.4 - 4.1,
    ('3.8', 'P11'): (38 - 3) / 100.0 * 24000,
    ('3.8', 'P12'): 180 / 500.0 * 100,
}

fails, checked, byhand = [], 0, []

for book in ('d1', 'd3'):
    for lesson in build.load(book):
        for i, (q, expr, then, ans) in enumerate(lesson['desmos'], 1):
            tag = '%s D%d' % (lesson['code'], i)
            e = expr.strip()
            want = numeric(ans)
            if want is None or '~' in e or '=' in e or e.isalpha():
                byhand.append('%s  %s → %s' % (tag, expr, ans))
                continue
            try:
                got = float(value(e))
            except Exception as err:            # noqa: BLE001
                byhand.append('%s  %s (%s)' % (tag, expr, err))
                continue
            checked += 1
            if not close(got, want, 2e-3):
                fails.append('%s  %s = %s but the sheet says %s'
                             % (tag, expr, got, ans))

        printed = {p[0]: p[3] for p in lesson['part2']}
        for pid, ans in printed.items():
            key = (lesson['code'], pid)
            shown = numeric(ans)
            if key not in TRUTH:
                byhand.append('%s %s  printed "%s" (answer is prose or symbolic)'
                              % (lesson['code'], pid, ans))
                continue
            checked += 1
            if shown is None or not close(shown, float(TRUTH[key])):
                fails.append('%s %s  printed "%s" vs computed %s'
                             % (lesson['code'], pid, ans, TRUTH[key]))

print('machine-checked %d values across Algebra and Problem-Solving' % checked)
print('left for the eye (symbolic answers, graph reads, prose): %d' % len(byhand))
for s in byhand:
    print('   -', s)
if fails:
    print('\nFAILURES:')
    for f in fails:
        print('   !', f)
    sys.exit(1)
print('\nall machine-checked answers agree')
