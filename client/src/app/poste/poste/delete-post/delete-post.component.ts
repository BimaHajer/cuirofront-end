import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PosteService } from '../../poste.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {
  constructor(private posteservice:PosteService) { }
  @Input() 
  listPoste:any
  @Output()
  closed= new EventEmitter<boolean>()
  @Output() saved= new EventEmitter<boolean>()
  ngOnInit(): void {
    
  }
  actionClose()
  {this.closed.emit(true) }
  deleteConfirm(){
    console.log("this.listPoste",this.listPoste)
    this.posteservice.deletePoste(this.listPoste
    ).subscribe(
      res => {
        console.log("deleteCategory",res)
        this.saved.emit(true);
      }   

    ); 
}
} 
 
