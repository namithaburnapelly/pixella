import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../Service/Authentication/auth.service';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../../../utils/error.handler';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;
  isLoading: boolean = false;
  is_form_submitted = false;

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

  // Methods so that html template can read loginForm fields
  get identifier() {
    return this.loginForm.get('identifier');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login(): void {
    this.isLoading = true;
    this.is_form_submitted = true;

    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value.identifier, this.loginForm.value.password)
        .subscribe({
          next: () => {
            setTimeout(() => {
              this.router.navigateByUrl('/chat');
              this.isLoading = false;
            }, 1000);
          },
          error: (err) => {
            this.errorMessage = this.errorHandler.handleError(err);
            this.isLoading = false;
          },
        });
    } else {
      this.isLoading = false;
    }
  }
}
