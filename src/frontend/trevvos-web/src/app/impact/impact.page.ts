import { Component } from '@angular/core';
import {
  LucideArrowLeft,
  LucideCheck,
  LucideHeartHandshake,
  LucideNetwork,
  LucideUsersRound,
} from '@lucide/angular';

import { messages } from '../i18n/messages.pt-BR';

@Component({
  selector: 'app-impact-page',
  imports: [
    LucideArrowLeft,
    LucideCheck,
    LucideHeartHandshake,
    LucideNetwork,
    LucideUsersRound,
  ],
  templateUrl: './impact.page.html',
  styleUrl: './impact.page.css',
})
export class ImpactPage {
  protected readonly text = messages.impact;
}
