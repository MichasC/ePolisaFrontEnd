import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Insurance} from '../models/insurance';
import {TokenStorageService} from './Authentication/token-storage.service';
import {PersonCar} from '../models/personCar';
import {Product} from '../models/product';
import {tokenize} from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  private insuranceURL: string;
  private personCar: PersonCar;
  private product: Product;
  private insurance: Insurance;
  private username: string;

  constructor(private http: HttpClient) {
    this.insuranceURL = 'http://localhost:8080/insurance';
  }

  public findAll(): Observable<Insurance[]> {
    return this.http.get<Insurance[]>(this.insuranceURL);
  }

  // public findById() : Observable<Insurance[]>{
  //   return this.http.get<Insurance[]>(this.insuranceURL)
  // }
  public findClientInsurances(username: String): Observable<Insurance[]> {
    return this.http.post<Insurance[]>('http://localhost:8080/client/insurance', username);
  }


  public addPersonCar(personCar: PersonCar) {
    this.personCar = personCar;
    // console.log(this.personCar);
    // return this.http.get(this.insuranceURL + '/add/2');
  }

  public addProduct(product: Product) {
    this.product = product;
    // console.log(this.product);
  }

  public addInsurance(insurance: Insurance) {
    this.insurance = insurance;
    // console.log(this.insurance);
  }

  public showInsuranceAdd(): [Insurance, Product, PersonCar] {
    return [this.insurance, this.product, this.personCar];
  }

  public addInsuranceALl(username: String, insurance: Insurance) {
    // console.log(insurance);
    return this.http.post(this.insuranceURL + '/add', insurance);
  }


  // public save(insurance: Insurance) {
  //   return this.http.post<Insurance>(this.clientUrl, insurance);
  // }
}
