# -*- coding: utf-8 -*-
import base64, html, os

LOGO = open('logo_b64.txt').read().strip()

CSS = """
@page { size: A4; margin: 14mm 13mm 12mm 13mm; }
* { box-sizing: border-box; }
body { margin:0; font-family:"Liberation Sans","DejaVu Sans",Arial,sans-serif;
       font-size:10.4pt; color:#111; line-height:1.35; }
.page { page-break-after: always; }
.page:last-child { page-break-after: auto; }

/* ---------- header ---------- */
.hdr { display:flex; align-items:center; gap:14px; }
.hdr img { width:150px; }
.hdr .t { flex:1; text-align:right; }
.hdr .t h1 { margin:0; font-size:16.5pt; font-weight:bold; letter-spacing:.2px; }
.hdr .t .sub { margin-top:3px; font-size:12.5pt; color:#222; }
.hdr .t .sub .bar { color:#8a8a8a; margin:0 8px; }
.rule { border-bottom:2.2px solid #0d6b3f; margin:9px 0 16px; }

/* ---------- question grid ---------- */
.grid { display:grid; grid-template-columns:1fr 1fr; gap:11px 14px; }
.q { border:1px solid #111; padding:8px 10px 9px; break-inside:avoid; }
.q .stem { font-weight:bold; margin:0 0 5px; }
.q ol { list-style:none; margin:0; padding:0; }
.q ol li { margin:1.5px 0; display:flex; align-items:center; gap:4px; }
.q ol li b { flex:0 0 auto; min-width:16px; }
.q ol li .ot { flex:1 1 auto; }
sup { font-size:.72em; vertical-align:super; }
sub { font-size:.72em; vertical-align:sub; }
.frac { display:inline-block; vertical-align:middle; text-align:center; margin:0 3px;
         line-height:1.15; }
.frac .n { display:block; border-bottom:1px solid #111; padding:0 4px; }
.frac .d { display:block; padding:0 4px; }

/* ---------- English section ---------- */
.parthead { font-weight:bold; text-decoration:underline; margin:0 0 8px; font-size:11pt; }
.passage { border:1px solid #111; padding:9px 11px; margin-bottom:14px; }
.passage h3 { margin:0 0 6px; font-size:10.8pt; }
.passage p { margin:0 0 7px; text-align:left; }
.passage p:last-child { margin-bottom:0; }
.gap { height:12px; }

/* ---------- cover ---------- */
.cover-hdr { display:flex; align-items:center; gap:18px; }
.cover-hdr img { width:150px; }
.cover-hdr h1 { margin:0; font-size:19pt; font-weight:bold; }
.cover-hdr .s { margin-top:4px; font-size:11.5pt; letter-spacing:2.5px; font-weight:bold; color:#333; }
.thick { border-bottom:3px solid #111; margin:14px 0 0; }
table.idbox { width:100%; border-collapse:collapse; margin-bottom:20px; }
table.idbox td { border:1px solid #111; padding:9px 10px; font-size:10.5pt; }
table.idbox td.lbl { font-weight:bold; letter-spacing:1px; width:150px; }
table.idbox td.grade { font-size:15pt; font-weight:bold; text-align:center; width:62px; }
.panel { background:#f0f0f0; padding:12px 14px 14px; }
.panel .cap { background:#111; color:#fff; text-align:center; font-weight:bold;
              letter-spacing:3px; padding:5px 0; font-size:10.5pt; margin-bottom:10px; }
.panel ol { margin:0; padding:0; list-style:none; }
.panel ol li { margin:0 0 8px; padding-left:20px; text-indent:-20px; }
.note { background:#111; color:#fff; padding:9px 11px; font-weight:bold; margin-top:12px; }
.sectitle { text-align:center; font-weight:bold; letter-spacing:3px; font-size:11.5pt;
            margin:20px 0 10px; }
.score { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
.score div { background:#111; color:#fff; text-align:center; padding:11px 6px 13px; }
.score .n { letter-spacing:3px; font-weight:bold; font-size:12.5pt; }
.score .v { font-size:17pt; font-weight:bold; margin-top:6px; }
.sample { text-align:center; }
.sample table.mark { display:inline-table; }
table.mark { border-collapse:collapse; font-size:8.5pt; text-align:center; }
table.mark th { background:#111; color:#fff; padding:3px 6px; font-size:8.5pt; letter-spacing:1px; }
table.mark td { border:1px solid #111; padding:3px 12px; text-align:center; }
table.mark td.res { padding:3px 8px; font-size:8pt; }
.cap2 { text-align:center; font-weight:bold; font-size:10pt; margin-bottom:5px; }
.footer { background:#111; color:#fff; text-align:center; font-weight:bold;
          letter-spacing:4px; padding:9px 0; font-size:12pt; margin-top:24px; }
"""

def header(sub):
    return f"""<div class="hdr"><img src="data:image/png;base64,{LOGO}">
<div class="t"><h1>ELLIPSE INTERNATIONAL SCHOOL</h1>
<div class="sub">{sub}</div></div></div><div class="rule"></div>"""

def q(num, stem, opts):
    lis = "".join(f'<li><b>{L})</b><span class="ot">{t}</span></li>' for L, t in zip("ABCDE", opts))
    return f'<div class="q"><p class="stem">{num}. {stem}</p><ol>{lis}</ol></div>'

S2, S3, S4 = "<sup>2</sup>", "<sup>3</sup>", "<sup>4</sup>"

MATH = [
 ("Calculate: -7 + 12 - (-5)", ["0", "10", "-10", "24", "14"]),
 ("Calculate: (-8) &middot; (-3) - 20 &divide; (-4)", ["19", "44", "29", "-29", "24"]),
 (f"Multiply the monomials: 3x{S2}y &middot; (-4xy{S3})",
  [f"-12x{S3}y{S4}", f"12x{S3}y{S4}", f"-12x{S2}y{S3}", f"-7x{S3}y{S4}", f"-12x{S3}y{S3}"]),
 ("Collect the like terms: 5a - 3b + 2a + 7b",
  ["7a - 4b", "3a + 4b", "7a + 4b", "7a + 10b", "12ab"]),
 (f"Expand the brackets using the formula: (x + 3){S2}",
  [f"x{S2} + 9", f"x{S2} + 3x + 9", f"x{S2} + 9x + 6", f"x{S2} - 6x + 9", f"x{S2} + 6x + 9"]),
 (f"Factorise: x{S2} - 25",
  [f"(x - 5){S2}", f"(x + 5){S2}", "x(x - 25)", "cannot be factorised", "(x - 5)(x + 5)"]),
 (f"Factorise: 6x{S2} + 9x",
  [f"3(2x{S2} + 3)", "3x(2x + 3)", "x(6x + 3)", "3x(2x + 9)", "6x(x + 9)"]),
 (f'Simplify the algebraic fraction: <span class="frac"><span class="n">x{S2} - 4</span><span class="d">x + 2</span></span>',
  ["x + 2", f"x{S2} - 2",
   '<span class="frac"><span class="n">x - 2</span><span class="d">x + 2</span></span>',
   "x - 2", "2 - x"]),
 ("Solve the equation: 5(x - 2) = 2x + 8",
  ["x = 2", "x = 4", "x = 6", "x = -6", "x = 3"]),
 ("The linear function y = 2x - 3 is given. Find the value of y when x = 4.",
  ["5", "8", "11", "-5", "3"]),
 ("Solve the system of equations: x + y = 10, x - y = 4.",
  ["(3; 7)", "(7; 3)", "(6; 4)", "(5; 5)", "(8; 2)"]),
 ("One of two adjacent angles is 68&deg;. Find the other angle.",
  ["22&deg;", "68&deg;", "112&deg;", "122&deg;", "102&deg;"]),
 ("In an isosceles triangle the angle at the vertex is 40&deg;. Find the angle at the base.",
  ["70&deg;", "40&deg;", "140&deg;", "50&deg;", "60&deg;"]),
 ("One of the acute angles of a right-angled triangle is 35&deg;. Find the other acute angle.",
  ["55&deg;", "65&deg;", "45&deg;", "145&deg;", "35&deg;"]),
 ("Two angles of a triangle are 45&deg; and 60&deg;. Find the exterior angle at the third vertex.",
  ["75&deg;", "115&deg;", "105&deg;", "95&deg;", "120&deg;"]),
 ("Two triangles are congruent by two sides and the angle between them. Which criterion of congruence of triangles is this?",
  ["The second criterion", "The first criterion", "The third criterion",
   "The Pythagorean theorem", "The Thales theorem"]),
 ("Continue the sequence: 1, 4, 13, 40, 121, ...",
  ["242", "363", "364", "360", "484"]),
 ("At a meeting each of 6 people shook hands with every other person exactly once. How many handshakes were there in total?",
  ["36", "30", "15", "12", "21"]),
 ("One pipe fills a pool in 6 hours, another one in 3 hours. In how many hours will the pool be filled if both pipes are opened together?",
  ["4.5 h", "9 h", "2 h", "3 h", "1.5 h"]),
 ("There are 8 coins that look identical, but one of them is slightly heavier. What is the smallest number of weighings on a pair of scales that is guaranteed to find it?",
  ["1", "2", "3", "4", "7"]),
]

ENG = [
 ("How often do the Paralympic Games take place?",
  ["Every year", "Every two years", "Every four years", "Every ten years", "Only once"]),
 ("When and where were the first Paralympic Games held?",
  ["In Rome in 1960", "In London in 1948", "In Athens in 1896", "In Rome in 1906", "In Tokyo in 1964"]),
 ("According to the text, how have the Paralympic Games changed since 1960?",
  ["Fewer countries take part now", "They now take place before the Olympics",
   "Many more athletes and countries now take part",
   "They are no longer shown on television", "Only 400 athletes still compete"]),
 ("What does the writer say is more important than physical strength alone?",
  ["money", "fame", "luck", "determination", "equipment"]),
 ("The main message of the second paragraph is that:",
  ["Olympic athletes train harder than Paralympic athletes",
   "Paralympic athletes inspire people and change attitudes to disability",
   "winning medals is the only goal of the Games",
   "accidents always end a sports career",
   "the Games are too expensive to organise"]),
 ("To go snowboarding safely, you should always wear a ______ to protect your head.",
  ["glove", "helmet", "racket", "whistle", "net"]),
 ('"How ______ do you go swimming?" "About three times a week."',
  ["much", "many", "long", "often", "far"]),
 ("She felt really ______ before the exam, but she calmed down once it started.",
  ["bored", "nervous", "relaxed", "delighted", "confident"]),
 ("The concert was absolutely ______ &mdash; everyone stood up and cheered at the end.",
  ["terrible", "awful", "fantastic", "ordinary", "disappointing"]),
 ("A person who plays a musical instrument very well is a skilled ______.",
  ["musician", "music", "musical", "audience", "orchestra"]),
 ('"I get up, have breakfast and brush my teeth." These are examples of a daily ______.',
  ["routine", "root", "reason", "result", "record"]),
 ('"The film was <u>awesome</u>." The underlined word is closest in meaning to:',
  ["very boring", "quite short", "extremely good", "a little strange", "very frightening"]),
 ("My father usually ______ to work by car, but today he is taking the bus.",
  ["go", "goes", "is going", "went", "going"]),
 ("Look! Tom ______ his new bike in the park right now.",
  ["rides", "is riding", "rode", "ride", "has ridden"]),
 ("We had a great time at the party. The music ______ amazing.",
  ["is", "are", "was", "were", "be"]),
 ("I don't like ______ early on cold winter mornings.",
  ["get up", "to getting up", "getting up", "got up", "gets up"]),
 ("How ______ eggs do we need to make the cake?",
  ["much", "many", "more", "a lot", "lots of"]),
 ("They ______ tennis every Sunday when they were young.",
  ["play", "plays", "are playing", "played", "have played"]),
 ("She is the ______ student in our class.",
  ["clever", "cleverer", "more clever", "cleverest", "most cleverest"]),
 ("I usually walk to school, ______ today I came by bus because it was raining.",
  ["because", "so", "but", "and", "or"]),
]

# ---------------- cover ----------------
def circle(fill):
    if fill == "o":
        return '<svg width="11" height="11"><circle cx="5.5" cy="5.5" r="4.6" fill="none" stroke="#111" stroke-width="1"/></svg>'
    if fill == "f":
        return '<svg width="11" height="11"><circle cx="5.5" cy="5.5" r="4.6" fill="#111"/></svg>'
    return '<svg width="11" height="11"><path d="M1.4 1.4 L9.6 9.6 M9.6 1.4 L1.4 9.6" stroke="#111" stroke-width="1.6"/></svg>'

def letter_circle(l):
    return (f'<svg width="13" height="13"><circle cx="6.5" cy="6.5" r="5.6" fill="none" '
            f'stroke="#111" stroke-width="1"/><text x="6.5" y="9.4" font-size="7" '
            f'text-anchor="middle" font-family="Liberation Sans">{l}</text></svg>')

def sample_table():
    rows = [
        (["o","o","o","o","o","f"], "correct"),
        (["o","o","o","o","o","x"], "wrong"),
        (["o","o","o","o","o","x"], "wrong"),
        (["o","o","o","o","o","x"], "wrong"),
        (["f","o","o","o","o","f"], "wrong"),
    ]
    head = "".join(f"<td>{letter_circle(l)}</td>" for l in "ABCDE")
    body = ""
    for cells, res in rows:
        body += "<tr>" + "".join(f"<td>{circle(c)}</td>" for c in cells) + f'<td class="res">{res}</td></tr>'
    return f"""<table class="mark"><tr><th colspan="7">ANSWER OPTIONS (A, B, C, D, E)</th></tr>
<tr>{head}<td></td><td class="res">correct / wrong</td></tr>{body}</table>"""

cover = f"""<div class="page">
<div class="cover-hdr"><img src="data:image/png;base64,{LOGO}">
<div><h1>ATTENTION, EXAM PARTICIPANTS!</h1>
<div class="s">ELLIPSE INTERNATIONAL SCHOOL</div></div></div>
<div class="thick"></div>
<table class="idbox">
<tr><td class="lbl">SURNAME</td><td colspan="2"></td></tr>
<tr><td class="lbl">NAME</td><td colspan="2"></td></tr>
<tr><td class="lbl">GRADE</td><td class="grade">8</td><td></td></tr>
</table>
<div class="panel">
<div class="cap">INSTRUCTIONS</div>
<ol>
<li><b>1.</b>&nbsp; Write your <b>surname and name</b> on the answer sheet.</li>
<li><b>2.</b>&nbsp; <b>80 minutes</b> are given for <b>40 questions</b>.</li>
<li><b>3.</b>&nbsp; For each question choose <b>only one correct answer</b> and <b>fill in the circle
completely with an ordinary pencil</b>. An incomplete mark or a mark outside the circle is not counted.</li>
<li><b>4.</b>&nbsp; Erase mistakes with a <b>soft eraser</b> without damaging the paper.</li>
<li><b>5.</b>&nbsp; <b>Answer the easy questions first</b> and come back to the difficult ones later.</li>
</ol>
<div class="note">NOTE! The paper consists of two sections: Mathematics (questions 1&ndash;20)
and English (questions 21&ndash;40).</div>
</div>
<div class="sectitle">MARKING SCHEME</div>
<div class="score">
<div><div class="n">MATHEMATICS</div><div class="v">2.5 points</div></div>
<div><div class="n">ENGLISH</div><div class="v">1.5 points</div></div>
</div>
<div class="sectitle">SAMPLE OF FILLING IN</div>
<div class="sample">{sample_table()}</div>
<div class="footer">GOOD LUCK!</div>
</div>"""

# ---------------- math pages ----------------
math_pages = ""
for start, n in ((0, 7), (7, 7), (14, 6)):
    chunk = MATH[start:start+n]
    body = "".join(q(start+i+1, s, o) for i, (s, o) in enumerate(chunk))
    math_pages += (f'<div class="page">{header("Mathematics <span class=bar>|</span> Grade 8")}'
                   f'<div class="grid">{body}</div></div>')

# ---------------- english pages ----------------
EH = 'English <span class=bar>|</span> Grade 8'
passage = """<div class="passage"><h3>The Paralympic Games</h3>
<p>The Paralympic Games are a major sports event for athletes with physical disabilities.
They take place every four years, a few weeks after the Olympic Games, and in the same host
city. The first Paralympic Games were held in Rome in 1960, when only 400 athletes from 23
countries took part. Today, thousands of athletes from more than 160 countries compete, and
millions of people watch the events on television.</p>
<p>Paralympic athletes train just as hard as Olympic athletes, sometimes even harder. Many of
them have inspiring stories: some were born with a disability, while others had accidents that
changed their lives. Instead of giving up, they decided to become professional sportspeople.
Their achievements show that determination is more important than physical strength alone.
Because of this, the Paralympic Games are not only about winning medals &mdash; they also
change the way people think about disability.</p></div>"""

def eq(n):  # english question by absolute number 21..40
    s, o = ENG[n-21]
    return q(n, s, o)

p_e1 = (f'<div class="page">{header(EH)}'
        '<div class="parthead">Part 1. READING &mdash; Read the text and answer questions 21&ndash;25.</div>'
        f'{passage}<div class="grid">' + "".join(eq(n) for n in range(21, 26)) + '</div></div>')

p_e2 = (f'<div class="page">{header(EH)}'
        '<div class="parthead">Part 2. VOCABULARY &mdash; Questions 26&ndash;32. Choose the best option.</div>'
        f'<div class="grid">' + "".join(eq(n) for n in range(26, 33)) + '</div></div>')

p_e3 = (f'<div class="page">{header(EH)}'
        '<div class="parthead">Part 3. GRAMMAR &mdash; Questions 33&ndash;40. Choose the correct answer.</div>'
        f'<div class="grid">' + "".join(eq(n) for n in range(33, 41)) + '</div></div>')

doc = f"""<!DOCTYPE html><html><head><meta charset="utf-8">
<title>Ellipse International School &mdash; Grade 8 Exam (English)</title>
<style>{CSS}</style></head><body>
{cover}{math_pages}{p_e1}{p_e2}{p_e3}
</body></html>"""

open('exam_en.html', 'w').write(doc)
print("wrote exam_en.html", len(doc))
