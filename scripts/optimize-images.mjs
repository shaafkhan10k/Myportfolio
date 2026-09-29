// One-off helper: converts project screenshots to resized WebP.
// Usage: node scripts/optimize-images.mjs   (originals are deleted after conversion)
import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync } from 'node:fs';
import { join, extname, basename } from 'node:path';

const ROOT = 'public/projects';
const MAX_WIDTH = 1400;

for (const dir of readdirSync(ROOT)) {
  const full = join(ROOT, dir);
  if (!statSync(full).isDirectory()) continue;
  for (const file of readdirSync(full)) {
    const ext = extname(file).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;
    const src = join(full, file);
    const out = join(full, basename(file, extname(file)) + '.webp');
    await sharp(src).resize({ width: MAX_WIDTH, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out);
    console.log(`${src} -> ${out} (${(statSync(src).size / 1024).toFixed(0)} kB -> ${(statSync(out).size / 1024).toFixed(0)} kB)`);
    unlinkSync(src);
  }
}
