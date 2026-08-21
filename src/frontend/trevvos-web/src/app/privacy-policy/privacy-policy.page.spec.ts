import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyPage } from './privacy-policy.page';

describe('PrivacyPolicyPage', () => {
  let fixture: ComponentFixture<PrivacyPolicyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPolicyPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacyPolicyPage);
    fixture.detectChanges();
  });

  it('renders the public KM One privacy policy with one main heading', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const headings = compiled.querySelectorAll('h1');

    expect(headings.length).toBe(1);
    expect(headings[0]?.textContent).toContain('Política de Privacidade');
    expect(compiled.textContent).toContain('Trevvos');
    expect(compiled.textContent).toContain('KM One');
  });

  it('uses the verified public Trevvos contact email', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const email = compiled.querySelector<HTMLAnchorElement>('a[href="mailto:ceo@trevvos.com.br"]');

    expect(email).toBeTruthy();
    expect(email?.textContent).toContain('ceo@trevvos.com.br');
  });

  it('does not render internal review markers', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).not.toContain('TODO');
    expect(compiled.textContent).not.toContain('NEEDS HUMAN CONFIRMATION');
    expect(compiled.textContent).not.toContain('Ponto para revisão humana');
  });
});
