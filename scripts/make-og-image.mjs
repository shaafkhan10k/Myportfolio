// Generates public/og-image.png (1200x630) for social sharing previews.
import sharp from 'sharp';

const W = 1200, H = 630;
const photo = await sharp('public/MyPic.png').resize({ height: 520, fit: 'inside' }).png().toBuffer();
const { width: pw } = await sharp(photo).metadata();

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#646973"/><stop offset="1" stop-color="#bbccd7"/></linearGradient></defs>
  <rect width="100%" height="100%" fill="#0C0C0C"/>
  <text x="70" y="250" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="92" fill="url(#g)">SHAAF KHAN</text>
  <text x="70" y="330" font-family="Arial, Helvetica, sans-serif" font-weight="300" font-size="38" fill="#D7E2EA">AI ENGINEER</text>
  <text x="70" y="385" font-family="Arial, Helvetica, sans-serif" font-weight="300" font-size="30" fill="#D7E2EA" opacity="0.8">Automation · Agents · Computer Vision</text>
  <text x="70" y="560" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#D7E2EA" opacity="0.6">shaafkhan.vercel.app</text>
</svg>`;

await sharp(Buffer.from(svg))
  .composite([{ input: photo, left: W - pw - 60, top: H - 520 - 55 }])
  .png({ compressionLevel: 9 })
  .toFile('public/og-image.png');
console.log('wrote public/og-image.png');
