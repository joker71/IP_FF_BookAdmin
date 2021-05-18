import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MFoodCategory} from '../model/foodcategory'

@Injectable({
  providedIn: 'root'
})
export class FoodcategoryService {

  resourceUrl= "http://localhost:8080/api"
  constructor(protected http: HttpClient) { }
  query(): Observable<MFoodCategory>
  {
    return this.http.get<MFoodCategory>("http://localhost:8080/api/category");
  }
}
