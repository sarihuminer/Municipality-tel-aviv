import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyLocation } from '../models/MyLocation.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private http: HttpClient) { }

  getLocation(): Observable<any> {
    return this.http.get<any>("http://api.open-notify.org/iss-now.json");
  }
  saveLocation(locations: MyLocation[]): Observable<boolean> {
    debugger
    return this.http.post<boolean>(`${environment.api}/Location`, locations);
  }
}
