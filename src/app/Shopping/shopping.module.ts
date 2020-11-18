import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuardGuard } from 'app/Shared/Services/auth-guard.guard';
import { SharedModule } from 'app/Shared/shared.module';

import { CheckOutComponent } from './Components/check-out/check-out.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';
import { ProductFilterComponent } from './Components/product-filter/product-filter.component';
import { ProductsComponent } from './Components/products/products.component';
import { ShippingFormComponent } from './Components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './Components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent
  ],
  imports: [
    SharedModule,    
    RouterModule.forChild([
      {path : '', component : ProductsComponent},
      {path : 'products', component : ProductsComponent},
      {path : 'shopping-cart', component : ShoppingCartComponent},
      {path : 'check-out', component : CheckOutComponent, canActivate: [AuthGuardGuard]},
      {path : 'order-success/:_id', component : OrderSuccessComponent, canActivate: [AuthGuardGuard]},
      {path : 'my-orders', component : MyOrdersComponent, canActivate: [AuthGuardGuard]},
    ])
  ]
})
export class ShoppingModule { }
