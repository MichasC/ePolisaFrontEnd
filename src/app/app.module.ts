import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListComponent } from './component/client-list/client-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ClientService} from './service/client.service';
import { InsuranceListComponent } from './component/insurance-list/insurance-list.component';
import {InsuranceService} from './service/insurance.service';
import { ClientAddComponent } from './component/client-add/client-add.component';
import { InsurancesClientComponent } from './component/insurances-client/insurances-client.component';
import { LoginComponent } from './component/login/login/login.component';
import {LoginService} from './service/login.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    InsuranceListComponent,
    ClientAddComponent,
    InsurancesClientComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClientService,InsuranceService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
