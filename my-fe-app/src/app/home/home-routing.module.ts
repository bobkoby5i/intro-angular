import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { ProductsPage } from './pages/products/products.page';
import { ProductDetailsPage } from './pages/product-details/product-details.page';

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
  },
  {
    path: 'products',
    component: ProductsPage,
    children: [
      {
        path: ":id",
        component: ProductDetailsPage 
      }
    ]
  },
  {
    path: 'products/:id',
    component: ProductDetailsPage, //czy to jest dobrze ?
  }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
