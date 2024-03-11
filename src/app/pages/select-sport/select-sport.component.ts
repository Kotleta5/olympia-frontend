import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-sport',
  templateUrl: './select-sport.component.html',
  styleUrls: ['./select-sport.component.scss']
})
export class SelectSportComponent {
  sport: string = '';

  constructor(private router: Router) { }

  navigateToTopAthletes(sport: string) {
    this.router.navigate(['topAthletes', sport]);
  }
}
