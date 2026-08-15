import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  LucideArrowLeft,
  LucideBookOpen,
  LucideFileText,
} from '@lucide/angular';

import articles from './articles.json';

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
  selector: 'app-article-page',
  imports: [
    LucideArrowLeft,
    LucideBookOpen,
    LucideFileText,
  ],
  templateUrl: './article.page.html',
  styleUrl: './article.page.css',
})
export class ArticlePage {
  private readonly route = inject(ActivatedRoute);
  private readonly slug = this.route.snapshot.paramMap.get('slug');

  protected readonly article = articles.find((item) => item.slug === this.slug) as
    | CentralArticle
    | undefined;
}
