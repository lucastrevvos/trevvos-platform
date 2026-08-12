# Visao De Arquitetura

A Trevvos usa este monorepo para manter backend, frontends e documentacao de plataforma em uma unica raiz operacional.

## Backend Consolidado

O backend atual foi importado do repositorio `trevvos-api` e esta em `src/backend`:

- `Trevvos.Api`: entrada HTTP e composicao web.
- `Trevvos.Application`: servicos de aplicacao e modulos iniciais.
- `Trevvos.Domain`: nucleo de dominio.
- `Trevvos.Infrastructure`: persistencia e integracoes de infraestrutura.
- `Trevvos.Worker`: worker .NET.

## Frontends

- `src/frontend/trevvos-web`: portal publico Angular.
- `src/frontend/kmone-landing`: landing React/Vite do KM One.

## Principios

- Preservar historico e codigo existente sempre que tecnicamente seguro.
- Separar backend e frontends por diretorios claros.
- Evitar alteracoes de comportamento durante tarefas de consolidacao.
- Registrar decisoes duradouras em documentos de arquitetura.
