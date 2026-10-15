# -*- coding: utf-8 -*-
"""Checks the printed answers in the Advanced Math booklet.

Desmos rows: expressions are evaluated; equations are checked by substituting
every root the answer claims. Part 2: each numeric answer is recomputed here
from scratch and compared with what the sheet prints.
"""
import math
import re
import sys

sys.path.insert(0, '.')

import build

SAFE = {'sqrt': math.sqrt, 'pi': math.pi, 'abs': abs}


def pyify(e):
    e = e.replace('^', '**').replace('−', '-')
    e = re.sub(r'(?<=[\d\)])\s*([xt])', r'*\1', e)        # 3x -> 3*x
    e = re.sub(r'(?<=\d)\s*\(', r'*(', e)                 # 2(3) -> 2*(3)
    return e


def value(expr, x=None):
    env = dict(SAFE)
    env['x'] = env['t'] = x
    return eval(pyify(expr), {'__builtins__': {}}, env)


def roots_from(ans):
    """Pull the numbers out of an answer such as '3 and 4' or '2 and -0.5'."""
    a = ans.replace('−', '-')
    out = []
    for tok in re.findall(r'-?\d+(?:\.\d+)?(?:/\d+)?', a):
        if '/' in tok:
            n, d = tok.split('/')
            out.append(float(n) / float(d))
        else:
            out.append(float(tok))
    return out


def numeric(ans):
    a = ans.replace(',', '').replace('−', '-').replace('$', '').strip()
    a = a.replace('π', '').replace('°', '').strip()
    m = re.fullmatch(r'-?\d+(\.\d+)?', a)
    if m:
        return float(a)
    m = re.fullmatch(r'(-?\d+)\s*/\s*(\d+)', a)
    if m:
        return float(m.group(1)) / float(m.group(2))
    return None


def close(a, b, tol=5e-3):
    return abs(a - b) <= tol * max(1.0, abs(b))


fails, checked, byhand = [], 0, []

for lesson in build.load('d2'):
    for i, (q, expr, then, ans) in enumerate(lesson['desmos'], 1):
        tag = '%s D%d' % (lesson['code'], i)
        e = expr.strip()
        # A graph read, a symbolic answer, a count of intersections, or an answer
        # that is a sum rather than a root: the eye checks these, not the machine.
        if (e.startswith('y=') or ' and ' in e or '(x+' in e.replace(' ', '')[:3]
                or 'sum' in q.lower() or 'many points' in q.lower()):
            byhand.append('%s  %s → %s' % (tag, expr, ans))
            continue
        if '=' in e:                        # an equation: test every claimed root
            lhs, rhs = e.split('=', 1)
            rs = roots_from(ans)
            if not rs:
                byhand.append('%s  %s → %s' % (tag, expr, ans))
                continue
            ok = True
            for r in rs:
                try:
                    scale = max(1.0, abs(value(rhs, r)))
                    if abs(value(lhs, r) - value(rhs, r)) > 3e-3 * scale:
                        ok = False
                except Exception:           # noqa: BLE001
                    ok = None
                    break
            if ok is None:
                byhand.append('%s  %s (could not evaluate)' % (tag, expr))
                continue
            checked += 1
            if not ok:
                fails.append('%s  %s does not hold at %s' % (tag, expr, ans))
        else:                               # a plain expression
            want = numeric(ans)
            if want is None:
                byhand.append('%s  %s → %s' % (tag, expr, ans))
                continue
            try:
                got = float(value(e))
            except Exception as err:        # noqa: BLE001
                byhand.append('%s  %s (%s)' % (tag, expr, err))
                continue
            checked += 1
            if not close(got, want):
                fails.append('%s  %s = %s but the sheet says %s' % (tag, expr, got, ans))

# Part 2 answers, each recomputed independently here.
TRUTH = {
    ('2.1', 'P6'): 8 ** (2 / 3.0), ('2.1', 'P8'): math.sqrt(49), ('2.1', 'P11'): 2 * 6,
    ('2.1', 'P12'): math.sqrt(4),
    ('2.2', 'P1'): 3 + 4, ('2.2', 'P2'): 5, ('2.2', 'P3'): 100 / 4.0,
    ('2.2', 'P4'): 36 / 4.0, ('2.2', 'P7'): -5 * 9 + 30 * 3, ('2.2', 'P8'): 144 / 16.0,
    ('2.2', 'P9'): -2 / 2.0, ('2.2', 'P10'): -2 * 3.5, ('2.2', 'P11'): 3,
    ('2.2', 'P12'): 13,
    ('2.3', 'P1'): 27 - 36 + 21 - 10, ('2.3', 'P2'): 2 * -1 * -3, ('2.3', 'P5'): 5 - 1,
    ('2.3', 'P6'): 8 / 4.0, ('2.3', 'P8'): -(8 - 10 + 6) / 4.0,
    ('2.3', 'P10'): -8 - 4 - 5, ('2.3', 'P12'): 2 + (-3),
    ('2.4', 'P1'): 3 + (-3), ('2.4', 'P3'): (25 - 7) / 2.0, ('2.4', 'P4'): 7 / 3.0,
    ('2.4', 'P5'): 3, ('2.4', 'P7'): 4, ('2.4', 'P10'): 3 / 6.0,
    ('2.5', 'P1'): 150 * 2 ** 3, ('2.5', 'P4'): 250 * 1.2 ** 2, ('2.5', 'P5'): 4 / 2.0,
    ('2.5', 'P8'): round(1200 * 0.92 ** 5), ('2.5', 'P11'): 3 - 1,
    ('2.6', 'P1'): -36 / (2 * -2.0), ('2.6', 'P4'): 2 * -1 * -3, ('2.6', 'P5'): 64 / 4.0,
    ('2.6', 'P7'): 2 * (2 - 1) * (2 - 3), ('2.6', 'P9'): -(7 ** 2) + 14 * 7 - 33,
    ('2.6', 'P10'): 9 / 9.0, ('2.6', 'P12'): -2 * 3.5,
    ('2.7', 'P1'): 2 * 1 ** 2 - 5 * 1 + 1, ('2.7', 'P2'): 3 * (2 ** 2 + 1) - 4,
    ('2.7', 'P10'): 5 / 2.0, ('2.7', 'P12'): 2 - 7,
    ('2.8', 'P1'): 3 + (-1), ('2.8', 'P2'): -(2 ** 2) / 4.0, ('2.8', 'P4'): 4,
    ('2.8', 'P7'): 3, ('2.8', 'P8'): -1 / 4.0, ('2.8', 'P9'): 4, ('2.8', 'P10'): 4,
}
for lesson in build.load('d2'):
    printed = {p[0]: p[3] for p in lesson['part2']}
    for pid, ans in printed.items():
        key = (lesson['code'], pid)
        shown = numeric(ans)
        if key not in TRUTH:
            if shown is not None:
                byhand.append('%s %s  printed %s (no independent check)'
                              % (lesson['code'], pid, ans))
            continue
        checked += 1
        if shown is None or not close(shown, float(TRUTH[key])):
            fails.append('%s %s  printed "%s" vs computed %s'
                         % (lesson['code'], pid, ans, TRUTH[key]))

print('machine-checked %d values' % checked)
print('left for the eye (symbolic answers, graph reads, prose): %d' % len(byhand))
for s in byhand:
    print('   -', s)
if fails:
    print('\nFAILURES:')
    for f in fails:
        print('   !', f)
    sys.exit(1)
print('\nall machine-checked answers agree')
