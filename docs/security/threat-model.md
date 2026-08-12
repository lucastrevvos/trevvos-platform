# Threat Model Inicial

Este documento orienta segurança e privacidade. Não é aconselhamento jurídico definitivo.

## Ameaças e Controles

| Ameaça | Controles recomendados | Entrada |
| --- | --- | --- |
| Contas falsas | e-mail verificado, rate limit, sinais de abuso | MVP |
| Roubo de sessão | cookie `Secure`, `HttpOnly`, `SameSite`, rotação e revogação | Marco 1 |
| Enumeração de usuários | respostas genéricas e throttling | Marco 1 |
| Força bruta | lockout progressivo, rate limit e auditoria | Marco 1 |
| Spam e assédio | denúncia, bloqueio, moderação e limites | MVP |
| Grooming | MVP 18+, denúncias, moderação e políticas claras | MVP |
| Links maliciosos | aviso, moderação e futuras listas de reputação | MVP |
| Arquivos contaminados | upload fora do MVP; antivírus antes de ativar | Depois |
| Vazamento de conversa | acesso por participante, auditoria e retenção | MVP |
| Abuso de IA | orçamento, limites por usuário, idempotência e auditoria | Marco 6 |
| Esgotamento do fundo | reservas, limites comunitários e desligamento progressivo | Marco 6 |
| Fraude em doações | reconciliação financeira e auditoria administrativa | Marco 7 |
| Abuso administrativo | políticas, MFA, segregação de funções e auditoria | MVP |
| Credenciais OAuth expostas | cofre de segredos, rotação e escopo mínimo | Marco 4 |
| Ataques a webhooks | assinatura, replay protection e idempotência | Marco 4 |
| Replay | nonces, timestamps e chaves idempotentes | MVP |
| IDOR | autorização por propriedade e participação | MVP |
| Escalada de privilégios | políticas e testes de autorização | MVP |
| Scraping | rate limit, detecção e termos de uso | Depois |
| Negação de serviço | rate limit, health checks e limites de payload | Fundação/MVP |
| Conteúdo ilegal | denúncia, remoção, auditoria e processo de incidente | MVP |
| Dados sensíveis enviados à IA | consentimento, redaction e retenção mínima | Marco 6 |

## Fundação implementada

- Correlation ID.
- Logs estruturados.
- Health checks.
- CORS restrito para desenvolvimento.
- Nenhum segredo real versionado.

## Requisitos antes de produção

- HTTPS obrigatório.
- Cookies seguros.
- CSRF.
- Rate limiting.
- Auditoria administrativa.
- Política de retenção.
- Processo de resposta a incidentes.
