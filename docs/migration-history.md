# Migration History

Data da consolidacao: 2026-08-12.

## Origens

- Backend: `https://github.com/lucastrevvos/trevvos-api`, branch `feature/m0-platform-architecture`, commit `56355dd`.
- Angular Trevvos: implementacao local existente em `C:\dev\PROJETOS\trevvos-platform\src\frontend\trevvos-web`.
- KM One Landing: `https://github.com/lucastrevvos/kmone`, branch `main`, diretorio `web/`, commit observado `c535f3e`.

## Migrado

- `trevvos-api/src/*` para `src/backend/*`.
- `trevvos-api/tests/*` para `tests/*`.
- Documentacao do backend de `trevvos-api/docs/*` para `docs/backend/*`.
- `trevvos-api/ARCHITECTURE.md` para `docs/backend/ARCHITECTURE.trevvos-api.md`.
- `trevvos-api/appsettings.example.json` para `src/backend/appsettings.example.json`.
- `trevvos-api/docker-compose.yml` para `src/backend/docker-compose.yml`.
- `kmone/web/*` para `src/frontend/kmone-landing/*`.

## Nao Migrado

- `kmone/backend`.
- `kmone/mobile`.
- `kmone/mobile-v2`.
- `motor-kmone`.

## Observacoes

O estado anterior do `trevvos-platform` foi preservado no commit `74118bc` antes da substituicao do backend. A historia do repositorio `trevvos-api` foi conectada ao monorepo por merge de historico com estrategia `ours`, sem aplicar merge automatico de arquivos.

O remoto `trevvos-web` nao retornou branches no momento da auditoria. Por isso, o Angular local foi mantido como fonte principal.
