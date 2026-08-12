# ADR 0003 - Ledger de uso de IA

## Contexto

A Professora Trevvos consome recursos comunitários escassos. Uso, custo e limites precisam ser auditáveis.

## Decisão

Projetar um ledger de IA append-only ou com garantia equivalente, registrando operação, idempotência, usuário, recurso, provedor, modelo, tokens, preço, custo, status e erro.

## Alternativas

- Apenas logs técnicos.
- Somente contador agregado.
- Cobrança individual por usuário.

## Consequências positivas

- Auditoria e reconciliação.
- Controle de orçamento.
- Transparência agregada.

## Consequências negativas

- Mais complexidade contábil.
- Exige política de retenção e redaction.

## Riscos

- Armazenar conteúdo privado demais.
- Duplicar consumo em falhas sem idempotência.

## Condições para revisão futura

- Mudança relevante nos modelos de cobrança de provedores ou exigência regulatória.
