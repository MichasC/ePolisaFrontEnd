import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../../service/Authentication/token-storage.service';
import {RoleEnum} from '../../../models/role-enum';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  isMarketMan = false;
  username = '';

  constructor() { }

  ngOnInit() {
    this.username = TokenStorageService.getLoggedUsername();
    this.isMarketMan = this.hasUserMarketManPermission();
  }

  private hasUserMarketManPermission(): boolean {
    return TokenStorageService.hasUserRole(RoleEnum.MARKETMAN);
  }

}
