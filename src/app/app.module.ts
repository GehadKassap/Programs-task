import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgramsComponent } from './programs/programs.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchPipe } from './search.pipe'
import {FormsModule } from "@angular/forms";
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {ScrollingModule} from '@angular/cdk/scrolling';
import { DetailsComponent } from './details/details.component';
import { CitysearchPipe } from './citysearch.pipe';
import { FilterprogPipe } from './filterprog.pipe'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProgramsComponent,
    SearchPipe,
    NotfoundComponent,
    HomeComponent,
    DetailsComponent,
    CitysearchPipe,
    FilterprogPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ScrollingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
