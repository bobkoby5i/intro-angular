import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home/home.page';
import { ProductsPage } from './pages/products/products.page';
import { ProductComponent } from './components/product/product.component';
import { ProductPhotoUrlPipe } from './pipes/product-photo-url.pipe';


@NgModule({
  declarations: [HomePage, ProductsPage, ProductComponent, ProductPhotoUrlPipe],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
