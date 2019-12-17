import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import {RoleEnum} from '../../models/role-enum';


const TOKEN_KEY = 'AuthToken';
const USERNAME = 'Username';


@Injectable()
export class TokenStorageService {

  constructor() {
  }

  public static signOut() {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(USERNAME);
    sessionStorage.clear();
  }

  public static saveTokenAndUsername(token: string, username: string) {
    sessionStorage.setItem(TOKEN_KEY, token);
    sessionStorage.setItem(USERNAME, username);
  }

  public static getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public static isAuthenticated(): boolean {
    return !!TokenStorageService.getToken();
  }

  public static getLoggedUsername(): string {
    return sessionStorage.getItem(USERNAME);
  }


  public static getUserRoles(): Array<string> {
    if (TokenStorageService.getToken()) {
      console.log(decode(TokenStorageService.getToken()).scopes);
      return decode(TokenStorageService.getToken()).scopes;
    }
    return new Array<string>();
  }

  public static hasUserRole(role: RoleEnum) {
    return TokenStorageService.getUserRoles().indexOf(RoleEnum[role]) !== -1;
  }

}
