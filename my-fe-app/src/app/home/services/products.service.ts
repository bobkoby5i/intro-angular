import { Injectable } from '@angular/core';
import { Product } from 'src/app/api/api.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[]=[];
  selectedName: string | null = null;
  base: string | null = "http://koby5i-spring-boot-intro-wh.herokuapp.com/api";

  constructor(private http: HttpClient,
    //@Inject(API_BASE_URL) private base:string,
    ) {
      console.log('ProductsService Constructor bas=' + this.base);
      this.base = 'http://koby5i-spring-boot-intro-wh.herokuapp.com/api';
      //this.base = "http://localhost:8080/api";
     }


  getProducts(): Observable<Product[]>  {
    console.log('INIT Contact Page')
    return this.http.get<Product[]>(this.base+'/items')
  }  

  getProductById(id:number): Observable<Product> {
    return this.http.get<Product>(this.base+'/items/'+id)
    }  
}
