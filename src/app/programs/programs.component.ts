import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetprogramsService } from './../getprograms.service';


@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})

export class ProgramsComponent implements OnInit {
  smartphone: any = [];
  allData:any = [];
  word:string ="" ;
  /******************* */
 /*****attrs for filtering data */
  city:any;
  school:any;
  field:any;
  lang:any = "all";
  sort:any ="lh";
  prog:any ="bach";
  /********************** */
  /******************** */

  radomNum = Math.floor((Math.random()*24)+1).toString();

  imgHolder:string =`../../assets/Images/img${this.radomNum}.png`;


    constructor(private _GetprogramsService:GetprogramsService) {

    _GetprogramsService.getAllData().subscribe( (data) =>
    {
      this.allData = data[2].data

    })

   }
   /******to get values of filter form  */
   getFilteredValues(info:NgForm):void
   {
          console.log(info.value)
   }

  ngOnInit(): void {
  }

}

