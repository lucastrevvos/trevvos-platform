import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowPage } from './flow.page';

describe('FlowPage', () => {
  let fixture: ComponentFixture<FlowPage>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FlowPage);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('renders the Trevvos Flow page with one main heading and clear content', () => {
    expect(compiled.querySelectorAll('h1')).toHaveLength(1);
    expect(compiled.textContent).toContain('Trevvos Flow');
    expect(compiled.textContent).toContain('Listas');
    expect(compiled.textContent).toContain('Sugestões inteligentes');
    expect(compiled.querySelector('a[href="/"]')).toBeTruthy();
    expect(
      compiled.querySelector(
        'a[href="https://play.google.com/store/apps/details?id=com.lucasamaral.todolistrevvos"]',
      ),
    ).toBeTruthy();
  });

  it('renders real app screenshots and does not claim autonomous AI execution', () => {
    const pageText = compiled.textContent ?? '';

    expect(pageText).not.toContain('executa ações autônomas');
    expect(pageText).toContain('revisão do usuário');
    expect(compiled.querySelector('img[src="/assets/flow/trevvos-flow-lists.jpeg"]')).toBeTruthy();
    expect(compiled.querySelector('img[src="/assets/flow/trevvos-flow-new-list.jpeg"]')).toBeTruthy();
    expect(compiled.querySelector('img[src="/assets/flow/trevvos-flow-tasks.jpeg"]')).toBeTruthy();
  });
});
