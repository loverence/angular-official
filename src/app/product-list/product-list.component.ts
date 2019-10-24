import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product-model';
import { ProductData } from './product-data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: ProductModel[];

  constructor() { }

  ngOnInit() {
    this.products = ProductData;
  }

  public share() {
    alert('share');
  }

  public onNotify() {
    alert('You will be notified when the product goes on sale');
  }
}
