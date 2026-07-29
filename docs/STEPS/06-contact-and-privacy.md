# Step 06 — Contact and privacy

**Status:** Not started
**Depends on:** Steps 02–05

## Business outcome

A visitor can send a concise inquiry, and LubartLab receives it securely with transparent data handling.

## Scope

- Contact fields: name, email, task type, and privacy consent.
- Task-type allowlist.
- `POST /api/contact` on the Node.js runtime.
- Server-side schema validation, length limits, origin check, honeypot, and generic errors.
- BotID Basic protection.
- Resend internal notification and visitor `Reply-To`.
- Loading, validation, failure, and polished success states.
- `/privacy` with the accepted controller, processors, purpose, retention, and rights information.
- Vercel WAF form rule staged in log mode, reviewed, then enforced.

## Acceptance criteria

- Valid production submission reaches `lubartlab@gmail.com`.
- No automatic visitor email is sent.
- Invalid, bot-classified, cross-origin, or rate-limited submissions do not invoke Resend.
- Form values never appear in application logs.
- Consent is required and links to `/privacy`.
- Form is keyboard and screen-reader usable.
- Success and error states do not depend on animation.
- `/privacy` is `noindex`.

## Verification

- Vitest coverage for schema, mapping, sanitisation, and email payload generation.
- Playwright success, validation, failure, keyboard, and reduced-motion flows with Resend mocked.
- One controlled real production submission after deployment.
- Review BotID and WAF traffic without inspecting form values.
