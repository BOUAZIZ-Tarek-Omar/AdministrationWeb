import { Component, OnInit } from '@angular/core';
import {administration} from "../../model/model.administration";
import {ActivatedRoute, Router} from "@angular/router";
import {AdministrationsService} from "../../services/administrations.service";

@Component({
  selector: 'app-edit-administration',
  templateUrl: './edit-administration.component.html',
  styleUrls: ['./edit-administration.component.css']
})
export class EditAdministrationComponent implements OnInit {
mode:number=1;
administration:administration=new administration;
idAdministration:number;

  constructor(public activatedRoute:ActivatedRoute,
              public AdministrationsService:AdministrationsService,
              public router:Router ) {
    this.idAdministration=activatedRoute.snapshot.params['id'];



  }

  ngOnInit() {
this.AdministrationsService.getAdministration(this.idAdministration)
  .subscribe(data=>{
      this.administration=data;
    },err=>{
    console.log(err);
    }



    )
  }
updateAdministration(){
this.AdministrationsService.updateAdministration(this.administration)
  .subscribe(data=>{
    alert("mise à jour effectuée");
    this.router.navigate(['administrations']);
  },err=>{
    console.log(err);
    alert("Probléme");
  })
}
}
