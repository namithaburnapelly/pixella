import { Component, inject, Input } from '@angular/core';
import { ChatInfo, Message } from '../../Model/message';
import { MessageService } from '../../Service/Messages/message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  standalone: false,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  @Input() chatId!: string | null;
  @Input() chatsInfo!: ChatInfo[] | null;

  private messageService = inject(MessageService);

  messages$: Observable<Message[]> = this.messageService.messages$;
}
