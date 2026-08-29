#!/usr/bin/env python3
"""Generate the Grade 10 and Grade 11 annual plans from the national KTP.

The national calendar-thematic plan is kept lesson for lesson — same topics,
same order, same hours per quarter — so the plans stay compliant with the
Ministry programme and the state control works. Cambridge content is added in
two ways: every national lesson carries the Cambridge sub-unit it corresponds
to, and the lessons the national plan leaves flexible (revision blocks, project
work, "solving practical problems") are given specific Cambridge content the
national programme does not cover at all.

Cambridge references
  P1   Cambridge International AS & A Level Mathematics, Pure Mathematics 1
  P2   Cambridge International AS & A Level Mathematics, Pure Mathematics 2
  IGX  Cambridge IGCSE Mathematics, Extended (Units 4-6, chapters 13-24)

Run:  python3 build-plans-10-11.py
"""

import os

HERE = os.path.dirname(os.path.abspath(__file__))

# Quarter hour totals, fixed by the national KTP.
ALG_Q = [27, 21, 30, 24]      # 102 hours, 3 h/week
GEO_Q = [18, 14, 20, 16]      # 68 hours,  2 h/week

# Flags:  '' teaching   R reserve/revision   Test assessment   CAM Cambridge insert
T, R, C = 'Test', 'R', 'CAM'


def rows(*spec):
    """Expand (count, title, cambridge, flag) tuples into one row per lesson."""
    out = []
    for n, title, cam, flag in spec:
        for _ in range(n):
            out.append((title, cam, flag))
    return out


# ===========================================================================
#  GRADE 10 — ALGEBRA (102 h)
# ===========================================================================
G10_ALG = rows(
    # ---- I quarter, 27 h ----
    (1, 'Revision of the Grade 9 course. Entry diagnostic test', 'Quadratics, indices and surds — audit of prior knowledge', T),
    (2, 'Revision — solving quadratic equations by factorising and by formula', 'P1 1.1, 1.3 Solving quadratic equations  [CAMBRIDGE INSERT]', C),
    (2, 'Revision — completing the square; the discriminant', 'P1 1.3, 1.6 The discriminant of a quadratic  [CAMBRIDGE INSERT]', C),
    (2, 'Revision — quadratic inequalities and simultaneous equations', 'P1 1.2, 1.7 Quadratic inequalities; simultaneous equations  [CAMBRIDGE INSERT]', C),
    (1, 'Project work — mappings, composite and inverse functions', 'P1 2.1-2.3 Mappings; composite and inverse functions  [CAMBRIDGE INSERT]', C),
    (2, 'The function. Ways of defining a function', 'P1 2.1 Mappings', ''),
    (2, 'Domain and range of a function', 'P1 2.1 Mappings — domain and range', ''),
    (2, 'Arithmetic operations on functions', 'Extension beyond P1', ''),
    (1, 'Control work No. 1 (functions)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (2, 'Composite function. Inverse function. Periodic functions', 'P1 2.2-2.3 Composite and inverse functions', ''),
    (3, 'Properties of a function', 'P1 2.1 Mappings; 5.7 Trigonometric identities (periodicity)', ''),
    (2, 'Simple transformations of the graph of a function', 'P1 2.4-2.6 Translations, reflections and stretches', ''),
    (2, 'Linear and quadratic modelling', 'P1 1.8 Graphs of quadratic functions', ''),
    (1, 'Control work No. 2 (properties and graphs of functions)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),

    # ---- II quarter, 21 h ----
    (2, 'Rational equations', 'Extension beyond P1', ''),
    (2, 'Systems of rational equations', 'P1 1.7 Solving simultaneous equations', ''),
    (3, 'Rational inequalities', 'P1 1.2 Solving quadratic inequalities (extension)', ''),
    (3, 'Systems of rational inequalities', 'Extension beyond P1', ''),
    (1, 'Control work No. 3 (rational equations and inequalities)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (3, 'Irrational equations', 'P1 1.5 Solving more complex quadratic equations (extension)', ''),
    (4, 'Systems of irrational equations', 'Extension beyond P1', ''),
    (1, 'Control work No. 4 (irrational equations)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),

    # ---- III quarter, 30 h ----
    (2, 'The exponential function, its properties and graph', 'P2 2.2 The logarithmic function (companion); P2 2.1 Growth and decay', ''),
    (2, 'Exponential equations', 'P2 2.3 e^x and logarithms to base e', ''),
    (2, 'Exponential inequalities', 'P2 2.4 Equations and inequalities using logarithms', ''),
    (1, 'Control work No. 5 (the exponential function)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (2, 'The logarithm. The logarithmic function, its properties and graph', 'P2 2.2 The logarithmic function', ''),
    (2, 'Transforming logarithmic expressions', 'P2 2.2 Laws of logarithms', ''),
    (2, 'Logarithmic equations', 'P2 2.4 Equations using logarithms', ''),
    (2, 'Systems of exponential and logarithmic equations', 'Extension beyond P2', ''),
    (2, 'Logarithmic inequalities', 'P2 2.4 Inequalities using logarithms', ''),
    (2, 'Applications of exponential and logarithmic functions', 'P2 2.1 Continuous exponential growth and decay; 2.5 Linearising', ''),
    (1, 'Control work No. 6 (logarithms)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (2, 'Trigonometric functions, their properties and graphs. Periodic processes', 'P1 5.2 Graphs of trigonometric functions', ''),
    (2, 'Values of arcsin a, arccos a, arctan a, arccot a', 'P1 5.3 Inverse trigonometric functions', ''),
    (2, 'The functions y = arcsin x, y = arccos x, y = arctan x, y = arccot x', 'P1 5.3 Inverse trigonometric functions', ''),
    (2, 'Project work — radians, arc length and sector area', 'P1 4.1-4.3 Circular measure  [CAMBRIDGE INSERT]', C),

    # ---- IV quarter, 24 h ----
    (3, 'Equations of the form sin x = a, cos x = a, tan x = a, cot x = a', 'P1 5.1, 5.4 Exact values; solving trigonometric equations', ''),
    (4, 'Methods for solving certain trigonometric equations', 'P1 5.6-5.7 Composite angles; trigonometric identities', ''),
    (3, 'Trigonometric inequalities', 'Extension beyond P1', ''),
    (1, 'Control work No. 7 (trigonometric equations)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (3, 'Random events', 'IGX 24.1 Using tree diagrams to show outcomes', ''),
    (3, 'Definitions of probability', 'IGX 24.2-24.4 Calculating probability; conditional probability', ''),
    (1, 'Control work No. 8 (probability)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (2, 'Revision — sequences, arithmetic and geometric progressions', 'P1 7.1-7.3 Sequences; arithmetic and geometric progressions  [CAMBRIDGE INSERT]', C),
    (2, 'Revision — infinite geometric progressions and the binomial expansion', 'P1 7.4 Infinite geometric progressions; 6.1-6.3 Binomial expansion  [CAMBRIDGE INSERT]', C),
)

# ===========================================================================
#  GRADE 10 — GEOMETRY (68 h)
# ===========================================================================
G10_GEO = rows(
    # ---- I quarter, 18 h ----
    (1, 'The logical construction of geometry', 'Axiom, theorem, proof — no direct Cambridge equivalent', ''),
    (1, 'Geometric problems and methods of solving them', 'IGX 15.4 Solving problems using trigonometry', ''),
    (1, 'Practical exercises — symmetry in three dimensions', 'IGX 19.2 Symmetry in three dimensions  [CAMBRIDGE INSERT]', C),
    (2, 'Basic concepts of solid geometry', 'Extension beyond IGCSE Extended', ''),
    (2, 'Lines and planes in space', 'Extension beyond IGCSE Extended', ''),
    (2, 'Spatial figures. Polyhedra', 'IGX 13.x Mensuration of solids (foundation)', ''),
    (2, 'Describing and making models of polyhedra', 'IGX 19.3 Symmetry properties of circles and solids', ''),
    (2, 'Constructing simple sections of polyhedra', 'Extension beyond IGCSE Extended', ''),
    (3, 'Practical exercises — the sine and cosine rules in three dimensions', 'IGX 15.5-15.7 Sines, cosines and tangents above 90°; the sine and cosine rules  [CAMBRIDGE INSERT]', C),
    (1, 'Control work No. 1 (introduction to solid geometry)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),

    # ---- II quarter, 14 h ----
    (2, 'Relative position of lines in space', 'Extension beyond IGCSE Extended', ''),
    (2, 'Skew lines', 'Extension beyond IGCSE Extended', ''),
    (2, 'Relative position of a line and a plane in space', 'Extension beyond IGCSE Extended', ''),
    (2, 'Relative position of planes in space', 'Extension beyond IGCSE Extended', ''),
    (2, 'Parallel projection in space', 'IGX 14.x Scale drawings (planar analogue)', ''),
    (2, 'Practical exercises — the area of a triangle and 3-D trigonometry', 'IGX 15.8 Area of a triangle; 15.9 Trigonometry in three dimensions  [CAMBRIDGE INSERT]', C),
    (1, 'Control work No. 2 (parallelism in space)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),

    # ---- III quarter, 20 h ----
    (2, 'Perpendicular lines and planes in space', 'Extension beyond IGCSE Extended', ''),
    (3, 'Perpendicular, oblique line and distance in space', 'Extension beyond IGCSE Extended', ''),
    (2, 'The theorem of the three perpendiculars', 'Extension beyond IGCSE Extended', ''),
    (3, 'Perpendicularity of planes in space', 'Extension beyond IGCSE Extended', ''),
    (1, 'Control work No. 3 (perpendicularity in space)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (3, 'Orthogonal projection in space and its technical applications', 'IGX 14.1 Scale drawings; technical drawing', ''),
    (2, 'Practical exercises — bearings and angles of elevation in three dimensions', 'IGX 14.2 Bearings; 15.9 Trigonometry in three dimensions  [CAMBRIDGE INSERT]', C),
    (1, 'Revision of the chapter', 'Consolidation', R),
    (2, 'Presentation of project work', 'IGX 14.x Scale drawings and modelling', R),

    # ---- IV quarter, 16 h ----
    (2, 'Revision — the equation of a straight line; parallel and perpendicular lines', 'P1 3.1-3.3 Line segments; parallel and perpendicular lines  [CAMBRIDGE INSERT]', C),
    (2, 'Revision — the equation of a circle', 'P1 3.4 Circles  [CAMBRIDGE INSERT]', C),
    (2, 'Revision — points of intersection of lines and circles', 'P1 3.5 Points of intersection; circle properties  [CAMBRIDGE INSERT]', C),
    (2, 'Revision — vectors in the plane and transformations', 'IGX 23.1-23.3 Vectors; further transformations  [CAMBRIDGE INSERT]', C),
    (1, 'Control work No. 4 (coordinate geometry)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (2, 'Revision — solid geometry of the year: parallelism and perpendicularity', 'Consolidation for Grade 11', R),
    (2, 'Revision — sections of polyhedra and orthogonal projection', 'Consolidation for Grade 11', R),
    (1, 'Annual control work', 'Summative assessment', T),
    (1, 'Work on mistakes; the Grade 11 preview', 'Feedback and correction', R),
)

# ===========================================================================
#  GRADE 11 — ALGEBRA (102 h)
# ===========================================================================
G11_ALG = rows(
    # ---- I quarter, 27 h ----
    (2, 'The ratio of increments and its meaning. The tangent. The increment of a function', 'P1 8.1 The gradient of the tangent', ''),
    (2, 'The concept of a limit', 'P1 8.2 The gradient of a tangent as a limit', ''),
    (2, 'The derivative, its geometric and physical meaning', 'P1 8.1-8.2 Differentiation from first principles', ''),
    (3, 'Rules of differentiation', 'P1 8.3 Differentiation of polynomials', ''),
    (3, 'The derivative of a composite function', 'P1 8.4 The chain rule; P2 4.4 Differentiating quotients', ''),
    (1, 'Control work No. 1 (the derivative)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (2, 'Revision — the modulus function and the graph of y = |ax + b|', 'P2 1.1-1.2 The modulus function; sketching y = |ax + b|  [CAMBRIDGE INSERT]', C),
    (2, 'The equation of the tangent and the normal to a graph', 'P1 8.8 The equation of the tangent and the normal', ''),
    (4, 'Investigating a function with the derivative and sketching its graph', 'P1 9.1-9.2 Increasing and decreasing functions; stationary points', ''),
    (3, 'Applying differential calculus to extremum problems of geometric, physical and economic content', 'P1 9.3 Problems involving maximum and minimum values', ''),
    (1, 'Control work No. 2 (applications of the derivative)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),

    # ---- II quarter, 21 h ----
    (3, 'Approximate calculations', 'P1 9.4 Connected rates of change; P2 6.x Numerical solution of equations', ''),
    (4, 'Modelling with the derivative', 'P1 9.4 Connected rates of change', ''),
    (1, 'Control work No. 3 (modelling with the derivative)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (4, 'The antiderivative and the indefinite integral', 'P1 10.1 Integration as the reverse of differentiation', ''),
    (6, 'The table of integrals. Basic rules of integration', 'P1 10.2-10.3 The constant of integration; integrating (ax + b)^n', ''),
    (1, 'Control work No. 4 (the indefinite integral)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),

    # ---- III quarter, 30 h ----
    (3, 'The definite integral. The Newton–Leibniz formula', 'P1 10.4 The definite integral', ''),
    (3, 'Applications of the definite integral', 'P1 10.5-10.7 Area under a curve; between two curves; volumes of revolution', ''),
    (3, 'Chapter revision — the trapezium rule', 'P2 5.7 Numerical integration using the trapezium rule  [CAMBRIDGE INSERT]', C),
    (1, 'Control work No. 5 (the definite integral)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (3, 'Problems in combinatorics', 'Extension beyond P1/P2 (Probability & Statistics 1)', ''),
    (2, 'The binomial theorem', 'P1 6.1-6.4 Pascal’s triangle; binomial notation and expansion', ''),
    (3, 'Statistical data and its types', 'IGX 20.1 Histograms; 20.2 Cumulative frequency', ''),
    (3, 'Mean, median and mode. Deviation and standard deviation', 'IGX 20.x Averages and spread from grouped data', ''),
    (3, 'Studying the relationship between two sets of data', 'IGX 16.1 Introduction to bivariate data; scatter diagrams', ''),
    (3, 'Revision — integration by partial fractions and by parts', 'P2 8.1-8.3 Integration using partial fractions; by parts  [CAMBRIDGE INSERT]', C),
    (1, 'Control work No. 6 (statistics)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),

    # ---- IV quarter, 24 h ----
    (2, 'Random events and their probabilities', 'IGX 24.2 Calculating probability from two outcomes', ''),
    (2, 'Complementary events. Operations on events and Euler–Venn diagrams', 'IGX 24.3 Calculating probability from Venn diagrams', ''),
    (3, 'Addition and multiplication of probabilities. Methods for simple events', 'IGX 24.1, 24.4 Tree diagrams; conditional probability', ''),
    (4, 'The binomial and normal distributions', 'Extension beyond P1/P2 (Probability & Statistics 1)', ''),
    (1, 'Control work No. 7 (probability and distributions)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (3, 'Revision — complex numbers: arithmetic, conjugates and the Argand diagram', 'P2 11.1-11.4 Complex numbers; the Argand diagram  [CAMBRIDGE INSERT]', C),
    (2, 'Revision — complex numbers geometrically; loci in the complex plane', 'P2 11.5-11.6 Complex numbers geometrically; loci  [CAMBRIDGE INSERT]', C),
    (4, 'Revision — forming and solving differential equations', 'P2 10.1-10.4 Differential equations  [CAMBRIDGE INSERT]', C),
    (1, 'Annual control work (algebra and calculus)', 'Summative assessment', T),
    (1, 'Work on mistakes; university entrance preparation', 'Feedback and correction', R),
)

# ===========================================================================
#  GRADE 11 — GEOMETRY (68 h)
# ===========================================================================
G11_GEO = rows(
    # ---- I quarter, 18 h ----
    (1, 'The coordinate system in space', 'P2 9.1 Vector notation (three dimensions)', ''),
    (1, 'The distance between two points', 'P2 9.2 The magnitude of a vector', ''),
    (1, 'The coordinates of the midpoint of a segment', 'P1 3.1 Line segments (planar analogue)', ''),
    (1, 'Vectors in space', 'P2 9.1 Vector notation', ''),
    (1, 'Vectors in space and operations on them', 'P2 9.3 Addition and subtraction of vectors', ''),
    (1, 'Collinear and coplanar vectors', 'P2 9.4 The vector equation of a straight line', ''),
    (1, 'The scalar product of vectors', 'P2 9.7 The angle between two straight lines', ''),
    (1, 'The magnitude of a vector and the angle between two vectors', 'P2 9.2, 9.7 Magnitude; angle between vectors', ''),
    (1, 'Geometric transformations in space. Isometry and translation', 'IGX 23.3 Further transformations', ''),
    (1, 'Symmetry in space. Reflection in a plane', 'IGX 19.2 Symmetry in three dimensions', ''),
    (1, 'Rotation and symmetry about an axis', 'IGX 19.2 Symmetry in three dimensions', ''),
    (1, 'Symmetry in nature and technology', 'IGX 19.4 Angle relationships in circles (applications)', ''),
    (1, 'Similarity of spatial figures', 'IGX 21.1-21.2 Ratio and scale; area and volume scale factors', ''),
    (3, 'Practical problems — the vector equation of a line; intersecting lines in space', 'P2 9.4-9.6 The vector equation of a line; intersecting lines; scalar product  [CAMBRIDGE INSERT]', C),
    (1, 'Control work No. 1 (coordinates and vectors in space)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),

    # ---- II quarter, 14 h ----
    (1, 'Polyhedral angles', 'Extension beyond IGCSE Extended', ''),
    (1, 'Polyhedra', 'IGX 13.x Mensuration of solids', ''),
    (1, 'The prism and its sections', 'IGX 13.x Surface area and volume of a prism', ''),
    (1, 'The parallelepiped and the cube', 'IGX 13.x Surface area and volume of a cuboid', ''),
    (1, 'Total and lateral surface area of a prism', 'IGX 13.x Surface area of a prism', ''),
    (1, 'Practical problems — upper and lower bounds in measurement', 'IGX 13.3 Upper and lower bounds  [CAMBRIDGE INSERT]', C),
    (1, 'The concept of volume. Volume of a parallelepiped', 'IGX 13.1 Understanding units; volume', ''),
    (2, 'Volume of a prism', 'IGX 13.x Volume of a prism', ''),
    (1, 'Surface area of a cylinder', 'IGX 13.x Surface area of a cylinder', ''),
    (1, 'Volume of a cylinder', 'IGX 13.x Volume of a cylinder', ''),
    (1, 'Practical problems — units of volume and capacity, and conversion', 'IGX 13.1-13.4 Understanding units; conversion  [CAMBRIDGE INSERT]', C),
    (1, 'Control work No. 2 (prisms and cylinders)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),

    # ---- III quarter, 20 h ----
    (1, 'The height of a pyramid. Lateral and total surface area', 'IGX 13.x Surface area of a pyramid', ''),
    (1, 'The regular pyramid and its apothem. Properties', 'IGX 13.x Surface area of a pyramid', ''),
    (1, 'The frustum of a pyramid and its elements. Lateral surface area', 'Extension beyond IGCSE Extended', ''),
    (1, 'Base, slant height and axis of a cone. Total and lateral surface area', 'IGX 13.x Surface area of a cone', ''),
    (1, 'Volume of a cone', 'IGX 13.x Volume of a cone', ''),
    (1, 'Practical problems — arc, sector and the net of a cone', 'P1 4.2-4.3 Arc length and sector area  [CAMBRIDGE INSERT]', C),
    (1, 'Surface area and volume of a frustum of a cone', 'Extension beyond IGCSE Extended', ''),
    (1, 'Practical problems — similar solids and the volume scale factor', 'IGX 21.2 Area and volume scale factors  [CAMBRIDGE INSERT]', C),
    (1, 'The sphere and its sections', 'IGX 13.x Surface area and volume of a sphere', ''),
    (1, 'Polygons and solids of revolution inscribed in and circumscribed about a sphere', 'Extension beyond IGCSE Extended', ''),
    (2, 'Practical problems — trigonometry applied to solids of revolution', 'IGX 15.9 Trigonometry in three dimensions  [CAMBRIDGE INSERT]', C),
    (1, 'Volume of a sphere', 'IGX 13.x Volume of a sphere', ''),
    (1, 'Volume of parts of a sphere', 'Extension beyond IGCSE Extended', ''),
    (1, 'Surface area of a sphere', 'IGX 13.x Surface area of a sphere', ''),
    (3, 'Practical problems — compound solids and real measurement', 'IGX 13.x Compound solids; 13.3 Upper and lower bounds  [CAMBRIDGE INSERT]', C),
    (1, 'Control work No. 3 (pyramids, cones and spheres)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),

    # ---- IV quarter, 16 h ----
    (2, 'Practical problems — surface area and volume in context', 'IGX 13.x Mensuration in context', R),
    (2, 'Practical problems — optimisation of a container', 'P1 9.3 Maximum and minimum values applied to solids  [CAMBRIDGE INSERT]', C),
    (2, 'Test practice — state final attestation format', 'Examination technique', T),
    (1, 'Control work No. 4 (solids)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (2, 'Revision — coordinates and vectors in space', 'P2 9.1-9.7 Vectors  [CAMBRIDGE INSERT]', C),
    (2, 'Revision — parallelism and perpendicularity in space (Grade 10)', 'Consolidation of the two-year course', R),
    (2, 'Revision — surface areas and volumes of all the solids', 'IGX 13.x Mensuration — full review', R),
    (1, 'Revision — geometry in the university entrance paper', 'Examination technique', R),
    (1, 'Annual review and the mathematics of the next stage', 'Consolidation', R),
)

# ===========================================================================

PLANS = [
    ('04-special-class-algebra-grade10.md', 'Algebra, Grade 10', 10, 'Algebra',
     '3 hours per week', 102, ALG_Q, G10_ALG,
     'Cambridge IGCSE Extended and AS Level Pure Mathematics 1'),
    ('05-special-class-geometry-grade10.md', 'Geometry, Grade 10', 10, 'Geometry',
     '2 hours per week', 68, GEO_Q, G10_GEO,
     'Cambridge IGCSE Extended and AS Level Pure Mathematics 1'),
    ('06-special-class-algebra-grade11.md', 'Algebra and Calculus, Grade 11', 11, 'Algebra',
     '3 hours per week', 102, ALG_Q, G11_ALG,
     'Cambridge AS & A Level Pure Mathematics 1 and 2'),
    ('07-special-class-geometry-grade11.md', 'Geometry, Grade 11', 11, 'Geometry',
     '2 hours per week', 68, GEO_Q, G11_GEO,
     'Cambridge IGCSE Extended and A Level Pure Mathematics 2'),
]

ROMAN = ['I', 'II', 'III', 'IV']

INTRO = """# Annual Plan — {name} (Special Class)

**{load} · {total} hours per year · Uzbekistan national programme, enriched with {cam}**

This plan keeps the Republic of Uzbekistan Grade {grade} {subject} calendar-thematic plan intact —
the same topics, the same order, the same hour count per quarter ({qs}) — so that it
remains compliant with the Ministry programme and the state control works.

Cambridge coverage is added in two ways:

1. **Mapping.** Every national lesson carries the Cambridge sub-unit it corresponds to. Where the
   national topic goes further than the Cambridge syllabus, the note reads *Extension beyond*.
2. **Inserts.** The lessons the national plan leaves flexible — the revision blocks, the project
   work and the "solving practical problems" lessons — are given specific Cambridge content that
   the national programme does not cover at all. These are marked `CAM` in the Flag column.

**Reference editions**

| Code | Book |
|:--:|---|
| `P1` | Cambridge International AS & A Level Mathematics — Pure Mathematics 1 |
| `P2` | Cambridge International AS & A Level Mathematics — Pure Mathematics 2 |
| `IGX` | Cambridge IGCSE Mathematics — Extended (Units 4–6, chapters 13–24) |

**Flags** — `Test` control work or assessment · `R` reserve, revision or feedback lesson that may
be given up to a red day · `CAM` Cambridge insert into a flexible national lesson.
"""

REDDAYS = """
## Red days — Uzbekistan public holidays

| Date | Holiday | Weekday (2026–2027) | Effect on the plan |
|---|---|:--:|---|
| 1 September | Independence Day | Tue | Falls before the first school day (2 September) — no lesson lost. |
| 1 October | Day of Teachers and Mentors | Thu | 1 school day lost — Quarter I. |
| 8 December | Constitution Day | Tue | 1 school day lost — Quarter II. |
| 1 January | New Year | Fri | Falls inside the winter holiday — no lesson lost. |
| 14 January | Day of Defenders of the Motherland | Thu | 1 school day lost — Quarter III. |
| 8 March | International Women's Day | Mon | 1 school day lost — Quarter III. |
| 21 March | Navruz | Sun | Normally inside the spring holiday; the day off in lieu may cost 1 school day. |
| Ramazon Hayit (movable) | Eid al-Fitr | — | Approx. late March 2027; usually adjoins the spring holiday. Confirm annually. |
| 9 May | Day of Remembrance and Honour | Sun | Day off in lieu on Monday 10 May — 1 school day lost, Quarter IV. |
| Qurbon Hayit (movable) | Eid al-Adha | — | Approx. late May 2027; may fall after the last lesson. Confirm annually. |

**Expected loss:** 4–6 school days per year fall on a working day. For a subject taught
3 hours a week this typically costs **2–3 lessons**; for 2 hours a week, **1–2 lessons**.

**Absorption protocol**

1. At the start of each quarter, count the red days that fall on the days when this class has mathematics.
2. Remove exactly that many `R` lessons from the same quarter, working from the **end** of the quarter backwards.
3. Never remove a `Test` lesson and never remove a lesson that introduces new content.
4. If a quarter has fewer `R` lessons than lessons lost, merge two consecutive lessons on the same
   topic (the national plan deliberately repeats topic titles across 2–3 lessons for this purpose).
5. Record every adjustment in the register so that the quarter still shows the official hour total.

**School holidays** (autumn ~1–7 November, winter ~30 December – 10 January, spring ~20–30 March)
are already excluded from the quarter hour totals and need no adjustment.

> The weekday column is calculated for the **2026–2027** academic year. The two movable Islamic
> holidays and any government resolution transferring a working day must be confirmed against the
> Cabinet of Ministers resolution published each year, and the protocol above re-applied.
"""


def build(fname, name, grade, subject, load, total, quarters, data, cam):
    assert len(data) == total, '%s: %d rows, expected %d' % (fname, len(data), total)
    out = [INTRO.format(name=name, load=load, total=total, cam=cam, grade=grade,
                        subject=subject, qs=' / '.join(str(q) for q in quarters))]
    n = 0
    for qi, qh in enumerate(quarters):
        out.append('\n## %s QUARTER (%d hours)\n' % (ROMAN[qi], qh))
        out.append('| No. | Lesson topic | Hours | Cambridge link / note | Flag |')
        out.append('|---:|---|---:|---|:--:|')
        for _ in range(qh):
            title, camref, flag = data[n]
            n += 1
            out.append('| %d | %s | 1 | %s | %s |' % (n, title, camref, flag))
    assert n == total

    counts = {}
    for _, _, f in data:
        counts[f or '-'] = counts.get(f or '-', 0) + 1
    out.append('\n## Summary\n')
    out.append('| | Lessons |')
    out.append('|---|---:|')
    out.append('| New teaching | %d |' % counts.get('-', 0))
    out.append('| Cambridge inserts (`CAM`) | %d |' % counts.get(C, 0))
    out.append('| Control works and tests (`Test`) | %d |' % counts.get(T, 0))
    out.append('| Reserve / revision (`R`) | %d |' % counts.get(R, 0))
    out.append('| **Total** | **%d** |' % total)
    out.append(REDDAYS)

    path = os.path.join(HERE, fname)
    with open(path, 'w', encoding='utf-8') as fh:
        fh.write('\n'.join(out) + '\n')
    return counts


if __name__ == '__main__':
    for spec in PLANS:
        c = build(*spec)
        print('%-42s %3d lessons  |  CAM %2d  Test %2d  R %2d  teaching %2d'
              % (spec[0], spec[5], c.get(C, 0), c.get(T, 0), c.get(R, 0), c.get('-', 0)))
