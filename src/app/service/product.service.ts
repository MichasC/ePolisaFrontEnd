import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {Insurance} from '../models/insurance';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productURL: string;

  constructor(private http: HttpClient) {
    this.productURL = 'http://localhost:8080/products';
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productURL);
  }

  public findByName(name: string): Observable<Product[]> {
    let params = new HttpParams();
    params = params.set('name', name);
    return this.http.get<Product[]>(this.productURL+'/description',{params:params});

}

}
