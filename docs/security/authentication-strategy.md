# Estratégia de Autenticação e Autorização

A autenticação completa não foi implementada nesta fundação.

## Decisão para navegador

O cliente Angular e a API devem operar preferencialmente no mesmo domínio. O fluxo web usará ASP.NET Core Identity, sessão por cookie seguro e HTTP-only, padrão semelhante a BFF, proteção CSRF, verificação de e-mail, recuperação de senha, revogação de sessões, proteção contra força bruta, rate limiting, login Google futuro e MFA futuro.

JWT e refresh tokens não devem ser armazenados em `localStorage`. Caso um aplicativo móvel ou API pública precise de JWT, isso será um fluxo futuro separado.

## Autorização

A autorização deve usar políticas, propriedade de recursos, participantes de parceria, bloqueios entre usuários, moderadores, administradores, responsáveis financeiros e permissões para configuração de provedores de IA. Roles genéricas sozinhas não bastam.

## Privacidade de conta

O Marco 1 deve prever exclusão, anonimização e trilha de auditoria para ações administrativas.
