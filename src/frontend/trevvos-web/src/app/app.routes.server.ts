import { RenderMode, ServerRoute } from '@angular/ssr';

import articles from './central/articles.json';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'flow',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'central',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'central/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return articles.map((article) => ({ slug: article.slug }));
    },
  },
  {
    path: 'contato',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'ia',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'impacto',
    renderMode: RenderMode.Prerender,
  },
];
