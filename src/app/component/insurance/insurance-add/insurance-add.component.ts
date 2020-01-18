import {Component, OnInit} from '@angular/core';
import {PersonCar} from '../../../models/personCar';
import {PersonCarService} from '../../../service/person-car.service';
import {ActivatedRoute, Router} from '@angular/router';
import {InsuranceService} from '../../../service/insurance.service';
import {Product} from '../../../models/product';


@Component({
  selector: 'app-insurance-add',
  templateUrl: './insurance-add.component.html',
  styleUrls: ['./insurance-add.component.less']
})
export class InsuranceAddComponent implements OnInit {


  personCar: PersonCar = this.newPersonCar();

  constructor(private personCarService: PersonCarService,
              private insuranceService : InsuranceService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {

    this.insuranceService.addPersonCar(this.personCar);
    this.router.navigate(['/insurance/add/2'])
  }

  newPersonCar(): PersonCar {
    return {model: '', make: '', dateProduction: null, vehicleRegistration: ''};
  }

}

