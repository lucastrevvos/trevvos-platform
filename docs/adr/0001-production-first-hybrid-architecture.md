# ADR-0001 — Production-first hybrid backend for KM One

- **Status:** Proposed (to be reviewed in PR)
- **Date:** 2026-10-23
- **Owners:** Trevvos
- **Scope:** KM One backend, shared Trevvos platform and local engineering infrastructure

## Context

KM One has an existing Android application with offline-capable features. The Trevvos monorepo contains an ASP.NET Core backend, shared .NET projects, a worker and PostgreSQL Docker Compose configuration. The goal is to deliver a reliable product for real users while deliberately developing engineering skills in .NET, NestJS, Docker, Kubernetes and distributed systems.

Production safety is a **release requirement**, not a later improvement. We must avoid building distributed complexity without a meaningful business boundary.

## Decision

1. **Stay in one monorepo:** `trevvos-platform` is the integration point; the Android application remains in its existing separate repository.
2. **ASP.NET Core is the transactional owner:** identity integration, drivers, vehicles, trips, refuelings, authorization and consistency rules. Start as a modular monolith rather than decomposing these responsibilities prematurely.
3. **NestJS is a separately deployable KM One Insights service:** reporting projections and analytical business logic. It has its own storage and API contracts. It is **not** a proxy that exists solely to showcase a stack.
4. **Worker + RabbitMQ:** transactional outbox in .NET (once persistence exists) with asynchronous versioned integration events; consumers must be idempotent, support retries and a dead-letter strategy. Events are introduced with the first feature needing integration, not as placeholder business code.
5. **Data ownership:** no service reads or writes another service's tables. Physical PostgreSQL instances may be shared initially, but credentials, schemas and migrations must be isolated.
6. **Android stays offline-first:** device records, synchronization, conflict resolution and deletion semantics require a separate design before customer data is uploaded.
7. **Two complementary local environments:** Docker Compose for daily development; kind/Kubernetes for orchestration exercises and deployment verification. Kubernetes production hosting is **not** automatically required.
8. **Version policy:** migrate existing `net8.0` projects and related dependencies to .NET 10 LTS in a reviewed change before production use; use an active Node.js LTS line for NestJS.
9. **Platform controls:** CI quality gates, secret handling, least privilege, logs and traces without sensitive payloads, repeatable migrations, backup-and-restore drills, actionable alerts and rollback procedures must be in place before real user data reaches production.

## Architectural boundary

```text
KM One Android --> Trevvos.Api (.NET transactional modules) --> PostgreSQL [core-owned]
                                |
                      Outbox + Trevvos.Worker
                                |
                              RabbitMQ
                                |
                      KM One Insights (NestJS) --> PostgreSQL [insights-owned]
```

No shared ORM models between services; contracts are explicit. The .NET app may query Insights synchronously where UX requires it, with timeouts and graceful degradation. Failed Insights or RabbitMQ must never invalidate already committed core transactions.

## Operational constraints

- Expose only necessary public interfaces; databases and brokers stay private.
- Never commit production secrets. Staging/prod credentials are injected by deployment secret stores.
- No release without evidence of automated testing, migration review, observability and tested recovery.
- For every service, define user-facing impact, ownership, health checks, and a failure mode.
- Set numeric SLO/RTO/RPO targets after a business impact and cost assessment; do not claim an invented SLA.
- Do not equate successful CI or a green health endpoint with production readiness.

## Alternatives rejected

- **Two full transactional backends:** creates duplicate business rules and consistency problems.
- **Microservice per entity:** high operational coupling and overhead without business benefit.
- **All NestJS or all .NET:** loses deliberate dual-stack learning and legitimate separate analytical service.
- **Kubernetes required in production on day one:** unnecessary hosting cost and on-call burden at this phase.

## Consequences and follow-up

The monorepo supports isolated builds for two runtimes and shared infrastructure docs. Async projections are eventually consistent; the API must communicate freshness limitations when Insights is added. Additional operational burden is accepted only where it creates a clear boundary.

Next ADRs: identity/authorization, Android synchronization and conflict resolution, event envelope and outbox, deployment targets/secrets, data retention/privacy.
