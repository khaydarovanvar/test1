/* Renders a booklet HTML file to PDF with the pre-installed Chromium.
   Usage: node render.mjs input.html output.pdf [footer text]            */
import { createRequire } from 'module';
import path from 'path';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PW || '/opt/node22/lib/node_modules/playwright');

const [src, out, foot] = process.argv.slice(2);
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await (await b.newContext()).newPage();
await page.goto('file://' + path.resolve(src), { waitUntil: 'networkidle' });
await page.emulateMedia({ media: 'print' });

const style = 'font:8pt -apple-system,Helvetica,Arial,sans-serif;color:#8a95a1;width:100%;padding:0 14mm;';
await page.pdf({
  path: path.resolve(out),
  format: 'A4',
  printBackground: true,
  margin: { top: '0mm', bottom: '10mm', left: '0mm', right: '0mm' },  // the rest comes from @page
  displayHeaderFooter: Boolean(foot),
  headerTemplate: '<div></div>',
  footerTemplate: foot
    ? '<div style="' + style + '"><span style="float:left">' + foot +
      '</span><span style="float:right">Page <span class="pageNumber"></span> / ' +
      '<span class="totalPages"></span></span></div>'
    : '<div></div>'
});
await b.close();
console.log('wrote', out);
