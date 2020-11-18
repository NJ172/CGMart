import { Component, OnInit, Input } from '@angular/core';
import { ShopCart } from '../../../Shared/Models/ShopCart';

@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent implements OnInit {
@Input('cart')cart: ShopCart;
  constructor() { }

  ngOnInit(): void {
  }

}
