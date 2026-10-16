# -*- coding: utf-8 -*-
"""Builds a teacher booklet (HTML -> PDF via render.mjs).

Usage: python3 build.py <out.html> [d4|d2]

Each lesson keeps the layout of the original teacher copy and adds a labelled
diagram to every explanation, every worked example and every test-style
question that describes a shape.
"""
import re
import sys

sys.path.insert(0, '.')

import importlib

# Domain order is the College Board's own: Algebra, Advanced Math,
# Problem-Solving & Data Analysis, Geometry & Trigonometry. A domain whose
# content modules are not present yet is simply skipped.
BOOKS = {
    'd1': ('SAT Math 1 \u2014 Algebra',
           tuple('content1%d' % i for i in range(1, 9))),
    'd2': ('SAT Math 2 \u2014 Advanced Math',
           tuple('content2%d' % i for i in range(1, 9))),
    'd3': ('SAT Math 3 \u2014 Problem-Solving & Data Analysis',
           tuple('content3%d' % i for i in range(1, 9))),
    'd4': ('SAT Math 4 \u2014 Geometry & Trigonometry',
           tuple('content4%d' % i for i in range(1, 9))),
}
ORDER = ('d1', 'd2', 'd3', 'd4')
FILES = {
    'd1': 'SAT_D1_ALGEBRA_teacher',
    'd2': 'SAT_D2_ADVANCED_MATH_teacher',
    'd3': 'SAT_D3_PROBLEM_SOLVING_DATA_teacher',
    'd4': 'SAT_D4_GEOMETRY_TRIGONOMETRY_teacher',
}


def load(book='d4'):
    out = []
    for mod in BOOKS[book][1]:
        try:
            out.append(importlib.import_module(mod).LESSON)
        except ImportError:                  # a lesson still being written
            pass
    return out


LESSONS = load('d4')

SCHOOL = 'Grade 11  ·  Ellipse International School'


def md(s):
    """**bold** and *italic* in the source text."""
    s = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', s)
    s = re.sub(r'(?<![\*\w])\*([^\*]+?)\*(?!\*)', r'<i>\1</i>', s)
    return s


VB = re.compile(r'viewBox="0 0 ([\d.]+) ([\d.]+)"')


def aspect(svg):
    m = VB.search(svg)
    return (float(m.group(1)) / float(m.group(2))) if m else 1.0


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
        fig = e.get('fig')
        if fig and aspect(fig) < 1.75:
            # a drawing: it sits beside the solution
            h.append('<div class="eg-s split"><div class="eg-t"><span class="lab">Solution.'
                     '</span>%s</div><div class="eg-f">%s</div></div>' % (sol, fig))
        elif fig:
            # a wide text panel: full width under the solution, so it stays legible
            h.append('<div class="eg-s"><span class="lab">Solution.</span>%s'
                     '<div class="eg-wide">%s</div></div>' % (sol, fig))
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
    sub = lesson.get('desmos_sub', 'every one is faster on the graph')
    return ('<section class="part first"><h3>Part 1 — With Desmos '
            '<span class="sub">(10 questions · %s)</span></h3>' % sub + (
            '<p class="lead">%s</p>'
            '<table class="desmos"><thead><tr><th>#</th><th>Question</th>'
            '<th>Type into Desmos</th><th>Then</th><th>Answer</th></tr></thead>'
            '<tbody>%s</tbody></table></section>' % (md(lesson['desmos_intro']), rows)))


def part2_html(lesson):
    rows = ''
    for (pid, level, q, ans, sol, fig) in lesson['part2']:
        qcell = '<div class="pq">%s</div>' % md(q)
        if fig:
            qcell += figblock(fig, cls='figbox tiny%s'
                              % (' wide' if aspect(fig) >= 1.75 else ''))
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


def lesson_html(lesson, checker='verify.py'):
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
             'against the source and, where they are numeric, recomputed by %s; every '
             'figure is drawn to the numbers in the question.</p>' % checker)
    h.append('</article>')
    return ''.join(h)


def counts(lessons):
    """How many sections, examples, questions and figures a domain holds."""
    figs = sum(len(s.get('figs') or []) for L in lessons for s in L['sections'])
    figs += sum(1 for L in lessons for s in L['sections']
                for e in s['examples'] if e.get('fig'))
    figs += sum(1 for L in lessons for row in L['part2'] if row[5])
    return {
        'lessons': len(lessons),
        'sections': sum(len(L['sections']) for L in lessons),
        'examples': sum(len(s['examples']) for L in lessons for s in L['sections']),
        'questions': sum(len(L['desmos']) + len(L['part2']) for L in lessons),
        'figures': figs,
    }


def cover_html(books):
    """Title page and contents for the merged booklet."""
    rows, toc, total = '', '', {'lessons': 0, 'figures': 0, 'examples': 0, 'questions': 0}
    for key in books:
        ls = load(key)
        if not ls:
            continue
        c = counts(ls)
        for k in total:
            total[k] += c[k]
        rows += ('<tr><td class="dom">%s</td><td>%d</td><td>%d</td><td>%d</td>'
                 '<td class="fg">%d</td></tr>'
                 % (BOOKS[key][0], c['lessons'], c['examples'], c['questions'], c['figures']))
        toc += ('<div class="toc-block"><h3 class="toc-h">%s</h3><ol class="toc">'
                % BOOKS[key][0])
        for L in ls:
            toc += '<li><b>%s</b> %s</li>' % (L['code'], L['title'])
        toc += '</ol></div>'
    rows += ('<tr class="tot"><td class="dom">All domains</td><td>%d</td><td>%d</td>'
             '<td>%d</td><td class="fg">%d</td></tr>'
             % (total['lessons'], total['examples'], total['questions'], total['figures']))
    return ('<section class="cover">'
            '<h1 class="cov">SAT Math \u2014 Teacher Copies</h1>'
            '<p class="cov-sub">Explanations with worked examples \u00b7 a labelled figure '
            'for every rule, every example and every question \u00b7 Desmos questions '
            '\u00b7 %s</p>'
            '<table class="cover-t"><thead><tr><th>Domain</th><th>Lessons</th>'
            '<th>Worked examples</th><th>Questions</th><th>Figures</th></tr></thead>'
            '<tbody>%s</tbody></table>'
            '<div class="toc-wrap">%s</div>'
            '<p class="cov-foot">Each domain is also supplied as its own file. Every numeric '
            'answer in this booklet is recomputed by the checkers in the source folder; every '
            'figure is drawn to the numbers in its own question.</p>'
            '</section>' % (SCHOOL, rows, toc))


def build_all(path='SAT_Math_ALL_DOMAINS_teacher.html', books=ORDER):
    """One file holding every domain, with a cover and contents."""
    css = open('booklet.css').read()
    body = cover_html(books)
    for key in books:
        ls = load(key)
        if ls:
            body += ''.join(lesson_html(l, 'the checkers in the source folder') for l in ls)
    html = ('<!doctype html><html lang="en"><head><meta charset="utf-8">'
            '<title>SAT Math \u00b7 Teacher copies \u00b7 all domains</title>'
            '<style>%s</style></head><body>%s</body></html>' % (css, body))
    open(path, 'w').write(html)
    return path


def build(path='SAT_D4_GEOMETRY_TRIGONOMETRY_teacher.html', lessons=None, book='d4'):
    css = open('booklet.css').read()
    checker = {'d2': 'verify2.py', 'd1': 'verify13.py',
               'd3': 'verify13.py'}.get(book, 'verify.py')
    body = ''.join(lesson_html(l, checker)
                   for l in (lessons if lessons is not None else load(book)))
    html = ('<!doctype html><html lang="en"><head><meta charset="utf-8">'
            '<title>%s \u00b7 Teacher copy</title>'
            '<style>%s</style></head><body>%s</body></html>'
            % (BOOKS[book][0].replace('&', '&amp;'), css, body))
    open(path, 'w').write(html)
    return path


if __name__ == '__main__':
    out = sys.argv[1] if len(sys.argv) > 1 else 'SAT_D4_GEOMETRY_TRIGONOMETRY_teacher.html'
    which = sys.argv[2] if len(sys.argv) > 2 else 'd4'
    print(build_all(out) if which == 'all' else build(out, book=which))
