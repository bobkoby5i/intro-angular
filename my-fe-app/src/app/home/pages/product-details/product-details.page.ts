import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/api/api.model';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { map,filter,switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss']
})
export class ProductDetailsPage implements OnInit {

  product: Product | null = null
  params: any;

  product$: Observable<Product>;

  constructor(public route:ActivatedRoute,
    public productsService: ProductsService) {
      this.product$ = this.route.params.pipe(
       map(params => parseInt(params.id,10)),
       filter(id => !!id),
       switchMap(id => this.productsService.getProductById(id)),
      )
   }

  ngOnInit(): void {
  }

  handleDeleteProduct(product: Product)
  {
    console.log('handleDeleteProduct()')
    console.log(product)
  
  }

  handleEditProduct(product: Product)
  {
    console.log('handleEditProduct()')
    console.log(product)
  
  }

}
