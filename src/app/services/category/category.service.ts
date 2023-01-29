import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Category } from '@models/category';
import { CategoryByLang } from '@models/categoryByLang';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = '/api/categories';

  constructor(private http: HttpClient) { }

  getAllcategories(): Observable<CategoryByLang[]>{
    return this.http.get<CategoryByLang[]>(`${this.url}`);
  }

  getCategoryById(category_id: number): Observable<CategoryByLang[]>{
    return this.http.get<CategoryByLang[]>(`${this.url}/${category_id}`);
  }

  addCategory(category: Category): Observable<Category>{
    return this.http.post<Category>(`${this.url}/save`, category);
  }

}
