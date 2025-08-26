import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const newRegWithHeaders = req.clone({
    headers: req.headers.append(
      'Authorization',
      `Bearer ${authService.getAccessToken()}`
    ),
  });

  return next(newRegWithHeaders).pipe(
    catchError((error) => {
      if (error.status === 401) {
        authService.logout();
        window.prompt('Your session expired. Please login again!');
      }
      return throwError(() => error);
    })
  );
};
