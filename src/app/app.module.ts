import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AdminModule } from './Admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Core/Components/login/login.component';
import { CoreModule } from './Core/core.module';
import { SharedModule } from './Shared/shared.module';
import { ProductsComponent } from './Shopping/Components/products/products.component';
import { ShoppingModule } from './Shopping/shopping.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path : '', component : ProductsComponent},
      {path : 'login', component : LoginComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
