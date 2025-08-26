import { Component, inject, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../Service/Authentication/auth.service';
import { ChatInfo } from '../../../Model/message';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  @Input() chatsInfo!: ChatInfo[] | null;
  is_user_logged_in!: boolean;

  private authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.stateItem$.subscribe((user) => {
      this.is_user_logged_in = !!user;
    });
  }
}
