// builds the shared inner-page banner (clean left strip of the field photo, mirrored to widen it)
import sharp from 'sharp';
const A = await sharp('reference/Image Preview_files/about.jpg').extract({ left: 0, top: 178, width: 520, height: 352 }).toBuffer();
const F = await sharp(A).flop().toBuffer();
await sharp({ create: { width: 1040, height: 352, channels: 3, background: '#000' } })
  .composite([{ input: A, left: 0, top: 0 }, { input: F, left: 520, top: 0 }])
  .jpeg({ quality: 90 }).toFile('public/images/common/banner.jpg');
