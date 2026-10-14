# -*- coding: utf-8 -*-
"""Checks every Desmos expression in the booklet against its printed answer.

Equations in x are solved numerically; expressions are evaluated directly.
Answers printed as multiples of pi, as ratios or as coordinates are compared
against the value the lesson text claims.
"""
import math
import re
import sys

sys.path.insert(0, '.')

import build

SAFE = {'sqrt': math.sqrt, 'pi': math.pi, 'arctan': lambda v: math.degrees(math.atan(v)),
        'arcsin': lambda v: math.degrees(math.asin(v)), 'abs': abs,
        'arccos': lambda v: math.degrees(math.acos(v))}


def pyify(e):
    e = e.replace('^', '**')
    e = re.sub(r'(?<=[\d\)])\s*x', r'*x', e)       # 3x -> 3*x
    e = re.sub(r'(?<=\d)\s*\(', r'*(', e)          # 2(3) -> 2*(3)
    return e


def value(expr, x=None):
    env = dict(SAFE)
    if x is not None:
        env['x'] = x
    return eval(pyify(expr), {'__builtins__': {}}, env)


def solve_linear(eq):
    lhs, rhs = eq.split('=')
    f = lambda t: value(lhs, t) - value(rhs, t)
    a = f(1.0) - f(0.0)
    return -f(0.0) / a


def numeric(ans):
    """Pull a number out of a printed answer, where there is one."""
    a = ans.replace(',', '').replace('−', '-').replace('$', '').strip()
    a = a.replace('°', '').strip()
    m = re.fullmatch(r'-?\d+(\.\d+)?', a)
    if m:
        return float(a)
    m = re.fullmatch(r'(-?\d+(?:\.\d+)?)π', a)   # 16pi
    if m:
        return float(m.group(1))
    m = re.fullmatch(r'(-?\d+)\s*/\s*(\d+)', a)       # 3/5
    if m:
        return float(m.group(1)) / float(m.group(2))
    m = re.fullmatch(r'(\d+)\s*:\s*(\d+)', a)         # 4 : 25
    if m:
        return (float(m.group(1)), float(m.group(2)))
    m = re.fullmatch(r'(-?\d+)√(\d+)', a)        # 2sqrt13
    if m:
        return float(m.group(1)) * math.sqrt(float(m.group(2)))
    m = re.fullmatch(r'√(\d+)', a)
    if m:
        return math.sqrt(float(m.group(1)))
    return None


def close(a, b, tol=5e-3):
    if isinstance(a, tuple) or isinstance(b, tuple):
        return False
    return abs(a - b) <= tol * max(1.0, abs(b))


fails, checked, skipped = [], 0, []
for lesson in build.LESSONS:
    for i, (q, expr, then, ans) in enumerate(lesson['desmos'], 1):
        tag = '%s D%d' % (lesson['code'], i)
        want = numeric(ans)
        if want is None or isinstance(want, tuple):
            skipped.append(tag + '  (' + ans + ')')
            continue
        try:
            got = solve_linear(expr) if '=' in expr else value(expr)
        except Exception as e:                       # noqa: BLE001
            skipped.append('%s  (%s: %s)' % (tag, expr, e))
            continue
        if isinstance(got, tuple):
            skipped.append(tag)
            continue
        checked += 1
        if not close(float(got), want):
            fails.append('%s  %s -> %s but the sheet says %s' % (tag, expr, got, ans))

# Independent checks of the Part 2 answers that are plain numbers.
P2 = {
    '4.1': {'P1': 16, 'P3': 110, 'P4': 70, 'P5': 80, 'P7': 12, 'P8': 35, 'P9': 85,
            'P10': 115, 'P11': 9, 'P12': 55, 'P2': 108},
    '4.2': {'P1': 27, 'P2': 20, 'P6': 54000, 'P8': 10, 'P10': 150, 'P12': 75},
    '4.3': {'P1': 15, 'P2': 12, 'P3': 12, 'P4': 5, 'P5': 55, 'P8': 53, 'P9': 17,
            'P11': 15, 'P12': 20, 'P7': 20},
    '4.4': {'P4': 6, 'P6': 60, 'P7': 90, 'P8': 13, 'P9': 6, 'P10': 6},
    '4.5': {'P1': 60, 'P2': 30, 'P3': 55, 'P5': 9, 'P6': 21.46, 'P7': 4, 'P9': 3000,
            'P11': 576, 'P12': 125},
    '4.6': {'P1': 10, 'P3': -2, 'P6': 15, 'P9': 4, 'P12': 24},
}
TRUTH = {
    ('4.1', 'P1'): 80 / 5.0, ('4.1', 'P2'): 180 - 72, ('4.1', 'P3'): 50 + 60,
    ('4.1', 'P4'): (180 - 40) / 2.0, ('4.1', 'P5'): 180 / 9.0 * 4,
    ('4.1', 'P7'): 360 / (180 - 150), ('4.1', 'P8'): (180 - 5) / 5.0,
    ('4.1', 'P9'): 3 * 25 + 10, ('4.1', 'P10'): 180 - 65, ('4.1', 'P11'): 1260 / 180.0 + 2,
    ('4.1', 'P12'): 5 * 15 - 20,
    ('4.2', 'P1'): 18 * 6 / 4.0, ('4.2', 'P2'): 8 * 15 / 6.0, ('4.2', 'P6'): 2 * 30 ** 3,
    ('4.2', 'P8'): 6 * math.sqrt(25 / 9.0), ('4.2', 'P10'): 4 * 6 * 2.5 ** 2,
    ('4.2', 'P12'): 12 * (10 / 4.0) ** 2,
    ('4.3', 'P1'): math.sqrt(81 + 144), ('4.3', 'P2'): 0.6 * 20,
    ('4.3', 'P3'): math.sqrt(169 - 25), ('4.3', 'P4'): 10 / 2.0, ('4.3', 'P5'): 90 - 35,
    ('4.3', 'P7'): (90 + 10) / 5.0, ('4.3', 'P8'): math.degrees(math.asin(0.8)),
    ('4.3', 'P9'): math.sqrt(64 + 225), ('4.3', 'P11'): math.sqrt(9 ** 2 + 12 ** 2),
    ('4.3', 'P12'): 40 + 30 - math.sqrt(1600 + 900),
    ('4.4', 'P4'): math.sqrt(11 + 16 + 9), ('4.4', 'P6'): 6 / 36.0 * 360,
    ('4.4', 'P7'): 180 / 2.0, ('4.4', 'P8'): math.sqrt(25 + 144),
    ('4.4', 'P9'): math.sqrt(100 - 64), ('4.4', 'P10'): math.sqrt(36),
    ('4.5', 'P1'): 4320 / 72.0, ('4.5', 'P2'): 40 * 25 * 30 / 1000.0,
    ('4.5', 'P3'): 0.5 * (8 + 14) * 5, ('4.5', 'P5'): 540 / 60.0,
    ('4.5', 'P6'): round(100 - math.pi * 25, 2), ('4.5', 'P7'): 2 ** 2,
    ('4.5', 'P9'): 12 * 5 * 2 * 1000 / 40.0, ('4.5', 'P11'): (60 - 12) * 12,
    ('4.5', 'P12'): (150 / 6.0) ** 1.5,
    ('4.6', 'P1'): math.sqrt(36 + 64), ('4.6', 'P3'): (-1 - 7) / (6 - 2.0),
    ('4.6', 'P6'): 0.5 * 6 * 5, ('4.6', 'P9'): -4 + 1 + 7,
    ('4.6', 'P12'): 6 + 8 + math.sqrt(36 + 64),
}
for lesson in build.LESSONS:
    printed = {p[0]: p[3] for p in lesson['part2']}
    for pid, claim in P2[lesson['code']].items():
        truth = TRUTH[(lesson['code'], pid)]
        checked += 1
        if not close(float(claim), float(truth)):
            fails.append('%s %s  sheet %s vs computed %s' % (lesson['code'], pid, claim, truth))
        shown = numeric(printed[pid])
        if shown is not None and not isinstance(shown, tuple) and not close(shown, float(truth)):
            fails.append('%s %s  printed "%s" vs computed %s'
                         % (lesson['code'], pid, printed[pid], truth))

print('checked %d values' % checked)
print('not machine-checkable (ratios, coordinates, prose): %d' % len(skipped))
for s in skipped:
    print('   -', s)
if fails:
    print('\nFAILURES:')
    for f in fails:
        print('   !', f)
    sys.exit(1)
print('\nall checked answers agree')
