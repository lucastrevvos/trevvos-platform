# Implementation Plan: Public Trevvos Homepage

**Branch**: `001-trevvos-home` | **Date**: 2026-08-13 | **Spec**: `specs/001-public-homepage/spec.md`

**Input**: Feature specification from `specs/001-public-homepage/spec.md`

## Summary

Create the public Trevvos homepage inside the existing brownfield Angular application at `src/frontend/trevvos-web`. The implementation will replace the current technical placeholder homepage with semantic, generated Brazilian Portuguese HTML content that presents Trevvos as a product platform, gives KM One primary prominence, presents Trevvos Flow as a secondary product, and keeps CTAs bounded to the approved destinations: KM One links to `https://kmone.trevvos.com.br/`; Trevvos Flow navigates to its section on the same page.

The human architecture review explicitly approved Angular static prerendering / SSG for this public homepage. The approved rendering path is Angular -> static prerender / SSG -> generated HTML -> static hosting. This is not approval for dynamic SSR, a runtime Angular server, a Node server, backend rendering service or server-side application runtime. No backend, `kmone-landing`, `kmone-proxy`, React, CMS, UI framework, new state library or unrelated infrastructure changes are planned.

## Technical Context

**Language/Version**: TypeScript `~5.9.2`; Angular packages declared as `^21.2.0`; Angular CLI/build package declared as `^21.2.16`

**Primary Dependencies**: Angular platform packages (`@angular/common`, `@angular/core`, `@angular/platform-browser`, `@angular/router`, `@angular/forms`), RxJS `~7.8.0`, tslib `^2.3.0`; dev dependencies include `@angular/build`, Angular CLI, Vitest, jsdom and Prettier

**Storage**: N/A. Homepage content is static frontend content; no persistence, CMS or backend storage is required.

**Testing**: Existing `npm test` runs Angular unit tests through `@angular/build:unit-test` with Vitest globals configured in `tsconfig.spec.json`. Existing `npm run build` runs `ng build`. No lint script is configured in `src/frontend/trevvos-web/package.json`.

**Target Platform**: Public browser-based Angular application served as generated static HTML and browser assets on static hosting

**Project Type**: Brownfield Angular web application in a monorepo, scoped to `src/frontend/trevvos-web`

**Performance Goals**: Keep homepage lightweight and static. Generate core homepage content into HTML at build time. Avoid runtime data fetching for core content. Keep production build within existing Angular budgets: initial bundle warning `500kB`, error `1MB`; component style warning `4kB`, error `8kB`.

**Constraints**: Angular static prerender / SSG for the root homepage; no dynamic SSR or server-side application runtime; semantic, accessible, indexable core content present in generated HTML before client-side JavaScript executes; mobile-first responsive layout; dark, technical, product-oriented visual identity; no unsupported product claims; no Copiloto KM One mention; no backend or unrelated frontend changes; preserve existing Angular toolchain and npm package manager.

**Scale/Scope**: One public homepage route (`path: ''`) with a small number of homepage sections and CTAs. No additional product pages, auth flows, admin surfaces, CMS, API contracts or infrastructure.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **I. Product Truth**: PASS. Homepage claims are restricted to the approved spec and existing repository documentation. KM One and Trevvos Flow copy must avoid guarantees, availability claims, statistics, partnerships, awards or financial-result promises.
- **II. Small, Reviewable Changes**: PASS. Planned product implementation is limited to the existing `trevvos-web` homepage surface and related tests/metadata.
- **III. Evidence Before Completion**: PASS. Implementation validation will require `npm run build`, generated HTML inspection for the prerendered root route, `npm test`, manual accessibility review, manual product-truth review and mobile/desktop viewport review. No validation result may be claimed without execution.
- **IV. Human-Owned Architecture**: PASS. Human architecture review explicitly approved static prerender / SSG for this homepage only. Dynamic SSR, CMS, backend content delivery and broader rendering-architecture changes remain outside this decision and require separate human approval. No ADR is required for this feature per human instruction.
- **V. Simplicity Before Abstraction**: PASS. No new dependencies, framework swaps, CMS, state-management library, service layer, queue, event bus or speculative abstraction.
- **VI. Explicit Boundaries**: PASS. Scope remains in `src/frontend/trevvos-web` plus required Spec Kit artifacts. Backend, `kmone-landing` and `kmone-proxy` are out of scope.
- **VII. Quality Is Part of the Feature**: PASS. Accessibility, SEO, responsive layout and traceability of claims are included as implementation validation requirements.
- **VIII. AI Output Is Untrusted Until Validated**: PASS. Generated content and tests must be reviewed against the spec and repository reality.
- **IX. Specification Before Implementation**: PASS. The feature completed initial specification, human review, clarification, second human review, explicit Product Owner decisions and approval for technical planning. `spec.md` is now marked `Status: Approved`.
- **X. No Silent Assumptions**: PASS. The KM One destination is derived from existing repository evidence (`https://kmone.trevvos.com.br/`), and the rendering strategy is the explicit human-approved SSG decision.

## Project Structure

### Documentation (this feature)

```text
specs/001-public-homepage/
|-- plan.md
|-- research.md
|-- data-model.md
|-- quickstart.md
|-- contracts/
|   `-- homepage-ui.md
`-- checklists/
    `-- requirements.md
```

### Source Code (repository root)

```text
src/frontend/trevvos-web/
|-- package.json
|-- package-lock.json
|-- angular.json
|-- src/
|   |-- index.html
|   |-- styles.css
|   |-- app/
|   |   |-- app.routes.ts
|   |   |-- app.spec.ts
|   |   |-- home/
|   |   |   |-- home.page.ts
|   |   |   |-- home.page.html
|   |   |   `-- home.page.css
|   |   `-- i18n/
|   |       |-- messages.pt-BR.ts
|   |       `-- messages.en.ts
|   `-- environments/
```

**Structure Decision**: Use the existing Angular application and existing `home` page. The minimum implementation structure is the current page-level `HomePage` plus current localization/message files if content remains centralized there. `src/frontend/trevvos-web/src/app/i18n/messages.pt-BR.ts` is the preferred starting point for local static content. Adjacent simple typed content is acceptable only if it makes the implementation clearer; new factories, repositories, services or domain models are not justified for static homepage copy unless implementation later demonstrates a concrete need.

## Static Rendering Decision

Static prerendering / SSG is the approved rendering strategy for the root public homepage. The homepage is public, its core content is static, SEO/indexability is an explicit requirement, and essential company/product content for Trevvos, KM One and Trevvos Flow must exist in generated HTML before client-side JavaScript executes. The page does not require per-user rendering. Dynamic SSR would add unnecessary runtime complexity and is not approved. Pure CSR was considered but rejected as the final rendering strategy because it provides weaker evidence for the approved SEO/indexability requirement.

Client-side Angular behavior remains appropriate after page load for normal navigation, same-page fragment behavior, focus handling and responsive UI behavior, as long as the core content does not depend on browser-only rendering.

The current Angular 21 project uses `@angular/build:application` in `src/frontend/trevvos-web/angular.json`. The current `package.json` does not declare `@angular/ssr` or `@angular/platform-server`; the installed `@angular/build` package lists both as optional peer dependencies for Angular server-rendering/prerendering support. The installed builder schema supports:

- `outputMode: "static"`: generates a static site build artifact for deployment on static hosting.
- `prerender`: enables SSG during build time and can discover unparameterized Angular routes.
- `server`: provides the server entry point used by Angular's build-time rendering.

Angular documentation for existing projects says hybrid rendering is added with `ng add @angular/ssr`; by default Angular prerenders the application and a fully static build is selected with `outputMode: "static"`. During implementation, the expected minimum SSG change is to add Angular-supported static rendering configuration and the package entries required by that schematic, expected to include `@angular/ssr` and `@angular/platform-server` for this Angular 21 project. Any generated Angular server-rendering entry/config files are build-time prerendering artifacts for static output; they must not become a deployed runtime server for this homepage.

Expected implementation files that may change later:

- `src/frontend/trevvos-web/package.json`
- `src/frontend/trevvos-web/package-lock.json`
- `src/frontend/trevvos-web/angular.json`
- `src/frontend/trevvos-web/src/main.server.ts`
- `src/frontend/trevvos-web/src/server.ts` only if the Angular CLI schematic requires it as a build-time artifact; it must not become a deployed runtime server for this homepage
- `src/frontend/trevvos-web/src/app/app.config.server.ts`
- `src/frontend/trevvos-web/src/app/app.routes.server.ts`
- existing homepage files under `src/frontend/trevvos-web/src/app/home/`
- existing local content file `src/frontend/trevvos-web/src/app/i18n/messages.pt-BR.ts`

## Phase 0: Research Summary

Research is captured in `specs/001-public-homepage/research.md`.

Key resolved decisions:

- Preserve Angular 21 and npm lockfile workflow.
- Implement the homepage as Angular static prerender / SSG content for the root route.
- Keep content in the existing local message object first, or adjacent simple typed content if clearly useful, rather than a backend-coupled model.
- Keep CTAs as normal anchor navigation: external KM One link and same-page Trevvos Flow section link.
- Remove the public homepage dependency on backend health/status UI. Do not delete or refactor `HealthService` or backend-related infrastructure unless independently necessary.
- Validate with existing build/test commands, generated HTML inspection, manual accessibility, product-truth and responsive reviews.

## Phase 1: Design Summary

Design artifacts are captured in:

- `specs/001-public-homepage/data-model.md`
- `specs/001-public-homepage/contracts/homepage-ui.md`
- `specs/001-public-homepage/quickstart.md`

The homepage has conceptual content records rather than backend data entities: Homepage, Product Presentation, CTA and documentation-only review guardrails. Contracts are UI/content contracts, not HTTP API contracts.

## Complexity Tracking

No constitution violations requiring complexity justification.

## Post-Design Constitution Check

- **Product truth and no silent assumptions**: PASS. Spec status is approved and SSG approval is explicitly human-owned.
- **Small, bounded work**: PASS. Planned implementation remains in `src/frontend/trevvos-web`.
- **Evidence before completion**: PASS. Quickstart defines concrete commands, generated HTML inspection and manual checks.
- **Human-owned architecture**: PASS. Static prerender / SSG for this homepage has explicit human approval. Dynamic SSR, CMS, backend content delivery and broader rendering-architecture changes require separate human approval. No ADR is created for this feature.
- **Simplicity before abstraction**: PASS. One page-level implementation is sufficient.
- **Explicit boundaries**: PASS. Backend, `kmone-landing` and `kmone-proxy` remain unchanged.
- **Quality gates**: PASS. Accessibility, SEO and responsive validation are included in acceptance validation.
