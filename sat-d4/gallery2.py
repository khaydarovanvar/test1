# -*- coding: utf-8 -*-
import sys
sys.path.insert(0, '.')
import algebra as A
import plot as P
from svgbase import GREEN, INK, RED

items = [
    ('area_model', A.area_model()),
    ('gcf_box', A.gcf_box()),
    ('diff_squares', A.diff_squares()),
    ('trinomial_split', A.trinomial_split()),
    ('perfect_square', A.perfect_square()),
    ('rules_panel', A.rules_panel((
        ('xᵐ·xⁿ = xᵐ⁺ⁿ', '2³·2⁴ = 2⁷'),
        ('xᵐ/xⁿ = xᵐ⁻ⁿ', '12⁵/12³ = 12²'),
        ('(xᵐ)ⁿ = xᵐⁿ', '(2x³)⁴ = 16x¹²'),
        ('x⁻ⁿ = 1/xⁿ', '5⁻² = 1/25'),
        ('x⁰ = 1', '7⁰ = 1')), title='five rules, one line each')),
    ('radical_power', A.radical_power(8, 2, 3)),
    ('percent_factor', A.percent_factor()),
    ('time_unit', A.time_unit()),
    ('diff_ratio_table lin', A.diff_ratio_table((0, 1, 2, 3), (5, 8, 11, 14), 'linear')),
    ('diff_ratio_table exp', A.diff_ratio_table((0, 1, 2, 3), (5, 10, 20, 40), 'exponential')),
    ('flow', A.flow(('5/(x − 2) = x + 2', 'multiply by (x − 2)',
                     '5 = x² − 4', 'x = ±3'),
                    note='then check that neither value makes a denominator zero')),
    ('check_table', A.check_table()),
    ('number_line excl', A.number_line((1,), label='(x + 3)/(x − 1) is undefined at x = 1')),
    ('number_line ray', A.number_line((), ray=(3, True), label='domain of √(2x − 6)')),
    ('composition', A.composition()),
    ('equiv_ring', A.equiv_ring()),
    ('division_identity', A.division_identity()),
    ('cancel_fraction', A.cancel_fraction()),
    ('parabola', P.parabola(1, 2, -1, label='y = (x − 2)² − 1')),
    ('discriminant_panels', P.discriminant_panels()),
    ('polynomial', P.polynomial((1, -2, -5, 6), (-2, 1, 3),
                                label='p(x) = (x + 2)(x − 1)(x − 3)')),
    ('end_behaviour', P.end_behaviour()),
    ('exponential', P.exponential(150, 2, ymin=-100, ymax=1400, xmax=4,
                                  label='M(t) = 150(2)ᵗ')),
    ('growth_vs_linear', P.growth_vs_linear()),
    ('rational', P.rational(vas=(1,), ha=2, f=lambda x: 1.0 / (x - 1) + 2,
                            label='y = 1/(x − 1) + 2')),
    ('nonlinear_system', P.nonlinear_system(solutions=((3, 9), (-1, 1)),
                                            xmin=-3, xmax=5, ymin=-2, ymax=12,
                                            label='y = x² and y = 2x + 3')),
    ('transformations shift', P.transformations(kind='shift')),
    ('transformations stretch', P.transformations(kind='stretch')),
    ('function_machine', P.function_machine()),
    ('tangency', P.nonlinear_system(f=lambda x: x * x, g=lambda x: 2 * x - 1,
                                    solutions=((1, 1),), xmin=-2, xmax=4, ymin=-2, ymax=9,
                                    legend=('y = x²', 'y = 2x − 1'),
                                    label='tangent: exactly one point')),
]

cells = ''.join('<figure><figcaption>%s</figcaption>%s</figure>' % (n, s) for n, s in items)
open('gallery2.html', 'w').write(
    '<!doctype html><meta charset="utf-8"><style>'
    'body{font:12px -apple-system,Segoe UI,Roboto,sans-serif;margin:10mm;background:#fff}'
    'figure{display:inline-block;margin:0 6px 10px;vertical-align:top;'
    'border:1px solid #e3e8ee;padding:4px;width:31%}'
    'figcaption{font-size:9px;color:#888;margin-bottom:2px}'
    'svg.fig{width:100%;height:auto;display:block}'
    '</style>' + cells)
print('gallery2.html')
