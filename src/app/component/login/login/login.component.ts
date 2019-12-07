import {Component, OnInit} from '@angular/core';


import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../../service/login.service';
import {Login} from '../../../models/login';
import {ClientService} from '../../../service/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  login: Login;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private  clientService: ClientService)
  {
    this.login = new Login();
  }

  onSubmit() {
    this.loginService.login(this.login.userName,this.login.password).subscribe(result => this.goToClientList());
  }

  goToClientList() {
    this.router.navigate(['/client']);
  }
}
