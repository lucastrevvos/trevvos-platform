import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let fixture: ComponentFixture<HomePage>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('renders the public Trevvos homepage content and product CTAs', () => {
    expect(compiled.querySelectorAll('h1')).toHaveLength(1);
    expect(compiled.textContent).toContain('Trevvos');
    expect(compiled.textContent).toContain('KM One');
    expect(compiled.textContent).toContain('Trevvos Flow');
    expect(compiled.querySelector('#trevvos-flow')).toBeTruthy();

    const kmOneCta = compiled.querySelector<HTMLAnchorElement>(
      'a[href="https://kmone.trevvos.com.br/"]',
    );
    const kmOneInstagram = compiled.querySelector<HTMLAnchorElement>(
      'a[href="https://www.instagram.com/kmone.app/"]',
    );
    const flowCta = compiled.querySelector<HTMLAnchorElement>('.module-flow a[href="/flow"]');
    const centralCta = compiled.querySelector<HTMLAnchorElement>('.module-central a[href="/central"]');
    const impactCta = compiled.querySelector<HTMLAnchorElement>('.module-impact a[href="/impacto"]');
    const contactNav = compiled.querySelector<HTMLAnchorElement>('a[href="/contato"]');
    const aiNav = compiled.querySelector<HTMLAnchorElement>('a[href="/ia"]');
    const instagramNav = compiled.querySelector<HTMLAnchorElement>(
      'a[href="https://www.instagram.com/trevvos.ia/"]',
    );
    const spotifyNav = compiled.querySelector<HTMLAnchorElement>(
      'a[href="https://open.spotify.com/show/7xvDpbP6wuoZi8coSgTFkY"]',
    );
    const linkedInNav = compiled.querySelector<HTMLAnchorElement>(
      'a[href="https://www.linkedin.com/company/trevvos/"]',
    );
    const testersNav = compiled.querySelector<HTMLAnchorElement>(
      'a[href="https://chat.whatsapp.com/K1cepLtEEoY6pScVRTNvg9"]',
    );

    expect(kmOneCta?.textContent).toContain('Entrar no KM One');
    expect(kmOneInstagram?.textContent).toContain('@kmone.app');
    expect(flowCta?.textContent).toContain('Conhecer o Flow');
    expect(centralCta?.textContent).toContain('Explorar conteúdos');
    expect(impactCta?.textContent).toContain('Programa piloto');
    expect(contactNav).toBeTruthy();
    expect(aiNav).toBeTruthy();
    expect(instagramNav).toBeTruthy();
    expect(spotifyNav).toBeTruthy();
    expect(linkedInNav).toBeTruthy();
    expect(testersNav).toBeTruthy();
  });

  it('keeps forbidden or unsupported public claims out of the homepage', () => {
    const pageText = compiled.textContent ?? '';
    const forbiddenTerms = [
      'Copiloto KM One',
      'Backend',
      'status',
      'garantia de ganhos',
      'corridas garantidas',
      'demanda garantida',
      'Instagram em breve',
      'LinkedIn em breve',
      'Spotify em breve',
      'Grupo de testadores em breve',
    ];

    for (const term of forbiddenTerms) {
      expect(pageText).not.toContain(term);
    }
  });
});
