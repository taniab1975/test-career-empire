import {test,expect,vi,afterEach} from 'vitest';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import * as T from '../../playable-3d/vendor/three/build/three.module.js';
const read=name=>readFileSync(new URL('../../playable-3d/environment/'+name,import.meta.url),'utf8');
const body=source=>source.replace(/^import .*;\n/gm,'').replace(/export (async )?function /g,'$1function ');
const ctx=new Proxy({createLinearGradient:()=>({addColorStop(){}})},{get:(o,k)=>o[k]||(()=>{})});
const document={createElement:()=>({getContext:()=>ctx})};
const batchStatic=root=>root;
const buildMedia=vm.runInNewContext(body(read('media-building.js'))+';buildMedia;',{T,document});
const buildSpace=vm.runInNewContext(body(read('space-building.js'))+';buildSpace;',{T});
const addTeachingExteriors=vm.runInNewContext(body(read('teaching-exteriors.js'))+';addTeachingExteriors;',{T,batchStatic,buildMedia,buildSpace});
const addTeachingInteriors=vm.runInNewContext(body(read('learning-interiors.js'))+';addTeachingInteriors;',{T,document});
const palette=()=>Object.fromEntries(['stone','paving','blue','timber','glass','glow','plaster'].map(k=>[k,new T.MeshStandardMaterial()]));
afterEach(()=>vi.restoreAllMocks());
test('entry builds both placed exterior shells without fetching models or generating learning rooms',()=>{
 const images=vi.spyOn(T.TextureLoader.prototype,'load').mockImplementation(()=>new T.Texture()),scene=new T.Scene();
 const root=addTeachingExteriors(scene,palette());
 expect(root.children.map(o=>o.position.toArray())).toEqual([[-4,0,-37],[18,0,-53]]);
 expect(root.children.map(o=>o.rotation.y)).toEqual([Math.PI,-Math.PI/2]);
 expect(root.children.map(o=>o.scale.x)).toEqual([.9,.85]);
 for(const shell of root.children){expect(new T.Box3().setFromObject(shell).getSize(new T.Vector3()).length()).toBeGreaterThan(20);expect(shell.getObjectByName('Media learning rooms')).toBeUndefined();expect(shell.getObjectByName('SPACE learning hall')).toBeUndefined();}
 expect(images.mock.calls.map(args=>args[0])).toEqual(['environment/assets/media-mural-sharp-v2-lossless.webp','environment/assets/SPACE-reference.jpg']);
});
test('repeated entry and full detail preserve exterior identities and add each learning room once',()=>{
 vi.spyOn(T.TextureLoader.prototype,'load').mockImplementation(()=>new T.Texture());const scene=new T.Scene(),p=palette(),root=addTeachingExteriors(scene,p),shells=[...root.children],geometry=shells.map(o=>o.children[0]);
 addTeachingInteriors(...shells,p);const details=shells.map(o=>o.children.at(-1));
 expect(addTeachingExteriors(scene,p)).toBe(root);addTeachingInteriors(...shells,p);
 expect(root.children).toEqual(shells);expect(shells.map(o=>o.children[0])).toEqual(geometry);expect(shells.map(o=>o.children.at(-1))).toEqual(details);
 expect(shells.map(o=>o.children.length)).toEqual([2,2]);expect(details.map(o=>o.name)).toEqual(['Media learning rooms','SPACE learning hall']);
 expect(details.every(o=>o.children.length>50)).toBe(true);
});
