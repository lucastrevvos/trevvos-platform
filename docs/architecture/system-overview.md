# System Overview

The Trevvos ecosystem is split across focused repositories.

## Repositories

- `trevvos-api`: central backend in .NET 8. It owns APIs, future PostgreSQL persistence, shared AI gateway, KM One backend contracts, audit and consent foundations.
- `trevvos-web`: future public Angular portal. It owns the public website experience, lead capture UI, SEO article pages, app catalog and contact assistant interface.
- `motor-kmone`: private Android repository for the KM One mobile app. It remains offline-first and syncs with the API when connectivity exists.
- Old or experimental repositories: reference material only. They can inform product decisions, but are not the technical base for this repository.

## Runtime Shape

At the start, there is one API process and one future PostgreSQL database. Worker jobs are separated into `Trevvos.Worker` but still part of the same codebase and release discipline.

The first implemented endpoint is `GET /health`. Product contracts are documented before implementation so the frontend and mobile repositories can align without forcing premature backend complexity.
