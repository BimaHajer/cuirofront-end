import { Component, OnInit } from '@angular/core';
import { Buying } from '../buying';
import {FormBuilder } from '@angular/forms';
import { BuyingService } from '../buying.service';


@Component({
  selector: 'app-buying',
  templateUrl: './buying.component.html',
  styleUrls: ['./buying.component.css']
})
export class BuyingComponent implements OnInit {
  buyings:any
  selected: any[] = []; 
  show=false
  selectedBuying:any[]=[]
  idList:any
  list:any
  id: number=0
  openProviderIds: boolean=false;
  constructor(private formBuilder: FormBuilder,private buyingService:BuyingService) {}
  

  ngOnInit(): void {  
    this.getAllBuying()
 
   } 
  getAllBuying(){
    this.buyingService.getBuyingList().subscribe(data=>{
     
      console.log("data",data)
      this.buyings=data[0]

  
    })
  }

  buyingSelect(event:any){ 
    let list = this.selectedBuying.map((x:any)=>x.id )
    this.list=list
    this.id=this.selectedBuying[0].id
   
   }

   updateIsValid(id: number): void {
    const buying = this.selectedBuying.find(r => r.id === id);
    if (buying) {
      this.buyingService.updateBuying(id, { isValid: true }).subscribe(
        (data) => {
          buying.isValid = data.isValid;
          console.log("data",data)
          console.log(" buying.isValid", buying.isValid)
        },
        (error) => {
          console.error('Error updating buying:', error);
        }
      );
    }
  }
  
    
   refresh(event:any)
   {
     this.getAllBuying()
   
   }
   showClick()
   { 
     this.show=true
   }
   close(){
     this.show=false
   }
   save(){
     this.show=false
     this.getAllBuying()
   } 
  

}