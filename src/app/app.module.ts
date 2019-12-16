import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListComponent } from './component/client-list/client-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ClientService} from './service/client.service';
import { InsuranceListComponent } from './component/insurance-list/insurance-list.component';
import {InsuranceService} from './service/insurance.service';
import { ClientAddComponent } from './component/client-add/client-add.component';
import { InsurancesClientComponent } from './component/insurances-client/insurances-client.component';
import { LoginComponent } from './component/login/login/login.component';
import {LoginService} from './service/login.service';
import {TokenStorageService as TokenStorage} from './service/Authentication/token-storage.service';
import {RoleGuardService} from './service/Authentication/role-guard.service';
import {InterceptorService} from './service/Authentication/interceptor-service.service';
import { IndexComponent } from './component/index/index.component';
import { ProductsListComponent } from './component/products-list/products-list.component';
import {ProductService} from './service/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    InsuranceListComponent,
    ClientAddComponent,
    InsurancesClientComponent,
    LoginComponent,
    IndexComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ClientService,
    InsuranceService,
    LoginService,
    TokenStorage,
    RoleGuardService,
    ProductService,
    InterceptorService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
