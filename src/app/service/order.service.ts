import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MOrder } from '../model/order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  resourceUrl= "http://localhost:8080/api"
  constructor(protected http: HttpClient)  { }
  query(): Observable<MOrder>
  {
    return this.http.get<MOrder>("http://localhost:8080/api/order");
  }
  
}
