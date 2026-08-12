# Instruções Para Agentes

- Preserve o monólito modular em um único repositório.
- Não crie microserviços, Kubernetes, filas, event bus ou abstrações sem necessidade imediata.
- Não implemente funcionalidades não solicitadas. Em especial, não antecipe cadastro, login, perfis, habilidades, matching, chat, agenda, pagamentos, IA ou painel administrativo.
- Explique mudanças relevantes antes de editar arquivos e registre decisões duradouras em ADR.
- Execute testes compatíveis com a mudança e relate qualquer falha sem inventar resultado.
- Nunca insira segredos reais no repositório.
- Respeite os limites dos módulos documentados em `docs/architecture/module-boundaries.md`.
- Não altere regras de autenticação, autorização, ledger de IA ou fundo comunitário sem ADR.
- Mantenha código, nomes de classes, métodos, variáveis e commits em inglês.
- Mantenha documentação de produto em português do Brasil, salvo quando houver motivo explícito.
- Evite overengineering. Materialize projetos, pastas e abstrações apenas quando houver uso real.
- Não trate tokens de modelos de IA como tokens de autenticação.
- Não confunda créditos comunitários, créditos promocionais, infraestrutura cedida e dinheiro em caixa.
- Nunca implemente vantagem individual para doadores. Doações sustentam o fundo comunitário global.
- Não use, copie, modifique nem dependa de `lucastrevvos/portaltrevvos`.
