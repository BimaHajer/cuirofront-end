import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PosteService } from '../poste.service';
import { Poste } from '../autth';


@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css']
})
export class PosteComponent implements OnInit {
  poste: any;

  data: any;
  number: any; 
  selected: any[] = []; 
  selectedPoste:Poste[]=[]
  list:any
  show=false
  id: number | undefined;


  constructor(private formBuilder: FormBuilder,private PosteService:PosteService) {
 
     
  } 
  ngOnInit(): void {
   this.getAllPostes()
  } 
  getAllPostes(){
  this.PosteService.getAllPostes().subscribe((data: any[])=>{
    console.log('data',data)
    this.data=data[0]
    this.number=data[1]

  })  
}
posteSelect(event:any){

 let list = this.selectedPoste.map(x=>x.id )
 this.list=list
 this.id=this.selectedPoste[0].id
}
 
refresh(event:any)
{
  this.getAllPostes()
  console.log("refresh",event)
}
 
  
  showClick()
  {
    this.show=true
  }
  close(){
    this.show=false
    this.getAllPostes()
  }
  save(){
    this.show=false
    this.getAllPostes()
  } 
}