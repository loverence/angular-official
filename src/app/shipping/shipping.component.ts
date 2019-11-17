import { Component, OnInit } from '@angular/core';

import { CartService } from '../shared/service/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent
  implements OnInit {

  public shippingCosts: any;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
