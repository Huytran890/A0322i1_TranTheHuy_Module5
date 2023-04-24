import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Association } from 'src/app/models/Association';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8080/api/associations/list';
  }

  getAllGroup(): Observable<Association[]> {
    return this.httpClient.get<Association[]> (this.url);
  }
}
