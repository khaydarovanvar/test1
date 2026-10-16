"""Small SVG primitives shared by every figure in the SAT D4 booklet.

Everything is plain SVG markup in a 0..w, 0..h box with y pointing down,
so the generators below read like ordinary screen coordinates.
"""
from math import atan2, cos, degrees, hypot, pi, radians, sin

INK   = '#1f4e79'   # main outline blue
FILLB = '#dbe6f5'   # pale blue wash
GREEN = '#1e7a4d'   # second shape
FILLG = '#e3f0e7'
RED   = '#c0392b'   # answers, highlighted angles
FILLR = '#fbe6e3'
AMBER = '#b9770e'
GREY  = '#5d6b78'   # ordinary labels
FAINT = '#9aa7b4'   # construction lines

# Categorical series colours for the data charts, in fixed order. Validated
# with the dataviz skill's checker (light surface): lightness band, chroma
# floor, CVD separation, normal-vision floor and contrast all pass.
SERIES = ('#3b7bbf', '#2f9e63', '#c0392b')


def fmt(v):
    """A number with a real minus sign, not a hyphen."""
    return ('%g' % v).replace('-', '\u2212')


def esc(s):
    return (str(s).replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;'))


def txt(x, y, s, size=10.5, color=GREY, anchor='middle', weight='400',
        style='normal', baseline='middle', family=None):
    f = ' font-family="%s"' % family if family else ''
    return ('<text x="%.1f" y="%.1f" font-size="%s" fill="%s" text-anchor="%s" '
            'font-weight="%s" font-style="%s" dominant-baseline="%s"%s>%s</text>'
            % (x, y, size, color, anchor, weight, style, baseline, f, esc(s)))


def val(x, y, s, size=11, color=INK, anchor='middle', baseline='middle'):
    """A measurement or an answer: bold, darker."""
    return txt(x, y, s, size=size, color=color, anchor=anchor, weight='700',
               baseline=baseline)


def line(a, b, stroke=INK, w=1.8, dash=None, cap='round', opacity=None):
    d = ' stroke-dasharray="%s"' % dash if dash else ''
    o = ' opacity="%s"' % opacity if opacity else ''
    return ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" '
            'stroke-width="%s" stroke-linecap="%s"%s%s/>'
            % (a[0], a[1], b[0], b[1], stroke, w, cap, d, o))


def poly(pts, fill=FILLB, stroke=INK, w=1.8, dash=None, closed=True):
    d = ' stroke-dasharray="%s"' % dash if dash else ''
    tag = 'polygon' if closed else 'polyline'
    pp = ' '.join('%.1f,%.1f' % (p[0], p[1]) for p in pts)
    return ('<%s points="%s" fill="%s" stroke="%s" stroke-width="%s" '
            'stroke-linejoin="round" stroke-linecap="round"%s/>'
            % (tag, pp, fill, stroke, w, d))


def circ(c, r, fill='none', stroke=INK, w=1.8, dash=None):
    d = ' stroke-dasharray="%s"' % dash if dash else ''
    return ('<circle cx="%.1f" cy="%.1f" r="%.1f" fill="%s" stroke="%s" '
            'stroke-width="%s"%s/>' % (c[0], c[1], r, fill, stroke, w, d))


def ell(c, rx, ry, fill='none', stroke=INK, w=1.8, dash=None):
    d = ' stroke-dasharray="%s"' % dash if dash else ''
    return ('<ellipse cx="%.1f" cy="%.1f" rx="%.1f" ry="%.1f" fill="%s" '
            'stroke="%s" stroke-width="%s"%s/>' % (c[0], c[1], rx, ry, fill, stroke, w, d))


def dot(p, r=3.2, fill=RED):
    return '<circle cx="%.1f" cy="%.1f" r="%s" fill="%s"/>' % (p[0], p[1], r, fill)


def path(d, fill='none', stroke=INK, w=1.8, dash=None):
    da = ' stroke-dasharray="%s"' % dash if dash else ''
    return ('<path d="%s" fill="%s" stroke="%s" stroke-width="%s" '
            'stroke-linejoin="round" stroke-linecap="round"%s/>' % (d, fill, stroke, w, da))


def unit(a, b):
    dx, dy = b[0] - a[0], b[1] - a[1]
    L = hypot(dx, dy) or 1.0
    return dx / L, dy / L


def mid(a, b, t=0.5):
    return (a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t)


def along(a, b, d):
    u = unit(a, b)
    return (a[0] + u[0] * d, a[1] + u[1] * d)


def offset(a, b, d):
    """Point d away from the midpoint of ab, perpendicular to it (left side)."""
    u = unit(a, b)
    m = mid(a, b)
    return (m[0] - u[1] * d, m[1] + u[0] * d)


def arc(v, p, q, r=18, stroke=RED, w=1.5, n=1, gap=4.0):
    """One or more angle arcs at vertex v, swept from ray v->p to ray v->q."""
    a1 = atan2(p[1] - v[1], p[0] - v[0])
    a2 = atan2(q[1] - v[1], q[0] - v[0])
    d = a2 - a1
    while d > pi:
        d -= 2 * pi
    while d < -pi:
        d += 2 * pi
    out = ''
    for i in range(n):
        rr = r + i * gap
        s = (v[0] + rr * cos(a1), v[1] + rr * sin(a1))
        e = (v[0] + rr * cos(a1 + d), v[1] + rr * sin(a1 + d))
        big = 1 if abs(d) > pi else 0
        out += path('M%.1f %.1f A%.1f %.1f 0 %d %d %.1f %.1f'
                    % (s[0], s[1], rr, rr, big, 1 if d > 0 else 0, e[0], e[1]),
                    stroke=stroke, w=w)
    return out


def ang(v, p, q, label=None, r=18, color=RED, n=1, lr=None, size=10.5, w=1.5,
        bold=True):
    """Angle arc plus its label, placed out along the bisector."""
    out = arc(v, p, q, r=r, stroke=color, n=n, w=w)
    if label is not None:
        a1 = atan2(p[1] - v[1], p[0] - v[0])
        a2 = atan2(q[1] - v[1], q[0] - v[0])
        d = a2 - a1
        while d > pi:
            d -= 2 * pi
        while d < -pi:
            d += 2 * pi
        am = a1 + d / 2
        rr = lr if lr is not None else r + 13
        out += txt(v[0] + rr * cos(am), v[1] + rr * sin(am), label, size=size,
                   color=color, weight='700' if bold else '400')
    return out


def right(v, p, q, s=10, stroke=INK, w=1.5):
    """Right-angle square at v, between rays to p and q."""
    u1, u2 = unit(v, p), unit(v, q)
    a = (v[0] + u1[0] * s, v[1] + u1[1] * s)
    c = (v[0] + u2[0] * s, v[1] + u2[1] * s)
    b = (a[0] + u2[0] * s, a[1] + u2[1] * s)
    return path('M%.1f %.1f L%.1f %.1f L%.1f %.1f' % (a[0], a[1], b[0], b[1], c[0], c[1]),
                stroke=stroke, w=w)


def ticks(a, b, n=1, stroke=GREEN, h=5.5, gap=4.6, w=2.0, t=0.5):
    """Equal-length marks across the middle of segment ab."""
    dx, dy = b[0] - a[0], b[1] - a[1]
    L = hypot(dx, dy) or 1.0
    ux, uy = dx / L, dy / L
    px, py = -uy, ux
    out = ''
    for i in range(n):
        tt = t + (i - (n - 1) / 2.0) * (gap / L)
        cx, cy = a[0] + dx * tt, a[1] + dy * tt
        out += line((cx - px * h, cy - py * h), (cx + px * h, cy + py * h),
                    stroke=stroke, w=w)
    return out


ARROWS = ('<defs>'
          '<marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" '
          'markerHeight="7" orient="auto-start-reverse">'
          '<path d="M0 0 L10 5 L0 10 z" fill="%s"/></marker>'
          '<marker id="arg" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" '
          'markerHeight="7" orient="auto-start-reverse">'
          '<path d="M0 0 L10 5 L0 10 z" fill="%s"/></marker>'
          '<marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" '
          'markerHeight="7" orient="auto-start-reverse">'
          '<path d="M0 0 L10 5 L0 10 z" fill="%s"/></marker>'
          '</defs>') % (GREY, GREEN, RED)

_MK = {GREY: 'ar', GREEN: 'arg', RED: 'arr'}


def arrow(a, b, stroke=GREY, w=1.3, both=False, dash=None):
    mk = _MK.get(stroke, 'ar')
    d = ' stroke-dasharray="%s"' % dash if dash else ''
    s = ' marker-start="url(#%s)"' % mk if both else ''
    return ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" stroke="%s" '
            'stroke-width="%s" marker-end="url(#%s)"%s%s/>'
            % (a[0], a[1], b[0], b[1], stroke, w, mk, s, d))


def dim(a, b, label, off=0, side=1, color=GREY, size=10, lab_off=11, w=1.2,
        ticksize=4):
    """A measured length: thin double-headed arrow parallel to ab, with a label."""
    u = unit(a, b)
    nx, ny = -u[1] * side * off, u[0] * side * off
    A = (a[0] + nx, a[1] + ny)
    B = (b[0] + nx, b[1] + ny)
    out = arrow(A, B, stroke=color, w=w, both=True)
    if off:
        out += line(a, A, stroke=color, w=0.8, dash='3 3')
        out += line(b, B, stroke=color, w=0.8, dash='3 3')
    m = mid(A, B)
    lx = m[0] - u[1] * side * lab_off
    ly = m[1] + u[0] * side * lab_off
    out += val(lx, ly, label, size=size, color=color)
    return out


def brace_label(x, y, s, color=GREY, size=10, anchor='middle', weight='700'):
    return txt(x, y, s, size=size, color=color, anchor=anchor, weight=weight)


def grid(x0, y0, w, h, step, stroke='#d8dee6', sw=0.9):
    out = ''
    x = x0
    while x <= x0 + w + 0.01:
        out += line((x, y0), (x, y0 + h), stroke=stroke, w=sw, cap='butt')
        x += step
    y = y0
    while y <= y0 + h + 0.01:
        out += line((x0, y), (x0 + w, y), stroke=stroke, w=sw, cap='butt')
        y += step
    return out


class Axes:
    """A small set of coordinate axes with a square grid."""

    def __init__(self, x0, y0, w, h, xmin, xmax, ymin, ymax, step=1,
                 labels=True, tick_every=1, xstep=None, ystep=None,
                 xtick_every=None, ytick_every=None):
        self.x0, self.y0, self.w, self.h = x0, y0, w, h
        self.xmin, self.xmax, self.ymin, self.ymax = xmin, xmax, ymin, ymax
        self.sx = w / float(xmax - xmin)
        self.sy = h / float(ymax - ymin)
        self.step = step
        self.xstep = xstep or step
        self.ystep = ystep or step
        self.labels = labels
        self.tick_every = tick_every
        self.xtick_every = xtick_every or tick_every
        self.ytick_every = ytick_every or tick_every

    def P(self, x, y):
        return (self.x0 + (x - self.xmin) * self.sx,
                self.y0 + (self.ymax - y) * self.sy)

    def draw(self, gridcolor='#dbe1e8'):
        out = ''
        x = self.xmin
        while x <= self.xmax + 1e-9:
            out += line(self.P(x, self.ymin), self.P(x, self.ymax),
                        stroke=gridcolor, w=0.9, cap='butt')
            x += self.xstep
        y = self.ymin
        while y <= self.ymax + 1e-9:
            out += line(self.P(self.xmin, y), self.P(self.xmax, y),
                        stroke=gridcolor, w=0.9, cap='butt')
            y += self.ystep
        if self.ymin <= 0 <= self.ymax:
            out += line(self.P(self.xmin, 0), self.P(self.xmax, 0), stroke='#6b7884', w=1.4)
            out += txt(self.P(self.xmax, 0)[0] + 9, self.P(self.xmax, 0)[1], 'x',
                       size=10, color='#6b7884', style='italic')
        if self.xmin <= 0 <= self.xmax:
            out += line(self.P(0, self.ymin), self.P(0, self.ymax), stroke='#6b7884', w=1.4)
            out += txt(self.P(0, self.ymax)[0], self.P(0, self.ymax)[1] - 9, 'y',
                       size=10, color='#6b7884', style='italic')
        if self.labels:
            x = self.xmin
            while x <= self.xmax + 1e-9:
                if x and abs(x % self.xtick_every) < 1e-9:
                    p = self.P(x, max(self.ymin, min(0, self.ymax)))
                    out += txt(p[0], p[1] + 10, '%g' % x, size=8.5, color=FAINT)
                x += self.xstep
            y = self.ymin
            while y <= self.ymax + 1e-9:
                if y and abs(y % self.ytick_every) < 1e-9:
                    p = self.P(max(self.xmin, min(0, self.xmax)), y)
                    out += txt(p[0] - 10, p[1], '%g' % y, size=8.5, color=FAINT)
                y += self.ystep
        return out


def svg(w, h, body, cls='fig', width=None):
    wd = ' style="width:%s"' % width if width else ''
    return ('<svg class="%s" viewBox="0 0 %g %g" xmlns="http://www.w3.org/2000/svg" '
            'role="img"%s>%s%s</svg>' % (cls, w, h, wd, ARROWS, body))


def wrap(cx, y, s, width, size=9.5, color=FAINT, weight='700', lh=12.5, anchor='middle'):
    """A short caption, wrapped to fit inside the figure box."""
    per = size * 0.52
    maxchars = max(int(width / per), 12)
    words, lines, cur = s.split(' '), [], ''
    for wd in words:
        trial = (cur + ' ' + wd).strip()
        if len(trial) > maxchars and cur:
            lines.append(cur)
            cur = wd
        else:
            cur = trial
    if cur:
        lines.append(cur)
    out = ''
    for i, ln in enumerate(lines):
        out += txt(cx, y + i * lh, ln, size=size, color=color, weight=weight, anchor=anchor)
    return out


def nlines(s, width, size=9.5):
    per = size * 0.52
    maxchars = max(int(width / per), 12)
    n, cur = 1, ''
    for wd in s.split(' '):
        trial = (cur + ' ' + wd).strip()
        if len(trial) > maxchars and cur:
            n += 1
            cur = wd
        else:
            cur = trial
    return n
