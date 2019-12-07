import { Component } from '@angular/core';
import {Insurance} from '../../models/insurance';
import {InsuranceService} from '../../service/insurance.service';
import {Client} from '../../models/client';

@Component({
  selector: 'app-insurances-client',
  templateUrl: './insurances-client.component.html',
  styleUrls: ['./insurances-client.component.less']
})
export class InsurancesClientComponent {
  insurance:Insurance[];
  id :String;

  constructor(private insuranceService: InsuranceService) {
  }


  onSubmit(){
    this.insuranceService.findClientInsurances(this.id).subscribe(data=>this.insurance=data)
  }

}
