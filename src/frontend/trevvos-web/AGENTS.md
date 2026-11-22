# Trevvos Web - Agent Instructions

## Scope

These instructions apply to `src/frontend/trevvos-web`.

This project is the public Trevvos web portal.

Do not modify the Trevvos backend when implementing frontend tasks unless the task explicitly requires a contract change.

Do not modify `src/frontend/kmone-landing` or `src/frontend/kmone-proxy` unless explicitly requested.

## Technology

- Use Next.js App Router with static export (`output: "export"`).
- Use TypeScript.
- Use React and preserve the existing interactive components.
- Keep images compatible with static hosting (`images.unoptimized: true`).
- Avoid adding libraries unless they solve a concrete requirement.
- Do not add SSR, API Routes or Server Actions without revisiting the static hosting decision.

## Architecture

- Keep page-level components separated from reusable UI components.
- Keep backend access behind services or API clients.
- Do not couple UI components directly to future backend implementation details.
- Allow frontend development with local/mock data while backend contracts are unavailable.
- Avoid premature abstractions and speculative architecture.
- Record architectural decisions with lasting impact as ADRs.

## Product

Trevvos is the company/platform.

Current products presented by the public portal are:

- KM One
- Trevvos Commerce (in development)

Preserve the approved institutional content and the separate KM One application.

The public portal must not make unsupported claims or guarantees about earnings, rides, demand, AI capabilities, or product availability.

## UX and Design

- Build mobile-first and responsive interfaces.
- Maintain a dark, technical, product-oriented visual identity.
- Prefer a software/product environment over a generic corporate website aesthetic.
- Accessibility is part of the Definition of Done.
- Use semantic HTML.
- Ensure keyboard usability and visible focus states.
- Respect reduced-motion preferences when adding animations.

## SEO

Public content must support search-engine indexing.

Use meaningful titles, headings, metadata, semantic structure, and crawlable content.

Do not place essential SEO content exclusively behind client-side interactions.

## Quality Gates

For frontend changes, run the appropriate project checks before declaring the task complete.

At minimum, when applicable:

- install dependencies using the repository lockfile
- build the Next.js application and verify `out`
- run automated tests
- run linting if configured

Never claim a command passed unless it was actually executed.

## AI Development Rules

- Read the relevant specification before implementation.
- Do not implement requirements that are not in the approved specification.
- Surface ambiguities instead of silently inventing product behavior.
- Prefer small, reviewable changes.
- Explain meaningful deviations from the approved plan.
- Treat generated code as untrusted until validated by tests and review.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
