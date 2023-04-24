import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instructor } from 'src/app/models/Instructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8080/api/instructors/list';
  }

  getAllInstructor(): Observable<Instructor[]> {
    return this.httpClient.get<Instructor[]> (this.url);
  }
}
