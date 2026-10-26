# KM One Landing

Landing page pública do KM One, produto da Trevvos voltado a motoristas de aplicativo.

O KM One reúne ferramentas para analisar ofertas, registrar corridas e deslocamentos, acompanhar resultados, abastecimentos, metas e outras informações da rotina de quem vive de dirigir.

## Posicionamento atual

Nesta fase, o KM One está disponível gratuitamente para Android.

- sem cadastro;
- sem cartão;
- sem assinatura;
- download pela Google Play.

A estratégia atual é reduzir atrito de entrada, permitir que motoristas conheçam o produto no uso real e conquistar confiança antes de qualquer oferta comercial futura.

Recursos avançados de inteligência artificial poderão futuramente fazer parte de planos opcionais, sempre com comunicação clara antes de qualquer contratação.

## Funcionalidades apresentadas na landing

- análise de ofertas com captura manual ou automática;
- Vistas para organizar ofertas capturadas;
- Registros e resumos por período;
- abastecimentos;
- deslocamentos sem passageiro;
- corridas particulares;
- Lista de bloqueio;
- Copiloto KM One por voz;
- metas e indicadores da operação.

O KM One auxilia a leitura dos dados e não aceita nem recusa corridas pelo motorista.

## Visão de produto

O produto começa resolvendo problemas práticos da rotina do motorista e deve evoluir ouvindo quem está na rua.

A visão de longo prazo inclui:

- recursos avançados de inteligência artificial;
- comunidade e parcerias para motoristas;
- indicadores mais avançados de operação;
- evolução para uma plataforma brasileira de mobilidade mais transparente, equilibrada e construída junto com os motoristas.

**O KM One começa com o motorista. O futuro, a gente constrói juntos.**

## Stack da landing

- React 19;
- TypeScript;
- Vite;
- Tailwind CSS;
- React Router;
- Lucide React.

## Deploy

A landing é publicada pelo GitHub Actions em **Azure Static Web Apps**.

Workflow:

`.github/workflows/azure-static-web-apps-delightful-hill-04248b510.yml`

Diretório da aplicação:

`src/frontend/kmone-landing`

Domínio público:

`https://kmone.trevvos.com.br`

Alterações nesse diretório disparam o workflow de deploy da landing quando chegam ao branch `main`.

## Organização no ecossistema Trevvos

- `trevvos-platform`: monorepo principal, incluindo esta landing e o portal público da Trevvos;
- `motor-kmone`: aplicativo Android do KM One, mantido separadamente;
- `Trevvos.Api`: backend central em evolução dentro do monorepo.

## Contato

Trevvos: contato@trevvos.com.br
