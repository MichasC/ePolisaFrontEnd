import {Component, OnInit} from '@angular/core';
import {PersonCar} from '../../../models/personCar';
import {PersonCarService} from '../../../service/person-car.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-insurance-add',
  templateUrl: './insurance-add.component.html',
  styleUrls: ['./insurance-add.component.less']
})
export class InsuranceAddComponent implements OnInit {


  personCar: PersonCar = this.newPersonCar();

  constructor(private personCarService: PersonCarService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.personCar);
    this.personCarService.addPersonCar(this.personCar).subscribe(result =>this.goToNextPage());
  }

  newPersonCar(): PersonCar {

    return {model: '', make: '', dateProduction: null, vehicleRegistration: ''};
  }

  goToNextPage(){
    this.router.navigate(['/insurance/add/2'])
  }
}

