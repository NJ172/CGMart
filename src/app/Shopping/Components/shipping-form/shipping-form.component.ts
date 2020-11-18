import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Shipping } from '../../../Shared/Models/shipping';
import { ShopCart } from '../../../Shared/Models/ShopCart';
import { Order } from '../../../Shared/Models/Order';
import { OrderService } from '../../../Shared/Services/order.service';
import { AuthService } from '../../../Shared/Services/auth.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {
  shipping : Shipping = new Shipping();
  userId: string;
  @Input('cart') cart : ShopCart;
  constructor(private router: Router, private orderService : OrderService, private authService: AuthService) { }

  async ngOnInit() {
    this.userId = await this.authService.currentUser._id;
  }
  async placeOrder(){
    let order = new Order(this.userId,this.cart,this.shipping);
    let result =await this.orderService.create(order) as any;
    window.alert('Order Placed');
    this.router.navigate(['/order-success', result._id]);
  }
}
