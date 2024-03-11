import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AthleteManagementService } from 'src/app/services/athlete-management.service';
import { AuthService } from 'src/app/services/auth.service';
import { MedalistService } from 'src/app/services/medalist.service';
import { FullData, User } from 'src/app/types/types';

@Component({
  selector: 'app-judger-section',
  templateUrl: './judger-section.component.html',
  styleUrls: ['./judger-section.component.scss']
})
export class JudgerSectionComponent implements OnInit {
  readonly sports: string[] = ['Weitsprung', '100m-Sprint', 'Springreiten', 'Schwimmen'];
  readonly genders: string[] = ['male', 'female'];
  readonly displayedColumns: string[] = ['id', 'athlete', 'gender', 'sport', 'country', 'result', 'edit'];
  countries: string[] = [];
  fullData: FullData[] = [];
  selectedSport: string | undefined;
  selectedGender: string | undefined;
  selectedCountry: string | undefined;
  selectedRow: FullData | undefined;
  inputResultForm: FormGroup = this.formBuilder.group({
    inputResult: new FormControl(0),
  });

  constructor(
    private athleteManagementService: AthleteManagementService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private medalistService: MedalistService,
    private router: Router) { }

  ngOnInit(): void {
    this.authService.isAuthenticated().add(() => this.authService.accessToken !== undefined && this.authService.role === 'judger' ?
      this.getFullData() : this.router.navigate(['/login']));
    this.medalistService.fetchCountries().add(() => this.countries = this.medalistService.countries);
  }

  getFullData() {
    this.athleteManagementService.getFullData().add(() => this.fullData = this.athleteManagementService.fullData);
  }

  filterFullData() {
    if (this.selectedCountry || this.selectedSport || this.selectedGender) {
      this.fullData = this.athleteManagementService.fullData
        .filter((data) => {
          return (!this.selectedCountry || this.selectedCountry === data.country) &&
            (!this.selectedSport || this.selectedSport === data.sport) &&
            (!this.selectedGender || this.selectedGender === data.gender);
        });
    } else {
      this.fullData = this.athleteManagementService.fullData;
    }
  }

  editRow(row: FullData) {
    this.selectedRow = !this.selectedRow ? row : undefined;
  }

  updateRowResult() {
    if (this.selectedRow && typeof this.inputResultForm.value === 'number' && +this.inputResultForm.value > 0) {
      this.selectedRow = { ...this.selectedRow, result: +this.inputResultForm.value };
    }
  }

  updateResult() {
    if (this.selectedRow) {
      this.athleteManagementService.updateResult({ id: this.selectedRow.athlete_id, result: this.selectedRow.result })
    }
    this.selectedRow = undefined;
    this.getFullData();
  }
}
