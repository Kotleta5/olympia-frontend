import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../app-config';
import { User } from '../types/types';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  userAccounts: User[] = [];
  constructor(private http: HttpClient, private config: AppConfig, private authService: AuthService) { }

  getUserAccounts(): Subscription {
    const authorizationHeader = new HttpHeaders().append('Authorization', this.authService.accessToken ?? "");
    return this.http.get<User[]>(`${this.config.getConfig().baseUrl}userAccounts`, { headers: authorizationHeader }).subscribe({
      next: (data: User[]) => {
        this.userAccounts = data;
      }, error: (err) => {
        console.error(err);
      }
    })
  }

  registerUser(user: User) {
    return this.http.post<User>(`${this.config.getConfig().baseUrl}register`, user);
  }
}
