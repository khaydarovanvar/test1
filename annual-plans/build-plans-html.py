#!/usr/bin/env python3
"""Build plans-10-11.html — a browsable view of the four Grade 10-11 plans.

The stylesheet is lifted verbatim from plans.html (the Grade 8 viewer) so the
two pages look like one document. Run after build-plans-10-11.py.
"""
import html
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'plans-10-11.html')

VIEWS = [
    ('alg10', '04-special-class-algebra-grade10.md', 'G10 Algebra', 102,
     'Algebra, Grade 10', '3 h / week', [27, 21, 30, 24], 'var(--uz)'),
    ('geo10', '05-special-class-geometry-grade10.md', 'G10 Geometry', 68,
     'Geometry, Grade 10', '2 h / week', [18, 14, 20, 16], 'var(--uz)'),
    ('alg11', '06-special-class-algebra-grade11.md', 'G11 Algebra', 102,
     'Algebra and Calculus, Grade 11', '3 h / week', [27, 21, 30, 24], 'var(--cam)'),
    ('geo11', '07-special-class-geometry-grade11.md', 'G11 Geometry', 68,
     'Geometry, Grade 11', '2 h / week', [18, 14, 20, 16], 'var(--cam)'),
]
ROMAN = ['I', 'II', 'III', 'IV']


def style_block():
    src = open(os.path.join(HERE, 'plans.html'), encoding='utf-8').read()
    return src[src.index('<style>'):src.index('</style>') + 8]


def read_plan(md):
    """-> [(quarter_index, no, topic, hours, link, flag)]"""
    rows, qi = [], -1
    for line in open(os.path.join(HERE, md), encoding='utf-8'):
        if re.match(r'##\s+(I{1,3}V?)\s+QUARTER', line):
            qi += 1
            continue
        m = re.match(r'\|\s*(\d+)\s*\|\s*(.+?)\s*\|\s*(\d+)\s*\|\s*(.*?)\s*\|\s*(\S*)\s*\|', line)
        if m and qi >= 0:
            rows.append((qi, int(m.group(1)), m.group(2), int(m.group(3)),
                         m.group(4), m.group(5)))
    return rows


BADGE = {'CAM': ('cam', 'Cambridge'), 'Test': ('test', 'Assessment'), 'R': ('reserve', 'Reserve')}


def table(rows, quarters):
    out = []
    for qi, qh in enumerate(quarters):
        got = [r for r in rows if r[0] == qi]
        out.append('  <section class="quarter"><header class="qhead"><h3>%s QUARTER</h3>'
                   '<span class="qhrs">%d hours</span></header>' % (ROMAN[qi], qh))
        out.append('<div class="tablewrap"><table><thead><tr><th class="cnum">No.</th>'
                   '<th>Lesson topic</th><th class="cnum">h</th>'
                   '<th>Cambridge link / note</th></tr></thead><tbody>')
        for _, no, topic, hrs, link, flag in got:
            cls, label = BADGE.get(flag, ('', ''))
            badge = '<span class="badge b-%s">%s</span>' % (cls, label) if cls else ''
            out.append('<tr class="%s" data-f="%s"><td class="cnum num">%d</td>'
                       '<td class="topic">%s%s</td><td class="cnum num">%d</td>'
                       '<td class="link">%s</td></tr>'
                       % (cls, cls, no, html.escape(topic), badge, hrs, html.escape(link)))
        out.append('</tbody></table></div></section>')
    return '\n'.join(out)


def main():
    parts = ['<title>Grade 10 &amp; 11 Maths Annual Plans</title>',
             '<link rel="preconnect" href="https://fonts.googleapis.com">',
             '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
             '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?'
             'family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400'
             '&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600'
             '&display=swap">',
             style_block()]

    # ---- header ----
    parts.append('''
<div class="wrap">
<header class="mast">
  <p class="eyebrow">Uzbekistan national programme · Cambridge IGCSE Extended and AS &amp; A Level</p>
  <h1>Annual plans — grades 10 and 11</h1>
  <p class="lede">The national calendar-thematic plan kept lesson for lesson, with every lesson
  mapped to its Cambridge sub-unit and the flexible lessons filled with the Cambridge content the
  national programme does not reach. <a href="plans.html">Grade 8 plans &rarr;</a></p>
  <div class="streams">''')
    for _, _, tab, total, name, load, qs, colour in VIEWS:
        parts.append('''    <div class="stream" style="--sc:%s">
      <div class="lbl">%s</div>
      <div class="ttl">%s</div>
      <div class="fig"><b>%s</b> · <b>%d h</b> / year · %s</div>
    </div>''' % (colour, name.split(',')[1].strip(), name.split(',')[0],
                 load, total, ' · '.join(str(q) for q in qs)))
    parts.append('  </div>\n</header>\n</div>\n')

    # ---- tabs ----
    parts.append('<nav class="tabbar"><div class="tabs" role="tablist">')
    parts.append('  <button class="tab" role="tab" aria-selected="true" '
                 'aria-controls="v-over" id="t-over">How the plans fit together</button>')
    for key, _, tab, total, _, _, _, _ in VIEWS:
        parts.append('  <button class="tab" role="tab" aria-selected="false" '
                     'aria-controls="v-%s" id="t-%s">%s · %d h</button>' % (key, key, tab, total))
    parts.append('  <button class="tab" role="tab" aria-selected="false" '
                 'aria-controls="v-red" id="t-red">Red days</button>')
    parts.append('</div></nav>\n\n<div class="wrap">')

    # ---- overview ----
    counts = {}
    for key, md, _, _, _, _, _, _ in VIEWS:
        rows = read_plan(md)
        counts[key] = sum(1 for r in rows if r[5] == 'CAM')
    parts.append('''
<section class="view prose" id="v-over" role="tabpanel" aria-labelledby="t-over">
  <div class="viewhead">
    <h2>By grade 10 the national programme has caught Cambridge up</h2>
    <p>In grade 8 the national programme is the harder of the two, so Cambridge Stage 9 had to be
    folded into it. By grades 10 and 11 that has reversed in scope but not in level: the national
    plan is already a full AS-and-A-Level-shaped course — functions, exponentials and logarithms,
    trigonometric equations, then a complete year of differential and integral calculus followed by
    combinatorics, statistics and probability.</p>
    <p>So no hours are added. Every national lesson is mapped to the Cambridge sub-unit it answers
    to, and the lessons the national plan leaves open are filled with what Cambridge has and the
    national programme does not.</p>
  </div>
  <div class="cmp">
    <div class="card" style="--cc:var(--uz)">
      <h4>Grade 10 · %d + %d Cambridge inserts</h4>
      <p><strong>Algebra</strong> — quadratics and the discriminant, composite and inverse
      functions, radians and circular measure, arithmetic and geometric progressions, the binomial
      expansion.</p>
      <p><strong>Geometry</strong> — symmetry in three dimensions, the sine and cosine rules,
      trigonometry in three dimensions, bearings, coordinate geometry of the line and the circle,
      vectors and transformations.</p>
    </div>
    <div class="card" style="--cc:var(--cam)">
      <h4>Grade 11 · %d + %d Cambridge inserts</h4>
      <p><strong>Algebra and calculus</strong> — the modulus function, the trapezium rule,
      integration by parts and by partial fractions, complex numbers and the Argand diagram,
      differential equations.</p>
      <p><strong>Geometry</strong> — the vector equation of a line in space, upper and lower
      bounds, units of volume and capacity, arc and sector applied to cones, area and volume scale
      factors, optimisation of a container.</p>
    </div>
  </div>
  <div class="viewhead" style="margin-top:26px">
    <h2>Reference editions</h2>
    <p><code>P1</code> Cambridge International AS &amp; A Level Mathematics — Pure Mathematics 1 ·
    <code>P2</code> Pure Mathematics 2 ·
    <code>IGX</code> Cambridge IGCSE Mathematics Extended, units 4–6.</p>
    <p>Every quarter still totals 27 / 21 / 30 / 24 hours for algebra and 18 / 14 / 20 / 16 for
    geometry, and every national topic keeps its exact hour count — the generator asserts both, so
    a plan cannot drift out of compliance by accident.</p>
  </div>
</section>''' % (counts['alg10'], counts['geo10'], counts['alg11'], counts['geo11']))

    # ---- plan views ----
    for key, md, tab, total, name, load, qs, _ in VIEWS:
        rows = read_plan(md)
        assert len(rows) == total, '%s has %d rows, expected %d' % (md, len(rows), total)
        parts.append('''
<section class="view" id="v-%s" role="tabpanel" aria-labelledby="t-%s" hidden>
  <div class="viewhead">
    <h2>%s</h2>
    <p>%s · %d hours · quarters %s</p>
  </div>
  <div class="filters" data-for="v-%s">
    <span class="flabel">Show</span>
    <button class="chip" aria-pressed="true" data-filter="all">All %d lessons</button>
    <button class="chip" aria-pressed="false" data-filter="cam">Cambridge inserts</button>
    <button class="chip" aria-pressed="false" data-filter="test">Assessments</button>
    <button class="chip" aria-pressed="false" data-filter="reserve">Reserve lessons</button>
  </div>
%s
</section>''' % (key, key, html.escape(name), load, total,
                 ' · '.join(str(q) for q in qs), key, total, table(rows, qs)))

    # ---- red days ----
    parts.append(RED)
    parts.append('\n</div>\n')
    parts.append(SCRIPT)

    with open(OUT, 'w', encoding='utf-8') as fh:
        fh.write('\n'.join(parts) + '\n')
    print('wrote', os.path.basename(OUT),
          '| views:', ', '.join(v[2] for v in VIEWS),
          '| Cambridge inserts:', sum(counts.values()))


RED = '''
<section class="view prose" id="v-red" role="tabpanel" aria-labelledby="t-red" hidden>
  <div class="viewhead">
    <h2>Red days and how the plan absorbs them</h2>
    <p>Calculated for the 2026–2027 academic year. Four to six public holidays fall on a working
    day; for a subject taught three hours a week that costs two or three lessons, for two hours a
    week one or two.</p>
  </div>
  <div class="tablewrap"><table><thead><tr><th>Date</th><th>Holiday</th>
  <th class="cnum">Weekday</th><th>Effect on the plan</th></tr></thead><tbody>
  <tr><td class="topic">1 September</td><td class="topic">Independence Day</td><td class="cnum num">Tue</td><td class="link">Falls before the first school day — no lesson lost.</td></tr>
  <tr><td class="topic">1 October</td><td class="topic">Day of Teachers and Mentors</td><td class="cnum num">Thu</td><td class="link">1 school day lost — Quarter I.</td></tr>
  <tr><td class="topic">8 December</td><td class="topic">Constitution Day</td><td class="cnum num">Tue</td><td class="link">1 school day lost — Quarter II.</td></tr>
  <tr><td class="topic">1 January</td><td class="topic">New Year</td><td class="cnum num">Fri</td><td class="link">Inside the winter holiday — no lesson lost.</td></tr>
  <tr><td class="topic">14 January</td><td class="topic">Day of Defenders of the Motherland</td><td class="cnum num">Thu</td><td class="link">1 school day lost — Quarter III.</td></tr>
  <tr><td class="topic">8 March</td><td class="topic">International Women’s Day</td><td class="cnum num">Mon</td><td class="link">1 school day lost — Quarter III.</td></tr>
  <tr><td class="topic">21 March</td><td class="topic">Navruz</td><td class="cnum num">Sun</td><td class="link">Normally inside the spring holiday; the day in lieu may cost 1 school day.</td></tr>
  <tr><td class="topic">Ramazon Hayit</td><td class="topic">Eid al-Fitr (movable)</td><td class="cnum num">—</td><td class="link">Approx. late March 2027; usually adjoins the spring holiday. Confirm annually.</td></tr>
  <tr><td class="topic">9 May</td><td class="topic">Day of Remembrance and Honour</td><td class="cnum num">Sun</td><td class="link">Day in lieu on Monday 10 May — 1 school day lost, Quarter IV.</td></tr>
  <tr><td class="topic">Qurbon Hayit</td><td class="topic">Eid al-Adha (movable)</td><td class="cnum num">—</td><td class="link">Approx. late May 2027; may fall after the last lesson. Confirm annually.</td></tr>
  </tbody></table></div>
  <div class="viewhead" style="margin-top:26px">
    <h2>Absorption protocol</h2>
    <ol>
      <li>At the start of each quarter, count the red days falling on this class’s mathematics days.</li>
      <li>Remove exactly that many <b>Reserve</b> lessons from the same quarter, working from the end backwards.</li>
      <li>Never remove an assessment, and never remove a lesson that introduces new content.</li>
      <li>If a quarter has too few reserve lessons, merge two consecutive lessons with the same title —
      the national plan repeats topic titles across two or three lessons for exactly this purpose.</li>
      <li>Record every adjustment so the quarter still shows the official hour total.</li>
    </ol>
    <p>School holidays (autumn ~1–7 November, winter ~30 December – 10 January, spring ~20–30 March)
    are already excluded from the quarter totals and need no adjustment.</p>
  </div>
</section>'''

SCRIPT = '''<script>
(function(){
  var tabs=[].slice.call(document.querySelectorAll('.tab'));
  tabs.forEach(function(t){
    t.addEventListener('click',function(){
      tabs.forEach(function(o){
        var on=o===t;
        o.setAttribute('aria-selected',on?'true':'false');
        document.getElementById(o.getAttribute('aria-controls')).hidden=!on;
      });
      window.scrollTo({top:0,behavior:'smooth'});
    });
  });
  [].forEach.call(document.querySelectorAll('.filters'),function(bar){
    var view=document.getElementById(bar.getAttribute('data-for'));
    var chips=[].slice.call(bar.querySelectorAll('.chip'));
    chips.forEach(function(c){
      c.addEventListener('click',function(){
        var f=c.getAttribute('data-filter');
        chips.forEach(function(o){o.setAttribute('aria-pressed',o===c?'true':'false')});
        [].forEach.call(view.querySelectorAll('tbody tr'),function(r){
          r.hidden = (f!=='all') && (' '+r.getAttribute('data-f')+' ').indexOf(' '+f+' ')<0;
        });
        [].forEach.call(view.querySelectorAll('.quarter'),function(q){
          q.hidden = !q.querySelector('tbody tr:not([hidden])');
        });
      });
    });
  });
})();
</script>'''

if __name__ == '__main__':
    main()
