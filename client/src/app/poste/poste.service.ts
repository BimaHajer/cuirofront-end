import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poste } from './autth';
@Injectable({
  providedIn: 'root'
})
export class PosteService {
  private apiUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  // Accessoire
  addPoste( poste:Poste):Observable<Poste>
  {
    return this.http.post<Poste>(this.apiUrl+'poste/create-poste',poste) as Observable <Poste>
  }
  
  editPosteById(ID: number, poste: Poste): Observable<Poste> {
    return this.http.patch<Poste>(this.apiUrl+ 'poste/update-poste/'+JSON.stringify(ID), poste);
  }
  
  getAllPostes() :Observable<any>{
    return this.http.get(this.apiUrl+'poste/list-Poste') as Observable<[Poste[],number]>;
  }
  
  
  findPosteById(ID: number):Observable<any>{
    return this.http.get<Poste>(this.apiUrl+ 'poste/poste' + JSON.stringify(ID))
  }
  
  deletePoste( poste:any):Observable<Poste>{
   
    return this.http.post<Poste>(this.apiUrl+'poste/delete-multiple',poste) as Observable <Poste>
  }
  

 
}
