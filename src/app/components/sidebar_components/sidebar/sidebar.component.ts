import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../Service/Authentication/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  is_user_logged_in!: boolean;

  private authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.stateItem$.subscribe((user) => {
      this.is_user_logged_in = !!user;
    });
  }
}
