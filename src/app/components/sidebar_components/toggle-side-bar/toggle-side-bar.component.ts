import { Component, HostListener, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../Service/Authentication/auth.service';

@Component({
  selector: 'app-toggle-side-bar',
  standalone: false,
  templateUrl: './toggle-side-bar.component.html',
  styleUrl: './toggle-side-bar.component.css',
})
export class ToggleSideBarComponent implements OnInit {
  isSidebarOpen: boolean = false;
  is_user_logged_in!: boolean;

  private authService = inject(AuthService);
  ngOnInit(): void {
    this.updateSidebarState();
    this.is_user_logged_in = this.authService.isUserLoggedIn();
  }
  @HostListener('window:resize')
  onResize() {
    this.updateSidebarState();
  }

  updateSidebarState(): void {
    const screenWidth = window.innerWidth;
    this.isSidebarOpen = screenWidth >= 1024;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
