import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: false,
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css',
})
export class ThemeToggleComponent {
  mode: string = 'light';

  changemode(user_preference: string) {
    this.mode = user_preference;
  }
}
