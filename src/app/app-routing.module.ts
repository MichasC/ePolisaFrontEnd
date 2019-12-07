import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientListComponent} from './component/client-list/client-list.component';
import {InsuranceListComponent} from './component/insurance-list/insurance-list.component';
import {ClientAddComponent} from './component/client-add/client-add.component';
import {InsurancesClientComponent} from './component/insurances-client/insurances-client.component';
import {LoginComponent} from './component/login/login/login.component';


const routes: Routes = [
  { path: 'client', component: ClientListComponent},
  {path: 'insurance',component: InsuranceListComponent},
  {path: 'add/client',component: ClientAddComponent},
  {path: 'client/insurance',component: InsurancesClientComponent},
  {path: 'login' ,component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
