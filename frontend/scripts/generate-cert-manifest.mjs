import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const certDir = path.join(root, 'public', 'certificates');
const manifestPath = path.join(certDir, 'manifest.json');

function toTitle(file) {
  const base = file.replace(/\.pdf$/i, '').replace(/[-_]+/g, ' ');
  return base
    .split(' ')
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : ''))
    .join(' ')
    .trim();
}

function walk(dir, base = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let results = [];
  for (const e of entries) {
    const rel = path.join(base, e.name);
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) {
      results = results.concat(walk(abs, rel));
    } else if (e.isFile() && e.name.toLowerCase().endsWith('.pdf')) {
      const category = base ? base.split(path.sep)[0] : '';
      results.push({ file: rel.replace(/\\/g, '/'), category });
    }
  }
  return results;
}

function main() {
  if (!fs.existsSync(certDir)) {
    fs.mkdirSync(certDir, { recursive: true });
  }
  const items = walk(certDir).map(({ file, category }) => ({
    title: toTitle(path.basename(file)),
    file,
    category,
  }));
  fs.writeFileSync(manifestPath, JSON.stringify(items, null, 2));
  // eslint-disable-next-line no-console
  console.log(`Wrote ${items.length} entries to ${path.relative(root, manifestPath)}`);
}

main();
