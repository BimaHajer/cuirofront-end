import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransporteurService } from '../../transporteur.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  form: FormGroup;
  filename: string = '';
  show: boolean = false;
  message: string = '';

  constructor(private fb: FormBuilder, private transporteurservice: TransporteurService) {
    // Initialize form with form controls and validators
    this.form = this.fb.group({
      name: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
      }),
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      password: this.fb.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, {
        validator: this.passwordMatchValidator
      })
    });
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  // Submit form data to the service
  submit() {
    if (this.form.valid) {
      const transporteur = {
        firstName: this.form.value.name.firstName,
        lastName: this.form.value.name.lastName,
        email: this.form.value.email,
        password: this.form.value.password.password,
        username: this.form.value.email,
        role: this.form.value.role
      };

      this.transporteurservice['createTransporteur'](transporteur).subscribe({
        next: (data: any) => {
          this.show = true;
          this.message = "Transporteur created successfully!";
          console.log('data', data);
        },
        error: (error: any) => {
          this.show = true;
          this.message = "An error occurred while creating the transporteur.";
          console.error('error', error);
        }
      });
    } else {
      this.show = true;
      this.message = "Please fill out the form correctly.";
    }
  }
}
