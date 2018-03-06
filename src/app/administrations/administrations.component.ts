import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {AdministrationsService} from "../../services/administrations.service";
import {Router} from "@angular/router";
import {administration} from "../../model/model.administration";


@Component({
  selector: 'app-a',
  templateUrl: './administrations.component.html',
  styleUrls: ['./administrations.component.css']
})
export class AdministrationsComponent implements OnInit {
  pageAdministrations:any;
  keyword:string="";
  currentPage:number=0;
  size:number=5;
  pages:Array<number>;
  constructor(public http:Http,public administrationservice:AdministrationsService,
              public router:Router) { }

  ngOnInit() {

  }

  dosearch(){
      this.administrationservice.getAdministrations(this.keyword,this.currentPage,this.size)
        .subscribe( data=>{
            this.pageAdministrations=data;
            this.pages=new Array(data.totalPages);
          },err=>{
            console.log(err);
          }
        )
    }

  chercher(){
    this.dosearch();
  }
  gotopage(i:number){
this.currentPage=i;
this.dosearch();
  }

  onEditAdministration(id:number){
this.router.navigate(['editAdministration',id])
  }
  onDeleteAdministration(c:administration){
let confirm=window.confirm('etes-vous sur de vouloir supprimer ?');
if (confirm==true){
  this.administrationservice.deleteAdministration(c.id)
    .subscribe(data=>{

        this.pageAdministrations.content.splice(
          this.pageAdministrations.content.indexOf(c),1
        );
      },err=>{
        console.log(err);
      }
    )
}

  }
}
