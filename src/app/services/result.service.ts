import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../app-config';
import { Subscription } from 'rxjs';
import { SportResult, TopThreeAthletes } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient, private config: AppConfig) { }

  getTopAthletes(sport: string) {
    return this.http.get<TopThreeAthletes[]>(`${this.config.getConfig().baseUrl}topThreeAtheltes/${sport}`);
  }

  getFullResults(sport: string, gender: string) {
    return this.http.get<SportResult[]>(`${this.config.getConfig().baseUrl}fullResults/${sport}/${gender}`);
  }
}
