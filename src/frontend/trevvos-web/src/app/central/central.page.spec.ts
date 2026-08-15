import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralPage } from './central.page';

describe('CentralPage', () => {
  let fixture: ComponentFixture<CentralPage>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentralPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CentralPage);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('renders the Central Trevvos editorial page', () => {
    expect(compiled.querySelectorAll('h1')).toHaveLength(1);
    expect(compiled.textContent).toContain('Central Trevvos');
    expect(compiled.textContent).toContain('Artigos editoriais');
    expect(compiled.textContent).toContain('Trilhas editoriais');
    expect(compiled.textContent).toContain('Mobilidade e operação');
    expect(compiled.querySelector('a[href="/"]')).toBeTruthy();
  });

  it('renders the initial editorial articles from the local content source', () => {
    const articles = compiled.querySelectorAll('.central-article');

    expect(articles).toHaveLength(3);
    expect(compiled.textContent).toContain('O motorista decide melhor quando o contexto está organizado');
    expect(compiled.textContent).toContain('IA assistida não substitui escolha');
    expect(compiled.textContent).toContain('Por que o Trevvos Flow começa por listas simples');
    expect(
      compiled.querySelector('a[href="/central/motorista-decide-melhor-com-contexto"]'),
    ).toBeTruthy();
    expect(
      compiled.querySelector('a[href="/central/ia-assistida-nao-substitui-escolha"]'),
    ).toBeTruthy();
    expect(
      compiled.querySelector('a[href="/central/flow-comeca-pequeno-porque-rotina-e-pratica"]'),
    ).toBeTruthy();
  });

  it('keeps unsupported product surfaces out of the public page', () => {
    const pageText = compiled.textContent ?? '';

    expect(pageText).toContain('publicações editoriais da Trevvos');
    expect(pageText).not.toContain('rascunho');
    expect(pageText).not.toContain('esqueleto');
    expect(pageText).not.toContain('CMS');
    expect(pageText).not.toContain('login');
    expect(pageText).not.toContain('checkout');
  });
});
