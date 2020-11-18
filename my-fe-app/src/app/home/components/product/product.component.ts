import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/api/api.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  label = 'Product name';

   @Input()
   product: Product | null = null;

   currentDate = new Date();
   dateFormat = 'y';

  constructor() { }

  ngOnInit(): void {
  }

}
