import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Book} from "../model/book";
import {Observable} from "rxjs";
import {Author} from "../model/author";
import {Language} from "../model/language";
import {Publisher} from "../model/publisher";
import {Catalogue} from "../model/catalogue";

@Injectable({
  providedIn: 'root'
})
export class UntilsService {

  public rousourceUrl = environment.apiUrl;
  public observeType = 'response';

  constructor(protected http: HttpClient) {
  }

  getAuthor(): Observable<HttpResponse<Author[]>> {
    return this.http.get<Author[]>(this.rousourceUrl + 'author/list', {observe: 'response'});
  }

  getLanguage(): Observable<HttpResponse<Language[]>> {
    return this.http.get<Language[]>(this.rousourceUrl + 'language/get', {observe: 'response'});
  }

  getPublisher(): Observable<HttpResponse<Publisher[]>> {
    return this.http.get<Publisher[]>(this.rousourceUrl + 'publisher/get', {observe: 'response'});
  }
  getCatalogue(): Observable<HttpResponse<Catalogue[]>> {
    return this.http.get<Catalogue[]>(this.rousourceUrl + 'catalogue/get', {observe: 'response'});
  }
}
