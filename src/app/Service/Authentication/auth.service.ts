import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { AuthState, User } from '../../Model/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private login_url: string = environment.loginUrl;
  private register_url: string = environment.registerURL;

  private stateItem: BehaviorSubject<AuthState | null> =
    new BehaviorSubject<AuthState | null>(null);

  stateItem$: Observable<AuthState | null> = this.stateItem.asObservable();

  private http = inject(HttpClient);
  private jwtHelper = inject(JwtHelperService);

  constructor() {
    // get local storage when service initializes for persistent state
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user: AuthState = JSON.parse(storedUser);
      if (this.jwtHelper.isTokenExpired(user.accessToken)) {
        this.logout(); //auto logout on token expiration
        return;
      }
      this.stateItem.next(user);
    }
  }

  register(
    username: string,
    email: string,
    password: string
  ): Observable<Partial<User>> {
    return this.http.post<Partial<User>>(this.register_url, {
      username,
      email,
      password,
    });
  }

  login(username: string, password: string): Observable<AuthState> {
    return this.http.post<string>(this.login_url, { username, password }).pipe(
      map((token) => {
        const user: AuthState = {
          username: username,
          accessToken: token,
        };
        localStorage.setItem('user', JSON.stringify(user));
        this.stateItem.next(user);
        return user;
      }),
      catchError((error) => {
        this.logout();
        return throwError(() => error);
      })
    );
  }

  isTokenExpired(token: string | null): boolean {
    return !token || this.jwtHelper.isTokenExpired(token);
  }

  logout(): void {
    this.stateItem.next(null);
    localStorage.removeItem('user');
  }

  getUsername(): string {
    return this.stateItem.value?.username || '';
  }

  isUserLoggedIn(): boolean {
    return (
      !!this.stateItem.value?.accessToken &&
      !this.jwtHelper.isTokenExpired(this.stateItem.value.accessToken)
    );
  }
}
