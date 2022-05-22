import { readFile } from 'fs/promises';


export async function getLayer(name: string) {
  const svg = await readFile(`./src/layers_svg/${name}.svg`, 'utf-8');
  const re = /(?<=\<svg\s*[^>]*>)([\s\S]*?)(?=\<\/svg\>)/g
  const layer = svg.match(re)[0];
  
  return layer;
}