# Trevvos Platform

**Main engineering platform for Trevvos products.**

This monorepo consolidates public web experiences and shared backend capabilities into a single codebase, with Angular frontends and a .NET backend evolving toward a sustainable product platform.

## Why this repository exists

Trevvos started with independent product prototypes. As those products evolved, duplicated infrastructure and disconnected repositories became harder to maintain.

Trevvos Platform is the consolidation point:

- shared backend capabilities live in one .NET solution;
- web applications are organized in one monorepo;
- architecture and deployment decisions are documented;
- legacy repositories can be retired without losing product history;
- the platform can evolve incrementally instead of prematurely splitting into distributed services.

## Current applications

### Trevvos Web

Institutional and product-facing frontend for the Trevvos ecosystem.

### KM One Landing

Public landing experience for KM One, a product focused on financial and operational decisions for app drivers.

### Trevvos API

Shared .NET backend foundation for product APIs, persistence, authentication, integrations, and background processing as those capabilities are implemented.

## Stack

### Backend

- C#
- .NET / ASP.NET Core
- EF Core
- PostgreSQL / Npgsql

### Frontend

- Angular
- TypeScript

### Local infrastructure

- Docker Compose

### Delivery direction

- GitHub Actions
- Azure

> Azure deployment is part of the platform's delivery path and is being evolved incrementally. The repository documentation distinguishes current implementation from planned infrastructure.

## Repository structure

```text
src/
  backend/
    Trevvos.Api/
    Trevvos.Application/
    Trevvos.Domain/
    Trevvos.Infrastructure/
    Trevvos.Worker/
  frontend/
    trevvos-web/
    kmone-landing/
tests/
docs/
```

## Running the backend

```bash
dotnet restore
dotnet build
dotnet test
dotnet run --project src/backend/Trevvos.Api/Trevvos.Api.csproj
```

## Running the frontends

Trevvos Web:

```bash
cd src/frontend/trevvos-web
npm install
npm run build
npm test
```

KM One Landing:

```bash
cd src/frontend/kmone-landing
npm install
npm run build
npm run lint
```

## Architecture approach

The platform is intentionally evolving as a **modular product codebase** rather than starting with unnecessary service boundaries.

The current priorities are:

- clear domain and application responsibilities;
- explicit infrastructure boundaries;
- relational persistence;
- testable backend behavior;
- documented architecture decisions;
- repeatable local development;
- cloud delivery without coupling the domain to a provider.

The architecture should grow when product pressure justifies it — not because a pattern is fashionable.

## Documentation

- [Repository architecture](docs/repository-architecture.md)
- [Migration history](docs/migration-history.md)
- [Azure deployment roadmap](docs/azure-deployment-roadmap.md)

## Status

**Active development.**

The current focus is consolidating the public platform, strengthening the .NET backend, and moving product capabilities into the monorepo only when the migration is technically justified.

The official KM One Android application remains outside this monorepo.

---

Built as the central engineering foundation for **Trevvos**.
