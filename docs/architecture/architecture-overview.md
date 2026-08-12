# Visão de Arquitetura

A Trevvos começa como monólito modular em um único repositório. O objetivo é manter implantação simples, baixo custo operacional e clareza para aprendizado profundo em .NET, Angular, PostgreSQL, segurança e IA aplicada.

## Camadas Iniciais

- `Trevvos.Api`: entrada HTTP, configuração, health checks, composição de dependências e infraestrutura web.
- `Trevvos.SharedKernel`: contratos transversais pequenos e estáveis.
- `trevvos-web`: cliente Angular standalone.
- `tests`: testes de arquitetura e integração.

Módulos de domínio serão materializados apenas quando o marco correspondente for implementado.

## Princípios

- Começar pequeno e executável.
- Evitar abstrações sem uso.
- Proteger segurança e privacidade desde a fundação.
- Registrar decisões duradouras em ADR.
- Separar autenticação, IA, finanças e domínio educacional.
