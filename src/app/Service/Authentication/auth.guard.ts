import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const AuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isUserLoggedIn()) {
    // console.log('auth gaurd called');
    authService.logout();
    return router.parseUrl('/login');
  }
  return true;
};
