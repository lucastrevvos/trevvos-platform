import { Component } from '@angular/core';
import {
  LucideArrowLeft,
  LucideBookOpen,
  LucideBrainCircuit,
  LucideFileText,
  LucideLayers3,
  LucideRoute,
} from '@lucide/angular';

import articles from './articles.json';
import { messages } from '../i18n/messages.pt-BR';

type CentralArticle = {
  id: string;
  slug: string;
  status: string;
  category: string;
  title: string;
  summary: string;
  readingTime: string;
  publishedAt: string;
  tags: string[];
  sections: {
    heading: string;
    body: string;
  }[];
};

@Component({
  selector: 'app-central-page',
  imports: [
    LucideArrowLeft,
    LucideBookOpen,
    LucideBrainCircuit,
    LucideFileText,
    LucideLayers3,
    LucideRoute,
  ],
  templateUrl: './central.page.html',
  styleUrl: './central.page.css',
})
export class CentralPage {
  protected readonly text = messages.central;
  protected readonly articles = articles satisfies CentralArticle[];
}
