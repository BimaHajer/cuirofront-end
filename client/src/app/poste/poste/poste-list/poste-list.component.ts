import { Component } from '@angular/core';
import { Poste } from '../../autth';
import { PosteService } from '../../poste.service';

@Component({
  selector: 'app-poste-list',
  templateUrl: './poste-list.component.html',
  styleUrls: ['./poste-list.component.css']
})
export class PosteListComponent {

  data: any;
  number: any;
  id: number=8
  poste: Poste = new Poste()

  constructor(private posteservice:PosteService) {

     
  }
ngOnInit(): void {
  this.id=8
  this.posteservice.findPosteById(this.id).subscribe(data=>{
    this.poste=data[0]

    console.log('data',data)
    this.data=data[0]
    this.number=data[1]

  }) 
}
}

