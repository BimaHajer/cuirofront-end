import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http:HttpClient) { }
  getContactList():Observable<any>{
    return this.http.get(environment.api+"/contact/list-contact") as Observable<any>
  }
  updateContact(id:number,updateContact:any):Observable<any>{
    return this.http.patch(environment.api+"/contact/update-contact/"+JSON.stringify(id),updateContact) as Observable<any>
  }
}
