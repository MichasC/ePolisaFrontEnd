import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../models/client';
import {Login} from '../models/login';

@Injectable()
export class ClientService {

  private clientUrl: string;

  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:8080/client';

  }

  public findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientUrl);
  }

  public save(ClientDTO: Client) {
    return this.http.post<Client>(this.clientUrl, ClientDTO);
  }




}
