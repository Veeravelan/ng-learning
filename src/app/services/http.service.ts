import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url = 'https://fakestoreapi.com/products';
  constructor( private http: HttpClient ) { }
  public getShopingList() {
    return this.http.get(this.url);
  }
}
