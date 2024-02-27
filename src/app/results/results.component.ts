import { Component, OnInit } from '@angular/core';
import { Sport, Sport_temp } from '../types/types';
import { SportService } from '../services/sport.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit {
  sports = {} as Sport_temp;
  constructor(private sportService: SportService) {}

  ngOnInit(): void {
      this.getSport();
    
  }

  async getSport() {
    this.sportService.getSport().subscribe({
      next: (sports: Sport_temp) => {
        this.sports = sports;
        console.log('SPORT!!!!!!!!!!!!', this.sports);
      }, error: (err) => {
        console.error(err);
      }
    });
  }
}