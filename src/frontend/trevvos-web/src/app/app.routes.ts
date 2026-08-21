import { Routes } from '@angular/router';

import { AiPage } from './ai/ai.page';
import { ArticlePage } from './central/article.page';
import { CentralPage } from './central/central.page';
import { ContactPage } from './contact/contact.page';
import { FlowPage } from './flow/flow.page';
import { HomePage } from './home/home.page';
import { ImpactPage } from './impact/impact.page';
import { PrivacyPolicyPage } from './privacy-policy/privacy-policy.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    title: 'Trevvos | KM One para motoristas profissionais',
    data: {
      description:
        'Homepage pública da Trevvos com apresentação do KM One, produto principal para motoristas profissionais e de aplicativo.',
    },
  },
  {
    path: 'flow',
    component: FlowPage,
    title: 'Trevvos Flow | Listas, tarefas e IA sob escolha do usuário',
    data: {
      description:
        'Página pública do Trevvos Flow para organizar listas, tarefas, progresso e colaboração com sugestões inteligentes escolhidas pelo usuário.',
    },
  },
  {
    path: 'central',
    component: CentralPage,
    title: 'Central Trevvos | Conteúdo, produtos e IA aplicada',
    data: {
      description:
        'Página pública da Central Trevvos para organizar conteúdos editoriais, bastidores de produto e explicações sobre IA aplicada.',
    },
  },
  {
    path: 'central/:slug',
    component: ArticlePage,
    title: 'Artigo | Central Trevvos',
    data: {
      description: 'Artigo editorial da Central Trevvos.',
    },
  },
  {
    path: 'contato',
    component: ContactPage,
    title: 'Contato | Trevvos',
    data: {
      description:
        'Página de contato da Trevvos para produtos, conteúdo editorial, parcerias e iniciativas de impacto.',
    },
  },
  {
    path: 'politica-de-privacidade',
    component: PrivacyPolicyPage,
    title: 'Política de Privacidade | KM One | Trevvos',
    data: {
      description:
        'Política de Privacidade da Trevvos aplicável ao KM One, aplicativo desenvolvido pela Trevvos para motoristas profissionais.',
    },
  },
  {
    path: 'ia',
    component: AiPage,
    title: 'IA Trevvos | Intenção, contexto e atendimento',
    data: {
      description:
        'Página pública da IA Trevvos para apresentar a visão de identificação de intenção, contexto e direcionamento de atendimento.',
    },
  },
  {
    path: 'impacto',
    component: ImpactPage,
    title: 'Trevvos Impacto | Pilotos comunitários em preparação',
    data: {
      description:
        'Página pública do Trevvos Impacto para apresentar a preparação de pilotos comunitários com ONGs, igrejas, associações e comunidades.',
    },
  },
];
