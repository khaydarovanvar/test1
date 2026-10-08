/* Renders a topic-map markdown file to a printable A4 PDF.

     node build-topic-map-pdf.mjs calculus-topic-map.md
     node build-topic-map-pdf.mjs cambridge-9709-topic-map.md --flow

   Each part starts on a fresh page when the map is big enough for a part to
   fill one; below that the parts flow on, so a short map does not print as a
   run of quarter-empty pages. --pages and --flow force the choice.

   The markdown is a bare list, nothing else:
     # Document title
     > optional subtitle line
     # PART HEADING          one per printed section break
     ## Section heading
     1.2.3 Subtopic                  (any other non-blank line)

   The script counts the subtopics it parsed against the list items that
   reached the page and refuses to write a file that has lost any.          */
import fs from 'fs';
import path from 'path';

/* Playwright may be installed beside the repo or only in the image's shared
   tool directory; ESM does not read NODE_PATH, so try both. */
const pw = await import('playwright')
  .catch(() => import('/opt/node-tools/node_modules/playwright/index.js'));
const chromium = pw.chromium ?? pw.default?.chromium;
if (!chromium) throw new Error('playwright is not installed');

const args = process.argv.slice(2);
const flags = new Set(args.filter(a => a.startsWith('--')));
const SRC = path.resolve(args.find(a => !a.startsWith('--')) || 'calculus-topic-map.md');
const OUT = SRC.replace(/\.md$/, '.pdf');
if (!fs.existsSync(SRC)) throw new Error(`no such file: ${SRC}`);

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
/* "A.1.2" or "1.2.3" set apart from the text that follows it. */
const NUM = /^((?:[A-Z]|\d+)\.\d+(?:\.\d+)?)\s+(.*)$/;

/* ---- parse ------------------------------------------------------------ */
let docTitle = '', subtitle = '';
const parts = [];          // [{ title, sections: [{ title, items: [] }] }]
let items = 0;

for (const raw of fs.readFileSync(SRC, 'utf8').split('\n')) {
  const line = raw.trim();
  if (!line) continue;
  if (line.startsWith('> ')) { subtitle ||= line.slice(2); continue; }
  if (line.startsWith('## ')) {
    parts[parts.length - 1].sections.push({ title: line.slice(3), items: [] });
  } else if (line.startsWith('# ')) {
    const t = line.slice(2);
    if (!docTitle) { docTitle = t; continue; }
    parts.push({ title: t, sections: [] });
  } else {
    const p = parts[parts.length - 1];
    /* A part may carry its lines directly, with no section heading. */
    if (!p.sections.length) p.sections.push({ title: '', items: [] });
    p.sections[p.sections.length - 1].items.push(line);
    items++;
  }
}

/* ---- render ----------------------------------------------------------- */
/* A part earns its own page only once there is enough of it to fill one. */
const pageBreaks = flags.has('--pages') || (!flags.has('--flow') && items > 250);

const body = parts.map((p, i) => `
<section class="part${i && pageBreaks ? ' brk' : ''}">
  <h1>${esc(p.title)}</h1>
  <div class="cols">
    ${p.sections.map(s => `<div class="sec">
      ${s.title ? `<h2>${esc(s.title)}</h2>` : ''}
      <ul>${s.items.map(it => {
        const m = it.match(NUM);
        return m ? `<li><span class="n">${m[1]}</span>${esc(m[2])}</li>`
                 : `<li>${esc(it)}</li>`;
      }).join('')}</ul>
    </div>`).join('')}
  </div>
</section>`).join('');

const tally = parts.map(p =>
  `${p.title.replace(/^(PART|PAPERS?) [A-Z0-9]+( AND \d+)? — /, '')} ` +
  `${p.sections.reduce((a, s) => a + s.items.length, 0)}`
).join(' · ');

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>${esc(docTitle)}</title>
<style>
  @page { size: A4; margin: 16mm 13mm 14mm; }
  * { box-sizing: border-box; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { margin: 0; font-family: "DejaVu Sans", sans-serif; color: #15181d; font-size: 8.4pt; line-height: 1.34; }

  .title { border-bottom: 1.6pt solid #15181d; padding-bottom: 7mm; margin-bottom: 8mm; }
  .title h1 { font-family: "DejaVu Serif", serif; font-size: 23pt; line-height: 1.1; margin: 0 0 3mm; letter-spacing: -0.2pt; }
  .title .sub { font-size: 9pt; color: #4c5663; }
  .title .tally { font-size: 7.6pt; color: #6b7684; margin-top: 2.5mm; }

  .part { break-inside: auto; }
  .part.brk { break-before: page; }
  .part + .part > h1 { margin-top: 7mm; }
  .part > h1 { font-family: "DejaVu Serif", serif; font-size: 13pt; margin: 0 0 5mm;
               padding-bottom: 2mm; border-bottom: 0.9pt solid #15181d; letter-spacing: 0.3pt; }

  .cols { column-count: 2; column-gap: 9mm; column-rule: 0.4pt solid #dfe3e8; orphans: 3; widows: 3; }
  /* A section may be taller than a column (B.4 runs to 42 lines), so it must be
     allowed to flow; only the heading is pinned to the lines that follow it. */
  .sec { margin: 0 0 4.2mm; }
  .sec:last-child { margin-bottom: 0; }
  h2 { font-family: "DejaVu Serif", serif; font-size: 9.2pt; margin: 0 0 1.6mm;
       color: #0b2d6b; break-after: avoid; break-inside: avoid; }
  h2 + ul > li:first-child { break-before: avoid; }
  ul { margin: 0; padding: 0; list-style: none; }
  li { padding-left: 13.5mm; text-indent: -13.5mm; margin-bottom: 0.5mm; break-inside: avoid; }
  .n { display: inline-block; width: 13.5mm; text-indent: 0; color: #7b8694;
       font-size: 7.4pt; font-variant-numeric: tabular-nums; }
</style></head><body>
<div class="title">
  <h1>${esc(docTitle)}</h1>
  ${subtitle ? `<div class="sub">${esc(subtitle)}</div>` : ''}
  <div class="tally">${items} subtopics — ${esc(tally)}</div>
</div>
${body}
</body></html>`;

/* ---- print ------------------------------------------------------------ */
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage();
await page.route('**/*', r => (/^(file|data):/.test(r.request().url()) ? r.continue() : r.abort()));
await page.setContent(html, { waitUntil: 'load' });

const rendered = await page.evaluate(() => document.querySelectorAll('li').length);
if (rendered !== items) {
  await browser.close();
  throw new Error(`parsed ${items} subtopics but rendered ${rendered}`);
}

await page.pdf({
  path: OUT,
  format: 'A4',
  printBackground: true,
  displayHeaderFooter: true,
  margin: { top: '16mm', bottom: '14mm', left: '13mm', right: '13mm' },
  headerTemplate: '<div></div>',
  footerTemplate: `<div style="width:100%;padding:0 13mm;font:7pt 'DejaVu Sans',sans-serif;color:#8b949e;
    display:flex;justify-content:space-between;">
    <span>${esc(docTitle)}</span><span class="pageNumber"></span></div>`
});
await browser.close();

console.log(`${path.basename(SRC)}: ${items} subtopics · ${parts.length} parts · ` +
  `${parts.reduce((a, p) => a + p.sections.filter(s => s.title).length, 0)} sections · ` +
  `${pageBreaks ? 'a page per part' : 'parts flow'} -> ${path.basename(OUT)}`);
