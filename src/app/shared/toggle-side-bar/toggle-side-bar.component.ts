import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-side-bar',
  standalone: false,
  templateUrl: './toggle-side-bar.component.html',
  styleUrl: './toggle-side-bar.component.css',
})
export class ToggleSideBarComponent implements OnInit {
  isSidebarOpen: boolean = false;

  ngOnInit(): void {
    this.updateSidebarState();
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
