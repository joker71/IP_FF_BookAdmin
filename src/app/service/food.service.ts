import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MFood } from '../model/food';
import {createRequestOption} from '../utils/utils';


type EntityResponseType = HttpResponse<MFood>;
type EntityArrayResponseType = HttpResponse<MFood[]>;
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  resourceUrl= "http://localhost:3000/food"
  constructor(protected http: HttpClient) { }
  create(food: MFood): Observable<HttpResponse<MFood>>{
    return this.http.post<MFood>(this.resourceUrl , food, {observe: 'response'});
  }
  update(food: MFood) : Observable<HttpResponse<MFood>> {
    return this.http.put<MFood>(this.resourceUrl, food, {observe: 'response'});
  }
  find(id: number) : Observable<HttpResponse<MFood>>
  {
    return this.http.get<MFood>(`${this.resourceUrl}/${id}`, {observe: 'response'});
  }
  delete(id: number): Observable<HttpResponse<MFood>>
  {
    return this.http.delete(`${this.resourceUrl}/${id}`, {observe: 'response'});
  }
  query(): Observable<MFood>
  {
    return this.http.get<MFood>("http://localhost:3000/food");
  }
  query2(req?: any): Observable<EntityArrayResponseType>
  {
    const options = createRequestOption(req);
    return this.http.get<MFood[]>(this.resourceUrl, { params: options, observe: 'response' });
  }
}
