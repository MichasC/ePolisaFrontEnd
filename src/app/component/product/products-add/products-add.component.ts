import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../../../service/client.service';
import {Product} from '../../../models/product';
import {ProductService} from '../../../service/product.service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.less']
})
export class ProductsAddComponent {

  product: Product = this.newProduct();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  onSubmit() {
    console.log(this.product);
    this.productService.addProduct(this.product).subscribe(result=>this.goToProducts());
  }

  newProduct():Product{
    return{
      abridgementName:'', name: '', description: ''
    };
  }
  goToProducts(){
    this.router.navigate(['/products/list']);
  }

}

