import {Component, OnInit} from '@angular/core';
import {Insurance} from '../../../models/insurance';
import {InsuranceService} from '../../../service/insurance.service';
import {Client} from '../../../models/client';
import {TokenStorageService} from '../../../service/Authentication/token-storage.service';
import {ClientService} from '../../../service/client.service';

@Component({
  selector: 'app-insurances-client',
  templateUrl: './insurances-client.component.html',
  styleUrls: ['./insurances-client.component.less']
})
export class InsurancesClientComponent implements OnInit{
  insurance:Insurance[];
  id :String;
  username: string;

  constructor(
    private insuranceService: InsuranceService
    ) {}

  ngOnInit() {
    this.username = TokenStorageService.getLoggedUsername();
    this.insuranceService.findClientInsurances(this.username).subscribe(data=>this.insurance=data)
  }


}
