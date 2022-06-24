import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Customer} from "../model/customer";
import {Cart} from "../model/cart";
import {Cartline} from "../model/cartline";
import {Observable} from "rxjs";
import {createRequestOption} from "./reques-utils";
import {environment} from "../../environments/environment";
type EntityResponseType = HttpResponse<Cart>;
type EntityArrayResponseType = HttpResponse<Cart[]>;
type EntityResponseTypeLine = HttpResponse<Cartline>;
type EntityArrayResponseTypeLine = HttpResponse<Cartline[]>;
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public rousourceUrl = environment.apiUrl + 'order/';

  constructor(protected http: HttpClient) { }

  query(req: any): Observable<EntityArrayResponseType>
  {
    const opition = createRequestOption(req);
    return this.http.get<Cart[]>(this.rousourceUrl + 'get', {params: opition, observe: 'response'})
  }
  queryOrderLine(id: number): Observable<EntityArrayResponseTypeLine>
  {
    return this.http.get<Cartline[]>(this.rousourceUrl + `line/${id}`, { observe: 'response'})
  }
  queryCustomerOrder(req: any, id: number): Observable<EntityArrayResponseType>
  {
    const opition = createRequestOption(req);
    return this.http.get<Cart[]>(this.rousourceUrl + `get/${id}`, {params: opition, observe: 'response'})
  }
  cartDetails(id: number): Observable<EntityResponseType>{
    return this.http.get<Cart>(this.rousourceUrl + `detail/${id}`, { observe: 'response'})
  }


}
