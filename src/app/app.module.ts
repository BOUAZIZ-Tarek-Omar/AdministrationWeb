import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AdministrationsComponent } from './administrations/administrations.component';
import {RouterModule, Routes} from "@angular/router";
import { AboutComponent } from './about/about.component';
import {HttpModule} from "@angular/http";
import {AdministrationsService} from "../services/administrations.service";
import {FormsModule} from "@angular/forms";
import { NewAdministrationComponent } from './new-administration/new-administration.component';
import { EditAdministrationComponent } from './edit-administration/edit-administration.component';

const appRoutes:Routes=[
  {path:'about',component:AboutComponent},
  {path:'administrations',component:AdministrationsComponent},
  {path:'editAdministration/:id',component:EditAdministrationComponent},
  {path:'new-administration',component:NewAdministrationComponent},
  {path:'',redirectTo:'/about',pathMatch:'full'}

]
@NgModule({
  declarations: [
    AppComponent,
    AdministrationsComponent,
    AboutComponent,
    NewAdministrationComponent,
    EditAdministrationComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes ),HttpModule,FormsModule
  ],
  providers: [AdministrationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
