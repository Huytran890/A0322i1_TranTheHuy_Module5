import { product } from './../../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: 'http://localhost:3000/products';
  constructor(private httpClient: HttpClient) { }

  getAllProduct(): Observable<product[]> {
    return this.httpClient.get<product[]> (this.url);
  } 
}
