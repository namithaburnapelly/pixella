import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot-icon',
  standalone: false,
  templateUrl: './chatbot-icon.component.html',
  styleUrl: './chatbot-icon.component.css',
})
export class ChatbotIconComponent {
  imageLoaded = false;
  imageUrl = 'chatbot.gif';
}
