import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home/home.page';
import { ProductsPage } from './pages/products/products.page';
import { ProductsComponent } from './components/products/products.component';
import { ProductPhotoUrlPipe } from './pipes/product-photo-url.pipe';


@NgModule({
  declarations: [HomePage, ProductsPage, ProductsComponent, ProductPhotoUrlPipe],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
