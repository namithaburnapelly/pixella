import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../Service/Authentication/auth.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  user_initial!: string;

  private authService = inject(AuthService);

  ngOnInit(): void {
    this.user_initial = this.authService.getUsername().charAt(0);
  }

  logout() {
    this.authService.logout();
  }
}
