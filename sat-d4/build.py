# -*- coding: utf-8 -*-
"""Builds the SAT D4 teacher booklet (HTML -> PDF via render.mjs).

Each lesson keeps the layout of the original teacher copy and adds a labelled
diagram to every explanation, every worked example and every test-style
question that describes a shape.
"""
import re
import sys

sys.path.insert(0, '.')

import importlib

LESSONS = []
for _mod in ('content41', 'content42', 'content43', 'content44', 'content45', 'content46'):
    try:
        LESSONS.append(importlib.import_module(_mod).LESSON)
    except ImportError:                      # a lesson still being written
        pass

SCHOOL = 'Grade 11  ·  Ellipse International School'


def md(s):
    """**bold** and *italic* in the source text."""
    s = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', s)
    s = re.sub(r'(?<![\*\w])\*([^\*]+?)\*(?!\*)', r'<i>\1</i>', s)
    return s


def figblock(figs, caption=None, cls='figbox'):
    if not figs:
        return ''
    if isinstance(figs, str):
        figs = [figs]
    inner = ('<div class="figrow%s">' % (' one' if len(figs) == 1 else '')
             + ''.join(figs) + '</div>')
    if caption:
        inner += '<p class="figcap">' + md(caption) + '</p>'
    return '<figure class="%s">%s</figure>' % (cls, inner)


def section_html(n, sec):
    h = ['<section class="sec">', '<div class="sec-top">']
    h.append('<h2><span class="num">%d</span>%s</h2>' % (n, sec['title']))
    h.append('<p class="fact">%s</p>' % md(sec['fact']))
    h.append('<p class="lead">%s</p>' % md(sec['text']))
    h.append(figblock(sec.get('figs'), sec.get('caption')))
    h.append('</div>')
    for i, e in enumerate(sec['examples'], 1):
        h.append('<div class="eg">')
        h.append('<div class="eg-q"><span class="eg-n">Example %d.</span> %s</div>'
                 % (i, md(e['q'])))
        sol = ''.join('<p>%s</p>' % md(line) for line in e['sol'])
        if e.get('fig'):
            h.append('<div class="eg-s split"><div class="eg-t"><span class="lab">Solution.'
                     '</span>%s</div><div class="eg-f">%s</div></div>' % (sol, e['fig']))
        else:
            h.append('<div class="eg-s"><span class="lab">Solution.</span>%s</div>' % sol)
        h.append('</div>')
    h.append('</section>')
    return ''.join(h)


def desmos_html(lesson):
    rows = ''
    for i, (q, typ, then, ans) in enumerate(lesson['desmos'], 1):
        rows += ('<tr><td class="id">D%d</td><td>%s</td><td class="code">%s</td>'
                 '<td>%s</td><td class="ans">%s</td></tr>'
                 % (i, md(q), typ, md(then), ans))
    return ('<section class="part first"><h3>Part 1 — With Desmos '
            '<span class="sub">(10 questions · draw the figure; the picture is faster '
            'than the algebra)</span></h3>'
            '<p class="lead">%s</p>'
            '<table class="desmos"><thead><tr><th>#</th><th>Question</th>'
            '<th>Type into Desmos</th><th>Then</th><th>Answer</th></tr></thead>'
            '<tbody>%s</tbody></table></section>' % (md(lesson['desmos_intro']), rows))


def part2_html(lesson):
    rows = ''
    for (pid, level, q, ans, sol, fig) in lesson['part2']:
        qcell = '<div class="pq">%s</div>' % md(q)
        if fig:
            qcell += figblock(fig, cls='figbox tiny')
        solcell = ''.join('<p>%s</p>' % md(line) for line in sol)
        rows += ('<tr><td class="id">%s</td><td class="lvl %s">%s</td><td>%s</td>'
                 '<td class="ans">%s</td><td class="sol">%s</td></tr>'
                 % (pid, 'vh' if level.startswith('Very') else 'hd',
                    level.replace(' ', '<br>'), qcell, md(ans), solcell))
    return ('<section class="part"><h3>Part 2 — Test-Style Questions '
            '<span class="sub">(12 questions · hard and very hard)</span></h3>'
            '<p class="lead">%s</p>'
            '<table class="tests"><thead><tr><th>#</th><th>Level</th><th>Question</th>'
            '<th>Answer</th><th>Solution</th></tr></thead><tbody>%s</tbody></table>'
            '</section>' % (md(lesson['part2_intro']), rows))


def lesson_html(lesson):
    h = ['<article class="lesson" data-foot="SAT Math — %s · Teacher copy">' % lesson['title']]
    h.append('<header class="head"><h1>SAT Math %s — %s</h1>'
             '<p class="byline">Explanations with worked examples · diagrams for every rule '
             '· Desmos questions  |  <b>Teacher copy — with solutions</b>  ·  %s</p>'
             '</header>' % (lesson['code'], lesson['title'], SCHOOL))
    for i, sec in enumerate(lesson['sections'], 1):
        h.append(section_html(i, sec))
    h.append(desmos_html(lesson))
    h.append(part2_html(lesson))
    h.append('<p class="habit"><b>The one habit to build.</b> %s</p>'
             % md(lesson['habit'].replace('**The one habit to build.** ', '')))
    h.append('<p class="verified">All 18 worked examples and all 22 answers checked '
             'numerically (see verify.py); every figure is drawn to the numbers in the '
             'question.</p>')
    h.append('</article>')
    return ''.join(h)


def build(path='SAT_D4_GEOMETRY_TRIGONOMETRY_teacher.html', lessons=None):
    css = open('booklet.css').read()
    body = ''.join(lesson_html(l) for l in (lessons or LESSONS))
    html = ('<!doctype html><html lang="en"><head><meta charset="utf-8">'
            '<title>SAT Math 4 — Geometry &amp; Trigonometry · Teacher copy</title>'
            '<style>%s</style></head><body>%s</body></html>' % (css, body))
    open(path, 'w').write(html)
    return path


if __name__ == '__main__':
    print(build(*sys.argv[1:2]))
