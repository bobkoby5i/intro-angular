import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home/home.page';
import { ProductsPage } from './pages/products/products.page';
import { ProductComponent } from './components/product/product.component';
import { ProductPhotoUrlPipe } from './pipes/product-photo-url.pipe';
import { ProductDetailsPage } from './pages/product-details/product-details.page';


@NgModule({
  declarations: [HomePage, ProductsPage, ProductComponent, ProductPhotoUrlPipe, ProductDetailsPage],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
