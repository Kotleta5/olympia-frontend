import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MedalTableComponent } from './pages/medal-table/medal-table.component';
import { LoginComponent } from './login/login.component';
import { SelectSportComponent } from './pages/select-sport/select-sport.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'results', component: SelectSportComponent },
  { path: 'medal-table', component: MedalTableComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
