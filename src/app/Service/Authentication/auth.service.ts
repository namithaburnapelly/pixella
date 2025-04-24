import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../../Model/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private login_url: string = environment.loginUrl;
  private register_url: string = environment.registerURL;

  private http = inject(HttpClient);
  private jwtHelper = inject(JwtHelperService);

  constructor() {}

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

  login(username: string, password: string) {
    return this.http.post<string>(this.login_url, { username, password }).pipe(
      map((response) => {
        const user: Partial<User> = {
          username: username,
          accessToken: response,
        };
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  isUserLoggedIn(): boolean {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const token = JSON.parse(storedUser).accessToken;
      if (this.jwtHelper.isTokenExpired(token)) {
        console.log('Token expired');
        localStorage.removeItem('user');
        return false;
      }
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('user');
    console.log('logged out');
  }

  getUsername(): string {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser).username : '';
  }
}
