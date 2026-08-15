import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactPage } from './impact.page';

describe('ImpactPage', () => {
  let fixture: ComponentFixture<ImpactPage>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpactPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ImpactPage);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('renders the Trevvos Impacto coming soon page', () => {
    expect(compiled.querySelectorAll('h1')).toHaveLength(1);
    expect(compiled.textContent).toContain('Trevvos Impacto');
    expect(compiled.textContent).toContain('Pilotos comunitários em preparação');
    expect(compiled.textContent).toContain('ONGs');
    expect(compiled.textContent).toContain('Comunidades locais');
    expect(compiled.querySelector('a[href="/contato"]')).toBeTruthy();
  });

  it('keeps the page scoped to preparation and responsible pilots', () => {
    const pageText = compiled.textContent ?? '';

    expect(pageText).toContain('abrir conversa');
    expect(pageText).not.toContain('cadastro automático');
    expect(pageText).not.toContain('doação');
    expect(pageText).not.toContain('checkout');
  });
});
