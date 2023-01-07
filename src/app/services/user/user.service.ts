import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = '/api/users';

  constructor(private http : HttpClient) { }

  // getUser() method
  getUser(user_id: number): Observable<User>{
    return this.http.get<User>(`${this.url}/${user_id}`);
  }

}
