import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: false,
  templateUrl: './theme-toggle.component.html',
})
export class ThemeToggleComponent {
  mode: string = 'light';

  changemode(user_preference: string) {
    this.mode = user_preference;
  }
}
