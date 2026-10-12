// Read-only phase observations; retain the normal student UI and game state.
export async function installMarketTimingProbe(page){
 page.on('console',m=>{if(m.text().startsWith('MARKET_PHASE '))console.log(m.text());});
 page.on('requestfinished',r=>{if(/\/(?:night-market|market-[^/]+)\.(?:js|mjs)(?:\?|$)/.test(r.url()))console.log('MARKET_NETWORK '+JSON.stringify({url:r.url(),timing:r.timing()}));});
 await page.addInitScript(()=>{
  window.marketTimings=[];
  window.recordMarketPhase=(phase,extra={})=>{const row={phase,pageMs:performance.now(),url:location.href,...extra};window.marketTimings.push(row);console.info('MARKET_PHASE '+JSON.stringify(row));};
  document.addEventListener('click',e=>{const b=e.target.closest('button');if(b&&['discovery-pose','discovery-continue','film-comedy','discovery-retake','discovery-market-handover','market-destination','resume-options'].includes(b.id))window.recordMarketPhase('click:'+b.id);},true);
 });
 await page.route('**/app.js?*',async route=>{
  const response=await route.fetch();let source=await response.text();
  const replace=(from,to)=>{if(!source.includes(from))throw Error('Market timing marker missing: '+from);source=source.replace(from,to);};
  const mark=phase=>`window.recordMarketPhase('${phase}');`;
  replace('if(marketOpening)return;marketOpening=true;',"if(marketOpening)return;marketOpening=true;"+mark('opening'));
  replace("if(!nightMarket){const {createNightMarket}=await import('./night-market.js?v=market-arrangement-20261012');nightMarket=createNightMarket(","if(!nightMarket){"+mark('module-requested')+"const {createNightMarket}=await import('./night-market.js?v=market-arrangement-20261012');"+mark('module-ready')+mark('construction-start')+'nightMarket=createNightMarket(');
  replace('});nightMarket.scene.environment=worlds.town.environment;', '});'+mark('construction-end')+'nightMarket.scene.environment=worlds.town.environment;');
  replace("await setMode('market');}",mark('set-mode-start')+"await setMode('market');"+mark('set-mode-end')+'}');
  replace('portraitCapturePending=true;', 'portraitCapturePending=true;'+mark('portrait-requested'));
  replace("frameGate=createGpuFrameGate(renderer,renderQuality(renderBackend,'auto',devicePixelRatio).software);", "frameGate=createGpuFrameGate(renderer,renderQuality(renderBackend,'auto',devicePixelRatio).software);const observeFrameReady=frameGate.ready;frameGate.ready=()=>{const ready=observeFrameReady();if(ready&&mode==='market'&&window.marketTimings.some(r=>r.phase==='market-render-submitted')&&!window.marketTimings.some(r=>r.phase==='market-gpu-complete'))window.recordMarketPhase('market-gpu-complete');return ready;};");
  replace('const oldSize=renderer.getSize(new THREE.Vector2()),oldRatio=',mark('portrait-gpu-ready')+'const oldSize=renderer.getSize(new THREE.Vector2()),oldRatio=');
  replace('renderer.render(worlds.town,shot);frameGate.submitted();',mark('portrait-render-start')+'renderer.render(worlds.town,shot);frameGate.submitted();'+mark('portrait-render-submitted'));
  replace("if(!blob)throw Error('Photo could not be encoded');", "if(!blob)throw Error('Photo could not be encoded');"+mark('portrait-encoded'));
  replace('lastRenderMs=performance.now()-renderStarted;frameGate.submitted();',"lastRenderMs=performance.now()-renderStarted;frameGate.submitted();if(mode==='market'&&!window.marketTimings.some(r=>r.phase==='market-render-submitted'))window.recordMarketPhase('market-render-submitted',{cpuMs:lastRenderMs,frame:renderer.info.render.frame,triangles:renderer.info.render.triangles});if(marketOpening&&mode!=='market')window.recordMarketPhase('old-scene-render-submitted',{cpuMs:lastRenderMs,frame:renderer.info.render.frame,triangles:renderer.info.render.triangles});");
  source+=`\nwindow.marketTransitionProbe=()=>({pageMs:performance.now(),mode,opening:marketOpening,frame:renderer?.info.render.frame,position:actor?.model.position.toArray(),market:nightMarket?.snapshot(),timings:window.marketTimings});`;
  await route.fulfill({response,body:source});
 });
}
