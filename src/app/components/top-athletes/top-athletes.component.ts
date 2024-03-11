import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultService } from 'src/app/services/result.service';
import { TopThreeAthletes } from 'src/app/types/types';

@Component({
  selector: 'app-top-athletes',
  templateUrl: './top-athletes.component.html',
  styleUrls: ['./top-athletes.component.scss']
})
export class TopAthletesComponent {
  topAtheltes= {} as TopThreeAthletes;
  sport: string = '';
  
  constructor(private resultService: ResultService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.sport = params['sport'];
      this.getTopAthletes(this.sport);
    });
  }

  async getTopAthletes(sport: string) {
    this.resultService.getTopAthletes(sport).subscribe({
      next: (data: TopThreeAthletes) => {
        this.topAtheltes = data;
      }, error: (err) => {
        console.error(err);
      }
    })
  }

  navigateToFullResults(sport: string, gender: string) {
    this.router.navigate(['fullResults', {sport: sport, gender: gender}]);
  }
}
