import { Injectable } from '@angular/core';
import { Founisseur } from './founisseur';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FounisseurService {
  private apiUrl = 'http://localhost:3000/fournisseur';
  constructor(private http: HttpClient) { }
  
  addFournisseur( founisseur:Founisseur):Observable<Founisseur>
  {
    return this.http.post<Founisseur>(this.apiUrl+'/add-fournisseur',founisseur) as Observable <Founisseur>
  }
  getFournisseur(id:number):Observable<any>{
    return this.http.get(this.apiUrl+"/get-fournisseur/"+JSON.stringify(id)) as Observable<any>
  }
  listFournisseur():Observable<any>{
    return this.http.get(this.apiUrl+"/list-fournisseur") as Observable<any>
 }
 updateFournisseur(id:number,fournisseur:Founisseur):Observable<any>{
  return this.http.patch<any>(this.apiUrl+"/update-fournisseur/"+JSON.stringify(id),fournisseur) as Observable<any>
}
 deleteFournisseur(id:number):Observable<any>{
  return this.http.delete<any>(this.apiUrl+"/delete-fournisseur/"+JSON.stringify(id)) as Observable<any>
}
}
