/* Rasterise the geometry figures to PNG at print resolution. */
import pw from '/opt/node-tools/node_modules/playwright/index.js';
const { chromium } = pw;
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const here = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(here, 'figures');
const index = JSON.parse(fs.readFileSync(path.join(dir, 'index.json'), 'utf8'));
const SCALE = 4;                       // ~300 dpi once the image is placed in mm

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
for (const name of Object.keys(index)) {
  const svg = fs.readFileSync(path.join(dir, name + '.svg'), 'utf8');
  const page = await browser.newPage({ deviceScaleFactor: SCALE });
  await page.setContent(`<body style="margin:0;background:#fff">${svg}</body>`);
  const el = await page.$('svg');
  await el.screenshot({ path: path.join(dir, name + '.png'), omitBackground: false });
  await page.close();
}
await browser.close();
console.log('rendered ' + Object.keys(index).length + ' figures');
