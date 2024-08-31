import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  @Input("TransporteurId")
  UserId:number=0
  @Output()
  close=new EventEmitter()
  @Output()
  save=new EventEmitter()
TransporteurId: any;
  closeAction(){
    this.close.emit(true)
  }
  saveAction(){
    this.close.emit(true)
    this.save.emit("deleted")

}
}