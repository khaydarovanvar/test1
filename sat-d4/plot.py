# -*- coding: utf-8 -*-
"""Function graphs for the Advanced Math booklet.

shapes.py draws figures; this draws curves. One sampler, one axes helper and a
handful of generators built on them, so a graph is a single call with the
numbers from the question.
"""
from math import floor, hypot, isfinite, log10, sqrt

from shapes import coord_lines  # the grid-with-lines figure, shared with D4
from svgbase import (AMBER, FAINT, FILLB, FILLG, FILLR, GREEN, GREY, INK, RED,
                     Axes, arrow, circ, dot, fmt, line, path, poly, svg, txt,
                     val)


def nice_step(span, target=8):
    """A round grid step giving roughly `target` divisions across `span`."""
    if span <= 0:
        return 1
    raw = span / float(target)
    mag = 10 ** floor(log10(raw))
    for m in (1, 2, 5, 10):
        if raw <= mag * m:
            return mag * m
    return mag * 10


def sample(ax, f, n=240, xmin=None, xmax=None):
    """Sample y = f(x) across the axes, splitting the curve wherever it leaves
    the window or blows up, so an asymptote never draws a spurious vertical."""
    a = ax.xmin if xmin is None else xmin
    b = ax.xmax if xmax is None else xmax
    pads = (ax.ymax - ax.ymin) * 0.08
    lo, hi = ax.ymin - pads, ax.ymax + pads
    runs, cur, prev = [], [], None
    for i in range(n + 1):
        x = a + (b - a) * i / float(n)
        try:
            y = f(x)
        except (ZeroDivisionError, ValueError, OverflowError):
            y = None
        ok = y is not None and isfinite(y) and lo <= y <= hi
        if ok and prev is not None and abs(y - prev) > (ax.ymax - ax.ymin) * 0.9:
            ok = False                      # a jump across a vertical asymptote
        if ok:
            cur.append(ax.P(x, y))
            prev = y
        else:
            if len(cur) > 1:
                runs.append(cur)
            cur, prev = [], None
    if len(cur) > 1:
        runs.append(cur)
    return runs


def curve(ax, f, colour=INK, w=2.2, dash=None, n=240, xmin=None, xmax=None):
    out = ''
    for run in sample(ax, f, n=n, xmin=xmin, xmax=xmax):
        out += poly(run, fill='none', stroke=colour, w=w, dash=dash, closed=False)
    return out


def graph(fns=(), w=300, h=205, xmin=-5, xmax=5, ymin=-5, ymax=5, tick_every=2,
          points=(), vlines=(), hlines=(), label=None, notes=(), box=None,
          step=1, legend_at='top', xstep=None, ystep=None, xtick_every=None,
          ytick_every=None):
    """A labelled set of axes carrying one or more curves.

    fns     — (callable, colour, legend) triples
    points  — (x, y, text, colour) markers
    vlines  — (x, colour, text) dashed verticals, for asymptotes and axes of symmetry
    hlines  — (y, colour, text) dashed horizontals
    notes   — (x_px, y_px, text, colour) free annotations in user units
    """
    # A wide axis gets a round grid step, or the labels pile into a grey band.
    if xstep is None and (xmax - xmin) > 24:
        xstep = nice_step(xmax - xmin)
        xtick_every = xtick_every or xstep * 2
    if ystep is None and (ymax - ymin) > 24:
        ystep = nice_step(ymax - ymin)
        ytick_every = ytick_every or ystep * 2
    top = 30 if label else 16
    ax = Axes(40, top, w - 68, h - top - 24, xmin, xmax, ymin, ymax, step=step,
              tick_every=tick_every, xstep=xstep, ystep=ystep,
              xtick_every=xtick_every, ytick_every=ytick_every)
    body = ax.draw()
    for (x, colour, text) in vlines:
        body += line(ax.P(x, ymin), ax.P(x, ymax), stroke=colour, w=1.6, dash='6 4')
        if text:
            body += val(ax.P(x, ymax)[0] + 2, top + 10, text, color=colour, size=9,
                        anchor='start')
    for (y, colour, text) in hlines:
        body += line(ax.P(xmin, y), ax.P(xmax, y), stroke=colour, w=1.6, dash='6 4')
        if text:
            body += val(w - 14, ax.P(xmin, y)[1] - 7, text, color=colour, size=9,
                        anchor='end')
    legends = [(i, c, lg) for i, (f, c, lg) in enumerate(fns) if lg]
    if legends:                             # a plate behind the legend keeps it readable
        wide = max(len(lg) for _, _, lg in legends) * 5.2 + 12
        ly0 = (top + 6) if legend_at == 'top' else (h - 38 - (len(legends) - 1) * 15)
        body += poly([(w - 14 - wide, ly0), (w - 10, ly0), (w - 10, ly0 + len(legends) * 15 + 2),
                      (w - 14 - wide, ly0 + len(legends) * 15 + 2)],
                     fill='rgba(255,255,255,0.86)', stroke='none', w=0)
    for i, (f, colour, legend) in enumerate(fns):
        body += curve(ax, f, colour=colour)
    for n, (i, colour, legend) in enumerate(legends):
        ly = (top + 14 + n * 15) if legend_at == 'top' else (h - 30 - (len(legends) - 1 - n) * 15)
        body += val(w - 14, ly, legend, color=colour, anchor='end', size=9.5)
    for p in points:
        x, y, text, colour = (list(p) + [RED])[:4]
        P = ax.P(x, y)
        body += dot(P, 3.8, colour)
        if text:
            body += val(P[0] + 7, P[1] - 12, text, color=colour, anchor='start', size=9)
    for (x, y, text, colour) in notes:
        P = ax.P(x, y)
        body += val(P[0], P[1], text, color=colour, size=9.5)
    if label:
        body += val(w / 2, 13, label, color=INK, size=10.5)
    return svg(w, h, body)


# ---------------------------------------------------------------- quadratics

def parabola(a=1, h_=2, k=-4, roots=None, w=300, h=215, xmin=-3, xmax=7,
             ymin=-6, ymax=6, label=None, show_axis=True):
    """y = a(x - h)^2 + k, with the vertex, the axis of symmetry and the roots."""
    f = lambda x: a * (x - h_) ** 2 + k
    pts = [(h_, k, None, RED)]
    if roots is None and a and -k / float(a) >= 0:
        d = sqrt(-k / float(a))
        roots = (h_ - d, h_ + d)
    for r in (roots or ()):
        pts.append((r, 0, None, GREEN))
    notes = [(h_, k - (ymax - ymin) * 0.09, 'vertex (%s, %s)' % (fmt(h_), fmt(k)), RED)]
    for r in (roots or ()):
        notes.append((r, (ymax - ymin) * 0.08, 'x = %s' % fmt(r), GREEN))
    return graph([(f, INK, None)], w=w, h=h, xmin=xmin, xmax=xmax, ymin=ymin, ymax=ymax,
                 points=pts, label=label, notes=notes,
                 vlines=((h_, AMBER, 'x = %s' % fmt(h_)),) if show_axis else ())


def discriminant_panels(w=345, h=165):
    """Two roots, one root, none — the three cases of b^2 - 4ac."""
    specs = [(lambda x: x * x - 4, 'b² − 4ac > 0', GREEN, 'two roots'),
             (lambda x: x * x, 'b² − 4ac = 0', AMBER, 'one root'),
             (lambda x: x * x + 3, 'b² − 4ac < 0', RED, 'no real roots')]
    body = ''
    for i, (f, lab, colour, sub) in enumerate(specs):
        ox = 14 + i * 112
        ax = Axes(ox, 34, 92, 86, -3.2, 3.2, -5, 6, step=1, labels=False)
        body += ax.draw()
        body += curve(ax, f, colour=colour)
        body += val(ox + 46, 18, lab, color=colour, size=9)
        body += val(ox + 46, 138, sub, color=GREY, size=9)
    return svg(w, h, body)


# ---------------------------------------------------------------- polynomials

def polynomial(coeffs=(1, 0, -4, 0), roots=(-2, 0, 2), w=310, h=215, xmin=-3.4,
               xmax=3.4, ymin=-8, ymax=8, label=None, multiplicity=None, ystep=None,
               ytick_every=None):
    """A polynomial through its roots, each root marked on the x-axis."""
    def f(x):
        y = 0.0
        for c in coeffs:
            y = y * x + c
        return y

    pts = [(r, 0, 'x = %s' % fmt(r), GREEN) for r in roots]
    notes = ()
    if multiplicity:
        notes = tuple((x, y, t, AMBER) for (x, y, t) in multiplicity)
    span = ymax - ymin
    ystep = ystep or (1 if span <= 20 else 5)
    return graph([(f, INK, None)], w=w, h=h, xmin=xmin, xmax=xmax, ymin=ymin,
                 ymax=ymax, points=pts, label=label, notes=notes, xstep=1, ystep=ystep,
                 xtick_every=1, ytick_every=ytick_every or ystep * 2)


def end_behaviour(w=345, h=170):
    """Which way the ends go: degree parity against the leading sign."""
    specs = [(lambda x: x ** 3 / 6.0, 'odd degree, a > 0', INK),
             (lambda x: -x ** 3 / 6.0, 'odd degree, a < 0', GREEN),
             (lambda x: x ** 4 / 20.0 - 2, 'even degree, a > 0', AMBER),
             (lambda x: -x ** 4 / 20.0 + 2, 'even degree, a < 0', RED)]
    body = ''
    for i, (f, lab, colour) in enumerate(specs):
        ox = 10 + i * 84
        ax = Axes(ox, 30, 68, 92, -3.4, 3.4, -5, 5, step=1, labels=False)
        body += ax.draw()
        body += curve(ax, f, colour=colour)
        body += val(ox + 34, 140, lab.split(',')[0], color=colour, size=8.5)
        body += val(ox + 34, 152, lab.split(',')[1].strip(), color=colour, size=8.5)
    body += val(172, 16, 'the ends are decided by the degree and the leading sign',
                color=FAINT)
    return svg(w, h, body)


# ---------------------------------------------------------------- exponentials

def exponential(a=3, b=2, w=300, h=210, xmin=-1, xmax=5, ymin=-1, ymax=30,
                tick_every=1, label=None, points=(), decay=False, ystep=None,
                ytick_every=None):
    """y = a*b^x, with the y-intercept and the horizontal asymptote."""
    f = lambda x: a * (b ** x)
    pts = [(0, a, 'start %s' % fmt(a), RED)] + list(points)
    span = ymax - ymin
    ystep = ystep or (1 if span <= 20 else 10 ** (len(str(int(span // 10))) - 1) * 5)
    return graph([(f, GREEN if decay else INK, None)], w=w, h=h, xmin=xmin, xmax=xmax,
                 ymin=ymin, ymax=ymax, tick_every=tick_every, points=pts,
                 hlines=((0, FAINT, 'y = 0'),), label=label, xstep=1, ystep=ystep,
                 xtick_every=1, ytick_every=ytick_every or ystep * 2)


def growth_vs_linear(w=310, h=205):
    body = ''
    ax = Axes(40, 30, 244, 150, 0, 6, 0, 40, xstep=1, ystep=5,
              xtick_every=2, ytick_every=10)
    body = ax.draw()
    body += curve(ax, lambda x: 2 * 2 ** x, colour=RED)
    body += curve(ax, lambda x: 2 + 6 * x, colour=INK)
    body += val(296, 46, 'y = 2·2ˣ', color=RED, anchor='end', size=9.5)
    body += val(296, 62, 'y = 2 + 6x', color=INK, anchor='end', size=9.5)
    body += val(160, 14, 'a percentage change is exponential; a fixed change is linear',
                color=FAINT, size=9)
    return svg(310, h, body)


# ---------------------------------------------------------------- rationals

def rational(zeros=(), vas=(2,), ha=0, f=None, w=310, h=215, xmin=-4, xmax=8,
             ymin=-6, ymax=6, label=None):
    """A rational function with its vertical and horizontal asymptotes drawn."""
    if f is None:
        f = lambda x: 1.0 / (x - vas[0])
    return graph([(f, INK, None)], w=w, h=h, xmin=xmin, xmax=xmax, ymin=ymin,
                 ymax=ymax, label=label,
                 vlines=tuple((v, RED, 'x = %s' % fmt(v)) for v in vas),
                 hlines=((ha, GREEN, 'y = %s' % fmt(ha)),),
                 points=tuple((z, 0, 'zero', AMBER) for z in zeros))


# ---------------------------------------------------------------- systems

def nonlinear_system(f=None, g=None, solutions=((1, 1), (-2, 4)), w=310, h=215,
                     xmin=-4, xmax=4, ymin=-2, ymax=9, label=None,
                     legend=('y = x²', 'y = x + 2')):
    f = f or (lambda x: x * x)
    g = g or (lambda x: x + 2)
    pts = [(x, y, '(%s, %s)' % (fmt(x), fmt(y)), RED) for (x, y) in solutions]
    return graph([(f, INK, legend[0]), (g, GREEN, legend[1])], w=w, h=h, xmin=xmin,
                 xmax=xmax, ymin=ymin, ymax=ymax, points=pts, label=label)


# ---------------------------------------------------------------- functions

def transformations(w=345, h=180, base=None, kind='shift'):
    """One curve and the same curve moved, stretched or flipped."""
    base = base or (lambda x: x * x)
    sets = {
        'shift': [(base, INK, 'f(x)'),
                  (lambda x: base(x - 2), GREEN, 'f(x − 2): right 2'),
                  (lambda x: base(x) + 2, RED, 'f(x) + 2: up 2')],
        'stretch': [(base, INK, 'f(x)'),
                    (lambda x: 2 * base(x), GREEN, '2f(x): taller'),
                    (lambda x: base(2 * x), RED, 'f(2x): narrower')],
        'flip': [(base, INK, 'f(x)'),
                 (lambda x: -base(x), GREEN, '−f(x): flip over x'),
                 (lambda x: base(-x) - 0.0, RED, 'f(−x): flip over y')],
    }[kind]
    return graph(sets, w=w, h=h, xmin=-4, xmax=5, ymin=-5, ymax=7, tick_every=2,
                 legend_at='top')


def function_machine(expr='f(x) = 2x + 1', ins=(1, 2, 3), outs=(3, 5, 7), w=None,
                     h=None):
    """Input, rule, output — what f(3) actually asks for."""
    bw = max(104.0, len(expr) * 5.4 + 18)
    w = w or (bw + 196)
    rows = max(len(ins), 1)
    h = h or (68 + rows * 26)
    bx = 88
    top = 26
    bh = rows * 26 + 14
    body = poly([(bx, top), (bx + bw, top), (bx + bw, top + bh), (bx, top + bh)], fill=FILLB)
    body += val(bx + bw / 2, top + bh / 2, expr, color=INK,
                size=min(10.5, (bw - 14) / (len(expr) * 0.52)))
    for i, (a, b) in enumerate(zip(ins, outs)):
        y = top + 18 + i * 26
        body += val(16, y, 'x = %s' % fmt(a), color=GREY, anchor='start')
        body += arrow((56, y), (bx - 4, y), stroke=GREY)
        body += arrow((bx + bw + 4, y), (bx + bw + 40, y), stroke=RED)
        body += val(bx + bw + 46, y, 'f(%s) = %s' % (fmt(a), fmt(b)), color=RED,
                    anchor='start')
    body += val(bx + bw / 2, top + bh + 16, 'put the number in, read the number out',
                color=FAINT, size=9)
    return svg(w, h, body)


# ---------------------------------------------------------------- lines & systems

def system_cases(w=345, h=165):
    """One solution, none, infinitely many — the three pictures."""
    sets = (((1.0, -1.0), (-1.0, 3.0), 'one solution', GREEN),
            ((0.8, 0.5), (0.8, 2.4), 'no solution', RED),
            ((0.8, 1.0), (0.8, 1.0), 'infinitely many', AMBER))
    body = val(172, 18, 'compare the slopes first, then the intercepts', color=FAINT)
    for i, ((m1, c1), (m2, c2), name, colour) in enumerate(sets):
        ox, oy, s = 14 + i * 112, 34, 92.0
        ax = Axes(ox, oy, s, s, -2, 2, -2, 2, step=1, labels=False)
        body += ax.draw()
        body += line(ax.P(-2, m1 * -2 + c1), ax.P(2, m1 * 2 + c1), stroke=INK, w=2.2)
        body += line(ax.P(-2, m2 * -2 + c2), ax.P(2, m2 * 2 + c2), stroke=GREEN, w=2.2,
                     dash='6 4' if (m1, c1) == (m2, c2) else None)
        body += val(ox + s / 2, oy + s + 16, name, color=colour, size=9.5)
    return svg(w, h, body)


def half_plane(m=-1, c=4, op='<=', points=(), w=300, h=210, xmin=-1, xmax=6,
               ymin=-1, ymax=6, label=None):
    """A linear inequality: boundary line plus the shaded side."""
    solid = op in ('<=', '>=')
    below = op in ('<', '<=')
    ax = Axes(40, 34, w - 62, h - 66, xmin, xmax, ymin, ymax, xstep=1, ystep=1,
              xtick_every=2, ytick_every=2)
    body = ax.draw()
    corners = []
    for x in (xmin, xmax):
        y = m * x + c
        corners.append((x, max(ymin, min(ymax, y))))
    edge = [ax.P(*corners[0]), ax.P(*corners[1])]
    cap = ymin if below else ymax
    body += poly(edge + [ax.P(xmax, cap), ax.P(xmin, cap)],
                 fill='rgba(59,123,191,0.18)', stroke='none', w=0)
    body += line(edge[0], edge[1], stroke=INK, w=2.4, dash=None if solid else '7 5')
    for (px, py, ok) in points:
        body += dot(ax.P(px, py), 4.4, GREEN if ok else RED)
        body += val(ax.P(px, py)[0] + 7, ax.P(px, py)[1] - 11,
                    '(%s, %s) %s' % (fmt(px), fmt(py), 'works' if ok else 'fails'),
                    color=GREEN if ok else RED, anchor='start', size=9)
    body += val(w / 2, 16, label or ('solid line for ≤ or ≥, dashed for < or >'),
                color=INK if label else FAINT, size=10.5 if label else 9.5)
    return svg(w, h, body)


def absolute_v(h_=1, k=0, line_y=None, w=310, h=205, xmin=-4, xmax=6, ymin=-1, ymax=6,
               label=None):
    """y = |x − h| + k, with an optional horizontal line counting solutions."""
    f = lambda x: abs(x - h_) + k
    pts = [(h_, k, None, RED)]
    notes = [(h_, k - (ymax - ymin) * 0.09, 'vertex (%s, %s)' % (fmt(h_), fmt(k)), RED)]
    hl = ()
    if line_y is not None:
        hl = ((line_y, GREEN, 'y = %s' % fmt(line_y)),)
        if line_y > k:
            d = line_y - k
            for xx in (h_ - d, h_ + d):
                pts.append((xx, line_y, None, GREEN))
                notes.append((xx, line_y + (ymax - ymin) * 0.08, 'x = %s' % fmt(xx),
                              GREEN))
    return graph([(f, INK, None)], w=w, h=h, xmin=xmin, xmax=xmax, ymin=ymin, ymax=ymax,
                 xstep=1, ystep=1, xtick_every=2, ytick_every=2, points=pts,
                 notes=notes, hlines=hl, label=label)


def context_line(b=15, m=5, xmax=8, xlabel='hours', ylabel='cost', w=320, h=195,
                 label=None):
    """y = mx + b in a real context: the intercept is the fixed part."""
    ends = (b, b + m * xmax)
    ytop = max(ends) * 1.08 + (1 if max(ends) == 0 else 0)
    ybot = min(0, min(ends) * 1.08)
    span = ytop - ybot
    ax = Axes(44, 36, w - 66, h - 68, 0, xmax, ybot, ytop, xstep=1,
              ystep=max(1, round(span / 8.0)), xtick_every=max(1, round(xmax / 5.0)),
              ytick_every=max(2, round(span / 4.0)))
    body = ax.draw()
    body += line(ax.P(0, b), ax.P(xmax, b + m * xmax), stroke=INK, w=2.4)
    body += dot(ax.P(0, b), 4.4, RED)
    body += val(ax.P(0, b)[0] + 10, ax.P(0, b)[1] - 12, 'start %s' % fmt(b), color=RED,
                anchor='start', size=9.5)
    x1 = max(1, xmax // 2)
    body += line(ax.P(x1, b + m * x1), ax.P(x1 + 1, b + m * x1), stroke=GREY, w=1.4,
                 dash='4 3')
    body += line(ax.P(x1 + 1, b + m * x1), ax.P(x1 + 1, b + m * (x1 + 1)), stroke=GREEN,
                 w=2)
    body += val(ax.P(x1 + 1, b + m * (x1 + 0.5))[0] + 12,
                ax.P(x1 + 1, b + m * (x1 + 0.5))[1],
                '%s%s each %s' % ('+' if m >= 0 else '', fmt(m), xlabel.rstrip('s')),
                color=GREEN, anchor='start', size=9.5)
    body += val(w / 2, 16, label or 'b is where it starts, m is the rate', color=INK,
                size=10.5)
    body += txt(w / 2, h - 8, xlabel, size=9, color=FAINT)
    return svg(w, h, body)
