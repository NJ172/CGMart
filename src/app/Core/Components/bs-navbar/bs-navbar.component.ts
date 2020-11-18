import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Shared/Services/auth.service';
import { ShoppingCartService } from '../../../Shared/Services/shopping-cart.service';
import { Observable } from 'rxjs';
import { ShopCart } from '../../../Shared/Models/ShopCart';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  cart$ : Observable<ShopCart>;
  constructor(public Auth: AuthService, private cartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }
}
