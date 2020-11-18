import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';
import { HttpClient } from '@angular/common/http';
import { ShopCart } from '../Models/ShopCart';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/observable/fromPromise';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private httpClient: HttpClient) { }
  async getCart(){
    let id = await this.getOrCreateCartId();
    return await this.httpClient.get<ShopCart>('http://localhost:3001/api/shopCart/' + id)
      .pipe(map(x => new ShopCart(x.productsList)));
  }
  create(){
    return this.httpClient.post('http://localhost:3001/api/shopCart/', {
      DateCreated: new Date().getTime()
    });
  }
  async clearCart(){
    let id = await this.getOrCreateCartId();
    console.log(id);
    localStorage.removeItem('cartId');
    this.httpClient.delete('http://localhost:3001/api/shopCart/' + id).subscribe();
  }
  addToCart(product: Product){
    //return Observable.fromPromise(this.updateItemQuantity(product, 1));
    return this.updateItemQuantity(product, 1);
  }
  removeFromCart(product: Product){
    return this.updateItemQuantity(product, -1);
  }
  async getOrCreateCartId(): Promise<String>{
    let cartId = localStorage.getItem('cartId');
    if(cartId) return cartId;

    let response = await this.create().toPromise() as any;
    localStorage.setItem('cartId', response._id);
    return response._id;
  }
  async updateItemQuantity(product : Product, change: number){
    let cartId = await this.getOrCreateCartId();
    product.quantity = (product.quantity || 0) + change;    
    this.httpClient.put('http://localhost:3001/api/shopCart/'+ cartId, product).subscribe();
  }
}
