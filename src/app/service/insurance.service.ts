import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Insurance} from '../models/insurance';
import {TokenStorageService} from './token-storage.service';

@Injectable({
    providedIn: 'root'
  })
export class InsuranceService {
  private insuranceURL: string;

  constructor(private http: HttpClient) {
    this.insuranceURL = 'http://localhost:8080/insurance';
  }

  public findAll(): Observable<Insurance[]> {
    return this.http.get<Insurance[]>(this.insuranceURL);
  }
  // public findById() : Observable<Insurance[]>{
  //   return this.http.get<Insurance[]>(this.insuranceURL)
  // }
  public findClientInsurances(id: String) : Observable<Insurance[]>{
    // const idKlient = TokenStorageService.getLoggedUsername();
    return this.http.get<Insurance[]>('http://localhost:8080/client/insurance/'+id)
  }

  // public save(insurance: Insurance) {
  //   return this.http.post<Insurance>(this.clientUrl, insurance);
  // }
}
