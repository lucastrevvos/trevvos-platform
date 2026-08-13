# Trevvos Web - Agent Instructions

## Scope

These instructions apply to `src/frontend/trevvos-web`.

This project is the public Trevvos web portal.

Do not modify the Trevvos backend when implementing frontend tasks unless the task explicitly requires a contract change.

Do not modify `src/frontend/kmone-landing` or `src/frontend/kmone-proxy` unless explicitly requested.

## Technology

- Use Angular.
- Use TypeScript.
- Do not introduce React.
- Prefer Angular platform capabilities before adding third-party dependencies.
- Avoid adding libraries unless they solve a concrete requirement.
- Keep the application compatible with its existing Angular toolchain.

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
- Trevvos Flow

KM One is currently the primary product.

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
- build the Angular application
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
