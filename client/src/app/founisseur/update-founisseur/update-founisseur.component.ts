import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { FounisseurService } from '../founisseur.service';

@Component({
  selector: 'app-update-founisseur',
  templateUrl: './update-founisseur.component.html',
  styleUrls: ['./update-founisseur.component.css']
})
export class UpdateFounisseurComponent implements OnInit {
  form: FormGroup;
  name: any;
  open: boolean = true;
  show: boolean = false;
  message: string = "";
  showError: boolean = false;
  id: number = 0;

  constructor(
    private activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private fournisseurService: FounisseurService
  ) {
    // Initialize the form here
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      tel: [''],
      description: [''],
      picture: ['']
    });
  }

  ngOnInit(): void {
    this.show=false;
    this.activateRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getProviderById(this.id)
    });
   
  }
  getProviderById(id:number){
    this.fournisseurService.getFournisseur(id).subscribe(data=>{
      this.form.get('name')?.setValue(data.name);      
      this.form.get('tel')?.setValue(data.tel);
      this.form.get('description')?.setValue(data.description);

      
      
    })
  } 
   
  closeAction(){
    this.show=false
  }
  submit(){ 
    this.id
console.log("fournisseur",this.form.value)
    this.fournisseurService.updateFournisseur(this.id,this.form.value).subscribe(
      data=>{
this.name= this.form.value['name']
this.show=true  
      }
    )  }
}
