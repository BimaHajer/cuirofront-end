import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BuyingService } from '../buying.service';


@Component({
  selector: 'app-buying-delete',
  templateUrl: './buying-delete.component.html',
  styleUrls: ['./buying-delete.component.css']
})
export class BuyingDeleteComponent implements OnInit{
  @Input("ListDelete") 
  ListDelete:any
  @Output() closed= new EventEmitter()
  @Output() saved= new EventEmitter()
  constructor( private buyingService:BuyingService){}
  ngOnInit(): void {  
  } 
 
  actionClose()
  {this.closed.emit(true) }
  deleteConfirm(){
    console.log("list to delete:",this.ListDelete)
    this.buyingService.deleteBuying(this.ListDelete).subscribe(data=>{
      console.log("Delete:",this.ListDelete)
      this.saved.emit(true)
    })}
   

}
