import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buying } from './buying';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuyingService {

  constructor(private http:HttpClient) { }
    addBuying(buying:Buying):Observable<Buying>
    {
      return this.http.post<Buying>(environment.api+'/buying/create-buying',buying) as Observable <Buying>
    }
    getBuying(id:number):Observable<any>{
      return this.http.get(environment.api+"/buying/get-buying/"+JSON.stringify(id)) as Observable<any>
    }
    getBuyingList():Observable<any>{
      return this.http.get(environment.api+"/buying/list-buying") as Observable<any>
    }
    updateBuying(id:number,updatedBuying:any):Observable<any>{
      return this.http.patch<any>(environment.api+"/buying/update-buying/"+JSON.stringify(id),updatedBuying) as Observable<any>
    }
    deleteBuying(ListDelete:any):Observable<Buying>
    {
      return this.http.post<any>(environment.api+'/buying/delete-multiple',ListDelete) as Observable <Buying>
    }
  }

