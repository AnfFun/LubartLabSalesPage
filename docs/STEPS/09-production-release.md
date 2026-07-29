# Step 09 — Production release

**Status:** Not started
**Depends on:** Steps 01–08

## Business outcome

The approved landing safely replaces the holding page on the public production domain and can be shared as a finished production-like project.

## Scope

- Final content and decision audit.
- Production environment-variable verification by key name only.
- CI release from `main`.
- Canonical-domain promotion.
- Redirect, TLS, analytics, form, and privacy verification.
- Rollback readiness.

## Acceptance criteria

- GitHub Actions is the deployment source.
- Vercel Git integration creates no preview or automatic duplicate deployment.
- Production deployment is `READY` and matches the pushed commit SHA.
- `https://lubartlab.com.ua` returns the approved page over valid TLS.
- `www` and `lubart-lub.vercel.app` return `308` to canonical with paths preserved.
- The homepage is indexable and `/privacy` remains `noindex`.
- A controlled production form submission arrives successfully.
- Analytics and Speed Insights receive data without PII.
- No relevant runtime or browser-console error remains.
- A previous known-good deployment is available for rollback.

## Verification

- GitHub Actions log and deployment ID.
- HTTP status/header checks for all public hosts.
- Browser target flow: homepage → contact form → success state.
- Production mobile and desktop screenshots kept outside the repository.
- Final Lighthouse and Core Web Vitals evidence.
