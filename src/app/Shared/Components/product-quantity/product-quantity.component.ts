import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';
import { ShopCart } from '../../Models/ShopCart';
import { ShoppingCartService } from '../../Services/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent{
  @Input('product') product : Product;
  @Input('shopping-cart') shoppingCart : ShopCart;
  constructor(private cartService: ShoppingCartService){}
  addToCart(){
    this.cartService.addToCart(this.product);
  }
  async removeFromCart(){
    await this.cartService.removeFromCart(this.product);
    this.shoppingCart.productsList = this.shoppingCart.productsList.filter(x => x.quantity > 0);
  }
  getQuantity(){
    if(!this.shoppingCart) return 0;
    let item = this.shoppingCart.productsList.find(x => x._id == this.product._id) as Product;
    this.product.quantity = item ? item.quantity : 0;
    return item ? item.quantity : 0
  }
}
