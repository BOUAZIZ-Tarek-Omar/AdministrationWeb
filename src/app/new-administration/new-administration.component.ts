import { Component, OnInit } from '@angular/core';
import {administration} from "../../model/model.administration";
import {AdministrationsService} from "../../services/administrations.service";

@Component({
  selector: 'app-new-administration',
  templateUrl: './new-administration.component.html',
  styleUrls: ['./new-administration.component.css']
})
export class NewAdministrationComponent implements OnInit {
administration:administration=new administration;
mode:number=1;


  constructor(public administrationservice:AdministrationsService) { }

  ngOnInit() {
  }


saveAdministration(){
  this.administrationservice.saveAdministration(this.administration)
    .subscribe(data=>{
      this.administration=data;
      this.mode=2;
    },err=>{
      console.log(err);
      }
    )
}
}
