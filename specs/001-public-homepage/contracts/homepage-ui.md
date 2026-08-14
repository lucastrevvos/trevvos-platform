# UI Contract: Public Trevvos Homepage

This feature exposes a public browser UI contract, not an HTTP API contract.

It does not define an HTTP API contract. Core homepage content must be generated through Angular static prerendering / SSG and served as static HTML/browser assets, not through a runtime Angular server, Node server or backend rendering service.

## Route Contract

- Route: `/`
- Angular route: existing `path: ''`
- Page title: meaningful Trevvos homepage title, not a generated placeholder
- Audience: unauthenticated public visitors
- Backend dependency: none for core homepage content

## Content Contract

The generated/prerendered HTML for the root homepage must include crawlable text content for:

- Trevvos as a technology company and product platform
- KM One as the primary product for ride-hailing and professional drivers
- KM One support for ride-offer analysis and operational/financial organization
- Trevvos Flow as an intelligent list and task organization product
- Trevvos Flow support for local/shared lists, task/shopping lists, progress, collaboration and user-selected intelligent suggestions

This means the core Trevvos, KM One and Trevvos Flow textual content must be present in the generated root HTML before client-side JavaScript executes.

The rendered homepage must not include:

- Copiloto KM One
- Guaranteed rides, demand, income, savings, profitability or financial results
- Customer counts, driver counts, ratings, partnerships, awards, geographic availability or release dates
- Claims that intelligent suggestions act autonomously without user selection

## Structure Contract

- Use one clear primary heading (`h1`) for the homepage.
- Use semantic sections with accessible names for major content areas.
- Preserve a logical reading order on mobile: Trevvos introduction, KM One primary content, Trevvos Flow secondary content, supporting continuation/navigation.
- Make KM One more prominent than Trevvos Flow through heading hierarchy, layout weight, copy depth and CTA priority.
- Keep essential meaning visible without opening accordions, triggering animation or loading non-text media.

## Navigation Contract

- KM One CTA:
  - `href`: `https://kmone.trevvos.com.br/`
  - Behavior: external navigation to the existing KM One landing destination
  - Must not require backend state or authentication
- Trevvos Flow CTA:
  - `href`: `#trevvos-flow`
  - Behavior: same-page navigation to the Trevvos Flow section
  - Target section must exist and have an accessible name

## Accessibility Contract

- Keyboard users can reach and activate navigation and CTAs.
- Focus indicators remain visible.
- Text remains readable at representative mobile and desktop widths and under browser zoom.
- Assistive technologies can identify page purpose, major sections, product names and CTA destinations from semantic content.
- Any motion or animation added during implementation must respect reduced-motion preferences and must not be required to understand the page.

## SEO Contract

- `src/index.html` or Angular route metadata must provide a meaningful document title.
- The generated/prerendered root homepage HTML must contain real text for Trevvos, KM One and Trevvos Flow.
- Essential content must not be exclusively represented by images, canvas, video, animation or hidden client-side states.
- Essential company/product content must not depend on backend health/status calls or browser-only rendering.
- The page must avoid unsupported claims that would create inaccurate search snippets.

## Responsive Contract

- Validate at representative mobile and desktop viewports.
- KM One remains visually and structurally primary on small screens.
- CTAs remain visible, readable and non-overlapping.
- No text overlaps adjacent content or escapes its container.
