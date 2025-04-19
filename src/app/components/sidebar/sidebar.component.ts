import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  sidebar: boolean = false;

  toggleSidebar() {
    console.log('clicked');
    this.sidebar = !this.sidebar;
  }
}
