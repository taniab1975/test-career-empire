# Test copy repair status

Updated 2026-10-12 20:17 UTC. Only `taniab1975/test-career-empire`
(GitHub ID 1415756807) is authorized. Seed
`cb05d4ef12addb53f0c744655bfbb19261f18671` came from ECC
`b596b0e760dc0949afd120d74166cb19797abfa2`. The Mac candidate was not
imported. No production repository or deployment was changed.

## Checked

| Check | Result / evidence |
| --- | --- |
| Locked dependencies and source | Installed; source checks pass; 270 exact hashes, 82 runtime modules |
| Units | 213 passed in 49 files on the latest repairs; seed had 187 |
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
| Stats money/collection, desktop and phone | Both default cases passed after foreground module priority; savings/withdrawal, one-time giving and retained plant/ticket tested; screenshot shows $12 wallet and $4 contributions |
| Administration curriculum, desktop and phone module harness | Both passed: reception, two sources, 6/6 customer-group rehearsal, application review; $18 wallet retained |
| Actual desktop keyboard entrance to Administration | Passed in 72.0 s: west doorway → reception → Nora/Signal or Spin → opportunities → Market return; same run and $18 retained; screenshots inspected |
| Pending Market → Character Studio, then late import finishes | Browser passed in 17.3 s; Studio stays visible, rendering continues and late completion cannot change destination |
| Paused Stats metadata and honest frame counter | Browser passed in 38.3 s; actual Save $5 updates UI and diagnostics ($18 → $13, savings $5) while frame count remains 40 |
| Physical walking Market gate, two cycles | Passed in 96.5 s within original 120-second budget; same run, accepted shift/events unchanged; clear outside-player screenshot inspected |
| Mara progressive briefing | Passed in 89.8 s: walking, real 768px images, pause/next, skip/replay, accept and progressive signs |
| Actual guest initiative shift | Passed in 73.1 s: real walking/setup/trial/inspection/learning handover; $18 net, $2 community contribution and crew pass; repeat pay unavailable/events unchanged |
| Actual mural shot → natural keyboard oval arrival → visible teachers | Passed in 78.6 s from explicit post-Chapel fixture; preload 41 ms after shot, ready at 8.047 s, ready 14.972 s before arrival; both actual models visibly rendered |
| Review failure/retry units | Six runtime regressions and cancellation/deadline helper checks pass; automatic teacher-module retry is bounded and explicit retry recovers |

Entry evidence: `qa/cloud-startup-evidence.json`. Companion scene bounds and
rendered-frame evidence: `qa/cloud-companion-evidence.json`. Market phases and network timings:
`qa/cloud-market-evidence.json`. Logs and screenshots
remain under ignored `coverage/`; the companion screenshots are preserved in
`coverage/companion-bounds-evidence/` and `coverage/companion-rendered-evidence/`.
Market and photo evidence is retained in `coverage/market-transition-after-evidence/`
and `coverage/photo-market-after-evidence/`.
Latest acceptance and review-fix results: `qa/cloud-acceptance-checkpoint.json`.
Admin screenshots and logs: `coverage/batch-admin-walk-after-evidence/` and
`coverage/batch-admin-walk-after.log`. A bounded final entry/Chapel/photo smoke is currently running; its result will
be recorded before the next checkpoint. Environment commands/files/browser remained
available after the reported 19:44 disconnect; no restart occurred.
Latest student journey evidence: `qa/cloud-student-journeys.json` and
`coverage/journeys-final-focused-evidence/`.

## Failed / incomplete

- Chapel keyboard approach reaches the real doorway; interior entry and the
  colourful mural clue appear in evidence. The strict 90-second end-to-end case
  still fails on software rendering. Separately, the explicit post-Chapel mural
  shot → oval clue → natural keyboard arrival → visible teachers case passed
  in 78.6 s; the complete uninterrupted intro/Chapel path remains separate.
- Earlier photo cases exhausted the 120-second total deadline at Market. The
  instrumented baseline and latest repaired case pass, but the latter still
  approaches that budget on software graphics. A 55-second gap across companion
  Skip and return-to-photo controls preceded the repaired handoff in the latest
  run; further UI/render profiling is warranted. No deadline was increased.
- Earlier returning-photo teacher parsing took 30.9 s. Natural arrival is now
  measured separately: no teacher requests before the real mural shot; both
  loaded by 8.047 s after the shot and were ready 14.972 s before the normal
  keyboard arrival. The visible invitation screenshot confirms both models.
  No teacher preload is introduced before the Chapel/mural checkpoint.
- The first companion check sampled zero in-frustum meshes immediately after
  readiness. Runtime unchanged, the bounds/screenshot rerun passes. Acceptance
  now polls actual in-view geometry, active-scene parenting and rendered-frame
  advancement within the same 30-second waits and 90-second total deadline.
- Persistent teacher revisit: latest rerun passed cancellation and two actual
  greetings for each teacher after repairing elapsed greeting time. It failed
  opening Options (unchanged 5-second click limit) at 176.0 s before photo and
  Market/module returns; those remaining persistence stages are not accepted.
- The combined delayed-Market/retry/walking regression exhausts its unchanged
  60-second total budget. It recovers from the 15-second import deadline and
  retries into Market; the failure snapshot shows opening=false and actual
  keyboard travel to z=5.257. The whole timing case remains failed.
- Persistent teacher revisit failed its first 60-second invite wait before the
  latest cinematic timing/travel-priority repair. Its failure snapshot eventually
  shows invite and both teachers visible; the complete return/reaction path is
  not accepted. The later rerun passes the invite/cancellation/repeated greetings,
  then fails opening Options; this does not establish complete persistence.
- Phone versions of the latest journey checks, phone keyboard Admin entry and
  the stronger Stats tax-history assertion rerun remain pending. Earlier fresh
  startup/photo passes have not been repeated after the latest timing repairs.

## Latest student journey repairs

The Market roof overhang extended beyond its wall collider and blocked the
outside camera. Collision-checked view recovery now avoids that volume without
moving the player or bypassing walls. A pending physical exit also respects a
newer navigation request. The live-keyboard gate driver retains the same event
and reward assertions; optional access waits for the new diagnostic snapshot
rather than throwing during a Town-to-Market publication boundary.

The nine-second Market group and the teacher camera reveal used a physics-style
0.25-second elapsed clamp. Slow software frames made the observation and reveal
much longer than their real durations. Those visible sequences now follow elapsed
time; hidden tabs still skip updates/reset their clocks. Requested trail travel
holds the previous visible scene while its assets prepare. Actual customer
results, wages and visible teachers pass their unchanged acceptance waits.

## Independent review repairs

Market travel now has navigation ownership, immediate cancellation and a bounded
15-second import deadline. Choosing another destination releases the old render
hold; late completion cannot construct/switch scenes. Failure uses a fresh retry
URL, and old completion cannot clear a newer request. Controlled unit cases and
the real Character Studio detour pass.

Teacher-module failure now records attempts/backoff separately from individual
NPC failures. Automatic retries use fresh URLs and stop after three failures;
explicit student retry can recover. Each module request now has a monotonic
generation independent of the bounded automatic retry budget, including repeated
manual failures. Success clears module failure state and
retains the shared request/no-duplicate cast guards. The repeated manual failure/restored-availability unit passes; browser
module-failure recovery remains pending. Natural mural-to-oval arrival passes
in 78.6 s with actual models and keyboard movement.

Diagnostics publish lightweight metadata on their own one-second cadence even
when rendering is cached. Image bytes are omitted from debug snapshots. The
frame counter only increments after a scene render, and pixel readback remains
an explicit rendered-frame diagnostic. Paused software UI retains the current
camera and does not redraw just because a decorative texture arrives. Actual
visible UI, screenshots and movement remain separate acceptance evidence.

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

Read-only Pages inspection: the public test repository reports `has_pages=false`,
homepage=null, zero Actions runs and no tracked workflow files. Pages deployment
is not configured. Evidence: `qa/cloud-pages-status.json`. No account, security,
connector or hosting setting was changed. A minimal static export/activation plan
is in `qa/cloud-deployment-plan.md`; repository admin access is verified, while
connector Pages/Administration API write scopes are unverified.

Commands and files are responsive. Managed Chromium download is blocked by HTTP
403 `Domain forbidden` from `cdn.playwright.dev`. Inside the workspace wrapper,
SUID helper ownership maps to `nobody` and Chromium aborts. Approved execution
outside that wrapper launches the system browser with its sandbox enabled. No
browser sandbox, OS security, credentials or connector grants were altered.

Software rendering remains slow; these results do not establish native-hardware
smoothness. Full browser-suite testing is deferred. No browser session is running at this
checkpoint. Next bounded work: post-repair persistent teacher revisit and module
retry, phone journey coverage and fresh startup/photo acceptance; then validate
the proposed static deployment export. The parent requested this checkpoint after
the current test; a full suite is not running.
Use `npx playwright test --config playwright.cloud-sandbox.config.mjs` with the
sandbox-preserving approved execution path. No production deployment is claimed.
