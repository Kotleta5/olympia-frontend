import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../app-config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private config: AppConfig) { }

  login(credentials: {username: string, password: string}) {
    return this.http.post(`${this.config.getConfig().baseUrl}login`, credentials);
  }
}
