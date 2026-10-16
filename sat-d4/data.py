# -*- coding: utf-8 -*-
"""Charts and diagrams for Problem-Solving & Data Analysis.

Every chart here is a single series unless the question compares two, in which
case both are labelled directly as well as coloured. Colours for genuine data
series come from svgbase.SERIES, which the dataviz checker passes; the blue,
green, red and amber elsewhere are role colours (outline, given, answer, notice)
that always travel with a label.
"""
from math import hypot, sqrt

from svgbase import (AMBER, FAINT, FILLB, FILLG, FILLR, GREEN, GREY, INK, RED,
                     SERIES, Axes, arrow, circ, dot, ell, fmt, line, path, poly,
                     svg, txt, val, wrap)

S1, S2, S3 = SERIES
TINT = {S1: '#dceaf6', S2: '#dcf0e6', S3: '#fbe6e3'}


# ---------------------------------------------------------------- one variable

def dotplot(values=(2, 3, 4, 4, 4, 4, 5, 5, 6, 6, 7, 8, 9), label=None,
            caption=None, mean=None, median=None, w=330, h=None, colour=S1):
    """Every value is one dot, stacked over its number."""
    lo, hi = min(values), max(values)
    x0, x1 = 34, w - 24
    step = (x1 - x0) / float(max(hi - lo, 1))
    counts = {}
    for v in values:
        counts[v] = counts.get(v, 0) + 1
    tall = max(counts.values())
    base = (58 if (mean is not None or median is not None) else 44) + tall * 11
    h = h or (base + 46)
    body = val(w / 2, 16, label, color=GREY, size=9.5) if label else ''
    body += line((x0 - 8, base), (x1 + 8, base), stroke='#6b7884', w=1.3)
    # a tick for every integer while that stays readable; otherwise only the
    # values that actually occur, so an outlier cannot flood the axis
    marks = range(lo, hi + 1) if (hi - lo) <= 14 else sorted(counts)
    last = None
    for v in marks:
        x = x0 + (v - lo) * step
        if last is not None and x - last < 13:   # crowded by an outlier: skip
            continue
        last = x
        body += txt(x, base + 14, fmt(v), size=9, color=FAINT)
    for v in sorted(counts):
        x = x0 + (v - lo) * step
        for i in range(counts[v]):
            body += circ((x, base - 8 - i * 11), 4.2, fill=colour, stroke='#fff', w=1.4)
    # when the two coincide, stack the labels instead of printing them on top
    close = (mean is not None and median is not None
             and abs(mean - median) * step < 60)
    if median is not None:
        xd = x0 + (median - lo) * step
        body += line((xd, base + 4), (xd, 36), stroke=GREEN, w=1.6, dash='5 4')
        body += val(xd, 30, 'median %s' % fmt(median), color=GREEN, size=9)
    if mean is not None:
        xm = x0 + (mean - lo) * step
        body += line((xm, base + 4), (xm, 52 if close else 36), stroke=RED, w=1.6,
                     dash='5 4')
        body += val(xm, 46 if close else 30, 'mean %s' % fmt(mean), color=RED, size=9)
    if caption:
        body += val(w / 2, base + 32, caption, color=FAINT, size=9)
    return svg(w, h, body)


def sorted_list(values=(2, 4, 6, 9, 9), median_at=2, label='sorted, then read the middle',
                w=330, h=96):
    """A list laid out in order, with the middle value marked."""
    n = len(values)
    bw = min(46.0, (w - 48) / float(n))
    ox = (w - n * bw) / 2.0
    body = val(w / 2, 20, label, color=FAINT, size=9.5)
    hot_at = () if median_at is None else (
        tuple(median_at) if isinstance(median_at, (tuple, list)) else (median_at,))
    for i, v in enumerate(values):
        hot = (i in hot_at)
        body += poly([(ox + i * bw + 2, 36), (ox + (i + 1) * bw - 2, 36),
                      (ox + (i + 1) * bw - 2, 68), (ox + i * bw + 2, 68)],
                     fill=TINT[S2] if hot else '#eef3fa',
                     stroke=S2 if hot else '#d4dde8', w=1.4 if hot else 1)
        body += val(ox + i * bw + bw / 2, 52, fmt(v), color=S2 if hot else INK)
    if hot_at:
        cx = ox + (sum(hot_at) / float(len(hot_at)) + 0.5) * bw
        body += val(cx, 84, 'median' if len(hot_at) == 1 else 'the middle pair',
                    color=S2, size=9)
    return svg(w, h, body)


def histogram(labels=('0–4', '5–9', '10–14', '15–19', '20–24',
                      '25–29'),
              heights=(3, 7, 9, 6, 4, 2), ylabel='number of customers',
              xlabel='minutes waited', highlight=(), w=340, h=200, colour=S1):
    """Counts over touching intervals: the bars share edges, as intervals do."""
    n = len(heights)
    top, base = 40, 150
    x0 = 40
    bw = (w - x0 - 18) / float(n)
    sc = (base - top) / float(max(heights))
    body = val(x0, 20, ylabel, color=GREY, size=9, anchor='start')
    for i, ht in enumerate(heights):
        x = x0 + i * bw
        hot = i in highlight
        body += poly([(x + 1, base - ht * sc), (x + bw - 1, base - ht * sc),
                      (x + bw - 1, base), (x + 1, base)],
                     fill=TINT[S3] if hot else TINT[S1], stroke=S3 if hot else S1, w=1.4)
        body += val(x + bw / 2, base - ht * sc - 9, fmt(ht), color=S3 if hot else INK,
                    size=9.5)
        body += txt(x + bw / 2, base + 13, labels[i], size=8.5, color=FAINT)
    body += line((x0, base), (w - 16, base), stroke='#6b7884', w=1.3)
    body += line((x0, top - 6), (x0, base), stroke='#6b7884', w=1.3)
    body += txt(w / 2, h - 10, xlabel, size=9, color=FAINT)
    return svg(w, h, body)


def hist_shapes(w=345, h=165):
    """Symmetric, skewed right, skewed left — and where the mean sits."""
    sets = ((((2, 5, 8, 5, 2)), 'symmetric', 'mean = median'),
            (((9, 6, 3, 2, 1)), 'skewed right', 'mean > median'),
            (((1, 2, 3, 6, 9)), 'skewed left', 'mean < median'))
    body = ''
    for i, (hs, name, rel) in enumerate(sets):
        ox = 14 + i * 112
        base, top = 108, 36
        bw = 92 / float(len(hs))
        sc = (base - top) / float(max(hs))
        for j, ht in enumerate(hs):
            body += poly([(ox + j * bw + 1, base - ht * sc), (ox + (j + 1) * bw - 1, base - ht * sc),
                          (ox + (j + 1) * bw - 1, base), (ox + j * bw + 1, base)],
                         fill=TINT[S1], stroke=S1, w=1.2)
        body += line((ox, base), (ox + 92, base), stroke='#6b7884', w=1.2)
        body += val(ox + 46, base + 18, name, color=INK, size=9.5)
        body += val(ox + 46, base + 34, rel, color=RED, size=9)
    body += val(172, 20, 'the skew is named after the tail, not the bulk', color=FAINT)
    return svg(w, h, body)


def barchart(cats=('Mon', 'Tue', 'Wed', 'Thu', 'Fri'), values=(18, 24, 31, 27, 20),
             ylabel='loaves sold', highlight=(), w=340, h=195, colour=S1, note=None):
    """Separate categories, so the bars stand apart."""
    n = len(values)
    top, base = 40, 146
    x0 = 36
    slot = (w - x0 - 18) / float(n)
    bw = slot * 0.62
    sc = (base - top) / float(max(values))
    body = val(x0, 20, ylabel, color=GREY, size=9, anchor='start')
    for i, v in enumerate(values):
        x = x0 + i * slot + (slot - bw) / 2
        hot = i in highlight
        body += poly([(x, base - v * sc), (x + bw, base - v * sc), (x + bw, base), (x, base)],
                     fill=TINT[S3] if hot else TINT[S1], stroke=S3 if hot else S1, w=1.4)
        body += val(x + bw / 2, base - v * sc - 9, fmt(v), color=S3 if hot else INK, size=9.5)
        body += txt(x + bw / 2, base + 13, cats[i], size=9, color=FAINT)
    body += line((x0, base), (w - 16, base), stroke='#6b7884', w=1.3)
    body += line((x0, top - 6), (x0, base), stroke='#6b7884', w=1.3)
    if note:
        body += val(w / 2, h - 8, note, color=FAINT, size=9)
    return svg(w, h, body)


def freq_table(values=(1, 2, 3), freqs=(4, 6, 10), label='value × frequency',
               total_note=True, head=('value', 'frequency', 'value × freq'),
               w=330, h=None):
    """A frequency table with the products worked out beside it."""
    rows = len(values)
    h = h or (56 + rows * 24 + (26 if total_note else 0))
    cw = (90, 90, 110)
    ox = (w - sum(cw)) / 2.0
    body = val(w / 2, 18, label, color=FAINT, size=9.5)
    y = 32
    for j, hd in enumerate(head):
        body += poly([(ox + sum(cw[:j]), y), (ox + sum(cw[:j + 1]), y),
                      (ox + sum(cw[:j + 1]), y + 22), (ox + sum(cw[:j]), y + 22)],
                     fill=S1, stroke=S1, w=1)
        body += val(ox + sum(cw[:j]) + cw[j] / 2, y + 11, hd, color='#fff', size=9)
    y += 22
    for i, (v, f) in enumerate(zip(values, freqs)):
        for j, cell in enumerate((fmt(v), fmt(f), '%s' % fmt(v * f))):
            body += poly([(ox + sum(cw[:j]), y), (ox + sum(cw[:j + 1]), y),
                          (ox + sum(cw[:j + 1]), y + 24), (ox + sum(cw[:j]), y + 24)],
                         fill='#f7f9fc' if i % 2 else '#fff', stroke='#d4dde8', w=1)
            body += val(ox + sum(cw[:j]) + cw[j] / 2, y + 12, cell,
                        color=S2 if j == 2 else INK, size=10)
        y += 24
    if total_note:
        tot_f = sum(freqs)
        tot_p = sum(v * f for v, f in zip(values, freqs))
        body += val(w / 2, y + 16, 'mean = %s ÷ %s = %s'
                    % (fmt(tot_p), fmt(tot_f), fmt(round(tot_p / float(tot_f), 3))),
                    color=RED, size=10.5)
    return svg(w, h, body)


def twoway(cells=((60, 40), (20, 60)), rows=('Bought fruit', 'No fruit'),
           cols=('Cheese', 'No cheese'), title='Survey of 180 market customers',
           highlight=None, w=345, h=None):
    """A two-way table with its totals; `highlight` names the whole being used.

    highlight: 'row0' | 'row1' | 'col0' | 'col1' | 'grand' | 'cell00' …
    """
    nr, nc = len(rows), len(cols)
    rt = [sum(r) for r in cells]
    ct = [sum(cells[i][j] for i in range(nr)) for j in range(nc)]
    grand = sum(rt)
    h = h or (46 + (nr + 2) * 24)
    cw = [96] + [74] * nc + [62]
    ox = (w - sum(cw)) / 2.0
    y0 = 34
    body = val(w / 2, 18, title, color=FAINT, size=9)

    def cell(i, j, text, fill, colour, bold=False):
        x = ox + sum(cw[:j])
        y = y0 + i * 24
        out = poly([(x, y), (x + cw[j], y), (x + cw[j], y + 24), (x, y + 24)],
                   fill=fill, stroke='#d4dde8', w=1)
        out += val(x + cw[j] / 2, y + 12, text, color=colour, size=9.5)
        return out

    hot_fill, hot_ink = TINT[S3], S3
    body += cell(0, 0, '', S1, '#fff')
    for j, c in enumerate(cols):
        on = highlight == 'col%d' % j
        body += cell(0, j + 1, c, hot_ink if on else S1, '#fff')
    body += cell(0, nc + 1, 'Total', S1, '#fff')
    for i, r in enumerate(rows):
        on_row = highlight == 'row%d' % i
        body += cell(i + 1, 0, r, hot_ink if on_row else '#eef3fa',
                     '#fff' if on_row else INK)
        for j in range(nc):
            on = on_row or highlight == 'col%d' % j or highlight == 'cell%d%d' % (i, j)
            body += cell(i + 1, j + 1, fmt(cells[i][j]), hot_fill if on else '#fff',
                         hot_ink if on else INK)
        body += cell(i + 1, nc + 1, fmt(rt[i]), hot_fill if on_row else '#eef3fa',
                     hot_ink if on_row else INK)
    body += cell(nr + 1, 0, 'Total', '#eef3fa', INK)
    for j in range(nc):
        on = highlight == 'col%d' % j
        body += cell(nr + 1, j + 1, fmt(ct[j]), hot_fill if on else '#eef3fa',
                     hot_ink if on else INK)
    body += cell(nr + 1, nc + 1, fmt(grand), hot_fill if highlight == 'grand' else '#eef3fa',
                 hot_ink if highlight == 'grand' else INK)
    return svg(w, h, body)


def linegraph(points=((1, 20), (2, 24), (3, 28), (4, 32)), xlabel='week',
              ylabel='value', steepest=None, flat=None, w=330, h=195):
    """A line graph, where the question is almost always about a slope."""
    xs = [p[0] for p in points]
    ys = [p[1] for p in points]
    ax = Axes(42, 36, w - 64, h - 74, min(xs) - 0.5, max(xs) + 0.5,
              min(ys) - (max(ys) - min(ys)) * 0.25, max(ys) + (max(ys) - min(ys)) * 0.25,
              xstep=1, ystep=max(1, round((max(ys) - min(ys)) / 4.0)),
              xtick_every=1, ytick_every=max(1, round((max(ys) - min(ys)) / 2.0)))
    body = ax.draw()
    P = [ax.P(*p) for p in points]
    for i in range(len(P) - 1):
        hot = steepest == i
        body += line(P[i], P[i + 1], stroke=S3 if hot else S1, w=3 if hot else 2.2)
        if hot:
            body += val((P[i][0] + P[i + 1][0]) / 2, (P[i][1] + P[i + 1][1]) / 2 - 12,
                        'steepest', color=S3, size=9)
    for p, pt in zip(points, P):
        body += circ(pt, 4, fill='#fff', stroke=S1, w=2)
    body += val(w / 2, 18, ylabel, color=GREY, size=9)
    body += txt(w / 2, h - 8, xlabel, size=9, color=FAINT)
    return svg(w, h, body)


# ---------------------------------------------------------------- two variables

def scatter(points=((1, 5), (2, 8), (3, 10), (4, 14)), line_mc=(2.9, 2),
            label='y = 2.9x + 2', predict=None, residual=None, w=330, h=205,
            xmin=0, xmax=5, ymin=0, ymax=16, note=None):
    """A scatterplot, optionally with its line of best fit."""
    ax = Axes(40, 36, w - 60, h - 72, xmin, xmax, ymin, ymax, xstep=1,
              ystep=max(1, round((ymax - ymin) / 8.0)), xtick_every=1,
              ytick_every=max(2, round((ymax - ymin) / 4.0)))
    body = ax.draw()
    if line_mc:
        m, c = line_mc
        body += line(ax.P(xmin, m * xmin + c), ax.P(xmax, m * xmax + c), stroke=S2, w=2.2)
        if label:
            body += val(w - 16, 50, label, color=S2, anchor='end', size=9.5)
    for (x, y) in points:
        body += circ(ax.P(x, y), 4.2, fill=S1, stroke='#fff', w=1.4)
    if residual:
        rx, ry = residual
        m, c = line_mc
        py = m * rx + c
        body += line(ax.P(rx, py), ax.P(rx, ry), stroke=S3, w=2.4)
        body += circ(ax.P(rx, ry), 4.4, fill=S3, stroke='#fff', w=1.4)
        body += val(ax.P(rx, ry)[0] + 8, ax.P(rx, (ry + py) / 2.0)[1],
                    'residual %s' % fmt(round(ry - py, 2)), color=S3, anchor='start',
                    size=9.5)
    if predict:
        px, py = predict
        body += line(ax.P(px, ymin), ax.P(px, py), stroke=AMBER, w=1.6, dash='5 4')
        body += line(ax.P(xmin, py), ax.P(px, py), stroke=AMBER, w=1.6, dash='5 4')
        body += circ(ax.P(px, py), 4.4, fill=AMBER, stroke='#fff', w=1.4)
        body += val(ax.P(px, py)[0] + 8, ax.P(px, py)[1] - 10,
                    'predicts %s' % fmt(py), color=AMBER, anchor='start', size=9.5)
    if note:
        body += val(w / 2, 18, note, color=FAINT, size=9.5)
    return svg(w, h, body)


def assoc_panels(w=345, h=165):
    """Direction, strength and form — the three judgements, side by side."""
    sets = (([(0.1, 0.15), (0.25, 0.3), (0.4, 0.42), (0.55, 0.52), (0.7, 0.68),
              (0.85, 0.82)], 'strong positive', S2),
            ([(0.1, 0.8), (0.25, 0.5), (0.4, 0.62), (0.55, 0.3), (0.7, 0.45),
              (0.85, 0.2)], 'weak negative', S1),
            ([(0.1, 0.2), (0.25, 0.55), (0.4, 0.78), (0.55, 0.82), (0.7, 0.6),
              (0.85, 0.25)], 'curved, not linear', S3))
    body = val(172, 18, 'say all three: direction, strength, form', color=FAINT)
    for i, (pts, name, colour) in enumerate(sets):
        ox, oy, s = 14 + i * 112, 34, 92.0
        body += poly([(ox, oy), (ox + s, oy), (ox + s, oy + s), (ox, oy + s)],
                     fill='#f7f9fc', stroke='#dbe1e8', w=1)
        for (px, py) in pts:
            body += circ((ox + px * s, oy + (1 - py) * s), 3.4, fill=colour,
                         stroke='#fff', w=1.2)
        body += val(ox + s / 2, oy + s + 16, name, color=colour, size=9.5)
    return svg(w, h, body)


def lurking(cause='hot weather', a='ice-cream sales', b='swimming accidents',
            w=340, h=162):
    """The third variable that explains both."""
    body = val(w / 2, 18, 'an association can have a third cause', color=FAINT)
    body += poly([(118, 36), (222, 36), (222, 66), (118, 66)], fill=TINT[S3],
                 stroke=S3, w=1.4)
    body += val(170, 51, cause, color=S3, size=9.5)
    for (x, t) in ((22, a), (190, b)):
        body += poly([(x, 104), (x + 128, 104), (x + 128, 134), (x, 134)],
                     fill=TINT[S1], stroke=S1, w=1.4)
        body += val(x + 64, 119, t, color=S1, size=9.5)
    body += arrow((150, 70), (96, 100), stroke=S3, w=1.5)
    body += arrow((190, 70), (248, 100), stroke=S3, w=1.5)
    body += line((152, 119), (188, 119), stroke=FAINT, w=1.4, dash='5 4')
    body += val(w / 2, h - 6, 'no arrow between these two — neither causes the other',
                color=FAINT, size=9)
    return svg(w, h, body)


# ---------------------------------------------------------------- probability

def venn(a_only=40, both=60, b_only=20, labels=('fruit', 'cheese'), whole=None,
         w=330, h=175):
    """Two overlapping groups; `whole` shades the group used as the denominator.

    whole: 'a' | 'b' | 'both' | 'all' | None
    """
    cA, cB, r = (136, 92), (208, 92), 56
    fillA = TINT[S1] if whole in ('a', 'all') else '#fff'
    fillB = TINT[S2] if whole in ('b', 'all') else '#fff'
    body = val(w / 2, 18, 'the named group becomes the whole', color=FAINT, size=9.5)
    body += circ(cA, r, fill=fillA, stroke=S1, w=2)
    body += circ(cB, r, fill=fillB, stroke=S2, w=2)
    if whole == 'both':
        body += path('M172 %0.1f A%d %d 0 0 1 172 %0.1f A%d %d 0 0 1 172 %0.1f'
                     % (92 - 44, r, r, 92 + 44, r, r, 92 - 44), fill=TINT[S3],
                     stroke=S3, w=1.6)
    body += val(cA[0] - 26, 92, fmt(a_only), color=S1)
    body += val(172, 92, fmt(both), color=S3)
    body += val(cB[0] + 26, 92, fmt(b_only), color=S2)
    body += val(cA[0] - 34, 36, labels[0], color=S1, size=9.5)
    body += val(cB[0] + 34, 36, labels[1], color=S2, size=9.5)
    body += val(172, 160, 'overlap counted once', color=FAINT, size=9)
    return svg(w, h, body)


def tree(p1=('red', '5/8'), p2=('red', '4/7'), result='5/8 × 4/7 = 5/14',
         note='without replacement: the second fraction changes', w=340, h=160):
    """Two stages of a probability tree, with the multiplication along the branch."""
    body = val(w / 2, 18, note, color=FAINT, size=9.5)
    root = (36, 86)
    a, b = (150, 52), (150, 120)
    body += dot(root, 3.4, INK)
    body += line(root, a, stroke=S2, w=2) + line(root, b, stroke=FAINT, w=1.6)
    body += val(92, 58, p1[1], color=S2, size=9.5)
    body += val(158, 50, p1[0], color=S2, anchor='start', size=9.5)
    body += val(158, 118, 'not ' + p1[0], color=FAINT, anchor='start', size=9.5)
    c, d = (268, 32), (268, 72)
    body += line(a, c, stroke=S2, w=2) + line(a, d, stroke=FAINT, w=1.6)
    body += val(214, 36, p2[1], color=S2, size=9.5)
    body += val(276, 30, p2[0], color=S2, anchor='start', size=9.5)
    body += val(276, 70, 'not ' + p2[0], color=FAINT, anchor='start', size=9.5)
    body += val(w / 2, h - 14, result, color=RED, size=10.5)
    return svg(w, h, body)


def counters(counts=((5, 'red', S3), (4, 'blue', S1), (3, 'green', S2)),
             favourable=1, event=None, w=330, h=140):
    """The bag, drawn — so the total is counted, not assumed.

    `favourable` is the index of the winning colour, or a tuple of indices when
    the event covers more than one; `event` names it when the default would not.
    """
    hot_at = (tuple(favourable) if isinstance(favourable, (tuple, list))
              else (favourable,))
    total = sum(c[0] for c in counts)
    body = val(w / 2, 18, 'count the favourable, count every counter', color=FAINT,
               size=9.5)
    x = 30
    for i, (n, name, colour) in enumerate(counts):
        for j in range(n):
            hot = (i in hot_at)
            body += circ((x, 60), 9, fill=colour if hot else TINT[colour],
                         stroke=colour, w=1.6)
            x += 21
        body += val(x - n * 21 / 2 - 10, 84, '%s %s' % (fmt(n), name), color=colour,
                    size=9)
        x += 12
    fav = sum(counts[i][0] for i in hot_at)
    name = event or ' or '.join(counts[i][1] for i in hot_at)
    body += val(w / 2, 116, 'P(%s) = %s/%s' % (name, fmt(fav), fmt(total)),
                color=RED, size=11)
    return svg(w, h, body)


def spinner(n=8, favourable=(6, 7, 8), w=215, h=175):
    """An equal-sector spinner with the winning sectors shaded."""
    from math import cos, pi, sin
    O, r = (104, 92), 62
    body = ''
    for i in range(n):
        a0 = -pi / 2 + 2 * pi * i / n
        a1 = a0 + 2 * pi / n
        p0 = (O[0] + r * cos(a0), O[1] + r * sin(a0))
        p1 = (O[0] + r * cos(a1), O[1] + r * sin(a1))
        hot = (i + 1) in favourable
        body += path('M%.1f %.1f L%.1f %.1f A%d %d 0 0 1 %.1f %.1f Z'
                     % (O[0], O[1], p0[0], p0[1], r, r, p1[0], p1[1]),
                     fill=TINT[S3] if hot else '#fff', stroke=S1 if not hot else S3, w=1.4)
        am = (a0 + a1) / 2
        body += val(O[0] + r * 0.68 * cos(am), O[1] + r * 0.68 * sin(am), fmt(i + 1),
                    color=S3 if hot else GREY, size=9.5)
    body += val(w / 2, 166, 'P = %s/%s' % (fmt(len(favourable)), fmt(n)), color=RED,
                size=10.5)
    return svg(w, h, body)


# ---------------------------------------------------------------- inference

def population_sample(stage='both', w=345, h=170):
    """Population → random sample → random groups, and what each buys."""
    body = poly([(14, 46), (108, 46), (108, 82), (14, 82)], fill=TINT[S1], stroke=S1, w=1.6)
    body += val(61, 64, 'population', color=S1, size=9.5)
    body += arrow((112, 64), (146, 64), stroke=GREY)
    body += poly([(150, 46), (248, 46), (248, 82), (150, 82)], fill=TINT[S2],
                 stroke=S2, w=1.6)
    body += val(199, 64, 'random sample', color=S2, size=9.5)
    if stage in ('both', 'assign'):
        body += line((252, 64), (268, 40), stroke=GREY, w=1.3)
        body += line((252, 64), (268, 88), stroke=GREY, w=1.3)
        for (y, t) in ((28, 'treatment'), (76, 'control')):
            body += poly([(270, y), (w - 8, y), (w - 8, y + 24), (270, y + 24)],
                         fill=TINT[S3], stroke=S3, w=1.4)
            body += val((270 + w - 8) / 2, y + 12, t, color=S3, size=9)
    body += val(18, 110, 'random SELECTION → you may generalise to the population',
                color=S2, anchor='start', size=9.5)
    body += val(18, 128, 'random ASSIGNMENT → you may claim cause and effect',
                color=S3, anchor='start', size=9.5)
    body += val(18, 148, 'neither one on its own gives you the other', color=RED,
                anchor='start', size=9.5)
    return svg(w, h, body)


def interval(estimate=62, moe=4, xmin=50, xmax=75, second=None, claim=None,
             label='plausible interval = estimate ± margin of error', w=345, h=None):
    """An estimate with its margin of error, drawn to scale."""
    h = h or ((120 if second is None else 160) + (22 if claim is not None else 0))
    x0, x1 = 34, w - 24
    sc = (x1 - x0) / float(xmax - xmin)
    base = 96 if second is None else 128

    def X(v):
        return x0 + (v - xmin) * sc

    body = val(w / 2, 18 if second is None else 13, label, color=FAINT, size=9.5)
    y = 56 if second is None else 88
    body += line((x0, base), (x1, base), stroke='#6b7884', w=1.3)
    v = xmin
    while v <= xmax:
        body += line((X(v), base - 4), (X(v), base + 4), stroke='#6b7884', w=1.1)
        body += txt(X(v), base + 16, '%s%%' % fmt(v), size=8.5, color=FAINT)
        v += 5
    body += poly([(X(estimate - moe), y - 10), (X(estimate + moe), y - 10),
                  (X(estimate + moe), y + 10), (X(estimate - moe), y + 10)],
                 fill=TINT[S1], stroke=S1, w=1.6)
    body += line((X(estimate), y - 13), (X(estimate), y + 13), stroke=S3, w=2.2)
    body += val(X(estimate), y - 22, 'estimate %s%%' % fmt(estimate), color=S3, size=9.5)
    body += val(X(estimate - moe) - 2, y, '%s%%' % fmt(estimate - moe), color=S1,
                anchor='end', size=9)
    body += val(X(estimate + moe) + 2, y, '%s%%' % fmt(estimate + moe), color=S1,
                anchor='start', size=9)
    if second:
        e2, m2, lab2 = second
        y2 = 44
        body += poly([(X(e2 - m2), y2 - 8), (X(e2 + m2), y2 - 8), (X(e2 + m2), y2 + 8),
                      (X(e2 - m2), y2 + 8)], fill=TINT[S2], stroke=S2, w=1.6)
        if X(e2 + m2) + 8 + len(lab2) * 4.8 < w - 4:
            body += val(X(e2 + m2) + 5, y2, lab2, color=S2, anchor='start', size=9)
        else:                                   # no room beside it: sit it above
            body += val(X(e2), y2 - 16, lab2, color=S2, size=9)
    if claim is not None:
        body += line((X(claim), y - 12), (X(claim), base + 4), stroke=AMBER, w=1.6,
                     dash='5 4')
        body += val(X(claim), base + 34, 'claim %s%%' % fmt(claim), color=AMBER, size=9)
    return svg(w, h, body)


# ---------------------------------------------------------------- rates & percent

def ratio_bar(parts=(3, 5), labels=('red', 'blue'), unit=12, note=None, w=340, h=150):
    """A ratio drawn as equal parts, so 'add the parts first' is visible."""
    total = sum(parts)
    bw = (w - 60) / float(total)
    body = val(w / 2, 18, 'one part = %s, so the whole is %s parts'
               % (fmt(unit), fmt(total)), color=FAINT, size=9.5)
    x = 30
    for i, p in enumerate(parts):
        colour = (S1, S2, S3)[i % 3]
        for j in range(p):
            body += poly([(x + 1, 40), (x + bw - 1, 40), (x + bw - 1, 78), (x + 1, 78)],
                         fill=TINT[colour], stroke=colour, w=1.3)
            body += val(x + bw / 2, 59, fmt(unit), color=colour, size=9)
            x += bw
        body += val(x - p * bw / 2, 94, '%s: %s parts' % (labels[i], fmt(p)), color=colour,
                    size=9.5)
    body += val(w / 2, 122, note or ('total = %s × %s = %s'
                % (fmt(total), fmt(unit), fmt(total * unit))), color=RED, size=10.5)
    return svg(w, h, body)


def percent_bars(steps=((100, 'original', INK), (130, '+30%', S2), (117, '−10%', S3)),
                 note='1.30 × 0.90 = 1.17, a rise of 17% — not 20%',
                 w=345, h=None):
    """Each percentage change as a bar against the original 100%."""
    h = h or (52 + len(steps) * 30 + 26)
    x0 = 30
    full = w - x0 - 80
    mx = max(float(s[0]) for s in steps) * 1.04
    body = ''
    y = 36
    for (pc, lab, colour) in steps:
        body += poly([(x0, y), (x0 + full * pc / mx, y), (x0 + full * pc / mx, y + 20),
                      (x0, y + 20)], fill=TINT[colour] if colour in TINT else FILLB,
                     stroke=colour, w=1.4)
        body += val(x0 + 6, y + 10, lab, color=colour, anchor='start', size=9.5)
        body += val(x0 + full * pc / mx + 8, y + 10, '%s%%' % fmt(pc), color=colour,
                    anchor='start', size=9.5)
        y += 30
    body += val(w / 2, y + 16, note, color=RED, size=10)
    return svg(w, h, body)


def unit_ladder(k=100, w=340, h=150):
    """Length, area and volume do not share a conversion factor."""
    rows = (('length', '1 m = %s cm' % fmt(k), '× %s' % fmt(k), S1),
            ('area', '1 m² = %s cm²' % '{:,}'.format(k ** 2).replace(',', ' '),
             '× %s²' % fmt(k), S2),
            ('volume', '1 m³ = %s cm³' % '{:,}'.format(k ** 3).replace(',', ' '),
             '× %s³' % fmt(k), S3))
    body = val(w / 2, 18, 'the length factor is squared, then cubed', color=FAINT,
               size=9.5)
    y = 36
    for (name, eq, fac, colour) in rows:
        body += poly([(22, y), (104, y), (104, y + 28), (22, y + 28)],
                     fill=TINT[colour], stroke=colour, w=1.4)
        body += val(63, y + 14, name, color=colour, size=9.5)
        body += val(118, y + 14, eq, color=INK, anchor='start', size=9.5)
        body += val(w - 22, y + 14, fac, color=colour, anchor='end', size=9.5)
        y += 34
    return svg(w, h, body)


def speed_panel(legs=((600, 400), (600, 600)), w=340, h=160):
    """Average speed is total distance over total time, never the mean of speeds."""
    body = val(w / 2, 18, 'add the distances, add the times, then divide', color=FAINT,
               size=9.5)
    y = 38
    td = tt = 0.0
    for i, (d, v) in enumerate(legs):
        t = d / float(v)
        td += d
        tt += t
        colour = (S1, S2)[i % 2]
        body += poly([(24, y), (24 + 150, y), (24 + 150, y + 26), (24, y + 26)],
                     fill=TINT[colour], stroke=colour, w=1.3)
        body += val(99, y + 13, '%s km at %s km/h' % (fmt(d), fmt(v)), color=colour,
                    size=9.5)
        body += val(190, y + 13, 'takes %s h' % fmt(round(t, 2)), color=GREY,
                    anchor='start', size=9.5)
        y += 32
    body += val(w / 2, y + 14, 'total %s km ÷ total %s h = %s km/h'
                % (fmt(td), fmt(round(tt, 2)), fmt(round(td / tt, 1))), color=RED,
                size=10.5)
    body += val(w / 2, y + 32, 'the mean of the two speeds would be %s'
                % fmt(round(sum(v for _, v in legs) / float(len(legs)), 1)), color=FAINT,
                size=9)
    return svg(w, h, body)


def base_compare(a=96, b=120, w=340, h=172):
    """The same gap is a different percentage depending on which base you divide by."""
    lo, hi = float(min(a, b)), float(max(a, b))
    gap = hi - lo
    x0, full = 24, w - 24 - 26
    xa = x0 + full * lo / hi
    body = val(w / 2, 16, 'one gap of %s, two different bases' % fmt(gap), color=FAINT,
               size=9.5)
    body += poly([(x0, 30), (xa, 30), (xa, 54), (x0, 54)], fill=FILLG, stroke=GREEN, w=1.4)
    body += val((x0 + xa) / 2.0, 42, fmt(lo), color=GREEN, size=10.5)
    body += poly([(xa, 30), (x0 + full, 30), (x0 + full, 54), (xa, 54)],
                 fill='#fdf3df', stroke=AMBER, w=1.4)
    body += val((xa + x0 + full) / 2.0, 42, fmt(gap), color=AMBER, size=10)
    body += val(x0 + full, 24, fmt(hi), color=INK, anchor='end', size=9.5)
    body += line((x0, 68), (xa, 68), stroke=GREEN, w=1.6)
    body += line((x0, 64), (x0, 72), stroke=GREEN, w=1.6)
    body += line((xa, 64), (xa, 72), stroke=GREEN, w=1.6)
    body += val((x0 + xa) / 2.0, 84, 'base %s' % fmt(lo), color=GREEN, size=9.5)
    body += val(w / 2, 104, '%s → %s rises by %s ÷ %s = %s%%'
                % (fmt(lo), fmt(hi), fmt(gap), fmt(lo), fmt(round(100 * gap / lo, 1))),
                color=GREEN, size=10)
    body += line((x0, 120), (x0 + full, 120), stroke=RED, w=1.6)
    body += line((x0, 116), (x0, 124), stroke=RED, w=1.6)
    body += line((x0 + full, 116), (x0 + full, 124), stroke=RED, w=1.6)
    body += val(w / 2, 136, 'base %s' % fmt(hi), color=RED, size=9.5)
    body += val(w / 2, 152, '%s → %s falls by %s ÷ %s = %s%%'
                % (fmt(hi), fmt(lo), fmt(gap), fmt(hi), fmt(round(100 * gap / hi, 1))),
                color=RED, size=10)
    body += val(w / 2, 168, 'divide by where you started, not where you ended',
                color=FAINT, size=9.5)
    return svg(w, h, body)


def reverse_chain(final=288, factors=((0.8, '20% off'), (0.9, 'another 10% off')),
                  w=345, h=None):
    """Work a chain of multipliers backwards by dividing once, by the whole product."""
    prod = 1.0
    for (f, _) in factors:
        prod *= f
    orig = final / prod
    h = h or 132
    body = val(w / 2, 18, 'forwards multiplies, so backwards divides', color=FAINT,
               size=9.5)
    bw, by = 74, 40
    x = 20
    body += poly([(x, by), (x + bw, by), (x + bw, by + 30), (x, by + 30)],
                 fill=FILLG, stroke=GREEN, w=1.4)
    body += val(x + bw / 2.0, by + 15, fmt(round(orig, 2)), color=GREEN, size=10.5)
    body += val(x + bw / 2.0, by + 44, 'original', color=FAINT, size=9)
    x += bw
    step = (w - 30 - bw * 2 - x + bw) / float(len(factors))
    for (f, lab) in factors:
        body += arrow((x + 6, by + 15), (x + step - 6, by + 15), stroke=INK, w=1.3)
        body += val(x + step / 2.0, by + 5, '× %s' % fmt(f), color=INK, size=9.5)
        body += val(x + step / 2.0, by - 8, lab, color=FAINT, size=9)
        x += step
    body += poly([(x, by), (x + bw, by), (x + bw, by + 30), (x, by + 30)],
                 fill=FILLR, stroke=RED, w=1.4)
    body += val(x + bw / 2.0, by + 15, fmt(final), color=RED, size=10.5)
    body += val(x + bw / 2.0, by + 44, 'what you are told', color=FAINT, size=9)
    body += val(w / 2, h - 26, '%s ÷ %s = %s' % (fmt(final), fmt(round(prod, 4)),
                                                 fmt(round(orig, 2))),
                color=INK, size=10.5)
    body += val(w / 2, h - 8, 'one division by the whole chain — never add the percentage '
                'back on', color=RED, size=10)
    return svg(w, h, body)


def spread_pair(a=(10, 10, 10, 10), b=(6, 8, 12, 14), labels=('Set A', 'Set B'),
                note=None, w=345, h=None):
    """Two sets on one scale: same centre, different distance from it."""
    allv = list(a) + list(b)
    lo, hi = float(min(allv)), float(max(allv))
    if hi == lo:
        hi = lo + 1
    x0, x1 = 62, w - 26
    talls = [max([list(v).count(u) for u in v]) for v in (a, b)]
    ys = [30 + 10 * talls[0] + 18]
    ys.append(ys[0] + 32 + 10 * talls[1] + 18)
    h = h or (ys[1] + 60)
    body = val(w / 2, 14, 'the same centre — the spread is the distance from it',
               color=FAINT, size=9.5)
    for i, (vals, lab, colour) in enumerate(((a, labels[0], S1), (b, labels[1], S3))):
        y = ys[i]
        m = sum(vals) / float(len(vals))
        xm = x0 + (m - lo) / (hi - lo) * (x1 - x0)
        top = y - 10 * talls[i] - 14
        body += line((x0 - 10, y), (x1 + 10, y), stroke='#6b7884', w=1.2)
        body += line((xm, top), (xm, y + 8), stroke=RED, w=1.4, dash='4 3')
        body += val(xm, top - 7, 'mean %s' % fmt(m), color=RED, size=9)
        seen, last = {}, None
        for v in sorted(vals):
            k = seen.get(v, 0)
            seen[v] = k + 1
            x = x0 + (v - lo) / (hi - lo) * (x1 - x0)
            if abs(x - xm) > 1 and k == 0:
                body += line((xm, y), (x, y), stroke=colour, w=2.2, opacity='0.35')
            body += circ((x, y - 2 - k * 10), 4.2, fill=colour, stroke='#fff', w=1.3)
            if k == 0 and (last is None or x - last >= 13):
                last = x
                body += txt(x, y + 16, fmt(v), size=8.5, color=FAINT)
        body += val(x0 - 22, y, lab, color=colour, anchor='end', size=9.5)
    tails = []
    for vals in (a, b):
        m = sum(vals) / float(len(vals))
        tails.append(max(abs(v - m) for v in vals))
    body += wrap(w / 2, h - 30,
                 note or ('the furthest value sits %s from the mean in %s and %s in %s, so '
                          '%s has the greater standard deviation'
                          % (fmt(tails[0]), labels[0], fmt(tails[1]), labels[1],
                             labels[0] if tails[0] > tails[1] else labels[1])),
                 w - 20, size=9.5, color=RED)
    return svg(w, h, body)


def mean_total(count=6, mean=18, change='remove 23', new_count=5, new_total=85,
               w=345, h=146):
    """Means are patched through the total, never directly."""
    total = count * mean
    body = val(w / 2, 16, 'go to the total, change it there, then divide again',
               color=FAINT, size=9.5)
    boxes = ((('mean %s' % fmt(mean), 'of %s values' % fmt(count)), S1),
             (('total', fmt(total)), S2),
             ((change, ''), AMBER),
             (('total %s' % fmt(new_total), 'of %s values' % fmt(new_count)), S2),
             (('mean', fmt(round(new_total / float(new_count), 4))), S3))
    n = len(boxes)
    bw = (w - 24 - 9 * (n - 1)) / float(n)
    x = 12
    for i, (lines, colour) in enumerate(boxes):
        body += poly([(x, 42), (x + bw, 42), (x + bw, 86), (x, 86)],
                     fill=TINT.get(colour, '#fdf3df'), stroke=colour, w=1.4)
        if lines[1]:
            body += val(x + bw / 2, 57, lines[0], color=colour, size=9)
            body += val(x + bw / 2, 73, lines[1], color=colour, size=9)
        else:
            body += val(x + bw / 2, 65, lines[0], color=colour, size=9)
        if i < n - 1:
            body += arrow((x + bw + 0.5, 64), (x + bw + 8.5, 64), stroke=INK, w=1.2)
        x += bw + 9
    body += val(w / 2, 110, '× the count to go right, ÷ the new count to come back',
                color=INK, size=10)
    body += val(w / 2, 130, 'patching the mean itself is where the marks go',
                color=RED, size=9.5)
    return svg(w, h, body)


def running_total(labels=('0–4', '5–9', '10–14', '15–19', '20–24', '25–29'),
                  heights=(3, 7, 9, 6, 4, 2), xlabel='minutes waited',
                  ylabel='number of customers', w=345, h=250):
    """A histogram with its running totals, so the median interval can be counted to."""
    n = len(heights)
    total = sum(heights)
    k = (total + 1) // 2
    top, base = 42, 136
    x0 = 40
    bw = (w - x0 - 16) / float(n)
    sc = (base - top) / float(max(heights))
    run, hot = 0, None
    cum = []
    for i, ht in enumerate(heights):
        run += ht
        cum.append(run)
        if hot is None and run >= k:
            hot = i
    body = val(x0, 22, ylabel, color=GREY, size=9, anchor='start')
    for i, ht in enumerate(heights):
        x = x0 + i * bw
        on = (i == hot)
        body += poly([(x + 1, base - ht * sc), (x + bw - 1, base - ht * sc),
                      (x + bw - 1, base), (x + 1, base)],
                     fill=TINT[S3] if on else TINT[S1], stroke=S3 if on else S1, w=1.4)
        body += val(x + bw / 2, base - ht * sc - 9, fmt(ht), color=S3 if on else INK,
                    size=9.5)
        body += txt(x + bw / 2, base + 13, labels[i], size=8.5, color=FAINT)
    body += line((x0, base), (w - 14, base), stroke='#6b7884', w=1.3)
    body += line((x0, top - 6), (x0, base), stroke='#6b7884', w=1.3)
    body += txt(w / 2, base + 30, xlabel, size=9, color=FAINT)
    body += val(x0 - 4, base + 56, 'running total', color=FAINT, anchor='end', size=8.5)
    for i, c in enumerate(cum):
        x = x0 + i * bw
        on = (i == hot)
        body += poly([(x + 1, base + 44), (x + bw - 1, base + 44),
                      (x + bw - 1, base + 68), (x + 1, base + 68)],
                     fill=TINT[S3] if on else '#eef3fa', stroke=S3 if on else '#d4dde8',
                     w=1.4 if on else 1)
        body += val(x + bw / 2, base + 56, fmt(c), color=S3 if on else INK, size=9.5)
    body += wrap(w / 2, h - 22,
                 '%s values in all, so the middle one is the %sth — the running total '
                 'first reaches it in %s' % (fmt(total), fmt(k), labels[hot]),
                 w - 24, size=9.5, color=RED)
    return svg(w, h, body)


def residual_plot(pattern='random', w=330, h=172):
    """A residual plot: random scatter means the line fits, a pattern means it does not."""
    rand = ((0.08, 0.55), (0.2, -0.7), (0.32, 0.3), (0.44, -0.35), (0.56, 0.75),
            (0.68, -0.5), (0.8, 0.25), (0.92, -0.6))
    ushape = ((0.08, 0.85), (0.2, 0.45), (0.32, -0.2), (0.44, -0.6), (0.56, -0.55),
              (0.68, -0.15), (0.8, 0.5), (0.92, 0.9))
    pts = ushape if pattern == 'u' else rand
    colour = S3 if pattern == 'u' else S2
    x0, x1 = 34, w - 20
    mid, amp = 86, 40
    body = val(w / 2, 18, 'residual = actual − predicted, plotted against x',
               color=FAINT, size=9.5)
    body += line((x0 - 8, mid), (x1 + 8, mid), stroke=INK, w=1.5)
    body += val(x0 - 12, mid, '0', color=FAINT, anchor='end', size=9)
    for (px, py) in pts:
        x = x0 + px * (x1 - x0)
        y = mid - py * amp
        body += line((x, mid), (x, y), stroke=colour, w=1.2, opacity='0.5')
        body += circ((x, y), 4, fill=colour, stroke='#fff', w=1.3)
    body += val(w / 2, h - 32,
                'a clear U shape' if pattern == 'u' else 'no pattern, scattered about zero',
                color=colour, size=10)
    body += val(w / 2, h - 14,
                'the data curves — a straight line is the wrong model'
                if pattern == 'u' else 'a straight line was the right model',
                color=FAINT, size=9.5)
    return svg(w, h, body)


def moe_vs_n(pairs=((400, 5.0), (1600, 2.5)), note=None, w=340, h=168):
    """The margin of error shrinks with the square root of the sample size."""
    mx = max(m for (_, m) in pairs) * 1.15
    labs = [n if isinstance(n, str) else ('n = %s' % '{:,}'.format(n).replace(',', ' '))
            for (n, _) in pairs]
    ls = 9.5
    x0 = min(150.0, max(92.0, max(len(s) for s in labs) * ls * 0.56 + 20))
    full = w - x0 - 56
    body = val(w / 2, 16, 'four times the sample, about half the margin', color=FAINT,
               size=9.5)
    y = 44
    for (n, m) in pairs:
        lab = labs[list(pairs).index((n, m))]
        body += val(x0 - 10, y + 11, lab, color=INK, anchor='end', size=ls)
        body += poly([(x0, y), (x0 + full * m / mx, y), (x0 + full * m / mx, y + 22),
                      (x0, y + 22)], fill=TINT[S1], stroke=S1, w=1.4)
        body += val(x0 + full * m / mx + 6, y + 11, '± %s pts' % fmt(m), color=S1,
                    anchor='start', size=9.5)
        y += 36
    body += val(w / 2, y + 18,
                note or 'margin ∝ 1 ÷ √n, so ×4 on n gives ÷2 on the margin',
                color=INK, size=10)
    body += val(w / 2, y + 38, 'the size of the population barely matters at all',
                color=RED, size=9.5)
    return svg(w, h, body)


def bias_panel(part='gym members', whole='all adults in the city',
               verdict='the sample was drawn from only part of the population',
               w=340, h=172):
    """A sample taken from a slice of the population, not from all of it."""
    body = val(w / 2, 16, 'bias is about who was chosen, never how many', color=FAINT,
               size=9.5)
    body += ell((100, 82), 78, 48, fill=TINT[S1], stroke=S1, w=1.6)
    body += val(100, 44, whole, color=S1, size=9)
    body += ell((70, 92), 30, 22, fill=TINT[S3], stroke=S3, w=1.6)
    body += val(70, 92, part, color=S3, size=8.5)
    body += arrow((186, 86), (224, 86), stroke=S3, w=1.5)
    body += poly([(228, 68), (w - 14, 68), (w - 14, 104), (228, 104)], fill=TINT[S3],
                 stroke=S3, w=1.6)
    body += val((228 + w - 14) / 2.0, 86, 'the sample', color=S3, size=9.5)
    body += wrap(w / 2, h - 32, verdict, w - 24, size=9.5, color=RED)
    body += val(w / 2, h - 8, 'a bigger biased sample is just a more precise wrong answer',
                color=FAINT, size=9)
    return svg(w, h, body)
