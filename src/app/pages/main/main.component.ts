import { Component, OnInit } from '@angular/core';
import { SportService } from '../../services/sport.service';
import { Sport } from '../../types/types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent /* implements OnInit */ {
 /*  sport: Sport[] = [];
  constructor(private sportService: SportService) {}

  ngOnInit(): void {
      this.getSport();
    
  }

  async getSport() {
    this.sportService.getSport().subscribe({
      next: (sport: Sport[]) => {
        this.sport = sport;
        console.log('SPORT!!!!!!!!!!!!', this.sport);
      }, error: (err) => {
        console.error(err);
      }
    });
  } */
}
