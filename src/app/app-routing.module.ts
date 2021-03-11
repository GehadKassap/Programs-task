import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProgramsComponent } from './programs/programs.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:"" , redirectTo: "home" , pathMatch:"full"},
  {path:"programs" , component:ProgramsComponent},
  {path:"home" , component:HomeComponent},
  {path:"progdetails/:id" , component:DetailsComponent},
  {path:"**" , component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
