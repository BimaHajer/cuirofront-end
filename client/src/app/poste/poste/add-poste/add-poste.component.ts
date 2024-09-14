import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PosteService } from '../../poste.service';
import { Poste } from '../../autth';

@Component({
  selector: 'app-add-poste',
  templateUrl: './add-poste.component.html',
  styleUrls: ['./add-poste.component.css']
})
export class AddPosteComponent implements OnInit {

  poste = new Poste();
  error: any;
  show: boolean = false;
  posteForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private posteService: PosteService) {
    // Initialisation du formulaire avec les champs requis
    this.posteForm = this.formBuilder.group({
      Title: ['', Validators.required],
      description: ['', Validators.required],
      salary: ['', Validators.required],
      lieu: ['', Validators.required],
      employmentType: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.show = false;
  }

  // Méthode pour soumettre le formulaire
  submit() {
    console.log('Submit clicked');
    console.log('Formulaire valide', this.posteForm.value);
    if (this.posteForm.valid) {
      console.log('Formulaire valide', this.posteForm.value);
      
      // Envoyer les données via le service
      this.posteService.addPoste(this.posteForm.value).subscribe(
        data => {
          this.show = true; // Affiche le message de succès
          console.log('Poste ajouté avec succès');
        },
        error => {
          this.error = error; // Gérer les erreurs
          console.log('Erreur lors de l\'ajout du poste', error);
        }
      );
    } else {
      console.log('Formulaire invalide');
    }
  }

  // Méthode pour réinitialiser le formulaire
  reset() {
    this.posteForm.reset();
    this.show = false;
    console.log('Formulaire réinitialisé');
  }
}