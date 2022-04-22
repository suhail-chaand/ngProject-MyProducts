import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private dbURL: string = 'http://localhost:3000/products'

  fetchProducts(): Observable<product[]> {
    return this.http.get<product[]>(this.dbURL)
  }

  postProduct(newProduct: product) {
    return this.http.post<product>(this.dbURL, newProduct)
  }
}