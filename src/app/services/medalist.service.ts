import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../app-config';
import { Medalist } from '../types/types';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedalistService {
  medalists: Medalist[] = [];
  countries: string[] = [];

  constructor(private http: HttpClient, private config: AppConfig) { }

  public fetchMedalists(): Subscription {
    return this.http.get<Medalist[]>(`${this.config.getConfig().baseUrl}medalTable`).subscribe({
      next: (medalists: Medalist[]) => {
        this.medalists = medalists;
      }, error: (err) => {
        console.error(err);
      }
    });
  }

  public fetchCountries(): Subscription {
    return this.http.get<string[]>(`${this.config.getConfig().baseUrl}countries`).subscribe({
      next: (countries: string[]) => {
        this.countries = countries;
      }, error: (err) => {
        console.error(err);
      }
    });
  }
}
