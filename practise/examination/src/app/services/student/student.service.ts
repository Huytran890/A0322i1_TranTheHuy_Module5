import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url: string;
  
  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8080/api/students';
  }

  addNewStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(`${this.url}/create`, student);
  }

  getAllStudent(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.url}/list`)
  };

  deleteById(id: number): Observable<Student> {
    return this.httpClient.delete<Student>(`${this.url}/delete/${id}`);
  }

  findById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.url}/list/` + `${id}`);
  }

  updateById(student: Student, id: number): Observable<Student> {
    return this.httpClient.put<Student>(`${this.url}/update/${id}`, student);
  }

  findByRequirement(value: string): Observable<Student[]> {
    const params = new HttpParams().set('valueReceived', value.trim())
    return this.httpClient.get<Student[]>(`${this.url}/list`, {params});
  }
}
