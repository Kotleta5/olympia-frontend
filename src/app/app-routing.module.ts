import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MedalTableComponent } from './pages/medal-table/medal-table.component';
import { LoginComponent } from './login/login.component';
import { SelectSportComponent } from './pages/select-sport/select-sport.component';
import { TopAthletesComponent } from './components/top-athletes/top-athletes.component';
import { FullResultsComponent } from './components/full-results/full-results.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'sport', component: SelectSportComponent },
  { path: 'medal-table', component: MedalTableComponent },
  { path: 'topAthletes/:sport', component: TopAthletesComponent },
  { path: 'fullResults', component: FullResultsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
