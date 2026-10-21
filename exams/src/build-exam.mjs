/* Renders an exam paper to PDF and merges it onto the school cover page.

     node build-exam.mjs 11AG-MATH-FINAL.content.mjs            # the paper
     node build-exam.mjs 11AG-MATH-FINAL.content.mjs --answers  # marking scheme

   Maths is LaTeX between $…$, typeset by KaTeX — which is why fractions,
   roots and limits come out properly stacked rather than written inline.
   The page follows the school format: Calibri 12, 1.15 line spacing,
   2.54 cm margins, left aligned, numbered questions, bold section headings. */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SCRATCH = '/tmp/claude-0/-home-user-test1/fdc7db6f-b762-5683-89f7-424ced4f2edd/scratchpad';
const KATEX_DIR = SCRATCH + '/node_modules/katex';
const katex = (await import(KATEX_DIR + '/dist/katex.mjs')).default;

const args = process.argv.slice(2);
const SRC = path.resolve(HERE, args.find(a => !a.startsWith('--')));
const ANSWERS = args.includes('--answers');
const { meta, sections, sectionC } = await import(SRC);

const pw = await import('playwright').catch(() => import('/opt/node-tools/node_modules/playwright/index.js'));
const chromium = pw.chromium ?? pw.default?.chromium;

/* ---- text with $…$ islands of LaTeX ---------------------------------- */
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const tx = s => String(s).split('$').map((part, i) =>
  i % 2 ? katex.renderToString(part, { throwOnError: true, strict: 'ignore' }) : esc(part)
).join('');

/* ---- build ------------------------------------------------------------ */
const rules = n => `<div class="lines">${'<div class="ln"></div>'.repeat(n)}</div>`;
let n = 0, body = '';

/* The marking scheme has no cover, so it names itself. */
if (ANSWERS) body += `<div class="title">${esc(meta.file)} — MARKING SCHEME</div>` +
  `<div class="sub">${esc(meta.schemeNote)}</div>`;

for (const s of sections) {
  body += `<div class="sec">${esc(s.head)}</div><div class="ins">${esc(s.instruction)}</div>`;
  for (const [q, marks, ans] of s.questions) {
    n += 1;
    body += `<div class="q"><span class="num">${n}.</span>` +
            `<span class="txt">${tx(q)}<span class="mk">(${marks} marks)</span></span></div>`;
    body += ANSWERS ? `<div class="ans">Answer: ${tx(ans)}</div>` : rules(s.lines);
  }
}

body += `<div class="sec">${esc(sectionC.head)}</div><div class="ins">${esc(sectionC.instruction)}</div>`;
for (const [stem, parts] of sectionC.questions) {
  n += 1;
  const total = parts.reduce((a, p) => a + p[1], 0);
  body += `<div class="q"><span class="num">${n}.</span>` +
          `<span class="txt">${tx(stem)}<span class="mk">(${total} marks)</span></span></div>`;
  parts.forEach(([ptext, pm, pans], i) => {
    body += `<div class="q part"><span class="num">(${'ab'[i]})</span>` +
            `<span class="txt">${tx(ptext)}<span class="mk">(${pm} marks)</span></span></div>`;
    body += ANSWERS ? `<div class="ans part">Answer: ${tx(pans)}</div>` : rules(sectionC.lines);
  });
}
body += `<div class="end">${esc(meta.endLine)}</div>`;

const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="katex.min.css">
<style>
  @page { size: A4; margin: 2.54cm; }
  body { margin: 0; font-family: Calibri, Carlito, sans-serif; font-size: 12pt;
         line-height: 1.15; color: #000; }
  .sec { font-weight: bold; margin: 14pt 0 0; break-after: avoid; }
  .ins { font-style: italic; margin: 1pt 0 8pt; break-after: avoid; }
  .q { display: flex; gap: 6pt; margin: 0 0 5pt; break-inside: avoid; break-after: avoid; }
  .q.part { margin-left: 18pt; }
  .num { font-weight: bold; flex: 0 0 auto; min-width: 20pt; }
  .txt { flex: 1; }
  .mk { white-space: nowrap; margin-left: 8pt; }
  .lines { margin: 0 0 11pt; }
  .ln { border-bottom: 1px dotted #777; height: 15pt; }
  .ans { margin: 0 0 7pt 26pt; }
  .ans.part { margin-left: 44pt; }
  .end { text-align: center; font-weight: bold; margin-top: 16pt; }
  .title { text-align: center; font-weight: bold; margin-bottom: 2pt; }
  .sub { text-align: center; font-style: italic; margin-bottom: 10pt; }
  .katex { font-size: 1.05em; }
</style></head><body>${body}</body></html>`;

/* KaTeX needs its stylesheet and fonts beside the page for file:// loading. */
const OUTDIR = SCRATCH + '/katexbuild';
fs.rmSync(OUTDIR, { recursive: true, force: true });
fs.mkdirSync(OUTDIR, { recursive: true });
fs.copyFileSync(KATEX_DIR + '/dist/katex.min.css', OUTDIR + '/katex.min.css');
fs.cpSync(KATEX_DIR + '/dist/fonts', OUTDIR + '/fonts', { recursive: true });
fs.writeFileSync(OUTDIR + '/exam.html', html);

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage();
await page.goto('file://' + OUTDIR + '/exam.html', { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
const bodyPdf = OUTDIR + '/body.pdf';
await page.pdf({ path: bodyPdf, format: 'A4', printBackground: true,
  margin: { top: '2.54cm', bottom: '2.54cm', left: '2.54cm', right: '2.54cm' },
  displayHeaderFooter: true, headerTemplate: '<div></div>',
  footerTemplate: `<div style="width:100%;padding:0 2.54cm;font:9pt Carlito,sans-serif;color:#555;
    text-align:right;"><span class="pageNumber"></span></div>` });
await browser.close();

const out = path.resolve(HERE, '..', meta.file + (ANSWERS ? '-MARKING-SCHEME' : '') + '.pdf');
if (ANSWERS) {
  fs.copyFileSync(bodyPdf, out);
} else {
  execFileSync('python3', ['-c', `
import sys
from pypdf import PdfWriter, PdfReader
w = PdfWriter()
for p in PdfReader(sys.argv[1]).pages: w.add_page(p)
for p in PdfReader(sys.argv[2]).pages: w.add_page(p)
w.write(sys.argv[3])
`, SCRATCH + '/cover-page.pdf', bodyPdf, out], { stdio: 'inherit' });
}
console.log(`${n} questions · ${ANSWERS ? 'marking scheme' : 'exam'} -> ${path.basename(out)}`);
