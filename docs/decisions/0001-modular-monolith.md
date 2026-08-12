# ADR 0001 - Monólito modular

## Contexto

A Trevvos precisa ser simples de estudar, executar e evoluir manualmente.

## Decisão

Usar monólito modular em um único repositório, com módulos documentados antes de serem materializados.

## Alternativas

- Microserviços.
- Monólito sem limites internos.

## Consequências positivas

- Menor custo operacional.
- Menos infraestrutura.
- Mais clareza para aprendizado.

## Consequências negativas

- Exige disciplina para manter limites.
- Escala organizacional futura pode pedir separações.

## Riscos

- Acoplamento indevido entre módulos.

## Condições para revisão futura

- Equipes independentes, gargalos reais de implantação ou necessidade comprovada de escala isolada.
