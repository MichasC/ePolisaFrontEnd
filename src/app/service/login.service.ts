import { Injectable } from '@angular/core';
import {Login} from '../models/login';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private clientUrl: string;

  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:8080/login';
  }

  public login(username:string,password:string) {
    const login = {username: username, password:password}
    return this.http.post<any>(this.clientUrl, login);
  }
}
