import { Component, OnInit } from '@angular/core';
import { ResultService } from '../../services/result.service';
import { TopThreeAthletes } from '../../types/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-sport',
  templateUrl: './select-sport.component.html',
  styleUrls: ['./select-sport.component.scss']
})
export class SelectSportComponent /* implements OnInit */ {

  //topAtheltes: TopThreeAthletes[] = [];
  sport: string = '';
  constructor(/* private resultService: ResultService, */ private router: Router) { }

  /* ngOnInit(): void {
    this.getTopAthletes(this.sport);

  }

  async getTopAthletes(sport: string) {
    this.resultService.getTopAthletes(sport).subscribe({
      next: (data: TopThreeAthletes[]) => {
        this.topAtheltes = data;
        console.log('TOP ATHLETEs', this.topAtheltes);
      }, error: (err) => {
        console.error(err);
      }
    })
  } */

  navigateToTopAthletes(sport: string) {
    console.log('sport in navigate function', sport);
    this.router.navigate(['topAthletes', sport]);
  }
}
