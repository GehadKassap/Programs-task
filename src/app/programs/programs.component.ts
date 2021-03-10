import { Component, OnInit } from '@angular/core';
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
  lang:any;
  /******************** */
  imgSrc:string="6";
  radomNum = Math.floor((Math.random()*24)+1).toString();

  imgHolder:string =`../../assets/Images/img${this.radomNum}.png`;


    constructor(private _GetprogramsService:GetprogramsService) {

    _GetprogramsService.getAllData().subscribe( (data) =>
    {
      this.allData = data[2].data

    })

   }

  ngOnInit(): void {
  }

}

