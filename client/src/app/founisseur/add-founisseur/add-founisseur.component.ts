import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FounisseurService } from '../founisseur.service';
import { Founisseur } from '../founisseur';
import { ContactService } from 'src/app/contact/contact.service';

@Component({
  selector: 'app-add-founisseur',
  templateUrl: './add-founisseur.component.html',
  styleUrls: ['./add-founisseur.component.css']
})
export class AddFounisseurComponent implements OnInit {
  fournisseurForm: FormGroup;
  name:any;
  disabled: boolean=false;
  fournisseur:Founisseur=new Founisseur;
  show: boolean=false;
  message: string="";
  showError: boolean=false;
  contacts: any;
  contact: any;
  contactF:any=[];
  constructor(private fb: FormBuilder , private fournisseurService:FounisseurService,private contactService:ContactService) {
    this.fournisseurForm = this.fb.group({
      name: ['', Validators.required],
      tel: [''],
      description: ['']
    });
  }
  ngOnInit(): void {
      this.listContact()
  }
listContact(){
  this.contactService.getContactList().subscribe(data=>{
    console.log("list",data[0])
    this.contacts=data[0]
  })
}
openChange(open: any) {
  console.log(open)
  this.contact= open .model
  this.contactF.push( this.contact)
  console.log(this.contactF)

}

  submit() {
    console.log('reactive form submit', this.fournisseurForm.value);
    let founisseur: Founisseur= new Founisseur()
    founisseur.name=this.fournisseurForm.value.name
    founisseur.tel=this.fournisseurForm.value.tel
    founisseur.description=this.fournisseurForm.value.description
  founisseur.contacts=this.contactF
     console.log('fournisseur',founisseur)
     this.fournisseurService.addFournisseur(founisseur).subscribe(data=>{
      this.show=true
      this.message=" votre user "+founisseur.name+" a étè crée avec success"
  for (let i = 0; i < (this.contactF).length ;i++) {
  this.contactF[i].providerId=data
  this.contactService.updateContact(this.contactF[i].id,this.contactF[i]).subscribe(data=>{
    console.log("data contact",data)
  })
  }
     },error=>{
       this.showError=true
      this.message="creation échoué"
     })
    }
    reset(){
      this.disabled=false;
      this.fournisseur= new Founisseur()
      this.fournisseurForm.reset()
      this.show=false 
    }
}

