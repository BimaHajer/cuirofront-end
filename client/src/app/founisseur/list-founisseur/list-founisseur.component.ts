import { Component, OnInit } from '@angular/core';
import { FounisseurService } from '../founisseur.service';

@Component({
  selector: 'app-list-founisseur',
  templateUrl: './list-founisseur.component.html',
  styleUrls: ['./list-founisseur.component.css']
})
export class ListFounisseurComponent implements OnInit{
  show:boolean=false
  idList:number=0
  fournisseurs:any
  selectedProvider: any=[];
  list: any;
  id: number=0;
  constructor(private fournisseurService:FounisseurService){}
  ngOnInit(): void {
    this.getListFournisseur()
  }
  getListFournisseur(){
    this.fournisseurService.listFournisseur().subscribe(data => 
      { console.log("data",data)
        this.fournisseurs=data[0]})
  }

  userSelect(event:any){

    let list = this.selectedProvider.map((x:any)=>x.id )
    this.list=list
    this.id=this.selectedProvider[0].id
   }


  onDelete(id:number){
    this.idList=id
    this.show=true
  }
  showClick()
{
  this.show=true
}
  onClose(){
    this.show=false
  }
  onSave(){
    this.show=false
    this.getListFournisseur()
  }

}
