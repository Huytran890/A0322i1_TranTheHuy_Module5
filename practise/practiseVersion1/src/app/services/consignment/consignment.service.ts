import { consignment } from './../../models/consignment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsignmentService {
  url: string = 'http://localhost:3000/consignments';
  
  constructor(private httpClient: HttpClient) { }

  getAllConsignment(): Observable<consignment[]> {
    return this.httpClient.get<consignment[]>(this.url)
  }

  addNewConsignment(consignment: consignment): Observable<consignment> {
    return this.httpClient.post(this.url, consignment);
  }

  deleteById(id: number): Observable<consignment> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  findById(id: number): Observable<consignment> {
    return this.httpClient.get<consignment>(`${this.url}/${id}`);
  }

  updateById(consignment: consignment): Observable<consignment> {
    return this.httpClient.put<consignment>(`${this.url}/${consignment.id}`, consignment);
  }

  findByProductName(productName: string): Observable<consignment[]> {
    return this.httpClient.get<consignment[]>(`${this.url}?product.name_like=${productName}`)
  }

}
