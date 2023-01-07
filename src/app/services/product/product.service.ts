import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = '/api/products';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}`);
  }

  getProductById(product_id: number): Observable<Product>{
    return this.http.get<Product>(`${this.url}/${product_id}`);
  }

  getProductsByProvider(provider_id: number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}/provider/${provider_id}`);
  }

  getProductsBycategory(category_id: number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}/category/$${category_id}`);
  }

  getProductsOutOfStock(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}/outOfStock`);
  }

  saveProduct(product : Product): Observable<Product>{
    return this.http.post<Product>(`${this.url}/save`, product);
  }

  // may change
  updateProduct(product : Product): Observable<Product>{
    return this.http.post<Product>(`${this.url}/update`, product);
  }
}
