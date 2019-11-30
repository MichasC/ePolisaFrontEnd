import { Component, OnInit } from '@angular/core';
import {Insurance} from '../../models/insurance';
import {InsuranceService} from '../../service/insurance.service';
import {endWith} from 'rxjs/operators';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.less']
})
export class InsuranceListComponent implements OnInit {

  insurance:Insurance[];

  constructor(private insuranceService: InsuranceService) {
  }

  ngOnInit() {
    this.insuranceService.findAll().subscribe(data=>this.insurance=data);
  }


}
