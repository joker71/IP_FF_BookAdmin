import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";
import {createRequestOption} from "./reques-utils";
import {Book} from "../model/book";
import {environment} from "../../environments/environment";
type EntityResponseType = HttpResponse<Customer>;
type EntityArrayResponseType = HttpResponse<Customer[]>;
@Injectable({
  providedIn: 'root'
})
export class CustomService {

  public rousourceUrl = environment.apiUrl + 'customer/';

  constructor(protected http: HttpClient) { }
  query(req: any): Observable<EntityArrayResponseType>
  {
    const opition = createRequestOption(req);
    return this.http.get<Customer[]>(this.rousourceUrl + 'list', {params: opition, observe: 'response'})
  }
  getInfor(id: number): Observable<EntityResponseType>
  {
    return this.http.get<Customer>(this.rousourceUrl + `infor/${id}`, { observe: 'response'})
  }
}
