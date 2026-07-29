# Step 07 — Motion, responsive behaviour, and accessibility

**Status:** Not started
**Depends on:** Steps 02–06

## Business outcome

The complete page feels premium while remaining responsive, controllable, and comfortable for every visitor.

## Scope

- Final cross-section choreography.
- Motion tokens and shared reveal primitives.
- Desktop sticky episode.
- Masks, scaling, transitions, hover details, and desktop cursor.
- Purpose-built mobile sequences.
- Global reduced-motion behaviour.
- Focus, contrast, landmarks, labels, and reading-order audit.

## Acceptance criteria

- Motion uses Motion for React and CSS only.
- No scroll hijacking, decorative WebGL, Lenis, or GSAP.
- No interaction requires hover, pointer precision, or animation.
- Reduced-motion mode removes nonessential movement and keeps state changes immediate.
- No horizontal overflow from 320 px upward.
- Keyboard focus is always visible.
- Layout remains stable during font load and animation.

## Verification

- Browser QA on desktop, mobile, keyboard, touch, and reduced-motion.
- Console health check.
- Target-flow interaction evidence.
- Lighthouse accessibility check.
