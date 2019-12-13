import { Injectable } from '@angular/core';
import {Login} from '../models/login';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  clientUrl: string;

  constructor(private http: HttpClient,private token: TokenStorageService) {
    this.clientUrl = 'http://localhost:8080/login';
  }

  public login(username:string,password:string) {
    const login = {username: username, password:password}
    return this.http.post<any>(this.clientUrl, login);
  }
  logout() {
    const url = 'http://localhost:8080/logout' ;
    return this.http.post<any>(url, '');
  }
}
