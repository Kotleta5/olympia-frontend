import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../app-config';
import { SportResult, TopThreeAthletes } from '../types/types';
import { Subscribable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  fullResults: SportResult[] = [];

  constructor(private http: HttpClient, private config: AppConfig) { }

  getTopAthletes(sport: string) {
    return this.http.get<TopThreeAthletes>(`${this.config.getConfig().baseUrl}topThreeAtheltes/${sport}`);
  }

  getFullResults(sport: string, gender: string): Subscription {
    return this.http.get<SportResult[]>(`${this.config.getConfig().baseUrl}fullResults/${sport}/${gender}`).subscribe({
      next: (data: SportResult[]) => {
        this.fullResults = data;
      }, error: (err) => {
        console.error(err);
      }
    });
  }
}
