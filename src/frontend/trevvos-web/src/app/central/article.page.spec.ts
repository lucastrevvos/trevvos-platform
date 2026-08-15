import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { ArticlePage } from './article.page';

describe('ArticlePage', () => {
  function createPage(slug: string): ComponentFixture<ArticlePage> {
    TestBed.configureTestingModule({
      imports: [ArticlePage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ slug }),
            },
          },
        },
      ],
    });

    const fixture = TestBed.createComponent(ArticlePage);
    fixture.detectChanges();

    return fixture;
  }

  it('renders an article from the slug route param', () => {
    const fixture = createPage('ia-assistida-nao-substitui-escolha');
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('h1')).toHaveLength(1);
    expect(compiled.textContent).toContain('IA assistida não substitui escolha');
    expect(compiled.textContent).toContain('IA como preparação, não como piloto automático');
    expect(compiled.textContent).toContain('Onde RAG entra na história');
    expect(compiled.querySelector('a[href="/central#central-articles"]')).toBeTruthy();
  });

  it('shows a local not found state for unknown slugs', () => {
    const fixture = createPage('artigo-inexistente');
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Artigo não encontrado');
    expect(compiled.querySelector('a[href="/central"]')).toBeTruthy();
  });
});
