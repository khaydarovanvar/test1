# -*- coding: utf-8 -*-
"""The diagrams for the geometry paper, drawn as SVG.

One function per figure, each returning (width_mm, svg). They are rendered to
PNG by render-figures.mjs and embedded in the Word document, so the paper has
real diagrams rather than descriptions of them.
"""

import math

CSS = """
.o { fill:none; stroke:#1A1A1A; stroke-width:2.2; stroke-linejoin:round; }
.d { fill:none; stroke:#1A1A1A; stroke-width:1.6; stroke-dasharray:5 3; }
.h { fill:none; stroke:#1A1A1A; stroke-width:1.6; }
.a { fill:none; stroke:#1A1A1A; stroke-width:1.5; }
/* the figures print at about 70 % of the drawn width, so the lettering is
   set large here to come out readable on paper */
.t { font-family:Georgia,'Times New Roman',serif; font-size:18px; fill:#1A1A1A; }
.ti { font-family:Georgia,'Times New Roman',serif; font-size:16px;
      font-style:italic; fill:#1A1A1A; }
.tk { stroke:#1A1A1A; stroke-width:1.6; }
"""


def _wrap(w, h, body):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" '
            f'width="{w}" height="{h}"><style>{CSS}</style>{body}</svg>')


def _poly(pts, cls='o'):
    return (f'<polygon class="{cls}" points="'
            + ' '.join(f'{x:.1f},{y:.1f}' for x, y in pts) + '"/>')


def _line(p, q, cls='h'):
    return (f'<line class="{cls}" x1="{p[0]:.1f}" y1="{p[1]:.1f}" '
            f'x2="{q[0]:.1f}" y2="{q[1]:.1f}"/>')


def _label(p, text, dx=0, dy=0, cls='t'):
    return (f'<text class="{cls}" x="{p[0] + dx:.1f}" y="{p[1] + dy:.1f}" '
            f'text-anchor="middle">{text}</text>')


def _unit(p, q):
    dx, dy = q[0] - p[0], q[1] - p[1]
    d = math.hypot(dx, dy)
    return dx / d, dy / d


def _angle(v, p, q, r=20, text=None, tdist=1.7):
    """A small arc at vertex v, between the rays to p and to q."""
    ux, uy = _unit(v, p)
    wx, wy = _unit(v, q)
    a = (v[0] + ux * r, v[1] + uy * r)
    b = (v[0] + wx * r, v[1] + wy * r)
    sweep = 1 if ux * wy - uy * wx > 0 else 0
    out = (f'<path class="a" d="M {a[0]:.1f} {a[1]:.1f} A {r} {r} 0 0 {sweep} '
           f'{b[0]:.1f} {b[1]:.1f}"/>')
    if text:
        mx, my = (ux + wx) / 2, (uy + wy) / 2
        m = math.hypot(mx, my) or 1
        out += _label((v[0] + mx / m * r * tdist, v[1] + my / m * r * tdist + 4),
                      text, cls='t')
    return out


def _right_angle(v, p, q, s=11):
    ux, uy = _unit(v, p)
    wx, wy = _unit(v, q)
    a = (v[0] + ux * s, v[1] + uy * s)
    b = (v[0] + wx * s, v[1] + wy * s)
    c = (a[0] + wx * s, a[1] + wy * s)
    return (f'<polyline class="a" points="{a[0]:.1f},{a[1]:.1f} '
            f'{c[0]:.1f},{c[1]:.1f} {b[0]:.1f},{b[1]:.1f}"/>')


def _ticks(p, q, n=1, size=6, gap=5):
    """Equal-side marks across the middle of pq."""
    ux, uy = _unit(p, q)
    mx, my = (p[0] + q[0]) / 2, (p[1] + q[1]) / 2
    out = []
    for i in range(n):
        off = (i - (n - 1) / 2) * gap
        cx, cy = mx + ux * off, my + uy * off
        out.append(f'<line class="tk" x1="{cx - uy * size / 2:.1f}" '
                   f'y1="{cy + ux * size / 2:.1f}" x2="{cx + uy * size / 2:.1f}" '
                   f'y2="{cy - ux * size / 2:.1f}"/>')
    return ''.join(out)


# --------------------------------------------------------------- figures ----

def parallelogram_angle():
    """ABCD with the angle at A marked."""
    A, B, C, D = (22, 92), (52, 26), (140, 26), (110, 92)
    s = (_poly([A, B, C, D])
         + _angle(A, B, D, 24, '68°')
         + _label(A, 'A', -13, 8) + _label(B, 'B', -13, -5)
         + _label(C, 'C', 13, -5) + _label(D, 'D', 13, 8))
    return 48, _wrap(162, 112, s)


def rectangle_diagonal():
    A, B, C, D = (56, 94), (56, 28), (144, 28), (144, 94)
    s = (_poly([A, B, C, D]) + _line(A, C, 'd')
         + _right_angle(A, B, D)
         + _label(A, 'A', -13, 8) + _label(B, 'B', -13, -5)
         + _label(C, 'C', 13, -5) + _label(D, 'D', 13, 8)
         + _label(((A[0] + B[0]) / 2, (A[1] + B[1]) / 2), '6 cm', -24, 4, 'ti')
         + _label(((A[0] + D[0]) / 2, (A[1] + D[1]) / 2), '8 cm', 0, 18, 'ti'))
    return 46, _wrap(184, 116, s)


def trapezium_angle():
    """BC ∥ AD, the angle at A marked."""
    A, B, C, D = (20, 92), (52, 30), (124, 30), (156, 92)
    s = (_poly([A, B, C, D])
         + _angle(A, B, D, 24, '65°')
         + _label(A, 'A', -13, 8) + _label(B, 'B', -13, -5)
         + _label(C, 'C', 13, -5) + _label(D, 'D', 13, 8))
    return 50, _wrap(176, 112, s)


def parallelogram_sides():
    A, B, C, D = (24, 92), (54, 30), (146, 30), (116, 92)
    s = (_poly([A, B, C, D])
         + _ticks(A, B, 1) + _ticks(C, D, 1) + _ticks(B, C, 2) + _ticks(A, D, 2)
         + _label(A, 'A', -13, 8) + _label(B, 'B', -13, -5)
         + _label(C, 'C', 13, -5) + _label(D, 'D', 13, 8))
    return 48, _wrap(168, 112, s)


def rhombus_diagonals():
    """Side 10, one diagonal 12 — the other is what the question asks for."""
    cx, cy, p, q = 84, 82, 42, 56        # AC = 12 cm across, BD = 16 cm down
    A, B, C, D = (cx - p, cy), (cx, cy - q), (cx + p, cy), (cx, cy + q)
    s = (_poly([A, B, C, D]) + _line(A, C, 'd') + _line(B, D, 'd')
         + _right_angle((cx, cy), A, B, 9)
         + _ticks(A, B) + _ticks(B, C) + _ticks(C, D) + _ticks(D, A)
         + _label(A, 'A', -11, 5) + _label(B, 'B', 0, -8)
         + _label(C, 'C', 11, 5) + _label(D, 'D', 0, 16))
    # the lengths stay in the question: inside a rhombus there is no room for
    # a dimension label that does not sit on top of a side
    return 42, _wrap(170, 176, s)


def isosceles_trapezium():
    A, B, C, D = (54, 96), (90, 32), (174, 32), (210, 96)
    H = (90, 96)
    s = (_poly([A, B, C, D]) + _line(B, H, 'd') + _right_angle(H, B, D, 9)
         + _ticks(A, B) + _ticks(C, D)
         + _label(A, 'A', -13, 8) + _label(B, 'B', -8, -6)
         + _label(C, 'C', 8, -6) + _label(D, 'D', 13, 8)
         + _label(((B[0] + C[0]) / 2, 32), '10 cm', 0, -8, 'ti')
         + _label(((A[0] + D[0]) / 2, 96), '22 cm', 0, 18, 'ti')
         + _label(((A[0] + B[0]) / 2, (A[1] + B[1]) / 2), '10 cm', -26, 0, 'ti'))
    return 58, _wrap(234, 120, s)


def rectangle_diagonals_o():
    A, B, C, D = (24, 96), (24, 32), (150, 32), (150, 96)
    O = (87, 64)
    s = (_poly([A, B, C, D]) + _line(A, C, 'd') + _line(B, D, 'd')
         + _angle(O, A, B, 20, '130°', 2.1)
         + _label(A, 'A', -13, 8) + _label(B, 'B', -13, -5)
         + _label(C, 'C', 13, -5) + _label(D, 'D', 13, 8)
         + _label(O, 'O', 7, 17))
    return 52, _wrap(176, 120, s)


def parallelogram_bisector():
    """The bisector of angle A meets BC at K."""
    A, B, C, D = (24, 100), (58, 30), (150, 30), (116, 100)
    K = (92, 30)
    s = (_poly([A, B, C, D]) + _line(A, K, 'd')
         + _angle(A, B, K, 26) + _angle(A, K, D, 26)
         + _label(A, 'A', -13, 8) + _label(B, 'B', -13, -5)
         + _label(C, 'C', 13, -5) + _label(D, 'D', 13, 8)
         + _label(K, 'K', 0, -8))
    return 52, _wrap(176, 120, s)


FIGURES = {
    'fig-parallelogram-angle': parallelogram_angle,
    'fig-rectangle-diagonal': rectangle_diagonal,
    'fig-trapezium-angle': trapezium_angle,
    'fig-parallelogram-sides': parallelogram_sides,
    'fig-rhombus-diagonals': rhombus_diagonals,
    'fig-isosceles-trapezium': isosceles_trapezium,
    'fig-rectangle-diagonals-o': rectangle_diagonals_o,
    'fig-parallelogram-bisector': parallelogram_bisector,
}


def main():
    import json
    import os
    out = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'figures')
    os.makedirs(out, exist_ok=True)
    index = {}
    for name, fn in FIGURES.items():
        mm, svg = fn()
        with open(os.path.join(out, name + '.svg'), 'w', encoding='utf-8') as fh:
            fh.write(svg)
        index[name] = mm
    with open(os.path.join(out, 'index.json'), 'w', encoding='utf-8') as fh:
        json.dump(index, fh, indent=1, sort_keys=True)
    print(f'wrote {len(index)} figures to {out}')


if __name__ == '__main__':
    main()
