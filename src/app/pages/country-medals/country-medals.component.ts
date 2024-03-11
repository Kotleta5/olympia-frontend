import { Component, OnInit } from '@angular/core';
import { CountryMedalsService } from 'src/app/services/country-medals.service';
import { CountryMedal } from 'src/app/types/types';

@Component({
  selector: 'app-country-medals',
  templateUrl: './country-medals.component.html',
  styleUrls: ['./country-medals.component.scss']
})
export class CountryMedalsComponent implements OnInit {
  readonly displayedColumns: string[] = ['country', 'gold', 'silver', 'bronze', 'total'];
  countryMedalsList: CountryMedal[] = [];

  constructor(private countryMedalsService: CountryMedalsService) { }

  ngOnInit(): void {
    this.countryMedalsService.fetchCountryMedals().add(() =>
      this.countryMedalsList = this.countryMedalsService.countryMedals
    );
  }

  sortCountry() {
    this.countryMedalsList = this.countryMedalsList.sort((a, b) => 
    a.germanCountryName > b.germanCountryName ? -1 : 1 );
  }
}
