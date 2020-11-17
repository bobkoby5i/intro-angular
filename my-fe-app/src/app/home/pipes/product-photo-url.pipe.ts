import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productPhotoUrl'
})
export class ProductPhotoUrlPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
