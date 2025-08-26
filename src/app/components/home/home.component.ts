import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../../Service/Messages/message.service';
import { ChatInfo } from '../../Model/message';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  chatsInfo: ChatInfo[] | null = null;
  currentChatId: string | null = null;

  private route = inject(ActivatedRoute);
  private messageService = inject(MessageService);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.currentChatId = params.get('chatId');
      if (this.currentChatId) {
        this.messageService.setCurrentChatId(this.currentChatId);
      }
    });

    this.messageService.getAllChatInfos()?.subscribe((ChatInfos) => {
      // console.log('chat titles', ChatInfos);
      this.chatsInfo = ChatInfos;
    });
  }
}
