import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgramsComponent } from './programs/programs.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchPipe } from './search.pipe'
import {FormsModule } from "@angular/forms"
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProgramsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
