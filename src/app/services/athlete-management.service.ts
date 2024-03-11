import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../app-config';
import { AuthService } from './auth.service';
import { FullData, UpdateResult } from '../types/types';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AthleteManagementService {
  fullData: FullData[] = [];
  constructor(private http: HttpClient, private config: AppConfig, private authService: AuthService) { }

  getFullData(): Subscription {
    const authorizationHeader = new HttpHeaders().append('Authorization', this.authService.accessToken ?? "");
    return this.http.get<FullData[]>(`${this.config.getConfig().baseUrl}fullData`, { headers: authorizationHeader }).subscribe({
      next: (data: FullData[]) => {
        this.fullData = data;
      }, error: (err) => {
        console.error(err);
      }
    })
  }

  updateResult(updateResult: UpdateResult) {
    const authorizationHeader = new HttpHeaders().append('Authorization', this.authService.accessToken ?? "");
    return this.http.patch(`${this.config.getConfig().baseUrl}updateResult`, updateResult, { headers: authorizationHeader })
      .subscribe({
        next: (res: any) => alert(res.message),
        error: (err) => alert(err.message),
      });
  }
}
