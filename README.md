# Trevvos API

API central oficial da plataforma Trevvos.

Este repositório começa como uma fundação arquitetural em .NET 8 LTS, ASP.NET Core e modular monolith. Ele prepara o backend para portal público, captura de leads, conteúdo SEO, IA compartilhada, backend do KM One, sync mobile, auditoria, consentimentos, login e pagamentos futuros.

## Escopo Atual

Implementado agora:

- Solution .NET com projetos `Api`, `Application`, `Domain`, `Infrastructure`, `Worker`.
- Endpoint `GET /health`.
- Swagger/OpenAPI em ambiente `Development`.
- Serilog básico.
- EF Core/Npgsql preparado no Infrastructure, sem entidades e sem migrations.
- Docker Compose local para PostgreSQL.
- Testes xUnit básicos.
- Documentação inicial de produto, arquitetura, contratos futuros, IA, KM One, portal e Azure.

Fora do escopo agora:

- Login real.
- Pagamentos reais.
- IA real.
- Integração real com Azure.
- Mercado Pago/Stripe.
- Publicação real de artigos.
- Sync real do app Android.
- Painel admin.
- Coleta/scraping de contexto de cidade.

## Estrutura

```text
src/
  Trevvos.Api/
  Trevvos.Application/
  Trevvos.Domain/
  Trevvos.Infrastructure/
  Trevvos.Worker/
tests/
  Trevvos.UnitTests/
  Trevvos.IntegrationTests/
docs/
  product/
  architecture/
  api/
  ai/
  kmone/
  portal/
  azure/
```

## Como Rodar Localmente

Suba o PostgreSQL local:

```powershell
docker compose up -d
```

Rode a API:

```powershell
dotnet run --project src/Trevvos.Api
```

Endpoints iniciais:

- `GET /health`
- Swagger em Development: `/swagger`

## Validação

```powershell
dotnet build
dotnet test
```

## Documentação Principal

- [ARCHITECTURE.md](ARCHITECTURE.md)
- [docs/product/platform-vision.md](docs/product/platform-vision.md)
- [docs/architecture/system-overview.md](docs/architecture/system-overview.md)
- [docs/api/public-site-contracts.md](docs/api/public-site-contracts.md)
- [docs/api/kmone-contracts.md](docs/api/kmone-contracts.md)
- [docs/api/mobile-sync-contract.md](docs/api/mobile-sync-contract.md)
- [docs/ai/ai-boundaries.md](docs/ai/ai-boundaries.md)
