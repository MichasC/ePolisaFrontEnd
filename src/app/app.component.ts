import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './service/token-storage.service';
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
  isWarehouseman = false;
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
    this.isWarehouseman = this.hasUserWarehousemanPermission();
  }

  private hasUserAdminPermission(): boolean {
    return TokenStorageService.hasUserRole(RoleEnum.ADMIN);
  }

  private hasUserWarehousemanPermission(): boolean {
    return TokenStorageService.hasUserRole(RoleEnum.WAREHOUSEMAN);
  }

  logout() {
    this.loginService.logout();
    TokenStorageService.signOut();
    location.reload();
  }

}
