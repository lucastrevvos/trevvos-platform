# KM One — decisões de produto, dados e canais (10/11/2026)

> **Status:** decisão confirmada para a **futura fase com backend**. Não descreve a versão Android atualmente publicada. Implementação e cronograma ainda pendentes.

## 1. Política comercial e cadastro

- Na **fase atual sem backend**, o KM One é divulgado como gratuito e sem cadastro obrigatório; **isso é provisório**.
- Na **versão lançada com backend**, **cadastro/autenticação serão obrigatórios** para usar o produto.
- O **modelo comercial será redefinido** nessa transição. Não prometer que gratuidade, planos, limites ou condições atuais continuarão. Preços e condições ainda exigem decisão específica.
- Manter comunicação transparente da transição, termos e política de privacidade antes de mudar o acesso dos motoristas.
- **Offline-first permanece**: depois do cadastro obrigatório, cálculos e registros locais podem operar temporariamente sem rede, com envio incremental assim que viável. Login obrigatório não significa exigir rede a cada captura.

## 2. Sincronização automática e obrigatória

- A comunicação Android ↔ **Trevvos.Api** será **automática e obrigatória**, não opt-in.
- Sincronizar **todas as ofertas vistas válidas/registradas**, aceitas ou não, inclusive itens posteriormente apagados/ocultos do histórico local.
- Sincronizar também corridas realizadas/registradas, abastecimentos, deslocamentos e km, metas e configurações pertinentes.
- **Ofertas vistas ≠ ganhos**: eventos de oferta e corrida são entidades independentes, não misturar nos KPIs financeiros. Entrada OCR/parser sem preço principal confiável é diagnóstico, não oferta válida.
- O banco central retém sua cópia **independentemente da exclusão na UI do dispositivo**, inclusive para análises históricas e produtos futuros; estabelecer governança e finalidades legítimas para esses usos.
- Excluir do histórico **local** não é pedido de exclusão da conta/servidor. Para pedidos de eliminação conforme LGPD, criar fluxo distinto e verificável.

## 3. Garantias técnicas a projetar

- Autenticação por `UserId` do token, autorização por proprietário, vínculo de dispositivo e migração de dados antigos ao criar conta.
- Outbox persistente antes da limpeza local, IDs estáveis por registro, API versionada, lotes incrementais, deduplicação/idempotência, retries/backoff, ACK e rastreamento de falhas.
- Se o motorista apagar a oferta antes do ACK, **preservar o evento na outbox até a confirmação remota**. Não prometer recuperação de dados que jamais foram transmitidos (desinstalação sem internet).
- Projetar correções/atualizações, exclusões/tombstones locais sem apagar remoto por engano, conflitos e reenvios.
- Marcar data da última sincronização bem-sucedida; qualquer resumo remoto deve indicar quando estiver defasado.
- Minimização, retenção, auditoria, acesso, consentimentos onde exigidos, segurança e direitos dos titulares conforme LGPD. Captura de tela e OCR bruto não são necessários por padrão.

## 4. WhatsApp — backlog, não escopo da release atual

- Copiloto **reativo** via **Meta WhatsApp Cloud API**: motorista faz perguntas sobre dados da API, histórico de ofertas, ganhos, km, combustível, metas, clima, dicas e parceiros.
- Integração por webhook + ferramentas (*function calling*) sobre serviços autenticados da Trevvos.Api; **API calcula os indicadores**, a LLM os explica e contextualiza, sem inventar dados.
- Objetivo de usar **um único número existente do WhatsApp Business** para bot e resposta humana, condicionado a elegibilidade e validação de *Coexistence*. Não migrar o número por fluxo que o desconecte do aplicativo sem testar.
- Atendimento humano deve poder assumir a conversa, com **pausa explícita da IA**. Nunca responder a contatos pessoais/desconhecidos automaticamente.
- Checar tarifas Meta/LLM, termos, permissões, opt-in de comunicações comerciais e privacidade antes da ativação.
- Sem envios proativos de marketing por padrão no MVP; comunicação comercial é fluxo e consentimento separados.

## Rastreamento

- [Backend + cadastro + dados (trevvos-platform #10)](https://github.com/lucastrevvos/trevvos-platform/issues/10)
- [Sincronização Android (motor-kmone #59)](https://github.com/lucastrevvos/motor-kmone/issues/59)
- [Copiloto WhatsApp (trevvos-platform #11)](https://github.com/lucastrevvos/trevvos-platform/issues/11)

**Regra de entrega:** backlog separado das Issues Android em homologação. Sem merge, deploy, publicação Play ou alteração do modelo comercial sem aprovação e plano de migração.
