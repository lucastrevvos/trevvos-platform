import { Component, signal } from '@angular/core';

type DemoMessage = {
  role: 'visitor' | 'agent';
  text: string;
};

type DemoScenario = {
  label: string;
  question: string;
  answer: string;
};

@Component({
  selector: 'app-sales-pilot-page',
  templateUrl: './sales-pilot.page.html',
  styleUrl: './sales-pilot.page.css',
})
export class SalesPilotPage {
  protected readonly scenarios: readonly DemoScenario[] = [
    {
      label: 'Serviços disponíveis',
      question: 'Vocês fazem banho e tosa?',
      answer:
        'Sim! Temos banho, tosa higiênica e tosa completa. Qual é o porte e a raça do seu pet? Assim posso direcionar seu atendimento.',
    },
    {
      label: 'Pedido de horário',
      question: 'Queria agendar para amanhã.',
      answer:
        'Posso registrar seu pedido. Você prefere manhã ou tarde? A equipe precisa confirmar a disponibilidade antes de fechar o agendamento.',
    },
    {
      label: 'Consulta de preço',
      question: 'Quanto custa um banho?',
      answer:
        'O valor depende do porte, da pelagem e do serviço escolhido. Me diga essas informações e encaminho seu pedido de orçamento à equipe.',
    },
    {
      label: 'Atendimento humano',
      question: 'Prefiro falar com uma pessoa.',
      answer:
        'Claro! Vou sinalizar sua preferência para a equipe. Esta demonstração é ilustrativa e não encaminha mensagens de verdade.',
    },
  ];

  protected readonly messages = signal<DemoMessage[]>([
    {
      role: 'agent',
      text: 'Olá! Bem-vindo ao Pet Exemplo. Como posso ajudar você e seu pet hoje?',
    },
  ]);

  protected chooseScenario(scenario: DemoScenario): void {
    this.messages.update((current) => [
      ...current,
      { role: 'visitor', text: scenario.question },
      { role: 'agent', text: scenario.answer },
    ]);
  }

  protected resetDemo(): void {
    this.messages.set([
      {
        role: 'agent',
        text: 'Olá! Bem-vindo ao Pet Exemplo. Como posso ajudar você e seu pet hoje?',
      },
    ]);
  }
}
