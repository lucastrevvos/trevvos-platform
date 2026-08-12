# ADR 0005 - Adaptadores de integração externa

## Contexto

Calendar, Meet, Outlook, Teams, `.ics`, links manuais e IA têm provedores diferentes.

## Decisão

Usar adaptadores explícitos para integrações externas, com idempotência, tratamento de webhooks, auditoria e isolamento de credenciais.

## Alternativas

- Código direto do provedor dentro dos módulos de domínio.
- Integração única com Google.

## Consequências positivas

- Troca de provedor mais controlada.
- Menos vazamento de detalhes externos para o domínio.

## Consequências negativas

- Mais código quando a integração for implementada.

## Riscos

- Abstração prematura se criada antes do uso real.

## Condições para revisão futura

- Necessidade de provedor único por contrato ou mudança relevante na estratégia de integrações.
