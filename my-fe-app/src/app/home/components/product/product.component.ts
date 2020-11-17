import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input()
  label = "ContactLabel"

  constructor() { }

  ngOnInit(): void {
  }

}
