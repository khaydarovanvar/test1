/* Builds ali-fc-offline.html — one self-contained file that opens with a
   double-click (no web server needed, works fully offline).
   Run:  node build.mjs      (needs npx esbuild, or a global esbuild) */

import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const tmp = mkdtempSync(join(tmpdir(), 'alifc-'));
const bundlePath = join(tmp, 'bundle.js');

try {
  execFileSync('npx', ['--yes', 'esbuild', join(here, 'js/app.js'),
    '--bundle', '--format=iife', '--minify', '--target=es2020',
    `--outfile=${bundlePath}`], { stdio: 'inherit' });

  const js = readFileSync(bundlePath, 'utf8');
  const css = readFileSync(join(here, 'css/style.css'), 'utf8');
  const print = readFileSync(join(here, 'css/print.css'), 'utf8');
  const html = readFileSync(join(here, 'index.html'), 'utf8');

  const out = html
    .replace('<link rel="stylesheet" href="css/style.css">', `<style>\n${css}\n</style>`)
    .replace('<link rel="stylesheet" href="css/print.css" media="print">', `<style media="print">\n${print}\n</style>`)
    .replace('<script type="module" src="js/app.js"></script>', `<script>\n${js}\n</script>`);

  const target = join(here, 'ali-fc-offline.html');
  writeFileSync(target, out);
  console.log(`✅ ${target}  (${(out.length / 1024).toFixed(0)} KB)`);
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
