import { Component, OnInit } from '@angular/core';
import {  FormBuilder } from '@angular/forms';
import { EmployerService } from '../employer.service';

import { Employer } from '../model';


@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent  implements OnInit {

  data: any;
  number: any; 
  selected: any[] = []; 
  selectedEmployer:Employer[]=[]
  list:any
  show=false
  id: number | undefined;

  constructor(private formBuilder: FormBuilder,private employerservice:EmployerService) {
 
     
  } 
  ngOnInit(): void {
   this.getAllEmployes()
  } 
  getAllEmployes(){
  this.employerservice.getAllEmployers().subscribe(data=>{
    console.log('data',data)
    this.data=data[0]
    this.number=data[1]

  })  
}
employerSelect(event:any){

 let list = this.selectedEmployer.map(x=>x.id )
 this.list=list
 this.id=this.selectedEmployer[0].id
}
 
refresh(event:any)
{
  this.getAllEmployes()
  console.log("refresh",event)
}
 
  
  showClick()
  {
    this.show=true
  }
  close(){
    this.show=false
    this.getAllEmployes()
  }
  save(){
    this.show=false
    this.getAllEmployes()
  } 
  
}
