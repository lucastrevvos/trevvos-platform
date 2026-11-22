# Arquitetura do repositório — 22/11/2026

## Objetivo

`trevvos-platform` é o monorepo oficial da Trevvos: aplicações web públicas independentes e base compartilhada de backend .NET.

## Organização

```text
src/backend/
src/frontend/trevvos-web/
src/frontend/kmone-landing/
tests/
docs/
```

## Backend

`src/backend` contém `Trevvos.Api`, `Trevvos.Application`, `Trevvos.Domain`, `Trevvos.Infrastructure` e `Trevvos.Worker`, com C#/.NET e PostgreSQL na infraestrutura local de desenvolvimento.

Seu estado de implantação externa é independente dos sites estáticos e requer confirmação no provedor de nuvem antes de desativar infraestrutura anterior.

## Frontends

- `src/frontend/trevvos-web`: portal institucional **Next.js/React/TypeScript** com exportação estática para Azure Static Web Apps, substituindo o antigo frontend Angular em novembro de 2026.
- `src/frontend/kmone-landing`: landing KM One **React/Vite**, publicada em Azure Static Web Apps, com workflow independente.

## Fora do monorepo

O app Android `motor-kmone` permanece em repositório próprio; também permanecem fora do monorepo os projetos legados `kmone/backend`, `kmone/mobile` e `kmone/mobile-v2`.

O projeto `portaltrevvos` com infraestrutura VPS e o antigo `trevvos-neural-portal` estão arquivados no GitHub. Preservar seu histórico para consulta; eles não são a fonte de deploy dos sites atuais.
