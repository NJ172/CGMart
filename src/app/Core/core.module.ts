import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/Shared/shared.module';

import { BsNavbarComponent } from './Components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    BsNavbarComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  exports:[
    BsNavbarComponent
  ]
})
export class CoreModule { }
