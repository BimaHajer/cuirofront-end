import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  addComponent(value: any) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:3000/';  

  constructor(private http: HttpClient) { }

 
  addEmployer(employer: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}employe/create-employer`, employer);
  }

 
  editEmployerById(ID: number, employer: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}employer/${JSON.stringify(ID)}`, employer);
  }

 
  getAllEmployers(): Observable<any> {
    return this.http.get(`${this.apiUrl}employe/list-employer`) as Observable<[any[], number]>;
  }

  
  findEmployerById(ID: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}employer/${JSON.stringify(ID)}`);
  }

 
  deleteEmployer(units: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}employer/delete-employer/`, units);
  }
}
