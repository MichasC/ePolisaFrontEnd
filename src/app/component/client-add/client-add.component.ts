import {Component, OnInit} from '@angular/core';
import {Client} from '../../models/client';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../../service/client.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.less']
})
export class ClientAddComponent {

  client: Client;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {
    this.client = new Client();
  }

  onSubmit() {
    this.clientService.save(this.client).subscribe(result => this.goToClientList());
  }

  goToClientList() {
    this.router.navigate(['/client']);
  }

}
