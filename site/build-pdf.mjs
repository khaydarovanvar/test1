/* Renders every lesson of every written grade to a printable PDF.
   Run build-booklets.py afterwards to merge them by grade, stream and quarter. */
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const SITE = 'file://' + path.resolve('.') + '/';
const OUT = path.resolve('./pdf');
fs.mkdirSync(OUT, { recursive: true });

const GRADES = [6, 7, 8, 9, 10, 11];

const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const ctx = await b.newContext();
/* The pages ask for web fonts and the translate widget; offline those requests
   never settle, so serve only the local files and let everything else fail fast. */
await ctx.route('**/*', r => (r.request().url().startsWith('file:') ? r.continue() : r.abort()));
const page = await ctx.newPage();
await page.goto(SITE + 'lesson.html?t=alg-01', { waitUntil: 'domcontentloaded' });
const topics = await page.evaluate(gs => {
  let all = [];
  for (const g of gs) {
    all = all.concat(window['G' + g + '_MAT'] || [],
                     window['G' + g + '_ALG'] || [],
                     window['G' + g + '_GEO'] || []);
  }
  return all.map(t => ({ id: t.id, grade: t.grade, stream: t.stream, quarter: t.quarter, title: t.title }));
}, GRADES);

const pdfOpts = grade => ({
  format: 'A4', printBackground: true,
  margin: { top: '14mm', bottom: '16mm', left: '14mm', right: '14mm' },
  displayHeaderFooter: true,
  headerTemplate: '<div style="font:9px -apple-system,sans-serif;color:#8B9AA0;width:100%;padding:0 14mm;">' +
    '<span style="float:left">Anvarbek Khaydarov · Mathematics · Grade ' + grade + '</span></div>',
  footerTemplate: '<div style="font:9px -apple-system,sans-serif;color:#8B9AA0;width:100%;padding:0 14mm;">' +
    '<span style="float:left" class="title"></span>' +
    '<span style="float:right">Page <span class="pageNumber"></span> / <span class="totalPages"></span></span></div>'
});

let n = 0;
for (const t of topics) {
  await page.goto(SITE + 'lesson.html?t=' + t.id, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(260);
  await page.evaluate(() => {                       // print with the answers shown
    document.querySelectorAll('.probs').forEach(e => e.classList.add('show'));
    document.querySelectorAll('.steps li[hidden]').forEach(e => e.hidden = false);
  });
  await page.emulateMedia({ media: 'print' });
  const file = path.join(OUT, `g${t.grade}-${t.stream}-q${t.quarter}-${t.id}.pdf`);
  await page.pdf({ ...pdfOpts(t.grade), path: file });
  await page.emulateMedia({ media: null });
  n++;
  if (n % 25 === 0) console.log('  ' + n + ' / ' + topics.length);
}
console.log('lesson PDFs written:', n);
await b.close();
