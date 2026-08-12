# Public Site Contracts

Contracts for the future `trevvos-web` Angular portal.

These endpoints are conceptual and not implemented yet, except for the current platform health endpoint.

## Leads

`POST /v1/public/leads`

Captures interest from public forms, waitlists, product pages and contact flows.

Expected concerns:

- Source page or campaign.
- Consent state.
- Contact information.
- Product interest, initially focused on KM One.
- Audit metadata.

## Contact Assistant

`POST /v1/public/contact-assistant/messages`

Receives a visitor message and returns an assistant response. Future implementation should pass through the shared AI gateway and preserve safety, traceability and consent boundaries.

## Apps Catalog

`GET /v1/public/apps`

Returns public Trevvos apps and product cards. KM One is the initial primary product.

## Articles

`GET /v1/public/articles`

Returns public article summaries for SEO pages.

`GET /v1/public/articles/{slug}`

Returns one public article by slug.

Publishing workflows are intentionally out of scope for the initial foundation.
