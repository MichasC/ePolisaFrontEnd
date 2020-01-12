import { Component, OnInit } from '@angular/core';
import {Client} from '../../../models/client';
import {ClientService} from '../../../service/client.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  client: Client = this.newClient();
  constructor(
    private route: ActivatedRoute,
    private clientService:ClientService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.clientService.addClientUser(this.client).subscribe(result=>this.goToLogin())
  }


  newClient(): Client{
    return{
      firstName:'',lastName:'',userName:'',password:'',numberPhone: null,mail:''
    }
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

}
