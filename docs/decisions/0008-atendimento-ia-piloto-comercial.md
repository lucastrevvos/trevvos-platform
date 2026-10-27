# ADR 0008 — Validar Trevvos Atendimento IA no monorepo por meio de piloto comercial

- **Status:** Proposta
- **Data:** 2026-10-27
- **Escopo:** Trevvos Atendimento IA (novo produto B2B)

## Contexto

A Trevvos quer testar um produto de atendimento comercial com IA para empresas locais de Florianópolis. O monorepo já possui um portal Angular e um backend .NET modular, mas nenhum fluxo de atendimento B2B conectado ao WhatsApp. A hipótese de venda ainda não foi validada.

## Decisão

1. Criar uma rota pública específica `/atendimento-ia` no frontend Angular existente.
2. Apresentar a proposta como **programa piloto**; usar respostas estáticas e identificação clara de simulação no chat.
3. Direcionar interessados ao endereço comercial de e-mail já divulgado pelo portal.
4. Não criar tabelas, cadastro, autenticação, APIs externas, pipelines, agendas ou consumo de IA antes de validar os primeiros potenciais clientes.
5. Após validação, implementar o primeiro fluxo técnico no monólito modular existente, respeitando limites de módulos e isolamento de dados por empresa.
6. Qualquer alteração futura em autenticação, autorização, ledger de IA ou integrações que afetem módulos existentes deverá seguir as ADRs aplicáveis.

## Consequências

- Benefício: uma página compartilhável e um fluxo demonstrável sem custos de IA nem dependência de credenciais externas.
- Limitação: a página **não** é o produto funcional e não deve ser vendida como atendimento automatizado ativo.
- Risco comercial: preços e nicho são hipóteses e devem ser revisados com entrevistas.
- Critério de evolução: depois de clientes potenciais aceitarem proposta clara e haver canal oficial habilitado com segurança e consentimento.

## Alternativas rejeitadas

- Replicar imediatamente todos os canais de marketplace da Loopia: custo e prazo altos para hipótese não validada.
- Abrir repositório/backend/microserviço novo: cria manutenção desnecessária.
- Criar bot WhatsApp via QR Code não oficial: risco de bloqueio, conformidade e perda de confiança.

Ver plano comercial: [Trevvos Atendimento IA — piloto](../product/trevvos-atendimento-ia-piloto.md).
