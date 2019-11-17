import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/service/cart.service';
import { ProductModel } from '../product-list/product-model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public items: ProductModel[];
  public checkoutForm: FormGroup;

  constructor(private cartService: CartService,
              private formBuider: FormBuilder) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuider.group({
      name: '',
      address: ''
    });
  }

  public onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
