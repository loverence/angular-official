import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from 'src/app/product-list/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: ProductModel[] = [];

  constructor(private http: HttpClient) { }

  public addToCart(product: ProductModel) {
    this.items.push(product);
  }

  public getItems(): ProductModel[] {
    return this.items;
  }

  public clearCart() {
    this.items = [];
    return this.items;
  }

  public getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
