import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from '@models/image';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private url = '/api/images';

  constructor(private http: HttpClient) { }

  getImagesByProduct(product_id: number): Observable<Image[]>{
    return this.http.get<Image[]>(`${this.url}/product/${product_id}`);
  }
}
