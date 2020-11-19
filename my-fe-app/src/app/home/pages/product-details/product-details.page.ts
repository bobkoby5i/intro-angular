import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/api/api.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { map,filter,switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss']
})
export class ProductDetailsPage implements OnInit {

  product: Product | null = null;
  params: any;
  dateFormat = 'yyyy-MM-dd HH:mm:ss';

  product$: Observable<Product>;

  constructor(
    public route: ActivatedRoute,
    public productsService: ProductsService,
    public router: Router,
  ) {
      this.product$ = this.route.params.pipe(
       map(params => parseInt(params.id, 10)),
       filter(id => !!id),
       switchMap(id => this.productsService.getProductById(id)),
      );
  }

  ngOnInit(): void {
  }

  handleDeleteProduct(product: Product)
  {
    console.log('handleDeleteProduct()');
    console.log(product)

    this.productsService.deleteProductById(product.id).subscribe(() => {
      console.log('deleteProductById navigate to .. ');
      this.router.navigate(['..'], {relativeTo: this.route})
    });    
  
  }

  handleEditProduct(product: Product)
  {
    console.log('handleEditProduct()')
    console.log(product)
  
  }

}
