"""Reusable labelled diagrams for the SAT D4 booklet.

Every function returns a finished <svg> string sized in user units; the
stylesheet scales each one to the column it sits in. Explanatory sentences
live in the HTML caption beside the figure, never inside the SVG, so the
text stays selectable and can never clip.
"""
from math import atan2, cos, degrees, hypot, pi, radians, sin, sqrt

from svgbase import (AMBER, FAINT, FILLB, FILLG, FILLR, GREEN, GREY, INK, RED,
                     Axes, along, ang, arc, arrow, circ, dim, dot, ell, line,
                     mid, offset, path, poly, right, svg, ticks, txt, unit,
                     val, wrap)

DEG = '°'


# ---------------------------------------------------------------- lines & angles

def complementary(a='3x' + DEG, b='(2x + 10)' + DEG, split=40, w=215, h=130):
    """A right angle cut by one ray: the two parts add to 90."""
    O, A, B = (40, 104), (190, 104), (40, 22)
    r = 80
    R = (O[0] + r * cos(radians(split)), O[1] - r * sin(radians(split)))
    body = line(O, A) + line(O, B) + line(O, R, stroke=INK, w=1.6)
    body += right(O, A, B, s=13, stroke=FAINT)
    body += arc(O, A, B, r=88, stroke=FAINT, w=1.2)
    body += txt(O[0] + 74, O[1] - 74, '90' + DEG, size=10, color=FAINT, weight='700')
    body += ang(O, A, R, None, r=30, color=RED)
    body += ang(O, R, B, None, r=44, color=GREEN)
    body += txt(O[0] + 52, O[1] - 14, a, size=10.5, color=RED, weight='700', anchor='start')
    body += txt(O[0] + 6, O[1] - 56, b, size=10.5, color=GREEN, weight='700', anchor='start')
    return svg(w, h, body)


def straight_line(a='4x' + DEG, b='(x + 30)' + DEG, split=58, w=250, h=120):
    """A straight line cut by one ray: the two parts add to 180."""
    O = (124, 94)
    A, B = (18, 94), (230, 94)
    r = 70
    R = (O[0] + r * cos(radians(split)), O[1] - r * sin(radians(split)))
    body = line(A, B) + line(O, R, stroke=INK, w=1.6)
    body += path('M%.1f %.1f A78 78 0 0 1 %.1f %.1f' % (O[0] - 78, O[1], O[0] + 78, O[1]),
                 stroke=FAINT, w=1.2)
    body += txt(124, 12, 'straight line = 180' + DEG, size=9.5, color=FAINT, weight='700')
    body += ang(O, B, R, None, r=26, color=GREEN)
    body += ang(O, R, A, None, r=34, color=RED)
    body += txt(O[0] + 36, O[1] - 16, b, size=10.5, color=GREEN, weight='700', anchor='start')
    body += txt(O[0] - 34, O[1] - 24, a, size=10.5, color=RED, weight='700', anchor='end')
    body += dot(O, 2.6, INK)
    return svg(w, h, body)


def crossing_lines(a=65, w=250, h=140):
    """Two crossing lines: vertical angles equal, neighbours supplementary."""
    O = (124, 70)
    th = radians(30)
    L = 104
    p1 = (O[0] - L * cos(th), O[1] + L * sin(th))
    p2 = (O[0] + L * cos(th), O[1] - L * sin(th))
    q1, q2 = (O[0] - L, O[1]), (O[0] + L, O[1])
    b = 180 - a
    body = line(q1, q2) + line(p1, p2)
    body += ang(O, q2, p2, None, r=30, color=RED)
    body += ang(O, p1, q1, None, r=30, color=RED, n=2)
    body += ang(O, p2, q1, None, r=22, color=GREEN)
    body += ang(O, q2, p1, None, r=22, color=GREEN)
    body += txt(O[0] + 48, O[1] - 16, '%g%s' % (a, DEG), size=10.5, color=RED,
                weight='700', anchor='start')
    body += txt(O[0] - 48, O[1] + 18, '%g%s' % (a, DEG), size=10.5, color=RED,
                weight='700', anchor='end')
    body += txt(O[0] + 2, O[1] - 38, '%g%s' % (b, DEG), size=10.5, color=GREEN,
                weight='700', anchor='start')
    body += txt(O[0] - 2, O[1] + 40, '%g%s' % (b, DEG), size=10.5, color=GREEN,
                weight='700', anchor='end')
    body += dot(O, 2.6, INK)
    return svg(w, h, body)


def transversal(highlight=None, a=None, w=330, h=160):
    """Two parallel lines cut by a transversal, with the eight angles numbered.

    highlight: 'corresponding' | 'cointerior' | 'alternate' | None
    a: the known angle in degrees; the partner angle is then filled in too.
    """
    x0, x1 = 26, 306
    yT, yB = 46, 118
    P1, P2 = (76, 152), (252, 12)

    def onT(y):
        t = (y - P1[1]) / float(P2[1] - P1[1])
        return (P1[0] + (P2[0] - P1[0]) * t, y)

    IT, IB = onT(yT), onT(yB)
    body = line((x0, yT), (x1, yT)) + line((x0, yB), (x1, yB))
    body += line(P1, P2, stroke=INK, w=1.6)
    for y in (yT, yB):                      # arrow marks: these two lines are parallel
        for k in (0, 1):
            body += path('M%.1f %.1f l6 5 l-6 5' % (40 + k * 8, y - 5), stroke=GREEN, w=1.5)
    # each number sits on the bisector of its own region, clear of both lines
    up = unit(P1, P2)
    dn = (-up[0], -up[1])
    rad = 35.0

    def place(I, r1, r2):
        bx, by = r1[0] + r2[0], r1[1] + r2[1]
        n = hypot(bx, by) or 1.0
        return (I[0] + bx / n * rad, I[1] + by / n * rad)

    L, Rt = (-1.0, 0.0), (1.0, 0.0)
    pos = {1: place(IT, L, up), 2: place(IT, Rt, up),
           3: place(IT, L, dn), 4: place(IT, Rt, dn),
           5: place(IB, L, up), 6: place(IB, Rt, up),
           7: place(IB, L, dn), 8: place(IB, Rt, dn)}
    pair, colour = (), RED
    if highlight == 'corresponding':
        pair, colour = (1, 5), RED
    elif highlight == 'cointerior':
        pair, colour = (3, 5), AMBER
    elif highlight == 'alternate':
        pair, colour = (4, 5), GREEN
    for n, (px, py) in sorted(pos.items()):
        hot = n in pair
        if hot and a is not None:
            lab = '%g%s' % (180 - a if (highlight == 'cointerior' and n == 5) else a, DEG)
            body += txt(px, py, lab, size=10.5, color=colour, weight='700')
        else:
            body += txt(px, py, str(n), size=10, color=colour if hot else GREY,
                        weight='700' if hot else '400')
    return svg(w, h, body)


# ---------------------------------------------------------------- triangles

def triangle(angles=(50, 60, 70), exterior=None, names=('A', 'B', 'C'),
             fill=FILLB, w=270, h=150, sides=None):
    """A triangle with its three angles marked; optional exterior angle at B."""
    A, B, C = (44, 116), (206, 116), (146, 42)
    body = poly([A, B, C], fill=fill)
    if exterior:
        E = (254, 116)
        body += line(B, E, stroke=FAINT, w=1.5, dash='5 4')
        body += ang(B, E, C, '%g%s' % (exterior, DEG), r=24, color=RED, lr=42)
    if angles:
        if angles[0] is not None:
            body += ang(A, B, C, '%g%s' % (angles[0], DEG), r=26, color=INK, lr=42)
        if angles[1] is not None:
            body += ang(B, C, A, '%g%s' % (angles[1], DEG), r=26, color=INK, lr=42)
        if angles[2] is not None:
            body += ang(C, A, B, '%g%s' % (angles[2], DEG), r=22, color=RED, lr=36)
    if names:
        body += txt(A[0] - 12, A[1] + 12, names[0], size=10.5, color=GREY, weight='700')
        body += txt(B[0] + 12, B[1] + 12, names[1], size=10.5, color=GREY, weight='700')
        body += txt(C[0], C[1] - 14, names[2], size=10.5, color=GREY, weight='700')
    if sides:
        if sides[0]:
            body += val(mid(A, B)[0], A[1] + 15, sides[0], color=GREY)
        if sides[1]:
            body += val(mid(B, C)[0] + 20, mid(B, C)[1], sides[1], color=GREY)
        if sides[2]:
            body += val(mid(C, A)[0] - 20, mid(C, A)[1], sides[2], color=GREY)
    return svg(w, h, body)


def isosceles(apex=40, base=None, impossible=False, equilateral=False,
              w=230, h=140):
    """An isosceles triangle, with tick marks on the two equal sides."""
    A, B, C = (54, 116), (178, 116), (116, 34)
    fillc = FILLR if impossible else (FILLG if equilateral else FILLB)
    strokec = RED if impossible else (GREEN if equilateral else INK)
    body = poly([A, B, C], fill=fillc, stroke=strokec)
    body += ticks(C, A, 1, stroke=AMBER) + ticks(C, B, 1, stroke=AMBER)
    if equilateral:
        body += ticks(A, B, 1, stroke=AMBER)
    bl = base if base is not None else 'x' + DEG
    body += ang(A, B, C, bl, r=24, color=RED, lr=40)
    body += ang(B, C, A, bl, r=24, color=RED, lr=40)
    ap = apex if isinstance(apex, str) else '%g%s' % (apex, DEG)
    body += ang(C, A, B, ap, r=20, color=INK, lr=34)
    if impossible:
        body += line((70, 42), (164, 108), stroke=RED, w=2.2, opacity='0.5')
        body += line((164, 42), (70, 108), stroke=RED, w=2.2, opacity='0.5')
    return svg(w, h, body)


def hinge(a=7, b=10, w=320, h=180):
    """The two extreme positions of the third side: stretched flat, folded back."""
    sc = 10.5
    # stretched flat: the third side gets as long as it can
    y1 = 46
    O = (34, y1)
    H = (O[0] + a * sc, y1)
    E = (H[0] + b * sc, y1)
    body = line(O, H, stroke=INK, w=3) + line(H, E, stroke=GREEN, w=3)
    body += dot(O, 3, INK) + dot(H, 3, INK) + dot(E, 3, INK)
    body += val(mid(O, H)[0], y1 - 14, str(a), color=INK)
    body += val(mid(H, E)[0], y1 - 14, str(b), color=GREEN)
    body += dim(O, E, '', off=18, side=1, color=RED)
    body += val(mid(O, E)[0], y1 + 38, 'swung flat: third side approaches %g' % (a + b),
                color=RED, size=9.5)
    # folded back: the third side gets as short as it can
    y2 = 128
    O2 = (104, y2)
    H2 = (O2[0] + a * sc, y2)
    T2 = (O2[0] + a * sc - b * sc, y2 - 16)
    body += line(O2, H2, stroke=INK, w=3)
    body += line(H2, T2, stroke=GREEN, w=3)
    body += dot(O2, 3, INK) + dot(H2, 3, INK) + dot(T2, 3, INK)
    body += val(mid(O2, H2)[0] + 10, y2 + 15, str(a), color=INK)
    body += val(mid(H2, T2)[0], y2 - 26, str(b), color=GREEN)
    body += line(T2, O2, stroke=RED, w=1.6, dash='4 3')
    body += val(w / 2, y2 + 32, 'folded back: it shrinks towards %g' % (b - a),
                color=RED, size=9.5)
    return svg(w, h, body)


def numberline(lo, hi, xmin=0, xmax=20, mark=None, label=None, w=310, h=74,
               closed=False):
    """A number line with the open interval lo..hi shaded."""
    y = 34
    x0, x1 = 26, 284
    sc = (x1 - x0) / float(xmax - xmin)

    def X(v):
        return x0 + (v - xmin) * sc

    body = line((x0, y), (x1, y), stroke='#6b7884', w=1.4)
    for v in range(xmin, xmax + 1):
        big = v % 5 == 0
        body += line((X(v), y - (5 if big else 3)), (X(v), y + (5 if big else 3)),
                     stroke='#6b7884', w=1.1)
        if big:
            body += txt(X(v), y + 16, str(v), size=9, color=FAINT)
    body += line((X(lo), y), (X(hi), y), stroke=RED, w=4.4)
    for v in (lo, hi):
        body += circ((X(v), y), 4.6, fill='#fff' if not closed else RED, stroke=RED, w=2)
    body += val((X(lo) + X(hi)) / 2, y - 16, label or ('%g < x < %g' % (lo, hi)), color=RED)
    if mark is not None:
        body += dot((X(mark), y), 4.6, GREEN)
        body += val(X(mark), y + 32, 'largest whole number: %g' % mark, color=GREEN)
    return svg(w, h, body)


def flat_triangle(a=4, b=5, c=9, w=280, h=80):
    """The degenerate case: a + b = c, so the triangle collapses onto a line."""
    s = 23
    y = 50
    A = (28, y)
    B = (A[0] + a * s, y)
    C = (B[0] + b * s, y)
    body = line(A, B, stroke=INK, w=3.4) + line(B, C, stroke=GREEN, w=3.4)
    body += dot(A, 3.2, INK) + dot(B, 3.2, INK) + dot(C, 3.2, INK)
    body += val(mid(A, B)[0], y + 15, str(a), color=INK)
    body += val(mid(B, C)[0], y + 15, str(b), color=GREEN)
    body += dim(A, C, '%g — no height at all' % c, off=24, side=-1, color=RED)
    return svg(w, h, body)


# ---------------------------------------------------------------- polygons

def ngon(n=6, interior=None, exterior=None, triangulate=False, w=240, h=200,
         r=62, fill=FILLB):
    cx, cy = 114, 88
    pts = []
    for i in range(n):
        th = -pi / 2 + 2 * pi * i / n + (pi / n if n % 2 == 0 else 0)
        pts.append((cx + r * cos(th), cy + r * sin(th)))
    body = poly(pts, fill=fill)
    if triangulate:
        for i in range(2, n - 1):
            body += line(pts[0], pts[i], stroke=FAINT, w=1.2, dash='4 3')
        body += val(cx, cy + r + 24, '%d triangles × 180%s = %d%s'
                    % (n - 2, DEG, (n - 2) * 180, DEG), color=INK)
    k = 1
    A, B, C = pts[k - 1], pts[k], pts[k + 1]
    if interior is not None:
        body += ang(B, A, C, '%g%s' % (interior, DEG), r=22, color=INK, lr=38)
    if exterior is not None:
        E = (B[0] + (B[0] - A[0]) * 0.85, B[1] + (B[1] - A[1]) * 0.85)
        body += line(B, E, stroke=FAINT, w=1.5, dash='5 4')
        body += ang(B, E, C, '%g%s' % (exterior, DEG), r=17, color=RED, lr=32)
        body += val(cx, cy + r + (44 if triangulate else 24),
                    'interior + exterior = 180' + DEG, color=RED)
    return svg(w, h, body)


def parallelogram(a=65, w=255, h=125):
    A, B = (34, 100), (168, 100)
    C, D = (218, 34), (84, 34)
    body = poly([A, B, C, D], fill=FILLB)
    body += ang(A, B, D, '%g%s' % (a, DEG), r=24, color=RED, lr=40)
    body += ang(C, D, B, '%g%s' % (a, DEG), r=24, color=RED, lr=40)
    body += ang(B, C, A, '%g%s' % (180 - a, DEG), r=22, color=GREEN, lr=40)
    body += ang(D, A, C, '%g%s' % (180 - a, DEG), r=22, color=GREEN, lr=40)
    return svg(w, h, body)


# ---------------------------------------------------------------- similarity

def similar_pair(s1=(3, 4, 5), s2=(9, 12, 15), k=3, w=340, h=175):
    """Two right triangles, same shape, different size, with the factor shown."""
    sc = 8.6
    body = ''
    a, b = s1[0] * sc, s1[1] * sc
    A = (34, 112)
    B = (A[0] + b, A[1])
    C = (A[0], A[1] - a)
    body += poly([A, B, C], fill=FILLB)
    body += right(A, B, C, s=9)
    body += val(mid(A, B)[0], A[1] + 15, str(s1[1]), color=INK)
    body += val(A[0] - 14, mid(A, C)[1], str(s1[0]), color=INK)
    body += val(mid(B, C)[0] + 16, mid(B, C)[1] - 7, str(s1[2]), color=INK)
    a2, b2 = s2[0] * sc, s2[1] * sc
    A2 = (160, 150)
    B2 = (A2[0] + b2, A2[1])
    C2 = (A2[0], A2[1] - a2)
    body += poly([A2, B2, C2], fill=FILLG, stroke=GREEN)
    body += right(A2, B2, C2, s=9, stroke=GREEN)
    body += val(mid(A2, B2)[0], A2[1] + 15, str(s2[1]), color=GREEN)
    body += val(A2[0] - 16, mid(A2, C2)[1], str(s2[0]), color=GREEN)
    body += val(mid(B2, C2)[0] + 18, mid(B2, C2)[1] - 7, str(s2[2]), color=GREEN)
    body += arrow((112, 30), (152, 30), stroke=GREEN, w=1.5)
    body += val(132, 16, 'every length × %g' % k, color=GREEN)
    return svg(w, h, body)


def aa_pair(angles=(40, 60, 80), w=345, h=152):
    """Two triangles with matching angles but different sizes."""
    def tri(ox, oy, s, col, fillc, labels):
        A = (ox, oy)
        B = (ox + 9.0 * s, oy)
        C = (ox + 3.4 * s, oy - 6.2 * s)
        out = poly([A, B, C], fill=fillc, stroke=col)
        out += ang(A, B, C, '%g%s' % (labels[0], DEG), r=19, color=col, lr=32, size=9.5)
        out += ang(B, C, A, '%g%s' % (labels[1], DEG), r=19, color=col, lr=32, size=9.5)
        out += ang(C, A, B, '%g%s' % (labels[2], DEG), r=16, color=col, lr=30, size=9.5)
        return out

    body = tri(28, 118, 11.0, INK, FILLB, angles)
    body += tri(152, 134, 12.8, GREEN, FILLG, angles)
    body += val(165, 16, 'two equal angles force the third', color=FAINT)
    return svg(w, h, body)


def congruent_pair(w=330, h=135, marks='SSS'):
    A, B, C = (28, 106), (142, 106), (92, 32)
    D, E, F = (186, 106), (300, 106), (250, 32)
    body = poly([A, B, C], fill=FILLB)
    body += poly([D, E, F], fill=FILLG, stroke=GREEN)
    for (p, q, n) in ((A, B, 1), (B, C, 2), (C, A, 3)):
        body += ticks(p, q, n, stroke=AMBER)
    for (p, q, n) in ((D, E, 1), (E, F, 2), (F, D, 3)):
        body += ticks(p, q, n, stroke=AMBER)
    body += val(165, 16, marks + ' — same shape, same size, k = 1', color=FAINT)
    return svg(w, h, body)


def scale_area_volume(k=2, w=345, h=160):
    """A unit square and the same square scaled by k, with the three exponents."""
    s = 42.0
    body = poly([(26, 78), (26 + s, 78), (26 + s, 78 + s), (26, 78 + s)], fill=FILLB)
    body += val(26 + s / 2, 78 + s + 14, 'side 1', color=INK)
    S = s * k
    body += poly([(96, 120 - S), (96 + S, 120 - S), (96 + S, 120), (96, 120)],
                 fill=FILLG, stroke=GREEN)
    body += val(96 + S / 2, 134, 'side %g' % k, color=GREEN)
    x = 206
    body += val(x, 60, 'length × %g' % k, color=INK, anchor='start')
    body += val(x, 86, 'area × %g² = %g' % (k, k ** 2), color=GREEN, anchor='start')
    body += val(x, 112, 'volume × %g³ = %g' % (k, k ** 3), color=RED, anchor='start')
    body += txt(x, 26, 'exponent = dimension', size=9, color=FAINT,
                anchor='start', weight='700')
    return svg(w, h, body)


def nested_similar(ad=4, db=6, ae=6, ec=9, w=275, h=184):
    """Triangle ABC with DE parallel to BC, cutting off a similar triangle."""
    A, B, C = (132, 24), (36, 152), (240, 152)
    t = ad / float(ad + db)
    D = (A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t)
    E = (A[0] + (C[0] - A[0]) * t, A[1] + (C[1] - A[1]) * t)
    body = poly([A, B, C], fill=FILLB)
    body += poly([A, D, E], fill=FILLG, stroke=GREEN)
    body += line(D, E, stroke=GREEN, w=2)
    for p, nm, dx, dy in ((A, 'A', 0, -13), (B, 'B', -13, 8), (C, 'C', 13, 8),
                          (D, 'D', -14, 0), (E, 'E', 14, 0)):
        body += txt(p[0] + dx, p[1] + dy, nm, size=10.5, color=GREY, weight='700')
    body += val(mid(A, D)[0] - 14, mid(A, D)[1], str(ad), color=GREEN)
    body += val(mid(D, B)[0] - 14, mid(D, B)[1], str(db), color=INK)
    body += val(mid(A, E)[0] + 14, mid(A, E)[1], str(ae), color=GREEN)
    body += val(mid(E, C)[0] + 15, mid(E, C)[1], str(ec) if ec else '?',
                color=INK if ec else RED)
    for seg, col in (((D, E), GREEN), ((B, C), INK)):
        m = mid(*seg)
        body += path('M%.1f %.1f l5 4 l-5 4' % (m[0] - 2, m[1] - 4), stroke=col, w=1.4)
    body += val(138, 174, 'DE ∥ BC → AD/DB = AE/EC', color=FAINT)
    return svg(w, h, body)


def shadows(h1='6 ft', s1='4 ft', h2='h', s2='18 ft', w=340, h=165):
    """Two objects and their shadows at the same moment: similar right triangles."""
    gy = 132
    body = line((20, gy), (330, gy), stroke=INK, w=1.8)
    P1, T1, S1 = (62, gy), (62, gy - 44), (62 + 29, gy)
    body += poly([P1, T1, S1], fill=FILLB, stroke=INK)
    body += line(T1, S1, stroke=AMBER, w=1.8, dash='5 4')
    body += right(P1, S1, T1, s=8)
    body += val(P1[0] - 18, (gy + T1[1]) / 2, h1, color=INK)
    body += val((P1[0] + S1[0]) / 2, gy + 15, s1, color=INK)
    P2, T2, S2 = (184, gy), (184, gy - 96), (184 + 64, gy)
    body += poly([P2, T2, S2], fill=FILLG, stroke=GREEN)
    body += line(T2, S2, stroke=AMBER, w=1.8, dash='5 4')
    body += right(P2, S2, T2, s=8, stroke=GREEN)
    body += val(P2[0] - 16, (gy + T2[1]) / 2, h2, color=RED)
    body += val((P2[0] + S2[0]) / 2, gy + 15, s2, color=GREEN)
    body += ang(S1, P1, T1, None, r=15, color=AMBER)
    body += ang(S2, P2, T2, None, r=15, color=AMBER)
    body += val(104, 22, 'the sun’s angle is the same for both', color=AMBER)
    return svg(w, h, body)


# ---------------------------------------------------------------- right triangles

def right_triangle(a=9, b=12, c=15, la=None, lb=None, lc=None, theta=None,
                   names=None, w=250, h=150, fill=FILLB, stroke=INK,
                   scale=None, hyp_colour=RED):
    """A right triangle with legs a (vertical) and b (horizontal)."""
    av, bv = float(a), float(b)
    sc = scale if scale else min(84.0 / max(av, 1), 126.0 / max(bv, 1))
    A = (50, 118)
    B = (A[0] + bv * sc, A[1])
    C = (A[0], A[1] - av * sc)
    body = poly([A, B, C], fill=fill, stroke=stroke)
    body += right(A, B, C, s=10, stroke=stroke)
    body += val(mid(A, B)[0], A[1] + 15, lb if lb is not None else str(b), color=stroke)
    body += val(A[0] - 16, mid(A, C)[1], la if la is not None else str(a), color=stroke)
    body += val(mid(B, C)[0] + 18, mid(B, C)[1] - 6, lc if lc is not None else str(c),
                color=hyp_colour)
    if theta:
        body += ang(B, A, C, theta, r=20, color=AMBER, lr=35, size=10)
    if names:
        body += txt(A[0] - 13, A[1] + 13, names[0], size=10, color=GREY, weight='700')
        body += txt(B[0] + 12, B[1] + 13, names[1], size=10, color=GREY, weight='700')
        body += txt(C[0] - 12, C[1] - 9, names[2], size=10, color=GREY, weight='700')
    return svg(w, h, body)


def pythagoras(a=9, b=12, c=15, w=300, h=180):
    """Which side is which: the hypotenuse faces the right angle."""
    sc = 8.2
    A = (62, 148)
    B = (A[0] + b * sc, A[1])
    C = (A[0], A[1] - a * sc)
    body = poly([A, B, C], fill=FILLB)
    body += right(A, B, C, s=12)
    body += val(mid(A, B)[0], A[1] + 16, 'b = %g' % b, color=INK)
    body += val(A[0] - 20, mid(A, C)[1], 'a = %g' % a, color=INK)
    body += val(mid(B, C)[0] + 30, mid(B, C)[1] - 10, 'c = %g' % c, color=RED)
    body += arrow((mid(B, C)[0] + 22, mid(B, C)[1] + 4), (mid(B, C)[0] + 4, mid(B, C)[1] - 4),
                  stroke=RED, w=1.3)
    body += val(150, 18, 'a² + b² = c²', color=INK)
    body += val(150, 38, '%d + %d = %d' % (a * a, b * b, c * c), color=RED)
    return svg(w, h, body)


def triples(w=345, h=140):
    """The four triples worth memorising, drawn to scale."""
    data = [((3, 4, 5), INK, FILLB), ((5, 12, 13), GREEN, FILLG),
            ((8, 15, 17), INK, FILLB), ((7, 24, 25), GREEN, FILLG)]
    body = val(170, 16, 'and every multiple: 6-8-10, 9-12-15, 10-24-26 …', color=FAINT)
    x = 18
    for (a, b, c), col, fl in data:
        sc = 3.3
        A = (x, 108)
        B = (A[0] + b * sc, A[1])
        C = (A[0], A[1] - a * sc)
        body += poly([A, B, C], fill=fl, stroke=col)
        body += right(A, B, C, s=7, stroke=col)
        body += txt(A[0] + b * sc / 2, 124, '%d-%d-%d' % (a, b, c), size=9.5,
                    color=col, weight='700')
        x += b * sc + 16
    return svg(w, h, body)


def special_triangles(w=340, h=165):
    """45-45-90 and 30-60-90, with their side ratios."""
    s = 70.0
    A = (36, 122)
    B = (A[0] + s, A[1])
    C = (A[0], A[1] - s)
    body = poly([A, B, C], fill=FILLB)
    body += right(A, B, C, s=10)
    body += ang(B, A, C, '45' + DEG, r=22, color=AMBER, lr=36, size=9.5)
    body += ang(C, B, A, '45' + DEG, r=22, color=AMBER, lr=36, size=9.5)
    body += val(mid(A, B)[0], A[1] + 15, '1', color=INK)
    body += val(A[0] - 14, mid(A, C)[1], '1', color=INK)
    body += val(mid(B, C)[0] + 20, mid(B, C)[1] - 7, '√2', color=RED)
    body += val(A[0] + s / 2, 148, '1 : 1 : √2', color=INK)
    A2 = (208, 122)
    B2 = (A2[0] + 54, A2[1])
    C2 = (A2[0], A2[1] - 54 * sqrt(3) * 0.62)
    body += poly([A2, B2, C2], fill=FILLG, stroke=GREEN)
    body += right(A2, B2, C2, s=10, stroke=GREEN)
    body += ang(B2, A2, C2, '60' + DEG, r=22, color=AMBER, lr=36, size=9.5)
    body += ang(C2, B2, A2, '30' + DEG, r=24, color=AMBER, lr=38, size=9.5)
    body += val(mid(A2, B2)[0], A2[1] + 15, '1', color=GREEN)
    body += val(A2[0] - 18, mid(A2, C2)[1], '√3', color=GREEN)
    body += val(mid(B2, C2)[0] + 20, mid(B2, C2)[1] - 7, '2', color=RED)
    body += val(A2[0] + 27, 148, '1 : √3 : 2', color=GREEN)
    body += txt(170, 16, 'the short side faces 30' + DEG + ' — half the hypotenuse',
                size=9, color=FAINT, weight='700')
    return svg(w, h, body)


def sohcahtoa(w=355, h=185):
    A, B, C = (44, 148), (268, 148), (268, 52)
    body = poly([A, B, C], fill=FILLB)
    body += right(B, A, C, s=12)
    body += ang(A, B, C, 'θ', r=28, color=AMBER, lr=46, size=12)
    body += txt(mid(A, B)[0], 165, 'adjacent — beside θ', size=10, color=GREEN,
                weight='700')
    body += txt(278, mid(B, C)[1] - 7, 'opposite', size=10, color=RED, weight='700',
                anchor='start')
    body += txt(278, mid(B, C)[1] + 7, '— across from θ', size=9, color=RED,
                anchor='start')
    body += txt(mid(A, C)[0] - 4, mid(A, C)[1] - 15, 'hypotenuse', size=10, color=INK,
                weight='700')
    body += val(30, 18, 'sin θ = opp / hyp', color=RED, anchor='start', size=10)
    body += val(140, 18, 'cos θ = adj / hyp', color=GREEN, anchor='start', size=10)
    body += val(250, 18, 'tan θ = opp / adj', color=AMBER, anchor='start', size=10)
    return svg(w, h, body)


def inverse_trig(opp=3, adj=4, angle=37, w=305, h=150):
    A = (48, 120)
    sc = 21.0
    B = (A[0] + adj * sc, A[1])
    C = (B[0], B[1] - opp * sc)
    body = poly([A, B, C], fill=FILLB)
    body += right(B, A, C, s=10)
    body += ang(A, B, C, 'θ = ?', r=26, color=RED, lr=48, size=10)
    body += val(mid(A, B)[0], A[1] + 15, 'adjacent %g' % adj, color=GREEN)
    body += val(B[0] + 46, mid(B, C)[1], 'opposite %g' % opp, color=RED)
    body += val(140, 18, 'tan θ = %g/%g → θ = tan⁻¹(%s) ≈ %g%s'
                % (opp, adj, ('%g' % round(opp / float(adj), 2)), angle, DEG), color=INK)
    return svg(w, h, body)


def ladder(length=10, up=8, base=6, angle=53, w=265, h=160, unit_name='m'):
    gy = 128
    wx = 64
    sc = 9.4
    body = line((38, gy), (238, gy), stroke=INK, w=1.8)
    body += line((wx, gy), (wx, gy - up * sc), stroke=INK, w=2.6)
    top = (wx, gy - up * sc)
    foot = (wx + base * sc, gy)
    body += line(foot, top, stroke=RED, w=2.8)
    body += right((wx, gy), foot, top, s=11)
    body += ang(foot, (wx, gy), top, '%g%s' % (angle, DEG), r=26, color=AMBER, lr=44, size=10)
    body += val(wx - 20, gy - up * sc / 2, '%g %s' % (up, unit_name), color=INK)
    body += val(mid(foot, top)[0] + 26, mid(foot, top)[1] - 9, '%g %s' % (length, unit_name),
                color=RED)
    body += val(132, 18, 'sin θ = %g/%g → θ ≈ %g%s'
                % (up, length, angle, DEG), color=INK)
    return svg(w, h, body)


def complement_pair(w=310, h=165):
    A, B, C = (40, 134), (260, 134), (260, 48)
    body = poly([A, B, C], fill=FILLB)
    body += right(B, A, C, s=12)
    body += ang(A, B, C, 'θ', r=28, color=AMBER, lr=46, size=12)
    body += ang(C, A, B, '90' + DEG + '−θ', r=24, color=RED, lr=48, size=10)
    body += txt(mid(A, B)[0], 150, 'adjacent to θ, opposite 90' + DEG + '−θ',
                size=9.5, color=GREEN, weight='700')
    body += val(150, 18, 'the two acute angles add to 90' + DEG, color=INK)
    body += val(150, 36, 'so sin θ = cos(90' + DEG + ' − θ)', color=RED)
    return svg(w, h, body)


# ---------------------------------------------------------------- circles

def circle_basic(r_label='r', w=300, h=175):
    O = (104, 94)
    R = 62
    body = circ(O, R, fill=FILLB)
    body += line(O, (O[0] + R, O[1]), stroke=RED, w=2)
    body += dot(O, 3, INK)
    body += val(O[0] + R / 2, O[1] - 12, r_label, color=RED)
    body += txt(O[0] - 4, O[1] + 14, 'O', size=10, color=GREY, weight='700')
    body += circ(O, R + 7, fill='none', stroke=GREEN, w=2, dash='7 5')
    body += val(216, 66, 'C = 2πr', color=GREEN, anchor='start')
    body += val(216, 92, 'A = πr²', color=INK, anchor='start')
    body += txt(216, 118, 'find r first', size=9, color=FAINT, anchor='start', weight='700')
    return svg(w, h, body)


def sector(theta=80, r_label='9', w=300, h=180):
    O = (100, 98)
    R = 64
    a0 = radians(-18)
    a1 = a0 - radians(theta)
    P = (O[0] + R * cos(a0), O[1] + R * sin(a0))
    Q = (O[0] + R * cos(a1), O[1] + R * sin(a1))
    body = circ(O, R, fill='#fff')
    big = 1 if theta > 180 else 0
    body += path('M%.1f %.1f L%.1f %.1f A%.1f %.1f 0 %d 0 %.1f %.1f Z'
                 % (O[0], O[1], P[0], P[1], R, R, big, Q[0], Q[1]), fill=FILLG, stroke=GREEN)
    body += path('M%.1f %.1f A%.1f %.1f 0 %d 0 %.1f %.1f'
                 % (P[0], P[1], R, R, big, Q[0], Q[1]), stroke=RED, w=3.6)
    body += ang(O, P, Q, '%g%s' % (theta, DEG), r=25, color=AMBER, lr=42, size=10)
    body += val(mid(O, P)[0] + 4, mid(O, P)[1] + 14, 'r = ' + r_label, color=INK)
    body += dot(O, 3, INK)
    body += txt(O[0] + 74, O[1] - 58, 'arc', size=9.5, color=RED, weight='700')
    body += val(196, 64, 'arc = (θ/360)·2πr', color=RED, anchor='start', size=9.5)
    body += val(196, 92, 'sector = (θ/360)·πr²', color=GREEN, anchor='start',
                size=9.5)
    body += txt(196, 118, 'θ over 360 is the slice', size=9, color=FAINT,
                anchor='start', weight='700')
    return svg(w, h, body)


def inscribed_angle(arc_deg=70, w=310, h=195):
    O = (104, 100)
    R = 66
    a0, a1 = radians(-145), radians(-145 + arc_deg)
    A = (O[0] + R * cos(a0), O[1] + R * sin(a0))
    B = (O[0] + R * cos(a1), O[1] + R * sin(a1))
    Cang = radians(-145 + arc_deg + (360 - arc_deg) / 2)
    C = (O[0] + R * cos(Cang), O[1] + R * sin(Cang))
    body = circ(O, R, fill='#fff')
    body += path('M%.1f %.1f A%.1f %.1f 0 0 1 %.1f %.1f' % (A[0], A[1], R, R, B[0], B[1]),
                 stroke=RED, w=3.8)
    body += line(O, A, stroke=INK, w=1.6) + line(O, B, stroke=INK, w=1.6)
    body += line(C, A, stroke=GREEN, w=1.8) + line(C, B, stroke=GREEN, w=1.8)
    body += ang(O, A, B, '%g%s' % (arc_deg, DEG), r=23, color=INK, lr=38, size=10)
    body += ang(C, A, B, '%g%s' % (arc_deg / 2.0, DEG), r=26, color=GREEN, lr=44, size=10)
    body += dot(O, 3, INK)
    for p, nm, dx, dy in ((A, 'A', -12, -6), (B, 'B', 4, -13), (C, 'C', 0, 14)):
        body += txt(p[0] + dx, p[1] + dy, nm, size=10, color=GREY, weight='700')
    body += val(202, 62, 'at the centre', color=INK, anchor='start', size=9.5)
    body += val(202, 78, '= the arc, %g%s' % (arc_deg, DEG), color=INK, anchor='start', size=9.5)
    body += val(202, 108, 'on the circle', color=GREEN, anchor='start', size=9.5)
    body += val(202, 124, '= half, %g%s' % (arc_deg / 2.0, DEG), color=GREEN,
                anchor='start', size=9.5)
    return svg(w, h, body)


def semicircle_right(w=275, h=180):
    O = (124, 98)
    R = 64
    A, B = (O[0] - R, O[1]), (O[0] + R, O[1])
    C = (O[0] + R * cos(radians(-118)), O[1] + R * sin(radians(-118)))
    body = circ(O, R, fill='#fff')
    body += poly([A, B, C], fill=FILLB, stroke=INK, w=1.8)
    body += line(A, B, stroke=RED, w=2.4, dash='7 4')
    body += right(C, A, B, s=12, stroke=RED)
    body += ang(C, A, B, '90' + DEG, r=24, color=RED, lr=42, size=10)
    body += dot(O, 3, INK)
    for p, nm, dx, dy in ((A, 'A', -12, 4), (B, 'B', 12, 4), (C, 'C', -4, -14)):
        body += txt(p[0] + dx, p[1] + dy, nm, size=10, color=GREY, weight='700')
    body += val(136, 18, 'AB is a diameter → the arc AB is 180' + DEG, color=FAINT)
    return svg(w, h, body)


def tangent_figure(r=5, pq=12, oq=13, w=310, h=175):
    O = (82, 116)
    R = 44.0
    sc = R / float(r)
    P = (O[0], O[1] - R)
    Q = (P[0] + pq * sc, P[1])
    body = circ(O, R, fill=FILLB)
    body += line((O[0] - 52, P[1]), (Q[0] + 18, P[1]), stroke=GREEN, w=2.2)
    body += line(O, P, stroke=INK, w=2)
    body += line(O, Q, stroke=RED, w=2)
    body += right(P, O, Q, s=12, stroke=RED)
    body += dot(O, 3, INK) + dot(P, 3, INK) + dot(Q, 3, INK)
    body += txt(O[0] - 13, O[1] + 5, 'O', size=10, color=GREY, weight='700')
    body += txt(P[0] - 8, P[1] - 14, 'P', size=10, color=GREY, weight='700')
    body += txt(Q[0] + 12, Q[1] - 10, 'Q', size=10, color=GREY, weight='700')
    body += val(O[0] - 16, mid(O, P)[1], str(r), color=INK)
    body += val(mid(P, Q)[0], P[1] - 14, str(pq), color=GREEN)
    body += val(mid(O, Q)[0] + 10, mid(O, Q)[1] + 16, str(oq), color=RED)
    body += val(215, 142, 'tangent ⊥ radius', color=GREEN)
    body += val(215, 158, 'so OPQ is right-angled', color=FAINT, size=9.5)
    return svg(w, h, body)


def chord_figure(chord=16, r=10, d=6, w=285, h=190):
    O = (118, 92)
    R = 60.0
    sc = R / float(r)
    half = chord / 2.0 * sc
    dy = d * sc
    M = (O[0], O[1] + dy)
    A, B = (M[0] - half, M[1]), (M[0] + half, M[1])
    body = circ(O, R, fill='#fff')
    body += line(A, B, stroke=GREEN, w=2.8)
    body += line(O, M, stroke=RED, w=2)
    body += line(O, B, stroke=INK, w=1.6)
    body += right(M, A, O, s=10, stroke=RED)
    body += ticks(M, A, 1, stroke=AMBER) + ticks(M, B, 1, stroke=AMBER)
    body += dot(O, 3, INK)
    body += val(mid(M, A)[0] - 8, M[1] + 17, '%g' % (chord / 2.0), color=AMBER)
    body += val(mid(M, B)[0] + 8, M[1] + 17, '%g' % (chord / 2.0), color=AMBER)
    body += val(O[0] - 24, mid(O, M)[1], 'd = %g' % d, color=RED)
    body += val(mid(O, B)[0] + 22, mid(O, B)[1] - 12, 'r = %g' % r, color=INK)
    body += val(142, 18, 'legs %g and d, hypotenuse %g' % (chord / 2.0, r), color=INK)
    return svg(w, h, body)


def circle_on_grid(hc=3, kc=-1, r=3, eq=None, w=290, h=205, xmin=-2, xmax=8,
                   ymin=-6, ymax=4):
    ax = Axes(36, 30, 228, 158, xmin, xmax, ymin, ymax, step=1, tick_every=2)
    body = ax.draw()
    O = ax.P(hc, kc)
    Rpx = r * ax.sx
    body += circ(O, Rpx, fill='rgba(219,230,245,0.55)', stroke=INK, w=2)
    body += line(O, (O[0] + Rpx, O[1]), stroke=RED, w=2)
    body += val(O[0] + Rpx / 2, O[1] - 12, 'r = %g' % r, color=RED)
    body += dot(O, 3.6, RED)
    body += val(O[0], O[1] + 18, 'centre (%g, %g)' % (hc, kc), color=RED, size=9.5)
    body += val(w / 2, 14, eq or '(x − %g)² + (y + %g)² = %g'
                % (hc, -kc, r * r), color=INK, size=10.5)
    return svg(w, h, body)


def complete_square(b=8, w=340, h=160):
    """Area model for x squared plus bx."""
    half = b / 2.0
    s = 10.0
    x = 6.4 * s
    ox, oy = 32, 40
    hs = half * s
    body = poly([(ox, oy), (ox + x, oy), (ox + x, oy + x), (ox, oy + x)], fill=FILLB)
    body += txt(ox + x / 2, oy + x / 2, 'x²', size=12, color=INK, weight='700')
    body += poly([(ox + x, oy), (ox + x + hs, oy), (ox + x + hs, oy + x), (ox + x, oy + x)],
                 fill=FILLG, stroke=GREEN)
    body += txt(ox + x + hs / 2, oy + x / 2, '%gx' % half, size=9.5, color=GREEN, weight='700')
    body += poly([(ox, oy + x), (ox + x, oy + x), (ox + x, oy + x + hs), (ox, oy + x + hs)],
                 fill=FILLG, stroke=GREEN)
    body += txt(ox + x / 2, oy + x + hs / 2, '%gx' % half, size=9.5, color=GREEN, weight='700')
    body += poly([(ox + x, oy + x), (ox + x + hs, oy + x), (ox + x + hs, oy + x + hs),
                  (ox + x, oy + x + hs)], fill=FILLR, stroke=RED, dash='4 3')
    body += txt(ox + x + hs / 2, oy + x + hs / 2, '%g' % (half * half), size=9.5,
                color=RED, weight='700')
    body += val(196, 58, 'x² + %gx' % b, color=INK, anchor='start')
    body += val(196, 84, '= (x + %g)² − %g' % (half, half * half), color=GREEN,
                anchor='start')
    body += txt(196, 112, 'halve %g, square it,' % b, size=9, color=RED, anchor='start',
                weight='700')
    body += txt(196, 126, 'then subtract it back', size=9, color=RED, anchor='start',
                weight='700')
    return svg(w, h, body)


# ---------------------------------------------------------------- area & volume

def area_triangle(b=12, hh=7, slanted=False, w=265, h=155):
    sc = 10.5
    base_y = 120
    A = (42, base_y)
    B = (A[0] + b * sc, base_y)
    apex_x = A[0] + b * sc * (1.3 if slanted else 0.42)
    C = (apex_x, base_y - hh * sc)
    body = poly([A, B, C], fill=FILLB)
    F = (apex_x, base_y)
    body += line(C, F, stroke=RED, w=1.8, dash='5 4')
    if slanted:
        body += line(B, F, stroke=FAINT, w=1.2, dash='4 3')
    body += right(F, A, C, s=9, stroke=RED)
    body += dim(A, B, 'base %g' % b, off=22, side=1, color=INK)
    body += val(F[0] + 14, base_y - hh * sc / 2, 'height %g' % hh, color=RED, anchor='start')
    body += val(w / 2, 16, 'area = ½ × %g × %g = %g' % (b, hh, 0.5 * b * hh),
                color=INK)
    return svg(w, h, body)


def area_parallelogram(b=9, hh=5, slant=6, w=265, h=145):
    sc = 12.5
    base_y = 112
    A = (46, base_y)
    B = (A[0] + b * sc, base_y)
    dx = sqrt(max(slant * slant - hh * hh, 0.01)) * sc
    D = (A[0] + dx, base_y - hh * sc)
    C = (B[0] + dx, base_y - hh * sc)
    body = poly([A, B, C, D], fill=FILLB)
    F = (D[0], base_y)
    body += line(D, F, stroke=RED, w=1.8, dash='5 4')
    body += right(F, B, D, s=9, stroke=RED)
    body += dim(A, B, 'base %g' % b, off=20, side=1, color=INK)
    body += val(F[0] + 16, base_y - hh * sc / 2, 'height %g' % hh, color=RED, anchor='start')
    body += val(mid(A, D)[0] - 24, mid(A, D)[1], 'slant %g' % slant, color=FAINT)
    body += val(w / 2, 16, 'area = %g × %g = %g' % (b, hh, b * hh), color=INK)
    return svg(w, h, body)


def area_trapezoid(a=8, b=14, hh=5, w=275, h=150):
    sc = 12.5
    base_y = 116
    A = (40, base_y)
    B = (A[0] + b * sc, base_y)
    inset = (b - a) * sc / 2.0
    D = (A[0] + inset, base_y - hh * sc)
    C = (B[0] - inset, base_y - hh * sc)
    body = poly([A, B, C, D], fill=FILLB)
    body += line(D, (D[0], base_y), stroke=RED, w=1.6, dash='5 4')
    body += right((D[0], base_y), B, D, s=9, stroke=RED)
    body += dim(D, C, 'a = %g' % a, off=18, side=-1, color=INK)
    body += dim(A, B, 'b = %g' % b, off=20, side=1, color=INK)
    body += val(D[0] + 16, base_y - hh * sc / 2, 'h = %g' % hh, color=RED, anchor='start')
    body += val(w / 2, 16, 'area = ½(%g + %g)(%g) = %g'
                % (a, b, hh, 0.5 * (a + b) * hh), color=INK)
    return svg(w, h, body)


def composite_square_circle(s=10, r=5, w=255, h=160):
    sc = 10.5
    S = s * sc
    ox, oy = 72, 36
    body = poly([(ox, oy), (ox + S, oy), (ox + S, oy + S), (ox, oy + S)], fill=FILLB)
    O = (ox + S / 2, oy + S / 2)
    body += circ(O, r * sc, fill='#fff', stroke=RED, w=2, dash='6 4')
    body += line(O, (O[0] + r * sc, O[1]), stroke=RED, w=1.6)
    body += val(O[0] + r * sc / 2, O[1] - 12, 'r = %g' % r, color=RED)
    body += dim((ox, oy + S), (ox + S, oy + S), str(s), off=18, side=1, color=INK)
    body += val(w / 2, 16, 'shaded = %g − %gπ' % (s * s, r * r), color=INK)
    return svg(w, h, body)


def lshape(W=10, H=6, cw=4, ch=3, w=255, h=150):
    sc = 12.5
    ox, oy = 48, 34
    pts = [(ox, oy), (ox + (W - cw) * sc, oy), (ox + (W - cw) * sc, oy + ch * sc),
           (ox + W * sc, oy + ch * sc), (ox + W * sc, oy + H * sc), (ox, oy + H * sc)]
    body = poly(pts, fill=FILLB)
    body += poly([(ox + (W - cw) * sc, oy), (ox + W * sc, oy), (ox + W * sc, oy + ch * sc),
                  (ox + (W - cw) * sc, oy + ch * sc)], fill='#fdeceb', stroke=RED,
                 w=1.5, dash='5 4')
    body += txt(ox + (W - cw / 2.0) * sc, oy + ch * sc / 2, '%g × %g' % (cw, ch),
                size=9.5, color=RED, weight='700')
    body += dim((ox, oy + H * sc), (ox + W * sc, oy + H * sc), str(W), off=18, side=1, color=INK)
    body += dim((ox, oy + H * sc), (ox, oy), str(H), off=18, side=-1, color=INK)
    body += val(w / 2, 16, 'area = %g − %g = %g' % (W * H, cw * ch, W * H - cw * ch),
                color=INK)
    return svg(w, h, body)


def rect_minus_triangle(W=12, H=8, w=265, h=145):
    sc = 12.5
    ox, oy = 56, 32
    body = poly([(ox, oy), (ox + W * sc, oy), (ox + W * sc, oy + H * sc), (ox, oy + H * sc)],
                fill=FILLB)
    body += poly([(ox, oy + H * sc), (ox + W * sc, oy + H * sc), (ox, oy)],
                 fill=FILLG, stroke=GREEN, w=1.8)
    body += dim((ox, oy + H * sc), (ox + W * sc, oy + H * sc), 'base %g' % W, off=18,
                side=1, color=INK)
    body += dim((ox + W * sc, oy + H * sc), (ox + W * sc, oy), 'height %g' % H, off=22,
                side=1, color=INK)
    body += val(w / 2, 16, 'rectangle %g, triangle %g → half'
                % (W * H, W * H / 2), color=INK)
    return svg(w, h, body)


def _cyl(ox, oy, rx, hh, fill=FILLB, stroke=INK):
    ry = rx * 0.30
    out = path('M%.1f %.1f L%.1f %.1f A%.1f %.1f 0 0 0 %.1f %.1f L%.1f %.1f'
               % (ox - rx, oy, ox - rx, oy + hh, rx, ry, ox + rx, oy + hh, ox + rx, oy),
               fill=fill, stroke=stroke)
    out += ell((ox, oy), rx, ry, fill='#fff', stroke=stroke)
    out += path('M%.1f %.1f A%.1f %.1f 0 0 0 %.1f %.1f'
                % (ox - rx, oy + hh, rx, ry, ox + rx, oy + hh), stroke=stroke, dash='4 4')
    return out


def cylinder(r=3, hh=8, w=230, h=182):
    rx, H = 40.0, 84.0
    ox, oy = 86, 58
    body = _cyl(ox, oy, rx, H)
    body += line((ox, oy), (ox + rx, oy), stroke=RED, w=1.8)
    body += val(ox + rx / 2, oy - 22, 'r = %g' % r, color=RED)
    body += line((ox + rx + 22, oy), (ox + rx + 22, oy + H), stroke=GREEN, w=1.2)
    body += arrow((ox + rx + 22, oy), (ox + rx + 22, oy + H), stroke=GREEN, both=True, w=1.2)
    body += val(ox + rx + 46, oy + H / 2, 'h = %g' % hh, color=GREEN)
    body += val(w / 2, 16, 'V = πr²h = π(%g)(%g) = %gπ'
                % (r * r, hh, r * r * hh), color=INK)
    return svg(w, h, body)


def cone(r=6, hh=10, w=230, h=180):
    rx, H = 44.0, 92.0
    ox, oy = 92, 136
    body = poly([(ox - rx, oy), (ox, oy - H), (ox + rx, oy)], fill=FILLG, stroke=GREEN)
    body += ell((ox, oy), rx, rx * 0.30, fill='none', stroke=GREEN)
    body += line((ox, oy), (ox, oy - H), stroke=RED, w=1.6, dash='5 4')
    body += line((ox, oy), (ox + rx, oy), stroke=RED, w=1.8)
    body += right((ox, oy), (ox + rx, oy), (ox, oy - H), s=9, stroke=RED)
    body += val(ox + rx / 2 + 14, oy + 26, 'r = %g' % r, color=RED)
    body += val(ox + 24, oy - H / 2, 'h = %g' % hh, color=RED, anchor='start')
    body += val(w / 2, 16, 'V = ⅓πr²h = ⅓π(%g)(%g) = %gπ'
                % (r * r, hh, r * r * hh / 3.0), color=GREEN)
    return svg(w, h, body)


def sphere(r=3, w=215, h=170):
    O = (104, 90)
    R = 54.0
    body = circ(O, R, fill=FILLR, stroke=RED)
    body += ell(O, R, R * 0.28, fill='none', stroke=RED, w=1.2, dash='5 4')
    body += line(O, (O[0] + R, O[1]), stroke=INK, w=1.8)
    body += val(O[0] + R / 2 + 6, O[1] - 15, 'r = %g' % r, color=INK)
    body += dot(O, 2.6, INK)
    body += val(w / 2, 16, 'V = ⁴⁄₃πr³ = ⁴⁄₃π(%g) = %gπ'
                % (r ** 3, round(4 * r ** 3 / 3.0, 2)), color=RED)
    return svg(w, h, body)


def cuboid(a=40, b=25, c=30, w=255, h=175, unit_name='cm', note=None):
    ox, oy = 50, 58
    W, H, D = 112.0, 74.0, 34.0
    body = poly([(ox, oy), (ox + W, oy), (ox + W, oy + H), (ox, oy + H)], fill=FILLB)
    body += poly([(ox, oy), (ox + D, oy - D * 0.62), (ox + W + D, oy - D * 0.62), (ox + W, oy)],
                 fill='#eaf0f9')
    body += poly([(ox + W, oy), (ox + W + D, oy - D * 0.62),
                  (ox + W + D, oy + H - D * 0.62), (ox + W, oy + H)], fill='#e2eaf6')
    body += dim((ox, oy + H), (ox + W, oy + H), '%g %s' % (a, unit_name), off=18,
                side=1, color=INK)
    body += dim((ox + W + D, oy + H - D * 0.62), (ox + W + D, oy - D * 0.62),
                '%g %s' % (c, unit_name), off=16, side=1, color=INK, lab_off=-22)
    body += val(ox + W + D / 2 + 6, oy - D * 0.84, '%g %s' % (b, unit_name), color=INK)
    body += val(w / 2, 16, note or ('V = %g × %g × %g = %s %s³'
                % (a, b, c, '{:,}'.format(a * b * c), unit_name)), color=INK)
    return svg(w, h, body)


def prism_triangular(area=15, length=10, w=265, h=160):
    ox, oy = 46, 46
    front = [(ox, oy + 74), (ox + 54, oy), (ox + 84, oy + 74)]
    off = (64, -26)
    back = [(p[0] + off[0], p[1] + off[1]) for p in front]
    body = poly(back, fill='#eaf0f9')
    for i in range(3):
        body += line(front[i], back[i], stroke=INK, w=1.5)
    body += poly(front, fill=FILLB)
    body += val(ox + 46, oy + 52, 'base area %g' % area, color=INK, size=9.5)
    body += arrow((ox + 90, oy + 82), (ox + 90 + off[0], oy + 82 + off[1]), stroke=GREEN)
    body += val(ox + 150, oy + 84, 'length %g' % length, color=GREEN)
    body += val(w / 2, 16, 'V = %g × %g = %g' % (area, length, area * length), color=INK)
    return svg(w, h, body)


def pyramid(w=230, h=170):
    ox, oy = 104, 132
    W, D = 56.0, 22.0
    base = [(ox - W, oy), (ox - W + D * 1.6, oy - D), (ox + W, oy - D), (ox + W - D * 1.6, oy)]
    apex = (ox - 4, oy - 94)
    body = poly(base, fill='#eaf0f9')
    body += poly([base[0], apex, base[3]], fill=FILLB)
    body += poly([base[3], apex, base[2]], fill='#cfdcef')
    body += line(base[1], apex, stroke=INK, w=1.3, dash='4 3')
    body += line(apex, (apex[0], oy - D / 2), stroke=RED, w=1.5, dash='5 4')
    body += val(apex[0] + 18, oy - 56, 'h', color=RED)
    body += val(w / 2, 16, 'V = ⅓ × base area × h', color=INK)
    return svg(w, h, body)


def solids_row(w=350, h=165):
    """The four reference-sheet solids side by side."""
    body = val(172, 14, 'all four are on the reference sheet', color=FAINT)
    body += _cyl(48, 44, 28, 68)
    body += val(48, 140, 'V = πr²h', color=INK, size=9.5)
    ox, oy = 132, 112
    body += poly([(ox - 30, oy), (ox, oy - 68), (ox + 30, oy)], fill=FILLG, stroke=GREEN)
    body += ell((ox, oy), 30, 9, fill='none', stroke=GREEN)
    body += val(ox, 140, 'V = ⅓πr²h', color=GREEN, size=9.5)
    body += circ((222, 78), 34, fill=FILLR, stroke=RED)
    body += ell((222, 78), 34, 10, fill='none', stroke=RED, w=1.2, dash='5 4')
    body += val(222, 140, 'V = ⁴⁄₃πr³', color=RED, size=9.5)
    ox2, oy2 = 292, 52
    body += poly([(ox2, oy2), (ox2 + 42, oy2), (ox2 + 42, oy2 + 60), (ox2, oy2 + 60)], fill=FILLB)
    body += poly([(ox2, oy2), (ox2 + 14, oy2 - 13), (ox2 + 56, oy2 - 13), (ox2 + 42, oy2)],
                 fill='#eaf0f9')
    body += poly([(ox2 + 42, oy2), (ox2 + 56, oy2 - 13), (ox2 + 56, oy2 + 47), (ox2 + 42, oy2 + 60)],
                 fill='#e2eaf6')
    body += val(ox2 + 24, 140, 'V = Bh', color=INK, size=9.5)
    return svg(w, h, body)


def _cube(ox, oy, s, fill, stroke):
    d = s * 0.32
    out = poly([(ox, oy), (ox + s, oy), (ox + s, oy + s), (ox, oy + s)], fill=fill, stroke=stroke)
    out += poly([(ox, oy), (ox + d, oy - d), (ox + s + d, oy - d), (ox + s, oy)],
                fill=fill, stroke=stroke)
    out += poly([(ox + s, oy), (ox + s + d, oy - d), (ox + s + d, oy + s - d), (ox + s, oy + s)],
                fill=fill, stroke=stroke)
    return out


def scale_solid(k=2, w=345, h=170):
    body = _cube(30, 92, 38, FILLB, INK)
    body += val(50, 146, 'edge 1', color=INK)
    body += _cube(104, 56, 76, FILLG, GREEN)
    body += val(144, 146, 'edge %g' % k, color=GREEN)
    body += val(216, 62, 'edges × %g' % k, color=INK, anchor='start')
    body += val(216, 88, 'surface × %g² = %g' % (k, k ** 2), color=GREEN, anchor='start')
    body += val(216, 114, 'volume × %g³ = %g' % (k, k ** 3), color=RED, anchor='start')
    body += txt(216, 26, 'change every dimension', size=9, color=FAINT, anchor='start',
                weight='700')
    return svg(w, h, body)


def unit_conversion(w=350, h=175):
    """1 litre = 1000 cubic centimetres against 1 cubic metre = 1,000,000."""
    body = _cube(34, 88, 42, FILLB, INK)
    body += val(55, 142, '10 cm each way', color=INK, size=9.5)
    body += val(55, 160, '1 litre = 1 000 cm³', color=INK, size=9.5)
    body += _cube(170, 50, 80, FILLG, GREEN)
    body += val(210, 142, '100 cm each way', color=GREEN, size=9.5)
    body += val(210, 160, '1 m³ = 1 000 000 cm³', color=GREEN, size=9.5)
    body += txt(175, 16, 'the length factor is cubed: 10³ and 100³', size=9.5,
                color=FAINT, weight='700')
    return svg(w, h, body)


def density(mass=540, vol=60, w=320, h=140):
    body = _cube(42, 46, 56, FILLB, INK)
    body += val(70, 76, '%g cm³' % vol, color=INK)
    body += val(70, 124, 'mass %g g' % mass, color=GREY)
    body += val(168, 54, 'density = mass ÷ volume', color=INK, anchor='start')
    body += val(168, 84, '%g ÷ %g = %g g/cm³' % (mass, vol, mass / float(vol)),
                color=RED, anchor='start')
    return svg(w, h, body)


# ---------------------------------------------------------------- coordinate geometry

def coord_distance(p=(1, 2), q=(5, 5), show_mid=False, w=300, h=195,
                   xmin=-1, xmax=7, ymin=-1, ymax=7, label=None):
    ax = Axes(36, 28, 230, 156, xmin, xmax, ymin, ymax, tick_every=2)
    body = ax.draw()
    P, Q = ax.P(*p), ax.P(*q)
    C = ax.P(q[0], p[1])
    body += line(P, C, stroke=GREEN, w=2, dash='6 4')
    body += line(C, Q, stroke=GREEN, w=2, dash='6 4')
    body += line(P, Q, stroke=RED, w=2.4)
    body += right(C, P, Q, s=9, stroke=GREEN)
    dx, dy = abs(q[0] - p[0]), abs(q[1] - p[1])
    body += val(mid(P, C)[0], P[1] + 14, str(dx), color=GREEN)
    body += val(C[0] + 14, mid(C, Q)[1], str(dy), color=GREEN)
    body += dot(P) + dot(Q)
    body += val(P[0] - 8, P[1] + 13, '(%g, %g)' % p, color=RED, anchor='end', size=9.5)
    body += val(Q[0] + 8, Q[1] - 11, '(%g, %g)' % q, color=RED, anchor='start', size=9.5)
    if show_mid:
        mx, my = (p[0] + q[0]) / 2.0, (p[1] + q[1]) / 2.0
        M = ax.P(mx, my)
        body += dot(M, 4.2, GREEN)
        body += val(M[0] + 6, M[1] + 16, 'midpoint (%g, %g)' % (mx, my), color=GREEN, size=9.5)
    d = sqrt(dx * dx + dy * dy)
    body += val(w / 2, 14, label or ('d = √(%g² + %g²) = %g' % (dx, dy, d)),
                color=RED, size=10.5)
    return svg(w, h, body)


def coord_slope(p=(1, 2), q=(5, 5), w=295, h=190, xmin=-1, xmax=7, ymin=-1, ymax=7,
                label=None):
    ax = Axes(36, 28, 226, 152, xmin, xmax, ymin, ymax, tick_every=2)
    body = ax.draw()
    P, Q = ax.P(*p), ax.P(*q)
    if q[0] != p[0]:
        m = (q[1] - p[1]) / float(q[0] - p[0])
        body += line(ax.P(xmin, p[1] + m * (xmin - p[0])),
                     ax.P(xmax, p[1] + m * (xmax - p[0])), stroke=INK, w=2)
    else:
        body += line(ax.P(p[0], ymin), ax.P(p[0], ymax), stroke=INK, w=2)
    C = ax.P(q[0], p[1])
    body += line(P, C, stroke=GREY, w=1.5, dash='5 4')
    body += line(C, Q, stroke=RED, w=2)
    body += val(mid(P, C)[0], P[1] + 15, 'run %g' % (q[0] - p[0]), color=GREY)
    body += val(C[0] + 18, mid(C, Q)[1], 'rise %g' % (q[1] - p[1]), color=RED, anchor='start')
    body += dot(P) + dot(Q)
    body += val(P[0] - 8, P[1] + 13, '(%g, %g)' % p, color=RED, anchor='end', size=9.5)
    body += val(Q[0] + 8, Q[1] - 11, '(%g, %g)' % q, color=RED, anchor='start', size=9.5)
    if q[0] != p[0]:
        lab = label or ('m = rise/run = %g/%g' % (q[1] - p[1], q[0] - p[0]))
    else:
        lab = label or 'run = 0 → slope undefined'
    body += val(w / 2, 14, lab, color=INK, size=10.5)
    return svg(w, h, body)


def slope_signs(w=345, h=140):
    """Positive, negative, zero and undefined, side by side."""
    specs = [((0, 0), (1, 1), 'positive', INK), ((0, 1), (1, 0), 'negative', GREEN),
             ((0, 0.5), (1, 0.5), 'zero', AMBER), ((0.5, 0), (0.5, 1), 'undefined', RED)]
    body = val(172, 16, 'read the picture before you trust the sign', color=FAINT)
    for i, (a, b, lab, col) in enumerate(specs):
        ox, oy, s = 26 + i * 80, 34, 58.0
        body += poly([(ox, oy), (ox + s, oy), (ox + s, oy + s), (ox, oy + s)],
                     fill='#f7f9fc', stroke='#dbe1e8', w=1)
        body += line((ox + a[0] * s, oy + (1 - a[1]) * s), (ox + b[0] * s, oy + (1 - b[1]) * s),
                     stroke=col, w=2.6)
        body += val(ox + s / 2, oy + s + 16, lab, color=col, size=9.5)
    return svg(w, h, body)


def perp_lines(m=2 / 3.0, w=295, h=190, mlabel='2/3', plabel='−3/2'):
    ax = Axes(36, 28, 226, 152, -4, 4, -4, 4, tick_every=2)
    body = ax.draw()

    def seg(mm, c, col, dash=None):
        return line(ax.P(-4, mm * -4 + c), ax.P(4, mm * 4 + c), stroke=col, w=2.2, dash=dash)

    body += seg(m, 0, INK)
    body += seg(m, 2.4, INK, dash='7 4')
    body += seg(-1.0 / m, 0, RED)
    body += val(w / 2, 14, 'slopes %s and %s multiply to −1' % (mlabel, plabel),
                color=RED, size=10.5)
    body += val(w - 10, h - 24, 'parallel: same slope', color=INK, anchor='end', size=9.5)
    return svg(w, h, body)


def coord_area(verts=((0, 0), (6, 0), (0, 4)), w=295, h=190, xmin=-1, xmax=9,
               ymin=-1, ymax=7, base=None, height=None, label=None):
    ax = Axes(36, 28, 226, 152, xmin, xmax, ymin, ymax, tick_every=2)
    body = ax.draw()
    pts = [ax.P(*v) for v in verts]
    body += poly(pts, fill='rgba(219,230,245,0.8)')
    for v, p in zip(verts, pts):
        body += dot(p, 3.2, RED)
        body += val(p[0] + 9, p[1] - 11, '(%g, %g)' % v, color=RED, anchor='start', size=9)
    if base:
        body += dim(ax.P(*base[0]), ax.P(*base[1]), 'base %g' % base[2], off=17,
                    side=-1, color=INK)
    if height:
        body += line(ax.P(*height[0]), ax.P(*height[1]), stroke=GREEN, w=1.8, dash='5 4')
        hp = mid(ax.P(*height[0]), ax.P(*height[1]))
        body += val(hp[0] + 16, hp[1], 'height %g' % height[2], color=GREEN, anchor='start')
    if label:
        body += val(w / 2, 14, label, color=INK, size=10.5)
    return svg(w, h, body)


# ---------------------------------------------------------------- extra figures

def two_triangles(s1=('3', '4', '5'), s2=('6', '8', '11'), names1=('A', 'B', 'C'),
                  names2=('D', 'E', 'F'), ratios=None, k=None, w=345, h=175,
                  bad=None):
    """Two general triangles side by side, with their sides labelled."""
    def tri(ox, oy, sc, col, fillc, labs, nms):
        A = (ox, oy)
        B = (ox + 9.4 * sc, oy)
        C = (ox + 3.2 * sc, oy - 6.0 * sc)
        out = poly([A, B, C], fill=fillc, stroke=col)
        out += val(mid(A, B)[0], oy + 15, labs[0], color=col, size=9.5)
        out += val(mid(B, C)[0] + 16, mid(B, C)[1], labs[1], color=col, size=9.5)
        out += val(mid(C, A)[0] - 16, mid(C, A)[1], labs[2], color=col, size=9.5)
        out += txt(A[0] - 11, A[1] + 11, nms[0], size=9.5, color=GREY, weight='700')
        out += txt(B[0] + 11, B[1] + 11, nms[1], size=9.5, color=GREY, weight='700')
        out += txt(C[0], C[1] - 12, nms[2], size=9.5, color=GREY, weight='700')
        return out

    body = tri(32, 128, 8.2, INK, FILLB, s1, names1)
    body += tri(190, 128, 8.2, GREEN, FILLG, s2, names2)
    if k:
        body += arrow((136, 44), (176, 44), stroke=GREEN, w=1.5)
        body += val(156, 30, '×%s' % k, color=GREEN)
    if ratios:
        y = 150
        parts = []
        for i, rr in enumerate(ratios):
            parts.append(rr)
        body += val(w / 2, y + 12, '   '.join(parts),
                    color=RED if bad else GREEN, size=9.5)
    return svg(w, h, body)


def similar_right_pair(acute=35, w=330, h=160):
    """Two right triangles sharing one acute angle, so they are similar."""
    def tri(ox, oy, s, col, fillc):
        A = (ox, oy)
        B = (ox + 1.4 * s, oy)
        C = (ox, oy - 1.0 * s)
        out = poly([A, B, C], fill=fillc, stroke=col)
        out += right(A, B, C, s=9, stroke=col)
        out += ang(B, A, C, '%g%s' % (acute, DEG), r=20, color=AMBER, lr=34, size=9.5)
        out += ang(C, B, A, '%g%s' % (90 - acute, DEG), r=17, color=col, lr=30, size=9.5)
        return out

    body = tri(30, 118, 52, INK, FILLB)
    body += tri(176, 138, 76, GREEN, FILLG)
    body += val(165, 18, 'both have 90%s and %g%s, so the third is %g%s in each'
                % (DEG, acute, DEG, 90 - acute, DEG), color=FAINT)
    return svg(w, h, body)


def rect_pair(a=2, b=5, w=345, h=165):
    """Two similar rectangles: lengths in a : b, areas in a squared : b squared."""
    u = 13.0
    body = poly([(30, 124 - a * u), (30 + a * u * 1.4, 124 - a * u),
                 (30 + a * u * 1.4, 124), (30, 124)], fill=FILLB)
    body += val(30 + a * u * 0.7, 138, 'side %g' % a, color=INK)
    ox = 30 + a * u * 1.4 + 26
    body += poly([(ox, 124 - b * u), (ox + b * u * 1.4, 124 - b * u),
                  (ox + b * u * 1.4, 124), (ox, 124)], fill=FILLG, stroke=GREEN)
    body += val(ox + b * u * 0.7, 138, 'side %g' % b, color=GREEN)
    body += val(w / 2, 16, 'lengths %g : %g → areas %g² : %g² = %g : %g'
                % (a, b, a, b, a * a, b * b), color=RED)
    return svg(w, h, body)


def cube_pair(a=2, b=6, vol1=8, vol2=216, w=345, h=170):
    body = _cube(34, 108, a * 11.0, FILLB, INK)
    body += val(34 + a * 5.5, 150, 'height %g · V = %g' % (a, vol1), color=INK, size=9.5)
    body += _cube(150, 50 + (6 - b) * 11.0, b * 11.0, FILLG, GREEN)
    body += val(150 + b * 5.5, 150, 'height %g · V = %g' % (b, vol2), color=GREEN, size=9.5)
    kk = int(round((vol2 / float(vol1)) ** (1 / 3.0)))
    body += val(w / 2, 16, 'volumes %g : %g → ∛%g = %g, so heights 1 : %g'
                % (vol1, vol2, vol2 / vol1, kk, kk), color=RED)
    return svg(w, h, body)


def tank_pair(k=30, small='2 litres', big='54 000 litres', w=345, h=160):
    body = _cube(34, 96, 34, FILLB, INK)
    body += val(51, 142, 'model · %s' % small, color=INK, size=9.5)
    body += _cube(150, 46, 84, FILLG, GREEN)
    body += val(192, 142, 'real tank · %s' % big, color=GREEN, size=9.5)
    body += arrow((110, 70), (144, 70), stroke=GREEN, w=1.5)
    body += val(127, 56, '×%g' % k, color=GREEN)
    body += val(w / 2, 16, 'lengths × %g → volume × %g³ = %s'
                % (k, k, '{:,}'.format(k ** 3).replace(',', ' ')), color=RED)
    return svg(w, h, body)


def rect_diagonal(a=40, b=30, d=50, w=280, h=160, unit_name='m', note=None):
    sc = min(150.0 / a, 86.0 / b)
    ox, oy = 50, 34
    A = (ox, oy)
    B = (ox + a * sc, oy)
    C = (ox + a * sc, oy + b * sc)
    D = (ox, oy + b * sc)
    body = poly([A, B, C, D], fill=FILLB)
    body += line(A, C, stroke=RED, w=2.2)
    body += right(B, A, C, s=10)
    body += val(mid(A, B)[0], oy - 13, '%g %s' % (a, unit_name), color=INK)
    body += val(B[0] + 24, mid(B, C)[1], '%g %s' % (b, unit_name), color=INK)
    body += val(mid(A, C)[0] - 6, mid(A, C)[1] + 16, '%g %s' % (d, unit_name), color=RED)
    body += val(w / 2, h - 10, note or ('diagonal = √(%g + %g) = %g'
                % (a * a, b * b, d)), color=FAINT)
    return svg(w, h, body)


def cylinder_pair(h1=2, h2=3, w=330, h=175):
    body = _cyl(66, 112 - h1 * 26, 26, h1 * 26)
    body += val(66, 136, 'height %g' % h1, color=INK, size=9.5)
    body += _cyl(190, 112 - h2 * 26, 26, h2 * 26, fill=FILLG, stroke=GREEN)
    body += val(190, 136, 'height %g' % h2, color=GREEN, size=9.5)
    body += val(w / 2, 16, 'similar solids: lengths %g : %g → volumes %g³ : %g³ = %g : %g'
                % (h1, h2, h1, h2, h1 ** 3, h2 ** 3), color=RED)
    return svg(w, h, body)


def cube_faces(area=150, w=330, h=165):
    face = area / 6.0
    edge = sqrt(face)
    body = _cube(40, 72, 62, FILLB, INK)
    body += val(71, 150, 'surface area %g' % area, color=INK, size=9.5)
    body += val(205, 56, '6 faces → each %g' % face, color=GREEN, anchor='start')
    body += val(205, 82, 'edge = √%g = %g' % (face, edge), color=INK, anchor='start')
    body += val(205, 108, 'V = %g³ = %g' % (edge, edge ** 3), color=RED, anchor='start')
    return svg(w, h, body)


def coord_lines(lines=((2, 4, '#1f4e79', 'y = 2x + 4'),), w=295, h=190, xmin=-5, xmax=5,
                ymin=-5, ymax=7, points=(), label=None, tick_every=2):
    """Straight lines y = mx + c drawn on a small grid, each with its own label."""
    ax = Axes(36, 28, 226, 152, xmin, xmax, ymin, ymax, tick_every=tick_every)
    body = ax.draw()
    for i, (m, c, col, lab) in enumerate(lines):
        body += line(ax.P(xmin, m * xmin + c), ax.P(xmax, m * xmax + c), stroke=col, w=2.2)
        body += val(w - 12, 36 + i * 16, lab, color=col, anchor='end', size=9.5)
    for (px, py, lab) in points:
        P = ax.P(px, py)
        body += dot(P, 3.6, RED)
        body += val(P[0] + 8, P[1] + 14, lab, color=RED, anchor='start', size=9)
    if label:
        body += val(w / 2, 14, label, color=INK, size=10.5)
    return svg(w, h, body)


def jar_fill(total='4 320π cm³', each='72π cm³', n=60, w=345, h=170):
    """One big volume divided into identical jars."""
    body = _cyl(54, 52, 30, 76)
    body += val(54, 146, 'one jar %s' % each, color=INK, size=9.5)
    for i in range(3):
        body += _cyl(150 + i * 54, 70, 18, 50, fill=FILLG, stroke=GREEN)
    body += txt(262, 100, '…', size=16, color=GREEN)
    body += val(216, 146, 'how many jars fill %s?' % total, color=GREEN, size=9.5)
    body += val(w / 2, 16, '%s ÷ %s = %g jars' % (total, each, n), color=RED)
    return svg(w, h, body)
