# Research: Public Trevvos Homepage

## Decision: Preserve the existing Angular toolchain

**Rationale**: `src/frontend/trevvos-web/package.json` declares Angular `^21.2.0`, Angular CLI/build `^21.2.16`, TypeScript `~5.9.2`, npm package manager `npm@10.8.2`, and an existing `package-lock.json`. `angular.json` uses `@angular/build:application` for production builds and `@angular/build:unit-test` for tests. The user explicitly requires preserving the brownfield application and avoiding replacement or reinitialization.

**Alternatives considered**:

- Reinitialize Angular: rejected because it would discard brownfield context and violate the request.
- Introduce React or another frontend framework: rejected by local AGENTS instructions and user constraints.

## Decision: Use Angular static prerendering / SSG for the root homepage

**Rationale**: Human architecture review explicitly approved static prerender / SSG for this homepage. The approved path is Angular -> static prerender / SSG -> generated HTML -> static hosting. This is a public homepage, its core content is static, SEO/indexability is an explicit requirement, and essential company/product content should exist in generated HTML before client-side JavaScript executes. The page does not require per-user rendering.

Angular's current application builder schema in this repository supports `outputMode: "static"` for static hosting artifacts and `prerender` for build-time SSG. The current `package.json` does not declare `@angular/ssr` or `@angular/platform-server`; the installed `@angular/build` package lists both as optional peer dependencies for rendering support. Angular documentation for an existing project identifies `ng add @angular/ssr` as the supported way to add the server-rendering package/configuration needed for Angular build-time rendering, with `outputMode: "static"` used to avoid a runtime server artifact for deployment. Therefore implementation is expected to require `package.json`, `package-lock.json`, `angular.json` and Angular-generated server-rendering entry/config files, but deployment remains static.

**Alternatives considered**:

- Pure CSR: rejected as the final rendering strategy because it provides weaker evidence for the approved SEO/indexability requirement.
- Dynamic SSR: rejected because per-request rendering is unnecessary for static public content and would add an unapproved runtime Angular/Node/server application surface.
- Backend rendering service or content API: rejected because backend development and backend contracts are out of scope.
- CMS-backed rendering: rejected because static homepage copy is sufficient and CMS/backend content delivery requires separate human approval.

## Decision: Implement the homepage on the existing root route and HomePage

**Rationale**: `app.routes.ts` already maps `path: ''` to `HomePage` with title `Trevvos`. The feature is a single public homepage, so the existing page-level component is the minimum structure. The current placeholder backend-status area can be removed during implementation because the public homepage spec does not require backend health status and core content must not depend on backend availability.

**Alternatives considered**:

- Create a new route or product pages: rejected because the spec is limited to the homepage and explicitly excludes full product pages.
- Create a shared component library first: rejected as premature for one page unless repeated fragments become materially clearer during implementation.
- Keep backend health status on the public homepage: rejected because it is placeholder technical content not present in the approved homepage requirements.
- Delete or refactor `HealthService`: rejected for this feature because removal of homepage health UI does not independently require changing backend-related infrastructure.

## Decision: Represent homepage content with the existing local message pattern first

**Rationale**: The homepage content is static, public, and must be traceable to approved product claims. The repository already has `src/frontend/trevvos-web/src/app/i18n/messages.pt-BR.ts`, and the current `HomePage` reads `messages.home`. Treating that existing local content/message pattern as the preferred starting point avoids creating a new content architecture merely because the feature has a data-model artifact. Adjacent simple typed content is acceptable if it makes the implementation clearly simpler or safer, but speculative factories, repositories, services or domain models are not justified.

**Alternatives considered**:

- Fetch content from backend: rejected because backend changes and contracts are out of scope.
- Add a CMS or content API abstraction: rejected as overengineering and not required by the spec.
- Create runtime models for every concept in `data-model.md`: rejected because the data model is conceptual and does not require TypeScript interfaces/classes for each documented concept.
- Hard-code all strings directly in the template: acceptable for a very small page, but the existing message object is preferred for continuity with the current app.

## Decision: Use normal anchor CTAs

**Rationale**: The KM One CTA must use the existing confirmed landing destination. Repository evidence identifies `https://kmone.trevvos.com.br/` in `src/frontend/kmone-landing/public/sitemap.xml`, `robots.txt`, and deployment documentation. Trevvos Flow must navigate to its homepage section, which can be handled with a same-page fragment link such as `#trevvos-flow`.

**Alternatives considered**:

- Link KM One to an internal Angular route: rejected because no KM One page exists in `trevvos-web` and full product pages are out of scope.
- Link Trevvos Flow to a separate route: rejected because the spec requires same-homepage section navigation.
- Use JavaScript-only scroll handlers: rejected because anchor navigation is simpler, accessible and crawlable.

## Decision: Use semantic static layout with responsive CSS

**Rationale**: The specification requires semantic, accessible, indexable and mobile/desktop content. The implementation should use ordinary HTML landmarks and headings (`main`, `nav`, `section`, one `h1`, section `h2`s), visible focus states, readable responsive spacing, and no dependency on animation for essential meaning. The existing app has simple CSS and no UI framework; preserving that keeps the implementation small.

**Alternatives considered**:

- Add a UI framework: rejected because the scope does not require it and local instructions prefer Angular/platform capabilities.
- Make visual content primary via canvas/animation: rejected because essential product meaning must remain text content.
- Build a marketing-heavy landing page with hidden interactions: rejected because SEO and accessibility require core content to be available without interaction.

## Decision: Validate generated HTML plus existing automated commands and manual quality checks

**Rationale**: Existing scripts are `npm run build` and `npm test`; no lint script is configured. Because SSG is now required, validation must inspect the generated HTML artifact for the root route after the production build and prove that real textual content for Trevvos, KM One and Trevvos Flow is present before client-side JavaScript executes. The same static HTML inspection must also prove that `Copiloto KM One` is absent. Manual accessibility, responsive and product-truth reviews remain necessary because automated unit tests alone cannot prove those qualities.

The current Angular build output uses the browser output directory under `src/frontend/trevvos-web/dist/trevvos-web/browser/`; the root route HTML is expected at `dist/trevvos-web/browser/index.html` after a production build. If implementation changes Angular output settings, validators must derive the actual generated root HTML artifact from `angular.json` or the build output before inspecting it.

**Alternatives considered**:

- Inspect only the browser DOM after JavaScript execution: rejected because the approved requirement is generated/prerendered HTML.
- Add Playwright, axe or Lighthouse dependencies now: rejected because the planning revision must not add dependencies and manual validation is sufficient for this scoped homepage unless later approved.
- Skip tests because this is mostly content: rejected by the Constitution and local AGENTS quality gates.

## Decision: No ADR is required for this feature

**Rationale**: The human review explicitly approved static prerender / SSG for this homepage and also instructed not to create an ADR. This decision is limited to the public Trevvos homepage. Dynamic SSR, CMS, backend content delivery and broader rendering-architecture changes remain outside this decision and require separate human approval.

**Alternatives considered**:

- Create an ADR for the homepage SSG decision: rejected by explicit instruction.
- Treat SSG approval as approval for broader rendering architecture: rejected because the human decision is scoped only to this homepage.
