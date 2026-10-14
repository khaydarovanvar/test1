import sys
sys.path.insert(0, '.')
import shapes as S
from shapes import DEG

items = [
    ('complementary', S.complementary()),
    ('straight_line', S.straight_line()),
    ('crossing_lines', S.crossing_lines()),
    ('transversal', S.transversal()),
    ('transversal corr', S.transversal('corresponding', 72)),
    ('transversal cointerior', S.transversal('cointerior', 72)),
    ('triangle', S.triangle((50, 60, 70), exterior=120)),
    ('isosceles', S.isosceles(40)),
    ('isosceles bad', S.isosceles(100, base=100, impossible=True)),
    ('hinge', S.hinge(7, 10)),
    ('numberline', S.numberline(3, 17, mark=16)),
    ('flat_triangle', S.flat_triangle()),
    ('ngon', S.ngon(6, interior=120, exterior=60)),
    ('ngon tri', S.ngon(6, triangulate=True)),
    ('parallelogram', S.parallelogram(65)),
    ('similar_pair', S.similar_pair()),
    ('aa_pair', S.aa_pair()),
    ('congruent_pair', S.congruent_pair()),
    ('scale_area_volume', S.scale_area_volume()),
    ('nested_similar', S.nested_similar()),
    ('shadows', S.shadows()),
    ('right_triangle', S.right_triangle(9, 12, 15)),
    ('pythagoras', S.pythagoras()),
    ('triples', S.triples()),
    ('special_triangles', S.special_triangles()),
    ('sohcahtoa', S.sohcahtoa()),
    ('inverse_trig', S.inverse_trig()),
    ('ladder', S.ladder()),
    ('complement_pair', S.complement_pair()),
    ('circle_basic', S.circle_basic()),
    ('sector', S.sector()),
    ('inscribed_angle', S.inscribed_angle()),
    ('semicircle_right', S.semicircle_right()),
    ('tangent_figure', S.tangent_figure()),
    ('chord_figure', S.chord_figure()),
    ('circle_on_grid', S.circle_on_grid()),
    ('complete_square', S.complete_square()),
    ('area_triangle', S.area_triangle()),
    ('area_triangle slanted', S.area_triangle(12, 7, slanted=True)),
    ('area_parallelogram', S.area_parallelogram()),
    ('area_trapezoid', S.area_trapezoid()),
    ('composite_square_circle', S.composite_square_circle()),
    ('lshape', S.lshape()),
    ('rect_minus_triangle', S.rect_minus_triangle()),
    ('cylinder', S.cylinder()),
    ('cone', S.cone()),
    ('sphere', S.sphere()),
    ('cuboid', S.cuboid()),
    ('prism_triangular', S.prism_triangular()),
    ('pyramid', S.pyramid()),
    ('solids_row', S.solids_row()),
    ('scale_solid', S.scale_solid()),
    ('unit_conversion', S.unit_conversion()),
    ('density', S.density()),
    ('coord_distance', S.coord_distance(show_mid=True)),
    ('coord_slope', S.coord_slope()),
    ('slope_signs', S.slope_signs()),
    ('perp_lines', S.perp_lines()),
    ('coord_area', S.coord_area(base=((0, 0), (6, 0), 6), height=((0, 0), (0, 4), 4))),
]

cells = ''.join('<figure><figcaption>%s</figcaption>%s</figure>' % (n, s) for n, s in items)
open('gallery.html', 'w').write(
    '<!doctype html><meta charset="utf-8"><style>'
    'body{font:12px -apple-system,Segoe UI,Roboto,sans-serif;margin:10mm;background:#fff}'
    'figure{display:inline-block;margin:0 6px 10px;vertical-align:top;'
    'border:1px solid #e3e8ee;padding:4px;width:31%}'
    'figcaption{font-size:9px;color:#888;margin-bottom:2px}'
    'svg.fig{width:100%;height:auto;display:block}'
    '</style>' + cells)
print('gallery.html')
