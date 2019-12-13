import {Component, OnInit} from '@angular/core';
import {Client} from '../../models/client';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../../service/client.service';
import {Role} from '../../models/role';
import {Insurance} from '../../models/insurance';

@Component({
  selector: 'app-user-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.less']
})
export class ClientAddComponent {

  client: Client = this.newClientWithValue();


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {
  }

  onSubmit() {
    this.clientService.save(this.client).subscribe(result => this.goToClientList());
  }

  goToClientList() {
    this.router.navigate(['/client']);
  }

  newClientWithValue(): Client {
    return {
      firstName: '', password: '', userName: '', roles: [],
       mail: '',  lastName: '',numberPhone: null,insurance:[]
    };

  }


}
