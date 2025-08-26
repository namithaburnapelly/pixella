import { Component, inject, Input, OnInit } from '@angular/core';
import { ChatInfo } from '../../../Model/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-content',
  standalone: false,
  templateUrl: './sidebar-content.component.html',
  styleUrl: './sidebar-content.component.css',
})
export class SidebarContentComponent {
  @Input() chatsInfo!: ChatInfo[] | null;

  private router = inject(Router);

  selectChat(chatId: string) {
    this.router.navigate(['/chat', chatId]);
  }
}
