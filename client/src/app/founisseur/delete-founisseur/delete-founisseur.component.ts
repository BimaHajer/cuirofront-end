import { Component  , Input , OnInit, Output ,EventEmitter } from '@angular/core';
import { FounisseurService } from '../founisseur.service';

@Component({
  selector: 'app-delete-founisseur',
  templateUrl: './delete-founisseur.component.html',
  styleUrls: ['./delete-founisseur.component.css']
})
export class DeleteFounisseurComponent implements OnInit{
  @Input("idDel")
  idDel:number=0
  @Output() close=new EventEmitter()
  @Output() save= new EventEmitter()
  constructor( private fournisseurService:FounisseurService){}
  ngOnInit(): void {
  }
  onDelete(){
    this.fournisseurService.deleteFournisseur(this.idDel).subscribe(data=>{
      this.save.emit(true)
    })
   
  }
  
  closeEvent(){
    this.close.emit(true)
  }
}
