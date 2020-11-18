import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShoppingCartService } from '../../Shared/Services/shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient : HttpClient, private cartService: ShoppingCartService) { }
  async create(order){
    let result = await this.httpClient.post('http://localhost:3001/api/tempProduct/', order).toPromise();
    this.cartService.clearCart();
    return result;
  }
}
