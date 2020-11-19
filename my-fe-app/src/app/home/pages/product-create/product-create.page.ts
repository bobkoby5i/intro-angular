import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/api/api.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.page.html',
  styleUrls: ['./product-create.page.scss']
})
export class ProductCreatePage implements OnInit {

  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onCreate() {
    const product: Partial<Product> = {
        name: 'Angular Name',
        description: 'Angular description',
        qty:  10,
        price: 9.99,
    }
    this.productsService.createProduct(product).subscribe((product: Product) => {
      console.log('deleteProductById' );
      console.log('deleteProductById: navigate to products/' + product.id );
      this.router.navigate(['products', product.id])
    });
  }

}
