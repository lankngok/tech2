import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './page/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './page/footer/footer.component';
import { OrderComponent } from './page/order/order.component';
import { ServiceComponent } from './page/service/service.component';
import { FeatureComponent } from './page/feature/feature.component';
import { ContactComponent } from './page/contact/contact.component';
import { AboutComponent } from './page/about/about.component';




@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    OrderComponent,
    ServiceComponent,
    FeatureComponent,
    ContactComponent,
    AboutComponent,
   
  
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
