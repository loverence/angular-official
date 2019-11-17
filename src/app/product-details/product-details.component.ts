import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductModel } from '../product-list/product-model';
import { ProductData } from '../product-list/product-data';

import { CartService } from '../shared/service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product: ProductModel;

  constructor(private route: ActivatedRoute
            , private cartService: CartService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.product = ProductData.find(p => p.id === +params.get('productId')));
  }

  public addToCart(product: ProductModel) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
