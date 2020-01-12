import { Component, OnInit } from '@angular/core';
import {Client} from '../../../models/client';
import {ClientService} from '../../../service/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.less']
})
export class ClientListComponent implements OnInit {
  client: Client[];
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.findAll().subscribe(data=>{this.client=data;})
  }

}
