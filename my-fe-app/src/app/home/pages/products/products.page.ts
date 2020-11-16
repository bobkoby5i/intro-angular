import { Component, OnInit } from '@angular/core';

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
  
  constructor() { }

  ngOnInit(): void {
  }

}
