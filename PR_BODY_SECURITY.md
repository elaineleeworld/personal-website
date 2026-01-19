Title: chore/security-hardening-2026-01-19 — static hardening and Dependabot

Summary of changes in this branch (`chore/security-hardening-2026-01-19`):

- Added a Content-Security-Policy meta tag and `Referrer-Policy` in `public/index.html` to restrict allowed sources and reduce XSS/inline script risk.
- Added a Dependabot config file (`.github/dependabot.yml`) to auto-open weekly npm dependency update PRs.
- Added `dompurify` to `package.json` and a small `src/utils/sanitize.js` wrapper to safely sanitize HTML when needed.

Notes and recommended follow-ups:
- I scanned the codebase for common dangerous patterns (`dangerouslySetInnerHTML`, `innerHTML`, `insertAdjacentHTML`) and found no direct uses. If you add user-generated HTML later, use `sanitizeHtml()` from `src/utils/sanitize.js` before rendering.
- The CSP in `index.html` is intentionally restrictive; it allows Google Fonts and self-hosted assets. If any resource is blocked after deployment, please let me know so I can tune the policy (or we can move CSP to server headers for finer control).
- Dependabot will open PRs weekly; review and test them incrementally.

Files changed (this branch):
- public/index.html (CSP + Referrer-Policy meta tag)
- .github/dependabot.yml
- package.json (added dompurify)
- src/utils/sanitize.js

PR creation:
- Create PR from `chore/security-hardening-2026-01-19` → `master` at:
  https://github.com/elaineleeworld/personal-website/compare/master...chore/security-hardening-2026-01-19?expand=1

If you'd like, I can try to create the PR via the GitHub API (requires a token), or you can paste this file into the PR body when creating it via the web UI.
