import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Poste } from '../../autth';
import { ActivatedRoute, Params } from '@angular/router';
import { PosteService } from '../../poste.service';

@Component({
  selector: 'app-update-poste',
  templateUrl: './update-poste.component.html',
  styleUrls: ['./update-poste.component.css']
})
export class UpdatePosteComponent implements OnInit{
  poste=new Poste()
  posteForm: FormGroup;
  filename: string='';
  filesize: number=0;
  tailleInvalid: boolean=false;
  private _handleReaderLoaded: any; 
  error: any; 
  show: boolean=false;
  showError: boolean=false;
  message: any;
  name:any
 disabled: boolean=false;
 id: number=0;
 
title: any;
  isLieuDisabled: any;
  isSalaryDisabled: any;
  isExigencesDisabled: any;
  isEmploymentTypeDisabled: any;
 constructor(private formBuilder: FormBuilder, private posteservice: PosteService, private route:ActivatedRoute) { 
  this.posteForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    salary: [{ value:''  ,disabled: this.isSalaryDisabled},Validators.required],
    lieu:[{ value:''  ,disabled: this.isLieuDisabled}, Validators.required],
    // exigences:[{ value:''  ,disabled: this.isExigencesDisabled}],
    employmentType: [{ value:''  ,disabled: this.isEmploymentTypeDisabled}, Validators.required],
   
  })
   
  }
  
  ngOnInit(): void {
    this.show=false;
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getPosteById(this.id)
    });
   
  }
  getPosteById(id:number){
    this.posteservice.findPosteById(id).subscribe(data=>{
      this.posteForm.get('description')?.setValue(data.firstName);
      this.posteForm.get('salary')?.setValue(data.lastName);
      this.posteForm.get('lieu')?.setValue(data.role); 
      
    })
  } 
   
  closeAction(){
    this.show=false
  }
  submit(){ 
    this.id
console.log("poste",this.posteForm.value)
this.posteservice.editPosteById(this.id,this.posteForm.value).subscribe(
  data=>{
this.title= this.posteForm.value['title']
this.show=true  
  }
)  }


}
