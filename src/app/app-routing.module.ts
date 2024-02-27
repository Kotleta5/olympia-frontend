import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ResultsComponent } from './results/results.component';
import { MedalTableComponent } from './medal-table/medal-table.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'medal-table', component: MedalTableComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
