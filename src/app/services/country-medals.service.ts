import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../app-config';
import { CountryMedal } from '../types/types';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryMedalsService {
  countryMedals: CountryMedal[] = [];

  constructor(private http: HttpClient, private config: AppConfig) { }

  public fetchCountryMedals(): Subscription {
    return this.http.get<CountryMedal[]>(`${this.config.getConfig().baseUrl}countryMedals`).subscribe({
      next: (data: CountryMedal[]) => {
        this.countryMedals = data;
      }, error: (err) => {
        console.log(err);
      }
    })
  }
}
