/* Renders a workbook data module to a printable A4 PDF.

     node build-workbook.mjs g11-alg-q1.mjs

   The data module exports { meta, topics }. Each topic carries 45 questions in
   four tiers and an answer for every one; Beyond questions also carry a worked
   solution. The script checks those counts and refuses to print a workbook
   that is short of them.

   Maths is written between $…$ and understands ^ , _ , @f{num}{den} and
   @r{...} for a square root; everything else is literal Unicode. The markers
   lead with @ rather than a backslash because a backslash inside a JavaScript
   string is an escape sequence, and \f would reach this code as a form feed. */
import fs from 'fs';
import path from 'path';

const pw = await import('playwright')
  .catch(() => import('/opt/node-tools/node_modules/playwright/index.js'));
const chromium = pw.chromium ?? pw.default?.chromium;
if (!chromium) throw new Error('playwright is not installed');

const SRC = path.resolve(process.argv[2] || 'g11-alg-q1.mjs');
const { meta, topics } = await import(SRC);
const OUT = path.resolve(meta.out || SRC.replace(/\.mjs$/, '.pdf'));

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ---- maths ------------------------------------------------------------ */
/* Walks the string once so that nesting (a fraction inside a power, a power
   inside a root) comes out right; a regex pass cannot do that. */
function mathBody(s) {
  let out = '', i = 0;
  const group = () => {                       // reads {...} or one character
    if (s[i] === '{') {
      let depth = 1, j = ++i;
      while (j < s.length && depth) { if (s[j] === '{') depth++; else if (s[j] === '}') depth--; j++; }
      const inner = s.slice(i, j - 1); i = j; return inner;
    }
    return s[i++] ?? '';
  };
  while (i < s.length) {
    const c = s[i];
    if (c === '@' && s.startsWith('@f', i)) {
      i += 2; const n = group(), d = group();
      out += `<span class="fr"><span class="nu">${mathBody(n)}</span>` +
             `<span class="de">${mathBody(d)}</span></span>`;
    } else if (c === '@' && s.startsWith('@r', i)) {
      i += 2; out += `<span class="rt">√</span><span class="rc">${mathBody(group())}</span>`;
    } else if (c === '^') { i++; out += `<sup>${mathBody(group())}</sup>`; }
    else if (c === '_') { i++; out += `<sub>${mathBody(group())}</sub>`; }
    else { out += esc(c); i++; }
  }
  return out;
}
/* Text with $…$ islands of maths. */
const tx = s => String(s).split('$').map((part, k) =>
  k % 2 ? `<span class="m">${mathBody(part)}</span>` : esc(part)).join('');

/* ---- bands ------------------------------------------------------------
   A document may set its own tiers in meta.tiers. `lines` is how many ruled
   lines a question of that tier gets, `colour` names the band's CSS class,
   and `solutions` demands a worked solution, not just an answer.         */
const DEFAULT_TIERS = [
  { key: 'focus',     name: 'Focus',     word: 'easy',      pill: 'EASY',      lines: 1, colour: 'focus',     count: 10 },
  { key: 'practice',  name: 'Practice',  word: 'medium',    pill: 'MEDIUM',    lines: 2, colour: 'practice',  count: 10 },
  { key: 'challenge', name: 'Challenge', word: 'hard',      pill: 'HARD',      lines: 3, colour: 'challenge', count: 10 },
  { key: 'beyond',    name: 'Beyond',    word: 'very hard', pill: 'VERY HARD', lines: 5, colour: 'beyond',    count: 15, solutions: true }
];
const TIERS = meta.tiers || DEFAULT_TIERS;
const PER_TOPIC = TIERS.reduce((a, t) => a + t.count, 0);

/* ---- check ------------------------------------------------------------ */
const problems = [];
for (const t of topics) {
  let n = 0;
  for (const tier of TIERS) {
    const set = t[tier.key] || [];
    n += set.length;
    if (set.length !== tier.count) problems.push(`topic ${t.n} ${tier.key} has ${set.length} questions, want ${tier.count}`);
    set.forEach((row, i) => {
      if (!row[0] || !String(row[0]).trim()) problems.push(`topic ${t.n} ${tier.key}[${i}] has no question`);
      if (row[1] === undefined || !String(row[1]).trim()) problems.push(`topic ${t.n} ${tier.key}[${i}] has no answer`);
      if (tier.solutions && (!row[2] || !String(row[2]).trim())) problems.push(`topic ${t.n} ${tier.key}[${i}] has no solution`);
    });
    if (!t.descs?.[tier.key]) problems.push(`topic ${t.n} has no description for ${tier.key}`);
  }
  if (n !== PER_TOPIC) problems.push(`topic ${t.n} has ${n} questions, want ${PER_TOPIC}`);
  if (!t.keywords?.length) problems.push(`topic ${t.n} has no key words`);
  if (!t.remember?.length) problems.push(`topic ${t.n} has no remember list`);
}
if (problems.length) {
  console.error(`ISSUES (${problems.length}):\n  ` + problems.join('\n  '));
  process.exit(1);
}
const total = topics.length * PER_TOPIC;

/* ---- contents --------------------------------------------------------- */
const contents = meta.contents === false ? '' : `
<section class="sheet contents" id="contents">
  <div class="eyebrow">${esc(meta.eyebrow)}</div>
  <h1 class="big">${tx(meta.title)}</h1>
  <p class="lead">${tx(meta.lead)}</p>
  <table class="toc">${topics.map(t => `<tr>
    <td class="tn"><a href="#t${t.n}">Topic ${t.n}</a></td>
    <td class="tt"><a href="#t${t.n}">${tx(t.title)}</a></td>
    <td class="tl">lessons ${esc(t.lessons)}</td>
    <td class="tq">${PER_TOPIC} questions</td></tr>`).join('')}
  </table>
  <p class="tally">${topics.length} topics · ${total} questions · ${PER_TOPIC} per topic</p>
</section>`;

/* ---- topic pages ------------------------------------------------------ */
const topicPages = topics.map(t => `
<section class="sheet topic" id="t${t.n}">
  <div class="rule"></div>
  <div class="eyebrow">${esc(t.unit)} · TOPIC ${t.n}</div>
  <h1>${tx(t.title)}</h1>
  <p class="sub">${tx(t.subtitle)}</p>
  <p class="meta">${tx(t.meta)}</p>

  <div class="boxes">
    <div class="box kw">
      <div class="bt">KEY WORDS</div>
      <ul>${t.keywords.map(k => `<li>${tx(k)}</li>`).join('')}</ul>
    </div>
    <div class="box rm">
      <div class="bt">REMEMBER</div>
      <ol>${t.remember.map(r => `<li>${tx(r)}</li>`).join('')}</ol>
    </div>
  </div>

  ${(t.lesson || []).map(b => `<div class="lb">
    <h3>${tx(b.h)}</h3>
    ${(b.p || []).map(x => `<p>${tx(x)}</p>`).join('')}
    ${b.table ? `<table class="dt">${b.head ? `<thead><tr>${b.head.map(c =>
        `<th>${tx(c)}</th>`).join('')}</tr></thead>` : ''}${b.table.map(r =>
        `<tr>${r.map(c => `<td>${tx(c)}</td>`).join('')}</tr>`).join('')}</table>` : ''}
    ${b.steps ? `<ol class="st">${b.steps.map(([a, why]) =>
        `<li><span class="sa">${tx(a)}</span><span class="sw">${tx(why)}</span></li>`).join('')}</ol>` : ''}
  </div>`).join('')}

  ${TIERS.map(tier => `
  <div class="band ${tier.colour}">
    <span class="bn">${tier.name}</span><span class="pill">${tier.pill}</span>
    <span class="cnt">${t[tier.key].length} questions</span>
    <span class="desc">${tx(t.descs[tier.key])}</span>
  </div>
  ${t[tier.key].map((row, i) => `<div class="q">
    <span class="num">${i + 1}</span>
    <div class="qt">${tx(row[0])}</div>
    <div class="lines">${'<div class="ln"></div>'.repeat(tier.lines)}</div>
  </div>`).join('')}`).join('')}
</section>`).join('');

/* ---- answers ---------------------------------------------------------- */
const half = a => [a.slice(0, Math.ceil(a.length / 2)), a.slice(Math.ceil(a.length / 2))];
const answers = `
<section class="sheet answers" id="answers">
  <h1 class="big">Answers</h1>
  ${topics.map(t => `
  <div class="atopic" id="a${t.n}">
    <h2>Topic ${t.n} · ${tx(t.title)}</h2>
    ${TIERS.map(tier => {
      const head = `<div class="ah ${tier.colour}">${tier.name} <span class="aw">· ${tier.word}</span></div>`;
      if (tier.solutions) {
        return head + t[tier.key].map((row, i) => `<div class="sol">
          <p class="sh"><b>${i + 1}</b> ${tx(row[1])}</p>
          <p class="sb">${tx(row[2])}</p></div>`).join('');
      }
      const [L, R] = half(t[tier.key]);
      const col = (rows, from) => `<div class="acol">${rows.map((row, i) =>
        `<div class="a"><span class="an">${from + i + 1}</span><span class="av">${tx(row[1])}</span></div>`).join('')}</div>`;
      return head + `<div class="agrid">${col(L, 0)}${col(R, L.length)}</div>`;
    }).join('')}
  </div>`).join('')}
</section>`;

/* ---- page ------------------------------------------------------------- */
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>${esc(meta.title)}</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  @page { size: A4; margin: 16mm 14mm 18mm; }
  * { box-sizing: border-box; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { margin: 0; font-family: "DejaVu Sans", sans-serif; color: #1f2933;
         font-size: 10pt; line-height: 1.5; }
  .m { font-family: "DejaVu Serif", serif; }
  sup, sub { font-size: 0.72em; line-height: 0; }
  .fr { display: inline-block; vertical-align: -0.55em; text-align: center; margin: 0 .18em; }
  .fr .nu { display: block; padding: 0 .3em; border-bottom: 0.6pt solid currentColor; }
  .fr .de { display: block; padding: 0 .3em; }
  .rc { border-top: 0.6pt solid currentColor; padding: 0 .12em; }

  .sheet { break-after: page; }
  .sheet:last-child { break-after: auto; }
  .eyebrow { font-size: 7.6pt; letter-spacing: 1.6pt; color: #7b8794; text-transform: uppercase; }
  h1 { font-size: 20pt; line-height: 1.16; margin: 2mm 0 0; color: #16202b; font-weight: 700; }
  h1.big { font-size: 24pt; }
  .lead, .sub { color: #52606d; margin: 3mm 0 0; max-width: 165mm; }
  .meta { color: #7b8794; font-size: 8.6pt; margin: 1.5mm 0 0; }
  .rule { border-top: 2.4pt solid #16202b; margin-bottom: 4mm; }

  /* contents */
  .toc { width: 100%; border-collapse: collapse; margin-top: 7mm; }
  .toc td { padding: 3.1mm 0; border-bottom: 0.5pt solid #e4e7eb; vertical-align: middle; }
  .toc .tn { width: 26mm; font-weight: 700; color: #2a4365; }
  .toc .tl { width: 26mm; font-size: 8.4pt; color: #7b8794; text-align: right; }
  .toc .tq { width: 28mm; font-size: 8.4pt; color: #7b8794; text-align: right; }
  .tally { margin-top: 4mm; font-size: 8.6pt; color: #7b8794; }
  /* The contents rows are anchors for the browser build; without this they
     would print as blue underlined links. */
  .toc a { color: inherit; text-decoration: none; }

  /* boxes */
  .boxes { display: flex; gap: 5mm; margin: 6mm 0 7mm; break-inside: avoid; }
  .box { flex: 1; border: 0.6pt solid #d9dee3; border-radius: 2.2mm; padding: 4mm 4.5mm; }
  .box.kw { background: #f7f9fa; flex: 0 0 44%; }
  .bt { font-size: 7.6pt; letter-spacing: 1.3pt; color: #7b8794; text-transform: uppercase; margin-bottom: 2.5mm; }
  .box ul, .box ol { margin: 0; padding-left: 5mm; }
  .box li { margin-bottom: 1.3mm; }
  .box.kw li { list-style: disc; }

  /* lesson blocks */
  .lb { margin: 0 0 5mm; }
  .lb h3 { font-size: 10.4pt; margin: 0 0 1.6mm; color: #16202b; break-after: avoid; }
  .lb p { margin: 0 0 1.8mm; }
  /* Long tables may split across a page; the header row repeats, so the
     halves stay readable, and a heading is never stranded alone at the foot. */
  table.dt { width: 100%; border-collapse: collapse; margin: 2mm 0 0; }
  table.dt thead { display: table-header-group; }
  table.dt tr { break-inside: avoid; }
  table.dt th { text-align: left; font-size: 8pt; letter-spacing: 0.6pt; text-transform: uppercase;
                color: #7b8794; padding: 1.4mm 3mm 1.4mm 0; border-bottom: 0.6pt solid #cbd2d9; }
  table.dt td { padding: 1.3mm 3mm 1.3mm 0; border-bottom: 0.5pt solid #e4e7eb; vertical-align: top; }
  ol.st { margin: 1mm 0 0; padding-left: 5.5mm; }
  ol.st li { margin-bottom: 1.4mm; }
  .sa { display: inline-block; margin-right: 3mm; }
  .sw { color: #7b8794; font-size: 8.8pt; }

  /* bands */
  .band { border-radius: 2mm; padding: 2.6mm 4mm; margin: 6mm 0 3mm; break-after: avoid;
          display: flex; align-items: baseline; gap: 3mm; }
  .bn { font-size: 12pt; font-weight: 700; }
  .pill { font-size: 7pt; letter-spacing: 1pt; border: 0.6pt solid currentColor;
          border-radius: 1mm; padding: 0.5mm 1.6mm; }
  .cnt { font-size: 8.4pt; }
  .desc { margin-left: auto; text-align: right; font-size: 8.8pt; max-width: 86mm; }
  .focus     { background: #eef5fb; color: #1b6ca8; }
  .practice  { background: #fdf6e8; color: #96661a; }
  .challenge { background: #f5f1fb; color: #6a4ea0; }
  .beyond    { background: #fdeef1; color: #b03a52; }

  /* questions */
  .q { display: flex; flex-wrap: wrap; gap: 3.4mm; margin: 0 0 2mm; break-inside: avoid; }
  .num { flex: 0 0 6.2mm; height: 6.2mm; border: 0.6pt solid #c3cbd4; border-radius: 50%;
         font-size: 7.6pt; color: #52606d; text-align: center; line-height: 6mm; margin-top: 0.6mm; }
  .qt { flex: 1; }
  /* The writing lines sit on their own row under the question, indented to
     clear the number. They must keep full width: a flex-basis of 0 squeezes
     them to nothing and the dotted rule then has no width to draw along. */
  .lines { flex: 1 0 100%; padding-left: 9.6mm; }
  .ln { border-bottom: 1px dotted #aab3bd; height: 6.4mm; }

  /* answers */
  .answers h1 { margin-bottom: 4mm; }
  .atopic { break-inside: auto; margin-bottom: 7mm; }
  .atopic h2 { font-size: 11.5pt; margin: 5mm 0 0; padding-bottom: 1.6mm;
               border-bottom: 0.6pt solid #cbd2d9; break-after: avoid; }
  .ah { font-size: 10pt; font-weight: 700; margin: 3.4mm 0 1.6mm; break-after: avoid; }
  .ah.focus, .ah.practice, .ah.challenge, .ah.beyond { background: none; padding: 0; }
  .aw { font-weight: 400; font-size: 8.6pt; opacity: .8; }
  .agrid { display: flex; gap: 8mm; }
  .acol { flex: 1; }
  .a { display: flex; gap: 2.6mm; align-items: baseline; margin-bottom: 0.9mm; break-inside: avoid; }
  .an { flex: 0 0 5mm; font-weight: 700; font-size: 8.6pt; color: #3e4c59; }
  .av { flex: 1; }
  .sol { margin-bottom: 2.2mm; break-inside: avoid; }
  .sh { margin: 0; }
  .sb { margin: 0; color: #3e4c59; font-size: 9.2pt; }

  /* The PDF is rendered with print media, so everything below shapes only the
     browser view; Ctrl+P still produces exactly the pages of the PDF. */
  @media screen {
    body { background: #eef1f4; padding: 0 0 18mm; }
    .bar { position: sticky; top: 0; z-index: 9; display: flex; align-items: center; gap: 4mm;
           padding: 3mm 5mm; background: #16202b; color: #e8edf2; font-size: 9pt; }
    /* A select sizes itself to its longest option — here a full topic title —
       so it must be told it may shrink, or it pushes the bar off a phone. */
    .bar select { flex: 0 1 auto; min-width: 0; max-width: 46vw; }
    .bar b { font-weight: 700; }
    .bar .sp { margin-left: auto; }
    .bar a { color: #9fc4e8; text-decoration: none; }
    .bar a:hover { text-decoration: underline; }
    .bar select, .bar button { font: inherit; font-size: 8.6pt; color: #16202b; background: #e8edf2;
      border: 0; border-radius: 1.4mm; padding: 1.2mm 2.4mm; cursor: pointer; }
    .bar button[aria-pressed="true"] { background: #9fc4e8; }
    .sheet { background: #fff; max-width: 190mm; margin: 7mm auto; padding: 14mm 13mm;
             border-radius: 1.5mm; box-shadow: 0 1px 3px rgba(22,32,43,.14); }
    .toc tr:hover .tt a { text-decoration: underline; }
    body.hide-answers .answers { display: none; }
    @media (max-width: 760px) {
      .bar > b { display: none; }
      .sheet { padding: 8mm 6mm; margin: 4mm; }
      .boxes { display: block; }
      .box.kw { margin-bottom: 4mm; }
      .band { flex-wrap: wrap; }
      .desc { margin-left: 0; text-align: left; max-width: none; }
      .agrid { display: block; }
    }
  }
  @media print { .bar { display: none; } }
</style></head><body>
<div class="bar">
  <b>${esc(meta.eyebrow)}</b>
  <select id="jump" aria-label="Go to a topic">
    <option value="#contents">Contents</option>
    ${topics.map(t => `<option value="#t${t.n}">Topic ${t.n} — ${esc(t.title)}</option>`).join('')}
    <option value="#answers">Answers</option>
  </select>
  <span class="sp"></span>
  <button id="toggle" type="button" aria-pressed="false">Hide answers</button>
  <a href="#contents">Top</a>
</div>
${contents}${topicPages}${answers}
<script>
  var jump = document.getElementById('jump');
  jump.addEventListener('change', function () { location.hash = this.value; });
  var btn = document.getElementById('toggle');
  btn.addEventListener('click', function () {
    var hidden = document.body.classList.toggle('hide-answers');
    this.setAttribute('aria-pressed', String(hidden));
    this.textContent = hidden ? 'Show answers' : 'Hide answers';
  });
<\/script>
</body></html>`;

/* ---- write ------------------------------------------------------------ */
const HTML_OUT = OUT.replace(/\.pdf$/, '.html');
fs.writeFileSync(HTML_OUT, html);

/* ---- print ------------------------------------------------------------ */
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage();
await page.route('**/*', r => (/^(file|data):/.test(r.request().url()) ? r.continue() : r.abort()));
await page.setContent(html, { waitUntil: 'load' });

const got = await page.evaluate(() => document.querySelectorAll('.q').length);
if (got !== total) { await browser.close(); throw new Error(`parsed ${total} questions but rendered ${got}`); }

await page.pdf({
  path: OUT, format: 'A4', printBackground: true, displayHeaderFooter: true,
  margin: { top: '16mm', bottom: '18mm', left: '14mm', right: '14mm' },
  headerTemplate: '<div></div>',
  footerTemplate: `<div style="width:100%;padding:0 14mm;font:7.5pt 'DejaVu Sans',sans-serif;color:#8b949e;
    display:flex;justify-content:space-between;"><span>${esc(meta.footer)}</span>
    <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>`
});
await browser.close();
const solved = topics.length * TIERS.filter(t => t.solutions).reduce((a, t) => a + t.count, 0);
console.log(`${topics.length} topic${topics.length > 1 ? 's' : ''} · ${total} questions · ` +
  `${solved} worked solutions -> ` +
  `${path.basename(HTML_OUT)}, ${path.basename(OUT)}`);
