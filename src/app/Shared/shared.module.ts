import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from 'app/app-routing.module';
import { CustomFormsModule } from 'ngx-custom-validators';

import { AuthGuardGuard } from '../Shared/Services/auth-guard.guard';
import { AuthService } from '../Shared/Services/auth.service';
import { CategoryService } from '../Shared/Services/category.service';
import { OrderService } from '../Shared/Services/order.service';
import { ProductService } from '../Shared/Services/product.service';
import { ShoppingCartService } from '../Shared/Services/shopping-cart.service';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { ProductQuantityComponent } from './Components/product-quantity/product-quantity.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule,
    CustomFormsModule,
    NgbModule
  ],
  exports:[
    ProductCardComponent,
    ProductQuantityComponent,
    CommonModule,
    FormsModule,
    DataTablesModule,
    CustomFormsModule,
    NgbModule
  ],
  providers:[
    AuthService, AuthGuardGuard, CategoryService, ProductService, ShoppingCartService, OrderService
  ]
})
export class SharedModule { }
