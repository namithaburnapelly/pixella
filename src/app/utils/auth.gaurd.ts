import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Service/Authentication/auth.service';

export const AuthGaurd: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isUserLoggedIn()) {
    router.navigate(['/chat']);
    return false;
  }
  return true;
};
// not really using it now its see
