import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../product-list/product-model';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product: ProductModel;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
