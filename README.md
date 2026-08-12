# Trevvos Platform

Trevvos é uma comunidade global e gratuita de troca de conhecimentos. A plataforma vai conectar pessoas que podem ensinar e aprender umas com as outras, sem créditos individuais, carteira de horas ou equivalência financeira entre conhecimentos.

Estado atual: Marco 0 - fundação. Este repositório contém apenas a base executável, documentação inicial e decisões arquiteturais. Cadastro, login, perfis, habilidades, matching, agenda, chat, doações e IA ainda não foram implementados.

## Stack

- .NET SDK 10.0.301
- ASP.NET Core 10
- C# / nullable reference types
- Entity Framework Core 10
- PostgreSQL 17 Alpine por Docker Compose
- Angular 21.2
- Node 20.19.4
- npm 10.8.2
- xUnit

## Requisitos

- .NET SDK 10.0.301 ou compatível com `global.json`
- Node.js 20 LTS
- npm 10
- Docker com Docker Compose
- Bash para executar scripts e comandos documentados

## Estrutura

```text
src/backend/Trevvos.Api              API ASP.NET Core
src/backend/Trevvos.SharedKernel     contratos transversais mínimos
src/frontend/trevvos-web             aplicação Angular
tests/Trevvos.ArchitectureTests      regras básicas de dependência
tests/Trevvos.IntegrationTests       testes de integração do health check
docs/                               produto, arquitetura, segurança, operação e ADRs
scripts/                            scripts Bash de desenvolvimento
```

## Configuração

```bash
cp .env.example .env
dotnet restore
npm ci --prefix src/frontend/trevvos-web
docker compose up -d
```

As credenciais de `.env.example` são apenas de desenvolvimento local. Nenhum segredo real deve ser versionado.

## Execução

Backend:

```bash
dotnet run --project src/backend/Trevvos.Api/Trevvos.Api.csproj
```

Frontend:

```bash
npm start --prefix src/frontend/trevvos-web
```

Health checks:

```bash
curl http://localhost:5211/health/live
curl http://localhost:5211/health/ready
```

## Testes e build

```bash
dotnet build
dotnet test
npm run build --prefix src/frontend/trevvos-web
docker compose config
```

## Decisões principais

- Monólito modular em um único repositório.
- Módulos de domínio documentados antes de serem implementados.
- Navegador usará cookies seguros HTTP-only e padrão próximo a BFF no futuro, não JWT em `localStorage`.
- Tokens de autenticação e tokens de modelos de IA são conceitos separados.
- IA depende de orçamento comunitário, limites e ledger auditável.
- Doações, créditos promocionais e infraestrutura cedida não são somados como dinheiro em caixa.
- Agenda interna será a fonte oficial; Google Calendar e Meet serão adaptadores externos futuros.

## Próximos passos

1. Estudar a fundação e executar os comandos locais.
2. Iniciar o Marco 1 com modelagem de Identity, sessão por cookie, CSRF e auditoria.
3. Criar ADRs adicionais antes de alterar autenticação, ledger de IA ou governança financeira.
