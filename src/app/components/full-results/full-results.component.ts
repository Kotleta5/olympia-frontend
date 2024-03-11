import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultService } from 'src/app/services/result.service';
import { SportResult } from 'src/app/types/types';

@Component({
  selector: 'app-full-results',
  templateUrl: './full-results.component.html',
  styleUrls: ['./full-results.component.scss']
})
export class FullResultsComponent implements OnInit {
  readonly sports: string[] = ['Weitsprung', '100m-Sprint', 'Springreiten', 'Schwimmen'];
  readonly genders: string[] = ['male', 'female'];
  readonly displayedColumns: string[] = ['medals', 'country', 'athlete'];
  fullResults: SportResult[] = [];
  selectedGender: string = '';
  selectedSport: string = '';

  constructor(private route: ActivatedRoute, private resultService: ResultService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedSport = params['sport'];
      this.selectedGender = params['gender'];

      this.resultService.getFullResults(this.selectedSport, this.selectedGender)
        .add(() => this.fullResults = this.resultService.fullResults);
    })
  }

  filterFullResults() {
    if (this.selectedSport && this.selectedGender) {
      this.resultService.getFullResults(this.selectedSport, this.selectedGender).add(() => this.fullResults = this.resultService.fullResults);
    } else {
      this.fullResults = this.resultService.fullResults;
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
