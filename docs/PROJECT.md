# LubartLab landing: project brief

**Status:** foundation
**Language:** Ukrainian only
**Canonical URL:** `https://lubartlab.com.ua`
**Last updated:** 2026-07-29

## Purpose

Build a short, premium, highly visual production landing page for LubartLab.

LubartLab is an active studio that accepts work. This particular deployment is also a noncommercial, production-like learning and portfolio project intended to demonstrate how a real studio landing is designed, engineered, operated, and verified. If the site becomes an active commercial acquisition channel, the hosting plan and compliance assumptions must be reviewed.

## Audience

Ukrainian small and medium businesses that need more than a brochure page: a business website, an online store, an internal web tool, or integrations with third-party services.

## Positioning

Core direction:

> Створюємо вебрішення, на яких працює бізнес.

LubartLab is an AI-powered company. AI is described as a working method that helps automate routine tasks, shorten iteration cycles, improve repeatability, and support quality checks. It is not sold as a separate service, and final decisions and responsibility remain with people.

## Public offer

The v1 offer has exactly three directions:

1. **Business websites** — corporate, service, and product websites.
2. **E-commerce** — catalogues, orders, payments, and delivery integrations.
3. **Web solutions and integrations** — accounts, internal tools, automation, and third-party services.

The following are not core v1 services:

- branding;
- advertising;
- SEO promotion;
- mobile applications;
- CRM implementation.

CRM may appear as one integration example, but it is not a positioning focus.

## Homepage structure

1. Header with anchor navigation and form CTA.
2. Hero with the main value proposition and restrained AI-powered signal.
3. “What we build” with the three offer directions.
4. “How we work” with the AI-assisted but human-owned process.
5. “Selected work” with two or three honest “Кейс готується” placeholders.
6. Contact section with the production form and public email.
7. Minimal footer.

Separate v1 routes:

- `/privacy` — short privacy notice, linked from the form and footer.

No team page, technology catalogue, testimonials, pricing, blog, FAQ, or multilingual routes in v1.

## Contact flow

Form fields:

- name;
- email;
- task type.

Task types:

- business website;
- e-commerce;
- web solution;
- integration;
- not sure yet.

The visitor must accept the privacy notice. There is no task description, phone, company, budget, timeline, attachment, CRM record, or automatic response email.

Submission path:

1. Client submits to `POST /api/contact`.
2. Server validates allowed fields, lengths, origin, honeypot, and BotID Basic result.
3. Vercel WAF applies a per-IP form rate limit.
4. Resend sends one internal notification from `forms@send.lubartlab.com.ua`.
5. `lubartlab@gmail.com` receives the message; the visitor’s email is used as `Reply-To`.
6. The page shows a polished success state.

No form values are written to application logs or a database.

## Privacy

Data controller:

**ФОП Прокоф'єв Максим Олександрович**

The full controller name appears only on `/privacy`. The homepage uses the LubartLab brand. v1 does not publish a tax number or physical address.

Public privacy commitments:

- submissions are used only to answer the inquiry;
- no marketing reuse;
- inactive inquiries are deleted within six months;
- active correspondence is retained only while needed for communication or legal obligations;
- the page discloses Resend, Vercel hosting, BotID, and every analytics product that is active at release time.

## Visual direction

- Preserve the `L.` mark.
- Palette: orange `#F97316`, graphite `#09090B`, white, and warm paper `#F6F5F2`.
- Fixel Text is the body and interface face.
- Fixel Display SemiBold is the heading face.
- Large kinetic Ukrainian typography, a hard grid, whitespace, system diagrams, and UI fragments.
- One strong sticky-scroll episode on desktop.
- Masks, reveals, scaling, transitions, magnetic or hover details, and a desktop-only custom cursor.
- No photography, AI-generated people, decorative 3D, or WebGL in v1.

Mobile receives its own simplified choreography: sequential reveals, vertical diagrams, smaller and faster movement, no cursor dependency, and no scroll hijacking.

## Design process

Visual implementation has a mandatory design gate:

1. Create and approve art direction.
2. Approve hero concepts for desktop and mobile.
3. Approve concepts for the remaining sections.
4. Implement one approved business block at a time.
5. Compare rendered output with the approved concept and record intentional deviations.

The technical holding page is not an approved design concept and must not become the production landing by inertia.

## Technical architecture

- Next.js App Router and TypeScript.
- Node.js 24 and pnpm.
- Tailwind CSS plus CSS custom properties and plain CSS for masks, pseudo-elements, and keyframes.
- `next/font/local` for Fixel.
- Motion for React as the only JavaScript motion library.
- CSS transitions and keyframes for simple decorative motion.
- Native scrolling and CSS sticky positioning.
- No shadcn, ready-made component library, GSAP, Lenis, or Three.js.
- Node.js runtime for server routes.

## Quality bar

- Green Core Web Vitals in production.
- Lighthouse target of at least 90 for Performance, Accessibility, and SEO.
- No avoidable layout shift, input lag, horizontal overflow, scroll trap, or animation-dependent interaction.
- Keyboard-visible focus and meaningful semantic structure.
- Full `prefers-reduced-motion` support.
- Desktop and mobile browser QA after every visual step.

## Hosting and release

- Reuse Vercel project `lubart-lab-landing`.
- Vercel team: `anffuns-projects`.
- Hobby plan is accepted for this noncommercial learning deployment.
- No preview deployments.
- Vercel Git auto-deployments are disabled.
- GitHub Actions deploys every commit pushed to `main`, including documentation-only changes, with a pinned Vercel CLI.
- The production workflow has no manual trigger, path filter, conditional bypass, or accepted skip marker.
- GitHub stores a dedicated Vercel CI token scoped to `anffun's projects`; rotate it by 2027-07-29.
- CI runs install, lint, typecheck, unit tests, production build, E2E, Vercel prebuild/deploy, and a production smoke check.
- `https://lubartlab.com.ua` is canonical.
- `www.lubartlab.com.ua` and `lubart-lub.vercel.app` return permanent redirects to canonical.

## Analytics and observability

- Vercel Web Analytics for anonymous page views.
- The Speed Insights integration remains in the codebase, but collection is disabled for LubartLab.
- The single Hobby Speed Insights slot remains assigned to `freelance-docs-generator`; this project does not move or replace it.
- No Google Analytics, Meta Pixel, third-party tracker, custom analytics events, or PII in analytics.
- v1 operational diagnostics use Vercel runtime logs and Resend delivery logs without form values.

## Out of scope for the current foundation

- Final copy.
- Approved section designs.
- Homepage sections beyond the holding page.
- Contact form implementation.
- `/privacy` implementation.
- Motion choreography.
- Real case-study content.
- Production search indexing while the holding page is live.
