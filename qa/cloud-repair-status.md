# Test copy repair status

Updated 2026-10-12 18:14 UTC. Only `taniab1975/test-career-empire`
(GitHub ID 1415756807) is authorized. Seed
`cb05d4ef12addb53f0c744655bfbb19261f18671` came from ECC
`b596b0e760dc0949afd120d74166cb19797abfa2`. The Mac candidate was not
imported. No production repository or deployment was changed.

## Checked

| Check | Result / evidence |
| --- | --- |
| Locked dependencies and source | Installed; source checks pass; 270 exact hashes, 82 runtime modules |
| Units | 202 passed on the latest runtime repairs; seed had 187 |
| Supported browser | Chromium 154.0.8037.57, `chromiumSandbox: true` |
| Desktop intro video → Start exploring → exterior campus → actual walking → automatic parcel → develop Chapel picture | Passed; handover 6.847 s; player z 23.3 → 16.522; rendered frame 72 → 92 |
| Phone startup at 390 × 844 | Earlier focused check passed; not repeated after the later teacher/photo changes |
| Failed grass → Retry → original surfaces and warning recovery | Existing regression passed with unchanged assertions/deadlines |
| Entry/full geometry and real Rapier collisions | Passed; exterior roots and colliders reused; parcel route open; walls stop movement |
| Full-campus visible aerial transition | Passed; learning rooms and surrounding detail render; no page errors |
| Both real teacher models and required animations | Browser asset/collision harness passed in 1.6 s |
| Prioritized integrated teacher loading | Probe passed in 44.5 s; module requested at 9.7 s, both teachers parsed by 30.9 s |
| Held photo before companion, optional Skip, Mystery/Comedy distinction | Whole actual UI case passed with its unchanged 120-second test timeout; reporter duration 120.5 s includes fixture/teardown; PNG previews, pixel difference > 10, optional Skip and Market handover |
| Full-campus photo → visible Market → keyboard walk to Mara → briefing opens | Focused check passed before/after repair; screenshot inspected; original 90-second total and interaction assertions retained |
| Visible Sprout in campus and Market | Focused check passed twice (63.9 s; rendered-observation rerun 80.2 s); screenshots inspected; mesh in view, correct active-scene parent and advancing rendered frames |

Entry evidence: `qa/cloud-startup-evidence.json`. Companion scene bounds and
rendered-frame evidence: `qa/cloud-companion-evidence.json`. Market phases and network timings:
`qa/cloud-market-evidence.json`. Logs and screenshots
remain under ignored `coverage/`; the companion screenshots are preserved in
`coverage/companion-bounds-evidence/` and `coverage/companion-rendered-evidence/`.
Market and photo evidence is retained in `coverage/market-transition-after-evidence/`
and `coverage/photo-market-after-evidence/`.

## Failed / incomplete

- Chapel keyboard approach reaches the real doorway; interior entry and the
  colourful mural clue appear in evidence. The strict 90-second end-to-end case
  still fails on software rendering. Mural photo → oval clue is not accepted yet.
- Earlier photo cases exhausted the 120-second total deadline at Market. The
  instrumented baseline and latest repaired case pass, but the latter still
  approaches that budget on software graphics. A 55-second gap across companion
  Skip and return-to-photo controls preceded the repaired handoff in the latest
  run; further UI/render profiling is warranted. No deadline was increased.
- Teacher parsing by 30.9 s is still too slow to claim ready-by-arrival. Automatic
  preload starts only in town after the mural checkpoint (step ≥ 3), within 28 m
  of the oval; it can advance while clue/options UI pauses movement. Natural
  journey readiness at arrival has not been measured. No teacher preload is
  introduced before the Chapel/mural checkpoint.
- The first companion check sampled zero in-frustum meshes immediately after
  readiness. Runtime unchanged, the bounds/screenshot rerun passes. Acceptance
  now polls actual in-view geometry, active-scene parenting and rendered-frame
  advancement within the same 30-second waits and 90-second total deadline.
- Persistent teacher cancellation, greetings, Market/module returns and replay:
  not run on the latest repairs.
- Live minimap, stats/earnings acceptance, physical Market exit/re-entry and
  Market Admin: not run on the latest repairs.

## Repairs already verified

Complete lightweight Media/SPACE shells and collision boundaries load at entry;
learning rooms, botanical and heavy surroundings wait until later. Roots are
reused. Original mural artwork and UV crops remain intact. Texture uploads reserve
GPU opportunities, and successful Retry clears its warning. Software Auto uses a
0.5 pixel ratio without expensive shadows; native hardware/High retain their
existing budget. Movement catches up at fixed 60 Hz for bounded slow frames.

Full detail is hidden until integration, software tree leaf coverage is bounded,
and instance batching preserves LOD level objects. Teacher assets get priority
before requested photo-campus detail; loading continues while movement is paused,
shares one request and has bounded per-teacher retry. Explicit capture opens
review first, reserves a GPU opportunity and encodes PNG asynchronously. Companion
choice remains behind Continue. The live minimap now updates per player pose.

## Market transition diagnosis and repair

The old campus continued drawing after the photo dialog closed, while dynamic
Market imports were waiting. Network responses took milliseconds. Import
resolution took 2.565 s in the focused baseline and 16.737 s in the complete photo
baseline; construction took only 154–197 ms. The requested transition now resets
movement, shows “Opening Sunday Market…” and preserves the existing visible
campus frame until the Market scene is selected. All Market geometry, character
assets, activities and original acceptance assertions remain available.

| Measure | Before | After |
| --- | --- | --- |
| Focused Market module import | 2.565 s | 0.031 s |
| Complete photo case Market import | 16.737 s | 0.050 s |
| Focused click → first render submission | 3.098 s | 0.534 s |
| Focused click → captured visible Market screenshot | 8.661 s | 8.892 s |
| Focused click → real walking and Mara briefing | 29.257 s | 29.741 s |
| Latest photo click → first completed Market GPU frame | Not instrumented | 1.639 s |

The screenshot timing includes browser capture overhead and later frames; it is
separate from first GPU completion. Both focused runs show the complete courtyard
and use actual keyboard movement to reach Mara. Software throughput remains
slow; the repair removes import starvation without establishing smooth hardware
performance. Immediate page errors and phase timings are recorded in the tests.

## Environment and next action

Commands and files are responsive. Managed Chromium download is blocked by HTTP
403 `Domain forbidden` from `cdn.playwright.dev`. Inside the workspace wrapper,
SUID helper ownership maps to `nobody` and Chromium aborts. Approved execution
outside that wrapper launches the system browser with its sandbox enabled. No
browser sandbox, OS security, credentials or connector grants were altered.

Software rendering remains slow; these results do not establish native-hardware
smoothness. Full browser-suite testing is deferred. No browser session is running at this
checkpoint. Next bounded work: Market Admin presence/access, physical entrance
and exit, Options resume, Stats/earnings and progressive Mara briefing; then
measure natural mural-to-oval teacher readiness and persistent revisits.
Use `npx playwright test --config playwright.cloud-sandbox.config.mjs` with the
sandbox-preserving approved execution path. No production deployment is claimed.
