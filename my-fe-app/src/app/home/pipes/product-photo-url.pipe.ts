import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/api/api.model';

@Pipe({
  name: 'productPhotoUrl'
})
export class ProductPhotoUrlPipe implements PipeTransform {

  transform(value: Product, ...args: unknown[]): unknown {
    return `https://randomuser.me/api/portraits/men/${value.id}.jpg`;
  }

}
