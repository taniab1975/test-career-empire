# Test copy repair status

Updated 2026-10-12 16:08 UTC. Only `taniab1975/test-career-empire` (1415756807).
Seed `cb05d4ef12addb53f0c744655bfbb19261f18671` came from ECC
`b596b0e760dc0949afd120d74166cb19797abfa2`. Repairs were implemented here;
the untransferred Mac candidate was not imported. No production deployment.

## Checked

| Check | Result |
| --- | --- |
| Locked dependency install | Passed; dependencies unchanged |
| Seed source/release verification | 269 exact hashes, 81 runtime modules |
| Current units | 191 passed (seed: 187) |
| Browser launch | Chromium 154.0.8037.57 with `chromiumSandbox: true` |
| Failed grass → Retry → original surfaces restored → warning hidden | Existing browser regression passed; deadlines/assertions unchanged |
| Desktop video → Start exploring → both exteriors in view → walking → automatic parcel → Chapel picture development | Passed; measured handover 6.847 s; player z 23.3 → 16.522; rendered frame 72 → 92 |
| Phone equivalent, 390 × 844 | Passed; rerunning with the latest bounded movement catch-up |
| Real Rapier collision and repeated teaching detail | Passed; walls stop travel, parcel route stays open, roots/colliders reused |

The captured desktop evidence is in `qa/cloud-startup-evidence.json`.
Software graphics remain slow (the initial diagnostic sample rounded FPS to 0);
acceptance includes actual rendered frames and keyboard travel, not readiness alone.
Native hardware and explicit High retain their existing rendering budget.

## Repairs

- Complete Media/SPACE silhouettes and their collision boundaries at entry;
  learning rooms and tree belt deferred, with existing mural artwork retained.
- Arrival/courtyard botanical geometry deferred to full campus detail;
  architectural shells, paved paths and doors remain at entry.
- Lightweight exterior modules fetch while the selected avatar has asset priority.
- Waiting original-texture uploads reserve the next completed GPU opportunity;
  animation no longer repeatedly takes it first.
- Successful Retry clears its completed warning immediately.
- Auto on a detected software renderer uses a 0.5 pixel ratio and omits expensive
  shadows. Hardware Auto and explicit High are unchanged.
- Slow rendered frames retain up to 0.5 s of fixed-step movement catch-up;
  collision still advances at 60 Hz and long stalls stay bounded.
- Startup polls log Node start/end, page time, URL and run ID; page errors are immediate.

## Environment / earlier failures

The empty saved checkout was fetched successfully. Managed Chromium download
was denied with HTTP 403 `Domain forbidden` from `cdn.playwright.dev`.
Inside the workspace wrapper, SUID ownership maps to `nobody` and Chromium aborts.
Approved execution outside that wrapper launches Chromium with its own sandbox
explicitly enabled. No sandbox, OS security, credentials or grants were changed.
Tools remained responsive after the platform's reported disconnect.

The seed browser run reached entry at 22.240 s and rendered its first campus
frame in 1.949 s. Geometry staging reduced a subsequent first render to 0.260 s,
but texture recovery still failed until scheduling and warning clearing were repaired.
Early handover/movement checks failed their strict budgets; those failures prompted
runtime repairs. Existing acceptance deadlines were not increased.

## Running / not yet accepted

Twelve focused checks are running sequentially: complete natural intro and actual
Chapel exit → mural photo → oval clue; held photo preview and distinct saved styles;
visible companion; teacher persistence; live minimap; wallet/rewards; physical Market
exit/re-entry; Market Admin modules and keyboard doorway travel; latest phone startup.

The full browser suite has not been run. Generated logs, screenshots and JSON
remain under ignored `coverage/`. Use
`npx playwright test --config playwright.cloud-sandbox.config.mjs` for focused checks.
