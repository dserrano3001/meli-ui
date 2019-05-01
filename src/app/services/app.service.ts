import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import { DataResponse } from '../models/data';
import { Items } from '../models/items';
import { Item } from '../models/item';
import { DetailItem } from '../models/detailItem';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private URL_ITEMS = `${environment.urlApi}items`;

  constructor(private http: HttpClient) { }

  public getItems(query: string = ''): Observable<DataResponse<Items>> {
    return this.http.get<DataResponse<Items>>(`${this.URL_ITEMS}?q=${query}`);
  }

  public getItemById(id: string): Observable<DataResponse<DetailItem>> {
    return this.http.get <DataResponse<DetailItem>>(`${this.URL_ITEMS}/${id}`);
  }

}
