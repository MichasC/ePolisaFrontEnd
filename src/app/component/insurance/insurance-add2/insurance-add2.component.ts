import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {Product} from '../../../models/product';
import {InsuranceService} from '../../../service/insurance.service';
import {Router} from '@angular/router';
import {Insurance} from '../../../models/insurance';


@Component({
  selector: 'app-insurance-add2',
  templateUrl: './insurance-add2.component.html',
  styleUrls: ['./insurance-add2.component.less']
})
export class InsuranceAdd2Component implements OnInit {

  product: Product[];
  productCheck: Product;
  insurance: Insurance = this.newInsurance();
  time = new Date();
  constructor(private productService: ProductService,
              private insuranceService: InsuranceService,
              private router: Router) {
    this.insurance.dateSubmission = this.time;
  }

  ngOnInit() {
    this.productService.findAll().subscribe(data => this.product = data);
  }

  onSubmit() {
    this.insuranceService.addProduct(this.productCheck);
    this.insuranceService.addInsurance(this.insurance);
    this.router.navigate(['/insurance/add/3']);
  }

  newInsurance(): Insurance {
    return {name: '', dateSubmission: null, dateStart: null, dateEnd: null, price: '',product:null};
  }
}
