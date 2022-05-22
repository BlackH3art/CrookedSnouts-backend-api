import { Injectable } from '@nestjs/common';
import { writeFile, readFile } from 'fs/promises';
import { getLayer } from 'src/utils/getLayer';
import { getRandomInt } from 'src/utils/getRandomInt';


const template: string = `
    <svg width="100%" height="100%" viewBox="0 0 400 400" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
        <!-- bg -->
        <!-- face -->
        <!-- eyes -->
        <!-- head -->
        <!-- mouth -->
        <!-- nose -->
    </svg>
`;

@Injectable()
export class GenerateSvgService {

  async generateSVG() {

    const bg = getRandomInt(6);
    const face = getRandomInt(7);
    const eyes = getRandomInt(11);
    const head = getRandomInt(12);
    const mouth = getRandomInt(11);
    const nose = getRandomInt(6); 

    const nft = [bg, face, head, eyes, mouth, nose].join('');

    console.log('nft --->',  nft);



    const final = template
      .replace('<!-- bg -->', await getLayer(`bg${bg}`))
      .replace('<!-- face -->', await getLayer(`face${face}`))
      .replace('<!-- eyes -->', await getLayer(`eyes${eyes}`))
      .replace('<!-- head -->', await getLayer(`head${head}`))
      .replace('<!-- mouth -->', await getLayer(`mouth${mouth}`))
      .replace('<!-- nose -->', await getLayer(`nose${nose}`))


    await writeFile(`./src/out/${nft}.svg`, final);

    const file = await readFile(`./src/out/${nft}.svg`);
    
    return file;
  }
}
