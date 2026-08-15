import { Component } from '@angular/core';
import {
  LucideArrowLeft,
  LucideBotMessageSquare,
  LucideCheck,
  LucideNetwork,
  LucideSearchCheck,
} from '@lucide/angular';

import { messages } from '../i18n/messages.pt-BR';

@Component({
  selector: 'app-ai-page',
  imports: [
    LucideArrowLeft,
    LucideBotMessageSquare,
    LucideCheck,
    LucideNetwork,
    LucideSearchCheck,
  ],
  templateUrl: './ai.page.html',
  styleUrl: './ai.page.css',
})
export class AiPage {
  protected readonly text = messages.ai;
}
