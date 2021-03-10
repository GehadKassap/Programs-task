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
  constructor(private _GetprogramsService:GetprogramsService) {

    _GetprogramsService.getAllData().subscribe( (data) =>
    {
      this.allData = data[2].data
      console.log(this.allData)
    })

   }

  ngOnInit(): void {
  }

}
