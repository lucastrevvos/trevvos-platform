# ADR 0002 - Autenticação para web

## Contexto

O cliente web será Angular e a API ASP.NET Core. Tokens sensíveis no navegador ampliam risco de roubo.

## Decisão

Para navegador, usar ASP.NET Core Identity com sessão por cookie seguro, HTTP-only, `Secure`, política `SameSite` adequada, proteção CSRF e padrão semelhante a BFF quando API e web estiverem no mesmo domínio.

## Alternativas

- JWT em `localStorage`.
- JWT em memória com refresh token no navegador.
- Provedor externo exclusivo.

## Consequências positivas

- Reduz exposição de credenciais ao JavaScript.
- Usa recursos maduros do ASP.NET Core.
- Facilita revogação de sessão e CSRF explícito.

## Consequências negativas

- Requer cuidado com CSRF, cookies e domínio.
- Fluxos móveis ou API pública precisarão desenho separado.

## Riscos

- Configuração incorreta de cookies.
- Confusão entre sessão web e APIs públicas.

## Condições para revisão futura

- Aplicativo móvel nativo, API pública ou separação de domínios que justifique fluxo OAuth/JWT separado.
