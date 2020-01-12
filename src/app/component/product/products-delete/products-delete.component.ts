import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.less']
})
export class ProductsDeleteComponent implements OnInit {

  product:Product[];
  name: string;

  constructor(
    private productService: ProductService,
    private router: Router) {}

  ngOnInit() {
    this.productService.findAll().subscribe(data=>this.product=data);
  }
  onSubmit(){
    console.log(this.name);
    this.productService.deleteProduct(this.name).subscribe(result=>this.goToProducts());
  }

  goToProducts(){
    this.router.navigate(['/products/list']);
  }

}
