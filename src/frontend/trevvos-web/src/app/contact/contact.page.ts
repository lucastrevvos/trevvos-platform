import { Component } from '@angular/core';
import {
  LucideArrowLeft,
  LucideBotMessageSquare,
  LucideMail,
  LucideNetwork,
  LucideSend,
} from '@lucide/angular';

import { messages } from '../i18n/messages.pt-BR';

@Component({
  selector: 'app-contact-page',
  imports: [
    LucideArrowLeft,
    LucideBotMessageSquare,
    LucideMail,
    LucideNetwork,
    LucideSend,
  ],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.css',
})
export class ContactPage {
  protected readonly text = messages.contact;
}
