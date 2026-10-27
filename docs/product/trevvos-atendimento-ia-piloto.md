# Trevvos Atendimento IA — validação comercial em Florianópolis

Status: **hipótese comercial + landing demonstrativa** (não há produto de atendimento integrado em produção).

## Tese

Vender implantação assistida de atendimento comercial para negócios locais que recebem perguntas frequentes pelo WhatsApp e perdem tempo ou oportunidades quando a equipe está ocupada.

**Não competir inicialmente com toda a Loopia.** A Loopia serve operações multicanal/e-commerce e anuncia planos a partir de R$ 999/mês. Nossa aposta é um serviço inicial mais delimitado, com configuração e acompanhamento local.

Fontes consultadas em 27/10/2026:
- https://loopia.com.br/
- https://loopia.com.br/planos/
- https://observatorio.sebrae.com.br/profile/geo/florianopolis
- https://whatsappbusiness.com/policy/
- https://business.whatsapp.com/products/platform-pricing

## Escolha inicial de mercado

- **Nicho piloto prioritário:** pet shops com banho e tosa e equipe pequena.
- **Alternativas após descoberta:** estética automotiva, salões de beleza e serviços recorrentes.
- **Perfil ideal:** negócio com volume relevante de contatos inbound, catálogo relativamente estável, proprietário disponível para revisar regras de atendimento e alguém responsável por assumir casos não resolvidos.
- **Excluir na primeira versão:** saúde humana, pagamentos no chat, recuperação massiva de contatos e setores com dados particularmente sensíveis.

Escolha de pet shops é uma *hipótese*, não uma análise de clientes comprovadamente dispostos a pagar.

## Promessa permitida

> "Atenda dúvidas frequentes com menos esforço, organize pedidos de orçamento e encaminhe cada conversa para a pessoa certa."

Não prometer crescimento de receita, respostas instantâneas garantidas, agenda sincronizada, disponibilidade 24/7 ou agentes autônomos enquanto esses comportamentos não forem validados.

## Primeiro fluxo vendável

1. Receber mensagem de um canal de WhatsApp Business oficialmente habilitado para o cliente.
2. Identificar intenção: dúvida, preço, orçamento, pedido de horário, atendimento humano ou outro.
3. Buscar informações aprovadas pelo cliente (serviços, bairros atendidos, horário, preços existentes, regras).
4. Responder dentro dos limites da base; não alucinar valores, horários ou condições comerciais.
5. Se incerto, se houver pedido explícito ou se tratar de preço/agendamento não confirmado, **escalar para humano**.
6. Registrar evento técnico mínimo para métricas e acompanhamento, com retenção definida por cliente e política de privacidade.
7. Medir se houve qualificação e retorno humano; negócio confirma fechamento, sem atribuição automática indevida de vendas.

**Não incluído na primeira versão:** marketplace, multicanal, disparos em massa, ERP, pagamento, agenda automática, CRM avançado ou aplicativo móvel.

## Estimativa comercial a validar

- **Oferta fundadores (hipótese inicial, não publicada como preço):** configuração R$ 390 + mensalidade de R$ 297, sem fidelidade.
- Serviços externos (mensageria oficial, infraestrutura, execução de modelo de IA) e eventuais limites de uso: precisam de orçamento documentado e transparência na proposta; não presumir custo marginal zero.
- **Piloto comercial:** demonstração + diagnóstico sem cobrança; acordo de teste assistido com termos objetivos antes de conectar canal real.
- Meta de validação: 15 conversas com negócios qualificados, 5 demonstrações reais e **2 pilotos pagos**, antes de investir em painéis sofisticados.
- Critério de continuidade: clientes aceitam o preço, uso real no canal oficial e redução percebida de trabalho sem deterioração da qualidade de atendimento.

## Perguntas para diagnóstico (10 minutos)

1. Quantas mensagens de novos interessados a empresa recebe em um dia típico?
2. Quais são as 5 perguntas mais repetidas?
3. O que acontece quando chega mensagem fora do expediente?
4. Que dados o cliente precisa informar antes de receber um orçamento?
5. Quem pode confirmar preço, prazo e horário? E quem assume um atendimento humano?
6. Já usa WhatsApp Business API? Há ferramentas de automação em uso?
7. Que melhoria justificaria uma assinatura mensal?

## Execução

### Semana 1 — comercial e configuração

- Publicar página `/atendimento-ia` depois de revisão, build e deploy.
- Validar nome e posicionamento; preparar demonstração com dados fictícios.
- Abordar manualmente 15 negócios localizados em Florianópolis, respeitando canais adequados e sem disparo de spam.
- Realizar entrevistas de descoberta e confirmar os critérios de compra.
- Selecionar apenas clientes aptos ao onboarding oficial de WhatsApp.

### Semana 2 — primeiro piloto real

- Validar documentação e habilitação de número Meta, sem usar soluções não oficiais.
- Definir serviço, catálogo, restrições e caminho de transferência para humano.
- Implementar webhook com validação de assinatura, idempotência para eventos, limites de respostas, rastreabilidade e registro de consentimento conforme o caso.
- Testar em sandbox e com o próprio número; somente depois habilitar mensagens reais.
- Registrar métricas antes/depois, erros e feedback dos atendentes.

## Métricas

- Quantidade de conversas com novos interessados (com definição clara de `lead`).
- Percentual de perguntas respondidas corretamente conforme amostra revisada por humano.
- Tempo até a primeira resposta humana ou automatizada, separadamente.
- Handoffs, perguntas sem resposta, respostas corrigidas e reclamações.
- Orçamentos **confirmados pela equipe** e conversões **declaradas** pelo negócio.
- Receita recorrente, custos por cliente e margem bruta efetiva.

## Segurança, políticas e LGPD

- Solicitar autorização clara da empresa e estabelecer papéis no tratamento de dados (controlador/operador), instrumentos contratuais e política pública de privacidade.
- Usar WhatsApp Business Platform oficial; observar janela de atendimento, modelos aprovados e regras vigentes de preço por categoria, consentimento e opt-out.
- Restringir o assistente à base autorizada, oferecer intervenção humana e evitar envio de dados de um cliente a outro.
- Separar rigorosamente dados e chaves de cada empresa (tenant); não incluir segredos em repositório.
- Validar assinatura dos webhooks da Meta; não confiar em eventos sem autenticação.
- Nunca usar dados reais em demonstrações comerciais sem base legal e autorização.
- Não declarar o bot "funcionando no WhatsApp" com base apenas nesta página demonstrativa.

## Próximo incremento técnico após vendas confirmadas

A primeira implementação backend deve ser um fluxo vertical no monólito .NET existente, com adaptador oficial Meta, armazenamento isolado por cliente e função de handoff simples. Não criar microserviços nem arquitetura distribuída prematuramente. A página demonstrativa utiliza apenas respostas pré-definidas e **não envia mensagens**.

## Registro comercial

Usar planilha leve com: empresa, bairro, segmento, contato público, origem, data da abordagem, necessidade, volume de contatos, ferramenta atual, interesse, próxima ação e status. Evitar importar listas pessoais ou realizar envios em massa sem consentimento.
