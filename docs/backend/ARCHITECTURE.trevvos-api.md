# Architecture

Trevvos API is a .NET 8 modular monolith.

The repository owns the central backend for the Trevvos platform. It starts small, with one deployable API, one future PostgreSQL database, and internal modules separated by business responsibility. The initial implementation intentionally avoids fake domain behavior and leaves real product workflows for later milestones.

## Projects

- `Trevvos.Api`: ASP.NET Core entry point, HTTP endpoints, Swagger, logging, hosting.
- `Trevvos.Application`: use cases, contracts, orchestration and module boundaries.
- `Trevvos.Domain`: domain model and business rules when they exist.
- `Trevvos.Infrastructure`: persistence, external providers, EF Core and technical adapters.
- `Trevvos.Worker`: future background jobs for climate, events, sync processing and scheduled tasks.

## Modules

Conceptual modules start under `Trevvos.Application/Modules`:

- `PublicSite`
- `Identity`
- `Billing`
- `Ai`
- `KmOne`
- `Audit`

They are placeholders for boundaries, not implemented features.

## Dependency Direction

```text
Api -> Application
Api -> Infrastructure
Infrastructure -> Application
Infrastructure -> Domain
Application -> Domain
Domain -> no project dependency
```

## Current Runtime Surface

- `GET /health`: simple readiness/liveness probe.
- Swagger is enabled only in `Development`.
- Serilog writes structured logs to console.
- EF Core is configured only when `ConnectionStrings:TrevvosDb` is present.
