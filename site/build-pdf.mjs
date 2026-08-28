/* Renders every lesson to a printable PDF, plus one booklet per quarter. */
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const SITE = 'file://' + path.resolve('.') + '/';
const OUT = path.resolve('./pdf');
fs.mkdirSync(OUT, { recursive: true });

const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await b.newPage();
await page.goto(SITE + 'lesson.html?t=alg-01', { waitUntil: 'domcontentloaded' });
const topics = await page.evaluate(() =>
  [].concat(window.G8_ALG || [], window.G8_GEO || [])
    .map(t => ({ id: t.id, stream: t.stream, quarter: t.quarter, lessons: t.lessons, title: t.title })));

const PDFOPTS = {
  format: 'A4', printBackground: true,
  margin: { top: '14mm', bottom: '16mm', left: '14mm', right: '14mm' },
  displayHeaderFooter: true,
  headerTemplate: '<div style="font:9px -apple-system,sans-serif;color:#8B9AA0;width:100%;padding:0 14mm;">' +
    '<span style="float:left">Anvarbek Khaydarov · Mathematics · Grade 8</span></div>',
  footerTemplate: '<div style="font:9px -apple-system,sans-serif;color:#8B9AA0;width:100%;padding:0 14mm;">' +
    '<span style="float:left" class="title"></span>' +
    '<span style="float:right">Page <span class="pageNumber"></span> / <span class="totalPages"></span></span></div>'
};

let n = 0;
for (const t of topics) {
  await page.goto(SITE + 'lesson.html?t=' + t.id, { waitUntil: 'networkidle' });
  await page.waitForTimeout(450);
  await page.evaluate(() => {                       // print with the answers shown
    document.querySelectorAll('.probs').forEach(e => e.classList.add('show'));
    document.querySelectorAll('.steps li[hidden]').forEach(e => e.hidden = false);
  });
  await page.emulateMedia({ media: 'print' });
  const file = path.join(OUT, `g8-${t.stream}-q${t.quarter}-${t.id}.pdf`);
  await page.pdf({ ...PDFOPTS, path: file });
  await page.emulateMedia({ media: null });
  n++;
}
console.log('lesson PDFs written:', n);
await b.close();
