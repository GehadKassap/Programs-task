import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute} from '@angular/router';
import { GetprogramsService } from './../getprograms.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 ind:any;
 progDetails :any= {};
  constructor(private _ActivatedRoute:ActivatedRoute , _GetprogramsService:GetprogramsService) {
  this.ind = _ActivatedRoute.snapshot.paramMap.get("id");


   _GetprogramsService.getAllData().subscribe((data)=>{
     this.progDetails =  data[2].data[this.ind]
   })
   }

  ngOnInit(): void {
  }

}
