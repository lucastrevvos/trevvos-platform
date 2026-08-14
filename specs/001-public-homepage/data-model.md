# Data Model: Public Trevvos Homepage

This feature has no backend persistence model. This document is a conceptual content model for static, reviewable homepage content.

It does not require creating TypeScript interfaces/classes for every documented concept. The implementation may use the existing `src/frontend/trevvos-web/src/app/i18n/messages.pt-BR.ts` structure directly if that remains the simplest implementation. Do not introduce factories, repositories, services, persistence objects or domain models for static homepage content unless implementation later demonstrates a concrete need.

## Concept: Homepage

**Purpose**: Represents the complete public Trevvos homepage content presented on the root route.

**Conceptual fields**:

- `companyPositioning`: Brazilian Portuguese statement that Trevvos is a technology company/product platform creating practical digital products
- `products`: ordered product presentations
- `reviewGuardrails`: documentation/review rules used to validate product truth and scope

**Validation rules**:

- Must present Trevvos as a company/platform, not as a single-product company.
- Must include KM One and Trevvos Flow as real textual content.
- Must not imply unsupported products, backend capabilities, AI autonomy or availability claims.
- Must be present in generated/prerendered HTML for the root homepage.

## Concept: Product Presentation

**Purpose**: Represents one homepage product presentation. Product priority differentiates primary and secondary treatment without requiring separate Product Spotlight and Product Summary models.

**Conceptual fields**:

- `id`: stable product identifier, for example `km-one` or `trevvos-flow`
- `name`: visible product name
- `priority`: `primary` or `secondary`
- `audience`: target audience where applicable
- `summary`: approved product explanation
- `supportedCapabilities`: selected supported capabilities to show on the homepage
- `cta`: product CTA

**Records**:

- KM One:
  - `id`: `km-one`
  - `name`: `KM One`
  - `priority`: `primary`
  - `audience`: ride-hailing and professional drivers
  - `summary`: ride-offer analysis and operational/financial organization
  - `supportedCapabilities`: selected subset of the approved KM One capability whitelist
  - `cta`: external link to `https://kmone.trevvos.com.br/`
- Trevvos Flow:
  - `id`: `trevvos-flow`
  - `name`: `Trevvos Flow`
  - `priority`: `secondary`
  - `summary`: intelligent list and task organization
  - `supportedCapabilities`: local/shared lists, shopping/task lists, progress tracking, manually selected intelligent suggestions, collaboration and an AI-oriented area
  - `cta`: same-page fragment link to `#trevvos-flow`

**Validation rules**:

- KM One must be visibly and textually more prominent than Trevvos Flow.
- KM One content must not mention Copiloto KM One.
- KM One content must not claim guaranteed rides, income, demand, savings, profitability, financial results, ratings, customer counts, driver counts, partnerships, awards, geographic availability or release dates.
- Trevvos Flow content must not represent suggestions as autonomous actions.
- The homepage may select supporting capabilities from approved whitelists, but it is not required to display every whitelisted capability.

## Concept: CTA

**Purpose**: Defines homepage continuation behavior.

**Conceptual fields**:

- `label`: visible CTA copy
- `productId`: associated product
- `destinationType`: `external-url` or `same-page-fragment`
- `href`: destination URL or fragment
- `accessibilityLabel`: optional label when visible copy needs more context

**Records**:

- KM One CTA: `destinationType = external-url`, `href = https://kmone.trevvos.com.br/`
- Trevvos Flow CTA: `destinationType = same-page-fragment`, `href = #trevvos-flow`

**Validation rules**:

- KM One destination must not point to a new internal product page.
- Trevvos Flow destination must navigate to an existing section on the same homepage.
- CTA labels must be clear without relying on icon-only meaning.

## Review Guardrails

Claim guardrails are documentation and review rules only. They must not imply a runtime `ClaimGuardrail` model, service, class, interface, persistence object or application state.

Review must confirm:

- Every core claim traces to the approved specification or existing repository documentation.
- Unsupported claims are removed before completion.
- Copiloto KM One is absent from this first homepage.
- Static generated HTML contains real content for Trevvos, KM One and Trevvos Flow.

## State Transitions

No runtime data state transitions are required. Same-page navigation may move focus or scroll position to the Trevvos Flow section, but it does not change application data state.
