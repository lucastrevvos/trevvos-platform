# ADR 0006 - Tempo e fusos horários

## Contexto

Parcerias podem ser globais. Encontros dependem de fuso, horário de verão e remarcações.

## Decisão

Persistir instantes em UTC e guardar o identificador IANA do fuso do usuário ou do evento quando necessário.

## Alternativas

- Guardar apenas horário local.
- Guardar offset fixo.

## Consequências positivas

- Melhor suporte a operação internacional.
- Compatível com mudanças de horário de verão.

## Consequências negativas

- Exige conversões explícitas na interface.

## Riscos

- Ambiguidade em recorrências e horários inexistentes por horário de verão.

## Condições para revisão futura

- Adoção de biblioteca especializada de tempo ou novos requisitos de recorrência.
