#!/usr/bin/env python3
"""Build the English-only version of the 9th grade entrance exam paper."""
import html
import os

HERE = os.path.dirname(os.path.abspath(__file__))

# ---------------------------------------------------------------- questions --

MATH = [
    (1, 'Simplify the fraction: <span class="m">'
        '<span class="frac"><span class="num"><i>x</i><sup>2</sup> &minus; 6<i>x</i> + 9</span>'
        '<span class="den"><i>x</i> &minus; 3</span></span></span>',
     ['<i>x</i> + 3', '<i>x</i> &minus; 3', '(<i>x</i> &minus; 3)<sup>2</sup>',
      '<i>x</i> &minus; 9', '3 &minus; <i>x</i>']),

    (2, 'Perform the addition: <span class="m">'
        '<span class="frac"><span class="num">1</span><span class="den"><i>x</i></span></span>'
        ' + '
        '<span class="frac"><span class="num">1</span><span class="den">2<i>x</i></span></span></span>',
     ['2/(3<i>x</i>)', '1/(3<i>x</i>)', '3/(2<i>x</i>)', '1/(2<i>x</i><sup>2</sup>)', '2/<i>x</i>']),

    (3, 'The graph of the function <i>y</i> = <i>k</i>/<i>x</i> passes through the point '
        '(2; 6). Find <i>k</i>.',
     ['3', '8', '4', '12', '6']),

    (4, 'Calculate: <span class="m">'
        '<span class="frac"><span class="num"><span class="sqrt"><span>48</span></span></span>'
        '<span class="den"><span class="sqrt"><span>3</span></span></span></span></span>',
     ['16', '4', '2<span class="sqrt"><span>3</span></span>', '8', '<span class="sqrt"><span>45</span></span>']),

    (5, 'Calculate: 27<sup>2/3</sup>',
     ['18', '3', '81', '6', '9']),

    (6, 'Solve the inequality: 3<i>x</i> &minus; 7 &gt; 5',
     ['<i>x</i> &gt; 4', '<i>x</i> &lt; 4', '<i>x</i> &gt; &minus;4',
      '<i>x</i> &ge; 4', '<i>x</i> &gt; 12']),

    (7, 'Solve the system of inequalities: <i>x</i> &gt; 2 and <i>x</i> &le; 6. '
        'Write the answer as a numerical interval.',
     ['(2; 6)', '[2; 6]', '(2; 6]', '[2; 6)', '(6; +&infin;)']),

    (8, 'Solve the equation: |<i>x</i> &minus; 3| = 5',
     ['<i>x</i> = 8', '<i>x</i> = &minus;2',
      '<i>x</i> = 8 and <i>x</i> = 2',
      '<i>x</i> = 8 and <i>x</i> = &minus;2',
      '<i>x</i> = &minus;8 and <i>x</i> = 2']),

    (9, 'Solve the quadratic equation:<br><i>x</i><sup>2</sup> &minus; 7<i>x</i> + 12 = 0',
     ['<i>x</i> = 3 and <i>x</i> = 4', '<i>x</i> = &minus;3 and <i>x</i> = &minus;4',
      '<i>x</i> = 2 and <i>x</i> = 6', '<i>x</i> = 1 and <i>x</i> = 12',
      '<i>x</i> = &minus;2 and <i>x</i> = &minus;6']),

    (10, 'Find the discriminant of the equation <i>x</i><sup>2</sup> + 4<i>x</i> + 5 = 0 '
         'and determine the number of roots.',
     ['<i>D</i> = 4, two roots', '<i>D</i> = 0, one root', '<i>D</i> = &minus;4, no roots',
      '<i>D</i> = 36, two roots', '<i>D</i> = &minus;4, one root']),

    (11, "Using Vieta's theorem, find the sum and the product of the roots of the equation "
         "<i>x</i><sup>2</sup> &minus; 5<i>x</i> + 6 = 0.",
     ['sum 5, product 6', 'sum &minus;5, product 6', 'sum 5, product &minus;6',
      'sum 6, product 5', 'sum &minus;5, product &minus;6']),

    (12, 'Find the sum of the interior angles of a convex pentagon.',
     ['360&deg;', '540&deg;', '720&deg;', '450&deg;', '500&deg;']),

    (13, 'The bases of a trapezoid are 8 cm and 14 cm. Find the midline of the trapezoid.',
     ['10 cm', '12 cm', '22 cm', '11 cm', '6 cm']),

    (14, 'The legs of a right triangle are 9 cm and 12 cm. Find the hypotenuse '
         '(Pythagorean theorem).',
     ['13 cm', '21 cm', '16 cm', '14 cm', '15 cm']),

    (15, 'Find the distance between the points <i>A</i>(1; 2) and <i>B</i>(4; 6).',
     ['<span class="sqrt"><span>7</span></span>', '5', '7', '<span class="sqrt"><span>5</span></span>', '25']),

    (16, 'The diagonals of a rhombus are 10 cm and 12 cm. Find the area of the rhombus.',
     ['120 cm&sup2;', '30 cm&sup2;', '55 cm&sup2;', '60 cm&sup2;', '44 cm&sup2;']),

    (17, 'Continue the sequence: 2, 5, 11, 23, 47, &hellip;',
     ['94', '95', '96', '93', '99']),

    (18, 'On an island, knights always tell the truth and liars always lie. You meet '
         'A and B. A says: "At least one of us is a liar". Who are they?',
     ['Both are knights', 'Both are liars', 'A is a knight, B is a liar',
      'A is a liar, B is a knight', 'It cannot be determined']),

    (19, 'A does a job in 12 days and B does it in 18 days. They worked together for '
         '4 days, then A left. In how many days will B finish the remaining work?',
     ['6', '8', '9', '10', '5']),

    (20, 'How many three-digit numbers can be formed from the digits 1, 2, 3, 4, 5 if '
         'the digits are not repeated?',
     ['120', '125', '60', '15', '10']),
]

READING_TITLE = 'The Mystery of Loch Ness'
READING = [
    'Loch Ness is a large, deep lake in the north of Scotland. For hundreds of years, '
    'people have told stories about a huge creature that supposedly lives in its dark '
    'waters. The creature is known all over the world as the Loch Ness Monster, or simply '
    '"Nessie". The most famous photograph of Nessie was taken in 1934 and appears to show '
    'a long neck rising out of the water. For many years, this picture convinced people '
    'that the monster was real.',
    'However, in 1994 it was revealed that the famous photograph was a hoax &mdash; the '
    '"monster" was actually a small model attached to a toy submarine. Since then, '
    'scientists have searched the lake many times using modern equipment, but they have '
    'never found any real evidence of a large animal. Some visitors are disappointed by '
    'this, yet thousands of tourists still travel to Loch Ness every year. Whether or not '
    'Nessie exists, the legend has certainly made this quiet Scottish lake famous around '
    'the world.',
]

ENGLISH = [
    (21, 'What is the text mainly about?',
     ['How to travel to Scotland', 'The legend of a creature in a Scottish lake',
      'The history of photography', 'How scientists use submarines',
      'The wildlife of Scotland']),
    (22, 'What did the famous 1934 photograph seem to show?',
     ['a toy submarine', 'a group of tourists', 'a long neck rising from the water',
      'a scientist with equipment', 'a small model of a lake']),
    (23, 'What was revealed about the photograph in 1994?',
     ['It was taken by a scientist', 'It was actually a hoax', 'It showed a real monster',
      'It was lost forever', 'It was drawn by an artist']),
    (24, 'The word "hoax" in the text is closest in meaning to:',
     ['a true story', 'a scientific discovery', 'a trick to deceive people',
      'an old photograph', 'a deep lake']),
    (25, "Which statement best expresses the writer's conclusion?",
     ['Scientists have proved that Nessie is real', 'Nobody visits Loch Ness any more',
      'The legend has made the lake famous, whether or not Nessie is real',
      'The photograph was never explained',
      'Tourists are no longer interested in the lake']),
]

VOCAB = [
    (26, "I've had a terrible ______ all morning; I think I need to lie down in a dark room.",
     ['stomach', 'headache', 'toothache', 'temperature', 'cough']),
    (27, 'You should ______ this new phone with the old one before you decide which to buy.',
     ['compare', 'prepare', 'repair', 'appear', 'declare']),
    (28, 'Excuse me, could you tell me the way to the station? &mdash; Yes, go straight on '
         'and ______ left at the traffic lights.',
     ['turn', 'return', 'arrive', 'cross over', 'drive past']),
    (29, 'Bees are very important because they ______ flowers, which helps plants to '
         'produce fruit.',
     ['pollute', 'pollinate', 'populate', 'polish', 'promote']),
    (30, '"The scientists made an important discovery." The word "discovery" means '
         'something that has been:',
     ['hidden forever', 'found out for the first time', 'thrown away', 'sold in a shop',
      'broken by accident']),
    (31, 'A ______ is a piece of writing that gives an opinion about a book or film.',
     ['recipe', 'review', 'reply', 'receipt', 'reminder']),
    (32, 'The bridge was so ______ that it took engineers ten years to build it.',
     ['ordinary', 'simple', 'complex', 'cheap', 'tiny']),
]

GRAMMAR = [
    (33, 'This is the ______ building in the whole city.',
     ['tall', 'taller', 'tallest', 'more tall', 'most tallest']),
    (34, 'I ______ TV when the electricity suddenly went off.',
     ['watch', 'watched', 'was watching', 'am watching', 'have watched']),
    (35, 'If it rains tomorrow, we ______ at home.',
     ['stay', 'stayed', 'will stay', 'would stay', 'have stayed']),
    (36, 'Cars are ______ expensive than bicycles.',
     ['much', 'more', 'the most', 'as', 'many']),
    (37, 'The old castle ______ built more than five hundred years ago.',
     ['is', 'was', 'has', 'did', 'were']),
    (38, 'Look at those dark clouds &mdash; I think it ______ rain.',
     ['is going to', 'goes to', 'will to', 'going to', 'is raining to']),
    (39, 'She isn\'t here now. She ______ have gone home already.',
     ['must to', 'might', 'should to', 'can to', 'need']),
    (40, 'You ______ smoke in the museum; it is strictly forbidden.',
     ['must', 'have to', "mustn't", "don't have to", 'needn\'t']),
]

LETTERS = ['A', 'B', 'C', 'D', 'E']

# ------------------------------------------------------------------- render --


def card(num, stem, opts):
    lis = ''.join(
        f'<li><span class="lt">{LETTERS[i]})</span> <span class="op">{o}</span></li>'
        for i, o in enumerate(opts))
    return (f'<div class="q"><p class="stem"><b>{num}.</b> {stem}</p>'
            f'<ol class="opts">{lis}</ol></div>')


def rows(items):
    out = []
    for i in range(0, len(items), 2):
        pair = items[i:i + 2]
        cards = ''.join(card(*q) for q in pair)
        if len(pair) == 1:
            cards += '<div class="q ghost"></div>'
        out.append(f'<div class="row">{cards}</div>')
    return '\n'.join(out)


def header(subtitle):
    return f'''<div class="head">
  <img class="logo" src="logo.png" alt="Ellipse International School">
  <div class="ht">
    <div class="school">ELLIPSE INTERNATIONAL SCHOOL</div>
    <div class="sub">{subtitle}</div>
  </div>
</div>'''


def sample_table():
    def circ(state):
        if state == 'fill':
            return '<span class="bub filled"></span>'
        if state == 'x':
            return '<span class="bub cross">&#10005;</span>'
        return '<span class="bub"></span>'

    head = ''.join(f'<td>{circ("open")[:-7]}<span class="lbl">{L}</span></span></td>'
                   for L in LETTERS)
    # header row: lettered bubbles
    head = ''.join(f'<td><span class="bub lettered">{L}</span></td>' for L in LETTERS)
    body = []
    for marks, verdict in [
            (['open'] * 5, 'correct'),
            (['open'] * 5, 'wrong'),
            (['open'] * 5, 'wrong'),
            (['open'] * 5, 'wrong'),
            (['fill', 'open', 'open', 'open', 'open'], 'correct')]:
        example = 'fill' if verdict == 'correct' else 'x'
        tds = ''.join(f'<td>{circ(m)}</td>' for m in marks)
        body.append(f'<tr>{tds}<td>{circ(example)}</td>'
                    f'<td class="verdict">{verdict}</td></tr>')
    return f'''<table class="sheet">
  <tr class="bar"><td colspan="7">ENGLISH (A, B, C, D, E)</td></tr>
  <tr class="hdr">{head}<td>{circ("fill")}</td><td></td></tr>
  {''.join(body)}
</table>'''


COVER = f'''<section class="cover">
  <div class="cover-head">
    <img class="seal" src="seal.png" alt="">
    <div>
      <h1>ATTENTION, EXAM PARTICIPANTS!</h1>
      <div class="h1sub">ENTRANCE EXAMINATION &middot; GRADE 9</div>
    </div>
  </div>
  <hr class="rule">
  <table class="idtable">
    <tr><td class="lab">SURNAME</td><td class="fill" colspan="2"></td></tr>
    <tr><td class="lab">NAME</td><td class="fill" colspan="2"></td></tr>
    <tr><td class="lab">GRADE</td><td class="gradecell">9</td><td class="fill"></td></tr>
  </table>

  <div class="panel">
    <div class="panel-title">INSTRUCTIONS</div>
    <ol class="ins">
      <li>Fill in your <b>surname and name</b> on the answer sheet.</li>
      <li><b>40 questions</b> are given, and you have <b>80 minutes</b> to complete them.</li>
      <li>Choose <b>only one correct answer</b> for each question and
          <b>shade the circle completely with an ordinary pencil</b>.
          A partial mark or a mark outside the circle is not counted.</li>
      <li>Erase mistakes with a <b>soft eraser</b>, without damaging the paper.</li>
      <li><b>Answer the easy questions first</b> and come back to the difficult ones later.</li>
    </ol>
    <div class="note"><b>NOTE!</b> This paper contains the Mathematics and English
      sections only.</div>
  </div>

  <div class="section-caption">GRADING SYSTEM</div>
  <div class="scores">
    <div class="score"><div class="s1">MATHEMATICS</div><div class="s2">Questions 1&ndash;20</div>
      <div class="s3">2.5 points</div></div>
    <div class="score"><div class="s1">ENGLISH</div><div class="s2">Questions 21&ndash;40</div>
      <div class="s3">1.5 points</div></div>
  </div>

  <div class="section-caption">SAMPLE OF FILLING IN</div>
  <div class="sample">
    <div class="sample-title">HOW TO MARK YOUR ANSWER SHEET</div>
    {sample_table()}
  </div>

  <div class="goodluck">GOOD LUCK!</div>
</section>'''

MATH_SECTION = f'''<section class="page">
  {header('Mathematics &nbsp;&#9474;&nbsp; Grade 9')}
  {rows(MATH)}
</section>'''

READING_HTML = ''.join(f'<p>{p}</p>' for p in READING)

ENG_SECTION = f'''<section class="page">
  {header('English &nbsp;&#9474;&nbsp; Grade 9')}
  <p class="part">Part 1. READING &nbsp;&mdash;&nbsp; Read the text and answer questions 21&ndash;25.</p>
  <div class="passage"><h3>{READING_TITLE}</h3>{READING_HTML}</div>
  {rows(ENGLISH)}
  <p class="part">Part 2. VOCABULARY &nbsp;&mdash;&nbsp; Questions 26&ndash;32. Choose the best option.</p>
  {rows(VOCAB)}
  <p class="part">Part 3. GRAMMAR &nbsp;&mdash;&nbsp; Questions 33&ndash;40. Choose the correct answer.</p>
  {rows(GRAMMAR)}
</section>'''

CSS = '''
@font-face { font-family: Poppins; font-weight: 400;
  src: url(fonts/pxiEyp8kv8JHgFVrFJA.ttf) format('truetype'); }
@font-face { font-family: Poppins; font-weight: 500;
  src: url(fonts/pxiByp8kv8JHgFVrLGT9V1s.ttf) format('truetype'); }
@font-face { font-family: Poppins; font-weight: 600;
  src: url(fonts/pxiByp8kv8JHgFVrLEj6V1s.ttf) format('truetype'); }
@font-face { font-family: Poppins; font-weight: 700;
  src: url(fonts/pxiByp8kv8JHgFVrLCz7V1s.ttf) format('truetype'); }
@font-face { font-family: Carlito; font-weight: 400;
  src: url(fonts/3Jn9SDPw3m-pk039PDA.ttf) format('truetype'); }
@font-face { font-family: Carlito; font-weight: 700;
  src: url(fonts/3Jn4SDPw3m-pk039BIykaX0.ttf) format('truetype'); }
@font-face { font-family: Carlito; font-style: italic; font-weight: 400;
  src: url(fonts/3Jn_SDPw3m-pk039DDKBSQ.ttf) format('truetype'); }
@font-face { font-family: Cambo; font-weight: 400;
  src: url(fonts/IFSqHeNEk8FJk416.ttf) format('truetype'); }

@page { size: A4; margin: 13mm 12mm 12mm 12mm; }

* { box-sizing: border-box; }
body { font-family: Carlito, "Liberation Sans", sans-serif; font-size: 10.5pt;
       color: #000; margin: 0; line-height: 1.32; }

section.page { break-before: page; }
section.cover { break-after: page; }

/* ------------------------------------------------------------- headers --- */
.head { display: flex; align-items: center; gap: 14px; margin-bottom: 6px; }
.head .logo { width: 116px; height: auto; }
.head .ht { flex: 1; text-align: center; padding-right: 100px; }
.school { font-family: Poppins; font-weight: 700; font-size: 17pt; letter-spacing: .2px; }
.sub { font-family: Poppins; font-weight: 400; font-size: 12pt; margin-top: 2px; }
.head + * { margin-top: 0; }
.head::after { content: ""; }
section.page .head { border-bottom: none; }
section.page > .head { padding-bottom: 6px; }
section.page > .head { border-bottom: 1.6px solid #1f7a4d; margin-bottom: 16px; }

/* ------------------------------------------------------------ question --- */
.row { display: flex; gap: 14px; break-inside: avoid; margin-bottom: 12px; }
.q { flex: 1 1 0; width: 50%; border: 1px solid #000; padding: 8px 10px 9px;
     break-inside: avoid; }
.q.ghost { border: none; }
.stem { margin: 0 0 5px; font-weight: 700; }
.stem b { font-weight: 700; }
ol.opts { list-style: none; margin: 0; padding: 0 0 0 6px; }
ol.opts li { margin: 1.5px 0; }
.lt { font-weight: 700; display: inline-block; min-width: 15px; }
.op { }

.part { font-weight: 700; text-decoration: underline; margin: 14px 0 8px;
        break-after: avoid; }
.passage { border: 1px solid #000; padding: 9px 11px; margin-bottom: 14px;
           break-inside: avoid; }
.passage h3 { font-size: 11pt; margin: 0 0 5px; }
.passage p { margin: 0 0 6px; }
.passage p:last-child { margin-bottom: 0; }

/* --------------------------------------------------------------- maths --- */
.m { font-family: Cambo, "Liberation Serif", serif; }
.frac { display: inline-flex; flex-direction: column; vertical-align: middle;
        text-align: center; margin: 0 2px; font-style: italic; }
.frac .num { border-bottom: 1.1px solid #000; padding: 0 4px 1px; }
.frac .den { padding: 1px 4px 0; }
.sqrt { white-space: nowrap; display: inline-block; }
.sqrt::before { content: "\\221A"; display: inline-block;
                transform: scaleY(1.15); transform-origin: bottom; }
.sqrt > span { border-top: 1px solid #000; padding: 0 1px 0 0; margin-left: -.5px;
               display: inline-block; }
sup { font-size: .72em; }

/* --------------------------------------------------------------- cover --- */
.cover-head { display: flex; align-items: center; gap: 20px; margin-bottom: 10px; }
.seal { width: 82px; height: 82px; }
.cover h1 { font-family: Poppins; font-weight: 700; font-size: 21pt; margin: 0;
            letter-spacing: -.2px; }
.h1sub { font-family: Poppins; font-weight: 500; font-size: 11pt; letter-spacing: 2.4px;
         margin-top: 3px; }
hr.rule { border: none; border-top: 3px solid #000; margin: 4px 0 14px; }

.idtable { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
.idtable td { border: 1px solid #000; padding: 7px 10px; height: 30px; }
.idtable .lab { font-family: Poppins; font-weight: 600; font-size: 9.5pt; width: 150px; }
.idtable .gradecell { font-family: Poppins; font-weight: 600; font-size: 13pt;
         text-align: center; width: 58px; }

.panel { background: #f2f2f2; padding: 14px 16px 16px; margin-bottom: 16px; }
.panel-title { background: #111; color: #fff; font-family: Poppins; font-weight: 600;
               font-size: 10pt; letter-spacing: 3px; text-align: center;
               padding: 4px 0; margin-bottom: 10px; }
ol.ins { margin: 0; padding-left: 20px; }
ol.ins li { margin-bottom: 6px; }
.note { background: #111; color: #fff; padding: 7px 10px; margin-top: 10px;
        font-weight: 700; }

.section-caption { font-family: Poppins; font-weight: 600; font-size: 10.5pt;
                   letter-spacing: 2px; text-align: center; margin: 0 0 8px; }
.scores { display: flex; gap: 14px; margin-bottom: 18px; }
.score { flex: 1; background: #111; color: #fff; text-align: center; padding: 12px 6px 14px; }
.s1 { font-family: Poppins; font-weight: 600; font-size: 12pt; letter-spacing: 2px; }
.s2 { font-size: 9.5pt; opacity: .85; margin-top: 1px; }
.s3 { font-family: Cambo, serif; font-size: 17pt; margin-top: 6px; }

.sample { background: #f2f2f2; padding: 12px 14px 14px; text-align: center;
          margin-bottom: 18px; }
.sample-title { font-family: Poppins; font-weight: 600; font-size: 10pt;
                margin-bottom: 8px; }
table.sheet { border-collapse: collapse; margin: 0 auto; background: #fff;
              border: 1.4px solid #000; }
table.sheet td { border: 1px solid #000; width: 52px; height: 26px; text-align: center;
                 vertical-align: middle; }
table.sheet tr.bar td { background: #111; color: #fff; font-family: Poppins;
                        font-weight: 600; font-size: 9.5pt; letter-spacing: .5px;
                        height: 22px; border-color: #111; }
table.sheet td.verdict { width: 82px; font-size: 9pt; }
.bub { display: inline-block; width: 15px; height: 15px; border: 1.2px solid #000;
       border-radius: 50%; vertical-align: middle; line-height: 13px; font-size: 8.5pt;
       font-family: Poppins; font-weight: 500; }
.bub.filled { background: #000; }
.bub.cross { border: none; font-size: 15pt; line-height: 15px; font-weight: 400; }

.goodluck { background: #111; color: #fff; font-family: Poppins; font-weight: 600;
            font-size: 13pt; letter-spacing: 6px; text-align: center; padding: 9px 0; }
'''

DOC = f'''<!doctype html>
<html><head><meta charset="utf-8">
<title>Ellipse International School &mdash; Grade 9 Entrance Exam (English)</title>
<style>{CSS}</style>
</head><body>
{COVER}
{MATH_SECTION}
{ENG_SECTION}
</body></html>'''

with open(os.path.join(HERE, 'exam.html'), 'w', encoding='utf-8') as fh:
    fh.write(DOC)
print('wrote exam.html')
