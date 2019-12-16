import {Component, OnInit} from '@angular/core';


import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../../service/login.service';
import {Login} from '../../../models/login';
import {TokenStorageService} from '../../../service/Authentication/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit{

  credentail1 = {'username': '', 'password': ''};
  // login: Login;
  private loggedIn = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private token: TokenStorageService) {
    // this.login = new Login();
  }

  onSubmit() {
    this.loginService.login(this.credentail1.username, this.credentail1.password)
      .subscribe(
        res => {
          console.log(res);
          TokenStorageService.saveTokenAndUsername(res.token, this.credentail1.username);
          location.reload();
        },
        // result => {
        //   this.goToClientList();
        // },
      );
  }

  ngOnInit() {
    this.loggedIn = TokenStorageService.isAuthenticated();
    console.log('is logged: ' + this.loggedIn);
    if (this.loggedIn) {
      this.router.navigate(['']);
    }
  }

  // goToClientList() {
  //   this.loggedIn = TokenService.isAuthenticated();
  //   console.log('is logged: ' + this.loggedIn);
  //   if (this.loggedIn) {
  //     this.router.navigate(['/client']);
  //   }
  // }
}
