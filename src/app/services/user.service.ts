import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlApi = "https://jsonplaceholder.typicode.com/users/";

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.urlApi);
  }
  getUserById(id:number): Observable<User> {
    return this.http.get<User>(this.urlApi + id);
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.urlApi, user)
  }
  uptadeUser(user: User): Observable<User> {
    return this.http.put<User>(this.urlApi+ user.id, user)
  }
  removeUser(id:number | undefined): Observable<User> {
    return this.http.delete<User>(this.urlApi+id)
  }

}
