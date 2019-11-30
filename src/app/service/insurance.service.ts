import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Insurance} from '../models/insurance';

@Injectable(

)
export class InsuranceService {
  private insuranceURL: string;

  constructor(private http: HttpClient) {
    this.insuranceURL = 'http://localhost:8080/insurance';
  }

  public findAll(): Observable<Insurance[]> {
    return this.http.get<Insurance[]>(this.insuranceURL);
  }
  public findById() : Observable<Insurance[]>{
    return this.http.get<Insurance[]>(this.insuranceURL+'/2')
  }

  // public save(insurance: Insurance) {
  //   return this.http.post<Insurance>(this.clientUrl, insurance);
  // }
}
