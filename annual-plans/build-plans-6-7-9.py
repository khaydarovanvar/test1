#!/usr/bin/env python3
"""Generate the Grade 6, 7 and 9 annual plans from the official national KTP.

Source: the 2025-2026 calendar-thematic plans supplied by the school —
  6-класс-рус_Математика_КТП, 7-класс-рус_Математика_КТП,
  9-класс-рус_Алгебра_КТП, 9-класс-рус_Геометрия_КТП
Every national lesson is kept, in the national order, with the national hour
count per quarter, so the plans stay compliant with the Ministry programme and
the state control works.

Cambridge references
  S7   Cambridge Lower Secondary Mathematics, Stage 7  (Grade 6)
  S8   Cambridge Lower Secondary Mathematics, Stage 8  (Grade 7)
  IGX  Cambridge IGCSE Mathematics, Core & Extended, Units 1-3, chapters 1-12  (Grade 9)

Grade 6 is taught 6 hours a week against a 5-hour national plan, so it carries
34 extra lessons of Stage 7 content that the national programme does not cover
at all — chiefly directed numbers, decimals, data handling and probability.
Grades 7 and 9 match the national load exactly, so Cambridge content goes into
the lessons the national plan leaves flexible.

Run:  python3 build-plans-6-7-9.py
"""

import os

HERE = os.path.dirname(os.path.abspath(__file__))

G6_Q = [54, 42, 60, 48]       # 204 hours, 6 h/week  (national 45/35/50/40 + 34)
G7_Q = [45, 35, 50, 40]       # 170 hours, 5 h/week
ALG_Q = [27, 21, 30, 24]      # 102 hours, 3 h/week
GEO_Q = [18, 14, 20, 16]      # 68 hours,  2 h/week

T, R, C = 'Test', 'R', 'CAM'


def rows(*spec):
    """Expand (count, title, cambridge, flag) tuples into one row per lesson."""
    out = []
    for n, title, cam, flag in spec:
        for _ in range(n):
            out.append((title, cam, flag))
    return out


# ===========================================================================
#  GRADE 6 — MATHEMATICS (204 h; national 170 h + 34 h Stage 7)
# ===========================================================================
G6 = rows(
    # ---------------- I quarter, 54 h (national 45 + 9) ----------------
    (1, 'Discuss and recall — the Grade 5 course. Entry diagnostic', 'Diagnostic against Stage 6', T),
    (3, 'Directed numbers: adding and subtracting integers', 'S7 1.1 Adding and subtracting integers  [CAMBRIDGE INSERT]', C),
    (3, 'Directed numbers: multiplying and dividing integers', 'S7 1.2 Multiplying and dividing integers  [CAMBRIDGE INSERT]', C),
    (3, 'Algebraic expressions', 'S7 2.1 Constructing expressions', ''),
    (2, 'Simplifying algebraic expressions', 'S7 2.3 Collecting like terms', ''),
    (3, 'Finding the value of an algebraic expression', 'S7 2.2 Using expressions and formulae', ''),
    (3, 'Solving equations', 'S7 2.5 Constructing and solving equations', ''),
    (1, 'Control work No. 1 (expressions and equations)', 'Summative assessment', T),
    (1, 'Think — problem task: inequalities', 'S7 2.6 Inequalities  [CAMBRIDGE INSERT]', C),
    (1, 'Discuss and recall — fractions', 'S7 7 Fractions — entry', R),
    (2, 'Dividing a proper fraction by a natural number', 'S7 7.4 Dividing fractions', ''),
    (3, 'Dividing a natural number by a proper fraction', 'S7 7.4 Dividing fractions', ''),
    (3, 'Dividing a proper fraction by a proper fraction', 'S7 7.4 Dividing fractions', ''),
    (3, 'Word problems on the division of fractions', 'S7 7.5 Making fraction calculations easier', ''),
    (1, 'Think — problem task', 'Project 1 — Mixed-up properties  [CAMBRIDGE INSERT]', C),
    (2, 'Revision — fractions and their division', 'S7 7 consolidation', R),
    (1, 'Control work No. 2 (division of fractions)', 'Summative assessment', T),
    (1, 'Revision and work on mistakes', 'Feedback and correction', R),
    (1, 'Lowest common multiples and highest common factors', 'S7 1.3-1.4 LCM and HCF  [CAMBRIDGE INSERT]', C),
    (1, 'Tests for divisibility', 'S7 1.5 Tests for divisibility  [CAMBRIDGE INSERT]', C),
    (1, 'Square roots and cube roots', 'S7 1.6 Square roots and cube roots  [CAMBRIDGE INSERT]', C),
    (1, 'Recall — ratio', 'S7 12 Ratio and proportion — entry', R),
    (2, 'Ratio and fraction', 'S7 12 Ratio and proportion', ''),
    (3, 'Word problems on ratio', 'S7 12 Ratio and proportion', ''),
    (3, 'The ratio of three quantities', 'S7 12 Ratio and proportion', ''),
    (3, 'Variable ratios — direct and inverse proportion', 'S7 12 Ratio and proportion', ''),
    (1, 'Control work No. 3 (ratio and proportion)', 'Summative assessment', T),
    (1, 'Think — problem task: ratio in context', 'S7 12 Ratio and proportion — application', R),

    # ---------------- II quarter, 42 h (national 35 + 7) ----------------
    (1, 'Recall — percentages', 'S7 10 Percentages — entry', R),
    (2, 'Multiplying and dividing by powers of 10', 'S7 3.1 Multiplying and dividing by powers of 10  [CAMBRIDGE INSERT]', C),
    (1, 'Rounding to a given accuracy', 'S7 3.2 Rounding  [CAMBRIDGE INSERT]', C),
    (4, 'Finding a number from its percentage and from a part of it', 'S7 10 Percentages', ''),
    (4, 'Finding a percentage increase or decrease', 'S7 10 Percentages', ''),
    (4, 'Word problems on percentages', 'S7 10 Percentages — problem solving', ''),
    (1, 'Think — problem task', 'Project 2 — Clock rectangles  [CAMBRIDGE INSERT]', C),
    (2, 'Revision — percentages', 'S7 10 consolidation', R),
    (1, 'Control work No. 4 (percentages)', 'Summative assessment', T),
    (1, 'Revision and work on mistakes', 'Feedback and correction', R),
    (2, 'Ordering decimals; adding and subtracting decimals', 'S7 4.1-4.2 Ordering, adding and subtracting decimals  [CAMBRIDGE INSERT]', C),
    (2, 'Multiplying and dividing decimals', 'S7 4.3-4.4 Multiplying and dividing decimals  [CAMBRIDGE INSERT]', C),
    (1, 'Recall — angles', 'S7 5 Angles and constructions — entry', R),
    (6, 'Finding unknown angles in geometric figures', 'S7 5.1-5.2 A sum of 360°; intersecting lines', ''),
    (1, 'Control work No. 5 (angles)', 'Summative assessment', T),
    (1, 'Think — problem task: angles in design', 'S7 5.3 Drawing lines and quadrilaterals', R),
    (1, 'Recall. The elements of a circle and of a disc', 'S7 8.2 Circles and polygons', R),
    (2, 'The elements of a circle and of a disc', 'S7 8.2 Circles and polygons', ''),
    (3, 'The circumference of a circle', 'S7 8.2 Circles and polygons', ''),
    (2, 'The perimeter of a semicircle and of a quarter circle', 'S7 15 Distance, area and volume', ''),

    # ---------------- III quarter, 60 h (national 50 + 10) ----------------
    (3, 'The area of a circle', 'S7 15 Distance, area and volume', ''),
    (3, 'The area of a semicircle and of a quarter circle', 'S7 15 Distance, area and volume', ''),
    (3, 'The area and perimeter of compound figures', 'S7 15 Distance, area and volume', ''),
    (1, 'Think — problem task: compound figures', 'S7 15 in context', R),
    (2, 'Revision — the circle and its measures', 'S7 8 and 15 consolidation', R),
    (1, 'Control work No. 6 (the circle)', 'Summative assessment', T),
    (1, 'Revision and work on mistakes', 'Feedback and correction', R),
    (3, 'Angles and constructions: intersecting lines and quadrilaterals', 'S7 5.2-5.3 Intersecting lines; drawing lines and quadrilaterals  [CAMBRIDGE INSERT]', C),
    (2, 'The symmetry of 2D shapes; congruent shapes', 'S7 8.1, 8.3 Symmetry; recognising congruent shapes  [CAMBRIDGE INSERT]', C),
    (1, 'Recall — speed, distance and time', 'S7 12 Ratio and proportion — rates', R),
    (3, 'Speed', 'S7 12 Ratio and proportion — rates', ''),
    (3, 'Finding speed, distance and time', 'S7 12 Ratio and proportion — rates', ''),
    (3, 'Word problems on motion with two speeds', 'S7 12 Ratio and proportion — rates', ''),
    (3, 'Average speed', 'S7 12 Ratio and proportion — rates', ''),
    (3, 'Word problems on the motion of two bodies', 'S7 12 Ratio and proportion — rates', ''),
    (1, 'Control work No. 7 (speed and motion)', 'Summative assessment', T),
    (1, 'Think — problem task', 'Project 3 — Fraction averages  [CAMBRIDGE INSERT]', C),
    (3, 'Ordering fractions; adding mixed numbers', 'S7 7.1-7.2 Ordering fractions; adding mixed numbers  [CAMBRIDGE INSERT]', C),
    (2, 'Generating sequences and finding the nth term', 'S7 9 Sequences and functions  [CAMBRIDGE INSERT]', C),
    (1, 'Recall — the cube and the cuboid', 'S7 15 Distance, area and volume — entry', R),
    (3, 'Finding an edge of a cuboid', 'S7 15 Distance, area and volume', ''),
    (3, 'Finding the area of one face of a cube and of a cuboid', 'S7 15 Distance, area and volume', ''),
    (4, 'Word problems on volume', 'S7 15 Distance, area and volume', ''),
    (1, 'Think — problem task: volume in context', 'S7 15 in context', R),
    (4, 'Revision — mensuration of solids', 'S7 15 consolidation', R),
    (1, 'Control work No. 8 (volume and surface)', 'Summative assessment', T),
    (1, 'Revision and work on mistakes', 'Feedback and correction', R),

    # ---------------- IV quarter, 48 h (national 40 + 8) ----------------
    (1, 'Recall — data handling. Announcement of the project topic', 'S7 6 Collecting data — entry', R),
    (2, 'Conducting an investigation; taking a sample', 'S7 6.1-6.2 Conducting an investigation; taking a sample  [CAMBRIDGE INSERT]', C),
    (1, 'Representing data on a pie chart. Announcement of the project topic', 'S7 16 Interpreting and discussing results', ''),
    (3, 'Representing data on a pie chart', 'S7 16 Interpreting and discussing results', ''),
    (3, 'Reading and interpreting data from pie charts', 'S7 16 Interpreting and discussing results', ''),
    (1, 'Control work No. 9 (data handling)', 'Summative assessment', T),
    (1, 'Think — problem task: choosing a chart', 'S7 16 Interpreting and discussing results', R),
    (2, 'Plotting points and drawing graphs of relationships', 'S7 11 Graphs  [CAMBRIDGE INSERT]', C),
    (2, 'The probability scale; calculating and estimating probability', 'S7 13 Probability  [CAMBRIDGE INSERT]', C),
    (2, 'Reflection, rotation and translation on a grid', 'S7 14 Position and transformation  [CAMBRIDGE INSERT]', C),
    (1, 'Recall — three-dimensional shapes', 'S7 8.4 3D shapes — entry', R),
    (3, 'The cone, the cylinder, the prism and the pyramid', 'S7 8.4 3D shapes', ''),
    (3, 'Building three-dimensional figures on an isometric grid', 'S7 8.4 3D shapes', ''),
    (3, 'Nets of three-dimensional figures', 'S7 8.4 3D shapes', ''),
    (4, 'Revision — three-dimensional shapes', 'S7 8 consolidation', R),
    (1, 'Control work No. 10 (three-dimensional shapes)', 'Summative assessment', T),
    (1, 'Think — problem task: nets in context', 'S7 8.4 in context', R),
    (12, 'General revision of the Grade 6 course', 'Stage 7 whole-course review; Checkpoint practice papers', R),
    (2, 'Presentation and assessment of the project work', 'Stage 7 project presentation', R),
)


# ===========================================================================
#  GRADE 7 — MATHEMATICS (170 h, 5 h/week; national plan kept exactly)
# ===========================================================================
G7 = rows(
    # ---------------- I quarter, 45 h ----------------
    (2, 'The simplest geometric figures', 'S8 5 Angles and constructions — points, lines and planes', ''),
    (2, 'The segment. Comparing and measuring segments', 'S8 5 Angles and constructions', ''),
    (2, 'The angle. Comparing and measuring angles', 'S8 5 Angles and constructions', ''),
    (2, 'Practical exercises and applications. Check your knowledge', 'S8 3.1-3.2 Multiplying and dividing by 0.1 and 0.01; rounding  [CAMBRIDGE INSERT]', C),
    (2, 'Perpendicular lines', 'S8 5.3 Constructions', ''),
    (2, 'Practical exercises and applications. Check your knowledge', 'S8 4.1-4.2 Ordering and multiplying decimals  [CAMBRIDGE INSERT]', C),
    (1, 'Control work No. 1 (basic geometric figures)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (2, 'The idea of positive and negative numbers', 'S8 1 Integers', ''),
    (2, 'The idea of the integers', 'S8 1.1 Factors, multiples and primes', ''),
    (2, 'Positive and negative numbers on the coordinate line', 'S8 1 Integers', ''),
    (2, 'Opposite numbers. The modulus of a number', 'S8 1 Integers', ''),
    (2, 'Comparing integers', 'S8 1 Integers', ''),
    (2, 'Addition of integers', 'S8 1.2 Multiplying and dividing integers', ''),
    (2, 'Subtraction of integers', 'S8 1.2 Multiplying and dividing integers', ''),
    (2, 'Multiplication of integers', 'S8 1.2 Multiplying and dividing integers', ''),
    (2, 'Division of integers', 'S8 1.2 Multiplying and dividing integers', ''),
    (2, 'Problems on the four operations', 'S8 1 Integers — problem solving', ''),
    (1, 'Control work No. 2 (integers)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (2, 'The idea of the rational numbers', 'S8 7.1 Fractions and recurring decimals', ''),
    (2, 'Addition of rational numbers', 'S8 7 Fractions', ''),
    (2, 'Subtraction of rational numbers', 'S8 7.3 Subtracting mixed numbers', ''),
    (1, 'Addition and subtraction of rational numbers', 'S8 7 Fractions — consolidation', ''),
    (1, 'Control work No. 3 (rational numbers)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),

    # ---------------- II quarter, 35 h ----------------
    (1, 'Triangles, their kinds and their elements', 'S8 8.1 Quadrilaterals and polygons', ''),
    (2, 'The first criterion of congruence of triangles', 'S8 5 Angles and constructions', ''),
    (2, 'Properties of isosceles triangles', 'S8 5.2 The exterior angle of a triangle', ''),
    (2, 'The second criterion of congruence of triangles', 'S8 5 Angles and constructions', ''),
    (2, 'The third criterion of congruence of triangles', 'S8 5 Angles and constructions', ''),
    (1, 'Practical exercises and applications. Check your knowledge', 'S8 14 Position and transformation — congruence on a grid  [CAMBRIDGE INSERT]', C),
    (1, 'Control work No. 4 (congruence of triangles)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (1, 'Algebraic expressions', 'S8 2.1 Constructing expressions', ''),
    (1, 'Rules for removing brackets. The coefficient', 'S8 2.3 Expanding brackets', ''),
    (1, 'Properties of the arithmetic operations', 'S8 2.2 Using expressions and formulae', ''),
    (2, 'Powers with a natural exponent', 'S8 1.4 Indices', ''),
    (2, 'Properties of powers with a natural exponent', 'S8 1.4 Indices', ''),
    (1, 'The monomial and its standard form', 'S8 2.1 Constructing expressions', ''),
    (2, 'Multiplication and division of monomials', 'S8 1.4 Indices; 2.3 Expanding brackets', ''),
    (1, 'Polynomials', 'S8 2.1 Constructing expressions', ''),
    (2, 'Like terms and their collection', 'S8 2.1 Constructing expressions', ''),
    (2, 'Addition and subtraction of polynomials', 'S8 2.3 Expanding brackets', ''),
    (2, 'Multiplication of polynomials', 'S8 2.3 Expanding brackets', ''),
    (2, 'Division of polynomials', 'Extension beyond Stage 8', ''),
    (2, 'Factorising polynomials', 'S8 2.4 Factorising', ''),
    (1, 'Control work No. 5 (polynomials)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),

    # ---------------- III quarter, 50 h ----------------
    (1, 'Parallel lines', 'S8 5.1 Parallel lines', ''),
    (2, 'The criterion for two lines to be parallel', 'S8 5.1 Parallel lines', ''),
    (2, 'Angles formed when two lines are cut by a transversal', 'S8 5.1 Parallel lines', ''),
    (2, 'The sum of the interior angles of a triangle', 'S8 5.2 The exterior angle of a triangle', ''),
    (2, 'Right-angled triangles', 'S8 5.2 The exterior angle of a triangle', ''),
    (2, 'The property of the bisector of an angle', 'S8 5.3 Constructions', ''),
    (2, 'Relations between the sides and the angles of a triangle', 'S8 5 Angles and constructions', ''),
    (2, 'Practical exercises and applications. Check your knowledge', 'S8 15 Distance, area and volume — area of triangles and quadrilaterals  [CAMBRIDGE INSERT]', C),
    (1, 'Control work No. 6 (parallel lines and angles of a triangle)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (2, 'The square of a sum and of a difference', 'S8 2.3 Expanding brackets', ''),
    (2, 'The difference of two squares', 'S8 2.4 Factorising', ''),
    (2, 'The cube of a sum. The cube of a difference', 'Extension beyond Stage 8', ''),
    (2, 'The difference and the sum of two cubes', 'Extension beyond Stage 8', ''),
    (2, 'Methods of factorising', 'S8 2.4 Factorising', ''),
    (2, 'Applying the abridged multiplication formulae', 'S8 2.4 Factorising', ''),
    (1, 'Control work No. 7 (abridged multiplication formulae)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (2, 'The algebraic fraction. Cancelling fractions', 'S8 7 Fractions — algebraic extension', ''),
    (2, 'Reducing algebraic fractions to a common denominator', 'S8 7 Fractions — algebraic extension', ''),
    (2, 'Addition and subtraction of algebraic fractions', 'S8 7 Fractions — algebraic extension', ''),
    (2, 'Multiplication and division of algebraic fractions', 'S8 7.4-7.5 Multiplying and dividing with fractions', ''),
    (1, 'Control work No. 8 (algebraic fractions)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (1, 'The equation and its root', 'S8 2.5 Constructing and solving equations', ''),
    (2, 'Linear equations with one unknown', 'S8 2.5 Constructing and solving equations', ''),
    (2, 'Al-Khwarizmi’s method of solving equations', 'S8 2.5 Constructing and solving equations — historical', ''),
    (2, 'Solving problems with the help of equations', 'S8 2.5 Constructing and solving equations', ''),
    (1, 'Control work No. 9 (linear equations)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),

    # ---------------- IV quarter, 40 h ----------------
    (2, 'Practical exercises and applications. Check your knowledge', 'S8 10 Percentages — percentage change and simple interest  [CAMBRIDGE INSERT]', C),
    (2, 'Construction problems with compasses and a straightedge', 'S8 5.3 Constructions', ''),
    (2, 'Practical exercises and applications. Check your knowledge', 'S8 8.2 The circumference of a circle  [CAMBRIDGE INSERT]', C),
    (2, 'The Cartesian coordinate system', 'S8 11 Graphs', ''),
    (2, 'The idea of a function', 'S8 9.4 Representing simple functions', ''),
    (2, 'The linear function', 'S8 9.2-9.3 Finding rules for sequences; using the nth term', ''),
    (1, 'Control work No. 10 (functions and graphs)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (2, 'Systems of linear equations', 'S8 2.5 Constructing and solving equations — extension', ''),
    (3, 'Methods of solving a system of linear equations', 'Extension beyond Stage 8', ''),
    (3, 'Solving problems with the help of systems of linear equations', 'Extension beyond Stage 8', ''),
    (1, 'Control work No. 11 (systems of linear equations)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (3, 'The basic rules of combinatorics', 'S8 13 Probability — counting outcomes', ''),
    (3, 'Kinds of combinatorial problem', 'S8 13 Probability — counting outcomes', ''),
    (3, 'Methods of solving combinatorial problems', 'S8 13 Probability — counting outcomes', ''),
    (1, 'Practical exercises and applications. Check your knowledge', 'S8 13 Probability — experimental and theoretical  [CAMBRIDGE INSERT]', C),
    (1, 'Practical exercises and applications. Check your knowledge', 'S8 6.1-6.2 Data collection and sampling  [CAMBRIDGE INSERT]', C),
    (1, 'Practical exercises and applications. Check your knowledge', 'S8 16 Interpreting and discussing results  [CAMBRIDGE INSERT]', C),
    (1, 'Practical exercises and applications. Check your knowledge', 'S8 12 Ratio and proportion  [CAMBRIDGE INSERT]', C),
    (1, 'Practical exercises and applications. Check your knowledge', 'S8 15 Distance, area and volume — surface area and volume of prisms  [CAMBRIDGE INSERT]', C),
    (1, 'Annual control work', 'Summative assessment', T),
    (1, 'Work on mistakes; the Grade 8 preview', 'Feedback and correction', R),
)


# ===========================================================================
#  GRADE 9 — ALGEBRA (102 h, 3 h/week)
# ===========================================================================
G9_ALG = rows(
    # ---------------- I quarter, 27 h ----------------
    (2, 'Revision of the Grade 8 course. Entry diagnostic test', 'IGX 1-6 audit of prior knowledge', T),
    (1, 'Definition of the quadratic function', 'IGX 10.2 Quadratic (and other) expressions', ''),
    (1, 'The function y = x²', 'IGX 10.2 Quadratic (and other) expressions', ''),
    (1, 'The function y = ax²', 'IGX 10.2 Quadratic (and other) expressions', ''),
    (1, 'The function y = ax² + bx + c', 'IGX 10.2 Quadratic (and other) expressions', ''),
    (2, 'Drawing the graph of a quadratic function', 'IGX 10.2 Quadratic (and other) expressions', ''),
    (2, 'The quadratic inequality and its solution', 'Extension beyond IGX', ''),
    (2, 'Solving a quadratic inequality from the graph of the quadratic function', 'Extension beyond IGX', ''),
    (2, 'The method of intervals', 'Extension beyond IGX', ''),
    (1, 'Control work No. 1 (the quadratic function)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (2, 'The domain of a function', 'IGX 10.1 Straight lines — domain and range', ''),
    (1, 'Increasing and decreasing functions', 'IGX 10.1 Straight lines', ''),
    (2, 'Even and odd functions', 'Extension beyond IGX', ''),
    (2, 'Inequalities and equations containing a power', 'IGX 2.5 Indices', ''),
    (2, 'Exercises to the chapter', 'IGX 9.2 Rational and irrational numbers  [CAMBRIDGE INSERT]', C),
    (1, 'Control work No. 2 (properties of functions)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),

    # ---------------- II quarter, 21 h ----------------
    (2, 'Solving the simplest systems containing an equation of the second degree', 'IGX 10.2 Quadratic (and other) expressions', ''),
    (2, 'Various methods of solving systems of equations', 'IGX 6.2 Solving linear equations — extension', ''),
    (2, 'Systems of second-degree inequalities with one unknown', 'Extension beyond IGX', ''),
    (2, 'Proving the simplest inequalities', 'Extension beyond IGX', ''),
    (1, 'Exercises to the chapter', 'IGX 9.3 Sets and Venn diagrams  [CAMBRIDGE INSERT]', C),
    (1, 'Control work No. 3 (systems of equations and inequalities)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (2, 'The radian measure of an angle', 'Extension beyond IGX', ''),
    (2, 'Rotation of a point about the origin', 'Extension beyond IGX', ''),
    (2, 'Definition of the sine, cosine, tangent and cotangent of an angle', 'Extension beyond IGX', ''),
    (2, 'The signs of the sine, cosine, tangent and cotangent', 'Extension beyond IGX', ''),
    (1, 'Control work No. 4 (introduction to trigonometry)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),

    # ---------------- III quarter, 30 h ----------------
    (2, 'The relation between the sine, cosine, tangent and cotangent of one angle', 'Extension beyond IGX', ''),
    (3, 'Trigonometric identities', 'Extension beyond IGX', ''),
    (2, 'The sine, cosine, tangent and cotangent of the angles α and −α', 'Extension beyond IGX', ''),
    (2, 'The addition formulae', 'Extension beyond IGX', ''),
    (2, 'The sine and the cosine of a double angle', 'Extension beyond IGX', ''),
    (2, 'The reduction formulae', 'Extension beyond IGX', ''),
    (2, 'The sum and difference of sines. The sum and difference of cosines', 'Extension beyond IGX', ''),
    (1, 'Exercises to the chapter', 'IGX 5.4-5.5 Standard form and the calculator  [CAMBRIDGE INSERT]', C),
    (1, 'Practical and cross-curricular problems', 'IGX 7.3 Surface areas and volumes of solids  [CAMBRIDGE INSERT]', C),
    (1, 'Control work No. 5 (trigonometric identities)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (2, 'Numerical sequences and the ways of defining them', 'IGX 9.1 Sequences', ''),
    (3, 'The arithmetic progression', 'IGX 9.1 Sequences', ''),
    (4, 'The sum of the first n terms of an arithmetic progression', 'IGX 9.1 Sequences', ''),
    (1, 'Control work No. 6 (arithmetic progression)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),

    # ---------------- IV quarter, 24 h ----------------
    (2, 'The geometric progression', 'IGX 9.1 Sequences', ''),
    (2, 'The sum of the first n terms of a geometric progression', 'IGX 9.1 Sequences', ''),
    (2, 'The infinite decreasing geometric progression', 'Extension beyond IGX', ''),
    (1, 'Exercises to the chapter', 'IGX 9.2 Rational and irrational numbers — recurring decimals  [CAMBRIDGE INSERT]', C),
    (1, 'Practical and cross-curricular problems', 'IGX 6.4 Rearrangement of a formula  [CAMBRIDGE INSERT]', C),
    (1, 'Control work No. 7 (geometric progression)', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (2, 'Events', 'IGX 8.1 Basic probability', ''),
    (2, 'The probability of an event', 'IGX 8.2 Theoretical probability', ''),
    (1, 'The relative frequency of a random event', 'IGX 8.1 Basic probability', ''),
    (2, 'Random variables', 'IGX 8.4 Possibility diagrams', ''),
    (1, 'Numerical characteristics of random variables', 'IGX 12.1 Different types of average', ''),
    (1, 'Exercises to the chapter', 'IGX 8.3, 8.5 Complementary events; independent and mutually exclusive events  [CAMBRIDGE INSERT]', C),
    (1, 'Practical and cross-curricular problems', 'IGX 12.5-12.6 Percentiles, quartiles and box-and-whisker plots  [CAMBRIDGE INSERT]', C),
    (1, 'Annual control work', 'Summative assessment', T),
    (1, 'Work on mistakes', 'Feedback and correction', R),
    (2, 'Annual revision; the Grade 10 preview', 'IGX 1-12 review; Pure Mathematics 1 preview', R),
)


# ===========================================================================
#  GRADE 9 — GEOMETRY (68 h, 2 h/week)
# ===========================================================================
G9_GEO = rows(
    # ---------------- I quarter, 18 h ----------------
    (2, 'Revision of the Grade 8 course. Entry diagnostic test', 'IGX 3, 11 audit of prior knowledge', T),
    (1, 'Similarity of polygons', 'IGX 11.3 Understanding similar shapes', ''),
    (1, 'Similar triangles and their properties', 'IGX 11.2 Understanding similar triangles', ''),
    (1, 'The first criterion of similarity of triangles', 'IGX 11.2 Understanding similar triangles', ''),
    (1, 'The second criterion of similarity of triangles', 'IGX 11.2 Understanding similar triangles', ''),
    (1, 'The third criterion of similarity of triangles', 'IGX 11.2 Understanding similar triangles', ''),
    (1, 'Criteria of similarity of right-angled triangles', 'IGX 11.1-11.2 Pythagoras’ theorem; similar triangles', ''),
    (1, 'Applying the criteria of similarity to problems on proof', 'IGX 11.4 Understanding congruence', ''),
    (1, 'Transformations of the plane. Movement and translation', 'IGX 3.1 Lines and angles — extension', ''),
    (1, 'Axial symmetry', 'Extension beyond IGX', ''),
    (1, 'Central symmetry and rotation', 'Extension beyond IGX', ''),
    (1, 'Similarity of geometric figures', 'IGX 11.3 Understanding similar shapes', ''),
    (1, 'Properties of similar polygons', 'IGX 11.3 Understanding similar shapes', ''),
    (1, 'Homothety and similarity', 'IGX 11.3 Understanding similar shapes', ''),
    (1, 'Problems on the revision of the chapter', 'IGX 11.4 Understanding congruence  [CAMBRIDGE INSERT]', C),
    (1, 'Control work No. 1 (similarity)', 'Summative assessment', T),
    (1, 'Revision and work on mistakes', 'Feedback and correction', R),

    # ---------------- II quarter, 14 h ----------------
    (2, 'The sine, cosine, tangent and cotangent of angles from 0° to 180°', 'Extension beyond IGX', ''),
    (1, 'Computing the area of a triangle using the sine of an angle', 'IGX 7.1 Perimeter and area in two dimensions', ''),
    (1, 'The sine rule', 'Extension beyond IGX', ''),
    (1, 'The cosine rule', 'Extension beyond IGX', ''),
    (2, 'Some applications of the sine rule and the cosine rule', 'Extension beyond IGX', ''),
    (2, 'The angle between two vectors and the scalar product of two vectors', 'Extension beyond IGX', ''),
    (2, 'Solving triangles', 'Extension beyond IGX', ''),
    (1, 'Problems on the revision of the chapter', 'IGX 3.2 Triangles  [CAMBRIDGE INSERT]', C),
    (1, 'Control work No. 2 (solving triangles)', 'Summative assessment', T),
    (1, 'Revision and work on mistakes', 'Feedback and correction', R),

    # ---------------- III quarter, 20 h ----------------
    (2, 'The inscribed polygon', 'IGX 3.5 Circles', ''),
    (2, 'The circumscribed polygon', 'IGX 3.5 Circles', ''),
    (1, 'Regular polygons', 'IGX 3.4 Polygons', ''),
    (2, 'Circles inscribed in and circumscribed about a regular polygon', 'IGX 3.4-3.5 Polygons; circles', ''),
    (2, 'The relation between the side of a regular polygon and the radii of the inscribed and circumscribed circles', 'IGX 3.4 Polygons', ''),
    (2, 'The circumference of a circle', 'IGX 7.1 Perimeter and area in two dimensions', ''),
    (2, 'The length of an arc. The radian measure of an angle', 'IGX 7.1 Perimeter and area in two dimensions', ''),
    (2, 'The area of a disc', 'IGX 7.1 Perimeter and area in two dimensions', ''),
    (2, 'The areas of the parts of a disc', 'IGX 7.1 Perimeter and area in two dimensions', ''),
    (1, 'Problems on the revision of the chapter', 'IGX 7.2-7.3 Three-dimensional objects; surface areas and volumes  [CAMBRIDGE INSERT]', C),
    (1, 'Control work No. 3 (regular polygons and the circle)', 'Summative assessment', T),
    (1, 'Revision and work on mistakes', 'Feedback and correction', R),

    # ---------------- IV quarter, 16 h ----------------
    (2, 'The projection of segments and proportionality', 'IGX 11.2 Understanding similar triangles', ''),
    (2, 'Properties of proportional segments', 'IGX 11.2 Understanding similar triangles', ''),
    (2, 'Proportional segments in a right-angled triangle', 'IGX 11.1 Pythagoras’ theorem', ''),
    (2, 'Construction of the mean proportional of two given segments', 'IGX 3.6 Construction', ''),
    (2, 'Proportional segments in a circle', 'IGX 3.5 Circles', ''),
    (2, 'Practical exercises on the revision of the chapter', 'IGX 3.6 Construction; scale drawing  [CAMBRIDGE INSERT]', C),
    (1, 'Control work No. 4 (proportional segments)', 'Summative assessment', T),
    (3, 'Annual revision; the Grade 10 preview', 'IGX 1-12 review; Geometry 10 preview', R),
)


# ===========================================================================
#  Document assembly
# ===========================================================================
ROMAN = ['I', 'II', 'III', 'IV']

REFS = {
    'S7': '| `S7` | Cambridge Lower Secondary Mathematics — Stage 7 Learner’s Book |',
    'S8': '| `S8` | Cambridge Lower Secondary Mathematics — Stage 8 Learner’s Book |',
    'IGX': '| `IGX` | Cambridge IGCSE Mathematics — Core &amp; Extended (Units 1–3, chapters 1–12) |',
}

INTRO_SPECIAL = """# Annual Plan — {name}

**{load} · {total} hours per year · Uzbekistan national programme, enriched with {cam}**

This plan keeps the Republic of Uzbekistan Grade {grade} {subject} calendar-thematic plan intact —
the same topics, the same order, the same hour count per quarter ({qs}) — so that it
remains compliant with the Ministry programme and the state control works. It is built directly
from the official 2025–2026 KTP supplied by the school.

Cambridge coverage is added in two ways:

1. **Mapping.** Every national lesson carries the Cambridge sub-unit it corresponds to. Where the
   national topic goes further than the Cambridge syllabus, the note reads *Extension beyond*.
2. **Inserts.** The lessons the national plan leaves flexible — the chapter-exercise lessons, the
   "practical and cross-curricular problems" and the "practical exercises and applications" —
   are given specific Cambridge content that the national programme does not cover at all. These
   are marked `CAM` in the Flag column.

**Reference editions**

| Code | Book |
|:--:|---|
{refs}

**Flags** — `Test` control work or assessment · `R` reserve, revision or feedback lesson that may
be given up to a red day · `CAM` Cambridge insert into a flexible national lesson.
"""

INTRO_ENHANCED = """# Annual Plan — {name}

**{load} · {total} hours per year · Uzbekistan national programme (170 h) with a {extra}-hour Cambridge {stage} layer**

The national Grade {grade} plan runs at 5 hours a week — 170 lessons, 45 / 35 / 50 / 40 by quarter.
This class is taught **6 hours a week**, so it has **{extra} lessons more** than the national plan
needs: exactly one extra lesson a week, {qsx} across the four quarters.

All 170 national lessons are kept, in the national order, from the official 2025–2026 KTP. The
{extra} extra lessons carry Cambridge {stage} content that the national programme does not cover at
all — chiefly:

* **directed numbers** — adding, subtracting, multiplying and dividing integers (the national Grade
  {grade} plan meets negative numbers only in Grade 7);
* **place value, rounding and decimal arithmetic**;
* **lowest common multiples, highest common factors, tests for divisibility, square and cube roots**;
* **angle facts and constructions**, symmetry and congruence;
* **data collection and sampling**, graphs, probability, position and transformation;
* the Cambridge **projects**.

These are marked `CAM` in the Flag column, together with three national "Think — problem task"
lessons that are given specific Cambridge project content — {camtotal} `CAM` lessons in all, of which
{extra} are added on top of the national plan and 3 are national slots filled with Cambridge work.
All 170 national lessons remain, in the national order. Every other lesson carries the {stage}
sub-unit it corresponds to, so the class can sit Checkpoint papers without extra preparation.

**Reference editions**

| Code | Book |
|:--:|---|
{refs}

**Flags** — `Test` control work or assessment · `R` reserve, revision or feedback lesson that may
be given up to a red day · `CAM` Cambridge lesson added on top of the national plan.
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
6 hours a week this typically costs **4–6 lessons**; 5 hours a week, **3–5 lessons**;
3 hours a week, **2–3 lessons**; 2 hours a week, **1–2 lessons**.

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

PLANS = [
    ('08-cambridge-class-grade6-mathematics.md', 'Mathematics, Grade 6 (Cambridge Class)', 6,
     'Mathematics', '6 hours per week', 204, [54, 42, 60, 48], 'G6', ['S7'],
     'Cambridge Lower Secondary Mathematics Stage 7', 'enhanced'),
    ('09-special-class-mathematics-grade7.md', 'Mathematics, Grade 7 (Special Class)', 7,
     'Mathematics', '5 hours per week', 170, [45, 35, 50, 40], 'G7', ['S8'],
     'Cambridge Lower Secondary Mathematics Stage 8', 'special'),
    ('10-special-class-algebra-grade9.md', 'Algebra, Grade 9 (Special Class)', 9,
     'Algebra', '3 hours per week', 102, [27, 21, 30, 24], 'G9_ALG', ['IGX'],
     'Cambridge IGCSE Mathematics Extended (chapters 1–12)', 'special'),
    ('11-special-class-geometry-grade9.md', 'Geometry, Grade 9 (Special Class)', 9,
     'Geometry', '2 hours per week', 68, [18, 14, 20, 16], 'G9_GEO', ['IGX'],
     'Cambridge IGCSE Mathematics Extended (chapters 1–12)', 'special'),
]

DATA = {'G6': None, 'G7': None, 'G9_ALG': None, 'G9_GEO': None}


def build(fname, name, grade, subject, load, total, quarters, key, refkeys, cam, kind):
    data = DATA[key]
    assert len(data) == total, '%s: %d rows, expected %d' % (fname, len(data), total)
    refs = '\n'.join(REFS[k] for k in refkeys)
    if kind == 'enhanced':
        camtotal = sum(1 for _, _, f in data if f == C)
        head = INTRO_ENHANCED.format(name=name, load=load, total=total, grade=grade,
                                     extra=total - 170, camtotal=camtotal,
                                     stage=refkeys[0].replace('S', 'Stage '),
                                     qsx=' / '.join(str(q - n) for q, n in zip(quarters, [45, 35, 50, 40])),
                                     refs=refs)
    else:
        head = INTRO_SPECIAL.format(name=name, load=load, total=total, cam=cam, grade=grade,
                                    subject=subject, refs=refs,
                                    qs=' / '.join(str(q) for q in quarters))
    col = 'Stage 7 link / note' if refkeys[0] == 'S7' else \
          'Stage 8 link / note' if refkeys[0] == 'S8' else 'Cambridge link / note'
    out = [head]
    n = 0
    for qi, qh in enumerate(quarters):
        out.append('\n## %s QUARTER (%d hours)\n' % (ROMAN[qi], qh))
        out.append('| No. | Lesson topic | Hours | %s | Flag |' % col)
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

    with open(os.path.join(HERE, fname), 'w', encoding='utf-8') as fh:
        fh.write('\n'.join(out) + '\n')
    return counts


if __name__ == '__main__':
    DATA.update(G6=G6, G7=G7, G9_ALG=G9_ALG, G9_GEO=G9_GEO)
    for spec in PLANS:
        c = build(*spec)
        print('%-44s %3d lessons  |  CAM %2d  Test %2d  R %2d  teaching %3d'
              % (spec[0], spec[5], c.get(C, 0), c.get(T, 0), c.get(R, 0), c.get('-', 0)))
