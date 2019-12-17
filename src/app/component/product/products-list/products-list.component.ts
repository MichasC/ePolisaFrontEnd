import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../service/product.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.less']
})
export class ProductsListComponent implements OnInit {

  product:Product[];
  product2:Product[];
  name: string
;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.findAll().subscribe(data=>this.product=data);


  }

  // onSubmit(){
  //   console.log(this.name)
  //   this.productService.findByName(this.name).subscribe(data=>this.product2=data);
  // }

}
