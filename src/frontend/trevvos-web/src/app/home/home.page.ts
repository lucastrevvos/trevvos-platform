import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { HealthService } from '../core/health/health.service';
import { messages } from '../i18n/messages.pt-BR';

@Component({
  selector: 'app-home-page',
  imports: [AsyncPipe],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage {
  protected readonly text = messages.home;
  protected readonly backendStatus$ = inject(HealthService).getBackendStatus();
}
