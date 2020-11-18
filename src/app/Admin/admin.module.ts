import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from 'app/Shared/shared.module';

import { AdminOrdersComponent } from './Components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './Components/admin-products/admin-products.component';
import { ProductFormComponent } from './Components/product-form/product-form.component';
import { AdminGuard } from './Services/admin.guard';
import { RouterModule } from '@angular/router';
import { AuthGuardGuard } from 'app/Shared/Services/auth-guard.guard';

@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path : 'admin/products/new', component : ProductFormComponent, canActivate: [AuthGuardGuard, AdminGuard]},
      {path : 'admin/products/:_id', component : ProductFormComponent, canActivate: [AuthGuardGuard, AdminGuard]},
      {path : 'admin/products', component : AdminProductsComponent, canActivate: [AuthGuardGuard, AdminGuard]},
      {path : 'admin/orders', component : AdminOrdersComponent, canActivate: [AuthGuardGuard, AdminGuard]},
    ])
  ],
  providers:[AdminGuard]
})
export class AdminModule { }
