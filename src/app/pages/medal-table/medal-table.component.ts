import { Component, OnInit } from '@angular/core';
import { MedalistService } from '../../services/medalist.service';
import { Medalist } from '../../types/types';
@Component({
  selector: 'app-medal-table',
  templateUrl: './medal-table.component.html',
  styleUrls: ['./medal-table.component.scss']
})
export class MedalTableComponent implements OnInit {
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
    if (this.selectedSport && this.selectedCountry) {
      this.medalists = this.medalistService.medalists.filter((data) => data.country === this.selectedCountry && data.sport === this.selectedSport);
    }
    else if (this.selectedSport && !this.selectedCountry) {
      this.medalists = this.medalistService.medalists.filter((data) => data.sport === this.selectedSport);
    }
    else if (!this.selectedSport && this.selectedCountry) {
      this.medalists = this.medalistService.medalists.filter((data) => data.country === this.selectedCountry);
    }
    else {
      this.medalists = this.medalistService.medalists;
    }
  }

  sports: string[] = ['Weitsprung', '100m-Sprint', 'Springreiten', 'Schwimmen'];
  displayedColumns: string[] = ['country', 'athlete', 'sport', 'medals'];
}