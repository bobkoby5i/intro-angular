import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { ProductsPage } from './pages/products/products.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'products',
    component: ProductsPage
  },
  {
    path: 'home',
    component: HomePage
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }