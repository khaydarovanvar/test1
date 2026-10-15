/* Renders one cover page to a full-bleed A4 PDF: no margins, no running footer.
   The page is local and asks for no web fonts, so nothing goes out to the network. */
import pw from '/opt/node-tools/node_modules/playwright/index.js';
const { chromium } = pw;
import path from 'path';
import { fileURLToPath } from 'url';

const here = path.dirname(fileURLToPath(import.meta.url));
const name = process.argv[2];
const out = process.argv[3];
if (!name || !out) { console.error('usage: render-cover.mjs <html-stem> <pdf-path>'); process.exit(1); }

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage();
await page.route('**/*', r => (r.request().url().startsWith('file:') ? r.continue() : r.abort()));
await page.goto('file://' + path.join(here, name + '.html'), { waitUntil: 'load' });
await page.pdf({
  path: path.join(here, out + '.pdf'),
  format: 'A4',
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: '0', bottom: '0', left: '0', right: '0' },
});
await browser.close();
console.log('wrote ' + out + '.pdf');
