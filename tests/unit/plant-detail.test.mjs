import {test,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import * as T from '../../playable-3d/vendor/three/build/three.module.js';
const source=readFileSync(new URL('../../playable-3d/ecc-preview/authored-garden.js',import.meta.url),'utf8');
const thin=vm.runInNewContext(source.slice(source.indexOf('export function thinGeometry'),source.indexOf('function addDistanceDetail')).replace('export ', '')+';thinGeometry;',{T,cache:new Map()});
test('reduced leaf detail keeps source vertices, normals and UVs and leaves the full asset intact',()=>{
 const full=new T.PlaneGeometry(12,8,6,4),before=full.index.array.slice(),expanded=full.toNonIndexed(),low=thin(full,6,4);
 expect(low.attributes.position.count).toBe(expanded.attributes.position.count/4);expect(full.index.array).toEqual(before);expect(thin(full,6,4)).toBe(low);
 for(const [name,attribute]of Object.entries(low.attributes)){
  const original=expanded.attributes[name],size=attribute.itemSize;
  for(let i=0;i<attribute.count;i++){const values=[...attribute.array.slice(i*size,(i+1)*size)];const match=Array.from({length:original.count},(_,j)=>[...original.array.slice(j*size,(j+1)*size)]).some(row=>row.every((value,j)=>value===values[j]));expect(match).toBe(true);}
 }
});
