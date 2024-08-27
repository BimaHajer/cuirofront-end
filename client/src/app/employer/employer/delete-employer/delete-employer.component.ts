import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployerService } from '../../employer.service';

@Component({
  selector: 'app-delete-employer',
  templateUrl: './delete-employer.component.html',
  styleUrls: ['./delete-employer.component.css']
})
export class DeleteEmployerComponent implements OnInit {

// employer: any;
  constructor(private employerservice:EmployerService) { }
  @Input() 
  listEmployer: any;
  @Output()
  closed= new EventEmitter<boolean>()
  @Output() saved= new EventEmitter<boolean>()
  ngOnInit(): void {
    
  }
  actionClose()
  {this.closed.emit(true) }
  deleteConfirm(){
    this.employerservice.deleteEmployer(this.listEmployer
    ).subscribe(
      res => {
        console.log("deleteCategory",res)
        this.saved.emit(true);
      }   

    ); 
}
}
