# Trevvos Platform

Monorepo oficial da plataforma Trevvos.

```text
Trevvos Platform
├── Backend
│   └── Trevvos.Api
├── Frontends
│   ├── trevvos-web
│   └── kmone-landing
└── Tests
```

## Estrutura

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

## Backend

O backend consolidado veio do repositório `lucastrevvos/trevvos-api`, branch `feature/m0-platform-architecture`.

Comandos:

```bash
dotnet restore
dotnet build
dotnet test
dotnet run --project src/backend/Trevvos.Api/Trevvos.Api.csproj
```

## Frontends

Portal Trevvos:

```bash
cd src/frontend/trevvos-web
npm install
npm run build
npm test
```

Landing KM One:

```bash
cd src/frontend/kmone-landing
npm install
npm run build
npm run lint
```

## Documentacao

- `docs/repository-architecture.md`
- `docs/migration-history.md`
- `docs/azure-deployment-roadmap.md`

## Fora Do Monorepo

`motor-kmone` permanece fora deste monorepo. O Android oficial nao faz parte desta consolidacao.
