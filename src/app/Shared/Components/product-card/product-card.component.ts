import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../Models/Product';
import { ShopCart } from '../../Models/ShopCart';
import { ShoppingCartService } from '../../Services/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{
@Input('product') product : Product;
@Input('show-actions') showActions;
@Input('shopping-cart') shoppingCart : ShopCart;

  constructor(private cartService: ShoppingCartService) { }
  addToCart(){
    this.cartService.addToCart(this.product);
  }
  // getQuantity(){
  //   if(!this.shoppingCart) return 0;
  //   let item = this.shoppingCart.productsList.find(x => x._id == this.product._id) as Product;
  //   this.product.quantity = item ? item.quantity : 0;
  //   return item ? item.quantity : 0
  // }
}
