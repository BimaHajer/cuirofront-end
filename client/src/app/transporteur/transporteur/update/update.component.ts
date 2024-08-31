import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransporteurService } from '../../transporteur.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  form!: FormGroup;
  show: Boolean = false;
  filename: string = '';
  showError: boolean = false;
  message: string = '';
  transporteurId!: number;

  constructor(
    private fb: FormBuilder,
    private transporteurservice: TransporteurService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Initialize the form structure
    this.form = this.fb.group({
      name: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
      }),
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required]
    });

    // Fetch route parameters
    this.route.params.subscribe(params => {
      this.transporteurId = +params['id'];
      this.getTransporteur(this.transporteurId);
    });
  }

  // Fetch transporteur data by ID and patch the form with the retrieved data
  getTransporteur(id: number): void {
    this.transporteurservice['getTransporteurById'](id).subscribe((data: { firstName: any; lastName: any; email: any; role: any; }) => {
      this.form.patchValue({
        name: {
          firstName: data.firstName,
          lastName: data.lastName,
        },
        email: data.email,
        role: data.role
      });
    });
  }

  // Submit updated transporteur data
  submit(): void {
    console.log("form", this.form.value);
    const updatedTransporteur = {
      firstName: this.form.value.name.firstName,
      lastName: this.form.value.name.lastName,
      email: this.form.value.email,
      role: this.form.value.role
    };

    this.transporteurservice['updateTransporteur'](this.transporteurId, updatedTransporteur).subscribe(
      (response: any) => {
        this.show = true;
        this.message = "Transporteur updated successfully!";
        console.log('response', response);
      },
      () => {
        this.showError = true;
        this.message = "Please fill out the form correctly.";
      }
    );
  }
}

