import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientListComponent} from './component/client-list/client-list.component';
import {InsuranceListComponent} from './component/insurance-list/insurance-list.component';
import {ClientAddComponent} from './component/client-add/client-add.component';


const routes: Routes = [
  { path: 'Listclient', component: ClientListComponent},
  {path: 'insurance',component: InsuranceListComponent},
  {path: 'addclient',component: ClientAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
