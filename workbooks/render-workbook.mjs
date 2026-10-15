/* Renders workbook-g8-algebra.html to A4 PDF with Chromium.
   The page is local and asks for no web fonts, so nothing goes out to the network. */
import pw from '/opt/node-tools/node_modules/playwright/index.js';
const { chromium } = pw;
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const here = path.dirname(fileURLToPath(import.meta.url));
const name = process.argv[2] || 'workbook-g8-algebra';
const src = 'file://' + path.join(here, name + '.html');
const out = path.join(here, (process.argv[3] || 'Grade8_Algebra_Workbook') + '.pdf');
const titleFile = path.join(here, name + '.title');
const title = fs.existsSync(titleFile) ? fs.readFileSync(titleFile, 'utf8').trim()
                                       : 'Algebraic fractions';

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage();
await page.route('**/*', r => (r.request().url().startsWith('file:') ? r.continue() : r.abort()));
await page.goto(src, { waitUntil: 'load' });
/* The front matter carries no running footer: a title page with "Page 1 of 312"
   stamped on it is the mark of a printout, not a book. */
const foot = !process.argv.includes('--no-footer');

await page.pdf({
  path: out,
  format: 'A4',
  printBackground: true,
  margin: { top: '12mm', bottom: foot ? '13mm' : '12mm', left: '13mm', right: '13mm' },
  displayHeaderFooter: foot,
  headerTemplate: '<div></div>',
  footerTemplate: !foot ? '<div></div>' :
    '<div style="font:8pt -apple-system,sans-serif;color:#7A8792;width:100%;padding:0 14mm;">' +
    '<span style="float:left">' + title + ' · Anvarbek Khaydarov</span>' +
    '<span style="float:right"><span class="pageNumber"></span></span>' +
    '</div>'
});
await browser.close();
console.log('wrote ' + out);
