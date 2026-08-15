import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPage } from './contact.page';

describe('ContactPage', () => {
  let fixture: ComponentFixture<ContactPage>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactPage);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('renders the public Trevvos contact page', () => {
    expect(compiled.querySelectorAll('h1')).toHaveLength(1);
    expect(compiled.textContent).toContain('Fale com a Trevvos');
    expect(compiled.textContent).toContain('Produtos Trevvos');
    expect(compiled.textContent).toContain('IA Trevvos');
    expect(compiled.textContent).toContain('Impacto e comunidades');
    expect(compiled.querySelector('a[href="/"]')).toBeTruthy();
  });

  it('shows real navigation and mail contact without unsupported form claims', () => {
    const pageText = compiled.textContent ?? '';

    expect(compiled.querySelector('a[href^="mailto:ceo@trevvos.com.br"]')).toBeTruthy();
    expect(compiled.querySelector('a[href="/ia"]')).toBeTruthy();
    expect(compiled.querySelector('a[href="/central"]')).toBeTruthy();
    expect(compiled.querySelector('a[href="/flow"]')).toBeTruthy();
    expect(compiled.querySelector('a[href="https://www.instagram.com/trevvos.ia/"]')).toBeTruthy();
    expect(
      compiled.querySelector('a[href="https://open.spotify.com/show/7xvDpbP6wuoZi8coSgTFkY"]'),
    ).toBeTruthy();
    expect(compiled.querySelector('a[href="https://www.linkedin.com/company/trevvos/"]')).toBeTruthy();
    expect(
      compiled.querySelector('a[href="https://chat.whatsapp.com/K1cepLtEEoY6pScVRTNvg9"]'),
    ).toBeTruthy();
    expect(pageText).not.toContain('formulário disponível');
    expect(pageText).not.toContain('login');
    expect(pageText).not.toContain('checkout');
  });
});
