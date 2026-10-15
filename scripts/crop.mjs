
import sharp from 'sharp'; import fs from 'fs'; import path from 'path';
const [page,out,x,y,w,h,mode]=process.argv.slice(2);
const src=`./reference/Image Preview_files/${page}.jpg`;
const dst=path.resolve('public/images',out);
fs.mkdirSync(path.dirname(dst),{recursive:true});
let img=sharp(src).extract({left:+x,top:+y,width:+w,height:+h});
if(mode==='circle'){
  const d=Math.min(+w,+h);
  const mask=Buffer.from(`<svg width="${w}" height="${h}"><circle cx="${w/2}" cy="${h/2}" r="${d/2}" fill="#fff"/></svg>`);
  await img.composite([{input:mask,blend:'dest-in'}]).png().toFile(dst);
} else if(dst.endsWith('.png')) await img.png().toFile(dst);
else await img.jpeg({quality:90}).toFile(dst);
console.log('ok',dst);
