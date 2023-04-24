import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { consignment } from 'src/app/models/consignment';

@Injectable({
  providedIn: 'root'
})
export class ConsignmentService {
  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:3000/consignments';
  }

  getAllConsignment(): Observable<consignment[]> {
    return this.httpClient.get<consignment[]>(`${this.url}`)
  }

  addNewConsignment(consignment: consignment): Observable<consignment> {
    return this.httpClient.post(`${this.url}`, consignment);
  }

  deleteById(id: number): Observable<consignment> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  deleteItems(itemIds: number[]): Observable<any> {
    const ids = itemIds.join(',');
    return this.httpClient.delete<any>(`${this.url}?ids=${ids}`);
  }

  findById(id: number): Observable<consignment> {
    return this.httpClient.get<consignment>(`${this.url}/${id}`);
  }

  updateById(consignment: consignment, id: number): Observable<consignment> {
    return this.httpClient.put<consignment>(`${this.url}/${id}`, consignment);
  }

  findByProductName(productName: string): Observable<consignment[]> {
    return this.httpClient.get<consignment[]>(`${this.url}?product.name_like=`+productName.trim());
  }

  findByEDate(importDateString: Date): Observable<consignment[]> {
    if (importDateString) {
      return this.httpClient.get<consignment[]>(`${this.url}?importDate=${importDateString.toISOString}`);
    } else {
      return this.httpClient.get<consignment[]>(`${this.url}`);
    }
  }

  findByDate(importDate: Date, exportDate: Date): Observable<consignment[]> {
    if(importDate && exportDate) {
      return this.httpClient.get<consignment[]>(`${this.url}?importDate_gte=${importDate.toISOString()}&exportDate_lte=${exportDate.toISOString()}`);
    } else if(importDate) {
      return this.httpClient.get<consignment[]>(`${this.url}?importDate_gte=${importDate.toISOString()}`);
    } else if(exportDate) {
      return this.httpClient.get<consignment[]>(`${this.url}?exportDate_lte=${exportDate.toISOString()}`);
    } else {
      return this.httpClient.get<consignment[]>(`${this.url}`);
    }

  };
}
