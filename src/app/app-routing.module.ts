import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientListComponent} from './component/client-list/client-list.component';
import {InsuranceListComponent} from './component/insurance-list/insurance-list.component';
import {ClientAddComponent} from './component/client-add/client-add.component';
import {InsurancesClientComponent} from './component/insurances-client/insurances-client.component';
import {LoginComponent} from './component/login/login/login.component';
import {RoleEnum} from './models/role-enum';
import {RoleGuardService as RoleGuard} from './service/Authentication/role-guard.service';
import {IndexComponent} from './component/index/index.component';
import {ProductsListComponent} from './component/products-list/products-list.component';


const routes: Routes = [
  { path: 'client', component: ClientListComponent,
    canActivate: [RoleGuard],
    data: {
      roles: RoleEnum[RoleEnum.AGENT]
    }},
  {path: '',component:IndexComponent},
  {path: 'insurance',component: InsuranceListComponent},
  {path: 'add/client',component: ClientAddComponent,
    canActivate: [RoleGuard],
    data: {
      roles: RoleEnum[RoleEnum.ADMIN]
    }},

  {path: 'client/insurance',component: InsurancesClientComponent,
    canActivate: [RoleGuard],
    data: {
      roles: RoleEnum[RoleEnum.CLIENT]
    }},
  {path: 'login' ,component: LoginComponent },
  {path: 'products', component: ProductsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
