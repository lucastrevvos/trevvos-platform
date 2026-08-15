import { Component } from '@angular/core';
import {
  LucideArrowLeft,
  LucideCheck,
  LucideSparkles,
} from '@lucide/angular';

import { messages } from '../i18n/messages.pt-BR';

@Component({
  selector: 'app-flow-page',
  imports: [
    LucideArrowLeft,
    LucideCheck,
    LucideSparkles,
  ],
  templateUrl: './flow.page.html',
  styleUrl: './flow.page.css',
})
export class FlowPage {
  protected readonly text = messages.flow;
}
