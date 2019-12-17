import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './service/Authentication/token-storage.service';
import {Router} from '@angular/router';
import {LoginService} from './service/login.service';
import {RoleEnum} from './models/role-enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  isLoggedIn = false;
  isAdmin = false;
  isAgent = false;
  isClient = false;
  isMarketMan = false;
  username = '';
  constructor(private token: TokenStorageService, private loginService: LoginService, private router: Router) {
  }
  ngOnInit() {
    this.isLoggedIn = TokenStorageService.isAuthenticated();
    // if (!this.isLoggedIn) {
    //   this.router.navigate(['']);
    // }
    this.isAdmin = this.hasUserAdminPermission();
    this.username = TokenStorageService.getLoggedUsername();
    this.isAgent = this.hasUserAgentPermission();
    this.isClient = this.hasUserClientPermission();
    this.isMarketMan = this.hasUserMarketManPermission();

  }

  private hasUserAdminPermission(): boolean {
    return TokenStorageService.hasUserRole(RoleEnum.ADMIN);
  }

  private hasUserAgentPermission(): boolean {
    return TokenStorageService.hasUserRole(RoleEnum.AGENT);
  }
  private hasUserClientPermission(): boolean {
    return TokenStorageService.hasUserRole(RoleEnum.CLIENT);
  }
  private hasUserMarketManPermission(): boolean {
    return TokenStorageService.hasUserRole(RoleEnum.MARKETMAN);
  }

  logout() {
    this.loginService.logout();
    TokenStorageService.signOut();
    location.reload();
  }

}
