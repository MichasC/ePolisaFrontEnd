import {Component, OnInit} from '@angular/core';
import {Insurance} from '../../../models/insurance';
import {InsuranceService} from '../../../service/insurance.service';
import {Product} from '../../../models/product';
import {PersonCar} from '../../../models/personCar';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../../service/Authentication/token-storage.service';

@Component({
  selector: 'app-insurance-add3',
  templateUrl: './insurance-add3.component.html',
  styleUrls: ['./insurance-add3.component.less']
})
export class InsuranceAdd3Component implements OnInit {

  insurance: Insurance;
  product:  Product;
  productArray: Array<Product>;
  personCar: PersonCar;
  userName: string;

  constructor(private insuranceService: InsuranceService,
              private router: Router) {
    this.productArray = [];
  }

  ngOnInit() {
    this.userName = TokenStorageService.getLoggedUsername();
    [this.insurance, this.product, this.personCar] = this.insuranceService.showInsuranceAdd();
  }

  onSubmit() {
    this.productArray.push(this.product);
    this.insurance.personCar = this.personCar;
    this.insurance.product = this.productArray;
    this.insuranceService.addInsuranceALl(this.userName,this.insurance).subscribe(result=>this.router.navigate(['/insurance/add/4']));
  }

  // newInsurance(): Insurance {
  //   return {name: '', dateSubmission: null, dateStart: null, dateEnd: null, price: ''};
  // }
}
