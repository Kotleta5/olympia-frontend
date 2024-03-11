import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../app-config';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken: string | undefined;
  role: string | undefined;
  constructor(private http: HttpClient, private config: AppConfig) { }

  isAuthenticated(): Subscription {
    if (this.accessToken !== undefined) {
      const authorizationHeader = new HttpHeaders().append('Authorization', this.accessToken ?? "");
      return this.http.get(`${this.config.getConfig().baseUrl}isAuthenticated`, { headers: authorizationHeader }).subscribe({
        error: (_: Error) => {
          alert('Token is invalid');
          this.accessToken = undefined;
          this.role = undefined;
        }
      })
    } return Subscription.EMPTY;
  }

  login(credentials: { username: string, password: string }) {
    return this.http.post(`${this.config.getConfig().baseUrl}authenticate`, credentials).subscribe({
      next: (response: any) => {
        if (response && response.token) {
          this.accessToken = response.token;
          this.role = response.role;
        }
      },
      error: (err: Error) => {
        console.error(err);
      }
    })
  }
}
