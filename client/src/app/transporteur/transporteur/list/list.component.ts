import { Component, OnInit } from '@angular/core';
import { TransporteurService } from '../../transporteur.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  transporteurs: any[] = [];  // Initialize transporteurs as an empty array
  message: string = '';
  router: any;

  constructor(private transporteurService: TransporteurService) {}

  ngOnInit(): void {
    this.loadTransporteurs();  // Load transporteurs when the component initializes
  }

  // Method to load all transporteurs
  loadTransporteurs() {
    this.transporteurService['getAllTransporteurs']().subscribe(
      (data: any[]) => {
        this.transporteurs = data;
      },
      (error: any) => {
        console.error('Error loading transporteurs:', error);
        this.message = 'Error loading transporteurs';
      }
    );
  }

  // Method to delete a transporteur by ID
  deleteTransporteur(id: number) {
    this.transporteurService['deleteTransporteur'](id).subscribe(
      () => {
        this.message = 'Transporteur deleted successfully!';
        this.loadTransporteurs();  // Reload transporteurs after deletion
      },
      (error: any) => {
        console.error('Error deleting transporteur:', error);
        this.message = 'Error deleting transporteur';
      }
    );
  }

  // Method to update a transporteur
  updateTransporteur(id: number) {
    this.router.navigate(['/transporteur/update', id]);
  }
}

