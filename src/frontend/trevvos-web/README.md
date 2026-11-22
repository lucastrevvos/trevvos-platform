# Trevvos — site institucional

Next.js App Router, React e TypeScript estrito. Portal institucional com exportação estática, preservando as seções, marcas, tipografia, imagens e interações desenvolvidas, com os dois formulários comerciais integrados ao Formspree.

## Executar

Requer Node.js 24 LTS e npm. Ambiente validado com Node 24.15.0; `engines.node`, `.nvmrc` e `.node-version` registram a linha 24. Use as atualizações de manutenção dessa linha.

```powershell
npm ci
npm run dev
```

Abra http://localhost:3000. Para conferir a produção local: `npm run build` e `npm start`. O preview serve apenas os arquivos de `out` em http://127.0.0.1:3000, sem servidor Next.js.

## Publicação estática

A aplicação está em `src/frontend/trevvos-web`, na branch `deploy/trevvos-nextjs`. `next.config.ts` define `output: "export"` e `images.unoptimized: true`: o build gera HTML, CSS, JavaScript, imagens e fontes em `out`. Não há dependência obrigatória de SSR, API Routes ou Server Actions. Os formulários enviam diretamente do navegador ao Formspree.

As fontes Google são baixadas no build e empacotadas na exportação; a geração precisa de acesso à rede. Imagens e logotipos de `public` são preservados, inclusive os recursos legados do portal. Não é necessário um otimizador de imagens em execução.

O workflow Azure já preparado usa `output_location: "out"` e define os dois IDs Formspree como `xyzebnjv`. Seus gatilhos automáticos continuam apontando para `main`; publicar a branch de implantação prepara o código para revisão sem executar uma implantação Azure. Nenhum workflow, domínio, recurso Azure, backend ou aplicação KM One foi alterado nesta migração.

A decisão está registrada em [ADR 0001](docs/adr/0001-nextjs-static-export.md). A versão Angular permanece em `backup/trevvos-web-angular-2026-11-22`, e a pasta original do Next.js foi preservada.

## Configurar o Formspree

Os dois componentes comerciais compartilham o formulário existente `xyzebnjv`, endpoint https://formspree.io/f/xyzebnjv, conforme decisão do responsável pela Trevvos. Não foram criados novos formulários nem alteradas configurações no dashboard, o site independente do KM One ou cadastros de testadores.

O `.env.example` registra a configuração pública de publicação:

```dotenv
NEXT_PUBLIC_FORMSPREE_CONTACT_ID=xyzebnjv
NEXT_PUBLIC_FORMSPREE_COMMERCE_ID=xyzebnjv
```

O `.env.local` está ignorado pelo Git e não é necessário para o build padrão: sem variáveis, o contato usa o ID público `xyzebnjv` e Commerce herda esse ID. Para configurar explicitamente outro ambiente, copie o exemplo para `.env.local`. O workflow de produção já define as duas variáveis como acima. Variáveis `NEXT_PUBLIC_` são incorporadas ao frontend; mudanças exigem um novo build. Reinicie o servidor de desenvolvimento se a configuração não for recarregada.

O ID público fica em **Integration**, após `/f/` no endpoint. Não use URL completa, token administrativo ou chave de API nas variáveis. Referência: [localização do endpoint](https://help.formspree.io/articles/building-your-form/building-an-html-form/). A integração continua usando `@formspree/react`, sem servidor SMTP ou backend intermediário.

A configuração admite IDs separados futuramente e fallback explícito do Commerce para o ID comercial quando sua variável estiver vazia. Na publicação atual, ambos usam o mesmo ID. Uma variável de contato explicitamente vazia ou inválida bloqueia o respectivo envio, sem confirmação simulada.

A conta Formspree não foi acessada. Ativação do formulário, consumidores antigos, destinatário, regras, limites e separação dos registros históricos continuam dependendo de conferência no dashboard; a configuração local não comprova esses pontos. Não foi realizado envio de teste contra o endpoint real nem confirmada entrega por e-mail.

### Destinatário, mensagens e domínio

No dashboard, vincule e verifique o e-mail comercial desejado em **Account / Linked Emails**. Em cada formulário, configure o destinatário em **Workflow → Email → Settings**; contas legadas podem mostrar **Form Settings / Target Email**. O destinatário não é definido no código. Instruções: [e-mail de destino](https://help.formspree.io/articles/form-and-project-settings/changing-a-form-email-address).

Consulte os envios na área **Submissions** do formulário, inclusive a pasta de spam quando necessário, e confirme também a notificação na caixa de e-mail configurada. A confirmação do frontend indica que a integração confirmou a submissão; ela não comprova entrega na caixa de e-mail.

Configure **Project Settings → Restrict to Domain** para o domínio institucional, por exemplo `trevvos.com.br`, após confirmar o domínio publicado. Não inclua protocolo. A regra no domínio raiz também abrange subdomínios; uma regra só para `www` é mais restrita. O recurso depende do cabeçalho Referer: não publique uma Referrer-Policy `no-referrer` ou `same-origin`. Confira as regras antes de um teste em localhost, que pode ser classificado como spam. Referência: [restrição de domínio](https://help.formspree.io/articles/form-and-project-settings/restrict-to-domain).

### Separação dos leads e dados enviados

| Campo          | Contato comercial                                | Interesse Commerce                     |
| -------------- | ------------------------------------------------ | -------------------------------------- |
| `origem`       | `trevvos-institucional`                          | `trevvos-commerce`                     |
| `tipo`         | `contato-comercial`                              | `interesse-produto`                    |
| `produto`      | `Soluções sob medida`                            | `Trevvos Commerce`                     |
| `contexto_cta` | Seção, texto e contexto do CTA, quando utilizado | Seção e texto do CTA, quando utilizado |
| `servico`      | Opção selecionada, obrigatória                   | Não se aplica                          |

O campo `subject` identifica o assunto da notificação: `Trevvos | Contato comercial: <serviço selecionado>` para diagnóstico e `Trevvos Commerce | Interesse no produto` para Commerce. O assunto comercial usa apenas opções válidas da lista de serviços, sem dados pessoais ou texto livre. Implementação conforme a [documentação oficial de assuntos](https://help.formspree.io/articles/building-your-form/email-subject-line/).

Campos comuns: `subject`, `nome`, `email`, `whatsapp`, `empresa`, `mensagem`, `ciencia=ciente` e `_gotcha`. O contato exige serviço e mensagem; Commerce admite canal e mensagem opcionais. Os dois exigem nome, e-mail e ciência sobre o tratamento dos dados. O canal Commerce é enviado em `canal`.

Mesmo com um único endpoint, `origem`, `tipo` e `produto` permitem identificar os públicos no painel e nas exportações. A configuração não cria automações de marketing, regras de acesso, contratação ou promessa de lançamento.

### Privacidade e antispam

Os avisos junto aos formulários explicam a finalidade, o retorno por e-mail/WhatsApp e o processamento da mensagem pelo Formspree. O aceite não vem pré-selecionado e não inclui inscrição em campanhas. **Não foi encontrada Política de Privacidade no projeto:** sua elaboração/aprovação e publicação são pendências do responsável pela Trevvos. Nenhuma URL de política inexistente foi adicionada, nem dados legais da empresa foram inventados.

Os campos usam validação no frontend, limites de tamanho e erros acessíveis; configure também regras de validação e controles no serviço, pois a validação do navegador pode ser contornada. Há um honeypot `_gotcha`, conforme a [documentação oficial](https://help.formspree.io/articles/building-your-form/honeypot-spam-filtering). O frontend bloqueia o preenchimento desse campo sem declarar sucesso. Não foi instalado CAPTCHA adicional; revise as proteções já habilitadas no dashboard e teste sua compatibilidade antes da publicação.

Dados pessoais ficam apenas no estado em memória e nos campos enquanto a página está aberta; não usamos localStorage, sessionStorage ou logs de formulário. O processamento/armazenamento no Formspree depende da conta e de suas configurações. Nenhuma chave administrativa foi adicionada ao frontend.

## Testar

```powershell
npm run typecheck
npm run format:check
npm test
npx playwright install chromium
npm run test:e2e
npm run build
$env:TREVVOS_STATIC_E2E = "1"
npm run test:e2e
Remove-Item Env:TREVVOS_STATIC_E2E
```

Não há configuração ESLint no projeto; a verificação de estilo disponível é `format:check`. A suíte Vitest usa o hook real `useForm` com respostas de rede simuladas. Cobre campos obrigatórios, formatos, metadados, ausência de IDs, sucesso confirmado, reinício, carregamento, envio duplicado, honeypot, erros de campo/limite/rede e preservação dos dados. A integração usa [useForm e ValidationError oficiais](https://help.formspree.io/articles/working-with-react/the-formspree-react-library).

O Playwright cria um servidor isolado em `127.0.0.1:3100` e `.next-e2e`, sem encerrar o servidor de desenvolvimento habitual. Com `TREVVOS_STATIC_E2E=1`, executa a mesma suíte diretamente sobre `out`, usando o preview estático e o endpoint público de produção. Os IDs de fixture aparecem **somente no modo de desenvolvimento dos testes**, nunca em `.env.example` ou na configuração de produção. Toda chamada externa é bloqueada ou interceptada em ambos os modos: esses testes não enviam mensagens reais, não validam a conta Formspree e não consomem a cota do serviço. Há verificações em 360, 375, 768 e 1440 px, navegação dos CTAs, foco, fluxo de envio dos dois formulários, imagens dos setores e acessibilidade automatizada com axe. Capturas ficam em `test-results/`, ignorado pelo Git.

**Teste real, somente após configurar IDs e autorizar o envio:** faça um único envio por formulário a validar, com nome claramente fictício, e-mail de teste controlado e mensagem iniciada por “TESTE TÉCNICO — desconsiderar como lead”. Confira a confirmação no site, os campos/metadados em Submissions e o recebimento no e-mail de destino; verifique spam se necessário. Registre o resultado sem dados pessoais em logs ou commits. Sem evidência do painel e da caixa de e-mail, mantenha essa etapa pendente.

### Checklist do dashboard — pendente de acesso

- [x] Configurar localmente os dois formulários comerciais com o ID existente `xyzebnjv`, conforme decisão do responsável.
- [ ] Confirmar no dashboard a ativação, consumidores anteriores e identificação dos registros históricos do formulário compartilhado.
- [ ] Vincular/verificar o e-mail comercial e configurar Workflow / Target Email.
- [ ] Conferir regras, campos obrigatórios no serviço, filtros antispam e limites do plano.
- [ ] Configurar a restrição ao domínio institucional no projeto correto.
- [ ] Definir proteção antispam compatível e testar a configuração já existente.
- [x] Registrar os dois IDs públicos no workflow existente e gerar a exportação estática.
- [ ] Aprovar/publicar a Política de Privacidade e fornecer sua URL real para integração.
- [ ] Autorizar o teste real e verificar site, painel e e-mail para os dois tipos de contato no destino compartilhado.

## Estrutura e auditoria

- `src/app`: layout, metadados, página e CSS global.
- `src/components/Contact.tsx`: seção e abas existentes; sem modal ou formulários duplicados.
- `src/components/forms`: dois formulários comerciais, controles compartilhados e estados de envio.
- `src/components/ContactProvider.tsx`: CTAs, seleção de serviço, contexto e solicitação de foco.
- `src/lib/formspree-config.ts`: resolução centralizada dos IDs públicos e fallback Commerce.
- `src/lib/contact.ts`: opções, validações, mapeamento de serviços, metadados e mensagens de erro.
- `src/hooks` e `src/data`: animações e conteúdo dos setores já existentes.
- `public/images`: logotipos oficiais; `reference`: três arquivos originais do protótipo para consulta.
- `tests`: testes de regras e integração; `tests/e2e`: navegador isolado.

A auditoria encontrou dois formulários inline em Contato, validação inicial de nome/e-mail, envio por mailto ou endpoint genérico e CTAs em cabeçalho, serviços, produtos, planos, aplicações e rodapé. O envio anterior foi substituído pela integração oficial; as antigas variáveis `NEXT_PUBLIC_CONTACT_ENDPOINT` e `NEXT_PUBLIC_CONTACT_EMAIL` não são mais usadas. Não há API Route, Server Action ou banco intermediário.

A aplicação foi desenvolvida originalmente fora do repositório Git. Nesta migração, o código foi copiado para um worktree isolado de `deploy/trevvos-nextjs`, preservando a origem e as alterações locais existentes no monorepo. Apenas esta aplicação é incluída no commit; nenhuma hospedagem, regra de conta ou site independente do KM One foi alterado.
