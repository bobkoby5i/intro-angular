import { Injectable } from '@angular/core';
import { Product } from 'src/app/api/api.model';
import { HttpClient } from '@angular/common/http';
import { startWith, switchMap, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [];
  selectedName: string | null = null;
  reload$ = new Subject();
  base: string | null = 'https://koby5i-spring-boot-intro-wh.herokuapp.com/api';
  //base: string | null = 'http://localhost:8080/api';

  constructor(private http: HttpClient,
    //@Inject(API_BASE_URL) private base:string,
  ) {
      console.log('ProductsService Constructor base = ' + this.base);
  }


  getProducts(): Observable<Product[]>  {
    console.log('INIT Contact Page. get products')
    return this.http.get<Product[]>(this.base + '/items');
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.base + '/items/' + id);
  }

  deleteProductById(id: number): Observable<void> {
    return this.http.delete<void>(this.base + '/items/' + id).pipe(
      tap(() => this.reload$.next())
    );
  }

  createProduct(product: Partial<Product>): Observable<Product> {
    return this.http.post<Product>(this.base + '/items/create', product).pipe(
      tap(() => this.reload$.next())
    );
  }
}
