# Trevvos Platform

Monorepo oficial da plataforma Trevvos: portal web, landing do KM One e backend central em .NET.

Este repositorio e a base principal do meu portfolio atual. Ele consolida produtos reais da Trevvos em uma unica estrutura, com frontends em Angular e backend em ASP.NET Core, evoluindo para APIs, banco relacional, autenticacao, integracoes e deploy em nuvem.

## Por que este projeto existe

A Trevvos nasceu como um ecossistema de produtos criados com apoio de IA, mas a direcao tecnica agora e transformar prototipos funcionais em sistemas sustentaveis.

Este monorepo mostra essa transicao:

- frontends funcionais criados e organizados para produto real;
- backend .NET construido com criterio, passo a passo e arquitetura clara;
- documentacao de arquitetura, migracao e deploy;
- consolidacao de repositorios antigos em uma plataforma unica;
- evolucao orientada por portfolio, mercado e fundamentos tecnicos.

## Produtos dentro da plataforma

### Portal Trevvos

Frontend institucional e operacional da Trevvos, usado como porta de entrada para a marca, conteudos, produtos e futuras capturas de leads.

### KM One Landing

Landing mobile-first do KM One, produto para motoristas de app avaliarem se uma corrida vale a pena usando preco, distancia, R$/km, combustivel, deslocamento e contexto operacional.

### Trevvos API

Backend central em .NET para sustentar portal, produtos, conteudo, dados, autenticacao, integracoes futuras e modulos compartilhados da plataforma.

## Stack principal

- **Backend:** C#, .NET, ASP.NET Core
- **Arquitetura:** API, Application, Domain, Infrastructure, Worker
- **Banco:** PostgreSQL, EF Core, Npgsql
- **Frontend:** Angular, TypeScript
- **Infra local:** Docker Compose
- **Qualidade:** testes automatizados, documentacao e validacao por build
- **Deploy planejado:** Azure

## Estrutura

```text
Trevvos Platform
├── Backend
│   └── Trevvos.Api
├── Frontends
│   ├── trevvos-web
│   └── kmone-landing
└── Tests
```

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

O backend consolidado veio do repositório legado `lucastrevvos/trevvos-api`, branch `feature/m0-platform-architecture`.

Comandos principais:

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

- [`docs/repository-architecture.md`](docs/repository-architecture.md)
- [`docs/migration-history.md`](docs/migration-history.md)
- [`docs/azure-deployment-roadmap.md`](docs/azure-deployment-roadmap.md)

## Status

Em evolucao ativa.

O objetivo atual e consolidar a base publica do portfolio, manter os frontends organizados e construir o backend .NET manualmente, com entendimento completo das decisoes tecnicas.

## Fora do Monorepo

`motor-kmone` permanece fora deste monorepo. O Android oficial nao faz parte desta consolidacao.
