import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideAudioLines,
  LucideBotMessageSquare,
  LucideHome,
  LucideLayers3,
  LucideMail,
  LucideNetwork,
  LucideUsersRound,
} from '@lucide/angular';

import { messages } from '../i18n/messages.pt-BR';

@Component({
  selector: 'app-home-page',
  imports: [
    RouterLink,
    LucideHome,
    LucideLayers3,
    LucideNetwork,
    LucideBotMessageSquare,
    LucideMail,
    LucideUsersRound,
    LucideAudioLines,
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage {
  protected readonly text = messages.home;
}
