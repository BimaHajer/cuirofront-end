import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployerService } from '../../employer.service';
import { Employer } from '../../model';

@Component({
  selector: 'app-add-employer',
  templateUrl: './add-employer.component.html',
  styleUrls: ['./add-employer.component.css']
})
export class AddEmployerComponent {
  employer = new Employer();
  employerForm: FormGroup;  // Renommé ici
  filename: string = '';
  filesize: number = 0;
  tailleInvalid: boolean = false;
  private _handleReaderLoaded: any; 
  error: any;
  show: boolean = false;
  showError: boolean = false;
  message: any; 
  name: any;
  disabled: boolean = false;

  constructor(private formBuilder: FormBuilder, private employerService: EmployerService) { 
    this.employerForm = this.formBuilder.group({  // Renommé ici
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      // picture: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    console.log("password", password);
    return password === confirmPassword ? null : { mismatch: true };
  }

  ngOnInit(): void {
    this.show = false;
  }

  closeAction() {
    this.show = false;
  }

  submit() { 
    console.log("pawordvalid", this.passwordMatchValidator);
    console.log('firstname', this.employer.firstName = String(this.employerForm.get('firstName')?.value));  // Renommé ici
    console.log('email', this.employer.email = String(this.employerForm.get('email')?.value));  // Renommé ici
    console.log('password', this.employer.password = String(this.employerForm.get('password')?.value));  // Renommé ici
    console.log('confirmPassword', this.employer.password = String(this.employerForm.get('confirmPassword')?.value));  // Renommé ici
    this.employer.role = String(this.employerForm.get('role')?.value);  // Renommé ici
    this.employer.firstName = String(this.employerForm.get('firstName')?.value);  // Renommé ici
    this.employer.email = String(this.employerForm.get('email')?.value);  // Renommé ici
    this.employer.password = String(this.employerForm.get('password')?.value);  // Renommé ici
    this.employer.confirmPassword = String(this.employerForm.get('confirmPassword')?.value);  // Renommé ici

    console.log("employer", this.employerForm.value);  // Renommé ici
    this.employerService.addEmployer(this.employerForm.value).subscribe(
      data => {
        this.name = this.employerForm.value['firstname'];  // Renommé ici
        this.show = true;  
      }
    ); 
   
    
  }

  reset() {
    this.disabled = false;
    this.employer = new Employer();
    this.employerForm.reset();  // Renommé ici
    this.show = false; 
  }
}
