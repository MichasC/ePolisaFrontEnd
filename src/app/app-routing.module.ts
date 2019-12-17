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
import {ProductsListComponent} from './component/product/products-list/products-list.component';
import {ProductsAddComponent} from './component/product/products-add/products-add.component';
import {ProductsComponent} from './component/product/products/products.component';


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
  {path: 'product',component: ProductsComponent},
  {path: 'products/list', component: ProductsListComponent},
  {path: 'products/add',component: ProductsAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
