# Trevvos Platform

**Monorepo oficial da Trevvos Soluções em IA.** Este repositório concentra as aplicações web públicas e a base compartilhada do backend .NET.

## Aplicações em uso

| Componente | Caminho | Tecnologia | Destino de publicação |
| --- | --- | --- | --- |
| Trevvos Web | `src/frontend/trevvos-web` | Next.js App Router / React / TypeScript | Azure Static Web Apps — `trevvos.com.br` |
| KM One Landing | `src/frontend/kmone-landing` | React / Vite | Azure Static Web Apps — `kmone.trevvos.com.br` |
| Trevvos API | `src/backend` | C# / ASP.NET Core / EF Core / PostgreSQL | Backend em evolução; hospedagem de produção deve ser confirmada separadamente |

A publicação dos dois frontends utiliza **workflows independentes** em `.github/workflows/`. Não há deploy web para VPS neste monorepo.

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
scripts/
```

## Desenvolvimento local

Pré-requisito: Node.js compatível com cada frontend, .NET SDK para o backend e, quando necessário, Docker para PostgreSQL local.

```bash
# Site institucional (Next.js)
cd src/frontend/trevvos-web
npm ci
npm run dev

# Build/exportação estática
npm run build

# Testes do site
npm test
npm run typecheck
```

Para KM One:

```bash
cd src/frontend/kmone-landing
npm ci
npm run build
```

Para o backend:

```bash
dotnet restore
dotnet build
dotnet test
dotnet run --project src/backend/Trevvos.Api/Trevvos.Api.csproj
```

O `docker-compose.yml` da raiz fornece **PostgreSQL para desenvolvimento local**. Não é uma configuração de VPS de produção.

## Publicação

- Trevvos Web: `.github/workflows/azure-static-web-apps-nice-flower-0494eb010.yml`; exportação Next.js em `out`.
- KM One Landing: `.github/workflows/azure-static-web-apps-delightful-hill-04248b510.yml`; build Vite em `dist`.
- Domínios e recursos Azure são administrados fora do GitHub; não confundir arquivos de deploy versionados com a exclusão de recursos em nuvem.
- A conta Formspree e seus destinatários são configurados diretamente no serviço.

## Histórico e infraestrutura legada

Os repositórios `lucastrevvos/portaltrevvos` e `lucastrevvos/trevvos-neural-portal` estão **arquivados**. O primeiro contém scripts e documentação históricos da antiga VPS, que **não são a pipeline do site institucional atual**. Não excluir Hostinger, Caddy, bancos, segredos ou endpoints sem verificar se algum consumidor ainda depende deles.

Veja [inventário da infraestrutura legada](docs/legacy-infrastructure-audit.md), [arquitetura do repositório](docs/repository-architecture.md), [implantação Azure](docs/azure-deployment-roadmap.md) e [histórico de migração](docs/migration-history.md).

O aplicativo Android KM One continua fora deste monorepo.
