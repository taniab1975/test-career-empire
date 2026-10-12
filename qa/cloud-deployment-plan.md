# Personal test Pages deployment plan

This is a plan only for `taniab1975/test-career-empire` (1415756807).
Pages remains disabled. No public playable test URL is verified, and no hosting,
account, connector, credential or permission setting has been changed.

## Existing access

The connected repository metadata reports `admin=true`, `maintain=true` and
`push=true`. Tania therefore has the repository role needed to enable Pages
through her existing GitHub account; no additional collaborator grant is needed.
GitHub requires an administrator, maintainer or Pages-settings manager to create
a site. Its fine-grained API additionally requires Pages write and Administration
write permissions. [GitHub Pages API](https://docs.github.com/en/rest/pages/pages#create-a-github-pages-site).

Repository role does not establish the connector token's API scopes. The callable
tools expose no Pages create/update action; their generic fetch is read-only and
does not allow unlisted API endpoints. Token scopes cannot be verified here
without a supported capability. An agent-only activation therefore cannot be
promised under current access. The owner can use GitHub's Pages settings with
the already verified admin role; no new credential or connector grant is needed
for that owner action. No grant is being requested by this plan.

## Smallest publication approach

1. Prepare a static export in a dedicated `gh-pages` branch of this same test
   repository. Preserve the `playable-3d/`, `economy-lab/`, referenced `Assets/`
   and sibling module paths. Generate a root `index.html` linking to the game and
   an empty `.nojekyll` file. Do not publish the entire development tree.
2. Build the export from the verified release manifest, reachable runtime graph,
   HTML/CSS dependencies, dynamic avatar/helper catalog assets and linked course,
   My Life and Administration resources. Fail the export for missing files.
   The manifest currently contains 270 files totaling 176.9 MiB; that is a
   measured starting set, not yet a complete validated export.
3. Serve the export locally beneath `/test-career-empire/` and validate relative
   URLs, intro playback, campus walking, photo download, Market/Admin and My Life
   handoff. Verify dynamic imports, course documents and avatar choices, with no
   missing-request substitutions. Measure the completed export size.
4. After explicit deployment authorization, push the reviewed export branch and
   have the owner select `gh-pages` → `/` in this repository's Pages settings.
   Existing git push access can maintain the branch; the owner settings action
   supplies activation without changing connector scopes.
5. Confirm the Pages build and HTTPS site before calling any URL playable. Check
   the same student paths against the deployed site and record its commit/build.

The inspected directories contain about 318 MiB in `playable-3d/` and 731 MiB in
`Assets/` before the remaining repository files. Publishing that entire tree
would exceed Pages' 1 GB published-site limit. A selective export preserves the
requested game functionality while excluding unrelated development assets.
[GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).

Branch publishing requires its entry file at the source root. `.nojekyll`
preserves these static files without a Jekyll build. Pages supports the static
game, but the local Python test server itself is not deployed.
[Creating a Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

The expected game path after a verified deployment is
`/test-career-empire/playable-3d/`. This plan does not assert that path is live.
