import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../Service/Authentication/auth.service';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../../../utils/error.handler';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
    ]),
  ],
})
export class LoginPageComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;
  isLoading: boolean = false;
  is_form_submitted: boolean = false;
  show_error: boolean = false;
  is_password_visible: boolean = false;

  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private errorHandler = inject(ErrorHandlerService);

  // identifier can be username or email
  // changes--------------------implement for username or email from user
  constructor() {
    this.loginForm = this.fb.group({
      identifier: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  togglePasswordVisibility() {
    this.is_password_visible = !this.is_password_visible;
  }

  login(): void {
    this.isLoading = true;

    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value.identifier, this.loginForm.value.password)
        .subscribe({
          next: () => {
            setTimeout(() => {
              this.router.navigateByUrl('/chat/new');
              this.isLoading = false;
            }, 500);
          },
          error: (err) => {
            this.errorMessage = this.errorHandler.handleError(err);
            this.isLoading = false;
          },
        });
    } else {
      this.isLoading = false;
      this.show_error = true;
      setTimeout(() => {
        this.show_error = false;
      }, 500);
    }
  }
}

//Remaining - validations and social login
