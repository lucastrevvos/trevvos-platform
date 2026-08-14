# Tasks: Public Trevvos Homepage

**Input**: Design documents from `specs/001-public-homepage/`
**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/homepage-ui.md`, `quickstart.md`
**Tests**: Unit tests and validation tasks are included because the approved plan requires `npm test`, production build, generated HTML verification, accessibility review, responsive review, product-truth review and CTA verification.
**Scope Guard**: Do not modify backend, `src/frontend/kmone-landing`, `src/frontend/kmone-proxy`, create an ADR, add CMS/backend content delivery, add dynamic SSR runtime, add a UI framework, add state-management, create runtime domain entities for the content model, run `$speckit-implement`, or commit.

## Phase 1: Rendering Foundation

**Purpose**: Enable the approved Angular static prerender / SSG path before homepage work depends on generated HTML.

- [ ] T001 Run `npm ci` with working directory `src/frontend/trevvos-web` and command `npm ci`, using `src/frontend/trevvos-web/package-lock.json` as the lockfile.
- [ ] T002 Use the Angular-supported mechanism to enable rendering support for the existing application in `src/frontend/trevvos-web`, then record every generated or modified file before making manual adjustments.
- [ ] T003 Review the Angular-generated rendering changes in `src/frontend/trevvos-web` and configure only what is required for static output and prerendering of the existing root route.
- [ ] T004 Verify the rendering setup in `src/frontend/trevvos-web` requires no dynamic SSR/runtime server deployment path and preserves the approved static prerender / SSG -> generated HTML -> static hosting architecture.
- [ ] T005 Run an initial `npm run build` with working directory `src/frontend/trevvos-web`, determine the generated root HTML artifact from Angular configuration or build output, and verify the root route produces static generated HTML before deeper homepage implementation.

**Checkpoint**: The existing Angular app has the minimum approved static rendering foundation for build-time prerendering and static hosting, and the root route has produced a static generated HTML artifact at least once.

---

## Phase 2: User Story 1 - Understand Trevvos and KM One First (Priority: P1) MVP

**Goal**: A first-time public visitor understands that Trevvos creates practical digital products and that KM One is the primary product for ride-hailing and professional drivers.

**Independent Test**: Build or run the homepage and verify the first visible content clearly presents Trevvos, gives KM One primary prominence, and avoids unsupported guarantees.

- [ ] T006 [US1] Replace placeholder homepage copy with approved Brazilian Portuguese Trevvos and KM One content in `src/frontend/trevvos-web/src/app/i18n/messages.pt-BR.ts`, keeping KM One primary and excluding Copiloto KM One.
- [ ] T007 [US1] Remove the backend health/status dependency from the public homepage component in `src/frontend/trevvos-web/src/app/home/home.page.ts` by dropping `HealthService`, `AsyncPipe`, and `backendStatus$` usage without deleting `src/frontend/trevvos-web/src/app/core/health/health.service.ts`.
- [ ] T008 [US1] Replace the placeholder backend-status template with semantic homepage structure in `src/frontend/trevvos-web/src/app/home/home.page.html`, including one meaningful `h1`, Trevvos positioning, and a primary KM One section.
- [ ] T009 [US1] Add KM One supporting capability copy primarily to `src/frontend/trevvos-web/src/app/i18n/messages.pt-BR.ts` and render it semantically from that local message model in `src/frontend/trevvos-web/src/app/home/home.page.html`, using only the approved whitelist from `specs/001-public-homepage/spec.md` and without guaranteed rides, income, demand, savings, profitability or financial-result claims.
- [ ] T010 [US1] Set a meaningful root homepage title and any required route metadata in `src/frontend/trevvos-web/src/app/app.routes.ts` so the public page is not exposed as a placeholder title.

**Checkpoint**: User Story 1 is independently understandable and testable as the MVP homepage message.

---

## Phase 3: User Story 2 - Compare Current Trevvos Products (Priority: P2)

**Goal**: A visitor can compare the current Trevvos products and understand KM One as primary and Trevvos Flow as secondary.

**Independent Test**: Inspect the generated or rendered page content and verify KM One and Trevvos Flow are distinct, truthful, accessible and proportionally prioritized.

- [ ] T011 [US2] Add approved Trevvos Flow Brazilian Portuguese content to `src/frontend/trevvos-web/src/app/i18n/messages.pt-BR.ts`, limited to local/shared lists, shopping/task lists, progress tracking, collaboration, AI-oriented area, and user-selected intelligent suggestions.
- [ ] T012 [US2] Add a secondary Trevvos Flow section with `id="trevvos-flow"` and an accessible section name in `src/frontend/trevvos-web/src/app/home/home.page.html`, rendering Trevvos Flow copy from `src/frontend/trevvos-web/src/app/i18n/messages.pt-BR.ts`.
- [ ] T013 [US2] Add product comparison hierarchy in `src/frontend/trevvos-web/src/app/home/home.page.html` so KM One remains structurally and textually more prominent than Trevvos Flow.
- [ ] T014 [US2] Review all homepage copy in `src/frontend/trevvos-web/src/app/i18n/messages.pt-BR.ts` and `src/frontend/trevvos-web/src/app/home/home.page.html` to ensure Copiloto KM One, autonomous AI action claims and unsupported availability/statistics are absent.

**Checkpoint**: User Story 2 is independently testable through accessible, indexable comparison content.

---

## Phase 4: User Story 3 - Continue Exploration From the Homepage (Priority: P3)

**Goal**: A visitor can continue exploring KM One and Trevvos Flow through clear, bounded CTAs without adding new product pages or backend flows.

**Independent Test**: Verify each CTA has clear copy and the approved destination behavior without requiring authentication, backend state or hidden interactions.

- [ ] T015 [US3] Add CTA labels and accessibility text for KM One and Trevvos Flow in `src/frontend/trevvos-web/src/app/i18n/messages.pt-BR.ts`.
- [ ] T016 [US3] Implement the KM One CTA as a normal external anchor to `https://kmone.trevvos.com.br/` in `src/frontend/trevvos-web/src/app/home/home.page.html`.
- [ ] T017 [US3] Implement the Trevvos Flow CTA as a normal same-page anchor to `#trevvos-flow` in `src/frontend/trevvos-web/src/app/home/home.page.html`.
- [ ] T018 [US3] Ensure homepage navigation and CTA semantics are keyboard-reachable and do not depend on JavaScript-only click handlers in `src/frontend/trevvos-web/src/app/home/home.page.html`.

**Checkpoint**: User Story 3 is independently testable through explicit CTA destination checks.

---

## Phase 5: Visual, Responsive and Accessibility Implementation

**Purpose**: Apply the approved public homepage visual identity and responsive behavior across all user stories.

- [ ] T019 Style the homepage with a dark, technical, product-oriented visual identity in `src/frontend/trevvos-web/src/app/home/home.page.css`, preserving readable text, visible focus states, and one clear hierarchy.
- [ ] T020 Add mobile-first responsive layout rules in `src/frontend/trevvos-web/src/app/home/home.page.css` so reading order remains Trevvos introduction, KM One primary content, Trevvos Flow secondary content, then continuation/navigation.
- [ ] T021 Ensure text wrapping, CTA layout, reduced-motion behavior if motion exists, and non-overlapping content at representative viewport widths in `src/frontend/trevvos-web/src/app/home/home.page.css`.

**Checkpoint**: The homepage is visually complete enough for responsive and accessibility review.

---

## Phase 6: Automated Tests

**Purpose**: Cover the public homepage behavior and guardrails with the existing Angular unit-test setup without adding new test dependencies.

- [ ] T022 Add or update homepage unit tests in `src/frontend/trevvos-web/src/app/home/home.page.spec.ts` to assert Trevvos, KM One, Trevvos Flow, one `h1`, `#trevvos-flow`, and approved CTA hrefs are rendered.
- [ ] T023 Add or update homepage guardrail tests in `src/frontend/trevvos-web/src/app/home/home.page.spec.ts` to assert `Copiloto KM One`, backend health/status text, and guaranteed income/rides/demand claims are absent.
- [ ] T024 Update app-level tests in `src/frontend/trevvos-web/src/app/app.spec.ts` only if SSG or route metadata changes require existing app test expectations to be adjusted.

**Checkpoint**: Automated tests cover the homepage content, CTA and forbidden-content guardrails using the existing test stack.

---

## Phase 7: SSG, SEO and Final Quality Gates

**Purpose**: Prove the approved generated-HTML and quality requirements before completion.

- [ ] T025 Run `npm run build` in `src/frontend/trevvos-web/package.json` and confirm the production build succeeds within existing Angular budgets.
- [ ] T026 Determine the actual generated root HTML artifact from `src/frontend/trevvos-web/angular.json` or the build output under `src/frontend/trevvos-web/dist/`, then inspect that generated HTML file to prove it contains `Trevvos`, `KM One`, and `Trevvos Flow`.
- [ ] T027 Inspect the same generated root HTML artifact under `src/frontend/trevvos-web/dist/` to prove `Copiloto KM One`, backend health/status copy, and unsupported guarantee terms are absent.
- [ ] T028 Run `npm test` in `src/frontend/trevvos-web/package.json` and confirm the Angular unit test suite passes.
- [ ] T029 Perform the manual product-truth review against `specs/001-public-homepage/spec.md` and `specs/001-public-homepage/contracts/homepage-ui.md`, confirming 100% of homepage claims trace to approved sources.
- [ ] T030 Perform the manual accessibility review from `specs/001-public-homepage/quickstart.md`, confirming meaningful title, one primary heading, semantic sections, keyboard-reachable CTAs, visible focus states and understandable content without images or backend status.
- [ ] T031 Run or open the implemented homepage from `src/frontend/trevvos-web`, inspect the rendered UI at approximately 360px, 768px and 1280px, and verify reading order, KM One/Trevvos Flow hierarchy, text wrapping, CTA layout, and absence of overflow or overlap.
- [ ] T032 Perform the CTA validation from `specs/001-public-homepage/quickstart.md`, confirming the KM One CTA points to `https://kmone.trevvos.com.br/` and the Trevvos Flow CTA navigates to `#trevvos-flow`.

**Checkpoint**: Build, tests, generated HTML inspection, product-truth review, accessibility review, responsive review and CTA validation are complete and reported.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 Rendering Foundation**: No implementation dependency; must complete before generated-HTML validation can pass.
- **Phase 2 US1 MVP**: Depends on Phase 1 so homepage work is designed for prerendered output from the start.
- **Phase 3 US2**: Depends on Phase 2 for the base homepage structure and content pattern.
- **Phase 4 US3**: Depends on Phases 2 and 3 because CTAs target the KM One destination and the Trevvos Flow section.
- **Phase 5 Visual/Responsive/Accessibility**: Depends on Phases 2-4 so styling covers final content and CTAs.
- **Phase 6 Automated Tests**: Depends on Phases 2-4; can run before or alongside Phase 5 if styling assertions are avoided.
- **Phase 7 Quality Gates**: Depends on all implementation phases.

### User Story Dependencies

- **US1 (P1)**: MVP after Rendering Foundation; no dependency on US2 or US3.
- **US2 (P2)**: Depends on US1's base homepage structure but remains independently testable by inspecting product comparison content.
- **US3 (P3)**: Depends on US1 and US2 content targets; remains independently testable by CTA destination checks.

### Parallel Opportunities

- No tasks are marked `[P]` in this decomposition.
- Angular SSG package/config changes touch related generated files and must be reviewed sequentially.
- Homepage content, template and style tasks touch closely related files where ordering matters for review.
- Final validation tasks should collect evidence after all implementation tasks are complete.

---

## User Story Mapping

- **US1 / P1**: `T006`, `T007`, `T008`, `T009`, `T010`
- **US2 / P2**: `T011`, `T012`, `T013`, `T014`
- **US3 / P3**: `T015`, `T016`, `T017`, `T018`
- **Shared foundation and validation**: `T001`-`T005`, `T019`-`T032`

## Implementation Strategy

### MVP First

1. Complete Phase 1 Rendering Foundation.
2. Complete Phase 2 User Story 1.
3. Run enough local verification to confirm Trevvos and KM One are understandable and no backend health/status UI remains.
4. Continue with US2, US3, styling, tests and final quality gates.

### Incremental Delivery

1. SSG foundation first so all content work targets generated static HTML.
2. US1 establishes the main homepage and KM One message.
3. US2 adds Trevvos Flow and product comparison.
4. US3 adds approved continuation CTAs.
5. Styling and tests harden the complete page.
6. Final validation proves build, tests, generated HTML, product truth, accessibility, responsiveness and CTA behavior.

## Notes

- Do not create `ProductSpotlight`, `ClaimGuardrail`, repository, factory, service, CMS, content API or persistence abstractions for static homepage content.
- Prefer the existing `src/frontend/trevvos-web/src/app/i18n/messages.pt-BR.ts` content pattern.
- Let the Angular-supported rendering setup generate its own required files; do not manually recreate filenames before the Angular CLI creates or documents them.
- Keep `src/frontend/trevvos-web/src/app/home/home.page.html` focused on semantic structure and rendering from the local message model instead of scattering product copy across hard-coded template strings.
- Do not delete `src/frontend/trevvos-web/src/app/core/health/health.service.ts` unless a concrete compile/test dependency later proves a minimal change is necessary.
- Do not hard-code a dist path into application code; generated HTML validation must determine the actual artifact from Angular configuration or build output.
