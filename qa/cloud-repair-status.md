# Test copy repair status

Updated 2026-10-12 15:54 UTC. Environment tools responded successfully after
the reported platform disconnect; no fresh checkout was needed. Target: `taniab1975/test-career-empire` (1415756807).
Initial checkout: `cb05d4ef12addb53f0c744655bfbb19261f18671`, from ECC
`b596b0e760dc0949afd120d74166cb19797abfa2`. No production deployment.

## Checked

- Locked dependencies installed with `npm ci`; no dependency changes.
- Seed source/release checks: 269 exact asset hashes, 81 reachable modules.
- Seed: 187 unit tests passed. Current repair: 190 unit tests passed.
- System Chromium 154.0.8037.57 launched with `chromiumSandbox: true` outside
  the workspace command wrapper. No OS security or sandbox changes.
- Seed grass-failure browser regression reproduced: entry at 22.240 s;
  first campus render 22.724–24.673 s (1.949 s). Retry executed, recovery
  exceeded its unchanged deadline; diagnostics reported 0 FPS.
- Botanical staging reduced first campus render to 14.996–15.256 s (0.260 s)
  in a subsequent run. That run still failed texture recovery and is not
  acceptance proof.
- Teaching exteriors instantiate with original positions, rotations, scale
  and mural assets. Repeated entry/detail keeps exterior identities and adds
  each learning room once; focused units pass.

- The texture reservation repair drained pending surfaces to zero and restored
  grass after Retry. A remaining warning-visibility failure was patched;
  the unchanged browser regression is being rerun.
- Early desktop/phone handover checks exceeded the 8-second target (10.51 s
  and 12.02 s); lightweight module prefetch now begins alongside avatar assets.

## Repairs under verification

- Media/SPACE exterior shells and collision boundaries are available at entry.
  Their learning rooms and tree belt load later into reused roots.
- Arrival and courtyard botanical geometry is deferred to full campus detail;
  exterior architecture, paths and collision remain in the entry stage.
- Animation yields a completed GPU frame to a waiting original-texture upload,
  preventing the animation callback from repeatedly taking its opportunity.
- Startup polls log Node start/end, page sample time, URL and run ID; page errors
  are logged immediately. Existing Retry deadlines/assertions are unchanged.
- `playwright.cloud-sandbox.config.mjs` runs the installed system browser with
  its sandbox enabled. Campus fixtures preserve supplied launch options.

## Failed / environment limits

- Within the workspace wrapper, Chromium's SUID helper is mapped to `nobody`,
  causing its root-ownership check to abort. Approved execution outside that
  wrapper successfully launches the browser with its own sandbox enabled.
- Playwright managed Chromium download: HTTP 403 `Domain forbidden` from
  `cdn.playwright.dev`. No alternate download or security bypass used.
- Software WebGL backend is ANGLE Vulkan SwiftShader; real movement and visible
  renders, not readiness publication alone, remain the acceptance criteria.

## Not yet accepted / next checks

Active focused browser checks: real intro video → Start exploring → both
exterior shells in view → keyboard movement → automatic parcel, at desktop
and phone widths; failed grass surface → Retry → restored original surfaces.

After startup passes: chapel exit → mural clue; mural photo → oval clue; distinct
photo styles and held preview before companion; visible companion; persistent
teachers; live minimap; stats/earnings; Market entry/exit and Market Admin.
The full browser suite has not been run.

Local generated logs, screenshots and JSON are under ignored `coverage/`.
Run focused checks with `npx playwright test --config playwright.cloud-sandbox.config.mjs`.
