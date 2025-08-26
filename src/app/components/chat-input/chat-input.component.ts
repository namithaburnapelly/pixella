import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from '../../Service/Messages/message.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat-input',
  standalone: false,
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.css',
})
export class ChatInputComponent {
  @Input() chatId!: string | null;

  user_query_form: FormGroup;
  isOverflowing: boolean = false;

  private fb = inject(FormBuilder);
  private messageService = inject(MessageService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  constructor() {
    this.user_query_form = this.fb.group({
      user_query: [''],
    });
  }

  autoResize(textarea: HTMLTextAreaElement) {
    textarea.style.height = 'auto';

    const scrollHeight = textarea.scrollHeight;
    const maxHeight = 160;
    this.isOverflowing = scrollHeight > maxHeight;
    textarea.style.height = Math.min(scrollHeight, maxHeight) + 'px';
  }

  submitQuery() {
    const message = this.user_query_form.get('user_query')?.value.trim();
    if (!message) return;

    console.log('user query: ', message);
    this.user_query_form.reset();
    this.isOverflowing = false;
    setTimeout(() => {
      const textarea = document.querySelector('textarea');
      if (textarea) (textarea as HTMLTextAreaElement).style.height = 'auto';
    });

    this.messageService.sendMessage(message).subscribe((response) => {
      const currentChatId = this.messageService.getCurrentChatId();
      if (!this.chatId && currentChatId) {
        this.router.navigate(['/chat', currentChatId]);
      }
    });
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      if (
        this.user_query_form.valid &&
        this.user_query_form.get('user_query')?.value?.trim()
      ) {
        this.submitQuery();
      }
    }
  }
}
