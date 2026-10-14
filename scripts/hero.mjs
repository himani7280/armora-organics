// builds the full-width hero photo: blurred left backdrop (text-free strip stretched) + original right-side photo, feathered together
import sharp from 'sharp';
const SRC = 'reference/Image Preview_files/home.jpg';
const W = 1351, H = 505, TOP = 185, CUT = 720, FEATHER = 110;
const left = await sharp(SRC).extract({ left: 0, top: TOP + 40, width: 140, height: 400 }).resize(W, H, { fit: 'fill' }).blur(30).toBuffer();
const right = await sharp(SRC).extract({ left: CUT, top: TOP, width: W - CUT, height: H }).toBuffer();
const mask = Buffer.from(`<svg width="${W - CUT}" height="${H}"><defs><linearGradient id="g" x1="0" x2="${FEATHER / (W - CUT)}"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity="1"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>`);
const rightFeathered = await sharp(right).composite([{ input: await sharp(mask).png().toBuffer(), blend: 'dest-in' }]).png().toBuffer();
await sharp(left).composite([{ input: rightFeathered, left: CUT, top: 0 }]).jpeg({ quality: 90 }).toFile('public/images/home/hero.jpg');
console.log('hero ok');
