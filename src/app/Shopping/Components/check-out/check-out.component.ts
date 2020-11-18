import { Component, OnInit } from '@angular/core';
import { ShopCart } from '../../../Shared/Models/ShopCart';
import { ShoppingCartService } from '../../../Shared/Services/shopping-cart.service';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  cart : ShopCart;
  constructor(private cartService: ShoppingCartService) { }

  async ngOnInit() {
    (await this.cartService.getCart()).subscribe(cart => {this.cart = cart;});
  }
}
