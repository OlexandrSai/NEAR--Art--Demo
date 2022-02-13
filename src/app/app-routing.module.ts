import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthGuard} from "./guards/auth.guard";

// { path: '', component: HomeComponent, canActivate: [AuthGuard] },
// { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
