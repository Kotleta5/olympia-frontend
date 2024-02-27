import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../app-config';
import { Sport, Sport_temp } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(private http: HttpClient, private config: AppConfig) { }

  public getSport() {
    return this.http.get<Sport_temp>(`${this.config.getConfig().baseUrl}/test3`);
  }
}
