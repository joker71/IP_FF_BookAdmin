import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Book} from "../model/book";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {createRequestOption} from "./reques-utils";
import {Stock} from "../model/stock";

type EntityResponseType = HttpResponse<Book>;
type EntityResponseTypeStock = HttpResponse<Stock>;
type EntityArrayResponseType = HttpResponse<Book[]>;
type EntityArrayResponseTypeStock = HttpResponse<Stock[]>;
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  public rousourceUrl = environment.apiUrl + 'book/';
  public observeType = 'response';

  constructor(protected http: HttpClient) {
  }

  create(book: Book): Observable<EntityResponseType> {
    return this.http.post<Book>(this.rousourceUrl + 'post', book, {observe: 'response'});
  }

  query(req: any): Observable<EntityArrayResponseType>
  {
    const opition = createRequestOption(req);
    return this.http.get<Book[]>(this.rousourceUrl + 'get', {params: opition, observe: 'response'})
  }
  queryByCatalogue(req: any, id: number): Observable<EntityArrayResponseType>
  {
    const opition = createRequestOption(req);
    return this.http.get<Book[]>(this.rousourceUrl + `get/catalogue/${id}`, {params: opition, observe: 'response'})
  }

  update(group: Book): Observable<EntityResponseType> {
    return this.http.put<Book>(this.rousourceUrl + 'put', group, {observe: 'response'});
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<Book>(`${this.rousourceUrl}get/${id}`, {observe: 'response'});
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.rousourceUrl}/delete/${id}`, {observe: 'response'});
  }

  getStock(req: any): Observable<EntityArrayResponseTypeStock> {
    const opition = createRequestOption(req);
    return this.http.get<Stock[]>(this.rousourceUrl + 'stock', {observe: 'response'});
  }
}
