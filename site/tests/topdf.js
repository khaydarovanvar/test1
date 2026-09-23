// Renders each {html, pdf} job through Chromium. The fonts are inlined in the
// page, so nothing is fetched while printing.
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const jobs = require(process.argv[2]);
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  for (const j of jobs) {
    const p = await b.newPage();
    const errs = []; p.on('pageerror', e => errs.push(String(e)));
    await p.emulateMedia({ media: 'print', colorScheme: 'light' });
    await p.goto('file://' + j.html, { waitUntil: 'load' });
    await p.waitForTimeout(900);
    await p.pdf({ path: j.pdf, format: 'A4', printBackground: true });
    console.log('  ' + j.pdf.replace(/.*\//, '') + (errs.length ? '  JS errors: ' + errs.length : ''));
    await p.close();
  }
  await b.close();
})();
