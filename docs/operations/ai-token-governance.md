# Governança de Tokens de IA

Tokens de IA são unidades de consumo de modelos. Eles não são tokens de autenticação.

## Conceitos

- `AiProvider`: provedor, como OpenAI, Google ou outro.
- `AiModel`: modelo oferecido por provedor.
- `AiPriceVersion`: versão de preços por modelo, moeda, entrada, saída e cache.
- `AiOperation`: ação da plataforma, como normalizar habilidade ou explicar match.
- `AiUsageReservation`: reserva de orçamento antes da chamada.
- `AiUsageRecord`: uso real retornado ou estimado após a chamada.
- `AiBudget`: orçamento financeiro comunitário.
- `AiBudgetPolicy`: regras de consumo do orçamento.
- `AiFeaturePolicy`: liga, limita ou desliga funcionalidades de IA.
- `AiProviderCredit`: crédito promocional de provedor.
- `AiUsageLimit`: limite comunitário, por usuário, parceria ou operação.
- `AiUsageLedger`: ledger auditável e preferencialmente append-only.

## Fluxo

```text
Solicitação
-> validação da política
-> estimativa
-> reserva de orçamento
-> chamada ao provedor
-> registro do uso real
-> confirmação do custo
-> liberação da reserva excedente
-> auditoria
```

Falhas devem liberar ou reconciliar reservas sem consumo duplicado. Toda operação deve ter identificador idempotente.

## Registro mínimo de uso

- identificador idempotente;
- operação;
- recurso da plataforma;
- usuário responsável;
- provedor;
- modelo;
- identificador da requisição externa;
- tokens de entrada, saída e cache quando aplicável;
- preço aplicado;
- versão da tabela de preços;
- custo estimado;
- custo real;
- moeda;
- instante;
- status;
- erro quando houver;
- metadados técnicos sem conteúdo privado desnecessário.

## Privacidade

Prompts e respostas completos não devem ser armazenados indiscriminadamente. A política padrão deve ser guardar metadados, resumos técnicos, hashes ou trechos redigidos quando necessário para suporte e auditoria.

## Painéis futuros

- público agregado: consumo total, autonomia estimada e impacto de patrocinadores;
- administrativo detalhado: provedores, modelos, preços, reservas, falhas, limites e reconciliações.
