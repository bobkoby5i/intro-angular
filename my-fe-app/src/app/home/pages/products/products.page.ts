import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/api/api.model';

@Component({
  //selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit {

  products = [
    {id:1, sku:'10001001', name: 'Keyboard', price:"100"},
    {id:2, sku:'10001002', name: 'Mouse', price:"350"},
    {id:3, sku:'10001003', name: 'Monitor', price:"400"},
  ];

  selectedId: number | null = null;
  selectedName: string | null = null;
  selectedPrice: number | null = null;
  
  constructor() { }

  ngOnInit(): void {
    console.log('INIT Contact Page')
  }
  ngOnDestroy(){
    console.log('DESTROY Contact Page')
  }  
  handleProductMouseOver(product: Product){
    this.selectedId = product.id
    this.selectedName = product.name
    this.selectedPrice = product.price
    //this.contacts.push(contact)
  }

}
