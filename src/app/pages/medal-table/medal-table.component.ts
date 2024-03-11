import { Component, OnInit } from '@angular/core';
import { MedalistService } from '../../services/medalist.service';
import { Medalist } from '../../types/types';
@Component({
  selector: 'app-medal-table',
  templateUrl: './medal-table.component.html',
  styleUrls: ['./medal-table.component.scss']
})
export class MedalTableComponent implements OnInit {
  readonly sports: string[] = ['Weitsprung', '100m-Sprint', 'Springreiten', 'Schwimmen'];
  readonly displayedColumns: string[] = ['country', 'athlete', 'sport', 'medals'];
  medalists: Medalist[] = [];
  countries: string[] = [];
  selectedSport: string | undefined;
  selectedCountry: string | undefined;

  constructor(private medalistService: MedalistService) { }

  ngOnInit(): void {
    this.medalistService.fetchMedalists().add(() => this.medalists = this.medalistService.medalists);
    this.medalistService.fetchCountries().add(() => this.countries = this.medalistService.countries);
  }

  filterMedalists() {
    if (!this.selectedSport && !this.selectedCountry) {
      this.medalists = this.medalistService.medalists
    } else {
      this.medalists = this.medalistService.medalists.filter((data) => 
      (!this.selectedSport || this.selectedSport === data.sport) &&
      (!this.selectedCountry || this.selectedCountry === data.germanCountryName))
    }
  }

  selectMedalClass(result: number): string {
    let cssClass = '';
    if (result === 1) {
      cssClass = 'dot-gold';
    } else if (result === 2) {
      cssClass = 'dot-silver';
    } else if (result === 3) {
      cssClass = 'dot-bronze';
    } else {
      cssClass = '';
    }
    return cssClass;
  }
}