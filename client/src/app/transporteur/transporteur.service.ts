import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransporteurService {
  [x: string]: any;
  urlAPI='http://localhost:3000'

  constructor(private http: HttpClient) { }
createTrasporteur(transporteur:any): Observable<any>{
  return this.http.post<any>(this.urlAPI+'/transporteur/add-transporteur',transporteur) as Observable<any>
}
getAllTrasporteurs(): Observable<any> {
return this.http.get(this.urlAPI+'/transporteur/list-transporteur') as Observable<any>
}
 getTrasporteurById(id:number):Observable<any>{
  return this.http.get(this.urlAPI+'/transporteur/transporteur:id'+JSON.stringify(id)) as Observable<any>
 }
UpdateTrasporteur(id:number,transporteur:any): Observable<any>{
  return this.http.patch<any>(this.urlAPI+'/transporteur/update-transporteur:id'+JSON.stringify(id),transporteur) as Observable<any>
}
deleteTrasporteur(id:number): Observable<any>{
  return this.http.delete(this.urlAPI+'/transporteur/delete-transporteur:id'+JSON.stringify(id)) as Observable<any>
 }
}
