import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getName(id: string): Observable<User> {
    return this.http.get<User>(`${environment.url}/${id}`);
  }
  getUserName(id: string): Observable<User> {
    return this.http.get<User>(`${environment.url}/User/GetById/${id}`);
  }
}
