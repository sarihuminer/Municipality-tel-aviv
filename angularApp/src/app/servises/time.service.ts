import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyLocation } from '../models/MyLocation.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private http: HttpClient) { }

  getLocation(): Observable<any> {
    debugger;
    return this.http.get<any>("http://api.open-notify.org/iss-now.json");
  }
}
