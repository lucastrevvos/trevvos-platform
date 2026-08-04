# Repositories

## trevvos-api

Official central API for Trevvos. Responsibilities:

- Public portal backend contracts.
- Lead capture and consent records.
- SEO article APIs in future.
- Shared AI gateway in future.
- KM One backend and sync contracts.
- Future identity and billing integrations.
- Audit, observability and operational boundaries.

## trevvos-web

Future public Angular portal. Responsibilities:

- Public marketing and product pages.
- Articles optimized for SEO.
- App catalog presentation.
- Contact assistant UI.
- Lead capture forms.

Contracts with `trevvos-api` should use documented `/v1/public/*` endpoints.

## motor-kmone

Private Android repository for KM One. Responsibilities:

- Offline-first app behavior.
- Local driver, vehicle, ride, fuel and tracking data.
- Sync event generation.
- Copilot UI and mobile experience.

Contracts with `trevvos-api` should use documented `/v1/kmone/*` and mobile sync contracts.

## Legacy/Experimental Repositories

Older repositories may contain useful product knowledge, screens, copy or experiments. They are references only and should not dictate architecture, package choices or code structure here.
