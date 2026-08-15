import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPage } from './ai.page';

describe('AiPage', () => {
  let fixture: ComponentFixture<AiPage>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AiPage);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('renders the IA Trevvos intent page', () => {
    expect(compiled.querySelectorAll('h1')).toHaveLength(1);
    expect(compiled.textContent).toContain('IA Trevvos');
    expect(compiled.textContent).toContain('Intenção, contexto e atendimento orientado');
    expect(compiled.textContent).toContain('Interesse em produtos');
    expect(compiled.textContent).toContain('Parcerias e impacto');
    expect(compiled.querySelector('a[href="/contato"]')).toBeTruthy();
  });

  it('does not promise autonomous service execution', () => {
    const pageText = compiled.textContent ?? '';

    expect(pageText).toContain('Sem execução autônoma crítica');
    expect(pageText).not.toContain('atendimento automático disponível');
    expect(pageText).not.toContain('executa ações sem revisão');
  });
});
