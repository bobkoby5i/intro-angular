import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/api/api.model';
import { ProductsService } from '../../services/products.service';
import { Subscription } from 'rxjs';

@Component({
  // selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})

export class ProductsPage implements OnInit {

  // products = [
  //   {id:1, sku:'10001001', name: 'Keyboard', price:"100"},
  //   {id:2, sku:'10001002', name: 'Mouse', price:"350"},
  //   {id:3, sku:'10001003', name: 'Monitor', price:"400"},
  // ];

  products: Product[] = [];
  sub = new Subscription();

  selectedId: number | null = null;
  selectedName: string | null = null;
  selectedPrice: number | null = null;

  constructor(private productsService: ProductsService,) { }

  ngOnInit(): void {
    console.log('INIT Contact Page')
    const s = this.productsService.getProducts().subscribe(products => this.products = products);
    this.sub.add(s);
  }

  ngOnDestroy() {
    console.log('DESTROY Products Page; going HOME ?')
    this.sub.unsubscribe();
  }

  handleProductMouseOver(product: Product) {
    this.selectedId    = product.id;
    this.selectedName  = product.name;
    this.selectedPrice = product.price;
  }

  handleDeleteProduct(product: Product)
  {
    console.log('Products page: handleDeleteProduct()');
    this.products  = this.products.filter(c => c !== product);
  }

  handleEditProduct(product: Product) {
    console.log('Products page: handleEditProduct()');
    this.products.push({...product});
  }

}
