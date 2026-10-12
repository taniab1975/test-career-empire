# Test copy repair status

Updated 2026-10-12 17:59 UTC. Only `taniab1975/test-career-empire`
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
| Held photo before companion, optional Skip, Mystery/Comedy distinction | Latest actual UI case passed these assertions, including PNG images and pixel difference > 10; whole case fails later at Market handoff |
| Visible Sprout in campus and Market | Focused check passed twice (63.9 s; rendered-observation rerun 80.2 s); screenshots inspected; mesh in view, correct active-scene parent and advancing rendered frames |

Entry evidence: `qa/cloud-startup-evidence.json`. Companion scene bounds and
rendered-frame evidence: `qa/cloud-companion-evidence.json`. Logs and screenshots
remain under ignored `coverage/`; the companion screenshots are preserved in
`coverage/companion-bounds-evidence/` and `coverage/companion-rendered-evidence/`.

## Failed / incomplete

- Chapel keyboard approach reaches the real doorway; interior entry and the
  colourful mural clue appear in evidence. The strict 90-second end-to-end case
  still fails on software rendering. Mural photo → oval clue is not accepted yet.
- The corrected photo case reaches both saved styles and held review, then
  exhausts its unchanged 120-second total deadline while waiting for Market;
  latest diagnostic mode remains `town`. This handoff needs phase timing and
  immediate page-error logging to determine the remaining cost.
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

## Environment and next action

Commands and files are responsive. Managed Chromium download is blocked by HTTP
403 `Domain forbidden` from `cdn.playwright.dev`. Inside the workspace wrapper,
SUID helper ownership maps to `nobody` and Chromium aborts. Approved execution
outside that wrapper launches the system browser with its sandbox enabled. No
browser sandbox, OS security, credentials or connector grants were altered.

Software rendering remains slow; these results do not establish native-hardware
smoothness. Full browser-suite testing is deferred. No browser session is running at this checkpoint. Next bounded work: measure
natural mural-to-oval teacher readiness, run teacher persistence, then focused
physical Market/Admin checks.
Use `npx playwright test --config playwright.cloud-sandbox.config.mjs` with the
sandbox-preserving approved execution path. No production deployment is claimed.
