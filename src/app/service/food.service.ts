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

  resourceUrl= "http://localhost:8080/api"
  constructor(protected http: HttpClient) { }
  create(food: MFood): Observable<HttpResponse<MFood>>{
    return this.http.post<MFood>(this.resourceUrl + "/add-food", food, {observe: 'response'});
  }
  update(food: MFood) : Observable<HttpResponse<MFood>> {
    return this.http.put<MFood>(this.resourceUrl+"/put-food", food, {observe: 'response'});
  }
  find(id: number) : Observable<HttpResponse<MFood>>
  {
    return this.http.get<MFood>(`${this.resourceUrl}/get-food/${id}`, {observe: 'response'});
  }
  delete(id: number): Observable<HttpResponse<MFood>>
  {
    return this.http.delete(`${this.resourceUrl}/delete-food/${id}`, {observe: 'response'});
  }
  query(): Observable<MFood>
  {
    return this.http.get<MFood>("http://localhost:8080/api/get-food");
  }
  query2(): Observable<EntityArrayResponseType>
  {
    // const options= createRequestOption(req);
    console.log (this.http.get<MFood[]>("http://localhost:8080/api/get-food", {  observe: 'response' }));
    return this.http.get<MFood[]>("http://localhost:8080/api/get-food", {  observe: 'response' });

  }
}
