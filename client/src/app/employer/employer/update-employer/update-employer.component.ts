import { Component } from '@angular/core';
import { Employer } from '../../model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployerService } from '../../employer.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-employer',
  templateUrl: './update-employer.component.html',
  styleUrls: ['./update-employer.component.css']
})
export class UpdateEmployerComponent {
  Form: FormGroup | undefined;
  user=new Employer()
  userme: string='';
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
 isEmailDisabled = true;
 isTelephoneDisabled = true;
 isPasswordDisabled=true;
 isPicturDisabled=true;
  employerForm: any;
 constructor(private formBuilder: FormBuilder, private EmployerService :EmployerService, private route:ActivatedRoute) { 
  this.employerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: [{ value:''  ,disabled: this.isEmailDisabled},[Validators.required, Validators.email]],
    telephone:[{ value:''  ,disabled: this.isTelephoneDisabled}, Validators.required],
    picture:[{ value:''  ,disabled: this.isPicturDisabled}],
    password: [{ value:''  ,disabled: this.isPasswordDisabled}, [Validators.required, Validators.minLength(6)]],
    confirmPassword: [{ value:''  ,disabled: this.isPasswordDisabled}, Validators.required],
    role:['',Validators.required],
  })
   {
    validator: this.passwordMatchValidator
  }  
     
  }
  passwordMatchValidator(group: FormGroup) {
    
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
  ngOnInit(): void {
    this.show=false;
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getUserById(this.id)
    });
   
  }
  getUserById(id:number){
    this.EmployerService.findEmployerById(id).subscribe(data=>{
      this.employerForm.get('firstName')?.setValue(data.firstName);
      this.employerForm.get('lastName')?.setValue(data.lastName);
      this.employerForm.get('role')?.setValue(data.role); 
      
    })
  } 
   
  closeAction(){
    this.show=false
  }
  submit(){ 
    this.id
console.log("user",this.employerForm.value)
this.EmployerService.editEmployerById(this.id,this.employerForm.value).subscribe(
  data=>{
this.name= this.employerForm.value['name']
this.show=true  
  }
)  }

}
