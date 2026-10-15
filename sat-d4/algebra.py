# -*- coding: utf-8 -*-
"""Pictures for algebra: area models, rule panels, check tables and step chains.

plot.py draws graphs; this draws the non-graph pictures the Advanced Math
booklet needs — the ones that make an algebraic step visible.
"""
from svgbase import (AMBER, FAINT, FILLB, FILLG, FILLR, GREEN, GREY, INK, RED,
                     arrow, circ, dot, fmt, line, path, poly, svg, txt, val)

PALE = '#eef3fa'


# ---------------------------------------------------------------- area models

def area_model(top=('x', '+ 2'), side=('x', '+ 3'), cells=(('x²', '2x'), ('3x', '6')),
               result='x² + 5x + 6', widths=None, heights=None, w=300, h=190,
               fills=None):
    """A rectangle cut into pieces: every product in the expansion, in view."""
    widths = widths or [70, 44]
    heights = heights or [70, 40]
    ox, oy = 58, 44
    fills = fills or [[FILLB, FILLG], [FILLG, '#fdf3e0']]
    body = ''
    y = oy
    for r, hgt in enumerate(heights):
        x = ox
        for c, wid in enumerate(widths):
            body += poly([(x, y), (x + wid, y), (x + wid, y + hgt), (x, y + hgt)],
                         fill=fills[r][c], stroke=INK, w=1.4)
            body += val(x + wid / 2, y + hgt / 2, cells[r][c], color=INK, size=10.5)
            x += wid
        y += hgt
    x = ox
    for c, wid in enumerate(widths):
        body += val(x + wid / 2, oy - 13, top[c], color=GREEN)
        x += wid
    y = oy
    for r, hgt in enumerate(heights):
        body += val(ox - 16, y + hgt / 2, side[r], color=GREEN)
        y += hgt
    if result:
        body += val(w / 2, h - 12, result, color=RED, size=10.5)
    return svg(w, h, body)


def gcf_box(terms=('6x³', '9x²'), gcf='3x²', inside=('2x', '+ 3'),
            w=330, h=150):
    """The greatest common factor lifted out in front of the bracket."""
    body = val(28, 36, 'each term:', color=FAINT, anchor='start', size=9.5)
    for i, t in enumerate(terms):
        body += poly([(28 + i * 96, 48), (108 + i * 96, 48), (108 + i * 96, 84), (28 + i * 96, 84)],
                     fill=FILLB, stroke=INK, w=1.4)
        body += val(68 + i * 96, 66, t, color=INK)
        body += val(68 + i * 96, 100, 'has ' + gcf, color=GREEN, size=9)
    body += arrow((226, 66), (258, 66), stroke=GREEN, w=1.5)
    body += poly([(266, 48), (316, 48), (316, 84), (266, 84)], fill=FILLG, stroke=GREEN, w=1.4)
    body += val(291, 66, gcf, color=GREEN)
    body += val(w / 2, 128, '%s(%s %s)' % (gcf, inside[0], inside[1]), color=RED, size=11)
    return svg(w, h, body)


def diff_squares(a='3x', b='5', w=320, h=165):
    """a squared minus b squared as a square with a smaller square removed."""
    ox, oy, S, s = 44, 36, 88.0, 40.0
    body = poly([(ox, oy), (ox + S, oy), (ox + S, oy + S), (ox, oy + S)], fill=FILLB)
    body += poly([(ox + S - s, oy + S - s), (ox + S, oy + S - s), (ox + S, oy + S),
                  (ox + S - s, oy + S)], fill='#fff', stroke=RED, w=1.6, dash='5 4')
    body += val(ox + S / 2 - 16, oy + S / 2 - 12, '%s²' % a, color=INK)
    body += val(ox + S - s / 2, oy + S - s / 2, '%s²' % b, color=RED, size=9.5)
    body += val(ox + S / 2, oy - 13, a, color=GREEN)
    body += val(ox - 14, oy + S / 2, a, color=GREEN)
    body += val(196, 56, '%s² − %s²' % (a, b), color=INK, anchor='start')
    body += val(196, 82, '= (%s − %s)(%s + %s)' % (a, b, a, b), color=RED, anchor='start')
    body += txt(196, 108, 'the leftover L-shape', size=9, color=FAINT, anchor='start',
                weight='700')
    body += txt(196, 121, 'rearranges into that', size=9, color=FAINT, anchor='start',
                weight='700')
    body += txt(196, 134, 'rectangle', size=9, color=FAINT, anchor='start', weight='700')
    return svg(w, h, body)


def trinomial_split(b=-7, c=12, pair=(-3, -4),
                    pairs=((-1, -12), (-2, -6), (-3, -4)), w=330, h=None):
    """Factor pairs of c, with the one that adds to b picked out."""
    h = h or (56 + len(pairs) * 26)
    body = val(165, 20, 'two numbers that multiply to %s and add to %s' % (fmt(c), fmt(b)),
               color=INK)
    y = 44
    for (pp, qq) in pairs:                 # pairs are given already signed
        hot = tuple(sorted((pp, qq))) == tuple(sorted(pair))
        colour = RED if hot else GREY
        body += val(96, y, '%g × %g = %g' % (pp, qq, pp * qq), color=colour,
                    anchor='end', size=10)
        body += val(116, y, '→', color=colour, size=10)
        body += val(136, y, '%g + %g = %g' % (pp, qq, pp + qq), color=colour,
                    anchor='start', size=10)
        if hot:
            body += poly([(20, y - 11), (248, y - 11), (248, y + 11), (20, y + 11)],
                         fill='none', stroke=RED, w=1.4)
            body += val(258, y, '✓', color=RED, anchor='start')
        y += 26
    body += val(165, h - 16, '= (x %s)(x %s)'
                % (('+ %g' % pair[0]) if pair[0] > 0 else ('\u2212 %g' % -pair[0]),
                   ('+ %g' % pair[1]) if pair[1] > 0 else ('\u2212 %g' % -pair[1])),
                color=RED, size=11)
    return svg(w, h, body)


def perfect_square(a='x', b='5', w=300, h=175):
    """(a + b) squared as a square split into four pieces."""
    ox, oy, A, B = 56, 40, 76.0, 36.0
    body = poly([(ox, oy), (ox + A, oy), (ox + A, oy + A), (ox, oy + A)], fill=FILLB)
    body += poly([(ox + A, oy), (ox + A + B, oy), (ox + A + B, oy + A), (ox + A, oy + A)],
                 fill=FILLG, stroke=INK, w=1.4)
    body += poly([(ox, oy + A), (ox + A, oy + A), (ox + A, oy + A + B), (ox, oy + A + B)],
                 fill=FILLG, stroke=INK, w=1.4)
    body += poly([(ox + A, oy + A), (ox + A + B, oy + A), (ox + A + B, oy + A + B),
                  (ox + A, oy + A + B)], fill='#fdf3e0', stroke=INK, w=1.4)
    body += val(ox + A / 2, oy + A / 2, '%s²' % a, color=INK)
    body += val(ox + A + B / 2, oy + A / 2, '%s%s' % (b, a), color=GREEN, size=9.5)
    body += val(ox + A / 2, oy + A + B / 2, '%s%s' % (b, a), color=GREEN, size=9.5)
    body += val(ox + A + B / 2, oy + A + B / 2, '%s²' % b, color=AMBER, size=9.5)
    body += val(ox + A / 2, oy - 13, a, color=GREEN)
    body += val(ox + A + B / 2, oy - 13, '+ ' + b, color=GREEN)
    body += val(w / 2, h - 12, '(%s + %s)² = %s² + 2(%s)(%s) + %s²'
                % (a, b, a, a, b, b), color=RED, size=10)
    return svg(w, h, body)


# ---------------------------------------------------------------- rule panels

def rules_panel(rows=(('xᵐ·xⁿ = xᵐ⁺ⁿ', '2³·2⁴ = 2⁷'),),
                title=None, w=330, h=None, colour=INK):
    """A rule and a worked instance of it, one per row."""
    h = h or (34 + len(rows) * 28 + (18 if title else 0))
    body = ''
    y = 30 if not title else 46
    if title:
        body += val(w / 2, 18, title, color=FAINT)
    for (rule, demo) in rows:
        body += poly([(16, y - 13), (w - 16, y - 13), (w - 16, y + 13), (16, y + 13)],
                     fill=PALE, stroke='#d4dde8', w=1)
        body += val(26, y, rule, color=colour, anchor='start', size=10.5)
        body += val(w - 26, y, demo, color=GREEN, anchor='end', size=10)
        y += 28
    return svg(w, h, body)


def radical_power(base=8, m=2, n=3, w=330, h=130):
    """The order that keeps the numbers small: root first, then power."""
    steps = ['%g^(%g/%g)' % (base, m, n),
             '(∛%g)²' % base if n == 3 else '(%g^(1/%g))^%g' % (base, n, m),
             '%g²' % round(base ** (1.0 / n)),
             '%g' % round(base ** (m / float(n)))]
    body = val(w / 2, 20, 'denominator = root, numerator = power', color=FAINT)
    x = 30
    for i, s in enumerate(steps):
        wid = 58 if i < 3 else 46
        colour = RED if i == len(steps) - 1 else INK
        body += poly([(x, 48), (x + wid, 48), (x + wid, 84), (x, 84)],
                     fill=FILLG if i == len(steps) - 1 else FILLB, stroke=colour, w=1.4)
        body += val(x + wid / 2, 66, s, color=colour, size=10.5)
        if i < len(steps) - 1:
            body += arrow((x + wid + 4, 66), (x + wid + 22, 66), stroke=GREY)
        x += wid + 26
    body += txt(w / 2, 108, 'take the root first — the power of a small number is easier',
                size=9, color=FAINT, weight='700')
    return svg(w, h, body)


def percent_factor(rises=(15, 7), falls=(8, 12), w=330, h=150):
    """Per cent to multiplier, in both directions."""
    body = val(165, 20, 'the percentage is the distance from 1, never the base',
               color=FAINT)
    y = 46
    for r in rises:
        body += val(84, y, 'rise of %g%%' % r, color=GREEN, anchor='end')
        body += arrow((92, y), (124, y), stroke=GREEN)
        body += val(190, y, 'b = 1 + %.2f = %.2f' % (r / 100.0, 1 + r / 100.0),
                    color=GREEN, anchor='start')
        y += 26
    for f in falls:
        body += val(84, y, 'fall of %g%%' % f, color=RED, anchor='end')
        body += arrow((92, y), (124, y), stroke=RED)
        body += val(190, y, 'b = 1 − %.2f = %.2f' % (f / 100.0, 1 - f / 100.0),
                    color=RED, anchor='start')
        y += 26
    return svg(w, h, body)


def time_unit(base=0.88, n=12, unit='month', w=340, h=160):
    """Changing the time unit: root the base, multiply the exponent."""
    body = val(170, 20, 'one year = %g %ss' % (n, unit), color=FAINT)
    body += poly([(24, 46), (150, 46), (150, 84), (24, 84)], fill=FILLB, stroke=INK, w=1.4)
    body += val(87, 65, 'V = a·(%g)ᵗ' % base, color=INK)
    body += val(87, 100, 'per year', color=FAINT, size=9)
    body += arrow((158, 65), (196, 65), stroke=GREEN, w=1.5)
    body += poly([(204, 46), (330, 46), (330, 84), (204, 84)], fill=FILLG, stroke=GREEN, w=1.4)
    body += val(267, 65, 'a·((%g)^(1/%g))^%gt' % (base, n, n), color=GREEN, size=10)
    body += val(267, 100, 'per %s' % unit, color=FAINT, size=9)
    body += val(170, 128, 'base → its %g-th root; exponent → ×%g, both at once'
                % (n, n), color=RED, size=10)
    body += val(170, 146, '(%g)^(1/%g) ≈ %.4f' % (base, n, base ** (1.0 / n)),
                color=FAINT, size=9.5)
    return svg(w, h, body)


def diff_ratio_table(xs=(0, 1, 2, 3), ys=(5, 8, 11, 14), kind='linear', w=330, h=165):
    """Test a table both ways: equal differences or equal ratios."""
    body = ''
    cw = 56
    ox = 44
    for i, (x, y) in enumerate(zip(xs, ys)):
        body += poly([(ox + i * cw, 40), (ox + (i + 1) * cw, 40), (ox + (i + 1) * cw, 66),
                      (ox + i * cw, 66)], fill=PALE, stroke='#d4dde8', w=1)
        body += val(ox + i * cw + cw / 2, 53, '%g' % y, color=INK)
        body += val(ox + i * cw + cw / 2, 28, 'x = %g' % x, color=FAINT, size=9)
    for i in range(len(ys) - 1):
        mx = ox + i * cw + cw
        d = ys[i + 1] - ys[i]
        r = ys[i + 1] / float(ys[i])
        body += val(mx, 86, '+%g' % d, color=GREEN if kind == 'linear' else FAINT, size=9.5)
        body += val(mx, 106, '×%g' % round(r, 2),
                    color=GREEN if kind == 'exponential' else FAINT, size=9.5)
    body += val(22, 86, 'differences', color=GREEN if kind == 'linear' else FAINT,
                anchor='start', size=9)
    body += val(22, 106, 'ratios', color=GREEN if kind == 'exponential' else FAINT,
                anchor='start', size=9)
    verdict = ('equal differences → linear' if kind == 'linear'
               else 'equal ratios → exponential')
    body += val(w / 2, 136, verdict, color=RED, size=10.5)
    return svg(w, h, body)


# ---------------------------------------------------------------- flows & checks

def flow(steps=('step', 'step'), note=None, colours=None, w=340, h=None, wide=None):
    """A left-to-right chain of boxes, one per step."""
    n = len(steps)
    if wide is None:                      # size each box to the text it holds
        want = [max(len(s) * 5.6 + 18, 54) for s in steps]
        room = w - 40 - 22 * (n - 1)
        scale = min(1.0, room / float(sum(want)))
        wide = [x * scale for x in want]
    h = h or (118 if note else 96)
    colours = colours or ([INK] * (n - 1) + [RED])
    body = ''
    x = 20
    for i, s in enumerate(steps):
        c = colours[i]
        body += poly([(x, 34), (x + wide[i], 34), (x + wide[i], 74), (x, 74)],
                     fill=FILLG if c == RED else FILLB, stroke=c, w=1.4)
        body += val(x + wide[i] / 2, 54, s, color=c,
                    size=min(10.0, wide[i] / (len(s) * 0.52 + 0.1)))
        if i < n - 1:
            body += arrow((x + wide[i] + 3, 54), (x + wide[i] + 19, 54), stroke=GREY)
        x += wide[i] + 22
    if note:
        body += val(w / 2, 98, note, color=FAINT, size=9.5)
    return svg(w, h, body)


def check_table(rows=(('x = 1', '√9 = 3 against 1 − 4 = −3', False),
                      ('x = 9', '√25 = 5 against 9 − 4 = 5', True)),
                title='substitute each candidate back into the original', w=340, h=None):
    """Candidate solutions, each checked and kept or thrown out."""
    h = h or (46 + len(rows) * 34)
    body = val(w / 2, 20, title, color=FAINT)
    y = 44
    for (cand, test, keep) in rows:
        colour = GREEN if keep else RED
        body += poly([(18, y), (w - 18, y), (w - 18, y + 28), (18, y + 28)],
                     fill=FILLG if keep else FILLR, stroke=colour, w=1.3)
        body += val(32, y + 14, cand, color=colour, anchor='start')
        body += val(w / 2 + 14, y + 14, test, color=GREY, size=9.5)
        body += val(w - 32, y + 14, '✓ keep' if keep else '✗ reject',
                    color=colour, anchor='end', size=9.5)
        y += 34
    return svg(w, h, body)


def number_line(excluded=(1,), ray=None, xmin=-4, xmax=8, label=None, w=330, h=92,
                mark=()):
    """Allowed and forbidden values of x."""
    y = 44
    x0, x1 = 26, 304
    sc = (x1 - x0) / float(xmax - xmin)

    def X(v):
        return x0 + (v - xmin) * sc

    body = line((x0, y), (x1, y), stroke='#6b7884', w=1.4)
    for v in range(xmin, xmax + 1):
        big = v % 2 == 0
        body += line((X(v), y - (5 if big else 3)), (X(v), y + (5 if big else 3)),
                     stroke='#6b7884', w=1.1)
        if big:
            body += txt(X(v), y + 16, str(v), size=8.5, color=FAINT)
    if ray:
        a, closed = ray
        body += line((X(a), y), (x1, y), stroke=GREEN, w=4)
        body += circ((X(a), y), 4.6, fill=GREEN if closed else '#fff', stroke=GREEN, w=2)
    for e in excluded:
        body += circ((X(e), y), 4.8, fill='#fff', stroke=RED, w=2.2)
        body += line((X(e) - 4, y - 4), (X(e) + 4, y + 4), stroke=RED, w=1.6)
        body += line((X(e) + 4, y - 4), (X(e) - 4, y + 4), stroke=RED, w=1.6)
        body += val(X(e), y - 16, 'x ≠ %g' % e, color=RED, size=9.5)
    for m in mark:
        body += dot((X(m), y), 4.4, GREEN)
    if label:
        body += val(w / 2, 18, label, color=INK, size=10.5)
    return svg(w, h, body)


def composition(outer='f(x) = 2x² − 5x + 1', inner='g(x) = x − 3', start=4,
                mid=1, end=-2, w=340, h=150, onm='f', inm='g'):
    """f(g(4)): inner box first, then the outer one."""
    body = val(170, 18, 'inside out: %s first, then %s' % (inm, onm), color=FAINT)
    body += val(28, 58, 'x = %s' % fmt(start), color=GREY, anchor='start')
    body += arrow((66, 58), (92, 58), stroke=GREY)
    body += poly([(96, 38), (196, 38), (196, 78), (96, 78)], fill=FILLB, stroke=INK, w=1.4)
    body += val(146, 58, inner, color=INK, size=9.5)
    body += arrow((200, 58), (226, 58), stroke=GREEN)
    body += val(213, 42, fmt(mid), color=GREEN, size=9)
    body += poly([(230, 38), (330, 38), (330, 78), (230, 78)], fill=FILLG, stroke=GREEN, w=1.4)
    body += val(280, 58, outer, color=GREEN, size=9)
    body += val(170, 104, '%s(%s(%s)) = %s(%s) = %s'
                % (onm, inm, fmt(start), onm, fmt(mid), fmt(end)), color=RED, size=11)
    body += val(170, 128, '%s(%s(%s)) asks a different question' % (inm, onm, fmt(start)),
                color=FAINT, size=9)
    return svg(w, h, body)


def equiv_ring(items=('p(a) = 0', '(x − a) is a factor', 'a is a zero',
                      '(a, 0) is on the graph'), w=340, h=150):
    """Four ways of saying the same thing, joined in a ring."""
    body = val(170, 18, 'four words, one fact', color=FAINT)
    xs = [(22, 46), (190, 46), (22, 96), (190, 96)]
    for (x, y), t in zip(xs, items):
        body += poly([(x, y), (x + 128, y), (x + 128, y + 32), (x, y + 32)],
                     fill=FILLB, stroke=INK, w=1.4)
        body += val(x + 64, y + 16, t, color=INK, size=9.5)
    body += val(170, 64, '⇔', color=RED, size=14)
    body += val(170, 114, '⇔', color=RED, size=14)
    body += val(90, 88, '⇕', color=RED, size=14)
    body += val(256, 88, '⇕', color=RED, size=14)
    return svg(w, h, body)


def division_identity(divisor='x − 1', quotient='x + 4', remainder='3',
                      result='x² + 3x − 1', w=340, h=130):
    """p(x) = (divisor)(quotient) + remainder, as blocks."""
    body = val(170, 20, 'reassemble instead of dividing again', color=FAINT)
    body += val(20, 58, 'p(x) =', color=INK, anchor='start')
    xs = [(64, 96, divisor, FILLB, INK), (168, 96, quotient, FILLB, INK),
          (282, 42, remainder, FILLG, GREEN)]
    for (x, wid, t, fill, colour) in xs:
        body += poly([(x, 40), (x + wid, 40), (x + wid, 76), (x, 76)], fill=fill,
                     stroke=colour, w=1.4)
        body += val(x + wid / 2, 58, t, color=colour, size=10)
    body += val(272, 58, '+', color=GREY)
    body += val(170, 104, '= %s' % result, color=RED, size=11)
    return svg(w, h, body)


def cancel_fraction(num=('(x − 3)', '(x + 3)'), den=('(x + 3)',), keep='x − 3',
                    note='x ≠ −3', w=320, h=150):
    """Factor top and bottom, then cancel the common factor."""
    body = val(160, 20, 'cancel a factor, never a term', color=FAINT)
    y = 56
    x = 70
    for t in num:
        body += val(x, y, t, color=INK)
        if t == den[0]:
            body += line((x - 26, y + 12), (x + 26, y - 12), stroke=RED, w=1.8)
        x += 66
    body += line((40, y + 20), (x - 34, y + 20), stroke=INK, w=1.6)
    x2 = 70
    for t in den:
        body += val(x2, y + 40, t, color=INK)
        body += line((x2 - 26, y + 52), (x2 + 26, y + 28), stroke=RED, w=1.8)
        x2 += 66
    body += val(238, y + 20, '= %s' % keep, color=RED, anchor='start', size=11)
    body += val(238, y + 42, note, color=FAINT, anchor='start', size=9)
    return svg(w, h, body)
