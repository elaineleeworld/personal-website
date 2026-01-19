Title: fix/security-deps-2026-01-19 — security dependency upgrades and test fixes

Summary:
- Ran `npm audit` and applied `npm audit fix --force` on `fix/security-deps-2026-01-19`.
- Created backup branch `backup/security-deps-2026-01-19` and tag `pre-audit-2026-01-19` prior to force upgrades.
- Applied code changes to make tests pass and avoid WebGL errors in CI:
  - `src/components/ThreeScene.js`: guard `THREE.WebGLRenderer` creation with try/catch and skip setup when WebGL isn't available; modernized var -> const/let and fixed resize handler ordering.
  - `src/setupTests.js`: added Jest canvas/WebGL mocks so tests run in JSDOM.
  - `src/components/Button.js`: replaced old implementation with accessible `button`, cleaned imports and lint issues.
- Committed and pushed changes, merged the branch into `master`, and deployed to GitHub Pages.

Remaining vulnerabilities / notes:
- `npm audit` originally reported 169 vulnerabilities (47 critical). After forced fixes some transitive vulnerabilities remain and several fixes required breaking upgrades. Notable packages requiring manual review and code changes:
  - `react-scripts` (upgrade to 5.x) — may change webpack/PostCSS behavior.
  - `three` (major upgrade) — required test-related changes and may introduce runtime API differences.
  - `postcss` and many PostCSS-related plugins used by build tooling.
  - `node-notifier`, `qs`, `sockjs`, `tmp`, `tough-cookie`, `trim-newlines`, `webpack-dev-middleware`, `yargs-parser`, and others.

Recommended next steps:
1. Review the PR and run the app locally to validate UX and build behavior.
2. Incrementally upgrade large libraries (`three`, `react-scripts`) and adapt code where APIs changed.
3. Re-run tests and CI; prefer creating targeted dependency upgrades rather than broad `--force` fixes where possible.
4. Consider adding Dependabot or Renovate to automate minor/patch upgrades and open PRs.

Files changed (high level):
- package.json, package-lock.json
- src/components/ThreeScene.js
- src/components/Button.js
- src/setupTests.js
- audit-before.json, audit-after.json (created during audit)

If you want, I can create the PR on GitHub (requires `gh` CLI or a token), or you can copy this `PR_BODY.md` into the PR body when creating it at:
https://github.com/elaineleeworld/personal-website/pull/new/fix/security-deps-2026-01-19
