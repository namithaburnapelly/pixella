import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-side-bar',
  standalone: false,
  templateUrl: './toggle-side-bar.component.html',
  styleUrl: './toggle-side-bar.component.css',
})
export class ToggleSideBarComponent {
  sidebar: boolean = true;

  toggleSidebar() {
    console.log('clicked');
    this.sidebar = !this.sidebar;
  }
}
