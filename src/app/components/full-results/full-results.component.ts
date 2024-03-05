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
  sport: string = '';
  gender: string = '';
  fullResults: SportResult[] = [];
  selectedGender: string = '';
  selectedSport: string = '';

  constructor(private route: ActivatedRoute, private resultService: ResultService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.sport = params['sport'];
      this.gender = params['gender'];
      this.getFullResults(this.sport, this.gender);
    })
  }

  async getFullResults(sport: string, gender: string) {
    this.resultService.getFullResults(sport, gender).subscribe({
      next: (data: SportResult[]) => {
        this.fullResults = data;
        console.log('FULLDATA!!!', this.fullResults);
      }, error: (err) => {
        console.error(err);
      }
    })
  }

  filterFullResults() {

  }
  
  sports: string[] = ['Weitsprung', '100m-Sprint', 'Springreiten', 'Schwimmen'];
  genders: string[] = ['male', 'female'];
  displayedColumns: string[] = ['medals', 'country', 'athlete'];
}
