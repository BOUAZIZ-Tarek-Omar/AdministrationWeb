import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {administration} from "../model/model.administration";

@Injectable()
export class AdministrationsService{
constructor(public http:Http){

}
getAdministrations(keyword:string,page:number,size:number){
return this.http.get("http://localhost:8080/chercherAdministrations?mc="+keyword+"&size="+size+"&page="+page)
  .map(resp => resp.json());
}
//modification
  getAdministration(id:number){
    return this.http.get("http://localhost:8080/administrations/"+id)
      .map(resp => resp.json());
  }

  saveAdministration(administration:administration){
    return this.http.post("http://localhost:8080/administrations",administration)
      .map(resp => resp.json());
  }

  updateAdministration(administration:administration){
    return this.http.put("http://localhost:8080/administrations/"+administration.id,administration)
      .map(resp => resp.json());
  }

  deleteAdministration(id:number){
    return this.http.delete("http://localhost:8080/administrations/"+id)
      .map(resp => resp.json());
  }
}
