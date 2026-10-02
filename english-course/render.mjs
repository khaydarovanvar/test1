/* Renders book.html to PDF with Chromium over CDP — no npm dependencies.
   Node 22 has a global WebSocket, which is all the protocol needs, and driving
   the browser directly (rather than --print-to-pdf) is what buys us the running
   footer with real page numbers. */
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const CHROME = '/opt/pw-browsers/chromium';
const IN = path.resolve(process.argv[2] || 'book.html');
const OUT = path.resolve(process.argv[3] || 'book.pdf');
const PORT = 9333;

const sleep = ms => new Promise(r => setTimeout(r, ms));

const chrome = spawn(CHROME, [
  '--headless', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
  '--force-color-profile=srgb', '--font-render-hinting=none',
  `--remote-debugging-port=${PORT}`, 'about:blank'
], { stdio: ['ignore', 'ignore', 'pipe'] });

/* Chromium is noisy about the sandbox and about TLS to hosts we never use;
   only surface a crash. */
chrome.stderr.on('data', d => {
  const s = String(d);
  if (/Fatal|cannot open display|error while loading/i.test(s)) process.stderr.write(s);
});

async function endpoint() {
  for (let i = 0; i < 100; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (r.ok) return (await r.json()).webSocketDebuggerUrl;
    } catch { /* not listening yet */ }
    await sleep(100);
  }
  throw new Error('Chromium did not open a debugging port');
}

const ws = new WebSocket(await endpoint());
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

let nextId = 1;
const pending = new Map();
const listeners = [];
ws.onmessage = ev => {
  const m = JSON.parse(ev.data);
  if (m.id && pending.has(m.id)) {
    const { res, rej } = pending.get(m.id);
    pending.delete(m.id);
    m.error ? rej(new Error(m.error.message)) : res(m.result);
  } else if (m.method) {
    listeners.forEach(fn => fn(m));
  }
};
const send = (method, params = {}, sessionId) => new Promise((res, rej) => {
  const id = nextId++;
  pending.set(id, { res, rej });
  ws.send(JSON.stringify({ id, method, params, sessionId }));
});
const once = method => new Promise(res => {
  const fn = m => {
    if (m.method === method) { listeners.splice(listeners.indexOf(fn), 1); res(m.params); }
  };
  listeners.push(fn);
});

const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
const S = (m, p) => send(m, p, sessionId);

await S('Page.enable');
const loaded = once('Page.loadEventFired');
await S('Page.navigate', { url: 'file://' + IN });
await loaded;
/* Give the emoji font and the layout a moment to settle before measuring pages. */
await S('Emulation.setEmulatedMedia', { media: 'print' });
await sleep(900);

const foot = `<div style="font:8.5px 'DejaVu Sans',sans-serif;color:#8B9A9F;width:100%;
  padding:0 16mm;display:flex;justify-content:space-between;">
  <span>Инглиз тили — бошланғич синф математика ўқитувчилари учун</span>
  <span class="pageNumber"></span></div>`;
const head = `<div style="font:8.5px 'DejaVu Sans',sans-serif;color:#C8D2D4;width:100%;
  padding:0 16mm;text-align:right;"><span class="title"></span></div>`;

const { data } = await S('Page.printToPDF', {
  printBackground: true,
  paperWidth: 8.27, paperHeight: 11.69,            // A4
  marginTop: 0.62, marginBottom: 0.60, marginLeft: 0, marginRight: 0,
  displayHeaderFooter: true,
  headerTemplate: head,
  footerTemplate: foot,
  preferCSSPageSize: false
});

fs.writeFileSync(OUT, Buffer.from(data, 'base64'));
console.log('PDF written:', OUT, (fs.statSync(OUT).size / 1048576).toFixed(2) + ' MB');

ws.close();
chrome.kill();
process.exit(0);
