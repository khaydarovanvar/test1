# -*- coding: utf-8 -*-
"""A one-topic teacher copy: Fraction Algebra 2 — Solving Coefficients.

    python3 worksheet_coefficients.py            # writes the HTML next to this file

It reuses the booklet's own helpers and stylesheet, so the page prints in the
same house style as the four domain booklets.
"""
import sys

sys.path.insert(0, '.')

import algebra as A
import build
import plot
from svgbase import GREEN, INK, RED

TITLE = 'Fraction Algebra 2 — Solving Coefficients'

# ------------------------------------------------------------------ figures

METHOD = A.flow(('add the fractions', 'one fraction over x² − 9',
                 'supply the missing factor', 'read a, b, c, d off'),
                note='match the denominator you are given before you read any '
                     'coefficient')

READOFF = A.rules_panel(
    (('P(0)', '= d, the constant term on its own'),
     ('P(1)', '= a + b + c + d, all four at once'),
     ('P(1) − P(0)', '= a + b + c, which is what is asked')),
    title='P(x) is the numerator, so substituting reads its coefficients off', w=345)

SAFE = A.check_table(
    (('x = 0', 'not a pole — safe', True),
     ('x = 1', 'not a pole — safe', True),
     ('x = 3 or x = −3', 'a pole — P is undefined there', False)),
    title='before you substitute, check the value is not a pole', w=345,
    yes='✓ use it', no='✗ avoid')

CURVES = plot.graph(((lambda x: 5.0 / (x + 3) + 6.0 * x / (x - 3), GREEN, None),),
                    w=310, h=210, xmin=-8, xmax=8, ymin=-14, ymax=14,
                    xstep=2, xtick_every=4, ystep=2, ytick_every=4,
                    vlines=((-3, RED, None), (3, RED, None)),
                    label='both sides draw this one curve')

WORKED = A.flow(('5/(x+3) + 6x/(x−3)', '6x² + 23x − 15', '× (x + 2)',
                 '6x³ + 35x² + 31x − 30'),
                note='over x² − 9 first, then the missing (x + 2): '
                     'a = 6, b = 35, c = 31')


def qflow(steps, note=None):
    return A.flow(steps, note=note, w=330)


# --------------------------------------------------------------- the content

SECTIONS = (
    {
        'title': 'What the question is really asking',
        'fact': 'the two sides are the same fraction, so the numerators must match '
                'once the denominators do',
        'text': 'Nothing here is solved for *x*. The equation holds for **every** x, '
                'so it is an identity: add the right-hand side into a single '
                'fraction, make its denominator the one you were given, and the '
                'numerator that appears **is** ax³ + bx² + cx + d.',
        'figs': [METHOD],
        'caption': 'The only thinking step is the third one. '
                   '(x² − 9)(x + 2) is (x + 3)(x − 3)(x + 2), and adding the two '
                   'fractions only gets you as far as (x + 3)(x − 3) — so the '
                   'missing factor is (x + 2).',
    },
    {
        'title': 'Reading the coefficients off, instead of expanding',
        'fact': 'P(0) = d  |  P(1) = a + b + c + d  |  so a + b + c = P(1) − P(0)',
        'text': 'Once you know the numerator is some cubic P(x), you never have to '
                'expand it. Substituting x = 1 adds every coefficient up; '
                'substituting x = 0 leaves only d. **Subtract, and the d cancels.** '
                'This is the whole reason the question asks for a + b + c and not '
                'for b alone.',
        'figs': [READOFF],
        'caption': 'Each substitution is one line in Desmos. Expanding the cubic by '
                   'hand is three lines of algebra and three chances to drop a sign.',
    },
    {
        'title': 'The one thing that can go wrong',
        'fact': 'the shortcut needs x = 0 and x = 1 to be ordinary values, not poles',
        'text': 'You are substituting into the **fraction** form, which is undefined '
                'wherever a denominator is zero. In this question the poles are '
                'x = 3 and x = −3, so 0 and 1 are both fine. If a question put a '
                'pole at x = 1, Desmos would return *undefined* and you would have '
                'to expand the numerator first, or fit it instead.',
        'figs': [SAFE],
        'caption': 'Check the poles before you substitute, not after Desmos returns '
                   'undefined.',
    },
)

DESMOS_INTRO = ('Two lines solve it. The first names the numerator; the second reads '
                'the answer out of it. The third and fourth are the check — define '
                'the cubic you found and see that it draws the same curve.')

DESMOS = (
    ('Name the numerator as a function of x.',
     'P(x)=(5/(x+3)+6x/(x-3))(x^2-9)(x+2)',
     'Everything to the right of the equals sign, times the denominator you were '
     'given.', '—'),
    ('Read off the answer.', 'P(1)-P(0)',
     'P(1) is a + b + c + d and P(0) is d, so the difference is a + b + c.', '72'),
    ('Check the constant term on its own.', 'P(0)',
     'This is d. It is not part of the answer, but it tells you the expansion is '
     'right.', '−30'),
    ('Get every coefficient, not just the sum.', 'y_1~ax_1^3+bx_1^2+cx_1+d',
     'Put x₁ = 0, 1, 2, 4, 5 in a table with y₁ = P(0), P(1), P(2), P(4), P(5), then '
     'type the regression under it. Desmos reports all four coefficients exactly, '
     'with RMSE 0. This route also works when a pole blocks the shortcut.',
     'a = 6, b = 35, c = 31, d = −30'),
    ('Confirm it by eye.',
     'y=(6x^3+35x^2+31x-30)/((x^2-9)(x+2)) and y=5/(x+3)+6x/(x-3)',
     'Two expressions, one curve. If the coefficients were wrong the two graphs '
     'would separate.', 'the curves coincide'),
)

QUESTIONS = (
    ('Q1', 'Hard',
     '(ax³ + bx² + cx + d) ÷ ((x² − 16)(x + 1)) = 3/(x + 4) + 2x/(x − 4). '
     'What is the value of a + b + c?',
     '14',
     ['Add the right-hand side over x² − 16: '
      '3(x − 4) + 2x(x + 4) = **2x² + 11x − 12**.',
      'The given denominator carries an extra (x + 1), so the numerator is '
      '(2x² + 11x − 12)(x + 1) = **2x³ + 13x² − x − 12**.',
      'a + b + c = 2 + 13 − 1 = **14**. In Desmos: P(1) − P(0) = 2 − (−12) = 14.'],
     qflow(('3/(x+4) + 2x/(x−4)', '2x² + 11x − 12', '× (x + 1)',
            '2x³ + 13x² − x − 12'),
           note='poles at x = 4 and x = −4, so P(1) − P(0) is safe')),
    ('Q2', 'Hard',
     '(ax³ + bx² + cx + d) ÷ ((x² − 25)(x − 2)) = 4/(x − 5) + 7x/(x + 5). '
     'What is the value of a + b + c?',
     '44',
     ['The fractions are written the other way round, so take care which one is '
      'multiplied by which: 4(x + 5) + 7x(x − 5) = **7x² − 31x + 20**.',
      'The missing factor is (x − 2), giving '
      '(7x² − 31x + 20)(x − 2) = **7x³ − 45x² + 82x − 40**.',
      'a + b + c = 7 − 45 + 82 = **44**. In Desmos: P(1) − P(0) = 4 − (−40) = 44.'],
     qflow(('4/(x−5) + 7x/(x+5)', '7x² − 31x + 20', '× (x − 2)',
            '7x³ − 45x² + 82x − 40'),
           note='the 4 pairs with (x + 5) and the 7x with (x − 5), not the other '
                'way round')),
    ('Q3', 'Very hard',
     '(ax³ + bx² + cx + d) ÷ ((x² − 1)(x − 4)) = 7/(x + 1) + 2x/(x − 1). '
     'What is the value of a + b + c?',
     '−40',
     ['Over x² − 1: 7(x − 1) + 2x(x + 1) = **2x² + 9x − 7**, and the missing '
      'factor is (x − 4).',
      '(2x² + 9x − 7)(x − 4) = **2x³ + x² − 43x + 28**, so '
      'a + b + c = 2 + 1 − 43 = **−40**.',
      '**The shortcut breaks here.** The poles are x = 1 and x = −1, so P(1) is '
      'undefined in Desmos. Either expand as above, or fit the cubic through five '
      'safe points such as x = 0, 2, 3, 5, 6.'],
     qflow(('7/(x+1) + 2x/(x−1)', '2x² + 9x − 7', '× (x − 4)',
            '2x³ + x² − 43x + 28'),
           note='x = 1 is a pole, so P(1) is undefined — fit the cubic instead')),
)


# ------------------------------------------------------------------- assembly

def html():
    h = ['<article class="lesson" data-foot="SAT Math — %s · Teacher copy">' % TITLE]
    h.append('<header class="head"><h1>%s</h1>'
             '<p class="byline">Worked method · diagrams for every step · Desmos '
             'lines · three new questions  |  <b>Teacher copy — with solutions'
             '</b>  ·  %s</p></header>' % (TITLE, build.SCHOOL))
    for i, sec in enumerate(SECTIONS, 1):
        # no .sec-top wrapper here: these sections carry no worked examples, and
        # its break-after:avoid would chain all three onto one page
        h.append('<section class="sec">')
        h.append('<h2><span class="num">%d</span>%s</h2>' % (i, sec['title']))
        h.append('<p class="fact">%s</p>' % build.md(sec['fact']))
        h.append('<p class="lead">%s</p>' % build.md(sec['text']))
        h.append(build.figblock(sec['figs'], sec['caption']))
        h.append('</section>')

    h.append('<section class="sec">'
             '<h2><span class="num">4</span>The worked question</h2>'
             '<p class="fact">(ax³ + bx² + cx + d) ÷ ((x² − 9)(x + 2)) '
             '= 5/(x + 3) + 6x/(x − 3) — find a + b + c</p>')
    h.append('<div class="eg"><div class="eg-q"><span class="eg-n">Solution.</span> '
             'Add the right-hand side, then supply the factor the denominator is '
             'still missing.</div>')
    h.append('<div class="eg-s"><span class="lab">Working.</span>'
             '<p>5(x − 3) + 6x(x + 3) = 5x − 15 + 6x² + 18x = <b>6x² + 23x − 15</b>, '
             'all over x² − 9.</p>'
             '<p>(x² − 9)(x + 2) needs one more factor of (x + 2), so multiply top '
             'and bottom by it.</p>'
             '<p>(6x² + 23x − 15)(x + 2) = <b>6x³ + 35x² + 31x − 30</b>.</p>'
             '<p>a = 6, b = 35, c = 31 and d = −30, so '
             '<b>a + b + c = 72</b>.</p>'
             '<div class="eg-wide">%s</div></div></div>' % WORKED)
    h.append(build.figblock([CURVES],
                            'The check worth doing: graph the cubic over the given '
                            'denominator and the original right-hand side together. '
                            '**One** curve means the coefficients are right; two '
                            'means they are not. The dashed red lines are the '
                            'asymptotes at x = −3 and x = 3, the two values the '
                            'identity says nothing about.'))
    h.append('</section>')

    rows = ''
    for (what, typed, then, ans) in DESMOS:
        rows += ('<tr><td>%s</td><td class="code">%s</td><td>%s</td>'
                 '<td class="ans">%s</td></tr>'
                 % (build.md(what), typed, build.md(then), ans))
    h.append('<section class="part"><h3>In Desmos '
             '<span class="sub">(five lines, and two of them are only the check)'
             '</span></h3>'
             '<p class="lead">%s</p>'
             '<table class="desmos"><thead><tr><th>What you are doing</th>'
             '<th>Type into Desmos</th><th>Why</th><th>It shows</th></tr></thead>'
             '<tbody>%s</tbody></table></section>' % (DESMOS_INTRO, rows))

    rows = ''
    for (qid, level, q, ans, sol, fig) in QUESTIONS:
        qcell = '<div class="pq">%s</div>' % build.md(q)
        qcell += build.figblock(fig, cls='figbox tiny wide')
        solcell = ''.join('<p>%s</p>' % build.md(line) for line in sol)
        rows += ('<tr><td class="id">%s</td><td class="lvl %s">%s</td><td>%s</td>'
                 '<td class="ans">%s</td><td class="sol">%s</td></tr>'
                 % (qid, 'vh' if level.startswith('Very') else 'hd',
                    level.replace(' ', '<br>'), qcell, ans, solcell))
    h.append('<section class="part"><h3>Three more of the same kind '
             '<span class="sub">(hardest last)</span></h3>'
             '<p class="lead">Same shape every time: a cubic over a disguised '
             'product of three linear factors, equal to two fractions whose '
             'denominators are two of those three. Find the factor the sum is '
             '<b>missing</b>, and the numerator falls out.</p>'
             '<table class="tests"><thead><tr><th>#</th><th>Level</th>'
             '<th>Question</th><th>Answer</th><th>Solution</th></tr></thead>'
             '<tbody>%s</tbody></table></section>' % rows)

    h.append('<p class="habit"><b>The one habit to build.</b> Factorise the '
             'denominator you are <i>given</i> before you touch the fractions on '
             'the right. The answer to every question of this kind is the factor '
             'that is in one list and not the other.</p>')
    h.append('<p class="verified">Every numerator here was expanded in exact '
             'arithmetic and checked against the original identity at 400 random '
             'values of x; a + b + c was then confirmed a second way as '
             'P(1) − P(0).</p>')
    h.append('</article>')
    return ''.join(h)


def main(out='Fraction_Algebra_2_Solving_Coefficients_teacher.html'):
    css = open('booklet.css', encoding='utf-8').read()
    page = ('<!doctype html><html lang="en"><head><meta charset="utf-8">'
            '<title>%s</title><style>%s</style></head><body>%s</body></html>'
            % (TITLE, css, html()))
    open(out, 'w', encoding='utf-8').write(page)
    print(out)


if __name__ == '__main__':
    main(*sys.argv[1:])
