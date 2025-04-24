import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../Service/Authentication/auth.service';

@Component({
  selector: 'app-topbar',
  standalone: false,
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent implements OnInit {
  is_user_logged_in!: boolean;

  private authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.stateItem$.subscribe((user) => {
      this.is_user_logged_in = !!user;
    });
  }
}
