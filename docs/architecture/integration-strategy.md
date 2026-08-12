# Estratégia de Integrações

Integrações externas devem entrar por adaptadores explícitos, com idempotência, auditoria e isolamento de credenciais.

## Agenda e Reuniões

Interfaces futuras:

```text
ICalendarProvider
IMeetingProvider
```

Implementações futuras:

- Google Calendar
- Google Meet
- Microsoft Outlook
- Microsoft Teams
- arquivo `.ics`
- link manual

A agenda interna da Trevvos será a fonte oficial. Cada encontro poderá ter link próprio de reunião.

## IA

Chamadas a modelos passarão por gateway próprio futuro, com política, reserva de orçamento, idempotência, ledger e reconciliação.
