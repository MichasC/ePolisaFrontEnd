import {Injectable} from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {PersonCar} from '../models/personCar';

@Injectable({
  providedIn: 'root'
})
export class PersonCarService {

  private privateURL: string;

  constructor(private http: HttpClient) {
    this.privateURL = 'http://localhost:8080/person';
  }

  public addPersonCar(personCarDTO : PersonCar) {
    console.log("test1");
    return this.http.post(this.privateURL + '/add' ,personCarDTO);
  }

}
