import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home/home.page';
import { ProductsPage } from './pages/products/products.page';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  declarations: [HomePage, ProductsPage, ProductsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
