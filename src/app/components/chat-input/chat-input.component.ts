import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat-input',
  standalone: false,
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.css',
})
export class ChatInputComponent {
  user_query_form: FormGroup;
  isOverflowing: boolean = false;

  private fb = inject(FormBuilder);
  constructor() {
    this.user_query_form = this.fb.group({
      user_query: [''],
    });
  }

  autoResize(textarea: HTMLTextAreaElement) {
    textarea.style.height = 'auto';
    this.isOverflowing = textarea.scrollHeight > 160;
    textarea.style.height = textarea.scrollHeight + 'px';
  }
  submitQuery() {}
}
