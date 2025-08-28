import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../Service/Authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  user_initial!: string;
  isLoading: boolean = false;
  chatbot_small_url = 'chatbot-small.gif';

  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    this.user_initial = this.authService.getUsername().charAt(0);
  }

  logout() {
    this.isLoading = true;

    setTimeout(() => {
      this.authService.logout();
      this.router.navigate(['/login']);
      this.isLoading = false;
    }, 500);
  }
}
