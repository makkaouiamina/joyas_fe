import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provider } from '@models/provider';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private url = '/api/providers';

  constructor(private http : HttpClient) { }

  getAllProviders(): Observable<Provider[]>{
    return this.http.get<Provider[]>(`${this.url}`);
  }

  getProviderById(provider_id: number): Observable<Provider>{
    return this.http.get<Provider>(`${this.url}/${provider_id}`);
  }
}
