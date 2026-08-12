# Repository Architecture

## Objetivo

`trevvos-platform` passa a ser o monorepo oficial da plataforma Trevvos. A decisao reduz dispersao entre repositorios, facilita versionamento conjunto de contratos e documentacao, e deixa a preparacao para Azure em uma arvore unica.

## Organizacao

```text
src/backend/
src/frontend/trevvos-web/
src/frontend/kmone-landing/
tests/
docs/
```

## Backend

`src/backend` contem o backend oficial importado de `trevvos-api`:

- `Trevvos.Api`
- `Trevvos.Application`
- `Trevvos.Domain`
- `Trevvos.Infrastructure`
- `Trevvos.Worker`

Nesta consolidacao nao houve desenvolvimento de regras de negocio, endpoints, entidades, handlers ou servicos. Foram feitos apenas movimentacao e ajustes de caminhos.

## Frontends

`src/frontend/trevvos-web` contem o portal publico Angular iniciado localmente.

`src/frontend/kmone-landing` contem a landing atual do KM One, migrada de `kmone/web`. Ela permanece React/Vite e independente temporariamente para permitir publicacao rapida em `kmone.trevvos.com.br`.

## Fora Do Monorepo

`motor-kmone` continua privado e fora deste monorepo. Os diretorios legados `kmone/backend`, `kmone/mobile` e `kmone/mobile-v2` nao foram importados.
